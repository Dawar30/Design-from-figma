"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

/**
 * Underlined tab strip (For You / Following / Trending).
 * Manages its own active state; notifies the parent via `onChange` if provided.
 * Uses the WAI-ARIA tablist pattern for keyboard and screen-reader support.
 */
export default function Tabs({ tabs, defaultTab, onChange, className }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  function handleSelect(id) {
    setActive(id);
    onChange?.(id);
  }

  return (
    <div
      role="tablist"
      aria-label="Feed filters"
      className={cn(
        "flex items-center gap-6 border-b border-slate-200",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => handleSelect(tab.id)}
            className={cn(
              "focus-ring -mb-px border-b-2 px-1 pb-3 text-base font-semibold transition-colors",
              isActive
                ? "border-brand-500 text-navy-900"
                : "border-transparent text-slate-500 hover:text-navy-900"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
