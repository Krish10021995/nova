import * as React from "react";
import { BarChart3, Gauge, ShieldCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Funnels & retention",
    description:
      "See exactly where users drop off and which cohorts come back — build funnels in minutes, no SQL.",
  },
  {
    icon: Workflow,
    title: "Automated reports",
    description:
      "Ship weekly digests to Slack or email on a schedule. Wake up to insights, not dashboards to babysit.",
  },
  {
    icon: Gauge,
    title: "Real-time insights",
    description:
      "Sub-second latency on every chart. Spot anomalies the moment they happen, not on Monday.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first architecture",
    description:
      "EU data residency, SOC 2 controls, and PII anonymization by default. Keep the trust you've earned.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything product teams need, nothing they don&apos;t
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four pillars that cover the whole analytics loop — measure, reason,
            automate, and reassure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <Card className="h-full transition-[box-shadow] hover:ring-2 hover:ring-primary/40">
                <CardHeader>
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}