import type { Metadata } from "next";
import { DocsPage } from "@/components/docs/docs-page";
import {
  Code,
  H2,
  H3,
  Note,
  P,
  Strong,
  Ul,
} from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "Handbook",
  description:
    "The Nova handbook — core concepts for modeling product data that everyone on the team can agree on.",
};

export default function HandbookPage() {
  return (
    <DocsPage
      active="/handbook"
      title="Nova Handbook"
      description="The shared mental model for product data. Read once, reward forever."
    >
      <H2>Our point of view</H2>
      <P>
        Most analytics pain isn&apos;t technical — it&apos;s vocabulary. Two teams
        measure the same funnel differently, then argue in a weekly review.
        Nova&apos;s job is to give the whole company one source of truth: a
        well-named, well-typed event stream that every chart draws from.
      </P>

      <H2>The four primitives</H2>

      <H3>Events</H3>
      <P>
        An event is something a user did, at a moment in time. Good event names
        are <Code>past tense + object + qualifier</Code>:{" "}
        <Code>Signup Completed</Code>, not <Code>signup</Code> or{" "}
        <Code>clicked_button_3</Code>. If you wouldn&apos;t say it in a meeting,
        rename it.
      </P>

      <H3>Users</H3>
      <P>
        A user is a stable identity with traits. We recommend a non-PII
        database ID. Users start anonymous and become known via{" "}
        <Code>identify()</Code>. One user, one profile — merging is automatic.
      </P>

      <H3>Properties</H3>
      <P>
        Events carry properties; users carry traits. Keep both flat, typed, and
        case-insensitively unique to avoid <Strong>data drift</Strong> — the
        slow divergence where the same thing is spelled three ways across
        pages, apps, and Slack messages.
      </P>
      <Ul
        items={[
          <span key="1">
            <Strong>Consistent casing:</Strong> <Code>plan</Code> everywhere, never{" "}
            <Code>Plan</Code> and <Code>plan_type</Code>.
          </span>,
          <span key="2">
            <Strong>Consistent types:</Strong> <Code>revenue</Code> is always a
            number in cents — never a string, never a dollar amount.
          </span>,
          <span key="3">
            <Strong>Consistent units:</Strong> timestamps are always epoch
            milliseconds; durations are always seconds.
          </span>,
          <span key="4">
            <Strong>One source of truth:</Strong> re-derive computed fields or
            store them once, never both.
          </span>,
        ]}
      />

      <H3>Groups</H3>
      <P>
        Groups model accounts — the workspace your user belongs to. Attribution
        questions like &quot;which accounts are about to churn?&quot; map to
        groups, not users. Every event can tag a <Code>groupId</Code>.
      </P>

      <H2>Metrics worth tracking</H2>
      <P>
        More events is not better. Start with the loop that pays the bills, then
        expand. The Nova dashboard ships with these out of the box:
      </P>
      <Ul
        items={[
          "Activation — the moment a new user gets their first value (define it, measure it, quote it)",
          "Retention — the % of a cohort still active at D7, D30, D90",
          "Funnel conversion — checkout, onboarding, invitation",
          "Revenue health — MRR, expansions, contractions, churn",
        ]}
      />

      <H2>Defining a good funnel</H2>
      <P>
        A funnel is a real user journey, in order, within a time window. Avoid
        &quot;kitchen-sink&quot; funnels that mix pages and clicks; prefer user
        intent steps. Fewer, sharper funnels beat fifteen fuzzy ones.
      </P>

      <H2>Reading the numbers honestly</H2>
      <P>
        Breakouts are where insights live — funnel conversion split by plan,
        traffic split by source, churn split by segment. If a metric looks flat,
        split it before trusting it. And remember testimonials aren&apos;t data:
        Nova reports what happened, then leaves the &quot;why&quot; to humans.
      </P>

      <Note>
        This is a portfolio project. The handbook describes how a real
        implementation would work; none of the analytics service is live.
      </Note>
    </DocsPage>
  );
}