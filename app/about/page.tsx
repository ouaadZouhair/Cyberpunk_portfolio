import type { Metadata } from "next";
import About from "../components/pages/About";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <About />;
}
