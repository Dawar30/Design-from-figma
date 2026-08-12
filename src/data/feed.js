/** Tabs shown above the feed. */
export const feedTabs = [
  { id: "for-you", label: "For You" },
  { id: "following", label: "Following" },
  { id: "trending", label: "Trending" },
];

/**
 * Feed notes. `subject.tone` maps to a Badge tone; `author.tone` maps to an
 * Avatar tone so the visuals stay data-driven.
 */
export const notes = [
  {
    id: "data-structures-recursion",
    author: {
      name: "Prof. Alan Jones",
      institution: "Stanford University",
      initials: "AJ",
      tone: "lavender",
      verified: true,
    },
    subject: { label: "Computer Science", tone: "brand" },
    title: "Data Structures — Complete Recursion Notes",
    description:
      "Comprehensive guide covering recursive algorithms, call stacks, memoization techniques, and common pitfalls with practical examples in Python and Java.",
    tags: ["#Algorithms", "#CS101"],
    tagTone: "brand",
    likes: 342,
    comments: 28,
  },
  {
    id: "quantum-wave-functions",
    author: {
      name: "Sarah Kim",
      institution: "MIT",
      initials: "SK",
      tone: "purple",
      verified: false,
    },
    subject: { label: "Physics", tone: "purple" },
    title: "Quantum Mechanics: Wave Functions",
    description:
      "Detailed notes on Schrödinger's equation, probability densities, and normalization. Includes worked examples for infinite potential wells.",
    tags: ["#Quantum", "#Physics"],
    tagTone: "purple",
    likes: 856,
    comments: 112,
  },
];

/** Right sidebar: trending subjects with note counts. */
export const trendingSubjects = [
  { id: "machine-learning", name: "Machine Learning", notes: "12k Notes" },
  { id: "microeconomics", name: "Microeconomics", notes: "8k Notes" },
  { id: "organic-chemistry", name: "Organic Chemistry", notes: "6.5k Notes" },
];

/** Right sidebar: recommended creators to follow. */
export const recommendedCreators = [
  {
    id: "emily-chen",
    name: "Dr. Emily Chen",
    field: "Mathematics",
    initials: "EM",
    tone: "navy",
  },
  {
    id: "john-doe",
    name: "John Doe",
    field: "Law Studies",
    initials: "JD",
    tone: "cyan",
  },
];
