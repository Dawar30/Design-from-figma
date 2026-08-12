/** Subject filter chips in the "Discover Knowledge" section. */
export const subjectFilters = [
  { id: "stem", label: "STEM" },
  { id: "humanities", label: "Humanities" },
  { id: "all", label: "All Subjects" },
];

/**
 * Study materials shown in the "Discover Knowledge" grid.
 * `icon` and `fileType` drive the card header; `category` groups by filter.
 */
export const materials = [
  {
    id: "organic-chemistry",
    subject: "Chemistry",
    icon: "flask",
    fileType: "PDF",
    category: "stem",
    title: "Organic Chemistry Mechanisms & Reactions",
    description:
      "Detailed notes on nucleophilic substitution, elimination reactions, and stereochemistry. Includes...",
    author: { name: "Sarah J.", initials: "SJ", tone: "slate" },
    likes: 342,
  },
  {
    id: "modernist-poetry",
    subject: "Literature",
    icon: "book",
    fileType: "DOCX",
    category: "humanities",
    title: "Modernist Poetry Analysis",
    description:
      "An in-depth look at T.S. Eliot and Ezra Pound, focusing on themes of fragmentation and disillusionment post-WWI.",
    author: { name: "Marcus K.", initials: "MK", tone: "navy" },
    likes: 128,
  },
];

/** Institutions displayed in the "Trusted by" logo band (placeholder crests). */
export const institutions = [
  { id: "harwick", name: "Harwick University" },
  { id: "quantum", name: "Quantum Institute of Technology" },
  { id: "unified", name: "Unified University" },
  { id: "advancing", name: "Advancing Knowledge University" },
  { id: "global", name: "Global Scholars College" },
];
