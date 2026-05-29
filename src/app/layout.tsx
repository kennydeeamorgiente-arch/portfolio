import type { Metadata } from "next";
import { ScrollStory } from "@/components/interactive/scroll-story";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Portfolio`,
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
      <body>
        <ScrollStory />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
