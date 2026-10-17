import type { Metadata } from 'next';
import { Card, Cards } from 'fumadocs-ui/components/card';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-4 py-16">
      <div className="text-center">
        <h1 className="mb-3 text-3xl font-medium tracking-tight">Euthyne documentation</h1>
        <p className="text-fd-muted-foreground">
          Signed receipts for what coding agents do in your repositories, and how to verify them
          without trusting us.
        </p>
      </div>
      <Cards>
        <Card
          title="Get started"
          href="/docs"
          description="What Euthyne records, what it proves, and the planned first run."
        />
        <Card
          title="Concepts"
          href="/docs/concepts/receipts"
          description="Receipts, sessions, changes, trust levels and what we store."
        />
        <Card
          title="Verification spec (draft)"
          href="/docs/spec"
          description="The receipt format and the checks an independent verifier runs."
        />
        <Card
          title="CLI reference"
          href="/docs/cli"
          description="The planned euthyne commands, from init to verify."
        />
      </Cards>
    </main>
  );
}
