"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ProgressContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<"idle" | "loading" | "completing">("idle");
  const [progress, setProgress] = useState(0);

  const trickleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const finishTimerRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimers = useCallback(() => {
    if (trickleTimerRef.current) clearInterval(trickleTimerRef.current);
    if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    trickleTimerRef.current = null;
    finishTimerRef.current = null;
    safetyTimerRef.current = null;
  }, []);

  const start = useCallback(() => {
    clearAllTimers();
    setStatus("loading");
    setProgress(18);

    // Trickle progress forward realistically
    trickleTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) return prev + Math.random() * 12 + 6;
        if (prev < 70) return prev + Math.random() * 6 + 3;
        if (prev < 88) return prev + Math.random() * 2 + 0.8;
        if (prev < 94) return prev + 0.3;
        return prev;
      });
    }, 220);

    // Safety timeout: auto finish if taking longer than 8 seconds
    safetyTimerRef.current = setTimeout(() => {
      finish();
    }, 8000);
  }, [clearAllTimers]);

  const finish = useCallback(() => {
    if (trickleTimerRef.current) clearInterval(trickleTimerRef.current);
    trickleTimerRef.current = null;

    setStatus("completing");
    setProgress(100);

    // After reaching 100%, fade out and reset
    finishTimerRef.current = setTimeout(() => {
      setStatus("idle");
      setTimeout(() => {
        setProgress(0);
      }, 300);
    }, 280);
  }, []);

  // Listen for route changes to complete navigation
  const prevPathRef = useRef(`${pathname}?${searchParams.toString()}`);

  useEffect(() => {
    const currentPath = `${pathname}?${searchParams.toString()}`;
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      if (status === "loading") {
        finish();
      }
    }
  }, [pathname, searchParams, status, finish]);

  // Global click interception on internal links
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      // Ignore right/middle clicks or modified clicks
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      ) {
        return;
      }

      const anchor = (event.target as Element).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external, download, mailto, tel, anchor hashes
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Same origin only
        if (targetUrl.origin !== currentUrl.origin) return;

        // Skip if exact same path, search, and hash
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          targetUrl.hash === currentUrl.hash
        ) {
          return;
        }

        // Trigger loading bar
        start();
      } catch {
        // Ignore parsing errors
      }
    };

    const handlePopState = () => {
      start();
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
      clearAllTimers();
    };
  }, [start, clearAllTimers]);

  if (status === "idle" && progress === 0) {
    return null;
  }

  return (
    <div
      role="progressbar"
      aria-label="Page loading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none transition-opacity duration-300 ${
        status === "idle" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background track subtle tint */}
      <div className="absolute inset-0 bg-brand-500/10" />

      {/* Animated progress bar */}
      <div
        className="relative h-full transition-[width] ease-out will-change-[width]"
        style={{
          width: `${progress}%`,
          transitionDuration: status === "completing" ? "200ms" : "320ms",
          background:
            "linear-gradient(90deg, #7d1551 0%, #b1487e 40%, #e04b8d 75%, #ff85be 100%)",
          boxShadow: "0 0 10px rgba(224, 75, 141, 0.6), 0 0 4px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Glow peg at the leading right edge */}
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[14px] w-24 translate-x-3 pointer-events-none rounded-full blur-[4px]"
          style={{
            background:
              "radial-gradient(ellipse at right, rgba(255, 180, 215, 0.95) 0%, rgba(224, 75, 141, 0.6) 40%, transparent 80%)",
          }}
        />

        {/* Small bright spark at the very tip */}
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-2 bg-white/90 shadow-[0_0_8px_#ffffff] rounded-r-full"
        />
      </div>
    </div>
  );
}

export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <ProgressContent />
    </Suspense>
  );
}
