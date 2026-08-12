import { cn } from "@/utils/cn";

const VARIANTS = {
  // Deep navy call-to-action (Create Account, Upload, Search, Upgrade Now).
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-sm",
  // White button with a subtle border (social sign-in buttons).
  outline:
    "bg-white text-navy-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
  // Bright cyan pill (active filter chips).
  brand:
    "bg-brand-400 text-white hover:bg-brand-500 active:bg-brand-600 shadow-sm",
  // Low-emphasis text button.
  ghost: "bg-transparent text-navy-900 hover:bg-slate-100",
};

const SIZES = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-14 px-6 text-base gap-2",
};

/**
 * Polymorphic button. Renders a real <button> by default, but accepts `as`
 * (e.g. Next's Link) so navigational actions stay semantic and accessible.
 */
export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type,
  children,
  ...props
}) {
  const isNativeButton = Component === "button";

  return (
    <Component
      type={isNativeButton ? type ?? "button" : type}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-xl font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
