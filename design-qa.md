# dsh-snapmarketing bilingual landing visual QA

## Source visual truth

- URL: https://dshmarket.com/
- Desktop capture: `/tmp/dshmarket-reference-desktop.png` (1455 × 2135 px JPEG; source viewport 1470 × 724 CSS px; device scale factor 2)
- Mobile capture: `/tmp/dshmarket-reference-mobile.png` (389 × 2573 px JPEG; source viewport 390 × 844 CSS px; device scale factor 1)

## Implementation evidence

- Desktop capture: `/tmp/dsh-snapmarketing-implementation-desktop.png` (1455 × 1499 px JPEG; implementation viewport matched the browser default desktop viewport; device scale factor 2)
- Mobile capture: `/tmp/dsh-snapmarketing-implementation-mobile.png` (375 × 1250 px JPEG; implementation viewport 390 × 844 CSS px; device scale factor 1)
- Desktop state: English default.
- Mobile state: English default.
- Additional state: Chinese toggle, translated headline/eyebrow, and Chinese installation modal verified through the browser DOM.

## Comparison

### Full view

The implementation adopts the reference's light canvas, centered hero hierarchy, compact top navigation, dark product visual, thin footer rules, and reference-style install command card. The command card uses the verified `dsh plugin --profile web add @snapmarketing/dsh-plugin-center` command, while the visual accent uses a layered purple palette sampled from the dsh-snapmarketing logo instead of the reference site's red. The implementation intentionally keeps dsh-snapmarketing's existing single-screen product screenshot, installation modal, GitHub CTA, and Discover / Install / Use flow instead of adding the reference site's six feature cards.

### Focused regions

- Header: brand remains left-aligned; GitHub and the new language toggle are right-aligned on desktop, while the GitHub link is hidden on mobile to preserve the reference's compact header behavior.
- Hero: English is the initial state, with the product name on the first line and the logo-purple `inside DeepSeek Harness` line below it. Chinese toggling changes the descriptive copy, buttons, footer, process labels, modal title, install instruction, and accessibility labels.
- Install command: the dark command card mirrors the reference interaction with a copy button, uses the real DSH package command, and changes to the Chinese hint/button label when the language toggle is used.
- Product preview: the existing dsh-snapmarketing screenshot remains the visual product proof, framed with the reference's dark rounded presentation.

## Interaction checks

- English loads by default.
- `中文` changes the full visible copy to Chinese and changes its accessible label to `切换为英文`.
- The command card's `Copy` button changes to `Copied` after copying the verified install command.
- `Installation details` / `安装说明` opens the modal.
- The modal copy button updates the status message in the active language.
- The close button dismisses the modal and restores focus behavior.
- Browser console: no warnings or errors observed.

## Findings

No actionable P0, P1, or P2 visual or interaction findings remain. The different page height from the reference is intentional because the existing landing structure and product flow were explicitly preserved.

## Follow-up Polish

- The product preview image still contains the existing product UI language and asset naming; updating that artwork would be a separate product-asset task.

final result: passed
