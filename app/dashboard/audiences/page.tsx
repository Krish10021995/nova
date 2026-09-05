import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { ChannelDonut } from "@/components/dashboard/channel-donut";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Audiences",
  description:
    "Nova audience segments — cohorts, activation and high-value users.",
};

const segments = [
  {
    name: "Trial power users",
    users: "1,204",
    conversion: "18.2%",
    churn: "0.8%",
  },
  {
    name: "Weekly active on 2+ products",
    users: "986",
    conversion: "24.6%",
    churn: "0.5%",
  },
  {
    name: "SMB (1–10 seats)",
    users: "3,410",
    conversion: "9.4%",
    churn: "1.6%",
  },
  {
    name: "Enterprise (50+ seats)",
    users: "142",
    conversion: "41.0%",
    churn: "0.2%",
  },
  {
    name: "At-risk (no login 21 days)",
    users: "517",
    conversion: "—",
    churn: "6.3%",
  },
];

export default function AudiencesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Sidebar />
      <DashboardHeader />
      <main className="px-4 pb-24 sm:px-6 lg:ml-16 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="py-6">
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Audiences
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Understand who converts, who churns, and who needs a nudge
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Audience segments</CardTitle>
                <CardDescription>
                  Auto-built from events and properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Segment</TableHead>
                      <TableHead className="text-right">Users</TableHead>
                      <TableHead className="text-right">Conversion</TableHead>
                      <TableHead className="text-right">Churn</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {segments.map((segment) => (
                      <TableRow key={segment.name}>
                        <TableCell className="font-medium">
                          {segment.name}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {segment.users}
                        </TableCell>
                        <TableCell className="text-right font-medium text-emerald-600 dark:text-emerald-400">
                          {segment.conversion}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {segment.churn}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <ChannelDonut />
          </div>
        </div>
      </main>
    </div>
  );
}