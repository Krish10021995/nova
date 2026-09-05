import type { Metadata } from "next";
import { DocsPage } from "@/components/docs/docs-page";
import {
  Code,
  H2,
  H3,
  Note,
  P,
  Pre,
  Ul,
} from "@/components/docs/primitives";

export const metadata: Metadata = {
  title: "API reference",
  description:
    "Nova REST API — track events, manage users, and query aggregations.",
};

export default function ApiReferencePage() {
  return (
    <DocsPage
      active="/docs/api-reference"
      title="API reference"
      description="REST endpoints for ingesting data and querying insights. Base URL: https://api.nova.app/v1"
    >
      <H2>Authentication</H2>
      <P>
        All requests require a bearer token. Write access uses a workspace write
        key; read access uses a query token you issue from Settings. Tokens
        never expire automatically, but you can rotate them any time.
      </P>
      <Pre label="curl">
{`curl https://api.nova.app/v1/track \\
  -H "Authorization: Bearer WRK_xxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "Signup Completed",
    "userId": "usr_7c4e",
    "properties": { "plan": "Starter" }
  }'`}
      </Pre>

      <H2>Endpoints</H2>

      <H3>POST /track</H3>
      <P>
        Record a single event. Accepts one event per call; idempotent, safe to
        retry. Responds <Code>202 Accepted</Code> once queued.
      </P>
      <Ul
        items={[
          <span key="1">
            <Code>event</Code> — string, the event name (max 200 chars)
          </span>,
          <span key="2">
            <Code>userId</Code> — string, the user performing the action
          </span>,
          <span key="3">
            <Code>properties</Code> — object, up to 200 key/value pairs
          </span>,
          <span key="4">
            <Code>timestamp</Code> — optional ISO-8601, defaults to server time
          </span>,
        ]}
      />

      <H3>POST /identify</H3>
      <P>
        Attach traits to a user, or glue an anonymous ID to a known user via{" "}
        <Code>previousId</Code>. The merge is automatic and irreversible.
      </P>

      <H3>GET /users/:id</H3>
      <P>
        Return a user profile including traits, first/last seen, and event
        counts. Useful for powering in-product customer context.
      </P>

      <H3>POST /query</H3>
      <P>
        Run an aggregation (count, unique, sum, average over a series, funnel,
        or retention). Pagination and time buckets are handled server-side.
      </P>
      <Pre label="curl">
{`curl https://api.nova.app/v1/query \\
  -H "Authorization: Bearer qry_xxxxx" \\
  -d '{
    "analysis": { "type": "unique", "event": "Payment Succeeded" },
    "range": { "from": "2026-08-01", "to": "2026-09-01", "interval": "week" }
  }'`}
      </Pre>

      <H2>Rate limits & errors</H2>
      <P>
        Tracking is rate-limited to 5,000 requests/second per workspace; query
        comes with 50 requests/minute. Responses use standard HTTP status codes,
        with <Code>429</Code> for limits and a <Code>requestId</Code> in every
        error body for debugging.
      </P>
      <Ul
        items={[
          "400 — invalid payload or missing required field",
          "401 — missing or malformed bearer token",
          "404 — resource not found",
          "429 — rate limit exceeded",
        ]}
      />

      <Note>
        Status codes, headers, and response shapes are documented here for
        realism; the API is not hosted in this showcase.
      </Note>
    </DocsPage>
  );
}