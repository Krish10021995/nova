"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="min-h-dvh bg-background">
      <Sidebar />
      <DashboardHeader />
      <main className="px-4 pb-24 sm:px-6 lg:ml-16 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-3xl">
          <div className="py-6">
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Settings
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your workspace and data preferences
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Workspace</CardTitle>
              <CardDescription>
                The name and details your team sees
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="workspace-name">Workspace name</Label>
                  <Input
                    id="workspace-name"
                    defaultValue="Nova Labs"
                    className="h-9"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input
                    id="timezone"
                    defaultValue="UTC (Coordinated Universal Time)"
                    className="h-9"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-4">
                <p className="text-sm text-muted-foreground">
                  Changes apply to all dashboard reports.
                </p>
                <Button onClick={() => setSaved(true)} size="sm" className="gap-1.5">
                  {saved ? (
                    <>
                      <Check className="size-3.5" /> Saved
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}