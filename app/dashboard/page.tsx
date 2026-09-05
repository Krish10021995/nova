"use client";

import * as React from "react";
import { Download } from "lucide-react";
import { ChannelDonut } from "@/components/dashboard/channel-donut";
import { DashboardHeader } from "@/components/dashboard/header";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TopProducts } from "@/components/dashboard/top-products";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Sidebar />
      <DashboardHeader />
      <main className="px-4 pb-24 sm:px-6 lg:ml-16 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Analytics overview
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                How your product performed over the last 30 days
              </p>
            </div>
            <Button variant="outline" className="w-fit gap-2">
              <Download className="size-4" />
              Export report
            </Button>
          </div>

          <div className="mt-4 space-y-4">
            <KpiCards />

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <ChannelDonut />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TrafficChart />
              </div>
              <TopProducts />
            </div>

            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}