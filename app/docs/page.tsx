import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DocsPage } from "@/components/docs/docs-page";
import { H2, Note, P } from "@/components/docs/primitives";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Everything you need to model product data, install tracking, and read insights in Nova.",
};

const guides = [
  {
    href: "/docs/getting-started",
    title: "Getting started",
    description:
      "Create a workspace, install the tracking snippet, and see your first event in under ten minutes.",
  },
  {
    href: "/handbook",
    title: "Handbook",
    description:
      "Core concepts — events, users, properties, funnels and retention — explained the Nova way.",
  },
  {
    href: "/docs/api-reference",
    title: "API reference",
    description:
      "REST endpoints for ingesting events, resolving identities, and querying insights programmatically.",
  },
];

export default function DocsPageRoute() {
  return (
    <DocsPage
      active="/docs"
      title="Documentation"
      description="Nova turns raw product data into revenue, retention, and activation insights. Start here."
    >
      <P>
        Nova is an event-based analytics platform. You instrument once, and every
        chart in the dashboard — funnels, retention, revenue trends, and
        audience segments — is derived from the same clean event stream.
      </P>
      <P>
        These guides assume no analytics background. If you are brand new,
        start with the <Link href="/docs/getting-started" className="font-medium text-primary hover:underline">getting started</Link> guide; if you want the mental model first, read the{" "}
        <Link href="/handbook" className="font-medium text-primary hover:underline">handbook</Link>.
      </P>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="group">
            <Card className="h-full transition-[box-shadow] hover:ring-2 hover:ring-primary/40">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {guide.description}
                </CardDescription>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read the guide
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <H2>What Nova tracks</H2>
      <P>
        Sent a single event into Nova and it becomes graphable immediately.
        The platform models four primitives — <strong className="font-semibold text-foreground">events</strong>,{" "}
        <strong className="font-semibold text-foreground">users</strong>,{" "}
        <strong className="font-semibold text-foreground">properties</strong>, and{" "}
        <strong className="font-semibold text-foreground">groups</strong> — and
        treats revenue as a first-class event type so MRR reports never drift
        from your billing system.
      </P>

      <H2>Questions</H2>
      <P>
        Get unstuck faster in the{" "}
        <Link href="/community" className="font-medium text-primary hover:underline">
          community
        </Link>{" "}
        or open a thread with our team. For urgent incidents, check{" "}
        <Link href="/status" className="font-medium text-primary hover:underline">
          status
        </Link>
        .
      </P>

      <Note>
        This site is a portfolio showcase. The docs describe a realistic
        analytics product; the underlying service is not live.
      </Note>
    </DocsPage>
  );
}