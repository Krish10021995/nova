import * as React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="size-4.5 text-white"
        >
          <path
            d="M4 19V9m8 10V4m8 15v-7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="4" cy="15" r="1.6" fill="currentColor" />
          <circle cx="12" cy="8" r="1.6" fill="currentColor" />
          <circle cx="20" cy="12" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight">
        Nova
      </span>
    </div>
  );
}