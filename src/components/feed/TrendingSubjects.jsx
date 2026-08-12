import { TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

/** Sidebar widget listing trending subjects with their note counts. */
export default function TrendingSubjects({ subjects }) {
  return (
    <Card as="section" className="p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold text-navy-900">
        <TrendingUp size={22} className="text-brand-500" aria-hidden="true" />
        Trending Subjects
      </h2>

      <ul className="mt-5 space-y-4">
        {subjects.map((subject) => (
          <li key={subject.id} className="flex items-center justify-between gap-3">
            <span className="font-semibold text-navy-900">{subject.name}</span>
            <Badge tone="brand" size="sm">
              {subject.notes}
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
