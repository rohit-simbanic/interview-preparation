import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'node-express-1',
    title: 'What is Node.js and how does it differ from client-side JavaScript?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Architecture', 'V8'],
    enAnswer: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, running on the server side using Google V8 engine. Client-side JS runs inside a browser sandbox with DOM APIs, while Node.js has access to filesystem, network sockets, and OS API.',
    bnAnswer: 'Node.js হলো একটি ওপেন-সোর্স, ক্রস-প্ল্যাটফর্ম জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট যা ব্রাউজারের বাইরে সার্ভার-সাইডে গুগল ভি৮ ইঞ্জিনের সাহায্যে জাভাস্ক্রিপ্ট রান করে। ব্রাউজার জাভাস্ক্রিপ্ট ডম (DOM) অ্যাক্সেস করতে পারে কিন্তু সার্ভার রিসোর্স পারে না, অন্য দিকে নোডজেএস সরাসরি ফাইলসিস্টেম, নেটওয়ার্ক ও ওএস এপিআই অ্যাক্সেস করতে পারে।',
    enExplanation: `### Explanation
Node.js was created by Ryan Dahl in 2009. It wraps Google Chrome's V8 JavaScript engine with a low-level C++ platform to enable server-side JavaScript execution.
Differences between Node.js and Client-Side (Browser) JavaScript:
1. **Runtime Environment**: Client JavaScript runs in web browsers (Chrome, Firefox, Safari) inside a secure sandbox. Node.js runs directly on the operating system as a server process.
2. **APIs and Global Object**: Browsers have the \`window\` global object and support Web APIs like the DOM, Fetch API, and Web Audio. Node.js has the \`global\` object and provides access to system APIs (via modules like \`fs\`, \`path\`, \`os\`, \`http\`).
3. **Module System**: Historically, browsers used ES Modules (\`import/export\`) or script tags. Node.js historically used CommonJS (\`require/module.exports\`) and now supports ES Modules as well.
4. **Security**: Browsers enforce strict CORS policies to protect users. Node.js has full control over file reads, writes, and database operations.

### Real-World Example
In a full-stack system, a browser client-side JS captures a button click and calls a REST API:
\`\`\`javascript
// Client-Side Javascript
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`
Node.js runs on the server, receives this HTTP request, queries a database, and returns the user data:
\`\`\`javascript
// Server-Side Node.js
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Rohit' }]));
  }
});
server.listen(3000);
\`\`\`

### Best Practice
Understand the differences in environment before writing code. Do not attempt to use DOM APIs like \`document.getElementById()\` or browser storage APIs like \`localStorage\` inside Node.js, as they will cause execution crashes.

### Common Mistakes
Trying to access browser-specific APIs (such as \`window\`, \`document\`, or \`localStorage\`) in server-side Node.js code, which throws a \`ReferenceError: window is not defined\`.

### Code Example
\`\`\`javascript
// Accessing OS architecture (Node.js API)
const os = require('os');
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
২০০৯ সালে রায়ান ডাল নোডজেএস তৈরি করেন। এটি গুগল ক্রোম ভি৮ ইঞ্জিনকে লো-লেভেল সি++ প্ল্যাটফর্ম দিয়ে র‍্যাপ করে জাভাস্ক্রিপ্ট কোড ব্যাকএন্ডে চালানোর সুযোগ দেয়।
ক্লায়েন্ট-সাইড (ব্রাউজার) ও নোডজেএস-এর মধ্যে মূল পার্থক্যসমূহ:
১. **রানটাইম এনভায়রনমেন্ট**: ক্লায়েন্ট জাভাস্ক্রিপ্ট ব্রাউজারে একটি সুরক্ষিত স্যান্ডবক্সে রান হয়। নোডজেএস সরাসরি ওএস (OS) এর ওপর সার্ভার প্রসেস হিসেবে রান করে।
২. **এপিআই ও গ্লোবাল অবজেক্ট**: ব্রাউজারে \`window\` অবজেক্ট থাকে এবং সেখানে DOM, Fetch ইত্যাদি ওয়েব এপিআই থাকে। নোডজেএস-এ থাকে \`global\` অবজেক্ট এবং ফাইলসিস্টেম অ্যাক্সেসের জন্য \`fs\`, \`path\` ইত্যাদি মডিউল।
৩. **মডিউল সিস্টেম**: ব্রাউজার স্ক্রিপ্ট ট্যাগ বা আধুনিক ইএস মডিউল ব্যবহার করে। নোডজেএস প্রাথমিকভাবে কমনজেএস (\`require\`) এবং বর্তমানে ইএস মডিউল সমর্থন করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফুল-স্ট্যাক সিস্টেমে ক্লায়েন্ট সাইড এপিআই কল পাঠায়:
\`\`\`javascript
// ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`
সার্ভার সাইডে নোডজেএস এই রিকোয়েস্ট হ্যান্ডেল করে ডেটা রিটার্ন করে:
\`\`\`javascript
// সার্ভার-সাইড নোডজেএস
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Rohit' }]));
  }
});
server.listen(3000);
\`\`\`

### উত্তম অনুশীলন
রানটাইম সম্পর্কে পরিষ্কার ধারণা রাখুন। ব্রাউজারের ডম (DOM) এপিআই যেমন \`document.getElementById\` বা \`localStorage\` নোডজেএস-এ ব্যবহার করবেন না, অন্যথায় রানটাইম ক্র্যাশ করবে।

### সাধারণ ভুলসমূহ
নোডজেএস কোডে ব্রাউজারের এপিআই (\`window\`, \`document\`, \`localStorage\`) কল করা, যার ফলে \`ReferenceError: window is not defined\` এর মতো এরর দেখা দেয়।

### Code Example
\`\`\`javascript
// নোডজেএস এপিআই দিয়ে ওএস-এর তথ্য দেখা
const os = require('os');
console.log("ওএস প্ল্যাটফর্ম:", os.platform());
console.log("সিপিইউ আর্কিটেকচার:", os.arch());
console.log("মোট মেমোরি:", os.totalmem() / (1024 * 1024 * 1024), "GB");
\`\`\``
  },
  {
    id: 'node-express-2',
    title: 'Explain the V8 engine and how Node.js utilizes it.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'V8', 'Compilation'],
    enAnswer: 'The V8 engine is Googles open-source high-performance JavaScript engine written in C++. It compiles JavaScript code directly into native machine code before executing it. Node.js uses V8 to run JS, while binding low-level APIs like file and network access to JavaScript.',
    bnAnswer: 'ভি৮ (V8) হলো গুগলের তৈরি ওপেন-সোর্স হাই-পারফরম্যান্স জাভাস্ক্রিপ্ট ইঞ্জিন যা সি++ এ লেখা। এটি জাভাস্ক্রিপ্ট কোডকে সরাসরি নেটিভ মেশিন কোডে কম্পাইল করে এক্সিকিউট করে। নোডজেএস এই ইঞ্জিন ব্যবহার করে কোড রান করে এবং জাভাস্ক্রিপ্টে লো-লেভেল ফাইল ও নেটওয়ার্ক অ্যাক্সেসের বাইন্ডিং প্রদান করে।',
    enExplanation: `### Explanation
Google V8 translates JavaScript source code into machine-executable instructions. Node.js leverages this engine for fast performance:
1. **Compilation**: Instead of using a traditional interpreter, V8 compiles JavaScript code on-the-fly using Just-In-Time (JIT) compilation.
2. **C++ Bindings**: JavaScript is high-level and cannot access disk space or net sockets directly. Node.js binds C++ libraries (for filesystem/network operations) to JavaScript methods, so when you run \`fs.readFile()\`, V8 executes the JavaScript code and triggers C++ backend interfaces.
3. **Memory Management**: V8 handles memory allocation and garbage collection (freeing unused JavaScript memory) automatically.

### Real-World Example
When you run a JavaScript server script, the V8 engine compiles your routes and calculations into bytecode. If you write an intensive loop calculation, V8 will optimize it to run at near-native CPU speeds.

### Best Practice
Be aware of V8's optimization limits. Write predictable code (e.g. keep object structures stable, avoid using \`delete\` keyword on hot objects, and avoid changing object types dynamically) so V8 can optimize your code efficiently.

### Common Mistakes
Assuming V8 executes all async code. V8 itself is single-threaded and executes synchronous JS. Async I/O tasks are offloaded to Libuv, not V8.

### Code Example
\`\`\`javascript
// V8 memory usage check
const { getHeapStatistics } = require('v8');
console.log("V8 Heap Statistics:");
console.log(getHeapStatistics());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
গুগল ভি৮ জাভাস্ক্রিপ্ট সোর্স কোডকে সরাসরি মেশিন কোডে রূপান্তর করে। নোডজেএস দ্রুত পারফরম্যান্সের জন্য এই ইঞ্জিনটি ব্যবহার করে:
১. **কম্পাইলেশন**: সাধারণ ইন্টারপ্রেটারের বদলে ভি৮ জাস্ট-ইন-টাইম (JIT) কম্পাইলেশন ব্যবহার করে সরাসরি মেশিন কোড তৈরি করে।
২. **সি++ বাইন্ডিংস**: জাভাস্ক্রিপ্ট সরাসরি ডিস্ক বা নেটওয়ার্ক অ্যাক্সেস করতে পারে না। নোডজেএস সি++ লাইব্রেরিগুলোকে জাভাস্ক্রিপ্ট ফাংশনের সাথে বাইন্ড করে দেয়। ফলে \`fs.readFile()\` রান করলে ভি৮ তা প্রসেস করে সি++ লেয়ারে পাঠায়।
৩. **মেমোরি ম্যানেজমেন্ট**: ভি৮ মেমোরি অ্যালোকেশন ও মেমোরি ফ্রি করার জন্য অটোমেটিক গার্বেজ কালেকশন হ্যান্ডেল করে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার স্ক্রিপ্ট রান করার সময় ভি৮ কোডকে বাইটকোডে রূপান্তর করে। আপনি যদি একটি লুপের ভেতর জটিল হিসাব করেন, ভি৮ এটিকে অপ্টিমাইজ করে সিপিইউ স্পিডের কাছাকাছি স্পিডে কোড রান করাবে।

### উত্তম অনুশীলন
ভি৮-এর অপ্টিমাইজেশন সুবিধার জন্য প্রেডিক্টেবল কোড লিখুন। অবজেক্টের স্ট্রাকচার বারবার পরিবর্তন করা (যেমন \`delete\` কীওয়ার্ড দিয়ে অবজেক্ট প্রোপার্টি ডিলিট করা) পরিহার করুন যাতে ভি৮ কোডকে সহজে অপ্টিমাইজ করতে পারে।

### সাধারণ ভুলসমূহ
মনে করা যে সব অ্যাসিনক্রোনাস কাজ ভি৮ সম্পন্ন করে। ভি৮ নিজে সিঙ্গেল-থ্রেডেড এবং এটি কেবল সিনক্রোনাস জাভাস্ক্রিপ্ট কোড এক্সিকিউট করে। অ্যাসিনক্রোনাস কাজগুলো লিবিউভি (Libuv) হ্যান্ডেল করে।

### Code Example
\`\`\`javascript
// ভি৮ মেমোরি স্ট্যাটিস্টিকস চেক করা
const { getHeapStatistics } = require('v8');
console.log("ভি৮ হিপ স্ট্যাটিস্টিকস:");
console.log(getHeapStatistics());
\`\`\``
  },
  {
    id: 'node-express-3',
    title: 'What is Libuv and what is its role in Node.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Libuv', 'Asynchronous', 'Event Loop'],
    enAnswer: 'Libuv is a multi-platform C support library designed for asynchronous I/O. Its primary role in Node.js is providing the Event Loop, asynchronous filesystem operations, DNS resolution, network sockets support, and managing the thread pool for operations that cannot be done asynchronously at OS level.',
    bnAnswer: 'লিবিউভি (Libuv) হলো অ্যাসিনক্রোনাস আই/ও (I/O) অপারেশনের জন্য একটি মাল্টি-প্ল্যাটফর্ম সি++ লাইব্রেরি। নোডজেএস-এ এর মূল কাজ হলো ইভেন্ট লুপ পরিচালনা করা, অ্যাসিনক্রোনাস ফাইলসিস্টেম অ্যাক্সেস, ডিএনএস রেজোলিউশন ও নেটওয়ার্ক সকেট সাপোর্ট দেওয়া এবং অ্যাসিনক্রোনাস থ্রেড পুল ম্যানেজ করা।',
    enExplanation: `### Explanation
Libuv is the engine behind Node.js asynchronous magic. Its key functions are:
1. **Event Loop**: It implements and maintains the core Node.js Event Loop, processing queue tasks and scheduling callbacks.
2. **Thread Pool**: Node.js is single-threaded, but Libuv runs a default pool of 4 C++ threads (can be configured via \`UV_THREADPOOL_SIZE\`). It offloads blocking tasks like database lookups, DNS requests, and file I/O to these worker threads.
3. **OS Asynchronous I/O Interfaces**: For network I/O, Libuv uses native OS facilities like epoll (Linux), kqueue (macOS), or IOCP (Windows) instead of blocking threads.

### Real-World Example
When reading a heavy 5GB file asynchronously:
V8 initiates the \`fs.readFile()\` request. Libuv picks it up, allocates a worker thread from its pool to execute the disk read, and lets the main Node.js thread continue handling other incoming user requests. Once the disk read completes, Libuv schedules the JavaScript callback to execute on the main thread.

### Best Practice
Since Libuv has a default thread pool size of 4, doing heavy crypto computations or parallel filesystem updates can block the pool. Increase thread pool size for large concurrent application servers using \`process.env.UV_THREADPOOL_SIZE\`.

### Common Mistakes
Believing Node.js has absolutely no threads. Node.js utilizes Libuv's thread pool internally for specific tasks, even though JavaScript executes on a single main thread.

### Code Example
\`\`\`javascript
// Demonstrating parallel async tasks running via Libuv threadpool
const crypto = require('crypto');
const start = Date.now();

// Running 4 pbkdf2 hash iterations in parallel (default thread pool size = 4)
for (let i = 0; i < 4; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(\`Hash \${i + 1} finished in:\`, Date.now() - start, "ms");
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিবিউভি (Libuv) হলো নোডজেএস-এর অ্যাসিনক্রোনাস অপারেশনের নেপথ্য কারিগর। এর প্রধান কাজসমূহ:
১. **ইভেন্ট লুপ**: এটি নোডজেএস-এর কোর ইভেন্ট লুপ পরিচালনা করে এবং কলব্যাকগুলো শিডিউল করে।
২. **থ্রেড পুল**: নোডজেএস নিজে সিঙ্গেল-থ্রেডেড হলেও লিবিউভি ব্যাকএন্ডে ৪টি থ্রেড পুল ম্যানেজ করে। ভারী কাজ যেমন ডিএনএস কোয়েরি বা ফাইল রিড এগুলো এই থ্রেড পুলে পাঠিয়ে দেওয়া হয়।
৩. **ওএস আই/ও ইন্টারফেস**: নেটওয়ার্ক অপারেশনের জন্য লিবিউভি ওএস-এর নেটিভ অ্যাসিনক্রোনাস এপিআই (যেমন Linux-এ epoll, macOS-এ kqueue) ব্যবহার করে থ্রেড না আটকেই কাজ শেষ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ৫ জিবির ভারী ফাইল অ্যাসিনক্রোনাসলি পড়ার সময়:
ভি৮ রিড রিকোয়েস্ট তৈরি করে। লিবিউভি এটি গ্রহণ করে ব্যাকএন্ড থ্রেড পুলে ফাইলটি পড়ার দায়িত্ব দেয় এবং মেইন জাভাস্ক্রিপ্ট থ্রেডকে ফ্রি রাখে যাতে অন্যান্য ব্যবহারকারীর রিকোয়েস্ট হ্যান্ডেল করা যায়। ফাইল পড়া শেষ হলে লিবিউভি জাভাস্ক্রিপ্ট কলব্যাকটি মেইন থ্রেডে পুশ করে।

### উত্তম অনুশীলন
ভারী কাজ যেমন ইমেজ প্রসেসিং বা ক্রিপ্টোগ্রাফি অপারেশনের জন্য লিবিউভির ডিফল্ট ৪টি থ্রেড ব্লক হতে পারে। প্রয়োজনে স্টার্টআপ স্ক্রিপ্টে \`process.env.UV_THREADPOOL_SIZE = 12;\` দিয়ে থ্রেড পুল সংখ্যা বাড়িয়ে দিন।

### সাধারণ ভুলসমূহ
মনে করা যে নোডজেএস-এ কোনো থ্রেড নেই। নোডজেএস জাভাস্ক্রিপ্ট কোড চালানোর জন্য সিঙ্গেল থ্রেড ব্যবহার করলেও ইন্টারনাল কাজের জন্য লিবিউভি থ্রেড পুল ব্যবহার করে।

### Code Example
\`\`\`javascript
// লিবিউভি থ্রেড পুলে প্যারালাল ক্রিপ্টো কাজ চালানো
const crypto = require('crypto');
const start = Date.now();

for (let i = 0; i < 4; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(\`হ্যাস \${i + 1} শেষ হতে সময় লেগেছে:\`, Date.now() - start, "ms");
  });
}
\`\`\``
  },
  {
    id: 'node-express-4',
    title: 'Explain Asynchronous vs Synchronous execution in Node.js.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Asynchronous', 'Performance', 'Blocking'],
    enAnswer: 'Synchronous execution blocks the thread until the current operation completes, delaying further code execution. Asynchronous execution is non-blocking; it offloads the operation to system/worker threads and registers a callback, allowing Node.js to execute subsequent code immediately.',
    bnAnswer: 'সিনক্রোনাস এক্সিকিউশন বর্তমান কাজটি শেষ না হওয়া পর্যন্ত থ্রেডকে ব্লক বা আটকে রাখে, যার ফলে পরবর্তী কোড রান হতে পারে না। অ্যাসিনক্রোনাস এক্সিকিউশন হলো নন-ব্লকিং; এটি কাজটিকে ব্যাকএন্ডে পাঠিয়ে একটি কলব্যাক রেজিস্টার করে, ফলে পরবর্তী কোড সাথে সাথেই রান হতে পারে।',
    enExplanation: `### Explanation
Node.js relies on non-blocking I/O to handle thousands of concurrent requests.
- **Synchronous (Blocking)**:
  - Methods end with \`Sync\` (e.g., \`fs.readFileSync()\`).
  - They stop the execution flow. If a database call or file read takes 5 seconds, the server remains frozen and cannot serve other users during those 5 seconds.
- **Asynchronous (Non-Blocking)**:
  - Uses Callbacks, Promises, or Async/Await (e.g., \`fs.readFile()\`).
  - The operation is handed off to Libuv, and execution moves to the next line of code immediately. Once the async task completes, its callback is queued in the event loop.

### Real-World Example
Suppose 2 users visit a site. User A requests a heavy document read.
- Under **Synchronous design**: User B has to wait until User A's file finishes reading.
- Under **Asynchronous design**: User A's request starts reading. While it reads, Node.js serves User B immediately.

### Best Practice
Avoid using synchronous methods (\`Sync\`) in request-response cycles on production servers, as they block the entire server thread. Reserve synchronous APIs for initial application startup configurations (like loading \`.env\` variables or config files once).

### Common Mistakes
Mixing sync and async code incorrectly, expecting async responses to be available immediately on the next line without waiting for resolution.

### Code Example
\`\`\`javascript
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'test.txt');

// Create dummy file for test
fs.writeFileSync(file, 'Hello Node.js');

// 1. Asynchronous (Non-blocking) - RECOMMENDED
console.log("Async Read Start");
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log("Async Data:", data); // prints second
});
console.log("Async Read Ended? (No, code keeps running!)"); // prints first

// Clean up
setTimeout(() => fs.unlinkSync(file), 100);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
হাজার হাজার রিকোয়েস্ট একসাথে হ্যান্ডেল করার জন্য নোডজেএস নন-ব্লকিং আই/ও ব্যবহার করে।
- **সিনক্রোনাস (ব্লকিং)**:
  - কোড ফাইলে ফাংশনের শেষে \`Sync\` লিখা থাকে (যেমন: \`fs.readFileSync()\`)।
  - এটি এক্সিকিউশন আটকে দেয়। ফাইল পড়তে বা ডেটাবেস কোয়েরিতে যদি ৫ সেকেন্ড সময় লাগে, তবে পুরো ৫ সেকেন্ড সার্ভার থমকে থাকবে এবং অন্য কোনো ইউজার অ্যাক্সেস করতে পারবে না।
- **অ্যাসিনক্রোনাস (নন-ব্লকিং)**:
  - কলব্যাক, প্রমিজ অথবা অ্যাসিনক/অ্যাওয়েট ব্যবহার করে রান হয় (যেমন: \`fs.readFile()\`)।
  - অপারেশনটি শুরু করে ও পরের লাইনে চলে যায়। কাজ শেষ হলে তার কলব্যাকটি ইভেন্ট লুপের কিউতে যোগ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারে দুজন ইউজার ভিজিট করলেন। ইউজার A একটি বড় পিডিএফ ফাইল রিকোয়েস্ট করলেন।
- **সিনক্রোনাস লেআউটে**: ফাইল পড়া শেষ না হওয়া পর্যন্ত ইউজার B-এর পেজ লোড হবে না।
- **অ্যাসিনক্রোনাস লেআউটে**: ফাইল পড়া শুরু করে নোডজেএস ব্যস্ত হয়ে যায় এবং সাথে সাথে ইউজার B-এর রিকোয়েস্ট হ্যান্ডেল করে রেসপন্স পাঠিয়ে দেয়।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে ক্লায়েন্ট রিকোয়েস্ট সাইকেলে কখনো সিনক্রোনাস (\`Sync\`) ফাংশন ব্যবহার করবেন না। সিনক্রোনাস ফাংশনগুলো কেবল প্রজেক্ট স্টার্টআপে কনফিগারেশন লোড করার মতো এককালীন কাজের জন্য ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সিনক্রোনাস ও অ্যাসিনক্রোনাস কোড একসাথে লিখে গুলিয়ে ফেলা এবং অ্যাসিনক্রোনাস কাজ শেষ হওয়ার আগেই তার আউটপুট পরবর্তী লাইনে সরাসরি আশা করা।

### Code Example
\`\`\`javascript
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'test.txt');

// টেস্ট ফাইল তৈরি
fs.writeFileSync(file, 'হ্যালো নোডজেএস');

// ১. অ্যাসিনক্রোনাস (নন-ব্লকিং) - রিকমেন্ডেড
console.log("অ্যাসিনক রিড শুরু");
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log("অ্যাসিনক ডেটা:", data); // এটি পরে প্রিন্ট হবে
});
console.log("পরবর্তী লাইন এক্সিকিউট হলো"); // এটি আগে প্রিন্ট হবে

// ক্লিনআপ
setTimeout(() => fs.unlinkSync(file), 100);
\`\`\``
  },
  {
    id: 'node-express-5',
    title: 'What is the Event Loop in Node.js and how does it work conceptually?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Event Loop', 'Execution', 'Libuv'],
    enAnswer: 'The Event Loop is a continuous loop managed by Libuv that allows Node.js to perform non-blocking I/O operations. It conceptualizes the execution of code by constantly checking if the call stack is empty, and pushing callbacks from the callback queue to the execution stack.',
    bnAnswer: 'ইভেন্ট লুপ হলো লিবিউভি দ্বারা পরিচালিত একটি অবিরত লুপ যা নোডজেএস-কে নন-ব্লকিং আই/ও সম্পাদন করতে সাহায্য করে। এটি কল স্ট্যাক খালি আছে কিনা তা পর্যবেক্ষণ করে এবং কলব্যাক কিউ (Callback Queue) থেকে পেন্ডিং ফাংশনগুলোকে কল স্ট্যাকে পাঠিয়ে কোড এক্সিকিউট করে।',
    enExplanation: `### Explanation
The Event Loop executes on the main thread and coordinates the execution flow:
1. **Call Stack**: JavaScript executes functions here (LIFO - Last In First Out).
2. **Web APIs / OS Bindings**: Asynchronous jobs are registered and monitored here.
3. **Callback Queue**: Once an async task finishes, its callback enters this queue.
4. **The Loop Mechanism**: If the Call Stack is completely empty, the Event Loop takes the first callback from the queue and pushes it onto the Call Stack to be run.

This allows Node.js to achieve concurrency on a single thread. It doesn't run code in parallel, but it shifts rapidly between waiting for events and running their respective callbacks.

### Real-World Example
Consider ordering food at a restaurant:
- **Blocking**: The waiter takes your order, runs to the kitchen, waits 15 minutes for the food, and brings it to you before taking the next order.
- **Event Loop**: The waiter takes your order, submits it to the kitchen, and immediately goes to serve the next customer. When the kitchen bells ring (event complete), the waiter serves your food.

### Best Practice
Never block the event loop. Avoid running CPU-heavy calculations (like JSON processing of huge arrays, zip compressions, or crypto work) directly on the main thread, as this will starve the Event Loop and make the server unresponsive.

### Common Mistakes
Believing the event loop spawns a new thread for every callback. The loop itself runs on a single main thread; callbacks are executed sequentially, not in parallel.

### Code Example
\`\`\`javascript
console.log("Step 1: Synchronous");

// Scheduled to run after Call Stack is empty
setTimeout(() => {
  console.log("Step 2: Timeout Callback");
}, 0);

console.log("Step 3: Synchronous");
// Output order: Step 1, Step 3, Step 2
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইভেন্ট লুপ নোডজেএস-এর মেইন থ্রেডে চলে এবং কোডের কার্যপ্রবাহের সমন্বয় করে:
১. **কল স্ট্যাক (Call Stack)**: যেখানে জাভাস্ক্রিপ্ট ফাংশনগুলো একের পর এক এসে এক্সিকিউট হয়।
২. **ওএস বাইন্ডিংস**: অ্যাসিনক্রোনাস কাজগুলো ওএস বা ব্যাকএন্ডে রান হয়।
৩. **কলব্যাক কিউ (Callback Queue)**: অ্যাসিনক্রোনাস কাজ শেষ হলে তাদের কলব্যাক ফাংশনগুলো এই লাইনে এসে অপেক্ষা করে।
৪. **লুপ প্রক্রিয়া**: ইভেন্ট লুপ সর্বদা চেক করে কল স্ট্যাক খালি আছে কিনা। কল স্ট্যাক সম্পূর্ণ খালি হলে এটি কলব্যাক কিউ থেকে প্রথম কাজটিকে কল স্ট্যাকে পাঠিয়ে রান করায়।

### বাস্তব-ভিত্তিক উদাহরণ
রেস্টুরেন্টে খাবার অর্ডারের মতো চিন্তা করুন:
- **ব্লকিং**: ওয়েটার আপনার অর্ডার নিয়ে কিচেনে গেল এবং ১৫ মিনিট দাঁড়িয়ে অপেক্ষা করে খাবার নিয়ে আসার পর পরবর্তী কাস্টমারের অর্ডার নিতে পারল।
- **ইভেন্ট লুপ**: ওয়েটার আপনার অর্ডার কিচেনে পাঠিয়ে দিয়ে সাথে সাথে পাশের টেবিলে চলে গেল। কিচেন থেকে বেল বাজলে (ইভেন্ট কমপ্লিট) ওয়েটার খাবার এনে টেবিলে দিল।

### উত্তম অনুশীলন
ইভেন্ট লুপ কখনো ব্লক করবেন না। সিপিইউর জন্য ভারী হিসাব (যেমন বিশাল বড় অ্যারে বা জেএসন পার্সিং) মেইন থ্রেডে সরাসরি চালাবেন না, কারণ এর ফলে ইভেন্ট লুপ আটকে যাবে এবং সার্ভার সাময়িকভাবে কাজ করা বন্ধ করে দেবে।

### সাধারণ ভুলসমূহ
মনে করা যে ইভেন্ট লুপ প্রতিটি কলব্যাকের জন্য নতুন নতুন থ্রেড তৈরি করে। ইভেন্ট লুপ একটিমাত্র থ্রেডে রান করে এবং সবগুলো কলব্যাক সিরিয়ালি একটির পর একটি রান হয়।

### Code Example
\`\`\`javascript
console.log("ধাপ ১: সিনক্রোনাস");

// স্ট্যাক খালি হওয়ার পর রান করার জন্য শিডিউল করা
setTimeout(() => {
  console.log("ধাপ ২: টাইমআউট কলব্যাক");
}, 0);

console.log("ধাপ ৩: সিনক্রোনাস");
// আউটপুট প্রিন্ট হওয়ার ক্রম: ধাপ ১, ধাপ ৩, ধাপ ২
\`\`\``
  },
  {
    id: 'node-express-6',
    title: 'Explain the global object in Node.js and how it differs from window in the browser.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Global', 'Window', 'Scope'],
    enAnswer: 'In Node.js, global is the top-level namespace object, similar to window in browsers. Variables declared with var at the file level in Node.js do not attach to the global object (they are scoped to the module file), whereas they attach to window in browser client scripts.',
    bnAnswer: 'নোডজেএস-এ global হলো শীর্ষ স্তরের নেমস্পেস অবজেক্ট, যা ব্রাউজারের window অবজেক্টের সমতুল্য। তবে ব্রাউজারে ফাইল লেভেলে var দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে তা window-তে যুক্ত হয়, কিন্তু নোডজেএস-এ মডিউল স্কোপের কারণে তা global অবজেক্টে যুক্ত হয় না।',
    enExplanation: `### Explanation
Both \`global\` (Node.js) and \`window\` (Browser) hold standard JavaScript functions like \`setTimeout\`, \`console\`, and constructor functions like \`Object\`.
Key differences:
1. **Modular Scope**: Node.js automatically wraps each file inside an IIFE module wrapper function. Therefore, typing \`var x = 10;\` in a Node file makes it local to that file. In a browser, writing \`var x = 10;\` in a global script mounts it to \`window.x\`.
2. **APIs**: \`window\` has DOM coordinates, screen sizes, and browser histories. \`global\` has access to backend process controls via the \`process\` object and module identifiers like \`module\` and \`exports\`.
3. **Cross-environment Standard**: In modern JavaScript, \`globalThis\` is standardized to access the global object regardless of the environment (it evaluates to \`window\` in browsers and \`global\` in Node.js).

### Real-World Example
If you want to configure a global state across your entire backend application (e.g. database setup parameters or app start times), you can mount it to \`global\`.

### Best Practice
Avoid polluting the global namespace. Modifying the \`global\` object makes code difficult to trace, test, and can lead to naming collisions between third-party modules. Use exports/imports to share constants and data instead.

### Common Mistakes
Writing \`global.myVar = 'value'\` inside files, which breaks encapsulation and modularity principles. Use ESM or CommonJS exports.

### Code Example
\`\`\`javascript
// Declaring variable in Node.js file scope
var localVal = 'Visible only in this file';
console.log("Is on global?:", global.localVal); // undefined

// Manually assigning to global
global.appStartTime = Date.now();
console.log("App started at:", global.appStartTime); // returns timestamp
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`global\` (নোডজেএস) এবং \`window\` (ব্রাউজার) উভয়ই গ্লোবাল অবজেক্ট যা \`setTimeout\`, \`console\` ইত্যাদি কমন মেথডগুলো ধারণ করে।
মূল পার্থক্যসমূহ:
১. **মডিউল স্কোপ**: নোডজেএস প্রতিটি ফাইলকে একটি নিজস্ব মডিউল স্কোপ ফাংশনের ভেতর র‍্যাপ করে। ফলে ফাইলে \`var x = 10;\` লিখলে সেটি কেবল ওই ফাইলের লোকাল ভ্যারিয়েবল হিসেবে থাকে। কিন্তু ব্রাউজারে এটি উইন্ডো অবজেক্টে (\`window.x\`) সরাসরি যুক্ত হয়ে যায়।
২. **সংযুক্ত এপিআই**: \`window\` এর সাথে ব্রাউজারের হিস্ট্রি বা স্ক্রিন সাইজের অবজেক্ট থাকে। \`global\` এর সাথে ওএস রিকোয়েস্ট কন্ট্রোল করার জন্য \`process\`, \`module\` ইত্যাদি ব্যাকএন্ড এপিআই থাকে।
৩. **স্ট্যান্ডার্ড অ্যাক্সেস**: আধুনিক জাভাস্ক্রিপ্টে সব রানটাইমে গ্লোবাল অবজেক্ট অ্যাক্সেস করার জন্য \`globalThis\` কীওয়ার্ড প্রবর্তন করা হয়েছে।

### বাস্তব-ভিত্তিক উদাহরণ
পুরো অ্যাপ্লিকেশনের শেয়ার্ড রিসোর্স (যেমন ডাটাবেস কালেকশন অবজেক্ট বা অ্যাপের স্টার্ট টাইম) ফাইল রিড না করে এক্সেস করতে চাইলে \`global\` অবজেক্টে সেট করা যায়।

### উত্তম অনুশীলন
গ্লোবাল অবজেক্ট ভরাট বা পল্যুট করা পরিহার করুন। গ্লোবাল অবজেক্টের ওপর ভ্যারিয়েবল রাখলে কোড ট্র্যাক করা কঠিন হয়ে যায় এবং এটি মডিউলগুলোর মধ্যে নেইম স্পেস কনফ্লিক্ট তৈরি করতে পারে। মডিউল রিকোয়ার/ইম্পোর্ট মেকানিজম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`global.db = dbConnection\` এর মতো কোড লেখা যা মডিউল এনক্যাপসুলেশন ভঙ্গ করে। ডাটাবেস সার্ভিস এক্সপোর্ট করে শেয়ার করা উত্তম।

### Code Example
\`\`\`javascript
// ফাইল স্কোপের ভ্যারিয়েবল ডিক্লেয়ারেশন
var localVal = 'Visible only in this file';
console.log("গ্লোবালে কি আছে?:", global.localVal); // undefined

// ম্যানুয়ালি গ্লোবালে সেট করা
global.appStartTime = Date.now();
console.log("অ্যাপ স্টার্ট টাইম:", global.appStartTime); // টাইমস্ট্যাম্প দেখাবে
\`\`\``
  },
  {
    id: 'node-express-7',
    title: 'What is the difference between CommonJS and ES Modules in Node.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'CommonJS', 'ES Modules', 'Syntax'],
    enAnswer: 'CommonJS is Node.js traditional module system using require() and module.exports, which loads modules synchronously at runtime. ES Modules is the modern standard using import and export, which loads modules asynchronously at compile time and is native to browsers.',
    bnAnswer: 'কমনজেএস (CommonJS) হলো নোডজেএস-এর ঐতিহ্যবাহী মডিউল সিস্টেম যা require() এবং module.exports ব্যবহার করে রানটাইমে সিনক্রোনাসলি মডিউল লোড করে। ইএস মডিউল (ES Modules) হলো আধুনিক স্ট্যান্ডার্ড যা import এবং export ব্যবহার করে কম্পাইল টাইমে অ্যাসিনক্রোনাসলি মডিউল লোড করে।',
    enExplanation: `### Explanation
Comparison between CommonJS (CJS) and ES Modules (ESM):
1. **Syntax**:
   - CJS: \`const math = require('./math'); module.exports = { add };\`
   - ESM: \`import { add } from './math.js'; export { add };\`
2. **Execution Timing**:
   - CJS resolves dependencies dynamically at runtime (you can do conditional requires: \`if (cond) require('x')\`).
   - ESM is analyzed statically at compile time before execution, which allows optimization like tree-shaking (removing unused code).
3. **Global Variables**:
   - CJS includes global module helper variables like \`__dirname\` and \`__filename\`.
   - ESM does not contain these variables; you must resolve them using \`import.meta.url\` and the \`url\` module.
4. **Activation**:
   - Node.js defaults to CommonJS. To enable ESM, use \`.mjs\` file extension or write \`"type": "module"\` inside \`package.json\`.

### Real-World Example
In older Node.js versions, dependencies were loaded line-by-line synchronously. Modern build tools and Node environments use ESM because it allows bundle size reductions by filtering out unused functions.

### Best Practice
Prefer using ES Modules (\`import/export\`) for new projects since it is the official JavaScript standard supported by both modern Node.js versions and frontend browsers.

### Common Mistakes
Trying to use \`__dirname\` or \`__filename\` directly inside ES Modules, which throws a \`ReferenceError\`. Instead, calculate them using \`import.meta.url\`.

### Code Example
\`\`\`javascript
// 1. CommonJS (math.js)
// module.exports = { add: (a, b) => a + b };
// const { add } = require('./math');

// 2. ES Modules equivalent of directory path resolution:
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("ESM Dirname:", __dirname);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কমনজেএস (CJS) ও ইএস মডিউল (ESM) এর মধ্যকার তুলনা:
১. **সিনট্যাক্স**:
   - CJS: \`const math = require('./math'); module.exports = { add };\`
   - ESM: \`import { add } from './math.js'; export { add };\`
২. **এক্সিকিউশন টাইম**:
   - CJS রানটাইমে ডাইনামিকালি রিকোয়ার করে (যেমন কন্ডিশনাল রিকোয়ার: \`if (cond) require('x')\`)।
   - ESM রান করার আগেই স্ট্যাটিকালি অ্যানালাইসিস সম্পন্ন করে কম্পাইল টাইমে। এর ফলে অপ্রয়োজনীয় কোড সহজে ট্রিম (tree-shaking) করা যায়।
৩. **এনভায়রনমেন্ট ভ্যারিয়েবল**:
   - CJS-এ \`__dirname\` এবং \`__filename\` সরাসরি পাওয়া যায়।
   - ESM-এ এগুলো থাকে না; এগুলোকে \`import.meta.url\` দিয়ে জেনারেট করে নিতে হয়।
৪. **চালু করার নিয়ম**:
   - নোডজেএস ডিফল্টভাবে কমনজেএস রান করে। ইএস মডিউল চালু করতে \`package.json\`-এ \`"type": "module"\` ব্যবহার করতে হয় অথবা ফাইল এক্সটেনশন \`.mjs\` দিতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
পুরোনো নোডজেএস প্রজেক্টে ফাইলগুলো সিনক্রোনাসলি ইম্পোর্ট করতে কমনজেএস ব্যবহৃত হতো। আধুনিক প্রজেক্টে বান্ডেল সাইজ অপ্টিমাইজ করার জন্য ইএস মডিউল ব্যবহার করা হয়।

### উত্তম অনুশীলন
নতুন প্রজেক্টের ক্ষেত্রে ইএস মডিউল ব্যবহার করুন, কারণ এটি জাভাস্ক্রিপ্টের অফিশিয়াল স্ট্যান্ডার্ড যা ব্রাউজার এবং নোডজেএস উভয় রানটাইমই নেটিভলি সমর্থন করে।

### সাধারণ ভুলসমূহ
ইএস মডিউলের ভেতরে সরাসরি \`__dirname\` বা \`__filename\` ব্যবহার করা, যার ফলে \`ReferenceError\` দেখাবে।

### Code Example
\`\`\`javascript
// ১. কমনজেএস (math.js)
// module.exports = { add: (a, b) => a + b };
// const { add } = require('./math');

// ২. ইএস মডিউলে __dirname বের করার উপায়:
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("ইএসএম ডিরেক্টরি পাথ:", __dirname);
\`\`\``
  },
  {
    id: 'node-express-8',
    title: 'Explain the core fs (File System) module and how to read files asynchronously.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'File System', 'Promises', 'Asynchronous'],
    enAnswer: 'The fs module provides APIs to interact with the file system. Asynchronous file reads can be done using callback functions (fs.readFile) or Promise-based syntax (fs.promises.readFile with async/await), which avoids blocking the single main thread during disk read processes.',
    bnAnswer: 'fs মডিউল নোডজেএস-এ ওএস-এর ফাইলসিস্টেম অ্যাক্সেস করার এপিআই প্রদান করে। অ্যাসিনক্রোনাস ফাইল রিড করার জন্য কলব্যাক ফাংশন (fs.readFile) অথবা প্রমিজ-ভিত্তিক (fs.promises.readFile) সিনট্যাক্স ব্যবহার করা হয়, যা ডিস্ক থেকে ফাইল রিডের সময় মেইন থ্রেডকে ব্লক হওয়া থেকে বাঁচায়।',
    enExplanation: `### Explanation
The \`fs\` module is one of Node's most popular built-in APIs.
1. **Sync vs Async vs Promises**:
   - \`fs.readFileSync()\`: Synchronous, blocking.
   - \`fs.readFile()\`: Asynchronous, requires a callback function.
   - \`fs.promises.readFile()\` or \`require('fs/promises')\`: Returns a Promise, ideal for clean \`async/await\` structure.
2. **Buffer vs String**: By default, reading a file returns raw binary data as a \`Buffer\`. You must pass an encoding option like \`'utf8'\` to receive a JavaScript string.

### Real-World Example
In APIs that read dynamic text templates, configuration files, or user attachments, async operations allow the server to process concurrent requests without freezing during heavy disk reads.

### Best Practice
Always default to \`fs/promises\` or stream-based reads. Avoid using synchronous operations (\`readFileSync\`) in HTTP handler code, as they freeze the entire application loop.

### Common Mistakes
Forgetting to specify the text encoding (like \`utf8\`) when calling \`readFile\`, causing Node to return a raw buffer of binary bytes instead of readable text.

### Code Example
\`\`\`javascript
const fs = require('fs/promises');
const path = require('path');

async function readConfigFile() {
  const filePath = path.join(__dirname, 'config.json');
  
  // Write a dummy file first
  await fs.writeFile(filePath, JSON.stringify({ port: 3000 }));

  try {
    // Read asynchronously with utf8 encoding
    const data = await fs.readFile(filePath, 'utf8');
    const config = JSON.parse(data);
    console.log("Server Configured Port:", config.port);
  } catch (error) {
    console.error("Error reading file:", error.message);
  } finally {
    // Clean up
    await fs.unlink(filePath);
  }
}

readConfigFile();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস-এর বহুল ব্যবহৃত কোর মডিউলগুলোর মধ্যে \`fs\` অন্যতম।
১. **সিনক বনাম অ্যাসিনক বনাম প্রমিজ**:
   - \`fs.readFileSync()\`: সিনক্রোনাস, এক্সিকিউশন বন্ধ রাখে।
   - \`fs.readFile()\`: অ্যাসিনক্রোনাস, কলব্যাক ফাংশন গ্রহণ করে।
   - \`fs.promises.readFile()\`: প্রমিজ রিটার্ন করে, যা \`async/await\` এর সাহায্যে ক্লিন কোড লিখতে সাহায্য করে।
২. **বাফার বনাম স্ট্রিং**: ডিফল্টভাবে ফাইল রিড করলে বাইনারি বাফার রিটার্ন করে। মানুষের পাঠযোগ্য স্ট্রিং পেতে হলে অবশ্যই এনকোডিং ভ্যালু (যেমন \`utf8\`) দিতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের কোনো এপিআই যখন ডায়নামিক টেমপ্লেট ফাইল বা ডক ফাইল রিড করে পাঠায়, তখন অ্যাসিনক্রোনাস অপারেশন ব্যবহার করা উচিত যাতে ডিস্ক রিড সম্পন্ন হওয়ার সময়েও সার্ভার সচল থাকে।

### উত্তম অনুশীলন
সবসময় \`fs/promises\` বা স্ট্রিম ব্যবহার করুন। এপিআই রিকোয়েস্টের ভেতর কখনো \`readFileSync\` ব্যবহার করবেন না, কারণ এটি রিকোয়েস্ট প্রসেসিংয়ের সময় পুরো অ্যাপ্লিকেশন লুপকে আটকে দেয়।

### সাধারণ ভুলসমূহ
এনকোডিং ভ্যালু (যেমন \`utf8\`) দিতে ভুলে যাওয়া, যার ফলে নোডজেএস রিডেবল টেক্সটের বদলে বাইনারি বাফারের অবজেক্ট রিটার্ন করে।

### Code Example
\`\`\`javascript
const fs = require('fs/promises');
const path = require('path');

async function readConfigFile() {
  const filePath = path.join(__dirname, 'config.json');
  
  // টেস্ট ফাইল তৈরি করা
  await fs.writeFile(filePath, JSON.stringify({ port: 3000 }));

  try {
    // utf8 এনকোডিং সহ অ্যাসিনক্রোনাসলি রিড করা
    const data = await fs.readFile(filePath, 'utf8');
    const config = JSON.parse(data);
    console.log("সার্ভার কনফিগারেশন পোর্ট:", config.port);
  } catch (error) {
    console.error("ফাইল রিড এরর:", error.message);
  } finally {
    // ক্লিনআপ
    await fs.unlink(filePath);
  }
}

readConfigFile();
\`\`\``
  },
  {
    id: 'node-express-9',
    title: 'Explain the path module and why it is preferred over raw string concatenation for handling paths.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Core Modules', 'Path', 'Cross-Platform'],
    enAnswer: 'The path module provides utilities for working with file and directory paths. It is preferred because it automatically resolves cross-platform differences (such as backslashes "\\" on Windows versus forward slashes "/" on POSIX/Linux) and handles relative path normalization.',
    bnAnswer: 'path মডিউল ফাইল এবং ডিরেক্টরি পাথ ম্যানেজ করার জন্য দরকারী ইউটিলিটি প্রদান করে। এটি ব্যবহারের প্রধান কারণ হলো এটি বিভিন্ন অপারেটিং সিস্টেমের পাথের পার্থক্য (যেমন উইন্ডোজে "\\" ব্যাকস্ল্যাশ বনাম লিনাক্সে "/" স্ল্যাশ) স্বয়ংক্রিয়ভাবে সমাধান করে।',
    enExplanation: `### Explanation
Operating systems format file paths differently. Hardcoding slash directions leads to application crashes when deployed on different systems.
Key functions in the \`path\` module:
1. **\`path.join(...paths)\`**: Joins all given path segments together using the platform-specific separator.
2. **\`path.resolve(...paths)\`**: Resolves a sequence of paths into an absolute path (resolves relative links like \`../\` or \`./\`).
3. **\`path.extname(filepath)\`**: Safely extracts file extensions (e.g., \`.json\`, \`.html\`).
4. **\`path.basename(filepath)\`**: Returns the last portion of a path (the file name).

Using these utilities protects your code from folder resolution bugs during server migration (e.g. from local Windows machines to production Linux cloud containers).

### Real-World Example
If you build an app on Windows and run \`const file = __dirname + '\\uploads\\file.txt'\`, this string will fail on Linux servers because Linux expects forward slashes (\`/\`).

### Best Practice
Never use raw string concatenation (like \`__dirname + '/file.txt'\`) to create file paths. Always use \`path.join()\` or \`path.resolve()\` to keep path navigation cross-platform.

### Common Mistakes
Manually writing path separators in string variables (e.g., using \`/\` directly), which breaks code compatibility on Windows development environments.

### Code Example
\`\`\`javascript
const path = require('path');

// 1. Cross-platform path joining
const absolutePath = path.join(__dirname, 'data', 'users.json');
console.log("Resolved Joined Path:", absolutePath);

// 2. Extract file extension
const ext = path.extname('image.png');
console.log("File Extension:", ext); // .png

// 3. Extract basename
const filename = path.basename('/var/www/index.html');
console.log("File Name:", filename); // index.html
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভিন্ন অপারেটিং সিস্টেমে ফাইলের ডিরেক্টরি পাথ লেখার ধরন আলাদা হয়। ফাইল পাথে স্ল্যাশ সাইন হার্ডকোড করে লিখলে কোড অন্য সার্ভারে গিয়ে ক্র্যাশ করতে পারে।
\`path\` মডিউলের গুরুত্বপূর্ণ মেথডসমূহ:
১. **\`path.join()\`**: একাধিক পাথ সেগমেন্টকে ওএস-নির্দিষ্ট স্ল্যাশ দিয়ে যুক্ত করে একটি সম্পূর্ণ পাথ তৈরি করে।
২. **\`path.resolve()\`**: আপেক্ষিক পাথগুলোকে (যেমন \`../\`) বিশ্লেষণ করে একটি সঠিক অ্যাবসোলিউট (Absolute) পাথ দেয়।
৩. **\`path.extname()\`**: ফাইলের এক্সটেনশন রিটার্ন করে (যেমন \`.json\`, \`.png\`)।
৪. **\`path.basename()\`**: পাথের শেষ অংশ অর্থাৎ ফাইলের নামটি রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
উইন্ডোজ মেশিনে যদি আপনি কোড লেখেন \`const file = __dirname + '\\uploads\\file.txt'\`, লিনাক্স সার্ভারে ডেপ্লয় করার পর কোডটি ভেঙে যাবে কারণ লিনাক্স ফরোয়ার্ড স্ল্যাশ (\`/\`) আশা করে।

### উত্তম অনুশীলন
পাথ তৈরির জন্য কখনো স্ট্রিং জোড়াতালি দেবেন না (যেমন \`__dirname + '/file.txt'\`)। ক্রস-প্ল্যাটফর্ম কম্প্যাটিবিলিটি বজায় রাখতে সর্বদা \`path.join()\` বা \`path.resolve()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
হাতে স্ল্যাশ ডিক্লেয়ার করে পাথ ডিল করা, যার ফলে লোকাল উইন্ডোজ ডেভেলপমেন্টের কোড প্রোডাকশন লিনাক্স ক্লাউডে গিয়ে ফাইল খুঁজে পায় না।

### Code Example
\`\`\`javascript
const path = require('path');

// ১. ক্রস-প্ল্যাটফর্ম পাথ তৈরি
const absolutePath = path.join(__dirname, 'data', 'users.json');
console.log("পাথ রিডিং:", absolutePath);

// ২. ফাইলের এক্সটেনশন বের করা
const ext = path.extname('image.png');
console.log("ফাইলের এক্সটেনশন:", ext); // .png

// ৩. ফাইলের নাম বের করা
const filename = path.basename('/var/www/index.html');
console.log("ফাইলের নাম:", filename); // index.html
\`\`\``
  },
  {
    id: 'node-express-10',
    title: 'What is the os module and what are some common use cases for it?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Core Modules', 'OS', 'System Metrics'],
    enAnswer: 'The os module provides operating system utility methods. Common use cases include retrieving system memory usage, CPU cores count, platform details, temporary directory paths, and checking network interfaces.',
    bnAnswer: 'os মডিউলটি অপারেটিং সিস্টেম সম্পর্কিত বিভিন্ন ইউটিলিটি মেথড প্রদান করে। এর সাধারণ ব্যবহারের মধ্যে রয়েছে সিস্টেম মেমোরি ব্যবহার পর্যবেক্ষণ, সিপিইউ কোর সংখ্যা জানা, ওএস প্ল্যাটফর্মের বিবরণ সংগ্রহ এবং নেটওয়ার্ক ইন্টারফেস চেক করা।',
    enExplanation: `### Explanation
The \`os\` module allows Node.js developers to read system resources.
Common APIs:
1. **\`os.cpus()\`**: Returns an array of CPU core metrics. Useful to determine how many worker processes to fork in cluster mode.
2. **\`os.freemem()\`** / **\`os.totalmem()\`**: Monitors memory availability.
3. **\`os.networkInterfaces()\`**: Obtains local network IP addresses.
4. **\`os.tmpdir()\`**: Finds the system temp folder path (e.g., safe location to save file uploads temporarily).

This metadata helps applications dynamically configure themselves based on host resources.

### Real-World Example
If you are deploying a clustering server that forks worker threads to utilize all system resources, you can read \`os.cpus().length\` to dynamically spawn the exact number of workers matching physical CPU cores.

### Best Practice
Use \`os.tmpdir()\` instead of hardcoding temp folder paths like \`"/tmp"\` or \`"C:\\Temp"\`. This keeps your filesystem references secure and functional across different platforms.

### Common Mistakes
Writing system log commands or file caches directly to hardcoded platform-specific folder links rather than utilizing \`os.homedir()\` or \`os.tmpdir()\`.

### Code Example
\`\`\`javascript
const os = require('os');

console.log("Platform:", os.platform()); // e.g. 'linux', 'win32'
console.log("CPU Cores Count:", os.cpus().length);

const freeGB = os.freemem() / (1024 * 1024 * 1024);
const totalGB = os.totalmem() / (1024 * 1024 * 1024);
console.log(\`System Memory: \${freeGB.toFixed(2)} GB Free out of \${totalGB.toFixed(2)} GB Total\`);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`os\` মডিউলের মাধ্যমে নোডজেএস হোস্ট সিস্টেমের রিসোর্স সম্পর্কে ধারণা পায়।
সাধারণ মেথডসমূহ:
১. **\`os.cpus()\`**: সিপিইউ কোরগুলোর ডিটেইলস সম্বলিত অ্যারে রিটার্ন করে। ক্লাস্টার মোডে কতটি প্রসেস তৈরি করতে হবে তা নির্ধারণে এটি ব্যবহৃত হয়।
২. **\`os.freemem()\`** এবং **\`os.totalmem()\`**: র‍্যাম মেমোরি পর্যবেক্ষণ করে।
৩. **\`os.networkInterfaces()\`**: লোকাল আইপি অ্যাড্রেস সম্পর্কিত তথ্য দেয়।
৪. **\`os.tmpdir()\`**: ওএসের অস্থায়ী ফাইল বা টেম্প ফোল্ডারের পাথ খুঁজে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের ধারণক্ষমতা বাড়াতে লোড ব্যালেন্স করার জন্য ক্লাস্টার মেকানিজমে সিপিইউ কোরের সংখ্যা অনুযায়ী প্রসেস তৈরি করতে \`os.cpus().length\` ব্যবহার করা হয়।

### উত্তম অনুশীলন
অস্থায়ী কোনো ফাইল ক্যাশ করতে চাইলে ফিক্সড পাথ না লিখে \`os.tmpdir()\` ব্যবহার করুন। এটি সব অপারেটিং সিস্টেমেই ফাইল সেভ করার উপযুক্ত সেফ লোকেশন রিটার্ন করে।

### সাধারণ ভুলসমূহ
সরাসরি হার্ডকোডেড পাথ লিখে ওএস ডিপেন্ডেন্সি বাড়িয়ে ফেলা, যা পরবর্তীতে ভিন্ন অপারেটিং সিস্টেমে ডেপ্লয়মেন্টের সময় ফাইল নট ফাউন্ড এরর দেয়।

### Code Example
\`\`\`javascript
const os = require('os');

console.log("ওএস প্ল্যাটফর্ম:", os.platform()); // যেমন: 'linux', 'win32'
console.log("সিপিইউ কোর সংখ্যা:", os.cpus().length);

const freeGB = os.freemem() / (1024 * 1024 * 1024);
const totalGB = os.totalmem() / (1024 * 1024 * 1024);
console.log(\`মেমোরি তথ্য: মোট \${totalGB.toFixed(2)} GB এর মধ্যে \${freeGB.toFixed(2)} GB খালি আছে\`);
\`\`\``
  },
  {
    id: 'node-express-11',
    title: 'How do you create a basic HTTP server using the core http module?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Core Modules', 'HTTP', 'Server Creation'],
    enAnswer: 'To create a server, call http.createServer() passing a callback function that handles request (req) and response (res) streams. Invoke server.listen() with a port number to start listening for incoming HTTP requests.',
    bnAnswer: 'কোর http মডিউল ব্যবহার করে সার্ভার তৈরি করতে http.createServer() মেথড কল করতে হয় এবং এর ভেতর রিকোয়েস্ট (req) ও রেসপন্স (res) হ্যান্ডেল করার কলব্যাক পাস করতে হয়। এরপর সার্ভার চালু করতে server.listen() এ পোর্ট নম্বর দিয়ে রান করাতে হয়।',
    enExplanation: `### Explanation
The \`http\` module allows Node.js to transfer data over HyperText Transfer Protocol (HTTP).
- **\`createServer((req, res) => { ... })\`**: This sets up a listener event. Every time a browser visits the specified port, this callback fires.
  - \`req\` (IncomingMessage): An object containing details of the request (URL, headers, method).
  - \`res\` (ServerResponse): A writable stream used to send headers and response bodies back to the client.
- **\`res.writeHead()\`**: Sends status codes and response header objects.
- **\`res.end()\`**: Sends the response payload and closes the HTTP connection stream.

### Real-World Example
This core mechanism is what framework engines like Express use under the hood to build custom request handlers, routes, and middleware frameworks.

### Best Practice
Always handle connection error events and call \`res.end()\` in all routing branches, otherwise the client's web browser will keep waiting and time out.

### Common Mistakes
Forgetting to call \`res.end()\` inside your server routes, which causes the user's browser to hang infinitely (spinner loading icon) until a timeout occurs.

### Code Example
\`\`\`javascript
const http = require('http');

// Define server handler
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to DevPrep Node.js Server!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route Not Found');
  }
});

// Run server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server is running at http://localhost:\${PORT}\`);
  // Close server after a brief moment for automatic test environments
  setTimeout(() => server.close(), 200);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`http\` মডিউলের মাধ্যমে নোডজেএস ডাটা ট্রান্সফার প্রটোকল বা এইচটিটিপি ব্যবহার করে ক্লায়েন্টের সাথে যোগাযোগ করে।
- **\`createServer((req, res) => { ... })\`**: এটি প্রতিটি ইনকামিং ব্রাউজার হিটের সময় কলব্যাক ইভেন্টটি ফায়ার করে।
  - \`req\`: ক্লায়েন্ট রিকোয়েস্ট অবজেক্ট (URL, Headers, Method ধারণ করে)।
  - \`res\`: সার্ভার রেসপন্স পাঠানোর স্ট্রিম অবজেক্ট।
- **\`res.writeHead()\`**: রেসপন্স স্ট্যাটাস কোড এবং হেডার অবজেক্ট পাঠায়।
- **\`res.end()\`**: রেসপন্সের ডাটা পাঠানো সম্পন্ন করে এইচটিটিপি কানেকশন স্ট্রিম ক্লোজ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
টেইলর্ড ফ্রেমওয়ার্ক যেমন এক্সপ্রেসজেএস (Express.js) আসলে ব্যাকগ্রাউন্ডে এই কোর \`http.createServer\` মেকানিজম ব্যবহার করেই নিজেদের রাউটার ও মিডলওয়্যার লজিক পরিচালনা করে।

### উত্তম অনুশীলন
প্রতিটি রাউট কন্ডিশনে অবশ্যই রেসপন্স ক্লোজ করতে \`res.end()\` বা সমতুল্য মেথড কল করুন, অন্যথায় ব্রাউজার কানেকশন ঝুলিয়ে রাখবে।

### সাধারণ ভুলসমূহ
কোডে কোনো কন্ডিশনাল ব্রাঞ্চে \`res.end()\` কল করতে ভুলে যাওয়া, যার ফলে ব্যবহারকারীর ব্রাউজার আজীবন লোডিং স্পিনার দেখাতে থাকবে এবং পরিশেষে টাইমআউট দেখাবে।

### Code Example
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('নোডজেএস সার্ভারে স্বাগতম!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('রাউট খুঁজে পাওয়া যায়নি');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`সার্ভারটি চলছে http://localhost:\${PORT} লিংকে\`);
  setTimeout(() => server.close(), 200);
});
\`\`\``
  },
  {
    id: 'node-express-12',
    title: 'What is the events module and the EventEmitter class?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Core Modules', 'Events', 'EventEmitter'],
    enAnswer: 'The events module provides the EventEmitter class, which is used to build event-driven architectures. Objects of EventEmitter emit named events that trigger registered listener functions asynchronously.',
    bnAnswer: 'events মডিউলটি EventEmitter ক্লাস প্রদান করে, যা ইভেন্ট-ড্রিভেন আর্কিটেকচার তৈরি করতে ব্যবহৃত হয়। EventEmitter অবজেক্টগুলো নির্দিষ্ট নামের ইভেন্ট নির্গমন (emit) করে যা রেজিস্টারকৃত লিসেনার ফাংশনগুলোকে অ্যাসিনক্রোনাসলি রান করায়।',
    enExplanation: `### Explanation
Node.js architecture relies heavily on events. Built-in modules like \`fs\` streams and \`http\` servers inherit from the \`EventEmitter\` class.
Core APIs:
1. **\`emitter.on(event, listener)\`**: Registers a callback to execute whenever the specified event name is triggered.
2. **\`emitter.emit(event, ...args)\`**: Triggers the specified event, passing any supplied arguments to the listeners.
3. **\`emitter.once(event, listener)\`**: Registers a callback that fires at most once, and then automatically unregisters itself.
4. **\`emitter.off()\`** / **\`removeListener()\`**: Detaches listeners to prevent memory leaks.

### Real-World Example
In messaging, chat, or event tracking services, you can emit an \`order_placed\` event to trigger sending email confirmations, database updates, and updating shipping queues in separate isolated tasks.

### Best Practice
Always remove event listeners (\`emitter.off()\`) when components/objects destroy. Leaving active listeners references objects in memory, preventing garbage collection and causing memory leaks.

### Common Mistakes
Emitting an event before registering its listener. Listeners must be set up using \`.on()\` *before* calls to \`.emit()\` occur, otherwise the event triggers with no action.

### Code Example
\`\`\`javascript
const EventEmitter = require('events');

class UserRegistration extends EventEmitter {}
const registrationService = new UserRegistration();

// 1. Register listener
registrationService.on('register', (user) => {
  console.log(\`Sending welcome email to: \${user.email}\`);
});

// 2. Register one-time listener
registrationService.once('database_init', () => {
  console.log('Database logger connected once!');
});

// Emit events
registrationService.emit('database_init');
registrationService.emit('database_init'); // Won't trigger second time

registrationService.emit('register', { email: 'rohit@example.com' });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস ইভেন্ট-ভিত্তিক আর্কিটেকচারের ওপর দাঁড়িয়ে আছে। কোর মডিউল যেমন \`http\` সার্ভার বা রিড-রাইট স্ট্রিম ক্লাসগুলো সরাসরি \`EventEmitter\` থেকে ইনহেরিট (inherit) করে।
প্রধান মেথডসমূহ:
১. **\`emitter.on()\`**: নির্দিষ্ট কোনো ইভেন্টের জন্য লিসেনার বা কলব্যাক রেজিস্টার করে।
২. **\`emitter.emit()\`**: রেজিস্টার করা নামের ইভেন্টটি ফায়ার করে এবং সাথে আর্গুমেন্ট পাস করতে পারে।
৩. **\`emitter.once()\`**: এমন একটি লিসেনার যুক্ত করে যা কেবল একবার ফায়ার হওয়ার পরেই নিজে থেকে ডিলিট হয়ে যায়।
৪. **\`emitter.off()\`**: মেমোরি লিক এড়াতে লিসেনারগুলো রিমুভ করতে এটি ব্যবহার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেমেন্ট গেটওয়ে অ্যাপে পেমেন্ট সফল হওয়ার পর আপনি \`payment_success\` ইভেন্ট ফায়ার করতে পারেন। এর ফলে ইনভয়েস ডাউনলোড পিএইচপি স্ক্রিপ্ট ফায়ার করা এবং ইউজার নোটিফিকেশন পাঠানো ব্যাকগ্রাউন্ডে প্যারালালি সম্পন্ন করা যায়।

### উত্তম অনুশীলন
কাজ শেষ হয়ে গেলে বা অবজেক্ট ধ্বংস হয়ে গেলে অবশ্যই লিসেনার রিমুভ (\`emitter.off()\`) করুন। ইভেন্ট লিসেনারগুলো রেফারেন্স ধরে রাখায় গার্বেজ কালেক্টর মেমোরি মুক্ত করতে পারে না, যা মেমোরি লিকের জন্য দায়ী।

### সাধারণ ভুলসমূহ
ইভেন্ট এমিট করার পর লিসেনার রেজিস্টার করা। লিসেনার কোড অবশ্যই ইভেন্ট ফায়ার করার লাইনের আগে থাকতে হবে।

### Code Example
\`\`\`javascript
const EventEmitter = require('events');

class UserRegistration extends EventEmitter {}
const registrationService = new UserRegistration();

// ১. লিসেনার রেজিস্টার করা
registrationService.on('register', (user) => {
  console.log(\`স্বাগতম ইমেইল পাঠানো হলো: \${user.email}\`);
});

// ২. ওয়ান-টাইম লিসেনার রেজিস্টার করা
registrationService.once('database_init', () => {
  console.log('ডাটাবেস লগার একবারের জন্য যুক্ত হলো!');
});

// ইভেন্ট ফায়ার করা
registrationService.emit('database_init');
registrationService.emit('database_init'); // দ্বিতীয়বার রান হবে না

registrationService.emit('register', { email: 'rohit@example.com' });
\`\`\``
  },
  {
    id: 'node-express-13',
    title: 'What is NPM and what is the difference between dependencies and devDependencies?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'NPM', 'Dependencies', 'Configuration'],
    enAnswer: 'NPM is Node Package Manager, used to install, share, and manage third-party modules. dependencies are required to run the application in production (like express), while devDependencies are only needed for local development and build tasks (like typescript, jest).',
    bnAnswer: 'NPM হলো নোড প্যাকেজ ম্যানেজার যা থার্ড-পার্টি মডিউল ইনস্টল, শেয়ার ও ম্যানেজ করতে ব্যবহৃত হয়। dependencies মডিউলগুলো প্রোডাকশনে অ্যাপ্লিকেশনটি রান করতে আবশ্যক (যেমন express), আর devDependencies মডিউলগুলো কেবল লোকাল ডেভেলপমেন্ট এবং কোড বিল্ড ও টেস্ট করার কাজে লাগে (যেমন typescript, jest)।',
    enExplanation: `### Explanation
NPM stands for Node Package Manager, installing files into \`node_modules\` folder.
Differences inside \`package.json\`:
- **\`dependencies\`**:
  - Installed during production deployment (\`npm install --production\`).
  - Contains libraries the code imports at runtime to function (e.g. \`express\`, \`mongoose\`, \`cors\`).
- **\`devDependencies\`**:
  - Skipped in production environments to minimize resource footprints.
  - Contains tooling, compilers, test frameworks, and code formatters (e.g. \`jest\`, \`eslint\`, \`typescript\`, \`nodemon\`).

### Real-World Example
If your server is deployed on cloud hosting, you want to deploy the smallest possible image size. Separating your testing libraries (\`jest\`) into \`devDependencies\` prevents download bloat on your production cloud host.

### Best Practice
Always use the \`--save-dev\` (or \`-D\`) flag when installing developer tooling packages (e.g. \`npm install -D typescript\`), keeping your main production dependencies list clean.

### Common Mistakes
Installing dev tools (like \`nodemon\` or \`jest\`) under regular \`dependencies\`, bloating production server builds and packages.

### Code Example
\`\`\`json
// package.json structure snippet
{
  "name": "devprep-api",
  "version": "1.0.0",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "typescript": "^5.4.5"
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
NPM হলো নোড প্যাকেজ ম্যানেজার যা প্রোজেক্টের ডিপেন্ডেন্সিগুলো ডাউনলোড করে \`node_modules\` ফোল্ডারে জমা করে।
\`package.json\` ফাইলের মধ্যকার পার্থক্যসমূহ:
- **\`dependencies\`**:
  - প্রোডাকশন এনভায়রনমেন্টে এগুলো সার্ভার রান করার জন্য ইনস্টল করা হয় (\`npm install --production\`)।
  - অ্যাপ কোড সরাসরি ব্যবহার করে এমন লাইব্রেরিগুলো এখানে থাকে (যেমন: \`express\`, \`mongoose\`, \`cors\`)।
- **\`devDependencies\`**:
  - প্রোডাকশন ডেপ্লয়মেন্টে এগুলো ডাউনলোড করা স্কিপ বা বাদ দেওয়া হয়।
  - লোকাল ডেভেলপমেন্টে কোড কমপাইল, লিন্টিং বা ইউনিট টেস্টিং করার টুলসগুলো এখানে থাকে (যেমন: \`jest\`, \`eslint\`, \`typescript\`, \`nodemon\`)।

### বাস্তব-ভিত্তিক উদাহরণ
যখন আপনি আপনার সার্ভারটি হিরোকু বা এডব্লিউএসে ডেপ্লয় করবেন, তখন আপনি বান্ডেল সাইজ যথাসম্ভব ছোট রাখতে চাইবেন। টেস্টিং মডিউল (\`jest\`) যদি \`devDependencies\`-এ থাকে, তবে ক্লাউডে ডেপ্লয় করার সময় বাড়তি এমবি ডাউনলোড করতে হবে না।

### উত্তম অনুশীলন
ডেভেলপার টুলিং বা টেস্ট লাইব্রেরি ইনস্টল করার সময় সর্বদা \`--save-dev\` বা \`-D\` ফ্ল্যাগ ব্যবহার করুন (যেমন: \`npm install -D jest\`), যাতে মেইন ডিপেন্ডেন্সি তালিকা পরিষ্কার থাকে।

### সাধারণ ভুলসমূহ
কোড রান করার প্রয়োজনীয় মডিউলগুলো ডেভডিপেন্ডেন্সিতে অথবা ডেভ টুলসগুলো সাধারণ ডিপেন্ডেন্সির ভেতর ইনস্টল করে ফেলা।

### Code Example
\`\`\`json
// package.json এর স্ট্রাকচারের নমুনা
{
  "name": "devprep-api",
  "version": "1.0.0",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "typescript": "^5.4.5"
  }
}
\`\`\``
  },
  {
    id: 'node-express-14',
    title: 'Explain package.json vs package-lock.json in Node.js applications.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'NPM', 'Configuration', 'Version Control'],
    enAnswer: 'package.json defines the project metadata, scripts, and general version ranges of dependencies (using semantic versioning caret/tilde). package-lock.json locks the exact semantic dependency version tree installed at a specific time, ensuring identical installs across all development and production setups.',
    bnAnswer: 'package.json প্রোজেক্টের নাম, স্ক্রিপ্ট এবং ডিপেন্ডেন্সির সাধারণ ভার্সন রেঞ্জ (ক্যারেট/টিল্ড চিহ্ন সহ) ধারণ করে। অন্য দিকে package-lock.json লাইব্রেরির এক্সাক্ট বা নিখুঁত ভার্সন এবং তার চাইল্ড ডিপেন্ডেন্সিগুলোর ট্রি লক করে রাখে যাতে সব মেশিনে একই ভার্সন ইনস্টল হয়।',
    enExplanation: `### Explanation
To ensure configuration consistency:
- **\`package.json\`**:
  - Edited directly by developers to specify general package updates (e.g. \`"express": "^4.19.0"\`).
  - The caret (\`^\`) allows NPM to auto-install updates if a new minor version (like 4.20.0) is published when a developer runs \`npm install\`.
- **\`package-lock.json\`**:
  - Automatically generated by NPM and locked to commit records.
  - Contains exact dependency versions and cryptographic hashes (\`integrity\` field) of download files.
  - Ensures if a build executes on your CI/CD server 6 months later, it installs the *exact* code tree used locally, preventing breaking changes caused by third-party updates.

### Real-World Example
If Express releases a patch update containing a bug, and you do not use \`package-lock.json\`, a deployment to staging will download that buggy version automatically, causing a server crash that you cannot reproduce locally where you have an older version cached.

### Best Practice
Always commit \`package-lock.json\` to Git. Do not modify this file manually. When deploying in production, run \`npm ci\` (clean install) instead of \`npm install\`. \`npm ci\` strictly uses the lockfile to populate \`node_modules\` and crashes if there is any mismatch with \`package.json\`.

### Common Mistakes
Adding \`package-lock.json\` to your \`.gitignore\` file. This causes different machines to download mismatched dependency code trees.

### Code Example
\`\`\`bash
# Install dependencies exactly according to package-lock.json (Best for CI/CD)
npm ci

# Install and automatically generate/update lockfile
npm install
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কনফিগারেশনের মিল নিশ্চিত করতে নোডজেএস দুটি ফাইল ব্যবহার করে:
- **\`package.json\`**:
  - এটি ডেভেলপার দ্বারা সরাসরি নিয়ন্ত্রিত হয় এবং প্যাকেজের সাধারণ ভার্সন রুলস ধারণ করে (যেমন: \`"express": "^4.19.0"\`)।
  - ক্যারেট (\`^\`) চিহ্নের কারণে নতুন মাইনর রিলিজ আসলে পরবর্তীতে \`npm install\` এর সময় নোডজেএস নিজে থেকে আপডেট ভার্সন নিয়ে নেয়।
- **\`package-lock.json\`**:
  - এনপিএম দ্বারা স্বয়ংক্রিয়ভাবে জেনারেট হয়।
  - এর মধ্যে প্রতিটি সাব-প্যাকেজের সুনির্দিষ্ট বা ফিক্সড ভার্সন ও সিকিউরিটি হ্যাশ লক করা থাকে।
  - এর ফলে ৬ মাস পর প্রোডাকশন বিল্ড দিলে একদম হুবহু ওই লক করা ভার্সনগুলোই ইনস্টল হবে, নতুন কোনো থার্ড-পার্টি আপডেটের কারণে কোড ভেঙে যাওয়ার সুযোগ থাকবে না।

### বাস্তব-ভিত্তিক উদাহরণ
এক্সপ্রেসজেএস নতুন একটি আপডেট রিলিজ করল যাতে ইন্টারনাল বাগ আছে। আপনি যদি \`package-lock.json\` গিটরেপোতে না রাখেন, তবে লাইভ সার্ভারে রান করার সময় নোডজেএস নতুন বাগ যুক্ত এক্সপ্রেসজেএস ভার্সনটি নামিয়ে নেবে, যার ফলে সার্ভার ক্র্যাশ করবে অথচ আপনার লোকাল পিসিতে ক্যাশড ভার্সন থাকায় সেখানে ঠিকঠাক চলবে।

### উত্তম অনুশীলন
সবসময় \`package-lock.json\` গিট ট্র্যাকিংয়ে রাখুন। এটি কখনো এডিট করবেন না। প্রোডাকশন ক্লাউডে বিল্ড দেওয়ার সময় \`npm install\` এর পরিবর্তে \`npm ci\` কমান্ডটি ব্যবহার করুন, যা সরাসরি লকফাইল থেকে ইনস্টল করে।

### সাধারণ ভুলসমূহ
\`.gitignore\` ফাইলে \`package-lock.json\` যোগ করে রাখা, যার ফলে টিমমেটদের কোডবেসে ভিন্ন ভিন্ন ভার্সনের প্যাকেজ ডাউনলোড হয়ে কনফ্লিক্ট তৈরি হয়।

### Code Example
\`\`\`bash
# লকফাইল অনুযায়ী হুবহু ইনস্টল করার জন্য (CI/CD বা প্রোডাকশনের জন্য সেরা)
npm ci

# সাধারণ প্যাকেজ ইনস্টল ও লকফাইল আপডেট করার জন্য
npm install
\`\`\``
  },
  {
    id: 'node-express-15',
    title: 'How do environment variables work in Node.js using process.env?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Environment Variables', 'Security', 'Configuration'],
    enAnswer: 'Environment variables are system-level variables used to store configurations and secrets (like API keys, DB credentials). In Node.js, they are accessed via the global process.env object at runtime.',
    bnAnswer: 'এনভায়রনমেন্ট ভ্যারিয়েবল হলো সিস্টেম-লেভেলের ভ্যারিয়েবল যা কনফিগারেশন এবং গোপনীয় তথ্য (যেমন ডাটাবেস পাসওয়ার্ড, এপিআই কি) স্টোর করতে ব্যবহৃত হয়। নোডজেএস-এ রানটাইমে এগুলোকে global process.env অবজেক্টের মাধ্যমে অ্যাক্সেস করা হয়।',
    enExplanation: `### Explanation
In professional backend apps, code must be decoupled from configuration. Secrets (like DB passwords) should never be hardcoded.
1. **Host Configuration**: Operating systems set environment variables. In Linux/macOS: \`PORT=8080 node server.js\`.
2. **Accessing**: Node exposes these values on \`process.env.VARIABLE_NAME\`.
3. **Local Dev Integration**: To simplify local development, tools like \`dotenv\` read a local \`.env\` file (which is ignored by Git) and load those variables into \`process.env\` automatically when the app boots.

### Real-World Example
If your app runs locally, you want to connect to a local database. In production, you want to connect to a secure remote cloud database:
\`\`\`javascript
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/dev';
\`\`\`

### Best Practice
Never commit your \`.env\` file containing secret credentials to source control (Git). Add \`.env\` to \`.gitignore\`, and create a \`.env.example\` containing variable keys but empty values as a guide for your team.

### Common Mistakes
Accessing environment variables before calling \`dotenv.config()\`, which results in \`process.env.MY_VAR\` returning \`undefined\`.

### Code Example
\`\`\`javascript
// Simulate loading .env manually for demonstration
process.env.PORT = '8080';
process.env.NODE_ENV = 'production';

// Read values inside application
const port = parseInt(process.env.PORT, 10) || 3000;
const isProd = process.env.NODE_ENV === 'production';

console.log("App will run on port:", port);
console.log("Is Server running in Production?:", isProd);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পেশাদার ব্যাকএন্ড প্রজেক্টে সোর্স কোডকে কনফিগারেশন থেকে আলাদা রাখা হয়। ডাটাবেস পাসওয়ার্ড বা এপিআই সিক্রেট কখনো ফাইলে হার্ডকোড করা উচিত নয়।
১. **ওএস কনফিগারেশন**: অপারেটিং সিস্টেম এনভায়রনমেন্ট ভ্যারিয়েবল সরবরাহ করে। যেমন: \`PORT=8080 node server.js\`।
২. **অ্যাক্সেস মেকানিজম**: নোডজেএস এই ভ্যালুগুলোকে রানটাইমে \`process.env.VARIABLE_NAME\` অবজেক্টে নিয়ে আসে।
৩. **লোকাল ডেভেলপমেন্ট**: লোকাল কম্পিউটারে ডেভেলপ করার জন্য \`dotenv\` প্যাকেজ ব্যবহার করে একটি লোকাল \`.env\` ফাইল তৈরি করা হয়, যা নোড অ্যাপ চালু হওয়ার সময় অটোমেটিক রিড করে এনভায়রনমেন্ট ভ্যারিয়েবল সেট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
লোকাল পিসিতে রান করার সময় লোকাল ডাটাবেস হোস্ট এবং লাইভ ক্লাউড প্রোডাকশনে সিক্রেট লাইভ লিংকে কানেক্ট করতে এই লজিক ব্যবহার করা হয়:
\`\`\`javascript
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/dev';
\`\`\`

### উত্তম অনুশীলন
গোপনীয় তথ্য সংবলিত \`.env\` ফাইলটি কখনো গিটহাবে পুশ বা কমিট করবেন না। সর্বদা \`.gitignore\`-এ \`.env\` নাম যুক্ত করুন। টিমের সুবিধার জন্য একটি ব্ল্যাঙ্ক বা ডামি \`.env.example\` ফাইল পুশ করে রাখুন।

### সাধারণ ভুলসমূহ
\`dotenv.config()\` কল করার আগেই \`process.env.VAR\` অ্যাক্সেস করতে চেষ্টা করা, যার ফলে রিড করার চেষ্টা করলে ওগুলো \`undefined\` রিটার্ন করে।

### Code Example
\`\`\`javascript
// ডামি ভ্যালু সেট করে টেস্ট করা
process.env.PORT = '8080';
process.env.NODE_ENV = 'production';

// অ্যাপের কোডে রিড করা
const port = parseInt(process.env.PORT, 10) || 3000;
const isProd = process.env.NODE_ENV === 'production';

console.log("অ্যাপের পোর্ট নম্বর:", port);
console.log("সার্ভার কি প্রোডাকশনে চলছে?:", isProd);
\`\`\``
  },
  {
    id: 'node-express-16',
    title: 'What is the console module and how does Node.js handle standard output Streams?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'Console', 'Streams', 'Debugging'],
    enAnswer: 'The console module provides a simple debugging console. Under the hood, console.log() writes to the standard output stream (stdout), while console.error() writes to the standard error stream (stderr), both of which are managed asynchronously by Node to prevent blocking operations.',
    bnAnswer: 'console মডিউলটি সাধারণ ডিবাগিং কনসোল সরবরাহ করে। ব্যাকগ্রাউন্ডে console.log() মেথডটি স্ট্যান্ডার্ড আউটপুট স্ট্রিমে (stdout) এবং console.error() মেথডটি স্ট্যান্ডার্ড এরর স্ট্রিমে (stderr) ডাটা রাইট করে। নোডজেএস নন-ব্লকিং রাখার জন্য এগুলোকে অ্যাসিনক্রোনাসলি ম্যানেজ করে।',
    enExplanation: `### Explanation
The global \`console\` object in Node.js wraps around standard I/O streams:
1. **\`console.log()\` / \`console.info()\`**: Writes to \`process.stdout\`. Used for regular logs, server startup indicators, or data output.
2. **\`console.error()\` / \`console.warn()\`**: Writes to \`process.stderr\`. Reserved for errors, warnings, stack traces.
3. **Redirection**: On production servers, logs can be separated at the OS level:
   - \`node server.js > out.log 2> err.log\` redirects standard logs to \`out.log\` and system errors to \`err.log\`.
4. **\`console.table()\`**: Formats arrays of objects into structured tables in the terminal.

### Real-World Example
In enterprise cloud logging (like Kubernetes or AWS CloudWatch), log parsers read container outputs from \`stdout\` and \`stderr\` directly to aggregate dashboards, without the application writing logs to local files.

### Best Practice
Avoid excessive \`console.log()\` inside loop iterations, as printing to terminal involves system calls and resource prints that can slow down server throughput. Use structured logging libraries like \`winston\` for proper production log management.

### Common Mistakes
Assuming \`console.log\` works exactly like browser console log. It prints text representations to the terminal using \`util.inspect()\` on objects rather than interactive tree objects.

### Code Example
\`\`\`javascript
// 1. Basic outputs to different streams
console.log("Standard output log message");
console.error("Standard error log message");

// 2. Tabular logging in terminal
const users = [
  { id: 1, name: 'Rohit', role: 'Developer' },
  { id: 2, name: 'Amit', role: 'Designer' }
];
console.table(users);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`নোডজেএস-এর গ্লোবাল \`console\` অবজেক্টটি ওএসের স্ট্যান্ডার্ড আই/ও (I/O) স্ট্রিমকে র‍্যাপ করে কাজ করে:
১. **\`console.log()\`**: এটি \`process.stdout\`-এ ডাটা পাঠায়। সাধারণ ট্র্যাকিং বা মেসেজ প্রিন্ট করার জন্য এটি ব্যবহৃত হয়।
২. **\`console.error()\`**: এটি \`process.stderr\`-এ ডাটা পাঠায়। সিস্টেম ক্র্যাশ, এরর ও ওয়ার্নিং ট্র্যাক করতে এটি ব্যবহার করা হয়।
৩. **ওএস রিডাইরেকশন**: ওএস লেভেলে সহজে লগ আলাদা করা যায়। যেমন: \`node server.js > out.log 2> err.log\` এর সাহায্যে সাধারণ মেসেজগুলো \`out.log\` ফাইলে এবং এররগুলো \`err.log\` ফাইলে চলে যাবে।
৪. **\`console.table()\`**: অবজেক্টের অ্যারেগুলোকে টার্মিনালে সুন্দর টেবিল ফরম্যাটে আউটপুট দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
ক্লাউড ডেপ্লয়মেন্টে (যেমন AWS CloudWatch) কন্টেইনার সার্ভিসগুলো অ্যাপের \`stdout\` ও \`stderr\` রিড করে ডেসবোর্ডে লগ ডাটা পুশ করে। এর ফলে অ্যাপকে নিজে থেকে ফাইল ম্যানেজ করতে হয় না।

### উত্তম অনুশীলন
লুপের ভেতর ঘন ঘন \`console.log()\` কল করবেন না, কারণ প্রতিবার টার্মিনালে টেক্সট প্রিন্ট করার জন্য মেমোরি কনজাম্পশন বাড়ে যা অ্যাপের পারফরম্যান্স কমিয়ে দেয়। প্রোডাকশনে ট্র্যাকিংয়ের জন্য \`winston\` এর মতো কাস্টম লগার ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ব্রাউজার কনসোল ও নোড কনসোল হুবহু এক ভাবা। নোড কনসোল কোনো ইন্টারঅ্যাক্টিভ এইচটিএমএল ট্রি দেখায় না, এটি কেবল ফাইলের টেক্সট ফরম্যাট প্রিন্ট করে।

### Code Example
\`\`\`javascript
// ১. ভিন্ন স্ট্রিমে মেসেজ পাঠানো
console.log("সাধারণ আউটপুট লগ মেসেজ");
console.error("এরর বা বিপদের জন্য লগ মেসেজ");

// ২. টেবিল আকারে লগ প্রদর্শন
const users = [
  { id: 1, name: 'Rohit', role: 'Developer' },
  { id: 2, name: 'Amit', role: 'Designer' }
];
console.table(users);
\`\`\``
  },
  {
    id: 'node-express-17',
    title: 'What is Express.js and what are its primary benefits in web development?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Web Server', 'Routing', 'Middleware'],
    enAnswer: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Its primary benefits include simplified routing, easy middleware integration, handling HTTP utilities, and quick REST API creation.',
    bnAnswer: 'Express.js হলো নোডজেএস-এর একটি মিনিমাল ও ফ্লেক্সিবল ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা ব্যাকএন্ড ডেভেলপমেন্টের জন্য বিভিন্ন মেথড প্রদান করে। এর প্রধান সুবিধার মধ্যে রয়েছে সহজে রাউটিং হ্যান্ডেল করা, মিডলওয়্যার যুক্ত করা, এইচটিটিপি রিকোয়েস্ট ম্যানেজ করা এবং দ্রুত রেস্ট এপিআই (REST API) তৈরি করা।',
    enExplanation: `### Explanation
Express.js acts as a thin abstraction layer on top of Node.js's built-in \`http\` module.
Key Benefits:
1. **Simplified Routing**: Replaces complex \`if/else\` structures checking \`req.url\` and \`req.method\` with intuitive declarations like \`app.get()\` or \`app.post()\`.
2. **Middleware Architecture**: Provides a clean pipeline system to process incoming requests (for validation, sessions, authorization) before they reach your controller logic.
3. **Bilingual Status & Content Utilities**: Includes built-in support for parsing request variables, rendering HTML templates, and sending JSON payloads easily using \`res.json()\`.
4. **Massive Ecosystem**: Thousands of pre-built middlewares (like \`cors\`, \`body-parser\`, \`helmet\`) are ready to plug in.

### Real-World Example
Using pure Node.js to handle route requests, parse bodies, and return JSON responses requires writing about 50 lines of stream parsing. Express reduces this process to just a few lines of code.

### Best Practice
Keep your Express setup unopinionated but organized. Structure route handlers, services, and middlewares into dedicated folders (controllers, routes, models) instead of creating one massive \`index.js\` file.

### Common Mistakes
Treating Express as a massive framework like NestJS or Rails. Express is minimal and does not enforce any directory structure, database integration, or model layouts.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Handle GET request
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: Date.now() });
});

const server = app.listen(3000, () => {
  console.log("Express server running on port 3000");
  server.close();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেসজেএস হলো নোডজেএস-এর কোর \`http\` মডিউলের ওপর ভিত্তি করে তৈরি একটি পাতলা বা মিনিমাল অ্যাবস্ট্রাকশন লেয়ার।
প্রধান সুবিবাসমূহ:
১. **সহজ রাউটিং**: কাঁচা নোডজেএস-এর মত \`req.url\` ও \`req.method\` নিয়ে অসংখ্য \`if/else\` লেখার বদলে সহজে \`app.get()\` বা \`app.post()\` দিয়ে রাউট ডিফাইন করা যায়।
২. **মিডলওয়্যার আর্কিটেকচার**: রিকোয়েস্ট প্রসেস করার জন্য এটি একটি পাইপলাইন সিস্টেম প্রদান করে যা অথেনটিকেশন বা ডাটা ভ্যালিডেশনের কাজে লাগে।
৩. **এইচটিটিপি ইউটিলিটি**: সহজে ডাটা রিটার্ন করতে \`res.json()\` বা স্ট্যাটাস কোড সেট করতে \`res.status()\` মেথড সরবরাহ করে।

### বাস্তব-ভিত্তিক উদাহরণ
র-নোডজেএস দিয়ে রিকোয়েস্ট বডি পার্স করতে স্ট্রিম বাফারিং কোড লিখতে হয় প্রায় ৫০ লাইন। এক্সপ্রেসজেএস এটি সিঙ্গেল লাইনে নিয়ে আসে।

### উত্তম অনুশীলন
এক্সপ্রেস মিনিমাল হওয়ায় ডেভেলপারকে কোনো ফোল্ডার স্ট্রাকচারে বাধ্য করে না। প্রজেক্ট সাজানোর জন্য কন্ট্রোলার, রাউট ও মিডলওয়্যার ফোল্ডার তৈরি করে কোডগুলো আলাদা রাখুন যাতে কোডবেস স্কেলেবল হয়।

### সাধারণ ভুলসমূহ
এক্সপ্রেসজেএস-কে অনেক বড় কোনো ফ্রেমওয়ার্ক (যেমন নেস্টজেএস বা লাভাভেল) মনে করা। এক্সপ্রেস মূলত একটি রাউটার ও মিডলওয়্যার লাইব্রেরি মাত্র।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// রিকোয়েস্ট বডি পার্স করার জন্য মিডলওয়্যার
app.use(express.json());

// গেট রিকোয়েস্ট হ্যান্ডেল করা
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: Date.now() });
});

const server = app.listen(3000, () => {
  console.log("এক্সপ্রেস সার্ভার রানিং");
  server.close();
});
\`\`\``
  },
  {
    id: 'node-express-18',
    title: 'How do you create and configure a basic Express.js application?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Configuration', 'Initialization', 'Web Server'],
    enAnswer: 'Initialize Express by calling the imported express() function to create the app instance. Configure it with app.use() for middlewares, specify routes with app.get/post(), and start the server using app.listen(port).',
    bnAnswer: 'এক্সপ্রেসজেএস অ্যাপ্লিকেশন সেটআপ করতে ইম্পোর্ট করা express() ফাংশন কল করে অ্যাপ ইনস্ট্যান্স তৈরি করতে হয়। মিডলওয়্যারের জন্য app.use(), রাউটিংয়ের জন্য app.get/post() এবং সার্ভার চালু করতে app.listen(port) কনফিগার করতে হয়।',
    enExplanation: `### Explanation
Setting up an Express application involves configuring key blocks:
1. **Import and Instance Creation**: \`const express = require('express'); const app = express();\`
2. **Port Configuration**: Best defined using environment variables (\`process.env.PORT\`) with a local fallback.
3. **Application Mounts (Middlewares)**: Mounting body parsers before routes: \`app.use(express.json())\`.
4. **Defining Routes**: Mounting routes to URLs: \`app.get('/', (req, res) => { ... })\`.
5. **Listen**: Starting the server socket connection: \`app.listen(PORT)\`.

### Real-World Example
At startup, web servers initialize database connections first, configure logging files (morgan), import API routes, and then start listening to ports so clients can connect securely.

### Best Practice
Configure your port using environmental values: \`const PORT = process.env.PORT || 3000;\`. This is crucial for cloud deployment (e.g. Heroku, AWS, or Render) where the platform dynamically assigns a host port.

### Common Mistakes
Calling \`app.listen()\` before defining database configuration loaders, causing requests to reach the server before DB instances are ready to handle them.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Root Route
app.get('/', (req, res) => {
  res.send('DevPrep API Server Ready.');
});

// Boot application
const server = app.listen(PORT, () => {
  console.log(\`Express application running on port \${PORT}\`);
  server.close();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেস অ্যাপ্লিকেশন তৈরির ধাপসমূহ:
১. **ইম্পোর্ট ও ইনস্ট্যান্স**: \`const express = require('express'); const app = express();\`
২. **পোর্ট নম্বর**: এনভায়রনমেন্ট ভ্যারিয়েবল থেকে পোর্ট ডিক্লেয়ার করা ভালো।
৩. **মিডলওয়্যার কনফিগারেশন**: রাউটের আগেই বডি পার্সিং মিডলওয়্যার যুক্ত করা: \`app.use(express.json())\`।
৪. **রাউট ডিক্লেয়ারেশন**: ইউআরএল পাথ অনুযায়ী রাউট হ্যান্ডলার সেট করা।
৫. **সার্ভার স্টার্ট**: পোর্ট লিসেন করা: \`app.listen()\`।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার চালুর সময় প্রথমে ডাটাবেস কানেকশন ইনিশিয়ালাইজ করা হয়, এরপর লগিং অন করা হয়, সবশেষে পোর্ট লিসেন করা হয় যাতে ডাটাবেস রেডি হওয়ার পর ব্যবহারকারীরা রিকোয়েস্ট পাঠাতে পারে।

### উত্তম অনুশীলন
পোর্ট নম্বর নির্ধারণে এনভায়রনমেন্ট ভ্যারিয়েবল ব্যবহার করুন: \`const PORT = process.env.PORT || 3000;\`। ক্লাউড ডেপ্লয়মেন্টে হোস্টিং প্ল্যাটফর্মগুলো নিজে থেকে রানটাইমে পোর্ট অ্যাসাইন করে দেয়।

### সাধারণ ভুলসমূহ
ডাটাবেস কানেক্ট হওয়ার আগেই পোর্টে লিসেন শুরু করে দেওয়া, যার ফলে প্রথম কয়েকটি রিকোয়েস্ট ডাটাবেস এররের কারণে ক্র্যাশ করে।

### কোড উদাহরণ
\`\`\`javascript
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// রুট রাউট
app.get('/', (req, res) => {
  res.send('ডেভপ্রিপ এপিআই সার্ভার প্রস্তুত।');
});

// সার্ভার বুট
const server = app.listen(PORT, () => {
  console.log(\`এক্সপ্রেস অ্যাপ্লিকেশন চলছে \${PORT} পোর্টে\`);
  server.close();
});
\`\`\``
  },
  {
    id: 'node-express-19',
    title: 'How does routing work in Express.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Routing', 'HTTP Methods', 'API Design'],
    enAnswer: 'Express routing matches client requests by HTTP method (GET, POST, etc.) and URL path. Route definitions take the form app.METHOD(path, callback), where the callback executes when a matching request is received.',
    bnAnswer: 'এক্সপ্রেস রাউটিং ক্লায়েন্টের রিকোয়েস্টের HTTP মেথড (GET, POST ইত্যাদি) এবং URL পাথের সাথে মিল রেখে কাজ করে। রাউট ডিক্লেয়ারেশন app.METHOD(path, callback) আকারে থাকে, যেখানে মিল পাওয়া গেলে কলব্যাকটি রান হয়।',
    enExplanation: `### Explanation
Routing defines how an application responds to a client endpoint request.
Components of a Route:
1. **HTTP Method**: Maps to actions:
   - \`GET\`: Fetch resource data.
   - \`POST\`: Create new resources.
   - \`PUT\`: Update/replace existing resources.
   - \`DELETE\`: Remove resources.
2. **Path**: The URL endpoint (e.g., \`/api/users\`).
3. **Route Handler**: Callback function receiving \`req\` and \`res\` objects, executing the logic.
Express searches routes in the order they are registered in the file. The first route matching both method and path executes.

### Real-World Example
In a user-management system:
- Creating a user: \`app.post('/users', createUser)\`
- Fetching user details: \`app.get('/users/:id', getUser)\`
- Deleting user: \`app.delete('/users/:id', deleteUser)\`

### Best Practice
Use Restful API naming standards. Keep paths pluralized (e.g., \`/api/products\` instead of \`/api/getProduct\`). Use HTTP methods strictly for their intended purposes.

### Common Mistakes
Forgetting that routes are matched in sequential order. If you place a generic wild-card route (like \`app.get('/:id')\`) before a specific route (like \`app.get('/new')\`), the browser will route requests for \`/new\` to the generic route instead.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. Specific route must be first
app.get('/users/active', (req, res) => {
  res.send('Active Users List');
});

// 2. Generic dynamic route
app.get('/users/:userId', (req, res) => {
  res.send(\`User details for ID: \${req.params.userId}\`);
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রাউটিং নির্ধারণ করে কোনো নির্দিষ্ট ইউআরএল ও মেথডের জন্য অ্যাপ্লিকেশন কী রেসপন্স করবে।
রাউটের উপাদানসমূহ:
১. **HTTP মেথড**:
   - \`GET\`: ডেটা রিড বা সার্চ করার জন্য।
   - \`POST\`: নতুন ডেটা যোগ করার জন্য।
   - \`PUT\`: পূর্বের ডেটা সম্পূর্ণ আপডেট করার জন্য।
   - \`DELETE\`: ডেটা রিমুভ করার জন্য।
২. **পাথ**: ইউআরএল এন্ডপয়েন্ট (যেমন: \`/api/users\`)।
৩. **রাউট হ্যান্ডলার**: কলব্যাক ফাংশন যা \`req\` ও \`res\` অবজেক্ট গ্রহণ করে প্রসেস সম্পন্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ম্যানেজমেন্ট সিস্টেমে:
- ইউজার তৈরি: \`app.post('/users', createUser)\`
- ইউজার রিড: \`app.get('/users/:id', getUser)\`
- ইউজার ডিলিট: \`app.delete('/users/:id', deleteUser)\`

### উত্তম অনুশীলন
RESTful এপিআই ডিজাইন স্ট্যান্ডার্ড অনুসরণ করুন। ইউআরএল রাউটগুলোর নাম বহুবচন (Plural) রাখুন (যেমন: \`/api/products\` এর বদলে \`/api/getProduct\` না লেখা)। HTTP মেথডগুলোর সঠিক ব্যবহার নিশ্চিত করুন।

### সাধারণ ভুলসমূহ
রাউটের ক্রমানুসার মনে না রাখা। ডাইনামিক রাউট (যেমন \`/:id\`) যদি ফিক্সড রাউটের (যেমন \`/new\`) আগে ডিক্লেয়ার করা হয়, তবে \`/new\` কল করলে ডাইনামিক রাউটটি ফায়ার হয়ে যাবে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// ১. ফিক্সড রাউট আগে রাখতে হবে
app.get('/users/active', (req, res) => {
  res.send('সক্রিয় ইউজার তালিকা');
});

// ২. ডাইনামিক রাউট পরে রাখতে হবে
app.get('/users/:userId', (req, res) => {
  res.send(\`ইউজার আইডি: \${req.params.userId}\`);
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-20',
    title: 'Explain route parameters (req.params) vs query parameters (req.query) in Express.js.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Request Parameters', 'Query String', 'Routing'],
    enAnswer: 'Route parameters (req.params) are dynamic segments of the URL path used to identify specific resources. Query parameters (req.query) are key-value pairs appended at the end of the URL after "?" used for filtering, sorting, or pagination.',
    bnAnswer: 'রাউট প্যারামিটার (req.params) হলো ইউআরএল পাথের ডাইনামিক অংশ যা সুনির্দিষ্ট রিসোর্স চিহ্নিত করতে ব্যবহৃত হয়। কোয়েরি প্যারামিটার (req.query) হলো "?" এর পর যুক্ত কী-ভ্যালু পেয়ার যা মূলত ফিল্টারিং, সর্টিং বা পেজিনেশনের জন্য ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Understanding data capture inside Express routes:
1. **Route Parameters (\`req.params\`)**:
   - Defined in the route path using colons: \`app.get('/books/:id')\`.
   - Used to reference a resource directly.
   - Example URL: \`/books/4829\` -> \`req.params.id\` resolves to \`"4829"\`.
2. **Query Parameters (\`req.query\`)**:
   - Not explicitly declared in the route path definition: \`app.get('/books')\`.
   - Appended at the end of URL.
   - Example URL: \`/books?genre=fiction&sortBy=title\` -> \`req.query\` resolves to \`{ genre: "fiction", sortBy: "title" }\`.

### Real-World Example
In an e-commerce platform:
- Viewing a single specific product: \`GET /products/iphone-15\` (\`req.params.id\` is \`"iphone-15"\`).
- Searching/filtering products: \`GET /products?category=phones&limit=10&page=2\` (\`req.query\` filters the phone list).

### Best Practice
Use route parameters (\`req.params\`) to fetch a unique document or resource. Use query parameters (\`req.query\`) for search strings, filters, page sizes, sorting states, or search pagination requests.

### Common Mistakes
Forgetting that both \`req.params\` and \`req.query\` values are initially read as **strings** by the parser. If you expect a number for pagination limits or ID comparisons, convert the value manually using \`parseInt(value, 10)\`.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// Fetching single resource (route params) with optional query sorting
app.get('/api/users/:id/logs', (req, res) => {
  const userId = req.params.id; // dynamic ID
  const limit = parseInt(req.query.limit, 10) || 5; // query parameters fallback
  
  res.json({
    message: \`Logs for user: \${userId}\`,
    limitFetched: limit
  });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেস রাউটে ডাটা রিসিভ করার প্রধান দুটি মাধ্যম:
১. **রাউট প্যারামিটার (\`req.params\`)**:
   - কোলন চিহ্নের মাধ্যমে রাউট পাথে নির্ধারণ করা হয়: \`app.get('/books/:id')\`।
   - এটি নির্দিষ্ট একটি ডক বা রিসোর্স আইডেন্টিফাই করে।
   - উদাহরণ ইউআরএল: \`/books/4829\` -> \`req.params.id\` এর মান হবে \`"4829"\`।
২. **কোয়েরি প্যারামিটার (\`req.query\`)**:
   - এটি রাউটের পাথে ডিক্লেয়ার করার প্রয়োজন পড়ে না: \`app.get('/books')\`।
   - ইউআরএল পাথের শেষে কী-ভ্যালু জোড়া হিসেবে পাঠানো হয়।
   - উদাহরণ ইউআরএল: \`/books?genre=fiction&sortBy=title\` -> \`req.query\` অবজেক্টটি হবে \`{ genre: "fiction", sortBy: "title" }\`।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটে:
- একটি নির্দিষ্ট আইফোন দেখতে: \`GET /products/iphone-15\` (\`req.params\` ব্যবহার করা হয়)।
- অনেক ফোন ফিল্টার বা সার্চ করতে: \`GET /products?category=phones&limit=10\` (\`req.query\` ব্যবহার করা হয়)।

### উত্তম অনুশীলন
নির্দিষ্ট কোনো সোর্স বা ডক আইডি পাঠাতে রাউট প্যারামিটার (\`req.params\`) ব্যবহার করুন। পেজ ফিল্টারিং, সর্টিং, সার্চ কিওয়ার্ড ও পেজিনেশন সীমার জন্য কোয়েরি প্যারামিটার (\`req.query\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে রাখা উচিত যে \`req.params\` এবং \`req.query\` থেকে পাওয়া সব ভ্যালুই ডিফল্টভাবে **স্ট্রিং (string)** হিসেবে আসে। ক্যালকুলেশন বা ডাটাবেস কোয়েরির জন্য এগুলো ব্যবহার করার আগে \`parseInt()\` দিয়ে নাম্বারে কনভার্ট করে নেওয়া উচিত।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// রাউট প্যারামিটার ও কোয়েরি প্যারামিটার রিসিভ করা
app.get('/api/users/:id/logs', (req, res) => {
  const userId = req.params.id; 
  const limit = parseInt(req.query.limit, 10) || 5; 
  
  res.json({
    message: \`ইউজার আইডি: \${userId} এর লগসমূহ\`,
    limitFetched: limit
  });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-21',
    title: 'What is middleware in Express.js and how does it work?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Middleware', 'Execution Pipeline', 'Architecture'],
    enAnswer: 'Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application request-response cycle. They can execute code, modify req/res, end the cycle, or pass execution using next().',
    bnAnswer: 'মিডলওয়্যার হলো এমন কিছু ফাংশন যা এক্সপ্রেস অ্যাপ্লিকেশনের রিকোয়েস্ট অবজেক্ট (req), রেসপন্স অবজেক্ট (res) এবং পরবর্তী মিডলওয়্যার ফাংশন (next) অ্যাক্সেস করতে পারে। এগুলো কোড রান করতে, req/res মডিফাই করতে এবং next() কলের মাধ্যমে পরবর্তী ধাপে পাস করতে পারে।',
    enExplanation: `### Explanation
Express is essentially a stack of middleware functions. A middleware function receives three parameters: \`(req, res, next)\`.
Key Capabilities:
1. **Execute Code**: Perform logging, analytics, parsing.
2. **Modify Request & Response**: For example, verifying a token and mounting user details: \`req.user = decodedUser\`.
3. **End Request Cycle**: Send data back immediately (e.g. if authorization checks fail, respond with 401).
4. **Call \`next()\`**: If the middleware does not end the cycle, it MUST call \`next()\` to pass control to the next handler in line.

Types of Middleware:
- Application-level: \`app.use()\`
- Router-level: \`router.use()\`
- Error-handling: \`(err, req, res, next)\`
- Built-in: \`express.json()\`
- Third-party: \`cors()\`, \`helmet()\`

### Real-World Example
Before a user checks out an order, a middleware verifies if their login token is valid. If it is valid, \`next()\` is called. If not, the server responds with a 401 Unauthorized status, blocking access.

### Best Practice
Every middleware must either call \`next()\` or end the request-response cycle (e.g. by sending \`res.json()\`). Failing to do either will cause the client's request to hang forever.

### Common Mistakes
Forgetting to call \`next()\` in your custom middleware, leaving the client loading infinitely.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// Custom Middleware: Log incoming requests
const requestLogger = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next(); // MUST call next() to continue
};

app.use(requestLogger);

app.get('/api/data', (req, res) => {
  res.send('Success');
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেসজেএস মূলত মিডলওয়্যার ফাংশনগুলোর সমষ্টি। প্রতিটি মিডলওয়্যার ৩টি প্যারামিটার পায়: \`(req, res, next)\`।
এর কাজসমূহ:
১. **কোড রান করা**: ট্র্যাকিং লগ তৈরি বা ডাটা রিড করা।
২. **রিকোয়েস্ট ও রেসপন্স মডিফাই**: যেমন টোকেন চেক করে ইউজার ডাটা যুক্ত করা: \`req.user = user\`।
৩. **রিকোয়েস্ট সাইকেল সম্পন্ন করা**: রিকোয়েস্টে এরর থাকলে সরাসরি রেসপন্স পাঠিয়ে কানেকশন ক্লোজ করা (যেমন ৪০১ কোড)।
৪. **\`next()\` কল করা**: কাজ শেষ হলে পরবর্তী মিডলওয়্যার বা রাউট হ্যান্ডলারে পাঠাতে এটি অবশ্যই কল করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার পেমেন্ট করার আগে একটি মিডলওয়্যার ইউজার লগইন টোকেন ভ্যালিড কিনা তা পরীক্ষা করবে। যদি সঠিক থাকে তবে \`next()\` কল করে পরবর্তী লাইনে পাঠাবে, সঠিক না হলে সরাসরি ৪০১ স্ট্যাটাস কোড পাঠিয়ে দিবে।

### উত্তম অনুশীলন
প্রতিটি মিডলওয়্যারে কাজ শেষে অবশ্যই \`next()\` কল করুন অথবা সরাসরি রেসপন্স পাঠিয়ে ক্লোজ করুন, নতুবা ক্লায়েন্ট ব্রাউজার রিকোয়েস্ট ঝুলিয়ে রাখবে।

### সাধারণ ভুলসমূহ
মিডলওয়্যারের ভেতর কাজ সম্পন্নের পর \`next()\` মেথড কল করতে ভুলে যাওয়া, যার ফলে ক্লায়েন্ট পেজ আজীবন লোডিং স্পিনার দেখায়।

### কোড উদাহরণ
\`\`\`javascript
const express = require('express');
const app = express();

// কাস্টম মিডলওয়্যার: রিকোয়েস্ট লগ করা
const requestLogger = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next(); // পরবর্তী ধাপে যেতে এটি আবশ্যিক
};

app.use(requestLogger);

app.get('/api/data', (req, res) => {
  res.send('সফল');
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-22',
    title: 'How do you serve static files in Express.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Static Files', 'Assets', 'Middleware'],
    enAnswer: 'To serve static files (images, CSS, JS), use the built-in express.static() middleware function, passing the absolute path of the directory containing the assets.',
    bnAnswer: 'স্থির বা স্ট্যাটিক ফাইল (ইমেজ, সিএসএস, জেএস) রিড করতে এক্সপ্রেসের ইন-বিল্ট express.static() মিডলওয়্যার ফাংশনটি ব্যবহার করা হয় এবং এর ভেতর ফাইলের ডিরেক্টরি পাথ অ্যাসাইন করতে হয়।',
    enExplanation: `### Explanation
Web applications often need to serve assets like images, stylesheets, and client-side JavaScript bundle files directly to the client browser.
- **\`express.static(root, [options])\`**: The built-in middleware function in Express.
- By mounting this middleware, assets inside the target folder are exposed publicly.
- For security and path consistency, it is best to combine \`express.static\` with the \`path\` module to compute the absolute path of the assets folder.
- You can also mount static paths under a virtual directory prefix (e.g., \`/static/images.jpg\`).

### Real-World Example
If your project contains a folder named \`public\` holding a \`logo.png\` image, mounting \`express.static\` exposes this image so it can be requested at \`http://localhost:3000/logo.png\` or embedded as \`<img src="/logo.png" />\` in HTML.

### Best Practice
Always resolve absolute paths using \`path.join(__dirname, 'public')\` inside \`express.static()\` calls. Relative folder paths can cause path resolution failures if the app is launched from outside the project's root folder.

### Common Mistakes
Including the directory name inside the URL request. For example, if you serve \`express.static('public')\`, you must request \`/logo.png\`, NOT \`/public/logo.png\`, unless you explicitly mounted it under a virtual prefix.

### Code Example
\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

// 1. Serving directly from absolute 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. Serving with virtual path prefix '/static'
app.use('/static', express.static(path.join(__dirname, 'assets')));

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েব অ্যাপ্লিকেশনে ইমেজ, লোগো, সিএসএস বা স্ক্রিপ্ট ক্লায়েন্ট ব্রাউজারে সরাসরি পাঠানোর প্রয়োজন পড়ে।
- **\`express.static()\`**: এক্সপ্রেসের বিল্ট-ইন মিডলওয়্যার মেথড।
- এই মিডলওয়্যারটি যুক্ত করলে নির্দেশিত ডিরেক্টরির ফাইলগুলো ব্রাউজারে পাবলিকলি ভিজিবল হয়ে যায়।
- ওএস পাথের নিরাপত্তা ও নির্ভুলতার জন্য \`path\` মডিউল ব্যবহার করে অ্যাবসোলিউট পাথ রিড করে নেওয়া ওয়ান-টাইপ কাজ।
- আপনি চাইলে নির্দিষ্ট ভার্চুয়াল প্রিপিক্স পাথও যোগ করতে পারেন (যেমন: \`/static/logo.png\`)।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার প্রজেক্টের ভেতরে \`public\` ফোল্ডারের মধ্যে \`logo.png\` ফাইল আছে। \`express.static\` ব্যবহার করলে ব্রাউজারে সরাসরি \`http://localhost:3000/logo.png\` হিটের মাধ্যমে ছবিটি দেখা যাবে।

### উত্তম অনুশীলন
পাথ সম্পর্কিত জটিলতা এড়াতে সর্বদা \`path.join(__dirname, 'public')\` দিয়ে পাথ ডিক্লেয়ার করুন। তা না হলে অন্য ডিরেক্টরি থেকে প্রসেস স্টার্ট করলে নোডজেএস ফোল্ডারটি খুঁজে পাবে না।

### সাধারণ ভুলসমূহ
পাথের ইউআরএল রিকোয়েস্টে ফোল্ডার নেম যুক্ত করে বসা। যেমন \`express.static('public')\` সেট করার পর ইউআরএল কল করার সময় \`/public/logo.png\` লেখা (সঠিকটি হবে সরাসরি \`/logo.png\`)।

### Code Example
\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

// ১. 'public' ফোল্ডারের অ্যাবসোলিউট পাথ থেকে ফাইল রিড করা
app.use(express.static(path.join(__dirname, 'public')));

// ২. ভার্চুয়াল প্রিপিক্স '/static' যোগ করে ফাইল রিড করা
app.use('/static', express.static(path.join(__dirname, 'assets')));

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-23',
    title: 'What are the differences between res.send, res.json, and res.end in Express.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Response Methods', 'JSON', 'HTTP Headers'],
    enAnswer: 'res.send() is a general-purpose response method that handles strings, HTML, buffers, or objects, automatically setting Content-Type. res.json() specifically stringifies objects/arrays and sets Content-Type to application/json. res.end() finishes the response cycle without sending any body payload.',
    bnAnswer: 'res.send() হলো একটি সাধারণ রেসপন্স মেথড যা স্ট্রিং, এইচটিএমএল বা বাফার ডাটা রিসিভ করে অটোমেটিক Content-Type সেট করে দেয়। res.json() কেবল অবজেক্ট বা অ্যারে গ্রহণ করে এবং Content-Type সেট করে application/json। res.end() কোনো প্রকার ডাটা বা বডি ছাড়া রেসপন্স প্রসেস শেষ করে।',
    enExplanation: `### Explanation
How to structure responses:
1. **\`res.send(body)\`**:
   - Analyzes response content: if you pass a string, it sets \`text/html\`. If you pass an object or array, it internally calls \`res.json()\`.
2. **\`res.json(body)\`**:
   - Explicitly serializes objects/arrays using \`JSON.stringify()\`.
   - Forces \`Content-Type: application/json\`.
   - Ensures correct encoding settings for API consumers.
3. **\`res.end()\`**:
   - Finishes the request cycle quickly without sending content.
   - Useful for HTTP status codes that shouldn't return body payloads (like 204 No Content) or when ending connections after dynamic stream pipe writes.

### Real-World Example
- Returning database JSON data: Use \`res.status(200).json(users)\`.
- Returning simple text status: Use \`res.send('Success')\`.
- Sending 204 status on data deletes: Use \`res.status(204).end()\`.

### Best Practice
For REST APIs, always use \`res.json()\` rather than \`res.send()\` to ensure consistent \`application/json\` headers and JSON formatting, even when sending empty arrays or objects.

### Common Mistakes
Using \`res.send()\` when you intend to send empty status codes (like 204), which may send default text bodies or headers. Use \`res.status(204).end()\` instead.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. Sending JSON response (API standard)
app.get('/user', (req, res) => {
  res.json({ id: 1, name: 'Rohit' });
});

// 2. Sending empty status response
app.delete('/user/:id', (req, res) => {
  res.status(204).end(); // No content body sent
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেসপন্স ডাটা হ্যান্ডেল করার তিনটি মেথডের পার্থক্য:
১. **\`res.send(body)\`**:
   - এটি বহুমুখী ডাটা প্রসেস করে। পাস করা ডাটা স্ট্রিং হলে \`text/html\`, আর অবজেক্ট বা অ্যারে হলে ইন্টারনাল \`res.json()\` কল করে রেসপন্স পাঠায়।
২. **\`res.json(body)\`**:
   - এটি সুনির্দিষ্টভাবে অবজেক্ট বা অ্যারেকে \`JSON.stringify()\` করে পাঠায়।
   - এটি \`Content-Type\` হেডার সেট করে \`application/json\`।
৩. **\`res.end()\`**:
   - কোনো ডাটা বা টেক্সট বডি ছাড়াই রেসপন্স সেশন বন্ধ করে দেয়।
   - এটি বিশেষত স্ট্যাটাস কোড ২০৪ (No Content) বা স্ট্রিম পাইপ শেষে কানেকশন ক্লোজ করতে কাজে লাগে।

### বাস্তব-ভিত্তিক উদাহরণ
- এপিআই থেকে ডেটা পাঠাতে: \`res.status(200).json(users)\`।
- সাধারণ টেক্সট পাঠাতে: \`res.send('সফল হয়েছে')\`।
- ডাটাবেসের ডাটা ডিলিট করার পর খালি রেসপন্স পাঠাতে: \`res.status(204).end()\`।

### উত্তম অনুশীলন
ডেভেলপার এপিআই তৈরির সময় সর্বদা \`res.json()\` ব্যবহার করুন। এটি এপিআই ক্লায়েন্ট ব্রাউজারের জন্য কড়া ফরম্যাট এবং সঠিক \`application/json\` হেডার নিশ্চিত করে।

### সাধারণ ভুলসমূহ
খালি রেসপন্স স্ট্যাটাস কোড (যেমন ২০৪) পাঠানোর জন্য \`res.send()\` ব্যবহার করা, যার ফলে ডিফল্ট কিছু মেসেজ বডি চলে যেতে পারে। এ ধরনের ক্ষেত্রে \`res.status(204).end()\` ব্যবহার করুন।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// ১. জেএসন রেসপন্স পাঠানো
app.get('/user', (req, res) => {
  res.json({ id: 1, name: 'Rohit' });
});

// ২. ডাটা ছাড়া রেসপন্স সেশন সমাপ্ত করা
app.delete('/user/:id', (req, res) => {
  res.status(204).end(); // কোনো বডি যাবে না
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-24',
    title: 'Explain the Request (req) and Response (res) objects in Express.js.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Request Object', 'Response Object', 'HTTP'],
    enAnswer: 'The Request object (req) represents the HTTP request and contains query string parameters, body data, headers, and params. The Response object (res) represents the HTTP response that Express sends when it receives a request.',
    bnAnswer: 'রিকোয়েস্ট অবজেক্ট (req) ক্লায়েন্টের পাঠানো HTTP রিকোয়েস্টকে রিপ্রেজেন্ট করে এবং এতে কোয়েরি স্ট্রিং, রিকোয়েস্ট বডি, হেডার ও প্যারামিটার থাকে। রেসপন্স অবজেক্ট (res) সার্ভার থেকে ক্লায়েন্টে পাঠানো HTTP রেসপন্সকে নির্দেশ করে।',
    enExplanation: `### Explanation
These objects are the foundation of Express request processing cycles.
- **Request Object (\`req\`)**:
  - \`req.body\`: Holds data sent in the request body (needs body-parser or \`express.json()\` middleware).
  - \`req.headers\`: Holds incoming HTTP header strings (e.g. \`Authorization\`, \`User-Agent\`).
  - \`req.method\`: HTTP request method type (e.g. \`GET\`, \`POST\`).
  - \`req.ip\`: Client IP address.
- **Response Object (\`res\`)**:
  - \`res.status(code)\`: Sets the HTTP status code (e.g. \`200\`, \`404\`, \`500\`).
  - \`res.set(headers)\`: Adds HTTP response headers.
  - \`res.cookie(name, value)\`: Attaches client cookie data.

### Real-World Example
When a user logs in, the server inspects the credentials from \`req.body.password\` and if verified, uses \`res.cookie()\` or \`res.json()\` to send back an authentication token to the user's browser.

### Best Practice
Treat \`req\` as read-only for incoming headers. If you need to modify it or add helper context properties (such as putting decoded user IDs after token verify), add it as a new custom key: \`req.user = user;\` instead of modifying core properties.

### Common Mistakes
Attempting to send multiple responses for a single request (e.g. calling \`res.json()\` and then \`res.send()\` in the same handler), which throws a \`Cannot set headers after they are sent to the client\` runtime error.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/info', (req, res) => {
  // 1. Read Request parameters
  const userAgent = req.headers['user-agent'];

  // 2. Set Response headers and send JSON
  res.status(200)
     .set('X-Custom-Header', 'DevPrep')
     .json({ browser: userAgent });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিকোয়েস্ট ও রেসপন্স অবজেক্ট এক্সপ্রেস প্রসেসিংয়ের দুটি মূল স্তম্ভ।
- **রিকোয়েস্ট অবজেক্ট (\`req\`)**:
  - \`req.body\`: ক্লায়েন্টের পাঠানো পোস্ট বডি ডাটা ধারণ করে (এর জন্য বডি-পার্সার মিডলওয়্যার প্রয়োজন)।
  - \`req.headers\`: ইনকামিং এইচটিটিপি হেডার রিড করে (যেমন: \`Authorization\`)।
  - \`req.method\`: এইচটিটিপি মেথড টাইপ (যেমন: \`GET\`, \`POST\`)।
  - \`req.ip\`: ক্লায়েন্টের আইপি অ্যাড্রেস।
- **রেসপন্স অবজেক্ট (\`res\`)**:
  - \`res.status(code)\`: এইচটিটিপি স্ট্যাটাস কোড সেট করে।
  - \`res.set()\`: রেসপন্স হেডার সেট করতে ব্যবহৃত হয়।
  - \`res.cookie()\`: ক্লায়েন্ট ব্রাউজারে কুকি অ্যাটাচ করে।

### বাস্তব-ভিত্তিক উদাহরণ
লগইন প্রসেসে সার্ভার রিকোয়েস্ট থেকে ডাটা পড়ার জন্য \`req.body.password\` অ্যাক্সেস করে এবং সঠিক পাসওয়ার্ড পেলে \`res.cookie()\` এর মাধ্যমে ইউজারের ব্রাউজারে টোকেন কুকি রাইট করে দেয়।

### উত্তম অনুশীলন
\`req\` অবজেক্টে সরাসরি কোনো প্রোপার্টি চেঞ্জ করবেন না। কাস্টম ডাটা পাস করার জন্য নতুন কী বা কিউ যোগ করতে পারেন, যেমন: \`req.user = decodedToken;\`।

### সাধারণ ভুলসমূহ
একই রাউট লাইফে একাধিকবার রেসপন্স মেথড কল করা (যেমন: \`res.json()\` করার পর পুনরায় নিচে \`res.send()\` করা), যার ফলে সার্ভারে \`Cannot set headers after they are sent to the client\` এরর আসে।

### কোড উদাহরণ
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/info', (req, res) => {
  // ১. রিকোয়েস্ট হেডার পড়া
  const userAgent = req.headers['user-agent'];

  // ২. রেসপন্স হেডার সেট করা এবং জেএসন ডাটা পাঠানো
  res.status(200)
     .set('X-Custom-Header', 'DevPrep')
     .json({ browser: userAgent });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-25',
    title: 'Explain the significance of HTTP status codes in responses.',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'HTTP Status Codes', 'API Design', 'Best Practice'],
    enAnswer: 'HTTP status codes indicate whether a specific HTTP request has been successfully completed. They are categorized into 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), and 5xx (Server Error).',
    bnAnswer: 'এইচটিটিপি স্ট্যাটাস কোডগুলো নির্দেশ করে যে একটি নির্দিষ্ট রিকোয়েস্ট সফলভাবে সম্পন্ন হয়েছে নাকি কোনো এরর ঘটেছে। এগুলো ৫টি বিভাগে বিভক্ত: ১০০-১৯৯ (তথ্যমূলক), ২০০-২৯৯ (সফল), ৩০০-৩৯৯ (রিডাইরেকশন), ৪০০-৪৯৯ (ক্লায়েন্ট এরর), এবং ৫০০-৫৯৯ (সার্ভার এরর)।',
    enExplanation: `### Explanation
Using correct HTTP status codes makes your APIs REST-compliant and easy to integrate with frontend architectures.
Key Categories:
1. **2xx (Success)**:
   - \`200 OK\`: Request succeeded.
   - \`201 Created\`: Resource successfully created (ideal for POST/PUT).
   - \`204 No Content\`: Request succeeded, but no body payload is returned (ideal for DELETE).
2. **3xx (Redirection)**:
   - \`301 Moved Permanently\` / \`302 Found\`: Route redirects.
3. **4xx (Client Errors)**:
   - \`400 Bad Request\`: Invalid syntax, payload validation failed.
   - \`401 Unauthorized\`: Missing or invalid authentication token.
   - \`403 Forbidden\`: Authenticated but does not have permission keys to access resource.
   - \`404 Not Found\`: Route or document does not exist.
4. **5xx (Server Errors)**:
   - \`500 Internal Server Error\`: Server-side code crashed or database query failed.

### Real-World Example
If a user submits an empty registration form, returning a \`400 Bad Request\` allows the client-side framework (React) to display form validation warnings immediately. Returning a \`500\` error is misleading because the server is healthy; it was simply a validation failure.

### Best Practice
Never return generic \`200 OK\` responses for error outcomes. Return appropriate \`4xx\` status codes for validation or authorization issues, and \`500\` for actual runtime crashes.

### Common Mistakes
Returning \`200 OK\` with a body like \`{ error: "Unauthorized" }\` instead of using the native \`401\` status code. This breaks automatic client fetch middleware checks.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.post('/api/items', (req, res) => {
  const { name } = req.query; // Demo target
  
  if (!name) {
    // Client error: missing data
    return res.status(400).json({ error: 'Name parameter is required' });
  }

  // Success: Created
  res.status(201).json({ id: 101, name });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সঠিক এইচটিটিপি স্ট্যাটাস কোড ব্যবহার করলে এপিআই ইন্টিগ্রেশন সহজ ও প্রফেশনাল হয়।
প্রধান ক্যাটাগরিসমূহ:
১. **২০০-২৯৯ (সফলতা)**:
   - \`200 OK\`: রিকোয়েস্ট সফলভাবে শেষ হয়েছে।
   - \`201 Created\`: নতুন ডাটা/রিসোর্স সফলভাবে তৈরি হয়েছে (POST/PUT-এর জন্য সেরা)।
   - \`204 No Content\`: কাজ সফল হয়েছে কিন্তু বডিতে কোনো ডাটা পাঠানো হয়নি (DELETE-এর জন্য সেরা)।
২. **৩০০-৩৯৯ (রিডাইরেকশন)**:
   - \`301\` বা \`302\`: পেজ অন্য ইউআরএলে স্থানান্তরিত হয়েছে।
৩. **৪০০-৪৯৯ (ক্লায়েন্ট সাইড এরর)**:
   - \`400 Bad Request\`: ফর্ম ভ্যালিডেশন এরর বা ভুল ফরম্যাটে ডাটা পাঠানো।
   - \`401 Unauthorized\`: লগইন টোকেন না দেওয়া বা টোকেন মেয়াদোত্তীর্ণ হওয়া।
   - \`403 Forbidden\`: লগইন ঠিক আছে কিন্তু ওই পেজ দেখার পারমিশন নেই।
   - \`404 Not Found\`: রাউট বা ডকুমেন্টের অস্তিত্ব নেই।
৪. **৫০০-৫৯৯ (সার্ভার সাইড এরর)**:
   - \`500 Internal Server Error\`: সার্ভার কোড ক্র্যাশ বা ডাটাবেস ডাউন হওয়া।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার যদি ইমেইল ছাড়া রেজিস্ট্রেশন ফর্ম সাবমিট করে, সার্ভার থেকে \`400 Bad Request\` ফায়ার করা উচিত। যদি সার্ভার \`500 Internal Server Error\` দেয়, তাহলে ক্লায়েন্ট মনে করবে সার্ভার ভেঙে গেছে, যা আসলে ভুল।

### উত্তম অনুশীলন
ভুল ইনপুটের জন্য কখনো স্ট্যাটাস কোড \`200 OK\` দেবেন না। উপযুক্ত \`4xx\` কোড ব্যবহার করুন। কোনো ফাইল না পেলে স্ট্যাটাস কোড \`404\` দিন।

### সাধারণ ভুলসমূহ
রেসপন্সে \`200 OK\` স্ট্যাটাস কোড দিয়ে বডিতে \`{ error: "Unauthorized" }\` টেক্সট লিখে পাঠানো। এটি ক্লায়েন্ট ব্রাউজারের অটো-এরর ক্যাচিং মেকানিজমকে বিভ্রান্ত করে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.post('/api/items', (req, res) => {
  const { name } = req.query; // টেস্ট ডেমো
  
  if (!name) {
    // ক্লায়েন্ট ভুল করেছে: নাম পাঠানো হয়নি
    return res.status(400).json({ error: 'নাম প্রোপার্টিটি পাঠানো আবশ্যক' });
  }

  // সফলভাবে তৈরি হয়েছে
  res.status(201).json({ id: 101, name });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-26',
    title: 'What is CORS and how do you configure it in an Express.js application?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'CORS', 'Security', 'Middleware'],
    enAnswer: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from requesting resources from a different domain than the one that served the page. In Express, it is configured using the third-party cors middleware.',
    bnAnswer: 'CORS (Cross-Origin Resource Sharing) হলো ব্রাউজারের একটি নিরাপত্তা ব্যবস্থা যা অন্য ডোমেইন থেকে সার্ভারের রিসোর্স রিকোয়েস্ট করাকে রেস্ট্রিক্ট বা বাধা দেয়। এক্সপ্রেসজেএস-এ এটি থার্ড-পার্টি cors মিডলওয়্যার প্যাকেজ দিয়ে কনফিগার করা হয়।',
    enExplanation: `### Explanation
CORS is enforced strictly by browsers:
1. **Origin definition**: An origin is a combination of protocol, domain, and port (e.g. \`http://localhost:3000\` vs \`https://devprep.io\`).
2. **Block Case**: If a frontend React application running on \`http://localhost:5173\` requests data from an Express API running on \`http://localhost:3000\`, the browser blocks the response unless the server explicitly sends headers permitting that origin.
3. **CORS Headers**: The server sends \`Access-Control-Allow-Origin: *\` or specifies individual allowed origins.

Using the \`cors\` middleware handles these HTTP headers automatically in your routing pipeline.

### Real-World Example
During development, your React frontend cannot display database tables from your local Express server, and the browser console throws a "Blocked by CORS policy" error. Installing and enabling CORS middleware resolves this instantly.

### Best Practice
Never use wildcard \`*\` in production environment settings: \`app.use(cors({ origin: '*' }))\`. Always specify a whitelist array containing only your trusted production frontend domains (e.g., \`https://devprep.io\`).

### Common Mistakes
Forgetting that CORS is a browser-level security restriction. Server-to-server calls (e.g. Node-to-Node or Postman) bypass CORS restrictions entirely; they are only enforced when browser JavaScript initiates calls.

### Code Example
\`\`\`javascript
const express = require('express');
const cors = require('cors');
const app = express();

// 1. Strict CORS configuration
const corsOptions = {
  origin: ['https://devprep.io', 'http://localhost:5173'], // Whitelisted domains
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/public-data', (req, res) => {
  res.json({ message: 'Secure cross-origin data' });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CORS ব্রাউজারের একটি সিকিউরিটি মেকানিজম যা ব্রাউজার দ্বারা নিয়ন্ত্রিত হয়:
১. **অরিজিন (Origin)**: অরিজিন তৈরি হয় প্রটোকল, ডোমেইন ও পোর্ট দিয়ে (যেমন: \`http://localhost:5173\` বনাম \`http://localhost:3000\`)।
২. **ব্লকিং সিনারিও**: রিয়্যাক্ট কোড যদি পোর্ট ৫১৭৩ থেকে সার্ভার পোর্ট ৩০০০-এ এপিআই রিকোয়েস্ট করে, ব্রাউজার নিরাপত্তা স্বার্থে রেসপন্স ব্লক করে দেবে যতক্ষণ না সার্ভার থেকে পারমিশন হেডার পাঠানো হয়।
৩. **পারমিশন হেডার**: সার্ভার \`Access-Control-Allow-Origin\` হেডারে অরিজিনের নাম লিখে পাঠায়।

এক্সপ্রেসজেএস-এ \`cors\` মিডলওয়্যার প্যাকেজটি যুক্ত করলে এই হেডার হ্যান্ডলিংয়ের কাজ খুব সহজে করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
লোকাল পিসিতে ডেভেলপমেন্টের সময় রিয়্যাক্ট ফ্রন্টএন্ড রান করার পর যদি ব্যাকএন্ড এপিআই ডাটা রেন্ডার হতে না পারে এবং ব্রাউজার কনসোলে "Blocked by CORS policy" এরর দেখায়, তবে ব্যাকএন্ড কোডে CORS চালু করলেই এটি ঠিক হয়ে যাবে।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে কখনো অরিজিন হিসেবে ওয়াইল্ডকার্ড স্টার ব্যবহার করবেন না: \`origin: '*'\`। এতে যেকোনো ওয়েবসাইট আপনার ডাটা চুরি করার সুযোগ পায়। সর্বদা নির্দিষ্ট বিশ্বস্ত ডোমেইনগুলোর নামের তালিকা লিখে রাখুন।

### সাধারণ ভুলসমূহ
মনে করা যে CORS ব্যাকএন্ডের সিকিউরিটি চেক। পোস্টম্যান (Postman) বা অন্য কোনো সার্ভার থেকে কল পাঠালে CORS কার্যকর হয় না, এটি কেবল ব্রাউজারের ভেতরেই কাজ করে।

### Code Example
\`\`\`javascript
const express = require('express');
const cors = require('cors');
const app = express();

// ১. সুরক্ষিত উপায়ে নির্দিষ্ট অরিজিন এলাউ করা
const corsOptions = {
  origin: ['https://devprep.io', 'http://localhost:5173'], // অনুমোদিত ডোমেইন সমূহ
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/public-data', (req, res) => {
  res.json({ message: 'নিরাপদ ক্রস-অরিজিন ডাটা' });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-27',
    title: 'How do you parse JSON and URL-encoded request bodies in Express.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Request Body', 'Parsing', 'Middleware'],
    enAnswer: 'In Express, request bodies are parsed using built-in middleware functions: express.json() for JSON payloads, and express.urlencoded({ extended: true }) for form-submitted URL-encoded payloads.',
    bnAnswer: 'এক্সপ্রেসজেএস-এ রিকোয়েস্ট বডি পার্স করতে বিল্ট-ইন মিডলওয়্যার ব্যবহৃত হয়: জেএসন পে-লোডের জন্য express.json() এবং এইচটিএমএল ফর্ম ডাটার জন্য express.urlencoded({ extended: true })।',
    enExplanation: `### Explanation
HTTP requests transfer data payloads as raw streams. To read JSON or form submissions inside route controllers:
1. **\`express.json()\`**: Parses incoming requests with JSON payloads and exposes the formatted object on \`req.body\`.
2. **\`express.urlencoded({ extended: true })\`**: Parses key-value pairs formatted as URL-encoded strings (HTML form posts).
   - The \`extended\` option determines parsing library details: \`true\` uses the \`qs\` library (allowing nested objects), while \`false\` uses the native \`querystring\` library.

These must be declared *before* defining route paths, otherwise \`req.body\` will evaluate to \`undefined\`.

### Real-World Example
When submitting a JSON login request with username and password:
\`\`\`json
{ "username": "admin", "password": "123" }
\`\`\`
Without \`app.use(express.json())\`, printing \`req.body\` on your login handler prints \`undefined\`. Adding the middleware lets you immediately read \`req.body.username\`.

### Best Practice
Place body parsers at the very top of your application configuration file. Always set \`extended: true\` inside \`express.urlencoded()\` to support nested form layouts securely.

### Common Mistakes
Forgetting to declare \`app.use(express.json())\` at the beginning of the file, resulting in \`Cannot read properties of undefined (reading 'xyz')\` crashes when trying to parse user inputs.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. Configure body parser middlewares
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

app.post('/api/register', (req, res) => {
  // Access data parsed into req.body
  const { email, password } = req.body;
  res.json({ emailRegistered: email });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিটিপি প্রটোকলে ডাটা সার্ভারে বাইনারি স্ট্রিম আকারে আসে। রাউটের ভেতর এই ডাটা রিড করতে পার্সিং মিডলওয়্যার প্রয়োজন:
১. **\`express.json()\`**: ইনকামিং রিকোয়েস্টের জেএসন ডাটা রিড করে তা অবজেক্ট আকারে \`req.body\`-তে বসিয়ে দেয়।
২. **\`express.urlencoded({ extended: true })\`**: এইচটিএমএল ফর্ম পোস্টের ডাটা পার্স করে।
   - \`extended: true\` অপশনটি জটিল বা নেস্টেড অবজেক্ট রিড করতে \`qs\` লাইব্রেরি ব্যবহার করে। \`false\` দিলে সাধারণ \`querystring\` লাইব্রেরি ব্যবহৃত হয়।

এই মিডলওয়্যারগুলো অবশ্যই রাউটের ওপরে ডিক্লেয়ার করতে হবে, অন্যথায় \`req.body\` এর মান \`undefined\` হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার যখন ইউজারনেম ও পাসওয়ার্ড দিয়ে জেএসন পোস্ট রিকোয়েস্ট করে:
\`\`\`json
{ "username": "admin", "password": "123" }
\`\`\`
আপনি যদি \`app.use(express.json())\` না লেখেন, তবে \`req.body\` প্রিন্ট করলে \`undefined\` দেখাবে।

### উত্তম অনুশীলন
অ্যাপ্লিকেশন কনফিগারেশনের একেবারে শুরুতে বডি পার্সার রাখুন। ফর্ম ডাটা সাবমিটের জন্য সর্বদা \`extended: true\` অপশন সেট রাখুন যাতে ডিরেক্টরি বা নেস্টেড সাব-অবজেক্টগুলো সহজে পার্স করা যায়।

### সাধারণ ভুলসমূহ
রাউটের নিচে \`app.use(express.json())\` কল করা বা লিখতে ভুলে যাওয়া, যার ফলে রিকোয়েস্ট বডি থেকে ডাটা রিড করার সময় \`Cannot read properties of undefined\` এরর এসে সার্ভার ক্র্যাশ করে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// ১. বডি পার্সার মডিউল যুক্ত করা
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post('/api/register', (req, res) => {
  // req.body তে ডাটা অবজেক্ট পাওয়া যাবে
  const { email, password } = req.body;
  res.json({ emailRegistered: email });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-28',
    title: 'What is the purpose of logging middleware like morgan in Express?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Express.js', 'Logging', 'Middleware', 'Morgan'],
    enAnswer: 'Morgan is an HTTP request logger middleware for Node.js. It simplifies tracking by automatically logging details of every incoming request (method, URL, status code, response time) to the console or logs files.',
    bnAnswer: 'Morgan হলো নোডজেএস-এর একটি HTTP রিকোয়েস্ট লগার মিডলওয়্যার। এটি প্রতিটি ইনকামিং রিকোয়েস্টের বিস্তারিত তথ্য (যেমন মেথড, ইউআরএল, স্ট্যাটাস কোড, রেসপন্স টাইম) টার্মিনাল বা লগ ফাইলে অটোমেটিক প্রিন্ট করে ট্র্যাকিং সহজ করে।',
    enExplanation: `### Explanation
In production setups, tracking API traffic is critical to detect latency issues, check server health, and monitor client error spikes.
- **\`morgan\`** intercepts all requests and records performance parameters.
- Common Pre-defined formats:
  - \`'dev'\`: Concise colored output for local development.
  - \`'combined'\`: Standard Apache combined log format for production log collectors.
  - \`'tiny'\`: Minimal output.
- You can customize logging tokens to log user-agent strings, custom headers, or unique request IDs.

### Real-World Example
If an endpoint starts responding with a 500 error, morgan prints:
\`\`\`
GET /api/users 500 24.321 ms - 45
\`\`\`
This shows that \`/api/users\` failed immediately and took 24 milliseconds, pointing developers straight to the database query logic.

### Best Practice
Use the \`'dev'\` format for local coding, and the detailed \`'combined'\` format for staging and production log configurations.

### Common Mistakes
Writing custom \`console.log()\` lines inside every controller route to track client requests instead of using a single global logging middleware like morgan.

### Code Example
\`\`\`javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// 1. Mount morgan developer log formatting
app.use(morgan('dev'));

app.get('/api/test', (req, res) => {
  res.send('Logger tested!');
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশন সার্ভারে এপিআই ট্রাফিক ট্র্যাক করা, এরর লেভেল মনিটর করা এবং ল্যাটেন্সি বা সার্ভার স্পিড হিসাব করতে লগিং আবশ্যিক।
- **\`morgan\`** সব রিকোয়েস্ট প্রসেস করে টার্মিনালে ইনফরমেশন প্রিন্ট করে।
- সাধারণ ফরমেটসমূহ:
  - \`'dev'\`: লোকাল কোড ডেভেলপমেন্টের সময় রঙিন ও সংক্ষিপ্ত আউটপুট দেখায়।
  - \`'combined'\`: প্রোডাকশন লগের জন্য স্ট্যান্ডার্ড অ্যাপাচি লগ ফরম্যাটে ডিটেইলস প্রিন্ট করে।
  - \`'tiny'\`: অত্যন্ত সংক্ষিপ্ত আউটপুট দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের কোনো এন্ডপয়েন্ট ফেইল করলে মরগান টার্মিনালে মেসেজ দেয়:
\`\`\`
GET /api/users 500 24.321 ms - 45
\`\`\`
এটি থেকে ডেভেলপার সাথে সাথে আইডিয়া পান যে গেট রিকোয়েস্টে গেট ২৪ মিলি সেকেন্ড সময় নিয়ে ৫০০ এরর এসেছে, যা ডাটাবেস এরর নির্দেশ করে।

### উত্তম অনুশীলন
ডেভেলপমেন্টে মরগানের \`'dev'\` মোড এবং প্রোডাকশনে সবিস্তার ট্র্যাকিং নিশ্চিত করতে \`'combined'\` মোড বা সমতুল্য গ্লোবাল কনফিগারেশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ
প্রতিটি রাউট কন্ট্রোলারে আলাদা করে ম্যানুয়ালি \`console.log("visited route x")\` লেখা যা প্রজেক্টের কোড জটিল করে তোলে। মরগানের মতো গ্লোবাল মিডলওয়্যার ব্যবহার করা সাশ্রয়ী।

### Code Example
\`\`\`javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// ১. মরগান লগার ইনিশিয়ালাইজ করা
app.use(morgan('dev'));

app.get('/api/test', (req, res) => {
  res.send('মরগান লগার টেস্ট সফল!');
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-29',
    title: 'What is the difference between LTS and Current release versions of Node.js?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'LTS', 'Releases', 'DevOps'],
    enAnswer: 'LTS (Long Term Support) releases focus on stability and security, receiving support for 30 months, and are recommended for production systems. Current releases introduce experimental features, receive updates every 6 months, and are meant for testing new specifications.',
    bnAnswer: 'এলটিএস (LTS - Long Term Support) রিলিজগুলো সিস্টেমের স্থায়িত্ব ও নিরাপত্তার ওপর ফোকাস করে ৩০ মাস পর্যন্ত সাপোর্ট দেয় এবং প্রোডাকশনের জন্য রেকমেন্ডেড। কারেন্ট (Current) রিলিজগুলো নতুন ও এক্সপেরিমেন্টাল ফিচার যুক্ত করে প্রতি ৬ মাসে আপডেট হয় এবং তা নতুন টেকনোলজি ট্রাই করার উদ্দেশ্যে তৈরি।',
    enExplanation: `### Explanation
Node.js follows a structured release roadmap managed by the OpenJS Foundation:
- **LTS (Long Term Support)**:
  - Code names are elements (e.g., Hydrogen, Iron, Jod).
  - Even version numbers (e.g. Node 18, 20, 22).
  - Focuses on enterprise stability. API breaking changes are not introduced here.
  - Receives critical security updates and bug fixes for a long lifespan.
- **Current**:
  - Odd version numbers (e.g. Node 19, 21, 23).
  - Actively updated with experimental ECMAScript features and API improvements.
  - Support transitions to maintenance and ends shortly after the next LTS is released.

### Real-World Example
When setting up a deployment pipeline for a banking application, you must use an LTS version (like Node 20 LTS) to guarantee that security patches are backported without introducing engine features that could break existing code.

### Best Practice
Always run LTS versions on production servers. Use Node Version Manager (\`nvm\`) locally to switch between Node versions easily and ensure your local development node matches the exact version running on your production server.

### Common Mistakes
Deploying enterprise production code using a Node "Current" release version, which reaches End-of-Life (EOL) within a year, forcing premature migration cycles.

### Code Example
\`\`\`bash
# Install and use LTS version of Node.js via NVM (Node Version Manager)
nvm install --lts
nvm use --lts

# Check current active Node version
node -v
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওপেনজেএস ফাউন্ডেশন নোডজেএস-এর রিলিজ রোডম্যাপ রক্ষণাবেক্ষণ করে:
- **LTS (Long Term Support)**:
  - জোড় ভার্সন নম্বরগুলোতে এটি চালু হয় (যেমন: Node ১৮, ২০, ২২)।
  - এন্টারপ্রাইজ প্রজেক্টের স্থায়িত্বের ওপর জোর দেয়। এখানে হুট করে ব্রেকিং চেঞ্জ বা কোড বিন্যাস ভাঙার মতো এপিআই আনা হয় না।
  - এটি ৩০ মাস পর্যন্ত সিকিউরিটি প্যাচ ও বাগ ফিক্স সাপোর্ট নিশ্চিত করে।
- **Current**:
  - বিজোড় ভার্সন নম্বরগুলোতে এটি রিলিজ হয় (যেমন: Node ১৯, ২১, ২৩)।
  - জাভাস্ক্রিপ্টের পরীক্ষামূলক নতুন ফিচারগুলো দ্রুত ট্রাই করার জন্য এটি ব্যবহৃত হয়। এর মেয়াদকাল সাধারণত ১ বছরের কম হয়ে থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং বা গুরুত্বপূর্ণ পেমেন্ট অ্যাপ্লিকেশনের লাইভ সার্ভার ডেপ্লয়মেন্টে সর্বদা এলটিএস (LTS) ভার্সন (যেমন: Node ২০ LTS) ব্যবহার করা উচিত যাতে বছরের পর বছর কোনো এরর ছাড়া সিকিউরিটি আপডেট বজায় থাকে।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে সর্বদা এলটিএস সংস্করণ ব্যবহার করুন। লোকাল কম্পিউটারে সহজে নোডের ভার্সন পরিবর্তন করতে নোড ভার্সন ম্যানেজার (\`nvm\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
লাইভ প্রোডাকশনে নোডের "Current" সংস্করণ ডেপ্লয় করে রাখা, যার কারণে বছর শেষ হওয়ার আগেই ওই ভার্সনটির মেয়াদোত্তীর্ণ (EOL) এরর চলে আসে।

### Code Example
\`\`\`bash
# NVM দিয়ে নোডজেএস এর এলটিএস সংস্করণ ডাউনলোড ও ব্যবহার করা
nvm install --lts
nvm use --lts

# রানিং নোড ভার্সন চেক করা
node -v
\`\`\``
  },
  {
    id: 'node-express-30',
    title: 'How do you pass arguments to a Node.js script via the command line and access them?',
    difficulty: 'basic',
    category: 'node-express',
    tags: ['Node.js', 'CLI', 'Command Line', 'Process'],
    enAnswer: 'Command-line arguments are accessed in Node.js via the global process.argv array. The first two elements are the paths to the node executable and the script file; additional custom arguments start at index 2.',
    bnAnswer: 'নোডজেএস-এ কমান্ড-লাইন আগ্রাফিক আর্গুমেন্টগুলো গ্লোবাল process.argv অ্যারের সাহায্যে অ্যাক্সেস করা হয়। এই অ্যারের প্রথম দুটি উপাদান হলো যথাক্রমে নোড রানটাইম এবং রান হওয়া স্ক্রিপ্ট ফাইলের পাথ; কাস্টম পাস করা আর্গুমেন্টগুলো ইনডেক্স ২ থেকে শুরু হয়।',
    enExplanation: `### Explanation
When running scripts in the terminal:
\`\`\`bash
node app.js --port=8080 prod
\`\`\`
Node.js populates \`process.argv\` as follows:
- \`process.argv[0]\`: Absolute path of the Node executable (e.g. \`/usr/bin/node\`).
- \`process.argv[1]\`: Absolute path of the script file being executed (e.g. \`/var/www/app.js\`).
- \`process.argv[2]\`: The first custom argument (\`"--port=8080"\`).
- \`process.argv[3]\`: The second custom argument (\`"prod"\`).

For parsing complex CLI structures (like flags, nested paths, or typed inputs), developers use libraries like \`commander\`, \`yargs\`, or the built-in \`util.parseArgs()\` API.

### Real-World Example
In build scripts or database migration tools, you specify parameter inputs in the terminal to control setup tasks:
\`\`\`bash
npm run db:migrate -- --rollback
\`\`\`

### Best Practice
For standard production flags, use helper libraries like \`yargs\` or the built-in \`util.parseArgs()\` instead of manually slicing and parsing \`process.argv\` arrays, as manual parsing is error-prone when handling argument ordering variations.

### Common Mistakes
Forgetting that the actual CLI argument inputs start at index 2 of the \`process.argv\` array, resulting in processing system executables paths by mistake.

### Code Example
\`\`\`javascript
// Accessing raw CLI arguments
const args = process.argv;

console.log("Executable Path:", args[0]);
console.log("Script File Path:", args[1]);

// Slice target custom parameters starting at index 2
const customArgs = args.slice(2);
console.log("Passed parameters:", customArgs);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টার্মিনালের মাধ্যমে নোডজেএস স্ক্রিপ্ট রান করার সময়:
\`\`\`bash
node app.js --port=8080 prod
\`\`\`
নোডজেএস \`process.argv\` অ্যারেকে এভাবে সাজায়:
- \`process.argv[0]\`: নোড এক্সিকিউটেবল ফাইলের সম্পূর্ণ পাথ (যেমন: \`/usr/bin/node\`)।
- \`process.argv[1]\`: সোর্স কোড ফাইলের সম্পূর্ণ পাথ (যেমন: \`/var/www/app.js\`)।
- \`process.argv[2]\`: ব্যবহারকারীর পাস করা প্রথম আর্গুমেন্ট (\`"--port=8080"\`)।
- \`process.argv[3]\`: ব্যবহারকারীর পাস করা দ্বিতীয় আর্গুমেন্ট (\`"prod"\`)।

জটিল ফ্ল্যাগ বা কমান্ড লাইন ইন্টারফেস তৈরি করতে \`yargs\`, \`commander\` বা নোডের বিল্ট-ইন \`util.parseArgs()\` লাইব্রেরি ব্যবহার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেস মাইগ্রেশন বা স্ক্র্যাপার রান করার স্ক্রিপ্টে রোলব্যাক ট্রিগার করার জন্য টার্মিনালে ফ্ল্যাগ ইনপুট দিয়ে ডিরেকশন দেওয়া হয়:
\`\`\`bash
npm run db:migrate -- --rollback
\`\`\`

### উত্তম অনুশীলন
জটিল আর্গুমেন্ট হ্যান্ডলিংয়ের জন্য নিজে থেকে \`process.argv.slice(2)\` কোড না লিখে \`commander\` বা \`yargs\` ব্যবহার করুন। এটি আর্গুমেন্টের সিরিয়াল এলোমেলো হয়ে গেলেও ইনপুট সঠিকভাবে রিড করতে পারে।

### সাধারণ ভুলসমূহ
ইনপুট আর্গুমেন্ট ইন্ডেক্স ০ বা ১ থেকে পড়া শুরু করা, যার ফলে সিস্টেম ফাইলের পাথ আর্গুমেন্ট হিসেবে প্রসেস হয়ে ভুল ফলাফল দেখায়। কাস্টম আর্গুমেন্ট সবসময় ইনডেক্স ২ থেকে রিড করতে হয়।

### Code Example
\`\`\`javascript
// আর্গুমেন্ট রিড করা
const args = process.argv;

console.log("নোড রানটাইম পাথ:", args[0]);
console.log("স্ক্রিপ্ট ফাইল পাথ:", args[1]);

// ইনডেক্স ২ থেকে কাস্টম আর্গুমেন্ট স্লাইস করা
const customArgs = args.slice(2);
console.log("পাস করা আর্গুমেন্টসমূহ:", customArgs);
\`\`\``
  }
];
