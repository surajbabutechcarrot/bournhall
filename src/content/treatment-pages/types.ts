export type TreatmentPageSection = {
  id: string;
  navLabel: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  groups?: { title: string; body: string }[];
  list?: string[];
  listIntro?: string;
  steps?: { title: string; body: string }[];
  stepsIntro?: string[];
  callouts?: string[];
};

export type TreatmentPageContent = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  crumbs: { label: string; href?: string }[];
  image: { src: string; alt: string };
  sections: TreatmentPageSection[];
};
