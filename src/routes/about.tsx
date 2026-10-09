import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ORG_SCHEMA,
  ORG_ID,
  SITE,
  STORE,
  UPDATED,
  SOCIALS,
  POLICIES,
  SUPPORT_EMAIL,
} from "@/lib/brand";

const URL = `${SITE}/about`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sarkar — The Fragrance Brand Behind ALTAIR" },
      {
        name: "description",
        content:
          "About Sarkar (House of Sarkar), the Indian fragrance brand behind ALTAIR: official store, customer support, policies and social profiles.",
      },
      { property: "og:title", content: "About Sarkar — The Fragrance Brand Behind ALTAIR" },
      {
        property: "og:description",
        content: "Who makes ALTAIR, where to buy it, and how to contact Sarkar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            ORG_SCHEMA,
            {
              "@type": "AboutPage",
              "@id": `${URL}#webpage`,
              url: URL,
              name: "About Sarkar",
              isPartOf: { "@id": `${SITE}/#website` },
              about: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              dateModified: UPDATED,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "ALTAIR", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "About Sarkar", item: URL },
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

const link = "underline underline-offset-4 hover:text-foreground";

function About() {
  return (
    <div className="min-h-screen bg-background px-6 py-24 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">ALTAIR</Link> / <span>About Sarkar</span>
        </nav>
        <h1 className="mt-10 font-display text-5xl tracking-wide sm:text-6xl">About Sarkar</h1>
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          Updated <time dateTime={UPDATED}>9 October 2026</time>
        </p>

        <div className="mt-12 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Sarkar, also known as House of Sarkar, is an Indian fragrance brand. ALTAIR — a 100 ML
            nocturnal floral-woody parfum priced at ₹1,199 — is one of its parfums, sold through
            the official store at <a className={link} href={STORE}>www.sarkar.store</a>.
          </p>
          <p>
            Read the brand's own story on{" "}
            <a className={link} href={`${STORE}/pages/know-sarkar`}>Know Sarkar</a>.
          </p>

          <h2 className="pt-6 font-display text-3xl text-foreground">About ALTAIR</h2>
          <p>
            ALTAIR opens with cherry and mulberry, blooms into night jasmine and datura, and
            settles on wood. See the full notes, key facts and questions on the{" "}
            <Link to="/" hash="faq" className={link}>ALTAIR page</Link>.
          </p>

          <h2 id="contact" className="pt-6 font-display text-3xl text-foreground">Contact</h2>
          <p>
            Customer support: <a className={link} href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>

          <h2 className="pt-6 font-display text-3xl text-foreground">Policies</h2>
          <ul className="list-disc space-y-2 pl-5">
            {POLICIES.map(([label, href]) => (
              <li key={label}><a className={link} href={href}>{label}</a></li>
            ))}
          </ul>

          <h2 className="pt-6 font-display text-3xl text-foreground">Official profiles</h2>
          <ul className="list-disc space-y-2 pl-5">
            {SOCIALS.map(([label, href]) => (
              <li key={label}><a className={link} href={href} rel="me noopener" target="_blank">{label}</a></li>
            ))}
          </ul>
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
