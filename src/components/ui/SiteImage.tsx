import Image from "next/image";
import { cn } from "@/lib/cn";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  /** Skip GSAP scroll-media parallax (sticky frames, cropped portraits, etc.). */
  noParallax?: boolean;
};

export function SiteImage({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority,
  fill = true,
  width,
  height,
  noParallax = false,
}: SiteImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill && !width}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        {...(noParallax
          ? { "data-no-parallax": true }
          : { "data-scroll-media": true })}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
