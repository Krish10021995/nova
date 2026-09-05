import * as React from "react";
import { Reveal } from "@/components/motion/reveal";

const names = ["Acme", "Collide", "Vertex", "Nimbus", "Halcon", "Driftline"];

export function LogoCloud() {
  return (
    <section className="py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Powering analytics for leading data teams
          </p>
          <div className="mt-8 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
            {names.map((name) => (
              <span
                key={name}
                className="font-heading text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}