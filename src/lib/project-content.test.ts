import { describe, test } from "node:test";
import assert from "node:assert/strict";

function expect<T>(actual: T) {
  return {
    toBe: (expected: unknown) => assert.equal(actual, expected),
    toContain: (expected: string) => assert.ok(String(actual).includes(expected)),
    not: {
      toBe: (expected: unknown) => assert.notEqual(actual, expected),
      toContain: (expected: string) => assert.ok(!String(actual).includes(expected)),
    },
  };
}
import { HOME_SCHEMA, FAQS, FACTS, breadcrumbs } from "./project-content";
import { DISCLOSURE, SOCIALS, SITE, OFFICIAL_STORE, PRODUCT_IMAGE } from "./brand";

describe("Academic project evidence boundaries", () => {
  test("project is not represented as a retailer or rating dataset", () => {
    const schema = JSON.stringify(HOME_SCHEMA);
    expect(schema).not.toContain('"@type":"Offer"');
    expect(schema).not.toContain('"@type":"AggregateRating"');
    expect(schema).not.toContain('"author"');
    expect(schema).not.toContain('"datePublished"');
  });
  test("Product describes the displayed academic reference without commercial fields", () => {
    const product = HOME_SCHEMA["@graph"].find(node => node["@type"] === "Product");
    assert.ok(product && "name" in product && "description" in product && "image" in product && "additionalProperty" in product);
    assert.equal(product.name, "ALTAIR by Sarkar parfum");
    assert.equal(product.image.url, PRODUCT_IMAGE);
    assert.equal(product.additionalProperty[0]?.value, "₹1,199 INR for 100 ml");
    assert.ok(product.description.includes("not a verified retail offer"));
    for (const field of ["offers", "aggregateRating", "review", "sku", "gtin", "mpn", "availability", "seller", "shippingDetails", "hasMerchantReturnPolicy"]) {
      assert.equal(field in product, false, field);
    }
  });
  test("breadcrumbs use existing self-referencing navigation URLs", () => {
    for (const [path, name] of [["/about", "About the project"], ["/mentions", "Sources & mentions"]]) {
      const trail = breadcrumbs(path, name);
      assert.deepEqual(trail.itemListElement.map(item => [item.position, item.name, item.item]), [
        [1, "ALTAIR academic project", `${SITE}/`], [2, name, `${SITE}${path}`],
      ]);
    }
    const home = HOME_SCHEMA["@graph"].find(node => node["@type"] === "BreadcrumbList");
    assert.deepEqual(home, breadcrumbs("/", "ALTAIR academic project"));
  });
  test("brand is external and has only verified brand profiles", () => {
    const brand = HOME_SCHEMA["@graph"].find(node => node["@type"] === "Organization");
    expect(brand?.["@id"]).toBe("https://www.sarkar.store/#organization");
    expect(brand?.["@id"]).not.toBe(`${SITE}/#organization`);
    expect(SOCIALS[0]?.[1]).toBe("https://www.instagram.com/houseofsarkar/?hl=en");
    expect(OFFICIAL_STORE).toBe("https://www.sarkar.store/collections/shop-all");
  });
  test("supplied amount and size are not changed or advertised as retail offers", () => {
    expect(FACTS.find(([key]) => key === "Supplied price")?.[1]).toBe("₹1,199 (INR) — not a verified retail offer");
    expect(FACTS.find(([key]) => key === "Category / size")?.[1]).toBe("100 ML parfum (project specification)");
  });
  test("unverified coupon remains unconfirmed", () => {
    const answer = FAQS.find(item => item.q === "Where can I find official Sarkar products?");
    expect(answer?.a).toContain("ALTAIR10 coupon have not been confirmed");
    expect(answer?.a).not.toContain("1,079");
  });
  test("disclosure rejects official ownership and endorsement", () => {
    expect(DISCLOSURE).toContain("not the official Sarkar website");
    expect(DISCLOSURE).toContain("not affiliated with or endorsed by the brand");
  });
});
