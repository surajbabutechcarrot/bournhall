import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type DetailSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Shared narrow prose shell for inner detail pages (doctors, clinics, resources, treatments). */
export function DetailSection({ children, className }: DetailSectionProps) {
  return (
    <Section>
      <Container
        size="narrow"
        className={cn("space-y-4 text-[15px] leading-7 text-ink-500", className)}
      >
        {children}
      </Container>
    </Section>
  );
}

export function DetailFact({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <p>
      <strong className="text-ink-800">{label}:</strong> {value}
    </p>
  );
}
