import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-container page-section relative z-10 flex flex-1 flex-col items-center justify-center gap-4 text-center text-white font-tech">
      <h1 className="font-cyber text-4xl text-highlight">404</h1>
      <p>This page could not be found.</p>
      <Link href="/" className="inline-flex min-h-11 items-center border border-primary px-5 py-2 hover:bg-primary/20">Return home</Link>
    </section>
  );
}
