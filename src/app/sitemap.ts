import type { MetadataRoute } from "next";
import { locations } from "@/content/locations";
import { resources } from "@/content/site-content";
import { specialists } from "@/content/specialists";
import { treatments } from "@/content/treatments";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/treatments",
    "/about",
    "/clinics",
    "/doctors",
    "/patient-stories",
    "/resources",
    "/contact",
    "/book-appointment",
    "/faq",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicRoutes = [
    ...treatments.map((item) => `/treatments/${item.slug}`),
    ...locations.map((item) => `/clinics/${item.slug}`),
    ...specialists.map((item) => `/doctors/${item.slug}`),
    ...resources.map((item) => `/resources/${item.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
