import type { Metadata } from "next";
import Projects from "../components/projects/Projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore selected full-stack, front-end, and e-commerce projects by Mohammed Zouhair Ouaad.",
};

export default function ProjectsPage() {
  return <Projects />;
}
