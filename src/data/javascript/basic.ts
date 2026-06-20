import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'javascript-1',
    title: 'What are the main differences between var, let, and const?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Scope', 'Variables', 'ES6'],
    enAnswer: 'var is function-scoped, hoisted, and can be redeclared. let and const are block-scoped, not initialized during hoisting (Temporal Dead Zone), and cannot be redeclared. const also prevents variable reassignment.',
    bnAnswer: 'var হলো ফাংশন-স্কোপড, হোইস্টেড হয় এবং রি-ডিক্লেয়ার করা যায়। let এবং const হলো ব্লক-স্কোপড, হোইস্টিংয়ের সময় ইনিশিয়ালাইজ হয় না (Temporal Dead Zone) এবং রি-ডিক্লেয়ার করা যায় না। const রি-অ্যাসাইনমেন্টও বন্ধ করে।',
    enExplanation: `### Explanation
- **Scope**: \`var\` is scoped to the nearest function. \`let\` and \`const\` are scoped to the nearest enclosing block \`{}\`.
- **Hoisting**: All are hoisted, but \`var\` is initialized with \`undefined\`. \`let\` and \`const\` are not initialized, placing them in the Temporal Dead Zone (TDZ) until their declaration line is executed.
- **Redeclaration**: \`var\` allows redeclaration in the same scope. \`let\` and \`const\` throw a syntax error.
- **Reassignment**: \`var\` and \`let\` can be reassigned. \`const\` variables are read-only and must be initialized on declaration.

### Real-World Example
Using \`var\` inside a loop can bleed the loop counter variable into the outer function scope, causing bugs. Using \`let\` avoids this entirely.

### Best Practice
Default to using \`const\` for all variables. Use \`let\` only when you know the value needs to be reassigned. Avoid \`var\`.

### Common Mistakes
Trying to reassign a \`const\` object reference (e.g. \`const x = {}; x = 5;\` is invalid, though mutating properties like \`x.key = 5\` is valid).

### Code Example
\`\`\`javascript
// var Scope Bleeding
if (true) {
  var varValue = "bleeding";
  let letValue = "scoped";
}
console.log(varValue); // "bleeding" (accessible!)
// console.log(letValue); // ReferenceError

// const Mutability vs Reassignment
const user = { name: "Rohit" };
user.name = "Sunny"; // Allowed (mutating properties)
// user = { name: "Sakib" }; // TypeError: Assignment to constant variable
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্কোপ (Scope)**: \`var\` ফাংশন-স্কোপড। \`let\` এবং \`const\` ব্লক-স্কোপড \`{}\`।
- **হোইস্টিং (Hoisting)**: সব ভ্যারিয়েবলই হোইস্ট হয়, তবে \`var\` স্বয়ংক্রিয়ভাবে \`undefined\` দিয়ে ইনিশিয়ালাইজ হয়। \`let\` ও \`const\` ইনিশিয়ালাইজ হয় না, তাই ডিক্লেয়ার করার আগে এগুলো Temporal Dead Zone (TDZ) এ থাকে।
- **পুনঃঘোষণা (Redeclaration)**: একই স্কোপে \`var\` বারবার ডিক্লেয়ার করা যায়। \`let\` বা \`const\` করলে সিনট্যাক্স এরর দেয়।
- **মান পরিবর্তন (Reassignment)**: \`var\` এবং \`let\` এর মান পরিবর্তন করা যায়। \`const\` রিড-অনলি এবং ডিক্লেয়ার করার সময় এর মান অ্যাসাইন করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লুপের ভেতরে \`var\` ব্যবহার করলে লুপের বাইরের স্কোপেও সেই ভ্যারিয়েবলটি পাওয়া যায়, যা কোডে বিভ্রান্তি তৈরি করে। \`let\` ব্যবহার করলে ভ্যারিয়েবলটি লুপের ভেতরেই সীমাবদ্ধ থাকে।

### উত্তম অনুশীলন (Best Practice)
সবসময় ভ্যারিয়েবল ডিক্লেয়ার করার জন্য \`const\` ব্যবহার করুন। মান পরিবর্তনের প্রয়োজন হলেই কেবল \`let\` ব্যবহার করুন। \`var\` ব্যবহার করা সম্পূর্ণ পরিহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`const\` অবজেক্টের রেফারেন্স পরিবর্তনের চেষ্টা করা (যেমন: \`const x = {}; x = 5;\` এরর দিবে, তবে \`x.key = 5\` করা যাবে)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// var স্কোপ ব্লিডিং
if (true) {
  var varValue = "bleeding";
  let letValue = "scoped";
}
console.log(varValue); // "bleeding" (অ্যাক্সেসযোগ্য!)
// console.log(letValue); // ReferenceError দিবে

// const মিউটেবিলিটি বনাম রি-অ্যাসাইনমেন্ট
const user = { name: "Rohit" };
user.name = "Sunny"; // অনুমোদিত (প্রোপার্টি মিউটেশন)
// user = { name: "Sakib" }; // TypeError: Assignment to constant variable
\`\`\``
  },
  {
    id: 'javascript-2',
    title: 'Explain Hoisting in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Hoisting', 'Execution Context'],
    enAnswer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope during the creation phase of the execution context.',
    bnAnswer: 'হোইস্টিং হলো এক্সিকিউশন কনটেক্সটের ক্রিয়েশন ফেজে ডিক্লেয়ারেশনগুলোকে বর্তমান স্কোপের শীর্ষে নিয়ে যাওয়ার জাভাস্ক্রিপ্টের একটি ডিফল্ট আচরণ।',
    enExplanation: `### Explanation
During the compilation phase, before the code executes:
- **Function Declarations**: Are completely hoisted, meaning both the name and the implementation are moved to the top. They can be invoked before their declaration line.
- **Variable Declarations (\`var\`)**: Only the declaration is hoisted and initialized to \`undefined\`. The assignment remains on the original line.
- **\`let\` and \`const\`**: Are hoisted but not initialized. They remain in the Temporal Dead Zone (TDZ) and throw a ReferenceError if accessed before declaration.
- **Function Expressions**: Are treated as variables and hoisted according to their variable type (\`var\` or \`let\`/\`const\`).

### Real-World Example
Calling a helper function at the top of a file before it is declared works fine if declared as a standard function, but crashes if declared as an arrow function variable.

### Best Practice
Write function declarations at the bottom or import them, but avoid referencing variables before they are declared to keep the execution flow logical.

### Common Mistakes
Trying to invoke a function expression hosted via \`var\` before assignment (e.g. \`myFunc()\` yields \`TypeError: myFunc is not a function\` because the variable is initialized as \`undefined\`).

### Code Example
\`\`\`javascript
// 1. Function Declaration Hoisting (Succeeds)
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}

// 2. var Hoisting (Succeeds but returns undefined)
console.log(count); // undefined
var count = 5;

// 3. let/const Hoisting (Throws error)
// console.log(username); // ReferenceError: Cannot access 'username' before initialization
let username = "Rohit";
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট কোড রান করার আগে কম্পাইলেশন ধাপে:
- **ফাংশন ডিক্লেয়ারেশন**: সম্পূর্ণভাবে হোইস্ট হয়। অর্থাৎ, ফাংশনটির নাম এবং তার বডি স্কোপের ওপরে চলে যায়। তাই ডিক্লেয়ার করার আগেই তা কল করা যায়।
- **ভ্যারিয়েবল ডিক্লেয়ারেশন (\`var\`)**: কেবল ডিক্লেয়ারেশনটি হোইস্ট হয় এবং ডিফল্টভাবে \`undefined\` অ্যাসাইন হয়।
- **\`let\` এবং \`const\`**: এগুলো হোইস্ট হলেও ইনিশিয়ালাইজ হয় না। ডিক্লেয়ার করার আগ পর্যন্ত এগুলো Temporal Dead Zone (TDZ) এ থাকে।
- **ফাংশন এক্সপ্রেশন**: এগুলো ভ্যারিয়েবল হিসেবে কাজ করে, তাই \`var\` বা \`let\`/\`const\` এর নিয়ম মেনেই হোইস্ট হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি হেল্পার ফাংশন ফাইলটির ওপরে কল করা হলেও তা কাজ করে যদি তা সাধারণ ফাংশন ডিক্লেয়ারেশন হয়। কিন্তু অ্যারো ফাংশন দিয়ে লিখলে তা ক্র্যাশ করবে।

### উত্তম অনুশীলন (Best Practice)
কোডের রিডিবিলিটি বজায় রাখতে ভ্যারিয়েবল এবং ফাংশন ব্যবহারের আগেই তা ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`var\` দিয়ে ডিক্লেয়ার করা ফাংশন এক্সপ্রেশনকে অ্যাসাইন করার আগে কল করা (যেমন: \`myFunc()\` কল করলে \`TypeError: myFunc is not a function\` দিবে, কারণ তখন এর মান থাকে \`undefined\`)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. ফাংশন ডিক্লেয়ারেশন হোইস্টিং (সফল)
sayHello(); // "Hello!" প্রিন্ট করবে
function sayHello() {
  console.log("Hello!");
}

// ২. var হোইস্টিং (undefined রিটার্ন করে)
console.log(count); // undefined
var count = 5;

// ৩. let/const হোইস্টিং (এরর দিবে)
// console.log(username); // ReferenceError দিবে
let username = "Rohit";
\`\`\``
  },
  {
    id: 'javascript-3',
    title: 'What is the Temporal Dead Zone (TDZ) in JavaScript?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'TDZ', 'Scope', 'ES6'],
    enAnswer: 'The Temporal Dead Zone is the period between block entering and the variable declaration line, during which let and const variables cannot be accessed.',
    bnAnswer: 'Temporal Dead Zone হলো ব্লকে প্রবেশ করা এবং ভ্যারিয়েবল ডিক্লেয়ার করার লাইনের মধ্যবর্তী সময়, যে সময়কালে let এবং const ভ্যারিয়েবল অ্যাক্সেস করা যায় না।',
    enExplanation: `### Explanation
TDZ exists to catch errors and enforce clean code practices:
- **Scope Entry**: When entering a block scope, the engine sets aside memory for all \`let\` and \`const\` variables.
- **Uninitialized State**: Accessing these variables before the execution reach the line where they are declared throws a \`ReferenceError\`.
- **Temporal Component**: "Temporal" means it is about *time of execution*, not geographical position in the code file.

### Real-World Example
Ensuring variables are not used before they are assigned values, preventing bugs where functions run with half-empty config values.

### Best Practice
Declare all variables at the beginning of their scopes to avoid accidentally stepping into the TDZ.

### Common Mistakes
Thinking TDZ is syntax-bound. A function declared after a \`let\` variable can access it, but if that function runs *before* the \`let\` line executes, it crashes.

### Code Example
\`\`\`javascript
// TDZ in action
{
  // console.log(name); // ReferenceError: Cannot access 'name' before initialization
  let name = "Rohit"; // TDZ ends here for 'name'
  console.log(name); // "Rohit"
}

// Temporal Aspect Example
function logVal() {
  console.log(myVal);
}
// Calling logVal() here would cause a ReferenceError because myVal is in TDZ
let myVal = 10;
logVal(); // Safe, prints 10 because TDZ has ended
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোডে ভুল এড়াতে এবং পরিচ্ছন্ন কোডিং নিশ্চিত করতে TDZ কাজ করে:
- **ব্লক এন্ট্রি**: যখন কোড কোনো ব্লক স্কোপে প্রবেশ করে, তখন ইঞ্জিন \`let\` এবং \`const\` ভ্যারিয়েবলগুলোর জন্য মেমরি বরাদ্দ করে কিন্তু ইনিশিয়ালাইজ করে না।
- **ReferenceError**: ভ্যারিয়েবল ডিক্লেয়ার করার লাইনে পৌঁছানোর আগে তা ব্যবহার করতে গেলে কম্পাইলার \`ReferenceError\` দেয়।
- **টেম্পোরাল অর্থ**: এটি কোডের লাইনের অবস্থানের ওপর নয়, বরং কোড রান হওয়ার *সময়ের* ওপর নির্ভর করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কনফিগারেশন ফাইল লোড হওয়ার আগে ডাটাবেজ কানেক্টেড হতে গেলে যাতে খালি বা আনডিফাইন্ড ভ্যারিয়েবল চলে না যায় তা নিশ্চিত করতে এটি সাহায্য করে।

### উত্তম অনুশীলন (Best Practice)
ভুলবশত TDZ এরর এড়াতে সবসময় স্কোপের শুরুতেই ভ্যারিয়েবল ডিক্লেয়ার করে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে TDZ কেবল লাইনের অবস্থানের ওপর নির্ভর করে। যদি কোনো ফাংশন \`let\` ডিক্লেয়ার করার লাইনের নিচে থাকে কিন্তু তাকে ডিক্লেয়ারেশনের আগেই রান করানো হয়, তবে তা এরর দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// TDZ এর ব্যবহার
{
  // console.log(name); // ReferenceError দিবে
  let name = "Rohit"; // 'name' এর জন্য TDZ এখানে শেষ হলো
  console.log(name); // "Rohit"
}

// টেম্পোরাল বা সময়ের বিষয়টির উদাহরণ
function logVal() {
  console.log(myVal);
}
// এখানে logVal() কল করলে ReferenceError দিবে কারণ myVal তখনো TDZ এ আছে
let myVal = 10;
logVal(); // সুরক্ষিত, ১০ প্রিন্ট করবে কারণ ততক্ষণে TDZ শেষ হয়েছে
\`\`\``
  },
  {
    id: 'javascript-4',
    title: 'Explain the difference between Primitive and Reference Types.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Memory', 'Data Types'],
    enAnswer: 'Primitive types store value directly on the stack and are immutable. Reference types store a memory address pointing to the heap and are mutable.',
    bnAnswer: 'Primitive টাইপগুলো সরাসরি স্ট্যাক মেমরিতে মান ধারণ করে এবং ইমিউটেবল হয়। Reference টাইপগুলো হিপ মেমরির অ্যাড্রেস বা রেফারেন্স ধারণ করে এবং মিউটেবল হয়।',
    enExplanation: `### Explanation
- **Primitives**: Number, String, Boolean, null, undefined, Symbol, BigInt. Stored directly in the call stack. Copied by *value* (reassigning creates a completely separate copy).
- **Reference Types**: Objects, Arrays, Functions. Stored in the heap. Stored as a pointer address in the stack. Copied by *reference* (reassigning copies the memory pointer, meaning modifications affect all variables sharing that reference).

### Real-World Example
Modifying a user settings configuration object inside a child component can accidentally modify the master configurations of other parts of the application if copied by reference.

### Best Practice
Avoid direct mutation of objects and arrays. Use shallow copies (spread operator \`...\`) or deep cloning when transferring objects to prevent side effects.

### Common Mistakes
Thinking two separate objects with the same properties are equal. \`{} === {}\` yields \`false\` because they point to different addresses in the heap.

### Code Example
\`\`\`javascript
// Primitives: Copy by Value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Reference Types: Copy by Reference
let userA = { name: "Rohit" };
let userB = userA;
userB.name = "Sunny";
console.log(userA.name); // "Sunny" (mutated!)

// Object Comparison
console.log({} === {}); // false (different references)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Primitives (প্রিমিটিভস)**: Number, String, Boolean, null, undefined, Symbol, BigInt। এগুলো স্ট্যাক মেমরিতে সরাসরি স্টোর হয় এবং ভ্যালু দিয়ে কপি হয় (মান পরিবর্তন করলে নতুন আরেকটি কপি তৈরি হয়)।
- **Reference Types (রেফারেন্স টাইপস)**: Objects, Arrays, Functions। এগুলো হিপ (heap) মেমরিতে স্টোর হয় এবং স্ট্যাকে কেবল মেমরি অ্যাড্রেসের পয়েন্টার থাকে। এগুলো রেফারেন্স দিয়ে কপি হয় (রেফারেন্স কপি করলে একই মেমরি পয়েন্ট করে, তাই এক জায়গায় পরিবর্তন করলে সব জায়গায় বদলে যায়)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চাইল্ড কম্পোনেন্টের ভেতর ইউজার সেটিংসের মান পরিবর্তন করলে তা অজান্তেই মেইন অবজেক্টকে পরিবর্তন করে ফেলে যদি সেটি সরাসরি রেফারেন্স দিয়ে কপি করা হয়।

### উত্তম অনুশীলন (Best Practice)
সরাসরি অবজেক্ট বা অ্যারে মিউটেশন করা পরিহার করুন। সাইড ইফেক্ট এড়াতে স্প্রেড অপারেটর (\`...\`) বা ডিপ ক্লোন পদ্ধতি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
একই প্রোপার্টিযুক্ত দুটি ভিন্ন অবজেক্টকে সমান মনে করা। \`{} === {}\` এর আউটপুট \`false\` হবে কারণ তারা হিপ মেমরির আলাদা আলাদা অ্যাড্রেস নির্দেশ করছে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Primitives: ভ্যালু কপি
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (অপরিবর্তিত থাকবে)

// Reference Types: রেফারেন্স কপি
let userA = { name: "Rohit" };
let userB = userA;
userB.name = "Sunny";
console.log(userA.name); // "Sunny" (পরিবর্তিত হয়ে গেছে!)

// অবজেক্ট তুলনা
console.log({} === {}); // false (আলাদা রেফারেন্স)
\`\`\``
  },
  {
    id: 'javascript-5',
    title: 'Explain the typeof and instanceof operators and their limitations.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Operators', 'Types'],
    enAnswer: 'typeof returns a string indicating the type of the operand. instanceof checks if an object is an instance of a specific class or constructor function.',
    bnAnswer: 'typeof অপারেন্ডের টাইপ নির্দেশক একটি স্ট্রিং রিটার্ন করে। instanceof পরীক্ষা করে যে কোনো অবজেক্ট নির্দিষ্ট ক্লাস বা কনস্ট্রাক্টরের ইনস্ট্যান্স কিনা।',
    enExplanation: `### Explanation
- **\`typeof\`**: Operates on primitives. Returns lowercase strings: \`"string"\`, \`"number"\`, \`"boolean"\`, \`"undefined"\`, \`"object"\`, \`"function"\`, \`"symbol"\`, \`"bigint"\`.
  - *Limitation*: \`typeof null\` yields \`"object"\` (a legacy JS bug). Arrays and RegExp also yield \`"object"\`.
- **\`instanceof\`**: Operates on object structures and constructors. Checks the prototype chain.
  - *Limitation*: Fails across different iframe environments since each iframe has its own global context and constructors.

### Real-World Example
Checking if an incoming parameter is an array. You cannot use \`typeof\`; you must use \`Array.isArray()\` or \`instanceof Array\`.

### Best Practice
Use \`typeof\` for primitive type checking. Use \`instanceof\` for custom classes or objects. To verify arrays, always use \`Array.isArray()\`.

### Common Mistakes
Writing \`typeof myVar === "array"\`. Since there is no "array" return from \`typeof\`, this check will always return \`false\`.

### Code Example
\`\`\`javascript
// typeof limitations
console.log(typeof null); // "object" (Bug)
console.log(typeof []); // "object"
console.log(typeof {}); // "object"

// Safe array check
console.log(Array.isArray([])); // true

// instanceof usage
class User {}
const u = new User();
console.log(u instanceof User); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`typeof\`**: প্রিমিটিভগুলোর টাইপ চেক করতে ব্যবহৃত হয়। এটি ক্যাটাগরি স্ট্রিং রিটার্ন করে: \`"string"\`, \`"number"\` ইত্যাদি।
  - *সীমাবদ্ধতা*: \`typeof null\` এর মান \`"object"\` দেখায় (এটি জাভাস্ক্রিপ্টের একটি পুরোনো হিস্টোরিকাল বাগ)। অ্যারে বা রেগুলার এক্সপ্রেশনের ক্ষেত্রেও এটি \`"object"\` দেখায়।
- **\`instanceof\`**: অবজেক্ট স্ট্রাকচার ও কন্সট্রাক্টরের প্রোটোটাইপ চেইন চেক করে।
  - *সীমাবদ্ধতা*: আলাদা আলাদা iframe এর ক্ষেত্রে এটি ফেইল করতে পারে কারণ প্রতিটির নিজস্ব গ্লোবাল কনটেক্সট থাকে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইনপুট প্যারামিটার অ্যারে কিনা তা চেক করা। কেবল \`typeof\` দিয়ে এটি করা যায় না; এর জন্য \`Array.isArray()\` বা \`instanceof Array\` ব্যবহার করতে হয়।

### উত্তম অনুশীলন (Best Practice)
প্রিমিটিভ টাইপ চেকিংয়ের জন্য \`typeof\` ব্যবহার করুন। কাস্টম ক্লাস বা অবজেক্টের জন্য \`instanceof\` ব্যবহার করুন। অ্যারে চেকিংয়ের জন্য সবসময় \`Array.isArray()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`typeof myVar === "array"\` লেখা। যেহেতু \`typeof\` কখনো "array" রিটার্ন করে না, এই চেকটি সবসময় \`false\` হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// typeof এর সীমাবদ্ধতা
console.log(typeof null); // "object" (বাগ)
console.log(typeof []); // "object"
console.log(typeof {}); // "object"

// সুরক্ষিত অ্যারে চেক
console.log(Array.isArray([])); // true

// instanceof এর ব্যবহার
class User {}
const u = new User();
console.log(u instanceof User); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
\`\`\``
  },
  {
    id: 'javascript-6',
    title: 'Explain Double Equals (==) vs Triple Equals (===) in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Equality', 'Coercion'],
    enAnswer: 'Double equals (==) performs type coercion before comparison. Triple equals (===) compares both the value and the type without coercion.',
    bnAnswer: 'Double equals (==) তুলনা করার আগে ইম্প্লিসিটলি টাইপ কনভার্ট (type coercion) করে নেয়। Triple equals (===) টাইপ পরিবর্তন না করেই মান ও টাইপ উভয়ই তুলনা করে।',
    enExplanation: `### Explanation
- **\`==\` (Abstract Equality)**: Attempts to convert the operands to a common type (coercion) before making the comparison.
  - E.g. \`5 == "5"\` is \`true\` because the string is coerced into a number.
- **\`===\` (Strict Equality)**: Does not perform coercion. If the operands are of different types, it immediately returns \`false\`.
  - E.g. \`5 === "5"\` is \`false\`.

### Real-World Example
Parsing input values from a form. Form input values are always returned as strings. Comparing string input \`"1"\` using \`===\` to numeric status \`1\` will fail unless parsed or loosely compared.

### Best Practice
Always use \`===\` (strict equality) to write predictable, bug-free comparison code. The only common exception is checking for both null and undefined using \`val == null\`.

### Common Mistakes
Using \`==\` and getting caught by weird coercion edge cases, like \`[] == false\` returning \`true\`.

### Code Example
\`\`\`javascript
// Abstract vs Strict Equality
console.log(5 == "5");   // true (type coerced)
console.log(5 === "5");  // false (strict check)

// Coercion quirks with ==
console.log(0 == false); // true
console.log("" == 0);    // true
console.log([] == 0);    // true

// Safe Null/Undefined check using ==
let user = null;
console.log(user == null); // true (checks for both null and undefined)
console.log(user === null); // true (checks ONLY null)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`==\` (Abstract Equality)**: তুলনা করার আগে অপারেন্ডগুলোকে একই টাইপে রূপান্তর করার চেষ্টা করে (টাইপ কোয়ার্সন)।
  - যেমন: \`5 == "5"\` এর মান \`true\` হয় কারণ স্ট্রিংটি নাম্বারে কনভার্ট হয়ে যায়।
- **\`===\` (Strict Equality)**: কোনো কনভার্সন করে না। অপারেন্ড দুটির টাইপ আলাদা হলে সরাসরি \`false\` রিটার্ন করে।
  - যেমন: \`5 === "5"\` এর মান \`false\` হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
HTML ফর্ম থেকে ইনপুট ডাটা রিড করা। ফর্মের সব ইনপুট স্ট্রিং হিসেবে আসে। আপনি যদি সেটিকে ইন্টিজারের সাথে তুলনা করতে চান, তবে \`===\` ব্যবহার করলে টাইপ মিসম্যাচ দেখাবে যদি না আগে তা পার্স করা হয়।

### উত্তম অনুশীলন (Best Practice)
কোডকে সুরক্ষিত ও বাগ-মুক্ত রাখতে সবসময় \`===\` ব্যবহার করুন। কেবল একটি ক্ষেত্রে \`==\` ব্যবহার করতে পারেন, যখন কোনো ভ্যারিয়েবল একই সাথে null ও undefined কিনা চেক করতে চান (\`val == null\`)।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`==\` ব্যবহার করে অদ্ভুত কোয়ার্সন ফাঁদে পড়া, যেমন \`[] == false\` এর মান \`true\` দেখায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Abstract বনাম Strict সমতা
console.log(5 == "5");   // true (টাইপ কনভার্ট হয়েছে)
console.log(5 === "5");  // false (কঠোর সমতা)

// == এর কিছু আজব আচরণ
console.log(0 == false); // true
console.log("" == 0);    // true
console.log([] == 0);    // true

// == ব্যবহার করে নিরাপদ Null/Undefined চেক
let user = null;
console.log(user == null); // true (null ও undefined দুটিই ট্র্যাপ করবে)
console.log(user === null); // true (কেবল মাত্র null চেক করবে)
\`\`\``
  },
  {
    id: 'javascript-7',
    title: 'What is implicit type coercion and how does it work?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Type Coercion', 'Coercion'],
    enAnswer: 'Implicit type coercion is the automatic conversion of values from one data type to another by JavaScript runtime during expressions evaluation.',
    bnAnswer: 'Implicit type coercion হলো এক্সপ্রেশন মূল্যায়নের সময় জাভাস্ক্রিপ্ট রানটাইম দ্বারা একটি ডেটা টাইপের মানকে স্বয়ংক্রিয়ভাবে অন্য টাইপে রূপান্তর করার প্রক্রিয়া।',
    enExplanation: `### Explanation
JavaScript is weakly typed, so it dynamically converts types when operators are used on incompatible types:
- **String Coercion**: The binary \`+\` operator defaults to string concatenation if one of the operands is a string (e.g. \`5 + "5" = "55"\`).
- **Numeric Coercion**: Other arithmetic operators like \`-\`, \`*\`, \`/\`, and \`%\` coerce operands to numbers (e.g. \`"10" - 5 = 5\`).
- **Boolean Coercion**: Occurs implicitly inside conditional statements (\`if\` conditions).

### Real-World Example
Concatenating values dynamically in template literals. The engine automatically runs \`toString()\` on values, making print statements simple.

### Best Practice
Avoid relying on implicit coercion. Use explicit conversion functions like \`Number()\`, \`String()\`, or \`Boolean()\` to make code explicit and readable.

### Common Mistakes
Accidentally concatenating numbers when pulling values from form inputs, e.g., \`const total = countInput.value + 10;\` yielding \`"510"\` instead of \`15\`.

### Code Example
\`\`\`javascript
// String Coercion
console.log(5 + "5"); // "55" (string)
console.log("5" + 5); // "55" (string)

// Numeric Coercion
console.log("10" - 5); // 5 (number)
console.log("10" * "2"); // 20 (number)
console.log(true + 1); // 2 (true is coerced to 1)

// Boolean Coercion
if ("hello") {
  console.log("Truthy!"); // executes because non-empty string is truthy
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট উইকলি-টাইপড হওয়ায় ইনকম্প্যাটিবল টাইপের মধ্যে অপারেটর ব্যবহার করলে এটি স্বয়ংক্রিয়ভাবে টাইপ কনভার্ট করে:
- **স্ট্রিং কোয়ার্সন**: যোগ চিহ্নের (\`+\`) যেকোনো একপাশে স্ট্রিং থাকলে জাভাস্ক্রিপ্ট অপারেন্ডগুলোকে স্ট্রিং কনক্যাটেনেশন (যোগ) করে ফেলে (যেমন: \`5 + "5" = "55"\`)।
- **নাম্বার কোয়ার্সন**: অন্যান্য গাণিতিক অপারেটর (যেমন: \`-\`, \`*\`, \`/\`) অপারেন্ডগুলোকে নাম্বারে কনভার্ট করে ফেলে (যেমন: \`"10" - 5 = 5\`)।
- **বুলিয়ান কোয়ার্সন**: কন্ডিশনাল স্টেটমেন্টের (\`if\` ব্লক) ভেতরে ইম্প্লিসিটলি কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
টেমপ্লেট লিটারেলের ভেতরে ডাইনামিক মান ব্যবহার করা। ইঞ্জিন স্বয়ংক্রিয়ভাবে ভেতরের ভ্যালুর ওপর \`toString()\` কল করে স্ট্রিং তৈরি করে।

### উত্তম অনুশীলন (Best Practice)
ইম্প্লিসিট কনভার্সনের ওপর ভরসা করা পরিহার করুন। কোডের রিডিবিলিটি বাড়াতে স্পষ্টভাবে \`Number()\`, \`String()\` বা \`Boolean()\` এর মতো ফাংশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফর্ম ইনপুট থেকে ডাটা নিয়ে যোগ করার সময় ভুলবশত স্ট্রিং কনক্যাটেনেশন করে ফেলা, যেমন: \`countInput.value + 10\` এর আউটপুট \`"510"\` হওয়া (যেখানে ১৫ হওয়া উচিত ছিল)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// স্ট্রিং কোয়ার্সন
console.log(5 + "5"); // "55" (স্ট্রিং)
console.log("5" + 5); // "55" (স্ট্রিং)

// নাম্বার কোয়ার্সন
console.log("10" - 5); // 5 (নাম্বার)
console.log("10" * "2"); // 20 (নাম্বার)
console.log(true + 1); // 2 (true কনভার্ট হয়ে ১ হয়েছে)

// বুলিয়ান কোয়ার্সন
if ("hello") {
  console.log("Truthy!"); // রান হবে কারণ অশূন্য স্ট্রিং ট্রুথি
}
\`\`\``
  },
  {
    id: 'javascript-8',
    title: 'Explain Truthy and Falsy values in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Booleans', 'Truthy', 'Falsy'],
    enAnswer: 'Falsy values evaluate to false in boolean contexts. There are exactly 8 falsy values: false, 0, -0, 0n (BigInt), "", null, undefined, and NaN. All other values are truthy.',
    bnAnswer: 'Falsy ভ্যালুগুলো বুলিয়ান কনটেক্সটে false হিসেবে মূল্যায়িত হয়। জাভাস্ক্রিপ্টে ঠিক ৮টি falsy মান আছে: false, 0, -0, 0n, "", null, undefined, এবং NaN। বাকি সব মানই truthy।',
    enExplanation: `### Explanation
In boolean evaluation contexts (like \`if\` conditions or logical operators):
- **Falsy Values**:
  - \`false\` (boolean)
  - \`0\`, \`-0\` (numbers)
  - \`0n\` (BigInt zero)
  - \`""\`, \`''\`, \`\`\`\` (empty strings)
  - \`null\`
  - \`undefined\`
  - \`NaN\`
- **Truthy Values**: All objects (including empty arrays \`[]\` and empty objects \`{}\`), non-empty strings, numbers other than zero, functions, and symbols.

### Real-World Example
Checking if a search input string is not empty before triggering an API call. \`if (searchQuery)\` evaluates to \`false\` if the string is empty.

### Best Practice
Be careful when checking numbers. A value of \`0\` is falsy. Checking \`if (user.score)\` will fail if the user's score is exactly \`0\`. Instead, write \`if (user.score !== undefined)\`.

### Common Mistakes
Thinking empty array \`[]\` or empty object \`{}\` are falsy. They are truthy, so checking \`if (myArray)\` will pass even if the array has no elements.

### Code Example
\`\`\`javascript
// Testing Falsy Values
if (!null && !undefined && !0 && !"" && !NaN) {
  console.log("All these are falsy!");
}

// Truthy Array/Object trap
const list = [];
if (list) {
  console.log("Empty arrays are truthy!"); // Prints!
}

// Correct way to check array elements count
if (list.length > 0) {
  console.log("Array has items");
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
বুলিয়ান কনটেক্সটের (\`if\` স্টেটমেন্ট বা লজিক্যাল অপারেটর) ভেতর ভ্যালু যেভাবে রিড করা হয়:
- **Falsy মানসমূহ**:
  - \`false\` (বুলিয়ান)
  - \`0\`, \`-0\` (নাম্বার শূন্য)
  - \`0n\` (BigInt শূন্য)
  - \`""\`, \`''\`, \`\`\`\` (খালি স্ট্রিং)
  - \`null\`
  - \`undefined\`
  - \`NaN\`
- **Truthy মানসমূহ**: খালি অ্যারে \`[]\` এবং খালি অবজেক্ট \`{}\` সহ অন্য যেকোনো নন-এম্পটি স্ট্রিং, অশূন্য সংখ্যা ও অবজেক্ট।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি সার্চ ইনপুটের লেখা খালি কিনা তা চেক করা। \`if (searchQuery)\` কন্ডিশন searchQuery খালি স্ট্রিং হলে স্বয়ংক্রিয়ভাবে \`false\` রিটার্ন করবে।

### উত্তম অনুশীলন (Best Practice)
সংখ্যা চেক করার সময় সতর্ক থাকুন। শূন্য (\`0\`) একটি ফালসি ভ্যালু। ব্যবহারকারীর স্কোর \`0\` হলে \`if (user.score)\` ফেইল করবে। এ ক্ষেত্রে \`if (user.score !== undefined)\` লিখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
খালি অ্যারে \`[]\` বা খালি অবজেক্ট \`{}\` কে falsy মনে করা। এগুলো আসলে truthy, তাই \`if (myArray)\` কন্ডিশন সবসময় পাস হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Falsy মানসমূহ পরীক্ষা
if (!null && !undefined && !0 && !"" && !NaN) {
  console.log("এগুলো সবই falsy!");
}

// Truthy অ্যারে/অবজেক্ট ট্র্যাপ
const list = [];
if (list) {
  console.log("খালি অ্যারেকে truthy হিসেবে গণ্য করা হয়!"); // এটি প্রিন্ট হবে!
}

// অ্যারেতে উপাদান আছে কিনা তা চেক করার সঠিক নিয়ম
if (list.length > 0) {
  console.log("অ্যারেতে উপাদান আছে");
}
\`\`\``
  },
  {
    id: 'javascript-9',
    title: 'What are the primitive data types in JavaScript?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Data Types', 'Primitives'],
    enAnswer: 'JavaScript has 7 primitive data types: String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Primitive values are immutable and compared by value.',
    bnAnswer: 'জাভাস্ক্রিপ্টে ৭টি প্রিমিটিভ ডেটা টাইপ রয়েছে: String, Number, Boolean, Null, Undefined, Symbol, এবং BigInt। প্রিমিটিভ মানগুলো ইমিউটেবল এবং মান দ্বারা তুলনা করা হয়।',
    enExplanation: `### Explanation
- **String**: Represents textual data.
- **Number**: Double-precision 64-bit binary format IEEE 754 value.
- **Boolean**: \`true\` or \`false\`.
- **Null**: Represents intentional absence of any object value.
- **Undefined**: Default value of declared but unassigned variables.
- **Symbol**: ES6 feature to generate unique, immutable identifiers.
- **BigInt**: ES2020 feature to represent integers larger than the max safe limit (\`2^53 - 1\`).
- Primitive types are passed by value and have no properties or methods of their own (JS wraps them momentarily to run methods).

### Real-World Example
Using \`BigInt\` when dealing with high-precision database IDs from backends (like Twitter API IDs) that would otherwise lose precision in JS standard number types.

### Best Practice
Use \`Symbol\` for private/internal object keys to avoid collision with standard user-defined keys.

### Common Mistakes
Confusing \`null\` and \`undefined\`. \`undefined\` means a variable has not been declared or assigned, while \`null\` is an assignment representing empty space.

### Code Example
\`\`\`javascript
// Primitives are immutable
let str = "hello";
str.toUpperCase();
console.log(str); // "hello" (original value is not changed!)

// BigInt declaration
const largeNumber = 9007199254740991n; // notice the 'n' at the end

// Symbol uniqueness
const sym1 = Symbol("key");
const sym2 = Symbol("key");
console.log(sym1 === sym2); // false (each Symbol is unique)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **String**: টেক্সট ডাটা নির্দেশ করে।
- **Number**: ডাবল-প্রিসিশন ৬৪-বিট বাইনারি ফরম্যাট ভ্যালু।
- **Boolean**: \`true\` অথবা \`false\`।
- **Null**: কোনো অবজেক্টের অনুপস্থিতি নির্দেশ করে।
- **Undefined**: ভ্যারিয়েবল ডিক্লেয়ার করার পর মান অ্যাসাইন না করা হলে ডিফল্টভাবে এটি থাকে।
- **Symbol**: ইউনিক এবং ইমিউটেবল আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত হয়।
- **BigInt**: সর্বোচ্চ নিরাপদ নম্বরের (\`2^53 - 1\`) চেয়ে বড় পূর্ণসংখ্যা প্রকাশের জন্য ব্যবহৃত হয়।
- প্রিমিটিভ ভ্যালুগুলোর নিজস্ব কোনো মেথড নেই (JS রান করার সময় সাময়িকভাবে অবজেক্ট হিসেবে র‍্যাপ করে মেথড চালায়)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ব্যাকএন্ড ডাটাবেজ থেকে অনেক বড় আইডি (যেমন: টুইটার এপিআই আইডি) হ্যান্ডেল করার সময় \`BigInt\` ব্যবহার করা, যাতে ডাটার নিখুঁত মান বজায় থাকে।

### উত্তম অনুশীলন (Best Practice)
অবজেক্টের কাস্টম/প্রাইভেট কি (key) তৈরির জন্য \`Symbol\` ব্যবহার করুন যাতে কোনো কোলাইড বা ওভাররাইট হওয়ার সম্ভাবনা না থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`null\` এবং \`undefined\` গুলিয়ে ফেলা। \`undefined\` মানে ভ্যারিয়েবলের মান এখনো দেওয়া হয়নি, আর \`null\` মানে এটি একটি অ্যাসাইন করা ফাঁকা মান।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// প্রিমিটিভস ইমিউটেবল
let str = "hello";
str.toUpperCase();
console.log(str); // "hello" (মূল মানটি পরিবর্তিত হয়নি!)

// BigInt ডিক্লেয়ারেশন
const largeNumber = 9007199254740991n; // শেষে 'n' কি-ওয়ার্ড যুক্ত থাকে

// সিম্বল ইউনিকনেস
const sym1 = Symbol("key");
const sym2 = Symbol("key");
console.log(sym1 === sym2); // false (প্রতিটি সিম্বল ইউনিক)
\`\`\``
  },
  {
    id: 'javascript-10',
    title: 'What is an IIFE (Immediately Invoked Function Expression) and why is it used?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'IIFE', 'Scope', 'Design Patterns'],
    enAnswer: 'An IIFE is a function that runs as soon as it is defined. It is used to isolate variable scope, preventing global scope pollution and variables leakage.',
    bnAnswer: 'IIFE হলো এমন একটি ফাংশন যা ডিফাইন করার সাথে সাথেই রান হয়। এটি মূলত ভ্যারিয়েবল স্কোপ আলাদা রাখতে ব্যবহৃত হয়, যা গ্লোবাল স্কোপ পলিউশন রোধ করে।',
    enExplanation: `### Explanation
- **Syntax**: Enclosing a function expression in parentheses \`(...)\` and invoking it with \`()\`: \`(function() { ... })()\`.
- **Scope Isolation**: Any variables declared inside the IIFE cannot be accessed from outside.
- **Evolution**: In modern JavaScript, IIFEs are mostly replaced by ES Modules and block-scoping (\`let\`/\`const\` inside \`{}\`), but they are still common in legacy codebases and library building.

### Real-World Example
Building a third-party analytics script loaded into a client's website. Using an IIFE ensures your library's helper variables do not conflict with the client's global scripts.

### Best Practice
Use ES Modules (\`import\` and \`export\`) for new projects. Use IIFE only when creating standalone scripts, minified build tools, or specific module configurations.

### Common Mistakes
Forgetting the semicolon before an IIFE if it is written immediately after another expression. This can cause bundlers to throw type errors because it tries to parse the IIFE as a function call of the previous line.

### Code Example
\`\`\`javascript
// Standard IIFE Syntax
(function () {
  const privateVar = "I am private";
  console.log("IIFE executed immediately!");
})();
// console.log(privateVar); // ReferenceError: privateVar is not defined

// IIFE with arguments
(function (appVersion) {
  console.log("App version configured:", appVersion);
})("1.0.5");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **সিনট্যাক্স**: ফাংশন এক্সপ্রেশনকে ফার্স্ট ব্র্যাকেটে মুড়ে \`()\` দিয়ে সাথে সাথে কল করা: \`(function() { ... })()\`.
- **স্কোপ আইসোলেশন**: IIFE-এর ভেতরে ডিক্লেয়ার করা ভ্যারিয়েবল বাইরে থেকে অ্যাক্সেস করা যায় না।
- **পরিবর্তন**: আধুনিক জাভাস্ক্রিপ্টে ES Modules এবং ব্লক স্কোপিংয়ের (\`let\`/\`const\`) মাধ্যমে IIFE এর প্রয়োজনীয়তা অনেক কমে গেছে, তবে পুরোনো লাইব্রেরি এবং কাস্টম প্লাগইনে এটি এখনো ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি থার্ড-পার্টি অ্যানালিটিক্স স্ক্রিপ্ট ক্লায়েন্টের ওয়েবসাইটে লোড করার সময়। IIFE ব্যবহার করলে আপনার স্ক্রিপ্টের ভ্যারিয়েবলগুলো ক্লায়েন্টের নিজস্ব কোডের সাথে কনফ্লিক্ট করবে না।

### উত্তম অনুশীলন (Best Practice)
নতুন প্রজেক্টে সবসময় ES Modules (\`import\`/\`export\`) ব্যবহার করুন। শুধুমাত্র স্ট্যান্ডঅ্যালোন স্ক্রিপ্ট বা বয়লারপ্লেট কনফিগ লোড করতে IIFE ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
IIFE লেখার আগে সেমিকোলন (\`;\`) দিতে ভুলে যাওয়া, বিশেষ করে যখন এটি অন্য কোনো লাইনের পরপরই শুরু হয়। এতে কোড পার্স করতে গিয়ে এরর হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// স্ট্যান্ডার্ড IIFE সিনট্যাক্স
(function () {
  const privateVar = "I am private";
  console.log("IIFE সাথে সাথে রান হয়েছে!");
})();
// console.log(privateVar); // ReferenceError দিবে

// আর্গুমেন্ট সহ IIFE
(function (appVersion) {
  console.log("App version configured:", appVersion);
})("1.0.5");
\`\`\``
  },
  {
    id: 'javascript-11',
    title: 'Explain the difference between Array map, filter, and reduce methods.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Arrays', 'Functional Programming'],
    enAnswer: 'map creates a new array by transforming every element. filter creates a new array containing elements that pass a test condition. reduce processes all elements to return a single output value.',
    bnAnswer: 'map প্রতিটি উপাদান রূপান্তর করে একটি নতুন অ্যারে তৈরি করে। filter কন্ডিশন পূরণ করা উপাদানগুলো নিয়ে নতুন অ্যারে তৈরি করে। reduce সব উপাদান প্রসেস করে একটি একক মান রিটার্ন করে।',
    enExplanation: `### Explanation
These array methods promote declarative programming:
- **\`map(callback)\`**: Transforms each element. The output array is always the *same length* as the input array.
- **\`filter(callback)\`**: Evaluates each element against a boolean test. The output array contains only the matching elements.
- **\`reduce(callback, initialValue)\`**: Sequentially processes each element, accumulating values into a single return type (e.g. sum, object dictionary, flattened array).

### Real-World Example
In ecommerce apps, using \`filter\` to select products in a category, then \`map\` to get their prices, and finally \`reduce\` to calculate the cart total checkout value.

### Best Practice
Never use \`map\` if you are not using the returned array (use \`forEach\` or \`for...of\` for side-effects). Always supply an \`initialValue\` for \`reduce\` to prevent bugs on empty lists.

### Common Mistakes
Modifying objects inside a \`map\` callback directly. These methods should be pure; construct and return new objects instead to prevent mutating source data.

### Code Example
\`\`\`javascript
const items = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Book", price: 10 },
  { id: 3, name: "Shoes", price: 50 }
];

// 1. map: Get array of prices
const prices = items.map(item => item.price); // [20, 10, 50]

// 2. filter: Get items priced above 15
const expensiveItems = items.filter(item => item.price > 15); // Shirt, Shoes

// 3. reduce: Calculate total price
const total = items.reduce((acc, item) => acc + item.price, 0); // 80
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই অ্যারে মেথডগুলো ডিক্লেয়ারেটিভ কোড লিখতে সাহায্য করে:
- **\`map(callback)\`**: প্রতিটি উপাদানের রূপান্তর ঘটায়। আউটপুট অ্যারের দৈর্ঘ্য এবং ইনপুট অ্যারের দৈর্ঘ্য সবসময় সমান হয়।
- **\`filter(callback)\`**: প্রতিটি উপাদান কন্ডিশনে ফেলে যাচাই করে। কেবল সত্য বা ট্রুথি উপাদানগুলো নিয়ে নতুন অ্যারে রিটার্ন করে।
- **\`reduce(callback, initialValue)\`**: প্রতিটি উপাদান ক্রমান্বয়ে যোগ বা প্রসেস করে সবশেষে একটি একক মান (নম্বর, অবজেক্ট বা অ্যারে) রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ই-কমার্স অ্যাপে প্রথমে ইউজার সিলেক্ট করা ক্যাটাগরি অনুযায়ী প্রোডাক্ট ফিল্টার (\`filter\`) করা, তারপর প্রোডাক্টের দাম বের করা (\`map\`) এবং সবশেষে মোট বিলের পরিমাণ ক্যালকুলেট (\`reduce\`) করা।

### উত্তম অনুশীলন (Best Practice)
রিটার্ন করা নতুন অ্যারেটি ব্যবহার না করলে \`map\` ব্যবহার করবেন না (সে ক্ষেত্রে \`forEach\` ব্যবহার করুন)। রানটাইম ক্র্যাশ এড়াতে \`reduce\` ব্যবহারের সময় সবসময় \`initialValue\` দিয়ে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`map\` এর ভেতরে সরাসরি অবজেক্টের প্রোপার্টি পরিবর্তন (mutate) করা। সোর্স ডাটা পরিবর্তন এড়াতে নতুন অবজেক্ট রিটার্ন করা উচিত।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const items = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Book", price: 10 },
  { id: 3, name: "Shoes", price: 50 }
];

// ১. map: মূল্যের নতুন অ্যারে তৈরি
const prices = items.map(item => item.price); // [20, 10, 50]

// ২. filter: ১৫ টাকার বেশি মূল্যের পণ্য ফিল্টার
const expensiveItems = items.filter(item => item.price > 15); // Shirt, Shoes

// ৩. reduce: মোট মূল্য গণনা
const total = items.reduce((acc, item) => acc + item.price, 0); // 80
\`\`\``
  },
  {
    id: 'javascript-12',
    title: 'Compare Arrow Functions with Regular Functions.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Functions', 'Arrow Functions', 'this'],
    enAnswer: 'Arrow functions do not have their own this context (they inherit it lexically), cannot be used as constructors (new keyword), lack the arguments object, and cannot be used as generators.',
    bnAnswer: 'Arrow ফাংশনের নিজস্ব this কনটেক্সট থাকে না (লেক্সিক্যালি ইনহেরিট করে), কন্সট্রাক্টর (new) হিসেবে ব্যবহার করা যায় না, arguments অবজেক্ট থাকে না এবং জেনারেটর হিসেবে ব্যবহার করা যায় না।',
    enExplanation: `### Explanation
- **\`this\` Binding**: Regular functions dynamically bind \`this\` based on *how* they are called. Arrow functions bind \`this\` lexically (inheriting it from the surrounding outer scope).
- **Constructors**: Regular functions can be called with \`new\` to construct class instances. Arrow functions do not have a \`prototype\` property and throw an error if called with \`new\`.
- **\`arguments\` Object**: Regular functions have access to local \`arguments\` object array. Arrow functions do not.
- **Syntax**: Arrow functions provide implicit returns for single-expression statements.

### Real-World Example
In React callbacks or timer handlers inside classes, using an arrow function prevents losing the \`this\` reference of the class instance, eliminating the need to write \`.bind(this)\`.

### Best Practice
Use arrow functions for simple operations, array transformations, or callbacks where lexical \`this\` is desired. Use regular functions for object methods and class declarations.

### Common Mistakes
Trying to use an arrow function as an object method and referencing \`this\`. \`this\` will evaluate to the global window or undefined instead of the object itself.

### Code Example
\`\`\`javascript
// Lexical 'this' comparison
const obj = {
  name: "Rohit",
  // Regular Function
  regularFunc: function() {
    console.log(this.name); // "Rohit"
  },
  // Arrow Function
  arrowFunc: () => {
    console.log(this.name); // undefined (points to global/window scope)
  }
};

obj.regularFunc();
obj.arrowFunc();

// Constructor test
function Normal() {}
const Arrow = () => {};
new Normal(); // Works
// new Arrow(); // TypeError: Arrow is not a constructor
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`this\` বাইন্ডিং**: সাধারণ ফাংশনে \`this\` ডাইনামিকালি সেট হয় কলিং পজিশনের ওপর ভিত্তি করে। অ্যারো ফাংশনে \`this\` লেক্সিক্যালি (বাইরের প্যারেন্ট স্কোপ থেকে) ইনহেরিট হয়।
- **কন্সট্রাক্টর**: সাধারণ ফাংশনকে \`new\` দিয়ে কল করে অবজেক্ট ইনস্ট্যান্স তৈরি করা যায়। অ্যারো ফাংশনে কোনো \`prototype\` প্রোপার্টি থাকে না, তাই এটি কন্সট্রাক্টর হিসেবে চলে না।
- **\`arguments\` অবজেক্ট**: সাধারণ ফাংশনে আর্গুমেন্টের লিস্ট পাওয়া গেলেও অ্যারো ফাংশনে এটি থাকে না।
- **সিনট্যাক্স**: অ্যারো ফাংশন ব্র্যাকেট ও রিটার্ন কি-ওয়ার্ড ছাড়াই এক লাইনে মান রিটার্ন করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React কম্পোনেন্ট বা টাইমার ফাংশনে কলব্যাক লুপের ভেতর অ্যারো ফাংশন ব্যবহার করলে ক্লাস ইনস্ট্যান্সের \`this\` রেফারেন্স বজায় থাকে, ফলে ম্যানুয়ালি \`.bind(this)\` লিখতে হয় না।

### উত্তম অনুশীলন (Best Practice)
কলব্যাক, অ্যারে মেথড এবং যেখানে প্যারেন্ট স্কোপের \`this\` প্রয়োজন সেখানে অ্যারো ফাংশন ব্যবহার করুন। অবজেক্টের মেথড লেখার ক্ষেত্রে সাধারণ ফাংশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অবজেক্ট মেথড হিসেবে অ্যারো ফাংশন ব্যবহার করা এবং তার ভেতর \`this\` অ্যাক্সেস করার চেষ্টা করা। এ ক্ষেত্রে \`this\` মেথডটির প্যারেন্ট গ্লোবাল উইন্ডোকে পয়েন্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// লেক্সিক্যাল 'this' এর পার্থক্য
const obj = {
  name: "Rohit",
  // সাধারণ ফাংশন
  regularFunc: function() {
    console.log(this.name); // "Rohit" প্রিন্ট হবে
  },
  // অ্যারো ফাংশন
  arrowFunc: () => {
    console.log(this.name); // undefined (গ্লোবাল স্কোপ পয়েন্ট করে)
  }
};

obj.regularFunc();
obj.arrowFunc();

// কন্সট্রাক্টর পরীক্ষা
function Normal() {}
const Arrow = () => {};
new Normal(); // সাকসেস
// new Arrow(); // TypeError: Arrow is not a constructor
\`\`\``
  },
  {
    id: 'javascript-13',
    title: 'Explain Default Parameters and Rest Parameters in functions.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Functions', 'ES6', 'Syntax'],
    enAnswer: 'Default Parameters assign fallback values if arguments are omitted. Rest Parameters (...args) capture remaining arguments into a true JavaScript array.',
    bnAnswer: 'Default Parameters আর্গুমেন্ট না পাঠালে ফলব্যাক মান অ্যাসাইন করে। Rest Parameters (...args) বাকি সব আর্গুমেন্টকে একটি জাভাস্ক্রিপ্ট অ্যারেতে রূপান্তর করে।',
    enExplanation: `### Explanation
- **Default Parameters**: Syntactic sugar in ES6 to set default inputs: \`function greet(name = "Guest")\`. Evaluated at call time if the argument is omitted or strictly \`undefined\`.
- **Rest Parameters**: Syntax \`...variableName\` at the end of parameter list captures all overflow parameters passed.
  - Unlike legacy \`arguments\` object which is array-like, rest parameters return a real array instance supporting \`map\`, \`filter\`, and \`reduce\` directly.

### Real-World Example
Writing a math sum utility that accepts any number of arguments dynamically. Using rest parameters captures all numbers in a clean array to sum them up.

### Best Practice
Always position the rest parameter as the *last* parameter of the function signature. Avoid using the legacy \`arguments\` object.

### Common Mistakes
Putting rest parameters before other arguments. E.g. \`function calculate(...nums, ratio)\` is a syntax error because rest parameters must be the last argument.

### Code Example
\`\`\`javascript
// Default Parameters
function calculateBill(subtotal, tax = 0.05, discount = 0) {
  return subtotal + (subtotal * tax) - discount;
}
console.log(calculateBill(100)); // tax defaults to 0.05, discount to 0
console.log(calculateBill(100, undefined, 10)); // uses default tax, custom discount

// Rest Parameters
function sumAll(multiplier, ...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) * multiplier;
}
console.log(sumAll(2, 1, 2, 3)); // (1+2+3) * 2 = 12
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ডিফল্ট প্যারামিটার (Default Parameters)**: আর্গুমেন্ট না পাঠালে ডিফল্ট মান সেট করার সহজ উপায়: \`function greet(name = "Guest")\`। আর্গুমেন্ট অনুপস্থিত বা \`undefined\` হলে কেবল এটি ট্রিগার হয়।
- **রেস্ট প্যারামিটার (Rest Parameters)**: প্যারামিটার লিস্টের শেষে \`...variableName\` সিনট্যাক্স দিয়ে অন্য সব অতিরিক্ত আর্গুমেন্ট ক্যাপচার করা যায়।
  - এটি একটি রিয়েল অ্যারে তৈরি করে, তাই এতে সরাসরি \`map\`, \`filter\` ইত্যাদি অ্যারে মেথড কল করা যায় (পুরোনো array-like \`arguments\` অবজেক্টের চেয়ে এটি অনেক উন্নত)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি যোগফল বের করার হেল্পার ফাংশন তৈরি করা যা নির্দিষ্ট সংখ্যার সীমাবদ্ধতা ছাড়াই ডাইনামিকালি যেকোনো পরিমাণ ইনপুট নম্বর নিয়ে ক্যালকুলেশন করতে পারে।

### উত্তম অনুশীলন (Best Practice)
রেস্ট প্যারামিটারকে সবসময় ফাংশন সিগনেচারের *সবশেষে* রাখুন। কোডকে পরিচ্ছন্ন রাখতে পুরোনো \`arguments\` অবজেক্ট ব্যবহার করা বন্ধ করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেস্ট প্যারামিটারকে অন্য আর্গুমেন্টের পূর্বে রাখা। যেমন: \`function calculate(...nums, ratio)\` একটি সিনট্যাক্স এরর কারণ রেস্ট প্যারামিটার অবশ্যই শেষে থাকতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ডিফল্ট প্যারামিটার
function calculateBill(subtotal, tax = 0.05, discount = 0) {
  return subtotal + (subtotal * tax) - discount;
}
console.log(calculateBill(100)); // tax ডিফল্ট 0.05 এবং discount ডিফল্ট 0 নিবে
console.log(calculateBill(100, undefined, 10)); // ডিফল্ট tax এবং কাস্টম discount ১০ নিবে

// রেস্ট প্যারামিটার
function sumAll(multiplier, ...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) * multiplier;
}
console.log(sumAll(2, 1, 2, 3)); // (1+2+3) * 2 = 12
\`\`\``
  },
  {
    id: 'javascript-14',
    title: 'Explain Destructuring Assignment in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Destructuring', 'ES6', 'Objects'],
    enAnswer: 'Destructuring is a syntax that unpacks values from arrays, or properties from objects, into distinct variables in a single expression.',
    bnAnswer: 'Destructuring হলো এমন একটি সিনট্যাক্স যা একটি সিঙ্গেল এক্সপ্রেশনে অ্যারে বা অবজেক্টের উপাদানগুলোকে সরাসরি আলাদা ভ্যারিয়েবলে আনপ্যাক করে।',
    enExplanation: `### Explanation
Destructuring simplifies copying property values into local scopes:
- **Object Destructuring**: Matches property keys. You can rename keys using colon syntax \`{ sourceKey: newName }\` and provide fallback values \`{ key = defaultValue }\`.
- **Array Destructuring**: Matches elements by index/position. Can skip elements using extra commas \`[first, , third]\`.

### Real-World Example
Handling configuration properties or component props. Unpacking specific fields directly inside function parameters rather than writing \`props.name\`, \`props.avatar\` repeatedly.

### Best Practice
Use destructuring to keep code clean and self-documenting. Use descriptive default values to prevent \`undefined\` checks on optional data inputs.

### Common Mistakes
Trying to destructure from \`null\` or \`undefined\`, which throws a TypeError (e.g. \`const { name } = undefined;\` crashes instantly).

### Code Example
\`\`\`javascript
// Object Destructuring
const user = { name: "Rohit", role: "admin" };
const { name, role, email = "no-email@test.com" } = user;
console.log(name, email); // "Rohit", "no-email@test.com"

// Alias Assignment
const { name: userName } = user;
console.log(userName); // "Rohit"

// Array Destructuring
const coordinates = [23.8, 90.4, 150.0];
const [lat, lng] = coordinates; // skips third element
console.log(lat, lng); // 23.8, 90.4
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিকনস্ট্রাকশন বা ডেস্ট্রাকচারিং অবজেক্টের মানগুলোকে লোকাল ভ্যারিয়েবলে কপি করা সহজ করে:
- **অবজেক্ট ডেস্ট্রাকচারিং**: প্রোপার্টি কি (key) মিলিয়ে ডাটা এক্সট্র্যাক্ট করে। কোলন ব্যবহার করে নাম পরিবর্তন করা যায়: \`{ sourceKey: newName }\` এবং ডিফল্ট মানও সেট করা যায়: \`{ key = defaultValue }\`।
- **অ্যারে ডেস্ট্রাকচারিং**: ইনডেক্স বা পজিশন অনুযায়ী মান নিয়ে আসে। কমা ব্যবহার করে নির্দিষ্ট ইনডেক্স স্কিপ করা যায়: \`[first, , third]\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React কম্পোনেন্টের প্রপস (props) ব্যবহারের সময়। সরাসরি ফাংশনের আর্গুমেন্টে প্রোপার্টিগুলো আনপ্যাক করে নেওয়া, যাতে বারবার \`props.name\`, \`props.avatar\` লিখতে না হয়।

### উত্তম অনুশীলন (Best Practice)
কোডকে সংক্ষিপ্ত ও রিডিবল রাখতে ডেস্ট্রাকচারিং ব্যবহার করুন। ডাটা মিসিং এড়াতে সবসময় ব্যাকআপ বা ডিফল্ট মান সেট করে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`null\` বা \`undefined\` থেকে ডেস্ট্রাকচার করার চেষ্টা করা, যা রানটাইমে TypeError দিয়ে অ্যাপ ক্র্যাশ করায় (যেমন: \`const { name } = undefined;\`)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// অবজেক্ট ডেস্ট্রাকচারিং
const user = { name: "Rohit", role: "admin" };
const { name, role, email = "no-email@test.com" } = user;
console.log(name, email); // "Rohit", "no-email@test.com"

// নতুন নামে অ্যাসাইন করা
const { name: userName } = user;
console.log(userName); // "Rohit"

// অ্যারে ডেস্ট্রাকচারিং
const coordinates = [23.8, 90.4, 150.0];
const [lat, lng] = coordinates; // তৃতীয় উপাদানটি স্কিপ হবে
console.log(lat, lng); // 23.8, 90.4
\`\`\``
  },
  {
    id: 'javascript-15',
    title: 'Explain Spread syntax vs Rest syntax and their contexts.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Spread', 'Rest Syntax', 'ES6'],
    enAnswer: 'Spread syntax unpacks elements of an array or object into separate variables/parameters. Rest syntax packs multiple arguments/elements into a single array structure.',
    bnAnswer: 'Spread সিনট্যাক্স অ্যারে বা অবজেক্টের উপাদানগুলোকে আলাদা আলাদা এলিমেন্টে আনপ্যাক (খোলে) করে। Rest সিনট্যাক্স একাধিক উপাদানকে একটি একক অ্যারেতে প্যাক (একত্রিত) করে।',
    enExplanation: `### Explanation
Although both use the \`...\` triple-dot syntax, they operate in opposite directions depending on context:
- **Spread Operator (Unpacker)**: Expands an iterable (like an array or object) into individual elements. Used in function calls, array literals, and object literals.
- **Rest Operator (Packer)**: Gathers remaining elements together. Used in function parameter declarations and destructuring patterns.

### Real-World Example
Cloning an array of items without mutating the source list (\`[...items]\`), or extracting a specific field while grouping all remaining fields into an object using rest (\`const { id, ...data } = user\`).

### Best Practice
Use spread to clone objects/arrays shallowly and merge them. Use rest inside parameters lists to handle dynamic values.

### Common Mistakes
Forgetting that spread operates as a shallow copy. Nested objects inside a spread-cloned array still point to original heap addresses.

### Code Example
\`\`\`javascript
// 1. Spread Context (Unpacking)
const baseArray = [1, 2];
const combinedArray = [...baseArray, 3, 4]; // [1, 2, 3, 4]

const user = { id: 1, name: "Rohit" };
const clonedUser = { ...user, role: "admin" }; // shallow clone

// 2. Rest Context (Packing)
const [first, ...restItems] = [10, 20, 30, 40];
console.log(first); // 10
console.log(restItems); // [20, 30, 40] (packed into array!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যদিও দুটি অপারেটরই ট্রিপল-ডট \`...\` ব্যবহার করে, তবে ব্যবহারের জায়গার ওপর ভিত্তি করে তাদের আচরণ সম্পূর্ণ বিপরীত:
- **স্প্রেড অপারেটর (Unpacker)**: কোনো অ্যারে বা অবজেক্টকে আলাদা আলাদা সিঙ্গেল উপাদানে উন্মুক্ত বা প্রসারিত করে। এটি ফাংশন কল, নতুন অ্যারে বা অবজেক্ট তৈরিতে ব্যবহৃত হয়।
- **রেস্ট অপারেটর (Packer)**: একাধিক আলাদা মানকে একটি সিঙ্গেল অ্যারেতে সংকুচিত করে। এটি ফাংশন প্যারামিটার এবং ডেস্ট্রাকচারিং এ ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি অরিজিনাল অ্যারেকে পরিবর্তন না করে তার ক্লোন তৈরি করা (\`[...items]\`), অথবা ডেস্ট্রাকচারিংয়ের সময় একটি নির্দিষ্ট আইডি আলাদা করে বাকি সব ফিল্ডকে একটি অবজেক্টে রাখা (\`const { id, ...data } = user\`)।

### উত্তম অনুশীলন (Best Practice)
অবজেক্ট বা অ্যারে মার্জ ও শ্যালো ক্লোন করার জন্য স্প্রেড এবং ডাইনামিক ফাংশন প্যারামিটার রিসিভ করার জন্য রেস্ট ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্প্রেড অপারেটরকে ডিপ কপি মনে করা। এটি কেবল প্রথম লেভেলের প্রোপার্টি কপি করে; নেস্টেড প্রোপার্টিগুলো এখনো আগের মেমরি রেফারেন্সই শেয়ার করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. স্প্রেড কনটেক্সট (Unpacking)
const baseArray = [1, 2];
const combinedArray = [...baseArray, 3, 4]; // [1, 2, 3, 4]

const user = { id: 1, name: "Rohit" };
const clonedUser = { ...user, role: "admin" }; // শ্যালো ক্লোন

// ২. রেস্ট কনটেক্সট (Packing)
const [first, ...restItems] = [10, 20, 30, 40];
console.log(first); // 10
console.log(restItems); // [20, 30, 40] (অ্যারেতে প্যাকড হয়েছে!)
\`\`\``
  },
  {
    id: 'javascript-16',
    title: 'Explain the String methods introduced in ES6+.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Strings', 'ES6', 'API'],
    enAnswer: 'ES6+ introduced methods to search and construct strings safely: includes(), startsWith(), endsWith(), repeat(), padStart(), padEnd(), and Template Literals.',
    bnAnswer: 'ES6+ সংস্করণে স্ট্রিং অনুসন্ধান ও তৈরির জন্য includes(), startsWith(), endsWith(), repeat(), padStart(), padEnd(), এবং টেমপ্লেট লিটারেলস মেথড যুক্ত করা হয়েছে।',
    enExplanation: `### Explanation
Modern JS string methods reduce reliance on regex for simple checks:
- **\`includes(searchString, position)\`**: Returns a boolean indicating if target is found.
- **\`startsWith(searchString, position)\`**: Verifies prefix match.
- **\`endsWith(searchString, length)\`**: Verifies suffix match.
- **\`padStart(targetLength, padString)\` / \`padEnd()\`**: Pads the current string with another string until it reaches the given length.
- **Template Literals**: Enclosed in backticks, allowing expression interpolation (\`\${expression}\`) and multi-line strings.

### Real-World Example
Masking a credit card number in a checkout screen. You can grab the last 4 digits and use \`padStart(16, "*")\` to display a masked string.

### Best Practice
Prefer using these readable string helpers over raw RegExp index checks (\`indexOf\` or match checks) for simple text checks.

### Common Mistakes
Forgetting that these methods are case-sensitive. Searching \`"hello".includes("H")\` returns \`false\`.

### Code Example
\`\`\`javascript
const message = "JavaScript is awesome";

// Search Helpers
console.log(message.includes("awesome")); // true
console.log(message.startsWith("Java")); // true
console.log(message.endsWith("css"));    // false

// Padding example (Credit Card Masking)
const lastFourDigits = "8890";
const maskedCard = lastFourDigits.padStart(16, "*");
console.log(maskedCard); // "************8890"

// Template Literal
const framework = "React";
const text = \`Platform built using \${framework}\`;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
আধুনিক জাভাস্ক্রিপ্ট স্ট্রিং মেথডগুলো সাধারণ সার্চের জন্য জটিল রেগুলার এক্সপ্রেশন ব্যবহারের প্রয়োজনীয়তা কমায়:
- **\`includes()\`**: স্ট্রিংয়ে কাঙ্ক্ষিত সাব-স্ট্রিং আছে কিনা তা পরীক্ষা করে বুলিয়ান মান দেয়।
- **\`startsWith()\`**: স্ট্রিংটি নির্দিষ্ট কোনো স্ট্রিং দিয়ে শুরু হয়েছে কিনা তা দেখে।
- **\`endsWith()\`**: স্ট্রিংটি নির্দিষ্ট কোনো স্ট্রিং দিয়ে শেষ হয়েছে কিনা তা দেখে।
- **\`padStart()\` / \`padEnd()\`**: নির্দিষ্ট লেন্থ পর্যন্ত ফিলাপ করতে স্ট্রিংয়ের শুরুতে বা শেষে অন্য ক্যারেক্টার যুক্ত করে।
- **টেমপ্লেট লিটারেলস**: ব্যাকটিক ব্যবহার করে স্ট্রিংয়ের ভেতর সরাসরি ভ্যারিয়েবল এবং একাধিক লাইনের টেক্সট লেখার সুবিধা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কার্ড পেমেন্ট পেজে ক্রেডিট কার্ডের নিরাপত্তা নিশ্চিত করতে শেষ ৪ ডিজিট বাদে বাকি সংখ্যাগুলোকে ঢেকে দিতে \`padStart(16, "*")\` ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
সহজ সার্চ অপারেশনের ক্ষেত্রে পুরোনো \`indexOf\` এর চেয়ে রিডিবল মেথড যেমন \`includes()\` বা \`startsWith()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে এই মেথডগুলো কেস-সেনসিটিভ (ছোট-বড় হাতের অক্ষরের পার্থক্য করে)। \`"hello".includes("H")\` এর আউটপুট \`false\` হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const message = "JavaScript is awesome";

// অনুসন্ধান মেথডসমূহ
console.log(message.includes("awesome")); // true
console.log(message.startsWith("Java")); // true
console.log(message.endsWith("css"));    // false

// প্যাডিং উদাহরণ (কার্ড নম্বর মাস্কিং)
const lastFourDigits = "8890";
const maskedCard = lastFourDigits.padStart(16, "*");
console.log(maskedCard); // "************8890"

// টেমপ্লেট লিটারেল
const framework = "React";
const text = \`Platform built using \${framework}\`;
\`\`\``
  },
  {
    id: 'javascript-17',
    title: 'What is NaN and how can you safely check for it?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'NaN', 'Types', 'Checking'],
    enAnswer: 'NaN stands for "Not-a-Number", representing invalid mathematical operations. Check for it using Number.isNaN(), which prevents coercion errors caused by global isNaN().',
    bnAnswer: 'NaN হলো "Not-a-Number", যা অবৈধ গাণিতিক অপারেশন নির্দেশ করে। এটি নিরাপদে চেক করতে Number.isNaN() ব্যবহার করতে হয়, যা গ্লোবাল isNaN() এর ভুল কোয়ার্সন আটকায়।',
    enExplanation: `### Explanation
- **Definition**: \`NaN\` is returned when mathematical parsing or operations fail (e.g., \`0 / 0\` or \`parseInt("hello")\`).
- **Unique Behavior**: \`NaN\` is the *only* value in JavaScript that is **not equal to itself**. \`NaN === NaN\` yields \`false\`.
- **Checking Methods**:
  - Global \`isNaN(val)\`: Coerces inputs to numbers first. Yields \`true\` for arbitrary strings (e.g. \`isNaN("hello")\` is \`true\`), which is misleading.
  - \`Number.isNaN(val)\`: Checks strictly if the value is \`NaN\` without type coercion. Recommended.

### Real-World Example
Validating currency fields or calculators. If a user types a non-numeric character, checking \`Number.isNaN\` tells the system to block calculations.

### Best Practice
Always use \`Number.isNaN()\` instead of the global \`isNaN()\` to prevent false positives from strings and objects.

### Common Mistakes
Comparing a variable directly: \`if (myVar === NaN)\`. This comparison will always evaluate to \`false\`, even if \`myVar\` is indeed \`NaN\`.

### Code Example
\`\`\`javascript
const result = parseInt("not_a_number"); // NaN

// Comparison trap
console.log(result === NaN); // false!

// Global isNaN (Coerces string to number, returns true)
console.log(isNaN("hello")); // true (incorrectly flags string as NaN!)

// Number.isNaN (No coercion, returns true only for actual NaN)
console.log(Number.isNaN("hello")); // false (correct!)
console.log(Number.isNaN(result));  // true (correct!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **সংজ্ঞা**: ভুল গাণিতিক অপারেশন বা অবৈধ পার্সিং হলে \`NaN\` রিটার্ন হয় (যেমন: \`0 / 0\` বা \`parseInt("hello")\`)।
- **স্বতন্ত্র আচরণ**: \`NaN\` জাভাস্ক্রিপ্টের একমাত্র মান যা **নিজের সমান নয়**। অর্থাৎ, \`NaN === NaN\` এর আউটপুট \`false\` হয়।
- **চেক করার মেথডস**:
  - গ্লোবাল \`isNaN(val)\`: চেক করার আগে ভ্যালুকে নাম্বারে কনভার্ট করে। তাই সাধারণ স্ট্রিং দিলেও এটি \`true\` রিটার্ন করে (যেমন: \`isNaN("hello")\` এর মান \`true\` দেখায়)।
  - \`Number.isNaN(val)\`: কোনো টাইপ কনভার্সন ছাড়াই কেবল অরিজিনাল \`NaN\` এর জন্য \`true\` দেয়। এটি সবচেয়ে নিরাপদ।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার পেমেন্ট ইনপুট ভ্যালিডেশন। ব্যবহারকারী কোনো নন-নিউমেরিক টেক্সট টাইপ করলে \`Number.isNaN\` ব্যবহার করে এরর মেসেজ শো করানো।

### উত্তম অনুশীলন (Best Practice)
মিথ্যা ফলাফল বা কনভার্সন এরর এড়াতে গ্লোবাল \`isNaN()\` এর পরিবর্তে সবসময় \`Number.isNaN()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সরাসরি ভ্যারিয়েবল তুলনা করা: \`if (myVar === NaN)\`। এই কন্ডিশনটি সবসময় \`false\` হবে, এমনকি যদি \`myVar\` আসলেই \`NaN\` হয়ে থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const result = parseInt("not_a_number"); // NaN

// তুলনা ট্র্যাপ
console.log(result === NaN); // false!

// গ্লোবাল isNaN (স্ট্রিংকে নাম্বারে কনভার্ট করে true দেয়)
console.log(isNaN("hello")); // true (স্ট্রিংকেও NaN বলে ফেলছে!)

// Number.isNaN (কোনো কনভার্সন নেই, কেবল আসল NaN এর জন্য true)
console.log(Number.isNaN("hello")); // false (সঠিক!)
console.log(Number.isNaN(result));  // true (সঠিক!)
\`\`\``
  },
  {
    id: 'javascript-18',
    title: 'Explain Object.freeze vs Object.seal in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Objects', 'Immutability'],
    enAnswer: 'Object.freeze prevents all modifications (adds, deletes, edits). Object.seal prevents adding or deleting properties, but allows editing existing property values.',
    bnAnswer: 'Object.freeze অবজেক্টের সব ধরনের পরিবর্তন (নতুন যোগ, ডিলিট, এডিট) বন্ধ করে। Object.seal নতুন প্রোপার্টি যোগ বা ডিলিট করা বন্ধ করলেও আগের ভ্যালু এডিট করার অনুমতি দেয়।',
    enExplanation: `### Explanation
Both are used to control the mutability of objects:
- **\`Object.freeze(obj)\`**:
  - Prevents adding new properties.
  - Prevents deleting existing properties.
  - Prevents modifying values of existing properties.
  - Makes all properties non-configurable.
- **\`Object.seal(obj)\`**:
  - Prevents adding new properties.
  - Prevents deleting existing properties.
  - **Allows** modifying values of existing properties.
  - Makes properties non-configurable.

### Real-World Example
Freezing a static constants configuration dictionary object at startup. Sealing a state object where properties are fixed but their values need to update dynamically.

### Best Practice
Use \`Object.freeze\` for immutable configurations. Remember that both methods are shallow; nested object properties can still be modified unless frozen recursively.

### Common Mistakes
Assuming these methods throw errors by default. In non-strict mode, they fail silently. They only throw exceptions when \`"use strict"\` is enabled.

### Code Example
\`\`\`javascript
"use strict";

const frozen = Object.freeze({ name: "Rohit" });
// frozen.name = "Sunny"; // Throws TypeError in strict mode
// frozen.role = "admin"; // Throws TypeError

const sealed = Object.seal({ name: "Rohit" });
sealed.name = "Sunny"; // Allowed! (modification is permitted)
// delete sealed.name; // Throws TypeError in strict mode
// sealed.role = "admin"; // Throws TypeError
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অবজেক্টের রূপান্তর বা পরিবর্ধন নিয়ন্ত্রণে এই মেথডগুলো ব্যবহৃত হয়:
- **\`Object.freeze(obj)\`**:
  - নতুন প্রোপার্টি যোগ করা বন্ধ করে।
  - প্রোপার্টি ডিলিট করা বন্ধ করে।
  - বিদ্যমান প্রোপার্টির মান পরিবর্তন করা বন্ধ করে।
  - সব প্রোপার্টির কনফিগারেশন লক করে।
- **\`Object.seal(obj)\`**:
  - নতুন প্রোপার্টি যোগ করা বন্ধ করে।
  - প্রোপার্টি ডিলিট করা বন্ধ করে।
  - বিদ্যমান প্রোপার্টির মান পরিবর্তন করার **অনুমতি দেয়**।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্টার্টআপে স্ট্যাটিক কনফিগারেশন ফাইল ফ্রিজ (\`Object.freeze\`) করে নেওয়া যাতে অসাবধানতাবশত ভ্যালু চেঞ্জ না হয়। কোনো স্টেট অবজেক্টের কীগুলো ফিক্সড করে কেবল মানগুলো পরিবর্তন করার জন্য সিল (\`Object.seal\`) করা।

### উত্তম অনুশীলন (Best Practice)
ইমিউটেবল ধ্রুবক কনফিগারেশনের জন্য \`Object.freeze\` ব্যবহার করুন। মনে রাখবেন, দুটি মেথডই শ্যালো (shallow); নেস্টেড অবজেক্টের ভেতরের ডাটা কিন্তু এগুলোতে ফ্রিজ বা সিল হয় না।

### সাধারণ ভুলসমূহ (Common Mistakes)
ধরে নেওয়া যে এই মেথডগুলো সবসময় স্ক্রিনে এরর দেখাবে। নন-স্ট্রিক্ট মোডে এরর না দিয়ে কোডটি সাইলেন্টলি রিজেক্ট হয়। কেবল \`"use strict"\` চালু থাকলেই টাইপ এরর দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
"use strict";

const frozen = Object.freeze({ name: "Rohit" });
// frozen.name = "Sunny"; // strict মোডে TypeError দিবে
// frozen.role = "admin"; // TypeError দিবে

const sealed = Object.seal({ name: "Rohit" });
sealed.name = "Sunny"; // অনুমোদিত! (মান পরিবর্তন করা যাবে)
// delete sealed.name; // strict মোডে TypeError দিবে
// sealed.role = "admin"; // TypeError দিবে
\`\`\``
  },
  {
    id: 'javascript-19',
    title: 'Compare localStorage, sessionStorage, and Cookies.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Storage', 'Browser API', 'Security'],
    enAnswer: 'localStorage persists data with no expiration until manually deleted. sessionStorage clears data when the tab/session ends. Cookies hold tiny payloads, sent to the server on every request with secure flags.',
    bnAnswer: 'localStorage ম্যানুয়ালি ডিলিট না করা পর্যন্ত ডাটা ব্রাউজারে রেখে দেয়। sessionStorage ট্যাব/সেশন শেষ হওয়ার পর ডাটা ডিলিট করে। Cookies সীমিত সাইজের ডাটা রাখে যা প্রতিটি রিকোয়েস্টের সাথে সার্ভারে চলে যায়।',
    enExplanation: `### Explanation
- **\`localStorage\`**: Capacity ~5MB. Persists across sessions. Access restricted via client JavaScript only.
- **\`sessionStorage\`**: Capacity ~5MB. Scoped to the individual browser tab. Cleared automatically when the tab closes.
- **Cookies**: Capacity ~4KB. Transmitted to the server on every HTTP request. Can be protected using security flags like \`HttpOnly\` (blocks client-side JS access) and \`Secure\`.

### Real-World Example
Storing user UI themes (e.g. Dark Mode) in \`localStorage\` so it persists on next visit. Storing temporary form-wizard state in \`sessionStorage\`. Storing session tokens in \`HttpOnly\` cookies for security.

### Best Practice
Never store sensitive security tokens or passwords inside \`localStorage\` or \`sessionStorage\` because they are vulnerable to XSS (Cross-Site Scripting) attacks. Use secure cookies.

### Common Mistakes
Writing non-string values directly to \`localStorage\`. It only supports strings. Objects must be serialized via \`JSON.stringify()\` before storage.

### Code Example
\`\`\`javascript
// localStorage usage
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");

// sessionStorage usage
sessionStorage.setItem("tabStep", "2");

// Storing objects (Must serialize to string)
const user = { name: "Rohit", id: 8 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieval
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // "Rohit"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`localStorage\`**: ধারণক্ষমতা প্রায় ৫ মেগাবাইট। ট্যাব বন্ধ করলেও ডাটা মুছে যায় না। ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট দিয়েই অ্যাক্সেস করতে হয়।
- **\`sessionStorage\`**: ধারণক্ষমতা প্রায় ৫ মেগাবাইট। এটি নির্দিষ্ট ট্যাবের সেশনের সাথে সংযুক্ত। ট্যাব বন্ধ করলে ডাটা স্বয়ংক্রিয়ভাবে মুছে যায়।
- **Cookies (কুকিজ)**: ধারণক্ষমতা প্রায় ৪ কিলোবাইট। প্রতিবার সার্ভারে রিকোয়েস্ট পাঠানোর সময় এটি হেডার হিসেবে চলে যায়। \`HttpOnly\` ফ্ল্যাগ দিয়ে একে JS কোড থেকে লুকিয়ে সুরক্ষিত করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজারের থিম সিলেকশন (Dark Mode) \`localStorage\` এ রাখা যাতে পরবর্তীতে সে সাইটে ঢুকলে আবার থিমটি পায়। ফর্ম পূরণের মাঝপথে ট্যাব চেঞ্জ বা সেশন এড়াতে \`sessionStorage\` এবং সিকিউর সেশন টোকেন স্টোর করতে \`HttpOnly\` কুকি ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
সহজে XSS (Cross-Site Scripting) স্ক্রিপ্ট অ্যাটাকের শিকার হওয়ায় কখনো সংবেদনশীল ডাটা বা অথ টোকেন \`localStorage\` এ রাখবেন না। এ ক্ষেত্রে সিকিউর কুকি ব্যবহার করাই শ্রেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`localStorage\` এ সরাসরি অবজেক্ট স্টোর করার চেষ্টা করা। এটি কেবল স্ট্রিং সাপোর্ট করে, তাই স্টোর করার আগে অবজেক্টকে \`JSON.stringify()\` দিয়ে কনভার্ট করে নিতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// localStorage এর ব্যবহার
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");

// sessionStorage এর ব্যবহার
sessionStorage.setItem("tabStep", "2");

// অবজেক্ট স্টোর করা (অবশ্যই স্ট্রিংয়ে কনভার্ট করতে হবে)
const user = { name: "Rohit", id: 8 };
localStorage.setItem("user", JSON.stringify(user));

// ডাটা রিড করা
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // "Rohit"
\`\`\``
  },
  {
    id: 'javascript-20',
    title: 'Explain Event Bubbling and Event Capturing.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'DOM Events', 'Bubbling', 'Capturing'],
    enAnswer: 'Event Bubbling triggers event handlers starting from the target element upwards to its parents. Event Capturing propagates starting from the outermost document downwards to the target.',
    bnAnswer: 'Event Bubbling লক্ষ্য এলিমেন্ট থেকে শুরু করে তার প্যারেন্ট এলিমেন্টের দিকে ইভেন্ট হ্যান্ডলার ট্রিগার করে। Event Capturing ডকুমেন্ট বা রুট থেকে শুরু করে নিচের দিকে টার্গেট এলিমেন্টে যায়।',
    enExplanation: `### Explanation
When an event occurs on a DOM element, it undergoes three propagation phases:
1. **Capturing Phase**: The event travels down from the \`window\` to the target element. Rarely used for custom handlers, but registered by setting \`addEventListener('click', handler, true)\`.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase**: The event travels back up from the target element to the \`window\`. This is the default mode for all event listeners.

### Real-World Example
Clicking a button inside a nested div card. Bubbling ensures that clicking the button will also trigger click listeners registered on the wrapper card unless stopped.

### Best Practice
Use \`event.stopPropagation()\` inside a handler if you want to isolate the click and prevent parent event handlers from firing.

### Common Mistakes
Forgetting that default handlers bubble up. Clicking a link inside an accordion header can trigger both accordion toggle and parent card redirect events.

### Code Example
\`\`\`javascript
// HTML Structure: <div id="parent"><button id="child">Click</button></div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Default Bubbling Listener (default third argument is false)
parent.addEventListener("click", () => {
  console.log("Parent clicked (Bubbling)");
});

child.addEventListener("click", (event) => {
  console.log("Child clicked");
  // event.stopPropagation(); // Prevents parent listener from firing
});

// Capturing Listener (third argument is true)
parent.addEventListener("click", () => {
  console.log("Parent clicked (Capturing)");
}, true);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন কোনো DOM এলিমেন্টে ইভেন্ট ঘটে, তখন ইভেন্ট প্রপাগেশন তিনটি ধাপে কাজ করে:
1. **ক্যাপচারিং ফেজ (Capturing Phase)**: ইভেন্টটি একদম ওপরের উইন্ডো (\`window\`) থেকে নিচের দিকে টার্গেট এলিমেন্টের দিকে নামতে থাকে। \`addEventListener\` এর ৩য় প্যারামিটার \`true\` করে এটি চালু করা যায়।
2. **টার্গেট ফেজ (Target Phase)**: ইভেন্টটি টার্গেটে পৌঁছায়।
3. **বাবলিং ফেজ (Bubbling Phase)**: ইভেন্টটি টার্গেট থেকে পুনরায় রিভার্স হয়ে প্যারেন্টগুলোর মধ্য দিয়ে ওপরের উইন্ডো পর্যন্ত উঠে যায়। এটি জাভাস্ক্রিপ্টের ডিফল্ট মোড।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কার্ডের ভেতর ডিলিট বাটন ক্লিক করা। বাবলিংয়ের কারণে ডিলিট বাটনে ক্লিক করলে বাটনটির ওপরে থাকা মেইন কার্ডের ওপর ক্লিক হ্যান্ডলারও ট্রিগার হতে পারে, যদি না বাবলিং থামানো হয়।

### উত্তম অনুশীলন (Best Practice)
প্যারেন্ট বা আউটার বাউন্ডারির হ্যান্ডলার ট্রিগার হওয়া আটকাতে এবং ইভেন্টকে নির্দিষ্ট বাটনেই সীমাবদ্ধ রাখতে কলব্যাক বডিতে \`event.stopPropagation()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
বাবলিং ভুলে যাওয়া, যার ফলে কোনো লিঙ্কে ক্লিক করলে একই সাথে প্যারেন্ট ড্রপডাউন ওপেন ও উইন্ডো রিলোড হওয়ার মতো অসঙ্গতি দেখা দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// HTML স্ট্রাকচার: <div id="parent"><button id="child">Click</button></div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

// ডিফল্ট বাবলিং লিসেনার (৩য় প্যারামিটার ডিফল্টভাবে false থাকে)
parent.addEventListener("click", () => {
  console.log("প্যারেন্ট ক্লিক হয়েছে (বাবলিং)");
});

child.addEventListener("click", (event) => {
  console.log("চাইল্ড ক্লিক হয়েছে");
  // event.stopPropagation(); // এটি দিলে প্যারেন্ট হ্যান্ডলার আর ফায়ার হবে না
});

// ক্যাপচারিং লিসেনার (৩য় প্যারামিটার true)
parent.addEventListener("click", () => {
  console.log("প্যারেন্ট ক্লিক হয়েছে (ক্যাপচারিং)");
}, true);
\`\`\``
  },
  {
    id: 'javascript-21',
    title: 'What is Event Delegation and how does it work?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'DOM Events', 'Event Delegation', 'Performance'],
    enAnswer: 'Event Delegation is a technique of attaching a single event listener to a parent element to handle events for all current and future child elements using event bubbling.',
    bnAnswer: 'Event Delegation হলো এমন একটি কৌশল যেখানে প্যারেন্ট এলিমেন্টে একটি সিঙ্গেল ইভেন্ট লিসেনার যুক্ত করে ইভেন্ট বাবলিংয়ের সাহায্যে বর্তমান ও ভবিষ্যতের সব চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডেল করা যায়।',
    enExplanation: `### Explanation
Instead of attaching separate event listeners to dozens of individual child elements (like \`<li>\` inside a \`<ul>\`):
- **Single Listener**: Attach a single listener to the parent element.
- **Bubbling Capture**: When a child is clicked, the click bubbles up to the parent.
- **Dynamic Check**: The parent listener checks \`event.target\` to identify which specific child triggered the event and executes the handler.
- **Benefits**: Reduced memory usage and automatic support for dynamically added child elements.

### Real-World Example
A dynamic message inbox thread list. When new messages are received and dynamically rendered via javascript, you don't need to add new event listeners for each message row; the parent container listener captures them.

### Best Practice
Use event delegation for any list, grid, or dynamically changing content container to save memory and avoid cleanup leaks.

### Common Mistakes
Forgetting that some events (like \`focus\`, \`blur\`, \`mouseenter\`, \`mouseleave\`) do not bubble, making direct delegation fail unless capturing mode is configured.

### Code Example
\`\`\`javascript
// HTML Structure: <ul id="todo-list"><li>Task 1</li><li>Task 2</li></ul>

const list = document.getElementById("todo-list");

// Add a single listener to parent instead of registering on each li
list.addEventListener("click", (event) => {
  // Check if the clicked element is an LI
  if (event.target && event.target.nodeName === "LI") {
    console.log("Clicked task text:", event.target.textContent);
    event.target.classList.toggle("completed");
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডজনখানেক আলাদা চাইল্ড এলিমেন্টে (যেমন \`<ul>\` এর ভেতরের প্রতিটি \`<li>\`) আলাদা ইভেন্ট লিসেনার অ্যাড না করে:
- **একটি লিসেনার**: প্যারেন্ট এলিমেন্টে একটি সিঙ্গেল ইভেন্ট লিসেনার সেট করা হয়।
- **বাবলিংয়ের মাধ্যমে ধরা**: যখন চাইল্ডে ক্লিক করা হয়, তা প্যারেন্টে বাবল আপ হয়।
- **ডাইনামিক চেক**: প্যারেন্ট লিসেনারটি \`event.target\` দিয়ে চেক করে কোন চাইল্ডে ক্লিক হয়েছে তা আইডেন্টিফাই করে সেই অনুযায়ী লজিক রান করায়।
- **সুবিধা**: মেমরি সাশ্রয় হয় এবং ডাইনামিকালি বা জাভাস্ক্রিপ্ট দিয়ে নতুন নোড যোগ করলেও এক্সট্রা লিসেনার বাইন্ড করতে হয় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইভ চ্যাট মেসেজ বক্স। নতুন মেসেজ রিসিভ হয়ে নিচে ডাইনামিকালি রেন্ডার হওয়ার সময় প্রতিটি মেসেজ লাইনে নতুন করে লিসেনার বাইন্ড করতে হয় না; প্যারেন্ট বক্সের সিঙ্গেল লিসেনারই এটি হ্যান্ডেল করে।

### উত্তম অনুশীলন (Best Practice)
যেকোনো লিস্ট, গ্রিড বা ডাইনামিক কন্টেন্ট বক্সের জন্য ইভেন্ট ডেলিগেশন ব্যবহার করুন যাতে ব্রাউজারের মেমরি অপ্টিমাইজড থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে রাখা যে সব ইভেন্ট (যেমন: \`focus\`, \`blur\`, \`mouseenter\`) বাবল আপ হয় না। এ ক্ষেত্রে সাধারণ ডেলিগেশন কাজ করবে না যদি না ক্যাপচারিং মোড ব্যবহার করা হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// HTML স্ট্রাকচার: <ul id="todo-list"><li>Task 1</li><li>Task 2</li></ul>

const list = document.getElementById("todo-list");

// প্রতিটি li তে আলাদা লিসেনার না দিয়ে প্যারেন্টে একটি সিঙ্গেল লিসেনার সেট করা
list.addEventListener("click", (event) => {
  // ক্লিক করা নোডটি LI কিনা তা চেক করা হচ্ছে
  if (event.target && event.target.nodeName === "LI") {
    console.log("ক্লিক করা টাস্ক:", event.target.textContent);
    event.target.classList.toggle("completed");
  }
});
\`\`\``
  },
  {
    id: 'javascript-22',
    title: 'Explain the this keyword basics in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'this Context', 'Execution Context'],
    enAnswer: 'The value of this is determined by how a function is called: in a method it points to the owner object, in regular functions it points to global (or undefined in strict mode).',
    bnAnswer: 'this-এর মান ফাংশনটি কীভাবে কল করা হয়েছে তার ওপর নির্ভর করে: মেথডের ভেতর এটি ওনার অবজেক্টকে পয়েন্ট করে, সাধারণ ফাংশনে এটি গ্লোবাল অবজেক্টকে (স্ট্রিক্ট মোডে undefined) পয়েন্ট করে।',
    enExplanation: `### Explanation
Unlike other languages where \`this\` strictly references the current class instance, in JavaScript, \`this\` is dynamic:
- **Object Method**: Inside a method, \`this\` refers to the object containing the method.
- **Regular Function**: In non-strict mode, refers to \`window\` (browser) or \`global\` (Node). In strict mode, it is \`undefined\`.
- **Arrow Functions**: Do not have a \`this\`. They capture the \`this\` of the enclosing context during creation.
- **Event Listeners**: Refers to the element that received the event.

### Real-World Example
Writing a button handler inside a class component. If you pass the class method to \`onClick\` without binding or using arrow syntax, \`this\` inside the handler evaluates to \`undefined\`, causing page crashes.

### Best Practice
Use arrow functions when declaring callback functions inside methods or classes to preserve the outer \`this\` context automatically.

### Common Mistakes
Extracting a method from an object to a variable and calling it. The reference to the owner object is lost, and \`this\` reverts to global/undefined.

### Code Example
\`\`\`javascript
const user = {
  name: "Rohit",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // "Rohit" (this points to 'user')

const detachedGreet = user.greet;
// detachedGreet(); // TypeError: Cannot read properties of undefined (reading 'name') in strict mode

// Arrow function context inheritance
const service = {
  status: "active",
  start() {
    setTimeout(() => {
      console.log(this.status); // "active" (arrow function inherits 'this' from start() method)
    }, 100);
  }
};
service.start();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অন্যান্য ল্যাঙ্গুয়েজের মতো জাভাস্ক্রিপ্টে \`this\` ফিক্সড নয়, এটি রানটাইমে ডাইনামিকালি নির্ধারিত হয়:
- **অবজেক্ট মেথড**: মেথডের ভেতরে \`this\` ওই ওনার অবজেক্টকে নির্দেশ করে।
- **সাধারণ ফাংশন**: সাধারণ ডিক্লেয়ার করা ফাংশনে \`this\` গ্লোবাল অবজেক্টকে (\`window\` বা \`global\`) পয়েন্ট করে। স্ট্রিক্ট মোড চালু থাকলে এর মান \`undefined\` হয়।
- **অ্যারো ফাংশন**: নিজস্ব কোনো \`this\` তৈরি করে না, এটি তার প্যারেন্ট বা চারপাশের স্কোপ থেকে \`this\` ধার করে।
- **ইভেন্ট লিসেনার**: যে DOM এলিমেন্টের ওপর ইভেন্ট যুক্ত করা হয়েছে তাকে নির্দেশ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ক্লাস ভিত্তিক সার্ভিসে বোতামের ক্লিকের সাথে ফাংশন যুক্ত করা। বাইন্ড বা অ্যারো ফাংশন ব্যবহার না করে সরাসরি মেথড পাস করলে মেথডটি রান হওয়ার সময় \`this\` এর মান \`undefined\` হয়ে অ্যাপ ক্র্যাশ করে।

### উত্তম অনুশীলন (Best Practice)
ক্লাস বা অবজেক্ট মেথডের ভেতর টাইমার বা ইভেন্ট কলব্যাক লেখার সময় সবসময় অ্যারো ফাংশন ব্যবহার করুন যাতে গ্লোবাল উইন্ডোর স্কোপে \`this\` হারিয়ে না যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
অবজেক্ট মেথডকে অবজেক্ট ছাড়া অন্য একটি ভ্যারিয়েবলে স্টোর করে কল করা। এতে মেইন অবজেক্টের রেফারেন্স হারিয়ে যায় এবং \`this\` গ্লোবাল/undefined এ ফিরে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = {
  name: "Rohit",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // "Rohit" (this এখানে user কে পয়েন্ট করছে)

const detachedGreet = user.greet;
// detachedGreet(); // TypeError দিবে কারণ 'this' এখন undefined (strict mode এ)

// অ্যারো ফাংশনে 'this' ইনহেরিটেন্স
const service = {
  status: "active",
  start() {
    setTimeout(() => {
      console.log(this.status); // "active" (অ্যারো ফাংশন start() এর this ধার করেছে)
    }, 100);
  }
};
service.start();
\`\`\``
  },
  {
    id: 'javascript-23',
    title: 'Explain Call, Apply, and Bind and their differences.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'this Context', 'Call', 'Apply', 'Bind'],
    enAnswer: 'Call invokes a function with a specified this context and arguments passed individually. Apply invokes it with arguments passed as an array. Bind returns a new function with a pre-bound this context.',
    bnAnswer: 'Call নির্দিষ্ট this এবং কমা দিয়ে আলাদা আর্গুমেন্টসহ ফাংশন কল করে। Apply আর্গুমেন্টগুলোকে অ্যারো লিস্ট আকারে নিয়ে ফাংশন কল করে। Bind একটি নতুন প্রিবাইন্ডেড this যুক্ত ফাংশন রিটার্ন করে।',
    enExplanation: `### Explanation
These methods allow explicitly setting the value of \`this\` for a function:
- **\`call(thisArg, arg1, arg2, ...)\`**: Invokes the function immediately. Arguments are passed individually.
- **\`apply(thisArg, [arg1, arg2, ...])\`**: Invokes the function immediately. Arguments are passed as an array.
- **\`bind(thisArg, arg1, arg2, ...)\`**: Does not run the function immediately. It returns a brand-new copy of the function with the \`this\` context permanently bound.

### Real-World Example
Borrowing methods from other objects (e.g. borrowing Array's prototype \`slice\` to convert an array-like \`arguments\` object into a real array, or binding event handler functions in class constructors).

### Best Practice
Use \`bind\` when registering callback handlers that run later (like timers or event listeners). Use \`call\` or \`apply\` for instant method execution borrowing.

### Common Mistakes
Trying to run a bound function immediately without calling the returned function. E.g. \`myFunc.bind(ctx)\` does nothing until you call it: \`myFunc.bind(ctx)()\`.

### Code Example
\`\`\`javascript
const person = {
  name: "Rohit",
  introduce(greeting, punctuation) {
    return \`\${greeting}, I am \${this.name}\${punctuation}\`;
  }
};

const guest = { name: "Sunny" };

// 1. Call (Individual arguments)
console.log(person.introduce.call(guest, "Hello", "!")); // "Hello, I am Sunny!"

// 2. Apply (Array of arguments)
console.log(person.introduce.apply(guest, ["Hi", "."])); // "Hi, I am Sunny."

// 3. Bind (Returns new function)
const boundIntroduce = person.introduce.bind(guest, "Hey");
console.log(boundIntroduce("?")); // "Hey, I am Sunny?"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই মেথডগুলো ব্যবহার করে যেকোনো ফাংশনের \`this\` কনটেক্সট আমরা আমাদের ইচ্ছামতো নির্ধারণ বা পরিবর্তন করতে পারি:
- **\`call()\`**: ফাংশনটিকে সাথে সাথে রান করায়। আর্গুমেন্টগুলো কমা দিয়ে আলাদা আলাদা পাস করতে হয়।
- **\`apply()\`**: ফাংশনটিকে সাথে সাথে রান করায়। আর্গুমেন্টগুলো একটি অ্যারো লিস্টের ভেতর দিয়ে পাস করতে হয়।
- **\`bind()\`**: ফাংশনটিকে সাথে সাথে রান করায় না। এটি ফাংশনটির একটি নতুন কপি রিটার্ন করে যার ভেতর \`this\` এর রেফারেন্স চিরস্থায়ীভাবে সেট হয়ে থাকে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অন্য অবজেক্টের মেথড ধার নেওয়া (যেমন: array-like \`arguments\` অবজেক্টকে আসল অ্যারে বানানোর জন্য Array-এর \`slice.call\` ধার করা) অথবা ক্লাস কন্সট্রাক্টরের ভেতর ইভেন্ট হ্যান্ডলার মেথডকে বাইন্ড করা।

### উত্তম অনুশীলন (Best Practice)
কলব্যাক ফাংশনের রেফারেন্স পাস করার জন্য \`bind\` ব্যবহার করুন। কোনো অবজেক্টের রেডিমেড মেথড ধার নিয়ে রান করার জন্য \`call\` বা \`apply\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`bind\` মেথডটি সাথে সাথে ফাংশন রান করিয়ে দেয় মনে করা। \`myFunc.bind(ctx)\` মূলত রান না হয়ে একটি ফাংশন টেমপ্লেট দেয়, যা রান করতে শেষে আবার \`()\` ব্র্যাকেট দিতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const person = {
  name: "Rohit",
  introduce(greeting, punctuation) {
    return \`\${greeting}, I am \${this.name}\${punctuation}\`;
  }
};

const guest = { name: "Sunny" };

// ১. Call (আলাদা আর্গুমেন্ট)
console.log(person.introduce.call(guest, "Hello", "!")); // "Hello, I am Sunny!"

// ২. Apply (অ্যারে আর্গুমেন্ট)
console.log(person.introduce.apply(guest, ["Hi", "."])); // "Hi, I am Sunny."

// ৩. Bind (নতুন ফাংশন রিটার্ন করবে)
const boundIntroduce = person.introduce.bind(guest, "Hey");
console.log(boundIntroduce("?")); // "Hey, I am Sunny?"
\`\`\``
  },
  {
    id: 'javascript-24',
    title: 'Explain setTimeout and setInterval behaviors.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Timers', 'Event Loop', 'Asynchronous'],
    enAnswer: 'setTimeout executes a callback after a specified delay. setInterval repeatedly executes it at specified intervals. Both return a timer ID that must be cleared to prevent memory leaks.',
    bnAnswer: 'setTimeout নির্দিষ্ট সময় পর একটি কলব্যাক ফাংশন একবার রান করায়। setInterval নির্দিষ্ট সময় পর পর লুপ আকারে রান করায়। মেমরি লিক এড়াতে টাইমার আইডি দিয়ে ক্লিয়ার করতে হয়।',
    enExplanation: `### Explanation
- **Asynchronous Execution**: Timers do not block the main call stack. They are processed by browser Web APIs and pushed to the Callback Queue when their timers expire.
- **Delay Guarantee**: The delay time specified is the *minimum* time, not the *guaranteed* time. If the main call stack is busy, the timer callback has to wait.
- **Clearing Timers**: \`clearTimeout(id)\` and \`clearInterval(id)\` stop timer executions and free up memory resources.

### Real-World Example
Polling an API endpoint every 10 seconds for real-time status updates using \`setInterval\`, and canceling it using \`clearInterval\` when the user navigates away from the page to prevent background network bloat.

### Best Practice
Always save timer IDs and clear them inside cleanup lifecycles (like \`componentWillUnmount\` in React or before creating a new timer instance) to prevent memory leaks.

### Common Mistakes
Expecting \`setTimeout(fn, 0)\` to execute immediately. It will still run *after* the current call stack is fully cleared.

### Code Example
\`\`\`javascript
// setTimeout Example
const timeoutId = setTimeout(() => {
  console.log("Executed once after 1 second");
}, 1000);

// Clear timeout if no longer needed
clearTimeout(timeoutId);

// setInterval Example
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Ticks:", counter);
  if (counter >= 3) {
    clearInterval(intervalId); // stops execution
  }
}, 500);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **অ্যাসিনক্রোনাস এক্সিকিউশন**: টাইমারগুলো জাভাস্ক্রিপ্টের মেইন থ্রেডকে ব্লক করে না। এগুলো ব্রাউজারের Web APIs দ্বারা ম্যানেজড হয় এবং কাউন্টডাউন শেষ হলে কলব্যাক কিউতে যোগ হয়।
- **টাইম গ্যারান্টি**: টাইমার প্যারামিটারের সময়টি হলো *সর্বনিম্ন* সময়, নিশ্চিত সময় নয়। কল স্ট্যাক খালি না হলে এটি লাইনে দাঁড়িয়ে অপেক্ষা করে।
- **টাইমার রিমুভ বা ক্লিয়ার**: \`clearTimeout(id)\` এবং \`clearInterval(id)\` টাইমারের লুপ বা কল বন্ধ করে ব্রাউজারের মেমরি ফিজিক্যালি রিলিজ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইভ ড্যাশবোর্ডে প্রতি ১০ সেকেন্ড পর পর নতুন ডাটা পোলিং (\`setInterval\`) করা। ইউজার পেজ থেকে অন্য পেজে চলে গেলে মেমরি লিক এড়াতে \`clearInterval\` কল করে ব্যাকগ্রাউন্ড প্রসেস বন্ধ করা।

### উত্তম অনুশীলন (Best Practice)
টাইমার তৈরি করার পর তার আইডি অবশ্যই সেভ রাখুন এবং লাইফসাইকেল ক্লিনআপ বা নতুন রেন্ডারের আগে তা ক্লিয়ার করুন যাতে মেমরি লিক না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`setTimeout(fn, 0)\` সাথে সাথেই রান হয়ে যাবে। ০ সেকেন্ড সিলেক্ট করলেও এটি বর্তমান কল স্ট্যাকের কাজ শেষ হওয়ার পরই রান করবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// setTimeout উদাহরণ
const timeoutId = setTimeout(() => {
  console.log("১ সেকেন্ড পর রান হবে");
}, 1000);

// প্রয়োজন না থাকলে টাইমআউট ক্লিয়ার করা
clearTimeout(timeoutId);

// setInterval উদাহরণ
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Ticks:", counter);
  if (counter >= 3) {
    clearInterval(intervalId); // লুপ থামিয়ে দেবে
  }
}, 500);
\`\`\``
  },
  {
    id: 'javascript-25',
    title: 'What is the arguments object in regular functions?',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Functions', 'Arguments', 'Objects'],
    enAnswer: 'The arguments object is an array-like object local to all non-arrow functions, containing the values of the parameters passed to that function.',
    bnAnswer: 'arguments অবজেক্ট হলো সমস্ত অ্যারো-বিহীন ফাংশনের লোকাল স্কোপে থাকা একটি array-like অবজেক্ট, যা পাস করা প্যারামিটারের মানগুলো ধারণ করে।',
    enExplanation: `### Explanation
- **Array-Like**: It contains index properties (\`arguments[0]\`, \`arguments[1]\`) and a \`.length\` attribute, but it does *not* support array methods (like \`map\`, \`filter\`, \`push\`).
- **Scope**: Only accessible inside regular function definitions. Arrow functions do not bind an \`arguments\` object (they resolve it from parent scopes).
- **Conversion**: You can convert it to a real array using \`Array.from(arguments)\` or spread syntax \`[...arguments]\`.

### Real-World Example
Building a legacy utility function that takes arbitrary inputs (like a concatenation or query building helper) before rest parameters were supported.

### Best Practice
Avoid using the legacy \`arguments\` object in modern JS. Use ES6 Rest Parameters (\`...args\`) instead because it yields a real array instantly.

### Common Mistakes
Trying to call array methods directly: \`arguments.forEach(x => ...)\`. This throws \`TypeError: arguments.forEach is not a function\`.

### Code Example
\`\`\`javascript
function legacySum() {
  console.log(arguments.length); // Prints count of passed args
  
  // arguments.map(...) // Throws TypeError!
  
  // Convert to real array
  const argsArray = [...arguments];
  return argsArray.reduce((acc, val) => acc + val, 0);
}

console.log(legacySum(10, 20, 30)); // 60

// Arrow function limitation
const arrowFunc = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined (in strict ESM modules)
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Array-Like (অ্যারির মতো)**: এতে ইনডেক্স (\`arguments[0]\`) এবং \`.length\` প্রোপার্টি থাকলেও এটি কোনো আসল অ্যারে নয়। তাই এতে সরাসরি \`map\`, \`filter\`, \`push\` এর মতো অ্যারে মেথডগুলো চলে না।
- **স্কোপ**: কেবল সাধারণ ফাংশনের বডিতে এটি পাওয়া যায়। অ্যারো ফাংশনে \`arguments\` এর কোনো বাইন্ডিং থাকে না।
- **কনভার্সন**: স্প্রেড অপারেটর \`[...arguments]\` বা \`Array.from()\` ব্যবহার করে একে রিয়েল অ্যারেতে রূপান্তর করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ES6 ফিচার আসার পূর্বে তৈরি করা পুরোনো গ্লোবাল হেল্পার ফাংশন যা যেকোনো পরিমাণ আর্গুমেন্ট নিয়ে কাজ করতে পারতো (যেমন: স্ট্রিং ফরম্যাটার)।

### উত্তম অনুশীলন (Best Practice)
আধুনিক জাভাস্ক্রিপ্ট কোডে \`arguments\` অবজেক্ট পরিহার করুন। এর পরিবর্তে রেস্ট প্যারামিটার (\`...args\`) ব্যবহার করুন, যা সরাসরি রিয়েল অ্যারে প্রোভাইড করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
এর ওপর সরাসরি লুপ চালানো: \`arguments.forEach()\` কল করা। এটি \`TypeError: arguments.forEach is not a function\` এরর দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
function legacySum() {
  console.log(arguments.length); // আর্গুমেন্টের মোট সংখ্যা প্রিন্ট করবে
  
  // arguments.map(...) // TypeError দিবে!
  
  // আসল অ্যারেতে রূপান্তর
  const argsArray = [...arguments];
  return argsArray.reduce((acc, val) => acc + val, 0);
}

console.log(legacySum(10, 20, 30)); // 60

// অ্যারো ফাংশনে সীমাবদ্ধতা
const arrowFunc = () => {
  // console.log(arguments); // ReferenceError দিবে (স্ট্রিক্ট মোডে)
};
\`\`\``
  },
  {
    id: 'javascript-26',
    title: 'Explain JSON.stringify and JSON.parse with custom reviver/replacer parameters.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'JSON', 'Data Formatting', 'Serialization'],
    enAnswer: 'JSON.stringify converts a JS object to a string, optionally filtering properties using a replacer. JSON.parse converts a JSON string to an object, optionally modifying keys/values using a reviver.',
    bnAnswer: 'JSON.stringify অবজেক্টকে স্ট্রিংয়ে রূপান্তর করে এবং replacer দিয়ে ফিল্টার করতে পারে। JSON.parse স্ট্রিং থেকে অবজেক্টে রূপান্তর করে এবং reviver দিয়ে মান মডিফাই করতে পারে।',
    enExplanation: `### Explanation
- **\`JSON.stringify(value, replacer, space)\`**:
  - \`replacer\`: A function or array that filters/formats object properties before serialization.
  - \`space\`: A number/string defining formatting spacing (pretty print).
- **\`JSON.parse(text, reviver)\`**:
  - \`reviver\`: A function that inspects and transforms every parsed key-value pair before outputting the object.

### Real-World Example
Handling dates. JSON does not support Date types natively (they stringify to ISO strings). When parsing, the dates remain strings. A custom \`reviver\` checks if a value looks like a date string and converts it back to a \`Date\` object automatically.

### Best Practice
Utilize replacers to strip out sensitive data (like passwords or credit card numbers) before stringifying telemetry or state logs.

### Common Mistakes
Forgetting that \`JSON.stringify\` ignores properties with \`undefined\` values, functions, or symbol keys, completely omitting them from the final string output.

### Code Example
\`\`\`javascript
// 1. JSON.stringify with Replacer (Filters out password)
const user = { username: "rohit", password: "123", email: "r@test.com" };
const jsonStr = JSON.stringify(user, (key, value) => {
  return key === "password" ? undefined : value;
});
console.log(jsonStr); // "{"username":"rohit","email":"r@test.com"}"

// 2. JSON.parse with Reviver (Converts date string to Date object)
const log = '{"message":"Logged In","timestamp":"2026-06-19T07:33:45.000Z"}';
const parsedLog = JSON.parse(log, (key, value) => {
  if (key === "timestamp") {
    return new Date(value); // Converts ISO string back to Date instance
  }
  return value;
});
console.log(parsedLog.timestamp instanceof Date); // true (Parsed correctly!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`JSON.stringify(value, replacer, space)\`**:
  - \`replacer\`: একটি ফাংশন বা অ্যারে যা অবজেক্টকে টেক্সটে কনভার্ট করার আগে ফিল্টার করতে সাহায্য করে।
  - \`space\`: আউটপুট টেক্সটে রিডিবল স্পেসিং (pretty print) সেট করে।
- **\`JSON.parse(text, reviver)\`**:
  - \`reviver\`: একটি ফাংশন যা পার্স করার সময় প্রতিটি কি-ভ্যালুর ওপর কাস্টম ট্রান্সফরমেশন চালায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডেট (Date) অবজেক্ট হ্যান্ডেল করা। JSON সরাসরি ডেট টাইপ সাপোর্ট করে না (স্ট্রিংয়ে পরিণত করে)। রিসিভ করে পার্স করার সময় সেগুলো স্ট্রিংই থেকে যায়। একটি কাস্টম \`reviver\` দিয়ে চেক করে স্ট্রিংগুলোকে পুনরায় সরাসরি \`Date\` অবজেক্টে রূপান্তর করা যায়।

### উত্তম অনুশীলন (Best Practice)
টেলিমেট্রি বা লগ স্টোর করার সময় সেনসিটিভ ডাটা (যেমন পাসওয়ার্ড) বাদ দিতে \`replacer\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে \`JSON.stringify\` অবজেক্টের ভেতরের \`undefined\` ফিল্ড, ফাংশন বা সিম্বল কী-গুলোকে স্কিপ করে। এগুলো আউটপুটে সম্পূর্ণ বাদ পড়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. Replacer সহ JSON.stringify (পাসওয়ার্ড ফিল্ড বাদ দেবে)
const user = { username: "rohit", password: "123", email: "r@test.com" };
const jsonStr = JSON.stringify(user, (key, value) => {
  return key === "password" ? undefined : value;
});
console.log(jsonStr); // "{"username":"rohit","email":"r@test.com"}"

// ২. Reviver সহ JSON.parse (স্ট্রিং থেকে সরাসরি ডেট অবজেক্ট তৈরি করবে)
const log = '{"message":"Logged In","timestamp":"2026-06-19T07:33:45.000Z"}';
const parsedLog = JSON.parse(log, (key, value) => {
  if (key === "timestamp") {
    return new Date(value); // ISO স্ট্রিংকে সরাসরি Date ইনস্ট্যান্সে কনভার্ট করছে
  }
  return value;
});
console.log(parsedLog.timestamp instanceof Date); // true (সফলভাবে পার্সড!)
\`\`\``
  },
  {
    id: 'javascript-27',
    title: 'Explain Short-Circuit Evaluation and Nullish Coalescing in JavaScript.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Operators', 'Short-Circuit', 'Nullish Coalescing'],
    enAnswer: '&& short-circuits on the first falsy value. || short-circuits on the first truthy value. ?? short-circuits on the first non-nullish (not null/undefined) value.',
    bnAnswer: '&& প্রথম falsy মান পেলে এক্সিকিউশন শর্ট-সার্কিট করে। || প্রথম truthy মান পেলে শর্ট-সার্কিট করে। ?? প্রথম non-nullish (null বা undefined নয়) মান পেলে শর্ট-সার্কিট করে।',
    enExplanation: `### Explanation
These logical operators evaluate expressions from left to right and short-circuit (stop early) as soon as the outcome is guaranteed:
- **\`&&\` (AND)**: Evaluates expressions until it hits a *falsy* value, then returns it. If all are truthy, returns the last.
- **\`||\` (OR)**: Evaluates expressions until it hits a *truthy* value, then returns it. If all are falsy, returns the last.
- **\`??\` (Nullish Coalescing)**: Evaluates expressions until it hits a value that is *not null* and *not undefined*. Unlike \`||\`, empty strings \`""\` and \`0\` are preserved.

### Real-World Example
React conditional rendering: \`{isLoggedIn && <Dashboard />}\` checks if user is logged in before rendering. Setting defaults: \`const score = input ?? 10;\` preserves a score of \`0\` which would be overwritten by \`||\`.

### Best Practice
Use \`??\` when assigning default parameters for numbers and strings to prevent bugs where valid empty values or zeroes are overwritten.

### Common Mistakes
Using \`&&\` in React with a numeric length. If array length is \`0\`, rendering \`{array.length && <List />}\` will print \`0\` on the screen, because \`0\` is falsy and gets returned directly. Use \`{array.length > 0 && <List />}\`.

### Code Example
\`\`\`javascript
// Short-Circuit with && and ||
console.log(0 && "hello"); // 0 (short-circuited at 0)
console.log("user" || "guest"); // "user" (short-circuited at "user")

// Difference between || and ??
const volume = 0;
const volOrTen = volume || 10; // 10 (falsy 0 is replaced)
const volStrict = volume ?? 10; // 0 (0 is preserved since it is not nullish!)
console.log(volOrTen, volStrict); // 10, 0
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই লজিক্যাল অপারেটরগুলো বাম থেকে ডানে এক্সপ্রেশন মূল্যায়ন করে এবং রেজাল্ট নিশ্চিত হওয়ার সাথে সাথে লজিক শর্ট-সার্কিট (থামিয়ে দেওয়া) করে ফেলে:
- **\`&&\` (AND)**: প্রথম কোনো *falsy* মান পাওয়া পর্যন্ত চলে এবং সেটি রিটার্ন করে। সব truthy হলে সর্ব শেষেরটি রিটার্ন করে।
- **\`||\` (OR)**: প্রথম কোনো *truthy* মান পাওয়া পর্যন্ত চলে এবং সেটি রিটার্ন করে। সব falsy হলে সর্ব শেষেরটি রিটার্ন করে।
- **\`??\` (নালেশ কোয়ালিসিং)**: বাম পাশের উপাদানটি কেবল \`null\` বা \`undefined\` হলে ডান পাশের ফলব্যাক ভ্যালু রিটার্ন করে। OR (\`||\`) এর মতো এটি খালি স্ট্রিং \`""\` বা শূন্য \`0\` কে ফলব্যাক করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React কন্ডিশনাল রেন্ডারিং: \`{isLoggedIn && <Dashboard />}\`। আবার ইউজার ভলিউম ইনপুট ০ সেট করলে ডিফল্ট সেটিং অ্যাসাইন করার সময় \`input ?? 10\` ব্যবহার করলে ০ বহাল থাকে, যা \`||\` দিয়ে করলে ১০ হয়ে যেত।

### উত্তম অনুশীলন (Best Practice)
নম্বর বা টেক্সটের ডিফল্ট মান সেট করার ক্ষেত্রে সবসময় \`??\` ব্যবহার করুন যাতে ০ বা খালি স্ট্রিং ইনপুটগুলো সঠিক থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
React-এ \`&&\` ব্যবহার করার সময় নাম্বারের ওপর ডিরেক্ট চেক করা। যেমন: \`{list.length && <List />}\` লিখলে স্ক্রিনে \`0\` রেন্ডার হবে কারণ ০ একটি ফালসি ভ্যালু এবং রিঅ্যাক্ট ০ স্ক্রিনে শো করে। সঠিক নিয়ম: \`{list.length > 0 && <List />}\`।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// && এবং || এর শর্ট-সার্কিট
console.log(0 && "hello"); // 0 (০ তেই থেমে গেছে)
console.log("user" || "guest"); // "user" ("user" পেয়েই থেমে গেছে)

// || এবং ?? এর মূল পার্থক্য
const volume = 0;
const volOrTen = volume || 10; // 10 (০ কে falsy বিবেচনা করে রিপ্লেস করেছে)
const volStrict = volume ?? 10; // 0 (০ যেহেতু nullish নয়, তাই একে সংরক্ষণ করেছে)
console.log(volOrTen, volStrict); // 10, 0
\`\`\``
  },
  {
    id: 'javascript-28',
    title: 'Explain Math and Number methods parseInt, parseFloat, floor, ceil, and round.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Math', 'Numbers', 'Parsing'],
    enAnswer: 'parseInt parses a string to a whole number. parseFloat parses it to a decimal. floor rounds down, ceil rounds up, and round rounds to the nearest integer.',
    bnAnswer: 'parseInt স্ট্রিংকে পূর্ণসংখ্যায় রূপান্তর করে। parseFloat দশমিক সংখ্যায় রূপান্তর করে। floor নিচের দিকে, ceil ওপরের দিকে এবং round নিকটতম পূর্ণসংখ্যায় রাউন্ড করে।',
    enExplanation: `### Explanation
- **\`parseInt(string, radix)\`**: Extracts digits from left to right until it hits a non-digit. Always specify the \`radix\` (e.g. \`10\` for decimal) to prevent parsing quirks.
- **\`parseFloat(string)\`**: Extracts decimals.
- **Rounding Helpers**:
  - \`Math.floor(x)\`: Rounds *down* to the next lower integer.
  - \`Math.ceil(x)\`: Rounds *up* to the next higher integer.
  - \`Math.round(x)\`: Rounds to the *nearest* integer (fraction \`0.5\` rounds up).

### Real-World Example
Parsing pixel styles dynamically. If you get CSS height as \`"150.5px"\`, running \`parseInt("150.5px", 10)\` yields \`150\` as a clean number to use in animations.

### Best Practice
Always provide the radix parameter to \`parseInt\` (e.g., \`parseInt(val, 10)\`) to ensure correct decimal parsing and avoid octal interpretations on older engines.

### Common Mistakes
Using \`parseInt\` to round numbers. It is slower and fails on very large numbers or values like \`0.0000005\` which parses to \`5\` because string serialization turns it into scientific notation.

### Code Example
\`\`\`javascript
// Parsing
console.log(parseInt("150px", 10)); // 150
console.log(parseFloat("15.5px"));  // 15.5

// Math rounding differences
const val = 4.5;
console.log(Math.floor(val)); // 4
console.log(Math.ceil(val));  // 5
console.log(Math.round(val)); // 5

// parseInt rounding mistake trap
console.log(parseInt(0.0000005, 10)); // 5 (string is "5e-7", parsed first char is "5"!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`parseInt(string, radix)\`**: বাম দিক থেকে স্ট্রিং স্ক্যান করে পূর্ণসংখ্যায় রূপান্তর করে। ভুল এড়াতে রাডিক্স (যেমন: ডেসিমেলের জন্য ১০) উল্লেখ করা আবশ্যক।
- **\`parseFloat(string)\`**: দশমিক সংখ্যা পার্স করে।
- **রাউন্ডিং মেথডসমূহ**:
  - \`Math.floor(x)\`: সংখ্যার দশমিক অংশ ফেলে দিয়ে নিচের পূর্ণসংখ্যায় রাউন্ড করে।
  - \`Math.ceil(x)\`: ওপরের বা পরবর্তী বড় পূর্ণসংখ্যায় রাউন্ড করে।
  - \`Math.round(x)\`: নিকটতম পূর্ণসংখ্যায় রাউন্ড করে (০.৫ বা তার বেশি হলে ওপরে যায়)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
CSS এর সাইজ পার্স করা। স্টাইলশিট থেকে হাইট বা উইথ যদি \`"150.5px"\` আকারে পান, তবে গাণিতিক ব্যবহারের জন্য \`parseInt("150.5px", 10)\` দিয়ে কেবল \`150\` বের করে নেওয়া।

### উত্তম অনুশীলন (Best Practice)
ভুল রেজাল্ট এড়াতে \`parseInt\` ব্যবহারের সময় সবসময় ১০ বেজ বা রাডিক্স প্যারামিটার হিসেবে পাস করুন (\`parseInt(val, 10)\`)।

### সাধারণ ভুলসমূহ (Common Mistakes)
সংখ্যা রাউন্ড করার জন্য \`parseInt\` ব্যবহার করা। এটি ধীরগতির এবং অত্যন্ত ক্ষুদ্র ভগ্নাংশ বা সায়েন্টিফিক নোটেশন যুক্ত নম্বরের ক্ষেত্রে ভুল আউটপুট দেয় (যেমন: \`parseInt(0.0000005)\` এর আউটপুট \`5\` হয়)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// পার্সিং
console.log(parseInt("150px", 10)); // 150
console.log(parseFloat("15.5px"));  // 15.5

// রাউন্ডিং এর পার্থক্য
const val = 4.5;
console.log(Math.floor(val)); // 4
console.log(Math.ceil(val));  // 5
console.log(Math.round(val)); // 5

// parseInt রাউন্ডিং ফাঁদ
console.log(parseInt(0.0000005, 10)); // 5 (স্ট্রিং নোটেশন "5e-7" হওয়ায় প্রথম ক্যারেক্টার ৫ ধরে নিয়েছে!)
\`\`\``
  },
  {
    id: 'javascript-29',
    title: 'Explain Object.keys, Object.values, and Object.entries.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Objects', 'Iteration', 'Arrays'],
    enAnswer: 'Object.keys returns an array of property names. Object.values returns an array of property values. Object.entries returns an array of [key, value] pairs.',
    bnAnswer: 'Object.keys অবজেক্টের প্রোপার্টির নামগুলোর অ্যারে দেয়। Object.values প্রোপার্টিগুলোর মানের অ্যারে দেয়। Object.entries [key, value] পেয়ারের দ্বিমাত্রিক অ্যারে দেয়।',
    enExplanation: `### Explanation
These methods convert objects into array formats to allow iteration:
- **\`Object.keys(obj)\`**: Returns string array of enumerable keys.
- **\`Object.values(obj)\`**: Returns array of values.
- **\`Object.entries(obj)\`**: Returns a 2D array: \`[[key1, val1], [key2, val2]]\`. Perfect to use with array destructuring in \`for...of\` loops or mapping.

### Real-World Example
Transforming a settings object dynamically. If you have an object storing feature flags, you can convert it to entries, loop through them, and filter active flags instantly.

### Best Practice
Combine \`Object.entries()\` with array destructuring to write highly readable and concise object loop structures.

### Common Mistakes
Assuming properties are returned in a strict guaranteed order. While modern engines sort numeric keys first followed by insertion order, always structure logic to handle dynamic sequencing safely.

### Code Example
\`\`\`javascript
const user = { id: 1, name: "Rohit", role: "admin" };

// 1. Keys
console.log(Object.keys(user)); // ["id", "name", "role"]

// 2. Values
console.log(Object.values(user)); // [1, "Rohit", "admin"]

// 3. Entries (Destructuring in loops)
console.log(Object.entries(user)); // [["id", 1], ["name", "Rohit"], ["role", "admin"]]

for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই মেথডগুলো অবজেক্টকে অ্যারিতে রূপান্তর করে লুপ চালানোর বা প্রসেস করার সুবিধা দেয়:
- **\`Object.keys(obj)\`**: অবজেক্টের এন্যুমারেবল কী বা প্রোপার্টি নেমগুলোর অ্যারে রিটার্ন করে।
- **\`Object.values(obj)\`**: অবজেক্টের মান বা ভ্যালুগুলোর অ্যারে রিটার্ন করে।
- **\`Object.entries(obj)\`**: দ্বিমাত্রিক টাপল অ্যারে দেয়: \`[[key1, val1], [key2, val2]]\`। এটি \`for...of\` লুপে ডেস্ট্রাকচারিংয়ের সাথে ব্যবহারে দারুণ কার্যকরী।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ফিচার ফ্ল্যাগ অবজেক্টকে ফিল্টার করা। অবজেক্টকে entries বানিয়ে লুপের মাধ্যমে চেক করা কোন কোন সার্ভিস সক্রিয় (\`active\`) আছে।

### উত্তম অনুশীলন (Best Practice)
অবজেক্টের ওপর লুপ চালানোর সময় কোড ক্লিয়ার ও রিডিবল রাখতে \`Object.entries()\` এর সাথে অ্যারে ডেস্ট্রাকচারিং কম্বাইন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ধরে নেওয়া যে কি-গুলো সবসময় একটি ফিক্সড ক্রমানুসারে পাওয়া যাবে। আধুনিক জাভাস্ক্রিপ্ট ইঞ্জিনগুলো সাধারণত ইন্টিজার কি প্রথমে রাখে, তাই অর্ডারিং সবসময় ইনসার্ট করা প্যাটার্নে নাও হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = { id: 1, name: "Rohit", role: "admin" };

// ১. Keys
console.log(Object.keys(user)); // ["id", "name", "role"]

// ২. Values
console.log(Object.values(user)); // [1, "Rohit", "admin"]

// ৩. Entries (লুপের ভেতর ডেস্ট্রাকচারিং)
console.log(Object.entries(user)); // [["id", 1], ["name", "Rohit"], ["role", "admin"]]

for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}
\`\`\``
  },
  {
    id: 'javascript-30',
    title: 'Explain strict mode in JavaScript and its key restrictions.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'strict mode', 'Syntax', 'Safety'],
    enAnswer: 'Strict mode ("use strict") forces secure and cleaner execution of code, throwing runtime errors for historically ignored silent issues like global variable creation or duplicate parameter names.',
    bnAnswer: 'Strict mode ("use strict") জাভাস্ক্রিপ্ট কোডকে আরও সুরক্ষিতভাবে রান করায়। এটি অতীতে এড়িয়ে যাওয়া ভুলগুলোকে (যেমন গ্লোবাল ভ্যারিয়েবল তৈরি, ডুপ্লিকেট প্যারামিটার) সরাসরি রানটাইম এরর হিসেবে শো করায়।',
    enExplanation: `### Explanation
Enabled by adding \`"use strict";\` at the top of a script or function:
- **Key Restrictions**:
  - Prevents accidental creation of global variables (e.g. \`x = 1;\` without declaring variables throws a ReferenceError).
  - Silent failures throw errors (e.g. writing to read-only properties throws a TypeError).
  - Prevents deleting undeletable properties.
  - Prevents duplicate parameter names in function declarations.
  - Keeps \`this\` as \`undefined\` in regular functions (rather than defaulting to \`window\`).

### Real-World Example
Preventing spelling mistakes. If you misspell a variable name during assignment, non-strict mode creates a brand new global variable silently. Strict mode catches the typo immediately.

### Best Practice
Always write code in strict mode. Note that modern build tools (like Babel/Vite) and ES Modules automatically enable strict mode by default.

### Common Mistakes
Assuming strict mode blocks everything. It only prevents specific bad syntax patterns, it is not a full runtime emulator.

### Code Example
\`\`\`javascript
// "use strict"; // Enable strict mode

function nonStrictExample() {
  badVar = 10; // Accidental global variable! (Allowed in sloppy mode)
}
nonStrictExample();
console.log(window.badVar); // 10

function strictExample() {
  "use strict";
  // strictVar = 20; // ReferenceError: strictVar is not defined
}
strictExample();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্ক্রিপ্ট বা ফাংশনের শুরুতে \`"use strict";\` লিখে এটি সক্রিয় করা যায়:
- **মূল সীমাবদ্ধতা বা সুবিধাসমূহ**:
  - অসাবধানতাবশত গ্লোবাল ভ্যারিয়েবল তৈরি হওয়া রোধ করে (যেমন: \`let\`/\`const\` ছাড়া \`x = 1\` লিখলে ReferenceError দিবে)।
  - অতীতে নীরবে উহ্য থাকা ভুলগুলোকে এরর হিসেবে শো করায় (যেমন: রিড-অনলি অবজেক্টে মান রাইট করার চেষ্টা করলে TypeError দিবে)।
  - আন-ডিলেটেবল প্রোপার্টি ডিলিট করা বন্ধ করে।
  - ফাংশন ডিক্লেয়ারেশনে একই নামের একাধিক প্যারামিটার ব্যবহার করা ব্লক করে।
  - সাধারণ ফাংশনে \`this\` এর মান গ্লোবাল উইন্ডোর বদলে \`undefined\` রাখে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ভ্যারিয়েবলের নামের বানান ভুল হওয়া আটকানো। স্ট্রিক্ট মোড না থাকলে ভুল বানানে কোনো মান লিখলে জাভাস্ক্রিপ্ট নীরবে একটি নতুন গ্লোবাল ভ্যারিয়েবল বানিয়ে ফেলে। স্ট্রিক্ট মোড থাকলে সাথে সাথেই এরর দেখায়।

### উত্তম অনুশীলন (Best Practice)
সবসময় স্ট্রিক্ট মোড সক্রিয় রেখে কোড লিখুন। আধুনিক ES Modules এবং Vite/React বিল্ড প্রসেসে এটি স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ডে অন থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে স্ট্রিক্ট মোড সব ভুল ঠিক করে দেবে। এটি কেবল সিনট্যাক্সের নির্দিষ্ট কিছু ভুল রানটাইমে ধরাতে সাহায্য করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// "use strict"; // স্ট্রিক্ট মোড সক্রিয় করার জন্য

function nonStrictExample() {
  badVar = 10; // অজান্তেই গ্লোবাল ভ্যারিয়েবল তৈরি হয়ে গেল! (অনুমোদিত)
}
nonStrictExample();
console.log(window.badVar); // 10

function strictExample() {
  "use strict";
  // strictVar = 20; // ReferenceError: strictVar is not defined এরর দিবে
}
strictExample();
\`\`\``
  }
];
