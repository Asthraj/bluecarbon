import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Upload() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold tracking-tight">Upload Field Data</h1>
      <p className="text-muted-foreground mt-1">
        Submit geo-tagged photos, drone footage, and measurements from the
        field.
      </p>

      <form
        className="mt-8 grid gap-4 rounded-lg border bg-card p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Data submitted for verification.");
        }}
      >
        <div className="grid gap-2">
          <label className="text-sm font-medium">Project</label>
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm focus:ring-2 focus:ring-ring">
            <option>Chilika Lake Mangrove (IN-BC-0001)</option>
            <option>Pichavaram Restoration (IN-BC-0002)</option>
            <option>Sundarbans Community Plantations (IN-BC-0003)</option>
          </select>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Latitude</label>
            <input
              type="text"
              placeholder="e.g. 19.8073"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Longitude</label>
            <input
              type="text"
              placeholder="e.g. 85.8533"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Area (hectares)</label>
            <input
              type="number"
              placeholder="e.g. 3.25"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Canopy cover (%)</label>
            <input
              type="number"
              placeholder="e.g. 72"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Upload photos/videos</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setPreview(URL.createObjectURL(file));
            }}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-2 file:text-primary-foreground"
          />
          {preview && (
            <video
              className="mt-2 w-full rounded-md border"
              src={preview}
              controls
              playsInline
            />
          )}
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Notes</label>
          <textarea
            rows={4}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Observations, species, planting density, etc."
          />
        </div>

        <Button type="submit" className="w-full md:w-auto">
          Submit for Verification
        </Button>
      </form>

      <div className="mt-8 grid gap-4 rounded-lg border p-6 text-sm text-muted-foreground">
        <p>
          Tip: When using a mobile device, enable GPS for accurate geo-tags.
          Drone flights can be uploaded as MP4 or image sequences.
        </p>
      </div>
    </section>
  );
}
