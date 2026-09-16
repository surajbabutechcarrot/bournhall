import { images } from "@/lib/images";

export const aboutHero = {
  title: "Pioneering Fertility Care, Where Hope Blooms.",
  description:
    "From the birthplace of IVF to clinics across the UAE, Bourn Hall continues a legacy of science, compassion and families made possible.",
  primary: { href: "/book-appointment", label: "Book a Consultation" },
  secondary: { href: "#different", label: "Find out why choose us" },
  image: images.consultation,
} as const;

export const aboutLegacy = {
  eyebrow: "Who We Are",
  title: "A Legacy of Fertility Care. A Future Built Around You.",
  paragraphs: [
    "Bourn Hall was founded by the pioneers behind the world’s first IVF baby. That heritage still guides how we practise — rigorous science, honest counselling and care that respects every family’s story.",
    "Across Dubai, Abu Dhabi and Al Ain, our specialists, embryologists and nurses work as one team so your journey feels clear, personal and supported at every step.",
  ],
  image: images.clinic,
  card: {
    title: "Part of a trusted healthcare network",
    body: "Bourn Hall UAE partners with leading healthcare groups to deliver internationally recognised fertility care close to home.",
  },
} as const;

export const aboutDifferent = {
  titleLead: "What Makes Bourn Hall",
  titleAccent: "Different?",
  intro:
    "Fertility care is about more than treatment. It is about experience, trust, expertise and personalised support throughout your journey.",
  image: {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    alt: "Adult hands gently holding a newborn baby’s feet",
  },
  featuresLeft: [
    {
      title: "Pioneers in IVF",
      body: "Bourn Hall led the way in developing the medical techniques that made IVF possible for families worldwide.",
    },
    {
      title: "Nobel Prize in Medicine",
      body: "Our pioneering work in reproductive medicine has been recognised with a Nobel Prize in Medicine.",
    },
    {
      title: "Internationally Trained Team of Clinicians",
      body: "Care delivered by an internationally trained team of clinicians dedicated to your outcomes.",
    },
    {
      title: "JCI Accredited Fertility Clinic",
      body: "The first JCI Quality Accredited Fertility Clinic in the Middle East.",
    },
  ],
  featuresRight: [
    {
      title: "Confidentiality & Discretion",
      body: "A private and discreet approach throughout your fertility journey.",
    },
    {
      title: "Holistic Care",
      body: "Including physical, emotional and psychological support at every stage.",
    },
    {
      title: "In-house Genetics Lab",
      body: "Access to an in-house Genetics Lab as part of our fertility care.",
    },
    {
      title: "Personalised & Complete Reproductive Care",
      body: "Tailored fertility care with comprehensive patient and family support through Mediclinic Middle East.",
    },
  ],
  stats: [
    { value: "80%", label: "Success Rates" },
    { value: "7230+", label: "Live Births" },
    { value: "40+", label: "Years of Trusted Care" },
  ],
} as const;

export const aboutHistory = {
  title: "Our History",
  image: images.consultation,
  overlay: {
    title: "A Legacy That Changed Fertility Care",
    body: "From the pioneering work that made IVF possible to clinics across the UAE, our story continues in every family we help begin.",
  },
  milestones: [
    {
      year: "1968",
      title: "Where It Began",
      body: "Foundational research that would reshape reproductive medicine for generations to come.",
    },
    {
      year: "1978",
      title: "A Groundbreaking Birth",
      body: "Louise Brown is born — proof that IVF could bring hope to families worldwide.",
    },
    {
      year: "1980",
      title: "Bourn Hall Is Founded",
      body: "The world’s first IVF clinic opens its doors, setting the standard for fertility care.",
    },
    {
      year: "Early Years",
      title: "Advancing Fertility Care",
      body: "Decades of clinical learning, laboratory excellence and compassionate patient care.",
    },
    {
      year: "2010",
      title: "Nobel Prize in Medicine",
      body: "Robert Edwards is awarded the Nobel Prize for the development of in vitro fertilisation.",
    },
    {
      year: "2011",
      title: "A Pioneering Legacy Recognised",
      body: "Our UAE journey begins — bringing pioneer-led fertility care closer to families here.",
    },
    {
      year: "Today",
      title: "Where Hope Continues to Bloom",
      body: "Dubai, Abu Dhabi and Al Ain clinics supporting thousands of families with modern IVF care.",
    },
  ],
} as const;

export const aboutAccreditation = {
  title: "Accredited for Excellence",
  items: [
    {
      id: "jci",
      name: "JCI Accreditation",
      logoLabel: "JCI",
      body: "International patient-safety and quality standards that shape how we deliver care across every clinic.",
      href: "/about#accreditation",
    },
    {
      id: "cap",
      name: "CAP Accreditation",
      logoLabel: "CAP",
      body: "Laboratory excellence recognised for rigorous process control, accuracy and continuous improvement.",
      href: "/about#accreditation",
    },
  ],
} as const;
