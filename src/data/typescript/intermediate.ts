import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'typescript-31',
    title: 'What are the main differences between Interfaces and Type Aliases?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Interfaces', 'Type Aliases', 'Architecture'],
    enAnswer: 'Interfaces are primarily used to define object shapes and support declaration merging. Type Aliases can define unions, primitives, tuples, and mapped types, but cannot be merged.',
    bnAnswer: 'ইন্টারফেস মূলত অবজেক্টের শেপ সংজ্ঞায়িত করতে ব্যবহৃত হয় এবং ডিক্লেয়ারেশন মার্জিং সমর্থন করে। টাইপ অ্যালিয়াস ইউনিয়ন, প্রিমিটিভ, টাপল এবং ম্যাপড টাইপ তৈরি করতে পারে কিন্তু মার্জ করা যায় না।',
    enExplanation: `### Explanation
- **Declaration Merging**: Two interfaces with the same name are merged into one. Typing the same Type Alias twice results in a duplicate identifier error.
- **Syntax & Extensibility**: Interfaces extend other interfaces using the \`extends\` keyword. Type aliases extend other types using intersection (\`&\`).
- **Capabilities**: Type Aliases can represent union types, intersection types, primitives, and tuples directly. Interfaces are strictly limited to object types and function shapes.

### Real-World Example
When writing a library, export configurations as \`interface\`s so that consumers can inject custom properties using declaration merging. For private component props or state unions, use a \`type\` alias.

### Best Practice
Use \`interface\` for public API contracts and object shapes. Use \`type\` for union/intersection types, primitives, tuples, or complex utility mappings.

### Common Mistakes
Trying to use declaration merging with a type alias. This causes compilation errors like \`Duplicate identifier 'User'\`.

### Code Example
\`\`\`typescript
// Interface Declaration Merging (Valid)
interface User {
  name: string;
}
interface User {
  role: 'admin' | 'user';
}
const user: User = { name: "Rohit", role: "admin" }; // Works!

// Type Alias Union (Valid, not possible with Interface)
type Status = 'pending' | 'success' | 'failed';
type ID = string | number;

// Type Extension via Intersection
type AdminUser = User & { permissions: string[] };
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ডিক্লেয়ারেশন মার্জিং (Declaration Merging)**: একই নামের দুটি ইন্টারফেস স্বয়ংক্রিয়ভাবে একত্রিত (merge) হয়ে যায়। কিন্তু একই নামের টাইপ অ্যালিয়াস দ্বিতীয়বার ঘোষণা করলে এরর দেখাবে।
- **সিনট্যাক্স ও এক্সটেনসিবিলিটি**: ইন্টারফেস অন্য ইন্টারফেসকে \`extends\` কি-ওয়ার্ড দিয়ে এক্সটেন্ড করে। টাইপ অ্যালিয়াস ইন্টারসেকশন (\`&\`) ব্যবহার করে অন্য টাইপ এক্সটেন্ড করে।
- **দক্ষতা**: টাইপ অ্যালিয়াস সরাসরি ইউনিয়ন, ইন্টারসেকশন, প্রিমিটিভ এবং টাপল টাইপ তৈরি করতে পারে। ইন্টারফেস কেবল অবজেক্ট এবং ফাংশনের শেপ তৈরি করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ওপেন সোর্স লাইব্রেরি লেখার সময় পাবলিক কনফিগারেশনগুলো \`interface\` হিসেবে এক্সপোর্ট করুন যাতে ব্যবহারকারীরা ডিক্লেয়ারেশন মার্জিং ব্যবহার করে নিজেদের কাস্টম প্রোপার্টি অ্যাড করতে পারে। লোকাল স্টেট বা ইউনিয়ন প্রপসের জন্য \`type\` ব্যবহার করুন।

### উত্তম অনুশীলন (Best Practice)
পাবলিক API কন্টাক্ট এবং অবজেক্ট শেপের জন্য \`interface\` ব্যবহার করুন। ইউনিয়ন, ইন্টারসেকশন, প্রিমিটিভ, টাপল বা জটিল ইউটিলিটি ম্যাপিংয়ের জন্য \`type\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ অ্যালিয়াসের সাথে ডিক্লেয়ারেশন মার্জিং করার চেষ্টা করা। এটি \`Duplicate identifier 'User'\` এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইন্টারফেস ডিক্লেয়ারেশন মার্জিং (ভ্যালিড)
interface User {
  name: string;
}
interface User {
  role: 'admin' | 'user';
}
const user: User = { name: "Rohit", role: "admin" }; // সঠিকভাবে কাজ করবে

// টাইপ অ্যালিয়াস ইউনিয়ন (ভ্যালিড, ইন্টারফেসে সম্ভব নয়)
type Status = 'pending' | 'success' | 'failed';
type ID = string | number;

// ইন্টারসেকশন দিয়ে টাইপ এক্সটেনশন
type AdminUser = User & { permissions: string[] };
\`\`\``
  },
  {
    id: 'typescript-32',
    title: 'Explain Generics and how they provide reusable components.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Generics', 'Reusable Code'],
    enAnswer: 'Generics allow components to work with a variety of types rather than a single one, preserving the specific type information of the passed arguments at compile time.',
    bnAnswer: 'জেনেরিকস কম্পোনেন্টগুলোকে একক টাইপের পরিবর্তে বিভিন্ন টাইপ নিয়ে কাজ করার সুবিধা দেয়, যার ফলে কম্পাইল টাইমে পাস করা আর্গুমেন্টের নির্দিষ্ট টাইপ ইনফরমেশন বজায় থাকে।',
    enExplanation: `### Explanation
Generics introduce a type variable (commonly \`T\`) that acts as a placeholder for a type. When the function, class, or interface is invoked, the actual type is captured and enforced:
- **Type Safety**: Avoids using \`any\` or generic object types, keeping the return values strongly typed.
- **Code Reuse**: Write an algorithm once and apply it to numbers, strings, or complex user-defined objects.

### Real-World Example
An API response wrapper. Instead of writing separate wrapper types for Users, Products, and Orders, a single generic wrapper \`ApiResponse<T>\` handles all cases with strict typing.

### Best Practice
Use descriptive names for type parameters if they convey meaning, e.g., \`TData\` instead of just \`T\` if there are multiple generics.

### Common Mistakes
Using generics where type inference or union types are sufficient, which adds unnecessary complexity to the codebase.

### Code Example
\`\`\`typescript
// Generic Interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

// Generic Function
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // Type is inferred as 'number'

const strings = ["a", "b", "c"];
const firstStr = getFirstElement(strings); // Type is inferred as 'string'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জেনেরিকস কোডে একটি টাইপ ভ্যারিয়েবল (সাধারণত \`T\`) নিয়ে আসে যা কোনো একটি টাইপের প্লেসহোল্ডার হিসেবে কাজ করে। যখন ফাংশন, ক্লাস বা ইন্টারফেস কল করা হয়, তখন আসল টাইপটি ক্যাপচার এবং এনফোর্স করা হয়:
- **টাইপ সেফটি**: এটি \`any\` ব্যবহার না করে রিটার্ন ভ্যালুর টাইপ সিকিউর রাখে।
- **কোড রিইউজেবিলিটি**: কোড একবার লিখে তা নম্বর, স্ট্রিং বা অন্য যেকোনো জটিল অবজেক্টের জন্য ব্যবহার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি API রেসপন্স র‍্যাপার। ইউজার, প্রোডাক্ট বা অর্ডারের জন্য আলাদা আলাদা র‍্যাপার টাইপ না লিখে, একটি জেনেরিক র‍্যাপার \`ApiResponse<T>\` দিয়ে সব রেসপন্সের ডাটা টাইপ সেফ করা সম্ভব।

### উত্তম অনুশীলন (Best Practice)
একাধিক জেনেরিক ভ্যারিয়েবল থাকলে সাধারণ \`T\` এর বদলে অর্থপূর্ণ নাম ব্যবহার করুন, যেমন ডাটা রিসিভ করার জন্য \`TData\`।

### সাধারণ ভুলসমূহ (Common Mistakes)
যেখানে টাইপ ইনফারেন্স বা ইউনিয়ন টাইপ ব্যবহার করলেই হয়ে যায়, সেখানে জোর করে জেনেরিকস ব্যবহার করে কোডকে জটিল করা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// জেনেরিক ইন্টারফেস
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

// জেনেরিক ফাংশন
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // টাইপ স্বয়ংক্রিয়ভাবে 'number' হিসেবে ইনফার হবে

const strings = ["a", "b", "c"];
const firstStr = getFirstElement(strings); // টাইপ স্বয়ংক্রিয়ভাবে 'string' হিসেবে ইনফার হবে
\`\`\``
  },
  {
    id: 'typescript-33',
    title: 'How do Generic Constraints work in TypeScript?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Generics', 'Constraints', 'Extends'],
    enAnswer: 'Generic Constraints limit the types that a generic type parameter can accept using the extends keyword, allowing access to specific properties of that type constraint.',
    bnAnswer: 'জেনেরিক কনস্ট্রেইন্টস extends কি-ওয়ার্ড ব্যবহার করে জেনেরিক টাইপ প্যারামিটারের গ্রহণযোগ্য টাইপ সীমাবদ্ধ করে, যা ওই নির্দিষ্ট টাইপের প্রোপার্টিগুলোতে অ্যাক্সেসের অনুমতি দেয়।',
    enExplanation: `### Explanation
By default, a generic parameter \`T\` can be absolutely anything. To ensure that \`T\` contains specific properties (like a \`.length\` property or an \`id\` fields), we constrain it using the \`extends\` keyword:
- **Syntax**: \`<T extends ConstraintType>\`
- **Access Safety**: The compiler permits accessing keys defined on \`ConstraintType\` inside the generic implementation.

### Real-World Example
In a database wrapper function, to write a generic update helper, you must constrain the document type \`T\` to extend an object containing an \`id: string\` property.

### Best Practice
Keep constraints as narrow as possible to ensure flexibility, but broad enough to access needed attributes safely.

### Common Mistakes
Forgetting the \`extends\` keyword and trying to access properties of a generic type, which causes compilation error \`Property 'length' does not exist on type 'T'\`.

### Code Example
\`\`\`typescript
interface HasLength {
  length: number;
}

// Generic function with constraint
function logLength<T extends HasLength>(arg: T): number {
  console.log(arg.length); // Allowed because of the constraint
  return arg.length;
}

logLength("hello"); // Valid (strings have .length)
logLength([1, 2, 3]); // Valid (arrays have .length)
// logLength(123); // Error: Argument of type 'number' is not assignable to 'HasLength'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে, একটি জেনেরিক প্যারামিটার \`T\` যেকোনো টাইপ হতে পারে। তবে আমরা যদি নিশ্চিত করতে চাই যে \`T\` এর ভেতরে নির্দিষ্ট কিছু প্রোপার্টি (যেমন \`.length\` বা \`id\`) থাকবেই, তবে আমরা \`extends\` কি-ওয়ার্ড দিয়ে তা লিমিট করতে পারি:
- **সিনট্যাক্স**: \`<T extends ConstraintType>\`
- **অ্যাক্সেস সেফটি**: জেনেরিক ইমপ্লিমেন্টেশনের ভেতরে কম্পাইলার শুধুমাত্র সেই কনস্ট্রেইন্টের প্রোপার্টিগুলো ব্যবহার করতে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডাটাবেজ র‍্যাপার ফাংশনে কাস্টম ডকুমেন্ট আপডেট করার জন্য জেনেরিক হেল্পার টাইপ তৈরি করতে চাইলে, জেনেরিক টাইপ \`T\` কে এমন একটি অবজেক্ট হতে হবে যার একটি \`id: string\` প্রোপার্টি আছে।

### উত্তম অনুশীলন (Best Practice)
কনস্ট্রেইন্টকে যতটুকু সম্ভব ছোট রাখুন যাতে নমনীয়তা থাকে, কিন্তু আপনার প্রয়োজনীয় প্রোপার্টিগুলোতে অ্যাক্সেস পাওয়ার জন্য যথেষ্ট হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`extends\` ব্যবহার না করেই জেনেরিক টাইপের প্রোপার্টি অ্যাক্সেস করার চেষ্টা করা। এটি \`Property 'length' does not exist on type 'T'\` এরর দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface HasLength {
  length: number;
}

// কনস্ট্রেইন্ট সহ জেনেরিক ফাংশন
function logLength<T extends HasLength>(arg: T): number {
  console.log(arg.length); // কনস্ট্রেইন্টের কারণে এটি বৈধ
  return arg.length;
}

logLength("hello"); // ভ্যালিড (স্ট্রিং-এ .length আছে)
logLength([1, 2, 3]); // ভ্যালিড (অ্যারে-তে .length আছে)
// logLength(123); // এরর: Argument of type 'number' is not assignable to 'HasLength'
\`\`\``
  },
  {
    id: 'typescript-34',
    title: 'Explain Type Narrowing and how to perform it using typeof, instanceof, and in.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Type Narrowing', 'Type Guards'],
    enAnswer: 'Type Narrowing is the process of moving from a less precise type to a more precise one using runtime checks like typeof (primitives), instanceof (classes), and in (objects).',
    bnAnswer: 'টাইপ ন্যারোইং হলো রানটাইম চেকের মাধ্যমে একটি কম সুনির্দিষ্ট টাইপ থেকে বেশি সুনির্দিষ্ট টাইপে রূপান্তর করা। এর জন্য typeof (প্রিমিটিভ), instanceof (ক্লাস), এবং in (অবজেক্ট) ব্যবহার করা হয়।',
    enExplanation: `### Explanation
Type narrowing allows writing dynamic, type-safe structures by inspecting values at runtime:
- **\`typeof\`**: Used to check primitives (\`string\`, \`number\`, \`boolean\`, \`symbol\`, \`undefined\`, \`object\`, \`function\`).
- **\`instanceof\`**: Checks if an object is an instance of a specific class.
- **\`in\`**: Checks if a property exists on an object.

### Real-World Example
Parsing mixed input types from API structures or form fields. You can narrow down whether you received a raw JSON string or a parsed object, or if a class instances is passed.

### Best Practice
Combine narrowing guards with strict conditional blocks to handle all possible branches of a union type, ensuring no edge case is left unhandled.

### Common Mistakes
Using \`typeof\` on arrays and expecting \`"array"\` instead of \`"object"\`, which causes logic failures.

### Code Example
\`\`\`typescript
class Admin {
  manageUsers() { console.log("Managing..."); }
}
class RegularUser {
  viewProfile() { console.log("Viewing..."); }
}

function handleUser(user: Admin | RegularUser | { guestName: string }) {
  if (user instanceof Admin) {
    user.manageUsers(); // Narrowed to Admin
  } else if (user instanceof RegularUser) {
    user.viewProfile(); // Narrowed to RegularUser
  } else if ('guestName' in user) {
    console.log("Guest name:", user.guestName); // Narrowed to guest object
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপ ন্যারোইং রানটাইমে ভ্যালু চেক করে একটি টাইপকে সুনির্দিষ্ট করতে সাহায্য করে:
- **\`typeof\`**: প্রিমিটিভ টাইপসমূহ (\`string\`, \`number\` ইত্যাদি) চেক করতে ব্যবহৃত হয়।
- **\`instanceof\`**: কোনো অবজেক্ট নির্দিষ্ট ক্লাসের ইনস্ট্যান্স কিনা তা পরীক্ষা করে।
- **\`in\`**: অবজেক্টের মধ্যে কোনো নির্দিষ্ট প্রোপার্টি আছে কিনা তা চেক করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
API রেসপন্স বা ফর্ম ইনপুটের মিক্সড টাইপ পার্স করার সময়। আপনি ইনপুটে র স্ট্রিং পেয়েছেন নাকি অবজেক্ট পেয়েছেন, তা রানটাইমে পরীক্ষা করে টাইপ সেফলি ব্যবহার করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
ইউনিয়ন টাইপের সব সম্ভাব্য ব্রাঞ্চগুলো হ্যান্ডেল করতে কন্ডিশনাল ব্লকের সাথে ন্যারোইং ব্যবহার করুন, যাতে কোনো এজ কেস বাদ না পড়ে।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যারের ওপর \`typeof\` ব্যবহার করে \`"array"\` রিটার্ন আশা করা, যেখানে আসলে এটি \`"object"\` রিটার্ন করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
class Admin {
  manageUsers() { console.log("Managing..."); }
}
class RegularUser {
  viewProfile() { console.log("Viewing..."); }
}

function handleUser(user: Admin | RegularUser | { guestName: string }) {
  if (user instanceof Admin) {
    user.manageUsers(); // Admin টাইপে ন্যারো ডাউন করা হয়েছে
  } else if (user instanceof RegularUser) {
    user.viewProfile(); // RegularUser টাইপে ন্যারো ডাউন করা হয়েছে
  } else if ('guestName' in user) {
    console.log("Guest name:", user.guestName); // গেস্ট অবজেক্টে ন্যারো ডাউন করা হয়েছে
  }
}
\`\`\``
  },
  {
    id: 'typescript-35',
    title: 'What is a Custom Type Guard and how do you write a Type Predicate?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Type Guards', 'Type Predicates'],
    enAnswer: 'A Custom Type Guard is a function whose return type is a Type Predicate of the form parameterName is Type, allowing custom conditional logic to narrow types.',
    bnAnswer: 'কাস্টম টাইপ গার্ড হলো এমন একটি ফাংশন যার রিটার্ন টাইপ হলো parameterName is Type ফ্যান্টাসির একটি টাইপ প্রেডিকেট, যা কাস্টম কন্ডিশনাল লজিকের মাধ্যমে টাইপ ন্যারো করার সুবিধা দেয়।',
    enExplanation: `### Explanation
Standard Type Guards are built-in (\`typeof\`, \`instanceof\`). However, when validating objects or complex shapes, built-in guards aren't enough. We write a custom guard function:
- **Type Predicate**: The return type is defined as \`parameterName is SpecificType\`.
- **Function Execution**: If the function returns \`true\`, TypeScript narrows the type of the argument to \`SpecificType\` in the executing code block.

### Real-World Example
Validating API responses. If an API returns a union of success object or error details, a custom guard checks the presence of distinct properties and casts the type context immediately.

### Best Practice
Keep type guards simple and pure. Avoid mutations inside the guard function to prevent runtime-compile desynchronizations.

### Common Mistakes
Declaring the return type as \`boolean\` instead of a type predicate. If you write \`: boolean\`, TypeScript will not narrow the type in the conditional block.

### Code Example
\`\`\`typescript
interface Bird {
  fly: () => void;
  layEggs: () => void;
}
interface Fish {
  swim: () => void;
  layEggs: () => void;
}

// Custom Type Guard with Type Predicate
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Bird | Fish) {
  if (isFish(pet)) {
    pet.swim(); // Type is safely Fish inside this block
  } else {
    pet.fly();  // Type is safely Bird
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্ট্যান্ডার্ড টাইপ গার্ডসগুলো বিল্ট-ইন থাকে (\`typeof\`, \`instanceof\`)। কিন্তু কাস্টম অবজেক্ট ভ্যালিডেশনের জন্য এগুলো যথেষ্ট নয়। তাই আমরা কাস্টম গার্ড ফাংশন লিখি:
- **টাইপ প্রেডিকেট (Type Predicate)**: ফাংশনটির রিটার্ন টাইপ \`parameterName is SpecificType\` ফরম্যাটে ডিফাইন করা হয়।
- **কার্যপদ্ধতি**: ফাংশনটি যদি \`true\` রিটার্ন করে, তবে টাইপস্ক্রিপ্ট ইফ-ব্লকের ভেতরে প্যারামিটারটির টাইপকে \`SpecificType\` এ ন্যারো ডাউন করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
API রেসপন্স ভ্যালিডেশনের ক্ষেত্রে। যদি কোনো API থেকে বিভিন্ন টাইপের অবজেক্ট আসে, তবে একটি কাস্টম গার্ড দিয়ে নির্দিষ্ট কি-ওয়ার্ডের উপস্থিতি চেক করে কোডবেসে টাইপ সেফটি নিশ্চিত করা যায়।

### উত্তম অনুশীলন (Best Practice)
টাইপ গার্ড ফাংশনগুলোকে সহজ এবং পিওর (pure) রাখুন। গার্ডের ভেতরে ডাটা মিউটেশন করা থেকে বিরত থাকুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ প্রেডিকেটের বদলে শুধু \`boolean\` টাইপ রিটার্ন দেওয়া। যদি আপনি \`: boolean\` লেখেন, তবে টাইপস্ক্রিপ্ট কন্ডিশনাল ব্লকের ভেতরে টাইপ ন্যারো করবে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Bird {
  fly: () => void;
  layEggs: () => void;
}
interface Fish {
  swim: () => void;
  layEggs: () => void;
}

// টাইপ প্রেডিকেট সহ কাস্টম টাইপ গার্ড
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Bird | Fish) {
  if (isFish(pet)) {
    pet.swim(); // এই ব্লকের ভেতর টাইপ Fish হিসেবে কাজ করবে
  } else {
    pet.fly();  // এই ব্লকের ভেতর টাইপ Bird হিসেবে কাজ করবে
  }
}
\`\`\``
  },
  {
    id: 'typescript-36',
    title: 'What are Discriminated Unions and how do they enforce compile-time exhaustiveness checking?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Discriminated Unions', 'Exhaustiveness Checking', 'Never'],
    enAnswer: 'Discriminated Unions are union types where each type has a common literal property (the discriminant). A switch block can narrow them, and using a never check ensures all cases are handled.',
    bnAnswer: 'ডিসক্রিমিনেটেড ইউনিয়ন হলো এমন ইউনিয়ন টাইপ যেখানে প্রতিটি টাইপের একটি সাধারণ লিটারেল প্রোপার্টি (discriminant) থাকে। switch ব্লক এগুলোকে ন্যারো করতে পারে এবং never চেক দিয়ে নিশ্চিত করা যায় সব কেস হ্যান্ডেল হয়েছে কিনা।',
    enExplanation: `### Explanation
A discriminated union relies on three elements:
1. **Common Literal Property**: A tag or kind field present in all member types.
2. **Union Type**: The type containing all members.
3. **Narrowing Guard**: Typically a \`switch\` or \`if\` statement checking the discriminant tag.
- **Exhaustiveness checking** is enforced by assigning the \`default\` case of the switch to a variable of type \`never\`. If a type is added to the union but not handled, a compilation error triggers.

### Real-World Example
Handling Redux actions or state machine transitions (e.g., loading, success, error state representation in a React UI component).

### Best Practice
Always include an exhaustiveness check using \`never\` in complex unions to prevent future bugs when new statuses are added.

### Common Mistakes
Forgetting the \`default\` check, which allows unhandled states to pass silently through the system and crash at runtime.

### Code Example
\`\`\`typescript
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
একটি ডিসক্রিমিনেটেড ইউনিয়ন তিনটি উপাদানের ওপর নির্ভর করে:
1. **সাধারণ লিটারেল প্রোপার্টি**: একটি সাধারণ ফিল্ড (যেমন tag বা kind) যা ইউনিয়নের প্রতিটি টাইপের মধ্যে থাকবে।
2. **ইউনিয়ন টাইপ**: সব টাইপ যুক্ত করে তৈরি মেইন ইউনিয়ন টাইপ।
3. **ন্যারোইং গার্ড**: সাধারণত একটি \`switch\` বা \`if\` কন্ডিশন যা ওই কমন প্রোপার্টি চেক করে।
- **এক্সহস্টিভনেস চেকিং (Exhaustiveness checking)**: switch ব্লকের \`default\` কেসটিকে একটি \`never\` টাইপ ভ্যারিয়েবলে অ্যাসাইন করে এটি নিশ্চিত করা হয়। যদি ইউনিয়নে নতুন কোনো টাইপ যোগ করা হয় কিন্তু switch-এ হ্যান্ডেল না করা হয়, তবে কম্পাইলার এরর দেবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
Redux অ্যাকশন বা স্টেট মেশিন হ্যান্ডেল করা (যেমন একটি রিঅ্যাক্ট ইউজার ইন্টারফেসে loading, success, error স্টেট ডিক্লেয়ার করা)।

### উত্তম অনুশীলন (Best Practice)
ভবিষ্যতে নতুন টাইপ যোগ করলে এরর এড়াতে কন্ডিশনাল ব্লকের ভেতরে সবসময় \`never\` দিয়ে এক্সহস্টিভনেস চেক ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`default\` কেস বাদ দেওয়া, যার ফলে নতুন কোনো টাইপ যোগ করা হলে সেটি কোনো লজিক ছাড়াই রানটাইমে চলে যায় এবং এরর সৃষ্টি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // এক্সহস্টিভনেস চেকিং
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
\`\`\``
  },
  {
    id: 'typescript-37',
    title: 'Explain Mapped Types and how they are used to transform type structures.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Mapped Types', 'Keyof', 'Metaprogramming'],
    enAnswer: 'Mapped Types allow creating new types by iterating over keys of an existing type, typically using the keyof operator and in syntax.',
    bnAnswer: 'ম্যাপড টাইপস বিদ্যমান টাইপের কি-সমূহ (keys) এর ওপর লুপ বা ইটারেট করে নতুন টাইপ তৈরি করার সুবিধা দেয়, যা সাধারণত keyof এবং in সিনট্যাক্স দিয়ে করা হয়।',
    enExplanation: `### Explanation
Mapped Types allow you to apply transformations to every property of a source type:
- **Syntax**: \`[K in keyof T]\` is equivalent to a \`for...in\` loop for type keys.
- **Dynamic Property Mutation**: Properties can be altered dynamically to make them optional, readonly, nullable, etc.

### Real-World Example
Defining API payloads where you need a strict config object, but also a partial version of that config for patch updates.

### Best Practice
Instead of manually mapping properties, leverage built-in utility types like \`Partial\` or \`Readonly\`, which are built using mapped types under the hood.

### Common Mistakes
Writing heavy, custom mapped types when simpler union types or lookup tables would make the codebase more readable.

### Code Example
\`\`\`typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

interface FeatureFlags {
  darkMode: () => void;
  newUserFlow: () => void;
}

// Converts all function properties to boolean flags
type FeatureOptions = OptionsFlags<FeatureFlags>;
/*
Resulting Type:
{
  darkMode: boolean;
  newUserFlow: boolean;
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ম্যাপড টাইপস কোনো সোর্স টাইপের প্রতিটি প্রোপার্টির ওপর ট্রান্সফরমেশন অ্যাপ্লাই করে নতুন টাইপ তৈরির সুবিধা দেয়:
- **সিনট্যাক্স**: \`[Property in keyof Type]\` টাইপ কি-সমূহের জন্য একটি \`for...in\` লুপের মতো কাজ করে।
- **ডাইনামিক প্রোপার্টি মিউটেশন**: প্রোপার্টিগুলোকে ডাইনামিকালি ঐচ্ছিক (optional), রিডঅনলি (readonly) বা নালেবল (nullable) বানানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি API পে-লোডের ক্ষেত্রে যেখানে আপনার সম্পূর্ণ কনফিগারেশন অবজেক্টের প্রয়োজন, আবার প্যাচ (patch) আপডেটের জন্য সেই কনফিগারেশনের সব প্রোপার্টিকে অপশনাল করার প্রয়োজন হয়।

### উত্তম অনুশীলন (Best Practice)
নিজে নিজে কাস্টম ম্যাপড টাইপ না লিখে বিল্ট-ইন ইউটিলিটি টাইপ যেমন \`Partial\` বা \`Readonly\` ব্যবহার করুন, কারণ এগুলো ম্যাপড টাইপ দিয়েই তৈরি করা।

### সাধারণ ভুলসমূহ (Common Mistakes)
সহজ ইউনিয়ন টাইপ দিয়ে কাজ চালানো সম্ভব হলেও জটিল কাস্টম ম্যাপড টাইপ ব্যবহার করে কোড রিডিবিলিটি নষ্ট করা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

interface FeatureFlags {
  darkMode: () => void;
  newUserFlow: () => void;
}

// সব ফাংশন প্রোপার্টিগুলোকে বুলিয়ান ফ্ল্যাগে কনভার্ট করবে
type FeatureOptions = OptionsFlags<FeatureFlags>;
/*
নতুন টাইপ:
{
  darkMode: boolean;
  newUserFlow: boolean;
}
*/
\`\`\``
  },
  {
    id: 'typescript-38',
    title: 'How do you add or remove modifiers in Mapped Types using + and -?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Mapped Types', 'Modifiers', 'Readonly', 'Optional'],
    enAnswer: 'Modifiers like readonly and ? can be prefixed with + (to add) or - (to remove) during mapped type generation.',
    bnAnswer: 'ম্যাপড টাইপ তৈরির সময় readonly এবং ? প্রোপার্টি মডিফায়ারের শুরুতে + (যুক্ত করতে) অথবা - (বাদ দিতে) ব্যবহার করা যায়।',
    enExplanation: `### Explanation
When defining a mapped type, you can modify flags of the original properties:
- **\`+readonly\` / \`readonly\`**: Makes all mapped properties read-only.
- **\`-readonly\`**: Removes the read-only constraint from properties.
- **\`+?\` / \`?\`**: Makes all mapped properties optional.
- **\`-?\`**: Removes the optional (question mark) modifier, making all properties strictly required.

### Real-World Example
In form-state management libraries, you often need to transform a model with optional properties into a state where every field is required and validated.

### Best Practice
Always use the explicit \`-\` prefix when creating custom utilities that remove constraints (like \`Concrete\` or \`Required\`) to make your intent clear.

### Common Mistakes
Forgetting the \`-\` symbol, which adds the modifier rather than stripping it.

### Code Example
\`\`\`typescript
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

interface LockedUser {
  readonly id: string;
  readonly name?: string;
}

type MutableUser = CreateMutable<LockedUser>; 
// { id: string; name?: string; } (No longer readonly)

type ConcreteUser = Concrete<LockedUser>;
// { readonly id: string; name: string; } (name is now required)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ম্যাপড টাইপ ডিফাইন করার সময় আপনি অরিজিনাল প্রোপার্টির ফ্ল্যাগগুলো মডিফাই করতে পারেন:
- **\`+readonly\` / \`readonly\`**: সব ম্যাপড প্রোপার্টিকে রিড-অনলি বানায়।
- **\`-readonly\`**: প্রোপার্টি থেকে রিড-অনলি কনস্ট্রেইন্ট সরিয়ে দেয়।
- **\`+?\` / \`?\`**: সব ম্যাপড প্রোপার্টিকে অপশনাল করে।
- **\`-?\`**: অপশনাল মডিফায়ার সরিয়ে সব প্রোপার্টিকে আবশ্যিক (required) করে তোলে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ফর্ম-স্টেট ম্যানেজমেন্ট লাইব্রেরিতে অনেক সময় অপশনাল প্রোপার্টি যুক্ত কোনো মডেলকে এমন একটি স্টেটে রূপান্তর করতে হয় যেখানে প্রতিটি ফিল্ড রিকোয়ার্ড ও ভ্যালিডেট করা বাধ্যতামূলক।

### উত্তম অনুশীলন (Best Practice)
কনস্ট্রেইন্ট রিমুভ করার জন্য কাস্টম ইউটিলিটি (যেমন \`Concrete\` বা \`Required\`) তৈরির সময় স্পষ্টভাবে \`-\` প্রিফিক্স ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`-\` প্রিফিক্স দিতে ভুলে যাওয়া, যার ফলে রিমুভ হওয়ার বদলে উল্টো প্রোপার্টি যুক্ত হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// টাইপের প্রোপার্টি থেকে 'readonly' অ্যাট্রিবিউট রিমুভ করে
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

// টাইপের প্রোপার্টি থেকে 'optional' অ্যাট্রিবিউট রিমুভ করে
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

interface LockedUser {
  readonly id: string;
  readonly name?: string;
}

type MutableUser = CreateMutable<LockedUser>; 
// { id: string; name?: string; } (readonly নেই)

type ConcreteUser = Concrete<LockedUser>;
// { readonly id: string; name: string; } (name এখন রিকোয়ার্ড)
\`\`\``
  },
  {
    id: 'typescript-39',
    title: 'Explain Conditional Types and how they work in TypeScript.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Conditional Types', 'Generics'],
    enAnswer: 'Conditional Types select one of two types based on a relationship test expressed as a ternary operator: T extends U ? X : Y.',
    bnAnswer: 'কন্ডিশনাল টাইপস একটি টার্নারি অপারেটর T extends U ? X : Y এর মতো রিলেশনশিপ টেস্টের ওপর ভিত্তি করে দুটি টাইপের মধ্যে যেকোনো একটি টাইপ নির্বাচন করে।',
    enExplanation: `### Explanation
Conditional Types behave like conditional expressions in JavaScript but operate on types:
- **Syntax**: \`T extends U ? X : Y\`
- **Resolution**: If the type \`T\` is assignable to \`U\`, the type resolves to \`X\`, otherwise to \`Y\`.
- **Power**: They allow creating dynamic types that change shape depending on generic parameters.

### Real-World Example
An API function that returns either a \`string\` or a \`number\` based on the input argument flags (e.g. format option as JSON or Text).

### Best Practice
Combine conditional types with type parameters to ensure type inference matches runtime behavior.

### Common Mistakes
Creating deeply nested conditional types, making type diagnostics extremely difficult to read and debug for other team members.

### Code Example
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Real-world application
interface IdLabel { id: number }
interface NameLabel { name: string }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "Unimplemented";
}

const label1 = createLabel("Rohit"); // Inferred as NameLabel
const label2 = createLabel(101);     // Inferred as IdLabel
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কন্ডিশনাল টাইপস জাভাস্ক্রিপ্টের কন্ডিশনাল এক্সপ্রেশনের মতো কাজ করে, তবে এগুলো টাইপের ওপর চলে:
- **সিনট্যাক্স**: \`T extends U ? X : Y\`
- **রেজোলিউশন**: যদি টাইপ \`T\`, \`U\` এর সমতুল্য বা অ্যাসাইনযোগ্য হয়, তবে টাইপটি \`X\` হবে, অন্যথায় \`Y\` হবে।
- **ক্ষমতা**: এগুলো জেনেরিক প্যারামিটারের ওপর ভিত্তি করে ডাইনামিক টাইপ তৈরি করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি API ফাংশন যা ইনপুট আর্গুমেন্টের ওপর ভিত্তি করে \`string\` অথবা \`number\` রিটার্ন করে (যেমন ফরম্যাট অপশন JSON নাকি Text)।

### উত্তম অনুশীলন (Best Practice)
রানটাইম বিহেভিয়ারের সাথে টাইপ ইনফারেন্সের মিল রাখতে টাইপ প্যারামিটারের সাথে কন্ডিশনাল টাইপস কম্বাইন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অত্যধিক নেস্টেড কন্ডিশনাল টাইপস তৈরি করা, যা ডিবাগ করা এবং অন্য ডেভেলপারদের জন্য বোঝা কঠিন করে তোলে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// বাস্তবসম্মত উদাহরণ
interface IdLabel { id: number }
interface NameLabel { name: string }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "Unimplemented";
}

const label1 = createLabel("Rohit"); // NameLabel হিসেবে ইনফার হবে
const label2 = createLabel(101);     // IdLabel হিসেবে ইনফার হবে
\`\`\``
  },
  {
    id: 'typescript-40',
    title: 'What are Template Literal Types and how are they used?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Template Literal Types', 'String Manipulation'],
    enAnswer: 'Template Literal Types build on string literal types and allow string composition through template literal syntax, producing new union types from cross-products.',
    bnAnswer: 'টেমপ্লেট লিটারেল টাইপস স্ট্রিং লিটারেল টাইপের ওপর ভিত্তি করে তৈরি এবং টেমপ্লেট লিটারেল সিনট্যাক্স দিয়ে স্ট্রিং কম্পোজিশনের সুবিধা দেয়, যা নতুন ইউনিয়ন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
Template Literal Types use backticks and syntax similar to JS template literals to define types. When a union type is passed into the template slot, TS automatically generates all possible combinations:
- **Syntax**: \`\${Type}\` within backticks.
- **Cross-Products**: Combining two unions yields all combinations.

### Real-World Example
CSS margins/paddings or action type dispatchers. Generating combined classes like \`margin-top\`, \`margin-left\`, \`padding-top\`, \`padding-left\` from base directions and prefixes.

### Best Practice
Use template literal types to clean up legacy string formats or event structures, keeping string APIs strictly type-safe.

### Common Mistakes
Generating thousands of union members by mixing large union types, which slows down the TypeScript compiler.

### Code Example
\`\`\`typescript
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Size = 'sm' | 'md' | 'lg';

// Combines two unions dynamically
type MarginClass = \`margin-\${Direction}-\${Size}\`;
// Inferred as: "margin-top-sm" | "margin-top-md" | "margin-top-lg" | "margin-right-sm" | ...

// Event handling example
type EventName = 'click' | 'change';
type OnEvent = \`on\${Capitalize<EventName>}\`; // "onClick" | "onChange"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টেমপ্লেট লিটারেল টাইপস টাইপ ডিফাইন করার জন্য ব্যাকটিক এবং JS টেমপ্লেট লিটারেলের মতো সিনট্যাক্স ব্যবহার করে। টেমপ্লেট স্লটে ইউনিয়ন টাইপ পাস করা হলে, TS স্বয়ংক্রিয়ভাবে সব সম্ভাব্য কম্বিনেশন তৈরি করে:
- **সিনট্যাক্স**: ব্যাকটিকের ভেতরে \`\${Type}\`।
- **কম্বিনেশন**: দুটি ইউনিয়নকে একত্রিত করলে সব কম্বিনেশন তৈরি হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
CSS মার্জিন/প্যাডিং বা অ্যাকশন টাইপ হ্যান্ডলার। বেস ডিরেকশন ও প্রিফিক্স থেকে ডাইনামিকালি \`margin-top\`, \`margin-left\` এর মতো কম্বাইন্ড ক্লাস জেনারেট করা।

### উত্তম অনুশীলন (Best Practice)
স্ট্রিং API-কে টাইপ সেফ রাখতে এবং লিগ্যাসি স্ট্রিং ফরম্যাট বা ইভেন্ট স্ট্রাকচার পরিষ্কার করতে টেমপ্লেট লিটারেল টাইপ ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অত্যধিক বড় বড় ইউনিয়ন কম্বাইন করা, যা কম্পাইলারকে হাজার হাজার টাইপ তৈরি করতে বাধ্য করে এবং কম্পাইলেশন ধীরগতির করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Size = 'sm' | 'md' | 'lg';

// ইউনিয়নগুলোকে ডাইনামিকালি কম্বাইন করে
type MarginClass = \`margin-\${Direction}-\${Size}\`;
// তৈরি হবে: "margin-top-sm" | "margin-top-md" | "margin-top-lg" | "margin-right-sm" | ...

// ইভেন্ট হ্যান্ডলিং উদাহরণ
type EventName = 'click' | 'change';
type OnEvent = \`on\${Capitalize<EventName>}\`; // "onClick" | "onChange"
\`\`\``
  },
  {
    id: 'typescript-41',
    title: 'Explain Lookup Types and the keyof operator context.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Lookup Types', 'Keyof', 'Types'],
    enAnswer: 'Lookup types retrieve the type of a specific property using indexed access syntax (T[K]). The keyof operator produces a union of all keys of an object type.',
    bnAnswer: 'লুকআপ টাইপস ইনডেক্সড অ্যাক্সেস সিনট্যাক্স (T[K]) ব্যবহার করে নির্দিষ্ট প্রোপার্টির টাইপ নিয়ে আসে। keyof অপারেটর একটি অবজেক্ট টাইপের সব কি-সমূহের একটি ইউনিয়ন তৈরি করে।',
    enExplanation: `### Explanation
- **\`keyof\`**: Takes an object type and produces a union of its keys (strings or numbers).
- **Indexed Access (\`T[K]\`)**: Behaves like looking up a property on an object, but retrieves the type instead of the value.
- Combine these to retrieve specific nested types without redefining them.

### Real-World Example
In config objects or state systems, pulling out a sub-state configuration type directly from the master application configuration type.

### Best Practice
Use lookup types to ensure that whenever the source interface changes, the dependent property types update automatically.

### Common Mistakes
Passing a value instead of a type inside the indexed access brackets, e.g. \`User["role"]\` is valid, but \`User[role]\` (where role is a variable) causes a compiler error.

### Code Example
\`\`\`typescript
interface UserConfig {
  id: number;
  profile: {
    avatar: string;
    bio: string;
  };
  status: 'active' | 'inactive';
}

// keyof Usage
type ConfigKeys = keyof UserConfig; // 'id' | 'profile' | 'status'

// Lookup Type (Indexed Access)
type ProfileType = UserConfig['profile']; // { avatar: string; bio: string; }
type StatusType = UserConfig['status'];   // 'active' | 'inactive'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`keyof\`**: কোনো অবজেক্ট টাইপ নিয়ে তার কি-সমূহের (keys) একটি ইউনিয়ন তৈরি করে।
- **ইনডেক্সড অ্যাক্সেস (\`T[K]\`)**: অবজেক্টের প্রোপার্টি লুকআপের মতো কাজ করে, তবে এটি ভ্যালুর বদলে টাইপ নিয়ে আসে।
- পুনরায় নতুন টাইপ ডিফাইন না করেই এই দুটি ব্যবহার করে নেস্টেড টাইপ বের করে আনা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কনফিগারেশন অবজেক্ট বা স্টেট সিস্টেমে, মাস্টার অ্যাপ্লিকেশন কনফিগারেশন টাইপ থেকে সরাসরি একটি সাব-স্টেট কনফিগারেশন টাইপ বের করে আনা।

### উত্তম অনুশীলন (Best Practice)
সোর্স ইন্টারফেস পরিবর্তন হওয়ার সাথে সাথে ডিপেন্ডেন্ট প্রোপার্টির টাইপ যেন স্বয়ংক্রিয়ভাবে আপডেট হয় তা নিশ্চিত করতে লুকআপ টাইপ ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনডেক্সড অ্যাক্সেস ব্র্যাকেটের ভেতর টাইপের বদলে ভ্যারিয়েবল পাস করা, যেমন \`User["role"]\` বৈধ কিন্তু \`User[role]\` (যেখানে role একটি ভ্যারিয়েবল) কম্পাইল এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface UserConfig {
  id: number;
  profile: {
    avatar: string;
    bio: string;
  };
  status: 'active' | 'inactive';
}

// keyof এর ব্যবহার
type ConfigKeys = keyof UserConfig; // 'id' | 'profile' | 'status'

// লুকআপ টাইপ (ইনডেক্সড অ্যাক্সেস)
type ProfileType = UserConfig['profile']; // { avatar: string; bio: string; }
type StatusType = UserConfig['status'];   // 'active' | 'inactive'
\`\`\``
  },
  {
    id: 'typescript-42',
    title: 'Explain the Partial and Required Utility Types.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Partial', 'Required'],
    enAnswer: 'Partial constructs a type with all properties of T set to optional. Required constructs a type with all properties of T set to required.',
    bnAnswer: 'Partial টাইপ T-এর সব প্রোপার্টি অপশনাল হিসেবে সেট করে একটি নতুন টাইপ তৈরি করে। Required টাইপ T-এর সব প্রোপার্টি রিকোয়ার্ড হিসেবে সেট করে নতুন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
These built-in mapped types modify the flags of an existing type:
- **\`Partial<T>\`**: Adds \`?\` to all keys. Equivalent to \`{ [P in keyof T]?: T[P] }\`.
- **\`Required<T>\`**: Removes \`?\` from all keys. Equivalent to \`{ [P in keyof T]-?: T[P] }\`.

### Real-World Example
In update API endpoints (e.g. PATCH requests), parameters are usually \`Partial<Todo>\`. However, when processing the item in the database, you need to assert a \`Required<Todo>\` schema.

### Best Practice
Utilize \`Partial\` for form updates and patch states, and \`Required\` for internal configurations that must have defaults loaded.

### Common Mistakes
Expecting \`Partial\` to apply recursively. \`Partial\` is shallow; it only makes top-level properties optional.

### Code Example
\`\`\`typescript
interface Todo {
  title: string;
  description?: string;
  completed: boolean;
}

// Partial
type TodoUpdate = Partial<Todo>;
/*
{
  title?: string;
  description?: string;
  completed?: boolean;
}
*/

// Required
type strictTodo = Required<Todo>;
/*
{
  title: string;
  description: string; // no longer optional!
  completed: boolean;
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই বিল্ট-ইন ম্যাপড টাইপগুলো বিদ্যমান টাইপের অপশনাল ফ্ল্যাগ মডিফাই করে:
- **\`Partial<T>\`**: সব কি-তে \`?\` যোগ করে। এটি \`{ [P in keyof T]?: T[P] }\` এর সমতুল্য।
- **\`Required<T>\`**: সব কি থেকে \`?\` রিমুভ করে। এটি \`{ [P in keyof T]-?: T[P] }\` এর সমতুল্য।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
আপডেট API এন্ডপয়েন্টে (যেমন PATCH রিকোয়েস্ট) প্যারামিটার সাধারণত \`Partial<Todo>\` হয়। তবে ডাটাবেজে প্রসেস করার সময় ডিফল্ট ভ্যালুসহ \`Required<Todo>\` স্কিমা প্রয়োজন হতে পারে।

### উত্তম অনুশীলন (Best Practice)
ফর্ম আপডেট এবং প্যাচ স্টেটের জন্য \`Partial\` এবং ডিফল্ট কনফিগারেশন লোড করার সময় সব ফিল্ড নিশ্চিত করতে \`Required\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Partial\` রিকার্সিভলি (nested) কাজ করবে মনে করা। \`Partial\` শুধুমাত্র টপ-লেভেল প্রোপার্টিগুলোকে অপশনাল করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Todo {
  title: string;
  description?: string;
  completed: boolean;
}

// Partial
type TodoUpdate = Partial<Todo>;
/*
{
  title?: string;
  description?: string;
  completed?: boolean;
}
*/

// Required
type strictTodo = Required<Todo>;
/*
{
  title: string;
  description: string; // আর অপশনাল নেই!
  completed: boolean;
}
*/
\`\`\``
  },
  {
    id: 'typescript-43',
    title: 'Explain the Readonly Utility Type and readonly arrays.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Readonly', 'Immutability'],
    enAnswer: 'Readonly constructs a type with all properties of T set to read-only, preventing reassignment. ReadonlyArray prevents mutations on arrays.',
    bnAnswer: 'Readonly টাইপ T-এর সব প্রোপার্টিকে রিড-অনলি হিসেবে সেট করে যা রিঅ্যাসাইনমেন্ট রোধ করে। ReadonlyArray অ্যারেকে মিউটেট করা থেকে বিরত রাখে।',
    enExplanation: `### Explanation
- **\`Readonly<T>\`**: Prevents assigning new values to properties of the object at compile time.
- **\`ReadonlyArray<T>\` / \`readonly T[]\`**: Disables mutating array methods (like \`push\`, \`pop\`, \`splice\`) and prevents element reassignments.

### Real-World Example
In Redux state or React context configuration where you want to enforce immutability strictly. Accidental assignments or array pushes will cause compilation failures.

### Best Practice
Use \`readonly\` parameters in functions that take arrays but should not modify them, preserving reference integrity.

### Common Mistakes
Forgetting that \`Readonly\` is shallow and properties inside nested objects can still be mutated at runtime.

### Code Example
\`\`\`typescript
interface Config {
  apiKey: string;
}

const myConfig: Readonly<Config> = { apiKey: "secret_123" };
// myConfig.apiKey = "new_key"; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// Readonly Array
const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`Readonly<T>\`**: অবজেক্টের প্রোপার্টিগুলোতে নতুন মান অ্যাসাইন করা কম্পাইল টাইমে বন্ধ করে দেয়।
- **\`ReadonlyArray<T>\` / \`readonly T[]\`**: অ্যারের মিউটেশন মেথডগুলো (যেমন \`push\`, \`pop\`, \`splice\`) নিষ্ক্রিয় করে এবং ইনডেক্স রিঅ্যাসাইনমেন্ট রোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
Redux স্টেট বা React কনটেক্সট কনফিগারেশনের ক্ষেত্রে যেখানে ইমিউটেবিলিটি বজায় রাখা জরুরি। ভুলবশত অ্যাসাইনমেন্ট বা অ্যারে পুশ করলে কম্পাইলার তখনই এরর দিবে।

### উত্তম অনুশীলন (Best Practice)
যেসব ফাংশন আর্গুমেন্ট হিসেবে অ্যারে গ্রহণ করে কিন্তু তা পরিবর্তন করা উচিত নয়, সেখানে \`readonly\` প্যারামিটার ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Readonly\` নেস্টেড লেভেলে কাজ করবে মনে করা। এটি শ্যালো (shallow); নেস্টেড অবজেক্টের ভেতর প্রোপার্টিগুলো তবুও মিউটেট করা যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Config {
  apiKey: string;
}

const myConfig: Readonly<Config> = { apiKey: "secret_123" };
// myConfig.apiKey = "new_key"; // এরর: Cannot assign to 'apiKey' because it is a read-only property.

// রিডঅনলি অ্যারে
const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // এরর: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 10; // এরর: Index signature in type 'readonly number[]' only permits reading.
\`\`\``
  },
  {
    id: 'typescript-44',
    title: 'Explain the Record Utility Type.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Record', 'Dictionaries'],
    enAnswer: 'Record<Keys, Type> constructs an object type whose property keys are Keys and whose property values are Type, useful for mapping properties.',
    bnAnswer: 'Record<Keys, Type> এমন একটি অবজেক্ট টাইপ তৈরি করে যার প্রোপার্টি কি-সমূহ (keys) হলো Keys এবং ভ্যালুসমূহ হলো Type, যা ডিকশনারি ম্যাপিংয়ে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
\`Record<K, T>\` is a built-in mapped type used to represent key-value dictionaries.
- **Constraints**: \`K\` must be assignable to \`string | number | symbol\`.
- **Purpose**: Great for mapping key categories to specific configurations or structures.

### Real-World Example
Mapping user roles to their permissions or product categories to their active catalog details.

### Best Practice
Instead of generic objects, always specify \`Record\` types for dictionary objects to keep key lookups safe.

### Common Mistakes
Using \`any\` for values or forgetting to constraint keys using unions, which leads to loose dictionary schemas.

### Code Example
\`\`\`typescript
type UserRole = 'admin' | 'editor' | 'viewer';

interface RoleInfo {
  canDelete: boolean;
  canEdit: boolean;
}

// Maps roles to information configurations
const roleRegistry: Record<UserRole, RoleInfo> = {
  admin: { canDelete: true, canEdit: true },
  editor: { canDelete: false, canEdit: true },
  viewer: { canDelete: false, canEdit: false }
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`Record<K, T>\` একটি বিল্ট-ইন ম্যাপড টাইপ যা কি-ভ্যালু ডিকশনারি প্রকাশে সাহায্য করে।
- **সীমাবদ্ধতা**: \`K\` কে অবশ্যই \`string | number | symbol\` এর সমতুল্য হতে হবে।
- **উদ্দেশ্য**: বিভিন্ন ক্যাটাগরিকে নির্দিষ্ট কনফিগারেশন বা স্ট্রাকচারে ম্যাপ করার জন্য এটি দারুণ কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার রোলকে তাদের পারমিশনের সাথে ম্যাপ করা অথবা প্রোডাক্ট ক্যাটাগরিকে অ্যাক্টিভ ক্যাটালগের সাথে ম্যাপ করা।

### উত্তম অনুশীলন (Best Practice)
জেনেরিক অবজেক্ট লেখার পরিবর্তে সবসময় ডিকশনারি অবজেক্টের জন্য \`Record\` ব্যবহার করুন যাতে কি লুকআপ সেফ থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভ্যালুর জন্য \`any\` ব্যবহার করা বা কি-কে ইউনিয়ন দিয়ে কনস্ট্রেইন্ট না করা, যার ফলে ডিকশনারি স্কিমা দুর্বল হয়ে পড়ে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type UserRole = 'admin' | 'editor' | 'viewer';

interface RoleInfo {
  canDelete: boolean;
  canEdit: boolean;
}

// রোলগুলোকে ইনফরমেশন কনফিগারেশনে ম্যাপ করে
const roleRegistry: Record<UserRole, RoleInfo> = {
  admin: { canDelete: true, canEdit: true },
  editor: { canDelete: false, canEdit: true },
  viewer: { canDelete: false, canEdit: false }
};
\`\`\``
  },
  {
    id: 'typescript-45',
    title: 'Explain the Pick and Omit Utility Types and their differences.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Pick', 'Omit'],
    enAnswer: 'Pick constructs a type by selecting a set of properties Keys from T. Omit constructs a type by removing a set of properties Keys from T.',
    bnAnswer: 'Pick টাইপ T থেকে নির্দিষ্ট কিছু প্রোপার্টি Keys নির্বাচন করে নতুন টাইপ তৈরি করে। Omit টাইপ T থেকে নির্দিষ্ট কিছু প্রোপার্টি Keys বাদ দিয়ে নতুন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
- **\`Pick<T, K>\`**: Selects specific keys from a source type. \`K\` must be keys of \`T\`.
- **\`Omit<T, K>\`**: Removes specific keys from a source type. \`K\` can be any keys (typesafe checks key matches of \`T\`).
- Both utilities help keep types DRY (Don't Repeat Yourself) by reusing core models.

### Real-World Example
When displaying a list of users, you might only need their names and avatars (\`Pick\`). When creating a user form, you might need everything except the auto-generated database \`id\` and \`createdAt\` fields (\`Omit\`).

### Best Practice
Use \`Pick\` when selecting a few keys from a large interface. Use \`Omit\` when removing a few keys from a large interface.

### Common Mistakes
Using \`Omit\` with spelling mistakes in keys. Since \`Omit\` allows arbitrary strings in its union parameter by default, TS won't warn you if you type a non-existent property name.

### Code Example
\`\`\`typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

// Pick: Keeps only name and price
type ProductPreview = Pick<Product, 'name' | 'price'>;

// Omit: Removes id and createdAt
type ProductForm = Omit<Product, 'id' | 'createdAt'>;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`Pick<T, K>\`**: সোর্স টাইপ থেকে নির্দিষ্ট কিছু কি (keys) সিলেক্ট করে। \`K\` কে অবশ্যই \`T\` এর কি হতে হবে।
- **\`Omit<T, K>\`**: সোর্স টাইপ থেকে নির্দিষ্ট কি-সমূহ বাদ দেয়।
- দুটি ইউটিলিটিই একই টাইপ বারবার লেখার হাত থেকে বাচিয়ে কোডকে DRY (Don't Repeat Yourself) রাখতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ব্যবহারকারীদের তালিকা দেখানোর সময় হয়তো কেবল নাম এবং অ্যাভাটার লাগবে (\`Pick\`)। আবার ইউজার ক্রিয়েশন ফর্মের জন্য ডাটাবেজের অটো-জেনারেটেড \`id\` এবং \`createdAt\` বাদে বাকি সব ফিল্ড লাগবে (\`Omit\`)।

### উত্তম অনুশীলন (Best Practice)
বড় ইন্টারফেস থেকে অল্প কয়েকটি ফিল্ড নেওয়ার ক্ষেত্রে \`Pick\` এবং বড় ইন্টারফেস থেকে অল্প কয়েকটি ফিল্ড বাদ দেওয়ার ক্ষেত্রে \`Omit\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Omit\` ব্যবহার করার সময় কি-তে বানান ভুল করা। যেহেতু \`Omit\`-এ যেকোনো স্ট্রিং ইনপুট দেওয়া যায়, তাই ভুল কি দিলে টাইপস্ক্রিপ্ট সরাসরি এরর নাও দিতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

// Pick: কেবল name এবং price রাখবে
type ProductPreview = Pick<Product, 'name' | 'price'>;

// Omit: id এবং createdAt বাদ দেবে
type ProductForm = Omit<Product, 'id' | 'createdAt'>;
\`\`\``
  },
  {
    id: 'typescript-46',
    title: 'Explain the Exclude and Extract Utility Types.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Exclude', 'Extract', 'Unions'],
    enAnswer: 'Exclude removes types from a union that are assignable to another union. Extract selects types from a union that overlap with another union.',
    bnAnswer: 'Exclude একটি ইউনিয়ন থেকে অন্য ইউনিয়নে থাকা টাইপগুলোকে বাদ দেয়। Extract একটি ইউনিয়ন থেকে অন্য ইউনিয়নের সাথে মিলে যাওয়া কমন টাইপগুলোকে নির্বাচন করে।',
    enExplanation: `### Explanation
Unlike \`Omit\` and \`Pick\` which work on object properties, \`Exclude\` and \`Extract\` operate directly on union types:
- **\`Exclude<T, U>\`**: Filters out types in \`T\` that are assignable to \`U\`.
- **\`Extract<T, U>\`**: Keeps only the types in \`T\` that are assignable to \`U\`.

### Real-World Example
Handling permission flags or event listeners. You can filter standard user roles out of a global list of roles, or grab overlapping event names.

### Best Practice
Use these utilities to dynamically compute unions instead of copy-pasting code blocks when permissions evolve.

### Common Mistakes
Confusing \`Exclude\` with \`Omit\`. Remember that \`Exclude\` is for union values (like \`"a" | "b"\`), while \`Omit\` is for object keys (like \`{ a: 1, b: 2 }\`).

### Code Example
\`\`\`typescript
type AllStatuses = 'pending' | 'active' | 'inactive' | 'deleted';

// Exclude: Removes 'deleted'
type ActiveStatuses = Exclude<AllStatuses, 'deleted'>; 
// Result: 'pending' | 'active' | 'inactive'

// Extract: Finds common elements
type UserRoles = 'admin' | 'manager' | 'customer';
type StaffRoles = 'admin' | 'manager' | 'receptionist';

type SharedRoles = Extract<UserRoles, StaffRoles>;
// Result: 'admin' | 'manager'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`Omit\` এবং \`Pick\` অবজেক্ট প্রোপার্টির ওপর কাজ করে, কিন্তু \`Exclude\` এবং \`Extract\` কাজ করে সরাসরি ইউনিয়ন টাইপের ওপর:
- **\`Exclude<T, U>\`**: \`T\` ইউনিয়নে থাকা যেসব টাইপ \`U\` এর সাথে মেলে, সেগুলোকে বাদ দিয়ে ফিল্টার করে।
- **\`Extract<T, U>\`**: \`T\` ইউনিয়নে থাকা যেসব টাইপ \`U\` এর সাথে মেলে, কেবল সেগুলোকেই রেখে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
পারমিশন ফ্ল্যাগ বা ইভেন্ট লিসেনার হ্যান্ডেল করার সময়। গ্লোবাল রোল লিস্ট থেকে সাধারণ রোলগুলো বাদ দেওয়া বা কমন রোলগুলো খুঁজে বের করা।

### উত্তম অনুশীলন (Best Practice)
রোল বা পারমিশন বাড়ার সাথে সাথে ম্যানুয়ালি কপি-পেস্ট এড়াতে ডাইনামিকালি ইউনিয়ন টাইপ তৈরি করতে এই ইউটিলিটিগুলো ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Exclude\` এবং \`Omit\` গুলিয়ে ফেলা। মনে রাখবেন, \`Exclude\` ইউনিয়ন ভ্যালু ফিল্টার করে আর \`Omit\` অবজেক্ট প্রোপার্টি বাদ দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type AllStatuses = 'pending' | 'active' | 'inactive' | 'deleted';

// Exclude: 'deleted' বাদ দেবে
type ActiveStatuses = Exclude<AllStatuses, 'deleted'>; 
// আউটপুট: 'pending' | 'active' | 'inactive'

// Extract: কমন উপাদান বের করবে
type UserRoles = 'admin' | 'manager' | 'customer';
type StaffRoles = 'admin' | 'manager' | 'receptionist';

type SharedRoles = Extract<UserRoles, StaffRoles>;
// আউটপুট: 'admin' | 'manager'
\`\`\``
  },
  {
    id: 'typescript-47',
    title: 'Explain the NonNullable and ReturnType Utility Types.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'NonNullable', 'ReturnType'],
    enAnswer: 'NonNullable excludes null and undefined from a union type T. ReturnType extracts the return type of a function type T.',
    bnAnswer: 'NonNullable ইউনিয়ন টাইপ T থেকে null এবং undefined বাদ দেয়। ReturnType একটি ফাংশন টাইপ T-এর রিটার্ন টাইপ বের করে নিয়ে আসে।',
    enExplanation: `### Explanation
- **\`NonNullable<T>\`**: Filter out \`null\` and \`undefined\` values from a union type \`T\`.
- **\`ReturnType<T>\`**: Inspects a function type signature and returns whatever that function yields. Essential when working with libraries that do not export intermediate types.

### Real-World Example
Inspecting API handler functions. If a third-party library exposes a function \`fetchData\`, you can extract the exact data structure returned by invoking \`ReturnType<typeof fetchData>\`.

### Best Practice
Use \`NonNullable\` when validating nullable values inside map configurations. Use \`ReturnType\` to extract types of custom React hooks or async actions.

### Common Mistakes
Trying to pass a function value directly to \`ReturnType\` instead of using \`typeof\`. Correct: \`ReturnType<typeof myFunction>\`. Incorrect: \`ReturnType<myFunction>\`.

### Code Example
\`\`\`typescript
// NonNullable
type MaybeString = string | null | undefined;
type StrictString = NonNullable<MaybeString>; // string

// ReturnType
function getUser() {
  return { id: 1, name: "Rohit" };
}

// Extract return shape dynamically
type UserDetails = ReturnType<typeof getUser>;
/*
Resulting Type:
{
  id: number;
  name: string;
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`NonNullable<T>\`**: একটি ইউনিয়ন টাইপ \`T\` থেকে \`null\` এবং \`undefined\` ফিল্টার করে বাদ দেয়।
- **\`ReturnType<T>\`**: একটি ফাংশন টাইপের সিগনেচার চেক করে তার রিটার্ন টাইপটি বের করে আনে। এটি তখন খুব কাজে দেয় যখন কোনো লাইব্রেরি তার নিজস্ব ডাটা টাইপ এক্সপোর্ট করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
API হ্যান্ডলার ফাংশন চেক করার সময়। থার্ড-পার্টি লাইব্রেরি থেকে শুধু \`fetchData\` ফাংশন এক্সপোর্ট করা থাকলে, আপনি \`ReturnType<typeof fetchData>\` ব্যবহার করে তার রেসপন্স টাইপ বের করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
নালেবল ডাটা ফিল্টার করার সময় \`NonNullable\` এবং কাস্টম রিঅ্যাক্ট হুকের রিটার্ন শেপ পেতে \`ReturnType\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`ReturnType\`-এর ব্র্যাকেটে সরাসরি ফাংশন ভ্যালু পাস করা। সঠিক নিয়ম হলো \`typeof\` ব্যবহার করা: \`ReturnType<typeof myFunction>\`।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// NonNullable
type MaybeString = string | null | undefined;
type StrictString = NonNullable<MaybeString>; // string

// ReturnType
function getUser() {
  return { id: 1, name: "Rohit" };
}

// ডাইনামিকালি রিটার্ন টাইপ বের করা হচ্ছে
type UserDetails = ReturnType<typeof getUser>;
/*
নতুন টাইপ:
{
  id: number;
  name: string;
}
*/
\`\`\``
  },
  {
    id: 'typescript-48',
    title: 'Explain the Parameters and ConstructorParameters Utility Types.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Parameters', 'Constructors'],
    enAnswer: 'Parameters extracts the parameter types of a function type as a tuple. ConstructorParameters extracts the parameter types of a class constructor.',
    bnAnswer: 'Parameters একটি ফাংশন টাইপের প্যারামিটার টাইপগুলোকে টাপল হিসেবে বের করে। ConstructorParameters কোনো ক্লাসের কনস্ট্রাক্টরের প্যারামিটার টাইপগুলোকে টাপল হিসেবে এক্সট্র্যাক্ট করে।',
    enExplanation: `### Explanation
These utilities infer input parameters from existing code structures:
- **\`Parameters<T>\`**: Expects a function type. Returns a tuple representing the parameters.
- **\`ConstructorParameters<T>\`**: Expects a class constructor or class definition. Returns constructor inputs as a tuple.

### Real-World Example
Creating wrapper functions or decorators. If you wrap an existing legacy function, you can capture its arguments dynamically so the wrapper receives the exact same inputs.

### Best Practice
Avoid manually maintaining duplicated function arguments in wrapper functions; type them using \`Parameters<typeof baseFunction>\`.

### Common Mistakes
Passing a class instance directly instead of using \`typeof ClassName\` in \`ConstructorParameters\`.

### Code Example
\`\`\`typescript
// Parameters
function sendEmail(to: string, content: string, retryCount: number): boolean {
  return true;
}

type EmailParams = Parameters<typeof sendEmail>;
// Resulting type: [to: string, content: string, retryCount: number]

// ConstructorParameters
class User {
  constructor(public id: number, public name: string) {}
}

type UserConstructorArgs = ConstructorParameters<typeof User>;
// Resulting type: [id: number, name: string]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই ইউটিলিটিগুলো কোড স্ট্রাকচার থেকে ইনপুট প্যারামিটার ইনফার করে:
- **\`Parameters<T>\`**: এটি ফাংশন টাইপ থেকে প্যারামিটার টাইপগুলোকে একটি টাপল (tuple) আকারে রিটার্ন করে।
- **\`ConstructorParameters<T>\`**: কোনো ক্লাস বা কন্সট্রাক্টরের ইনপুট প্যারামিটারকে টাপল আকারে রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
র‍্যাপার ফাংশন বা ডেকোরেটর তৈরির সময়। আপনি যদি কোনো লিগ্যাসি ফাংশনকে র‍্যাপ করেন, তবে তার আর্গুমেন্টগুলোকে ডাইনামিকালি ক্যাপচার করে সেম প্যারামিটার রিসিভ করার কোড তৈরি করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
র‍্যাপার ফাংশনের আর্গুমেন্ট ম্যানুয়ালি ডুপ্লিকেট না করে সরাসরি \`Parameters<typeof baseFunction>\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`ConstructorParameters\` ব্যবহারের সময় ক্লাসের টাইপের বদলে ডিরেক্ট ক্লাস ইনস্ট্যান্স দিয়ে দেওয়ার চেষ্টা করা। এ ক্ষেত্রে \`typeof\` ব্যবহার আবশ্যক।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// Parameters
function sendEmail(to: string, content: string, retryCount: number): boolean {
  return true;
}

type EmailParams = Parameters<typeof sendEmail>;
// নতুন টাইপ: [to: string, content: string, retryCount: number]

// ConstructorParameters
class User {
  constructor(public id: number, public name: string) {}
}

type UserConstructorArgs = ConstructorParameters<typeof User>;
// নতুন টাইপ: [id: number, name: string]
\`\`\``
  },
  {
    id: 'typescript-49',
    title: 'What are the differences between Omit and Exclude?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Omit', 'Exclude'],
    enAnswer: 'Omit filters out properties from an object type by their keys. Exclude filters out member types from a union type.',
    bnAnswer: 'Omit কোনো অবজেক্ট টাইপ থেকে প্রোপার্টি বা কি (keys) বাদ দিতে ব্যবহৃত হয়। Exclude কোনো ইউনিয়ন টাইপ থেকে মেম্বার টাইপগুলো বাদ দিতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Understanding the source structures resolves confusion:
- **\`Omit\`** operates on **Objects**. Under the hood, it uses \`Pick\` and \`Exclude\`: \`type Omit<T, K> = Pick<T, Exclude<keyof T, K>>\`.
- **\`Exclude\`** operates on **Unions**. It uses conditional type distribution: \`type Exclude<T, U> = T extends U ? never : T\`.

### Real-World Example
If you have a \`User\` object and want to remove \`password\`, use \`Omit<User, 'password'>\`. If you have a union type of roles \`'admin' | 'user' | 'guest'\` and want to remove \`'guest'\`, use \`Exclude<Roles, 'guest'>\`.

### Best Practice
Always match the target data shape. If you have curly braces (objects), use \`Omit\`. If you have pipes (unions), use \`Exclude\`.

### Common Mistakes
Passing an object type to \`Exclude\`, e.g., \`Exclude<User, 'email'>\`. This compiles but evaluates to the entire \`User\` object because \`User\` is not assignable to \`string\`.

### Code Example
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Omit (Object property removal)
type AnonymousUser = Omit<User, 'email'>;
// Result: { id: number; name: string; }

// Exclude (Union member removal)
type Logins = 'email' | 'google' | 'github';
type AlternateLogins = Exclude<Logins, 'email'>;
// Result: 'google' | 'github'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোন ধরনের টাইপের ওপর কাজ করছেন তার ওপর ভিত্তি করে এদের পার্থক্য নির্ধারিত হয়:
- **\`Omit\`** কাজ করে **অবজেক্টের (Objects)** ওপর। এটি অবজেক্ট থেকে নির্দিষ্ট প্রোপার্টি কি (keys) রিমুভ করে।
- **\`Exclude\`** কাজ করে **ইউনিয়ন (Unions)** টাইপের ওপর। এটি ইউনিয়নের কোনো একটি মেম্বারকে বাদ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
আপনার কাছে একটি \`User\` অবজেক্ট আছে এবং সেখান থেকে \`password\` ফিল্ড বাদ দিতে চান, তখন \`Omit<User, 'password'>\` ব্যবহার করবেন। আর যদি রোলের ইউনিয়ন \`'admin' | 'user' | 'guest'\` থাকে এবং \`'guest'\` বাদ দিতে চান, তবে \`Exclude<Roles, 'guest'>\` ব্যবহার করবেন।

### উত্তম অনুশীলন (Best Practice)
টার্গেটের শেপ মিলিয়ে ইউটিলিটি সিলেক্ট করুন। যদি এটি ব্র্যাকেট বা অবজেক্ট হয় তবে \`Omit\`, আর পাইপ বা ইউনিয়ন হলে \`Exclude\`।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Exclude\`-এর ভেতরে অবজেক্ট টাইপ পাস করার চেষ্টা করা, যেমন \`Exclude<User, 'email'>\`। এটি ভুল ফলাফল দেয় কারণ অবজেক্টের ওপর ইউনিয়ন ইউটিলিটি সরাসরি চলে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Omit (অবজেক্ট প্রোপার্টি বাদ দেওয়া)
type AnonymousUser = Omit<User, 'email'>;
// নতুন টাইপ: { id: number; name: string; }

// Exclude (ইউনিয়ন মেম্বার বাদ দেওয়া)
type Logins = 'email' | 'google' | 'github';
type AlternateLogins = Exclude<Logins, 'email'>;
// নতুন টাইপ: 'google' | 'github'
\`\`\``
  },
  {
    id: 'typescript-50',
    title: 'Explain Intersection Types and how they differ from interfaces.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Intersection Types', 'Interfaces', 'Type Safety'],
    enAnswer: 'Intersection Types combine multiple types into one (A & B). Unlike interfaces, which handle extension compile checks, conflicts in intersections resolve to never.',
    bnAnswer: 'ইন্টারসেকশন টাইপস একাধিক টাইপকে একত্রিত করে একটি সিঙ্গেল টাইপে রূপান্তর করে (A & B)। ইন্টারফেস এক্সটেনশনে টাইপ কনফ্লিক্ট কম্পাইল টাইমে চেক করা হলেও ইন্টারসেকশনে কনফ্লিক্ট never এ রিজলভ হয়।',
    enExplanation: `### Explanation
Intersection types combine properties of two or more types:
- **Syntax**: \`type NewType = TypeA & TypeB\`
- **Conflict Handling**: If \`TypeA\` has a property \`id: string\` and \`TypeB\` has \`id: number\`, the combined \`id\` type becomes \`string & number\`, which resolves to \`never\`.
- **Interfaces**: When extending interfaces, the compiler reports a type clash immediately rather than silently converting the property to \`never\`.

### Real-World Example
Composing complex state configurations or database models (e.g. extending basic user attributes with tracking timestamps fields).

### Best Practice
Prefer interface extension (\`extends\`) over type intersection (\`&\`) when defining object hierarchies, as interfaces offer better error diagnostics from the compiler.

### Common Mistakes
Merging objects with conflicting property types, which renders the properties unusable due to them becoming \`never\`.

### Code Example
\`\`\`typescript
// Valid Intersection
type Loggable = { log: (msg: string) => void };
type Serializable = { serialize: () => string };

type LogAndSerialize = Loggable & Serializable;

const obj: LogAndSerialize = {
  log: (msg) => console.log(msg),
  serialize: () => "{}"
};

// Conflict behavior
type TypeA = { id: string };
type TypeB = { id: number };
type ClashingType = TypeA & TypeB; // id is now string & number -> never
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ইন্টারসেকশন টাইপ দুই বা ততোধিক টাইপের প্রোপার্টিগুলোকে একত্রিত করে:
- **সিনট্যাক্স**: \`type NewType = TypeA & TypeB\`
- **কনফ্লিক্ট হ্যান্ডলিং**: যদি \`TypeA\` এর \`id: string\` এবং \`TypeB\` এর \`id: number\` থাকে, তবে ইন্টারসেকশন টাইপের \`id\` টাইপ হবে \`string & number\`, যা সরাসরি \`never\` এ পরিণত হয়।
- **ইন্টারফেস**: ইন্টারফেস এক্সটেনশনের ক্ষেত্রে কম্পাইলার কনফ্লিক্ট টাইপ থাকলে সাথে সাথেই এরর দেয়, এটি \`never\` বানিয়ে ফাইল কম্পাইল হতে দেয় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ মডেল বা কোনো কনফিগারেশন তৈরি করার সময় বেসিক মডেলের সাথে টাইমস্ট্যাম্প বা কাস্টম প্রোপার্টি অ্যাড করতে এটি ব্যবহৃত হয়।

### উত্তম অনুশীলন (Best Practice)
অবজেক্ট হায়ারার্কি ডিফাইন করার সময় ইন্টারসেকশন (\`&\`) এর চেয়ে ইন্টারফেস এক্সটেনশন (\`extends\`) ব্যবহার করা ভালো, কারণ এতে কম্পাইলার বেশি স্পষ্ট এরর মেসেজ দেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
কনফ্লিক্টিং টাইপযুক্ত অবজেক্ট মার্জ করা, যার ফলে প্রোপার্টিটি \`never\` হয়ে যায় এবং অবজেক্টটিতে আর কোনো ভ্যালু অ্যাসাইন করা যায় না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ভ্যালিড ইন্টারসেকশন
type Loggable = { log: (msg: string) => void };
type Serializable = { serialize: () => string };

type LogAndSerialize = Loggable & Serializable;

const obj: LogAndSerialize = {
  log: (msg) => console.log(msg),
  serialize: () => "{}"
};

// কনফ্লিক্ট বিহেভিয়ার
type TypeA = { id: string };
type TypeB = { id: number };
type ClashingType = TypeA & TypeB; // id এখন string & number -> never
\`\`\``
  },
  {
    id: 'typescript-51',
    title: 'Explain Labeled Tuple Types and Variadic Tuple Types.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Tuples', 'Variadic', 'ES6'],
    enAnswer: 'Labeled Tuple Types add labels to elements for readability. Variadic Tuples allow spreading arrays/tuples inside other tuples using the ... operator.',
    bnAnswer: 'লেবেলড টাপল টাইপস টাপলের উপাদানগুলোতে লেবেল যুক্ত করে রিডিবিলিটি বাড়ায়। ভ্যারিয়াডিক টাপলস ... অপারেটরের সাহায্যে টাপলের ভেতরে অন্যান্য অ্যারে বা টাপল স্প্রেড করতে দেয়।',
    enExplanation: `### Explanation
Tuples hold a fixed number of elements of known types.
- **Labeled Tuples**: Provide descriptive labels for each element: \`[latitude: number, longitude: number]\`. These labels show up in IDE auto-completions.
- **Variadic Tuples**: Allow dynamic sizing by using the spread operator: \`[string, ...number[], boolean]\`.

### Real-World Example
Typing a function parameter list that accepts a string prefix followed by any number of coordinates and a final flag parameter.

### Best Practice
Use Labeled Tuples when returning coordinate pairs, custom hook arrays (like React useState), or argument lists to keep APIs readable.

### Common Mistakes
Confusing standard array typing with tuple definitions. \`number[]\` represents a dynamic array of numbers, whereas \`[number]\` represents a tuple containing exactly one number.

### Code Example
\`\`\`typescript
// Labeled Tuple
type GeoCoordinate = [lat: number, lng: number];
const location: GeoCoordinate = [23.8103, 90.4125]; // Dhaka lat/lng

// Variadic Tuple
type MessageArgs = [sender: string, ...messages: string[], timestamp: number];

const chat: MessageArgs = ["Rohit", "Hi", "Hello there!", 1718800000];
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাপলে নির্দিষ্ট সংখ্যক এবং নির্দিষ্ট টাইপের ডাটা থাকে।
- **লেবেলড টাপল (Labeled Tuples)**: টাপলের প্রতিটি উপাদানে নাম বা লেবেল যুক্ত করার অনুমতি দেয়: \`[latitude: number, longitude: number]\`। এটি IDE তে সাজেস্ট দেখানোর সময় খুব কার্যকর।
- **ভ্যারিয়াডিক টাপল (Variadic Tuples)**: স্প্রেড অপারেটর ব্যবহারের মাধ্যমে ডাইনামিক সাইজের টাপল তৈরি করতে দেয়: \`[string, ...number[], boolean]\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চ্যাট বা মেসেজিং ফাংশন প্যারামিটার টাইপ করা যা প্রথমে সেন্ডারের নাম, তারপর একাধিক মেসেজের অ্যারে এবং সবশেষে টাইমস্ট্যাম্প নেয়।

### উত্তম অনুশীলন (Best Practice)
Custom React Hook বা কোঅর্ডিনেট পেয়ার রিটার্ন করার সময় লেবেলড টাপল ব্যবহার করুন যাতে API রিডিবিলিটি বজায় থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ অ্যারে টাইপিংয়ের সাথে টাপলের টাইপিং গুলিয়ে ফেলা। \`number[]\` দিয়ে ডাইনামিক অ্যারে বোঝায়, যেখানে \`[number]\` দিয়ে এমন একটি টাপল বোঝায় যাতে কেবল একটিই নম্বর থাকতে পারবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// লেবেলড টাপল
type GeoCoordinate = [lat: number, lng: number];
const location: GeoCoordinate = [23.8103, 90.4125]; // ঢাকার অক্ষাংশ/দ্রাঘিমাংশ

// ভ্যারিয়াডিক টাপল
type MessageArgs = [sender: string, ...messages: string[], timestamp: number];

const chat: MessageArgs = ["Rohit", "Hi", "Hello there!", 1718800000];
\`\`\``
  },
  {
    id: 'typescript-52',
    title: 'Explain Enum vs const enum and their performance/runtime impacts.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Enums', 'Const Enums', 'Performance'],
    enAnswer: 'Enums generate a runtime lookup object. Const enums are completely erased during compilation, inlining the raw values where they are used to eliminate runtime overhead.',
    bnAnswer: 'Enums রানটাইমে একটি লুকআপ অবজেক্ট তৈরি করে। Const enums কম্পাইলেশনের সময় সম্পূর্ণ মুছে যায় এবং এদের মানগুলো কোডের ভেতরে সরাসরি বসিয়ে (inline) দেওয়া হয়, যা রানটাইম ওভারহেড দূর করে।',
    enExplanation: `### Explanation
- **Standard \`enum\`**: Compiles into a JavaScript IIFE that sets up a bidirectional lookup object (allows mapping name-to-value and value-to-name).
- **\`const enum\`**: Fully compiled away. Only the values are inserted into the compiled code. No JavaScript object is created, making it performant.

### Real-World Example
In performance-critical applications or frontend bundle optimization, using \`const enum\` prevents bloating the output bundle with boilerplate object mappings.

### Best Practice
Prefer \`const enum\` or \`const\` objects with \`as const\` (union type creation) in modern applications to avoid code bloat and preserve bundler optimizations (tree-shaking).

### Common Mistakes
Using \`const enum\` inside libraries that will be published to npm. If the consumer uses different compiler flags like \`preserveConstEnums\`, it can break compilation.

### Code Example
\`\`\`typescript
// Standard Enum
enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}
// Compiles to: var Role; (function(Role){...})(Role||(Role={}))

// Const Enum
const enum Status {
  Active = 1,
  Inactive = 0
}
const currentStatus = Status.Active;
// Compiles directly to: const currentStatus = 1; (Lookup object is erased!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্ট্যান্ডার্ড \`enum\`**: জাভাস্ক্রিপ্টে এটি একটি IIFE (Immediately Invoked Function Expression) এ কম্পাইল হয় যা একটি দ্বিমুখী (bidirectional) লুকআপ অবজেক্ট তৈরি করে।
- **\`const enum\`**: কম্পাইলেশনের সময় এটি সম্পূর্ণরূপে কোড থেকে মুছে যায়। কোডে এর স্থানে সরাসরি মানগুলো রিপ্লেস করে ইনলাইন করে দেওয়া হয়, কোনো এক্সট্রা অবজেক্ট তৈরি করা হয় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় প্রোজেক্টে বান্ডেল সাইজ অপ্টিমাইজ করার জন্য \`const enum\` ব্যবহার করলে অনেক বয়লারপ্লেট কোড কমে যায় এবং রানটাইমে মেমোরি সাশ্রয় হয়।

### উত্তম অনুশীলন (Best Practice)
আধুনিক প্রজেক্টে বান্ডেল সাইজ কমাতে এবং ট্রি-শেকিং (tree-shaking) সুবিধা পেতে \`const enum\` অথবা \`const\` অবজেক্টের সাথে \`as const\` ও ইউনিয়ন টাইপ ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অন্য প্রজেক্টে ব্যবহারের জন্য NPM-এ পাবলিশ করা লাইব্রেরিতে \`const enum\` ব্যবহার করা। এতে কনজিউমারের বিল্ড সিস্টেমে সমস্যা তৈরি হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// স্ট্যান্ডার্ড এনাম
enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}
// কম্পাইলড কোড: var Role; (function(Role){...})(Role||(Role={}))

// Const এনাম
const enum Status {
  Active = 1,
  Inactive = 0
}
const currentStatus = Status.Active;
// সরাসরি কম্পাইলড কোড: const currentStatus = 1; (কোনো অবজেক্ট তৈরি হয়নি)
\`\`\``
  },
  {
    id: 'typescript-53',
    title: 'Explain Namespace vs ES Modules and why namespaces are discouraged in modern development.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Namespaces', 'ES Modules', 'Bundlers'],
    enAnswer: 'Namespaces are a legacy TypeScript-specific feature for organizing code on the global scope. ES Modules use import/export syntax and are standard, permitting better bundler optimization.',
    bnAnswer: 'Namespaces হলো গ্লোবাল স্কোপে কোড গোছানোর জন্য একটি লিগ্যাসি টাইপস্ক্রিপ্ট ফিচার। ES Modules স্ট্যান্ডার্ড import/export সিনট্যাক্স ব্যবহার করে, যা বান্ডলারকে কোড অপ্টিমাইজ করতে সাহায্য করে।',
    enExplanation: `### Explanation
- **Namespaces**: Group code globally under a single variable name. Introduced in early TS versions before JavaScript had standard modules.
- **ES Modules (ESM)**: The official JavaScript standard since ES6 (\`import\` and \`export\`). File-based scoping.
- **Why discouraged**: Namespaces do not support modern bundler optimizations (like tree-shaking), make dependency tracing harder, and are non-standard.

### Real-World Example
Legacy frontend structures used namespaces to bundle scripts together without a compiler tool. Modern systems use bundlers like Webpack, Vite, or Rollup to package ES modules.

### Best Practice
Always use standard ES modules (\`import/export\`) in new applications. Only use namespaces if maintaining legacy projects or building specific global ambient definitions.

### Common Mistakes
Using namespaces in modern React or Next.js projects, which interferes with bundler resolution and leads to code modularity issues.

### Code Example
\`\`\`typescript
// Namespace (Legacy - Discouraged)
namespace Validation {
  export const isEmail = (str: string) => str.includes("@");
}
// Usage: Validation.isEmail("test@test.com");

// ES Module (Modern - Recommended)
// validator.ts
export const isEmail = (str: string) => str.includes("@");

// app.ts
import { isEmail } from './validator';
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Namespaces**: একটি সিঙ্গেল গ্লোবাল ভ্যারিয়েবলের অধীনে কোড সাজায়। এটি জাভাস্ক্রিপ্টের নিজস্ব মডিউল সিস্টেম আসার আগে টাইপস্ক্রিপ্ট দ্বারা শুরু করা হয়েছিল।
- **ES Modules (ESM)**: ES6 থেকে প্রবর্তিত জাভাস্ক্রিপ্টের অফিশিয়াল স্ট্যান্ডার্ড মডিউল সিস্টেম (\`import\` ও \`export\`)। এটি ফাইল-ভিত্তিক কাজ করে।
- **কেন বর্জনীয়**: নেমস্পেস আধুনিক বান্ডলারের ট্রি-শেকিং (tree-shaking) সাপোর্ট করে না, প্রজেক্টের ডিপেন্ডেন্সি ট্র্যাক করা কঠিন করে তোলে এবং এটি কোনো স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট ফিচার নয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
পুরোনো ওয়েব অ্যাপ্লিকেশনে কোড রান করানোর জন্য নেমস্পেস ব্যবহৃত হতো। আধুনিক অ্যাপে Vite বা Webpack এর মতো বিল্ড টুল ব্যবহারের মাধ্যমে ES Modules স্ট্যান্ডার্ড অনুযায়ী পুরো কোড ম্যানেজ করা হয়।

### উত্তম অনুশীলন (Best Practice)
যেকোনো নতুন প্রজেক্টে সবসময় স্ট্যান্ডার্ড ES Modules (\`import/export\`) ব্যবহার করুন। নেমস্পেস কেবল লিগ্যাসি কোড মেইনটেইন করার সময়ই ব্যবহার করা উচিত।

### সাধারণ ভুলসমূহ (Common Mistakes)
React বা Next.js এর মতো আধুনিক ফ্রেমওয়ার্কগুলোতে নেমস্পেস ব্যবহার করা, যা মডিউল রেজোলিউশনে সমস্যা তৈরি করে ও ট্রি-শেকিং ব্যাহত করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// নেমস্পেস (লিগ্যাসি - বর্জনীয়)
namespace Validation {
  export const isEmail = (str: string) => str.includes("@");
}
// ব্যবহার: Validation.isEmail("test@test.com");

// ES মডিউল (আধুনিক - সাজেস্টেড)
// validator.ts
export const isEmail = (str: string) => str.includes("@");

// app.ts
import { isEmail } from './validator';
\`\`\``
  },
  {
    id: 'typescript-54',
    title: 'What is Declaration Merging and how does it work?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Declaration Merging', 'Extensibility'],
    enAnswer: 'Declaration Merging is the process where the compiler merges two or more separate declarations sharing the same name into a single definition.',
    bnAnswer: 'ডিক্লেয়ারেশন মার্জিং হলো এমন একটি প্রক্রিয়া যেখানে কম্পাইলার একই নামের একাধিক ডিক্লেয়ারেশনকে একত্রিত করে একটি একক ডেফিনিশনে রূপান্তর করে।',
    enExplanation: `### Explanation
TypeScript allows merging different declarations under the same identifier:
- **Interfaces**: Merging interfaces with the same name combines all properties into one definition. Properties must match in types, or else a compilation error occurs.
- **Namespaces and Classes/Functions**: Allows appending static properties or methods to classes or functions without modifying their source files.

### Real-World Example
Extending global window properties or Express request variables (e.g., adding a custom \`user\` or \`token\` property to the Express \`Request\` interface).

### Best Practice
Use declaration merging carefully, especially when typing libraries, to avoid polluting the global scope or creating implicit dependencies.

### Common Mistakes
Declaring identical keys with different types in matching interfaces. This yields the error: \`Subsequent property declarations must have the same type\`.

### Code Example
\`\`\`typescript
// Merging Interfaces
interface Request {
  body: any;
}
interface Request {
  query: any;
}

const req: Request = { body: {}, query: {} }; // Contains both!

// Extending Express global namespace types
declare global {
  namespace Express {
    interface Request {
      currentUser?: { id: string; role: string };
    }
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট একই নামের একাধিক ঘোষণাকে একত্রিত বা মার্জ করার অনুমতি দেয়:
- **ইন্টারফেস**: একই নামের ইন্টারফেসগুলো মার্জ হয়ে তাদের সব প্রোপার্টি একসাথে যুক্ত করে। তবে প্রোপার্টির টাইপ অবশ্যই এক হতে হবে, অন্যথায় এরর দেখাবে।
- **নেমস্পেস এবং ক্লাস/ফাংশন**: অরিজিনাল সোর্স কোড মডিফাই না করেই ক্লাসের সাথে স্ট্যাটিক মেথড বা ফাংশন প্রোপার্টি মার্জ করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
গ্লোবাল উইন্ডো অবজেক্ট বা এক্সপ্রেস রিকোয়েস্ট অবজেক্টে কাস্টম প্রোপার্টি যুক্ত করা (যেমন, এক্সপ্রেসের \`Request\` ইন্টারফেসে \`currentUser\` বা \`token\` যুক্ত করা)।

### উত্তম অনুশীলন (Best Practice)
ডিক্লেয়ারেশন মার্জিং ব্যবহারের ক্ষেত্রে সতর্ক থাকুন, বিশেষ করে গ্লোবাল স্কোপ পলিউশন এড়াতে লাইব্রেরি টাইপ এক্সটেনশনের সময় সাবধানতা অবলম্বন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
একই ইন্টারফেসে একই নামের প্রোপার্টিতে ভিন্ন টাইপ ডিফাইন করা। এটি \`Subsequent property declarations must have the same type\` এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইন্টারফেস মার্জিং
interface Request {
  body: any;
}
interface Request {
  query: any;
}

const req: Request = { body: {}, query: {} }; // দুটির সমন্বয়ে গঠিত হয়েছে

// এক্সপ্রেসের গ্লোবাল রিকোয়েস্ট টাইপ এক্সটেনশন
declare global {
  namespace Express {
    interface Request {
      currentUser?: { id: string; role: string };
    }
  }
}
\`\`\``
  },
  {
    id: 'typescript-55',
    title: 'Explain Ambient Declarations and d.ts declaration files.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Ambient Declarations', 'd.ts', 'Libraries'],
    enAnswer: 'Ambient Declarations tell the compiler that variables/modules exist in the runtime environment but are written elsewhere. They are defined in .d.ts files without runtime JS output.',
    bnAnswer: 'অ্যাম্বিয়েন্ট ডিক্লেয়ারেশনস কম্পাইলারকে জানায় যে নির্দিষ্ট কিছু ভ্যারিয়েবল বা মডিউল রানটাইমে আছে কিন্তু অন্য ফাইলে কোড করা আছে। এগুলো .d.ts ফাইলে ডিক্লেয়ার করা হয় এবং কোনো রানটাইম JS আউটপুট দেয় না।',
    enExplanation: `### Explanation
- **Ambient Declarations**: Declared using the \`declare\` keyword. They guide TypeScript's typechecker but compile down to zero JavaScript.
- **\`d.ts\` Files**: Dedicated files containing type definitions only. They are widely used by npm packages to supply types to vanilla JS consumers.

### Real-World Example
Typing a global CDN script loaded in the HTML page (like a payment SDK wrapper or Google Analytics global variables \`ga\`).

### Best Practice
Use ambient declarations to support vanilla JavaScript legacy modules in your TypeScript build process without rewriting them in TS.

### Common Mistakes
Putting runnable JavaScript code (like class implementations or variable initialization) inside a \`.d.ts\` file. These files should contain types only.

### Code Example
\`\`\`typescript
// global.d.ts
// Declares that a global config exists at runtime (e.g. from an HTML script tag)
declare const APP_VERSION: string;

declare namespace Analytics {
  function trackEvent(name: string, data?: object): void;
}

// In main.ts (No imports needed, compiler knows about APP_VERSION)
console.log(APP_VERSION);
Analytics.trackEvent("page_view");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **অ্যাম্বিয়েন্ট ডিক্লেয়ারেশনস (Ambient Declarations)**: \`declare\` কি-ওয়ার্ড দিয়ে ডিফাইন করা হয়। এগুলো টাইপ চেকারকে গাইড করে কিন্তু কোনো রানটাইম জাভাস্ক্রিপ্ট কোড তৈরি করে না।
- **\`d.ts\` ফাইলস**: টাইপ ডিক্লেয়ারেশন সমৃদ্ধ ফাইল যেখানে কোনো লজিক্যাল জাভাস্ক্রিপ্ট কোড থাকে না। লাইব্রেরি ব্যবহারের সময় ডেভেলপারদের টাইপ সাপোর্ট দিতে এই ফাইল ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
HTML পেজে CDN স্ক্রিপ্ট দিয়ে লোড করা কোনো থার্ড-পার্টি লাইব্রেরি বা পেমেন্ট গেটওয়ের গ্লোবাল ভ্যারিয়েবল (যেমন গুগল অ্যানালিটিক্সের \`ga\`) টাইপ সেফ করা।

### উত্তম অনুশীলন (Best Practice)
আপনার কোডবেসে লিগ্যাসি জাভাস্ক্রিপ্ট ফাইলগুলোর সাথে ইন্টিগ্রেশন সহজ রাখতে ও রিরাইট করা এড়াতে অ্যাম্বিয়েন্ট ডিক্লেয়ারেশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`.d.ts\` ফাইলের ভেতরে এক্সিকিউটেবল জাভাস্ক্রিপ্ট কোড (যেমন ক্লাস বডি বা ভ্যারিয়েবল অ্যাসাইনমেন্ট) লেখা। এগুলো শুধু টাইপ ডিক্লেয়ারেশনের জন্য সংরক্ষিত রাখা উচিত।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// global.d.ts
// রানটাইমে থাকা কোনো গ্লোবাল ভ্যারিয়েবল ডিফাইন করা
declare const APP_VERSION: string;

declare namespace Analytics {
  function trackEvent(name: string, data?: object): void;
}

// main.ts ফাইলে (কোনো ইম্পোর্ট ছাড়াই কম্পাইলার ভ্যারিয়েবলগুলো চেনে)
console.log(APP_VERSION);
Analytics.trackEvent("page_view");
\`\`\``
  },
  {
    id: 'typescript-56',
    title: 'Explain the main tsconfig.json options: target, module, and moduleResolution.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Compiler', 'Build Options'],
    enAnswer: 'target specifies the output JS version (e.g., ES6). module specifies the module standard of output files. moduleResolution specifies how modules are located.',
    bnAnswer: 'target আউটপুট JS-এর সংস্করণ নির্ধারণ করে (যেমন ES6)। module ফাইলসমূহের আউটপুট মডিউল স্ট্যান্ডার্ড নির্ধারণ করে। moduleResolution মডিউলগুলো খুঁজে বের করার পদ্ধতি নির্ধারণ করে।',
    enExplanation: `### Explanation
- **\`target\`**: Determines what JavaScript features are transpiled down to standard versions. Example: compiling async/await into ES5 callbacks or keeping them native with ES2022.
- **\`module\`**: Defines the module system for the output JS (e.g., \`CommonJS\` for Node, \`ESNext\` or \`NodeNext\` for modern setups).
- **\`moduleResolution\`**: The algorithm the compiler uses to search files based on imports (e.g. \`node10\`, \`nodenext\`, or \`bundler\` for modern bundlers like Vite).

### Real-World Example
Configuring a Vite-React app vs a Node-Express app. Node requires CommonJS/NodeNext modules, while Vite utilizes ESNext modules with \`bundler\` resolution.

### Best Practice
For modern frontend applications using Vite/NextJS, set \`moduleResolution\` to \`bundler\` to match the bundler's module import capabilities.

### Common Mistakes
Mismatching \`module\` and \`moduleResolution\`. Setting \`module: ESNext\` with a legacy \`moduleResolution: node10\` can cause imports to fail.

### Code Example
\`\`\`json
// Sample tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`target\`**: জাভাস্ক্রিপ্টের কোন ভার্সন অনুযায়ী ফাইল আউটপুট হবে তা ঠিক করে। যেমন async/await কে ES5 কলব্যাকে রূপান্তর করা নাকি ES2022 অনুযায়ী রাখা।
- **\`module\`**: আউটপুট জাভাস্ক্রিপ্ট কোন মডিউল সিস্টেম ব্যবহার করবে তা নির্ধারণ করে (যেমন নোড অ্যাপের জন্য \`CommonJS\`, আধুনিক বান্ডলারের জন্য \`ESNext\`)।
- **\`moduleResolution\`**: কম্পাইলার ফাইল ইম্পোর্ট করার সময় ফাইলটি কিভাবে লোকেট বা সার্চ করবে তা নির্ধারণ করে (যেমন \`node10\`, \`nodenext\` বা আধুনিক বিল্ডারের জন্য \`bundler\`)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি Node.js এক্সপ্রেস অ্যাপ বনাম একটি React Vite অ্যাপ কনফিগার করার ক্ষেত্রে। Node-এ সাধারনত CommonJS প্রয়োজন হয়, আর Vite অ্যাপে \`ESNext\` এবং মডিউল রেজোলিউশন \`bundler\` ব্যবহত হয়।

### উত্তম অনুশীলন (Best Practice)
Vite বা Next.js ব্যবহার করে আধুনিক ফ্রন্টএন্ড তৈরির সময় মডিউল রেজোলিউশন \`bundler\` সেট করুন যাতে বিল্ড সিস্টেমের সাথে সহজে ইন্টিগ্রেশন করা যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`module\` এবং \`moduleResolution\` এর মধ্যে অমিল রাখা। \`module: ESNext\` এর সাথে পুরোনো \`moduleResolution: node10\` ব্যবহার করলে ইম্পোর্ট রেজোলিউশনে এরর হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`json
// নমুনা tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true
  }
}
\`\`\``
  },
  {
    id: 'typescript-57',
    title: 'Explain strict compiler flags strictNullChecks and noImplicitAny.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Strict Checks', 'Safety'],
    enAnswer: 'noImplicitAny raises errors when variables are inferred as any. strictNullChecks ensures null and undefined are treated as distinct types and handled.',
    bnAnswer: 'noImplicitAny এরর দেখায় যখন কোনো ভ্যারিয়েবলকে স্পষ্ট টাইপ ছাড়া implicit any হিসেবে ইনফার করা হয়। strictNullChecks নিশ্চিত করে null এবং undefined কে নির্দিষ্ট আলাদা টাইপ হিসেবে ট্রিট করা হয়েছে কিনা।',
    enExplanation: `### Explanation
These flags are critical for application safety:
- **\`noImplicitAny\`**: Triggers a compilation error if TypeScript cannot infer a specific type and defaults to \`any\`. Enforces developers to explicitly type variables.
- **\`strictNullChecks\`**: By default, \`null\` and \`undefined\` are assignable to any type (e.g. \`let x: string = null\` is valid). When enabled, this flag requires explicit union annotations (\`string | null\`) and proper checks before referencing properties.

### Real-World Example
Preventing the classic \`Cannot read property 'x' of undefined\` error. Enabling \`strictNullChecks\` forces you to write optional chaining (\`?.\`) or \`if\` conditions.

### Best Practice
Always enable \`"strict": true\` in your \`tsconfig.json\`, which implicitly enables both \`noImplicitAny\` and \`strictNullChecks\` along with other type-safety checks.

### Common Mistakes
Disabling these flags to pass verification quickly, which exposes the production code to runtime crashes.

### Code Example
\`\`\`typescript
// With noImplicitAny: true
// function logUser(user) { ... } // Error: Parameter 'user' implicitly has an 'any' type.
function logUser(user: { name: string }) {
  console.log(user.name);
}

// With strictNullChecks: true
let name: string = "Rohit";
// name = null; // Error: Type 'null' is not assignable to type 'string'.

let maybeName: string | null = null;
// console.log(maybeName.length); // Error: Object is possibly 'null'.
console.log(maybeName?.length); // Safe!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অ্যাপ্লিকেশন সেফটি নিশ্চিত করতে এই ফ্ল্যাগগুলো অত্যন্ত গুরুত্বপূর্ণ:
- **\`noImplicitAny\`**: কোনো ভ্যারিয়েবল বা প্যারামিটারের টাইপ নির্ধারণ করতে না পারলে এবং তা স্বয়ংক্রিয়ভাবে \`any\` হয়ে গেলে এরর দেয়। এটি ডেভেলপারদের সঠিক টাইপ লিখতে বাধ্য করে।
- **\`strictNullChecks\`**: এটি বন্ধ থাকলে \`null\` এবং \`undefined\` যেকোনো টাইপে অ্যাসাইন করা যায় (যেমন \`let x: string = null\` বৈধ)। চালু থাকলে, এদের জন্য আলাদা ইউনিয়ন (\`string | null\`) ডিফাইন করতে হয় এবং কোড রান করার আগে ভ্যালিডেশন চেক করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
জাভাস্ক্রিপ্টের চিরচেনা এরর \`Cannot read property 'x' of undefined\` এড়ানো। \`strictNullChecks\` চালু থাকলে প্রোপার্টি ব্যবহারের আগে অপশনাল চেইনিং (\`?.\`) বা ভ্যালিডেশন চেক লেখা বাধ্যতামূলক হয়ে যায়।

### উত্তম অনুশীলন (Best Practice)
সবসময় \`tsconfig.json\` ফাইলে \`"strict": true\` ব্যবহার করুন, যা স্বয়ংক্রিয়ভাবে এই দুটি ফিচারসহ অন্যান্য টাইপ সেফটি সিস্টেম এনাবল করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
বিল্ড এরর দ্রুত এড়াতে সাময়িকভাবে এই ফ্ল্যাগগুলো বন্ধ করা, যা কোডে বাগ থেকে যাওয়ার ঝুঁকি বাড়ায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// noImplicitAny: true সহ
// function logUser(user) { ... } // এরর: Parameter 'user' implicitly has an 'any' type.
function logUser(user: { name: string }) {
  console.log(user.name);
}

// strictNullChecks: true সহ
let name: string = "Rohit";
// name = null; // এরর: Type 'null' is not assignable to type 'string'.

let maybeName: string | null = null;
// console.log(maybeName.length); // এরর: Object is possibly 'null'.
console.log(maybeName?.length); // সেফ!
\`\`\``
  },
  {
    id: 'typescript-58',
    title: 'Explain unknown vs any and when to use which.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Unknown', 'Any', 'Type Safety'],
    enAnswer: 'any turns off all type-checking. unknown is a type-safe counterpart to any; any value is assignable to it, but you cannot perform operations on it without narrowing.',
    bnAnswer: 'any সব ধরনের টাইপ চেকিং বন্ধ করে দেয়। unknown হলো any-এর একটি টাইপ-সেফ রূপ; যেকোনো মান এতে অ্যাসাইন করা গেলেও টাইপ ন্যারো না করে এর ওপর কোনো অপারেশন চালানো যায় না।',
    enExplanation: `### Explanation
- **\`any\`**: Completely disables static analysis. Useful as a last resort, but bypasses compiler guarantees.
- **\`unknown\`**: Represents a variable whose type is not yet determined. You are forced to perform type narrowing (like \`typeof\`, \`instanceof\`, or custom guards) before accessing properties or executing functions on it.

### Real-World Example
Handling dynamic user inputs or third-party API payloads. Instead of typing the parsed response as \`any\`, typing it as \`unknown\` forces consumer functions to validate data fields before usage.

### Best Practice
Avoid \`any\` at all costs. Use \`unknown\` when you do not know the type of incoming data, enforcing a validation step.

### Common Mistakes
Directly accessing properties on an \`unknown\` variable without a check. \`let x: unknown = {}; x.name;\` triggers an immediate compile error.

### Code Example
\`\`\`typescript
let valueAny: any = "hello";
valueAny.trim(); // Allowed (might crash at runtime if value turns out to be number)

let valueUnknown: unknown = "hello";
// valueUnknown.trim(); // Error: 'valueUnknown' is of type 'unknown'.

// Correct way to use unknown: narrow the type first
if (typeof valueUnknown === "string") {
  console.log(valueUnknown.trim()); // Safe!
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`any\`**: কম্পাইল টাইমের সমস্ত টাইপ এনালাইসিস সম্পূর্ণ বন্ধ করে দেয়। এটি ব্যবহারের ফলে টাইপ সেফটির সুবিধা পাওয়া যায় না।
- **\`unknown\`**: এটি এমন একটি ভ্যারিয়েবল নির্দেশ করে যার টাইপ সম্পর্কে কোনো স্পষ্ট তথ্য নেই। এর ওপর কোনো মেথড কল করতে চাইলে আগে টাইপ ন্যারোইং (\`typeof\`, \`instanceof\`) করে নিতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার ইনপুট বা থার্ড-পার্টি API থেকে আসা ডাইনামিক রেসপন্স হ্যান্ডেল করা। রেসপন্সকে \`any\` না লিখে \`unknown\` লিখলে কোডবেসে কাজ করার সময় ফিল্ডগুলো ভ্যালিডেট করে নিতে কম্পাইলার বাধ্য করে।

### উত্তম অনুশীলন (Best Practice)
কোডবেসে \`any\` পরিহার করুন। ইনকামিং ডাটা বা রিসিভ করা ডাটা টাইপ নিশ্চিত না হলে \`unknown\` ব্যবহার করুন, যা ডাটা ভ্যালিডেশন স্টেপ এনফোর্স করবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
চেক না করেই \`unknown\` ভ্যারিয়েবলের প্রোপার্টি সরাসরি অ্যাক্সেস করার চেষ্টা করা। \`let x: unknown = {}; x.name;\` সরাসরি কম্পাইল এরর দেবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
let valueAny: any = "hello";
valueAny.trim(); // রান টাইমে ক্র্যাশ করলেও কম্পাইলার পাস হতে দেবে

let valueUnknown: unknown = "hello";
// valueUnknown.trim(); // এরর: 'valueUnknown' is of type 'unknown'.

// unknown ব্যবহারের সঠিক নিয়ম: আগে টাইপ চেক করে নেওয়া
if (typeof valueUnknown === "string") {
  console.log(valueUnknown.trim()); // সুরক্ষিত!
}
\`\`\``
  },
  {
    id: 'typescript-59',
    title: 'Explain void vs never and when to use which.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Void', 'Never', 'Functions'],
    enAnswer: 'void indicates a function returns nothing (returns undefined implicitly). never indicates a function never returns at all (throws an error or loops infinitely).',
    bnAnswer: 'void নির্দেশ করে যে একটি ফাংশন কোনো মান রিটার্ন করে না (implicitly undefined রিটার্ন করে)। never নির্দেশ করে যে একটি ফাংশন কখনোই রিটার্ন শেষ করে না (এরর থ্রো করে বা লুপে আটকে থাকে)।',
    enExplanation: `### Explanation
These types apply to function return flows:
- **\`void\`**: The function completes execution but has no return value. Under the hood in JS, it returns \`undefined\`.
- **\`never\`**: The execution point of the function is unreachable. The function never completes normally because it either crashes with an exception, terminates the process, or runs infinitely.
- **Exhaustiveness**: \`never\` is also used to represent impossible states in union narrowing (exhaustiveness check).

### Real-World Example
A UI logger utility function returns \`void\` because it prints to the screen. An error handler utility that throws customized exceptions returns \`never\`.

### Best Practice
Implicitly let compiler infer \`void\` for basic event handlers. Explicitly type \`never\` for infinite loop workers or global throw handlers.

### Common Mistakes
Typing an error handler as \`void\`. If it returns \`void\`, TypeScript assumes the code continuing after the function call is reachable, which might not be true.

### Code Example
\`\`\`typescript
// Returns void (implicit undefined)
function logMessage(message: string): void {
  console.log(message);
}

// Returns never (unreachable endpoint)
function throwError(message: string): never {
  throw new Error(message);
}

// Returns never (infinite processing loop)
function infiniteLoop(): never {
  while (true) {
    // Process queue
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই দুটি টাইপ ফাংশন রিটার্ন ফ্লো-এর ক্ষেত্রে ব্যবহৃত হয়:
- **\`void\`**: ফাংশনটির এক্সিকিউশন সফলভাবে সম্পন্ন হয় কিন্তু কোনো ভ্যালু রিটার্ন করে না। জাভাস্ক্রিপ্টের নিয়মে এটি মূলত \`undefined\` রিটার্ন করে।
- **\`never\`**: ফাংশনের শেষ লাইনে পৌঁছানো অসম্ভব। ফাংশনটি কোনো এক্সেপশন থ্রো করে অথবা ইনফিনিট লুপে আটকে থাকে, ফলে রান সফলভাবে কখনো শেষ হয় না।
- **এক্সহস্টিভনেস চেক**: ডিসক্রিমিনেটেড ইউনিয়নে সব কন্ডিশন চেক করা শেষে অসম্ভব স্টেট বোঝাতেও \`never\` ব্যবহার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি স্ক্রিন লগিং ইউটিলিটি ফাংশন \`void\` রিটার্ন করে কারণ এটি আউটপুট প্রিন্ট করে শেষ হয়। অন্য দিকে কাস্টম এক্সেপশন বা এরর হ্যান্ডেল করার ফাংশন \`never\` রিটার্ন করে।

### উত্তম অনুশীলন (Best Practice)
সাধারণ ইভেন্ট হ্যান্ডলারদের ক্ষেত্রে কম্পাইলারকে \`void\` ইনফার করতে দিন। এরর থ্রোকারী হেল্পার বা প্রসেস এক্সিট লজিকের ক্ষেত্রে স্পষ্টভাবে \`never\` ডিফাইন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
এক্সেপশন থ্রোকারী ফাংশনে \`void\` টাইপ দেওয়া। এর ফলে টাইপস্ক্রিপ্ট ধরে নেয় যে ফাংশনটির পরের লাইনের কোডটি এক্সিকিউট করা সম্ভব, যা বাস্তবে ঘটে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// void রিটার্ন করে (implicit undefined)
function logMessage(message: string): void {
  console.log(message);
}

// never রিটার্ন করে (ফাংশন শেষ হবে না)
function throwError(message: string): never {
  throw new Error(message);
}

// never রিটার্ন করে (ইনফিনিট লুপ)
function infiniteLoop(): never {
  while (true) {
    // প্রসেস কিউ
  }
}
\`\`\``
  },
  {
    id: 'typescript-60',
    title: 'Explain Assertion Functions and how they differ from Type Guards.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Assertion Functions', 'Type Guards', 'Validation'],
    enAnswer: 'Assertion Functions check conditions and throw errors if false, narrowing types for the rest of the scope using the asserts condition syntax instead of returning boolean.',
    bnAnswer: 'অ্যাসার্সন ফাংশন কন্ডিশন চেক করে এবং মিথ্যা হলে এরর থ্রো করে। এটি বুলিয়ান রিটার্ন করার পরিবর্তে asserts condition সিনট্যাক্স দিয়ে পুরো স্কোপের বাকি অংশের টাইপ ন্যারো করে।',
    enExplanation: `### Explanation
While a Type Guard returns a \`boolean\` and narrows types inside an \`if\` block, an Assertion Function:
- **Syntax**: Uses \`asserts condition\` or \`asserts val is Type\` in return position.
- **Behavior**: Throws an exception if the check fails. If it passes, the type checker asserts the condition holds true for the remainder of the current block scope.
- Enforces runtime checks while maintaining zero boilerplate in the calling block.

### Real-World Example
Validating environment variables or token parameters at startup. Instead of writing multiple nesting checks, executing \`assertIsString(process.env.API_KEY)\` makes the variable type safe.

### Best Practice
Use assertion functions in initialization pipelines or unit tests to assert states before continuing execution.

### Common Mistakes
Forgetting that assertion functions must throw an error if the condition evaluates to false. Returning a false boolean silently breaks runtime logic.

### Code Example
\`\`\`typescript
// Assertion Function
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Value is not a string!");
  }
}

function processValue(input: unknown) {
  // input.toUpperCase(); // Error: 'input' is of type 'unknown'
  
  assertIsString(input); // Throws if not string
  
  // From here onwards, input is treated as a string
  console.log(input.toUpperCase()); // Safe!
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপ গার্ডস যেখানে \`boolean\` রিটার্ন করে শুধুমাত্র \`if\` কন্ডিশনের ভেতরে টাইপ ন্যারো করে, সেখানে অ্যাসার্সন ফাংশন:
- **সিনট্যাক্স**: রিটার্ন টাইপ হিসেবে \`asserts condition\` বা \`asserts val is Type\` সিনট্যাক্স ব্যবহার করে।
- **আচরণ**: চেক ফেইল হলে এটি সরাসরি এক্সেপশন থ্রো করে। আর পাস হলে, পুরো বাকি ব্লকের স্কোপের জন্য ওই ভ্যারিয়েবলটির টাইপ ডিফাইন করে ফেলে।
- কোডে এক্সট্রা ব্র্যাকেট বা নেস্টিং কন্ডিশন ছাড়াই টাইপ ন্যারো করার এটি একটি দারুণ আধুনিক উপায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অ্যাপ্লিকেশন স্টার্টআপে এনভায়রনমেন্ট ভ্যারিয়েবল ভ্যালিডেশন। একাধিক নেস্টেড কন্ডিশন না লিখে সরাসরি \`assertIsString(process.env.API_KEY)\` কল করলেই সেটি সফল হলে নিচে ওই ভ্যারিয়েবল টাইপ সেফ হিসেবে কাজ করে।

### উত্তম অনুশীলন (Best Practice)
অ্যাপ্লিকেশনের ইনিশিয়ালাইজেশন পাইপলাইন বা ইউনিট টেস্টে কন্ডিশন এনফোর্স করতে অ্যাসার্সন ফাংশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যাসার্সন ফাংশন মিথ্যা বা ফেইল হলে এরর থ্রো না করা। কেবল ফলস রিটার্ন দিলে রানটাইম টাইপস্ক্রিপ্ট সেফটি ব্রেক হয়ে অ্যাপ ক্র্যাশ করতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// অ্যাসার্সন ফাংশন
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Value is not a string!");
  }
}

function processValue(input: unknown) {
  // input.toUpperCase(); // এরর: 'input' is of type 'unknown'
  
  assertIsString(input); // স্ট্রিং না হলে এরর থ্রো করবে
  
  // এর নিচের সব লাইনে input এখন স্ট্রিং হিসেবে কাজ করবে
  console.log(input.toUpperCase()); // সেফ!
}
\`\`\``
  },
  {
    id: 'typescript-61',
    title: 'What are Class Parameter Properties in TypeScript?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Classes', 'Parameter Properties', 'Syntax'],
    enAnswer: 'Parameter Properties allow declaring class properties and initializing them in a single place by prefixing constructor parameters with visibility modifiers (public, private, protected) or readonly.',
    bnAnswer: 'প্যারামিটার প্রোপার্টিজ কনস্ট্রাক্টরের প্যারামিটারে ভিজিবিলিটি মডিফায়ার (public, private, protected) বা readonly যুক্ত করে ক্লাস প্রোপার্টি ডিক্লেয়ার এবং ইনিশিয়ালাইজ করার সংক্ষিপ্ত সুবিধা দেয়।',
    enExplanation: `### Explanation
In standard JavaScript or class definitions, you declare properties at the top, specify them as arguments in the constructor, and then assign them (\`this.name = name\`).
- **Shorthand**: TypeScript merges these three steps into one. Adding an accessibility modifier (\`public\`, \`private\`, \`protected\`, or \`readonly\`) to a constructor parameter automatically creates and initializes that class property.

### Real-World Example
Dependency injection in Nest.js or class-based services. Services are injected dynamically and stored as private properties in a single line.

### Best Practice
Use parameter properties to keep class definitions compact and readable, especially for boilerplate constructors in data models.

### Common Mistakes
Manually writing assignments inside the constructor body when using parameter properties. This creates redundant declaration overrides.

### Code Example
\`\`\`typescript
// Verbose Class Definition
class VerboseUser {
  public id: number;
  private role: string;
  constructor(id: number, role: string) {
    this.id = id;
    this.role = role;
  }
}

// Compact Class Definition using Parameter Properties
class ShorthandUser {
  constructor(
    public readonly id: number,
    private role: string
  ) {}
  
  getRole() {
    return this.role;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট ক্লাসে প্রথমে ওপরে প্রোপার্টি লিখতে হয়, তারপর কনস্ট্রাক্টরে রিসিভ করতে হয় এবং সবশেষে অ্যাসাইন করতে হয় (\`this.name = name\`)।
- **সংক্ষিপ্ত পদ্ধতি**: টাইপস্ক্রিপ্ট এই তিনটি ধাপকে একটি ধাপে নিয়ে আসে। কনস্ট্রাক্টর প্যারামিটারের আগে \`public\`, \`private\`, \`protected\` বা \`readonly\` বসালে টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে প্রোপার্টিটি ক্লাসের মেম্বার হিসেবে ডিক্লেয়ার এবং ইনিশিয়ালাইজ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
Nest.js এর মতো ফ্রেমওয়ার্কে ডিপেন্ডেন্সি ইনজেকশন বা ক্লাস-ভিত্তিক সার্ভিস রাইটিংয়ের সময়। এক লাইনে সার্ভিসটি ইনজেক্ট করে প্রাইভেট প্রোপার্টিতে সংরক্ষণ করা যায়।

### উত্তম অনুশীলন (Best Practice)
ক্লাস বডি সংক্ষিপ্ত ও রিডিবল রাখতে প্যারামিটার প্রোপার্টিজ ব্যবহার করুন, বিশেষ করে ডাটা মডেল তৈরির সময়।

### সাধারণ ভুলসমূহ (Common Mistakes)
প্যারামিটার প্রোপার্টিজ ব্যবহার করার পরও কনস্ট্রাক্টর বডির ভেতরে ম্যানুয়ালি \`this.id = id\` লেখার চেষ্টা করা। এটি ডুপ্লিকেট ওভাররাইট তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// সনাতন ক্লাস ডেফিনিশন (বড় কোড)
class VerboseUser {
  public id: number;
  private role: string;
  constructor(id: number, role: string) {
    this.id = id;
    this.role = role;
  }
}

// প্যারামিটার প্রোপার্টি ব্যবহার করে সংক্ষিপ্ত ক্লাস ডেফিনিশন
class ShorthandUser {
  constructor(
    public readonly id: number,
    private role: string
  ) {}
  
  getRole() {
    return this.role;
  }
}
\`\`\``
  },
  {
    id: 'typescript-62',
    title: 'Explain Abstract Classes vs Interfaces and when to use which.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'OOP', 'Abstract Classes', 'Interfaces'],
    enAnswer: 'Interfaces define object structure only and produce zero JS output. Abstract classes are templates that can contain both implementation details and abstract method declarations.',
    bnAnswer: 'ইন্টারফেস শুধুমাত্র অবজেক্টের স্ট্রাকচার ডিফাইন করে এবং কোনো JS আউটপুট দেয় না। অ্যাবস্ট্রাক্ট ক্লাস হলো এমন টেমপ্লেট যাতে ইমপ্লিমেন্টেশন লজিক এবং অ্যাবস্ট্রাক্ট মেথড ডিক্লেয়ারেশন উভয়ই থাকতে পারে।',
    enExplanation: `### Explanation
- **Interfaces**: Strictly compile-time contracts. They cannot contain actual JS code or implemented functions.
- **Abstract Classes**: Runtime classes that cannot be instantiated directly. They can contain fully written helper methods, properties, and constructors alongside abstract signatures that child classes must override.

### Real-World Example
In complex architectures like payment gateway integrations, you might write an \`AbstractPaymentGateway\` with built-in logging and verification flow, leaving details like \`processTransaction\` abstract for PayPal and Stripe classes to implement.

### Best Practice
Use an \`interface\` if you only need to describe contracts or type definitions. Use an \`abstract class\` if you want to share common concrete code/logic between multiple subclass hierarchies.

### Common Mistakes
Trying to instantiate an abstract class directly. \`new AbstractClass()\` triggers a compiler error.

### Code Example
\`\`\`typescript
// Interface contract
interface Drivable {
  drive(): void;
}

// Abstract Class
abstract class Vehicle {
  constructor(public model: string) {}
  
  // Concrete method (shared implementation)
  startEngine() {
    console.log("Engine started...");
  }
  
  // Abstract method (must be implemented by subclass)
  abstract move(): void;
}

class Car extends Vehicle {
  move() {
    console.log("Driving...");
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ইন্টারফেস (Interfaces)**: শুধুমাত্র কম্পাইল-টাইম কন্টাক্ট যা কোনো রানটাইম জাভাস্ক্রিপ্ট কোড তৈরি করে না।
- **অ্যাবস্ট্রাক্ট ক্লাস (Abstract Classes)**: রানটাইমে ক্লাস অবজেক্ট হিসেবে থাকে কিন্তু সরাসরি ইনস্ট্যান্স তৈরি করা যায় না। এতে হেল্পার মেথড, ডিফল্ট কনস্ট্রাক্টর ও লজিক থাকতে পারে, পাশাপাশি কিছু মেথডকে চাইল্ড ক্লাসের ইমপ্লিমেন্টেশনের জন্য ওপেন রাখা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি পেমেন্ট গেটওয়ে আর্কিটেকচারে, আপনি একটি \`AbstractPaymentGateway\` ক্লাস লিখে তার ভেতরে কমন লগিং ও ভেরিফিকেশন কোড শেয়ার করতে পারেন, আর \`processTransaction\` মেথডটি খালি রাখতে পারেন যা Stripe বা PayPal ক্লাস তাদের প্রয়োজনমতো ওভাররাইড করে লিখবে।

### উত্তম অনুশীলন (Best Practice)
কেবল অবজেক্টের কন্টাক্ট বা টাইপ ডিফাইন করতে চাইলে \`interface\` ব্যবহার করুন। সাব-ক্লাসগুলোর মধ্যে কমন মেথড ও লজিক শেয়ার করতে চাইলে \`abstract class\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যাবস্ট্রাক্ট ক্লাসের সরাসরি অবজেক্ট তৈরি করার চেষ্টা করা। \`new AbstractClass()\` লিখলে টাইপস্ক্রিপ্ট কম্পাইল এরর দেখাবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইন্টারফেস কন্টাক্ট
interface Drivable {
  drive(): void;
}

// অ্যাবস্ট্রাক্ট ক্লাস
abstract class Vehicle {
  constructor(public model: string) {}
  
  // কংক্রিট মেথড (শেয়ার্ড লজিক)
  startEngine() {
    console.log("ইঞ্জিন চালু হয়েছে...");
  }
  
  // অ্যাবস্ট্রাক্ট মেথড (চাইল্ড ক্লাসে অবশ্যই ইমপ্লিমেন্ট করতে হবে)
  abstract move(): void;
}

class Car extends Vehicle {
  move() {
    console.log("গাড়ি চলছে...");
  }
}
\`\`\``
  },
  {
    id: 'typescript-63',
    title: 'Explain Indexed Access Types and how they query nested properties.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Indexed Access Types', 'Types', 'JSON'],
    enAnswer: 'Indexed Access Types look up the type of a specific property of another type using brackets (T[K]), similar to retrieving properties in JavaScript.',
    bnAnswer: 'ইনডেক্সড অ্যাক্সেস টাইপস থার্ড ব্র্যাকেট (T[K]) ব্যবহারের মাধ্যমে অন্য কোনো টাইপের নির্দিষ্ট প্রোপার্টির টাইপ খুঁজে বের করে, যা জাভাস্ক্রিপ্টে অবজেক্ট প্রোপার্টি রিট্রিভ করার মতো।',
    enExplanation: `### Explanation
Indexed Access Types allow you to extract the type of a nested property from a larger type structure:
- **Syntax**: \`TargetType["propertyName"]\`.
- **Dynamics**: You can also use unions in the brackets to get a union of the sub-properties: \`TargetType["id" | "name"]\`.
- **Arrays**: You can lookup array element types using \`T[number]\`.

### Real-World Example
Typing elements within complex lists. If your API returns a user array, using \`UserListResponse["users"][number]\` extracts the single User object type without requiring it to be exported.

### Best Practice
Instead of manually declaring sub-types, query nested properties to maintain a single source of truth for your data structures.

### Common Mistakes
Using variables or dynamic values inside the lookup brackets instead of type literals. E.g., \`User[key]\` will fail because type resolution occurs at compile time.

### Code Example
\`\`\`typescript
interface AppConfig {
  db: {
    host: string;
    port: number;
  };
  services: string[];
}

// Extract nested db configurations type
type DbConfig = AppConfig['db']; // { host: string; port: number }

// Extract union of property types
type DbValues = AppConfig['db']['host' | 'port']; // string | number

// Extract array element type
type ServiceItem = AppConfig['services'][number]; // string
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ইনডেক্সড অ্যাক্সেস টাইপস একটি বড় টাইপ স্ট্রাকচার থেকে সুনির্দিষ্ট নেস্টেড প্রোপার্টির টাইপ রিট্রিভ করার সুবিধা দেয়:
- **সিনট্যাক্স**: \`TargetType["propertyName"]\`।
- **ডাইনামিক ব্যবহার**: ব্র্যাকেটের ভেতরে ইউনিয়ন টাইপ দিয়ে সাব-প্রোপার্টির ইউনিয়ন পাওয়া যায়: \`TargetType["id" | "name"]\`।
- **অ্যারে**: \`T[number]\` ব্যবহার করে অ্যারের মেম্বার টাইপ এক্সট্র্যাক্ট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
জটিল ডাটা তালিকার উপাদান টাইপ করা। যদি API একটি ইউজার অ্যারে প্রদান করে, তবে \`UserListResponse["users"][number]\` ব্যবহার করে আলাদা এক্সপোর্ট ছাড়াই একটি সিঙ্গেল ইউজার অবজেক্টের টাইপ পাওয়া যায়।

### উত্তম অনুশীলন (Best Practice)
সাব-টাইপগুলো আলাদা করে ডিফাইন না করে ইনডেক্সড অ্যাক্সেস টাইপ ব্যবহার করে সিঙ্গেল সোর্স অব ট্রুথ বজায় রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
লুকআপ ব্র্যাকেটের ভেতর টাইপ লিটারেলের পরিবর্তে রানটাইম ভ্যারিয়েবল পাস করা। যেমন, \`User[key]\` এরর দেবে কারণ টাইপ রেজোলিউশন কম্পাইল টাইমে সম্পন্ন হয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface AppConfig {
  db: {
    host: string;
    port: number;
  };
  services: string[];
}

// নেস্টেড ডাটাবেজ কনফিগারেশনের টাইপ এক্সট্র্যাক্ট করা
type DbConfig = AppConfig['db']; // { host: string; port: number }

// প্রোপার্টির টাইপের ইউনিয়ন এক্সট্র্যাক্ট করা
type DbValues = AppConfig['db']['host' | 'port']; // string | number

// অ্যারে উপাদানের টাইপ এক্সট্র্যাক্ট করা
type ServiceItem = AppConfig['services'][number]; // string
\`\`\``
  },
  {
    id: 'typescript-64',
    title: 'Explain the satisfies operator and how it differs from type assertions.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Satisfies Operator', 'Type Assertions', 'TS 4.9'],
    enAnswer: 'satisfies validates that an expression matches a type without changing its inferred type. Assertions (as) force the compiler to treat a value as a specific type, potentially bypassing checks.',
    bnAnswer: 'satisfies অপারেটর ভ্যালুর মূল ইনফারড টাইপ পরিবর্তন না করে এটি একটি নির্দিষ্ট টাইপকে কন্টাক্ট করে কিনা তা চেক করে। অন্য দিকে, অ্যাসার্সন (as) কম্পাইলারকে নির্দিষ্ট টাইপ ট্রিট করতে বাধ্য করে।',
    enExplanation: `### Explanation
Introduced in TypeScript 4.9, the \`satisfies\` operator:
- **Type Verification**: Checks if an object literal matches an interface or type constraint.
- **Maintains Specificity**: Retains the specific properties or literal values inferred by the compiler.
- **Contrast with \`as\`**: Using \`as\` (type casting) bypasses safety checks and forces the type, whereas \`satisfies\` alerts you to missing properties while keeping the exact literal attributes.

### Real-World Example
Defining color themes in tailwind configurations. You want to make sure colors match a strict type, but you still want the editor to autocomplete specific hex values like \`#ff0000\` rather than just generalized strings.

### Best Practice
Prefer \`satisfies\` over type annotations or type assertions when validating configurations to retain exact types for autocomplete.

### Common Mistakes
Using \`satisfies\` when you actually want to cast a broad type to a narrow one. \`satisfies\` does not cast; it only validates.

### Code Example
\`\`\`typescript
type Color = string | { r: number, g: number, b: number };
type Palette = Record<string, Color>;

// Using annotation (widens types, autocomplete on rgb object fails)
const paletteWide: Palette = {
  red: "#ff0000",
  green: { r: 0, g: 255, b: 0 }
};
// paletteWide.green.r // Error: Property 'r' does not exist on type 'Color'.

// Using satisfies (Validates structure, retains specific type)
const paletteStrict = {
  red: "#ff0000",
  green: { r: 0, g: 255, b: 0 }
} satisfies Palette;

console.log(paletteStrict.green.r); // Valid! Autocomplete works because the specific structure is preserved.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট ৪.৯-এ প্রবর্তিত \`satisfies\` অপারেটর:
- **টাইপ ভেরিফিকেশন**: চেক করে যে একটি অবজেক্ট লিটারেল নির্দিষ্ট টাইপের সাথে কনফর্ম বা ম্যাচ করছে কিনা।
- **স্পেসিফিসিটি বজায় রাখা**: অবজেক্টের নিজস্ব প্রোপার্টির নির্দিষ্ট টাইপ বা লিটারেল ভ্যালু প্রিজার্ভ করে।
- **\`as\` এর সাথে পার্থক্য**: \`as\` (টাইপ কাস্টিং) সেফটি চেক এ্যাসকেপ করে টাইপ অ্যাসাইন করতে বাধ্য করে। যেখানে \`satisfies\` টাইপ ভ্যালিডেট করে ও সঠিক লিটারেল অ্যাট্রিবিউট ধরে রাখে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
থিম কালার কনফিগারেশন করার সময়। আপনি কালারগুলো নির্দিষ্ট নিয়মে আছে কিনা তা নিশ্চিত করতে চান, আবার এডিটরে কালারের হেক্স কোড বা rgb ফাংশনে অটো-কমপ্লিটের সুবিধাও হারাতে চান না।

### উত্তম অনুশীলন (Best Practice)
কনফিগারেশন ফাইল ভ্যালিডেট করার সময় টাইপ অ্যানোটেশন বা টাইপ অ্যাসার্সন (\`as\`) এর চেয়ে \`satisfies\` ব্যবহার করাকে প্রাধান্য দিন যাতে অটো-কমপ্লিট ঠিক থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপ কাস্ট করার উদ্দেশ্যে \`satisfies\` ব্যবহার করা। \`satisfies\` টাইপ কাস্ট করে না, কেবল ভ্যালিডেশন চেক করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type Color = string | { r: number, g: number, b: number };
type Palette = Record<string, Color>;

// অ্যানোটেশন ব্যবহার করলে টাইপ ওয়াইড হয়ে যায়, rgb অবজেক্ট অটোকমপ্লিট হবে না
const paletteWide: Palette = {
  red: "#ff0000",
  green: { r: 0, g: 255, b: 0 }
};
// paletteWide.green.r // এরর: Property 'r' does not exist on type 'Color'.

// satisfies ব্যবহার (ভ্যালিডেট করবে এবং স্পেসিফিক টাইপ ধরে রাখবে)
const paletteStrict = {
  red: "#ff0000",
  green: { r: 0, g: 255, b: 0 }
} satisfies Palette;

console.log(paletteStrict.green.r); // ভ্যালিড! অটোকমপ্লিট কাজ করবে কারণ আসল টাইপটি বজায় আছে।
\`\`\``
  },
  {
    id: 'typescript-65',
    title: 'Explain Const Type Parameters (const modifiers on generics) in TypeScript 5.0.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Generics', 'Const Generics', 'TS 5.0'],
    enAnswer: 'Const Type Parameters allow generics to automatically infer literal types (as const) for arguments passed to a function without requiring manual as const cast.',
    bnAnswer: 'Const Type Parameters জেনেরিকসের মাধ্যমে ফাংশনে পাস করা আর্গুমেন্টের লিটারেল টাইপ স্বয়ংক্রিয়ভাবে ইনফার (as const এর মতো) করার সুবিধা দেয়, ম্যানুয়ালি as const লিখতে হয় না।',
    enExplanation: `### Explanation
Prior to TypeScript 5.0, when you passed an object literal to a generic function, it would infer a wide type (e.g. \`string\` instead of the exact string value). Developers had to add \`as const\` manually.
- **TypeScript 5.0 Shorthand**: Adding \`const\` before the type parameter in a generic definition tells the compiler to infer the narrowest possible literal types for any passed values.

### Real-World Example
A configuration parser function or routing registry where you register paths and want the return types to contain the exact route name strings for validation.

### Best Practice
Use \`const\` type parameters in routing, layout registry, or payload definitions to avoid forcing consumers to type \`as const\` at call sites.

### Common Mistakes
Assuming \`const\` parameters make mutable inputs impossible. It only affects compile-time type inference; it does not freeze the object at runtime.

### Code Example
\`\`\`typescript
// Before TS 5.0
function routesOld<T extends { path: string }>(arg: T): T {
  return arg;
}
const r1 = routesOld({ path: "/home" }); // Inferred as: { path: string }

// TS 5.0: Using const modifier on type parameter
function routesNew<const T extends { path: string }>(arg: T): T {
  return arg;
}
const r2 = routesNew({ path: "/home" }); // Inferred as: { readonly path: "/home" } (Literal!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট ৫.০ এর আগে জেনেরিক ফাংশনে অবজেক্ট পাস করলে কম্পাইলার ওয়াইড টাইপ (\`string\`) ইনফার করতো। সঠিক লিটারেল পেতে ডেভেলপারদের ম্যানুয়ালি \`as const\` যুক্ত করতে হতো।
- **টাইপস্ক্রিপ্ট ৫.০ সমাধান**: জেনেরিক প্যারামিটারের শুরুতে \`const\` মডিফায়ার বসানোর মাধ্যমে ফাংশনে পাস করা প্যারামিটারের ন্যারো বা লিটারেল টাইপ স্বয়ংক্রিয়ভাবে ইনফার করে নেওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি রাউটিং রেজিস্ট্রি বা কনফিগারেশন ফাংশন যেখানে আপনি পাথের নাম রেজিস্ট্রেশন করেন এবং চান যে রিটার্ন টাইপে অবজেক্টের অরিজিনাল পাথ স্ট্রিং সরাসরি ইনফার হোক।

### উত্তম অনুশীলন (Best Practice)
রাউটিং, লেআউট সিস্টেম এবং পে-লোড কনফিগারেশনে \`const\` টাইপ প্যারামিটার ব্যবহার করুন যাতে ব্যবহারকারীকে ম্যানুয়ালি \`as const\` লিখতে না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`const\` টাইপ প্যারামিটার রানটাইমে অবজেক্ট ফ্রিজ (freeze) করে ফেলে। এটি কেবল কম্পাইল-টাইম টাইপ ইনফারেন্সে কাজ করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// TS 5.0 এর আগে
function routesOld<T extends { path: string }>(arg: T): T {
  return arg;
}
const r1 = routesOld({ path: "/home" }); // ইনফার হবে: { path: string }

// TS 5.0: টাইপ প্যারামিটারে const মডিফায়ারের ব্যবহার
function routesNew<const T extends { path: string }>(arg: T): T {
  return arg;
}
const r2 = routesNew({ path: "/home" }); // ইনফার হবে: { readonly path: "/home" } (লিটারেল!)
\`\`\``
  },
  {
    id: 'typescript-66',
    title: 'How do you implement a Type-Safe Event Emitter in TypeScript?',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Design Patterns', 'Event Emitters', 'Generics'],
    enAnswer: 'A Type-Safe Event Emitter maps event names to their specific parameter structures in a generic interface, forcing emit and listen calls to validate parameters.',
    bnAnswer: 'টাইপ-সেফ ইভেন্ট এমিটার ইভেন্ট নেমগুলোকে একটি জেনেরিক ইন্টারফেসে নির্দিষ্ট প্যারামিটার স্ট্রাকচারের সাথে ম্যাপ করে, যা emit এবং listen কলারদের প্যারামিটার ভ্যালিডেশন চেক করায়।',
    enExplanation: `### Explanation
Standard Node.js \`EventEmitter\` takes event names as arbitrary strings and arguments as \`any[]\`. To make it type-safe:
1. Define an interface mapping event names to function parameter tuples.
2. Extend or wrap the event emitter class using generic methods that look up event types from this interface.

### Real-World Example
Managing WebSockets or inner-application pub/sub events. Ensuring that trigger event \`"userLoggedIn"\` must supply a \`User\` object, preventing missing parameters in event listeners.

### Best Practice
Always build a typesafe wrapper around standard Node/browser emitters in large systems to prevent silently unhandled events.

### Common Mistakes
Using \`any\` as the arguments type parameter, which completely bypasses event validation.

### Code Example
\`\`\`typescript
// Define event payloads
interface AppEvents {
  login: [userId: string, role: string];
  logout: [];
}

class TypedEventEmitter<TEvents> {
  private listeners: { [K in keyof TEvents]?: Function[] } = {};

  on<K extends keyof TEvents>(event: K, listener: (...args: TEvents[K] extends any[] ? TEvents[K] : []) => void) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]?.push(listener);
  }

  emit<K extends keyof TEvents>(event: K, ...args: TEvents[K] extends any[] ? TEvents[K] : []) {
    this.listeners[event]?.forEach(fn => fn(...args));
  }
}

const emitter = new TypedEventEmitter<AppEvents>();
emitter.on("login", (userId, role) => console.log(userId, role));
// emitter.emit("login", "usr-1"); // Error: Expected 2 arguments, but got 1.
emitter.emit("login", "usr-1", "admin"); // Safe!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্ট্যান্ডার্ড নোড ডট জেএস \`EventEmitter\` ইভেন্টের নামগুলোকে যেকোনো স্ট্রিং এবং আর্গুমেন্টকে \`any[]\` হিসেবে গ্রহণ করে। এটিকে টাইপ-সেফ করতে:
1. একটি ইন্টারফেস তৈরি করে ইভেন্ট নেম এবং তাদের প্যারামিটার টাপলের ম্যাপিং ডিফাইন করুন।
2. জেনেরিক মেথড ব্যবহার করে স্ট্যান্ডার্ড এমিটার ক্লাসটিকে র‍্যাপ বা এক্সটেন্ড করুন যা ওই ইন্টারফেস থেকে ডাটা ভ্যালিডেশন করাবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
WebSocket বা চ্যাট অ্যাপ্লিকেশনের পাব/সাব ইভেন্ট ম্যানেজ করা। এটি নিশ্চিত করে যে \`"userLoggedIn"\` ইভেন্ট ফায়ার করলে সাথে অবশ্যই \`User\` অবজেক্ট দিতে হবে, অন্যথায় বিল্ড এরর দেবে।

### উত্তম অনুশীলন (Best Practice)
বড় প্রজেক্টে ব্রাউজার বা নোড ইভেন্ট এমিটার ব্যবহারের সময় একটি কাস্টম টাইপ-সেফ র‍্যাপার বানিয়ে নিন যাতে কোনো ইভেন্ট আনহ্যান্ডেলড না থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
আর্গুমেন্ট টাইপের জন্য \`any\` ব্যবহার করা, যা ইভেন্টের ডাটা ভ্যালিডেশন সম্পূর্ণ নষ্ট করে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইভেন্ট পে-লোড ইন্টারফেস
interface AppEvents {
  login: [userId: string, role: string];
  logout: [];
}

class TypedEventEmitter<TEvents> {
  private listeners: { [K in keyof TEvents]?: Function[] } = {};

  on<K extends keyof TEvents>(event: K, listener: (...args: TEvents[K] extends any[] ? TEvents[K] : []) => void) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]?.push(listener);
  }

  emit<K extends keyof TEvents>(event: K, ...args: TEvents[K] extends any[] ? TEvents[K] : []) {
    this.listeners[event]?.forEach(fn => fn(...args));
  }
}

const emitter = new TypedEventEmitter<AppEvents>();
emitter.on("login", (userId, role) => console.log(userId, role));
// emitter.emit("login", "usr-1"); // এরর: Expected 2 arguments, but got 1.
emitter.emit("login", "usr-1", "admin"); // সেফ!
\`\`\``
  },
  {
    id: 'typescript-67',
    title: 'Explain Strict Index Signatures and the noUncheckedIndexedAccess compiler flag.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Index Signatures', 'tsconfig.json', 'Safety'],
    enAnswer: 'noUncheckedIndexedAccess changes index signature lookups to implicitly include undefined, preventing runtime errors by forcing safety checks before property access.',
    bnAnswer: 'noUncheckedIndexedAccess ইনডেক্স সিগনেচার লুকআপের ক্ষেত্রে implicitly undefined যুক্ত করে দেয়, যা রানটাইম এরর এড়াতে ভ্যালু ব্যবহারের আগে সেফটি চেক করতে বাধ্য করে।',
    enExplanation: `### Explanation
By default, if you have an index signature like \`Record<string, number>\`, retrieving any arbitrary key yields the type \`number\`. But at runtime, retrieving a missing key yields \`undefined\`!
- **\`noUncheckedIndexedAccess\`**: Enabling this compiler flag changes the return type of index signature lookups to include \`undefined\`, e.g. \`number | undefined\`.
- This enforces strict checking before you do math or apply functions to index-accessed properties.

### Real-World Example
Processing dictionary items. In a map of users keyed by ID, fetching a user dynamically can yield \`undefined\` if the ID doesn't exist. Enabling this flag catches this possibility at compile time.

### Best Practice
Enable \`noUncheckedIndexedAccess\` in your compiler options to get maximum safety when building database mappings or string cache lookups.

### Common Mistakes
Thinking index signature lookups are safe by default. Without this flag, TypeScript lets you call methods directly on non-existent keys, causing runtime crashes.

### Code Example
\`\`\`typescript
// tsconfig.json options: "noUncheckedIndexedAccess": true

const userScores: Record<string, number> = {
  rohit: 95
};

// Without flag: score is inferred as 'number'
// With flag: score is inferred as 'number | undefined'
const score = userScores["some_random_user"];

// score.toFixed(); // Error: Object is possibly 'undefined'.

if (score !== undefined) {
  console.log(score.toFixed()); // Safe!
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে, আপনার কাছে যদি \`Record<string, number>\` এর মতো ইনডেক্স সিগনেচার থাকে, তবে যেকোনো কি-র জন্য টাইপ \`number\` দেখায়। কিন্তু বাস্তবে যদি কি-টি না থাকে, তবে রানটাইমে সেটি \`undefined\` দেয়!
- **\`noUncheckedIndexedAccess\`**: এই কম্পাইলার ফ্ল্যাগটি এনাবল করলে ইনডেক্স সিগনেচার দিয়ে অ্যাক্সেস করা সকল ভ্যালুর সাথে স্বয়ংক্রিয়ভাবে \`undefined\` যুক্ত হয়ে যায়, যেমন \`number | undefined\`।
- এর ফলে ওই ডাটার ওপর কাজ করার আগে আপনাকে অবশ্যই আনডিফাইন্ড ভ্যালু হ্যান্ডেল বা চেক করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডিকশনারি ডাটা প্রোসেস করা। ইউজার আইডি দিয়ে ডিকশনারি থেকে ডেটা রিট্রিভ করার সময় আইডিটি না পাওয়া গেলে ভ্যালু \`undefined\` হবে। এই ফ্ল্যাগটি কম্পাইল টাইমেই এই ভুলটি সংশোধন করে দেয়।

### উত্তম অনুশীলন (Best Practice)
ডাটাবেজ ম্যাপিং বা স্ট্রিং ক্যাশ নিয়ে কাজ করার সময় সর্বোচ্চ নিরাপত্তা পেতে \`tsconfig.json\` ফাইলে \`noUncheckedIndexedAccess\` ফ্ল্যাগটি এনাবল করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনডেক্স সিগনেচার লুকআপ সবসময় ডাটা দিবে মনে করা। এই ফ্ল্যাগটি ছাড়া টাইপস্ক্রিপ্ট আপনাকে রানটাইমে না থাকা ভ্যালুর ওপর সরাসরি ফাংশন কল করতে দেবে, যা অ্যাপ ক্র্যাশ করাবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// tsconfig.json কনফিগারেশন: "noUncheckedIndexedAccess": true

const userScores: Record<string, number> = {
  rohit: 95
};

// ফ্ল্যাগ ছাড়া: score এর টাইপ দেখাতো 'number'
// ফ্ল্যাগ সহ: score এর টাইপ দেখাবে 'number | undefined'
const score = userScores["some_random_user"];

// score.toFixed(); // এরর: Object is possibly 'undefined'.

if (score !== undefined) {
  console.log(score.toFixed()); // সুরক্ষিত!
}
\`\`\``
  },
  {
    id: 'typescript-68',
    title: 'Explain Nullish Coalescing (??) and Optional Chaining (?.) type safety.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Nullish Coalescing', 'Optional Chaining', 'Operators'],
    enAnswer: 'Optional chaining (?.) stops evaluation if reference is nullish. Nullish coalescing (??) provides a fallback only if value is null or undefined, not empty strings or 0.',
    bnAnswer: 'অপশনাল চেইনিং (?.) রেফারেন্স নালেবল হলে এক্সিকিউশন বন্ধ করে দেয়। নালেশ কোয়ালিসিং (??) শুধুমাত্র null বা undefined হলেই ফলব্যাক মান দেয়, ফালসি স্ট্রিং বা 0 হলে দেয় না।',
    enExplanation: `### Explanation
These ES2020 operators help write clean and safe property accesses:
- **\`?.\` (Optional Chaining)**: Short-circuits property lookup. If the left side is \`null\` or \`undefined\`, it returns \`undefined\` immediately instead of throwing a runtime error.
- **\`??\` (Nullish Coalescing)**: Returns the right-hand operand only if the left-hand operand is \`null\` or \`undefined\`. Unlike \`||\`, it does not fallback on empty strings (\`""\`) or zero (\`0\`).

### Real-World Example
Accessing optional UI settings. If a user settings object is undefined, accessing nested properties won't crash the frontend. If a user sets score as \`0\`, we don't want a default fallback of \`10\` to trigger.

### Best Practice
Always prefer \`??\` over \`||\` when assigning default values for numbers or strings, ensuring valid \`0\` or \`""\` values are preserved.

### Common Mistakes
Using \`||\` for default values where \`0\` or empty string is a valid business logic state, leading to silent bugs.

### Code Example
\`\`\`typescript
interface UserSettings {
  theme?: string;
  volume?: number;
}

const settings: UserSettings = { volume: 0 };

// Optional Chaining & Nullish Coalescing
const theme = settings.theme?.toUpperCase() ?? "DARK"; // "DARK"
const volumeOrTen = settings.volume ?? 10; // returns 0 (not 10, because 0 is valid!)
const volumeOrTenJS = settings.volume || 10; // returns 10 (incorrect fallback!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই অপারেটরগুলো সহজে সেফ অবজেক্ট ও প্রোপার্টি রিট্রিভ করতে সাহায্য করে:
- **\`?.\` (অপশনাল চেইনিং)**: অবজেক্ট বা প্রোপার্টি না থাকলে সাথে সাথে এক্সিকিউশন শর্ট সার্কিট করে রানটাইম এরর আটকায় ও \`undefined\` রিটার্ন করে।
- **\`??\` (নালেশ কোয়ালিসিং)**: বাম পাশের উপাদানটি কেবল \`null\` বা \`undefined\` হলে ডান পাশের ফলব্যাক ভ্যালু রিটার্ন করে। এটি লজিক্যাল OR (\`||\`) এর চেয়ে আলাদা কারণ এটি খালি স্ট্রিং (\`""\`) বা শূন্য (\`0\`) কে ফলব্যাক করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ঐচ্ছিক ইউজার সেটিংস অ্যাক্সেস করা। ব্যবহারকারীর ভলিউম সেটিং যদি \`0\` এ থাকে, তবে আমরা ডিফল্ট ভ্যালু হিসেবে \`10\` সেট করতে চাই না। এ ক্ষেত্রে \`??\` ব্যবহার করলে \`0\` এর ভ্যালু সংরক্ষিত থাকে।

### উত্তম অনুশীলন (Best Practice)
নম্বর বা স্ট্রিংয়ের ডিফল্ট মান সেট করার ক্ষেত্রে সবসময় \`||\` এর বদলে \`??\` ব্যবহার করুন, যাতে শূন্য বা খালি টেক্সট ইনপুটগুলো সঠিক থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
এমন জায়গায় \`||\` ব্যবহার করা যেখানে \`0\` বা খালি স্ট্রিং ব্যবসায়িক লজিকের জন্য একটি ভ্যালিড ডাটা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface UserSettings {
  theme?: string;
  volume?: number;
}

const settings: UserSettings = { volume: 0 };

// অপশনাল চেইনিং এবং নালেশ কোয়ালিসিং
const theme = settings.theme?.toUpperCase() ?? "DARK"; // "DARK"
const volumeOrTen = settings.volume ?? 10; // 0 রিটার্ন করবে (0 ভ্যালিড!)
const volumeOrTenJS = settings.volume || 10; // 10 রিটার্ন করবে (ভুল ফলব্যাক!)
\`\`\``
  },
  {
    id: 'typescript-69',
    title: 'Explain how to design Type-Safe Routing parameters.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Routing', 'Design Patterns', 'Type Safety'],
    enAnswer: 'Type-safe routing maps route paths to their expected query and parameter shapes, preventing developers from passing incorrect parameters during navigation.',
    bnAnswer: 'টাইপ-সেফ রাউটিং রাউট পাথগুলোকে তাদের প্রত্যাশিত কুয়েরি এবং প্যারামিটার শেপের সাথে ম্যাপ করে, যা নেভিগেশনের সময় ভুল প্যারামিটার পাস করা রোধ করে।',
    enExplanation: `### Explanation
In typical router libraries, paths are strings like \`"/user/:id"\`. To enforce parameters:
1. Define a routing configuration map where paths are the keys.
2. Use template literal types and mapped types to parse route path parameters dynamically, or define type maps manually to validate inputs.

### Real-World Example
Typing a \`navigate\` helper function. Instead of letting anyone call \`navigate("/user/123")\`, the compiler requires checking if the path exists in the application registry and enforces the parameters if \`"/user/:userId"\` is called.

### Best Practice
Utilize router libraries that support type-safe parameters (like TanStack Router or typed route mappings in Next.js) to scale application navigation safely.

### Common Mistakes
Hardcoding path strings throughout the components without checking path maps, which leads to dead routes when routes are refactored.

### Code Example
\`\`\`typescript
// Map of paths to their parameters
interface RouteParams {
  '/home': never;
  '/user/:id': { id: string };
  '/product/:id/reviews': { id: string; limit?: number };
}

function navigate<Path extends keyof RouteParams>(
  path: Path, 
  ...params: RouteParams[Path] extends never ? [] : [params: RouteParams[Path]]
) {
  console.log("Navigating to", path, params);
}

navigate('/home'); // Valid
// navigate('/user/:id'); // Error: Expected 2 arguments, but got 1.
navigate('/user/:id', { id: "8891" }); // Valid!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ রাউটার লাইব্রেরিতে পাথগুলো সাধারণ স্ট্রিং হিসেবে থাকে। টাইপ সেফটি নিশ্চিত করতে:
1. একটি রাউটিং কনফিগারেশন ম্যাপ ডিফাইন করুন যেখানে পাথগুলো হলো অবজেক্ট কি (keys)।
2. টেমপ্লেট লিটারেল টাইপ বা ম্যানুয়াল রাউট ম্যাপিং ব্যবহার করে প্যারামিটার টাইপ ডিফাইন করুন যা কম্পাইল টাইমে ভ্যালিডেশন চেক করাবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি \`navigate\` হেল্পার ফাংশন টাইপ করা। যেকোনো আনকন্ট্রোলড স্ট্রিং নেভিগেট করার বদলে, কম্পাইলার নিশ্চিত করবে যে পাথটি আমাদের রেজিস্ট্রি ফাইলে আছে এবং \`"/user/:userId"\` কল করলে সঠিক প্যারামিটার দেওয়া হয়েছে।

### উত্তম অনুশীলন (Best Practice)
আধুনিক প্রজেক্টে টাইপ-সেফ রাউটিং লাইব্রেরি (যেমন TanStack Router বা Next.js typed routes) ব্যবহার করুন যাতে নেভিগেশন মিস্টেক এড়ানো যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
পুরো অ্যাপের কম্পোনেন্টে হার্ডকোডেড পাথ ব্যবহার করা, যা রাউট রিফ্যাক্টর করার সময় ডেড লিঙ্কের সৃষ্টি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// পাথের প্যারামিটার ম্যাপিং
interface RouteParams {
  '/home': never;
  '/user/:id': { id: string };
  '/product/:id/reviews': { id: string; limit?: number };
}

function navigate<Path extends keyof RouteParams>(
  path: Path, 
  ...params: RouteParams[Path] extends never ? [] : [params: RouteParams[Path]]
) {
  console.log("Navigating to", path, params);
}

navigate('/home'); // ভ্যালিড
// navigate('/user/:id'); // এরর: Expected 2 arguments, but got 1.
navigate('/user/:id', { id: "8891" }); // ভ্যালিড!
\`\`\``
  },
  {
    id: 'typescript-70',
    title: 'Explain Function Overloads and when to use them.',
    difficulty: 'intermediate',
    category: 'typescript',
    tags: ['TypeScript', 'Functions', 'Overloads', 'API Design'],
    enAnswer: 'Function Overloads provide multiple signature declarations for a single function, letting TypeScript resolve the return type based on the inputs provided.',
    bnAnswer: 'ফাংশন ওভারলোডস একটি সিঙ্গেল ফাংশনের জন্য একাধিক সিগনেচার ঘোষণার অনুমতি দেয়, যার ফলে ইনপুটের ওপর ভিত্তি করে টাইপস্ক্রিপ্ট সঠিক রিটার্ন টাইপ নির্ধারণ করতে পারে।',
    enExplanation: `### Explanation
In JavaScript, a single function can accept different argument counts and types.
- **Function Overloads**: You declare one or more "overload signatures" (describing arguments and return type) without function bodies.
- **Implementation Signature**: Right below the overloads, you write the actual implementation signature and body. This implementation must be compatible with all overload signatures.
- **Visibility**: The compiler only exposes the overload signatures to callers; the implementation signature itself is hidden.

### Real-World Example
Writing a data formatting handler that accepts a timestamp (number) or Date object and returns either a formatted string or unix epoch value.

### Best Practice
Use overloads to simplify APIs when a function returns completely different shapes depending on parameter types. If return types are identical, prefer union parameters.

### Common Mistakes
Forgetting that the implementation signature is not callable directly. It must accommodate all of the overload patterns or else compiling fails.

### Code Example
\`\`\`typescript
// Overload Signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// Implementation Signature (hidden to callers)
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(1718800000); // Resolves via overload 1
const d2 = makeDate(5, 19, 2026);   // Resolves via overload 2
// const d3 = makeDate(5, 19); // Error: No overload expects 2 arguments.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট ফাংশন একই সাথে বিভিন্ন ধরনের আর্গুমেন্ট রিসিভ করতে পারে।
- **ফাংশন ওভারলোডস**: কোনো ফাংশন বডি ছাড়া কেবল প্যারামিটার ও রিটার্ন টাইপ ঘোষণা করাকে ওভারলোড সিগনেচার বলে। একাধিক সিগনেচার লেখা যায়।
- **ইমপ্লিমেন্টেশন সিগনেচার**: ওভারলোড ঘোষণার ঠিক নিচে মূল ফাংশন বডি লিখতে হয়। এই মূল সিগনেচারকে অবশ্যই আগের সব ওভারলোড সিগনেচারের টাইপ সমর্থন করতে হবে।
- **দৃশ্যমানতা**: বাইরের ডেভেলপাররা কল করার সময় কেবল ওভারলোড সিগনেচারগুলোই দেখতে পান, মূল ইমপ্লিমেন্টেশন সিগনেচারটি হাইড থাকে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডেটা ফরম্যাটিং ফাংশন যা ডেট অবজেক্ট দিলে এক ধরনের রিটার্ন দেয় এবং টাইমস্ট্যাম্প দিলে অন্য ধরনের রিটার্ন দেয়।

### উত্তম অনুশীলন (Best Practice)
ফাংশন যখন ইনপুটের ওপর ভিত্তি করে একদম ভিন্ন টাইপের রেসপন্স রিটার্ন করে তখন ওভারলোড ব্যবহার করুন। রিটার্ন টাইপ একই হলে সাধারণ ইউনিয়ন আর্গুমেন্ট ব্যবহার করাই শ্রেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে মূল ইমপ্লিমেন্টেশন সিগনেচারটি কলারদের জন্য সরাসরি কল করার যোগ্য। এটি অবশ্যই সব ওভারলোডের টাইপ হ্যান্ডেল করার ক্ষমতা রাখতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ওভারলোড সিগনেচারসমূহ
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// ইমপ্লিমেন্টেশন সিগনেচার (কলারদের জন্য দৃশ্যমান নয়)
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(1718800000); // ওভারলোড ১ দ্বারা কাজ করবে
const d2 = makeDate(5, 19, 2026);   // ওভারলোড ২ দ্বারা কাজ করবে
// const d3 = makeDate(5, 19); // এরর: কোনো ওভারলোড ২ টি আর্গুমেন্ট সাপোর্ট করে না।
\`\`\``
  }
];
