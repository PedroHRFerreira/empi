import type { Metadata } from "next";
import { inter, poppins, tasaExplorer } from "@/assets/localFonts";
import "../assets/globals.scss";

export const metadata: Metadata = {
  title: "EMPI Autocenter",
  description: "Mecânica e elétrica automotiva em Governador Valadares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} ${tasaExplorer.variable}`}>
        {children}
      </body>
    </html>
  );
}
