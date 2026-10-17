import { createFileRoute, Link } from "@tanstack/react-router";
import { AcademicPage } from "@/components/AcademicPage";
import { DISCLOSURE, ORG_SCHEMA, ORG_ID, PROJECT_ID, SITE, STORE, UPDATED, SOCIALS, POLICIES, SUPPORT_EMAIL } from "@/lib/brand";
import { breadcrumbs, WEBSITE_SCHEMA } from "@/lib/project-content";

const URL = `${SITE}/about`;
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the ALTAIR Academic Project — Sarkar Brand Context" },
      { name: "description", content: "Independent ALTAIR college project: authorship limitations, source policy, Sarkar brand context, and clear separation from the official store." },
      { property: "og:title", content: "About the ALTAIR Academic Project" },
      { property: "og:description", content: DISCLOSURE },
      { property: "og:type", content: "website" }, { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [ORG_SCHEMA, WEBSITE_SCHEMA, breadcrumbs("/about", "About the project"),
        { "@type": "AboutPage", "@id": `${URL}#webpage`, url: URL, name: "About the ALTAIR academic project",
          description: DISCLOSURE, isPartOf: { "@id": PROJECT_ID }, about: { "@id": ORG_ID },
          dateModified: UPDATED, breadcrumb: { "@id": `${URL}#breadcrumb` } },
      ],
    }) }],
  }), component: About,
});
const link = "underline underline-offset-4 hover:text-foreground";
const heading = "pt-6 font-display text-3xl text-foreground";
function About() {
  return <AcademicPage title="About the project">
    <h2 className={heading}>What is this website?</h2>
    <p>This is a college-project fragrance presentation inspired by Sarkar. ALTAIR is the concept in the supplied brief, not a product whose official retail listing has been verified. The page's imagery and scent narrative are creative project material, not evidence of official packaging or a personal fragrance test.</p>
    <h2 className={heading}>Who created the content?</h2>
    <p>The student author's name and credentials have not been supplied. No brand-team byline, expert reviewer, perfumer qualification or personal testing experience is claimed. Earlier unsupported brand authorship and publication dates have been removed.</p>
    <h2 className={heading}>What is known about Sarkar?</h2>
    <p>Sarkar, also known as House of Sarkar, is a fragrance brand with an <a className={link} href={STORE}>official website</a>. Its <a className={link} href={`${STORE}/pages/know-sarkar`}>Know Sarkar</a> page identifies Bhuvan Bam and Neel Gogia among its co-founders and makes a brand-level 25% oil concentration claim. That statement does not independently verify ALTAIR's specifications. See the <Link to="/mentions" className={link}>sources and mentions</Link> page for founder references and evidence limitations.</p>
    <h2 className={heading}>Which ALTAIR details are supplied?</h2>
    <p>The project brief supplies 100 ML parfum, ₹1,199, and cherry, mulberry, night jasmine, datura and wood notes. Concentration, approximately 6–7-hour longevity on clothing, cruelty-free and Made in India positioning remain unverified for ALTAIR. No laboratory testing, certification, customer rating or active ALTAIR10 offer is asserted.</p>
    <h2 className={heading}>How are sources evaluated?</h2>
    <p>Official pages establish what the brand says; they are not independent tests. Third-party commentary is separately labelled and is not treated as a verified purchase, endorsement or rating dataset. General perfume guidance is distinct from ALTAIR-specific claims. The <Link to="/" hash="faq" className={link}>visible questions and answers</Link> explain these distinctions.</p>
    <h2 id="contact" className={heading}>Who handles official store questions?</h2>
    <p>Sarkar's published brand support address is <a className={link} href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. It is an external brand contact, not this project's student author or customer service. No student contact details have been supplied.</p>
    <h2 className={heading}>Official store policies</h2>
    <p>These policies belong to Sarkar's store, not this academic project.</p>
    <ul className="list-disc space-y-2 pl-5">{POLICIES.map(([label, href]) => <li key={label}><a className={link} href={href}>{label}</a></li>)}</ul>
    <h2 className={heading}>Official brand profiles</h2>
    <p>These profiles describe Sarkar, not the academic project.</p>
    <ul className="list-disc space-y-2 pl-5">{SOCIALS.map(([label, href]) => <li key={label}><a className={link} href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul>
    <p className="pt-6 text-xs">Content revised <time dateTime={UPDATED}>17 October 2026</time>. An original publication date has not been established.</p>
  </AcademicPage>;
}
