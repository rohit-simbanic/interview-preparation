import type { Question } from '../../types';

export const tailwindcss4Questions: Question[] = [
  {
    id: 'css-101',
    title: 'What is Tailwind CSS v4 and what are its key architectural updates?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Framework', 'Tailwind v4', 'Architecture'],
    enAnswer: 'Tailwind CSS v4 is a major rewrite featuring a new Rust-based compiler engine (Oxide) for up to 10x faster builds. Its key architectural update is native CSS configuration, eliminating tailwind.config.js and moving all configurations to CSS using the @theme directive.',
    bnAnswer: 'Tailwind CSS v4 হলো ফ্রেমওয়ার্কটির একটি বড় রি-রাইট সংস্করণ যা ১০ গুণ পর্যন্ত দ্রুত বিল্ডের জন্য নতুন রাস্ট-ভিত্তিক কম্পাইলার ইঞ্জিন (Oxide) ব্যবহার করে। এর মূল পরিবর্তন হলো নেটিভ সিএসএস কনফিগারেশন, যা tailwind.config.js বাদ দিয়ে সমস্ত সেটিংস সিএসএস ফাইলের @theme নির্দেশনায় স্থানান্তরিত করেছে।',
    enExplanation: `### Explanation
Tailwind CSS v4 replaces the JavaScript-based build system with a brand-new architecture designed for speed and standards compliance:
1. **Rust compiler (Oxide)**: Rewrite of the engine from JS to Rust, offering compile times up to 10x faster and hot-reload times up to 100x faster.
2. **CSS-first Configuration**: The JS configuration file (\`tailwind.config.js\`) is gone. All project themes, fonts, colors, and screens are defined natively in your main CSS file using standard CSS variables inside the \`@theme\` block.
3. **Simplified Imports**: Instead of three \`@tailwind\` directives, Tailwind v4 is imported using a single \`@import "tailwindcss";\` statement.

### Real-World Example
In a v3 project, customizing brand colors required modifying a JS config file and importing it. In v4, you open your stylesheet, write a \`@theme\` block, define \`--color-primary\`, and compile. The build engine detects it automatically.

### Best Practice
Embrace CSS-first styling. Declare all custom theme options directly in your CSS files using native CSS properties.

### Common Mistakes
Searching for the \`tailwind.config.js\` file in a v4 project. It does not exist by default unless you explicitly instruct the build tool to run in compatibility mode.

### Code Example
\`\`\`css
/* Tailwind v4 Import and native configuration */
@import "tailwindcss";

@theme {
  --color-brand-primary: #4f46e5;
  --color-brand-secondary: #06b6d4;
  
  --font-display: "Outfit", sans-serif;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Tailwind CSS v4 মূলত জাভাস্ক্রিপ্ট-ভিত্তিক বিল্ড সিস্টেম সরিয়ে স্ট্যান্ডার্ড সিএসএস ও দ্রুততর রাস্ট কম্পাইলার দিয়ে নতুন আর্কিটেকচার তৈরি করেছে:
১. **রাস্ট কম্পাইলার (Oxide)**: জেএস ইঞ্জিন থেকে রাস্টে রূপান্তরের ফলে বিল্ড স্পিড ১০ গুণ এবং হট-রিলোড ১০০ গুণ পর্যন্ত ফাস্ট হয়েছে।
২. **CSS-first কনফিগারেশন**: কনফিগারেশন ফাইল (\`tailwind.config.js\`) আর নেই। সব কাস্টম থিম, ফন্ট ও কালার সিএসএস ফাইলের ভেতর \`@theme\` ব্লকে ভেরিয়েবল আকারে লেখা হয়।
৩. **সহজ ইমপোর্ট**: তিনটি আলাদা ডিরেক্টিভের বদলে কেবল \`@import "tailwindcss";\` দিয়ে টেইলউইন্ড লোড করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
টেইলউইন্ড ৩ সংস্করণে ব্র্যান্ড কালার সেট করতে কনফিগ ফাইল এডিট করতে হতো। ৪ সংস্করণে আপনি শুধু আপনার সিএসএস ফাইলে গিয়ে \`@theme\` ব্লকের ভেতর \`--color-primary\` সিএসএস ভেরিয়েবল লিখে সেভ করলেই রেন্ডারিং সচল হবে।

### উত্তম অনুশীলন
সিএসএস-ফার্স্ট কোডিং অনুসরণ করুন। কাস্টম থিম বা স্ক্রিন সাইজ টপ-লেভেল সিএসএস ভেরিয়েবল ব্যবহার করে সিএসএস ফাইলেই লিখুন।

### সাধারণ ভুলসমূহ
টেইলউইন্ড ৪ প্রজেক্টে \`tailwind.config.js\` ফাইল খোঁজার চেষ্টা করা। থিম কনফিগারেশনের জন্য এখন কেবল সিএসএস ফাইলই ব্যবহৃত হয়।

### কোড উদাহরণ
\`\`\`css
/* টেইলউইন্ড ৪ ইমপোর্ট এবং নেটিভ কনফিগারেশন */
@import "tailwindcss";

@theme {
  --color-brand-primary: #4f46e5;
  --color-brand-secondary: #06b6d4;
  
  --font-display: "Outfit", sans-serif;
}
\`\`\``
  },
  {
    id: 'css-102',
    title: 'How does theme configuration work in Tailwind v4 using CSS variables?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Variables', 'Theme', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, configuring custom themes uses CSS variables inside a @theme block. Declaring a variable like --color-primary: #ff0000 automatically generates utility classes like bg-primary, text-primary, and border-primary.',
    bnAnswer: 'Tailwind v4-এ কাস্টম থিম কনফিগারেশন @theme ব্লকের ভেতর সিএসএস ভেরিয়েবল ব্যবহার করে কাজ করে। --color-primary: #ff0000 ঘোষণা করলে ব্রাউজারে bg-primary, text-primary ও border-primary ইউটিলিটি ক্লাসগুলো নিজে থেকে তৈরি হয়ে যায়।',
    enExplanation: `### Explanation
In v4, Tailwind converts your custom CSS variables declared inside the \`@theme\` block into utility classes automatically:
- **Automatic Utility Generation**: Declaring \`--color-brand-purple: #4f46e5;\` generates \`bg-brand-purple\`, \`text-brand-purple\`, \`border-brand-purple\`, and ring utilities.
- **Theme Overrides vs Extensions**: 
  - To **extend** the default theme, just define new variables inside the \`@theme\` block.
  - To **override** or clear default properties, use the \`--color-*: initial;\` CSS keyword inside the theme block to reset them first.

### Real-World Example
If you want to add a custom border radius and primary color to your layout:
\`\`\`css
@theme {
  --color-primary: #4f46e5;
  --radius-xl: 1.5rem;
}
\`\`\`
You can instantly use them in HTML as \`<div class="bg-primary rounded-xl"></div>\`.

### Best Practice
Use naming structures consistent with Tailwind's standard conventions (e.g. \`--color-*\`, \`--radius-*\`, \`--font-*\`, \`--animate-*\`) to ensure utility mapping operates correctly.

### Common Mistakes
Forgetting that defining a variable without prefixing it (like writing \`--primary-color: blue\` instead of \`--color-primary-color: blue\`) inside the theme block will fail to map it to class utilities.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Generates bg-sky-brand, text-sky-brand */
  --color-sky-brand: oklch(0.7 0.12 220);
  
  /* Generates animate-spin-slow */
  --animate-spin-slow: spin 3s linear infinite;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে \`@theme\` ব্লকের ভেতর লেখা সিএসএস ভেরিয়েবলগুলোকে অটোমেটিক ইউটিলিটি ক্লাসে রূপান্তর করে:
- **অটো জেনারেশন**: \`--color-brand-purple: #4f46e5;\` ডিক্লেয়ার করলে তা নিজে থেকেই \`bg-brand-purple\`, \`text-brand-purple\` ইত্যাদি ক্লাস তৈরি করবে।
- **থিম এক্সটেন্ড ও রিসেট**: 
  - থিম **এক্সটেন্ড** বা নতুন ভ্যালু যোগ করতে শুধু নতুন ভেরিয়েবল লিখুন।
  - থিমের ডিফল্ট ভ্যালুগুলো পুরোপুরি **মুছে ফেলতে** থিম ব্লকের ভেতর \`--color-*: initial;\` ব্যবহার করুন।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি প্রজেক্টে কাস্টম রেডিয়াস এবং ব্র্যান্ড কালার সেট করতে চান:
\`\`\`css
@theme {
  --color-primary: #4f46e5;
  --radius-xl: 1.5rem;
}
\`\`\`
এখন এইচটিএমএল ফাইলে সরাসরি \`<div class="bg-primary rounded-xl"></div>\` ইউটিলিটি ক্লাসটি ব্যবহার করতে পারবেন।

### উত্তম অনুশীলন
ভেরিয়েবল নামকরণে টেইলউইন্ডের কনভেনশন মেনে চলুন (যেমন: \`--color-*\`, \`--radius-*\`, \`--font-*\`), অন্যথায় ইউটিলিটি ম্যাপ সফল হবে না।

### সাধারণ ভুলসমূহ
নামকরণের শুরুতে কনভেনশন কি-ওয়ার্ড ব্যবহার না করে শুধু ভেরিয়েবল লেখা (যেমন \`--color-primary\` এর জায়গায় শুধু \`--primary\` লেখা)। এতে ইউটিলিটি ক্লাসগুলো জেনারেট হবে না।

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* bg-sky-brand, text-sky-brand ক্লাস জেনারেট করবে */
  --color-sky-brand: oklch(0.7 0.12 220);
  
  /* animate-spin-slow ক্লাস জেনারেট করবে */
  --animate-spin-slow: spin 3s linear infinite;
}
\`\`\``
  },
  {
    id: 'css-103',
    title: 'Explain how Tailwind v4 registers native CSS variables globally.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Variables', 'Theme', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 exposes all theme variables as native CSS custom properties on the :root element. This allows developers to use these variables in standard CSS styles or inline styles using var(--color-blue-500) without compiling overhead.',
    bnAnswer: 'Tailwind v4 তার সব থিম ভেরিয়েবলকে :root এলিমেন্টে নেটিভ সিএসএস কাস্টম প্রোপার্টি হিসেবে উন্মুক্ত করে। এর ফলে ডেভেলপাররা সাধারণ সিএসএস ফাইল বা ইনলাইন স্টাইলে সহজেই var(--color-blue-500) লিখে থিম এক্সেস করতে পারেন।',
    enExplanation: `### Explanation
In previous versions, Tailwind values were locked inside javascript maps. To access colors inside external scripts, you had to load tailwind configs.
In v4, **every single color, spacing, and transition utility** is written to the root DOM as a native CSS custom property:
- Standard classes (like \`bg-blue-500\`) reference CSS variables (like \`var(--color-blue-500)\`) under the hood.
- This creates interoperability: you can write standard CSS rules inside your stylesheet and reference Tailwind variables directly using the standard CSS \`var()\` syntax.

### Real-World Example
If you have a canvas component or custom SVG that needs to match the \`red-500\` tailwind theme color, instead of hardcoding the hex code, you can use:
\`\`\`html
<svg stroke="var(--color-red-500)"></svg>
\`\`\`

### Best Practice
Take advantage of native CSS properties. Reference Tailwind variables in custom animations or non-Tailwind styles to reduce code duplication and maintain visual consistency.

### Common Mistakes
Assuming that Tailwind v4 variables use camelCase. All variables are written in standard kebab-case (e.g. \`--color-slate-900\`, not \`--colorSlate900\`).

### Code Example
\`\`\`css
/* Custom CSS stylesheet referencing Tailwind v4 variables directly */
.custom-chart-line {
  stroke: var(--color-indigo-600); /* Uses Tailwind's indigo-600 color code */
  stroke-width: var(--spacing-2);   /* Uses Tailwind's spacing scale */
  transition: stroke var(--transition-duration-normal) var(--transition-timing-ease-out);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে টেইলউইন্ডের সব কালার ও ভ্যালু জাভাস্ক্রিপ্ট অবজেক্টে লক থাকত। এক্সটারনাল স্ক্রিপ্ট থেকে এগুলো রিড করা কঠিন ছিল।
৪ সংস্করণে **টেইলউইন্ডের প্রতিটি কালার, স্পেসিং ও ট্রানজিশন** ডমের রুট এলিমেন্টে নেটিভ সিএসএস কাস্টম প্রোপার্টি হিসেবে তৈরি হয়:
- ডিফল্ট ইউটিলিটি ক্লাসগুলো (যেমন: \`bg-blue-500\`) মূলত ব্যাকগ্রাউন্ডে \`var(--color-blue-500)\` সিএসএস ভেরিয়েবলটি কল করে।
- এর ফলে আপনি যেকোনো সাধারণ বা কাস্টম সিএসএস রুলসের ভেতর টেইলউইন্ডের ভেরিয়েবলগুলোকে \`var()\` দিয়ে সরাসরি কল করতে পারবেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কাস্টম চার্ট বা এসভিজি এলিমেন্টে টেইলউইন্ডের \`red-500\` কালার ব্যবহার করতে চাচ্ছেন। জাভাস্ক্রিপ্ট কনফিগারেশন ছাড়াই সরাসরি ইনলাইনে \`<svg stroke="var(--color-red-500)"></svg>\` লিখে এটি সম্পন্ন করা যায়।

### উত্তম অনুশীলন
কোড ডুপ্লিকেশন এড়াতে এবং ব্র্যান্ডিংয়ের সামঞ্জস্য রাখতে কাস্টম সিএসএস কোডের ভেতর টেইলউইন্ডের নেটিভ ভেরিয়েবলগুলো ব্যবহার করুন।

### সাধারণ ভুলসমূহ
টেইলউইন্ডের ভেরিয়েবলগুলো ক্যামেলকেস (camelCase) ফরম্যাটে হবে বলে ধরে নেওয়া। সব ভেরিয়েবল স্ট্যান্ডার্ড কেবাব-কেস (kebab-case) ফরম্যাটে থাকে (যেমন: \`--color-slate-900\`)।

### কোড উদাহরণ
\`\`\`css
/* কাস্টম সিএসএস ফাইলে সরাসরি টেইলউইন্ড ভেরিয়েবল ব্যবহার */
.custom-chart-line {
  stroke: var(--color-indigo-600); /* টেইলউইন্ডের indigo-600 কালার কোড */
  stroke-width: var(--spacing-2);   /* টেইলউইন্ডের ২ স্পেসিং ভ্যালু */
  transition: stroke var(--transition-duration-normal) var(--transition-timing-ease-out);
}
\`\`\``
  },
  {
    id: 'css-104',
    title: 'Explain the performance benefits of the Rust-based Oxide compiler engine in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Oxide', 'Performance', 'Tailwind v4'],
    enAnswer: 'The new Rust-based Oxide compiler in Tailwind v4 parses files concurrently and compiles styles up to 10x faster. It eliminates dynamic JavaScript dependency trees, reducing build-time RAM footprint and enabling instant hot-reloads.',
    bnAnswer: 'Tailwind v4-এর নতুন রাস্ট-ভিত্তিক Oxide কম্পাইলার ফাইলগুলোকে একসাথে (concurrently) পার্স করে এবং ১০ গুণ পর্যন্ত দ্রুত স্টাইল বিল্ড করে। এটি ডাইনামিক জাভাস্ক্রিপ্ট ডিপেন্ডেন্সি ট্রির প্রয়োজনীয়তা দূর করে র্যামের ব্যবহার কমায় এবং ইনস্ট্যান্ট হট-রিলোড দেয়।',
    enExplanation: `### Explanation
Tailwind CSS v3 used a JavaScript parser running on Node.js. For huge codebases (thousands of HTML/React components), parsing files and matching classes was CPU-intensive.
**Oxide Compiler in v4**:
- Written in Rust, which compiles directly to binary codes, running parallelized file sweeps.
- Build times drop from 1-2 seconds down to less than **100ms** on average codebases.
- **No dynamic JS dependencies**: Because the build tool runs compiled binary threads, the RAM memory overhead during watch-mode is minimal.
- Hot-reloads feel instant, eliminating visual code compilation delays during developer drafts edits.

### Real-World Example
In large scale enterprise projects with 10,000+ files, running \`npm run build\` previously took 15-20 seconds to compile styling sheets. Upgrading to Tailwind v4 cuts the build step down to 1.5 seconds, saving CI/CD pipelines run times.

### Best Practice
Upgrade your Vite or Next.js build plugins to the native v4 plugins (like \`@tailwindcss/vite\`) to take full advantage of the compiled Rust engine directly within the bundler lifecycle.

### Common Mistakes
Running legacy PostCSS loaders alongside the new Rust compiler without caching configs, which can bottleneck compilation speed back to PostCSS limits.

### Code Example
\`\`\`typescript
// Vite configuration (vite.config.ts) using native v4 Rust integration
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // Native compiled Oxide integration
  ],
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৩ সংস্করণে নোড জেএসের (Node.js) জাভাস্ক্রিপ্ট পারসার ব্যবহৃত হতো। বড় প্রজেক্টে অগণিত ফাইলের জন্য ইউটিলিটি ক্লাস ম্যাচ ও বিল্ড করতে প্রসেসরের অনেক সময় লাগত।
**টেইলউইন্ড ৪-এর Oxide কম্পাইলার**:
- এটি রাস্ট (Rust) ভাষায় লেখা যা সরাসরি বাইনারি কোডে রান করে এবং প্যারালাল ফাইল স্ক্যানিং চালায়।
- বিল্ড করার সময় ১-২ সেকেন্ড থেকে কমে গড়ে **১০০ মিলি-সেকেন্ডের** নিচে নেমে আসে।
- **জেএস ডিপেন্ডেন্সি নেই**: বিল্ড টুলটি রাস্ট বাইনারি থ্রেড ব্যবহার করায় মেমোরি খরচ খুবই কম হয়।
- কোড পরিবর্তন করে সেভ করা মাত্র স্ক্রিনে ইনস্ট্যান্ট হট-রিলোড দেখা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
হাজার হাজার ফাইল বিশিষ্ট কর্পোরেট প্রজেক্টে \`npm run build\` দিলে আগে সিএসএস কম্পাইল হতে ১৫-২০ সেকেন্ড লাগত। টেইলউইন্ড ৪-এ আপগ্রেড করার পর তা মাত্র ১.৫ সেকেন্ডে নেমে আসে, যা সিআই/সিডি পাইপলাইনের অনেক সময় বাঁচায়।

### উত্তম অনুশীলন
কম্পিলেশন স্পিডের সর্বোচ্চ সুবিধা পেতে বান্ডলার প্লাগইনগুলোকে নতুন সংস্করণের নেটিভ প্লাগইন (যেমন \`@tailwindcss/vite\`) দিয়ে আপডেট করুন।

### সাধারণ ভুলসমূহ
ক্যাশিং অপ্টিমাইজ না করে নতুন রাস্ট কম্পাইলারের সাথে পুরোনো পোস্ট-সিএসএস (PostCSS) লোডার চালানো, যা বিল্ড স্পিড পুনরায় কমিয়ে দিতে পারে।

### কোড উদাহরণ
\`\`\`typescript
// নতুন ৪ সংস্করণের রাস্ট ইন্টিগ্রেশন সহ Vite কনফিগারেশন (vite.config.ts)
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // নেটিভ কম্পাইলড Oxide প্লাগইন
  ],
});
\`\`\``
  },
  {
    id: 'css-105',
    title: 'Explain the new Tailwind v4 import statement.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Imports', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 is loaded using a single standard CSS import statement: @import "tailwindcss";. This replaces the three v3 directives (@tailwind base; @tailwind components; @tailwind utilities;) and follows modern CSS specifications.',
    bnAnswer: 'Tailwind v4 একটিমাত্র স্ট্যান্ডার্ড সিএসএস ইমপোর্ট বিবৃতির মাধ্যমে লোড করা হয়: @import "tailwindcss";। এটি ৩ সংস্করণের তিনটি নির্দেশনা (@tailwind base; @tailwind components; @tailwind utilities;) প্রতিস্থাপন করে আধুনিক সিএসএস স্পেকস অনুসরণ করে।',
    enExplanation: `### Explanation
Tailwind CSS v3 required custom CSS directives that were technically invalid in raw CSS parsers until processed:
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`
In v4, this is replaced by standard CSS import syntax:
\`\`\`css
@import "tailwindcss";
\`\`\`
- This is fully compliant with standard CSS specifications.
- The Oxide compiler intercepts the \`@import "tailwindcss"\` statement and injects the baseline styles, component classes, and utility maps dynamically.
- You can place your custom layer overrides directly below the import.

### Real-World Example
In a new Vite project, instead of configuring a massive PostCSS pipeline to parse custom tailwind directives, you simply write \`@import "tailwindcss"\` inside your \`index.css\` file and run the Vite dev server.

### Best Practice
Place \`@import "tailwindcss";\` at the very top of your main stylesheet file. This ensures all default theme styles and utility mapping rules are registered before custom overrides execute.

### Common Mistakes
Mixing the old \`@tailwind\` directives and the new \`@import\` statement in the same stylesheet, which can cause duplicate styles compilation and build errors.

### Code Example
\`\`\`css
/* index.css - Tailwind v4 Standard File */
@import "tailwindcss";

/* Custom utility overrides */
.btn-custom {
  @apply px-4 py-2 bg-indigo-600 text-white rounded-lg;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৩ সংস্করণে নিচের কাস্টম ডিরেক্টিভগুলো লিখতে হতো যা স্ট্যান্ডার্ড সিএসএস পারসারের চোখে ইনভ্যালিড ছিল:
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`
৪ সংস্করণে এটি স্ট্যান্ডার্ড সিএসএস ইমপোর্ট সিনট্যাক্স দিয়ে প্রতিস্থাপিত হয়েছে:
\`\`\`css
@import "tailwindcss";
\`\`\`
- এটি স্ট্যান্ডার্ড সিএসএস স্পেসিফিকেশনের সাথে ১০০% সামঞ্জস্যপূর্ণ।
- Oxide কম্পাইলার পেজে এই ইমপোর্ট স্টেটমেন্টটি দেখা মাত্রই নেটিভ টেইলউইন্ডের বেস স্টাইল ও ইউটিলিটিগুলো পেজে ইনজেক্ট করে দেয়।
- এর ঠিক নিচে আপনি আপনার কাস্টম সিএসএস রুলস লিখতে পারেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নতুন ভাইট (Vite) প্রজেক্টে পোস্ট-সিএসএস (PostCSS) পাইপলাইনের ঝামেলা ছাড়াই শুধু \`index.css\` ফাইলের শুরুতে \`@import "tailwindcss"\` লিখে সেভ করলেই প্রজেক্ট রেডি হয়ে যায়।

### উত্তম অনুশীলন
স্টাইল ফাইলের একদম ওপরে \`@import "tailwindcss";\` রাখুন। এটি নিশ্চিত করে যে কাস্টম স্টাইল রেন্ডার হওয়ার আগেই টেইলউইন্ডের ডিফল্ট থিম ও রিসেট স্টাইলগুলো লোড হয়ে গেছে।

### সাধারণ ভুলসমূহ
একই স্টাইল ফাইলে ওল্ড \`@tailwind\` এবং নতুন \`@import\` দুই ধরনের ডিরেক্টিভই মিক্স করে ফেলা। এতে ডুপ্লিকেট ক্লাস রেন্ডার হয়ে বিল্ড এরর হতে পারে।

### কোড উদাহরণ
\`\`\`css
/* index.css - টেইলউইন্ড ৪ স্ট্যান্ডার্ড ফাইল */
@import "tailwindcss";

/* কাস্টম ইউটিলিটি ক্লাস */
.btn-custom {
  @apply px-4 py-2 bg-indigo-600 text-white rounded-lg;
}
\`\`\``
  },
  {
    id: 'css-106',
    title: 'Explain the new @utility directive in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Directives', 'Utilities', 'Tailwind v4'],
    enAnswer: 'The @utility directive in Tailwind v4 is used to declare custom utility classes inside CSS. This replaces the v3 @layer utilities block, offering automatic support for variants (like hover:, active:) and dark mode out of the box.',
    bnAnswer: 'Tailwind v4-এর @utility নির্দেশিকাটি সিএসএসের ভেতর কাস্টম ইউটিলিটি ক্লাস তৈরি করতে ব্যবহৃত হয়। এটি ৩ সংস্করণের @layer utilities ব্লককে প্রতিস্থাপন করে এবং স্বয়ংক্রিয়ভাবে hover:, active: ও ডার্ক মোড সাপোর্ট প্রদান করে।',
    enExplanation: `### Explanation
In Tailwind CSS v3, defining a custom utility class that supported variants (like \`hover:my-style\`) required creating a JavaScript plugin or writing:
\`\`\`css
@layer utilities {
  .my-style { ... }
}
\`\`\`
In v4, you write custom utilities using the new \`@utility\` directive:
- **Syntax**: \`@utility utility-name { ... }\`
- **Automatic Variant Support**: By declaring \`@utility text-shadow-glow { text-shadow: 0 0 5px red; }\`, Tailwind v4 automatically registers and compiles hover/focus/active and responsive classes for it, meaning you can immediately write \`hover:text-shadow-glow\` or \`md:text-shadow-glow\` in your HTML templates without extra configurations!

### Real-World Example
If you want to build a custom aspect ratio or drop-shadow utility in your design system:
\`\`\`css
@utility aspect-cinema {
  aspect-ratio: 21 / 9;
}
\`\`\`
You can use it in HTML as \`<div class="aspect-cinema hover:aspect-auto"></div>\` immediately.

### Best Practice
Use \`@utility\` instead of writing standard plain CSS classes when you want the style to leverage Tailwind's variant engine (like responsive, dark mode, state indicators).

### Common Mistakes
Forgetting that the utility class name inside the \`@utility\` declaration should not contain the leading dot (\`.\`) character (e.g. write \`@utility text-glow\` not \`@utility .text-glow\`).

### Code Example
\`\`\`css
@import "tailwindcss";

/* Declare custom utility without leading dot */
@utility scroll-hidden {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

/* Now usable in HTML as: class="scroll-hidden hover:scroll-auto" */
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৩ সংস্করণে ভ্যারিয়েন্ট (যেমন \`hover:my-class\`) সাপোর্ট করবে এমন কাস্টম ইউটিলিটি বানাতে জাভাস্ক্রিপ্ট প্লাগইন লিখতে হতো অথবা নিচের কোড লিখতে হতো:
\`\`\`css
@layer utilities {
  .my-style { ... }
}
\`\`\`
৪ সংস্করণে নতুন \`@utility\` ডিরেক্টিভ দিয়ে এটি খুব সহজে করা যায়:
- **সিনট্যাক্স**: \`@utility utility-name { ... }\`
- **অটোমেটিক ভ্যারিয়েন্ট সাপোর্ট**: আপনি যখন \`@utility text-shadow-glow { text-shadow: 0 0 5px red; }\` লিখবেন, টেইলউইন্ড ৪ অটোমেটিক্যালি এর জন্য হোভার, ফোকাস, অ্যাক্টিভ ও রেসপনসিভ ভ্যারিয়েন্ট জেনারেট করবে। অর্থাৎ এইচটিএমএলে সরাসরি \`hover:text-shadow-glow\` বা \`md:text-shadow-glow\` ক্লাসগুলো কাজ করবে!

### বাস্তব-ভিত্তিক উদাহরণ
ডিজাইনে সিনেমাটিক অ্যাসপেক্ট রেশিও অ্যাড করতে সিএসএসে লিখুন:
\`\`\`css
@utility aspect-cinema {
  aspect-ratio: 21 / 9;
}
\`\`\`
এখন এইচটিএমএলে অনায়াসে \`<div class="aspect-cinema hover:aspect-auto"></div>\` লিখতে পারবেন।

### উত্তম অনুশীলন
যখনই চান আপনার কাস্টম সিএসএস ক্লাসটি টেইলউইন্ডের ভ্যারিয়েন্ট ইঞ্জিনের (যেমন: রেসপনসিভ, ডার্ক মোড) সুবিধা পাক, তখন সাধারণ ক্লাসের বদলে \`@utility\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`@utility\` ডিক্লেয়ারেশনের ভেতরে ক্লাসের নামের শুরুতে ডট (\`.\`) চিহ্ন দেওয়া (যেমন: \`@utility .text-glow\` লেখা ভুল; সঠিক হলো \`@utility text-glow\`)।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* ডট ছাড়া কাস্টম ইউটিলিটি ঘোষণা */
@utility scroll-hidden {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

/* এইচটিএমএলে সরাসরি ব্যবহারযোগ্য: class="scroll-hidden hover:scroll-auto" */
\`\`\``
  },
  {
    id: 'css-107',
    title: 'How does automatic content detection work in Tailwind v4?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Oxide', 'Compilation', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 automatically scans your project files for utility classes without requiring a content array in a configuration file. It uses Git to identify active files and falls back to scanning the project directory structure.',
    bnAnswer: 'Tailwind v4 কনফিগারেশন ফাইলে কোনো content অ্যারে ছাড়াই প্রজেক্টের সব ফাইল স্ক্যান করে ইউটিলিটি ক্লাস খুঁজে বের করে। এটি কোন কোন ফাইল সক্রিয় তা সনাক্ত করতে গিট (Git) ব্যবহার করে অথবা প্রজেক্ট ডিরেক্টরি স্ট্রাকচার স্ক্যান করে।',
    enExplanation: `### Explanation
In Tailwind CSS v3, configuring the compiler required declaring a list of file paths in the \`content\` array:
\`\`\`javascript
content: ["./src/**/*.{html,js,ts,jsx,tsx}"]
\`\`\`
If you forgot a path, the styles for that file failed to compile.
In **Tailwind v4**:
- The \`content\` array is completely removed.
- **Oxide compiler** runs automatic content detection. It inspects your project's Git index to find all tracked text files and scans them for classes.
- If it is not a Git project, it scans common web development directories (like \`src\`, \`public\`, \`pages\`, \`components\`) automatically, filtering out ignored folders like \`node_modules\` or \`.git\`.

### Real-World Example
When adding a new directory \`src/features/dashboard/components/\` with custom React buttons, in v4 you do not need to update any config paths. The compiler detects and compiles classes inside the new files instantly.

### Best Practice
Keep your project folder structure standard. If you are developing outside Git and need to scan non-standard folder paths, use the \`@source\` directive inside your CSS file to register them explicitly.

### Common Mistakes
Expecting Tailwind to scan giant folders that are excluded in your \`.gitignore\` file. If a folder is git-ignored, the compiler will not scan it automatically unless specified using \`@source\`.

### Code Example
\`\`\`css
@import "tailwindcss";

/* Explicitly tell Tailwind v4 to scan a non-standard folder structure */
@source "../../external-packages/ui/**/*.html";
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৩ সংস্করণে ইউটিলিটি ক্লাস বের করতে কনফিগারেশন ফাইলে ফাইলের পাথের একটি লিস্ট লিখে দিতে হতো:
\`\`\`javascript
content: ["./src/**/*.{html,js,ts,jsx,tsx}"]
\`\`\`
পাথ লিখতে ভুল হলে সিএসএস কোড কম্পাইল হতো না।
**টেইলউইন্ড ৪ সংস্করণে**:
- \`content\` অ্যারেটির আর কোনো প্রয়োজন নেই।
- **Oxide কম্পাইলার** স্বয়ংক্রিয়ভাবে প্রজেক্ট স্ক্যান করে। এটি প্রজেক্টের গিট (Git) ইনডেক্স চেক করে সব সক্রিয় ফাইলে ব্যবহৃত টেইলউইন্ড ক্লাসগুলো সনাক্ত করে।
- গিট প্রজেক্ট না হলে এটি ডিফল্টরূপে কমন ফোল্ডার (যেমন: \`src\`, \`public\`, \`components\`) স্ক্যান করে এবং \`node_modules\` বা \`.git\` এর মতো অপ্রয়োজনীয় ফোল্ডার বাদ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
প্রজেক্টে সম্পূর্ণ নতুন একটি ডিরেক্টরি \`src/features/dashboard/\` তৈরি করে নতুন রিঅ্যাক্ট কম্পোনেন্ট যুক্ত করলেন। ৪ সংস্করণে কোনো পাথ আপডেট করার ঝামেলা ছাড়াই সেভ করা মাত্র কাস্টম ক্লাসগুলো কাজ করা শুরু করবে।

### উত্তম অনুশীলন
প্রজেক্টের ফোল্ডার স্ট্রাকচার স্ট্যান্ডার্ড রাখুন। যদি প্রজেক্টের বাইরে থেকে কোনো ডাইনামিক সোর্স স্ক্যান করাতে হয়, তবে সিএসএস ফাইলে \`@source\` ডিরেক্টিভ ব্যবহার করে পাথটি রেজিস্টার করে দিন।

### সাধারণ ভুলসমূহ
\`.gitignore\` ফাইলে ব্লক করা কোনো ফোল্ডারের ফাইল টেইলউইন্ড স্বয়ংক্রিয়ভাবে স্ক্যান করবে বলে ধরে নেওয়া। গিট-ইগনোরড কোনো ফাইল স্ক্যান করাতে হলে \`@source\` ডিরেক্টিভ ব্যবহার করতে হবে।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* টেইলউইন্ড ৪-কে প্রজেক্টের বাইরের নির্দিষ্ট ফোল্ডার স্ক্যান করতে নির্দেশ দেওয়া */
@source "../../external-packages/ui/**/*.html";
\`\`\``
  },
  {
    id: 'css-108',
    title: 'Explain dynamic utility and spacing extensions in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Sizing', 'Shorthands', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 features a dynamic spacing scale that calculates values on-the-fly. Declaring custom spacing in @theme extends the scale, and arbitrary value syntax supports dynamic fractions or calculations directly in HTML (e.g. w-[calc(100%-var(--w))]).',
    bnAnswer: 'Tailwind v4-এ একটি ডাইনামিক স্পেসিং স্কেল রয়েছে যা রানটাইমে মান হিসাব করে। @theme ব্লকে স্পেসিং ঘোষণা করলে তা স্কেলকে প্রসারিত করে এবং আরবিট্রারি বা কাস্টম সিনট্যাক্স এইচটিএমএলেই ডাইনামিক হিসাব সমর্থন করে (যেমন w-[calc(100%-var(--w))])।',
    enExplanation: `### Explanation
In v4, spacing values are calculated dynamically using a mathematical scale engine:
- **Dynamic spacing scale**: Instead of strict config arrays, Tailwind v4 uses a unified fractional multiplier engine.
- **Scale Extensions**: You can define custom spacing variables inside the \`@theme\` block using the \`--spacing-*\` prefix:
  \`\`\`css
  @theme {
    --spacing-18: 4.5rem; /* Extends scale to include 18 */
  }
  \`\`\`
  This instantly generates sizing utilities like \`w-18\`, \`h-18\`, \`p-18\`, \`m-18\`, etc.
- **Arbitrary Calculations**: Supports complex dynamic values directly in class tokens without spaces inside brackets: \`w-[calc(100%-2rem)]\` or \`p-[clamp(1rem,5vw,2rem)]\`.

### Real-World Example
If you need to space elements with a custom width that changes depending on header height variables, you can write \`h-[calc(100vh-var(--header-height))]\` directly in the HTML class attribute.

### Best Practice
Declare consistent custom spacing units using \`--spacing-*\` inside the \`@theme\` block rather than cluttering HTML templates with arbitrary brackets like \`w-[180px]\`.

### Common Mistakes
Writing spaces inside arbitrary value brackets (e.g., \`w-[calc(100% - 20px)]\`). In Tailwind CSS class naming, spaces act as class separators, breaking the utility parser. Write it without spaces: \`w-[calc(100%-20px)]\`.

### Code Example
\`\`\`css
/* index.css */
@theme {
  /* Extends default spacing scale */
  --spacing-128: 32rem; 
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে স্পেসিং বা মাপে ডাইনামিক গাণিতিক স্কেল ব্যবহার করা হয়েছে:
- **ডাইনামিক স্পেসিং স্কেল**: ফিক্সড সাইজ ফোল্ডারের বদলে একটি ফ্র্যাকশনাল মাল্টিপ্লায়ার ইঞ্জিন কাজ করে।
- **স্কেল এক্সটেনশন**: থিম ব্লকের ভেতর \`--spacing-*\` দিয়ে কাস্টম স্পেসিং এড করা যায়:
  \`\`\`css
  @theme {
    --spacing-18: 4.5rem; /* ১৮ নম্বর স্পেসিং স্কেল যোগ করবে */
  }
  \`\`\`
  এর ফলে সাথে সাথে \`w-18\`, \`h-18\`, \`p-18\` ইউটিলিটি ক্লাসগুলো কার্যকর হবে।
- **কাস্টম ক্যালকুলেশন**: এইচটিএমএলের ক্লাস ডিক্লেয়ারেশনেই জ্যামিতিক হিসাব করা যায়: \`w-[calc(100%-2rem)]\`।

### বাস্তব-ভিত্তিক উদাহরণ
হেডারের উচ্চতা বাদ দিয়ে বডি কন্টেইনারের হাইট নির্ধারণ করতে চান। জাভাস্ক্রিপ্ট ছাড়াই সরাসরি ইনলাইনে লিখতে পারেন: \`h-[calc(100vh-var(--header-height))]\`।

### উত্তম অনুশীলন
এইচটিএমএলের ভেতর ব্র্যাকেট দিয়ে হিজিবিজি কোড (\`w-[180px]\`) না লিখে সিএসএসের থিম ব্লকে \`--spacing-*\` ভেরিয়েবল দিয়ে কাস্টম সাইজ সেট করুন।

### সাধারণ ভুলসমূহ
ইনলাইন ব্র্যাকেটের ভেতরের গাণিতিক চিহ্নের দুই পাশে স্পেস বা খালি জায়গা দেওয়া (যেমন: \`w-[calc(100% - 20px)]\`)। টেইলউইন্ডে স্পেস দিলে ক্লাস আলাদা হয়ে যায়, তাই কোড কাজ করবে না। স্পেস ছাড়া লিখুন: \`w-[calc(100%-20px)]\`।

### Code Example
\`\`\`css
/* index.css */
@theme {
  /* স্পেসিং স্কেলে নতুন ১২৮ জোন যোগ করবে */
  --spacing-128: 32rem; 
}
\`\`\``
  },
  {
    id: 'css-109',
    title: 'Explain container query utility support in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Container Queries', 'Responsive', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 features native out-of-the-box container query support. By styling a parent with @container (or @container-normal), you can apply responsive utility variants to children relative to parent width (e.g. @min-[400px]:grid-cols-2).',
    bnAnswer: 'Tailwind v4-এ নেটিভ কন্টেইনার কোয়েরি ইউটিলিটি সাপোর্ট রয়েছে। প্যারেন্টে @container লিখে চাইল্ডগুলোতে প্যারেন্টের উইডথ অনুযায়ী ডাইনামিক রেসপনসিভ ক্লাস লিখা যায় (যেমন @min-[400px]:grid-cols-2)।',
    enExplanation: `### Explanation
Tailwind v4 builds container query support directly into the core framework without requiring external plugins:
- **Container Registration**: Apply \`@container\` class to the parent element (applies \`container-type: inline-size\`).
- **Container Variants**: Style children using container queries:
  - Default query breakpoints: \`@md:grid-cols-2\` (triggers when parent container is wider than the medium breakpoint).
  - Custom size query variants: \`@min-[400px]:flex-row\` (triggers when parent container is wider than 400px).
  - Max-width containers variants: \`@max-[500px]:hidden\` (hides element when parent container is narrower than 500px).

### Real-World Example
In a multi-column portal layout where you show user info widgets, wrapping the parent widget in \`@container\` and using \`@md:flex-row flex-col\` on the inner card ensures the card is vertical on narrow side columns, but changes to horizontal layout inside the main central column.

### Best Practice
Use container queries instead of media queries for reusable dashboard widget components. This guarantees they render correctly inside any grid layouts.

### Common Mistakes
Applying container variants (like \`@md:text-lg\`) to a child but forgetting to add the \`@container\` class to any parent element in the DOM tree, causing the container check to fail.

### Code Example
\`\`\`html
<!-- Parent defines container context -->
<div class="@container w-full border p-4">
  <!-- Child reacts to parent width, NOT screen width -->
  <div class="flex flex-col @min-[500px]:flex-row gap-4">
    <div class="w-full @min-[500px]:w-1/3">Image</div>
    <div class="w-full @min-[500px]:w-2/3">Content</div>
  </div>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে কন্টেইনার কোয়েরি সাপোর্ট বিল্ট-ইন করা হয়েছে, যার জন্য বাড়তি কোনো প্লাগইনের প্রয়োজন হয় না:
- **কন্টেইনার তৈরি**: প্যারেন্ট এলিমেন্টে \`@container\` ক্লাসটি দিন (যা \`container-type: inline-size\` সেট করে)।
- **কন্টেইনার ভ্যারিয়েন্ট**: চাইল্ড এলিমেন্টগুলোকে প্যারেন্টের উইডথ অনুযায়ী স্টাইল করুন:
  - ডিফল্ট ব্রেকপয়েন্ট: \`@md:grid-cols-2\` (প্যারেন্ট কন্টেইনারের সাইজ মিডিয়ামের চেয়ে চওড়া হলে ২ কলাম হবে)।
  - কাস্টম সাইজ ভ্যারিয়েন্ট: \`@min-[400px]:flex-row\` (প্যারেন্ট ৪০০ পিক্সেলের বেশি হলে পাশাপাশি বসবে)।
  - সর্বোচ্চ সাইজ লিমিট: \`@max-[500px]:hidden\` (প্যারেন্ট ৫০০ পিক্সেলের নিচে নামলে হাইড হবে)।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডের উইজেটে কোনো কার্ড শো করছেন। প্যারেন্টে \`@container\` এবং চাইল্ডে \`@md:flex-row flex-col\` দিলে কার্ডটি সাইডবারের সরু স্থানে ওপরে-নিচে এবং মাঝের চওড়া কন্টেন্ট জোনে পাশাপাশি অ্যালাইন হবে।

### উত্তম অনুশীলন
রিইউজেবল ড্যাশবোর্ড উইজেট ডিজাইনের ক্ষেত্রে মিডিয়া কোয়েরির বদলে কন্টেইনার কোয়েরি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
চাইল্ডে \`@md:text-lg\` এর মতো কন্টেইনার ভ্যারিয়েন্ট ক্লাস ব্যবহার করা কিন্তু প্যারেন্টের কোথাও \`@container\` ডিক্লেয়ার করতে ভুলে যাওয়া।

### কোড উদাহরণ
\`\`\`html
<!-- প্যারেন্ট এলিমেন্টে কন্টেইনার ডিফাইন করা হলো -->
<div class="@container w-full border p-4">
  <!-- চাইল্ড স্ক্রিনের উইডথ নয়, বরং প্যারেন্টের উইডথ অনুযায়ী কাজ করবে -->
  <div class="flex flex-col @min-[500px]:flex-row gap-4">
    <div class="w-full @min-[500px]:w-1/3">Image</div>
    <div class="w-full @min-[500px]:w-2/3">Content</div>
  </div>
</div>
\`\`\``
  },
  {
    id: 'css-110',
    title: 'How does CSS nesting work out of the box in Tailwind v4?',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Nesting', 'CSS', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 supports native CSS Nesting spec out of the box. Custom classes written inside your stylesheet can contain nested selectors and pseudo-classes using standard CSS nesting syntax, compiled natively by the Oxide engine.',
    bnAnswer: 'Tailwind v4 নেটিভ সিএসএস নেস্টিং সাপোর্ট প্রদান করে। আপনার স্টাইলশিটের কাস্টম ক্লাসগুলোর ভেতর স্ট্যান্ডার্ড সিএসএস নেস্টিং সিনট্যাক্স ব্যবহার করে চাইল্ড সিলেক্টর বা সিউডো-ক্লাসগুলো লেখা যায় এবং তা Oxide ইঞ্জিন দ্বারা কম্পাইল হয়।',
    enExplanation: `### Explanation
Tailwind v4 builds nesting support directly into the compiled CSS output process:
- You do not need to install \`postcss-nested\` or other plugins in your configurations.
- Inside your main CSS files, you can nest styles natively:
  \`\`\`css
  .custom-header {
    background-color: white;
    &:hover {
      background-color: #f3f4f6;
    }
    .custom-logo {
      height: 40px;
    }
  }
  \`\`\`
- The compiled engine parses this nested syntax natively, ensuring cross-browser compatibility.

### Real-World Example
If you are writing custom styling rules for a markdown rendered container (\`.prose\`) and want to override link colors and blockquote spacings inside it, you nest them directly inside the \`.prose\` curly braces, making the stylesheet clean and compact.

### Best Practice
Use nesting to keep component-specific styling overrides organized. Always use the ampersand (\`&\`) prefix to attach pseudo-classes or state selectors to the parent element.

### Common Mistakes
Using outdated preprocessor Sass nesting tricks (like compiling class names using parent suffixes, e.g. \`&-title\` inside \`.card\`). Native CSS nesting only supports nesting actual selectors, not concatenating class strings.

### Code Example
\`\`\`css
/* index.css */
@import "tailwindcss";

.pricing-card {
  border: 1px solid #e5e7eb;
  padding: 24px;
  
  &:hover {
    border-color: var(--color-indigo-500);
    
    .pricing-price {
      color: var(--color-indigo-600);
    }
  }
  
  .pricing-price {
    font-size: 2rem;
    font-weight: bold;
    transition: color 0.2s ease;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে পোস্ট-সিএসএস বা অন্য নেস্টিং প্লাগইনের সাহায্য ছাড়াই ডাইরেক্ট নেটিভ সিএসএস নেস্টিং করা যায়:
- প্রজেক্টের বিল্ড ফাইলে \`postcss-nested\` প্লাগইন কনফিগার করার প্রয়োজন নেই।
- স্টাইলশিটের ভেতর স্বাভাবিকভাবে নেস্টেড কোড লিখতে পারেন:
  \`\`\`css
  .custom-header {
    background-color: white;
    &:hover {
      background-color: #f3f4f6;
    }
    .custom-logo {
      height: 40px;
    }
  }
  \`\`\`
- টেইলউইন্ডের Oxide ইঞ্জিন ব্রাউজার ফ্রেন্ডলি করে এটিকে কম্পাইল করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে রিচ-টেক্সট প্যারাগ্রাফের (\`.prose\`) কাস্টম কালার ও ভেতরের ব্লকের মার্জিন ঠিক করতে prose ক্লাসের ব্র্যাকেটের ভেতরেই সরাসরি হেডিং বা লিংকের কোড নেস্ট করে লিখলে কোড অর্গানাইজেশন সুন্দর থাকে।

### উত্তম অনুশীলন
কম্পোনেন্ট রিলেটেড স্টাইলগুলো এক জায়গায় রাখতে নেস্টিং ব্যবহার করুন। প্যারেন্ট ক্লাসের সাথে হোভার বা ফোকাস যুক্ত করতে অ্যাম্পারস্যান্ড (\`&\`) চিহ্ন ব্যবহার করতে হবে।

### সাধারণ ভুলসমূহ
Sass এর মতো ক্লাসের নাম চেইন বা কনক্যাট করার চেষ্টা করা (যেমন: \`.card\` এর ভেতর \`&-title\` লিখে \`.card-title\` ক্লাস প্রত্যাশা করা)। নেটিভ নেস্টিংয়ে কেবল পূর্ণ সিলেক্টর নেস্ট করা যায়, স্ট্রিং কনক্যাট করা যায় না।

### কোড উদাহরণ
\`\`\`css
/* index.css */
@import "tailwindcss";

.pricing-card {
  border: 1px solid #e5e7eb;
  padding: 24px;
  
  &:hover {
    border-color: var(--color-indigo-500);
    
    .pricing-price {
      color: var(--color-indigo-600);
    }
  }
  
  .pricing-price {
    font-size: 2rem;
    font-weight: bold;
    transition: color 0.2s ease;
  }
}
\`\`\``
  },
  {
    id: 'css-111',
    title: 'Explain the new 3D transform utilities in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Transforms', '3D Layout', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 introduces native 3D transform utility classes out of the box, including perspective-*, rotate-x-*, rotate-y-*, rotate-z-*, translate-z-*, scale-z-*, and transform-3d.',
    bnAnswer: 'Tailwind v4-এ নেটিভ ত্রিমাত্রিক বা থ্রিডি (3D) ট্রান্সফর্ম ইউটিলিটি ক্লাস যুক্ত করা হয়েছে, যার মধ্যে perspective-*, rotate-x-*, rotate-y-*, rotate-z-*, translate-z-* এবং transform-3d অন্তর্ভুক্ত।',
    enExplanation: `### Explanation
In previous Tailwind versions, doing 3D rotates or Z-axis translate offsets required writing arbitrary values (e.g. \`[transform:rotateY(45deg)]\`) or custom classes.
Tailwind v4 introduces comprehensive 3D support:
- **\`transform-3d\`**: Activates 3D rendering context on the element.
- **\`perspective-[value]\`**: Sets 3D viewport depth perspective.
- **\`rotate-x-[angle]\` / \`rotate-y-[angle]\` / \`rotate-z-[angle]\`**: Rotates elements along specific 3D axes (e.g. \`rotate-x-45\`, \`rotate-y-180\`).
- **\`translate-z-[value]\`**: Shifts elements forward/backward in 3D depth space.

This enables advanced card flip effects, cube layouts, and isometric visual animations written entirely in class lists.

### Real-World Example
To create a card that flips around horizontally like a coin when hovered, you apply \`transform-3d\`, and toggle \`group-hover:rotate-y-180\` on the card container.

### Best Practice
Combine Z-axis translates with a perspective property on the parent container. Perspective is required to give depth and make the 3D rotating effects visible to the eye.

### Common Mistakes
Using Z-axis rotation or translation without applying a \`perspective\` or \`transform-3d\` property to the container, which renders the 3D animations flat.

### Code Example
\`\`\`html
<!-- Parent defines 3D perspective -->
<div class="perspective-1000 group w-64 h-64">
  <!-- Inner container flips on hover -->
  <div class="w-full h-full transform-3d transition-transform duration-500 group-hover:rotate-y-180">
    <!-- Front Face -->
    <div class="absolute inset-0 bg-indigo-500 backface-hidden flex items-center justify-center text-white">
      Hover to Flip
    </div>
    <!-- Back Face -->
    <div class="absolute inset-0 bg-cyan-500 rotate-y-180 backface-hidden flex items-center justify-center text-white">
      Back Side
    </div>
  </div>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ডের আগের সংস্করণগুলোতে থ্রিডি রোটেশন বা জেড-অক্ষে স্থানান্তরের জন্য আরবিট্রারি কাস্টম সিএসএস লিখতে হতো।
টেইলউইন্ড ৪ সংস্করণে এটি সম্পূর্ণ বিল্ট-ইন করা হয়েছে:
- **\`transform-3d\`**: এলিমেন্টে থ্রিডি রেন্ডারিং মোড সক্রিয় করে।
- **\`perspective-*\`**: ত্রিমাত্রিক বা থ্রিডি দৃষ্টিভঙ্গির ডেপথ (depth) বা গভীরতা নির্দিষ্ট করে।
- **\`rotate-x-*\` / \`rotate-y-*\`**: অনুভূমিক বা উল্লম্ব থ্রিডি অক্ষে এলিমেন্ট ঘোরাতে ব্যবহৃত হয় (যেমন: \`rotate-y-180\`)।
- **\`translate-z-*\`**: এলিমেন্টকে ৩ডি ডেপথ স্পেস বরাবর সামনে বা পেছনে সরায়।

এর ফলে চমৎকার কার্ড ফ্লিপ (Card flip), কিউব লেআউট ও আইসোমেট্রিক জ্যামিতিক অ্যানিমেশন কেবল ইউটিলিটি ক্লাস দিয়েই তৈরি করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বিজ্ঞাপন কার্ডের ওপরে মাউস নিয়ে গেলে সেটি যদি কয়েনের মতো অনুভূমিকভাবে ১৮০ ডিগ্রি ঘুরে পেছনের সাইড দেখাতে চায়, তবে কন্টেইনারে \`transform-3d\` এবং হোভার ভ্যারিয়েন্টে \`group-hover:rotate-y-180\` ব্যবহার করতে হবে।

### উত্তম অনুশীলন
৩ডি রোটেশনের সঠিক ভিজ্যুয়াল এফেক্ট বা গভীরতা পেতে প্যারেন্ট কন্টেইনারে অবশ্যই \`perspective-*\` ক্লাস ব্যবহার করুন, অন্যথায় ৩ডি ইফেক্টটি ফ্ল্যাট বা দ্বিমাত্রিক দেখাবে।

### সাধারণ ভুলসমূহ
\`transform-3d\` বা \`perspective\` ডিক্লেয়ার না করেই সরাসরি Z-axis রোটেশন অ্যাপ্লাই করা এবং আউটপুটে কোনো ত্রিমাত্রিক ভিউ দেখতে না পাওয়া।

### কোড উদাহরণ
\`\`\`html
<!-- প্যারেন্ট ৩ডি পারসপেক্টিভ ডিফাইন করে -->
<div class="perspective-1000 group w-64 h-64">
  <!-- হোভার করলে পুরো কন্টেইনার উল্টে যাবে -->
  <div class="w-full h-full transform-3d transition-transform duration-500 group-hover:rotate-y-180">
    <!-- সামনের পিঠ -->
    <div class="absolute inset-0 bg-indigo-500 backface-hidden flex items-center justify-center text-white">
      Hover to Flip
    </div>
    <!-- পেছনের পিঠ -->
    <div class="absolute inset-0 bg-cyan-500 rotate-y-180 backface-hidden flex items-center justify-center text-white">
      Back Side
    </div>
  </div>
</div>
\`\`\``
  },
  {
    id: 'css-112',
    title: 'Explain the new gradient utility enhancements in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Gradients', 'Visuals', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 introduces modern gradient enhancements including arbitrary angle values (bg-gradient-to-[135deg]), color-mix() integration, and improved color interpolation settings.',
    bnAnswer: 'Tailwind v4-এ গ্রেডিয়েন্টের আধুনিক অপ্টিমাইজেশন যুক্ত করা হয়েছে, যার মধ্যে কাস্টম কোণ জেনারেশন (bg-gradient-to-[135deg]), color-mix() এর সমন্বয় এবং উন্নত কালার মিক্সিং ইন্টারপোলেশন সেটিিংস অন্তর্ভুক্ত।',
    enExplanation: `### Explanation
Tailwind v4 expands background gradient controls:
- **Arbitrary Angles**: Previously, you were restricted to 8 directions (like \`bg-gradient-to-r\`). In v4, you can specify exact rotation angles inside arbitrary brackets: \`bg-gradient-[135deg]\` or \`bg-gradient-[to_bottom_right]\`.
- **Dynamic Color Stops**: Better integration with wide-gamut colors (like OKLCH) and \`color-mix()\`.
- **Interpolation Color Space**: Tailwind v4 uses standard browser rendering colorspaces for smooth color transitions, eliminating gray/muddy zones inside the gradient midpoints.

### Real-World Example
If you are designing a sleek UI card and need a diagonal gradient that flows at exactly 120 degrees, you apply \`bg-gradient-[120deg] from-indigo-500 via-purple-500 to-pink-500\`.

### Best Practice
Combine custom angles with translucent colors (like \`from-indigo-500/20\`) to create premium glowing container overlay effects.

### Common Mistakes
Forgetting that when writing angles inside arbitrary brackets, you should write the units (like \`deg\`) explicitly (e.g. \`bg-gradient-[120]\` is invalid; it must be \`bg-gradient-[120deg]\`).

### Code Example
\`\`\`html
<!-- Dynamic angle gradient with Tailwind v4 -->
<div class="bg-gradient-[120deg] from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-white">
  Diagonal Gradient Box
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট ব্যবহারে অতিরিক্ত ফ্ল্যাক্সিবিলিটি আনা হয়েছে:
- **কাস্টম কোণ বা এঙ্গেল**: পূর্বে কেবল ৮টি ডিরেকশন (যেমন: \`bg-gradient-to-r\`) ব্যবহার করা যেত। ৪ সংস্করণে ইনলাইনে কাস্টম এঙ্গেল দেওয়া যায়: \`bg-gradient-[135deg]\` বা \`bg-gradient-[to_bottom_right]\`।
- **ডাইনামিক কালার স্টপ**: ওএলইডি স্ক্রিনের ও ওকএলসিএইচ (OKLCH) কালার মিক্সিংয়ের সাথে এটি চমৎকার কাজ করে।
- **স্মুথ ইন্টারপোলেশন**: কালার ট্রানজিশনের সময় মাঝখানে কোনো বাজে গ্রে বা কালো আবছা অংশ তৈরি হওয়া বন্ধ করে এটি চমৎকার কালার মিক্সিং দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
কার্ডের ব্যাকগ্রাউন্ডে ১২০ ডিগ্রি কোণে একটি কোনাকুনি গ্রেডিয়েন্ট ইফেক্ট তৈরি করতে টেইলউইন্ড ৪-এ লিখবেন:
\`bg-gradient-[120deg] from-indigo-500 via-purple-500 to-pink-500\`।

### উত্তম অনুশীলন
গ্রেডিয়েন্ট আরও আকর্ষণীয় করতে স্বচ্ছ বা ট্রান্সপারেন্ট কালার ভ্যারিয়েন্ট (যেমন: \`from-indigo-500/20\`) ব্যবহার করুন যা ব্যাকগ্রাউন্ডের ডার্ক কালারের ওপর প্রিমিয়াম লাইটিং গ্লো তৈরি করে।

### সাধারণ ভুলসমূহ
আরবিট্রারি ব্র্যাকেটের ভেতর এঙ্গেল ডিক্লেয়ার করার সময় ডিগ্রির (\`deg\`) এককটি লিখতে ভুলে যাওয়া (যেমন: \`bg-gradient-[120]\` লেখা ভুল; সঠিক হলো \`bg-gradient-[120deg]\`)।

### কোড উদাহরণ
\`\`\`html
<!-- টেইলউইন্ড ৪ এর ডাইনামিক এঙ্গেল গ্রেডিয়েন্ট বক্স -->
<div class="bg-gradient-[120deg] from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-white">
  Diagonal Gradient Box
</div>
\`\`\``
  },
  {
    id: 'css-113',
    title: 'Explain the new variant configuration and functional variants in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Variants', 'Selectors', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 introduces functional pseudo-variants and arbitrary variant selectors. It allows writing custom variants directly using the @variant directive in your CSS, replacing the complex JS plugin API.',
    bnAnswer: 'Tailwind v4-এ ফাংশনাল সিউডো-ভ্যারিয়েন্ট এবং কাস্টম আরবিট্রারি ভ্যারিয়েন্ট সিলেক্টর যোগ করা হয়েছে। এটি জাভাস্ক্রিপ্ট প্লাগইন এপিআই বাদ দিয়ে সিএসএসের ভেতর সরাসরি @variant নির্দেশ দিয়ে কাস্টম ভ্যারিয়েন্ট তৈরির সুবিধা দেয়।',
    enExplanation: `### Explanation
Tailwind v4 simplifies variant declarations:
1. **Arbitrary Variants**: You can target specific custom DOM structures directly in HTML class attributes using arbitrary selectors inside brackets: \`[&_p]:text-gray-500\` (applies style to all paragraphs inside this block).
2. **The \`@variant\` Directive**: In your main CSS file, you can declare custom reusable variants:
   \`\`\`css
   @variant pointer-coarse (@media (pointer: coarse));
   \`\`\`
   You can then write \`pointer-coarse:p-4\` inside your HTML classes. This replaces the complex JS config plugin registering process.

### Real-World Example
If you are developing a dashboard and want a custom variant to style children only when the parent has a specific state attribute \`data-state="active"\`, you declare:
\`\`\`css
@variant active (&[data-state="active"]);
\`\`\`
You can use it in HTML as \`active:bg-indigo-500\` on the child element.

### Best Practice
Use the CSS \`@variant\` directive to build semantic layout selectors rather than writing long arbitrary bracket strings like \`[&[data-active=true]_span]:color-red\` inside HTML templates.

### Common Mistakes
Forgetting that when declaring custom variants inside your CSS file, the variant definition must end with a semicolon, and target selectors must contain the parent ampersand (\`&\`) symbol.

### Code Example
\`\`\`css
/* index.css */
@import "tailwindcss";

/* Custom variant for high-contrast accessibility mode */
@variant high-contrast (@media (forced-colors: active));

/* Custom variant for parent attributes active state */
@variant is-active (&[data-active="true"]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে কাস্টম ভ্যারিয়েন্ট ডিক্লেয়ারেশন সহজ ও ডাইনামিক করা হয়েছে:
১. **আরবিট্রারি ভ্যারিয়েন্ট**: এইচটিএমএল ক্লাসের ভেতরেই কাস্টম সিলেক্টর টার্গেট করা যায়: \`[&_p]:text-gray-500\` (এই ব্লকের ভেতরের সব p ট্যাগকে গ্রে কালার করবে)।
২. **\`@variant\` নির্দেশিকা**: সিএসএস ফাইলে সরাসরি শর্টহ্যান্ড ভ্যারিয়েন্ট রেজিস্টার করা যায়:
   \`\`\`css
   @variant pointer-coarse (@media (pointer: coarse));
   \`\`\`
   রেজিস্টার করার পর এইচটিএমএলে সরাসরি \`pointer-coarse:p-4\` ক্লাস ব্যবহার করা যাবে। এর জন্য জাভাস্ক্রিপ্ট কোড লেখার আর প্রয়োজন নেই।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাইডবার ড্রয়ার বানিয়েছেন। প্যারেন্টে যখন \`data-state="active"\` অ্যাট্রিবিউট থাকবে, কেবল তখনই চাইল্ড টেক্সট সাদা হবে। সিএসএসে লিখুন:
\`\`\`css
@variant active (&[data-state="active"]);
\`\`\`
এখন চাইল্ডে অনায়াসে \`active:text-white\` লিখতে পারবেন।

### উত্তম অনুশীলন
কোড ক্লিন রাখতে এইচটিএমএলের ভেতর দীর্ঘ আরবিট্রারি ব্র্যাকেট সিলেক্টর লেখার চেয়ে সিএসএস ফাইলে \`@variant\` নির্দেশনা দিয়ে অর্থপূর্ণ ও রিইউজেবল সিলেক্টর তৈরি করুন।

### সাধারণ ভুলসমূহ
কাস্টম ভ্যারিয়েন্ট ডিক্লেয়ার করার সময় শেষে সেমিকোলন (\`;\`) দিতে ভুলে যাওয়া অথবা সিলেক্টরের রেফারেন্স হিসেবে অ্যাম্পারস্যান্ড (\`&\`) চিহ্ন ব্যবহার না করা।

### কোড উদাহরণ
\`\`\`css
/* index.css */
@import "tailwindcss";

/* হাই-কনট্রাস্ট অ্যাক্সেসিবিলিটি থিম ডিটেক্ট করার কাস্টম ভ্যারিয়েন্ট */
@variant high-contrast (@media (forced-colors: active));

/* প্যারেন্টের ডাটা-অ্যাক্টিভ সক্রিয় থাকলে ট্রিগার হবে */
@variant is-active (&[data-active="true"]);
\`\`\``
  },
  {
    id: 'css-114',
    title: 'How does dark mode configuration work in Tailwind v4 compared to v3?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Dark Mode', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, dark mode configuration is defined within the CSS stylesheet using the utility-first variant. By default, it queries media (prefers-color-scheme: dark), but can be configured to use a selector or class name strategy by declaring variant settings.',
    bnAnswer: 'Tailwind v4-এ ডার্ক মোড কনফিগারেশন সিএসএস স্টাইলশিটের ভেতরেই ডিফাইন করা হয়। ডিফল্টভাবে এটি মিডিয়া কুয়েরি (prefers-color-scheme: dark) অনুসরণ করে, তবে সিএসএস কনফিগারের মাধ্যমে ক্লাস নেম বা সিলেক্টর স্ট্র্যাটেজি সেট করা যায়।',
    enExplanation: `### Explanation
Tailwind v4 moves dark mode configuration out of JavaScript and into CSS:
1. **Default Strategy (Media)**: Out of the box, \`dark:bg-black\` matches the browser's system preference (\`@media (prefers-color-scheme: dark)\`).
2. **Selector Strategy (Class/Attribute)**: To switch dark mode manually via a \`.dark\` class on \`<html>\`, you customize the variant in your CSS:
   \`\`\`css
   @variant dark (&:where(.dark, .dark *));
   \`\`\`
This makes theme switching completely declarative and customisable inside standard CSS variables.

### Real-World Example
To support system toggle along with a user override class (e.g. \`<html class="dark">\`), you write the custom variant mapping in your stylesheet.

### Best Practice
Stick to system media preference for accessibility. If implementing a manual toggle, use the CSS class name strategy to toggle a class on the root element.

### Common Mistakes
Writing \`darkMode: 'class'\` in a \`tailwind.config.js\` expecting it to work in Tailwind v4. The setting has to be written as a custom CSS variant instead.

### Code Example
\`\`\`css
@import "tailwindcss";

/* Configure Tailwind v4 to trigger dark mode when parent element has class="dark" */
@variant dark (.dark &);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ ডার্ক মোড সেটিংসকে জাভাস্ক্রিপ্ট থেকে সরিয়ে সিএসএস ফাইলে নিয়ে এসেছে:
১. **মিডিয়া স্ট্র্যাটেজি (ডিফল্ট)**: সরাসরি \`dark:\` ভ্যারিয়েন্ট দিলে তা সিস্টেমের কালার স্কিম (\`prefers-color-scheme: dark\`) ডিটেক্ট করে।
২. **সিলেক্টর স্ট্র্যাটেজি (ক্লাস)**: ম্যানুয়ালি বাটনে ক্লিক করে ডার্ক মোড টগল করার জন্য এইচটিএমএলে \`.dark\` ক্লাস দিতে চাইলে সিএসএসে ভ্যারিয়েন্ট লিখতে হয়:
   \`\`\`css
   @variant dark (.dark &);
   \`\`\`
এর ফলে থিম সুইচিং প্রক্রিয়াটি চমৎকারভাবে নেটিভ সিএসএস ফাইলেই কন্ট্রোল করা সম্ভব হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার যখন থিম টগল বাটনে ক্লিক করে \`<html class="dark">\` ক্লাস সেট করে, তখন প্রজেক্টের সব \`dark:\` ক্লাস রান করার জন্য সিএসএসে \`@variant dark (.dark &);\` যোগ করতে হয়।

### উত্তম অনুশীলন
অ্যাক্সেসিবিলিটির জন্য ব্রাউজারের সিস্টেম মোড সাপোর্ট করুন। টগল সিস্টেম থাকলে রুটে ক্লাস যোগ করার প্রথাটি অনুসরণ করুন।

### সাধারণ ভুলসমূহ
টেইলউইন্ড ৪ প্রজেক্টে \`tailwind.config.js\` ফাইলে \`darkMode: 'class'\` লিখে রান করার চেষ্টা করা, যা এখানে কোনো প্রভাব ফেলবে না।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* প্যারেন্টে class="dark" থাকলে ডার্ক মোড সক্রিয় করার কনফিগারেশন */
@variant dark (.dark &);
\`\`\``
  },
  {
    id: 'css-115',
    title: 'Explain how wide-gamut colors (like OKLCH) are handled in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Colors', 'OKLCH', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 natively leverages OKLCH color space for its default colors. OKLCH color formulas provide consistent lightness perception and support wider wide-gamut display spectra compared to traditional sRGB / HEX colors.',
    bnAnswer: 'Tailwind v4 তার ডিফল্ট রঙের জন্য নেটিভভাবে OKLCH কালার স্পেস ব্যবহার করে। OKLCH কালার ফর্মুলা মানুষের চোখে রঙের উজ্জ্বলতা সমানভাবে প্রদর্শন করে এবং সাধারণ sRGB / HEX রঙের তুলনায় আরও জীবন্ত কালার স্পেকট্রাম সাপোর্ট করে।',
    enExplanation: `### Explanation
Wide-gamut screens support colors beyond sRGB. Tailwind v4 defaults its internal theme to OKLCH:
- **OKLCH structure**: \`oklch(L C H)\` where **L** is Lightness (perceived bright), **C** is Chroma (saturation), and **H** is Hue (angle of color).
- **Perceptual Uniformity**: In HEX, yellow looks brighter than blue at the same color values. OKLCH fixes this so colors with the same Lightness value appear equally bright.
- **Opacity Handling**: Dynamic color modifiers (like \`bg-blue-500/40\`) compile cleanly into CSS \`color-mix(in oklch, ...)\` or direct oklch variables.

### Real-World Example
Using standard HEX, creating a smooth transition from deep purple to neon blue can look muddy in the middle. OKLCH gradients transition smoothly through high-chroma spaces, creating glowing colors.

### Best Practice
Utilize OKLCH for custom colors inside \`@theme\` to produce consistent palettes across different screens.

### Common Mistakes
Forgetting that older browsers might not fully support OKLCH. Tailwind v4 automatically builds in fallbacks or handles compiled fallbacks depending on your post-processing configurations.

### Code Example
\`\`\`css
@theme {
  /* Define custom high-chroma colors in OKLCH space */
  --color-neon-pink: oklch(0.65 0.28 340);
  --color-electric-blue: oklch(0.6 0.25 250);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আজকের ডিসপ্লেগুলো অনেক বেশি স্পেকট্রামের রঙ সাপোর্ট করে যা সাধারণ sRGB বা হেক্স কোড দিয়ে দেখানো যায় না। টেইলউইন্ড ৪ তার ডিফল্ট থিম কালারসমূহ OKLCH কালার স্পেসে লিখেছে:
- **OKLCH আর্কিটেকচার**: \`oklch(L C H)\` যেখানে **L** হলো লাইটনেস (উজ্জ্বলতা), **C** হলো ক্রোমা (স্যাচুরেশন) এবং **H** হলো হিউ (কালার অ্যাঙ্গেল)।
- **ইউনিফর্মিটি**: হেক্স কোডে একই স্যাচুরেশনে হলুদ বেশি এবং নীল কম উজ্জ্বল দেখায়। ওকএলসিএইচ এটি সমান রাখে।
- **স্বচ্ছতা**: রঙের অপাসিটি চেঞ্জ করতে \`bg-blue-500/40\` লিখলে তা ব্যাকগ্রাউন্ডে ব্রাউজারের \`color-mix()\` এপিআই দিয়ে অপ্টিমাইজড সিএসএসে রূপান্তরিত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ইন্টারফেসে চমৎকার একটি নিওন পিঙ্ক গ্লো তৈরি করতে সিএসএস ফাইলে OKLCH ব্যবহার করে সরাসরি ওকএলসিএইচ ভ্যালু ডিফাইন করে দিতে পারেন।

### উত্তম অনুশীলন
কাস্টম কালার ব্যবহারের ক্ষেত্রে ওকএলসিএইচ ব্যবহার করুন যাতে বিভিন্ন ডিভাইসে কালার গ্রেড এক রকম দেখায়।

### সাধারণ ভুলসমূহ
ওকএলসিএইচ ব্যাকওয়ার্ড কম্প্যাটিবিলিটি নিয়ে সংশয়ে থাকা। টেইলউইন্ড ৪ বান্ডলার কম্পাইল করার সময় স্বয়ংক্রিয়ভাবে ব্রাউজার প্রফাইল অনুযায়ী এটি হ্যান্ডেল করে।

### কোড উদাহরণ
\`\`\`css
@theme {
  /* OKLCH কালার স্পেস দিয়ে কাস্টম নিওন কালার ঘোষণা */
  --color-neon-pink: oklch(0.65 0.28 340);
  --color-electric-blue: oklch(0.6 0.25 250);
}
\`\`\``
  },
  {
    id: 'css-116',
    title: 'What is the @source directive in Tailwind v4 and when should it be used?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Directives', 'Compilation', 'Tailwind v4'],
    enAnswer: 'The @source directive in Tailwind v4 is used to explicitly include specific directories or files for compiler scanning. It is used when classes are used outside standard root files or inside node_modules structures.',
    bnAnswer: 'Tailwind v4-এর @source ডিরেক্টিভটি নির্দিষ্ট কোনো ফাইল বা ডিরেক্টরিকে কম্পাইলারের স্ক্যানিং লিস্টে যুক্ত করতে ব্যবহৃত হয়। যখন স্ট্যান্ডার্ড ডিরেক্টরির বাইরে কোনো ফাইল বা node_modules এর প্যাকেজ থেকে ক্লাস ব্যবহারের প্রয়োজন হয় তখন এটি ব্যবহৃত হয়।',
    enExplanation: `### Explanation
While Tailwind v4 automatically scans standard workspace directories (using git and typical structures), there are cases where classes exist in outside scopes:
1. **Third-Party Libraries**: Monorepos or components loaded from npm (\`node_modules/custom-lib\`) containing raw Tailwind classes.
2. **Hidden Files**: Static configurations or assets compiled outside the normal build chain.
Use the \`@source\` directive inside your CSS entrypoint to register these paths:
\`\`\`css
@source "../shared-ui/**/*.tsx";
\`\`\`

### Real-World Example
If your web app imports a shared UI component package containing class list strings like \`bg-amber-100 text-amber-800\`, you write \`@source "../../node_modules/shared-pkg/src/**/*.js";\` to ensure the compiler registers these classes.

### Best Practice
Only use \`@source\` for paths that Tailwind v4 cannot discover automatically. Avoid using wildcard patterns on huge directories to prevent compiling lag.

### Common Mistakes
Declaring files in \`@source\` and also configuring legacy PostCSS content matching, which runs redundant scans and slows build times.

### Code Example
\`\`\`css
@import "tailwindcss";

/* Scan templates in an external packages directory */
@source "../../packages/ui/components/**/*.{html,js}";
@source "../../node_modules/my-custom-components/dist/*.js";
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ নিজে থেকেই প্রজেক্ট স্ক্যান করলেও কিছু ক্ষেত্রে বাইরে থেকে কোড আসার কারণে ক্লাস জেনারেট হয় না:
১. **থার্ড-পার্টি লাইব্রেরি**: এনপিএমের (\`node_modules\`) কোনো মডিউলের ভেতরে টেইলউইন্ড ক্লাস লেখা থাকলে তা ডিফল্ট স্ক্যানে ধরা পড়ে না।
২. **প্রজেক্টের বাইরের ডিরেক্টরি**: অন্য কোনো ফোল্ডারে থাকা শেয়ার্ড রিঅ্যাক্ট ফাইল।
সিএসএস ফাইলের শুরুতে \`@source\` ডিরেক্টিভ দিয়ে এই এক্সটারনাল পাথগুলো কম্পাইলারকে চিনিয়ে দেওয়া যায়:
\`\`\`css
@source "../shared-ui/**/*.tsx";
\`\`\`

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার্ড উইজেট লাইব্রেরি থেকে কোনো উইজেট প্রজেক্টে আনলে, এর স্টাইল জেনারেট করতে \`@source "../../node_modules/shared-pkg/src/**/*.js";\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
কেবল গিট ইগনোর করা ফাইল বা প্রজেক্ট ডিরেক্টরির বাইরের ফাইল স্ক্যান করাতে \`@source\` ব্যবহার করুন। পুরো ড্রাইভ বা অতিরিক্ত বড় ফোল্ডার স্ক্যান করাবেন না।

### সাধারণ ভুলসমূহ
\`@source\` এ ফাইল ডিক্লেয়ার করার পর আবার ভুল করে পোস্ট-সিএসএস কনফিগ দিয়ে একই ফাইল ডাবল স্ক্যান করানো, যা বিল্ড স্পিড স্লো করে।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* এক্সটারনাল প্যাকেজ ফোল্ডার স্ক্যান করাতে টেইলউইন্ডকে পাথ দেওয়া */
@source "../../packages/ui/components/**/*.{html,js}";
@source "../../node_modules/my-custom-components/dist/*.js";
\`\`\``
  },
  {
    id: 'css-117',
    title: 'How can you override or reset default theme values in Tailwind v4 using initial?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Theme', 'Tailwind v4'],
    enAnswer: 'To override or reset default theme values in Tailwind v4, set the specific CSS variable to initial inside the @theme block. This clears the default value and prevents corresponding utilities from generating.',
    bnAnswer: 'Tailwind v4-এ ডিফল্ট থিম মানগুলো ওভাররাইড বা রিসেট করতে @theme ব্লকের ভেতর নির্দিষ্ট সিএসএস ভেরিয়েবলটির মান initial সেট করতে হয়। এটি আগের মানটি মুছে দেয় এবং সংশ্লিষ্ট ইউটিলিটি ক্লাস জেনারেট হওয়া বন্ধ করে।',
    enExplanation: `### Explanation
In older versions of Tailwind, overriding the default theme required replacing configuration objects.
In Tailwind v4, because configurations are written in CSS, you use standard CSS keywords inside the \`@theme\` directive:
- **The \`initial\` keyword**: Setting a theme variable to \`initial\` removes it from Tailwind's registry:
  \`\`\`css
  @theme {
    --color-red-500: initial;
  }
  \`\`\`
  This deletes \`--color-red-500\` and prevents classes like \`bg-red-500\` and \`text-red-500\` from compiling.
- **Clearing an entire category**: You can reset all default values by using a wildcard syntax combined with \`initial\`, allowing you to build a completely custom design system from scratch.

### Real-World Example
If your brand guidelines prohibit using any standard blue colors, you can set \`--color-blue-*: initial;\` inside the \`@theme\` block. Any mistake in code using \`bg-blue-600\` will output no styles, catching design guideline violations immediately.

### Best Practice
Use \`initial\` to clean up defaults you do not plan to use. This decreases final CSS bundle size and forces developer alignment with design standards.

### Common Mistakes
Writing \`none\` or \`null\` instead of \`initial\` to disable a property. In standard CSS specifications, \`initial\` is the correct keyword to reset variables.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Disable default red-500 and red-600 */
  --color-red-500: initial;
  --color-red-600: initial;
  
  /* Disable default small and medium border radius */
  --radius-sm: initial;
  --radius-md: initial;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওল্ড টেইলউইন্ডে ডিফল্ট থিম ও কালার মুছতে জাভাস্ক্রিপ্ট অবজেক্টে ফিল্টার বা রিপ্লেস করতে হতো।
টেইলউইন্ড ৪ সংস্করণে সরাসরি সিএসএস ভেরিয়েবল রিসেট করার স্ট্যান্ডার্ড নিয়ম ব্যবহার করা হয়:
- **\`initial\` কি-ওয়ার্ড**: থিম ব্লকের কোনো ভেরিয়েবলের মান \`initial\` সেট করলে টেইলউইন্ড তা নিজের মেমোরি থেকে মুছে দেয়:
  \`\`\`css
  @theme {
    --color-red-500: initial;
  }
  \`\`\`
  এর ফলে \`bg-red-500\` বা \`text-red-500\` ক্লাস ব্যবহার করলেও ব্রাউজারে কোনো স্টাইল শো করবে না।
- **একসাথে ক্যাটাগরি মোছা**: পুরো রেডিয়াস বা নির্দিষ্ট কালার প্যালেট খালি করতে এটি চমৎকার সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির লোগো বা ডিজাইনে যদি লাল রং নিষিদ্ধ থাকে, তবে প্রজেক্ট থেকে লাল রঙের সব ভ্যারিয়েন্ট মুছতে \`--color-red-*: initial;\` লিখে দিলে কেউ ভুল করে লাল রং ব্যবহার করতে পারবে না।

### উত্তম অনুশীলন
প্রজেক্টে কাস্টম থিম বিল্ড করার সময় অব্যবহৃত ডিফল্ট ভ্যালুগুলো \`initial\` দিয়ে রিসেট করুন। এটি ফাইনাল সিএসএস ফাইল ছোট করে।

### সাধারণ ভুলসমূহ
সিএসএস ভেরিয়েবল ডিঅ্যাক্টিভেট করতে \`none\` বা \`null\` লেখা। ভেরিয়েবল রিসেট করার জন্য সিএসএসে কেবল \`initial\` কি-ওয়ার্ডই স্ট্যান্ডার্ড।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

@theme {
  /* ডিফল্ট লাল রঙের ভ্যারিয়েন্ট ২ টি নিষ্ক্রিয় করা */
  --color-red-500: initial;
  --color-red-600: initial;
  
  /* ডিফল্ট বর্ডার রেডিয়াস রিসেট করা */
  --radius-sm: initial;
  --radius-md: initial;
}
\`\`\``
  },
  {
    id: 'css-118',
    title: 'Explain how custom keyframe animations are defined in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Animations', 'Keyframes', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, custom keyframe animations are defined natively inside the @theme block. You define both the keyframes structure (@keyframes animation-name) and the animation utility mapping variable (--animate-key: ...) in the same CSS scope.',
    bnAnswer: 'Tailwind v4-এ কাস্টম কিফ্রেম অ্যানিমেশন @theme ব্লকের ভেতর নেটিভভাবে ডিফাইন করা হয়। আপনি একই সিএসএস ফাইলে কিফ্রেম ডিক্লেয়ারেশন (@keyframes) এবং অ্যানিমেশন ইউটিলিটি ভেরিয়েবল ম্যাপ (--animate-key: ...) ডিফাইন করতে পারেন।',
    enExplanation: `### Explanation
Tailwind v4 simplifies custom animation registrations. Instead of splitting keyframe declarations and theme maps across configurations, everything is written in your CSS:
1. Define the utility mapping variable with the \`--animate-*\` prefix:
   \`\`\`css
   --animate-float: float 3s ease-in-out infinite;
   \`\`\`
2. Define the corresponding \`@keyframes\` rule inside the same \`@theme\` block:
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0); }
     50% { transform: translateY(-10px); }
   }
   \`\`\`
The compiler detects these two declarations and generates classes like \`animate-float\` instantly.

### Real-World Example
If you want to build a heartbeat card effect for a notification component, you declare \`--animate-heartbeat: heartbeat 1s infinite\` and write the \`@keyframes heartbeat\` settings in the stylesheet.

### Best Practice
Keep keyframe names and animation variables named identically inside the theme to ensure readability. Always declare keyframes inside the \`@theme\` block so Tailwind compiles them locally.

### Common Mistakes
Defining keyframes in standard global CSS outside the \`@theme\` block while mapping the animation variable inside \`@theme\`. This can lead to parsing errors or missing definitions.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Map animation utility */
  --animate-pulse-slow: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  /* Define corresponding keyframes inside theme */
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে কাস্টম অ্যানিমেশন রেজিস্টার করার জন্য আলাদা কনফিগ ফাইলের প্রয়োজন হয় না। সিএসএস ফাইলের ভেতর থিম ব্লকে এটি সম্পন্ন করা হয়:
১. প্রথমে \`--animate-*\` প্রিফিক্স দিয়ে ইউটিলিটি ভেরিয়েবল ম্যাপ করুন:
   \`\`\`css
   --animate-float: float 3s ease-in-out infinite;
   \`\`\`
২. এরপর একই ব্লকের ভেতর \`@keyframes\` রুলস ডিফাইন করুন:
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0); }
     50% { transform: translateY(-10px); }
   }
   \`\`\`
কম্পাইলার নিজে থেকেই অ্যানিমেশন ট্র্যাকিং কোড জেনারেট করে \`animate-float\` ক্লাসটি তৈরি করে দেবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নোটিফিকেশন বেল আইকনে মৃদু কম্পন বা ডাইনামিক পালস ইফেক্ট যোগ করতে থিম ব্লকের ভেতর সিএসএস অ্যানিমেশন এবং কিফ্রেম কোড লিখে এইচটিএমএলে সরাসরি \`animate-pulse-slow\` ব্যবহার করতে পারেন।

### উত্তম অনুশীলন
পড়তে সুবিধা হওয়ার জন্য কিফ্রেমের নাম ও অ্যানিমেশন ভেরিয়েবলের নাম একই রাখুন। ডাস্ট কম্পাইলারের পার্সিং সুবিধার জন্য কিফ্রেম কোডগুলো অবশ্যই \`@theme\` এর ভেতরেই লিখুন।

### সাধারণ ভুলসমূহ
কিফ্রেম ডিক্লেয়ারেশন থিম ব্লকের বাইরে সাধারণ সিএসএসের মতো লেখা এবং অ্যানিমেশন ভেরিয়েবল থিম ব্লকের ভেতর লেখা। এর ফলে কম্পাইলারে এরর বা ক্লাস জেনারেশন ফেইল হতে পারে।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

@theme {
  /* অ্যানিমেশন ভেরিয়েবল ম্যাপিং */
  --animate-pulse-slow: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  /* থিম ব্লকের ভেতর কিফ্রেম রুলস */
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
}
\`\`\``
  },
  {
    id: 'css-119',
    title: 'How do you configure custom screens/breakpoints in Tailwind v4 inside @theme?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Breakpoints', 'Responsive', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, custom breakpoints are defined by declaring --breakpoint-* variables inside the @theme block. Declaring --breakpoint-xxl: 1400px generates xxl: responsive classes dynamically.',
    bnAnswer: 'Tailwind v4-এ কাস্টম ব্রেকপয়েন্ট বা স্ক্রিন সাইজ @theme ব্লকের ভেতর --breakpoint-* ভেরিয়েবল ডিক্লেয়ার করে তৈরি করা হয়। --breakpoint-xxl: 1400px ঘোষণা করলে xxl: রেসপনসিভ ভ্যারিয়েন্ট ক্লাস তৈরি হয়।',
    enExplanation: `### Explanation
Tailwind v4 maps all responsive screen layouts to CSS variables inside the theme directive:
- **Adding Breakpoints**: To add a new screen tier, declare it with the \`--breakpoint-\` prefix:
  \`\`\`css
  @theme {
    --breakpoint-3xl: 1920px;
  }
  \`\`\`
  This creates \`3xl:grid-cols-6\` or \`3xl:block\` dynamically.
- **Modifying Breakpoints**: Redefining existing breakpoints (like \`--breakpoint-md: 768px;\`) updates all default media query rules instantly.
- **Breakpoint reset**: Setting a breakpoint variable to \`initial\` removes it from responsive options.

### Real-World Example
If your web platform is optimized for large wall-mounted dashboards, you can declare \`--breakpoint-ultra: 2560px;\` inside \`@theme\` to write custom layouts that trigger only on ultra-wide screens using \`ultra:flex-row\`.

### Best Practice
Define custom breakpoints in ascending order to prevent media query overlap. Keep screen names short and semantic (like \`xs\`, \`xxl\`, \`3xl\`).

### Common Mistakes
Forgetting the \`--breakpoint-\` prefix and writing \`--screen-xxl: 1400px;\` instead. Tailwind v4 checks for exact naming variables to build its media utility selectors.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Add custom super-wide breakpoint */
  --breakpoint-3xl: 1800px;
  
  /* Redefine small screen to custom width */
  --breakpoint-sm: 600px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে রেসপনসিভ স্ক্রিন সাইজগুলো সরাসরি সিএসএস ভেরিয়েবলের মাধ্যমে কনফিগার করা হয়:
- **ব্রেকপয়েন্ট যুক্ত করা**: নতুন স্ক্রিন যোগ করতে \`--breakpoint-\` প্রিফিক্স দিয়ে লিখুন:
  \`\`\`css
  @theme {
    --breakpoint-3xl: 1920px;
  }
  \`\`\`
  এটি পেজে \`3xl:grid-cols-6\` ক্লাস ব্যবহারের সুযোগ করে দেয়।
- **ব্রেকপয়েন্ট পরিবর্তন**: ডিফল্ট ব্রেকপয়েন্ট ওভাররাইড করতে চাইলে (যেমন: \`--breakpoint-md: 768px;\`) তা রানটাইমে সব মিডিয়া কোয়েরি সিগন্যাল আপডেট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
বড় মনিটর বা আল্ট্রা-ওয়াইড স্ক্রিনের জন্য ড্যাশবোর্ড বানাতে \`--breakpoint-ultra: 2560px;\` ডিফাইন করতে পারেন, যাতে ইনলাইনে \`ultra:flex-row\` ক্লাস দিয়ে ভিউ কন্ট্রোল করা যায়।

### উত্তম অনুশীলন
মিডিয়া কোয়েরি ওভারল্যাপ বা কোডের সংঘর্ষ এড়াতে ব্রেকপয়েন্টগুলোর সাইজ ছোট থেকে বড় ক্রমানুসারে সাজিয়ে লিখুন। ব্রেকপয়েন্টের নামগুলো অর্থপূর্ণ রাখুন।

### সাধারণ ভুলসমূহ
\`--breakpoint-\` কি-ওয়ার্ড ব্যবহার না করে শুধু \`--screen-xxl: 1400px;\` লেখা, যা টেইলউইন্ড জেনারেট করবে না।

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* নতুন ১৮০০ পিক্সেলের ৩এক্সএল ব্রেকপয়েন্ট যোগ করা হলো */
  --breakpoint-3xl: 1800px;
  
  /* ডিফল্ট এসএম স্ক্রিন সাইজ পরিবর্তন করে ৬০০ পিক্সেল করা হলো */
  --breakpoint-sm: 600px;
}
\`\`\``
  },
  {
    id: 'css-120',
    title: 'Explain the @apply directive updates and constraints in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Directives', 'Apply', 'Tailwind v4'],
    enAnswer: 'The @apply directive in Tailwind v4 remains supported for combining utility classes, but it has been highly optimized. In v4, @apply cannot be used to chain arbitrary nested rules or apply dynamic JS-dependent plugins, focusing instead on compiling static classes rapidly.',
    bnAnswer: 'Tailwind v4-এ @apply নির্দেশিকাটি ইউটিলিটি ক্লাসগুলোকে একত্রিত করার জন্য এখনও সমর্থিত, তবে একে অনেক অপ্টিমাইজ করা হয়েছে। ৪ সংস্করণে @apply ডাইনামিক বা জটিল নেস্টেড চেইন রুলস কম্পাইল করা সমর্থন করে না, বরং দ্রুত স্ট্যাটিক ক্লাস রেন্ডারিংয়ের দিকে ফোকাস করে।',
    enExplanation: `### Explanation
The \`@apply\` directive allows you to inline utility declarations inside custom classes:
\`\`\`css
.btn-primary {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
\`\`\`
**Tailwind v4 updates**:
- **Oxide compilation**: The Rust engine compiles \`@apply\` statically at build time, converting classes into direct CSS declarations.
- **Chaining Constraints**: You can no longer nest complex, unresolved utilities or apply JS-dependent classes that do not compile natively.
- **Variable Compatibility**: Standard classes containing custom properties mapped through \`@theme\` (like \`@apply bg-brand-primary\`) work out of the box.

### Real-World Example
If you are refactoring a project and have custom styling classes for a component library, using \`@apply px-4 py-2 bg-indigo-600 rounded-md\` makes the classes maintainable while ensuring the output remains lightweight.

### Best Practice
Avoid using \`@apply\` extensively. The core benefit of Tailwind CSS is its utility-first class model. Resort to \`@apply\` only for standard semantic elements (like typography templates or basic form controls).

### Common Mistakes
Attempting to apply complex dynamic variant states inside the rules (like writing \`@apply hover:bg-blue-600\` on an nested active state selector). It is cleaner to separate states using native nesting hooks: \`&:hover { @apply bg-blue-600; }\`.

### Code Example
\`\`\`css
/* Correct @apply structure in Tailwind v4 */
.btn-submit {
  @apply inline-flex items-center justify-center font-semibold rounded-lg transition-colors;
  
  &:hover {
    @apply bg-indigo-700 text-white;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`@apply\` ডিরেক্টিভটি কাস্টম সিএসএস ক্লাসের ভেতর সরাসরি ইউটিলিটি লেখার সুবিধা দেয়:
\`\`\`css
.btn-primary {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
\`\`\`
**টেইলউইন্ড ৪ আপডেট**:
- **Oxide কম্পিলেশন**: রাস্ট ইঞ্জিন এটিকে বিল্ড টাইমে পার্স করে সরাসরি সিএসএস ডিক্লেয়ারেশনে রূপান্তর করে ফেলে, যা ব্রাউজার খুব সহজে রেন্ডার করতে পারে।
- **সীমাবদ্ধতা**: এটি দিয়ে খুব জটিল বা ডাইনামিক জাভাস্ক্রিপ্ট প্লাগইন নির্ভর ডুপ্লিকেট চেইন অ্যাপ্লাই করা যাবে না।
- **ভেরিয়েবল সাপোর্ট**: থিম ব্লকের কাস্টম ভেরিয়েবল ক্লাসগুলোও (যেমন @apply bg-brand-primary) এটি চমৎকারভাবে সাপোর্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
বাটন বা ইনপুট ফিল্ডের মতো কমন এলিমেন্টগুলোর ক্ষেত্রে বারবার ক্লাস রিপিট না করে সিএসএস ফাইলে \`@apply\` দিয়ে একটি সুন্দর বাটন ক্লাস তৈরি করা যায়।

### উত্তম অনুশীলন
\`@apply\` এর অতিরিক্ত ব্যবহার এড়িয়ে চলুন। টেইলউইন্ডের মূল সৌন্দর্য হলো ইউটিলিটি-ফার্স্ট কনসেপ্ট। কেবল টাইপোগ্রাফি বা খুব বেশি ব্যবহৃত এলিমেন্টের ক্ষেত্রেই এটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ইনলাইন ক্লাসের ভেতরেই হোভার ভ্যারিয়েন্ট অ্যাপ্লাই করার চেষ্টা করা (যেমন: \`@apply hover:bg-blue-600\`)। এর চেয়ে নেটিভ সিএসএস নেস্টিং ব্যবহার করে কোড আলাদা করে লেখা অনেক বেশি কার্যকর ও নিরাপদ।

### কোড উদাহরণ
\`\`\`css
/* টেইলউইন্ড ৪ এ সঠিক @apply ব্যবহারের নিয়ম */
.btn-submit {
  @apply inline-flex items-center justify-center font-semibold rounded-lg transition-colors;
  
  &:hover {
    @apply bg-indigo-700 text-white;
  }
}
\`\`\``
  },
  {
    id: 'css-121',
    title: 'What is the role of @variant in declaring custom states or pseudo-selectors in Tailwind v4?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Directives', 'Variants', 'Tailwind v4'],
    enAnswer: 'The @variant directive in Tailwind v4 allows developers to declare custom pseudo-variants or media query classes directly in CSS. It replaces JS plugin selector APIs, taking a shortcut string configuration (e.g. @variant active (&:active);).',
    bnAnswer: 'Tailwind v4-এ @variant নির্দেশিকা ডেভেলপারদের সরাসরি সিএসএসের ভেতরে কাস্টম সিউডো-ভ্যারিয়েন্ট বা মিডিয়া কোয়েরি ক্লাস ঘোষণা করার সুযোগ দেয়। এটি জাভাস্ক্রিপ্ট প্লাগইন এপিআই বাদ দিয়ে সহজ স্ট্রিং কনফিগারেশন ব্যবহার করে।',
    enExplanation: `### Explanation
In previous versions, writing a custom state wrapper (like \`is-loading:bg-gray-100\`) required setting up a Node.js plugin.
In Tailwind v4, the \`@variant\` directive handles this natively:
- **Syntax**: \`@variant variant-name (css-selector-or-query);\`
- **Parent targeting**: Use the ampersand (\`&\`) symbol to indicate where the styling element fits into the compiled tree:
  \`\`\`css
  @variant hocus (&:hover, &:focus-visible);
  \`\`\`
Once declared, writing \`hocus:border-indigo-500\` automatically triggers the utility on both hover and keyboard focus.

### Real-World Example
If your application uses the HTML5 popover API and you want a variant targeting active popover scopes, you can declare \`@variant open (&:popover-open);\` in your CSS.

### Best Practice
Create composite variants (like combining hover + focus states) to dry up your HTML templates and improve accessibility.

### Common Mistakes
Forgetting the ampersand selector (\`&\`) or writing spaces in selectors inside the variant brackets, which can prevent the compiler from generating correct child tags.

### Code Example
\`\`\`css
@import "tailwindcss";

/* Create custom pseudo-variants */
@variant touch-device (@media (pointer: coarse));
@variant keyboard-focus (&:focus-visible);

/* Usable in HTML: <button class="keyboard-focus:ring-2 touch-device:py-4"></button> */
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে কাস্টম কোনো স্টেট কন্ডিশন (যেমন \`is-loading:bg-gray-100\`) তৈরি করতে জটিল নোড জেএস প্লাগইন কোড লিখতে হতো।
টেইলউইন্ড ৪-এ \`@variant\` ডিরেক্টিভ দিয়ে এটি খুব সহজে করা যায়:
- **সিনট্যাক্স**: \`@variant variant-name (css-selector-or-query);\`
- **প্যারেন্ট টার্গেটিং**: কাস্টম সিলেক্টর ডিফাইন করতে অ্যাম্পারস্যান্ড (\`&\`) চিহ্ন ব্যবহার করতে হবে:
  \`\`\`css
  @variant hocus (&:hover, &:focus-visible);
  \`\`\`
এটি ডিক্লেয়ার করার পর এইচটিএমএলে সরাসরি \`hocus:border-indigo-500\` ব্যবহার করলে হোভার এবং ফোকাস দুই ক্ষেত্রেই ক্লাসটি কাজ করবে।

### বাস্তব-ভিত্তিক উদাহরণ
এইচটিএমএল৫ এর পপওভার এপিআই নিয়ে কাজ করার সময় খোলা পপওভার কার্ড ডিজাইন করতে সিএসএসে লিখতে পারেন: \`@variant open (&:popover-open);\`।

### উত্তম অনুশীলন
ইউজার ইন্টারফেসকে অ্যাক্সেসিবল করতে হোভার এবং ফোকাস আলাদাভাবে না লিখে কম্বাইন্ড ভ্যারিয়েন্ট (যেমন: \`hocus:\`) তৈরি করে এক ক্লাসে নিয়ে আসুন।

### সাধারণ ভুলসমূহ
ভ্যারিয়েন্ট ব্যাকেটের ভেতর অ্যাম্পারস্যান্ড (\`&\`) চিহ্ন দিতে ভুলে যাওয়া বা ভুল স্থানে স্পেস দেওয়া, যার ফলে চাইল্ড ট্যাগ খুঁজে পেতে কম্পাইলারে জটিলতা তৈরি হয়।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* কাস্টম সিউডো-ভ্যারিয়েন্ট তৈরি */
@variant touch-device (@media (pointer: coarse));
@variant keyboard-focus (&:focus-visible);

/* এইচটিএমএলে ব্যবহার: <button class="keyboard-focus:ring-2 touch-device:py-4"></button> */
\`\`\``
  },
  {
    id: 'css-122',
    title: 'How do you integrate a legacy tailwind.config.js in a Tailwind v4 project?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Configuration', 'Migration', 'Tailwind v4'],
    enAnswer: 'To integrate a legacy tailwind.config.js in a Tailwind v4 project, use the @config directive inside your main CSS file: @config "./tailwind.config.js";. This instructs the Oxide compiler to load settings in compatibility mode.',
    bnAnswer: 'Tailwind v4 প্রজেক্টে একটি পুরোনো tailwind.config.js যুক্ত করতে আপনার মূল সিএসএস ফাইলের ভেতর @config নির্দেশনা ব্যবহার করুন: @config "./tailwind.config.js";। এটি Oxide কম্পাইলারকে কম্প্যাটিবিলিটি মোডে সেটিংস লোড করতে নির্দেশ দেয়।',
    enExplanation: `### Explanation
Tailwind v4 is backward-compatible with legacy projects transitioning away from JavaScript configurations:
- **The \`@config\` Directive**: If you have a complex \`tailwind.config.js\` with plugins, themes, and screens that you cannot migrate to CSS immediately, you tell the Oxide engine to import it:
  \`\`\`css
  @import "tailwindcss";
  @config "./tailwind.config.js";
  \`\`\`
- **Oxide compatibility mode**: The compiler loads Node.js underneath specifically to parse the config object and maps it into corresponding CSS variables at compile time.
- This is intended as a migration bridge, not a permanent solution, as parsing JS config files decreases compile speed.

### Real-World Example
When upgrading a large React dashboard from Tailwind v3 to v4, you import tailwindcss, write the \`@config\` path to reference your old layout config, and let the build run without immediately rewriting all configurations.

### Best Practice
Use \`@config\` only as an intermediate step during migration. Migrate theme variables to native CSS properties to take full advantage of Rust compilation speeds.

### Common Mistakes
Expecting custom JS functions inside \`tailwind.config.js\` (like dynamic runtime functions) to execute identically in lightweight environments. Only static data configurations translate reliably.

### Code Example
\`\`\`css
/* main.css */
@import "tailwindcss";

/* Import old config configuration */
@config "./legacy-tailwind.config.js";

/* Custom overrides can still be added here */
@theme {
  --color-new-brand: #ff0055;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ তার আগের সংস্করণের জাভাস্ক্রিপ্ট কনফিগারেশন ফাইলের সাথে ব্যাকওয়ার্ড কম্প্যাটিবিলিটি বজায় রাখে:
- **\`@config\` নির্দেশিকা**: যদি আপনার প্রজেক্টে একটি বড় কনফিগারেশন ফাইল থাকে যা সরাসরি সিএসএসে রূপান্তর করা কঠিন, তবে আপনি সিএসএস ফাইলে তা লিংক করতে পারেন:
  \`\`\`css
  @import "tailwindcss";
  @config "./tailwind.config.js";
  \`\`\`
- **কম্প্যাটিবিলিটি মোড**: কম্পাইলার ব্যাকগ্রাউন্ডে নোড জেএস ব্যবহার করে কনফিগারেশন অবজেক্টটিকে সিএসএস ভেরিয়েবলে রূপান্তর করে দেয়।
- এটি মূলত আপগ্রেড সহজ করার একটি সেতু পথ, দীর্ঘস্থায়ী পদ্ধতি নয়; কারণ জেএস ফাইল পার্সিং বিল্ড স্পিড কিছুটা স্লো করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বড় ওল্ড রিঅ্যাক্ট ড্যাশবোর্ড ৩ সংস্করণ থেকে ৪ সংস্করণে আপগ্রেড করার সময় প্রথম ধাপে সিএসএস ফাইলে পুরোনো কনফিগটি \`@config\` দিয়ে কানেক্ট করা হয়।

### উত্তম অনুশীলন
মাইগ্রেশনের সময় \`@config\` সাময়িক ব্যবহার করুন। পরে পুরো সিস্টেমকে ফাস্ট করতে কনফিগারের ডেটাগুলো সিএসএস ভেরিয়েবলে রূপান্তর করে নেওয়া ভালো।

### সাধারণ ভুলসমূহ
জাভাস্ক্রিপ্ট কনফিগ ফাইলের ভেতর জটিল রানটাইম ফাংশন (functions) রাখা। ৪ সংস্করণের লাইটওয়েট কম্পাইলারে কেবল স্ট্যাটিক অবজেক্ট ডাটাই সফলভাবে কনভার্ট হয়।

### কোড উদাহরণ
\`\`\`css
/* main.css */
@import "tailwindcss";

/* ওল্ড কনফিগ ফাইল ইমপোর্ট করা হলো */
@config "./legacy-tailwind.config.js";

/* এখানে নতুন কনফিগারেশনও অ্যাড করা যাবে */
@theme {
  --color-new-brand: #ff0055;
}
\`\`\``
  },
  {
    id: 'css-123',
    title: 'Explain how to declare a custom @font-face inside a Tailwind v4 theme.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Typography', 'Fonts', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, custom @font-face rules are written normally in CSS, and the font family is registered inside the @theme block by setting the --font-* variable: --font-display: "MyCustomFont", sans-serif;.',
    bnAnswer: 'Tailwind v4-এ কাস্টম @font-face নিয়মগুলো সিএসএসে স্বাভাবিকভাবে লেখা হয়, এবং ফন্ট ফ্যামিলিটি @theme ব্লকের ভেতর --font-* ভেরিয়েবল সেট করে রেজিস্টার করা হয়: --font-display: "MyCustomFont", sans-serif;।',
    enExplanation: `### Explanation
Declaring web fonts in Tailwind v4 follows clean CSS standard practices:
1. Define the font resource using standard CSS \`@font-face\` rules anywhere in your stylesheet.
2. Link the custom font name inside the \`@theme\` block using the \`--font-*\` prefix:
   \`\`\`css
   @theme {
     --font-primary: "Inter", sans-serif;
     --font-accent: "Playfair Display", serif;
   }
   \`\`\`
This registers \`font-primary\` and \`font-accent\` utilities, generating font scaling configurations automatically.

### Real-World Example
If your client provides a custom brand font file (\`brand-regular.woff2\`), you declare \`@font-face\` to load the file, map it to \`--font-brand\`, and apply it as \`<h1 class="font-brand">Title</h1>\`.

### Best Practice
Place \`@font-face\` declarations at the top of your stylesheet (often below the Tailwind import). Use standard web-safe fallbacks (like \`sans-serif\` or \`serif\`) in your font stack variables to prevent flash of unstyled text.

### Common Mistakes
Forgetting that font names containing spaces must be enclosed in quotes when defining variables inside the \`@theme\` block (e.g. \`--font-brand: "Brand Sans", sans-serif;\`).

### Code Example
\`\`\`css
@import "tailwindcss";

/* Define the font asset location */
@font-face {
  font-family: 'Outfit';
  src: url('/fonts/outfit-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@theme {
  /* Register the font to tailwind styling variables */
  --font-sans: "Outfit", sans-serif;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে ওয়েব ফন্ট যুক্ত করার নিয়মটি অত্যন্ত সাধারণ সিএসএস স্ট্যান্ডার্ড মেনে চলে:
১. আপনার সিএসএস ফাইলে যেকোনো জায়গায় স্ট্যান্ডার্ড \`@font-face\` রুলস লিখে ফন্ট ফাইল লোড করুন।
২. কাস্টম ফন্টের নামটি থিম ব্লকের ভেতর \`--font-*\` ভেরিয়েবল দিয়ে লিংক করে দিন:
   \`\`\`css
   @theme {
     --font-primary: "Inter", sans-serif;
     --font-accent: "Playfair Display", serif;
   }
   \`\`\`
এটি করার সাথে সাথেই \`font-primary\` ও \`font-accent\` ক্লাসগুলো ব্যবহারযোগ্য হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ডিজাইনে কাস্টম ব্রান্ড ফন্ট (\`brand-regular.woff2\`) যুক্ত করতে ফেস কোডে সোর্স লিংক দিয়ে থিম ব্লকের ভেরিয়েবলে \`font-brand\` নাম দিয়ে ইনলাইনে ব্যবহার করা যায়।

### উত্তম অনুশীলন
\`@font-face\` কোড সবসময় ইমপোর্টের ঠিক নিচে রাখুন। ফন্ট ফাইল লোড হতে দেরি হলে স্ক্রিনে টেক্সট অদৃশ্য হওয়া এড়াতে ভেরিয়েবলে ব্যাকআপ হিসেবে স্ট্যান্ডার্ড ফন্ট নাম (যেমন \`sans-serif\`) দিন।

### সাধারণ ভুলসমূহ
নামে স্পেস থাকা কাস্টম ফন্ট ভেরিয়েবলের ভেতর লেখার সময় কোটেশন দিতে ভুলে যাওয়া (যেমন: \`--font-brand: "Brand Sans", sans-serif;\`)।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* ফন্ট ফাইল লোড করা হলো */
@font-face {
  font-family: 'Outfit';
  src: url('/fonts/outfit-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@theme {
  /* টেইলউইন্ড সান্স ফন্ট হিসেবে ম্যাপ করা হলো */
  --font-sans: "Outfit", sans-serif;
}
\`\`\``
  },
  {
    id: 'css-124',
    title: 'How does color opacity modifier syntax (bg-primary/50) work dynamically in Tailwind v4?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Variables', 'Colors', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, opacity modifiers work dynamically by translating classes like bg-primary/50 into CSS variables referencing color-mix(). It blends the target custom color with transparency in the OKLCH space.',
    bnAnswer: 'Tailwind v4-এ কালার অপাসিটি মডিফায়ার ডাইনামিকভাবে কাজ করে। bg-primary/50 ক্লাসটিকে এটি ব্যাকগ্রাউন্ডে color-mix() রেফারেন্স সহ সিএসএস ভেরিয়েবলে রূপান্তর করে, যা রঙের সাথে ট্রান্সপারেন্ট অপাসিটি মিক্স করে।',
    enExplanation: `### Explanation
In previous versions of Tailwind CSS, opacity modifiers required complex hex-to-rgb conversion routines written in JavaScript.
In **Tailwind v4**:
- The Oxide compiler maps opacity slash tags (\`/50\`) to CSS standard \`color-mix\` functions.
- If you write \`bg-primary/50\`, the browser calculates the color at runtime:
  \`\`\`css
  background-color: color-mix(in oklch, var(--color-primary) 50%, transparent);
  \`\`\`
- This means you can apply dynamic opacity levels to any custom color defined in OKLCH, HEX, or HSL inside your theme variables without writing duplicate color configurations!

### Real-World Example
Creating an overlay backdrop with a blur effect using your primary theme color with 20% opacity is written as \`bg-brand/20 backdrop-blur-md\`.

### Best Practice
Take advantage of the dynamic opacity modifier. Avoid generating separate color variables with pre-calculated transparencies.

### Common Mistakes
Assuming that opacity values must be percentages only. Tailwind v4 supports arbitrary values inside brackets as well: \`bg-primary/[0.15]\` or \`text-primary/[0.8]\`.

### Code Example
\`\`\`html
<!-- Dynamic opacity application on custom OKLCH colors -->
<div class="bg-indigo-600/10 text-indigo-600/90 border border-indigo-600/20 p-4 rounded-xl">
  Dynamic Alert Card
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ডের ওল্ড ভার্সনে রঙের অপাসিটি কনভার্ট করতে ব্যাকগ্রাউন্ডে অনেক বড় জাভাস্ক্রিপ্ট কোড রান করতে হতো।
**টেইলউইন্ড ৪ সংস্করণে**:
- অপাসিটি স্ল্যাশ (\`/50\`) ট্যাগকে ব্রাউজারের নেটিভ \`color-mix\` এপিআই দিয়ে ক্যালকুলেট করা হয়।
- আপনি যখন \`bg-primary/50\` লিখবেন, ব্রাউজার রানটাইমে হিসাব করবে:
  \`\`\`css
  background-color: color-mix(in oklch, var(--color-primary) 50%, transparent);
  \`\`\`
- এর ফলে থিম ফাইলে আগে থেকে ট্রান্সপারেন্ট রঙের আলাদা কালার কোড ডিফাইন না করেই যেকোনো রঙের অপাসিটি ডাইনামিক কম-বেশি করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
কার্ডের ব্যাকগ্রাউন্ডে থিম রঙের ২০% অপাসিটি দিয়ে আবছা গ্লাস ইফেক্ট তৈরি করতে সরাসরি \`bg-brand/20 backdrop-blur-md\` লিখে দিলেই কাঙ্ক্ষিত স্টাইল পাওয়া যাবে।

### উত্তম অনুশীলন
কালার অপাসিটি মডিফায়ার ব্যবহার করুন। একই রঙের আলাদা আলাদা অপাসিটির ভেরিয়েবল ডিফাইন করে থিম ফাইল বড় করবেন না।

### সাধারণ ভুলসমূহ
ভাবা যে কেবল ফিক্সড পারসেন্টেজই কাজ করবে। ৪ সংস্করণে ব্র্যাকেটের ভেতর কাস্টম ডেসিমেল মানও সাপোর্ট করে: \`bg-primary/[0.15]\`।

### কোড উদাহরণ
\`\`\`html
<!-- কাস্টম কালারে ডাইনামিক অপাসিটি ইফেক্ট -->
<div class="bg-indigo-600/10 text-indigo-600/90 border border-indigo-600/20 p-4 rounded-xl">
  Dynamic Alert Card
</div>
\`\`\``
  },
  {
    id: 'css-125',
    title: 'Explain the transition delay/duration scale and custom easing functions in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Transitions', 'Animations', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 features custom transition configurations inside the @theme block. Declaring --transition-timing-function-custom: cubic-bezier(...) registers transition-custom easing utility classes.',
    bnAnswer: 'Tailwind v4-এ কাস্টম ট্রানজিশন সেটিংস @theme ব্লকের ভেতর করা হয়। --transition-timing-function-custom: cubic-bezier(...) ঘোষণা করলে transition-custom ইজিং ইউটিলিটি ক্লাস তৈরি হয়।',
    enExplanation: `### Explanation
Transition configurations are mapped through CSS variables in Tailwind v4:
- **Duration scale**: Configured using variables like \`--transition-duration-*\`.
- **Easing functions**: Custom cubic-bezier animations can be registered natively inside the theme directive:
  \`\`\`css
  @theme {
    --transition-timing-function-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  \`\`\`
Once configured, applying \`transition ease-bounce duration-500\` animates elements with a custom bouncy curve.

### Real-World Example
If your UI requirements mandate a signature spring transition curve for modals, you declare the cubic-bezier formula once in your stylesheet and apply \`transition ease-spring duration-300\` on modal containers.

### Best Practice
Register a standard set of easing curves (like \`ease-in-out-custom\` or \`ease-spring\`) to maintain animation consistency across the entire application interface.

### Common Mistakes
Writing duration classes like \`duration-[3s]\` with incorrect units. Ensure transition durations match valid CSS values inside custom declarations.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Register spring curve animation */
  --transition-timing-function-spring: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  
  /* Register slow duration scale */
  --transition-duration-super-slow: 1000ms;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে ট্রানজিশনের টাইমিং ও ইজিং সিস্টেম সিএসএস ভেরিয়েবলের সাথে যুক্ত করা হয়েছে:
- **ডিউরেশন স্কেল**: \`--transition-duration-*\` ভেরিয়েবল দিয়ে কনফিগার করা হয়।
- **ইজিং বা মোশন কার্ভ**: কাস্টম কিউবিক-বেজিয়ার কার্ভ সরাসরি থিম ব্লকের ভেতর লেখা যায়:
  \`\`\`css
  @theme {
    --transition-timing-function-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  \`\`\`
এর ফলে এইচটিএমএলে সরাসরি \`transition ease-bounce duration-500\` ক্লাস ব্যবহার করে বাউন্স ইফেক্ট আনা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
মোডাল বা পপআপ বক্স খোলার সময় স্প্রিং বা বাউন্স ইফেক্ট আনতে সিএসএসে একবার কার্ভটি ডিফাইন করে ইনলাইনে স্প্রিং টাইমিং ক্লাসটি কল করে কাজ করা যায়।

### উত্তম অনুশীলন
ডিজাইনের সামঞ্জস্য রক্ষার্থে কাস্টম মোশন কার্ভগুলোর স্ট্যান্ডার্ড নাম ব্যবহার করে গ্লোবাল থিম ফাইলে রাখুন।

### সাধারণ ভুলসমূহ
ইনলাইনে টাইমিং ভ্যালু ব্র্যাকেটে দেওয়ার সময় সেকেন্ডের ফরম্যাট ভুল লেখা (যেমন \`duration-[3]\` এর বদলে \`duration-[3s]\` লিখতে হবে)।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

@theme {
  /* কাস্টম স্প্রিং অ্যানিমেশন কার্ভ রেজিস্ট্রেশন */
  --transition-timing-function-spring: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  
  /* অতিরিক্ত স্লো ডিউরেশন ভেরিয়েবল */
  --transition-duration-super-slow: 1000ms;
}
\`\`\``
  },
  {
    id: 'css-126',
    title: 'Explain the new @theme scoping mechanism (multi-theme support) in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Themes', 'CSS Variables', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 supports multi-theme scoping out of the box. By declaring nested @theme blocks scoped to selectors like .theme-dark or .theme-corporate, the compiler generates scoped utility sets natively.',
    bnAnswer: 'Tailwind v4-এ মাল্টি-থিম স্কোপিং সুবিধা রয়েছে। .theme-dark বা .theme-corporate এর মতো সিলেক্টরের আন্ডারে কাস্টম @theme ব্লক তৈরি করলে কম্পাইলার স্বয়ংক্রিয়ভাবে সেই স্কোপের জন্য থিম ভেরিয়েবল জেনারেট করে।',
    enExplanation: `### Explanation
Tailwind v4 allows scoping custom theme directives to specific selectors inside the stylesheet:
\`\`\`css
@theme {
  --color-brand: #4f46e5;
}

@theme .theme-retro {
  --color-brand: #f59e0b;
}
\`\`\`
- When building page layouts, any child elements nested inside \`<div class="theme-retro"></div>\` will automatically resolve \`bg-brand\` to \`#f59e0b\` (amber) instead of \`#4f46e5\` (indigo).
- This replaces the complex v3 setup of registering plugins that manipulate CSS classes using JavaScript contexts.

### Real-World Example
If your application provides multiple color workspaces (like standard, dark mode, high contrast, and brand overrides), you scope theme blocks to specific user workspace class tags.

### Best Practice
Use scoped themes to define clean design tokens for sub-sections of your app (e.g. scoping a dark dashboard theme to sidebar panels only).

### Common Mistakes
Forgetting that scoped themes only override variables declared inside them. Any variable not redefined in the scoped theme will fall back to default theme definitions.

### Code Example
\`\`\`css
@import "tailwindcss";

/* Global baseline theme configuration */
@theme {
  --color-bg-primary: #ffffff;
  --color-text-primary: #1f2937;
}

/* Scoped dark theme configuration */
@theme .theme-dark {
  --color-bg-primary: #111827;
  --color-text-primary: #f9fafb;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে সরাসরি সিএসএস ফাইলের ভেতর নির্দিষ্ট সিলেক্টরের অধীনে থিম স্কোপ করা যায়:
\`\`\`css
@theme {
  --color-brand: #4f46e5;
}

@theme .theme-retro {
  --color-brand: #f59e0b;
}
\`\`\`
- এর ফলে পেজের যে অংশে \`theme-retro\` ক্লাসটি থাকবে, সে অংশের কন্টেনারে \`bg-brand\` ব্যবহার করলে হলুদ বা অ্যাম্বার কালার শো করবে, অন্য কোথাও করলে নীল কালার শো করবে।
- এর জন্য পূর্বে জাভাস্ক্রিপ্ট প্লাগইন নিয়ে কাজ করতে হতো যা এখন পুরোপুরি দূর হয়েছে।

### বাস্তব-ভিত্তিক উদাহরণ
মাল্টি-টেন্যান্ট পোর্টালে একেক কোম্পানির জন্য একেক রকম ব্র্যান্ড কালার স্কিম লোড করতে রুট কন্টেইনারে ক্লাস অনুযায়ী থিম স্কোপ সেট করে কাজ করা যায়।

### উত্তম অনুশীলন
অ্যাপের ভেতরের নির্দিষ্ট সেকশন বা ড্যাশবোর্ড উইজেটে আলাদা মোড দেওয়ার জন্য স্কোপড থিম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
স্কোপড থিম কেবল সেই ভেরিয়েবলগুলোকেই পরিবর্তন করে যা তার ভেতরে ওভাররাইট করা হয়েছে। অন্য ভেরিয়েবলগুলো ডিফল্ট থিম থেকেই কাজ করবে।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* গ্লোবাল বেস থিম */
@theme {
  --color-bg-primary: #ffffff;
  --color-text-primary: #1f2937;
}

/* নির্দিষ্ট ক্লাসের আওতায় ডার্ক থিম স্কোপ */
@theme .theme-dark {
  --color-bg-primary: #111827;
  --color-text-primary: #f9fafb;
}
\`\`\``
  },
  {
    id: 'css-127',
    title: 'Explain the print media variant (print:) and how it works in Tailwind v4.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Media Queries', 'Print', 'Tailwind v4'],
    enAnswer: 'The print: variant in Tailwind v4 applies styles only when the document is being printed or in print preview. It generates styles scoped inside a CSS @media print directive.',
    bnAnswer: 'Tailwind v4-এর print: ভ্যারিয়েন্টটি কেবল তখনই স্টাইল অ্যাপ্লাই করে যখন ডকুমেন্টটি প্রিন্ট করা হচ্ছে বা প্রিন্ট প্রিভিউ দেখা হচ্ছে। এটি স্টাইলকে সিএসএস @media print ডিরেক্টিভের ভেতর স্কোপ করে।',
    enExplanation: `### Explanation
Web pages printed to PDF or paper often require layouts optimized for readability:
- **The \`print:\` prefix**: Applies properties specifically inside the printed output context:
  \`\`\`html
  <div class="block print:hidden">Sidebar</div>
  \`\`\`
  This hides sidebar panels on paper output sheets.
- **Oxide compiling**: Under the hood, Tailwind v4 groups all print utility calls inside a single \`@media print\` block in the output CSS stylesheet, reducing styling redundancies.

### Real-World Example
In an invoice page setup, you hide print buttons, navigation menus, and page footprints using \`print:hidden\`, and stretch the main table layout to \`w-full\` using \`print:w-full\`.

### Best Practice
Utilize print variants on document platforms, dashboard reports, and invoice tools to make documents printer-friendly and reduce paper ink waste.

### Common Mistakes
Forgetting that background colors are often disabled by default in users' printer settings. Use utilities like \`print:text-black\` or \`print:border\` instead of relying on solid colored backgrounds.

### Code Example
\`\`\`html
<!-- Invoice widget optimized for print outputs -->
<div class="bg-indigo-50 p-6 rounded-2xl print:bg-white print:p-0 print:shadow-none">
  <button class="bg-indigo-600 text-white px-4 py-2 print:hidden">Print Invoice</button>
  <h1 class="text-2xl font-bold text-indigo-900 print:text-black">Invoice #12809</h1>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েব পেজকে যখন পেপারে প্রিন্ট বা পিডিএফ সেভ করা হয়, তখন স্টাইল রিঅ্যাক্ট করানোর জন্য প্রিন্ট মিডিয়া কোয়েরি প্রয়োজন হয়:
- **\`print:\` প্রিফিক্স**: এটি প্রিন্ট হওয়ার সময় সিএসএস সক্রিয় করে:
  \`\`\`html
  <div class="block print:hidden">Sidebar</div>
  \`\`\`
  এটি প্রিন্ট করা কাগজে সাইডবার দেখাবে না।
- **আউটপুট সিএসএস**: টেইলউইন্ড ৪ সংস্করণে সব \`print:\` ক্লাসগুলোকে একটিমাত্র \`@media print\` ডিরেক্টিভের অধীনে নিয়ে যাওয়া হয় যা কোডের সাইজ ছোট রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
ইনভয়েস বা বিলিং পেজের প্রিন্ট ভিউতে কাস্টমারকে প্রিন্ট টগল বাটন ও নেভিগেশন দেখানোর প্রয়োজন নেই। তাই এই ক্লাসগুলোতে \`print:hidden\` ব্যবহার করে স্ক্রিন ক্লিন রাখা যায়।

### উত্তম অনুশীলন
রিপোর্ট বা ড্যাশবোর্ডের পেজ প্রিন্ট ফ্রেন্ডলি করতে ফন্ট কালার কালো রাখা ও ব্যাকগ্রাউন্ড শেড রিমুভ করা ভালো।

### সাধারণ ভুলসমূহ
প্রিন্টার সেটিংসে ব্যাকগ্রাউন্ড কালার প্রিন্টিং বন্ধ থাকলেও ব্যাকগ্রাউন্ড রঙের ওপর ভিত্তি করে কন্টেন্ট রিডেবিলিটি সাজানো। প্রিন্ট ভিউতে ডার্ক রঙের বর্ডার ও কালো ফন্ট টেক্সট দেওয়া শ্রেয়।

### কোড উদাহরণ
\`\`\`html
<!-- প্রিন্ট বান্ধব ইনভয়েস কন্টেইনার -->
<div class="bg-indigo-50 p-6 rounded-2xl print:bg-white print:p-0 print:shadow-none">
  <button class="bg-indigo-600 text-white px-4 py-2 print:hidden">Print Invoice</button>
  <h1 class="text-2xl font-bold text-indigo-900 print:text-black">Invoice #12809</h1>
</div>
\`\`\``
  },
  {
    id: 'css-128',
    title: 'What is the new starting-style utility in Tailwind v4 and how is it used for transitions?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Transitions', 'Animations', 'Starting Style', 'Tailwind v4'],
    enAnswer: 'The starting-style utility in Tailwind v4 maps to the CSS @starting-style rule. It allows setting starting styles for elements entering the DOM, enabling transitions for popovers, dialogs, and dynamic elements from display: none.',
    bnAnswer: 'Tailwind v4-এর starting-style ইউটিলিটি সিএসএস @starting-style রুলের সাথে ম্যাপ করে। এটি ডমে যুক্ত হওয়া এলিমেন্টের জন্য প্রারম্ভিক স্টাইল সেট করে, যার ফলে display: none থেকে আসা এলিমেন্টেও ট্রানজিশন ইফেক্ট দেওয়া যায়।',
    enExplanation: `### Explanation
Normally, elements transitioning from \`display: none\` to \`display: block\` (like modals or dropdowns) cannot animate smoothly because the browser cannot calculate transition states instantly.
The CSS \`@starting-style\` spec solves this by defining the baseline styles before rendering begins:
- **Tailwind v4 Support**: Uses the \`starting:\` variant prefix:
  \`\`\`html
  <div class="opacity-100 transition-opacity starting:opacity-0">Modal</div>
  \`\`\`
- This enables smooth fade-ins even when elements are dynamically loaded or toggled in display state.

### Real-World Example
When implementing a dropdown menu that goes from hidden to shown, applying \`transition opacity duration-300 starting:opacity-0\` makes it animate smoothly when it mounts.

### Best Practice
Combine \`starting:\` with transitions on opacity, scale, and transform properties to make dynamic widgets feel premium and animated.

### Common Mistakes
Forgetting that \`starting:\` requires transition properties (like \`transition-all\`) to trigger the transition path. Without them, the starting style is ignored.

### Code Example
\`\`\`html
<!-- Modal dialog with dynamic entrance transition using starting-style -->
<dialog open class="opacity-100 scale-100 transition-all duration-300 starting:opacity-0 starting:scale-95 p-6 rounded-2xl bg-white shadow-xl">
  <p>Modal Dialog Content</p>
</dialog>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণত \`display: none\` থেকে কোনো এলিমেন্ট যখন \`display: block\` এ আসে (যেমন মোডাল বা ড্রপডাউন), তখন ব্রাউজার সাথে সাথে স্টাইল পরিবর্তনের মান হিসাব করতে না পারায় কোনো ট্রানজিশন শো করে না।
সিএসএস \`@starting-style\` এই সমস্যার সমাধান করে। এটি ব্রাউজারে প্রথম রেন্ডারিংয়ের ঠিক আগের প্রারম্ভিক স্টাইল বলে দেয়:
- **টেইলউইন্ড ৪ সাপোর্ট**: এটি \`starting:\` ভ্যারিয়েন্ট প্রিফিক্স ব্যবহার করে:
  \`\`\`html
  <div class="opacity-100 transition-opacity starting:opacity-0">Modal</div>
  \`\`\`
- এর ফলে ডাইনামিক কম্পোনেন্ট বা পপআপ খোলার সময় চমৎকার স্মুথ অ্যানিমেশন দেওয়া সম্ভব হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে একটি মোডাল বক্স ওপেন করার সময় সেটিকে কাঁপিয়ে বা নিচ থেকে ওপরে ওঠার ফেড-ইন ইফেক্ট দিতে চাইলে \`starting:opacity-0 starting:scale-95\` চমৎকার ভূমিকা পালন করে।

### উত্তম অনুশীলন
\`starting:\` এর সাথে সবসময় \`transition\` ক্লাসগুলো ব্যবহার করুন। অন্যথায় প্রারম্ভিক মান থেকে ফিনিশিং মানের কোনো অ্যানিমেশন রেন্ডার হবে না।

### সাধারণ ভুলসমূহ
ট্রানজিশন স্পিড বা টাইমিং ক্লাস (\`duration-*\`, \`transition-all\`) ডিফাইন না করেই \`starting:\` ব্যবহার করা, যার ফলে অ্যানিমেশন ছাড়াই এলিমেন্ট হঠাৎ স্ক্রিনে চলে আসে।

### কোড উদাহরণ
\`\`\`html
<!-- starting-style দিয়ে চমৎকার অ্যানিমেশন যুক্ত ডায়ালগ বক্স -->
<dialog open class="opacity-100 scale-100 transition-all duration-300 starting:opacity-0 starting:scale-95 p-6 rounded-2xl bg-white shadow-xl">
  <p>Modal Dialog Content</p>
</dialog>
\`\`\``
  },
  {
    id: 'css-129',
    title: 'How does Tailwind v4 handle automatic prefixing of CSS rules?',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Autoprefixer', 'Compilation', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 compiles styles with native support for automatic vendor prefixing. The new Rust-based compiler engine parses browserslist configurations and injects required vendor prefixes without relying on PostCSS autoprefixer plugins.',
    bnAnswer: 'Tailwind v4 স্বয়ংক্রিয় ভেন্ডর প্রিফিক্সিং (vendor prefixing) সাপোর্ট সহ সিএসএস কম্পাইল করে। এর রাস্ট কম্পাইলার browserslist কনফিগারেশন পড়ে এবং পোস্ট-সিএসএস সাহায্য ছাড়াই প্রয়োজনীয় প্রিফিক্স (যেমন -webkit-) যুক্ত করে দেয়।',
    enExplanation: `### Explanation
Browsers require specific prefixes (like \`-webkit-\` or \`-moz-\`) to run newer CSS properties safely:
- **V3 architecture**: Relied on PostCSS running the \`autoprefixer\` JS dependency plugin to parse the entire sheet.
- **V4 architecture**: The Rust Oxide compiler handles vendor prefixing internally during its single compilation sweep.
- It parses your project's \`.browserslistrc\` file or package settings, injecting only the prefix tags required for the target environment, saving bundle space and build times.

### Real-World Example
Writing \`backdrop-blur-md\` or \`user-select-none\` in your code will automatically output compiled prefixes like \`-webkit-backdrop-filter\` or \`-moz-user-select\` based on target browser requirements.

### Best Practice
Uninstall JS-based autoprefixer packages from your project configuration when migrating to Tailwind v4. The native compilation flow handles this out of the box.

### Common Mistakes
Manually writing prefix overrides in stylesheets, which can clash with the built-in compiler configurations and create duplicate styles.

### Code Example
\`\`\`typescript
// vite.config.ts - Tailwind v4 clean config without PostCSS/Autoprefixer setups
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // Native compiler runs prefixing automatically
  ],
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বিভিন্ন ওল্ড বা মডার্ন ব্রাউজারে সিএসএস কোড সফলভাবে রান করাতে কিছু কোডের আগে \`-webkit-\` বা \`-moz-\` এর মতো ভেন্ডর প্রিফিক্স বসাতে হয়:
- **টেইলউইন্ড ৩**: এটি পোস্ট-সিএসএস এবং জাভাস্ক্রিপ্ট ভিত্তিক \`autoprefixer\` প্যাকেজের ওপর নির্ভরশীল ছিল।
- **টেইলউইন্ড ৪**: রাস্ট কম্পাইলার নিজের ভেতরেই স্বয়ংক্রিয়ভাবে ব্রাউজারের ভেন্ডর প্রিফিক্স হ্যান্ডেল করে।
- এটি প্রজেক্টের ব্রাউজার লিস্ট কনফিগ থেকে টার্গেট ব্রাউজার দেখে এবং সেই অনুযায়ী কোড ইনজেক্ট করে, যা বিল্ড টাইম ও ফাইল সাইজ কমায়।

### বাস্তব-ভিত্তিক উদাহরণ
কোডে \`user-select-none\` লিখলে কম্পাইলার ব্রাউজার সাপোর্ট অনুযায়ী স্বয়ংক্রিয়ভাবে \`-webkit-user-select: none;\` বা \`-moz-user-select: none;\` তৈরি করে দেয়।

### উত্তম অনুশীলন
টেইলউইন্ড ৪ প্রজেক্টে আপগ্রেড করার পর অপ্রয়োজনীয় পোস্ট-সিএসএস বা আলাদা অটোপিফিক্সার প্যাকেজ সরিয়ে ফেলুন।

### সাধারণ ভুলসমূহ
নিজে থেকে সিএসএস ফাইলে ম্যানুয়ালি প্রিফিক্স লেখার চেষ্টা করা, যা কম্পাইলারের কোডের সাথে সাংঘর্ষিক হতে পারে।

### কোড উদাহরণ
\`\`\`typescript
// vite.config.ts - পোস্ট-সিএসএস/অটোপিফিক্সার ছাড়াই টেইলউইন্ড ৪ সেটআপ
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // রাস্ট কম্পাইলার নিজে থেকেই প্রিফিক্সিং হ্যান্ডেল করবে
  ],
});
\`\`\``
  },
  {
    id: 'css-130',
    title: 'How do custom aspect-ratio utilities work in Tailwind v4?',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Layout', 'Aspect Ratio', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 provides aspect-* utility classes that map directly to the CSS aspect-ratio property. Defining --aspect-cinema: 21 / 9 in @theme creates aspect-cinema classes natively.',
    bnAnswer: 'Tailwind v4-এ aspect-* ইউটিলিটি ক্লাস রয়েছে যা সরাসরি CSS aspect-ratio প্রোপার্টির সাথে ম্যাপ করে। @theme ব্লকে --aspect-cinema: 21 / 9 ঘোষণা করলে aspect-cinema ক্লাসটি তৈরি হয়ে যায়।',
    enExplanation: `### Explanation
Aspect ratio manages the proportional width and height sizing of media containers:
- **Tailwind v4 utilities**: Includes standard shapes like \`aspect-square\` (1/1), \`aspect-video\` (16/9), and arbitrary variables like \`aspect-[21/9]\`.
- **Theme Extensions**: Define custom ratios inside the theme directive:
  \`\`\`css
  @theme {
    --aspect-portrait: 3 / 4;
  }
  \`\`\`
This lets you write \`aspect-portrait\` natively without using arbitrary brackets in HTML layouts.

### Real-World Example
When designing video portals or card feeds, styling a cover preview container with \`aspect-video w-full object-cover\` prevents layout shift on load.

### Best Practice
Always specify aspect ratios on responsive image/video placeholder containers. This reserves screen space on slow network loads, avoiding Content Layout Shift (CLS) issues.

### Common Mistakes
Forgetting that specifying explicit width AND height dimensions on the same tag overrides the aspect-ratio behavior.

### Code Example
\`\`\`html
<!-- Aspect ratio video viewport in Tailwind v4 -->
<div class="aspect-video w-full bg-slate-100 rounded-xl overflow-hidden">
  <iframe class="w-full h-full" src="https://www.youtube.com/embed/..." title="Video player"></iframe>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যাসপেক্ট রেশিও হলো এলিমেন্টের উইডথ ও হাইটের আনুপাতিক পরিমাপ নিয়ন্ত্রণ করার সিএসএস সিস্টেম:
- **টেইলউইন্ড ৪ ইউটিলিটি**: এতে \`aspect-square\` (১/১), \`aspect-video\` (১৬/৯) ইত্যাদি ক্লাস এবং আরবিট্রারি ব্র্যাকেটের মাধ্যমে কাস্টম রেশিও \`aspect-[21/9]\` সাপোর্ট করে।
- **থিম কনফিগারেশন**: থিম ব্লকের ভেতর কাস্টম রেশিও অ্যাড করার নিয়ম:
  \`\`\`css
  @theme {
    --aspect-portrait: 3 / 4;
  }
  \`\`\`
এর ফলে এইচটিএমএলে সরাসরি \`aspect-portrait\` ব্যবহার করা সম্ভব হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউটিউব বা ভিডিও পোর্টাল সাইটে কার্ডের থাম্বনেইল কন্টেইনারে \`aspect-video\` সেট করে রাখলে ছবি লোড হওয়ার আগেও কন্টেইনারটি সঠিক আকারে থাকে, ফলে লেআউট ভেঙে যায় না।

### উত্তম অনুশীলন
ইমেজ বা ভিডিও কন্টেইনারে অ্যাসপেক্ট রেশিও ব্যবহার করুন। এটি সাইটের স্পিড ও লেআউট স্ট্যাবিলিটি (CLS) উন্নত করে।

### সাধারণ ভুলসমূহ
একই কন্টেইনারে উইডথ এবং হাইট দুটোই ফিক্সড করে দিয়ে আবার অ্যাসপেক্ট রেশিও দেওয়ার চেষ্টা করা। এতে অ্যাসপেক্ট রেশিও কাজ করবে না।

### কোড উদাহরণ
\`\`\`html
<!-- অ্যাসপেক্ট রেশিও সমৃদ্ধ রেসপনসিভ ভিডিও বক্স -->
<div class="aspect-video w-full bg-slate-100 rounded-xl overflow-hidden">
  <iframe class="w-full h-full" src="https://www.youtube.com/embed/..." title="Video player"></iframe>
</div>
\`\`\``
  },
  {
    id: 'css-131',
    title: 'Explain scrollbar-related utilities (like scrollbar-gutter, scrollbar-width) in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Scrollbar', 'Layout', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 introduces utilities mapping to scrollbar properties: scrollbar-thin, scrollbar-none, and scroll-gutter-stable. These allow developers to style or hide scrollbars and prevent layout shifts when scrollbars appear.',
    bnAnswer: 'Tailwind v4-এ স্ক্রলবার নিয়ন্ত্রণের জন্য নতুন ইউটিলিটি যুক্ত হয়েছে: scrollbar-thin, scrollbar-none এবং scroll-gutter-stable। এগুলো দিয়ে স্ক্রলবার কাস্টমাইজ বা হাইড করা যায় এবং স্ক্রলবার আসার কারণে স্ক্রিন সরে যাওয়া রোধ করা যায়।',
    enExplanation: `### Explanation
Scrollbar rendering behaves differently across devices and browsers, often causing sudden layout shifts when content extends.
Tailwind v4 supports modern standard scrollbar styling properties:
1. **\`scrollbar-width\`**:
   - \`scrollbar-thin\`: Sets scrollbars to a thinner standard width.
   - \`scrollbar-none\`: Completely hides scrollbars while maintaining element scroll functionality.
2. **\`scrollbar-gutter\`**:
   - \`scrollbar-gutter-stable\`: Reserves spacing for the scrollbar. When page contents grow, the screen does not shift sideways because the space is already allocated.

### Real-World Example
If your dashboard sidebar has scrollable navigation links, you apply \`scrollbar-thin hover:scrollbar-auto\` to keep the sidebar looking sleek and minimal.

### Best Practice
Use \`scrollbar-gutter-stable\` on full-height app containers to prevent visual layout jumps when users trigger loading updates or resize drawers.

### Common Mistakes
Using old Webkit scrollbar pseudo-element overrides (like \`::-webkit-scrollbar\`) where modern standards-compliant classes like \`scrollbar-none\` do the job cleanly.

### Code Example
\`\`\`html
<!-- Scrollable sidebar with thin scrollbar and stable scroll gutter -->
<aside class="h-screen overflow-y-auto scrollbar-thin scrollbar-gutter-stable w-64 bg-slate-50 border-r">
  <div class="p-4 space-y-4">
    <!-- Links -->
  </div>
</aside>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বিভিন্ন ওএস বা ব্রাউজারে স্ক্রলবারের উইডথ ভিন্ন হওয়ার কারণে কন্টেন্ট বাড়লে স্ক্রিন হঠাৎ করে বামে বা ডানে লাফ দিয়ে সরে যায় (Layout Shift)।
টেইলউইন্ড ৪ আধুনিক স্ক্রলবার স্টাইলিং প্রোপার্টি সাপোর্ট করে:
১. **\`scrollbar-width\`**:
   - \`scrollbar-thin\`: স্ক্রলবারটিকে সরু বা চিকন করে।
   - \`scrollbar-none\`: স্ক্রলবারটি পুরোপুরি অদৃশ্য করে কিন্তু স্ক্রলিং সচল রাখে।
২. **\`scrollbar-gutter\`**:
   - \`scrollbar-gutter-stable\`: এটি স্ক্রলবারের জন্য আগে থেকেই স্পেস রিজার্ভ করে রাখে। এর ফলে কন্টেন্ট বাড়লেও স্ক্রিন ডানে-বামে কেঁপে ওঠে না।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডের সাইডবারে অনেক লিংক থাকলে সাইডবার স্ক্রল করার সময় ইউজার ফ্রেন্ডলি লুক দিতে \`scrollbar-thin\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
ফুল-হাইট ওয়েব পেজের লেআউট লাফানো বন্ধ করতে রুট কন্টেইনারে \`scrollbar-gutter-stable\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
পুরোনো ওয়েবকিট ওভাররাইড (\`::-webkit-scrollbar\`) লিখতে গিয়ে কোড নষ্ট করা, যেখানে নতুন স্ট্যান্ডার্ড ক্লাস \`scrollbar-none\` খুব সহজে এটি সমাধান করে।

### কোড উদাহরণ
\`\`\`html
<!-- সরু স্ক্রলবার এবং স্ট্যাবল স্ক্রল গাটার সহ সাইডবার কন্টেইনার -->
<aside class="h-screen overflow-y-auto scrollbar-thin scrollbar-gutter-stable w-64 bg-slate-50 border-r">
  <div class="p-4 space-y-4">
    <!-- Links -->
  </div>
</aside>
\`\`\``
  },
  {
    id: 'css-132',
    title: 'Explain the selection modifier (selection:) and input caret styling in Tailwind v4.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Typography', 'Interactive', 'Tailwind v4'],
    enAnswer: 'The selection: variant styles selected text (selection:bg-indigo-500 selection:text-white), and the caret-* utilities style the cursor inside inputs or textareas natively.',
    bnAnswer: 'selection: ভ্যারিয়েন্ট সিলেক্ট করা বা হাইলাইট করা টেক্সটের স্টাইল নির্ধারণ করে (যেমন selection:bg-indigo-500), এবং caret-* ইউটিলিটিগুলো ইনপুট বা টেক্সটএরিয়ার ভেতরের কার্সরের কালার সেট করে।',
    enExplanation: `### Explanation
Polishing the details of user interaction elevates digital brand experiences:
- **\`selection:\` variant**: Applies properties specifically inside the \`::selection\` pseudo-class:
  \`\`\`html
  <p class="selection:bg-amber-300 selection:text-amber-900">Select this text</p>
  \`\`\`
- **\`caret-*\` utilities**: Styles the color of the text insertion cursor (caret) inside editable elements:
  \`\`\`html
  <input class="caret-indigo-600 focus:outline-none" />
  \`\`\`

### Real-World Example
If your company theme is branded dark violet, setting \`selection:bg-violet-500 selection:text-white\` globally on the \`<body>\` tag prevents the default browser blue highlight from clashing with your brand palette.

### Best Practice
Keep selected text highly readable. Ensure high contrast between the selection background color and the selected text color.

### Common Mistakes
Setting a text selection background color that matches the text color, making the words completely invisible when highlighted.

### Code Example
\`\`\`html
<!-- Customized text highlight and input cursor styles -->
<div class="space-y-4 selection:bg-pink-500 selection:text-white">
  <p>Highlighting this text will turn the background pink and the text white.</p>
  
  <input type="text" placeholder="Type here..." 
         class="border p-2 rounded-lg caret-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none" />
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েবসাইটের ছোটখাটো ইন্টারঅ্যাকশন কাস্টমাইজেশন ব্র্যান্ডিংকে আরও আকর্ষণীয় করে তোলে:
- **\`selection:\` ভ্যারিয়েন্ট**: সিএসএস \`::selection\` সিউডো-ক্লাস নিয়ে কাজ করে:
  \`\`\`html
  <p class="selection:bg-amber-300 selection:text-amber-900">Select this text</p>
  \`\`\`
- **\`caret-*\` ইউটিলিটি**: ইনপুট বা টেক্সটবক্সের ভেতর লেখার সময় যে কার্সরটি দপদপ (blink) করে, তার কালার নিয়ন্ত্রণ করে:
  \`\`\`html
  <input class="caret-indigo-600 focus:outline-none" />
  \`\`\`

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির ব্র্যান্ড থিম বেগুনী কালার হলে, বডি ট্যাগে \`selection:bg-violet-500\` দিয়ে রাখলে ব্রাউজারের ডিফল্ট নীল রঙের টেক্সট সিলেকশন ব্যাকগ্রাউন্ড পরিবর্তিত হয়ে বেগুনী হয়ে যাবে।

### উত্তম অনুশীলন
সিলেক্ট করা টেক্সটের রিডেবিলিটি বা কনট্রাস্ট চেক করুন। এমন কালার দিন যাতে সিলেক্ট করার পরও লেখাটি স্পষ্ট পড়া যায়।

### সাধারণ ভুলসমূহ
সিলেকশন ব্যাকগ্রাউন্ড কালার এবং টেক্সটের ফন্ট কালার কাছাকাছি দেওয়া, যার ফলে টেক্সট সিলেক্ট করলে পুরো লেখাটি অদৃশ্য মনে হয়।

### কোড উদাহরণ
\`\`\`html
<!-- কাস্টম টেক্সট সিলেকশন এবং কার্সর কালার সহ কন্টেইনার -->
<div class="space-y-4 selection:bg-pink-500 selection:text-white">
  <p>Highlighting this text will turn the background pink and the text white.</p>
  
  <input type="text" placeholder="Type here..." 
         class="border p-2 rounded-lg caret-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none" />
</div>
\`\`\``
  },
  {
    id: 'css-133',
    title: 'How does the focus-visible modifier work and how can you configure custom focus rings in Tailwind v4?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Accessibility', 'Focus Ring', 'Tailwind v4'],
    enAnswer: 'The focus-visible variant in Tailwind v4 targets elements that receive keyboard focus, ignoring mouse clicks. Custom focus rings are configured using ring-* utility scale mapped to theme variables.',
    bnAnswer: 'Tailwind v4-এর focus-visible ভ্যারিয়েন্টটি কেবল কিবোর্ড দিয়ে নেভিগেট করা এলিমেন্টকে ফোকাস স্টাইল দেয়, মাউস ক্লিক উপেক্ষা করে। কাস্টম ফোকাস রিং থিম ভেরিয়েবলে ম্যাপ করা ring-* ইউটিলিটি দিয়ে কনফিগার করা হয়।',
    enExplanation: `### Explanation
Focus indicators are vital for accessibility, but showing outline borders on mouse clicks can bother design sensibilities:
- **\`focus-visible\` vs \`focus\`**:
  - \`focus\`: Triggers when an element gains focus via keyboard Tab OR mouse click.
  - \`focus-visible\`: Triggers *only* if the user navigates via keyboard (using Tab key), targeting accessibility needs without adding outline rings for mouse users.
- **Custom Focus rings in v4**: Configure the ring size or colors inside \`@theme\` or directly using utility shorthand properties like \`focus-visible:ring-2 focus-visible:ring-indigo-500\`.

### Real-World Example
On an accessible website, styling buttons with \`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600\` ensures keyboard users see where they are, while mouse-click users see standard hover states.

### Best Practice
Never hide outline indicators completely without replacing them with focus-visible ring styles. Doing so breaks accessibility guidelines (WCAG).

### Common Mistakes
Applying \`focus:outline-none\` without adding any \`focus-visible\` fallbacks, which locks keyboard-only users out of knowing which link is currently active.

### Code Example
\`\`\`html
<!-- Keyboard-accessible button with custom focus ring in Tailwind v4 -->
<button class="bg-indigo-650 text-white px-4 py-2 rounded-lg hover:bg-indigo-700
               focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:ring-offset-2">
  Accessible Button
</button>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কিবোর্ড ব্যবহারকারী প্রতিবন্ধী মানুষের জন্য ওয়েবসাইটে ফোকাস ইন্ডিকেটর অতি জরুরি, তবে মাউস ক্লিকেও এই বর্ডার দেখালে অনেকে ডিজাইনগত সমস্যা মনে করেন:
- **\`focus-visible\` বনাম \`focus\`**:
  - \`focus\`: এলিমেন্টে কিবোর্ডের ট্যাব (Tab) অথবা মাউসের ক্লিক—উভয় ক্ষেত্রেই সক্রিয় হয়।
  - \`focus-visible\`: কেবল তখনই সক্রিয় হয় যখন ব্যবহারকারী কিবোর্ড (Tab) দিয়ে নেভিগেট করে আসেন, মাউস ক্লিকে এটি ফোকাস রিং দেখায় না।
- **টেইলউইন্ড ৪ ফোকাস রিং**: থিম ডিরেক্টিভের ভেতর বা সরাসরি ক্লাস লাইনে কাস্টম রিং বা আউটলাইন কালার জেনারেট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাক্সেসিবল ওয়েবসাইটে বাটন ডিজাইন করার সময় \`focus-visible:ring-2\` দিয়ে কিবোর্ড নেভিগেশন সচল রাখা যায় এবং মাউস ব্যবহারকারীদের জন্য রিং মুক্ত ক্লিন ডিজাইন রাখা যায়।

### উত্তম অনুশীলন
কখনো ফোকাস বর্ডার পুরোপুরি মুছে ফেলবেন না (\`focus:outline-none\`), যদি না বিকল্প হিসেবে \`focus-visible\` রিং স্টাইল ডিফাইন করা থাকে। এটি অ্যাক্সেসিবিলিটি গাইডলাইন (WCAG) লঙ্ঘন করে।

### সাধারণ ভুলসমূহ
ইনপুটে সরাসরি \`focus:outline-none\` দেওয়া কিন্তু কোনো \`focus-visible\` কাস্টম রিং সেট না করা। এতে কিবোর্ড ব্যবহারকারীরা বুঝতে পারেন না তাদের কার্সর বর্তমানে কোথায় আছে।

### কোড উদাহরণ
\`\`\`html
<!-- কাস্টম ফোকাস রিং ও অফসেট সহ কিবোর্ড বান্ধব বাটন -->
<button class="bg-indigo-650 text-white px-4 py-2 rounded-lg hover:bg-indigo-700
               focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:ring-offset-2">
  Accessible Button
</button>
\`\`\``
  },
  {
    id: 'css-134',
    title: 'Explain how grid layout columns/rows can be configured dynamically in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Layout', 'Grid', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, custom grid structures are configured in @theme using --grid-template-columns-* variables. Arbitrary fractions like grid-cols-[repeat(auto-fit,minmax(200px,1fr))] are computed on-the-fly.',
    bnAnswer: 'Tailwind v4-এ কাস্টম গ্রিড লেআউট @theme ব্লকে --grid-template-columns-* ভেরিয়েবল দিয়ে তৈরি করা হয়। কাস্টম আরবিট্রারি গ্রিড সিনট্যাক্স (যেমন grid-cols-[repeat(auto-fit,minmax(200px,1fr))]) সরাসরি এইচটিএমএলেই হিসাব হয়।',
    enExplanation: `### Explanation
Grid template customization is simplified in Tailwind v4:
- **Default Grid Scale**: Spans from \`grid-cols-1\` to \`grid-cols-12\` natively.
- **Theme Extensions**: Define custom grid columns/rows scales in your theme stylesheet:
  \`\`\`css
  @theme {
    --grid-template-columns-card-grid: repeat(auto-fill, minmax(250px, 1fr));
  }
  \`\`\`
  This creates \`grid-cols-card-grid\` for instant layout applications.
- **Arbitrary grids**: Write complex grid specifications directly inside brackets: \`grid-cols-[200px_1fr_300px]\`.

### Real-World Example
If your catalog section needs a responsive grid that automatically wraps cards without media queries, you write \`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6\`.

### Best Practice
Use the CSS theme definition inside the stylesheet when grid columns need to be reused in multiple layouts. Use arbitrary brackets only for single-use, localized layouts.

### Common Mistakes
Writing spaces inside the brackets when using arbitrary grid setups (e.g. \`grid-cols-[200px 1fr]\`). Always separate dimensions using underscores (\`_\`) to represent spaces in class definitions: \`grid-cols-[200px_1fr]\`.

### Code Example
\`\`\`html
<!-- Dynamic auto-fitting responsive grid without media queries -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-6">
  <div class="bg-white p-4 border rounded-xl shadow">Card 1</div>
  <div class="bg-white p-4 border rounded-xl shadow">Card 2</div>
  <div class="bg-white p-4 border rounded-xl shadow">Card 3</div>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে গ্রিড টেমপ্লেট তৈরির প্রক্রিয়া অনেক সহজ করা হয়েছে:
- **ডিফল্ট গ্রিড স্কেল**: টেইলউইন্ডে ডিফল্টভাবে ১ থেকে ১২ কলামের গ্রিড ক্লাস রয়েছে।
- **থিম এক্সটেনশন**: কাস্টম কলামের সংখ্যা বা হিসাব থিম ফাইলে রেজিস্টার করা যায়:
  \`\`\`css
  @theme {
    --grid-template-columns-card-grid: repeat(auto-fill, minmax(250px, 1fr));
  }
  \`\`\`
  এর পর সরাসরি \`grid-cols-card-grid\` ক্লাস দিয়ে গ্রিড অ্যাক্টিভ করা যায়।
- **আরবিট্রারি গ্রিড**: জটিল গ্রিড স্ট্রাকচার সরাসরি ইনলাইনে ব্র্যাকেট ব্যবহার করে লেখা যায়: \`grid-cols-[200px_1fr_300px]\`।

### বাস্তব-ভিত্তিক উদাহরণ
মিডিয়া কোয়েরি ছাড়াই কার্ডগুলোকে রেসপনসিভভাবে অটো-র‍্যাপ করাতে চাইলে কাস্টম রিপিট ফাংশনটি ব্র্যাকেটে লিখে সহজেই কাজ করা যায়।

### উত্তম অনুশীলন
রিইউজেবল ড্যাশবোর্ড কলাম ডিজাইনের জন্য থিম ফাইলে সিএসএস ভেরিয়েবল দিয়ে কলাম রুলস তৈরি করুন। কেবল ওয়ান-টাইম ডিজাইনের ক্ষেত্রে ব্র্যাকেটের সাহায্য নিন।

### সাধারণ ভুলসমূহ
আরবিট্রারি ব্র্যাকেটের ভেতর সরাসরি স্পেস ব্যবহার করা (যেমন: \`grid-cols-[200px 1fr]\`)। ক্লাসের ভেতর স্পেস দিলে ক্লাস আলাদা হয়ে যায়, তাই আন্ডারস্কোর (\`_\`) দিতে হবে: \`grid-cols-[200px_1fr]\`।

### কোড উদাহরণ
\`\`\`html
<!-- মিডিয়া কোয়েরি ছাড়াই অটো-ফিটিং রেসপনসিভ গ্রিড লেআউট -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-6">
  <div class="bg-white p-4 border rounded-xl shadow">Card 1</div>
  <div class="bg-white p-4 border rounded-xl shadow">Card 2</div>
  <div class="bg-white p-4 border rounded-xl shadow">Card 3</div>
</div>
\`\`\``
  },
  {
    id: 'css-135',
    title: 'What is the difference between @tailwindcss/vite and the legacy PostCSS setup?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Build Tools', 'Vite', 'Tailwind v4'],
    enAnswer: 'The @tailwindcss/vite plugin compiles styles directly inside the Vite bundler pipeline using the Oxide engine. It eliminates PostCSS processing layers, yielding faster rebuilds and unified code optimization cycles.',
    bnAnswer: '@tailwindcss/vite প্লাগইনটি সরাসরি Vite বান্ডলার পাইপলাইনের ভেতরে Oxide ইঞ্জিন ব্যবহার করে স্টাইল কম্পাইল করে। এটি পোস্ট-সিএসএস (PostCSS) প্রক্রিয়াকরণের ধাপগুলো কমিয়ে দেয়, ফলে রিবিল্ড অনেক ফাস্ট হয়।',
    enExplanation: `### Explanation
Tailwind v4 replaces PostCSS-dependent workflows with bundler-native plugins:
- **Legacy PostCSS Setup**: Tailwind v3 functioned as a PostCSS plugin. Bundlers (like Vite or Webpack) loaded PostCSS, which ran Tailwind, compiled utilities, and passed it back to the bundler, creating processing bottlenecks.
- **Vite Integration (\`@tailwindcss/vite\`)**:
  - Operates directly inside Vite's compiler lifecycle.
  - The Oxide engine sweeps files concurrently as Vite parses the dependency tree.
  - Generates styles inside the bundler thread, yielding build speeds up to 10x faster and eliminating separate config dependencies.

### Real-World Example
Upgrading a Vite project configuration by swapping \`postcss.config.js\` with the native \`@tailwindcss/vite\` plugin in \`vite.config.ts\` speeds up hot-module replacement (HMR) to under 20 milliseconds.

### Best Practice
When developing projects using Vite, always prioritize the native \`@tailwindcss/vite\` integration. It offers the fastest compilation times and standard environment setups.

### Common Mistakes
Retaining outdated PostCSS configurations alongside the Vite plugin, causing duplicate parsing sweeps and slowing down build times.

### Code Example
\`\`\`typescript
// vite.config.ts - Modern Tailwind v4 Vite Integration
import { defineConfig } from 'vite';
import react from '@vitejs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Seamless and extremely fast compiler integration
  ],
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণ পোস্ট-সিএসএস (PostCSS) নির্ভরতার বিকল্প হিসেবে বান্ডলার-নেটিভ প্লাগইন নিয়ে এসেছে:
- **পুরোনো পোস্ট-সিএসএস সেটআপ**: টেইলউইন্ড ৩ মূলত পোস্ট-সিএসএস প্লাগইন হিসেবে কাজ করত। ভাইট (Vite) বা ওয়েবপ্যাক পোস্ট-সিএসএস কল করে টেইলউইন্ড চালাত, যা বিল্ড টাইম বাড়িয়ে দিত।
- **ভাইট ইন্টিগ্রেশন (\`@tailwindcss/vite\`)**:
  - এটি সরাসরি ভাইট কম্পাইলারের ভেতরে কাজ করে।
  - ভাইট যখন ডিপেন্ডেন্সি চেক করে, রাস্ট Oxide ইঞ্জিন তখনই ব্যাকগ্রাউন্ডে কোড স্ক্যান করে নেয়।
  - বান্ডলার থ্রেডে স্টাইল জেনারেট করায় কম্পাইল স্পিড ১০ গুণ পর্যন্ত বৃদ্ধি পায়।

### বাস্তব-ভিত্তিক উদাহরণ
ভাইট প্রজেক্টের \`postcss.config.js\` ফেলে দিয়ে \`vite.config.ts\` ফাইলে নেটিভ প্লাগইন যুক্ত করার পর কোড সেভ করা মাত্র ২০ মিলি-সেকেন্ডের নিচে ব্রাউজার আপডেট হয়।

### উত্তম অনুশীলন
ভাইট দিয়ে ডেভেলপ করার সময় সবসময় নেটিভ \`@tailwindcss/vite\` প্লাগইন ব্যবহার করুন। এটি সবচেয়ে ভালো গতি ও পারফরম্যান্স দেয়।

### সাধারণ ভুলসমূহ
ভাইট প্লাগইন অ্যাক্টিভ করার পরও প্রজেক্টে পুরোনো পোস্ট-সিএসএস রুলস ও কনফিগ ফাইল রেখে দেওয়া, যা ফাইল পার্সিংয়ে বাড়তি সময় নষ্ট করে।

### কোড উদাহরণ
\`\`\`typescript
// vite.config.ts - আধুনিক টেইলউইন্ড ৪ এবং ভাইট প্লাগইন সেটআপ
import { defineConfig } from 'vite';
import react from '@vitejs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // অত্যন্ত দ্রুত রাস্ট কম্পাইলার প্লাগইন ইন্টিগ্রেশন
  ],
});
\`\`\``
  },
  {
    id: 'css-136',
    title: 'Explain the role of the @tailwindcss/postcss plugin and when to use it.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Build Tools', 'PostCSS', 'Tailwind v4'],
    enAnswer: 'The @tailwindcss/postcss plugin is a v4 compiler package designed for tools or frameworks (like Next.js pages or Webpack) that rely on PostCSS pipelines, ensuring compatibility with legacy bundler infrastructures.',
    bnAnswer: '@tailwindcss/postcss প্লাগইনটি ৪ সংস্করণের একটি কম্পাইলার প্যাকেজ যা নির্দিষ্ট ফ্রেমওয়ার্ক বা টুলসের (যেমন: Next.js pages বা Webpack) জন্য ডিজাইন করা হয়েছে যা পোস্ট-সিএসএস পাইপলাইনের ওপর নির্ভর করে।',
    enExplanation: `### Explanation
Not all development tools integrate directly with bundler-native plugins. Frameworks like Next.js, Webpack, or legacy setups require PostCSS parsing:
- **\`@tailwindcss/postcss\`**: This plugin acts as a bridge for these frameworks in Tailwind v4.
- **Functionality**: It loads the Oxide Rust compiler inside the PostCSS pipeline, allowing projects that rely on \`postcss.config.js\` to compile Tailwind styles using the new faster engine.
- Use it if your build tool does not yet support the native bundler plugins (like in custom Webpack setups).

### Real-World Example
In a Next.js (pages directory or App Router) project that requires PostCSS for CSS modules or other preprocessors, you configure Tailwind v4 by adding \`@tailwindcss/postcss\` inside \`postcss.config.mjs\`.

### Best Practice
Only use the PostCSS package when native bundler plugins (like Vite) are not applicable. Ensure you remove legacy tailwind imports and configurations when adopting the new PostCSS plugin.

### Common Mistakes
Using both the native bundler plugin and the PostCSS plugin in the same project, leading to build conflicts and compilation errors.

### Code Example
\`\`\`javascript
// postcss.config.mjs - Next.js/Webpack Tailwind v4 Compatibility
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Runs the new v4 Oxide engine inside PostCSS
  },
};

export default config;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সব ফ্রেমওয়ার্ক বা বিল্ড টুল সরাসরি ভাইটের মতো প্লাগইন সমর্থন করে না। Next.js বা Webpack এর মতো অনেক সিস্টেমে পোস্ট-সিএসএস ফ্লো প্রয়োজন হয়:
- **\`@tailwindcss/postcss\`**: এই প্লাগইনটি টেইলউইন্ড ৪ সংস্করণে পোস্ট-সিএসএস ভিত্তিক ফ্রেমওয়ার্কের জন্য তৈরি করা হয়েছে।
- **কাজ করার পদ্ধতি**: এটি পোস্ট-সিএসএস পাইপলাইনের ভেতর রাস্ট Oxide কম্পাইলার রান করায়। এর ফলে পুরোনো বান্ডলার প্রজেক্টগুলোতেও টেইলউইন্ড ৪ এর স্পিডের সুবিধা নেওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
নেক্সট জেএস (Next.js) প্রজেক্টে যেখানে সিএসএস মডিউল ব্যবহারের জন্য পোস্ট-সিএসএস পাইপলাইন অপরিহার্য, সেখানে কনফিগারেশনে \`@tailwindcss/postcss\` অ্যাড করে সহজে টেইলউইন্ড ৪ স্থায়ী করা যায়।

### উত্তম অনুশীলন
যদি ভাইটের মতো নেটিভ প্লাগইন ব্যবহার করা সম্ভব না হয়, কেবল তখনই পোস্ট-সিএসএস প্যাকেজটি ব্যবহার করুন। পুরানো প্লাগইন সেটিংস মুছে নতুনটি যুক্ত করুন।

### সাধারণ ভুলসমূহ
একই প্রজেক্টে ভাইট প্লাগইন এবং পোস্ট-সিএসএস প্লাগইন দুটোই একসাথে রান করানোর চেষ্টা করা, যা বিল্ডে এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`javascript
// postcss.config.mjs - Next.js বা Webpack এ টেইলউইন্ড ৪ ব্যবহারের নিয়ম
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // পোস্ট-সিএসএস এর ভেতর নতুন Oxide কম্পাইলার রান করবে
  },
};

export default config;
\`\`\``
  },
  {
    id: 'css-137',
    title: 'How do you migrate a project from Tailwind v3 to v4 using the CLI migration tool?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CLI', 'Migration', 'Tailwind v4'],
    enAnswer: 'To migrate a project from Tailwind v3 to v4, run npx @tailwindcss/upgrade. This CLI tool automatically modifies your CSS files to use @import "tailwindcss", migrates JS configs to @theme, and refactors deprecated class names.',
    bnAnswer: 'Tailwind v3 থেকে v4-এ মাইগ্রেট করতে npx @tailwindcss/upgrade কমান্ডটি রান করুন। এই সিএলআই (CLI) টুলটি স্বয়ংক্রিয়ভাবে সিএসএস ফাইল আপডেট করে, tailwind.config.js কে @theme ব্লকে রূপান্তর করে এবং পুরোনো ক্লাসগুলো ঠিক করে।',
    enExplanation: `### Explanation
Tailwind provides an automated CLI utility to handle the bulk of v3 to v4 migration:
- **The upgrade command**: \`npx @tailwindcss/upgrade\`
- **What it does**:
  1. **CSS conversion**: Replaces old \`@tailwind\` directives with \`@import "tailwindcss";\`.
  2. **Config Migration**: Parses \`tailwind.config.js\` and appends custom theme colors/screens into the CSS file inside the \`@theme\` block.
  3. **Class Refactoring**: Updates deprecated class names (like \`text-opacity-50\` to modern color slash format \`text-black/50\`).
  4. **Package upgrades**: Detects packages in your \`package.json\` and prompts upgrades.

### Real-World Example
Migrating a large client website manually would take hours and involve risks of missed files. Running \`npx @tailwindcss/upgrade\` in the terminal root performs 95% of the updates automatically, prompting manual checks only for complex custom JavaScript plugins.

### Best Practice
Commit all changes in Git before running the migration tool. This allows you to inspect the git diff line-by-line and revert any unwanted automatic changes safely.

### Common Mistakes
Running the upgrade script without checking for deprecated CSS styles afterward. Always verify your layouts and check console outputs after compilation.

### Code Example
\`\`\`bash
# Run migration in your project root folder
npx @tailwindcss/upgrade

# The tool will output modified files:
# - src/index.css (Updated imports and @theme configurations)
# - tailwind.config.js (Renamed or removed if fully migrated)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৩ থেকে ৪ সংস্করণে প্রজেক্ট সহজে কনভার্ট করতে একটি অটোমেটেড সিএলআই (CLI) টুল সরবরাহ করা হয়েছে:
- **আপগ্রেড কমান্ড**: \`npx @tailwindcss/upgrade\`
- **টুলটির কার্যক্রম**:
  ১. **সিএসএস রূপান্তর**: পুরোনো \`@tailwind\` ডিরেক্টিভ সরিয়ে \`@import "tailwindcss";\` বসায়।
  ২. **কনফিগ মাইগ্রেশন**: \`tailwind.config.js\` ফাইল রিড করে থিম ভ্যালুগুলোকে সিএসএসের \`@theme\` ব্লকে রূপান্তর করে।
  ৩. **ক্লাস রিফ্যাক্টরিং**: পুরোনো অকেজো ক্লাসগুলোকে (যেমন: \`text-opacity-50\`) আধুনিক ফরম্যাটে (\`text-black/50\`) পরিবর্তন করে।
  ৪. **প্যাকেজ আপডেট**: ডিপেন্ডেন্সি ফাইল আপডেট করার পরামর্শ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
হাতে কলমে একটি বড় প্রজেক্ট মাইগ্রেট করতে অনেক সময় লাগবে ও ভুলের ঝুঁকি থাকবে। রুট ফোল্ডারে \`npx @tailwindcss/upgrade\` কমান্ডটি রান করলে কয়েকে সেকেন্ডে ৯৫% কাজ নিজে থেকেই সম্পন্ন হয়ে যায়।

### উত্তম অনুশীলন
আপগ্রেড কমান্ড চালানোর আগে আপনার কোডগুলো গিট (Git) এ কমিট করে রাখুন। এতে কোডে কোনো বড় ভুল হলে সহজে রিভার্ট (revert) করা যাবে।

### সাধারণ ভুলসমূহ
আপগ্রেড স্ক্রিন কমান্ড দেওয়ার পর বিল্ড এরর চেক না করা। আপগ্রেড শেষে কম্পাইলার এরর ও ব্রাউজারের কনসোল আউটপুট ভালো করে চেক করে নেওয়া দরকার।

### কোড উদাহরণ
\`\`\`bash
# প্রজেক্ট রুট ফোল্ডারে মাইগ্রেশন টুল রান করুন
npx @tailwindcss/upgrade

# টুলটি নিচের ফাইলগুলো আপডেট করবে:
# - src/index.css (ইমপোর্ট ও @theme ব্লক যোগ হবে)
# - tailwind.config.js (প্রয়োজন না থাকলে ডিলিট হতে পারে)
\`\`\``
  },
  {
    id: 'css-138',
    title: 'Explain how to define custom shadows (box-shadow) in Tailwind v4 inside @theme.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Visuals', 'Shadows', 'Tailwind v4'],
    enAnswer: 'In Tailwind v4, custom shadows are declared inside @theme using variables starting with --shadow-*. Defining --shadow-accent: 0 4px 6px -1px rgb(0 0 0 / 0.1) creates the shadow-accent utility.',
    bnAnswer: 'Tailwind v4-এ কাস্টম শ্যাডো (box-shadow) @theme ব্লকে --shadow-* প্রিফিক্স যুক্ত ভেরিয়েবল দিয়ে ঘোষণা করা হয়। --shadow-accent: 0 4px 6px -1px rgb(0 0 0 / 0.1) লিখলে shadow-accent ক্লাস তৈরি হয়।',
    enExplanation: `### Explanation
Box shadows are vital for creating UI depth:
- **Registering custom shadows**: Add variables with \`--shadow-\` prefix inside \`@theme\`:
  \`\`\`css
  @theme {
    --shadow-neon: 0 0 15px oklch(0.6 0.25 320);
  }
  \`\`\`
  This instantly maps the class \`shadow-neon\` to the specified shadow dimensions and colors.
- **Multiple Shadows**: Separate multiple shadow declarations with commas just like standard CSS box-shadow properties.

### Real-World Example
If your design system defines a soft glowing backdrop card style, you declare the shadow offsets in the stylesheet under \`--shadow-card-glow\`, then write \`shadow-card-glow hover:shadow-neon\` on interactive UI boxes.

### Best Practice
Configure shadow values using translucent colors (like \`rgba(0,0,0,0.1)\` or oklch transparent mixes) so that shadows look realistic on both light and dark background environments.

### Common Mistakes
Writing the CSS shadow shorthand with incorrect order parameters, which causes browsers to discard the generated shadow rule entirely.

### Code Example
\`\`\`css
@import "tailwindcss";

@theme {
  /* Define custom shadow preset styles */
  --shadow-glow-indigo: 0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -4px rgba(79, 70, 229, 0.3);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বক্স শ্যাডো ইউজার ইন্টারফেসে ডেপথ বা স্তর তৈরি করতে অত্যন্ত সাহায্য করে:
- **কাস্টম শ্যাডো তৈরি**: থিম ব্লকের ভেতর \`--shadow-\` প্রিফিক্স দিয়ে কাস্টম শ্যাডো লিখুন:
  \`\`\`css
  @theme {
    --shadow-neon: 0 0 15px oklch(0.6 0.25 320);
  }
  \`\`\`
  এটি লেখার সাথে সাথেই \`shadow-neon\` ক্লাসটি সক্রিয় হয়ে যাবে।
- **একাধিক শ্যাডো**: সাধারণ সিএসএসের মতোই একাধিক শ্যাডো ভ্যালুর মাঝে কমা দিয়ে একসাথে লেখা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
কার্ডে সুন্দর বেগুনী রঙের গ্লো ইফেক্ট দিতে থিম ফাইলে শ্যাডো ভেরিয়েবল লিখে সরাসরি এইচটিএমএলে \`shadow-glow-indigo\` ইউটিলিটি ক্লাস ব্যবহার করা যায়।

### উত্তম অনুশীলন
শ্যাডোর কালার দেওয়ার সময় হালকা অপাসিটির কালার বা ট্রান্সপারেন্ট মিক্স ব্যবহার করুন যাতে লাইট ও ডার্ক উভয় থিমেই শ্যাডো দেখতে স্বাভাবিক লাগে।

### সাধারণ ভুলসমূহ
সিএসএস শ্যাডো সিনট্যাক্সের প্যারামিটারগুলো ভুল ক্রমানুসারে লেখা, যার ফলে ব্রাউজার স্টাইলটি বাতিল করে দেয়।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

@theme {
  /* কাস্টম বেগুনী রঙের গ্লোয়িং শ্যাডো স্টাইল ঘোষণা */
  --shadow-glow-indigo: 0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -4px rgba(79, 70, 229, 0.3);
}
\`\`\``
  },
  {
    id: 'css-139',
    title: 'Explain the use of the open variant for dialog, details, and popovers in Tailwind v4.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Interactive', 'Selectors', 'Tailwind v4'],
    enAnswer: 'The open: variant in Tailwind v4 targets elements that have the open attribute or popover-open state, allowing developers to style open modals, active dropdown details, or dialog overlays natively.',
    bnAnswer: 'Tailwind v4-এর open: ভ্যারিয়েন্টটি সেই এলিমেন্টগুলোকে টার্গেট করে যেগুলোতে open অ্যাট্রিবিউট বা popover-open স্টেট রয়েছে, যা মোডাল, ড্রপডাউন বা ডায়ালগ বক্স খোলা থাকা অবস্থায় স্টাইল দেওয়ার সুবিধা দেয়।',
    enExplanation: `### Explanation
Modern HTML has native interactive tags like \`<dialog>\`, \`<details>\`, and the Popover API that toggle states without requiring JavaScript libraries:
- **The \`open:\` variant**: Applies styles automatically when the browser flags the element as active/open:
  \`\`\`html
  <details class="open:bg-slate-100"> ... </details>
  \`\`\`
- For \`<dialog>\` elements, \`open:opacity-100\` styles the modal dialog only when the dialog is shown using \`.showModal()\`.
- This removes the need to manually toggle classes like \`.is-open\` or \`.active\` using state hooks.

### Real-World Example
When styling an FAQ accordion list using HTML \`<details>\` tags, you write \`open:border-indigo-500\` to change the card border color dynamically when the user expands the question.

### Best Practice
Leverage native HTML elements combined with the \`open:\` variant to build lightweight web components without bloating your bundle with React/Vue state managers.

### Common Mistakes
Expecting the \`open:\` variant to work on generic elements like \`<div>\` without the correct HTML \`open\` attribute or popover activation configurations.

### Code Example
\`\`\`html
<!-- Native details card styling with open variant -->
<details class="border border-slate-200 rounded-lg p-4 open:border-indigo-500 transition-colors">
  <summary class="font-semibold cursor-pointer select-none">How does the open variant work?</summary>
  <div class="mt-2 text-slate-600">
    It queries the native DOM state automatically, changing border colors and displaying content.
  </div>
</details>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আধুনিক এইচটিএমএলে জাভাস্ক্রিপ্ট ছাড়াই টগল হতে পারে এমন ট্যাগ রয়েছে যেমন \`<dialog>\`, \`<details>\` এবং Popover API:
- **\`open:\` ভ্যারিয়েন্ট**: এলিমেন্টটি যখন ব্রাউজারে সক্রিয় বা খোলা অবস্থায় থাকে, তখন স্বয়ংক্রিয়ভাবে সিএসএস অ্যাপ্লাই করে:
  \`\`\`html
  <details class="open:bg-slate-100"> ... </details>
  \`\`\`
- \`<dialog>\` বা ডায়ালগ বক্স \`.showModal()\` দিয়ে ওপেন করা হলে এটি ওপেন স্টাইল রেন্ডার করে।
- এর ফলে ম্যানুয়ালি স্টেট টগল করে \`.is-open\` বা \`.active\` এর মতো ক্লাস ডাইনামিকভাবে অ্যাড বা রিমুভ করার প্রয়োজন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
এফএকিউ (FAQ) অ্যাকোর্ডিয়ান তৈরি করতে \`<details>\` ট্যাগ ব্যবহার করে ইনলাইনে \`open:border-indigo-500\` লিখে দিলে ইউজার ক্লিক করে কন্টেন্ট দেখার সময় বর্ডার বেগুনী হয়ে যাবে।

### উত্তম অনুশীলন
ভারী জাভাস্ক্রিপ্ট লাইব্রেরি ব্যবহার না করে ব্রাউজারের নেティブ ফিচারের সাথে টেইলউইন্ডের \`open:\` ক্লাস দিয়ে দ্রুত ইন্টারঅ্যাক্টিভ লেআউট তৈরি করুন।

### সাধারণ ভুলসমূহ
সাধারণ \`<div>\` এর ওপর \`open:\` ক্লাস দিয়ে কাজ করানোর চেষ্টা করা যেখানে কোনো নেティブ ওপেন অ্যাট্রিবিউট নেই।

### কোড উদাহরণ
\`\`\`html
<!-- নেটিভ details ট্যাগ এবং open ভ্যারিয়েন্ট দিয়ে তৈরি FAQ কার্ড -->
<details class="border border-slate-200 rounded-lg p-4 open:border-indigo-500 transition-colors">
  <summary class="font-semibold cursor-pointer select-none">How does the open variant work?</summary>
  <div class="mt-2 text-slate-600">
    It queries the native DOM state automatically, changing border colors and displaying content.
  </div>
</details>
\`\`\``
  },
  {
    id: 'css-140',
    title: 'How does the new peer and group variant syntax support arbitrary child targeting in Tailwind v4?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Selectors', 'Interactive', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 introduces advanced arbitrary child targeting inside group-* and peer-* selectors. Writing group-[:hover_&]:text-indigo-600 allows deep responsive styling based on custom parent state wrappers.',
    bnAnswer: 'Tailwind v4-এ group-* এবং peer-* সিলেক্টরের ভেতরে শক্তিশালী কাস্টম চাইল্ড টার্গেটিং যুক্ত করা হয়েছে। group-[:hover_&]:text-indigo-600 লেখার মাধ্যমে প্যারেন্ট এলিমেন্টের কাস্টম হোভার স্টেট দিয়ে ভেতরের নির্দিষ্ট চাইল্ডকে স্টাইল করা যায়।',
    enExplanation: `### Explanation
In previous versions, applying hover styles to a deep child element when the parent container was hovered required registering nested class variables.
Tailwind v4 simplifies this using arbitrary selector brackets inside parent indicators:
- **\`group-[selector]\`**: Evaluates custom selector criteria. Writing \`group-[:hover_&]:text-blue-500\` targets this element specifically when the parent group element is hovered.
- **\`peer-[selector]\`**: Evaluates sibling components.
- The ampersand (\`&\`) inside the selector brackets represents the current element, allowing you to position target modifiers precisely in compiled CSS nesting blocks.

### Real-World Example
In a complex navigation list item card containing text, icons, and buttons: hovering over the list item can trigger a slide animation on the button only if the list has a certain class. You write \`group-[:hover_&]:translate-x-2\` on the button.

### Best Practice
Use named groups (like \`group/card\` and \`group-hover/card:\`) when building complex nested structures. Resort to arbitrary child selectors only when styling legacy DOM outputs you cannot edit directly.

### Common Mistakes
Forgetting the ampersand (\`&\`) character inside the selector query (e.g. \`group-[:hover]:text-red\` is incorrect; it must be \`group-[:hover_&]:text-red\`).

### Code Example
\`\`\`html
<!-- Arbitrary group selector configuration targeting child styles -->
<div class="group border p-4 rounded-xl hover:bg-slate-50 cursor-pointer">
  <span class="text-slate-700 transition-colors group-[:hover_&]:text-indigo-600 group-[:hover_&]:font-semibold">
    Hover card to animate text color
  </span>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে কোনো প্যারেন্ট কন্টেইনার হোভার করলে তার অনেক গভীরে থাকা কোনো নির্দিষ্ট চাইল্ডকে স্টাইল করতে অনেক জটিল সিলেক্টর লিখতে হতো।
টেইলউইন্ড ৪ সংস্করণে এটি অনেক সহজ করা হয়েছে:
- **\`group-[selector]\`**: ব্র্যাকেটের ভেতর কাস্টম সিলেক্টর রুলস সেট করা যায়। যেমন: \`group-[:hover_&]:text-blue-500\` লিখলে প্যারেন্টে হোভার হওয়া মাত্রই নির্দিষ্ট চাইল্ডটি নীল কালার পাবে।
- **\`peer-[selector]\`**: এটি ভাইবোন বা প্রতিবেশী (sibling) এলিমেন্টের স্টেট অনুযায়ী কাজ করে।
- ব্র্যাকেটের ভেতরের অ্যাম্পারস্যান্ড (\`&\`) চিহ্নটি বর্তমান চাইল্ড এলিমেন্টকে নির্দেশ করে, যা সিএসএস আউটপুটে সঠিক চেইনিং করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট কার্ডে টাইটেল, ছবি ও অ্যাড-টু-কার্ট বাটন আছে। প্রোডাক্ট কার্ডটি হোভার করলে কেবল কার্ডের ভেতরের বাটনটি ডান দিকে ১ ইঞ্চি সরবে—এরূপ ডিজাইন করতে বাটনে \`group-[:hover_&]:translate-x-2\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
নেস্টেড কন্টেইনারের ক্ষেত্রে নেমড গ্রুপ (যেমন: \`group/card\` ও \`group-hover/card:\`) ব্যবহার করা বেশি নিরাপদ ও পাঠযোগ্য।

### সাধারণ ভুলসমূহ
আরবিট্রারি সিলেক্টর ব্র্যাকেটের ভেতর অ্যাম্পারস্যান্ড (\`&\`) চিহ্নটি দিতে ভুলে যাওয়া (যেমন: \`group-[:hover]\` লিখলে এটি কাজ করবে না, লিখতে হবে \`group-[:hover_&]\`)।

### Code Example
\`\`\`html
<!-- প্যারেন্ট হোভার করলে চাইল্ড টেক্সট স্টাইল পরিবর্তন করার নিয়ম -->
<div class="group border p-4 rounded-xl hover:bg-slate-50 cursor-pointer">
  <span class="text-slate-700 transition-colors group-[:hover_&]:text-indigo-600 group-[:hover_&]:font-semibold">
    Hover card to animate text color
  </span>
</div>
\`\`\``
  },
  {
    id: 'css-141',
    title: 'How does the Oxide compiler optimize CSS bundle size through tree-shaking?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Oxide', 'Optimization', 'Tailwind v4'],
    enAnswer: 'The Oxide compiler optimizes Tailwind CSS bundles by performing static code scanning (tree-shaking) at build time. It scans templates for utilized classes and bundles only those, discarding unused CSS rules entirely.',
    bnAnswer: 'Oxide কম্পাইলার বিল্ড করার সময় স্ট্যাটিক কোড স্ক্যানিং বা ট্রি-শেকিং (tree-shaking) চালিয়ে সিএসএস ফাইলের সাইজ অপ্টিমাইজ করে। এটি কোড ফাইলগুলোতে ব্যবহৃত ইউটিলিটিগুলো খুঁজে কেবল সেগুলোই বান্ডলে যোগ করে, বাকি অব্যবহৃত কোড বাদ দেয়।',
    enExplanation: `### Explanation
With thousands of potential utility classes, compiling all of them would result in a multi-megabyte stylesheet.
- **Oxide Tree-shaking**:
  - The Rust engine scans all your template files (HTML, JS, JSX, TS, TSX) during the bundler build sequence.
  - It extracts classes that match Tailwind's pattern library statically.
  - It constructs the output CSS stylesheet from scratch, adding definitions only for the classes present in the scanned code.
- Consequently, whether your project is small or huge, the compiled CSS bundle remains optimized (typically under **15KB - 30KB** gzipped).

### Real-World Example
If your theme registers 50 color variants, but you only use \`bg-brand-indigo\` and \`bg-brand-red\` across your HTML templates, Oxide discards the style definitions for the other 48 colors, preventing bundle size inflation.

### Best Practice
Always write complete, static class names in your templates. Avoid dynamic string concatenation (e.g. write \`active ? "text-red-500" : "text-blue-500"\` instead of \`"text-" + color + "-500"\`). If the compiler cannot find the static string, it cannot bundle the style.

### Common Mistakes
Creating class names dynamically by assembling parts of strings at runtime. Because the Oxide engine does not run JavaScript execution, it cannot read dynamically concatenated tokens, resulting in missing styles in production builds.

### Code Example
\`\`\`typescript
// Bad Practice: Oxide compiler cannot parse this string dynamically
const ColorButton = ({ colorState }) => {
  return <button className={"bg-" + colorState + "-600 p-4 text-white"}>Click</button>;
};

// Good Practice: Complete static classes are fully tree-shakeable and detected
const AccessibleButton = ({ isActive }) => {
  return (
    <button className={"p-4 text-white " + (isActive ? "bg-green-600" : "bg-slate-655")}>
      Click
    </button>
  );
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ডে হাজার হাজার ইউটিলিটি ক্লাস রয়েছে, সব যদি একসাথে কম্পাইল হতো তবে ফাইলের সাইজ কয়েক মেগাবাইট ছাড়িয়ে যেত।
- **Oxide ট্রি-শেকিং**:
  - রাস্ট ইঞ্জিন বিল্ড দেওয়ার সময় প্রজেক্টের সব ফাইল স্ক্যান করে।
  - এটি কোডে কোন কোন টেইলউইন্ড ক্লাস সত্যি ব্যবহার করা হয়েছে তা খুঁজে বের করে।
  - কেবল ওই ক্লাসগুলোর সিএসএস স্টাইল দিয়ে ফাইনাল স্টাইলশিট ফাইলটি নতুন করে তৈরি করে।
- এর ফলে প্রজেক্ট যতই বড় হোক না কেন, ফাইনাল সিএসএস ফাইল অত্যন্ত ছোট (গড়ে মাত্র **১৫কেবি - ৩০কেবি**) থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
থিম ফাইলে আপনি ৫০টি কাস্টম কালার প্যালেট ডিফাইন করেছেন। কিন্তু প্রজেক্টের কোডে কেবল ২টি কালার ব্যবহার করেছেন। Oxide কম্পাইলার বাকি ৪৮টি কালারের ক্লাস জেনারেট করবে না, যা সাইট স্পিড বাড়ায়।

### উত্তম অনুশীলন
সবসময় কোডে পূর্ণ ক্লাস নেম লিখুন। ডাইনামিক স্ট্রিং জোড়াতালি দেওয়া এড়িয়ে চলুন (যেমন: \`active ? "text-red-500" : "text-blue-500"\` লিখুন; \`"text-" + color + "-500"\` লিখবেন না)। কম্পাইলার স্ট্যাটিক লেখা না দেখলে ক্লাস চিনতে পারে না।

### সাধারণ ভুলসমূহ
জাভাস্ক্রিপ্ট ভেরিয়েবল দিয়ে ক্লাসের নাম জোড়াতালি দিয়ে রেন্ডার করা। বিল্ড ইঞ্জিন কোড রান না করেই স্ট্যাটিক টেক্সট পড়ে ক্লাস রিড করে, তাই ডাইনামিক ক্লাস প্রডাকশনে কাজ করে না।

### কোড উদাহরণ
\`\`\`typescript
// ভুল নিয়ম: Oxide কম্পাইলার রানটাইম ছাড়া এটি রিড করতে পারবে না
const ColorButton = ({ colorState }) => {
  return <button className={"bg-" + colorState + "-600 p-4 text-white"}>Click</button>;
};

// সঠিক নিয়ম: সম্পূর্ণ টেক্সট থাকায় কম্পাইলার সহজেই ক্লাসটি জেনারেট করবে
const AccessibleButton = ({ isActive }) => {
  return (
    <button className={"p-4 text-white " + (isActive ? "bg-green-600" : "bg-slate-655")}>
      Click
    </button>
  );
};
\`\`\``
  },
  {
    id: 'css-142',
    title: 'How does Tailwind v4 handle custom border styles and outline rings?',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Layout', 'Borders', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 manages custom borders using border-* classes mapping to theme values. Outline rings (ring-*) use native outline styles or shadows depending on focus state configurations.',
    bnAnswer: 'Tailwind v4-এ কাস্টম বর্ডার border-* ক্লাসের সাহায্যে থিম মানগুলোর সাথে ম্যাপ করে কাজ করে। ফোকাস স্টাইলের ওপর ভিত্তি করে রিং ক্লাসগুলো (ring-*) নেটিভ আউটলাইন বা শ্যাডো ব্যবহার করে।',
    enExplanation: `### Explanation
Borders and focus ring behaviors are optimized for visual quality in Tailwind v4:
- **Border configuration**: Set custom widths, colors, and styles. Using \`border-brand-primary\` maps to variables defined in the theme.
- **Rings**: Used to highlight focus items. Instead of creating extra element boxes, \`ring-*\` classes use box-shadow styling or modern CSS outline specifications to prevent layout displacement.
- In v4, setting ring offsets is configured to work cleanly with browser borders without causing pixel distortion.

### Real-World Example
If your custom design requires a button with a solid blue border and a soft glow outline ring when focused, you write \`border-2 border-blue-600 focus:ring-4 focus:ring-blue-300\`.

### Best Practice
Keep border styles consistent across forms. Use outline rings primarily for keyboard accessibility focuses rather than styling background shapes.

### Common Mistakes
Confusing ring styles and borders. Remember that borders take up actual layout space (changing element size), whereas rings do not impact element spacing calculations.

### Code Example
\`\`\`html
<!-- Element utilizing border and focus ring properties in Tailwind v4 -->
<input type="text" placeholder="Focus me..." 
       class="border-2 border-slate-200 rounded-lg p-2 transition-all duration-200
              focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none" />
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে বর্ডার ও ফোকাস রিংয়ের ভিজ্যুয়াল কোয়ালিটি আরও উন্নত করা হয়েছে:
- **বর্ডার কনফিগারেশন**: কাস্টম উইডথ, কালার এবং স্টাইল দেওয়া যায়। যেমন: \`border-brand-primary\` থিমের কালার কোড ম্যাপ করে।
- **রিং (Ring)**: এটি ফোকাস করা আইটেম হাইলাইট করতে ব্যবহৃত হয়। কন্টেইনারের সাইজ পরিবর্তন না করেই রিং ক্লাসগুলো সিএসএস বক্স-শ্যাডো বা নেটিভ আউটলাইন ব্যবহার করে রিং তৈরি করে।
- ৪ সংস্করণে রিং অফসেট ব্রাউজার বর্ডারের সাথে পিক্সেল রেন্ডারিং ঠিক রেখে চমৎকার দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
ফোকাস করার সময় ইনপুট বক্সে হালকা বেগুনী গ্লো ইফেক্ট আনতে বর্ডারের সাথে রিং ইউটিলিটি ক্লাসটি কল করা হয়: \`border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100\`।

### উত্তম অনুশীলন
ফর্মের এলিমেন্টগুলোতে বর্ডার ও রিং ডিজাইনের সামঞ্জস্য রাখুন। রিং মূলত কিবোর্ড ফোকাসের ভিজ্যুয়াল ফিডব্যাক হিসেবে ব্যবহার করা উচিত।

### সাধারণ ভুলসমূহ
বর্ডার ও রিং এর মধ্যে গুলিয়ে ফেলা। বর্ডার এলিমেন্টের উইডথ বা সাইজ বাড়িয়ে দেয়, কিন্তু রিং এলিমেন্টের সাইজের ওপর কোনো প্রভাব ফেলে না।

### কোড উদাহরণ
\`\`\`html
<!-- বর্ডার এবং ফোকাস রিং ইউটিলিটি সহ ইনপুট বক্স -->
<input type="text" placeholder="Focus me..." 
       class="border-2 border-slate-200 rounded-lg p-2 transition-all duration-200
              focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none" />
\`\`\``
  },
  {
    id: 'css-143',
    title: 'Explain how background-clip, background-origin, and background-attachment are configured in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Visuals', 'Backgrounds', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 features utility classes for background clip, origin, and attachment: bg-clip-text, bg-origin-border, and bg-fixed. These compile directly to corresponding CSS properties natively.',
    bnAnswer: 'Tailwind v4-এ ব্যাকগ্রাউন্ড ক্লিপ, অরিজিন ও অ্যাটাচমেন্টের জন্য ক্লাস রয়েছে: bg-clip-text, bg-origin-border এবং bg-fixed। এগুলো সরাসরি সংশ্লিষ্ট CSS ব্যাকগ্রাউন্ড প্রোপার্টির সাথে ম্যাপ করে।',
    enExplanation: `### Explanation
These properties control the placement and clipping boundaries of background styles:
1. **\`background-clip\`**: Controls if backgrounds extend inside borders, padding, or text:
   - \`bg-clip-text\`: Crops the background color/gradient to the outline of the text characters.
2. **\`background-origin\`**: Defines the baseline placement coordinates:
   - \`bg-origin-padding\`: Starts background placement inside the padding box.
3. **\`background-attachment\`**: Controls scroll behavior:
   - \`bg-fixed\`: Fixes background placement relative to browser viewport, creating parallax scrolling effects.

### Real-World Example
To create a premium gradient text title, apply a background gradient, set \`bg-clip-text\` and change text color to transparent: \`bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent\`.

### Best Practice
Combine \`bg-clip-text\` with responsive gradients to make titles pop. When using \`bg-fixed\`, be aware that mobile browser rendering performance can drop slightly on older devices.

### Common Mistakes
Applying \`bg-clip-text\` but forgetting to set the text color to \`text-transparent\`. The background gradient will remain hidden behind solid text colors.

### Code Example
\`\`\`html
<!-- Premium gradient text header in Tailwind v4 -->
<h1 class="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
  Interactive Design System
</h1>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এই প্রোপার্টিগুলো ব্যাকগ্রাউন্ড স্টাইলের অবস্থান এবং ক্লিপিং বাউন্ডারি নিয়ন্ত্রণ করে:
১. **\`background-clip\`**: ব্যাকগ্রাউন্ড বর্ডার, প্যাডিং নাকি টেক্সটের ভেতর ক্রপ হবে তা ঠিক করে:
   - \`bg-clip-text\`: ব্যাকগ্রাউন্ড কালার বা গ্রেডিয়েন্টকে কেটে ফন্টের আকারের সমান করে।
২. **\`background-origin\`**: ব্যাকগ্রাউন্ড কোন স্থান থেকে বসানো শুরু হবে তা ঠিক করে:
   - \`bg-origin-padding\`: প্যাডিং এরিয়ার ভেতর থেকে ব্যাকগ্রাউন্ড রেন্ডার করে।
৩. **\`background-attachment\`**: স্ক্রল ট্র্যাকিং নিয়ন্ত্রণ করে:
   - \`bg-fixed\`: ব্যাকগ্রাউন্ড ছবিকে স্ক্রিনের সাথে ফিক্সড রেখে প্যারালাক্স স্ক্রলিং ইফেক্ট দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
টাইটেলে কালারফুল নিওন গ্রেডিয়েন্ট ফন্ট ইফেক্ট দিতে ব্যাকগ্রাউন্ড গ্রেডিয়েন্টের সাথে \`bg-clip-text\` এবং টেক্সট কালার ট্রান্সপারেন্ট (\`text-transparent\`) ব্যবহার করা হয়।

### উত্তম অনুশীলন
গ্রেডিয়েন্ট টেক্সটের রিডেবিলিটি ধরে রাখতে ফন্টের সাইজ বড় ও বোল্ড (\`font-extrabold\`) রাখুন।

### সাধারণ ভুলসমূহ
\`bg-clip-text\` ব্যবহার করা কিন্তু টেক্সটের মূল ফন্ট কালার ট্রান্সপারেন্ট বা স্বচ্ছ করতে ভুলে যাওয়া। এতে ফন্ট কালার ব্যাকগ্রাউন্ড গ্রেডিয়েন্টকে ঢেকে রাখবে।

### কোড উদাহরণ
\`\`\`html
<!-- টেইলউইন্ড ৪ এর গ্রেডিয়েন্ট টেক্সট টাইটেল -->
<h1 class="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
  Interactive Design System
</h1>
\`\`\``
  },
  {
    id: 'css-144',
    title: 'How does Tailwind v4 handle modern CSS features like CSS cascade layers (@layer)?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'CSS Cascade Layers', 'Architecture', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 uses standard CSS cascade layers (@layer base, @layer utilities, etc.) under the hood. It compiles styles into these native browser layers to ensure correct specificity and styling overrides.',
    bnAnswer: 'Tailwind v4 ব্যাকগ্রাউন্ডে স্ট্যান্ডার্ড CSS ক্যাসকেড লেয়ার (@layer base, @layer utilities) ব্যবহার করে। এটি ব্রাউজারের নেটিভ লেয়ারে স্টাইল কম্পাইল করে যাতে স্পেসিফিসিটি এবং স্টাইল ওভাররাইড সঠিক থাকে।',
    enExplanation: `### Explanation
CSS Cascade Layers (\`@layer\`) are native browser specifications that control CSS specificity, preventing specificity wars:
- **Tailwind v4 native mapping**: Instead of custom parser mocks, Tailwind v4 compiles style categories into standard browser cascade layers:
  1. \`base\`: Reset rules and basic HTML tags.
  2. \`components\`: Reusable UI element configurations.
  3. \`utilities\`: High-specificity helper classes.
- Standard styles compiled inside \`@layer utilities\` will always override \`base\` styles regardless of their declaration order in the CSS file.

### Real-World Example
If you declare an element with \`class="p-4 pt-6"\`, the specific padding utility in the utilities layer easily overrides the base padding defaults without requiring \`!important\` tags.

### Best Practice
Utilize native layers inside your CSS entry point to structure custom global overrides.

### Common Mistakes
Writing custom base styles directly at the bottom of the style sheet without utilizing cascade layers, causing them to be compiled outside the layers and potentially disrupting the intended cascade priority.

### Code Example
\`\`\`css
@layer base {
  body {
    background-color: var(--color-slate-50);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিএসএস ক্যাসকেড লেয়ার (\`@layer\`) হলো ব্রাউজারের নেটিভ স্পেসিফিকেশন যা স্পেসিফিসিটি নিয়ন্ত্রণ করে ক্লাসের ওভারল্যাপ জটলা দূর করে:
- **টেইলউইন্ড ৪ ম্যাপিং**: টেইলউইন্ড ৪ ব্রাউজারের স্ট্যান্ডার্ড লেয়ারে কোড কম্পাইল করে:
  ১. \`base\`: বেসিক রিসেট ও ট্যাগ ডিজাইন।
  ২. \`components\`: রিইউজেবল বড় কম্পোনেন্ট স্টাইল।
  ৩. \`utilities\`: হাই-প্রায়োরিটি বা শর্টকাট ইউটিলিটি ক্লাস।
- এর ফলে সিএসএস ফাইলে যে ক্রমানসারেই লেখা হোক না কেন, ইউটিলিটি লেয়ারের ক্লাসগুলো সবসময় বেস লেয়ারের স্টাইলের ওপরে জয়ী হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইনলাইনে \`class="p-4 pt-6"\` লিখলে কোনো কনফ্লিক্ট ছাড়া প্যাডিং টপ ৬ পিক্সেল রেন্ডার হয়, যার জন্য সিএসএসে জোর করে \`!important\` লিখতে হয় না।

### উত্তম অনুশীলন
থিম ফাইল কনফিগার করার সময় কাস্টম গ্লোবাল রিসেট কোডগুলো সবসময় \`@layer base\` ব্লকের ভেতর রাখুন।

### সাধারণ ভুলসমূহ
ক্যাসকেড লেয়ার ব্যবহার না করে স্টাইল ফাইলের একদম নিচে অগোছালোভাবে বেস ওভাররাইড লেখা, যার ফলে বিল্ড হওয়ার পর স্টাইলের অগ্রাধিকার এলোমেলো হয়ে যেতে পারে।

### কোড উদাহরণ
\`\`\`css
@import "tailwindcss";

/* Structure base overrides inside standard CSS layers */
@layer base {
  h1 {
    color: var(--color-indigo-950);
    font-weight: 800;
  }
}

@layer utilities {
  .text-glow-accent {
    text-shadow: 0 0 10px var(--color-indigo-400);
  }
}
\`\`\``
  },
  {
    id: 'css-145',
    title: 'What are functional utilities in Tailwind v4 and how do they support dynamic calculations?',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Oxide', 'Shorthands', 'Tailwind v4'],
    enAnswer: 'Functional utilities in Tailwind v4 allow classes to calculate properties dynamically at compile time. Arbitrary parameters inside brackets (like w-[calc(100%-20px)]) are parsed natively without custom JS plugins.',
    bnAnswer: 'Tailwind v4-এর ফাংশনাল ইউটিলিটি ক্লাসগুলোকে বিল্ড টাইমে ডাইনামিক মান হিসাব করতে সাহায্য করে। ব্র্যাকেটের ভেতরের আরবিট্রারি মান (যেমন w-[calc(100%-20px)]) কোনো জেএস প্লাগইন ছাড়াই ব্রাউজার কোডে রূপান্তরিত হয়।',
    enExplanation: `### Explanation
In older Tailwind setups, support for arbitrary calculations was restricted or required writing custom values inside a Javascript config map.
In **Tailwind v4**:
- The Oxide compiler parses bracket expressions inside utility classes directly:
  \`\`\`html
  <div class="h-[calc(100vh-var(--nav-height))]"> ... </div>
  \`\`\`
- This enables dynamic fluid sizing, viewport offsets, and math operations written entirely inside layout markup.
- The compiler outputs standardized, browser-friendly CSS rules dynamically.

### Real-World Example
If your dashboard container must subtract sidebar and header margins dynamically, you apply \`w-[calc(100%-var(--sidebar-w))] mt-[var(--header-h)]\`.

### Best Practice
Keep arbitrary calculations simple. If a dynamic sizing calculation is used multiple times, register it as a named variable inside the \`@theme\` block.

### Common Mistakes
Writing blank spaces inside the brackets when declaring calculations (e.g. \`h-[calc(100vh - 80px)]\`). This breaks class parsing; write it without spaces: \`h-[calc(100vh-80px)]\`.

### Code Example
\`\`\`html
<!-- Dynamic calculation application using functional utilities -->
<main class="w-full h-[calc(100vh-4rem)] p-[clamp(1rem,3vw,2rem)] bg-slate-50">
  <p>Responsive Layout Container</p>
</main>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ডের পুরোনো সংস্করণে কাস্টম গাণিতিক হিসাব বা আরবিট্রারি ব্র্যাকেটের ব্যবহার কিছুটা সীমাবদ্ধ ছিল বা কনফিগ ফাইলের সাহায্য নিতে হতো।
**টেইলউইন্ড ৪ সংস্করণে**:
- Oxide কম্পাইলার ব্র্যাকেটের ভেতরের কাস্টম গাণিতিক সমীকরণ সরাসরি পার্স করে সিএসএস তৈরি করে:
  \`\`\`html
  <div class="h-[calc(100vh-var(--nav-height))]"> ... </div>
  \`\`\`
- এর ফলে হেডার বা নেভিগেশন হাইট বাদ দিয়ে বডির ডাইনামিক হাইট ইনলাইনেই ডিক্লেয়ার করা যায়।
- কম্পাইলার ব্রাউজারের উপযোগী করে কোড জেনারেট করে।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডের সাইডবার বাদ দিয়ে বাকি অংশের উইডথ ডাইনামিক করতে চাইলে কন্টেইনারে সরাসরি \`w-[calc(100%-var(--sidebar-w))]\` লিখে দেওয়া যায়।

### উত্তম অনুশীলন
জটিল ক্যালকুলেশন বারবার রিপিট করতে হলে তা ইনলাইনে ব্র্যাকেট দিয়ে না লিখে থিম ফাইলে ভেরিয়েবল দিয়ে রেজিস্টার করে নিন।

### সাধারণ ভুলসমূহ
ব্র্যাকেটের ভেতরের গাণিতিক চিহ্নের দুই পাশে স্পেস দেওয়া (যেমন: \`h-[calc(100vh - 80px)]\`)। স্পেস দিলে ক্লাস ভেঙে যায়, তাই স্পেস ছাড়া লিখুন: \`h-[calc(100vh-80px)]\`।

### কোড উদাহরণ
\`\`\`html
<!-- soapbox and dynamic math dynamic container -->
<main class="w-full h-[calc(100vh-4rem)] p-[clamp(1rem,3vw,2rem)] bg-slate-50">
  <p>Responsive Layout Container</p>
</main>
\`\`\``
  },
  {
    id: 'css-146',
    title: 'Explain the pointer variants (pointer-coarse, pointer-fine) and hover queries in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Interactive', 'Media Queries', 'Tailwind v4'],
    enAnswer: 'The pointer-coarse and pointer-fine variants in Tailwind v4 map to standard media hover queries. They allow developers to apply styles based on whether the device uses a touch screen (coarse) or mouse (fine).',
    bnAnswer: 'Tailwind v4-এর pointer-coarse এবং pointer-fine ভ্যারিয়েন্টগুলো স্ট্যান্ডার্ড মিডিয়া হোভার কুয়েরির সাথে ম্যাপ করে। এগুলো ব্যবহারকারী টাচ স্ক্রিন (coarse) নাকি মাউস (fine) ব্যবহার করছেন তার ওপর ভিত্তি করে স্টাইল দেয়।',
    enExplanation: `### Explanation
Traditional hover styles (\`hover:bg-blue-650\`) can trigger weird sticky states on mobile phones when touched:
- **Tailwind v4 solution**: Pointer media variants query the device input type:
  - \`pointer-coarse\`: Matches devices with touch inputs (smartphones, tablets).
  - \`pointer-fine\`: Matches devices with precise pointing tools (mice, trackpads).
  - \`hover\`: Optimized in v4 to prevent sticky behaviors on mobile screens.

### Real-World Example
If your button needs larger padding on mobile screens to make it easy to tap, you can apply \`pointer-coarse:py-4 pointer-fine:py-2\`.

### Best Practice
Combine pointer media queries with focus rings to ensure interactive components are optimized for both touch displays and desktop layouts.

### Common Mistakes
Assuming that screen width determines touch capability. Use pointer media queries instead of screen breakpoints to target touch devices.

### Code Example
\`\`\`html
<!-- Button optimized for touch vs mouse input devices -->
<button class="bg-indigo-600 text-white rounded-lg transition-colors
               pointer-coarse:px-6 pointer-coarse:py-4 
               pointer-fine:px-4 pointer-fine:py-2 pointer-fine:hover:bg-indigo-700">
  Submit Action
</button>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্মার্টফোনে সাধারণ হোভার স্টাইল (\`hover:bg-blue-650\`) টাচ করার পর অনেক সময় স্ক্রিনে স্টিকি বা আটকে থাকে যা ইউজারদের বিরক্ত করে:
- **টেইলউইন্ড ৪ সমাধান**: পয়েন্টার মিডিয়া কোয়েরির সাহায্যে ইউজারের ইনপুট ডিভাইস চেনা যায়:
  - \`pointer-coarse\`: টাচস্ক্রিন ফোন বা ট্যাব ডিটেক্ট করে।
  - \`pointer-fine\`: মাউস বা ট্র্যাকপ্যাড যুক্ত কম্পিউটার ডিটেক্ট করে।
  - টেইলউইন্ড ৪-এর হোভার অটোমেটিকালি মোবাইলের স্টিকি ইফেক্ট প্রতিরোধ করতে অপ্টিমাইজড।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইলে বাটন টাচ করা সহজ করতে প্যাডিং বড় করা এবং ডেসকটপে মাউস দিয়ে কাজ করতে সাধারণ সাইজ রাখতে \`pointer-coarse:py-4 pointer-fine:py-2\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
ডিভাইসের রেসপন্স ঠিক রাখতে স্ক্রিন ব্রেকপয়েন্টের বদলে পয়েন্টার কোয়েরি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে কেবল ছোট স্ক্রিনের ডিভাইস মানেই টাচস্ক্রিন। ডেসকটপ মনিটরেও টাচ সুবিধা থাকতে পারে, তাই পয়েন্টার মিডিয়া কোয়েরি ব্যবহার করা সবচেয়ে নিরাপদ।

### কোড উদাহরণ
\`\`\`html
<!-- টাচস্ক্রিন ও মাউস ডিভাইসের জন্য অপ্টিমাইজড বাটন -->
<button class="bg-indigo-650 text-white rounded-lg transition-colors
               pointer-coarse:px-6 pointer-coarse:py-4 
               pointer-fine:px-4 pointer-fine:py-2 pointer-fine:hover:bg-indigo-700">
  Submit Action
</button>
\`\`\``
  },
  {
    id: 'css-147',
    title: 'Explain how to configure list-style-type and custom bullet points in Tailwind v4.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Layout', 'Typography', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 manages custom bullet lists using list-* classes. Declaring --list-style-type-square: square inside the @theme block creates the list-square utility class.',
    bnAnswer: 'Tailwind v4-এ কাস্টম লিস্ট ও বুলেট পয়েন্ট list-* ক্লাসের মাধ্যমে নিয়ন্ত্রণ করা হয়। @theme ব্লকে --list-style-type-square: square ঘোষণা করলে list-square ইউটিলিটি ক্লাস তৈরি হয়।',
    enExplanation: `### Explanation
Configuring bullet indicators is simplified in Tailwind v4:
- **List utilities**: Includes standard configurations like \`list-disc\`, \`list-decimal\`, and \`list-none\`.
- **Custom Indicators**: Register custom list styles in the theme directive:
  \`\`\`css
  @theme {
    --list-style-type-roman: lower-roman;
  }
  \`\`\`
  This creates \`list-roman\` for display layouts.
- Combine list style declarations with \`list-inside\` or \`list-outside\` to control bullet alignment.

### Real-World Example
If your catalog requirements specify a legal document index showing roman numbers, you declare the style mapping in your CSS and apply \`list-roman pl-6\` to the ordered list.

### Best Practice
Ensure lists have adequate left padding (like \`pl-6\`) when using bullet markers to prevent list indicators from rendering outside the layout boundaries.

### Common Mistakes
Applying \`list-disc\` to a list element but keeping list paddings at zero, which clips the bullet icons off the edge of the container.

### Code Example
\`\`\`html
<!-- Custom list rendering in Tailwind v4 -->
<ol class="list-decimal pl-6 space-y-2 text-slate-700">
  <li>First milestone outline</li>
  <li>Second milestone review</li>
</ol>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেইলউইন্ড ৪ সংস্করণে লিস্ট বুলেট বা নাম্বারিং কাস্টমাইজেশন অনেক সহজ করা হয়েছে:
- **লিস্ট ক্লাস**: এতে \`list-disc\` (গোল বুলেট), \`list-decimal\` (নাম্বার) ইত্যাদি ক্লাস রয়েছে।
- **কাস্টম টাইপ**: থিম ডিরেক্টিভের ভেতর কাস্টম স্টাইল রেজিস্টার করার নিয়ম:
  \`\`\`css
  @theme {
    --list-style-type-roman: lower-roman;
  }
  \`\`\`
  এর পর পেজে সরাসরি \`list-roman\` ক্লাসটি ব্যবহার করা যায়।
- বুলেটের অ্যালাইনমেন্ট ঠিক করতে \`list-inside\` বা \`list-outside\` ক্লাসগুলো কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
আইন সংক্রান্ত ডকুমেন্ট বা অফিসিয়াল ডকুমেন্টে রোমান সংখ্যা প্রদর্শন করতে থিমে রোমান স্টাইল ম্যাপ করে ইনলাইনে ব্যবহার করা যায়।

### উত্তম অনুশীলন
বুলেট পয়েন্টগুলো যাতে কেটে না যায় বা কন্টেইনারের বাইরে চলে না যায়, তার জন্য লিস্টের সাথে অবশ্যই পর্যাপ্ত বামে প্যাডিং (যেমন: \`pl-6\`) দিন।

### সাধারণ ভুলসমূহ
লিস্ট ট্যাগ অ্যাপ্লাই করা কিন্তু মার্জিন বা প্যাডিং ০ রাখা, যার ফলে বুলেটের চিহ্নগুলো পেজের বাম পাশে হাইড হয়ে যায়।

### কোড উদাহরণ
\`\`\`html
<!-- টেইলউইন্ড ৪ এর সাধারণ অর্ডারড লিস্ট লেআউট -->
<ol class="list-decimal pl-6 space-y-2 text-slate-700">
  <li>First milestone outline</li>
  <li>Second milestone review</li>
</ol>
\`\`\``
  },
  {
    id: 'css-148',
    title: 'Explain how Tailwind v4 optimizes the compilation of nested @apply rules.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Oxide', 'Apply', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 optimizes nested @apply rules by compiling them in a single static sweep. The Oxide engine flattens nested CSS layer overrides directly to prevent runtime styling conflicts.',
    bnAnswer: 'Tailwind v4 নেস্টেড @apply নিয়মগুলোকে একক স্ট্যাটিক সুইপের মাধ্যমে অপ্টিমাইজড করে কম্পাইল করে। Oxide ইঞ্জিন নেস্টেড সিএসএস লেয়ার ওভাররাইডগুলোকে সরাসরি ফ্ল্যাট বা সরল করে দেয় যাতে স্পেসিফিসিটি জটলা না বাড়ে।',
    enExplanation: `### Explanation
In legacy systems, compiling nested apply structures required repeatedly invoking parser scripts, which bogged down compiler performance.
- **Oxide Flattening Engine**:
  - In v4, when the compiler finds a nested \`@apply\` rule inside custom layers, it resolves all class definitions concurrently.
  - It flattens the properties directly into the parent selector block.
  - This eliminates nested specificity layers in the final output sheet, generating clean, readable CSS files.

### Real-World Example
If your CSS declares \`.btn { @apply rounded-lg; }\` and you also declare \`.btn-primary { @apply btn bg-blue-500; }\`, Tailwind v4 flattens the definitions so \`.btn-primary\` resolves directly to the final properties without creating recursive selectors.

### Best Practice
Limit applying custom classes inside other custom classes. Keep class structures simple to help the compiler run optimization passes quickly.

### Common Mistakes
Creating recursive apply loops (e.g., class A applies class B, and class B applies class A). This creates compile-time errors or infinite build loops.

### Code Example
\`\`\`css
/* index.css - Correct flat compilation hierarchy */
.card-base {
  @apply bg-white border border-slate-200 rounded-xl p-6;
}

.card-highlight {
  /* Compiles cleanly with flattened shadow and border overrides */
  @apply card-base border-indigo-500 shadow-lg;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পুরোনো জেনারেশন বিল্ডারে নেস্টেড বা এক ক্লাসের ভেতর অন্য ক্লাস অ্যাপ্লাই করার সময় কম্পাইলার বারবার রান হতো, যা বিল্ড স্পিড কমিয়ে দিত।
- **Oxide ফ্ল্যাটেনিং ইঞ্জিন**:
  - ৪ সংস্করণে কম্পাইলার যখন কোনো নেস্টেড \`@apply\` রুলস খুঁজে পায়, তখন সব ক্লাস রিলেশনকে একবারে স্ট্যাটিকভাবে সমাধান করে।
  - এটি ভেতরের সব সিএসএস ভ্যালু সরাসরি মূল সিলেক্টরে ফ্ল্যাট করে বসিয়ে দেয়।
  - এর ফলে ডুপ্লিকেট সিএসএস জেনারেশন বন্ধ হয় ও ফাইনাল কোড ক্লিন থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ধরা যাক \`.card-base\` ক্লাসে রাউন্ড বর্ডার আছে। আপনি \`.card-highlight\` ক্লাসে \`@apply card-base\` ব্যবহার করলে কম্পাইলার অতিরিক্ত ক্লাস রেফারেন্স না রেখে সরাসরি ভ্যালুটি ম্যাপ করে দেয়।

### উত্তম অনুশীলন
সিএসএসের জটিল রিকার্সিভ মিক্সিন তৈরি করা এড়িয়ে চলুন। কোড সিম্পল রাখলে বিল্ড স্পিড সর্বোচ্চ ফাস্ট থাকে।

### সাধারণ ভুলসমূহ
রিকার্সিভ লুপ তৈরি করা (যেমন ক্লাস ক-তে খ অ্যাপ্লাই করা এবং খ-তে পুনরায় ক অ্যাপ্লাই করা)। এতে বিল্ড এরর দেখা দেবে।

### কোড উদাহরণ
\`\`\`css
/* index.css - টেইলউইন্ড ৪ এ সঠিক ক্লাস ফ্ল্যাটেনিং এর নিয়ম */
.card-base {
  @apply bg-white border border-slate-200 rounded-xl p-6;
}

.card-highlight {
  /* card-base এর সব রুলসহ বর্ডার আপডেট করে নতুন ক্লাস তৈরি হবে */
  @apply card-base border-indigo-500 shadow-lg;
}
\`\`\``
  },
  {
    id: 'css-149',
    title: 'How do you customize native focus rings on form controls using Tailwind v4 utilities?',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['TailwindCSS', 'Forms', 'Interactive', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 customizes native focus rings using focus-visible:ring-* and focus-visible:outline-* utilities. This ensures styling updates apply natively during keyboard navigations.',
    bnAnswer: 'Tailwind v4-এ ফর্ম কন্ট্রোলের নেティブ ফোকাস রিং focus-visible:ring-* এবং focus-visible:outline-* ইউটিলিটি দিয়ে কাস্টমাইজ করা হয়। এটি কিবোর্ড নেভিগেশনের সময় স্বয়ংক্রিয়ভাবে সঠিক ফোকাস স্টাইল দেয়।',
    enExplanation: `### Explanation
Forms require clear visual focus states to meet accessibility standards:
- **\`focus-visible:outline-none\`**: Removes the browser's default black/blue outline ring.
- **\`focus-visible:ring-2\`**: Adds a custom border ring around the form input element.
- **\`focus-visible:ring-offset-2\`**: Adds a small transparent space between the input border and the focus ring, separating details clearly.

### Real-World Example
For a custom email signup form button, you use \`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500\` to style the focused input box.

### Best Practice
Always preserve focus ring styling on input controls. Ensure the contrast ratio between the ring indicator and the background meets accessibility standards.

### Common Mistakes
Completely removing focus outlines using \`focus:outline-none\` without providing any alternative focus-visible ring styles.

### Code Example
\`\`\`html
<!-- Input form control with custom accessibility focus rings -->
<input type="email" placeholder="Enter your email" 
       class="border border-slate-300 rounded-lg px-4 py-2 w-full
              focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফর্মের ইনপুট ফিল্ডগুলোতে ফোকাস স্টাইল কাস্টমাইজ করা অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ডের জন্য জরুরি:
- **\`focus-visible:outline-none\`**: ব্রাউজারের ডিফল্ট বাজে আউটলাইন বর্ডারটি সরিয়ে দেয়।
- **\`focus-visible:ring-2\`**: ইনপুটের চারদিকে কাস্টম রিং বা আউটলাইন তৈরি করে।
- **\`focus-visible:ring-offset-2\`**: ইনপুটের বর্ডার এবং রিং এর মাঝখানে সামান্য ফাঁকা জায়গা বা অফসেট তৈরি করে যা দেখতে আকর্ষণীয় লাগে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ইমেইল সাবমিট ফর্মের ইনপুট ফিল্ডে মাউস বা কিবোর্ড ট্যাব দিয়ে ফোকাস করার সময় রিং ও অফসেট ক্লাস কল করে ডিজাইন সুন্দর করা যায়।

### উত্তম অনুশীলন
ইনপুট ফিল্ড ও বাটনে ফোকাস রিং সবসময় সচল রাখুন। রিং কালারটি এমন হওয়া উচিত যা ব্যাকগ্রাউন্ড থেকে সহজে নজরে পড়ে।

### সাধারণ ভুলসমূহ
ফর্ম ইনপুটে সরাসরি \`focus:outline-none\` ব্যবহার করা কিন্তু কোনো কাস্টম রিং ভ্যালু না দেওয়া। এর ফলে কিবোর্ড ব্যবহারকারীরা ফর্ম পূরণ করতে পারেন না।

### কোড উদাহরণ
\`\`\`html
<!-- কাস্টম ফোকাস রিং ও অফসেট সহ ফর্ম ইনপুট ফিল্ড -->
<input type="email" placeholder="Enter your email" 
       class="border border-slate-300 rounded-lg px-4 py-2 w-full
              focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
\`\`\``
  },
  {
    id: 'css-150',
    title: 'Explain how custom cursor styles and touch-action modes are managed in Tailwind v4.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['TailwindCSS', 'Interactive', 'Layout', 'Tailwind v4'],
    enAnswer: 'Tailwind v4 handles custom cursors and touch actions using cursor-* and touch-* classes. Custom cursor properties are configured by declaring variables inside the @theme block.',
    bnAnswer: 'Tailwind v4-এ কাস্টম কার্সর এবং টাচ অ্যাকশন cursor-* এবং touch-* ক্লাসের সাহায্যে নিয়ন্ত্রণ করা হয়। @theme ব্লকে ভেরিয়েবল ঘোষণার মাধ্যমে কাস্টম কার্সর প্রোপার্টি কনফিগার করা যায়।',
    enExplanation: `### Explanation
Controlling mouse cursors and gesture events improves mobile-first user interfaces:
- **Cursor Classes**: Includes default pointer states: \`cursor-pointer\`, \`cursor-wait\`, \`cursor-not-allowed\`.
- **Custom cursors in @theme**: Register custom pointer images directly inside your theme CSS:
  \`\`\`css
  @theme {
    --cursor-zoom-in: zoom-in;
  }
  \`\`\`
- **Touch Actions (\`touch-*\`)**: Defines how a user can swipe or scroll container areas on mobile devices:
  - \`touch-pan-y\`: Allows vertical swiping but disables double-tap zooms.
  - \`touch-none\`: Disables all browser gesture zooms/scrolls, useful for custom canvas drawing surfaces.

### Real-World Example
If your page features a custom gallery lightbox slider, you set \`cursor-zoom-in\` on images and \`touch-pan-x\` on the container to allow touch sliding without page vertical jumps.

### Best Practice
Only use \`touch-none\` on elements that have customized JavaScript gesture event listeners (like drag-and-drop dashboards or signature drawing boxes) to prevent breaking mobile zoom actions.

### Common Mistakes
Applying \`touch-none\` globally, which locks mobile users out of scrolling your website.

### Code Example
\`\`\`html
<!-- Interactive gallery card with cursor zoom and touch controls -->
<div class="touch-pan-x overflow-hidden border rounded-2xl w-80 bg-white">
  <img src="/images/photo.jpg" alt="Gallery Preview" 
       class="cursor-zoom-in w-full h-48 object-cover" />
  <p class="p-4 text-sm text-slate-500">Swipe horizontally to view next photo.</p>
</div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাউসের কার্সর ও মোবাইলের টাচ জেসচার নিয়ন্ত্রণ করা ব্যবহারকারীর ইউজার এক্সপেরিয়েন্সকে অনেক উন্নত করে:
- **কার্সর ক্লাস**: এতে স্ট্যান্ডার্ড ক্লাস রয়েছে যেমন: \`cursor-pointer\` (বাটন ক্লিক কার্সর), \`cursor-wait\` (লোডিং), \`cursor-not-allowed\` (ডিজেবলড)।
- **কাস্টম কার্সর**: থিম ব্লকের ভেতর কাস্টম কার্সর ইমেজ বা ভ্যালু ঘোষণা করা যায়:
  \`\`\`css
  @theme {
    --cursor-zoom-in: zoom-in;
  }
  \`\`\`
- **টাচ অ্যাকশন (\`touch-*\`)**: মোবাইলে সোয়াইপ বা জুম করার আচরণ নিয়ন্ত্রণ করে:
  - \`touch-pan-y\`: কেবল ওপরে-নিচে স্ক্রল সাপোর্ট করে কিন্তু ডাবল-ট্যাপ জুম বন্ধ করে।
  - \`touch-none\`: ব্রাউজারের সব ধরনের ডিফল্ট জেসচার বন্ধ করে দেয়, যা কাস্টম পেইন্টিং বা ড্রয়িং ক্যানভাসে অত্যন্ত দরকারী।

### বাস্তব-ভিত্তিক উদাহরণ
গ্যালারির ছবির স্লাইডারে ওপরে-নিচে স্ক্রল সচল রেখে ডানে-বামে সোয়াইপ কন্ট্রোল করতে কন্টেইনারে \`touch-pan-x\` এবং ছবিতে \`cursor-zoom-in\` ক্লাস ব্যবহার করা হয়।

### উত্তম অনুশীলন
কাস্টম ড্রয়িং ক্যানভাস বা কাস্টম ড্র্যাগ-অ্যান্ড-ড্রপ গেমে কেবল \`touch-none\` ব্যবহার করুন। সাধারণ স্ক্রল করার পেজে এটি দিলে মোবাইলে স্ক্রল বন্ধ হয়ে যাবে।

### সাধারণ ভুলসমূহ
ভুল করে বডি বা মেইন কন্টেইনারে \`touch-none\` ক্লাস দিয়ে রাখা, যার ফলে মোবাইল থেকে ওয়েবসাইটে প্রবেশ করলে পেজ স্ক্রল করা যায় না।

### কোড উদাহরণ
\`\`\`html
<!-- টাচ সোয়াইপ কন্ট্রোল এবং জুম কার্সর সহ ফটো গ্যালারি কার্ড -->
<div class="touch-pan-x overflow-hidden border rounded-2xl w-80 bg-white">
  <img src="/images/photo.jpg" alt="Gallery Preview" 
       class="cursor-zoom-in w-full h-48 object-cover" />
  <p class="p-4 text-sm text-slate-500">Swipe horizontally to view next photo.</p>
</div>
\`\`\``
  }
];
