import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface Submission {
  id: string;
  project: string;
  state: string;
  submittedAt: string;
  canopy: number;
  area: number;
}

export default function Admin() {
  const [selected, setSelected] = useState<string | null>(null);
  const items = useMemo<Submission[]>(
    () => [
      {
        id: "SUB-5012",
        project: "Pichavaram Restoration (IN-BC-0002)",
        state: "Tamil Nadu",
        submittedAt: "2025-09-09 14:22 IST",
        canopy: 68,
        area: 2.4,
      },
      {
        id: "SUB-5013",
        project: "Sundarbans Community Plantations (IN-BC-0003)",
        state: "West Bengal",
        submittedAt: "2025-09-09 17:03 IST",
        canopy: 74,
        area: 3.9,
      },
    ],
    [],
  );

  return (
    <section className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          NCCR Admin Console
        </h1>
        <p className="text-muted-foreground mt-1">
          Review submissions, verify projects, and mint tokenized carbon
          credits.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card p-4">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Pending submissions
          </h2>
          <div className="divide-y">
            {items.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`flex w-full items-center justify-between gap-4 p-3 text-left hover:bg-accent/60 ${
                  selected === s.id ? "bg-accent" : ""
                }`}
              >
                <div>
                  <div className="font-medium">{s.project}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.id} • {s.state} • {s.submittedAt}
                  </div>
                </div>
                <div className="text-xs">
                  <span className="mr-2 rounded bg-emerald-100 px-2 py-0.5 text-emerald-700">
                    Canopy {s.canopy}%
                  </span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">
                    Area {s.area} ha
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Verification tools
          </h2>
          {selected ? (
            <div className="grid gap-3 text-sm">
              <div className="rounded-md border p-3">
                <div className="mb-1 font-medium">Automated checks</div>
                <ul className="list-inside list-disc text-muted-foreground">
                  <li>Geo-tag integrity: Passed</li>
                  <li>Time drift: Within threshold</li>
                  <li>Drone footage hash: Verified</li>
                  <li>Canopy growth vs baseline: +12%</li>
                </ul>
              </div>
              <div className="rounded-md border p-3">
                <div className="mb-1 font-medium">Credit calculation</div>
                <p className="text-muted-foreground">
                  Estimated credits:{" "}
                  <span className="font-semibold text-foreground">
                    1,240 tCO₂e
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="bg-emerald-600 hover:bg-emerald-600/90"
                  onClick={() => alert("Approved & added to Registry")}
                >
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => alert("Rejected with feedback sent")}
                >
                  Reject
                </Button>
              </div>
              <div className="mt-2 rounded-md border p-3">
                <div className="mb-1 font-medium">Mint credits</div>
                <Button
                  onClick={() =>
                    alert(
                      "Smart contract called: 1,240 credits minted to wallet",
                    )
                  }
                >
                  Mint as Tokens
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Select a submission to review and verify.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
