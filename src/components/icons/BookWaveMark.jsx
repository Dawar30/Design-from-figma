/**
 * Brand mark: an open book with a cyan wave flowing across it.
 * The book and wave take separate Tailwind text-color classes so the same mark
 * can render in dark, light-on-dark and all-cyan contexts. `currentColor`
 * resolves per-path, so each element uses its own color class.
 */
export default function BookWaveMark({
  size = 28,
  bookClassName = "text-navy-900",
  waveClassName = "text-brand-500",
  className,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Open book: two symmetric pages with a spine gap. */}
      <g className={bookClassName} fill="currentColor">
        <path d="M22.7 15.1c-4.8-2.9-11-3.6-16.2-2.1-.9.2-1.5 1-1.5 1.9v19.4c0 1.2 1.2 2.1 2.4 1.8 4.6-1.2 9.9-.5 14 2 .5.3 1.1.3 1.3-.2V15.6c0-.2-.1-.4-.3-.5Z" />
        <path d="M25.3 15.1c4.8-2.9 11-3.6 16.2-2.1.9.2 1.5 1 1.5 1.9v19.4c0 1.2-1.2 2.1-2.4 1.8-4.6-1.2-9.9-.5-14 2-.5.3-1.1.3-1.3-.2V15.6c0-.2.1-.4.3-.5Z" />
      </g>

      {/* Cyan wave ribbon crossing the pages. */}
      <path
        className={waveClassName}
        d="M3.5 27.5c3.8-3.4 7.2-3.4 10.5 0 3.3 3.4 6.7 3.4 10 0 3.3-3.4 6.7-3.4 10 0 3.3 3.4 6.7 3.4 10.5 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
