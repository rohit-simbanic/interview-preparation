# 🚀 DevPrep.io — Full-Stack Developer Interview Preparation Hub

DevPrep.io is a modern, production-grade, and feature-rich React + TypeScript web application designed to help developers master frontend, backend, system design, and algorithms. It houses over **1,000 curated questions** across **11 structured paths**, complete with side-by-side English/Bengali explanations, code examples, dynamic AI question generation via Gemini Pro, custom favorites, and a secure administration panel.

---

## ✨ Features

### 1. Curated Preparation Paths (11 Tracks)
* **Frontend:** React, TypeScript, JavaScript, CSS & Tailwind CSS v4.
* **Backend & Databases:** Node.js & Express.js, MongoDB.
* **Advanced Frameworks:** Next.js.
* **State & Data Fetching:** Zustand, Redux, and React Query.
* **Architecture:** System Design.
* **Foundations:** Data Structures & Algorithms (DSA), and General topics (DevOps, Testing, Databases).
* All questions are partitioned into modular difficulty tiers: **Basic**, **Intermediate**, and **Advanced**.

### 2. Side-by-Side Bilingual Translations
Every question features high-quality translations in both English and Bengali, systematically structured into:
* 📖 **Explanation** / **ব্যাখ্যা**
* 🏢 **Real-World Example** / **বাস্তব-ভিত্তিক উদাহরণ**
* 💡 **Best Practice** / **উত্তম অনুশীলন**
* ⚠️ **Common Mistakes** / **সাধারণ ভুলসমূহ**
* Interactive code blocks with proper language syntax highlighting.

### 3. Google Gemini Pro AI Integration
* **Dynamic Generation:** When searching for concepts not covered in the local database, users can generate new questions dynamically using the `gemini-2.5-flash` model.
* **Auto-Categorization:** Gemini automatically detects the search context and classifies the generated question into its appropriate category.
* **Duplicate Detection:** Employs a local **Jaccard Word-Overlap Similarity** algorithm (75% threshold) to identify and highlight existing questions before calling the API.
* **Safety Guardrails:** Enforces developer-related scope checks, rejecting non-computer science requests.

### 4. Interactive & Premium Animations
* **3D Parallax Tilt Effect:** Homepage statistics and explore path cards tilt smoothly in 3D space. Runs on the GPU compositor thread using direct Framer Motion style bindings with **zero React re-renders** (no GPU lag).
* **True Z-Depth Layers:** Category icons float at `translateZ(30px)` and card text at `translateZ(20px)` to provide physical depth.
* **Smooth Physics Scrolling:** Configured with **Lenis** smooth scroll (`lerp: 0.18`) for a premium native app feel, featuring scrolling isolation (`data-lenis-prevent`) on nested panels.
* **Accordion Animations:** Collapses and expands questions with height-fade transitions, keeping accordions neat during active keyword searches.

### 5. Bookmark System (Favorites)
* Local storage persisted favorites store managed via Zustand.
* Displays navigation badges showing saved question counts in real-time.
* Tab-based category layout with tab-specific pagination and automated cleanups.

### 6. Secure Admin Console (`/admin`)
* Admin authentication console matched against env-defined credentials.
* **Brute-Force Lockout Protection:** Triggers a **10-minute lockout** countdown after 3 failed attempts (persisted to local storage to survive page refreshes).
* **Full CRUD Management:** Edit questions via blurred backdrop modals, delete questions, and reset back to factory defaults.
* **Smart Sorting:** Automatically bumps recently created or edited questions to the top of the dashboard.

---

## 🛠️ Tech Stack

* **Core Framework:** React 19 + TypeScript (Strict Mode)
* **Build Tool:** Vite
* **Styling:** CSS & Tailwind CSS v4 (Sleek dark modes, glassmorphism, responsive grid layouts)
* **State Management:** Zustand + Local Storage Persistence
* **Animations:** Framer Motion v12
* **Smooth Scrolling:** Lenis v1
* **AI Engine:** Google Gemini SDK (`@google/generative-ai`)
* **Icons:** Lucide React

---

## 📂 Project Directory Structure

```text
src/
├── components/          # Reusable UI elements (SearchBar, Pagination, ConfirmModal, TopicCard, etc.)
├── data/                # Curator databases split by topic and difficulty level
│   ├── react/
│   ├── typescript/
│   ├── javascript/
│   ├── css/
│   ├── node/
│   ├── mongodb/
│   ├── nextjs/
│   ├── state-query/
│   ├── system-design/
│   ├── dsa/
│   └── other-topics/
├── hooks/               # Custom React hooks (useTheme, useFilteredQuestions)
├── pages/               # Main route views (Home, TopicPage, Favorites, Admin)
├── services/            # API integration modules (geminiService)
├── store/               # Zustand state stores (favoritesStore, customQuestionsStore)
├── utils/               # Helper utilities (similarity checks, markdown encoders)
├── App.tsx              # Main entry point (Lenis provider & router config)
├── main.tsx             # DOM mount bootstrap
└── index.css            # CSS custom variables & Tailwind v4 layout directives
```

---

## ⚙️ Configuration & Setup

### Environment Variables
Create a `.env.local` file in the root directory and configure the following parameters:

```env
# Gemini API Key (Required for AI question generator)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Administration Panel Password (Defaults to admin123 if omitted)
VITE_ADMIN_PASSWORD=admin123
```

### Installation
Install the project dependencies using npm:

```bash
npm install
```

### Development Server
Start the local Vite development server:

```bash
npm run dev
```

### Production Build
Build the project for production. Vite compiles the bundles and performs chunk optimizations:

```bash
npm run build
```

---

## 🔒 Security & Code Standards

* **TypeScript Strictness:** Strict compiler flags are enabled, preventing unsafe expressions and ensuring typing integrity.
* **Component Modularity:** High-frequency rendering components are separated. Interactive coordinate tracking and spring interpolators are isolated inside dedicated widgets to prevent homepage render lag.
* **Safe DOM Sanitization:** Utilizes regular expression escapers to protect search-highlighted keyword matches from execution injections.
