import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'css-71',
    title: 'Explain CSS Houdini APIs (CSS Paint API and Typed OM).',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Houdini', 'Performance', 'Advanced'],
    enAnswer: 'CSS Houdini is a set of low-level APIs that expose the browser\'s CSS engine rendering pipeline to developers. The CSS Paint API allows programmatic 2D image drawing using canvas worklets. Typed OM replaces string-based style manipulations with structured JavaScript objects, boosting performance.',
    bnAnswer: 'CSS Houdini হলো এমন কিছু লো-লেভেল এপিআই (APIs) যা ব্রাউজারের সিএসএস ইঞ্জিন রেন্ডারিং পাইপলাইনকে সরাসরি ডেভেলপারদের কাছে উন্মুক্ত করে। CSS Paint API ক্যানভাস ওয়ার্কলেট ব্যবহার করে প্রোগ্রামেটিক উপায়ে ছবি আঁকার সুবিধা দেয়। Typed OM স্ট্রিং-ভিত্তিক সিএসএস পরিবর্তনকে স্ট্রাকচার্ড অবজেক্ট দিয়ে প্রতিস্থাপন করে স্পিড বাড়ায়।',
    enExplanation: `### Explanation
CSS Houdini is a collection of APIs that give developers direct access to the CSS Object Model (CSSOM) rendering lifecycle:
1. **Typed OM (Typed Object Model)**: Historically, writing styles in JS required string manipulation (e.g., \`el.style.width = (width + 10) + 'px'\`). Typed OM replaces strings with typed JavaScript objects (e.g., \`el.attributeStyleMap.set('width', CSS.px(width + 10))\`). This eliminates browser string parsing overhead, enhancing performance.
2. **CSS Paint API (Worklets)**: Allows developers to write JavaScript functions that compile directly inside the browser's paint lifecycle to draw custom backgrounds, borders, or graphics using HTML5 Canvas-like drawing methods. It runs in a background thread (Paint Worklet), avoiding main UI thread lockups.

### Real-World Example
Using CSS Paint API, you can write a worklet to draw a custom dynamic organic bubble shape background. You register it in JS and apply it in CSS as: \`background-image: paint(organic-bubble);\`. The browser renders this in the GPU thread dynamically without needing heavy background image file assets.

### Best Practice
Always provide a CSS fallback background image or color when using CSS Paint worklets, because Houdini APIs are not fully supported in legacy browsers (like older Firefox or Safari versions).

### Common Mistakes
Trying to access the DOM or window objects inside a Paint Worklet. Worklets run in an isolated background thread context with no access to standard DOM nodes.

### Code Example
\`\`\`javascript
// 1. JS: Register the Paint Worklet (bubble-paint.js)
class BubblePainter {
  paint(ctx, geom, properties) {
    ctx.fillStyle = 'indigo';
    ctx.beginPath();
    ctx.arc(geom.width / 2, geom.height / 2, geom.width / 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}
registerPaint('bubble', BubblePainter);
\`\`\`

\`\`\`css
/* 2. CSS: Usage */
.bubble-container {
  background-image: paint(bubble);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS Houdini হলো এমন কিছু এপিআই-এর কালেকশন যা ডেভেলপারদের সরাসরি ব্রাউজারের CSSOM রেন্ডারিং লাইফসাইকেলের অ্যাক্সেস দেয়:
১. **Typed OM (Typed Object Model)**: জাভাস্ক্রিপ্টে পূর্বে স্টাইল লিখতে স্ট্রিং কনক্যাট করতে হতো (যেমন: \`el.style.width = w + 'px'\`)। Typed OM এটি বাদ দিয়ে জাভাস্ক্রিপ্ট অবজেক্ট ব্যবহার করে (যেমন: \`el.attributeStyleMap.set('width', CSS.px(w))\`)। এর ফলে ব্রাউজারের স্ট্রিং পার্স করার প্রয়োজন হয় না, যা স্পিড বাড়ায়।
২. **CSS Paint API**: জাভাস্ক্রিপ্ট ওয়ার্কলেট কোড দিয়ে সরাসরি ব্রাউজারের রেন্ডারিং ফেজে কাস্টম ব্যাকগ্রাউন্ড বা বর্ডার ক্যানভাস ড্রইং পদ্ধতির মতো আঁকা যায়। এটি ব্যাকগ্রাউন্ড থ্রেডে চলে, ফলে মেইন থ্রেডে জটলা তৈরি হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
CSS Paint API ব্যবহার করে ব্যাকগ্রাউন্ডে পানির বুদ্বুদের মতো ডাইনামিক ডিজাইন আঁকা যায়। এটি জেএসে রেজিস্টার করে সিএসএসে \`background-image: paint(bubble);\` কল করলে জিপিইউ ব্যাকগ্রাউন্ডে এটি তাৎক্ষণিকভাবে রেন্ডার করবে, কোনো ইমেজ ফাইল ডাউনলোড করতে হবে না।

### উত্তম অনুশীলন
পুরোনো ব্রাউজারের কথা মাথায় রেখে সিএসএস পেইন্ট ওয়ার্কলেটের সাথে একটি সলিড কালার বা ইমেজ ফালব্যাক ব্যাকগ্রাউন্ড ব্যবহার করুন, কারণ হুডিনি এপিআই এখনও সব ব্রাউজারে পুরোপুরি সমর্থিত নয়।

### সাধারণ ভুলসমূহ
পেইন্ট ওয়ার্কলেট ফাইলের ভেতর উইন্ডো (\`window\`) বা ডম (\`document\`) অবজেক্ট অ্যাক্সেস করার চেষ্টা করা। ওয়ার্কলেটগুলো মেইন থ্রেড থেকে সম্পূর্ণ আলাদা আইসোলেটেড থ্রেডে চলে।

### কোড উদাহরণ
\`\`\`javascript
// ১. JS: পেইন্ট ওয়ার্কলেট রেজিস্ট্রেশন (bubble-paint.js)
class BubblePainter {
  paint(ctx, geom, properties) {
    ctx.fillStyle = 'indigo';
    ctx.beginPath();
    ctx.arc(geom.width / 2, geom.height / 2, geom.width / 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}
registerPaint('bubble', BubblePainter);
\`\`\`

\`\`\`css
/* ২. CSS: ব্যবহার */
.bubble-container {
  background-image: paint(bubble);
}
\`\`\``
  },
  {
    id: 'css-72',
    title: 'Explain CSS Container Queries (@container rule) and how they solve media query limitations.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Container Queries', 'Responsive', 'Layout'],
    enAnswer: 'Container Queries (@container) apply styles to elements based on the size of a parent container rather than the browser viewport width. This enables fully modular, reusable components that adapt cleanly regardless of where they are placed in a layout grid.',
    bnAnswer: 'কন্টেইনার কোয়েরি (@container) ব্রাউজার ভিউপোর্টের উইডথের পরিবর্তে প্যারেন্ট কন্টেইনারের সাইজের ওপর ভিত্তি করে চাইল্ড এলিমেন্টে স্টাইল প্রয়োগ করে। এটি সম্পূর্ণ মডুলার ও রিইউজেবল কম্পোনেন্ট তৈরি করতে সাহায্য করে যা গ্রিডের যেকোনো জায়গায় খাপ খাইয়ে নেয়।',
    enExplanation: `### Explanation
Traditional Media Queries (\`@media\`) have a major architectural flaw: they only check the screen **viewport width**. If you design a card component, it might need to display horizontally in the main section but vertically inside a narrow sidebar. Media queries cannot solve this easily because they cannot tell how wide the parent wrapper is.
**Container Queries (\`@container\`)** resolve this:
1. Define a parent container to be monitored using \`container-type: inline-size\` (monitors width) or \`size\` (monitors width and height) and optionally assign it a \`container-name\`.
2. Write styles inside \`@container\` queries. The child styles will execute relative to the parent container's actual pixel dimensions, not the screen size.

### Real-World Example
If you drop a reusable ProductCard component into a wide 1-column layout, it renders horizontally with product image on the left. If you drop the same ProductCard into a 3-column layout grid, the container shrinks below \`400px\`, and the card automatically formats to vertical layout, all without writing viewport media queries.

### Best Practice
Always declare a container context on the parent container using \`container-type: inline-size\` before styling child query behaviors. Keep component containers isolated so that wrapping structures remain modular.

### Common Mistakes
Forgetting that container query elements cannot style themselves inside their own container query block. The query can only test ancestor containers, not the target element itself.

### Code Example
\`\`\`css
/* 1. Register Parent Container */
.card-wrapper {
  container-type: inline-size;
  width: 100%;
}

/* 2. Style child relative to wrapper size */
.product-card {
  display: flex;
  flex-direction: column; /* Vertical default */
}

@container (min-width: 500px) {
  .product-card {
    flex-direction: row; /* Horizontal on wide parents */
    background-color: #f3f4f6;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ট্রেডিশনাল মিডিয়া কোয়েরি (\`@media\`) কেবল স্ক্রিন বা **ভিয়ু-পোর্টের** সাইজ মাপতে পারে। আপনি যদি এমন একটি কার্ড বানান যা ডেস্কটপের সাইডবারের (সরু জায়গা) ভেতর বসবে, আবার মেইন গ্রিডেও (চওড়া জায়গা) বসবে, তবে মিডিয়া কোয়েরি দিয়ে একে সুন্দরভাবে সাজানো অসম্ভব, কারণ ডেস্কটপের স্ক্রিন সাইজ উভয় ক্ষেত্রেই এক থাকে।
**Container Queries (\`@container\`)** এর সমাধান করে:
১. প্যারেন্ট এলিমেন্টে \`container-type: inline-size\` (প্রস্থ পরিমাপের জন্য) বা \`size\` দিয়ে কন্টেইনার রেজিস্টার করুন। প্রয়োজনে \`container-name\` সেট করুন।
২. সিএসএসে \`@container\` ব্লকের ভেতর চাইল্ডের স্টাইল লিখুন। চাইল্ডের ডিজাইন স্ক্রিন সাইজের ওপর নির্ভর না করে প্যারেন্টের রানিং উইডথের ওপর ভিত্তি করে রিঅ্যাক্ট করবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট কার্ড কম্পোনেন্টকে যখন বড় একটি ব্যানার জোনে রাখা হয় তখন সেটি পাশাপাশি (horizontal) দেখাবে, আর যখন সেটিকে ৩ কলামের সংকীর্ণ গ্রিড বা সাইডবারে রাখা হবে তখন প্যারেন্ট উইডথ ৪০০ পিক্সেলের নিচে নামায় কার্ডটি অটোমেটিক ওপরে-নিচে (vertical) সেজে যাবে।

### উত্তম অনুশীলন
চাইল্ডে কন্ডিশন লেখার পূর্বে অবশ্যই প্যারেন্ট কন্টেইনারে \`container-type\` ডিক্লেয়ার করুন। কম্পোনেন্টগুলোকে এমনভাবে আইসোলেট করুন যাতে তারা যেকোনো গ্রিড ও মডিউলের ভেতর স্বয়ংক্রিয়ভাবে খাপ খাইয়ে নিতে পারে।

### সাধারণ ভুলসমূহ
মনে করা যে কোনো এলিমেন্ট তার নিজের কন্টেইনার কোয়েরির ভেতর নিজেকেই স্টাইল করতে পারবে। কন্টেইনার কোয়েরি কেবল পূর্বপুরুষ বা প্যারেন্টদের উইডথ চেক করতে পারে, নিজের নয়।

### কোড উদাহরণ
\`\`\`css
/* ১. প্যারেন্ট কন্টেইনার রেজিস্ট্রেশন */
.card-wrapper {
  container-type: inline-size;
  width: 100%;
}

/* ২. প্যারেন্ট সাইজ অনুযায়ী চাইল্ডের রেসপনসিভ রূপ */
.product-card {
  display: flex;
  flex-direction: column; /* মোবাইলের জন্য ওপরে-নিচে */
}

@container (min-width: 500px) {
  .product-card {
    flex-direction: row; /* প্যারেন্ট ৫০০ পিক্সেলের বেশি চওড়া হলে পাশাপাশি */
    background-color: #f3f4f6;
  }
}
\`\`\``
  },
  {
    id: 'css-73',
    title: 'Explain CSS Container Query Units (cqw, cqh, cqmin, cqmax).',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Container Queries', 'Units', 'Responsive'],
    enAnswer: 'Container query units define sizes relative to the dimensions of the nearest query container: cqw is 1% of container width, cqh is 1% of container height, cqmin is the smaller dimension percentage, and cqmax is the larger dimension.',
    bnAnswer: 'কন্টেইনার কোয়েরি ইউনিট নিকটবর্তী কোয়েরি কন্টেইনারের সাইজের পারসেন্টেজ প্রকাশ করে: cqw হলো কন্টেইনারের উইডথের ১%, cqh হলো কন্টেইনারের হাইটের ১%, cqmin হলো ছোট ডাইমেনশনের ১% এবং cqmax হলো বড় ডাইমেনশনের ১%।',
    enExplanation: `### Explanation
Viewport units (\`vw\`, \`vh\`) are calculated relative to the full screen. In modular architectures, using \`vw\` inside sub-components causes visual size bugs if components are placed in small grids.
**Container Query Units** replace viewport units, scaling relative to the nearest query container ancestor:
- **\`cqw\`**: 1% of the query container's width.
- **\`cqh\`**: 1% of the query container's height.
- **\`cqmin\`**: The smaller value between \`cqw\` and \`cqh\`.
- **\`cqmax\`**: The larger value between \`cqw\` and \`cqh\`.

### Real-World Example
If you are styling heading fonts inside a modular banner promo card, you can use \`font-size: 5cqw;\`. If the banner is stretched full-screen, the text renders large. If the banner is placed inside a 300px widget space, the text shrinks perfectly to prevent overflow layout breaks.

### Best Practice
Use \`cqw\` for spacing, margins, paddings, and font sizes of nested components. Always ensure the parent wrapper has \`container-type: inline-size\` active, otherwise the browser will fall back to using viewport width (\`vw\`) values.

### Common Mistakes
Using container units inside a component but forgetting to declare \`container-type\` on any ancestor, causing the browser to render typography based on the full screen width.

### Code Example
\`\`\`css
.widget-card {
  container-type: inline-size;
  width: 100%;
}

.widget-title {
  /* Scales font dynamically based on widget container width, not screen width */
  font-size: clamp(1rem, 8cqw, 2.5rem);
  padding: 2cqw;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভিয়ু-পোর্ট ইউনিট (\`vw\`, \`vh\`) পুরো স্ক্রিনের সাপেক্ষে ক্যালকুলেট হয়। কিন্তু মডুলার আর্কিটেকচারে চাইল্ড এলিমেন্টের উইডথ বা ফন্ট সাইজ স্ক্রিন সাইজের ওপর মেপে দিলে তা ছোট গ্রিডে ভেঙে যাবে।
**Container Query Units** পুরো স্ক্রিনের বদলে নিকটবর্তী রেজিস্টার্ড কন্টেইনারের সাইজের সাপেক্ষে কাজ করে:
- **\`cqw\`**: কন্টেইনারের উইডথের ১%।
- **\`cqh\`**: কন্টেইনারের হাইটের ১%।
- **\`cqmin\`**: কন্টেইনারের উইডথ ও হাইটের মধ্যে যেটি ছোট, তার ১%।
- **\`cqmax\`**: কন্টেইনারের উইডথ ও হাইটের মধ্যে যেটি বড়, তার ১%।

### বাস্তব-ভিত্তিক উদাহরণ
একটি রিইউজেবল উইজেট ব্যানারের হেডিংয়ের সাইজ যদি \`font-size: 5cqw\` দেন, তবে ব্যানারটি বড় স্ক্রিন জুড়ে থাকলে হেডিংটি বড় আকারে দেখাবে। আর ব্যানারটি সাইডবারের ৩০০ পিক্সেল জায়গার ভেতর ঢুকলে হেডিংটি সংকুচিত হয়ে ছোট হয়ে যাবে, যার ফলে লেখা কন্টেইনার ওভারফ্লো করবে না।

### উত্তম অনুশীলন
নেস্টেড এলিমেন্টের প্যাডিং, মার্জিন ও টাইপোগ্রাফি সাইজ নির্ধারণে \`cqw\` ব্যবহার করুন। তবে নিশ্চিত করুন যে প্যারেন্ট এলিমেন্টে \`container-type\` সক্রিয় করা আছে, নাহলে ব্রাউজার ভিউপোর্ট সাইজে ফিরে যাবে।

### সাধারণ ভুলসমূহ
কন্টেইনার ইউনিট ব্যবহার করা কিন্তু প্যারেন্ট বা পূর্বপুরুষের কোথাও \`container-type\` ঘোষণা না করা। এর ফলে ফন্ট সাইজটি পুরো স্ক্রিন স্ক্রল উইডথ (\`vw\`) অনুযায়ী রেন্ডার হবে।

### কোড উদাহরণ
\`\`\`css
.widget-card {
  container-type: inline-size;
  width: 100%;
}

.widget-title {
  /* স্ক্রিনের উইডথ নয়, বরং উইজেট কন্টেইনারের উইডথ অনুযায়ী ফন্ট স্কেল হবে */
  font-size: clamp(1rem, 8cqw, 2.5rem);
  padding: 2cqw;
}
\`\`\``
  },
  {
    id: 'css-74',
    title: 'Explain CSS Grid Subgrid and its use cases.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Grid', 'Subgrid', 'Layout'],
    enAnswer: 'Subgrid (grid-template-columns: subgrid) allows nested grid items to inherit and align to the grid tracks defined on their parent grid container. This enables perfect vertical and horizontal alignment across separate cards or sections.',
    bnAnswer: 'Subgrid (grid-template-columns: subgrid) নেস্টেড গ্রিড আইটেমগুলোকে তাদের প্যারেন্ট গ্রিড কন্টেইনারের কলাম ও রোর গ্রিড ট্র্যাকগুলোকে ইনহেরিট ও এলাইন করার সুবিধা দেয়। এটি কার্ডগুলোর ভেতরের উপাদানগুলোকে একে অপরের সাথে পারফেক্ট অ্যালাইনমেন্টে রাখে।',
    enExplanation: `### Explanation
In standard CSS Grid, grid-items can be containers, but they define their own independent tracks. If you have a row of cards, and each card has a header, paragraph, and footer, their heights differ depending on text content. The headers or footers of card A and card B will not align horizontally.
**Subgrid** solves this:
- On the parent grid, define rows/columns.
- On the child (e.g. \`.card\`), set \`display: grid\`, span it across the rows, and set \`grid-template-rows: subgrid\`.
- The card's children (header, body, footer) now snap directly into the grandparent's grid lines, keeping all headers and footers horizontally locked at the same height across cards.

### Real-World Example
In a three-column product grid, Card A has a short title and Card B has a long 3-line title. With Subgrid, Card A's title section stretches to match the height of Card B's title, keeping the price labels aligned horizontally.

### Best Practice
Use subgrid to align card headers and footers in multi-column layouts. Always specify the grid spans on the child item so the subgrid knows how many grandparent tracks to absorb.

### Common Mistakes
Setting \`grid-template-columns: subgrid\` but forgetting that the subgrid child must have \`display: grid\` active for the subgrid mapping to compile.

### Code Example
\`\`\`css
/* Grandparent Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto; /* Header row, Body row, Footer row */
}

/* Parent Card spans across grandparent rows */
.card {
  grid-row: span 3; /* Spans across the 3 rows */
  display: grid;
  grid-template-rows: subgrid; /* Inherits grandparent rows sizing */
}

/* Card components snap directly into subgrid rows */
.card-header { font-weight: bold; }
.card-body { color: gray; }
.card-footer { border-top: 1px solid black; }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণ সিএসএস গ্রিডে চাইল্ড এলিমেন্টকে গ্রিড বানাতে গেলে তারা নিজেদের আলাদা স্বাধীন ট্র্যাক তৈরি করে। আপনি যদি পাশাপাশি কতগুলো কার্ড সাজান যেখানে কার্ডের হেডিং, বডি ও ফুটার রয়েছে, তবে কন্টেন্টের কম-বেশির কারণে ফুটার বা হেডিংয়ের উচ্চতা আলাদা হয়ে যায়। কার্ডগুলোর ভেতরের অংশগুলো অনুভূমিকভাবে সমান লাইনে থাকে না।
**Subgrid** এর সমাধান করে:
- গ্র্যান্ডপ্যারেন্ট বা মূল গ্রিডে কলাম বা রো ট্র্যাকগুলো লিখুন।
- কার্ডের সিএসএসে \`display: grid\` ডিক্লেয়ার করে \`grid-template-rows: subgrid\` দিন।
- এর ফলে কার্ডের ভেতরের চাইল্ডগুলো (হেডার, বডি, ফুটার) সরাসরি গ্র্যান্ডপ্যারেন্টের গ্রিড লাইনে লক হয়ে যায় এবং কন্টেন্ট যেমনই হোক সব কার্ডের হেডার ও ফুটার সমান উচ্চতায় এলাইন থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটে পাশাপাশি ৩টি প্রোডাক্টের কার্ড রয়েছে। প্রথম প্রোডাক্টের নাম ছোট কিন্তু দ্বিতীয় প্রোডাক্টের নাম ৩ লাইনের। সাবগ্রিড দিলে প্রথম প্রোডাক্টের নামের এরিয়া দ্বিতীয়টির সমান লম্বা হয়ে যাবে, ফলে নিচে থাকা প্রাইস বাটনগুলো সব কার্ডেই একদম একই সরলরেখায় দেখা যাবে।

### উত্তম অনুশীলন
মাল্টি-কলাম লেআউটে কার্ডের ভেতরের অংশগুলোর নিখুঁত অ্যালাইনমেন্ট বজায় রাখতে সাবগ্রিড ব্যবহার করুন। চাইল্ড এলিমেন্টটি গ্র্যান্ডপ্যারেন্টের কতটি ট্র্যাক ছোঁবে তা \`grid-row: span X\` দিয়ে নির্দিষ্ট করে দিন।

### সাধারণ ভুলসমূহ
\`grid-template-columns: subgrid\` সেট করা কিন্তু চাইল্ড এলিমেন্টে \`display: grid\` সক্রিয় করতে ভুলে যাওয়া। এটি না করলে সাবগ্রিড কাজ করবে না।

### কোড উদাহরণ
\`\`\`css
/* গ্র্যান্ডপ্যারেন্ট গ্রিড */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto; /* হেডার রো, বডি রো, ফুটার রো */
}

/* প্যারেন্ট কার্ড গ্র্যান্ডপ্যারেন্ট রোর ওপর বসে */
.card {
  grid-row: span 3; /* ৩টি রো জুড়েই স্প্যান করবে */
  display: grid;
  grid-template-rows: subgrid; /* গ্র্যান্ডপ্যারেন্ট রোর সাইজ ডাইনামিকালি ইনহেরিট করবে */
}

/* কার্ডের ভেতরের কম্পোনেন্টগুলো সরাসরি সাবগ্রিড রোর লাইনে লক হয়ে যাবে */
.card-header { font-weight: bold; }
.card-body { color: gray; }
.card-footer { border-top: 1px solid black; }
\`\`\``
  },
  {
    id: 'css-75',
    title: 'Explain Responsive Typography using clamp().',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Typography', 'Math', 'Responsive'],
    enAnswer: 'Responsive Typography using clamp(min, preferred, max) calculates text sizes dynamically based on viewport width (using vw), locking them between a predefined minimum and maximum size to ensure legibility across all devices without media queries.',
    bnAnswer: 'clamp(min, preferred, max) ব্যবহার করে রেসপনসিভ টাইপোগ্রাফি ভিউপোর্টের উইডথের (vw) ওপর ভিত্তি করে ফন্ট সাইজ ডাইনামিকালি হিসাব করে, যা মিডিয়া কোয়েরি ছাড়াই সব ডিভাইসে লেখার পঠনযোগ্যতা নিশ্চিত করে।',
    enExplanation: `### Explanation
Responsive typography traditionally required writing multiple breakpoints to step down text sizes on smaller screens. Using \`clamp()\` simplifies this into a single line of CSS:
- Syntax: \`font-size: clamp(min, val, max);\`
- **Minimum**: The smallest font size allowed (e.g. \`1.5rem\` or \`24px\`). Prevents text from shrinking to unreadable levels on mobile viewports.
- **Preferred Value**: Typically defined using viewport width (e.g. \`4vw\`). This allows the text to scale smoothly as the browser window stretches.
- **Maximum**: The largest font size allowed (e.g. \`3rem\` or \`48px\`). Prevents headlines from expanding to giant levels on huge monitors.

Formula to calculate preferred value:
To scale font smoothly from \`320px\` screen width (at \`16px\` size) to \`1200px\` screen width (at \`32px\` size), use: \`font-size: clamp(1rem, 1rem + 1.5vw, 2rem);\`.

### Real-World Example
In a news publication site, setting \`font-size: clamp(1.2rem, 1rem + 1vw, 2rem)\` on paragraphs ensures the article text adapts to mobile screen sizes automatically, providing a comfortable reading scale on all devices.

### Best Practice
Combine relative rem units with viewport width (\`vw\`) inside the preferred value slot (e.g. \`1rem + 2vw\`) instead of using plain viewport units (\`5vw\`). Adding a base \`rem\` value ensures the font still respects the user's browser default text zoom settings for accessibility compliance.

### Common Mistakes
Using plain viewport units like \`clamp(16px, 4vw, 32px)\`. If the user zooms in using browser accessibility settings, the font-size will **not scale** because \`4vw\` is tied strictly to viewport width, violating accessibility rules.

### Code Example
\`\`\`css
.fluid-heading {
  /* Min: 24px (1.5rem) */
  /* Preferred: base rem + 3% viewport width (scales smoothly) */
  /* Max: 56px (3.5rem) */
  font-size: clamp(1.5rem, 1rem + 3vw, 3.5rem);
  line-height: 1.2;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেসপনসিভ ফন্ট সাইজ তৈরির জন্য পূর্বে প্রতিটি ব্রেকপয়েন্টে আলাদা আলাদা ফন্ট সাইজ লিখতে হতো। সিএসএসের \`clamp()\` ব্যবহার করে এটি এক লাইনে নামিয়ে আনা যায়:
- সিনট্যাক্স: \`font-size: clamp(min, val, max);\`
- **Minimum (সর্বনিম্ন)**: ফন্টের সর্বনিম্ন সাইজ (যেমন: \`1.5rem\` বা \`24px\`)। এটি মোবাইলে ফন্ট অতিরিক্ত ছোট হয়ে যাওয়া বন্ধ করে।
- **Preferred Value (পছন্দনীয়)**: এটি ভিউপোর্ট উইডথ দিয়ে মাপা হয় (যেমন: \`4vw\`)। উইন্ডো বাড়ার সাথে সাথে ফন্ট মসৃণভাবে বড় হতে থাকে।
- **Maximum (সর্বোচ্চ)**: ফন্টের সর্বোচ্চ সাইজ (যেমন: \`3rem\` বা \`48px\`)। এটি বড় স্ক্রিনে ফন্ট দানবীয় আকার ধারণ করা বন্ধ করে।

পছন্দনীয় বা মিডল ভ্যালু বের করার ফর্মুলা:
৩২০ পিক্সেল স্ক্রিনে ১৬ পিক্সেল এবং ১২০০ পিক্সেল স্ক্রিনে ৩২ পিক্সেল ফন্ট দেখাতে চাইলে: \`font-size: clamp(1rem, 1rem + 1.5vw, 2rem);\`।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ ওয়েবসাইটের টেক্সট রিডিংয়ে \`font-size: clamp(1.2rem, 1rem + 1vw, 2rem)\` দিলে প্যারাগ্রাফগুলো মোবাইল স্ক্রিনে ছোট কিন্তু আরামদায়ক আকারে এবং বড় ডেক্সটপে স্ট্যান্ডার্ড মাপে স্বয়ংক্রিয়ভাবে রেন্ডার হবে।

### উত্তম অনুশীলন
মিডল ভ্যালুতে সরাসরি ভিউপোর্ট ইউনিট (\`5vw\`) না লিখে রেম এর সাথে প্লাস করে লিখুন (যেমন: \`1rem + 2vw\`)। এতে ইউজার ব্রাউজারের ডিফল্ট ফন্ট জুম অপশন ব্যবহার করলে ফন্ট সাইজটি অ্যাক্সেসিবিলিটি গাইডলাইন মেনে সুন্দরভাবে জুম হবে।

### সাধারণ ভুলসমূহ
সরাসরি \`clamp(16px, 4vw, 32px)\` লেখা। এতে আরোহী ফালব্যাক না থাকায় ইউজার ফন্ট জুম করলেও লেখার সাইজ বৃদ্ধি পাবে না (কারণ এটি স্ক্রিন উইডথের সাথে শক্তভাবে বাধা)।

### কোড উদাহরণ
\`\`\`css
.fluid-heading {
  /* সর্বনিম্ন: ২৪ পিক্সেল (1.5rem) */
  /* পছন্দনীয়: রুট ফন্ট + ৩% ভিউপোর্ট চওড়া */
  /* সর্বোচ্চ: ৫৬ পিক্সেল (3.5rem) */
  font-size: clamp(1.5rem, 1rem + 3vw, 3.5rem);
  line-height: 1.2;
}
\`\`\``
  },
  {
    id: 'css-76',
    title: 'Explain Stacking Context creation triggers and ordering rules in CSS.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Stacking Context', 'Z-index', 'Positioning'],
    enAnswer: 'A Stacking Context is formed by root HTML, relative/absolute position with z-index (not auto), fixed/sticky position, opacity less than 1, transform/filter/clip-path properties, or isolation: isolate. Inside, stacking order follows: backgrounds, negative z-indexes, block-level flow, positioned elements.',
    bnAnswer: 'স্ট্যাকিং কনটেক্সট তৈরি হয় root HTML, relative/absolute পজিশন ও z-index (not auto), fixed/sticky পজিশন, ১ এর কম opacity, transform/filter/clip-path প্রোপার্টিজ, অথবা isolation: isolate এর মাধ্যমে। এর লেয়ারিং ক্রম হলো: ব্যাকগ্রাউন্ড, নেগেটিভ z-index, ব্লক লেআউট ফ্লো এবং পজিশনড এলিমেন্ট।',
    enExplanation: `### Explanation
Understanding stacking context triggers is essential to solve z-index bugs:
- **Triggers that create a Stacking Context**:
  1. The root element (\`<html>\`).
  2. \`position: absolute\` or \`relative\` with a \`z-index\` value other than \`auto\`.
  3. \`position: fixed\` or \`sticky\` (z-index is not required to create context here).
  4. \`opacity\` values less than \`1\`.
  5. \`transform\`, \`filter\`, \`perspective\`, \`clip-path\`, \`mask-image\` values other than \`none\`.
  6. \`mix-blend-mode\` values other than \`normal\`.
  7. \`isolation: isolate\` (explicitly creates a stacking context without styling properties).

- **Stacking Order Rules (Inside a Context, back-to-front)**:
  1. Backgrounds and borders of the element that establishes the context.
  2. Descendants with negative z-index values (lowest layer).
  3. Non-positioned block-level elements in the document flow.
  4. Non-positioned floated elements.
  5. Inline elements inside the flow.
  6. Positioned descendants with \`z-index: auto\` or \`0\`.
  7. Positioned descendants with positive z-index values (highest layer).

### Real-World Example
If you apply a \`transform: scale(1.05)\` hover effect on a card wrapper, the card instantly creates its own stacking context. If it had absolute drop-down menus inside, their z-index relationship with sibling containers shifts.

### Best Practice
Use the CSS property \`isolation: isolate\` to explicitly create a local stacking context boundaries inside widgets, preventing inner children z-index variables from conflicting with outer page structures.

### Common Mistakes
Trying to raise a child's z-index to escape a parent's stacking context. Once a parent has a stacking context, children are locked inside it.

### Code Example
\`\`\`css
.widget-container {
  /* Explicitly isolates z-index stacking layers of children from the rest of the page */
  isolation: isolate;
}

.child-absolute {
  position: absolute;
  z-index: 999; /* Stacks high, but strictly within .widget-container bounds */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
z-index বাগ সমাধানের জন্য স্ট্যাকিং কনটেক্সট ট্রিপ ও অর্ডারিং রুলস জানা অত্যন্ত গুরুত্বপূর্ণ:
- **স্ট্যাকিং কনটেক্সট তৈরির ট্রিগারসমূহ**:
  ১. রুট এইচটিএমএল (\`<html>\`)।
  ২. \`position: absolute\` বা \`relative\` এর সাথে \`z-index\` এর মান auto ছাড়া অন্য কিছু।
  ৩. \`position: fixed\` বা \`sticky\` (এদের ক্ষেত্রে z-index ছাই না দিলেও কনটেক্সট তৈরি হয়)।
  ৪. \`opacity\` এর মান ১ এর নিচে হলে।
  ৫. \`transform\`, \`filter\`, \`clip-path\`, \`mask-image\` এর মান none ছাড়া অন্য কিছু হলে।
  ৬. \`mix-blend-mode\` এর মান normal ছাড়া অন্য কিছু হলে।
  ৭. \`isolation: isolate\` (কোনো ভিজ্যুয়াল স্টাইল চেঞ্জ ছাড়াই লোকাল স্ট্যাকিং বাউন্ডারি তৈরি করে)।

- **কনটেক্সটের ভেতরের স্তরের ক্রমানুসার (পিছন থেকে সামনে)**:
  ১. কনটেক্সট স্থাপনকারী মূল প্যারেন্টের ব্যাকগ্রাউন্ড ও বর্ডার।
  ২. নেগেটিভ z-index বিশিষ্ট চাইল্ডসমূহ।
  ৩. সাধারণ পেজ ফ্লোতে থাকা নন-পজিশনড ব্লক এলিমেন্টসমূহ।
  ৪. নন-পজিশনড ফ্লোটেড এলিমেন্ট।
  ৫. ইনলাইন টেক্সট এলিমেন্ট।
  ৬. পজিশনড এলিমেন্ট যার z-index ০ বা auto।
  ৭. পজিটিভ z-index বিশিষ্ট পজিশনড এলিমেন্ট (সবার ওপরে)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কার্ডে হোভার করার সময় সাইজ সামান্য বাড়াতে \`transform: scale(1.05)\` সেট করলেন। কার্ডটি সাথে সাথে নতুন স্ট্যাকিং কনটেক্সট তৈরি করবে, যার ফলে এর ওপরে থাকা অ্যাবসলিউট পপওভারের z-index আচরণ বদলে যেতে পারে।

### উত্তম অনুশীলন
উইজেটের ভেতরের চাইল্ডদের z-index পেজের অন্যান্য এলিমেন্টের সাথে সংঘর্ষ হওয়া বন্ধ করতে প্যারেন্টে \`isolation: isolate\` ব্যবহার করুন। এটি ক্লিন কোড গঠনে সাহায্য করে।

### সাধারণ ভুলসমূহ
প্যারেন্টের স্ট্যাকিং লেভেল কম রেখে চাইল্ডে \`z-index: 9999\` দিয়ে তাকে ওপরে তোলার চেষ্টা করা। প্যারেন্ট একবার কনটেক্সট লক করলে চাইল্ড তার ওপরে উঠতে পারে না।

### কোড উদাহরণ
\`\`\`css
.widget-container {
  /* চাইল্ডদের z-index লেয়ারকে পেজের বাকি অংশের স্ট্যাকিং থেকে আইসোলেট করবে */
  isolation: isolate;
}

.child-absolute {
  position: absolute;
  z-index: 999; /* কন্টেইনারের সীমানার ভেতরে এটি ওপরে থাকবে */
}
\`\`\``
  },
  {
    id: 'css-77',
    title: 'Explain CSS Specificity calculation for complex selector sequences.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Specificity', 'Selectors', 'Advanced'],
    enAnswer: 'CSS Specificity calculations ignore universal selectors, combinators (+, >, ~), and pseudo-class :not(). For complex pseudo-classes like :is(), :where(), and :has(), specificity is determined by the most specific argument inside their parenthesis, except for :where() which always has 0 specificity.',
    bnAnswer: 'CSS স্পেসিফিসিটি হিসাবের সময় ইউনিভার্সাল সিলেক্টর, কম্বিনেটর (+, >, ~) এবং :not() সিউডো-ক্লাস উপেক্ষা করা হয়। :is(), :where(), এবং :has() এর মতো জটিল সিউডো-ক্লাসের স্পেসিফিসিটি তাদের ব্র্যাকেটের ভেতরের সবচেয়ে শক্তিশালী সিলেক্টরের ওপর ভিত্তি করে নির্ধারিত হয়, তবে :where() এর স্পেসিফিসিটি সবসময় ০ হয়।',
    enExplanation: `### Explanation
As CSS introduces modern selectors, specificity math has evolved:
1. **The \`:is()\` and \`:has()\` rules**: The specificity of the entire pseudo-class matches the specificity of its **highest-weighted argument**.
   - \`div:is(h1, .class, #id)\` takes the specificity score of \`div #id\`, which is \`0, 1, 0, 1\` (Score 101), even if the element matched is just a simple \`h1\`.
2. **The \`:not()\` and \`:is()\` differences**: \`:not()\` behaves similarly, taking the specificity of its arguments. However, the outer wrapper itself does not add specificity.
3. **The \`:where()\` rule**: This pseudo-class is explicitly designed to have **0 specificity**. Anything inside \`:where(h1, .class, #id)\` evaluates to \`0, 0, 0, 0\`. It is useful for framework developers who want to write default styles that users can override easily.

### Real-World Example
If you write \`section :is(h1, .highlight) { color: red; }\`, its specificity score is \`0, 0, 1, 1\` (because \`.highlight\` class is weight 10, plus \`section\` element weight 1). If you write \`section :where(h1, .highlight) { color: red; }\`, its specificity is \`0, 0, 0, 1\` (the class weight is wiped to 0).

### Best Practice
Use \`:where()\` in base reset packages or shared design systems components. This allows consumers to override button or input borders without fighting cascading selector specificity.

### Common Mistakes
Writing \`:is(h1, #heavy-id)\` inside a general style rule and forgetting that it raises the specificity of *all* elements in that selector block, making it hard to override heading styles later.

### Code Example
\`\`\`css
/* Specificity: 0, 1, 0, 1 (Score: 101) due to the #id inside :is() */
article :is(h1, .text, #special-id) {
  color: blue;
}

/* Specificity: 0, 0, 0, 1 (Score: 1) - Easily overridable */
article :where(h1, .text, #special-id) {
  color: green;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আধুনিক সিএসএস সিলেক্টরগুলোর সাথে স্পেসিফিসিটি গণনার নিয়ম আরও সুনির্দিষ্ট হয়েছে:
১. **\`:is()\` এবং \`:has()\` নিয়ম**: এই সিউডো-ক্লাসগুলোর স্পেসিফিসিটি ব্র্যাকেটের ভেতর থাকা **সবচেয়ে শক্তিশালী বা বড় ওজনের সিলেক্টরটি** অনুযায়ী গণনা করা হয়।
   - \`div:is(h1, .class, #id)\` সিলেক্টরের স্পেসিফিসিটি হবে \`div #id\` এর সমান অর্থাৎ \`(0, 1, 0, 1)\` (স্কোর ১০১), এমনকি ব্রাউজার যদি কেবল একটি সাধারণ \`h1\`-এর সাথে ম্যাচ করে তাহলেও।
২. **\`:where()\` নিয়ম**: এটি স্পেসিফিসিটি সংঘাত এড়ানোর জন্য বিশেষভাবে তৈরি। এর ব্র্যাকেটের ভেতরের সব এলিমেন্টের স্পেসিফিসিটি সরাসরি **০** হয়ে যায়। \`:where(h1, .class, #id)\` এর মোট স্পেসিফিসিটি স্কোর \`(0, 0, 0, 0)\`।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি যদি লিখেন \`section :is(h1, .highlight) { color: red; }\`, তবে এর স্পেসিফিসিটি স্কোর হবে \`0, 0, 1, 1\` (কারণ ক্লাস সিলেক্টরের স্কোর ১০ আর section এর ১)। কিন্তু আপনি যদি \`section :where(h1, .highlight) { color: red; }\` লিখেন, তবে ক্লাসের ১০ স্কোর মুছে গিয়ে মোট স্কোর হবে মাত্র \`0, 0, 0, 1\` (কেবল section এর জন্য ১)।

### উত্তম অনুশীলন
শেয়ার্ড ডিজাইন বা রুট লেআউটের ক্ষেত্রে রিসেট সিএসএস লেখার সময় \`:where()\` ব্যবহার করুন। এর ফলে থার্ড-পার্টি কাস্টমাইজেশনের সময় সহজে থিম ওভাররাইড করা যায়।

### সাধারণ ভুলসমূহ
\`:is()\` এর ভেতর হুট করে কোনো আইডি (\`#id\`) সিলেক্টর রাখা। এটি ব্র্যাকেটের ভেতরের অন্য সব সাধারণ এলিমেন্টের স্পেসিফিসিটিও আইডি লেভেলে বাড়িয়ে দেয়, ফলে পরবর্তীতে সেগুলোকে নরমাল ক্লাস দিয়ে ওভাররাইড করা যায় না।

### কোড উদাহরণ
\`\`\`css
/* স্পেসিফিসিটি: ০, ১, ০, ১ (স্কোর: ১০১) - :is() এর ভেতরের #আইডির কারণে */
article :is(h1, .text, #special-id) {
  color: blue;
}

/* স্পেসিফিসিটি: ০, ০, ০, ১ (স্কোর: ১) - খুব সহজে ওভাররাইড করা যাবে */
article :where(h1, .text, #special-id) {
  color: green;
}
\`\`\``
  },
  {
    id: 'css-78',
    title: 'Explain the inline-block space issue and how to resolve it.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Layout', 'Display', 'Typography'],
    enAnswer: 'The inline-block spacing issue occurs because browsers render white spaces (newlines/spaces in HTML markup) between inline-block elements as visual spaces on the screen. It can be resolved by setting font-size: 0 on the parent container, removing HTML spaces, or using Flexbox.',
    bnAnswer: 'ইনলাইন-ব্লক স্পেসিং সমস্যাটি ঘটে কারণ ব্রাউজার এইচটিএমএল কোডের ভেতরের স্পেস বা নতুন লাইনকে (whitespace) স্ক্রিনে ফিজিক্যাল স্পেস হিসেবে রেন্ডার করে। এটি প্যারেন্টে font-size: 0 দিয়ে, এইচটিএমএল কোডের স্পেস মুছে অথবা Flexbox ব্যবহার করে সমাধান করা যায়।',
    enExplanation: `### Explanation
When you place multiple elements with \`display: inline-block\` next to each other in HTML:
\`\`\`html
<div class="parent">
  <div class="child">A</div>
  <div class="child">B</div>
</div>
\`\`\`
Even if both children have \`width: 50%\`, they will not sit side-by-side; the second child breaks and drops down. This happens because the **newline and indentation space** in HTML is parsed by the browser as a single text space character (approx \`4px\` wide depending on font-size).

**Solutions**:
1. **Modern Layout (Recommended)**: Use Flexbox (\`display: flex\`) instead of inline-block. Flexbox completely ignores text whitespace characters between items.
2. **Font Size Reset**: Set \`font-size: 0\` on the parent container (which makes the text character space \`0px\` wide), and then restore the actual \`font-size\` inside the child elements.
3. **HTML collapse**: Write HTML tag margins flush (e.g. \`</div><div class="child">\`) or use HTML comments \`<!-- -->\` to fill the gaps.

### Real-World Example
If you are maintaining an older CSS grid system built before flexbox was common, you will experience grid elements dropping to new lines due to this whitespace. Adding \`font-size: 0\` on the grid row container fixes the grid layout.

### Best Practice
Avoid using \`display: inline-block\` for structural layout columns. Restrict its usage to text icons, badges, or buttons, and build layouts using modern grid or flex blocks.

### Common Mistakes
Applying \`font-size: 0\` to the parent container but forgetting to declare a readable \`font-size\` on the children, causing all text inside the children to disappear.

### Code Example
\`\`\`css
.nav-row {
  font-size: 0; /* Shrinks the inline character spaces between inline-block children to 0px */
}

.nav-item {
  display: inline-block;
  width: 25%; /* Will fit exactly 4 items side-by-side */
  font-size: 1rem; /* Restore readable font size */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিএমএলে পাশাপাশি কতগুলো \`display: inline-block\` এলিমেন্ট লিখলে:
\`\`\`html
<div class="parent">
  <div class="child">A</div>
  <div class="child">B</div>
</div>
\`\`\`
প্রতিটি চাইল্ডের উইডথ \`50%\` হওয়া সত্ত্বেও তারা পাশাপাশি না বসে দ্বিতীয় চাইল্ডটি নিচে নেমে যায়। এর কারণ হলো এইচটিএমএল কোড লেখার সময় লাইনের শেষে দেওয়া এন্টার বা ট্যাব স্পেসকে ব্রাউজার একটি টেক্সট স্পেস ক্যারেক্টার হিসেবে রেন্ডার করে (যার সাইজ প্রায় ৪ পিক্সেলের মতো)।

**সমাধানসমূহ**:
১. **আধুনিক লেআউট (সবচেয়ে ভালো)**: inline-block এর পরিবর্তে Flexbox (\`display: flex\`) ব্যবহার করুন। ফ্লেক্সবক্স এলিমেন্টগুলোর মধ্যবর্তী লেখার ফাঁকা স্পেস সম্পূর্ণ অগ্রাহ্য করে।
২. **প্যারেন্ট ফন্ট সাইজ জিরো**: প্যারেন্ট কন্টেইনারে \`font-size: 0\` দিন (যার ফলে স্পেসটির সাইজ ০ পিক্সেল হয়ে যায়) এবং পরবর্তীতে চাইল্ড এলিমেন্টগুলোর ফন্ট সাইজ রি-স্টোর করুন।
৩. **এইচটিএমএল গ্যাপ ফিল**: এইচটিএমএল কোডের ট্যাগগুলোকে পাশাপাশি ঘেঁষে লিখুন অথবা কমেন্ট ট্যাগ \`<!-- -->\` দিয়ে ফাঁকা অংশ ঢেকে দিন।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্লেক্সবক্স আসার আগের কোনো ওল্ড প্রজেক্ট মেইনটেইন করার সময় গ্রিড কলাম ভেঙে যাওয়ার সমস্যা দেখা দিলে প্যারেন্ট রোতে \`font-size: 0\` সেট করে এটি ফিক্স করা যায়।

### উত্তম অনুশীলন
লেআউট বা কলাম বানানোর জন্য \`inline-block\` ব্যবহার বর্জন করুন। এটি কেবল বাটন বা ইনলাইন ব্যাজের মধ্যেই সীমাবদ্ধ রাখুন এবং লেআউটের জন্য ফ্লেক্স বা গ্রিড ব্যবহার করুন।

### সাধারণ ভুলসমূহ
প্যারেন্টে \`font-size: 0\` দিয়ে চাইল্ডের ভেতর ফন্ট সাইজ নতুন করে ডিক্লেয়ার করতে ভুলে যাওয়া, যার ফলে বাটনের ভেতরের সব লেখা অদৃশ্য হয়ে যায়।

### কোড উদাহরণ
\`\`\`css
.nav-row {
  font-size: 0; /* ইনলাইন চাইল্ডদের মধ্যকার স্পেস ০ করে দেবে */
}

.nav-item {
  display: inline-block;
  width: 25%; /* ৪টি কলাম সমান ২৫% উইডথ নিয়ে পাশাপাশি বসবে */
  font-size: 1rem; /* ফন্ট সাইজ আবার রি-স্টোর করা হলো */
}
\`\`\``
  },
  {
    id: 'css-79',
    title: 'Explain CSS logical properties in bidirectional and vertical layouts.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Logical Properties', 'Internationalization', 'Layout'],
    enAnswer: 'In bidirectional (LTR/RTL) layouts, logical properties dynamically map margins, paddings, borders, and positions relative to writing-mode and direction. For vertical layouts, block properties automatically translate to horizontal orientations and inline properties translate to vertical axes.',
    bnAnswer: 'দ্বিমুখী (LTR/RTL) লেআউটে লজিক্যাল প্রোপার্টিজ মার্জিন, প্যাডিং, বর্ডার এবং পজিশনকে রাইটিং-মোড ও ডিরেকশনের সাপেক্ষে ডাইনামিকালি ম্যাপ করে। উল্লম্ব (vertical) লেআউটের ক্ষেত্রে ব্লক প্রোপার্টি স্বয়ংক্রিয়ভাবে অনুভূমিক অক্ষে এবং ইনলাইন প্রোপার্টি উল্লম্ব অক্ষে রূপান্তরিত হয়।',
    enExplanation: `### Explanation
Bidirectional (LTR to RTL) and vertical layouts (used in East Asian writing systems) are handled dynamically by CSS Logical Properties:
- **Direction Toggle**: When the document direction shifts from left-to-right (LTR) to right-to-left (RTL) via \`<html dir="rtl">\`, physical properties (like \`margin-left: 20px\`) remain static, forcing spacing on the wrong side. Logical properties (like \`margin-inline-start: 20px\`) automatically transition to \`margin-right\` dynamically in the browser rendering tree.
- **Vertical Writing Modes**: If \`writing-mode: vertical-rl\` is applied:
  - The Block axis turns horizontal (top-to-bottom reading becomes right-to-left layout columns).
  - The Inline axis turns vertical (character flow runs downwards).
  - \`margin-block-start\` automatically adapts to represent the **right margin** since columns flow right-to-left.

### Real-World Example
If you are developing a global e-commerce checkout page that supports English, Arabic, and vertical Japanese, logical properties allow you to use a single stylesheet instead of maintaining three separate layouts.

### Best Practice
Replace all physical properties like \`left\`, \`right\`, \`top\`, \`bottom\` with logical equivalents:
- \`left\` -> \`inset-inline-start\`
- \`right\` -> \`inset-inline-end\`
- \`top\` -> \`inset-block-start\`
- \`bottom\` -> \`inset-block-end\`

### Common Mistakes
Using logical properties but setting absolute widths and heights. To make sizes logical as well, use \`inline-size\` (replaces width) and \`block-size\` (replaces height).

### Code Example
\`\`\`css
.dropdown-menu {
  position: absolute;
  /* Replaces top: 100% */
  inset-block-start: 100%;
  /* Replaces right: 0 (Flips to left: 0 automatically in RTL modes) */
  inset-inline-end: 0;
  
  /* Replaces width and height */
  inline-size: 200px;
  block-size: auto;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বহুভাষী (LTR ও RTL) এবং উল্লম্ব বা ভার্টিক্যাল লেআউটের ডাইনামিক ডিজাইন সিএসএস লজিক্যাল প্রোপার্টির মাধ্যমে নিখুঁতভাবে হ্যান্ডেল করা যায়:
- **ডিরেকশন পরিবর্তন**: যখন এইচটিএমএল ফাইলের ডিরেকশন আরবী ভাষার জন্য \`<html dir="rtl">\` করা হয়, তখন ফিজিক্যাল সিএসএস (যেমন: \`margin-left: 20px\`) একই জায়গায় দাঁড়িয়ে থাকে, যা ভুল স্পেসিং তৈরি করে। কিন্তু লজিক্যাল \`margin-inline-start: 20px\` ব্যবহার করলে ব্রাউজার নিজে থেকেই এটিকে ডান পাশের মার্জিনে শিফট করে নেয়।
- **উল্লম্ব বা ভার্টিক্যাল রাইটিং মোড**: জাপানি ভাষার জন্য \`writing-mode: vertical-rl\` সেট করলে:
  - ব্লক অক্ষটি অনুভূমিক বা হরিজন্টাল হয়ে যায় (লাইনগুলো ওপরে-নিচে না হয়ে ডানে-বামে সাজে)।
  - ইনলাইন অক্ষটি উল্লম্ব বা ভার্টিক্যাল হয়ে যায় (অক্ষরগুলো ওপর থেকে নিচে নামে)।
  - \`margin-block-start\` স্বয়ংক্রিয়ভাবে ডান পাশের মার্জিনে রূপান্তরিত হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গ্লোবাল পোর্টাল বা ই-কমার্স চেকআউট পেজ তৈরি করছেন যা ইংরেজি, আরবী এবং জাপানি ভাষা সাপোর্ট করে। লজিক্যাল প্রোপার্টিজ ব্যবহার করলে আলাদা ৩টি সিএসএস ফাইল মেইনটেইন না করে একটি সিঙ্গেল ফাইলেই সব অ্যাডজাস্টমেন্ট সম্ভব।

### উত্তম অনুশীলন
সিএসএসের ফিজিক্যাল পজিশনিং প্রোপার্টিগুলো লজিক্যাল দিয়ে প্রতিস্থাপন করুন:
- \`left\` -> \`inset-inline-start\`
- \`right\` -> \`inset-inline-end\`
- \`top\` -> \`inset-block-start\`
- \`bottom\` -> \`inset-block-end\`

### সাধারণ ভুলসমূহ
পজিশনে লজিক্যাল বসালেও উইডথ ও হাইটে ফিক্সড ফিজিক্যাল প্রোপার্টি ব্যবহার করা। সাইজকেও লজিক্যাল করতে \`inline-size\` (উইডথের জায়গায়) এবং \`block-size\` (হাইটের জায়গায়) ব্যবহার করুন।

### কোড উদাহরণ
\`\`\`css
.dropdown-menu {
  position: absolute;
  /* top: 100% এর পরিবর্তে */
  inset-block-start: 100%;
  /* right: 0 এর পরিবর্তে (RTL মোডে এটি অটোমেটিক left: 0 হয়ে যাবে) */
  inset-inline-end: 0;
  
  /* width এবং height এর পরিবর্তে লজিক্যাল উইডথ-হাইট */
  inline-size: 200px;
  block-size: auto;
}
\`\`\``
  },
  {
    id: 'css-80',
    title: 'Explain CSS @media (hover: hover) and hover capability queries.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Responsive', 'UX', 'Mobile'],
    enAnswer: 'The @media (hover: hover) media feature tests whether the user\'s primary input device (like a mouse) supports hover states. This allows developers to apply hover animations only on desktop browsers, preventing sticky hover bugs on touch screens.',
    bnAnswer: '@media (hover: hover) মিডিয়া ফিচারটি পরীক্ষা করে দেখে যে ব্যবহারকারীর প্রাইমারি ইনপুট ডিভাইস (যেমন মাউস) হোভার স্টেট সাপোর্ট করে কিনা। এর ফলে কেবল ডেস্কটপ ব্রাউজারেই হোভার অ্যানিমেশন রান করানো যায়, যা মোবাইলের টাচ স্ক্রিনে বাজে হোভার বাটন লকিং প্রতিরোধ করে।',
    enExplanation: `### Explanation
On mobile touch screens, there is no mouse cursor. When a user taps a button with a CSS hover effect (\`.btn:hover\`), the browser is forced to apply the hover style. Because the touch focus stays on the button after the tap, the button remains stuck in its hover state (e.g. staying dark purple) until the user taps somewhere else. This is called a **sticky hover bug**.
**Capability Queries** resolve this:
- \`@media (hover: hover)\`: Matches only if the primary pointer device has hover capabilities (like desktops with mice).
- \`@media (hover: none)\`: Matches touch screens (smartphones, tablets) where there is no cursor.

### Real-World Example
If you are designing a product card list with an zoom-in overlay animation on hover, wrapping the hover styling inside \`@media (hover: hover)\` ensures mobile users do not get stuck zoom images that block clicks, while desktop users get the smooth animation.

### Best Practice
Wrap all interactive scale transformations and complex hover state changes inside \`@media (hover: hover)\` blocks to keep mobile user experiences clean.

### Common Mistakes
Placing focus styles inside hover queries, which can make keyboard navigation indicators invisible on devices that use assistive tab key flows.

### Code Example
\`\`\`css
.product-card {
  transform: scale(1);
  transition: transform 0.3s ease;
}

/* Apply hover scale transition ONLY on devices with cursor pointers */
@media (hover: hover) {
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মোবাইল টাচ স্ক্রিনে কোনো মাউস পয়েন্টার বা কারসর থাকে না। কিন্তু মোবাইলে সিএসএস হোভার (\`.btn:hover\`) দেওয়া কোনো বাটনে ট্যাপ করলে ব্রাউজার হোভারের কালার স্টাইলটি বাটনে ধরে রাখে। বাটন ট্যাপ করার পরেও সেটি হোভার হয়েই থাকে যতক্ষণ না ইউজার স্ক্রিনের অন্য কোথাও টাচ করছেন। একে **স্টিকি হোভার বাগ (sticky hover bug)** বলে।
**ক্যাপাবিলিটি কোয়েরি** এর সমাধান করে:
- \`@media (hover: hover)\`: এটি কেবল তখনই সক্রিয় হয় যখন ব্যবহারকারীর ইনপুট ডিভাইস হোভার সমর্থন করে (যেমন মাউসযুক্ত ডেস্কটপ)।
- \`@media (hover: none)\`: এটি মোবাইল বা ট্যাবলেটের টাচ স্ক্রিন ডিটেক্ট করে যেখানে কোনো মাউস কারসর নেই।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাক্ট গ্যালারি কার্ডে হোভার করলে ছবি জুম হওয়া ও ওপরে ডিটেইলস ভেসে ওঠার ইফেক্ট রয়েছে। এই হোভার কোডকে \`@media (hover: hover)\` দিয়ে র্যাপ করলে ডেস্কটপ ইউজাররা স্মুথ অ্যানিমেশন পাবেন কিন্তু মোবাইল ইউজারদের টাচ করার সময় ছবি জুম হয়ে বাটন ব্লক হওয়ার ঝামেলা থাকবে না।

### উত্তম অনুশীলন
মোবাইল ইন্টারফেস পরিচ্ছন্ন ও রেসপনসিভ রাখতে সব ধরনের জটিল হোভার ট্রানজিশন ও ট্রান্সফর্মেশনকে \`@media (hover: hover)\` ব্লকের ভেতরে লিখুন।

### সাধারণ ভুলসমূহ
হোভার কোয়েরির ভেতরে কীবোর্ড ফোকাস (\`:focus\`) ইন্ডিকেটর স্টাইল ঢুকিয়ে দেওয়া। এর ফলে কীবোর্ড অ্যাক্সেসিবিলিটি ট্র্যাকিং বন্ধ হয়ে যেতে পারে।

### কোড উদাহরণ
\`\`\`css
.product-card {
  transform: scale(1);
  transition: transform 0.3s ease;
}

/* কেবল কারসর পয়েন্টার বিশিষ্ট ডিভাইসেই হোভার অ্যানিমেশন কার্যকর হবে */
@media (hover: hover) {
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
}
\`\`\``
  },
  {
    id: 'css-81',
    title: 'Explain CSS prefers-reduced-motion media query.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Accessibility', 'Animations', 'UX'],
    enAnswer: 'The prefers-reduced-motion media query detects if the user has enabled OS-level settings to minimize non-essential motion. Developers must use it to disable or slow down animations to prevent motion sickness and vestibular issues.',
    bnAnswer: 'prefers-reduced-motion মিডিয়া কোয়েরিটি চেক করে দেখে যে ব্যবহারকারী অপারেটিং সিস্টেম লেভেলে অ্যানিমেশন ও নড়াচড়া কমানোর অপশনটি অন করেছেন কিনা। মোশন সিকনেস ও শারীরিক অস্বস্তি এড়াতে ডেভেলপারদের অবশ্যই এর সাহায্যে অ্যানিমেশন বন্ধ করা উচিত।',
    enExplanation: `### Explanation
Some users suffer from vestibular disorders, epilepsy, or motion sickness. Rapid zooming, sliding, or flashing animations on a website can cause headache, dizziness, or trigger seizures.
Modern operating systems (Windows, macOS, iOS, Android) have a setting called "Reduce Motion". The browser exposes this setting via the \`prefers-reduced-motion\` media query:
- \`prefers-reduced-motion: reduce\`: Matches if the user wants minimal animation.
- \`prefers-reduced-motion: no-preference\`: Matches if the user hasn't modified their system preference.

### Real-World Example
If you are designing a modal transition with a spring bounce sliding animation from bottom-to-top, wrapping the transition rules so they only execute when \`no-preference\` is active ensures users with reduce-motion settings get a safe, instant fade-in instead.

### Best Practice
Instead of stripping animations manually, write a global reset block in your CSS that forces transition times to 0s and stops animation loops for users who prefer reduced motion.

### Common Mistakes
Forgetting that smooth scrolling is also a motion animation. Turn off \`scroll-behavior: smooth\` under the reduce motion query blocks.

### Code Example
\`\`\`css
/* Global Reset for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: scroll !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কিছু ব্যবহারকারী ভেস্টিবুলার ডিসঅর্ডার, মোশন সিকনেস বা এপিলেপসিতে ভোগেন। পেজের বড় কোনো উপাদান হুট করে স্লাইড, জুম বা অবিরাম ফ্লাশ করলে তাদের মাথা ঘোরা বা শারীরিক অসুস্থতা তৈরি হতে পারে।
আধুনিক ওএসগুলোতে (Windows, iOS) "Reduce Motion" অপশন থাকে। ব্রাউজার সিএসএস মিডিয়া কোয়েরির মাধ্যমে এই সিগন্যালটি ডেভেলপারদের কাছে পাঠায়:
- \`prefers-reduced-motion: reduce\`: ব্যবহারকারী অ্যানিমেশন বা নড়াচড়া এড়াতে চান।
- \`prefers-reduced-motion: no-preference\`: ব্যবহারকারী সিস্টেমের ডিফল্ট মোডেই আছেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পপ-আপ মডাল নিচে থেকে লাফ দিয়ে স্ক্রিনের ওপরে স্লাইড করে বসে। এই মোশন স্লাইডারটি prefers-reduced-motion মিডিয়া কোয়েরির ভেতরে রাখলে যাদের ওএসে অ্যানিমেশন অফ করা আছে তারা কেবল ঝটকা বিহীন সাধারণ ফেড-ইন (fade-in) ইফেক্ট দেখতে পাবেন।

### উত্তম অনুশীলন
ম্যানুয়ালি প্রতিটি উপাদানের অ্যানিমেশন চেক করার চেয়ে সিএসএসের গ্লোবাল ফাইলে একটি ক্যাসকেড রিসেট রুল লিখে রাখুন, যা ইউজারের মোশন এড়ানোর ইচ্ছায় সব ধরনের অ্যানিমেশন ডিউরেশন শূন্য করে দেয়।

### সাধারণ ভুলসমূহ
স্মুথ স্ক্রলিংও এক ধরনের বড় মোশন অ্যানিমেশন তা ভুলে যাওয়া। তাই মোশন রিসেটের তালিকায় \`scroll-behavior: auto !important\` রাখা আবশ্যক।

### কোড উদাহরণ
\`\`\`css
/* ব্যবহারকারী অ্যানিমেশন বন্ধ করতে চাইলে গ্লোবাল অ্যানিমেশন রিসেট */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: scroll !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
\`\`\``
  },
  {
    id: 'css-82',
    title: 'Explain CSS prefers-color-scheme media query.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Theme', 'Dark Mode', 'Responsive'],
    enAnswer: 'The prefers-color-scheme media query detects whether the user has configured their system theme to light or dark mode, allowing developers to apply styling themes automatically matching OS settings.',
    bnAnswer: 'prefers-color-scheme মিডিয়া কোয়েরি ব্যবহারকারীর অপারেটিং সিস্টেমের থিম লাইট নাকি ডার্ক মোডে সেট করা রয়েছে তা সনাক্ত করে এবং পেজের থিমও স্বয়ংক্রিয়ভাবে ওএসের সাথে ম্যাচ করায়।',
    enExplanation: `### Explanation
The \`prefers-color-scheme\` media query allows you to build an **automatic theme switcher** directly in CSS:
- \`prefers-color-scheme: dark\`: Matches if the user's OS has dark mode active.
- \`prefers-color-scheme: light\`: Matches if the user's OS has light mode active.

You can combine this with CSS Custom Properties (Variables) inside media query blocks. Declare base variables inside \`:root\`, and then override the variable values inside the dark query block.

### Real-World Example
A user opens your website. If their macOS system is in dark mode, the browser detects this instantly and renders the page in dark colors, protecting their eyes without requiring them to find a manual theme toggle button.

### Best Practice
Design system-aware themes. Use CSS variables declared in \`:root\` and override them inside the \`@media (prefers-color-scheme: dark)\` block, but also provide a JavaScript manual theme override class (e.g. \`.theme-dark\`) so users can override system defaults if they prefer.

### Common Mistakes
Forgetting that system themes can change dynamically (e.g. auto dark mode sunset transitions), and not testing your color variables inheritance.

### Code Example
\`\`\`css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
}

/* Automatically switches variable values if OS has dark mode enabled */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #111827;
    --text-color: #f9fafb;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`prefers-color-scheme\` মিডিয়া কোয়েরি ব্যবহার করে জাভাস্ক্রিপ্ট ছাড়াই সরাসরি সিএসএস দিয়ে **অটো থিম চেঞ্জার** তৈরি করা যায়:
- \`prefers-color-scheme: dark\`: ওএসে ডার্ক মোড অন থাকলে এটি ট্রিগার হয়।
- \`prefers-color-scheme: light\`: ওএসে লাইট মোড অন থাকলে এটি ট্রিগার হয়।

এটি মিডিয়া কোয়েরির ভেতরে সিএসএস ভেরিয়েবল বা কাস্টম প্রোপার্টি ব্যবহার করে খুব সহজে হ্যান্ডেল করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার রাতে আপনার সাইট ওপেন করলেন। তাঁর মোবাইল বা কম্পিউটারের ওএস যদি অটোমেটিক নাইট মোডে চলে যায়, তবে ব্রাউজার তা ডিটেক্ট করে আপনার সাইটটিকেও কালো থিমে রূপান্তর করবে, ফলে চোখের ওপর প্রেসার কম পড়বে।

### উত্তম অনুশীলন
ডিভাইসের ওপর ভিত্তি করে থিম রেডি করুন। \`:root\` এ ভেরিয়েবল কালার লিখে \`@media (prefers-color-scheme: dark)\` ব্লকে মানগুলো রি-রাইট করুন। তবে ব্যবহারকারীর ম্যানুয়াল চয়েসকে সম্মান জানাতে কাস্টম থিম টগল করার বাটন ও জেএস ক্লাস ডিক্লেয়ার রাখুন।

### সাধারণ ভুলসমূহ
সিপিইউ মেমোরি বাঁচানোর জন্য থিম ট্রানজিশন স্মুথ না করা। ব্যাকগ্রাউন্ড ও কালারে সামান্য ডিলিউশন ট্রানজিশন দিলে থিম সুইচের ভিজ্যুয়াল ইফেক্ট প্রিমিয়াম দেখায়।

### কোড উদাহরণ
\`\`\`css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
}

/* ওএসের থিম যদি ডার্ক মোড হয় তবে ভেরিয়েবল কোড বদলে যাবে */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #111827;
    --text-color: #f9fafb;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
\`\`\``
  },
  {
    id: 'css-83',
    title: 'Explain the browser rendering pipeline: Layout, Paint, and Composite.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Performance', 'Rendering', 'Advanced'],
    enAnswer: 'The browser rendering pipeline turns CSS/HTML into screen pixels in three stages: Layout (calculates element geometry and positions), Paint (draws colors, borders, shadows, and text), and Composite (layers elements on the GPU).',
    bnAnswer: 'ব্রাউজার রেন্ডারিং পাইপলাইন সিএসএস/এইচটিএমএলকে তিনটি ধাপে স্ক্রিনের পিক্সেলে রূপান্তর করে: Layout (এলিমেন্টের সাইজ ও পজিশন গণনা করে), Paint (রঙ, বর্ডার, শ্যাডো এবং টেক্সট আঁকে), এবং Composite (জিপিইউতে বিভিন্ন লেয়ার সাজিয়ে স্ক্রিনে দেখায়)।',
    enExplanation: `### Explanation
When a CSS property is mutated (either via transition, animation, or JS), the browser executes parts of the rendering pipeline. Understanding this is key to writing high-performance animations:
1. **Layout (Reflow)**: Calculates how much space elements take and where they sit. Any change to geometry properties (like \`width\`, \`height\`, \`margin\`, \`left\`, \`top\`, \`font-size\`) forces the browser to recalculate the positions of *all* affected elements on the page. This is **extremely slow**.
2. **Paint**: Draws pixels (fills colors, borders, shadows, backgrounds). Changing properties like \`color\`, \`background-color\`, or \`box-shadow\` skips Layout but triggers Paint. Painting is computationally expensive for the CPU.
3. **Composite**: Sends layers to the GPU to draw onto the screen. Changing **\`transform\`** or **\`opacity\`** skips both Layout and Paint, doing all work inside the GPU thread. This is **extremely fast** (maintains 60fps/120fps smoothly).

### Real-World Example
If you animate a modal sliding in using \`margin-top\`, the browser triggers Layout at every frame, causing screen stuttering. If you animate the slide using \`transform: translateY()\`, the browser skips layout/paint and animates directly on the GPU composite layer, running at a buttery-smooth frame rate.

### Best Practice
Restrict animations strictly to \`transform\` and \`opacity\`. Never animate geometry properties like \`left\`, \`top\`, \`width\`, or \`margin\`.

### Common Mistakes
Animating layout properties because they are easier to write, leading to massive CPU render bottlenecks and choppy mobile animations.

### Code Example
\`\`\`css
/* BAD: Triggers Layout calculations on every frame */
.card-hover-bad {
  position: relative;
  top: 0;
  transition: top 0.2s linear;
}
.card-hover-bad:hover {
  top: -10px;
}

/* GOOD: Skips Layout & Paint, animates only on Composite (GPU) */
.card-hover-good {
  transform: translateY(0);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover-good:hover {
  transform: translateY(-10px);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েবসাইটের কোনো এলিমেন্ট অ্যানিমেশন বা ডিজাইনের পরিবর্তনের সময় ব্রাউজার ইঞ্জিন রেন্ডারিং পাইপলাইনের নির্দিষ্ট ধাপগুলো রান করায়:
১. **Layout (Reflow - লেআউট)**: এলিমেন্টটির আকার এবং পজিশন গণনা করে। এলিমেন্টের জ্যামিতিক প্রোপার্টি (যেমন: \`width\`, \`height\`, \`margin\`, \`top\`, \`left\`) পরিবর্তন করলে ব্রাউজারকে পুরো পেজের লেআউট নতুন করে হিসাব করতে হয়, যা খুবই **ধীরগতির**।
২. **Paint (পেইন্ট)**: বর্ডারের রঙ, শ্যাডো, ছবির পিক্সেল ইত্যাদি ক্যানভাসে আঁকে। \`color\` বা \`background-color\` পরিবর্তন লেআউট স্কিপ করে কিন্তু পেইন্ট রান করায়। এটিও যথেষ্ট মেমোরি খরচ করে।
৩. **Composite (কম্পোজিট)**: বিভিন্ন লেয়ার বা স্তরগুলোকে একসাথে করে জিপিইউ (GPU)-এর সাহায্য স্ক্রিনে রেন্ডার করে। **\`transform\`** বা **\`opacity\`** পরিবর্তন লেআউট এবং পেইন্ট উভয় ধাপ এড়িয়ে সরাসরি জিপিইউতে কাজ করে, যা অত্যন্ত **দ্রুতগতির** (১২০ ফ্রেম পার সেকেন্ড স্মুথনেস দেয়)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পপ-আপ মডাল স্ক্রিনে আসার সময় যদি এর পজিশন মার্জিন দিয়ে (\`margin-top\`) পরিবর্তন করেন, তবে ব্রাউজারকে প্রতি ফ্রেমে লেআউটের জটিল হিসাব করতে হবে এবং অ্যানিমেশনটি ল্যাগ করবে। কিন্তু স্লাইড করার জন্য \`transform: translateY()\` ব্যবহার করলে সরাসরি জিপিইউ থ্রেডে কাজ হওয়ায় অ্যানিমেশনটি মাখনের মতো মসৃণ দেখাবে।

### উত্তম অনুশীলন
অ্যানিমেশন তৈরির সময় কেবল \`transform\` এবং \`opacity\` ব্যবহার করুন। \`top\`, \`left\` বা \`width\` এর মতো জ্যামিতিক মাপ অ্যানিমেট করা পুরোপুরি বর্জন করুন।

### সাধারণ ভুলসমূহ
রেন্ডারিং পাইপলাইন না বুঝে পজিশন পরিবর্তনের জন্য \`top\` বা \`left\` অ্যানিমেট করা, যার ফলে মোবাইলে ওয়েবসাইটটি হ্যাং বা ধীরগতির মনে হয়।

### কোড উদাহরণ
\`\`\`css
/* ক্ষতিকর: প্রতি ফ্রেমে Layout ক্যালকুলেশন করাবে */
.card-hover-bad {
  position: relative;
  top: 0;
  transition: top 0.2s linear;
}
.card-hover-bad:hover {
  top: -10px;
}

/* সেরা অনুশীলন: Layout ও Paint এড়িয়ে সরাসরি জিপিইউ কম্পোজিট ব্যবহার করবে */
.card-hover-good {
  transform: translateY(0);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover-good:hover {
  transform: translateY(-10px);
}
\`\`\``
  },
  {
    id: 'css-84',
    title: 'Explain GPU Acceleration in CSS.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Performance', 'GPU', 'Animations'],
    enAnswer: 'GPU Acceleration offloads graphic rendering tasks from the CPU to the graphics card (GPU). It is triggered by animating composite properties (transform, opacity) or explicitly forcing layer promotion using translate3d() or will-change.',
    bnAnswer: 'জিপিইউ এক্সিলারেশন (GPU Acceleration) গ্রাফিক্স রেন্ডার করার কাজগুলো প্রসেসর (CPU) থেকে গ্রাফিক্স কার্ডে (GPU) পাঠিয়ে দেয়। এটি transform বা opacity অ্যানিমেট করার মাধ্যমে অথবা translate3d() বা will-change ব্যবহার করে লেয়ার প্রমোট করার মাধ্যমে সক্রিয় করা হয়।',
    enExplanation: `### Explanation
Browsers render web layouts on the CPU by default. However, when complex transitions or heavy animations run, the CPU can hit performance bottlenecks.
**GPU Acceleration** works by offloading the rendering work to the system's graphics card:
- When an element is promoted to its own **composited layer**, the browser takes a snapshot of the element as a texture and stores it in GPU memory.
- The GPU can instantly slide, scale, fade, or rotate this texture without needing the CPU to repaint or recalculate layout parameters.
- **Triggers**:
  - CSS transforms: \`transform: translate3d(0,0,0)\` or \`translateZ(0)\` (historic hacks to force layer promotion).
  - Modern property: \`will-change: transform, opacity;\`.
  - Properties like \`transform\`, \`opacity\`, \`filter\`.

### Real-World Example
If you notice a parallax scroll section lagging on mobile browsers, adding a dummy \`transform: translateZ(0)\` or \`will-change: transform\` forces the phone's GPU chip to take over, making the scrolling lag disappear instantly.

### Best Practice
Use GPU acceleration carefully. Each composited layer consumes V8 graphic memory. Too many layers will exhaust mobile memory, causing browser tabs to reload or crash.

### Common Mistakes
Forcing GPU layers globally on all elements using \`*\` selector, which consumes excessive RAM and crashes mobile browser performance.

### Code Example
\`\`\`css
.smooth-animated-panel {
  /* Forces browser to create a GPU layer for this card */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0); /* Legacy browser fallback to force GPU acceleration */
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে ব্রাউজার পেজের লেআউট রেন্ডার করার জন্য সেন্ট্রাল প্রসেসিং ইউনিট (CPU) ব্যবহার করে। কিন্তু অ্যানিমেশন ও মোশনের সময় সিপিইউর ওপর অতিরিক্ত চাপ পড়ে পারফরম্যান্স ধীর হয়ে যায়।
**জিপিইউ এক্সিলারেশন (GPU Acceleration)** এই ভারী কাজগুলো প্রসেসর থেকে গ্রাফিক্স প্রসেসিং ইউনিটে (Graphics Card) পাঠিয়ে সমাধান করে:
- ব্রাউজার যখন কোনো এলিমেন্টকে জিপিইউ লেয়ারে প্রমোট করে, তখন সেটির একটি টেক্সচার ইমেজ জিপিইউ মেমোরিতে সেভ করে রাখে।
- জিপিইউ অত্যন্ত দ্রুত এই টেক্সচারকে স্লাইড, স্কেল বা রোটেট করতে পারে, যার জন্য সিপিইউর সাহায্য নিয়ে রিফ্লো বা রি-পেইন্ট করতে হয় না।
- **জিপিইউ সক্রিয় করার ট্রিগার**:
  - \`transform: translate3d(0, 0, 0)\` বা \`translateZ(0)\` (পুরোনো হ্যাক)।
  - আধুনিক অপশন: \`will-change: transform, opacity;\`।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইলে স্ক্রল করার সময় যদি প্যারালাক্স অ্যানিমেশন প্যানেলটি ল্যাগ করে, তবে সিএসএসে \`transform: translateZ(0)\` বা \`will-change: transform\` যোগ করলে মোবাইলের গ্রাফিক্স চিপ নিজে থেকে কাজটির দায়িত্ব নিয়ে স্ক্রলিং মসৃণ করে দেবে।

### উত্তম অনুশীলন
জিপিইউ লেয়ার ব্যবহারে সতর্ক থাকুন। অতিরিক্ত লেয়ার তৈরি করলে গ্রাফিক্স মেমোরি শেষ হয়ে মোবাইল ব্রাউজার পেজটি হঠাৎ রিলোড নিতে পারে বা ক্র্যাশ করতে পারে।

### সাধারণ ভুলসমূহ
\`*\` সিলেক্টর ব্যবহার করে সব এলিমেন্টে গ্লোবালি জিপিইউ লেয়ার ফোর্স করা, যা প্রচুর র‍্যাম ব্যবহার করে এবং মোবাইল ব্রাউজার পারফরম্যান্স ক্র্যাশ করতে পারে।

### কোড উদাহরণ
\`\`\`css
.smooth-animated-panel {
  /* এই কার্ডটির জন্য জিপিইউ লেয়ার তৈরি করতে ব্রাউজারকে সংকেত দেবে */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0); /* ওল্ড ব্রাউজারে জিপিইউ ফোর্স করার উপায় */
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\``
  },
  {
    id: 'css-85',
    title: 'Explain the CSS contain property and its performance benefits.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Performance', 'Rendering', 'DOM'],
    enAnswer: 'The contain property isolates an element\'s subtree from the rest of the document. This tells the browser that changes inside this subtree do not affect the layout or paint states of the outer page, reducing render recalculation areas.',
    bnAnswer: 'contain প্রোপার্টি ডকুমেন্টের অন্যান্য অংশের সাথে কোনো এলিমেন্টের চাইল্ড সাবট্রির সম্পর্ক বিচ্ছিন্ন বা আইসোলেট করে। এটি ব্রাউজারকে জানায় ভেতরের পরিবর্তনগুলোর কারণে বাইরের কোনো লেআউট বা পেইন্ট ক্যালকুলেশন পুনর্গণনার প্রয়োজন নেই।',
    enExplanation: `### Explanation
In large complex web applications, modifying a single element can cause the browser to trigger a full page layout reflow.
The \`contain\` property allows developers to flag specific containers as completely self-contained, isolating their contents:
- **\`contain: layout\`**: Informs the browser that children do not affect the positioning or layout of elements outside the container.
- **\`contain: paint\`**: Informs the browser that children are clipped within the container's bounds and do not bleed outside. If the container is scrolled off-screen, the browser skips painting the entire child tree, saving CPU paint cycles.
- **\`contain: size\`**: Informs the browser that the container's size is independent of its children's dimensions.
- **\`contain: content\`**: Combines \`layout\` and \`paint\`.
- **\`contain: strict\`**: Combines \`layout\`, \`paint\`, and \`size\`.

### Real-World Example
In a real-time chat application with a long vertical sidebar of active user lists, changing status icons (online/offline) triggers DOM updates. Wrapping the list container with \`contain: content\` ensures status changes do not cause reflows across the main message window.

### Best Practice
Use \`contain: paint\` or \`contain: content\` on off-screen widgets, menus, and heavy list blocks. This prevents V8 paint engine bottlenecks and enhances rendering performance.

### Common Mistakes
Applying \`contain: size\` without declaring explicit width and height on the container, which collapses the element height to \`0px\` because the browser stops measuring its children sizes.

### Code Example
\`\`\`css
.isolated-widget {
  /* Isolates layout and paint recalculation scope */
  contain: content;
  width: 300px;
  overflow: hidden;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জটিল ওয়েব অ্যাপে কোনো একটি ছোট ডিভের কন্টেন্ট আপডেট হলে ব্রাউজার ডিফল্ট অ্যাকশন হিসেবে পুরো ওয়েব পেজের রিফ্লো বা রি-ক্যালকুলেশন শুরু করতে পারে।
\`contain\` প্রোপার্টি ব্যবহারের মাধ্যমে এলিমেন্টটির নোড সাবট্রি আইসোলেট করে পারফরম্যান্স অপ্টিমাইজ করা যায়:
- **\`contain: layout\`**: ব্রাউজারকে নির্দেশ দেয় যে ভেতরের চাইল্ডগুলো কন্টেইনারের বাইরের কোনো পজিশনে প্রভাব ফেলবে না।
- **\`contain: paint\`**: ব্রাউজারকে জানায় চাইল্ডগুলোর ডিজাইন কন্টেইনার বাউন্ডারির বাইরে বের হবে না। কন্টেইনারটি স্ক্রিনের বাইরে চলে গেলে ব্রাউজার এর ভেতরের চাইল্ডগুলোকে আঁকা বা পেইন্ট করা বন্ধ করে দেয়, যা প্রচুর মেমোরি বাঁচায়।
- **\`contain: size\`**: কন্টেইনারের সাইজ চাইল্ডের সাইজের ওপর নির্ভর করবে না।
- **\`contain: content\`**: এটি \`layout\` এবং \`paint\` এর কম্বিনেশন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইভ চ্যাট সাইটের বাম পাশের ইউজার লিস্টের অনলাইন/অফলাইন স্ট্যাটাস আইকন সেকেন্ডে কয়েকবার আপডেট হচ্ছে। এই লিস্ট কন্টেইনারে \`contain: content\` দিয়ে রাখলে ভেতরের ঘন ঘন আপডেট পেজের মূল মেসেজ উইন্ডোর ওপর কোনো রিফ্লো চাপ তৈরি করবে না।

### উত্তম অনুশীলন
স্ক্রিনের বাইরে থাকা ড্রয়ার মেনু, উইজেট বা বড় তালিকার ডিভে \`contain: paint\` ব্যবহার করুন, যা স্ক্রিনের বাইরের অংশে পেইন্টিং প্রসেস বন্ধ করে সিপিইউ ব্যান্ডউইডথ সাশ্রয় করবে।

### সাধারণ ভুলসমূহ
ফিক্সড উইডথ ও হাইট ডিক্লেয়ার না করেই \`contain: size\` দিয়ে দেওয়া। এর ফলে কন্টেইনারটি তার ভেতরের চাইল্ডদের মাপ নেওয়া বন্ধ করে দেওয়ায় এলিমেন্টের উচ্চতা ০ পিক্সেল হয়ে কন্টেন্ট উধাও হয়ে যেতে পারে।

### কোড উদাহরণ
\`\`\`css
.isolated-widget {
  /* লেআউট এবং পেইন্ট পুনর্গণনার সীমানা এখানেই লক করবে */
  contain: content;
  width: 300px;
  overflow: hidden;
}
\`\`\``
  },
  {
    id: 'css-86',
    title: 'Explain the CSS paint-order property and its SVG use cases.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'SVG', 'Typography', 'Visuals'],
    enAnswer: 'The paint-order property controls the rendering order of fill, stroke, and markers on SVG shapes and text. By rendering the stroke underneath the fill, it prevents thick borders from shrinking or clipping text characters.',
    bnAnswer: 'paint-order প্রোপার্টি SVG শেপ ও টেক্সটের ক্ষেত্রে fill (ভেতরের রঙ), stroke (সীমানা রেখা) এবং marker রেন্ডার হওয়ার ক্রম নিয়ন্ত্রণ করে। ফিল-এর নিচে স্ট্রোক রেন্ডার করে এটি অক্ষরের বর্ডার মোটা করলেও মূল লেখাকে সংকুচিত হতে দেয় না।',
    enExplanation: `### Explanation
By default, browsers render SVG elements and CSS text decoration strokes using the following stack order:
1. **\`fill\`** is rendered first.
2. **\`stroke\`** is drawn on top of the fill.
3. **\`markers\`** are drawn last.

When you add a thick border stroke to text characters (using \`-webkit-text-stroke\` or SVG text), the stroke expands inward and outward. Because the stroke is drawn *on top* of the fill, it eats away at the interior color fill, making text characters look thin, squished, and unreadable.
Setting \`paint-order: stroke fill;\` changes the render stack: the stroke is drawn *underneath* the fill, keeping the text characters sharp and fully readable regardless of stroke width.

### Real-World Example
If you are designing retro pop posters or massive banner titles with white text inside a thick 8px black stroke border outline, setting \`paint-order: stroke fill;\` keeps the letters legible instead of choking the font curves.

### Best Practice
Use \`paint-order\` whenever you style text with thick strokes. Ensure you supply browser vendor prefix fallbacks for older engines.

### Common Mistakes
Using text stroke borders on small font sizes. This creates a cluttered look even with correct paint order settings.

### Code Example
\`\`\`css
.bold-stroked-title {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  -webkit-text-stroke: 8px black; /* Thick outline stroke */
  
  /* Renders the outline border underneath the white text fill */
  paint-order: stroke fill;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্ট আচরণ অনুযায়ী ব্রাউজার SVG এবং টেক্সটের বর্ডার ও ফিল কালার নিচের ক্রমানুসারে রেন্ডার করে:
১. প্রথমে **\`fill\`** বা ভেতরের মূল রঙ আঁকা হয়।
২. ফিলের ওপরে **\`stroke\`** বা সীমানা রেখা আঁকা হয়।

যখন ফন্টের ওপরে কাস্টম বর্ডার বা টেক্সট স্ট্রোক দেওয়া হয়, তখন স্ট্রোকের রেখাটি বাইরের পাশাপাশি ভেতরের দিকেও চওড়া হয়। যেহেতু এটি ফিলের ওপর আঁকা হয়, মোটা বর্ডার দেওয়ার ফলে ভেতরের মূল টেক্সট কালারটি চিকন হয়ে ঢেকে যায় এবং লেখা অস্পষ্ট হয়ে পড়ে।
\`paint-order: stroke fill;\` সেট করলে ক্রমটি উল্টে যায়: বর্ডার স্ট্রোকটি টেক্সটের পেছনে আঁকা হবে এবং মূল ফিল কালারটি বর্ডারের ওপরে বসে ফন্টকে একদম স্পষ্ট রাখবে।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে রেট্রো টাইটেল ব্যানার বা গেমের ইন্টারফেসে মোটা কালো বর্ডারের ভেতর সাদা বড় টেক্সট দেখানোর সময় এই প্রোপার্টি ব্যবহারে টেক্সটের আকৃতি অক্ষুণ্ন থাকে।

### উত্তম অনুশীলন
মোটা স্ট্রোকযুক্ত টেক্সট ডিজাইনে পেইন্ট অর্ডার রুল ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ছোট ফন্ট সাইজে বর্ডার স্ট্রোক ব্যবহার করা, যা পেইন্ট অর্ডার ঠিক করার পরেও লেখা পড়তে অসুবিধা তৈরি করে।

### কোড উদাহরণ
\`\`\`css
.bold-stroked-title {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  -webkit-text-stroke: 8px black; /* মোটা বর্ডার স্ট্রোক */
  
  /* বর্ডারটিকে লেখার মূল ফিল কালারের নিচে পেইন্ট করতে বাধ্য করবে */
  paint-order: stroke fill;
}
\`\`\``
  },
  {
    id: 'css-87',
    title: 'Compare the rendering performance of transform-based animations vs layout-based animations.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Performance', 'Animations', 'Rendering'],
    enAnswer: 'Transform-based animations (translate, scale, rotate) bypass the browser Layout and Paint stages, operating entirely on the GPU composite layer for 60/120fps smooth motion. Layout-based animations (top, left, margin, height) trigger continuous reflow calculations on the CPU, causing lag.',
    bnAnswer: 'Transform-ভিত্তিক অ্যানিমেশন (translate, scale) ব্রাউজারের Layout ও Paint ধাপ এড়িয়ে সরাসরি জিপিইউ কম্পোজিট লেয়ারে চলে, যা ১২০ এফপিএস মোশন দেয়। Layout-ভিত্তিক অ্যানিমেশন (top, left, margin) প্রসেসরে প্রতিনিয়ত রিফ্লো ক্যালকুলেট করায় ল্যাগ তৈরি করে।',
    enExplanation: `### Explanation
Layout changes require recalculating element sizes and coordinates down the DOM tree. If an animation changes \`top: 0px\` to \`top: 100px\`:
1. The CPU recalculates the layout space of the target element.
2. It shifts surrounding elements (triggering cascading reflows).
3. The CPU re-paints affected sections.
4. The GPU renders the final frames.
This takes several milliseconds per frame, resulting in dropped frames (stuttering).

If an animation uses \`transform: translateY(100px)\`:
1. The browser passes the element to its own graphics layer on the GPU.
2. The GPU shifts the texture directly.
3. No layout is calculated, and no paint is triggered.
This takes less than 1ms, guaranteeing a constant 60fps or 120fps.

### Real-World Example
In accordion panels, animating \`max-height\` from \`0\` to \`500px\` triggers heavy layout reflows, causing stuttering on mobile viewports. Offloading slide animations to transforms keeps transitions smooth.

### Best Practice
Only animate properties that do not affect page geometry. Restrict all layout transitions strictly to: \`transform\` (translating, scaling, rotating) and \`opacity\`.

### Common Mistakes
Using \`margin-left\` or \`left\` inside hover transition rules to move buttons or icons, causing page layout recalculations on every hover trigger.

### Code Example
\`\`\`css
/* BAD: CPU layout reflow trigger */
.animated-box-bad {
  position: relative;
  left: 0;
  transition: left 0.3s ease;
}
.animated-box-bad:hover {
  left: 50px;
}

/* GOOD: GPU composite layer trigger */
.animated-box-good {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.animated-box-good:hover {
  transform: translateX(50px);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লেআউটের পরিবর্তন ঘটলে ব্রাউজারকে ডম ট্রিতে নতুন স্থানাঙ্ক হিসাব করতে হয়। অ্যানিমেশনে যদি \`top: 0px\` থেকে \`top: 100px\` তে চেঞ্জ করা হয়:
১. প্রসেসর এলিমেন্টটির নতুন পজিশন ক্যালকুলেট করে।
২. চারপাশের অন্য এলিমেন্টগুলোকে সরিয়ে দেয় (রিফ্লো)।
৩. প্রসেসর পেজের এই অংশটুকু আবার নতুন করে আঁকে (পেইন্ট)।
৪. জিপিইউ স্ক্রিনে ফাইনাল আউটপুট পাঠায়।
এই পুরো সাইকেলটি সম্পন্ন করতে প্রতি ফ্রেমে কয়েক মিলি-সেকেন্ড সময় নষ্ট হয়, ফলে অ্যানিমেশন স্টাটার বা ল্যাগ করে।

কিন্তু যদি অ্যানিমেশনে \`transform: translateY(100px)\` ব্যবহার করা হয়:
১. ব্রাউজার সরাসরি জিপিইউ মেমোরিতে ছবি বা টেক্সচারটি শিফট করায়।
২. কোনো ধরনের লেআউট বা পেইন্টিং পুনরায় হিসেব করতে হয় না।
এটি এক মিলি-সেকেন্ডেরও কম সময়ে সম্পন্ন হয়, ফলে ফ্রেম ড্রপ হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাকোর্ডিয়ান প্যানেল খোলার সময় \`max-height\` অ্যানিমেট করলে মোবাইলে কিছুটা ল্যাগ ফিল হতে পারে কারণ সেখানে প্রতিনিয়ত রিফ্লো ক্যালকুলেশন চলে। কিন্তু সাইড স্লাইডারে transform ব্যবহার করলে তা সবসময় ৬০ বা ১২০ এফপিএস-এ স্মুথ থাকে।

### উত্তম অনুশীলন
ডিজাইন অ্যানিমেশনের জন্য কেবল \`transform\` এবং \`opacity\` ব্যবহার করার মানসিকতা গড়ে তুলুন। \`left\`, \`top\`, \`margin\` ইত্যাদির অ্যানিমেশন বর্জন করুন।

### সাধারণ ভুলসমূহ
হোভার ইফেক্টে বাটন বা আইকন নাড়াতে \`margin-left\` অ্যানিমেট করা, যার কারণে মাউস রাখার সাথে সাথে পুরো পেজের টেক্সট রি-লেআউটের খপ্পরে পড়ে।

### কোড উদাহরণ
\`\`\`css
/* ক্ষতিকর: প্রতি ফ্রেমে প্রসেসরের ওপরে রিফ্লো লোড দেবে */
.animated-box-bad {
  position: relative;
  left: 0;
  transition: left 0.3s ease;
}
.animated-box-bad:hover {
  left: 50px;
}

/* সেরা অনুশীলন: জিপিইউ প্রসেসিংয়ের মাধ্যমে মাখনের মতো মসৃণ মোশন দেবে */
.animated-box-good {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.animated-box-good:hover {
  transform: translateX(50px);
}
\`\`\``
  },
  {
    id: 'css-88',
    title: 'Explain CSS scroll-driven animations (scroll-timeline, view-timeline).',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Animations', 'Scroll-driven', 'Advanced'],
    enAnswer: 'Scroll-driven animations link the progress of a CSS keyframe animation directly to a scroll container\'s scroll offset (scroll-timeline) or an element\'s visibility in the viewport (view-timeline) instead of time.',
    bnAnswer: 'স্ক্রল-চালিত অ্যানিমেশন (Scroll-driven animations) কোনো সিএসএস কী-ফ্রেম অ্যানিমেশনের প্রগতিকে সময়ের (seconds) পরিবর্তে স্ক্রল কন্টেইনারের স্ক্রলিং দূরত্বের (scroll-timeline) বা ভিউপোর্টে এলিমেন্টের দৃশ্যমানতার (view-timeline) সাথে সংযুক্ত করে।',
    enExplanation: `### Explanation
Traditionally, scroll-driven animations (like parallax effects or scroll progress indicators) required writing JavaScript scroll event listeners that monitored pixel offsets and mutated element styles. This caused performance issues because the main thread had to calculate changes on every pixel scroll.
**CSS Scroll-driven animations** run natively inside the compositor thread:
1. **\`scroll-timeline\`**: Binds animation progress to the scroll position of a scroll container.
   - Syntax: \`scroll-timeline-name: --my-timeline; scroll-timeline-axis: y;\`.
2. **\`view-timeline\`**: Binds animation progress to the relative visibility of a specific element inside the viewport as it enters and exits (useful for fade-in scroll reveals).
   - Syntax: \`view-timeline-name: --reveal-timeline; view-timeline-axis: block;\`.

You link these to keyframes using \`animation-timeline: --my-timeline;\`.

### Real-World Example
To create a reading progress indicator line at the top of a blog page that fills from 0% width to 100% width as you scroll, you can bind the keyframe animation to \`animation-timeline: scroll(nearest)\`.

### Best Practice
Use native CSS scroll-driven animations instead of heavy JS scroll listeners. This offloads calculations from the main thread, maintaining smooth scrolling.

### Common Mistakes
Forgetting that scroll-driven animations are relatively new. Always provide a CSS fallback where the element is fully visible if the browser does not support \`animation-timeline\`.

### Code Example
\`\`\`css
/* 1. Define animation keys */
@keyframes growProgress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* 2. Style progress bar */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #4f46e5;
  transform-origin: 0 50%;
  
  /* Link keyframe animation progress to page scrolling */
  animation: growProgress auto linear;
  animation-timeline: scroll(root);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে স্ক্রলের ওপর ভিত্তি করে কোনো অ্যানিমেশন (যেমন স্ক্রল প্রোগ্রেস বার বা এন্ট্রান্স অ্যানিমেশন) চালাতে জাভাস্ক্রিপ্ট স্ক্রল লিসেনার ব্যবহার করতে হতো, যা স্ক্রলিংয়ের গতি কমিয়ে দিত।
**CSS Scroll-driven animations** ব্রাউজারের নেটিভ কম্পোজিটর থ্রেডে চলে:
১. **\`scroll-timeline\`**: কোনো স্ক্রল কন্টেইনারের স্ক্রলিং দূরত্বের সাথে অ্যানিমেশনকে বেঁধে দেয়।
   - সিনট্যাক্স: \`scroll-timeline-name: --my-timeline;\`।
২. **\`view-timeline\`**: কোনো নির্দিষ্ট এলিমেন্ট স্ক্রিনে ঢোকার পর থেকে বের হওয়া পর্যন্ত যে দূরত্ব অতিক্রম করে, তার সাথে অ্যানিমেশনের প্রগতি যুক্ত করে।

কী-ফ্রেম কল করার সময় \`animation-timeline: --my-timeline;\` ব্যবহার করে এটি যুক্ত করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের ওপরে রিডিং প্রোগ্রেস বার থাকে যা স্ক্রল করে নিচে নামার সাথে সাথে উইডথ ০% থেকে ১০০% হতে থাকে। এটি কেবল সিএসএস দিয়েই \`animation-timeline: scroll(root)\` এর সাহায্যে চমৎকারভাবে তৈরি করা যায়।

### উত্তম অনুশীলন
জাভাস্ক্রিপ্টের স্ক্রল ইভেন্ট এড়াতে নেটিভ সিএসএস স্ক্রল-ড্রাইভেন স্লাইডার ব্যবহার করুন। এটি পেজ লোডের গতি বহুগুণ বাড়ায়।

### সাধারণ ভুলসমূহ
এটি তুলনামূলক নতুন হওয়ায় সব পুরোনো ব্রাউজারে রেন্ডার নাও হতে পারে। তাই ফালব্যাক হিসেবে এলিমেন্টটি স্বাভাবিকভাবে পেজে ভিজিবল রাখার সিএসএস রুল বজায় রাখুন।

### কোড উদাহরণ
\`\`\`css
/* ১. অ্যানিমেশন কী-ফ্রেম তৈরি */
@keyframes growProgress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* ২. প্রোগ্রেস বার স্টাইল */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #4f46e5;
  transform-origin: 0 50%;
  
  /* পেজ স্ক্রলিংয়ের সাথে অ্যানিমেশনের টাইমলাইন লিংক করা হলো */
  animation: growProgress auto linear;
  animation-timeline: scroll(root);
}
\`\`\``
  },
  {
    id: 'css-89',
    title: 'Explain CSS Anchor Positioning and its use cases.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Anchor Positioning', 'Positioning', 'Advanced'],
    enAnswer: 'CSS Anchor Positioning allows positioning an absolute element (like a popover, tooltip, or dropdown) relative to a specific target "anchor" element on the page, without requiring parent container nesting or JavaScript coordinate calculations.',
    bnAnswer: 'CSS Anchor Positioning একটি অ্যাবসলিউট এলিমেন্টকে (যেমন পপওভার, টুলটিপ বা ড্রপডাউন) স্ক্রিনের যেকোনো নির্দিষ্ট "অ্যাঙ্কর" বা নোঙ্গর এলিমেন্টের সাপেক্ষে প্লেস করার সুবিধা দেয়, কোনো প্যারেন্ট নেস্টিং বা জাভাস্ক্রিপ্ট কোঅর্ডিনেট ক্যালকুলেশন ছাড়াই।',
    enExplanation: `### Explanation
Historically, to place a tooltip bubble exactly above a button, you had to:
- Place the tooltip inside the button container (which creates overflow clipping bugs).
- Or write JavaScript \`getBoundingClientRect()\` listeners to track the button coordinates and position the tooltip absolutely relative to the page body.

**CSS Anchor Positioning** solves this natively:
1. Define the anchor element using \`anchor-name: --my-anchor;\`.
2. Set the popover element to \`position: absolute\` (or \`fixed\`) and link it using \`position-anchor: --my-anchor;\`.
3. Position the popover relative to the anchor using the \`anchor()\` function (e.g. \`top: anchor(--my-anchor bottom);\`).

### Real-World Example
If you are designing a user profile card and want a "Status Badge" popup to hover exactly on top of the avatar circular image, you can declare the avatar as the anchor, and position the badge absolutely relative to its top-right edge.

### Best Practice
Use the anchor positioning specification for menus, popovers, and tooltips. Combine this with fallback positioning configurations (like \`position-try-options\`) so the tooltip automatically moves below the anchor if there is no screen space above it.

### Common Mistakes
Forgetting that the anchored element must be absolutely or fixed positioned, otherwise \`anchor()\` coordinate parameters will be ignored by the browser parser.

### Code Example
\`\`\`css
/* Define Anchor */
.anchor-button {
  anchor-name: --button-anchor;
}

/* Position Tooltip relative to Anchor */
.tooltip-popover {
  position: absolute;
  position-anchor: --button-anchor;
  
  /* Place top of tooltip exactly at the bottom edge of the anchor button */
  top: anchor(bottom);
  left: anchor(center);
  transform: translateX(-50%); /* Centered horizontally */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে একটি বাটনের ওপরে নিখুঁতভাবে একটি টুলটিপ বসাতে হলে হয় বাটন কন্টেইনারের ভেতর টুলটিপটি রাখতে হতো (যা overflow: hidden থাকলে কেটে যেত), নয়তো জাভাস্ক্রিপ্টের \`getBoundingClientRect()\` ব্যবহার করে কোঅর্ডিনেট মাপতে হতো।
**CSS Anchor Positioning** এটি সরাসরি সমাধান করে:
১. নোঙ্গর বা টার্গেট এলিমেন্টে \`anchor-name: --my-anchor;\` দিয়ে একটি নাম দিন।
২. পপ-আপ বা টুলটিপ এলিমেন্টকে \`position: absolute\` করে \`position-anchor: --my-anchor;\` দিয়ে লিংক করুন।
৩. টুলটিপটিকে পজিশন করতে \`anchor()\` ফাংশন ব্যবহার করুন (যেমন: \`top: anchor(bottom)\` অর্থাৎ বাটনের নিচের বর্ডার ঘেঁষে বসবে)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বৃত্তাকার প্রফাইল ছবির ওপরে একটি সবুজ অনলাইন স্ট্যাটাস ডট বসাবেন। ছবিটিকে অ্যাঙ্কর নাম দিয়ে ডটটিকে ছবির টপ-রাইট বর্ডারের সাথে নোঙ্গর করে দিলে স্ক্রিন বা লেআউট পরিবর্তন হলেও ডটটি সবসময় ছবির ওপরেই থাকবে।

### উত্তম অনুশীলন
ড্রপডাউন মেনু ও টুলটিপের জন্য অ্যাঙ্কর পজিশন ব্যবহার করুন। স্ক্রিনে পর্যাপ্ত জায়গা না থাকলে টুলটিপ যেন নিচে নেমে যায় সে জন্য \`position-try-options\` ডিক্লেয়ার করে রাখা ভালো।

### সাধারণ ভুলসমূহ
অ্যাঙ্কর করা টুলটিপটিকে \`position: absolute\` বা \`fixed\` করতে ভুলে যাওয়া। পজিশনিং না দিলে \`anchor()\` ক্যালকুলেশন রিড হবে না।

### কোড উদাহরণ
\`\`\`css
/* নোঙ্গর বা বাটন সিলেক্ট */
.anchor-button {
  anchor-name: --button-anchor;
}

/* বাটনের সাপেক্ষে টুলটিপ সাজানোর নিয়ম */
.tooltip-popover {
  position: absolute;
  position-anchor: --button-anchor;
  
  /* টুলটিপের শীর্ষ বাটনের নিচের বর্ডার ঘেঁষে বসবে */
  top: anchor(bottom);
  left: anchor(center);
  transform: translateX(-50%); /* অনুভূমিকভাবে মাঝে থাকবে */
}
\`\`\``
  },
  {
    id: 'css-90',
    title: 'Explain the View Transitions API in CSS and its benefits.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'View Transitions', 'Animations', 'UX'],
    enAnswer: 'The View Transitions API allows creating animated transitions between different DOM states or pages. It captures snapshots of the active and new page states and animates them smoothly in the GPU thread without requiring complex transition layouts.',
    bnAnswer: 'View Transitions API পেজের বিভিন্ন ডম (DOM) অবস্থা বা ভিন্ন ভিন্ন পেজ পরিবর্তনের মধ্যে মসৃণ অ্যানিমেটেড ট্রানজিশন তৈরির সুযোগ দেয়। এটি পেজের আগের ও পরের অবয়বের স্ক্রিনশট নিয়ে জিপিইউর সাহায্যে অ্যানিমেশন তৈরি করে।',
    enExplanation: `### Explanation
Historically, animating page transitions (like a list item expanding into a full article view) required heavy SPA frameworks (like Framer Motion in React) that monitored layouts and animated positions dynamically.
The **View Transitions API** simplifies this by exposing browser-level snapshots:
1. When a state change occurs, JavaScript executes \`document.startViewTransition(callback)\`.
2. The browser captures a raster screenshot of the old DOM state.
3. The callback updates the DOM.
4. The browser captures the new DOM state.
5. The browser automatically cross-fades and morphs matching elements using CSS pseudo-elements (like \`::view-transition-group(name)\`) on the GPU compositor thread.

### Real-World Example
In a photo gallery, clicking a small thumbnail image animates it expanding into the full screen hero banner. By tagging both elements with \`view-transition-name: gallery-hero;\`, the browser interpolates the expansion morph natively.

### Best Practice
Use the View Transitions API for modern single-page apps to avoid heavy layout animation libraries. Always set unique \`view-transition-name\` values on matching components to tell the browser which elements should morph together.

### Common Mistakes
Forgetting that view transitions require browser compatibility. Ensure you feature-detect the API in JavaScript before executing \`startViewTransition\` to avoid JS crashes.

### Code Example
\`\`\`css
/* Tag the visual element with a transition name */
.product-card-image {
  view-transition-name: product-hero-image;
}

/* Customizing the native morph duration in CSS */
::view-transition-old(product-hero-image),
::view-transition-new(product-hero-image) {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে এক পেজ থেকে অন্য পেজে যাওয়ার ট্রানজিশন (যেমন প্রোডাক্ট ছবিতে ক্লিক করলে তা বড় হয়ে হিরো ব্যানারে রূপ নেওয়া) তৈরি করতে অনেক জাভাস্ক্রিপ্ট কোড ও ভারী ফ্রেমওয়ার্ক লাগত।
**View Transitions API** এটিকে ব্রাউজার লেভেলে নিয়ে এসেছে:
১. জাভাস্ক্রিপ্টে পেজ বা স্টেজ পরিবর্তনের সময় কোডটিকে \`document.startViewTransition(callback)\` এর ভেতর রান করাতে হয়।
২. ব্রাউজার আগের ডম (DOM) স্টেটের একটি স্ক্রিনশট নেয়।
৩. কলব্যাক ডম আপডেট করে নতুন স্টেট রান করে।
৪. ব্রাউজার নতুন স্টেটের স্ক্রিনশট নেয়।
৫. ব্রাউজার তার সিউডো-এলিমেন্ট (\`::view-transition-group\`) ব্যবহার করে জিপিইউ থ্রেডে ছবি দুটির ট্রানজিশন স্বয়ংক্রিয়ভাবে তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফটো গ্যালারির ছোট থাম্বনেইলে ক্লিক করার পর সেটি বড় হয়ে হিরো ইমেজ হওয়ার সময় লাফ না দিয়ে চমৎকারভাবে বড় হবে। উভয় ফাইলে ইমেজ ট্যাগে \`view-transition-name: photo-main\` ক্লাস ব্যবহার করলেই ব্রাউজার রূপান্তরটি সম্পন্ন করবে।

### উত্তম অনুশীলন
ভারী অ্যানিমেশন লাইব্রেরি পরিহার করে ভিউ ট্রানজিশন এপিআই ব্যবহার করুন। যে দুটি ভিন্ন এলিমেন্টকে আপনি পরস্পরের সাথে ইন্টারপোলেট বা মেলাতে চান, সেগুলোতে একই ইউনিক \`view-transition-name\` সেট করুন।

### সাধারণ ভুলসমূহ
সব ব্রাউজার এখনও এটি পুরোপুরি সমর্থন করে না। তাই জাভাস্ক্রিপ্টে ফিচার ডিটেকশন (feature detection) চেক না করে সরাসরি কোড রান করালে কোড ক্র্যাশ করতে পারে।

### কোড উদাহরণ
\`\`\`css
/* ভিউ ট্রানজিশন নাম সেট করা হলো */
.product-card-image {
  view-transition-name: product-hero-image;
}

/* সিএসএসে নেটিভ ট্রানজিশনের সময়সীমা ও টাইমিং কাস্টমাইজেশন */
::view-transition-old(product-hero-image),
::view-transition-new(product-hero-image) {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\``
  },
  {
    id: 'css-91',
    title: 'Explain the CSS element() function specification.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Visuals', 'Graphics', 'Advanced'],
    enAnswer: 'The element() function renders a live, dynamic screenshot of any HTML element as a CSS background-image. Changes inside the source element are updated in the background image in real-time.',
    bnAnswer: 'element() ফাংশন ওয়েব পেজের যেকোনো সক্রিয় HTML এলিমেন্টের রিয়েল-টাইম লাইভ স্ক্রিনশটকে সিএসএস background-image হিসেবে রেন্ডার করে। সোর্স এলিমেন্টে যেকোনো পরিবর্তন ব্যাকগ্রাউন্ড ইমেজে তাৎক্ষণিকভাবে প্রতিফলিত হয়।',
    enExplanation: `### Explanation
The \`element()\` function is an experimental CSS Image values specification:
- Syntax: \`background-image: -moz-element(#target-id);\` (historically supported primarily in Firefox).
- **How it works**: You pass an ID selector of a source element. The browser renders a live copy of that element as a background graphic elsewhere.
- Any inputs typed by the user, CSS animations, or video frames executing inside the source element are projected onto the background in real-time.

### Real-World Example
To create a live minimap overview of a long document column in a sidebar, or render a live mirror reflections of a character sprite canvas inside a game page.

### Best Practice
Since this specification has limited browser adoption, restrict usage strictly as an enhancement feature, or provide robust static image fallbacks for Chrome and Safari.

### Common Mistakes
Forgetting that if the source element has \`display: none\`, it collapses the layout geometry, resulting in the \`element()\` function rendering a completely blank background.

### Code Example
\`\`\`css
/* Source element */
#source-canvas {
  width: 200px;
  height: 200px;
  background-color: indigo;
}

/* Mirror element rendering the live source canvas as its background */
.mirror-box {
  width: 200px;
  height: 200px;
  /* Renders the live image projection of #source-canvas */
  background-image: -moz-element(#source-canvas);
  background-image: element(#source-canvas);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`element()\` ফাংশনটি সিএসএসের একটি পরীক্ষামূলক ইমেজ স্পেসিফিকেশন:
- সিনট্যাক্স: \`background-image: element(#target-id);\` (এটি প্রধানত মজিলা ফায়ারফক্সে বেশি সক্রিয়)।
- **কাজ করার প্রক্রিয়া**: আপনি সোর্স এলিমেন্টের আইডি পাস করবেন। ব্রাউজার ওই সোর্স এলিমেন্টের একটি লাইভ অ্যাক্টিভ সংস্করণ ব্যাকগ্রাউন্ড ইমেজ হিসেবে অন্য জায়গায় রেন্ডার করবে।
- সোর্সের ভেতর কোনো ব্যবহারকারী টাইপ করলে বা কোনো ভিডিও চললে তা রিয়েল-টাইমে ব্যাকগ্রাউন্ড ইমেজেও রিফ্লেক্ট বা প্রদর্শিত হতে থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি দীর্ঘ ডকুমেন্টের সাইডবারে লাইভ মিনিম্যাপ (minimap) তৈরি করা, অথবা কোনো ওয়েব গেমের ক্যারেক্টারের লাইভ রিফ্লেকশন মিরর বা দর্পণ তৈরি করতে এটি ব্যবহৃত হয়।

### উত্তম অনুশীলন
সব ব্রাউজারে এটি কাজ না করায় ফালব্যাক বা স্ট্যাটিক ইমেজ ব্যাকগ্রাউন্ড দিয়ে রাখুন, যাতে ক্রোম বা সাফারিতে ডিজাইন ভেঙে না যায়।

### সাধারণ ভুলসমূহ
সোর্স এলিমেন্টে \`display: none\` ব্যবহার করা। সোর্স এলিমেন্টটি পেজ লেআউট থেকে হারিয়ে গেলে \`element()\` ফাংশনটি সম্পূর্ণ ফাঁকা বা ব্ল্যাঙ্ক ব্যাকগ্রাউন্ড শো করবে।

### কোড উদাহরণ
\`\`\`css
/* সোর্স এলিমেন্ট */
#source-canvas {
  width: 200px;
  height: 200px;
  background-color: indigo;
}

/* এই বক্সে সোর্স ক্যানভাসের লাইভ ছবি ব্যাকগ্রাউন্ড হিসেবে ভেসে উঠবে */
.mirror-box {
  width: 200px;
  height: 200px;
  /* #source-canvas এর লাইভ প্রজেকশন রেন্ডার করবে */
  background-image: -moz-element(#source-canvas);
  background-image: element(#source-canvas);
}
\`\`\``
  },
  {
    id: 'css-92',
    title: 'Explain the CSS color-mix() function.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Colors', 'Visuals', 'Advanced'],
    enAnswer: 'The color-mix() function mixes two specified colors in a defined color space by percentages. It allows developers to create tints, shades, and opacity variations dynamically in CSS without Sass functions.',
    bnAnswer: 'color-mix() ফাংশন নির্দিষ্ট কালার স্পেসের অধীনে দুটি রঙকে শতকরা হার অনুযায়ী মিশ্রিত করে। এর ফলে Sass ব্যবহার ছাড়াই সরাসরি সিএসএস দিয়ে ডাইনামিক টিন্ট, শেড বা অপাসিটি তৈরি করা যায়।',
    enExplanation: `### Explanation
The \`color-mix(in color-space, color1 percentage, color2 percentage)\` function is a modern CSS standard:
- **Color Space**: You specify the interpolation model (e.g. \`in srgb\`, \`in lch\`, \`in oklab\`).
- **Mixing ratios**: You set the mix percentages. If percentages are omitted, they default to 50% each.

Commonly used to create hover states dynamically: \`color-mix(in srgb, var(--primary) 80%, black 20%)\` mixes 80% primary color with 20% black, creating a perfect dark shade.

### Real-World Example
If you are developing a white card and want a subtle border tinted with 10% of your brand theme color, instead of declaring a new hex code, you can use:
\`border: 1px solid color-mix(in srgb, var(--brand-color) 10%, transparent);\`.

### Best Practice
Use \`in oklab\` or \`in oklch\` color spaces for mixing, as they are perceptually uniform, preventing muddy gray tints that sometimes occur inside standard \`srgb\` mixing computations.

### Common Mistakes
Forgetting that the percentage sum must not exceed 100%. If they sum to less than 100%, the remaining percentage is filled with transparency.

### Code Example
\`\`\`css
:root {
  --brand-blue: #2563eb;
}

.btn-hover-darken {
  background-color: var(--brand-blue);
}

.btn-hover-darken:hover {
  /* Mixes 80% blue with 20% black dynamically */
  background-color: color-mix(in srgb, var(--brand-blue) 80%, black);
}

.tinted-alert {
  /* Mixes 15% brand blue with transparency to create a soft background tint */
  background-color: color-mix(in srgb, var(--brand-blue) 15%, transparent);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`color-mix(in color-space, color1 percentage, color2 percentage)\` সিএসএসের একটি আধুনিক স্ট্যান্ডার্ড ফাংশন:
- **কালার স্পেস**: রঙ মিশ্রণের গাণিতিক মডেল নির্ধারণ করে (যেমন: \`in srgb\`, \`in oklch\`)।
- **অনুপাত**: রঙের শতকরা হার ঠিক করে। হার উল্লেখ না করলে সমান ৫০% হারে মিক্স হয়।

বাটন হোভারের জন্য কাস্টম রঙের কোড মুখস্থ না লিখে ডাইনামিকালি ডার্ক শেড তৈরি করা যায়: \`color-mix(in srgb, var(--primary) 80%, black 20%)\` (৮০% প্রাইমারি ও ২০% কালো রঙের মিশ্রণ)।

### বাস্তব-ভিত্তিক উদাহরণ
ডিজাইন থিমে আপনার মূল রঙের ১০% ও স্বচ্ছতা (transparent) মিক্স করে হালকা প্যাস্টেল ব্যাকগ্রাউন্ডের অ্যালার্ট উইন্ডো তৈরি করার কাজে এটি ব্যাপকভাবে ব্যবহৃত হয়।

### উত্তম অনুশীলন
মিশ্রণের জন্য \`in oklch\` বা \`in oklab\` কালার স্পেস ব্যবহার করার চেষ্টা করুন। এগুলো মানুষের চোখের সংবেদনশীলতা অনুযায়ী কালার টিন্ট তৈরি করে, ফলে সাধারণ \`srgb\` মিক্সিংয়ের মতো নোংরা ধূসর কালার তৈরি হয় না।

### সাধারণ ভুলসমূহ
মিশ্রণের পারসেন্টেজের যোগফল ১০০% এর বেশি রাখা। যোগফল ১০০% এর কম হলে বাকি অংশটি নিজে থেকে স্বচ্ছ বা ট্রান্সপারেন্ট হয়ে যাবে।

### কোড উদাহরণ
\`\`\`css
:root {
  --brand-blue: #2563eb;
}

.btn-hover-darken {
  background-color: var(--brand-blue);
}

.btn-hover-darken:hover {
  /* ৮০% ব্লু এবং ২০% ব্ল্যাক মিক্স করবে */
  background-color: color-mix(in srgb, var(--brand-blue) 80%, black);
}

.tinted-alert {
  /* ১৫% ব্লু কালারের সাথে স্বচ্ছতা মিক্স করে হালকা ব্যাকগ্রাউন্ড তৈরি করবে */
  background-color: color-mix(in srgb, var(--brand-blue) 15%, transparent);
}
\`\`\``
  },
  {
    id: 'css-93',
    title: 'Explain advanced CSS color spaces: sRGB, Display-P3, Lab, LCH, and OKLCH.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Colors', 'Visuals', 'Advanced'],
    enAnswer: 'Modern CSS color spaces exceed standard sRGB limits: Display-P3 offers wide gamut vibrant colors. Lab and LCH are perceptually uniform models. OKLCH is a modern human-friendly model that models colors using Lightness, Chroma (vibrancy), and Hue, avoiding color shifting during brightness changes.',
    bnAnswer: 'আধুনিক CSS কালার স্পেসগুলো স্ট্যান্ডার্ড sRGB এর সীমাবদ্ধতা অতিক্রম করে: Display-P3 আরও প্রাণবন্ত ও উজ্জ্বল কালার গ্যামাট দেয়। Lab এবং LCH মানুষের চোখের অনুভূতি অনুযায়ী সাজানো মডেল। OKLCH হলো লাইটনেস, ক্রোমা (উজ্জ্বলতা) ও হিউ নিয়ে তৈরি আধুনিক হিউম্যান-ফ্রেন্ডলি মডেল।',
    enExplanation: `### Explanation
Historically, CSS was restricted to the **sRGB** color gamut (Hex, RGB, HSL). Modern screens (P3 gamuts on Apple Retina or OLED panels) can display 30% more colors, which sRGB cannot reach.
Modern CSS introduces wide-gamut color spaces:
1. **Display-P3**: Supports ultra-vibrant colors. \`color(display-p3 1 0 0)\` is a neon red that is physically impossible to render in standard hex \`#ff0000\` on a P3 monitor.
2. **Lab & LCH**: Perceptually uniform color spaces. In HSL, yellow and blue at 50% lightness feel completely different to the human eye. Lab/LCH uses math aligned with human vision parameters.
3. **OKLCH (Lightness, Chroma, Hue)**: The modern standard:
   - **L (Lightness)**: 0% (black) to 100% (white).
   - **C (Chroma)**: Color purity or saturation (no upper limit; handles high P3 gamuts easily).
   - **H (Hue)**: Color angle (0-360).
   - *Advantage*: Changing lightness in OKLCH does **not** shift the color hue (unlike HSL where darkening yellow turns it into muddy olive green).

### Real-World Example
If you are designing custom warning UI banners and need to darken red text, using \`oklch(40% 0.25 25)\` ensures the warning stays red instead of turning brown or orange.

### Best Practice
Adopt \`oklch()\` for modern design systems. It makes generating accessible color palettes with guaranteed contrast ratios predictable and stable.

### Common Mistakes
Using Display-P3 colors without fallback specifications, which makes neon highlights render as washed-out colors on older sRGB monitors.

### Code Example
\`\`\`css
.neon-p3-badge {
  /* Fallback */
  background-color: rgb(255, 0, 100);
  
  /* Wide Gamut Display-P3 neon pink */
  @supports (color: color(display-p3 1 0 0.5)) {
    background-color: color(display-p3 1 0 0.5);
  }
}

.accessible-brand-color {
  /* OKLCH: Lightness: 60%, Chroma: 0.15, Hue: 250 (Indigo) */
  background-color: oklch(60% 0.15 250);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে সিএসএস কেবল **sRGB** কালার গ্যামাটের (Hex, RGB, HSL) মধ্যে সীমাবদ্ধ ছিল। আধুনিক ওএলইডি (OLED) বা অ্যাপল রেটিনা ডিসপ্লেগুলো sRGB এর চেয়ে ৩০% বেশি প্রাণবন্ত কালার প্রদর্শন করতে পারে।
সিএসএস এখন ওয়ান-স্টপ ওয়াইড-গ্যামাট কালার স্পেস সাপোর্ট করে:
১. **Display-P3**: এটি অতি-উজ্জ্বল কালার স্পেস। \`color(display-p3 1 0 0)\` দিয়ে এমন নিয়ন লাল রঙ তৈরি করা যায় যা সাধারণ হেক্স কোড \`#ff0000\` দিয়ে মনিটরে রেন্ডার করা অসম্ভব।
২. **Lab ও LCH**: মানুষের চোখের অনুভূতি অনুযায়ী সমান গাণিতিক মডেলে তৈরি। HSL-এ হলুদ ও নীল উভয়ের লাইটনেস ৫০% হলেও হলুদ বেশি উজ্জ্বল দেখায়। এই অসঙ্গতি দূর করে Lab।
৩. **OKLCH (Lightness, Chroma, Hue)**: আধুনিক স্ট্যান্ডার্ড কালার স্পেস:
   - **L (Lightness)**: ০% (কালো) থেকে ১০০% (সাদা)।
   - **C (Chroma)**: রঙের ঘনত্ব বা পিউরিটি (গ্যামাটের ওপর নির্ভর করে)।
   - **H (Hue)**: রঙের চাকা বা কোণ (০ থেকে ৩৬০)।
   - *সুবিধা*: লাইটনেস কমালে রঙের হিউ চেঞ্জ হয় না (যেমন HSL-এ হলুদ ডার্ক করলে তা দেখতে মেটে জলপাই রঙের হয়ে যায় কিন্তু OKLCH-এ তা নিখুঁত ডার্ক হলুদই থাকে)।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়ার্নিং ব্যানারে লাল ফন্টের কালার ডার্ক করার সময় \`oklch(40% 0.25 25)\` ব্যবহার করলে বর্ডারটি খয়েরি বা কমলা না হয়ে নিখুঁত গাঢ় লাল রঙের রূপ নেয়।

### উত্তম অনুশীলন
আধুনিক ডিজাইন সিস্টেমে কালার প্যালেট তৈরির জন্য \`oklch()\` ব্যবহার করুন। এটি ক্যাসকেড ডিজাইনের থিম জেনারেশন অনেক সহজ ও স্থিতিশীল রাখে।

### সাধারণ ভুলসমূহ
ফালব্যাক ছাড়া সরাসরি P3 কালার ব্যবহার করা। এর ফলে পুরোনো sRGB স্ক্রিনগুলোতে নিয়ন কালারগুলো ফিকে বা ঝাপসা দেখায়।

### কোড উদাহরণ
\`\`\`css
.neon-p3-badge {
  /* ফালব্যাক কালার */
  background-color: rgb(255, 0, 100);
  
  /* P3 মনিটরের জন্য অতি উজ্জ্বল নিয়ন পিঙ্ক */
  @supports (color: color(display-p3 1 0 0.5)) {
    background-color: color(display-p3 1 0 0.5);
  }
}

.accessible-brand-color {
  /* OKLCH: লাইটনেস ৬০%, ক্রোমা ০.১৫, হিউ ২৫০ (বেগুনি) */
  background-color: oklch(60% 0.15 250);
}
\`\`\``
  },
  {
    id: 'css-94',
    title: 'Explain the architectural differences and decisions between CSS Flexbox vs Grid.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Grid', 'Layout', 'Architecture'],
    enAnswer: 'The core difference is dimensional: Flexbox is one-dimensional (aligning items along a row OR a column). Grid is two-dimensional (aligning items along rows AND columns simultaneously). Grid is content-external (defined on parent), while Flexbox is content-internal (items size themselves).',
    bnAnswer: 'মূল পার্থক্যটি হলো মাত্রিক (dimensional): Flexbox হলো একমাত্রিক (কেবল রো অথবা কলাম বরাবর সাজায়)। Grid হলো দ্বিমাত্রিক (একই সাথে রো এবং কলাম বরাবর সাজায়)। গ্রিড লেআউট প্যারেন্টে আগে থেকে ছক তৈরি করে কাজ করে, আর ফ্লেক্সবক্সে আইটেমগুলো নিজেদের কন্টেন্ট অনুযায়ী সাইজ নেয়।',
    enExplanation: `### Explanation
Deciding whether to use Flexbox or CSS Grid depends on structural layout needs:
- **Flexbox (One-Dimensional)**:
  - Best for aligning a list of items along a single axis (either horizontal or vertical).
  - **Content-driven**: Sizing is decided inside the child elements (using text width or padding). Items wrap to the next line but do not align with items in the row above.
  - Use case: Navbars, tag lists, comment feeds, button groups.
- **CSS Grid (Two-Dimensional)**:
  - Best for alignment along columns and rows simultaneously.
  - **Layout-driven**: Sizing is defined strictly on the parent container (using tracks). Child elements snap into pre-defined cells.
  - Use case: Full dashboard dashboard screens, photo galleries, form grids with aligned labels and inputs.

### Real-World Example
If you are designing a card grid list and want all cards in row 2 to line up perfectly with the columns of row 1, use CSS Grid. If you want the cards to automatically wrap and dynamically stretch to fill the remaining space of the last row when there are only 2 items left, use Flexbox.

### Best Practice
Do not choose one over the other. Combine them: use CSS Grid to build the main page macro-layout sections, and use Flexbox inside the cards or header components to align icons and text.

### Common Mistakes
Forcing Flexbox to build complex page grid layouts by manually writing math percentages (like \`width: calc(33% - 10px)\`), which introduces scaling bugs. Use Grid instead.

### Code Example
\`\`\`css
/* Two-Dimensional Grid Layout */
.app-dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
}

/* One-Dimensional Flexbox Layout */
.card-header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Flexbox এবং CSS Grid এর মধ্যে সঠিক সিদ্ধান্ত নেওয়ার ক্ষেত্রে আর্কিটেকচারাল পার্থক্যটি বোঝা জরুরি:
- **Flexbox (একমাত্রিক - One-Dimensional)**:
  - উপাদানগুলোকে কেবল একটি অক্ষে (অনূভূমিক অথবা উল্লম্ব) সাজানোর জন্য সেরা।
  - **কন্টেন্ট-চালিত**: ভেতরের টেক্সট বা চাইল্ডের আকারের ওপর ভিত্তি করে উইডথ নির্ধারিত হয়। আইটেম নিচে নামলে আগের লাইনের কলামের সাথে এলাইন থাকে না।
  - ব্যবহারের জায়গা: নেভিগেশন বার, বাটন গ্রুপ, ট্যাগ লিস্ট।
- **CSS Grid (দ্বিমাত্রিক - Two-Dimensional)**:
  - একসাথে কলাম ও রো বরাবর উপাদান সাজাতে কাজ করে।
  - **লেআউট-চালিত**: কলামের ছক প্যারেন্ট এলিমেন্টেই শক্তভাবে আঁকা থাকে। চাইল্ডগুলো সেই নির্দিষ্ট খুপরিতে গিয়ে বসে।
  - ব্যবহারের জায়গা: ড্যাশবোর্ড স্ক্রিন, জটিল ডাটা ফরম, গ্যালারি।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি কতগুলো কার্ড গ্রিড সাজাচ্ছেন এবং চান ২য় লাইনের কার্ডগুলো যেন ১ম লাইনের কার্ডগুলোর সাথে একদম সোজা এলাইন থাকে, তাহলে Grid ব্যবহার করুন। আর যদি চান শেষ লাইনে মাত্র ২টি কার্ড থাকলে তারা ওপরে-নিচে লাইন মেলানোর চেষ্টা না করে পুরো লাইনের উইডথ চওড়া হয়ে দখল করবে, তাহলে Flexbox ব্যবহার করুন।

### উত্তম অনুশীলন
গ্রিড ও ফ্লেক্সের দ্বন্দ্বে না গিয়ে দুটিকে মিক্স করে ব্যবহার করুন। পেজের মূল স্ট্রাকচার কলাম তৈরি করতে Grid ব্যবহার করুন এবং কার্ড বা ব্যানারের ভেতরের আইকন-টেক্সট এলাইন করতে Flexbox ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ম্যানুয়ালি উইডথ পারসেন্টেজ হিসাব করে (যেমন: \`width: 33.33%\`) ফ্লেক্সবক্স দিয়ে জোর করে গ্রিড বানানোর চেষ্টা করা, যা স্ক্রিন ছোট-বড় হলে ভেঙে যায়। এ ক্ষেত্রে গ্রিডই সেরা সমাধান।

### কোড উদাহরণ
\`\`\`css
/* দ্বিমাত্রিক গ্রিড লেআউট */
.app-dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
}

/* একমাত্রিক ফ্লেক্সবক্স লেআউট */
.card-header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
\`\`\``
  },
  {
    id: 'css-95',
    title: 'Explain Print Media Stylesheets (@media print) and page styling.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Print Media', 'Typography', 'Advanced'],
    enAnswer: 'Print Media Stylesheets (@media print) apply CSS rules when a user prints the web page. It optimizes layouts by hiding interactive elements (navigation, footers, buttons), setting background colors to white, and using page-break-inside to prevent split elements.',
    bnAnswer: 'প্রিন্ট মিডিয়া স্টাইলশিট (@media print) ব্যবহারকারী পেজটি প্রিন্ট করার সময় নির্দিষ্ট স্টাইল কার্যকর করে। এটি নেভিগেশন, বাটন ও ফুটার লুকিয়ে, ব্যাকগ্রাউন্ড সাদা করে এবং পৃষ্ঠা ভাঙা (page-break-inside) রোধ করে প্রিন্টিং লেআউট সুন্দর রাখে।',
    enExplanation: `### Explanation
A web layout optimized for screen display is rarely suitable for physical paper printing. Wrapping rules inside \`@media print\` lets you format documents for printing:
- **Hide non-essential UI**: Hide sidebars, navigation bars, cookie consents, and action buttons (\`display: none\`).
- **Color optimization**: Force text to solid black and background to white (\`color: #000; background: #fff;\`) to save ink and guarantee high contrast.
- **URL expansion**: Show links destination URLs next to anchor text:
  \`\`\`css
  a::after { content: " (" attr(href) ")"; }
  \`\`\`
- **Page breaks control**:
  - \`page-break-inside: avoid\`: Prevents half of a table or image from printing on page 1 and the other half on page 2.
  - \`page-break-before: always\`: Forces major sections (like chapters or new invoices) to start on a fresh sheet of paper.

### Real-World Example
In a booking platform, when a user clicks "Print Receipt", the printed PDF hides the main website search bars, the header menu, and side links, showing only a clean, centered invoice receipt matching paper dimensions.

### Best Practice
Avoid absolute positioning in print styles as it can crop text off the bottom of the printed page. Use standard block-level flow layout. Turn off all heavy transition effects.

### Common Mistakes
Forgetting that background-images are disabled by default in print browsers. Do not rely on colored background panels to convey important warning information; use text symbols instead.

### Code Example
\`\`\`css
@media print {
  /* Hide UI junk */
  .navbar, .sidebar, .cta-button, footer {
    display: none !important;
  }
  
  body {
    background: white;
    color: black;
    font-size: 12pt; /* Points are preferred for physical paper print */
  }

  .print-invoice-card {
    border: 1px solid #333;
    page-break-inside: avoid; /* Prevents card splitting across page cuts */
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ক্রিনে দেখার উপযোগী ডিজাইন প্রিন্ট করার জন্য উপযুক্ত নয়। \`@media print\` মিডিয়া কোয়েরির সাহায্যে ফিজিক্যাল কাগজে প্রিন্ট করার জন্য কাস্টম লেআউট তৈরি করা যায়:
- **ইউআই আড়াল করা**: নেভিগেশন বার, সাইডবার, বাটন ও ফুটার প্রিন্ট কপি থেকে বাদ দেওয়া (\`display: none\`)।
- **কালার অপ্টিমাইজেশন**: কালি বাঁচাতে ও পড়ার সুবিধা করতে ব্যাকগ্রাউন্ড সম্পূর্ণ সাদা ও ফন্ট কালার কালো করা।
- **ইউআরএল বা লিংক এক্সপ্যান্ড করা**: লিংকের ইউআরএলটি লিংকের পাশে প্রিন্ট কপিতে ব্র্যাকেট আকারে দেখানো:
  \`\`\`css
  a::after { content: " (" attr(href) ")"; }
  \`\`\`
- **পৃষ্ঠা ভাঙা নিয়ন্ত্রণ (Page breaks)**:
  - \`page-break-inside: avoid\`: ছবির অর্ধেক অংশ প্রথম পাতায় আর বাকি অংশ দ্বিতীয় পাতায় প্রিন্ট হওয়া বন্ধ করে।
  - \`page-break-before: always\`: কোনো বড় চ্যাপ্টার বা ইনভয়েসকে নতুন একটি পাতায় শুরু করতে বাধ্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বুকিং বা ইনভয়েস পেজে ইউজার যখন কীবোর্ড থেকে Ctrl+P চাপেন, তখন প্রিন্টিং কপিতে ওয়েবসাইটের সমস্ত নেভিগেশন ও ফুটার স্বয়ংক্রিয়ভাবে হাওয়া হয়ে যায় এবং কাগজের মাপে কেবল একটি চমৎকার রশিদ প্রিন্ট হয়।

### উত্তম অনুশীলন
প্রিন্ট সিএসএস-এ ফন্টের সাইজে পিক্সেলের বদলে পয়েন্ট (\`pt\`) ইউনিট ব্যবহার করা ভালো (যেমন: \`12pt\`)। কোনো ধরনের অ্যাবসলিউট পজিশন ব্যবহার করবেন না, এতে লেখা কাগজের সাইড থেকে কেটে যেতে পারে।

### সাধারণ ভুলসমূহ
প্রিন্ট করার সময় ব্রাউজার ডিফল্টভাবে ব্যাকগ্রাউন্ড ছবি ব্লক করে দেয়। তাই কালারড ব্যানারের ওপর ভরসা করে প্রয়োজনীয় তথ্য (যেমন পেমেন্ট স্ট্যাটাস) বোঝানোর চেষ্টা না করে সরাসরি টেক্সটে লিখুন।

### কোড উদাহরণ
\`\`\`css
@media print {
  /* ইউজার ইন্টারফেসের বাড়তি অংশ বাদ দেওয়ার নিয়ম */
  .navbar, .sidebar, .cta-button, footer {
    display: none !important;
  }
  
  body {
    background: white;
    color: black;
    font-size: 12pt; /* কাগজের জন্য পয়েন্ট (pt) ইউনিট রিকমেন্ডেড */
  }

  .print-invoice-card {
    border: 1px solid #333;
    page-break-inside: avoid; /* কার্ডটিকে পাতার কাটাকাটিতে ভাঙা থেকে রক্ষা করবে */
  }
}
\`\`\``
  },
  {
    id: 'css-96',
    title: 'Explain CSS custom properties fallback lists and runtime mutations.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Variables', 'Performance', 'Advanced'],
    enAnswer: 'CSS Custom Properties support nested fallback lists that execute sequentially if variables are undefined. Runtime mutations can be performed in JavaScript using CSSStyleDeclaration.setProperty(), which updates all dependent styles in the DOM in real-time.',
    bnAnswer: 'CSS কাস্টম প্রোপার্টি নেস্টেড ফালব্যাক সাপোর্ট করে যা ভেরিয়েবল না পাওয়া গেলে ধারাবাহিকভাবে ট্রিগার হয়। রানটাইমে জাভাস্ক্রিপ্ট দিয়ে setProperty() এর সাহায্যে ভেরিয়েবল পরিবর্তন করা যায়, যা ডমের সমস্ত ডিপেন্ডেন্ট স্টাইলকে রিয়েল-টাইমে আপডেট করে।',
    enExplanation: `### Explanation
CSS custom properties support robust error-safety parameters:
- **Nested Fallbacks**: The \`var()\` function supports chaining parameters:
  \`\`\`css
  color: var(--primary-color, var(--fallback-theme, #4f46e5));
  \`\`\`
  If \`--primary-color\` is undefined, the browser falls back to \`--fallback-theme\`. If that is also missing, it defaults to the blue hex code.

- **Runtime Mutations**: Unlike Sass (which is static after build), CSS variables are part of the active CSSOM. You can mutate variable values at runtime using JavaScript:
  \`\`\`javascript
  document.documentElement.style.setProperty('--primary-color', '#ff0000');
  \`\`\`
  When executed, the browser instantly recalculates styles only for elements dependent on that variable, bypassing full stylesheet rebuilds.

### Real-World Example
In a SaaS branding dashboard, you can provide a color picker tool. When the admin selects a color, JavaScript updates \`--brand-color\` on the root element. The entire website colors scheme changes instantly in real-time.

### Best Practice
Set core design tokens (spacing, typography, colors) in variables. Do not mutate individual class properties in JS; mutate the variable value instead to keep styles isolated.

### Common Mistakes
Forgetting that CSS variables are case-sensitive (\`--Primary-Color\` is different from \`--primary-color\`), leading to variables failing to load.

### Code Example
\`\`\`css
.header-box {
  /* Complex nested fallback */
  background-color: var(--custom-bg, var(--theme-bg, #ffffff));
  padding: var(--spacing-unit, 16px);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS কাস্টম প্রোপার্টির ভুল প্রতিরোধী ক্ষমতা অনেক বেশি:
- **নেস্টেড ফালব্যাক (Nested Fallbacks)**: \`var()\` ফাংশনে একটার পর একটা কমা দিয়ে চেইন ফালব্যাক যোগ করা যায়:
  \`\`\`css
  color: var(--primary-color, var(--fallback-theme, #4f46e5));
  \`\`\`
  যদি \`--primary-color\` ডিফাইন করা না থাকে, তবে ব্রাউজার \`--fallback-theme\` খুঁজবে। সেটিও না পেলে ডিফল্ট কালার কোডটি নিয়ে কাজ করবে।

- **রানটাইম পরিবর্তন (Runtime Mutations)**: Sass বিল্ড হওয়ার পর পরিবর্তন করা যায় না, কিন্তু সিএসএস ভেরিয়েবল ব্রাউজারে সচল থাকে। জাভাস্ক্রিপ্ট ব্যবহার করে রানটাইমে এর মান পরিবর্তন করা যায়:
  \`\`\`javascript
  document.documentElement.style.setProperty('--primary-color', '#ff0000');
  \`\`\`
  এটি এক্সিকিউট হওয়া মাত্র ব্রাউজার অত্যন্ত দ্রুত কেবল ওই ভেরিয়েবলের ওপর নির্ভরশীল ডম অংশগুলোর লেআউট পেইন্ট করে আপডেট করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
উইজেট কনফিগারেটরে ইউজার কালার পিকার দিয়ে থিমের রঙ পরিবর্তন করতে চান। পিকারের পরিবর্তনের সাথে সাথে জেএসে \`--primary-color\` আপডেট করে দিলে নিমিষেই পুরো ওয়েবসাইটের বাটন ও মেনু থিম কালারে সেজে যায়।

### উত্তম অনুশীলন
প্রধান ব্র্যান্ড কালার ও প্যাডিং ভেরিয়েবলে রাখুন। জাভাস্ক্রিপ্ট দিয়ে সরাসরি এলিমেন্টের স্টাইল চেঞ্জ না করে রুট লেভেলের ভেরিয়েবল মান সেট করে থিম পরিবর্তন করা সবচেয়ে পরিচ্ছন্ন মেথড।

### সাধারণ ভুলসমূহ
সিএসএস ভেরিয়েবল কেস-সেনসিটিভ (Case-sensitive) তা ভুলে যাওয়া। যেমন \`--Primary-Color\` এবং \`--primary-color\` ব্রাউজারে সম্পূর্ণ আলাদা দুটি ভেরিয়েবল হিসেবে কাউন্ট হবে।

### কোড উদাহরণ
\`\`\`css
.header-box {
  /* জটিল নেস্টেড ফালব্যাক চেইন */
  background-color: var(--custom-bg, var(--theme-bg, #ffffff));
  padding: var(--spacing-unit, 16px);
}
\`\`\``
  },
  {
    id: 'css-97',
    title: 'Explain the CSS @property rule and its benefits.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Houdini', 'Variables', 'Advanced'],
    enAnswer: 'The @property rule allows developers to explicitly register custom properties with type validation, default values, and inheritance controls. This enables animating CSS variables smoothly using transitions and keyframes.',
    bnAnswer: '@property রুলটি ডেভেলপারদের কাস্টম প্রোপার্টি বা ভেরিয়েবলগুলোকে টাইপ ভ্যালিডেশন, ডিফল্ট মান এবং ইনহেরিটেন্স কন্ট্রোলসহ রেজিস্টার করার সুযোগ দেয়। এর ফলে সিএসএস ভেরিয়েবলগুলোকে ট্রানজিশন বা কী-ফ্রেম দিয়ে স্মুথলি অ্যানিমেট করা যায়।',
    enExplanation: `### Explanation
Standard CSS variables are treated as plain text strings by the browser. Because the browser does not know what type of data is inside the variable, it **cannot** interpolate or animate them. For example, transitioning a background gradient \`linear-gradient(var(--angle), red, blue)\` by transitioning \`--angle\` fails because the browser cannot morph a plain text string.
The **\`@property\`** rule (part of Houdini) registers the variable with structured metadata:
- **\`syntax\`**: Declares the type (e.g. \`"<angle>"\`, \`"<color>"\`, \`"<length>"\`).
- **\`inherits\`**: True or false (defines if child nodes inherit the variable).
- **\`initial-value\`**: Specifies the mandatory default starting value.

By defining the syntax type as \`"<angle>"\`, the browser engine now understands how to calculate transition angles dynamically, enabling smooth keyframe animations of gradients.

### Real-World Example
To create a rotating rainbow gradient border animation on a card hover, registering \`@property --angle\` with type \`"<angle>"\` lets you animate the border rotation smoothly in CSS.

### Best Practice
Register custom properties in your root CSS stylesheet using \`@property\`. This acts as a schema for your design system tokens, preventing bugs if invalid color strings are passed.

### Common Mistakes
Forgetting that if you declare a \`syntax\` type, you **must** also specify an \`initial-value\` and \`inherits\` property, otherwise the browser rejects the registration.

### Code Example
\`\`\`css
/* 1. Register Custom Variable Schema */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-card {
  background-image: linear-gradient(var(--gradient-angle), #4f46e5, #ec4899);
  transition: --gradient-angle 0.5s ease;
}

.gradient-card:hover {
  --gradient-angle: 180deg; /* Animates smoothly now! */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণ সিএসএস ভেরিয়েবলগুলোকে ব্রাউজার সাধারণ টেক্সট স্ট্রিং হিসেবে দেখে। ব্রাউজার ভেরিয়েবলের ভেতরের ডাটার টাইপ না জানলে সেটিকে ট্রানজিশন করতে পারে না। যেমন গ্রেডিয়েন্টের কোণ \`linear-gradient(var(--angle), red, blue)\`-তে \`--angle\` ভেরিয়েবল পরিবর্তন করলে কোনো অ্যানিমেশন হবে না, কারণ ব্রাউজার সাধারণ স্ট্রিং ট্রানজিশন করতে পারে না।
Houdini-এর অংশ **\`@property\`** ভেরিয়েবলটিকে কাস্টম মেটাডাটা দিয়ে রেজিস্টার করে সমাধান দেয়:
- **\`syntax\`**: ভেরিয়েবলের ডাটা টাইপ ডিক্লেয়ার করে (যেমন: \`"<angle>"\`, \`"<color>"\`, \`"<length>"\`)।
- **\`inherits\`**: ট্রু বা ফলস (চাইল্ডরা পাবে কিনা)।
- **\`initial-value\`**: ডিফল্ট শুরুর মান।

এখানে টাইপ \`"<angle>"\` ডিক্লেয়ার করায় ব্রাউজার ডাইনামিক কোণ হিসেব করা শিখে যায়, ফলে গ্রেডিয়েন্ট রোটেশনের স্মুথ কী-ফ্রেম অ্যানিমেশন সম্ভব হয়।

### বাস্তব-ভিত্তিক উদাহরণ
কার্ডে মাউস রাখলে বর্ডারের চারপাশে রেইনবো গ্রেডিয়েন্ট কালার ঘোরানোর ট্রানজিশন তৈরি করতে টাইপ \`"<angle>"\` রেজিস্টার করে সিএসএস অ্যানিমেশন তৈরি করা হয়।

### উত্তম অনুশীলন
ডিজাইন টোকেনগুলোর সুরক্ষায় ও ডাইনামিক ট্রানজিশন সচল রাখতে সিএসএস স্টাইলশিটের শুরুতে \`@property\` ব্যবহার করে স্কিমা বা নিয়ম ঠিক করে দিন।

### সাধারণ ভুলসমূহ
\`syntax\` টাইপ ডিক্লেয়ার করার পর \`initial-value\` এবং \`inherits\` প্রোপার্টি লিখতে ভুলে যাওয়া, যার ফলে পুরো ডিক্লেয়ারেশন বাতিল হয়ে যায়।

### কোড উদাহরণ
\`\`\`css
/* ১. কাস্টম ভেরিয়েবলের স্কিমা বা টাইপ ডিক্লেয়ারেশন */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-card {
  background-image: linear-gradient(var(--gradient-angle), #4f46e5, #ec4899);
  transition: --gradient-angle 0.5s ease;
}

.gradient-card:hover {
  --gradient-angle: 180deg; /* এখন এটি একদম মসৃণভাবে অ্যানিমেট হবে! */
}
\`\`\``
  },
  {
    id: 'css-98',
    title: 'Explain the CSS image-rendering property and its use cases.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Images', 'Visuals', 'Performance'],
    enAnswer: 'The image-rendering property controls the scaling algorithm used by browsers when resizing images. Setting it to pixelated or crisp-edges prevents blurry interpolation, making it useful for pixel art or QR codes.',
    bnAnswer: 'image-rendering প্রোপার্টি ছবি ছোট-বড় করার সময় ব্রাউজার যে স্কেলিং অ্যালগরিদম ব্যবহার করে তা নিয়ন্ত্রণ করে। এটি pixelated বা crisp-edges সেট করলে ছবি ঝাপসা না হয়ে পিক্সেল আর্ট বা কিউআর কোডের মতো শার্প বর্ডার বজায় রাখে।',
    enExplanation: `### Explanation
By default, when you scale up a small image, browsers use a bilinear or bicubic interpolation algorithm to smooth the edges. While great for standard photographs, this algorithm produces blurry, out-of-focus edges on certain graphical files.
The \`image-rendering\` property alters this:
- **\`auto\`** (default): Normal smooth interpolation.
- **\`pixelated\`**: The image is scaled using the nearest-neighbor algorithm. The browser preserves sharp blocky pixels, avoiding blur. Excellent for low-resolution pixel graphics.
- **\`crisp-edges\`**: Sharp scaling optimized for vector contrast, keeping lines crisp without blurring.

### Real-World Example
If you display a QR code image and scale it responsive, standard browser blur can make the code unreadable by mobile camera scanners. Setting \`image-rendering: pixelated\` keeps the square blocks perfectly sharp and easily scannable.

### Best Practice
Apply \`image-rendering: pixelated\` strictly to pixel art graphics, retro game canvases, and QR barcodes. Do not apply it to photographs as it makes skin tones look blocky and low quality.

### Common Mistakes
Applying pixelated scaling to high-resolution JPEG photos, which introduces pixelated artifacts.

### Code Example
\`\`\`css
.qr-code-image {
  width: 100%;
  max-width: 300px;
  /* Keeps the blocky details of the code sharp instead of blurring them */
  image-rendering: pixelated;
}

.pixel-art-avatar {
  width: 64px;
  height: 64px;
  image-rendering: crisp-edges;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ছোট আকৃতির ছবি বড় স্ক্রিনে টেনে বড় করলে ব্রাউজার কোণাগুলোকে মসৃণ বা স্মুথ করতে বাইলিনিয়ার (bilinear) অ্যালগরিদম চালায়। সাধারণ ছবির জন্য এটি ঠিক থাকলেও নির্দিষ্ট কিছু ফাইলে লেখা বা গ্রাফিক্স ঝাপসা হয়ে যায়।
\`image-rendering\` এটি পরিবর্তন করে:
- **\`auto\`** (ডিফল্ট): সাধারণ ঝাপসা বা স্মুথ রূপান্তর।
- **\`pixelated\`**: নিয়ারেস্ট-নেইবার (nearest-neighbor) অ্যালগরিদমে ইমেজ স্কেল করে। ব্রাউজার পিক্সেলের ধারালো চারকোনা রূপ ধরে রাখে, ব্লার করে না। এটি রেট্রো পিক্সেল আর্টের জন্য সেরা।
- **\`crisp-edges\`**: লাইনের বৈপরীত্য বা কনট্রাস্ট ঠিক রেখে ভেক্টর আর্ট বা টেক্সটের কোণাগুলো ধারালো ও স্পষ্ট রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
ডিজাইনে কিউআর কোড (QR Code) ছবি ব্যবহার করে স্ক্রিনে বড় করার সময় বর্ডারগুলো ঝাপসা হলে মোবাইলের ক্যামেরা কোড রিড করতে ব্যর্থ হতে পারে। সেখানে \`image-rendering: pixelated\` সেট করলে বর্ডারগুলো একদম খাড়া ও তীক্ষ্ণ থাকবে এবং সহজে স্ক্যান করা যাবে।

### উত্তম অনুশীলন
পিক্সেল আর্ট, রেট্রো গেমের ক্যানভাস এবং কিউআর কোড ছাড়া সাধারণ ছবিতে পিক্সেল বা ক্রিস্প রেন্ডারিং ব্যবহার করবেন না, অন্যথায় ফোটোগ্রাফির ফেস নষ্ট হয়ে কম রেজোলিউশনের কদর্য পিক্সেল দেখা যাবে।

### সাধারণ ভুলসমূহ
হাই-রেজোলিউশন ফোটোগ্রাফিতে পিক্সেল রেন্ডারিং ব্যবহার করা, যা ইমেজে অযথা নয়েজ ও ত্রুটি ফুটিয়ে তোলে।

### কোড উদাহরণ
\`\`\`css
.qr-code-image {
  width: 100%;
  max-width: 300px;
  /* কোডের ব্লকি চারকোনা শেইপকে ঝাপসা হতে দেবে না */
  image-rendering: pixelated;
}

.pixel-art-avatar {
  width: 64px;
  height: 64px;
  image-rendering: crisp-edges;
}
\`\`\``
  },
  {
    id: 'css-99',
    title: 'Explain Browser Reflow and Repaint triggers and diagnostics.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Performance', 'Rendering', 'DOM'],
    enAnswer: 'Reflow (Layout) recalculates element sizes and coordinates, triggered by geometry changes (width, margin, display). Repaint draws pixels to the screen, triggered by styling changes (color, visibility, box-shadow). Diagnostics can be performed using Chrome DevTools Performance and Rendering tabs.',
    bnAnswer: 'রিফ্লো (Layout) এলিমেন্টের সাইজ ও পজিশন পুনরায় হিসাব করে যা জ্যামিতিক প্রোপার্টি (width, margin) পরিবর্তনের কারণে ঘটে। রিপেইন্ট পিক্সেলগুলোকে স্ক্রিনে ড্র করে যা স্টাইল (color, box-shadow) পরিবর্তনের কারণে ঘটে। ক্রোম ডেভটুলস পারফরম্যান্স ও রেন্ডারিং ট্যাবে এটি নির্ণয় করা যায়।',
    enExplanation: `### Explanation
Rendering optimizations require minimizing reflows and repaints in the browser event loop:
- **Reflow Triggers**:
  - Resizing the browser window.
  - Adding, removing, or updating DOM nodes.
  - Geometry CSS changes: \`width\`, \`height\`, \`padding\`, \`margin\`, \`border\`, \`display: none\`, \`font-size\`, \`line-height\`.
  - Reading layout-critical DOM properties in JS (e.g. \`offsetWidth\`, \`scrollHeight\`, \`getBoundingClientRect()\`). The browser is forced to freeze calculations and run layout sweeps instantly (called **layout thrashing**).
- **Repaint Triggers**:
  - \`color\`, \`background-color\`, \`visibility\`, \`box-shadow\`, \`text-decoration\`, \`border-style\`. (Note: Reflow always triggers Repaint, but Repaint can run without Reflow).

### Real-World Example
If your JavaScript reads \`element.offsetHeight\` inside a scroll animation loop and immediately writes a new style width, it triggers layout calculation on every frame, causing the page scrolling to stutter.

### Best Practice
Avoid layout thrashing. Group DOM reads together and DOM writes together (use \`requestAnimationFrame\` or modern libraries to batch updates).

### Common Mistakes
Forgetting to monitor Chrome DevTools performance panels, which highlight reflow loops as red warning bars labeled "Long Tasks" or "Forced Reflows".

### Code Example
\`\`\`javascript
// BAD: Triggers layout thrashing (Read-Write-Read-Write loop)
const width1 = element1.offsetWidth;
element1.style.width = (width1 + 10) + 'px';
const width2 = element2.offsetWidth;
element2.style.width = (width2 + 10) + 'px';

// GOOD: Batch reads, then batch writes
const width1 = element1.offsetWidth;
const width2 = element2.offsetWidth;

requestAnimationFrame(() => {
  element1.style.width = (width1 + 10) + 'px';
  element2.style.width = (width2 + 10) + 'px';
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্রাউজার রেন্ডারিং অপ্টিমাইজ করতে রিফ্লো এবং রিপেইন্টের সংখ্যা সর্বনিম্ন রাখা প্রয়োজন:
- **রিফ্লো ট্রিগারসমূহ**:
  - ব্রাউজার উইন্ডোর আকার পরিবর্তন করা।
  - ডম (DOM) নোড যোগ, বিয়োগ বা আপডেট করা।
  - জ্যামিতিক সিএসএস প্রোপার্টি পরিবর্তন করা: \`width\`, \`height\`, \`padding\`, \`margin\`, \`font-size\`।
  - জাভাস্ক্রিপ্টে লেআউট রিলেটেড প্রোপার্টি রিড করা (যেমন: \`offsetWidth\`, \`getBoundingClientRect()\`)। ব্রাউজার তাৎক্ষণিকভাবে হিসাব মেলাতে বাধ্য হয় যাকে **লেআউট থ্র্যাশিং (layout thrashing)** বলে।
- **রিপেইন্ট ট্রিগারসমূহ**:
  - \`color\`, \`background-color\`, \`visibility\`, \`box-shadow\`। (মনে রাখবেন: রিফ্লো হলে রিপেইন্ট অবশ্যই হবে, কিন্তু রিপেইন্ট রিফ্লো ছাড়া একাও হতে পারে)।

### বাস্তব-ভিত্তিক উদাহরণ
জাভাস্ক্রিপ্ট স্ক্রল লিসেনারের ভেতর যদি প্রতি পিক্সেলে \`element.offsetHeight\` রিড করে আবার উইডথ রাইট করেন, তবে প্রতি ফ্রেমে পেজ ল্যাগ বা ঝাঁকুনি দেবে।

### উত্তম অনুশীলন
লেআউট থ্র্যাশিং এড়ান। ডম রিড (DOM Read) গুলো এক জায়গায় করুন এবং ডম রাইট (DOM Write) গুলো আলাদাভাবে \`requestAnimationFrame\` ফাংশনের ভেতর করুন।

### সাধারণ ভুলসমূহ
ক্রোম ডেভটুলস (Chrome DevTools) এর পারফরম্যান্স প্যানেল চেক না করা, যেখানে ব্রাউজার লাল রঙের ওয়ার্নিং দিয়ে "Forced Reflow" বা দীর্ঘ লোডিং টাস্কগুলো চিহ্নিত করে দেয়।

### কোড উদাহরণ
\`\`\`javascript
// ক্ষতিকর: লেআউট থ্র্যাশিং তৈরি করবে (Read-Write-Read-Write লুপ)
const width1 = element1.offsetWidth;
element1.style.width = (width1 + 10) + 'px';
const width2 = element2.offsetWidth;
element2.style.width = (width2 + 10) + 'px';

// সেরা অনুশীলন: আগে রিড, পরে একসাথে রাইট
const width1 = element1.offsetWidth;
const width2 = element2.offsetWidth;

requestAnimationFrame(() => {
  element1.style.width = (width1 + 10) + 'px';
  element2.style.width = (width2 + 10) + 'px';
});
\`\`\``
  },
  {
    id: 'css-100',
    title: 'Explain the CSS Custom Scrollbar styling specification.',
    difficulty: 'advanced',
    category: 'css',
    tags: ['CSS', 'Scrollbar', 'Visuals', 'Advanced'],
    enAnswer: 'Scrollbar styling is divided between standard CSS properties (scrollbar-width, scrollbar-color) and vendor-specific pseudo-elements (::-webkit-scrollbar, ::-webkit-scrollbar-thumb) used by WebKit engines.',
    bnAnswer: 'স্ক্রলবার স্টাইলিং মূলত স্ট্যান্ডার্ড CSS প্রোপার্টিজ (scrollbar-width, scrollbar-color) এবং ওয়েবকিট ইঞ্জিনের জন্য ভেন্ডর-স্পেসিফিক সিউডো-এলিমেন্ট (::-webkit-scrollbar, ::-webkit-scrollbar-thumb) এর মাধ্যমে করা হয়।',
    enExplanation: `### Explanation
Websites with clean dark themes often look incomplete if they show the browser's default bright gray scrollbar.
Scrollbar styling historically used WebKit-only pseudo-elements. Modern CSS has introduced standardized W3C properties:
1. **Standard W3C scrollbar properties**:
   - \`scrollbar-width\`: Controls sizing (\`auto\`, \`thin\`, \`none\` to hide scrollbars completely).
   - \`scrollbar-color\`: Specifies the color track and thumb. Syntax: \`scrollbar-color: thumbColor trackColor;\` (e.g. \`scrollbar-color: #4f46e5 #e5e7eb;\`).
2. **WebKit pseudo-elements (Chrome, Safari, Edge)**:
   - \`::-webkit-scrollbar\`: The overall scrollbar container block.
   - \`::-webkit-scrollbar-track\`: The track background.
   - \`::-webkit-scrollbar-thumb\`: The draggable scroll indicator.
   - \`::-webkit-scrollbar-thumb:hover\`: Styling changes during scrollbar hover interactions.

### Real-World Example
In a dark mode dashboard menu widget column with overflow, styling the scrollbar thumb to dark indigo and the track to dark gray ensures the scroll indicator doesn't break the dark theme aesthetics.

### Best Practice
Combine both standard and WebKit-specific styles to ensure scrollbars render beautifully on all platforms (Chrome, Safari, Firefox, Edge).

### Common Mistakes
Forgetting that WebKit pseudo-elements require explicit height/width declarations to render, otherwise scrollbars disappear.

### Code Example
\`\`\`css
/* Custom Scrollbar Styles for a container block */
.custom-scroll-container {
  overflow-y: auto;
  
  /* 1. W3C Standard (Firefox) */
  scrollbar-width: thin;
  scrollbar-color: #4f46e5 #1f2937; /* thumb color | track color */
}

/* 2. WebKit Engines (Chrome, Safari, Edge) */
.custom-scroll-container::-webkit-scrollbar {
  width: 8px; /* Scrollbar width */
}

.custom-scroll-container::-webkit-scrollbar-track {
  background: #1f2937; /* Dark track background */
}

.custom-scroll-container::-webkit-scrollbar-thumb {
  background: #4f46e5; /* Purple thumb pointer */
  border-radius: 4px;
}

.custom-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #3730a3; /* Darker purple on hover */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডার্ক মোডের সাইটে যদি ব্রাউজারের নেটিভ উজ্জ্বল ধূসর রঙের ডিফল্ট স্ক্রলবার দেখা যায়, তবে ডিজাইন প্রিমিয়াম ফিল দেয় না।
স্ক্রলবার কাস্টমাইজেশন মূলত স্ট্যান্ডার্ড সিএসএস ও ওয়েবকিট (WebKit) সিউডো-এলিমেন্ট দিয়ে করা হয়:
১. **স্ট্যান্ডার্ড W3C স্ক্রলবার প্রোপার্টিজ**:
   - \`scrollbar-width\`: স্ক্রলবারের সাইজ নিয়ন্ত্রণ করে (\`auto\`, \`thin\`, \`none\` দিলে স্ক্রলবার ডেকোরেশন পুরোপুরি লুকিয়ে ফেলা যায়)।
   - \`scrollbar-color\`: নোবার ও থাম্বের কালার সেট করে। সিনট্যাক্স: \`scrollbar-color: thumbColor trackColor;\`।
২. **WebKit সিউডো-এলিমেন্ট (Chrome, Safari, Edge)**:
   - \`::-webkit-scrollbar\`: সম্পূর্ণ স্ক্রলবার ব্লক বা উইডথ ডিক্লেয়ার করে।
   - \`::-webkit-scrollbar-track\`: পেছনের রানিং ট্র্যাক।
   - \`::-webkit-scrollbar-thumb\`: যে অংশটি মাউস দিয়ে ধরে টানা হয় বা থাম্ব।
   - \`::-webkit-scrollbar-thumb:hover\`: থাম্বের হোভার কালার ইফেক্ট।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেসেজিং প্যানেলে চ্যাট বক্সের সাইডে চিকন ও ম্যাচিং ডার্ক গ্রে কালারের স্ক্রলবার থাম্ব তৈরি করতে সিএসএস স্ক্রলবার ব্যবহার করা হয়।

### উত্তম অনুশীলন
ক্রোম, সাফারি, ফায়ারফক্স ও এজ সব ব্রাউজারে একই বর্ডার স্টাইল ও থিম বজায় রাখতে উভয় কোডিং (Standard ও WebKit) একসাথে স্টাইলশিটে যোগ করুন।

### সাধারণ ভুলসমূহ
WebKit সিউডো-এলিমেন্টে উইডথ ডিক্লেয়ার করতে ভুলে যাওয়া, যার ফলে কিছু ক্রোম সংস্করণে স্ক্রলবার পুরোপুরি অদৃশ্য হয়ে যায়।

### কোড উদাহরণ
\`\`\`css
/* স্ক্রল কন্টেইনার কাস্টম স্ক্রলবার স্টাইল */
.custom-scroll-container {
  overflow-y: auto;
  
  /* ১. W3C স্ট্যান্ডার্ড (ফায়ারফক্সের জন্য) */
  scrollbar-width: thin;
  scrollbar-color: #4f46e5 #1f2937; /* থাম্ব কালার | ট্র্যাক কালার */
}

/* ২. ওয়েবকিট ইঞ্জিনের জন্য (ক্রোম, সাফারি, এজ) */
.custom-scroll-container::-webkit-scrollbar {
  width: 8px; /* স্ক্রলবারের প্রস্থ */
}

.custom-scroll-container::-webkit-scrollbar-track {
  background: #1f2937; /* ট্র্যাকের ব্যাকগ্রাউন্ড */
}

.custom-scroll-container::-webkit-scrollbar-thumb {
  background: #4f46e5; /* বেগুনি থাম্ব পয়েন্টার */
  border-radius: 4px;
}

.custom-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #3730a3; /* হোভার করলে গাঢ় বেগুনি */
}
\`\`\``
}
];
