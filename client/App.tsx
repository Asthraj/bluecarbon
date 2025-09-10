import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Registry from "./pages/Registry";
import Upload from "./pages/Upload";
import Onboarding from "./pages/Onboarding";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-sidebar-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent inline-flex items-center justify-center text-primary-foreground shadow-md">BC</span>
            <span className="text-lg">BlueCarbonMRV</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" to="/registry">Registry</Link>
            <Link className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" to="/upload">Upload Data</Link>
            <Link className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" to="/onboarding">Onboard</Link>
            <Link className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90" to="/admin">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-card">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BlueCarbonMRV · National Centre for Coastal Research</p>
          <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>MRV status: Live</p>
        </div>
      </footer>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
