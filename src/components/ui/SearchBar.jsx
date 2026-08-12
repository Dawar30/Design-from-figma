import { Search } from "lucide-react";
import { cn } from "@/utils/cn";

const SIZES = {
  sm: "h-11 text-sm",
  lg: "h-14 text-base",
};

/**
 * Presentational search field: a rounded input with a leading search icon and
 * an accessible (visually hidden) label. Reused in the navbar and the hero.
 */
export default function SearchBar({
  id = "search",
  label = "Search",
  placeholder = "Search…",
  size = "sm",
  className,
  ...inputProps
}) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        className={cn(
          "focus-ring w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-navy-900 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus-visible:border-brand-500",
          SIZES[size]
        )}
        {...inputProps}
      />
    </div>
  );
}
