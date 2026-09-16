import { locations } from "@/content/locations";
import { site } from "@/lib/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}${site.ogImage}`,
  description: site.description,
  medicalSpecialty: "https://schema.org/ReproductiveHealth",
  areaServed: "AE",
  department: locations
    .filter((location) => location.slug !== "virtual")
    .map((location) => ({
      "@type": "MedicalClinic",
      name: location.title,
      address: location.address,
      telephone: location.phone,
    })),
};

export const faqJsonLd = (items: readonly { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
