import { images } from "@/lib/images";

export const locations = [
  {
    slug: "dubai",
    name: "Dubai",
    title: "Bourn Hall Clinic Dubai",
    address: "Al Hudaiba Awards Buildings, Block C, 7th Floor, Jumeirah, Dubai, UAE",
    phone: "+971 4 705 5056",
    hours: "Mon–Fri 8:00am–6:00pm · Sat 9:00am–2:00pm",
    image: images.dubai,
    description:
      "Our 22,000 sq ft Dubai clinic includes a controlled-access clean-room laboratory and a full team of fertility specialists, embryologists and nurses.",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    title: "Bourn Hall Clinic Abu Dhabi",
    address: "Gulf Villa 1 & 2, Al Bateen, Abu Dhabi, UAE",
    phone: "+971 2 222 1216",
    hours: "Mon–Fri 8:00am–5:00pm",
    image: images.abuDhabi,
    description:
      "Located in Al Bateen, our Abu Dhabi clinic brings pioneering IVF science and JCI-accredited care to the capital.",
  },
  {
    slug: "al-ain",
    name: "Al Ain",
    title: "Bourn Hall Clinic Al Ain",
    address: "Al Ain Town Center, Khalifa Street, 4th Floor, Al Ain, UAE",
    phone: "800-IVF (483)",
    hours: "Mon–Fri 8:00am–5:00pm",
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
