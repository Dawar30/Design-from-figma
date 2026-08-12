import { BadgeCheck, Flame, ThumbsUp } from "lucide-react";
import Badge from "@/components/ui/Badge";

/** Small stacked avatars with a "+N" overflow chip (social proof on the main card). */
function AvatarStack() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        <span className="h-7 w-7 rounded-full border-2 border-white bg-indigo-300" />
        <span className="h-7 w-7 rounded-full border-2 border-white bg-purple-300" />
      </div>
      <span className="-ml-1 flex h-7 items-center rounded-full border-2 border-white bg-slate-800 px-2 text-xs font-semibold text-white">
        +12
      </span>
    </div>
  );
}

/**
 * Floating card cluster shown beside the hero copy. Purely decorative, so the
 * whole cluster is hidden from assistive tech.
 */
export default function ShowcaseCards() {
  return (
    <div
      className="relative mx-auto h-[480px] w-full max-w-md animate-fade-in-up"
      aria-hidden="true"
    >
      {/* Verified contributor chip */}
      <div className="absolute right-4 top-0 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-float">
        <BadgeCheck size={22} className="text-brand-500" />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-navy-900">Oxford University</p>
          <p className="text-xs text-slate-500">Verified Contributor</p>
        </div>
      </div>

      {/* Main featured note */}
      <article className="absolute right-0 top-20 z-10 w-[340px] rounded-2xl bg-white p-6 shadow-float">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-white">
              MC
            </span>
            <div className="leading-tight">
              <p className="font-bold text-navy-900">Advanced Calculus II</p>
              <p className="text-sm text-slate-500">Mathematics Dept.</p>
            </div>
          </div>
          <Badge tone="brand" size="sm">
            TOP RATED
          </Badge>
        </div>

        <hr className="my-4 border-slate-100" />

        <p className="text-sm leading-relaxed text-slate-600">
          Comprehensive lecture notes covering vector calculus, line integrals,
          surface integrals, and theorems of Green, Stokes,...
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500">
            <ThumbsUp size={18} />
            2.4k
          </span>
          <AvatarStack />
        </div>
      </article>

      {/* Trending now chip */}
      <div className="absolute bottom-4 left-0 z-20 rounded-2xl bg-white px-4 py-3 shadow-float">
        <p className="text-xs text-slate-500">Trending Now</p>
        <p className="mt-0.5 flex items-center gap-1.5 font-bold text-navy-900">
          <Flame size={16} className="text-orange-500" />
          Intro to Psychology
        </p>
      </div>
    </div>
  );
}
