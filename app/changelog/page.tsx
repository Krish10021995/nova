import type { Metadata } from "next";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "What's new in Nova — product updates shipped by the team.",
};

const entries = [
  {
    version: "v0.24",
    date: "Sep 2, 2026",
    badge: "New",
    notes: [
      "Scheduled reports can now split by audience segment in Slack delivery.",
      "Added seven-day cohort chart to the Audiences page.",
      "New retry policy for webhook-based events with dead-letter inspection.",
    ],
  },
  {
    version: "v0.23",
    date: "Aug 19, 2026",
    badge: "Improved",
    notes: [
      "Dashboard charts now honor the light and dark theme switch instantly.",
      "Funnel builder supports conditional steps (e.g. 'skipped' branches).",
      "Faster first paint on large workspaces via streaming aggregations.",
    ],
  },
  {
    version: "v0.22",
    date: "Aug 5, 2026",
    badge: "New",
    notes: [
      "Introducing Reports — recurring digests delivered to Slack and email.",
      "New REST /query endpoint for programmatic aggregations.",
      "Audience export to CSV on every segment.",
    ],
  },
  {
    version: "v0.21",
    date: "Jul 22, 2026",
    badge: "Fixed",
    notes: [
      "Resolved timezone drift on weekly traffic buckets for UTC+ regions.",
      "Fixed an edge case where churn KPI mis-counted canceled trials.",
      "Improved tooltip contrast in dark mode across all charts.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <MarketingPage
      eyebrow="Changelog"
      title="What's new"
      description="A running log of Nova's product updates. Roughly two releases a month, always backwards compatible."
    >
      <div className="mx-auto max-w-3xl">
        {entries.map((entry, i) => (
          <div key={entry.version}>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                {entry.version}
              </h2>
              <Badge variant="secondary">{entry.badge}</Badge>
              <span className="text-sm text-muted-foreground">
                {entry.date}
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {entry.notes.map((note) => (
                <li
                  key={note}
                  className="flex gap-2.5 text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span className="text-sm leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
            {i < entries.length - 1 ? <Separator className="my-8" /> : null}
          </div>
        ))}
      </div>
    </MarketingPage>
  );
}