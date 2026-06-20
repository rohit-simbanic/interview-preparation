import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'css-1',
    title: 'Explain the CSS Box Model and its components.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Box Model', 'Fundamentals'],
    enAnswer: 'The CSS Box Model is a container that wraps every HTML element. It consists of four layers: Content (the actual text or image), Padding (clear space around the content), Border (a line wrapping the padding and content), and Margin (clear space outside the border).',
    bnAnswer: 'CSS বক্স মডেল হলো একটি কন্টেইনার যা প্রতিটি HTML এলিমেন্টকে ঘিরে থাকে। এর চারটি অংশ রয়েছে: Content (আসল টেক্সট বা ইমেজ), Padding (কনটেন্টের চারপাশের খালি জায়গা), Border (প্যাডিং ও কনটেন্টকে ঘিরে থাকা রেখা), এবং Margin (বর্ডারের বাইরের খালি জায়গা)।',
    enExplanation: `### Explanation
The CSS Box Model is the foundation of design and layout on the web. Every element is represented as a rectangular box. The box has four parts:
1. **Content**: The core area where text, images, or child elements appear. Dimensions are set via \`width\` and \`height\`.
2. **Padding**: The space between the content area and the border. It is transparent and inherits the background color of the element.
3. **Border**: The line surrounding the padding and content. You can set its width, style (solid, dashed, etc.), and color.
4. **Margin**: The outermost space that separates this element from other elements. It is completely transparent and does not show the background color.

### Real-World Example
If you create a button, the text inside is the **Content**, the space between the text and the button's edge is the **Padding**, the colored outline is the **Border**, and the space separating this button from another button next to it is the **Margin**.

### Best Practice
Set explicit padding and margins to create structural breathing room (whitespace) in UI layouts. Always keep in mind how margin/padding behaves on inline vs block elements.

### Common Mistakes
Confusing padding and margin. Remember: padding is *inside* the border (impacts element size/click area), margin is *outside* the border (impacts spacing between elements).

### Code Example
\`\`\`css
.box {
  width: 300px;
  height: 100px;
  padding: 20px;
  border: 5px solid #4f46e5;
  margin: 15px;
  background-color: #f3f4f6;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS বক্স মডেল হলো ওয়েব পেজের ডিজাইন এবং লেআউটের ভিত্তি। প্রতিটি এলিমেন্টকে একটি চারকোনা বক্স হিসেবে ধরা হয়। এই বক্সের চারটি অংশ থাকে:
১. **Content**: মূল অংশ যেখানে টেক্সট, ছবি বা অন্য চাইল্ড এলিমেন্ট থাকে। \`width\` এবং \`height\` দিয়ে এর সাইজ নির্ধারণ করা হয়।
২. **Padding**: কনটেন্ট এবং বর্ডারের মধ্যবর্তী খালি জায়গা। এটি ট্রান্সপারেন্ট এবং এলিমেন্টের ব্যাকগ্রাউন্ড কালার পায়।
৩. **Border**: প্যাডিং ও কনটেন্টের চারপাশে থাকা বর্ডার বা রেখা। এর স্টাইল, কালার এবং উইডথ কাস্টমাইজ করা যায়।
৪. **Margin**: সবচেয়ে বাইরের অংশ যা এই এলিমেন্টটিকে অন্য এলিমেন্ট থেকে আলাদা রাখে। এটি সম্পূর্ণ ট্রান্সপারেন্ট এবং এতে কোনো ব্যাকগ্রাউন্ড কালার পায় না।

### বাস্তব-ভিত্তিক উদাহরণ
ধরা যাক একটি বাটনের টেক্সট হলো **Content**, বাটনের টেক্সট থেকে বাটন বর্ডারের দূরত্ব হলো **Padding**, বাটনের রঙিন বাউন্ডারি হলো **Border**, এবং দুটি বাটনের মধ্যকার স্পেস হলো **Margin**।

### উত্তম অনুশীলন
ডিজাইনে হোয়াইটস্পেস তৈরি করতে মার্জিন ও প্যাডিংয়ের সঠিক ব্যবহার নিশ্চিত করুন। ইনলাইন এবং ব্লক এলিমেন্টের ক্ষেত্রে মার্জিন/প্যাডিং কীভাবে কাজ করে তা মনে রাখা জরুরি।

### সাধারণ ভুলসমূহ
মার্জিন এবং প্যাডিংয়ের মধ্যে গুলিয়ে ফেলা। মনে রাখবেন: প্যাডিং বর্ডারের *ভেতরে* থাকে (ক্লিক করার এরিয়া বাড়ায়), আর মার্জিন বর্ডারের *বাইরে* থাকে (অন্য এলিমেন্টকে দূরে সরায়)।

### কোড উদাহরণ
\`\`\`css
.box {
  width: 300px;
  height: 100px;
  padding: 20px;
  border: 5px solid #4f46e5;
  margin: 15px;
  background-color: #f3f4f6;
}
\`\`\``
  },
  {
    id: 'css-2',
    title: 'Explain box-sizing and the difference between content-box and border-box.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Box Model', 'Layout', 'Sizing'],
    enAnswer: 'box-sizing controls how the total width and height of an element are calculated. content-box (default) adds padding and borders to the specified width/height, whereas border-box includes padding and borders within the specified width/height.',
    bnAnswer: 'box-sizing নির্ধারণ করে একটি এলিমেন্টের মোট উইডথ ও হাইট কীভাবে হিসাব করা হবে। content-box (ডিফল্ট) নির্দিষ্ট উইডথ/হাইটের সাথে প্যাডিং ও বর্ডার যোগ করে, কিন্তু border-box বর্ডার ও প্যাডিংকে নির্দিষ্ট উইডথ/হাইটের ভেতরেই অন্তর্ভুক্ত করে।',
    enExplanation: `### Explanation
The \`box-sizing\` property defines how browser calculates element sizing:
- **\`content-box\`**: The default behavior. If you set \`width: 100px\`, that width only applies to the content. If you then add \`padding: 10px\` and \`border: 5px\`, the total rendered width becomes \`100 + 20 (left/right padding) + 10 (left/right border) = 130px\`. This often breaks grid layouts.
- **\`border-box\`**: Tells the browser to include padding and border inside the specified width. If you set \`width: 100px\` and add \`padding: 10px\` and \`border: 5px\`, the total rendered width remains exactly \`100px\`. The content area shrinks dynamically to \`70px\` (\`100 - 20 - 10\`).

### Real-World Example
If you build a responsive sidebar that is \`width: 25%\` of the screen and you add some internal padding, using \`content-box\` will make the total width larger than \`25%\`, causing the layout to break or drop down. Using \`border-box\` keeps it exactly at \`25%\`.

### Best Practice
Apply \`box-sizing: border-box\` globally to all elements using the universal selector (\`*\`). This makes sizing calculations intuitive and prevents unexpected layout breaks.

### Common Mistakes
Forgetting to reset \`box-sizing\` to \`border-box\` globally, resulting in elements overflowing their parent containers when padding or borders are adjusted.

### Code Example
\`\`\`css
/* Global Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 100%; /* Will stay exactly 100% width regardless of padding/border */
  padding: 20px;
  border: 2px solid black;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`box-sizing\` প্রোপার্টি নির্ধারণ করে ব্রাউজার কীভাবে এলিমেন্টের আকার হিসাব করে:
- **\`content-box\`**: এটি ডিফল্ট আচরণ। আপনি যদি \`width: 100px\` লিখেন, তবে এই সাইজটি কেবল কনটেন্টের উপর প্রযোজ্য হবে। যদি আপনি \`padding: 10px\` এবং \`border: 5px\` যোগ করেন, তবে মোট উইডথ হবে \`100 + ২০ (প্যাডিং) + ১০ (বর্ডার) = 130px\`। এর ফলে প্রায়ই লেআউট ভেঙে যায়।
- **\`border-box\`**: এটি ব্রাউজারকে নির্দেশ দেয় প্যাডিং ও বর্ডারকে নির্দিষ্ট উইডথের ভেতরেই রাখতে। আপনি যদি \`width: 100px\` লিখে প্যাডিং ও বর্ডার যোগ করেন, তাহলেও মোট উইডথ \`100px\`-ই থাকবে। কনটেন্ট এরিয়াটি নিজে সংকুচিত হয়ে \`70px\` (\`100 - ২০ - ১০\`) হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি স্ক্রিনের \`25%\` উইডথ নিয়ে একটি রেসপনসিভ সাইডবার বানান এবং তাতে প্যাডিং যোগ করেন, তবে \`content-box\` ব্যবহারের ফলে মোট উইডথ \`25%\` এর চেয়ে বেশি হয়ে সাইডবারটি নিচে নেমে যাবে। কিন্তু \`border-box\` ব্যবহার করলে এটি ঠিক \`25%\`ই থাকবে।

### উত্তম অনুশীলন
ইউনিভার্সাল সিলেক্টর (\`*\`) ব্যবহার করে প্রজেক্টের সব এলিমেন্টের জন্য গ্লোবালি \`box-sizing: border-box\` সেট করে দিন। এটি লেআউট ক্যালকুলেশনকে অনেক সহজ করে তোলে।

### সাধারণ ভুলসমূহ
গ্লোবালি \`box-sizing: border-box\` করতে ভুলে যাওয়া, যার ফলে প্যাডিং বা বর্ডার পরিবর্তনের সাথে সাথে এলিমেন্টগুলো প্যারেন্ট কন্টেইনার ওভারফ্লো করে।

### কোড উদাহরণ
\`\`\`css
/* গ্লোবাল রিসেট */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 100%; /* প্যাডিং ও বর্ডার যোগ করার পরেও মোট উইডথ ১০০% থাকবে */
  padding: 20px;
  border: 2px solid black;
}
\`\`\``
  },
  {
    id: 'css-3',
    title: 'What are the differences between block, inline, and inline-block display values?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Display', 'Fundamentals'],
    enAnswer: 'block elements start on a new line and take up the full width available. inline elements do not start on a new line and only take up as much width as necessary (ignoring top/bottom width/height/margin). inline-block elements flow like inline elements but support width, height, padding, and margin properties.',
    bnAnswer: 'block এলিমেন্টগুলো নতুন লাইনে শুরু হয় এবং সম্পূর্ণ উইডথ দখল করে। inline এলিমেন্ট নতুন লাইনে শুরু হয় না এবং শুধু যতটুকু দরকার ততটুকু উইডথ নেয় (টপ/বটম উইডথ/হাইট/মার্জিন এদের ক্ষেত্রে কাজ করে না)। inline-block এলিমেন্ট ইনলাইনের মতো সাজানো থাকে কিন্তু এদের উইডথ, হাইট, প্যাডিং ও মার্জিন সেট করা যায়।',
    enExplanation: `### Explanation
The \`display\` property determines how an element is rendered visually:
- **\`block\`**: Elements (like \`<div>\`, \`<p>\`, \`<h1>\`) take up the entire horizontal width of their parent container. They always start on a new line. You can freely set their \`width\`, \`height\`, \`padding\`, and \`margin\`.
- **\`inline\`**: Elements (like \`<span>\`, \`<a>\`, \`<strong>\`) only occupy the space defined by their text or inner content. They do not start on a new line. **CRITICAL**: Setting \`width\` and \`height\` has no effect. Vertically, \`padding\` and \`margin\` apply visually but do not push surrounding block elements away.
- **\`inline-block\`**: Hybrid behavior. Elements flow inline with text (side-by-side, no new line) but behave like block boxes in that you can specify custom \`width\`, \`height\`, vertical \`padding\`, and vertical \`margin\` which respect the layout constraints.

### Real-World Example
If you are formatting a paragraph and want to style specific words with a background color and margin, using a standard inline \`<span>\` with top/bottom margin won't push the paragraphs apart. Changing the span to \`display: inline-block\` allows you to add spacing and custom height.

### Best Practice
Use \`display: inline-block\` for custom navigation links, buttons, or badges where they need to sit side-by-side but require custom padding, width, or height.

### Common Mistakes
Trying to set a \`width\`, \`height\`, or vertical margins on an \`inline\` element (like a link \`<a>\`) and wondering why they are ignored by the browser.

### Code Example
\`\`\`css
/* Will ignore width and height */
.inline-span {
  display: inline;
  width: 150px;
  height: 50px;
}

/* Will sit side-by-side but respect dimensions */
.badge {
  display: inline-block;
  width: 120px;
  height: 40px;
  padding: 5px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`display\` প্রোপার্টি নির্ধারণ করে একটি এলিমেন্ট কীভাবে স্ক্রিনে রেন্ডার হবে:
- **\`block\`**: ব্লক এলিমেন্ট (যেমন \`<div>\`, \`<p>\`, \`<h1>\`) তাদের প্যারেন্ট কন্টেইনারের পুরো অনুভূমিক উইডথ দখল করে এবং সবসময় নতুন লাইনে শুরু হয়। এদের \`width\`, \`height\`, \`padding\` এবং \`margin\` ইচ্ছামতো সেট করা যায়।
- **\`inline\`**: ইনলাইন এলিমেন্ট (যেমন \`<span>\`, \`<a>\`, \`<strong>\`) শুধুমাত্র তাদের কনটেন্টের জন্য প্রয়োজনীয় জায়গা দখল করে। এরা নতুন লাইনে শুরু হয় না। এদের ক্ষেত্রে \`width\` এবং \`height\` কাজ করে না এবং টপ/বটম \`margin\`/\`padding\` চারপাশের এলিমেন্টকে দূরে সরায় না।
- **\`inline-block\`**: এটি একটি হাইব্রিড আচরণ। এলিমেন্টগুলো ইনলাইনের মতো পাশাপাশি অবস্থান করে কিন্তু এদের ক্ষেত্রে উইডথ, হাইট, প্যাডিং ও মার্জিন ব্লক এলিমেন্টের মতোই কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্যারাগ্রাফের মাঝের কোনো নির্দিষ্ট শব্দকে বাটন বা ব্যাজের রূপ দিতে চাইলে, শুধু ইনলাইন \`<span>\` ব্যবহার করলে এর ওপর/নিচের মার্জিন কাজ করবে না। একে \`display: inline-block\` করে দিলে এর নির্দিষ্ট উইডথ/হাইট ও প্যাডিং কাজ করবে।

### উত্তম অনুশীলন
নেভিগেশন লিংক, কাস্টম বাটন বা ব্যাজের জন্য \`display: inline-block\` ব্যবহার করুন যাতে এরা পাশাপাশি বসে কিন্তু এদের প্যাডিং ও মার্জিন সঠিকভাবে কাজ করে।

### সাধারণ ভুলসমূহ
ইনলাইন এলিমেন্টে (যেমন \`<a>\` ট্যাগে) \`width\` বা vertical \`margin\` সেট করার চেষ্টা করা এবং তা কাজ না করার কারণে বিভ্রান্ত হওয়া।

### কোড উদাহরণ
\`\`\`css
/* এই উইডথ এবং হাইট কাজ করবে না */
.inline-span {
  display: inline;
  width: 150px;
  height: 50px;
}

/* পাশাপাশি বসবে এবং উইডথ-হাইটও কাজ করবে */
.badge {
  display: inline-block;
  width: 120px;
  height: 40px;
  padding: 5px;
}
\`\`\``
  },
  {
    id: 'css-4',
    title: 'How is CSS Selector Specificity calculated?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Specificity', 'Selectors', 'Fundamentals'],
    enAnswer: 'CSS Specificity is a weight score applied to a CSS rule. It is calculated using four categories: Inline styles (1000), IDs (100), Classes/Attributes/Pseudo-classes (10), and Elements/Pseudo-elements (1). The rule with the highest total weight takes priority.',
    bnAnswer: 'CSS স্পেসিফিসিটি হলো একটি নিয়মের গুরুত্বের স্কোর। এটি চারটি ক্যাটাগরির মাধ্যমে হিসাব করা হয়: ইনলাইন স্টাইল (১০০০), আইডি (১০০), ক্লাস/অ্যাট্রিবিউট/সিউডো-ক্লাস (১০), এবং এলিমেন্ট/সিউডো-এলিমেন্ট (১)। সবচেয়ে বেশি স্কোরধারী নিয়মটিই কার্যকর হয়।',
    enExplanation: `### Explanation
When multiple CSS selectors target the same HTML element, the browser uses **specificity** rules to decide which styles to apply. Specificity is represented as a 4-part value system \`(inline, ID, class, element)\`:
1. **Inline Styles** (e.g., \`style="color: red"\`): Score **(1, 0, 0, 0)** or weight 1000.
2. **ID Selectors** (e.g., \`#header\`): Score **(0, 1, 0, 0)** or weight 100.
3. **Class, Attribute, and Pseudo-classes** (e.g., \`.card\`, \`[type="text"]\`, \`:hover\`): Score **(0, 0, 1, 0)** or weight 10.
4. **Element and Pseudo-elements** (e.g., \`div\`, \`p\`, \`::before\`): Score **(0, 0, 0, 1)** or weight 1.

Universal selector (\`*\`), combinators (\`+\`, \`>\`, \`~\`), and pseudo-class \`:not()\` have **0 specificity**.

*Note: The \`!important\` flag is not part of specificity calculation, but it overrides all normal specificity scores.*

### Real-World Example
Consider this CSS targeting a link:
- \`a\` (element) = specificity \`0, 0, 0, 1\`
- \`.menu a\` (class + element) = specificity \`0, 0, 1, 1\`
- \`#nav .menu a\` (ID + class + element) = specificity \`0, 1, 1, 1\`
If these three define different text colors, the link will render with the color defined in \`#nav .menu a\` because it has the highest score.

### Best Practice
Write clean CSS using class selectors. Avoid over-using ID selectors or nesting too deeply, as this creates high specificity that is extremely hard to override later.

### Common Mistakes
Using \`!important\` to bypass specificity issues instead of organizing selectors properly. This leads to styling conflicts that are difficult to debug.

### Code Example
\`\`\`css
/* Specificity: 0, 1, 0, 0 (Score: 100) */
#main-title {
  color: blue;
}

/* Specificity: 0, 0, 2, 0 (Score: 20) */
.header .title {
  color: green;
}

/* The ID selector (#main-title) wins, so text will be blue */
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন একাধিক CSS সিলেক্টর একই HTML এলিমেন্টকে টার্গেট করে, তখন ব্রাউজার **স্পেসিফিসিটি** রুলস ব্যবহার করে কোন স্টাইলটি প্রযোজ্য হবে তা নির্ধারণ করে। স্পেসিফিসিটিকে ৪টি ভাগে হিসাব করা হয় \`(inline, ID, class, element)\`:
১. **Inline Styles** (যেমন, \`style="color: red"\`): স্কোর **(১, ০, ০, ০)** বা গুরুত্ব ১০০০।
২. **ID Selectors** (যেমন, \`#header\`): স্কোর **(০, ১, ০, ০)** বা গুরুত্ব ১০০।
৩. **Class, Attribute, and Pseudo-classes** (যেমন, \`.card\`, \`[type="text"]\`, \`:hover\`): স্কোর **(০, ০, ১, ০)** বা গুরুত্ব ১০।
৪. **Element and Pseudo-elements** (যেমন, \`div\`, \`p\`, \`::before\`): স্কোর **(০, ০, ০, ১)** বা গুরুত্ব ১।

ইউনিভার্সাল সিলেক্টর (\`*\`), কম্বিনেটর (\`+\`, \`>\`, \`~\`) এবং \`:not()\` সিউডো-ক্লাসের স্পেসিফিসিটি স্কোর হলো **০**।

*মনে রাখবেন: \`!important\` সরাসরি স্পেসিফিসিটি হিসাবের অংশ নয়, তবে এটি সাধারণ যেকোনো স্পেসিফিসিটিকে ওভাররাইড করে।*

### বাস্তব-ভিত্তিক উদাহরণ
একটি লিংকের ক্ষেত্রে নিচের সিলেক্টরগুলোর স্কোর দেখুন:
- \`a\` (এলিমেন্ট) = স্পেসিফিসিটি \`০, ০, ০, ১\`
- \`.menu a\` (ক্লাস + এলিমেন্ট) = স্পেসিফিসিটি \`০, ০, ১, ১\`
- \`#nav .menu a\` (আইডি + ক্লাস + এলিমেন্ট) = স্পেসিফিসিটি \`০, ১, ১, ১\`
যদি তিনটি নিয়মে আলাদা আলাদা টেক্সট কালার দেওয়া থাকে, তবে শেষ নিয়মটি (\`#nav .menu a\`) বিজয়ী হবে কারণ এর স্কোর সবচেয়ে বেশি।

### উত্তম অনুশীলন
সিলেক্টর হিসেবে ক্লাসের ব্যবহার বেশি করুন। অপ্রয়োজনে আইডি (\`#\`) সিলেক্টর ব্যবহার করা বা অতিরিক্ত নেস্টিং করা পরিহার করুন, অন্যথায় পরবর্তীতে স্টাইল পরিবর্তন করা কঠিন হয়ে পড়বে।

### সাধারণ ভুলসমূহ
স্পেসিফিসিটি সমস্যা এড়াতে ঘন ঘন \`!important\` ব্যবহার করা। এটি কোডের গুণগত মান নষ্ট করে এবং ডিবাগিংকে অসম্ভব করে তোলে।

### কোড উদাহরণ
\`\`\`css
/* স্পেসিফিসিটি: ০, ১, ০, ০ (স্কোর: ১০০) */
#main-title {
  color: blue;
}

/* স্পেসিফিসিটি: ০, ০, ২, ০ (স্কোর: ২০) */
.header .title {
  color: green;
}

/* ID সিলেক্টরটির স্কোর বেশি হওয়ায় টেক্সটটি নীল (blue) হবে */
\`\`\``
  },
  {
    id: 'css-5',
    title: 'Explain the different CSS combinators and how they work.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Selectors', 'Combinators', 'Fundamentals'],
    enAnswer: 'CSS Combinators describe the relationship between selectors. There are four main combinators: Descendant Selector (space), Child Selector (>), Adjacent Sibling Selector (+), and General Sibling Selector (~).',
    bnAnswer: 'CSS কম্বিনেটর সিলেক্টরগুলোর মধ্যকার সম্পর্ক ব্যাখ্যা করে। প্রধানত চারটি কম্বিনেটর রয়েছে: ডিসেন্ডেন্ট সিলেক্টর (খালি স্পেস), চাইল্ড সিলেক্টর (>), অ্যাডজাসেন্ট সিবলিং সিলেক্টর (+), এবং জেনারেল সিবলিং সিলেক্টর (~)।',
    enExplanation: `### Explanation
CSS Combinators allow you to select elements based on their hierarchy and structural relationships:
1. **Descendant Selector (\` \` - space)**: Selects all matching elements inside the parent, regardless of how deep they are nested. For example, \`div p\` selects all \`<p>\` elements inside any \`<div>\`.
2. **Child Selector (\`>\`)**: Selects only elements that are immediate, direct children of the parent element. For example, \`div > p\` selects only \`<p>\` elements directly inside \`<div>\`, but not nested inside secondary containers.
3. **Adjacent Sibling Selector (\`+\`)**: Selects the element immediately following a specified element at the same level. For example, \`h1 + p\` selects only the first \`<p>\` that directly follows an \`<h1>\`.
4. **General Sibling Selector (\`~\`)**: Selects all matching elements that follow a specified element, sharing the same parent. For example, \`h1 ~ p\` selects all \`<p>\` elements that appear anywhere after \`<h1>\` in the same parent.

### Real-World Example
If you are designing a blog post card and want to style only the paragraph immediately following the main header to make it look like an intro snippet, you can use the adjacent sibling combinator (\`.card-header + p\`).

### Best Practice
Use the child selector (\`>\`) when styling layouts to ensure styles do not bleed unintentionally into nested elements (like nesting a list inside another list).

### Common Mistakes
Using a descendant selector (space) when you actually need a child selector (\`>\`), causing styles to apply to nested sub-elements incorrectly.

### Code Example
\`\`\`css
/* Styles all p tags inside .container */
.container p {
  color: gray;
}

/* Styles only direct p tags of .container */
.container > p {
  font-weight: bold;
}

/* Styles the p tag immediately following h2 */
h2 + p {
  margin-top: 5px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS কম্বিনেটর আপনাকে এলিমেন্টগুলোর হায়ারার্কি বা গাঠনিক সম্পর্কের ওপর ভিত্তি করে স্টাইল নির্ধারণ করতে সাহায্য করে:
১. **Descendant Selector (\` \` - space)**: প্যারেন্ট এলিমেন্টের ভেতরে থাকা সকল ম্যাচিং এলিমেন্টকে সিলেক্ট করে, তারা যতই গভীরে নেস্টেড থাকুক না কেন। যেমন, \`div p\` যেকোনো \`<div>\`-এর ভেতরে থাকা সকল \`<p>\` সিলেক্ট করবে।
২. **Child Selector (\`>\`)**: শুধুমাত্র প্যারেন্ট এলিমেন্টের ঠিক নিচে সরাসরি চাইল্ড এলিমেন্টগুলোকে সিলেক্ট করে। যেমন, \`div > p\` কেবল সরাসরি \`<div>\`-এর অধীনে থাকা \`<p>\` সিলেক্ট করবে, কোনো সাব-ডিভের ভেতর থাকা \`<p>\` নয়।
৩. **Adjacent Sibling Selector (\`+\`)**: একই লেভেলের কোনো এলিমেন্টের ঠিক পরে থাকা প্রথম ম্যাচিং এলিমেন্টটিকে সিলেক্ট করে। যেমন, \`h1 + p\` কেবল \`<h1>\`-এর ঠিক পরের \`<p>\` ট্যাগটি সিলেক্ট করবে।
৪. **General Sibling Selector (\`~\`)**: একই প্যারেন্টের অধীনে কোনো নির্দিষ্ট এলিমেন্টের পরে থাকা সকল ম্যাচিং এলিমেন্টকে সিলেক্ট করে। যেমন, \`h1 ~ p\` ওই প্যারেন্টের অধীনে \`<h1>\`-এর পরে থাকা সকল \`<p>\` সিলেক্ট করবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্লগ পোস্টের কার্ডে হেডারটির ঠিক নিচে থাকা প্যারাগ্রাফটিকে একটু বড় করে দেখাতে চাইলে আপনি Adjacent Sibling Selector (\`.card-header + p\`) ব্যবহার করতে পারেন।

### উত্তম অনুশীলন
লজিক্যাল লেআউট তৈরির সময় চাইল্ড সিলেক্টর (\`>\`) ব্যবহার করার চেষ্টা করুন, যাতে প্যারেন্টের স্টাইলগুলো গভীরের সাব-এলিমেন্টে ছড়িয়ে না পড়ে।

### সাধারণ ভুলসমূহ
যেখানে চাইল্ড সিলেক্টর (\`>\`) প্রয়োজন সেখানে সাধারণ ডিসেন্ডেন্ট সিলেক্টর (স্পেস) ব্যবহার করা, যার ফলে ভেতরের সাব-এলিমেন্টগুলোতে ভুলবশত স্টাইল পেয়ে যায়।

### কোড উদাহরণ
\`\`\`css
/* .container এর ভেতরের সব p ট্যাগকে গ্রে কালার করবে */
.container p {
  color: gray;
}

/* শুধু .container এর সরাসরি চাইল্ড p ট্যাগকে বোল্ড করবে */
.container > p {
  font-weight: bold;
}

/* h2 এর ঠিক পরেই থাকা p ট্যাগটির ওপরে মার্জিন দেবে */
h2 + p {
  margin-top: 5px;
}
\`\`\``
  },
  {
    id: 'css-6',
    title: 'What is the difference between pseudo-classes and pseudo-elements?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Selectors', 'Pseudo-classes', 'Pseudo-elements'],
    enAnswer: 'A pseudo-class (prefixed with one colon `:`) is used to define a special state of an element, like hover or active. A pseudo-element (prefixed with two colons `::`) is used to style a specific part of an element, like the first letter or inserting content before/after it.',
    bnAnswer: 'সিউডো-ক্লাস (একটি কোলন `:` দিয়ে শুরু) ব্যবহার করা হয় কোনো এলিমেন্টের বিশেষ অবস্থা স্টাইল করতে, যেমন hover বা active। সিউডো-এলিমেন্ট (দুটি কোলন `::` দিয়ে শুরু) ব্যবহার করা হয় এলিমেন্টের নির্দিষ্ট কোনো অংশ স্টাইল করতে, যেমন প্রথম অক্ষর বা পূর্বে/পরে নতুন কনটেন্ট যুক্ত করতে।',
    enExplanation: `### Explanation
- **Pseudo-classes (\`:\`)**: Target an element based on user interaction, state, or document structure. Examples: \`:hover\`, \`:focus\`, \`:nth-child(2)\`, \`:disabled\`. They act like classes applied dynamically behind the scenes.
- **Pseudo-elements (\`::\`)**: Select and style a virtual element that is not directly in the HTML markup. Examples: \`::before\`, \`::after\`, \`::first-letter\`, \`::placeholder\`. These create a virtual element that you can insert content into using the \`content\` property.

*Note: In CSS3, to distinguish pseudo-elements from pseudo-classes, the double-colon syntax (\`::\`) was introduced. Most browsers still support single colons (\`:\`) for legacy pseudo-elements like \`:before\`.*

### Real-World Example
If you want to change a button color when the cursor moves over it, you use a pseudo-class (\`button:hover\`). If you want to insert a little arrow icon after the button text without adding code to HTML, you use a pseudo-element (\`button::after\`).

### Best Practice
Always use the modern double colon (\`::\`) syntax for pseudo-elements to keep your CSS standards-compliant. Ensure pseudo-elements like \`::before\` or \`::after\` have a \`content\` property defined (even if empty, \`content: ""\`), otherwise they will not render.

### Common Mistakes
Forgetting the \`content: ""\` property when using \`::before\` or \`::after\`, resulting in the virtual element not displaying at all.

### Code Example
\`\`\`css
/* Pseudo-class: triggers on hover state */
.btn:hover {
  background-color: #312e81;
}

/* Pseudo-element: inserts a custom icon after the link */
.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  color: #4f46e5;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **Pseudo-classes (\`:\`)**: ব্যবহারকারীর ইন্টারঅ্যাকশন বা এলিমেন্টের বিশেষ অবস্থা অনুযায়ী টার্গেট করে। যেমন: \`:hover\`, \`:focus\`, \`:nth-child(2)\`, \`:disabled\`। এরা ডাইনামিক ক্লাসের মতো কাজ করে।
- **Pseudo-elements (\`::\`)**: HTML-এ সরাসরি উপস্থিত নেই এমন কোনো ভার্চুয়াল অংশকে সিলেক্ট ও স্টাইল করে। যেমন: \`::before\`, \`::after\`, \`::first-letter\`, \`::placeholder\`। এর মাধ্যমে \`content\` প্রোপার্টি ব্যবহার করে ভার্চুয়াল কনটেন্টও যোগ করা যায়।

*নোট: CSS3-তে সিউডো-এলিমেন্টকে সিউডো-ক্লাস থেকে আলাদা করতে ডাবল-কোলন (\`::\`) ব্যবহার শুরু হয়। তবে পুরোনো ব্রাউজারগুলোর সামঞ্জস্যতার জন্য সিঙ্গেল কোলনও (\`:\`) কাজ করে।*

### বাস্তব-ভিত্তিক উদাহরণ
বাটনের ওপরে কারসর রাখলে রঙ পরিবর্তন করতে চাইলে সিউডো-ক্লাস (\`button:hover\`) ব্যবহার করবেন। আর বাটনের টেক্সটের পর একটি অ্যারো আইকন যোগ করতে চাইলে সিউডো-এলিমেন্ট (\`button::after\`) ব্যবহার করবেন।

### উত্তম অনুশীলন
সিউডো-এলিমেন্টের ক্ষেত্রে সবসময় আধুনিক ডাবল-কোলন (\`::\`) ব্যবহার করুন। \`::before\` বা \`::after\` এর ক্ষেত্রে অবশ্যই \`content\` প্রোপার্টি ডিফাইন করুন (প্রয়োজনে খালি স্ট্রিং \`content: ""\` দিন), অন্যথায় এটি দৃশ্যমান হবে না।

### সাধারণ ভুলসমূহ
\`::before\` বা \`::after\` ব্যবহার করার সময় \`content: ""\` দিতে ভুলে যাওয়া, যার কারণে ভার্চুয়াল এলিমেন্টটি ব্রাউজারে প্রদর্শিত হয় না।

### কোড উদাহরণ
\`\`\`css
/* সিউডো-ক্লাস: হোভার অবস্থায় ট্রিগার হবে */
.btn:hover {
  background-color: #312e81;
}

/* সিউডো-এলিমেন্ট: লিংকের পরে একটি আইকন যুক্ত করবে */
.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  color: #4f46e5;
}
\`\`\``
  },
  {
    id: 'css-7',
    title: 'Explain how text alignment and typography options are styled in CSS.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Typography', 'Text', 'Fundamentals'],
    enAnswer: 'Typography is configured using font family, size, weight, line-height, and style. Text alignment is controlled using text-align (left, right, center, justify), vertical-align, and text-decoration.',
    bnAnswer: 'টাইপোগ্রাফি স্টাইল করা হয় ফন্ট ফ্যামিলি, সাইজ, ওয়েট, লাইন-হাইট এবং স্টাইলের সাহায্যে। টেক্সট অ্যালাইনমেন্ট কন্ট্রোল করা হয় text-align (left, right, center, justify), vertical-align, এবং text-decoration এর মাধ্যমে।',
    enExplanation: `### Explanation
CSS offers detailed control over typography and text:
1. **Typography properties**:
   - \`font-family\`: Defines the font list (e.g., Arial, sans-serif).
   - \`font-size\`: Size of the text (px, rem, em, etc.).
   - \`font-weight\`: Thickness of letters (100 to 900, bold, normal).
   - \`line-height\`: Controls the vertical spacing between lines.
   - \`font-style\`: Set text to \`italic\`, \`oblique\`, or \`normal\`.
2. **Text formatting properties**:
   - \`text-align\`: Horizontal alignment (\`left\`, \`right\`, \`center\`, \`justify\`).
   - \`text-decoration\`: Text lines like underline, line-through, or none.
   - \`text-transform\`: Capitalizes letters (\`uppercase\`, \`lowercase\`, \`capitalize\`).
   - \`letter-spacing\`: Controls horizontal space between characters.

### Real-World Example
In body text copywriting, setting a \`line-height: 1.6\` along with a font size of \`1rem (16px)\` ensures high reading accessibility, preventing text lines from overlapping and feeling cluttered.

### Best Practice
Avoid using \`text-align: justify\` on narrow screens or websites without hyphenation controls, as it creates ugly gaps of white space between words. Always set a relative \`line-height\` (e.g., \`1.5\` unitless) rather than absolute pixel lines.

### Common Mistakes
Defining text decorations on non-interactive elements, which might confuse screen readers or users who assume underlined texts are clickable hyperlinks.

### Code Example
\`\`\`css
.article-paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem; /* 18px */
  font-weight: 400; /* Regular */
  line-height: 1.6; /* Responsive spacing */
  text-align: left;
  color: #1f2937;
  text-transform: capitalize;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS ফন্ট এবং টেক্সটের ওপর বিস্তারিত নিয়ন্ত্রণ প্রদান করে:
১. **টাইপোগ্রাফি প্রোপার্টিজ**:
   - \`font-family\`: ফন্টের তালিকা নির্ধারণ করে (যেমন, Arial, sans-serif)।
   - \`font-size\`: ফন্টের সাইজ নির্ধারণ করে (px, rem, em ইত্যাদি)।
   - \`font-weight\`: অক্ষরের পুরুত্ব নির্ধারণ করে (১০০ থেকে ৯০০, bold, normal)।
   - \`line-height\`: লাইনের মধ্যকার উলম্ব দূরত্ব বা স্পেস নির্ধারণ করে।
   - \`font-style\`: লেখাকে \`italic\`, \`oblique\` বা \`normal\` করে।
২. **টেক্সট ফরম্যাটিং প্রোপার্টিজ**:
   - \`text-align\`: টেক্সটকে ডানে, বামে, মাঝে বা জাস্টিফাই করার জন্য ব্যবহৃত হয়।
   - \`text-decoration\`: টেক্সটের নিচে আন্ডারলাইন, মাঝখান দিয়ে দাগ (line-through) ইত্যাদি দেয়।
   - \`text-transform\`: লেখাকে বড় হাতের বা ছোট হাতের অক্ষরে রূপান্তর করে।
   - \`letter-spacing\`: অক্ষরগুলোর মধ্যবর্তী দূরত্ব নিয়ন্ত্রণ করে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগের দীর্ঘ আর্টিকেলের ক্ষেত্রে ফন্ট সাইজ \`1rem (16px)\` এর সাথে \`line-height: 1.6\` সেট করলে রিডাবিলিটি অনেক বাড়ে এবং লেখা পড়তে আরামদায়ক হয়।

### উত্তম অনুশীলন
মোবাইল স্ক্রিনে বা সঠিক হাইফেনেশন ছাড়া \`text-align: justify\` ব্যবহার করা এড়িয়ে চলুন, অন্যথায় শব্দের মাঝে দেখতে খারাপ লাগে এমন খালি স্পেস তৈরি হবে। \`line-height\` এ পিক্সেল ইউনিটের চেয়ে ইউনিটলেস ভ্যালু (যেমন \`1.5\`) ব্যবহার করা ভালো।

### সাধারণ ভুলসমূহ
ক্লিকেবল নয় এমন কোনো টেক্সটে আন্ডারলাইন (\`text-decoration: underline\`) ব্যবহার করা, যা ব্যবহারকারীকে মনে করাতে পারে এটি একটি লিংক।

### কোড উদাহরণ
\`\`\`css
.article-paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem; /* 18px */
  font-weight: 400; /* Regular */
  line-height: 1.6; /* রেসপনসিভ স্পেসিং */
  text-align: left;
  color: #1f2937;
  text-transform: capitalize;
}
\`\`\``
  },
  {
    id: 'css-8',
    title: 'Explain Flexbox layout properties for containers vs items.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Layout', 'Container'],
    enAnswer: 'Flexbox distributes space using parent Container properties (display: flex, flex-direction, justify-content, align-items, flex-wrap) and child Item properties (flex-grow, flex-shrink, flex-basis, align-self, order).',
    bnAnswer: 'Flexbox স্পেস বন্টন করে প্যারেন্ট কন্টেইনার প্রোপার্টি (display: flex, flex-direction, justify-content, align-items, flex-wrap) and চাইল্ড আইটেম প্রোপার্টির (flex-grow, flex-shrink, flex-basis, align-self, order) মাধ্যমে।',
    enExplanation: `### Explanation
Flexbox (Flexible Box Layout) is a one-dimensional layout system that manages content either horizontally in rows or vertically in columns:
1. **Container Properties (Parent)**:
   - \`display: flex\` or \`inline-flex\`: Activates flex context.
   - \`flex-direction\`: Declares layout axis (\`row\`, \`row-reverse\`, \`column\`, \`column-reverse\`).
   - \`flex-wrap\`: Controls wrapping of overflowed children (\`nowrap\`, \`wrap\`, \`wrap-reverse\`).
   - \`justify-content\`: Aligns items along the main axis.
   - \`align-items\`: Aligns items along the cross axis.
   - \`gap\`: Sets space between flex items.
2. **Item Properties (Children)**:
   - \`flex-grow\`: Specifies how much an item should grow relative to others.
   - \`flex-shrink\`: Specifies how much an item should shrink if space is limited.
   - \`flex-basis\`: Default starting size of a flex item before space distribution.
   - \`align-self\`: Overrides the container's \`align-items\` for a single child.

### Real-World Example
In a website navbar, you make the parent header container \`display: flex\` and \`justify-content: space-between\`. This separates the brand logo on the left and navigation menu on the right.

### Best Practice
Avoid absolute heights or widths on flex items. Instead, use \`flex-basis\` or let the items size automatically, combined with \`gap\` for spacing.

### Common Mistakes
Applying flex item properties (like \`flex-grow\` or \`align-self\`) to the parent container, or container properties (like \`justify-content\`) to flex child items.

### Code Example
\`\`\`css
/* Flex Container */
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

/* Flex Item overrides */
.nav-profile {
  align-self: flex-end; /* Overrides alignment to push profile down */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Flexbox (Flexible Box Layout) হলো এক-মাত্রিক (one-dimensional) লেআউট সিস্টেম যা কনটেন্টকে অনুভূমিকভাবে (রো) অথবা উলম্বভাবে (কলাম) সাজাতে সাহায্য করে:
১. **Container Properties (প্যারেন্ট)**:
   - \`display: flex\` বা \`inline-flex\`: ফ্লেক্স কনটেক্সট চালু করে।
   - \`flex-direction\`: লেআউটের অক্ষ বা দিক নির্ধারণ করে (\`row\`, \`column\` ইত্যাদি)।
   - \`flex-wrap\`: জায়গা ফুরিয়ে গেলে আইটেমগুলো পরবর্তী লাইনে যাবে কিনা তা নির্ধারণ করে (\`wrap\`, \`nowrap\`)।
   - \`justify-content\`: মেইন এক্সিস বরাবর আইটেমগুলোকে সাজায়।
   - \`align-items\`: ক্রস এক্সিস বরাবর আইটেমগুলোকে সাজায়।
   - \`gap\`: ফ্লেক্স আইটেমগুলোর মধ্যবর্তী দূরত্ব নির্ধারণ করে।
২. **Item Properties (চাইল্ড)**:
   - \`flex-grow\`: বাড়তি জায়গা থাকলে চাইল্ড আইটেম কতগুণ বড় হবে তা নির্ধারণ করে।
   - \`flex-shrink\`: জায়গা কমে গেলে আইটেমটি কতটুকু সংকুচিত হবে তা নিয়ন্ত্রণ করে।
   - \`flex-basis\`: স্পেস বন্টন করার পূর্বে আইটেমের ডিফল্ট প্রাথমিক সাইজ।
   - \`align-self\`: প্যারেন্টের \`align-items\` উপেক্ষা করে একক কোনো চাইল্ডের নিজস্ব অ্যালাইনমেন্ট ঠিক করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ওয়েবসাইটের নেভিগেশন বারে প্যারেন্ট হেডার কন্টেইনারকে \`display: flex\` এবং \`justify-content: space-between\` দিলে বাম পাশে লোগো এবং ডান পাশে মেনু লিংকগুলো সুন্দরভাবে বসে যায়।

### উত্তম অনুশীলন
ফ্লেক্স আইটেমগুলোতে ফিক্সড উইডথ বা হাইট দেওয়া পরিহার করুন। এর পরিবর্তে \`flex-basis\` ব্যবহার করুন এবং আইটেমগুলোর মাঝে দূরত্বের জন্য \`gap\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ফ্লেক্স আইটেমের প্রোপার্টি (যেমন \`flex-grow\` বা \`align-self\`) প্যারেন্ট কন্টেইনারে অ্যাপ্লাই করা, অথবা কন্টেইনারের প্রোপার্টি চাইল্ড আইটেমে ব্যবহার করা।

### কোড উদাহরণ
\`\`\`css
/* ফ্লেক্স কন্টেইনার */
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

/* ফ্লেক্স চাইল্ড আইটেম */
.nav-profile {
  align-self: flex-end; /* প্যারেন্টের অ্যালাইনমেন্ট উপেক্ষা করে নিজে এক পাশে বসবে */
}
\`\`\``
  },
  {
    id: 'css-9',
    title: 'Explain Flexbox alignment options: justify-content vs align-items vs align-content.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Layout', 'Alignment'],
    enAnswer: 'justify-content aligns items along the main-axis (horizontal by default). align-items aligns items along the cross-axis for a single line. align-content aligns multiple lines of flex items along the cross-axis when wrapping is active.',
    bnAnswer: 'justify-content ফ্লেক্স আইটেমগুলোকে মেইন-অক্ষ (ডিফল্ট অনুভূমিক) বরাবর সাজায়। align-items ক্রস-অক্ষ বরাবর একক লাইনের জন্য আইটেমগুলোকে সাজায়। align-content একাধিক লাইনের ফ্লেক্স আইটেম থাকলে তাদের মধ্যকার ক্রস-অক্ষ বরাবর দূরত্ব ও অ্যালাইনমেন্ট সাজায়।',
    enExplanation: `### Explanation
Understanding alignment axes in Flexbox is crucial for responsive layouts:
- **\`justify-content\`**: Operates on the **Main Axis** (defined by \`flex-direction\`). Values include: \`flex-start\` (pack left/top), \`flex-end\` (pack right/bottom), \`center\` (centered), \`space-between\` (even gaps, ends flush), \`space-around\` (even space on sides), \`space-evenly\` (all spacing is equal).
- **\`align-items\`**: Operates on the **Cross Axis** (perpendicular to Main Axis) for items within a single row or column. Values include: \`stretch\` (fills height, default), \`flex-start\`, \`flex-end\`, \`center\`, \`baseline\` (aligned by text baselines).
- **\`align-content\`**: Operates on the **Cross Axis** but applies to **multi-line** containers (where \`flex-wrap: wrap\` is active and lines overflow). If there is only one line of items, \`align-content\` has no effect.

### Real-World Example
If you are building a grid of photo cards that wraps to multiple lines and you want to center all rows vertically inside a large height area, you must set \`flex-wrap: wrap\`, \`align-items: center\`, and \`align-content: center\` on the container.

### Best Practice
Use \`justify-content: center\` combined with \`align-items: center\` to easily center any item both horizontally and vertically inside a parent container.

### Common Mistakes
Attempting to use \`align-content\` in a single-row flex layout and expecting it to align items, or expecting \`justify-content\` to align items vertically when \`flex-direction\` is \`row\`.

### Code Example
\`\`\`css
.perfect-center {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Horizontally centered */
  align-items: center;     /* Vertically centered */
  height: 300px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Flexbox-এ অ্যালাইনমেন্ট বুঝতে হলে মেইন-এক্সিস ও ক্রস-এক্সিসের ধারণা পরিষ্কার রাখা জরুরি:
- **\`justify-content\`**: মেইন এক্সিস বরাবর কাজ করে (যা \`flex-direction\` দ্বারা নির্ধারিত)। ভ্যালুসমূহ: \`flex-start\`, \`flex-end\`, \`center\`, \`space-between\` (দ্বি পাশে জায়গা না রেখে সমান গ্যাপ), \`space-around\`, \`space-evenly\`।
- **\`align-items\`**: মেইন এক্সিসের বিপরীত বা ক্রস এক্সিস বরাবর একক লাইনের ফ্লেক্স আইটেমগুলোকে সাজায়। ভ্যালুসমূহ: \`stretch\` (ডিফল্ট, পুরো জায়গা জুড়ে প্রসারিত), \`flex-start\`, \`flex-end\`, \`center\`, \`baseline\` (টেক্সটের বেসলাইন ধরে অ্যালাইন করে)।
- **\`align-content\`**: এটিও ক্রস এক্সিস বরাবর কাজ করে কিন্তু কেবল তখনই যখন **একাধিক লাইনের** ফ্লেক্স কন্টেইনার থাকে (\`flex-wrap: wrap\` সক্রিয় থাকে)। ফ্লেক্স আইটেম কেবল এক লাইনের হলে \`align-content\` কাজ করবে না।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি যদি ছবি বা প্রোডাক্ট কার্ডের একটি গ্রিড তৈরি করেন যা একাধিক লাইনে র‍্যাপ করে, এবং সেই রোগুলোকে কন্টেইনারের উলম্ব মাঝখানে আনতে চান, তবে কন্টেইনারে \`flex-wrap: wrap\`, \`align-items: center\` এবং \`align-content: center\` সেট করতে হবে।

### উত্তম অনুশীলন
যেকোনো চাইল্ড এলিমেন্টকে প্যারেন্টের ঠিক মাঝখানে রাখতে কন্টেইনারে \`display: flex\` এর সাথে \`justify-content: center\` এবং \`align-items: center\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সিঙ্গেল-লাইন লেআউটে \`align-content\` ব্যবহার করে কাজ না করায় বিভ্রান্ত হওয়া, অথবা \`flex-direction: row\` থাকা অবস্থায় \`justify-content\` ব্যবহার করে উলম্ব অ্যালাইনমেন্ট আশা করা।

### কোড উদাহরণ
\`\`\`css
.perfect-center {
  display: flex;
  flex-direction: row;
  justify-content: center; /* অনুভূমিকভাবে মাঝে আনবে */
  align-items: center;     /* উলম্বভাবে মাঝে আনবে */
  height: 300px;
}
\`\`\``
  },
  {
    id: 'css-10',
    title: 'Explain CSS positioning properties: static, relative, absolute, fixed, and sticky.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Positioning', 'Fundamentals'],
    enAnswer: 'static is the default layout flow. relative positions elements relative to their normal flow. absolute offsets elements relative to the nearest positioned ancestor. fixed locks elements relative to the viewport. sticky alternates between relative and fixed depending on scroll offset.',
    bnAnswer: 'static হলো ডিফল্ট লেআউট ফ্লো। relative এলিমেন্টকে তার সাধারণ অবস্থানের সাপেক্ষে অফসেট দেয়। absolute তার নিকটবর্তী পজিশনড প্যারেন্টের সাপেক্ষে পজিশন নেয়। fixed ভিউপোর্টের সাপেক্ষে এলিমেন্টকে লক করে। sticky স্ক্রলিংয়ের ওপর ভিত্তি করে relative এবং fixed-এর মধ্যে রূপান্তর করে।',
    enExplanation: `### Explanation
The \`position\` property specifies the type of positioning method used for an element:
1. **\`static\`**: Default. Follows normal document flow. Top, bottom, left, right, and z-index properties have **no effect**.
2. **\`relative\`**: Stays in the normal flow, but you can apply \`top\`, \`bottom\`, \`left\`, or \`right\` offsets to shift it relative to its original position. The space it originally occupied remains empty.
3. **\`absolute\`**: Removed from normal flow. Positioned relative to the **nearest positioned ancestor** (any ancestor with position other than \`static\`). If none exists, it positions relative to the HTML body. It takes up no space in the page layout.
4. **\`fixed\`**: Removed from normal flow. Positioned relative to the **browser viewport** (window). It stays fixed in place even when the page is scrolled.
5. **\`sticky\`**: Hybrid mode. Acts like \`relative\` until the page scrolls past a threshold (specified by \`top\`, etc.), at which point it pins and behaves like \`fixed\` within its parent container bounds.

### Real-World Example
- **Absolute**: A close button "X" on the top right corner of a modal card window.
- **Fixed**: A sticky navigation bar or chat widget at the bottom right corner of the page that never disappears as you scroll.
- **Sticky**: Table headers that remain visible at the top as you scroll down a long table.

### Best Practice
When using \`position: absolute\`, always ensure the parent container has \`position: relative\` (or another non-static position) set. This binds the absolute positioning area to the parent box instead of bleeding out to the full screen body.

### Common Mistakes
Creating a \`position: absolute\` element and forgetting to position the parent relative, leading to elements flying all over the web page layout.

### Code Example
\`\`\`css
.parent {
  position: relative; /* Anchor for absolute children */
  width: 400px;
  height: 200px;
  border: 1px solid black;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px; /* Locked to parent top-right corner */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`position\` প্রোপার্টি নির্ধারণ করে একটি এলিমেন্ট ওয়েব পেজে কীভাবে বসবে এবং অফসেট নেবে:
১. **\`static\`**: এটি ডিফল্ট পজিশন। এলিমেন্ট পেজের সাধারণ ফ্লো অনুযায়ী বসে। \`top\`, \`bottom\`, \`left\`, \`right\` এবং \`z-index\` এদের ক্ষেত্রে কাজ করে না।
২. **\`relative\`**: এটি সাধারণ ফ্লোতেই থাকে কিন্তু এর মূল অবস্থানের সাপেক্ষে সরাতে \`top\`, \`bottom\`, \`left\`, বা \`right\` অফসেট ব্যবহার করা যায়। সরালেও এটি মূল অবস্থানের জায়গাটি খালি রেখে দেয়।
৩. **\`absolute\`**: এটি সাধারণ পেজ ফ্লো থেকে বিচ্ছিন্ন হয়ে যায়। এটি তার **নিকটতম পজিশনড প্যারেন্টের** (যাঁর পজিশন static নয়) সাপেক্ষে অবস্থান নেয়। যদি কোনো পজিশনড প্যারেন্ট না থাকে, তবে বডির সাপেক্ষে বসে। এটি কোনো জায়গা দখল করে না।
৪. **\`fixed\`**: এটি পেজ ফ্লো থেকে সম্পূর্ণ বিচ্ছিন্ন হয়ে **ভিউ-পোর্টের** (ব্রাউজার স্ক্রিন) সাপেক্ষে লক হয়ে যায়। পেজ স্ক্রল করলেও এটি একই জায়গায় স্থির থাকে।
৫. **\`sticky\`**: এটি একটি হাইব্রিড মোড। স্ক্রল নির্দিষ্ট সীমায় পৌঁছানোর আগে এটি \`relative\`-এর মতো থাকে এবং সীমা পার হওয়ার সাথে সাথে বর্ডার বা প্যারেন্ট এরিয়ায় \`fixed\`-এর মতো আটকে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
- **Absolute**: একটি পপ-আপ কার্ডের ডানদিকের উপরের কোনায় থাকা "X" ক্লোজ বাটন।
- **Fixed**: স্ক্রিনের ডানদিকের নিচে ঝুলে থাকা চ্যাট আইকন যা স্ক্রল করলেও ওখানেই থাকে।
- **Sticky**: দীর্ঘ টেবিলের হেডার যা স্ক্রল করে নিচে নামলেও উপরে দেখা যায়।

### উত্তম অনুশীলন
যখনই কোনো চাইল্ডকে \`position: absolute\` করবেন, অবশ্যই প্যারেন্ট এলিমেন্টে \`position: relative\` যুক্ত করুন। এর ফলে চাইল্ডের অবস্থান প্যারেন্টের বাউন্ডারির ভেতরেই সীমাবদ্ধ থাকবে।

### সাধারণ ভুলসমূহ
প্যারেন্টে পজিশন ডিক্লেয়ার না করেই চাইল্ডকে \`position: absolute\` দেওয়া, যার ফলে চাইল্ডটি প্যারেন্ট বক্সের বাইরে চলে যায় এবং পেজের অন্য কোথাও গিয়ে বসে।

### কোড উদাহরণ
\`\`\`css
.parent {
  position: relative; /* চাইল্ডের নোঙ্গর হিসেবে কাজ করবে */
  width: 400px;
  height: 200px;
  border: 1px solid black;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px; /* প্যারেন্টের টপ-রাইট কোনায় আটকে থাকবে */
}
\`\`\``
  },
  {
    id: 'css-11',
    title: 'Explain Z-index and how a Stacking Context is formed.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Positioning', 'Z-index', 'Stacking Context'],
    enAnswer: 'z-index determines the stack order of positioned elements along the z-axis (depth). A Stacking Context is a 3D layering environment created by properties like position (non-static) with z-index, opacity, transform, or mix-blend-mode.',
    bnAnswer: 'z-index নির্ধারণ করে উলম্ব z-অক্ষ (depth) বরাবর পজিশনড এলিমেন্টগুলো একটির ওপর আরেকটি কীভাবে সাজানো হবে। স্ট্যাকিং কনটেক্সট হলো একটি ত্রিমাত্রিক লেয়ারিং পরিবেশ যা পজিশন (non-static) ও z-index, opacity, transform বা mix-blend-mode এর সাহায্যে তৈরি হয়।',
    enExplanation: `### Explanation
\`z-index\` only works on positioned elements (\`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`) and flex/grid items. It controls which elements overlap others.
However, \`z-index\` behavior is local to a **Stacking Context**. A stacking context is a container that controls layering of its descendants. A new stacking context is formed by:
1. The root element of the document (\`<html>\`).
2. An element with \`position: absolute\` or \`relative\` and a \`z-index\` other than \`auto\`.
3. An element with \`position: fixed\` or \`sticky\`.
4. Elements with \`opacity\` less than 1.
5. Elements with \`transform\`, \`filter\`, \`perspective\`, or \`clip-path\` values other than \`none\`.
6. Flex or Grid items with \`z-index\` other than \`auto\`.

Inside a stacking context, children are layered. A high \`z-index\` child *cannot* escape its parent's stacking context. If Parent A has a lower stacking level than Parent B, Child A (even with \`z-index: 9999\`) will sit below Child B (even with \`z-index: 1\`).

### Real-World Example
You have a slide-out drawer navigation (\`z-index: 100\`) and a modal window popup. The modal does not cover the drawer because they are in different stacking contexts, or the parent of the modal is restricted to a lower context index.

### Best Practice
Avoid using arbitrary large values like \`z-index: 99999\`. Keep a centralized design token list of z-index levels (e.g., dropdowns = 10, headers = 20, modals = 100).

### Common Mistakes
Trying to set \`z-index\` on a \`position: static\` element and wondering why the layering order doesn't change.

### Code Example
\`\`\`css
/* Will not stack because position is static by default */
.inactive-z {
  z-index: 10;
}

/* Correct usage */
.header {
  position: relative;
  z-index: 10; /* Stacked above normal document flow */
  background: white;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`z-index\` শুধুমাত্র পজিশনড এলিমেন্ট (\`relative\`, \`absolute\`, \`fixed\` বা \`sticky\`) এবং ফ্লেক্স/গ্রিড চাইল্ডদের ক্ষেত্রে কাজ করে। এটি স্ক্রিনের ওপর-নিচ লেয়ারিং বা ডেপথ (z-axis) নিয়ন্ত্রণ করে।
তবে \`z-index\` পুরোপুরি একটি **Stacking Context** বা স্ট্যাকিং কনটেক্সটের অধীনে কাজ করে। স্ট্যাকিং কনটেক্সট হলো ত্রিমাত্রিক লেয়ারিংয়ের একটি লোকাল বাউন্ডারি। এটি তৈরি হয় নিচের কারণে:
১. ডকুমেন্টের রুট এলিমেন্ট (\`<html>\`)।
২. এমন এলিমেন্ট যার \`position\` relative বা absolute এবং যার \`z-index\` ভ্যালু auto ছাড়া অন্য কিছু।
৩. \`position: fixed\` বা \`sticky\` এলিমেন্ট।
৪. \`opacity\` ভ্যালু ১ এর চেয়ে কম হলে।
৫. \`transform\`, \`filter\`, \`perspective\` বা \`clip-path\` সেট থাকলে।

একটি স্ট্যাকিং কনটেক্সটের ভেতরের চাইল্ডরা যতই হাই \`z-index\` পাক না কেন, তারা প্যারেন্টের বাউন্ডারির উপরে উঠতে পারে না। যেমন প্যারেন্ট A এর স্ট্যাকিং গুরুত্ব প্যারেন্ট B এর চেয়ে কম হলে, প্যারেন্ট A এর ভেতরের চাইল্ডের \`z-index: 9999\` হলেও সেটি প্যারেন্ট B এর চাইল্ডের নিচে পড়ে থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি স্লাইড-আউট ড্রয়ার মেনু (\`z-index: 100\`) বানিয়েছেন এবং একটি পপ-আপ মডাল স্ক্রিনে এনেছেন। অনেক ক্ষেত্রে মডাল ড্রয়ারটিকে ঢাকতে পারে না কারণ তাদের প্যারেন্টদের স্ট্যাকিং কনটেক্সট আলাদা এবং ড্রয়ারের প্যারেন্ট কনটেক্সট এগিয়ে আছে।

### উত্তম অনুশীলন
যেকোনো বড় ভ্যালু যেমন \`z-index: 99999\` ব্যবহার এড়ান। ফিক্সড স্ট্যাকিং লেভেল ব্যবহার করুন (যেমন ড্রপডাউন = ১০, হেডার = ২০, মডাল = ১০০)।

### সাধারণ ভুলসমূহ
\`position: static\` এলিমেন্টে \`z-index\` সেট করা এবং এর কোনো কাজ না দেখে বিভ্রান্ত হওয়া।

### কোড উদাহরণ
\`\`\`css
/* পজিশন স্ট্যাটিক হওয়ায় z-index কাজ করবে না */
.inactive-z {
  z-index: 10;
}

/* সঠিক ব্যবহার */
.header {
  position: relative;
  z-index: 10; /* পেজের অন্যান্য সাধারণ এলিমেন্টের ওপরে থাকবে */
  background: white;
}
\`\`\``
  },
  {
    id: 'css-12',
    title: 'Explain CSS color options: Hex, RGB, RGBA, HSL, and HSLA.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Colors', 'Visuals', 'Fundamentals'],
    enAnswer: 'CSS colors can be defined using Hexadecimal codes (#RRGGBB), RGB (Red, Green, Blue), HSL (Hue, Saturation, Lightness), and their alpha (A) variants which control background transparency.',
    bnAnswer: 'CSS কালার ডিফাইন করা যায় হেক্সাডেসিমেল কোড (#RRGGBB), RGB (Red, Green, Blue), HSL (Hue, Saturation, Lightness), এবং এগুলোর আলফা (A) ভ্যারিয়েন্টের সাহায্যে যা ট্রান্সপারেন্সি বা অপাসিটি নিয়ন্ত্রণ করে।',
    enExplanation: `### Explanation
CSS provides multiple ways to specify colors for elements:
1. **Hexadecimal (#RRGGBB)**: A 6-character code combining Red, Green, and Blue intensities from \`00\` to \`ff\`. Example: \`#4f46e5\`. You can also add 2 extra hex digits for alpha (transparency).
2. **RGB / RGBA**: Uses the \`rgb(red, green, blue)\` function with values from \`0\` to \`255\`. **RGBA** adds a fourth alpha parameter from \`0\` (fully transparent) to \`1\` (fully opaque). Example: \`rgba(79, 70, 229, 0.5)\`.
3. **HSL / HSLA**: A more intuitive model:
   - **Hue**: Color angle on the color wheel (0-360; 0 is red, 120 is green, 240 is blue).
   - **Saturation**: Color intensity (0% is gray, 100% is vibrant color).
   - **Lightness**: Color brightness (0% is black, 100% is white).
   - **Alpha**: Translucency decimal. Example: \`hsla(243, 75%, 59%, 0.8)\`.

### Real-World Example
If you want a modal popup overlay background to darken the underlying page without hiding it completely, you apply a semi-transparent black using RGBA: \`background-color: rgba(0, 0, 0, 0.5)\`.

### Best Practice
Prefer HSL or modern CSS color functions for design systems, as it makes generating lighter/darker color variations (e.g., hover states) much easier by simply adjusting the lightness percentage.

### Common Mistakes
Confusing HSL syntax percentages. In HSL, saturation and lightness *must* contain the \`%\` sign (e.g. \`hsl(120, 50, 50)\` is invalid; it must be \`hsl(120, 50%, 50%)\`).

### Code Example
\`\`\`css
/* Semi-transparent indigo background */
.alert-box {
  background-color: rgba(79, 70, 229, 0.1);
  border: 1px solid hsla(243, 75%, 59%, 0.4);
  color: #4f46e5;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS-এ কালার ডিফাইন করার প্রধান কয়েকটি মাধ্যম নিচে দেওয়া হলো:
১. **Hexadecimal (#RRGGBB)**: ৬টি অক্ষরের হেক্স কোড যা লাল, সবুজ ও নীল রঙের অনুপাত \`00\` থেকে \`ff\` পর্যন্ত প্রকাশ করে। যেমন: \`#4f46e5\`। আলফা বা স্বচ্ছতা প্রকাশের জন্য ৮টি অক্ষরের হেক্সও ব্যবহার করা যায়।
২. **RGB / RGBA**: \`rgb(red, green, blue)\` ফাংশন ব্যবহার করে যেখানে ভ্যালু ০ থেকে ২৫৫ পর্যন্ত হয়। **RGBA**-তে একটি অতিরিক্ত আলফা প্যারামিটার থাকে (০.০ থেকে ১.০) যা স্বচ্ছতা নির্ধারণ করে। যেমন: \`rgba(79, 70, 229, 0.5)\`।
৩. **HSL / HSLA**: এটি কালার সিলেক্ট করার ক্ষেত্রে বেশ সহজ ও মানুষের অনুধাবনযোগ্য মডেল:
   - **Hue**: কালার হুইলের ডিগ্রি বা কোণ (০ থেকে ৩৬০)। ০ হলো লাল, ১২০ হলো সবুজ, ২৪০ হলো নীল।
   - **Saturation**: কালার কতটা গাঢ় বা ধূসর হবে (০% থেকে ১০০%)।
   - **Lightness**: কালারের উজ্জ্বলতা (০% মানে কালো, ১০০% মানে সাদা)।
   - **Alpha**: স্বচ্ছতা প্রকাশক দশমিক। যেমন: \`hsla(243, 75%, 59%, 0.8)\`।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মডাল পপ-আপের পেছনের ব্যাকগ্রাউন্ড আবছা অন্ধকার করতে হলে ব্যাকগ্রাউন্ড হিসেবে সেমি-ট্রান্সপারেন্ট কালো রঙ ব্যবহার করতে পারেন: \`background-color: rgba(0, 0, 0, 0.5)\`।

### উত্তম অনুশীলন
ডিজাইন সিস্টেমে HSL ব্যবহার করার চেষ্টা করুন। এর মাধ্যমে একই ফ্যামিলির হালকা ও গাঢ় কালার ভার্সন (যেমন বাটন হোভার স্টেট) কেবল লাইটনেস (Lightness) পরিবর্তন করে সহজে তৈরি করা যায়।

### সাধারণ ভুলসমূহ
HSL ডিক্লেয়ারেশনের সময় পারসেন্টেজ (%) চিহ্ন না দেওয়া। HSL-এ স্যাচুরেশন ও লাইটনেসের জন্য পারসেন্টেজ দিতেই হবে (যেমন \`hsl(120, 50, 50)\` ভুল; সঠিক হলো \`hsl(120, 50%, 50%)\`)।

### কোড উদাহরণ
\`\`\`css
/* আবছা বেগুনি ব্যাকগ্রাউন্ড */
.alert-box {
  background-color: rgba(79, 70, 229, 0.1);
  border: 1px solid hsla(243, 75%, 59%, 0.4);
  color: #4f46e5;
}
\`\`\``
  },
  {
    id: 'css-13',
    title: 'Explain Margin Collapsing and when it occurs.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Margins', 'Collapsing'],
    enAnswer: 'Margin Collapsing is a layout behavior where adjacent vertical margins of block elements are combined into a single margin, taking the size of the largest margin instead of adding them together. It does not apply to horizontal margins.',
    bnAnswer: 'মার্জিন কলাপ্সিং (Margin Collapsing) হলো এমন একটি আচরণ যেখানে পাশাপাশি থাকা ব্লক এলিমেন্টগুলোর উলম্ব মার্জিনগুলো যুক্ত হয়ে একটি মার্জিনে পরিণত হয় এবং যোগফলের বদলে সর্বোচ্চ মার্জিনের আকারটি বজায় থাকে। এটি অনুভূমিক মার্জিনে ঘটে না।',
    enExplanation: `### Explanation
Margin collapsing occurs primarily in three situations for vertical margins:
1. **Adjacent siblings**: The bottom margin of one block element and the top margin of the next block element collapse. For example, if Element A has \`margin-bottom: 30px\` and Element B has \`margin-top: 20px\`, the actual vertical gap between them will be \`30px\`, not \`50px\`.
2. **Parent and first/last child**: If a parent container has no border, padding, or inline content separating it, the top margin of the parent and the first child will collapse into one margin.
3. **Empty blocks**: If a block has no content, height, padding, or border, its top and bottom margins collapse into each other.

**When margin collapsing does NOT occur**:
- Flex or Grid containers.
- Elements with \`position: absolute\` or \`fixed\`.
- Elements with \`display: inline-block\`.
- Elements with overflow values other than \`visible\`.

### Real-World Example
If you have a list of blog card elements in a vertical layout, and every card has \`margin-top: 20px\` and \`margin-bottom: 20px\`, they will have exactly \`20px\` of separation between each card rather than \`40px\`.

### Best Practice
To prevent parent-child margin collapsing, add a small \`padding\` or a \`border\` to the parent element, or set the parent to \`overflow: auto\` or use a flexbox container layout.

### Common Mistakes
Expecting vertical margins to add up between sibling elements, causing layouts to have less vertical spacing than mathematically calculated.

### Code Example
\`\`\`css
/* Sibling elements */
.box-one {
  margin-bottom: 30px;
}
.box-two {
  margin-top: 20px;
}
/* The actual distance between box-one and box-two will be 30px */
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মার্জিন কলাপ্সিং মূলত ব্লক এলিমেন্টগুলোর উলম্ব (vertical) মার্জিনের ক্ষেত্রে ঘটে। এটি মূলত ৩টি পরিস্থিতিতে হয়:
১. **পাশাপাশি সিবলিং এলিমেন্ট**: একটি ব্লক এলিমেন্টের নিচের মার্জিন (bottom margin) এবং তার ঠিক পরের ব্লক এলিমেন্টের উপরের মার্জিন (top margin) যুক্ত হয়ে একটি হয়ে যায়। যেমন এলিমেন্ট A এর \`margin-bottom: 30px\` এবং এলিমেন্ট B এর \`margin-top: 20px\` হলে, তাদের মধ্যে গ্যাপ \`50px\` হওয়ার বদলে বড়টি অর্থাৎ \`30px\` হবে।
২. **প্যারেন্ট এবং প্রথম/শেষ চাইল্ড**: যদি কোনো প্যারেন্ট এলিমেন্টে প্যাডিং, বর্ডার বা কোনো ইনলাইন কনটেন্ট না থাকে, তবে প্যারেন্টের শীর্ষ মার্জিন এবং তার প্রথম চাইল্ডের শীর্ষ মার্জিন এক হয়ে যায়।
৩. **ফাঁকা ব্লক**: উচ্চতা, প্যাডিং, বর্ডার বা ভেতরের কনটেন্টহীন কোনো ব্লকের টপ এবং বটম মার্জিন একে অপরের সাথে যুক্ত হয়ে যায়।

**যেসব ক্ষেত্রে মার্জিন কলাপ্সিং হয় না**:
- ফ্লেক্স বা গ্রিড কন্টেইনার।
- \`position: absolute\` বা \`fixed\` এলিমেন্ট।
- \`display: inline-block\` এলিমেন্ট।
- প্যারেন্ট এলিমেন্টে \`overflow: hidden\` বা অন্য ভ্যালু থাকলে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি যদি উল্লম্ব কলামে সাজানো কতগুলো কার্ডের প্রতিটিতে \`margin-top: 20px\` এবং \`margin-bottom: 20px\` যোগ করেন, তবে দুটি কার্ডের মাঝখানের দূরত্ব গাণিতিক হিসাব অনুযায়ী \`40px\` হওয়ার বদলে মার্জিন কলাপ্সিংয়ের ফলে \`20px\` দেখাবে।

### উত্তম অনুশীলন
প্যারেন্ট ও চাইল্ডের মধ্যকার মার্জিন কলাপ্সিং ঠেকাতে প্যারেন্ট এলিমেন্টে সামান্য প্যাডিং (\`1px\`) বা বর্ডার ব্যবহার করুন, অথবা প্যারেন্টের \`overflow\` প্রোপার্টি \`auto\` বা \`hidden\` সেট করুন।

### সাধারণ ভুলসমূহ
দুটি পাশাপাশি এলিমেন্টের মধ্যবর্তী গ্যাপ যোগ হবে বলে ধরে নেওয়া, যার ফলে ডিজাইনের চেয়ে অনেক কম ভার্টিক্যাল স্পেস পেজে দেখা যায়।

### কোড উদাহরণ
\`\`\`css
/* সিবলিং বা পাশাপাশি এলিমেন্ট */
.box-one {
  margin-bottom: 30px;
}
.box-two {
  margin-top: 20px;
}
/* বক্স দুটির মধ্যকার বাস্তব দূরত্ব হবে ৩০ পিক্সেল (30px) */
\`\`\``
  },
  {
    id: 'css-14',
    title: 'Explain how tables are styled and optimized in CSS.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Tables', 'Layout', 'Fundamentals'],
    enAnswer: 'Tables are styled by configuring borders, borders collapsing (border-collapse: collapse), cell padding, stripe patterns (using :nth-child(even)), and adding a wrapper div with overflow-x: auto for responsive screens.',
    bnAnswer: 'টেবিল স্টাইল করা হয় বর্ডার কনফিগারেশন, বর্ডার জোড়া দেওয়া (border-collapse: collapse), সেল প্যাডিং, অল্টারনেট স্ট্রাইপ প্যাটার্ন (:nth-child(even) ব্যবহার করে) এবং ছোট স্ক্রিনের জন্য overflow-x: auto সহ একটি র‍্যাপার ডিভ ব্যবহারের মাধ্যমে।',
    enExplanation: `### Explanation
Styling HTML tables is essential for readability and responsive layout design:
1. **Border Collapse**: The default table style shows separated borders for every single cell. Setting \`border-collapse: collapse\` on the table element merges cell borders into neat single lines.
2. **Cell Spacing and Padding**: Control spacing inside cell blocks using standard \`padding\`.
3. **Zebra Striping**: To make large data rows easier to scan, use the \`:nth-child(even)\` or \`:nth-child(odd)\` pseudo-classes to alternate background colors.
4. **Responsive Table**: Tables do not shrink well on small screens. Wrap the \`<table>\` in a container with \`overflow-x: auto\` to enable a horizontal scrollbar.

### Real-World Example
In SaaS admin dashboards showing user lists, setting \`border-collapse: collapse\`, cell padding to \`12px\`, a subtle border color, and a lighter alternate gray background for every even row makes rows highly scannable.

### Best Practice
Always style header rows (\`<th>\`) differently than data rows (\`<td>\`) using a bolder font-weight or darker background. Set table layout to \`table-layout: fixed\` for consistent column widths when cell contents vary in size.

### Common Mistakes
Forgetting to set \`border-collapse: collapse\`, leaving double borders around all table cell margins.

### Code Example
\`\`\`css
/* Responsive Table Wrapper */
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}

/* Zebra Striping */
tr:nth-child(even) {
  background-color: #f9fafb;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
HTML টেবিলকে সুন্দর এবং পাঠযোগ্য করতে নিচের স্টাইলগুলো ব্যবহার করা হয়:
১. **Border Collapse**: ডিফল্টভাবে টেবিলের প্রতিটি সেলের আলাদা আলাদা বর্ডার দেখা যায়। টেবিলে \`border-collapse: collapse\` সেট করলে বর্ডারগুলো মার্জ হয়ে এক লাইনে পরিণত হয়।
২. **Cell Padding**: টেবিলের ভেতরের লেখার চারপাশে স্পেস দেওয়ার জন্য \`padding\` ব্যবহার করা হয়।
৩. **Zebra Striping**: টেবিল রো পড়তে সুবিধা করার জন্য এক লাইন পর পর হালকা ব্যাকগ্রাউন্ড কালার ব্যবহার করা হয়। এজন্য \`:nth-child(even)\` বা \`:nth-child(odd)\` ব্যবহার করা হয়।
৪. **Responsive Table**: টেবিল ছোট স্ক্রিনে সংকুচিত হতে পারে না। তাই টেবিলের বাইরে একটি ডিভ র‍্যাপার দিয়ে তাতে \`overflow-x: auto\` দিলে মোবাইল স্ক্রিনে টেবিল স্ক্রল করে পড়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন ড্যাশবোর্ডে ইউজার লিস্ট দেখানোর সময় টেবিলে \`border-collapse: collapse\`, প্যাডিং \`12px\`, এবং জোড় সংখ্যার রোগুলোতে (\`tr:nth-child(even)\`) হালকা ধূসর ব্যাকগ্রাউন্ড দিলে ডাটা রো সহজে চেনা যায়।

### উত্তম অনুশীলন
ডেটা রো (\`<td>\`) এর তুলনায় হেডার রো (\`<th>\`) কে আলাদা করতে ফন্ট বোল্ড বা ব্যাকগ্রাউন্ড কালার ডার্ক রাখুন। কলামের উইডথ সমান রাখতে \`table-layout: fixed\` ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
টেবিলে \`border-collapse: collapse\` দিতে ভুলে যাওয়া, যার ফলে সেলের চারপাশে দেখতে বাজে লাগে এমন ডাবল বর্ডার রয়ে যায়।

### কোড উদাহরণ
\`\`\`css
/* রেসপনসিভ টেবিল কন্টেইনার */
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}

/* জেব্রা স্ট্রাইপ স্টাইল */
tr:nth-child(even) {
  background-color: #f9fafb;
}
\`\`\``
  },
  {
    id: 'css-15',
    title: 'What are the differences between absolute units (px) and relative units (em, rem)?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Units', 'Sizing', 'Responsive'],
    enAnswer: 'px is an absolute pixel measurement. em is a relative unit calculated based on the font-size of the element itself (or its parent). rem is a relative unit calculated based on the root font-size of the html document (typically 16px).',
    bnAnswer: 'px হলো একটি নির্দিষ্ট পিক্সেল পরিমাপ। em হলো একটি আপেক্ষিক ইউনিট যা সংশ্লিষ্ট এলিমেন্টের (বা তার প্যারেন্টের) ফন্ট সাইজের ওপর ভিত্তি করে হিসাব করা হয়। rem হলো ডকুমেন্টের রুট (html) ফন্ট সাইজের (ডিফল্ট ১৬ পিক্সেল) সাপেক্ষে পরিমাপ।',
    enExplanation: `### Explanation
Understanding CSS units is critical for responsive, accessible web layouts:
- **\`px\` (Pixels)**: An absolute unit of measurement representing physical screen pixels. It is static and does not scale if users change their browser font sizes.
- **\`em\`**: Relative unit. Its value is computed relative to the font-size of the current element. For example, if an element has \`font-size: 16px\`, then \`margin: 2em\` equals \`32px\`. If used on \`font-size\` itself, it inherits from the parent container's font size. **Caution**: nesting \`em\` units leads to compounding sizes (e.g., \`1.2 * 1.2 * 1.2\`).
- **\`rem\` (Root em)**: Relative unit. Scaled relative to the **root** element's (\`<html>\`) font-size. If the root size is \`16px\` (default), \`1rem = 16px\`, \`2rem = 32px\`, \`0.5rem = 8px\`. It does not compound, making it predictable.

### Real-World Example
If a user with low vision increases their browser's default text size to \`20px\`, elements styled with \`rem\` will automatically scale up proportionately, maintaining design layout hierarchy. Elements styled in \`px\` will remain locked at their pixel size, breaking text readability.

### Best Practice
Use \`rem\` for layout spacing, margins, paddings, and typography sizes. Use \`em\` for sizing components that need to scale automatically with their font size (like padding inside a custom badge/button). Use \`px\` only for very small border lines where scaling is not desired.

### Common Mistakes
Using \`em\` for fonts in nested components, resulting in compounded, unpredictably huge or tiny font sizes down the tree.

### Code Example
\`\`\`css
html {
  font-size: 16px; /* Base root size */
}

.button {
  font-size: 1rem; /* 16px */
  padding: 0.5em 1em; /* Scales relative to 1rem font-size (8px top/bottom, 16px left/right) */
  margin-bottom: 2rem; /* Exactly 32px margin, unaffected by local font sizes */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেসপনসিভ ওয়েব ডিজাইনে CSS ইউনিটের ব্যবহার গুরুত্বপূর্ণ:
- **\`px\` (Pixels)**: এটি একটি নির্দিষ্ট (absolute) ইউনিট যা স্ক্রিনের পিক্সেলকে প্রকাশ করে। ইউজার ব্রাউজারের টেক্সট সাইজ বড় করলেও পিক্সেল সাইজ একই থাকে।
- **\`em\`**: এটি একটি আপেক্ষিক (relative) ইউনিট। এর সাইজ নির্ভর করে ওই এলিমেন্টের (বা তার প্যারেন্টের) ফন্ট সাইজের ওপর। যেমন এলিমেন্টের ফন্ট সাইজ \`16px\` হলে \`margin: 2em\` মানে হবে \`32px\`। ফন্ট সাইজে \`em\` দিলে তা প্যারেন্ট ফন্টের ওপর নির্ভর করে। তাই নেস্টেড এলিমেন্টে \`em\` ব্যবহার করলে সাইজ চক্রবৃদ্ধি হারে (compounding) বাড়তে বা কমতে পারে।
- **\`rem\` (Root em)**: এটিও একটি আপেক্ষিক ইউনিট। এর সাইজ নির্ধারিত হয় ডকুমেন্টের **রুট** (\`<html>\`) ফন্ট সাইজ দিয়ে। রুট ফন্ট সাইজ \`16px\` (ডিফল্ট) হলে \`1rem = 16px\` এবং \`2rem = 32px\` হবে। এটি চক্রবৃদ্ধি আকার ধারণ করে না।

### বাস্তব-ভিত্তিক উদাহরণ
কোনো দৃষ্টি প্রতিবন্ধী ইউজার যদি তাঁর ব্রাউজারের ডিফল্ট ফন্ট সাইজ বাড়িয়ে \`20px\` করেন, তবে \`rem\` দিয়ে তৈরি লেখাগুলো স্বয়ংক্রিয়ভাবে বড় হবে। কিন্তু \`px\` দিয়ে ডিজাইন করা লেখার আকার একই থাকবে, যা ইউজারের জন্য পড়া কঠিন হবে।

### উত্তম অনুশীলন
টাইপোগ্রাফি, মার্জিন ও প্যাডিংয়ের জন্য \`rem\` ব্যবহার করুন। যেসব কম্পোনেন্টের প্যাডিং ফন্ট সাইজের সাথে স্বয়ংক্রিয়ভাবে পরিবর্তিত হওয়া প্রয়োজন (যেমন বাটন বা ব্যাজ), সেগুলোতে \`em\` ব্যবহার করুন। অতি ক্ষুদ্র বর্ডারের জন্য \`px\` ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
নেস্টেড এলিমেন্টের ফন্ট সাইজ ডিক্লেয়ারেশনে \`em\` ব্যবহার করা, যার ফলে ভিতরের সাব-এলিমেন্টের লেখার আকার অতিরিক্ত ছোট বা বড় হয়ে যায়।

### কোড উদাহরণ
\`\`\`css
html {
  font-size: 16px; /* রুট ফন্ট সাইজ */
}

.button {
  font-size: 1rem; /* 16px */
  padding: 0.5em 1em; /* ফন্ট সাইজ অনুযায়ী পরিবর্তনশীল (8px top/bottom, 16px left/right) */
  margin-bottom: 2rem; /* রুট অনুযায়ী নির্দিষ্ট ৩২ পিক্সেল মার্জিন */
}
\`\`\``
  },
  {
    id: 'css-16',
    title: 'Explain CSS Viewport Units: vw, vh, vmin, and vmax.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Units', 'Viewport', 'Responsive'],
    enAnswer: 'Viewport units represent percentages of the browser window size: 1vw is 1% of the viewport width, 1vh is 1% of the viewport height, 1vmin is 1% of the smaller dimension, and 1vmax is 1% of the larger dimension.',
    bnAnswer: 'ভিয়ু-পোর্ট ইউনিট হলো ব্রাউজার উইন্ডোর আকারের পারসেন্টেজ পরিমাপ: 1vw হলো ভিউপোর্টের উইডথের ১%, 1vh হলো ভিউপোর্টের হাইটের ১%, 1vmin হলো ছোট ডাইমেনশনের ১%, এবং 1vmax হলো বড় ডাইমেনশনের ১%।',
    enExplanation: `### Explanation
Viewport units are relative length values that measure screen space size directly:
- **\`vw\` (Viewport Width)**: Equal to 1% of the width of the viewport. If window width is \`1200px\`, \`10vw\` is \`120px\`.
- **\`vh\` (Viewport Height)**: Equal to 1% of the height of the viewport. If window height is \`800px\`, \`100vh\` spans the full screen height (\`800px\`).
- **\`vmin\` (Viewport Minimum)**: Evaluates to 1% of the smaller value between the viewport width and height. Useful for keeping elements inside screen bounds on both landscape and portrait orientations.
- **\`vmax\` (Viewport Maximum)**: Evaluates to 1% of the larger value between viewport width and height.

### Real-World Example
If you want to create a landing page splash hero banner section that completely fills the vertical view height of any computer screen or mobile phone screen, you apply \`height: 100vh\`.

### Best Practice
Use \`100vh\` carefully on mobile browsers, as virtual address bars sliding in/out dynamically adjust viewport height causing content shifts. For modern apps, prefer \`dvh\` (dynamic viewport height) or \`svh\` (small viewport height) to mitigate this.

### Common Mistakes
Using \`100vw\` for page wrappers instead of \`100%\`, which can include the horizontal scrollbar width on browsers, causing unwanted horizontal page scrolling.

### Code Example
\`\`\`css
/* Full screen landing hero section */
.hero-section {
  width: 100%; /* Avoid 100vw to prevent scrollbar overflow issues */
  height: 100vh; /* Fills screen height */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Font size that scales dynamically with screen size */
.responsive-title {
  font-size: 5vw;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভিয়ু-পোর্ট ইউনিট হলো ব্রাউজার উইন্ডোর দৃশ্যমান অংশের পরিমাপক আপেক্ষিক ইউনিট:
- **\`vw\` (Viewport Width)**: ভিউপোর্টের উইডথের ১% এর সমান। ব্রাউজারের উইডথ \`1200px\` হলে \`10vw\` হবে \`120px\`।
- **\`vh\` (Viewport Height)**: ভিউপোর্টের হাইটের ১% এর সমান। ব্রাউজারের হাইট \`800px\` হলে \`100vh\` হবে পুরো স্ক্রিনের সমান অর্থাৎ \`800px\`।
- **\`vmin\` (Viewport Minimum)**: ভিউপোর্টের উইডথ এবং হাইটের মধ্যে যেটি তুলনামূলক ছোট, তার ১% পরিমাপ করে। এটি ল্যান্ডস্কেপ বা পোর্ট্রেট উভয় স্ক্রিনেই কোনো অবজেক্টকে সীমানার ভেতর আটকে রাখতে সাহায্য করে।
- **\`vmax\` (Viewport Maximum)**: ভিউপোর্টের উইডথ এবং হাইটের মধ্যে যেটি তুলনামূলক বড়, তার ১% পরিমাপ করে।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটে ঢোকার পরই যদি এমন একটি হিরো সেকশন তৈরি করতে চান যা কম্পিউটার বা মোবাইলের স্ক্রিন স্ক্রল করার আগেই পুরো স্ক্রিন জুড়ে থাকবে, তবে সেটিতে \`height: 100vh\` ব্যবহার করতে পারেন।

### উত্তম অনুশীলন
মোবাইল ব্রাউজারের ক্ষেত্রে \`100vh\` ব্যবহারে সতর্ক থাকুন। মোবাইলের অ্যাড্রেস বার ও ওপরে-নিচে স্ক্রল করার সময় ভিউপোর্ট হাইট পরিবর্তিত হয়, যার ফলে লেআউট নড়াচড়া করতে পারে। আধুনিক অ্যাপে এর বিকল্প হিসেবে \`dvh\` (dynamic viewport height) ব্যবহার করা বেশি কার্যকর।

### সাধারণ ভুলসমূহ
পেজ র‍্যাপারে \`100%\` এর জায়গায় \`100vw\` ব্যবহার করা। এতে ব্রাউজারের স্ক্রলবারসহ অতিরিক্ত কিছু জায়গা কাউন্ট হয়ে নিচে অনুভূমিক স্ক্রলবার চলে আসে।

### কোড উদাহরণ
\`\`\`css
/* পুরো স্ক্রিন জুড় থাকা হিরো সেকশন */
.hero-section {
  width: 100%; /* ওভারফ্লো এড়াতে 100vw এর জায়গায় 100% */
  height: 100vh; /* স্ক্রিনের সম্পূর্ণ হাইট দখল করবে */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* স্ক্রিনের উইডথ অনুযায়ী টেক্সট সাইজ পরিবর্তিত হবে */
.responsive-title {
  font-size: 5vw;
}
\`\`\``
  },
  {
    id: 'css-17',
    title: 'Compare the visibility options: display: none, visibility: hidden, and opacity: 0.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Visibility', 'Fundamentals'],
    enAnswer: 'display: none removes the element from the document flow completely. visibility: hidden hides the element visually, but it still takes up space in the layout. opacity: 0 makes the element fully transparent but still active, interactable, and occupying space.',
    bnAnswer: 'display: none এলিমেন্টটিকে ডকুমেন্টের পেজ ফ্লো থেকে সম্পূর্ণ সরিয়ে ফেলে। visibility: hidden এলিমেন্টটিকে চোখ থেকে আড়াল করে কিন্তু এটি লেআউটে জায়গা দখল করে রাখে। opacity: 0 এলিমেন্টটিকে সম্পূর্ণ স্বচ্ছ করে ফেলে কিন্তু এটি ইন্টারেক্টিভ ও অ্যাক্টিভ থাকে এবং জায়গা দখল করে রাখে।',
    enExplanation: `### Explanation
Hiding elements in CSS can be accomplished through three properties, each with unique layout and interactive effects:
1. **\`display: none\`**:
   - **Space**: The element is completely removed from the page flow. Surrounding elements move to fill the gap.
   - **Interaction**: Cannot be clicked, focused, or read by screen readers.
   - **DOM**: Still exists in the HTML DOM structure.
2. **\`visibility: hidden\`**:
   - **Space**: Keeps its physical space. It acts like an invisible box.
   - **Interaction**: Cannot receive clicks or keyboard focus. Screen readers ignore it.
3. **\`opacity: 0\`**:
   - **Space**: Keeps its physical space.
   - **Interaction**: **Still interactive!** Users can click it, and it can receive focus (which is a common security risk).
   - **Transition**: Can be animated smoothly (unlike \`display: none\` which changes layout instantly).

### Real-World Example
If you want to build a tooltip wrapper that fades in slowly when you hover over a button, you can style the tooltip with \`opacity: 0\` and \`pointer-events: none\` (to prevent hover clicks), then change it to \`opacity: 1\` and \`pointer-events: auto\` during hover.

### Best Practice
For accessibility (A11y), do not use \`opacity: 0\` to hide screen reader menu links unless you disable focus, otherwise screen readers will still tab through the invisible links. Use \`display: none\` instead for non-active screen sections.

### Common Mistakes
Using \`opacity: 0\` to hide elements but leaving them clickable, causing users to accidentally click invisible buttons or links.

### Code Example
\`\`\`css
/* Leaves empty gap but hides */
.hidden-placeholder {
  visibility: hidden;
}

/* Completely gone */
.removed-block {
  display: none;
}

/* Invisible but fully clickable/transitionable */
.fade-input {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.fade-input:hover {
  opacity: 1;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS-এ এলিমেন্ট লুকিয়ে রাখার প্রধান তিনটি মাধ্যমের কাজের ধরন আলাদা:
১. **\`display: none\`**:
   - **জায়গা**: এটি লেআউট ফ্লো থেকে এলিমেন্টটিকে সম্পূর্ণ মুছে ফেলে। চারপাশের এলিমেন্টগুলো খালি জায়গা ভরাট করতে চলে আসে।
   - **ইন্টারঅ্যাকশন**: এটিতে ক্লিক করা, ফোকাস করা বা স্ক্রিন রিডারের সাহায্যে পড়া যায় না।
২. **\`visibility: hidden\`**:
   - **জায়গা**: এটি অদৃশ্য হলেও পেজে নিজের জায়গা দখল করে রাখে। অর্থাৎ এটি একটি ফাঁকা সাদা স্পেস তৈরি করে।
   - **ইন্টারঅ্যাকশন**: এটিতে ক্লিক করা বা ফোকাস করা যায় না।
৩. **\`opacity: 0\`**:
   - **জায়গা**: এটিও পেজে নিজের জায়গা দখল করে রাখে।
   - **ইন্টারঅ্যাকশন**: **এটি ইন্টারঅ্যাক্টিভ থাকে!** ব্যবহারকারী এটি দেখতে না পেলেও এতে ক্লিক করতে বা ট্যাব দিয়ে ফোকাস করতে পারেন।
   - **ট্রানজিশন**: এটি অ্যানিমেশনের মাধ্যমে আস্তে আস্তে দৃশ্যমান বা অদৃশ্য করা যায় (যা \`display\` এর ক্ষেত্রে করা যায় না)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বাটন হোভার করলে ওপরে একটি টুলটিপ আস্তে আস্তে ভেসে উঠবে। টুলটিপটি প্রাথমিকভাবে \`opacity: 0\` এবং \`pointer-events: none\` (যাতে মাউস মাউন্টিং না ঘটে) করে রাখা হয়। হোভার করলে তা \`opacity: 1\` এবং \`pointer-events: auto\` হয়ে যায়।

### উত্তম অনুশীলন
অ্যাক্সেসিবিলিটির জন্য, স্ক্রিন রিডার থেকে পুরোপুরি বাদ দিতে এবং ফোকাস বন্ধ করতে \`display: none\` ব্যবহার করুন। কেবল ভিউয়াল অ্যানিমেশন ট্রানজিশনের জন্য \`opacity: 0\` এর সাথে \`visibility\` বা \`pointer-events\` বন্ধের প্র্যাকটিস অনুসরণ করুন।

### সাধারণ ভুলসমূহ
\`opacity: 0\` দিয়ে বাটন বা লিংক লুকিয়ে রাখা কিন্তু ক্লিকেবল অপশন বন্ধ না করা। এর ফলে ব্যবহারকারী পেজের ফাঁকা জায়গায় চাপ দিলে ভুলবশত মডাল ওপেন বা পেজ রিডাইরেক্ট হতে পারে।

### কোড উদাহরণ
\`\`\`css
/* জায়গা খালি থাকবে কিন্তু দেখা যাবে না */
.hidden-placeholder {
  visibility: hidden;
}

/* পেজে কোনো জায়গাই থাকবে না */
.removed-block {
  display: none;
}

/* অদৃশ্য থাকবে কিন্তু হোভার করলে ফেড-ইন হবে */
.fade-input {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.fade-input:hover {
  opacity: 1;
}
\`\`\``
  },
  {
    id: 'css-18',
    title: 'Explain how lists are styled and customized in CSS.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Lists', 'HTML', 'Fundamentals'],
    enAnswer: 'Lists are customized by using list-style-type (disc, decimal, none), list-style-position (inside vs outside), custom list icons via list-style-image, or resetting styles for navigation menus.',
    bnAnswer: 'লিস্ট স্টাইল কাস্টমাইজ করা যায় list-style-type (disc, decimal, none), list-style-position (inside vs outside), list-style-image এর সাহায্যে কাস্টম আইকন ব্যবহারের মাধ্যমে অথবা নেভিগেশন মেনুর জন্য ডিফল্ট স্টাইল রিসেট করে।',
    enExplanation: `### Explanation
HTML lists (\`<ul>\`, \`<ol>\`) have default styling that can be modified using list properties:
1. **\`list-style-type\`**: Changes the bullet marker. For unordered lists: \`disc\`, \`circle\`, \`square\`, \`none\`. For ordered lists: \`decimal\`, \`lower-alpha\`, \`upper-roman\`.
2. **\`list-style-position\`**: Specifies if bullet points sit inside or outside the content area flow:
   - \`outside\` (default): Bullets align to the left margins of the text columns.
   - \`inside\`: Bullets act like inline characters inside paragraph blocks.
3. **\`list-style-image\`**: Replaces the list markers with custom image paths.

### Real-World Example
When creating custom sidebar navigation links or horizontal header menus, we often want lists to look like clean block cards. Setting \`list-style: none\`, \`margin: 0\`, and \`padding: 0\` clears default list styling completely.

### Best Practice
Instead of \`list-style-image\` which is hard to align across browsers, use the \`::before\` pseudo-element with flexbox on \`<li>\` to implement pixel-perfect custom list bullet icons.

### Common Mistakes
Forgetting to reset both \`margin\` and \`padding\` when setting \`list-style: none\`, leaving browser-dependent left indent spaces on navigation containers.

### Code Example
\`\`\`css
/* Resetting lists for navigation */
.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

/* Bullet inside flow */
.custom-list {
  list-style-type: square;
  list-style-position: inside;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
HTML লিস্ট (\`<ul>\`, \`<ol>\`) গুলোর ডিফল্ট বুলেট মার্কার পরিবর্তন বা রিসেট করতে নিচের প্রোপার্টিগুলো ব্যবহার করা হয়:
১. **\`list-style-type\`**: বুলেটের আইকন বা নাম্বার টাইপ পরিবর্তন করে। যেমন: \`disc\`, \`circle\`, \`square\`, \`none\`, অথবা নাম্বার লিস্টের জন্য \`decimal\`, \`lower-alpha\`, \`upper-roman\` ইত্যাদি।
২. **\`list-style-position\`**: বুলেটগুলো লিস্টের লেখার ভেতরে নাকি বাইরে থাকবে তা নির্ধারণ করে:
   - \`outside\` (ডিফল্ট): বুলেটগুলো টেক্সট লাইনের বাম পাশে মার্জিনের বাইরে থাকে।
   - \`inside\`: বুলেটগুলো টেক্সট লাইনের ভেতরেই সাধারণ অক্ষরের মতো যুক্ত থাকে।
৩. **\`list-style-image\`**: বুলেটের জায়গায় কাস্টম কোনো ইমেজ যুক্ত করার জন্য ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
হেডারের নেভিগেশন বার তৈরির সময় সাধারণত কোনো বুলেটের প্রয়োজন হয় না। তাই প্যারেন্ট লিস্টে \`list-style: none\`, \`margin: 0\`, এবং \`padding: 0\` দিয়ে টেবিল বা বক্স আকারে লিংকগুলো সাজানো হয়।

### উত্তম অনুশীলন
\`list-style-image\` দিয়ে কাস্টম বুলেট দেওয়া অনেক সময় বিভিন্ন ব্রাউজারে আলাদা দেখায়। এর চেয়ে \`list-style: none\` করে চাইল্ড এলিমেন্টে \`::before\` সিউডো-এলিমেন্ট ব্যবহার করে কাস্টম বুলেট বসানো বেশি নিরাপদ ও পরিচ্ছন্ন।

### সাধারণ ভুলসমূহ
বুলেট বাদ দেওয়ার সময় (\`list-style: none\`) মার্জিন ও প্যাডিং রিসেট করতে ভুলে যাওয়া, যার ফলে বাম পাশে ব্রাউজারভেদে অপ্রয়োজনীয় ফাঁকা জায়গা থেকে যায়।

### কোড উদাহরণ
\`\`\`css
/* নেভিগেশনের জন্য লিস্ট রিসেট */
.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

/* স্কয়ার বুলেট এবং ভেতরে অ্যালাইনমেন্ট */
.custom-list {
  list-style-type: square;
  list-style-position: inside;
}
\`\`\``
  },
  {
    id: 'css-19',
    title: 'Explain background properties: background-image, size, position, and repeat.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Backgrounds', 'Images', 'Visuals'],
    enAnswer: 'background-image sets an image as the element background. background-size (cover, contain, auto) scales it. background-position aligns it inside the box. background-repeat prevents tiling or repeating.',
    bnAnswer: 'background-image এলিমেন্টের ব্যাকগ্রাউন্ডে ছবি সেট করে। background-size (cover, contain, auto) এটি স্কেল বা বড়-ছোট করে। background-position বক্সের ভেতর ছবির অবস্থান ঠিক করে এবং background-repeat ছবির বারবার পুনরাবৃত্তি বন্ধ করে।',
    enExplanation: `### Explanation
CSS backgrounds are configured using a family of properties:
- **\`background-image\`**: Specifies URL images or gradients: \`url('img.jpg')\`, \`linear-gradient()\`...
- **\`background-repeat\`**: Decides if image tiles over remaining space: \`repeat\`, \`repeat-x\`, \`repeat-y\`, \`no-repeat\`.
- **\`background-position\`**: Defines anchor starting coordinates. Values like \`center\`, \`top right\`, or coordinates like \`50% 50%\`.
- **\`background-size\`**: Controls scaling behavior:
  - \`cover\`: Scales the image as large as possible to fill the entire container, cropping overflow areas.
  - \`contain\`: Scales the image to completely display within the container, leaving empty margins if aspect ratios differ.
  - \`100% 100%\`: Stretches image to fit exactly, distorting aspect ratio.

### Real-World Example
For a responsive background banner area in a website hero section, we combine:
\`background-image: url(...)\`, \`background-repeat: no-repeat\`, \`background-position: center\`, and \`background-size: cover\` to ensure it fits beautifully on desktop and mobile screens.

### Best Practice
Always specify a fallback \`background-color\` when using background images. If the image fails to load or takes long to download, the text will still have sufficient contrast against the fallback color.

### Common Mistakes
Setting \`background-size: cover\` but forgetting \`background-repeat: no-repeat\`, which might cause tiling issues during V8 render computations if the container sizes dynamically exceed limits.

### Code Example
\`\`\`css
.hero-banner {
  background-image: url('/assets/banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #1e1b4b; /* Fallback indigo color */
  color: white;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্যাকগ্রাউন্ড ছবি সুন্দরভাবে সাজানোর জন্য নিচের প্রোপার্টিগুলো ব্যবহৃত হয়:
- **\`background-image\`**: ব্যাকগ্রাউন্ড ইমেজ বা গ্রেডিয়েন্ট সেট করে। যেমন: \`url('path.jpg')\`, \`linear-gradient()\`।
- **\`background-repeat\`**: ব্যাকগ্রাউন্ড ছবিটি বারবার কপি হয়ে টাইলসের মতো দেখাবে কিনা তা ঠিক করে। যেমন: \`repeat\`, \`no-repeat\` (পুনরাবৃত্তি বন্ধ)।
- **\`background-position\`**: ছবির নোঙ্গর বা শুরুর অবস্থান ঠিক করে। যেমন: \`center\`, \`top left\`, \`50% 50%\`।
- **\`background-size\`**: ইমেজ কীভাবে কন্টেইনারে ফিট হবে তা নিয়ন্ত্রণ করে:
  - \`cover\`: অ্যাসপেক্ট রেশিও বজায় রেখে পুরো কন্টেইনার ভরাট করে। বাড়তি অংশ কেটে যায়।
  - \`contain\`: পুরো ছবিটি কন্টেইনারে প্রদর্শন করে। কোনো অংশ কাটে না, তবে খালি জায়গা থেকে যেতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ওয়েবসাইটের রেসপনসিভ ব্যানার সেকশনের ব্যাকগ্রাউন্ড সুন্দর করতে আমরা এক সাথে ব্যবহার করি:
\`background-image: url(...)\`, \`background-repeat: no-repeat\`, \`background-position: center\`, এবং \`background-size: cover\`।

### উত্তম অনুশীলন
ব্যাকগ্রাউন্ডে ছবি সেট করার সাথে সাথে একটি ব্যাকআপ \`background-color\` সেট করুন। কোনো কারণে ছবি লোড হতে দেরি হলে বা ফেইল করলে টেক্সটের কনট্রাস্ট ঠিক রাখতে এটি সাহায্য করে।

### সাধারণ ভুলসমূহ
\`background-size: cover\` দেওয়ার পরেও \`background-repeat: no-repeat\` দিতে ভুলে যাওয়া, যার কারণে কন্টেইনারের সাইজ বড় হলে ছবিটি ডুপ্লিকেট হয়ে টাইলস আকারে দেখা যেতে পারে।

### কোড উদাহরণ
\`\`\`css
.hero-banner {
  background-image: url('/assets/banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #1e1b4b; /* ছবি ফেইল করলে ব্যাকআপ কালার */
  color: white;
}
\`\`\``
  },
  {
    id: 'css-20',
    title: 'Explain the correct order of pseudo-classes for styling links and why it matters.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Links', 'Selectors', 'Fundamentals'],
    enAnswer: 'The correct order to style link pseudo-classes is: :link, :visited, :hover, :active (LVHA rule). This order matters because later rules override previous rules due to CSS cascading specificity rules.',
    bnAnswer: 'লিংক স্টাইল করার সঠিক ক্রমটি হলো: :link, :visited, :hover, :active (LVHA রুল)। এই ক্রমটি অত্যন্ত গুরুত্বপূর্ণ কারণ CSS ক্যাসকেডিং নিয়মের কারণে পরবর্তী রুলগুলো আগের রুলকে ওভাররাইড করতে পারে।',
    enExplanation: `### Explanation
To style HTML links (\`<a>\`) dynamically, we follow the **LVHA** rule:
1. **\`:link\`**: Default state for an unvisited link.
2. **\`:visited\`**: State for a link the user has clicked previously.
3. **\`:hover\`**: Triggers when user cursor enters the link area.
4. **\`:active\`**: Triggers the exact millisecond the link is clicked.

**Why this order matters**:
CSS rules are executed top-down. If you put \`:hover\` *before* \`:visited\`, a visited link's styles will block the hover styles because \`:visited\` will match and override \`:hover\` styles. Likewise, \`:active\` must follow \`:hover\` because a clicked link is also hovered; if \`:hover\` is placed last, it will override the active style.

### Real-World Example
If you create a sidebar link and want it to turn red when hovered and green when active, but you write \`:active\` before \`:hover\` in CSS, clicking the link won't show the green active color because it is immediately overridden by the hover rule.

### Best Practice
Memorize the mnemonic **"Love Fears Hate Always"** (L-F-H-A, where F stands for \`:focus\`, placing it: \`:link\`, \`:visited\`, \`:focus\`, \`:hover\`, \`:active\`). This ensures keyboard navigation users get correct focus visual styles before hover triggers.

### Common Mistakes
Writing link selectors in random order in CSS, resulting in link colors failing to change on hover or active states.

### Code Example
\`\`\`css
/* Correct LVHA order */
a:link {
  color: #3b82f6; /* Blue default */
}
a:visited {
  color: #8b5cf6; /* Purple visited */
}
a:focus {
  outline: 2px solid #ef4444; /* Accessible Focus indicator */
}
a:hover {
  color: #1d4ed8; /* Darker blue hover */
  text-decoration: underline;
}
a:active {
  color: #ef4444; /* Red active click */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
HTML লিংক (\`<a>\`) ডাইনামিক স্টাইল করার জন্য **LVHA** ক্রম অনুসরণ করা জরুরি:
১. **\`:link\`**: অবজিটেড বা ডিফল্ট লিংকের অবস্থা।
২. **\`:visited\`**: ব্যবহারকারী পূর্বে ভিজিট করেছেন এমন লিংকের অবস্থা।
৩. **\`:hover\`**: লিংকের ওপরে মাউস কারসর রাখার অবস্থা।
৪. **\`:active\`**: লিংকটিতে ক্লিক করে চেপে ধরে রাখার সেকেন্ডের ফ্র্যাকশনের অবস্থা।

**এই ক্রমটি কেন গুরুত্বপূর্ণ**:
CSS নিয়মগুলো উপর থেকে নিচে একের পর এক কার্যকর হয়। আপনি যদি \`:hover\` এর পূর্বে \`:visited\` না দিয়ে পরে দেন, তবে ভিজিটেড লিংকে হোভার ইফেক্ট কাজ করবে না কারণ \`:visited\` এর গুরুত্বের কারণে হোভার কালার ওভাররাইড হয়ে যাবে। একইভাবে, \`:active\` অবশ্যই \`:hover\` এর পরে আসতে হবে, কারণ ক্লিক করার সময় লিংকটি একই সাথে হোভার অবস্থাতেও থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি চান লিংক হোভার করলে লাল দেখাবে এবং ক্লিক করলে সবুজ দেখাবে। কিন্তু CSS-এ আপনি \`:active\` এর পর \`:hover\` লিখলেন। এখন লিংকে ক্লিক করলেও সবুজ কালার দেখা যাবে না, কারণ হোভারের লাল কালার সেটিকে ঢেকে দেবে।

### উত্তম অনুশীলন
এই ক্রম মনে রাখতে সহজে **"LoVe - HAte"** (L-V-H-A) সূত্রটি মনে রাখুন। কীবোর্ড অ্যাক্সেসিবিলিটির জন্য \`:focus\` কে হোভারের ঠিক পূর্বে রাখা উচিত (L-V-F-H-A ক্রম)।

### সাধারণ ভুলসমূহ
এলোমেলো ক্রমে লিংকগুলোর স্টাইল লেখা, যার কারণে হোভার বা অ্যাক্টিভ অবস্থার কালার ইফেক্ট ব্রাউজারে কাজ করে না।

### কোড উদাহরণ
\`\`\`css
/* সঠিক LVHA ক্রম */
a:link {
  color: #3b82f6; /* ডিফল্ট নীল */
}
a:visited {
  color: #8b5cf6; /* ভিজিটেড বেগুনি */
}
a:focus {
  outline: 2px solid #ef4444; /* কীবোর্ড ফোকাস */
}
a:hover {
  color: #1d4ed8; /* হোভার কালার */
  text-decoration: underline;
}
a:active {
  color: #ef4444; /* ক্লিক কালার */
}
\`\`\``
  },
  {
    id: 'css-21',
    title: 'Explain how text overflow issues are managed in CSS (Text-Overflow Ellipsis).',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Typography', 'Overflow', 'Fundamentals'],
    enAnswer: 'To apply text-overflow: ellipsis, three properties must be set on the container: width (or max-width), white-space: nowrap, and overflow: hidden.',
    bnAnswer: 'টেক্সট ওভারফ্লো হলে ডট-ডট (ellipsis) দেখানোর জন্য কন্টেইনারে ৩টি প্রোপার্টি একসাথে সেট করতে হয়: width (বা max-width), white-space: nowrap, এবং overflow: hidden।',
    enExplanation: `### Explanation
When text is too long for its container box, it overflows and wraps by default. To truncate single-line text and show a trailing ellipsis (\`...\`), you must use the following CSS properties together:
1. \`width\` or \`max-width\`: The element must have a defined constraint, otherwise it expands forever.
2. \`white-space: nowrap\`: Prevents the text from wrapping onto a new line.
3. \`overflow: hidden\`: Hides the text that spills out of the container bounds.
4. \`text-overflow: ellipsis\`: Replaces the overflowed text character tail with \`...\`.

*Note: For multi-line text truncation, we must use modern line-clamp CSS extensions.*

### Real-World Example
In a user profile card, if a user has an extremely long name (e.g. "Christopher Bartholomew Montgomery"), it will break the card layout. Applying ellipsis ensures it reads as "Christopher Barthol..." neatly.

### Best Practice
Always combine text-overflow with a visual indicator (like full-text tooltips or HTML \`title\` attributes) so users can still read the truncated content if needed.

### Common Mistakes
Applying \`text-overflow: ellipsis\` but forgetting to write \`white-space: nowrap\` or \`overflow: hidden\`, which results in text wrapping naturally and showing no ellipsis.

### Code Example
\`\`\`css
.truncate-text {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন কোনো টেক্সট তার বক্স কন্টেইনারের চেয়ে বড় হয়, তখন সেটি ওভারফ্লো হয়ে নিচে নেমে যায়। এক লাইনে লেখাটি ট্রাঙ্কেট বা কেটে শেষে ডট-ডট (...) চিহ্ন আনতে নিচে বর্ণিত প্রোপার্টিগুলো একসাথে ব্যবহার করতে হয়:
১. \`width\` বা \`max-width\`: একটি সীমাবদ্ধ উইডথ থাকতে হবে, নয়তো বক্সটি প্রসারিত হতে থাকবে।
২. \`white-space: nowrap\`: লেখাকে নতুন লাইনে ভাঙা থেকে বিরত রাখে।
৩. \`overflow: hidden\`: বাউন্ডারির বাইরের লেখাটুকু লুকিয়ে ফেলে।
৪. \`text-overflow: ellipsis\`: লুকানো লেখার শেষ মাথায় ডট-ডট (...) চিহ্ন যোগ করে।

*নোট: একাধিক লাইনের লেখা কেটে ডট-ডট করতে হলে আধুনিক \`line-clamp\` মেথড ব্যবহার করতে হয়।*

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোফাইল কার্ডে ইউজারের নাম যদি অতিরিক্ত বড় হয় (যেমন "Christopher Bartholomew Montgomery"), তবে তা কার্ডের ডিজাইন নষ্ট করবে। ইলিপসিস ব্যবহার করলে নামটি দেখতে "Christopher Barthol..." এর মতো সুন্দর ও সংক্ষিপ্ত লাগবে।

### উত্তম অনুশীলন
ট্রাঙ্কেট করা লেখায় মাউস রাখলে পুরো নাম দেখার জন্য ব্রাউজার \`title\` অ্যাট্রিবিউট বা কাস্টম টুলটিপ যুক্ত করার চেষ্টা করুন, যাতে ইউজার চাইলে সম্পূর্ণ লেখাটি পড়তে পারেন।

### সাধারণ ভুলসমূহ
\`text-overflow: ellipsis\` লেখার পরেও \`white-space: nowrap\` অথবা \`overflow: hidden\` লিখতে ভুলে যাওয়া। এতে ইলিপসিস বা ডট-ডট দেখা যায় না, বরং লেখা নিচে ভেঙে যায়।

### কোড উদাহরণ
\`\`\`css
.truncate-text {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
\`\`\``
  },
  {
    id: 'css-22',
    title: 'Explain the difference between a CSS Reset and CSS Normalize.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Resets', 'Browser compatibility', 'Architecture'],
    enAnswer: 'A CSS Reset completely removes all default browser styles (setting margins/paddings to 0). CSS Normalize preserves useful defaults and resolves inconsistencies across browsers rather than stripping everything.',
    bnAnswer: 'CSS রিসেট ব্রাউজারের সকল ডিফল্ট স্টাইল সম্পূর্ণ মুছে ফেলে (যেমন মার্জিন/প্যাডিং ০ করে দেয়)। CSS নরমালাইজ দরকারী ডিফল্ট স্টাইলগুলোকে বজায় রাখে এবং সব ব্রাউজারের অসঙ্গতি দূর করে সব জায়গায় একই রূপ প্রদর্শন করে।',
    enExplanation: `### Explanation
Browsers apply custom default styles (User Agent Stylesheets) to HTML elements. To handle inconsistent default margins, paddings, and font sizes across browsers, developers use two main approaches:
- **CSS Reset (e.g., Eric Meyer Reset)**: Aggressively strips styles from elements. It sets headings (\`h1\`), paragraphs (\`p\`), list margins, and paddings to \`0\`, and changes font sizes to \`100%\`. This creates a completely blank canvas where you must explicitly style everything.
- **Normalize.css**: Rather than deleting styles, it aims to make browser styles consistent. For example, it preserves browser margins on headings but ensures they render exactly the same on Chrome, Safari, and Firefox. It also fixes common bugs (like forms elements rendering differently).

### Real-World Example
Using a CSS Reset means your heading tags \`<h1>\` will look exactly like plain text paragraphs until you write custom CSS rules. Using Normalize.css means \`<h1>\` will still be large and bold, but it will have the same padding and height on all mobile and desktop browsers.

### Best Practice
For modern development, use modern CSS normalization patterns or standard resets bundled in frameworks (like Tailwind's Preflight) that apply box-sizing fixes, set line-heights, and preserve basic interactive element aesthetics.

### Common Mistakes
Manually writing poor reset sheets that strip margins but break focus states (\`outline: 0\`), removing accessibility highlighting for keyboard users.

### Code Example
\`\`\`css
/* Traditional Reset example */
html, body, div, span, h1, h2, p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}

/* Modern Normalize approach snippet */
html {
  line-height: 1.15; /* Correct inline height across browsers */
  -webkit-text-size-adjust: 100%; /* Prevent iOS font scaling bugs */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভিন্ন ভিন্ন ব্রাউজার তাদের নিজস্ব ডিফল্ট স্টাইল (ইউজার এজেন্ট স্টাইলশিট) ব্যবহার করে থাকে। ব্রাউজারের এই অসঙ্গতি দূর করতে দুই ধরনের টেকনিক ব্যবহার করা হয়:
- **CSS Reset (যেমন, Eric Meyer Reset)**: এটি ব্রাউজারের ডিফল্ট স্টাইলগুলোকে আক্রমণাত্মকভাবে শূন্য করে দেয়। হেডিং, প্যারাগ্রাফ ও লিস্টের মার্জিন-প্যাডিং \`0\` করে দেয় এবং ফন্ট সাইজ \`100%\` করে দেয়। এর ফলে পুরোপুরি ব্ল্যাঙ্ক পেজ পাওয়া যায় যেখানে backcountry-তে সবকিছু নতুন করে স্টাইল করতে হয়।
- **Normalize.css**: এটি ডিফল্ট স্টাইলগুলো পুরোপুরি মুছে দেওয়ার বদলে ব্রাউজারগুলোর অসঙ্গতিগুলো সংশোধন করে। যেমন এটি হেডিংয়ের ডিফল্ট সাইজ বজায় রাখবে কিন্তু নিশ্চিত করবে যেন এটি Chrome, Safari ও Firefox ব্রাউজারে একই রকম দেখায়। এছাড়া এটি ফর্মের বিভিন্ন বাগ ফিক্স করে।

### বাস্তব-ভিত্তিক উদাহরণ
CSS রিসেট ব্যবহার করলে আপনার \`<h1>\` ট্যাগটি সাধারণ প্যারাগ্রাফের মতো দেখাবে যতক্ষণ না আপনি নিজে সিএসএস লিখছেন। নরমালাইজ ব্যবহার করলে এটি বড় ও বোল্ড দেখাবে এবং সব ব্রাউজারে এর সাইজ ও স্পেসিং সমান থাকবে।

### উত্তম অনুশীলন
ডিজাইন রিসেট করার সময় \`initial\` ব্যবহারের চেয়ে \`unset\` ব্যবহার করা বেশি নিরাপদ, যাতে ব্লক এলিমেন্ট ইনলাইন হয়ে যাওয়ার মতো কোনো অনাকাঙ্ক্ষিত বাগ তৈরি না হয়।

### সাধারণ ভুলসমূহ
ভুল রিসেট স্টাইলশিট ব্যবহার করে অ্যাক্সেসিবিলিটি ফোকাস ইন্ডিকেটর (\`outline: 0\`) বাদ দিয়ে দেওয়া, যার ফলে কীবোর্ড দিয়ে ব্রাউজ করা ব্যবহারকারীরা ফোকাসিং হারিয়ে ফেলেন।

### কোড উদাহরণ
\`\`\`css
/* ট্র্যাডিশনাল রিসেটের উদাহরণ */
html, body, div, span, h1, h2, p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}

/* নরমালাইজ সিএসএসের উদাহরণ */
html {
  line-height: 1.15; /* সব ব্রাউজারে সমান লাইন হাইট */
  -webkit-text-size-adjust: 100%; /* iOS ফন্ট সাইজ বাগ সমাধান */
}
\`\`\``
  },
  {
    id: 'css-23',
    title: 'Explain global CSS values: inherit, initial, unset, and revert.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Properties', 'Global Values', 'Fundamentals'],
    enAnswer: 'inherit makes a property take the value of its parent. initial resets a property to its default CSS specification value. unset acts as inherit for inherited properties and initial for non-inherited ones. revert resets a property to the browser\'s default user-agent stylesheet.',
    bnAnswer: 'inherit কোনো প্রোপার্টিকে তার প্যারেন্ট এলিমেন্টের ভ্যালু গ্রহণ করায়। initial প্রোপার্টিকে তার ডিফল্ট CSS স্পেসিফিকেশন ভ্যালুতে রিসেট করে। unset ইনহেরিটেড প্রোপার্টির জন্য inherit এবং নন-ইনহেরিটেড প্রোপার্টির জন্য initial হিসেবে কাজ করে। revert ব্রাউজারের ডিফল্ট ইউজার-এজেন্ট স্টাইলের ভ্যালুতে ফিরিয়ে নেয়।',
    enExplanation: `### Explanation
CSS provides four global properties to control styling values relative to specification defaults and parent values:
- **\`inherit\`**: Instructs the property to take the same computed value as its parent element. Useful for forcing non-inherited properties (like \`border\` or \`padding\`) to align with parents.
- **\`initial\`**: Resets the property to its official CSS specifications default. For example, setting \`display: initial\` on a \`<div>\` resets it to \`inline\` (which is the default display value for all tags in the CSS specification, even though browsers render div as block).
- **\`unset\`**: acts as a hybrid. If the property is naturally inherited (like \`color\` or \`font-family\`), it behaves like \`inherit\`. If it is not inherited (like \`margin\` or \`border\`), it behaves like \`initial\`.
- **\`revert\`**: Resets the style back to the browser's default user-agent styles. For example, \`display: revert\` on a \`<div>\` will set it back to \`block\`.

### Real-World Example
If you build a widget area and want to reset a paragraph to behave exactly like a default browser paragraph, you use \`all: revert\`. This clears all parent styles and restores native styles.

### Best Practice
Use \`unset\` as a safe, clean way to reset styling variables without introducing bugs from CSS specifications default configurations (like turning blocks into inlines).

### Common Mistakes
Assuming \`initial\` resets elements to their native browser styling. Remember: \`initial\` uses the raw W3C specification default (like making a \`div\` display as \`inline\`), which is rarely what you want. Use \`revert\` instead.

### Code Example
\`\`\`css
.parent {
  color: blue;
  border: 1px solid red;
}

.child {
  /* color is naturally inherited (blue), but we can force it */
  color: inherit;
  
  /* border is not inherited, but we can make it inherit */
  border: inherit;
}

.reset-widget {
  /* Resets all properties back to browser stylesheet defaults */
  all: revert;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSS-এ প্রোপার্টির ভ্যালু ডিফল্ট অবস্থায় বা প্যারেন্টের সাপেক্ষে রিসেট করার জন্য ৪টি গ্লোবাল ভ্যালু রয়েছে:
- **\`inherit\`**: এটি নির্দেশ দেয় ওই প্রোপার্টির মান প্যারেন্ট এলিমেন্টের সমান রাখতে। সাধারণত যেসব প্রোপার্টি নিজে থেকে ইনহেরিট হয় না (যেমন বর্ডার বা প্যাডিং), সেগুলোকে প্যারেন্টের সমান করতে এটি ব্যবহৃত হয়।
- **\`initial\`**: এটি প্রোপার্টিকে তার মূল CSS স্পেসিফিকেশনের ডিফল্ট মানে রিসেট করে। যেমন একটি \`<div>\`-এ \`display: initial\` দিলে তা \`inline\` হয়ে যাবে (কারণ সিএসএস স্পেসিফিকেশনে ডিফল্ট ডিসপ্লে ভ্যালু হলো ইনলাইন)।
- **\`unset\`**: এটি একটি হাইব্রিড ভ্যালু। যদি প্রোপার্টি স্বভাবগতভাবে প্যারেন্ট থেকে ইনহেরিট হয় (যেমন কালার বা ফন্ট), তবে এটি \`inherit\`-এর মতো কাজ করে। আর যদি ইনহেরিট না হয় (যেমন মার্জিন বা বর্ডার), তবে এটি \`initial\`-এর মতো কাজ করে।
- **\`revert\`**: এটি প্রোপার্টির মানকে ব্রাউজারের নিজস্ব ডিফল্ট ইউজার-এজেন্ট স্টাইলে ফিরিয়ে নেয়। যেমন \`<div>\`-এ \`display: revert\` দিলে তা আবার \`block\` হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি একটি সাইডবার উইজেট এরিয়া তৈরি করেছেন যেখানে প্যারেন্টের সব ফন্ট কালার বা সাইজ ইনহেরিট হয়ে গেছে। এখন আপনি চাচ্ছেন ভেতরের একটি প্যারাগ্রাফ যেন ব্রাউজারের ডিফল্ট আচরণের মতো কাজ করে। সেখানে আপনি \`all: revert\` ব্যবহার করে রিঅ্যাক্ট করতে পারেন।

### উত্তম অনুশীলন
ডিজাইন রিসেট করার সময় \`initial\` ব্যবহারের চেয়ে \`unset\` ব্যবহার করা বেশি নিরাপদ, যাতে ব্লক এলিমেন্ট ইনলাইন হয়ে যাওয়ার মতো কোনো অনাকাঙ্ক্ষিত বাগ তৈরি না হয়।

### সাধারণ ভুলসমূহ
মনে করা যে \`initial\` ব্যবহার করলে এলিমেন্ট ব্রাউজারের ডিফল্ট স্টাইলে ফিরবে। মনে রাখবেন: \`initial\` মূলত W3C স্ট্যান্ডার্ডের রুট ডিফল্টে ফিরে যায় (যেমন div কে inline করা)। তাই ব্রাউজার ডিফল্ট স্টাইলে ফিরতে \`revert\` ব্যবহার করুন।

### কোড উদাহরণ
\`\`\`css
.parent {
  color: blue;
  border: 1px solid red;
}

.child {
  /* কালার স্বাভাবিকভাবেই ইনহেরিট হয়ে নীল হবে */
  color: inherit;
  
  /* বর্ডার ইনহেরিট হয় না, তবে ইনহেরিট করতে বাধ্য করছি */
  border: inherit;
}

.reset-widget {
  /* উইজেটের সব প্রোপার্টি ব্রাউজারের ডিফল্ট স্টাইলে ফিরবে */
  all: revert;
}
\`\`\``
  },
  {
    id: 'css-24',
    title: 'Compare the three methods of applying CSS to HTML.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'HTML', 'Fundamentals', 'Architecture'],
    enAnswer: 'The three methods to apply CSS are: Inline styles (attribute directly on elements), Internal/Embedded styles (within a <style> tag in the HTML head), and External stylesheets (linked using the <link> tag).',
    bnAnswer: 'CSS প্রয়োগের তিনটি পদ্ধতি হলো: ইনলাইন স্টাইল (সরাসরি এলিমেন্টের অ্যাট্রিবিউট হিসেবে), ইন্টারনাল/এমবেডেড স্টাইল (HTML হেডের ভেতর <style> ট্যাগের মধ্যে), এবং এক্সটারনাল স্টাইলশিট (<link> ট্যাগের সাহায্যে আলাদা ফাইল লিংক করা)।',
    enExplanation: `### Explanation
CSS can be loaded into an HTML document in three ways:
1. **External Stylesheet**: Uses a \`<link>\` tag inside the HTML \`<head>\` pointing to an external \`.css\` file.
   - *Pros*: Separates content and design, allows caching, and makes maintenance easy across multiple pages.
   - *Cons*: Requires an extra HTTP request (mitigated by HTTP/2 and CDNs).
2. **Internal / Embedded Style**: Written inside \`<style>\` tags directly inside the HTML document's \`<head>\`.
   - *Pros*: Saves HTTP requests for single-page templates.
   - *Cons*: Cannot be cached, bloats HTML size, and hard to manage across multiple pages.
3. **Inline Styles**: Styles declared directly inside elements using the \`style\` attribute.
   - *Pros*: Highest specificity override, useful for dynamic JS values.
   - *Cons*: Breaks separation of concerns, impossible to cache, high maintenance, and duplicates CSS bytes.

### Real-World Example
In production environments, 99% of styles are loaded via **External Stylesheets** for cache efficiency. **Inline Styles** are only used dynamically via JavaScript (e.g., calculations of height during mouse dragging).

### Best Practice
Always use External Stylesheets for clean architecture. Keep inline styles strictly for dynamic value overrides handled by JS animations or components.

### Common Mistakes
Overusing inline styles for layout alignment because it is faster during initial draft setups, which blocks CSS classes from applying hover transitions.

### Code Example
\`\`\`html
<!-- External Link -->
<link rel="stylesheet" href="/styles/main.css">

<!-- Internal Style -->
<style>
  .card-title {
    color: #4f46e5;
  }
</style>

<!-- Inline Style (avoid except for dynamic offsets) -->
<div style="background-color: blue; padding: 10px;"></div>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
HTML ডকুমেন্টে CSS মূলত ৩টি উপায়ে যুক্ত করা যায়:
১. **External Stylesheet (এক্সটারনাল)**: HTML ফাইলের \`<head>\`-এ \`<link>\` ট্যাগ ব্যবহার করে আলাদা একটি \`.css\` ফাইল লিংক করা।
   - *সুবিধা*: কনটেন্ট ও ডিজাইন আলাদা থাকে, ফাইল ব্রাউজারে ক্যাশ (Cache) হতে পারে এবং একাধিক পেজ একসাথে ম্যানেজ করা সহজ।
   - *অসুবিধা*: ফাইল ডাউনলোডের জন্য অতিরিক্ত HTTP রিকোয়েস্ট তৈরি হয় (যদিও modern CDN বা HTTP/2-তে এটি কোনো বড় সমস্যা নয়)।
২. **Internal Style (ইন্টারনাল)**: HTML ফাইলের ভেতরে সরাসরি \`<style>\` ট্যাগের মধ্যে CSS কোড লেখা।
   - *সুবিধা*: একটি সিঙ্গেল পেজ বা ইমেইল টেমপ্লেটের জন্য উপযোগী যেখানে আলাদা ফাইল বানানোর প্রয়োজন নেই।
   - *অসুবিধা*: অন্য পেজ থেকে অ্যাক্সেস করা যায় না, ক্যাশ করা যায় না এবং HTML কোডের সাইজ বড় করে।
৩. **Inline Styles (ইনলাইন)**: সরাসরি HTML এলিমেন্টের ভেতরে \`style="..."\` অ্যাট্রিবিউট ব্যবহার করে কোড লেখা।
   - *সুবিধা*: এর স্পেসিফিসিটি বেশি এবং জাভাস্ক্রিপ্ট দিয়ে ডাইনামিক অফসেট দেওয়ার জন্য এটি কার্যকর।
   - *অসুবিধা*: কোড রিডাবিলিটি নষ্ট করে, ক্যাশ করা যায় না এবং এটি মেইনটেইন করা অসম্ভব কঠিন।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাকশন লেভেলে অ্যাপ্লিকেশনের সব স্টাইল **External Stylesheets**-এর মাধ্যমে লোড করা হয় যাতে পারফরম্যান্স ভালো থাকে। **Inline Styles** কেবল তখনই ব্যবহার করা হয় যখন জাভাস্ক্রিপ্ট দিয়ে ডাইনামিক কোনো পরিবর্তন (যেমন মাউস ড্র্যাগিংয়ের সময় পজিশন গণনা) করা হয়।

### উত্তম অনুশীলন
প্রজেক্টের ক্লিন আর্কিটেকচার বজায় রাখতে সবসময় এক্সটারনাল স্টাইলশিট ব্যবহার করুন। ইনলাইন স্টাইল কেবল ডাইনামিক বা জাভাস্ক্রিপ্ট রেন্ডারিংয়ের প্রয়োজনেই ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ইনস্ট্যান্ট আউটপুট পেতে সরাসরি ইনলাইন স্টাইল দিয়ে পুরো লেআউট স্টাইল করা, যা পরবর্তীতে কোনো সিএসএস ক্লাস দ্বারা ওভাররাইড বা মডিফাই করা যায় না।

### কোড উদাহরণ
\`\`\`html
<!-- এক্সটারনাল লিংক -->
<link rel="stylesheet" href="/styles/main.css">

<!-- ইন্টারনাল স্টাইল -->
<style>
  .card-title {
    color: #4f46e5;
  }
</style>

<!-- ইনলাইন স্টাইল (ডাইনামিক ভ্যালু ছাড়া এড়িয়ে চলুন) -->
<div style="background-color: blue; padding: 10px;"></div>
\`\`\``
  },
  {
    id: 'css-25',
    title: 'Explain CSS floats and how to clear them (clearfix methods).',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Floats', 'Clearfix'],
    enAnswer: 'The float property pushes an element left or right, allowing text to wrap around it. Floating removes the element from vertical layout flow, which collapses the parent container height. You clear floats using clear: both or the clearfix pseudo-element pattern.',
    bnAnswer: 'float প্রোপার্টি কোনো এলিমেন্টকে ডানে বা বামে সরিয়ে দেয় এবং তার চারপাশে টেক্সট র‍্যাপ করার সুযোগ দেয়। ফ্লোটিং এলিমেন্ট উল্লম্ব লেআউট ফ্লো থেকে ছিটকে যাওয়ায় প্যারেন্ট কন্টেইনারের হাইট সংকুচিত হয়। clear: both বা ক্লিয়ারফিক্স (clearfix) প্যাটার্ন দিয়ে এটি সমাধান করা যায়।',
    enExplanation: `### Explanation
The \`float\` property was originally designed to align images within blocks of text, allowing the text to wrap around them. However, it was historically overused for full page layouts.
When you float an element, it is removed from the normal flow of the page:
- Parent elements collapse vertically because they no longer register the height of floated children.
- Surrounding elements wrap around the float, which can break secondary structures.

**How to Clear Floats**:
1. **Clear property**: Apply \`clear: both\` or \`left\`/\`right\` on an element *after* the floated block to force it below the float.
2. **Clearfix Hack**: Apply a pseudo-element block to the parent container:
   \`\`\`css
   .parent::after {
     content: "";
     display: table;
     clear: both;
   }
   \`\`\`
3. **Overflow method**: Apply \`overflow: auto\` or \`hidden\` to the parent container. This forces the parent to contain its floated children.

### Real-World Example
If you float two columns inside a main container to set them side-by-side, the container background and borders will collapse to 0 height. Applying the clearfix hack to the container restores its background color and size.

### Best Practice
Do not use floats for layout structures anymore. Modern layouts should be built using Flexbox or Grid. Limit the use of floats strictly to wrapping text around inline images.

### Common Mistakes
Forgetting to clear floats, causing footer blocks or secondary side widgets to collapse or render under the floated layout content incorrectly.

### Code Example
\`\`\`css
/* Floated Item */
.thumbnail {
  float: left;
  margin-right: 15px;
}

/* Modern Clearfix wrapper */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`float\` প্রোপার্টিটি মূলত টেক্সটের মধ্যে ইমেজ অ্যালাইন করার জন্য তৈরি করা হয়েছিল যাতে ইমেজটির চারপাশে টেক্সট সুন্দরভাবে বসতে পারে। পরবর্তীতে এটি লেআউট তৈরির কাজেও বা গুগোল ডেকোরেশনে ব্যবহৃত হতো।
যখন আপনি একটি এলিমেন্টকে float করেন, তখন সেটি সাধারণ পেজ ফ্লো থেকে আংশিক ছিটকে যায়:
- প্যারেন্ট কন্টেইনার তার ফ্লোটেড চাইল্ডের উচ্চতা আর হিসাব করতে পারে না এবং এর ফলে প্যারেন্টের উচ্চতা সংকুচিত (collapse) হয়ে যায়।
- চারপাশের অন্য এলিমেন্টগুলো ফ্লোটেড এলিমেন্টের গা ঘেঁষে উপরে উঠতে চায়, যা লেআউট নষ্ট করে।

**ফ্লোট সমস্যার সমাধান (Clearing Floats)**:
১. **Clear property**: ফ্লোটেড এলিমেন্টের ঠিক পরে থাকা অন্য কোনো এলিমেন্টে \`clear: both\` ব্যবহার করা।
২. **Clearfix Hack**: প্যারেন্ট কন্টেইনারের ওপরে একটি সিউডো-এলিমেন্ট যুক্ত করা:
   \`\`\`css
   .parent::after {
     content: "";
     display: table;
     clear: both;
   }
   \`\`\`
৩. **Overflow method**: প্যারেন্ট এলিমেন্টে \`overflow: auto\` বা \`hidden\` দেওয়া। এটি প্যারেন্টকে বাধ্য করে ভেতরের ফ্লোটেড চাইল্ডের উচ্চতা কাউন্ট করতে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কন্টেইনারের ভেতরের দুটি কলামকে পাশাপাশি সাজাতে যদি \`float: left\` ব্যবহার করেন, তবে কন্টেইনারের ব্যাকগ্রাউন্ড কালার হাওয়া হয়ে যাবে কারণ কন্টেইনারটির হাইট ০ হয়ে গেছে। কন্টেইনারে ক্লিয়ারফিক্স ক্লাস দিলে ব্যাকগ্রাউন্ড আবার ফিরে আসবে।

### উত্তম অনুশীলন
লেআউট বা কলাম স্ট্রাকচার তৈরি করতে ফ্লোটের ব্যবহার বন্ধ করুন। এর পরিবর্তে আধুনিক Flexbox বা Grid ব্যবহার করুন। float শুধুমাত্র টেক্সটের পাশে ইমেজ ভাসিয়ে রাখার উদ্দেশ্যেই সীমাবদ্ধ রাখুন।

### সাধারণ ভুলসমূহ
float ব্যবহার করার পর ক্লিয়ার করতে ভুলে যাওয়া, যার ফলে নিচের ফুটার বা কার্ড কলামগুলো ভেঙে ফ্লোটেড এলিমেন্টের নিচে বা ওপরে অসঙ্গতভাবে ঢুকে যায়।

### কোড উদাহরণ
\`\`\`css
/* ফ্লোটেড ইমেজ চাইল্ড */
.thumbnail {
  float: left;
  margin-right: 15px;
}

/* ক্লিয়ারফিক্স প্যারেন্ট ক্লাস */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
\`\`\``
  },
  {
    id: 'css-26',
    title: 'How do you customize cursors in CSS?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Cursor', 'Visuals', 'Fundamentals'],
    enAnswer: 'The cursor property specifies the mouse cursor to display. You can use standard keywords (pointer, grab, not-allowed) or load a custom image file (using url()) with fallback defaults.',
    bnAnswer: 'cursor প্রোপার্টি নির্ধারণ করে মাউস কারসরটি দেখতে কেমন হবে। আপনি সাধারণ কিওয়ার্ড (pointer, grab, not-allowed) ব্যবহার করতে পারেন অথবা ফালব্যাকসহ কাস্টম ইমেজ ফাইল (url() ব্যবহার করে) লোড করতে পারেন।',
    enExplanation: `### Explanation
The \`cursor\` property defines the mouse pointer's appearance when hovered over an element:
1. **Keyword cursors**: Standard pointers built into operating systems. Examples:
   - \`pointer\`: Hand icon, used for links and buttons.
   - \`not-allowed\`: Circle with a diagonal line, indicating disabled fields.
   - \`grab\` / \`grabbing\`: Hand icon indicating drag-and-drop.
   - \`text\`: I-beam indicating text can be highlighted.
2. **Custom cursors (\`url()\`)**: Load custom PNG, SVG, or CUR files.
   - Syntax: \`cursor: url('custom-cursor.png') x y, fallback-keyword;\`.
   - The \`x y\` offsets define the exact pixel "hotspot" coordinates of the pointer tip inside the image.
   - **CRITICAL**: You must specify a standard fallback keyword (like \`pointer\`) at the end of the declaration, otherwise the custom URL will be ignored by browsers.

### Real-World Example
In a browser-based PDF viewer app, when the user hovers over a draggable page document, changing the cursor to \`grab\` (and \`grabbing\` while active mouse-down dragging) visually communicates the scrollable layout behavior.

### Best Practice
Custom cursor images should be small (ideally 32x32 pixels or smaller) for rendering speed. Always ensure high color contrast so the pointer remains visible over light and dark backgrounds.

### Common Mistakes
Forgetting the mandatory fallback keyword at the end of the \`url()\` cursor rule, causing the browser to ignore the custom cursor entirely.

### Code Example
\`\`\`css
/* Custom image cursor with hot-spot coordinates and fallback */
.game-canvas {
  cursor: url('/images/crosshair.png') 16 16, crosshair;
}

/* Disabled button cursor */
.btn-disabled {
  cursor: not-allowed;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`cursor\` প্রোপার্টি নির্ধারণ করে মাউস পয়েন্টারটি কোনো এলিমেন্টের ওপরে গেলে কেমন আকার ধারণ করবে:
১. **কিওয়ার্ড কারসর**: অপারেটিং সিস্টেমের সাথে থাকা ডিফল্ট কারসর। যেমন:
   - \`pointer\`: হাতের থাবা বা তর্জনী ইশারা, ক্লিকেবল লিংকে ব্যবহৃত হয়।
   - \`not-allowed\`: লাল বা কালো বৃত্তের ভেতর কোনাকুনি রেখা, নিষ্ক্রিয় বা ইনঅ্যাক্টিভ বাটন নির্দেশ করে।
   - \`grab\` / \`grabbing\`: ড্র্যাগ অ্যান্ড ড্রপ বা টানার সময় ব্যবহৃত হাত।
   - \`text\`: লেখার ফোকাস নির্দেশক I-beam।
২. **কাস্টম কারসর (\`url()\`)**: কাস্টম PNG, SVG বা CUR ফাইল লোড করা।
   - সিনট্যাক্স: \`cursor: url('custom-cursor.png') x y, fallback-keyword;\`।
   - \`x y\` অফসেট দিয়ে কাস্টম ইমেজের ঠিক কোন পয়েন্টটি মূল ক্লিক পিন বা হটস্পট হিসেবে কাজ করবে তা পিক্সেল পয়েন্টে নির্দিষ্ট করা হয়।
   - **অবশ্যই করণীয়**: কোডের শেষে একটি ডিফল্ট কিওয়ার্ড ফালব্যাক দিতেই হবে, অন্যথায় কাস্টম ইউআরএলটি ব্রাউজার দ্বারা বাতিল হবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি রিডার বা মানচিত্র অ্যাপে ইউজার যখন পেজটি টেনে স্ক্রল করার চেষ্টা করেন, তখন কারসরকে \`grab\` (এবং মাউস চেপে ধরে ড্র্যাগ করার সময় \`grabbing\`) করে দিলে পেজের স্ক্রলিং আচরণটি সহজে বোঝা যায়।

### উত্তম অনুশীলন
পারফরম্যান্স বজায় রাখতে কাস্টম কারসর ফাইলের আকার ৩২x৩২ পিক্সেলের নিচে রাখুন। কারসর যেন পেজের সাদা বা কালো সব ব্যাকগ্রাউন্ডেই ফুটে ওঠে সে জন্য সঠিক কনট্রাস্ট নিশ্চিত করুন।

### সাধারণ ভুলসমূহ
\`url()\` ব্যবহার করে কাস্টম কারসর ডিক্লেয়ার করার সময় কমার পর ফালব্যাক কিওয়ার্ড (যেমন \`pointer\`) দিতে ভুলে যাওয়া। এতে কাস্টম কারসরটি পেজে কাজই করবে না।

### কোড উদাহরণ
\`\`\`css
/* ১৬ পিক্সেল এক্স-ওয়াই হটস্পটসহ কাস্টম কারসর এবং ফালব্যাক */
.game-canvas {
  cursor: url('/images/crosshair.png') 16 16, crosshair;
}

/* নিষ্ক্রিয় বাটনের জন্য কারসর */
.btn-disabled {
  cursor: not-allowed;
}
\`\`\``
  },
  {
    id: 'css-27',
    title: 'What is the difference between outline and border in CSS?',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Layout', 'Borders', 'Accessibility'],
    enAnswer: 'A border takes up space in the box model, affecting calculations of width and height. An outline is drawn outside the border, does not occupy any space in the layout, and is often used to highlight focus states for accessibility.',
    bnAnswer: 'বর্ডার বক্স মডেলের অংশ হিসেবে জায়গা দখল করে এবং উইডথ-হাইটের হিসাবে প্রভাব ফেলে। আউটলাইন বর্ডারের বাইরে আঁকা হয়, এটি লেআউটে কোনো জায়গা দখল করে না এবং অ্যাক্সেসিবিলিটির জন্য ফোকাস স্টেট হাইলাইট করতে বেশি ব্যবহৃত হয়।',
    enExplanation: `### Explanation
While both draw lines around elements, \`border\` and \`outline\` have distinct properties:
- **\`border\`**:
  - Part of the box model.
  - Occupies page layout space. Adding a 5px border increases the size of the element.
  - Can have rounded corners using \`border-radius\`.
  - Can be styled on individual sides (e.g., \`border-bottom\`).
- **\`outline\`**:
  - Not part of the box model.
  - Drawn outside the border. Does not shift surrounding elements during layout changes.
  - Cannot be styled per side; it surrounds the entire element.
  - Follows custom accessibility properties and is used by browsers to indicate active keyboard tabs.

### Real-World Example
If you have a tight grid of images and want to highlight an image when a user tabs onto it, using a \`border\` will shift the images slightly, causing a jittery layout screen jump. Using an \`outline\` avoids this completely.

### Best Practice
Never use \`outline: none\` or \`outline: 0\` for hover/focus states unless you replace it with an alternative, highly visible focus style. Removing the outline makes your website inaccessible to keyboard-only users.

### Common Mistakes
Confusing outline and border spacing, leading to layout shifts when developers try to use borders to highlight elements dynamically.

### Code Example
\`\`\`css
/* Changes element dimensions */
.card-active {
  border: 2px solid #4f46e5;
}

/* Does not affect element size or cause layout shifts */
.input-field:focus {
  outline: 3px solid #6366f1;
  outline-offset: 2px; /* Adds space between outline and border */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
উভয় প্রোপার্টি এলিমেন্টের চারপাশে দাগ কাটলেও বর্ডার ও আউটলাইনের মধ্যে মৌলিক পার্থক্য আছে:
- **\`border\`**:
  - এটি বক্স মডেলের অংশ।
  - এটি লেআউটে জায়গা দখল করে। বর্ডার বাড়ানোর অর্থ হলো এলিমেন্টের সাইজ বেড়ে যাওয়া।
  - \`border-radius\` দিয়ে এর কোণাগুলো গোল করা যায়।
  - এলিমেন্টের একেক পাশে একেক রকম বর্ডার দেওয়া যায় (যেমন: \`border-bottom\`)।
- **\`outline\`**:
  - এটি বক্স মডেলের অংশ নয়।
  - এটি বর্ডারের বাইরে আঁকা হয় এবং চারপাশের এলিমেন্টকে ধাক্কা দিয়ে সরিয়ে দেয় না।
  - এটি চারপাশে পুরোটা জুড়েই থাকে; এক পাশে বা অর্ধেক পাশে দেওয়া যায় না।
  - কীবোর্ডের মাধ্যমে নেভিগেশন ফোকাস করার জন্য এটি ব্রাউজারের অন্যতম অ্যাক্সেসিবিলিটি ফিচার।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার পেজে গ্রিড আকারে সাজানো কতগুলো থাম্বনেইল ছবি রয়েছে। কীবোর্ড ট্যাব দেওয়ার সময় একটি ছবি সিলেক্ট হলে সেটিতে বর্ডার যোগ করলে চারপাশের ছবিগুলো সামান্য নড়ে যাবে এবং পুরো লেআউটে ঝাঁকুনি দেখা যাবে। আউটলাইন ব্যবহার করলে এই ঝাঁকুনি বা লেআউট শিফট একেবারেই হবে না।

### উত্তম অনুশীলন
ওয়েবসাইট ডেভেলপ করার সময় ভুলেও \`outline: none\` বা \`outline: 0\` দিয়ে ফোকাস স্টেট ভ্যানিশ করবেন না, যদি না আপনি অন্য কোনো স্পষ্ট ফোকাস স্টাইল সিএসএসে লিখে থাকেন। আউটলাইন ছাড়া কীবোর্ড ব্যবহারকারী অন্ধের মতো পেজ ব্রাউজ করতে বাধ্য হন।

### সাধারণ ভুলসমূহ
এলিমেন্ট ডাইনামিকালি সিলেক্ট বা হাইলাইট করার জন্য বর্ডার ব্যবহার করা এবং এর ফলে পুরো পেজ লেআউটে ঝাঁকুনি তৈরি হওয়া।

### কোড উদাহরণ
\`\`\`css
/* এটি এলিমেন্টের উইডথ বাড়িয়ে দেবে */
.card-active {
  border: 2px solid #4f46e5;
}

/* এটি সাইজে কোনো প্রভাব ফেলবে না এবং লেআউট শিফট করবে না */
.input-field:focus {
  outline: 3px solid #6366f1;
  outline-offset: 2px; /* বর্ডার থেকে আউটলাইনের মধ্যকার দূরত্ব */
}
\`\`\``
  },
  {
    id: 'css-28',
    title: 'Explain font-family and how a web font fallback stack works.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Fonts', 'Typography', 'Fundamentals'],
    enAnswer: 'font-family specifies a prioritized list of font family names for the browser to render. The fallback stack ensures that if the preferred web font fails to load, the browser will sequentially fall back to the next available system fonts and generic font categories.',
    bnAnswer: 'font-family ব্রাউজারকে রেন্ডার করার জন্য ক্রমানুসারে সাজানো ফন্টের একটি তালিকা নির্দেশ করে। ফালব্যাক স্ট্যাক নিশ্চিত করে যে যদি পছন্দের ওয়েব ফন্ট লোড হতে ব্যর্থ হয়, তবে ব্রাউজার ধারাবাহিকভাবে পরবর্তী সিস্টেম ফন্ট বা জেনেরিক ফন্ট ক্যাটাগরিগুলো লোড করবে।',
    enExplanation: `### Explanation
The \`font-family\` property allows you to define a **font stack**—a list of fonts ordered from highest preference to lowest.
When rendering text:
1. The browser checks if the first font in the stack (often a custom web font like 'Inter') is installed on the user's device or loaded via a web font stylesheet.
2. If it is unavailable, the browser checks the second font, and so on.
3. The last font in the stack should always be a **generic font family** (such as \`sans-serif\`, \`serif\`, or \`monospace\`), which tells the browser to use its default system font for that class.

Font names containing spaces must be enclosed in quotation marks (e.g., \`"Open Sans"\`).

### Real-World Example
In your CSS you write: \`font-family: 'MyWebFont', 'Helvetica Neue', Arial, sans-serif;\`.
If the user's network blocks 'MyWebFont', the browser looks for 'Helvetica Neue' (common on Macs). If that is missing, it falls back to Arial (common on Windows). If that also fails, it uses the system's default sans-serif font.

### Best Practice
Always include a generic fallback keyword (like \`sans-serif\` or \`serif\`) at the end of every font-family declaration to prevent the browser from defaulting to an ugly serif Times New Roman look on unhandled platforms.

### Common Mistakes
Forgetting quotes around font names that contain spaces (e.g., writing \`font-family: Open Sans, sans-serif;\`), which can cause parser failures on older browsers.

### Code Example
\`\`\`css
body {
  /* Preferred Web Font -> Common Mac System Font -> Common Windows System Font -> Generic Fallback */
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* Smoother typography rendering */
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`font-family\` প্রোপার্টি আপনাকে একটি **Font Stack** বা ক্রমানুসারী ফন্টের তালিকা তৈরি করার সুযোগ দেয়।
টেক্সট রেন্ডার করার সময় ব্রাউজার যা করে:
১. ব্রাউজার চেক করে তালিকার প্রথম ফন্টটি (যেমন 'Inter') ইউজারের ডিভাইসে ইনস্টল করা আছে কিনা বা ওয়েব ফন্ট ফাইল থেকে লোড হয়েছে কিনা।
২. যদি প্রথমটি না পায়, তবে দ্বিতীয় ফন্টটি লোড করার চেষ্টা করে।
৩. ফন্ট স্ট্যাকের একদম শেষে সবসময় একটি **জেনেরিক ফন্ট ফ্যামিলি** (যেমন \`sans-serif\`, \`serif\` বা \`monospace\`) রাখতে হয়, যাতে কোনো ফন্ট না পাওয়া গেলেও ব্রাউজার তার ডিফল্ট সিস্টেম ফন্ট ব্যবহার করে লেখাটি দেখাতে পারে।

যেসব ফন্টের নামে স্পেস বা খালি জায়গা থাকে, সেগুলোকে অবশ্যই কোটেশনের ভেতর রাখতে হবে (যেমন: \`"Open Sans"\`)।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি লিখেছেন: \`font-family: 'MyWebFont', 'Helvetica Neue', Arial, sans-serif;\`।
ইউজারের নেটওয়ার্ক ধীর হওয়ার কারণে 'MyWebFont' লোড না হলে ব্রাউজার 'Helvetica Neue' (ম্যাকের সিস্টেম ফন্ট) খুঁজবে। সেটিও না থাকলে উইন্ডোজের 'Arial' লোড করবে। সবশেষে কিছু না পেলে ডিফল্ট sans-serif ফন্ট ব্যবহার করবে।

### উত্তম অনুশীলন
প্রতিটি ফন্ট ফ্যামিলি ডিক্লেয়ারেশনের শেষে অবশ্যই জেনেরিক ফালব্যাক (যেমন \`sans-serif\`) ব্যবহার করুন, অন্যথায় কোনো ফন্ট লোড না হলে উইন্ডোজে টাইমস নিউ রোমান (Times New Roman) ফন্ট চলে আসতে পারে যা দেখতে বেমানান লাগে।

### সাধারণ ভুলসমূহ
স্পেসযুক্ত ফন্টের নামের চারপাশে কোটেশন দিতে ভুলে যাওয়া (যেমন \`font-family: Open Sans, sans-serif;\` লেখা), যার কারণে পুরোনো ব্রাউজারে ফন্টটি লোড হতে পারে না।

### কোড উদাহরণ
\`\`\`css
body {
  /* ওয়েব ফন্ট -> ম্যাক সিস্টেম ফন্ট -> উইন্ডোজ সিস্টেম ফন্ট -> জেনেরিক ফালব্যাক */
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* ফন্ট রেন্ডারিং স্মুথ করার জন্য */
}
\`\`\``
  },
  {
    id: 'css-29',
    title: 'Explain border-radius and how to style complex shapes like circles in CSS.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Borders', 'Shapes', 'Visuals'],
    enAnswer: 'border-radius rounds the corners of an element. To create a perfect circle, the element must have equal width and height (a square) and border-radius must be set to 50%.',
    bnAnswer: 'border-radius কোনো এলিমেন্টের কোণাগুলোকে গোল করে। একটি নিখুঁত বৃত্ত বা সার্কেল তৈরি করতে এলিমেন্টের উইডথ ও হাইট সমান (বর্গাকার) হতে হবে এবং border-radius ৫০% সেট করতে হবে।',
    enExplanation: `### Explanation
The \`border-radius\` property defines the radius of the element's corners, allowing you to round them:
- **Single value**: \`border-radius: 8px\` rounds all four corners equally.
- **Percentages**: Calculated relative to the dimensions of the box.
- **Perfect Circle**: Requires a square element (e.g., \`width: 100px; height: 100px;\`) with \`border-radius: 50%\`.
- **Complex Shapes (Pills/Capsules)**: Created by using large pixel values (like \`border-radius: 9999px\`). The browser automatically caps the corner radii at half the shorter edge length, creating a neat capsule shape.

You can also specify horizontal and vertical radii separately using a slash (\`/\`) to create ellipses.

### Real-World Example
When designing avatar images, we want the profile image to render as a perfect circle. We set \`width: 80px\`, \`height: 80px\`, \`object-fit: cover\`, and \`border-radius: 50%\`.

### Best Practice
Use \`overflow: hidden\` on parent containers with a \`border-radius\` if child elements (like images) occupy the corners, preventing the child contents from overflowing and appearing sharp.

### Common Mistakes
Attempting to create a circle by setting \`border-radius: 50%\` on a rectangular element, which results in an ellipse/oval shape rather than a circle.

### Code Example
\`\`\`css
/* Perfect Circle */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* Capsule / Pill button */
.pill-button {
  padding: 10px 24px;
  border-radius: 9999px; /* Automatically caps to produce capsule shape */
  background-color: #4f46e5;
  color: white;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`border-radius\` প্রোপার্টি কোনো এলিমেন্টের কোণাগুলোর ব্যাসার্ধ (radius) নির্ধারণ করে তা বাঁকা বা গোল করে:
- **একক মান**: \`border-radius: 8px\` চারদিকের কোণাগুলোকে সমানভাবে গোল করে।
- **শতকরা বা পারসেন্টেজ**: এলিমেন্টটির নিজের উইডথ ও হাইটের সাপেক্ষে হিসাব করা হয়।
- **নিখুঁত বৃত্ত (Circle)**: এলিমেন্টের দৈর্ঘ্য ও প্রস্থ অবশ্যই সমান (যেমন: \`width: 100px; height: 100px;\`) হতে হবে এবং \`border-radius: 50%\` সেট করতে হবে।
- **ক্যাপসুল বা পিল শেপ**: চওড়া বাটনের ক্ষেত্রে \`border-radius: 9999px\` দিলে কোণাগুলো সর্বোচ্চ বাঁকা হয়ে একটি ক্যাপসুল বা পিলের আকার ধারণ করে।

স্ল্যাশ (\`/\`) ব্যবহার করে অনুভূমিক এবং উলম্ব ব্যাসার্ধ আলাদাভাবে নির্ধারণ করে উপবৃত্তাকার (ellipse) ডিজাইনও করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ইন্টারফেসে গোল প্রোফাইল পিকচার বা অ্যাভাটার বানাতে আমরা ছবির \`width: 80px\`, \`height: 80px\`, \`object-fit: cover\` (যাতে ছবি চ্যাপ্টা না হয়) এবং \`border-radius: 50%\` ব্যবহার করি।

### উত্তম অনুশীলন
কোনো বাঁকানো প্যারেন্ট বক্সের ভেতরের চাইল্ড এলিমেন্ট (যেমন ইমেজ) যেন কোণা কেটে বের হয়ে না যায় সে জন্য প্যারেন্টে \`overflow: hidden\` যুক্ত করে দিন।

### সাধারণ ভুলসমূহ
দৈর্ঘ্য ও প্রস্থ অসমান এমন আয়তাকার বক্সে \`border-radius: 50%\` ব্যবহার করে গোল করার চেষ্টা করা। এর ফলে গোল বৃত্ত হওয়ার বদলে ডিম্বাকৃতির উপবৃত্ত (oval/ellipse) তৈরি হয়।

### কোড উদাহরণ
\`\`\`css
/* নিখুঁত বৃত্ত */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* ক্যাপসুল বা পিল আকৃতির বাটন */
.pill-button {
  padding: 10px 24px;
  border-radius: 9999px; /* স্বয়ংক্রিয়ভাবে দুই কোণ গোল করে ক্যাপসুল বানাবে */
  background-color: #4f46e5;
  color: white;
}
\`\`\``
  },
  {
    id: 'css-30',
    title: 'Explain Flexbox wrapping using the flex-wrap property.',
    difficulty: 'basic',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Layout', 'Responsive'],
    enAnswer: 'flex-wrap determines whether flex items are forced onto a single line (nowrap) or can wrap onto multiple lines (wrap) when container space is exhausted. It is a core feature for building responsive layouts without media queries.',
    bnAnswer: 'flex-wrap নির্ধারণ করে ফ্লেক্স আইটেমগুলো কি জোর করে এক লাইনে আটকে থাকবে (nowrap) নাকি কন্টেইনারের জায়গা ফুরিয়ে গেলে স্বয়ংক্রিয়ভাবে পরবর্তী নতুন লাইনে চলে যাবে (wrap)। এটি মিডিয়া কোয়েরি ছাড়াই রেসপনসিভ লেআউট বানানোর একটি মূল ফিচার।',
    enExplanation: `### Explanation
By default, flex items try to fit onto a single line (\`flex-wrap: nowrap\`). If the combined size of the flex items exceeds the width of the parent container, they will shrink (based on their \`flex-shrink\` values) or overflow.
The \`flex-wrap\` property changes this:
- **\`nowrap\`** (default): Items stay on one line. May cause overflow bugs or squish items.
- **\`wrap\`**: Items break onto new lines from top to bottom when space is insufficient.
- **\`wrap-reverse\`**: Items break onto new lines from bottom to top.

### Real-World Example
If you are displaying a tags cloud list (like categories badges) next to each other, they need to wrap to the next line as more tags are added. Setting \`display: flex\` and \`flex-wrap: wrap\` handles this layout automatically on all device screens.

### Best Practice
Combine \`flex-wrap: wrap\` with a gap property (e.g. \`gap: 12px\`) to keep consistent grid spacing horizontally and vertically as items break onto new lines.

### Common Mistakes
Forgetting to set \`flex-wrap: wrap\` on flex containers when children have fixed widths, causing children to shrink below their specified min-widths or break page boundaries horizontally.

### Code Example
\`\`\`css
.tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Allows tags to break onto new lines */
  gap: 8px; /* Vertical and horizontal spacing */
}

.tag-item {
  padding: 6px 12px;
  background-color: #e5e7eb;
  border-radius: 12px;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে সব ফ্লেক্স আইটেম একই লাইনে থাকার চেষ্টা করে (\`flex-wrap: nowrap\`)। আইটেমগুলোর সম্মিলিত আকার কন্টেইনারের প্রস্থকে অতিক্রম করলে তারা সংকুচিত হয়ে যায় অথবা কন্টেইনার ওভারফ্লো করে।
\`flex-wrap\` প্রোপার্টি ব্যবহার করে এই আচরণ নিয়ন্ত্রণ করা যায়:
- **\`nowrap\`** (ডিফল্ট): সব আইটেম এক লাইনেই থাকবে। এতে এলিমেন্ট চ্যাপ্টা হতে পারে।
- **\`wrap\`**: জায়গা শেষ হয়ে গেলে আইটেমগুলো ভেঙে পরবর্তী লাইনে চলে যাবে।
- **\`wrap-reverse\`**: জায়গা ফুরিয়ে গেলে আইটেমগুলো ভেঙে উল্টো দিকে অর্থাৎ উপরের লাইনে চলে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি কতগুলো ব্লগের ট্যাগ বা ক্যাটাগরি ব্যাজ পাশাপাশি দেখাতে চান। স্ক্রিন ছোট হলে ট্যাগগুলো ভেঙে নিচের লাইনে যাওয়া দরকার। কন্টেইনারে \`display: flex\` এবং \`flex-wrap: wrap\` ব্যবহার করলে এটি ডিভাইস স্ক্রিন অনুযায়ী স্বয়ংক্রিয়ভাবে ঘটে।

### উত্তম অনুশীলন
\`flex-wrap: wrap\` এর সাথে একটি গ্যাপ প্রোপার্টি (যেমন \`gap: 12px\`) ব্যবহার করুন, যাতে আইটেমগুলো নিচে নেমে গেলেও তাদের চারপাশের অনুভূমিক ও উলম্ব দূরত্ব সমান থাকে।

### সাধারণ ভুলসমূহ
ফ্লেক্স কন্টেইনারে \`flex-wrap: wrap\` লিখতে ভুলে যাওয়া যখন এর ভেতরের চাইল্ডগুলোর ফিক্সড উইডথ থাকে, যার কারণে চাইল্ডগুলো চ্যাপ্টা হয়ে যায় বা পেজ সীমানা ভেঙে স্ক্রিনের বাইরে চলে যায়।

### কোড উদাহরণ
\`\`\`css
.tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* ট্যাগগুলোকে নিচে নতুন লাইনে যাওয়ার সুযোগ দেবে */
  gap: 8px; /* রো এবং কলামের মধ্যকার ফাঁকা জায়গা */
}

.tag-item {
  padding: 6px 12px;
  background-color: #e5e7eb;
  border-radius: 12px;
}
\`\`\``
  }
];
