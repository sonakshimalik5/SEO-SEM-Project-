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
          Updated <time dateTime={UPDATED}>15 October 2026</time>
        </p>

        <div className="mt-12 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            Anyone can raise their voice. Few can raise the standards.
          </p>
          <p>
            Sarkar — also known as House of Sarkar — is a premium, unisex fragrance house from
            India, built on what it calls everyday authority. Every Sarkar fragrance is a parfum
            made at 25% oil concentration, meant for ordinary days and the people who make them
            extraordinary. Sarkar is run by Brix Lifestyle Private Limited and sells directly
            through its official store, <a className={link} href={STORE}>www.sarkar.store</a>.
          </p>
          <p>
            Read the brand in its own words on{" "}
            <a className={link} href={`${STORE}/pages/know-sarkar`}>Know Sarkar</a>.
          </p>

          <h2 className="pt-6 font-display text-3xl text-foreground">The idea behind ALTAIR</h2>
          <p>
            ALTAIR is Sarkar's after-dark fragrance. It was imagined around one moment: the hour
            after rain, when the city is quiet, the stone is still wet and the night-blooming
            flowers have opened. The tagline says it plainly —{" "}
            <em>for nights that smell like rain and feel like confidence.</em>
          </p>

          <h2 className="pt-6 font-display text-3xl text-foreground">How it smells</h2>
          <p>
            In plain terms, ALTAIR is floral, fruity and woody. The first spray is dark fruit —
            cherry and mulberry, juicy but not sugary. Within minutes the flowers take over: night
            jasmine, creamy and cool, with datura adding a greener, more mysterious edge. Hours
            later what stays on your skin is wood — warm, smooth and quiet.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="font-normal text-foreground">Top:</strong> cherry, mulberry</li>
            <li><strong className="font-normal text-foreground">Heart:</strong> night jasmine, datura</li>
            <li><strong className="font-normal text-foreground">Base:</strong> wood</li>
            <li><strong className="font-normal text-foreground">Size and price:</strong> 100 ML parfum, ₹1,199</li>
          </ul>

          <h2 className="pt-6 font-display text-3xl text-foreground">When to wear it</h2>
          <p>
            ALTAIR is made for the evening: dinners, date nights, late drives, and monsoon nights
            when the air already smells of rain. Like every Sarkar fragrance, it is unisex. See all
            the details and common questions on the{" "}
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
              <li key={label}><a className={link} href={href} rel="me noopener noreferrer" target="_blank">{label}</a></li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className="mt-16 inline-flex border border-accent/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Discover ALTAIR
        </Link>
        <a
          href={STORE}
          target="_blank"
          rel="noopener"
          className="ml-0 mt-4 inline-flex px-2 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground sm:ml-6"
        >
          Visit sarkar.store ↗
        </a>
      </article>
    </div>
  );
}
