export const SITE = "https://altair-midnight-aura.lovable.app";
export const STORE = "https://www.sarkar.store";
export const PUBLISHED = "2026-10-08";
export const UPDATED = "2026-10-09";
export const PRODUCT_IMAGE = `${SITE}/images/altair-product.webp`;

// Official profiles, as linked from the footer of www.sarkar.store
export const SOCIALS: [string, string][] = [
  ["Instagram", "https://www.instagram.com/houseofsarkar"],
  ["YouTube", "https://www.youtube.com/@houseofsarkar"],
  ["X", "https://x.com/houseofsarkar"],
  ["LinkedIn", "https://www.linkedin.com/company/houseofsarkar"],
  ["Facebook", "https://www.facebook.com/people/Houseofsarkar/61586511428837/"],
];

export const POLICIES: [string, string][] = [
  ["Shipping policy", `${STORE}/pages/shipping-policy`],
  ["Refund policy", `${STORE}/pages/refund-policy`],
  ["Cancellation policy", `${STORE}/pages/cancellation-policy`],
  ["Privacy policy", `${STORE}/pages/privacy-policy`],
  ["Terms & conditions", `${STORE}/pages/terms-conditions`],
];

export const SUPPORT_EMAIL = "support@sarkar.store";

export const ORG_ID = `${STORE}/#organization`;

export const ORG_SCHEMA = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Sarkar",
  alternateName: "House of Sarkar",
  url: `${STORE}/`,
  logo: {
    "@type": "ImageObject",
    url: "https://www.sarkar.store/cdn/shop/files/SARKAR_BLACK_Cropped.png?v=1769150438&width=600",
  },
  description: "Sarkar (House of Sarkar) is an Indian fragrance brand selling parfums through www.sarkar.store.",
  email: SUPPORT_EMAIL,
  sameAs: SOCIALS.map(([, url]) => url),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    areaServed: "IN",
  },
};
