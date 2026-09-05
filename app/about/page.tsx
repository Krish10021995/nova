import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nova is the product analytics showcase of Krishnendu Pramanik — built as proof that great software ships with design and discipline.",
};

export default function AboutPage() {
  return (
    <MarketingPage
      eyebrow="About"
      title="Built to be believed"
      description="Nova is a product analytics platform — and proof of what one developer can ship with Next.js, TypeScript, and a healthy obsession with craft."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            This is the fourth project in a five-project portfolio. The brief to
            myself was simple: build the kind of SaaS a client would believe was
            a real, funded product — a polished marketing site backed by a
            working analytics dashboard, shipped with engineering discipline.
          </p>
          <p className="leading-relaxed">
            Every chart is driven by real typed data, the theming is
            fully-synchronized light/dark/system, and the codebase runs
            end-to-end linting and CI before it ever reaches a URL. The rest of
            the stack — RAG, ML, DevOps/GitOps, and a full-stack SaaS MVP — is
            built separately and linked from the same hub.
          </p>
          <Button
            render={<Link href="/dashboard" />}
            className="gap-2"
          >
            See the dashboard <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Next.js 16",
              description: "App Router, RSC + client islands, Turbopack builds.",
            },
            {
              title: "TypeScript",
              description: "Typed end-to-end — data, props, and responses.",
            },
            {
              title: "Recharts",
              description: "Live charts bound to the same CSS variables as the UI.",
            },
            {
              title: "CI + Vercel",
              description: "GitHub Actions gate every push; main deploys to Vercel.",
            },
          ].map((stat) => (
            <Card key={stat.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MarketingPage>
  );
}