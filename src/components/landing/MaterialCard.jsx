import { BookOpen, Bookmark, FlaskConical, ThumbsUp } from "lucide-react";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";

// Maps the data `icon` key to a concrete lucide icon component.
const SUBJECT_ICONS = {
  flask: FlaskConical,
  book: BookOpen,
};

/** Study-material card used in the "Discover Knowledge" grid. */
export default function MaterialCard({ material }) {
  const { subject, icon, fileType, title, description, author, likes } = material;
  const SubjectIcon = SUBJECT_ICONS[icon] ?? BookOpen;

  return (
    <Card as="article" className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
          <SubjectIcon size={18} className="text-navy-900" aria-hidden="true" />
          {subject}
        </span>
        <Badge tone="slate" size="sm" className="uppercase tracking-wide">
          {fileType}
        </Badge>
      </div>

      <hr className="my-4 border-slate-100" />

      <h3 className="text-lg font-bold leading-snug text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      <hr className="my-4 border-slate-100" />

      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initials={author.initials} tone={author.tone} size="sm" />
          <span className="text-sm font-medium text-navy-900">{author.name}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium">
            <ThumbsUp size={16} aria-hidden="true" />
            {likes}
          </span>
          <IconButton label="Save material" className="h-8 w-8">
            <Bookmark size={16} aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
