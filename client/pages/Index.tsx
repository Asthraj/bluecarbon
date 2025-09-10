import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-background">
      {/* Hero */}
      <section className="container relative flex min-h-[72vh] flex-col items-center justify-center py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.12),rgba(255,255,255,0))]" />
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-muted-foreground shadow-sm">
          Verifiable Blue Carbon MRV for India
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        </span>
        <h1 className="max-w-4xl bg-gradient-to-b from-primary to-emerald-600 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent md:text-6xl">
          Blockchain-powered Registry for Coastal Restoration & Tokenized
          Credits
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          An end-to-end MRV platform that immutably stores verified plantation
          data, tokenizes carbon credits, onboards NGOs and communities, and
          ingests field data from mobile apps and drones.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild className="h-12 px-6 text-base">
            <Link to="/registry">Launch Registry</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-6 text-base">
            <Link to="/upload">Upload Field Data</Link>
          </Button>
          <Button asChild variant="ghost" className="h-12 px-6 text-base">
            <Link to="/admin">Admin Console</Link>
          </Button>
        </div>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
          <Stat label="Verified projects" value="312" />
          <Stat label="Credits minted" value="1.2M tCO₂e" />
          <Stat label="Participants onboarded" value="890+" />
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Built for transparency, scale, and trust
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Immutable Registry"
            desc="Plantation and restoration data is hashed and stored on-chain with complete provenance."
          />
          <Feature
            title="Tokenized Credits"
            desc="Smart contracts mint verifiable carbon credits that can be transferred or retired."
          />
          <Feature
            title="Inclusive Onboarding"
            desc="NGOs, communities, and coastal panchayats register and manage projects with ease."
          />
          <Feature
            title="Field Data Ingestion"
            desc="Mobile uploads and drone footage integrate directly with automated verification."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="container py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </span>
                <div>
                  <div className="font-semibold">Collect field data</div>
                  <p className="text-muted-foreground">
                    Mobile app and drones capture geo-tagged imagery and
                    measurements.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </span>
                <div>
                  <div className="font-semibold">Verify & attest</div>
                  <p className="text-muted-foreground">
                    Automated checks with expert review produce an immutable
                    attestation.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </span>
                <div>
                  <div className="font-semibold">Mint credits</div>
                  <p className="text-muted-foreground">
                    Smart contracts tokenize credits, assign to wallets, and
                    enable retirement.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </span>
                <div>
                  <div className="font-semibold">Public registry</div>
                  <p className="text-muted-foreground">
                    Projects and credits are discoverable and traceable by
                    anyone.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Open, verifiable, and tamper-proof
            </h3>
            <p className="text-muted-foreground">
              Designed with NCCR and coastal stakeholders, BlueCarbonMRV ensures
              accountability across the lifecycle—planting, verification, credit
              issuance, and retirement.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/onboarding">Onboard an organization</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/registry">Browse registry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary to-emerald-600 p-8 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <h3 className="text-2xl font-bold">
            Start contributing to India’s blue carbon future
          </h3>
          <p className="mt-1 max-w-2xl text-primary-foreground/90">
            Upload field data, verify restoration, and mint trusted carbon
            credits.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary" className="text-primary">
              <Link to="/upload">Upload data</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <Link to="/admin">Go to Admin Console</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-2 h-10 w-10 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center font-bold">
        ★
      </div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 text-left shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
