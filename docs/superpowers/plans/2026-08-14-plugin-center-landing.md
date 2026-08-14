# DeepSeek Harness Plugin Center Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a one-screen public landing page for DeepSeek Harness Plugin Center in the `SnapMarketing-Landing` repository.

**Architecture:** A dependency-free static page uses semantic HTML for the content and one CSS file for layout, typography, glow effects, responsive behavior, and reduced-motion handling. GitHub is the source-of-truth destination for both the repository CTA and the installation instructions CTA.

**Tech Stack:** HTML5, CSS3, Git, GitHub CLI.

## Global Constraints

- Keep the experience to one landing screen; do not add marketplace cards, search, categories, or extra product pages.
- Use the approved dark near-black / indigo-violet visual direction.
- Keep GitHub and install links usable without JavaScript.
- Point repository links to `https://github.com/xDylanLong/SnapMarketing-Landing`.
- Keep the install CTA honest by linking to the repository `#installation` instructions until a real Harness install URL exists.

---

### Task 1: Add the static landing page

**Files:**
- Create: `index.html`
- Create: `styles.css`

**Interfaces:**
- `index.html` consumes `styles.css` and exposes the page landmarks and CTA URLs.
- `styles.css` provides the responsive visual system and no external runtime dependencies.

- [ ] **Step 1: Create semantic page structure**

Add a document with a `header`, `main`, and `footer`. The header contains the wordmark and GitHub link. The main hero contains the eyebrow, headline, supporting copy, two CTAs, and a three-step loop labeled `Discover`, `Install`, and `Use`. The footer states that the project is open source and links back to GitHub.

- [ ] **Step 2: Add responsive visual styling**

Create a dark background, restrained radial glows, high-contrast type, pill-shaped buttons, visible keyboard focus states, mobile stacking below `760px`, and `prefers-reduced-motion: reduce` overrides. Keep the hero min-height within one viewport without clipping content.

- [ ] **Step 3: Check the static page directly**

Run `python3 -m http.server 4173` from the repository root and request `http://127.0.0.1:4173/` with `curl -I`. Expected result: `HTTP/1.0 200 OK` and the response contains `The open plugin center for DeepSeek Harness.`.

- [ ] **Step 4: Commit the landing page**

```bash
git add index.html styles.css
git commit -m "feat: add plugin center landing page"
```

### Task 2: Add repository and installation documentation

**Files:**
- Create: `README.md`

**Interfaces:**
- `README.md` is the destination for the landing page's install CTA and explains the current MVP boundary.

- [ ] **Step 1: Document the project**

Add a concise README with the product summary, the one-screen landing scope, an `## Installation` heading, the current safe installation placeholder (`Connect this CTA to the Harness host installation flow when the package source is published`), and local preview instructions using `python3 -m http.server 4173`.

- [ ] **Step 2: Verify the install anchor exists**

Run `rg -n "^## Installation$|DeepSeek Harness Plugin Center|python3 -m http.server" README.md`. Expected result: all three patterns are found.

- [ ] **Step 3: Commit the documentation**

```bash
git add README.md
git commit -m "docs: add project and installation notes"
```

### Task 3: Validate and publish the public repository

**Files:**
- Modify: `index.html` only if link or content checks expose an issue.
- Modify: `README.md` only if the installation anchor or instructions are missing.

**Interfaces:**
- The published repository is `https://github.com/xDylanLong/SnapMarketing-Landing`.

- [ ] **Step 1: Run repository checks**

Run `git status --short --branch`, `rg -n "github.com/ThawingX/SnapMarketing-Landing|#installation|Discover|Install|Use" index.html README.md`, and `curl` against the local server. Expected result: no unintended files, both CTA targets are present, and the page returns 200.

- [ ] **Step 2: Create the public GitHub repository and push `main`**

Run `gh repo create xDylanLong/SnapMarketing-Landing --public --source=. --remote=origin --push`. Expected result: GitHub reports the repository URL and the local `main` branch is pushed.

- [ ] **Step 3: Verify the remote state**

Run `gh repo view xDylanLong/SnapMarketing-Landing --json name,isPrivate,url,defaultBranchRef` and `git status --short --branch`. Expected result: `isPrivate` is `false`, the URL is the expected repository, and the branch is clean and tracking `origin/main`.
