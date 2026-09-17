"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { GsapReveal, LenisGsapBridge } from "@/components/providers/GsapReveal";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (enabled !== true) {
    return (
      <>
        <GsapReveal />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.08,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
        anchors: true,
        syncTouch: false,
        stopInertiaOnNavigate: true,
        prevent: (node) =>
          node instanceof HTMLElement &&
          (node.hasAttribute("data-lenis-prevent") ||
            Boolean(node.closest("[data-lenis-prevent], [role='listbox']"))),
      }}
    >
      <ScrollToTop />
      <LenisGsapBridge />
      <GsapReveal />
      {children}
    </ReactLenis>
  );
}
