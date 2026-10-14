import type { Metadata, Viewport } from "next";
import { cyber, digital, tech } from "./fonts";
import Providers from "./providers";
import PortfolioShell from "./components/layout/PortfolioShell";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = {
  title: { default: "Zouhair — Cyberpunk Portfolio", template: "%s | Zouhair" },
  description: "Mohammed Zouhair Ouaad's developer portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cyber.variable} ${digital.variable} ${tech.variable}`}>
      {/* Extensions may add body attributes before React hydrates the page. */}
      <body suppressHydrationWarning>
        <Providers><PortfolioShell>{children}</PortfolioShell></Providers>
      </body>
    </html>
  );
}
