import * as React from "react";

export function H2({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-10 scroll-mt-24 font-heading text-xl font-semibold tracking-tight"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 font-heading text-base font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  );
}

export function Pre({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border/60">
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/60 px-4 py-2 text-xs font-medium text-muted-foreground">
        {label}
      </div>
      <pre className="overflow-x-auto bg-background p-4 font-mono text-sm leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

export function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">
      {children}
    </div>
  );
}