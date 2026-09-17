import { images } from "@/lib/images";
import type { TreatmentPageContent } from "./types";

export const eggFreezingPage: TreatmentPageContent = {
  slug: "egg-freezing",
  title: "Egg Freezing",
  subtitle: "Preserve Your Fertility for the Future",
  intro:
    "Egg freezing is a process which involves collecting, freezing and storing a woman's eggs for her future use. Women use egg freezing as a way to preserve their future fertility — for some, it's a way to optimise their biological clock.",
  crumbs: [
    { label: "Homepage", href: "/" },
    { label: "Fertility preservation", href: "/treatments/fertility-preservation" },
    { label: "Egg freezing" },
  ],
  image: images.eggFreezing,
  sections: [
    {
      id: "what-is-egg-freezing",
      navLabel: "What is egg freezing?",
      title: "What is egg freezing?",
      subtitle: "Optimising your biological clock",
      paragraphs: [
        "Egg freezing is a process which involves collecting, freezing and storing a woman's eggs for her future use. Women use egg freezing as a way to preserve their future fertility. For some women, it's a way to optimise their 'biological clock'.",
      ],
    },
    {
      id: "best-age",
      navLabel: "What's the best age to freeze your eggs?",
      title: "What's the best age to freeze your eggs?",
      subtitle: "Your most fertile years are your 20's and early 30's",
      paragraphs: [
        "Whilst a woman is born with all her eggs, they reduce in number over time and quality reduces with age. It's scientifically proven that a woman's egg quality and quantity are higher in her twenties and early thirties. From age 36, both egg quantity and quality decline. By age 40, egg quality is rapidly diminishing. So, it makes sense to preserve eggs at a younger age so that they can be used later in life.",
      ],
    },
    {
      id: "why-freeze",
      navLabel: "Why do women choose to freeze their eggs?",
      title: "Why do women choose to freeze their eggs?",
      subtitle: "Live your life the way you want to",
      paragraphs: [
        "There are lots of reasons why women are looking to preserve their future fertility. These often fall into two categories:",
      ],
      groups: [
        {
          title: "Personal circumstances",
          body: "Women who may not be in a position (either professionally or personally) to have a child now but would like to increase their chances of having a child later in life.",
        },
        {
          title: "Medical circumstances",
          body: "Women who have cancer or autoimmune diseases who are planning to undergo chemotherapy, bone marrow transplants and/or radiation therapy. Other women include those who are at risk of needing repeated ovarian surgery due to endometriosis or other conditions. Also, younger women who have diminished ovarian reserve or are at risk of premature ovarian insufficiency are advised to freeze their eggs if they're considering starting a family in the future.",
        },
      ],
    },
    {
      id: "how-many-eggs",
      navLabel: "How many eggs should you freeze?",
      title: "How many eggs should you freeze?",
      subtitle: "What's the magic number?",
      paragraphs: [
        "The optimum number of frozen, mature eggs varies according to age. As a general guide, patients should aim for approx. 20 eggs. If a woman doesn't produce many eggs in her first cycle, a second or third cycle may be advised.",
        "Research shows that healthy women aged 36 and under generally produce an average of 14 mature eggs during an egg freezing cycle. At age 37-39, this drops to approx. 10 mature eggs. At age 40+ this falls further to an average of approx. 7-9 mature eggs.",
        "Below the age of 35, healthy women have a 70% chance of a live birth if they freeze 9+ mature eggs. Women in their early 40's may need to freeze significantly more eggs — 28 or more — for a similar chance of a live birth.",
      ],
    },
    {
      id: "whats-involved",
      navLabel: "What's involved in egg freezing?",
      title: "What's involved in egg freezing?",
      stepsIntro: [
        "The scientific term for egg freezing is oocyte cryopreservation. Oocytes (eggs) are cryopreserved using a technique called vitrification (flash freezing at extremely low temperature) which preserves the egg. This essentially suspends the egg in time, preserving its quality.",
        "Egg freezing involves stimulating a woman's ovaries with hormones to produce more eggs than would be produced naturally. Once the eggs are ripe for collection, this is performed vaginally under ultrasound guidance, using general anesthesia for pain relief and comfort. These stimulation and collection stages are identical to the early stages of in-vitro fertilisation (IVF). Not all of the eggs collected will be suitable for freezing. On average, 75% will be mature and freezable for storage.",
      ],
      steps: [
        {
          title: "Consultation with your fertility specialist",
          body: "You begin your egg collection journey with an initial consultation with your fertility specialist. Everything will be explained to you — the procedure, the potential risks and complications and the anticipated result given your individual circumstances.",
        },
        {
          title: "Ultrasound and blood tests",
          body: "An ultrasound and blood tests will be carried out. This will include an ovarian reserve assessment to evaluate your potential number of eggs. Screening blood tests include: infection profile, complete blood count, TSH, prolactin and blood group.",
        },
        {
          title: "Ovarian stimulation",
          body: "Your ovarian stimulation begins. We will teach you how to do your daily injections and support you with any questions or concerns.",
        },
        {
          title: "Ultrasound monitoring",
          body: "Your progress during the ovarian stimulation phase will be closely monitored via ultrasounds and blood tests.",
        },
        {
          title: "Egg collection",
          body: "Egg collection day is a vital stage in the process. Your eggs will be collected in our theatre under brief general anesthesia. Once the procedure is finished and you are awake and comfortable, you'll be notified of how many mature eggs were collected.",
        },
        {
          title: "Eggs are frozen and stored for up to 5 years",
          body: "Our embryology team will freeze your eggs. Your eggs will be safely stored for up to 5 years. We will contact you annually to ask if you would like to continue storage and to see how we can assist you on your fertility journey.",
        },
      ],
    },
    {
      id: "getting-pregnant",
      navLabel: "Getting pregnant with your frozen eggs",
      title: "Getting pregnant with your frozen eggs",
      subtitle: "Not all frozen eggs make it through the thawing process",
      paragraphs: [
        "When you wish to use your stored eggs, they will be thawed and inseminated with your husband/partner's sperm. It's important to be aware that not all frozen eggs survive the thawing process. It's estimated that 40-60% of frozen eggs survive the thawing process.",
        "As freezing and thawing affects the outer coating of the egg, this makes it difficult for sperm to penetrate the egg shell (zona pellucida). Therefore, thawed eggs are inseminated using a procedure called ICSI (intracytoplasmic sperm injection) where a single sperm is selected and injected directly into the egg. The resulting embryo is transferred to your womb.",
      ],
    },
    {
      id: "chances",
      navLabel: "What are your chances of becoming a mother with frozen eggs?",
      title: "What are your chances of becoming a mother with frozen eggs?",
      paragraphs: [
        "The chance of becoming pregnant using your frozen/thawed eggs varies from one woman to another. It's affected by many factors, in particular a woman's age at time of egg collection. This is because age affects egg quality.",
        "Our results show that if you freeze your eggs below age 36, you have a higher chance of success. Egg quantity and quality diminishes from age 36+.",
        "It's the age you are when you freeze your eggs that matters most; the later age you are when you use them matters less.",
      ],
    },
  ],
};
