import { cn } from "@/utils/cn";

const TONES = {
  brand: "bg-brand-100 text-brand-700",
  purple: "bg-purple-100 text-purple-700",
  slate: "bg-slate-100 text-slate-600",
  navy: "bg-navy-900 text-white",
};

const SIZES = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

/**
 * Compact status/category label (subject tags, "TOP RATED", note counts, hashtags).
 */
export default function Badge({
  tone = "slate",
  size = "md",
  className,
  children,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        TONES[tone] ?? TONES.slate,
        SIZES[size],
        className
      )}
    >
      {children}
    </span>
  );
}
