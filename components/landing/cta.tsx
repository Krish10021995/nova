import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 px-6 py-16 text-center shadow-xl sm:px-16">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
            />
            <h2 className="relative mx-auto max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to see what your product is telling you?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-pretty text-white/80">
              Dig into the live demo dashboard — every chart is built with real
              product thinking and production-grade Next.js architecture.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                render={<Link href="/dashboard" />}
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-indigo-700 hover:bg-white/90"
              >
                Open the demo <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}