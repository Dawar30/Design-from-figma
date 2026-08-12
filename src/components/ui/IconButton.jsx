import { cn } from "@/utils/cn";

/**
 * Square/round icon-only button. Always requires a `label` so it has an
 * accessible name for screen readers. Renders a real <button> by default.
 */
export default function IconButton({
  as: Component = "button",
  label,
  className,
  children,
  type,
  ...props
}) {
  const isNativeButton = Component === "button";

  return (
    <Component
      type={isNativeButton ? type ?? "button" : type}
      aria-label={label}
      title={label}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-navy-900",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
