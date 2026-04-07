import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snapsetech | Solutions digitales sur mesure",
  description:
    "Snapsetech conçoit des sites, plateformes et outils métier simples, solides et pensés pour accélérer votre digitalisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
