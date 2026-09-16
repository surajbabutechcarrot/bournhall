import {
  Baby,
  CalendarCheck,
  Clock,
  Dna,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Phone,
  Snowflake,
  Sparkles,
  Stethoscope,
  TestTube,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Content files reference icons by name so the data stays plain and reusable
 * across pages; this registry is the only place that touches the icon library.
 */
export const iconRegistry = {
  baby: Baby,
  calendar: CalendarCheck,
  clock: Clock,
  dna: Dna,
  flask: FlaskConical,
  heart: HeartHandshake,
  pulse: HeartPulse,
  microscope: Microscope,
  phone: Phone,
  snowflake: Snowflake,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  testTube: TestTube,
  user: UserRound,
} as const;

export type IconName = keyof typeof iconRegistry;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Glyph = iconRegistry[name];
  return <Glyph aria-hidden className={cn("size-5", className)} />;
}
