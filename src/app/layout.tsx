import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { profile } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#dcdacf] text-[#38292b] antialiased [font-family:Geist,Inter,system-ui,sans-serif]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
