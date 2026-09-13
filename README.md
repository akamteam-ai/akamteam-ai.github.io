# Akam — team site

A bilingual (English / Persian) single-page site for Akam: the company, its KYC
services, the team, and every member's projects and Kaggle work in one place.
Static HTML, CSS and vanilla JavaScript — no framework, no build step, nothing to
install. It follows the same structure as
[Zhaleh Manbari's portfolio](https://zhaleh197.github.io/), so either site can be
edited the same way.

```
index.html              markup and section structure
assets/css/style.css    all styling, light + dark themes
assets/js/main.js       renders the page from the data file
assets/img/             logo, emblem, member photos, social preview image
data/site.js            ← everything you edit lives here
linkedin/               logo, cover image and copy for the LinkedIn page
```

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Edit the content

Everything the page shows comes from `data/site.js`.

| Key | What it controls |
|---|---|
| `ui` | Every interface string — nav, section headings, buttons, footer |
| `tagLabels` | Display names for the topic filter, keyed by tag id |
| `company` | Tagline, lead, about paragraphs, hero stats, and the email / LinkedIn / GitHub / website buttons |
| `services` | The seven KYC module cards |
| `beyond` | The three short "Beyond KYC" columns |
| `members` | Team cards; each has an `id` that projects refer to |
| `projects` | Project cards |
| `kaggle` | One card per member, combining all of that member's Kaggle accounts |

### Two languages

Any string a visitor reads is written as `{ en: "…", fa: "…" }`. A plain string
(a URL, `"FastAPI"`) is shown as-is in both. If one language is missing, the site
falls back to `defaultLang` rather than showing a blank. Persian switches the page
to right-to-left and the Vazirmatn typeface; the visitor's choice is remembered.

### Members

```js
{
  id: "shahla",                         // used in projects[].members and kaggle[].member
  name: { en: "Shahla Gharibi", fa: "شهلا غریبی" },
  initials: "SG",                       // shown when there is no photo
  role: { en: "…", fa: "…" },
  bio:  { en: "…", fa: "…" },           // leave both empty to hide
  avatar: "assets/img/shahla.jpg",      // optional
  honorary: true,                       // optional — dashed card, no bio needed
  links: { portfolio, github, kaggle, linkedin }   // any subset
}
```

To add a photo, put a square image (at least 256 × 256) in `assets/img/` and set
`avatar`. It is used on the team card, on every project card the member is
credited on, and on their Kaggle card.

### Projects

```js
{
  name, subtitle, description,          // { en, fa }
  members: ["zhaleh", "shahla"],        // member ids — drives the People filter
  team: true,                           // optional — "Team project" badge, and listed under "Akam"
  tags: ["kyc", "cv"],                  // tag ids — drives the Topic filter
  tech: ["Python", "FastAPI"],
  links: [
    { label: "source", url: "https://github.com/…" },          // ui.projects key…
    { label: { en: "Team repository", fa: "ریپوی تیم" }, url: "…" }   // …or your own label
  ],
  private: true, privateNote: { en, fa },   // optional lock badge
  cover: "scan",                        // waveform | scan | chart | network | layers | track | stack
  year: "2026",
  featured: true,                       // full-width card with highlights alongside
  highlights: [ { en, fa }, … ]
}
```

Keep **featured projects first** in the list. The smaller cards sit three to a row
below them; a small card placed between two featured ones leaves an empty gap.

### Kaggle

A member with more than one Kaggle account gets a single card: list every account
under `profiles`, and put the combined numbers in `stats`.

```js
{
  member: "shahla",
  profiles: [
    { username: "sshahla",    url: "https://www.kaggle.com/sshahla" },
    { username: "rahagaribi", url: "https://www.kaggle.com/rahagaribi" }
  ],
  stats: { datasets: 26, models: 7, notebooks: 3 },   // sum across the accounts
  selected: [ { name: "allnifti", meta: { en: "3 GB · brain MRI", fa: "…" } }, … ]
}
```

When the same dataset or model is listed on two of one member's accounts, count it
once. The comment above `kaggle` in `data/site.js` shows how the current totals
were reached.

## Publishing

The repository is already initialised with a first commit on `main`, and its
remote points at `https://github.com/akamteam-ai/akamteam-ai.github.io.git`.
Publishing takes two steps, both signed in as the `akamteam-ai` account:

1. On GitHub, create a **public, empty** repository named exactly
   `akamteam-ai.github.io` — no README, no licence, so the first push is clean.
2. Push:

   ```bash
   git push -u origin main
   ```

A repository named `<account>.github.io` is served automatically. Within a minute
or two the site is live at <https://akamteam-ai.github.io/>. If it isn't, check
**Settings → Pages** and set **Source: Deploy from a branch → main / (root)**.

The **Website** button, `og:url` and `og:image` all point at that address. If the
site moves, update `company.links.website` in `data/site.js` and the two `og:`
lines in `index.html` — otherwise LinkedIn link previews lose their image.

### The akamteam-ai.ir domain

The `Akamteam_website` README names `http://akamteam-ai.ir/`, which returned an
error in September 2026. To serve this site there from GitHub Pages: add a file
named `CNAME` containing `akamteam-ai.ir`, point the domain's DNS at GitHub Pages
(**Settings → Pages → Custom domain** shows the records), then change the three
URLs above to the new address.

## LinkedIn

`linkedin/LINKEDIN.md` has the tagline, specialties, About text in English and
Persian, and a first post, ready to paste. The logo and cover image next to it are
already at LinkedIn's sizes.

## Check before sharing

The content was written from the members' GitHub repositories, Kaggle profiles and
Zhaleh's portfolio as they stood in September 2026. Worth confirming with the team:

- **Brain MRI project credit.** Both Zhaleh and Shahla are credited, because the MRI
  datasets and per-sequence U-Net weights appear on both Kaggle profiles. Remove
  `"shahla"` from that project's `members` if that is not right.
- **Private work.** The brain MRI contest pipeline, the ICCKE 2022 entry and the Liara
  hackathon assistant carry no source links. Make sure none is under a
  confidentiality agreement before the site is public.
- **The React demo site.** `react-vercel-akam-team.vercel.app` currently asks for a
  Vercel login, so the card links to the repository instead. Once its deployment
  protection is off, add `{ label: "demo", url: "…" }` to that project's `links`.
- **Team photo.** `team.jpg` in the React repository was not used: it shows three
  people and looks AI-generated. A real photo of the team would be better on the
  About section than a generated one.
- **Shahla's photo.** Her card shows initials for now. Save a square photo (at
  least 256 × 256) as `assets/img/shahla.jpg` and set `avatar` on her entry in
  `data/site.js`.
- **Kaggle counts** add up each member's accounts. Two datasets appear on both
  Zhaleh's and Shahla's profiles, which is why the hero says "40+" rather than an
  exact team total.
- **Mohammad Jafari's card** is an introduction and photo only (the photo is his
  GitHub avatar), with no links or project list, as the team asked.
