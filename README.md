# FestOps — Campus Event Manager

A campus event management web app: events with joining codes, committees with
their own access codes, task progress rings, budget tracking with receipt
reading, analytics, AI hiring assessments, sponsors, chat and reports.

Built with plain HTML, CSS and JavaScript (no build step). Charts are hand-drawn SVG.

## Project structure
```
festops/
├── index.html        page layout (sidebar, top bar, main area)
├── css/
│   └── style.css     colours, fonts, bento grid, cards, charts, modals
├── js/
│   ├── demo-data.js  sample event: TechNova 2026
│   └── app.js        data layer, calculations, charts, pages, AI, actions
└── README.md
```
There is no backend: data is stored in the browser (see below).

## Deploy on GitHub Pages
1. Create a new repository on GitHub (for example `festops`).
2. Upload everything in this folder (`index.html`, `css/`, `js/`, `README.md`)
   to the repository root, keeping the folders (Add file → Upload files → Commit).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**,
   pick branch **main** and folder **/ (root)**, then Save.
5. After a minute your site is live at
   `https://<your-username>.github.io/festops/`.

Or with git:
```bash
git init
git add .
git commit -m "FestOps web app"
git branch -M main
git remote add origin https://github.com/<your-username>/festops.git
git push -u origin main
```

## How data works in this version
- Everything is saved in the **browser's local storage**, so each browser has
  its own copy. Teammates on other devices won't see your changes.
- Use **Export backup** / **Import backup** (top of each page) to move data.
- **Reset to sample** reloads the TechNova 2026 demo event.

## Turning on AI
Click **AI settings** in the sidebar and paste an Anthropic API key
(https://console.anthropic.com). It's stored only in that browser and sent
directly to Anthropic's API.

Never hard-code your API key into `index.html`. On a public site anyone could
copy it. For a real launch, call the AI from your own server instead.

## Making it multi-user (next step)
To share data across a team, replace the data layer in `js/app.js`
(`initData`, `add`, `put`, `upd`, `del`) with Firebase Firestore or your own
backend, and route AI calls through a server function.
