"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Hamburger button + slide-down panel for small screens.
 * Isolated as a client component so the rest of the header can stay server-rendered.
 */
export default function MobileNav({ links, activeHref }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-slate-100"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full z-40 border-b border-slate-200 bg-white shadow-lg"
        >
          <nav className="container-page flex flex-col py-2" aria-label="Mobile">
            {links.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-lg px-2 py-3 text-base font-semibold transition-colors",
                    isActive
                      ? "text-brand-600"
                      : "text-navy-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
