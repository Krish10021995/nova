"use client";

import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { kpiCards } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpiCards.map((card) => {
        const up = card.trend === "up";
        return (
          <Card key={card.title} className="transition-[box-shadow] hover:ring-2 hover:ring-border">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <div className="mt-3 flex items-end justify-between gap-2">
                <p className="font-heading text-3xl font-semibold tracking-tight">
                  {card.value}
                </p>
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold",
                    up
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  )}
                >
                  {up ? (
                    <ArrowUpRight className="size-3.5" />
                  ) : (
                    <ArrowDownRight className="size-3.5" />
                  )}
                  {card.delta}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {card.caption}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}