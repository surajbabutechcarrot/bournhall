"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setIsAtTop(true);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let ticking = false;
    const onWindowScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsAtTop(window.scrollY <= 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    setIsAtTop(window.scrollY <= 24);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  useLenis((lenis) => {
    setIsAtTop(Math.max(0, lenis.scroll) <= 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-visible",
        "transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out",
        "motion-reduce:transition-none",
        menuOpen
          ? "bg-white shadow-none"
          : isAtTop
            ? "bg-transparent shadow-none backdrop-blur-none"
            : "bg-white/95 shadow-soft backdrop-blur-md sm:bg-white/85",
      )}
    >
      <Container className="flex h-[var(--header-h)] min-w-0 items-center justify-between gap-3 md:gap-4">
        <Logo priority className="h-7 w-auto shrink-0 md:h-8 lg:h-8 xl:h-9 min-[1512px]:h-11" />

        <div className="flex min-w-0 items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 min-[1512px]:gap-11">
          <DesktopNav />

          <div className="flex shrink-0 items-center gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3">
            <button
              type="button"
              className="hidden items-center text-sm font-medium leading-5 text-[#6b1a2e] transition-colors hover:text-brand-500 min-[1512px]:inline-flex"
              aria-label="Language: English"
            >
              EN
              <ChevronDown aria-hidden className="size-5" strokeWidth={1.6} />
            </button>

            <Button
              href="/book-appointment"
              size="sm"
              className="hidden lg:inline-flex xl:h-10 xl:px-5 min-[1512px]:h-11 min-[1512px]:px-6"
              iconBefore={<CalendarDays aria-hidden className="size-4 xl:size-5" strokeWidth={1.6} />}
            >
              <span className="min-[1512px]:hidden">Book</span>
              <span className="hidden min-[1512px]:inline">Book a Consultation</span>
            </Button>

            <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
}
