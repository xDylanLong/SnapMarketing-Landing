# dsh-snapmarketing bilingual landing visual QA

## Design read

This is a bilingual marketing landing page for developers and marketing automation users. The visual direction is restrained technical editorial, using a native CSS system, one purple brand accent, a real product screenshot, and light motion.

- Redesign mode: preserve existing brand, SEO, bilingual toggle, GitHub link, install command, and product asset.
- Design variance: 6.
- Motion intensity: 3.
- Visual density: 3.

## Implementation evidence

- Desktop full-page capture: `output/playwright/snapmarketing-full-desktop.png` at 1200 × 1217 CSS px, viewport 1200 × 720.
- Desktop viewport capture: `output/playwright/snapmarketing-desktop.png` at 1200 × 720 CSS px.
- Mobile viewport capture: `output/playwright/snapmarketing-mobile.png` at 390 × 844 CSS px.
- Dark-mode capture: `output/playwright/snapmarketing-dark.png`.
- Desktop state: English default.
- Mobile state: English default.
- Additional state: Chinese toggle, localized command card, and copy feedback verified through the browser DOM.

## Changes checked

- Header remains compact, with the brand mark on the left and GitHub plus language switching on the right.
- Hero changes from a centered single column to an asymmetric text and product-preview composition.
- The existing real product screenshot remains the main visual proof and is not replaced by a fake UI.
- The install command stays exact: `dsh plugin --profile web add @snapmarketing/dsh-plugin-center`.
- Discover, Install, and Use now form a real workflow section instead of a decorative footer strip.
- The purple brand color remains the only accent, with a dark command panel and consistent rounded shape language.
- System dark mode is supported without flipping individual sections into unrelated themes.
- Motion is limited to entry reveals, product-preview lift, and button feedback. Reduced-motion mode disables page-load animation.

## Interaction checks

- `node --test`: 3 tests passed.
- `node --check landing-logic.js`: passed.
- `node --check script.js`: passed.
- `git diff --check`: passed.
- English loads by default.
- Chinese toggle changes the document language, heading, description, workflow, hint, and accessibility labels.
- Copy action changes the button to the localized copied state while preserving the verified command.
- Desktop and mobile have no horizontal overflow.
- Light, dark, and reduced-motion media states were checked in the browser.
- Browser console errors: none observed.
- Local requests for HTML, CSS, JS, and both image assets returned HTTP 200.

## Follow-up polish

- The product screenshot still contains the current product UI language and catalog snapshot. Updating that artwork would be a separate product-asset task.

final result: passed
