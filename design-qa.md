# dsh-snapmarketing bilingual landing visual QA

## Source visual truth

- URL: https://dshmarket.com/
- Desktop capture: `/tmp/dshmarket-reference-desktop.png` (1455 × 2135 px JPEG; source viewport 1470 × 724 CSS px; device scale factor 2)
- Mobile capture: `/tmp/dshmarket-reference-mobile.png` (389 × 2573 px JPEG; source viewport 390 × 844 CSS px; device scale factor 1)

## Implementation evidence

- Desktop capture: `/tmp/dsh-snapmarketing-implementation-desktop.png` (1455 × 1378 px JPEG; implementation viewport matched the browser default desktop viewport; device scale factor 2)
- Mobile capture: `/tmp/dsh-snapmarketing-implementation-mobile.png` (375 × 1072 px JPEG; implementation viewport 390 × 844 CSS px; device scale factor 1)
- Desktop state: English default.
- Mobile state: English default.
- Additional state: Chinese toggle, translated headline/eyebrow, and Chinese installation modal verified through the browser DOM.

## Comparison

### Full view

The implementation adopts the reference's light canvas, centered hero hierarchy, red accent treatment, compact top navigation, rounded primary action, dark product visual, and thin footer rules. The implementation intentionally keeps dsh-snapmarketing's existing single-screen product screenshot, installation modal, GitHub CTA, and Discover / Install / Use flow instead of adding the reference site's six feature cards.

### Focused regions

- Header: brand remains left-aligned; GitHub and the new language toggle are right-aligned on desktop, while the GitHub link is hidden on mobile to preserve the reference's compact header behavior.
- Hero: English is the initial state, with the product name on the first line and the red `inside DeepSeek Harness` line below it. Chinese toggling changes the descriptive copy, buttons, footer, process labels, modal title, install instruction, and accessibility labels.
- Product preview: the existing dsh-snapmarketing screenshot remains the visual product proof, framed with the reference's dark rounded presentation.

## Interaction checks

- English loads by default.
- `中文` changes the full visible copy to Chinese and changes its accessible label to `切换为英文`.
- `Install dsh-snapmarketing` / `安装 dsh-snapmarketing` opens the modal.
- The modal copy button updates the status message in the active language.
- The close button dismisses the modal and restores focus behavior.
- Browser console: no warnings or errors observed.

## Findings

No actionable P0, P1, or P2 visual or interaction findings remain. The different page height from the reference is intentional because the existing landing structure and product flow were explicitly preserved.

## Follow-up Polish

- The product preview image still contains the existing product UI language and asset naming; updating that artwork would be a separate product-asset task.

final result: passed
