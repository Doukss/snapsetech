import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: siteDictionary.metadata.title,
  description: siteDictionary.metadata.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
