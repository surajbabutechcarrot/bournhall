import { CalendarDays, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 shadow-soft backdrop-blur-[12px]">
      <Container className="flex h-[68px] items-center justify-between gap-4 lg:h-[84px]">
        <Logo priority />

        <div className="flex items-center gap-4 lg:gap-11">
          <DesktopNav />

          <div className="flex items-center gap-2 lg:gap-4">
            <button
              type="button"
              className="hidden items-center text-sm font-medium leading-5 text-[#6b1a2e] transition-colors hover:text-brand-500 sm:inline-flex"
              aria-label="Language: English"
            >
              EN
              <ChevronDown aria-hidden className="size-5" strokeWidth={1.6} />
            </button>

            <Button
              href="/book-appointment"
              className="hidden sm:inline-flex"
              iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
            >
              Book a Consultation
            </Button>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
