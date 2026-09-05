"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroMockup } from "@/components/landing/hero-mockup";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-accent)_0%,transparent_70%)]"
      />
      <div className="container mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-violet-500" />
          Product analytics, minus the busywork
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="max-w-3xl text-balance font-heading text-4xl leading-[1.1] font-semibold tracking-tight sm:text-6xl"
        >
          Understand your product,
          <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            {" "}
            decide with confidence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          Nova turns raw product data into revenue, retention, and activation
          insights your whole team actually uses — no SQL required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            render={<Link href="/dashboard" />}
            size="lg"
            className="gap-2"
          >
            Explore live dashboard
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<Link href="#features" />}
            size="lg"
            variant="outline"
          >
            See the features
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}