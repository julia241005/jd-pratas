import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD Pratas | Elegância em cada detalhe",
  description:
    "JD Pratas. Acessórios e joias para completar seu estilo com elegância.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}