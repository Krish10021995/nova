"use client";

import * as React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { channels } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ChannelDonut() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Acquisition channels</CardTitle>
        <CardDescription>Share of new signups</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value) => [`${value}%`, "Share"]}
              />
              <Pie
                data={channels}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={3}
                stroke="var(--card)"
              >
                {channels.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-muted-foreground">
                <span
                  className="size-2.5 rounded-sm"
                  style={{ background: channel.color }}
                />
                {channel.name}
              </span>
              <span className="font-medium">{channel.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}