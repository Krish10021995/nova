"use client";

import * as React from "react";
import Link from "next/link";
import {
  BarChart3,
  ChevronLeft,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const primary = [
  { label: "Home", href: "/", icon: Home },
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Audiences", href: "/dashboard/audiences", icon: Users },
];

const secondary = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function NavButton({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Link
            href={href}
            aria-label={label}
            className={cn(
              "flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
              active &&
                "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
            )}
          />
        }
      >
        <Icon className="size-4.5" />
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center border-r border-border/60 bg-sidebar py-4 lg:flex">
      <Link href="/" aria-label="Back to home" className="mb-6">
        <Logo className="[&>span:last-child]:hidden [&>span:first-child]:m-auto" />
      </Link>

      <nav className="flex flex-1 flex-col items-center gap-2">
        <div className="space-y-2">
          {primary.map((item) => (
            <NavButton
              key={item.href}
              {...item}
              active={item.href === "/dashboard"}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center gap-1">
          {secondary.map((item) => (
            <NavButton key={item.href} {...item} />
          ))}
          <div className="my-3 h-px w-6 bg-border" />
          <div className="flex size-10 items-center justify-center">
            <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-semibold text-white">
              KP
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarHint() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground lg:hidden"
    >
      <ChevronLeft className="size-3.5" />
      Back to home
    </Link>
  );
}

export function DashboardNavIcons() {
  const compact = [
    { label: "Zap", icon: Zap },
    { label: "Insights", icon: Sparkles },
    { label: "Analytics", icon: BarChart3 },
  ];
  return (
    <div className="hidden items-center gap-1 sm:flex">
      {compact.map(({ label, icon: Icon }) => (
        <Tooltip key={label}>
<TooltipTrigger
          render={
            <button
              type="button"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            />
          }
        >
          <Icon className="size-4.5" />
        </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}