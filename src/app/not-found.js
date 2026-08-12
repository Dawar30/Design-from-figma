import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/icons/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-4 text-center">
      <Logo markSize={30} />
      <div>
        <p className="text-6xl font-bold text-navy-900">404</p>
        <h1 className="mt-2 text-xl font-semibold text-navy-900">
          This page could not be found.
        </h1>
        <p className="mt-2 text-slate-500">
          The resource you are looking for may have been moved or removed.
        </p>
      </div>
      <Button as={Link} href="/">
        Back to home
      </Button>
    </main>
  );
}
