import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Nova — product engineering roles for people who care about craft.",
};

const roles = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote · Worldwide",
    type: "Full-time",
  },
  {
    title: "Product Engineer, Data Platform",
    location: "Remote · EMEA",
    type: "Full-time",
  },
  {
    title: "Design Engineer",
    location: "Remote · Americas",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <MarketingPage
      eyebrow="Careers"
      title="Work on data people actually use"
      description="Small team, big standards. We care about craft, honest metrics, and shipping — in that order."
    >
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4">
          {roles.map((role) => (
            <Card key={role.title} className="transition-[box-shadow] hover:ring-2 hover:ring-primary/40">
              <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 sm:flex-row">
                <div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{role.type}</Badge>
                  <Button
                    render={<Link href="/contact" />}
                    variant="outline"
                    size="sm"
                  >
                    Apply
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/40">
          <CardContent className="py-8 text-center">
            <CardTitle className="text-lg">Don&apos;t see your role?</CardTitle>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              We always read great portfolios. Send a note with a link to your
              best work and we&apos;ll reply within a week.
            </p>
            <Button render={<Link href="/contact" />} className="mt-5">
              Get in touch
            </Button>
          </CardContent>
        </Card>
      </div>
    </MarketingPage>
  );
}