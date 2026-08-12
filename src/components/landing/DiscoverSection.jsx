"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaterialCard from "@/components/landing/MaterialCard";
import { materials, subjectFilters } from "@/data/materials";
import { cn } from "@/utils/cn";

/**
 * "Discover Knowledge" section with subject filter chips. Filtering runs on the
 * client, so this component owns the active-filter state and derives the list.
 */
export default function DiscoverSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleMaterials = useMemo(() => {
    if (activeFilter === "all") return materials;
    return materials.filter((material) => material.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Discover Knowledge
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Explore top-rated notes across disciplines.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter materials by subject"
          >
            {subjectFilters.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "focus-ring rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-brand-400 bg-brand-400 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-navy-900"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/materials"
            className="focus-ring inline-flex items-center gap-2 rounded-md font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            View all materials
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
