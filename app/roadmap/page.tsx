import type { Metadata } from "next";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Where Nova is headed — what we're shipping now, next, and later.",
};

const columns = [
  {
    title: "Now",
    badge: "In progress",
    items: [
      "Workspace-level data dictionary with suggested event names",
      "Funnel compare: overlay two funnels side by side",
      "Faster bulk event re-imports via CLI",
    ],
  },
  {
    title: "Next",
    badge: "Planned",
    items: [
      "Session replay that stitches to the event stream",
      "Prophecy-style anomaly detection on revenue KPIs",
      "Native dbt sync for warehouse-first teams",
    ],
  },
  {
    title: "Later",
    badge: "Exploring",
    items: [
      "AI assistant for natural-language funnel queries",
      "Experiment layer that weights variants against cohorts",
      "Offline event ingestion for native mobile apps",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <MarketingPage
      eyebrow="Roadmap"
      title="Where Nova is headed"
      description="Public and honest. Items can slip, but they never disappear silently."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((column) => (
          <Card key={column.title} className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{column.title}</CardTitle>
                <Badge variant="outline">{column.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </MarketingPage>
  );
}