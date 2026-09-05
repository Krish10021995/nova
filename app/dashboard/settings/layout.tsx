import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Nova workspace settings — profile, workspace and data controls.",
};

export default function SettingsLayout({
  children,
}: LayoutProps<"/dashboard/settings">) {
  return children;
}