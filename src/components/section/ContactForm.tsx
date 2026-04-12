"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import type { FormDictionary } from "@/i18n/dictionaries";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

type ContactFormProps = {
  copy: FormDictionary;
};

function FieldError({ error }: { error?: string }) {
  if (!error) return null;

  return <p className="mt-2 text-sm text-rose-300">{error}</p>;
}

export default function ContactForm({ copy }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(255,255,255,0.05))] p-6 backdrop-blur-sm sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <label className="block">
          <span className="text-sm text-white/65">{copy.nameLabel}</span>
          <input
            type="text"
            name="name"
            required
            minLength={2}
            placeholder={copy.namePlaceholder}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
          />
          <FieldError error={state.fieldErrors?.name} />
        </label>

        <label className="block">
          <span className="text-sm text-white/65">{copy.companyLabel}</span>
          <input
            type="text"
            name="company"
            required
            minLength={2}
            placeholder={copy.companyPlaceholder}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
          />
          <FieldError error={state.fieldErrors?.company} />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm text-white/65">{copy.emailLabel}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={copy.emailPlaceholder}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
          />
          <FieldError error={state.fieldErrors?.email} />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm text-white/65">{copy.messageLabel}</span>
          <textarea
            rows={6}
            name="message"
            required
            minLength={20}
            placeholder={copy.messagePlaceholder}
            className="mt-2 w-full rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
          />
          <FieldError error={state.fieldErrors?.message} />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite" className="max-w-md text-sm leading-6 text-white/55">
          {state.message || copy.helperText}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isPending ? copy.submitting : copy.submit}
        </button>
      </div>
    </form>
  );
}
