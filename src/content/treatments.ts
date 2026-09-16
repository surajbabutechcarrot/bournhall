import { images } from "@/lib/images";

export const treatments = [
  {
    slug: "ivf",
    name: "IVF Treatment",
    shortName: "IVF",
    category: "Assisted reproduction",
    summary:
      "In-vitro fertilisation — one of the most established and effective assisted reproduction treatments available.",
    card: { illustration: "/illustrations/treatment-ivf.svg", tone: "lilac" } as const,
    description:
      "IVF at Bourn Hall is built on the science that created the world’s first IVF baby. Every cycle is tailored to your diagnosis, with internationally trained specialists and a JCI-accredited laboratory.",
    image: images.ivfCare,
    icon: "flask" as const,
    tone: "lilac" as const,
    highlights: [
      "Personalised stimulation protocols",
      "Blastocyst culture and time-lapse monitoring",
      "Single embryo transfer where clinically suitable",
    ],
  },
  {
    slug: "icsi",
    name: "ICSI",
    shortName: "ICSI",
    category: "Assisted reproduction",
    summary: "Intracytoplasmic sperm injection for cases where standard IVF may not be sufficient.",
    card: { image: images.icsi, tone: "lilac" } as const,
    description:
      "ICSI places a single sperm directly into an egg. It is often recommended for low sperm count, previous fertilisation failure, or when using frozen or surgically retrieved sperm.",
    image: images.embryo,
    icon: "microscope" as const,
    tone: "featured" as const,
    highlights: [
      "Dedicated andrology support",
      "Surgical sperm retrieval pathways",
      "Integrated male fertility care",
    ],
  },
  {
    slug: "iui",
    name: "IUI",
    shortName: "IUI",
    category: "Assisted reproduction",
    summary: "Intrauterine insemination — a less invasive fertility treatment suitable for many patients.",
    card: { illustration: "/illustrations/treatment-iui.svg", tone: "petal" } as const,
    description:
      "Intrauterine insemination can be a first-line treatment for unexplained infertility, mild male factor or ovulation issues. We time treatment around your natural or stimulated cycle.",
    image: images.lab,
    icon: "stethoscope" as const,
    tone: "petal" as const,
    highlights: [
      "Minimally invasive pathway",
      "Timed with ovulation monitoring",
      "Suitable for selected diagnoses",
    ],
  },
  {
    slug: "egg-freezing",
    name: "Egg Freezing",
    shortName: "Egg Freezing",
    category: "Preservation",
    summary:
      "Preserve your fertility on your own timeline with our advanced egg vitrification process.",
    card: { image: images.eggFreezing, tone: "lilac" } as const,
    description:
      "Egg freezing gives you more choice about when to start a family. We use proven vitrification techniques in a controlled embryology laboratory.",
    image: images.preservation,
    icon: "snowflake" as const,
    tone: "mist" as const,
    highlights: [
      "Vitrification for egg survival",
      "Clear counselling on expected outcomes",
      "Flexible scheduling around your life",
    ],
  },
  {
    slug: "genetic-testing",
    name: "Genetic Testing",
    shortName: "PGT",
    category: "Genetics",
    summary:
      "PGT-A and PGT-M to support healthier embryo selection and family balancing where appropriate.",
    card: { image: images.geneticTesting, tone: "lilac" } as const,
    description:
      "Preimplantation genetic testing can identify chromosomal or single-gene conditions before transfer, helping you make informed decisions with our genetics team.",
    image: images.geneticTesting,
    icon: "dna" as const,
    tone: "petal" as const,
    highlights: [
      "In-house genetics pathway",
      "PGT-A and PGT-M options",
      "Specialist counselling at every step",
    ],
  },
  {
    slug: "fertility-preservation",
    name: "Fertility Preservation",
    shortName: "Preservation",
    category: "Preservation",
    summary:
      "Egg, sperm and embryo freezing for medical or personal reasons, including before cancer treatment.",
    card: { illustration: "/illustrations/treatment-ivf.svg", tone: "petal" } as const,
    description:
      "Whether you are planning ahead or facing medical treatment that may affect fertility, we offer discreet, timely preservation of eggs, sperm and embryos.",
    image: images.preservation,
    icon: "testTube" as const,
    tone: "lilac" as const,
    highlights: [
      "Egg, sperm and embryo freezing",
      "Urgent oncology pathways",
      "Long-term storage guidance",
    ],
  },
  {
    slug: "male-fertility",
    name: "Male Fertility",
    shortName: "Male Fertility",
    category: "Diagnostics",
    summary:
      "Comprehensive andrology, diagnosis and treatment for male-factor infertility.",
    card: { illustration: "/illustrations/treatment-iui.svg", tone: "lilac" } as const,
    description:
      "Male fertility is assessed with the same care as female fertility. Our urologists and andrologists diagnose and treat low count, motility issues and surgical sperm retrieval needs.",
    image: images.lab,
    icon: "user" as const,
    tone: "mist" as const,
    highlights: [
      "Full semen analysis",
      "Urology and andrology clinics",
      "TESA and micro-TESE pathways",
    ],
  },
] as const;

export type Treatment = (typeof treatments)[number];

export function getTreatment(slug: string) {
  return treatments.find((item) => item.slug === slug);
}

export const treatmentCategories = [
  "All",
  "Assisted reproduction",
  "Preservation",
  "Genetics",
  "Diagnostics",
] as const;
