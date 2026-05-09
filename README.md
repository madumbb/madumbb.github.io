# Maria Mercedes Relao — Portfolio

Dark techy portfolio built with pure HTML, CSS & JS. No frameworks, no build tools — just open `index.html` and it works. Deploy free on GitHub Pages.

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) → click **New**
2. Name it **`mariamercedesrelao.github.io`** *(your GitHub username + .github.io)*
   - This gives you the URL: `https://mariamercedesrelao.github.io`
   - Or name it anything (e.g. `portfolio`) → URL: `https://mariamercedesrelao.github.io/portfolio`
3. Set visibility to **Public** → click **Create repository**

### Step 2 — Upload Files
**Option A — Drag & Drop (easiest, no setup)**
1. Open your new repository on GitHub
2. Click **Add file → Upload files**
3. Drag in all portfolio files and folders (`index.html`, `css/`, `js/`, `assets/`)
4. Click **Commit changes**

**Option B — Git (if you have Git installed)**
```bash
cd portfolio          # navigate to this folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Left sidebar → scroll to **Pages**
3. Under **Source** → select `Deploy from a branch`
4. Branch: `main` | Folder: `/ (root)` → **Save**
5. Wait ~2 minutes → your site is live! 🎉

---

## ✏️ Customizing Your Portfolio

### 1. Personal Details
Open `index.html` and find these placeholders — replace them all:

| Placeholder | Replace with |
|---|---|
| `YOUR_GITHUB` | Your GitHub username |
| `YOUR_LINKEDIN` | Your LinkedIn handle |
| `mariamercedesrelao@email.com` | Your real email |
| `Your University Name` | Your actual school |

### 2. Your Photo
1. Add your photo to `assets/images/` — name it `photo.jpg`
2. In `index.html`, find the `.about-image-placeholder` section
3. Replace the placeholder div with:
   ```html
   <img src="assets/images/photo.jpg" alt="Maria Mercedes Relao" />
   ```

### 3. Adding a Project
Copy this block inside `<div id="projectsGrid">` and fill it in:

```html
<div class="project-card" data-type="dev">
  <!-- data-type options: "dev" | "design" | "both" -->
  <div class="project-img">
    <img src="assets/projects/my-project.png" alt="Project Name" />
    <div class="project-overlay">
      <a href="https://your-live-link.com" target="_blank" class="overlay-link">Live Demo ↗</a>
      <a href="https://github.com/you/repo" target="_blank" class="overlay-link">GitHub ↗</a>
    </div>
  </div>
  <div class="project-info">
    <div class="project-tags">
      <span class="tag">React</span>
      <span class="tag">Node.js</span>
    </div>
    <h3 class="project-title">My Project Name</h3>
    <p class="project-desc">What this project does and what problem it solves.</p>
  </div>
</div>
```

For UI/UX projects, change `data-type="design"` and update overlay links to Figma + Case Study.

### 4. Skills
In `index.html`, find the `<ul class="skill-list">` sections. For each skill:
- Change the `<span>` text to your skill name
- Change `data-level="85"` to your level (0–100)

### 5. Experience & Education
Find the `<div class="timeline">` blocks and update each `.timeline-item` with your real dates, roles, and companies.

### 6. Resume PDF
1. Drop your resume as `assets/resume.pdf`
2. The download button will automatically work

### 7. Contact Form
By default, clicking "Send Message" opens your email client (mailto).
For a real submission form (no backend needed):
1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form — copy your **Form ID**
3. In `js/main.js`, comment out the `window.location.href` line and uncomment the Formspree block, replacing `YOUR_FORM_ID`

---

## 🎨 Quick Theme Tweaks

Open `css/style.css` — find the `:root` block at the top:

```css
--green: #00dc82;      /* Change accent color */
--bg:    #07090c;      /* Change background */
--text:  #dde8e0;      /* Change text color */
```

---

## 📁 File Structure

```
portfolio/
├── index.html              ← All content lives here
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← All animations & interactions
├── assets/
│   ├── images/
│   │   └── photo.jpg       ← ADD YOUR PHOTO HERE
│   ├── projects/           ← ADD PROJECT SCREENSHOTS HERE
│   └── resume.pdf          ← ADD YOUR RESUME HERE
└── README.md
```

---

## ✅ Pre-launch Checklist

- [ ] Replace all `YOUR_GITHUB`, `YOUR_LINKEDIN`, email placeholders
- [ ] Add your photo → `assets/images/photo.jpg`
- [ ] Add your resume → `assets/resume.pdf`
- [ ] Add at least 2–3 project screenshots → `assets/projects/`
- [ ] Fill in real projects (title, description, tags, links)
- [ ] Update skills and their levels
- [ ] Update work experience and education
- [ ] Test on mobile
- [ ] Deploy to GitHub Pages
