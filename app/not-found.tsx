import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-4 text-white font-tech">
      <h1 className="font-cyber text-4xl text-highlight">404</h1>
      <p>This page could not be found.</p>
      <Link href="/" className="border border-primary px-5 py-2 hover:bg-primary/20">Return home</Link>
    </section>
  );
}
