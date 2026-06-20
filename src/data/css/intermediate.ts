import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'css-31',
    title: 'Explain the core concepts of CSS Grid Layout.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Grid', 'Layout', 'Responsive'],
    enAnswer: 'CSS Grid Layout is a two-dimensional grid-based layout system (managing rows and columns simultaneously). It works with parent Grid Containers (display: grid, grid-template-columns, grid-template-rows) and child Grid Items.',
    bnAnswer: 'CSS Grid Layout হলো একটি দ্বিমাত্রিক (two-dimensional) গ্রিড-ভিত্তিক লেআউট সিস্টেম (যা রো এবং কলাম একই সাথে কন্ট্রোল করতে পারে)। এটি প্যারেন্ট গ্রিড কন্টেইনার (display: grid, grid-template-columns) এবং চাইল্ড গ্রিড আইটেম নিয়ে কাজ করে।',
    enExplanation: `### Explanation
CSS Grid Layout is a highly powerful layout engine designed for the web. Unlike Flexbox (which is one-dimensional), Grid is two-dimensional, meaning it controls columns and rows at the same time:
1. **Grid Container**: Created by setting \`display: grid\` or \`display: inline-grid\`.
2. **Grid Tracks**: The rows and columns defined using \`grid-template-columns\` and \`grid-template-rows\`. You can use sizing units like \`px\`, \`%\`, \`rem\`, or the fractional unit \`fr\` (which represents a fraction of the free space in the grid container).
3. **Grid Lines**: The virtual lines dividing columns and rows. You can position items specifically between these lines using \`grid-column-start\` / \`grid-column-end\`.

### Real-World Example
To build a standard dashboard container layout with a sidebar (250px wide) and a main content area that expands to fill the remaining space, we set \`grid-template-columns: 250px 1fr\`.

### Best Practice
Use the \`fr\` unit instead of percentage values to define columns. This prevents width calculations bugs when grid gaps (\`gap\`) are applied to the layout.

### Common Mistakes
Confusing Grid and Flexbox. Use Grid for overall page layouts and complex two-dimensional alignments; use Flexbox for simple one-dimensional element alignment.

### Code Example
\`\`\`css
.dashboard-grid {
  display: grid;
  grid-template-columns: 250px 1fr; /* Fixed sidebar + flexible main area */
  grid-template-rows: auto 1fr;      /* Header height automatically adjusts */
  gap: 20px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS Grid Layout হলো একটি অত্যন্ত শক্তিশালী লেআউট ইঞ্জিন। এটি দ্বিমাত্রিক (two-dimensional) হওয়ায় একই সাথে রো ও কলাম কন্ট্রোল করতে পারে, যা ফ্লেক্সবক্সের (একমাত্রিক) তুলনায় আলাদা:
১. **Grid Container**: কোনো এলিমেন্টে \`display: grid\` দিলে তা গ্রিড কন্টেইনার হয়।
২. **Grid Tracks**: কলাম ও রো-র কন্টেন্ট চেইন যা \`grid-template-columns\` এবং \`grid-template-rows\` দ্বারা ডিফাইন করা হয়। এখানে \`px\`, \`%\` বা \`fr\` (fractional unit) ব্যবহার করা যায়।
৩. **Grid Lines**: গ্রিডের ভেতরের অদৃশ্য ডিভাইডার লাইন। এই লাইন নম্বর অনুযায়ী আইটেমগুলোকে \`grid-column-start\` / \`grid-column-end\` ব্যবহার করে নির্দিষ্ট অবস্থানে বসানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ড্যাশবোর্ডে বাম পাশে ২৫০ পিক্সেল সাইজের সাইডবার এবং ডান পাশে বাকি অংশ জুড় থাকা কন্টেন্ট এরিয়া তৈরি করতে প্যারেন্টে \`grid-template-columns: 250px 1fr\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
কলামের মাপ দেওয়ার সময় পারসেন্টেজ (%) ব্যবহার না করে \`fr\` ইউনিট ব্যবহার করুন। এটি কলামের মাঝে ফাঁকা জায়গা বা \`gap\` দেওয়ার সময় সাইজ গণনা সহজ ও ত্রুটিমুক্ত রাখে।

### সাধারণ ভুলসমূহ
গ্রিড ও ফ্লেক্সবক্সের ব্যবহার গুলিয়ে ফেলা। দ্বিমাত্রিক বা জটিল কলাম-রো বিশিষ্ট পেজ স্ট্রাকচারে গ্রিড এবং লিনিয়ার বা একমাত্রিক উপাদান সাজাতে ফ্লেক্সবক্স ব্যবহার করুন।

### কোড উদাহরণ
\`\`\`css
.dashboard-grid {
  display: grid;
  grid-template-columns: 250px 1fr; /* ২৫০ পিক্সেল সাইডবার + ফ্লেক্সিবল মূল এরিয়া */
  grid-template-rows: auto 1fr;      /* হেডারের হাইট অটোমেটিক কন্টেন্ট অনুযায়ী হবে */
  gap: 20px;
}
\`\`\``
  },
  {
    id: 'css-32',
    title: 'Explain Grid gap and how to place items on a Grid.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Grid', 'Layout', 'Alignment'],
    enAnswer: 'Grid gap (row-gap, column-gap) defines the spacing between grid items. Items are placed manually using grid-column and grid-row coordinates, which specify start and end grid lines.',
    bnAnswer: 'Grid gap (row-gap, column-gap) গ্রিড আইটেমগুলোর মধ্যবর্তী ফাঁকা জায়গা নির্ধারণ করে। গ্রিড লাইনের স্থানাঙ্ক নির্ধারণ করতে grid-column এবং grid-row ব্যবহার করে আইটেমগুলোকে বসানো হয়।',
    enExplanation: `### Explanation
Positioning items and creating gaps in CSS Grid is highly intuitive:
1. **Grid Gaps**: The \`gap\` property (historically \`grid-gap\`) sets space between tracks. You can define \`row-gap\` and \`column-gap\` separately (e.g. \`gap: 20px 10px\` is 20px vertical row spacing, 10px horizontal column spacing).
2. **Item Placement**: Grid cells are separated by numbered grid lines (1-indexed). You position elements using:
   - \`grid-column: startLine / endLine\` (shorthand for \`grid-column-start\` / \`grid-column-end\`).
   - \`grid-row: startLine / endLine\`.
   - The \`span\` keyword allows you to extend items across multiple cells without declaring the exact end line index (e.g., \`grid-column: span 2\`).

### Real-World Example
If you are designing a grid of feature cards and want a "Featured Banner" card to occupy the top row across three columns, you write \`grid-column: 1 / 4\` or \`grid-column: span 3\` on that card.

### Best Practice
Use the \`span\` keyword for layout modules that dynamically change order or index placement. It is easier to maintain than hardcoded grid line numbers.

### Common Mistakes
Forgetting that grid lines are **1-indexed** and represent the border dividers, not the grid cells themselves. A 3-column layout has 4 grid lines.

### Code Example
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 15px;
}

/* Item spans across first two columns */
.featured-card {
  grid-column: 1 / 3;
  grid-row: span 2; /* Spans 2 rows downwards */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS গ্রিডে আইটেম প্লেসমেন্ট এবং গ্যাপ প্রোপার্টি যেভাবে কাজ করে:
১. **Grid Gaps**: কলাম ও রোর মাঝখানের দূরত্ব বা স্পেস নির্ধারণ করতে \`gap\` ব্যবহার করা হয়। রো ও কলামের জন্য আলাদা দূরত্বও দেওয়া যায়, যেমন: \`gap: 20px 10px\` (২০ পিক্সেল উলম্ব ও ১০ পিক্সেল অনুভূমিক দূরত্ব)।
২. **Item Placement**: গ্রিড কলাম ও রোগুলো ১ থেকে শুরু হওয়া সূচক লাইনের সাহায্যে বিভক্ত থাকে। আইটেমের জায়গা বুক করতে নিচের প্রোপার্টিগুলো ব্যবহার করা হয়:
   - \`grid-column: startLine / endLine\`।
   - \`grid-row: startLine / endLine\`।
   - \`span\` কিওয়ার্ড ব্যবহার করে নির্দিষ্ট লাইন নম্বর না জানলেও কতটি সেল অতিক্রম করবে তা ঠিক করা যায় (যেমন: \`grid-column: span 2\` অর্থাৎ ২টি কলাম কভার করবে)।

### বাস্তব-ভিত্তিক উদাহরণ
ফিচার কার্ডের গ্রিডে যদি চান প্রথম কার্ডটি অনেক বড় হবে এবং ওপরের প্রথম তিনটি কলামের সমপরিমাণ জায়গা দখল করবে, তবে সেই কার্ডের স্টাইলে \`grid-column: span 3\` সেট করুন।

### উত্তম অনুশীলন
ডাইনামিক গ্রিড লেআউট তৈরির ক্ষেত্রে ফিক্সড লাইন নম্বর দেওয়ার বদলে \`span\` কিওয়ার্ড ব্যবহার করুন। এটি কোড মেইনটেইন করা অনেক সহজ করে তোলে।

### সাধারণ ভুলসমূহ
গ্রিড লাইন ১ থেকে শুরু হয় এবং এটি সেলের মধ্যকার বাউন্ডারি লাইন নির্দেশ করে তা ভুলে যাওয়া। ৩ কলাম বিশিষ্ট গ্রিডে লাইনের সংখ্যা হবে ৪টি।

### কোড উদাহরণ
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* ৩টি সমান কলাম */
  gap: 15px;
}

/* এই চাইল্ড আইটেমটি প্রথম ২টি কলাম জুড়ে থাকবে */
.featured-card {
  grid-column: 1 / 3;
  grid-row: span 2; /* উলম্বভাবে ২টি রো এর সমান জায়গা নেবে */
}
\`\`\``
  },
  {
    id: 'css-33',
    title: 'Explain the difference between auto-fit and auto-fill in CSS Grid repeat().',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Grid', 'Responsive', 'Layout'],
    enAnswer: 'Both auto-fit and auto-fill generate columns based on container width. The difference occurs when there are fewer items than available column tracks: auto-fill leaves empty tracks, while auto-fit collapses the empty tracks and stretches the remaining items to fill the container.',
    bnAnswer: 'auto-fit এবং auto-fill উভয়ই কন্টেইনারের উইডথ অনুযায়ী কলাম তৈরি করে। পার্থক্যটি তৈরি হয় যখন কন্টেইনারের খালি ট্র্যাকের চেয়ে আইটেম সংখ্যা কম থাকে: auto-fill খালি ট্র্যাকগুলো ফাঁকা রেখে দেয়, কিন্তু auto-fit খালি ট্র্যাকগুলোকে সংকুচিত করে বাকি আইটেমগুলোকে বাড়িয়ে পুরো স্পেস ভরাট করে।',
    enExplanation: `### Explanation
When defining columns dynamically using \`repeat(auto-fill/auto-fit, minmax(minSize, 1fr))\`, the browser calculates columns based on the container width:
- **\`auto-fill\`**: Fills the row with as many columns as possible. If you only have 2 items in a container that can hold 5 columns, the browser still generates 5 column tracks, leaving the remaining 3 columns as empty spaces on the right.
- **\`auto-fit\`**: Fills the row but collapses empty column tracks. If you have 2 items in a container that has room for 5 columns, the empty columns collapse to \`0px\`. The remaining items expand to fill the entire container width (due to \`1fr\`).

### Real-World Example
If you are designing a product grid card container where you want cards to expand to fill the screen width when there are only 1 or 2 search result cards available, use \`auto-fit\`. If you want cards to stay exactly at their minimum size (e.g. 250px) and not expand, use \`auto-fill\`.

### Best Practice
Use \`auto-fit\` for card grids. This gives a neat full-width layout when there are only a few items.

### Common Mistakes
Using fixed pixel values instead of \`minmax()\` inside the auto-fit parameter, which breaks responsive wrapping features.

### Code Example
\`\`\`css
/* Stretches remaining items to fill the row */
.fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* Leaves empty slot tracks if items are few */
.fill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`repeat(auto-fill/auto-fit, minmax(minSize, 1fr))\` দিয়ে ডাইনামিক কলাম বানানোর সময় ব্রাউজার কন্টেইনার উইডথ মেপে কলাম সংখ্যা ঠিক করে:
- **\`auto-fill\`**: এটি লাইনে সম্ভাব্য সর্বোচ্চ সংখ্যক কলাম তৈরি করে। কন্টেইনারে যদি ৫টি কলামের জায়গা থাকে এবং আপনার কাছে কেবল ২টি আইটেম থাকে, তবে এটি পেজের ডানে বাকি ৩টি কলামের খালি জায়গা ধরে রাখবে।
- **\`auto-fit\`**: এটিও কলাম তৈরি করে তবে ফাঁকা কলাম ট্র্যাকগুলোকে সংকুচিত (collapse) করে ফেলে। ৫টি কলামের জায়গায় ২টি আইটেম থাকলে খালি ৩টি কলামের প্রস্থ \`0px\` হয়ে যায় এবং বর্তমান ২টি কলাম উইডথ বাড়িয় পুরো স্ক্রিন জুড়ে জায়গা নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোডাক্ট গ্রিডে সার্চ রেজাল্ট যদি মাত্র ২টি প্রোডাক্ট কার্ড রিটার্ন করে এবং আপনি চান সেগুলি স্ক্রিন জুড়ে চওড়া হয়ে থাকবে, তবে \`auto-fit\` ব্যবহার করুন। আর যদি চান তারা ছোট আকারেই (যেমন ২৫০ পিক্সেল) বাম পাশে বসে থাকবে এবং ডানের জায়গা খালি থাকবে, তবে \`auto-fill\` ব্যবহার করুন।

### উত্তম অনুশীলন
কার্ড গ্রিডের জন্য \`auto-fit\` ব্যবহার করুন। এটি আইটেম সংখ্যা কম থাকলেও পুরো পেজের লেআউট ভরাট রাখে এবং দেখতে ভালো দেখায়।

### সাধারণ ভুলসমূহ
auto-fit বা auto-fill এর সাথে \`minmax()\` ব্যবহার না করে ফিক্সড পিক্সেল ব্যবহার করা, যার ফলে রেসপনসিভ ব্রোকিং সমস্যা সমাধান হয় না।

### কোড উদাহরণ
\`\`\`css
/* কম আইটেম থাকলে বাকি অংশ চওড়া হয়ে কভার করবে */
.fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* কম আইটেম থাকলেও কলামের ফিক্সড সাইজ বজায় রেখে ডানের জায়গা খালি রাখবে */
.fill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
\`\`\``
  },
  {
    id: 'css-34',
    title: 'Explain Grid area naming using grid-template-areas.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Grid', 'Layout', 'Architecture'],
    enAnswer: 'grid-template-areas assigns text names to grid cells, creating a visual layout map in CSS. Items are placed into these named regions using the grid-area property.',
    bnAnswer: 'grid-template-areas গ্রিডের সেলগুলোতে টেক্সট নাম নির্ধারণ করে একটি ভিজ্যুয়াল লেআউট ম্যাপ তৈরি করে। grid-area প্রোপার্টি ব্যবহার করে আইটেমগুলোকে এই নামাঙ্কিত অঞ্চলে প্লেস করা হয়।',
    enExplanation: `### Explanation
\`grid-template-areas\` allows you to layout web pages using intuitive visual ASCII-like templates inside your CSS files:
1. Define the grid outline map on the parent container using text names for each cell. Rows are enclosed in quotes.
2. An empty cell or spacer is represented using a dot (\`.\`).
3. Apply \`grid-area: name\` to child elements to snap them into their respective named locations on the template.

### Real-World Example
Consider a standard page layout (Header, Sidebar, Main Content, Footer):
We can map this layout in CSS as:
\`\`\`css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
\`\`\`

### Best Practice
Keep names simple and semantic. When designing responsive layouts, you can change the entire page arrangement inside mobile media queries by simply rewriting the parent's \`grid-template-areas\` layout map without editing the child classes.

### Common Mistakes
Forgetting that each row in the template must have the **exact same number of columns**, otherwise the browser parser rejects the entire layout declaration as invalid.

### Code Example
\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 10px;
}

header { grid-area: header; }
aside { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`grid-template-areas\` প্রোপার্টি আপনাকে সিএসএস কোডের ভেতরেই টেক্সট নাম ব্যবহার করে একটি ভিজ্যুয়াল লেআউটের কঙ্কাল আঁকার সুযোগ দেয়:
১. প্যারেন্ট কন্টেইনারে গ্রিডের কলাম ও রো বরাবর সেলের নাম দিয়ে ম্যাপ সাজান। প্রতিটি রোকে ডাবল কোটেশনের মধ্যে লিখতে হবে।
২. কোনো সেল ফাঁকা বা খালি স্পেস রাখতে চাইলে ডট (\`.\`) চিহ্ন ব্যবহার করুন।
৩. চাইল্ড আইটেমগুলোতে \`grid-area: name\` প্রোপার্টি ডিক্লেয়ার করলে তারা অটোমেটিক ওই নামের জোনে প্লেস হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাধারণ ওয়েব পেজে (হেডার, সাইডবার, মেইন কন্টেন্ট, ফুটার) লেআউটের জন্য সিএসএস ম্যাপটি এভাবে সাজানো যায়:
\`\`\`css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
\`\`\`

### উত্তম অনুশীলন
আইটেমের নাম সহজ ও প্রাসঙ্গিক রাখুন। রেসপনসিভ ডিজাইনে মোবাইল মিডিয়া কোয়েরির ভেতরে শুধুমাত্র প্যারেন্টের \`grid-template-areas\` ম্যাপ পরিবর্তন করে পুরো পেজের স্ট্রাকচার (যেমন সাইডবার নিচে নামানো) এক লাইনে বদলে দেওয়া যায়।

### সাধারণ ভুলসমূহ
টেমপ্লেটের প্রতি সারিতে কলামের সংখ্যা অসমান হওয়া। প্রতিটি সারিতে সেলের সংখ্যা অবশ্যই সমান হতে হবে, অন্যথায় ব্রাউজার পুরো গ্রিড ম্যাপটি বাতিল করে দেবে।

### কোড উদাহরণ
\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 10px;
}

header { grid-area: header; }
aside { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }
\`\`\``
  },
  {
    id: 'css-35',
    title: 'Explain the minmax() function in CSS Grid.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Grid', 'Layout', 'Sizing'],
    enAnswer: 'The minmax() function defines a size range for a grid track. It guarantees that the track height or width will be at least the min value and at most the max value depending on container space.',
    bnAnswer: 'minmax() ফাংশন গ্রিড ট্র্যাকের সাইজের একটি নির্দিষ্ট সীমা নির্ধারণ করে। এটি নিশ্চিত করে যে কন্টেইনারের স্পেস অনুযায়ী ট্র্যাকের উইডথ বা হাইট সর্বনিম্ন (min) মানের নিচে যাবে না এবং সর্বোচ্চ (max) মানের ওপরে উঠবে না।',
    enExplanation: `### Explanation
The \`minmax(min, max)\` function is a CSS Grid function used in \`grid-template-columns\` or \`grid-template-rows\`. It ensures dynamic sizing constraints:
- **Min Value**: The track cannot shrink below this size (e.g. \`200px\`, \`min-content\`).
- **Max Value**: The track cannot expand beyond this size (e.g. \`1fr\`, \`max-content\`, \`500px\`).

Commonly used in responsive designs to prevent layouts from collapsing. For example, \`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))\` allows columns to grow to fill screen space, but as soon as they shrink below 250px, they break and wrap into a new line.

### Real-World Example
In a product directory list, setting card size constraints with \`minmax(200px, 1fr)\` ensures cards stay at a minimum legible size (200px) on mobile view, while stretching out nicely to fill remaining space on large desktop screens.

### Best Practice
Combine \`minmax()\` with \`1fr\` as the maximum limit so that columns expand dynamically to share remaining browser window space.

### Common Mistakes
Setting the minimum value in \`minmax()\` to a fraction unit (e.g. \`minmax(1fr, 300px)\`), which throws a CSS syntax error. The minimum value cannot be a fractional \`fr\` unit.

### Code Example
\`\`\`css
.responsive-gallery {
  display: grid;
  /* Min width: 250px, Max width: fills remaining space */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`minmax(min, max)\` ফাংশনটি গ্রিডের রো বা কলাম নির্ধারণের সময় ট্র্যাক সাইজের সীমা নিয়ন্ত্রণ করে:
- **Min Value (সর্বনিম্ন)**: ট্র্যাকটি এই সাইজের নিচে সংকুচিত হতে পারবে না (যেমন: \`200px\`, \`min-content\`)।
- **Max Value (সর্বোচ্চ)**: ট্র্যাকটি এই সীমার বেশি বড় হতে পারবে না (যেমন: \`1fr\`, \`500px\`)।

এটি মিডিয়া কোয়েরি ছাড়া রেসপনসিভ ওয়েবসাইট ডিজাইনে ব্যবহৃত হয়। উদাহরণস্বরূপ: \`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))\` দিলে কলাম স্ক্রিন সাইজ বড় হলে বড় হবে, কিন্তু ছোট হতে হতে ২৫০ পিক্সেলের নিচে পৌঁছামাত্র নিজে ভেঙে নতুন লাইনে চলে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ বা প্রোডাক্ট গ্যালারির কার্ডে \`minmax(200px, 1fr)\` দিলে মোবাইলে কলামের আকার সর্বনিম্ন ২০০ পিক্সেল থাকবে (যা কার্ডের লেখা পড়ার উপযোগী রাখে) এবং বড় মনিটরে সুন্দরভাবে ছড়িয়ে পুরো স্ক্রিন পূর্ণ করবে।

### উত্তম অনুশীলন
\`minmax()\` এর ম্যাক্সিমাম সাইজ লিমিটে \`1fr\` ব্যবহার করুন যাতে কলামগুলো কন্টেইনারের খালি জায়গা সুন্দরভাবে ভাগ করে নিয়ে অনুভূমিক স্ক্রলবার আসা বন্ধ করে।

### সাধারণ ভুলসমূহ
\`minmax()\` এর সর্বনিম্ন ভ্যালুতে ফ্রেকশনাল বা \`fr\` ইউনিট ব্যবহার করা (যেমন: \`minmax(1fr, 300px)\`)। এটি একটি ইনভ্যালিড সিনট্যাক্স। সর্বনিম্ন ভ্যালু কখনো \`fr\` হতে পারে না।

### কোড উদাহরণ
\`\`\`css
.responsive-gallery {
  display: grid;
  /* সর্বনিম্ন ২৫০ পিক্সেল, সর্বোচ্চ কন্টেইনারের বাকি অংশ */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\``
  },
  {
    id: 'css-36',
    title: 'Explain Flexbox flex-grow, flex-shrink, and flex-basis properties.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Layout', 'Item Properties'],
    enAnswer: 'These properties control child item sizing: flex-basis defines the initial size of the item. flex-grow specifies how much space the item absorbs when the container is wider. flex-shrink specifies how much the item shrinks when container space is tight.',
    bnAnswer: 'এই প্রোপার্টিগুলো চাইল্ড আইটেমের সাইজ নিয়ন্ত্রণ করে: flex-basis আইটেমের প্রাথমিক আকার নির্ধারণ করে। flex-grow নির্ধারণ করে কন্টেইনারে অতিরিক্ত জায়গা থাকলে আইটেমটি কতটুকু প্রসারিত হবে। flex-shrink নির্ধারণ করে জায়গা সংকুচিত হলে আইটেমটি কতটুকু চ্যাপ্টা হবে।',
    enExplanation: `### Explanation
These three properties are often declared together using the \`flex\` shorthand (\`flex: grow shrink basis\`):
1. **\`flex-basis\`**: Sets the initial main size of a flex item before free space is distributed. Can be an absolute value (e.g. \`200px\`, \`15rem\`) or \`auto\` (default, looks at width/height or content).
2. **\`flex-grow\`**: Defines the ability of a flex item to grow if the parent container has remaining empty space. Expressed as a unitless factor (e.g. \`1\`, \`2\`). If two items have \`flex-grow: 1\` and \`flex-grow: 2\`, the second item absorbs twice as much empty space.
3. **\`flex-shrink\`**: Defines the ability of a flex item to shrink if the parent container space overflows. Default is \`1\` (items will shrink to prevent overflow). Set to \`0\` to prevent the item from shrinking.

### Real-World Example
If you are designing a chat app window, you want the input message box to expand to fill the entire remaining horizontal width of the input row, while the "Send" button stays fixed at its native width. You set \`flex-grow: 1\` on the input bar, and \`flex-grow: 0\` (or \`flex: none\`) on the button.

### Best Practice
Always use the \`flex\` shorthand property (e.g. \`flex: 1 1 200px\`) rather than writing \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\` separately. The shorthand automatically configures default behaviors and safeguards against parsing bugs.

### Common Mistakes
Setting \`flex-grow: 1\` on sibling elements and expecting them to have exactly equal widths, even when their text contents differ. Remember: grow distributes *remaining* empty space, not absolute sizes. To force equal size, set \`flex-basis: 0\` or \`width: 0\`.

### Code Example
\`\`\`css
.chat-input-row {
  display: flex;
  gap: 10px;
}

.input-box {
  flex: 1 1 auto; /* grows, shrinks, default auto size */
}

.send-button {
  flex: 0 0 80px; /* fixed size, will never grow or shrink */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফ্লেক্সবক্স চাইল্ড আইটেমগুলোর সাইজিং কন্ট্রোল করতে এই তিনটি প্রোপার্টি সাধারণত একত্রে শর্টহ্যান্ড \`flex\` (\`flex: grow shrink basis\`) আকারে ব্যবহার করা হয়:
১. **\`flex-basis\`**: ফ্লেক্স আইটেমকে একটি প্রাথমিক বা প্রারম্ভিক আকার দেয়। এটি পিক্সেল (\`200px\`) বা রেম (\`15rem\`) হতে পারে অথবা \`auto\` (ডিফল্ট) হতে পারে।
২. **\`flex-grow\`**: প্যারেন্ট কন্টেইনারে ফাঁকা জায়গা থাকলে চাইল্ড আইটেমটি কতটা চওড়া বা বড় হবে তা নির্ধারণ করে। এটি ইউনিটলেস সংখ্যা দ্বারা প্রকাশ করা হয় (যেমন: \`1\`, \`2\`)। দুটি আইটেমের গ্রো যথাক্রমে ১ এবং ২ হলে, দ্বিতীয় আইটেমটি প্রথমটির তুলনায় দ্বিগুণ ফাঁকা জায়গা শোষণ করবে।
৩. **\`flex-shrink\`**: কন্টেইনারের সাইজ ছোট হলে চাইল্ড আইটেমটি কতটা সংকুচিত হবে তা ঠিক করে। ডিফল্ট ভ্যালু হলো \`1\` (অর্থাৎ আইটেম সংকুচিত হবে)। সংকুচিত হওয়া বন্ধ করতে \`0\` সেট করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চ্যাট অ্যাপের মেসেজ ইনপুট ফিল্ডে ইনপুট বক্সটি ফাঁকা জায়গা জুড়ে বড় হবে, কিন্তু "Send" বাটনটি তার নির্দিষ্ট উইডথেই স্থির থাকবে। এজন্য ইনপুট বক্সে \`flex-grow: 1\` এবং বাটনে \`flex-grow: 0\` (বা \`flex: none\`) ব্যবহার করা হয়।

### উত্তম অনুশীলন
আলাদা আলাদা না লিখে প্রোপার্টি তিনটিকে একসাথে শর্টহ্যান্ড হিসেবে লিখুন (যেমন: \`flex: 1 1 200px\`)। এটি ফালব্যাক ক্যালকুলেশন এবং ব্রাউজার কম্প্যাটিবিলিটির জন্য সেরা প্র্যাকটিস।

### সাধারণ ভুলসমূহ
ভেতরের টেক্সট কন্টেন্ট ভিন্ন হওয়া সত্ত্বেও ডিক্লেয়ারেশনে \`flex-grow: 1\` লিখে দুটি এলিমেন্টের উইডথ সমান হবে আশা করা। মনে রাখবেন: গ্রো শুধুমাত্র *ফাঁকা স্পেস* বন্টন করে। নিখুঁত সমান উইডথ করতে হলে \`flex-basis: 0\` বা \`width: 0\` দিতে হবে।

### কোড উদাহরণ
\`\`\`css
.chat-input-row {
  display: flex;
  gap: 10px;
}

.input-box {
  flex: 1 1 auto; /* প্রয়োজন অনুযায়ী বড় ও ছোট হবে */
}

.send-button {
  flex: 0 0 80px; /* ফিক্সড ৮০ পিক্সেল সাইজ, কখনো বড় বা ছোট হবে না */
}
\`\`\``
  },
  {
    id: 'css-37',
    title: 'Explain Flexbox centering techniques.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Layout', 'Centering'],
    enAnswer: 'To center an item perfectly vertically and horizontally inside a container, set display: flex, justify-content: center, and align-items: center. Alternatively, setting display: flex on the parent and margin: auto on the child centers it.',
    bnAnswer: 'কন্টেইনারের ভেতরে কোনো উপাদানকে অনুভূমিক ও উলম্ব উভয়ভাবে পুরোপুরি সেন্টারিং বা মাঝে আনতে display: flex, justify-content: center, এবং align-items: center সেট করতে হয়। অথবা চাইল্ডে margin: auto ব্যবহার করলেও মাঝে চলে আসে।',
    enExplanation: `### Explanation
CSS historically struggled with centering elements, particularly vertically. Flexbox solved this with two main techniques:
1. **Container Centering (Alignment properties)**:
   - Apply \`display: flex\` to the parent container.
   - Apply \`justify-content: center\` to align the child horizontally along the main axis.
   - Apply \`align-items: center\` to align the child vertically along the cross axis.
2. **Child Margin Auto Centering**:
   - Set the parent container to \`display: flex\`.
   - Apply \`margin: auto\` to the child element. Flexbox alters \`margin: auto\` behavior so that vertical and horizontal margin values absorb all remaining free space, centering the child perfectly.

### Real-World Example
When creating a centered confirmation dialog popup modal, setting the background overlay wrapper container to \`display: flex\` with \`justify-content: center\` and \`align-items: center\` positions the white dialog box in the exact middle of the screen.

### Best Practice
Use the Container method (\`justify-content: center\`, \`align-items: center\`) for layouts with multiple centered child items. Use the \`margin: auto\` child method when you want to push a single element (e.g. footer down, or avatar to center) dynamically.

### Common Mistakes
Forgetting that vertical centering requires the parent container to have a height (like \`min-height: 100vh\` or a fixed pixel height), otherwise the parent collapses around the child and no vertical center space is available.

### Code Example
\`\`\`css
/* Method 1: Container based */
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Necessary for vertical center height */
}

/* Method 2: Child margin auto */
.container {
  display: flex;
  height: 400px;
}
.centered-child {
  margin: auto; /* Centers itself vertically and horizontally */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিএসএস-এ পূর্বে সেন্টারিং বা মাঝে আনা বেশ জটিল ছিল, বিশেষ করে উলম্ব (vertical) সেন্টারিং। ফ্লেক্সবক্স আসার পর এটি অত্যন্ত সহজ হয়ে গেছে:
১. **প্যারেন্ট কন্টেইনার মেথড (Alignment properties)**:
   - প্যারেন্ট এলিমেন্টে \`display: flex\` দিন।
   - অনুভূমিকভাবে মাঝে আনতে \`justify-content: center\` দিন।
   - উল্লম্বভাবে মাঝে আনতে \`align-items: center\` দিন।
২. **চাইল্ড মার্জিন অটো মেথড (margin: auto)**:
   - প্যারেন্ট কন্টেইনারে \`display: flex\` দিন।
   - চাইল্ড এলিমেন্টে \`margin: auto\` দিন। ফ্লেক্সবক্সে মার্জিন অটো চারপাশের সব ফাঁকা জায়গা সমানভাবে শোষণ করে চাইল্ডটিকে ঠিক মাঝখানে বসায়।

### বাস্তব-ভিত্তিক উদাহরণ
কনফার্মেশন ডায়ালগ বা সাকসেস মেসেজের পপ-আপ মডাল স্ক্রিনের ঠিক মাঝখানে বসাতে ব্যাকগ্রাউন্ড ওভারলে র‍্যাপারে \`display: flex\`, \`justify-content: center\` এবং \`align-items: center\` দেওয়া হয়।

### উত্তম অনুশীলন
একাধিক চাইল্ড আইটেমকে মাঝে বসাতে প্যারেন্ট কন্টেইনার পদ্ধতি ব্যবহার করুন। যদি ফ্লেক্স লেআউটে নির্দিষ্ট একটি এলিমেন্টকে এক কোণায় ঠেলে দিতে চান (যেমন নেভবারে ইউজার ছবি ডানে ঠেলে দেওয়া), তবে চাইল্ডে \`margin-left: auto\` বা \`margin: auto\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
উল্লম্ব বা ভার্টিক্যাল সেন্টারিং করার সময় প্যারেন্ট এলিমেন্টের কোনো ফিক্সড বা ন্যূনতম উচ্চতা (\`height\` / \`min-height\`) না দেওয়া। উচ্চতা না থাকলে কন্টেইনারটি চাইল্ডের সাইজে সংকুচিত হয়ে যায়, ফলে ভার্টিক্যাল স্পেস থাকে না।

### কোড উদাহরণ
\`\`\`css
/* পদ্ধতি ১: কন্টেইনার ভিত্তিক */
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* ভার্টিক্যাল হাইটের জন্য আবশ্যক */
}

/* পদ্ধতি ২: চাইল্ড মার্জিন অটো */
.container {
  display: flex;
  height: 400px;
}
.centered-child {
  margin: auto; /* স্বয়ংক্রিয়ভাবে কন্টেইনারের সেন্টারে বসবে */
}
\`\`\``
  },
  {
    id: 'css-38',
    title: 'Explain Media Queries and responsive design breakpoints.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Responsive', 'Media Queries', 'Breakpoints'],
    enAnswer: 'Media Queries apply CSS rules based on screen parameters like device width (min-width, max-width), height, or pixel density. Responsive breakpoints are screen widths where layout styles change to fit the screen.',
    bnAnswer: 'মিডিয়া কোয়েরি (Media Queries) স্ক্রিনের প্যারামিটার (যেমন min-width, max-width, উচ্চতা) অনুযায়ী স্টাইল কার্যকর করে। রেসপনসিভ ব্রেকপয়েন্ট হলো নির্দিষ্ট স্ক্রিন উইডথ বা প্রস্থ যেখানে পেজ লেআউট পরিবর্তন হয়ে স্ক্রিনে ফিট হয়।',
    enExplanation: `### Explanation
Media Queries are a core feature of responsive web design. They allow developers to create custom styles depending on device characteristics:
- **Mobile-First Approach**: Styles are written for mobile devices first. Media queries with \`min-width\` are then added to layer additional styles as screen width increases.
- **Desktop-First Approach**: Styles are written for desktops first. Media queries with \`max-width\` are added to adjust styles downwards for smaller screens.

**Common Breakpoint Standards**:
- Mobile Portrait: \`320px\` - \`480px\`
- Tablets: \`768px\` - \`1024px\`
- Laptops/Desktops: \`1024px\` and above.

### Real-World Example
If you are designing a website with a 3-column layout on desktop, it will look cramped on mobile phones. You write media queries to display the columns as a single vertical block row below a \`768px\` screen width breakpoint.

### Best Practice
Design mobile-first. Use relative units like \`em\` or \`rem\` for media query breakpoint values rather than hardcoded pixel values (e.g. \`@media (min-width: 48em)\` instead of \`768px\`). This adapts cleanly if the user changes default browser text scaling settings.

### Common Mistakes
Forgetting to include the responsive viewport meta tag (\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`) in your HTML document header, which causes mobile browsers to render desktop layouts scaled down and unreadable.

### Code Example
\`\`\`css
/* Base Mobile Styles (Mobile-first) */
.product-card {
  width: 100%;
}

/* Tablet screens and up */
@media (min-width: 48rem) { /* 768px */
  .product-card {
    width: 50%;
  }
}

/* Desktop screens and up */
@media (min-width: 64rem) { /* 1024px */
  .product-card {
    width: 33.33%;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মিডিয়া কোয়েরি হলো রেসপনসিভ ওয়েব ডিজাইনের মূল চালিকাশক্তি। এটি ডিভাইস স্ক্রিনের বৈশিষ্ট্য মেপে মানানসই সিএসএস রুলস ট্রিগার করে:
- **Mobile-First Approach**: প্রথমে মোবাইল স্ক্রিনের জন্য স্টাইল লেখা হয়। এরপর স্ক্রিন উইডথ বাড়ার সাথে সাথে অতিরিক্ত ডিজাইন বা কলাম যোগ করতে \`min-width\` মিডিয়া কোয়েরি ব্যবহার করা হয়।
- **Desktop-First Approach**: প্রথমে বড় বা ডেক্সটপ স্ক্রিনের জন্য সিএসএস লিখে পরে ছোট ডিভাইসে এডজাস্ট করতে \`max-width\` কোয়েরি ব্যবহার করা হয়।

**সাধারণ ব্রেকপয়েন্ট স্ট্যান্ডার্ড**:
- মোবাইল: \`320px\` থেকে \`480px\`।
- ট্যাবলেট: \`768px\` থেকে \`1024px\`।
- ল্যাপটপ/ডেস্কটপ: \`1024px\` এর ওপরে।

### বাস্তব-ভিত্তিক উদাহরণ
ডেস্কটপে ৩ কলামের একটি প্রোডাক্ট গ্রিড মোবাইলের সরু স্ক্রিনে দেখতে খুবই হিজিবিজি লাগবে। মিডিয়া কোয়েরির সাহায্যে ব্রেকপয়েন্ট (\`@media (max-width: 768px)\`) সেট করে কলামগুলোকে ভেঙে নিচে নিচে একটি রোতে সাজানো হয়।

### উত্তম অনুশীলন
মোবাইল-ফার্স্ট ডিজাইনের প্র্যাকটিস অনুসরণ করুন। ব্রেকপয়েন্ট নির্ধারণে ফিক্সড পিক্সেলের পরিবর্তে আপেক্ষিক ইউনিট ব্যবহার করা (যেমন \`@media (min-width: 48em)\`) বেশি উপযুক্ত, কারণ ব্যবহারকারী ব্রাউজার ফন্ট জুম করলেও এটি লেআউটকে সুন্দরভাবে বজায় রাখে।

### সাধারণ ভুলসমূহ
HTML ডকুমেন্টের হেডারে ভিউপোর্ট মেটা ট্যাগ (\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`) যুক্ত করতে ভুলে যাওয়া। এটি না থাকলে মোবাইল ব্রাউজারগুলো ডেস্কটপ পেজকে জুম-আউট করে অত্যন্ত ছোট টেক্সটে দেখায়।

### কোড উদাহরণ
\`\`\`css
/* বেস মোবাইল স্টাইল (মোবাইল-ফার্স্ট) */
.product-card {
  width: 100%;
}

/* ট্যাবলেট স্ক্রিনের ওপরে */
@media (min-width: 48rem) { /* 768px */
  .product-card {
    width: 50%;
  }
}

/* ডেস্কটপ স্ক্রিনের ওপরে */
@media (min-width: 64rem) { /* 1024px */
  .product-card {
    width: 33.33%;
  }
}
\`\`\``
  },
  {
    id: 'css-39',
    title: 'Explain CSS Transitions and their configuration parameters.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Transitions', 'Animations', 'Visuals'],
    enAnswer: 'CSS Transitions enable smooth changes of CSS property values over a specified duration. They are configured using four properties: transition-property, transition-duration, transition-timing-function, and transition-delay.',
    bnAnswer: 'CSS ট্রানজিশন কোনো সিএসএস প্রোপার্টির মান পরিবর্তনকে একটি নির্দিষ্ট সময়ের ব্যবধানে মসৃণভাবে অ্যানিমেট করে। এটি ৪টি প্যারামিটার দিয়ে কনফিগার করা হয়: transition-property, transition-duration, transition-timing-function, এবং transition-delay।',
    enExplanation: `### Explanation
CSS Transitions interpolate property changes smoothly over time instead of changing them instantly. It requires a trigger (like a \`:hover\` hover state or JS class swap).
**Configuration Properties**:
1. **\`transition-property\`**: The name of the CSS property you want to animate (e.g. \`background-color\`, \`transform\`). Avoid using \`all\` to improve V8 rendering efficiency.
2. **\`transition-duration\`**: The length of time the animation takes to complete (e.g. \`0.3s\`, \`300ms\`).
3. **\`transition-timing-function\`**: Defines the speed curve of the transition:
   - \`ease\`: Slow start, fast middle, slow end (default).
   - \`linear\`: Same speed start to end.
   - \`ease-in\`: Slow start.
   - \`ease-out\`: Slow end.
   - \`cubic-bezier(p1, p2, p3, p4)\`: Fully custom timing curves.
4. **\`transition-delay\`**: Time to wait before executing the animation.

### Real-World Example
When hovering over an interactive call-to-action button, smoothly morphing the button's background-color and raising it slightly using a transform transition creates a premium tactile feel.

### Best Practice
Optimize performance by transitioning only GPU-accelerated properties, which are **\`transform\`** and **\`opacity\`**. Animating layout properties (like \`width\`, \`height\`, or \`margin\`) triggers document reflows and ruins animation frame rates.

### Common Mistakes
Transitioning \`all\` properties (\`transition: all 0.3s\`) on complex pages, causing layout calculations lag because the browser attempts to track and animate every property of the element.

### Code Example
\`\`\`css
.btn {
  background-color: #4f46e5;
  color: white;
  transform: translateY(0);
  /* Configure transition properties explicitly */
  transition: background-color 0.2s ease-in-out, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  background-color: #3730a3;
  transform: translateY(-4px); /* Moves button up slightly */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS ট্রানজিশন কোনো সিএসএস প্রোপার্টির পরিবর্তনকে তাত্ক্ষণিকভাবে রূপান্তরের বদলে সময়ের ব্যবধানে ধাপে ধাপে পরিবর্তন করে মসৃণতা আনে। এর জন্য একটি ট্রিগার (যেমন \`:hover\` বা JS ক্লাস চেঞ্জ) প্রয়োজন হয়।
**কনফিগারেশন প্রোপার্টিজ**:
১. **\`transition-property\`**: যে প্রোপার্টিটি অ্যানিমেট করবেন তার নাম (যেমন: \`background-color\`, \`transform\`)। কর্মক্ষমতা বাড়াতে \`all\` লেখা পরিহার করুন।
২. **\`transition-duration\`**: অ্যানিমেশন শেষ হতে কত সময় লাগবে (যেমন: \`0.3s\`, \`300ms\`)।
৩. **\`transition-timing-function\`**: রূপান্তরের গতির কার্ভ বা স্পিড টাইমিং ঠিক করে:
   - \`ease\`: ধীরে শুরু, মাঝে দ্রুত, শেষে আবার ধীর (ডিফল্ট)।
   - \`linear\`: শুরু থেকে শেষ পর্যন্ত একই গতি।
   - \`ease-in\`: ধীরে শুরু হওয়া।
   - \`ease-out\`: ধীরে শেষ হওয়া।
   - \`cubic-bezier(x1, y1, x2, y2)\`: কাস্টম এক্সিলারেটর কার্ভ তৈরির উপায়।
৪. **\`transition-delay\`**: রূপান্তর শুরুর আগে কতক্ষণ অপেক্ষা করতে হবে তা ঠিক করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বাটনের ওপরে মাউস রাখলে বাটনের রঙ এবং উচ্চতা (transform) যদি লাফ দিয়ে পরিবর্তন না হয়ে ০.২ সেকেন্ড ধরে আস্তে করে পরিবর্তিত হয়, তবে ইন্টারফেসটি অনেক প্রিমিয়াম ও ইন্টারঅ্যাক্টিভ মনে হয়।

### উত্তম অনুশীলন
অ্যানিমেশন পারফরম্যান্স ভালো রাখতে কেবল জিপিইউ-অ্যাসিস্টেড প্রোপার্টিজ যেমন **\`transform\`** এবং **\`opacity\`** ট্রানজিশন করুন। উইডথ, হাইট বা মার্জিন অ্যানিমেট করলে ব্রাউজারকে রিফ্লো (Reflow) করতে হয়, যা ফ্রেম রেট কমিয়ে দেয়।

### সাধারণ ভুলসমূহ
প্রজেক্টে অলসতা করে \`transition: all 0.3s\` ব্যবহার করা। এর ফলে বাটন বা এলিমেন্টের পেছনের অগণিত হিডেন প্রোপার্টিজ অ্যানিমেট করার চেষ্টা করতে গিয়ে ব্রাউজার স্লো হয়ে যায়।

### কোড উদাহরণ
\`\`\`css
.btn {
  background-color: #4f46e5;
  color: white;
  transform: translateY(0);
  /* ট্রানজিশন প্রোপার্টি আলাদাভাবে নির্দিষ্ট করুন */
  transition: background-color 0.2s ease-in-out, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  background-color: #3730a3;
  transform: translateY(-4px); /* বাটনটিকে সামান্য ওপরে তুলবে */
}
\`\`\``
  },
  {
    id: 'css-40',
    title: 'Explain CSS Keyframe Animations and how they differ from Transitions.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Animations', 'Keyframes', 'Visuals'],
    enAnswer: 'CSS Keyframe Animations (@keyframes) allow complex, multi-stage animations that can run automatically on page load and loop infinitely. Transitions are simple two-state animations that require a user trigger.',
    bnAnswer: 'CSS কী-ফ্রেম অ্যানিমেশন (@keyframes) জটিল, বহু-ধাপ বিশিষ্ট অ্যানিমেশনের সুযোগ দেয় যা পেজ লোডের সাথে সাথে স্বয়ংক্রিয়ভাবে চলতে পারে এবং লুপ করতে পারে। ট্রানজিশন কেবল দুটি অবস্থার মধ্যকার রূপান্তর এবং এর জন্য ইউজারের ট্রিগার প্রয়োজন।',
    enExplanation: `### Explanation
While transitions animate between a start and end state, Keyframe Animations allow you to control intermediate steps using the \`@keyframes\` rule:
1. **\`@keyframes\`**: Defines the sequence rules. Uses percentages (\`0%\`, \`50%\`, \`100%\`) or aliases (\`from\` and \`to\`) to set properties at specific progress points.
2. **Animation properties**: Applied to the element to control execution:
   - \`animation-name\`: The name of the \`@keyframes\` rule.
   - \`animation-duration\`: Sizing duration.
   - \`animation-iteration-count\`: How many times to repeat (\`1\`, \`infinite\`).
   - \`animation-direction\`: Forward, backward, or alternating loop directions.
   - \`animation-fill-mode\`: Controls style behavior before/after animation executes (e.g. \`forwards\` pins the final frame styles).

### Real-World Example
For a loading spinner widget overlay, you set a \`@keyframes spin { to { transform: rotate(360deg); } }\` rule. Then apply \`animation: spin 1s linear infinite;\` on the loading circle element so it rotates forever without stopping.

### Best Practice
Always set \`animation-fill-mode: forwards\` when you want the animated element to stay in its final state when the animation finishes. Without this, the element snaps back to its starting styles immediately.

### Common Mistakes
Forgetting that animations running infinitely on the main page can exhaust CPU performance, especially if animating layout layouts like margins or box-shadows.

### Code Example
\`\`\`css
/* Define animation sequence */
@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-dialog {
  /* name | duration | timing | iteration | fill-mode */
  animation: fadeInSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ট্রানজিশন কেবল দুটি স্টেট বা অবস্থার মধ্যে কাজ করে, কিন্তু কী-ফ্রেম অ্যানিমেশন (\`@keyframes\`) ব্যবহার করে অ্যানিমেশনের মধ্যবর্তী অসংখ্য ধাপে ডিজাইন পরিবর্তন করা যায়:
১. **\`@keyframes\`**: এটি অ্যানিমেশনের সিকোয়েন্স বা ফ্রেমগুলো তৈরি করে। পারসেন্টেজ (\`0%\`, \`50%\`, \`100%\`) অথবা \`from\` এবং \`to\` ব্যবহার করে বিভিন্ন সময়ে এলিমেন্টের অবস্থা ঠিক করা হয়।
২. **অ্যানিমেশন প্রোপার্টিজ**: এলিমেন্টের ভেতর এই সিকোয়েন্সটি কীভাবে রান করবে তা কনফিগার করে:
   - \`animation-name\`: কী-ফ্রেম রুলের নাম।
   - \`animation-duration\`: অ্যানিমেশন কতক্ষণ ধরে চলবে।
   - \`animation-iteration-count\`: অ্যানিমেশন কতবার পুনরাবৃত্তি হবে (\`infinite\` মানে অবিরাম)।
   - \`animation-fill-mode\`: অ্যানিমেশন শেষ বা শুরু হওয়ার সময় এলিমেন্টের চেহারা কেমন থাকবে (\`forwards\` দিলে এটি শেষ ফ্রেমের রূপ ধরে রাখে)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেজ লোডার বা স্পিনার বানানোর জন্য কী-ফ্রেমে তৈরি করা হয়: \`@keyframes spin { to { transform: rotate(360deg); } }\`। এরপর স্পিনার এলিমেন্টে \`animation: spin 1s linear infinite;\` যোগ করলে এটি সারাক্ষণ ঘুরতে থাকে।

### উত্তম অনুশীলন
অ্যানিমেশন শেষ হওয়ার পর এলিমেন্টটি যেন তার শেষ অবস্থায় স্থির থাকে সে জন্য \`animation-fill-mode: forwards\` ব্যবহার করুন। অন্যথায় অ্যানিমেশন শেষ হওয়া মাত্র এলিমেন্টটি আবার ঝটকা দিয়ে আগের অবস্থায় ফিরে যাবে।

### সাধারণ ভুলসমূহ
পেজে একসাথে অনেকগুলো অবিরাম বা ইনফিনিট (\`infinite\`) অ্যানিমেশন চালানো। এটি ডিভাইসের প্রসেসর ও ব্যাটারি দ্রুত শেষ করে দেয়, বিশেষ করে মোবাইলে।

### কোড উদাহরণ
\`\`\`css
/* অ্যানিমেশন সিকোয়েন্স তৈরি */
@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-dialog {
  /* নাম | সময় | গতি | বার | ফিল-মোড */
  animation: fadeInSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards;
}
\`\`\``
  },
  {
    id: 'css-41',
    title: 'Explain CSS Custom Properties (Variables) and their inheritance.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Variables', 'Architecture', 'Theme'],
    enAnswer: 'CSS Custom Properties (Variables) are developer-defined values declared using double hyphens (--var-name: value). They are accessed using the var() function and follow cascading inheritance rules down the HTML DOM tree.',
    bnAnswer: 'CSS কাস্টম প্রোপার্টি (ভেরিয়েবল) হলো ডেভেলপার দ্বারা সংজ্ঞায়িত মান যা ডাবল হাইফেন (--var-name: value) দিয়ে ডিক্লেয়ার করা হয়। এগুলোকে var() ফাংশন দিয়ে অ্যাক্সেস করা হয় এবং এগুলো ডম ট্রির নিচের দিকে ইনহেরিটেন্স রুলস মেনে কাজ করে।',
    enExplanation: `### Explanation
CSS Variables are dynamic values that compile inside the browser at runtime (unlike Sass/Less variables which compile at build time):
- **Declaration**: Variables are declared using \`--\` prepended to the name. Typically declared inside the \`:root\` pseudo-class to make them globally accessible:
  \`\`\`css
  :root {
    --primary-color: #4f46e5;
  }
  \`\`\`
- **Usage**: Referenced using the \`var(--name, fallbackValue)\` function.
- **Cascading and Scope**: Variables are scoped to the selector they are declared in. If declared in \`.card\`, they are only available inside that card. Children inherit variable values unless overridden.

### Real-World Example
To support light and dark modes, you define colors in \`:root\`. When dark mode is active (e.g. \`html[data-theme="dark"]\`), you override those variable values. The rest of your stylesheet automatically updates color schemes without rewriting duplicate components rules.

### Best Practice
Always define fallback values inside your \`var()\` functions (e.g. \`color: var(--theme-color, #000)\`) to safeguard your layout in case the custom variable is missing or fails to load.

### Common Mistakes
Trying to use a variable declared in a specific child component globally or inside another unrelated component, resulting in fallback or broken values.

### Code Example
\`\`\`css
:root {
  --primary-color: #6366f1;
  --font-size-base: 1rem;
}

.dark-theme {
  --primary-color: #818cf8; /* Override for dark mode scope */
}

.card {
  /* Automatically inherits the primary color value based on parent classes */
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS ভেরিয়েবল বা কাস্টম প্রোপার্টি হলো ডাইনামিক ভ্যালু যা ব্রাউজারের ভেতর রানটাইমে কাজ করে (Sass ভেরিয়েবলের মতো বিল্ড টাইমে নয়):
- **ঘোষণা (Declaration)**: নামের শুরুতে ডাবল হাইফেন \`--\` দিয়ে ভেরিয়েবল তৈরি করা হয়। সাধারণত গ্লোবাল অ্যাক্সেস দেওয়ার জন্য এগুলোকে \`:root\` এর ভেতর রাখা হয়:
  \`\`\`css
  :root {
    --primary-color: #4f46e5;
  }
  \`\`\`
- **ব্যবহার (Usage)**: ভেরিয়েবলটি ব্যবহার করতে \`var(--name, fallbackValue)\` ফাংশন ব্যবহার করতে হয়।
- **স্কোপ এবং ইনহেরিটেন্স**: ভেরিয়েবলটি যে সিলেক্টরে ঘোষণা করা হয়েছে তার চাইল্ড এলিমেন্টগুলোর মধ্যে ইনহেরিটেন্স বা ক্যাসকেড নিয়মে কাজ করে। অন্য সিলেক্টরে ওভাররাইড না করলে এটি চাইল্ডে কার্যকর থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে ডার্ক এবং লাইট মোড করতে আপনি ভেরিয়েবল ব্যবহার করতে পারেন। ডার্ক মোড অ্যাক্টিভ হলে (\`html[data-theme="dark"]\`) রুট ভেরিয়েবলের কালার কোডগুলো পরিবর্তন করে দিন, পুরো পেজের ব্যাকগ্রাউন্ড ও টেক্সটের কালার অটোমেটিক আপডেট হয়ে যাবে।

### উত্তম অনুশীলন
ভেরিয়েবল কল করার সময় সবসময় একটি ফালব্যাক ভ্যালু রাখুন (যেমন: \`color: var(--theme-color, #000)\`) যাতে কোনো কারণে ভেরিয়েবলটি লোড না হলে ডিজাইন ভেঙে না যায়।

### সাধারণ ভুলসমূহ
একটি চাইল্ড এলিমেন্টের ভেতরে ভেরিয়েবল ডিক্লেয়ার করে তা গ্লোবালি অ্যাক্সেস করার চেষ্টা করা, যা ব্রাউজারে কাজ করবে না।

### কোড উদাহরণ
\`\`\`css
:root {
  --primary-color: #6366f1;
  --font-size-base: 1rem;
}

.dark-theme {
  --primary-color: #818cf8; /* ডার্ক মোডের জন্য ভেরিয়েবল ওভাররাইড */
}

.card {
  /* প্যারেন্ট ক্লাসের ওপর ভিত্তি করে অটোমেটিক সঠিক থিমের ভ্যালু পাবে */
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
\`\`\``
  },
  {
    id: 'css-42',
    title: 'Explain Cascade Layers (@layer rule) in CSS.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Cascade Layers', 'Architecture', 'Specificity'],
    enAnswer: 'Cascade Layers (@layer) allow developers to organize CSS rules into distinct layers (such as reset, framework, components, utilities). The specificity ordering is determined by the layer declaration order, preventing specificity wars.',
    bnAnswer: 'ক্যাসকেড লেয়ার (@layer) ডেভেলপারদের তাদের সিএসএস কোডকে বিভিন্ন স্তরে (যেমন reset, framework, components, utilities) সাজানোর সুযোগ দেয়। লেয়ারের ক্রম অনুযায়ী সিএসএসের গুরুত্ব নির্ধারিত হয়, যা স্পেসিফিসিটির সংঘাত দূর করে।',
    enExplanation: `### Explanation
CSS Cascade Layers (\`@layer\`) solve the common problem of **specificity wars** in large codebases. In standard CSS, custom utility classes or third-party styles can override each other unexpectedly depending on selector specificity scores.
By declaring layers:
- You control the priority hierarchy. The order of layers dictates priority.
- Rules inside a higher layer (e.g. \`utilities\`) always override rules in a lower layer (e.g. \`base\`), **regardless of selector specificity**.
- This means a simple class selector \`.u-hide\` in the utility layer will easily override an ID selector \`#header\` defined in the base layer.

### Real-World Example
If you load a third-party UI library stylesheet and want to override a button style, you often write complex selectors with \`!important\`. Using cascade layers, you put the framework in a lower layer (\`framework\`) and your overrides in a higher layer (\`theme\`). Your overrides take priority naturally.

### Best Practice
Define the layer order early in your main CSS file (e.g. \`@layer base, components, utilities;\`). This sets the precedence stack cleanly before any styles are defined.

### Common Mistakes
Writing styles inside layers and expecting them to override non-layered styles. Remember: **non-layered styles always have the highest priority** and override layered styles.

### Code Example
\`\`\`css
/* Define Layer Order: base is lowest, utilities is highest */
@layer reset, framework, components, utilities;

@layer base {
  p {
    color: #333;
    font-size: 16px;
  }
}

@layer utilities {
  /* Even though this has low specificity, it overrides p tag colors because it is in a higher layer */
  .text-highlight {
    color: #ef4444;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS Cascade Layers (\`@layer\`) বড় প্রোজেক্টে স্পেসিফিসিটির লড়াই বন্ধ করার একটি আধুনিক মেথড। সাধারণ সিএসএসে সিলেক্টরের স্কোর অনুযায়ী কে কাকে ওভাররাইড করবে তা ঠিক হয়, যা মাঝে মাঝে জটিল পরিস্থিতির তৈরি করে।
লেয়ারের মাধ্যমে যেভাবে কোড ম্যানেজ করা হয়:
- আপনি নিজেই বিভিন্ন লেয়ারের অগ্রাধিকার বা প্রায়োরিটি স্ট্যাক তৈরি করেন। লেয়ারের ঘোষণাক্রম এটি নির্ধারণ করে।
- কোনো উচ্চ স্তরের লেয়ারের (যেমন \`utilities\`) স্টাইল নিম্ন স্তরের লেয়ারের (যেমন \`base\`) স্টাইলের ওপরে জয়ী হবে, **সিলেক্টরের স্পেসিফিসিটি স্কোর যাই হোক না কেন**।
- এর ফলে ইউটিলিটি লেয়ারের একটি অতি সাধারণ ক্লাস সিলেক্টর \`.u-hide\` বেস লেয়ারের জটিল আইডি সিলেক্টর \`#header\`-কে ওভাররাইড করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
ধরা যাক প্রজেক্টে একটি থার্ড-পার্টি সিএসএস লাইব্রেরি ব্যবহার করছেন এবং সেটির কোনো বাটনের স্টাইল পরিবর্তন করতে চান। আগে এর জন্য আপনাকে \`!important\` বা অনেক বড় সিলেক্টর লিখতে হতো। লেয়ার ব্যবহার করে আপনি লাইব্রেরিকে \`framework\` লেয়ারে এবং আপনার কোডকে \`theme\` লেয়ারে রাখলে আপনার স্টাইলটি স্বয়ংক্রিয়ভাবে কার্যকর হবে।

### উত্তম অনুশীলন
আপনার প্রধান সিএসএস ফাইলের শুরুতে লেয়ারের ক্রমানুসারী তালিকা ঘোষণা করে দিন (যেমন: \`@layer reset, components, utilities;\`)। এটি ডিজাইন স্ট্রাকচার পরিষ্কার রাখে।

### সাধারণ ভুলসমূহ
লেয়ারের ভেতরের স্টাইল লেয়ারের বাইরের স্টাইলকে ওভাররাইড করবে আশা করা। মনে রাখবেন: **লেয়ারের বাইরে থাকা সাধারণ সিএসএস রুলস সবসময় যেকোনো লেয়ারের স্টাইলের চেয়ে বেশি অগ্রাধিকার পায়**।

### কোড উদাহরণ
\`\`\`css
/* লেয়ারের অগ্রাধিকার নির্ধারণ: reset সবার নিচে, utilities সবার ওপরে */
@layer reset, framework, components, utilities;

@layer base {
  p {
    color: #333;
    font-size: 16px;
  }
}

@layer utilities {
  /* এর স্পেসিফিসিটি কম হলেও এটি p ট্যাগের কালার ওভাররাইড করবে কারণ এটি উচ্চ লেয়ারে আছে */
  .text-highlight {
    color: #ef4444;
  }
}
\`\`\``
  },
  {
    id: 'css-43',
    title: 'Explain native CSS Nesting and how it differs from preprocessors.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Nesting', 'Architecture', 'ESNext'],
    enAnswer: 'Native CSS Nesting allows nesting selectors directly within one another, identical to Sass. In modern native nesting, the ampersand (&) references the parent selector, but you can nest element tags directly without it.',
    bnAnswer: 'নেটিভ CSS Nesting সিলেক্টরগুলোকে সরাসরি একটির ভেতর আরেকটি নেস্ট বা লেখার সুযোগ দেয়, যা Sass এর মতোই কাজ করে। আধুনিক নেটিভ নেস্টিংয়ে অ্যাম্পারস্যান্ড (&) প্যারেন্ট সিলেক্টরকে নির্দেশ করে, তবে এটি ছাড়াও সরাসরি নেস্টিং করা যায়।',
    enExplanation: `### Explanation
Native CSS Nesting is a modern W3C standard now supported in all major browsers. It allows writing clean hierarchy structures directly in native \`.css\` files without compiling through preprocessors like Sass or Less:
- **Ampersand (\`&\`)**: References the parent selector. Used to attach pseudo-classes (like \`&:hover\`) or combine selectors (like \`&.active\`).
- **Nesting directly**: You can nest element selectors directly (e.g. \`span\` inside \`.card\`) without prepending the ampersand.
- **Difference from Preprocessors**: Preprocessors expand and duplicate parent strings during compilation. Native nesting is processed directly by the browser DOM, which parses nesting relationships dynamically, resulting in slightly smaller CSS file delivery sizes.

### Real-World Example
When styling a card with nested header, paragraph, and button classes, nesting keeps all rules visually bundled in one block, making codebase navigation clean.

### Best Practice
Use nesting to group pseudo-states (like hover, focus) and child elements that are isolated to a component block. Avoid nesting deeper than 3 levels to maintain readability.

### Common Mistakes
Nesting elements too deeply (e.g., 5+ levels), which creates complex, tightly coupled CSS that is hard to reuse elsewhere.

### Code Example
\`\`\`css
/* Modern Native CSS Nesting */
.card {
  background-color: white;
  padding: 20px;
  
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.5rem;
    color: #111827;
  }
  
  button {
    background-color: blue;
    
    &.primary {
      background-color: indigo;
    }
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেটিভ CSS Nesting হলো একটি আধুনিক স্ট্যান্ডার্ড যা সব আধুনিক ব্রাউজারে সাপোর্ট করে। এর ফলে Sass বা Less এর মতো প্রিপ্রসেসর ছাড়াই সরাসরি সিএসএস ফাইলে নেস্টিং কোড লেখা যায়:
- **অ্যাম্পারস্যান্ড (\`&\`)**: প্যারেন্ট সিলেক্টরের রেফারেন্স দেয়। সিউডো-ক্লাস (\`&:hover\`) বা অন্য ক্লাস কম্বিনেশনের (\`&.active\`) জন্য এটি ব্যবহৃত হয়।
- **সরাসরি নেস্টিং**: চাইল্ড এলিমেন্টকে অ্যাম্পারস্যান্ড ছাড়াই সরাসরি প্যারেন্ট কার্লি ব্র্যাকেটের ভেতর নেস্ট করা যায়।
- **প্রিপ্রসেসরের সাথে পার্থক্য**: প্রিপ্রসেসর বিল্ড টাইমে পুরো চাইল্ড রুলস আলাদা ফাইলে এক্সপ্যান্ড বা কনভার্ট করে দেয়। নেটিভ নেস্টিং সরাসরি ব্রাউজার ডম দ্বারা ডাইনামিক্যালি রিড হয়, যা সিএসএস ফাইলের সাইজ কিছুটা ছোট রাখতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কার্ডের ভেতরের টাইটেল, প্যারাগ্রাফ এবং বাটনকে কার্ড সিলেক্টরের কার্লি ব্র্যাকেটের ভেতরেই একসাথে স্টাইল করলে কোড অর্গানাইজেশন খুব পরিচ্ছন্ন দেখায়।

### উত্তম অনুশীলন
বাটনের হোভার বা ফোকাস স্টাইল এবং কেবল কম্পোনেন্টে ব্যবহৃত চাইল্ড আইটেমের স্টাইলিংয়ের জন্য নেস্টিং ব্যবহার করুন। তবে ৩ লেভেলের বেশি গভীরে নেস্টিং না করার চেষ্টা করুন।

### সাধারণ ভুলসমূহ
অতিরিক্ত নেস্টিং করা (যেমন ৫ লেভেলের বেশি)। এটি সিএসএসকে জটিল করে তোলে এবং অন্যান্য এলিমেন্টে কোড রিইউজ করার ক্ষমতা নষ্ট করে।

### কোড উদাহরণ
\`\`\`css
/* আধুনিক নেটিভ সিএসএস নেস্টিং */
.card {
  background-color: white;
  padding: 20px;
  
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.5rem;
    color: #111827;
  }
  
  button {
    background-color: blue;
    
    &.primary {
      background-color: indigo;
    }
  }
}
\`\`\``
  },
  {
    id: 'css-44',
    title: 'Explain the aspect-ratio property and how it prevents layout shifts.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Layout', 'Aspect Ratio', 'Performance'],
    enAnswer: 'The aspect-ratio property sets a preferred width-to-height ratio for box elements. This allows the browser to calculate placeholder space for dynamic content (like images/videos) before they load, preventing Cumulative Layout Shift (CLS).',
    bnAnswer: 'aspect-ratio প্রোপার্টি এলিমেন্ট বক্সের জন্য একটি নির্দিষ্ট অনুপাত (width-to-height) নির্ধারণ করে। এর ফলে ব্রাউজার ইমেজ বা ভিডিও লোড হওয়ার আগেই তার প্রয়োজনীয় স্পেস নির্ধারণ করতে পারে, যা Cumulative Layout Shift (CLS) প্রতিরোধ করে।',
    enExplanation: `### Explanation
The \`aspect-ratio\` property defines a width-to-height ratio for elements. For example, \`aspect-ratio: 16 / 9\` or \`aspect-ratio: 1\` (square).
**How it prevents layout shifts (CLS)**:
Historically, if an image lacked height attributes, the browser rendered it at \`0px\` height initially. When the image loaded, the page suddenly jumped down.
By specifying \`width: 100%\` and \`aspect-ratio: 16 / 9\`, the browser calculates the height based on the width *before* downloading the image asset. It reserves a placeholder space, preventing text from jumping.

### Real-World Example
In a video streaming layout, setting \`aspect-ratio: 16 / 9\` on the player frame container reserves the correct size box so the page layout stays perfectly stable while the video player loads.

### Best Practice
Apply \`aspect-ratio\` to all dynamic images, card banners, and video containers. Combine this with \`object-fit: cover\` to ensure responsive images fit within the aspect box nicely.

### Common Mistakes
Forgetting that if you declare both fixed width and height on an element, the \`aspect-ratio\` property is ignored by the browser.

### Code Example
\`\`\`css
.responsive-video-container {
  width: 100%;
  aspect-ratio: 16 / 9; /* Reserves placeholder height automatically */
  background-color: #e5e7eb; /* Placeholder color before video loads */
}

.responsive-video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`aspect-ratio\` প্রোপার্টিটি একটি বাক্সের অনুপাত (যেমন প্রস্থ ও উচ্চতার রেশিও) ডিফাইন করে। যেমন: \`aspect-ratio: 16 / 9\` বা \`aspect-ratio: 1\` (বর্গাকার)।
**এটি কীভাবে লেআউট শিফট (CLS) বন্ধ করে**:
পূর্বে কোনো ইমেজের ফিক্সড হাইট না থাকলে ব্রাউজার ইমেজ ফাইলটি পুরোপুরি ডাউনলোড হওয়ার পূর্বে তার উচ্চতা ০ পিক্সেল ধরে রাখত। ইমেজটি লোড হওয়ার সাথে সাথে নিচের কন্টেন্টগুলো হঠাৎ নিচে লাফ দিয়ে নেমে যেত, যা খুবই বিরক্তিকর।
উইডথ \`100%\` এবং \`aspect-ratio: 16 / 9\` লিখে দিলে ব্রাউজার ইমেজ ডাউনলোড হওয়ার আগেই স্ক্রিনে সঠিক স্পেসটি দখল করে রাখে। ফলে কন্টেন্ট লাফ দেয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ভিডিও প্লেয়ারের জন্য \`aspect-ratio: 16 / 9\` সেট করে রাখলে প্লেয়ারটি লোড হওয়ার সময় চারপাশের টেক্সট লেআউট বিন্দুমাত্র নড়াচড়া করবে না এবং পেজ স্টেবিলিটি বজায় থাকবে।

### উত্তম অনুশীলন
ডাইনামিক ইমেজ ব্যানার, ভিডিও কন্টেইনার ও কার্ড গ্রিডে aspect-ratio ব্যবহার করুন। ইমেজের আকার ঠিক রাখতে এর সাথে \`object-fit: cover\` ব্যবহার করা উত্তম।

### সাধারণ ভুলসমূহ
এলিমেন্টে উইডথ ও হাইট উভয়ই ফিক্সড পিক্সেল দিয়ে ফেলার পর আবার \`aspect-ratio\` সেট করা, যা ব্রাউজার সরাসরি ইগনোর করে।

### কোড উদাহরণ
\`\`\`css
.responsive-video-container {
  width: 100%;
  aspect-ratio: 16 / 9; /* স্বয়ংক্রিয়ভাবে ভিডিওর স্পেস ধরে রাখবে */
  background-color: #e5e7eb; /* ভিডিও আসার আগ পর্যন্ত ব্যাকআপ কালার */
}

.responsive-video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
\`\`\``
  },
  {
    id: 'css-45',
    title: 'Explain display: contents and its accessibility risks.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Layout', 'Accessibility', 'DOM'],
    enAnswer: 'display: contents makes the element act as if its own box wrapper does not exist, passing its children directly to the parent layout container. The risk is that some browsers stripping this box also strip accessibility semantics, causing screen readers to ignore the elements.',
    bnAnswer: 'display: contents দিলে এলিমেন্টের নিজস্ব বর্ডার/বক্স হাওয়া হয়ে যায় এবং তার ভেতরের চাইল্ডগুলো সরাসরি প্যারেন্টের অধীনে চলে যায়। ঝুঁকিটি হলো কিছু ব্রাউজার এর বক্সের সাথে সাথে এর অ্যাক্সেসিবিলিটি সেমান্টিকসও বাদ দেয়, ফলে স্ক্রিন রিডার তা পড়তে পারে না।',
    enExplanation: `### Explanation
\`display: contents\` makes a container element "disappear" visually:
- The parent wrapper box is not rendered. Margins, padding, borders, and backgrounds on this container are ignored.
- The children of this container behave as if they are direct children of the grandparent container.
- Extremely useful in CSS Grid layouts where you want to group elements semantically in HTML, but want them to sit directly on the parent grid.

**Accessibility (A11y) Risks**:
Due to browser bugs, setting \`display: contents\` on semantically important elements (like \`<ul>\`, \`<button>\`, or \`<table>\`) can cause browser accessibility trees to strip the element role entirely. Screen readers may read a list as unorganized plain text rather than list items.

### Real-World Example
If you have a form with labels and inputs grouped inside a div wrapper, but you want all labels and inputs to align directly to a 2-column parent grid, you apply \`display: contents\` to the wrapper div.

### Best Practice
Use \`display: contents\` primarily on plain wrapper \`<div>\` tags that do not carry semantic accessibility roles. Avoid using it on tables, headers, navs, or list tags unless thoroughly tested.

### Common Mistakes
Applying \`display: contents\` to lists (\`<ul>\`) or articles, which can break screen reader tree navigation.

### Code Example
\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.wrapper-contents {
  display: contents; /* Div box collapses, children align directly to parent-grid */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`display: contents\` একটি কন্টেইনার এলিমেন্টের নিজস্ব "বক্স" বা বাউন্ডারিকে চোখের আড়ালে নিয়ে যায়:
- প্যারেন্ট র‍্যাপার বক্সটি নিজে রেন্ডার হয় না। এই কন্টেইনারে দেওয়া মার্জিন, প্যাডিং, বর্ডার বা ব্যাকগ্রাউন্ড ব্রাউজার ইগনোর করে।
- এই কন্টেইনারের ভেতরের চাইল্ড এলিমেন্টগুলো এমনভাবে আচরণ করে যেন তারা সরাসরি গ্র্যান্ডপ্যারেন্ট কন্টেইনারের চাইল্ড।
- সিএসএস গ্রিড বা ফ্লেক্সে এটি খুবই দরকারী, যখন আপনি এইচটিএমএল স্ট্রাকচারের স্বার্থে এলিমেন্ট গ্রুপ করে রাখতে চান কিন্তু সিএসএস লেআউটে তাদের সরাসরি প্যারেন্টের গ্রিড ফ্লোতে ফেলতে চান।

**অ্যাক্সেসিবিলিটি (A11y) ঝুঁকি**:
ব্রাউজারের কিছু বাগের কারণে \`display: contents\` ব্যবহার করলে স্ক্রিন রিডাররা ওই এলিমেন্টগুলোর রোল (role) ঠিকমতো সনাক্ত করতে পারে না (যেমন: \`<ul>\`, \`<button>\` বা \`<table>\`)। এর ফলে কীবোর্ড অ্যাক্সেসিবিলিটি বা স্ক্রিন রিডারের রিডিং ফ্লো নষ্ট হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গ্রিড লেআউটের ভেতর ফর্ম লেবেল এবং ইনপুটকে একটি ডিভ গ্রুপে রাখা হয়েছে। কিন্তু আপনি চান লেবেল ও ইনপুট দুটি কলামে গ্রিড ফ্লো অনুযায়ী সাজানো থাকবে। কন্টেইনার ডিভে \`display: contents\` দিলে ডিভটি অকেজো হয়ে চাইল্ডগুলো সরাসরি গ্রিডের অংশ হয়ে যায়।

### উত্তম অনুশীলন
\`display: contents\` শুধুমাত্র সাধারণ \`<div>\` ট্যাগের ওপর ব্যবহার করুন যার কোনো সেমান্টিক রোল নেই। এটি টেবিল, লিস্ট বা নেভিগেশন ট্যাগে ব্যবহার করা এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ
লিস্ট ট্যাগ বা টেবিল রোর ওপর \`display: contents\` ব্যবহার করা, যার ফলে কীবোর্ড ইউজারদের স্ক্রিন রিডার লিস্ট রিডিং বা টেবিল ফরম্যাট চিনে রিড করতে ব্যর্থ হতে পারে।

### কোড উদাহরণ
\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.wrapper-contents {
  display: contents; /* ডিভ বক্স থাকবে না, চাইল্ডগুলো সরাসরি প্যারেন্ট গ্রিডে বসবে */
}
\`\`\``
  },
  {
    id: 'css-46',
    title: 'Explain CSS math functions: calc(), min(), max(), and clamp().',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Math', 'Responsive', 'Sizing'],
    enAnswer: 'These math functions compute values dynamically: calc() calculates arithmetic expressions. min() selects the smallest value from a list. max() selects the largest value. clamp(min, val, max) locks a value within a defined range.',
    bnAnswer: 'এই গাণিতিক ফাংশনগুলো ডাইনামিকালি সাইজ হিসাব করে: calc() গাণিতিক সমীকরণ সমাধান করে। min() তালিকার সবচেয়ে ছোট মানটি বেছে নেয়। max() সবচেয়ে বড় মানটি বেছে নেয়। clamp(min, val, max) একটি মানকে নির্দিষ্ট সীমার ভেতর লক করে।',
    enExplanation: `### Explanation
Modern CSS math functions make responsive layouts incredibly dynamic without writing JavaScript width monitors:
1. **\`calc()\`**: Evaluates formulas. You can mix units (e.g. \`width: calc(100% - 80px);\`). *CRITICAL*: Operators \`+\` and \`-\` must be surrounded by white spaces (e.g. \`calc(100%-80px)\` is syntax invalid).
2. **\`min()\`**: Sets a maximum cap. \`width: min(80%, 800px);\` means the width will be 80% of screen width, but it will never exceed 800px (it chooses whichever is smaller).
3. **\`max()\`**: Sets a minimum cap. \`width: max(20%, 300px);\` means the width will be 20% of screen width, but it will never go below 300px (it chooses whichever is larger).
4. **\`clamp(minimum, preferred, maximum)\`**: Evaluates to the preferred value, but restricts it between the minimum and maximum boundaries. Commonly used for responsive font sizing: \`font-size: clamp(1rem, 2.5vw, 3rem);\`.

### Real-World Example
To create a fluid responsive header font size that is small on mobile devices, scales up dynamically on tablets, but stops growing on large desktop monitors, you set:
\`font-size: clamp(1.5rem, 5vw, 3.5rem);\`.

### Best Practice
Use \`clamp()\` for fluid typography and responsive page paddings. This avoids writing hundreds of lines of repetitive media queries.

### Common Mistakes
Forgetting spaces around operators in \`calc()\`, resulting in the calculation failing and default values not being parsed.

### Code Example
\`\`\`css
.sidebar-layout {
  /* Mix units using calc() */
  width: calc(100% - 250px);
}

.fluid-text {
  /* Min: 16px (1rem), Preferred: scales with viewport (3vw), Max: 48px (3rem) */
  font-size: clamp(1rem, 3vw, 3rem);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিএসএস ম্যাথ ফাংশন জাভাস্ক্রিপ্ট ছাড়াই উইন্ডোর আকার মেপে ডিজাইনে ডাইনামিক হিসাব করতে সাহায্য করে:
১. **\`calc()\`**: গাণিতিক হিসাব করে। এখানে আলাদা আলাদা ইউনিট একসাথে যোগ-বিয়োগ করা যায়, যেমন: \`width: calc(100% - 80px);\`। *জরুরি*: যোগ (+) ও বিয়োগ (-) চিহ্নের দুই পাশে অবশ্যই ফাঁকা স্পেস থাকতে হবে।
২. **\`min()\`**: এটি সর্বোচ্চ সীমা বেঁধে দেয়। \`width: min(80%, 800px);\` মানে হলো উইডথ স্ক্রিনের ৮০% হবে, কিন্তু কখনোই ৮০০ পিক্সেল ছাড়িয়ে যাবে না (কারণ এটি ছোট মানটি নেয়)।
৩. **\`max()\`**: এটি সর্বনিম্ন সীমা বেঁধে দেয়। \`width: max(20%, 300px);\` মানে হলো উইডথ ২০% হবে, কিন্তু কখনোই ৩০০ পিক্সেলের নিচে নামবে না (কারণ এটি বড় মানটি নেয়)।
৪. **\`clamp(min, preferred, max)\`**: এটি একটি রেঞ্জ ফিল্টার। এটি প্রেফার্ড মানটিকে সর্বনিম্ন এবং সর্বোচ্চ সীমার মধ্যে লক করে রাখে। এটি ফ্লুইড বা রেসপনসিভ ফন্ট সাইজ তৈরিতে ব্যাপক ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি টাইটেল ফন্ট মোবাইলে ছোট, ট্যাবলেটে মাঝারি এবং বড় ডেক্সটপে ফিক্সড বড় করে দেখানোর জন্য মিডিয়া কোয়েরি ছাড়া এক লাইনে লেখা যায়:
\`font-size: clamp(1.5rem, 5vw, 3.5rem);\`।

### উত্তম অনুশীলন
টাইপোগ্রাফি ও পেজের প্যাডিংয়ের জন্য \`clamp()\` ব্যবহার করুন। এটি শত শত লাইন মিডিয়া কোয়েরি লেখার ক্লান্তি কমায়।

### সাধারণ ভুলসমূহ
\`calc()\` ব্যবহার করার সময় যোগ বা বিয়োগ চিহ্নের দুই পাশে স্পেস না দেওয়া (যেমন: \`calc(100%-80px)\`)। এটি দিলে কোডটি কাজ করবে না।

### কোড উদাহরণ
\`\`\`css
.sidebar-layout {
  /* calc() দিয়ে মিক্সড ইউনিটের হিসাব */
  width: calc(100% - 250px);
}

.fluid-text {
  /* সর্বনিম্ন ১ রেম, উইন্ডো অনুযায়ী ৩ ভিডব্লিউ স্কেল হবে, সর্বোচ্চ ৩ রেম */
  font-size: clamp(1rem, 3vw, 3rem);
}
\`\`\``
  },
  {
    id: 'css-47',
    title: 'Explain CSS Filters and their performance implications.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Filters', 'Visuals', 'Performance'],
    enAnswer: 'CSS Filters apply visual effects (blur, brightness, contrast, grayscale, drop-shadow) to elements. While powerful, they are render-heavy and can cause lagging if animated on low-end mobile CPUs.',
    bnAnswer: 'CSS ফিল্টার এলিমেন্টের ওপরে ভিজ্যুয়াল ইফেক্ট (blur, brightness, contrast, grayscale, drop-shadow) যুক্ত করে। এগুলো শক্তিশালী হলেও রেন্ডারিং প্রসেসে অনেক বেশি জিপিইউ পাওয়ার ব্যয় করে, যা মোবাইল স্ক্রিনে ল্যাগ তৈরি করতে পারে।',
    enExplanation: `### Explanation
The \`filter\` property applies graphical transitions to elements:
- **Common values**: \`blur(px)\`, \`grayscale(%)\`, \`brightness(%)\`, \`contrast(%)\`, \`sepia(%)\`, \`hue-rotate(deg)\`, and \`drop-shadow()\`.
- **\`drop-shadow()\` vs \`box-shadow\`**: \`box-shadow\` draws a rectangular shadow around the element box border. \`drop-shadow()\` traces the actual transparent shape of the element (e.g. SVG path outline or PNG image transparency details).

**Performance implications**:
Filters are calculated during the **Paint** stage of browser rendering. Visual filters like \`blur()\` or \`drop-shadow()\` require heavy pixel calculations. Doing animations on filters (like blurring an image on hover) causes the browser to re-paint the element at every single frame, causing frame drops on low-end devices.

### Real-World Example
When designing a transparent PNG logo grid, applying \`filter: grayscale(100%)\` and hover transition to \`filter: grayscale(0%)\` makes the logos look uniform until the user interacts with them.

### Best Practice
To optimize performance, avoid placing filter transitions on large images. If you animate filters, add \`will-change: filter\` to trigger hardware GPU acceleration, and use them sparingly on mobile-focused web views.

### Common Mistakes
Using \`box-shadow\` for custom non-rectangular icons (like triangles or SVGs) instead of \`filter: drop-shadow()\`, which creates ugly box shadows surrounding the transparent background borders.

### Code Example
\`\`\`css
/* Styles actual path outline of a transparent PNG or SVG */
.custom-star {
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
}

/* Grayed out logo hover */
.partner-logo {
  filter: grayscale(100%) opacity(60%);
  transition: filter 0.3s ease;
}
.partner-logo:hover {
  filter: grayscale(0%) opacity(100%);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`filter\` প্রোপার্টি এলিমেন্টগুলোতে গ্রাফিকাল ইফেক্ট ও ফিল্টারিং যুক্ত করতে ব্যবহৃত হয়:
- **সাধারণ ফিল্টারসমূহ**: \`blur(px)\`, \`grayscale(%)\`, \`brightness(%)\`, \`contrast(%)\`, \`hue-rotate(deg)\`, এবং \`drop-shadow()\`।
- **\`drop-shadow()\` বনাম \`box-shadow\`**: \`box-shadow\` এলিমেন্টের চারকোনা বক্স বর্ডারের চারপাশে শ্যাডো ফেলে। আর \`drop-shadow()\` এলিমেন্টের ভেতরের আসল আকৃতির (যেমন পিএনজি ইমেজের স্বচ্ছ ব্যাকগ্রাউন্ডের ভেতরের ডিজাইন বা এসভিজি পাথ) ওপরে শ্যাডো বসায়।

**পারফরম্যান্স প্রভাব**:
ফিল্টার প্রসেসটি ব্রাউজার রেন্ডারিংয়ের **পেইন্ট (Paint)** ধাপে জিপিইউ দ্বারা প্রসেস করা হয়। \`blur()\` বা \`drop-shadow()\` ফিল্টারে পিক্সেল ক্যালকুলেশন অনেক বেশি করতে হয়। তাই ফিল্টারে অ্যানিমেশন ব্যবহার করলে ব্রাউজারকে প্রতি ফ্রেমে পেইন্টিং পুনরায় হিসেব করতে হয়, যা ধীরগতির ডিভাইসে ল্যাগ তৈরি করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
পার্টনার বা স্পনসর লোগো গ্রিডে সব লোগোকে একরকম দেখাতে \`filter: grayscale(100%)\` ব্যবহার করা হয় এবং মাউস হোভার করলে কালারফুল করার জন্য ট্রানজিশনে \`grayscale(0%)\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
বড় আকৃতির ছবির ওপরে ব্লার বা ফিল্টার ট্রানজিশন ব্যবহার এড়িয়ে চলুন। কোনো এলিমেন্টে ফিল্টার অ্যানিমেশন ব্যবহার করলে জিপিইউ এক্সিলারেটরকে সজাগ করতে \`will-change: filter\` ক্লাস ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
ত্রিভুজ বা পিএনজি আইকনে শ্যাডো দেওয়ার জন্য \`box-shadow\` ব্যবহার করা, যার ফলে ট্রান্সপারেন্ট ছবির পেছনের চারকোনা বক্সে শ্যাডো বসে দেখতে বাজে লাগে। এ ক্ষেত্রে \`filter: drop-shadow()\` ব্যবহার করা উচিত।

### কোড উদাহরণ
\`\`\`css
/* ট্রান্সপারেন্ট পিএনজি বা এসভিজির আসল বর্ডারে শ্যাডো দেবে */
.custom-star {
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
}

/* লোগো ব্ল্যাক অ্যান্ড হোয়াইট ও আবছা করার নিয়ম */
.partner-logo {
  filter: grayscale(100%) opacity(60%);
  transition: filter 0.3s ease;
}
.partner-logo:hover {
  filter: grayscale(0%) opacity(100%);
}
\`\`\``
  },
  {
    id: 'css-48',
    title: 'Explain CSS Backdrop-filter and Glassmorphism.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Backdrop-filter', 'Visuals', 'UI Design'],
    enAnswer: 'backdrop-filter applies visual filters (like blur) to the area behind an element (its background background-color transparency stack). Glassmorphism is a UI trend that pairs a semi-transparent background with backdrop-filter blur to simulate frosted glass.',
    bnAnswer: 'backdrop-filter কোনো এলিমেন্টের পেছনের অংশে ভিজ্যুয়াল ইফেক্ট (যেমন ব্লার) প্রয়োগ করে। গ্লাসমরফিজম (Glassmorphism) হলো একটি ইউজার ইন্টারফেস ডিজাইন ট্রেন্ড যা আবছা কাঁচের মতো এফেক্ট তৈরি করতে সেমি-ট্রান্সপারেন্ট কালারের সাথে backdrop-filter ব্লার ব্যবহার করে।',
    enExplanation: `### Explanation
- **\`filter\`**: Applies visual changes to the element itself (e.g. blurring the card contents).
- **\`backdrop-filter\`**: Applies visual changes to **whatever sits behind the element** inside the layout viewport stack. To see it, the element must have a transparent or semi-transparent background color.

**Glassmorphism Recipe**:
To create the trendy frosted glass look, you mix:
1. A semi-transparent background color (usually white with low alpha: \`rgba(255, 255, 255, 0.2)\`).
2. \`backdrop-filter: blur(10px)\` to blur the background images behind it.
3. A subtle borders highlight.

### Real-World Example
Modern operating systems (like Windows 11 Fluent design or macOS Big Sur overlay drawers) use backdrop-filter extensively to blur the user desktop background behind window control panels.

### Best Practice
Always ensure text contrast is high when using glassmorphism. Add a solid background-color fallback for older browsers (like Internet Explorer or older versions of Safari) that do not support the \`backdrop-filter\` property.

### Common Mistakes
Applying \`backdrop-filter: blur()\` to a container but setting a solid opaque background color (like \`#ffffff\`). The blur will be calculated by the browser but remain completely hidden, wasting rendering memory.

### Code Example
\`\`\`css
.glass-panel {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px); /* Blurs whatever is behind the panel */
  -webkit-backdrop-filter: blur(12px); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: #1f2937;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **\`filter\`**: এটি সংশ্লিষ্ট এলিমেন্টের ওপরে ইফেক্ট ফেলে (যেমন ভেতরের টেক্সট বা ছবি ঝাপসা করা)।
- **\`backdrop-filter\`**: এটি এলিমেন্টের **পেছনে থাকা পেজের ব্যাকগ্রাউন্ডে** ভিজ্যুয়াল ইফেক্ট (যেমন ব্লার) প্রয়োগ করে। এর কার্যকারিতা দেখার জন্য এলিমেন্টটির ব্যাকগ্রাউন্ড অবশ্যই সেমি-ট্রান্সপারেন্ট হতে হবে।

**গ্লাসমরফিজম (Glassmorphism) রেসিপি**:
আধুনিক এই ডিজাইনটি তৈরি করতে ৩টি বিষয় একত্র করতে হয়:
১. একটি হালকা বা সেমি-ট্রান্সপারেন্ট কালার (যেমন: \`rgba(255, 255, 255, 0.2)\`)।
২. পেছনের সব কিছু ঝাপসা করতে \`backdrop-filter: blur(10px)\`।
৩. কাঁচের বাউন্ডারি বোঝাতে চারকোণায় হালকা সাদা বর্ডার।

### বাস্তব-ভিত্তিক উদাহরণ
উইন্ডোজ ১১ এর ফ্রস্টেড প্যানেল বা ম্যাক ওএস (macOS) এর নোটিফিকেশন ড্রয়ারে ব্যাকগ্রাউন্ডের পেছনের আইকনগুলোকে ঝাপসা করে দেখানোর জন্য এই ক্যাসকেড ফিল্টারিং ব্যবহার করা হয়।

### উত্তম অনুশীলন
গ্লাসমরফিজম ব্যবহার করার সময় ভেতরের লেখার কালার কনট্রাস্ট ঠিক রাখুন। যেসব পুরোনো ব্রাউজার \`backdrop-filter\` সাপোর্ট করে না, সেগুলোর জন্য একটি ফালব্যাক ওডিই ব্যাকগ্রাউন্ড কালার দিয়ে রাখুন।

### সাধারণ ভুলসমূহ
এলিমেন্টে \`backdrop-filter: blur()\` দেওয়ার সাথে সাথে ব্যাকগ্রাউন্ড কালার সলিড ও অস্বচ্ছ (যেমন: \`#ffffff\`) করে ফেলা। এর ফলে পেছনের ঝাপসা অংশটি ঢাকা পড়ে যায় এবং ব্রাউজারের মেমোরি নষ্ট হয়।

### কোড উদাহরণ
\`\`\`css
.glass-panel {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px); /* পেছনের অংশ ব্লার করবে */
  -webkit-backdrop-filter: blur(12px); /* সাফারির জন্য */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: #1f2937;
}
\`\`\``
  },
  {
    id: 'css-49',
    title: 'Explain CSS Blend Modes: mix-blend-mode vs background-blend-mode.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Blend Modes', 'Visuals', 'UI Design'],
    enAnswer: 'background-blend-mode blends multiple backgrounds (images or gradients) of a single element together. mix-blend-mode blends an element\'s content with the elements behind it in the page layout stack.',
    bnAnswer: 'background-blend-mode কোনো একটি এলিমেন্টের নিজস্ব একাধিক ব্যাকগ্রাউন্ডের (ছবি বা গ্রেডিয়েন্ট) মধ্যে ব্লেন্ড তৈরি করে। mix-blend-mode কোনো এলিমেন্টের কন্টেন্টকে তার পেছনের অন্যান্য এলিমেন্টের সাথে ব্লেন্ড করে।',
    enExplanation: `### Explanation
CSS Blend Modes work similarly to blend layers in design software like Photoshop, combining overlap colors dynamically:
- **\`background-blend-mode\`**: Blends properties within the **same element**. For example, blending a background image with a linear-gradient background color. Common values: \`multiply\`, \`screen\`, \`overlay\`, \`darken\`, \`color-dodge\`.
- **\`mix-blend-mode\`**: Blends different overlapping **DOM elements**. For example, a text heading overlaying a background image. As the user scrolls, the text color changes dynamically depending on the brightness of the background pixels behind it.

### Real-World Example
If you are designing a heading overlay that scrolls over a dark and light image section, using \`mix-blend-mode: difference\` will make the text dynamically invert its color (white over dark areas, black over light areas), ensuring readability.

### Best Practice
Use \`background-blend-mode\` to easily color-tint background images inside banners without needing extra overlay HTML elements.

### Common Mistakes
Using \`mix-blend-mode\` and expecting it to blend across elements, but forgetting that parent containers with \`isolation: isolate\` or stacking contexts block blending scopes.

### Code Example
\`\`\`css
/* Blend Image and Gradient */
.tinted-banner {
  background-image: url('photo.jpg'), linear-gradient(to bottom, #4f46e5, #818cf8);
  background-blend-mode: multiply; /* Blends the image with the blue gradient */
}

/* Invert text color based on background pixels */
.invert-scroll-text {
  mix-blend-mode: difference;
  color: white;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফটোশপের মতো লেয়ার ব্লেন্ডিংয়ের সুবিধা ব্রাউজারেই দিতে সিএসএস ব্লেন্ড মোড ব্যবহার করা হয়:
- **\`background-blend-mode\`**: একই এলিমেন্টের নিজস্ব ব্যাকগ্রাউন্ড ইমেজ এবং ব্যাকগ্রাউন্ড কালারের মধ্যে ব্লেন্ডিং করে। যেমন কোনো ছবির ওপর কালার টিন্ট বা গ্রেডিয়েন্ট মিক্স করা। সাধারণ ভ্যালুসমূহ: \`multiply\`, \`screen\`, \`overlay\`, \`darken\`, \`color-dodge\`।
- **\`mix-blend-mode\`**: সম্পূর্ণ আলাদা দুটি **DOM এলিমেন্টের** কালার মিক্স করে। যেমন কোনো ইমেজের ওপরে থাকা হেডিং টেক্সট। টেক্সটটি যখন ইমেজের ওপর স্ক্রল করে, তখন পেছনের পিক্সেল অনুযায়ী লেখার রঙ বদলে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যানারে ছবির ওপরে থাকা লেখার কালার মিক্সিংয়ে \`mix-blend-mode: difference\` দিলে লেখাটি সাদা ও কালোর বৈপরীত্য তৈরি করে (কালো ছবির ওপর সাদা টেক্সট, আর সাদা ছবির ওপর কালো টেক্সট), যা পড়ার অ্যাক্সেসিবিলিটি ঠিক রাখে।

### উত্তম অনুশীলন
অতিরিক্ত এইচটিএমএল প্যানেল তৈরি না করে ব্যানারের ছবিতে নির্দিষ্ট কালার টিন্ট বা ফিল্টার লুক দিতে \`background-blend-mode\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`mix-blend-mode\` ব্যবহার করা কিন্তু প্যারেন্ট এলিমেন্টে \`isolation: isolate\` ডিক্লেয়ার থাকা। এটি ব্লেন্ডিং কনটেক্সট বাউন্ডারি আটকে দেয়, ফলে মিক্সিং ইফেক্ট কাজ করে না।

### কোড উদাহরণ
\`\`\`css
/* ছবি ও ব্লু কালার মিক্স করার নিয়ম */
.tinted-banner {
  background-image: url('photo.jpg'), linear-gradient(to bottom, #4f46e5, #818cf8);
  background-blend-mode: multiply; /* ইমেজের ওপর নীল রঙের টিন্ট ফেলবে */
}

/* পেছনের ব্যাকগ্রাউন্ড অনুযায়ী টেক্সটের রঙ উল্টে যাবে */
.invert-scroll-text {
  mix-blend-mode: difference;
  color: white;
}
\`\`\``
  },
  {
    id: 'css-50',
    title: 'Explain CSS Masking and Clipping using clip-path vs mask-image.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Masking', 'Clipping', 'Visuals'],
    enAnswer: 'clip-path defines a sharp vector boundary (using polygons/circles) that crops the element. mask-image uses an image or gradient mask where alpha transparency values determine which parts of the element are visible.',
    bnAnswer: 'clip-path একটি শার্প ভেক্টর বাউন্ডারি (যেমন বহুভুজ বা বৃত্ত) তৈরি করে এলিমেন্ট কেটে ফেলে। mask-image একটি ইমেজ বা গ্রেডিয়েন্ট ব্যবহার করে যার আলফা ট্রান্সপারেন্সি ভ্যালু দিয়ে এলিমেন্টের কোন অংশ দৃশ্যমান হবে তা নির্ধারণ করা হয়।',
    enExplanation: `### Explanation
Both properties crop elements, but they operate on different data types:
- **\`clip-path\` (Vector Clipping)**: Defines a vector boundary path. Anything outside the path is clipped out. Values can be shapes like \`circle()\`, \`ellipse()\`, \`polygon(x y, x y, ...)\`, or references to SVG paths. It produces **sharp, aliased edges** with zero transparency variations inside the crop boundary.
- **\`mask-image\` (Raster/Alpha Masking)**: Uses an image, SVG, or CSS gradient as a mask. The browser looks at the alpha channel (transparency) of the mask: where the mask is 100% opaque, the element is visible; where the mask is semi-transparent, the element fades out; where the mask is transparent, the element is hidden.

### Real-World Example
- **clip-path**: Creating custom diagonal card edges, triangles, or complex star shapes in CSS.
- **mask-image**: Creating an image that gradually fades out to transparent on the right side using a \`linear-gradient\` alpha mask.

### Best Practice
Use \`clip-path\` for simple geometric shapes because it is calculated fast by browser engines. Use SVG paths within \`clip-path\` to ensure vector layouts remain fully scale-invariant.

### Common Mistakes
Forgetting that points outside the \`clip-path\` polygon coordinates are completely unclickable, which is expected, but can cause layout bugs if you clip clickable buttons.

### Code Example
\`\`\`css
/* Diagonal shape using clip-path polygon */
.diagonal-card {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

/* Gradient fade out mask using mask-image */
.faded-photo {
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
উভয় প্রোপার্টি এলিমেন্ট কেটে অন্য সাইজে আনার জন্য ব্যবহৃত হলেও তাদের কাজ করার মাধ্যম ভিন্ন:
- **\`clip-path\` (ভেক্টর ক্লিপিং)**: এটি একটি নির্দিষ্ট ভেক্টর জ্যামিতিক পথ তৈরি করে। এই সীমানার বাইরের অংশ উধাও হয়ে যায়। এতে \`circle()\`, \`ellipse()\`, \`polygon()\` অথবা এসভিজি পাথ ব্যবহার করা যায়। এর কোণাগুলো সবসময় ধারালো (sharp) হয়।
- **\`mask-image\` (আলফা মাস্কিং)**: এটি একটি ইমেজ বা গ্রেডিয়েন্টকে ছাঁচ বা মাস্ক হিসেবে ব্যবহার করে। ব্রাউজার এই মাস্কের আলফা চ্যানেল বা স্বচ্ছতা মেপে দেখে: মাস্কের যেখানে কালার ভ্যালু ১০০% ভরাট সেখানে এলিমেন্টটি দেখা যাবে, আর যেখানে আবছা সেখানে এলিমেন্টটিও আস্তে আস্তে ফেড-আউট হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
- **clip-path**: পেজে কোনাকুনি (diagonal) কার্ডের বর্ডার, ত্রিভুজ আকৃতি বা তারকা ডিজাইন করতে।
- **mask-image**: একটি ছবির ডানদিক আস্তে আস্তে মুছে গিয়ে পেছনের বডির সাথে মিশে যাবে এমন গ্রেডিয়েন্ট ইফেক্ট তৈরি করতে।

### উত্তম অনুশীলন
জ্যামিতিক আকৃতির জন্য \`clip-path\` ব্যবহার করুন কারণ এটি দ্রুত রেন্ডার হয়। বড় আইকন বা জটিল ড্রয়িংয়ের ক্ষেত্রে SVG রেফারেন্স ফাইল ক্লিপ পাথে লোড করুন।

### সাধারণ ভুলসমূহ
\`clip-path\` দিয়ে কোনো বাটন বা ইমেজ কাটার পর তার ক্লিকেবল এরিয়াও সংকুচিত হয়ে যায়। তাই ফালব্যাক বর্ডার ছাড়া ক্লিপ করা বাটনে মাউস ক্লিক কাজ নাও করতে পারে।

### কোড উদাহরণ
\`\`\`css
/* কোনাকুনি কেটে কার্ডের রূপ দেওয়া */
.diagonal-card {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

/* মাস্ক ইমেজ দিয়ে ছবিকে ডানে ফেড-আউট করা */
.faded-photo {
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}
\`\`\``
  },
  {
    id: 'css-51',
    title: 'Explain CSS Gradients: linear, radial, and conic.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Gradients', 'Visuals', 'UI Design'],
    enAnswer: 'CSS gradients transition smoothly between multiple colors. Linear gradients flow along a straight line. Radial gradients radiate from a center point. Conic gradients rotate around a center point (like a color wheel).',
    bnAnswer: 'CSS গ্রেডিয়েন্ট একাধিক রঙের মধ্যে একটি মসৃণ রূপান্তর তৈরি করে। Linear গ্রেডিয়েন্ট সোজা রেখা বরাবর প্রবাহিত হয়। Radial গ্রেডিয়েন্ট কেন্দ্র থেকে বৃত্তাকারে ছড়িয়ে পড়ে। Conic গ্রেডিয়েন্ট কেন্দ্রের চারপাশ ঘড়ির কাঁটার মতো ঘূর্ণায়মান বৃত্তে কালার সাজায়।',
    enExplanation: `### Explanation
Gradients are classified as \`<image>\` types in CSS, meaning they are applied to \`background-image\` rather than \`background-color\`:
1. **Linear Gradients (\`linear-gradient()\`)**: Colors flow in a straight line. You configure direction using angles (e.g. \`90deg\`, \`135deg\`) or side keywords (e.g. \`to bottom right\`).
2. **Radial Gradients (\`radial-gradient()\`)**: Colors radiate outward from a central point (either circle or ellipse). You can specify the center origin coordinates.
3. **Conic Gradients (\`conic-gradient()\`)**: Colors rotate around a center pivot point, transitioning clockwise. Often used for color wheels, circular pie charts, or metallic reflection sweeps.

### Real-World Example
- **Linear**: Creating a modern SaaS hero background using \`linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)\`.
- **Conic**: Building a dynamic circular progress loader bar in CSS without needing canvas drawings.

### Best Practice
Use high-contrast color combinations. If you place white text over a gradient background, always include a darker overlay or select dark start-end color stops to guarantee accessibility contrast.

### Common Mistakes
Applying gradients to \`background-color\` (e.g. \`background-color: linear-gradient(...)\`), which throws a parser error. Always apply gradients to \`background-image\` or the \`background\` shorthand.

### Code Example
\`\`\`css
/* Linear Gradient */
.linear-bg {
  background-image: linear-gradient(135deg, #4f46e5, #818cf8);
}

/* Conic Gradient (makes a pie chart/metallic sweep) */
.pie-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: conic-gradient(#4f46e5 0% 70%, #e5e7eb 70% 100%);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS গ্রেডিয়েন্টগুলোকে ব্রাউজার \`<image>\` ডাটা হিসেবে রিড করে। তাই এদেরকে \`background-color\` এর পরিবর্তে \`background-image\`-এ সেট করতে হয়:
১. **Linear Gradients (\`linear-gradient()\`)**: সোজা রেখা বরাবর কালার ফ্লো করে। এর দিক বা ডিরেকশন কোণ (যেমন: \`90deg\`, \`135deg\`) বা কিওয়ার্ড (যেমন: \`to bottom right\`) দিয়ে ঠিক করা যায়।
২. **Radial Gradients (\`radial-gradient()\`)**: কেন্দ্র থেকে গোল বা উপবৃত্তাকারে চারপাশের বাউন্ডারিতে কালার ছড়ায়। এর কেন্দ্রবিন্দু ডাইনামিকালি সরানো যায়।
৩. **Conic Gradients (\`conic-gradient()\`)**: কেন্দ্রকে অক্ষ ধরে ঘড়ির কাঁটার দিকে কালার মিক্স করে ঘোরে। এটি কালার হুইল বা পাই চার্ট তৈরিতে ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
- **Linear**: একটি প্রিমিয়াম ব্যাকগ্রাউন্ডের জন্য \`linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)\` ব্যবহার করা।
- **Conic**: ক্যানভাস ছাড়াই কেবল সিএসএস দিয়ে ডাইনামিক প্রোগ্রেস বার বা পাই চার্ট তৈরি করা।

### উত্তম অনুশীলন
গ্রেডিয়েন্ট ব্যাকগ্রাউন্ডে টেক্সট থাকলে কনট্রাস্ট রেশিও চেক করুন। লেখার নিচে আবছা ডার্ক কালার ব্যবহার করুন যাতে লেখা পড়তে কষ্ট না হয়।

### সাধারণ ভুলসমূহ
\`background-color: linear-gradient(...)\` লেখার চেষ্টা করা, যা সিএসএস রিডার বাতিল করে দেয়। সবসময় এটি \`background-image\`-এ লিখবেন।

### কোড উদাহরণ
\`\`\`css
/* লিনিয়ার গ্রেডিয়েন্ট */
.linear-bg {
  background-image: linear-gradient(135deg, #4f46e5, #818cf8);
}

/* কনিক গ্রেডিয়েন্ট দিয়ে পাই চার্ট তৈরি */
.pie-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: conic-gradient(#4f46e5 0% 70%, #e5e7eb 70% 100%);
}
\`\`\``
  },
  {
    id: 'css-52',
    title: 'Explain CSS Box Shadows: multiple shadows and inset.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Shadows', 'Visuals', 'UI Design'],
    enAnswer: 'box-shadow applies shadows to elements. Multiple shadows can be chained together using commas, and the inset keyword shifts the shadow from the outside border to the inside edge of the box.',
    bnAnswer: 'box-shadow এলিমেন্টে ছায়া বা শ্যাডো যোগ করে। কমা দিয়ে একাধিক শ্যাডো একসাথে চেইন করা যায়, এবং inset কিওয়ার্ড ব্যবহার করলে শ্যাডোটি বর্ডারের বাইরে পড়ার বদলে বক্সের ভেতরের দিকে চলে আসে।',
    enExplanation: `### Explanation
The \`box-shadow\` property syntax is:
\`box-shadow: h-offset v-offset blur-radius spread-radius color, ...;\`
- **\`inset\`**: Optional keyword. If defined, the shadow is cast inside the element, creating a pressed-down or hollow look.
- **Multiple Shadows**: You can chain multiple shadows separated by commas. The first shadow listed is rendered on top; subsequent shadows are stacked underneath it.

### Real-World Example
To create realistic modern card styling, developers avoid single dark shadows. Instead, they chain two shadows: a soft, broad spread shadow, and a tighter, darker ambient occlusion shadow.

### Best Practice
Use semi-transparent black colors (like \`rgba(0, 0, 0, 0.05)\` or \`hsla(0, 0%, 0%, 0.08)\`) instead of solid gray colors to make shadows look natural over any background color.

### Common Mistakes
Setting massive blur or spread radii without adjusting colors, resulting in dirty, dark borders surrounding your card components.

### Code Example
\`\`\`css
/* Premium layered shadow effect */
.premium-card {
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.1), /* Tight ambient shadow */
    0 10px 20px rgba(0, 0, 0, 0.05); /* Broad soft shadow */
}

/* Inset shadow for input fields */
.pressed-input {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`box-shadow\` প্রোপার্টির লেখার সিনট্যাক্স হলো:
\`box-shadow: h-offset v-offset blur-radius spread-radius color;\`
- **\`inset\`**: ঐচ্ছিক কিওয়ার্ড। এটি ব্যবহার করলে শ্যাডোটি বক্সের বাইরে না পড়ে ভেতরের কোণা বরাবর উল্টো শ্যাডো ফেলে, যা কোনো এলিমেন্টকে চেপে বসা (pressed-down) বা গর্তের মতো দেখায়।
- **একাধিক শ্যাডো (Chaining)**: কমা দিয়ে একের পর এক একাধিক শ্যাডো লেখা যায়। তালিকার প্রথম শ্যাডোটি সবার ওপরে এবং পরেরগুলো ক্রমানুসারে নিচে রেন্ডার হবে।

### বাস্তব-ভিত্তিক উদাহরণ
প্রিমিয়াম মানের কার্ড ডিজাইনে ডেভেলপাররা একটি গাঢ় শ্যাডোর বদলে দুটি শ্যাডো একসাথে চেইন করে ব্যবহার করেন: একটি হালকা ছড়ানো শ্যাডো এবং আরেকটি কার্ডের গোড়ায় থাকা ডার্ক শ্যাডো।

### উত্তম অনুশীলন
শ্যাডোর কালার হিসেবে সলিড গ্রে বা কালোর বদলে সেমি-ট্রান্সপারেন্ট কালার (যেমন: \`rgba(0, 0, 0, 0.05)\`) ব্যবহার করুন। এতে যেকোনো ব্যাকগ্রাউন্ডেই শ্যাডোটি খুব ন্যাচারাল দেখাবে।

### সাধারণ ভুলসমূহ
কালার ট্রান্সপারেন্ট না করে অতিরিক্ত ব্লার বা স্প্রেড দিয়ে ফেলা, যার কারণে কার্ডের চারপাশে ছাই রঙের ময়লা দাগের মতো শ্যাডো দেখা যায়।

### কোড উদাহরণ
\`\`\`css
/* প্রিমিয়াম মাল্টি-লেয়ার শ্যাডো ইফেক্ট */
.premium-card {
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.1), /* কার্ডের গোড়ার শ্যাডো */
    0 10px 20px rgba(0, 0, 0, 0.05); /* হালকা ছড়ানো নরম শ্যাডো */
}

/* ইনপুট ফিল্ডের জন্য ভেতরের শ্যাডো */
.pressed-input {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
\`\`\``
  },
  {
    id: 'css-53',
    title: 'Explain CSS Text Shadows and advanced typography styling.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Typography', 'Text-Shadow', 'Visuals'],
    enAnswer: 'text-shadow applies one or more shadows to text characters. It is configured using horizontal offset, vertical offset, blur radius, and color. It is useful for creating retro 3D effects or improving contrast over images.',
    bnAnswer: 'text-shadow টেক্সটের অক্ষরের ওপর এক বা একাধিক শ্যাডো বা ছায়া ফেলে। এটি হরাইজন্টাল অফসেট, ভার্টিক্যাল অফসেট, ব্লার রেডিয়াস এবং কালার দিয়ে কনফিগার করা হয়। এটি থ্রিডি ইফেক্ট বা ছবির ওপর টেক্সটের রিডাবিলিটি বাড়াতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
The \`text-shadow\` property applies shadows directly to text symbols, respecting character shapes (including curves and icons inside text fonts).
Syntax: \`text-shadow: h-offset v-offset blur-radius color;\` (note that unlike \`box-shadow\`, it has **no spread-radius** property).

**Advanced Styling Applications**:
1. **Contrast boost**: Adding a subtle black text-shadow with a small blur ensures white text remains readable when overlaid on unpredictable image backgrounds.
2. **Text glow**: Using a larger blur radius with bright colors creates neon glowing text.
3. **3D Text**: Chaining multiple text shadows with incremental offsets shifts colors behind the text to mimic 3D block letters.

### Real-World Example
If you are designing a hero banner with headline text placed over slides of photos, a small dark text-shadow prevents the text from washing out when a light-colored photo slides in.

### Best Practice
Keep text-shadow offsets small (e.g. 1px or 2px) for general legibility. Avoid heavy text shadows on body copy, as it makes text blurry and unreadable.

### Common Mistakes
Attempting to use a spread value in \`text-shadow\`, which causes browser parsing failure since text-shadow does not support spread parameters.

### Code Example
\`\`\`css
/* Enhances contrast of white text over images */
.overlay-headline {
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

/* Neon glow effect */
.neon-glow {
  color: #fff;
  text-shadow: 0 0 5px #ff007f, 0 0 15px #ff007f;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`text-shadow\` সরাসরি অক্ষরের আঁকাবাঁকা বর্ডার ম্যাপ করে তার পেছনে শ্যাডো তৈরি করে।
সিনট্যাক্স: \`text-shadow: h-offset v-offset blur-radius color;\` (মনে রাখবেন, \`box-shadow\` এর মতো এতে **কোনো spread-radius বা শ্যাডো ছড়ানোর প্যারামিটার নেই**)।

**অ্যাডভান্সড টাইপোগ্রাফি স্টাইল**:
১. **কনট্রাস্ট বুস্ট**: হালকা ব্লারসহ একটি কালো রঙের টেক্সট শ্যাডো দিলে ছবির ওপর সাদা টেক্সট সহজে পড়া যায়।
২. **গ্লো ইফেক্ট (Neon glow)**: অফসেট ০ রেখে বড় আকারের ব্লার রেডিয়াস ও উজ্জ্বল কালার ব্যবহারে নিয়ন লাইটের মতো টেক্সট গ্লো করানো যায়।
৩. **থ্রিডি টেক্সট**: কমা দিয়ে পিক্সেল অফসেট ক্রমান্বয়ে বাড়িয়ে অনেকগুলো কালার লেয়ার চেইন করলে ত্রিমাত্রিক হরফের আকার আসে।

### বাস্তব-ভিত্তিক উদাহরণ
হিরো ব্যানারে ইমেজের ওপর সাদা রঙের বড় হেডিং থাকলে ছবির উজ্জ্বলতার কারণে লেখা অস্পষ্ট হয়ে যেতে পারে। সেখানে সামান্য ডার্ক টেক্সট-শ্যাডো দিলে ছবি যেমনই হোক লেখা সহজে পড়া যায়।

### উত্তম অনুশীলন
সাধারণ রিডাবিলিটি নিশ্চিত করতে অফসেট ১ বা ২ পিক্সেলে সীমাবদ্ধ রাখুন। প্যারাগ্রাফ বা বডি টেক্সটে টেক্সট-শ্যাডো ব্যবহার এড়ান, এটি চোখকে ক্লান্ত করে।

### সাধারণ ভুলসমূহ
\`text-shadow\`-তে ভুলবশত স্প্রেড ভ্যালু দিয়ে ফেলা, যার কারণে পুরো সিএসএস রুলটি ব্রাউজার দ্বারা রিজেক্ট হয়।

### কোড উদাহরণ
\`\`\`css
/* ছবির ওপর সাদা লেখার কনট্রাস্ট বজায় রাখার নিয়ম */
.overlay-headline {
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

/* নিয়ন লাইটের মতো গ্লো ইফেক্ট */
.neon-glow {
  color: #fff;
  text-shadow: 0 0 5px #ff007f, 0 0 15px #ff007f;
}
\`\`\``
  },
  {
    id: 'css-54',
    title: 'Explain CSS Scroll Snap and how it works.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Scroll Snap', 'UX', 'Mobile'],
    enAnswer: 'CSS Scroll Snap enforces scrolling offsets to align elements to key view positions. It is configured using scroll-snap-type on the parent container and scroll-snap-align on the child items.',
    bnAnswer: 'CSS Scroll Snap স্ক্রলিং অফসেটকে জোর করে নির্দিষ্ট ভিউ অবস্থানে লক বা এলাইন করায়। এটি প্যারেন্ট কন্টেইনারে scroll-snap-type এবং চাইল্ড আইটেমগুলোতে scroll-snap-align প্রোপার্টি ব্যবহার করে কাজ করে।',
    enExplanation: `### Explanation
Scroll Snap allows developers to create native mobile-like swiping galleries or full-screen scroll cards without heavy JS library scripts:
1. **Parent Container properties**:
   - \`scroll-snap-type\`: Defines snapping axis and behavior. Format: \`[axis] [strictness]\` (e.g. \`x mandatory\` or \`y proximity\`).
     - \`mandatory\`: Automatically snaps to the nearest cell once scroll drag stops.
     - \`proximity\`: Snaps only if the scroll viewport stops close to the snap boundary.
   - \`overflow-x: scroll\` or \`overflow-y: scroll\`: Snapping requires overflow scrolling context.
2. **Child Items properties**:
   - \`scroll-snap-align\`: Declares which part of the child aligns with the viewport boundary (\`start\`, \`center\`, \`end\`).

### Real-World Example
In mobile web applications, if you are designing a horizontal product image carousel banner, applying scroll snap ensures images snap perfectly in the center instead of getting cut off mid-way.

### Best Practice
Use \`scroll-snap-type: x mandatory\` for image carousels where it is critical that only one complete item is viewed at a time. Use \`scroll-padding\` on the parent if you have a sticky top header to prevent snapped items from hiding behind it.

### Common Mistakes
Applying \`scroll-snap-type\` to the container but forgetting to add \`scroll-snap-align\` to the children, resulting in standard, non-snapping scroll behavior.

### Code Example
\`\`\`css
/* Parent scroll container */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* Enforces snapping horizontally */
  scroll-behavior: smooth;
  gap: 10px;
}

/* Child item */
.carousel-card {
  flex: 0 0 90%;
  scroll-snap-align: center; /* Snaps item to viewport center */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS Scroll Snap কোনো ভারী জাভাস্ক্রিপ্ট প্লাগইন ছাড়াই মোবাইলের মতো টাচ সোয়াইপ বা ফুল-স্ক্রিন স্ক্রল লক স্লাইডার তৈরি করতে সাহায্য করে:
১. **প্যারেন্ট কন্টেইনারের জন্য**:
   - \`scroll-snap-type\`: কোন অক্ষে এবং কতটা জোর দিয়ে স্ন্যাপ হবে তা ঠিক করে। যেমন: \`x mandatory\` বা \`y proximity\`।
     - \`mandatory\`: স্ক্রল বা ড্র্যাগ শেষ হওয়া মাত্রই বাধ্যতামূলকভাবে নিকটস্থ সেলে লক হয়ে যাবে।
     - \`proximity\`: স্ক্রল স্টপ হওয়ার জায়গা সীমানার খুব কাছাকাছি হলেই কেবল ম্যাগনেটের মতো লক হবে।
   - কন্টেইনারে অবশ্যই \`overflow-x: auto\` বা স্ক্রল ফ্লো সক্রিয় থাকতে হবে।
২. **চাইল্ড আইটেমগুলোর জন্য**:
   - \`scroll-snap-align\`: চাইল্ডের কোন অংশ ব্রাউজার স্ক্রিনের সীমানায় লক হবে তা ঠিক করে (\`start\`, \`center\`, \`end\`)।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইল অ্যাপে প্রোডাক্ট ইমেজ গ্যালারিতে স্লাইড করার সময় ছবি যেন অর্ধেক কেটে ঝুলে না থাকে, বরং প্রতিবার যেন একটি পুরো ছবি স্ক্রিনের মাঝখানে সুন্দরভাবে ফিট হয় সে জন্য এটি ব্যবহৃত হয়।

### উত্তম অনুশীলন
ফটো স্লাইডারে \`scroll-snap-type: x mandatory\` ব্যবহার করুন। যদি পেজের ওপরে কোনো স্টিকি হেডার থাকে, তবে চাইল্ড স্ন্যাপ করানোর সময় হেডার দিয়ে ঢাকা পড়া এড়াতে প্যারেন্টে \`scroll-padding\` সেট করে দিন।

### সাধারণ ভুলসমূহ
প্যারেন্টে \`scroll-snap-type\` ব্যবহার করা কিন্তু চাইল্ডগুলোতে \`scroll-snap-align\` দিতে ভুলে যাওয়া। এতে কোনো স্ন্যাপিং ইফেক্ট কাজ করবে না।

### কোড উদাহরণ
\`\`\`css
/* প্যারেন্ট স্ক্রল কন্টেইনার */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* অনুভূমিকভাবে স্ন্যাপ কার্যকর করবে */
  scroll-behavior: smooth;
  gap: 10px;
}

/* চাইল্ড আইটেম */
.carousel-card {
  flex: 0 0 90%;
  scroll-snap-align: center; /* স্ক্রিনের মাঝখানে এসে স্ন্যাপ হবে */
}
\`\`\``
  },
  {
    id: 'css-55',
    title: 'Explain CSS scroll-behavior and its usability rules.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Scrolling', 'UX', 'Accessibility'],
    enAnswer: 'The scroll-behavior property set to smooth enables animated scrolling when a user clicks anchor links. For accessibility (A11y), smooth scroll must be turned off for users who prefer reduced motion.',
    bnAnswer: 'scroll-behavior প্রোপার্টিটি smooth সেট করলে পেজে লিংকে ক্লিক করার সাথে সাথে স্ক্রলিং লাফ না দিয়ে মসৃণভাবে অ্যানিমেট হয়। অ্যাক্সেসিবিলিটির জন্য মোশন-সংবেদনশীল ইউজারদের জন্য এটি নিষ্ক্রিয় রাখা উচিত।',
    enExplanation: `### Explanation
The \`scroll-behavior\` property controls the scrolling transition inside a scroll container:
- \`auto\` (default): Instantly jumps to the target coordinate.
- \`smooth\`: Animates the transition smoothly over a fraction of a second.

Usually applied to the \`html\` tag so that clicking an anchor menu link (e.g. \`<a href="#contact">\`) smoothly scrolls down the page instead of snapping instantly.

**Usability and Accessibility warning**:
Smooth scrolling can cause nausea or disorientation for users with vestibular system disorders. Therefore, you should always respect the user's operating system preferences by wrapping smooth scroll rules inside a \`prefers-reduced-motion\` media query.

### Real-World Example
In single-page marketing landing sites, adding smooth scrolling makes navigation feel fluid. However, if a user has "Reduce Motion" active in Windows/iOS settings, the page bypasses the animation to protect user comfort.

### Best Practice
Write the smooth scroll configuration wrapped inside a media query that checks if the user does not mind motion.

### Common Mistakes
Forgetting that \`scroll-behavior: smooth\` only applies to click-based anchor triggers and programmatic scrolls, but does not smooth out native manual mouse wheel scrolling.

### Code Example
\`\`\`css
/* Apply smooth scrolling only if user has not disabled system animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`scroll-behavior\` প্রোপার্টি স্ক্রল কন্টেইনারের ভেতরের স্ক্রলিং অ্যানিমেশন নিয়ন্ত্রণ করে:
- \`auto\` (ডিফল্ট): টার্গেট লিংকে সাথে সাথে এক ঝটকায় লাফ দিয়ে চলে যায়।
- \`smooth\`: টার্গেটে স্ক্রল করে আস্তে আস্তে মসৃণভাবে যায়।

সাধারণত এটি \`html\` ট্যাগে ব্যবহার করা হয় যাতে পেজের ইন্টারনাল নেভিগেশন লিংকগুলোতে (যেমন: \`<a href="#about">\`) ক্লিক করলে পুরো পেজটি স্ক্রল করে নিচে নামে।

**অ্যাক্সেসিবিলিটি (A11y) সতর্কতা**:
ভার্টিগো বা ভেস্টিবুলার ডিসঅর্ডার বা মোশন সিকনেস রোগীদের ক্ষেত্রে স্ক্রিনের হঠাৎ অনাকাঙ্ক্ষিত নড়াচড়া শারীরিক অস্বস্তি তৈরি করতে পারে। তাই ইউজারের সিস্টেম সেটিংসকে সম্মান জানিয়ে মিডিয়া কোয়েরির মাধ্যমে কেবল তখনই এটি চালু করুন যখন ইউজার অ্যানিমেশন বন্ধ করতে বলেননি।

### বাস্তব-ভিত্তিক উদাহরণ
একক পেজের ল্যান্ডিং সাইটে স্ক্রল এফেক্ট সাইটটিকে সুন্দর করে তোলে। কিন্তু কোনো ইউজার যদি মোবাইলে বা উইন্ডোজে "Reduce Motion" মুড অন করে রাখেন, তবে সিএসএস কোডটি স্বয়ংক্রিয়ভাবে ঝটকা স্ক্রল এড়াতে অ্যানিমেশন বন্ধ করে দেবে।

### উত্তম অনুশীলন
সবসময় prefers-reduced-motion মিডিয়া কোয়েরির ভেতরে smooth স্ক্রল ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে \`scroll-behavior: smooth\` মাউসের সাধারণ স্ক্রল হুইল স্ক্রলিংকেও অটো-স্মুথ করবে। এটি কেবল অ্যাঙ্কর লিংক বা প্রোগ্রামেটিক স্ক্রলিংয়ের ক্ষেত্রেই কাজ করে।

### কোড উদাহরণ
\`\`\`css
/* ইউজার সিস্টেমে অ্যানিমেশন নিষ্ক্রিয় না করলেই কেবল স্মুথ স্ক্রল হবে */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
\`\`\``
  },
  {
    id: 'css-56',
    title: 'Explain CSS overscroll-behavior and how to prevent scroll chaining.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Scrolling', 'UX', 'Mobile'],
    enAnswer: 'overscroll-behavior prevents scroll chaining (where scrolling inside a modal causes the parent background page to start scrolling when the modal limit is reached). Set it to contain or none on the modal scroll container.',
    bnAnswer: 'overscroll-behavior স্ক্রল চেইনিং প্রতিরোধ করে (যেখানে মডালের ভেতর স্ক্রল করতে করতে শেষ সীমায় পৌঁছালে পেছনের মূল বডি স্ক্রল করা শুরু করে)। এটি বন্ধ করতে মডাল স্ক্রল বক্সে overscroll-behavior: contain সেট করতে হয়।',
    enExplanation: `### Explanation
**Scroll Chaining** is a default browser behavior. When a user scrolls inside a nested scroll container (like a popup drawer) and reaches the scroll boundary, the browser starts scrolling the parent container (the main body page) instead. This ruins the user experience.
The \`overscroll-behavior\` property controls this:
- \`auto\` (default): Scroll chaining is active.
- \`contain\`: Prevents scroll chaining. Scrolling stays locked within the active boundary. The background page stays completely still even when scroll limits are hit.
- \`none\`: Prevents scroll chaining and disables default viewport behaviors like bounce/pull-to-refresh on mobile screens.

### Real-World Example
In a chat application widget box or sidebar notification feed, setting \`overscroll-behavior-y: contain\` ensures that scrolling through notifications does not accidentally scroll the main page underneath.

### Best Practice
Always apply \`overscroll-behavior: contain\` to modal popups, drop-down menus, and slide-out navigation panels.

### Common Mistakes
Forgetting that \`overscroll-behavior\` requires the target element to have an overflow scrolling context (\`overflow: auto\` or \`scroll\`), otherwise the property has no scroll event to intercept.

### Code Example
\`\`\`css
.modal-scroll-body {
  height: 300px;
  overflow-y: auto;
  /* Prevent scrolling the main window when modal scroll boundary is hit */
  overscroll-behavior-y: contain;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
**স্ক্রল চেইনিং (Scroll Chaining)** হলো ব্রাউজারের একটি ডিফল্ট আচরণ। ইউজার যখন কোনো পপ-আপ বা মডালের ভেতর স্ক্রল করে স্ক্রলের শেষ সীমায় পৌঁছান, তখন মডাল স্ক্রল হওয়া বন্ধ হয়ে পেছনের মূল পেজটি স্ক্রল হতে শুরু করে। এর ফলে ইউজার ট্র্যাক হারিয়ে ফেলেন।
\`overscroll-behavior\` প্রোপার্টি এটি সমাধান করে:
- \`auto\` (ডিফল্ট): স্ক্রল চেইনিং চালু থাকে।
- \`contain\`: স্ক্রল চেইনিং বন্ধ করে। স্ক্রল ইভেন্টটি কেবল ওই পপ-আপ বাউন্স সীমানার ভেতরেই সীমাবদ্ধ থাকে, পেছনের পেজ একটুও নড়ে না।
- \`none\`: চেইনিং বন্ধের পাশাপাশি মোবাইল স্ক্রিনের ওভার-স্ক্রল বাউন্স ইফেক্ট বা পেজ রিলোড করার পুল-টু-রিফ্রেশ আচরণও বন্ধ করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক বা কোনো অ্যাপের মডাল উইন্ডোতে চ্যাট লিস্ট স্ক্রল করার সময় কন্টেইনারে \`overscroll-behavior-y: contain\` সেট করলে মডালের শেষে পৌঁছালেও পেছনের ফিড পেজ নড়াচড়া করবে না।

### উত্তম অনুশীলন
মডাল পপ-আপ, নেভিগেশন সাইডবার ও ড্রপডাউন মেনু কন্টেইনারে \`overscroll-behavior: contain\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
কন্টেইনারে স্ক্রলিং ফ্লো বা \`overflow: auto\` সক্রিয় না করেই overscroll-behavior যোগ করা। ওভারফ্লো না থাকলে এটি কোনো কাজই করবে না।

### কোড উদাহরণ
\`\`\`css
.modal-scroll-body {
  height: 300px;
  overflow-y: auto;
  /* মডালের শেষে পৌঁছালেও পেছনের মূল পেজ নড়বে না */
  overscroll-behavior-y: contain;
}
\`\`\``
  },
  {
    id: 'css-57',
    title: 'Explain CSS Multi-column layout properties.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Multi-column', 'Layout', 'Typography'],
    enAnswer: 'CSS Multi-column layout allows splitting text content into side-by-side columns like a newspaper. It is controlled using column-count, column-width, column-gap, and column-rule.',
    bnAnswer: 'CSS Multi-column লেআউট খবরের কাগজের মতো প্যারাগ্রাফের টেক্সটকে পাশাপাশি কলামে বিভক্ত করার সুবিধা দেয়। এটি column-count, column-width, column-gap এবং column-rule দিয়ে নিয়ন্ত্রণ করা হয়।',
    enExplanation: `### Explanation
The Multi-column layout specification allows text flow to split into columns dynamically:
- **\`column-count\`**: Specifies the ideal number of columns (e.g. \`3\`).
- **\`column-width\`**: Specifies a minimum ideal column width (e.g. \`200px\`). If screen shrinks, the browser automatically drops columns to prevent text clipping.
- **\`column-gap\`**: Sets the horizontal gap spacing between columns.
- **\`column-rule\`**: Draws a vertical line rule separating columns (shorthand for style, width, and color, like a border: \`1px solid #ccc\`).
- **\`column-span\`**: Allows specific child blocks (like header titles) to span across all columns (\`column-span: all\`).

### Real-World Example
In a news agency blog site, showing text articles split into three columns on wide screens makes long text sections readable without requiring block-level column div grid wrappers.

### Best Practice
Instead of hardcoding \`column-count\`, use \`column-width\` (or the shorthand \`columns: 200px\`). This acts as a responsive builder: the browser will render 3 columns on desktop, but drop to 1 column on mobile phones automatically when viewport space is narrow.

### Common Mistakes
Forgetting that multi-column layouts split text dynamically, which can cause nested elements (like block quotes or images) to split in half across columns. Set \`break-inside: avoid\` on children to prevent this.

### Code Example
\`\`\`css
.newspaper-article {
  /* Columns auto-calculated: min 250px wide, split dynamically */
  column-width: 250px;
  column-gap: 30px;
  column-rule: 1px solid #d1d5db;
}

.article-header {
  column-span: all; /* Title stretches across all columns */
  margin-bottom: 20px;
}

.article-image {
  break-inside: avoid; /* Prevents image from splitting in half across columns */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাল্টি-কলাম লেআউট স্পেসিফিকেশন সিএসএসে অতিরিক্ত ডিভ গ্রিড তৈরি না করেই খবরের কাগজের মতো কলাম আকারে টেক্সট সাজানোর সুযোগ দেয়:
- **\`column-count\`**: কলামের সংখ্যা ঠিক করে (যেমন: \`3\`)।
- **\`column-width\`**: কলামের ন্যূনতম চওড়া হওয়ার সাইজ ঠিক করে (যেমন: \`200px\`)। স্ক্রিন ছোট হলে কলামের সংখ্যা নিজে নিজে কমে যায়।
- **\`column-gap\`**: কলামগুলোর মধ্যকার ফাঁকা স্পেস।
- **\`column-rule\`**: কলামগুলোর মাঝে বর্ডারের মতো ডিভাইডার লাইন আঁকার জন্য ব্যবহৃত হয় (\`1px solid #ccc\`)।
- **\`column-span\`**: নির্দিষ্ট কোনো লেখা বা হেডারকে সব কলাম জুড়ে প্রসারিত হওয়ার সুযোগ দেয় (\`column-span: all\`)।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ বা নিউজ পোর্টালে বিশাল প্যারাগ্রাফ টেক্সট স্ক্রিন চওড়া হলে ৩টি কলামে এবং মোবাইলে ১ কলামে দেখানোর জন্য এটি ব্যবহার করা হয়।

### উত্তম অনুশীলন
ফিক্সড কলাম সংখ্যা না লিখে শর্টহ্যান্ড হিসেবে ন্যূনতম উইডথ দিন (যেমন: \`columns: 250px\`)। এর ফলে মোবাইলে ১টি কলাম এবং বড় স্ক্রিনে স্বয়ংক্রিয়ভাবে ৩-৪টি কলাম তৈরি হবে যা অত্যন্ত রেসপনসিভ।

### সাধারণ ভুলসমূহ
কলামের মাঝখানে থাকা ইমেজ বা ব্লককোট ভেঙে অর্ধেক এপাশে এবং বাকি অর্ধেক পরবর্তী কলামে চলে যাওয়া। এটি এড়াতে চাইল্ড এলিমেন্টে \`break-inside: avoid\` সেট করতে হবে।

### কোড উদাহরণ
\`\`\`css
.newspaper-article {
  /* ২৫০ পিক্সেল কলাম সাইজ, স্বয়ংক্রিয় রেসপনসিভ কলাম সংখ্যা */
  column-width: 250px;
  column-gap: 30px;
  column-rule: 1px solid #d1d5db;
}

.article-header {
  column-span: all; /* হেডিংটি সব কলামের ওপরে ছড়িয়ে থাকবে */
  margin-bottom: 20px;
}

.article-image {
  break-inside: avoid; /* ইমেজটি কলামের মাঝে ভেঙে যাওয়া বন্ধ করবে */
}
\`\`\``
  },
  {
    id: 'css-58',
    title: 'Explain CSS Feature Queries (@supports rule).',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Feature Queries', 'Browser Compatibility'],
    enAnswer: 'CSS Feature Queries (@supports) test browser support for specific CSS properties and values before applying styles. This allows developers to use modern features while providing clean fallbacks for older engines.',
    bnAnswer: 'CSS ফিচার কোয়েরি (@supports) কোনো স্টাইল কার্যকর করার আগে সংশ্লিষ্ট ব্রাউজারে ওই সিএসএস ফিচারটি কাজ করে কিনা তা পরীক্ষা করে। এর ফলে আধুনিক ফিচার ব্যবহার করার পাশাপাশি পুরোনো ব্রাউজারের ফালব্যাক নিশ্চিত করা যায়।',
    enExplanation: `### Explanation
Feature Queries (\`@supports\`) act like inline conditional statements in CSS. The browser checks if it understands the property/value combination before applying the rules inside the block:
- Syntax: \`@supports (property: value) { ... }\`
- You can combine multiple check operators using \`and\`, \`or\`, and \`not\` (e.g. \`@supports (display: grid) and (not (display: flex))\`).

This is essential for progressive enhancement—allowing you to use cutting-edge layout options on newer browsers without breaking the layout on legacy platforms.

### Real-World Example
Before CSS backdrop-filter was widely adopted, developers checked support using \`@supports (backdrop-filter: blur(10px))\`. If supported, they rendered transparent glass panels; if not, they fell back to solid fallback colors.

### Best Practice
Write the standard fallback stylesheet rules first outside the block. Then use \`@supports\` to overwrite and enhance styles for browsers that support the modern feature.

### Common Mistakes
Forgetting that feature queries test if the browser *parses* the property, not if it has bugs when rendering it.

### Code Example
\`\`\`css
/* Fallback for older browsers */
.overlay {
  background-color: rgba(0, 0, 0, 0.85); /* Solid dark */
}

/* Enhances overlay if browser supports backdrop filters */
@supports (backdrop-filter: blur(10px)) {
  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px); /* Frosted glass */
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফিচার কোয়েরি (\`@supports\`) সিএসএসের ইফ-এলস (if-else) কন্ডিশনের মতো কাজ করে। কোনো প্রোপার্টি ব্রাউজার চেনে কিনা তা পরীক্ষার পর ব্লক ভেতরের স্টাইল রান করে:
- সিনট্যাক্স: \`@supports (property: value) { ... }\`
- আপনি \`and\`, \`or\`, এবং \`not\` ব্যবহার করে একাধিক কন্ডিশন যোগ করতে পারেন।

এটি প্রোগ্রেসিভ এনহান্সমেন্টের জন্য গুরুত্বপূর্ণ। এর সাহায্যে আধুনিক সিএসএস প্রোপার্টিগুলো ব্যবহার করা যায় এবং পুরোনো ব্রাউজারের ব্যবহারকারীদের ভাঙা পেজ দেখা থেকে রক্ষা করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
যখন \`backdrop-filter\` নতুন এসেছিল, তখন ডেভেলপাররা লিখতেন \`@supports (backdrop-filter: blur(10px))\`। ব্রাউজারে সাপোর্ট থাকলে ঝাপসা কাঁচের প্যানেল লোড হতো, আর না থাকলে সলিড ব্যাকগ্রাউন্ড কালার দৃশ্যমান হতো।

### উত্তম অনুশীলন
প্রথমে লাইনের বাইরে ডিফল্ট বা সাধারণ ফালব্যাক স্টাইল লিখুন। এরপর \`@supports\` ব্লকের ভেতরে আধুনিক কোডগুলো লিখে ডিফল্ট স্টাইলকে ওভাররাইড করুন।

### সাধারণ ভুলসমূহ
@supports দিয়ে ব্রাউজার প্রোপার্টিটি রিড করতে পারে কিনা তা চেক করা যায়, কিন্তু সেটি রান করার সময় কোনো ইন্টারনাল রেন্ডারিং বাগ আছে কিনা তা এটি ডিটেক্ট করতে পারে না।

### কোড উদাহরণ
\`\`\`css
/* পুরোনো ব্রাউজারের ফালব্যাক */
.overlay {
  background-color: rgba(0, 0, 0, 0.85); /* সলিড ডার্ক */
}

/* ব্রাউজার সাপোর্ট করলেই কেবল ব্লার ইফেক্ট দেবে */
@supports (backdrop-filter: blur(10px)) {
  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }
}
\`\`\``
  },
  {
    id: 'css-59',
    title: 'Explain the CSS accent-color property.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Accessibility', 'Forms', 'Visuals'],
    enAnswer: 'The accent-color property sets the brand highlight color for native form controls (checkboxes, radio buttons, range sliders, progress bars). This allows custom branding without custom form styling packages.',
    bnAnswer: 'accent-color প্রোপার্টি নেটিভ ফর্ম কন্ট্রোলের (চেকবক্স, রেডিও বাটন, রেঞ্জ স্লাইডার, প্রোগ্রেস বার) ব্র্যান্ড হাইলাইট কালার সেট করে। এর ফলে অতিরিক্ত ফর্ম কোড ছাড়াই সহজে ব্র্যান্ডিং করা যায়।',
    enExplanation: `### Explanation
Historically, styling native checkboxes and radio buttons to match a brand color required hiding the input element and building custom HTML wrappers with complex CSS selectors.
The \`accent-color\` property simplifies this by changing the highlight color of native browser elements:
- It targets: \`<input type="checkbox">\`, \`<input type="radio">\`, \`<input type="range">\`, and \`<progress>\`.
- **Accessibility features**: The browser automatically monitors contrast ratio. If you set a dark accent-color (e.g. black), the browser dynamically renders the checkbox checkmark tick in white. If you set a light accent-color, the tick mark turns black.

### Real-World Example
In a dark-themed user registration form, setting \`accent-color: #6366f1\` instantly tints all native circles and checked boxes to purple, keeping native mobile touch targets active.

### Best Practice
Apply \`accent-color\` globally in the root html or body level. This guarantees consistent brand colors across all forms on the website.

### Common Mistakes
Thinking \`accent-color\` styles the border or layout of the inputs. It only impacts the checked/active highlight color states of the native browser inputs.

### Code Example
\`\`\`css
/* Style all form inputs globally with brand purple */
body {
  accent-color: #6366f1;
}

/* Custom individual overrides */
.danger-checkbox {
  accent-color: #ef4444;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পূর্বে ব্রাউজারের নেটিভ চেকবক্স বা রেডিও বাটনে ব্র্যান্ডের কালার যোগ করতে হলে ইনপুট হাইড করে জটিল কাস্টম এইচটিএমএল উইজেট বানাতে হতো।
আধুনিক সিএসএসের \`accent-color\` প্রোপার্টি এক লাইনে নেটিভ এলিমেন্টের ভেতরের হাইলাইট কালার পরিবর্তন করে দেয়:
- এটি যেসব এলিমেন্টে কাজ করে: চেকবক্স, রেডিও বাটন, রেঞ্জ স্লাইডার এবং প্রোগ্রেস বার।
- **স্বয়ংক্রিয় কনট্রাস্ট**: ব্রাউজার এর কনট্রাস্ট রেশিও চেক করে। আপনি যদি ডার্ক কালার একসেন্ট দেন, তবে চেকবক্সের ভেতরের টিক চিহ্নটি স্বয়ংক্রিয়ভাবে সাদা রঙে দেখাবে, আর লাইট কালার একসেন্টে টিকটি কালো রঙের হবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাইন-আপ ফরমে যদি চেকবক্স চেক করার পর নীল রঙের পরিবর্তে বেগুনি রঙ দেখাতে চান, তবে ফর্মের স্টাইলে \`accent-color: #6366f1\` লিখে দিলেই এটি হয়ে যাবে।

### উত্তম অনুশীলন
গ্লোবাল ব্র্যান্ড ইন্টিগ্রেশন করতে \`html\` বা \`body\` সিলেক্টরে \`accent-color\` দিয়ে দিন। এতে পুরো সাইটের সব ফর্মে ব্র্যান্ড কালার কনসিস্টেন্সি বজায় থাকবে।

### সাধারণ ভুলসমূহ
মনে করা যে \`accent-color\` ইনপুটের বর্ডার বা সম্পূর্ণ লেআউট পরিবর্তন করতে পারে। এটি কেবল সিলেক্টেড বা অ্যাক্টিভ অবস্থার হাইলাইট রঙটি পরিবর্তন করে।

### কোড উদাহরণ
\`\`\`css
/* পুরো সাইটের ফর্মগুলোর নেটিভ কালার পরিবর্তনের নিয়ম */
body {
  accent-color: #6366f1;
}

/* কোনো নির্দিষ্ট চেকবক্সে লাল কালার ওভাররাইড */
.danger-checkbox {
  accent-color: #ef4444;
}
\`\`\``
  },
  {
    id: 'css-60',
    title: 'Explain the CSS color-scheme property and its role in Dark Mode.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Theme', 'Dark Mode', 'Performance'],
    enAnswer: 'The color-scheme property tells the browser which color modes (light, dark) the web page supports. This allows the browser to render native scrollbars, form controls, and system overlays using native dark-theme styling.',
    bnAnswer: 'color-scheme প্রোপার্টি ব্রাউজারকে জানায় ওয়েব পেজটি কোন কালার মোড (লাইট, ডার্ক) সাপোর্ট করে। এর ফলে ব্রাউজার নেটিভ স্ক্রলবার, ফর্ম ও সিস্টেম ওভারলেগুলোকে ডার্ক থিম অনুযায়ী রেন্ডার করতে পারে।',
    enExplanation: `### Explanation
Even if you build a dark mode using custom variables, the browser's native elements (like scrollbars, default select dropdown lists, and loading placeholder spaces) continue to render in light mode (e.g. bright white scrollbar tracks).
The \`color-scheme\` property solves this:
- **Syntax**: \`color-scheme: light dark;\` (informs browser that the site supports both modes and browser should adapt native controls accordingly).
- **Usability**: When you toggle dark mode, changing the color-scheme value to \`dark\` forces the browser to render native select dropdown options with dark backgrounds and shifts scrollbars to dark gray automatically.

### Real-World Example
In a dark mode dashboard, adding \`color-scheme: dark\` on the root element transforms the desktop scrollbars from a blinding white to a matching dark gray, keeping the UI unified.

### Best Practice
Apply \`color-scheme: light dark\` at the \`:root\` level, and control overrides dynamically when toggling themes using data-attributes (e.g. \`html[data-theme="dark"] { color-scheme: dark; }\`).

### Common Mistakes
Forgetting that \`color-scheme\` does not write dark mode styles for your custom components; you still need to write custom rules for your custom cards and text. It only changes browser-native components.

### Code Example
\`\`\`css
/* Set global color schemes */
html {
  color-scheme: light dark; /* Browser selects based on OS theme */
}

/* Forced Theme overrides */
html[data-theme="dark"] {
  color-scheme: dark; /* Force dark scrollbars and native selects */
  --bg-color: #111827;
  --text-color: #f9fafb;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আপনি নিজে ডার্ক থিমের সিএসএস লিখলেও অনেক সময় ব্রাউজারের নেটিভ অংশ যেমন: স্ক্রলবার, সিলেক্ট ইনপুট অপশন মেনু, ইনপুট টাইপ ডেট পিকটার প্রবৃত্তি লাইট বা সাদা থিমেই থেকে যায়।
\`color-scheme\` প্রোপার্টি এর সমাধান করে:
- **সিনট্যাক্স**: \`color-scheme: light dark;\` (এটি ব্রাউজারকে নির্দেশ দেয় যে সাইটটি উভয় মোড সাপোর্ট করে)।
- **ব্যবহার**: ডার্ক থিম অন করার সময় ব্রাউজারকে এটি জানালে ব্রাউজার স্বয়ংক্রিয়ভাবে তার নেটিভ অপশন ড্রপডাউন কালো রঙের ও স্ক্রলবার ধূসর রঙের রেন্ডার করে।

### বাস্তব-ভিত্তিক উদাহরণ
ডার্ক মোডের সাইটে যখন স্ক্রলবারটি সাদা বর্ডারে জাজ্বল্যমান থাকে, তখন পেজের রুটে \`color-scheme: dark\` লিখে দিলে স্ক্রলবারটি নিজে থেকেই ম্যাচিং ডার্ক গ্রে কালার হয়ে স্ক্রিনকে প্রটেক্ট করে।

### উত্তম অনুশীলন
\`:root\` লেভেলে \`color-scheme: light dark\` দিন এবং থিম পরিবর্তনের সময় এইচটিএমএল ডাটায় ডাইনামিকালি \`color-scheme: dark;\` প্রয়োগ করুন।

### সাধারণ ভুলসমূহ
মনে করা যে \`color-scheme\` দিলেই পুরো ওয়েবসাইটের সব ফন্ট বা কার্ড নিজে নিজে ডার্ক হয়ে যাবে। এটি কেবল ব্রাউজারের সিস্টেম ওভারলে ও নেটিভ কন্ট্রোলগুলো পরিবর্তন করে, বাকি সিএসএস নিজেকেই লিখতে হবে।

### কোড উদাহরণ
\`\`\`css
/* রুট থিম সেটিংস */
html {
  color-scheme: light dark; /* ওএসের থিম অনুযায়ী ব্রাউজার সিদ্ধান্ত নেবে */
}

/* ডার্ক থিম মুড সিলেক্ট হলে ফোর্স করা */
html[data-theme="dark"] {
  color-scheme: dark; /* ডার্ক স্ক্রলবার এবং ড্রপডাউন সক্রিয় করবে */
  --bg-color: #111827;
  --text-color: #f9fafb;
}
\`\`\``
  },
  {
    id: 'css-61',
    title: 'Explain System Font Stacks and font fallback optimization.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Fonts', 'Typography', 'Performance'],
    enAnswer: 'System Font Stacks use pre-installed operating system fonts (like San Francisco for Apple, Segoe UI for Windows, Roboto for Android) to render text instantly, eliminating network downloads and layout shifts.',
    bnAnswer: 'সিস্টেম ফন্ট স্ট্যাক অপারেটিং সিস্টেমে আগে থেকেই থাকা ফন্টগুলো (যেমন অ্যাপলের জন্য San Francisco, উইন্ডোজের জন্য Segoe UI, অ্যান্ড্রয়েডের জন্য Roboto) ব্যবহার করে টেক্সট ইনস্ট্যান্ট রেন্ডার করে, যা ফন্ট ডাউনলোডের নেটওয়ার্ক ব্যান্ডউইথ বাঁচায়।',
    enExplanation: `### Explanation
Loading custom Google Web Fonts introduces rendering delays and page loading bytes. **System Font Stacks** solve this by leveraging native fonts pre-installed on devices:
- **Apple (macOS/iOS)**: \`-apple-system\`, \`BlinkMacSystemFont\`, \`"SF Pro Text"\`.
- **Windows**: \`"Segoe UI"\`.
- **Android/Linux**: \`Roboto\`, \`Oxygen\`, \`Ubuntu\`.

By cascading these names, text displays instantly in the native operating system's design style, requiring zero network bandwidth.

### Real-World Example
Large SaaS systems (like GitHub, Notion, or Medium dashboard UI panels) use system font stacks to ensure maximum page loading speed and high system-level familiarity in their desktop applications.

### Best Practice
Place custom web fonts at the very front of the stack, but always follow them with the complete list of system fonts and finally the generic \`sans-serif\` fallback.

### Common Mistakes
Forgetting that system font names change over OS releases. Ensure you use the industry standard system stack array to catch all platform environments.

### Code Example
\`\`\`css
.system-text {
  font-family: 
    -apple-system,          /* iOS Safari, macOS Safari/Chrome */
    BlinkMacSystemFont,     /* macOS Chrome/Firefox */
    "Segoe UI",             /* Windows */
    Roboto,                 /* Android */
    Oxygen, Ubuntu, Cantarell, /* Linux environments */
    "Helvetica Neue",       /* Legacy fallbacks */
    sans-serif;             /* Universal fallback */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নতুন ওয়েব ফন্ট ডাউনলোড করতে নেটওয়ার্কের কারণে কিছুটা সময় লাগে। **System Font Stacks** সিস্টেমের নিজস্ব প্রি-ইন্সটলড ফন্ট ব্যবহারের মাধ্যমে এই ল্যাটেন্সি জিরো করে দেয়:
- **Apple**: \`-apple-system\`, \`BlinkMacSystemFont\`, \`"SF Pro Text"\`।
- **Windows**: \`"Segoe UI"\`।
- **Android/Linux**: \`Roboto\`, \`Oxygen\`, \`Ubuntu\`।

এই ফন্টগুলো ক্রমানুসারে স্ট্যাক করলে ডিভাইস অনুযায়ী টেক্সট তাৎক্ষণিকভাবে স্ক্রিনে রেন্ডার হবে এবং দেখতে সিস্টেম ওএসের নিজস্ব ফন্টের মতো পরিচিত মনে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
গিথুব (GitHub) বা নোশন (Notion) তাদের ড্যাশবোর্ড ইন্টারফেসের স্পিড সর্বোচ্চ রাখতে এবং ডেস্কটপ অ্যাপের সাথে চমৎকার ফ্যামিলিয়ারিটি দিতে সিস্টেম ফন্ট স্ট্যাক ব্যবহার করে।

### উত্তম অনুশীলন
স্ট্যাকের একদম শুরুতে আপনার কাস্টম ফন্টটি রাখুন এবং পরবর্তীতে সিস্টেম ফন্টগুলোর নাম ও সবশেষে জেনেরিক \`sans-serif\` রাখুন।

### সাধারণ ভুলসমূহ
ওএসের সংস্করণের সাথে সিস্টেম ফন্টের নাম বদল হওয়া লক্ষ্য না করা। প্রজেক্টের সুরক্ষায় স্ট্যান্ডার্ড সিস্টেম স্ট্যাক অ্যারেটি কপি করে ব্যবহার করা সবচেয়ে নিরাপদ।

### কোড উদাহরণ
\`\`\`css
.system-text {
  font-family: 
    -apple-system,          /* আইওএস ও ম্যাক ওএস সাফারি */
    BlinkMacSystemFont,     /* ম্যাক ক্রোম ও ফায়ারফক্স */
    "Segoe UI",             /* উইন্ডোজ */
    Roboto,                 /* অ্যান্ড্রয়েড */
    Oxygen, Ubuntu, Cantarell, /* লিনাক্স প্ল্যাটফর্ম */
    "Helvetica Neue",       /* পুরোনো ফালব্যাক */
    sans-serif;             /* গ্লোবাল ফালব্যাক */
}
\`\`\``
  },
  {
    id: 'css-62',
    title: 'Explain FOUT vs FOIT font rendering issues.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Typography', 'Performance', 'Font Loading'],
    enAnswer: 'FOUT (Flash of Unstyled Text) displays a fallback system font until the custom web font finishes loading. FOIT (Flash of Invisible Text) hides the text completely until the custom font is downloaded, leaving invisible areas.',
    bnAnswer: 'FOUT (Flash of Unstyled Text) ওয়েব ফন্ট লোড না হওয়া পর্যন্ত ডিফল্ট সিস্টেম ফন্ট দিয়ে লেখা প্রদর্শন করে। FOIT (Flash of Invisible Text) ওয়েব ফন্ট না আসা পর্যন্ত লেখাকে সম্পূর্ণ অদৃশ্য করে রাখে, যা পেজে ফাঁকা জায়গা তৈরি করে।',
    enExplanation: `### Explanation
When a browser loads a web page using a custom web font:
- **FOIT (Flash of Invisible Text)**: The browser hides the text for up to 3 seconds while waiting for the font file. If the network is slow, users see empty sections. Once downloaded, text flashes into view. This is bad for usability.
- **FOUT (Flash of Unstyled Text)**: The browser displays the text instantly using the closest fallback system font. Once the custom font is loaded, the text snaps or flashes into the new font family styling.

Developers control this behavior in CSS using the \`font-display\` descriptor inside the \`@font-face\` declaration.

### Real-World Example
If you access a blog via a slow mobile 3G connection and you can read the headings in Arial immediately, and then they morph into a custom font 5 seconds later, you are experiencing **FOUT**. If you see a blank page where headings should be, you are experiencing **FOIT**.

### Best Practice
Avoid FOIT. Always set \`font-display: swap\` inside your \`@font-face\` rules. This instructs the browser to use FOUT, rendering text instantly with a fallback font before swapping to the web font.

### Common Mistakes
Allowing default browser behaviors to cause FOIT on slower networks, which can make users abandon the site thinking the page has failed to load.

### Code Example
\`\`\`css
@font-face {
  font-family: 'CustomBrandFont';
  src: url('/fonts/brand-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  /* CRITICAL: Instructs browser to use FOUT (render fallback, swap later) */
  font-display: swap; 
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কাস্টম ওয়েব ফন্ট ব্যবহারের সময় দুটি সমস্যা প্রায়ই দেখা যায়:
- **FOIT (Flash of Invisible Text)**: ব্রাউজার ওয়েব ফন্ট ডাউনলোডের জন্য ৩ সেকেন্ড পর্যন্ত লেখা লুকিয়ে রাখে। নেটওয়ার্ক স্লো হলে ব্যবহারকারী ওই সময় ফাঁকা স্ক্রিন দেখেন এবং ফন্ট আসার পর লেখা ভেসে ওঠে।
- **FOUT (Flash of Unstyled Text)**: ব্রাউজার ফন্ট লোড হওয়ার অপেক্ষা না করে সাথে সাথে ফালব্যাক সিস্টেম ফন্ট দিয়ে লেখাটি চোখের সামনে দেখায়। ফন্ট ডাউনলোড সম্পন্ন হলে লেখাটি চট করে নতুন ফন্ট ফ্যাশনে বদলে যায়।

সিএসএসের \`@font-face\` ডিক্লেয়ারেশনের ভেতরে \`font-display\` সেট করে এই আচরণ নিয়ন্ত্রণ করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ধীরগতির থ্রিজি নেটে কোনো সাইটে ঢোকার পর যদি সাথে সাথে লেখাগুলো দেখা যায় এবং পরে তা বদলে স্টাইলিশ ফন্ট হয়, তবে সেটি হলো **FOUT**। আর যদি পেজটি লোড হলেও লেখার অংশগুলো দীর্ঘ সময় ফাঁকা বা অদৃশ্য থাকে, তবে সেটি হলো **FOIT**।

### উত্তম অনুশীলন
FOIT এড়ান। \`@font-face\`-এ সবসময় \`font-display: swap\` ব্যবহার করুন। এটি ব্রাউজারকে প্রথমে সিস্টেম ফন্ট দিয়ে লেখা প্রদর্শন করতে বাধ্য করে এবং ফন্ট ফাইল ডাউনলোড হওয়া মাত্র তা কাস্টম ফন্টে রূপান্তর করে।

### সাধারণ ভুলসমূহ
font-display ডিক্লেয়ার না করা, যার ফলে ব্রাউজার ডিফল্ট অ্যাকশনে চলে গিয়ে স্লো নেটে টেক্সট অদৃশ্য (FOIT) করে রাখে।

### কোড উদাহরণ
\`\`\`css
@font-face {
  font-family: 'CustomBrandFont';
  src: url('/fonts/brand-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  /* অত্যন্ত গুরুত্বপূর্ণ: FOUT সক্রিয় করবে */
  font-display: swap; 
}
\`\`\``
  },
  {
    id: 'css-63',
    title: 'Explain font-display descriptor strategies (auto, block, swap, fallback, optional).',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Fonts', 'Typography', 'Performance'],
    enAnswer: 'The font-display descriptor inside @font-face controls how web fonts are loaded. Strategies include: block (hide text until loaded), swap (show fallback immediately, swap later), fallback (short block period, then swap), and optional (use fallback if load takes too long).',
    bnAnswer: 'font-display ডেসক্রিপ্টর @font-face এর ভেতরে ওয়েব ফন্ট লোডিংয়ের আচরণ নিয়ন্ত্রণ করে। এর স্ট্র্যাটেজিগুলো হলো: block (ফন্ট না আসা পর্যন্ত লেখা দেখাবে না), swap (সাথে সাথে ফালব্যাক ফন্ট দেখাবে, পরে চেঞ্জ করবে), fallback (অল্প সময় ব্লক করে পরে সোয়াইপ করবে), এবং optional (দেরি হলে ওয়েব ফন্ট বাদ দিয়ে ফালব্যাক ফন্টেই লক থাকবে)।',
    enExplanation: `### Explanation
The \`font-display\` property allows fine-tuning of text rendering based on font load speeds:
1. **\`block\`**: Gives a short block period (invisible text, max 3s). If the font loads, it displays. If not, fallback renders. Used when the brand font is absolutely critical for layout size calculations.
2. **\`swap\`**: Zero block period. Displays fallback font immediately. Swaps to the custom font as soon as it is downloaded.
3. **\`fallback\`**: Tiny block period (e.g. 100ms). If the font isn't ready, it uses fallback. If the web font finishes loading within a short window (e.g. 3 seconds), it swaps; otherwise, it stays on the fallback font for the duration of the page session.
4. **\`optional\`**: Tiny block period. If the web font is ready, it is used. If not, fallback is used, and the web font is cached in the background for subsequent page views. The browser will **never** swap font faces on the active screen, avoiding visual layout shifts.

### Real-World Example
For a blog site focused on article reading speed, using \`font-display: optional\` is excellent because it guarantees the text never shifts or flashes while the user is actively reading the paragraph.

### Best Practice
For marketing headlines where typography is key, use \`font-display: swap\`. For long-form text portals where layouts shifting must be avoided, use \`font-display: optional\`.

### Common Mistakes
Using \`font-display: block\` globally, which causes unreadable invisible page layouts for mobile readers on weak networks.

### Code Example
\`\`\`css
@font-face {
  font-family: 'HeadlineFont';
  src: url('head.woff2') format('woff2');
  /* Recommended for readability and preventing layout shifting during reading */
  font-display: optional;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`font-display\` ওয়েব ফন্টের রেন্ডারিং ও টাইমআউট অপ্টিমাইজ করার ৪টি স্ট্র্যাটেজি প্রদান করে:
১. **\`block\`**: ৩ সেকেন্ড পর্যন্ত লেখা লুকিয়ে রাখে। ফন্ট লোড হলে তা দেখায়, নাহলে ফালব্যাক দেখায়। এটি সাধারণত লেআউট ডিজাইনের নিখুঁত ফিক্সিংয়ের জন্য ব্যবহৃত হয়।
২. **\`swap\`**: কোনো ব্লক পিরিয়ড নেই। সাথে সাথে সিস্টেম ফন্ট দিয়ে লেখা দেখাবে এবং কাস্টম ফন্ট ডাউনলোড হওয়া মাত্র সোয়াইপ করে আপডেট করে নেবে।
৩. **\`fallback\`**: অতি সামান্য সময় (যেমন ১০০ মিলি-সেকেন্ড) ব্লক করে রাখে। ফন্ট না পাওয়া গেলে ফালব্যাক লোড হয়। যদি ৩ সেকেন্ডের মধ্যে ফন্ট চলে আসে তবে সোয়াইপ হয়, নাহলে ওই সেশনের জন্য ফালব্যাক ফন্টেই পেজ লক থাকে।
৪. **\`optional\`**: এটি ব্যবহারকারীর জন্য সবচেয়ে আরামদায়ক। ফন্ট লোড হতে দেরি হলে তা বাতিল করে ফালব্যাক ফন্টেই লক করে দেয় এবং ডাউনলোড ফাইলটি ব্যাকগ্রাউন্ডে ক্যাশ করে রাখে পরবর্তী পেজ ভিজিটের জন্য। এর ফলে পেজ পড়ার সময় কোনো ফন্ট জাম্প বা ফ্লাশ হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
দীর্ঘ ই-বুক বা মিডিয়াম ডট কমের মতো ব্লগ পোর্টালে \`font-display: optional\` ব্যবহার করা সবচেয়ে ভালো, যাতে ইউজার পড়ার সময় ফন্ট বদলে গিয়ে পেজ স্ক্রল জাম্প না করে।

### উত্তম অনুশীলন
ডিজাইন টাইটেলের ক্ষেত্রে \`font-display: swap\` এবং দীর্ঘ বডি আর্টিকেলের ক্ষেত্রে \`font-display: optional\` ব্যবহার করার চেষ্টা করুন।

### সাধারণ ভুলসমূহ
\`font-display: block\` গ্লোবালি ব্যবহার করা, যার কারণে উইক কানেকশন সম্পন্ন ইউজারের মোবাইলে পুরো পেজের টেক্সট দীর্ঘ সময় অদৃশ্য হয়ে থাকে।

### কোড উদাহরণ
\`\`\`css
@font-face {
  font-family: 'HeadlineFont';
  src: url('head.woff2') format('woff2');
  /* রিডিংয়ের সময় পেজ জাম্প বন্ধ করতে রিকমেন্ডেড */
  font-display: optional;
}
\`\`\``
  },
  {
    id: 'css-64',
    title: 'Explain the object-fit property and its values.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Images', 'Visuals', 'Sizing'],
    enAnswer: 'object-fit defines how an <img> or <video> tag content scales to fit its specified width and height box. Values include: fill, contain, cover, none, and scale-down.',
    bnAnswer: 'object-fit নির্ধারণ করে একটি <img> বা <video> ট্যাগের ভেতরের কনটেন্ট তার নির্দিষ্ট উইডথ ও হাইট বক্সের ভেতর কীভাবে ফিট হবে। এর ভ্যালুগুলো হলো: fill, contain, cover, none, এবং scale-down।',
    enExplanation: `### Explanation
The \`object-fit\` property is the media element equivalent of \`background-size\`:
- **\`fill\`** (default): Stretches the image to fit the container bounds exactly, ignoring aspect ratio, which distorts the image.
- **\`contain\`**: Scales the image to completely display inside the container while preserving aspect ratio. May leave empty border spaces.
- **\`cover\`**: Scales the image to fill the entire container, maintaining aspect ratio. Excess parts of the image are cropped.
- **\`none\`**: Ignores container sizing completely, displaying the image at its original native resolution.
- **\`scale-down\`**: Behaves as either \`none\` or \`contain\`, choosing whichever produces the smaller rendered image size.

### Real-World Example
When creating a responsive grid of user profile card avatar badges, if users upload photos with different aspect ratios, setting \`object-fit: cover\` keeps all photos circular and centered without squishing user faces.

### Best Practice
Always combine \`object-fit: cover\` with \`object-position: center\` (or a custom focus point) to ensure the crop focuses on the subject of the image.

### Common Mistakes
Applying \`object-fit\` to a container \`<div>\` instead of directly to the child \`<img>\` or \`<video>\` element.

### Code Example
\`\`\`css
.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* Force image to fill circular dimensions without distorting */
  object-fit: cover;
  object-position: top center; /* Focuses crop on the face area */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`object-fit\` প্রোপার্টিটি ইমেজ বা ভিডিওর জন্য ঠিক সেভাবেই কাজ করে যেভাবে ব্যাকগ্রাউন্ড ইমেজের জন্য \`background-size\` কাজ করে:
- **\`fill\`** (ডিফল্ট): ছবির রেশিও উপেক্ষা করে টেনে পুরো কন্টেইনারে ফিট করে। ফলে ছবি চ্যাপ্টা হয়ে যায়।
- **\`contain\`**: ছবির অনুপাত বজায় রেখে পুরো ছবিটি কন্টেইনারে ফিট করে। কোনো অংশ কাটে না তবে সাইডে খালি জায়গা তৈরি হতে পারে।
- **\`cover\`**: ছবির অনুপাত বজায় রেখে পুরো কন্টেইনারটি ভরাট করে। কন্টেইনারের বাইরের অংশ স্বয়ংক্রিয়ভাবে কেটে (crop) যায়।
- **\`none\`**: কন্টেইনারের সাইজ উপেক্ষা করে ছবিটিকে তার আসল মাপে প্রদর্শন করে।
- **\`scale-down\`**: \`none\` এবং \`contain\` এর মধ্যে তুলনা করে যেটি ছোট ইমেজ সাইজ তৈরি করবে, সেটি সিলেক্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারদের আপলোড করা বিভিন্ন সাইজের ছবিকে যদি প্রোফাইল ড্যাশবোর্ডে বৃত্তাকার অ্যাভাটার বানাতে চান, তবে \`object-fit: cover\` ব্যবহার করুন। এটি ফেস বা ছবিকে বিকৃত না করে ঠিক মাঝখানের অংশটুকু কেটে সুন্দর গোল করে দেবে।

### উত্তম অনুশীলন
\`object-fit: cover\` ব্যবহারের সময় ছবির ফোকাস ঠিক রাখতে \`object-position\` ডিক্লেয়ার করুন (যেমন: \`object-position: center\`)।

### সাধারণ ভুলসমূহ
\`object-fit\` প্রোপার্টিটি ইমেজ ট্যাগের ওপর সরাসরি ব্যবহার না করে প্যারেন্ট ডিভ (\`<div>\`) কন্টেইনারে প্রয়োগ করা, যা কোনো কাজ করে না।

### কোড উদাহরণ
\`\`\`css
.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* ছবি চ্যাপ্টা না করে পুরো বৃত্তাকার এরিয়া ভরাট করবে */
  object-fit: cover;
  object-position: top center; /* মুখের ওপর ফোকাস ধরে রাখবে */
}
\`\`\``
  },
  {
    id: 'css-65',
    title: 'Explain the object-position property.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Images', 'Visuals', 'Sizing'],
    enAnswer: 'The object-position property specifies the alignment coordinates of an image or video inside its content box, similar to background-position.',
    bnAnswer: 'object-position প্রোপার্টি তার কন্টেইনার বক্সের ভেতরে ইমেজ বা ভিডিওর অ্যালাইনমেন্ট স্থানাঙ্ক নির্ধারণ করে, যা background-position এর মতোই কাজ করে।',
    enExplanation: `### Explanation
The \`object-position\` property works alongside \`object-fit\` (typically with \`cover\` or \`contain\`). It tells the browser how to align the image if it is cropped or leaves empty spacing:
- **Default value**: \`50% 50%\` (center center).
- **Keyword values**: \`top\`, \`bottom\`, \`left\`, \`right\`, \`top left\`, \`bottom right\`.
- **Coordinates**: Precise coordinates using percentages or pixels (e.g. \`10px 30px\`).

### Real-World Example
If you have a vertical layout banner container that crops wide horizontal photos of buildings, setting \`object-position: bottom\` shifts the crop alignment downwards, showing the base details of the building instead of cropping it out.

### Best Practice
Use relative percentages for responsive image positioning so that subject details stay visible across desktop and mobile screens.

### Common Mistakes
Forgetting that \`object-position\` has no visible effect if \`object-fit\` is set to \`fill\` (since the image is stretched to fit the boundaries exactly with no excess cropped areas).

### Code Example
\`\`\`css
.scenery-card {
  width: 100%;
  height: 300px;
  object-fit: cover;
  /* Crops the image focusing on the bottom-right coordinate */
  object-position: right bottom;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`object-position\` প্রোপার্টিটি \`object-fit\` এর সাথে কাজ করে। ছবি ক্রপ বা অতিরিক্ত জায়গা খালি থাকার সময় ছবিটি কন্টেইনারের কোন অংশ ঘেঁষে বসবে তা এটি ঠিক করে:
- **ডিফল্ট ভ্যালু**: \`50% 50%\` (ঠিক মাঝখানে)।
- **কিওয়ার্ড ভ্যালুসমূহ**: \`top\`, \`bottom\`, \`left\`, \`right\`, \`top left\` ইত্যাদি।
- **স্থানাঙ্ক**: পারসেন্টেজ বা পিক্সেল দিয়ে নিখুঁত অফসেট দেওয়া যায় (যেমন: \`10px 30px\`)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ল্যান্ডস্কেপ ছবিতে নিচে ল্যান্ডমার্কের আকাশচুম্বী দালান রয়েছে কিন্তু ওপরে কেবল খালি আকাশ। কার্ড ব্যানারটিতে ক্রপিং করার সময় যদি \`object-position: bottom\` সেট করেন, তবে আকাশ কেটে গিয়ে দালানের অংশটুকু সুন্দরভাবে দৃশ্যমান থাকবে।

### উত্তম অনুশীলন
রেসপনসিভ পজিশনিংয়ের জন্য পারসেন্টেজ ভ্যালু ব্যবহার করুন যাতে মোবাইল ও ডেস্কটপে ইমেজের সাবজেক্ট ফোকাস থেকে বিচ্যুত না হয়।

### সাধারণ ভুলসমূহ
\`object-fit: fill\` থাকা অবস্থায় \`object-position\` ব্যবহার করা। যেহেতু পুরো ছবি জোর করে বর্ডারে আটকে যায়, কোনো অংশই কাটা পড়ে না, তাই পজিশন দেওয়া এখানে অর্থহীন।

### কোড উদাহরণ
\`\`\`css
.scenery-card {
  width: 100%;
  height: 300px;
  object-fit: cover;
  /* ডানের নিচের কোণাকে ফোকাস রেখে ছবি ক্রপ করবে */
  object-position: right bottom;
}
\`\`\``
  },
  {
    id: 'css-66',
    title: 'Explain CSS logical properties (margin-inline, padding-block).',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Logical Properties', 'Internationalization', 'Layout'],
    enAnswer: 'CSS Logical Properties map styles to flow directions (writing-modes) rather than physical screens directions. margin-inline maps to horizontal (left/right) spacing in English, while padding-block maps to vertical (top/bottom) padding.',
    bnAnswer: 'CSS লজিক্যাল প্রোপার্টিজ ফিজিক্যাল স্ক্রিনের দিকের পরিবর্তে লেখার দিক বা রাইটিং-মোডের ওপর ভিত্তি করে স্টাইল নির্ধারণ করে। margin-inline অনুভূমিক স্পেসিং এবং padding-block উল্লম্ব প্যাডিংকে বোঝায়।',
    enExplanation: `### Explanation
Traditional CSS properties are tied to **physical** screen directions: \`top\`, \`right\`, \`bottom\`, \`left\`. However, websites are increasingly multi-lingual, and some languages read vertically (top-to-bottom, like traditional Japanese) or right-to-left (RTL, like Arabic).
**Logical Properties** replace physical directions with flow directions relative to the reading mode:
- **Block Axis**: The direction text lines stack (vertical in English, top-to-bottom).
  - \`margin-block-start\` / \`margin-block-end\` replaces \`margin-top\` / \`margin-bottom\`.
  - \`padding-block\` combines top and bottom padding.
- **Inline Axis**: The direction text flows along a line (left-to-right in English, right-to-left in Arabic).
  - \`margin-inline-start\` / \`margin-inline-end\` replaces \`margin-left\` / \`margin-right\` (shifts automatically to right-to-left when theme language is toggled).
  - \`padding-inline\` combines left and right padding.

### Real-World Example
If you style an article with a vertical line border on the left side (\`border-left: 4px solid blue;\`), and the site translates to Arabic (RTL), that border remains on the left, which is incorrect for RTL readers. If you use \`border-inline-start: 4px solid blue;\`, the border automatically flips to the right side on RTL pages.

### Best Practice
Adopt logical properties globally in modern codebases. Use \`margin-inline: auto\` to center blocks, and use \`padding-inline\` / \`padding-block\` for consistent box dimensions.

### Common Mistakes
Mixing logical properties (like \`margin-inline-start\`) and physical properties (like \`margin-left\`) in the same stylesheet, causing override bugs that are hard to trace.

### Code Example
\`\`\`css
.article-box {
  background-color: #f3f4f6;
  /* Replaces padding-top & padding-bottom: 20px */
  padding-block: 20px;
  
  /* Replaces padding-left & padding-right: 32px */
  padding-inline: 32px;
  
  /* Automatically shifts margin-left or margin-right depending on RTL/LTR text flow */
  margin-inline-start: 15px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রথাগত সিএসএস প্রোপার্টিজ ফিজিক্যাল স্ক্রিনের চারদিকের (\`top\`, \`right\`, \`bottom\`, \`left\`) ওপর নির্ভরশীল। কিন্তু ইন্টারন্যাশনাল বা বহুভাষী সাইটে কিছু লেখা ডান থেকে বামে (যেমন আরবী) বা ওপর থেকে নিচে (যেমন জাপানি) পড়তে হয়।
**লিজিক্যাল প্রোপার্টিজ** ফিজিক্যাল দিক বর্জন করে লেখার গতি বা ফ্লো অনুযায়ী ডিরেকশন ঠিক করে:
- **Block Axis**: যে অক্ষে প্যারাগ্রাফ লাইনগুলো একের নিচে অন্যটি সাজানো থাকে (ইংরেজি বা বাংলায় উপর থেকে নিচে)।
  - \`margin-block-start\` / \`margin-block-end\` যথাক্রমে \`margin-top\` / \`margin-bottom\` কে নির্দেশ করে।
  - \`padding-block\` টপ এবং বটম প্যাডিংকে একসাথে প্রকাশ করে।
- **Inline Axis**: যে অক্ষে একটি লাইনের ভেতরের অক্ষরগুলো প্রবাহিত হয় (ইংরেজি বা বাংলায় বাম থেকে ডানে, আর আরবী লাইনে ডান থেকে বামে)।
  - \`margin-inline-start\` / \`margin-inline-end\` যথাক্রমে \`margin-left\` / \`margin-right\` কে নির্দেশ করে। আরবী পেজে এটি অটোমেটিক ইনভার্ট হয়ে কাজ করবে।
  - \`padding-inline\` বাম ও ডানদিকের প্যাডিংকে প্রকাশ করে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি একটি নোটিশ বক্সের বাম পাশে বর্ডার দিয়েছেন (\`border-left: 4px solid blue;\`)। পেজটি যখন আরবী ভাষায় কনভার্ট হবে, তখন ওই বর্ডারটি বাম পাশেই থেকে যাবে যা আরবী লেখার জন্য বেমানান। কিন্তু আপনি যদি \`border-inline-start: 4px solid blue;\` ব্যবহার করেন, তবে আরবী পেজে বর্ডারটি অটোমেটিক ডান পাশে চলে যাবে।

### উত্তম অনুশীলন
আধুনিক প্রজেক্টে ফিজিক্যাল প্রোপার্টির বদলে লজিক্যাল প্রোপার্টি ব্যবহার করুন। ব্লক এলিমেন্ট সেন্টারিংয়ের জন্য \`margin-inline: auto\` ব্যবহার করা একটি ভালো অনুশীলন।

### সাধারণ ভুলসমূহ
একই সিএসএস কোডের ভেতরে লজিক্যাল প্রোপার্টি (যেমন: \`margin-inline-start\`) এবং ফিজিক্যাল প্রোপার্টি (\`margin-left\`) মিক্স করে ফেলা, যার ফলে ওভাররাইড বাগ তৈরি হতে পারে।

### কোড উদাহরণ
\`\`\`css
.article-box {
  background-color: #f3f4f6;
  /* padding-top ও padding-bottom: 20px এর পরিবর্তে */
  padding-block: 20px;
  
  /* padding-left ও padding-right: 32px এর পরিবর্তে */
  padding-inline: 32px;
  
  /* LTR বা RTL রাইটিং মোড অনুযায়ী এটি অটোমেটিক বাম বা ডান মার্জিন দেবে */
  margin-inline-start: 15px;
}
\`\`\``
  },
  {
    id: 'css-67',
    title: 'Explain CSS Counters and how to create custom list numbering.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Lists', 'Counters', 'Typography'],
    enAnswer: 'CSS Counters are variables maintained by CSS engine whose values can be incremented by CSS rules. They are controlled using counter-reset, counter-increment, and rendered using the counter() function inside content.',
    bnAnswer: 'CSS কাউন্টার হলো সিএসএস ইঞ্জিন দ্বারা ট্র্যাক করা ভেরিয়েবল যার মান কোডের নিয়মে বাড়ানো বা কমানো যায়। এগুলো counter-reset এবং counter-increment দিয়ে নিয়ন্ত্রণ করা হয় এবং content প্রোপার্টির ভেতর counter() ফাংশন দিয়ে প্রদর্শন করা হয়।',
    enExplanation: `### Explanation
CSS counters allow you to create nested list numbering structures (like "1.1", "1.2", "1.2.1") completely in CSS without manually hardcoding numbers in HTML:
1. **\`counter-reset\`**: Initializes or resets a counter variable. Typically placed on the parent container (e.g. \`counter-reset: section-counter;\`).
2. **\`counter-increment\`**: Increments the counter value. Typically applied to the items you want to count (e.g. \`counter-increment: section-counter;\`).
3. **\`counter()\` / \`counters()\`**: Functions that read the current counter value. Used inside the \`content\` property of pseudo-elements (like \`::before\`).

### Real-World Example
If you are designing a document page (like a terms of service site) with nested headings (\`<h1>\`, \`<h2>\`), you can use CSS counters to automatically prefix every \`<h2>\` heading with nested index numbers like "Section 1.3: User Rights".

### Best Practice
Use the \`counters()\` (plural) function with a dot divider parameter (e.g. \`counters(item, ".")\`) to handle deep multi-level nested list numbering dynamically.

### Common Mistakes
Forgetting to reset the counter on the parent element, which can cause section numbering to start from arbitrary accumulative values when multiple lists exist.

### Code Example
\`\`\`css
/* Parent list resets counter */
ol.custom-index {
  counter-reset: list-item;
  list-style: none; /* Hide default browser numbers */
  padding-left: 20px;
}

/* Increment counter for each li */
ol.custom-index li {
  counter-increment: list-item;
}

/* Render counter prefix */
ol.custom-index li::before {
  content: counters(list-item, ".") " - ";
  font-weight: bold;
  color: #4f46e5;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS counters এইচটিএমএলে হাত দিয়ে নম্বর না লিখে সিএসএসের সাহায্যে জটিল নেস্টেড লিস্ট নম্বর (যেমন: "1.1", "1.2", "1.2.1") ডাইনামিকালি তৈরি করার সুবিধা দেয়:
১. **\`counter-reset\`**: কাউন্টার ভেরিয়েবল শুরু বা রিসেট করে। এটি সাধারণত প্যারেন্ট কন্টেইনারে ঘোষণা করা হয় (যেমন: \`counter-reset: section-counter;\`)।
২. **\`counter-increment\`**: কাউন্টারের মান বাড়ায়। এটি কাউন্ট করা প্রতিটি চাইল্ড আইটেমে ব্যবহার করা হয় (যেমন: \`counter-increment: section-counter;\`)।
৩. **\`counter()\` / \`counters()\`**: কাউন্টারের রানিং মানটি রিড করে। এটি সিউডো-এলিমেন্টের (\`::before\`) \`content\` প্রোপার্টির ভেতর কল করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডকুমেন্টেশন পেজে অনেকগুলো আর্টিকেল বা হেডিং রয়েছে। সেখানে প্রতিবার হেডিং \`<h2>\` এড করার পর নিজে নিজে "অধ্যায় ১.২" বা "ধারা ৩.১" টেক্সট যোগ করার কাজে সিএসএস কাউন্টার ব্যবহৃত হয়।

### উত্তম অনুশীলন
মাল্টি-লেভেল বা নেস্টেড নাম্বারিং সচল রাখতে বহুবচন \`counters()\` ফাংশন ব্যবহার করুন এবং মাঝে ডট কানেক্টর সেট করে দিন (যেমন: \`counters(item, ".")\`)।

### সাধারণ ভুলসমূহ
প্যারেন্ট এলিমেন্টে কাউন্টার রিসেট করতে ভুলে যাওয়া, যার ফলে একই পেজের পরবর্তী নতুন লিস্টে নাম্বারিং ১ থেকে শুরু হওয়ার বদলে আগের লিস্টের শেষ নম্বর থেকে কাউন্ট হতে থাকে।

### Code Example
\`\`\`css
/* প্যারেন্ট লিস্ট কাউন্টার রিসেট করবে */
ol.custom-index {
  counter-reset: list-item;
  list-style: none; /* ডিফল্ট ব্রাউজার নাম্বারিং বন্ধ করবে */
  padding-left: 20px;
}

/* প্রতি লিঙ্কের জন্য ১ করে বাড়বে */
ol.custom-index li {
  counter-increment: list-item;
}

/* সিউডো এলিমেন্টের ভেতর ডাইনামিক কাউন্টার শো করবে */
ol.custom-index li::before {
  content: counters(list-item, ".") " - ";
  font-weight: bold;
  color: #4f46e5;
}
\`\`\``
  },
  {
    id: 'css-68',
    title: 'Explain SVG styling in CSS.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'SVG', 'Visuals', 'Graphics'],
    enAnswer: 'SVG elements can be styled directly in CSS using specific properties like fill (sets shape interior color), stroke (sets path borders), stroke-width, and stroke-dasharray (creates dashed borders).',
    bnAnswer: 'SVG এলিমেন্টগুলোকে সরাসরি সিএসএস দিয়ে কাস্টমাইজ করা যায়। এর জন্য নির্দিষ্ট প্রোপার্টিজ যেমন: fill (ভেতরের রঙ), stroke (বাউন্ডারি রেখার রঙ), stroke-width এবং stroke-dasharray (রেখা ডট-ডট করা) ব্যবহৃত হয়।',
    enExplanation: `### Explanation
SVGs (Scalable Vector Graphics) are XML-based vector graphics. When embedded inline within HTML documents, their nodes (like \`<path>\`, \`<circle>\`, \`<rect>\`) can be styled in CSS:
- **\`fill\`**: Replaces the HTML \`color\` or \`background-color\` for vectors. Sets the color of the interior shape.
- **\`stroke\`**: Replaces \`border-color\`. Defines the outline path line color.
- **\`stroke-width\`**: Defines the thickness of the outline.
- **\`stroke-dasharray\`**: Creates dotted or dashed vector boundaries (e.g. \`stroke-dasharray: 5 5\` is 5px solid dash, 5px space).
- **\`currentColor\`**: Special keyword. Binds SVG fills or strokes to inherit the CSS \`color\` property of their parent element.

### Real-World Example
When loading vector icons inside buttons, setting \`fill: currentColor\` on the icon paths makes the icons automatically transition color when the button color transitions on hover.

### Best Practice
Always use \`fill: currentColor\` for UI icons. This ensures that changing the text color in CSS automatically styles the vector graphics.

### Common Mistakes
Trying to use \`background-color\` or \`color\` directly on SVG tags and wondering why vector shapes remain black or white. You must use \`fill\` and \`stroke\`.

### Code Example
\`\`\`css
/* Icon styles */
.brand-icon {
  width: 24px;
  height: 24px;
  fill: currentColor; /* Inherits text color */
  stroke: none;
}

/* Decorative animated circle loader */
.loader-circle {
  fill: none;
  stroke: #4f46e5;
  stroke-width: 4px;
  stroke-dasharray: 80 20; /* 80px outline, 20px gap */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
SVG (Scalable Vector Graphics) হলো এক্সএমএল-ভিত্তিক ভেক্টর গ্রাফিক্স। একে ইনলাইন এইচটিএমএল হিসেবে লোড করলে এর নোডগুলো (যেমন \`<path>\`, \`<circle>\`) সিএসএস দিয়ে ডাইনামিক স্টাইল করা যায়:
- **\`fill\`**: ভেক্টরের ভেতরের মূল ব্যাকগ্রাউন্ড কালার সেট করে। সাধারণ সিএসএসের \`color\` এখানে কাজ করে না।
- **\`stroke\`**: ভেক্টরের বাউন্ডারি বা বর্ডারের কালার সেট করে।
- **\`stroke-width\`**: বর্ডার লাইনের পুরুত্ব বা থিকনেস ঠিক করে।
- **\`stroke-dasharray\`**: বর্ডারটি ড্যাশ বা ডট-ডট করার জন্য ব্যবহৃৎ প্যাটার্ন।
- **\`currentColor\`**: এটি একটি বিশেষ কিওয়ার্ড যা এসভিজিকে তার প্যারেন্ট এলিমেন্টের সিএসএস \`color\` এর মান ডাইনামিকালি ইনহেরিট করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
বাটনের ভেতর সোশ্যাল মিডিয়া আইকন ব্যবহারের সময় আইকন পাথে \`fill: currentColor\` ব্যবহার করলে বাটনের টেক্সটের রঙ পরিবর্তনের সাথে সাথে আইকনের কালারও স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।

### উত্তম অনুশীলন
ইউজার ইন্টারফেসের আইকনগুলোর পাথে \`fill: currentColor\` প্র্যাকটিস মেনে চলুন, যাতে সিএসএসে ফন্ট কালার পরিবর্তনের সাথে আইকনগুলোও ব্র্যান্ড কালার পেয়ে যায়।

### সাধারণ ভুলসমূহ
এসভিজি পাথের ওপর \`background-color\` বা \`color\` সেট করার চেষ্টা করা। ভেক্টরের ডিজাইনে অবশ্যই \`fill\` এবং \`stroke\` প্রোপার্টি ব্যবহার করতে হবে।

### কোড উদাহরণ
\`\`\`css
/* আইকন স্টাইল */
.brand-icon {
  width: 24px;
  height: 24px;
  fill: currentColor; /* প্যারেন্টের টেক্সট কালার ইনহেরিট করবে */
  stroke: none;
}

/* অ্যানিমেটেড সার্কেল লোডার */
.loader-circle {
  fill: none;
  stroke: #4f46e5;
  stroke-width: 4px;
  stroke-dasharray: 80 20; /* ৮০ পিক্সেল বর্ডার, ২০ পিক্সেল ফাঁকা */
}
\`\`\``
  },
  {
    id: 'css-69',
    title: 'Explain the CSS will-change property and its optimization rules.',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Performance', 'Rendering', 'GPU'],
    enAnswer: 'The will-change property warns the browser that an element is about to be animated, allowing the browser to offload computations to the GPU beforehand. It must be used as a last resort and removed after the animation is done to avoid memory leaks.',
    bnAnswer: 'will-change প্রোপার্টি ব্রাউজারকে আগে থেকেই সতর্ক করে যে কোনো উপাদানের ওপরে অ্যানিমেশন হতে যাচ্ছে, যা ব্রাউজারকে কাজটি জিপিইউতে পাঠিয়ে প্রস্তুত রাখতে সাহায্য করে। এটি সতর্কতার সাথে এবং কেবল শেষ অবলম্বন হিসেবে ব্যবহার করা উচিত।',
    enExplanation: `### Explanation
The \`will-change\` property tells the browser what properties are expected to change on an element in the near future:
- Syntax: \`will-change: transform, opacity;\`.
- **How it works**: Browsers attempt to optimize layout builds. When you animate something, it can lag on the first frame because browser calculations start late. \`will-change\` forces the browser to isolate the element into a separate GPU layer (layer promotion) beforehand, making animations buttery smooth.

**CRITICAL performance warning**:
Overusing \`will-change\` is extremely harmful. Creating layers consumes graphic memory (RAM/V8 heaps). If applied globally (like \`* { will-change: transform; }\`), browser performance will crash due to graphic memory exhaustion.

### Real-World Example
If you build a complex parallax scrolling page with cards that fly in, you apply \`will-change: transform\` to the cards. The scrolling will feel smooth.

### Best Practice
Follow these three rules:
1. Don't use \`will-change\` unless you actually experience animation lags.
2. Don't apply it to too many elements.
3. Apply it dynamically in JavaScript on hover/focus, and remove it once the animation finishes.

### Common Mistakes
Leaving \`will-change\` active permanently on hundreds of page elements in CSS files, leading to device battery drain and browser slowdown.

### Code Example
\`\`\`css
/* Optimizing a heavy popover animation container */
.heavy-popover {
  will-change: transform, opacity; /* GPU layer promotion hint */
  transition: transform 0.3s ease, opacity 0.3s ease;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`will-change\` প্রোপার্টি ব্রাউজারকে অগ্রিম সংকেত দেয় যে কোনো একটি নির্দিষ্ট উপাদানের প্রোপার্টিজ অদূর ভবিষ্যতে পরিবর্তিত হতে পারে:
- সিনট্যাক্স: \`will-change: transform, opacity;\`।
- **কাজ করার প্রক্রিয়া**: সাধারণ অবস্থায় অ্যানিমেশন শুরু হওয়ার মুহূর্তে কিছুটা ল্যাগ হতে পারে কারণ ব্রাউজার তাৎক্ষণিকভাবে লেআউটের হিসাব মেলাতে পারে না। will-change দিলে ব্রাউজার এলিমেন্টটিকে আগেই একটি নতুন জিপিইউ লেয়ারে (GPU Layer) পাঠিয়ে প্রস্তুত রাখে, ফলে প্রথম ফ্রেম থেকেই অ্যানিমেশন অত্যন্ত স্মুথ হয়।

**গুরুত্বপূর্ণ সতর্কতা**:
এর অতিরিক্ত ব্যবহার ডিভাইসের জন্য মারাত্মক ক্ষতিকর। জিপিইউ লেয়ার তৈরি করতে গ্রাফিক্স মেমোরি খরচ হয়। আপনি যদি গ্লোবালি সব এলিমেন্টে will-change দিয়ে রাখেন, তবে মেমোরি ফুরিয়ে ব্রাউজার ক্র্যাশ করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
প্যারালাক্স স্ক্রলিং পেজে যেখানে কার্ডগুলো স্ক্রলিংয়ের সাথে সাথে ডান-বামে মসৃণভাবে ওড়ে, সেখানে কার্ড এলিমেন্টগুলোতে \`will-change: transform\` দিলে স্ক্রলিং অনেক আরামদায়ক মনে হয়।

### উত্তম অনুশীলন
৩টি নিয়ম মেনে চলুন:
১. অ্যানিমেশনে বাস্তব ল্যাগ বা ফ্রেম ড্রপ না দেখা দিলে এটি ব্যবহার করবেন না।
২. একসাথে অনেক এলিমেন্টে এটি সেট করবেন না।
৩. সবচেয়ে ভালো হয় জাভাস্ক্রিপ্ট দিয়ে হোভার করার সময় will-change যুক্ত করা এবং অ্যানিমেশন শেষে তা সরিয়ে ফেলা।

### সাধারণ ভুলসমূহ
স্থায়ীভাবে সিএসএস ফাইলে শত শত কার্ডে will-change লিখে রাখা, যা মোবাইলে চার্জ দ্রুত শেষ হওয়া এবং ডিভাইস গরম হওয়ার কারণ হতে পারে।

### কোড উদাহরণ
\`\`\`css
/* ভারী একটি পপওভার উইন্ডো অপ্টিমাইজ করার নিয়ম */
.heavy-popover {
  will-change: transform, opacity; /* জিপিইউ লেয়ার অপ্টিমাইজেশন */
  transition: transform 0.3s ease, opacity 0.3s ease;
}
\`\`\``
  },
  {
    id: 'css-70',
    title: 'Explain accessibility best practices in CSS (A11y, screen readers).',
    difficulty: 'intermediate',
    category: 'css',
    tags: ['CSS', 'Accessibility', 'UX', 'A11y'],
    enAnswer: 'CSS accessibility (A11y) ensures that style choices do not lock out disabled users. Best practices include maintaining high color contrast, styling focus states clearly, and using a .sr-only class to hide elements visually while keeping them readable for screen readers.',
    bnAnswer: 'CSS অ্যাক্সেসিবিলিটি (A11y) নিশ্চিত করে যেন ডিজাইনের কারণে কোনো প্রতিবন্ধী ইউজার ওয়েবসাইট ব্রাউজে বাধা না পান। এর উত্তম অনুশীলন হলো পর্যাপ্ত কালার কনট্রাস্ট রাখা, ফোকাস স্টাইল স্পষ্ট করা এবং .sr-only ক্লাস দিয়ে স্ক্রিন রিডারের জন্য হিডেন কনটেন্ট বজায় রাখা।',
    enExplanation: `### Explanation
CSS has a massive impact on accessibility (A11y):
1. **Focus Outline**: Never write \`*:focus { outline: none; }\` without providing a highly visible fallback outline. Keyboard users rely on focus indicator boxes to navigate pages.
2. **Color Contrast**: Ensure text contrast against background meets WCAG 2.1 AA standards (minimum contrast ratio of 4.5:1 for normal text, 3:1 for large text).
3. **Visually Hidden (.sr-only)**: Sometimes you want to hide elements (like helper skip links or form details) from visual desktop users but keep them accessible for blind users using screen readers.
   - Using \`display: none\` or \`visibility: hidden\` hides it from screen readers too.
   - Use the \`.sr-only\` (screen-reader-only) CSS clip pattern instead.

### Real-World Example
If you design an icon-only button showing a trash can vector icon with no text, a blind user cannot understand what the button does. Adding a text label with class \`.sr-only\` showing "Delete user profile" allows screen readers to read the button purpose aloud.

### Best Practice
Adopt font sizing using relative \`rem\` units so that if user scales their browser font size, the CSS layout adapts naturally. Use outline offsets to style attractive focus rings.

### Common Mistakes
Using color as the only source of visual feedback (e.g. green border for success inputs, red for errors). Colorblind users cannot see these differences. Always supplement color feedback with text messages or icons.

### Code Example
\`\`\`css
/* Visually Hidden but fully accessible to Screen Readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Highly visible focus state for keyboard accessibility */
.btn:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 3px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিএসএস ডিজাইনের অনেক সিদ্ধান্ত অ্যাক্সেসিবিলিটি (A11y) উন্নত বা ব্যাহত করতে পারে:
১. **ফোকাস আউটলাইন**: কখনো ফোকাস আউটলাইন সম্পূর্ণ ভ্যানিশ (\`*:focus { outline: none; }\`) করবেন না। কীবোর্ড ব্যবহারকারীরা ফোকাস বক্স দেখেই বোঝেন তারা পেজের কোথায় আছেন।
২. **কালার কনট্রাস্ট**: লেখার ও ব্যাকগ্রাউন্ডের মধ্যকার কনট্রাস্ট অনুপাত যেন নুন্যতম ৪.৫:১ হয় (WCAG AA স্ট্যান্ডার্ড), যাতে কম দৃষ্টিশক্তিসম্পন্ন ইউজাররাও লেখাটি সহজে পড়তে পারেন।
৩. **স্ক্রিন রিডার ওনলি (.sr-only)**: ভিজ্যুয়াল ব্যবহারকারীদের জন্য কন্টেন্ট লুকিয়ে রাখা কিন্তু দৃষ্টি প্রতিবন্ধী স্ক্রিন রিডার ব্যবহারকারীদের জন্য কোড রিড করতে সাহায্য করার একটি টেকনিক।
   - এ ক্ষেত্রে \`display: none\` বা \`visibility: hidden\` দিলে স্ক্রিন রিডারও লেখাটি পড়তে পারে না।
   - এর সমাধান হিসেবে \`.sr-only\` (screen-reader-only) পজিশনিং ও ক্লিপিং ক্লাস ব্যবহার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
বাটনের ভেতর কোনো লেখা ছাড়া কেবল একটি ময়লার ঝুড়ির (trash can) আইকন দিয়েছেন। সাধারণ ইউজার বুঝলেও অন্ধ ইউজার বুঝবেন না। বাটনে একটি \`.sr-only\` টেক্সট "Delete user profile" লিখে রাখলে স্ক্রিন রিডারটি বাটন ফোকাস হওয়া মাত্র তা পড়ে শোনাবে।

### উত্তম অনুশীলন
ফন্ট সাইজ নির্ধারণে \`rem\` ব্যবহার করুন যাতে ব্রাউজারের টেক্সট স্কেলিং ঠিকমতো কাজ করে। সফল বা ব্যর্থ মেসেজে রঙের পাশাপাশি অবশ্যই আইকন বা লেখা যুক্ত করুন, কারণ কালার ব্লাইন্ড ইউজাররা কেবল রঙ পরিবর্তন বুঝতে পারেন না।

### সাধারণ ভুলসমূহ
ফর্মের ইনপুটে ভুলের সংকেত দিতে কেবল বর্ডার লাল কালার করে দেওয়া এবং কোনো সতর্কবার্তা বা টেক্সট আইকন না রাখা।

### কোড উদাহরণ
\`\`\`css
/* চোখের আড়ালে থাকবে কিন্তু স্ক্রিন রিডার ঠিকই এটি রিড করতে পারবে */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* কীবোর্ডের মাধ্যমে ট্যাবিং করার সময় চমৎকার ভিজ্যুয়াল আউটলাইন দেবে */
.btn:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 3px;
}
\`\`\``
}
];
