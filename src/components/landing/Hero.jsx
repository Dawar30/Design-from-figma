import { ArrowRight, GraduationCap } from "lucide-react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import Badge from "@/components/ui/Badge";
import ShowcaseCards from "@/components/landing/ShowcaseCards";

/** Landing hero: value proposition, search entry point and a floating card cluster. */
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-slate-50">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Copy + search */}
        <div className="max-w-xl">
          <Badge tone="brand" className="gap-1.5">
            <GraduationCap size={16} aria-hidden="true" />
            Join 500,000+ Students Worldwide
          </Badge>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
            A world of knowledge,
            <br />
            <span className="text-brand-500">shared by students.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Discover, share, and collaborate on high-quality academic notes. Your
            ultimate study companion designed to help you ace your way through
            education.
          </p>

          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            role="search"
            action="/explore"
          >
            <SearchBar
              id="hero-search"
              name="q"
              label="Search for universities, subjects, or courses"
              placeholder="Search for universities, subjects, or courses"
              size="lg"
              className="flex-1"
            />
            <Button type="submit" size="lg" className="shrink-0 px-7">
              Search
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </form>
        </div>

        {/* Decorative showcase (desktop only) */}
        <div className="hidden lg:block">
          <ShowcaseCards />
        </div>
      </div>
    </section>
  );
}
