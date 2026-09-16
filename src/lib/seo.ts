import type { Metadata } from "next";
import { site } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  keywords,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image || site.ogImage;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.legalName,
      locale: site.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
