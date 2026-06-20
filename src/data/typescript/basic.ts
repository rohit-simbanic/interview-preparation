import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'typescript-1',
    title: 'What is TypeScript and how does it differ from JavaScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'JavaScript', 'Introduction'],
    enAnswer: 'TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing, classes, and interfaces to prevent runtime errors during development.',
    bnAnswer: 'TypeScript হলো জাভাস্ক্রিপ্টের একটি স্ট্রংলি-টাইপড সুপারসেট যা প্লেইন জাভাস্ক্রিপ্টে কম্পাইল হয়। এটি ডেভেলপমেন্টের সময় রানটাইম এরর কমাতে স্ট্যাটিক টাইপিং, ক্লাস এবং ইন্টারফেস যুক্ত করে।',
    enExplanation: `### Explanation
TypeScript extends JavaScript by adding static type definitions. 
- **Static Typing**: TypeScript checks types at compile-time, catching errors before execution. JavaScript checks types at runtime.
- **Superset**: Any valid JavaScript code is valid TypeScript code.
- **Compilation**: Browsers cannot run TypeScript directly; it must be compiled (transpiled) into standard JavaScript.

### Real-World Example
In a team workspace, passing a string instead of a number to a payment function is caught immediately in the IDE editor, preventing a broken checkout page in production.

### Best Practice
Always enable strict type-checking modes in \`tsconfig.json\` to leverage the full benefits of TypeScript's error detection.

### Common Mistakes
Thinking TypeScript provides runtime safety. Since types are stripped during compilation, runtime data validation (like API inputs) must still be handled in JavaScript.

### Code Example
\`\`\`typescript
// JavaScript (No type safety, runs but might cause issues later)
function addJS(a, b) {
  return a + b;
}
addJS(5, "10"); // Returns "510" (string concatenation)

// TypeScript (Static type verification)
function addTS(a: number, b: number): number {
  return a + b;
}
// addTS(5, "10"); // Compiler Error: Argument of type 'string' is not assignable to 'number'
addTS(5, 10); // Returns 15
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
TypeScript জাভাস্ক্রিপ্টের সাথে স্ট্যাটিক টাইপ ডেফিনিশন যুক্ত করে এর কার্যক্ষমতা বাড়ায়।
- **স্ট্যাটিক টাইপিং**: TypeScript কম্পাইল-টাইমেই টাইপ চেক করে ভুলগুলো ধরে ফেলে, কোড রান করার আগেই। JavaScript রানটাইমে টাইপ চেক করে।
- **সুপারসেট**: যেকোনো ভ্যালিড জাভাস্ক্রিপ্ট কোডই ভ্যালিড টাইপস্ক্রিপ্ট কোড।
- **কম্পাইলেশন**: ব্রাউজার সরাসরি টাইপস্ক্রিপ্ট চালাতে পারে না; এটিকে স্ট্যান্ডার্ড জাভাস্ক্রিপ্টে কম্পাইল (ট্রান্সপাইল) করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি টিম ওয়ার্কস্পেসে, পেমেন্ট ফাংশনে নম্বরের বদলে স্ট্রিং পাস করলে তা IDE এডিটরে সাথে সাথে ধরা পড়ে, যা প্রোডাকশনে পেমেন্ট পেজ ক্র্যাশ হওয়া রোধ করে।

### উত্তম অনুশীলন (Best Practice)
টাইপস্ক্রিপ্টের এরর ডিটেকশনের পূর্ণ সুবিধা পেতে \`tsconfig.json\` ফাইলে সবসময় স্ট্রিক্ট টাইপ-চেকিং মোড চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে TypeScript রানটাইমেও টাইপ সেফটি দেয়। যেহেতু কম্পাইলেশনের সময় টাইপগুলো মুছে ফেলা হয়, তাই রানটাইম ডাটা ভ্যালিডেশন (যেমন API রেসপন্স) জাভাস্ক্রিপ্ট দিয়েই হ্যান্ডেল করতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// JavaScript (কোনো টাইপ সেফটি নেই, রান হবে কিন্তু সমস্যা তৈরি করতে পারে)
function addJS(a, b) {
  return a + b;
}
addJS(5, "10"); // "510" রিটার্ন করবে (স্ট্রিং কনক্যাটেনেশন)

// TypeScript (স্ট্যাটিক টাইপ ভেরিফিকেশন)
function addTS(a: number, b: number): number {
  return a + b;
}
// addTS(5, "10"); // কম্পাইল এরর: Argument of type 'string' is not assignable to 'number'
addTS(5, 10); // 15 রিটার্ন করবে
\`\`\``
  },
  {
    id: 'typescript-2',
    title: 'Explain Type Annotations and Type Inference in TypeScript.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Types', 'Annotations', 'Inference'],
    enAnswer: 'Type Annotation is explicitly declaring a type using syntax like :type. Type Inference is TypeScript automatically detecting the type based on the assigned value.',
    bnAnswer: 'Type Annotation হলো :type সিনট্যাক্স ব্যবহার করে স্পষ্ট টাইপ ঘোষণা করা। Type Inference হলো অ্যাসাইন করা মানের ওপর ভিত্তি করে টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে টাইপ সনাক্ত করা।',
    enExplanation: `### Explanation
- **Type Annotations**: The programmer manually writes the type. Useful when declaring variables without initial values, or for function parameters and return types.
- **Type Inference**: TypeScript analyzes values and infers types. If a variable is declared and initialized on the same line, annotations are usually redundant.

### Real-World Example
Declaring a user rating variable \`let rating = 4.5;\` is inferred as \`number\`. Manually writing \`let rating: number = 4.5;\` is unnecessary unless rating needs to accept unions.

### Best Practice
Rely on Type Inference where possible to keep the code clean. Use explicit Annotations for function arguments, return types, and complex object definitions.

### Common Mistakes
Redundantly annotating simple variables like \`const name: string = "Rohit";\`. This clutter makes the code harder to read without adding any extra safety.

### Code Example
\`\`\`typescript
// Type Annotation (Explicit)
let userId: string;
userId = "usr-8890";

// Type Inference (Implicit)
let score = 95; // Inferred as 'number'
// score = "high"; // Compiler Error: Type 'string' is not assignable to type 'number'

// Annotation in function signature (Highly recommended)
function calculateTotal(price: number, tax: number): number {
  return price + tax;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Type Annotations**: ডেভেলপার নিজে ম্যানুয়ালি টাইপ নির্ধারণ করে দেয়। ভ্যারিয়েবল ডিক্লেয়ার করার সময় ইনিশিয়াল ভ্যালু না থাকলে বা ফাংশন প্যারামিটার ও রিটার্ন টাইপের জন্য এটি খুব দরকারী।
- **Type Inference**: TypeScript মানগুলো বিশ্লেষণ করে নিজে থেকেই টাইপ বুঝে নেয়। একই লাইনে ভ্যারিয়েবল ডিক্লেয়ার এবং ইনিশিয়ালাইজ করা হলে সাধারণত অ্যানোটেশনের প্রয়োজন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইউজার রেটিং ভ্যারিয়েবল \`let rating = 4.5;\` লিখলে তা স্বয়ংক্রিয়ভাবে \`number\` হিসেবে ইনফার (infer) হয়। এখানে ম্যানুয়ালি টাইপ লেখা অপ্রয়োজনীয়।

### উত্তম অনুশীলন (Best Practice)
কোড পরিচ্ছন্ন রাখতে যেখানে সম্ভব Type Inference এর ওপর ভরসা রাখুন। তবে ফাংশন আর্গুমেন্ট, রিটার্ন টাইপ এবং জটিল অবজেক্ট ডেফিনিশনের জন্য স্পষ্ট Annotations ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সহজ ভ্যারিয়েবলে অপ্রয়োজনীয় টাইপ অ্যানোটেশন দেওয়া, যেমন- \`const name: string = "Rohit";\`। এটি বাড়তি কোনো নিরাপত্তা না দিয়েই কোডকে জটিল করে তোলে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// Type Annotation (স্পষ্টভাবে ঘোষিত)
let userId: string;
userId = "usr-8890";

// Type Inference (স্বয়ংক্রিয়ভাবে অনুমিত)
let score = 95; // 'number' হিসেবে সনাক্ত হবে
// score = "high"; // কম্পাইলার এরর: Type 'string' is not assignable to type 'number'

// ফাংশন সিগনেচারে অ্যানোটেশন (অত্যন্ত রেকমেন্ডেড)
function calculateTotal(price: number, tax: number): number {
  return price + tax;
}
\`\`\``
  },
  {
    id: 'typescript-3',
    title: 'What is the difference between an interface and a type alias?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Interface', 'TypeAlias'],
    enAnswer: 'Interfaces are primarily used to define object shapes and support declaration merging. Type aliases can define objects, unions, primitives, and tuples but do not merge.',
    bnAnswer: 'Interface মূলত অবজেক্টের শেপ সংজ্ঞায়িত করতে ব্যবহৃত হয় এবং এটি ডিক্লারেশন মার্জিং সাপোর্ট করে। Type Alias অবজেক্ট, ইউনিয়ন, প্রিমিটিভ এবং টিউপল টাইপ করতে পারে কিন্তু মার্জিং সাপোর্ট করে না।',
    enExplanation: `### Explanation
- **Declaration Merging**: Two interfaces with the same name in the same scope will merge their properties. Type aliases with the same name throw a compiler error.
- **Extensions**: Interfaces extend others using \`extends\`. Types extend using intersection operators (\`&\`).
- **Capabilities**: Type aliases can represent primitives (\`type Name = string\`), unions (\`type ID = string | number\`), and tuples, which interfaces cannot directly represent.

### Real-World Example
Declaration merging is widely used in third-party library typing. If a package has a configuration interface, developers can declare the same interface locally to inject custom plugin configurations.

### Best Practice
Use \`interface\` for public APIs and standard object definitions to support extension. Use \`type\` for unions, intersections, utility helpers, and complex tuple types.

### Common Mistakes
Trying to use declaration merging with a type alias, or overusing intersections (\`&\`) with types when a clean interface inheritance would perform faster compilation checks.

### Code Example
\`\`\`typescript
// Declaration Merging with Interface
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: "Rohit", age: 28 }; // Merged!

// Type Alias union definitions
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

// Type Intersection (Extending types)
type Point2D = { x: number; y: number };
type Point3D = Point2D & { z: number };
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ডিক্লারেশন মার্জিং (Declaration Merging)**: একই স্কোপে একই নামের দুটি ইন্টারফেস স্বয়ংক্রিয়ভাবে মার্জ হয়ে যায়। টাইপ এলিয়াসে একই নাম দিলে কম্পাইলার এরর দেয়।
- **এক্সটেনশন**: ইন্টারফেস অন্য ইন্টারফেসকে \`extends\` কীওয়ার্ড দিয়ে বাড়াতে পারে। টাইপ এলিয়াস ইন্টারসেকশন (\`&\`) অপারেটর ব্যবহার করে।
- **ক্ষমতা**: টাইপ এলিয়াস দিয়ে প্রিমিটিভ (\`type Name = string\`), ইউনিয়ন (\`type ID = string | number\`) এবং টিউপল তৈরি করা যায়, যা ইন্টারফেস দিয়ে সরাসরি সম্ভব নয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
থার্ড-পার্টি লাইব্রেরি টাইপিংয়ে ডিক্লারেশন মার্জিং হয়তো বহুল ব্যবহৃত হয়। যদি কোনো প্যাকেজের কনফিগারেশন ইন্টারফেস থাকে, ডেভেলপাররা একই নামে ইন্টারফেস লিখে কাস্টম প্লাগইন কনফিগারেশন যোগ করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
পাবলিক এপিআই এবং সাধারণ অবজেক্টের জন্য \`interface\` ব্যবহার করুন। ইউনিয়ন, ইন্টারসেকশন, ইউটিলিটি হেল্পার এবং জটিল টিউপল টাইপের জন্য \`type\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ এলিয়াসের সাথে ডিক্লারেশন মার্জিং করার চেষ্টা করা, অথবা সাধারণ ইনহেরিটেন্সের জায়গায় অতিরিক্ত টাইপ ইন্টারসেকশন (\`&\`) ব্যবহার করা যা কম্পাইলেশন ধীর করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইন্টারফেসের সাথে ডিক্লারেশন মার্জিং
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: "Rohit", age: 28 }; // মার্জড!

// টাইপ এলিয়াস ইউনিয়ন ডেফিনিশন
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

// টাইপ ইন্টারসেকশন (টাইপ এক্সটেন্ড করা)
type Point2D = { x: number; y: number };
type Point3D = Point2D & { z: number };
\`\`\``
  },
  {
    id: 'typescript-4',
    title: 'Explain the differences between any, unknown, and never types.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Any', 'Unknown', 'Never'],
    enAnswer: 'any disables type checking. unknown is a type-safe counterpart to any that requires type narrowing before use. never represents values that should never occur.',
    bnAnswer: 'any টাইপ চেকিং বন্ধ করে দেয়। unknown হলো any-এর টাইপ-সেফ সংস্করণ যা ব্যবহারের আগে টাইপ ন্যারোইং বা কনফার্মেশন চায়। never এমন মান নির্দেশ করে যা কখনই ঘটতে পারে না।',
    enExplanation: `### Explanation
- **any**: Turns off static checking. Avoid in production; it defeats the purpose of TypeScript.
- **unknown**: Represents any value, but is strictly type-safe. You cannot access properties on \`unknown\` until you perform type narrowing (e.g. using \`typeof\`, \`instanceof\`, or type guards).
- **never**: Used for functions that throw errors, infinite loops, or in conditional type branches that represent impossible conditions.

### Real-World Example
When parsing API responses whose structure is unverified, assign the result to \`unknown\` instead of \`any\`. This forces developers to write type checks before reading data properties.

### Best Practice
Prefer \`unknown\` over \`any\` for runtime inputs. Use \`never\` to ensure exhaustive checks inside switch cases.

### Common Mistakes
Using \`any\` as a quick shortcut to bypass compiler warnings, which introduces silent runtime bugs and destroys type safety.

### Code Example
\`\`\`typescript
// Using any (Unsafe)
let objAny: any = { greet: () => "Hi" };
objAny.nonExistentMethod(); // Compiles but crashes at runtime!

// Using unknown (Safe)
let objUnknown: unknown = "Hello";
// console.log(objUnknown.toUpperCase()); // Compiler Error: Object is of type 'unknown'.
if (typeof objUnknown === "string") {
  console.log(objUnknown.toUpperCase()); // Safe and allowed
}

// Using never (Exhaustive checks)
function throwError(msg: string): never {
  throw new Error(msg); // Never returns
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **any**: স্ট্যাটিক চেকিং নিষ্ক্রিয় করে দেয়। প্রোডাকশন কোডে এটি ব্যবহার করা অনুচিত কারণ এটি টাইপস্ক্রিপ্টের মূল উদ্দেশ্যকে নষ্ট করে।
- **unknown**: যেকোনো ভ্যালু নির্দেশ করতে পারে, তবে এটি টাইপ-সেফ। টাইপ ন্যারোইং (যেমন- \`typeof\` বা টাইপ গার্ড) ছাড়া এর প্রপার্টি অ্যাক্সেস করা যায় না।
- **never**: এরর থ্রো করে এমন ফাংশন, ইনফিনিট লুপ অথবা কন্ডিশনাল টাইপের এমন ব্রাঞ্চে ব্যবহৃত হয় যা কখনই ঘটা সম্ভব নয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
যেকোনো এপিআই থেকে আসা রেসপন্স যা এখনো ভেরিফাই করা হয়নি, সেটিকে \`any\` এর বদলে \`unknown\` টাইপ দিন। এতে ডেভেলপার ডাটা রিড করার আগে টাইপ চেক করতে বাধ্য হয়।

### উত্তম অনুশীলন (Best Practice)
রানটাইম ইনপুটের ক্ষেত্রে \`any\` এর পরিবর্তে \`unknown\` কে অগ্রাধিকার দিন। সুইট কেসের সব পথ বন্ধ হয়েছে কি না নিশ্চিত করতে \`never\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কম্পাইলার এরর দ্রুত এড়াতে \`any\` ব্যবহার করা, যা রানটাইমে মারাত্মক বাগ ডেকে আনতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// any ব্যবহার (অনিরাপদ)
let objAny: any = { greet: () => "Hi" };
objAny.nonExistentMethod(); // কম্পাইল হবে কিন্তু রানটাইমে ক্র্যাশ করবে!

// unknown ব্যবহার (নিরাপদ)
let objUnknown: unknown = "Hello";
// console.log(objUnknown.toUpperCase()); // কম্পাইলার এরর: Object is of type 'unknown'.
if (typeof objUnknown === "string") {
  console.log(objUnknown.toUpperCase()); // নিরাপদ এবং অনুমোদিত
}

// never ব্যবহার
function throwError(msg: string): never {
  throw new Error(msg); // কখনই রিটার্ন করবে না
}
\`\`\``
  },
  {
    id: 'typescript-5',
    title: 'How do optional properties (?) and optional parameters work?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'OptionalProperties', 'OptionalParameters'],
    enAnswer: 'Optional properties and parameters use the ? syntax. They allow variables or arguments to be omitted, effectively adding undefined to their type.',
    bnAnswer: 'ঐচ্ছিক (optional) প্রপার্টি ও প্যারামিটার ? সিনট্যাক্স ব্যবহার করে। এগুলো কোনো প্রপার্টি বা আর্গুমেন্ট বাদ দেওয়ার অনুমতি দেয় এবং টাইপের সাথে undefined যুক্ত করে।',
    enExplanation: `### Explanation
- **Optional Properties**: In interfaces or type aliases, \`propertyName?: type\` means the key can be omitted when creating an object.
- **Optional Parameters**: In functions, \`param?: type\` must follow mandatory parameters. It evaluates to \`undefined\` if not passed.

### Real-World Example
A user profile interface where \`bio\` is optional. Users can register without writing a bio, and the app will not throw validation warnings.

### Best Practice
Always handle \`undefined\` checks when accessing optional properties, or provide default values for optional parameters to ensure runtime stability.

### Common Mistakes
Placing optional parameters before required parameters in a function signature, which triggers a compilation error.

### Code Example
\`\`\`typescript
// Optional Property in Interface
interface UserProfile {
  username: string;
  bio?: string; // Optional: string | undefined
}

const user1: UserProfile = { username: "rohit" }; // Valid
const user2: UserProfile = { username: "alice", bio: "Software Engineer" }; // Valid

// Optional Parameter in Function
function greetUser(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}
// Invalid: function invalidFunc(opt?: string, req: string) {} // Error
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ঐচ্ছিক প্রপার্টি (Optional Properties)**: ইন্টারফেস বা টাইপ এলিয়াসে \`propertyName?: type\` নির্দেশ করে যে অবজেক্টটি তৈরি করার সময় এই কী-টি বাদ দেওয়া যেতে পারে।
- **ঐচ্ছিক প্যারামিটার (Optional Parameters)**: ফাংশনে \`param?: type\` অবশ্যই আবশ্যিক প্যারামিটারের পরে থাকতে হবে। পাস না করা হলে এটি \`undefined\` হিসেবে কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইউজার প্রোফাইল যেখানে \`bio\` অপশনাল। ব্যবহারকারী কোনো বায়ো না লিখেও রেজিস্ট্রেশন সম্পন্ন করতে পারবে এবং সিস্টেম কোনো এরর দেবে না।

### উত্তম অনুশীলন (Best Practice)
অপশনাল প্রপার্টি অ্যাক্সেস করার সময় সবসময় \`undefined\` চেক করুন, অথবা কোড সুরক্ষিত রাখতে অপশনাল প্যারামিটারের জন্য ডিফল্ট ভ্যালু ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফাংশনে রিকোয়ার্ড প্যারামিটারের আগে অপশনাল প্যারামিটার রাখা, যা টাইপস্ক্রিপ্টে একটি কম্পাইলেশন এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইন্টারফেসে অপশনাল প্রপার্টি
interface UserProfile {
  username: string;
  bio?: string; // অপশনাল: string | undefined
}

const user1: UserProfile = { username: "rohit" }; // ভ্যালিড
const user2: UserProfile = { username: "alice", bio: "Software Engineer" }; // ভ্যালিড

// ফাংশনে অপশনাল প্যারামিটার
function greetUser(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}
// ভুল নিয়ম: function invalidFunc(opt?: string, req: string) {} // এরর দেবে
\`\`\``
  },
  {
    id: 'typescript-6',
    title: 'What are Union Types and Intersection Types?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Union', 'Intersection'],
    enAnswer: 'Union types (|) allow a variable to hold one of several types. Intersection types (&) combine multiple types into a single type.',
    bnAnswer: 'Union types (|) একটি ভ্যারিয়েবলকে একাধিক টাইপের যেকোনো একটি ধারণ করার অনুমতি দেয়। Intersection types (&) একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
- **Union Types (|)**: Read as "OR". Useful when a value can be of different representations (e.g. \`string | number\`).
- **Intersection Types (&)**: Read as "AND". Combines multiple schemas. The resulting object must satisfy all combined properties.

### Real-World Example
An API error handler accepts \`string | Error\` as its input. For DB configuration, you can combine \`BasicConfig & DatabaseCredentials\` to get a complete configuration object.

### Best Practice
Use Union Types with Literal Types to create robust state configurations. Use Intersection Types to build composite API response schemas.

### Common Mistakes
Assuming an intersection of primitive types like \`string & number\` is useful. It resolves to type \`never\` since a value cannot be both a string and a number simultaneously.

### Code Example
\`\`\`typescript
// Union Type Example
type ID = string | number;
function printId(id: ID) {
  console.log("ID is: " + id);
}

// Intersection Type Example
type Person = { name: string };
type Employee = { id: number; role: string };

type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "Rohit",
  id: 101,
  role: "Lead Developer"
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ইউনিয়ন টাইপ (|)**: এটিকে "অথবা" হিসেবে পড়া হয়। কোনো ভ্যালু যখন বিভিন্ন টাইপের হতে পারে (যেমন- \`string | number\`) তখন এটি ব্যবহৃত হয়।
- **ইন্টারসেকশন টাইপ (&)**: এটিকে "এবং" হিসেবে পড়া হয়। এটি একাধিক টাইপকে মার্জ করে। নতুন টাইপকে মার্জ করা সব টাইপের শর্ত পূরণ করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই এরর হ্যান্ডলার যা ইনপুট হিসেবে \`string | Error\` গ্রহণ করে। ডেটাবেজ কনফিগারেশনের জন্য \`BasicConfig & DatabaseCredentials\` মার্জ করে একটি সম্পূর্ণ কনফিগারেশন অবজেক্ট তৈরি করা।

### উত্তম অনুশীলন (Best Practice)
রিমোট স্টেট ম্যানেজ করতে লিটারেল টাইপকে ইউনিয়ন টাইপের সাথে যুক্ত করুন। এপিআই রেসপন্স সহজে তৈরি করতে ইন্টারসেকশন টাইপ ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
আদিম টাইপগুলোর ইন্টারসেকশন করা যেমন \`string & number\`। এটি টাইপকে \`never\` বানিয়ে ফেলে কারণ একই সাথে একটি ভ্যালু স্ট্রিং এবং নাম্বার হতে পারে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইউনিয়ন টাইপের উদাহরণ
type ID = string | number;
function printId(id: ID) {
  console.log("আইডি: " + id);
}

// ইন্টারসেকশন টাইপের উদাহরণ
type Person = { name: string };
type Employee = { id: number; role: string };

type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "Rohit",
  id: 101,
  role: "Lead Developer"
};
\`\`\``
  },
  {
    id: 'typescript-7',
    title: 'Explain Tuples in TypeScript and how they compare to Arrays.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Tuples', 'Arrays'],
    enAnswer: 'Arrays hold an arbitrary number of elements of a single type. Tuples have a fixed number of elements with predefined types at specific positions.',
    bnAnswer: 'Array একই টাইপের অনির্দিষ্ট সংখ্যক উপাদান ধারণ করে। Tuple নির্দিষ্ট সংখ্যক উপাদান ধারণ করে যার প্রতিটির পজিশন ভিত্তিক টাইপ আগে থেকেই নির্ধারিত থাকে।',
    enExplanation: `### Explanation
- **Arrays**: \`string[]\` represents a list of zero or more strings.
- **Tuples**: \`[string, number]\` represents an array with exactly two elements: the first must be a \`string\` and the second must be a \`number\`.
- **Labels**: Tuples can have labels (e.g. \`[id: string, age: number]\`) for better IDE autocompletion context.

### Real-World Example
React's \`useState\` hook returns a tuple \`[state, setState]\`. The first element is the state value, and the second is always the state updater function.

### Best Practice
Use Tuples for simple, structured data pairs (like coordinate points, key-value entries, or hook return arrays) where position determines meaning.

### Common Mistakes
Mutating tuples using methods like \`.push()\`. TypeScript cannot block runtime array mutations, which can bypass the fixed length check.

### Code Example
\`\`\`typescript
// Array declaration
let tags: string[] = ["tech", "frontend"];

// Tuple declaration
let coordinates: [number, number] = [40.7128, -74.0060]; // [latitude, longitude]

// Labeled Tuple
type UserConnection = [userId: string, isOnline: boolean];
const connection: UserConnection = ["usr-12", true];

// Warning: Push is technically allowed but breaks tuple constraints!
coordinates.push(10); // Compiles, but avoid doing this.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **অ্যারে (Arrays)**: \`string[]\` নির্দেশ করে শূন্য বা তার বেশি স্ট্রিং সম্বলিত তালিকা।
- **টিউপল (Tuples)**: \`[string, number]\` নির্দেশ করে ঠিক দুটি উপাদান সম্বলিত অ্যারে, যার প্রথমটি অবশ্যই \`string\` এবং দ্বিতীয়টি অবশ্যই \`number\` হতে হবে।
- **লেবেল**: রিডিবিলিটি বাড়াতে টিউপলের ভেতর লেবেল যুক্ত করা যায় (যেমন- \`[id: string, age: number]\`)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
রিঅ্যাক্টের \`useState\` হুক একটি টিউপল \`[state, setState]\` রিটার্ন করে। প্রথম উপাদানটি হলো স্টেট ভ্যালু এবং দ্বিতীয়টি হলো স্টেট আপডেট করার ফাংশন।

### উত্তম অনুশীলন (Best Practice)
পজিশন যেখানে ডাটার অর্থ নির্ধারণ করে (যেমন স্থানাঙ্ক জোড়া, কি-ভ্যালু জোড়া) সেখানে স্ট্রাকচার্ড ও সুরক্ষিত ডাটার জন্য টিউপল ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টিউপলে \`.push()\` মেথড ব্যবহার করে ডাটা পুশ করা। রানটাইমে এটি জাভাস্ক্রিপ্ট ব্লক করতে পারে না বলে টিউপলের নির্দিষ্ট দৈর্ঘ্যের চেকটি বাইপাস হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// অ্যারে ঘোষণা
let tags: string[] = ["tech", "frontend"];

// টিউপল ঘোষণা
let coordinates: [number, number] = [40.7128, -74.0060]; // [অক্ষাংশ, দ্রাঘিমাংশ]

// লেবেলযুক্ত টিউপল
type UserConnection = [userId: string, isOnline: boolean];
const connection: UserConnection = ["usr-12", true];

// সতর্কতা: Push মেথড কম্পাইল হবে কিন্তু টিউপলের সীমাবদ্ধতা নষ্ট করে!
coordinates.push(10); // এড়ানো উচিত
\`\`\``
  },
  {
    id: 'typescript-8',
    title: 'What are Enums and how do they differ from const enums?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Enums', 'ConstEnums'],
    enAnswer: 'Enums generate a JavaScript object at runtime. const enums are completely erased during compilation, inlining their literal values directly.',
    bnAnswer: 'Enum রানটাইমে একটি জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করে। const enum কম্পাইলেশনের সময় সম্পূর্ণ মুছে যায় এবং এদের মানগুলো কোডে সরাসরি বসে যায় (inline)।',
    enExplanation: `### Explanation
- **Numeric Enums**: Assign numbers sequentially starting from 0 unless customized. Supports reverse mapping (reading name from number).
- **const enums**: Do not produce any runtime JavaScript objects. This reduces bundle size. However, they do not support runtime lookups or reverse mapping.

### Real-World Example
Using enums to represent API response statuses. If bundle size is a critical performance metric, replacing standard \`enum\` with \`const enum\` prevents generating duplicate runtime configurations.

### Best Practice
For modern React web applications, prefer \`const enum\` or read-only objects (\`const Status = { ... } as const\`) to keep compiled assets lightweight.

### Common Mistakes
Assuming standard enums are tree-shaken by build tools. They are compiled into IIFE blocks which bundle tools cannot safely strip, wasting bytes.

### Code Example
\`\`\`typescript
// Standard Enum (Generates an IIFE object in JS)
enum Direction {
  Up = 1,
  Down,
}
let dir = Direction.Up;

// const Enum (Inlined at compile-time - zero runtime JS code)
const enum Role {
  Admin,
  User,
}
let myRole = Role.Admin; // Compiled directly to: let myRole = 0;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **নিউমেরিক এনাম**: কাস্টমাইজ না করলে ০ থেকে ক্রমান্বয়ে সংখ্যা তৈরি করে। রিভার্স ম্যাপিং সাপোর্ট করে (সংখ্যা থেকে নাম বের করা)।
- **const enums**: রানটাইমে কোনো জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করে না। এটি বান্ডেল সাইজ কমাতে সাহায্য করে। তবে এগুলো রানটাইম লুকআপ বা রিভার্স ম্যাপিং সাপোর্ট করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
এপিআই রেসপন্স স্ট্যাটাস কোড হ্যান্ডেল করার জন্য এনাম ব্যবহার করা। বান্ডেল সাইজ কমাতে স্ট্যান্ডার্ড \`enum\` এর বদলে \`const enum\` ব্যবহার করলে বাড়তি কোনো ফালতু অবজেক্ট কোডে এড হয় না।

### উত্তম অনুশীলন (Best Practice)
আধুনিক রিঅ্যাক্ট অ্যাপ্লিকেশনে কোড হালকা রাখতে \`const enum\` অথবা রিড-অনলি অবজেক্ট (\`const Status = { ... } as const\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে স্ট্যান্ডার্ড এনামগুলোকে বান্ডেলার ঝেড়ে ফেলে দেবে (tree-shake)। এগুলো IIFE ব্লকে কম্পাইল হওয়ায় বান্ডেলার এগুলো নিরাপদ মনে করে না বলে ফেলে দিতে পারে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// স্ট্যান্ডার্ড এনাম (জাভাস্ক্রিপ্টে IIFE অবজেক্ট তৈরি করবে)
enum Direction {
  Up = 1,
  Down,
}
let dir = Direction.Up;

// const এনাম (কম্পাইল-টাইমে ইনলাইন হবে - রানটাইমে কোনো বাড়তি কোড নেই)
const enum Role {
  Admin,
  User,
}
let myRole = Role.Admin; // সরাসরি কম্পাইল হবে এভাবে: let myRole = 0;
\`\`\``
  },
  {
    id: 'typescript-9',
    title: 'Explain Literal Types and Type narrowing basics in TypeScript.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'LiteralTypes', 'TypeNarrowing'],
    enAnswer: 'Literal Types represent exact values instead of generic primitives. Type narrowing is refining a broad type to a more specific type using runtime conditional checks.',
    bnAnswer: 'Literal Types সাধারণ প্রিমিটিভ টাইপের বদলে একদম নির্দিষ্ট মান নির্দেশ করে। Type narrowing হলো রানটাইম কন্ডিশন চেক করে কোনো ব্রড টাইপকে সুনির্দিষ্ট টাইপে নামিয়ে আনা।',
    enExplanation: `### Explanation
- **Literal Types**: E.g., \`let state: "success"\`. The value can *only* be the string \`"success"\`, not any other string.
- **Type Narrowing**: Refines types inside control flow paths. Common operators:
  - \`typeof\`: Refines primitives.
  - \`equality (===)\`: Compares literal structures.

### Real-World Example
Representing UI themes. Instead of allowing any string, typing it as \`'light' | 'dark'\` limits input options, and checking its value lets TypeScript verify theme-specific methods.

### Best Practice
Combine Literal types with Union types to define safe constants. Use type guards to ensure variables are fully checked before executing operations.

### Common Mistakes
Not handling the \`else\` branch of narrowed unions, which could leak unchecked cases if the union types are expanded in the future.

### Code Example
\`\`\`typescript
// String Literal Type
type Alignment = "left" | "right" | "center";

function setAlign(align: Alignment) {
  // Only allows exact string matches
}

// Type Narrowing
function processData(val: string | number) {
  if (typeof val === "string") {
    // TypeScript knows 'val' is string inside this block
    return val.toUpperCase(); 
  }
  // TypeScript knows 'val' is number here
  return val.toFixed(2);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **লিটারেল টাইপ**: উদাহরণস্বরূপ, \`let state: "success"\`। এখানে মানটি কেবল মাত্র \`"success"\` স্ট্রিংটিই হতে পারবে, অন্য কিছু নয়।
- **টাইপ ন্যারোইং (Type Narrowing)**: কোডের ফ্লো চেকের ভেতর টাইপকে আরও সুনির্দিষ্ট করে। প্রচলিত অপারেটরসমূহ:
  - \`typeof\`: বেসিক প্রিমিটিভ টাইপ ফিল্টার করে।
  - \`equality (===)\`: নির্দিষ্ট মান ম্যাচ করায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউআই থিম ম্যানেজমেন্ট। যেকোনো স্ট্রিং পাস করার সুযোগ না দিয়ে টাইপকে \`'light' | 'dark'\` এ সীমাবদ্ধ করা এবং রানটাইমে তা চেক করে নির্দিষ্ট থিম লোড করা।

### উত্তম অনুশীলন (Best Practice)
নিরাপদ কনস্ট্যান্ট তৈরি করতে লিটারেল টাইপকে ইউনিয়ন টাইপের সাথে যুক্ত করুন। ভ্যারিয়েবল অপারেশন চালানোর আগে টাইপ গার্ড দিয়ে নিশ্চিত হয়ে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ন্যারো করা ইউনিয়নের \`else\` ব্রাঞ্চটি হ্যান্ডেল না করা, যার ফলে ভবিষ্যতে ইউনিয়নে নতুন টাইপ যোগ করা হলে এরর হ্যান্ডেল না হয়ে বাগ তৈরি হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// স্ট্রিং লিটারেল টাইপ
type Alignment = "left" | "right" | "center";

function setAlign(align: Alignment) {
  // কেবল মাত্র নির্ধারিত তিনটি মানই সাপোর্ট করবে
}

// টাইপ ন্যারোইং
function processData(val: string | number) {
  if (typeof val === "string") {
    // রিঅ্যাক্ট নিশ্চিত যে এই ব্লকের ভেতরে 'val' একটি স্ট্রিং
    return val.toUpperCase(); 
  }
  // এখানে এসে 'val' একটি নাম্বার
  return val.toFixed(2);
}
\`\`\``
  },
  {
    id: 'typescript-10',
    title: 'What is Type Assertion (casting) and how does it differ from type conversion?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'TypeAssertion', 'TypeCasting'],
    enAnswer: 'Type Assertion (as keyword) tells the compiler to treat a value as a specific type without runtime changes. Type conversion actually modifies runtime data values.',
    bnAnswer: 'Type Assertion (as কীওয়ার্ড) কম্পাইলারকে কোনো রানটাইম পরিবর্তন ছাড়াই ভ্যালুটিকে নির্দিষ্ট টাইপ হিসেবে পড়তে বলে। Type conversion রানটাইমে সরাসরি ডেটা পরিবর্তন করে।',
    enExplanation: `### Explanation
- **Type Assertion**: It is purely a compile-time instruction. You tell TypeScript: "Trust me, I know the type better than you." Syntax: \`value as TargetType\` or \`<TargetType>value\`.
- **Type Conversion**: Changing the representation of data at runtime (e.g., converting a number to a string using \`Number(val)\` or \`val.toString()\`).

### Real-World Example
Reading elements from the DOM. \`document.getElementById("main-canvas")\` returns \`HTMLElement\`. If you know it is a canvas element, use \`as HTMLCanvasElement\` to unlock canvas-specific context APIs.

### Best Practice
Use assertions selectively. Overusing assertions bypasses compiler checks and can lead to runtime crashes if the assertion lies about the data shape.

### Common Mistakes
Using type assertion as a way to convert types, e.g. \`const num = "5" as number;\`. This does not convert the string to a number at runtime; it remains a string and will cause bugs.

### Code Example
\`\`\`typescript
// Type Assertion (Tells compiler this HTMLElement is a Canvas)
const myCanvas = document.getElementById("canvas-id") as HTMLCanvasElement;
// myCanvas.getContext("2d"); // Now accessible!

// Type Conversion (Modifies the value at runtime)
const inputString = "123";
const numericVal = Number(inputString); // runtime conversion to number
const assertedVal = inputString as any as number; // Unsafe, stays "123" at runtime
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **টাইপ অ্যাসারশন (Type Assertion)**: এটি পুরোপুরি কম্পাইল-টাইম নির্দেশনা। আপনি টাইপস্ক্রিপ্টকে বলেন: "আমার ওপর বিশ্বাস রাখো, আমি টাইপটি সম্পর্কে নিশ্চিত।" সিনট্যাক্স: \\\`value as TargetType\\\`।
- **টাইপ কনভার্সন (Type Conversion)**: রানটাইমে ডাটার মান বা ফরম্যাট পরিবর্তন করা (যেমন- \\\`Number(val)\\\` দিয়ে স্ট্রিং থেকে নাম্বারে কনভার্ট করা)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডম (DOM) থেকে নোড রিড করা। \\\`document.getElementById("canvas-id")\\\` কেবল \\\`HTMLElement\\\` রিটার্ন করে। আপনি যদি জানেন এটি ক্যানভাস নোড, তবে \\\`as HTMLCanvasElement\\\` দিয়ে ক্যানভাস স্পেসিফিক এপিআই অ্যাক্টিভ করে নিতে পারেন।

### উত্তম অনুশীলন (Best Practice)
টাইপ অ্যাসারশন খুব সাবধানে ব্যবহার করুন। অতিরিক্ত ব্যবহার কম্পাইলার সেফটি বাইপাস করে এবং যদি ডিক্লেয়ার করা টাইপ বাস্তব ডাটার সাথে না মিলে তবে রানটাইম এরর ঘটায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ কনভার্ট করার উদ্দেশ্য নিয়ে অ্যাসারশন করা, যেমন- \\\`const num = "5" as number;\\\`। এটি রানটাইমে স্ট্রিংকে নাম্বারে রূপান্তর করে না; এটি কেবল ভুল টাইপ এন্ট্রি তৈরি করে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// টাইপ অ্যাসারশন (কম্পাইলারকে সুনির্দিষ্ট নোড টাইপ বলা হচ্ছে)
const myCanvas = document.getElementById("canvas-id") as HTMLCanvasElement;
// myCanvas.getContext("2d"); // এখন অ্যাক্সেসযোগ্য!

// টাইপ কনভার্সন (রানটাইমে ডাটা ভ্যালু চেঞ্জ হবে)
const inputString = "123";
const numericVal = Number(inputString); // রানটাইমে নাম্বারে পরিণত হলো
const assertedVal = inputString as any as number; // অনিরাপদ, এটি রানটাইমে "123" স্ট্রিংই থাকবে
\`\`\``
  },
  {
    id: 'typescript-11',
    title: 'How do Nullish Coalescing (??) and Optional Chaining (?.) interact with TypeScript types?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'NullishCoalescing', 'OptionalChaining'],
    enAnswer: 'Optional chaining (?.) returns undefined if an intermediate property is null/undefined. Nullish coalescing (??) falls back to a default value only for null and undefined.',
    bnAnswer: 'Optional chaining (?.) কোনো প্রপার্টি null/undefined হলে সাথে সাথে undefined রিটার্ন করে। Nullish coalescing (??) কেবল null ও undefined এর জন্য ফলব্যাক ভ্যালু অ্যাসাইন করে।',
    enExplanation: `### Explanation
- **Optional Chaining (?.)**: Safe navigation. TypeScript automatically updates the return type to include \`| undefined\`.
- **Nullish Coalescing (??)**: Unlike OR (\`||\`), which triggers for all falsy values (like \`""\` or \`0\`), \`??\` only triggers if the value is strictly \`null\` or \`undefined\`. TypeScript narrows out the nullish types from the resulting assignment.

### Real-World Example
Handling user config settings. A settings page can define \`timeout: 0\` as a valid custom value. \`timeout || 30\` would wrongly overwrite \`0\` with \`30\`. \`timeout ?? 30\` correctly preserves \`0\`.

### Best Practice
Use \`?.\` to safely access deep APIs. Pair it with \`??\` to establish secure default parameters without accidentally overwriting valid empty values.

### Common Mistakes
Using \`||\` when checking numeric properties or active boolean states, which ignores \`0\` and \`false\` values as if they were null.

### Code Example
\`\`\`typescript
interface UserSettings {
  theme: string;
  notifications?: {
    email: boolean;
  };
}

const user: UserSettings = { theme: "dark" };

// Optional Chaining: returns boolean | undefined
const emailAlerts = user.notifications?.email; 

// Nullish Coalescing: filters out undefined, yields true
const emailAlertsSafe: boolean = user.notifications?.email ?? true;

// Comparison with || operator
const volume = 0;
const vol1 = volume || 50; // returns 50 (incorrect, 0 is falsy)
const vol2 = volume ?? 50; // returns 0 (correct, 0 is not nullish)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **অপশনাল চেইনিং (?.)**: নিরাপদ প্রপার্টি অ্যাক্সেস পদ্ধতি। টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে টাইপকে \`| undefined\` দিয়ে সুরক্ষিত করে।
- **নালিশ কোয়ালিসিং (??)**: জাভাস্ক্রিপ্টের লজিক্যাল অর (\`||\`) ফালসি (falsy) ভ্যালু যেমন \`""\` বা \`0\` দেখলেই ট্রিগার করে। কিন্তু \`??\` কেবল মাত্র \`null\` এবং \`undefined\` হলে ফলব্যাক ভ্যালু সেট করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার সেটিংস কনফিগার করা। ব্যবহারকারী ভলিউম \`0\` সেট করতে পারে। \`volume || 50\` লিখলে তা জিরোকে ফালসি মনে করে ৫০ করে দিবে। কিন্তু \`volume ?? 50\` সঠিক উপায়ে জিরোকেই ইনপুট হিসেবে রাখবে।

### উত্তম অনুশীলন (Best Practice)
জটিল এপিআই নেভিগেশনের জন্য \`?.\` ব্যবহার করুন এবং ভ্যালিড শূন্য মান ধরে রাখতে ফলব্যাক হিসেবে \`??\` প্রয়োগ করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যাক্টিভ বুলিয়ান স্ট্যাটাস বা সংখ্যার ক্ষেত্রে \`||\` ব্যবহার করা, যা ভুল করে \`false\` এবং \`0\` কে ওভাররাইট করে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface UserSettings {
  theme: string;
  notifications?: {
    email: boolean;
  };
}

const user: UserSettings = { theme: "dark" };

// অপশনাল চেইনিং: boolean | undefined রিটার্ন করবে
const emailAlerts = user.notifications?.email; 

// নালিশ কোয়ালিসিং: undefined বাদ দিয়ে true সেট করবে
const emailAlertsSafe: boolean = user.notifications?.email ?? true;

// || অপারেটরের সাথে তুলনা
const volume = 0;
const vol1 = volume || 50; // ৫০ রিটার্ন করবে (ভুল, কারণ ০ ফালসি)
const vol2 = volume ?? 50; // ০ রিটার্ন করবে (সঠিক, কারণ ০ নালিশ নয়)
\`\`\``
  },
  {
    id: 'typescript-12',
    title: 'What are Function Overloads and when should you use them?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'FunctionOverloads', 'Functions'],
    enAnswer: 'Function Overloads define multiple call signatures for a single function. They allow typing functions that return different structures based on different argument signatures.',
    bnAnswer: 'Function Overload একটি ফাংশনের একাধিক কল সিগনেচার ডিফাইন করে। এর মাধ্যমে আর্গুমেন্টের ওপর ভিত্তি করে ফাংশনের বিভিন্ন রিটার্ন টাইপ নির্ধারণ করা যায়।',
    enExplanation: `### Explanation
- **Signatures**: You write one or more overload signatures (without implementation body).
- **Implementation**: You write exactly one implementation signature that is compatible with all overloads.
- **Goal**: Helps TypeScript infer the exact output type based on the specific argument shapes passed.

### Real-World Example
A database search function. If you pass a numeric \`id\`, it returns a single \`User\`. If you pass a search string, it returns an array of \`User[]\`.

### Best Practice
Keep overload signatures clear and simple. If you can write a union type directly for arguments and returns cleanly, prefer union signatures to prevent verbose code.

### Common Mistakes
Forgetting that the implementation signature is invisible to callers. Callers can only trigger signatures that match the overload declarations.

### Code Example
\`\`\`typescript
// Overload Signatures
function getInfo(id: number): string;
function getInfo(name: string): string[];

// Implementation Signature (Compatible with both)
function getInfo(value: string | number): string | string[] {
  if (typeof value === "number") {
    return \`User ID: \${value}\`;
  }
  return ["Matches for " + value];
}

// Correct usages resolved by compiler
const info1 = getInfo(101); // Inferred type is string
const info2 = getInfo("Rohit"); // Inferred type is string[]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **সিগনেচার**: আপনি ইমপ্লিমেন্টেশন বডি ছাড়া এক বা একাধিক ওভারলোড সিগনেচার লিখবেন।
- **ইমপ্লিমেন্টেশন**: সব ওভারলোডের সাথে সামঞ্জস্যপূর্ণ একটিমাত্র মূল ইমপ্লিমেন্টেশন সিগনেচার লিখবেন।
- **উদ্দেশ্য**: আর্গুমেন্টের ধরনের ওপর ভিত্তি করে রিটার্ন টাইপ কেমন হবে তা টাইপস্ক্রিপ্টকে স্পষ্টভাবে বোঝানো।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ সার্চ ফাংশন। যদি আপনি একটি আইডি (\`number\`) পাঠান তবে এটি একটি অবজেক্ট ফেরত দেবে। কিন্তু যদি টেক্সট কি-ওয়ার্ড (\`string\`) পাঠান তবে এটি অবজেক্টের একটি অ্যারে ফেরত দেবে।

### উত্তম অনুশীলন (Best Practice)
ওভারলোড সিগনেচার সংক্ষিপ্ত রাখুন। যদি ইউনিয়ন টাইপ দিয়ে সহজভাবে কাজ মিটে যায়, তবে ওভারলোডের বদলে সরাসরি ইউনিয়ন ব্যবহার করা কোড ক্লিন রাখে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে ইমপ্লিমেন্টেশন সিগনেচারটি কিন্তু কল করার সময় সরাসরি দেখা যায় না। ব্যবহারকারী কেবল ওভারলোড সিগনেচারের তালিকায় থাকা রুলসগুলোই ট্রিগার করতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ওভারলোড সিগনেচারসমূহ
function getInfo(id: number): string;
function getInfo(name: string): string[];

// মূল ইমপ্লিমেন্টেশন সিগনেচার
function getInfo(value: string | number): string | string[] {
  if (typeof value === "number") {
    return \`\${value}\`;
  }
  return ["Matches for " + value];
}

// কম্পাইলার দ্বারা টাইপ ম্যাচিং
const info1 = getInfo(101); // টাইপ হবে string
const info2 = getInfo("Rohit"); // টাইপ হবে string[]
\`\`\``
  },
  {
    id: 'typescript-13',
    title: 'What are readonly properties and Readonly arrays in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Readonly', 'Immutability'],
    enAnswer: 'readonly prevents properties from being reassigned after initialization. ReadonlyArray prevents array modifications like pushing, popping, or element reassignments.',
    bnAnswer: 'readonly প্রপার্টি ইনিশিয়ালাইজ করার পর তার মান পরিবর্তন করা রোধ করে। ReadonlyArray অ্যারের পরিবর্তন যেমন পুশ, পপ বা কোনো উপাদানের অ্যাসাইনমেন্ট ব্লক করে।',
    enExplanation: `### Explanation
- **readonly Properties**: E.g., \`readonly name: string\`. It is compile-time protection; properties cannot be modified once set.
- **ReadonlyArray<T>** (or \`readonly T[]\`): Erases mutating methods like \`.push()\`, \`.shift()\`, or \`.splice()\`. It ensures array data remains immutable.

### Real-World Example
An API response configuration object. Setting its keys as \`readonly\` prevents developer code from accidentally mutating headers or keys during page lifecycles.

### Best Practice
Utilize \`readonly\` to enforce immutable state management architectures (like Redux or Zustand data flows).

### Common Mistakes
Thinking \`readonly\` is safe at runtime. It is only verified by the TypeScript compiler; compiled JavaScript does not prevent object modifications unless you run \`Object.freeze()\`.

### Code Example
\`\`\`typescript
interface Config {
  readonly apiKey: string;
}

const config: Config = { apiKey: "key-129" };
// config.apiKey = "key-22"; // Compiler Error: Cannot assign to 'apiKey' because it is a read-only property.

// Readonly Array
const nums: readonly number[] = [1, 2, 3];
// nums.push(4); // Compiler Error: Property 'push' does not exist on type 'readonly number[]'.
// nums[0] = 10; // Compiler Error: Index signature in type 'readonly number[]' only permits reading.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **readonly প্রপার্টি**: এটি কম্পাইল-টাইম সুরক্ষা; অবজেক্ট ইনিশিয়ালাইজ করার পর এর ভেতরের কী-গুলোর মান পরিবর্তন করা সম্ভব হয় না।
- **ReadonlyArray<T>** (অথবা \`readonly T[]\`): এটি অ্যারের পরিবর্তনকারী মেথড যেমন \`.push()\`, \`.shift()\` বা \`.splice()\` কে টাইপ থেকে রিমুভ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই রেসপন্স কনফিগারেশন অবজেক্ট। এর কী-গুলোকে \`readonly\` সেট করে দিলে অ্যাপ্লিকেশনের অন্য কোড ভুলবশত লাইফসাইকেলের মাঝে এপিআই কী চেঞ্জ করতে পারবে না।

### উত্তম অনুশীলন (Best Practice)
ইমিউটেবল স্টেট ম্যানেজমেন্ট (যেমন Redux বা Zustand ফ্লো) ডিজাইন করতে এবং অবাঞ্ছিত ডাটা মিউটেশন এড়াতে \`readonly\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`readonly\` রানটাইমেও অবজেক্টের মান লক রাখে। এটি কেবল কম্পাইল-টাইমে চেক হয়; রানটাইমে অবজেক্ট সুরক্ষিত করতে \`Object.freeze()\` করতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Config {
  readonly apiKey: string;
}

const config: Config = { apiKey: "key-129" };
// config.apiKey = "key-22"; // কম্পাইলার এরর: Cannot assign to 'apiKey' because it is a read-only property.

// রিড-অনলি অ্যারে
const nums: readonly number[] = [1, 2, 3];
// nums.push(4); // কম্পাইলার এরর: Property 'push' does not exist on type 'readonly number[]'.
// nums[0] = 10; // কম্পাইলার এরর: Index signature in type 'readonly number[]' only permits reading.
\`\`\``
  },
  {
    id: 'typescript-14',
    title: 'Explain Structural Typing (Compatibility) in TypeScript.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'StructuralTyping', 'TypeCompatibility'],
    enAnswer: 'Structural typing checks type compatibility based on the shape and structure of properties, rather than explicit names or declarations (nominal typing).',
    bnAnswer: 'Structural typing স্পষ্টভাবে ঘোষিত নাম বা ডিক্লারেশনের (nominal typing) বদলে প্রপার্টিজের আকার বা কাঠামোর (shape) ওপর ভিত্তি করে টাইপ ম্যাচ করে।',
    enExplanation: `### Explanation
In nominal languages (like Java or C#), a class cannot satisfy an interface unless it explicitly implements it. 
In structural languages (like TypeScript), if an object has the same shape (same keys with compatible types), it is automatically compatible.
- **Rule**: If \`A\` has all properties of \`B\`, then \`A\` can be assigned to \`B\`.

### Real-World Example
An coordinates checker function expects \`{ x: number, y: number }\`. Passing a heavy \`Point3D\` object \`{ x: 10, y: 20, z: 30 }\` is allowed because the function only checks for \`x\` and \`y\`.

### Best Practice
Understand this compatibility model when writing reusable components. It makes mocking data for tests extremely easy since you don't need to implement entire parent classes.

### Common Mistakes
Confusing structural checks with literal checking. TypeScript allows excess properties on variables, but directly passing an object literal with extra fields to a function triggers an "Excess Property Check" warning.

### Code Example
\`\`\`typescript
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(\`x: \${p.x}, y: \${p.y}\`);
}

const point3D = { x: 5, y: 10, z: 15 };
printPoint(point3D); // Valid! Structure matches (it contains both x and y).

// Warning: Direct literal excess check triggers error
// printPoint({ x: 5, y: 10, z: 15 }); // Error: Object literal may only specify known properties.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভা বা সি#-এর মতো ভাষায় (Nominal languages) কোনো ক্লাস কোনো ইন্টারফেসকে ইমপ্লিমেন্ট না করলে সেটি ওই টাইপ হিসেবে গণ্য হয় না।
টাইপস্ক্রিপ্টে (Structural language), যদি একটি অবজেক্টের কাঠামো বা শেপ অন্য টাইপের সমান হয়, তবে তারা একে অপরের সাথে সামঞ্জস্যপূর্ণ হয়ে যায়।
- **নিয়ম**: যদি \`A\` অবজেক্টে \`B\` এর সমস্ত প্রপার্টি থাকে, তবে \`A\` কে \`B\` এর জায়গায় ব্যবহার করা যাবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লজিক কেবল \`{ x: number, y: number }\` এক্সপেক্ট করে। সেখানে \`Point3D\` অবজেক্ট \`{ x: 10, y: 20, z: 30 }\` দিলে এটি কাজ করবে, কারণ ফাংশনটি কেবল \`x\` এবং \`y\` খুঁজছে।

### উত্তম অনুশীলন (Best Practice)
টেস্ট করার জন্য মক ডাটা তৈরি করার সময় এই কাঠামোগত সামঞ্জস্যতা ব্যবহার করুন, এতে পুরো ক্লাস বা মডেল নতুন করে লিখতে হয় না।

### সাধারণ ভুলসমূহ (Common Mistakes)
লিটারেল অবজেক্ট সরাসরি আর্গুমেন্ট হিসেবে দেওয়ার সময় টাইপস্ক্রিপ্টের "Excess Property Check" সম্পর্কে সচেতন না থাকা, যা বাড়তি ফিল্ড থাকলে এরর ছুড়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(\`x: \${p.x}, y: \${p.y}\`);
}

const point3D = { x: 5, y: 10, z: 15 };
printPoint(point3D); // ভ্যালিড! কারণ কাঠামো মিলেছে (x এবং y আছে)।

// সতর্কতা: সরাসরি লিটারেল পাস করলে Excess Property চেক এরর দেবে
// printPoint({ x: 5, y: 10, z: 15 }); // এরর দেবে
\`\`\``
  },
  {
    id: 'typescript-15',
    title: 'What is the difference between Namespaces and Modules in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Namespaces', 'Modules'],
    enAnswer: 'Modules utilize modern ES6 import/export files to organize code scoping. Namespaces are a legacy, global custom grouping syntax.',
    bnAnswer: 'Modules কোড স্কোপ করতে আধুনিক ES6 import/export ফাইল ব্যবহার করে। Namespace হলো একটি পুরোনো, গ্লোবাল কাস্টম গ্রুপিং সিনট্যাক্স।',
    enExplanation: `### Explanation
- **Modules (Recommended)**: Files that contain imports/exports. They are standard in modern ECMAScript. Scoped to the file.
- **Namespaces (Legacy)**: E.g., \`namespace MyUtility { ... }\`. Historically used to bundle multiple variables inside a global scope under one name. Obsolete in modern tooling.

### Real-World Example
All modern frameworks (Vite, Next.js, Node.js) utilize standard JavaScript modules. Namespaces are only found in older legacy codebases from before JavaScript had module systems.

### Best Practice
Always use standard ES6 modules (\`import\`/\`export\`) for code organization. Do not use namespaces for modern frontend or backend projects.

### Common Mistakes
Using \`namespace\` in new React or Node projects, which complicates bundling, prevents tree shaking, and triggers warnings from bundlers.

### Code Example
\`\`\`typescript
// Modern ESM Module (exporting code in module.ts)
// export function calculate(val: number) { return val * 2; }
// import { calculate } from './module';

// Legacy Namespace (global grouping, avoid in modern projects)
namespace Utility {
  export function runTask() {
    console.log("Running task...");
  }
}
Utility.runTask(); // Global access
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **মডিউল (Modules - রেকমেন্ডেড)**: ইম্পোর্ট/এক্সপোর্ট ধারণকারী ফাইল। এটি আধুনিক ইসিএমএস্ক্রিপ্টের (ES6) স্ট্যান্ডার্ড এবং ফাইলের স্কোপে সীমাবদ্ধ।
- **নেমস্পেস (Namespaces - পুরোনো)**: \`namespace MyUtility {}\`। পূর্বে গ্লোবাল স্কোপে কোড অর্গানাইজ করতে ব্যবহৃত হতো। আধুনিক প্রজেক্টে এর প্রয়োজন নেই।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
আধুনিক সমস্ত ফ্রেমওয়ার্ক (Vite, Next.js) স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট মডিউল ব্যবহার করে। পুরোনো টাইপস্ক্রিপ্ট লাইব্রেরি ছাড়া নেমস্পেস সাধারণত আর দেখা যায় না।

### উত্তম অনুশীলন (Best Practice)
কোড অর্গানাইজেশনের জন্য সবসময় স্ট্যান্ডার্ড ES6 মডিউল (\`import\`/\`export\`) ব্যবহার করুন। কড়া নির্দেশ: নতুন প্রজেক্টে নেমস্পেস এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
নতুন প্রজেক্টে \`namespace\` ব্যবহার করা, যা বিল্ড করতে বান্ডেলারকে বিভ্রান্ত করতে পারে এবং ট্রি-শেকিং করার সুবিধা নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// আধুনিক মডিউল (module.ts ফাইলে এক্সপোর্ট)
// export function calculate(val: number) { return val * 2; }
// import { calculate } from './module';

// লেগ্যাসি নেমস্পেস (গ্লোবাল গ্রুপিং, এড়ানো উচিত)
namespace Utility {
  export function runTask() {
    console.log("কাজ রান হচ্ছে...");
  }
}
Utility.runTask(); // গ্লোবাল অ্যাক্সেস
\`\`\``
  },
  {
    id: 'typescript-16',
    title: 'What are Ambient Declarations and d.ts files in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'AmbientDeclarations', 'd.ts'],
    enAnswer: 'Ambient Declarations define the shape of variables or libraries without compiling into JavaScript code, storing definitions inside .d.ts files.',
    bnAnswer: 'Ambient Declarations জাভাস্ক্রিপ্ট কোড তৈরি না করেই লাইব্রেরি বা ভ্যারিয়েবলের শেপ বর্ণনা করে এবং এই ডেফিনিশনগুলো .d.ts ফাইলে সেভ করে।',
    enExplanation: `### Explanation
- **declare keyword**: Tells TypeScript that a variable or module exists externally (e.g. injected by a script tag or global scope) and will be present at runtime.
- **d.ts files**: Declaration files containing type information only. They are completely stripped during compilation and do not generate any \`.js\` output.

### Real-World Example
Typing a global analytics API loaded from a CDN script (like \`window.analytics\`). By writing \`declare var analytics: any;\`, you prevent compile errors when calling \`analytics.track()\` in your code.

### Best Practice
Use \`.d.ts\` files to type legacy vanilla JavaScript files in your codebase or to declare global window variables safely.

### Common Mistakes
Writing implementation logic (like writing actual functions or initializing variables) inside a \`.d.ts\` declaration file. Only type signatures are allowed.

### Code Example
\`\`\`typescript
// global.d.ts file
// Tells TypeScript that 'analytics' exists globally on window
declare namespace analytics {
  function logEvent(name: string): void;
}

// App.ts
// Compiles correctly without warnings
analytics.logEvent("user_signed_up"); 
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **declare কীওয়ার্ড**: টাইপস্ক্রিপ্টকে বোঝায় যে একটি ভ্যারিয়েবল বা মডিউল বাইরে থেকে (যেমন CDN স্ক্রিপ্ট দ্বারা) ডমে ইনজেক্ট করা হয়েছে এবং রানটাইমে থাকবে।
- **d.ts ফাইল**: কেবল টাইপ ইনফরমেশন ধারণকারী ফাইল। এগুলো বিল্ডের সময় মুছে যায় এবং কোনো জাভাস্ক্রিপ্ট কোড তৈরি করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি গ্লোবাল অ্যানালিটিক্স স্ক্রিপ্ট যা ডিক্লেয়ার ছাড়া উইন্ডোতে পাওয়া যায়। \`declare var analytics: any;\` লিখে আমরা কম্পাইল এরর আটকাই এবং সরাসরি ফাংশন কল করতে পারি।

### উত্তম অনুশীলন (Best Practice)
উইন্ডো গ্লোবাল ভ্যারিয়েবল এবং লিগ্যাসি জাভাস্ক্রিপ্ট ফাইলের জন্য কাস্টম টাইপ সাপোর্ট দিতে \`.d.ts\` ফাইলের ব্যবহার চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ ডেফিনিশন ফাইলের (\`.d.ts\`) ভেতরে ইমপ্লিমেন্টেশন লজিক বা ভ্যালু অ্যাসাইন করার চেষ্টা করা, যা কম্পাইলার এরর তৈরি করতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// global.d.ts ফাইল
// টাইপস্ক্রিপ্টকে বলা হচ্ছে 'analytics' গ্লোবাল ডমে আছে
declare namespace analytics {
  function logEvent(name: string): void;
}

// App.ts (ফাইল)
// কোনো এরর ছাড়াই কম্পাইল হবে
analytics.logEvent("user_signed_up"); 
\`\`\``
  },
  {
    id: 'typescript-17',
    title: 'Explain the role of tsconfig.json and its core configuration options.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig', 'CompilerOptionsConfig'],
    enAnswer: 'tsconfig.json specifies the root files and compiler settings needed to compile the project, defining code targets and syntax checking policies.',
    bnAnswer: 'tsconfig.json প্রজেক্টের রুট ফাইল এবং কম্পাইলার সেটিংস নির্ধারণ করে, যার ওপর ভিত্তি করে কোড কম্পাইল এবং সিনট্যাক্স চেকিং পলিসিগুলো পরিচালিত হয়।',
    enExplanation: `### Explanation
The \`tsconfig.json\` acts as the configuration hub for the TypeScript compiler (\`tsc\`). Key sections:
- \`compilerOptions\`: Configures compilation behaviors.
  - \`target\`: Output JavaScript version (e.g. \`es2022\`).
  - \`module\`: Module generation standard (e.g. \`esnext\`, \`commonjs\`).
  - \`outDir\`: Target folder for compiled JS files.
- \`include\`: Paths to include for type checking.
- \`exclude\`: Paths to ignore (e.g. \`node_modules\`).

### Real-World Example
If your server runs on a legacy Node.js version, you can change \`target\` inside \`tsconfig.json\` to \`es2018\` to automatically down-compile ES6 syntax into safe legacy code.

### Best Practice
Utilize standard tsconfig base templates recommended for Vite or Next.js to ensure bundling tools and compilers are in sync.

### Common Mistakes
Including \`node_modules\` in the compile scope, which slows down compilation times dramatically by scanning third-party dependencies.

### Code Example
\`\`\`json
// Sample config of tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\\\`tsconfig.json\\\` টাইপস্ক্রিপ্ট কম্পাইলারের (\\\`tsc\\\`) প্রধান কনফিগারেশন হাব হিসেবে কাজ করে। এর প্রধান সেকশনগুলো:
- \\\`compilerOptions\\\`: কম্পাইলেশনের আচরণ কেমন হবে তা নিয়ন্ত্রণ করে।
  - \\\`target\\\`: আউটপুট জাভাস্ক্রিপ্ট সংস্করণ (যেমন- \\\`es2022\\\`)।
  - \\\`module\\\`: মডিউল জেনারেশন স্ট্যান্ডার্ড (যেমন- \\\`esnext\\\`, \\\`commonjs\\\`)।
  - \\\`outDir\\\`: কম্পাইল হওয়া জাভাস্ক্রিপ্ট ফাইল জমার ফোল্ডার।
- \\\`include\\\`: কোন ফোল্ডারের ফাইলগুলো চেক করা হবে।
- \\\`exclude\\\`: কোন ফাইল বা ফোল্ডারগুলো ইগনোর করা হবে (যেমন- \\\`node_modules\\\`)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
আপনার রানটাইম যদি মডার্ন জাভাস্ক্রিপ্ট সাপোর্ট না করে, তবে \\\`target\\\` কে \\\`es5\\\` বা \\\`es2018\\\` এ সেট করে কোড ডাউন-কম্পাইল করিয়ে নিতে পারেন।

### উত্তম অনুশীলন (Best Practice)
Vite বা Next.js এর জন্য রিলিজ হওয়া ডিফল্ট টেমপ্লেট কনফিগারেশন ব্যবহার করুন যাতে কম্পাইলার ও বান্ডেলার সিনক্রোনাইজড থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলবশত কম্পাইল স্কোপে \\\`node_modules\\\` অন্তর্ভুক্ত করা, যা পুরো লাইব্রেরি স্ক্যান করে কম্পাইলেশন টাইম অনেক বাড়িয়ে দেয়।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`json
// tsconfig.json এর নমুনা ফাইল
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
\`\`\``
  },
  {
    id: 'typescript-18',
    title: 'What does strict mode do in tsconfig.json? Explain its flags.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'StrictFlags', 'tsconfig'],
    enAnswer: 'strict mode enables a set of strict type-checking flags that maximize error-checking accuracy and type safety in the codebase.',
    bnAnswer: 'strict মোড টাইপ-চেকিং নিয়মের একটি শক্ত সেট সক্রিয় করে যা কোডবেসের টাইপ সেফটি এবং এরর খোঁজার দক্ষতা সর্বোচ্চ বাড়ায়।',
    enExplanation: `### Explanation
Setting \`"strict": true\` in \`tsconfig.json\` turns on several flags under the hood:
- \`noImplicitAny\`: Throws error when a type isn't annotated and cannot be inferred (falls back to any).
- \`strictNullChecks\`: Separates null/undefined from other types.
- \`strictFunctionTypes\`: Enforces strict compatibility rules for function parameters.
- \`alwaysStrict\`: Compiles JS output with \`"use strict"\` mode enabled.

### Real-World Example
With \`strictNullChecks\` turned off, accessing a property on an object that could be null compiles successfully but throws a runtime error. Turning it on forces you to handle null safety first.

### Best Practice
Always start new projects with \`"strict": true\` enabled. Upgrading an existing codebase to strict mode later is very time-consuming due to the number of compilation warnings.

### Common Mistakes
Turning off \`strict\` mode to avoid compile errors instead of refactoring code parameters, rendering TypeScript benefits useless.

### Code Example
\`\`\`typescript
// With strictNullChecks: true
let name: string = "Rohit";
// name = null; // Compiler Error: Type 'null' is not assignable to type 'string'

// With noImplicitAny: true
// function printMsg(msg) { // Compiler Error: Parameter 'msg' implicitly has an 'any' type.
//   console.log(msg);
// }
function printMsg(msg: string) {
  console.log(msg);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\\\`tsconfig.json\\\` ফাইলে \\\`"strict": true\\\` সেট করলে বেশ কয়েকটি রিজিড টাইপ ফ্ল্যাগ চালু হয়:
- \\\`noImplicitAny\\\`: টাইপ চিহ্নিত না থাকলে এবং অনুমানও করা না গেলে কম্পাইলার সাথে সাথে এরর দেয় (ডিফল্ট any হতে দেয় না)।
- \\\`strictNullChecks\\\`: \\\`null\\\` এবং \\\`undefined\\\` কে সম্পূর্ণ আলাদা টাইপ হিসেবে ট্রিট করে।
- \\\`strictFunctionTypes\\\`: ফাংশন প্যারামিটারের জন্য কঠোর সামঞ্জস্য নিয়ম বলবৎ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
\\\`strictNullChecks\\\` নিষ্ক্রিয়া থাকলে একটি সম্ভাব্য \\\`null\\\` অবজেক্টের কী অ্যাক্সেস করতে চাইলে কম্পাইলার এরর দেয় না, ফলে রানটাইমে অ্যাপ ক্র্যাশ করতে পারে। এটি অন রাখলে ডেভেলপার হ্যান্ডেল করতে বাধ্য হয়।

### উত্তম অনুশীলন (Best Practice)
নতুন প্রতিটি প্রজেক্টে প্রথম দিন থেকেই \\\`"strict": true\\\` চালু রাখুন। পরবর্তীতে টাইপ কনভার্ট করতে গেলে শত শত এরর হ্যান্ডেল করা কঠিন হতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
কম্পাইল এরর এড়ানোর শর্টকাট উপায় হিসেবে \\\`strict\\\` মোড বন্ধ করে দেওয়া, যা কোডে টাইপ সেফটির নিশ্চয়তা প্রায় শূন্য করে ফেলে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// strictNullChecks: true হলে
let name: string = "Rohit";
// name = null; // কম্পাইলার এরর: Type 'null' is not assignable to type 'string'

// noImplicitAny: true হলে
// function printMsg(msg) { // কম্পাইলার এরর: Parameter 'msg' implicitly has an 'any' type.
//   console.log(msg);
// }
function printMsg(msg: string) {
  console.log(msg);
}
\`\`\``
  },
  {
    id: 'typescript-19',
    title: 'Explain the noImplicitAny compiler flag and its benefits.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'noImplicitAny', 'CompilerFlags'],
    enAnswer: 'noImplicitAny raises an error when TypeScript cannot infer a variables type and defaults it to any, preventing accidental type safety bypasses.',
    bnAnswer: 'noImplicitAny এরর দেয় যখন টাইপস্ক্রিপ্ট নিজে কোনো টাইপ অনুমান করতে পারে না এবং ডিফল্ট any ধরে নেয়, যা কোডে টাইপ সেফটি বাইপাস হওয়া রোধ করে।',
    enExplanation: `### Explanation
If \`noImplicitAny\` is false, and you don't declare a type for a function parameter, TypeScript silently assigns type \`any\` to it. 
With \`noImplicitAny\` set to true:
- It makes typing explicit and forces developers to specify types.
- Ensures all variables are fully analyzed by the compiler, increasing overall reliability.

### Real-World Example
In a collaborative project, a developer writes \`function calculateTax(amount)\`. Without \`noImplicitAny\`, they could pass a boolean, causing numeric operations to yield \`NaN\` silently.

### Best Practice
Keep this flag enabled (enabled by default under \`strict\`). If you truly need an arbitrary type, write \`any\` explicitly to show intent.

### Common Mistakes
Letting implicit \`any\` leak into function arguments or API payloads, losing early detection of incorrect property names.

### Code Example
\`\`\`typescript
// Config: "noImplicitAny": true

// Error: Parameter 'data' implicitly has an 'any' type.
// function parseJSON(data) {
//   return JSON.parse(data);
// }

// Correct explicit typing
function parseJSON(data: string): unknown {
  return JSON.parse(data);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যদি \\\`noImplicitAny\\\` নিষ্ক্রিয় থাকে এবং আর্গুমেন্টে টাইপ না দেওয়া হয়, তবে কম্পাইলার একে চুপচাপ \\\`any\\\` টাইপ দিয়ে দেয়। 
যখন এটি সক্রিয় করা হয়:
- ডেভেলপার স্পষ্টভাবে টাইপ লিখতে বাধ্য হয়।
- সমস্ত কোডের ইনপুট-আউটপুট টাইপ ট্র্যাকিং শতভাগ বজায় থাকে, যা কোডের নির্ভরযোগ্যতা বাড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় প্রজেক্টে একজন ডেভেলপার \\\`function calculateTax(amount)\\\` লিখল। টাইপ না থাকার কারণে অন্য কেউ এখানে বুলিয়ান পাস করলে রানটাইমে \\\`NaN\\\` আসবে কিন্তু কম্পাইলার কোনো ওয়ার্নিং দেবে না।

### উত্তম অনুশীলন (Best Practice)
এই ফ্ল্যাগটি সবসময় সচল রাখুন (যা \\\`strict\\\` এর আন্ডারে ডিফল্ট অন থাকে)। যদি কোনো কারণে টাইপ না জানা থাকে তবে স্পষ্টভাবে \\\`unknown\\\` বা \\\`any\\\` লিখে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফাংশন আর্গুমেন্টে টাইপ না লিখে রেখে টাইপস্ক্রিপ্টের অটো এনালাইজারকে বাইপাস হতে দেওয়া।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// কনফিগ: "noImplicitAny": true

// এরর: Parameter 'data' implicitly has an 'any' type.
// function parseJSON(data) {
//   return JSON.parse(data);
// }

// সঠিক নিয়ম (স্পষ্ট টাইপিং)
function parseJSON(data: string): unknown {
  return JSON.parse(data);
}
\`\`\``
  },
  {
    id: 'typescript-20',
    title: 'Explain the strictNullChecks compiler flag and how it prevents errors.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'strictNullChecks', 'CompilerFlags'],
    enAnswer: 'strictNullChecks ensures null and undefined are treated as distinct types, preventing "cannot read property of undefined" runtime crashes.',
    bnAnswer: 'strictNullChecks নিশ্চিত করে যে null ও undefined কে আলাদা টাইপ ধরা হয়, যা রানটাইমে অ্যাপ ক্র্যাশ হওয়া প্রতিরোধ করে।',
    enExplanation: `### Explanation
By default (without strict checks), \`null\` and \`undefined\` are assignable to any type (e.g. \`let age: number = null\` compiles).
When \`strictNullChecks\` is true:
- \`null\` and \`undefined\` are no longer assignable to \`string\` or \`number\`.
- You must declare unions (e.g. \`string | null\`) and perform runtime verification before accessing properties.

### Real-World Example
Fetching a user profile from the database. The query might return a profile or \`null\`. With strict checks, TypeScript forces you to write \`if (profile)\` before accessing \`profile.email\`.

### Best Practice
Pair this flag with optional chaining (\`?.\`) or guard clauses (\`if (!user) return\`) to write robust, crash-free applications.

### Common Mistakes
Using the non-null assertion operator \`!\` (like \`user!.email\`) to silence the compiler warnings without actually ensuring the value is not null.

### Code Example
\`\`\`typescript
// Config: "strictNullChecks": true

let username: string;
// username = null; // Compiler Error: Type 'null' is not assignable to type 'string'.

// Correct usage of unions
let email: string | null = null;

function sendEmail(addr: string | null) {
  // addr.toLowerCase(); // Compiler Error: Object is possibly 'null'.
  if (addr !== null) {
    addr.toLowerCase(); // Safe!
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টরূপে (স্ট্রিক্ট চেক ছাড়া), \\\`null\\\` এবং \\\`undefined\\\` যেকোনো ভ্যারিয়েবলে অ্যাসাইন করা যায় (যেমন- \\\`let age: number = null\\\` সফলভাবে চলে)।
যখন \\\`strictNullChecks\\\` চালু করা হয়:
- \\\`null\\\` এবং \\\`undefined\\\` কে অন্য কোনো টাইপের ভেতর রাখা যায় না।
- আপনাকে ইউনিয়ন ডিক্লেয়ার করতে হবে (যেমন- \\\`string | null\\\`) এবং প্রপার্টি ব্যবহারের আগে চেকিং লজিক লিখতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ থেকে ডাটা লোড করা। কোডটি হয়তো ডাটা পাবে অথবা \\\`null\\\` পাবে। এই চেকিং সচল থাকলে ডেভেলপার \\\`profile.email\\\` কল করার আগে \\\`if (profile)\\\` কন্ডিশন লিখতে বাধ্য হবে।

### উত্তম অনুশীলন (Best Practice)
কোড সুরক্ষিত রাখতে এই ফ্ল্যাগের সাথে অপশনাল চেইনিং (\\\`?.\\\`) অথবা গার্ড ক্লজ (\\\`if (!user) return\\\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
প্রকৃত সমাধান না করে নোড অ্যাসারশন অপারেটর \\\`!\\\` (যেমন- \\\`user!.email\\\`) দিয়ে জোরপূর্বক কম্পাইলার ওয়ার্নিং বন্ধ করা।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// কনফিগ: "strictNullChecks": true

let username: string;
// username = null; // কম্পাইলার এরর: Type 'null' is not assignable to type 'string'.

// ইউনিয়ন টাইপের সঠিক ব্যবহার
let email: string | null = null;

function sendEmail(addr: string | null) {
  // addr.toLowerCase(); // কম্পাইলার এরর: Object is possibly 'null'.
  if (addr !== null) {
    addr.toLowerCase(); // নিরাপদ!
  }
}
\`\`\``
  },
  {
    id: 'typescript-21',
    title: 'How do you type Event Handlers in React components using TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'React', 'Events', 'Handlers'],
    enAnswer: 'Type React event handlers using React.ChangeEvent<HTMLInputElement> or React.MouseEvent<HTMLButtonElement> to access input values and properties safely.',
    bnAnswer: 'ইনপুট ভ্যালু এবং প্রপার্টিজ নিরাপদে অ্যাক্সেস করতে React.ChangeEvent<HTMLInputElement> অথবা React.MouseEvent<HTMLButtonElement> টাইপ ব্যবহার করুন।',
    enExplanation: `### Explanation
React uses a Synthetic Event system to normalize events across browsers.
- **Form/Input Event**: Type using \`React.ChangeEvent<HTMLInputElement>\`.
- **Button Click Event**: Type using \`React.MouseEvent<HTMLButtonElement>\`.
- **Inline handlers**: Often inferred automatically by React compiler.

### Real-World Example
Typing an \`onChange\` event in a custom form input field to safely read \`event.target.value\` without type errors or using \`any\`.

### Best Practice
Import type helpers directly from \`react\` namespace to keep interfaces clean and maintainable.

### Common Mistakes
Typing the parameter as a generic \`Event\` from the DOM global namespace instead of \`React.ChangeEvent\`, causing type mismatch warnings in JSX props.

### Code Example
\`\`\`tsx
import React, { useState } from 'react';

export function InputField() {
  const [text, setText] = useState("");

  // Correct typing of input change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked at coordinates:", e.clientX, e.clientY);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ব্রাউজারগুলোর সাথে সামঞ্জস্যতা বজায় রাখতে Synthetic Event সিস্টেম ব্যবহার করে।
- **ইনপুট ইভেন্ট**: \\\`React.ChangeEvent<HTMLInputElement>\\\` টাইপ ব্যবহার করুন।
- **বাটন ক্লিক ইভেন্ট**: \\\`React.MouseEvent<HTMLButtonElement>\\\` টাইপ ব্যবহার করুন।
- **ইনলাইন হ্যান্ডলার**: এগুলোকে রিঅ্যাক্ট কম্পাইলার নিজে থেকেই টাইপ ইনফার করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ফর্মের ইনপুট ফিল্ডের \\\`onChange\\\` প্রপে \\\`any\\\` ব্যবহার না করে আর্গুমেন্টে সঠিক টাইপ সেট করে আস্থার সাথে \\\`event.target.value\\\` রিড করা।

### উত্তম অনুশীলন (Best Practice)
কোড রিডিবিলিটি ঠিক রাখতে সরাসরি \\\`react\\\` নেমস্পেস থেকে টাইপ হেল্পার ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্টের নিজস্ব টাইপ হেল্পার ব্যবহার না করে গ্লোবাল ব্রাউজার ইভেন্ট (\\\`Event\\\`) আর্গুমেন্টে সেট করা, যা JSX এ টাইপ এরর দেয়।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`tsx
import React, { useState } from 'react';

export function InputField() {
  const [text, setText] = useState("");

  // ইনপুট চেঞ্জ ইভেন্টের সঠিক টাইপ সেট
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ক্লিক স্থানাঙ্ক:", e.clientX, e.clientY);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>জমা দিন</button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'typescript-22',
    title: 'How do you type React Props (including children) in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'React', 'Props', 'ReactNode'],
    enAnswer: 'Type props using interface or type aliases. Use React.ReactNode for properties that accept children elements, lists, or text.',
    bnAnswer: 'interface বা type alias ব্যবহার করে props টাইপ করুন। children প্রপার্টি টাইপ করতে React.ReactNode ব্যবহার করুন, যা যেকোনো এলিমেন্ট বা টেক্সট গ্রহণ করে।',
    enExplanation: `### Explanation
Props define the public API of a component.
- **Children**: Use \`React.ReactNode\` which accepts JSX elements, strings, fragments, portals, or arrays.
- **React.ComponentProps**: Standard helper to extract props from HTML elements (like \`React.ComponentProps<'button'>\`).

### Real-World Example
Creating a custom modal wrapper. The modal requires a title (\`string\`) and customizable children elements containing layout grids or form forms.

### Best Practice
Prefer using normal TypeScript object types (interfaces or types) for props. Do not use legacy \`React.FC\` or \`React.FunctionComponent\` unless necessary, as it complicates children typing.

### Common Mistakes
Typing \`children\` as \`JSX.Element\` instead of \`React.ReactNode\`. \`JSX.Element\` only allows a single React element, breaking if children contain a plain string or array.

### Code Example
\`\`\`tsx
import React from 'react';

// Props Interface definition
interface CardProps {
  title: string;
  size?: 'small' | 'large'; // Optional union literal
  children: React.ReactNode; // Correct type for children
}

export function Card({ title, size = 'small', children }: CardProps) {
  return (
    <div className={size === 'large' ? 'p-6' : 'p-3'}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Props কম্পোনেন্টের বাহ্যিক ইন্টারফেস বা এপিআই সংজ্ঞায়িত করে।
- **Children**: এর জন্য \\\`React.ReactNode\\\` ব্যবহার করুন যা জেএসএক্স (JSX) নোড, টেক্সট, ফ্র্যাগমেন্ট, পোর্টাল বা নোডের অ্যারে সাপোর্ট করে।
- **React.ComponentProps**: সাধারণ এইচটিএমএল প্রোপস (যেমন- বাটন প্রোপস) সরাসরি ইনহেরিট করার হেল্পার।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কার্ড বা লেআউট র‍্যাপার কম্পোনেন্ট তৈরি করা। এতে কার্ডের একটি টাইটেল (\\\`string\\\`) লাগবে এবং কার্ডের বডির জন্য কাস্টম চাইল্ড উপাদান (\\\`children\\\`) লাগবে।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্ট প্রোপস টাইপ করার জন্য সাধারণ ইন্টারফেস বা টাইপ ব্যবহার করুন। লেগ্যাসি \\\`React.FC\\\` পরিহার করা উত্তম কারণ এটি চিলড্রেন টাইপিংকে বিভ্রান্ত করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\\\`children\\\` কে \\\`React.ReactNode\\\` এর পরিবর্তে \\\`JSX.Element\\\` টাইপ করা। \\\`JSX.Element\\\` কেবল একটি উপাদান নিতে পারে, একাধিক আর্গুমেন্ট বা টেক্সট দিলে এটি ক্র্যাশ করে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`tsx
import React from 'react';

// প্রোপস ইন্টারফেস ঘোষণা
interface CardProps {
  title: string;
  size?: 'small' | 'large'; // অপশনাল ইউনিয়ন টাইপ
  children: React.ReactNode; // চিলড্রেন এর সঠিক টাইপ
}

export function Card({ title, size = 'small', children }: CardProps) {
  return (
    <div className={size === 'large' ? 'p-6' : 'p-3'}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'typescript-23',
    title: 'Explain the void type and how it differs from undefined.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Void', 'Undefined', 'Functions'],
    enAnswer: 'void represents the complete absence of a return value in a function. undefined is a concrete value that can be assigned and returned.',
    bnAnswer: 'void কোনো ফাংশনের রিটার্ন ভ্যালু সম্পূর্ণ অনুপস্থিত থাকা নির্দেশ করে। undefined একটি বাস্তব ভ্যালু যা অ্যাসাইন বা রিটার্ন করা যেতে পারে।',
    enExplanation: `### Explanation
- **void**: Used in function return type definitions. Tells the compiler that the function executes logic but does not return any value. A void-returning function can actually return \`undefined\` internally at runtime in JavaScript.
- **undefined**: A primitive value. If a function is annotated as returning \`undefined\`, it *must* have an explicit return statement returning \`undefined\` or a blank return.

### Real-World Example
Logging function: \`function logMsg(m: string): void { console.log(m); }\` returns nothing. A callback setter function in React that does state updates returns \`void\`.

### Best Practice
Always use \`void\` for functions that do not return a value. Avoid using \`undefined\` as a function return type unless you explicitly want to force the caller to read an undefined returned value.

### Common Mistakes
Forgetting that TypeScript ignores return values in callback parameters marked as \`void\`. This is a feature called "void-return safety" that allows assigning functions that return data to callbacks expecting nothing.

### Code Example
\`\`\`typescript
// Returns void: no return statement needed
function printName(name: string): void {
  console.log(name);
}

// Returns undefined: MUST return explicitly
function getNothing(): undefined {
  return; // or: return undefined;
}

// Callback void-safety behavior
type LogCallback = () => void;
const myLog: LogCallback = () => "Logs complete"; // Valid (Return value is ignored)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **void**: ফাংশনের রিটার্ন টাইপ ডিফাইন করতে ব্যবহৃত হয়। এটি কম্পাইলারকে জানায় যে ফাংশনটি লজিক সম্পাদন করে কিন্তু কোনো কিছু রিটার্ন করে না।
- **undefined**: এটি জাভাস্ক্রিপ্টের একটি বেসিক প্রিমিটিভ ভ্যালু। যদি কোনো ফাংশনের রিটার্ন টাইপ \\\`undefined\\\` দেওয়া হয়, তবে সেখানে অবশ্যই একটি স্পষ্ট \\\`return\\\` বা \\\`return undefined;\\\` লাইন থাকতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লগিং ফাংশন: \\\`function logMsg(m: string): void { console.log(m); }\\\` এটি কোনো মান ফেরত দেয় না। রিয়্যাক্ট কম্পোনেন্টে স্টেট পরিবর্তনের পর কলব্যাক মেথড রান করলে তা সাধারণত \\\`void\\\` রিটার্ন করে।

### উত্তম অনুশীলন (Best Practice)
ফাংশন যখন কোনো মান ফেরত দেয় না, তখন তার জন্য সবসময় \\\`void\\\` ব্যবহার করুন। বিশেষ কোনো কারণ ছাড়া ফাংশনের রিটার্ন টাইপ হিসেবে \\\`undefined\\\` ব্যবহার না করাই ভালো।

### সাধারণ ভুলসমূহ (Common Mistakes)
কলব্যাক প্যারামিটারের রিটার্ন টাইপ \\\`void\\\` থাকলে টাইপস্ক্রিপ্ট তার রিটার্ন মান উপেক্ষা করে (void-return safety)। এটি জানা না থাকলে অপ্রয়োজনীয় এরর নিয়ে বিভ্রান্ত হতে পারেন।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// void রিটার্ন: কোনো রিটার্ন স্টেটমেন্ট প্রয়োজন নেই
function printName(name: string): void {
  console.log(name);
}

// undefined রিটার্ন: অবশ্যই স্পষ্ট রিটার্ন প্রয়োজন
function getNothing(): undefined {
  return; // অথবা: return undefined;
}

// কলব্যাক void-safety আচরণ
type LogCallback = () => void;
const myLog: LogCallback = () => "Logs complete"; // ভ্যালিড (রিটার্ন ভ্যালুটি ইগনোর করা হবে)
\`\`\``
  },
  {
    id: 'typescript-24',
    title: 'What is the difference between null and undefined in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Null', 'Undefined'],
    enAnswer: 'undefined indicates a variable has been declared but not yet assigned a value. null represents an intentional absence of any object value.',
    bnAnswer: 'undefined নির্দেশ করে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান দেওয়া হয়নি। null কোনো অবজেক্ট মানের অনুপস্থিতি ইচ্ছাকৃতভাবে বোঝায়।',
    enExplanation: `### Explanation
- **undefined**: TypeScript assigns this by default to initialized variables without values (\`let x;\`).
- **null**: Must be explicitly assigned by the developer to represent "no value".
- **Types**: They are distinct primitives. Under \`strictNullChecks\`, \`null\` cannot be assigned to variables typed as \`undefined\` (or vice-versa).

### Real-World Example
In a database schema, if a user has not set their middle name, it can be stored as \`null\`. If a field hasn't been loaded or processed yet, it is marked as \`undefined\`.

### Best Practice
Be consistent. Use \`null\` to represent the intentional absence of database data, and use \`undefined\` for optional properties and function parameters.

### Common Mistakes
Confusing double equal comparison (\`==\`) with triple equal (\`===\`). \`null == undefined\` is \`true\`, but \`null === undefined\` is \`false\`.

### Code Example
\`\`\`typescript
let a: undefined = undefined;
let b: null = null;

// Under strictNullChecks: true
let name: string;
// name = undefined; // Error!
// name = null; // Error!

let midName: string | null = null; // Valid structure for optional database field
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **undefined**: টাইপস্ক্রিপ্ট ভ্যালু ছাড়া ডিক্লেয়ার করা ভ্যারিয়েবলকে স্বয়ংক্রিয়ভাবে এটি অ্যাসাইন করে (\\\`let x;\\\`)।
- **null**: খালি বা কোনো মান নেই তা বোঝাতে ডেভেলপারকে ম্যানুয়ালি এটি সেট করতে হয়।
- **টাইপ**: দুটোই ভিন্ন প্রিমিটিভ। \\\`strictNullChecks\\\` সক্রিয় থাকলে একটার টাইপের ভেতর অন্যটার ভ্যালু রাখা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ স্কিমাতে, ব্যবহারকারী যদি তার দ্বিতীয় নাম সেট না করে তবে তা ডাটাবেজে \\\`null\\\` আকারে জমা থাকে। আর যদি কোনো ফিল্ড ফর্মে ইনপুট হিসেবে এখনো আসেইনি তা প্রকাশ করতে \\\`undefined\\\` ব্যবহৃত হয়।

### উত্তম অনুশীলন (Best Practice)
প্রজেক্টে একমুখী নিয়ম রাখুন। ডেটাবেজের খালি তথ্যের জন্য \\\`null\\\` এবং ইন্টারফেসের অপশনাল কী-সমূহের জন্য \\\`undefined\\\` ব্যবহার করা সবচেয়ে বেস্ট।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডাবল ইকুয়াল এবং ট্রিপল ইকুয়ালের পার্থক্য গুলিয়ে ফেলা। \\\`null == undefined\\\` সত্য হলেও \\\`null === undefined\\\` সম্পূর্ণ মিথ্যা।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
let a: undefined = undefined;
let b: null = null;

// strictNullChecks: true হলে
let name: string;
// name = undefined; // এরর দেবে!
// name = null; // এরর দেবে!

let midName: string | null = null; // ডাটাবেজ ফিল্ডের জন্য সঠিক গঠন
\`\`\``
  },
  {
    id: 'typescript-25',
    title: 'How do you type dynamic object keys using index signatures?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'IndexSignatures', 'Objects'],
    enAnswer: 'Type dynamic object keys using an index signature syntax like [key: string]: valueType to allow arbitrary keys to be added to an object.',
    bnAnswer: 'অবজেক্টে যেকোনো কী যুক্ত করার অনুমতি দিতে [key: string]: valueType সিনট্যাক্স ব্যবহার করে ডায়নামিক অবজেক্ট কী টাইপ করা হয়।',
    enExplanation: `### Explanation
Index signatures define the types of keys and values inside an object when the exact key names are unknown beforehand.
- **Syntax**: \`[key: string]: number\` permits any string property name as long as the value is a number.
- **Constraints**: All declared properties must match the index signature value type.

### Real-World Example
Creating a translation dictionary configuration. The keys are the translation IDs (unknown dynamically), and the values are the translated text strings.

### Best Practice
Use \`Record<string, T>\` utility type instead of custom index signatures where possible to write clean, concise type mappings.

### Common Mistakes
Forgetting that index signatures return \`T | undefined\` if a key is missing at runtime. Accessing it directly without checking can cause bugs unless \`noUncheckedIndexedAccess\` compiler flag is enabled.

### Code Example
\`\`\`typescript
// Index Signature definition
interface StringDictionary {
  [key: string]: string; // Allows any string key
}

const trans: StringDictionary = {
  welcome: "Welcome User",
  logout: "Log Out Now"
};

// Alternative using Record utility
const scores: Record<string, number> = {
  math: 90,
  english: 85
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অবজেক্টের ভেতর কী-গুলোর নাম আগে থেকে নিশ্চিত জানা না থাকলে ডাইনামিক কি টাইপ করতে ইনডেক্স সিগনেচার ব্যবহার করা হয়।
- **সিনট্যাক্স**: \\\`[key: string]: number\\\` এর মানে হলো অবজেক্টের কী-এর নাম যেকোনো স্ট্রিং হতে পারবে কিন্তু মান অবশ্যই সংখ্যা হতে হবে।
- **সীমাবদ্ধতা**: অবজেক্টের অন্য যেকোনো আবশ্যিক ডিক্লেয়ার্ড প্রপার্টিকে অবশ্যই ইনডেক্স সিগনেচারের টাইপের সাথে মিলতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বহুভাষিক অনুবাদের অবজেক্ট তৈরি করা। কী-সমূহ হলো ডাইনামিক আইডি (যা আগে থেকে ফিক্সড নয়) এবং তাদের মান হলো সংশ্লিষ্ট ভাষার অনুবাদ বা বাক্য (\\\`string\\\`)।

### উত্তম অনুশীলন (Best Practice)
ম্যানুয়ালি ইনডেক্স সিগনেচার ডিক্লেয়ার না করে টাইপ হেল্পার হিসেবে সরাসরি \\\`Record<string, T>\\\` ইউটিলিটি টাইপ ব্যবহার করা বেশি ক্লিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনডেক্স সিগনেচার থেকে ডাটা রিড করার সময় এটি যে \\\`undefined\\\` রিটার্ন করতে পারে তা ভুলে যাওয়া, যদি ডিক্লেয়ার করা কী-টি অবজেক্টে না থাকে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// ইনডেক্স সিগনেচার গঠন
interface StringDictionary {
  [key: string]: string; // যেকোনো স্ট্রিং কী নেওয়া যাবে
}

const trans: StringDictionary = {
  welcome: "স্বাগতম ইউজার",
  logout: "লগ আউট করুন"
};

// Record ইউটিলিটি ব্যবহার করে বিকল্প উপায়
const scores: Record<string, number> = {
  math: 90,
  english: 85
};
\`\`\``
  },
  {
    id: 'typescript-26',
    title: 'What is type narrowing using the typeof operator?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'TypeNarrowing', 'typeof'],
    enAnswer: 'typeof is a type guard that returns the primitive type of a variable at runtime, letting TypeScript automatically narrow types inside conditional blocks.',
    bnAnswer: 'typeof হলো একটি টাইপ গার্ড যা রানটাইমে ভ্যারিয়েবলের প্রিমিটিভ টাইপ সনাক্ত করে কন্ডিশনাল ব্লকের ভেতর টাইপকে সুনির্দিষ্ট করে।',
    enExplanation: `### Explanation
The \`typeof\` operator is evaluated by the JavaScript engine at runtime. TypeScript analyzes these checks statically:
- Valid outputs: \`"string"\`, \`"number"\`, \`"boolean"\`, \`"symbol"\`, \`"undefined"\`, \`"object"\`, \`"function"\`.
- Once checked, TypeScript automatically filters out all incompatible union types from the block scope.

### Real-World Example
A formatter function receives \`Date | string\`. Checking \`if (typeof val === "string")\` allows using string-specific methods inside the block.

### Best Practice
Use \`typeof\` checks for basic primitives. For class instances, use \`instanceof\` instead.

### Common Mistakes
Forgetting that \`typeof null\` returns \`"object"\` in JavaScript. Checking \`typeof x === "object"\` without excluding \`null\` will cause errors if the value is null.

### Code Example
\`\`\`typescript
function formatInput(input: string | number | null) {
  // Guard against null (typeof null is "object" in JS!)
  if (input === null) return "";

  if (typeof input === "string") {
    // TypeScript knows input is string here
    return input.trim();
  }
  
  // TypeScript knows input is number here
  return input.toFixed(0);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\\\`typeof\\\` অপারেটরটি রানটাইমে জাভাস্ক্রিপ্ট দ্বারা মূল্যায়িত হয়। টাইপস্ক্রিপ্ট স্ট্যাটিকালি এই কন্ডিশনগুলো ট্র্যাক করে টাইপ ফিল্টার করে।
- রিটার্ন মানসমূহ: \\\`"string"\\\`, \\\`"number"\\\`, \\\`"boolean"\\\`, \\\`"function"\\\`, ইত্যাদি।
- চেক করার পর, টাইপস্ক্রিপ্ট কন্ডিশন ব্লকের ভেতরে অমিল ইউনিয়ন টাইপগুলোকে বাদ দিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ফরম্যাটার ফাংশন যা ইনপুট হিসেবে \\\`Date | string\\\` নেয়। সেখানে \\\`if (typeof val === "string")\\\` চেক করার পর ব্লকের ভেতর স্ট্রিংয়ের সব মেথড অটো সচল হবে।

### উত্তম অনুশীলন (Best Practice)
বেসিক প্রিমিটিভ টাইপ ন্যারো করতে \\\`typeof\\\` ব্যবহার করুন। তবে অবজেক্ট বা ক্লাসের ক্ষেত্রে \\\`instanceof\\\` ব্যবহার করা বেশি নিরাপদ।

### সাধারণ ভুলসমূহ (Common Mistakes)
জাভাস্ক্রিপ্টে \\\`typeof null\\\` যে \\\`"object"\\\` রিটার্ন করে তা ভুলে যাওয়া। ফলে \\\`null\\\` ফিল্টার না করে \\\`typeof x === "object"\\\` চেক করলে বাগ হতে পারে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
function formatInput(input: string | number | null) {
  // null চেক করা হচ্ছে (জাভাস্ক্রিপ্টে typeof null হলো "object")
  if (input === null) return "";

  if (typeof input === "string") {
    // এখানে এসে 'input' শতভাগ একটি স্ট্রিং
    return input.trim();
  }
  
  // এখানে এসে 'input' একটি নাম্বার
  return input.toFixed(0);
}
\`\`\``
  },
  {
    id: 'typescript-27',
    title: 'How do you define a type-safe function type signature?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Functions', 'Signatures'],
    enAnswer: 'Define a function type signature using arrow syntax like (arg: type) => returnType inside type aliases or interfaces.',
    bnAnswer: 'type alias বা interface এর ভেতরে (arg: type) => returnType অ্যারো সিনট্যাক্স ব্যবহার করে টাইপ-সেফ ফাংশন সিগনেচার সংজ্ঞায়িত করা হয়।',
    enExplanation: `### Explanation
A function signature defines the required parameters, their types, and the return type.
- **Type Alias Syntax**: \`type MathFn = (a: number, b: number) => number;\`
- **Interface Syntax**: \`interface MathInterface { (a: number, b: number): number; }\`

### Real-World Example
Defining a callback function type for an API request success handler. Implementing this signature ensures the handler accepts the exact API response data format.

### Best Practice
Use type aliases for arrow-syntax function definitions. Use interfaces if you need to define additional properties attached directly to the function object.

### Common Mistakes
Using a return type of \`any\` instead of \`void\` or the actual type, which turns off typing checks on the output value of the function execution.

### Code Example
\`\`\`typescript
// Defining the function type signature
type ClickHandler = (targetId: string, eventCode: number) => void;

// Implementing the signature
const onBtnClick: ClickHandler = (id, code) => {
  console.log(\`Clicked target \${id} with code \${code}\`);
};

// Interface version (allows adding static properties to the function)
interface SearchFunction {
  (query: string): string[];
  cacheLimit: number; // static property
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ফাংশন সিগনেচার এর প্যারামিটার, তাদের টাইপ এবং রিটার্ন টাইপ কেমন হবে তা সুনির্দিষ্টভাবে ঘোষণা করে।
- **টাইপ এলিয়াস সিনট্যাক্স**: \\\`type MathFn = (a: number, b: number) => number;\\\`
- **ইন্টারফেস সিনট্যাক্স**: \\\`interface MathInterface { (a: number, b: number): number; }\\\`

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই রেসপন্স হ্যান্ডলারের কলব্যাক টাইপ নির্দিষ্ট করা। এই সিগনেচার ইমপ্লিমেন্ট করলে কলব্যাক ফাংশনটি এপিআই ডাটা ঠিকঠাক পড়তে পারছে কি না তা নিশ্চিত হয়।

### উত্তম অনুশীলন (Best Practice)
ফাংশন সিগনেচার ডিফাইন করতে টাইপ এলিয়াস অ্যারো সিনট্যাক্স ব্যবহার করুন। আর যদি ফাংশনের নিজস্ব কোনো অতিরিক্ত প্রপার্টি থাকে তবে ইন্টারফেস ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিটার্ন টাইপ না দিয়ে ডিফল্ট \\\`any\\\` হয়ে যেতে দেওয়া, যার ফলে ফাংশনের রিটার্ন ভ্যালুর ওপর টাইপ সেফটি বিলুপ্ত হয়ে যায়।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// ফাংশন সিগনেচার টাইপ ডিফাইন
type ClickHandler = (targetId: string, eventCode: number) => void;

// সিগনেচার ইমপ্লিমেন্ট করা হচ্ছে
const onBtnClick: ClickHandler = (id, code) => {
  console.log(\\\`Clicked target \\\${id} with code \\\${code}\\\`);
};

// Interface সংস্করণ (ফাংশনের সাথে static properties যুক্ত করা যায়)
interface SearchFunction {
  (query: string): string[];
  cacheLimit: number; // static definition
}
\`\`\``
  },
  {
    id: 'typescript-28',
    title: 'Explain the non-null assertion operator (!) and when to avoid it.',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'NonNullAssertion', 'Safety'],
    enAnswer: 'The non-null assertion operator (!) tells the compiler that a value is definitely not null or undefined, bypassing strict null warnings at compile-time.',
    bnAnswer: 'non-null assertion operator (!) কম্পাইলারকে আশ্বস্ত করে যে একটি মান অবশ্যই null বা undefined নয়, যার ফলে কম্পাইল-টাইম নাল এরর বাইপাস হয়।',
    enExplanation: `### Explanation
By adding \`!\` after a variable (e.g. \`user!.name\`), you tell TypeScript to treat the variable as if it is not null or undefined.
- **Risk**: It is purely compile-time. If the value is actually \`null\` at runtime, JavaScript will crash when accessing properties.

### Real-World Example
Reading query selector results where you are 100% sure the element exists in HTML: \`const root = document.getElementById("root")!;\`.

### Best Practice
Avoid \`!\` where possible. Prefer writing runtime conditional checks (\`if (item) { ... }\`) or fallback default values using \`??\`.

### Common Mistakes
Overusing \`!\` to silence TS errors on API response properties, which crashes the client application if the backend database schema changes.

### Code Example
\`\`\`typescript
let name: string | null = null;

// Unsafe Non-null assertion (will crash at runtime)
// console.log(name!.toUpperCase()); // TypeError: Cannot read properties of null

// Safe alternative: Runtime check
if (name !== null) {
  console.log(name.toUpperCase()); // Safe
}

// Safe alternative: Nullish fallback
const safeName = name ?? "Guest";
console.log(safeName.toUpperCase()); // Safe
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোনো ভ্যারিয়েবলের শেষে \\\`!\\\` অপারেটর যোগ করলে (যেমন- \\\`user!.name\\\`) টাইপস্ক্রিপ্ট সেটিকে \\\`null\\\` বা \\\`undefined\\\` নয় বলে ধরে নেয়।
- **ঝুঁকি**: এটি কেবল কম্পাইল টাইমে কাজ করে। রানটাইমে মানটি সত্যি \\\`null\\\` হলে জাভাস্ক্রিপ্ট ডম রিড করতে গিয়ে ক্র্যাশ করবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
এইচটিএমএল ফাইলে রুট ডিভটি নিশ্চিতভাবে আছে জানা থাকলে ডম সিলেক্টরের সাথে এটি ব্যবহার করা: \\\`const root = document.getElementById("root")!;\\\`।

### উত্তম অনুশীলন (Best Practice)
প্রজেক্টে \\\`!\\\` ব্যবহার যথাসম্ভব পরিহার করুন। এর পরিবর্তে রানটাইম কন্ডিশন চেক (\\\`if (item)\\\`) অথবা ফলব্যাক হিসেবে \\\`??\\\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডাটাবেজ থেকে আসা ভ্যারিয়েবলের এরর এড়াতে \\\`!\\\` ব্যবহার করা, যা ডাটা মিসিং থাকলে ক্লায়েন্ট সাইট ক্র্যাশ করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
let name: string | null = null;

// অনিরাপদ Non-null assertion (রানটাইমে ক্র্যাশ করবে)
// console.log(name!.toUpperCase()); // TypeError: Cannot read properties of null

// নিরাপদ উপায়: রানটাইম কন্ডিশনাল চেক
if (name !== null) {
  console.log(name.toUpperCase()); // নিরাপদ
}

// নিরাপদ উপায়: নালিশ ফলব্যাক ভ্যালু
const safeName = name ?? "Guest";
console.log(safeName.toUpperCase()); // নিরাপদ
\`\`\``
  },
  {
    id: 'typescript-29',
    title: 'How do you type arrays of union types?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Arrays', 'Union'],
    enAnswer: 'Type arrays of union types using parenthesis syntax like (string | number)[] to allow the array to contain values of different types.',
    bnAnswer: 'অ্যারেতে বিভিন্ন টাইপের উপাদান রাখার অনুমতি দিতে (string | number)[] প্যারেন্থেসিস সিনট্যাক্স ব্যবহার করে টাইপ করা হয়।',
    enExplanation: `### Explanation
- **Syntax**: \`(string | number)[]\` matches arrays containing strings, numbers, or a mix of both.
- **Warning**: Writing \`string | number[]\` is different. It represents a single value of type \`string\` OR a complete array of type \`number[]\`.

### Real-World Example
Typing a chart data array that can accept either raw coordinate numbers or label string entries on a canvas render loop.

### Best Practice
Always wrap the union types inside parentheses before the array bracket syntax \`[]\` to ensure correct operator precedence.

### Common Mistakes
Writing \`string | number[]\` when you intended to allow mixed items in a single list, causing type errors when adding string items to the array.

### Code Example
\`\`\`typescript
// Mixed Array of strings and numbers (Correct precedence)
let mixedData: (string | number)[] = [101, "Admin", 202, "User"];

// String OR Array of numbers (Different meaning!)
let optionalData: string | number[];
optionalData = "Offline"; // Valid
optionalData = [1, 2, 3]; // Valid
// optionalData = ["Hello", 1]; // Compiler Error: Type 'string' is not assignable.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **সিনট্যাক্স**: \\\`(string | number)[]\\\` নির্দেশ করে এমন একটি অ্যারে যাতে স্ট্রিং, নাম্বার অথবা উভয়ের মিশ্রণ থাকতে পারে।
- **সতর্কতা**: \\\`string | number[]\\\` কিন্তু সম্পূর্ণ ভিন্ন জিনিস। এটি নির্দেশ করে একটি সিঙ্গেল \\\`string\\\` অথবা একটি সম্পূর্ণ সংখ্যার অ্যারে \\\`number[]\\\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চার্ট ডাটা অ্যারে যেখানে সংখ্যার স্থানাঙ্ক অথবা স্ট্রিংয়ের লেবেল যেকোনো একটি উপাদান হিসেবে পুশ করা হতে পারে।

### উত্তম অনুশীলন (Best Practice)
অপারেটর প্রেসিডেন্স ঠিক রাখতে অ্যারে সাইন \\\`[]\\\` যোগ করার আগে অবশ্যই ইউনিয়ন টাইপকে ফার্স্ট ব্র্যাকেটের \\\`()\\\` ভেতর মুড়ে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মিশ্র ডাটার অ্যারে তৈরির উদ্দেশ্যে অসাবধানতাবশত \\\`string | number[]\\\` লিখে ফেলা, যা অ্যারেতে স্ট্রিং পুশ করতে এরর দেবে।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// স্ট্রিং এবং নাম্বারের মিশ্র অ্যারে (সঠিক নিয়ম)
let mixedData: (string | number)[] = [101, "Admin", 202, "User"];

// স্ট্রিং অথবা সংখ্যার অ্যারে (ভিন্ন অর্থ!)
let optionalData: string | number[];
optionalData = "Offline"; // ভ্যালিড
optionalData = [1, 2, 3]; // ভ্যালিড
// optionalData = ["Hello", 1]; // কম্পাইলার এরর দেবে
\`\`\``
  },
  {
    id: 'typescript-30',
    title: 'What is the difference between object, Object, and {} in TypeScript?',
    difficulty: 'basic',
    category: 'typescript',
    tags: ['TypeScript', 'Types', 'Objects'],
    enAnswer: 'object represents any non-primitive type. Object represents JS runtime Object properties. {} represents any value except null and undefined.',
    bnAnswer: 'object যেকোনো অ-প্রিমিটিভ (non-primitive) টাইপ নির্দেশ করে। Object রানটাইম অবজেক্ট প্রপার্টি নির্দেশ করে। {} নির্দেশ করে null এবং undefined ব্যতীত যেকোনো ভ্যালু।',
    enExplanation: `### Explanation
- **object**: Any type that is not a primitive (not string, number, boolean, symbol, null, or undefined). E.g., arrays, functions, custom objects.
- **{} (empty object type)**: Represents any value that can be indexed, which includes primitives but excludes \`null\` and \`undefined\`.
- **Object**: Describes the functionality of the global JavaScript Object class instance. Avoid using \`Object\` and \`{}\` for general object typing.

### Real-World Example
An API registry function that only accepts non-primitive objects (like database schemas or array logs) should be typed with \`object\` to prevent passing numbers or strings.

### Best Practice
Use lowercase \`object\` for non-primitive types. For specific object shapes, write explicit interface or type alias declarations.

### Common Mistakes
Using \`{}\` thinking it forces a blank object. In TypeScript, \`{}\` can accept number or string primitives, which can lead to unexpected type holes.

### Code Example
\`\`\`typescript
// object type: non-primitives only
let nonPrimitive: object;
nonPrimitive = { id: 1 }; // Valid
nonPrimitive = [1, 2, 3]; // Valid
// nonPrimitive = "text"; // Compiler Error: Type 'string' is not assignable to type 'object'.

// {} type: allows anything except null/undefined
let emptyObj: {};
emptyObj = "text"; // Valid!
emptyObj = 10; // Valid!
// emptyObj = null; // Compiler Error (with strictNullChecks)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **object**: যেকোনো অ-প্রিমিটিভ টাইপ (যেমন- অ্যারে, ফাংশন বা সাধারণ অবজেক্ট) যা স্ট্রিং, নাম্বার, বুলিয়ান বা নাল নয়।
- **{} (খালি অবজেক্ট টাইপ)**: এটি রানটাইম ইনডেক্স করা যায় এমন যেকোনো ভ্যালু সাপোর্ট করে (প্রিমিটিভ সহ), কিন্তু \\\`null\\\` এবং \\\`undefined\\\` কে কড়াভাবে ব্লক করে।
- **Object**: গ্লোবাল জাভাস্ক্রিপ্ট অবজেক্ট ক্লাসের ইনস্ট্যান্স প্রপার্টি বোঝায়। সাধারণ অবজেক্ট ডিফাইন করতে \\\`Object\\\` বা \\\`{}\\\` ব্যবহার না করাই শ্রেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই রেজিস্ট্রি ফাংশন যা কেবল মাত্র অবজেক্ট আর্গুমেন্ট গ্রহণ করবে (যেমন স্কিমা বা অ্যারে লগ)। সেখানে \\\`object\\\` টাইপ দিলে স্ট্রিং বা নাম্বার পাস করা বন্ধ হবে।

### উত্তম অনুশীলন (Best Practice)
নন-প্রিমিটিভ অবজেক্টের জন্য সবসময় স্মললেটার \\\`object\\\` টাইপ ব্যবহার করুন। আর নির্দিষ্ট অবজেক্ট শেপের জন্য সরাসরি ইন্টারফেস ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\\\`{}\\\` টাইপ ব্যবহার করে মনে করা এটি একটি খালি অবজেক্ট বোঝায়। টাইপস্ক্রিপ্টে \\\`{}\\\` যেকোনো স্ট্রিং বা নাম্বারকেও আর্গুমেন্ট হিসেবে নিয়ে নেয়।

### কোড উদাহরণ (Code Example)
\\\`\\\`\\\`typescript
// object টাইপ: কেবল নন-প্রিমিটিভ
let nonPrimitive: object;
nonPrimitive = { id: 1 }; // ভ্যালিড
nonPrimitive = [1, 2, 3]; // ভ্যালিড
// nonPrimitive = "text"; // কম্পাইলার এরর: Type 'string' is not assignable to type 'object'.

// {} টাইপ: null/undefined বাদে সব আর্গুমেন্ট নেবে
let emptyObj: {};
emptyObj = "text"; // ভ্যালিড!
emptyObj = 10; // ভ্যালিড!
// emptyObj = null; // কম্পাইলার এরর দেবে
\`\`\``
  }
];
