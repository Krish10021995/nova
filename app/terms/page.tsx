import type { Metadata } from "next";
import { MarketingPage } from "@/components/landing/marketing-page";
import { H2, P } from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms of service for using Nova.",
};

export default function TermsPage() {
  return (
    <MarketingPage
      eyebrow="Terms"
      title="Terms of service"
      description="The short, readable version. The long version is nearly identical, just with fewer jokes."
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <H2>1. Your account</H2>
        <P>
          You are responsible for the activity on your workspace and for keeping
          your credentials safe. Workspace owners can manage seats and access at
          any time.
        </P>

        <H2>2. Acceptable use</H2>
        <P>
          Don&apos;t use Nova to send our platform spam, abuse other users,
          interfere with the service, or track users without their consent in
          jurisdictions where consent is required. Keep your instrumented apps
          lawful.
        </P>

        <H2>3. Billing</H2>
        <P>
          Paid plans bill monthly or annually in advance. You can upgrade,
          downgrade, or cancel at any time — downgrades apply at the next cycle
          and we never charge retroactively for deleted data.
        </P>

        <H2>4. Data ownership</H2>
        <P>
          You own your event data. We use it only to run your workspace and to
          keep the service healthy. Deleting your workspace deletes your data
          within 30 days.
        </P>

        <H2>5. Availability & liability</H2>
        <P>
          We aim for 99.9%+ uptime but don&apos;t guarantee it. Nova is provided
          &quot;as is&quot; and our liability is limited to the amounts you paid
          in the preceding three months.
        </P>

        <H2>6. Changes</H2>
        <P>
          Material changes to these terms are announced in the changelog and by
          email 30 days in advance. Continued use after that counts as
          acceptance.
        </P>
      </div>
    </MarketingPage>
  );
}