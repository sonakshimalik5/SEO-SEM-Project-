import { DISCLOSURE, OFFICIAL_STORE, ORG_ID, ORG_SCHEMA, PROJECT_ID, SITE, UPDATED } from "./brand";

export const FACTS: [string, string][] = [
  ["Product concept", "ALTAIR by Sarkar"],
  ["Category / size", "100 ML parfum (project specification)"],
  ["Supplied price", "₹1,199 (INR) — not a verified retail offer"],
  ["Fragrance family", "Floral · Fruity · Woody · Night (project brief)"],
  ["Top notes", "Cherry, Mulberry (project brief)"],
  ["Heart notes", "Night Jasmine, Datura (project brief)"],
  ["Base note", "Wood (project brief)"],
  ["Retail status", "An official ALTAIR listing has not been verified"],
];

export const FAQS = [
  { q: "What is ALTAIR by Sarkar in this project?", a: "ALTAIR by Sarkar is the fragrance concept presented in this independent college project. The supplied brief describes a 100 ML floral, fruity and woody parfum inspired by rainy nights. An official ALTAIR product listing has not been verified." },
  { q: "What are ALTAIR's fragrance notes?", a: "The project brief lists cherry and mulberry as top notes, night jasmine and datura as heart notes, and wood as the base note. These are supplied concept specifications, not an independently verified ingredient list or a report of personal testing." },
  { q: "How much does ALTAIR cost?", a: "The supplied project price is ₹1,199 for 100 ML. This is not a confirmed retail price or an offer from this academic website. Check the official Sarkar website for currently listed products and prices." },
  { q: "What does parfum mean?", a: "Parfum is a fragrance concentration category, generally more concentrated than eau de parfum or eau de toilette. The term alone does not establish an exact oil percentage or guarantee how long a particular fragrance lasts. Source: Perfume (Wikipedia)." },
  { q: "Does ALTAIR contain 25% perfume oil?", a: "A 25% perfume oil concentration was supplied for this project, but ALTAIR-specific documentation has not been verified. A brand-wide statement does not establish the concentration of an unverified product listing." },
  { q: "Does ALTAIR last 6–7 hours?", a: "Approximately 6–7 hours on clothing is a supplied claim, not a verified ALTAIR test result or guarantee. Longevity varies with formulation, application, fabric, skin and environmental conditions. This project has not independently tested the fragrance." },
  { q: "How should perfume be applied and stored?", a: "Follow the product label's application instructions and warnings. As general guidance, keep perfume tightly closed and away from heat and direct light. A fragrance description is not a substitute for product-specific safety instructions. Source: Perfume (Wikipedia)." },
  { q: "What does IFRA do, and is ALTAIR IFRA-certified?", a: "IFRA publishes standards for the safe use of fragrance ingredients. An IFRA Certificate of Conformity is issued by a fragrance mixture supplier for a specified use; IFRA itself does not certify finished perfumes. No ALTAIR-specific conformity document has been verified, so this project does not call ALTAIR IFRA-certified. Source: IFRA, Understanding the Standards." },
  { q: "Is ALTAIR cruelty-free or made in India?", a: "Cruelty-free and Made in India positioning were supplied for this project. Product-specific supporting evidence has not been verified for ALTAIR, so they are not presented here as certified or independently established specifications." },
  { q: "Where can I find official Sarkar products?", a: `Visit Sarkar's official collection at ${OFFICIAL_STORE}. This college-project website does not sell products, take payments or manage the official store. ALTAIR availability and the ALTAIR10 coupon have not been confirmed.` },
  { q: "Is this the official Sarkar website?", a: DISCLOSURE },
  { q: "What is the difference between a brand claim and a verified specification?", a: "A brand claim is information attributed to a brand. A verified specification has supporting evidence applicable to the exact product and claim. This project separately labels supplied concept details, official source information and third-party commentary; none is a substitute for independent product testing." },
];

export const WEBSITE_SCHEMA = {
  "@type": "WebSite", "@id": PROJECT_ID, url: `${SITE}/`,
  name: "ALTAIR by Sarkar — Independent Academic Project",
  description: DISCLOSURE, inLanguage: "en-IN",
};

export function breadcrumbs(path: string, name: string) {
  return { "@type": "BreadcrumbList", "@id": `${SITE}${path}#breadcrumb`, itemListElement: [
    { "@type": "ListItem", position: 1, name: "ALTAIR academic project", item: `${SITE}/` },
    ...(path === "/" ? [] : [{ "@type": "ListItem", position: 2, name, item: `${SITE}${path}` }]),
  ] };
}

export const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [ORG_SCHEMA, WEBSITE_SCHEMA,
    { "@type": "WebPage", "@id": `${SITE}/#webpage`, url: `${SITE}/`, name: WEBSITE_SCHEMA.name,
      description: DISCLOSURE, isPartOf: { "@id": PROJECT_ID }, about: { "@id": `${SITE}/#product-concept` },
      dateModified: UPDATED, inLanguage: "en-IN" },
    { "@type": "CreativeWork", "@id": `${SITE}/#product-concept`, name: "ALTAIR fragrance concept",
      description: "Academic fragrance concept: 100 ML parfum with cherry, mulberry, night jasmine, datura and wood. Specifications are supplied by the project brief, not a verified official product listing.",
      about: { "@id": ORG_ID }, isPartOf: { "@id": PROJECT_ID } },
    { "@type": "FAQPage", "@id": `${SITE}/#faq`, isPartOf: { "@id": `${SITE}/#webpage` },
      mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};