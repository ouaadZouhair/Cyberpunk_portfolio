"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import CyberpunkBackground from "../effects/CyberpunkBackground";
import CustomCursor from "../effects/CustomCursor";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NAV_ITEMS } from "./navigation";

const paths = NAV_ITEMS.map((item) => item.href);

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const isRouteChange = pathname !== previousPath.current;
  const currentIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
  const previousIndex = NAV_ITEMS.findIndex((item) => item.href === previousPath.current);
  const direction = currentIndex >= previousIndex ? "page-enter-forward" : "page-enter-backward";

  useEffect(() => {
    previousPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // Next.js does not prefetch App Router routes in dev. Warm each route once
    // after the first page loads so compilation happens before a visitor clicks.
    const controller = new AbortController();
    const currentPath = window.location.pathname;
    const routes = paths.filter((path) => path !== currentPath);
    const timer = window.setTimeout(() => {
      void (async () => {
        for (const path of routes) {
          if (controller.signal.aborted) break;
          try {
            const response = await fetch(path, { cache: "no-store", signal: controller.signal });
            await response.text();
          } catch {
            // A failed warm-up must not interrupt navigation.
          }
        }
      })();
    }, 500);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black/95 text-gray font-cyber relative overflow-hidden">
      <CyberpunkBackground />
      <div className="fixed inset-0 opacity-40 z-0 pointer-events-none cyber-grid" />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/40 animate-pulse duration-1000 pointer-events-none" style={{ top: "130px", right: "10%" }} />
      <div className="fixed z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/40 animate-pulse delay-1000 duration-500 pointer-events-none" style={{ top: "330px", left: "10%" }} />
      <CustomCursor />
      <Navbar />
      <main
        key={pathname}
        className={`page relative z-10 pt-[28px] ${isRouteChange ? direction : ""}`}
      >
        {children}
        {pathname !== "/" && <Footer />}
      </main>
    </div>
  );
}
