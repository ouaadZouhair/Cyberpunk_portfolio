"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import CyberpunkBackground from "../effects/CyberpunkBackground";
import CustomCursor from "../effects/CustomCursor";
import DynamicDocumentTitle from "./DynamicDocumentTitle";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NAV_ITEMS } from "./navigation";

const paths = NAV_ITEMS.map((item) => item.href);

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData || connection?.effectiveType?.includes("2g")) return;

    // Warm the router cache even when mobile navigation links are hidden.
    const prefetchRoutes = () => {
      for (const path of paths) {
        if (path !== window.location.pathname) router.prefetch(path);
      }
    };

    if ("requestIdleCallback" in window) {
      const idle = window.requestIdleCallback(prefetchRoutes, { timeout: 2000 });
      return () => window.cancelIdleCallback(idle);
    }

    const timer = globalThis.setTimeout(prefetchRoutes, 1000);
    return () => globalThis.clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-svh bg-black/95 text-gray font-cyber relative overflow-x-clip">
      <DynamicDocumentTitle />
      <CyberpunkBackground />
      <div className="fixed inset-0 opacity-40 z-0 pointer-events-none cyber-grid" />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/40 animate-pulse duration-1000 pointer-events-none" style={{ top: "130px", right: "10%" }} />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/40 animate-pulse delay-1000 duration-500 pointer-events-none" style={{ top: "330px", left: "10%" }} />
      <CustomCursor />
      <Navbar />
      <main className="page portfolio-main relative z-10">
        {children}
        {pathname !== "/" && <Footer />}
      </main>
    </div>
  );
}
