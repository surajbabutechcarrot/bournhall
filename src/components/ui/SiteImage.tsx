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
        data-scroll-media
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
