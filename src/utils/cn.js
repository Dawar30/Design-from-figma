/**
 * Merge conditional class names into a single space-separated string.
 * Falsy values are dropped so callers can write `cn("base", isActive && "active")`.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
