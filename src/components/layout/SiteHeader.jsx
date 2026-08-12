import Link from "next/link";
import { Bell, Upload, UserCircle2 } from "lucide-react";
import Logo from "@/components/icons/Logo";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import MobileNav from "@/components/layout/MobileNav";
import { navLinks } from "@/data/navigation";
import { cn } from "@/utils/cn";

/**
 * Global site header used on the landing and feed pages.
 * `showSearch` reveals the resource search field (feed only), and `activeHref`
 * marks the current primary-nav item.
 */
export default function SiteHeader({ showSearch = false, activeHref = "/feed" }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page relative flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        {/* Left: brand + primary navigation */}
        <div className="flex items-center gap-8">
          <Logo markSize={26} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring relative rounded-md py-1 text-sm font-medium transition-colors",
                    isActive
                      ? "font-semibold text-brand-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-500"
                      : "text-slate-600 hover:text-navy-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: search + actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showSearch && (
            <SearchBar
              id="resource-search"
              label="Search resources"
              placeholder="Search resources..."
              className="hidden w-64 md:block xl:w-80"
            />
          )}

          <Button
            as={Link}
            href="/upload"
            size="sm"
            className="rounded-full px-4"
          >
            <Upload size={16} aria-hidden="true" />
            Upload
          </Button>

          <IconButton
            as={Link}
            href="/notifications"
            label="Notifications"
            className="hidden h-10 w-10 sm:inline-flex"
          >
            <Bell size={20} aria-hidden="true" />
          </IconButton>

          <IconButton
            as={Link}
            href="/account"
            label="Your account"
            className="hidden h-10 w-10 sm:inline-flex"
          >
            <UserCircle2 size={24} aria-hidden="true" />
          </IconButton>

          <MobileNav links={navLinks} activeHref={activeHref} />
        </div>
      </div>
    </header>
  );
}
