import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, FileText, MessagesSquare } from "lucide-react";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Nova community — show-and-tell, questions, and growth patterns.",
};

const communities = [
  {
    icon: MessagesSquare,
    title: "Ask the group",
    description:
      "Funnel debugging, event-naming opinions, cohort gut-checks. No response times guaranteed, but usually fast.",
    href: "/status",
    label: "Join the forum",
  },
  {
    icon: BarChart3,
    title: "Show-and-tell",
    description:
      "Share what you shipped with Nova — team dashboards, anomaly wins, and measurable before/afters.",
    href: "/blog",
    label: "Read the blog",
  },
  {
    icon: FileText,
    title: "Public code",
    description:
      "This showcase is open source. Report a bug, improve a chart, or fork the whole thing.",
    href: "https://github.com/Krish10021995/nova",
    label: "Open on GitHub",
  },
];

export default function CommunityPage() {
  return (
    <MarketingPage
      eyebrow="Community"
      title="Learn out loud"
      description="A few hundred product teams using Nova to make decisions they can defend. Come hang out."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {communities.map((community) => (
          <Card
            key={community.title}
            className="h-full transition-[box-shadow] hover:ring-2 hover:ring-primary/40"
          >
            <CardContent className="py-8">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <community.icon className="size-5" />
              </span>
              <CardTitle className="mt-4 text-base">{community.title}</CardTitle>
              <CardDescription className="mt-2 text-sm leading-relaxed">
                {community.description}
              </CardDescription>
              <Link
                href={community.href}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {community.label}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </MarketingPage>
  );
}