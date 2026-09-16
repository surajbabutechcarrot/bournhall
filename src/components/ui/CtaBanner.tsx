import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  title: ReactNode;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  className?: string;
};

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("pb-4", className)}>
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#7d1551_0%,#3a0926_100%)] px-6 py-12 text-center text-white sm:px-10 sm:py-14">
          <h2 className="text-[1.75rem] font-bold tracking-tight sm:text-[2rem]">{title}</h2>
          {description ? (
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85">{description}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primary ? (
              <Button href={primary.href} variant="white" size="lg">
                {primary.label}
              </Button>
            ) : null}
            {secondary ? (
              <Button
                href={secondary.href}
                variant="outline"
                size="lg"
                className="border-white/70 text-white hover:bg-white/10"
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
