import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { footerLinks } from "@/data/navigation";

/** Global dark footer with the brand lockup, copyright and secondary links. */
export default function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo tone="brand" markSize={26} />
          <p className="text-sm text-slate-400">
            © 2024 Maktab-e-Jahan. Knowledge Flow.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
