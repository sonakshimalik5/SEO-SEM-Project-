import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { DISCLOSURE, OFFICIAL_STORE } from "@/lib/brand";

export function AcademicPage({ title, children }: { title: string; children: ReactNode }) {
  return <div className="min-h-screen bg-background px-6 py-20 lg:px-10">
    <main className="mx-auto max-w-3xl">
      <nav aria-label="Academic project navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
        <Link to="/" className="underline underline-offset-4">ALTAIR</Link>
        <Link to="/about" className="underline underline-offset-4">About the project</Link>
        <Link to="/mentions" className="underline underline-offset-4">Sources &amp; mentions</Link>
      </nav>
      <nav aria-label="Breadcrumb" className="mt-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="underline underline-offset-4">ALTAIR academic project</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <h1 className="mt-10 font-display text-5xl sm:text-6xl">{title}</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{DISCLOSURE}</p>
      <article className="mt-12 space-y-6 text-sm leading-relaxed text-muted-foreground">{children}</article>
    </main>
    <footer className="mx-auto mt-16 max-w-3xl border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
      <a href={OFFICIAL_STORE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit the official Sarkar website ↗</a>
      <p className="mt-4">No orders, payments or customer accounts are managed by this project.</p>
    </footer>
  </div>;
}