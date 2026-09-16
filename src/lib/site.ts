export const site = {
  name: "Bourn Hall",
  legalName: "Bourn Hall Fertility Clinic UAE",
  tagline: "Your fertility journey starts here",
  description:
    "Bourn Hall Fertility Clinic UAE offers world-class IVF, ICSI, IUI, genetic testing and fertility preservation in Dubai, Abu Dhabi and Al Ain. Founded by the pioneers of IVF.",
  url: "https://bournhall-clinic.ae",
  locale: "en_AE",
  phone: "800-IVF (483)",
  phoneHref: "tel:800483",
  email: "askbournhall@mediclinic.ae",
  ogImage: "/opengraph-image",
} as const;

export const navItems = [
  {
    label: "Fertility Treatments",
    href: "/treatments",
    mega: true,
  },
  { label: "Our Specialists", href: "/doctors" },
  { label: "Our Success Rates", href: "/resources/success-rates" },
  {
    label: "Accreditation",
    href: "/about#accreditation",
    children: [
      { label: "JCI Accreditation", href: "/about#accreditation" },
      { label: "Laboratory Standards", href: "/about#accreditation" },
    ],
  },
  {
    label: "Costs",
    href: "/costs",
    children: [
      { label: "Treatment Pricing", href: "/costs" },
      { label: "Payment Plans", href: "/costs#payment-plans" },
    ],
  },
] as const;

export const treatmentsMegaMenu = {
  columns: [
    {
      title: "Fertility Preservation",
      links: [
        { label: "Egg Freezing", href: "/treatments/egg-freezing" },
        { label: "Sperm Freezing", href: "/treatments/fertility-preservation" },
        { label: "Embryo Freezing", href: "/treatments/fertility-preservation" },
      ],
    },
    {
      title: "Assisted Reproduction Techniques",
      links: [
        { label: "IVF", href: "/treatments/ivf" },
        { label: "ICSI", href: "/treatments/icsi" },
        { label: "IUI", href: "/treatments/iui" },
        { label: "Family Balancing", href: "/treatments/genetic-testing" },
        { label: "Platelet Rich Plasma (PRP)", href: "/treatments" },
      ],
    },
    {
      title: "Understanding Fertility",
      links: [
        { label: "Female Fertility", href: "/treatments" },
        { label: "Male Fertility", href: "/treatments/male-fertility" },
      ],
      trailing: { label: "Genetic Testing", href: "/treatments/genetic-testing" },
    },
  ],
  featured: {
    href: "/treatments/egg-freezing",
    label: "Egg Freezing",
    image: {
      src: "/images/mega-egg-freezing.png",
      alt: "Egg vitrification process in the embryology laboratory",
    },
  },
} as const;

export const footerNav = {
  treatments: [
    { label: "IVF Treatment", href: "/treatments/ivf" },
    { label: "ICSI Treatment", href: "/treatments/icsi" },
    { label: "IUI Treatment", href: "/treatments/iui" },
    { label: "Egg Freezing", href: "/treatments/egg-freezing" },
    { label: "Genetic Testing", href: "/treatments/genetic-testing" },
    { label: "Fertility Preservation", href: "/treatments/fertility-preservation" },
  ],
  about: [
    { label: "About Bourn Hall", href: "/about" },
    { label: "Our Specialists", href: "/doctors" },
    { label: "Locations", href: "/clinics" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Success Rates", href: "/resources/success-rates" },
    { label: "Contact Us", href: "/contact" },
  ],
  patients: [
    { label: "Book an Appointment", href: "/book-appointment" },
    { label: "Patient Resources", href: "/resources" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "All Treatments", href: "/treatments" },
  ],
  quickLinks: [
    { label: "Treatments", href: "/treatments" },
    { label: "Our Specialists", href: "/doctors" },
    { label: "Locations", href: "/clinics" },
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  patientInformation: [
    { label: "Privacy Statement", href: "/privacy" },
    { label: "Patient Consent", href: "/patient-consent" },
    { label: "Patient Complaints", href: "/patient-complaints" },
    { label: "Important Information", href: "/important-information" },
    { label: "Treatment Offers", href: "/offers" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies" },
  ],
} as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/bournhalluae" },
  { label: "YouTube", href: "https://www.youtube.com/@bournhallfertilityclinicuae" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bournhall-fertilityclinic-uae" },
  { label: "TikTok", href: "https://www.tiktok.com/@bournhalluae" },
  { label: "X", href: "https://twitter.com/BournHall_Dubai" },
] as const;
