import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Nova team — sales, partnerships, or a good idea.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}