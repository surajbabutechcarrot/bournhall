import { getTreatment } from "@/content/treatments";
import { eggFreezingPage } from "./egg-freezing";
import { icsiPage, ivfPage } from "./assisted";
import {
  fertilityPreservationPage,
  geneticTestingPage,
  iuiPage,
  maleFertilityPage,
} from "./other";
import type { TreatmentPageContent } from "./types";

const pages: Record<string, TreatmentPageContent> = {
  "egg-freezing": eggFreezingPage,
  ivf: ivfPage,
  icsi: icsiPage,
  iui: iuiPage,
  "genetic-testing": geneticTestingPage,
  "male-fertility": maleFertilityPage,
  "fertility-preservation": fertilityPreservationPage,
};

export function getTreatmentPage(slug: string): TreatmentPageContent | undefined {
  if (pages[slug]) return pages[slug];

  const treatment = getTreatment(slug);
  if (!treatment) return undefined;

  return {
    slug: treatment.slug,
    title: treatment.name,
    subtitle: treatment.summary,
    intro: treatment.description,
    crumbs: [
      { label: "Homepage", href: "/" },
      { label: "Treatments", href: "/treatments" },
      { label: treatment.name },
    ],
    image: treatment.image,
    sections: [
      {
        id: "about",
        navLabel: "About this treatment",
        title: "About this treatment",
        paragraphs: [treatment.description],
        list: [...treatment.highlights],
      },
    ],
  };
}

export type { TreatmentPageContent, TreatmentPageSection } from "./types";
