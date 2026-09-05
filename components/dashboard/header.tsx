"use client";

import * as React from "react";
import { Bell, Search } from "lucide-react";
import { DashboardNavIcons, SidebarHint } from "@/components/dashboard/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <SidebarHint />
      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search reports, customers…"
          aria-label="Search"
          className="h-9 rounded-lg pl-9"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <DashboardNavIcons />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="relative"
        >
          <Bell className="size-4.5" />
          <span className="absolute top-2 right-2.5 size-1.5 rounded-full bg-primary" />
        </Button>
        <ThemeToggle />
        <span className="ml-1 hidden size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-semibold text-white sm:flex">
          KP
        </span>
      </div>
    </header>
  );
}