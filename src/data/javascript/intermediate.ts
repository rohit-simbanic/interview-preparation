import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'javascript-31',
    title: 'Explain Closures and Lexical Scope in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Closures', 'Scope', 'Lexical Scope'],
    enAnswer: 'Lexical Scope means that nested functions have access to variables declared in their parent scopes. A Closure is a function that remembers and accesses its lexical scope even when executed outside that scope.',
    bnAnswer: 'Lexical Scope মানে হলো নেস্টেড ফাংশন তার প্যারেন্ট স্কোপের ভ্যারিয়েবল অ্যাক্সেস করতে পারে। Closure হলো এমন একটি ফাংশন যা তার লেক্সিক্যাল স্কোপকে মনে রাখে এবং বাইরে এক্সিকিউট হলেও সেই স্কোপ অ্যাক্সেস করতে পারে।',
    enExplanation: `### Explanation
- **Lexical Scope**: Scope is determined at compile time based on where functions are written in the source code.
- **Closure**: When a function returns another function, the returned function maintains a reference to the environment in which it was created (its scope chain).
- **Use cases**: Encapsulating private variables, function factories, memoization, and callback handlers.

### Real-World Example
Building a click counter helper. Instead of using a global variable that any other script can reset, you write a closure containing a private counter variable.

### Best Practice
Avoid keeping large objects inside closures if they are no longer needed, as they can cause memory leaks by preventing the garbage collector from freeing that memory.

### Common Mistakes
Creating closures inside loops with \`var\`. Since \`var\` is not block-scoped, all callbacks will share the same final loop index variable unless \`let\` is used.

### Code Example
\`\`\`javascript
function createCounter() {
  let count = 0; // Private variable enclosed
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
// console.log(count); // ReferenceError: count is not defined (Encapsulated!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **লেক্সিক্যাল স্কোপ (Lexical Scope)**: সোর্স কোডে ফাংশনটি কোথায় লেখা হয়েছে তার ওপর ভিত্তি করে তার স্কোপ বা বাউন্ডারি নির্ধারিত হয়।
- **ক্লোজার (Closure)**: যখন একটি ফাংশন অন্য আরেকটি ফাংশন রিটার্ন করে, তখন রিটার্ন হওয়া ফাংশনটি যে পরিবেশে তৈরি হয়েছিল তার স্কোপ চেইন মনে রাখে।
- **ব্যবহার**: অবজেক্টের প্রাইভেট ভ্যারিয়েবল ও মেথড তৈরি করতে, মেমোইজেশন এবং কাস্টম কলব্যাক হ্যান্ডলারে এটি ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ক্লিক কাউন্টার হেল্পার তৈরি করা। গ্লোবাল ভ্যারিয়েবল ব্যবহার না করে ক্লোজারের মাধ্যমে একটি প্রাইভেট কাউন্ট ভ্যারিয়েবল রাখা যা বাইরের কোনো স্ক্রিপ্ট হ্যাক বা রিসেট করতে পারবে না।

### উত্তম অনুশীলন (Best Practice)
প্রয়োজন শেষ হয়ে যাওয়ার পরও ক্লোজারের ভেতর অপ্রয়োজনীয় বড় অবজেক্ট রেফারেন্স করে রাখবেন না, এতে মেমরি লিক হতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
লুপের ভেতর \`var\` ব্যবহার করে ক্লোজার তৈরি করা। \`var\` ব্লক-স্কোপড না হওয়ায় সব কলব্যাক লুপের শেষ ভ্যালু শেয়ার করে। এ ক্ষেত্রে \`let\` ব্যবহার করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
function createCounter() {
  let count = 0; // প্রাইভেট ভ্যারিয়েবল
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
// console.log(count); // ReferenceError দিবে (ডাটা সুরক্ষিত!)
\`\`\``
  },
  {
    id: 'javascript-32',
    title: 'Explain the Scope Chain and Execution Context in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Execution Context', 'Scope Chain', 'Compiler'],
    enAnswer: 'Execution Context is the environment where JavaScript code runs, consisting of Variable and Lexical Environments. Scope Chain is the list of parent lexical environments searched to resolve identifiers.',
    bnAnswer: 'Execution Context হলো জাভাস্ক্রিপ্ট রান হওয়ার পরিবেশ যা ভ্যারিয়েবল ও লেক্সিক্যাল এনভায়রনমেন্ট নিয়ে গঠিত। Scope Chain হলো ভ্যারিয়েবল খুঁজে বের করার জন্য প্যারেন্ট স্কোপগুলোর একটি চেইন।',
    enExplanation: `### Explanation
- **Execution Context (EC)**: Contains two phases: Creation Phase (sets up memory for variables/functions) and Execution Phase (runs code line-by-line). There is one Global EC and one Function EC created for every function call.
- **Scope Chain**: When a variable is referenced, the JS engine searches the current local context's Variable Environment. If not found, it traverses up the Lexical Environment parent pointers until it reaches the Global scope. If still missing, it throws a ReferenceError.

### Real-World Example
Debugging variables scope. If a nested function references a config value, understanding the scope chain explains why it can read outer settings but outer functions cannot read inner callbacks variables.

### Best Practice
Avoid deeply nested function structures that rely heavily on scope-chain traversals, as looking up deep parent chains can marginally slow down execution.

### Common Mistakes
Forgetting that scope chain lookup is lexical. A function's parent scope is where it is *defined*, not where it is *invoked*.

### Code Example
\`\`\`javascript
const globalVal = "global";

function outer() {
  const outerVal = "outer";
  
  function inner() {
    const innerVal = "inner";
    // Scope chain lookup travels up: inner -> outer -> global
    console.log(innerVal);  // Local - "inner"
    console.log(outerVal);  // Parent - "outer"
    console.log(globalVal); // Global - "global"
  }
  
  inner();
}
outer();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **এক্সিকিউশন কনটেক্সট (EC)**: এটি কোড রান করার পরিবেশ। এর দুটি ধাপ রয়েছে: ক্রিয়েশন ফেজ (মেমরি বরাদ্দ করে) এবং এক্সিকিউশন ফেজ (কোড রান করায়)। একটি গ্লোবাল EC থাকে এবং প্রতিবার ফাংশন কল হলে আলাদা ফাংশন EC তৈরি হয়।
- **স্কোপ চেইন (Scope Chain)**: যখন কোডে কোনো ভ্যারিয়েবল ব্যবহার করা হয়, তখন জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমে বর্তমান লোকাল স্কোপে তা খোঁজে। সেখানে না পেলে এটি প্যারেন্ট স্কোপের দিকে উঠতে থাকে যতক্ষণ না গ্লোবাল স্কোপে পৌঁছায়। গ্লোবাল স্কোপেও না পেলে ReferenceError দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্কোপ ডিবাগিং। একটি নেস্টেড ফাংশন কেন তার প্যারেন্ট ফাইলের কনফিগারেশন রিড করতে পারে কিন্তু প্যারেন্ট ফাইলটি নেস্টেড ফাংশনের লোকাল ভ্যারিয়েবল রিড করতে পারে না, তা স্কোপ চেইনের মাধ্যমেই নির্ধারিত হয়।

### উত্তম অনুশীলন (Best Practice)
অত্যধিক গভীর বা নেস্টেড ফাংশন স্ট্রাকচার পরিহার করুন যা প্যারেন্ট স্কোপের ওপর বেশি নির্ভরশীল, কারণ বেশি ওপরে গিয়ে ভ্যারিয়েবল সার্চ করলে কার্যক্ষমতা কিছুটা কমতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে স্কোপ চেইন কলিং পজিশনের ওপর নির্ভর করে। মনে রাখবেন, ফাংশনের প্যারেন্ট স্কোপ সেটিই যেখানে ফাংশনটি *তৈরি* করা হয়েছিল, যেখানে এটি *কল* করা হয়েছে সেটি নয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const globalVal = "global";

function outer() {
  const outerVal = "outer";
  
  function inner() {
    const innerVal = "inner";
    // স্কোপ চেইন সার্চিং: inner -> outer -> global
    console.log(innerVal);  // লোকাল - "inner"
    console.log(outerVal);  // প্যারেন্ট - "outer"
    console.log(globalVal); // গ্লোবাল - "global"
  }
  
  inner();
}
outer();
\`\`\``
  },
  {
    id: 'javascript-33',
    title: 'How does Prototype Inheritance work in JavaScript?',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Prototypes', 'Inheritance', 'OOP'],
    enAnswer: 'JavaScript objects inherit properties and methods from other objects using prototypes. Every object has a hidden link pointing to its parent prototype object.',
    bnAnswer: 'জাভাস্ক্রিপ্ট অবজেক্ট প্রোটোটাইপ ব্যবহারের মাধ্যমে অন্য অবজেক্ট থেকে প্রোপার্টি ও মেথড ইনহেরিট করে। প্রতিটি অবজেক্টের একটি গোপন লিঙ্ক থাকে যা তার প্যারেন্ট প্রোটোটাইপকে নির্দেশ করে।',
    enExplanation: `### Explanation
Unlike class-based languages (Java, C++), JavaScript inheritance is dynamic and object-based:
- **Prototypes**: Every object has an internal slot called \`[[Prototype]]\` (accessible via \`__proto__\` or \`Object.getPrototypeOf()\`).
- **Property Search**: When looking up a property on an object, JS first checks the object itself. If not found, it checks the prototype, and so on up to \`Object.prototype\` (the top of the prototype chain).
- **Instantiation**: When creating instances using functions or classes, the constructor assigns its \`.prototype\` property as the instance's parent prototype.

### Real-World Example
Array helper methods. When you call \`[1, 2].map()\`, the compiler resolves \`map\` because it resides on \`Array.prototype\`, which is inherited by all array instances.

### Best Practice
Avoid mutating standard built-in prototypes (e.g. adding custom methods to \`Array.prototype\`), as this can clash with future ES specs or third-party libraries (known as monkey-patching).

### Common Mistakes
Confusing the \`prototype\` property of a constructor function with the \`__proto__\` property of a constructed instance. The constructor's \`prototype\` defines the blueprint, while \`__proto__\` points to the active parent prototype link.

### Code Example
\`\`\`javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal walking...");
  }
};

// Create a new object inheriting from animal
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited!)
rabbit.walk(); // "Animal walking..." (inherited method!)

console.log(rabbit.hasOwnProperty("jumps")); // true (own property)
console.log(rabbit.hasOwnProperty("eats"));  // false (inherited property)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভা বা সি++ এর মতো ক্লাস-ভিত্তিক ল্যাঙ্গুয়েজের চেয়ে জাভাস্ক্রিপ্টের ইনহেরিটেন্স ডাইনামিক এবং অবজেক্ট-ভিত্তিক:
- **প্রোটোটাইপস (Prototypes)**: প্রতিটি অবজেক্টের একটি গোপন স্লট থাকে যাকে \`[[Prototype]]\` বলা হয় (কোডে \`__proto__\` বা \`Object.getPrototypeOf()\` দিয়ে রিড করা যায়)।
- **প্রোপার্টি সার্চ**: অবজেক্টের কোনো মেথড কল করলে জাভাস্ক্রিপ্ট প্রথমে তা অবজেক্টের নিজস্ব বডিতে খোঁজে। না পেলে তার প্রোটোটাইপ অবজেক্টে খোঁজে, এভাবে প্রোটোটাইপ চেইনের শেষ সীমা \`Object.prototype\` পর্যন্ত চলতে থাকে।
- **ইনস্ট্যান্স তৈরি**: ক্লাস বা কন্সট্রাক্টর ফাংশন দিয়ে অবজেক্ট তৈরি করলে তা চাইল্ডের \`__proto__\` লিঙ্কটিকে প্যারেন্টের \`prototype\` এর সাথে জুড়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অ্যারে মেথডসমূহ। যখন আমরা \`[1, 2].map()\` কল করি, তখন \`map\` মেথডটি অ্যারের ভেতরে থাকে না, এটি থাকে \`Array.prototype\` এর ভেতর যা সকল অ্যারে ইনস্ট্যান্স ইনহেরিট করে।

### উত্তম অনুশীলন (Best Practice)
বিল্ট-ইন জাভাস্ক্রিপ্ট অবজেক্টের প্রোটোটাইপে (যেমন \`Array.prototype\`) কাস্টম মেথড অ্যাড করা থেকে বিরত থাকুন (একে monkey-patching বলে), যা পরবর্তীতে থার্ড-পার্টি লাইব্রেরির সাথে কনফ্লিক্ট তৈরি করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
কন্সট্রাক্টর ফাংশনের \`prototype\` প্রোপার্টির সাথে ইনস্ট্যান্স অবজেক্টের \`__proto__\` গুলিয়ে ফেলা। কন্সট্রাক্টরের \`prototype\` ব্লু-প্রিন্ট নির্ধারণ করে আর \`__proto__\` প্যারেন্ট প্রোটোটাইপ লিঙ্ককে পয়েন্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal walking...");
  }
};

// animal কে প্রোটোটাইপ বানিয়ে নতুন অবজেক্ট তৈরি
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (ইনহেরিটেড!)
rabbit.walk(); // "Animal walking..." (ইনহেরিটেড মেথড!)

console.log(rabbit.hasOwnProperty("jumps")); // true (নিজস্ব প্রোপার্টি)
console.log(rabbit.hasOwnProperty("eats"));  // false (ইনহেরিটেড প্রোপার্টি)
\`\`\``
  },
  {
    id: 'javascript-34',
    title: 'Explain prototype vs __proto__ in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Prototypes', 'OOP', 'Execution Context'],
    enAnswer: 'prototype is a property unique to constructor functions/classes used to assign blueprints to instances. __proto__ is the active reference pointing to an object\'s parent prototype.',
    bnAnswer: 'prototype হলো কন্সট্রাক্টর ফাংশন বা ক্লাসের নিজস্ব প্রোপার্টি যা চাইল্ড ইনস্ট্যান্সকে ব্লুপ্রিন্ট দেয়। __proto__ হলো অবজেক্টের ভেতরের অ্যাক্টিভ রেফারেন্স যা তার প্যারেন্ট প্রোটোটাইপকে নির্দেশ করে।',
    enExplanation: `### Explanation
- **\`prototype\`**: A property that exists *only* on functions (excluding arrow functions) and classes. It defines what properties and methods will be shared with instances created using the \`new\` keyword.
- **\`__proto__\` (dunder proto)**: An accessor property on every object instance that points to its parent prototype. It is the actual pointer used during prototype chain resolution at runtime.
- **Modern standard**: \`__proto__\` is deprecated for direct modifications. Use \`Object.getPrototypeOf()\` and \`Object.setPrototypeOf()\` instead.

### Real-World Example
Understanding library inheritance. A library class has a static \`prototype\` object defining methods. When instantiated, the browser links the instance's \`__proto__\` to that class's \`prototype\` object to allow execution.

### Best Practice
Never modify or reassign \`__proto__\` directly at runtime as it causes severe performance penalties in modern JavaScript JIT engines due to optimizing de-optimizations.

### Common Mistakes
Writing \`myObject.prototype\` to try and find the prototype of an object instance. Only constructor functions have the \`prototype\` property; instances use \`__proto__\`.

### Code Example
\`\`\`javascript
function User(name) {
  this.name = name;
}

// Defining shared method on constructor prototype
User.prototype.sayHi = function() {
  console.log("Hi", this.name);
};

const rohit = new User("Rohit");

// Verification
console.log(rohit.prototype); // undefined (instances do not have 'prototype')
console.log(rohit.__proto__ === User.prototype); // true (instance's __proto__ links to constructor's prototype)
console.log(Object.getPrototypeOf(rohit) === User.prototype); // true (Modern standard check)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`prototype\`**: এটি *কেবলমাত্র* কন্সট্রাক্টর ফাংশন (অ্যারো ফাংশন বাদে) এবং ক্লাসের ভেতর থাকে। এটি নির্ধারণ করে যে \`new\` দিয়ে তৈরি ইনস্ট্যান্সগুলো কোন কোন মেথড শেয়ার করতে পারবে।
- **\`__proto__\`**: এটি জাভাস্ক্রিপ্টের প্রতিটি অবজেক্টের ভেতরের প্রোপার্টি যা তার প্যারেন্ট প্রোটোটাইপ লিঙ্ককে নির্দেশ করে। রানটাইমে মেথড সার্চ করার জন্য এটি পয়েন্টার হিসেবে কাজ করে।
- **আধুনিক স্ট্যান্ডার্ড**: সরাসরি \`__proto__\` মিউটেশন বা ব্যবহার করা এখন বর্জনীয়। এর পরিবর্তে \`Object.getPrototypeOf()\` এবং \`Object.setPrototypeOf()\` ব্যবহার করুন।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইব্রেরি ক্লাসের নিজস্ব \`prototype\` অবজেক্টে সব মেথড ডিক্লেয়ার করা থাকে। ইনস্ট্যান্স তৈরি করা হলে ব্রাউজার চাইল্ডের \`__proto__\` কে ওই ক্লাসের \`prototype\` এর সাথে লিঙ্ক করে দেয়।

### উত্তম অনুশীলন (Best Practice)
রানটাইমে সরাসরি \`__proto__\` চেঞ্জ করবেন না। এটি করলে জাভাস্ক্রিপ্ট ইঞ্জিনের JIT কম্পাইলার অপ্টিমাইজেশন নষ্ট করে দেয়, ফলে কোড ধীরগতির হয়ে যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনস্ট্যান্স অবজেক্টের প্রোটোটাইপ খুঁজতে \`myObject.prototype\` লেখা। অবজেক্ট ইনস্ট্যান্সে \`prototype\` থাকে না, ইনস্ট্যান্সে কেবল \`__proto__\` থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
function User(name) {
  this.name = name;
}

// কন্সট্রাক্টর প্রোটোটাইপে মেথড যোগ করা
User.prototype.sayHi = function() {
  console.log("Hi", this.name);
};

const rohit = new User("Rohit");

// যাচাইকরণ
console.log(rohit.prototype); // undefined (ইনস্ট্যান্সে prototype নেই)
console.log(rohit.__proto__ === User.prototype); // true (ইনস্ট্যান্সের __proto__ কন্সট্রাক্টরের prototype কে পয়েন্ট করছে)
console.log(Object.getPrototypeOf(rohit) === User.prototype); // true (আধুনিক স্ট্যান্ডার্ড চেক)
\`\`\``
  },
  {
    id: 'javascript-35',
    title: 'Compare Object.create vs Constructor Functions vs ES6 Classes for inheritance.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Object Creation', 'OOP', 'ES6'],
    enAnswer: 'Object.create links prototypes directly without running a constructor. Constructor Functions use function blueprints with new. ES6 Classes are syntactic sugar over constructor functions.',
    bnAnswer: 'Object.create কন্সট্রাক্টর রান না করেই সরাসরি প্রোটোটাইপ লিঙ্ক করে। Constructor Functions নিউ কি-ওয়ার্ড দিয়ে ব্লুপ্রিন্ট তৈরি করে। ES6 Classes হলো কন্সট্রাক্টর ফাংশনের ওপর সিনট্যাক্টিক সুগার।',
    enExplanation: `### Explanation
These three approaches handle inheritance differently under the hood:
- **\`Object.create(proto)\`**: Creates a new object with the specified prototype link. Extremely lightweight. No constructor is executed.
- **Constructor Functions**: Legacy OOP syntax using \`new\` and \`this.propertyName\`. Methods are attached to the function's \`prototype\` property.
- **ES6 Classes**: Modern, cleaner syntax introducing \`class\`, \`constructor\`, \`extends\`, and \`super\`. Compiles down to prototype inheritance under the hood.

### Real-World Example
Vite/React configurations or library building. Classes are highly readable and used in stateful servers, while \`Object.create\` is great for fast, functional data clone mappings with zero constructor overhead.

### Best Practice
Use ES6 Classes in modern object-oriented architectures for readability and consistency. Use \`Object.create\` when you want to establish inheritance relationships without running initialization logics.

### Common Mistakes
Forgetting the \`new\` keyword when invoking a constructor function, which silently runs the function in the global context, polluting the global window object.

### Code Example
\`\`\`javascript
// 1. Object.create
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto); // Links proto directly

// 2. Constructor Function
function UserOld(name) {
  this.name = name;
}
UserOld.prototype.sayHi = function() { return "Hi " + this.name; };

// 3. ES6 Class (Recommended for OOP)
class UserNew {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return \`Hi \${this.name}\`;
  }
}
const userInstance = new UserNew("Rohit");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্টে এই তিনটি পদ্ধতি প্রোটোটাইপ ইনহেরিটেন্স ভিন্ন উপায়ে হ্যান্ডেল করে:
- **\`Object.create(proto)\`**: কোনো কন্সট্রাক্টর লজিক রান না করেই সরাসরি একটি অবজেক্টকে অন্য অবজেক্টের প্রোটোটাইপ লিঙ্ক হিসেবে যুক্ত করে। এটি অত্যন্ত ফাস্ট ও লাইটওয়েট।
- **কন্সট্রাক্টর ফাংশন (Constructor Functions)**: পুরোনো OOP সিনট্যাক্স যা \`new\` এবং \`this\` দিয়ে তৈরি করা হতো। এর মেথডগুলো ফাংশনের \`prototype\` অবজেক্টে অ্যাড করা হতো।
- **ES6 Classes**: আধুনিক ও রিডিবল সিনট্যাক্স যা \`class\`, \`constructor\`, \`extends\` এবং \`super\` কি-ওয়ার্ড নিয়ে আসে। এটি মূলত কন্সট্রাক্টর ফাংশনের ওপর একটি রিডিবল লেয়ার বা সিনট্যাক্টিক সুগার।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডাটাবেজ মডেল বা স্টেটফুল কন্ট্রোলার ডিজাইন করার সময় ক্লাসের ব্যবহার কোডকে পরিচ্ছন্ন রাখে। আবার প্রোটোটাইপ ডুপ্লিকেট করার জন্য কন্সট্রাক্টরের ঝামেলা ছাড়া \`Object.create\` ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
আধুনিক অবজেক্ট-ওরিয়েন্টেড ডিজাইনের ক্ষেত্রে কোডের রিডিবিলিটি বজায় রাখতে ES6 Class ব্যবহার করুন। অবজেক্টের ইনিশিয়ালাইজেশন রান না করে কেবল প্রোটোটাইপ রিলেশনশিপ গড়তে \`Object.create\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কন্সট্রাক্টর ফাংশন কল করার সময় \`new\` কি-ওয়ার্ড দিতে ভুলে যাওয়া। এর ফলে ফাংশনটি গ্লোবাল কনটেক্সটে রান হয়ে যায় এবং গ্লোবাল স্কোপকে দূষিত করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. Object.create
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto); // সরাসরি প্রোটোটাইপ লিঙ্ক করছে

// ২. কন্সট্রাক্টর ফাংশন
function UserOld(name) {
  this.name = name;
}
UserOld.prototype.sayHi = function() { return "Hi " + this.name; };

// ৩. ES6 Class (আধুনিক রিডিবল OOP)
class UserNew {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return \`Hi \${this.name}\`;
  }
}
const userInstance = new UserNew("Rohit");
\`\`\``
  },
  {
    id: 'javascript-36',
    title: 'Implement Debouncing in JavaScript from scratch and explain its use cases.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Debounce', 'Performance', 'Optimizations'],
    enAnswer: 'Debouncing ensures a function is only executed after a specified cool-down period has elapsed since the last time it was invoked, ignoring intermediate rapid clicks/events.',
    bnAnswer: 'Debouncing নিশ্চিত করে যে শেষবার ইভেন্ট ঘটার পর একটি নির্দিষ্ট কুল-ডাউন সময় পার হওয়ার পরই কেবল ফাংশনটি রান হবে, মাঝখানের ঘনঘন কলগুলোকে এটি বাতিল করে।',
    enExplanation: `### Explanation
Debouncing limits execution rate by using timers:
- **Mechanism**: Every time the debounced function is triggered, it cancels any existing queued execution using \`clearTimeout\` and schedules a new timer using \`setTimeout\`.
- **Outcome**: The function only runs *once* after the activity has paused for the designated delay.

### Real-World Example
Search bar autocomplete inputs. If a user types \`"react"\` in 300ms, debouncing prevents firing 5 separate API calls for \`"r"\`, \`"re"\`, \`"rea"\`, \`"reac"\`, and \`"react"\`. It fires a single API request after typing pauses.

### Best Practice
Always clear the internal timeout inside debounced handlers during component unmounts in React or single-page applications to prevent memory leaks and unexpected background tasks.

### Common Mistakes
Forgetting that debouncing returns a *new wrapped function*. Invoking \`debounce(fn, 500)()\` inside an event listener directly re-instantiates the timer scope on every click, failing to debounce.

### Code Example
\`\`\`javascript
// Custom Debounce Implementation
function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    const context = this;
    
    // Clear previous timer to reset cooldown
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Usage
const handleSearch = debounce((query) => {
  console.log("Fetching API results for:", query);
}, 300);

// Simulated typing: only the last call executes after 300ms
handleSearch("r");
handleSearch("re");
handleSearch("rea"); // Only this one runs!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডেবাউন্সিং টাইমার ব্যবহার করে ফাংশনের এক্সিকিউশন রেট বা ফ্রিকোয়েন্সি নিয়ন্ত্রণ করে:
- **কার্যপদ্ধতি**: প্রতিবার ডেবাউন্সড ফাংশনটি কল করা হলে এটি \`clearTimeout\` দিয়ে আগের পেন্ডিং টাইমারটি ডিলিট করে ফেলে এবং \`setTimeout\` দিয়ে নতুন টাইমার সেট করে।
- **ফলাফল**: ইউজার টাইপ করা বা ক্লিক করা বন্ধ করার পর নির্দিষ্ট কুল-ডাউন পিরিয়ড শেষ হলেই কেবল ফাংশনটি একবার রান করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
সার্চ বার অটো-কমপ্লিট ইনপুট। ব্যবহারকারী ৩০০ মিলি-সেকেন্ডে \`"react"\` টাইপ করলে ডেবাউন্সিং ছাড়া ৫টি এপিআই কল ফায়ার হতো। ডেবাউন্সিংয়ের কারণে টাইপিং পজ করার পর কেবল একটি এপিআই কল ফায়ার হয়।

### উত্তম অনুশীলন (Best Practice)
React অ্যাপে কম্পোনেন্ট আনমাউন্ট হওয়ার সময় ডেবাউন্সড টাইমার ক্লিয়ার করুন যাতে ব্যাকগ্রাউন্ড মেমরি লিক না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে ডেবাউন্স একটি *নতুন ফাংশন* রিটার্ন করে। সরাসরি ইভেন্ট লিসেনারের ভেতর \`debounce(fn, 500)()\` লিখলে প্রতি ক্লিকে নতুন স্কোপ তৈরি হবে এবং ডেবাউন্স কাজ করবে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কাস্টম ডেবাউন্স ইমপ্লিমেন্টেশন
function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    const context = this;
    
    // কুল-ডাউন রিসেট করতে আগের টাইমার মুছে ফেলা
    clearTimeout(timeoutId);
    
    // নতুন টাইমার সেট করা
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// ব্যবহার
const handleSearch = debounce((query) => {
  console.log("সার্চ এপিআই কল হচ্ছে:", query);
}, 300);

// টাইপিং সিমুলেশন: ৩০০ মিলি-সেকেন্ড বিরতির পর কেবল শেষটি রান হবে
handleSearch("r");
handleSearch("re");
handleSearch("rea"); // কেবল এটিই রান হবে!
\`\`\``
  },
  {
    id: 'javascript-37',
    title: 'Implement Throttling in JavaScript from scratch and explain its use cases.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Throttle', 'Performance', 'Optimizations'],
    enAnswer: 'Throttling ensures a function is executed at most once in a specified time window, ignoring subsequent calls until that window closes.',
    bnAnswer: 'Throttling নিশ্চিত করে যে একটি নির্দিষ্ট সময়সীমার মধ্যে একটি ফাংশন সর্বোচ্চ একবারই রান হবে, সময় শেষ না হওয়া পর্যন্ত এটি অন্য সব কল বাতিল করে দেয়।',
    enExplanation: `### Explanation
Throttling guarantees regular, spaced execution during persistent event triggers:
- **Mechanism**: Stores a state checking if a block cooldown is active. If active, incoming calls are ignored. When the delay elapses, the lock is released.
- **Contrast with Debounce**: Debouncing waits for the user to stop activity. Throttling runs the function *continuously but capped* at a fixed frequency.

### Real-World Example
Handling scroll or resize events. If a user scrolls a page, the browser fires hundreds of events. Throttling lets you run scroll metrics calculations at most once every 200ms to keep UI rendering smooth.

### Best Practice
Use throttling when you want to track progress during continuous operations (like scrolling, window resizing, or dragging animations).

### Common Mistakes
Using debouncing instead of throttling for scroll animations, which results in the animations only firing *after* the user has stopped scrolling completely.

### Code Example
\`\`\`javascript
// Custom Throttle Implementation
function throttle(func, limit) {
  let inThrottle = false;
  
  return function (...args) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      
      // Release lock after limit elapses
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log("Calculating scroll positioning at:", Date.now());
}, 200);

// Even if triggered 100 times in 200ms, it only logs once
window.addEventListener("scroll", handleScroll);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
থ্রটলিং অবিরাম ট্রিগার হতে থাকা ইভেন্টের মাঝে একটি নির্দিষ্ট বিরতি পর পর ফাংশন রান হওয়া নিশ্চিত করে:
- **কার্যপদ্ধতি**: এটি চেক করে যে বর্তমান কুল-ডাউন লক সক্রিয় আছে কিনা। লক সক্রিয় থাকলে কলগুলো রিজেক্ট হয়। সময়সীমা পার হওয়ার পর লক খুলে যায় ও পরবর্তী কলের অনুমতি দেয়।
- **ডেবাউন্সের সাথে পার্থক্য**: ডেবাউন্স ইউজার থামা পর্যন্ত অপেক্ষা করে। থ্রটলিং ইউজার না থামলেও নির্দিষ্ট সময় পর পর *কন্টিনিউয়াসলি* লুপ আকারে রান করতে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্ক্রল বা উইন্ডো রিসাইজ ইভেন্ট হ্যান্ডেল করা। ইউজার পেজ স্ক্রল করলে প্রতি সেকেন্ডে শত শত ইভেন্ট ফায়ার হয়। থ্রটলিং ব্যবহার করে প্রতি ২০০ মিলি-সেকেন্ডে সর্বোচ্চ একবার ক্যালকুলেশন ফায়ার করে রেন্ডারিং পারফরম্যান্স স্মুথ রাখা।

### উত্তম অনুশীলন (Best Practice)
অনবরত চলতে থাকা অপারেশন (যেমন: পেজ স্ক্রলিং, উইন্ডো রিসাইজিং বা ড্র্যাগিং অ্যানিমেশন) ট্র্যাক করার জন্য থ্রটলিং ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্ক্রল অ্যানিমেশনের জন্য থ্রটলিংয়ের পরিবর্তে ডেবাউন্স ব্যবহার করা। এতে স্ক্রলিং থামা পর্যন্ত কোনো অ্যানিমেশন রান হবে না, যা দেখতে খারাপ লাগে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কাস্টম থ্রটল ইমপ্লিমেন্টেশন
function throttle(func, limit) {
  let inThrottle = false;
  
  return function (...args) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      
      // সময় পার হওয়ার পর লক রিলিজ করা
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// ব্যবহার
const handleScroll = throttle(() => {
  console.log("স্ক্রল পজিশন ক্যালকুলেট হচ্ছে:", Date.now());
}, 200);

// ২০০ মিলি-সেকেন্ডে ১০০ বার স্ক্রল ইভেন্ট ঘটলেও কেবল একবার লগ হবে
window.addEventListener("scroll", handleScroll);
\`\`\``
  },
  {
    id: 'javascript-38',
    title: 'Explain Currying and Partial Application in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Functional Programming', 'Currying', 'APIs'],
    enAnswer: 'Currying transforms a function taking multiple arguments into a chain of nested functions, each taking a single argument. Partial Application binds some arguments immediately, returning a function that accepts the rest.',
    bnAnswer: 'Currying একাধিক আর্গুমেন্ট গ্রহণকারী একটি ফাংশনকে নেস্টেড সিঙ্গেল-আর্গুমেন্ট ফাংশনের চেইনে রূপান্তর করে। Partial Application কিছু আর্গুমেন্ট সাথে সাথে বাইন্ড করে বাকিগুলোর জন্য নতুন ফাংশন দেয়।',
    enExplanation: `### Explanation
- **Currying**: Converts \`f(a, b, c)\` into \`f(a)(b)(c)\`. Every returned function in the chain accepts exactly *one* parameter.
- **Partial Application**: Converts \`f(a, b, c)\` into \`f(a, b)(c)\`. The returned function can accept one or more remaining parameters.
- **Purpose**: Helps in functional composition, creating reusable helper templates, and dry configuration loaders.

### Real-World Example
API logging wrappers. You curry a logging function to accept the log type (\`"INFO"\` or \`"ERROR"\`) first, and reuse that pre-configured logger throughout the app to log specific messages.

### Best Practice
Use currying and partial application to build clean config utilities or UI middleware pipelines where configuration settings are injected early.

### Common Mistakes
Confusing the two terms. Remember that currying strictly yields single-parameter functions, while partial application binds arguments without restrictions on nested parameter counts.

### Code Example
\`\`\`javascript
// 1. Currying
const currySum = (a) => (b) => (c) => a + b + c;
console.log(currySum(1)(2)(3)); // 6

// 2. Partial Application
function multiply(a, b, c) {
  return a * b * c;
}

// Bind 'a' to 2, returns a function accepting b and c
const doubleMultiply = multiply.bind(null, 2);
console.log(doubleMultiply(3, 4)); // 2 * 3 * 4 = 24
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **কারিং (Currying)**: \`f(a, b, c)\` ফাংশনকে \`f(a)(b)(c)\` এ রূপান্তর করে। চেইনের প্রতিটি ফাংশন কেবল *একটি* করে প্যারামিটার গ্রহণ করে।
- **পারশিয়াল অ্যাপ্লিকেশন (Partial Application)**: \`f(a, b, c)\` কে \`f(a, b)(c)\` এ রূপান্তর করে। রিটার্ন হওয়া ফাংশনটি এক বা একাধিক অবশিষ্ট প্যারামিটার একসাথে রিসিভ করতে পারে।
- **উদ্দেশ্য**: ফাংশনাল কম্পোজিশন সহজ করতে এবং আগে থেকে কনফিগার করা রিইউজেবল হেল্পার ফাইল তৈরি করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
এপিআই লগার তৈরি করা। প্রথমে কারিং ব্যবহার করে লগ টাইপ (\`"INFO"\` বা \`"ERROR"\`) কনফিগার করে রাখা, এরপর ওই প্রি-কনফিগারড লগার দিয়ে অ্যাপের যেকোনো ফাইল থেকে মেসেজ প্রিন্ট করা।

### উত্তম অনুশীলন (Best Practice)
ডকুমেন্ট জেনারেশন বা মিডলওয়্যার পাইপলাইন তৈরির সময় কনফিগারেশন ইনজেক্ট করতে কারিং ও আংশিক আর্গুমেন্ট বাইন্ডিং ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
দুটি টার্ম গুলিয়ে ফেলা। মনে রাখবেন, কারিংয়ে মেথড চেইনের প্রতি ধাপে প্যারামিটার কেবল একটি হতে হবে, আর পারশিয়াল অ্যাপ্লিকেশনে আর্গুমেন্ট সংখ্যার ওপর এমন বাধ্যবাধকতা নেই।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. Currying (মেথড প্রতি একটি আর্গুমেন্ট)
const currySum = (a) => (b) => (c) => a + b + c;
console.log(currySum(1)(2)(3)); // 6

// ২. Partial Application
function multiply(a, b, c) {
  return a * b * c;
}

// 'a' এর মান ২ এ ফিক্সড করে আংশিক বাইন্ড করা হলো
const doubleMultiply = multiply.bind(null, 2);
console.log(doubleMultiply(3, 4)); // 2 * 3 * 4 = 24
\`\`\``
  },
  {
    id: 'javascript-39',
    title: 'Explain Promises under the hood and their execution cycles.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Promises', 'Asynchronous', 'Event Loop'],
    enAnswer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation, operating in one of three states: Pending, Fulfilled, or Rejected.',
    bnAnswer: 'Promise হলো এমন অবজেক্ট যা কোনো অ্যাসিনক্রোনাস অপারেশনের চূড়ান্ত সফল বা ব্যর্থ স্টেট প্রকাশ করে এবং তিনটি স্টেটে চলে: Pending, Fulfilled, এবং Rejected।',
    enExplanation: `### Explanation
Promises are built on the JS event loop and microtask queues:
- **Internal States**:
  - \`Pending\`: Initial state, neither fulfilled nor rejected.
  - \`Fulfilled\`: Operation completed successfully, resolving with a value.
  - \`Rejected\`: Operation failed, yielding an error reasons.
- **Immutability**: Once a promise transitions from Pending to Fulfilled or Rejected, its state is locked and cannot change.
- **Execution**: The executor function runs *synchronously* immediately upon creation. The handlers (\`.then()\`, \`.catch()\`) are scheduled *asynchronously* in the Microtask Queue.

### Real-World Example
Fetching user data. A search request returns a Promise. The UI displays a loading spinner (\`Pending\`). When data returns, the spinner closes and logs render (\`Fulfilled\`). If the network fails, it shows an error card (\`Rejected\`).

### Best Practice
Always handle Promise rejections using \`.catch()\` or try-catch blocks to prevent unhandled rejection crashes in server runtimes.

### Common Mistakes
Creating "Promise hell" by nesting \`.then()\` blocks instead of returning promises to chain them flatly.

### Code Example
\`\`\`javascript
console.log("Start");

const myPromise = new Promise((resolve, reject) => {
  console.log("Executor runs synchronously!");
  resolve("Resolved Value");
});

myPromise.then(val => {
  console.log("Microtask resolved:", val); // Runs asynchronously
});

console.log("End");

/*
Output Order:
1. "Start"
2. "Executor runs synchronously!"
3. "End"
4. "Microtask resolved: Resolved Value"
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রমিজ জাভাস্ক্রিপ্ট ইভেন্ট লুপ এবং মাইক্রোটাস্ক কিউ এর ওপর ভিত্তি করে চলে:
- **অভ্যন্তরীণ স্টেটস**:
  - \`Pending\`: প্রাথমিক অবস্থা, সফল বা ব্যর্থ কোনোটিই এখনো হয়নি।
  - \`Fulfilled\`: অপারেশন সফলভাবে শেষ হয়েছে এবং মান রিটার্ন করেছে।
  - \`Rejected\`: অপারেশন ব্যর্থ হয়েছে এবং এরর রিটার্ন করেছে।
- **ইমিউটেবিলিটি**: প্রমিজ একবার পেন্ডিং থেকে ফিলাপড বা রিজেক্টেড হয়ে গেলে তার স্টেট লক হয়ে যায়, তা আর পরিবর্তন করা যায় না।
- **এক্সিকিউশন**: প্রমিজের ভেতরের এক্সিকিউটর ফাংশনটি তৈরির সাথে সাথে *সিনক্রোনাসলি* চলে। কিন্তু হ্যান্ডলার মেথডগুলো (\`.then()\`, \`.catch()\`) মাইক্রোটাস্ক কিউতে *অ্যাসিনক্রোনাসলি* রান হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
এপিআই থেকে ইউজার ডাটা আনা। ইউজার রিকোয়েস্টটি ইনিশিয়েট করার পর পেন্ডিং অবস্থায় লোডিং স্পিনার দেখানো হয়। ডাটা চলে আসলে স্পিনার হাইড করে ডাটা শো করা হয় (Fulfilled)। নেটওয়ার্ক ডাউন থাকলে এরর পেজ দেখানো হয় (Rejected)।

### উত্তম অনুশীলন (Best Practice)
সার্ভার ক্র্যাশ এড়াতে এবং সিকিউরিটি বজায় রাখতে সব প্রমিজ কলের সাথে \`.catch()\` বা try-catch ব্যবহার করে এক্সেপশন হ্যান্ডেল করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
নেস্টেড \`.then()\` ব্লকের ভেতর আবার \`.then()\` কল করে "প্রমিজ হেল" তৈরি করা। এ ক্ষেত্রে প্রমিজ রিটার্ন করে চেইনিং ফ্ল্যাট রাখা উচিত।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
console.log("Start");

const myPromise = new Promise((resolve, reject) => {
  console.log("এক্সিকিউটর ফাংশন সিনক্রোনাসলি চলে!");
  resolve("Resolved Value");
});

myPromise.then(val => {
  console.log("মাইক্রোটাস্ক রেজলভ হয়েছে:", val); // অ্যাসিনক্রোনাসলি রান হবে
});

console.log("End");

/*
আউটপুট ক্রম:
১. "Start"
২. "এক্সিকিউটর ফাংশন সিনক্রোনাসলি চলে!"
৩. "End"
৪. "মাইক্রোটাস্ক রেজলভ হয়েছে: Resolved Value"
*/
\`\`\``
  },
  {
    id: 'javascript-40',
    title: 'Explain the Async/Await state machine and error handling.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Async/Await', 'Promises', 'Error Handling'],
    enAnswer: 'Async/Await is syntactic sugar built on Promises, converting asynchronous code blocks into a generator-like state machine that pauses execution without blocking the browser.',
    bnAnswer: 'Async/Await হলো প্রমিজের ওপর তৈরি একটি সিনট্যাক্টিক সুগার, যা অ্যাসিনক্রোনাস কোডকে জেনারেটরের মতো স্টেট মেশিনে রূপান্তর করে থ্রেড ব্লক না করেই কোড পজ করতে পারে।',
    enExplanation: `### Explanation
- **State Machine**: Under the hood, \`async/await\` utilizes generators and promises. The compiler translates the code into a series of states. When \`await\` is hit, the function execution pauses and yields back to the event loop. Once resolved, it resumes where it left off.
- **Return Type**: An \`async\` function *always* returns a Promise, even if you return a primitive value directly.
- **Error Handling**: Synchronous \`try...catch\` blocks wrap asynchronous statements natively to handle runtime rejections.

### Real-World Example
Handling database transitions. Sequential operations (e.g. creating a user, then writing a log, then sending an email) can be written line-by-line instead of cascading nested callback trees.

### Best Practice
Always wrap await operations inside \`try...catch\` blocks or chain a \`.catch()\` handler to prevent silent unhandled promise rejection warnings.

### Common Mistakes
Using \`await\` inside a standard \`forEach\` loop. \`forEach\` is not promise-aware and will execute all loop iterations concurrently without waiting. Use \`for...of\` instead.

### Code Example
\`\`\`javascript
async function fetchConfig() {
  return { active: true }; // Implicitly returns Promise.resolve({ active: true })
}

// Sequenced Execution and Error handling
async function runTask() {
  try {
    console.log("Task started");
    const config = await fetchConfig(); // pauses execution here until resolved
    console.log("Config loaded:", config);
  } catch (error) {
    console.error("Task failed:", error);
  }
}
runTask();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্টেট মেশিন**: ব্যাকগ্রাউন্ডে \`async/await\` জেনারেটর এবং প্রমিজ ব্যবহার করে। কম্পাইলার কোডটিকে কতগুলো স্টেটে ভাগ করে। \`await\` লাইনে পৌঁছালে ফাংশনটি সাময়িকভাবে পজ হয়ে ইভেন্ট লুপে কন্ট্রোল ছেড়ে দেয়। প্রমিজ রেজলভ হলে এটি আগের লাইন থেকেই আবার চলা শুরু করে।
- **রিটার্ন টাইপ**: একটি \`async\` ফাংশন থেকে সাধারণ ভ্যালু রিটার্ন করলেও তা স্বয়ংক্রিয়ভাবে প্রমিজে (\`Promise.resolve()\`) র‍্যাপ হয়ে যায়।
- **এরর হ্যান্ডলিং**: প্রমিজের ক্যাচ মেথডের পরিবর্তে ট্র্যাডিশনাল \`try...catch\` ব্লক দিয়ে সহজেই অ্যাসিনক্রোনাস এরর হ্যান্ডেল করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ রিলেশনশিপ মেইনটেইন করা। পর্যায়ক্রমিক কাজ (যেমন: প্রথমে ইউজার তৈরি করা, তারপর অ্যাক্টিভিটি লগ করা এবং শেষে কনফার্মেশন মেইল পাঠানো) এক লাইনের পর আরেক লাইনে সুন্দরভাবে সাজিয়ে লেখা।

### উত্তম অনুশীলন (Best Practice)
যেকোনো এপিআই রিকোয়েস্টের টাইমে \`await\` অপারেশনকে \`try...catch\` ব্লক দিয়ে মুড়ে রাখুন যাতে রানটাইম নেটওয়ার্ক ফেইলুর হলে সিস্টেম হ্যান্ডেল করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ \`forEach\` লুপের ভেতর \`await\` ব্যবহার করা। \`forEach\` প্রমিজ সাপোর্ট করে না, তাই লুপের ভেতরের কোডগুলো সিরিয়ালি অপেক্ষা না করে সব একসাথে প্যারালালি রান হয়ে যাবে। এর জন্য \`for...of\` লুপ ব্যবহার করুন।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
async function fetchConfig() {
  return { active: true }; // স্বয়ংক্রিয়ভাবে Promise.resolve() রিটার্ন করবে
}

// সিকোয়েন্সড রান ও এরর হ্যান্ডলিং
async function runTask() {
  try {
    console.log("টাস্ক শুরু হয়েছে");
    const config = await fetchConfig(); // রেজলভ হওয়া পর্যন্ত কোড এখানে পজ থাকবে
    console.log("কনফিগার লোড হয়েছে:", config);
  } catch (error) {
    console.error("টাস্ক ফেইল হয়েছে:", error);
  }
}
runTask();
\`\`\``
  },
  {
    id: 'javascript-41',
    title: 'Explain the JavaScript Event Loop (Call Stack, Web APIs, Callback Queue).',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Event Loop', 'Asynchronous', 'Performance'],
    enAnswer: 'The Event Loop coordinates code execution by pushing asynchronous callbacks from the Callback Queue into the Call Stack once the Call Stack is empty.',
    bnAnswer: 'Event Loop অ্যাসিনক্রোনাস কাজগুলো সমন্বয় করে; কল স্ট্যাক খালি হলে এটি কলব্যাক কিউ (Callback Queue) থেকে ফাংশনগুলোকে কল স্ট্যাকে পুশ করে এক্সিকিউট করায়।',
    enExplanation: `### Explanation
JavaScript is single-threaded (one call stack, executing one line at a time). To execute asynchronous operations:
1. **Call Stack**: Executes synchronous code.
2. **Web APIs / Node APIs**: Asynchronous tasks (fetching, timers) are handed off to the browser or Node runtime thread pool.
3. **Callback Queue / Task Queue**: When an asynchronous task finishes, its callback is placed in this queue.
4. **Event Loop**: Monitors the Call Stack. Once the stack is completely empty, it takes the first task from the queue and pushes it onto the Call Stack for execution.

### Real-World Example
Why a long-running synchronous \`while\` loop freezes the browser. Since the call stack is occupied, the event loop cannot push any click handlers or UI paint updates from the queue, causing the page to freeze.

### Best Practice
Never run heavy computational calculations directly on the main thread. Delegate heavy data manipulations to Web Workers or partition tasks using setTimeout chunks.

### Common Mistakes
Thinking \`setTimeout(fn, 100)\` runs exactly at 100ms. If the call stack is blocked by a heavy calculation taking 500ms, the timer callback will execute only after 500ms.

### Code Example
\`\`\`javascript
console.log("First");

setTimeout(() => {
  console.log("Second (Timer)");
}, 0);

Promise.resolve().then(() => {
  console.log("Third (Promise)");
});

console.log("Fourth");

/*
Execution order:
1. "First" (Synchronous)
2. "Fourth" (Synchronous)
3. "Third (Promise)" (Microtask queue has priority over callback queue!)
4. "Second (Timer)" (Macrotask queue)
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ল্যাঙ্গুয়েজ (একই সময়ে একটি মাত্র কাজ করতে পারে)। অ্যাসিনক্রোনাস কাজগুলো এটি যেভাবে সমন্বয় করে:
1. **কল স্ট্যাক (Call Stack)**: সমস্ত সিনক্রোনাস কোড লাইনের পর লাইন এখানে এক্সিকিউট হয়।
2. **Web APIs / Node APIs**: টাইমার বা নেটওয়ার্ক রিকোয়েস্টের মতো অ্যাসিনক্রোনাস কাজগুলো ব্রাউজার বা নোড ইঞ্জিনের ব্যাকগ্রাউন্ড থ্রেড পুলে ট্রান্সফার হয়।
3. **কলব্যাক কিউ (Callback Queue)**: ব্যাকগ্রাউন্ডে কাজ শেষ হওয়ার পর তাদের অ্যাসোসিয়েটেড কলব্যাক ফাংশনগুলো এই লাইনে এসে দাঁড়িয়ে থাকে।
4. **ইভেন্ট লুপ (Event Loop)**: এটি প্রতিনিয়ত কল স্ট্যাক পর্যবেক্ষণ করে। যখনই স্ট্যাক সম্পূর্ণ ফাঁকা হয়, এটি কলব্যাক কিউ থেকে প্রথম কাজটিকে কল স্ট্যাকে পুশ করে রান করায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় লুপ ব্রাউজার স্ক্রিন লক করে ফেলে কেন? কারণ কল স্ট্যাক ব্যস্ত থাকায় ইভেন্ট লুপ কোনো মাউস ক্লিক বা স্ক্রিন রেন্ডার আপডেট কিউ থেকে স্ট্যাকে পাঠাতে পারে না, ফলে ব্রাউজার হ্যাং হয়ে যায়।

### উত্তম অনুশীলন (Best Practice)
মেইন থ্রেডে ভারী ডেটা ক্যালকুলেশন করবেন না। দীর্ঘমেয়াদী গণনার জন্য Web Workers ব্যবহার করুন অথবা setTimeout দিয়ে কাজগুলোকে ছোট ছোট খণ্ডে ভাগ করে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`setTimeout(fn, 100)\` ঠিক ১০০ মিলি-সেকেন্ডেই রান হবে। যদি কল স্ট্যাক কোনো ভারী কাজের জন্য ৫০০ মিলি-সেকেন্ড আটকে থাকে, তবে টাইমার কলব্যাকটি ৫০০ মিলি-সেকেন্ডের আগে রান করতে পারবে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
console.log("First");

setTimeout(() => {
  console.log("Second (Timer)");
}, 0);

Promise.resolve().then(() => {
  console.log("Third (Promise)");
});

console.log("Fourth");

/*
আউটপুট ক্রম:
১. "First" (সিনক্রোনাস)
২. "Fourth" (সিনক্রোনাস)
৩. "Third (Promise)" (মাইক্রোটাস্ক কিউ এর প্রায়োরিটি টাইমারের চেয়ে বেশি!)
৪. "Second (Timer)" (ম্যাক্রোটাস্ক কিউ)
*/
\`\`\``
  },
  {
    id: 'javascript-42',
    title: 'Explain Microtasks vs Macrotasks and their priority in the Event Loop.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Event Loop', 'Microtasks', 'Macrotasks'],
    enAnswer: 'Microtasks (Promises, MutationObserver) have higher priority than Macrotasks (setTimeout, event handlers). The Event Loop executes all pending microtasks before processing the next macrotask.',
    bnAnswer: 'Microtasks (Promises, MutationObserver) এর প্রায়োরিটি Macrotasks (setTimeout, events) এর চেয়ে বেশি। ইভেন্ট লুপ পরবর্তী ম্যাক্রোটাস্ক শুরু করার আগে পেন্ডিং সব মাইক্রোটাস্ক রান করায়।',
    enExplanation: `### Explanation
The Callback Queue is divided into two distinct queues:
- **Microtask Queue**: Contains Promise callbacks (\`.then\`, \`.catch\`, \`finally\`), \`queueMicrotask\`, and \`MutationObserver\`.
- **Macrotask Queue (Task Queue)**: Contains \`setTimeout\`, \`setInterval\`, \`setImmediate\` (Node), UI events, and I/O.
- **Priority Rule**: When the call stack is cleared, the engine flushes the *entire* Microtask Queue before checking the Macrotask Queue. If microtasks continuously add new microtasks, the Macrotask Queue gets starved, and the UI freezes.

### Real-World Example
If you resolve a promise chain that continuously triggers next promises, UI clicks (which are macrotasks) will not execute, making the webpage unresponsive despite no long synchronous calculations running.

### Best Practice
Use \`queueMicrotask()\` if you need to run a small validation callback asynchronously immediately after the current function scope without waiting for a full render cycle.

### Common Mistakes
Mixing Promises and timeouts and assuming they will fire in chronological declaration order. Promises always execute first.

### Code Example
\`\`\`javascript
setTimeout(() => console.log("Timeout (Macrotask)"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1 (Microtask)");
  Promise.resolve().then(() => console.log("Promise 2 (Nested Microtask)"));
});

console.log("Sync Code");

/*
Output:
1. "Sync Code"
2. "Promise 1 (Microtask)"
3. "Promise 2 (Nested Microtask)" (Nested microtasks run before timeout!)
4. "Timeout (Macrotask)"
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কলব্যাক কিউ মূলত দুটি ভিন্ন সাব-কিউতে বিভক্ত থাকে:
- **মাইক্রোটাস্ক কিউ (Microtask Queue)**: প্রমিজ কলব্যাকস (\`.then\`, \`.catch\`), \`queueMicrotask\` এবং \`MutationObserver\`।
- **ম্যাক্রোটাস্ক কিউ (Macrotask Queue / Task Queue)**: \`setTimeout\`, \`setInterval\`, মাউস বা কিবোর্ড ইভেন্টস এবং ফাইল I/O।
- **অগ্রাধিকার নিয়ম**: কল স্ট্যাক ফাঁকা হওয়ার পর ইঞ্জিন প্রথমে মাইক্রোটাস্ক কিউতে থাকা *সবগুলো* কাজ একের পর এক শেষ করে। একটি মাইক্রোটাস্কের ভেতর আরেকটি মাইক্রোটাস্ক থাকলে সেটিও সাথে সাথে শেষ হবে। এরপর কেবল ম্যাক্রোটাস্ক কিউ চেক করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি প্রমিজ চেইনের ভেতর যদি লুপ আকারে পুনরায় প্রমিজ রিজলভ করা হয়, তবে ব্রাউজারে বাটন ক্লিক করার ইভেন্ট (যা ম্যাক্রোটাস্ক) ফায়ার হবে না। ফলে পেজটি সম্পূর্ণ আন-রেসপন্সিভ দেখাবে।

### উত্তম অনুশীলন (Best Practice)
রেন্ডারিং চক্র বা ফ্রেম আঁকার ঠিক পূর্বে কোনো কাজ অ্যাসিনক্রোনাসলি এবং ফাস্ট রান করাতে চাইলে \`queueMicrotask()\` এপিআই ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইমআউট এবং প্রমিজ একসাথে ব্যবহার করে তাদের ডিক্লেয়ারেশনের ক্রমানুসারে রান হবে মনে করা। প্রমিজ কলব্যাক সবসময় টাইমারের আগে রান হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
setTimeout(() => console.log("Timeout (Macrotask)"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1 (Microtask)");
  Promise.resolve().then(() => console.log("Promise 2 (Nested Microtask)"));
});

console.log("Sync Code");

/*
আউটপুট:
১. "Sync Code"
২. "Promise 1 (Microtask)"
৩. "Promise 2 (Nested Microtask)" (নেস্টেড প্রমিজও টাইমারের আগে শেষ হবে!)
৪. "Timeout (Macrotask)"
*/
\`\`\``
  },
  {
    id: 'javascript-43',
    title: 'Explain Garbage Collection algorithms in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Memory', 'Garbage Collection', 'Compilation'],
    enAnswer: 'Garbage Collection automatically frees memory by reclaiming unreachable objects. It primarily uses the Mark-and-Sweep algorithm, replacing the legacy Reference Counting algorithm.',
    bnAnswer: 'Garbage Collection মেমরি থেকে অপ্রয়োজনীয় অবজেক্ট মুছে স্বয়ংক্রিয়ভাবে মেমরি ফাঁকা করে। এটি মূলত Mark-and-Sweep অ্যালগরিদম ব্যবহার করে কাজ করে।',
    enExplanation: `### Explanation
JavaScript manages memory allocations automatically using Garbage Collection (GC):
- **Reference-Counting Algorithm**: Reclaims memory if an object has zero references pointing to it.
  - *Limitation*: Fails on circular references (two objects pointing to each other, maintaining a count of 1 forever, leaking memory).
- **Mark-and-Sweep Algorithm (Modern standard)**:
  - Starts from the root context (global object, local execution scopes).
  - Traverses and marks all reachable child nodes.
  - Any memory blocks that are unreachable from the root are swept and released.

### Real-World Example
Circular references in database models. If parent has child, and child points back to parent, reference counting fails to clean them. Mark-and-Sweep handles this because once the parent is detached from global context, both become unreachable and are deleted.

### Best Practice
Always detach event listeners and nullify references to large objects when they are no longer in use to make them eligible for GC.

### Common Mistakes
Worrying about running garbage collection manually. JavaScript does not expose a programmatic GC trigger; it is completely managed by browser/V8 engines.

### Code Example
\`\`\`javascript
// Circular reference example
function createCycle() {
  const objA = {};
  const objB = {};
  
  objA.link = objB; // A points to B
  objB.link = objA; // B points to A
  
  return "Cycle created";
}
createCycle();
// Once function exits, objA and objB go out of scope.
// Reference counting would fail to GC them (circular reference count > 0).
// Mark-and-Sweep succeeds because they are unreachable from the global root.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট অটোমেটিক মেমরি ম্যানেজমেন্ট বা গার্বেজ কালেকশন (GC) এর মাধ্যমে অপ্রয়োজনীয় মেমরি রিলিজ করে:
- **রেফারেন্স-কাউন্টিং অ্যালগরিদম**: কোনো অবজেক্টের দিকে অন্য কোনো ভ্যারিয়েবলের রেফারেন্স না থাকলে (reference count = 0) তা মেমরি থেকে মুছে ফেলে।
  - *সীমাবদ্ধতা*: সার্কুলার রেফারেন্স (দুটি অবজেক্ট একে অপরকে পয়েন্ট করে রাখলে) রেফারেন্স কাউন্ট কখনো ০ হয় না, ফলে মেমরি লিক হয়।
- **মার্ক-অ্যান্ড-সুইপ অ্যালগরিদম (আধুনিক স্ট্যান্ডার্ড)**:
  - এটি গ্লোবাল রুট অবজেক্ট থেকে ট্রাভার্স করা শুরু করে।
  - রুট থেকে যেসব চাইল্ড অবজেক্টে পৌঁছানো যায়, সেগুলোকে "reachable" মার্ক করে।
  - যেসব অবজেক্ট রুটের সাথে সংযুক্ত নয় বা পৌঁছানো যায় না, সেগুলোকে মেমরি থেকে মুছে (sweep) দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি পেরেন্ট অবজেক্ট চাইল্ডকে পয়েন্ট করে এবং চাইল্ডও পেরেন্টকে পয়েন্ট করে রাখে। রেফারেন্স কাউন্টিং এদের রিলিজ করতে পারে না। কিন্তু রুট থেকে সংযোগ বিচ্ছিন্ন হয়ে গেলেই মার্ক-অ্যান্ড-সুইপ এদেরকে মেমরি থেকে সফলভাবে ক্লিন করে দেয়।

### উত্তম অনুশীলন (Best Practice)
কাজ শেষ হয়ে গেলে বড় মেমরি অবজেক্টের রেফারেন্স \`null\` করে দিন যাতে গার্বেজ কালেক্টর সহজেই তা রিমুভ করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
কোডের ভেতর কাস্টম কোড দিয়ে গার্বেজ কালেকশন রান করার চেষ্টা করা। জাভাস্ক্রিপ্টে ম্যানুয়ালি GC রান করানোর কোনো অফিশিয়াল এপিআই নেই, এটি সম্পূর্ণ ইঞ্জিন নির্ভর।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// সার্কুলার রেফারেন্সের উদাহরণ
function createCycle() {
  const objA = {};
  const objB = {};
  
  objA.link = objB; // A পয়েন্ট করছে B কে
  objB.link = objA; // B পয়েন্ট করছে A কে
  
  return "Cycle created";
}
createCycle();
// ফাংশন রান শেষ হওয়ার সাথে সাথে objA ও objB স্কোপের বাইরে চলে যাবে।
// রেফারেন্স কাউন্টিং পদ্ধতি এদের মেমরি রিলিজ করতে ব্যর্থ হতো।
// মার্ক-অ্যান্ড-সুইপ পদ্ধতি সফল হবে কারণ গ্লোবাল রুট থেকে এদের কাছে পৌঁছানো অসম্ভব।
\`\`\``
  },
  {
    id: 'javascript-44',
    title: 'Explain common Memory Leaks in JavaScript and how to debug them.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Memory Leaks', 'Debugging', 'Chrome DevTools'],
    enAnswer: 'Common memory leaks include accidental global variables, uncleared timers/intervals, detached DOM references, and forgotten closures. Debug them using the Chrome DevTools Performance and Memory panels.',
    bnAnswer: 'সাধারণ মেমরি লিকগুলোর মধ্যে রয়েছে অসাবধানতাবশত গ্লোবাল ভ্যারিয়েবল তৈরি, ক্লিয়ার না করা টাইমার, ডিটাচড DOM নোড এবং ক্লোজার। এগুলো Chrome DevTools Memory প্যানেল দিয়ে ডিবাগ করা যায়।',
    enExplanation: `### Explanation
Memory leaks occur when objects are no longer needed but remain reachable:
- **Accidental Globals**: Declaring variables without \`let\`/\`const\` attaches them to the global \`window\` object forever.
- **Uncleared Timers**: \`setInterval\` callbacks keep references to objects active in memory until cleared, even if the UI component is destroyed.
- **Detached DOM Nodes**: Keeping a reference to a DOM node in JavaScript after it was removed from the physical HTML page.
- **Debugging**: Use Chrome DevTools \`Memory\` panel to record **Heap Snapshots**. Look for increasing memory sizes and inspect detached nodes.

### Real-World Example
A single-page React app loading a chat component. If the component mounts a \`setInterval\` to poll new messages but doesn't call \`clearInterval\` on unmount, navigating between pages leaves the timer looping in the background, consuming memory indefinitely.

### Best Practice
Always run cleanup logic in components (remove event listeners, clear timeouts, set large object references to null).

### Common Mistakes
Forgetting that removing an element from the DOM via \`removeChild\` does not delete it from memory if you still have a variable pointing to it in JS.

### Code Example
\`\`\`javascript
// Memory Leak: Detached DOM Node
let detachedElement = document.getElementById("button-to-remove");
document.body.removeChild(detachedElement); 
// The button is removed from screen, but remains in heap memory because the 'detachedElement' variable still points to it!

// To fix it:
detachedElement = null; // now eligible for garbage collection

// Memory Leak: Uncleared Interval
function startPolling() {
  const data = { cache: new Array(1000000).fill("data") };
  setInterval(() => {
    // keeping 'data' alive in memory forever because of closure!
    console.log("Polling...", data);
  }, 1000);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
মেমরি লিক তখন ঘটে যখন অবজেক্টগুলোর কোডে কোনো প্রয়োজন থাকে না কিন্তু গার্বেজ কালেক্টরের কাছে এগুলো পৌঁছানো সম্ভব (reachable) থাকে:
- **অসাবধানতাবশত গ্লোবাল ভ্যারিয়েবল**: \`let\`/\`const\` ছাড়া ভ্যারিয়েবল লিখলে তা গ্লোবাল \`window\` অবজেক্টের সাথে চিরতরে আটকে থাকে।
- **টাইমার ক্লিয়ার না করা**: \`setInterval\` ক্লিয়ার না করলে কম্পোনেন্ট ডিলিট হওয়ার পরও কলব্যাক লুপ মেমরিতে ঘুরতে থাকে।
- **ডিটাচড DOM নোডস (Detached DOM Nodes)**: স্ক্রিন থেকে নোড রিমুভ করার পরও জাভাস্ক্রিপ্ট ভ্যারিয়েবলে নোডটির রেফারেন্স ধরে রাখা।
- **ডিবাগিং**: Chrome DevTools এর \`Memory\` প্যানেল থেকে **Heap Snapshots** রেকর্ড করে মেমরির সাইজ ট্র্যাক করা ও লিকেজ নোড চিহ্নিত করা।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি রিঅ্যাক্ট চ্যাট কম্পোনেন্টে প্রতি সেকেন্ডে মেসেজ রিসিভ করার জন্য \`setInterval\` সেট করা। কম্পোনেন্ট আনমাউন্ট হওয়ার সময় টাইমারটি ক্লিয়ার না করলে ব্যাকগ্রাউন্ডে এটি লুপ চলতেই থাকবে এবং মেমরি বাড়িয়ে একসময় ব্রাউজার ক্র্যাশ করাবে।

### উত্তম অনুশীলন (Best Practice)
ইভেন্ট লিসেনার রিমুভ করা এবং টাইমার ক্লিয়ার করার লজিকগুলো সবসময় কম্পোনেন্টের ক্লিনআপ মেথডে লিখে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্ক্রিন থেকে \`removeChild\` দিয়ে নোড ডিলিট করলেও মেমরি থেকে ডিলিট হয়েছে মনে করা। জাভাস্ক্রিপ্ট ভ্যারিয়েবলে নোডটি রেফারেন্সড থাকলে তা মেমরিতেই থেকে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// মেমরি লিক: ডিটাচড DOM নোড
let detachedElement = document.getElementById("button-to-remove");
document.body.removeChild(detachedElement); 
// বাটনটি স্ক্রিনে নেই, কিন্তু হিপ মেমরিতে রয়ে গেছে কারণ 'detachedElement' ভ্যারিয়েবলটি একে পয়েন্ট করছে!

// সমাধানের জন্য:
detachedElement = null; // এখন এটি গার্বেজ কালেকশনে চলে যাবে

// মেমরি লিক: ক্লিয়ার না করা ইন্টারভাল
function startPolling() {
  const data = { cache: new Array(1000000).fill("data") };
  setInterval(() => {
    // ক্লোজারের কারণে 'data' অবজেক্টটি মেমরিতে চিরতরে সচল থাকবে!
    console.log("Polling...", data);
  }, 1000);
}
\`\`\``
  },
  {
    id: 'javascript-45',
    title: 'Explain Map vs Object in JavaScript and when to use which.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Objects', 'Map', 'Performance'],
    enAnswer: 'Map preserves key insertion order, permits keys of any data type (including objects), and is optimized for frequent additions/removals. Object keys must be strings or symbols and are not ordered.',
    bnAnswer: 'Map প্রোপার্টির সিকোয়েন্স বজায় রাখে, যেকোনো টাইপের (অবজেক্ট সহ) কি (key) সাপোর্ট করে এবং ঘনঘন ডাটা রাইট করার জন্য অপ্টিমাইজড। Object কী-সমূহ কেবল স্ট্রিং বা সিম্বল হতে পারে।',
    enExplanation: `### Explanation
- **Key Types**: \`Object\` keys must be \`String\` or \`Symbol\`. \`Map\` keys can be anything: functions, objects, or primitive types.
- **Ordering**: \`Map\` preserves the exact insertion order of items. \`Object\` sorting is complex and not strictly guaranteed.
- **Size**: \`Map\` exposes a direct \`.size\` property. \`Object\` requires manual calculation via \`Object.keys(obj).length\`.
- **Performance**: \`Map\` is highly optimized for scenarios involving frequent additions and deletions of key-value pairs.

### Real-World Example
Building a cache key store mapping actual user request configuration objects to cached response objects. Since keys must be configurations objects, a standard \`Object\` is unusable; you must use a \`Map\`.

### Best Practice
Use \`Object\` for standard records, configuration schemas, or JSON payloads. Use \`Map\` for dynamic key-value dictionaries, caching systems, or where key order matters.

### Common Mistakes
Directly accessing Map values using dot notation (e.g. \`myMap.key\`). This bypasses the Map mapping and attaches properties to the Map object itself. Always use \`.set()\` and \`.get()\`.

### Code Example
\`\`\`javascript
// Object limitations with non-string keys
const obj = {};
const keyObj = { id: 1 };
obj[keyObj] = "value";
console.log(obj); // {[object Object]: "value"} (Key got coerced to string!)

// Map supports Object keys directly
const myMap = new Map();
const mapKey = { id: 1 };

myMap.set(mapKey, "val1");
console.log(myMap.get(mapKey)); // "val1"
console.log(myMap.size); // 1

// Map Iteration preserves order
myMap.set("a", 1);
myMap.set("b", 2);
for (const [key, val] of myMap) {
  console.log(key, val);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **কী এর টাইপ (Key Types)**: \`Object\` এর কী-সমূহ কেবল \`String\` বা \`Symbol\` হতে পারে। \`Map\` এর কী যেকোনো টাইপের হতে পারে: অবজেক্ট, ফাংশন বা অন্য যেকোনো প্রিমিটিভ।
- **ক্রম বা অর্ডারিং**: \`Map\` উপাদানগুলোর ইনসার্ট করার ক্রম বজায় রাখে। \`Object\` এর সিকোয়েন্স সবসময় গ্যারান্টিড নয়।
- **সাইজ**: \`Map\` এ সরাসরি \`.size\` প্রোপার্টি থাকে। \`Object\` এর ক্ষেত্রে \`Object.keys().length\` দিয়ে ম্যানুয়ালি বের করতে হয়।
- **পারফরম্যান্স**: ঘনঘন ডেটা অ্যাড ও ডিলিট করার ক্ষেত্রে \`Map\` অবজেক্টের চেয়ে অনেক বেশি দ্রুত ও অপ্টিমাইজড কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ক্যাশ মেমরি ডিকশনারি তৈরি করা যেখানে রিকোয়েস্ট অবজেক্টকে এপিআই রেসপন্সের সাথে ম্যাপ করা হবে। যেহেতু কী-সমূহ অবজেক্ট টাইপ হতে হবে, তাই সাধারণ \`Object\` কাজ করবে না; এখানে \`Map\` ব্যবহার করা বাধ্যতামূলক।

### উত্তম অনুশীলন (Best Practice)
সাধারণ রেকর্ড, স্থির কনফিগারেশন বা JSON পে-লোডের জন্য \`Object\` ব্যবহার করুন। ডাইনামিক কি-ভ্যালু স্টোর, ক্যাশিং বা অর্ডার ধরে রাখার প্রয়োজনে \`Map\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Map\` এর ভ্যালু ডট নোটেশন দিয়ে অ্যাক্সেস করা (যেমন: \`myMap.key\`)। এর ফলে ম্যাপের ইন্টারনাল ডেটা স্ট্রাকচার বাইপাস হয়ে সরাসরি ম্যাপ অবজেক্টের ওপর প্রোপার্টি বসে যায়। সবসময় \`.set()\` ও \`.get()\` ব্যবহার করুন।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// নন-স্ট্রিং কী এর ক্ষেত্রে অবজেক্টের সীমাবদ্ধতা
const obj = {};
const keyObj = { id: 1 };
obj[keyObj] = "value";
console.log(obj); // {[object Object]: "value"} (কী-টি স্ট্রিংয়ে রূপান্তর হয়ে গেছে!)

// ম্যাপে অবজেক্ট কী সরাসরি সাপোর্ট করে
const myMap = new Map();
const mapKey = { id: 1 };

myMap.set(mapKey, "val1");
console.log(myMap.get(mapKey)); // "val1"
console.log(myMap.size); // 1

// ম্যাপ ইটারেশন সিকোয়েন্স বজায় রাখে
myMap.set("a", 1);
myMap.set("b", 2);
for (const [key, val] of myMap) {
  console.log(key, val);
}
\`\`\``
  },
  {
    id: 'javascript-46',
    title: 'Explain Set vs Array and when to use which.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Arrays', 'Set', 'Performance'],
    enAnswer: 'Set is a collection of unique values supporting fast existence checks (has method). Array allows duplicate values and supports index-based operations.',
    bnAnswer: 'Set হলো ইউনিক মানের কালেকশন যা দ্রুত উপাদান খোঁজার (has মেথড) সুবিধা দেয়। Array ডুপ্লিকেট মান সাপোর্ট করে এবং ইনডেক্স-ভিত্তিক অপারেশন সমর্থন করে।',
    enExplanation: `### Explanation
- **Uniqueness**: \`Set\` automatically prevents duplicates. Inserting a duplicate value is ignored. \`Array\` accepts duplicates.
- **Lookup Performance**: Checking if an element exists in a \`Set\` using \`.has(value)\` is \`O(1)\` constant time. Finding an item in an \`Array\` using \`indexOf()\` or \`includes()\` is \`O(N)\` linear time, slowing down as the array grows.
- **Methods**: \`Array\` provides rich index manipulation methods (\`slice\`, \`splice\`, \`push\`, \`pop\`). \`Set\` only provides key additions/deletions (\`add\`, \`delete\`, \`has\`).

### Real-World Example
Removing duplicates from user input lists. To clean an array of tags, you can pass it to a Set, then immediately convert it back to a unique array using spread syntax \`[...new Set(tags)]\`.

### Best Practice
Use \`Set\` when checking for value existence or maintaining unique records. Use \`Array\` when order, index accessing, and duplicate items are required.

### Common Mistakes
Using \`Array.includes()\` inside loops to enforce uniqueness, which turns the loop algorithm from \`O(N)\` to \`O(N^2)\`. Use a \`Set\` instead.

### Code Example
\`\`\`javascript
// Uniqueness in Set
const mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set(3) {1, 2, 3} (duplicate '2' is removed!)

// Fast Lookup
console.log(mySet.has(2)); // true (O(1) complexity)

// Array Deduplication
const numbers = [1, 5, 1, 3, 5, 8];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 5, 3, 8]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ইউনিকনেস (Uniqueness)**: \`Set\` স্বয়ংক্রিয়ভাবে ডুপ্লিকেট ভ্যালু বাদ দিয়ে দেয়। \`Array\` যেকোনো পরিমাণ ডুপ্লিকেট মান সংরক্ষণ করতে পারে।
- **খোঁজার গতি বা সার্চ পারফরম্যান্স**: \`Set\` এ কোনো মান আছে কিনা তা \`.has()\` দিয়ে চেক করার স্পিড \`O(1)\` (কনস্ট্যান্ট টাইম)। \`Array\` তে চেক করার স্পিড \`O(N)\` (অ্যারের সাইজ বাড়ার সাথে সাথে এটি স্লো হতে থাকে)।
- **মেথডসমূহ**: \`Array\` ইনডেক্সিং, স্লাইসিং ও ম্যানিপুলেশনের অনেক মেথড দেয়। \`Set\` কেবল ডেটা যোগ ও সার্চের বেসিক মেথড দেয় (\`add\`, \`delete\`, \`has\`)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ট্যাগ লিস্ট থেকে ডুপ্লিকেট রিমুভ করা। ইনপুট ট্যাগগুলোর অ্যারেকে সরাসরি \`Set\` এ কনভার্ট করে স্প্রেড অপারেটর দিয়ে নতুন একটি ইউনিক অ্যারে তৈরি করা: \`[...new Set(tags)]\`।

### উত্তম অনুশীলন (Best Practice)
ইউনিক ডাটা রাখতে ও অত্যন্ত ফাস্ট কোনো ভ্যালুর উপস্থিতি চেক করতে \`Set\` ব্যবহার করুন। ইনডেক্স পজিশন দিয়ে কাজ করতে এবং সিকোয়েন্স বজায় রাখতে \`Array\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
লুপের ভেতর ডুপ্লিকেট এড়াতে \`Array.includes()\` ব্যবহার করা, যা অ্যালগরিদমকে অত্যন্ত ধীরগতির (\`O(N^2)\`) করে তোলে। এ ক্ষেত্রে \`Set\` ব্যবহার করা উচিত।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Set এ ইউনিকনেস
const mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set(3) {1, 2, 3} (ডুপ্লিকেট ২ মুছে গেছে!)

// ফাস্ট লুকআপ
console.log(mySet.has(2)); // true (O(1) জটিলতা)

// অ্যারে থেকে ডুপ্লিকেট রিমুভ
const numbers = [1, 5, 1, 3, 5, 8];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 5, 3, 8]
\`\`\``
  },
  {
    id: 'javascript-47',
    title: 'Explain WeakMap vs Map in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Map', 'WeakMap', 'Memory'],
    enAnswer: 'WeakMap keys must be objects, and references to those keys are held weakly, allowing them to be garbage collected if no other references exist. Map keys can be any type and prevent garbage collection.',
    bnAnswer: 'WeakMap-এর কী-সমূহ অবশ্যই অবজেক্ট হতে হবে এবং কী-গুলোর রেফারেন্স দুর্বল (weakly) থাকে, যাতে অবজেক্টের অন্য রেফারেন্স না থাকলে তা গার্বেজ কালেকশনে চলে যায়।',
    enExplanation: `### Explanation
- **Key Constraints**: \`Map\` keys can be primitives or objects. \`WeakMap\` keys **must be objects** (or registered symbols).
- **Garbage Collection (GC)**:
  - In a \`Map\`, the map keeps a strong reference to the key object. The key object cannot be garbage collected even if all other variables point to null.
  - In a \`WeakMap\`, the reference is weak. If the key object has no other active references in the application, the garbage collector automatically deletes it and frees memory.
- **Iteration**: \`WeakMap\` cannot be iterated over and has no \`.size\` or \`.keys()\` methods, as the GC schedule is non-deterministic.

### Real-World Example
Storing metadata about DOM nodes. If you use a \`WeakMap\` to store click logs for DOM nodes, when the DOM nodes are removed from the page, they are automatically cleaned out of the \`WeakMap\` without manual deletion.

### Best Practice
Use \`WeakMap\` when mapping metadata, configurations, or private states to objects whose lifecycles you do not control.

### Common Mistakes
Trying to use a string as a key in a WeakMap, e.g., \`myWeakMap.set("id", 10)\`. This throws an immediate type error.

### Code Example
\`\`\`javascript
// Map maintains strong reference (no GC)
let user = { name: "Rohit" };
const userMap = new Map();
userMap.set(user, "metadata");

user = null; // Detached reference
// The object { name: "Rohit" } is STILL kept alive in userMap!

// WeakMap allows GC
let guest = { name: "Sunny" };
const guestWeakMap = new WeakMap();
guestWeakMap.set(guest, "metadata");

guest = null; // Detached reference
// The object { name: "Sunny" } is automatically swept from guestWeakMap on next GC run!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **কী এর সীমাবদ্ধতা**: \`Map\` এর কী প্রিমিটিভ বা অবজেক্ট যেকোনো টাইপ হতে পারে। \`WeakMap\` এর কী **অবশ্যই অবজেক্ট হতে হবে**।
- **গার্বেজ কালেকশন (GC)**:
  - \`Map\` কী-অবজেক্টের ওপর স্ট্রং রেফারেন্স ধরে রাখে। ম্যাপ নিজে খালি না করা পর্যন্ত ওই অবজেক্ট মেমরি থেকে রিমুভ হতে পারে না।
  - \`WeakMap\` দুর্বল বা উইক রেফারেন্স ধরে রাখে। কী-অবজেক্টটির মূল ভ্যারিয়েবল যদি ডিলিট বা \`null\` করে দেওয়া হয়, তবে গার্বেজ কালেক্টর অবজেক্টটিসহ উইকম্যাপ থেকে তার এন্ট্রি স্বয়ংক্রিয়ভাবে মুছে দেয়।
- **ইটারেশন**: \`WeakMap\` ইটারেট করা যায় না এবং এর কোনো \`.size\` প্রোপার্টি বা \`.keys()\` মেথড নেই, কারণ গার্বেজ কালেকশন কখন রান হবে তা নির্দিষ্ট নয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
DOM নোডের মেটাডাটা সংরক্ষণ করা। আপনি যদি \`WeakMap\` এ DOM নোড কী হিসেবে ব্যবহার করেন, তবে পেজ থেকে নোড রিমুভ করার সাথে সাথে নোড মেমরি থেকে রিলিজ হয়ে যাবে, আপনাকে ম্যানুয়ালি ম্যাপ থেকে ডিলিট করার কোড লিখতে হবে না।

### উত্তম অনুশীলন (Best Practice)
এমন কোনো অবজেক্টের সাথে ডাটা বাইন্ড করতে চাইলে যার লাইফসাইকেল আপনার কোড দিয়ে কন্ট্রোল হয় না, সেখানে মেমরি সেভ করতে \`WeakMap\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`WeakMap\` এ স্ট্রিংকে কী হিসেবে ব্যবহার করার চেষ্টা করা (যেমন: \`myWeakMap.set("id", 10)\`)। এটি সরাসরি টাইপ এরর দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Map স্ট্রং রেফারেন্স ধরে রাখে (GC হবে না)
let user = { name: "Rohit" };
const userMap = new Map();
userMap.set(user, "metadata");

user = null; // রেফারেন্স রিমুভ
// { name: "Rohit" } অবজেক্টটি এখনো userMap এর ভেতর সচল থাকবে!

// WeakMap অবজেক্ট রিলিজ করে দেয়
let guest = { name: "Sunny" };
const guestWeakMap = new WeakMap();
guestWeakMap.set(guest, "metadata");

guest = null; // রেফারেন্স রিমুভ
// { name: "Sunny" } অবজেক্টটি পরবর্তী GC রানে স্বয়ংক্রিয়ভাবে মুছে যাবে!
\`\`\``
  },
  {
    id: 'javascript-48',
    title: 'Explain WeakSet vs Set in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Set', 'WeakSet', 'Memory'],
    enAnswer: 'WeakSet holds weakly referenced objects only. Objects inside a WeakSet can be garbage collected if there are no other references to them, and it is not iterable.',
    bnAnswer: 'WeakSet কেবল দুর্বলভাবে রেফারেন্সড অবজেক্ট সংরক্ষণ করতে পারে। অবজেক্টের অন্য রেফারেন্স না থাকলে তা গার্বেজ কালেকশনে চলে যায় এবং এটি ইটারেট করা যায় না।',
    enExplanation: `### Explanation
- **Value Constraints**: \`Set\` can store any values. \`WeakSet\` **can only store objects**.
- **Garbage Collection**: If an object stored in a \`WeakSet\` has no other references pointing to it, the browser clears it from memory automatically.
- **Use Cases**: Tagging objects as marked or validated without preventing them from being cleaned up by GC.
- **Iteration**: \`WeakSet\` cannot be looped over (no \`forEach\`, no \`.size\`).

### Real-World Example
Marking active API requests. You can add active fetch objects to a \`WeakSet\`. Once the fetch completes and is discarded, the garbage collector sweeps it out of the \`WeakSet\` automatically, preventing memory bloat.

### Best Practice
Use \`WeakSet\` to track temporary object states, markers, or authorization statuses of active class instances dynamically.

### Common Mistakes
Trying to add primitives to a WeakSet, like \`myWeakSet.add(5)\` or \`myWeakSet.add("user")\`. This will throw a TypeError.

### Code Example
\`\`\`javascript
const activeRequests = new WeakSet();

let reqA = { url: "/users" };
let reqB = { url: "/posts" };

activeRequests.add(reqA);
activeRequests.add(reqB);

console.log(activeRequests.has(reqA)); // true

// Simulating request completion and garbage collection
reqA = null; // Reference is removed
// reqA is now eligible for GC and will be automatically cleared from activeRequests
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ভ্যালু সীমাবদ্ধতা**: \`Set\` যেকোনো টাইপের ডাটা স্টোর করতে পারে। \`WeakSet\` **কেবল অবজেক্ট স্টোর করতে পারে**।
- **গার্বেজ কালেকশন**: \`WeakSet\`-এ থাকা অবজেক্টের অন্য কোনো রেফারেন্স অ্যাপে না থাকলে গার্বেজ কালেক্টর তা স্বয়ংক্রিয়ভাবে মেমরি থেকে ডি-অ্যালোকেট করে দেয়।
- **ব্যবহার**: কোনো অবজেক্ট প্রসেসড বা ট্র্যাকড হয়েছে কিনা তার মার্কিং ট্যাগ যুক্ত করা, যাতে গার্বেজ কালেকশনে বাধা না আসে।
- **ইটারেশন**: \`WeakSet\` এর ওপর লুপ চালানো যায় না (কোনো \`forEach\`, \`keys()\` বা \`.size\` নেই)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
চলমান এপিআই রিকোয়েস্ট ট্র্যাকিং। রিকোয়েস্ট অবজেক্টকে \`WeakSet\` এ যুক্ত করা। রিকোয়েস্ট সফল হয়ে অবজেক্টটি বন্ধ হয়ে গেলে, কোড ক্লিনআপ ছাড়াই গার্বেজ কালেক্টর একে ম্যাপ থেকে স্বয়ংক্রিয়ভাবে মুছে ফেলে।

### উত্তম অনুশীলন (Best Practice)
টেম্পোরারি অবজেক্ট মার্কার বা অবজেক্টের অথরাইজেশন চেক ট্র্যাক করতে \`WeakSet\` ব্যবহার করুন যাতে মেমরি খালি থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`WeakSet\`-এ প্রিমিটিভ ভ্যারিয়েবল (যেমন: নম্বর বা স্ট্রিং) যুক্ত করার চেষ্টা করা (যেমন: \`myWeakSet.add(5)\`)। এটি TypeError তৈরি করবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const activeRequests = new WeakSet();

let reqA = { url: "/users" };
let reqB = { url: "/posts" };

activeRequests.add(reqA);
activeRequests.add(reqB);

console.log(activeRequests.has(reqA)); // true

// রিকোয়েস্ট সম্পন্ন ও অবজেক্ট রিলিজ করা
reqA = null; // রেফারেন্স ডিলিট হলো
// reqA এখন অটোমেটিক্যালি activeRequests থেকে মুছে যাবে
\`\`\``
  },
  {
    id: 'javascript-49',
    title: 'Explain Shallow Copy vs Deep Copy in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Cloning', 'Shallow Copy', 'Deep Copy'],
    enAnswer: 'Shallow Copy duplicates the top-level structure of an object but shares references to nested objects. Deep Copy duplicates all levels recursively, sharing no references.',
    bnAnswer: 'Shallow Copy অবজেক্টের কেবল প্রথম লেভেলের প্রোপার্টি কপি করে কিন্তু নেস্টেড অবজেক্টের রেফারেন্স শেয়ার করে। Deep Copy রিকার্সিভলি সব লেভেল কপি করে।',
    enExplanation: `### Explanation
Understanding copy depth prevents unexpected mutation side-effects:
- **Shallow Copy**: Copying properties using spread \`{...obj}\` or \`Object.assign()\`. If a property is a nested object, only the pointer is copied. Modifying a nested field affects the original object.
- **Deep Copy**: Creating a completely independent replica.
  - *Legacy*: \`JSON.parse(JSON.stringify(obj))\` (Fails on Dates, RegExps, Functions, and undefined values).
  - *Modern*: \`structuredClone(obj)\` (Native standard browser API supporting circular references and advanced types).

### Real-World Example
Cloning app configurations state in a React context. If you perform a shallow copy and mutate a nested preference setting like \`user.preferences.theme = "light"\`, it will mutate the original state directly, bypassing state validation flows.

### Best Practice
For flat objects, use spread syntax \`...\`. For deeply nested objects containing data primitives/arrays, use the native \`structuredClone()\` API.

### Common Mistakes
Using \`JSON.parse(JSON.stringify())\` on objects containing \`Date\` instances. The date gets parsed as a string, losing the prototype methods.

### Code Example
\`\`\`javascript
const original = {
  name: "Rohit",
  skills: ["JS", "TS"]
};

// 1. Shallow Copy (Spread)
const shallow = { ...original };
shallow.skills.push("React");
console.log(original.skills); // ["JS", "TS", "React"] (Mutated due to shared reference!)

// 2. Deep Copy (Modern structuredClone)
const deep = structuredClone(original);
deep.skills.push("Node");
console.log(original.skills); // ["JS", "TS", "React"] (Original is safe and decoupled!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অবজেক্ট ডুপ্লিকেট করার সময় ডেপথ বা গভীরতা জানা প্রয়োজন:
- **শ্যালো কপি (Shallow Copy)**: স্প্রেড অপারেটর \`{...obj}\` বা \`Object.assign()\` দিয়ে কপি করা। অবজেক্টের ভেতর কোনো নেস্টেড অবজেক্ট থাকলে কেবল তার মেমরি অ্যাড্রেসটি কপি হয়, ফলে চাইল্ড ফিল্ড মিউটেট করলে মেইন অবজেক্টও বদলে যায়।
- **ডিপ কপি (Deep Copy)**: সম্পূর্ণ স্বাধীন আরেকটি রেপ্লিকা তৈরি করা।
  - *পুরোনো পদ্ধতি*: \`JSON.parse(JSON.stringify(obj))\` (এটি ডেট, রেগুলার এক্সপ্রেশন বা ফাংশন থাকলে কাজ করে না)।
  - *আধুনিক পদ্ধতি*: \`structuredClone(obj)\` (এটি ব্রাউজারের নেটিভ স্ট্যান্ডার্ড এপিআই যা প্রায় সব জটিল টাইপ ও সার্কুলার রেফারেন্স কপি করতে পারে)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React অ্যাপে স্টেট ক্লোন করা। আপনি যদি শ্যালো কপি করে নেস্টেড সেটিংস অবজেক্টের মান পরিবর্তন করেন (\`user.preferences.theme = "light"\`), তবে তা সরাসরি আসল স্টেটকে বদলে দিবে, যা রিঅ্যাক্টের ইমিউটেবিলিটি লজিক ব্রেক করে।

### উত্তম অনুশীলন (Best Practice)
ফ্ল্যাট অবজেক্টের জন্য স্প্রেড \`...\` ব্যবহার করুন। নেস্টেড ও জটিল স্ট্রাকচার ক্লোন করতে ব্রাউজারের নেটিভ \`structuredClone()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডেট (Date) অবজেক্ট সমৃদ্ধ ডাটাতে \`JSON.parse(JSON.stringify())\` ব্যবহার করা। এতে ডেটটি সাধারণ স্ট্রিং হয়ে যায়, ফলে ডেটের মেথডগুলো আর চলে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const original = {
  name: "Rohit",
  skills: ["JS", "TS"]
};

// ১. Shallow Copy (স্প্রেড অপারেটর)
const shallow = { ...original };
shallow.skills.push("React");
console.log(original.skills); // ["JS", "TS", "React"] (মূল অবজেক্টও পরিবর্তিত হয়েছে!)

// ২. Deep Copy (নেটিভ structuredClone)
const deep = structuredClone(original);
deep.skills.push("Node");
console.log(original.skills); // ["JS", "TS", "React"] (মূল অবজেক্ট সম্পূর্ণ সুরক্ষিত!)
\`\`\``
  },
  {
    id: 'javascript-50',
    title: 'Explain the ES6 Class syntax and inheritance (extends, super).',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'ES6 Classes', 'OOP', 'Inheritance'],
    enAnswer: 'ES6 Classes provide a clean syntax to define objects and inheritance. extends establishes a prototype link, and super invokes the parent class constructor and methods.',
    bnAnswer: 'ES6 Classes অবজেক্ট ও ইনহেরিটেন্স ডিফাইন করার রিডিবল সিনট্যাক্স দেয়। extends প্রোটোটাইপ লিঙ্ক গড়ায় এবং super প্যারেন্ট ক্লাসের কন্সট্রাক্টর ও মেথড কল করে।',
    enExplanation: `### Explanation
ES6 classes are syntactic sugar over standard prototype inheritance:
- **\`extends\`**: Configures the prototype chain of both the constructor functions and their prototype objects: \`ChildClass.__proto__ === ParentClass\`.
- **\`super()\`**: Calls the parent constructor. In derived classes, you *must* call \`super()\` before accessing \`this\`, or else the compiler throws a ReferenceError.
- **\`super.method()\`**: Invokes methods defined on the parent class.

### Real-World Example
Building custom components or extendable controller nodes in backend systems (like extending a base \`ApiController\` to build a \`UserController\` sharing auth methods).

### Best Practice
Keep class structures lean. If you have deep hierarchies (more than 3 levels of extends), consider composition over inheritance to avoid tight code coupling.

### Common Mistakes
Forgetting to pass required parameters to \`super()\`, which prevents the parent class constructor from initializing its state correctly.

### Code Example
\`\`\`javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  getDetails() {
    return \`\${this.name} earns \${this.salary}\`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Must be called before referencing 'this'
    this.department = department;
  }
  
  // Method overriding
  getDetails() {
    return \`\${super.getDetails()} in \${this.department}\`; // Calling parent method
  }
}

const manager = new Manager("Rohit", 5000, "Engineering");
console.log(manager.getDetails()); // "Rohit earns 5000 in Engineering"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ES6 ক্লাস প্রোটোটাইপ ইনহেরিটেন্সের ওপর একটি পরিচ্ছন্ন রিডিবল লেয়ার হিসেবে কাজ করে:
- **\`extends\`**: প্যারেন্ট ও চাইল্ড ক্লাসের প্রোটোটাইপ চেইন যুক্ত করে দেয়: \`ChildClass.__proto__ === ParentClass\`।
- **\`super()\`**: প্যারেন্ট ক্লাসের কন্সট্রাক্টর রান করায়। চাইল্ড ক্লাসের ভেতর \`this\` ব্যবহারের পূর্বে অবশ্যই \`super()\` কল করতে হবে, অন্যথায় ReferenceError দিবে।
- **\`super.method()\`**: চাইল্ড মেথডের ভেতর থেকে প্যারেন্ট ক্লাসের কোনো মেথড ট্রিগার করতে এটি ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ব্যাকএন্ড সার্ভারে কাস্টম এপিআই কন্ট্রোলার ডিজাইন করা। একটি বেস \`ApiController\` ক্লাস লিখে তাকে এক্সটেন্ড করে \`UserController\` তৈরি করা, যাতে কলার প্যারেন্টের সিকিউরিটি মেথডগুলো সরাসরি চাইল্ডে শেয়ার হয়।

### উত্তম অনুশীলন (Best Practice)
ক্লাস হায়ারার্কি বেশি বড় করবেন না (৩ লেভেলের বেশি extends এড়িয়ে চলুন)। টাইট-কপলিং এড়াতে ইনহেরিটেন্সের চেয়ে অবজেক্ট কম্পোজিশনকে বেশি প্রাধান্য দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`super()\` এ প্যারামিটার পাস করতে ভুলে যাওয়া, যার ফলে প্যারেন্ট ক্লাসের কন্সট্রাক্টরের প্রোপার্টিগুলো সঠিক মান নিয়ে তৈরি হতে পারে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  getDetails() {
    return \`\${this.name} earns \${this.salary}\`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // 'this' ব্যবহারের পূর্বে অবশ্যই কল করতে হবে
    this.department = department;
  }
  
  // মেথড ওভাররাইডিং
  getDetails() {
    return \`\${super.getDetails()} in \${this.department}\`; // প্যারেন্ট মেথড কল করা হচ্ছে
  }
}

const manager = new Manager("Rohit", 5000, "Engineering");
console.log(manager.getDetails()); // "Rohit earns 5000 in Engineering"
\`\`\``
  },
  {
    id: 'javascript-51',
    title: 'Explain Private Class Fields (#) and Static attributes in ES Classes.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'ES6 Classes', 'Private Fields', 'Static'],
    enAnswer: 'Private fields (#) restrict property access strictly inside the class block. Static attributes are properties of the class itself, not its instances.',
    bnAnswer: 'Private fields (#) ক্লাসের ভেতরের প্রোপার্টির অ্যাক্সেস কেবল ক্লাস ব্লকেই সীমাবদ্ধ রাখে। Static attributes ক্লাসের নিজস্ব প্রোপার্টি যা ইনস্ট্যান্সের বাইরে থাকে।',
    enExplanation: `### Explanation
- **Private Fields (\`#prefix\` syntax)**: Declared using a hash \`#\` symbol (e.g. \`#balance\`). Attempts to access or modify private fields from outside the class triggers a syntax error before execution. This is enforced by JS runtime, not just compiler stubs.
- **Static Attributes**: Declared using the \`static\` keyword. They belong directly to the class constructor function itself. They cannot be accessed through instantiated objects.

### Real-World Example
Encapsulating credentials. An \`ApiClient\` class stores the API secret key as a private property \`#secret\`, exposing only a public \`fetch\` method, preventing keys from leaking.

### Best Practice
Use private fields for internal configurations and security tokens. Use static properties for shared utility constants.

### Common Mistakes
Trying to access static methods on instance objects (e.g. \`new MathUtils().sum()\` will fail if \`sum\` is a static method; invoke it using \`MathUtils.sum()\`).

### Code Example
\`\`\`javascript
class BankAccount {
  // Static Property (utility constant)
  static bankName = "Federal Bank";
  
  // Private Property
  #balance = 0;
  
  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }
  
  getBalance() {
    return this.#balance; // Accessing private property inside class
  }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

console.log(BankAccount.bankName); // "Federal Bank"
// console.log(account.bankName); // undefined (cannot access static properties on instances)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **প্রাইভেট ফিল্ডস (\`#prefix\` সিনট্যাক্স)**: ভ্যারিয়েবলের নামের শুরুতে হ্যাশ \`#\` প্রতীক বসিয়ে তৈরি করতে হয়। ক্লাসের বাইরে থেকে এটি অ্যাক্সেস বা মডিফাই করতে গেলে সরাসরি সিনট্যাক্স এরর দেখায়। এটি কেবল টাইপস্ক্রিপ্টের মতো কম্পাইল-টাইমে নয়, জাভা স্ক্রিপ্ট রানটাইমেও সুরক্ষিত থাকে।
- **স্ট্যাটিক অ্যাট্রিবিউটস**: \`static\` কি-ওয়ার্ড দিয়ে তৈরি করা হয়। এগুলো সরাসরি ক্লাস কনস্ট্রাক্টরের অবজেক্টের সাথে যুক্ত থাকে, তাই তৈরি করা অবজেক্ট বা ইনস্ট্যান্স থেকে এগুলো রিড করা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ক্রিডেনশিয়াল নিরাপদ রাখা। একটি \`ApiClient\` ক্লাস তার এপিআই সিক্রেট কি-টিকে প্রাইভেট প্রোপার্টি \`#secret\` হিসেবে স্টোর করে কেবল পাবলিক মেথড এক্সপোর্ট করে, যাতে ভুলবশত সিক্রেট কি বাইরে ফাঁস না হয়ে যায়।

### উত্তম অনুশীলন (Best Practice)
ক্লাসের ভেতরের সংবেদনশীল কনফিগারেশনের জন্য প্রাইভেট ফিল্ড এবং ক্লাসের কমন কনস্ট্যান্টস বা হেল্পারদের জন্য স্ট্যাটিক প্রোপার্টি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনস্ট্যান্স অবজেক্ট দিয়ে স্ট্যাটিক মেথড কল করার চেষ্টা করা (যেমন: \`new MathUtils().sum()\` ফেইল করবে যদি \`sum\` স্ট্যাটিক হয়; একে সরাসরি \`MathUtils.sum()\` দিয়ে কল করতে হবে)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
class BankAccount {
  // Static প্রোপার্টি
  static bankName = "Federal Bank";
  
  // Private প্রোপার্টি
  #balance = 0;
  
  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }
  
  getBalance() {
    return this.#balance; // ক্লাসের মেথডে প্রাইভেট ডাটা অ্যাক্সেস
  }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError দিবে

console.log(BankAccount.bankName); // "Federal Bank"
// console.log(account.bankName); // undefined (ইনস্ট্যান্স থেকে অ্যাক্সেস নেই)
\`\`\``
  },
  {
    id: 'javascript-52',
    title: 'Explain Generator Functions and Iterators in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Generators', 'Iterators', 'Async Control'],
    enAnswer: 'Generator functions (function*) return a Generator object that conforms to both the iterable and iterator protocols, yielding values sequentially using yield.',
    bnAnswer: 'Generator ফাংশন (function*) একটি জেনারেটর অবজেক্ট রিটার্ন করে যা ইটারেটর প্রোটোকল মেনে চলে এবং yield ব্যবহারের মাধ্যমে ক্রমান্বয়ে ভ্যালু জেনারেট করে।',
    enExplanation: `### Explanation
- **Generators**: Declared using the \`function*\` syntax. They do not run their code immediately when invoked; instead, they return a Generator Iterator.
- **\`yield\`**: Pauses the execution of the generator and returns the yielded value. When \`.next()\` is called on the iterator, execution resumes until it hits the next yield.
- **Iterator Protocol**: The returned object has a \`.next()\` method returning \`{ value: any, done: boolean }\`. When \`done: true\` is reached, the generator completes.

### Real-World Example
Handling massive lists or streams (like reading database rows chunk by chunk). Generics generate values lazily on-demand, preventing loading millions of items in system memory at once.

### Best Practice
Use generator functions when implementing lazy evaluation streams, custom object iterators, or infinite sequence generators.

### Common Mistakes
Calling the generator function expecting a value. E.g. \`const val = myGen().value;\` is undefined because \`myGen()\` returns the iterator, not the value. You must call \`.next()\` to execute.

### Code Example
\`\`\`javascript
// Generator Function
function* numberGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const iterator = numberGenerator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: true }

// Generators are Iterable (work with for...of loops)
function* idCreator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const ids = idCreator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **জেনারেটরস (Generators)**: \`function*\` সিনট্যাক্স দিয়ে তৈরি করতে হয়। এগুলো কল করার সাথে সাথে কোড রান করে না; বরং একটি জেনারেটর ইটারেটর অবজেক্ট দেয়।
- **\`yield\`**: জেনারেটর ফাংশনের এক্সিকিউশন পজ করে এবং ইল্ড করা ভ্যালুটি রিটার্ন করে। পরবর্তীতে ইটারেটরের ওপর \`.next()\` কল করা হলে এটি পুনরায় সচল হয়ে পরবর্তী yield পর্যন্ত চলে।
- **ইটারেটর প্রোটোকল**: রিটার্ন হওয়া অবজেক্টটির একটি \`.next()\` মেথড থাকে যা \`{ value: any, done: boolean }\` ডাটা ফরম্যাট দেয়। \`done: true\` হলে বুঝা যায় ইটারেশন শেষ।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ থেকে লাখ লাখ রো (rows) একসাথে মেমরিতে লোড না করে, একটি জেনারেটর দিয়ে অলস বা লেজি (lazy) মেথডে প্রতি ক্লিকে একটি করে রো রিড করা, যা সার্ভার র‍্যাম সেভ করে।

### উত্তম অনুশীলন (Best Practice)
লেজি ইভালুয়েশন স্ট্রিম, কাস্টম অবজেক্ট ইটারেশন বা ইনফিনিট লুপ সিকোয়েন্স সিকিউর রাখতে জেনারেটর ফাংশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
জেনারেটর ফাংশন কল করেই সরাসরি রিটার্ন ভ্যালু আশা করা। \`myGen().value\` লিখলে undefined দেখাবে, কারণ ভ্যালু রিড করতে আগে ইটারেটরের ওপর \`.next()\` কল করা বাধ্যতামূলক।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// জেনারেটর ফাংশন
function* numberGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const iterator = numberGenerator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: true }

// জেনারেটর দিয়ে ইনফিনিট আইডি জেনারেটর
function* idCreator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const ids = idCreator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
\`\`\``
  },
  {
    id: 'javascript-53',
    title: 'Explain the Symbol primitive and well-known symbols.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Symbols', 'Data Types', 'Metaprogramming'],
    enAnswer: 'Symbol is a unique and immutable primitive data type. Well-known symbols (like Symbol.iterator) allow overriding default language behaviors of objects.',
    bnAnswer: 'Symbol হলো একটি ইউনিক এবং ইমিউটেবল প্রিমিটিভ ডেটা টাইপ। Well-known symbols অবজেক্টের ডিফল্ট ল্যাঙ্গুয়েজ বিহেভিয়ার ওভাররাইড করতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
- **Unique**: Every symbol created using \`Symbol()\` yields a completely unique identifier.
- **Hidden Keys**: Symbols are ignored in standard \`for...in\` loops and \`Object.keys()\` calls, providing a form of weak encapsulation.
- **Well-known Symbols**: Built-in constants that define internal behaviors:
  - \`Symbol.iterator\`: Defines how an object is iterated in \`for...of\` loops.
  - \`Symbol.toStringTag\`: Defines the output label when calling \`Object.prototype.toString.call(obj)\`.

### Real-World Example
Adding metadata properties to user-defined objects in a library. Using symbol keys guarantees the metadata keys will never clash with properties that consumers define on the object.

### Best Practice
Use Symbols to create private property registries, or implement \`Symbol.iterator\` to make custom data objects directly iterable.

### Common Mistakes
Trying to use \`new Symbol()\` as a constructor. Symbols are primitive values, calling it with \`new\` throws a TypeError.

### Code Example
\`\`\`javascript
const sym = Symbol("description");

const obj = {
  [sym]: "private data",
  publicData: "visible"
};

// Hidden from loops
console.log(Object.keys(obj)); // ["publicData"] (symbol key is ignored!)
console.log(obj[sym]); // "private data" (retrievable if symbol is referenced)

// Custom Iterator using Symbol.iterator
const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: () => {
        return current <= this.end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num); // Prints 1, then 2, then 3
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ইউনিকনেস**: \`Symbol()\` দিয়ে তৈরি প্রতিটি সিম্বল সম্পূর্ণ ইউনিক ভ্যালু প্রোভাইড করে।
- **লুকানো কী (Hidden Keys)**: সিম্বল কীগুলো সাধারণ \`for...in\` লুপ বা \`Object.keys()\` এ স্কিপ হয়ে যায়, যা এক ধরনের প্রাইভেট প্রোপার্টি ডেটা লেয়ার দেয়।
- **Well-known Symbols**: জাভাস্ক্রিপ্টের অভ্যন্তরীণ আচরণ কাস্টমাইজ করতে কিছু প্রি-ডিফাইন্ড সিম্বল রয়েছে:
  - \`Symbol.iterator\`: কোনো অবজেক্টের ওপর \`for...of\` লুপ চালানোর আচরণ ডিফাইন করে।
  - \`Symbol.toStringTag\`: অবজেক্ট স্ট্রিং এ কনভার্ট করার সময় আউটপুট ট্যাগ নির্ধারণ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইব্রেরি তৈরির সময় ইউজারের অবজেক্টে কাস্টম মেটাডাটা প্রোপার্টি যুক্ত করা। সিম্বল কি ব্যবহার করলে ইউজারের ডিফাইন করা প্রোপার্টির সাথে নামের কোনো কনফ্লিক্ট তৈরি হয় না।

### উত্তম অনুশীলন (Best Practice)
ক্লাস বা মডিউলে কনফ্লিক্ট এড়াতে সিম্বল কি এবং কাস্টম ডাটা কালেকশন অবজেক্টকে লুপে চালানোর যোগ্য করতে \`Symbol.iterator\` মেথড ইমপ্লিমেন্ট করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`new Symbol()\` ব্যবহার করার চেষ্টা করা। সিম্বল কোনো অবজেক্ট নয়, এটি প্রিমিটিভ ভ্যালু। \`new\` দিয়ে কল করলে TypeError দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const sym = Symbol("description");

const obj = {
  [sym]: "private data",
  publicData: "visible"
};

// লুপে সিম্বল হাইড থাকে
console.log(Object.keys(obj)); // ["publicData"] (সিম্বল কী বাদ পড়েছে!)
console.log(obj[sym]); // "private data" (সিম্বল কি দিয়ে রিড করা যাবে)

// Symbol.iterator ব্যবহার করে কাস্টম ইটারেটর
const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: () => {
        return current <= this.end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num); // ১, ২, ৩ প্রিন্ট করবে
}
\`\`\``
  },
  {
    id: 'javascript-54',
    title: 'Explain ES Modules (ESM) vs CommonJS (CJS) in JavaScript.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Modules', 'ESM', 'CommonJS'],
    enAnswer: 'ES Modules (ESM) use import/export syntax and are parsed statically at compile time. CommonJS (CJS) uses require/module.exports and is executed dynamically at runtime.',
    bnAnswer: 'ES Modules (ESM) ইম্পোর্ট/এক্সপোর্ট সিনট্যাক্স ব্যবহার করে এবং কম্পাইল টাইমে স্ট্যাটিকভাবে পার্স হয়। CommonJS (CJS) ডাইনামিকালি রানটাইমে লোড হয়।',
    enExplanation: `### Explanation
- **CommonJS (CJS)**:
  - Standard in Node.js for years. Uses \`require()\` and \`module.exports\`.
  - Dynamic loading: You can call \`require()\` inside conditional blocks.
  - Synchronous loading: Blocks execution thread until file is fetched.
- **ES Modules (ESM)**:
  - Standard JavaScript spec since ES6. Uses \`import\` and \`export\`.
  - Static analysis: Parsed before code executes. Enables tree-shaking (removing unused exports).
  - Asynchronous loading: Allows top-level await and edge code resolutions.

### Real-World Example
Configuring package imports. When publishing an npm package, supplying both CJS and ESM build outputs ensures older Node engines can use \`require()\` while modern bundlers (like Vite) use \`import\` to tree-shake the bundle.

### Best Practice
Default to ES Modules in all modern frontend and backend projects to leverage optimal bundler features.

### Common Mistakes
Trying to use ESM \`import\` statements inside a CommonJS Node file without setting \`"type": "module"\` in \`package.json\`, which throws a syntax compilation error.

### Code Example
\`\`\`javascript
// CommonJS (Node.js Legacy)
// math.js
// module.exports = { add: (a, b) => a + b };
// app.js
// const { add } = require('./math');

// ES Modules (Modern Standard)
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';
console.log(add(5, 5));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **CommonJS (CJS)**:
  - দীর্ঘকাল ধরে Node.js-এর স্ট্যান্ডার্ড মডিউল সিস্টেম। এটি \`require()\` এবং \`module.exports\` ব্যবহার করে।
  - ডাইনামিক লোডিং: আপনি ইফ-কন্ডিশনের ভেতর বা ডাইনামিক পাথে \`require()\` করতে পারেন।
  - সিনক্রোনাস লোডিং: ফাইল সম্পূর্ণ রিসিভ না হওয়া পর্যন্ত প্রসেস ব্লক করে রাখে।
- **ES Modules (ESM)**:
  - ES6 থেকে প্রবর্তিত জাভাস্ক্রিপ্টের অফিসিয়াল গ্লোবাল মডিউল সিস্টেম। এটি \`import\` এবং \`export\` ব্যবহার করে।
  - স্ট্যাটিক অ্যানালিসিস: কোড রান হওয়ার আগে ইম্পোর্ট রেজলভ হয়। এর ফলে ট্রি-শেকিং (অব্যবহৃত কোড বাদ দেওয়া) সুবিধা পাওয়া যায়।
  - অ্যাসিনক্রোনাস লোডিং: টপ-লেভেল await সমর্থন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইব্রেরি পাবলিশ করা। প্রজেক্টে CJS এবং ESM উভয় আউটপুট এক্সপোর্ট দিলে পুরোনো নোড ভার্সনও কোড চালাতে পারে, আবার আধুনিক বান্ডলারগুলো (\`import\` ব্যবহার করে) অব্যবহৃত মেথড বাদ দিয়ে ছোট ফাইল তৈরি করতে পারে।

### উত্তম অনুশীলন (Best Practice)
সর্বোত্তম অপ্টিমাইজেশন সুবিধা পেতে নতুন ফ্রন্টএন্ড বা ব্যাকএন্ড প্রজেক্ট তৈরির সময় ডিফল্ট মডিউল সিস্টেম হিসেবে ES Modules ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`package.json\`-এ \`"type": "module"\` সেট না করেই সাধারণ নোড ফাইলে \`import\` লেখার চেষ্টা করা। এতে রানটাইম সিনট্যাক্স এরর দিবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// CommonJS (নোড ডট জেএস লিগ্যাসি)
// math.js ফাইলে:
// module.exports = { add: (a, b) => a + b };
// app.js ফাইলে:
// const { add } = require('./math');

// ES Modules (আধুনিক স্ট্যান্ডার্ড)
// math.js ফাইলে:
export const add = (a, b) => a + b;

// app.js ফাইলে:
import { add } from './math.js';
console.log(add(5, 5));
\`\`\``
  },
  {
    id: 'javascript-55',
    title: 'Explain Object.defineProperty and property descriptors in detail.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Objects', 'Property Descriptors', 'Metaprogramming'],
    enAnswer: 'Object.defineProperty configures or modifies specific object properties, defining flags like writable, enumerable, configurable, and getter/setter accessors.',
    bnAnswer: 'Object.defineProperty অবজেক্টের কাস্টম প্রোপার্টি তৈরি বা পরিবর্তন করতে এবং writable, enumerable, configurable, এবং গেটার/সেটার সেট করতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Property descriptors control how properties behave:
- **Data Descriptors**:
  - \`value\`: The actual property value.
  - \`writable\`: If \`false\`, the property value cannot be changed.
  - \`enumerable\`: If \`false\`, the property is hidden from loops (\`for...in\`, \`Object.keys()\`).
  - \`configurable\`: If \`false\`, the property cannot be deleted or have its descriptors modified.
- **Accessor Descriptors**: Instead of \`value\` and \`writable\`, you specify \`get\` and \`set\` functions.

### Real-World Example
Designing schema validation libraries. You can define a read-only \`id\` field on a model object by setting \`writable: false\` and \`configurable: false\`, ensuring database keys cannot be mutated or deleted.

### Best Practice
Use property descriptors when building frameworks or libraries to protect internal state keys from accidental manipulation by developers.

### Common Mistakes
Forgetting that properties added via \`Object.defineProperty\` default to \`false\` for \`writable\`, \`enumerable\`, and \`configurable\` (unlike normal properties which default to \`true\`).

### Code Example
\`\`\`javascript
const user = {};

Object.defineProperty(user, "id", {
  value: 8890,
  writable: false,     // Read-only
  enumerable: true,    // Shows in loops
  configurable: false  // Cannot delete or redefine
});

console.log(user.id); // 8890
// user.id = 9999; // Throws TypeError in strict mode, silently ignored in sloppy mode

// delete user.id; // Throws TypeError in strict mode
console.log(user.id); // Still 8890
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রোপার্টি ডেসক্রিপ্টর অবজেক্টের কীর আচরণ নিয়ন্ত্রণ করে:
- **ডাটা ডেসক্রিপ্টর (Data Descriptors)**:
  - \`value\`: প্রোপার্টির মান।
  - \`writable\`: এটি \`false\` হলে মান পরিবর্তন করা যাবে না।
  - \`enumerable\`: এটি \`false\` হলে লুপে (\`for...in\`, \`Object.keys()\`) কী-টি দেখা যাবে না।
  - \`configurable\`: এটি \`false\` হলে প্রোপার্টিটি ডিলিট বা তার ডেসক্রিপ্টরগুলো পুনরায় পরিবর্তন করা যাবে না।
- **অ্যাক্সেসর ডেসক্রিপ্টর (Accessor Descriptors)**: এখানে মানের পরিবর্তে \`get\` এবং \`set\` কাস্টম মেথড ডিফাইন করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ বা ভ্যালিডেশন লাইব্রেরি ডিজাইন করা। মডেল অবজেক্টের \`id\` ফিল্ডের ডেসক্রিপ্টর \`writable: false\` এবং \`configurable: false\` করে রাখা, যাতে কোনো ডেভেলপার অসাবধানতাবশত প্রাইমারি কি পরিবর্তন বা ডিলেট না করতে পারে।

### উত্তম অনুশীলন (Best Practice)
ফ্রেমওয়ার্ক বা প্লাগইন লাইব্রেরি তৈরির সময় অবজেক্টের বিশেষ অভ্যন্তরীণ মেটাডাটা সুরক্ষিত রাখতে কাস্টম প্রোপার্টি ডেসক্রিপ্টর ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে \`Object.defineProperty\` দিয়ে প্রোপার্টি তৈরি করলে তার \`writable\`, \`enumerable\` এবং \`configurable\` এর ডিফল্ট মান \`false\` থাকে (সাধারণ অবজেক্টে যা \`true\` থাকে)।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = {};

Object.defineProperty(user, "id", {
  value: 8890,
  writable: false,     // রিড-অনলি
  enumerable: true,    // লুপে দেখাবে
  configurable: false  // ডিলিট করা যাবে না
});

console.log(user.id); // 8890
// user.id = 9999; // strict মোডে TypeError দিবে

// delete user.id; // strict মোডে TypeError দিবে
console.log(user.id); // ৮০৯০ ই থাকবে
\`\`\``
  },
  {
    id: 'javascript-56',
    title: 'Explain Getter and Setter methods in Objects and Classes.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Objects', 'Getters', 'Setters'],
    enAnswer: 'Getters (get) and Setters (set) bind object properties to functions, executing custom logic dynamically whenever those properties are read or written.',
    bnAnswer: 'Getters (get) এবং Setters (set) অবজেক্ট প্রোপার্টির সাথে কাস্টম ফাংশন বাইন্ড করে, যাতে প্রোপার্টি রিড বা রাইট করার সময় কাস্টম লজিক রান করানো যায়।',
    enExplanation: `### Explanation
Getters and setters act as wrappers around object property access:
- **Getter (\`get\` syntax)**: Executes when the property is read (e.g. \`console.log(obj.fullName)\`). Must return a value.
- **Setter (\`set\` syntax)**: Executes when a value is written to the property (e.g. \`obj.fullName = "New Name"\`). Takes the new value as a parameter.
- They allow validating values before assignment and lazy computation of derived properties.

### Real-World Example
A shopping cart object. Setting a setter for \`discount\` verifies that the value is between \`0\` and \`100\` before applying, throwing errors on invalid inputs.

### Best Practice
Use getters for computed properties (like combining \`firstName\` and \`lastName\`) to avoid storing stale duplicate values in your state.

### Common Mistakes
Accidentally causing infinite recursion. Inside a setter for \`name\`, writing \`this.name = val\` triggers the setter again! Store the value in a backing field like \`this._name\` instead.

### Code Example
\`\`\`javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Computed Getter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  // Setter with validation
  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value; // Backing field used to prevent infinite recursion
  }
}

const u = new User("Rohit", "Sunny");
console.log(u.fullName); // "Rohit Sunny" (accessed as property, not function call!)
u.age = 25; // runs setter
// u.age = -5; // Throws Error: Age cannot be negative
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
গেটার এবং সেটার অবজেক্ট প্রোপার্টির ওপর এক ধরনের ডাইনামিক ফিল্টার হিসেবে কাজ করে:
- **গেটার (\`get\` সিনট্যাক্স)**: যখন প্রোপার্টিটি রিড বা পড়া হয় তখন এটি রান করে। এটি অবশ্যই একটি ভ্যালু রিটার্ন করবে।
- **সেটার (\`set\` সিনট্যাক্স)**: যখন প্রোপার্টিতে নতুন মান রাইট বা অ্যাসাইন করা হয় তখন এটি রান করে। এটি ইনপুট হিসেবে নতুন মানটি গ্রহণ করে।
- এগুলো ব্যবহার করে প্রোপার্টি অ্যাসাইনের সময় ডাটা ভ্যালিডেশন এবং ডাইনামিক মান জেনারেট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি শপিং কার্ট অবজেক্ট। ডিসকাউন্ট পার্সেন্টেজ সেটের জন্য একটি সেটার মেথড ব্যবহার করে ইনপুট চেক করা যে মানটি ০ থেকে ১০০ এর ভেতর আছে কিনা, অন্যথায় এরর থ্রো করা।

### উত্তম অনুশীলন (Best Practice)
কম্পিউটেড প্রোপার্টির জন্য গেটার ব্যবহার করুন (যেমন \`firstName\` ও \`lastName\` মিলে ফুলনেম রিটার্ন করা), এতে মেমরিতে ডুপ্লিকেট মান জমা হয় না।

### সাধারণ ভুলসমূহ (Common Mistakes)
অসাবধানতাবশত ইনফিনিট রিকার্সন (অসীম লুপ) তৈরি করা। \`name\` সেটারের ভেতর \`this.name = val\` লিখলে সেটারটি বারবার নিজেকেই কল করতে থাকে। সমাধানের জন্য ডাটা ব্যাকআপ ফিল্ড যেমন \`this._name\` এ রাখতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // কম্পিউটেড গেটার
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  // ভ্যালিডেশন সহ সেটার
  set age(value) {
    if (value < 0) {
      throw new Error("বয়স ঋণাত্মক হতে পারে না");
    }
    this._age = value; // ইনফিনিট লুপ এড়াতে ব্যাকআপ ফিল্ড ব্যবহার করা হয়েছে
  }
}

const u = new User("Rohit", "Sunny");
console.log(u.fullName); // "Rohit Sunny" (ফাংশন কলের মতো ব্র্যাকেট ছাড়াই প্রোপার্টি হিসেবে অ্যাক্সেস)
u.age = 25; // সেটার রান করবে
// u.age = -5; // এরর দিবে: বয়স ঋণাত্মক হতে পারে না
\`\`\``
  },
  {
    id: 'javascript-57',
    title: 'How do you create and dispatch Custom Events in JavaScript?',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'DOM Events', 'Custom Events', 'Browser API'],
    enAnswer: 'Custom Events are created using the CustomEvent constructor and triggered on DOM elements using the dispatchEvent method, allowing data transfer via the detail option.',
    bnAnswer: 'Custom Events তৈরি করতে CustomEvent কন্সট্রাক্টর ব্যবহার করা হয় এবং dispatchEvent মেথড দিয়ে DOM এলিমেন্টে ফায়ার করা হয়। detail অপশন দিয়ে ডাটা পাস করা যায়।',
    enExplanation: `### Explanation
- **\`CustomEvent(eventName, options)\`**: Creates an event. The \`options\` object can include a nested \`detail\` property containing arbitrary data to pass. It can also configure \`bubbles: true\` and \`cancelable: true\`.
- **\`dispatchEvent(event)\`**: Dispatches the event on a target DOM node.
- **Listening**: Standard \`addEventListener(eventName, handler)\` captures the event, reading the passed payload from \`event.detail\`.

### Real-World Example
Decoupled component communication. If a dynamic audio player component completes a track, it can fire a custom \`"trackFinished"\` event on the global document window. Other components (like a playlist manager or user stats logger) listen for this event independently.

### Best Practice
Always store custom event names in a central string constant map to avoid spelling mistakes, and clean up active listeners when elements are destroyed.

### Common Mistakes
Forgetting to set \`bubbles: true\` in the event options. If \`bubbles\` is false, parent containers cannot intercept the custom event using event delegation.

### Code Example
\`\`\`javascript
const container = document.body;

// 1. Listen for the custom event
container.addEventListener("userStatusChange", (event) => {
  console.log("Status updated to:", event.detail.status);
  console.log("Triggered by user ID:", event.detail.userId);
});

// 2. Create the Custom Event with payload
const statusEvent = new CustomEvent("userStatusChange", {
  bubbles: true, // Allow event to bubble up
  detail: { status: "offline", userId: 9982 } // Custom data
});

// 3. Dispatch the event
container.dispatchEvent(statusEvent);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`CustomEvent(eventName, options)\`**: কাস্টম ইভেন্ট অবজেক্ট তৈরি করে। \`options\` এর ভেতর \`detail\` কি ব্যবহার করে যেকোনো কাস্টম ডাটা পে-লোড পাস করা যায় এবং \`bubbles: true\` দিয়ে ইভেন্ট বাবলিং সক্রিয় করা যায়।
- **\`dispatchEvent(event)\`**: টার্গেট DOM নোডের ওপর ইভেন্টটি ফায়ার বা ট্রিগার করে।
- **লিসেনিং**: ইভেন্ট রিসিভ করতে স্ট্যান্ডার্ড \`addEventListener\` ব্যবহার করা হয় এবং কলব্যাকের ভেতর \`event.detail\` থেকে ডাটা রিড করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কম্পোনেন্টগুলোর মধ্যে সংযোগ বিচ্ছিন্ন করে যোগাযোগ রক্ষা করা। একটি অডিও প্লেয়ার ট্র্যাক শেষ করলে গ্লোবাল উইন্ডোতে কাস্টম \`"trackFinished"\` ইভেন্ট ফায়ার করা। প্লেলিস্ট ম্যানেজার বা ইউজার লগ কম্পোনেন্টগুলো প্লেয়ারের সাথে সরাসরি যুক্ত না থেকেও ইভেন্টটি ক্যাচ করে নিজ নিজ লজিক চালাতে পারে।

### উত্তম অনুশীলন (Best Practice)
বানান ভুল এড়াতে কাস্টম ইভেন্টগুলোর নাম একটি সেন্ট্রাল অবজেক্ট ম্যাপে ধ্রুবক হিসেবে ডিফাইন করে রাখুন এবং লিসেনারগুলো কাজ শেষে ক্লিয়ার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইভেন্ট অপশনে \`bubbles: true\` দিতে ভুলে যাওয়া। এটি না দিলে ইভেন্টটি ওপরের প্যারেন্ট নোডগুলোতে বাবল আপ হবে না, ফলে ইভেন্ট ডেলিগেশন ফেইল করবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const container = document.body;

// ১. কাস্টম ইভেন্ট শোনার জন্য লিসেনার সেট করা
container.addEventListener("userStatusChange", (event) => {
  console.log("স্ট্যাটাস পরিবর্তন হয়েছে:", event.detail.status);
  console.log("ইউজার আইডি:", event.detail.userId);
});

// ২. ডাটা পে-লোড সহ কাস্টম ইভেন্ট তৈরি
const statusEvent = new CustomEvent("userStatusChange", {
  bubbles: true, // বাবলিং সুবিধা অন করা হলো
  detail: { status: "offline", userId: 9982 } // কাস্টম ডাটা
});

// ৩. ইভেন্ট ফায়ার করা
container.dispatchEvent(statusEvent);
\`\`\``
  },
  {
    id: 'javascript-58',
    title: 'Explain AbortController and how to cancel fetch requests.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Fetch API', 'AbortController', 'Asynchronous'],
    enAnswer: 'AbortController allows canceling asynchronous operations (like fetch requests or event listeners) dynamically using an AbortSignal.',
    bnAnswer: 'AbortController একটি AbortSignal ব্যবহারের মাধ্যমে অ্যাসিনক্রোনাস কাজ (যেমন fetch রিকোয়েস্ট বা ইভেন্ট লিসেনার) ডাইনামিকালি বাতিল করার সুবিধা দেয়।',
    enExplanation: `### Explanation
- **\`AbortController\`**: Instantiates a controller containing a \`.signal\` property and an \`.abort()\` method.
- **Linkage**: Pass the signal as an option inside the fetch request: \`fetch(url, { signal: controller.signal })\`.
- **Cancellation**: When \`controller.abort()\` is called, the fetch promise immediately rejects with an \`AbortError\`, stopping the network request and freeing browser resources.

### Real-World Example
Auto-suggest search inputs. If a user types \`"abc"\` rapidly, 3 search API fetches are triggered. If the first fetch resolves late, it can overwrite the latest search results. Using \`AbortController\` lets you cancel active previous requests on every keypress.

### Best Practice
Always handle the rejected promise when aborting. Check if \`error.name === "AbortError"\` to prevent displaying false error alerts to users.

### Common Mistakes
Trying to reuse the same \`AbortController\` instance after calling \`.abort()\`. You must instantiate a new controller for each new async operation cycle.

### Code Example
\`\`\`javascript
const controller = new AbortController();
const { signal } = controller;

async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/users/rohit", { signal });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch request successfully canceled!");
    } else {
      console.error("Fetch failed due to other reasons:", error);
    }
  }
}

fetchData();

// Cancel the fetch request after 50ms
setTimeout(() => {
  controller.abort();
}, 50);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`AbortController\`**: এটি একটি কন্সট্রাক্টর যা একটি \`.signal\` প্রোপার্টি এবং একটি \`.abort()\` মেথড প্রোভাইড করে।
- **সংযোগ বা লিঙ্ক করা**: ফেচ রিকোয়েস্ট অপশনে সিগন্যালটি পাস করা হয়: \`fetch(url, { signal: controller.signal })\`।
- **বাতিলকরণ**: যখন \`controller.abort()\` কল করা হয়, তখন ফেচ প্রমিজটি সাথে সাথে একটি \`AbortError\` দিয়ে রিজেক্ট হয়, যা ব্রাউজারের নেটওয়ার্ক ব্যান্ডউইথ ও প্রসেস বাচায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইভ টাইপিং সার্চ বার। ব্যবহারকারী দ্রুত টাইপ করলে ব্যাকগ্রাউন্ডে ৩-৪ টি রিকোয়েস্ট চলতে পারে। আগের রিকোয়েস্টগুলোর ডাটা দেরিতে এসে যদি নতুন ডাটাকে ওভাররাইট করা ব্লক করতে চান, তবে প্রতি নতুন কী-প্রেসে আগের রিকোয়েস্টটি অবোর্ট বা ক্যানসেল করা।

### উত্তম অনুশীলন (Best Practice)
ফেচ অবোর্ট করার সময় প্রমিজ রিজেকশন এরর চেক করার সময় \`error.name === "AbortError"\` চেক করে নিন, যাতে স্বাভাবিক ক্যান্সলেশনের জন্য ব্যবহারকারীকে ভুলবশত এরর অ্যালার্ট না দেখানো হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
একবার \`.abort()\` কল করার পর পুনরায় ওই একই \`AbortController\` দিয়ে নতুন রিকোয়েস্ট ক্যানসেল করতে চাওয়া। প্রতি নতুন রিকোয়েস্ট সাইকেলের জন্য নতুন কন্ট্রোলার অবজেক্ট তৈরি করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const controller = new AbortController();
const { signal } = controller;

async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/users/rohit", { signal });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("ফেচ রিকোয়েস্ট সফলভাবে বাতিল করা হয়েছে!");
    } else {
      console.error("অন্য কোনো কারণে ফেচ ফেইল হয়েছে:", error);
    }
  }
}

fetchData();

// ৫০ মিলি-সেকেন্ড পর রিকোয়েস্ট ক্যানসেল করা হচ্ছে
setTimeout(() => {
  controller.abort();
}, 50);
\`\`\``
  },
  {
    id: 'javascript-59',
    title: 'Explain the URLSearchParams utility and its benefits.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'URLSearchParams', 'URL Parsing', 'Browser API'],
    enAnswer: 'URLSearchParams is a built-in utility that defines helper methods to parse, construct, and modify query parameter strings of a URL easily.',
    bnAnswer: 'URLSearchParams হলো একটি বিল্ট-ইন ইউটিলিটি যা ইউআরএল-এর কুয়েরি প্যারামিটার স্ট্রিং সহজে পার্স, জেনারেট এবং পরিবর্তন করতে হেল্পার মেথড প্রদান করে।',
    enExplanation: `### Explanation
Before \`URLSearchParams\`, developers parsed query strings manually using regex or split operations:
- **Automatic Handling**: Handles URL encoding/decoding automatically (e.g. converting space characters to \`%20\` or \`+\` and back).
- **Iteration**: Implements iterator protocols supporting \`keys()\`, \`values()\`, and \`for...of\` loops directly.
- **Mutations**: Provides simple \`append()\`, \`set()\`, and \`delete()\` operations.

### Real-World Example
Building search filters. When a user clicks filter check boxes in a dashboard page, you can easily synchronize current selections into the browser URL bar query string.

### Best Practice
Combine \`URLSearchParams\` with \`window.history.pushState\` to build dynamic SEO-friendly URL filter parameters in single-page apps.

### Common Mistakes
Forgetting that \`URLSearchParams\` requires parsing just the query string part, not the full URL. Correct way: \`new URL(window.location.href).searchParams\` or \`new URLSearchParams(window.location.search)\`.

### Code Example
\`\`\`javascript
// Parsing Query Parameters
const queryString = "?category=shoes&price=150&size=10";
const params = new URLSearchParams(queryString);

console.log(params.get("category")); // "shoes"
console.log(params.has("price"));    // true

// Appending and modifying keys
params.append("color", "red");
params.set("price", "200"); // updates price key value
params.delete("size");

console.log(params.toString()); // "category=shoes&price=200&color=red"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`URLSearchParams\` এপিআই আসার পূর্বে ডেভেলপারদের কাস্টম স্প্লিট বা রেগুলার এক্সপ্রেশন ব্যবহার করে ইউআরএল স্ট্রিং পার্স করতে হতো:
- **স্বয়ংক্রিয় হ্যান্ডলিং**: এটি স্পেস বা বিশেষ ক্যারেক্টারকে স্বয়ংক্রিয়ভাবে এনকোড (\`%20\`) বা ডিকোড করে নেয়।
- **ইটারেশন**: ইটারেটর প্রোটোকল সাপোর্ট করায় সরাসরি \`keys()\`, \`values()\` ও \`for...of\` লুপ দিয়ে রিড করা যায়।
- **মান পরিবর্তন**: এতে সহজে প্যারামিটার যুক্ত, আপডেট ও ডিলিট করা যায় (\`append()\`, \`set()\`, \`delete()\`)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
সার্চ ফিল্টার প্রসেস করা। ব্যবহারকারী ড্যাশবোর্ডে কোনো ক্যাটাগরি বা প্রাইজ ফিল্টার সিলেক্ট করলে ব্রাউজারের অ্যাড্রেস বারের কুয়েরি স্ট্রিং আপডেট ও ট্র্যাক করা।

### উত্তম অনুশীলন (Best Practice)
সিঙ্গেল পেজ অ্যাপে SEO ফ্রেন্ডলি ফিল্টারিং রাউট তৈরি করতে \`URLSearchParams\` কে \`window.history.pushState\` এর সাথে কম্বাইন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`URLSearchParams\` কন্সট্রাক্টরের ভেতর সম্পূর্ণ ইউআরএল পাস করে দেওয়া। এটি কেবল কুয়েরি স্ট্রিং অংশটুকু নিয়ে কাজ করে। সঠিক পদ্ধতি: \`new URL(window.location.href).searchParams\` ব্যবহার করা।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কুয়েরি প্যারামিটার পার্স করা
const queryString = "?category=shoes&price=150&size=10";
const params = new URLSearchParams(queryString);

console.log(params.get("category")); // "shoes"
console.log(params.has("price"));    // true

// প্যারামিটার যুক্ত ও পরিবর্তন করা
params.append("color", "red");
params.set("price", "200"); // প্রাইজ পরিবর্তন করবে
params.delete("size"); // সাইজ ডিলিট করবে

console.log(params.toString()); // "category=shoes&price=200&color=red"
\`\`\``
  },
  {
    id: 'javascript-60',
    title: 'Compare Fetch API vs Axios.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Axios', 'Fetch API', 'HTTP Requests'],
    enAnswer: 'Fetch API is a built-in browser standard returning promises, requiring manual error checking for HTTP error status codes. Axios is a third-party library that auto-transforms JSON and auto-rejects HTTP errors.',
    bnAnswer: 'Fetch API ব্রাউজারের বিল্ড-ইন স্ট্যান্ডার্ড যা HTTP এররের জন্য ম্যানুয়াল এরর চেক রিকোয়ার করে। Axios একটি লাইব্রেরি যা স্বয়ংক্রিয়ভাবে JSON কনভার্ট ও HTTP এরর রিজেক্ট করে।',
    enExplanation: `### Explanation
- **\`Fetch API\`**:
  - Native browser support (no external libraries dependency).
  - Does *not* reject HTTP error states (like \`404\` or \`500\`). It resolves successfully, and you must check \`response.ok === false\`.
  - Requires manual parsing of JSON: \`response.json()\`.
- **Axios**:
  - Third-party library (adds to bundle size).
  - Automatically rejects promises on HTTP error status codes (e.g. status codes outside the 2xx range).
  - Automatic JSON conversion.
  - Supports interceptors (global request/response hooks) and upload progress tracking natively.

### Real-World Example
In enterprise apps where you need to attach authorization tokens to every outgoing API request, Axios intercepts make this trivial, whereas Fetch requires building custom wrapper functions manually.

### Best Practice
Use Fetch for lightweight scripts or static site generation blocks to keep bundle sizes optimal. Use Axios for complex single-page apps needing request interceptors and token refreshes.

### Common Mistakes
Expecting \`fetch(url)\` to throw an error on a \`500 Server Error\` state. It only throws on network failure or complete DNS blocks.

### Code Example
\`\`\`javascript
// 1. Native Fetch (Requires response.ok check & json parsing)
fetch("https://api.github.com/users/rohit")
  .then(res => {
    if (!res.ok) throw new Error("HTTP error: " + res.status);
    return res.json();
  })
  .then(data => console.log("Fetch:", data.name))
  .catch(err => console.error(err));

// 2. Axios (Cleaner syntax, auto-rejects HTTP errors)
// axios.get("https://api.github.com/users/rohit")
//   .then(res => console.log("Axios:", res.data.name))
//   .catch(err => console.error(err));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`Fetch API\`**:
  - ব্রাউজারের বিল্ড-ইন স্ট্যান্ডার্ড (কোনো এক্সটার্নাল লাইব্রেরি লাগে না)।
  - এটি HTTP এরর স্ট্যাটাস কোড (যেমন \`404\` বা \`500\`) থাকলে প্রমিজ রিজেক্ট করে না। রিকোয়েস্ট সফল হয়েছে ধরে নেয়, তাই কন্ডিশনে ম্যানুয়ালি \`response.ok === false\` চেক করতে হয়।
  - JSON ডাটা পার্স করতে ম্যানুয়ালি \`response.json()\` মেথড ডাকতে হয়।
- **Axios**:
  - থার্ড-পার্টি লাইব্রেরি (বান্ডেল সাইজ কিছুটা বাড়ায়)।
  - যেকোনো HTTP এরর কোড (2xx এর বাইরের স্ট্যাটাস কোড) পেলে সাথে সাথে প্রমিজ রিজেক্ট করে।
  - স্বয়ংক্রিয়ভাবে JSON ডাটা কনভার্ট করে।
  - রিকোয়েস্ট ইন্টারসেপ্টর ও প্রোগ্রেস ট্র্যাকিং ফিচার বিল্ড-ইন থাকে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় কর্পোরেট অ্যাপ্লিকেশনে প্রতিবার এপিআই কলের সাথে রিফ্রেশ টোকেন বা অথরাইজেশন হেডার যুক্ত করা। Axios Interceptors দিয়ে এক জায়গায় কোড লিখলেই তা সব এপিআই কলের ওপর কাজ করে, যা Fetch দিয়ে করতে গেলে ম্যানুয়াল কাস্টম র‍্যাপার ফাংশন জেনারেট করতে হতো।

### উত্তম অনুশীলন (Best Practice)
ছোটখাটো স্ক্রিপ্ট বা স্ট্যাটিক সাইট জেনারেশনের ক্ষেত্রে বান্ডেল সাইজ অপ্টিমাইজ রাখতে Fetch ব্যবহার করুন। ইন্টারসেপ্টর ও টোকেন রিফ্রেশ লজিক সমৃদ্ধ বড় অ্যাপে Axios ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সার্ভারের \`500 Server Error\` রেসপন্সে \`fetch(url)\` সরাসরি এরর থ্রো করবে মনে করা। এটি কেবল নেটওয়ার্ক ডিসকানেক্ট বা DNS ব্লক হলেই কেবল ক্যাচ ব্লকে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. নেটিভ Fetch (response.ok চেক এবং json পার্সিং প্রয়োজন)
fetch("https://api.github.com/users/rohit")
  .then(res => {
    if (!res.ok) throw new Error("HTTP error: " + res.status);
    return res.json();
  })
  .then(data => console.log("Fetch:", data.name))
  .catch(err => console.error(err));

// ২. Axios (সহজ সিনট্যাক্স, স্বয়ংক্রিয় এরর রিজেকশন)
// axios.get("https://api.github.com/users/rohit")
//   .then(res => console.log("Axios:", res.data.name))
//   .catch(err => console.error(err));
\`\`\``
  },
  {
    id: 'javascript-61',
    title: 'Explain requestAnimationFrame and how it optimizes browser animations.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'requestAnimationFrame', 'Performance', 'Animations'],
    enAnswer: 'requestAnimationFrame schedules function execution matching the browser refresh rate (usually 60Hz or 120Hz), pausing background executions to optimize battery and CPU usage.',
    bnAnswer: 'requestAnimationFrame ব্রাউজারের রিফ্রেশ রেটের (যেমন 60Hz/120Hz) সাথে মিলিয়ে ফাংশন রান করায় এবং ব্যাকগ্রাউন্ড ট্যাবে থাকলে লুপ পজ করে ব্যাটারি ও CPU সাশ্রয় করে।',
    enExplanation: `### Explanation
Prior to \`requestAnimationFrame\`, developers built loop animations using \`setInterval\` or \`setTimeout\`.
- **Issues with Timers**: Timers trigger regardless of when the screen redraws, causing frame skips or stuttering (jank). They also continue running when the tab is in the background, wasting CPU and battery resources.
- **\`requestAnimationFrame(callback)\`**:
  - Automatically aligns the execution time of the callback to the screen refresh cycle.
  - Passes a high-precision timestamp representing the elapsed time.
  - Pauses execution entirely if the tab is hidden or minimized.

### Real-World Example
Building a custom scroll-to-top animation or a HTML5 canvas game loop. Using this API guarantees fluid frames without dropping render timings.

### Best Practice
Always calculate offsets based on time delta rather than fixed frames, ensuring animations speed stays consistent regardless of whether the device screen is 60Hz, 90Hz, or 120Hz.

### Common Mistakes
Forgetting that \`requestAnimationFrame\` is one-shot. If you want to build a loop, your callback function must invoke \`requestAnimationFrame\` recursively at the end.

### Code Example
\`\`\`javascript
let start = null;
const element = document.getElementById("animated-box");

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  
  // Move element 0.1px per millisecond
  const position = Math.min(progress * 0.1, 200);
  if (element) {
    element.style.transform = \`translateX(\${position}px)\`;
  }
  
  if (position < 200) {
    // Request next frame recursively
    requestAnimationFrame(step);
  }
}

// Start the animation
requestAnimationFrame(step);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`requestAnimationFrame\` আসার পূর্বে ডেভেলপাররা \`setInterval\` বা \`setTimeout\` দিয়ে লুপ অ্যানিমেশন তৈরি করতেন।
- **টাইমারের সমস্যা**: স্ক্রিন রিফ্রেশ কখন হচ্ছে তা না দেখেই টাইমারগুলো ডাটা আপডেট করতো, ফলে অনেক ফ্রেম ড্রপ বা অ্যানিমেশন কেঁপে কেঁপে চলতো (jank)। এছাড়াও ব্যাকগ্রাউন্ড ট্যাবে গেলেও এগুলো অবিরাম চলতে থাকতো, যা ব্রাউজার স্লো করতো।
- **\`requestAnimationFrame\` এর সুবিধা**:
  - এটি কলব্যাক ফাংশনটিকে স্ক্রিনের ফিজিক্যাল রিফ্রেশ সাইকেলের সাথে সিঙ্ক করে রান করায়।
  - প্যারামিটার হিসেবে হাই-প্রিসিশন রিলেটিভ টাইমস্ট্যাম্প পাস করে।
  - ট্যাবটি ব্যাকগ্রাউন্ডে চলে গেলে বা মিনিমাইজ করা হলে অ্যানিমেশন সম্পূর্ণ পজ করে ব্যাটারি ও CPU সেভ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম স্ক্রল-টু-টপ মেথড অথবা ক্যানভাস গেমের অ্যানিমেশন লুপ তৈরি করা। এটি ব্যবহার করলে কোনো ফ্রেম স্কিপ ছাড়াই অত্যন্ত স্মুথ ইউআই ফ্লো পাওয়া যায়।

### উত্তম অনুশীলন (Best Practice)
স্থির দূরত্বের পরিবর্তে সময়ের পার্থক্যের (time delta) ওপর ভিত্তি করে পিক্সেল মুভমেন্ট হিসেব করুন, যাতে ৬০হার্জ বা ১২০হার্জ উভয় স্ক্রিনেই অ্যানিমেশনের স্পিড সমান থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে রাখা যে \`requestAnimationFrame\` কেবল একবারই কাজ করে। অ্যানিমেশন লুপ সচল রাখতে মেথডটির শেষে পুনরায় রিকার্সিভলি \`requestAnimationFrame\` কল করতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
let start = null;
const element = document.getElementById("animated-box");

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  
  // প্রতি মিলি-সেকেন্ডে ০.১ পিক্সেল করে মুভ করবে
  const position = Math.min(progress * 0.1, 200);
  if (element) {
    element.style.transform = \`translateX(\${position}px)\`;
  }
  
  if (position < 200) {
    // পুনরায় পরবর্তী ফ্রেমের জন্য রিকোয়েস্ট করা হচ্ছে
    requestAnimationFrame(step);
  }
}

// অ্যানিমেশন শুরু
requestAnimationFrame(step);
\`\`\``
  },
  {
    id: 'javascript-62',
    title: 'Explain requestIdleCallback and its usage.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'requestIdleCallback', 'Performance', 'Optimizations'],
    enAnswer: 'requestIdleCallback queues function execution during browser idle periods, preventing non-essential background tasks from blocking critical user interactions or layout frames.',
    bnAnswer: 'requestIdleCallback ব্রাউজারের অলস বা অবসর সময়ে (idle period) ফাংশন রান করায়, যা ব্যাকগ্রাউন্ডের কম গুরুত্বপূর্ণ কাজের জন্য মেইন ইউজার ইন্টারঅ্যাকশন ব্লক হওয়া রোধ করে।',
    enExplanation: `### Explanation
- **Purpose**: Schedules low-priority tasks that should execute without affecting the frame rate.
- **Execution**: The browser only runs the registered callback when it has time left at the end of a frame, or when the user is inactive.
- **Deadline Object**: The callback receives an \`IdleDeadline\` parameter. Calling \`deadline.timeRemaining()\` returns how many milliseconds are left in the current idle window, allowing tasks to yield back to the browser if they exceed time.

### Real-World Example
Sending telemetry, tracking logs, pre-fetching next-page resource assets, or building indexing tables for local search caches without slowing down user scroll/input frames.

### Best Practice
Never use \`requestIdleCallback\` for layout changes or DOM modifications. Since execution is asynchronous and unpredictable, visual updates can look stuttered or laggy.

### Common Mistakes
Forgetting to use the \`timeout\` option. If the browser is continuously busy with heavy frames, the idle callback might never fire unless a \`timeout\` config enforces execution.

### Code Example
\`\`\`javascript
// Queue a low priority telemetry logger
requestIdleCallback((deadline) => {
  // Check if we have remaining time in the current frame
  while (deadline.timeRemaining() > 0 || deadline.didTimeout) {
    if (telemetryQueue.length === 0) break;
    
    const log = telemetryQueue.shift();
    sendTelemetry(log);
  }
}, { timeout: 2000 }); // Force execution after 2 seconds even if browser is busy
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **উদ্দেশ্য**: ফ্রেম রেটের ক্ষতি না করে কম গুরুত্বপূর্ণ ব্যাকগ্রাউন্ডের কাজগুলোকে শিডিউল বা সারিবদ্ধ করা।
- **এক্সিকিউশন**: ব্রাউজার কেবল তখনই এই কাজগুলো রান করে যখন কোনো ফেম আঁকার পর ব্রাউজারের হাতে বাড়তি সময় থাকে অথবা ইউজার স্ক্রিনে নিষ্ক্রিয় থাকে।
- **ডেডলাইন অবজেক্ট (Deadline Object)**: কলব্যাক ফাংশনে একটি \`IdleDeadline\` প্যারামিটার পাস হয়। \`deadline.timeRemaining()\` দিয়ে চেক করা যায় অলস সময়ে কত মিলি-সেকেন্ড বাকি আছে, যাতে সময় শেষ হলে কাজ থামিয়ে ব্রাউজারকে আবার ফ্রি করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অ্যানালিটিক্স ডাটা ব্যাকএন্ডে পাঠানো, ইউজার ট্র্যাকিং লগ স্টোর করা বা পরবর্তী পেজের অ্যাসেট প্রিলোড করা, যাতে করে ইউজারের টাইপিং বা বাটন ক্লিক করার রেন্ডারে কোনো প্রভাব না পড়ে।

### উত্তম অনুশীলন (Best Practice)
কখনো পেজের ভিউ বা DOM মডিফাই করার কাজে \`requestIdleCallback\` ব্যবহার করবেন না। এটি কখন রান হবে তা নির্দিষ্ট না থাকায় ভিজ্যুয়াল আপডেটে ল্যাগ দেখা দেবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`timeout\` অপশন ব্যবহার না করা। ব্রাউজার কোনো ভারী কাজে একটানা ব্যস্ত থাকলে অলস সময় না-ও পেতে পারে, ফলে কলব্যাকটি দীর্ঘক্ষণ রানই হবে না যদি না একটি \`timeout\` টাইম এনফোর্স করা থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কম গুরুত্বপূর্ণ লগ ডাটা পাঠানোর শিডিউলিং
requestIdleCallback((deadline) => {
  // বর্তমান ফ্রেমে সময় বাকি থাকা পর্যন্ত কাজ চলবে
  while (deadline.timeRemaining() > 0 || deadline.didTimeout) {
    if (telemetryQueue.length === 0) break;
    
    const log = telemetryQueue.shift();
    sendTelemetry(log);
  }
}, { timeout: 2000 }); // ২ সেকেন্ড পার হলে ব্রাউজারকে বাধ্য করবে এটি রান করতে
\`\`\``
  },
  {
    id: 'javascript-63',
    title: 'Explain Cookie security attributes HttpOnly, Secure, and SameSite.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Cookies', 'Security', 'Web Security'],
    enAnswer: 'HttpOnly blocks client-side JavaScript access (prevents XSS). Secure restricts cookie transmission to HTTPS connections. SameSite controls cross-site cookie transmission (prevents CSRF).',
    bnAnswer: 'HttpOnly ক্লায়েন্ট-সাইড JS অ্যাক্সেস ব্লক করে (XSS রোধ)। Secure কেবল HTTPS কানেকশনে কুকি ট্রান্সমিট করায়। SameSite ক্রস-সাইট কুকি শেয়ারিং নিয়ন্ত্রণ করে (CSRF রোধ)।',
    enExplanation: `### Explanation
These attributes are crucial to securing sessions:
- **\`HttpOnly\`**: Prevents client-side scripts from reading the cookie via \`document.cookie\`. This is the strongest mitigation against session-hijacking via Cross-Site Scripting (XSS).
- **\`Secure\`**: The cookie is only sent over encrypted connections (HTTPS), protecting it from packet sniffing.
- **\`SameSite\`**: Restricts whether cookies are sent along with cross-site requests. Options:
  - \`Strict\`: Never send cookies on cross-site requests (e.g. clicking a link from an external site to your app).
  - \`Lax\`: Default. Cookies are sent when navigating to the origin site via top-level GET requests.
  - \`None\`: Cookies are sent on all cross-site requests, requiring the \`Secure\` flag to be enabled.

### Real-World Example
Securing JWT login tokens. Storing the auth token in an \`HttpOnly\`, \`Secure\`, \`SameSite=Lax\` cookie ensures that hackers cannot copy the token using an injected script tag.

### Best Practice
Always configure session cookies with \`HttpOnly\` and \`Secure\`. Set \`SameSite=Lax\` as a safe default for standard web apps, and \`SameSite=Strict\` for banking/payment portals.

### Common Mistakes
Setting \`SameSite=None\` without the \`Secure\` flag. Modern browsers reject this configuration and will refuse to store the cookie.

### Code Example
\`\`\`javascript
// Sample Server-side Set-Cookie Header configuration
// Set-Cookie: session_id=abc123xyz; Secure; HttpOnly; SameSite=Lax
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কুকি সুরক্ষিত রাখার তিনটি মূল প্যারামিটার:
- **\`HttpOnly\`**: ক্লায়েন্ট সাইডের জাভাস্ক্রিপ্ট কোড থেকে \`document.cookie\` মেথড ব্লক করে দেয়। এর ফলে হ্যাকাররা সাইটে কাস্টম স্ক্রিপ্ট বা XSS অ্যাটাক চালালেও লগইন সেশন টোকেন রিড করতে পারে না।
- **\`Secure\`**: কুকিটি কেবল এসএসএল এনক্রিপ্টেড (HTTPS) চ্যানেলেই ট্রাভেল করতে পারে, যা নেটওয়ার্ক ট্রাফিক স্নীফিং থেকে সুরক্ষা দেয়।
- **\`SameSite\`**: থার্ড-পার্টি লিঙ্ক বা ক্রস-সাইট রিকোয়েস্টে কুকি সার্ভারে পাঠানো হবে কিনা তা ঠিক করে। এর অপশনসমূহ:
  - \`Strict\`: অন্য কোনো ওয়েবসাইট থেকে আপনার সাইটে রিডিরেক্ট হয়ে ঢুকলেও ব্রাউজার কুকি ব্লক করে রাখে।
  - \`Lax\`: ডিফল্ট সেটিং। অন্য সাইট থেকে কেবল লিঙ্ক ক্লিক করে GET মেথড দিয়ে ঢুকলে কুকি এলাউড করে।
  - \`None\`: সব ক্রস-সাইট রিকোয়েস্টে কুকি সেন্ড করতে দেয়, তবে এ জন্য অবশ্যই \`Secure\` ফ্ল্যাগ অন থাকতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লগইন সেশন টোকেন নিরাপদ রাখা। টোকেনটি \`HttpOnly\`, \`Secure\` এবং \`SameSite=Lax\` কুকিতে সেভ করলে হ্যাকাররা কোনো স্ক্রিপ্ট ইনজেক্ট করে ব্রাউজার থেকে টোকেন কপি করতে পারে না।

### উত্তম অনুশীলন (Best Practice)
সেশন ম্যানেজমেন্ট কুকিতে সবসময় \`HttpOnly\` এবং \`Secure\` ব্যবহার করুন। ব্যাংকিং বা পেমেন্ট ট্রানজ্যাকশন সাইটের জন্য \`SameSite=Strict\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Secure\` ফ্ল্যাগ অন না করেই \`SameSite=None\` ব্যবহার করা। আধুনিক ব্রাউজারগুলো এই অপূর্ণ সেটিং রিজেক্ট করে এবং কুকি স্টোর করে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// সার্ভার সাইডের Set-Cookie হেডার কনফিগারেশন
// Set-Cookie: session_id=abc123xyz; Secure; HttpOnly; SameSite=Lax
\`\`\``
  },
  {
    id: 'javascript-64',
    title: 'Explain the Intersection Observer API and its advantages.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'DOM API', 'Intersection Observer', 'Performance'],
    enAnswer: 'The Intersection Observer API asynchronously monitors when a target element intersects with a parent container or browser viewport, replacing laggy scroll event calculations.',
    bnAnswer: 'Intersection Observer API অ্যাসিনক্রোনাসলি ট্র্যাক করে কখন একটি এলিমেন্ট ভিউপোর্ট বা নির্দিষ্ট প্যারেন্ট কন্টেনারে প্রবেশ করে, যা ভারী স্ক্রল ক্যালকুলেশনের বিকল্প।',
    enExplanation: `### Explanation
Before this API, checking if an element was visible required registering scroll listeners and calling \`Element.getBoundingClientRect()\`, which forced the browser to recalculate layouts synchronously, causing rendering delays.
- **Asynchronous Execution**: The intersection checks are performed out-of-thread by the browser rendering engine.
- **Triggers**: Executes a callback whenever the intersection threshold (percentage of element visibility) is crossed.

### Real-World Example
Infinite scrolling list grids or lazy-loading gallery layouts. When the user scrolls near the bottom of a page, the intersection with a loading placeholder card triggers the next fetch page request automatically.

### Best Practice
Unobserve the target element (\`observer.unobserve(target)\`) once the action is complete (like loading a lazy image) to free up DOM observer threads.

### Common Mistakes
Forgetting that the threshold is a fraction. Setting \`threshold: 50\` instead of \`threshold: 0.5\` will fail to trigger the callback, as the range must be between \`0.0\` and \`1.0\`.

### Code Example
\`\`\`javascript
const observerOptions = {
  root: null, // defaults to viewport
  threshold: 0.1 // triggers when 10% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is visible!");
      
      // Stop observing once triggered (great for lazy loading)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const target = document.getElementById("lazy-image");
observer.observe(target);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই এপিআই আসার পূর্বে কোনো উপাদানের স্ক্রিনে উপস্থিতি মাপতে স্ক্রল লিসেনারের ভেতর \`getBoundingClientRect()\` কল করতে হতো, যা ব্রাউজারকে বারবার লেআউট রি-ক্যালকুলেশন করতে বাধ্য করতো এবং ইউআই স্টাটারিং তৈরি করতো।
- **অ্যাসিনক্রোনাস এক্সিকিউশন**: ইভেন্ট লুপের মূল থ্রেডকে মুক্ত রেখে ব্রাউজার ব্যাকগ্রাউন্ডে এই ট্র্যাক ও লজিক্যাল ক্যালকুলেশন সম্পন্ন করে।
- **ট্রিগার**: এলিমেন্টের নির্দিষ্ট অংশ (threshold) স্ক্রিনে দৃশ্যমান হওয়ার সাথে সাথেই এর অ্যাসোসিয়েটেড কলব্যাক ফায়ার হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইনফিনিট স্ক্রল বা ইমেজের লেজি-লোডিং। ইউজার স্ক্রল করে পেজের নিচে নামার সময় সবশেষে থাকা একটি লোডার বা বাফারিং নোডটি স্ক্রিনে দৃশ্যমান হওয়া মাত্রই পরবর্তী পেজের ডাটা ফেচিং কল ট্রিগার করা।

### উত্তম অনুশীলন (Best Practice)
লেজি-লোডিং ইমেজ লোড হওয়ার সাথে সাথে নোডটিকে আন-অবজারভ (\`observer.unobserve(target)\`) করে দিন যাতে ব্রাউজার মেমরি ও নোড ট্র্যাকিং প্রসেস ফিজিক্যালি বন্ধ করে দেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
থ্রেশহোল্ড প্যারামিটার বা অপশনে দশমিকের পরিবর্তে ইন্টিজার ব্যবহার করা। \`threshold: 50\` লিখলে তা কাজ করবে না, এটিকে ০.০ থেকে ১.০ সীমার মধ্যে (যেমন: \`0.5\` মানে ৫০%) দিতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const observerOptions = {
  root: null, // ডিফল্ট ভিউপোর্ট
  threshold: 0.1 // ১০% এলিমেন্ট স্ক্রিনে দৃশ্যমান হলে ট্রিগার হবে
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("এলিমেন্টটি স্ক্রিনে এসেছে!");
      
      // কাজ শেষে ট্র্যাকিং বন্ধ করা (লেজি লোডের জন্য ভালো প্র্যাকটিস)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const target = document.getElementById("lazy-image");
observer.observe(target);
\`\`\``
  },
  {
    id: 'javascript-65',
    title: 'Explain the Mutation Observer API.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'DOM API', 'Mutation Observer', 'Debugging'],
    enAnswer: 'The Mutation Observer API monitors changes to the DOM tree (adds, deletes, edits attributes, or text changes), replacement for legacy mutation events.',
    bnAnswer: 'Mutation Observer API ডম (DOM) ট্রির যেকোনো পরিবর্তন (এলিমেন্ট যোগ, ডিলিট, অ্যাট্রিবিউট বা টেক্সট এডিট) মনিটর ও ট্র্যাক করতে সাহায্য করে।',
    enExplanation: `### Explanation
Mutation Observer provides a way to react to DOM tree changes asynchronously:
- **Scope**: Can track attribute modifications, child nodes insertions/deletions, or deep subtree text variations.
- **Optimization**: Batches multiple DOM changes into a single callback execution, preventing the performance thrashing caused by legacy deprecated Mutation Events.

### Real-World Example
Third-party extensions or widget integrations. If you build a chrome extension, you can use a Mutation Observer to watch if the website dynamically appends a checkout button and inject custom styling overlays immediately.

### Best Practice
Always call \`observer.disconnect()\` when the observation lifecycle ends to avoid keeping memory hooks active.

### Common Mistakes
Creating infinite loops by modifying the DOM inside the observer callback without filtering mutations. If the observer listens to child modifications, adding a new child inside the callback triggers the observer again.

### Code Example
\`\`\`javascript
const targetNode = document.getElementById("content-area");

const config = { 
  attributes: true, 
  childList: true, 
  subtree: true 
};

const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(\`The \${mutation.attributeName} attribute was modified.\`);
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// Disconnect later
// observer.disconnect();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডম ট্রির যেকোনো পরিবর্তন অ্যাসিনক্রোনাস উপায়ে ডিটেক্ট করার স্ট্যান্ডার্ড পথ হলো Mutation Observer:
- **সুযোগ**: এটি এলিমেন্টের কাস্টম অ্যাট্রিবিউট পরিবর্তন, চাইল্ড নোড অ্যাড/ডিলিট অথবা গভীর টেক্সট পরিবর্তন ট্র্যাক করতে পারে।
- **অপ্টিমাইজেশন**: একসাথে ঘটা একাধিক ডম পরিবর্তনকে একটি মাত্র কলব্যাকে গ্রুপ করে রান করায়, যা পুরোনো মিউটেশন ইভেন্টগুলির মতো ব্রাউজারকে ধীরগতির করে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ক্রোম এক্সটেনশন বা থার্ড-পার্টি প্লাগইন তৈরি করা। ওয়েবসাইটে কোনো ডাইনামিক নোড (যেমন: নতুন কমেন্ট বা পেমেন্ট বাটন) রেন্ডার হওয়া মাত্রই এক্সটেনশনের নিজস্ব কোড বা কাস্টম স্টাইল ইনজেক্ট করা।

### উত্তম অনুশীলন (Best Practice)
কাজ শেষ হয়ে গেলে বা কম্পোনেন্ট আনমাউন্ট হওয়ার সময় অবশ্যই \`observer.disconnect()\` মেথড কল করুন যাতে মেমরি ফাঁকা হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
অবজারভার কলব্যাক বডির ভেতরে ডম এডিট করার সময় ফিল্টারিং না করায় ইনফিনিট লুপ (অসীম চক্র) তৈরি করা। ডম এডিট করার সাথে সাথেই ইভেন্ট লিসেনারটি আবার ট্রিগার হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const targetNode = document.getElementById("content-area");

const config = { 
  attributes: true, 
  childList: true, 
  subtree: true 
};

const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("চাইল্ড নোড যুক্ত বা মুছে ফেলা হয়েছে।");
    } else if (mutation.type === "attributes") {
      console.log(\`অ্যাট্রিবিউট \${mutation.attributeName} পরিবর্তিত হয়েছে।\`);
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// কাজ শেষে ডিসকানেক্ট করা
// observer.disconnect();
\`\`\``
  },
  {
    id: 'javascript-66',
    title: 'Explain the Resize Observer API and its usage.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'DOM API', 'Resize Observer', 'Layouts'],
    enAnswer: 'The Resize Observer API monitors changes to the physical dimensions (width and height) of a DOM element, permitting element query responsive layout designs.',
    bnAnswer: 'Resize Observer API একটি DOM এলিমেন্টের ফিজিক্যাল সাইজ বা মাত্রার (প্রস্থ ও উচ্চতা) পরিবর্তন ট্র্যাক করে, যা এলিমেন্ট কুয়েরি ডিজাইনে সাহায্য করে।',
    enExplanation: `### Explanation
- **Limitation of window.resize**: The global \`window.onresize\` event handler only triggers when the entire browser window changes dimensions. It cannot detect when a specific div component changes size due to content updates.
- **Resize Observer**: Attaches to individual elements. Triggers a callback containing the new width/height boundaries (\`borderBoxSize\`, \`contentBoxSize\`) whenever the tracked element changes dimensions.

### Real-World Example
Building container-query responsive widgets. If you design a card grid widget that switches layout depending on whether its own element container size is below 400px, regardless of the overall screen size.

### Best Practice
Use Resize Observer when building responsive charts or canvas components to re-render calculations dynamically whenever the wrapper div scales.

### Common Mistakes
Forgetting that resizing the observed element inside the observer callback can cause infinite loops (ResizeLoopError).

### Code Example
\`\`\`javascript
const card = document.querySelector(".resizable-card");

const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    // Get new dimensions
    const { width, height } = entry.contentRect;
    console.log(\`New Width: \${width}px, Height: \${height}px\`);
    
    // Conditional styling based on element size (Container Query)
    if (width < 300) {
      entry.target.classList.add("small-layout");
    } else {
      entry.target.classList.remove("small-layout");
    }
  }
});

resizeObserver.observe(card);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **উইন্ডো রিসাইজের সীমাবদ্ধতা**: গ্লোবাল \`window.onresize\` ইভেন্ট কেবল পুরো ব্রাউজার স্ক্রিন ছোট-বড় হলেই ট্রিগার হয়। কোনো নির্দিষ্ট ডিভ বা কন্টেইনারের সাইজ পরিবর্তিত হলে এটি তা বুঝতে পারে না।
- **রিসাইজ অবজারভার**: নির্দিষ্ট কাস্টম এলিমেন্টের ওপর বসে। যখনই ট্র্যাক করা নোডের সাইজ পরিবর্তিত হয়, এটি তার সঠিক প্রস্থ ও উচ্চতা নিয়ে ইভেন্ট ট্রিগার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কন্টেইনার-কুয়েরি রেসপন্সিভ কার্ড ডিজাইন করা। উইন্ডো বড় থাকলেও কার্ডটির নিজস্ব কন্টেইনার সাইজ ৪০০ পিক্সেলের নিচে নামলে কার্ডটি তার ভেতরের ছবি ও লেখার লেআউট হরিজন্টাল থেকে ভার্টিক্যালে পরিবর্তন করে ফেলা।

### উত্তম অনুশীলন (Best Practice)
ডাইনামিক চার্ট বা ক্যানভাস বোর্ড তৈরি করার সময় তার প্যারেন্ট ডিভ রি-স্কেল হলে চার্টটি নতুন ডাইমেনশনে রি-রেন্ডার করতে রিসাইজ অবজারভার ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিসাইজ অবজারভার কলব্যাকের ভেতরেই টার্গেট এলিমেন্টের সাইজ কন্টিনিউয়াসলি পরিবর্তন করে ফেলে ইনফিনিট লুপের (ResizeLoopError) সৃষ্টি করা।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const card = document.querySelector(".resizable-card");

const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    // নতুন মাত্রা বা সাইজ রিড করা
    const { width, height } = entry.contentRect;
    console.log(\`প্রস্থ: \${width}px, উচ্চতা: \${height}px\`);
    
    // অবজেক্টের সাইজের ওপর ভিত্তি করে কন্টেইনার কুয়েরি লেআউট চেঞ্জ
    if (width < 300) {
      entry.target.classList.add("small-layout");
    } else {
      entry.target.classList.remove("small-layout");
    }
  }
});

resizeObserver.observe(card);
\`\`\``
  },
  {
    id: 'javascript-67',
    title: 'Explain the History API and how single-page apps use it.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'History API', 'SPA', 'Routing'],
    enAnswer: 'The History API allows manipulating the browser session history and URL bar without triggering full page reloads, using pushState, replaceState, and the popstate event.',
    bnAnswer: 'History API ফুল পেজ রিলোড না করেই ব্রাউজারের হিস্ট্রি ও ইউআরএল বার পরিবর্তন করার সুবিধা দেয়। এর জন্য pushState, replaceState ও popstate ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Modern Single Page Application (SPA) routing is built on this API:
- **\`history.pushState(state, title, url)\`**: Adds a new entry to the browser session history. The URL in the address bar changes, but the browser does not load a new page.
- **\`history.replaceState(state, title, url)\`**: Modifies the current history entry (does not add a new back-button step).
- **\`popstate\` event**: Fires when the user clicks the browser back or forward button, letting the app router catch page transitions and render the corresponding page state.

### Real-World Example
React Router navigation. Clicking a link runs \`pushState\` to update the URL bar, and the router renders the new page component inside the DOM instantly without server reloads.

### Best Practice
Always supply a valid state object to \`pushState\` to preserve scroll positions or input values when navigating back and forth.

### Common Mistakes
Forgetting that \`pushState\` does not trigger the \`popstate\` event. \`popstate\` is only fired by browser navigation buttons (Back/Forward) or script commands like \`history.back()\`.

### Code Example
\`\`\`javascript
// 1. Navigate to a new route without reloading
const state = { page: "profile", userId: 12 };
history.pushState(state, "Profile Page", "/profile");

// 2. Listen to browser back/forward buttons navigation
window.addEventListener("popstate", (event) => {
  if (event.state) {
    console.log("Navigated to page:", event.state.page);
    // Render corresponding component dynamically
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
আধুনিক সিঙ্গেল পেজ অ্যাপ্লিকেশনগুলোর (SPA) রাউটিং সিস্টেম এই এপিআই-এর ওপর ভিত্তি করে চলে:
- **\`history.pushState(state, title, url)\`**: ব্রাউজারের সেশন হিস্ট্রিতে নতুন একটি রাউট যোগ করে। অ্যাড্রেস বারের ইউআরএল বদলে যায় কিন্তু ব্রাউজার নতুন কোনো পেজ রিলোড করে না।
- **\`history.replaceState(state, title, url)\`**: বর্তমান হিস্ট্রি নোডটিকে মডিফাই করে (নতুন কোনো ব্যাক-বাটন ধাপ তৈরি হয় না)।
- **\`popstate\` ইভেন্ট**: ব্যবহারকারী যখন ব্রাউজারের ব্যাক (Back) বা ফরোয়ার্ড (Forward) বাটনে ক্লিক করেন, তখন এই ইভেন্ট ফায়ার হয় এবং রাউটার সেই অনুযায়ী সঠিক পেজ ভিউ রেন্ডার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React Router বা Next.js নেভিগেশন। কোনো লিঙ্কে ক্লিক করলে রাউটার রিলোড না করে ডমে কন্টেন্ট চেঞ্জ করে এবং \`pushState\` দিয়ে ইউআরএল বারের লিঙ্ক আপডেট করে দেয়।

### উত্তম অনুশীলন (Best Practice)
ইউজার ব্যাক বাটনে ক্লিক করলে পূর্বের স্ক্রল পজিশন বা ইনপুট ডাটা ফিরে পেতে \`pushState\` এর প্রথম প্যারামিটারে সঠিক স্টেট অবজেক্ট স্টোর করে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`pushState\` কল করলেই \`popstate\` ইভেন্ট ফায়ার হবে। এটি কেবল ব্রাউজারের ব্যাক/ফরোয়ার্ড বোতাম ক্লিক করা বা স্ক্রিপ্ট দিয়ে \`history.back()\` কল করলেই ফায়ার হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. রিলোড ছাড়াই নতুন রাউটে যাওয়া
const state = { page: "profile", userId: 12 };
history.pushState(state, "Profile Page", "/profile");

// ২. ব্রাউজারের ব্যাক/ফরোয়ার্ড বোতাম ক্লিক ইভেন্ট হ্যান্ডেল করা
window.addEventListener("popstate", (event) => {
  if (event.state) {
    console.log("ইউজার নেভিগেট করেছে পেজে:", event.state.page);
    // পেজ রেন্ডার মেথড কল করুন
  }
});
\`\`\``
  },
  {
    id: 'javascript-68',
    title: 'Explain the Web Audio API basics.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Web Audio API', 'Media', 'Browser API'],
    enAnswer: 'The Web Audio API is a powerful browser system for manipulating and processing audio using a modular routing graph built of AudioNodes.',
    bnAnswer: 'Web Audio API হলো ব্রাউজারে অডিও প্রসেস ও মডিফাই করার শক্তিশালী সিস্টেম যা বিভিন্ন AudioNodes মডিউলের সমন্বয়ে গঠিত রাউটিং গ্রাফ দিয়ে কাজ করে।',
    enExplanation: `### Explanation
The Web Audio API allows advanced audio controls beyond the standard HTML5 \`<audio>\` element:
- **AudioContext**: The primary controller graph managing all audio nodes.
- **AudioNodes**: Individual modules (sources, filters, gains, destination speaker) linked together in a chain using the \`.connect()\` method.
- **Flow**: Source Node (e.g. mic or audio file) -> Effect Node (e.g. BiquadFilterNode for equalizer) -> Gain Node (volume) -> Destination (speakers).

### Real-World Example
Building a custom web music synthesizer, a sound visualizer, an audio equalizer panel, or spatial audio filters in 3D web games.

### Best Practice
Modern browsers block the creation of active AudioContexts before user interaction. Always resume the context on a user click event handler to prevent autoplay blocks.

### Common Mistakes
Trying to play sound without connecting the nodes to the final destination (\`audioContext.destination\`), resulting in silent output.

### Code Example
\`\`\`javascript
// Initialize audio context on click
document.getElementById("play-btn").addEventListener("click", () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // 1. Create Oscillator Source (synthesizes tone)
  const oscillator = audioCtx.createOscillator();
  
  // 2. Create Gain Node (controls volume)
  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // 50% volume
  
  // 3. Connect nodes: Source -> Volume -> Speakers
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  // Start playing a 440Hz tone
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.start();
  
  // Stop after 1 second
  oscillator.stop(audioCtx.currentTime + 1.0);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Web Audio API সাধারণ HTML5 \`<audio>\` এলিমেন্টের চেয়ে অডিওর ওপর অনেক বেশি অ্যাডভান্সড ও প্রফেশনাল কন্ট্রোল দেয়:
- **AudioContext**: এটি মূল অডিও গ্রাফ যা সমস্ত অডিও নোড পরিচালনা করে।
- **AudioNodes**: ছোট ছোট প্রসেসর মডিউল (যেমন সোর্স ফাইল, ইকুয়ালাইজার ফিল্টার, ভলিউম কন্ট্রোলার) যা একে অপরের সাথে \`.connect()\` মেথড দিয়ে লিঙ্কড থাকে।
- **অডিও ফ্লো**: অডিও সোর্স (অডিও ফাইল) -> ইফেক্ট ফিল্টার (ইকুয়ালাইজার) -> গেইন নোড (ভলিউম) -> ডেস্টিনেশন (স্পিকার)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ওয়েব-ভিত্তিক পিয়ানো বা মিউজিক সিন্থেসাইজার তৈরি করা, মিউজিক প্লেয়ারের সাথে ইকুয়ালাইজার যুক্ত করা অথবা 3D ওয়েব গেমে দূরত্বের ওপর ভিত্তি করে ত্রিমাত্রিক সাউন্ড বা স্পেশাল অডিও তৈরি করা।

### উত্তম অনুশীলন (Best Practice)
ইউজারের ইন্টারঅ্যাকশন ছাড়া আধুনিক ব্রাউজারগুলো অটো-প্লে করতে দেয় না। তাই সবসময় মাউস ক্লিক ইভেন্টের ভেতর AudioContext চালু করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অডিও নোডগুলোকে আউটপুট ডেস্টিনেশন স্পিকারের (\`audioContext.destination\`) সাথে যুক্ত না করে প্লে করা, যার ফলে কোনো শব্দ শোনা যায় না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ক্লিকের ওপর অডিও চালু করা হচ্ছে
document.getElementById("play-btn").addEventListener("click", () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // ১. সোর্স নোড তৈরি (একটি নির্দিষ্ট সুর তৈরি করবে)
  const oscillator = audioCtx.createOscillator();
  
  // ২. ভলিউম কন্ট্রোল নোড তৈরি
  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // ৫০% ভলিউম
  
  // ৩. নোড সংযোগ: Source -> Volume -> Speakers
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  // sine ওয়েভে ৪৪০হার্টজ এ সুর বাজানো শুরু
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.start();
  
  // ১ সেকেন্ড পর সুর থামিয়ে দেওয়া
  oscillator.stop(audioCtx.currentTime + 1.0);
});
\`\`\``
  },
  {
    id: 'javascript-69',
    title: 'Explain the File API and FileReader utility.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'File API', 'FileReader', 'Browser API'],
    enAnswer: 'The File API allows client-side code to read user-selected local files. FileReader reads files asynchronously into Base64 URLs or text strings.',
    bnAnswer: 'File API ক্লায়েন্ট-সাইড কোডকে ইউজারের লোকাল ফাইল রিড করতে দেয়। FileReader ফাইলকে বেস-৬৪ ইউআরএল বা টেক্সট স্ট্রিংয়ে অ্যাসিনক্রোনাসলি রিড করে।',
    enExplanation: `### Explanation
- **File API**: Exposes the \`FileList\` object through \`<input type="file">\` elements and Drag and Drop transfers. Files are read-only representation objects containing name, size, and mime-type.
- **\`FileReader\`**: Asynchronously reads files:
  - \`readAsDataURL(file)\`: Converts images/assets into base64 strings (ideal for previewing images).
  - \`readAsText(file)\`: Converts text/JSON files into strings.
  - \`readAsArrayBuffer(file)\`: Reads binary buffers for processing.

### Real-World Example
Uploading avatars. Before transmitting the image file to the backend server, you can use \`FileReader\` to convert the image to a base64 DataURL and render a preview in the UI instantly.

### Best Practice
Check file size (\`file.size\`) and mime-type (\`file.type\`) before starting the FileReader process to reject oversized files early.

### Common Mistakes
Trying to read the result before the load completes. \`FileReader\` is asynchronous; you must access the result inside the \`onload\` event listener.

### Code Example
\`\`\`javascript
// HTML: <input type="file" id="file-selector" />

const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", (event) => {
  const file = event.target.files[0]; // Grab first file
  
  if (file) {
    const reader = new FileReader();
    
    // Event triggered once reading completes
    reader.onload = (e) => {
      const base64Url = e.target.result;
      console.log("Base64 URL generated!");
      // Set to img tag: imagePreview.src = base64Url;
    };
    
    // Start reading file as Base64 Data URL
    reader.readAsDataURL(file);
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **File API**: \`<input type="file">\` বা ড্র্যাগ-অ্যান্ড-ড্রপ ট্রান্সফারের মাধ্যমে ফাইল রিড করার মেথড দেয়। এটি একটি রিড-অনলি অবজেক্ট যা ফাইলের নাম, সাইজ এবং টাইপ ধারণ করে।
- **\`FileReader\`**: অ্যাসিনক্রোনাসলি ফাইলগুলো রিড করে:
  - \`readAsDataURL(file)\`: ইমেজ ফাইলকে বেস-৬৪ টেক্সট ফরম্যাটে কনভার্ট করে (ছবি প্রিভিউ দেখানোর জন্য সেরা)।
  - \`readAsText(file)\`: টেক্সট বা সিএসভি ফাইলকে স্ট্রিংয়ে রূপান্তর করে।
  - \`readAsArrayBuffer(file)\`: বাইনারি প্রসেসিংয়ের জন্য বাফার লোড করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার প্রোফাইল পিকচার আপলোড করা। ইমেজ ফাইলটি সরাসরি সার্ভারে পাঠানোর আগে \`FileReader\` দিয়ে বেস-৬৪ ইউআরএল জেনারেট করে সাথে সাথে স্ক্রিনে ছবিটির লাইভ প্রিভিউ দেখানো।

### উত্তম অনুশীলন (Best Practice)
ফাইল রিড করা শুরু করার পূর্বেই ফাইলের সাইজ (\`file.size\`) এবং ফরম্যাট (\`file.type\`) চেক করে প্রটেক্ট করুন যাতে অতিরিক্ত বড় ফাইল ব্রাউজার ক্র্যাশ না করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফাইল রিড প্রসেস শেষ হওয়ার আগেই রেজাল্ট পাওয়ার চেষ্টা করা। \`FileReader\` অ্যাসিনক্রোনাস কাজ করে, তাই রেজাল্ট অবশ্যই \`onload\` লিসেনার ফাংশনের ভেতর রিড করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// HTML: <input type="file" id="file-selector" />

const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", (event) => {
  const file = event.target.files[0]; // প্রথম ফাইলটি রিসিভ করা
  
  if (file) {
    const reader = new FileReader();
    
    // ফাইল রিড করা শেষ হলে এই ইভেন্ট ফায়ার হবে
    reader.onload = (e) => {
      const base64Url = e.target.result;
      console.log("বেস-৬৪ ইউআরএল তৈরি হয়েছে!");
      // img ট্যাগের সোর্স হিসেবে সেট করুন: imagePreview.src = base64Url;
    };
    
    // বেস-৬৪ ডাটা হিসেবে ফাইল রিড করা শুরু হলো
    reader.readAsDataURL(file);
  }
});
\`\`\``
  },
  {
    id: 'javascript-70',
    title: 'Explain Blob and Object URL in JavaScript and memory cleaning.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Blobs', 'Object URL', 'Memory Management'],
    enAnswer: 'A Blob represents raw binary data. URL.createObjectURL creates a temporary URL linking to the Blob in browser memory, which must be revoked manually using URL.revokeObjectURL.',
    bnAnswer: 'Blob কাঁচা বাইনারি ডাটা রিপ্রেজেন্ট করে। URL.createObjectURL ব্রাউজার মেমরিতে ফাইল লিঙ্ক তৈরি করে, যা URL.revokeObjectURL দিয়ে রিলিজ করতে হয়।',
    enExplanation: `### Explanation
- **Blob (Binary Large Object)**: Represents raw binary data that can be read as text or binary buffer.
- **Object URL (Blob URL)**: Synthesized using \`URL.createObjectURL(blob)\`. Generates a string URL pointing directly to the memory address of the Blob inside the browser tab context. E.g. \`blob:http://domain/uuid\`.
- **Memory Release**: These URLs remain bound to memory until the tab closes. You must call \`URL.revokeObjectURL(url)\` to free up system memory once the asset is rendered or downloaded.

### Real-World Example
Downloading dynamic PDF or CSV files generated on the client side. You wrap the CSV string into a Blob, generate an Object URL, trigger a virtual click on an \`<a>\` download link, and immediately revoke the URL afterwards.

### Best Practice
Always revoke Object URLs immediately after they are loaded by the DOM target (like inside the image \`onload\` callback) to prevent browser memory leaks.

### Common Mistakes
Generating hundreds of Object URLs in single-page apps without revoking them. The browser memory will leak, eventually causing the tab to crash.

### Code Example
\`\`\`javascript
const data = "name,email\\nRohit,r@test.com";
const blob = new Blob([data], { type: "text/csv" });

// Generate temporary memory URL
const objectUrl = URL.createObjectURL(blob);
console.log(objectUrl); // "blob:http://localhost:5173/some-uuid"

// Trigger download
const downloadLink = document.createElement("a");
downloadLink.href = objectUrl;
downloadLink.download = "users.csv";
document.body.appendChild(downloadLink);
downloadLink.click();

// Cleanup
document.body.removeChild(downloadLink);
URL.revokeObjectURL(objectUrl); // Free up browser memory!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Blob (বাইনারি লার্জ অবজেক্ট)**: এটি কাঁচা বা র (raw) বাইনারি ডেটা প্রকাশ করে যা টেক্সট বা বাফার হিসেবে রিড করা যায়।
- **Object URL (Blob URL)**: \`URL.createObjectURL(blob)\` দিয়ে এটি তৈরি হয়। এটি সরাসরি ব্রাউজারের র‍্যামে থাকা ফাইলটির মেমরি লোকেশন লিঙ্ক স্ট্রিং হিসেবে প্রদান করে (যেমন: \`blob:http://domain/uuid\`)।
- **মেমরি রিলিজ**: সেশন শেষ না হওয়া পর্যন্ত এই লিঙ্কগুলো ব্রাউজার মেমরি ব্লক করে রাখে। ফাইল ডাউনলোড বা ভিউ করা শেষ হওয়ার সাথে সাথে \`URL.revokeObjectURL(url)\` কল করে মেমরি রিলিজ করা আবশ্যক।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ক্লায়েন্ট সাইডে ডাইনামিকালি CSV বা PDF ফাইল তৈরি করে ডাউনলোড করানো। টেক্সট ডাটাকে Blob বানিয়ে, তার Object URL জেনারেট করে ডাউনলোড করানো এবং কাজ শেষ হওয়া মাত্রই লিঙ্কটি ক্লিয়ার করে ফেলা।

### উত্তম অনুশীলন (Best Practice)
DOM নোডে (যেমন: img ট্যাগের সোর্স) অবজেক্ট ইউআরএল লোড হয়ে যাওয়ার পরপরই তা \`URL.revokeObjectURL()\` মেথড দিয়ে রিলিজ করে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সিঙ্গেল পেজ অ্যাপে শত শত অবজেক্ট ইউআরএল তৈরি করা কিন্তু রিভোক (revoke) করতে ভুলে যাওয়া। এটি সাইলেন্ট মেমরি লিক তৈরি করে ও একপর্যায়ে ট্যাব ক্র্যাশ করায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const data = "name,email\\nRohit,r@test.com";
const blob = new Blob([data], { type: "text/csv" });

// সাময়িক মেমরি ইউআরএল জেনারেট করা হলো
const objectUrl = URL.createObjectURL(blob);
console.log(objectUrl); // "blob:http://localhost:5173/some-uuid"

// ডাউনলোড ট্রিগার করা
const downloadLink = document.createElement("a");
downloadLink.href = objectUrl;
downloadLink.download = "users.csv";
document.body.appendChild(downloadLink);
downloadLink.click();

// ডম থেকে রিমুভ ও মেমরি খালি করা
document.body.removeChild(downloadLink);
URL.revokeObjectURL(objectUrl); // ব্রাউজারের মেমরি ফিজিক্যালি ফাঁকা করলো!
\`\`\``
  }
];
