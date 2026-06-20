import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'nextjs-31',
    title: 'What is Incremental Static Regeneration (ISR) and how does it compare to Static Site Generation (SSG)?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['ISR', 'SSG', 'Caching', 'Performance'],
    enAnswer: 'Incremental Static Regeneration (ISR) allows you to update static pages after you have built and deployed your site, without rebuilding the entire website. While SSG compiles pages only once during build time, ISR regenerates pages in the background as requests come in, based on a revalidate time interval.',
    bnAnswer: 'ইনক্রিমেন্টাল স্ট্যাটিক রিজেনারেশন (ISR) পুরো সাইট পুনরায় বিল্ড না করেই ডেভেলপ করার পর নির্দিষ্ট পেজ আপডেট করার সুবিধা দেয়। এসএসজি (SSG) যেখানে কেবল বিল্ড করার সময় পেজ তৈরি করে, আইএসআর (ISR) সেখানে রিলিজ হওয়ার পর ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পরপর রিকোয়েস্টের ওপর ভিত্তি করে নতুন পেজ তৈরি করে।',
    enExplanation: `### Explanation
ISR combines the performance benefits of static files with the freshness of dynamic data.

**How ISR Works:**
1. During build, Next.js compiles the page statically (SSG).
2. When a user requests the page, the pre-rendered HTML is served instantly from the cache.
3. You define a \`revalidate\` time (e.g. 60 seconds).
4. Any requests made *before* 60 seconds get the cached static page.
5. The first request *after* 60 seconds triggers a background regeneration. Next.js fetches new data and rebuilds the HTML.
6. Once built, the cache is updated, and subsequent visitors see the fresh content.

### Real-World Example
In a news portal homepage:
- The page is visited by 10,000 users per minute.
- With ISR and \`revalidate: 60\`, the database is queried only once per minute. The other 9,999 users get the static cache instantly, saving server costs while keeping content fresh.

### Best Practice
Set a reasonable revalidation time. For slowly changing data (like blogs or products), 1 hour (3600s) or 1 day is fine. For faster data (like stock levels), use lower values or combine with on-demand revalidation.

### Common Mistakes
Forgetting that the very first user who requests the page *after* the revalidation window has expired will still see the old (stale) page, because regeneration happens in the background.

### Code Example
\`\`\`typescript
// app/blog/page.tsx
export const revalidate = 3600; // Revalidate this page every hour (3600 seconds)

export default async function BlogFeed() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return (
    <div>
      {posts.map((post: any) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ISR স্ট্যাটিক পেজের সুপার স্পিড ও ডাইনামিক ডাটার রিয়েল-টাইম আপডেটের সুবিধা একসাথে যুক্ত করে।

**কাজের পদ্ধতি:**
১. বিল্ড দেওয়ার সময় নেক্সট জেএস পেজটিকে স্ট্যাটিকলি জেনারেট (SSG) করে।
২. ইউজার পেজে ঢুকলে ক্যাশ মেমোরি থেকে রেডি HTML ফাইল ইনস্ট্যান্টলি সার্ভ হয়।
৩. আপনি একটি \`revalidate\` টাইম সেকেন্ডে ঠিক করে দেন (যেমন ৬০ সেকেন্ড)।
৪. ৬০ সেকেন্ডের মধ্যে যত ইউজার আসবে সবাই পুরোনো ক্যাশড পেজটি দেখতে পাবে।
৫. ৬০ সেকেন্ড অতিক্রান্ত হওয়ার পর প্রথম যে ইউজার রিকোয়েস্ট করবে, নেক্সট জেএস তাকে পুরোনো পেজটিই দেখাবে কিন্তু ব্যাকগ্রাউন্ডে এপিআই থেকে নতুন ডাটা নিয়ে পেজটি গোপনে আপডেট করে রাখবে।
৬. এর পরে আসা সমস্ত ইউজার আপডেটেড নতুন পেজ দেখতে পাবেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি জনপ্রিয় নিউজ পোর্টালের ক্ষেত্রে:
- প্রতি মিনিটে ১০,০০০ পাঠক সাইটে ঢোকেন।
- ISR \`revalidate: 60\` ব্যবহারে প্রতি মিনিটে ডাটাবেস কুয়েরি হবে মাত্র ১ বার। বাকি ৯,৯৯৯ জন পাঠক কোনো ল্যাটেন্সি ছাড়াই ক্যাশ ফাইল দেখতে পাবেন, যা সার্ভার বিল বাঁচাবে ও সাইট ফাস্ট রাখবে।

### উত্তম অনুশীলন
ডাটার পরিবর্তনের ওপর ভিত্তি করে রিভ্যালিডেট টাইম দিন। ব্লগ বা প্রোডাক্ট ডেসক্রিপশনের মতো ডাটার জন্য ১ ঘণ্টা (৩৬০০ সেকেন্ড) বা ১ দিন সময় দিন।

### সাধারণ ভুলসমূহ
মনে না রাখা যে রিভ্যালিডেশনের সময় পার হওয়ার পর আসা একদম প্রথম ভিজিটরটি কিন্তু পুরোনো ডাটাই দেখবে, কারণ ব্যাকগ্রাউন্ড আপডেট হতে সামান্য সময় লাগে।

### Code Example
\`\`\`typescript
// app/blog/page.tsx
export const revalidate = 3600; // প্রতি ঘণ্টায় (৩৬০০ সেকেন্ড) পেজটি আপডেট হবে

export default async function BlogFeed() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return (
    <div>
      {posts.map((post: any) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-32',
    title: 'How do you implement time-based revalidation and on-demand revalidation in Next.js?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Revalidation', 'Caching', 'ISR', 'Server Actions'],
    enAnswer: 'Time-based revalidation is implemented by passing next: { revalidate: seconds } in fetch() options or exporting a revalidate constant. On-demand revalidation is triggered dynamically in Server Actions or Route Handlers using revalidatePath() or revalidateTag() from next/cache.',
    bnAnswer: 'টাইম-ভিত্তিক রিভ্যালিডেশন করতে fetch()-এর অপশনে next: { revalidate: সেকেন্ড } পাস করা হয় বা revalidate কনস্ট্যান্ট এক্সপোর্ট করা হয়। অন-ডিমান্ড রিভ্যালিডেশন সার্ভার অ্যাকশন বা এপিআই-তে next/cache থেকে revalidatePath() বা revalidateTag() ব্যবহার করে ট্রিগার করা হয়।',
    enExplanation: `### Explanation
Next.js offers two ways to clear data cache and regenerate static pages:

**1. Time-Based Revalidation**:
- Automatically checks for updates after a defined time interval.
- Useful for data that changes predictably.
\`\`\`typescript
fetch('url', { next: { revalidate: 60 } });
\`\`\`

**2. On-Demand Revalidation (Recommended for instant updates)**:
- Clears cache instantly in response to an event (e.g. database change, form submission).
- **\`revalidatePath(path)\`**: Invalidates cached data for a specific URL route path.
- **\`revalidateTag(tag)\`**: Invalidates cached data matching a specific dependency tag passed to fetch requests.

### Real-World Example
In a headless CMS blog:
- The writer publishes a new post in the dashboard.
- Instead of waiting for a 1-hour timer to expire, the CMS webhook triggers a Server Action containing \`revalidateTag('posts')\`. The website updates to display the new post instantly.

### Best Practice
Use on-demand revalidation with \`revalidateTag\` to keep your site fast and statically cached while guaranteeing that updates reflect instantly upon database changes.

### Common Mistakes
Calling \`revalidatePath\` or \`revalidateTag\` inside Client Components. These APIs are server-only and must be run inside Server Actions or Route Handlers.

### Code Example
\`\`\`typescript
// app/actions.ts (Server Action)
"use server";

import { revalidateTag } from 'next/cache';

export async function addComment(postId: string, comment: string) {
  await saveCommentToDB(postId, comment);
  
  // Instantly purge cache for fetch requests tagged with 'comments'
  revalidateTag('comments');
}

// app/comments/page.tsx (Server Component data fetch)
export default async function CommentsPage() {
  const res = await fetch('https://api.example.com/comments', {
    next: { tags: ['comments'] } // Tag this request for on-demand invalidation
  });
  const comments = await res.json();

  return <div>{/* Render Comments */}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্যাশ ডাটা মুছে স্ট্যাটিক পেজ নতুন করে লোড করার জন্য নেক্সট জেএস দুটি পদ্ধতি দেয়:

**১. Time-Based Revalidation (সময়-ভিত্তিক):**
- নির্দিষ্ট সময় পর পর চেক করে আপডেট নেয়।
- কোড: \`fetch('url', { next: { revalidate: 60 } })\`।

**২. On-Demand Revalidation (চাহিদা-ভিত্তিক - রিয়েল-টাইম):**
- ডাটাবেসে ডাটা পরিবর্তনের ইভেন্ট ঘটার সাথে সাথে ইনস্ট্যান্টলি ক্যাশ ক্লিয়ার করে।
- **\`revalidatePath(path)\`**: নির্দিষ্ট লিংকের সব ক্যাশ মুছে ফেলে।
- **\`revalidateTag(tag)\`**: নির্দিষ্ট ট্যাগ দিয়ে ফেচ করা সমস্ত রিকোয়েস্টের ক্যাশ মুছে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটে এডমিন প্যানেল থেকে নতুন পোস্ট সাবমিট করা হলো:
- ১ ঘণ্টা রিভ্যালিডেশন টাইমের জন্য অপেক্ষা না করে, পোস্ট সেভ হওয়ার অ্যাকশনে \`revalidateTag('posts')\` ট্রিগার করা হলো।
- সাইটের সমস্ত ভিজিটর সাথে সাথে হোমপেজে নতুন ব্লগটি দেখতে পাবেন।

### উত্তম অনুশীলন
অন-ডিমান্ড রিভ্যালিডেশন (\`revalidateTag\`) ব্যবহার করুন। এটি সাইটকে স্ট্যাটিক ক্যাশে ফাস্ট রাখে আবার ডাটা এডিট হলে সাথে সাথে আপডেটও নিশ্চিত করে।

### সাধারণ ভুলসমূহ
ক্লায়েন্ট কম্পোনেন্টে \`revalidatePath\` কল করার চেষ্টা করা। এটি শুধুমাত্র সার্ভার ফাইল বা অ্যাকশনে কল করতে হবে।

### Code Example
\`\`\`typescript
// app/actions.ts (সার্ভার অ্যাকশন)
"use server";

import { revalidateTag } from 'next/cache';

export async function addComment(postId: string, comment: string) {
  await saveCommentToDB(postId, comment);
  
  // 'comments' ট্যাগ করা সমস্ত ফেচ রিকোয়েস্টের ক্যাশ সাথে সাথে ডিলিট হবে
  revalidateTag('comments');
}

// app/comments/page.tsx (সার্ভার কম্পোনেন্ট ডাটা ফেচ)
export default async function CommentsPage() {
  const res = await fetch('https://api.example.com/comments', {
    next: { tags: ['comments'] } // রিভ্যালিডেশনের জন্য ট্যাগ যুক্ত করা
  });
  const comments = await res.json();

  return <div>{/* কমেন্ট লিস্ট রেন্ডার */}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-33',
    title: 'What is Middleware in Next.js and how do you define a global middleware?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Middleware', 'Routing', 'Security', 'Cookies'],
    enAnswer: 'Middleware in Next.js allows you to run code before a request is completed. It is defined in a single middleware.ts file at the root of the project (src/ or root directory) and executes on every HTTP request, allowing rewrites, redirects, header modifications, or cookie checks.',
    bnAnswer: 'Next.js-এ মিডলওয়্যার কোনো রিকোয়েস্ট সম্পন্ন হওয়ার আগেই সার্ভার কোড রান করার সুযোগ দেয়। এটি প্রজেক্টের রুট ডিরেক্টরিতে (src/ বা root) একটিমাত্র middleware.ts ফাইলে ডিফাইন করা হয় এবং প্রতি HTTP রিকোয়েস্টে রান হয়ে রিডাইরেক্ট, রিরাইট বা কুকি চেক সম্পন্ন করে।',
    enExplanation: `### Explanation
Middleware acts as a gatekeeper. Because it runs on the Edge Runtime (lightweight V8 engine), it executes with extremely low latency before hitting layouts, page routes, or static files.

**Capabilities of Middleware:**
1. **Redirects**: Send unauthorized requests to \`/login\`.
2. **Rewrites**: Support dynamic internal routing (e.g. A/B testing) without changing the browser URL.
3. **Header Injection**: Inject custom headers (like security CSP nonces or request timestamps) into the incoming request.
4. **Cookie Parsing**: Read and write session cookies dynamically.

### Real-World Example
In a SaaS software dashboard:
- To protect all routes starting with \`/dashboard\`.
- Instead of checking authentication state in every page component, the middleware verifies the presence of \`session_token\` cookie. If missing, it redirects to \`/login\` before the page rendering phase even starts.

### Best Practice
Keep middleware code lightweight. Do not import heavy libraries or perform direct SQL database queries here, as it blocks request processing on every single page click. Use matcher configurations to target only specific paths.

### Common Mistakes
Creating multiple middleware files in different folders. Next.js supports only **one** root \`middleware.ts\` file per project.

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token');

  // If user is trying to access dashboard but is not logged in
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Continue to requested page
}

// Config limit: Run middleware only on dashboard routes
export const config = {
  matcher: ['/dashboard/:path*'],
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মিডলওয়্যার একটি গেটকিপার বা ফিল্টারের মতো কাজ করে। এটি এজ রানটাইমে (Edge Runtime) চলায় পেজ রেন্ডার বা ফাইল লোড হওয়ার পূর্বেই অত্যন্ত দ্রুতগতিতে কাজ সম্পন্ন করে।

**মিডলওয়্যারের কাজের ক্ষমতা:**
১. **রিডাইরেক্ট**: আনঅথরাইজড রিকোয়েস্টকে লগইন পেজে পাঠানো।
২. **রিরাইট (Rewrites)**: ইউজার লিংক পরিবর্তন না করেই ভেতরের পাথ কনফিগার করা (যেমন: A/B টেস্টিং)।
৩. **হেডার ইনজেকশন**: কাস্টম সিকিউরিটি হেডার রেসপন্সে যুক্ত করা।
৪. **কুকি রিড-রাইট**: সেশন ভেরিফিকেশনের জন্য কুকি রিড করা।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডের ক্ষেত্রে:
- ড্যাশবোর্ডের ভেতরের সব রুট সিকিউর করতে হবে।
- প্রতিটি পেজে গিয়ে আলাদা অথ চেকিং কোড না লিখে, মিডলওয়্যারে কুকি \`session_token\` চেক বসানো হলো। কুকি না থাকলে পেজ রেন্ডার শুরুর আগেই ইউজারকে লগইন পেজে রিডাইরেক্ট করে দেয়।

### উত্তম অনুশীলন
মিডলওয়্যারের কোডকে হালকা রাখুন। এখানে কোনো বড় ডাটাবেস কুয়েরি বা ভারী লাইব্রেরি রান করবেন না, কারণ এটি প্রতি ক্লিকে চলে ও এপিআই ধীর করে দেয়। ম্যাচিং কন্ডিশন ব্যবহার করে নির্দিষ্ট রুটে এটি সীমাবদ্ধ রাখুন।

### সাধারণ ভুলসমূহ
প্রজেক্টের বিভিন্ন ফোল্ডারে অনেকগুলো মিডলওয়্যার ফাইল তৈরি করা। নেক্সট জেএস প্রজেক্টে কেবল **একটিই** রুট \`middleware.ts\` ফাইল সাপোর্ট করে।

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token');

  // যদি লগইন না থাকে এবং ড্যাশবোর্ডে ঢোকার ট্রাই করে
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    // লগইন পেজে রিডাইরেক্ট করা
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // স্বাভাবিক নেভিগেশন চালু রাখা
}

// কনফিগারেশন: শুধু ড্যাশবোর্ড পাথের জন্য মিডলওয়্যার অন করা
export const config = {
  matcher: ['/dashboard/:path*'],
};
\`\`\``
  },
  {
    id: 'nextjs-34',
    title: 'How does routing and matcher configuration work in Next.js Middleware?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Middleware', 'Matcher', 'Routing', 'App Router'],
    enAnswer: 'The matcher configuration in Next.js Middleware filters which request paths trigger the middleware. It supports wildcard patterns (like /dashboard/:path*) and regex matches, allowing you to bypass static assets (like images, JS files) and target only page routes.',
    bnAnswer: 'মিডলওয়্যারের ম্যাচিং কনফিগারেশন (matcher) ফিল্টার করে কোন কোন পাথের রিকোয়েস্টে মিডলওয়্যারটি ট্রিগার হবে। এটি ওয়াইল্ডকার্ড প্যাটার্ন (/dashboard/:path*) ও রেজেক্স সমর্থন করে, যার মাধ্যমে স্ট্যাটিক ফাইল (ছবি, সিএসএস) এড়ানো যায়।',
    enExplanation: `### Explanation
If you do not configure a matcher, your middleware will run on **every single request**, including static asset downloads (e.g. every logo, page CSS, and JS chunk request). This creates major CPU overhead.

**Matcher configuration rules:**
- Declared by exporting a \`config\` object with a \`matcher\` array.
- Paths must start with \`/\`.
- **Wildcard Syntax**: \`/dashboard/:path*\` matches \`/dashboard\`, \`/dashboard/settings\`, and \`/dashboard/billing/history\`.
- **Negative Lookahead**: Used to skip system folders and assets:
  \`\`\`javascript
  '/((?!api|_next/static|_next/image|favicon.ico).*)'
  \`\`\`
  This matches all routes *except* API endpoints, Next.js internal static assets, and favicon files.

### Real-World Example
In a production web portal:
- You want to inject a custom tracking cookie on pages but not on static images.
- A matcher like \`['/posts/:path*', '/profile']\` ensures the middleware skips image requests like \`/images/banner.png\`.

### Best Practice
Always define a matcher config. Exclude static assets and system routes (\`_next/static\`, \`_next/image\`) using negative lookahead regex to avoid unneeded middleware executions.

### Common Mistakes
Writing matcher patterns that block the \`_next/\` internal files. This will prevent CSS/JS bundles from loading in the browser, causing the site styling to break.

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  console.log("Middleware executed only on matched paths!");
  return NextResponse.next();
}

// Config matcher to target dashboard and exclude assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ম্যাচার কনফিগারেশন না বসালে আপনার মিডলওয়্যারটি সাইটের **প্রতিটি সিঙ্গেল রিকোয়েস্টে** রান হবে, যার মধ্যে পেজের ছোট লোগো, ইমেজ বা সিএসএস ফাইল ডাউনলোডের ঘটনাও অন্তর্ভুক্ত। এটি সার্ভারের মেমোরি ও সিপিইউ খরচ অনেক বাড়িয়ে দেয়।

**ম্যাচার কনফিগারেশনের নিয়মাবলী:**
- এটি কনস্ট্যান্ট \`config\` অবজেক্টের ভেতর \`matcher\` অ্যারে দিয়ে এক্সপোর্ট করতে হয়।
- **ওয়াইল্ডকার্ড সিনট্যাক্স**: \`/dashboard/:path*\` মানে ড্যাশবোর্ড ফোল্ডারের ভেতরের সমস্ত সাব-লিংক ম্যাচ করবে।
- **নেগেটিভ লুপ-অ্যাহেড রেজেক্স**: সিস্টেম ফাইল এড়ানোর নিয়ম:
  \`\`\`javascript
  '/((?!api|_next/static|_next/image|favicon.ico).*)'
  \`\`\`
  এটি এপিআই রুট ও ইন্টারনাল স্ট্যাটিক ফাইল ছাড়া বাকি সব পেজ লিংকে মিডলওয়্যার রান করায়।

### বাস্তব-ভিত্তিক উদাহরণ
পাবলিক পোর্টালে:
- আপনি ইউজারের ব্রাউজার ট্র্যাক করতে কাস্টম কুকি বসাতে চান কিন্তু ইমেজে লিক করতে চান না।
- ম্যাচারে \`['/posts/:path*', '/profile']\` ডিফাইন করে দিলে ফালতু ইমেজ রিকোয়েস্টে মিডলওয়্যার রান হওয়া আটকাবে।

### উত্তম অনুশীলন
সর্বদা ম্যাচার ফাইল লিখুন। রেজেক্স প্যাটার্ন দিয়ে \`_next/static\` ও \`_next/image\` বাদ দিয়ে রাখুন যাতে মঙ্গোডিবির স্টাইলের মতো কোড ফাইলগুলোতে অযথা রিকোয়েস্ট লুপ না হয়।

### সাধারণ ভুলসমূহ
ভুল রেজেক্স লিখে নেক্সট জেএস-এর নিজস্ব \`_next/\` ফোল্ডারের রিকোয়েস্ট ব্লক করে দেওয়া। এর ফলে সিএসএস ও জাভাস্ক্রিপ্ট ফাইল ব্রাউজারে ব্লক হয়ে পুরো সাইটের ডিজাইন ভেঙে যাবে।

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  console.log("মিডলওয়্যার কেবল ম্যাচ করা রুটে রান হয়েছে!");
  return NextResponse.next();
}

// ম্যাচার কনফিগারেশন
export const config = {
  matcher: [
    /*
     * নিচের ফাইল/পাথগুলো বাদে বাকি সব পেজে রান হবে:
     * - api (এপিআই রুট)
     * - _next/static (স্ট্যাটিক কোড ফাইল)
     * - _next/image (ইমেজ অপ্টিমাইজার)
     * - favicon.ico (সাইট লোগো আইকন)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
\`\`\``
  },
  {
    id: 'nextjs-35',
    title: 'How do you implement custom loading skeletons using loading.tsx and custom React Suspense boundaries?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Suspense', 'loading.tsx', 'Streaming', 'UX'],
    enAnswer: 'Next.js allows route-level skeletons using loading.tsx, which automatically wraps page content in a Suspense boundary. For component-level skeletons, you can manually wrap slow asynchronous components in a <Suspense fallback={<Skeleton />}> tag inside your page.tsx.',
    bnAnswer: 'নেক্সট জেএস loading.tsx ফাইলের মাধ্যমে রুট-লেভেল কন্টেন্টকে স্বয়ংক্রিয়ভাবে সাসপেন্স বাউন্ডারিতে মুড়ে স্কেলিটন দেখায়। আর কম্পোনেন্ট-লেভেলে করতে চাইলে page.tsx-এর ভেতর স্লো কোনো কম্পোনেন্টকে ম্যানুয়ালি <Suspense fallback={<Skeleton />}> দিয়ে ঘিরে কাস্টম স্কেলিটন লোডার তৈরি করা যায়।',
    enExplanation: `### Explanation
While \`loading.tsx\` applies to the entire page, it can be too coarse (e.g. hiding the header and sidebar just because a small comment list is loading).

**Granular Suspense Boundaries:**
1. Keep the main page load instant.
2. Query data in separate, targeted Server Components.
3. Wrap each slow-fetching component in a React \`<Suspense>\` boundary with a custom Skeleton loader.
4. Next.js streams the page HTML layout. The shell renders immediately, and the components load independently.

### Real-World Example
In a user profile dashboard:
- The user profile header loads instantly (<100ms).
- The transaction history table takes 2 seconds to query database.
- Wrapping only the \`<TransactionTable />\` component in a Suspense boundary allows the page layout to load instantly, showing a skeleton for the table until it finishes loading.

### Best Practice
Avoid putting all data fetching at the page level. Group queries inside their respective sub-components and wrap them in local Suspense boundaries. This improves Visual Stability (CLS) and User Experience.

### Common Mistakes
Importing client-side fetch loaders inside Server Components without Suspense. This blocks the entire page rendering until the slowest query completes, defeating the purpose of streaming.

### Code Example
\`\`\`typescript
// app/profile/page.tsx
import { Suspense } from 'react';
import UserProfileHeader from '@/components/UserProfileHeader';
import TransactionHistoryTable from '@/components/TransactionHistoryTable';
import TableSkeleton from '@/components/TableSkeleton';

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Renders instantly on the server */}
      <UserProfileHeader />
      
      {/* Wrap only the slow component in Suspense */}
      <Suspense fallback={<TableSkeleton />}>
        <TransactionHistoryTable />
      </Suspense>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`loading.tsx\` পুরো পেজের ওপর লকিং সিস্টেমের মতো কাজ করে। এটি কখনো কখনো ইউজারের জন্য বিরক্তিকর হতে পারে (যেমন: একটি ছোট কমেন্ট বক্স লোড হওয়ার জন্য পুরো হেডার ও পেজ অফ থাকা)।

**দানাদার সাসপেন্স বাউন্ডারি (Granular Suspense):**
১. মূল পেজ লোড ফাস্ট রাখুন।
২. ডাটা লোডিংয়ের কাজ আলাদা আলাদা সাব-কম্পোনেন্টে ভাগ করুন।
৩. প্রতিটি স্লো কম্পোনেন্টকে ম্যানুয়ালি রিঅ্যাক্ট \`<Suspense>\` দিয়ে মুড়ে কাস্টম স্কেলিটন ডিক্লেয়ার করুন।
৪. নেক্সট জেএস পেজের ফ্রেম ব্রাউজারে সাথে সাথে পাঠিয়ে দেবে এবং ভেতরের কম্পোনেন্টগুলো নিজ নিজ গতিতে ডাটা লোড সম্পন্ন হওয়া মাত্র পর্দায় ভেসে উঠবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার প্রোফাইল ড্যাশবোর্ডে:
- ইউজারের নাম ও ছবি ফাস্ট লোড হয় (<১০০ মি.সে.)।
- ট্রানজ্যাকশন হিস্ট্রি টেবিল লোড হতে ২ সেকেন্ড সময় নেয়।
- পুরো পেজ ব্লক না করে কেবল \`<TransactionHistoryTable />\` কম্পোনেন্টটিকে সাসপেন্সে রাখলে প্রোফাইলের হেডার সাথে সাথে দেখা যায় এবং টেবিলটি লোড হওয়ার আগ পর্যন্ত ওটার জায়গায় স্কেলিটন বাফারিং শো করে।

### উত্তম অনুশীলন
সমস্ত ডাটা কুয়েরি একবারে পেজ লেভেলে না করে নিজ নিজ ফাইলে ভাগ করুন এবং সেখানে কাস্টম সাসপেন্স বসান। এটি সাইটের ভিজ্যুয়াল স্ট্যাবিলিটি বাড়ায়।

### সাধারণ ভুলসমূহ
সাসপেন্স বাউন্ডারি ব্যবহার না করে সার্ভার ফাইলে বড় বড় ধীরগতির কুয়েরি লাইন বাই লাইন লিখে রাখা। এর ফলে সবচেয়ে স্লো কুয়েরিটি শেষ না হওয়া পর্যন্ত পুরো পেজই লোড হবে না।

### Code Example
\`\`\`typescript
// app/profile/page.tsx
import { Suspense } from 'react';
import UserProfileHeader from '@/components/UserProfileHeader';
import TransactionHistoryTable from '@/components/TransactionHistoryTable';
import TableSkeleton from '@/components/TableSkeleton';

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      {/* এটি সার্ভার থেকে সাথে সাথে স্ক্রিনে চলে যাবে */}
      <UserProfileHeader />
      
      {/* কেবল ধীরগতির টেবিল পার্টটি সাসপেন্সে রাখা হয়েছে */}
      <Suspense fallback={<TableSkeleton />}>
        <TransactionHistoryTable />
      </Suspense>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-36',
    title: 'Explain the error boundary mechanism in error.tsx and how to trigger a reset of the failed boundary programmatically.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['error.tsx', 'Error Boundary', 'App Router', 'State Recovery'],
    enAnswer: 'Next.js maps error.tsx to a React Error Boundary wrapper. It catches runtime rendering errors in its route segment. To recover, the component receives a reset() function as a prop, which when executed tries to re-render the page segment, allowing recovery if the transient error (like database downtime) has resolved.',
    bnAnswer: 'Next.js-এর error.tsx রিঅ্যাক্ট এরর বাউন্ডারি হিসেবে কাজ করে। এটি চাইল্ড ফাইলে ঘটা রানটাইম এরর ক্যাচ করে। এটি থেকে রিকভার করতে প্রপস আকারে একটি \`reset()\` ফাংশন দেওয়া হয়, যা রান করালে পেজটি পুনরায় রেন্ডার করার ট্রাই করে এবং এরর ঠিক হয়ে থাকলে পেজটি রিকভার হয়।',
    enExplanation: `### Explanation
The \`error.tsx\` file handles errors dynamically without crashing the parent layout:

**The Reset Callback Mechanism:**
1. A runtime error occurs (e.g., API query timeout).
2. The component tree below the error boundary crashes and unmounts. Next.js catches this and mounts \`error.tsx\` instead.
3. The error component receives a \`reset: () => void\` callback.
4. Calling \`reset()\` triggers React to attempt to re-render the crashed component subtree.
5. If the issue was transient (like a temporary database ping fail) and has resolved, the application recovers and displays the active page UI.

### Real-World Example
In a stock price widget:
- A network spike triggers a "Connection timed out" error.
- The widget crashes, showing the \`error.tsx\` fallback UI with a "Retry Connection" button.
- The user clicks the button. \`reset()\` runs, fetching the stock API again. The network connection is now stable, and the stock charts render correctly.

### Best Practice
Design errors to be granular. Put \`error.tsx\` inside nested routes (like \`app/dashboard/billing/error.tsx\`) so that a crash in the billing page does not prevent the user from using other sections of the dashboard.

### Common Mistakes
Forgetting that \`error.tsx\` cannot catch errors thrown inside a sibling \`layout.tsx\`. To catch layout errors, you must have an \`error.tsx\` in the parent directory.

### Code Example
\`\`\`typescript
// app/dashboard/error.tsx
"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function DashboardErrorBoundary({ error, reset }: Props) {
  return (
    <div className="p-6 border border-yellow-500 rounded bg-yellow-50 text-center">
      <h3 className="font-bold text-lg text-yellow-800">Connection Interrupted</h3>
      <p className="text-sm mt-1">{error.message}</p>
      
      {/* Execute reset callback to attempt recovery */}
      <button
        onClick={() => reset()} 
        className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        Retry Fetching Data
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`error.tsx\` মূল লেআউটের কোনো ক্ষতি না করে কেবল ক্র্যাশ হওয়া অংশটিকে কাস্টম এরর পেজ দিয়ে ফিল্টার করে:

**রিসেট মেকানিজমের কাজের ধারা:**
১. রানটাইম ভুল ঘটে (যেমন এপিআই ওভারলোড)।
২. এরর বাউন্ডারির নিচের সাব-কম্পোনেন্ট ভেঙে যায়। নেক্সট জেএস ওটি সরিয়ে কাস্টম এরর ফাইল স্ক্রিনে আনে।
৩. এরর ফাইলে প্যারামিটার হিসেবে \`reset: () => void\` পাঠানো হয়।
৪. এই \`reset()\` কল করলে রিঅ্যাক্ট ক্র্যাশ হওয়া অংশটিকে পুনরায় কম্পাইল করে লোড করার চেষ্টা করে।
৫. যদি সমস্যাটি ক্ষণস্থায়ী হয় (যেমন ডাটাবেসের ১ সেকেন্ডের জ্যাম), তবে রিস্টার্ট নেওয়ার পর পেজটি আবার সচল হয়ে ওঠে।

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার বাজারের উইজেটে:
- নেটওয়ার্ক ওঠানামা করায় এরর মেসেজ আসলো।
- উইজেটটি ক্র্যাশ করে কাস্টম স্ক্রিনে "আবার চেষ্টা করুন" বাটন দেখাল।
- গ্রাহক বাটনে চাপ দিলেন। \`reset()\` রান হয়ে নতুন করে পিন পাঠাল। নেটওয়ার্ক এখন স্বাভাবিক থাকায় চার্টটি স্ক্রিনে লোড হয়ে গেল।

### উত্তম অনুশীলন
এরর বাউন্ডারিকে পেজের গভীর নেস্টেড ফোল্ডারে রাখুন (যেমন: \`app/dashboard/billing/error.tsx\`), যাতে ড্যাশবোর্ডের বিলিং পেজ ক্র্যাশ করলেও ব্যবহারকারী সাধারণ প্রোফাইল বা অন্যান্য সেটিং পেজগুলো ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
মনে না রাখা যে \`error.tsx\` একই ডিরেক্টরির \`layout.tsx\` ফাইলের এরর ক্যাচ করতে পারে না। লেআউটের ভুল ধরতে হলে প্যারেন্ট বা ওপরে ফোল্ডারের এরর ফাইল কনফিগার করতে হবে।

### Code Example
\`\`\`typescript
// app/dashboard/error.tsx
"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function DashboardErrorBoundary({ error, reset }: Props) {
  return (
    <div className="p-6 border border-yellow-500 rounded bg-yellow-50 text-center">
      <h3 className="font-bold text-lg text-yellow-800">সংযোগে ত্রুটি দেখা দিয়েছে</h3>
      <p className="text-sm mt-1">{error.message}</p>
      
      {/* পুনরায় পেজ রেন্ডারের চেষ্টা করতে reset() ফাংশন কল */}
      <button
        onClick={() => reset()} 
        className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        পুনরায় লোড করুন
      </button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-37',
    title: 'What is global-error.tsx and why is it needed in Next.js App Router?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['error.tsx', 'global-error.tsx', 'Root Layout', 'Exception Handling'],
    enAnswer: 'global-error.tsx is a specialized Client Component used to catch errors that occur in the root layout (layout.tsx). Unlike standard error.tsx files, it wraps the entire application (including the html and body tags) and must define its own HTML framework.',
    bnAnswer: 'global-error.tsx হলো একটি বিশেষ ক্লায়েন্ট কম্পোনেন্ট যা রুট লেআউট (Root layout.tsx) ফাইলে ঘটা এরর ক্যাচ করে। সাধারণ error.tsx এর মতো এটি চাইল্ড লেআউটে সীমাবদ্ধ থাকে না, এটি পুরো অ্যাপকে (html ও body ট্যাগ সহ) র‍্যাপ করে এবং নিজস্ব HTML ট্যাগ ধারণ করে।',
    enExplanation: `### Explanation
A standard \`error.tsx\` file placed inside \`app/error.tsx\` can catch errors in any page component. However, it cannot catch errors thrown inside the **root layout** (\`app/layout.tsx\`) because the root layout resides *above* the error boundary hierarchy.

**\`global-error.tsx\` rules:**
- Must reside in the root of the \`app/\` directory.
- Must define raw \`<html>\` and \`<body>\` tags since the root layout has crashed and is unmounted.
- **Production Only**: Active only in production builds. In development mode, the default Next.js error overlay will still render.

### Real-World Example
If your root layout fetches global site branding and theme configurations from a database, and the database crashes:
- The root layout throws an exception.
- Standard \`app/error.tsx\` fails to catch this.
- \`app/global-error.tsx\` intercepts the crash, rendering a basic plain HTML recovery screen: "Global Application Error. [Restart System]".

### Best Practice
Only use \`global-error.tsx\` to catch extreme root-level failures. Keep it simple and use basic inline styles to guarantee it compiles even if CSS loaders or fonts fail to load.

### Common Mistakes
Creating a \`global-error.tsx\` that tries to import your global headers or layout components, which are already crashed and will recursively re-trigger the error.

### Code Example
\`\`\`typescript
// app/global-error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
        <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600">System Outage</h2>
          <p className="mt-2 text-gray-600">{error.message || 'Critical system failure occurred.'}</p>
          <button
            onClick={() => reset()}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Restart Application
          </button>
        </div>
      </body>
    </html>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রুট ফোল্ডারে থাকা সাধারণ \`error.tsx\` পেজের ভুল ধরতে পারলেও মূল রুট লেআউটের (\`app/layout.tsx\`) ভেতরের এরর ক্যাচ করতে পারে না, কারণ রুট লেআউটের অবস্থান এরর বাউন্ডারি কাঠামোর ওপরে থাকে।

**\`global-error.tsx\` এর নিয়মাবলী:**
- এটি অবশ্যই \`app/\` ডিরেক্টরির মেইন রুট ফোল্ডারে থাকতে হবে।
- এতে অবশ্যই \`<html>\` ও \`<body>\` ট্যাগ ডিক্লেয়ার থাকতে হবে, কারণ এরর আসার সময় রুট লেআউট ডিলিট বা আনমাউন্ট হয়ে যায়।
- এটি কেবল প্রোডাকশন বিল্ডেই দেখা যাবে, লোকাল রান করার সময় নেক্সট জেএস-এর ডিফল্ট এরর ওভারলে স্ক্রিন আসবে।

### বাস্তব-ভিত্তিক উদাহরণ
রুট লেআউট ফাইলে ডাটাবেস থেকে গ্লোবাল থিম ডাটা নিয়ে আসার সময় ডাটাবেস ক্র্যাশ করল:
- রুট লেআউটে এক্সেপশন আসলো।
- সাধারণ \`app/error.tsx\` এটি ফিল্টার করতে ব্যর্থ হবে।
- \`app/global-error.tsx\` এই ক্র্যাশটি আটকে একটি বেসিক প্লেইন এইচটিএমএল পেজ দেখাবে: "সিস্টেম আউট এজ দেখা দিয়েছে। [রিস্টার্ট করুন]"।

### উত্তম অনুশীলন
গ্লোবাল এরর পেজের ডিজাইন অত্যন্ত সাধারণ রাখুন। কোনো জটিল সিএসএস বা বড় হেডার ফাইল ইম্পোর্ট করা থেকে বিরত থাকুন, কারণ ওগুলো নিজেই এররের জন্য ক্র্যাশ করতে পারে।

### সাধারণ ভুলসমূহ
\`global-error.tsx\`-এর ভেতরে পুনরায় গ্লোবাল হেডার বা সাইডবার ইম্পোর্ট করা, যা নিজেই ক্র্যাশড অবস্থায় থাকায় লুপ এরর তৈরি করে।

### Code Example
\`\`\`typescript
// app/global-error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="bn">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
        <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600">গুরুত্বপূর্ণ এরর ঘটেছে!</h2>
          <p className="mt-2 text-gray-600">{error.message || 'সিস্টেমে জটিল ত্রুটি দেখা দিয়েছে।'}</p>
          <button
            onClick={() => reset()}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            রিস্টার্ট করুন
          </button>
        </div>
      </body>
    </html>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-38',
    title: 'Compare layout.tsx and template.tsx in terms of component state preservation and lifecycle.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['layout.tsx', 'template.tsx', 'Lifecycle', 'App Router'],
    enAnswer: 'layout.tsx preserves its state and does not re-mount when navigating between sibling routes. template.tsx creates a completely new component instance on every route change, resetting state, re-executing effects, and re-mounting all elements.',
    bnAnswer: 'layout.tsx নিজের স্টেট সংরক্ষণ করে এবং সাব-রুটে যাওয়ার সময় রিমount হয় না। template.tsx প্রতিবার রুট চেঞ্জের সময় একদম নতুন কম্পোনেন্ট ইনস্ট্যান্স তৈরি করে, ফলে এর স্টেট রিসেট হয় ও সমস্ত ইফেক্ট নতুন করে রান হয়।',
    enExplanation: `### Explanation
Next.js supports two wrapper components for routes:

- **\`layout.tsx\` (Preserved State)**:
  - Default choice. Wrap child pages.
  - When navigating between sibling pages, the layout remains mounted. React state is kept, and CSS transition animations are not broken.
- **\`template.tsx\` (Fresh Instance)**:
  - Similar to layout, but wraps children inside a unique key representing the active URL:
    \`\`\`typescript
    <Template key={pathname}>{children}</Template>
    \`\`\`
  - Navigating sibling routes triggers a complete unmount/remount cycle.
  - **Effects**: \`useEffect\` calls run again on every navigation click.

### Real-World Example
- **Layout Use Case**: A sidebar navigation that tracks open/collapsed accordion menu states. Using a layout preserves menu accordion collapse state when clicking items.
- **Template Use Case**: A page page-enter entrance animation using Framer Motion, or page views tracking hooks. Using a template ensures the animation executes or the track hook fires again on every page click.

### Best Practice
Always prefer \`layout.tsx\` over \`template.tsx\` for layout wrapping. Only use \`template.tsx\` if you explicitly need to reset component state or trigger mount/unmount animations.

### Common Mistakes
Using \`template.tsx\` to declare global context providers. Since the template remounts on every page click, the provider state will be wiped out, forcing database/session refetches.

### Code Example
\`\`\`typescript
// app/dashboard/template.tsx
// Executed fresh on every page route change
"use client";

import { useEffect } from 'react';

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This logs view stats on every sub-route click
    console.log("Template remounted: Page View Logged");
  }, []);

  return <div className="animate-fade-in">{children}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রুট ফাইল সাজাতে নেক্সট জেএস দুটি ভিন্ন ফাইলে র‍্যাপার সাপোর্ট করে:

- **\`layout.tsx\` (স্টেট সংরক্ষিত থাকে):**
  - এটি ডিফল্ট পছন্দ। এর ভেতরে চাইল্ড পেজগুলো নেভিগেট করার সময় এটি আনমাউন্ট (unmount) হয় না। রিঅ্যাক্ট স্টেট ও সিএসএস ট্রানজিশন ঠিক থাকে।
- **\`template.tsx\` (নতুন ইনস্ট্যান্স তৈরি হয়):**
  - এটি লেআউটের মতোই কিন্তু এর ভেতরে একটি ডাইনামিক কি (key) থাকে যা রুট চেঞ্জের সাথে কম্পোনেন্টকে রিস্টার্ট করায়:
    \`\`\`typescript
    <Template key={pathname}>{children}</Template>
    \`\`\`
  - রুট চেঞ্জ হলে এর ভেতরে থাকা সমস্ত কম্পোনেন্ট আনমাউন্ট হয়ে নতুন করে মাউন্ট হয়।
  - **ইফেক্ট**: প্রতি ক্লিকে \`useEffect\` আবার প্রথম থেকে কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
- **লেআউটের ব্যবহার**: একটি সাইডবার নেভিগেশন যার মেনুগুলো ড্রপডাউন আকারে খোলা বা বন্ধ থাকে। লেআউট ব্যবহার করলে পেজ চেঞ্জ হলেও মেনুর খোলা-বন্ধ স্ট্যাটাস অপরিবর্তিত থাকে।
- **টেমপ্লেটের ব্যবহার**: প্রতিটি পেজ লোড হওয়ার সময় ফেড-ইন (Fade-in) অ্যানিমেশন দেখানো বা পেজ ভিউ ট্র্যাকিং হুক রান করা। টেমপ্লেট ব্যবহার করলে প্রতি ক্লিকে অ্যানিমেশন ও ট্র্যাকিং হুক আবার সচল হবে।

### উত্তম অনুশীলন
সাধারণ ব্যবহারের জন্য সর্বদা \`layout.tsx\` ব্যবহার করুন। কেবল তখনই \`template.tsx\` ব্যবহার করুন যখন পেজ ট্রানজিশন অ্যানিমেশন বা রুট চেঞ্জে স্টেট রিসেট করা অত্যন্ত জরুরী।

### সাধারণ ভুলসমূহ
\`template.tsx\`-এর ভেতর রিডাক্স বা থিম প্রোভাইডার সেট করা। এতে প্রতি ক্লিকে টেমপ্লেট নতুন করে তৈরি হওয়ায় প্রোভাইডারের সব ডাটা মুছে ইউজার সেশন রিসেট হয়ে যাবে।

### Code Example
\`\`\`typescript
// app/dashboard/template.tsx
// প্রতিবার পেজ পরিবর্তনের সময় এটি নতুন করে রান হবে
"use client";

import { useEffect } from 'react';

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // প্রতিটি সাব-পেজ ক্লিকের সময় এটি ফায়ার হবে
    console.log("টেমপ্লেট নতুন করে মাউন্ট হয়েছে");
  }, []);

  return <div className="animate-fade-in">{children}</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-39',
    title: 'How do you build custom API endpoints or Route Handlers in Next.js? Describe how to access query parameters and request bodies.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Route Handlers', 'API Routes', 'Request parsing', 'JSON'],
    enAnswer: 'API routes in Next.js are defined as route.ts files. To parse incoming request bodies, use await request.json(). To access query parameters, extract them from the request.nextUrl.searchParams object.',
    bnAnswer: 'Next.js-এ API রুটগুলো route.ts ফাইলে লিখতে হয়। আগত রিকোয়েস্ট বডি পার্স করতে await request.json() ব্যবহার করুন। কুয়েরি প্যারামিটার বা ইউআরএল সার্চ ফিল্টার পড়তে request.nextUrl.searchParams অবজেক্ট থেকে রিড করুন।',
    enExplanation: `### Explanation
Next.js Route Handlers receive a Web standard \`Request\` object:

1. **Reading Request Body**:
   - Call \`await request.json()\` inside HTTP methods like \`POST\` or \`PUT\`.
   - Always wrap this in a \`try-catch\` block, as invalid or empty payloads will crash the json parser.
2. **Reading Query Parameters**:
   - Access \`request.nextUrl.searchParams\` (returns a standard \`URLSearchParams\` interface).
   - Use methods like \`searchParams.get('key')\`.

### Real-World Example
In a user search API endpoint (\`/api/users?status=active\`):
- We read the query status (\`status\`) from the searchParams.
- If it exists, we filter database query and return the matching users in JSON format.

### Best Practice
Always validate the incoming JSON body dynamically using validation libraries like Zod. Handle JSON parsing failure gracefully by catching exceptions and returning an HTTP 400 Bad Request status code.

### Common Mistakes
Trying to read the body of a GET request. GET requests do not contain a payload body. Attempting to call \`request.json()\` in a GET handler will throw an execution error.

### Code Example
\`\`\`typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// POST Endpoint to save user
export async function POST(request: NextRequest) {
  try {
    // 1. Parse request body JSON
    const body = await request.json();
    
    // Simple verification
    if (!body.name || !body.email) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
    }

    // Save to Database
    const newUser = await saveToDatabase(body);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
}

// GET Endpoint to search user
export async function GET(request: NextRequest) {
  // 2. Read query parameters: /api/users?role=admin
  const { searchParams } = request.nextUrl;
  const role = searchParams.get('role');

  const users = await queryUsersByRole(role || 'user');
  return NextResponse.json(users, { status: 200 });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js রুট হ্যান্ডলাররা ওয়েব স্ট্যান্ডার্ডের \`Request\` অবজেক্ট রিসিভ করে:

১. **রিকোয়েস্ট বডি পার্সিং (Request Body):**
- \`POST\` বা \`PUT\` মেথডে আগত ডাটা পড়তে \`await request.json()\` কল করতে হয়।
- রিকোয়েস্টের ডাটা খালি বা ভুল ফরম্যাটের হলে পার্সার ক্র্যাশ করতে পারে, তাই এটিকে \`try-catch\` ব্লকে র‍্যাপ করা উচিত।
২. **কুয়েরি প্যারামিটার রিড (Query Parameters):**
- এপিআই লিংকের কোড পড়তে \`request.nextUrl.searchParams\` ব্যবহার করতে হয়।
- নির্দিষ্ট কি (key) পেতে \`searchParams.get('key')\` মেথড ব্যবহার করুন।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ফিল্টারিং এপিআই-তে (\`/api/users?status=active\`):
- সার্চ প্যারামিটার থেকে \`status\` রিড করে "active" মানটি পড়া হলো।
- ডাটাবেস থেকে শুধু একটিভ ইউজারদের কুয়েরি করে JSON রেসপন্স পাঠানো হলো।

### উত্তম অনুশীলন
রিকোয়েস্টের ডাটা যাচাই করতে জড (Zod) ভ্যালিডেটর ব্যবহার করুন। বডি পার্সিং এরর হলে সাথে সাথে ক্লায়েন্টকে ভুল ডাটার জন্য HTTP ৪০০ রেসপন্স কোড ব্যাক করুন।

### সাধারণ ভুলসমূহ
GET মেথড কুয়েরির ভেতর \`request.json()\` কল করা। GET কুয়েরিতে কোনো বডি থাকে না, তাই এটি কল করলে এপিআই ক্র্যাশ করবে।

### Code Example
\`\`\`typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// POST মেথড: ইউজার সেভ করা
export async function POST(request: NextRequest) {
  try {
    // ১. রিকোয়েস্ট বডি JSON পার্স করা
    const body = await request.json();
    
    if (!body.name || !body.email) {
      return NextResponse.json({ error: 'প্রয়োজনীয় ফিল্ড ফাঁকা রয়েছে' }, { status: 400 });
    }

    const newUser = await saveToDatabase(body);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'ভুল JSON ডাটা' }, { status: 400 });
  }
}

// GET মেথড: ইউজার খোঁজা (/api/users?role=admin)
export async function GET(request: NextRequest) {
  // ২. কুয়েরি প্যারামিটার রিড করা
  const { searchParams } = request.nextUrl;
  const role = searchParams.get('role');

  const users = await queryUsersByRole(role || 'user');
  return NextResponse.json(users, { status: 200 });
}
\`\`\``
  },
  {
    id: 'nextjs-40',
    title: 'How do you handle CORS and configure security headers in Next.js Route Handlers?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Security', 'CORS', 'Route Handlers', 'Headers'],
    enAnswer: 'CORS is handled in Next.js Route Handlers by setting response headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers) in the NextResponse object. For preflight requests, you must handle the OPTIONS HTTP method returning these headers.',
    bnAnswer: 'Next.js রুট হ্যান্ডলারে CORS হ্যান্ডেল করতে NextResponse অবজেক্টের রেসপন্স হেডারে Access-Control-Allow-Origin সহ অন্যান্য প্যারামিটার সেট করা হয়। প্রি-ফ্লাইট (Preflight) রিকোয়েস্ট সফল করতে OPTIONS মেথড ডিফাইন করে হেডার পাঠাতে হয়।',
    enExplanation: `### Explanation
Cross-Origin Resource Sharing (CORS) blocks browsers from calling your API endpoints from other domains unless explicitly permitted.

**Configuring CORS Headers:**
When an external site pings your Route Handler:
1. Browser sends a preflight \`OPTIONS\` request. Your API must return success (204 or 200) with CORS headers.
2. The main request (e.g. \`GET\`, \`POST\`) must also return those same CORS headers.

**Key Headers:**
- \`Access-Control-Allow-Origin\`: Allowed domains (e.g., \`*\` or \`https://app.site.com\`).
- \`Access-Control-Allow-Methods\`: Allowed HTTP methods (\`GET, POST, OPTIONS\`).
- \`Access-Control-Allow-Headers\`: Allowed request headers (\`Content-Type, Authorization\`).

### Real-World Example
You build an authentication widget API used by third-party affiliates.
- When an affiliate site fetches your API, the browser blocks the call due to cross-origin blocks.
- Writing an \`OPTIONS\` handler in your \`route.ts\` resolves the issue and white-lists the affiliate's domain.

### Best Practice
Restrict \`Access-Control-Allow-Origin\` to specific trusted domains inside production environments. Avoid setting it to \`*\` blindly, as it exposes your endpoints to exploitation.

### Common Mistakes
Forgetting to declare an \`OPTIONS\` method in your route handler file. Browsers will fail the preflight check, blocking the subsequent \`GET\` or \`POST\` requests entirely.

### Code Example
\`\`\`typescript
// app/api/public-data/route.ts
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://trusted-site.com',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// 1. Handle Preflight Options request (Mandatory for browsers)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// 2. Handle GET request with CORS headers
export async function GET() {
  const data = { message: "Secure Public Data" };
  
  return NextResponse.json(data, {
    status: 200,
    headers: corsHeaders,
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CORS (Cross-Origin Resource Sharing) ব্রাউজারকে বাইরের অন্য কোনো ডোমেইন থেকে আপনার এপিআই কল করার অ্যাক্সেস ব্লক করে, যদি না আপনি নিজে অনুমতি দেন।

**CORS হেডার কনফিগার করার নিয়ম:**
বাইরের সাইট থেকে কুয়েরি করার সময়:
১. ব্রাউজার প্রথমে একটি প্রি-ফ্লাইট \`OPTIONS\` রিকোয়েস্ট পাঠায়। আপনার এপিআই-কে অবশ্যই হেডারে এলাউড কন্ডিশন সহ ২০৪ বা ২০০ রেসপন্স পাঠাতে হবে।
২. মূল কুয়েরি মেথডগুলোতেও (যেমন: \`GET\`, \`POST\`) এই সেম হেডারগুলো রেসপন্সে পাঠাতে হবে।

**মূল হেডারসমূহ:**
- \`Access-Control-Allow-Origin\`: অনুমোদিত ডোমেইন নাম (যেমন: \`*\` বা \`https://app.site.com\`)।
- \`Access-Control-Allow-Methods\`: ডিক্লেয়ার্ড মেথড (\`GET, POST, OPTIONS\`)।
- \`Access-Control-Allow-Headers\`: কী কী হেডার ডাটা ক্লায়েন্ট পাঠাতে পারবে (যেমন: \`Content-Type, Authorization\`)।

### বাস্তব-ভিত্তিক উদাহরণ
উইজেট এপিআই এন্ডপয়েন্ট তৈরিতে:
- কোনো অ্যাফিলিয়েট পার্টনারের সাইট থেকে আপনার ডোমেইনে ফেচ করার সময় ব্রাউজার CORS এরর দিচ্ছিল।
- আপনার \`route.ts\` ফাইলে একটি \`OPTIONS\` মেথড লিখে পার্টনারের ডোমেইন হেডার ম্যাপ করে দেওয়ায় ব্রাউজার এরর ছাড়াই কানেক্ট হতে পারল।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে সুরক্ষার স্বার্থে \`Access-Control-Allow-Origin\`-এ \`*\` (সব ডোমেইন এলাউড) না দিয়ে নির্দিষ্ট পার্টনার বা নিজের ফ্রন্টএন্ড ডোমেইন দিন।

### সাধারণ ভুলসমূহ
রুট হ্যান্ডলারে \`OPTIONS\` মেথডটি ডিক্লেয়ার করতে ভুলে যাওয়া। এতে ব্রাউজারের প্রি-ফ্লাইট চেক ফেইল করবে এবং পরবর্তী \`GET\`/\`POST\` ব্লক হয়ে যাবে।

### Code Example
\`\`\`typescript
// app/api/public-data/route.ts
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://trusted-site.com',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// ১. প্রি-ফ্লাইট OPTIONS রিকোয়েস্ট হ্যান্ডেল করা (ব্রাউজারের জন্য বাধ্যতামূলক)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// ২. হেডারে CORS যুক্ত করে GET মেথড রেসপন্স পাঠানো
export async function GET() {
  const data = { message: "সুরক্ষিত পাবলিক ডাটা" };
  
  return NextResponse.json(data, {
    status: 200,
    headers: corsHeaders,
  });
}
\`\`\``
  },
  {
    id: 'nextjs-41',
    title: 'What is generateStaticParams and how does it optimize dynamic route generation during build time?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['generateStaticParams', 'Build Optimization', 'SSG', 'Dynamic Routes'],
    enAnswer: 'generateStaticParams is used in the App Router to define the list of dynamic route parameters to be pre-rendered at build time. It replaces getStaticPaths from the Pages Router, compiling dynamic pages statically and improving server response speed.',
    bnAnswer: 'generateStaticParams ডায়নামিক রুটের প্যারামিটারগুলোর একটি তালিকা ডিক্লেয়ার করে, যা বিল্ড করার সময়ই পেজগুলোকে স্ট্যাটিক হিসেবে প্রাক-রেন্ডার করে রাখে। এটি Pages Router-এর getStaticPaths কে প্রতিস্থাপন করে এবং সার্ভারের রেসপন্স স্পিড বাড়ায়।',
    enExplanation: `### Explanation
When you use a dynamic route like \`/blog/[slug]\`, Next.js normally renders it on-demand (SSR) because it doesn't know the list of slugs at build time.

**How \`generateStaticParams\` Optimizes This:**
- You export a function named \`generateStaticParams\` in the page file.
- Inside, you query your database or API to get all available slugs (e.g. 100 blog posts).
- Next.js reads these slugs during \`next build\` and compiles all 100 posts into static HTML files.
- **Deduplication**: Next.js automatically dedupes database queries inside the function and the main component.

### Real-World Example
In a product catalog site with 500 fixed items:
- Using dynamic rendering means 500 database pings for every user request.
- Using \`generateStaticParams\` compiles all 500 product views at build time. Users load product pages instantly from the CDN, and the database handles 0 queries.

### Best Practice
Use this for dynamic paths where the list of parameters is finite and changes rarely (e.g. blog posts, documentation paths). Combine with \`dynamicParams = true\` (default) to allow new, unbuilt pages to render on-demand and cache dynamically.

### Common Mistakes
Using \`generateStaticParams\` for routes with millions of combinations (e.g. user search result combinations). This will cause the build step to hang for hours and exhaust server disk space.

### Code Example
\`\`\`typescript
// app/products/[id]/page.tsx
type Props = {
  params: Promise<{ id: string }>;
};

// 1. Declare dynamic parameters to compile at build time
export async function generateStaticParams() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  // Return array of objects matching the route param key
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

// 2. Standard page component
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(\`https://api.example.com/products/\${id}\`);
  const product = await res.json();

  return (
    <div className="p-6">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডায়নামিক রুট \`/blog/[slug]\` ব্যবহার করলে নেক্সট জেএস সাধারণত প্রতিবার লিংকে ঢোকার সময় অন-ডিমান্ড (SSR) রেন্ডার করে, কারণ কোন কোন পোস্ট আছে তা বিল্ড করার সময় জানা থাকে না।

**\`generateStaticParams\` কীভাবে অপ্টিমাইজ করে:**
- পেজ ফাইলে \`generateStaticParams\` নামক ফাংশন এক্সপোর্ট করতে হয়।
- এই ফাংশনের ভেতরে ডাটাবেস থেকে সব পোস্টের লিস্ট কুয়েরি করা হয় (যেমন ১০০টি ব্লগের স্ল্যাগ)।
- বিল্ড দেওয়ার সময় নেক্সট জেএস এই স্ল্যাগগুলো পড়ে ১০০টি ব্লগের জন্য ১০০টি আলাদা স্ট্যাটিক HTML ফাইল বিল্ড ফোল্ডারে তৈরি করে রাখে।
- এতে ডুপ্লিকেট কুয়েরি দূর হয়ে সাইটের স্পিড অনেক বাড়ে।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাক্ট ক্যাটালগে ৫০০টি নির্দিষ্ট আইটেম আছে:
- ডাইনামিক রেন্ডারিং ব্যবহার করলে ৫০০টি প্রোডাক্টে প্রতি ক্লিকের জন্য ডাটাবেস কুয়েরি হবে ৫০০ বার।
- \`generateStaticParams\` ব্যবহার করলে ৫০০টি প্রোডাক্ট পেজ বিল্ডের সময়ই রেডি থাকে। ইউজার ক্লিক করামাত্র কোনো ল্যাটেন্সি ছাড়া সিডিএন থেকে কন্টেন্ট লোড হয় ও ডাটাবেসে ০টি কুয়েরি পড়ে।

### উত্তম অনুশীলন
যেসব ডায়নামিক পাথের সংখ্যা নির্দিষ্ট এবং ঘন ঘন পরিবর্তন হয় না (যেমন ব্লগ পোস্ট বা ক্যাটাগরি) সেগুলোতে এটি ব্যবহার করুন। নতুন পোস্টের জন্য অন-ডিমান্ড ক্যাশিং সচল রাখতে \`dynamicParams = true\` মুড ব্যবহার করুন।

### সাধারণ ভুলসমূহ
লক্ষাধিক ডাটার কম্বিনেশন (যেমন সার্চ রেজাল্ট বা কাস্টম ইউজার প্রোফাইল) ফিল্টারের জন্য এটি ব্যবহার করা। এটি বিল্ড টাইমকে দীর্ঘায়িত করে মেমোরি ক্র্যাশ ঘটাবে।

### Code Example
\`\`\`typescript
// app/products/[id]/page.tsx
type Props = {
  params: Promise<{ id: string }>;
};

// ১. বিল্ডের সময় প্রাক-রেন্ডার করার জন্য প্যারামিটার অ্যারে তৈরি করা
export async function generateStaticParams() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  // রিটার্ন অ্যারের অবজেক্ট কী-টি অবশ্যই রুট ফোল্ডারের নামের ([id]) সাথে মিলতে হবে
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

// ২. সাধারণ পেজ কম্পোনেন্ট
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(\`https://api.example.com/products/\${id}\`);
  const product = await res.json();

  return (
    <div className="p-6">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-42',
    title: 'How do you generate dynamic metadata in Next.js using the generateMetadata function?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Metadata', 'SEO', 'generateMetadata', 'App Router'],
    enAnswer: 'To generate dynamic metadata, export an async generateMetadata function from your page.tsx. It receives the route params as a prop, fetches the required database record, and returns a Metadata object containing dynamic title, description, and OpenGraph configs.',
    bnAnswer: 'ডাইনামিক মেটাডাটা তৈরি করতে page.tsx থেকে async generateMetadata ফাংশন এক্সপোর্ট করতে হয়। এটি প্রপস হিসেবে রুটের প্যারামিটার রিসিভ করে ডাটাবেস কুয়েরি চালায় এবং ডাইনামিক টাইটেল, ডেসক্রিপশন ও ওজি (OG) ইমেজ সমৃদ্ধ মেটাডাটা অবজেক্ট রিটার্ন করে।',
    enExplanation: `### Explanation
Search engine crawlers rely on page-specific metadata to index dynamic content accurately.

**Rules of \`generateMetadata\`:**
- Must reside in Server Components only (layouts or pages).
- Receives two arguments:
  - \`props\`: Contains \`params\` and \`searchParams\` (both are Promises in Next.js 15).
  - \`parent\`: A promise containing resolved metadata from parent layout folders (useful for merging properties).
- Resolves and fetches dependencies before the page begins rendering.

### Real-World Example
In a user-driven community forum:
- When a user visits \`/threads/best-js-frameworks\`, search engines need to read the specific thread topic and content description.
- Using \`generateMetadata\`, you load the forum thread details from MongoDB, read the title "Best JS Frameworks", and set it as the HTML head page title.

### Best Practice
Structure meta configurations to define fallbacks. Since Next.js automatically deduplicates fetch requests, query the database inside \`generateMetadata\` using the exact same fetch code used inside the page component.

### Common Mistakes
Accessing \`params\` or \`searchParams\` synchronously in Next.js 15+ without using \`await\`, which triggers compile warnings and execution blocks.

### Code Example
\`\`\`typescript
// app/threads/[id]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// Export generateMetadata function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // Next.js deduplicates this fetch call automatically
  const res = await fetch(\`https://api.example.com/threads/\${id}\`);
  const thread = await res.json();

  return {
    title: \`\${thread.title} | Tech Forum\`,
    description: thread.previewText,
    openGraph: {
      title: thread.title,
      description: thread.previewText,
      images: [{ url: thread.authorAvatar }]
    }
  };
}

export default function ThreadPage() {
  return <div className="p-6">Thread conversation details...</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্চ ইঞ্জিনগুলো ডাইনামিক কন্টেন্টগুলোকে সঠিকভাবে ইনডেক্স করতে ডাইনামিক মেটাডাটার ওপর নির্ভর করে।

**\`generateMetadata\` এর নিয়মাবলী:**
- এটি কেবল সার্ভার কম্পোনেন্ট ফাইলে (layout বা page) এক্সপোর্ট করা যায়।
- এটি দুটি প্যারামিটার রিড করে:
  - \`props\`: এর ভেতর \`params\` ও \`searchParams\` থাকে (নেক্সট ১৫-তে দুটিই প্রোমিজ)।
  - \`parent\`: প্যারেন্ট লেআউটের রিজলভ হওয়া মেটাডাটার প্রোমিজ।
- পেজ রেন্ডার হওয়ার আগেই এটি ডাটা ফেচিং সম্পন্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফোরাম সাইটে:
- গ্রাহক যখন \`/threads/best-js-frameworks\` লিংকে যাবেন, সার্চ ইঞ্জিনের ক্রলারের পেজের টাইটেল ও থ্রেডের বিষয়বস্তুর বর্ণনা দেখতে হবে।
- \`generateMetadata\` ব্যবহার করে মঙ্গোডিবি থেকে ওই থ্রেডের ডাটা লোড করে শিরোনাম "Best JS Frameworks" নিয়ে HTML টাইটেলে বসিয়ে দেওয়া যায়।

### উত্তম অনুশীলন
টাইটেল বা ডেসক্রিপশনের জন্য রুট ফাইলে ফলব্যাক সেট রাখুন। ফেচ রিকোয়েস্ট অপ্টিমাইজ করতে পেজ ফাইল এবং মেটাডাটা ফাইলে হুবহু একই ফেচ এপিআই লিংক ব্যবহার করুন, যাতে নেক্সট জেএস কুয়েরি ক্যাশ রিইউজ করতে পারে।

### সাধারণ ভুলসমূহ
নেক্সট জেএস ১৫+ ভার্সনে \`await params\` ছাড়াই সরাসরি সিঙ্ক্রোনাস কোডে প্যারামিটার রিড করতে যাওয়া।

### Code Example
\`\`\`typescript
// app/threads/[id]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// generateMetadata ফাংশন এক্সপোর্ট করা
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // নেক্সট জেএস এই ফেচ রিকোয়েস্টটি ডুপ্লিকেট ফিল্টার করে নেবে
  const res = await fetch(\`https://api.example.com/threads/\${id}\`);
  const thread = await res.json();

  return {
    title: \`\${thread.title} | টেক ফোরাম\`,
    description: thread.previewText,
    openGraph: {
      title: thread.title,
      description: thread.previewText,
      images: [{ url: thread.authorAvatar }]
    }
  };
}

export default function ThreadPage() {
  return <div className="p-6">থ্রেডের বিস্তারিত আলোচনা...</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-43',
    title: 'Detail the four caching layers in Next.js App Router and how they operate.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Caching', 'Performance', 'App Router', 'Data Cache'],
    enAnswer: 'The four caching layers in Next.js are: 1) Request Memoization (caches fetch requests within a single render pass), 2) Data Cache (persists data across server requests and users), 3) Full Route Cache (caches HTML/RSC payloads on the server), and 4) Router Cache (client-side cache of page segments in browser memory).',
    bnAnswer: 'Next.js-এর ৪টি ক্যাশিং স্তর হলো: ১) Request Memoization (একই রেন্ডার পাসের ভেতর ফেচ রিকোয়েস্ট ক্যাশ করে), ২) Data Cache (সার্ভার রিকোয়েস্ট ও ইউজারদের মাঝে ডাটা ক্যাশ রাখে), ৩) Full Route Cache (সার্ভারে তৈরি হওয়া HTML/RSC ক্যাশ করে), এবং ৪) Router Cache (ব্রাউজার মেমোরিতে পেজ সেগমেন্ট ক্যাশ করে)।',
    enExplanation: `### Explanation
Next.js optimizes performance at every stage of the request-response lifecycle:

1. **Request Memoization (React level)**:
   - Caches duplicate \`fetch\` requests with identical URLs and options during a single render pass (e.g. sharing data between \`layout\`, \`page\`, and \`metadata\`).
   - Lifetime: Exists only for the duration of the request.
2. **Data Cache (Next.js level)**:
   - Persists data fetched from external APIs across requests and users.
   - Lifetime: Persistent until you explicitly revalidate or bypass it (\`cache: 'no-store'\`).
3. **Full Route Cache (Next.js level)**:
   - Caches compiled HTML and React Server Component (RSC) payloads of static routes on the server.
   - Lifetime: Invalidated when data cache changes or after new builds.
4. **Router Cache (Client browser level)**:
   - Caches page segments in the client browser memory when links are prefetched.
   - Lifetime: Cleared on page refresh or after a timeout (default 30s for dynamic routes, 5m for static routes).

### Real-World Example
When a user navigates from Dashboard to User Settings:
- Browser loads settings instantly because the route was prefetched in the **Router Cache**.
- The server retrieves user info from the **Data Cache** instead of making a slow external API lookup.
- If the layout also queries user roles, it reuses the resolved promise from **Request Memoization** instead of sending duplicate queries.

### Best Practice
Understand the differences. If you want updates to reflect instantly for users, use \`revalidateTag\` to invalidate the **Data Cache**, which automatically triggers eviction of the **Full Route Cache**.

### Common Mistakes
Assuming that client browser refreshes trigger data cache bypass. Browsers refreshing only resets the **Router Cache**; the server still serves data from the persistent **Data Cache** unless revalidated.

### Code Example
\`\`\`typescript
// Visualizing Cache Configuration:
// 1. Request Memoization: Automatic for identical fetches in a single request

// 2. Data Cache: Persistent unless bypassed or revalidated
const data = await fetch('https://api.site.com/items', {
  cache: 'force-cache', // Default: Saved to Data Cache
  next: { revalidate: 3600 } // Evict from Data Cache after 1 hour
});

// 3. Opting out of Data Cache and Full Route Cache entirely
const liveData = await fetch('https://api.site.com/real-time', {
  cache: 'no-store' // Dynamic rendering: bypasses Data Cache
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস তার রিকোয়েস্ট-রেসপন্স লাইফসাইকেলের ৪টি স্তরে ক্যাশ করে অ্যাপের গতি বজায় রাখে:

১. **Request Memoization (রিঅ্যাক্ট লেভেল):**
- একই পেজ রেন্ডার চলার সময় ডুপ্লিকেট \`fetch\` কলগুলোকে ক্যাশ করে (যেমন লেআউট ও পেজ ফাইলে একই এপিআই লিংক থাকলে প্রমিজ শেয়ার করে)।
- স্থায়িত্ব: কেবল ওই রিকোয়েস্ট চলাকালীন সময়েই থাকে।
২. **Data Cache (নেক্সট জেএস লেভেল):**
- সার্ভার টু সার্ভার ও বিভিন্ন ইউজারের মাঝে ডাটা ক্যাশ ধরে রাখে।
- স্থায়িত্ব: যতক্ষণ না আপনি ম্যানুয়ালি রিসেট বা রিভ্যালিডেট করছেন।
৩. **Full Route Cache (সার্ভার লেভেল):**
- স্ট্যাটিক পেজের কম্পাইল হওয়া HTML ও রিঅ্যাক্ট সার্ভার পেলোড (RSC) ফিজিক্যাল ফাইল হিসেবে সার্ভার ড্রাইভে সেভ করে।
- স্থায়িত্ব: ডাটা ক্যাশ পরিবর্তন হলে বা নতুন করে বিল্ড দিলে মুছে যায়।
৪. **Router Cache (ব্রাউজার লেভেল):**
- লিংক প্রি-ফেচ হওয়ার সময় ব্রাউজার মেমোরিতে পেজের আংশিক কন্টেন্ট ক্যাশ করে।
- স্থায়িত্ব: পেজ রিফ্রেশ করলে মুছে যায় (ডিফল্ট ৩০ সেকেন্ড ডাইনামিক পেজের জন্য, ৫ মিনিট স্ট্যাটিক পেজের জন্য)।

### বাস্তব-ভিত্তিক উদাহরণ
গ্রাহক ড্যাশবোর্ড থেকে সেটিংস পেজে গেলেন:
- ব্রাউজার কোনো ল্যাগ ছাড়া পেজটি দেখাবে কারণ সেটি ওটার **Router Cache**-এ প্রাক-ডাউনলোড করা ছিল।
- পেজের ডাটা সার্ভার ডাটাবেস থেকে না এসে সরাসরি **Data Cache** থেকে চলে আসবে।
- লেআউট ও পেজ ফাইল উভয়েই ইউজারের রোল চেক করায় এটি ডাটা **Request Memoization** থেকে রিইউজ করবে।

### উত্তম অনুশীলন
পার্থক্যগুলো বুঝুন। ইউজারের সামনে লাইভ ডাটা শো করতে চাইলে \`revalidateTag\` ব্যবহার করে **Data Cache** পরিষ্কার করুন, যা স্বয়ংক্রিয়ভাবে **Full Route Cache** ক্যাশও আপডেট করবে।

### সাধারণ ভুলসমূহ
মনে করা যে ব্রাউজার রিফ্রেশ করলে ডাটাবেসের ডাটা ক্যাশ ক্লিয়ার হবে। ব্রাউজার রিফ্রেশ করলে কেবল **Router Cache** মুছবে, ডাটাবেসের **Data Cache** ঠিকই সার্ভার ফাইলে অপরিবর্তিত থাকবে।

### Code Example
\`\`\`typescript
// ক্যাশ কনফিগারেশনের উদাহরণ:
// ১. Request Memoization: এটি নেক্সট জেএস নিজে থেকেই হ্যান্ডেল করে।

// ২. Data Cache: রিভ্যালিডেশন কন্ডিশন সেট করা
const data = await fetch('https://api.site.com/items', {
  cache: 'force-cache', // ডিফল্ট: ডাটা ক্যাশে সেভ থাকবে
  next: { revalidate: 3600 } // ১ ঘণ্টা পর ক্যাশ খালি হবে
});

// ৩. ডাটা ক্যাশ ও ফুল রুট ক্যাশ সম্পূর্ণ বাইপাস করা
const liveData = await fetch('https://api.site.com/real-time', {
  cache: 'no-store' // ডাইনামিক রেন্ডারিং ট্রিগার করবে
});
\`\`\``
  },
  {
    id: 'nextjs-44',
    title: 'How do you opt out of caching dynamically for specific routes or fetch requests in the App Router?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Caching', 'Bypassing Cache', 'Dynamic Rendering', 'Data Fetching'],
    enAnswer: 'To opt out of caching, you can pass cache: "no-store" inside fetch() options, use dynamic route configuration constants like export const dynamic = "force-dynamic", or import and use dynamic APIs like cookies() or headers().',
    bnAnswer: 'ক্যাশিং বন্ধ করতে fetch()-এর ভেতর cache: "no-store" ব্যবহার করা যায়, অথবা পেজ ফাইলে export const dynamic = "force-dynamic" ডিক্লেয়ার করা যায়, কিংবা cookies() বা headers()-এর মতো ডাইনামিক এপিআই কল করা যায়।',
    enExplanation: `### Explanation
Next.js aggressively caches pages and requests by default to maximize performance. Bypassing caching dynamically is necessary for real-time dashboards.

**Methods to Opt Out of Caching:**
1. **Per-Fetch Level**:
   \`\`\`typescript
   fetch('url', { cache: 'no-store' })
   \`\`\`
   This guarantees that this specific fetch always queries the live API.
2. **Segment Level (Route Config)**:
   Export a configuration constant at the top of layout or page files:
   \`\`\`typescript
   export const dynamic = 'force-dynamic';
   \`\`\`
   This forces the entire page route and all nested fetch requests inside it to run dynamically on every request.
3. **Dynamic APIs Usage**:
   Calling \`cookies()\` or \`headers()\` in Server Components automatically switches the route rendering mode to Dynamic SSR, skipping static caches.

### Real-World Example
In a stock portfolio app showing currency exchange rates:
- Rates change every second.
- We must bypass caching by adding \`export const dynamic = 'force-dynamic'\` at the top of the currency page file to guarantee that users get live currency values on every load.

### Best Practice
Opt out of caching at the most granular level possible. Prefer using \`cache: 'no-store'\` on specific slow API fetch requests instead of forcing the entire page route to render dynamically with \`force-dynamic\`, as it keeps static layouts fast.

### Common Mistakes
Forgetting that Mongoose or standard ORM database queries (e.g. \`db.users.find()\`) are not native fetch requests and do not support fetch caching. To bypass query caching issues, configure the segment config \`force-dynamic\` on the page file.

### Code Example
\`\`\`typescript
// app/currency/page.tsx
// Force this route to render dynamically on every request (opts out of SSG/ISR)
export const dynamic = 'force-dynamic';

export default async function CurrencyPage() {
  // Bypasses data cache. Queries live exchange API
  const res = await fetch('https://api.example.com/rates', {
    cache: 'no-store' 
  });
  const rates = await res.json();

  return (
    <div className="p-6">
      <h3>Live USD to BDT: {rates.USD_BDT}</h3>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস পারফরম্যান্স বাড়াতে ডিফল্টভাবে সমস্ত পেজ ও ফেচ রিকোয়েস্ট ক্যাশ করে রাখে। রিয়েল-টাইম ড্যাশবোর্ড তৈরির জন্য ক্যাশ বাইপাস করা জরুরি।

**ক্যাশ অপ্ট-আউট (Opt-out) করার পদ্ধতিসমূহ:**
১. **ফেচ স্তরে (Per-Fetch)**:
   \`\`\`typescript
   fetch('url', { cache: 'no-store' })
   \`\`\`
   এটি নিশ্চিত করে যে এই নির্দিষ্ট রিকোয়েস্টটি ক্যাশ থেকে ডাটা না নিয়ে সরাসরি এপিআই সার্ভারে হিট করবে।
২. **রুট পাথ স্তরে (Segment Config)**:
   পেজ বা লেআউট ফাইলের ওপরে কনফিগারেশন ভ্যারিয়েবল ডিক্লেয়ার করা:
   \`\`\`typescript
   export const dynamic = 'force-dynamic';
   \`\`\`
   এটি পুরো পেজ ও এর ভেতরের সমস্ত কুয়েরিকে ডাইনামিক রেন্ডারিং মোডে কনভার্ট করে।
৩. **ডাইনামিক এপিআই**:
   সার্ভার ফাইলে \`cookies()\` বা \`headers()\` রিড করলে নেক্সট জেএস নিজে থেকেই পেজটির গ্লোবাল ক্যাশ এড়িয়ে চলে।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ কারেন্সি এক্সচেঞ্জ রেট পেজে:
- টাকার মান প্রতি সেকেন্ডে পরিবর্তিত হতে পারে।
- কারেন্সি পেজ ফাইলের শুরুতে \`export const dynamic = 'force-dynamic'\` লিখে রাখা হলো, যাতে প্রতিবার রিকোয়েস্ট এলে ইউজার একদম আপ-টু-ডেট ডলারের রেট দেখতে পায়।

### উত্তম অনুশীলন
যতটা সম্ভব সুনির্দিষ্ট (granular) স্তরে ক্যাশ বন্ধ করুন। পুরো পেজকে ডাইনামিক করার চেয়ে কেবল যে এপিআই কুয়েরিটি লাইভ হওয়া দরকার তার গায়ে \`cache: 'no-store'\` বসান, এতে সাইটের লেআউটটি ক্যাশে ফাস্ট লোড হবে।

### সাধারণ ভুলসমূহ
মঙ্গুস বা ডাটাবেস কুয়েরির ওপর (যেমন: \`User.find()\`) সরাসরি ফেচ ক্যাশ কাজ করে না। তাই ডাটাবেসের ডাটা সরাসরি রিড করার সময় ক্যাশ এড়াতে পেজে \`force-dynamic\` ডিক্লেয়ার করে রাখা ভালো।

### Code Example
\`\`\`typescript
// app/currency/page.tsx
// পুরো পেজটির স্ট্যাটিক ক্যাশ বন্ধ করে প্রতি রিকোয়েস্টে লাইভ লোড সচল করা
export const dynamic = 'force-dynamic';

export default async function CurrencyPage() {
  // এপিআই থেকে সরাসরি রিয়েল-টাইম রেট লোড করা
  const res = await fetch('https://api.example.com/rates', {
    cache: 'no-store' 
  });
  const rates = await res.json();

  return (
    <div className="p-6">
      <h3>লাইভ ইউএসডি টু বিডিটি: {rates.USD_BDT}</h3>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-45',
    title: 'How do you handle form validation and submit states in Server Actions using useActionState and useFormStatus?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Server Actions', 'useActionState', 'useFormStatus', 'Forms'],
    enAnswer: 'useActionState (formerly useFormState) handles the action response state (e.g. success, error messages) returned by a Server Action. useFormStatus is used inside child components of the form to read the pending state (submitting loading state) without manually tracking state.',
    bnAnswer: 'useActionState (পূর্বে useFormState) সার্ভার অ্যাকশন থেকে আসা রেসপন্স স্টেট (যেমন: সফল বা ভুলের মেসেজ) সংরক্ষণ করে। useFormStatus ফর্মের চাইল্ড কম্পোনেন্টের ভেতর থেকে পেন্ডিং স্ট্যাটাস (সাবমিট হওয়ার লোডিং স্টেট) পড়তে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
React 19 hooks simplify form submissions inside Next.js Client Components:

1. **\`useActionState\`**:
   - Syntactically: \`const [state, formAction, isPending] = useActionState(actionFn, initialState);\`
   - Captures errors, validation messages, or success values returned by the Server Action dynamically.
2. **\`useFormStatus\`**:
   - Syntactically: \`const { pending } = useFormStatus();\`
   - Must be invoked inside a component that is nested **inside** the \`<form>\` tags. It cannot read the status if declared in the same component containing the form tag.

### Real-World Example
In a signup form:
- User clicks "Sign Up".
- The submit button uses \`useFormStatus\` to display a loading spinner and disable itself.
- If email is taken, the Server Action returns \`{ error: "Email already exists" }\`, which \`useActionState\` captures and renders in red text.

### Best Practice
Keep Server Actions clean of direct throw errors when handling validations. Instead, return an object containing status codes and message logs (e.g., \`{ success: false, errors: [...] }\`) so \`useActionState\` can render them gracefully.

### Common Mistakes
Declaring \`const { pending } = useFormStatus()\` in the same component file containing the \`<form>\` tag. This fails because \`useFormStatus\` only tracks the status of its parent context form.

### Code Example
\`\`\`typescript
// app/components/SignupForm.tsx
"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signupUser } from '../actions';

// 1. Separate Submit Button to utilize useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="p-2 bg-blue-600 text-white rounded disabled:bg-gray-400">
      {pending ? 'Registering...' : 'Register'}
    </button>
  );
}

export default function SignupForm() {
  // 2. Setup useActionState hook
  const [state, formAction] = useActionState(signupUser, null);

  return (
    <form action={formAction} className="p-6 space-y-4 max-w-sm">
      <input name="email" type="email" required placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" required placeholder="Password" className="border p-2 w-full" />
      
      {/* Display errors captured from Server Action */}
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      
      <SubmitButton />
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট ১৯ এর নতুন ফর্ম হুকগুলো নেক্সট জেএস-এর ক্লায়েন্ট ফর্মে ডাটা হ্যান্ডেল করা সহজ করে:

১. **\`useActionState\`**:
- ফর্মুলা: \`const [state, formAction, isPending] = useActionState(actionFn, initialState);\`
- এটি সার্ভার অ্যাকশন থেকে রিটার্ন করা ভ্যালিডেশন এরর বা সাকসেস মেসেজ ক্যাচ করে স্টেটে সেভ করে।
২. **\`useFormStatus\`**:
- ফর্মুলা: \`const { pending } = useFormStatus();\`
- এটি বাটন ডিজেবল করতে বা লোডিং স্পিনার দেখাতে পেন্ডিং (pending) স্ট্যাটাস দেয়। এটি অবশ্যই ফর্মার \`<form>\` ট্যাগের **ভেতরে** থাকা কোনো চাইল্ড কম্পোনেন্ট ফাইলে কল করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
রেজিস্ট্রেশন ফর্মে:
- ইউজার সাবমিট বাটনে ক্লিক করল।
- বাটনটি \`useFormStatus\` থেকে \`pending: true\` পেয়ে টেক্সট বদলে "Registering..." দেখাল ও বাটনটি ডিজেবল করল।
- সার্ভার চেক করে ইমেইল ডুপ্লিকেট পাওয়ায় \`{ error: "ইমেইল ইতিমধ্যে ব্যবহৃত হয়েছে" }\` রিটার্ন করল, যা পেজে লাল কালারে ভেসে উঠল।

### উত্তম অনুশীলন
সার্ভার অ্যাকশনের কোডে সরাসরি ক্র্যাশ এরর থ্রো না করে রিকোয়েস্ট ট্রাই-ক্যাচ করে সুন্দর এরর অবজেক্ট ব্যাক করুন (যেমন: \`{ success: false, error: '...' }\`), যাতে ইউজার ডিরেক্ট স্ক্রিনে এরর মেসেজ দেখতে পান।

### সাধারণ ভুলসমূহ
\`useFormStatus\` হুকটি যে কম্পোনেন্টে \`<form>\` ট্যাগ আছে সেই ফাইলে ডিক্লেয়ার করা। এটি কাজ করবে না কারণ এটি কেবল তার ওপরের প্যারেন্ট ডক চেক করতে পারে। বাটনটিকে আলাদা কম্পোনেন্টে নিয়ে ফর্মার ভেতর ইম্পোর্ট করুন।

### Code Example
\`\`\`typescript
// app/components/SignupForm.tsx
"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signupUser } from '../actions';

// ১. সাবমিট বাটন আলাদা কম্পোনেন্টে রাখা হলো যাতে useFormStatus কাজ করে
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="p-2 bg-blue-600 text-white rounded disabled:bg-gray-400">
      {pending ? 'অপেক্ষা করুন...' : 'রেজিস্ট্রেশন'}
    </button>
  );
}

export default function SignupForm() {
  // ২. useActionState কনফিগার করা
  const [state, formAction] = useActionState(signupUser, null);

  return (
    <form action={formAction} className="p-6 space-y-4 max-w-sm">
      <input name="email" type="email" required placeholder="ইমেইল" className="border p-2 w-full" />
      <input name="password" type="password" required placeholder="পাসওয়ার্ড" className="border p-2 w-full" />
      
      {/* সার্ভার অ্যাকশন থেকে আসা এরর মেসেজ স্ক্রিনে দেখানো */}
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      
      <SubmitButton />
    </form>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-46',
    title: 'Explain how to implement optimistic UI updates using the useOptimistic hook with Server Actions.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['useOptimistic', 'React Hooks', 'Server Actions', 'UX'],
    enAnswer: 'useOptimistic is a React hook that lets you update the UI optimistically before a Server Action completes. It temporarily renders the expected success state immediately, then updates to the actual server response once the action resolves, preventing network latency lag.',
    bnAnswer: 'useOptimistic হলো একটি রিঅ্যাক্ট হুক যা সার্ভার অ্যাকশন সম্পূর্ণ হওয়ার আগেই ইউআই (UI) আপডেট করে দেয়। এটি সাময়িকভাবে সফল হওয়ার সম্ভাব্য ডিজাইনটি সাথে সাথে স্ক্রিনে দেখায় এবং সার্ভারের আসল রেসপন্স চলে এলে ব্যাকগ্রাউন্ডে তা আসল মান দিয়ে আপডেট করে।',
    enExplanation: `### Explanation
When a user interacts with a feature (like hitting "Like" on a post), waiting for a round-trip database write call creates a latency lag (e.g. 300ms where nothing happens).

**How useOptimistic Works:**
1. The user triggers the action.
2. \`useOptimistic\` intercepts this and updates the local state immediately (e.g., setting like count from 10 to 11).
3. The Server Action executes in the background.
4. If the server write succeeds, Next.js updates the page cache, and the optimistic state transitions to the final server state.
5. If the server write fails, the optimistic state automatically rolls back to the original value (10), alerting the user.

### Real-World Example
In a messaging app:
- When a user sends a message, they expect to see it in the chat box instantly.
- Using \`useOptimistic\`, the message appears in the UI with a gray "sending" indicator. If the server registers the message, the indicator disappears. If the connection fails, the message vanishes with an error warning.

### Best Practice
Only use optimistic updates for simple, high-frequency actions (like likes, comments, task checkmarks). Avoid it for critical transactions like payment checkouts where false confirmations can be misleading.

### Common Mistakes
Forgetting to handle the error fallback. If you perform an optimistic update but do not catch exceptions in your Server Action, the state will not roll back properly, leaving a broken UI state.

### Code Example
\`\`\`typescript
// app/components/Chat.tsx
"use client";

import { useOptimistic, startTransition } from 'react';
import { sendMessage } from '../actions';

type Message = { id: string; text: string; sending?: boolean };

export default function Chat({ initialMessages }: { initialMessages: Message[] }) {
  // Setup useOptimistic hook
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    initialMessages,
    (state, newMessageText: string) => [
      ...state,
      { id: Date.now().toString(), text: newMessageText, sending: true } // Temporary state
    ]
  );

  const formAction = async (formData: FormData) => {
    const text = formData.get('message') as string;
    
    // Trigger optimistic UI update inside startTransition
    startTransition(() => {
      addOptimisticMessage(text);
    });

    // Execute background Server Action write
    await sendMessage(text);
  };

  return (
    <div className="p-6">
      <div className="space-y-2">
        {optimisticMessages.map(m => (
          <div key={m.id} className={\`p-2 rounded \${m.sending ? 'opacity-50 bg-gray-100' : 'bg-blue-100'}\`}>
            {m.text} {m.sending && '(sending...)'}
          </div>
        ))}
      </div>
      <form action={formAction} className="mt-4 flex gap-2">
        <input name="message" type="text" required className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white p-2">Send</button>
      </form>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্যবহারকারী যখন কোনো পোস্টে লাইক দেন বা কমেন্ট সাবমিট করেন, ডাটাবেস রাইট হয়ে ঘুরে আসতে ৩০০ মি.সে. এর মতো সময় লাগতে পারে। এ সময় স্ক্রিন ফিক্সড থাকলে ইউজার মনে করেন সাইট স্লো।

**useOptimistic এর মেকানিজম:**
১. ইউজার লাইক বাটনে ক্লিক করল।
২. \`useOptimistic\` হুকটি সাথে সাথে লাইকের সংখ্যা ১০ থেকে বাড়িয়ে ১১ করে স্ক্রিনে দেখায়।
৩. ব্যাকগ্রাউন্ডে সার্ভার অ্যাকশন চলতে থাকে।
৪. ডাটা সেভ সফল হলে লাইক ১১ তেই স্থায়ী হয়।
৫. যদি নেটওয়ার্ক ফেইল করে তবে ডাটা রিস্টোর হয়ে স্বয়ংক্রিয়ভাবে লাইক সংখ্যা আবার ১০-এ নেমে যায় ও ইউজারকে সতর্কবার্তা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
মেসেঞ্জার চ্যাট অ্যাপে:
- ইউজার মেসেজ লিখে এন্টার চাপলে সে চায় সাথে সাথে মেসেজটি বক্সে শো করুক।
- \`useOptimistic\` হুক ব্যবহার করায় মেসেজটি বক্সে আবছা টেক্সট বা "sending" স্ট্যাটাসে সাথে সাথে যোগ হয়ে যায়। মেসেজ সার্ভারে সেভ হলে টেক্সটের কালার গাঢ় নীল হয়ে কনফার্ম হয়।

### উত্তম অনুশীলন
উচ্চ ফ্রিকোয়েন্সির কাজ যেমন টাস্ক চেকমার্ক বা লাইক বাটনে এটি ব্যবহার করুন। আর্থিক লেনদেনের ক্ষেত্রে এটি ব্যবহার করবেন না কারণ সেখানে মিথ্যা কনফার্মেশন জটিলতা তৈরি করে।

### সাধারণ ভুলসমূহ
এরর হ্যান্ডলিং না করা। সার্ভার অ্যাকশন ব্যর্থ হলে আপনি যদি এক্সেপশন ক্যাচ না করেন, তবে অপ্টিমিস্টিক স্টেট রোলব্যাক হবে না, ফলে ইউজার ভুল ডাটা স্ক্রিনে দেখতে থাকবেন।

### Code Example
\`\`\`typescript
// app/components/Chat.tsx
"use client";

import { useOptimistic, startTransition } from 'react';
import { sendMessage } from '../actions';

type Message = { id: string; text: string; sending?: boolean };

export default function Chat({ initialMessages }: { initialMessages: Message[] }) {
  // useOptimistic হুক ইনিশিয়ালাইজ করা
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    initialMessages,
    (state, newMessageText: string) => [
      ...state,
      { id: Date.now().toString(), text: newMessageText, sending: true } // অস্থায়ী স্টেট
    ]
  );

  const formAction = async (formData: FormData) => {
    const text = formData.get('message') as string;
    
    // startTransition এর ভেতর অপ্টিমিস্টিক আপডেট ফায়ার করা
    startTransition(() => {
      addOptimisticMessage(text);
    });

    // ব্যাকগ্রাউন্ডে সার্ভার অ্যাকশন ট্রিগার
    await sendMessage(text);
  };

  return (
    <div className="p-6">
      <div className="space-y-2">
        {optimisticMessages.map(m => (
          <div key={m.id} className={\`p-2 rounded \${m.sending ? 'opacity-50 bg-gray-100' : 'bg-blue-100'}\`}>
            {m.text} {m.sending && '(পাঠানো হচ্ছে...)'}
          </div>
        ))}
      </div>
      <form action={formAction} className="mt-4 flex gap-2">
        <input name="message" type="text" required className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white p-2">পাঠান</button>
      </form>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-47',
    title: 'How do you identify and debug hydration mismatch errors in a Next.js application?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Hydration Error', 'Debugging', 'React', 'SSR'],
    enAnswer: 'Hydration mismatch errors are debugged by checking console log differences between server-rendered HTML and client-rendered markup. You resolve them by using useEffect to defer client-only operations, using suppressHydrationWarning, or disabling SSR for dynamic components.',
    bnAnswer: 'কনসোলের এরর মেসেজ পড়ে সার্ভার HTML ও ক্লায়েন্ট মার্কআপের অমিল চেক করে হাইড্রেট এরর ডিবাগ করা হয়। এটি সমাধান করতে useEffect দিয়ে ক্লায়েন্ট কোড লোড পিছাতে হয়, অথবা suppressHydrationWarning বা ডাইনামিক ইম্পোর্ট ব্যবহার করা হয়।',
    enExplanation: `### Explanation
React throws a hydration mismatch error when the DOM structure returned from the server does not match the browser's parsed representation.

**How to Debug and Locate the Error:**
1. **Console Logs**: Modern Next.js displays the exact diff in the browser console, showing what HTML tag the server returned versus what the client generated.
2. **Locating mismatch**: Look at console traces highlighting mismatching tags (e.g. \`<p>\` containing \`<div>\`).
3. **Common Fixes**:
   - **Deferred Hydration**: Delay rendering the dynamic value until mounting has completed using a boolean state variable in \`useEffect\`.
   - **suppressHydrationWarning**: Add this attribute on elements displaying dynamic server-side generated properties (like timestamp clocks) to tell React to ignore the differences.
   - **next/dynamic**: Load the component with \`ssr: false\` to render it entirely on the client, avoiding server compilation mismatches.

### Real-World Example
Suppose you render the user's active timezone name:
- On the server, it renders as \`UTC\`.
- In the user's browser, it renders as \`EST\`.
- Wrapping the timezone text component inside a dynamic import with \`ssr: false\` prevents the server compilation, resolving the mismatch.

### Best Practice
Never use dynamic calculations (like window dimensions or local timezone offsets) during the initial render call of a Server Component. Defer them to Client Component mounting phases.

### Common Mistakes
Suppressing hydration warnings everywhere. Using \`suppressHydrationWarning\` only suppresses the warning; it does not fix layout errors. Only use it for text discrepancies like dates.

### Code Example
\`\`\`typescript
// app/components/TimezoneView.tsx
"use client";

import dynamic from 'next/dynamic';

// Fixes hydration mismatch: disables server pre-rendering for this component
const ClientOnlyTimezone = dynamic(
  () => import('./ClientOnlyTimezone'),
  { ssr: false } 
);

export default function TimezoneView() {
  return (
    <div className="p-4 border">
      <h4>System Status</h4>
      {/* Safe to render dynamic browser timezones here */}
      <ClientOnlyTimezone />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার থেকে পাঠানো HTML মার্কআপের সাথে ব্রাউজারের প্রথম রেন্ডার মেলানো না গেলে রিঅ্যাক্ট হাইড্রেট এরর দেয়।

**ডিবাগ ও সমস্যা খোঁজার উপায়সমূহ:**
১. **ব্রাউজার কনসোল**: নেক্সট জেএস-এর আধুনিক ওভারলে কনসোলে দেখায় সার্ভারের পাঠানো ট্যাগ ও ক্লায়েন্টের ট্যাগের অমিলের নিখুঁত হিসাব (diff)।
২. **ট্যাগ আইডেন্টিফিকেশন**: কনসোলে ভুলের কারণ নির্দেশ করা ট্যাগ লাইনটি ট্র্যাক করুন (যেমন: \`<p>\` ট্যাগের ভেতর \`<div>\`)।
৩. **সমাধানের উপায়**:
   - **ডিফার্ড রেন্ডারিং**: \`useEffect\` ব্যবহার করে স্টেট ট্রু হওয়ার পরই কেবল ডাইনামিক ফিল্ড রেন্ডার করুন।
   - **suppressHydrationWarning**: টাইমস্ট্যাম্পের মতো লেখায় এটি বসিয়ে দিন যাতে রিঅ্যাক্ট ওয়ার্নিং ইগনোর করে।
   - **next/dynamic**: কম্পোনেন্টটি \`ssr: false\` দিয়ে ইম্পোর্ট করুন যাতে এটি শুধু ক্লায়েন্টেই কম্পাইল হয়।

### বাস্তব-ভিত্তিক উদাহরণ
গ্রাহকের টাইমজোন স্ক্রিনে দেখানোর ক্ষেত্রে:
- সার্ভার এটি বানাল \`UTC\` দিয়ে।
- গ্রাহকের ল্যাপটপে লোড হয়ে ওটি দেখাল \`EST\`।
- টাইমজোনের কোডটিকে \`next/dynamic\`-এর \`ssr: false\` দিয়ে লোড করালে সার্ভারে রেন্ডার না হয়ে ব্রাউজারে রেন্ডার হবে ও এরর মিটে যাবে।

### উত্তম অনুশীলন
সার্ভার রেন্ডারিংয়ের সময় কখনোই প্রথম লোডে উইন্ডো ডাইমেনশন বা টাইমজোন হিসাব করতে যাবেন না। এগুলোকে \`useEffect\` ব্লকের ভেতরে ক্লায়েন্ট মাউন্টিংয়ের জন্য রাখুন।

### সাধারণ ভুলসমূহ
সব ফাইলে \`suppressHydrationWarning\` দিয়ে এরর ঢেকে রাখা। এটি কেবল ওয়ার্নিংটি লুকায়, মূল ডম কাঠামোর ভুল ডিজাইন সংশোধন করে না।

### Code Example
\`\`\`typescript
// app/components/TimezoneView.tsx
"use client";

import dynamic from 'next/dynamic';

// হাইড্রেট এরর এড়াতে সার্ভার সাইড প্রাক-রেন্ডারিং অফ রাখা হলো
const ClientOnlyTimezone = dynamic(
  () => import('./ClientOnlyTimezone'),
  { ssr: false } // সার্ভারে এটি কম্পাইল হবে না
);

export default function TimezoneView() {
  return (
    <div className="p-4 border">
      <h4>সিস্টেম স্ট্যাটাস</h4>
      {/* ব্রাউজারের ডাইনামিক টাইমজোন এখানে নিরাপদে রেন্ডার হবে */}
      <ClientOnlyTimezone />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-48',
    title: 'What are the prefetching options for the Next.js <Link> component and how do you customize them?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Link Component', 'Prefetching', 'App Router', 'Performance'],
    enAnswer: 'The prefetch prop on <Link> configures back-channel route prefetching in Next.js. It accepts three values: true (prefetches entire route segment and data), false (prefetches only the route code, not the data), and null (default, prefetches static routes completely, but only caches dynamic routes for 30s).',
    bnAnswer: 'Next.js-এ <Link> কম্পোনেন্টের prefetch প্রপসটি ব্যাকগ্রাউন্ড ডাটা ডাউনলোডের আচরণ নিয়ন্ত্রণ করে। এর ৩টি মান রয়েছে: true (পুরো রুট ও ডাটা প্রি-ফেচ করে), false (শুধু রুট কোড ডাউনলোড করে কিন্তু ডাটা করে না), এবং null (ডিফল্ট, স্ট্যাটিক রুট সম্পূর্ণ প্রি-ফেচ করলেও ডাইনামিক পেজ কেবল ৩০ সেকেন্ড ক্যাশ রাখে)।',
    enExplanation: `### Explanation
Prefetching downloads the assets of linked pages in the background, making page navigation instant.

**Customizing the \`prefetch\` Prop:**
- **\`prefetch={true}\`**:
  - Next.js prefetches the entire page bundle, including static layouts and all asynchronous database fetch data configurations.
- **\`prefetch={false}\`**:
  - Completely disables automatic prefetching when entering the viewport.
  - **Exception**: Prefetching still occurs temporarily when the user hovers their mouse cursor over the link.
- **\`prefetch={null}\` (Default)**:
  - Static pages (SSG) are fully prefetched.
  - Dynamic pages (SSR) are partially prefetched (only layout structure, not the dynamic page data itself).

### Real-World Example
In a shopping dashboard listing hundreds of products:
- Prefetching every single product link as the user scrolls will trigger hundreds of database fetch calls, overloading the API.
- Setting \`prefetch={false}\` on product card links prevents this network overload. The product page data is fetched only when the user hovers or clicks a product.

### Best Practice
Keep prefetch at \`null\` (default) for standard navigation. Set \`prefetch={false}\` explicitly for lists of dynamic links (like product grids or search results) to avoid server resource exhaustion.

### Common Mistakes
Setting \`prefetch={true}\` on pages with heavy dynamic database queries in long scrollable lists, causing high server CPU spikes during scroll events.

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function ProductList() {
  return (
    <div className="flex flex-col gap-2">
      {/* Default (null): Prefetches static segments, holds dynamic segments */}
      <Link href="/dashboard">
        Dashboard Home
      </Link>

      {/* Disabled prefetching: prevents database calls when scrolling list */}
      <Link href="/products/101" prefetch={false}>
        View Heavy Product Detail (Fetches on Hover/Click)
      </Link>

      {/* Force prefetching: loads layout and data instantly */}
      <Link href="/important-announcement" prefetch={true}>
        Important Update
      </Link>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রি-ফেচিং ব্যাকগ্রাউন্ডে পেজের কোড নামিয়ে রাখায় ব্যবহারকারী লিংকে ক্লিক করা মাত্রই পেজটি চোখের পলকে লোড হয়ে যায়।

**\`prefetch\` প্রপের ৩টি মান:**
- **\`prefetch={true}\`**:
  - নেক্সট জেএস পেজ লেআউট ও সার্ভারের ডাইনামিক ফেচ ডাটা সহ সম্পূর্ণ ফাইল ক্যাশ করে নেয়।
- **\`prefetch={false}\`**:
  - স্ক্রিনে লিংক আসার সাথে সাথে অটো ডাউনলোড বন্ধ রাখে।
  - **ব্যতিক্রম**: মাউস কার্সার লিংকের ওপর নিলে (hover) সাময়িকভাবে এটি ফাইল লোড করে নেয়।
- **\`prefetch={null}\` (ডিফল্ট)**:
  - স্ট্যাটিক পেজগুলো সম্পূর্ণ ক্যাশ করবে।
  - ডাইনামিক পেজগুলোর কেবল লেআউটের ফ্রেম ক্যাশ করবে, ভেতরের ভারী এপিআই ডাটা ক্যাশ করবে না।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটে শত শত প্রোডাক্ট লিস্ট স্ক্রল করার সময়:
- প্রতিটি প্রোডাক্ট কার্ডে \`prefetch={true}\` থাকলে স্ক্রল করার সাথে সাথে ব্যাকগ্রাউন্ডে শত শত প্রোডাক্টের ডাটাবেস এপিআই কোয়েরি চালু হবে যা সার্ভার ডাউন করে দেবে।
- প্রোডাক্ট লিংকে \`prefetch={false}\` ডিক্লেয়ার করার মাধ্যমে এই নেটওয়ার্ক ওভারলোড সহজেই এড়ানো যায়।

### উত্তম অনুশীলন
স্বাভাবিক লিংকে ডিফল্ট সেটিংস রাখুন। তবে স্ক্রল করা প্রোডাক্টের গ্রিড বা বড় সার্চ তালিকার ডাইনামিক লিংকগুলোতে অতিরিক্ত প্রেশার এড়াতে \`prefetch={false}\` সেট করুন।

### সাধারণ ভুলসমূহ
বড় স্ক্রল তালিকায় প্রতিটি আইটেমে \`prefetch={true}\` বসানো। এটি পেজ স্ক্রল করার সময় সার্ভারে মেমোরি ও ডাটাবেস কুয়েরির ট্রাফিক স্পাইক তৈরি করে।

### Code Example
\`\`\`typescript
import Link from 'next/link';

export default function ProductList() {
  return (
    <div className="flex flex-col gap-2">
      {/* ডিফল্ট (null): লেআউট ক্যাশ করবে */}
      <Link href="/dashboard">
        ড্যাশবোর্ড
      </Link>

      {/* প্রি-ফেচিং অফ: স্ক্রল করার সময় অযথা কুয়েরি রিকোয়েস্ট তৈরি হবে না */}
      <Link href="/products/101" prefetch={false}>
        প্রোডাক্ট ডিটেইলস (ক্লিক বা হোভারে লোড হবে)
      </Link>

      {/* ফোর্স প্রি-ফেচ: ডাটা সহ একবারে ক্যাশ হবে */}
      <Link href="/important-announcement" prefetch={true}>
        গুরুত্বপূর্ণ ঘোষণা
      </Link>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-49',
    title: 'How do you override webpack configs or customize headers, redirects, and rewrites in next.config.js?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['next.config.js', 'Webpack', 'Rewrites', 'Redirects'],
    enAnswer: 'To customize Next.js behavior, modify next.config.js. You can define redirects() for URL forwarding, rewrites() for internal route mapping, headers() for custom HTTP security headers, and override webpack inside the webpack() function config.',
    bnAnswer: 'নেক্সট জেএস কাস্টমাইজ করতে next.config.js ফাইল মডিফাই করা হয়। এতে ইউআরএল রিডাইরেক্টের জন্য redirects(), ইন্টারনাল ইউআরএল ম্যাপিংয়ের জন্য rewrites(), সিকিউরিটি হেডারের জন্য headers() এবং ওয়েপপ্যাক পরিবর্তনের জন্য webpack() ফাংশন ব্যবহার করা হয়।',
    enExplanation: `### Explanation
\`next.config.js\` is the main configuration file loaded by the Node server and compilers during startup.

**Configuration Functions:**
1. **\`redirects\`**: Maps incoming path request to a new target destination (sends HTTP 301/307 redirect status code).
2. **\`rewrites\`**: Acts as a proxy. Maps \`/api/proxy\` to \`https://externalservice.com/api\`. The URL inside the browser remains \`/api/proxy\`.
3. **\`headers\`**: Allows setting global or path-specific HTTP response headers (e.g. adding X-Frame-Options, Content-Security-Policy).
4. **\`webpack\`**: Modifies Webpack compiler behavior directly (useful for adding loader rules for files like \`.svg\` or \`.graphql\`).

### Real-World Example
Suppose you migrate an old site and want to redirect all old blog paths, proxy your search requests to a third-party search server to avoid CORS, and inject custom security headers. All of this is done centrally in \`next.config.js\`.

### Best Practice
Keep configuration files simple. Always validate redirect loops (e.g. ensuring a source path doesn't point recursively back to itself). Overriding webpack configs should be done with care as it can conflict with Next.js internal optimization pipelines.

### Common Mistakes
Writing client-side JS code inside \`next.config.js\`. This file runs inside Node.js during compilation; using browser APIs (like \`window\`) here will instantly crash the build process.

### Code Example
\`\`\`javascript
// next.config.js (Node.js Environment)
module.exports = {
  reactStrictMode: true,

  // 1. Custom redirects (URL shifts)
  async redirects() {
    return [
      { source: '/old-pricing', destination: '/pricing', permanent: true }
    ];
  },

  // 2. Custom rewrites (Proxy mask URL)
  async rewrites() {
    return [
      { source: '/blog/:path*', destination: 'https://external-blog.com/:path*' }
    ];
  },

  // 3. Webpack configuration overrides
  webpack: (config, { isServer }) => {
    // Custom SVG loader config example
    config.module.rules.push({
      test: /\\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`next.config.js\` হলো অ্যাপ্লিকেশনের প্রধান কনফিগারেশন ফাইল যা কম্পাইল ও সার্ভার স্টার্ট হওয়ার সময় নোডজেএস মেমোরিতে লোড করে।

**প্রধান কনফিগারেশন ফাংশনসমূহ:**
১. **\`redirects\`**: ইনকামিং লিংক রিকোয়েস্টকে অন্য লিংকে ট্রান্সফার করে (৩০১/৩০৭ স্ট্যাটাস কোড দেয়)।
২. **\`rewrites\`**: প্রক্সি গেটওয়ের মতো কাজ করে। ব্রাউজার ইউআরএল অপরিবর্তিত রেখেই ব্যাকগ্রাউন্ডে অন্য সার্ভার থেকে ডাটা এনে দেয় (যেমন: \`/api/proxy\` -> \`https://external.com\`)।
৩. **\`headers\`**: সমস্ত রেসপন্সে কাস্টম হেডার যুক্ত করতে সাহায্য করে (যেমন: এক্সএসএস প্রোটেকশন)।
৪. **\`webpack\`**: সরাসরি ওয়েবপ্যাক রুল পরিবর্তন করে (যেমন: \`.svg\` ফাইল রিড করার নিয়ম পরিবর্তন)।

### বাস্তব-ভিত্তিক উদাহরণ
সাইট মাইগ্রেশনের সময়:
- পুরোনো সব লিংক নতুন লিংকে রিডাইরেক্ট করতে হবে এবং সিকিউরিটি কোড বসাতে হবে।
- এই সমস্ত গ্লোবাল কাজ ডিরেক্ট \`next.config.js\` ফাইলের ভেতর এক জায়গায় সম্পন্ন করা যায়।

### উত্তম অনুশীলন
কনফিগারেশন ফাইল পরিষ্কার রাখুন। রিডাইরেক্ট রুল বসানোর সময় যেন লুপ না তৈরি হয় (যেমন: A থেকে B তে আবার B থেকে A তে রিডাইরেক্ট) তা যাচাই করে নিন। কাস্টম ওয়েবপ্যাক ব্যবহারে সতর্ক থাকুন কারণ এটি ইন্টারনাল বিল্ড অপ্টিমাইজেশনকে ব্লক করতে পারে।

### সাধারণ ভুলসমূহ
\`next.config.js\`-এর ভেতর ব্রাউজারের কোড বা \`window\` এপিআই ব্যবহার করা। এই ফাইলটি কেবল নোড সার্ভারে চলে, তাই এখানে ব্রাউজার এপিআই লিখলে বিল্ড ক্র্যাশ করবে।

### Code Example
\`\`\`javascript
// next.config.js (নোডজেএস এনভায়রনমেন্ট)
module.exports = {
  reactStrictMode: true,

  // ১. কাস্টম রিডাইরেক্ট
  async redirects() {
    return [
      { source: '/old-pricing', destination: '/pricing', permanent: true }
    ];
  },

  // ২. কাস্টম রিরাইট (ইউআরএল হাইড রেখে প্রক্সি করা)
  async rewrites() {
    return [
      { source: '/blog/:path*', destination: 'https://external-blog.com/:path*' }
    ];
  },

  // ৩. ওয়েবপ্যাক ওভাররাইড কনফিগারেশন
  webpack: (config, { isServer }) => {
    // কাস্টম SVG ফাইল রিডার যোগ করার উদাহরণ
    config.module.rules.push({
      test: /\\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
\`\`\``
  },
  {
    id: 'nextjs-50',
    title: 'Compare Vercel deployment advantages vs. self-hosting Next.js via Node.js or Docker containers.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Deployment', 'Vercel', 'Docker', 'DevOps', 'Self-Hosting'],
    enAnswer: 'Vercel offers zero-config serverless deployments with automatic CDN caching, edge routing, and branch previews. Self-hosting via Node.js or Docker standalone mode gives you complete control over resources and lower costs for high-compute loads, but requires manual configuration of scaling and CDNs.',
    bnAnswer: 'ভার্সেল (Vercel) কনফিগারেশন ছাড়াই সার্ভারলেস ডিপ্লয়মেন্ট, অটোমেটিক সিডিএন ক্যাশিং ও ব্রাঞ্চ প্রিভিউ দেয়। নোড বা ডকার (Docker) কনটেইনারের মাধ্যমে সেলফ-হোস্টিং করলে সার্ভার রিসোর্সের ওপর পুরো নিয়ন্ত্রণ পাওয়া যায় ও ভারী কাজের সার্ভার বিল সাশ্রয় হয়, তবে এর জন্য ম্যানুয়ালি স্কেলিং ও সিডিএন টিউন করতে হয়।',
    enExplanation: `### Explanation
Choosing where to host Next.js depends on team size, DevOps experience, and cost structures:

**1. Vercel (Serverless / Managed Platform)**:
- **Pros**: Automatic Edge Middleware deployment, instant global caching, pull-request preview environments, and seamless integrations.
- **Cons**: Can become expensive for databases with persistent long-lived connections, high bandwidth limits, or complex background workers.

**2. Self-Hosting (Node.js Server or Docker Containers)**:
- **Pros**: Standard hosting (AWS EC2, DigitalOcean, VPS). Predictable monthly pricing. No serverless cold start latencies. Infinite background execution limits.
- **Cons**: You must configure your own Reverse Proxy (Nginx), handle SSL cert renewals (Let's Encrypt), write load balancing triggers, and handle static assets CDN configurations.

### Real-World Example
- **Startup**: Uses Vercel. With no DevOps team, they rely on automatic previews on Github pull requests to test features instantly.
- **Enterprise**: Uses Docker standalone build deployed to AWS ECS. They have high database connection volume. A serverless architecture would exhaust DB connection limits, so a persistent container setup is safer and cheaper.

### Best Practice
For early stage applications and small teams, use Vercel. For high-scale enterprise applications requiring strict compliance, static budgets, or integration with existing kubernetes clusters, compile Next.js using **standalone** mode and self-host in Docker containers.

### Common Mistakes
Self-hosting Next.js in a Docker container without enabling \`output: 'standalone'\` inside \`next.config.js\`. This copies all development node_modules, resulting in bloated 1GB+ Docker image sizes instead of a compressed 50MB production container image.

### Code Example
\`\`\`dockerfile
# Dockerfile snippet for Next.js self-hosting (Standalone Mode)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Disable telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy compressed standalone compiled directory
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static
COPY --chown=nextjs:nodejs public ./public

USER nextjs
EXPOSE 3000
ENV PORT=3000

# Run the next.js standalone node server
CMD ["node", "server.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস কোথায় হোস্ট করবেন তা নির্ভর করে আপনার টিমের বাজেট, সাইজের ট্রাফিকের ধরন ও সার্ভার টিম ম্যানেজমেন্টের ওপর:

**১. Vercel (ভার্সেল - অটো ম্যানেজড):**
- **সুবিধা**: কোনো কনফিগারেশন ছাড়া গিট পুশ করলেই গ্লোবাল সিডিএন ও প্রিভিউ লিংক রেডি হয়ে যায়।
- **অসুবিধা**: অতিরিক্ত ট্রাফিকের ক্ষেত্রে ব্যান্ডউইথ বিল অনেক বেশি আসতে পারে।

**২. Self-Hosting (ডকার বা নোডজেএস সার্ভার):**
- **সুবিধা**: ফিক্সড মান্থলি রেট (VPS)। ডাটাবেসে সবসময় কানেক্টেড থাকার সুবিধা। ব্যাকগ্রাউন্ডে ভারী জব বা স্ক্রিপ্ট লিমিট ছাড়া দীর্ঘক্ষণ রান করানো যায়।
- **অসুবিধা**: এনজিনিক্স (Nginx) সেটআপ, এসএসএল (SSL) সার্টিফিকেট রিনিউ ও গ্লোবাল সিডিএন টিউনিং নিজের ম্যানুয়ালি করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
- **স্টার্টআপ প্রজেক্ট**: ভার্সেল ব্যবহার করে। ডেভেলপার গিটহাবে পুশ করলে সাথে সাথে চেকিং লিংক তৈরি হয়ে যায়।
- **বৃহৎ কোম্পানি**: ডকার ইমেজ দিয়ে এডাব্লিউএস (AWS) বা ডকিং প্যানেলে রান করে। ডাটাবেস পোলিং মেমোরি কন্ট্রোল করতে সার্ভারলেসের চেয়ে কনটেইনার হোস্টিং তাদের জন্য সাশ্রয়ী।

### উত্তম অনুশীলন
ছোট দল ও নতুন অ্যাপে ভার্সেল ব্যবহার করুন। আর সিকিউরিটি এবং ফিক্সড বাজেটের ডাটাবেস কানেকশন লিমিট বেশি হলে \`next.config.js\` ফাইলে \`output: 'standalone'\` দিয়ে ডকার কন্টেইনারে সেলফ-হোস্ট করুন।

### সাধারণ ভুলসমূহ
ডকার ফাইল তৈরি করার সময় standalone মোড অন না করা। এর ফলে ডেভেলপমেন্টের সব ফোল্ডার সহ ডকার ইমেজ ১ জিবির বেশি হয়ে যায়, যেখানে স্ট্যান্ডঅ্যালোন মোড ব্যবহার করলে ইমেজ সাইজ মাত্র ৫০ এমবিতে নেমে আসে।

### Code Example
\`\`\`dockerfile
# স্ট্যান্ডঅ্যালোন বিল্ডে সেলফ-হোস্টিং করার ডকার ফাইল (Dockerfile)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# স্ট্যান্ডঅ্যালোন ফাইলগুলো কপি করা
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static
COPY --chown=nextjs:nodejs public ./public

USER nextjs
EXPOSE 3000
ENV PORT=3000

# নোড সার্ভার রান করার কমান্ড
CMD ["node", "server.js"]
\`\`\``
  },
  {
    id: 'nextjs-51',
    title: 'What is Next.js Bundle Analyzer and how do you configure it to inspect asset sizes?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Bundle Analyzer', 'Performance', 'Build Optimization', 'Vite'],
    enAnswer: 'Next.js Bundle Analyzer (@next/bundle-analyzer) is a plugin that generates an interactive visual map of all Javascript bundles created during production builds. It allows developers to identify which large node_modules are bloating bundle sizes.',
    bnAnswer: 'নেক্সট জেএস বান্ডেল অ্যানালাইজার (@next/bundle-analyzer) হলো একটি প্লাগইন যা বিল্ড করার সময় তৈরি হওয়া জাভাস্ক্রিপ্ট ফাইলগুলোর একটি ইন্টারক্টিভ ভিজ্যুয়াল ম্যাপ দেখায়। এটি ডেভেলপারকে কোন কোন মডিউল সাইজ বাড়িয়ে দিচ্ছে তা চিহ্নিত করতে সাহায্য করে।',
    enExplanation: `### Explanation
To keep loading times fast, you must monitor bundle sizes. If a client component imports a heavy library (like \`lodash\` or \`moment.js\`), it inflates the JS bundle size.

**Analyzing Bundles:**
- The analyzer plugin generates HTML maps displaying component chunks.
- Block sizes in the map correlate to file sizes in kilobytes.
- Large blocks represent optimization targets (e.g. replacing a large library with a lighter alternative, or wrapping it in \`next/dynamic\` code-splitting).

### Real-World Example
You deploy a site, and Lighthouse metrics show a red warning for heavy initial JS load.
- You configure \`@next/bundle-analyzer\` and run build.
- The visual report opens in the browser. You see a huge block for \`pdfjs\` imported in a page.
- You refactor the import to use \`next/dynamic\` (lazy loading), reducing the initial JS load by 400KB.

### Best Practice
Only enable bundle analysis during build time via environment variables (e.g. \`ANALYZE=true npm run build\`). Do not run the analyzer during standard production deployment runs to avoid generating unnecessary HTML files.

### Common Mistakes
Forgetting that importing a server-only library inside a file marked with \`"use client"\` will bundle that server library into the client JS package, bloating the user's browser download size.

### Code Example
\`\`\`javascript
// next.config.js (Configuring Bundle Analyzer)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Run only when ANALYZE env is true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Wrap config with bundle analyzer plugin
module.exports = withBundleAnalyzer(nextConfig);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যাপের স্পিড ফাস্ট রাখতে জাভাস্ক্রিপ্ট ফাইলের সাইজ চেক রাখা অত্যন্ত জরুরি। ক্লায়েন্ট ফাইলে বড় কোনো লাইব্রেরি (যেমন: \`lodash\` বা \`moment.js\`) ভুলবশত ইম্পোর্ট করলে ফাইল সাইজ বেড়ে যায়।

**বান্ডেল অ্যানালাইজারের সুবিধা:**
- এটি বিল্ডের সময় তৈরি হওয়া প্রতিটি ক্লায়েন্ট স্ক্রিপ্টের গ্রাফিক্যাল ছবি (HTML Map) ব্রাউজারে ওপেন করে।
- যে ফাইলের সাইজ বেশি, ম্যাপের ভেতর সেটির ঘর বা ব্লক তত বড় দেখায়।
- বড় ঘরগুলোকে চিহ্নিত করে লাইটওয়েট অল্টারনেটিভ দিয়ে কোড পরিবর্তন করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
সাইটের লাইটহাউস স্কোরে দেখা গেল পেজের মেইন বান্ডেল খুব ভারী।
- বান্ডেল অ্যানালাইজার সেট করে বিল্ড রান করা হলো।
- ম্যাপে দেখা গেল একটি সাধারণ পেজে পিডিএফ রিডার (\`pdfjs\`) সরাসরি ইম্পোর্ট করা।
- কোডটিকে \`next/dynamic\`-এর সাহায্যে লেজি লোড দেওয়ায় প্রথম লোডের সাইজ ৪০০ কেবি কমে গেল ও স্পিড স্কোর সবুজ হয়ে গেল।

### উত্তম অনুশীলন
এনভায়রনমেন্ট ভ্যারিয়েবলের মাধ্যমে এটি শুধুমাত্র প্রয়োজনের সময় চালু করুন (যেমন: \`ANALYZE=true npm run build\`)। প্রোডাকশন লাইভ সার্ভারে এটি সর্বদা বন্ধ রাখুন।

### সাধারণ ভুলসমূহ
\`"use client"\` বিশিষ্ট ক্লায়েন্ট ফাইলে এমন লাইব্রেরি ইম্পোর্ট করা যা কেবল সার্ভারে চলার কথা। এর ফলে পুরো সার্ভার লাইব্রেরি ব্রাউজার ফাইলে বান্ডেল হয়ে ইউজার ডাউনলোড ব্যান্ডউইথ নষ্ট করে।

### Code Example
\`\`\`javascript
// next.config.js (বান্ডেল অ্যানালাইজার কনফিগার করার নিয়ম)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // কেবল ANALYZE=true হলেই অন হবে
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// প্লাগইন দিয়ে কনফিগ ফাইল র‍্যাপ করে এক্সপোর্ট করা
module.exports = withBundleAnalyzer(nextConfig);
\`\`\``
  },
  {
    id: 'nextjs-52',
    title: 'How do you implement lazy loading and code splitting for client components using next/dynamic?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['next/dynamic', 'Lazy Loading', 'Code Splitting', 'Performance'],
    enAnswer: 'Lazy loading is implemented in Next.js using the next/dynamic function. It dynamically imports components only when they are needed, reducing the initial JavaScript bundle load. Setting the ssr: false option disables server-side rendering for client-only components.',
    bnAnswer: 'নেক্সট জেএস-এ next/dynamic ফাংশন ব্যবহার করে লেজি লোডিং করা হয়। এটি কোনো কম্পোনেন্টকে কেবল প্রয়োজনের সময়ই ব্রাউজারে ডাউনলোড করে, যা প্রারম্ভিক জাভাস্ক্রিপ্ট লোড কমায়। ssr: false অপশন দিয়ে সার্ভার রেন্ডারিং অফ রাখা যায়।',
    enExplanation: `### Explanation
By default, all client components imported statically are bundled into the page's initial Javascript files.

**\`next/dynamic\` benefits:**
1. **Deferred Loading**: The component's code is not downloaded until it is rendered in the DOM.
2. **SSR Control**: Disabling SSR (\`{ ssr: false }\`) is critical for components that rely on browser APIs (like \`window\`) to avoid server-side compilation hydration crashes.

### Real-World Example
Your dashboard has a heavy Chat Widget.
- Most users just view reports and do not click chat.
- Standard imports load the 200KB chat widget JS for everyone.
- Using \`next/dynamic\`, the chat widget code only downloads when the user clicks the "Open Chat" button, saving bandwidth for the other 90% of users.

### Best Practice
Use \`next/dynamic\` for heavy components that are not immediately visible above the fold, such as modals, feedback forms, or interactive graphs. Always supply a loading fallback UI component to prevent layout flickers.

### Common Mistakes
Using \`next/dynamic\` inside Server Components for standard HTML tags. It is designed only for dynamically importing React Client Components.

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import heavy component with loading fallback
// and disable server pre-rendering (SSR)
const DynamicChart = dynamic(
  () => import('@/components/HeavyAnalyticsChart'),
  { 
    ssr: false, // Do not render on server (browser-only component)
    loading: () => <p className="p-4 bg-gray-50 animate-pulse">Loading Chart Widget...</p>
  }
);

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="p-6">
      <button 
        onClick={() => setShowChart(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Load Analytics Chart
      </button>

      {/* Code is downloaded only when showChart resolves to true */}
      {showChart && <DynamicChart />}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণভাবে ইম্পোর্ট করা সমস্ত ক্লায়েন্ট কম্পোনেন্টের কোড প্রথম রিকোয়েস্টেই ব্রাউজারে লোড হয়ে যায় যা সাইটকে ভারী করে।

**\`next/dynamic\` এর কাজের ক্ষমতা:**
১. **বিলম্বিত লোড (Deferred Loading)**: কম্পোনেন্টটি পর্দায় আসার আগ পর্যন্ত সেটির কোড ব্রাউজারে ডাউনলোড হয় না।
২. **SSR নিয়ন্ত্রণ**: \`{ ssr: false }\` সেটিংস দিয়ে ফন্ট বা উইন্ডো নির্ভর ব্রাউজার ফাইলগুলোকে সার্ভারে রেন্ডার হওয়া বন্ধ করা যায়, যা হাইড্রেট এরর কমায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার ড্যাশবোর্ডে একটি বড় চ্যাট পপআপ আছে:
- বেশির ভাগ ইউজার রিপোর্ট দেখেন, চ্যাট ওপেন করেন না।
- সাধারণ ইম্পোর্ট করলে ২০০ কেবির চ্যাটের ফাইল সবার ব্রাউজারে ডাউনলোড হবে।
- \`next/dynamic\` ব্যবহার করলে যখন ইউজার "চ্যাট করুন" বাটনে ক্লিক করবেন, কেবল তখনই ওই চ্যাটের কোড ডাউনলোড শুরু হবে।

### উত্তম অনুশীলন
ল্যান্ডিং স্ক্রিনের ওপর সরাসরি দেখা যায় না এমন বড় বড় কন্টেন্ট (যেমন: ডায়ালগ বক্স, গ্রাফিক্স চার্ট, পেমেন্ট কার্ড) ইম্পোর্ট করতে \`next/dynamic\` ব্যবহার করুন এবং ফ্লিমিং এড়াতে একটি লোডিং ফলব্যাক ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ
সার্ভার কম্পোনেন্টের ভেতর সাধারণ HTML উপাদান সাজানোর জন্য এটি ব্যবহার করা। এটি কেবল ক্লায়েন্ট কম্পোনেন্ট কোড-স্প্লিটিং করার জন্য ডিজাইন করা হয়েছে।

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

// কাস্টম স্কেলিটন সহ ডাইনামিক চার্ট ইম্পোর্ট করার নিয়ম
// সার্ভার রেন্ডারিং নিষ্ক্রিয় করা হয়েছে (ssr: false)
const DynamicChart = dynamic(
  () => import('@/components/HeavyAnalyticsChart'),
  { 
    ssr: false, // কেবল ব্রাউজারে লোড হবে
    loading: () => <p className="p-4 bg-gray-50 animate-pulse">চার্ট লোড হচ্ছে...</p>
  }
);

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="p-6">
      <button 
        onClick={() => setShowChart(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        অ্যানালিটিক্স চার্ট লোড করুন
      </button>

      {/* বাটন ক্লিক করার পরই কেবল চার্টের জেএস কোড ডাউনলোড হবে */}
      {showChart && <DynamicChart />}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-53',
    title: 'What are Parallel Routes in Next.js and how do you define slots using the @folder naming convention?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Parallel Routes', 'Routing', 'Dashboard Layout', 'App Router'],
    enAnswer: 'Parallel Routes allow you to render multiple pages simultaneously or conditionally in the same layout. They are defined using the @folder naming convention (slots) and are passed as named props to the parent layout alongside children.',
    bnAnswer: 'প্যারালাল রুটস (Parallel Routes) একই লেআউটে একসাথে বা শর্তসাপেক্ষে একাধিক পেজ রেন্ডার করার সুযোগ দেয়। এগুলো @folder নামকরণ কনভেনশন (slots) দিয়ে তৈরি করা হয় এবং পেরেন্ট লেআউটে প্রপস (named props) আকারে পাস হয়।',
    enExplanation: `### Explanation
Parallel Routes let you build split-screen views or complex dashboards where independent routes load concurrently:

**Slots Architecture:**
- A folder starting with \`@\` defines a **slot** (e.g. \`app/dashboard/@analytics\`).
- Slots are not part of the URL route structure. \`app/dashboard/@analytics/page.tsx\` renders inside the \`/dashboard\` URL path.
- The parent layout (\`app/dashboard/layout.tsx\`) receives the slot name as a prop matching the folder name:
  \`\`\`typescript
  export default function Layout({ children, analytics, team })
  \`\`\`
- This enables independent streaming and local loading states per slot.

### Real-World Example
In an admin panel dashboard:
- You display Team Stats (\`@team\`) and Sales Charts (\`@sales\`).
- If Sales Charts take 5 seconds to load, the team statistics and navigation layout still render instantly. The Sales Chart slot displays a local loading state independently.

### Best Practice
Use Parallel Routes for layouts that have separate widgets with independent states or loading cycles. Utilize the \`default.js\` file inside slot folders to provide a fallback view if a route change does not match the active sub-path in other slots.

### Common Mistakes
Expecting slot folders to be part of the browser URL path. Navigating to \`/dashboard/@analytics\` will return a 404 error page.

### Code Example
\`\`\`typescript
// app/dashboard/layout.tsx
type LayoutProps = {
  children: React.ReactNode;
  analytics: React.ReactNode; // Matches @analytics folder slot
  team: React.ReactNode;      // Matches @team folder slot
};

export default function DashboardLayout({ children, analytics, team }: LayoutProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="header-nav">Dashboard Navigation</div>
      
      {/* Render children along with slot components */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">{analytics}</div>
        <div className="border p-4 rounded">{team}</div>
      </div>
      
      <div className="main-content">{children}</div>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্যারালাল রুট ড্যাশবোর্ডে একই সাথে বা ভিন্ন শর্তে আলাদা আলাদা পেজ এক স্ক্রিনে রেন্ডার করার ডাইনামিক সমাধান দেয়:

**স্লট আর্কিটেকচার (Slots):**
- ফোল্ডারের নামের শুরুতে \`@\` দিলে তাকে **স্লট** বলে (যেমন: \`app/dashboard/@analytics\`)।
- স্লটগুলো ইউআরএল পাথের অংশ হয় না। \`app/dashboard/@analytics/page.tsx\` সরাসরি \`/dashboard\` ইউআরএল-এর অংশ হিসেবে লোড হবে।
- পেরেন্ট লেআউট ফাইলটি স্লটের নাম দিয়ে সরাসরি প্রপস রিসিভ করে:
  \`\`\`typescript
  export default function Layout({ children, analytics, team })
  \`\`\`
- এটি প্রতিটি উইজেটের জন্য আলাদা আলাদা লোডিং ফাইল (\`loading.js\`) রান করার স্বাধীনতা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন প্যানেলে:
- টিম ডাটা (\`@team\`) ও সেলস গ্রাফ (\`@sales\`) পাশাপাশি শো করা হচ্ছে।
- সেলস ডাটাবেস স্লো হওয়ায় ওটি লোড হতে ৫ সেকেন্ড নিলেও, টিমের ডাটা ও পুরো ড্যাশবোর্ড সাইডবার ১ সেকেন্ডেই ভেসে উঠবে ও সেলসের জায়গায় ছোট স্পিনার ঘুরবে।

### উত্তম অনুশীলন
স্বাধীন বা ভিন্ন ডাটা সাইজের উইজেট ড্যাশবোর্ড তৈরি করতে এটি ব্যবহার করুন। রুট পরিবর্তনের সময় কোনো স্লট অমিল হলে এরর এড়াতে স্লট ফোল্ডারের ভেতর একটি \`default.tsx\` ফাইল সেভ করে রাখুন।

### সাধারণ ভুলসমূহ
স্লট ফোল্ডারের নাম ইউআরএল বারে টাইপ করা (যেমন: \`/dashboard/@analytics\`)। এটি সরাসরি ৪০৪ পেজ দেখাবে।

### Code Example
\`\`\`typescript
// app/dashboard/layout.tsx
type LayoutProps = {
  children: React.ReactNode;
  analytics: React.ReactNode; // @analytics ফোল্ডারের স্লট প্রপস
  team: React.ReactNode;      // @team ফোল্ডারের স্লট প্রপস
};

export default function DashboardLayout({ children, analytics, team }: LayoutProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="header-nav">ড্যাশবোর্ড নেভিগেশন হেডার</div>
      
      {/* পেরেন্ট লেআউটে স্লটগুলো পাশাপাশি রেন্ডার করা */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">{analytics}</div>
        <div className="border p-4 rounded">{team}</div>
      </div>
      
      <div className="main-content">{children}</div>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-54',
    title: 'What are Intercepting Routes and how do they work in conjunction with Parallel Routes?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Intercepting Routes', 'Parallel Routes', 'App Router', 'Routing'],
    enAnswer: 'Intercepting Routes allow you to load a route from another part of your application inside the current layout. They are defined using parentheses syntax (e.g. (.)folder for same level, (..)folder for parent level) and are commonly used with Parallel Routes to display detail views inside modal overlays.',
    bnAnswer: 'ইন্টারসেপ্টিং রুটস (Intercepting Routes) কারেন্ট লেআউট থেকে বের না হয়েই অ্যাপের অন্য অংশের রুট এখানে রেন্ডার করার সুযোগ দেয়। এগুলো ব্র্যাকেট সিনট্যাক্স (যেমন: (.)ফোল্ডার) দিয়ে তৈরি করা হয় এবং মোডালে কোনো পেজ ওপেন করতে প্যারালাল রুটের সাথে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Intercepting routes let you "intercept" a URL path to show a custom UI overlay while preserving the current page context, but if the page is reloaded or shared via link, the full stand-alone page renders instead.

**Parentheses match indicators:**
- \`(.)\`: Matches segments on the **same level**.
- \`(..)\`: Matches segments **one level above**.
- \`(..)(..)\`: Matches segments **two levels above**.
- \`(...)\`: Matches segments from the **root \`app/\` directory**.

**Common Pattern: The Modal Gallery**
- User clicks a photo.
- The router intercepts the path \`/photo/12\` and opens it inside a modal overlay on top of the gallery feed.
- If the user shares the link \`site.com/photo/12\` and a friend visits it, they see the full-page layout because there was no active gallery context to intercept.

### Real-World Example
In Instagram or Pinterest:
- Clicking a post in the feed opens a modal details overlay. The URL updates to \`/p/id\` but the feed stays visible in the background.
- Refreshing the browser loads the post details as a clean, stand-alone full page.

### Best Practice
Combine Intercepting Routes with Parallel Routes (\`@modal\`) to implement shareable modals. Put the modal component inside the intercepted folder, and the normal layout inside the primary folder.

### Common Mistakes
Forgetting to declare the \`default.js\` file inside the parallel routes slot folder. Without it, when the modal is closed and navigation occurs, Next.js will crash due to undefined route slots.

### Code Example
\`\`\`
Gallery Project Folder Structure:
src/
└── app/
    ├── page.tsx             // Gallery feed page
    ├── layout.tsx           // Root Layout (includes @modal slot)
    ├── @modal/
    │   ├── default.tsx      // Fallback: returns null (hides modal)
    │   └── (.)photo/[id]/
    │       └── page.tsx     // Intercepted: Renders detail inside Modal
    └── photo/[id]/
        └── page.tsx         // Standalone page: Renders full page details
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইন্টারসেপ্টিং রুট ইউআরএল চেঞ্জ করলেও পূর্বের পেজের অবস্থান ঠিক রেখে স্ক্রিনের ওপর কাস্টম মোডাল বা ওভারলে রেন্ডার করায়। তবে ইউজার সরাসরি ওই লিংকে রিফ্রেশ দিলে কিংবা লিংকটি অন্য কাউকে পাঠালে কাস্টম মোডাল না এসে সরাসরি সম্পূর্ণ পেজ লোড হবে।

**ডিরেক্টরি ম্যাচিং চিহ্নসমূহ:**
- \`(.)\`: **একই লেভেলের** ফোল্ডার ম্যাচ করে।
- \`(..)\`: **এক লেভেল উপরের** ফোল্ডার ম্যাচ করে।
- \`(..)(..)\`: **দুই লেভেল উপরের** ফোল্ডার ম্যাচ করে।
- \`(...)\`: রুট **\`app/\` ফোল্ডারের** কোনো পাথ ম্যাচ করে।

### বাস্তব-ভিত্তিক উদাহরণ
**কমন প্যাটার্ন: মোডাল গ্যালারি (Modal Gallery)**
- ইউজার গ্যালারির একটি ছবিতে ক্লিক করল।
- রাউটার রিকোয়েস্ট ইন্টারসেপ্ট করে \`/photo/12\` ইউআরএল দেখাল কিন্তু ব্যাকগ্রাউন্ডে গ্যালারি ঠিক রেখে ওপরে মোডালে ছবিটি ওপেন করল।
- যদি ওই ইউআরএল লিংক রিফ্রেশ দেওয়া হয়, তখন মোডাল ছাড়াই ফুল-স্ক্রিনে ছবিটির ডিটেইল পেজ রেন্ডার হবে।

### উত্তম অনুশীলন
শেয়ারেবল মোডাল তৈরি করতে ইন্টারসেপ্টিং ও প্যারালাল রুট (\`@modal\`) একসাথে ব্যবহার করুন। ইন্টারসেপ্ট হওয়া ফোল্ডারের ভেতর মোডালের ডিজাইন ও স্বাভাবিক ফোল্ডারে স্ট্যান্ডঅ্যালোন পেজের ডিজাইন রাখুন।

### সাধারণ ভুলসমূহ
প্যারালাল স্লটে \`default.js\` ফাইল তৈরি করতে ভুলে যাওয়া। এটি না থাকলে মোডাল ক্লোজ করার পর নেভিগেশন এরর দিয়ে সাইট ক্র্যাশ করবে।

### Code Example
\`\`\`
প্রজেক্ট ফোল্ডারের বিন্যাস:
src/
└── app/
    ├── page.tsx             // গ্যালারি মূল পেজ
    ├── layout.tsx           // রুট লেআউট (এতে @modal স্লট ডিফাইন আছে)
    ├── @modal/
    │   ├── default.tsx      // ফলব্যাক: null রিটার্ন করে মোডাল হাইড রাখবে
    │   └── (.)photo/[id]/
    │       └── page.tsx     // ইন্টারসেপ্ট হওয়া পেজ: মোডাল ইউআই
    └── photo/[id]/
        └── page.tsx         // স্ট্যান্ডঅ্যালোন পেজ: ফুল স্ক্রিন ইউআই
\`\`\``
  },
  {
    id: 'nextjs-55',
    title: 'How do you configure and access request cookies and headers in Server Components and Route Handlers?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Cookies', 'Headers', 'Server Components', 'Route Handlers'],
    enAnswer: 'In Server Components, read cookies using cookies() and headers using headers() from next/headers (both APIs return promises in Next.js 15). In Route Handlers, access them from the request argument or next/headers helper functions.',
    bnAnswer: 'সার্ভার কম্পোনেন্টে কুকি পড়তে next/headers থেকে cookies() এবং হেডার পড়তে headers() ব্যবহার করা হয় (নেক্সট ১৫-তে দুটিই প্রোমিজ)। রুট হ্যান্ডলারে এগুলো request আর্গুমেন্ট থেকে অথবা next/headers এর সাহায্যকারী ফাংশন দিয়ে পড়া যায়।',
    enExplanation: `### Explanation
Next.js provides dedicated server-only APIs to read request contexts:

1. **Server Components (\`next/headers\`)**:
   - Access is read-only. You cannot set cookies inside Server Components because rendering has already started.
   - **Next.js 15+**: Must use \`await cookies()\` and \`await headers()\` since they are asynchronous.
2. **Route Handlers & Server Actions**:
   - Can perform read and write operations.
   - Set cookies using \`cookies().set('name', 'value')\` dynamically.

### Real-World Example
In a user localization feature:
- We read the \`Accept-Language\` header inside the root page.
- If it starts with \`bn\`, we serve the Bangla localized version. If not, we serve English.
- We save the user preference in a \`lang\` cookie inside a Route Handler so subsequent visits bypass header checks.

### Best Practice
Always handle cookie mutations inside Server Actions or Route Handlers, never inside page components. Make sure to check key existence before reading properties to avoid undefined errors.

### Common Mistakes
Trying to write cookies inside a Server Component page file (e.g. \`cookies().set('token', val)\`), which triggers a runtime error: "Cookies can only be modified in a Server Action or Route Handler".

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies, headers } from 'next/headers';

export default async function DashboardPage() {
  // Await headers and cookies in Next.js 15+
  const cookieStore = await cookies();
  const headerStore = await headers();

  const theme = cookieStore.get('theme')?.value || 'light';
  const userAgent = headerStore.get('user-agent');

  return (
    <div className={\`p-6 \${theme === 'dark' ? 'bg-black text-white' : 'bg-white'}\`}>
      <h3>Active Theme: {theme}</h3>
      <p>Browser agent: {userAgent}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস রিকুয়েস্ট কন্টেক্সট পড়তে বিশেষ সার্ভার এপিআই অফার করে:

১. **সার্ভার কম্পোনেন্ট (\`next/headers\`):**
- কেবল রিড-অনলি (Read-only) করা সম্ভব। পেজ রেন্ডারিং শুরু হয়ে যাওয়ায় এখানে কুকি এডিট করা যায় না।
- **নেক্সট ১৫+**: হুক দুটি প্রোমিজ হওয়ায় অবশ্যই \`await cookies()\` এবং \`await headers()\` ব্যবহার করতে হবে।
২. **রুট হ্যান্ডলার ও সার্ভার অ্যাকশন:**
- এখানে রিড ও রাইট উভয়ই করা যায়।
- কোড: \`const cookieStore = await cookies(); cookieStore.set('name', 'value')\`।

### বাস্তব-ভিত্তিক উদাহরণ
লোকালাইজেশন ফিচার ডিজাইনে:
- রুট পেজে \`Accept-Language\` হেডার রিড করা হলো।
- ভাষা \`bn\` হলে বাংলা কন্টেন্ট এবং অন্য কিছু হলে ইংলিশ কন্টেন্ট রেন্ডার করা হলো।
- গ্রাহকের পছন্দটি কুকি বক্সে \`lang=bn\` লিখে রাখা হলো যাতে প্রতিবার হেডার স্ক্যান করতে না হয়।

### উত্তম অনুশীলন
কুকির রাইট বা এডিট সংক্রান্ত কোড কেবল সার্ভার অ্যাকশন ও এপিআই এন্ডপয়েন্টে লিখুন। কুকি রিড করার আগে চেক করে নিন যাতে আনডিফাইন্ড এরর এড়ানো যায়।

### সাধারণ ভুলসমূহ
সার্ভার কম্পোনেন্ট পেজ ফাইলের ভেতর কুকি সেট করার চেষ্টা করা (যেমন: \`cookies().set(...)\`)। এটি রানটাইম এরর দিবে: "Cookies can only be modified in a Server Action or Route Handler"।

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { cookies, headers } from 'next/headers';

export default async function DashboardPage() {
  // নেক্সট ১৫+ এ কুকি ও হেডারকে await করা বাধ্যতামূলক
  const cookieStore = await cookies();
  const headerStore = await headers();

  const theme = cookieStore.get('theme')?.value || 'light';
  const userAgent = headerStore.get('user-agent');

  return (
    <div className={\`p-6 \${theme === 'dark' ? 'bg-black text-white' : 'bg-white'}\`}>
      <h3>থিম সেটিংস: {theme}</h3>
      <p>ব্রাউজার এজেন্ট: {userAgent}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-56',
    title: 'Explain the security best practices for Server Actions in Next.js.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Server Actions', 'Security', 'Authentication', 'Validation'],
    enAnswer: 'Security in Server Actions requires treating them as public HTTP endpoints. You must validate input schemas (e.g. using Zod), run authorization guards inside the function body to verify user sessions, and sanitize all data before writing to the database.',
    bnAnswer: 'সার্ভার অ্যাকশন সুরক্ষায় এগুলোকে পাবলিক এপিআই এন্ডপয়েন্ট মনে করা উচিত। অবশ্যই ইনপুট ডাটা যাচাই করতে স্কিমা ভ্যালিডেটর (যেমন: Zod) ব্যবহার করতে হবে, ইউজারের অথরাইজেশন চেক করতে হবে এবং ডাটাবেসে সেভ করার আগে ইনপুট ফিল্টার করতে হবে।',
    enExplanation: `### Explanation
Because Server Actions look like regular Javascript functions, developers often forget that **anyone can call them with arbitrary parameters** using raw HTTP pings.

**Security checklist for Server Actions:**
1. **Authentication Guard**: Verify the session inside the action. Do not trust the client to pass the \`userId\` as a parameter. Fetch the \`userId\` from secure session cookies inside the action.
2. **Schema Input Validation**: Use libraries like Zod to enforce strict type checking on inputs, avoiding injection threats.
3. **Optimistic fallback limits**: Ensure that data changes are validated on the server even if client components show optimistic success.

### Real-World Example
In a database delete action (\`/actions/deletePost\`):
- **Unsafe**:
  \`\`\`typescript
  export async function deletePost(postId: string) { db.delete(postId); }
  \`\`\`
  Anyone can ping this action with another user's \`postId\` and wipe out their blogs.
- **Safe**:
  Retrieve user session from cookies inside the action, verify that the logged-in user is the actual author of the post, and only then execute the delete query.

### Best Practice
Treat Server Actions exactly like REST API endpoints. Never trust client arguments. Always run session lookups and Zod schema validations on every action execution.

### Common Mistakes
Passing the user's ID or email from the client component to the Server Action as a parameter. An attacker can modify this parameter using standard API interceptors and edit other users' records.

### Code Example
\`\`\`typescript
// app/actions/post.ts
"use server";

import { z } from 'zod';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';

// Define input validation schema
const deleteSchema = z.object({
  postId: z.string().min(1)
});

export async function secureDeletePost(rawInput: unknown) {
  // 1. Validate inputs schema using Zod
  const result = deleteSchema.safeParse(rawInput);
  if (!result.success) {
    return { error: "Invalid parameters" };
  }
  const { postId } = result.data;

  // 2. Validate Session inside the Action (Secure)
  const sessionToken = (await cookies()).get('session')?.value;
  const user = await getUserBySession(sessionToken);
  if (!user) {
    return { error: "Unauthorized operation" };
  }

  // 3. Confirm ownership before writing to DB
  const post = await db.post.find(postId);
  if (post.authorId !== user.id) {
    return { error: "Forbidden: You are not the author" };
  }

  await db.post.delete(postId);
  return { success: true };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার অ্যাকশন সাধারণ জাভাস্ক্রিপ্ট ফাংশন মনে হলেও ব্যাকগ্রাউন্ডে এগুলো ডাইনামিক HTTP এন্ডপয়েন্ট তৈরি করে, যা যেকোনো হ্যাকার র-পোস্ট রিকোয়েস্ট দিয়ে কল করতে পারে।

**সার্ভার অ্যাকশনের সিকিউরিটি চেকলিস্ট:**
১. **অথেন্টিকেশন গার্ড (Auth Guard):** অ্যাকশনের ভেতরেই সেশন কুকি চেক করে ইউজার ভেরিফাই করুন। ক্লায়েন্ট ফাইল থেকে প্যারামিটার হিসেবে পাঠানো \`userId\`-কে বিশ্বাস করবেন না।
২. **ইনপুট ভ্যালিডেশন**: টাইপ চেকিং ও ইনজেকশন থ্রেট এড়াতে Zod লাইব্রেরির স্কিমা ব্যবহার করুন।
৩. **ওনারশিপ চেক**: ইউজার নিজের আইডি বাদে অন্যের ডাটা মডিফাই করতে চাচ্ছে কিনা তা চেক করুন।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ পোস্ট মুছে ফেলার অ্যাকশনে (\`deletePost\`):
- **অসুরক্ষিত কোড**:
  \`\`\`typescript
  export async function deletePost(postId: string) { db.delete(postId); }
  \`\`\`
  যেকোনো ইউজার অন্য যেকোনো ব্লগ আইডির লিংক এপিআই-তে পোস্ট করে অন্য ইউজারের ডাটা ডিলিট করে দিতে পারবে।
- **সুরক্ষিত কোড**:
  অ্যাকশনের ভেতর কুকি থেকে সেশন রিড করে দেখা হলো কোন ইউজার অ্যাক্টিভ আছে। তারপর ডাটাবেস চেক করে কনফর্ম হওয়া গেল ওই পোস্টের আসল লেখক সে নিজে কিনা। মিলে গেলেই কেবল ডিলিট কুয়েরি চলবে।

### উত্তম অনুশীলন
সার্ভার অ্যাকশনকে সাধারণ এপিআই মনে করুন। ক্লায়েন্ট থেকে আসা প্যারামিটারকে ব্লাইন্ডলি ট্রাস্ট করবেন না। প্রতিবার সেশন চেক ও Zod স্কিমা ভ্যালিডেশন বাধ্যতামূলক করুন।

### সাধারণ ভুলসমূহ
ইউজারের আইডি বা মেইল ক্লায়েন্ট পেজ থেকে প্যারামিটার আকারে পাস করা। হ্যাকাররা পোস্টম্যান বা নেটওয়ার্ক ট্যাব দিয়ে এই প্যারামিটার এডিট করে অন্যের প্রোফাইলে হস্তক্ষেপ করতে পারে।

### Code Example
\`\`\`typescript
// app/actions/post.ts
"use server";

import { z } from 'zod';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';

// Zod ইনপুট স্কিমা ভ্যালিডেশন ডিফাইন
const deleteSchema = z.object({
  postId: z.string().min(1)
});

export async function secureDeletePost(rawInput: unknown) {
  // ১. Zod দিয়ে স্কিমা টেস্ট
  const result = deleteSchema.safeParse(rawInput);
  if (!result.success) {
    return { error: "ভুল প্যারামিটার" };
  }
  const { postId } = result.data;

  // ২. অ্যাকশনের ভেতর কুকি সেশন চেক করা (নিরাপদ)
  const sessionToken = (await cookies()).get('session')?.value;
  const user = await getUserBySession(sessionToken);
  if (!user) {
    return { error: "অনুমতি নেই" };
  }

  // ৩. ওনারশিপ যাচাই করা
  const post = await db.post.find(postId);
  if (post.authorId !== user.id) {
    return { error: "এই পোস্ট মুছে ফেলার অধিকার আপনার নেই" };
  }

  await db.post.delete(postId);
  return { success: true };
}
\`\`\``
  },
  {
    id: 'nextjs-57',
    title: 'How do you use the next/script component to load external scripts with different loading strategies?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['next/script', 'Scripts Loading', 'Core Web Vitals', 'Performance'],
    enAnswer: 'The next/script component optimizes loading external scripts using the strategy prop. It supports: beforeInteractive (loads before hydration), afterInteractive (default, loads after hydration), lazyOnload (loads during idle time), and worker (loads inside a Web Worker).',
    bnAnswer: 'next/script কম্পোনেন্টটি strategy প্রপসের সাহায্যে এক্সটার্নাল স্ক্রিপ্ট লোডিং অপ্টিমাইজ করে। এটি ৪টি মোড সমর্থন করে: beforeInteractive (হাইড্রেটের আগে লোড হয়), afterInteractive (ডিফল্ট, হাইড্রেটের পরে লোড হয়), lazyOnload (অলস সময়ে লোড হয়), এবং worker (ওয়েব ওয়ার্কারে লোড হয়)।',
    enExplanation: `### Explanation
Injecting third-party scripts (like Google Analytics, Stripe checkout, or chat widgets) using standard \`<script>\` tags blocks page rendering, slowing down core web vitals.

**\`next/script\` Strategies:**
- **\`beforeInteractive\`**: Use only for critical core scripts (like bot detectors). Loads before any Next.js code compiles.
- **\`afterInteractive\` (Default)**: Loads as soon as hydration completes. Perfect for tag managers and analytics.
- **\`lazyOnload\`**: Loads during browser idle periods. Ideal for heavy scripts like chat widgets or ads support.
- **\`worker\`**: Executes the script inside a Web Worker, freeing up the main browser thread for smooth UI interactions.

### Real-World Example
In an enterprise site using Google Analytics and a Customer Help Chat:
- Google Analytics uses \`afterInteractive\` to start tracking users as soon as possible.
- The heavy Help Chat uses \`lazyOnload\` so it doesn't slow down the main page load score.

### Best Practice
Avoid loading heavy scripts globally unless necessary. Only place the script component inside the layouts or pages that actually utilize it to save user data.

### Common Mistakes
Placing \`beforeInteractive\` scripts inside page components instead of root layouts. Next.js enforces placing beforeInteractive scripts inside root layouts/documents only.

### Code Example
\`\`\`typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Load Google Analytics after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />

        {/* Load heavy Chat Widget lazily when browser is idle */}
        <Script
          src="https://example.com/chat-widget.js"
          strategy="lazyOnload"
          onLoad={() => console.log('Chat widget loaded successfully!')}
        />
      </body>
    </html>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সনাতন \`<script>\` ট্যাগ দিয়ে থার্ড-পার্টি লাইব্রেরি (যেমন গুগল অ্যানালিটিক্স বা পেমেন্ট গেটওয়ে) লোড করলে ব্রাউজার পেজ লোড করা থামিয়ে স্ক্রিপ্ট ডাউনলোড করে, যা সাইটের গতি ধীর করে।

**\`next/script\` এর স্ট্রেটেজিসমূহ:**
- **\`beforeInteractive\`**: অত্যন্ত জরুরি কোডের জন্য (যেমন রোবট ডিটেক্টর)। এটি নেক্সট জেএস রান হওয়ার আগেই ডাউনলোড হবে।
- **\`afterInteractive\` (ডিফল্ট)**: হাইড্রেশন শেষ হওয়া মাত্র লোড হবে। গুগল ট্যাগ ম্যানেজারের জন্য এটি আদর্শ।
- **\`lazyOnload\`**: ব্রাউজার কাজ শেষ করে সম্পূর্ণ অলস বসার পর এটি ডাউনলোড হবে। ভারী চ্যাট উইজেটের জন্য ভালো।
- **\`worker\`**: স্ক্রিপ্টটি ব্রাউজার থ্রেডের বাইরে ওয়েব ওয়ার্কারে (Web Worker) রান করায়, যা স্ক্রিনের অ্যানিমেশনকে জ্যাম হতে দেয় না।

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির ল্যান্ডিং পেজে:
- গুগল অ্যানালিটিক্স \`afterInteractive\` দিয়ে রুট করা হলো যাতে ইউজার ট্র্যাকিং সাথে সাথে স্টার্ট হয়।
- হেল্প চ্যাট বা কাস্টমার সাপোর্ট বাটনটি \`lazyOnload\` দিয়ে লোড করা হলো, যাতে পেজ খোলার প্রথম ২ সেকেন্ডে চ্যাটের জন্য কোনো ব্যান্ডউইথ নষ্ট না হয়।

### উত্তম অনুশীলন
প্রয়োজন ছাড়া গ্লোবালি সব স্ক্রিপ্ট রুট ফাইলে লোড করবেন না। কেবল যে পেজে ওই এপিআই ব্যবহৃত হবে (যেমন পেমেন্ট পেজে স্ট্রাইপ স্ক্রিপ্ট) কেবল সেই পেজ ফাইলের ভেতর স্ক্রিপ্টটি লোড করুন।

### সাধারণ ভুলসমূহ
রুট লেআউট ছাড়া পেজ ফাইলে \`beforeInteractive\` স্ক্রিপ্ট ব্যবহার করা। নেক্সট জেএস-এ \`beforeInteractive\` ফন্ট/স্ক্রিপ্ট কেবল রুট লেআউট ফাইলে বসানো নিয়ম।

### Code Example
\`\`\`typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>
        {children}
        
        {/* পেজ রেডি হওয়ার পর গুগল অ্যানালিটিক্স লোড হবে */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />

        {/* ব্রাউজার ফ্রী হওয়ার পর লেজি লোডিংয়ে চ্যাট উইজেট চালু হবে */}
        <Script
          src="https://example.com/chat-widget.js"
          strategy="lazyOnload"
          onLoad={() => console.log('চ্যাট উইজেট সফলভাবে চালু হয়েছে!')}
        />
      </body>
    </html>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-58',
    title: 'How do you configure OpenGraph and Twitter card metadata for dynamic SEO?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Metadata', 'SEO', 'OpenGraph', 'Twitter Cards'],
    enAnswer: 'OpenGraph and Twitter card metadata are configured inside the exported Metadata object of page.tsx by declaring openGraph and twitter properties. For dynamic routes, they are defined inside the generateMetadata function.',
    bnAnswer: 'ওপেনগ্রাফ (OpenGraph) ও টুইটার কার্ড মেটাডাটা কনফিগার করতে page.tsx থেকে এক্সপোর্ট করা মেটাডাটা অবজেক্টের ভেতর openGraph ও twitter প্রপার্টি ডিক্লেয়ার করা হয়। ডায়নামিক পেজের জন্য generateMetadata ফাংশন ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
Social media platforms (like Facebook, Twitter, LinkedIn) inspect OpenGraph HTML tags when users share your links to generate rich link previews (image, title, summary).

**Configuration structure:**
- **\`openGraph\`**:
  - \`title\`, \`description\`, \`url\`, \`siteName\`.
  - \`images\`: Array of image objects containing URL, width, and height.
- **\`twitter\`**:
  - \`card\`: Type of preview template (\`summary_large_image\` or \`summary\`).
  - \`title\`, \`description\`, \`images\`.

### Real-World Example
When a user shares a product link (\`/products/special-laptop\`) on Facebook:
- You want the shared card to display a large photo of the laptop, the product name, and the sale price.
- You configure \`openGraph\` inside \`generateMetadata\` to fetch the laptop image and name dynamically.

### Best Practice
Always specify absolute URLs for openGraph images. Relative image paths (like \`/logo.png\`) will not resolve on external platforms like Facebook. Always use the site URL prefix.

### Common Mistakes
Forgetting to declare the \`card: "summary_large_image"\` property in the twitter configuration, which makes Twitter fallback to a tiny, cropped thumbnail instead of a large banner.

### Code Example
\`\`\`typescript
// app/products/[slug]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductDetails(slug);
  const siteUrl = 'https://mystore.com';

  return {
    title: product.name,
    description: product.description,
    
    // OpenGraph Schema
    openGraph: {
      title: product.name,
      description: product.description,
      url: \`\${siteUrl}/products/\${slug}\`,
      siteName: 'MyStore',
      type: 'website',
      images: [
        {
          url: \`\${siteUrl}\${product.imagePath}\`, // Absolute URL mandatory
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    
    // Twitter Card Schema
    twitter: {
      card: 'summary_large_image', // Renders large banner preview
      title: product.name,
      description: product.description,
      images: [\`\${siteUrl}\${product.imagePath}\`],
    },
  };
}

export default function ProductPage() {
  return <div>Product detail content renders here...</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সোশ্যাল মিডিয়া প্ল্যাটফর্মগুলো (যেমন ফেসবুক, টুইটার বা লিঙ্কডইন) লিংকের প্রিভিউ ছবি, টাইটেল ও সামারি কার্ড জেনারেট করতে ওপেনগ্রাফ এইচটিএমএল ট্যাগের ওপর নির্ভর করে।

**মেটাডাটা কনফিগারেশনের গঠন:**
- **\`openGraph\`**:
  - \`title\`, \`description\`, \`url\`, \`siteName\`।
  - \`images\`: ছবির ইউআরএল, প্রস্থ ও উচ্চতা সম্বলিত অবজেক্ট অ্যারে।
- **\`twitter\`**:
  - \`card\`: প্রিভিউ টেমপ্লেটের ধরণ (যেমন: \`summary_large_image\`)।
  - \`title\`, \`description\`, \`images\`।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্ল্যাট ভাড়ার লিংকের ক্ষেত্রে (\`/products/special-laptop\`):
- ফেসবুকের লিংকে প্রোডাক্ট শেয়ার করলে যেন বড় একটি ল্যাপটপের ছবি ও অফার প্রাইজ শো করে।
- এর জন্য \`generateMetadata\` এপিআই থেকে ডাটা এনে ওপেনগ্রাফ মেটাডাটার ইমেজ ফিল্ডে ছবিটির লিংক পুশ করে দিলে সোশ্যাল সাইটে আকর্ষক প্রিভিউ জেনারেট হবে।

### উত্তম অনুশীলন
ওপেনগ্রাফ ছবিতে ইমেজ পাথের জন্য সর্বদা অ্যাবসলিউট ইউআরএল (Absolute URL - e.g. https://yoursite.com/img.jpg) ব্যবহার করুন। রিলেটিভ পাথ (যেমন: \`/logo.png\`) দিলে ফেসবুক বা টুইটার সেটি লোড করতে পারবে না।

### সাধারণ ভুলসমূহ
টুইটার কনফিগারেশনে \`card: "summary_large_image"\` প্রপার্টি ডিক্লেয়ার করতে ভুলে যাওয়া। এটি না থাকলে টুইটার বড় ব্যানারের বদলে ছোট চারকোনা ক্রপ করা থাম্বনেইল কার্ড দেখাবে।

### Code Example
\`\`\`typescript
// app/products/[slug]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductDetails(slug);
  const siteUrl = 'https://mystore.com';

  return {
    title: product.name,
    description: product.description,
    
    // ওপেনগ্রাফ মেটাডাটা
    openGraph: {
      title: product.name,
      description: product.description,
      url: \`\${siteUrl}/products/\${slug}\`,
      siteName: 'MyStore',
      type: 'website',
      images: [
        {
          url: \`\${siteUrl}\${product.imagePath}\`, // অ্যাবসলিউট ইউআরএল বাধ্যতামূলক
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    
    // টুইটার কার্ড সেটিংস
    twitter: {
      card: 'summary_large_image', // বড় ব্যানার প্রিভিউ কার্ড দেখাবে
      title: product.name,
      description: product.description,
      images: [\`\${siteUrl}\${product.imagePath}\`],
    },
  };
}

export default function ProductPage() {
  return <div>প্রোডাক্টের বিবরণ...</div>;
}
\`\`\``
  },
  {
    id: 'nextjs-59',
    title: 'What is the purpose of route segment configs like dynamicParams, dynamic, and revalidate?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Route Configuration', 'App Router', 'Performance', 'Caching'],
    enAnswer: 'Route Segment Configs customize Next.js page caching and rendering behaviors. dynamic configures static/dynamic rendering. dynamicParams determines fallback behavior for unbuilt dynamic paths. revalidate configures the page cache lifetime.',
    bnAnswer: 'রুট সেগমেন্ট কনফিগারেশন পেজের ক্যাশিং ও রেন্ডারিং আচরণ পরিবর্তন করে। dynamic নির্ধারণ করে পেজটি স্ট্যাটিক নাকি ডাইনামিক হবে। dynamicParams আনবিল্ড ডাইনামিক পাথের অন-ডিমান্ড আচরণ ঠিক করে। revalidate ক্যাশের আয়ুষ্কাল নির্ধারণ করে।',
    enExplanation: `### Explanation
You customize page behaviors by exporting configuration constants at the top of layout or page files:

1. **\`export const dynamic = 'auto' | 'force-dynamic' | 'error' | 'force-static'\`**:
   - \`auto\` (Default): Next.js dynamically checks code triggers to choose rendering.
   - \`force-dynamic\`: Forces SSR, disabling static compilation caches.
   - \`force-static\`: Forces static compilation (ignores cookies and headers).
2. **\`export const dynamicParams = true | false\`**:
   - Used alongside \`generateStaticParams\`.
   - \`true\` (Default): Dynamic paths not built at compile time render on-demand and cache (ISR).
   - \`false\`: Dynamic paths not generated during compile throw a 404 error instantly.
3. **\`export const revalidate = number | false\`**:
   - Sets cache expiry time in seconds.
   - \`false\` (Default): Cache is kept indefinitely unless purged (SSG).

### Real-World Example
In a ticketing platform:
- Tickets exist for specific IDs compiled in \`generateStaticParams\`.
- You do not want users trying to access random fake ticket IDs, so you set \`dynamicParams = false\`. Any invalid ID instantly triggers a 404 page without querying the database.

### Best Practice
Use segment configurations instead of complex query bypass options inside components. For API Route Handlers, use \`export const dynamic = 'force-dynamic'\` if they read dynamic request fields.

### Common Mistakes
Setting \`dynamic = 'force-static'\` on a page that checks login sessions via cookies. This will cache the initial user's HTML, showing the logged-in layout to guest users.

### Code Example
\`\`\`typescript
// app/tickets/[id]/page.tsx
import { notFound } from 'next/navigation';

export const dynamic = 'auto';
export const revalidate = 60; // Revalidate cache every 60 seconds
export const dynamicParams = false; // Throw 404 if path ID is not generated during build

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' }
  ];
}

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h1>Ticket ID View: {id}</h1>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পেজ বা লেআউট ফাইলের ওপরে কনস্ট্যান্ট ভ্যারিয়েবল এক্সপোর্ট করে নেক্সট জেএস-এর রেন্ডারিং অপশন কাস্টমাইজ করা যায়:

১. **\`export const dynamic = 'auto' | 'force-dynamic' | 'force-static'\`**:
- \`auto\` (ডিফল্ট): কোডের ট্রিগার দেখে নেক্সট জেএস নিজেই মোড ঠিক করে।
- \`force-dynamic\`: পেজটিকে জোরপূর্বক SSR মোডে কনভার্ট করে।
- \`force-static\`: কুকিজ ও হেডার উপেক্ষা করে জোরপূর্বক স্ট্যাটিক পেজ কম্পাইল করে।
২. **\`export const dynamicParams = true | false\`**:
- এটি \`generateStaticParams\` এর সাথে কাজ করে।
- \`true\` (ডিফল্ট): বিল্ডের সময় না থাকা নতুন লিংক রিকোয়েস্ট এলে অন-ডিমান্ড রেন্ডার করে সেভ করে।
- \`false\`: বিল্ডের সময় তৈরি না হওয়া পেজে ঢুকলে সরাসরি ৪০৪ (404) এরর দেখায়।
৩. **\`export const revalidate = number | false\`**:
- সেকেন্ডে ক্যাশ রিলিজের সময়সীমা নির্ধারণ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ট্রাভেল টিকিট সাইটে:
- নির্দিষ্ট টিকিট আইডিগুলোর তালিকা বিল্ড টাইমে তৈরি করা হয়েছে।
- ইউজার যেন কোনো ভুল আইডি টাইপ করে ডাটাবেসের ওপর ট্রাফিক ক্র্যাশ না করে, সেজন্য \`dynamicParams = false\` সেট করে দেওয়া হলো। এতে ডাটাবেস কুয়েরির আগেই নেক্সট জেএস ইন-বিল্ট ৪০৪ স্ক্রিন শো করাবে।

### উত্তম অনুশীলন
কাস্টমাইজেশনের জন্য পেজ কনফিগ ভ্যারিয়েবল ব্যবহার করুন। এপিআই রুট ডাইনামিক রিকোয়েস্ট নিয়ে কাজ করলে সেখানে \`export const dynamic = 'force-dynamic'\` ডিক্লেয়ার করে রাখা নিরাপদ।

### সাধারণ ভুলসমূহ
লগইন চেক করা ফাইলে \`dynamic = 'force-static'\` লিখে রাখা। এটি প্রথম ইউজারের প্রোফাইল ক্যাশ করে নিয়ে পরবর্তী সমস্ত রিফ্রেশে অন্য ইউজারদের কাছে ওই প্রোফাইল প্রদর্শন করবে।

### Code Example
\`\`\`typescript
// app/tickets/[id]/page.tsx
import { notFound } from 'next/navigation';

export const dynamic = 'auto';
export const revalidate = 60; // প্রতি ৬০ সেকেন্ড পর ক্যাশ আপডেট হবে
export const dynamicParams = false; // বিল্ড টাইমে তৈরি না হওয়া আইডিতে সরাসরি ৪০৪ দেখাবে

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' }
  ];
}

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h1>টিকিট আইডি: {id}</h1>;
}
\`\`\``
  },
  {
    id: 'nextjs-60',
    title: 'How do you implement a custom image loader in next/image to source images from custom CDNs?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Image Optimization', 'Custom Loader', 'CDN', 'Cloudinary'],
    enAnswer: 'A custom image loader is implemented by writing a loader function that accepts src, width, and quality parameters and returns a formatted URL string pointing to your dynamic image resizing CDN (e.g. Cloudinary or ImageKit).',
    bnAnswer: 'কাস্টম ইমেজ লোডার তৈরি করতে একটি লোডার ফাংশন লিখতে হয় যা src, width এবং quality আর্গুমেন্ট গ্রহণ করে আপনার ডাইনামিক ইমেজ সিডিএন-এর (যেমন: Cloudinary বা ImageKit) সঠিক লিংক ফরম্যাট করে রিটার্ন করে।',
    enExplanation: `### Explanation
By default, the Next.js server processes image optimization requests itself. If your site has millions of images, this consumes high CPU and memory resources on your database server.

**Custom Loader Mechanism:**
- You delegate image resizing to a dedicated dynamic asset CDN (like Cloudinary, Imgix, or Akamai).
- You write a loader function that maps width and quality to query parameters:
  \`\`\`typescript
  const myLoader = ({ src, width, quality }) => \`\${src}?w=\${width}&q=\${quality || 75}\`
  \`\`\`
- The browser downloads the resized assets directly from the CDN, bypassing Next.js server cores entirely.

### Real-World Example
An online photography gallery hosts 50,000 photos in Cloudinary:
- Instead of downloading full-size images and letting the Next.js server compile them, you use a custom loader.
- When an image requests width 400px, the loader transforms the URL to \`https://res.cloudinary.com/.../w_400/photo.jpg\`. Cloudinary resizes and caches the image instantly.

### Best Practice
For high-traffic production sites, use a custom image loader with a dynamic resizing CDN instead of Next.js server default optimization to save CPU resources and server bandwidth costs.

### Common Mistakes
Forgetting that custom loaders must return the dynamic URL correctly. If you return a static path without appending the \`width\` parameter, the browser will download the exact same heavy file size for both mobile and desktop.

### Code Example
\`\`\`typescript
// app/components/CustomImage.tsx
"use client";

import Image from 'next/image';

// Custom Loader Function matching Cloudinary URL structure
const cloudinaryLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const params = [
    \`f_auto\`,       // Auto format (WebP/AVIF)
    \`c_limit\`,      // Limit resize bounds
    \`w_\${width}\`,   // Target width
    \`q_\${quality || 'auto'}\` // Target quality
  ].join(',');

  // Return formatted URL pointing to Cloudinary
  return \`https://res.cloudinary.com/demo/image/upload/\${params}/\${src}\`;
};

export default function CustomImage() {
  return (
    <div className="relative w-80 h-60">
      <Image
        loader={cloudinaryLoader} // Inject custom loader
        src="sample.jpg" // Target asset relative to Cloudinary account
        alt="Cloudinary Optimized Image"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে নেক্সট জেএস সার্ভার নিজের প্রসেসর ব্যবহার করে ইমেজ সাইজ অপ্টিমাইজ করে। যদি সাইটে কয়েক হাজার ছবি থাকে, তবে এটি সার্ভারের সিপিইউ (CPU) ও মেমোরি শেষ করে দেবে।

**কাস্টম লোডারের সুবিধা:**
- ইমেজ রিসাইজের ভারী কাজটি অন্য কোনো ডেডিকেটেড সিডিএন (যেমন Cloudinary, Imgix) এর ওপর ছেড়ে দেওয়া হয়।
- আপনি একটি লোডার ফাংশন লেখেন যা উইডথ ও কোয়ালিটি কুয়েরিতে ম্যাপ করে:
  \`\`\`typescript
  const myLoader = ({ src, width, quality }) => \`\${src}?w=\${width}&q=\${quality || 75}\`
  \`\`\`
- ব্রাউজার সরাসরি ওই সিডিএন লিংক থেকে কম্প্রেসড ইমেজ নামায়, মূল সার্ভারে ১% লোডও পড়ে না।

### বাস্তব-ভিত্তিক উদাহরণ
ফটোগ্রাফি সাইটে ৫০,০০০ ছবি ক্লাউডিনারিতে হোস্ট করা আছে:
- কাস্টম লোডার ব্যবহার করায় স্ক্রিনের প্রস্থ ৪০০px হলে লোডার স্বয়ংক্রিয়ভাবে লিংক কনভার্ট করে \`https://res.cloudinary.com/.../w_400/photo.jpg\` বানিয়ে দেয়। ক্লাউডিনারি সাথে সাথে ছবিটি সাইজ করে ব্রাউজারে পাঠায়।

### উত্তম অনুশীলন
হাই-ট্রাফিক সাইটগুলোতে সার্ভার প্রসেসরের ওপর প্রেশার এড়াতে ক্লাউডিনারি বা ইমজিক্সের মতো সিডিএন দিয়ে কাস্টম ইমেজ লোডার সেট করুন।

### সাধারণ ভুলসমূহ
কাস্টম লোডার লেখার সময় \`width\` প্যারামিটারটি লিংকের সাথে জুড়তে ভুলে যাওয়া। এর ফলে মোবাইল হোক বা ল্যাপটপ, ব্রাউজার সবসময় মূল ওজনের বড় ছবিটিই ডাউনলোড করবে।

### Code Example
\`\`\`typescript
// app/components/CustomImage.tsx
"use client";

import Image from 'next/image';

// ক্লাউডিনারি লিংক জেনারেট করার কাস্টম ইমেজ লোডার
const cloudinaryLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const params = [
    \`f_auto\`,       // অটো ফরম্যাট (WebP/AVIF)
    \`c_limit\`,      // ইমেজ ক্রপিং কন্ডিশন
    \`w_\${width}\`,   // কাঙ্ক্ষিত প্রস্থ
    \`q_\${quality || 'auto'}\` // ছবির কোয়ালিটি
  ].join(',');

  // কাস্টম ডাইনামিক ক্লাউডিনারি ইউআরএল রিটার্ন
  return \`https://res.cloudinary.com/demo/image/upload/\${params}/\${src}\`;
};

export default function CustomImage() {
  return (
    <div className="relative w-80 h-60">
      <Image
        loader={cloudinaryLoader} // কাস্টম লোডার ইনজেক্ট করা হলো
        src="sample.jpg" // ক্লাউডিনারি অ্যাকাউন্টের ইমেজ ফাইল
        alt="অপ্টিমাইজড ইমেজ"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-61',
    title: 'Why is a singleton pattern recommended for database client connections in serverless Next.js, and how do you implement it?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Database', 'Singleton Pattern', 'Serverless', 'Mongoose', 'Prisma'],
    enAnswer: 'In serverless environments, hot reloads in development or scaling events in production recreate node processes, opening duplicate database connections. A singleton pattern stores the database client in the globalThis object, preserving a single connection instance across hot reloads.',
    bnAnswer: 'সার্ভারলেস হোস্টিংয়ে ডেভেলপমেন্ট রিলোড বা স্কেলিং ইভেন্টে বার বার নোড প্রসেস রিস্টার্ট হয়, যা একাধিক ডুপ্লিকেট ডাটাবেস কানেকশন তৈরি করে। সিঙ্গেলটন প্যাটার্ন ডাটাবেস ক্লায়েন্টকে globalThis অবজেক্টে সেভ করে একটি কানেকশন কানেক্টেড রাখে।',
    enExplanation: `### Explanation
When running Next.js locally in development mode (\`npm run dev\`), every code edit triggers a hot-reload:
- Next.js re-runs compiling steps.
- The server files are re-evaluated.
- If you declare \`const client = new MongoClient()\` inside your file scopes, a brand-new connection pool opens on every single code save.
- Within 10 saves, you will exhaust MongoDB's connection limit, causing errors.

**The globalThis Solution:**
- Node's \`globalThis\` object is not cleared during development hot-reloads.
- Storing the database client reference inside \`globalThis\` checks for existence before calling \`new Client()\`, reusing the existing connection instance.

### Real-World Example
In a project using Prisma or Mongoose with MongoDB:
- Without a singleton, editing CSS in a page file triggers a hot reload.
- The server opens a new connection pool. The database log shows: "Connection count exceeded 100".
- Implementing the global check keeps connection count stable at exactly 1.

### Best Practice
Always wrap your database clients (Mongoose connection, PrismaClient, MongoClient) in a global singleton utility. Exclude this global check in production mode if you are deploying to serverless platforms where containers are isolated anyway.

### Common Mistakes
Forgetting that hot reloads re-execute file-level instantiations. Placing raw client instance instantiations inside route files will crash database pools quickly in development.

### Code Example
\`\`\`typescript
// src/lib/db.ts
import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydb';

// Add type declaration to prevent TypeScript errors on globalThis
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to preserve connection across hot-reloads
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri);
    globalThis._mongoClientPromise = client.connect();
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  // In production, safe to instantiate fresh client since processes are isolated
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস-এ লোকাল কোড এডিট করার সময় প্রতিবার হট-রিলোড (Hot-reload) ঘটে:
- ব্যাকএন্ডের কোড রি-কম্পাইল হয়।
- ফাইলগুলো নতুন করে রান করা হয়।
- কোডে যদি \`const client = new MongoClient()\` লেখা থাকে, তবে প্রতিবার কোড এডিটের পর ডাটাবেসের সাথে একদম নতুন একটি কানেকশন তৈরি হবে।
- এভাবে ১০ বার কোড সেভ দিলেই ডাটাবেসের ম্যাক্স কানেকশন লিমিট শেষ হয়ে প্রজেক্ট হ্যাং করবে।

**সিঙ্গেলটন প্যাটার্ন সমাধান:**
- নোডজেএস-এর \`globalThis\` অবজেক্টটি হট-রিলোডের সময় মেমোরি থেকে মুছে যায় না।
- ডাটাবেস ক্লায়েন্টটি \`globalThis\`-এর ভেতর জমা রাখলে প্রতি রিলোডের সময় চেক করে আগের সচল কানেকশনটিই রিইউজ করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
মঙ্গুস বা প্রিজমা (Prisma) ব্যবহারের সময়:
- সিঙ্গেলটন না থাকলে সিএসএস এডিট করলেও মঙ্গোডিবিতে নতুন পোল তৈরি হতো এবং ডাটাবেস লগে "Connection count exceeded 100" এরর আসত।
- গ্লোবাল উইন্ডো ট্র্যাকিং করার পর কানেকশন সবসময় ১টিতেই ফিক্সড থাকে।

### উত্তম অনুশীলন
ডাটাবেস কানেকশনের জন্য সর্বদা একটি গ্লোবাল সিঙ্গেলটন ফাইল (\`db.ts\`) তৈরি করে প্রজেক্ট জুড়ে সেটি ব্যবহার করুন। প্রোডাকশন ডোমেইনে কন্টেইনার আইসোলেটেড থাকায় গ্লোবাল চেকটি কেবল ডেভেলপমেন্ট মোডের জন্য একটিভ রাখুন।

### সাধারণ ভুলসমূহ
সরাসরি রুট এপিআই ফাইলে ডাটাবেস ক্লায়েন্ট ইনিশিয়ালাইজ কোড লেখা। এর ফলে হট-রিলোডের সময় এপিআই পুলে কানেকশন ওভারফ্লো ঘটবে।

### Code Example
\`\`\`typescript
// src/lib/db.ts
import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydb';

// টাইপস্ক্রিপ্ট টাইপ এরর দূর করতে গ্লোবাল ডিক্লেয়ারেশন
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // ডেভেলপমেন্টে হট-রিলোড এড়াতে globalThis ব্যবহার করে কানেকশন সংরক্ষণ
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri);
    globalThis._mongoClientPromise = client.connect();
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  // প্রোডাকশনে প্রসেস আইসোলেটেড থাকায় ডিরেক্ট ক্লায়েন্ট রান নিরাপদ
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
\`\`\``
  },
  {
    id: 'nextjs-62',
    title: 'How do you implement internationalization (i18n) routing in Next.js App Router?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['i18n', 'Routing', 'Localization', 'App Router'],
    enAnswer: 'i18n routing is implemented in the App Router by creating a [lang] route group segment inside the app/ directory, capturing the locale prefix in the URL, and using middleware to detect client language preferences and redirect automatically.',
    bnAnswer: 'App Router-এ i18n রাউটিং করতে app/ ফোল্ডারের ভেতর [lang] নামক রুট সেগমেন্ট তৈরি করা হয়, যা ইউআরএল থেকে লোকেল (locale) রিড করে। এছাড়া মিডলওয়্যার ব্যবহার করে ইউজারের ভাষা ডিটেক্ট করে স্বয়ংক্রিয় রিডাইরেক্ট সম্পন্ন করা হয়।',
    enExplanation: `### Explanation
Internationalization (i18n) allows your application to support multiple languages (e.g. English, Bengali) under different path prefixes (e.g. \`/en/about\`, \`/bn/about\`).

**App Router i18n Architecture:**
1. **Dynamic Segment**: Place all page routes inside a folder named \`app/[lang]/\`.
2. **Path Parameter**: The language code (\`en\` or \`bn\`) is passed to page components as \`params.lang\`.
3. **Middleware Redirection**: A middleware checks the user's browser language request header (\`Accept-Language\`). If they visit \`/about\` (no language prefix), it redirects them to \`/en/about\` or \`/bn/about\` automatically.

### Real-World Example
In a global service app:
- A user from Bangladesh visits \`site.com/pricing\`.
- Middleware detects \`Accept-Language: bn\`, and redirects them to \`site.com/bn/pricing\`.
- The page component awaits \`params\`, reads \`lang: "bn"\`, and loads the Bengali translation dictionary files dynamically.

### Best Practice
Store dictionaries as simple JSON files (e.g. \`dictionaries/en.json\`). Create a helper utility to resolve these dictionary objects using dynamic imports based on the active \`lang\` parameter to keep page compilation optimized.

### Common Mistakes
Forgetting to place your root \`layout.tsx\` inside the \`[lang]\` folder. If layout is not inside the language segment folder, it cannot access the dynamic locale param to set the HTML lang attribute (\`<html lang={lang}>\`).

### Code Example
\`\`\`typescript
// app/[lang]/dictionaries.ts
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  bn: () => import('./dictionaries/bn.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'bn') => {
  return dictionaries[locale]();
};

// app/[lang]/page.tsx
type Props = {
  params: Promise<{ lang: 'en' | 'bn' }>;
};

export default async function Page({ params }: Props) {
  const { lang } = await params;
  
  // Fetch translation dynamically based on URL language prefix
  const dict = await getDictionary(lang);

  return (
    <main className="p-6">
      <h1>{dict.welcome}</h1>
      <p>{dict.description}</p>
    </main>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লোকালাইজেশন বা আন্তর্জাতিকীকরণ (i18n) অ্যাপকে ইউআরএল পাথের শুরুতে ভাষার নাম বসিয়ে একাধিক ভাষা সমর্থনের সুবিধা দেয় (যেমন: \`/en/about\`, \`/bn/about\`)।

**App Router i18n আর্কিটেকচার:**
১. **ডায়নামিক সেগমেন্ট**: আপনার সমস্ত পেজকে \`app/[lang]/\` ফোল্ডারের অধীনে সাজাতে হবে।
২. **প্যারামিটার পাথ**: ভাষার সংক্ষিপ্ত কোডটি (\`en\` বা \`bn\`) পেজে প্রপসের \`params.lang\` আকারে আসে।
৩. **মিডলওয়্যার কনফিগারেশন**: মিডলওয়্যার ইউজারের ব্রাউজার হেডার (\`Accept-Language\`) চেক করে। ইউজার ল্যাঙ্গুয়েজ ছাড়া কোনো পাথে ঢুকলে (যেমন: \`/about\`), এটি তাকে অটো \`/bn/about\` লিংকে রিডাইরেক্ট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি আন্তর্জাতিক সার্ভিস অ্যাপে:
- বাংলাদেশ থেকে কোনো ভিজিটর \`site.com/pricing\` লিংকে ক্লিক করলেন।
- মিডলওয়্যার তার ব্রাউজার ট্র্যাক করে সরাসরি \`site.com/bn/pricing\`-এ পাঠিয়ে দিল।
- পেজ ফাইলে ইউআরএল থেকে \`lang: "bn"\` রিড করে বাংলা ডিকশনারি বা ট্রান্সলেশন টেক্সট স্ক্রিনে লোড করানো হলো।

### উত্তম অনুশীলন
ট্রান্সলেশন টেক্সটগুলো আলাদা JSON ফাইলে রাখুন (যেমন: \`en.json\`, \`bn.json\`)। পেজে সরাসরি ইম্পোর্ট না করে ভাষার মানের ওপর ভিত্তি করে ডাইনামিক ইম্পোর্ট (dynamic import) করে ডাটা লোড করান।

### সাধারণ ভুলসমূহ
রুট \`layout.tsx\` ফাইলটিকে \`[lang]\` ফোল্ডারের ভেতর স্থানান্তর করতে ভুলে যাওয়া। এটি বাইরে থাকলে লেআউটে থাকা HTML ল্যাঙ্গুয়েজ ট্যাগটিতে ডায়নামিক ভাষা (\`<html lang={lang}>\`) সেট করা যাবে না।

### Code Example
\`\`\`typescript
// app/[lang]/dictionaries.ts
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  bn: () => import('./dictionaries/bn.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'bn') => {
  return dictionaries[locale]();
};

// app/[lang]/page.tsx
type Props = {
  params: Promise<{ lang: 'en' | 'bn' }>;
};

export default async function Page({ params }: Props) {
  const { lang } = await params;
  
  // ইউআরএল ল্যাঙ্গুয়েজ পাথের ওপর ভিত্তি করে সঠিক ডিকশনারি লোড করা
  const dict = await getDictionary(lang);

  return (
    <main className="p-6">
      <h1>{dict.welcome}</h1>
      <p>{dict.description}</p>
    </main>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-63',
    title: 'Explain the difference between redirects and rewrites in Next.js configuration.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['next.config.js', 'Redirects', 'Rewrites', 'SEO'],
    enAnswer: 'A redirect sends an HTTP redirect status code (301 or 307) telling the browser to navigate to a new URL, changing the browser URL bar. A rewrite acts as a server proxy, forwarding request paths internally to a destination without changing the URL inside the browser.',
    bnAnswer: 'রিডাইরেক্ট (redirect) ব্রাউজারে একটি HTTP রিডাইরেক্ট কোড পাঠিয়ে ইউআরএল বার পরিবর্তন করে নতুন পেজে নিয়ে যায়। রিরাইট (rewrite) প্রক্সির মতো কাজ করে, ব্রাউজার ইউআরএল অপরিবর্তিত রেখেই ব্যাকগ্রাউন্ডে ইন্টারনাল অন্য ডোমেইন থেকে ডাটা এনে রেন্ডার করায়।',
    enExplanation: `### Explanation
In \`next.config.js\`, redirects and rewrites serve different purposes:

- **Redirects (Browser Level)**:
  - Updates the browser URL bar.
  - Generates HTTP status 301 (Permanent, cached by Google for SEO) or 307 (Temporary, not cached).
  - Great for URL migrations.
- **Rewrites (Server Proxy Level)**:
  - Masks the target destination. The visitor does not see where the request is routed.
  - Avoids Cross-Origin Resource Sharing (CORS) errors on client-side requests because they route through your own domain.
  - Great for integrating legacy systems or external APIs.

### Real-World Example
- **Redirect**: You changed a page from \`/pricing-plans\` to \`/pricing\`. You set a 301 redirect. Google updates its index link, and users are forwarded to the new URL.
- **Rewrite**: You host a blog on a separate server (\`GhostCMS\` on \`123.45.67.89\`). You rewrite paths \`/blog/:slug\` to that server IP. Visitors read the blog at \`yoursite.com/blog/my-post\` seamlessly, boosting domain authority.

### Best Practice
Use redirects to manage public SEO page migrations. Use rewrites to mask external REST API URLs, preventing api credentials exposure in client-side network inspect tabs.

### Common Mistakes
Using redirects when you intend to proxy requests to an API. This exposes your private backend API domains to client browsers, rendering CORS white-lists useless.

### Code Example
\`\`\`javascript
// next.config.js
module.exports = {
  // 1. Redirect: Browser URL changes
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true, // 301 permanent redirect
      },
    ];
  },

  // 2. Rewrite: Browser URL remains /api/proxy-stats
  async rewrites() {
    return [
      {
        source: '/api/proxy-stats',
        destination: 'https://metrics-service.internal.com/stats', // Proxy target
      },
    ];
  },
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`next.config.js\` ফাইলে রিডাইরেক্ট ও রিরাইট ভিন্ন ভিন্ন উদ্দেশ্যে কাজ করে:

- **Redirects (ব্রাউজার লেভেল):**
  - এটি ব্রাউজারের ইউআরএল বার বদলে নতুন ঠিকানায় ইউজারকে পাঠিয়ে দেয়।
  - এটি ৩০১ (স্থায়ী পরিবর্তন) বা ৩০৭ (অস্থায়ী পরিবর্তন) HTTP স্ট্যাটাস কোড দেয়।
  - এসইও ইনডেক্সিং পেজ আপডেট করতে এটি দরকার।
- **Rewrites (সার্ভার প্রক্সি লেভেল):**
  - এটি আসল ঠিকানা গোপন রাখে। ব্যবহারকারী টের পান না ব্যাকগ্রাউন্ডে কোথা থেকে ডাটা আসছে।
  - এটি CORS এরর এড়াতে সাহায্য করে কারণ ব্রাউজার মনে করে কুয়েরিটি নিজের ডোমেইনেই চালানো হচ্ছে।

### বাস্তব-ভিত্তিক উদাহরণ
- **রিডাইরেক্ট**: প্রজেক্টের প্রাইসিং পেজ \`/pricing-plans\` থেকে বদলে \`/pricing\` করা হলো। ৩০১ রিডাইরেক্ট বসালে গুগল সার্চ লিংক অটোমেটিক আপডেট হয়ে যাবে।
- **রিরাইট**: ব্লগ মেইনটেইন করার জন্য অন্য সার্ভার ব্যবহার করছেন। কিন্তু চান লিংকের শুরুতে আপনার ব্র্যান্ড নামই থাক। পাথের রেজেক্স \`/blog/:slug\` বসিয়ে অন্য আইপিতে রিরাইট করে দিলে ইউজার আপনার ডোমেইনেই ব্লগ পড়তে পারবেন ও ব্রান্ডিং বজায় থাকবে।

### উত্তম অনুশীলন
এসইও ও ইউআরএল মাইগ্রেশনের জন্য রিডাইরেক্ট ব্যবহার করুন। আর থার্ড-পার্টি এপিআই মাস্ক বা প্রক্সি করতে রিরাইট ব্যবহার করুন যাতে ক্লায়েন্টের নেটওয়ার্ক ট্যাব থেকে মেইন এপিআই এর ডোমেইন নাম লিক না হয়।

### সাধারণ ভুলসমূহ
এপিআই প্রক্সি করার জন্য রিরাইটের বদলে রিডাইরেক্ট ব্যবহার করা। এর ফলে ডোমেইন লিক হয়ে যাবে এবং ব্রাউজার সিওআরএস (CORS) এরর ছুড়ে মারবে।

### Code Example
\`\`\`javascript
// next.config.js
module.exports = {
  // ১. রিডাইরেক্ট: ব্রাউজার ইউআরএল বার সরাসরি পরিবর্তিত হবে
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true, // ৩০১ পার্মানেন্ট রিডাইরেক্ট
      },
    ];
  },

  // ২. রিরাইট: ব্রাউজার ইউআরএল /api/proxy-stats অপরিবর্তিত থাকবে
  async rewrites() {
    return [
      {
        source: '/api/proxy-stats',
        destination: 'https://metrics-service.internal.com/stats', // প্রক্সি ব্যাকএন্ড সার্ভিস
      },
    ];
  },
};
\`\`\``
  },
  {
    id: 'nextjs-64',
    title: 'How do you configure a Content Security Policy (CSP) with a nonce dynamically in Next.js Server Components?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Security', 'CSP', 'Middleware', 'Headers', 'Nonces'],
    enAnswer: 'A dynamic CSP with a cryptographic nonce is configured inside the Next.js Middleware. The middleware generates a unique, cryptographically strong random base64 string (nonce) for every request, injects it into the CSP headers, and passes it to pages via request headers so Server Components can inject it into script tags.',
    bnAnswer: 'মিডলওয়্যারের মাধ্যমে ডায়নামিক সিএসপি (CSP) ও ননস (nonce) কনফিগার করা হয়। মিডলওয়্যার প্রতি রিকোয়েস্টে একটি র্যান্ডম বেস৬৪ স্ট্রিং (nonce) তৈরি করে সিএসপি হেডারে যুক্ত করে এবং রিকোয়েস্ট হেডারের মাধ্যমে সার্ভার কম্পোনেন্টে পাঠায় যাতে চিত্র বা স্ক্রিপ্ট ট্যাগে ননস বসানো যায়।',
    enExplanation: `### Explanation
A Content Security Policy (CSP) blocks Cross-Site Scripting (XSS) attacks by telling the browser to only execute trusted script files.

**The Role of Nonces (Number used once):**
- Static CSPs require whitelist domains. However, inline scripts (like analytics tag scripts) are blocked.
- To execute inline scripts safely, the server generates a unique **nonce** string for *each* request.
- The browser will only execute inline scripts if their \`nonce="..."\` attribute matches the nonce value in the CSP header sent by the server.

**Implementation Steps:**
1. In the root \`middleware.ts\`, generate a random nonce (e.g. using cryptographically strong bytes).
2. Write the CSP string containing \`'nonce-YOUR_NONCE'\` under \`script-src\`.
3. Set the CSP header on the outgoing response.
4. Pass the nonce to Next.js page components by adding \`x-nonce\` in the request header.
5. In \`layout.tsx\`, read the header using \`headers().get('x-nonce')\` and inject it into inline \`<script>\` tags.

### Real-World Example
To prevent malicious script injections in a payment checkout page:
- Middleware inserts a unique nonce \`nonce-xyz789\` for the request.
- The checkout page applies \`<script nonce="xyz789">...\</script>\`.
- If a hacker attempts to inject a script via input form parameters, the browser blocks it because the injected script lacks the unique cryptographic key.

### Best Practice
Generate a fresh, cryptographically secure random nonce for *every single request*. Never reuse nonces or cache pages containing nonces, as this breaks the security guarantee.

### Common Mistakes
Caching pages that contain dynamic nonces. If the page is statically cached, the same nonce is served to all users, allowing hackers to easily bypass the CSP restrictions.

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  // 1. Generate cryptographically strong random nonce
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // 2. Define Content Security Policy containing the nonce
  const cspHeader = \`
    default-src 'self';
    script-src 'self' 'nonce-\${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
  \`.replace(/\\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce); // Pass nonce to Server Components
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  response.headers.set('Content-Security-Policy', cspHeader);
  return response;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিএসপি (Content Security Policy) ব্রাউজারকে নির্দেশ দেয় যে কেবল ট্রাস্টেড বা বিশ্বস্ত স্ক্রিপ্টগুলোই রান করা যাবে, যা ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ প্রতিরোধ করে।

**ননস (Nonce) এর ভূমিকা:**
- গ্লোবাল সিএসপি হেডারে ইনলাইন জাভাস্ক্রিপ্ট (যেমন গুগল ট্যাগ স্ক্রিপ্ট) রান করা ব্লক থাকে।
- ইনলাইন কোড রান করাতে হলে প্রতি রিকোয়েস্টে সার্ভার একটি সিকিউর র্যান্ডম স্ট্রিং (ননস) জেনারেট করে।
- ব্রাউজার কেবল সেই ইনলাইন স্ক্রিপ্টগুলোকেই রান হতে দেয় যেগুলোর \`nonce="..."\` এট্রিবিউটের মান সিএসপি হেডারের ননস মানের সাথে হুবহু মিলে যায়।

**বাস্তবায়ন ধাপসমূহ:**
১. \`middleware.ts\`-এ প্রতি রিকোয়েস্টে র্যান্ডম ননস কি তৈরি করুন।
২. সিএসপি ডিরেক্টিভের \`script-src\` এর ভেতর \`'nonce-ননস_কোড'\` বসিয়ে দিন।
৩. এই হেডারটি রেসপন্সে যুক্ত করুন।
৪. সার্ভার কম্পোনেন্টে পাস করতে হেডার তালিকায় \`x-nonce\` কি যুক্ত করুন।
৫. \`layout.tsx\`-এর ভেতর \`headers().get('x-nonce')\` রিড করে ইনলাইন স্ক্রিপ্ট ট্যাগে ননসটি বসিয়ে দিন।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট চেকআউট পেজে স্ক্রিপ্ট সিকিউরিটি বাড়াতে:
- মিডলওয়্যার থেকে জেনারেট হলো ননস কী \`nonce-xyz789\`।
- আপনার ফর্মে থাকা স্ক্রিপ্টে বসানো হলো \`<script nonce="xyz789">...\</script>\`।
- কোনো হ্যাকার যদি ইনপুটের মাধ্যমে সাইটে মেলিশিয়াস স্ক্রিপ্ট পুশ করার চেষ্টাও করে, ব্রাউজার সেটি রান করতে দেবে না কারণ হ্যাকারের স্ক্রিপ্টে ওই ওয়ান-টাইম সিকিউর কোডটি নেই।

### উত্তম অনুশীলন
প্রতিটি আলাদা পেজ রিকোয়েস্টে সম্পূর্ণ র্যান্ডম ননস তৈরি করুন। ননস সম্বলিত পেজ কখনো ক্যাশ করে রাখবেন না, অন্যথায় সিকিউরিটির মূল লক্ষ্যই নষ্ট হয়ে যাবে।

### সাধারণ ভুলসমূহ
মেমোরিতে স্ট্যাটিক ক্যাশ হওয়া পেজে ননস সেট করা। এতে সবার কাছে একই ননস কোড বারবার যেতে থাকবে যা হ্যাকারের কাজ সহজ করে দেয়।

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  // ১. ইউনিক র্যান্ডম সিকিউর ননস কি জেনারেট
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // ২. সিএসপি হেডারে ননস কোড বসানো
  const cspHeader = \`
    default-src 'self';
    script-src 'self' 'nonce-\${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
  \`.replace(/\\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce); // সার্ভার কম্পোনেন্টে পাঠানোর জন্য হেডার সেট
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  response.headers.set('Content-Security-Policy', cspHeader);
  return response;
}
\`\`\``
  },
  {
    id: 'nextjs-65',
    title: 'How do you track client-side route changes in Next.js App Router without native router events?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Routing', 'App Router', 'usePathname', 'useSearchParams', 'Analytics'],
    enAnswer: 'In the App Router, tracking route changes is implemented inside Client Components by combining the usePathname() and useSearchParams() hooks. Since Next.js removed router.events, you write a custom listener component wrapping route changes in a useEffect trigger.',
    bnAnswer: 'App Router-এ রুট চেঞ্জ ট্র্যাক করতে ক্লায়েন্ট কম্পোনেন্টের ভেতর usePathname() ও useSearchParams() হুকের কম্বিনেশন ব্যবহার করা হয়। নেক্সট জেএস router.events রিমুভ করায় কাস্টম লিসেনার ফাইলে useEffect দিয়ে রুট পরিবর্তন ট্র্যাকিং সচল করতে হয়।',
    enExplanation: `### Explanation
In the Pages Router, tracking page views was simple using \`router.events.on('routeChangeComplete')\`. In the App Router, this event pipeline was removed to improve optimization bounds.

**Modern Route Tracking Pattern:**
- Import \`usePathname\` (tracks URL shifts) and \`useSearchParams\` (tracks search query shifts) from \`next/navigation\`.
- Create a client component (e.g. \`AnalyticsTracker\`).
- Wrap the tracking trigger inside a \`useEffect\` dependency block that lists both pathname and searchParams:
  \`\`\`typescript
  useEffect(() => {
    // Send event to Google Analytics / Mixpanel
    sendPageView(pathname, searchParams.toString());
  }, [pathname, searchParams]);
  \`\`\`
- Mount this tracker inside the root layout.

### Real-World Example
In a marketing web app using Google Analytics:
- You want to record every page visit dynamically to track user journeys.
- You place the \`<AnalyticsTracker />\` inside the root layout. When navigating from \`/pricing\` to \`/features?ref=navbar\`, the tracker triggers and logs the pageview correctly.

### Best Practice
Wrap the analytics listener inside a \`Suspense\` boundary. \`useSearchParams\` triggers dynamic client-side rendering during build if not wrapped in Suspense, which can break static site generation page compilation.

### Common Mistakes
Importing \`useRouter\` from \`next/router\` to listen to events inside the App Router, which throws runtime initialization errors.

### Code Example
\`\`\`typescript
// app/components/AnalyticsTracker.tsx
"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = \`\${pathname}?\${searchParams.toString()}\`;
    console.log('Sending Pageview event to Google Analytics:', url);
    // window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
  }, [pathname, searchParams]);

  return null; // Invisible tracking component
}

export default function AnalyticsTracker() {
  return (
    // Must wrap in Suspense to prevent rendering build bottlenecks
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Pages Router-এ পেজ ভিউ ট্র্যাকিং করা হতো \`router.events.on('routeChangeComplete')\` ব্যবহার করে। তবে App Router-এ অপ্টিমাইজেশন বুস্ট করার জন্য এই গ্লোবাল ইভেন্ট লিসেনারটি রিমুভ করা হয়েছে।

**আধুনিক রুট ট্র্যাকিং মেথড:**
- \`next/navigation\` থেকে \`usePathname\` (পাথ ট্র্যাক করতে) এবং \`useSearchParams\` (কুয়েরি কী-গুলো ট্র্যাক করতে) হুক দুটি ইম্পোর্ট করুন।
- একটি ছোট ক্লায়েন্ট কম্পোনেন্ট তৈরি করুন (যেমন: \`AnalyticsTracker\`)।
- \`useEffect\`-এর ডিপেন্ডেন্সি অ্যারেতে পাথনেম ও সার্চপ্যারাম দুটিকে পাস করে দিন:
  \`\`\`typescript
  useEffect(() => {
    // গুগল অ্যানালিটিক্স বা মিক্সপ্যানেলে ডাটা পাঠানো
    sendPageView(pathname, searchParams.toString());
  }, [pathname, searchParams]);
  \`\`\`
- এই লিসেনার ফাইলটি রুট লেআউটে মাউন্ট করে দিন।

### বাস্তব-ভিত্তিক উদাহরণ
গুগল অ্যানালিটিক্স ট্র্যাকিং কনফিগার করার ক্ষেত্রে:
- ইউজার কোন কোন পেজ ব্রাউজ করছে তা লাইভ রেকর্ড করা প্রয়োজন।
- \`<AnalyticsTracker />\` রুট লেআউটে সেট করার পর ইউজার \`/pricing\` থেকে \`/features?ref=navbar\` লিংকে ক্লিক করলে রুট পরিবর্তনের ডাটা অ্যানালিটিক্স প্যানেলে চলে যায়।

### উত্তম অনুশীলন
ট্র্যাকার ফাইলকে অবশ্যই \`<Suspense>\` বাউন্ডারির ভেতর র‍্যাপ করুন। সাসপেন্স ছাড়া ক্লায়েন্ট ফাইলে সরাসরি \`useSearchParams\` কল করলে স্ট্যাটিক বিল্ড তৈরির সময় জটিলতা তৈরি হতে পারে।

### সাধারণ ভুলসমূহ
App Router প্রজেক্টে \`next/router\` থেকে \`useRouter\` ইম্পোর্ট করে ইভেন্ট ট্র্যাকিং বসানোর ট্রাই করা, যা সরাসরি রানটাইম এরর দিবে।

### Code Example
\`\`\`typescript
// app/components/AnalyticsTracker.tsx
"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = \`\${pathname}?\${searchParams.toString()}\`;
    console.log('অ্যানালিটিক্স পেজ ভিউ ইভেন্ট সেন্ড হচ্ছে:', url);
    // window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
  }, [pathname, searchParams]);

  return null; // কোনো ইন্টারফেস শো করবে না
}

export default function AnalyticsTracker() {
  return (
    // বিল্ড টাইম এরর এড়াতে অবশ্যই সাসপেন্স দিয়ে ঘিরতে হবে
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-66',
    title: 'Explain the benefits of streaming HTML and partial hydration in the App Router.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Streaming', 'Partial Hydration', 'Suspense', 'Performance'],
    enAnswer: 'Streaming HTML allows Next.js to split the page markup into chunks and stream them to the client sequentially as they render on the server. Partial hydration enables the browser to hydrate visible or loaded components independently, preventing slow database queries from blocking initial page interactive times.',
    bnAnswer: 'স্ট্রিমিং এইচটিএমএল (Streaming HTML) পেজের মার্কআপকে ছোট ছোট টুকরোতে ভাগ করে সার্ভারে রেন্ডার হওয়া মাত্র সিকোয়েন্সিয়ালি ক্লায়েন্টে পাঠায়। আংশিক হাইড্রেশন (Partial hydration) ব্রাউজারকে লোড হওয়া কম্পোনেন্টগুলো আলাদাভাবে সচল করতে দেয়, ফলে স্লো কুয়েরি পুরো পেজ আটকে রাখে না।',
    enExplanation: `### Explanation
In traditional SSR, the page load follows a strict blocking sequence:
1. Fetch all data on the server.
2. Render the entire page HTML.
3. Send the HTML to the browser (User sees content).
4. Load Javascript bundles and hydrate the whole page (Page becomes interactive).

If Step 1 takes 5 seconds, the user sees a blank white screen for 5 seconds.

**Streaming & Partial Hydration fixes this:**
- Next.js renders the static page shell (e.g. navigation, headers) and streams it to the browser immediately.
- Users see the page layout instantly.
- Slow component parts are wrapped in \`<Suspense>\`. While the server queries the database, the browser renders a loading skeleton.
- Once the database query completes, the server renders the component HTML and streams it over the same network connection. The browser swaps out the skeleton.
- **Partial Hydration**: React hydrates components as they arrive, making the loaded page parts interactive without waiting for the slow component to finish loading.

### Real-World Example
In a video dashboard:
- The video recommendations grid takes 4 seconds to compile.
- The sidebar navigations are instant.
- With streaming, the sidebar renders in 100ms. The user can click links immediately while the video grid skeleton animates and resolves at second 4.

### Best Practice
Identify slow data queries and isolate them inside Server Components wrapped in Suspense boundaries to allow streaming to operate. Never block layout rendering by awaiting slow fetches at the root page level.

### Common Mistakes
Forgetting that streaming requires Server Components. If the entire page is marked with \`"use client"\`, streaming is bypassed and client-side rendering takes over.

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { Suspense } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import SlowDataWidget from '@/components/SlowDataWidget';
import WidgetSkeleton from '@/components/WidgetSkeleton';

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Sent in the first stream chunk (instantly visible & interactive) */}
      <NavigationHeader />
      
      <main className="p-6">
        <h1>Dashboard Metrics</h1>
        
        {/* Streamed dynamically once database query completes */}
        <Suspense fallback={<WidgetSkeleton />}>
          <SlowDataWidget />
        </Suspense>
      </main>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ঐতিহ্যবাহী SSR সিস্টেমে পেজ লোড প্রসেসটি একটি ব্লকিং সিকোয়েন্স অনুসরণ করত:
১. সার্ভারে সব ডাটা ফেচ হবে।
২. পুরো পেজের HTML তৈরি হবে।
৩. ব্রাউজারে HTML ফাইল পাঠানো হবে (ইউজার দেখতে পাবে)।
৪. জাভাস্ক্রিপ্ট কোড লোড হয়ে পুরো পেজ লাইভ হবে (ইউজার ইন্টারেক্ট করতে পারবে)।

যদি প্রথম ধাপ সম্পন্ন হতে ৫ সেকেন্ড লাগে, তবে পাঠক ৫ সেকেন্ড ব্লাঙ্ক সাদা স্ক্রিন দেখতে বাধ্য হতেন।

**স্ট্রিমিং ও আংশিক হাইড্রেশনের সমাধান:**
- নেক্সট জেএস পেজের স্ট্যাটিক অংশগুলো (যেমন হেডার, মেনু) সার্ভারে তৈরি হওয়া মাত্র ব্রাউজারে স্ট্রিম করে পাঠিয়ে দেয়।
- ব্যবহারকারী সাথে সাথে মেনু স্ক্রিন দেখতে পান।
- ধীরগতির ডাটা টেবিলটি সাসপেন্সে থাকায় ওটির জায়গায় লোডিং দেখায়।
- ডাটাবেস কুয়েরি শেষ হলে সার্ভার ওই টেবিলের HTML রেন্ডার করে একই নেটওয়ার্ক সকেটে ব্রাউজারে পুশ করে দেয়। ব্রাউজার লোডিং সরিয়ে টেবিলটি প্রতিস্থাপন করে।
- **Partial Hydration**: পুরো পেজ লোড হওয়ার অপেক্ষা না করে রিঅ্যাক্ট ধাপে ধাপে কন্টেন্ট লাইভ করে, ফলে সাইট দ্রুত ইন্টারেক্টিভ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ভিডিও ড্যাশবোর্ডে:
- ভিডিও রিকমেন্ডেশন চার্ট লোড হতে ৪ সেকেন্ড লাগে।
- ড্যাশবোর্ডের হেডার ও সাইডবার নেভিগেশন ১০০ মি.সে. এ স্ক্রিনে চলে আসে।
- ইউজার ভিডিও চার্ট আসার আগেই সাইডবারে ক্লিক করতে পারেন। ৪ সেকেন্ড পর ভিডিওর অংশটি ভেসে ওঠে।

### উত্তম অনুশীলন
ধীরগতির ডাটা রিকোয়েস্টগুলো চিহ্নিত করে রিঅ্যাক্ট সাসপেন্সের ভেতর রাখুন যাতে স্ট্রিমিং মেকানিজম কাজ করতে পারে। পেজের রুট লেভেলে \`await\` দিয়ে সব কুয়েরি লক করে রাখবেন না।

### সাধারণ ভুলসমূহ
স্ট্রিমিংয়ের জন্য সার্ভার কম্পোনেন্ট আবশ্যক তা ভুলে যাওয়া। পুরো পেজে \`"use client"\` লিখে রাখলে সার্ভার স্ট্রিমিং সুবিধা কাজ করে না।

### Code Example
\`\`\`typescript
// app/dashboard/page.tsx
import { Suspense } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import SlowDataWidget from '@/components/SlowDataWidget';
import WidgetSkeleton from '@/components/WidgetSkeleton';

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* প্রথম স্ট্রিম চাঙ্কেই এটি ব্রাউজারে চলে যাবে */}
      <NavigationHeader />
      
      <main className="p-6">
        <h1>ড্যাশবোর্ড মেট্রিDescriptor</h1>
        
        {/* ডাটাবেস কুয়েরি শেষ হলে এটি ডাইনামিকালি লোড হবে */}
        <Suspense fallback={<WidgetSkeleton />}>
          <SlowDataWidget />
        </Suspense>
      </main>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'nextjs-67',
    title: 'What is the fallback behavior of dynamic routes generated via generateStaticParams when dynamicParams = false?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['generateStaticParams', 'dynamicParams', '404 Page', 'SSG'],
    enAnswer: 'When dynamicParams = false, any dynamic route parameter that was not explicitly defined inside the generateStaticParams() array at build time will instantly return a 404 Not Found error page, preventing on-demand query compilation.',
    bnAnswer: 'যখন dynamicParams = false সেট থাকে, তখন বিল্ড করার সময় generateStaticParams() ডিক্লেয়ার্ড তালিকার বাইরে কোনো নতুন প্যারামিটার দিয়ে লিংকে ঢোকার চেষ্টা করলে নেক্সট জেএস সরাসরি ৪০৪ (404) স্ক্রিন শো করায়।',
    enExplanation: `### Explanation
The \`dynamicParams\` segment configuration controls how Next.js handles dynamic paths that were not pre-rendered during the build step.

**Comparing Configurations:**
- **\`dynamicParams = true\` (Default)**:
  - If a user requests \`/posts/new-post\` (not built during compilation), Next.js renders the page on-demand on the server, saves it to the static cache, and serves it.
- **\`dynamicParams = false\`**:
  - Next.js strictly permits only the paths returned by \`generateStaticParams()\`.
  - Any request for an ungenerated path immediately results in a 404 page. The server does not execute your page database query code at all.

### Real-World Example
In a localized company site where service regions are fixed (\`/services/[city]\`):
- Cities list is constant: Dhaka, Chittagong, Sylhet. These are returned in \`generateStaticParams()\`.
- You set \`dynamicParams = false\`.
- If a user visits \`/services/london\`, they get a 404 error page. Next.js blocks database queries for "london", saving CPU resources.

### Best Practice
Set \`dynamicParams = false\` for dynamic routes where the list of allowed values is static and strictly defined (e.g. languages, product category filters). This protects your database from scanning invalid parameters.

### Common Mistakes
Setting \`dynamicParams = false\` on a blog path where writers publish articles frequently. This blocks new articles from displaying until the next production site rebuild triggers.

### Code Example
\`\`\`typescript
// app/services/[city]/page.tsx
import { notFound } from 'next/navigation';

export const dynamicParams = false; // Only allow pre-built paths

// Define allowed parameters
export async function generateStaticParams() {
  return [
    { city: 'dhaka' },
    { city: 'sylhet' }
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  return <h1>Service in City: {city}</h1>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`dynamicParams\` রুট সেটিংসটি নিয়ন্ত্রণ করে বিল্ড টাইমে তৈরি না হওয়া ডাইনামিক লিংকগুলোর ক্ষেত্রে নেক্সট জেএস কী আচরণ করবে।

**কনফিগারেশনের তুলনা:**
- **\`dynamicParams = true\` (ডিফল্ট):**
  - ইউজার যদি এমন কোনো লিংকে ঢোকেন যা বিল্ড করার সময় ছিল না, তবে নেক্সট জেএস অন-ডিমান্ড সার্ভারে ডাটা লোড করে পেজটি জেনারেট করে ক্যাশে সেভ করে নেয়।
- **\`dynamicParams = false\`:**
  - নেক্সট জেএস কেবল \`generateStaticParams()\` তালিকায় থাকা রুটগুলোকেই অনুমতি দেয়।
  - তালিকার বাইরে অন্য যেকোনো লিংকের ক্ষেত্রে সার্ভার ডাটাবেস কুয়েরি করার আগেই সরাসরি ৪০৪ (404) এরর পেজ রিলিজ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির ফিক্সড সার্ভিস সেন্টারের ক্ষেত্রে (\`/services/[city]\`):
- ঢাকা ও সিলেট বাদে কোম্পানির অন্য কোথাও সেন্টার নেই। এগুলোকে \`generateStaticParams()\`-এ রিটার্ন করা হলো।
- আপনি পেজে \`dynamicParams = false\` সেট করে দিলেন।
- ইউজার যদি লিংকে \`/services/khulna\` টাইপ করে ঢোকার চেষ্টা করে, সে সরাসরি ৪০৪ এরর দেখবে। মঙ্গোডিবিতে কোনো ফালতু কুয়েরি রান হবে না, যা সিকিউরিটি বাড়ায়।

### উত্তম অনুশীলন
যেসব ক্যাটাগরি বা ডায়নামিক পাথের তালিকা নির্দিষ্ট ও নতুন ডাটা যুক্ত হওয়ার চান্স নেই, সেখানে \`dynamicParams = false\` সেট করুন। এটি ভুল কুয়েরি ট্রাফিকের চাপ থেকে ডাটাবেসকে রক্ষা করে।

### সাধারণ ভুলসমূহ
প্রতিদিন নতুন নতুন ব্লগ পাবলিশ করা হচ্ছে এমন পেজের ক্ষেত্রে এটি \`false\` করে রাখা। এর ফলে নতুন ব্লগের লিংক রেডি থাকলেও পরবর্তী বিল্ড হওয়ার আগ পর্যন্ত ইউজাররা সেটি দেখতে পাবেন না।

### Code Example
\`\`\`typescript
// app/services/[city]/page.tsx
import { notFound } from 'next/navigation';

export const dynamicParams = false; // প্রাক-বিল্ড রুট ছাড়া অন্য লিংকে ৪০৪ দেখাবে

// অনুমোদিত সিটির তালিকা
export async function generateStaticParams() {
  return [
    { city: 'dhaka' },
    { city: 'sylhet' }
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  return <h1>সার্ভিস সেন্টার সিটি: {city}</h1>;
}
\`\`\``
  },
  {
    id: 'nextjs-68',
    title: 'How do you leverage Next.js SWC compiler options for custom code minification and compilation?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['SWC', 'Compiler', 'next.config.js', 'Build Optimization'],
    enAnswer: 'Next.js uses SWC (Speedy Web Compiler) written in Rust for fast compilation. You configure SWC options in next.config.js under properties like swcMinify (default true), compiler (removes console logs, enables styled-components compile support), and modularizeImports.',
    bnAnswer: 'Next.js দ্রুত কম্পাইল করতে রাস্টে (Rust) লেখা SWC (Speedy Web Compiler) ব্যবহার করে। next.config.js ফাইলে swcMinify (ডিফল্ট true) এবং compiler প্রপার্টি (যেমন কনসোল লগ ডিলিট করা) কনফিগার করে SWC সেটিংস নিয়ন্ত্রণ করা হয়।',
    enExplanation: `### Explanation
Next.js replaced Babel with **SWC** (written in Rust), resulting in compilation speeds up to 17x faster.

**Key SWC Configurations in \`next.config.js\`:**
1. **\`swcMinify\`**: Uses SWC's minifier instead of Terser, speeding up build packaging significantly.
2. **\`removeConsole\`**: Strips all \`console.log\` statements automatically during production build compilation, keeping client logs clean.
3. **\`styledComponents\`**: Transpiles Styled Components server styling context natively without requiring Babel configurations.
4. **\`modularizeImports\`**: Automatically splits heavy imports (like \`lodash\`) so only referenced functions are compiled, saving bundle weight.

### Real-World Example
In a high-scale production application:
- You want to ensure developers' debug \`console.log\` statements are never leaked in the browser console during production.
- Instead of using external cleaning tools, you write \`removeConsole: true\` in \`next.config.js\`. SWC automatically cleans up the logs during compile.

### Best Practice
Leverage SWC native options inside \`next.config.js\`. Avoid adding custom Babel configs (\`.babelrc\`) in newer projects as it forces Next.js to disable SWC and fallback to Babel, degrading compilation speeds.

### Common Mistakes
Forgetting that enabling \`removeConsole: true\` globally will also strip \`console.error\` logs. If you need to preserve error logs for tracking, use the object configuration rules to exclude specific console methods.

### Code Example
\`\`\`javascript
// next.config.js (SWC Compiler Configuration)
module.exports = {
  // Use Rust-based SWC minifier (default true in modern Next.js)
  swcMinify: true,

  compiler: {
    // 1. Remove console logs in production builds
    removeConsole: {
      exclude: ['error', 'warn'], // Keep error and warning logs for production tracking
    },

    // 2. Support styled-components compilation natively in SWC
    styledComponents: true,
  },

  // 3. Optimize heavy package imports
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস ব্যাবেল (Babel) সরিয়ে রাস্টে লেখা **SWC** কম্পাইলার ব্যবহার করায় কম্পাইল স্পিড ১৭ গুণ পর্যন্ত বৃদ্ধি পেয়েছে।

**next.config.js ফাইলে SWC এর প্রধান সেটিংস:**
১. **\`swcMinify\`**: টেমপ্লেট মিনিফায়ার ব্যবহার করে কোড সাইজ ছোট করে।
২. **\`removeConsole\`**: প্রোডাকশন বিল্ড তৈরির সময় কোডে থাকা সমস্ত \`console.log\` স্বয়ংক্রিয়ভাবে মুছে ফেলে।
৩. **\`styledComponents\`**: ব্যাবেল কনফিগ ছাড়াই স্টাইল কম্পোনেন্টকে সার্ভারে কম্পাইল করতে সাহায্য করে।
৪. **\`modularizeImports\`**: ভারী লাইব্রেরি (যেমন লড্যাশ বা রিঅ্যাক্ট আইকন) ইম্পোর্ট করার সময় কেবল ব্যবহৃত ফাংশনটুকুই ডাউনলোড করে সাইজ ঠিক রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাকশন পোর্টালে:
- ডেভেলপারদের টেস্টিং করা \`console.log\` যেন বিল্ড দেওয়ার পর ব্রাউজার কনসোলে শো না করে।
- কোন থার্ড-পার্টি টুল ছাড়াই \`next.config.js\` ফাইলে \`removeConsole: true\` লিখে দিলে SWC বিল্ডের সময় সব লগ কোড ডিলিট করে দেবে।

### উত্তম অনুশীলন
কাস্টমাইজেশনের জন্য ব্যাবেল কনফিগ (\`.babelrc\`) ব্যবহার করা এড়িয়ে চলুন, কারণ কাস্টম ব্যাবেল যোগ করলে নেক্সট জেএস দ্রুতগতির SWC বাদ দিয়ে ধীরগতির ব্যাবেলে ফিরে যায়।

### সাধারণ ভুলসমূহ
গ্লোবালি \`removeConsole\` অন করার সময় মনে না রাখা যে এটি \`console.error\`-কেও ডিলিট করে দেয়। এরর লগ ট্র্যাকিং ধরে রাখতে অবজেক্ট ফরম্যাটে এক্সক্লুড কোড লিখুন।

### Code Example
\`\`\`javascript
// next.config.js (SWC কম্পাইলার কনফিগারেশন)
module.exports = {
  // রাস্ট-ভিত্তিক SWC মিনিফায়ার অন করা (ডিফল্টভাবে অন থাকে)
  swcMinify: true,

  compiler: {
    // ১. প্রোডাকশন বিল্ডে কনসোল লগ রিমুভ করার সেটিংস
    removeConsole: {
      exclude: ['error', 'warn'], // ট্র্যাকিং সচল রাখতে error ও warn লগগুলো মুছবে না
    },

    // ২. styled-components কোড সাপোর্ট চালু করা
    styledComponents: true,
  },

  // ৩. ভারী ইম্পোর্ট ডাটা অপ্টিমাইজেশন
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};
\`\`\``
  },
  {
    id: 'nextjs-69',
    title: 'How do you configure Next.js middleware to handle subdomains dynamically?',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Middleware', 'Subdomains', 'Multi-tenant Routing', 'App Router'],
    enAnswer: 'Next.js middleware handles subdomains dynamically by inspecting the Host request header, extracting the subdomain string (e.g. tenantname.site.com), and rewriting the internal URL path dynamically to point to folder destinations inside the app/ directory.',
    bnAnswer: 'মিডলওয়্যার রিকোয়েস্টের Host হেডার পরীক্ষা করে সাব-ডোমেইন (যেমন: tenant.site.com) ডিটেক্ট করে এবং ইন্টারনাল ইউআরএল পাথ পরিবর্তন (rewrite) করে app/ ফোল্ডারের চাইল্ড রুটে রি-রাইট করে ডাইনামিক সাব-ডোমেইন রুট সাজায়।',
    enExplanation: `### Explanation
In a multi-tenant SaaS application, you want users to access their portals via custom subdomains:
- Tenant A visits \`tenantA.yoursite.com/profile\`
- Tenant B visits \`tenantB.yoursite.com/profile\`

**Dynamic Subdomain Middleware Process:**
1. Read request host header: \`request.headers.get('host')\`.
2. Extract subdomain string by splitting the host.
3. Ignore standard system subdomains (like \`www\` or localhost).
4. Perform an internal rewrite to a nested route folder containing the tenant name:
   \`NextResponse.rewrite(new URL(\`/_sites/\${subdomain}\${path}\`, request.url))\`.
5. Organize pages inside \`app/_sites/[tenant]/\` directory in the App Router.

### Real-World Example
In a blogging platform like Medium:
- A blogger configures their subdomain \`myblog.platform.com\`.
- When users visit this domain, middleware redirects them internally to \`app/_sites/myblog/page.tsx\` while the browser URL bar continues to show \`myblog.platform.com\`.

### Best Practice
Validate the extracted subdomain string to verify it matches security rules (no special character injections). Set cache-control headers on subdomains to optimize DNS routing speeds.

### Common Mistakes
Using redirects instead of rewrites. Redirects will update the browser URL bar to show \`yoursite.com/_sites/tenantA/...\`, exposing your database folder structure to the public.

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Define your main production domain
  const mainDomain = 'platform.com';
  
  // Extract subdomain (e.g., tenantA.platform.com -> tenantA)
  const subdomain = host.split('.')[0];

  // Skip subdomains that match system defaults
  if (host === 'localhost:3000' || subdomain === 'www' || host === mainDomain) {
    return NextResponse.next();
  }

  // Rewrite URL path internally to point to hidden _sites folder structure
  // Browser URL remains: tenantA.platform.com/profile
  url.pathname = \`/_sites/\${subdomain}\${url.pathname}\`;
  
  return NextResponse.rewrite(url);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাল্টি-টেন্যান্ট SaaS অ্যাপে ইউজাররা যেন তাদের ডোমেইনে সাব-ডোমেইনের মাধ্যমে লগইন করতে পারে তার জন্য ডাইনামিক সাব-ডোমেইন রাউটিং করা হয়:
- টেন্যান্ট ক ভিজিট করবে: \`tenantA.yoursite.com/profile\`
- টেন্যান্ট খ ভিজিট করবে: \`tenantB.yoursite.com/profile\`

**মিডলওয়্যারের মাধ্যমে সাব-ডোমেইন ফিল্টারিং:**
১. রিকোয়েস্টের হোস্ট হেডার রিড করা: \`request.headers.get('host')\`।
২. ডট (\`.\`) দিয়ে স্প্লিট করে সাব-ডোমেইনের নাম আলাদা করা।
৩. কমন নাম (যেমন: \`www\`) বাদ দেওয়া।
৪. কাস্টম রিরাইট কোড কল করে ইন্টারনালি ইউআরএল পরিবর্তন করা:
   \`NextResponse.rewrite(new URL(\`/_sites/\${subdomain}\${path}\`, request.url))\`।
৫. App Router-এ পেজগুলো \`app/_sites/[tenant]/\` ফোল্ডারের ভেতর ডিজাইন করা।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইট ডটকম-এ:
- ব্লগার তার প্রোফাইল \`myblog.platform.com\` নামে সেট করল।
- ভিজিটর ওই লিংকে ঢুকলে মিডলওয়্যার ইন্টারনালি পেজটিকে \`app/_sites/myblog/page.tsx\` ফাইলের সাথে যুক্ত করে দেয়। কিন্তু ইউজারের ব্রাউজার বারে মূল লিংক \`myblog.platform.com\` অপরিবর্তিত থাকে।

### উত্তম অনুশীলন
সাব-ডোমেইন টেক্সট ফিল্টার করে চেক করে নিন যাতে কোনো ইনজেকশন বা হ্যাকিং স্ক্রিপ্ট ডোমেইন নেমে না থাকতে পারে। ডাইনামিক ডিএনএস সেট করতে ক্লাউডফ্লেয়ার বা ভার্সেল ওয়াইল্ডকার্ড ডোমেইন ট্র্যাকিং অন রাখুন।

### সাধারণ ভুলসমূহ
রিরাইটের (rewrite) বদলে রিডাইরেক্ট (redirect) ব্যবহার করা। রিডাইরেক্ট করলে ব্রাউজার বারে ডিরেক্টরি ফোল্ডার শো করে দেখাবে \`yoursite.com/_sites/tenantA/...\` যা সিকিউরিটির জন্য হুমকি।

### Code Example
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'request';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  const mainDomain = 'platform.com';
  
  // সাব-ডোমেইন আলাদা করা (যেমন: tenantA.platform.com -> tenantA)
  const subdomain = host.split('.')[0];

  // লোকালহোস্ট ও www বাদ দিয়ে ফিল্টার চালু করা
  if (host === 'localhost:3000' || subdomain === 'www' || host === mainDomain) {
    return NextResponse.next();
  }

  // ইন্টারনাল রিরাইট পাথ সেট করা (_sites হিডেন ফোল্ডারে রিরাইট হবে)
  // ব্রাউজার ইউআরএল দেখাবে: tenantA.platform.com/profile
  url.pathname = \`/_sites/\${subdomain}\${url.pathname}\`;
  
  return NextResponse.rewrite(url);
}
\`\`\``
  },
  {
    id: 'nextjs-70',
    title: 'Explain the difference between fetch() data caching and Mongoose query caching in Next.js.',
    difficulty: 'intermediate',
    category: 'nextjs',
    tags: ['Caching', 'fetch', 'Mongoose', 'Database', 'Data Cache'],
    enAnswer: 'In Next.js, fetch() data caching is managed natively at the framework level (caching HTTP responses in the Data Cache). Mongoose or direct database queries bypass fetch() logic, meaning database queries do not cache by default and require segment configs (revalidate) or React cache() wrappers.',
    bnAnswer: 'Next.js-এ fetch() ডাটা ক্যাশিং ফ্রেমওয়ার্ক লেভেলে স্বয়ংক্রিয়ভাবে ম্যানেজ হয় (HTTP রেসপন্স ক্যাশ করে)। কিন্তু মঙ্গুস বা ডাটাবেস কুয়েরি সরাসরি fetch() সিস্টেমের বাইরে চলায় এগুলো ডিফল্টভাবে ক্যাশ হয় না এবং এগুলোর জন্য রিঅ্যাক্ট cache() বা পেজ সেগমেন্ট revalidate ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
Next.js extends the Web standard \`fetch()\` API to integrate caching, but database queries (Mongoose, Prisma, MongoDB driver pings) are NOT HTTP fetch calls:

- **\`fetch()\` caching**:
  - Automatically saved in Next.js's persistent **Data Cache**.
  - Supports tags-based invalidation (\`revalidateTag\`).
- **Mongoose/ORM queries**:
  - Bypasses Next.js's Data Cache. On every page render call, Mongoose runs a live socket query to MongoDB.
  - To prevent duplicate queries during a single render pass, you must wrap the Mongoose query in React's \`cache()\` utility (Request Memoization).
  - To cache the query results globally across requests, use the Next.js \`unstable_cache()\` API.

### Real-World Example
If your Server Component has nested widgets that all query user configurations using \`User.findById(id)\`:
- Without React cache, Mongoose queries the MongoDB database 5 times during a single render request.
- Wrapping the Mongoose call in React's \`cache()\` deduplicates this, querying the database only once.

### Best Practice
Wrap all Mongoose, Prisma, or MongoDB driver read calls inside React's \`cache()\` function to prevent query flooding during page rendering. Use \`unstable_cache\` from \`next/cache\` if you need to cache database queries across multiple visitors.

### Common Mistakes
Assuming that setting \`export const revalidate = 60\` at the page level will automatically cache Mongoose queries. The page HTML is cached, but any dynamic fetch/rendering triggers will still execute Mongoose queries from scratch on the server.

### Code Example
\`\`\`typescript
// src/lib/db-queries.ts
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import User from '@/models/User';

// 1. React cache(): Deduplicates queries within a SINGLE request (Request Memoization)
export const getUserById = cache(async (id: string) => {
  console.log('Database query executed for ID:', id); // Runs once even if called 10 times
  return await User.findById(id).lean();
});

// 2. unstable_cache(): Caches database query results globally across multiple visitors (Data Cache)
export const getCachedProductStats = unstable_cache(
  async () => {
    return await Product.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }]);
  },
  ['product-stats-cache-key'], // Cache key
  { revalidate: 3600, tags: ['products'] } // Cache for 1 hour or invalidate via 'products' tag
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেক্সট জেএস সাধারণ \`fetch()\` এপিআই-কে মডিফাই করে নিজস্ব ডাটা ক্যাশ যুক্ত করে। কিন্তু ডাটাবেসের কুয়েরি (যেমন Mongoose বা MongoDB Driver) কোনো সাধারণ এইচটিটিপি কল না হওয়ায় এটি ডিফল্ট ক্যাশ সিস্টেমের বাইরে থাকে:

- **\`fetch()\` ক্যাশিং**:
  - এটি স্বয়ংক্রিয়ভাবে নেক্সট জেএস-এর গ্লোবাল **Data Cache** ফোল্ডারে সেভ থাকে।
  - এটি রিভ্যালিডেট ট্যাগ সাপোর্ট করে।
- **Mongoose/ORM কুয়েরি**:
  - এটি সরাসরি ডাটা ক্যাশ এভয়েড করে চলে। প্রতিবার ডাইনামিক পেজ রেন্ডার হলে মঙ্গুস ডাটাবেসে রিয়েল-টাইম কুয়েরি পাঠায়।
  - রেন্ডার চলার সময় একই ডাটার ডুপ্লিকেট কুয়েরি এড়াতে রিঅ্যাক্টের \`cache()\` ব্যবহার করতে হয়।
  - গ্লোবাল ক্যাশ করতে নেক্সট জেএস-এর \`unstable_cache\` এপিআই ব্যবহার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোফাইল পেজের বিভিন্ন সাব-কম্পোনেন্টে \`User.findById(id)\` কুয়েরি করা হচ্ছে:
- রিঅ্যাক্ট ক্যাশ ছাড়া মঙ্গুস একই ইউজারের জন্য সার্ভারে ৫ বার কুয়েরি পাঠাবে।
- কুয়েরি ফাংশনটি রিঅ্যাক্ট \`cache()\` দিয়ে মুড়ে দিলে মঙ্গুস ডাটাবেসে কেবল ১ম বার কুয়েরি করবে ও বাকি ৪ বার ক্যাশ থেকে ডাটা প্রজেক্ট করবে।

### উত্তম অনুশীলন
ডাটাবেস রিড অপারেশনগুলোতে ডুপ্লিকেট কুয়েরি এড়াতে রিঅ্যাক্টের \`cache()\` হুক ব্যবহার করুন। আর দীর্ঘস্থায়ী ক্যাশ বজায় রাখতে \`unstable_cache\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
পেজ লেভেলে \`revalidate = 60\` বসালে মঙ্গুস কুয়েরিও ক্যাশ হয়ে যাবে মনে করা। পেজের স্ট্যাটিক ক্যাশ তৈরি হলেও ডাইনামিক ট্র্রিগার রানিং থাকলে মঙ্গুস নতুন করে কানেকশন রান করাবে।

### Code Example
\`\`\`typescript
// src/lib/db-queries.ts
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import User from '@/models/User';

// ১. React cache(): একটি নির্দিষ্ট রিকোয়েস্ট চলার সময় ডুপ্লিকেট কুয়েরি ফিল্টার করে
export const getUserById = cache(async (id: string) => {
  console.log('ডাটাবেস কুয়েরি রান হয়েছে:', id); // ১০ বার কল করলেও প্রিন্ট হবে মাত্র একবার
  return await User.findById(id).lean();
});

// ২. unstable_cache(): একাধিক ভিজিটরের মাঝে ডাটাবেস কুয়েরি ক্যাশ ধরে রাখে (Data Cache)
export const getCachedProductStats = unstable_cache(
  async () => {
    return await Product.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }]);
  },
  ['product-stats-cache-key'], // ক্যাশ আইডেন্টিফিকেশন কি
  { revalidate: 3600, tags: ['products'] } // ১ ঘণ্টা ক্যাশ থাকবে অথবা 'products' ট্যাগ দিয়ে ম্যানুয়ালি মুছা যাবে
);
\`\`\``
  }
];
