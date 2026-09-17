import { images } from "@/lib/images";

export const specialists = [
  {
    slug: "dr-ghada-hussein",
    name: "Dr. Ghada Hussein",
    role: "Medical Director",
    specialty: "Consultant, Reproductive Medicine",
    clinic: "Abu Dhabi",
    image: images.doctorOne,
    bio: "Medical Director and Consultant in Reproductive Medicine and Infertility, leading patient-centred fertility care in Abu Dhabi.",
  },
  {
    slug: "dr-sara-al-nuaimi",
    name: "Dr. Sara Al Nuaimi",
    role: "Consultant Fertility Specialist",
    specialty: "Reproductive Medicine & Infertility",
    clinic: "Dubai",
    image: images.doctorTwo,
    bio: "Consultant Fertility Specialist providing personalised reproductive care for families across Dubai.",
  },
  {
    slug: "dr-sajida-detho",
    name: "Dr. Sajida Detho",
    role: "Medical Director",
    specialty: "Consultant, Reproductive Medicine",
    clinic: "Al Ain",
    image: images.doctorThree,
    bio: "Medical Director and Consultant in Reproductive Medicine, supporting families across Al Ain with evidence-based treatment.",
  },
  {
    slug: "dr-shazia-magray",
    name: "Dr. Shazia Magray",
    role: "Medical Director",
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
    image: images.doctorFour,
    bio: "Consultant in Reproductive Medicine and Infertility with extensive experience across complex fertility cases.",
  },
  {
    slug: "dr-gautam-allahbadia",
    name: "Dr. Gautam Allahbadia",
    role: "Consultant",
    specialty: "Reproductive Medicine & Infertility",
    clinic: "Dubai",
    image: images.doctorSix,
    bio: "Consultant in Reproductive Medicine, bringing international clinical expertise to Bourn Hall UAE.",
  },
] as const;

export type Specialist = (typeof specialists)[number];

export const doctorClinics = ["All", "Dubai", "Abu Dhabi", "Al Ain"] as const;
export type DoctorClinicFilter = (typeof doctorClinics)[number];

export const doctorsPageContent = {
  title: "Doctors",
  description:
    "Our expert team at Bourn Hall are delighted to support you with your patient referrals. Please submit your patient referrals to our team members below.",
  primaryCta: { href: "/book-appointment", label: "Book a Consultation" },
  secondaryCta: { href: "/treatments", label: "Explore Fertility Treatments" },
  filterLabel: "Show me doctors from:",
} as const;

export function getSpecialist(slug: string) {
  return specialists.find((item) => item.slug === slug);
}
