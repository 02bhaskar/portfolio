# Bhaskar G – Personal Portfolio Website
### Modern VS Code × GitHub Dark Gold Developer Experience

A professional, high-performance developer portfolio built with **React, Vite, Tailwind CSS, and Framer Motion**, fusing the iconic developer interface of **Visual Studio Code** and **GitHub Dark** with a signature **Obsidian & Aureum Gold** visual identity.

---

## 🌟 Key Features

1. **Authentic VS Code IDE Architecture:**
   - **Activity Bar:** Primary navigation (Explorer, Search, Git Source Control, Projects, Direct Contact).
   - **Sidebar File Explorer:** Interactive nested workspace (`BHASKAR_PORTFOLIO/src`) containing:
     - `Hero.tsx` (Hero landing, personal introduction, dynamic badges, stats)
     - `About.md` (Academic profile, engineering philosophy, and Dr. N.G.P. iTech foundation)
     - `Skills.json` (Categorized skill matrix with interactive category filters)
     - `Projects.ts` (Flagship engineering projects & architecture deep-dive modals)
     - `Experience.yml` (DLK Software Solutions internship & awards timeline)
     - `Resume.pdf` (Interactive CV viewer with 1-click PDF download)
     - `Contact.env` (Interactive message transmitter and copyable environment variables)
   - **Tabbed Editor Workspace:** Open multiple file tabs, switch seamlessly, or close tabs with real VS Code behavior.
   - **Integrated Interactive Terminal:** Built-in bash terminal running commands (`help`, `about`, `projects`, `skills`, `awards`, `contact`, `resume`, `clear`, `sudo hire bhaskar`).
   - **VS Code Status Bar:** Real-time git branch indicator (`main*`), errors/warnings indicator, live "Available for Roles" status, UTF-8, and environment badge.

2. **Dual Experience Modes:**
   - **IDE Workspace Mode:** Explore the portfolio file-by-file through interactive tabs and code explorer.
   - **Full-Page Scroll Mode:** Switch to a continuous, recruiter-friendly scrolling webpage with a single click (`Switch to Full View`).

3. **Dual Perspective (Preview vs. Code):**
   - Toggle between **Preview Mode** (interactive cards, visual components, badges) and **Code View** (syntax-highlighted code with line numbers and a 1-click copy button).

4. **100% Mobile & Tablet Responsive:**
   - On screens under 768px, the layout smoothly adapts into a slide-out mobile drawer and touch-friendly controls.

---

## 📂 Project Structure

```
portfolio new/
├── public/
│   ├── bhaskar.jpg            # Your official profile image
│   ├── resume.pdf             # Your official PDF resume
│   └── Bhaskar resume.pdf     # Backup resume asset
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.jsx         # Custom GitHub & LinkedIn SVG icons
│   │   ├── layout/
│   │   │   ├── ActivityBar.jsx        # Far-left IDE navigation bar
│   │   │   ├── SidebarExplorer.jsx    # File tree explorer & search
│   │   │   ├── EditorTabs.jsx         # Tab row & preview/code switcher
│   │   │   ├── StatusBar.jsx          # Bottom VS Code status strip
│   │   │   └── Terminal.jsx           # Interactive bash command terminal
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx        # Hero landing & introduction
│   │   │   ├── AboutSection.jsx       # Academic background & bio
│   │   │   ├── SkillsSection.jsx      # Categorized skill cards
│   │   │   ├── ProjectsSection.jsx    # Flagship projects gallery
│   │   │   ├── ExperienceSection.jsx  # DLK internship & awards timeline
│   │   │   ├── ResumeSection.jsx      # Resume previewer & download
│   │   │   └── ContactSection.jsx     # Direct contact & .env format
│   │   ├── views/
│   │   │   ├── CodeView.jsx           # Raw syntax-highlighted code view
│   │   │   └── FullPageView.jsx       # Single-page scrolling view
│   │   └── ProjectModal.jsx           # Deep-dive architecture modal
│   ├── data/
│   │   └── portfolioData.js           # ⚡ CENTRAL DATA FILE (Edit your info here!)
│   ├── utils/
│   │   └── codeSnippets.js            # Syntax code snippets for code view
│   ├── App.jsx                        # Main state orchestrator
│   ├── index.css                      # Tailwind base & custom scrollbar
│   └── main.jsx                       # React root entry point
├── dist/                              # Production build output
├── index.html                         # HTML template with SEO tags & fonts
├── package.json                       # Project dependencies & scripts
├── tailwind.config.js                 # Dark Gold & GitHub theme tokens
└── vite.config.js                     # Vite build configuration
```

---

## 🚀 Running Locally

1. Open your terminal in this directory (`d:\portfolio new`).
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 🛠️ How to Update Your Information in the Future

All personal data, links, projects, and skills are centralized in one file:
👉 **`src/data/portfolioData.js`**

* **To update your social links, email, or phone:** Edit `personalInfo` in `src/data/portfolioData.js`.
* **To add/update projects:** Edit `projectsData` in `src/data/portfolioData.js`.
* **To update skills:** Edit `skillsData` in `src/data/portfolioData.js`.
* **To replace your resume:** Simply replace `public/resume.pdf` with your new PDF file.
* **To replace your photo:** Replace `public/bhaskar.jpg` with your new image.

---

## 🌐 Deploying to Vercel (Free & Instant)

### Option A: Using the Vercel Web Dashboard (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Bhaskar G portfolio"
   git branch -M main
   git remote add origin https://github.com/02bhaskar/your-portfolio-repo.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Select your `portfolio-repo` and click **"Import"**.
5. Framework Preset will automatically detect **Vite**.
6. Click **"Deploy"**. Your website will be live in ~30 seconds with a free `.vercel.app` domain!

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy directly.

---

## 🔗 Connecting Your Custom Domain
1. On Vercel, navigate to your project -> **Settings** -> **Domains**.
2. Enter your custom domain (e.g., `bhaskarg.dev` or `bhaskar.tech`).
3. Add the DNS records (CNAME or A record) provided by Vercel to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
4. Vercel will automatically provision free SSL certificates within minutes.

---

LIVE WEBSITE

github.com/02bhaskar/portfolio
