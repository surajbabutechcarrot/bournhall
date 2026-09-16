"use client";

import { useRef, type RefObject } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { heroContent } from "@/content/site-content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

function HeroCouple({
  className,
  sizes,
  priority = false,
  womanRef,
  manRef,
}: {
  className?: string;
  sizes: string;
  priority?: boolean;
  womanRef?: RefObject<HTMLDivElement | null>;
  manRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className={cn("pointer-events-none relative", className)}>
      <div ref={womanRef} className="absolute bottom-0 left-[-4%] z-[1] h-[98%] w-[64%] will-change-transform">
        <Image
          src={images.heroWoman.src}
          alt={images.heroWoman.alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized
          data-no-parallax
          className="object-contain object-bottom drop-shadow-[0_18px_40px_rgba(36,26,40,0.18)]"
        />
      </div>
      <div ref={manRef} className="absolute right-[-2%] bottom-0 z-[2] h-[108%] w-[68%] will-change-transform">
        <Image
          src={images.heroMan.src}
          alt={images.heroMan.alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized
          data-no-parallax
          className="object-contain object-bottom drop-shadow-[0_18px_40px_rgba(36,26,40,0.18)]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const desktopWomanRef = useRef<HTMLDivElement>(null);
  const desktopManRef = useRef<HTMLDivElement>(null);
  const mobileWomanRef = useRef<HTMLDivElement>(null);
  const mobileManRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const pairs = [
        [desktopWomanRef.current, desktopManRef.current],
        [mobileWomanRef.current, mobileManRef.current],
      ].filter((pair): pair is [HTMLDivElement, HTMLDivElement] =>
        Boolean(pair[0] && pair[1]),
      );

      if (!pairs.length) return;

      if (reduce) {
        gsap.set(
          pairs.flat(),
          { clearProps: "all" },
        );
        return;
      }

      const mm = gsap.matchMedia();

      pairs.forEach(([woman, man]) => {
        gsap.set(woman, { opacity: 0, x: -56, y: 36, scale: 0.94, filter: "blur(8px)" });
        gsap.set(man, { opacity: 0, x: 64, y: 44, scale: 0.94, filter: "blur(8px)" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

        tl.to(
          woman,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
          },
          0,
        ).to(
          man,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
          },
          0.18,
        );

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const float = gsap.timeline();
          float.to(woman, { y: -8, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 }, 1.2);
          float.to(man, { y: -6, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 }, 1.45);
          return () => float.kill();
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="surface-bloom relative overflow-hidden lg:h-dvh lg:min-h-0"
    >
      {/* Desktop: couple anchored to the right */}
      <div className="pointer-events-none absolute right-[-2%] bottom-0 z-0 hidden h-[92%] w-[min(820px,55vw)] lg:block xl:h-[96%] xl:w-[min(920px,60vw)]">
        <HeroCouple
          className="h-full w-full"
          sizes="(min-width: 1024px) 55vw, 0px"
          priority
          womanRef={desktopWomanRef}
          manRef={desktopManRef}
        />
      </div>

      <Container className="relative z-10 lg:h-full">
        <div className="relative lg:flex lg:h-full lg:items-center">
          <div className="hero-copy max-w-[540px] pt-[calc(var(--header-h)+2rem)] pb-10 md:pb-12 lg:pt-[calc(var(--header-h)+1rem)] lg:pb-0">
            <h1
              data-reveal-hero
              className="hero-display text-[2.5rem] leading-[1.12] font-medium text-ink-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1] lg:text-[clamp(2.75rem,4.2vw,3.75rem)] lg:leading-[1.12]"
            >
              <span className="block">{heroContent.titleLead}</span>
              <span className="block">
                {heroContent.titleRest}{" "}
                <span className="text-brand-500">{heroContent.titleAccent}</span>
              </span>
            </h1>

            <p
              data-reveal-hero
              className="hero-desc mt-4 max-w-[440px] text-base leading-relaxed text-brand-600 sm:mt-6 sm:text-lg sm:leading-[28px] md:max-w-[480px]"
            >
              {heroContent.description}
            </p>

            <div
              data-reveal-hero
              className="hero-actions mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center md:mt-10"
            >
              <Button
                href={heroContent.primary.href}
                size="lg"
                className="w-full justify-center sm:w-auto"
                iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
              >
                {heroContent.primary.label}
              </Button>
              <Button
                href={heroContent.secondary.href}
                variant="outline"
                size="lg"
                className="w-full justify-center sm:w-auto"
                icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
              >
                {heroContent.secondary.label}
              </Button>
            </div>

            <div data-reveal-hero className="hero-trust mt-6 md:mt-8">
              <TrustBadge {...heroContent.trust} />
            </div>
          </div>

          {/* left:0 here = content column start (after container gutter), matches logo */}
          <a
            href="#support-journey"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("support-journey");
              if (!target) return;
              if (lenis) {
                lenis.scrollTo(target, { offset: -20 });
              } else {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label="Scroll down to explore"
            data-reveal-hero
            className="group absolute bottom-3 left-0 z-20 flex cursor-pointer flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-100 sm:bottom-5 lg:bottom-7"
          >
            <div className="relative flex h-[38px] w-[22px] justify-center rounded-full border-[1.75px] border-brand-500/40 bg-white/20 p-1 shadow-xs backdrop-blur-[2px] transition-colors duration-200 group-hover:border-brand-500/80 group-hover:bg-white/50">
              <span className="h-2 w-1 animate-scroll-wheel rounded-full bg-brand-500" />
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 12 8"
              fill="none"
              className="size-3 -mt-0.5 animate-chevron-bob text-brand-500/60 transition-colors duration-200 group-hover:text-brand-500"
            >
              <path
                d="M1.5 2L6 6.5L10.5 2"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              aria-hidden="true"
              className="h-3.5 w-px bg-gradient-to-b from-brand-500/40 to-transparent"
            />
          </a>
        </div>
      </Container>

      {/* Mobile + tablet: couple below content */}
      <div className="relative z-0 lg:hidden">
        <HeroCouple
          className="mx-auto aspect-[5/4] w-full max-w-[640px] sm:aspect-[4/3] sm:max-w-[760px] md:max-w-[860px]"
          sizes="(max-width: 1023px) 100vw, 0px"
          priority
          womanRef={mobileWomanRef}
          manRef={mobileManRef}
        />
      </div>
    </section>
  );
}
