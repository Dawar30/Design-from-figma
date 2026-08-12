import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import DiscoverSection from "@/components/landing/DiscoverSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activeHref="/feed" />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <DiscoverSection />
      </main>
      <SiteFooter />
    </div>
  );
}
