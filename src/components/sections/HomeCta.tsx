import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  return (
    <section className="surface-cta home-cta-pad relative overflow-hidden section-y pb-28 text-center sm:pb-36 lg:min-h-[min(520px,78dvh)] lg:pb-40">
      <Container size="narrow" className="relative z-10">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#b1487e] uppercase sm:text-sm">
          Your next step
        </p>

        <h2 className="mt-3.5 text-4xl leading-[1.12] font-medium tracking-tight sm:text-5xl lg:text-[56px]">
          <span className="block text-ink-950">Ready to Take the</span>
          <span className="block font-medium text-brand-500">Next Step?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#7d1551] sm:text-lg">
          Our fertility specialists are here to listen, answer your questions and help you
          understand your options.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            href="/book-appointment"
            size="lg"
            className="w-full justify-center rounded-full bg-[#6d0044] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#5c0f3c] sm:w-auto"
            iconBefore={<CalendarDays aria-hidden className="size-4" strokeWidth={1.8} />}
          >
            Book a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
