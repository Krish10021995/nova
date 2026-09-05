import * as React from "react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Reveal } from "@/components/motion/reveal";

export function MarketingPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border/60 bg-muted/30 py-20 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              {description ? (
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  {description}
                </p>
              ) : null}
            </Reveal>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}