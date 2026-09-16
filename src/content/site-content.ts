import { images } from "@/lib/images";

export const heroContent = {
  titleLead: "Your Fertility",
  titleRest: "Journey",
  titleAccent: "Starts Here",
  description:
    "Expert, compassionate care from the clinic that pioneered IVF. Advanced treatments, internationally trained specialists and a plan built around you.",
  primary: { href: "/book-appointment", label: "Book Appointment" },
  secondary: { href: "/treatments", label: "Explore Treatments" },
  trust: {
    title: "5,000+ families",
    subtitle: "have started their journey with us",
    avatars: [images.familyOne, images.familyTwo, images.familyThree],
  },
} as const;

export const supportCards = [
  {
    title: "IVF Treatment",
    href: "/treatments/ivf",
    image: images.supportIvf,
  },
  {
    title: "Preserve My Fertility",
    href: "/treatments/egg-freezing",
    image: images.supportPreserve,
  },
  {
    title: "Family Balancing & Genetics",
    href: "/treatments/genetic-testing",
    image: images.supportFamilyBalancing,
  },
  {
    title: "Male Fertility",
    href: "/treatments/male-fertility",
    image: images.supportMaleFertility,
  },
] as const;

export const supportPromo = {
  body: "Every fertility journey is different. Choose what best describes your needs and discover the right information and support.",
  cta: { href: "/book-appointment", label: "Book a Consultation" },
} as const;

export const stats = [
  { value: "80%", label: "Success Rates" },
  { value: "3270+", label: "Live Births" },
  { value: "15+", label: "Years of Trusted Care" },
] as const;

export const fertilityHealth = {
  titleLead: "Understand Your",
  titleAccent: "Fertility Health",
  description:
    "Fertility care should feel clear, not overwhelming. We explain every option, set honest expectations and design a plan that respects your health, values and timeline.",
  cta: { href: "/about", label: "Read More" },
  note: "Start with a confidential assessment — cycle history, hormone testing and a specialist review, all in one visit.",
  trust: {
    title: "Care in 3 emirates",
    subtitle: "Dubai · Abu Dhabi · Al Ain",
    avatars: [images.doctorOne, images.doctorTwo, images.doctorThree],
  },
} as const;

export const whyChoose = [
  {
    number: "01",
    title: "Experienced Specialists",
    body: "Personalised care from experienced fertility professionals dedicated to your journey.",
  },
  {
    number: "02",
    title: "Advanced Fertility Care",
    body: "Evidence-based treatments delivered with advanced laboratory science and clinical precision.",
  },
  {
    number: "03",
    title: "Personalised Treatment Plans",
    body: "Every pathway is tailored to your diagnosis, goals and pace — never a one-size-fits-all protocol.",
  },
  {
    number: "04",
    title: "Support Throughout",
    body: "Specialists, nurses and coordinators stay with you from first enquiry through to pregnancy care.",
  },
] as const;

export const whyChooseMedia = {
  badge: "Play Arabic Video",
  cta: { href: "/about", label: "About Us" },
  description:
    "We combine medical expertise with compassionate, personalised care to support you at every step.",
  image: {
    src: "/images/why-choose-video.png",
    alt: "A family sharing a warm moment together at home",
  },
} as const;

export const testimonials = [
  {
    quote: "After years of waiting, Bourn Hall gave us more than treatment. They gave us our daughter.",
    name: "Aisha & Omar",
    treatment: "IVF, Dubai",
    image: images.familyOne,
  },
  {
    quote: "Every appointment felt calm, private and clear. We always knew the next step.",
    name: "Layla M.",
    treatment: "Egg freezing, Abu Dhabi",
    image: images.familyTwo,
  },
  {
    quote: "The genetics team explained everything with kindness. We felt informed, never rushed.",
    name: "Sara & James",
    treatment: "PGT-A, Dubai",
    image: images.familyThree,
  },
  {
    quote: "From our first call to bringing our son home, the care was personal and expert.",
    name: "Fatima & Hassan",
    treatment: "ICSI, Al Ain",
    image: images.familyFour,
  },
] as const;

export const faqs = [
  {
    question: "When should I see a fertility specialist?",
    answer:
      "If you are under 35 and have been trying to conceive for 12 months, or over 35 and have been trying for 6 months, a consultation can help. You should also seek advice sooner if you have irregular cycles, known gynaecological or male-factor issues, or a history of miscarriage.",
  },
  {
    question: "What happens at the first consultation?",
    answer:
      "Your specialist reviews your medical history, discusses previous tests or treatments, and recommends diagnostics where needed. You leave with a clear, personalised plan — not a one-size-fits-all protocol.",
  },
  {
    question: "How long does an IVF cycle take?",
    answer:
      "Most IVF cycles take around six to nine weeks from consultation to pregnancy test, depending on your protocol, whether embryos are frozen, and whether genetic testing is included.",
  },
  {
    question: "Are Bourn Hall clinics accredited?",
    answer:
      "Yes. Bourn Hall Dubai was the first stand-alone fertility centre in the Middle East to receive JCI accreditation. Our UAE clinics also hold laboratory quality accreditations and follow international clinical standards.",
  },
  {
    question: "Do you treat male infertility?",
    answer:
      "Yes. Male-factor infertility is assessed and treated with andrology, urology support, ICSI and surgical sperm retrieval when required. Both partners are included in the care plan.",
  },
  {
    question: "Can international patients be treated at Bourn Hall UAE?",
    answer:
      "Yes. We support patients travelling to the UAE with virtual consultations, coordinated diagnostics and a dedicated patient pathway across Dubai, Abu Dhabi and Al Ain.",
  },
] as const;

export const faqHelp = {
  title: "Still have questions?",
  body: "Our patient coordinators answer honestly and confidentially — in English or Arabic.",
  cta: { href: "/contact", label: "Contact Us" },
} as const;

export const journeySteps = [
  {
    title: "Consultation",
    body: "A calm first visit to understand your history and options.",
  },
  {
    title: "Personalised plan",
    body: "Diagnostics and a treatment path designed around you.",
  },
  {
    title: "Ongoing support",
    body: "Specialists, nurses and coordinators with you at every step.",
  },
] as const;

export const resources = [
  {
    slug: "success-rates",
    title: "Understanding IVF success rates",
    excerpt:
      "Age, diagnosis and laboratory quality all shape outcomes. Here is how we talk about success honestly.",
    category: "Guide",
    image: images.consultation,
  },
  {
    slug: "preparing-for-ivf",
    title: "How to prepare for your first IVF cycle",
    excerpt: "Practical steps for tests, lifestyle and questions to bring to your specialist.",
    category: "Guide",
    image: images.preservation,
  },
  {
    slug: "egg-freezing-age",
    title: "When to consider egg freezing",
    excerpt:
      "A clear look at fertility windows, storage and what vitrification can — and cannot — promise.",
    category: "Insights",
    image: images.embryo,
  },
] as const;
