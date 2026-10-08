import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/altair-hero.webp";
import productImg from "@/assets/altair-product.webp";
import campaignImg from "@/assets/altair-campaign.webp";
import notesImg from "@/assets/altair-notes.webp";

const FAQS = [
  {
    q: "What does ALTAIR by Sarkar smell like?",
    a: "ALTAIR is a nocturnal floral-woody parfum. It opens with dark cherry and mulberry, blooms into night jasmine and datura, and settles on rain-darkened polished wood.",
  },
  {
    q: "What are the notes in ALTAIR?",
    a: "Top: cherry and mulberry. Heart: night jasmine and datura. Base: wood. The profile is floral, fruity, woody and made for night.",
  },
  {
    q: "How much does ALTAIR cost?",
    a: "ALTAIR is ₹1,199 for a 100 ML bottle of parfum, sold by Sarkar.",
  },
  {
    q: "When should I wear ALTAIR?",
    a: "ALTAIR is designed for evenings and nights — date nights, parties and rainy monsoon evenings, when the jasmine and datura feel most alive.",
  },
  {
    q: "Is ALTAIR unisex?",
    a: "Yes. Its balance of dark fruit, white florals and wood suits anyone who likes a confident, night-time scent.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTAIR by Sarkar — Nocturnal Floral-Woody Parfum, ₹1,199" },
      {
        name: "description",
        content:
          "ALTAIR by Sarkar: night jasmine, datura, cherry, mulberry and wood. A nocturnal floral-woody parfum. 100 ML, ₹1,199.",
      },
      { property: "og:title", content: "ALTAIR by Sarkar — Nocturnal Parfum" },
      {
        property: "og:description",
        content:
          "For nights that smell like rain and feel like confidence. A nocturnal floral-woody parfum.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, type: "image/webp", fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://sarkar.store/#org",
              name: "Sarkar",
              url: "https://sarkar.store",
            },
            {
              "@type": "Product",
              name: "ALTAIR",
              sku: "SARKAR-ALTAIR-100",
              brand: { "@id": "https://sarkar.store/#org" },
              category: "Parfum",
              url: "https://altair-midnight-aura.lovable.app/",
              description:
                "ALTAIR by Sarkar is a nocturnal floral-woody parfum with night jasmine, datura, cherry, mulberry and wood. 100 ML parfum, ₹1,199.",
              size: "100 ML",
              additionalProperty: [
                { "@type": "PropertyValue", name: "Top notes", value: "Cherry, Mulberry" },
                { "@type": "PropertyValue", name: "Heart notes", value: "Night Jasmine, Datura" },
                { "@type": "PropertyValue", name: "Base notes", value: "Wood" },
                { "@type": "PropertyValue", name: "Fragrance family", value: "Floral, Fruity, Woody" },
                { "@type": "PropertyValue", name: "Concentration", value: "Parfum" },
              ],
              offers: {
                "@type": "Offer",
                price: "1199",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": "https://sarkar.store/#org" },
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Altair,
});

const NOTES = [
  {
    name: "Night Jasmine",
    kind: "Floral heart",
    text: "Opened after dark. Cool, narcotic white petals carrying the smell of wet air.",
  },
  {
    name: "Datura",
    kind: "Floral shadow",
    text: "The trumpet flower that blooms only at night — green, hypnotic, faintly dangerous.",
  },
  {
    name: "Cherry",
    kind: "Fruity opening",
    text: "Dark cherry flesh, not candy. A glossy first impression with a bitter stone beneath.",
  },
  {
    name: "Mulberry",
    kind: "Fruity depth",
    text: "Crushed berry juice, inky and staining, softening the sweetness into something adult.",
  },
  {
    name: "Wood",
    kind: "Woody base",
    text: "Rain-darkened polished wood. The part of the scent that stays after you leave the room.",
  },
];

const JOURNEY = [
  {
    step: "01",
    title: "ARRIVAL",
    notes: "Cherry · Mulberry",
    text: "The first minute. Wet fruit, glossy and dark.",
  },
  {
    step: "02",
    title: "BLOOM",
    notes: "Night Jasmine · Datura",
    text: "The hour it belongs to. Petals open in the dark.",
  },
  {
    step: "03",
    title: "LINGER",
    notes: "Wood",
    text: "What remains at 3 a.m. Warm, quiet, unmistakable.",
  },
];

function Altair() {
  return (
    <div className="prismatic-site relative overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Notes />
        <Journey />
        <Story />
        <Offer />
        <Campaign />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-display text-lg tracking-[0.5em] text-foreground">
          SARKAR
        </a>
        <div className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {[
            ["Fragrance", "#fragrance"],
            ["Notes", "#notes"],
            ["Journey", "#journey"],
            ["Contact", "#footer"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#offer"
          className="border border-border px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Shop
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="ALTAIR parfum bottle on wet stone with night jasmine and mulberries"
        width={1280}
        height={1600}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/35 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-transparent to-background/60" />
      <div
        className="hero-prism pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <p className="intro eyebrow">Sarkar · New Release</p>
        <h1
          className="intro mt-6 font-display text-[19vw] leading-[0.85] tracking-[0.06em] text-metal sm:text-[13vw] lg:text-[10.5vw]"
          style={{ animationDelay: "120ms" }}
        >
          ALTAIR
        </h1>
        <div className="mt-8 max-w-xl">
          <p
            className="intro font-display text-2xl font-light italic leading-snug text-foreground/90 sm:text-3xl"
            style={{ animationDelay: "240ms" }}
          >
            For nights that smell like rain and feel like confidence.
          </p>
          <p
            className="intro mt-5 text-sm tracking-[0.18em] text-muted-foreground uppercase"
            style={{ animationDelay: "340ms" }}
          >
            A nocturnal floral-woody parfum
          </p>
          <div className="intro mt-10 flex items-center gap-6" style={{ animationDelay: "440ms" }}>
            <a
              href="#fragrance"
              className="group relative inline-flex items-center gap-4 border border-accent/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
            >
              Discover Altair
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div
          className="intro mt-16 flex flex-wrap items-center gap-x-5 gap-y-3"
          style={{ animationDelay: "560ms" }}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
            Floral · Fruity · Woody · Night
          </p>
          <span
            className="scent-dots"
            aria-label="Altair colour palette: cherry, jasmine, datura and midnight"
          >
            <i className="dot-cherry" />
            <i className="dot-jasmine" />
            <i className="dot-datura" />
            <i className="dot-night" />
          </span>
        </div>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="notes" className="relative border-t border-border/60 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">The composition</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl lg:text-7xl">
            THE NIGHT, <span className="text-metal">IN NOTES.</span>
          </h2>
        </Reveal>

        <div className="scent-ribbon mt-12" aria-hidden="true">
          <span>CHERRY GLOSS</span>
          <span>JASMINE MILK</span>
          <span>DATURA GREEN</span>
          <span>MONSOON BLUE</span>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {NOTES.map((n, i) => (
              <Reveal as="li" key={n.name} delay={i * 90}>
                <div className="group flex flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="w-10 shrink-0 text-[0.65rem] tracking-[0.3em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl tracking-wide text-foreground transition-colors duration-500 group-hover:text-accent sm:text-3xl">
                        {n.name}
                      </h3>
                      <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                        {n.kind}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {n.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <figure className="relative lg:sticky lg:top-28">
              <img
                src={notesImg}
                alt="Night jasmine, datura, cherries and mulberries on wet stone"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <figcaption className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                Raw materials · after rain
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className="relative border-t border-border/60 px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Scent journey</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-3xl tracking-wide sm:text-5xl">
            Three movements, one evening.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-border/70 bg-border/40 md:grid-cols-3">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.title} delay={i * 140}>
              <article className="group h-full bg-background p-8 transition-colors duration-700 hover:bg-card lg:p-12">
                <span className="text-[0.6rem] tracking-[0.4em] text-accent">{j.step}</span>
                <h3 className="mt-8 font-display text-3xl tracking-[0.2em] lg:text-4xl">
                  {j.title}
                </h3>
                <div className="hairline my-6" />
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/80">{j.notes}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story-orbit relative border-t border-border/60 px-6 py-32 lg:px-10 lg:py-48">
      <span className="orbit-word orbit-word-left" aria-hidden="true">
        AFTER
      </span>
      <span className="orbit-word orbit-word-right" aria-hidden="true">
        RAIN
      </span>
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.15] sm:text-6xl lg:text-7xl">
            Some nights are remembered.
            <br />
            <span className="italic text-metal">Others become a signature.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="hairline mx-auto my-12 w-40" />
        </Reveal>
        <Reveal delay={280}>
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            ALTAIR was created for the latter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="offer" className="relative border-t border-border/60 px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{ background: "var(--gradient-veil)", boxShadow: "var(--shadow-glow)" }}
            />
            <img
              src={productImg}
              alt="ALTAIR 100 ML parfum bottle"
              width={1200}
              height={1504}
              loading="lazy"
              className="animate-drift mx-auto w-full max-w-md object-contain"
            />
          </div>
        </Reveal>
        <div id="fragrance">
          <Reveal>
            <p className="eyebrow">The parfum</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-5xl tracking-[0.1em] sm:text-6xl">ALTAIR</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              100 ML Parfum · Floral · Fruity · Woody · Night
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hairline my-10 max-w-sm" />
          </Reveal>
          <Reveal delay={300}>
            <p className="font-display text-4xl text-foreground">₹1,199</p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Night jasmine and datura over dark cherry and mulberry, resolved on rain-darkened
              wood. Built for the hours after midnight.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <a
              href="#final"
              className="mt-10 inline-flex items-center gap-4 border border-accent/60 px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
            >
              Shop Altair
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Campaign() {
  return (
    <section className="relative border-t border-border/60">
      <div className="relative h-[75svh] min-h-[440px] w-full overflow-hidden">
        <img
          src={campaignImg}
          alt="ALTAIR campaign visual: parfum bottle in rain with cherries, mulberries and datura"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10 lg:pb-20">
            <Reveal>
              <p className="eyebrow">Campaign · Monsoon nights</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-2xl font-display text-3xl italic leading-snug sm:text-4xl lg:text-5xl">
                Rain on stone, berries in the dark, a flower that only opens when nobody is
                watching.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative border-t border-border/60 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow">Questions</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-3xl tracking-wide sm:text-5xl">About ALTAIR</h2>
        </Reveal>
        <dl className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 font-display text-xl tracking-wide text-foreground sm:text-2xl">
                <dt>{f.q}</dt>
                <span className="text-accent transition-transform duration-500 group-open:rotate-45">+</span>
              </summary>
              <dd className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      id="final"
      className="relative border-t border-border/60 px-6 py-32 text-center lg:py-44"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-[0.06em] sm:text-6xl lg:text-7xl">
            MAKE MIDNIGHT
            <br />
            <span className="text-metal">YOUR SIGNATURE.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <a
            href="#offer"
            className="mt-14 inline-flex items-center gap-4 border border-accent/60 px-12 py-5 text-[0.7rem] uppercase tracking-[0.4em] transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
          >
            Shop Altair
          </a>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-8 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            100 ML Parfum · ₹1,199
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-border/60 px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-3xl tracking-[0.35em]">ALTAIR</p>
          <p className="mt-4 max-w-sm text-sm italic text-muted-foreground">
            For nights that smell like rain and feel like confidence.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Footer navigation">
          {[
            ["Home", "#top"],
            ["Fragrance", "#fragrance"],
            ["Notes", "#notes"],
            ["Contact", "#footer"],
            ["Instagram", "https://instagram.com"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="hairline my-10" />
      <p className="mx-auto max-w-7xl text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Sarkar · ALTAIR. All rights reserved.
      </p>
    </footer>
  );
}
