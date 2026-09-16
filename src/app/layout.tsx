import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#fffdfc",
  width: "device-width",
  initialScale: 1,
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Fertility Clinic UAE`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "Bourn Hall",
    "IVF UAE",
    "fertility clinic Dubai",
    "ICSI Abu Dhabi",
    "egg freezing",
    "fertility preservation",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} | Fertility Clinic UAE`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Fertility Clinic UAE`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
