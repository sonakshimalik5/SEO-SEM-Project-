import { createFileRoute, Link } from "@tanstack/react-router";
import { ORG_SCHEMA, SITE, PUBLISHED, UPDATED } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sarkar — The Fragrance House Behind ALTAIR" },
      {
        name: "description",
        content:
          "About Sarkar, the Indian fragrance house behind ALTAIR: how we create our parfums, what we stand for, and how to contact us.",
      },
      { property: "og:title", content: "About Sarkar — The Fragrance House Behind ALTAIR" },
      {
        property: "og:description",
        content: "Who makes ALTAIR, how Sarkar creates its parfums, and how to get in touch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            ORG_SCHEMA,
            {
              "@type": "AboutPage",
              url: `${SITE}/about`,
              name: "About Sarkar",
              about: { "@id": "https://sarkar.store/#org" },
              author: { "@id": "https://sarkar.store/#org" },
              datePublished: PUBLISHED,
              dateModified: UPDATED,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "ALTAIR", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "About Sarkar", item: `${SITE}/about` },
                ],
              },
            },
          ],
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background px-6 py-24 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">ALTAIR</Link> / <span>About Sarkar</span>
        </nav>
        <h1 className="mt-10 font-display text-5xl tracking-wide sm:text-6xl">About Sarkar</h1>
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          By the Sarkar fragrance team · Updated <time dateTime={UPDATED}>8 October 2026</time>
        </p>

        <div className="mt-12 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Sarkar is an Indian fragrance house that makes premium parfums at accessible prices.
            Our bottles are designed in-house and every scent is sold directly through our official
            store, <a className="underline underline-offset-4 hover:text-foreground" href="https://sarkar.store">sarkar.store</a>.
          </p>
          <h2 className="pt-6 font-display text-3xl text-foreground">How we make our parfums</h2>
          <p>
            Each Sarkar fragrance starts with a mood rather than a trend. ALTAIR began with the
            smell of a monsoon night: wet stone, dark berries and the white flowers that only open
            after dark. Our team develops and tests each composition before it is released.
          </p>
          <h2 className="pt-6 font-display text-3xl text-foreground">What we stand for</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Parfum-strength fragrances in full 100 ML bottles.</li>
            <li>Honest, clearly listed notes and prices.</li>
            <li>Sold directly by Sarkar — no grey-market resellers.</li>
          </ul>
          <h2 id="contact" className="pt-6 font-display text-3xl text-foreground">Contact</h2>
          <p>
            For orders, questions or press enquiries, contact Sarkar through{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href="https://sarkar.store/pages/contact">
              sarkar.store/pages/contact
            </a>.
          </p>
        </div>

        <Link
          to="/"
          className="mt-16 inline-flex border border-accent/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Discover ALTAIR
        </Link>
      </article>
    </div>
  );
}
