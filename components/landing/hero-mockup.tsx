"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueSeries } from "@/lib/data";

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div
        aria-hidden
        className="absolute -inset-x-8 -top-12 -bottom-8 rounded-full bg-gradient-to-tr from-violet-500/25 via-indigo-500/25 to-blue-500/25 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/90 shadow-2xl shadow-indigo-950/20 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="mx-auto rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground">
            app.nova.dev/dashboard
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
          <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
            <p className="text-xs text-muted-foreground">MRR</p>
            <p className="mt-1 font-heading text-2xl font-semibold">$39.1k</p>
            <p className="mt-1 text-xs font-medium text-emerald-500">
              +12.4% this month
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
            <p className="text-xs text-muted-foreground">Active users</p>
            <p className="mt-1 font-heading text-2xl font-semibold">4,892</p>
            <p className="mt-1 text-xs font-medium text-emerald-500">
              +8.1% this month
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
            <p className="text-xs text-muted-foreground">Conversion</p>
            <p className="mt-1 font-heading text-2xl font-semibold">6.4%</p>
            <p className="mt-1 text-xs font-medium text-emerald-500">
              +0.9 pts
            </p>
          </div>

          <div className="col-span-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueSeries}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                  width={44}
                  tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  cursor={{ stroke: "var(--border)" }}
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  fill="url(#heroFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}