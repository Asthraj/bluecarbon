import { Button } from "@/components/ui/button";

export default function Onboarding() {
  return (
    <section className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Onboard to BlueCarbonMRV
      </h1>
      <p className="text-muted-foreground mt-1">
        NGOs, community groups, and coastal panchayats can register to submit
        and manage restoration projects.
      </p>

      <form
        className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "Onboarding submitted. Our team will review and activate your account.",
          );
        }}
      >
        <div className="grid gap-2">
          <label className="text-sm font-medium">Organization type</label>
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>NGO</option>
            <option>Community</option>
            <option>Panchayat</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Organization name</label>
          <input className="h-10 rounded-md border border-input bg-background px-3 text-sm" />
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">State/UT</label>
            <input className="h-10 rounded-md border border-input bg-background px-3 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">District</label>
            <input className="h-10 rounded-md border border-input bg-background px-3 text-sm" />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Contact person</label>
            <input className="h-10 rounded-md border border-input bg-background px-3 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Phone</label>
            <input className="h-10 rounded-md border border-input bg-background px-3 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">
              Wallet address (for credits)
            </label>
            <input
              className="h-10 rounded-md border border-input bg-background px-3 text-sm font-mono"
              placeholder="0x..."
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Brief description</label>
          <textarea
            rows={4}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Your mission, past restoration work, regions of operation, etc."
          />
        </div>

        <Button type="submit" className="w-full md:w-auto">
          Submit Onboarding
        </Button>
      </form>
    </section>
  );
}
