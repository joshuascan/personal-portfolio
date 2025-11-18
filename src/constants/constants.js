export const projects = [
  {
    title: "Metronome",
    description:
      "A metronome app built using React and Styled Components. Allows for both tempo and time signature to be adjusted. It also includes a visual indicator of the beat cycle.",
    image: "/images/metronome.png",
    visit: "https://scanlan-metronome-app.netlify.app/",
    source: "https://github.com/joshuascan/metronome",
    id: 0,
  },
  {
    title: "Andrea Ayala Portfolio",
    description: "A portfolio site built using Next.js and styled components.",
    image: "/images/ayala_portfolio.png",
    visit: "https://andrea-ayala-portfolio.vercel.app/",
    source: "https://github.com/joshuascan/andrea-ayala-portfolio",
    id: 1,
  },
  {
    title: "Polygon Name Service",
    description:
      "Domain name service on the Polygon network. Built using React, Solidity, Ethers, and Tailwind CSS.",
    image: "/images/polygon_dns.png",
    visit: "https://dum-name-service.vercel.app/",
    source: "https://github.com/joshuascan/domain-name-service-frontend",
    contract: "https://github.com/joshuascan/domain-contract",
    id: 2,
  },
  {
    title: "Memory Game",
    description:
      "A memory game built using Typescript, Next.js, and Tailwind CSS.",
    image: "/images/memory_game.png",
    visit: "https://memory-game-eight-eta.vercel.app/",
    source: "https://github.com/joshuascan/memory-game",
    id: 3,
  },
  {
    title: "Ethereum To-do List",
    description:
      "A to-do list on the Ethereum blockchain. Built with Next.js, Ethers, Solidity, and Tailwind CSS.",
    image: "/images/todolist_dapp.png",
    visit: "https://todolist-dapp-eight.vercel.app/",
    source: "https://github.com/joshuascan/eth-todolist-frontend",
    contract: "https://github.com/joshuascan/eth-todolist-contract",
    id: 4,
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio built with Next.js and styled components. Utilizes the SendGrid API for the contact form.",
    image: "/images/portfolio_site.png",
    source: "https://github.com/joshuascan/personal-portfolio",
    id: 5,
  },
  {
    title: "TMDB App",
    description:
      "A movie/TV show database app built using Next.js, Tanstack Query, and Panda CSS.",
    image: "/images/tmdb_app.png",
    visit: "https://tmdb-tanstack-query-app.vercel.app/",
    source: "https://github.com/joshuascan/tmdb-tanstack-query-app",
    id: 6,
  },
];

export const caseStudies = [
  {
    slug: "newton-staking",
    title: "Staking & Rewards Flow",
    excerpt:
      "CASE STUDY: Designing an intuitive, resilient multi-step staking and rewards flow.",
    image: "/images/newton_staking.png",
    id: 0,
  },
  {
    slug: "ui-library-evolution",
    title: "Internal UI Library",
    excerpt:
      "CASE STUDY: Standardizing accessible, predictable UI primitives used across the product.",
    image: "/images/ui_components_collage.png",
    id: 1,
  },
];

export const caseStudyContent = {
  "newton-staking": {
    title: "Staking & Rewards Flow",
    heroImage: "/images/newton_staking.png",
    sections: [
      {
        heading: "Context",
        body: "As part of Magic’s wallet product ecosystem, users can stake their tokens to earn rewards over time. The core challenge was to design an intuitive, multi-step workflow that guided users through transferring funds, staking, monitoring progress, and claiming rewards — all without breaking the sense of continuity across asynchronous blockchain operations.",
      },
      {
        heading: "Problem",
        body: "Staking is inherently non-linear. Users must:",
        bullets: [
          "Approve contract interactions",
          "Initiate on-chain transactions",
          "Wait for confirmations",
          "Handle network conditions and wallet state",
          "Return later to claim rewards or unstake",
        ],
      },
      {
        heading: "Design Goals",
        body: "Interruptions (refresh, navigation, loss of session) risked losing context, leading to confusion and repeated or failed actions. We needed a flow that:",
        bullets: [
          "Maintained stable in‑app state during long‑running operations",
          "Reflected real-time chain state changes",
          "Clearly communicated progress and completion",
          "Avoided overwhelming the user with blockchain details",
        ],
      },
      {
        heading: "Constraints & Challenges",
        bullets: [
          "Complex async workflows involving blockchain confirmations",
          "Wallet state and token balances could change outside the app",
          "Refreshing the page could reset UI state mid-flow",
          "Needed to avoid unnecessary re-renders in high-frequency state updates",
          "Required a UI that was trust-building, not “magic happens here”",
        ],
      },
      {
        heading: "My Role",
        body: "I was the primary engineer responsible for implementing the staking user experience, including the state management, interaction patterns, and progress UI.",
      },
      {
        heading: "Specifically, I",
        bullets: [
          "Partnered with design on the multi‑step staking workflow and built the end‑to‑end frontend implementation",
          "Implemented shared state with React Context and React Query to coordinate flow state and network data",
          "Set up GraphQL-driven polling and event-based updates to reflect live reward accrual",
          "Kept sensitive UI transitions smooth, even during async operations",
          "Refined messaging and progress indicators so users always knew what was happening and what would come next",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Users progressed through staking steps reliably without losing place during async operations or in‑app navigation",
          "UI behavior remains consistent even under asynchronous network conditions",
          "Reduced user confusion and support requests related to staking flow interruptions",
          "The workflow patterns developed here were later reused in other multi-step funding & onboarding flows across the product",
        ],
      },
    ],
  },
  "ui-library-evolution": {
    title: "Internal UI Library",
    heroImage: "/images/ui_components_collage.png",
    sections: [
      {
        heading: "My Role",
        body: "I became the primary engineer responsible for evolving and maintaining the internal Magic Labs UI library. My work focused on creating predictable, consistent, and accessible building blocks that other engineers could rely on.",
      },
      {
        heading: "Key Contributions",
        bullets: [
          "Standardized APIs across all core components (Button, Select, Dropdown Menu, Tabs, Modals, Inputs)",
          "Consolidated styling into a consistent token system using Panda CSS",
          "Implemented focus states, keyboard navigation, and ARIA roles across interactive components",
          "Refactored components to reduce unnecessary re-renders and improve async interaction stability",
          "Replaced duplicated components with unified primitives shared across product surfaces",
          "Documented recommended usage patterns so teams used components consistently",
          "Improved DX by making components intuitive, predictable, and safer to use",
          "Drove alignment between product/design and engineering around reusable patterns",
        ],
      },
      {
        heading: "Examples of Improvements Made",
        body: "Selected highlights that made the library more consistent, accessible, and maintainable.",
      },
      {
        heading: "Button API Unification",
        body: "Consolidated multiple button variants into one predictable API using a single `variant` prop and standardized `loading` behavior, reducing surface area and cognitive load.",
        bullets: [
          "One component to learn and maintain",
          "Consistent loading/disabled semantics across surfaces",
          "Fewer breaking changes when evolving styles",
        ],
      },
      {
        heading: "Dropdown & Menu Overhaul",
        body: "Rebuilt menus with accessible navigation and predictable open/close behavior. Removed duplicates by shipping a shared primitive adopted across product areas.",
        bullets: [
          "Keyboard navigation and focus management",
          "Deterministic open/close and outside-click handling",
          "Single primitive reused across agent site, staking, funding, onboarding",
        ],
      },
      {
        heading: "Tabs & Step Navigation",
        body: "Refactored tabs to handle async state and route changes without layout shift. Codified a pattern for multi‑step flows.",
        bullets: [
          "Consistent animation and focus behavior",
          "Explicit disabled and loading states",
          "Drop-in pattern used across staking and agent onboarding",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Strongly reduced UI drift and duplicated component logic",
          "Improved accessibility across the entire suite",
          "Engineers could move faster with fewer bugs caused by inconsistent UI primitives",
          "Product surfaces felt more cohesive, even though different teams maintained them",
          "The UI layer became significantly easier to extend and maintain",
          "New features were built using consistent patterns rather than reinvented components",
        ],
      },
    ],
  },
};
