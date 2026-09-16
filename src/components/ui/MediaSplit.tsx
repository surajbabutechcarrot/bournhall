import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type MediaSplitProps = {
  image: { src: string; alt: string };
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
};

export function MediaSplit({
  image,
  children,
  reverse = false,
  className,
  imageClassName,
}: MediaSplitProps) {
  return (
    <Container className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", className)}>
      <SiteImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn(
          "aspect-[4/5] rounded-[2rem] shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]",
          reverse && "lg:order-2",
          imageClassName,
        )}
      />
      <div className={cn(reverse && "lg:order-1")}>{children}</div>
    </Container>
  );
}
