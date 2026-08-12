import { cn } from "@/utils/cn";

/**
 * Labelled text field with an optional leading icon and trailing slot
 * (used for the password visibility toggle). The label is always associated
 * with the input via `htmlFor`/`id` for accessibility.
 */
export default function Input({
  id,
  label,
  hint,
  icon: Icon,
  endAdornment,
  className,
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-semibold text-navy-900"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
        )}

        <input
          id={id}
          className={cn(
            "focus-ring h-12 w-full rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy-900 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus-visible:border-brand-500 focus-visible:bg-white",
            Icon ? "pl-11" : "pl-4",
            endAdornment ? "pr-11" : "pr-4"
          )}
          {...props}
        />

        {endAdornment && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {endAdornment}
          </div>
        )}
      </div>

      {hint && <p className="mt-1.5 text-sm text-slate-500">{hint}</p>}
    </div>
  );
}
