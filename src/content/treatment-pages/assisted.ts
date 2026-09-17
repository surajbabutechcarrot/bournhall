import { images } from "@/lib/images";
import type { TreatmentPageContent } from "./types";

export const ivfPage: TreatmentPageContent = {
  slug: "ivf",
  title: "IVF (In-vitro fertilisation)",
  subtitle: "If IVF is part of your fertility journey, you're in expert hands at Bourn Hall",
  intro:
    "Our founders pioneered the techniques for IVF and won a Nobel Prize for their work, with the world's first-ever IVF baby, Louise Brown, born in July 1978 — followed by the second IVF baby, and first boy, Alastair MacDonald born in January 1979.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Assisted reproduction techniques", href: "/treatments" },
    { label: "IVF" },
  ],
  image: images.ivfCare,
  sections: [
    {
      id: "what-is-ivf",
      navLabel: "What is IVF?",
      title: "What is IVF?",
      paragraphs: [
        "In-vitro fertilisation literally means fertilisation 'in glass'. In practice, it's where eggs and sperm are brought together in a carefully controlled environment to create embryos.",
        "In natural conception, sperm and eggs meet in the fallopian tube and begin the complex process of fertilisation, embryo formation and growth. In IVF, introducing the sperm to the eggs in a carefully controlled environment can overcome the physical, endocrine and immune problems that may be preventing you from conceiving.",
      ],
    },
    {
      id: "how-does-it-work",
      navLabel: "How does it work?",
      title: "How does it work?",
      paragraphs: [
        "First, you need to produce some eggs. To assist, we use fertility drugs to stimulate your ovaries to produce a number of eggs. Then, we collect the eggs from your ovaries (via the vagina using ultrasound guidance) and place them in a culture dish.",
        "Next, we take your husband's semen and, using a variety of techniques, wash it and select the best sperm. These are put in culture with the egg, and fertilisation occurs naturally over the next 18 hours or so. We also have a technique called ICSI. If your chances of success are regarded as low based on either sperm analysis or medical history, your eggs can be fertilised in the laboratory by injecting a single sperm into each egg. After a period of growth in culture, our skilled embryologists assess the embryos. One or two are then transferred into your womb. If suitable, the remaining embryos can be frozen for future use.",
        "Endometrial scratching is a technique which is sometimes recommended as it can help with embryo implantation.",
      ],
    },
    {
      id: "stimulation-protocols",
      navLabel: "What are the different stimulation protocols?",
      title: "What are the different 'stimulation protocols'?",
      paragraphs: ["In conventional IVF, there are two stimulation protocols:"],
      groups: [
        {
          title: "'Long' Protocol IVF",
          body: "Also known as 'down regulation protocol', this involves patient injections for a minimum of two weeks to achieve down regulation before starting ovarian stimulation. It's called 'long' because it takes approximately four to five weeks to prepare for egg collection.",
        },
        {
          title: "'Short' Protocol IVF",
          body: "Also known as 'antagonist protocol', this involves starting ovarian stimulation drugs at the beginning of your menstrual cycle. A second drug called an 'antagonist' is added approx. five days after ovarian stimulation begins and continued until egg collection to avoid premature release of the eggs.",
        },
      ],
      callouts: [
        "The main difference between the long and short protocols is that there are two distinct stages (down-regulating and stimulating) in the long protocol. In the short protocol, patients go straight to the stimulating stage.",
        "Bourn Hall also offers the treatment options of Natural Cycle IVF and Mini IVF.",
      ],
    },
    {
      id: "who-is-ivf-for",
      navLabel: "Who is IVF for?",
      title: "Who is IVF for?",
      subtitle: "We've helped create thousands of families through successful IVF treatment.",
      paragraphs: ["IVF treatment could be ideal for you if:"],
      list: [
        "You're a couple experiencing unexplained infertility",
        "Male factor sub/infertility (low sperm count or quality, varicocele, azoospermia, hereditary/genetic diseases, past injury)",
        "Female factor sub/infertility (endometriosis, fibroids, PCOS, tubal or cervical blockages, hormonal imbalances, nutritional deficiencies, hereditary/genetic diseases)",
      ],
      callouts: [
        "Whatever your situation and wherever you are on your fertility journey, we'll work with you to develop a personalised treatment plan that optimises your chances of success.",
      ],
    },
  ],
};

export const icsiPage: TreatmentPageContent = {
  slug: "icsi",
  title: "ICSI (Intracytoplasmic Sperm Injection)",
  subtitle: "Designed to make fertilisation more effective",
  intro:
    "ICSI is an IVF procedure in which a single sperm cell is injected directly into the centre of a mature egg in order to create an embryo — improving your chance of IVF success when fertilisation is unlikely with conventional IVF.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Assisted reproduction techniques", href: "/treatments" },
    { label: "ICSI" },
  ],
  image: images.icsi,
  sections: [
    {
      id: "what-is-icsi",
      navLabel: "What is ICSI?",
      title: "What is ICSI?",
      paragraphs: [
        "ICSI is an IVF procedure in which a single sperm cell is injected directly into the centre of a mature egg in order to create an embryo.",
        "ICSI is designed to make fertilisation more effective, therefore improving your chance of IVF success.",
      ],
    },
    {
      id: "how-does-it-work",
      navLabel: "How does it work?",
      title: "How does it work?",
      paragraphs: [
        "Your eggs are collected in the same way as conventional IVF, and a single sperm is injected into the centre of each mature egg to assist fertilisation in the laboratory. We use ICSI in conjunction with an IVF cycle when we believe that fertilisation is unlikely to occur using conventional IVF.",
        "In the same way as conventional IVF, one or two of the resulting embryos can then be transferred to your womb, and any additional suitable embryos can be frozen for your future use.",
        "Bourn Hall's fertility experts have performed ICSI since 1993, making our embryologists in this type of treatment technique amongst the best in the world.",
      ],
    },
    {
      id: "who-is-icsi-for",
      navLabel: "Who is ICSI for?",
      title: "Who is ICSI for?",
      paragraphs: ["ICSI may be appropriate for men who:"],
      list: [
        "Produce a very low number of sperm",
        "Have slow moving sperm",
        "Have a high number of abnormal-shaped sperm",
        "Need sperm to be collected surgically from the testicles",
        "Have high levels of antibodies in their semen",
        "Have had sperm tests which reveal that the sperm would be unlikely to achieve fertilisation",
      ],
      listIntro: "ICSI is also ideal for couples who:",
      callouts: [
        "Have experienced previous failed IVF cycles due to fertilisation issues",
        "Have very few eggs to fertilise",
        "Are planning pre-implantation genetic testing (PGT) of embryos",
      ],
    },
  ],
};
