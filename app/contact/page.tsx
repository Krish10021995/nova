"use client";

import * as React from "react";
import { Check, Send } from "lucide-react";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);

  return (
    <MarketingPage
      eyebrow="Contact"
      title="Let's talk"
      description="Sales, partnerships, or just a question — we reply to every message within two business days."
    >
      <div className="mx-auto max-w-xl">
        <Card>
          <CardContent className="py-8">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10">
                  <Check className="size-6 text-emerald-600 dark:text-emerald-400" />
                </span>
                <h2 className="font-heading text-xl font-semibold">
                  Message received
                </h2>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. A human (probably Krish) will get
                  back to you shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="h-9" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="h-9"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Pricing, partnership, or something else"
                    className="h-9"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us what you're building…"
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="size-4" />
                  Send message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </MarketingPage>
  );
}