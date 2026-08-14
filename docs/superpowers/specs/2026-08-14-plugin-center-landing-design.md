# SnapMarketing-Landing Design Spec

## Goal

Create a one-screen public landing page for DeepSeek Harness Plugin Center that communicates the product in seconds and gives visitors direct GitHub and installation entry points.

## Product boundary

- This is a landing page, not the Plugin Center marketplace UI.
- No plugin cards, marketplace browsing, categories, search, screenshots, or multi-page flow.
- The landing page presents the core loop only: discover, install, use.
- The install CTA points to the repository's installation instructions until a real Harness install URL exists.

## Visual direction

- Dark near-black canvas with restrained indigo-violet atmospheric glow.
- High-contrast white typography, muted supporting copy, and one saturated accent color for primary actions.
- Compact navigation, centered hero, and a small bottom process rail.
- Keep the complete experience inside one viewport on desktop while remaining readable on narrow screens.

## Content

- Brand: DeepSeek Harness Plugin Center.
- Eyebrow: `OPEN ECOSYSTEM / PLUGIN CENTER`.
- Headline: `The open plugin center for DeepSeek Harness.`
- Supporting copy: `Discover, understand, and install official ecosystem plugins. One clear entry point for the tools, agents, workflows, and UI that extend Harness.`
- Primary CTA: `Install Plugin Center`.
- Secondary CTA: `View on GitHub`.
- Process labels: `Discover`, `Install`, `Use`.

## Technical approach

- Use plain `index.html` and `styles.css`; no runtime dependency or build step.
- Use semantic landmarks, real links, visible focus states, reduced-motion support, and responsive CSS.
- Point GitHub links to `https://github.com/ThawingX/SnapMarketing-Landing`.
- Point the install CTA to the repository `#installation` anchor so the page never claims an unverified package URL.

## Acceptance criteria

- The landing loads by opening `index.html` directly.
- The first viewport contains the brand, one headline, supporting copy, GitHub CTA, install CTA, and three-step loop.
- There is no marketplace UI or second landing section.
- Links have meaningful labels and work without JavaScript.
- Layout remains usable at mobile widths and with reduced motion enabled.
