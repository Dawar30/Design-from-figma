import { Users } from "lucide-react";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";

/** Sidebar widget suggesting creators to follow. */
export default function RecommendedCreators({ creators }) {
  return (
    <Card as="section" className="p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold text-navy-900">
        <Users size={22} className="text-navy-900" aria-hidden="true" />
        Recommended Creators
      </h2>

      <ul className="mt-5 space-y-5">
        {creators.map((creator) => (
          <li key={creator.id} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Avatar initials={creator.initials} tone={creator.tone} />
              <div>
                <p className="font-semibold text-navy-900">{creator.name}</p>
                <p className="text-sm text-slate-500">{creator.field}</p>
              </div>
            </div>
            <button
              type="button"
              className="focus-ring rounded font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              Follow
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
