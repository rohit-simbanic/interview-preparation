import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'nextjs-71',
    title: 'How do you handle cache invalidation in Next.js App Router, and what are the differences between time-based and on-demand revalidation?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Caching', 'App Router', 'revalidatePath', 'revalidateTag', 'ISR'],
    enAnswer: 'Next.js App Router provides two caching invalidation strategies: Time-based Revalidation (using next.revalidate or fetch option) and On-demand Revalidation (using revalidatePath or revalidateTag). Time-based invalidation happens in the background after a duration, while on-demand invalidation is triggered dynamically via Server Actions or Route Handlers.',
    bnAnswer: 'নেক্সট জেএস অ্যাপ রাউটারে দুই ধরণের ক্যাশ ইনভ্যালিডেশন স্ট্র্যাটেজি রয়েছে: টাইম-বেসড রিভ্যালিডেশন (যা next.revalidate বা fetch অপশন দিয়ে করা হয়) এবং অন-ডিমান্ড রিভ্যালিডেশন (যা revalidatePath বা revalidateTag দিয়ে করা হয়)। টাইম-বেসড পদ্ধতি নির্দিষ্ট সময় পর ব্যাকগ্রাউন্ডে ক্যাশ আপডেট করে, আর অন-ডিমান্ড পদ্ধতি সার্ভার অ্যাকশন বা রুট হ্যান্ডলারের মাধ্যমে তাৎক্ষণিকভাবে ক্যাশ ইনভ্যালিড করে।',
    enExplanation: `### Explanation
In the App Router, data fetching cache (Data Cache) persists across requests and deployments. To update stale data, you must invalidate this cache:

1. **Time-based Revalidation**:
   - Automatically sets a TTL (Time To Live) on the fetched resource.
   - Declared using \`fetch(url, { next: { revalidate: 3600 } })\` or page-level export \`export const revalidate = 3600;\`.
   - Uses a stale-while-revalidate model: the first request after the TTL triggers a background revalidation, but returns the cached (stale) data. Subsequent requests receive the fresh data.

2. **On-demand Revalidation**:
   - Manually invalidates cached entries across your site.
   - \`revalidatePath('/posts/[id]')\` invalidates all cached fetches on that route path.
   - \`revalidateTag('product-list')\` invalidates any fetch tagged with \`fetch(url, { next: { tags: ['product-list'] } })\`.
   - Occurs instantly and blocks until the cache is purged and regenerated if visited.

### Real-World Example
In a headless CMS setup:
- For blog posts, use time-based revalidation (e.g., \`revalidate: 86400\` / 24 hours) since real-time updates aren't critical.
- For an e-commerce inventory count, use on-demand revalidation. Call a webhook in Next.js (\`/api/revalidate\`) when a product sale happens to invoke \`revalidateTag('product-id')\` so customers instantly see accurate stock.

### Best Practice
Prefer Tag-based Revalidation (\`revalidateTag\`) over Path-based Revalidation for granular control. Tag-based invalidation allows you to target specific fetches across layouts, pages, and components without purging unrelated data.

### Common Mistakes
Calling \`revalidatePath\` or \`revalidateTag\` in Client Components. These utilities only run on the server side (Server Components, Route Handlers, or Server Actions).

### Code Example
\`\`\`typescript
// app/actions.ts (Server Action)
'use server';

import { revalidateTag } from 'next/cache';

export async function updateProduct(productId: string, data: any) {
  await db.updateProduct(productId, data);
  // Invalidate any fetch request with this tag
  revalidateTag(\`product-\${productId}\`);
}

// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`, {
    next: { tags: [\`product-\${params.id}\`] }
  });
  const product = await res.json();
  
  return <div>{product.name}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যাপ রাউটারে ডাটা ফেচিং ক্যাশ (Data Cache) রিকোয়েস্ট ও ডিপ্লয়মেন্ট জুড়ে স্থায়ী থাকে। এই ক্যাশ আপডেট করার ২টি মাধ্যম রয়েছে:

১. **টাইম-বেসড রিভ্যালিডেশন (Time-based Revalidation)**:
   - ডাটা ফেচ করার সময় একটি নির্দিষ্ট মেয়াদ (TTL) সেট করা হয়।
   - ব্যবহার: \`fetch(url, { next: { revalidate: 3600 } })\` অথবা পেজ লেভেলে \`export const revalidate = 3600;\`।
   - এটি Stale-While-Revalidate মডেল মেনে চলে। মেয়াদ শেষ হওয়ার পর প্রথম রিকোয়েস্টে প্রথোম রেন্ডারে পুরনো ডাটাই দেখা যাবে তবে ব্যাকগ্রাউন্ডে নতুন ডাটা লোড হবে। তার পরের রিকোয়েস্ট থেকে নতুন ডাটা লোড হবে।

২. **অন-ডিমান্ড রিভ্যালিডেশন (On-demand Revalidation)**:
   - কোনো ইভেন্টের ওপর ভিত্তি করে ম্যানুয়ালি ক্যাশ খালি করা হয়।
   - \`revalidatePath\` দিয়ে নির্দিষ্ট রুটের এবং \`revalidateTag\` দিয়ে নির্দিষ্ট ট্যাগের ক্যাশ ইনভ্যালিড করা হয়।
   - এটি তাৎক্ষণিকভাবে ক্যাশ আপডেট করে।

### বাস্তব-ভিত্তিক উদাহরণ
CMS ভিত্তিক ব্লগ সাইটের জন্য টাইম-বেসড রিভ্যালিডেশন (যেমন ২৪ ঘণ্টা পর পর) যথেষ্ট। কিন্তু ই-কমার্স সাইটের প্রোডাক্ট ইনভেন্টরির ক্ষেত্রে যখনই ডাটাবেজে স্টক কমবে, তখনই রুট হ্যান্ডলারে একটি ওয়েব হুক কল করে \`revalidateTag('product-123')\` এক্সিকিউট করতে হবে যাতে কাস্টমাররা রিয়েল-টাইম স্টক দেখতে পান।

### উত্তম অনুশীলন
পাথ রিভ্যালিডেশনের চেয়ে ট্যাগ-ভিত্তিক রিভ্যালিডেশন (\`revalidateTag\`) ব্যবহার করা উত্তম। এটি পুরো পেজ রেন্ডার ব্লক না করে নির্দিষ্ট কিছু ডাটা ফেচ ক্যাশ নিখুঁতভাবে রিলোড করতে পারে।

### সাধারণ ভুলসমূহ
ক্লায়েন্ট কম্পোনেন্টের ভেতর সরাসরি \`revalidatePath\` বা \`revalidateTag\` ব্যবহার করার চেষ্টা করা। এগুলো শুধুমাত্র সার্ভার সাইড (সার্ভার কম্পোনেন্ট, সার্ভার অ্যাকশন বা রুট হ্যান্ডলার) থেকে কল করতে হবে।

### কোড উদাহরণ
\`\`\`typescript
// app/actions.ts (Server Action)
'use server';

import { revalidateTag } from 'next/cache';

export async function updateProduct(productId: string, data: any) {
  await db.updateProduct(productId, data);
  // ট্যাগ দিয়ে ক্যাশ ইনভ্যালিড করা
  revalidateTag(\`product-\${productId}\`);
}

// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`, {
    next: { tags: [\`product-\${params.id}\`] }
  });
  const product = await res.json();
  
  return <div>{product.name}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-72',
    title: 'How do you configure Next.js for standalone Docker deployments to minimize image size and resource usage?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Docker', 'Deployment', 'Standalone', 'DevOps', 'next.config.js'],
    enAnswer: 'To configure Next.js for Docker, set output: "standalone" in next.config.js. This automatically traces and bundles only the necessary files, node_modules, and server code needed for production, reducing Docker image sizes from ~1GB to under 100MB.',
    bnAnswer: 'ডকার ডিপ্লয়মেন্টের জন্য Next.js কনফিগার করতে next.config.js ফাইলে output: "standalone" সেট করতে হয়। এটি স্বয়ংক্রিয়ভাবে শুধুমাত্র প্রোডাকশনের জন্য প্রয়োজনীয় ফাইল, node_modules এবং সার্ভার কোড ট্র্যাক করে বান্ডেল তৈরি করে, যার ফলে ডকার ইমেজ সাইজ প্রায় ১ জিবি থেকে কমে ১০০ এমবি-র নিচে নেমে আসে।',
    enExplanation: `### Explanation
By default, running \`npm run build\` generates files ready to be deployed by a traditional server or Vercel. For standalone Dockerized environments:
- Enabling \`output: 'standalone'\` forces Next.js to copy only required files into \`.next/standalone/\`.
- It copies a minimal set of \`node_modules\` (using \`@vercel/nft\` for dependency tracing) and creates a lightweight \`server.js\` file instead of relying on the full \`next\` CLI tool.
- Static assets (\`public/\` and \`.next/static/\`) are omitted from the standalone folder intentionally. They should be served by a CDN or copied separately inside the Dockerfile.

### Real-World Example
In a production Kubernetes or AWS ECS deployment, using standard \`node_modules\` copies the devDependencies, local caches, and heavy builds. With \`standalone\`, the resulting image is highly optimized, leading to faster startup times, quicker autoscaling, and lower hosting costs.

### Best Practice
Inside your \`Dockerfile\`, use a multi-stage build.
1. Build stage: run dependencies and build the app.
2. Production stage: copy the \`.next/standalone\` files and the server entry.
Manually copy the \`public\` and \`.next/static\` directories into the standalone folder or host them separately on an S3/Cloudfront CDN.

### Common Mistakes
Forgetting to copy \`.next/static\` and \`public\` folders into the final Docker runner layer. Without these, stylesheets will not load and images inside \`public\` will return 404 errors.

### Code Example
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

module.exports = nextConfig;
\`\`\`

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
# Copy static files (Crucial step!)
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণভাবে Next.js প্রোডাকশন বিল্ডে ডেভেলপমেন্ট ফাইল এবং অপ্রয়োজনীয় প্যাকেজ থেকে যায়। ডকারাইজড এনভায়রনমেন্টের জন্য:
- \`output: 'standalone'\` সক্রিয় করলে Next.js শুধুমাত্র প্রয়োজনীয় ফাইল নিয়ে \`.next/standalone/\` ডিরেক্টরি তৈরি করে।
- এটি ডিপেন্ডেন্সি ট্রেসিংয়ের মাধ্যমে ডকার ইমেজের সাইজ ১ জিবির পরিবর্তে ১০০ এমবি বা তার নিচে নামিয়ে আনে।
- স্ট্যাটিক ফাইলসমূহ (\`public\` ও \`.next/static\`) এই ফোল্ডার থেকে বাদ রাখা হয় যা CDN বা ডকারফাইলে আলাদাভাবে কপি করে দিতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
Kubernetes বা AWS ECS-এ যখন দ্রুত অটোলিংক বা কনটেইনার বুট করা প্রয়োজন হয়, তখন বড় ইমেজের কারণে ডেপ্লয়মেন্টে দেরি হয়। Standalone কনফিগারেশন ব্যবহারের ফলে ইমেজ কয়েক সেকেন্ডে পুল ও রান হয়ে যায়।

### উত্তম অনুশীলন
ডকারফাইলে Multi-stage Build ব্যবহার করা। প্রথম ধাপে বিল্ড করা হবে, আর শেষ ধাপে রান করার জন্য শুধুমাত্র \`.next/standalone\` ফোল্ডার এবং স্ট্যাটিক ফাইলগুলো নিয়ে ইমেজ তৈরি করা হবে।

### সাধারণ ভুলসমূহ
ফাইনাল ডকার রানার স্টেজে \`.next/static\` ও \`public\` ফোল্ডার কপি করতে ভুলে যাওয়া। এটি না করলে আপনার সাইটে সিএসএস (CSS) ফাইল লোড হবে না এবং পাবলিক ইমেজেস ৪০৪ দেখাবে।

### কোড উদাহরণ
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

module.exports = nextConfig;
\`\`\`

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Standalone বিল্ড কপি করা হচ্ছে
COPY --from=builder /app/.next/standalone ./
# স্ট্যাটিক ও পাবলিক ফাইল কপি করা (অতি প্রয়োজনীয় ধাপ)
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
\`\`\``
  },
  {
    id: 'nextjs-73',
    title: 'What are the differences between Edge Runtime and Node.js Runtime in Next.js, and when should you use each?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Edge Runtime', 'Node.js Runtime', 'Serverless', 'Performance', 'API Routes'],
    enAnswer: 'The Node.js Runtime has access to the full Node.js API ecosystem but suffers from slower cold starts. The Edge Runtime is a lightweight environment based on V8 engines (no full Node APIs) that delivers ultra-fast startup times and operates closer to the user geographically.',
    bnAnswer: 'Node.js রানটাইম সম্পূর্ণ Node.js API ইকোসিস্টেম অ্যাক্সেস করতে পারে তবে এর কোল্ড স্টার্ট তুলনামূলক ধীরগতির হয়। অন্য দিকে Edge রানটাইম হলো V8 ইঞ্জিনের ওপর ভিত্তি করে তৈরি একটি লাইটওয়েট এনভায়রনমেন্ট (যেখানে সম্পূর্ণ Node API থাকে না) যা অতি দ্রুত বুট হয় এবং ভৌগোলিক দিক থেকে ইউজারের সবচেয়ে কাছের নোডে রান করে।',
    enExplanation: `### Explanation
Next.js supports two server runtime environments:

1. **Node.js Runtime (Default)**:
   - Complete access to all npm packages, database drivers, and native Node.js modules (\`fs\`, \`path\`, \`crypto\`).
   - Slower execution initialization (Serverless cold starts).
   - Higher memory usage and execution cost.

2. **Edge Runtime**:
   - Built on lightweight V8 engine standards (similar to Cloudflare Workers).
   - Instant startup (zero cold starts).
   - Highly restricted API: No access to native Node APIs like \`fs\` or \`net\`. Standard packages relying on native Node bindings cannot be run.
   - Limited execution memory and maximum duration limits.

### Real-World Example
- **Edge Runtime**: Use for Geo-IP routing, custom authorization checks in Middleware, dynamic image redirects, or light webhooks.
- **Node.js Runtime**: Use for pages executing complex database operations using Prisma/Mongoose, or libraries that parse files, require network sockets, or use PDF generation libraries.

### Best Practice
Use the Edge Runtime for Middleware and latency-sensitive API routes that perform simple computations or redirect logic. For heavy data fetching or database-bound Server Components, stay on the default Node.js Runtime.

### Common Mistakes
Trying to run database ORMs like Prisma or libraries relying on Node-native packages (e.g., \`bcrypt\`) inside the Edge Runtime, which triggers compilation failures.

### Code Example
\`\`\`typescript
// app/api/edge-endpoint/route.ts
export const runtime = 'edge'; // Force Edge Runtime

export async function GET(request: Request) {
  // Uses Web Standard APIs (Request, Response, Headers)
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  return Response.json({
    message: 'Hello from the Edge!',
    clientIp: ip,
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js-এ সার্ভার সাইড রানটাইমের জন্য ২টি অপশন পাওয়া যায়:

১. **Node.js Runtime (ডিফল্ট)**:
   - সব ধরণের npm প্যাকেজ ও নেটিভ নোড মডিউল (\`fs\`, \`path\`, \`crypto\`) ব্যবহার করা যায়।
   - সার্ভারলেস কোল্ড স্টার্ট (Cold Start) ধীর গতির হতে পারে।

২. **Edge Runtime**:
   - এটি V8 ইঞ্জিন ব্যবহার করে ক্লাউডের এজ নেটওয়ার্কে চলে।
   - ইনস্ট্যান্ট বুট হয়, কোনো কোল্ড স্টার্টের ঝামেলা নেই।
   - এতে নেটিভ নোড এপিআই (\`fs\`, \`child_process\`) কাজ করে না।

### বাস্তব-ভিত্তিক উদাহরণ
- **Edge Runtime**: ইউজারের লোকেশন ট্র্যাকিং, মিডলওয়্যারে অথরাইজেশন চেক এবং কাস্টম রিডাইরেক্টের জন্য এটি আইডিয়াল।
- **Node.js Runtime**: ডাটাবেজ কোয়েরি (যেমন Prisma বা Mongoose ব্যবহার করে), ফাইল আপলোড প্রসেসিং অথবা ইমেজ/পিডিএফ জেনারেশন সার্ভিসের জন্য এটি প্রয়োজনীয়।

### উত্তম অনুশীলন
মিডলওয়্যার এবং রেসপন্স টাইম ক্রিটিক্যাল এপিআই এন্ডপয়েন্টের জন্য এজ রানটাইম নির্ধারণ করুন। আর ডাটাবেজ ইন্টিগ্রেশন এবং বড় লাইব্রেরি সমৃদ্ধ কম্পোনেন্টের জন্য ডিফল্ট Node.js রানটাইম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
এজ রানটাইম ডিক্লেয়ার করার পর সেখানে Prisma ORM বা Node-এর নেটিভ কোড (যেমন \`bcrypt\` মডিউল) ব্যবহার করতে চাওয়া, যা রানটাইম এরর তৈরি করবে।

### Code Example
\`\`\`typescript
// app/api/edge-endpoint/route.ts
export const runtime = 'edge'; // এজ রানটাইম ঘোষণা করা হলো

export async function GET(request: Request) {
  // Web Standard APIs ব্যবহার করা যাবে
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  return Response.json({
    message: 'Hello from the Edge!',
    clientIp: ip,
  });
}
\`\`\``
  },
  {
    id: 'nextjs-74',
    title: 'How do Parallel Routes work in Next.js App Router, and how do you handle conditional rendering and loading states?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Routing', 'Parallel Routes', 'Slots', 'App Router', 'Suspense'],
    enAnswer: 'Parallel Routes allow rendering multiple pages simultaneously or conditionally in the same layout using "Slots" (defined with @folder). They support independent error/loading states and are injected as props into the parent layout.',
    bnAnswer: 'প্যারালাল রাউটস (Parallel Routes) একই লেআউটের ভেতরে এক বা একাধিক পেজ একসাথে অথবা কন্ডিশনালি রেন্ডার করার সুবিধা দেয়। এটি "Slots" (যা @folder নামে ডিফাইন করা হয়) ব্যবহার করে এবং প্রতিটি স্লটের আলাদা লোডিং/এরর স্টেট থাকতে পারে। এগুলো প্যারেন্ট লেআউটে প্রপস হিসেবে রিসিভ করা হয়।',
    enExplanation: `### Explanation
Parallel routing is defined using named slots, which do not impact the URL structure. For example, a folder named \`@analytics\` defines a slot named \`analytics\`.
- The parent layout adjacent to these slots receives them as React components: \`layout.tsx\` will receive \`{ children, analytics }\` as props.
- Each slot can have its own \`page.tsx\`, \`loading.tsx\`, and \`error.tsx\` files, enabling independent loading screens.
- **Matched vs Unmatched state**: When navigating, if Next.js cannot match a slot to the current URL, it renders the \`default.tsx\` fallback file. If \`default.tsx\` is missing, Next.js renders a 404.

### Real-World Example
In a user dashboard, you want to show a sales graph and a recent orders table side-by-side. Instead of building one massive component with complex fetch coordination, you create \`@sales/page.tsx\` and \`@orders/page.tsx\`. If orders fails to fetch, it triggers \`@orders/error.tsx\` without breaking the sales panel.

### Best Practice
Always create a \`default.tsx\` file for each slot. This prevents 404 errors during client-side navigation or page reloads when the URL path matches one slot but not the other.

### Common Mistakes
Thinking slots are part of the URL path. A route \`@dashboard/settings/page.tsx\` is accessed at \`/settings\`, not \`/@dashboard/settings\`.

### Code Example
\`\`\`typescript
// app/dashboard/layout.tsx
interface LayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}

export default function DashboardLayout({ children, analytics, team }: LayoutProps) {
  const isAdmin = true; // Conditional routing
  
  return (
    <div className="dashboard-container">
      <main>{children}</main>
      <div className="grid">
        <section>{analytics}</section>
        <section>{isAdmin ? team : <p>Access Denied</p>}</section>
      </div>
    </div>
  );
}

// app/dashboard/@analytics/default.tsx
export default function DefaultAnalytics() {
  return <div>Loading analytics dashboard...</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্যারালাল রাউটিং স্লট ব্যবহার করে একই স্ক্রিনে একাধিক ভিউ প্রজেক্ট করতে সাহায্য করে। যেমন, \`@analytics\` ফোল্ডারটি একটি স্লট তৈরি করবে।
- প্যারেন্ট লেআউট ফাইলটি (\`layout.tsx\`) এই স্লটগুলোকে স্বাভাবিক প্রপস (Props) হিসেবে রিসিভ করবে: \`DashboardLayout({ children, analytics })\`।
- প্রতিটি স্লটের নিজস্ব \`page.tsx\`, \`loading.tsx\` এবং \`error.tsx\` থাকতে পারে।
- **ডিফল্ট ফোল্ডার**: ক্লায়েন্ট নেভিগেশনে স্লটের পাথ না মিললে Next.js ব্যাকআপ হিসেবে \`default.tsx\` ফাইলটি খোঁজে। এই ফাইল না থাকলে রাউট এরর (404) হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ড্যাশবোর্ডে আপনি ডানপাশে ইউজারদের তালিকা এবং বামপাশে সেলস গ্রাফ দেখাবেন। ২টি আলাদা ফোল্ডার \`@users\` ও \`@sales\` দিয়ে প্যারালাল রাউট তৈরি করলে সেলস গ্রাফে কোয়েরি ধীর হলেও ইউজার লিস্ট তার নিজস্ব লোডার দিয়ে সাথে সাথে রেন্ডার হয়ে যাবে।

### উত্তম অনুশীলন
প্রতিটি স্লট ফোল্ডারে অবশ্যই একটি \`default.tsx\` ফাইল রাখুন। এটি পেজ হার্ড রিফ্রেশ করার সময় কোনো আনম্যাচড রুটের জন্য সাইট ভেঙে যাওয়া প্রতিরোধ করে।

### সাধারণ ভুলসমূহ
প্যারালাল স্লট ফোল্ডারগুলোর নামকে ইউআরএল (URL) পাথের অংশ মনে করা। যেমন: \`@dashboard/settings\` পেজটির এক্সেস ইউআরএল হবে \`/settings\`, \`/@dashboard/settings\` নয়।

### কোড উদাহরণ
\`\`\`typescript
// app/dashboard/layout.tsx
interface LayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}

export default function DashboardLayout({ children, analytics, team }: LayoutProps) {
  const isAdmin = true; // কন্ডিশনাল রেন্ডারিং
  
  return (
    <div className="dashboard-container">
      <main>{children}</main>
      <div className="grid">
        <section>{analytics}</section>
        <section>{isAdmin ? team : <p>Access Denied</p>}</section>
      </div>
    </div>
  );
}

// app/dashboard/@analytics/default.tsx
export default function DefaultAnalytics() {
  return <div>Loading analytics dashboard...</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-75',
    title: 'What are Intercepting Routes in Next.js App Router, and how are they used to build modals or overlay views?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Routing', 'Intercepting Routes', 'Modals', 'App Router', 'UX'],
    enAnswer: 'Intercepting Routes let you load a route from another part of your application inside the current layout. They use conventions like (.) to match paths on the same level or (..) for parent levels, commonly used to display a details page inside a modal overlay.',
    bnAnswer: 'ইন্টারসেপ্টিং রাউটস (Intercepting Routes) আপনাকে বর্তমান লেআউটের ভেতরে অ্যাপ্লিকেশনের অন্য অংশের একটি রুট লোড করার সুবিধা দেয়। এগুলো লেভেল রিলেশন অনুযায়ী (.) একই লেভেল অথবা (..) প্যারেন্ট লেভেল কনভেনশন ব্যবহার করে। সাধারণত মডাল বা ওভারলে ইন্টারফেস দেখানোর জন্য এটি ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Intercepting routes work by matching a path using a prefix format:
- \`(.)\`: Matches segments on the same level.
- \`(..)\`: Matches segments one level above.
- \`(..)(..)\`: Matches segments two levels above.
- \`(...)\`: Matches segments from the root app directory.

**Double-Context Behavior**:
1. When navigating client-side (e.g., clicking a \`<Link>\`), Next.js intercepts the route and displays it within a modal defined inside the intercepted route file. The URL updates, but the page content remains intact underneath.
2. When refreshing or visiting the URL directly, Next.js ignores the interceptor and renders the full page layout (no modal).

### Real-World Example
Consider an Instagram-like photo grid:
- Clicking a photo thumbnail opens a modal containing the photo and comments overlay, changing the URL to \`/photo/123\` while preserving the grid behind.
- Sharing the URL \`/photo/123\` or reloading the page displays a standalone page focusing solely on the photo details.

### Best Practice
Combine Intercepting Routes with Parallel Routes. Render the interceptor modal inside a slot (e.g., \`@modal/(.)photo/[id]\`), so you can control mount and unmount states cleanly inside your main dashboard layout.

### Common Mistakes
Forgetting to specify how to close the modal. If you do not trigger \`router.back()\` or clear the slot, the modal will remain open on subsequent navigation transitions.

### Code Example
\`\`\`typescript
// app/feed/layout.tsx
export default function FeedLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1>User Feed</h1>
      {children}
      {modal} {/* Injects intercepted modal route */}
    </div>
  );
}

// app/feed/@modal/(.)photo/[id]/page.tsx (Intercepted)
import Modal from '@/components/Modal';

export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <h2>Photo ID: {params.id} (Rendered inside Modal)</h2>
    </Modal>
  );
}

// app/photo/[id]/page.tsx (Normal page fallback)
export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="full-page">
      <h2>Photo ID: {params.id} (Full Page View)</h2>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইন্টারসেপ্টিং রাউটস মূলত ইউআরএল পরিবর্তনের সাথে ভিন্ন একটি পেজের কনটেন্টকে বর্তমান পেজের ভেতর লোড করতে সাহায্য করে। এগুলো ম্যাচিংয়ের জন্য কিছু নির্দিষ্ট ফরম্যাট ব্যবহার করে:
- \`(.)\`: একই লেভেলের রাউট ইন্টারসেপ্ট করতে।
- \`(..)\`: এক লেভেল উপরের রাউট ইন্টারসেপ্ট করতে।
- \`(...)\`: রুট বা একদম শুরুর লেভেলের রাউট ইন্টারসেপ্ট করতে।

**ডাবল কন্টেক্সট বৈশিষ্ট্য**:
১. লিংক ক্লিকের মাধ্যমে নেভিগেট করলে ইন্টারসেপ্টেড পেজটি (যেমন মডাল) লোড হবে, এবং ব্যাকগ্রাউন্ড পেজ আগের মতোই থাকবে।
২. পেজ রিফ্রেশ বা সরাসরি ইউআরএল-এ ঢুকলে মডাল ছাড়া মূল ফুল-স্ক্রিন পেজ রেন্ডার হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইনস্টাগ্রাম বা ড্রিবল-এর মতো সাইটগুলোতে কোনো পোস্টে ক্লিক করলে একটি মডাল পপ-আপ আসে কিন্তু ইউআরএল চেইঞ্জ হয়ে পোস্ট ডিরেক্টরিতে যায়। আবার সেই ইউআরএল কপি করে অন্য ট্যাবে খুললে সরাসরি সেই পোস্টের ডেডিকেটেড পেজ ওপেন হয়।

### উত্তম অনুশীলন
ইন্টারসেপ্টিং রাউটসকে প্যারালাল রাউটসের স্লটের ভেতরে ব্যবহার করুন (যেমন \`@modal/(.)photo/[id]\`)। এটি ডোমেন আর্কিটেকচার ঠিক রাখতে এবং মডালের আনমাউন্ট স্টেট সহজে নিয়ন্ত্রণ করতে সাহায্য করে।

### সাধারণ ভুলসমূহ
মডাল ক্লোজ করার অপশন না রাখা। মডাল থেকে ব্যাক বা ক্লোজ করার জন্য \`router.back()\` কল না করলে ইউজার অন্য পেইজে গেলেও ইন্টারসেপ্টেড মডালটি রিমুভ হতে চায় না।

### কোড উদাহরণ
\`\`\`typescript
// app/feed/layout.tsx
export default function FeedLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1>User Feed</h1>
      {children}
      {modal} {/* ইন্টারসেপ্টেড মডাল স্লট */}
    </div>
  );
}

// app/feed/@modal/(.)photo/[id]/page.tsx (Intercepted)
import Modal from '@/components/Modal';

export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <h2>Photo ID: {params.id} (Rendered inside Modal)</h2>
    </Modal>
  );
}

// app/photo/[id]/page.tsx (Normal page fallback)
export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="full-page">
      <h2>Photo ID: {params.id} (Full Page View)</h2>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-76',
    title: 'How does Request Memoization work in Next.js App Router, and how does it differ from the Data Cache?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Caching', 'Request Memoization', 'Fetch', 'React Server Components'],
    enAnswer: 'Request Memoization is a React rendering cache that deduplicates GET fetch requests within a single render pass. Data Cache is a persistent Next.js cache that stores fetch results across requests, users, and deployment boundaries.',
    bnAnswer: 'রিকোয়েস্ট মেমোইজেশন (Request Memoization) হলো একটি রিঅ্যাক্ট রেন্ডারিং ক্যাশ যা একটি একক রেন্ডার পাসের মধ্যে ডুপ্লিকেট GET রিকোয়েস্টগুলো ফিল্টার বা ডিডুপ্লিকেট করে। ডাটা ক্যাশ (Data Cache) হলো একটি দীর্ঘস্থায়ী নেক্সট জেএস ক্যাশ যা রিকোয়েস্ট, ইউজার ও ডিপ্লয়মেন্ট জুড়ে ডাটা সংরক্ষণ করে।',
    enExplanation: `### Explanation
Understanding the lifecycle of these two caching tiers is critical:

1. **Request Memoization**:
   - Lifecycle: Lasts only for the duration of a single HTTP request lifecycle. Once the server finishes generating the HTML/RSC payload, the memoization cache is destroyed.
   - Purpose: Allows you to fetch the exact same data endpoint inside multiple layout, page, and sub-components without passing props down.
   - Coverage: Works automatically for standard \`fetch\` GET requests inside React Server Components.

2. **Data Cache**:
   - Lifecycle: Persists indefinitely across incoming requests and server restarts until explicitly revalidated or wiped.
   - Purpose: Reduces traffic load on your upstream databases/APIs by caching data outputs globally.
   - Opt-out: Use options like \`{ cache: 'no-store' }\`.

### Real-World Example
Suppose your layout requires details about the current logged-in user to show a header menu, and your page component requires the same user details to render user configurations. You can call \`fetch('/api/user')\` in both layouts and pages. Next.js fetches only once from the server during that request render pass (Memoization).

### Best Practice
Do not pass database results down via props down nested React Server Component hierarchies solely to avoid refetching. Instead, fetch the data directly inside the components that need it; Next.js will deduplicate the HTTP requests automatically.

### Common Mistakes
Assuming POST requests are memoized. Request memoization only applies to GET methods in \`fetch\`.

### Code Example
\`\`\`typescript
async function getSettings() {
  // Only one network request is dispatched, even if called 10 times in one render pass
  const res = await fetch('https://api.example.com/settings');
  return res.json();
}

// app/layout.tsx
export default async function RootLayout() {
  const settings = await getSettings(); // Call 1
  return (
    <html>
      <body>{settings.theme}</body>
    </html>
  );
}

// app/page.tsx
export default async function Page() {
  const settings = await getSettings(); // Call 2 (deduplicated!)
  return <div>Welcome to {settings.siteName}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস অ্যাপ রাউটারে এই দুটি ক্যাশিং স্তরের লাইফসাইকেল আলাদা:

১. **Request Memoization**:
   - স্থায়িত্ব: এটি শুধুমাত্র একটি নির্দিষ্ট রিকোয়েস্ট জেনারেট হওয়া পর্যন্ত কাজ করে। পেজ রেন্ডার হয়ে ক্লায়েন্টে পাঠানো শেষ হলে এটি ডিলিট হয়ে যায়।
   - কাজ: এর ফলে কোডের বিভিন্ন ফাইলে (যেমন লেআউট ও চাইল্ড পেজ) একই এপিআই কল করা হলে নেক্সট জেএস ব্রাউজারে রিকোয়েস্ট একবারই পাঠায় এবং বাকী জায়গায় মেমোরি থেকে ডাটা প্রোভাইড করে।

২. **Data Cache**:
   - স্থায়িত্ব: এটি রিকোয়েস্ট ও ডিপ্লয়মেন্ট পার হয়ে সার্ভার হার্ড ড্রাইভে স্থায়ীভাবে জমা থাকে যতক্ষণ না রিভ্যালিডেট করা হচ্ছে।
   - কাজ: এটি ব্যাকএন্ড ডাটাবেজ বা এপিআই-এর ওপর চাপ কমাতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার রুটের \`layout.tsx\` ফাইলে হেডার মেনু বানাতে ইউজারের প্রোফাইল ডাটা প্রয়োজন। আবার \`page.tsx\` ফাইলেও সেই একই ইউজারের প্রোফাইল ডাটা প্রয়োজন। আপনি ২টি ফাইলেই আলাদাভাবে \`fetch('/api/profile')\` রান করবেন। নেক্সট জেএস রিকোয়েস্ট মেমোইজেশনের মাধ্যমে সার্ভারে একবারই হিট করবে।

### উত্তম অনুশীলন
সার্ভার কম্পোনেন্টে প্রপস ড্রিলিং (Prop Drilling) এড়াতে ব্যাকএন্ড কোয়েরিগুলো প্যারেন্ট থেকে চাইল্ডে প্রপসের মাধ্যমে পাঠাবেন না। যে কম্পোনেন্টে ডাটা দরকার সেখানেই সরাসরি ফেচ করুন, মেমোইজেশন ব্যাকগ্রাউন্ডে এটি অপ্টিমাইজ করবে।

### সাধারণ ভুলসমূহ
পোস্ট (POST) রিকোয়েস্ট ক্যাশ হবে এমন ভাবা। রিকোয়েস্ট মেমোইজেশন শুধুমাত্র \`GET\` রিকোয়েস্টের ওপর কাজ করে।

### কোড উদাহরণ
\`\`\`typescript
async function getSettings() {
  // ১০ বার কল করলেও রেন্ডারিং টাইমে একবারই নেটওয়ার্ক রিকোয়েস্ট যাবে
  const res = await fetch('https://api.example.com/settings');
  return res.json();
}

// app/layout.tsx
export default async function RootLayout() {
  const settings = await getSettings(); // প্রথম কল
  return (
    <html>
      <body>{settings.theme}</body>
    </html>
  );
}

// app/page.tsx
export default async function Page() {
  const settings = await getSettings(); // দ্বিতীয় কল (ডুপ্লিকেট রিকোয়েস্ট বাদ যাবে)
  return <div>Welcome to {settings.siteName}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-77',
    title: 'Explain the differences between the Data Cache and the Full Route Cache in Next.js, and how to opt out of them.',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Caching', 'Data Cache', 'Full Route Cache', 'Dynamic Rendering', 'SSR'],
    enAnswer: 'The Data Cache stores raw data fetched via fetch() across server requests. The Full Route Cache pre-renders and stores entire HTML and React Server Component payloads of static routes during build time or revalidation passes. You opt out of both by forcing dynamic rendering.',
    bnAnswer: 'ডাটা ক্যাশ (Data Cache) এপিআই বা ডাটাবেজের র-ডাটা স্টোর করে। আর ফুল রুট ক্যাশ (Full Route Cache) বিল্ড টাইমে পুরো স্ট্যাটিক পেজের HTML এবং রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC) পে-লোড স্টোর করে রাখে। পেজ ডাইনামিক রেন্ডারিংয়ে ফোর্স করলে এই দুটি ক্যাশ থেকেই অপ্ট-আউট করা যায়।',
    enExplanation: `### Explanation
Here is the structural difference:

- **Data Cache (Server)**:
  - Cache target: Individual request outputs (\`fetch\`).
  - Persistent across deployments.
  - Opt-out: Set \`fetch(url, { cache: 'no-store' })\` or use dynamic database functions inside the fetch logic.

- **Full Route Cache (Server)**:
  - Cache target: Completed HTML and React Server Component (RSC) payload.
  - Only applies to Static Routes (rendered at build time). Dynamic routes are not stored in the Full Route Cache.
  - Opt-out: Change the route to dynamic. You can do this by using a Dynamic Function (e.g., calling \`cookies()\`, \`headers()\`, or accessing \`searchParams\`), exporting \`export const dynamic = 'force-dynamic'\`, or using \`revalidate = 0\`.

### Real-World Example
If your homepage is static, Next.js caches the final rendered HTML and RSC payload in the Full Route Cache. When a user requests \`/\`, it skips server evaluation completely and sends the cached HTML. If you add \`export const dynamic = 'force-dynamic'\`, you opt out of the Full Route Cache, and the page runs server logic for every client request.

### Best Practice
To optimize latency, keep routes static (allowing Full Route Cache) and invalidate parts of it using ISR (\`revalidate\`). Only opt out and use Dynamic Rendering if you must access request-specific information like cookies or session tokens.

### Common Mistakes
Forgetting that accessing \`searchParams\` on a page automatically forces dynamic rendering and opts the page out of the Full Route Cache.

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies } from 'next/headers';

// Opting out of Full Route Cache and Data Cache programmatically:
export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  // Reading cookies automatically opts the route into Dynamic Rendering
  const cookieStore = cookies();
  const session = cookieStore.get('session-token');
  
  // Data Cache opted out via 'no-store'
  const res = await fetch('https://api.example.com/user/metrics', {
    cache: 'no-store'
  });
  const data = await res.json();
  
  return (
    <div>
      <h1>Session ID: {session?.value}</h1>
      <p>Active users: {data.count}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটা ক্যাশ এবং ফুল রুট ক্যাশের কাজের পরিধি আলাদা:

- **ডাটা ক্যাশ (Data Cache)**:
  - এটি ইন্ডিভিজুয়াল এপিআই \`fetch\` ডাটা ক্যাশ করে।
  - এটি নতুন ডিপ্লয়মেন্টেও মুছে যায় না।
  - অপ্ট-আউট করার নিয়ম: \`fetch(url, { cache: 'no-store' })\`।

- **ফুল রুট ক্যাশ (Full Route Cache)**:
  - এটি পুরো পেজের বিল্ড করা HTML ও React Server Component (RSC) পে-লোড ক্যাশ করে রাখে।
  - এটি শুধু স্ট্যাটিক রুটের ওপর কাজ করে।
  - অপ্ট-আউট করার নিয়ম: পেজে ডাইনামিক ফাংশন (যেমন: \`cookies()\`, \`headers()\`) ব্যবহার করলে অথবা পেজ ফাইলে \`export const dynamic = 'force-dynamic'\` লিখলে এটি বন্ধ হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পোর্টফোলিও হোমপেজ স্ট্যাটিক হওয়ায় এর পুরো আর্কিটেকচার ফুল রুট ক্যাশে সেভ থাকে। যখনই ইউজার ঢুকবেন, সার্ভার প্রসেস ছাড়াই ইনস্ট্যান্ট রেডিমেড HTML ব্রাউজারে চলে যাবে। যদি আপনি ডাইনামিক ইউজার ডাটা বা কুকিজ চেক করে রিঅ্যাক্ট পেজ রেন্ডার করতে চান, তবে ফুল রুট ক্যাশ বন্ধ করতে হবে।

### উত্তম অনুশীলন
যতটা সম্ভব পেজগুলোকে স্ট্যাটিক রাখুন যাতে ফুল রুট ক্যাশ ব্যবহার করে সর্বোচ্চ স্পিড পাওয়া যায়। শুধুমাত্র কুকি বা সেশন চেক করতে হলে \`force-dynamic\` ডিক্লেয়ার করে ফুল রুট ক্যাশ বন্ধ করুন।

### সাধারণ ভুলসমূহ
কোনো পেজে \`searchParams\` প্রপস রিড করার কারণে যে পেজটি অটোমেটিক্যালি ডাইনামিক রেন্ডারিংয়ে চলে যায় এবং ফুল রুট ক্যাশ বাইপাস করে, তা খেয়াল না করা।

### কোড উদাহরণ
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies } from 'next/headers';

// ফুল রুট ক্যাশ বন্ধ করা হচ্ছে
export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  // কুকিজ রিড করার ফলে রুটটি অটো ডাইনামিক হয়ে যাবে
  const cookieStore = cookies();
  const session = cookieStore.get('session-token');
  
  // 'no-store' দিয়ে ডাটা ক্যাশ অফ করা হচ্ছে
  const res = await fetch('https://api.example.com/user/metrics', {
    cache: 'no-store'
  });
  const data = await res.json();
  
  return (
    <div>
      <h1>Session ID: {session?.value}</h1>
      <p>Active users: {data.count}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-78',
    title: 'What is the Router Cache in Next.js App Router, and how can you programmatically invalidate or configure it?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Caching', 'Router Cache', 'Client-side Routing', 'router.refresh', 'Prefetch'],
    enAnswer: 'The Router Cache is a client-side in-memory cache that stores pre-rendered Route Segment payloads in the browser. It cannot be configured globally, but it is invalidated programmatically using router.refresh(), or by performing server mutations with revalidatePath/revalidateTag.',
    bnAnswer: 'রাউটার ক্যাশ (Router Cache) হলো একটি ক্লায়েন্ট-সাইড মেমোরি ক্যাশ যা ব্রাউজারের ভেতর রুট সেগমেন্টের পে-লোড জমা রাখে। এটি গ্লোবালি কনফিগার করা যায় না, তবে router.refresh() কল করে অথবা সার্ভার অ্যাকশনে revalidatePath/revalidateTag ট্রিগার করে এটি ম্যানুয়ালি ইনভ্যালিড করা যায়।',
    enExplanation: `### Explanation
The Router Cache manages the client-side navigation experience:
- It stores previously visited routes and prefetched paths (using \`<Link prefetch={true}>\`).
- When navigating, Next.js pulls segments from the browser's memory instead of executing network requests, resulting in instant transitions.
- **Duration**:
  - For dynamically rendered pages: Cache lasts 30 seconds.
  - For statically rendered pages: Cache lasts 5 minutes.
- **How to Invalidate**:
  1. Call \`router.refresh()\`: Forces a refresh of the current route, requests a new payload, and updates the Router Cache.
  2. Perform a Server Action that calls \`revalidatePath\` or \`revalidateTag\`: Next.js automatically clears the client-side Router Cache for that path.

### Real-World Example
If a user edits their username on a profile settings page and saves it:
- Simply updating the DB and using normal client redirect might show the old profile name because the browser's Router Cache has a cached version of \`/profile\`.
- To fix this, the submit action must trigger \`revalidatePath(\'/profile\')\` on the server, forcing the browser to clear the \`/profile\` client cache.

### Best Practice
To keep client state synced after actions, return mutations directly from Server Actions. When a Server Action succeeds, Next.js handles invalidating both the server-side caches and the client-side Router Cache in one network round trip.

### Common Mistakes
Calling \`router.refresh()\` and expecting it to reload the server-side database. It only updates the client-side view; it does not trigger data revalidation if your data cache is still fresh.

### Code Example
\`\`\`typescript
// app/profile/edit-form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { updateProfile } from './actions';

export default function EditProfileForm() {
  const router = useRouter();
  
  async function handleSubmit(formData: FormData) {
    const success = await updateProfile(formData);
    if (success) {
      // Invalidate client cache and pull fresh RSC payload
      router.refresh();
      router.push('/profile');
    }
  }
  
  return (
    <form action={handleSubmit}>
      <input name="name" type="text" />
      <button type="submit">Save</button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রাউটার ক্যাশ ক্লায়েন্টের নেভিগেশন অভিজ্ঞতাকে অপ্টিমাইজ করে:
- এটি ব্রাউজারের মেমোরিতে ইতোমধ্যে ভিজিট করা রুট এবং প্রি-ফেচ করা পেজগুলো সাময়িকভাবে স্টোর করে।
- লিংকে ক্লিক করলে সার্ভারে নতুন করে ফাইল ডাউনলোড না করে মেমোরি থেকে ইনস্ট্যান্ট ভিউ রেন্ডার হয়।
- **স্থায়িত্ব**: ডাইনামিক পেজের ক্ষেত্রে ৩০ সেকেন্ড এবং স্ট্যাটিক পেজের ক্ষেত্রে ৫ মিনিট।
- **ইনভ্যালিডেশন**:
  ১. \`router.refresh()\` কল করলে কারেন্ট রুটের জন্য নতুন পে-লোড রি-ফেচ হয়।
  ২. সার্ভার অ্যাকশনে \`revalidatePath\` বা \`revalidateTag\` রান করালে ক্লায়েন্ট সাইডের এই ক্যাশ অটোমেটিক মুছে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার প্রোফাইল পেজ এডিট করে সাবমিট করার পর সাকসেস মেসেজ দেখালেও রুট ক্যাশের কারণে আগের নামই দেখায়। এই বাফারিং কাটাতে ফর্ম সাবমিট অ্যাকশনে \`revalidatePath('/profile')\` কল করতে হবে যাতে ব্রাউজার মেমোরির ক্যাশ ডিলিট হয়।

### উত্তম অনুশীলন
ডাটা সাবমিশনের পর মিউটেশন সিকোয়েন্স সম্পন্ন করতে সার্ভার অ্যাকশন ব্যবহার করুন। অ্যাকশন সফল হলে Next.js একই সাথে সার্ভার ক্যাশ ও ক্লায়েন্টের রাউটার ক্যাশ আপডেট করে দেয়।

### সাধারণ ভুলসমূহ
\`router.refresh()\` ব্যবহার করে ডাটাবেজ ক্যাশ আপডেট হবে এমন আশা করা। সার্ভার সাইডের ডাটা ক্যাশ ওয়ান-ডিমান্ড বা টাইম-বেসড রিভ্যালিড করা না হলে \`router.refresh()\` পুরনো ডাটায় ফেরত আনবে।

### কোড উদাহরণ
\`\`\`typescript
// app/profile/edit-form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { updateProfile } from './actions';

export default function EditProfileForm() {
  const router = useRouter();
  
  async function handleSubmit(formData: FormData) {
    const success = await updateProfile(formData);
    if (success) {
      // ক্লায়েন্ট ক্যাশ ক্লিয়ার করে নতুন ভিউ রিলোড করবে
      router.refresh();
      router.push('/profile');
    }
  }
  
  return (
    <form action={handleSubmit}>
      <input name="name" type="text" />
      <button type="submit">Save</button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-79',
    title: 'What causes hydration mismatch errors in Next.js, and how do you debug and resolve them?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['React', 'Hydration Mismatch', 'suppressHydrationWarning', 'Client Component'],
    enAnswer: 'Hydration mismatch occurs when the server-rendered HTML does not match the initial client-rendered DOM. Common causes include using dynamic dates, window checks, or invalid HTML structures. Fix it using useEffect for client-only state, or by applying suppressHydrationWarning.',
    bnAnswer: 'হাইড্রেশন মিসম্যাচ (Hydration Mismatch) তখন ঘটে যখন সার্ভার থেকে আসা HTML-এর সাথে ব্রাউজারের প্রথম ক্লায়েন্ট রেন্ডারিং মিলে না। এর মূল কারণ ডাইনামিক ডেট, উইন্ডো অবজেক্ট চেক অথবা ভুল HTML স্ট্রাকচার। এটি ঠিক করতে useEffect অথবা suppressHydrationWarning প্রপ ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
React hydration is the process where React attaches event listeners to the pre-rendered HTML sent by the server. If the DOM structure or contents differ between the server and the browser:
- React raises a warning: \`"Text content did not match..."\` or \`"Hydration failed..."\`.
- It forces React to tear down and rebuild parts of the DOM, degrading performance.

**Common Causes**:
1. **Dynamic data**: Displaying \`new Date()\` or \`Math.random()\` directly in components.
2. **Client-only APIs**: Referencing \`window\`, \`localStorage\`, or window sizes during initial render.
3. **Invalid HTML Nesting**: Writing \`<p><div>Block</div></p>\` or \`<table><tr>\` (missing \`<tbody>\`), which the browser parses differently than React expects.

### Real-World Example
If your web page displays the local system time of the user in a header:
- The server will render the time based on the server timezone (e.g., UTC).
- When the client browser loads, it attempts to render it based on the user's timezone (e.g., GMT+6). This creates a hydration error.

### Best Practice
1. For client-only values, set a \`mounted\` state in a \`useEffect\` hook and defer rendering client-only UI until the component has mounted.
2. For small dynamic text mismatches (like server vs client timestamps), use \`suppressHydrationWarning={true}\` on that element.

### Common Mistakes
Suppressing hydration errors globally or on massive components instead of solving the underlying DOM layout violations (like invalid table tags).

### Code Example
\`\`\`typescript
'use client';

import { useState, useEffect } from 'react';

export default function TimeDisplay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder that matches what the server renders
    return <span>Loading time...</span>;
  }

  // Safe client-only render
  return <span>Current time: {new Date().toLocaleTimeString()}</span>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট হাইড্রেশন হলো সার্ভার থেকে পাঠানো প্রাক-রেন্ডার করা HTML ফাইলের ওপর রিঅ্যাক্ট ইভেন্ট লিসেনারগুলো যুক্ত করার প্রসেস। এরর ঘটার প্রধান কারণগুলো হলো:

১. **ডাইনামিক ডাটা**: সরাসরি \`new Date()\` বা \`Math.random()\` রেন্ডার করা।
২. **ব্রাউজার এপিআই**: পেজ ফার্স্ট পেইন্টে উইন্ডো অবজেক্ট (\`window\`, \`localStorage\`) চেক করা।
৩. **ভুল HTML ট্যাগ নেস্টিং**: যেমন অনুচ্ছেদ ট্যাগের ভেতর ব্লক ট্যাগ ব্যবহার করা (\`<p><div>...</div></p>\`) যা ব্রাউজার অটোমেটিক্যালি রি-রেন্ডারিং লেআউট করার সময় চেইঞ্জ করে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে ইউজারের লোকাল টাইম দেখানোর জন্য যখন আপনি সরাসরি \`new Date()\` রেন্ডার করেন, তখন সার্ভার সেটি সার্ভারের টাইমে রেন্ডার করে কিন্তু ইউজারের ব্রাউজার সেটি তার লোকাল টাইমে প্রসেস করে। এটিই হাইড্রেশন এররের জন্ম দেয়।

### উত্তম অনুশীলন
১. ক্লায়েন্ট-অনলি ডাটার ক্ষেত্রে একটি \`mounted\` স্টেট তৈরি করুন এবং \`useEffect\`-এর ভেতর সেটি \`true\` সেট করুন। পেজ মাউন্ট হওয়ার পর ডাইনামিক ডাটা দেখান।
২. শুধুমাত্র ছোটোখাটো কাজের ক্ষেত্রে নির্দিষ্ট ট্যাগে \`suppressHydrationWarning={true}\` ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
ভুল ট্যাগিং সমস্যার সমাধান না করে শুধুমাত্র এরর হাইড করতে পুরো বডি ট্যাগে \`suppressHydrationWarning\` দিয়ে রাখা।

### কোড উদাহরণ
\`\`\`typescript
'use client';

import { useState, useEffect } from 'react';

export default function TimeDisplay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // সার্ভার সাইডের সাথে সামঞ্জস্য রাখতে প্লেসহোল্ডার রিটার্ন
    return <span>Loading time...</span>;
  }

  // মাউন্ট হওয়ার পর সেফ রেন্ডার
  return <span>Current time: {new Date().toLocaleTimeString()}</span>;
}
\`\`\``
  },
  {
    id: 'nextjs-80',
    title: 'How does Next.js secure Server Actions against CSRF and injection attacks, and how do you enforce authentication?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Security', 'Server Actions', 'CSRF', 'Authentication', 'JWT'],
    enAnswer: 'Next.js secures Server Actions by generating encrypted action IDs, verifying the Host and Origin headers to prevent CSRF, and treating arguments as untrusted inputs. Security must be enforced manually by validating sessions and input schemas inside the action function.',
    bnAnswer: 'নেক্সট জেএস সার্ভার অ্যাকশন সিকিউর করতে এনক্রিপ্টেড অ্যাকশন আইডি ব্যবহার করে এবং CSRF প্রতিরোধে Host ও Origin হেডার যাচাই করে। ইনপুট ডাটা ফিল্টার করা ও সেশন অথরাইজ করার কাজ সার্ভার অ্যাকশন ফাংশনের ভেতর ম্যানুয়ালি করতে হয়।',
    enExplanation: `### Explanation
Server Actions create a POST endpoint behind the scenes. Without proper defenses, they can be vulnerable:
- **CSRF Protection**: Next.js automatically compares the \`Origin\` header with the target URL's domain. If they mismatch, the action call is rejected.
- **Closure Encryption**: Next.js encrypts variables bound in server action closures (lexical environment scopes) to prevent client manipulation.
- **Authorization & Validation**:
  - The server action is exposed as a public endpoint. You must verify the user's authentication state inside the action body.
  - You must validate user inputs (e.g., using libraries like Zod) to prevent SQL injection or cross-site scripting (XSS).

### Real-World Example
If you create a Server Action called \`deleteArticle(id)\`, a malicious actor could inspect the page, find the Action ID, and make a custom script post request to trigger \`deleteArticle(any-id)\`. Without verification inside the function, unauthorized items could be deleted.

### Best Practice
Treat Server Actions exactly like traditional API routes. Always:
1. Fetch the user session at the start of the function.
2. Validate that the user owns the resource or has permission.
3. Use a library like \`zod\` to validate parameters.

### Common Mistakes
Passing untrusted variables from the client without validation or performing database writes directly without session authentication verification inside the \`'use server'\` function.

### Code Example
\`\`\`typescript
// app/actions/delete-comment.ts
'use server';

import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { z } from 'zod';

const schema = z.object({
  commentId: z.string().uuid(),
});

export async function deleteComment(rawInput: unknown) {
  // 1. Session verification
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  // 2. Schema validation
  const result = schema.safeParse(rawInput);
  if (!result.success) {
    throw new Error('Invalid Input');
  }

  const { commentId } = result.data;

  // 3. Ownership / Authorization check
  const comment = await db.comment.findUnique({ where: { id: commentId } });
  if (comment?.userId !== session.user.id) {
    throw new Error('Forbidden');
  }

  // 4. Perform mutation
  await db.comment.delete({ where: { id: commentId } });
  return { success: true };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার অ্যাকশন মূলত ব্যাকগ্রাউন্ডে একটি POST এপিআই অ্যান্ডপয়েন্ট তৈরি করে। এটি নিরাপদ রাখতে নেক্সট জেএস যা করে:
- **CSRF প্রোটেকশন**: ব্রাউজারের \`Origin\` হেডার ম্যাচ না হলে নেক্সট জেএস অ্যাকশন কল রিজেক্ট করে দেয়।
- **ক্লোজার এনক্রিপশন**: অ্যাকশন বাইন্ডিং ভেরিয়েবলগুলোকে এনক্রিপ্ট করে সিকিউরিটি জোরদার করে।
- **অথরাইজেশন ও ভ্যালিডেশন**:
  - যেহেতু এপিআই পাবলিকলি এক্সেসিবল হতে পারে, তাই অ্যাকশন ফাংশনের ভেতর ম্যানুয়ালি ইউজার অথরাইজেশন চেক করতে হবে।
  - ইনপুট ভ্যালিডেশনের জন্য জড (Zod) ব্যবহার করা উচিত।

### বাস্তব-ভিত্তিক উদাহরণ
প্রবন্ধ মুছে ফেলার জন্য \`deleteArticle(id)\` কাস্টম অ্যাকশন তৈরি করলেন। কোনো ইউজার যদি হ্যাকিং স্ক্রিপ্ট দিয়ে অন্য ইউজারের পোস্ট আইডি পাঠিয়ে রিকোয়েস্ট হিট করে, তবে আপনি যদি ফাংশনের ভেতর সেশন আইডির সাথে ডাটবেজের পোস্ট রাইটার ম্যাচ না করেন, তাহলে যে কেউ অন্য কারও লেখা ডিলিট করতে পারবে।

### উত্তম অনুশীলন
সার্ভার অ্যাকশনকে রেগুলার এপিআই এর মতো ভাবুন। প্রতিটি অ্যাকশনের শুরুতে সেশন চেক করুন, ডাটাবেজ অপারেশনের আগে প্যারামিটারগুলো ভ্যালিডেট করুন।

### সাধারণ ভুলসমূহ
ক্লায়েন্ট থেকে আসা আইডি সরাসরি কোয়েরিতে পাস করে দেয়া এবং সেশন ভেরিফিকেশন ছাড়া সরাসরি ডাটাবেজ আপডেট করে ফেলা।

### কোড উদাহরণ
\`\`\`typescript
// app/actions/delete-comment.ts
'use server';

import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { z } from 'zod';

const schema = z.object({
  commentId: z.string().uuid(),
});

export async function deleteComment(rawInput: unknown) {
  // ১. সেশন ভেরিফিকেশন
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  // ২. ইনপুট স্কিমা ভ্যালিডেশন
  const result = schema.safeParse(rawInput);
  if (!result.success) {
    throw new Error('Invalid Input');
  }

  const { commentId } = result.data;

  // ৩. ইউজার অ্যাক্সেস ও রাইটস ভেরিফিকেশন
  const comment = await db.comment.findUnique({ where: { id: commentId } });
  if (comment?.userId !== session.user.id) {
    throw new Error('Forbidden');
  }

  // ৪. ডিলিট অপারেশন
  await db.comment.delete({ where: { id: commentId } });
  return { success: true };
}
\`\`\``
  },
  {
    id: 'nextjs-81',
    title: 'How do you customize the Webpack or Turbopack configurations in next.config.js for advanced use cases?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Webpack', 'Turbopack', 'next.config.js', 'Build Optimization', 'Tooling'],
    enAnswer: 'You customize Webpack in next.config.js using the webpack property, which receives the config object, isServer flag, and utility options. For Turbopack, use the experimental.turbo options in next.config.js, as webpack configuration hooks do not run under Turbopack.',
    bnAnswer: 'Webpack কাস্টমাইজ করতে next.config.js-এ webpack প্রপার্টি ব্যবহার করা হয় যা config অবজেক্ট ও isServer ফ্ল্যাগ এক্সেপ্ট করে। আর Turbopack-এর জন্য experimental.turbo কনফিগারেশন ব্যবহার করা হয়, কারণ Turbopack মোডে webpack হুকগুলো রান করে না।',
    enExplanation: `### Explanation
Next.js supports deep tooling customization within \`next.config.js\`:

1. **Webpack Override**:
   - The \`webpack\` function accepts \`(config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack })\`.
   - Modifies rules, aliases, and plugins dynamically.
   - You must return the updated \`config\` object.

2. **Turbopack (Turbo) Configuration**:
   - Turbopack does not use Webpack loaders. You must define aliases and loaders in the \`experimental.turbo.rules\` block.
   - For example, you can map file extensions to specific SWC transforms.

### Real-World Example
If your application imports heavy SVG assets as React Components using SVGR, you need to configure the Webpack loaders to handle SVG parsing correctly. If you're building a dev setup using Turbopack (\`next dev --turbo\`), you must configure equivalent rules under the \`turbo\` key.

### Best Practice
When modifying webpack config, always check \`isServer\` to target only the client or server build as needed. Do not mutate the original configuration directly if possible; use array spreads or object merges.

### Common Mistakes
Forgetting that Webpack plugins do not run when Turbopack (\`--turbo\`) is enabled. This can lead to silent build failures in development.

### Code Example
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack Configuration
  webpack: (config, { isServer, webpack }) => {
    // Add custom alias
    config.resolve.alias['@custom-pkg'] = false;

    // Add a custom loader rule for SVG
    config.module.rules.push({
      test: /\\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Turbopack configuration equivalent
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস-এ build এবং bundling টুল কাস্টমাইজ করার প্রক্রিয়াটি নিচে দেওয়া হলো:

১. **Webpack Override**:
   - \`webpack\` ফাংশনটিতে প্যারামিটার হিসেবে \`(config, { isServer })\` পাওয়া যায়।
   - এটি মডিউল রুলস, প্লাগিন্স ও পাথ এলিয়াস মডিফাই করতে সাহায্য করে।
   - অবশ্যই মডিফাই করা \`config\` অবজেক্টটি রিটার্ন করতে হবে।

২. **Turbopack Configuration**:
   - টার্বোপ্যাক মোডে ওয়েবপ্যাক মডিউল লোডার কাজ করে না। তাই \`experimental.turbo\` এর অধীনে রুলস ডিফাইন করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার প্রজেক্টে যদি SVG ফাইলগুলোকে সরাসরি রিঅ্যাক্ট কম্পোনেন্ট হিসেবে ইম্পোর্ট করতে চান (যেমন \`@svgr/webpack\` প্যাকেজ দিয়ে), তাহলে ওয়েবপ্যাক লোডারে SVG ফাইল হ্যান্ডেল করার রুলস অ্যাড করতে হবে।

### উত্তম অনুশীলন
ওয়েবপ্যাক এডিটিংয়ের সময় \`isServer\` দিয়ে চেক করে নিন আপনি এটি শুধুমাত্র ব্রাউজার না কি নোড রানটাইমের জন্য সেটআপ করছেন। এটি বান্ডেল সাইজ কমাতে সাহায্য করে।

### সাধারণ ভুলসমূহ
ডেভেলপমেন্টে \`next dev --turbo\` রান করে ওয়েবপ্যাক রুলসগুলো কাজ করবে এমন আশা করা। টার্বো মোডে থাকলে ওয়েবপ্যাক কনফিগার কাজ করে না।

### কোড উদাহরণ
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack কনফিগারেশন
  webpack: (config, { isServer, webpack }) => {
    // কাস্টম এলিয়াস যোগ করা
    config.resolve.alias['@custom-pkg'] = false;

    // SVG ফাইলের জন্য কাস্টম লোডার
    config.module.rules.push({
      test: /\\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Turbopack কনফিগারেশন
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
\`\`\``
  },
  {
    id: 'nextjs-82',
    title: 'How does the instrumentation.ts file work in Next.js, and how is it used for monitoring and bootstrap hooks?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Instrumentation', 'OpenTelemetry', 'Monitoring', 'Bootstrap', 'Node.js'],
    enAnswer: 'The instrumentation.ts file is placed in the root/src directory and exports a register() function. Next.js runs this function once when the server container starts, making it ideal for initializing tracking tools like OpenTelemetry or establishing database connections.',
    bnAnswer: 'instrumentation.ts ফাইলটি root বা src ডিরেক্টরিতে থাকে এবং এটি একটি register() ফাংশন এক্সপোর্ট করে। সার্ভার কনটেইনার স্টার্ট হওয়ার সময় Next.js একবারই এই ফাংশনটি রান করে, যা OpenTelemetry বা ডাটাবেজ সংযোগ ইনিশিয়ালাইজ করার জন্য উপযুক্ত।',
    enExplanation: `### Explanation
Next.js supports a unified bootstrapping file \`instrumentation.ts\` (or \`instrumentation.js\`):
- It must be defined at the root level of your project or inside the \`src\` directory.
- The exported \`register()\` function is runtime-aware. It runs inside all active runtimes (Edge and Node.js) when the server starts.
- Inside \`register()\`, you can check the current runtime via \`process.env.NEXT_RUNTIME\` to execute platform-specific initialization code.
- To enable this feature, you must configure \`experimental.instrumentationHook = true;\` in \`next.config.js\`.

### Real-World Example
If your application uses OpenTelemetry (OTel) to trace API logs and database queries to Datadog or New Relic, you must initialize the OTel SDK before serving any request. Placing this code inside \`instrumentation.ts\` ensures traces begin capturing immediately.

### Best Practice
Keep the code inside \`register()\` clean and lightweight. Heavy synchronous tasks can delay the initial server startup and cause health check failures on platforms like AWS or Kubernetes.

### Common Mistakes
Forgetting that \`instrumentation.ts\` runs on both Edge and Node.js runtimes. Importing a Node.js-only module (like \`fs\`) without environment checks will break the compilation on Edge.

### Code Example
\`\`\`typescript
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
};

// src/instrumentation.ts
export async function register() {
  // Check runtime environment
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Dynamic import to avoid loading Node code in Edge
    const { initSentryNode } = await import('@/lib/sentry-node');
    initSentryNode();
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    const { initSentryEdge } = await import('@/lib/sentry-edge');
    initSentryEdge();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস-এ বুটস্ট্র্যাপিং কোড বা স্টার্টআপ কোড ম্যানেজ করার জন্য \`instrumentation.ts\` ফাইলটি ব্যবহৃত হয়:
- এটি রুট বা \`src\` ফোল্ডারের ভেতর সরাসরি ডিক্লেয়ার করা হয়।
- সার্ভার অন হওয়ার সময় এর এক্সপোর্ট করা \`register()\` ফাংশনটি রান করে।
- এই ফাইলের ভেতর \`process.env.NEXT_RUNTIME\` ভেরিয়েবল দিয়ে কারেন্ট রানটাইম নোড না কি এজ তা শনাক্ত করা সম্ভব।
- এটি অন করতে \`next.config.js\` ফাইলে \`experimental.instrumentationHook = true\` সেট করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
যেকোনো মনিটরিং টুলস (যেমন OpenTelemetry, Sentry, Datadog) প্রজেক্ট বুট হওয়ার পর ডাটা ট্র্যাকিং শুরু করতে সেশন ইনিশিয়ালাইজ করতে চায়। এই কাজগুলো অন্য কোথাও না করে \`instrumentation.ts\`-এ রাখলে সার্ভার শুরুর মুহূর্ত থেকেই ট্র্যাকিং একটিভ থাকে।

### উত্তম অনুশীলন
\`register()\` ফাংশনটিকে যতটা সম্ভব ছোট ও সিনক্রোনাস ব্লক মুক্ত রাখুন। দীর্ঘায়িত বা জটিল কোড সার্ভার স্টার্টআপকে স্লো করে দিতে পারে, যা হোস্টিং সার্ভারের হেলথ চেক ফেইল করতে পারে।

### সাধারণ ভুলসমূহ
কন্ডিশনাল রানটাইম চেক না করে সরাসরি নোড মডিউল ইম্পোর্ট করা। এজ (Edge) রানটাইমে ফাইলটি ক্র্যাশ করতে পারে যদি সেখানে নোড স্পেসিফিক কোড ডাইনামিক্যালি ইম্পোর্ট না করা হয়।

### কোড উদাহরণ
\`\`\`typescript
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
};

// src/instrumentation.ts
export async function register() {
  // রানটাইম চেক
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // এজ মোডে এরর এড়াতে ডাইনামিক ইম্পোর্ট ব্যবহার করা হয়েছে
    const { initSentryNode } = await import('@/lib/sentry-node');
    initSentryNode();
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    const { initSentryEdge } = await import('@/lib/sentry-edge');
    initSentryEdge();
  }
}
\`\`\``
  },
  {
    id: 'nextjs-83',
    title: 'What strategies can you implement in a Next.js application to mitigate serverless cold start latencies?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Serverless', 'Cold Starts', 'Performance', 'Vercel', 'Optimization'],
    enAnswer: 'To mitigate serverless cold starts, use the Edge runtime for fast routing, minimize dependencies to reduce package size, configure next.config.js to optimize bundle size, and keep database connections warm using serverless-friendly connection pools.',
    bnAnswer: 'সার্ভারলেস কোল্ড স্টার্ট কমাতে এজ রানটাইম ব্যবহার করুন, প্যাকেজ সাইজ কমাতে ডিপেন্ডেন্সি লিমিট করুন, বান্ডেল সাইজ অপ্টিমাইজ করতে next.config.js কনফিগার করুন এবং ডাইনামিক কানেকশন পুল ব্যবহার করে ডাটাবেজ কানেকশন সবসময় সচল রাখুন।',
    enExplanation: `### Explanation
In serverless hosting (Vercel, AWS Lambda), a "cold start" is the latency added when a serverless container spins up to handle a request.
- **Bundle Size**: A larger Javascript bundle increases download and initialization times.
- **Database Handshake**: Creating database client connections inside lambda calls on every spin-up slows the request down.

**Mitigation Strategies**:
1. **Optimize Bundle Size**: Use Next.js modular imports, purge unused libraries, and implement lazy loading.
2. **Database Pooling**: Use connection pooling adapters (like Prisma Accelerate or Neon Serverless Drivers) to bypass TCP connection handshakes.
3. **Use Edge Runtime**: Switch non-Node routes to the Edge runtime to leverage lightweight V8 engines that boot instantly.
4. **Keep Warm**: Configure warm lambdas (if supported by cloud provider) or send regular ping requests.

### Real-World Example
If your site loads a landing page that connects to Postgres, the initial load after a period of inactivity might take 3 seconds (1.5s cold start, 1s DB handshake, 0.5s page build). Switching to Edge runtime for the page layout and using a Neon HTTP connection pool reduces this latency to less than 200ms.

### Best Practice
Monitor your function sizes inside the \`.next/\` directory. Keep your server-side dependencies modular. Avoid importing large server-side libraries (like \`lodash\` or \`moment\`) globally; import only specific functions or use lighter alternatives.

### Common Mistakes
Instantiating database client objects (e.g., \`new PrismaClient()\`) inside route files instead of using a global singleton pattern, which exhausts connection pools on serverless environments.

### Code Example
\`\`\`typescript
// lib/db.ts - Database Singleton Pattern for Serverless
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Reuses client connection across lambda executions instead of reconnecting every time
export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভারলেস প্ল্যাটফর্মে প্রথমবার রিকোয়েস্ট আসার পর কন্টেইনার রেডি হওয়ার জন্য যে সময় লাগে তাকে কোল্ড স্টার্ট (Cold Start) বলে:
- **বান্ডেল সাইজ**: বান্ডেল যত বড় হবে, ইনিশিয়ালাইজ করতে তত সময় লাগবে।
- **ডাটাবেজ হ্যান্ডশেক**: প্রতিবার নোড কানেক্ট হতে অতিরিক্ত সময় নষ্ট হওয়া।

**সমাধানের উপায়**:
১. **বান্ডেল কমানো**: অকেজো মডিউল রিমুভ ও লেজি লোডিং সেট করা।
২. **ডাটাবেজ কানেকশন পুল**: Prisma Accelerate বা Neon Serverless ডিস্ট্রিবিউটর ব্যবহার করা।
৩. **এজ রানটাইম**: এজ নোড ব্যবহার করে V8 ইন্টিগ্রেশন चालू করা।
৪. **গ্লোবাল সিঙ্গেলটন**: গ্লোবাল ভেরিয়েবলে ডাটাবেজ অবজেক্ট স্টোর করা যাতে কানেকশন বার বার ওপেন না হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডেডিকেটেড ল্যাম্বডা প্রথমবার রিকোয়েস্ট রিসিভ করার পর ডাটাবেজের সাথে টিসিপি হ্যান্ডশেক করতে গেলে সময় নেয়। সিঙ্গেলটন ডিজাইন প্যাটার্ন ব্যবহার করলে সেই ডাটাবেজ অবজেক্টটি মেমোরিতে থেকে যায় ও পরবর্তী রিকোয়েস্টগুলো আর স্লো হয় না।

### উত্তম অনুশীলন
সার্ভার সাইড বান্ডেলে \`lodash\` বা \`moment\` এর মতো হেভি লাইব্রেরি এড়িয়ে চলুন। ডাটাবেজ কানেকশন ম্যানেজ করতে সবসময় সিঙ্গেলটন প্যাটার্ন ফলো করুন।

### সাধারণ ভুলসমূহ
সার্ভারলেস এনভায়রনমেন্টে গ্লোবাল ফাইল তৈরি না করে প্রতিটি এপিআই এন্ডপয়েন্টের ভেতর নতুন করে ডাটাবেজ কানেকশন অবজেক্ট ডিক্লেয়ার করা, যা পুলে কনফ্লিক্ট তৈরি করে।

### Code Example
\`\`\`typescript
// lib/db.ts - ডাটাবেজ সিঙ্গেলটন প্যাটার্ন
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ল্যাম্বডা এক্সিকিউশন জুড়ে একই কানেকশন বারবার ব্যবহার করবে
export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
\`\`\``
  },
  {
    id: 'nextjs-84',
    title: 'How do dynamic segment configuration options (dynamic, dynamicParams, revalidate, fetchCache) govern page behavior in Next.js?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Routing', 'Configuration', 'Static Generation', 'ISR', 'Dynamic Rendering'],
    enAnswer: 'Dynamic segment configurations are page-level variables exported to customize static/dynamic rendering. dynamic sets caching behavior (force-dynamic/force-static), dynamicParams handles unmatched paths, revalidate defines ISR schedules, and fetchCache overrides caching rules for individual fetches.',
    bnAnswer: 'ডাইনামিক সেগমেন্ট কনফিগারেশন হলো পেজ-লেভেলের কিছু ভেরিয়েবল যা রেন্ডারিং মেকানিজম নিয়ন্ত্রণ করে। dynamic ভেরিয়েবল ক্যাশিং মেথড ঠিক করে, dynamicParams আনম্যাচড ইউআরএল হ্যান্ডেল করে, revalidate নতুন ISR টাইম নির্ধারণ করে এবং fetchCache প্রতিটি ফেচ রিকোয়েস্টের ক্যাশ রুলস ওভাররাইড করতে পারে।',
    enExplanation: `### Explanation
Next.js allows configuring routes using specific exported configuration constants:

1. **\`export const dynamic = 'auto' | 'force-dynamic' | 'force-static' | 'error'\`**:
   - \`auto\` (default): Renders statically if possible, dynamically if dynamic functions are detected.
   - \`force-dynamic\`: Disables static optimization, turning the route dynamic.
   - \`force-static\`: Forces static pre-rendering, returning empty mocks for dynamic methods.

2. **\`export const dynamicParams = true | false\`**:
   - Governs dynamic routes not generated at build time via \`generateStaticParams\`.
   - \`true\` (default): Unmatched segments are rendered on demand.
   - \`false\`: Unmatched segments immediately return a 404 page.

3. **\`export const revalidate = number | false\`**:
   - Revalidation schedule (seconds) for the layout or page.

4. **\`export const fetchCache = 'auto' | 'force-no-store' | 'only-no-store' ...\`**:
   - Controls how individual \`fetch\` commands are cached inside the file globally.

### Real-World Example
For a blog site where new posts are published frequently, you can export \`revalidate = 300\` to refresh content every 5 minutes. If you want to restrict URLs to only the posts generated at build time (e.g., archived posts), set \`dynamicParams = false\` to block dynamic on-demand generation.

### Best Practice
Avoid using \`force-dynamic\` unless absolutely necessary (like reading dynamic session headers). Instead, let Next.js automatically analyze the route to optimize caching.

### Common Mistakes
Combining \`dynamic = 'force-static'\` with dynamic data requirements like reading session cookies, which leads to outdated state leakages across different users.

### Code Example
\`\`\`typescript
// app/archive/[slug]/page.tsx

// Render at build time, do not allow dynamic paths
export const dynamic = 'force-static';
export const dynamicParams = false; // Block dynamic loading
export const revalidate = 86400;    // Revalidate daily

export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' }
  ];
}

export default async function ArchivePage({ params }: { params: { slug: string } }) {
  return <div>Archive: {params.slug}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস পেজ বা লেআউট ফাইলের কনফিগারেশন কাস্টমাইজ করতে কিছু ভেরিয়েবল এক্সপোর্ট করার সুযোগ দেয়:

১. **\`dynamic\`**:
   - \`force-dynamic\`: পেজটিকে ডাইনামিক সার্ভার রেন্ডারিং এ রূপান্তর করে।
   - \`force-static\`: পেজটিকে স্ট্যাটিক জেনারেশনে ফোর্স করে।

২. **\`dynamicParams\`**:
   - \`generateStaticParams\` এর বাইরে যদি কোনো রুট ভিজিট করা হয় তা কীভাবে প্রসেস হবে তা ঠিক করে। \`false\` দিলে আনম্যাচড রুটের জন্য সরাসরি ৪০৪ (404) পেজ আসবে।

৩. **\`revalidate\`**:
   - নির্দিষ্ট সেকেন্ড পর পর পেজটি রিভ্যালিড করার জন্য ISR সময়সীমা সেট করে।

৪. **\`fetchCache\`**:
   - পেজের অধীনে সমস্ত ফেচ রিকোয়েস্টের জন্য ক্যাশিং রুলস একবারে ডিফাইন করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডকুমেন্টেশন পেজের ক্ষেত্রে আপনি চান না যে বিল্ড টাইমে জেনারেট করা পেজের বাইরে কোনো রুট ডাইনামিক্যালি জেনারেট হোক। এজন্য \`dynamicParams = false\` এবং \`revalidate = 86400\` ডিক্লেয়ার করে রাখতে পারেন।

### উত্তম অনুশীলন
খুব বিশেষ প্রয়োজন ছাড়া \`force-dynamic\` ডিক্লেয়ার করা এড়িয়ে চলুন। নেক্সট জেএসকে নিজে থেকে অ্যানালাইসিস করতে দিন যে পেজটি স্ট্যাটিক না কি ডাইনামিক হবে।

### সাধারণ ভুলসমূহ
\`force-static\` ডিক্লেয়ার করা কোনো পেজে কুকিজ বা ইউজারের সেশন টোকেন রিড করতে চাওয়া। এটি সিকিউরিটি লিক এবং ভুল ডাটা প্রদর্শনের কারণ হতে পারে।

### কোড উদাহরণ
\`\`\`typescript
// app/archive/[slug]/page.tsx

// স্ট্যাটিক রেন্ডারিং ফোর্স করা হলো
export const dynamic = 'force-static';
export const dynamicParams = false; // বাইরের কোনো ইউআরএল এক্সেপ্ট করবে না
export const revalidate = 86400;    // প্রতিদিন রিভ্যালিডেট হবে

export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' }
  ];
}

export default async function ArchivePage({ params }: { params: { slug: string } }) {
  return <div>Archive: {params.slug}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-85',
    title: 'How do you build a Multi-Zone Next.js architecture to stitch multiple independent apps under a single domain?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Multi-zone', 'Micro-frontends', 'Rewrites', 'next.config.js', 'Routing'],
    enAnswer: 'Multi-Zone uses Next.js rewrites in the main app configuration to map paths to independent Next.js projects hosted on different servers. This creates a micro-frontends architecture where multiple teams work on different zones (e.g. blog, shop) under one domain.',
    bnAnswer: 'মাল্টি-জোন (Multi-Zone) আর্কিটেকচারে মূল অ্যাপের next.config.js-এ rewrite রুলস ব্যবহার করে অন্যান্য সার্ভারে থাকা সম্পূর্ণ আলাদা প্রজেক্টের পাথগুলো ম্যাপিং করা হয়। এর মাধ্যমে একই ডোমেইনের অধীনে ব্লগ বা শপ সেকশনগুলো মাইক্রো-ফ্রন্টএন্ড হিসেবে কাজ করে।',
    enExplanation: `### Explanation
Multi-Zone is a strategy for building large-scale websites:
- You host multiple independent Next.js projects on different subdomains or hosting services.
- The parent app acts as a reverse proxy. When a user requests \`/blog\` or \`/shop\`, the parent redirects the traffic using Next.js \`rewrites\` to the target micro-app server.
- The user views everything under a single domain (e.g., \`example.com/blog\` and \`example.com/shop\`) without noticing the transition.
- Each app must define its \`assetPrefix\` to ensure CSS, images, and Javascript chunks are loaded correctly from their respective hosts.

### Real-World Example
A big enterprise runs its main marketing site, an online shop, and a documentation center. Instead of having a single monolithic repository that takes 20 minutes to compile, they split it:
- Main App: handles landing page (\`/\`) and marketing routes.
- Shop App: handles \`/shop\`.
- Docs App: handles \`/docs\`.
The main app rewrites \`/shop/:path*\` to the Shop app's URL.

### Best Practice
Configure unique \`assetPrefix\` paths for each zone (e.g., \`/docs/_next\`) to prevent JS chunk conflicts or duplicate asset name collisions with the primary app.

### Common Mistakes
Forgetting to rewrite static file assets (\`_next/static\`) for sub-apps, causing page breaks or style mismatches when navigating to a child zone.

### Code Example
\`\`\`javascript
// next.config.js (Primary App - hosted at example.com)
const DOCS_APP_URL = process.env.DOCS_APP_URL || 'https://docs-app.vercel.app';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: \`\${DOCS_APP_URL}/docs\`,
      },
      {
        source: '/docs/:path*',
        destination: \`\${DOCS_APP_URL}/docs/:path*\`,
      },
      // Ensure static assets for the docs app are resolved correctly
      {
        source: '/docs/_next/:path*',
        destination: \`\${DOCS_APP_URL}/_next/:path*\`,
      },
    ];
  },
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাল্টি-জোন হলো লার্জ-স্কেল ফ্রন্টএন্ড অ্যাপ্লিকেশন ম্যানেজ করার একটি টেকনিক:
- একই ডোমেইনের ভিন্ন ভিন্ন পাথের অধীনে আলাদা আলাদা নেক্সট জেএস প্রজেক্ট রান করানো হয়।
- প্যারেন্ট অ্যাপটি মূলত রিভার্স প্রক্সি হিসেবে কাজ করে। ইউজার যখন \`/docs\` পাথে রিকোয়েস্ট করেন, তখন rewrite মেথডের সাহায্যে ট্রাফিক অন্য হোস্টে থাকা ডকুমেন্টেশন অ্যাপে ডাইরেক্ট করা হয়।
- প্রতিটি সাব-অ্যাপে অবশ্যই \`assetPrefix\` কনফিগার করতে হয় যাতে ব্রাউজার সঠিক সোর্স থেকে সিএসএস (CSS) ও স্ক্রিপ্ট নিয়ে পেজ রেন্ডার করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বড় কোম্পানির মূল মার্কেটিং পেজ, শপিং সেকশন এবং সাপোর্ট ডকুমেন্ট আলাদা আলাদা টিম দ্বারা ডেভেলপ করা হচ্ছে। সব কোড এক রেপোতে রাখলে বিল্ড ও মেইনটেন্যান্সে অনেক সমস্যা হয়। তাই মার্কেটিং পেজ (\`/\`), শপ (\`/shop\`) ও ডকস (\`/docs\`) আলাদা প্রজেক্টে ভাগ করে মাল্টি-জোন দিয়ে ইন্টিগ্রেট করা হয়।

### উত্তম অনুশীলন
ভিন্ন প্রজেক্টের স্ট্যাটিক ফাইলগুলোর নেমস্পেস ক্ল্যাশ এড়াতে প্রতিটি সাব-অ্যাপ্লিকেশনের জন্য একটি ইউনিক \`assetPrefix\` ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ
সাব-অ্যাপগুলোর স্ট্যাটিক ফাইল রুট (\`_next/static\`) রিরাইট করতে ভুলে যাওয়া, যার ফলে সাব-অ্যাপের লিংকে ঢুকলে ব্ল্যাঙ্ক পেজ দেখায়।

### কোড উদাহরণ
\`\`\`javascript
// next.config.js (Primary App - hosted at example.com)
const DOCS_APP_URL = process.env.DOCS_APP_URL || 'https://docs-app.vercel.app';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: \`\${DOCS_APP_URL}/docs\`,
      },
      {
        source: '/docs/:path*',
        destination: \`\${DOCS_APP_URL}/docs/:path*\`,
      },
      // সাব-অ্যাপের স্ট্যাটিক ফাইলগুলো লোড করার রুল
      {
        source: '/docs/_next/:path*',
        destination: \`\${DOCS_APP_URL}/_next/:path*\`,
      },
    ];
  },
};
\`\`\``
  },
  {
    id: 'nextjs-86',
    title: 'How does Middleware execute in Next.js, and how do matchers, redirects, and rewrites behave?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Middleware', 'Routing', 'Matchers', 'Headers', 'Cookies'],
    enAnswer: 'Middleware runs before a request is completed, executing on the Edge Runtime. It matches request paths using a config matcher, allowing redirect routing, URL rewriting, headers manipulation, and cookie reading/writing for authentication and localization.',
    bnAnswer: 'মিডলওয়্যার (Middleware) রিকোয়েস্ট সম্পন্ন হওয়ার আগে এজ রানটাইমে রান করে। এটি config-এ নির্দিষ্ট করা matcher অনুযায়ী রিকোয়েস্ট ফিল্টার করে রিডাইরেক্ট, ইউআরএল রিরাইট, হেডার্স মডিফাই এবং কুকিজ রিড ও রাইট করার সুবিধা দেয়।',
    enExplanation: `### Explanation
Middleware is configured in a single \`middleware.ts\` file at the root or \`src\` directory:
- **Execution Order**: Runs before all pages, layouts, and API routes.
- **Runtimes**: Limited strictly to the Edge Runtime (no Node modules).
- **Control Flow**:
  - **Redirects**: Alters the browser URL and navigates to a new route.
  - **Rewrites**: Resolves the request to a different internal path without updating the browser URL.
  - **Response**: Can return a raw response directly (e.g., blocking access with a 401).

**Matchers**:
Use matchers to filter which paths trigger middleware. Matchers support regex and glob-like parsing.

### Real-World Example
In a global app, you want to redirect users to their localized dashboard (e.g., \`/bd/dashboard\`) when they visit \`/dashboard\` based on their cookie preference or accept-language headers. Middleware reads these values and rewrites the request internally.

### Best Practice
Avoid running database queries inside Middleware since it executes on every matching request. Instead, extract session details from signed cookies/tokens (JWT) to check auth states client-side or verify tokens cryptographically on the Edge.

### Common Mistakes
Writing heavy scripts inside middleware, causing routing latency. Middleware must respond within milliseconds to keep site speed fast.

### Code Example
\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  // If token is missing, redirect to login
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    // Preserves original path to return after login
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Continue request lifecycle
  return NextResponse.next();
}

// Limit Middleware to specific paths
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মিডলওয়্যার মূলত রিকোয়েস্ট লাইফসাইকেলের একদম শুরুতে এক্সিকিউট হয়:
- এটি রুট বা \`src\` ডিরেক্টরিতে \`middleware.ts\` ফাইলের মাধ্যমে নিয়ন্ত্রণ করা হয়।
- এটি শুধুমাত্র এজ রানটাইমে চলে।
- **নিয়ন্ত্রণ মেকানিজম**:
  - \`Redirects\`: ব্রাউজারের ইউআরএল চেইঞ্জ করে নতুন পেইজে পাঠায়।
  - \`Rewrites\`: ইউআরএল পরিবর্তন না করেই ভেতরের কনটেন্ট পরিবর্তন করে দেখায়।
  - \`NextResponse.next()\`: রিকোয়েস্টকে তার গন্তব্যে যাওয়ার অনুমতি দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার যখন \`/dashboard\` ফোল্ডারে ঢুকতে যাবেন, মিডলওয়্যার চেক করবে তার ব্রাউজারে অথরাইজেশন কুকি বা টোকেন আছে কি না। টোকেন না থাকলে তাকে রিডাইরেক্ট করে \`/login\` পেজে পাঠিয়ে দেওয়া হবে।

### উত্তম অনুশীলন
মিডলওয়্যারের ভেতর কখনো সরাসরি ডাটাবেজ কোয়েরি রান করবেন না। কুকিজের ভেতর সাইন্ড টোকেন (JWT) বা ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে ইউজারের স্টেট ভেরিফাই করুন।

### সাধারণ ভুলসমূহ
ম্যাচার কনফিগ সেট না করে মিডলওয়্যার রান করানো, যার ফলে প্রতিবার কোনো ইমেজ বা সিএসএস ফাইল লোড হওয়ার সময়ও মিডলওয়্যার অপ্রয়োজনীয়ভাবে ট্রিগার হতে থাকে।

### কোড উদাহরণ
\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  // টোকেন না থাকলে লগইন পেজে রিডাইরেক্ট করা হচ্ছে
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// শুধুমাত্র নির্দিষ্ট পাথগুলোতে মিডলওয়্যার ফিল্টার করা হচ্ছে
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
\`\`\``
  },
  {
    id: 'nextjs-87',
    title: 'How do you implement custom Image loaders and optimize dynamic responsive layouts in next/image?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Image Optimization', 'responsive layout', 'custom loader', 'next/image'],
    enAnswer: 'To use custom loaders with next/image, define a loader function that returns resolved URLs with width/quality parameters, or configure a loaderFile in next.config.js. For responsive layouts, use fill combined with sizes to prevent Cumulative Layout Shift (CLS).',
    bnAnswer: 'next/image-এ কাস্টম লোডার ব্যবহার করতে একটি ফাংশন ডিক্লেয়ার করতে হয় যা উইডথ ও কোয়ালিটি প্যারামিটার সহ ইউআরএল রিটার্ন করে, অথবা next.config.js-এ loaderFile সেট করতে হয়। রেসপন্সিভ লেআউটের জন্য fill প্রপসের সাথে sizes ব্যবহার করতে হয় যাতে CLS না ঘটে।',
    enExplanation: `### Explanation
The \`next/image\` component optimizes images automatically, but for production platforms using Cloudinary, Imgix, or AWS S3, you might want to offload optimizations:

1. **Custom Image Loader**:
   - A client-side function that overrides the default Next.js server optimization endpoint.
   - It constructs the source URL by appending CDN-specific dynamic sizing and formatting queries (e.g., \`?w=640&q=75\`).

2. **Responsive Layouts using \`fill\`**:
   - Instead of static widths and heights, using \`fill\` makes the image absolute and match its parent relative container.
   - You must pair it with the \`sizes\` attribute (e.g., \`sizes="(max-width: 768px) 100vw, 50vw"\`) to instruct the browser on which image size variant to download, saving bandwith on mobile devices.

### Real-World Example
If your homepage downloads user avatars stored in Cloudinary, using a custom loader ensures that a mobile user fetches a 100px avatar while a desktop user fetches a 200px avatar, both served directly from Cloudinary edges without hitting the Next.js node server.

### Best Practice
Always define the \`sizes\` attribute when using \`fill\` to avoid downloading full-resolution images on small screens. Ensure the parent container has \`position: relative\` and a defined height/width layout.

### Common Mistakes
Using \`fill\` without setting \`position: relative\` or \`position: absolute\` on the parent container, which makes the image stretch across the entire screen.

### Code Example
\`\`\`typescript
// app/components/CustomImage.tsx
'use client';

import Image from 'next/image';

interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

// Cloudinary Custom Loader
const cloudinaryLoader = ({ src, width, quality }: LoaderProps) => {
  const params = ['f_auto', 'c_limit', \`w_\${width}\`, \`q_\${quality || 'auto'}\`];
  return \`https://res.cloudinary.com/demo/image/upload/\${params.join(',')}/\${src}\`;
};

export default function OptimizedBanner() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Image
        loader={cloudinaryLoader}
        src="sample.jpg"
        alt="Cloudinary Optimized Banner"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`next/image\` ডিফল্টভাবে নিজে ইমেজ প্রসেস করে, কিন্তু Cloudinary বা Imgix-এর মতো এক্সটার্নাল CDN ব্যবহার করলে কাস্টম লোডার ব্যবহার করা উচিত:

১. **কাস্টম ইমেজ লোডার (Custom Image Loader)**:
   - এটি একটি ক্লায়েন্ট ফাংশন যা ইমেজ সোর্স ইউআরএল জেনারেট করার সময় CDN এর ফরম্যাট অনুযায়ী উইডথ ও কোয়ালিটি কুয়েরি প্যারামিটার যোগ করে দেয় (যেমন \`?w=400\`)।

২. **রেসপন্সিভ লেআউট ও \`fill\`**:
   - ইমেজের হাইট/উইডথ জানা না থাকলে \`fill\` ব্যবহার করা হয়।
   - এর সাথে অবশ্যই \`sizes\` এট্রিবিউট ব্যবহার করতে হবে যাতে ব্রাউজার স্ক্রিন সাইজ অনুযায়ী সঠিক সাইজের ছবি ডাউনলোড করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটের ব্যানার ইমেজটি একটি ক্লাউড CDN-এ হোস্ট করা। আপনি যদি কাস্টম লোডার ব্যবহার করেন, তবে মোবাইল ফোনের স্ক্রিনের জন্য CDN থেকে ৪০০ পিক্সেলের ছবি ডাউনলোড হবে আর বড় ল্যাপটপের জন্য ১২০০ পিক্সেলের ছবি ডাউনলোড হবে, যা লোডিং স্পিড বাড়াবে।

### উত্তম অনুশীলন
\`fill\` ব্যবহারের সময় প্যারেন্ট ডিভটিতে অবশ্যই \`position: relative\` বা \`position: absolute\` সিএসএস প্রপার্টি রাখুন। অন্যথায় ইমেজ পুরো উইন্ডো জুড়ে ছড়িয়ে পড়বে।

### সাধারণ ভুলসমূহ
\`fill\` ব্যবহার করার পরও \`sizes\` প্রপার্টি উল্লেখ না করা। এর ফলে ব্রাউজার মোবাইল স্ক্রিনেও বড় ডেক্সটপ সাইজের ফুল রেজুলেশন পিকচার ডাউনলোড করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript
// app/components/CustomImage.tsx
'use client';

import Image from 'next/image';

interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

// Cloudinary কাস্টম লোডার ফাংশন
const cloudinaryLoader = ({ src, width, quality }: LoaderProps) => {
  const params = ['f_auto', 'c_limit', \`w_\${width}\`, \`q_\${quality || 'auto'}\`];
  return \`https://res.cloudinary.com/demo/image/upload/\${params.join(',')}/\${src}\`;
};

export default function OptimizedBanner() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Image
        loader={cloudinaryLoader}
        src="sample.jpg"
        alt="Cloudinary Optimized Banner"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-88',
    title: 'How do serialization rules govern the React Server Component (RSC) boundary, and how do you pass functions or complex types?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['RSC', 'Client Components', 'Serialization', 'Interoperability', 'Architecture'],
    enAnswer: 'The boundary between Server Components and Client Components requires props passed across it to be serializable (e.g. JSON-like structures). Functions, Dates, Map/Set, and Class instances cannot be passed directly. Instead, pass serializable data or perform operations in separate Client Hooks.',
    bnAnswer: 'সার্ভার কম্পোনেন্ট ও ক্লায়েন্ট কম্পোনেন্টের বাউন্ডারি বা সংযোগস্থলে যে প্রপসগুলো পাস করা হয় সেগুলোকে অবশ্যই সিরিয়ালাইজেবল (Serializable) হতে হয়। ফাংশন, ডেট অবজেক্ট, ম্যাপ বা ক্লাস ইনস্ট্যান্স সরাসরি পাস করা যায় না। এর বদলে সাধারণ ডাটা পাস করতে হয় বা ক্লায়েন্ট হুকের মাধ্যমে হ্যান্ডেল করতে হয়।',
    enExplanation: `### Explanation
Next.js renders React Server Components on the server and sends their UI description (RSC Payload) to the browser.
- When a Server Component imports and renders a Client Component, it creates a **Boundary**.
- Because the Client Component executes on the browser, all props sent from the Server Component to the Client Component must be serialized into a transportable string format.
- **Allowed props**: Plain objects, arrays, primitives (strings, numbers, booleans, null), and Promises.
- **Disallowed props**: Functions (like callbacks), Class instances, complex symbols, and DOM nodes.

### Real-World Example
If you render a client-side database item modifier list:
- You cannot pass a database update function \`const updateDb = () => db.item.update(...)\` directly as a prop to a \`'use client'\` edit button.
- Instead, pass the item ID, and have the Client Component invoke a Server Action, which handles the server execution securely.

### Best Practice
Keep the data payload clean and normalized before crossing the boundary. If you must pass date stamps, convert them to ISO strings or timestamps on the server and parse them inside the Client Component.

### Common Mistakes
Passing a mongoose document or a prisma database return object directly to a Client Component without stripping non-serializable methods or prototype properties, which throws build-time runtime exceptions.

### Code Example
\`\`\`typescript
// app/items/page.tsx (Server Component)
import ItemListClient from './item-list-client';
import { db } from '@/lib/db';

export default async function ItemsPage() {
  const items = await db.items.findMany();
  
  // Serialize dates and remove non-serializable prototypes
  const serializedItems = items.map(item => ({
    ...item,
    createdAt: item.createdAt.toISOString(), // Convert Date object to string
  }));

  return (
    <div>
      <h1>Item Panel</h1>
      <ItemListClient items={serializedItems} />
    </div>
  );
}

// app/items/item-list-client.tsx (Client Component)
'use client';

interface Item {
  id: string;
  name: string;
  createdAt: string; // Received as serializable string
}

export default function ItemListClient({ items }: { items: Item[] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} (Created: {new Date(item.createdAt).toLocaleDateString()})
        </li>
      ))}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস সার্ভার কম্পোনেন্ট প্রথমে সার্ভারে এক্সিকিউট হয় এবং এর ইউআই ডেসক্রিপশন ব্রাউজারে পাঠায়।
- সার্ভার কম্পোনেন্ট যখন কোনো ক্লায়েন্ট কম্পোনেন্টকে রেন্ডার করে, তখন সেখানে একটি **বাউন্ডারি** তৈরি হয়।
- এই সীমানা পার হয়ে প্রপস ক্লায়েন্টে পাঠানোর সময় সেগুলোকে ব্রাউজার রিডেবল বা স্ট্রিং ফরম্যাটে কনভার্ট করা হতে হয়। একে সিরিয়ালাইজেশন (Serialization) বলে।
- **অনুমোদিত**: সাধারণ অবজেক্ট, অ্যারে, প্রিমিটিভ ডাটা টাইপ (স্ট্রিং, নাম্বার, বুলিয়ান) এবং প্রমিসেস (Promises)।
- **অননুমোদিত**: জাভাস্ক্রিপ্ট ফাংশন, ক্লাস অবজেক্ট, ডম এলিমেন্ট ইত্যাদি।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট এডিট করার জন্য আপনি সার্ভার থেকে সরাসরি ডেটাবেজ সেভ করার কাস্টম ফাংশন \`saveToDb()\` ক্লায়েন্ট বাটন কম্পোনেন্টে প্রপস আকারে পাঠাতে পারবেন না। এর পরিবর্তে, প্রোডাক্ট আইডি প্রপস হিসেবে পাঠিয়ে ক্লায়েন্ট কম্পোনেন্ট থেকে একটি সার্ভার অ্যাকশন ট্রিগার করতে হবে।

### উত্তম অনুশীলন
ডেটাবেজের জটিল রিটার্ন অবজেক্ট ক্লায়েন্ট কম্পোনেন্টে পাস করার আগে তা নরমাল অবজেক্টে রূপান্তর করে নিন। যেমন \`Date\` অবজেক্টকে \`toISOString()\` করে স্ট্র্রিং বানিয়ে পাঠান।

### সাধারণ ভুলসমূহ
প্রিজমা বা মঙ্গুজ মডেলের র-অবজেক্টগুলো সরাসরি প্রপস হিসেবে রিঅ্যাক্ট ক্লায়েন্ট ফাইলে পাঠিয়ে দেওয়া, যার ফলে ব্রাউজার কনসোলে সিরিয়ালাইজেশন এরর দেখায়।

### কোড উদাহরণ
\`\`\`typescript
// app/items/page.tsx (Server Component)
import ItemListClient from './item-list-client';
import { db } from '@/lib/db';

export default async function ItemsPage() {
  const items = await db.items.findMany();
  
  // ডেট অবজেক্টকে সিরিয়ালাইজ করা হচ্ছে
  const serializedItems = items.map(item => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
  }));

  return (
    <div>
      <h1>Item Panel</h1>
      <ItemListClient items={serializedItems} />
    </div>
  );
}

// app/items/item-list-client.tsx (Client Component)
'use client';

interface Item {
  id: string;
  name: string;
  createdAt: string; // সিরিয়ালাইজড স্ট্রিং
}

export default function ItemListClient({ items }: { items: Item[] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} (Created: {new Date(item.createdAt).toLocaleDateString()})
        </li>
      ))}
    </ul>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-89',
    title: 'How does Next.js optimize and bundle CSS (CSS Modules vs global CSS vs CSS-in-JS), and how does it prevent style layout shifts?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['CSS', 'Styling', 'CSS Modules', 'Performance', 'CLS'],
    enAnswer: 'Next.js optimizes CSS by splitting CSS Modules into page-specific chunks loaded alongside page chunks. Global CSS is restricted to layouts to prevent unintended inheritance. It minimizes Cumulative Layout Shift (CLS) by pre-injecting critical styles during SSR.',
    bnAnswer: 'Next.js সিএসএস অপ্টিমাইজ করতে CSS Modules-কে পেজ-নির্দিষ্ট চাংকে বিভক্ত করে পেজের সাথে সাথে লোড করায়। গ্লোবাল সিএসএস শুধুমাত্র লেআউটে সীমাবদ্ধ থাকে। এটি SSR-এর সময় ক্রিটিক্যাল সিএসএস আগে ইনজেক্ট করে CLS প্রতিরোধ করে।',
    enExplanation: `### Explanation
Next.js supports multiple styling paradigms, each compiled differently:

1. **CSS Modules (\`*.module.css\` )**:
   - Scope-limited. Next.js compiles class names into hashed, unique identifiers (e.g., \`.title_a8f9\`).
   - Automatically code-split: Only the CSS modules required for the rendered page are loaded in the browser, minimizing CSS payload sizes.

2. **Global CSS**:
   - App-wide styles. Must be imported inside \`layout.tsx\` (App Router) or \`_app.tsx\` (Pages Router).
   - Bundled into a single shared CSS file to avoid layout jumps on page navigation.

3. **Critical CSS Pre-injection**:
   - During server-side rendering, Next.js identifies and directly embeds the necessary styles into the HTML head, ensuring pages display styled content immediately to prevent style-based layout shifts.

### Real-World Example
If your site has a landing page and a dashboard:
- The dashboard uses a heavy charts grid CSS file.
- Using CSS Modules, the landing page user never downloads the dashboard's stylesheet. This improves PageSpeed metrics dramatically compared to standard monolithic stylesheets.

### Best Practice
Use CSS Modules or Tailwind CSS for component styling to take advantage of Next.js automatic chunking and code splitting. If using CSS-in-JS (like styled-components), configure the registry context compiler properly to prevent flash of unstyled content (FOUC).

### Common Mistakes
Importing CSS Modules inside global stylesheets or trying to import a global \`.css\` file inside arbitrary Server Components (only CSS modules can be imported anywhere).

### Code Example
\`\`\`typescript
// app/components/Card.module.css
.card {
  padding: 20px;
  border-radius: 8px;
  background-color: var(--card-bg);
}

// app/components/Card.tsx
import styles from './Card.module.css';

export default function Card({ children }: { children: React.ReactNode }) {
  // Styles are injected and scoped uniquely
  return <div className={styles.card}>{children}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস সিএসএস বান্ডেল ও অপ্টিমাইজ করার জন্য নির্দিষ্ট কিছু মেকানিজম মেনে চলে:

১. **CSS Modules (\`*.module.css\`)**:
   - লোকাল স্কোপ তৈরি করে। ইউনিক হ্যাশ আইডি (যেমন \`.button_x8y9\`) জেনারেট করায় একই নামের ক্লাস নেম অন্য কোনো ফাইলে কনফ্লিক্ট তৈরি করে না।
   - কোড-স্প্লিটিং সাপোর্ট করে। পেজ লোড হওয়ার সময় শুধুমাত্র সেই পেজের সিএসএস লোড হয়।

২. **গ্লোবাল সিএসএস (Global CSS)**:
   - পুরো সাইটের জন্য কমন ডিজাইন স্টাইল। এটি শুধুমাত্র \`layout.tsx\` ফাইলেই ইম্পোর্ট করা যাবে।

৩. **FOUC এবং CLS প্রতিরোধ**:
   - সার্ভার রেন্ডারিংয়ের সময় নেক্সট জেএস ক্রিটিক্যাল সিএসএসগুলোকে সরাসরি HTML-এর হেডার ট্যাগে ইনজেক্ট করে পাঠায়, ফলে ব্রাউজারে র-টেক্সট ফ্ল্যাশ হওয়া বা লেআউট পরিবর্তন হওয়া রোধ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটের হোমপেজ খুব হালকা সিএসএস ব্যবহার করে কিন্তু ইউজার প্রোফাইল সেকশন খুব ভারী সিএসএস ব্যবহার করে। সিএসএস মডিউল ব্যবহারের ফলে হোমপেজ ভিজিটরকে ফালতু সেই প্রোফাইল পেজের সিএসএস ডাউনলোড করতে হবে না।

### উত্তম অনুশীলন
কম্পোনেন্ট লেভেলের ডিজাইনের জন্য সিএসএস মডিউল বা টেলউইন্ড সিএসএস ব্যবহার করুন। সিএসএস-ইন-জেএস (যেমন \`styled-components\`) ব্যবহার করলে মেমোরি ফ্লাশিং এড়াতে এর রেজিস্ট্রি প্রোভাইডার কনফিগার করুন।

### সাধারণ ভুলসমূহ
যেকোনো সাধারণ নো-মডিউল সিএসএস ফাইল সরাসরি মাঝখানের কোনো কম্পোনেন্টে ইম্পোর্ট করতে চাওয়া, যা নেক্সট জেএস বিল্ড টাইমেই এরর দেখাবে।

### কোড উদাহরণ
\`\`\`typescript
// app/components/Card.module.css
.card {
  padding: 20px;
  border-radius: 8px;
  background-color: var(--card-bg);
}

// app/components/Card.tsx
import styles from './Card.module.css';

export default function Card({ children }: { children: React.ReactNode }) {
  // ক্লাস নেমটি ইউনিকলি প্রজেক্ট হবে
  return <div className={styles.card}>{children}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-90',
    title: 'Explain the different script strategies in next/script and how they optimize Web Vitals like INP and TBT.',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Script', 'Web Vitals', 'Performance', 'next/script', 'Third-party Integration'],
    enAnswer: 'The next/script component optimizes third-party script loading. It provides strategies: beforeInteractive loads before hydration, afterInteractive (default) loads after hydration, lazyOnload loads during idle times, and worker executes inside a Web Worker to offload the main thread.',
    bnAnswer: 'next/script কম্পোনেন্ট থার্ড-পার্টি স্ক্রিপ্ট লোডিং অপ্টিমাইজ করে। এর স্ট্র্যাটেজিগুলো হলো: beforeInteractive (হাইড্রেশনের আগে লোড হয়), afterInteractive (হাইড্রেশনের পরে লোড হয়), lazyOnload (সার্ভার অলস সময়ে লোড হয়) এবং worker (ওয়েব ওয়ার্কারের মাধ্যমে ব্যাকগ্রাউন্ডে চলে)।',
    enExplanation: `### Explanation
Loading heavy third-party scripts (like Google Analytics, chat widgets, ads) can block the browser's main thread, hurting performance:
- **TBT (Total Blocking Time)**: Measures main thread blockages.
- **INP (Interaction to Next Paint)**: Measures page responsiveness during load.

\`next/script\` strategies let you schedule script execution:
1. **\`beforeInteractive\`**: Loaded before any Next.js code is injected. Use only for critical bootstrap files (e.g., security bot protection).
2. **\`afterInteractive\` (Default)**: Loaded after hydration. Perfect for analytics tags.
3. **\`lazyOnload\`**: Defer script downloading until browser idle time. Perfect for support chat widgets.
4. **\`worker\` (Experimental)**: Runs inside a Web Worker via Partytown. Offloads all CPU work from the browser main thread.

### Real-World Example
If your site has a Facebook Pixel and a Zendesk Chat Widget:
- Placing them inside raw \`<script>\` tags blocks hydration, causing a high TBT of 1.2s.
- Moving Facebook Pixel to \`afterInteractive\` and Zendesk to \`lazyOnload\` prevents initial thread blockages, lowering TBT to <100ms.

### Best Practice
Use \`lazyOnload\` for any non-critical script that the user does not need immediately to maximize TBT and Lighthouse scores. Only use \`beforeInteractive\` if the script must run before client-side hydration begins.

### Common Mistakes
Setting \`beforeInteractive\` for non-essential scripts, which blocks the browser from displaying interactive page elements, reducing your INP scores.

### Code Example
\`\`\`typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        
        {/* Google Analytics - Load after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />

        {/* Customer Support Chat Widget - Defer until browser is idle */}
        <Script
          src="https://cdn.zendesk.com/embeddable_v6/main.js"
          strategy="lazyOnload"
          onLoad={() => console.log('Zendesk initialized')}
        />
      </body>
    </html>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
থার্ড-পার্টি স্ক্রিপ্ট (যেমন গুগল ট্যাগ ম্যানেজার, লাইভ চ্যাট) ব্রাউজারের মেইন থ্রেড ব্লক করে ফেলে, যা সাইটের পারফরম্যান্স স্লো করে:
- **TBT (Total Blocking Time)**: মেইন থ্রেড কতক্ষণ লক হয়ে আছে তা পরিমাপ করে।
- **INP (Interaction to Next Paint)**: ইউজার ইন্টারঅ্যাকশনের পর পেজের রেসপন্স স্পিড পরিমাপ করে।

\`next/script\` ব্যবহারের স্ট্র্যাটেজি সমূহ:
১. **\`beforeInteractive\`**: নেক্সট জেএস স্ক্রিপ্টের আগে রান হয়। সিকিউরিটি বা বট প্রোটেকশনের জন্য এটি দরকার।
২. **\`afterInteractive\` (ডিফল্ট)**: পেজ হাইড্রেশনের ঠিক পরে স্ক্রিপ্ট রান করে। অ্যানালিটিক্স স্ক্রিপ্টের জন্য উপযুক্ত।
৩. **\`lazyOnload\`**: ব্রাউজার অলস বা ফ্রি টাইমে থাকলে স্ক্রিপ্ট ডাউনলোড শুরু হয়। চ্যাট উইজেটের জন্য দারুণ।
৪. **\`worker\`**: পার্টটাউন (Partytown) লাইব্রেরি দিয়ে ওয়েব ওয়ার্কারের ভেতর ব্যাকগ্রাউন্ডে স্ক্রিপ্ট চালায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটে ফেসবুক পিক্সেল এবং জেনডেস্ক চ্যাট বক্স লোড হচ্ছে। চ্যাট বক্সটি ফার্স্ট পেইজে জরুরি নয়, তাই এটিকে \`lazyOnload\` দিলে হোমপেজটি ২ সেকেন্ডের জায়গায় মাত্র ৫০০ মিলি-সেকেন্ডে ফুললি লোড হয়ে যাবে।

### উত্তম অনুশীলন
যতটা সম্ভব নন-ক্রিটিক্যাল স্ক্রিপ্টগুলোকে \`lazyOnload\` দিয়ে লোড করান। এটি মেইন থ্রেডকে ফ্রী রেখে টিবিটি (TBT) স্কোর বাড়াতে সাহায্য করে।

### সাধারণ ভুলসমূহ
ইনস্ট্যান্ট লোড হওয়ার দরকার নেই এমন চ্যাট স্ক্রিপ্টকেও \`beforeInteractive\` দিয়ে রাখা, যার ফলে ইউজার বাটনে ক্লিক করার আগেই পেজ হ্যাং হয়ে থাকে।

### কোড উদাহরণ
\`\`\`typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        
        {/* গুগল অ্যানালিটিক্স - পেজ ইন্টারেক্টিভ হওয়ার পর লোড হবে */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />

        {/* কাস্টমার চ্যাট স্ক্রিপ্ট - ব্রাউজার ফ্রি হওয়ার পর লোড হবে */}
        <Script
          src="https://cdn.zendesk.com/embeddable_v6/main.js"
          strategy="lazyOnload"
          onLoad={() => console.log('Zendesk initialized')}
        />
      </body>
    </html>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-91',
    title: 'How do you implement dynamic SEO metadata, Open Graph tags, sitemaps, and robots.txt using the Metadata API in Next.js App Router?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['SEO', 'Metadata', 'Open Graph', 'Sitemap', 'Robots.txt'],
    enAnswer: 'The Metadata API in App Router replaces head.js. For static pages, export a static metadata object. For dynamic pages, export a generateMetadata function. Sitemaps and robots.txt are created dynamically by creating sitemap.ts and robots.ts in the root of the app folder.',
    bnAnswer: 'অ্যাপ রাউটারে মেটাডাটা এপিআই head.js-কে প্রতিস্থাপন করেছে। স্ট্যাটিক পেজের জন্য static metadata অবজেক্ট এবং ডাইনামিক পেজের জন্য generateMetadata ফাংশন এক্সপোর্ট করতে হয়। sitemap.ts ও robots.ts ফাইল তৈরি করে ডাইনামিক সায়টম্যাপ ও রোবটস ডিক্লেয়ার করা যায়।',
    enExplanation: `### Explanation
Next.js features a built-in Metadata API that handles parsing head elements for SEO:

1. **Static Metadata**:
   - Export a constant named \`metadata\` of type \`Metadata\`.

2. **Dynamic Metadata**:
   - Export an \`async\` function named \`generateMetadata(props)\` to read parameters and fetch external databases.
   - Next.js automatically dedupes data fetch calls inside layout/page renders and \`generateMetadata\`.

3. **Special Files**:
   - \`sitemap.ts\`: Generates sitemap XML dynamically by exporting a default function returning an array of URLs.
   - \`robots.ts\`: Generates \`robots.txt\` rules dynamically.

### Real-World Example
For a blog detail page:
- When a web spider visits \`/posts/123\`, Next.js executes \`generateMetadata\` for ID 123.
- It queries the post from your database and dynamically injects the title, description, and Open Graph image URLs into the HTML header.

### Best Practice
Set up a \`metadataBase\` inside your root layout metadata configuration to resolve relative paths for Open Graph images automatically across the site.

### Common Mistakes
Trying to write \`<head>\` tags manually inside Server Components or layouts, which bypasses the Next.js Metadata lifecycle and causes warning overlays.

### Code Example
\`\`\`typescript
// app/posts/[slug]/page.tsx
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// Dynamic Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`).then(res => res.json());
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function Page({ params }: Props) {
  return <article>Post contents...</article>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস অ্যাপ রাউটারে এসইও ট্যাগ ও মেটাডাটা প্রসেস করার জন্য মেটাডাটা এপিআই যুক্ত করা হয়েছে:

১. **স্ট্যাটিক মেটাডাটা**:
   - পেজ ফাইলে সরাসরি \`export const metadata\` অবজেক্ট ডিক্লেয়ার করা হয়।

২. **ডাইনামিক মেটাডাটা**:
   - \`generateMetadata\` নামক এসিনক্রোনাস ফাংশন এক্সপোর্ট করে ডাইনামিক ডাটাবেজ থেকে এপিআই ডাটা তুলে মেটা অবজেক্ট রিটার্ন করা হয়।

৩. **স্পেশাল ফাইলস**:
   - \`sitemap.ts\` এবং \`robots.ts\` ফাইল তৈরি করে ডাইনামিক সায়টম্যাপ ও রোবটস রুলস জেনারেট করা সম্ভব।

### বাস্তব-ভিত্তিক উদাহরণ
একটি অনলাইন নিউজ পোর্টালে ইউজার যখন কোনো খবর পড়তে যাবেন, সার্চ ইঞ্জিন বটের স্ক্র্যাপার পেজের মেটাডাটা দেখবে। \`generateMetadata\` কোডটি নিউজ ডাটাবেজ থেকে সংবাদের টাইটেল ও কভার ইমেজ নিয়ে ওজি (OG) ইমেজ সেট করবে যাতে ফেসবুকে শেয়ার করলে সুন্দর প্রিভিউ দেখায়।

### উত্তম অনুশীলন
রুট লেআউটের মেটাডাটাতে একটি \`metadataBase\` (যেমন \`https://example.com\`) সেট করে দিন। এটি রিলেটিভ ওজি পাথগুলোকে ফুল কোয়ালিফাইড ডোমেইন ইউআরএল-এ কনভার্ট করে।

### সাধারণ ভুলসমূহ
সার্ভার কম্পোনেন্টের ভেতর ম্যানুয়ালি \`<head>\` বা \`<meta>\` ট্যাগ ইনজেক্ট করার চেষ্টা করা, যা মেটাডাটা এপিআই-এর সাথে কনফ্লিক্ট তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript
// app/posts/[slug]/page.tsx
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// ডাইনামিক মেটাডাটা তৈরি
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`).then(res => res.json());
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function Page({ params }: Props) {
  return <article>Post contents...</article>;
}
\`\`\``
  },
  {
    id: 'nextjs-92',
    title: 'What features are supported and unsupported when using static exports (output: "export") in Next.js App Router?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Static Export', 'SSG', 'next config', 'Deployment', 'Limitations'],
    enAnswer: 'Static exports (output: "export") generate pure HTML/CSS/JS files that can be hosted on static hosts like S3 or GitHub Pages. Supported features include dynamic routing via generateStaticParams. Unsupported features include Server Actions, Route Handlers (except GET), and dynamic SSR functions.',
    bnAnswer: 'স্ট্যাটিক এক্সপোর্ট (output: "export") বিশুদ্ধ HTML/CSS/JS ফাইল জেনারেট করে যা S3 বা GitHub Pages-এ হোস্ট করা যায়। এতে generateStaticParams-এর সাহায্যে ডাইনামিক রাউট করা যায়। তবে সার্ভার অ্যাকশন, রুট হ্যান্ডলার (GET ব্যতীত) এবং ডাইনামিক SSR ফাংশন এতে কাজ করে না।',
    enExplanation: `### Explanation
Setting \`output: 'export'\` in \`next.config.js\` compiles your app down into a \`out\` folder containing raw web assets:

**Supported Features**:
- Static Site Generation (SSG).
- Client-side navigation & Route prefetching.
- Dynamic route mapping using \`generateStaticParams\`.
- CSS Modules & static images.

**Unsupported Features (Requires a Node/Edge Server)**:
- Server Actions & form submission handling using \`action\` attributes.
- Non-GET Route Handlers (POST, DELETE, PUT).
- Dynamic server methods: \`cookies()\`, \`headers()\`, \`searchParams\` (on page files without client wrappers).
- ISR (Incremental Static Regeneration) on-demand revalidation.
- Default next/image optimization endpoint (requires custom loader).

### Real-World Example
If you are deploying a personal static portfolio site to GitHub Pages:
- Exporting static assets is ideal.
- However, if you add a contact form that calls a Server Action to send email directly from Node.js, the build will fail. You must redirect contact actions to a third-party serverless API.

### Best Practice
When using static exports, configure a custom image loader in \`next.config.js\` or use services like Imgix. By default, \`next/image\` will throw an error during build because it tries to use the default server-side dynamic optimizer.

### Common Mistakes
Enabling \`output: 'export'\` and expecting dynamic search parameters (\`searchParams\`) to evaluate on the server side at request time. All pages are compiled statically at build time.

### Code Example
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable default server-side image optimization for static exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
next.config.js ফাইলে \`output: 'export'\` অন করলে পুরো অ্যাপ্লিকেশনটি সিএসএস, জেএস ও এইচটিএমএল-এ রূপান্তরিত হয়ে \`out\` ফোল্ডারে বিল্ড হয়:

**সমর্থিত বৈশিষ্ট্যসমূহ**:
- স্ট্যাটিক সাইট জেনারেশন (SSG)।
- ক্লায়েন্ট-সাইড নেভিগেশন ও রাউট প্রি-ফেচিং।
- \`generateStaticParams\` দিয়ে ডাইনামিক রুট প্রি-রেন্ডার করা।

**অসমর্থিত বৈশিষ্ট্যসমূহ (যার জন্য নোড সার্ভার দরকার)**:
- সার্ভার অ্যাকশন (Server Actions)।
- GET ছাড়া অন্যান্য রুট হ্যান্ডলার (POST, DELETE)।
- রানটাইম সার্ভার মেথড যেমন \`cookies()\`, \`headers()\`।
- ইনক্রিমেন্টাল স্ট্যাটিক রিভ্যালিডেশন (ISR) বা অন-ডিমান্ড রিভ্যালিড।
- ডিফল্ট ইমেজ অপ্টিমাইজার এপিআই।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি যদি আপনার সাইটটি গিটহাব পেজেস বা নেটলিফাই-তে হোস্ট করতে চান, তবে স্ট্যাটিক এক্সপোর্ট খুবই কার্যকরী। কিন্তু সাইটে যদি কোনো ইমেইল সেন্ডিং ফর্ম বা পেমেন্ট গেটওয়ে থাকে যা সার্ভার সাইডে রান করতে হয়, তবে এই বিল্ড কাজ করবে না।

### উত্তম অনুশীলন
স্ট্যাটিক এক্সপোর্ট ব্যবহার করলে \`next.config.js\` ফাইলে \`images.unoptimized = true\` করে দিন, নতুবা নেক্সট ইমেজ অপ্টিমাইজারের কারণে বিল্ড ফেইল করবে।

### সাধারণ ভুলসমূহ
স্ট্যাটিক এক্সপোর্টে পেজগুলোর ডাটা রানটাইমে রি-রেন্ডার হবে এমনটি প্রত্যাশা করা। পেজের ডাটা বিল্ড হওয়ার সময় যা ছিল, সারা জীবন তাই থেকে যাবে।

### কোড উদাহরণ
\`\`\`javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // স্ট্যাটিক এক্সপোর্টের জন্য ইমেজ অপ্টিমাইজেশন বন্ধ করা হলো
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
\`\`\``
  },
  {
    id: 'nextjs-93',
    title: 'How do you implement Draft Mode in Next.js App Router to securely preview unpublished content from a CMS?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Draft Mode', 'Preview Mode', 'CMS', 'Cookies', 'Security'],
    enAnswer: 'Draft Mode allows previewing unpublished content dynamically. It is enabled using draftMode().enable(), which sets a secure cookie on the browser. Next.js bypasses the Full Route Cache for routes with this cookie, rendering pages dynamically from the CMS draft API.',
    bnAnswer: 'ড্রাফট মোড (Draft Mode) ড্রাফট বা অপ্রকাশিত কনটেন্ট প্রিভিউ করার সুবিধা দেয়। draftMode().enable() কল করলে ব্রাউজারে একটি সিকিউর কুকি সেট হয়। কুকিটি থাকলে নেক্সট জেএস ফুল রুট ক্যাশ বাইপাস করে সরাসরি CMS ড্রাফট এপিআই থেকে পেজ ডাইনামিক্যালি রেন্ডার করে।',
    enExplanation: `### Explanation
Draft Mode is crucial when integrating Headless CMS platforms (like Contentful, Sanity, or Strapi):
- **Mechanism**:
  - A Route Handler (e.g., \`/api/draft\`) acts as the preview entry point. It verifies a secure token sent by the CMS.
  - Upon verification, it invokes \`draftMode().enable()\`.
  - Next.js issues a signed bypass cookie: \`__prerender_bypass\`.
- **Dynamic Bypass**:
  - When the browser requests any static page while this cookie is present, the server bypasses the Full Route Cache and executes database queries dynamically, fetching draft items.
  - You disable it by writing a handler that invokes \`draftMode().disable()\`.

### Real-World Example
A content writer edits a blog post in Sanity and clicks "Preview". Sanity opens your Next.js preview endpoint with a secure hash. The endpoint validates the hash, turns on Draft Mode, and redirects the writer to the blog page, displaying the unpublished content safely.

### Best Practice
Always run preview endpoints via HTTPS in production. Keep the verification token secret using environment variables to prevent random web scrapers from bypassing your static route caches.

### Common Mistakes
Forgetting that \`draftMode().enable()\` operates on the response headers. You must call it inside a Route Handler or Server Action, not inside standard Server Components directly during rendering.

### Code Example
\`\`\`typescript
// app/api/draft/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  // 1. Verify token
  if (secret !== process.env.CMS_PREVIEW_SECRET || !slug) {
    return new Response('Invalid preview token', { status: 401 });
  }

  // 2. Enable Draft Mode cookie
  draftMode().enable();

  // 3. Redirect to destination path
  redirect(\`/posts/\${slug}\`);
}

// app/posts/[slug]/page.tsx
import { draftMode } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  
  // Fetch either draft or published content based on draft mode status
  const url = isEnabled 
    ? \`https://api.example.com/posts/draft/\${params.slug}\`
    : \`https://api.example.com/posts/published/\${params.slug}\`;
    
  const post = await fetch(url).then(res => res.json());

  return (
    <div>
      {isEnabled && <div className="banner">Preview Draft Mode Active</div>}
      <h1>{post.title}</h1>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ড্রাফট মোড মূলত অপ্রকাশিত ফাইল বা ড্রাফট কন্টেন্ট সরাসরি লাইভ সাইটের ইন্টারফেসে প্রিভিউ করতে ব্যবহার করা হয়:
- **কাজের নিয়ম**:
  - একটি প্রিভিউ রুট হ্যান্ডলার তৈরি করা হয় (যেমন \`/api/draft\`) যা CMS এর সিক্রেট টোকেন চেক করে।
  - ভেরিফাই হওয়ার পর এটি \`draftMode().enable()\` মেথড এক্সিকিউট করে।
  - নেক্সট জেএস ব্রাউজারে একটি এনক্রিপ্টেড বাইপাস কুকি সেট করে।
  - কুকিটি অ্যাক্টিভ থাকলে স্ট্যাটিক ক্যাশ বাইপাস করে সরাসরি রিয়েল-টাইম ড্রাফট ডাটা এপিআই কল সম্পন্ন হয়।
  - প্রিভিউ সেশন ক্লোজ করতে \`draftMode().disable()\` কল করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
কনটেন্ট রাইটার যখন কোনো ব্লগ পেজ এডিট করে "প্রিভিউ" বাটনে চাপেন, তখন CMS নেক্সট জেএস-এর প্রিভিউ এপিআই ট্রিগার করে। এপিআই কুকি সেট করে রাইটারকে মূল ব্লগ পেজে রিডাইরেক্ট করে দেয়, যেখানে তিনি ড্রাফট আর্টিকেলের লেআউট দেখতে পান।

### উত্তম অনুশীলন
ভেরিফিকেশন টোকেন বা প্রজেক্ট সিক্রেট কী সবসময় ডট-ইনভ (\`.env\`) ফাইলে রাখুন যাতে বাইরের কোনো স্ক্রিপ্ট আপনার ডাইনামিক এপিআই ব্লক না করতে পারে।

### সাধারণ ভুলসমূহ
সার্ভার কম্পোনেন্ট রেন্ডারিং ফাইলগুলোর ভেতর সরাসরি \`draftMode().enable()\` কল করতে চাওয়া। এটি শুধুমাত্র রুট হ্যান্ডলার বা সার্ভার অ্যাকশনের মাধ্যমে কল করতে হবে।

### কোড উদাহরণ
\`\`\`typescript
// app/api/draft/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  // ১. টোকেন ভেরিফাই করা হচ্ছে
  if (secret !== process.env.CMS_PREVIEW_SECRET || !slug) {
    return new Response('Invalid preview token', { status: 401 });
  }

  // ২. ড্রাফট মোড এনাবল করা
  draftMode().enable();

  // ৩. পোস্ট রিডাইরেক্ট
  redirect(\`/posts/\${slug}\`);
}

// app/posts/[slug]/page.tsx
import { draftMode } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  
  // ড্রাফট মোড একটিভ কি না তার ওপর ডাটা ফেচিং নির্ধারণ
  const url = isEnabled 
    ? \`https://api.example.com/posts/draft/\${params.slug}\`
    : \`https://api.example.com/posts/published/\${params.slug}\`;
    
  const post = await fetch(url).then(res => res.json());

  return (
    <div>
      {isEnabled && <div className="banner">Preview Draft Mode Active</div>}
      <h1>{post.title}</h1>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-94',
    title: 'How do you use the useOptimistic hook with Server Actions to improve perceived UI responsiveness?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['React Hooks', 'Server Actions', 'useOptimistic', 'UX', 'Optimistic UI'],
    enAnswer: 'The useOptimistic hook lets you update the UI immediately with an expected outcome while a Server Action runs in the background. If the action succeeds, the UI updates with the actual server state; if it fails, the hook automatically rolls back the changes.',
    bnAnswer: 'useOptimistic হুক সার্ভার অ্যাকশন ব্যাকগ্রাউন্ডে চলাকালীন পেজের ইউআই-তে তাৎক্ষণিকভাবে প্রত্যাশিত ফলাফল দেখানোর সুবিধা দেয়। অ্যাকশন সফল হলে ইউআই সার্ভার স্টেট দিয়ে আপডেট হয় এবং এরর হলে এটি স্বয়ংক্রিয়ভাবে আগের অবস্থায় রোলব্যাক করে।',
    enExplanation: `### Explanation
Optimistic UI updates improve UX by making actions feel instantaneous.
- **useOptimistic Signature**:
  \`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)\`.
- **Flow**:
  1. The user triggers an interaction (e.g., clicking Like).
  2. The form onSubmit/action calls \`addOptimistic(newValue)\`.
  3. React immediately re-renders the component with the optimistic value, bypassing server latency.
  4. The actual Server Action runs.
  5. Once the server confirms the update, the state resolves to the actual value. If the server fails (throws an error), React restores the original state automatically.

### Real-World Example
In a messaging app like Slack:
- Clicking "Send Message" inserts the message into the chat immediately with a grayed-out status.
- Once the database write succeeds, the message turns to normal text.
- If the network drops, the message is marked as failed or disappears.

### Best Practice
Ensure the optimistic helper function (\`updateFn\`) is pure. Try to mirror the exact structure of the server response in your optimistic update model.

### Common Mistakes
Forgetting that \`useOptimistic\` only works inside Client Components since it manages local client state updates.

### Code Example
\`\`\`typescript
// app/components/LikeButton.tsx
'use client';

import { useOptimistic, startTransition } from 'react';
import { toggleLike } from '../actions';

export default function LikeButton({ initialLikes, postId }: { initialLikes: number, postId: string }) {
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    initialLikes,
    (state, newLikeCount: number) => newLikeCount
  );

  return (
    <form
      action={async () => {
        // Run inside React Transition context
        startTransition(() => {
          addOptimisticLikes(optimisticLikes + 1);
        });
        
        try {
          await toggleLike(postId);
        } catch (err) {
          console.error("Failed to like post", err);
          // React automatically reverts state if action fails
        }
      }}
    >
      <button type="submit">
        ❤️ Likes: {optimisticLikes}
      </button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অপ্টিমিস্টিক ইউআই (Optimistic UI) ইউজারের অ্যাক্টিভিটি রেসপন্স ফাস্ট করে তুলতে ব্যবহৃত হয়:
- **useOptimistic সিগনেচার**: \`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)\`।
- **কাজের ধাপ**:
  ১. ইউজার লাইক বা সাবমিট বাটনে প্রেস করেন।
  ২. অ্যাকশন কোডের শুরুর সাথে সাথেই \`addOptimistic\` মেথড ট্রিগার হয়।
  ৩. রিঅ্যাক্ট সার্ভার থেকে কনফার্মেশন পাওয়ার আগেই ইন্টারফেস আপডেট করে দেয়।
  ৪. ব্যাকগ্রাউন্ডে সার্ভার প্রসেস কমপ্লিট হয়।
  ৫. এপিআই ফেইল করলে পূর্বের ভ্যালুতে স্টেট রোলব্যাক বা রিভার্ট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
মেসেজিং অ্যাপে (যেমন WhatsApp বা Slack) ইউজার সেন্ড বাটনে ক্লিক করলে রিকোয়েস্ট পেন্ডিং থাকা অবস্থাতেই চ্যাট বক্সে মেসেজ চলে আসে। যদি রিকোয়েস্ট ফেইল হয়, মেসেজের পাশে লাল বিস্ময়চিহ্ন দেখায়।

### উত্তম অনুশীলন
অপ্টিমিস্টিক আপডেটগুলো রিঅ্যাক্ট ট্রানজিশন (\`startTransition\`) কন্টেক্সটের ভেতর পরিচালনা করুন যাতে পেজের অন্যান্য প্রসেসগুলো ব্যাহত না হয়।

### সাধারণ ভুলসমূহ
সার্ভার অ্যাকশন ক্র্যাশ করার পর এরর হ্যান্ডলিং ক্যাচ ব্লক সেট না করা। এর ফলে এরর সত্ত্বেও ইউআই পুরনো স্টেটে ব্যাক করে না।

### কোড উদাহরণ
\`\`\`typescript
// app/components/LikeButton.tsx
'use client';

import { useOptimistic, startTransition } from 'react';
import { toggleLike } from '../actions';

export default function LikeButton({ initialLikes, postId }: { initialLikes: number, postId: string }) {
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    initialLikes,
    (state, newLikeCount: number) => newLikeCount
  );

  return (
    <form
      action={async () => {
        // ট্রানজিশন স্কোপে ভ্যালু অ্যাড করা হচ্ছে
        startTransition(() => {
          addOptimisticLikes(optimisticLikes + 1);
        });
        
        try {
          await toggleLike(postId);
        } catch (err) {
          console.error("Failed to like post", err);
          // ফেইল হলে রিঅ্যাক্ট অটোমেটিক আগের ভ্যালুতে ফিরে যাবে
        }
      }}
    >
      <button type="submit">
        ❤️ Likes: {optimisticLikes}
      </button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-95',
    title: 'How does streaming work with Suspense in Next.js App Router, and how does it optimize TTFB and TTI?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Streaming', 'Suspense', 'TTFB', 'TI', 'Loading States'],
    enAnswer: 'Streaming splits the HTML payload into chunks and sends them to the client progressively using React Suspense. This optimizes Time to First Byte (TTFB) by sending static layouts immediately, and optimizes Time to Interactive (TTI) by hydrating pages section-by-section.',
    bnAnswer: 'স্ট্রিমিং (Streaming) এইচটিএমএল পে-লোডকে ছোট চাংকে বিভক্ত করে প্রগতিশীলভাবে ব্রাউজারে পাঠায়। এটি স্ট্যাটিক লেআউট সঙ্গে সঙ্গে পাঠিয়ে TTFB উন্নত করে এবং পেজ সেকশন অনুযায়ী হাইড্রেট করে TTI অপ্টিমাইজ করে।',
    enExplanation: `### Explanation
In traditional SSR, the server must wait for all database queries to resolve before it can return any HTML. This leads to slow responses.
- **TTFB (Time to First Byte)**: The time it takes for the browser to receive the first byte of response.
- **TTI (Time to Interactive)**: The time it takes for the page to become fully interactive.

**Streaming & Suspense**:
- Next.js streams the page. Layouts and static shells are sent first.
- Slow-loading components wrapped in React \`<Suspense fallback={<Loader />}>\` are excluded from the initial payload. The server sends a loading skeleton instead.
- The server continues fetching data in the background. Once resolved, the HTML for that component is sent over the same HTTP connection, replacing the loading skeleton.

### Real-World Example
A dashboard page contains a header shell, a fast user profile fetch, and a very slow analytics graph. Wrapping only the analytics graph in Suspense ensures the user sees the header and profile details within 200ms (fast TTFB), instead of waiting 5 seconds for the entire page.

### Best Practice
Wrap separate widgets in their own Suspense boundaries rather than wrapping the entire page. This enables progressive loading where fast widgets display immediately without waiting for slow ones.

### Common Mistakes
Forgetting to wrap dynamic Server Components in Suspense when fetching data inside them, which locks the page rendering and causes the entire layout to wait for the slowest query.

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { Suspense } from 'react';
import UserProfile from './UserProfile';
import SlowAnalytics from './SlowAnalytics';
import SkeletonLoader from './SkeletonLoader';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Header</h1>
      
      {/* Renders instantly alongside layout */}
      <UserProfile />
      
      {/* Streams in later once server fetch finishes */}
      <Suspense fallback={<SkeletonLoader />}>
        <SlowAnalytics />
      </Suspense>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ট্রেডিশনাল এসএসআর (SSR) পদ্ধতিতে ডাটাবেজের সমস্ত কোয়েরি সলভ না হওয়া পর্যন্ত সার্ভার ব্রাউজারে কোনো এইচটিএমএল (HTML) পাঠাতে পারে না:
- **TTFB (Time to First Byte)**: সার্ভার থেকে ব্রাউজারে প্রথম বাইট পৌঁছানোর সময়।
- **TTI (Time to Interactive)**: পেজটি ফুললি ইন্টারেক্টিভ বা ওয়ার্কিং স্টেটে আসার সময়।

**স্ট্রিমিং এবং সাসপেন্স**:
- নেক্সট জেএস পেজটিকে খণ্ডে খণ্ডে বিভক্ত করে স্ট্রিম আকারে পাঠায়।
- ডাইনামিক কম্পোনেন্টগুলোকে \`<Suspense fallback={<Loader />}>\` দিয়ে ঘিরে দিলে সার্ভার লোডার রেডি করে হেডার ও ন্যাভিগেশন পেজটি সাথে সাথে ব্রাউজারে পাঠিয়ে দেয় (যার ফলে TTFB বৃদ্ধি পায়)।
- ব্যাকগ্রাউন্ডে কোয়েরি শেষ হলে সার্ভার রিঅ্যাক্ট কানেকশনের মাধ্যমে ডাটা রিলোড করে লোডিং স্ক্রিন রিপ্লেস করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ড পেজের সাধারণ হেডার ও ইউজার ডিটেইলস ছাড়াও একটি বড় এনালাইটিক্স চার্ট লোড হয় যা ডাটাবেজ থেকে ডাটা তুলতে ৫ সেকেন্ড সময় নেয়। চার্টটিকে সাসপেন্স বর্ডারে লক করে দিলে ইউজার ফাস্ট ২০০ মিলি-সেকেন্ডের মধ্যে ড্যাশবোর্ডের সাইডবার দেখতে পারবেন।

### উত্তম অনুশীলন
সম্পূর্ণ পেজে একটিমাত্র বড় সাসপেন্স দেয়ার চেয়ে জটিল পার্টগুলোর জন্য আলাদা আলাদা সাসপেন্স বাউন্ডারি ব্যবহার করুন। এটি একের পর এক উইজেট লোড হতে সাহায্য করে।

### সাধারণ ভুলসমূহ
ডাটা ফেচ করা কোনো বড় ডাইনামিক কম্পোনেন্টকে সাসপেন্সে র্যাপ না করা, যার কারণে পুরো লেআউটের রেন্ডারিং প্রসেস স্লো হয়ে যায়।

### কোড উদাহরণ
\`\`\`typescript
// app/dashboard/page.tsx
import { Suspense } from 'react';
import UserProfile from './UserProfile';
import SlowAnalytics from './SlowAnalytics';
import SkeletonLoader from './SkeletonLoader';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Header</h1>
      
      {/* সাথে সাথে রেন্ডার হবে */}
      <UserProfile />
      
      {/* এপিআই প্রসেস শেষ হলে স্ক্রিন আপডেট হবে */}
      <Suspense fallback={<SkeletonLoader />}>
        <SlowAnalytics />
      </Suspense>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-96',
    title: 'How do you pre-render dynamic routes at build time in the App Router using generateStaticParams?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['generateStaticParams', 'Dynamic Routing', 'ISR', 'SSG', 'Routing'],
    enAnswer: 'The generateStaticParams function is used to pre-render dynamic routes at build time. It replaces getStaticPaths from the Pages Router, allowing you to define a list of parameter objects that Next.js will build statically.',
    bnAnswer: 'generateStaticParams ফাংশনটি বিল্ড টাইমে ডাইনামিক রাউটগুলোকে প্রি-রেন্ডার করতে ব্যবহৃত হয়। এটি পেজেস রাউটারের getStaticPaths-কে প্রতিস্থাপন করে এবং নেক্সট জেএস-কে স্ট্যাটিক বিল্ড জেনারেট করার জন্য প্যারামিটার লিস্ট প্রোভাইড করে।',
    enExplanation: `### Explanation
When building dynamic routes (e.g., \`/blog/[slug]\`), Next.js renders them on demand by default. To make them static:
- Define and export an \`async\` function named \`generateStaticParams()\`.
- Return an array of objects where keys match the dynamic parameters in the URL path.
- During build, Next.js generates static HTML pages for all the matched entries.
- For nested parameters (e.g., \`/products/[category]/[id]\`), you return nested properties in each parameter object.

### Real-World Example
For a company blog with 10 static help center guides:
- Instead of executing DB queries on the server whenever a customer reads a guide, you pre-render all 10 guides at build time.
- The pages are saved as static assets, serving customers instantly from Vercel edges.

### Best Practice
Combine \`generateStaticParams\` with tag revalidation to build static pages initially, but update them dynamically (ISR) using server webhooks when the CMS database changes.

### Common Mistakes
Returning array of strings instead of array of objects. Next.js expects param keys to be exact matches. For \`/posts/[id]\`, you must return \`[{ id: '1' }]\`, not \`['1']\`.

### Code Example
\`\`\`typescript
// app/products/[category]/[id]/page.tsx

interface Params {
  category: string;
  id: string;
}

// Generate combinations at build time
export async function generateStaticParams(): Promise<Params[]> {
  const products = await fetch('https://api.example.com/products').then(res => res.json());
  
  return products.map((product: any) => ({
    category: product.category,
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: Params }) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাইনামিক রুটগুলোকে (যেমন \`/blog/[slug]\`) ডিফল্টভাবে রিকোয়েস্ট আসার পর সার্ভারে প্রসেস করা হয়। এগুলো বিল্ডের সময় প্রাক-রেন্ডার করার মেথড:
- \`generateStaticParams()\` নামক এসিনক্রোনাস ফাংশন পেজে এক্সপোর্ট করতে হবে।
- এটি অবজেক্টের একটি অ্যারে রিটার্ন করে যার কী-সমূহ ইউআরএলের প্যারামিটারের সাথে হুবহু ম্যাচ করতে হবে।
- বিল্ড প্রসেসে নেক্সট জেএস প্রতি জোড়া প্যারামিটারের জন্য ডেডিকেটেড স্ট্যাটিক পেজ জেনারেট করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটে ২০টি জনপ্রিয় ল্যান্ডিং গাইড পেজ রয়েছে। এগুলোকে প্রি-রেন্ডার করে রাখলে ইউজার ক্লিক করা মাত্র চোখের পলকে পেজ লোড হবে কারণ ডেটাবেজ চেক করার জন্য সার্ভারে কোনো ট্রাফিক হ্যান্ডশেক হবে না।

### উত্তম অনুশীলন
প্যারাম জেনারেট করার সময় এপিআই রেসপন্স যেন স্ট্র্রিং হয় তা নিশ্চিত করুন। নেক্সট জেএস আইডি প্যারামিটার স্ট্রিং হিসেবে এক্সপেক্ট করে।

### সাধারণ ভুলসমূহ
প্যারামিটার ফোল্ডারের নাম ক্যাপিটাল বা স্মল কেইস উল্টাপাল্টা লেখা। যেমন রাউট ফোল্ডারের নাম \`[id]\` কিন্তু এক্সপোর্ট প্যারামিটারে কিউ সেট করেছেন \`{ ID: '1' }\` যা কাজ করবে না।

### কোড উদাহরণ
\`\`\`typescript
// app/products/[category]/[id]/page.tsx

interface Params {
  category: string;
  id: string;
}

// বিল্ড টাইমে প্রি-রেন্ডারিং অপশন
export async function generateStaticParams(): Promise<Params[]> {
  const products = await fetch('https://api.example.com/products').then(res => res.json());
  
  return products.map((product: any) => ({
    category: product.category,
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: Params }) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-97',
    title: 'How do Route Handlers in Next.js App Router work, and how do you control their caching behavior?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Route Handlers', 'API Routes', 'Caching', 'REST API', 'App Router'],
    enAnswer: 'Route Handlers let you create custom request handlers for a given route using the Web Request and Response APIs. GET requests are cached by default in the App Router. To prevent caching, make it dynamic by reading headers/cookies or exporting dynamic = "force-dynamic".',
    bnAnswer: 'রুট হ্যান্ডলারস (Route Handlers) ওয়েব রিকোয়েস্ট ও রেসপন্স এপিআই ব্যবহার করে কাস্টম এপিআই তৈরি করার সুবিধা দেয়। অ্যাপ রাউটারে GET রিকোয়েস্টগুলো ডিফল্টভাবে ক্যাশ হয়। ক্যাশিং বন্ধ করতে force-dynamic বা কুকিজ/হেডার্স চেক ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
Route Handlers are defined in \`route.ts\` (or \`route.js\`) files inside the app directory:
- They use standard Web API request methods: \`GET\`, \`POST\`, \`PUT\`, \`DELETE\`, \`PATCH\`, \`HEAD\`, \`OPTIONS\`.
- **Caching Mechanics**:
  - \`GET\` requests that do not access headers/cookies are evaluated at build time and cached by default.
  - Other methods (\`POST\`, \`DELETE\`) are never cached.
- **Opting out of caching**:
  1. Use the \`Request\` object directly (e.g., reading request params).
  2. Use dynamic methods like \`cookies()\` or \`headers()\`.
  3. Export \`export const dynamic = 'force-dynamic'\` at the file top.

### Real-World Example
If you build a weather API handler \`/api/weather\` that returns the current temperature, Next.js will build it statically. The temperature will remain frozen to the build time value forever. To fix this, you must export \`dynamic = 'force-dynamic'\` so it queries fresh weather details on every client search.

### Best Practice
For REST APIs that need real-time data or mutate database tables, always declare appropriate methods like POST/PATCH or opt out of caching explicitly to prevent clients from retrieving stale or cached data.

### Common Mistakes
Forgetting that route files cannot coexist with \`page.tsx\` in the same folder. A directory can contain either \`route.ts\` or \`page.tsx\`, not both.

### Code Example
\`\`\`typescript
// app/api/weather/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Prevent build-time caching

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City query parameter required' }, { status: 400 });
  }

  const res = await fetch(\`https://api.weather.com/v1/\${city}\`);
  const data = await res.json();

  return NextResponse.json(data);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রুট হ্যান্ডলারস এপিআই রাউট তৈরিতে ব্যবহৃত হয় এবং অ্যাপ ফোল্ডারে \`route.ts\` ফাইলের ভেতর লিখতে হয়:
- এগুলো স্ট্যান্ডার্ড ওয়েব রিকোয়েস্ট মেথড (যেমন \`GET\`, \`POST\`, \`DELETE\`) সাপোর্ট করে।
- **ক্যাশিং আচরণ**:
  - \`GET\` রিকোয়েস্টগুলো অটো ক্যাশ হয়ে যায় যদি না সেখানে কোনো রিকোয়েস্ট স্পেসিফিক মডিফায়ার রিড করা হয়।
  - অন্যান্য মেথড (\`POST\`, \`PUT\`) কখনই ক্যাশ হয় না।
- **ক্যাশ অফ করার নিয়ম**:
  - কুকি বা হেডার রিড করা অথবা ফাইলে \`export const dynamic = 'force-dynamic'\` লিখে ক্যাশ অফ করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি শেয়ার মার্কেটের লাইভ রেট দেখানোর এন্ডপয়েন্ট \`/api/stocks\` বানালেন। ডিফল্টভাবে এটি একবার ক্যাশ হয়ে লক হয়ে থাকবে। রিয়েল-টাইম ডাটা দেখাতে ফাইলটির ওপর \`force-dynamic\` ডিক্লেয়ার করে রাখতে হবে যাতে প্রতি রিকোয়েস্টে নতুন এপিআই সোর্স চেক হয়।

### উত্তম অনুশীলন
যে এপিআই ডাটা ঘনঘন আপডেট হয় বা রাইট অপারেশন করে, সেখানে যথাযথ মেথড (যেমন \`POST\` বা \`PATCH\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
একই ফোল্ডারে \`page.tsx\` এবং \`route.ts\` দুটি ফাইল একসাথে রাখার চেষ্টা করা, যা রাউট কনফ্লিক্ট বা কম্পাইলেশন এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript
// app/api/weather/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ক্যাশিং বন্ধ করা হলো

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City query parameter required' }, { status: 400 });
  }

  const res = await fetch(\`https://api.weather.com/v1/\${city}\`);
  const data = await res.json();

  return NextResponse.json(data);
}
\`\`\``
  },
  {
    id: 'nextjs-98',
    title: 'How do you identify, trace, and debug memory leaks in a production Next.js server?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Memory Leaks', 'Debugging', 'Node.js', 'Performance', 'Heap Snapshot'],
    enAnswer: 'To debug memory leaks in Next.js, launch the Node process with the --inspect flag to connect Chrome DevTools, capture heap snapshots at intervals, and analyze retainer trees to find leaks in global variables, unclosed database connections, or request scope leaks.',
    bnAnswer: 'Next.js সার্ভারে মেমোরি লিক ডিবাগ করতে --inspect ফ্ল্যাগ দিয়ে নোড প্রসেস রান করে Chrome DevTools যুক্ত করতে হয়। নির্দিষ্ট সময়ে হিপ স্ন্যাপশট নিয়ে রিটেইনার ট্রি অ্যানালাইসিস করে গ্লোবাল ভেরিয়েবল বা ডাটাবেজ সকেটের মেমোরি লিক ট্র্যাক করা যায়।',
    enExplanation: `### Explanation
A memory leak in Node.js server-side operations causes resources to grow over time, leading to \`Out of Memory (OOM)\` crashes.

**Steps to Debug Next.js Server Leaks**:
1. **Enable Inspection**: Run your build process and start the runner with:
   \`NODE_OPTIONS='--inspect' npm run start\`.
2. **Connect Profiler**: Open Chrome and navigate to \`chrome://inspect\`. Connect to your Next.js target.
3. **Capture Snapshots**:
   - Take Heap Snapshot 1 (baseline).
   - Simulate heavy server load (e.g., using toolings like \`autocannon\`).
   - Take Heap Snapshot 2 (under load) and Heap Snapshot 3 (after load has cleared).
4. **Compare Retainers**: Look for objects that are allocated but not garbage collected. Target common leak patterns:
   - Global event listeners that are registered but never unregistered.
   - Large global lists caching database objects.
   - Closed socket leaks in third-party client integrations.

### Real-World Example
If your Next.js application imports a third-party analytics client inside a Server Component layout, and instantiates the client directly on every request render, it might registers events repeatedly. Over 10,000 requests, this consumes all RAM, crashing the server container.

### Best Practice
Avoid storing state or caching variables inside global file scopes unless they are explicitly managed singletons. Ensure that you always call cleanup methods on server subscriptions or web socket objects when they are dismantled.

### Common Mistakes
Running heap inspections in development mode. Next.js in dev mode does not run optimization and contains extra cache loaders that can look like false memory leaks. Always test on production builds.

### Code Example
\`\`\`typescript
// Bad Practice: Memory leak!
const requestCache = new Map(); // Global map that grows indefinitely

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  // Storing items inside global scope without a size limit leak memory
  requestCache.set(userId, { timestamp: Date.now() });
  
  return Response.json({ success: true });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার সাইড কোডে মেমোরি লিক (Memory Leak) হলে র‍্যাম (RAM) ক্রমাগত ফুল হতে থাকে এবং এক পর্যায়ে \`Out of Memory\` এরর দেখিয়ে সার্ভার ক্র্যাশ করে:

**ডিবাগ করার পদ্ধতি**:
১. **ইন্সপেকশন মোড**: প্রজেক্ট রান করার সময় \`NODE_OPTIONS='--inspect' npm run start\` লিখে কমান্ড দিন।
২. **ক্রোম টুলস কানেক্ট**: ব্রাউজারে \`chrome://inspect\` লিংকে ঢুকলে রান হওয়া প্রসেসটি দেখতে পাবেন।
৩. **হিপ স্ন্যাপশট**: ১ নম্বর স্ন্যাপশট নিয়ে বেস মেমোরি মেপে রাখুন। এরপর \`autocannon\` দিয়ে ১ মিনিটে ১০ হাজার ডামি রিকোয়েস্ট পাঠান। এরপর ২ ও ৩ নম্বর স্ন্যাপশট নিয়ে মেমোরি গ্রাফ অ্যানালাইসিস করুন।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার কম্পোনেন্টে যদি কোনো গ্লোবাল \`Map\` বা \`Array\` নিয়ে ডাইনামিক ইউজারের রিকোয়েস্ট ডাটা পুশ করতে থাকেন এবং কোনো রিলেশন ডিলিট না করেন, তবে প্রতিদিন হাজার হাজার ভিজিটর এসে ডাটা পুশ করতে করতে র‍্যামের পুরো জায়গা খেয়ে ফেলবে।

### উত্তম অনুশীলন
সার্ভার সাইডে কোনো মেমোরি ক্যাশ তৈরি করতে চাইলে লোকাল ভেরিয়েবলের পরিবর্তে Redis বা Memcached এর মতো ডেডিকেটেড ক্যাশিং সলিউশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ডেভেলপমেন্ট মোডে হিপ স্ন্যাপশট নিয়ে মেমোরি লিক আছে বলে ভুল ধারণা করা। ডিবাগ টেস্ট অবশ্যই প্রোডাকশন বিল্ডে (\`npm run start\`) করা উচিত।

### কোড উদাহরণ
\`\`\`typescript
// ভুল অনুশীলন: মেমোরি লিক হবে!
const requestCache = new Map(); // গ্লোবাল ম্যাপ যা ক্রমাগত বৃদ্ধি পায় এবং ডিলিট হয় না

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  // ক্যাশ ক্লিয়ার রুল ছাড়া ডাটা সেভ করলে মেমোরি ব্লক হতে থাকবে
  requestCache.set(userId, { timestamp: Date.now() });
  
  return Response.json({ success: true });
}
\`\`\``
  },
  {
    id: 'nextjs-99',
    title: 'How do you capture and report Core Web Vitals in a Next.js application using useReportWebVitals?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Web Vitals', 'Performance', 'useReportWebVitals', 'Analytics', 'Monitoring'],
    enAnswer: 'You capture Core Web Vitals in the App Router by importing and calling the useReportWebVitals hook inside a Client Component. It reports metrics like LCP, FID, CLS, FCP, TTFB, and INP to your analytics tracker.',
    bnAnswer: 'Core Web Vitals ক্যাপচার করতে অ্যাপ রাউটারে একটি ক্লায়েন্ট কম্পোনেন্টের ভেতর useReportWebVitals হুক ইম্পোর্ট করে ব্যবহার করতে হয়। এটি LCP, FID, CLS, FCP, TTFB এবং INP-এর মতো পারফরম্যান্স ম্যাট্রিক্সগুলো ট্র্যাক করতে হেল্প করে।',
    enExplanation: `### Explanation
Core Web Vitals are critical performance metrics defined by Google to evaluate user experience:
- **LCP (Largest Contentful Paint)**: Loading performance.
- **CLS (Cumulative Layout Shift)**: Visual stability.
- **INP (Interaction to Next Paint)**: Page responsiveness.

In Next.js:
- You instantiate the \`useReportWebVitals\` hook inside a Client Component.
- The hook accepts a callback function that is fired on every metric evaluation.
- You can format and POST these metrics directly to your analytics dashboard (like Google Analytics, Vercel Analytics, or custom logging database).

### Real-World Example
To track how real users experience your web vitals:
- Implement a custom logger component.
- When a user loads your site, their browser measures that LCP took 2.4s and CLS was 0.05.
- The hook captures this and sends it to your database, giving you real-world data across different devices.

### Best Practice
Wrap the Web Vitals tracker component inside a \`Suspense\` boundary or import it dynamically in your root layout to prevent it from blocking critical initial rendering sequences.

### Common Mistakes
Declaring \`useReportWebVitals\` directly inside \`layout.tsx\` if the layout is a Server Component, since the hook is client-only and requires \`'use client'\`.

### Code Example
\`\`\`typescript
// app/components/WebVitalsReporter.tsx
'use client';

import { useReportWebVitals } from 'next/navigation';

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // Send metric payload to custom analytics API
    const body = JSON.stringify(metric);
    const url = 'https://api.example.com/analytics/vitals';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true });
    }
  });

  return null; // Renderless tracking helper
}

// app/layout.tsx
import WebVitalsReporter from './components/WebVitalsReporter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Core Web Vitals হলো গুগলের অফিশিয়াল পারফরম্যান্স গাইড যা ইউজারের সাইট ভিজিট অভিজ্ঞতা কেমন তা ট্র্যাক করে:
- **LCP**: লোডিং স্পিড।
- **CLS**: লেআউট স্ট্যাবিলিটি।
- **INP**: পেজ ইউজার ইন্টারঅ্যাকশন রেসপন্স রেট।

নেক্সট জেএস-এ:
- \`useReportWebVitals\` ক্লায়েন্ট হুক ব্যবহার করে ব্রাউজারের এই গুরুত্বপূর্ণ ম্যাট্রিক্সগুলো রিয়েল-টাইমে রিসিভ করা যায়।
- এই হুকের কলব্যাক ফাংশনে প্রতিবার নতুন ম্যাট্রিক্স ক্যালকুলেট হওয়া মাত্র ডাটা পাওয়া যায় যা ব্যাকএন্ড অ্যানালিটিক্স সার্ভারে পাঠিয়ে সেভ করা সম্ভব।

### বাস্তব-ভিত্তিক উদাহরণ
বাস্তব লাইফে ইউজারদের ল্যাপটপ বা মোবাইলে সাইটটি কেমন পারফর্ম করছে তা দেখতে ওয়ান-টাইম স্ক্রিপ্ট তৈরি করতে পারেন। এই স্ক্রিপ্ট ইউজারের মোবাইল স্ক্রিনের LCP ও TBT ডাটা নিয়ে গুগল অ্যানালিটিক্সে পুশ করে দেবে।

### উত্তম অনুশীলন
অ্যানালিটিক্স ট্র্যাকার অবজেক্টগুলো পাঠানোর জন্য ব্রাউজারের \`navigator.sendBeacon\` এপিআই ব্যবহার করুন। এটি পেজ ক্লোজ করার সময়ও ব্যাকগ্রাউন্ডে নিরাপদ ডাটা ট্রান্সফার সচল রাখে।

### সাধারণ ভুলসমূহ
\`useReportWebVitals\` সরাসরি সার্ভার লেআউট ফাইলের ভেতর ইম্পোর্ট করা, যা বিল্ড প্রসেসে এরর দেবে কারণ এটি ক্লায়েন্ট স্পেসিফিক মডিউল।

### কোড উদাহরণ
\`\`\`typescript
// app/components/WebVitalsReporter.tsx
'use client';

import { useReportWebVitals } from 'next/navigation';

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // কাস্টম এপিআইতে ডাটা পাঠানো হচ্ছে
    const body = JSON.stringify(metric);
    const url = 'https://api.example.com/analytics/vitals';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true });
    }
  });

  return null;
}

// app/layout.tsx
import WebVitalsReporter from './components/WebVitalsReporter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-100',
    title: 'What is the recommended strategy for migrating a large codebase from Pages Router to App Router incrementally?',
    difficulty: 'advanced',
    category: 'nextjs',
    tags: ['Migration', 'Pages Router', 'App Router', 'Coexistence', 'Architecture'],
    enAnswer: 'The recommended strategy is incremental migration. Next.js supports coexistence of the pages/ and app/ directories. Migrate low-risk routes first, ensure context providers are wrapped in Client Components, and map data fetches from getServerSideProps to async Server Components.',
    bnAnswer: 'পদ্ধতিগতভাবে বড় প্রজেক্ট মাইগ্রেট করার জন্য ইনক্রিমেন্টাল মাইগ্রেশন বাঞ্ছনীয়। নেক্সট জেএস-এ pages/ ও app/ ফোল্ডার একসাথে কো-এক্সিস্ট করতে পারে। প্রথমে সহজ রাউটগুলো মাইগ্রেট করুন এবং getServerSideProps-কে সার্ভার কম্পোনেন্টে এসিনক্রোনাস ফেচ এ রূপান্তর করুন।',
    enExplanation: `### Explanation
Migrating a production application all at once can introduce regressions. Next.js allows Pages Router and App Router routes to coexist.

**Incremental Migration Strategy**:
1. **Coexistence**: Keep your existing \`pages/\` directory intact. Next.js routes traffic to \`app/\` first. If no matching path is found in \`app/\`, it checks the \`pages/\` folder.
2. **Setup Root Layout**: Create a \`layout.tsx\` in \`app/\` to share global styles.
3. **Migrate Low-Risk Routes**: Start by migrating static pages (e.g., About Us, Privacy Policy) to App Router Server Components.
4. **Wrap Providers**: Shift global context providers (Redux, Theme, React Query) into a Client Component and wrap your root layout children.
5. **Convert Fetching**:
   - \`getServerSideProps\` maps directly to \`async\` Server Components fetching data inside the component body.
   - \`getStaticProps\` maps to standard fetches with \`revalidate\` properties.
   - \`getStaticPaths\` maps to \`generateStaticParams()\`.

### Real-World Example
An online SaaS dashboard has thousands of routes:
- Instead of stopping features and spending 2 weeks rewriting, they set up the \`app/\` directory alongside \`pages/\`.
- They write new billing and config routes inside the App Router using Server Components.
- Legacy dashboards remain in the Pages Router until developers find time to migrate them page-by-page.

### Best Practice
Run automated regressions and compare the HTML structures between the migrated App Router page and the original Pages Router version in staging to verify that SEO structures (like h1, canonical links) remain unchanged.

### Common Mistakes
Trying to use Router hooks from \`next/router\` inside the App Router. The App Router uses new navigation hooks from \`next/navigation\` (like \`useRouter\` from \`next/navigation\`). Mixing them up leads to silent routing failures.

### Code Example
\`\`\`typescript
// --- Pages Router (Old: pages/post/[id].tsx) ---
// import { useRouter } from 'next/router';
// export async function getServerSideProps({ params }) {
//   const data = await fetchPost(params.id);
//   return { props: { post: data } };
// }
// export default function PostPage({ post }) { ... }


// --- App Router (New: app/post/[id]/page.tsx) ---
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

// Fetch data directly inside async Server Component
async function getPost(id: string) {
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);
  
  if (!post) {
    notFound(); // Trigger app/not-found.tsx
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি বড় প্রজেক্ট একবারে সম্পূর্ণ মাইগ্রেট করতে গেলে অনেক বালাই সৃষ্টি হতে পারে:

**ইনক্রিমেন্টাল মাইগ্রেশন স্ট্র্যাটেজি**:
১. **কো-এক্সিস্টেন্স**: \`pages/\` ফোল্ডার আগের মতোই রাখুন। নেক্সট জেএস প্রথমে \`app/\` ফোল্ডারের রুট চেক করে। সেখানে না পেলে স্বয়ংক্রিয়ভাবে \`pages/\` ডিরেক্টরির ফাইলে চলে যায়।
২. **রুট লেআউট**: গ্লোবাল সিএসএস লিংক দিতে অ্যাপ ফোল্ডারে একটি \`layout.tsx\` তৈরি করুন।
৩. **লো-রিস্ক রাউট**: প্রথমে ব্লগ বা পলিসি পেজের মতো সহজ পেজগুলো দিয়ে শুরু করুন।
৪. **কন্টেক্সট প্রোভাইডার**: রিডাক্স (Redux) বা থিম প্রোভাইডারগুলোকে ক্লায়েন্ট ফাইলে র্যাপ করে প্যারেন্ট লেআউটে সেট করুন।
৫. **ডাটা ফেচিং কনভার্ট**:
   - \`getServerSideProps\` এর পরিবর্তে সার্ভার কম্পোনেন্টে এসিনক্রোনাস ফাংশন দিয়ে সরাসরি বডির ভেতর ডাটা ফেচ করুন।
   - \`getStaticProps\` কে নরমাল ক্যাশ ফেচে কনভার্ট করুন।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার একটি ড্যাশবোর্ড প্রজেক্ট আছে। আপনি প্রজেক্ট বন্ধ না করে নতুন নতুন পেজগুলোকে অ্যাপ ডিরেক্টরিতে বানাচ্ছেন আর পুরনো পেজগুলোকে একটি একটি করে প্রজেক্ট শিডিউল ফাঁকা হওয়া সাপেক্ষে মাইগ্রেট করে নিচ্ছেন।

### উত্তম অনুশীলন
নতুন রুটে নেভিগেশনের জন্য অবশ্যই \`next/navigation\` থেকে \`useRouter\` ইম্পোর্ট করুন। ভুল করে \`next/router\` থেকে ইম্পোর্ট করলে তা অ্যাপ ডিরেক্টরির পেজে ক্র্যাশ করবে।

### সাধারণ ভুলসমূহ
হুক ব্যবহারের ভুল। অ্যাপ রাউটারের ক্লায়েন্ট ফাইলে রাউটিং এর কাজ করতে চাইলে \`useRouter()\` কে অবশ্যই \`next/navigation\` থেকে নিয়ে আসতে হবে, \`next/router\` থেকে নয়।

### কোড উদাহরণ
\`\`\`typescript
// --- Pages Router (Old: pages/post/[id].tsx) ---
// import { useRouter } from 'next/router';
// export async function getServerSideProps({ params }) {
//   const data = await fetchPost(params.id);
//   return { props: { post: data } };
// }
// export default function PostPage({ post }) { ... }


// --- App Router (New: app/post/[id]/page.tsx) ---
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

// সার্ভার কম্পোনেন্টের নিজস্ব ডাটা ফেচ মেথড
async function getPost(id: string) {
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);
  
  if (!post) {
    notFound(); // ৪০৪ পেজ ট্রিগার করবে
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
\`\`\``
  }
];
