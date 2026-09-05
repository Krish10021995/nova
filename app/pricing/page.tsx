import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, usage-aware pricing for Nova — free to start, generous limits, no surprise bills.",
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/forever",
    description: "For side projects and evaluation.",
    features: [
      "Up to 10,000 events / month",
      "1 workspace, 3 seats",
      "Core dashboards and funnels",
      "7-day data retention",
    ],
    cta: "Start for free",
    href: "/docs/getting-started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    description: "For teams that need the full story.",
    features: [
      "1M events / month included",
      "Unlimited seats",
      "Funnels, retention, and cohorts",
      "Scheduled reports to Slack & email",
      "12-month data retention",
    ],
    cta: "Start 14-day trial",
    href: "/docs/getting-started",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "For organizations with demanding pipelines.",
    features: [
      "Volume pricing, no caps",
      "Single sign-on (SAML/SCIM)",
      "EU data residency",
      "Dedicated support and onboarding",
    ],
    cta: "Talk to sales",
    href: "/contact",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <MarketingPage
      eyebrow="Pricing"
      title="Simple pricing, real limits"
      description="Start free, upgrade when the team grows. Every plan includes core analytics, HTTP ingestion, and a live dashboard."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative h-full",
              plan.highlight && "ring-2 ring-primary/50 shadow-lg"
            )}
          >
            {plan.highlight ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            ) : null}
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <p className="flex items-baseline gap-1">
                <span className="font-heading text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </p>
              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href={plan.href} />}
                variant={plan.highlight ? "default" : "outline"}
                className="mt-auto w-full"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </MarketingPage>
  );
}