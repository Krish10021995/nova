import type { Metadata } from "next";
import { MarketingPage } from "@/components/landing/marketing-page";
import { H2, P } from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Nova handles your data — collected events, retention, and deletion.",
};

export default function PrivacyPage() {
  return (
    <MarketingPage
      eyebrow="Privacy"
      title="Your data, on your terms"
      description="Short version: we collect what you send us, keep it for the window you choose, and delete it when you ask."
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <H2>1. What we collect</H2>
        <P>
          Nova stores the events, user traits, and group metadata your code sends
          through the tracking snippet or API. We recommend against sending raw
          PII — emails, phone numbers, or free-text identifiers — and refuse or
          redact obvious PII by default.
        </P>

        <H2>2. How we use it</H2>
        <P>
          Your data powers the dashboards, reports, and audience segments you
          build. We do not sell customer event data, and we never train shared
          models on your workspace data.
        </P>

        <H2>3. Retention</H2>
        <P>
          Retention is configurable per plan: 7 days on Starter, 12 months on
          Growth, and custom windows on Scale. When the window closes, the data
          is deleted from primary storage and backups within 30 days.
        </P>

        <H2>4. Your controls</H2>
        <P>
          You can export or delete any user profile at any time through the
          dashboard or the API. Deleting a profile also deletes its event
          history — it is immediate and irreversible.
        </P>

        <H2>5. Security</H2>
        <P>
          Data is encrypted in transit (TLS 1.2+) and at rest (AES-256).
          Workspaces on Scale can pin EU data residency. Security is SOC 2
          aligned and monitored continuously.
        </P>

        <P>
          Questions about this policy?{" "}
          <a
            href="/contact"
            className="font-medium text-primary hover:underline"
          >
            Contact us
          </a>
          .
        </P>
      </div>
    </MarketingPage>
  );
}