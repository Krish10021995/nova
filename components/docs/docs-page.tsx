import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { cn } from "@/lib/utils";

const docsNav = [
  {
    group: "Get started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/getting-started", label: "Getting started" },
      { href: "/handbook", label: "Handbook" },
    ],
  },
  {
    group: "API",
    items: [{ href: "/docs/api-reference", label: "API reference" }],
  },
];

export function DocsPage({
  active,
  title,
  description,
  children,
}: {
  active: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto flex max-w-6xl px-4 sm:px-6">
          <aside className="hidden w-56 shrink-0 border-r border-border/60 py-12 lg:block">
            <nav className="sticky top-20 space-y-6">
              {docsNav.map((group) => (
                <div key={group.group}>
                  <h3 className="px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {group.group}
                  </h3>
                  <ul className="mt-2 space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                            item.href === active
                              ? "bg-primary/10 font-medium text-primary"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
          <article className="min-w-0 flex-1 py-12 lg:px-12">
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 text-lg text-muted-foreground">{description}</p>
            ) : null}
            <div className="mt-4">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}