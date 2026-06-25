# M&Y BMW Spares — Website

A simple stock-list website for M&Y BMW Spares, themed around BMW's blue/white roundel colours with an M-stripe (blue/purple/red) accent.

## What's in this site

- `index.html` — the public stock list. Anyone can search/filter parts by category and stock status.
- `admin.html` — staff page for managing stock. Passcode-protected (very lightly — see note below).
- `data.json` — the actual parts list. This is the "source of truth" for stock.
- `styles.css`, `common.js` — shared styling and logic.

## Publishing it on GitHub Pages

1. Create a new GitHub repository (e.g. `mny-bmw-spares`).
2. Upload all the files in this folder to the repo (drag-and-drop on github.com works fine, or use git).
3. Go to **Settings → Pages** in the repo.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. After a minute or two your site will be live at:
   `https://<your-github-username>.github.io/<repo-name>/`

## How your father and his team check stock day-to-day

1. Go to the website, click **Staff Login** in the top menu.
2. Enter the staff passcode (set to `MYBMW2026` by default — change this any time, see below).
3. Each part has a green **In stock** / red **Out of stock** button — click it to flip the status instantly. If a part is marked out of stock its quantity resets to 0 automatically.
4. You can also edit the name, price, condition, model fitment, or quantity directly in the table.
5. Click **Save changes** — this saves on the device/browser you're using right now, so the public page on *that device* updates immediately.
6. To make the change visible to **everyone** visiting the site (not just your device), click **⬇ Download data.json**, then go to the GitHub repo and replace the existing `data.json` file with the one you just downloaded (GitHub → your repo → click `data.json` → pencil/edit icon, or use "Add file → Upload files" and overwrite it). The live site picks this up within a minute or two.

This two-step setup (Save locally, then Download + upload to GitHub) is because GitHub Pages is a static site with no server of its own — there's nowhere "live" to permanently store changes except the files in the repo itself. If you outgrow this later, the table is built to make it straightforward to move to a small database or spreadsheet backend without changing how the front end looks.

## Changing the staff passcode

Open `admin.html`, find this line near the top of the `<script>` section:

```js
const PASSCODE = "MYBMW2026";
```

Change `"MYBMW2026"` to anything you like, save the file, and re-upload it to GitHub.

**Note on security:** this passcode only stops casual visitors from clicking into the stock editor — anyone who looks at the page's source code could find it. Don't store anything truly sensitive (banking info, personal documents, etc.) in this site.

## Adding photos to parts

Each part can have a photo, shown on the public stock list. In the staff page, under each part there's a **Photo URL** field and an **Upload photo** button:

- **Upload photo** — pick a photo straight from your phone/computer. It gets embedded directly into the stock data (best for getting started quickly). Keep photos under 1.5MB each — the page will warn you if a photo is too big, since very large photos make the site slow to load for customers.
- **Photo URL field** — instead of uploading, you can type a path or link, e.g. `images/eng-001.jpg` if you've uploaded photos to an `images` folder in the GitHub repo, or a full link (`https://...`) if the photo is hosted elsewhere (Google Photos, Imgur, etc.).

Recommended approach for the best-looking, fastest site: create an `images` folder in your repo, upload your part photos there (resized to roughly 800px wide), and reference them by filename. Uploading photos via the admin page is the quickest way to get started, but embedded photos make the `data.json` file larger over time.

Parts without a photo show a clean placeholder with their initials instead — no broken images on the live site.

## Adding or removing parts

In the staff page, use **+ Add new part** to add a blank row you can fill in, or **Remove** on any row to delete it. Remember to Save, then Download + upload `data.json` to publish.

## Colours used (BMW-inspired)

- BMW Blue `#0066B1` and deep blue `#003D6E`
- White `#FFFFFF` and near-black ink `#101417`
- M-stripe accent: blue `#0066B1` → purple `#5A3E85` → red `#E2231A`, used as a single signature stripe at the top of every page
