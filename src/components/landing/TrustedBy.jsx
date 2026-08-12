import { institutions } from "@/data/materials";

/**
 * Generic grayscale crest used as a placeholder. Replace with real institution
 * logos (via next/image) once brand assets are available.
 */
function CrestPlaceholder({ name }) {
  return (
    <div
      className="flex items-center gap-2 opacity-60 grayscale transition hover:opacity-90"
      title={name}
    >
      <svg width="28" height="32" viewBox="0 0 28 32" aria-hidden="true">
        <path
          d="M14 1 26 6v9c0 8-5.4 13.2-12 16C7.4 28.2 2 23 2 15V6l12-5Z"
          fill="none"
          stroke="#64748b"
          strokeWidth="1.5"
        />
        <path d="M14 8v12M8 14h12" stroke="#94a3b8" strokeWidth="1.5" />
      </svg>
      <span className="max-w-[7rem] text-xs font-semibold uppercase tracking-wide text-slate-500">
        {name}
      </span>
    </div>
  );
}

/** Social-proof band listing partner institutions. */
export default function TrustedBy() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="container-page">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
          Trusted by students from top institutions
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {institutions.map((institution) => (
            <li key={institution.id}>
              <CrestPlaceholder name={institution.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
