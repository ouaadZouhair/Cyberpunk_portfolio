import type { Metadata } from "next";
import About from "../components/pages/About";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Mohammed Zouhair Ouaad, his background, approach, and full-stack development skills.",
};

export default function AboutPage() {
  return <About />;
}
