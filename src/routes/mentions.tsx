import { createFileRoute } from "@tanstack/react-router";
import { AcademicPage } from "@/components/AcademicPage";
import { SITE, STORE, PROJECT_ID, DISCLOSURE, SOCIALS } from "@/lib/brand";
import { breadcrumbs, WEBSITE_SCHEMA } from "@/lib/project-content";
const URL = `${SITE}/mentions`;
export const Route = createFileRoute("/mentions")({
  head: () => ({ meta: [
    { title: "Sarkar Sources & Mentions — ALTAIR Academic Project" },
    { name: "description", content: "Official Sarkar sources, founder background, editorial coverage and supplied community and social references, with transparent evidence limitations." },
    { property: "og:title", content: "Sarkar Sources & Mentions — ALTAIR Academic Project" },
    { property: "og:description", content: "Official information, editorial coverage and community commentary distinguished from verified customer ratings." },
    { property: "og:type", content: "website" }, { property: "og:url", content: URL }, { name: "twitter:card", content: "summary" },
  ], links: [{ rel: "canonical", href: URL }], scripts: [{ type: "application/ld+json", children: JSON.stringify({
    "@context": "https://schema.org", "@graph": [WEBSITE_SCHEMA, breadcrumbs("/mentions", "Sources & mentions"),
      { "@type": "CollectionPage", "@id": `${URL}#webpage`, url: URL, name: "Sarkar sources and mentions", description: DISCLOSURE,
        isPartOf: { "@id": PROJECT_ID }, breadcrumb: { "@id": `${URL}#breadcrumb` } },
    ],
  }) }] }), component: Mentions,
});
const heading = "pt-6 font-display text-3xl text-foreground";
const link = "underline underline-offset-4 hover:text-foreground";
function Mentions() {
  return <AcademicPage title="Sources & mentions">
    <p>These references provide brand context, not evidence that ALTAIR is an officially available product. No press endorsement, independent ALTAIR test or eligible customer-rating dataset has been established.</p>
    <h2 className={heading}>Official brand information</h2>
    <p><a className={link} href={`${STORE}/collections/shop-all`}>Sarkar's official collection</a> lists current products. An ALTAIR listing was not found during this review. <a className={link} href={`${STORE}/pages/know-sarkar`}>Know Sarkar</a> provides brand background, founder information and a brand-level 25% concentration claim. These statements are attributed to the brand.</p>
    <p><a className={link} href={SOCIALS[0]?.[1]}>Sarkar's official Instagram (@houseofsarkar)</a> is a brand profile, not a profile owned by this project.</p>
    <h2 className={heading}>Founder background and editorial coverage</h2>
    <p>Bhuvan Bam is an Indian actor, digital creator and entrepreneur. Neel Gogia is a co-founder of IPLIX Media. Sarkar identifies them among its co-founders; they are not presented here as perfumers or qualified fragrance reviewers.</p>
    <p><a className={link} href="https://india.entrepreneur.com/business-news/bhuvan-bam-launches-premium-fragrance-brand">Entrepreneur India: Bhuvan Bam launches a premium fragrance brand</a> provides external launch coverage, also naming Rohit Raj and Jag Chima among the co-founders. This is brand launch reporting, not an ALTAIR review or an endorsement of this project.</p>
    <h2 className={heading}>Supplied community discussion</h2>
    <p><a className={link} href="https://www.reddit.com/r/DesiFragranceAddicts/comments/1vmfg0k/sarkar_perfume_by_bhuvan_bam_fragrantix_video/">Reddit discussion about Sarkar perfumes</a> is a community reference. Its full content could not be inspected directly because access was blocked; no detailed summary or verified-purchase status is asserted. The thread is not an official Sarkar Reddit account.</p>
    <h2 className={heading}>Supplied social mention</h2>
    <p><a className={link} href="https://www.instagram.com/reels/Db09y6Ry9-4/">Instagram Reel reference about Sarkar perfumes</a> was accessible through page metadata identifying a Tarique Fragrance post. The video itself and its detailed claims were not independently inspected. It is not treated as a verified customer review, brand account or rating.</p>
    <h2 className={heading}>General fragrance and standards references</h2>
    <p><a className={link} href="https://en.wikipedia.org/wiki/Perfume">Perfume (Wikipedia)</a> supports general concentration and storage context, not ALTAIR performance. <a className={link} href="https://ifrafragrance.org/safe-use/understanding-the-standards">IFRA: Understanding the Standards</a> explains fragrance ingredient standards; no ALTAIR conformity documentation was provided.</p>
    <h2 className={heading}>What remains unverified?</h2>
    <p>ALTAIR's official availability, retail price, concentration, longevity, manufacturing origin, cruelty-free status and certification evidence remain unverified. ALTAIR10 has not been confirmed. No genuine page-displayed customer rating data was found, so no AggregateRating or transactional Offer markup is used.</p>
  </AcademicPage>;
}
