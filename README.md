# 🇩🇪 PassWeg — Der smarte Wegweiser zum deutschen Pass

> **The Modern German Citizenship Guide & Bureaucracy Toolkit (StAG 2024 Reform Ready)**
> *Deployable directly on GitHub Pages with zero server configuration.*

![Tests](https://img.shields.io/badge/Tests-22%2F22%20Passing-emerald?style=flat-square)
![Law](https://img.shields.io/badge/Legislation-StAG%202024%20(June%2027)-crimson?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-purple?style=flat-square)

---

## 📌 Why PassWeg?

Navigating German naturalization (*Einbürgerung*) is notorious for obscure bureaucratic requirements, years of waiting times, and conflicting information on forums. 

With the historic **Modernization of the Nationality Act (StAG)** entering into force on **June 27, 2024**, the rules changed fundamentally:
- **Residency reduced from 8 years to 5 years** (standard track)
- **Turbo track in 3 years** for applicants with C1 German & civic engagement (*Ehrenamt*)
- **Dual Citizenship (Mehrstaatigkeit) universally permitted** — no need to renounce your birth nationality
- **Strict livelihood independence** without *Bürgergeld* (SGB II) or *Sozialhilfe* (SGB XII)
- **Updated Naturalization Test questions** regarding antisemitism, Jewish life, and the democratic constitutional order

**PassWeg** demystifies this entire journey through an interactive, community-driven web application designed for candidates, by candidates.

---

## 🌟 Key Features

### 1. ⚖️ Interactive StAG 2024 Eligibility Calculator
- Evaluates 6 core statutory criteria: continuous residence, permit title (excluding student § 16b while crediting years), language proficiency (B1/C1), self-sufficient income, clean criminal record (≤ 90 *Tagessätze*), and constitutional commitment.
- Categorizes applicants into their exact track:
  - 🚀 **3-Year Turbo Track** (§ 10 Abs. 3 StAG)
  - 💍 **3-Year Spousal Track** (§ 9 StAG)
  - ⭐ **5-Year Standard Track** (§ 10 Abs. 1 StAG)
- Provides tailored diagnoses and next steps for any missing criteria.

### 2. 🗺️ 7-Stage Interactive Naturalization Roadmap
From initial self-assessment to attending the citizenship ceremony (*Einbürgerungsfeier*) and ordering your burgundy German Passport (*Reisepass*) and National ID (*Personalausweis*):
- Time estimates & statutory fees (€255 adult / €51 minor)
- Pro-tips and pitfalls to avoid at each stage

### 3. 📑 Dynamic Document Checklist & Tracker
- Profile-aware filtering: Employed vs Freelance / Business Owner, Married vs Single, Co-naturalizing Children.
- Progress bar and persistent storage in `localStorage`.
- Direct links to order certificates (e.g. *Justiz-Dolmetscher* database, *Deutsche Rentenversicherung* online portal).

### 4. 💡 Insider Bureaucracy Hacks & Tips
- **The Untätigkeitsklage (§ 75 VwGO) Playbook**: How and when to challenge delayed applications.
- **Rentenversicherungsverlauf in 3 Minutes**: Fast-track pension statement download using smartphone NFC & German eID (*AusweisApp*).
- **Cracking the 3-Year Turbo Track**: Exact proof accepted for *besondere Integrationsleistungen* (*Ehrenamt* in DRK, THW, volunteer fire department, sports clubs).
- **Dual Citizenship Travel Protocol (§ 1 PassG)**: Legal border entry rules with two passports.
- **Save 50% on Sworn Translations**: Bypassing agency markups via `justiz-dolmetscher.de`.

### 5. 🎓 BAMF Einbürgerungstest Exam Trainer
- Realistic 33-question simulation with instant feedback and constitutional explanations.
- Highlights the **June 2024 new exam questions** (Holocaust remembrance, antisemitism, Article 1 Basic Law, statehood of Israel).

### 6. ✉️ Official German Letter & Template Generator
Instant customization and one-click copy/download:
- **Sachstandsanfrage**: Polite status inquiry after 6–9 months.
- **Fristsetzung zur Untätigkeitsklage**: Statutory 4-week deadline notice before filing under § 75 VwGO.
- **Arbeitgeberbescheinigung**: Pre-filled employer certificate template for HR departments.
- **3-Jahre-Turbo Begründung**: Formal statement substantiating C1 German and civic volunteer hours.

### 7. 🏙️ Major City Directory & Wait Times
Direct links to local processing portals and realistic wait times for:
- Berlin (LEA Berlin 100% digital portal)
- Munich (KVR München BayernID)
- Hamburg (Einwohner-Zentralamt)
- Frankfurt am Main (Ordnungsamt)
- Cologne (Köln)
- Stuttgart

### 8. 🌐 Bilingual (English & Deutsch)
Toggle between English and German anytime.

---

## 🚀 Instant Deployment to GitHub Pages

### Method 1: Automated GitHub Actions (Recommended)
This repository already includes the workflow file at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of PassWeg"
   git remote add origin https://github.com/<your-username>/passweg.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The deployment workflow will run automatically on push, run all 22 tests, build the static site, and deploy it to `https://<your-username>.github.io/passweg/`.

### Method 2: Manual / Custom Domain
The Vite build outputs standalone static HTML, CSS, and JavaScript in `./dist` with relative paths (`base: './'`). You can deploy `./dist` to any static host (GitHub Pages, Cloudflare Pages, Vercel, Netlify) with zero configuration.

---

## 🛠️ Local Development & Testing

### Prerequisites
- Node.js 18+ (tested on Node v20 & v26)
- npm or pnpm

### Quickstart
```bash
# Clone the repository
git clone https://github.com/<your-username>/passweg.git
cd passweg

# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:5173
```

### Running Test Suite
PassWeg comes with a 100% passing test suite covering legal algorithms, document logic, quiz benchmarks, and UI component workflows:

```bash
# Run tests with Vitest
npm test

# Run tests in watch mode
npm run test:watch
```

### Building for Production
```bash
npm run build
```
Generates production-ready static assets in `dist/`.

---

## ⚖️ Legal Disclaimer

PassWeg is an open-source educational and community guide. It does not constitute formal legal counsel. For complex individual circumstances (e.g. past criminal proceedings, disputed income stability, hardship applications), consult an accredited migration law attorney (*Fachanwalt für Migrationsrecht*).
