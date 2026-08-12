import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Tabs from "@/components/ui/Tabs";
import NoteCard from "@/components/feed/NoteCard";
import TrendingSubjects from "@/components/feed/TrendingSubjects";
import RecommendedCreators from "@/components/feed/RecommendedCreators";
import PremiumCard from "@/components/feed/PremiumCard";
import {
  feedTabs,
  notes,
  trendingSubjects,
  recommendedCreators,
} from "@/data/feed";

export const metadata = {
  title: "Home Feed — Maktab-e-Jahan",
  description: "Your personalized feed of top academic notes and creators.",
};

export default function FeedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SiteHeader showSearch activeHref="/feed" />

      <main className="container-page flex-1 py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Feed column */}
          <section aria-label="Notes feed">
            <h1 className="sr-only">Home feed</h1>
            <Tabs tabs={feedTabs} />
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside aria-label="Recommendations" className="space-y-6">
            <TrendingSubjects subjects={trendingSubjects} />
            <RecommendedCreators creators={recommendedCreators} />
            <PremiumCard />
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
