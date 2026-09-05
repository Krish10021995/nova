"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  FileText,
  Home,
  LayoutDashboard,
  Moon,
  Settings,
  Sparkles,
  Sun,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  const pathname = usePathname();
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
              active={pathname === item.href}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center gap-1">
          {secondary.map((item) => (
            <NavButton
              key={item.href}
              {...item}
              active={pathname === item.href}
            />
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
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="hidden items-center gap-0.5 rounded-xl border border-border/60 bg-muted/40 p-1 sm:flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label="Analytics"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            />
          }
        >
          <BarChart3 className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-52">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Analytics</DropdownMenuLabel>
            <DropdownMenuItem render={<Link href="/dashboard" />}>
              <LayoutDashboard className="size-4" /> Overview
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href="/dashboard/reports" />}>
              <FileText className="size-4" /> Reports
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href="/dashboard/audiences" />}>
              <Users className="size-4" /> Audiences
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/dashboard/settings" />}>
              <Settings className="size-4" /> Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label="Quick actions"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            />
          }
        >
          <Zap className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-52">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
            <DropdownMenuItem render={<Link href="/dashboard/reports" />}>
              <FileText className="size-4" /> Scheduled reports
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href="/dashboard/audiences" />}>
              <Users className="size-4" /> Audience segments
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              Switch to {isDark ? "light" : "dark"} mode
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label="Insights"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            />
          }
        >
          <Sparkles className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-64">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Insights</DropdownMenuLabel>
            <div className="mx-1 mb-1 rounded-lg bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-3 text-white">
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                <TrendingUp className="size-4" />
                MRR grew 12.4% this month
              </p>
              <p className="mt-1 text-xs text-white/75">
                Up from $34.8K to $39.1K · driven by Growth plan upgrades
              </p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/dashboard" />}>
              <BarChart3 className="size-4" /> View dashboard
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href="/handbook" />}>
              <BookOpen className="size-4" /> Handbook
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href="/docs" />}>
              <BookOpen className="size-4" /> Documentation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}