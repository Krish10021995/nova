import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#metrics", label: "Metrics" },
  { href: "/dashboard", label: "Live demo" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Nova home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            render={<Link href="/dashboard" />}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Open dashboard
          </Button>
        </div>
      </div>
    </header>
  );
}