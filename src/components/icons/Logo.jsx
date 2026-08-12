import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

// The extracted mark is wider than tall; intrinsic size preserves the ratio
// while the rendered height is controlled per usage.
const MARK_WIDTH = 555;
const MARK_HEIGHT = 363;

const TONES = {
  // Colored mark + dark wordmark for light backgrounds (navbar).
  dark: { src: "/logo-mark.png", word: "text-navy-900" },
  // White mark + white wordmark for dark backgrounds (signup hero panel).
  light: { src: "/logo-mark-white.png", word: "text-white" },
  // White mark + cyan wordmark used in the footer.
  brand: { src: "/logo-mark-white.png", word: "text-brand-400" },
};

/**
 * The Maktab-e-Jahan lockup: the brand mark (from /public) next to the
 * wordmark. The mark is decorative since the wordmark text sits beside it.
 * Renders as a link to the homepage unless `asLink` is false.
 */
export default function Logo({
  tone = "dark",
  className,
  markSize = 30,
  asLink = true,
  priority = false,
}) {
  const palette = TONES[tone] ?? TONES.dark;

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={palette.src}
        alt=""
        width={MARK_WIDTH}
        height={MARK_HEIGHT}
        priority={priority}
        style={{ height: markSize, width: "auto" }}
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
