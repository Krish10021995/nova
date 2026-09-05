export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "goodbye-spreadsheets",
    title: "Goodbye spreadsheets, hello product truth",
    excerpt:
      "Why weekly spreadsheet exports quietly undermine product decisions — and what to do about it.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    category: "Product",
    content: [
      "Every Monday, someone at your company runs twenty exports into a spreadsheet to answer one question: how is the product actually doing? The answer is usually stale, usually disputed, and always rebuilt from scratch next week.",
      "Spreadsheets are where dashboard questions go to become chores. By the time data has been exported, cleaned, joined, and reformatted, the decision window has already closed. You end up reviewing last month in a meeting meant to decide next month.",
      "An event-based analytics platform changes the contract. Data lands in real time, in one vocabulary the whole team shares. A funnel is a first-class object, not a pivot table you hope someone maintained. And the numbers never disagree with billing — because revenue is just another event.",
      "The goal isn't to replace spreadsheets as a canvas. It's to make sure the truth your team argues about is the same truth, everywhere, in time to act on it.",
    ],
  },
  {
    slug: "cohorts-retention-30-days",
    title: "Cohorts: the D30 story your dashboard is hiding",
    excerpt:
      "Retention is a cohort story, not a headline. Here's how to read a retention table without fooling yourself.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    category: "Analytics",
    content: [
      "A single 'retention' number is a compromise: it averages new users, tired users, and power users into something you can put on a slide. It hides more than it reveals.",
      "Cohorts fix this by answering the honest question: of the people who signed up in June, what fraction is still active 30 days later? Group users by signup period and watch the curve. If July and August cohorts hold better than March's, something you shipped is working.",
      "Read the table along two axes. Read the rows to see if a cohort gets healthier with age. Read down the columns to see if recent cohorts start stronger. Both are real signals; conflating them is how product teams get surprised.",
      "Most importantly, cut by what you believe drives retention — onboarding source, plan, team size. The cohort table is where product intuition and data finally agree.",
    ],
  },
  {
    slug: "funnel-debugging-checklist",
    title: "A 10-minute funnel debugging checklist",
    excerpt:
      "Conversion dipped and the Slack channel is nervous. Work through this checklist before you change anything.",
    date: "Jul 24, 2026",
    readTime: "4 min read",
    category: "How-to",
    content: [
      "A funnel number moves and everyone has a theory. Slow down. Debugging a funnel is a process, not a guess.",
      "First, verify the data. Did instrumentation change in the window? Did an SDK bump or a campaign change alter the traffic source mix? A conversion dip backed by broken tracking is a false alarm.",
      "Second, split the funnel. Check conversion by traffic source, by plan, by platform. Nine times out of ten the dip is concentrated in one slice — and that slice is usually where you'll find the root cause.",
      "Third, look at the walls. Which step lost the most users? Compare step-over-step drop-off to last month, not just the total. The step that changed is the step to investigate.",
      "Finally, only then form a hypothesis and test it. Armed with a single-slice, single-step diagnosis, the fix is usually obvious. The checklist keeps you honest long enough to see it.",
    ],
  },
];