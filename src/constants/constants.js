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
    title: "Memory Game",
    description:
      "A memory game built using Typescript, Next.js, and Tailwind CSS.",
    image: "/images/memory_game.png",
    visit: "https://memory-game-eight-eta.vercel.app/",
    source: "https://github.com/joshuascan/memory-game",
    id: 2,
  },
  {
    title: "Ethereum To-do List",
    description:
      "A to-do list on the Ethereum blockchain. Built with Next.js, Ethers, Solidity, and Tailwind CSS.",
    image: "/images/todolist_dapp.png",
    visit: "https://todolist-dapp-eight.vercel.app/",
    source: "https://github.com/joshuascan/eth-todolist-frontend",
    contract: "https://github.com/joshuascan/eth-todolist-contract",
    id: 3,
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio built with Next.js and styled components. Utilizes the SendGrid API for the contact form.",
    image: "/images/portfolio_site.png",
    source: "https://github.com/joshuascan/metronome",
    id: 4,
  },
  {
    title: "Polygon Name Service",
    description:
      "Domain name service on the Polygon network. Built using React, Solidity, Ethers, and Tailwind CSS.",
    image: "/images/polygon_dns.png",
    visit: "https://dum-name-service.vercel.app/",
    source: "https://github.com/joshuascan/domain-name-service-frontend",
    contract: "https://github.com/joshuascan/domain-contract",
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
      "Designing an intuitive, resilient multi-step staking and rewards flow.",
    image: "/images/newton_staking.png",
    id: 0,
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
          "Maintained persistent state across sessions",
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
          "Designed the multi-step staking workflow UI",
          "Implemented persistent local + shared state using Zustand and React Query to ensure continuity across refresh / navigation",
          "Set up GraphQL-driven polling and event-based updates to reflect live reward accrual",
          "Ensured sensitive UI transitions remained smooth, even during async operations",
          "Refined messaging and progress indicators so users always knew what was happening and what would come next",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Users can start staking, close the app, return later, and resume exactly where they left off",
          "UI behavior remains consistent even under asynchronous network conditions",
          "Reduced user confusion and support requests related to staking flow interruptions",
          "The workflow patterns developed here were later reused in other multi-step funding & onboarding flows across the product",
        ],
      },
    ],
  },
};
