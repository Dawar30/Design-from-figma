import Link from "next/link";
import { Award } from "lucide-react";
import Button from "@/components/ui/Button";

/** Sidebar promo encouraging users to upgrade to the premium plan. */
export default function PremiumCard() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-brand-100 via-indigo-100 to-purple-100 p-8 text-center">
      <Award
        size={40}
        strokeWidth={1.75}
        className="mx-auto text-navy-900"
        aria-hidden="true"
      />
      <h2 className="mt-4 text-2xl font-bold text-navy-900">Unlock Premium</h2>
      <p className="mx-auto mt-2 max-w-xs text-sm text-slate-600">
        Get ad-free studying and offline access.
      </p>
      <Button as={Link} href="/premium" className="mt-6 rounded-full px-8">
        Upgrade Now
      </Button>
    </section>
  );
}
