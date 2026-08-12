import { cn } from "@/utils/cn";

const TONES = {
  lavender: "bg-indigo-100 text-indigo-700",
  purple: "bg-purple-200 text-purple-800",
  navy: "bg-navy-900 text-white",
  cyan: "bg-brand-400 text-white",
  slate: "bg-slate-200 text-slate-700",
};

const SIZES = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-12 w-12 text-base",
};

/**
 * Circular initials avatar. Used for note authors and recommended creators.
 * Purely decorative next to a visible name, so it is hidden from assistive tech.
 */
export default function Avatar({
  initials,
  tone = "slate",
  size = "md",
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-bold",
        TONES[tone] ?? TONES.slate,
        SIZES[size],
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
