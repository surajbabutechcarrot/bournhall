import { images } from "@/lib/images";
import type { TreatmentPageContent } from "./types";

export const iuiPage: TreatmentPageContent = {
  slug: "iui",
  title: "IUI (Intrauterine insemination)",
  subtitle: "IUI can improve your chances of becoming pregnant",
  intro:
    "IUI is an assisted conception technique which involves the placement of prepared sperm into your womb at the time of ovulation (release of eggs).",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Assisted reproduction techniques", href: "/treatments" },
    { label: "IUI" },
  ],
  image: images.lab,
  sections: [
    {
      id: "what-is-iui",
      navLabel: "What is IUI?",
      title: "What is IUI?",
      paragraphs: [
        "IUI is an assisted conception technique which involves the placement of prepared sperm into your womb at the time of ovulation (release of eggs).",
        "IUI can improve your chances of becoming pregnant.",
      ],
    },
    {
      id: "how-does-it-work",
      navLabel: "How does it work?",
      title: "How does it work?",
      paragraphs: [
        "Firstly, your ovaries are gently stimulated by self-administered hormone injections. At Bourn Hall, we show you how to do your injections and answer any questions you may have. The hormone dosage is tailored to you according to age and, if applicable, previous response to ovary stimulation.",
        "Your progress will be monitored with ultrasound scans. We'll track the number and size of follicles on your ovaries. We'll also monitor the thickness of the endometrium (lining of your womb).",
        "Once the follicles reach optimum size, you have the 'trigger shot' injection which induces ovulation. Approx 36-48 hours after the trigger shot, IUI is performed in the clinic.",
        "The IUI procedure is swift and relatively comfortable. It does not require sedation or pain relief. A small catheter releases prepared sperm into the womb — the procedure only takes a few minutes.",
        "You will be given vaginal progesterone to support your womb environment. A pregnancy test is taken two weeks after IUI.",
      ],
    },
    {
      id: "who-is-iui-for",
      navLabel: "Who is IUI for?",
      title: "Who is IUI for?",
      paragraphs: ["IUI may be appropriate for women who:"],
      list: ["Have unexplained subfertility", "Have mild endometriosis"],
      listIntro: "IUI is also ideal for couples who:",
      callouts: [
        "Are experiencing difficulties with intercourse",
        "Are experiencing mild male factor fertility issues",
        "IUI is not recommended in cases of severe male factor infertility, women over age 35, or for women who have severe endometriosis or blocked fallopian tubes.",
      ],
    },
  ],
};

export const geneticTestingPage: TreatmentPageContent = {
  slug: "genetic-testing",
  title: "Genetic testing",
  subtitle: "Pre-implantation Genetic Testing (PGT) of embryos",
  intro:
    "Pre-implantation Genetic Testing (PGT) of embryos is designed to uncover specific genes that could result in a disease or chromosomal abnormalities that could prevent a successful pregnancy.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Genetic testing" },
  ],
  image: images.geneticTesting,
  sections: [
    {
      id: "what-types",
      navLabel: "What type of pre-implantation genetic testing does Bourn Hall offer?",
      title: "What type of pre-implantation genetic testing does Bourn Hall offer?",
      paragraphs: [
        "Bourn Hall provides pre-implantation genetic testing for:",
      ],
      list: [
        "Monogenic diseases (PGT-M)",
        "Structural chromosomal rearrangements (PGT-SR)",
        "Aneuploidy screening (PGT-A)",
      ],
      callouts: [
        "All of these genetic tests involve the removal of a cluster of cells from the embryo for screening.",
      ],
    },
    {
      id: "pgt-m",
      navLabel: "PGT-M",
      title: "PGT-M",
      paragraphs: [
        "PGT-M is recommended where there is a known genetic condition within families or if a couple have previously had an affected child.",
      ],
    },
    {
      id: "pgt-a",
      navLabel: "PGT-A",
      title: "PGT-A",
      paragraphs: [
        "PGT-A involves screening embryos for basic chromosome abnormalities such as Down Syndrome. PGT-A can also be used to identify the gender of an embryo prior to implantation.",
      ],
    },
    {
      id: "pgt-sr",
      navLabel: "PGT-SR",
      title: "PGT-SR",
      paragraphs: [
        "PGT-SR is recommended when one of the parents is a carrier of structural chromosomal rearrangements. These are changes from the normal size or arrangement of chromosomes — the structures which hold genetic material.",
      ],
    },
  ],
};

export const maleFertilityPage: TreatmentPageContent = {
  slug: "male-fertility",
  title: "Understanding Male Fertility",
  subtitle: "Dedicated support for every family journey",
  intro:
    "Male infertility can result from several different causes. Male factor sub-fertility or infertility can impact the ability of an otherwise healthy couple to conceive. At Bourn Hall, we're dedicated to supporting all people to start and grow their families according to their unique circumstances.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Male fertility" },
  ],
  image: images.lab,
  sections: [
    {
      id: "causes",
      navLabel: "The reasons for male subfertility",
      title: "The reasons for male subfertility and specific causes of infertility can include:",
      list: [
        "Hereditary and/or genetic diseases",
        "Azoospermia (obstructive and non-obstructive)",
        "Varicocele",
        "Retrograde ejaculation",
        "Oligoasthenoteratospermia (low sperm count)",
        "Past injury",
        "Lifestyle choices",
        "Unexplained reasons",
      ],
    },
    {
      id: "assessing",
      navLabel: "Assessing male infertility",
      title: "Assessing male infertility",
      paragraphs: [
        "The first step in assessing male infertility involves semen analysis and a physical examination. The semen analysis looks at various parameters:",
      ],
      list: [
        "Number of sperm (concentration)",
        "Percentage of moving sperm (motility)",
        "Percentage of normal shaped sperm (morphology)",
      ],
      callouts: [
        "A semen analysis is advised to be performed between two to five days of intercourse abstinence.",
        "Blood tests are carried out to check the hormones associated with sperm production and/or to check genetic factors. A scrotal ultrasound is advised depending on patient history.",
        "Bourn Hall offers a comprehensive range of treatments to help address male infertility — including options for low motility, poor morphology, low count, or total lack of sperm.",
      ],
    },
  ],
};

export const fertilityPreservationPage: TreatmentPageContent = {
  slug: "fertility-preservation",
  title: "Fertility preservation",
  subtitle: "Discover our fertility preservation options",
  intro:
    "Bourn Hall offers a state-of-the-art cryopreservation service including comprehensive freezing programmes for eggs, sperm and embryos.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Fertility preservation" },
  ],
  image: images.preservation,
  sections: [
    {
      id: "overview",
      navLabel: "Why preserve fertility?",
      title: "Why preserve fertility?",
      paragraphs: [
        "Our fertility preservation freezing programmes can be appropriate for many reasons. For example, some women may wish to delay motherhood for personal or professional reasons, others may be about to undergo cancer treatment or are experiencing a change of personal circumstances.",
        "Additionally, for men who are about to have a vasectomy but are feeling this is a bit final for them, then freezing their sperm before the procedure could be a good solution. Other reasons why men select to freeze their sperm include low sperm count, cancer treatment and hazardous working environments.",
      ],
    },
    {
      id: "options",
      navLabel: "Our preservation options",
      title: "We offer the following fertility preservation options:",
      groups: [
        {
          title: "Egg freezing",
          body: "Preserve your eggs for the future with our fertility preservation egg freezing service.",
        },
        {
          title: "Sperm freezing",
          body: "Store sperm for future use — including before vasectomy, cancer treatment, or when facing low sperm count.",
        },
        {
          title: "Embryo freezing",
          body: "Freeze embryos at an early developmental stage for future transfer when the time is right for your family.",
        },
      ],
    },
  ],
};
