import { images } from "@/lib/images";

export const locations = [
  {
    slug: "dubai",
    name: "Dubai",
    title: "Bourn Hall Clinic Dubai",
    address: "Dubai Healthcare City, Building 64, Block B",
    phone: "+971 4 429 8400",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    image: images.dubai,
    description:
      "Our 22,000 sq ft Dubai clinic includes a controlled-access clean-room laboratory and a full team of fertility specialists, embryologists and nurses.",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    title: "Bourn Hall Clinic Abu Dhabi",
    address: "Khalidiyah, Al Nahyan Camp Area, Abu Dhabi",
    phone: "+971 2 222 1218",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    image: images.abuDhabi,
    description:
      "Located in Khalidiyah, our Abu Dhabi clinic brings pioneering IVF science and JCI-accredited care to the capital.",
  },
  {
    slug: "al-ain",
    name: "Al Ain",
    title: "Bourn Hall Clinic Al Ain",
    address: "Al Jimi Area, Al Ain, Abu Dhabi Emirate",
    phone: "800-IVF (483)",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    image: images.alAin,
    description:
      "Our Al Ain clinic offers comprehensive fertility care with andrology, embryology and cryopreservation laboratories.",
  },
  {
    slug: "virtual",
    name: "Virtual",
    title: "Virtual consultation",
    address: "Available across the UAE and internationally",
    phone: "800-IVF (483)",
    hours: "By appointment",
    image: images.virtual,
    description:
      "Start your journey from home with a confidential virtual consultation, then continue care at the clinic that suits you.",
  },
] as const;

export type Location = (typeof locations)[number];

export function getLocation(slug: string) {
  return locations.find((item) => item.slug === slug);
}
