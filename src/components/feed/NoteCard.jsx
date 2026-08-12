import { BadgeCheck, Bookmark, Download, MessageSquare, ThumbsUp } from "lucide-react";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";

/** A single stat (icon + count) shown in the note footer. */
function Stat({ icon: Icon, value, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500">
      <Icon size={18} aria-hidden="true" />
      <span>{value}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Feed note card: author, subject, title, description, tags and engagement stats. */
export default function NoteCard({ note }) {
  const { author, subject, title, description, tags, tagTone, likes, comments } = note;

  return (
    <Card as="article" className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar initials={author.initials} tone={author.tone} />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-navy-900">{author.name}</span>
              {author.verified && (
                <BadgeCheck
                  size={16}
                  className="text-brand-500"
                  aria-label="Verified"
                />
              )}
            </div>
            <p className="text-sm text-slate-500">{author.institution}</p>
          </div>
        </div>

        <Badge tone={subject.tone} className="shrink-0">
          {subject.label}
        </Badge>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug text-navy-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>

      {tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge tone={tagTone} size="sm">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="focus-ring rounded-md transition-colors hover:text-navy-900"
          >
            <Stat icon={ThumbsUp} value={likes} label="likes" />
          </button>
          <button
            type="button"
            className="focus-ring rounded-md transition-colors hover:text-navy-900"
          >
            <Stat icon={MessageSquare} value={comments} label="comments" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <IconButton label="Save note" className="h-9 w-9">
            <Bookmark size={18} aria-hidden="true" />
          </IconButton>
          <IconButton label="Download note" className="h-9 w-9">
            <Download size={18} aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
