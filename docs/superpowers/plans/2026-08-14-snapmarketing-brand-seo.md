# SnapMarketing Brand and SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old product identity with SnapMarketing and technically strengthen the existing one-screen landing page without adding content sections.

**Architecture:** Keep the dependency-free static HTML/CSS/JavaScript structure. Store the supplied whale logo as a stable local asset, use it in the visible brand and product preview, and centralize the public GitHub Pages URL across canonical, social metadata, sitemap, and robots directives.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, local PNG asset, plain-text `robots.txt` and XML `sitemap.xml`.

## Global Constraints

- Keep the current `header`, single hero, process rail, footer, and install modal structure.
- Use `SnapMarketing` as the only visible website/product brand; remove `DeepSeek Harness` from page copy and metadata.
- Do not add FAQ, feature cards, scenario sections, or other vertical content blocks.
- Use the supplied logo from `/var/folders/_4/7r7073hj4nb2_mfwh29hb_w40000gp/T/codex-clipboard-93279474-f34a-4b34-94ae-537df55faa25.png` as a repository-local asset.
- Use `https://xdylanlong.github.io/SnapMarketing-Landing/` as the current canonical/public URL.
- Do not add `meta keywords` or unverified ratings, pricing, organization, or user-data structured markup.

---

### Task 1: Add the SnapMarketing logo asset

**Files:**
- Create: `assets/snapmarketing-logo.png`

**Interfaces:**
- Produces the local PNG consumed by `index.html` for the brand mark, product preview, favicon, Apple touch icon, and social image metadata.

- [ ] **Step 1: Inspect the supplied image file**

Run:

```bash
file /var/folders/_4/7r7073hj4nb2_mfwh29hb_w40000gp/T/codex-clipboard-93279474-f34a-4b34-94ae-537df55faa25.png
```

Confirm that the source is a readable PNG before copying it into the repository.

- [ ] **Step 2: Copy the supplied PNG into the stable asset path**

Run:

```bash
mkdir -p assets
cp /var/folders/_4/7r7073hj4nb2_mfwh29hb_w40000gp/T/codex-clipboard-93279474-f34a-4b34-94ae-537df55faa25.png assets/snapmarketing-logo.png
```

- [ ] **Step 3: Verify the local asset**

Run:

```bash
file assets/snapmarketing-logo.png
test -s assets/snapmarketing-logo.png
```

Expected: a non-empty PNG file exists at the repository-local path.

- [ ] **Step 4: Commit the asset**

```bash
git add assets/snapmarketing-logo.png
git commit -m "feat: add SnapMarketing brand logo"
```

### Task 2: Replace brand copy and add technical SEO metadata

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes `assets/snapmarketing-logo.png` from Task 1.
- Produces the visible SnapMarketing brand, product preview image, updated install copy, and complete metadata in the document head.

- [ ] **Step 1: Replace the document head metadata**

Set the `<head>` to include these exact values:

```html
<title>SnapMarketing · 插件安装中心</title>
<meta name="description" content="SnapMarketing 让插件安装更简单。支持 UI 插件及其他插件的一键拖拽安装。" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<meta name="theme-color" content="#090a0f" />
<link rel="canonical" href="https://xdylanlong.github.io/SnapMarketing-Landing/" />
<link rel="icon" type="image/png" href="assets/snapmarketing-logo.png" />
<link rel="apple-touch-icon" href="assets/snapmarketing-logo.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SnapMarketing" />
<meta property="og:title" content="SnapMarketing · 插件安装中心" />
<meta property="og:description" content="SnapMarketing 让插件安装更简单。支持 UI 插件及其他插件的一键拖拽安装。" />
<meta property="og:url" content="https://xdylanlong.github.io/SnapMarketing-Landing/" />
<meta property="og:image" content="https://xdylanlong.github.io/SnapMarketing-Landing/assets/snapmarketing-logo.png" />
<meta property="og:image:alt" content="SnapMarketing 紫色鲸鱼产品 logo" />
<meta property="og:locale" content="zh_CN" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="SnapMarketing · 插件安装中心" />
<meta name="twitter:description" content="SnapMarketing 让插件安装更简单。支持 UI 插件及其他插件的一键拖拽安装。" />
<meta name="twitter:image" content="https://xdylanlong.github.io/SnapMarketing-Landing/assets/snapmarketing-logo.png" />
<meta name="twitter:image:alt" content="SnapMarketing 紫色鲸鱼产品 logo" />
```

Add one `WebSite` JSON-LD block whose `name`, `url`, `description`, and `inLanguage` match the visible page and canonical URL.

- [ ] **Step 2: Replace all old visible product naming**

Update the brand label, eyebrow, headline, description, product preview toolbar, footer note, install button, install modal title, and copy instruction so no visible copy uses `DeepSeek Harness` or the unrelated `AI 工作流` positioning. Restore the previous plugin-install copy: `一键拖拽安装热门插件`, `让 SnapMarketing 装插件这件事，变得更简单。将 UI 插件拖入指定安装位置，也可以轻松安装其他类型的插件。`, and `安装 SnapMarketing`. Keep the current three process labels and GitHub destination.

- [ ] **Step 3: Add local logo markup without changing the page structure**

Use `assets/snapmarketing-logo.png` in the existing `.brand` link and existing `.product-preview-window`. Give each meaningful image an accurate Chinese `alt`, explicit `width="1312"` and `height="1199"`, `decoding="async"`, and `loading="eager"` so the browser reserves layout space and the brand is discoverable to assistive technology.

- [ ] **Step 4: Check metadata and legacy-name removal**

Run:

```bash
rg -n "SnapMarketing|DeepSeek Harness|canonical|og:|twitter:|application/ld\+json|favicon|apple-touch-icon" index.html
```

Expected: all required metadata and the new brand are present; `DeepSeek Harness` has no matches.

- [ ] **Step 5: Commit the document update**

```bash
git add index.html
git commit -m "feat: rebrand landing page and improve SEO metadata"
```

### Task 3: Adapt the existing CSS for the logo image

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes the `.brand-logo` and `.product-preview-logo` classes added in `index.html`.
- Preserves the existing dark one-screen layout, responsive breakpoints, focus states, and reduced-motion rules.

- [ ] **Step 1: Replace the CSS-only brand mark styling**

Style `.brand-logo` as a compact square image with `display: block`, `width: 34px`, `height: 34px`, `object-fit: contain`, and a soft violet glow. Remove or leave unused only the old `.brand-mark` rules; do not change unrelated button or layout rules.

- [ ] **Step 2: Style the product preview logo inside the existing window**

Center `.product-preview-logo` within the existing placeholder/window area, cap it with `width: min(68%, 260px)` and `height: auto`, and preserve enough contrast against the dark panel with a subtle radial background. Do not create a new section or alter the preview's absolute positioning.

- [ ] **Step 3: Verify responsive image bounds**

Check that the logo remains inside the header and preview at desktop and mobile widths by inspecting the media-query rules for `max-width: 860px` and `max-width: 640px`.

- [ ] **Step 4: Commit the CSS update**

```bash
git add styles.css
git commit -m "style: integrate SnapMarketing logo across landing"
```

### Task 4: Add crawl entry points and run static verification

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

**Interfaces:**
- `robots.txt` allows public crawling and points crawlers to the canonical sitemap.
- `sitemap.xml` lists the one public landing URL with an ISO timestamp.

- [ ] **Step 1: Add `robots.txt`**

Create exactly:

```text
User-agent: *
Allow: /

Sitemap: https://xdylanlong.github.io/SnapMarketing-Landing/sitemap.xml
```

- [ ] **Step 2: Add `sitemap.xml`**

Create an XML document with one `<url>` entry for `https://xdylanlong.github.io/SnapMarketing-Landing/` and the current date `2026-08-14` in `<lastmod>`.

- [ ] **Step 3: Run static checks**

Run:

```bash
python3 -m http.server 4173 > /tmp/snapmarketing-http.log 2>&1 &
server_pid=$!
sleep 1
curl -fsS http://127.0.0.1:4173/ > /tmp/snapmarketing-index.html
curl -fsS http://127.0.0.1:4173/assets/snapmarketing-logo.png > /tmp/snapmarketing-logo-check.png
curl -fsS http://127.0.0.1:4173/robots.txt > /tmp/snapmarketing-robots.txt
curl -fsS http://127.0.0.1:4173/sitemap.xml > /tmp/snapmarketing-sitemap.xml
kill "$server_pid"
rg -n "<title>|name=\"description\"|rel=\"canonical\"|og:title|twitter:card|application/ld\+json|SnapMarketing" /tmp/snapmarketing-index.html
test -s /tmp/snapmarketing-logo-check.png
rg -n "Sitemap:|https://xdylanlong.github.io/SnapMarketing-Landing/" /tmp/snapmarketing-robots.txt /tmp/snapmarketing-sitemap.xml
```

Expected: all HTTP requests succeed, the logo response is non-empty, the page contains the SEO metadata and SnapMarketing copy, and both crawl files reference the same public URL.

- [ ] **Step 4: Check the final worktree**

Run:

```bash
git status --short --branch
git diff origin/main...HEAD --stat
rg -n "DeepSeek Harness" index.html styles.css robots.txt sitemap.xml
```

Expected: only the intended asset, page, stylesheet, crawl files, and planning/design docs are changed; the final legacy-name search returns no matches.

- [ ] **Step 5: Commit crawl files**

```bash
git add robots.txt sitemap.xml
git commit -m "chore: add SnapMarketing crawl metadata"
```
