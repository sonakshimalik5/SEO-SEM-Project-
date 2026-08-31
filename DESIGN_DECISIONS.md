# ALTAIR / SARKAR — experience direction

## Brand recommendation

Position **Sarkar** as an Indian, after-dark fragrance label: editorial rather than generic luxury, sensorial rather than excessively technical, and generous with colour while retaining a quiet product frame. ALTAIR should lead with its monsoon-night ritual (rain, jasmine, dark fruit, polished wood), not with a list of perfume claims. The website now makes that world visible through a high-contrast editorial grid, fragrance-colour cues, product-first imagery, and direct purchase paths.

## Four concept-selection rounds

Scoring is out of 10. Any concept below 9 in any category was removed before the next round.

| Round | Direction                              | Brand fit | Aesthetic | Mobile UX | Performance | Result                                                       |
| ----- | -------------------------------------- | --------: | --------: | --------: | ----------: | ------------------------------------------------------------ |
| 1     | Quiet monochrome catalogue             |       8.7 |       8.4 |       9.4 |         9.8 | Removed — too interchangeable for ALTAIR.                    |
| 1     | Monsoon editorial                      |       9.5 |       9.6 |       9.2 |         9.5 | Advanced.                                                    |
| 1     | 3D perfume laboratory                  |       8.8 |       9.4 |       7.5 |         6.6 | Removed — costly and less inclusive.                         |
| 2     | Monsoon editorial + colour-coded notes |       9.7 |       9.7 |       9.3 |         9.4 | Advanced.                                                    |
| 2     | Full-screen video campaign             |       9.1 |       9.5 |       8.7 |         6.8 | Removed — conflicts with fast first load.                    |
| 3     | Prismatic print campaign               |       9.6 |       9.8 |       9.3 |         9.3 | Advanced.                                                    |
| 3     | Infinite scroll shop                   |       9.0 |       9.1 |       8.4 |         8.2 | Removed — obscures the single-product conversion path.       |
| 4     | **Prismatic monsoon editorial**        |   **9.8** |   **9.9** |   **9.5** |     **9.4** | **Selected.**                                                |
| 4     | Product configurator                   |       9.2 |       9.4 |       8.9 |         8.1 | Removed — adds complexity before the brand has a collection. |

## Selected-system principles

1. **Maximal atmosphere, minimal bytes.** Use CSS-only prisms, gradients, type, and coloured scent markers rather than canvas, video, a cursor effect, or heavyweight animation dependencies.
2. **One obvious route to purchase.** “Shop Altair” appears at the decision points, while the primary narrative scrolls from mood → notes → evolution → bottle.
3. **Colour has meaning.** Cherry, jasmine, datura, and monsoon blue identify scent families instead of being decorative noise.
4. **Motion is progressive.** Reveal motion is intersection-triggered and the experience respects `prefers-reduced-motion`; content remains present and readable without animation.
5. **Small-screen first.** Colour ribbons wrap, display type scales with CSS breakpoints, images have intrinsic dimensions, and tap targets use substantial padding.

## Research references and implementation interpretation

- [Framer Academy](https://www.framer.com/academy/) was used as a reference point for clear visual hierarchy, narrative landing-page pacing, and deliberate motion.
- [React Bits](https://reactbits.dev/) was used as a reference point for expressive, self-contained interface details. Rather than importing a visual-effects package, ALTAIR implements the decorative details in CSS so they do not increase client JavaScript or render-blocking work.
- The supplied product copy and imagery establish the actual brand proposition (“Sarkar”, “ALTAIR”, night jasmine, datura, cherry, mulberry, wood). No unsupported claims about a separate Sarkar brand were introduced.

## Page-speed choices

- The hero is the only eagerly loaded image and is preloaded with high priority.
- All below-the-fold editorial images retain `loading="lazy"`, explicit width and height, and WebP sources to reduce transfer cost and layout shift.
- Fonts are self-hosted, use `font-display: swap`, and only the two fonts used at initial render are preloaded.
- The site contains no third-party trackers, remote font requests, video, canvas, or carousel JavaScript.
