import { inter, poppins, tasaExplorer } from "@/assets/localFonts";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable} ${tasaExplorer.variable}`}>
      {children}
    </div>
  );
}
