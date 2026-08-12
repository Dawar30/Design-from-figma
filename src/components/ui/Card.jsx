import { cn } from "@/utils/cn";

/**
 * Generic white surface with a soft border and shadow.
 * `as` lets callers render it as an <article>, <section>, etc. for semantics.
 */
export default function Card({
  as: Component = "div",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
