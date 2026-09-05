import type { Metadata } from "next";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export const metadata: Metadata = {
  title: "Analytics Overview",
  description:
    "Nova product analytics dashboard — revenue, users, conversion and churn at a glance.",
};

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <>
      {children}
      <MobileNav />
    </>
  );
}