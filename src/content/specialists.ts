import { images } from "@/lib/images";

export const specialists = [
  {
    slug: "dr-ghada-hussein",
    name: "Dr. Ghada Hussein",
    role: "Medical Director, Abu Dhabi",
    specialty: "Consultant, Reproductive Medicine",
    clinic: "Abu Dhabi",
    image: images.doctorOne,
    bio: "Medical Director and Consultant in Reproductive Medicine and Infertility, leading patient-centred fertility care in Abu Dhabi.",
  },
  {
    slug: "dr-sajida-detho",
    name: "Dr. Sajida Detho",
    role: "Medical Director, Al Ain",
    specialty: "Consultant, Reproductive Medicine",
    clinic: "Al Ain",
    image: images.doctorTwo,
    bio: "Medical Director and Consultant in Reproductive Medicine, supporting families across Al Ain with evidence-based treatment.",
  },
  {
    slug: "dr-shazia-magray",
    name: "Dr. Shazia Magray",
    role: "Medical Director, Dubai",
    specialty: "Specialist, Reproductive Medicine",
    clinic: "Dubai",
    image: images.doctorFive,
    bio: "Specialist in Obstetrics, Gynaecology and Reproductive Medicine, leading the Dubai clinic with a calm, personal approach.",
  },
  {
    slug: "dr-majeed-aloum",
    name: "Dr. Majeed Aloum",
    role: "Consultant",
    specialty: "Reproductive Medicine & Infertility",
    clinic: "Abu Dhabi",
    image: images.doctorThree,
    bio: "Consultant in Reproductive Medicine and Infertility with extensive experience across complex fertility cases.",
  },
  {
    slug: "dr-gautam-allahbadia",
    name: "Dr. Gautam Allahbadia",
    role: "Consultant",
    specialty: "Reproductive Medicine & Infertility",
    clinic: "Dubai",
    image: images.doctorFour,
    bio: "Consultant in Reproductive Medicine, bringing international clinical expertise to Bourn Hall UAE.",
  },
  {
    slug: "dr-larissa-schindler",
    name: "Dr. Larissa Schindler",
    role: "Specialist",
    specialty: "Reproductive Medicine & Infertility",
    clinic: "Dubai",
    image: images.doctorSix,
    bio: "Specialist in Reproductive Medicine, supporting patients with personalised treatment plans and clear communication.",
  },
] as const;

export type Specialist = (typeof specialists)[number];

export function getSpecialist(slug: string) {
  return specialists.find((item) => item.slug === slug);
}
