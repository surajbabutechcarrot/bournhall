"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Y = 40;
const DURATION = 0.9;
const EASE = "power2.out";
const STAGGER = 0.12;
const START = "top 88%";

/** Always keep scale > 1 so x/y drift never exposes empty edges in the frame. */
const MEDIA_FROM = { scale: 1.14, xPercent: -2, yPercent: -3 };
const MEDIA_TO = { scale: 1.06, xPercent: 2, yPercent: 3 };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealElement(el: Element) {
  return gsap.fromTo(
    el,
    { y: Y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION,
      ease: EASE,
      overwrite: "auto",
      scrollTrigger: {
        trigger: el,
        start: START,
        toggleActions: "play none none none",
        once: true,
      },
    },
  );
}

function revealStagger(container: Element) {
  const children = Array.from(container.children).filter(
    (child) => child instanceof HTMLElement,
  );
  if (!children.length) return null;

  gsap.set(children, { y: Y, opacity: 0 });

  return gsap.to(children, {
    y: 0,
    opacity: 1,
    duration: DURATION,
    ease: EASE,
    stagger: STAGGER,
    overwrite: "auto",
    scrollTrigger: {
      trigger: container,
      start: START,
      toggleActions: "play none none none",
      once: true,
    },
  });
}

function revealHero(root: ParentNode) {
  const items = root.querySelectorAll<HTMLElement>("[data-reveal-hero]");
  if (!items.length) return;

  gsap.set(items, { y: 28, opacity: 0 });
  gsap.to(items, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: EASE,
    stagger: 0.12,
    delay: 0.05,
    overwrite: "auto",
  });
}

function runReveals(root: ParentNode = document) {
  if (prefersReducedMotion()) {
    root
      .querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-stagger] > *, [data-reveal-hero]",
      )
      .forEach((el) => {
        gsap.set(el, { clearProps: "all" });
      });
    return;
  }

  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    if (el.closest("[data-reveal-stagger]")) return;
    if (el.hasAttribute("data-reveal-hero")) return;
    revealElement(el);
  });

  root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((el) => {
    revealStagger(el);
  });

  revealHero(root);
}

function isClipped(el: HTMLElement) {
  const { overflow, overflowX, overflowY } = getComputedStyle(el);
  return [overflow, overflowX, overflowY].some(
    (value) => value === "hidden" || value === "clip",
  );
}

function getMediaFrame(img: HTMLImageElement): HTMLElement | null {
  const parent = img.parentElement;
  if (!parent) return null;

  // Prefer the nearest clipped card/media frame — skip page-level clip containers
  // (section overflow-x-clip, main, body) so scrub stays tied to the image card.
  let el: HTMLElement | null = parent;
  while (el && el !== document.documentElement) {
    const tag = el.tagName;
    if (
      isClipped(el) &&
      tag !== "MAIN" &&
      tag !== "SECTION" &&
      tag !== "BODY" &&
      tag !== "HTML"
    ) {
      return el;
    }
    el = el.parentElement;
  }

  return parent;
}

function shouldParallax(img: HTMLImageElement) {
  if (img.hasAttribute("data-no-parallax")) return false;
  if (
    img.closest(
      "[data-no-parallax], header, footer, nav, .mega-menu-shell, .mega-menu-panel",
    )
  ) {
    return false;
  }

  const className = typeof img.className === "string" ? img.className : "";
  if (className.includes("rounded-full")) return false;

  const optedIn = img.hasAttribute("data-scroll-media");
  const isCover = className.includes("object-cover");
  // object-contain is skipped unless explicitly opted in (e.g. support journey cards).
  if (!optedIn && className.includes("object-contain")) return false;
  if (!optedIn && !isCover) return false;

  const frame = getMediaFrame(img);
  const bounds = (frame ?? img).getBoundingClientRect();
  if (bounds.width < 120 || bounds.height < 120) return false;

  return true;
}

/**
 * Scroll-scrubbed translate + scale on content photos.
 * Opt in with `data-scroll-media`, or any main `object-cover` Next/Image.
 * Opt out with `data-no-parallax` on the img or an ancestor.
 */
function runScrollMedia(root: ParentNode = document) {
  if (prefersReducedMotion()) return;

  const images = Array.from(
    root.querySelectorAll<HTMLImageElement>(
      "img[data-scroll-media], main img[data-nimg]",
    ),
  ).filter(shouldParallax);

  images.forEach((img) => {
    const trigger = getMediaFrame(img);
    if (!trigger) return;

    if (!isClipped(trigger)) {
      trigger.style.overflow = "hidden";
    }

    gsap.set(img, {
      transformOrigin: "center center",
      force3D: true,
      willChange: "transform",
    });

    gsap.fromTo(img, MEDIA_FROM, {
      ...MEDIA_TO,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    if (!img.complete) {
      img.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    }
  });
}

/** Keeps ScrollTrigger in sync with Lenis (must sit inside ReactLenis). */
export function LenisGsapBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    ScrollTrigger.refresh();
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return null;
}

/**
 * Site-wide GSAP scroll reveals + content-image scroll media.
 * Use `data-reveal`, `data-reveal-stagger`, or `data-reveal-hero` in markup.
 * Photos: `data-scroll-media` (or main object-cover imgs). Opt out: `data-no-parallax`.
 */
export function GsapReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    // Keep reveals in a dedicated context so cleanup does not kill other ScrollTriggers (e.g. pin scrub).
    const ctx = gsap.context(() => {});

    raf = requestAnimationFrame(() => {
      ctx.add(() => {
        runReveals(document);
        runScrollMedia(document);
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
