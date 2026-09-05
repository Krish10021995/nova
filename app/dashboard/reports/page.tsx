import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
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
  title: "Reports",
  description:
    "Scheduled and saved Nova reports — revenue, traffic and cohort deep dives.",
};

const reports = [
  {
    name: "Q3 Revenue Deep-Dive",
    type: "Weekly",
    owner: "Ava Chen",
    next: "Mon 9:00 AM",
    status: "Active",
  },
  {
    name: "Activation funnel",
    type: "Daily",
    owner: "Liam Okafor",
    next: "Every day 8:30 AM",
    status: "Active",
  },
  {
    name: "Trial → paid conversion",
    type: "Weekly",
    owner: "Sofia Marino",
    next: "Sun 6:00 PM",
    status: "Active",
  },
  {
    name: "Churn risk watchlist",
    type: "Monthly",
    owner: "Noah Patel",
    next: "1st at 10:00 AM",
    status: "Paused",
  },
];

export default function ReportsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Sidebar />
      <DashboardHeader />
      <main className="px-4 pb-24 sm:px-6 lg:ml-16 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="py-6">
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Reports
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Scheduled digests and saved deep-dives for your team
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <TrafficChart />
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-base">Scheduled reports</CardTitle>
              <CardDescription>
                Delivered to Slack and email on your cadence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Report</TableHead>
                    <TableHead>Cadence</TableHead>
                    <TableHead className="hidden sm:table-cell">Owner</TableHead>
                    <TableHead className="hidden md:table-cell">Next run</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.name}>
                      <TableCell className="font-medium">
                        {report.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {report.type}
                      </TableCell>
                      <TableCell className="hidden text-muted-foreground sm:table-cell">
                        {report.owner}
                      </TableCell>
                      <TableCell className="hidden text-muted-foreground md:table-cell">
                        {report.next}
                      </TableCell>
                      <TableCell className="text-right">
                        <span
                          className={
                            report.status === "Active"
                              ? "rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                              : "rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                          }
                        >
                          {report.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}