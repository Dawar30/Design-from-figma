import Logo from "@/components/icons/Logo";

/**
 * Left-hand promotional panel of the signup screen: brand lockup, headline
 * with a highlighted "Sea of Knowledge", supporting copy and a footer note.
 */
export default function SignupHero() {
  return (
    <section className="relative flex flex-col justify-between overflow-hidden bg-navy-950 px-8 py-10 text-white lg:px-14 lg:py-12">
      {/* Soft radial glow to add depth to the near-black panel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="relative">
        <Logo tone="light" markSize={30} />
      </div>

      <div className="relative max-w-md py-12">
        <h1 className="text-5xl font-bold leading-[1.08] tracking-tight lg:text-6xl">
          Dive into the{" "}
          <span className="text-brand-400">Sea of Knowledge</span>
        </h1>
        <p className="mt-7 text-lg leading-relaxed text-slate-400">
          Join a premier academic community. Access curated resources, connect
          with peers, and elevate your learning experience.
        </p>
      </div>

      <p className="relative text-sm text-slate-500">© 2024 Maktab-e-Jahan.</p>
    </section>
  );
}
