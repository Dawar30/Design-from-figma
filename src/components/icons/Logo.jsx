import Link from "next/link";
import BookWaveMark from "@/components/icons/BookWaveMark";
import { cn } from "@/utils/cn";

const TONES = {
  // Dark wordmark for light backgrounds (navbar).
  dark: { book: "text-navy-900", wave: "text-brand-500", word: "text-navy-900" },
  // White wordmark for dark backgrounds (signup hero panel).
  light: { book: "text-white", wave: "text-brand-400", word: "text-white" },
  // All-cyan wordmark used in the footer.
  brand: { book: "text-brand-400", wave: "text-brand-200", word: "text-brand-400" },
};

/**
 * The Maktab-e-Jahan lockup: the book-and-wave mark next to the wordmark.
 * Renders as a link to the homepage unless `asLink` is false.
 */
export default function Logo({
  tone = "dark",
  className,
  markSize = 28,
  asLink = true,
}) {
  const palette = TONES[tone] ?? TONES.dark;

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BookWaveMark
        size={markSize}
        bookClassName={palette.book}
        waveClassName={palette.wave}
      />
      <span className={cn("text-xl font-bold tracking-tight sm:text-2xl", palette.word)}>
        Maktab-e-Jahan
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" className="focus-ring rounded-md" aria-label="Maktab-e-Jahan home">
      {content}
    </Link>
  );
}
