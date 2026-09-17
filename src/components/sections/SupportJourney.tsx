"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SupportCard } from "@/components/cards/SupportCard";
import { SupportPromoCard } from "@/components/cards/SupportPromoCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsRow } from "@/components/sections/StatsRow";
import { supportCards, supportPromo } from "@/content/site-content";

gsap.registerPlugin(ScrollTrigger);

export function SupportJourney() {
  const [first, second, third, fourth] = supportCards;
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pin = pinRef.current;
      const stage = stageRef.current;
      const promo = promoRef.current;
      if (!pin || !stage || !promo) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          if (!context.conditions?.desktop) return;

          const cards = gsap.utils.toArray<HTMLElement>("[data-support-card]", stage);
          const cta = promo.querySelector<HTMLElement>("[data-support-promo-cta]");
          if (cards.length !== 4) return;

          // 0,1 = left column → slide out from center L←; 2,3 = right column → slide out from center →R
          const slideFromX = (card: HTMLElement, index: number) => {
            const distance = Math.min(168, Math.max(88, card.offsetWidth * 0.42));
            return index < 2 ? distance : -distance;
          };

          const getHeaderOffset = () => {
            const header = document.querySelector("header");
            if (header) return header.getBoundingClientRect().height;
            const fromCss = getComputedStyle(document.documentElement)
              .getPropertyValue("--header-h")
              .trim();
            const parsed = Number.parseFloat(fromCss);
            return Number.isFinite(parsed) ? parsed : 72;
          };

          const resetLayout = () => {
            gsap.set(cards, { clearProps: "all" });
            gsap.set(promo, { clearProps: "all" });
            if (cta) gsap.set(cta, { clearProps: "all" });
          };

          const parkOffstage = () => {
            resetLayout();
            void stage.offsetHeight;

            cards.forEach((card, index) => {
              gsap.set(card, {
                x: slideFromX(card, index),
                autoAlpha: 0,
                force3D: true,
              });
            });

            gsap.set(promo, {
              y: 18,
              autoAlpha: 0,
              force3D: true,
            });

            if (cta) {
              gsap.set(cta, {
                y: 12,
                autoAlpha: 0,
                force3D: true,
              });
            }
          };

          parkOffstage();

          let settled = false;

          const tl = gsap.timeline({
            // Linear tweens + light scrub: Lenis already eases the scroll.
            // inOut on a scrubbed pin feels stop-start.
            defaults: { ease: "none", overwrite: "auto" },
            scrollTrigger: {
              trigger: pin,
              start: () => `top top+=${getHeaderOffset()}`,
              end: () => `+=${Math.round(window.innerHeight * 2.2)}`,
              pin: true,
              scrub: 0.55,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onRefreshInit: resetLayout,
              onRefresh: () => {
                settled = false;
                const progress = tl.scrollTrigger?.progress ?? 0;
                parkOffstage();
                if (progress > 0) tl.progress(progress);
              },
              onUpdate: (self) => {
                if (self.progress > 0.98 && !settled) {
                  settled = true;
                  gsap.set(cards, { clearProps: "transform", autoAlpha: 1 });
                  gsap.set(promo, { clearProps: "transform", autoAlpha: 1 });
                  if (cta) gsap.set(cta, { clearProps: "transform", autoAlpha: 1 });
                } else if (self.progress <= 0.98) {
                  settled = false;
                }
              },
            },
          });

          const emerge = (card: HTMLElement, at: gsap.Position) => {
            tl.to(card, { autoAlpha: 1, duration: 0.42 }, at);
            tl.to(card, { x: 0, duration: 1.28 }, at);
          };

          // 1) Center box first (icon + copy; CTA stays hidden)
          tl.to(promo, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          });

          // 2–5) Cards bloom from center: top pair, then bottom pair
          tl.addLabel("top", "+=0.02");
          emerge(cards[0], "top");
          emerge(cards[2], "top+=0.08");

          tl.addLabel("bottom", "top+=0.22");
          emerge(cards[1], "bottom");
          emerge(cards[3], "bottom+=0.08");

          // 6) Book a Consultation overlaps the last of the slide
          if (cta) {
            tl.to(
              cta,
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.55,
              },
              "bottom+=0.48",
            );
          }

          tl.to({}, { duration: 0.32 });

          const refresh = () => ScrollTrigger.refresh();
          requestAnimationFrame(refresh);
          window.addEventListener("resize", refresh);

          return () => {
            window.removeEventListener("resize", refresh);
            tl.scrollTrigger?.kill();
            tl.kill();
            resetLayout();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      id="support-journey"
      className="bg-white section-y overflow-x-clip"
    >
      <Container className="min-w-0">
        <div ref={pinRef} className="support-journey-pin">
          <SectionHeading
            align="center"
            className="mb-8"
            title={
              <>
                <span className="block">How Can We Support Your</span>
                <span className="block text-brand-500">Journey?</span>
              </>
            }
          />

          <div
            ref={stageRef}
            className="relative flex min-w-0 flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5 xl:gap-8"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-[14px]">
              <div data-support-card className="will-change-transform">
                <SupportCard {...first} number={1} noParallax />
              </div>
              <div data-support-card className="will-change-transform">
                <SupportCard {...second} number={2} noParallax />
              </div>
            </div>

            <div
              ref={promoRef}
              className="relative z-30 min-w-0 will-change-transform lg:w-[min(300px,26%)] lg:shrink-0 xl:w-[min(340px,28%)]"
            >
              <SupportPromoCard {...supportPromo} className="support-promo h-full" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-[14px]">
              <div data-support-card className="will-change-transform">
                <SupportCard {...third} number={3} noParallax />
              </div>
              <div data-support-card className="will-change-transform">
                <SupportCard {...fourth} number={4} noParallax />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <StatsRow />
        </div>
      </Container>
    </section>
  );
}
