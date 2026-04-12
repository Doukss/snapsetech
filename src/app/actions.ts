"use server";

import { siteDictionary, type FormDictionary } from "@/i18n/dictionaries";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "company" | "email" | "message", string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getTrimmedValue = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim();

const getFormMessages = (): FormDictionary["server"] =>
  siteDictionary.contact.form.server;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const messages = getFormMessages();

  const honey = getTrimmedValue(formData, "website");
  if (honey) {
    return {
      status: "success",
      message: messages.honeypotAccepted,
    };
  }

  const name = getTrimmedValue(formData, "name");
  const company = getTrimmedValue(formData, "company");
  const email = getTrimmedValue(formData, "email");
  const message = getTrimmedValue(formData, "message");

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (name.length < 2) {
    fieldErrors.name = messages.nameError;
  }

  if (company.length < 2) {
    fieldErrors.company = messages.companyError;
  }

  if (!emailPattern.test(email)) {
    fieldErrors.email = messages.emailError;
  }

  if (message.length < 20) {
    fieldErrors.message = messages.messageError;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: messages.fieldsError,
      fieldErrors,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return {
      status: "error",
      message: messages.envMissing,
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject: `Nouveau contact Snapsetech - ${name}`,
      text: [
        `Nom: ${name}`,
        `Entreprise: ${company}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>Nouveau message depuis le site Snapsetech</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message: messages.sendFailed,
    };
  }

  return {
    status: "success",
    message: messages.sendSuccess,
  };
}
