import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  state: string;
  owner: "NGO" | "Community" | "Panchayat";
  hectares: number;
  status: "Pending" | "Verified" | "Minted";
  credits: number;
  updatedAt: string;
}

export default function Registry() {
  const [query, setQuery] = useState("");
  const data = useMemo<Project[]>(
    () => [
      {
        id: "IN-BC-0001",
        name: "Chilika Lake Mangrove",
        state: "Odisha",
        owner: "Panchayat",
        hectares: 142.5,
        status: "Verified",
        credits: 18250,
        updatedAt: "2025-09-10",
      },
      {
        id: "IN-BC-0002",
        name: "Pichavaram Restoration",
        state: "Tamil Nadu",
        owner: "NGO",
        hectares: 96.2,
        status: "Pending",
        credits: 0,
        updatedAt: "2025-09-09",
      },
      {
        id: "IN-BC-0003",
        name: "Sundarbans Community Plantations",
        state: "West Bengal",
        owner: "Community",
        hectares: 210.0,
        status: "Minted",
        credits: 40210,
        updatedAt: "2025-09-08",
      },
    ],
    [],
  );

  const filtered = data.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.id.toLowerCase().includes(query.toLowerCase()) ||
      p.state.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="container py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Blue Carbon Registry
          </h1>
          <p className="text-muted-foreground mt-1">
            Immutable, publicly viewable records of verified restoration
            projects.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ID, name, state..."
            className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={() => (window.location.href = "/upload")}>
            Upload Field Data
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 text-muted-foreground">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Hectares</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Credits</th>
              <th className="px-4 py-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t hover:bg-accent/40">
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {p.id}
                </td>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3">{p.state}</td>
                <td className="px-4 py-3">{p.owner}</td>
                <td className="px-4 py-3">{p.hectares.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.status === "Verified"
                        ? "bg-emerald-100 text-emerald-700"
                        : p.status === "Minted"
                          ? "bg-primary/10 text-primary"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3">{p.credits.toLocaleString()}</td>
                <td className="px-4 py-3">{p.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
