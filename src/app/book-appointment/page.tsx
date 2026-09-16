import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PreferTalkCard } from "@/components/sections/PreferTalkCard";
import { HomeCta } from "@/components/sections/HomeCta";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book an Appointment",
  description:
    "Book a fertility consultation at Bourn Hall in Dubai, Abu Dhabi or Al Ain. Tell us about your goals and our care team will reach out within 24 hours.",
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return (
    <>
      <section className="relative bg-white pb-16 pt-[calc(var(--header-h)+2.75rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+3.5rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+4rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 surface-bloom"
        />
        <Container className="relative">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-[4.5rem]">
            <div className="flex max-w-[500px] flex-col gap-8 lg:sticky lg:top-[calc(var(--header-h)+1.25rem)] lg:gap-11 lg:self-start">
              <div>
                <h1 className="text-[2.25rem] leading-[1.12] font-medium tracking-tight text-ink-950 sm:text-[2.75rem] sm:leading-[1.1] lg:text-[clamp(2.85rem,3.5vw,3.5rem)] lg:leading-[1.08]">
                  Book your fertility{" "}
                  <span className="text-brand-500">consultation</span>
                </h1>
                <p className="mt-4 max-w-[420px] text-base leading-[1.65] text-brand-600 sm:mt-5 sm:text-lg sm:leading-[1.7]">
                  Tell us a little about you and your goals. Our care team will reach out within 24
                  hours to confirm a time that works for you.
                </p>
              </div>

              <PreferTalkCard className="max-w-[420px]" />
            </div>

            <div className="min-w-0 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(36,26,40,0.28)] sm:p-8 lg:p-10">
              <AppointmentForm />
            </div>
          </div>
        </Container>
      </section>

      <HomeCta />
    </>
  );
}
