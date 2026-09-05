import type { Metadata } from "next";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { P } from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "Status",
  description: "Live status and uptime history for Nova services.",
};

const services = [
  { name: "Tracking ingestion", status: "Operational" },
  { name: "Query API", status: "Operational" },
  { name: "Dashboard", status: "Operational" },
  { name: "Webhooks", status: "Operational" },
  { name: "Report delivery", status: "Operational" },
];

export default function StatusPage() {
  return (
    <MarketingPage
      eyebrow="Status"
      title="All systems operational"
      description="We believe uptime is a feature. Subscribe to notifications to be told the moment anything changes."
    >
      <div className="mx-auto max-w-2xl">
        <div className="space-y-3">
          {services.map((service) => (
            <Card key={service.name}>
              <CardContent className="flex items-center justify-between py-4">
                <CardTitle className="text-base">{service.name}</CardTitle>
                <Badge className="gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-current" />
                  {service.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-muted/40">
          <CardHeader>
            <CardTitle className="text-base">30-day uptime: 99.98%</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              Last incident: <strong className="font-semibold text-foreground">Aug 3, 2026</strong> —
              report delivery delayed for 14 minutes during a scheduled deploy.
              Root cause documented in the changelog.
            </P>
          </CardContent>
        </Card>
      </div>
    </MarketingPage>
  );
}