import * as React from "react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { value: "48h", label: "to first insight" },
  { value: "3.2x", label: "average ROI" },
  { value: "12k+", label: "teams onboarded" },
  { value: "99.99%", label: "uptime SLA" },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="relative overflow-hidden border-y border-border/60 py-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.04] to-transparent"
      />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Trusted at scale
          </Badge>
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Outcomes our customers brag about
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <div className="rounded-xl border border-border/60 bg-card/50 px-6 py-8 text-center">
                <p className="font-heading text-4xl font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}