import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  return (
    <section className="surface-cta pt-16 pb-20 text-center sm:pt-20 sm:pb-24">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Your next step
        </p>
        <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-ink-900 sm:text-[2rem] lg:text-[2.375rem]">
          <span className="block">Ready to Take the</span>
          <Accent className="block">Next Step?</Accent>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-ink-600">
          Book a consultation with a Bourn Hall specialist, or speak with our team on our toll-free
          line.
        </p>
        <Button href="/book-appointment" size="lg" className="mt-8">
          Book Appointment
        </Button>
      </Container>
    </section>
  );
}
