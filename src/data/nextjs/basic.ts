import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'nextjs-1',
    title: 'What is Next.js and why should you use it over a standard React application?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Next.js', 'React', 'SSR', 'Web Architecture'],
    enAnswer: 'Next.js is a production-ready React framework that adds server-side rendering, static site generation, route optimization, image and font optimization, and built-in API routing. It handles routing and server integration out of the box, making React apps highly SEO-friendly and fast.',
    bnAnswer: 'Next.js হলো প্রোডাকশন-রেডি একটি রিঅ্যাক্ট ফ্রেমওয়ার্ক যা সার্ভার-সাইড রেন্ডারিং, স্ট্যাটিক সাইট জেনারেশন, রুট অপ্টিমাইজেশন, ইমেজ ও ফন্ট অপ্টিমাইজেশন এবং বিল্ট-ইন এপিআই রাউটিং সুবিধা প্রদান করে। এটি রাউটিং ও সার্ভার ইন্টিগ্রেশন সরাসরি হ্যান্ডেল করায় রিঅ্যাক্ট অ্যাপ দ্রুত ও এসইও (SEO) ফ্রেন্ডলি হয়।',
    enExplanation: `### Explanation
React is a client-side rendering (CSR) library. When a user visits a React app, the server returns an empty HTML file and a large Javascript bundle. The browser compiles and renders the page (hydration).
- **SEO Issue**: Web crawlers see an empty page, degrading search rankings.
- **Performance**: Large JS bundles delay First Contentful Paint (FCP).

Next.js solves this by rendering pages on the server (pre-rendering).
1. **Server-Side Rendering (SSR)**: Generates HTML on the server for each request.
2. **Static Site Generation (SSG)**: Pre-renders pages at build time.
3. **Zero Configuration**: Built-in bundling (Webpack/Turbopack), routing, and compiling.

### Real-World Example
For an e-commerce storefront or online blog:
- Using standard React means search engines struggle to index your products/posts.
- Next.js pre-renders each product details page on the server. Search engine bots index the rich HTML instantly, driving organic traffic.

### Best Practice
Choose Next.js when building public-facing web applications requiring high SEO visibility, fast initial page loads, or complex server-side data fetching. Use React alone for internal dashboards where SEO is irrelevant.

### Common Mistakes
Using standard React client-side data fetching (\`useEffect\` with \`fetch\`) for critical metadata fields instead of leveraging Next.js server-side features.

### Code Example
\`\`\`javascript
// Next.js Server Component (rendered on server, zero JS sent to client by default)
export default async function Page() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} - \${p.price}</li>)}
      </ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট একটি ক্লায়েন্ট-সাইড রেন্ডারিং (CSR) লাইব্রেরি। যখন কোনো ইউজার রিঅ্যাক্ট সাইটে যান, সার্ভার একটি ফাঁকা HTML ফাইল ও বড় জাভাস্ক্রিপ্ট বান্ডেল পাঠায়। ব্রাউজারকে এটি লোড করে পেজটি বানাতে হয়।
- **এসইও সমস্যা**: সার্চ ইঞ্জিনের ক্রলারগুলো পেজে কোনো তথ্য পায় না, ফলে সাইট র‍্যাঙ্ক করে না।
- **পারফরম্যান্স**: বড় বান্ডেল ডাউনলোডে সময় লাগায় প্রথমবার পেজ লোড হতে দেরি হয়।

Next.js সার্ভারে পেজ রেন্ডার করে এটি সমাধান করে:
১. **Server-Side Rendering (SSR)**: প্রতি রিকোয়েস্টে সার্ভারে HTML পেজ তৈরি করে ব্রাউজারে পাঠায়।
২. **Static Site Generation (SSG)**: প্রোডাকশন বিল্ড তৈরির সময়ই সমস্ত পেজ প্রাক-রেন্ডার করে রাখে।
৩. **বিল্ট-ইন অপ্টিমাইজেশন**: ইমেজ কম্প্রেস করা, কোড-স্প্লিটিং এবং রাউটিং কনফিগারেশন ছাড়াই থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স বা ব্লগ সাইটের ক্ষেত্রে:
- সাধারণ রিঅ্যাক্ট ব্যবহার করলে সার্চ ইঞ্জিন আপনার প্রোডাক্টগুলো ইনডেক্স করতে পারবে না।
- নেক্সট জেএস ব্যবহার করলে প্রতিটি প্রোডাক্টের পেজ সার্ভার থেকেই প্রাক-রেন্ডার হয়ে পুরো HTML ফাইল ব্রাউজারে যায়, যা সার্চ ইঞ্জিনের ক্রলার খুব সহজেই রিড করে গুগলে র‍্যাঙ্ক করতে পারে।

### উত্তম অনুশীলন
যখন আপনার পাবলিকলি এক্সেসযোগ্য ওয়েব অ্যাপ তৈরি করতে হবে যেখানে গুগল সার্চ র‍্যাঙ্কিং (SEO) এবং দ্রুত লোডিং স্পিড দরকার, তখন Next.js ব্যবহার করুন। ভেতরের প্রাইভেট ড্যাশবোর্ড বা প্যানেল যেখানে গুগল ইনডেক্সের প্রয়োজন নেই, সেখানে সাধারণ রিঅ্যাক্ট ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
গুরুত্বপূর্ণ এসইও তথ্যের জন্য Next.js এর সার্ভার ডাটা ফেচিং মেথড এভয়েড করে সাধারণ রিঅ্যাক্টের মতো ক্লায়েন্টে \`useEffect\` চালিয়ে ডাটা লোড করা।

### Code Example
\`\`\`javascript
// Next.js সার্ভার কম্পোনেন্ট (সার্ভারে রেন্ডার হয়, ক্লায়েন্টে কোনো জাভাস্ক্রিপ্ট পাঠানো হয় না)
export default async function Page() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  
  return (
    <div>
      <h1>প্রোডাক্ট লিস্ট</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} - \${p.price}</li>)}
      </ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-2',
    title: 'What is the difference between the App Router (app/) and the Pages Router (pages/) in Next.js?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['App Router', 'Pages Router', 'Routing', 'RSC'],
    enAnswer: 'The Pages Router maps routes to files inside the pages/ directory and handles rendering on the client by default. The App Router (introduced in v13) maps routes using folder structure inside the app/ directory, uses React Server Components (RSC) by default for server-side rendering, and supports nested layouts.',
    bnAnswer: 'Pages Router-এ pages/ ফোল্ডারের ফাইল অনুযায়ী রুট সেট হতো এবং ডিফল্টভাবে ক্লায়েন্টে রেন্ডার হতো। App Router (v13 এ আসা) app/ ফোল্ডারের সাব-ফোল্ডার দিয়ে রুট তৈরি করে, ডিফল্টভাবে রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC) ব্যবহার করে এবং নেস্টেড লেআউট সাপোর্ট করে।',
    enExplanation: `### Explanation
Next.js supports two routing architectures:

| Feature | Pages Router (\`pages/\`) | App Router (\`app/\`) |
|---|---|---|
| **Routing File Pattern** | \`pages/about.js\` | \`app/about/page.js\` |
| **Default Component Type**| Client Components | React Server Components (RSC) |
| **Layout System** | Global via \`_app.js\`, custom per page | Native nested layouts (\`layout.js\`) |
| **Data Fetching** | \`getServerSideProps\`, \`getStaticProps\` | Async/await fetch directly in component |
| **Streaming & Suspense** | Limited support | Native streaming via \`loading.js\` / Suspense |

The App Router is built on modern React features like Server Components, allowing you to reduce the client-side Javascript footprint significantly since code is executed on the server.

### Real-World Example
In a multi-page portal (e.g. news dashboard):
- Under the App Router, you can create a layout folder for \`/dashboard\` containing a navigation sidebar. When navigating between \`/dashboard/settings\` and \`/dashboard/analytics\`, only the specific page component re-renders while the sidebar preserves its state, saving network resource calls.

### Best Practice
Use the **App Router** for all new projects. It is the future standard of Next.js, offers superior performance through Server Components, and simplifies layout sharing.

### Common Mistakes
Creating files like \`app/about.js\` expecting it to work as a route. In the App Router, files must be named \`page.tsx\` inside nested folders (e.g., \`app/about/page.tsx\`).

### Code Example
\`\`\`typescript
// App Router File: app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <aside className="w-64 bg-gray-100">Sidebar Navigation</aside>
      <main className="flex-1">{children}</main>
    </section>
  );
}

// App Router File: app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Welcome to Dashboard Content</h1>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির মতো নেক্সট জেএস-এও আর্কিটেকচারাল পরিবর্তন হয়েছে। দুটি রাউটিং সিস্টেমের মূল তুলনা নিচে দেওয়া হলো:

| ফিচার | Pages Router (\`pages/\`) | App Router (\`app/\`) |
|---|---|---|
| **ফাইলের গঠন** | \`pages/about.js\` | \`app/about/page.js\` |
| **ডিফল্ট কম্পোনেন্ট**| ক্লায়েন্ট কম্পোনেন্ট | রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC) |
| **লেআউট সিস্টেম** | \`_app.js\` দিয়ে গ্লোবাল লেআউট | নেস্টেড লেআউট ফোল্ডার (\`layout.js\`) |
| **ডাটা ফেচিং** | \`getServerSideProps\` ইত্যাদি | সরাসরি কম্পোনেন্টে async/await fetch |
| **স্ট্রিমিং** | আংশিক সাপোর্ট | \`loading.js\` ও Suspense দিয়ে নেটিভ সাপোর্ট |

App Router রিঅ্যাক্ট সার্ভার কম্পোনেন্টের সুবিধা নিয়ে ক্লায়েন্ট সাইড জাভাস্ক্রিপ্ট অনেক কমিয়ে দেয়, ফলে পেজ স্পিড বৃদ্ধি পায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পোর্টালের ক্ষেত্রে:
- App Router-এ আপনি ড্যাশবোর্ডের জন্য একটি কমন নেভিগেশন সাইডবার লেআউট তৈরি করলেন। যখন ইউজার সেটিংস থেকে অ্যানালিটিক্স পেজে যাবেন, তখন সাইডবারটি অপরিবর্তিত থাকবে ও শুধু পেজের ভেতরের মূল ডাটা চেঞ্জ হবে, যা অনেক ব্যান্ডউইথ বাঁচাবে।

### উত্তম অনুশীলন
নতুন সমস্ত প্রজেক্টে **App Router** ব্যবহার করুন। এটি মঙ্গোডিবির মতো মডার্ন টেকনোলজির সাথে ফাস্ট ডেটা ফেচিং এবং সহজে লেআউট শেয়ার করার স্ট্রাকচার প্রদান করে।

### সাধারণ ভুলসমূহ
App Router-এ \`app/about.js\` নামে ফাইল তৈরি করে রুট আশা করা। এখানে অবশ্যই \`app/about/page.tsx\` ফোল্ডার সিস্টেমে ফাইল তৈরি করতে হবে।

### Code Example
\`\`\`typescript
// App Router File: app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <aside className="w-64 bg-gray-100">সাইডবার নেভিগেশন</aside>
      <main className="flex-1">{children}</main>
    </section>
  );
}

// App Router File: app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>ড্যাশবোর্ড মূল কন্টেন্ট</h1>;
}
\`\`\``
  },
  {
    id: 'nextjs-3',
    title: 'Explain React Server Components (RSC) and how they differ from Client Components in Next.js.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['RSC', 'Server Components', 'Client Components', 'React'],
    enAnswer: 'React Server Components (RSC) render exclusively on the server and do not send JS code to the browser, reducing initial bundle size. Client Components are marked with "use client" directive and can use client-side features like state (useState), effects (useEffect), and browser APIs.',
    bnAnswer: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC) শুধুমাত্র সার্ভারে রেন্ডার হয় এবং ব্রাউজারে কোনো জাভাস্ক্রিপ্ট কোড পাঠায় না, যা বান্ডেল সাইজ কমায়। ক্লায়েন্ট কম্পোনেন্টের ক্ষেত্রে ফাইলের শুরুতে "use client" নির্দেশক থাকে এবং এটি স্টেট (useState), ইফেক্ট (useEffect) ও ব্রাউজার এপিআই ব্যবহার করতে পারে।',
    enExplanation: `### Explanation
In the App Router, every component is a Server Component by default.

**Key Differences:**

| Feature | Server Components (RSC) | Client Components |
|---|---|---|
| **Render Location** | Server only. | Pre-rendered on Server, hydrated on Client. |
| **Client JS Sent** | Zero JS bytes. | Standard React JS bundle size. |
| **State & Hooks** | Cannot use \`useState\`, \`useEffect\`, custom hooks. | Can use all React hooks. |
| **Browser APIs** | Cannot use \`window\`, \`document\`, local storage. | Can use browser APIs. |
| **Security** | Secure to access database keys, secrets directly. | Cannot use server secrets securely. |

### Real-World Example
In a product page details view:
- The product specifications, pricing, and description are static. They are loaded in a **Server Component** directly querying the database.
- The "Add to Cart" button needs click events and dynamic button state. It is separated into a **Client Component** marked with \`"use client"\`.

### Best Practice
Keep the majority of your pages as Server Components. Only push components down to the client (using \`"use client"\`) when interactivity (state, click listeners) or browser-specific APIs are required.

### Common Mistakes
Adding \`"use client"\` to every file in the project. This bypasses the performance and security benefits of React Server Components, effectively reverting your app to client-rendered React.

### Code Example
\`\`\`typescript
// app/product/page.tsx (Server Component by default)
import AddToCartButton from './AddToCartButton';

export default async function ProductPage() {
  // Query database directly from server component
  const product = await db.queryProduct("123");

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* Client Component imported inside Server Component */}
      <AddToCartButton productId={product.id} />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
App Router-এ ডিফল্টভাবে প্রতিটি কম্পোনেন্টই সার্ভার কম্পোনেন্ট হিসেবে কাজ করে।

**মূল পার্থক্যসমূহ:**

| ফিচার | সার্ভার কম্পোনেন্ট (RSC) | ক্লায়েন্ট কম্পোনেন্ট |
|---|---|---|
| **রেন্ডার লোকেশন** | শুধুমাত্র সার্ভারে। | সার্ভারে প্রাক-রেন্ডার এবং ক্লায়েন্টে হাইড্রেটেড। |
| **জাভাস্ক্রিপ্ট ফাইল**| ০ বাইট জেএস। | সাধারণ রিঅ্যাক্ট জেএস বান্ডেল। |
| **স্টেট ও হুক** | \`useState\`, \`useEffect\` ব্যবহার করা যায় না। | সমস্ত রিঅ্যাক্ট হুক ব্যবহার করা যায়। |
| **ব্রাউজার এপিআই** | \`window\`, \`document\` অ্যাক্সেস করতে পারে না। | সরাসরি ব্রাউজার এপিআই ব্যবহার করতে পারে। |
| **নিরাপত্তা** | ডাটাবেস কি বা সিক্রেট সরাসরি ব্যবহার করা নিরাপদ। | ক্লায়েন্ট কোডে সিক্রেট কি ব্যবহার করা যাবে না। |

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট পেজে:
- প্রোডাক্টের বর্ণনা, দাম ও ছবি স্ট্যাটিক ডাটা। এগুলো সরাসরি ডাটাবেস থেকে রিড করে একটি **সার্ভার কম্পোনেন্টে** রেন্ডার করা যায়।
- পেমেন্ট বা "Add to Cart" বাটনটিতে ক্লিক ইভেন্ট ও কাউন্টার স্টেট লাগবে। একে \`"use client"\` দিয়ে একটি আলাদা **ক্লায়েন্ট কম্পোনেন্ট** হিসেবে ডিফাইন করে নিয়ে সার্ভার কম্পোনেন্টের ভেতরে বসিয়ে দেওয়া যায়।

### উত্তম অনুশীলন
অ্যাপের বেশিরভাগ পেজ সার্ভার কম্পোনেন্ট হিসেবে রাখুন। কেবল তখনই কম্পোনেন্টকে ক্লায়েন্টে নিয়ে যান (ফাইলের শুরুতে \`"use client"\` দিয়ে) যখন ইউজার ইন্টারঅ্যাকশন বা ব্রাউজারের এপিআই আবশ্যক।

### সাধারণ ভুলসমূহ
প্রজেক্টের প্রতিটি ফাইলের উপরেই \`"use client"\` লিখে রাখা। এটি সার্ভার কম্পোনেন্টের পারফরম্যান্স ও সিকিউরিটির মূল সুবিধাই নষ্ট করে দেয়।

### Code Example
\`\`\`typescript
// app/product/page.tsx (ডিফল্ট সার্ভার কম্পোনেন্ট)
import AddToCartButton from './AddToCartButton';

export default async function ProductPage() {
  // সরাসরি ডাটাবেস থেকে ডাটা রিড করা
  const product = await db.queryProduct("123");

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* সার্ভার কম্পোনেন্টের ভেতরে ক্লায়েন্ট বাটন ব্যবহার */}
      <AddToCartButton productId={product.id} />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-4',
    title: 'How do you define a Client Component in Next.js App Router, and when should you use one?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Client Components', 'use client', 'Interactivity', 'React Hooks'],
    enAnswer: 'A Client Component is defined by placing the "use client" directive at the very top of the file (before any imports). You should use a Client Component when you need interactivity (useState, useEffect, event listeners like onClick), or when you need browser APIs like window or localStorage.',
    bnAnswer: 'ফাইলের একেবারে ওপরে (যেকোনো ইম্পোর্টের আগে) "use client" নির্দেশক লিখে ক্লায়েন্ট কম্পোনেন্ট ডিফাইন করা হয়। এটি তখন ব্যবহার করা উচিত যখন আপনার ইউজার ইন্টারঅ্যাকশন (useState, useEffect, onClick ইভেন্ট) অথবা ব্রাউজার এপিআই (window, localStorage) এর প্রয়োজন পড়ে।',
    enExplanation: `### Explanation
The \`"use client"\` directive is a boundary marker. It tells the compiler that this file, and all of its imports, belong to the client-rendered subtree.

**When to Use Client Components:**
1. **Interactive UI**: Form inputs, modals, buttons with click/touch handlers.
2. **State & Lifecycle**: Using \`useState()\`, \`useReducer()\`, \`useEffect()\`.
3. **Browser Context**: accessing \`window.location\`, \`localStorage\`, \`navigator.geolocation\`, or geolocation services.
4. **Third-Party Libraries**: React charts, carousels, or animations that rely on DOM APIs.

### Real-World Example
In a search page layout:
- The search bar needs to track the user's keystrokes in a text input using state.
- Since we need \`onChange\` events and a state value, the input bar must be a Client Component.

### Best Practice
Structure your components so that Server Components handle data fetching and pass the raw data as props to smaller Client Components that handle client interaction. This keeps JS bundle sizes minimal.

### Common Mistakes
Writing \`"use client"\` *after* import statements. The directive **must** be the very first line of code in the file, otherwise the compiler will treat it as a Server Component and throw errors when hooks are used.

### Code Example
\`\`\`typescript
// app/components/SearchInput.tsx
"use client"; // Must be the first line of code

import { useState } from 'react';

export default function SearchInput({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border p-2 rounded"
      />
      <p>Searching for: {query}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`"use client"\` ডিক্লেয়ারেশন হলো একটি বাউন্ডারি মার্কার। এটি কম্পাইলারকে বলে যে এই ফাইল এবং এর নিচে ইম্পোর্ট করা সমস্ত ফাইল ব্রাউজার বা ক্লায়েন্ট সাইডে প্রসেস হবে।

**কখন ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করবেন:**
১. **ইন্টারেক্টিভ ইউআই (Interactive UI)**: ফর্ম ইনপুট, মোডাল পপআপ বা ক্লিক ইভেন্ট থাকলে।
২. **স্টেট ও লাইফসাইকেল**: \`useState()\`, \`useReducer()\`, \`useEffect()\` হুক লাগলে।
৩. **ব্রাউজার প্রপার্টি**: \`window.location\`, \`localStorage\` ইত্যাদি অ্যাক্সেস করার প্রয়োজন পড়লে।
৪. **থার্ড-পার্টি লাইব্রেরি**: ড্রপডাউন স্লাইডার বা চার্ট লাইব্রেরি যা ডোমের (DOM) ওপর নির্ভর করে চলে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্চ পেজের ক্ষেত্রে:
- ইনপুট বক্সে কিবোর্ডের টাইপিং ট্র্যাক করার জন্য স্টেটে মান ধরে রাখা দরকার।
- যেহেতু এখানে \`onChange\` এবং \`useState\` প্রয়োজন, তাই সার্চ বক্সকে ক্লায়েন্ট কম্পোনেন্ট হিসেবে ডিক্লেয়ার করতে হবে।

### উত্তম অনুশীলন
ডিজাইন এমনভাবে ভাগ করুন যেন ডাটা লোড হওয়ার মূল কাজটি সার্ভার কম্পোনেন্টে সম্পন্ন হয় এবং প্রাপ্ত ডাটা ছোট কোনো ক্লায়েন্ট কম্পোনেন্টে প্রপস (props) আকারে পাস করে ইন্টারেক্টিভিটি নিয়ন্ত্রণ করা যায়।

### সাধারণ ভুলসমূহ
ফাইলের মাঝখানে বা ইম্পোর্ট লাইনের পরে \`"use client"\` লেখা। এটি অবশ্যই ফাইলের প্রথম লাইনে থাকতে হবে, অন্যথায় রিঅ্যাক্ট একে সার্ভার কম্পোনেন্ট মনে করবে এবং হুক ব্যবহারের কারণে এরর দেখাবে।

### Code Example
\`\`\`typescript
// app/components/SearchInput.tsx
"use client"; // ফাইলের একেবারে প্রথম লাইনে ঘোষণা

import { useState } from 'react';

export default function SearchInput({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border p-2 rounded"
      />
      <p>খোঁজা হচ্ছে: {query}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-5',
    title: 'What is Server-Side Rendering (SSR) and how is it implemented in Next.js App Router?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['SSR', 'Server Rendering', 'Data Fetching', 'SEO'],
    enAnswer: 'Server-Side Rendering (SSR) compiles the page HTML on the server on each request. In the App Router, SSR is implemented dynamically when you perform a dynamic data fetch (such as using fetch with cache: "no-store", or reading dynamic properties like headers() or cookies() in a Server Component).',
    bnAnswer: 'সার্ভার-সাইড রেন্ডারিং (SSR) প্রতি রিকোয়েস্টে সার্ভারে পেজের HTML জেনারেট করে। App Router-এ SSR তখন সক্রিয় হয় যখন কোনো ডাইনামিক ডাটা রিকোয়েস্ট চলে (যেমন: fetch-এ cache: "no-store" ব্যবহার করা, অথবা সার্ভার কম্পোনেন্টে headers() বা cookies() এর মতো ডাইনামিক প্রপার্টি রিড করা)।',
    enExplanation: `### Explanation
In the Pages Router, SSR was declared explicitly using \`getServerSideProps\`. In the App Router, Next.js dynamically infers whether a page is static or server-rendered based on the hooks and fetching configurations used.

**Triggers that turn a Page into SSR (Dynamic Rendering):**
1. **Dynamic Data Fetching**: Using \`fetch(url, { cache: 'no-store' })\` or \`fetch(url, { next: { revalidate: 0 } })\`.
2. **Dynamic APIs**: Reading \`cookies()\` or \`headers()\` inside the component.
3. **Search Params Props**: Accessing the \`searchParams\` prop in a page component.

When any of these are detected, Next.js stops static rendering at build-time and switches the route to Dynamic SSR.

### Real-World Example
In a stock trading dashboard:
- User-specific balance and live stock rates change every second.
- We must read cookies to verify user session and run a live fetch from the finance API.
- Because we read \`cookies()\` and fetch live data, the page uses SSR, sending fresh user-specific details on every refresh.

### Best Practice
Use SSR only for dynamic pages. If a page's content is the same for all users (e.g. Terms of Service, static marketing content), let Next.js compile it statically (SSG) to achieve sub-millisecond response times.

### Common Mistakes
Forgetting that using \`headers()\` or \`cookies()\` at a high-level layout level will force all nested child pages inside that layout to be rendered dynamically (SSR) instead of statically.

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies } from 'next/navigation';

export default async function DashboardPage() {
  // Reading cookies automatically triggers SSR (Dynamic Rendering)
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  // Fetch with cache: 'no-store' forces dynamic server-side rendering
  const res = await fetch('https://api.example.com/user-stats', {
    headers: { Authorization: \`Bearer \${token?.value}\` },
    cache: 'no-store' 
  });
  const stats = await res.json();

  return (
    <div>
      <h1>User Stats</h1>
      <p>Active Balance: {stats.balance}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Pages Router-এ \`getServerSideProps\` ব্যবহার করে সুনির্দিষ্টভাবে SSR ঘোষণা করতে হতো। তবে App Router-এ ডাটা ফেচিং ও হুকের ব্যবহারের ওপর ভিত্তি করে নেক্সট জেএস স্বয়ংক্রিয়ভাবে সিদ্ধান্ত নেয় পেজটি স্ট্যাটিক নাকি ডাইনামিক রেন্ডারিং (SSR) হবে।

**যে কারণে একটি পেজ SSR মোডে চলে যায়:**
১. **ডাইনামিক ডাটা ফেচ**: কুয়েরিতে \`fetch(url, { cache: 'no-store' })\` বা \`revalidate: 0\` বসালে।
২. **ডাইনামিক এপিআই**: সার্ভার কম্পোনেন্টে \`cookies()\` বা \`headers()\` কল করলে।
৩. **সার্চ প্যারামিটার**: পেজে \`searchParams\` প্রপার্টি রিড করা হলে।

এই অপারেশনগুলোর যেকোনো একটি থাকলে নেক্সট জেএস পেজটিকে সার্ভার-সাইড রেন্ডার (Dynamic SSR) করে।

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার ট্রেডিং ড্যাশবোর্ডে:
- গ্রাহকের ব্যালেন্স ও লাইভ স্টক রেট প্রতি সেকেন্ডে বদলায়।
- ইউজারের সেশন যাচাই করতে \`cookies()\` পড়তে হবে এবং ফিন্যান্স এপিআই থেকে লাইভ ডাটা লোড করতে হবে।
- কুয়েরিতে লাইভ ডাটা ও কুকিজ ব্যবহার করায় পেজটি প্রতিবার রিফ্রেশ দিলে একদম নতুন ব্যালেন্স রেন্ডার করে ইউজারকে দেখায়।

### উত্তম অনুশীলন
শুধুমাত্র ডাইনামিক বা ইউজারের পার্সোনাল পেজের জন্য SSR ব্যবহার করুন। যদি পেজের তথ্য সবার জন্য একই হয় (যেমন: টার্মস অফ সার্ভিস, ল্যান্ডিং পেজ), তবে নেক্সট জেএস-কে স্ট্যাটিকলি জেনারেট (SSG) করতে দিন, যা রেসপন্স টাইম কয়েকগুণ কমিয়ে দেয়।

### সাধারণ ভুলসমূহ
রুট লেআউট ফাইলে (\`layout.tsx\`) ভুল করে \`cookies()\` বা \`headers()\` রিড করা। এর ফলে ওই লেআউটের ভেতরে থাকা সমস্ত পেজ জোরপূর্বক SSR মোডে কনভার্ট হয়ে যায়।

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies } from 'next/navigation';

export default async function DashboardPage() {
  // কুকিজ রিড করার সাথে সাথে পেজটি Dynamic SSR-এ রুপান্তরিত হবে
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  // cache: 'no-store' ব্যবহার করে এপিআই থেকে রিয়েল-টাইম ডাটা লোড
  const res = await fetch('https://api.example.com/user-stats', {
    headers: { Authorization: \`Bearer \${token?.value}\` },
    cache: 'no-store' 
  });
  const stats = await res.json();

  return (
    <div>
      <h1>ইউজার ড্যাশবোর্ড</h1>
      <p>বর্তমান ব্যালেন্স: {stats.balance}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-6',
    title: 'What is Static Site Generation (SSG) and how does Next.js implement it?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['SSG', 'Static Rendering', 'Performance', 'Caching'],
    enAnswer: 'Static Site Generation (SSG) pre-renders page HTML and assets at build time. In the App Router, any page that does not use dynamic APIs (like cookies, headers, or searchParams) and fetches data with caching enabled is automatically generated as static (SSG) by default.',
    bnAnswer: 'স্ট্যাটিক সাইট জেনারেশন (SSG) বিল্ড তৈরির সময় পেজের HTML ও অ্যাসেট প্রাক-রেন্ডার করে ফাইল আকারে রেখে দেয়। App Router-এ যে সমস্ত পেজে কোনো ডাইনামিক এপিআই (যেমন: cookies, headers) নেই এবং ডাটা ফেচিং ক্যাশিং মুড অন থাকে, নেক্সট জেএস স্বয়ংক্রিয়ভাবে সেগুলোকে স্ট্যাটিক হিসেবে সেভ করে।',
    enExplanation: `### Explanation
SSG provides the fastest web page load speeds because the server just has to serve pre-compiled files from a CDN or disk, without running any server logic on request.

**Next.js Implementation rules:**
- Next.js scans your codebase during \`next build\`.
- If a route does not invoke dynamic functions, it renders the React code into physical HTML, JSON, and CSS files on disk.
- **Data Caching**: By default, standard \`fetch()\` calls in Server Components cache the response. This means subsequent builds reuse the cached data, securing fast, static files.
- **Revalidation**: You can refresh static pages periodically using Incremental Static Regeneration (ISR).

### Real-World Example
An enterprise company's marketing site has a homepage and pricing details.
- The pricing and features list changes rarely.
- During build, Next.js compiles these pages.
- When millions of users visit, the servers handle the load instantly since they are serving raw, static files hosted on a CDN close to the users.

### Best Practice
Leverage SSG as much as possible. Keep components clean of dynamic dependencies unless necessary. If some parts of the page must be dynamic, consider loading them on the client side using Client Components after the static HTML page hydrates.

### Common Mistakes
Forgetting that static pages do not rerun server code on query request. If you write \`const time = new Date()\` inside a static page, the time value will remain frozen at the exact second the build script ran.

### Code Example
\`\`\`typescript
// app/about/page.tsx (Statically Generated at Build Time)
export default async function AboutPage() {
  // Next.js caches this fetch. The page is compiled statically
  const res = await fetch('https://api.example.com/company-info');
  const info = await res.json();

  return (
    <main className="p-8">
      <h1>About {info.name}</h1>
      <p>{info.description}</p>
    </main>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
SSG পেজের লোডিং স্পিড সবচেয়ে দ্রুত হয়, কারণ রিকোয়েস্ট আসার পর সার্ভারকে নতুন কোনো কোড রান করতে হয় না। সার্ভার কেবল আগে থেকে তৈরি ফাইলটি সরাসরি ইউজারের ব্রাউজারে বা সিডিএন (CDN) থেকে পাঠিয়ে দেয়।

**নেক্সট জেএস কীভাবে এটি বাস্তবায়ন করে:**
- প্রোডাকশন বিল্ড (\`next build\`) দেওয়ার সময় কোড স্ক্যান করা হয়।
- যে সমস্ত রুটে কোনো ডাইনামিক কুকি বা এপিআই থাকে না, সেগুলোকে ব্রাউজার ফ্রেন্ডলি স্ট্যাটিক HTML, JSON ও CSS ফাইলে কম্পাইল করে রাখা হয়।
- **ডাটা ক্যাশিং**: সার্ভার কম্পোনেন্টে স্বাভাবিক \`fetch()\` রিকোয়েস্ট ডিফল্টভাবে ক্যাশ থাকে। ফলে বিল্ড করার সময় এই ডাটা একবার ডাউনলোড হয়ে বিল্ড ফাইলের অংশ হয়ে যায়।
- **রিভ্যালিডেশন**: চাইলে নির্দিষ্ট সময় পর পর পেজের ডাটা আপডেট করা যায় (ISR ব্যবহার করে)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কোম্পানির ল্যান্ডিং পেজে:
- কোম্পানির বিবরণ ও ফিচার লিস্ট মাসে বা বছরে কয়েকবার মাত্র বদলায়।
- বিল্ড করার সময় নেক্সট জেএস এই পেজগুলো সরাসরি সার্ভার ফাইলে সেভ করে রাখে।
- লাখ লাখ ব্যবহারকারী সাইটে এলে সার্ভার ক্র্যাশ করে না, কারণ কোনো ডাটাবেস কোড রান করা ছাড়াই কেবল স্ট্যাটিক রেডি ফাইল সরাসরি সিডিএন থেকে লোড হয়।

### উত্তম অনুশীলন
যতটা সম্ভব পেজগুলোকে SSG মোডে রাখার চেষ্টা করুন। যদি পেজের ক্ষুদ্র কোনো অংশ ডাইনামিক করতে হয়, তবে পেজটি স্ট্যাটিক রেখে সেই অংশটিকে পরে ক্লায়েন্টে ডাটা ফেচিং (\`useEffect\`) দিয়ে লোড করান।

### সাধারণ ভুলসমূহ
মনে রাখা যে স্ট্যাটিক পেজে প্রতি রিকোয়েস্টে নতুন কোড চলে না। আপনি যদি একটি স্ট্যাটিক পেজে \`const time = new Date()\` লেখেন, তবে বিল্ড দেওয়ার সময় যে তারিখ ও সময় ছিল তা-ই বছর জুড়ে ফিক্সড হয়ে থাকবে।

### Code Example
\`\`\`typescript
// app/about/page.tsx (বিল্ড টাইমে স্ট্যাটিক জেনারেট হওয়া পেজ)
export default async function AboutPage() {
  // নেক্সট জেএস এই ফেচ রিকোয়েস্টটি ক্যাশ করে পেজটি স্ট্যাটিক করে দেবে
  const res = await fetch('https://api.example.com/company-info');
  const info = await res.json();

  return (
    <main className="p-8">
      <h1>আমাদের পরিচয়: {info.name}</h1>
      <p>{info.description}</p>
    </main>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-7',
    title: 'Explain how file-based routing works in the Next.js App Router.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Routing', 'App Router', 'Nested Routing'],
    enAnswer: 'In the App Router, Next.js uses folder structure to define routes. Every route segment corresponds to a folder inside the app/ directory, and a route only becomes publicly accessible when a page.tsx file is placed inside that folder.',
    bnAnswer: 'App Router-এ নেক্সট জেএস ফোল্ডার স্ট্রাকচারের ওপর ভিত্তি করে রুট তৈরি করে। প্রতি রুটের জন্য app/ ফোল্ডারের অধীনে নতুন সাব-ফোল্ডার করতে হয় এবং সেই ফোল্ডারের ভেতর একটি page.tsx ফাইল সেভ করলেই কেবল রুটটি কাজ করে।',
    enExplanation: `### Explanation
Next.js uses a directory-based filesystem router:
- **Root Route**: Maps to \`app/page.tsx\`.
- **Nested Route**: A folder like \`app/dashboard/settings/\` maps to \`/dashboard/settings\`.
- **Route Endpoint**: To make a route render HTML, it must contain a file named \`page.js\`, \`page.jsx\`, or \`page.tsx\`.
- **API Endpoint**: To create a backend route, the folder must contain a file named \`route.js\` or \`route.ts\`.

**Special Files reserved by Next.js:**
- \`layout.js\`: Shared UI for nested sub-routes.
- \`loading.js\`: Streaming boundary UI for loading states.
- \`error.js\`: UI fallback for caught runtime errors.
- \`not-found.js\`: UI fallback when resource doesn't exist.

### Real-World Example
If you want to create an about page (\`/about\`) and a billing page (\`/dashboard/billing\`):
1. Create \`app/about/page.tsx\`.
2. Create \`app/dashboard/billing/page.tsx\`.
Navigating to those paths in the browser automatically targets these files.

### Best Practice
Organize related sub-folders cleanly. Use route groups (folders in parentheses, e.g. \`(auth)\`) to structure your files without affecting the public URL paths.

### Common Mistakes
Creating folders without a \`page.tsx\` file (e.g. creating \`app/about/\` containing only CSS or test files) and expecting the URL \`/about\` to display content, which will result in a 404 error page.

### Code Example
\`\`\`
Project Folder Directory Layout:
src/
└── app/
    ├── page.tsx            // URL: /
    ├── layout.tsx          // Root Layout (mandatory)
    ├── about/
    │   └── page.tsx        // URL: /about
    └── dashboard/
        ├── page.tsx        // URL: /dashboard
        └── settings/
            └── page.tsx    // URL: /dashboard/settings
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস ডিরেক্টরি বা ফোল্ডারের ওপরে ভিত্তি করে রাউটার তৈরি করে:
- **মূল রুট (/)**: \`app/page.tsx\` ফাইলের সাথে যুক্ত।
- **নেস্টেড রুট**: \`app/dashboard/settings/\` ফোল্ডারটি ব্রাউজারে \`/dashboard/settings\` রুট তৈরি করে।
- **পেজ ইমপ্লিমেন্টেশন**: কোনো ফোল্ডারকে অ্যাক্সেসযোগ্য করতে তার ভেতর অবশ্যই \`page.js\`/\`page.tsx\` ফাইল থাকতে হবে।
- **এপিআই এন্ডপয়েন্ট**: ব্যাকএন্ড সার্ভিস রুট তৈরি করতে ফোল্ডারে \`route.ts\` ফাইল বসাতে হয়।

**নেক্সট জেএস-এর জন্য রিজার্ভ করা বিশেষ ফাইল:**
- \`layout.js\`: ওই রুটের সব পেজের শেয়ার্ড সাইডবার বা হেডার।
- \`loading.js\`: পেজ লোড হওয়ার সময় দেখানোর মতো কন্টেন্ট।
- \`error.js\`: কোনো টেকনিক্যাল এরর বা ক্র্যাশ হলে দেখানোর স্ক্রিন।
- \`not-found.js\`: ভুল ইউআরএল-এর 404 স্ক্রিন।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি আপনি একটি পরিচিতি পেজ (\`/about\`) এবং একটি পেমেন্ট পেজ (\`/dashboard/billing\`) বানাতে চান।
১. তৈরি করুন: \`app/about/page.tsx\`।
২. তৈরি করুন: \`app/dashboard/billing/page.tsx\`।
ব্রাউজারে এই ইউআরএল-এ ঢুকলে মঙ্গোডিবি কুয়েরির মতো ডাটাবেসের ঝামেলা ছাড়াই সরাসরি পেজ দুটি স্ক্রিনে চলে আসবে।

### উত্তম অনুশীলন
ফোল্ডারগুলোকে পরিষ্কারভাবে সাজান। ফাইল আর্কিটেকচার ঠিক রাখতে রুট গ্রুপ (ফোল্ডার নামের দুই পাশে ফার্স্ট ব্র্যাকেট, যেমন: \`(auth)\`) ব্যবহার করুন। এটি ইউআরএল পাথ পরিবর্তন না করেই ফাইল সাজাতে সাহায্য করে।

### সাধারণ ভুলসমূহ
ফোল্ডার তৈরি করে তার ভেতর \`page.tsx\` ফাইল তৈরি করতে ভুলে যাওয়া। যেমন \`app/about/\`-এ অন্য কোড ফাইল বা স্টাইল থাকলেও page ফাইল না থাকলে ব্রাউজারে ওটি ৪০৪ এরর পেজ দেখাবে।

### Code Example
\`\`\`
প্রজেক্ট ফোল্ডারের ফাইল বিন্যাস:
src/
└── app/
    ├── page.tsx            // ইউআরএল: /
    ├── layout.tsx          // রুট লেআউট (আবশ্যিক)
    ├── about/
    │   └── page.tsx        // ইউআরএল: /about
    └── dashboard/
        ├── page.tsx        // ইউআরএল: /dashboard
        └── settings/
            └── page.tsx    // ইউআরএল: /dashboard/settings
\`\`\``
  },
  {
    id: 'nextjs-8',
    title: 'How do you create dynamic routes in Next.js using dynamic segments?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Dynamic Routes', 'App Router', 'Routing', 'Params'],
    enAnswer: 'Dynamic routes are created by enclosing a folder name in square brackets, e.g., [id] or [slug]. The dynamic value is passed automatically to the page component as a param prop: params.id or params.slug.',
    bnAnswer: 'ফোল্ডারের নাম থার্ড ব্র্যাকেট দিয়ে ঘিরে (যেমন: [id] বা [slug]) ডায়নামিক রুট তৈরি করা হয়। ডাইনামিক মানটি পেজ কম্পোনেন্টে প্রপস (params) আকারে পাস হয়: params.id বা params.slug।',
    enExplanation: `### Explanation
When you do not know the exact path segment ahead of time (e.g. blog post IDs, user profile names), you use dynamic routing segments:
- Folder template: \`app/blog/[id]/page.tsx\`
- Matches URLs like: \`/blog/123\`, \`/blog/my-first-post\`
- Inside \`page.tsx\`, the component receives \`params\`:
  \`\`\`typescript
  type Props = {
    params: Promise<{ id: string }>
  }
  \`\`\`
- Note: In Next.js 15, \`params\` is a **Promise** that must be awaited before reading properties.

### Real-World Example
In a news portal:
- Clicking a headline redirects the user to \`/news/10291\`.
- Under the hood, \`app/news/[id]/page.tsx\` awaits the params, reads the ID \`10291\`, and runs a fetch query to display the matching article detail.

### Best Practice
Define TS interfaces for the dynamic params to ensure type-safety. Always await the \`params\` object in Next.js 15+ Server Components to avoid runtime errors when accessing dynamic parameters.

### Common Mistakes
Accessing params properties synchronously in Next.js 15+ without using \`await params\`. This will trigger compilation warnings or runtime hydration errors.

### Code Example
\`\`\`typescript
// app/blog/[slug]/page.tsx
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  // Await params promise in Next.js 15+
  const { slug } = await params;
  
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  const post = await res.json();

  return (
    <article className="p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </article>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন রুটের নির্দিষ্ট পাথ আগের থেকে জানা থাকে না (যেমন ব্লগের আইডি বা ইউজারের প্রোফাইল নাম), তখন ডায়নামিক রাউটিং সেগমেন্ট ব্যবহার করা হয়:
- ফোল্ডারের গঠন: \`app/blog/[id]/page.tsx\`
- ম্যাচ করা ইউআরএল: \`/blog/123\`, \`/blog/my-first-post\`
- পেজ ফাইলে কম্পোনেন্টটি \`params\` প্রপস হিসেবে ডাটা রিসিভ করে:
  \`\`\`typescript
  type Props = {
    params: Promise<{ id: string }>
  }
  \`\`\`
- সতর্কবার্তা: নেক্সট জেএস ১৫ ভার্সনে \`params\` একটি **প্রোমিজ (Promise)**, তাই এর মান পড়তে হলে অবশ্যই \`await\` ব্যবহার করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
নিউজ পোর্টাল অ্যাপে:
- কোনো নিউজে ক্লিক করলে সেটি \`/news/10291\` ইউআরএল-এ নিয়ে যায়।
- ব্যাকগ্রাউন্ডে \`app/news/[id]/page.tsx\` ফোল্ডারের ফাইলটি \`10291\` আইডি রিড করে ডাটাবেস কুয়েরির মাধ্যমে সংশ্লিষ্ট নিউজ কন্টেন্টটি পেজে দেখায়।

### উত্তম অনুশীলন
ডায়নামিক প্যারামিটারের জন্য টাইপস্ক্রিপ্ট ইন্টারফেস লিখুন। নেক্সট জেএস ১৫+ ভার্সনে ভুল এড়াতে প্যারামিটার রিড করার পূর্বে সর্বদা \`await params\` করে নিন।

### সাধারণ ভুলসমূহ
নেক্সট জেএস ১৫+ এ \`await params\` ছাড়াই সরাসরি সিঙ্ক্রোনাস কোডে \`params.slug\` রিড করা। এর ফলে কনসোলে ওয়ার্নিং আসবে বা পেজ ক্র্যাশ করবে।

### Code Example
\`\`\`typescript
// app/blog/[slug]/page.tsx
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  // Next.js 15+ এ params প্রোমিজকে await করা
  const { slug } = await params;
  
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  const post = await res.json();

  return (
    <article className="p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </article>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-9',
    title: 'What is the difference between layout.tsx and page.tsx files in Next.js?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['App Router', 'layout.tsx', 'page.tsx', 'Architecture'],
    enAnswer: 'layout.tsx defines shared UI that remains static across nested route transitions (e.g. headers, sidebars) and preserves component state. page.tsx defines the unique content UI that changes for a specific route path.',
    bnAnswer: 'layout.tsx সাধারণ লেআউট বা শেয়ার্ড ইউআই (যেমন: হেডার, ফুটার, সাইডবার) ডিফাইন করে যা নেস্টেড পেজ চেঞ্জের সময় পরিবর্তিত হয় না এবং স্টেট ধরে রাখে। page.tsx নির্দিষ্ট পাথের জন্য অনন্য কন্টেন্ট বা পেজ ইউআই ডিফাইন করে।',
    enExplanation: `### Explanation
In the App Router, layouts and pages compose the UI:

- **\`layout.tsx\`**:
  - Acts as a wrapper. It must accept a \`children\` prop.
  - Does not re-render when navigating between sibling routes. State inside layout components is preserved.
  - Can be nested. A root layout wraps dashboard layouts, which wrap individual pages.
- **\`page.tsx\`**:
  - The leaf node of a route. Represents the primary content of the URL.
  - Re-renders completely on every navigation route change.

### Real-World Example
In a SaaS software dashboard:
- The sidebar navigation and user topbar profile are defined in \`layout.tsx\`.
- When clicking between "Analytics" (\`page.tsx\`) and "Billing" (\`page.tsx\`), the main body area updates instantly, while the layout keeps sidebar menu states and scroll positions intact.

### Best Practice
Put global configurations, providers (e.g., ThemeProvider, AuthProvider), and shared UI elements in \`layout.tsx\`. Place only route-specific UI and fetch triggers in \`page.tsx\`.

### Common Mistakes
Expecting a layout component to re-execute search or fetch hooks on every sub-route change. Since the layout does not re-render during sub-routing navigation, write fetch hooks inside the sub-route's \`page.tsx\` instead.

### Code Example
\`\`\`typescript
// app/dashboard/layout.tsx (Shared Layout Wrapper)
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-blue-900 text-white">Dashboard Side Nav</aside>
      <main className="flex-1 p-6">{children}</main> {/* Renders active page */}
    </div>
  );
}

// app/dashboard/page.tsx (Active View)
export default function DashboardPage() {
  return <h2>Overview Analytics Graph Content</h2>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
App Router-এ লেআউট ও পেজ একসাথে মিলে স্ক্রিন তৈরি করে:

- **\`layout.tsx\` (লেআউট)**:
  - এটি অন্য পেজ বা ফোল্ডারের জন্য র‍্যাপার হিসেবে কাজ করে। এটি প্রপস হিসেবে \`children\` রিসিভ করে।
  - নেভিগেশনের সময় এটি নতুন করে রেন্ডার হয় না, ফলে লেআউটের ভেতরের কম্পোনেন্ট স্টেট বা স্ক্রল পজিশন ঠিক থাকে।
  - এটি নেস্টেড হতে পারে (যেমন রুট লেআউটের ভেতর ড্যাশবোর্ড লেআউট)।
- **\`page.tsx\` (পেজ)**:
  - এটি রুটের মূল বডি। ইউআরএল-এর মূল ডাটা রিপ্রেজেন্ট করে।
  - রুট পরিবর্তনের সময় এটি সম্পূর্ণ রি-রেন্ডার হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সাস (SaaS) ড্যাশবোর্ডে:
- সাইডবার মেনু ও টপ হেডার বার \`layout.tsx\` ফাইলে ডিক্লেয়ার করা থাকে।
- ইউজার যখন "অ্যানালিটিক্স" পেজ থেকে "পেমেন্ট" পেজে ক্লিক করেন, তখন সাইডবার অপরিবর্তিত থাকে কিন্তু ভেতরের মূল বডির কন্টেন্ট (\`page.tsx\`) পরিবর্তিত হয়।

### উত্তম অনুশীলন
গ্লোবাল সেটিং, থিম প্রোভাইডার (ThemeProvider, Redux Provider) এবং কমন ইউআই উপাদানগুলো \`layout.tsx\`-এ রাখুন। কেবল পেজ-নির্দিষ্ট কন্টেন্ট ও ডাটা লোডিং লজিক \`page.tsx\`-এ রাখুন।

### সাধারণ ভুলসমূহ
লেআউটের ভেতর কোনো ডাটা ফেচিং হুক রেখে সাব-পেজ চেঞ্জের সাথে সাথে সেই হুক রান করার আশা করা। যেহেতু লেআউট রি-রেন্ডার হয় না, তাই সাব-পেজের নতুন ডাটার জন্য হুকটি সাব-পেজের \`page.tsx\`-এর ভেতরেই লিখুন।

### Code Example
\`\`\`typescript
// app/dashboard/layout.tsx (শেয়ার্ড লেআউট র‍্যাপার)
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-blue-900 text-white">সাইডবার মেনু</aside>
      <main className="flex-1 p-6">{children}</main> {/* চাইল্ড পেজগুলো এখানে রেন্ডার হবে */}
    </div>
  );
}

// app/dashboard/page.tsx (মূল পেজ)
export default function DashboardPage() {
  return <h2>অ্যানালিটিক্স গ্রাফ কন্টেন্ট</h2>;
}
\`\`\``
  },
  {
    id: 'nextjs-10',
    title: 'How does the Next.js <Link> component differ from a standard HTML <a> anchor tag?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Link Component', 'Routing', 'Performance', 'Prefetching'],
    enAnswer: 'The Next.js <Link> component extends the standard HTML <a> tag to enable client-side navigation. It intercepts clicks to prevent full browser reloads, enables transition animations, and automatically prefetches the targeted routes in the background as they enter the viewport.',
    bnAnswer: 'Next.js <Link> কম্পোনেন্টটি সাধারণ <a> ট্যাগকে বর্ধিত করে ক্লায়েন্ট-সাইড নেভিগেশন দেয়। এটি ক্লিক ইন্টারসেপ্ট করে পেজ রিলোড বন্ধ রাখে, অ্যানিমেশন স্মুথ করে এবং স্ক্রিনে ইউআরএল লিংক আসা মাত্রই ব্যাকগ্রাউন্ডে লিংকটির ডাটা প্রাক-ডাউনলোড (prefetch) করে রাখে।',
    enExplanation: `### Explanation
Using standard HTML \`<a>\` tags causes the browser to reload the entire document, resetting React state, clearing cache memory, and creating latency gaps.

**Next.js \`<Link>\` Benefits:**
1. **Client-Side Routing**: Loads only the JSON delta files of the target page, rendering updates smoothly without white-screen flashes.
2. **Automatic Prefetching**: In production, as soon as a \`<Link>\` enters the browser viewport, Next.js downloads the code for that page. Navigating to the page feels instantaneous.
3. **Scroll Restoration**: Automatically scrolls to the top of the page on navigation or remembers the previous scroll state.

### Real-World Example
In a blog website:
- If a user clicks a "Read More" button using an \`<a>\` tag, the screen goes white for 200ms while CSS/JS downloads again.
- If you use \`<Link href="/blog-post">\`, the post loads instantly because Next.js already prefetched the page bundle as the user scrolled down.

### Best Practice
Always use \`<Link>\` for internal application routing. Use standard \`<a>\` tags only for external websites (e.g. linking to twitter.com) or linking directly to static downloads/files.

### Common Mistakes
Using standard \`<a>\` tags for navigation inside your dashboard routes. This ruins performance, breaks React state history, and triggers full browser reloads.

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      {/* Correct: Client-side navigation with prefetching */}
      <Link href="/about" className="text-blue-600 hover:underline">
        About Us (Instant Load)
      </Link>

      {/* Correct for External URLs only */}
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Search External
      </a>
    </nav>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণ HTML \`<a>\` অ্যাঙ্কর ট্যাগ ব্যবহার করলে ব্রাউজার পুরো পেজ রিলোড করে, যার ফলে রিঅ্যাক্ট স্টেট রিসেট হয়ে যায় ও পারফরম্যান্স ব্যাহত হয়।

**নেক্সট জেএস \`<Link>\` কম্পোনেন্টের সুবিধাসমূহ:**
১. **ক্লায়েন্ট-সাইড রাউটিং**: এটি পুরো ব্রাউজার রিফ্রেশ না করে কেবল টার্গেট পেজের জন্য প্রয়োজনীয় টেমপ্লেট ডাটা লোড করে।
২. **অটো-প্রিফেচিং (Prefetching)**: প্রোডাকশন মোডে, একটি লিংক ব্রাউজার স্ক্রিনে দৃশ্যমান হওয়া মাত্রই নেক্সট জেএস ব্যাকগ্রাউন্ডে সেই পেজের ফাইল আগে থেকেই ডাউনলোড করে নেয়। ইউজার ক্লিক করার সাথে সাথে পাথটি সেকেন্ডে লোড হয়।
৩. **স্ক্রল রিস্টোরেশন**: পেজ চেঞ্জ হলে স্বয়ংক্রিয়ভাবে স্ক্রিনকে স্ক্রল করে ওপরে নিয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের ক্ষেত্রে:
- ইউজার যদি \`<a>\` ট্যাগ দিয়ে অন্য ব্লগে যান, তবে ব্রাউজার সাদা হয়ে ২০০ মি.সে. সময় নেবে পুরো সাইট আবার রি-ডাউনলোড করতে।
- যদি \`<Link href="/blog-post">\` ব্যবহার করেন, লিংক স্ক্রিনে আসামাত্র প্রি-ফাইল লোড হয়ে থাকায় ক্লিক করা মাত্র কোনো ল্যাগ ছাড়াই ব্লগ পেজটি ওপেন হয়ে যাবে।

### উত্তম অনুশীলন
অ্যাপ্লিকেশনের ভেতরের নেভিগেশনের জন্য সর্বদা \`<Link>\` ব্যবহার করুন। শুধুমাত্র এক্সটার্নাল কোনো সাইটের লিংকের জন্য (যেমন: linking to google.com) বা ডাউনলোডের ফাইলের জন্য সাধারণ \`<a>\` ট্যাগ ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ড্যাশবোর্ডের ভেতরের পেজে যাওয়ার জন্য \`<a>\` ব্যবহার করা। এটি অপ্রয়োজনীয় পেজ রিলোড তৈরি করে ব্যবহারকারীর অভিজ্ঞতা খারাপ করে।

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      {/* সঠিক ব্যবহার: প্রি-ফেচিং সুবিধাসহ ক্লায়েন্ট সাইড রাউটিং */}
      <Link href="/about" className="text-blue-600 hover:underline">
        আমাদের সম্পর্কে (ইনস্ট্যান্ট লোড)
      </Link>

      {/* সঠিক ব্যবহার কেবল বাহ্যিক লিংকের জন্য */}
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        গুগল সার্চ
      </a>
    </nav>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-11',
    title: 'Explain how the next/image component optimizes images in a Next.js application.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Image Optimization', 'next/image', 'Performance', 'Core Web Vitals'],
    enAnswer: 'The next/image component optimizes images on-the-fly. It reduces file sizes by serving modern formats (WebP/AVIF), prevents Layout Shift (CLS) by requiring dimensions, lazy loads images automatically as they approach the viewport, and serves responsive sizes based on device screen resolution.',
    bnAnswer: 'next/image কম্পোনেন্টটি স্বয়ংক্রিয়ভাবে ইমেজ অপ্টিমাইজ করে। এটি আধুনিক ফাইল ফরম্যাটে (WebP/AVIF) কনভার্ট করে সাইজ কমায়, সাইজ ফিক্সড রেখে লেআউট শিফট (CLS) প্রতিরোধ করে, স্ক্রিনে আসার আগ পর্যন্ত ইমেজ লেজি-লোড (lazy-load) করে এবং ডিভাইস স্ক্রিনের মাপ অনুযায়ী রেসপন্সিভ ইমেজ সার্ভ করে।',
    enExplanation: `### Explanation
Images are the leading cause of high page weight and slow page speeds. A standard \`<img>\` tag loads whatever image size is hosted, wasting bandwidth.

**\`next/image\` Features:**
1. **Size Optimization**: Compresses images dynamically on Next.js server before serving. A 2MB PNG is served as a 50KB WebP.
2. **Visual Stability (Preventing CLS)**: Next.js enforces defining \`width\` and \`height\` (or using \`fill\`). This reserves space in the layout, preventing layout shift when the image loads.
3. **Lazy Loading**: Images are only downloaded when they enter the user's viewport.
4. **Responsive Boundaries**: Using the \`sizes\` prop, Next.js generates \`srcset\` headers automatically, sending mobile-optimized images to mobile pings.

### Real-World Example
On a products list page:
- Standard \`<img>\` downloads 50 full-sized 3000x2000px product photos immediately, choking the client's network.
- Using \`next/image\`, only the first 4 visible photos download in WebP format, resized to exact thumbnail dimensions. The rest load smoothly as the user scrolls down.

### Best Practice
Always use \`next/image\` instead of raw \`<img>\` tags. For images that display above the fold (e.g. hero banner images), set \`priority={true}\` to bypass lazy loading and display them instantly.

### Common Mistakes
Forgetting to whitelist external domains (like AWS S3 or Cloudinary) in \`next.config.js\` before trying to fetch remote image URLs via \`next/image\`, causing compile runtime errors.

### Code Example
\`\`\`typescript
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="border p-4 w-80">
      {/* Optimized Image Component */}
      <Image
        src="https://images.example.com/phone.jpg"
        alt="Smartphone"
        width={320}
        height={240}
        priority={true} // Load instantly since it is at the top
        className="rounded"
      />
      <h3>Latest Model Smartphone</h3>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েবসাইটের গতি কমে যাওয়ার মূল কারণগুলোর মধ্যে ইমেজ অন্যতম। সাধারণ \`<img>\` ট্যাগ ব্যবহার করলে ফাইল সাইজ যা-ই হোক না কেন, ব্রাউজার পুরো ২/৩ এমবি ডাটা ডাউনলোড করে ব্যান্ডউইথ নষ্ট করে।

**\`next/image\` এর মূল মেকানিজম:**
১. **সাইজ অপ্টিমাইজেশন**: ইমেজকে ডাইনামিক্যালি কম্প্রেস করে ছোট ফরম্যাটে (যেমন WebP বা AVIF) রূপান্তর করে সার্ভ করে।
২. **লেআউট শিফট রোধ করা**: নেক্সট জেএস ইমেজের প্রস্থ (\`width\`) ও উচ্চতা (\`height\`) ডিফাইন করা বাধ্যতামূলক করে। এতে ইমেজ লোড হওয়ার আগেই লেআউটে খালি জায়গা তৈরি হয়ে থাকে, যার ফলে ইমেজ লোড হওয়ার সময় কন্টেন্ট নড়াচড়া (Cumulative Layout Shift) করে না।
৩. **লেজি লোডিং**: স্ক্রিনের বাইরে থাকা ইমেজগুলো ডাউনলোড না হয়ে ইউজার স্ক্রল করে লিঙ্কের কাছে পৌঁছালে তবেই ডাউনলোড শুরু হয়।
৪. **ডিভাইস অ্যাডাপটেশন**: ডাইনামিক্যালি মোবাইল স্ক্রিনের জন্য ছোট আকারের ও ল্যাপটপের জন্য বড় আকারের ছবি আলাদাভাবে পাঠায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট পোর্টাল পেজে:
- সাধারণ \`<img>\` ট্যাগ ব্যবহার করলে এক সাথে ৫০টি হাই-কোয়ালিটি ছবি একবারে ডাউনলোড হতে গিয়ে ব্রাউজার ফ্রিজ হয়ে যাবে।
- \`next/image\` ব্যবহার করলে স্ক্রিনে দৃশ্যমান প্রথম ৪টি ছবি ডাউনলোড হবে এবং বাকিগুলো ইউজার স্ক্রল করার সাথে সাথে প্রসেস হবে।

### উত্তম অনুশীলন
সাধারণ \`<img>\` এভয়েড করে সর্বদা \`next/image\` ব্যবহার করুন। তবে ল্যান্ডিং পেজের হিরো ব্যানার (Hero Banner) ইমেজের ক্ষেত্রে \`priority={true}\` ব্যবহার করুন, যাতে অলস লেজি লোড এড়িয়ে ইমেজটি সাথে সাথে সামনে আসে।

### সাধারণ ভুলসমূহ
এক্সটার্নাল হোস্টিং ডোমেইন (যেমন S3 বা Cloudinary) ডোমেইন লিস্ট \`next.config.js\` ফাইলে হোয়াইটলিস্ট না করে ছবি লোড দেওয়ার চেষ্টা করা, যার ফলে ইমেজ লোড না হয়ে এরর স্ক্রিন আসে।

### Code Example
\`\`\`typescript
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="border p-4 w-80">
      {/* অপ্টিমাইজড ইমেজ কম্পোনেন্ট */}
      <Image
        src="https://images.example.com/phone.jpg"
        alt="স্মার্টফোন"
        width={320}
        height={240}
        priority={true} // পেজ লোডের সময় সবার আগে লোড হবে
        className="rounded"
      />
      <h3>স্মার্টফোন মডেল ২০২৬</h3>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-12',
    title: 'What is a Route Handler in the App Router and how do you define a basic GET endpoint?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Route Handlers', 'API Routes', 'App Router', 'Backend'],
    enAnswer: 'Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs. They are defined inside a route.ts file within the app/ directory, exporting HTTP-method named functions (GET, POST, etc.).',
    bnAnswer: 'রুট হ্যান্ডলার (Route Handlers) ওয়েব রিকোয়েস্ট ও রেসপন্স এপিআই ব্যবহার করে নির্দিষ্ট রুটের জন্য ব্যাকএন্ড গেটওয়ে তৈরি করার সুবিধা দেয়। এগুলো app/ ফোল্ডারের অধীনে route.ts ফাইলে HTTP মেথডের নামে (GET, POST ইত্যাদি) ফাংশন আকারে এক্সপোর্ট করা হয়।',
    enExplanation: `### Explanation
In the App Router, Route Handlers replace the Pages Router's \`pages/api\` routes:
- **File Name**: Must be named \`route.ts\` or \`route.js\`.
- **Conflict**: A folder cannot contain both a \`route.ts\` and a \`page.tsx\` file (as they both map to the same URL path).
- **Standards-based**: Uses standard web \`Request\` and \`Response\` objects rather than Node's \`req/res\` streams, making them compatible with Edge runtimes.

### Real-World Example
To create an endpoint that returns site configurations (\`/api/config\`):
- Create the file \`app/api/config/route.ts\`.
- Export a function named \`GET\` returning a JSON response.
- Mobile clients or client components can fetch \`/api/config\` to read settings.

### Best Practice
Keep API route handlers clean. Delegate business logic, database queries, and validations to utility controller functions. Return correct HTTP status codes (e.g. 200 for success, 400 for bad inputs, 401 for unauthorized).

### Common Mistakes
Declaring both \`page.tsx\` and \`route.ts\` in the same directory (e.g., \`app/about/page.tsx\` and \`app/about/route.ts\`). This creates a route path conflict, and Next.js will throw a build error.

### Code Example
\`\`\`typescript
// app/api/status/route.ts
import { NextResponse } from 'next/server';

// Handle GET requests to /api/status
export async function GET() {
  const statusInfo = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

  // Return standard JSON response
  return NextResponse.json(statusInfo, { status: 200 });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
App Router-এ রুট হ্যান্ডলাররা Pages Router-এর প্রথাগত \`pages/api\` সিস্টেমকে প্রতিস্থাপন করে:
- **ফাইলের নাম**: ফাইলটির নাম অবশ্যই \`route.ts\` বা \`route.js\` হতে হবে।
- **সীমাবদ্ধতা**: একই ডিরেক্টরির ফোল্ডারে একই সাথে \`route.ts\` এবং \`page.tsx\` থাকতে পারবে না।
- **আধুনিক স্ট্যান্ডার্ড**: এগুলো এক্সপ্রেসের (Node.js) বদলে স্ট্যান্ডার্ড ওয়েব \`Request\` ও \`Response\` অবজেক্ট ব্যবহার করে, যা ক্লাউড এজ সার্ভারে চলার উপযোগী।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাইটের সাধারণ স্ট্যাটাস এপিআই (\`/api/config\`) তৈরি করতে:
- ফাইল ডিক্লেয়ার করুন: \`app/api/config/route.ts\`।
- একটি \`GET\` ফাংশন এক্সপোর্ট করুন যা সাইটের ডাটা JSON ফরম্যাটে রিটার্ন করবে।
- ফ্রন্টএন্ড থেকে \`fetch('/api/config')\` কল করে এই তথ্য রিড করা যাবে।

### উত্তম অনুশীলন
রুট হ্যান্ডলারে সরাসরি ডাটাবেস কুয়েরির সব লজিক না লিখে লজিকগুলোকে আলাদা কন্ট্রোলারে ভাগ করুন। সঠিক HTTP স্ট্যাটাস কোড (যেমন সফলতায় ২০০, ভুলের জন্য ৪০০) রিটার্ন করা নিশ্চিত করুন।

### সাধারণ ভুলসমূহ
একই ফোল্ডারে \`page.tsx\` এবং \`route.ts\` দুটিই তৈরি করা। এটি রাউটার পাথ কনফ্লিক্ট তৈরি করে নেক্সট বিল্ড ক্র্যাশ করাবে।

### Code Example
\`\`\`typescript
// app/api/status/route.ts
import { NextResponse } from 'next/server';

// /api/status পাথে GET রিকোয়েস্ট হ্যান্ডেল করার ফাংশন
export async function GET() {
  const statusInfo = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

  // স্ট্যান্ডার্ড রেসপন্স রিটার্ন করার নিয়ম
  return NextResponse.json(statusInfo, { status: 200 });
}
\`\`\``
  },
  {
    id: 'nextjs-13',
    title: 'How does Next.js handle global CSS and CSS Modules?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['CSS Modules', 'Styling', 'Global CSS', 'Tailwind CSS'],
    enAnswer: 'Next.js supports styling out of the box. Global CSS must be imported in the root layout (layout.tsx) to apply universally. CSS Modules are scoped locally to components by naming files as name.module.css, preventing style name collisions.',
    bnAnswer: 'Next.js সরাসরি স্টাইলিং সমর্থন করে। গ্লোবাল CSS রুট লেআউটে (layout.tsx) ইম্পোর্ট করতে হয়। সিএসএস মডিউল (CSS Modules) নির্দিষ্ট কম্পোনেন্টে সীমাবদ্ধ রাখতে ফাইলের নাম name.module.css হিসেবে রাখতে হয়, যা ক্লাস ওভারল্যাপ সমস্যা এড়ায়।',
    enExplanation: `### Explanation
Next.js handles CSS natively:

1. **Global CSS**:
   - Typically configured in \`app/globals.css\`.
   - Must be imported inside the root layout (\`app/layout.tsx\`). Cannot be imported inside page or other nested layouts to prevent cascading stylesheet order issues.
2. **CSS Modules**:
   - Files named with \`*.module.css\`.
   - Styles are loaded locally. Next.js creates unique hashed class names (e.g. \`Button_btn__a3b8c\`) at build-time, preventing global stylesheet contamination.

### Real-World Example
In a project with multiple developer teams:
- Team A creates a button with class \`button\`.
- Team B creates a button with class \`button\` but different padding.
- Using CSS Modules, they import \`styles.module.css\`. Next.js hashes classes dynamically, ensuring both buttons display correctly on the same page.

### Best Practice
Use CSS Modules for custom components to avoid global class name conflicts. If using Tailwind CSS, import tailwind directives inside your global CSS file at the root.

### Common Mistakes
Attempting to import a global CSS stylesheet (e.g. \`import './styles.css'\`) inside a non-root layout or page component, which triggers a compilation crash.

### Code Example
\`\`\`css
/* app/components/Button.module.css */
.btn {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
\`\`\`

\`\`\`typescript
// app/components/Button.tsx
import styles from './Button.module.css';

export default function Button({ label }: { label: string }) {
  // Styles are applied as object properties
  return <button className={styles.btn}>{label}</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js সিএসএস ব্যবহারের জন্য রেডিমেড কনফিগারেশন অফার করে:

১. **Global CSS (গ্লোবাল সিএসএস)**:
   - সাধারণত \`app/globals.css\` ফাইলে থাকে।
   - এটি কেবল রুট লেআউটে (\`app/layout.tsx\`) ইম্পোর্ট করতে হবে। কোডের অন্য কোথাও ইম্পোর্ট করলে মঙ্গোডিবির স্টাইলের ক্রমানুসার ভেঙে এরর জেনারেট হতে পারে।
২. **CSS Modules (সিএসএস মডিউল)**:
   - ফাইলের শেষে \`*.module.css\` যোগ করতে হয়।
   - এটি ক্লাসগুলোকে লোকালি ইনজেক্ট করে। বিল্ড করার সময় নেক্সট জেএস প্রতি ক্লাসে একটি হ্যাশ কোড বসিয়ে দেয় (যেমন: \`Button_btn__a3b8c\`), ফলে গ্লোবাল ডিজাইন ওভাররাইট হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একই প্রজেক্টে দুজন ডেভেলপার কাজ করছেন:
- প্রথম ডেভেলপার বাটনের ক্লাসের নাম দিলেন \`button\`।
- দ্বিতীয় ডেভেলপারও অন্য ফাইলে বাটনের নাম দিলেন \`button\` কিন্তু ভিন্ন ডিজাইনে।
- সিএসএস মডিউল ব্যবহার করলে নেক্সট জেএস স্বয়ংক্রিয়ভাবে ক্লাস দুটির পেছনে আলাদা ইউনিক হ্যাশ বসিয়ে দেবে, ফলে দুটি বাটনই ডিজাইনের সমস্যা ছাড়া কাজ করবে।

### উত্তম অনুশীলন
কাস্টম কম্পোনেন্ট লেখার সময় সিএসএস মডিউল ব্যবহার করুন। আর যদি টেইলউইন্ড (Tailwind CSS) ব্যবহার করেন, তবে রুট লেআউটের গ্লোবাল সিএসএস ফাইলেই টেইলউইন্ডের ডিরেক্টিভগুলো ইম্পোর্ট করে নিন।

### সাধারণ ভুলসমূহ
রুট লেআউট ফোল্ডার বা ফাইল ছাড়া অন্য কোনো সাধারণ পেজের ফাইলে গ্লোবাল সিএসএস ইম্পোর্ট করার চেষ্টা করা। এটি সরাসরি কম্পাইল টাইম এরর তৈরি করবে।

### Code Example
\`\`\`css
/* app/components/Button.module.css */
.btn {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
\`\`\`

\`\`\`typescript
// app/components/Button.tsx
import styles from './Button.module.css';

export default function Button({ label }: { label: string }) {
  // স্টাইল অবজেক্ট হিসেবে ক্লাসে ইম্পোর্ট হয়
  return <button className={styles.btn}>{label}</button>;
}
\`\`\``
  },
  {
    id: 'nextjs-14',
    title: 'Explain Static vs Dynamic Metadata in Next.js and how to configure SEO tags.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Metadata', 'SEO', 'App Router', 'generateMetadata'],
    enAnswer: 'Static metadata is configured by exporting a constant metadata object from a layout or page file. Dynamic metadata is configured by exporting a generateMetadata function that fetches data dynamically to generate SEO tags based on parameters.',
    bnAnswer: 'স্ট্যাটিক মেটাডাটা কনফিগার করতে layout বা page ফাইল থেকে একটি কনস্ট্যান্ট metadata অবজেক্ট এক্সপোর্ট করতে হয়। ডাইনামিক মেটাডাটার জন্য একটি generateMetadata ফাংশন এক্সপোর্ট করতে হয় যা পাথের মান দিয়ে এপিআই থেকে ডাটা এনে ডাইনামিক এসইও ট্যাগ তৈরি করে।',
    enExplanation: `### Explanation
Metadata configures the HTML \`<head>\` elements like \`title\`, \`description\`, and OpenGraph properties for search engine indexing.

**1. Static Metadata**:
- Used when details are known during coding.
\`\`\`typescript
export const metadata: Metadata = { title: 'Home Page' };
\`\`\`

**2. Dynamic Metadata**:
- Used when metadata changes depending on dynamic page params (e.g. database-driven blog posts).
- Must export an \`async function generateMetadata\`. Next.js resolves this function and executes it before rendering the page.

*Note: Next.js deduplicates fetch requests, meaning calling fetch inside \`generateMetadata\` and the page component simultaneously will only trigger one actual database request.*

### Real-World Example
In a product details page (\`/product/101\`):
- The page metadata title should display the product's actual title (e.g., "Buy iPhone 16").
- Using \`generateMetadata\`, we fetch product details for \`101\` from the database, retrieve the title "iPhone 16", and generate the dynamic SEO tags.

### Best Practice
Always define standard OpenGraph metadata (image, title, url) inside the root layout to establish a fallback brand identity. Overrides should only occur at page-level subfolders.

### Common Mistakes
Defining metadata inside a Client Component. Metadata exports **must** reside inside Server Components only. If a client page needs metadata, export the metadata from the parent layout or wrap it in a server page.

### Code Example
\`\`\`typescript
// app/posts/[id]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// Dynamic Metadata Generator Function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  // Fetch post details from database
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: [{ url: post.thumbnailUrl }]
    }
  };
}

export default function PostPage() {
  return <div>Post Content Rendered here</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মেটাডাটা সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) এবং সোশ্যাল শেয়ার লিংক প্রিভিউ ঠিক রাখতে HTML-এর \`<head>\` ট্যাগগুলো (যেমন: title, description, OpenGraph) তৈরি করে।

**১. Static Metadata (স্ট্যাটিক মেটাডাটা):**
- পেজের টাইটেল আগে থেকেই জানা থাকলে এটি কোডে সরাসরি ডিক্লেয়ার করা হয়।
\`\`\`typescript
export const metadata: Metadata = { title: 'মূল পেজ' };
\`\`\`

**২. Dynamic Metadata (ডাইনামিক মেটাডাটা):**
- ডাইনামিক রাউট পাথের ডাটার ওপর ভিত্তি করে এটি সেট করা হয় (যেমন ব্লগের শিরোনাম)।
- এটি করতে \`async function generateMetadata\` এক্সপোর্ট করতে হয়। নেক্সট জেএস পেজ রেন্ডার করার পূর্বেই এই ফাংশনটি রান করে।

*ক্যাশিং সুবিধা: \`generateMetadata\` এবং পেজ কম্পোনেন্টের ভেতর একই ফেচ (fetch) কল থাকলে নেক্সট জেএস ওটি ডুপ্লিকেট করে একবারই কুয়েরি চালায়, ডাটাবেসের ওপর বাড়তি লোড পড়ে না।*

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাক্ট পেজে (\`/product/101\`):
- পেজের মেটাডাটা টাইটেলে ওই প্রোডাক্টের নাম থাকতে হবে (যেমন: "Buy iPhone 16")।
- \`generateMetadata\` ব্যবহার করে ১০১ প্রোডাক্ট আইডি ডাটা এপিআই থেকে এনে টাইটেল "iPhone 16" এসইও ফাইলে পুশ করে দেওয়া যায়।

### উত্তম অনুশীলন
রুট লেআউট ফাইলে একটি ডিফল্ট মেটাডাটা সেট করে রাখুন যাতে কোনো সাব-পেজে মেটাডাটা সেট করতে ডেভেলপার ভুলে গেলেও সাইটের কমন ব্রান্ডিং শো করে।

### সাধারণ ভুলসমূহ
ভুল করে ক্লায়েন্ট কম্পোনেন্টে (\`"use client"\`) মেটাডাটা এক্সপোর্ট করা। মেটাডাটা এক্সপোর্ট শুধুমাত্র সার্ভার কম্পোনেন্টেই করা সম্ভব।

### Code Example
\`\`\`typescript
// app/posts/[id]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// ডাইনামিক মেটাডাটা জেনারেটর ফাংশন
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  // এপিআই থেকে পোস্ট বিবরণ নিয়ে আসা
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: [{ url: post.thumbnailUrl }]
    }
  };
}

export default function PostPage() {
  return <div>পোস্টের মূল কন্টেন্ট স্ক্রিন</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-15',
    title: 'How does next/font optimize fonts in a Next.js application?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['next/font', 'Web Performance', 'Typography', 'Core Web Vitals'],
    enAnswer: 'next/font automatically downloads and self-hosts font files during build time. It bundles the fonts locally inside the application build, eliminating external network requests to Google Web Fonts and preventing layout shift using CSS sizeadjust.',
    bnAnswer: 'next/font বিল্ড করার সময় স্বয়ংক্রিয়ভাবে ফন্ট ফাইল ডাউনলোড করে লোকাল সার্ভারে হোস্ট করে। এটি গুগলের সার্ভারে আলাদা রিকোয়েস্ট পাঠানো বন্ধ করে ডাটা সেভ করে এবং সিএসএস সাইজ অ্যাডজাস্টের মাধ্যমে ফন্ট লোড হওয়ার সময় স্ক্রিন নড়াচড়া (Layout Shift) বন্ধ করে।',
    enExplanation: `### Explanation
Loading fonts from external services (like Google Fonts links) creates performance gaps:
- **DNS Lookup latency**: The browser must connect to \`fonts.gstatic.com\`.
- **Layout Shift**: While the custom font is downloading, the fallback browser font renders, then suddenly updates once the font finishes loading. This triggers Cumulative Layout Shift (CLS), which lowers SEO ranks.

**\`next/font\` advantages:**
1. **Self-Hosting**: Fonts are built directly into the assets folder. The browser loads fonts from your domain.
2. **Zero Layout Shift**: Next.js creates fallback font layouts matching the size metrics of the target font, ensuring zero size-shifts when loading.
3. **No tracking**: Because fonts are loaded locally, Google does not receive user IP data, securing compliance.

### Real-World Example
In a startup website design:
- Importing Google Outfit font via standard HTML link adds 150ms of network delay.
- Implementing \`next/font/google\` saves Outfit locally. The page loads with zero rendering jumps, and Outfit font renders instantly even on slower networks.

### Best Practice
Import your fonts in the root layout file. Define the fonts inside a constant, and assign the font classname to the HTML \`<body>\` tag so the typography applies globally.

### Common Mistakes
Importing \`next/font\` inside every component file. This creates duplicate font assets and increases bundle size. Only declare the fonts in the main layout.

### Code Example
\`\`\`typescript
// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';

// Load Google Font and define variable config
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents layout shifts
  variable: '--font-inter', // Export as CSS variable if using Tailwind
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply font class to HTML body */}
      <body className={\`\${inter.className} antialiased\`}>
        {children}
      </body>
    </html>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
গুগল ফন্ট বা বাইরের লিংক থেকে ফন্ট লোড করলে দুটি পারফরম্যান্স সমস্যা হয়:
- **ল্যাটেন্সি**: ব্রাউজারকে বাইরের ডোমেইনের সাথে কানেক্ট হতে হয় যা লোড টাইম বাড়ায়।
- **লেআউট শিফট**: কাস্টম ফন্টটি লোড হওয়ার আগ পর্যন্ত ব্রাউজারের ডিফল্ট ফন্ট দেখা যায়, লোড হওয়ার পর হঠাৎ ডিজাইনে পরিবর্তন ঘটে। একে CLS (Cumulative Layout Shift) বলে।

**\`next/font\`-এর সুবিধাসমূহ:**
১. **লোকাল হোস্টিং**: বিল্ডের সময়ই ফন্ট ডাউনলোড করে প্রোডাকশন ফোল্ডারে রেখে দেওয়া হয়। ব্রাউজার সরাসরি নিজের সাইট ডোমেইন থেকে ফন্ট ফাইল রিড করে।
২. **লেআউট জাম্প রোধ**: এটি ব্রাউজারের ডিফল্ট ফন্টের মাপে কাস্টম সাইজ ক্যালকুলেশন করে রাখে, ফলে ফন্ট লোড হওয়ার পরও স্ক্রিন নড়ে ওঠে না।
৩. **নিরাপত্তা**: গুগলের বাইরের সার্ভারে ইউজারের আইপি ডাটা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি আধুনিক পোর্টফোলিও সাইটে:
- ইন্টার (Inter) ফন্টটি ব্যবহারের জন্য \`next/font/google\` দিয়ে রুট ফাইলে কল করা হলো। এর ফলে সাইট লোড হওয়ার সাথে সাথেই কোনো স্ক্রিন নড়াচড়া ছাড়াই স্মুথ ফন্টটি রেন্ডার হয়ে যায়।

### উত্তম অনুশীলন
রুট লেআউটে ফন্ট লোড করুন। ফন্ট অবজেক্ট তৈরি করে তার \`className\` ক্লাসটি সরাসরি HTML \`<body>\` ট্যাগে যুক্ত করুন যাতে পুরো প্রজেক্টে একই ফন্ট কাজ করে।

### সাধারণ ভুলসমূহ
প্রতিটি কম্পোনেন্ট ফাইলে আলাদা আলাদা করে ফন্ট ফাইল ইম্পোর্ট করা। এটি বান্ডেল সাইজ বাড়িয়ে ডাটা অপচয় করে।

### Code Example
\`\`\`typescript
// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';

// গুগল ফন্ট ইম্পোর্ট ও কনফিগারেশন করার নিয়ম
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // লেআউট জাম্প বন্ধ রাখবে
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      {/* বডি ট্যাগে ফন্ট ক্লাসটি যুক্ত করা */}
      <body className={\`\${inter.className} antialiased\`}>
        {children}
      </body>
    </html>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-16',
    title: 'How do you handle environment variables in Next.js? Explain server-only vs. client-accessible variables.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Environment Variables', 'Security', 'Next.js Config'],
    enAnswer: 'Environment variables are stored in files like .env.local. By default, variables are only accessible in the Node.js server environment. To make a variable accessible in the client browser, it must be prefixed with NEXT_PUBLIC_.',
    bnAnswer: 'এনভায়রনমেন্ট ভ্যারিয়েবলগুলো .env.local ফাইলে জমা রাখা হয়। ডিফল্টভাবে এই ভ্যারিয়েবলগুলো শুধুমাত্র সার্ভার বা ব্যাকএন্ড কোডে অ্যাক্সেসযোগ্য। ক্লায়েন্ট বা ব্রাউজার কোডে কোনো ভ্যারিয়েবল পাঠাতে হলে তার নামের শুরুতে NEXT_PUBLIC_ প্রিফিক্স যোগ করতে হয়।',
    enExplanation: `### Explanation
Next.js supports environment variables configuration securely out of the box:

1. **Server-Only Variables**:
   - Variables declared normally (e.g. \`DATABASE_URL=mongodb://localhost:27017\`).
   - Accessible only in Server Components, Route Handlers, and Server Actions.
   - If you attempt to access them in a client component, they will evaluate to \`undefined\`, protecting private keys from leaking to users.
2. **Client-Accessible Variables**:
   - Must be declared with prefix: \`NEXT_PUBLIC_API_URL=https://api.site.com\`.
   - Access is allowed in both Server and Client Components. During build, Next.js replaces references in client JS bundles with inline values.

### Real-World Example
In a SaaS application:
- You have a stripe secret key used for processing charge transactions on the backend. This goes into \`STRIPE_SECRET_KEY\` (server-only).
- You also have a stripe publishable key used in your frontend checkout forms. This goes into \`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY\` (client-accessible).

### Best Practice
Never commit \`.env\` or \`.env.local\` files to Git. Store local configurations in \`.env.local\` (ignored in git) and configure production credentials directly inside your cloud deployment platform dashboard (e.g. Vercel dashboard).

### Common Mistakes
Prefixing database passwords or secret keys with \`NEXT_PUBLIC_\`, which exposes secret credentials to anyone inspecting the browser source tab.

### Code Example
\`\`\`ini
# .env.local (Configuration File - Ignored by Git)
DATABASE_URL="mongodb://prod-server:27017" # Server-only
NEXT_PUBLIC_ANALYTICS_ID="UA-10291-A"      # Client-accessible
\`\`\`

\`\`\`typescript
// app/components/Tracker.tsx
"use client";

export default function Tracker() {
  // Correct: This works in Client Component
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID); // Prints: "UA-10291-A"

  // Incorrect: Server key evaluated to undefined in client code
  console.log(process.env.DATABASE_URL); // Prints: undefined
  return <div>Tracker Component</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির কানেকশন বা সিক্রেট কি সুরক্ষিত রাখতে নেক্সট জেএস এনভায়রনমেন্ট ভ্যারিয়েবল সাপোর্ট করে:

১. **Server-Only Variables (সার্ভার অনলি):**
- এগুলো সাধারণ ডিক্লেয়ারেশন (যেমন: \`DATABASE_URL=mongodb://localhost\`)।
- কেবল সার্ভার ফাইল বা এপিআই এন্ডপয়েন্টে অ্যাক্সেস করা যায়। ব্রাউজারের জাভাস্ক্রিপ্ট ফাইলে এটি রিড করতে গেলে এর মান \`undefined\` দেখাবে, ফলে ডিক্রিপশন কি লিক হওয়া আটকায়।
২. **Client-Accessible Variables (ক্লায়েন্ট অ্যাক্সেসযোগ্য):**
- নামের পূর্বে অবশ্যই \`NEXT_PUBLIC_\` থাকতে হবে (যেমন: \`NEXT_PUBLIC_API_URL=...\`)।
- এটি ব্রাউজারের ভেতরেও ডাটা অ্যাক্সেস করার অনুমতি দেয়। বিল্ড তৈরির সময় নেক্সট জেএস এই স্ট্রিংগুলো রিপ্লেস করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট গেটওয়েতে:
- টাকা কাটার জন্য স্ট্রাইপের প্রাইভেট সিক্রেট কি \`STRIPE_SECRET_KEY\` ডিক্লেয়ার করা হলো (সার্ভার অনলি)।
- ব্রাউজারের চেকআউট ফর্মে ব্যবহারের জন্য স্ট্রাইপের পাবলিক কি \`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY\` ডিক্লেয়ার করা হলো (ক্লায়েন্ট ফ্রন্টএন্ড)।

### উত্তম অনুশীলন
কখনোই প্রজেক্টের \`.env\` বা \`.env.local\` ফাইল গিটহাবে পুশ করবেন না। লোকাল সেটিংস লোকাল ফাইলে রাখুন এবং প্রোডাকশন কিগুলো ক্লাউড সার্ভিস ড্যাশবোর্ডে (যেমন Vercel Dashboard) সেভ করুন।

### সাধারণ ভুলসমূহ
ভুলবশত ডাটাবেসের পাসওয়ার্ড বা কোনো সার্ভার টোকেনের নামের শুরুতে \`NEXT_PUBLIC_\` বসিয়ে ফেলা, যা ব্রাউজার সোর্স ট্যাবে ইউজারের সামনে চলে আসে।

### Code Example
\`\`\`ini
# .env.local (ফাইল কনফিগারেশন)
DATABASE_URL="mongodb://prod-server:27017" # শুধু সার্ভার রিড করতে পারবে
NEXT_PUBLIC_ANALYTICS_ID="UA-10291-A"      # ক্লায়েন্টও রিড করতে পারবে
\`\`\`

\`\`\`typescript
// app/components/Tracker.tsx
"use client";

export default function Tracker() {
  // সঠিক ব্যবহার: ক্লায়েন্ট কম্পোনেন্টে প্রিন্ট হবে
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID); // আউটপুট: "UA-10291-A"

  // ভুল ব্যবহার: সার্ভার কী ক্লায়েন্টে আনডিফাইন্ড দেখাবে
  console.log(process.env.DATABASE_URL); // আউটপুট: undefined
  return <div>ট্র্যাকার কম্পোনেন্ট</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-17',
    title: 'Explain the purpose of loading.tsx and how it integrates with React Suspense.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['loading.tsx', 'Suspense', 'UX', 'Streaming'],
    enAnswer: 'loading.tsx is a special file used in the App Router to automatically create a loading state for its route segment. It wraps the page component inside a React Suspense boundary, rendering the loading UI immediately while data fetches on the server.',
    bnAnswer: 'loading.tsx হলো একটি বিশেষ ফাইল যা ওই রুট সেগমেন্টের জন্য স্বয়ংক্রিয়ভাবে একটি লোডিং স্ট্যাটাস তৈরি করে। এটি মূলত পেজ কম্পোনেন্টটিকে রিঅ্যাক্ট সাসপেন্স (Suspense) বাউন্ডারিতে র‍্যাপ করে, যার ফলে সার্ভারে ডাটা লোড হওয়ার সময়েই স্ক্রিনে লোডিং ইউআই চলে আসে।',
    enExplanation: `### Explanation
In server-rendered applications, if you query a slow API, the browser normally freezes or waits for the response, creating a blank white screen (bad user experience).

**How \`loading.tsx\` fixes this:**
- Next.js automatically detects \`loading.tsx\` inside a route folder.
- It translates your layout structure internally into:
  \`\`\`typescript
  <Layout>
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  </Layout>
  \`\`\`
- While the server waits for the asynchronous fetch inside \`page.tsx\` to resolve, it streams the HTML layout and the \`loading.tsx\` fallback UI to the browser instantly.
- Once the page component's data resolves on the server, it swaps out the loading UI with the final page markup.

### Real-World Example
In a flight status app:
- Querying live arrivals takes 3 seconds.
- Instead of showing a blank browser screen, \`loading.tsx\` renders a skeleton loading UI instantly. Users see the skeleton state immediately, and the live flight results slide in as soon as the API response completes.

### Best Practice
Design visual skeletons or spinners inside \`loading.tsx\` that match the grid/shape of the expected page content. This reduces perceived load times and keeps layout transitions stable.

### Common Mistakes
Creating a \`loading.tsx\` that performs complex operations. Keep this component lightweight and static, as it must render instantly without waiting for additional network queries.

### Code Example
\`\`\`typescript
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  // Skeleton loader UI
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার রেন্ডার হওয়া অ্যাপে যদি কোনো এপিআই ধীরগতির হয়, তবে সাধারণ ব্রাউজার খালি স্ক্রিন নিয়ে বসে থাকে (খারাপ ইউজার এক্সপেরিয়েন্স)।

**\`loading.tsx\` এর সমাধান:**
- নেক্সট জেএস রুট ফোল্ডারে \`loading.tsx\` ফাইলটি চেক করে।
- এটি ইন্টারনাল কোডে পুরো পেজকে এভাবে সাজায়:
  \`\`\`typescript
  <Layout>
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  </Layout>
  \`\`\`
- পেজের async/await ফেচ কুয়েরি সম্পন্ন হওয়ার আগেই নেক্সট জেএস লেআউট ফাইল ও লোডিং ফাইলে থাকা কনটেন্ট ব্রাউজারে রিলিজ করে দেয়।
- সার্ভারে ডাটা লোড সম্পন্ন হওয়া মাত্রই স্বয়ংক্রিয়ভাবে লোডিং স্ক্রিনটি বদলে মূল পেজের ডিজাইন লোড হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্লাইট ট্র্যাকিং অ্যাপে:
- লাইভ ফ্লাইট ডাটা আসতে ৩ সেকেন্ড লাগে।
- ইউজার ৩ সেকেন্ড ফাঁকা স্ক্রিন দেখার চেয়ে সাথে সাথে ড্যাশবোর্ডের স্কেলিটন বা লোডিং স্ক্রিন দেখতে পান। ৩ সেকেন্ড পর ডাটা ফেচিং শেষ হলে ফ্লাইট চার্টটি ভেসে ওঠে।

### উত্তম অনুশীলন
লোডিং ফাইলে কন্টেন্টের সাথে মিল রেখে স্কেলিটন লোডার (Skeleton Loaders) বা স্পিনার ব্যবহার করুন। এটি সাইটের স্পিড সম্পর্কে ইউজারকে পজিটিভ ধারণা দেয়।

### সাধারণ ভুলসমূহ
লোডিং ফাইলের ভেতরে আবার কোনো বড় ডাটা ফেচ বা জটিল কুয়েরি করা। লোডিং স্ক্রিনকে যত হালকা সম্ভব রাখুন যাতে কোনো বাধা ছাড়াই এটি ফাস্ট স্ক্রিনে চলে আসে।

### Code Example
\`\`\`typescript
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  // স্কেলিটন লোডার ইউআই
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-18',
    title: 'Explain the purpose of error.tsx and how Mongoose/Next.js handles route errors.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['error.tsx', 'Error Boundary', 'App Router', 'Exception Handling'],
    enAnswer: 'error.tsx is a special Client Component that acts as a React Error Boundary for a route segment. If a runtime error occurs inside the page or nested components during rendering, it catches the exception, displays a fallback UI, and prevents the entire application from crashing.',
    bnAnswer: 'error.tsx হলো একটি বিশেষ ক্লায়েন্ট কম্পোনেন্ট যা রুট সেগমেন্টের জন্য রিঅ্যাক্ট এরর বাউন্ডারি হিসেবে কাজ করে। পেজ বা সাব-কম্পোনেন্টে কোনো রানটাইম এরর ঘটলে এটি তা ডিটেক্ট করে অ্যাপের বাকি অংশ সচল রেখে একটি ফলব্যাক ইউআই প্রদর্শন করে।',
    enExplanation: `### Explanation
When a runtime exception is thrown inside a React component, React normally unmounts the entire DOM tree, causing a blank white screen.

**\`error.tsx\` Integration:**
- Must be a Client Component (requires \`"use client"\`).
- Automatically wraps the page component inside a React Error Boundary.
- Receives two props:
  - \`error\`: The Javascript Error object.
  - \`reset\`: A function that triggers a re-render of the error boundary's contents, allowing recovery without page reload.
- **Scope**: An \`error.tsx\` boundary catches errors in the page *below* it. It does not catch errors in a sibling \`layout.tsx\` file. To handle layout errors, configure \`error.tsx\` in the parent directory.

### Real-World Example
If your Mongoose query fails because the MongoDB server database goes down:
- The page component throws a "Database connection lost" error.
- Next.js catches this error at the local \`error.tsx\` boundary.
- Instead of crashing the site, the user sees a styled card: "Server is temporarily busy. [Try Again]" (where clicking Try Again invokes the \`reset\` function).

### Best Practice
Always implement \`error.tsx\` in critical routes. Log exceptions to an external tracking service (like Sentry) within the error boundary. Provide users with a clear message and a retry button.

### Common Mistakes
Forgetting to put \`"use client"\` at the top of \`error.tsx\`. Error boundaries require lifecycle methods only available in Client Components.

### Code Example
\`\`\`typescript
// app/dashboard/error.tsx
"use client"; // Must be client-side

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void; // Function to retry rendering
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to tracking services like Sentry
    console.error('Captured page error:', error);
  }, [error]);

  return (
    <div className="p-6 border border-red-500 rounded bg-red-50 text-center">
      <h2 className="text-xl font-bold text-red-700">Something went wrong!</h2>
      <p className="text-sm text-gray-600 mt-2">{error.message}</p>
      <button
        onClick={() => reset()} // Try to recover
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোডে কোনো ভুল হলে বা এপিআই ক্র্যাশ করলে সাধারণত পুরো সাইট ব্লাঙ্ক বা সাদা হয়ে যায়।

**\`error.tsx\` এর কার্যপ্রণালী:**
- এটি অবশ্যই একটি ক্লায়েন্ট কম্পোনেন্ট (\`"use client"\`) হতে হবে।
- এটি চাইল্ড ফাইলগুলোর ওপর একটি এরর ফিল্টার বা বাউন্ডারি বসায়।
- এটি দুটি প্যারামিটার পায়:
  - \`error\`: জাভাস্ক্রিপ্ট এরর অবজেক্টটি।
  - \`reset\`: একটি ফাংশন যা এরর হওয়া পেজটিকে পুনরায় রেন্ডার করার চেষ্টা করে।
- **সীমা**: এটি লেআউট ফাইল ক্র্যাশ করলে তা ধরতে পারে না (তার জন্য প্যারেন্ট ডিরেক্টরির এরর ফাইল ব্যবহার করতে হয়)।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেস কানেকশন ফেইল করায় মঙ্গুস কোয়েরি এরর দিল:
- পেজে "Database connection lost" এক্সেপশন থ্রো হলো।
- সাইট ব্লাঙ্ক না হয়ে মঙ্গোডিবির এরর মেসেজের জায়গায় ভেসে উঠল: "সার্ভার সাময়িকভাবে ডাউন আছে। [আবার চেষ্টা করুন]"।
- ব্যবহারকারী [আবার চেষ্টা করুন] বাটনে ক্লিক করলে \`reset()\` ফাংশন চালু হয়ে পেজটি ডাটা ফেচ করতে আবার ট্রাই করবে।

### উত্তম অনুশীলন
গুরুত্বপূর্ণ ড্যাশবোর্ডে অবশ্যই \`error.tsx\` যুক্ত রাখুন। এরর আসার সাথে সাথে ব্যাকগ্রাউন্ডে তা সেন্ট্রির (Sentry) মতো ট্র্যাকিং সার্ভারে সেন্ড করার কোড লিখে রাখুন, এবং ইউজারকে ট্রাই করার অপশন দিন।

### সাধারণ ভুলসমূহ
\`error.tsx\` ফাইলের ওপরে \`"use client"\` লিখতে ভুলে যাওয়া। এরর বাউন্ডারি মডিউলে রিঅ্যাক্টের লাইফসাইকেল মেথড লাগায় এটি ক্লায়েন্ট হওয়া আবশ্যক।

### Code Example
\`\`\`typescript
// app/dashboard/error.tsx
"use client"; // অবশ্যই ক্লায়েন্ট কম্পোনেন্ট

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void; // পুনরায় পেজ রান করার ফাংশন
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // এরর ফাইল সেন্ট্রিতে পাঠানোর ট্র্যাকিং কোড
    console.error('এরর ধরা পড়েছে:', error);
  }, [error]);

  return (
    <div className="p-6 border border-red-500 rounded bg-red-50 text-center">
      <h2 className="text-xl font-bold text-red-700">অনাকাঙ্ক্ষিত এরর ঘটেছে!</h2>
      <p className="text-sm text-gray-600 mt-2">{error.message}</p>
      <button
        onClick={() => reset()} // রিস্টার্ট চেষ্টা করা
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-19',
    title: 'Explain the purpose of not-found.tsx and how to trigger a 404 page programmatically.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['not-found.tsx', '404 Page', 'App Router', 'Routing'],
    enAnswer: 'not-found.tsx is a special file used in the App Router to define a custom 404 page for a route segment. It can be triggered programmatically in Server or Client Components by importing and calling the notFound() function from next/navigation.',
    bnAnswer: 'not-found.tsx হলো একটি বিশেষ ফাইল যা কোনো রুটে কাস্টম ৪০৪ (404) স্ক্রিন দেখাতে ব্যবহৃত হয়। পেজে বা এপিআই-তে কাঙ্ক্ষিত ডাটা না পাওয়া গেলে next/navigation থেকে notFound() ফাংশনটি কল করে প্রোগ্রামাটিকালি এই স্ক্রিন ট্রিগার করা যায়।',
    enExplanation: `### Explanation
A 404 error signifies that a requested URL or database resource does not exist.

**\`not-found.tsx\` Features:**
- Can be placed at the root (\`app/not-found.tsx\`) to act as the global 404 page.
- Can be placed inside nested subfolders (e.g. \`app/products/not-found.tsx\`) to display a localized 404 page (e.g., custom product-not-found layout).
- **Triggering**: Call the \`notFound()\` function. It immediately stops executing the component and mounts the nearest \`not-found.tsx\` boundary.

### Real-World Example
In a blog detail view:
- User queries \`/posts/non-existent-slug\`.
- The database returns \`null\` for the article details.
- We check \`if (!post) notFound();\`. Next.js instantly displays the customized 404 page.

### Best Practice
Design user-friendly 404 pages containing direct search inputs or dashboard links so lost users can easily navigate back to active sections of your site.

### Common Mistakes
Writing standard return redirects in component code to point to \`/404\` route. Simply call the native \`notFound()\` API directly to let Next.js handle the HTTP headers and SEO status code correctly.

### Code Example
\`\`\`typescript
// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  
  // If post does not exist (status 404), trigger 404 screen programmatically
  if (res.status === 404) {
    notFound(); 
  }

  const post = await res.json();

  return (
    <div className="p-6">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
৪০৪ (404) মানে হলো রিকোয়েস্ট করা ইউআরএল বা পেজটির কোনো অস্তিত্ব নেই।

**\`not-found.tsx\` ফাইলের গুণাবলী:**
- এটি রুট ফোল্ডারে (\`app/not-found.tsx\`) রাখলে গ্লোবাল ৪০৪ পেজ হিসেবে কাজ করে।
- সাব-ফোল্ডারে (যেমন: \`app/products/not-found.tsx\`) রাখলে নির্দিষ্ট প্রোডাক্টের ক্যাটাগরিতে ৪০৪ পেজ প্রদর্শন করা যায়।
- **ট্রিগার করার নিয়ম**: কোডে ডাটা না পেলে সরাসরি \`notFound()\` ফাংশন কল করলেই নেক্সট জেএস পেজ লোড বন্ধ করে নিকটবর্তী 404 স্ক্রিন লোড করবে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটে:
- ইউজার এমন লিংকে ঢুকলেন যা ডাটাবেসে নেই (\`/posts/wrong-id\`)।
- ডাটাবেস কুয়েরি \`null\` রিটার্ন করল।
- কোডে কন্ডিশন বসানো হলো: \`if (!post) notFound()\`। এর ফলে ব্যবহারকারী সাথে সাথে "পোস্টটি খুঁজে পাওয়া যায়নি" সংবলিত কাস্টম পেজ দেখতে পাবেন।

### উত্তম অনুশীলন
ইউজার ফ্রেন্ডলি ৪০৪ পেজ ডিজাইন করুন যেখানে একটি সার্চ বক্স বা ড্যাশবোর্ডে ফিরে যাওয়ার বাটন থাকবে, যাতে ব্যবহারকারী পথ হারিয়ে সাইট বন্ধ না করে।

### সাধারণ ভুলসমূহ
ডাটা না পাওয়া গেলে ম্যানুয়ালি \`/404\` নামক ইউআরএল পাথে রিডাইরেক্ট করা। এতে মেটাডাটা ও সার্চ ইঞ্জিনের ইনডেক্সিং নষ্ট হয়। সরাসরি নেক্সট জেএস-এর ইন-বিল্ট \`notFound()\` কল করুন।

### Code Example
\`\`\`typescript
// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  
  // এপিআই যদি ৪০৪ রেসপন্স দেয়, তবে programmatically ৪০৪ পেজ ট্রিগার করা
  if (res.status === 404) {
    notFound(); 
  }

  const post = await res.json();

  return (
    <div className="p-6">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-20',
    title: 'How do you use the useRouter hook in Next.js, and which package should it be imported from in the App Router?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['useRouter', 'Navigation', 'App Router', 'Client Components'],
    enAnswer: 'In the App Router, the useRouter hook must be imported from next/navigation (not next/router). It can only be used inside Client Components to trigger programmatical navigation such as router.push(), router.replace(), or router.back().',
    bnAnswer: 'App Router-এ useRouter হুকটি অবশ্যই next/navigation (next/router নয়) থেকে ইম্পোর্ট করতে হবে। এটি শুধুমাত্র ক্লায়েন্ট কম্পোনেন্টে ব্যবহার করা যায় এবং এর সাহায্যে router.push(), router.replace() বা router.back() দিয়ে ইউআরএল পরিবর্তন করা যায়।',
    enExplanation: `### Explanation
The routing API underwent refactoring in Next.js v13 to support the App Router architecture.

**Key Rules for Navigation:**
- **Import Namespace**: Always use \`next/navigation\`. The old namespace \`next/router\` only works in the Pages Router.
- **Client Boundary**: Can only be executed inside components marked with \`"use client"\`.
- **Primary Methods**:
  - \`router.push(href)\`: Navigates to the path and adds a new entry to the browser history stack.
  - \`router.replace(href)\`: Navigates to the path, replacing the current entry in the history stack.
  - \`router.refresh()\`: Refreshes the active route, requesting a fresh server render without losing state.

### Real-World Example
In a login form Client Component:
- After calling the authorization API and receiving a success token, you want to redirect the user to the profile page.
- You invoke \`router.push('/dashboard')\` programmatically.

### Best Practice
For standard links, always use the \`<Link>\` component rather than \`useRouter()\` push events, as \`<Link>\` supports automatic prefetching of page assets. Use \`useRouter\` only when routing is dependent on asynchronous API callbacks (e.g. after a payment is authorized).

### Common Mistakes
Importing \`useRouter\` from \`next/router\` in an App Router project. This triggers a compilation error: "NextRouter was not mounted".

### Code Example
\`\`\`typescript
// app/login/LoginForm.tsx
"use client"; // Required for hooks

import { useRouter } from 'next/navigation'; // Correct import

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async () => {
    // Perform authentication call
    const success = await loginAPI();
    
    if (success) {
      // Programmatic redirection
      router.push('/dashboard');
    }
  };

  return (
    <button onClick={handleLogin} className="p-2 bg-blue-600 text-white rounded">
      Sign In
    </button>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস ১৩+ এ App Router চালু করার পর রাউটিং এপিআই-তে বড় পরিবর্তন এসেছে।

**ব্যবহারের নিয়মাবলী:**
- **সঠিক প্যাকেজ**: সর্বদা \`next/navigation\` থেকে ইম্পোর্ট করতে হবে। পুরোনো \`next/router\` কেবল Pages Router-এ সাপোর্ট করে।
- **ক্লায়েন্ট বাউন্ডারি**: এটি ব্যবহারের জন্য ফাইলে অবশ্যই \`"use client"\` থাকতে হবে।
- **প্রধান মেথডস**:
  - \`router.push(url)\`: নতুন লিংকে যায় এবং ব্রাউজার হিস্ট্রিতে একটি রেকর্ড যুক্ত করে।
  - \`router.replace(url)\`: কারেন্ট পেজকে নতুন লিংক দিয়ে রিপ্লেস করে (হিস্ট্রি ট্র্যাক করে না)।
  - \`router.refresh()\`: পেজের ডাটা সার্ভার থেকে নতুন করে লোড করে স্টেট রিসেট না করেই।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লগইন ফর্ম কম্পোনেন্টে:
- ইউজার আইডি ও পাসওয়ার্ড দিয়ে পেমেন্ট সফল হওয়ার পর তাকে ড্যাশবোর্ডে পাঠাতে হবে।
- এপিআই কল সফল হওয়ার রেসপন্স ব্লকের পর কোড রান করুন: \`router.push('/dashboard')\`।

### উত্তম অনুশীলন
সাধারণ নেভিগেশনের জন্য কোডে \`useRouter\` ব্যবহারের চেয়ে \`<Link>\` কম্পোনেন্ট ব্যবহার করা অনেক ভালো, কারণ ওটি প্রি-ফেচিং সাপোর্ট করে। কেবল এপিআই সাকসেস/ফেইল কোড লজিকের ওপর ভিত্তি করে পেজ চেঞ্জ করতে \`useRouter\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভুল করে \`next/router\` থেকে \`useRouter\` ইম্পোর্ট করা। এর ফলে কনসোলে "NextRouter was not mounted" লাল এরর মেসেজ আসবে ও অ্যাপ ক্র্যাশ করবে।

### Code Example
\`\`\`typescript
// app/login/LoginForm.tsx
"use client"; // হুক ব্যবহারের জন্য ক্লায়েন্ট মোড আবশ্যক

import { useRouter } from 'next/navigation'; // সঠিক ইম্পোর্ট

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async () => {
    // লগইন এপিআই ভেরিফিকেশন কল
    const success = await loginAPI();
    
    if (success) {
      // প্রোগ্রামাটিকালি ড্যাশবোর্ডে রিডাইরেক্ট করা
      router.push('/dashboard');
    }
  };

  return (
    <button onClick={handleLogin} className="p-2 bg-blue-600 text-white rounded">
      লগইন করুন
    </button>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-21',
    title: 'What is client-side navigation in Next.js and how does it optimize performance?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Routing', 'Performance', 'Client-side Navigation'],
    enAnswer: 'Client-side navigation renders route transitions inside the browser without requesting a full page reload from the server. Next.js intercepts navigation, fetches only the required JSON data for the new page segment, and updates the DOM dynamically, preserving app state and speeding up response times.',
    bnAnswer: 'ক্লায়েন্ট-সাইড নেভিগেশন সার্ভার থেকে নতুন করে সম্পূর্ণ পেজ রি-ডাউনলোড না করেই ব্রাউজারের ভেতর রুট পরিবর্তন করে। নেক্সট জেএস ক্লিক ফিল্টার করে কেবল নতুন পেজের জন্য প্রয়োজনীয় JSON ফাইলটি ডাউনলোড করে ডম (DOM) আপডেট করে, যা অ্যাপের গতি বাড়ায়।',
    enExplanation: `### Explanation
Traditional multi-page sites destroy the browser DOM and download all CSS, JS, and HTML again on every link click.

**Client-Side Navigation optimization:**
1. **Partial Fetching**: Next.js downloads only the compiled Javascript segment and JSON props of the new page. Shared layouts are not downloaded again.
2. **State Preservation**: Since the browser context never unmounts fully, global states (like Redux, React Context, or Audio players) remain playing without interruption.
3. **Instant Rendering**: Combines with prefetching to load pages in milliseconds.

### Real-World Example
In a music streaming dashboard:
- The sidebar music player is defined in the root layout.
- The user is listening to a song and clicks "Settings" (\`<Link href="/settings">\`).
- Because of client-side navigation, the page content updates to Settings, but the music player in the layout keeps playing the song uninterrupted.

### Best Practice
Maintain a clean separation between page-specific states and layout-level states to utilize the benefits of layout preservation during client-side navigation.

### Common Mistakes
Using raw HTML \`<a href="/about">\` tags which cause the browser to do a hard refresh, killing active music players, clearing application cache, and forcing raw bundle downloads again.

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      {/* Client-side navigation: layout state is preserved */}
      <Link href="/dashboard/profile" className="text-blue-500">
        Profile (No Page Reload)
      </Link>
      
      <Link href="/dashboard/settings" className="text-blue-500">
        Settings (Instant Transition)
      </Link>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সনাতন ওয়েব ডেভেলপমেন্টে কোনো লিংকে ক্লিক করলে ব্রাউজার ডম (DOM) ভেঙে আবার নতুন করে সব ফাইল ডাউনলোড করে পেজ রিলোড করত।

**ক্লায়েন্ট-সাইড নেভিগেশনের কাজের ধারা:**
১. **আংশিক ডাটা ফেচ (Partial Fetching)**: নতুন পেজে যাওয়ার সময় নেক্সট জেএস কেবল ওই পেজের জন্য দরকারি জাভাস্ক্রিপ্ট টেমপ্লেট ও ডাটা ফেচ করে। কমন রুট লেআউট আগের ফাইলে ক্যাশ থাকে।
২. **স্টেট সংরক্ষণ**: ব্রাউজার সম্পূর্ণ রিফ্রেশ না হওয়ায় গ্লোবাল প্রোভাইডার, সেশন বা মিউজিক প্লেয়ার রানিং থাকে কোনো বাধা ছাড়াই।
৩. **ইনস্ট্যান্ট লোডিং**: এটি প্রি-ফেচিংয়ের সাথে মিলে সেকেন্ডেরও কম সময়ে পেজ লোড করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গান শোনার ড্যাশবোর্ডে:
- মিউজিক প্লেয়ারটি রুট লেআউটে সেট করা আছে।
- গান চলার সময় ইউজার যদি "সেটিংস" লিংকে ক্লিক করে নতুন পেজে যান, পেজের লেখা চেঞ্জ হবে কিন্তু গানটি ব্যাকগ্রাউন্ডে নিরবচ্ছিন্নভাবে চলতে থাকবে কারণ ক্লায়েন্ট নেভিগেশনে রিলোড হয়নি।

### উত্তম অনুশীলন
পেজ চেঞ্জ লেআউটকে ইফেক্ট করে না তা মাথায় রেখে ড্যাশবোর্ডের মেইন বডি ও শেয়ার্ড সাইডবার আলাদা আলাদা ফাইলে ডিজাইন করুন।

### সাধারণ ভুলসমূহ
ভুল করে \`<a href="/about">\` ট্যাগ ব্যবহার করা। এটি পুরো সাইট রিফ্রেশ করিয়ে চালু থাকা প্লেয়ার বা প্রোভাইডারের ডাটা মুছে দেবে।

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      {/* ক্লায়েন্ট নেভিগেশন: পেজ রিলোড হবে না */}
      <Link href="/dashboard/profile" className="text-blue-500">
        প্রোফাইল (ফাস্ট ট্রানজিশন)
      </Link>
      
      <Link href="/dashboard/settings" className="text-blue-500">
        সেটিংস (স্মুথ পরিবর্তন)
      </Link>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-22',
    title: 'How do you define Route Groups in Next.js, and what is their use case?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Route Groups', 'App Router', 'Routing', 'Layouts'],
    enAnswer: 'Route Groups are defined by wrapping a folder name in parentheses, e.g., (marketing) or (auth). Next.js ignores this folder name in the URL path, allowing you to organize routes and layout structures cleanly without modifying the URL.',
    bnAnswer: 'ফোল্ডারের নাম ফার্স্ট ব্র্যাকেটে মুড়ে (যেমন: (marketing) বা (auth)) রুট গ্রুপ তৈরি করা হয়। নেক্সট জেএস এই ফোল্ডার নামটিকে ইউআরএল পাথ থেকে বাদ রাখে, যা ইউআরএল পরিবর্তন না করেই প্রজেক্টের ফাইল ও লেআউট স্ট্রাকচার সাজাতে সাহায্য করে।',
    enExplanation: `### Explanation
As projects scale, folders in the \`app/\` directory become messy. Route Groups solve this by grouping folders logically:
- **Ignored in URL**: A file inside \`app/(auth)/login/page.tsx\` resolves to \`/login\` (the \`(auth)\` folder is ignored in the path).
- **Multiple Layouts**: You can create separate layouts inside each group. For example, \`app/(auth)/layout.tsx\` can define a simple layout without headers/footers, while \`app/(shop)/layout.tsx\` defines a layout with shopping carts.

### Real-World Example
In a SaaS software platform:
- The public site needs a header, footer, and marketing banners.
- The app dashboard needs a complex dashboard sidebar.
- You organize routes into two groups: \`(marketing)\` and \`(dashboard)\`. Both have distinct layouts, but their pages reside at root-level URL paths (e.g. \`/pricing\` and \`/billing\`).

### Best Practice
Use Route Groups to prevent layouts from leaking to unrelated pages. Keep auth forms (login, register) inside a \`(auth)\` group to enforce an isolated layout without header navigation.

### Common Mistakes
Creating duplicate routes in different route groups, for example: \`app/(marketing)/about/page.tsx\` and \`app/(dashboard)/about/page.tsx\`. This creates a route path conflict, and Next.js will throw a compile-time build error.

### Code Example
\`\`\`
Route Group Project Directory Structure:
src/
└── app/
    ├── (auth)/
    │   ├── layout.tsx      // Auth layout (e.g., center card layout)
    │   ├── login/
    │   │   └── page.tsx    // URL path resolved to: /login
    │   └── register/
    │       └── page.tsx    // URL path resolved to: /register
    └── (shop)/
        ├── layout.tsx      // Shop layout (e.g., has Shopping Cart Header)
        ├── page.tsx        // URL path resolved to: / (Shop Home)
        └── cart/
            └── page.tsx    // URL path resolved to: /cart
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রজেক্ট বড় হতে থাকলে \`app/\` ফোল্ডারের ফাইল সংখ্যা অনেক বেড়ে অগোছালো হয়ে যায়। রুট গ্রুপ ফোল্ডার লজিক্যালি গ্রুপ করার চমৎকার উপায়:
- **ইউআরএল পাথ অবহেলা**: \`app/(auth)/login/page.tsx\` ফাইলটি ব্রাউজারে সরাসরি \`/login\` হিসেবে কাজ করবে (\`(auth)\` শব্দটি পাথের মাঝে আসবে না)।
- **মাল্টি-লেআউট সুবিধা**: প্রতিটি গ্রুপের ভেতরে আলাদা লেআউট তৈরি করা যায়। যেমন: \`(auth)\` গ্রুপে হেডার-ফুটার ছাড়া খালি স্ক্রিন লেআউট, আবার \`(shop)\` ফোল্ডারে শপিং কার্ট হেডার সহ লেআউট বসানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ
সফটওয়্যার সাইটে:
- পাবলিক মার্কেটিং পেজে বড় হেডার, ফুটার ও ব্যানার থাকবে।
- ড্যাশবোর্ডের ভেতরে কেবল সাইডবার মেনু ও ডাটা টেবিল থাকবে।
- ফোল্ডার স্ট্রাকচারকে \`(marketing)\` ও \`(dashboard)\` এই দুই গ্রুপে ভাগ করে দুটিতে পৃথক লেআউট রাখা হলো। কিন্তু তাদের পেজগুলোর ইউআরএল পাথে কোনো অতিরিক্ত ফোল্ডার শো করবে না (যেমন: \`/pricing\` বা \`/billing\`)।

### উত্তম অনুশীলন
অপ্রয়োজনীয় পেজে লেআউট ঢুকে যাওয়া বন্ধ করতে রুট গ্রুপ ব্যবহার করুন। লগইন ও রেজিস্ট্রেশন পেজগুলোকে একটি \`(auth)\` গ্রুপে সেপারেট রাখুন যাতে মূল ল্যান্ডিং পেজের হেডার নেভিগেশন ওসব ফর্মে লোড না হয়।

### সাধারণ ভুলসমূহ
ভিন্ন ভিন্ন রুট গ্রুপে একই নামের পেজ তৈরি করা। যেমন: \`app/(marketing)/about/page.tsx\` এবং \`app/(dashboard)/about/page.tsx\`। এটি একই পাথ ডুপ্লিকেট করায় বিল্ড এরর দেবে।

### Code Example
\`\`\`
রুট গ্রুপ প্রজেক্ট ডিরেক্টরি লেআউট:
src/
└── app/
    ├── (auth)/
    │   ├── layout.tsx      // অথেন্টিকেশন লেআউট (হেডার ছাড়া)
    │   ├── login/
    │   │   └── page.tsx    // ব্রাউজার ইউআরএল পাথ: /login
    │   └── register/
    │       └── page.tsx    // ব্রাউজার ইউআরএল পাথ: /register
    └── (shop)/
        ├── layout.tsx      // শপ লেআউট (শপিং কার্ট হেডার সহ)
        ├── page.tsx        // ব্রাউজার ইউআরএল পাথ: / (শপ হোম)
        └── cart/
            └── page.tsx    // ব্রাউজার ইউআরএল পাথ: /cart
\`\`\``
  },
  {
    id: 'nextjs-23',
    title: 'What are Server Actions in Next.js, and what is a basic implementation of one?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Server Actions', 'Data Mutations', 'App Router', 'Forms'],
    enAnswer: 'Server Actions are asynchronous functions executed on the server, triggered directly from client components or HTML form actions. They allow you to perform database updates, mutations, and backend logic without creating an API route handler.',
    bnAnswer: 'সার্ভার অ্যাকশন (Server Actions) হলো সার্ভারে চলা অ্যাসিনক্রোনাস ফাংশন যা সরাসরি ক্লায়েন্ট ফাইল বা HTML ফর্ম অ্যাকশন থেকে ট্রিগার করা যায়। এর মাধ্যমে কোনো ব্যাকএন্ড এপিআই রুট তৈরি ছাড়াই সরাসরি ডাটাবেস আপডেট ও মিউটেশনের কাজ করা সম্ভব।',
    enExplanation: `### Explanation
Server Actions integrate client forms with server-side executions:
- **Declaration**: Declared using the \`"use server"\` directive at the top of the function or file.
- **Form Integration**: Passed directly to the \`<form action={myAction}>\` attribute. Next.js handles the network fetch under the hood.
- **Edge cases**: Can run on JavaScript-disabled browsers (progressive enhancement).

### Real-World Example
In a user contact form:
- The user fills in their email and comment.
- When they click "Send", a Server Action runs directly on the Node.js backend to validate the email and save the record in MongoDB. The client page does not need an API fetch controller.

### Best Practice
Keep Server Actions secure. Always run validation on the input arguments inside the Server Action (e.g., using Zod) because any client input can be manipulated.

### Common Mistakes
Putting Mongoose model write actions directly in a client component. Client files cannot execute server logic. You must export the action from a server file or declare it as a Server Action.

### Code Example
\`\`\`typescript
// app/actions.ts (Server-side actions file)
"use server"; // Tells Next.js to run this on the server only

import { db } from '@/lib/db';

export async function createFeedback(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validate data
  if (!email || !message) {
    throw new Error('All fields are required');
  }

  // Save to database directly
  await db.feedback.create({ data: { email, message } });
}

// app/feedback/page.tsx (Form Component)
import { createFeedback } from '../actions';

export default function FeedbackPage() {
  return (
    <form action={createFeedback} className="p-6 space-y-4 max-w-sm">
      <input name="email" type="email" placeholder="Your Email" className="border p-2 w-full" />
      <textarea name="message" placeholder="Message" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Submit Feedback
      </button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার অ্যাকশন ক্লায়েন্ট সাইডের সাথে সরাসরি সার্ভার সাইডের যোগাযোগ স্থাপন করে:
- **ঘোষণা**: ফাংশন বা ফাইলের শুরুতে \`"use server"\` ডিরেক্টিভ লিখে এটি ডিক্লেয়ার করা হয়।
- **ফর্ম ইন্টিগ্রেশন**: সরাসরি HTML ফর্মার \`<form action={myAction}>\` অ্যাকশনে পাস করা যায়। নেটওয়ার্কিং রিকোয়েস্ট নেক্সট জেএস নিজে হ্যান্ডেল করে।
- **প্রোগ্রেসিভ এনহান্সমেন্ট**: ব্রাউজারে জাভাস্ক্রিপ্ট নিষ্ক্রিয় থাকলেও এটি ফর্মে সাবমিট করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফিডব্যাক ফর্মে:
- ইউজার তার ইমেইল ও মন্তব্য লিখল।
- সে সাবমিট বাটনে ক্লিক করলে একটি সার্ভার অ্যাকশন রান হয়ে নোড সার্ভারে ইমেইল ভ্যালিডেশন চেক করে ও ডাটা মঙ্গোডিবির কালেকশনে সেভ করে দেয়। এর জন্য এক্সপ্রেসের কোনো এক্সটার্নাল এপিআই বানাতে হয় না।

### উত্তম অনুশীলন
সার্ভার অ্যাকশনগুলো সিকিউর রাখুন। অ্যাকশন ফাইলের ভেতর ইনপুট আর্গুমেন্ট চেক করতে ভ্যালিডেটর (যেমন: Zod) ব্যবহার করুন, কারণ ইউজারের পাঠানো যেকোনো ডাটা ম্যানিপুলেট হতে পারে।

### সাধারণ ভুলসমূহ
সরাসরি ক্লায়েন্ট কম্পোনেন্ট ফাইলের ভেতর ডাটাবেস রাইট বা মঙ্গুস কুয়েরির কোড লিখে ফেলা। ক্লায়েন্ট ফাইলে ডাটাবেস কানেকশন কাজ করবে না, একে অবশ্যই কাস্টম সার্ভার অ্যাকশনে রাখতে হবে।

### Code Example
\`\`\`typescript
// app/actions.ts (সার্ভার সাইড অ্যাকশন ফাইল)
"use server"; // মঙ্গোডিবি কুয়েরির মতো সার্ভারে রান হবে

import { db } from '@/lib/db';

export async function createFeedback(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // ভ্যালিডেশন
  if (!email || !message) {
    throw new Error('সবগুলো ফিল্ড পূরণ করা আবশ্যক');
  }

  // সরাসরি ডাটাবেসে সেভ করা
  await db.feedback.create({ data: { email, message } });
}

// app/feedback/page.tsx (ফিডব্যাক পেজ)
import { createFeedback } from '../actions';

export default function FeedbackPage() {
  return (
    <form action={createFeedback} className="p-6 space-y-4 max-w-sm">
      <input name="email" type="email" placeholder="আপনার ইমেইল" className="border p-2 w-full" />
      <textarea name="message" placeholder="মন্তব্য লিখুন" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        সাবমিট ফিডব্যাক
      </button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-24',
    title: 'How do you create catch-all routes in Next.js using [...slug] syntax?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Catch-all Routes', 'App Router', 'Routing'],
    enAnswer: 'Catch-all routes are created by placing three dots before the parameter name inside square brackets, e.g. [...slug]. This matches any nested URL paths, and the parameter values are passed to the page as an array of string segments.',
    bnAnswer: 'ফোল্ডারের নামের শুরুতে তিনটি ডট বসিয়ে (যেমন: [...slug]) ক্যাচ-অল রুট তৈরি করা হয়। এটি যেকোনো গভীরতার নেস্টেড ইউআরএল পাথকে ম্যাচ করে এবং প্যারামিটারের মানগুলো পেজে স্ট্রিংয়ের অ্যারে (Array) হিসেবে পাস করে।',
    enExplanation: `### Explanation
Dynamic segments match only a single URL path folder. Catch-all routes match all subsequent subpaths recursively:
- Folder path: \`app/docs/[...slug]/page.tsx\`
- Matches:
  - \`/docs/setup\` -> \`params.slug = ["setup"]\`
  - \`/docs/setup/install/node\` -> \`params.slug = ["setup", "install", "node"]\`
- **Limitations**: The base path (\`/docs\`) does not match unless you use *Optional Catch-All* routing using double square brackets (\`[[...slug]]\`).

### Real-World Example
In a documentation site:
- Pages are organized in deep directory paths.
- Instead of creating hundreds of folders, you create a single \`app/docs/[...slug]/page.tsx\`.
- Based on the array segments in \`slug\`, you load the matching Markdown file dynamically from disk.

### Best Practice
Use Catch-All routes for building content management systems (CMS), wikis, or documentation pages where URL paths vary in nesting depth dynamically.

### Common Mistakes
Forgetting that accessing the slug directly yields an array. If you try to run a query treating \`slug\` as a string without joining the array segments (e.g. \`slug.join('/')\`), database lookups will fail.

### Code Example
\`\`\`typescript
// app/docs/[...slug]/page.tsx
type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  // Await params and get slug array
  const { slug } = await params;

  // Convert array to URL path structure
  const docPath = slug.join('/'); 
  
  return (
    <div className="p-6">
      <h1>Documentation View</h1>
      <p>Active Path: docs/{docPath}</p>
      <p>Target Segment depth: {slug.length}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্বাভাবিক ডায়নামিক রাউটিং কেবল একটি নির্দিষ্ট ফোল্ডার ইউআরএল ম্যাচ করে। তবে ক্যাচ-অল রুট সমস্ত চাইল্ড পাথকে একসাথে ক্যাপচার করে:
- ফোল্ডার বিন্যাস: \`app/docs/[...slug]/page.tsx\`
- ম্যাচিং ইউআরএল:
  - \`/docs/setup\` -> \`params.slug = ["setup"]\`
  - \`/docs/setup/install/node\` -> \`params.slug = ["setup", "install", "node"]\`
- **সীমাবদ্ধতা**: মূল বেস পাথ (\`/docs\`) এতে এরর দেখাবে, যদি না আপনি ডাবল ব্র্যাকেট বিশিষ্ট অপশনাল ক্যাচ-অল (\`[[...slug]]\`) ব্যবহার করেন।

### বাস্তব-ভিত্তিক উদাহরণ
ডকুমেন্টেশন বা উইকিপিডিয়া সাইটে:
- ডক পেজগুলো অনেকগুলো নেস্টেড সাব-পাথে থাকে।
- শত শত ফোল্ডার না বানিয়ে আপনি একটি মাত্র \`app/docs/[...slug]/page.tsx\` ফাইল তৈরি করলেন।
- \`slug\`-এর ভেতর পাওয়া অ্যারের মানগুলো (\`["setup", "install"]\`) জোড়া দিয়ে সরাসরি ব্যাকএন্ড থেকে ডক ফাইল রিড করে স্ক্রিনে লোড করা যায়।

### উত্তম অনুশীলন
কনটেন্ট ম্যানেজমেন্ট সিস্টেম (CMS), ব্লগ ক্যাটাগরি বা জটিল ডকুমেন্টেশন সাইট বানাতে ক্যাচ-অল রুট ব্যবহার করুন, যেখানে ইউআরএল ডাইনামিকালি অনেক দূর পর্যন্ত এক্সটেন্ড হতে পারে।

### সাধারণ ভুলসমূহ
\`slug\` একটি অ্যারে হিসেবে আসে তা ভুলে যাওয়া। আপনি যদি ডাটাবেস কোয়েরিতে ডিরেক্ট স্ট্রিং হিসেবে ম্যাচ করাতে চান, তবে কুয়েরি ফেইল করবে। আগে \`slug.join('/')\` করে পাথ বানিয়ে নিন।

### Code Example
\`\`\`typescript
// app/docs/[...slug]/page.tsx
type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  // params প্রোমিজ রিজলভ করা
  const { slug } = await params;

  // অ্যারের মানগুলো দিয়ে পাথ তৈরি
  const docPath = slug.join('/'); 
  
  return (
    <div className="p-6">
      <h1>ডকুমেন্টেশন ভিউ</h1>
      <p>বর্তমান পাথ: docs/{docPath}</p>
      <p>পাথের সেগমেন্ট সংখ্যা: {slug.length}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-25',
    title: 'Explain the static export feature in Next.js (output: "export") and its limitations.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Static Export', 'next export', 'Deployment', 'SSG'],
    enAnswer: 'Static export compiles your Next.js application into static HTML, CSS, and JS files inside an out/ directory. Its key limitations are that it does not support server-side rendering (SSR), dynamic Route Handlers, Server Actions, or next/image optimization using the default node server optimizer.',
    bnAnswer: 'স্ট্যাটিক এক্সপোর্ট Next.js অ্যাপকে কম্পাইল করে স্ট্যাটিক HTML, CSS ও JS ফাইলে রূপান্তর করে out/ ফোল্ডারে রাখে। এর মূল সীমাবদ্ধতা হলো এটি সার্ভার-সাইড রেন্ডারিং (SSR), এপিআই রুট হ্যান্ডলার, সার্ভার অ্যাকশন এবং ডিফল্ট ডাইনামিক ইমেজ অপ্টিমাইজার সমর্থন করে না।',
    enExplanation: `### Explanation
Configuring \`output: 'export'\` inside \`next.config.js\` allows deploying Next.js to static hosting providers (such as GitHub Pages, Netlify, or AWS S3 buckets).

**Build Workflow:**
- Runs static rendering for all routes during \`next build\`.
- Outputs assets to the \`out/\` folder.

**Unsupported Features in Static Export:**
- **Server Rendering (SSR)**: Routes using \`cookies()\` or \`headers()\` fail build.
- **Server Actions**: Form submissions executing server-side logic are blocked.
- **Route Handlers**: API routes that read dynamic requests are not compiled.
- **Image Optimization**: The default server-side resizer (\`next/image\`) fails because there is no running Node.js server to handle dynamic image resizing.

### Real-World Example
For a company portfolio landing page that displays static layouts:
- Static export is perfect. You can host the build on AWS S3 for cents per month, handling millions of visitors without a backend server instance.

### Best Practice
Only use static export for Jamstack, static marketing portals, or fully client-side Single Page Apps (SPA). Whitelist an external image optimizer (like Cloudinary) inside \`next.config.js\` if you need image optimization in static builds.

### Common Mistakes
Enabling static export on an application that requires server-side authentication cookies or secure database reads on load, which breaks the build compiler.

### Code Example
\`\`\`javascript
// next.config.js (Configuration File)
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  
  // Custom image loader configuration is mandatory for static exports
  images: {
    unoptimized: true // Disable default dynamic server resizing
  }
};

module.exports = nextConfig;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`next.config.js\` ফাইলে \`output: 'export'\` বসিয়ে দিলে পুরো অ্যাপটি র-স্ট্যাটিক ফাইলে বিল্ড হয়ে \`out/\` ডিরেক্টরিতে জমা হয়, যা GitHub Pages বা S3 বাকেটে হোস্ট করা যায়।

**বিল্ড প্রসেস:**
- বিল্ড দেওয়ার সময় সমস্ত রুটকে স্ট্যাটিক HTML পেজে কনভার্ট করে ফাইলে পরিণত করে।

**স্ট্যাটিক এক্সপোর্টে যা যা সাপোর্ট করে না:**
- **সার্ভার রেন্ডারিং (SSR)**: কুকিজ বা ডাইনামিক হেডার যুক্ত পেজ বিল্ড হবে না।
- **সার্ভার অ্যাকশন**: ব্যাকএন্ড লজিক রান করানোর অপশন নিষ্ক্রিয় থাকে।
- **এপিআই রুট**: ডাইনামিক কুয়েরি করা এপিআই হ্যান্ডলার কাজ করবে না।
- **ইমেজ অপ্টিমাইজার**: ইমেজ অপ্টিমাইজ করার জন্য নোড সার্ভার ব্যাকএন্ড রানিং না থাকায় ছবি অপ্টিমাইজ হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির ল্যান্ডিং পোর্টফোলিও পেজে:
- এখানে মেম্বার লগইন বা ডাইনামিক ট্রানজ্যাকশন নেই।
- স্ট্যাটিক এক্সপোর্ট করে বিল্ড ফাইলটি সরাসরি Netlify-তে ফ্রিতে হোস্ট করে লক্ষ লক্ষ ইউজারের ট্রাফিক সামলানো সম্ভব।

### উত্তম অনুশীলন
কেবল স্ট্যাটিক মার্কেটিং সাইট বা কমপ্লিটলি ক্লায়েন্ট-সাইড সিঙ্গেল পেজ অ্যাপ্লিকেশনের জন্য এটি অন করুন। ইমেজ ব্যবহারের জন্য কনফিগারেশনে \`unoptimized: true\` দিয়ে রাখুন।

### সাধারণ ভুলসমূহ
ডাটাবেস কানেকশন যুক্ত বা কুকিজ অথেন্টিকেশন যুক্ত জটিল ড্যাশবোর্ডে স্ট্যাটিক এক্সপোর্ট অন করে বিল্ড দেওয়ার চেষ্টা করা, যা কম্পাইলার এরর তৈরি করে।

### Code Example
\`\`\`javascript
// next.config.js (কনফিগারেশন ফাইল)
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // স্ট্যাটিক এইচটিএমএল এক্সপোর্ট অন করা
  
  // স্ট্যাটিক এক্সপোর্টে ডিফল্ট ইমেজ অপ্টিমাইজার কাজ না করায় কনফিগার করা
  images: {
    unoptimized: true // ডাইনামিক সার্ভার ইমেজ রিসাইজিং নিষ্ক্রিয় করা
  }
};

module.exports = nextConfig;
\`\`\``
  },
  {
    id: 'nextjs-26',
    title: 'How do you handle redirects in Next.js? Compare configuration redirects vs. component-level redirects.',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Redirects', 'Routing', 'next.config.js', 'App Router'],
    enAnswer: 'Redirects in Next.js are handled globally in next.config.js (ideal for SEO URL pattern updates) or dynamically inside components and route handlers using the redirect() function from next/navigation.',
    bnAnswer: 'Next.js-এ রিডাইরেক্ট দুইভাবে করা যায়: গ্লোবালি next.config.js ফাইলের মাধ্যমে (SEO ইউআরএল পরিবর্তনের জন্য ভালো) অথবা প্রোগ্রামাটিকালি কম্পোনেন্ট ও রুট হ্যান্ডলারের ভেতর next/navigation থেকে redirect() ফাংশন কল করে।',
    enExplanation: `### Explanation
Redirecting users from one path to another is a core requirement:

**1. Configuration Redirects (\`next.config.js\`)**:
- Executed at the server configuration level before request routing hits your React code.
- **Performance**: Extremely fast.
- **Use Case**: Permanently moving paths (301 redirect) for search engine crawler adjustments.

**2. Component/API Redirects (\`redirect()\` function)**:
- Executed dynamically inside Server Components, Route Handlers, or Server Actions.
- **How it works**: Internally throws a redirect exception, stopping rendering immediately.
- **Use Case**: Redirecting unauthorized users to \`/login\`.

### Real-World Example
In a subscription app:
- A user attempts to visit \`/dashboard\`.
- You check their billing state inside \`page.tsx\`. If the subscription expired, you call \`redirect('/billing')\` instantly.

### Best Practice
Use configuration redirects for static rules (e.g. \`/old-blog/:slug\` -> \`/new-blog/:slug\`). Use \`redirect()\` in page components or route handlers for dynamic context rules (e.g. auth guard validations).

### Common Mistakes
Using \`redirect()\` inside a \`try-catch\` block without rethrowing the exception. Since \`redirect()\` relies on throwing a React routing exception, wrapping it in an unhandled catch block blocks the redirection process.

### Code Example
\`\`\`typescript
// Configuration Example: next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-about',
        destination: '/about',
        permanent: true, // Returns 301 SEO redirect
      },
    ];
  },
};

// Component Example: app/dashboard/page.tsx
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await checkUserSession();
  
  if (!user) {
    redirect('/login'); // Redirect unauthorized user
  }

  return <h1>Dashboard Analytics</h1>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্যবহারকারীকে এক পেজ থেকে অন্য পেজে পাঠানো একটি গুরুত্বপূর্ণ রিকোয়ারমেন্ট:

**১. কনফিগারেশন রিডাইরেক্ট (\`next.config.js\`):**
- এটি সার্ভার রানিং কনফিগারেশন স্তরে কাজ করে, অর্থাৎ ব্রাউজার রিকোয়েস্ট রিঅ্যাক্ট কোডে ঢোকার আগেই রিডাইরেক্ট করে দেয়।
- **সুবিধা**: সুপার ফাস্ট।
- **ব্যবহার**: স্থায়ী ইউআরএল পরিবর্তন (301 Permanent Redirect) করার ক্ষেত্রে।

**২. কম্পোনেন্ট রিডাইরেক্ট (\`redirect()\` ফাংশন):**
- এটি ডাইনামিকালি রানিং ফাইলে (Server Component/Route Handler/Server Action) কল করা হয়।
- **ব্যবহার**: ইউজার লগইন না থাকলে তাকে ডিরেক্ট \`/login\` পেজে পাঠিয়ে দেওয়া।

### বাস্তব-ভিত্তিক উদাহরণ
সাবস্ক্রিপশন অ্যাপে:
- ইউজার \`/dashboard\` পেজে ঢোকার চেষ্টা করল।
- সার্ভার ফাইলে চেক করে দেখা গেল তার পেমেন্ট করা নেই। সাথে সাথে \`redirect('/billing')\` কল করে পেমেন্ট পেজে পাঠিয়ে দেওয়া হলো।

### উত্তম অনুশীলন
স্থায়ী ইউআরএল লিংকের পরিবর্তনের জন্য কনফিগারেশন ফাইল ব্যবহার করুন। আর লগইন ভ্যালিডেশন বা ডাইনামিক লজিকের জন্য পেজের ভেতর \`redirect()\` ফাংশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`try-catch\` ব্লকের ভেতরে \`redirect()\` ফাংশন রান করা এবং এরর রিলিজ না করা। যেহেতু এটি ইন্টারনালি রিঅ্যাক্ট এক্সেপশন থ্রো করে কাজ করে, তাই ক্যাচ ব্লক এটিকে ট্র্যাপ করে রাখলে রিডাইরেক্ট হবে না।

### Code Example
\`\`\`typescript
// কনফিগারেশন ফাইল উদাহরণ: next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-about',
        destination: '/about',
        permanent: true, // গুগলে ৩০১ পার্মানেন্ট রিডাইরেক্ট দেখাবে
      },
    ];
  },
};

// কম্পোনেন্ট ফাইল উদাহরণ: app/dashboard/page.tsx
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await checkUserSession();
  
  if (!user) {
    redirect('/login'); // লগইন না থাকলে রিডাইরেক্ট করা
  }

  return <h1>ড্যাশবোর্ড ডেমো</h1>;
}
\`\`\``
  },
  {
    id: 'nextjs-27',
    title: 'How does Next.js handle static assets? Where should they be stored and how are they referenced?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Static Assets', 'public folder', 'Images', 'Architecture'],
    enAnswer: 'Static assets (like images, robots.txt, and site icons) must be stored in the public/ directory at the root of the project. Files in this folder are mapped directly to the root URL and can be referenced using absolute paths starting with /.',
    bnAnswer: 'স্ট্যাটিক অ্যাসেট (যেমন: ছবি, robots.txt, লোগো) প্রজেক্টের রুট ডিরেক্টরির public/ ফোল্ডারে রাখতে হয়। এই ফোল্ডারের ফাইলগুলো সরাসরি মেইন ডোমেইনের রুট ইউআরএল-এ ম্যাপ হয় এবং এগুলোকে / দিয়ে শুরু হওয়া পাথ দিয়ে অ্যাক্সেস করা যায়।',
    enExplanation: `### Explanation
Next.js serves files in the \`public/\` folder automatically:
- **Mapping**: A file located at \`public/images/logo.png\` is served at \`http://yourdomain.com/images/logo.png\`.
- **SEO files**: Files like \`public/robots.txt\` or \`public/favicon.ico\` are served at the root URL (e.g. \`/robots.txt\`), which search engines require.
- **Caching**: Next.js automatically sets caching headers for assets in the public folder to optimize browser loading speeds.

### Real-World Example
If your SEO team requires a \`sitemap.xml\` file:
- You save the static XML map file as \`public/sitemap.xml\`.
- Google search spiders can read it directly at \`https://yourdomain.com/sitemap.xml\`.

### Best Practice
Keep your asset directory organized by creating subfolders (e.g., \`public/images/\`, \`public/fonts/\`). Never store source code or typescript files in the \`public\` folder as they will be served in plain text to the public browser.

### Common Mistakes
Referencing assets by writing relative paths like \`../../public/logo.png\`. Always start paths at the root slash (e.g. \`/logo.png\`) because Next.js mounts the public folder directly at root.

### Code Example
\`\`\`typescript
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      {/* File is located physically at: public/assets/brand-logo.svg */}
      {/* Referenced via absolute root path starting with / */}
      <Image
        src="/assets/brand-logo.svg" 
        alt="Company Logo"
        width={150}
        height={50}
      />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস \`public/\` ফোল্ডারের সমস্ত ফাইল সরাসরি ব্রাউজারে রিলিজ করে:
- **ইউআরএল পাথ**: \`public/images/logo.png\` ফাইলটি ব্রাউজারে \`/images/logo.png\` পাথে পাওয়া যাবে।
- **এসইও ফাইল**: \`public/robots.txt\` বা \`public/favicon.ico\` ফাইলগুলো সরাসরি রুট পাথে (\`/robots.txt\`) কাজ করে যা সার্চ ইঞ্জিনের ক্রলারের জন্য আবশ্যিক।
- **ক্যাশিং**: এই ফাইলের রেসপন্স স্পিড বাড়ানোর জন্য নেক্সট জেএস অটো ব্রাউজার ক্যাশ সেটিংস যুক্ত করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
যদি আপনার মার্কেটিং টিম বলে যে সাইটের জন্য একটি \`sitemap.xml\` ফাইল যোগ করতে হবে:
- আপনি ফাইলটি \`public/sitemap.xml\` হিসেবে সেভ করে দিলেন।
- গুগলের বট সরাসরি \`https://yourdomain.com/sitemap.xml\` লিংকে ঢুকে সাইটের ম্যাপিং ফাইল পড়তে পারবে।

### উত্তম অনুশীলন
পাবলিক ফোল্ডারের ভেতর আলাদা ক্যাটাগরি ফোল্ডার করুন (যেমন: \`public/images/\`, \`public/fonts/\`)। সিকিউরিটি সুরক্ষায় কোনো কোড বা কনফিগারেশন সিক্রেট ফাইল ভুল করেও পাবলিক ফোল্ডারে রাখবেন না, কারণ এগুলো ইন্টারনেটে সরাসরি ওপেন থাকে।

### সাধারণ ভুলসমূহ
পাবলিক ফোল্ডারের ফাইলকে কোডে রিলেটিভ পাথে রিড করতে যাওয়া (যেমন: \`../../public/logo.png\`)। সর্বদা রুট স্ল্যাশ \`/logo.png\` দিয়ে রেফারেন্স দিন, কারণ public ফোল্ডারটি সরাসরি ডোমেইনের রুট হিসেবে কাজ করে।

### Code Example
\`\`\`typescript
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      {/* ছবিটি মূলত public/assets/brand-logo.svg পাথে সেভ করা আছে */}
      {/* কোডে সোর্সের পাথ শুরু হবে সরাসরি / দিয়ে */}
      <Image
        src="/assets/brand-logo.svg" 
        alt="কোম্পানি লোগো"
        width={150}
        height={50}
      />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-28',
    title: 'What is a hydration error in Next.js, and why does it occur?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Hydration Error', 'React', 'SSR', 'Troubleshooting'],
    enAnswer: 'A hydration error occurs when the pre-rendered server HTML does not match the initial client-side rendered React tree in the browser. It is typically caused by checking window-specific APIs during initial render, or using invalid HTML nesting.',
    bnAnswer: 'হাইড্রেট এরর (Hydration Error) তখন ঘটে যখন সার্ভারে তৈরি হওয়া HTML এবং ব্রাউজারে প্রথমবার রেন্ডার হওয়া রিঅ্যাক্ট স্ট্রাকচারের মধ্যে অমিল থাকে। এটি সাধারণত প্রথম রেন্ডারে উইন্ডো এপিআই (window API) চেক করা বা ভুল HTML নেস্টিং করার কারণে ঘটে।',
    enExplanation: `### Explanation
During server-rendering, Next.js generates HTML markup. In the browser, React executes the bundle to hook up event listeners (hydration).

**Why Hydration Fails:**
React expects that the DOM structure generated on the server is identical to what it renders on the client. If they differ, React throws a hydration mismatch error.

**Common Causes:**
1. **Dynamic Content**: Using \`new Date()\` or \`Math.random()\` during rendering (yields different values on server vs. client).
2. **Browser APIs**: Referencing \`window.innerWidth\` or checking \`localStorage\` inside render code before the component mounts.
3. **Invalid HTML**: Placing a block element inside an inline element, e.g., putting a \`<div>\` inside a \`<p>\` tag. Browsers automatically fix this in the DOM, creating a mismatch with React's virtual tree.

### Real-World Example
Suppose you display the current hour:
- On the server, time is calculated as \`8:00 PM\`.
- By the time the JS loads in the client browser, time is \`8:01 PM\`.
- React flags a hydration mismatch because the text node changed.

### Best Practice
1. Always use \`useEffect\` to perform state updates that depend on browser APIs or client-side time.
2. Ensure HTML syntax is valid (no nested paragraphs containing div elements).
3. If difference is unavoidable (e.g. SSR rendering dates), use \`suppressHydrationWarning={true}\` on the element.

### Common Mistakes
Checking \`typeof window !== 'undefined'\` inside a render return block to render different elements. This will always create a mismatch because the server sees one element and the client sees another.

### Code Example
\`\`\`typescript
// app/components/HydrationFix.tsx
"use client";

import { useState, useEffect } from 'react';

export default function HydrationFix() {
  const [isClient, setIsClient] = useState(false);

  // useEffect only runs on the client. Resolves hydration mismatch issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* Server renders "Loading...", client updates once mounted */}
      {isClient ? (
        <p>Local Storage Value: {localStorage.getItem('token')}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার রেন্ডারিংয়ের সময় নেক্সট জেএস একটি HTML ফাইল বানায়। ফাইলটি ব্রাউজারে এলে রিঅ্যাক্ট ব্রাউজার জাভাস্ক্রিপ্ট রান করিয়ে বাটনের ক্লিক অ্যাকশনগুলোকে লাইভ করে (Hydration)।

**হাইড্রেট এরর হওয়ার কারণ:**
রিঅ্যাক্ট আশা করে যে সার্ভার থেকে আসা HTML ডিজাইন এবং ব্রাউজারে রিঅ্যাক্টের তৈরি ডিজাইনের গাছ (virtual DOM tree) হুবহু এক হবে। কোনো অমিল থাকলে "Hydration Mismatch" এরর দেখায়।

**এরর হওয়ার মূল কারণসমূহ:**
১. **ডাইনামিক কনটেন্ট**: পেজ তৈরির সময় \`new Date()\` বা \`Math.random()\` ব্যবহার করা (সার্ভার ও ক্লায়েন্টে এর মান আলাদা হয়ে যায়)।
২. **ব্রাউজার এপিআই**: পেজ লোড হওয়ার আগেই কোডের ভেতর \`window.innerWidth\` বা \`localStorage\` রিড করার চেষ্টা করা।
৩. **ভুল এইচটিএমএল নেস্টিং**: যেমন একটি \`<p>\` ট্যাগের ভেতর \`<div>\` ট্যাগ বসানো। ব্রাউজার অটোমেটিক পি-ট্যাগ ক্লোজ করে ডম সাজায় যা রিঅ্যাক্টের ডিজাইনের সাথে মেলে না।

### বাস্তব-ভিত্তিক উদাহরণ
পেজে বর্তমান সময় দেখানোর ক্ষেত্রে:
- সার্ভার যখন HTML তৈরি করল তখন সময় ছিল \`১০:৩০\`।
- ব্রাউজারে পেজ লোড হতে হতে ঘড়িতে বাজল \`১০:৩১\`।
- সার্ভার ফাইলে ১০:৩০ লেখা থাকলেও ক্লায়েন্ট লোডে ১০:৩১ হয়ে যাওয়ায় রিঅ্যাক্ট হাইড্রেট এরর থ্রো করবে।

### উত্তম অনুশীলন
১. ব্রাউজার এপিআই বা ক্লায়েন্টের টাইমের জন্য রিঅ্যাক্ট স্টেট ও \`useEffect\` ব্যবহার করুন।
২. এইচটিএমএল ট্যাগ বিন্যাস সঠিক রাখুন।
৩. সময় বা টাইমজোন জেনারেট করার সময় প্রয়োজনে ট্যাগের গায়ে \`suppressHydrationWarning={true}\` লিখে রাখুন।

### সাধারণ ভুলসমূহ
রেন্ডারের রিটার্ন কোডের ভেতর \`typeof window !== 'undefined'\` কন্ডিশন দিয়ে ভিন্ন ভিন্ন ট্যাগ দেখানো। এতে সার্ভারে কন্ডিশন মিথ্যা হওয়ায় এক কোড এবং ক্লায়েন্টে কন্ডিশন সত্য হওয়ায় অন্য কোড রেন্ডার হয়ে হাইড্রেট এরর দেয়।

### Code Example
\`\`\`typescript
// app/components/HydrationFix.tsx
"use client";

import { useState, useEffect } from 'react';

export default function HydrationFix() {
  const [isClient, setIsClient] = useState(false);

  // useEffect কেবল ক্লায়েন্টে রান হওয়ায় এটি হাইড্রেট এরর আটকায়
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* সার্ভার রেন্ডার করবে "Loading...", ক্লায়েন্ট লোড হলে লোকাল ডাটা দেখাবে */}
      {isClient ? (
        <p>টোকেন মান: {localStorage.getItem('token')}</p>
      ) : (
        <p>অপেক্ষা করুন...</p>
      )}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-29',
    title: 'How do you configure alias paths in a Next.js TypeScript project?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['TypeScript', 'tsconfig.json', 'Path Alias', 'Developer Experience'],
    enAnswer: 'Alias paths are configured in the tsconfig.json file using the paths property under compilerOptions. The default Next.js template configures the @/* alias to point to the src/* directory, allowing imports like import Button from "@/components/Button".',
    bnAnswer: 'tsconfig.json ফাইলের compilerOptions-এর অধীনে paths প্রপার্টি ব্যবহার করে অ্যালিয়াস পাথ কনফিগার করা হয়। নেক্সট জেএস-এর ডিফল্ট টেমপ্লেটে @/* অ্যালিয়াসটি src/* ডিরেক্টরি নির্দেশ করে, যা import Button from "@/components/Button" এর মতো শর্টকাট ইম্পোর্ট করতে সাহায্য করে।',
    enExplanation: `### Explanation
As project structures grow deeper, imports can become messy:
\`\`\`typescript
import Button from '../../../../components/Button';
\`\`\`
Relative paths are hard to maintain and break easily when moving files.

**Path Aliases** solve this by mapping prefix strings to absolute root directories:
- **\`tsconfig.json\` Configuration**:
  \`\`\`json
  "paths": {
    "@/*": ["./src/*"]
  }
  \`\`\`
- Next.js automatically integrates this with Webpack/Turbopack, resolving \`@/components/Button\` to the absolute source folder path instantly.

### Real-World Example
In a nested route page (\`app/dashboard/settings/profile/security/page.tsx\`):
- Instead of tracing up 5 directories using \`../../../../..\`, you write:
\`\`\`typescript
import Navbar from '@/components/Navbar';
\`\`\`
This imports the component instantly and allows you to move the page folder anywhere without breaking imports.

### Best Practice
Stick to the default \`@/*\` alias mapping to \`src/*\`. If you have dedicated domains (e.g. utility helpers), you can define sub-aliases like \`@utils/*\` pointing to \`src/utils/*\`.

### Common Mistakes
Forgetting to declare the path mapping inside \`tsconfig.json\` before trying to use it in code, which triggers immediate TypeScript compilation errors.

### Code Example
\`\`\`json
// tsconfig.json (TypeScript configuration)
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      // Define path mapping aliases
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@styles/*": ["./src/styles/*"]
    }
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রজেক্ট বড় হতে থাকলে ফাইলের পাথ ইম্পোর্ট করা অনেক কষ্টসাধ্য হয়ে পড়ে:
\`\`\`typescript
import Button from '../../../../components/Button';
\`\`\`
এই রিলেটিভ পাথগুলো মেইনটেইন করা কঠিন এবং ফোল্ডার পরিবর্তন করলে ইম্পোর্ট লিংক ভেঙে যায়।

**পাথ অ্যালিয়াস (Path Aliases) এর সমাধান:**
- **tsconfig.json কনফিগারেশন**:
  \`\`\`json
  "paths": {
    "@/*": ["./src/*"]
  }
  \`\`\`
- নেক্সট জেএস অটোমেটিক্যালি এই পাথ অ্যালিয়াসকে কম্পাইলারের সাথে সিঙ্ক করে নেয়, ফলে কোডে \`@/components/Button\` লিখলে কম্পাইলার সরাসরি রুট ফোল্ডার থেকে ফাইলটি রিড করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গভীর নেস্টেড ফাইলে (\`app/dashboard/settings/profile/security/page.tsx\`):
- ৫টি ফোল্ডার ওপরে ওঠার জন্য \`../../../../..\` না লিখে সরাসরি লিখুন:
\`\`\`typescript
import Navbar from '@/components/Navbar';
\`\`\`
এটি ইম্পোর্টকে পরিচ্ছন্ন রাখে এবং ডিরেক্টরি ফোল্ডার অন্য জায়গায় সরালেও ইম্পোর্ট কাজ করে।

### উত্তম অনুশীলন
ডিফল্ট টেমপ্লেটের \`@/*\` অ্যালিয়াস ব্যবহার করুন। যদি কোনো নির্দিষ্ট ফোল্ডারের জন্য বিশেষ পাথ শর্টকাট চান, তবে tsconfig ফাইলে \`@utils/*\` লিখে শর্টকাট ম্যাপ করে নিতে পারেন।

### সাধারণ ভুলসমূহ
tsconfig ফাইলে পাথ ডিক্লেয়ার না করেই কোডে অ্যালিয়াস ইম্পোর্ট করার চেষ্টা করা, যা কম্পাইলার টাইপ এরর ছুড়ে মারবে।

### Code Example
\`\`\`json
// tsconfig.json (কনফিগারেশন ফাইল)
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      // পাথ অ্যালিয়াস ডিফাইন করার নিয়ম
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@styles/*": ["./src/styles/*"]
    }
  }
}
\`\`\``
  },
  {
    id: 'nextjs-30',
    title: 'How do you handle redirects in Server Actions, and how does it differ from standard redirects?',
    difficulty: 'basic',
    category: 'nextjs',
    tags: ['Server Actions', 'Redirects', 'Routing', 'App Router'],
    enAnswer: 'In Server Actions, redirects must be handled using the redirect() function from next/navigation. Unlike standard redirects, redirect() in Server Actions should not be wrapped inside try-catch blocks directly, as it relies on throwing a specific routing error to navigate the user on the client side.',
    bnAnswer: 'সার্ভার অ্যাকশনের ভেতরে রিডাইরেক্ট করতে next/navigation থেকে redirect() ফাংশন ব্যবহার করতে হয়। অন্যান্য রিডাইরেক্টের চেয়ে এটি আলাদা কারণ এটিকে try-catch ব্লকের ভেতর সরাসরি রাখা যায় না, এটি ক্লায়েন্টে নেভিগেশন সম্পন্ন করতে বিশেষ রিঅ্যাক্ট এরর থ্রো করে।',
    enExplanation: `### Explanation
Server Actions run on the server in response to user events in the browser. When a Server Action finishes and needs to redirect the user:

- **\`redirect(path)\`**: Calling this inside a Server Action sends a special HTTP headers payload back to the Next.js client router. The router intercepts this and changes the browser URL.
- **The catch block issue**:
  - \`redirect()\` operates by throwing a \`NEXT_REDIRECT\` exception.
  - If you put \`redirect()\` inside a \`try-catch\` block, the \`catch(error)\` block catches the redirect exception and treats it as a standard application error, blocking the redirect.
  - **Solution**: Place \`redirect()\` outside the \`try-catch\` block, or check if the error is a redirect error before handling it.

### Real-World Example
In a registration form:
- The Server Action saves the user in MongoDB.
- If saving fails, it returns an error.
- If saving succeeds, it redirects to the login screen. We must place the redirect *after* the try-catch block to prevent catching the routing exception.

### Best Practice
Always call \`redirect()\` at the very end of your Server Action function, outside any \`try-catch\` scopes.

### Common Mistakes
Writing \`redirect()\` inside a \`try\` block, and printing "Registration Failed" in the \`catch\` block because the redirect exception was caught as a failure.

### Code Example
\`\`\`typescript
// app/actions/auth.ts
"use server";

import { redirect } from 'next/navigation';

export async function registerUser(formData: FormData) {
  let isSuccess = false;

  try {
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Perform database registration
    await db.user.create({ email, password });
    isSuccess = true;
  } catch (error) {
    console.error('Registration failed:', error);
    return { error: 'Could not create account' };
  }

  // Redirect must be called outside the try-catch block
  if (isSuccess) {
    redirect('/login'); 
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার অ্যাকশনগুলো ব্রাউজারে ইউজারের ইভেন্টের বিপরীতে সার্ভার সাইডে রান হয়। যখন অ্যাকশন সফল হয় এবং ইউজারকে নতুন পেজে পাঠাতে হয়:

- **\`redirect(path)\`**: সার্ভার অ্যাকশনের ভেতর এটি কল করলে নেক্সট জেএস ব্রাউজারের ক্লায়েন্ট রাউটারে স্পেশাল হেডার কোড পাঠায়। রাউটার ইউআরএল পাথ আপডেট করে।
- **ক্যাচ ব্লকের সমস্যা**:
  - \`redirect()\` ইন্টারনালি একটি \`NEXT_REDIRECT\` নামক স্পেশাল এরর থ্রো করে কাজ সম্পন্ন করে।
  - আপনি যদি এটি কোন \`try-catch\` ব্লকের ভেতর রাখেন, তবে \`catch(error)\` ব্লক এই এররটিকে একটি র-টেকনিক্যাল এরর মনে করে আটকে দেবে, ফলে রিডাইরেক্ট ব্লক হয়ে যাবে।
  - **সমাধান**: \`try-catch\` ব্লকের বাইরে বা শেষে রিডাইরেক্ট ফাংশনটি কল করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
রেজিস্ট্রেশন ফর্মে:
- সার্ভার অ্যাকশন ডাটাবেসে ইউজার ডাটা সেভ করে।
- ভুল হলে এরর রিটার্ন করে।
- সফল হলে লগইন পেজে রিডাইরেক্ট করে। এই রিডাইরেক্ট কলটি ট্রাই-ক্যাচ ব্লকের বাইরে রাখতে হবে যাতে সিস্টেম এক্সেপশনটি সঠিক সময়ে রিলিজ হতে পারে।

### উত্তম অনুশীলন
সার্ভার অ্যাকশনে ট্রাই-ক্যাচ ব্লকের ভেতরে ডাটাবেস রাইটের লজিক রাখুন, তবে সফল সমাপ্তির পর রিডাইরেক্ট কলটি ট্রাই-ক্যাচ ব্লকের বাইরে বা একদম শেষে লিখুন।

### সাধারণ ভুলসমূহ
ট্রাই ব্লকের ভেতর রিডাইরেক্ট লেখা এবং ক্যাচ ব্লকে "Registration Failed" প্রিন্ট করা, কারণ রিডাইরেক্ট হওয়ার এরর সিগন্যালটিকে ভুল মনে করে ক্যাচ ব্লক ট্র্যাপ করে ফেলে।

### Code Example
\`\`\`typescript
// app/actions/auth.ts
"use server";

import { redirect } from 'next/navigation';

export async function registerUser(formData: FormData) {
  let isSuccess = false;

  try {
    const email = formData.get('email');
    const password = formData.get('password');
    
    // ডাটাবেস সেভ লজিক
    await db.user.create({ email, password });
    isSuccess = true;
  } catch (error) {
    console.error('রেজিস্ট্রেশন এরর:', error);
    return { error: 'অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি' };
  }

  // রিডাইরেক্ট কল অবশ্যই ট্রাই-ক্যাচ ব্লকের বাইরে রাখতে হবে
  if (isSuccess) {
    redirect('/login'); 
  }
}
\`\`\``
  }
];
