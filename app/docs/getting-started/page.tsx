import type { Metadata } from "next";
import { DocsPage } from "@/components/docs/docs-page";
import {
  Code,
  H2,
  H3,
  Note,
  P,
  Pre,
  Strong,
  Ul,
} from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "Set up Nova in ten minutes: create a workspace, install tracking, and read your first chart.",
};

export default function GettingStartedPage() {
  return (
    <DocsPage
      active="/docs/getting-started"
      title="Getting started"
      description="From an empty workspace to a real insight, in ten minutes."
    >
      <H2>1. Create a workspace</H2>
      <P>
        Sign in and name your workspace. A workspace is your team&apos;s home for
        all product data — events, users, reports, and settings. You can create
        more than one to separate test and production environments.
      </P>

      <H2>2. Install the tracking snippet</H2>
      <P>
        Add the load script to your app shell. The snippet queues events until
        fully loaded, so you can call <Code>nova.track()</Code> immediately.
      </P>
      <Pre label="index.html">
{`<script>
  window.nova=window.nova||function(){ (window.nova.q=window.nova.q||[]).push(arguments); };
  window.nova.load("WRK_xxxxx", { endpoint: "https://api.nova.app" });
</script>`}
      </Pre>
      <P>
        Server-side, use the HTTP ingestion endpoint with the same write key. It
        is idempotent and safe to retry.
      </P>

      <H2>3. Send your first event</H2>
      <P>
        Track meaningful user actions — not every click. Start small and expand
        as the team agrees on vocabulary.
      </P>
      <Pre label="JavaScript">
{`nova.track("Signup Completed", {
  plan: "Starter",
  workspace_id: "w_9f2a",
  invite_source: "referral",
});`}
      </Pre>

      <H2>4. Identify users</H2>
      <P>
        Anonymous visitors become real users the moment you call{" "}
        <Code>nova.identify()</Code>. Pass a stable, non-PII ID — we recommend a
        database ID or a UUID rather than an email.
      </P>
      <Pre label="JavaScript">
{`nova.identify("usr_7c4e", {
  name: "Ava Chen",
  plan: "Growth",
  signup_date: "2026-08-14",
});`}
      </Pre>
      <Note>
        Never pass raw PII (emails, phone numbers) in event properties or user
        traits. Nova redacts and refuses obvious PII by default.
      </Note>

      <H2>5. Watch the dashboard light up</H2>
      <P>
        Within seconds, events arrive in real time. Within ~2&nbsp;minutes:
      </P>
      <Ul
        items={[
          <span key="1">
            <Strong>KPI cards</Strong> recalc — MRR, active users, conversion
            and churn.
          </span>,
          <span key="2">
            <Strong>Charts</Strong> update — revenue trend, acquisition split,
            and weekly traffic.
          </span>,
          <span key="3">
            <Strong>Audience segments</Strong> start to populate from your event
            stream.
          </span>,
          <span key="4">
            Your onboarding event appears in{" "}
            <Strong>recent activity</Strong> for teammates.
          </span>,
        ]}
      />

      <H2>6. Build your first funnel</H2>
      <P>
        Funnels are just event sequences with the timing baked in. Checkout
        conversion, for example:
      </P>
      <Pre label="events">
{`Product Viewed
→ Checkout Started
→ Payment Succeeded`}</Pre>
      <P>
        Set a general window of 7 days. Nova fills in drop-off at each step, so
        you can see exactly where users leave.
      </P>

      <H2>What&apos;s next?</H2>
      <P>
        Read the <strong className="font-semibold text-foreground">handbook</strong> to
        lock in the mental model, then explore the{" "}
        <strong className="font-semibold text-foreground">API reference</strong> for
        programmatic access. Most teams ship their first dashboard within a
        single sprint.
      </P>

      <H3>Works with your stack</H3>
      <Ul
        items={[
          "Browser, Node.js, Python and Go SDKs",
          "Segment Webhook and a full REST ingestion API",
          "Slack and email report delivery on your cadence",
        ]}
      />
    </DocsPage>
  );
}