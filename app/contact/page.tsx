import type { Metadata } from "next";
import Contact from "../components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mohammed Zouhair Ouaad to discuss a website, web application, or collaboration.",
};

export default function ContactPage() {
  return <Contact />;
}
