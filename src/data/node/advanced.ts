import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'node-express-71',
    title: 'What is the Node.js Cluster module, and how does it work under the hood?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Cluster', 'Scaling', 'Multi-core'],
    enAnswer: 'The Cluster module allows you to run multiple instances of Node.js (workers) that share the same server port. Under the hood, the master process spawns worker processes using child_process.fork() and distributes incoming TCP/HTTP connections using a round-robin load balancing algorithm (on non-Windows platforms).',
    bnAnswer: 'ক্লাস্টার (Cluster) মডিউল একই সার্ভার পোর্ট শেয়ার করে নোডজেএস-এর একাধিক ইনস্ট্যান্স (Worker) রান করার সুযোগ দেয়। নেপথ্যে, মাস্টার প্রসেস child_process.fork() ব্যবহার করে ওয়ার্কার প্রসেসগুলো তৈরি করে এবং রাউন্ড-রবিন অ্যালগরিদম (উইন্ডোজ ব্যতীত) ব্যবহার করে ইনকামিং TCP/HTTP কানেকশনগুলো ডিস্ট্রিবিউট করে।',
    enExplanation: `### Explanation
The Node.js Cluster module addresses the single-threaded limitation of the V8 engine, enabling applications to utilize multi-core CPU architectures.

**Key Under-the-Hood Mechanisms:**
1. **Master vs. Worker**: The primary process (Master) does not handle web requests itself. Instead, it is responsible for spawning worker processes, monitoring their health, and restarting them if they crash.
2. **IPC Channel**: The master communicates with workers using Inter-Process Communication (IPC) channels.
3. **Port Sharing**: Normally, two processes cannot listen to the same port. The Cluster module bypasses this by having the master process bind to the port. The master accepts incoming TCP/HTTP connections and distributes them to workers.
4. **Load Balancing**:
   - **Round-Robin (Default on Unix)**: The master process listens on a port, accepts new connections, and hands them off to workers sequentially.
   - **Shared Socket**: The master creates the listen socket and sends it to workers, letting workers handle incoming connections directly. This can lead to uneven distribution due to OS scheduling quirks.

### Real-World Example
If you deploy an Express API on a 16-core virtual machine, a standard Node.js process only uses 1 core. By utilizing the Cluster module, you can spin up 16 worker instances, increasing request throughput by up to 10-15x depending on CPU usage.

### Best Practice
Avoid writing manual clustering scripts in large projects. Instead, use production-grade process managers like PM2, which handle process scaling, clustering, and zero-downtime hot reloads automatically.

### Common Mistakes
Storing in-memory state (like sessions or cache) inside a clustered application. Since workers are independent OS processes with their own memory heaps, they cannot share in-memory variables. Use shared data stores like Redis instead.

### Code Example
\`\`\`javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // Fork workers based on available CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and restart them
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died. Spawning a new one...\`);
    cluster.fork();
  });
} else {
  // Workers share the same TCP connection port
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\`Hello from Worker \${process.pid}\\n\`);
  }).listen(8000);

  console.log(\`Worker \${process.pid} started\`);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস ক্লাস্টার মডিউল সিঙ্গেল-থ্রেডেড ভি৮ ইঞ্জিনের সীমাবদ্ধতা দূর করে মাল্টি-কোর সিপিইউ ব্যবহার করার সুবিধা দেয়।

**নেপথ্যের কার্যপ্রণালী:**
১. **মাস্টার ও ওয়ার্কার**: প্রধান প্রসেস (Master) নিজে রিকোয়েস্ট হ্যান্ডেল করে না। এটি ওয়ার্কার প্রসেসগুলো স্পন (Spawn) করে এবং তাদের লাইফসাইকেল মনিটর করে।
২. **IPC চ্যানেল**: মাস্টার এবং ওয়ার্কার ইন্টার-প্রসেস কমিউনিকেশন (IPC) চ্যানেল ব্যবহার করে যোগাযোগ করে।
৩. **পোর্ট শেয়ারিং**: একাধিক প্রসেস একই পোর্ট শুনতে পারে না। ক্লাস্টার মডিউল এটি সমাধান করে এভাবে যে, মাস্টার প্রসেস পোর্টে বাইন্ড হয় এবং নতুন কানেকশনগুলো গ্রহণ করে ওয়ার্কারদের কাছে পাঠিয়ে দেয়।
৪. **লোড ব্যালেন্সিং**: রাউন্ড-রবিন মেকানিজমে মাস্টার প্রসেস নিজে নতুন কানেকশন নেয় এবং সিরিয়ালি ওয়ার্কারদের মধ্যে বন্টন করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ১৬-কোর সার্ভারে আপনার এক্সপ্রেস অ্যাপ রান করলে সিঙ্গেল থ্রেড হওয়ার কারণে মাত্র ১টি কোর ব্যবহৃত হবে। ক্লাস্টার মডিউল ব্যবহার করে ১৬টি ওয়ার্কার রান করলে অ্যাপের থ্রুপুট প্রায় ১০ থেকে ১৫ গুণ বাড়ানো সম্ভব।

### উত্তম অনুশীলন
বড় প্রজেক্টে ম্যানুয়ালি ক্লাস্টার কোড না লিখে PM2-এর মতো প্রফেশনাল প্রসেস ম্যানেজার ব্যবহার করুন, যা লাইভ ক্লাস্টারিং এবং জিরো-ডাউনটাইম রিলোড সাপোর্ট করে।

### সাধারণ ভুলসমূহ
ইন-মেমোরি স্টেট (যেমন সেশন ভ্যারিয়েবল বা লোকাল ক্যাশ) ক্লাস্টার অ্যাপে ব্যবহার করা। প্রতিটি ওয়ার্কারের মেমোরি আলাদা হওয়ায় তারা একে অপরের ভ্যারিয়েবল রিড করতে পারে না। এর জন্য রেডিস (Redis) ব্যবহার করা উচিত।

### Code Example
\`\`\`javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} চালু আছে\`);

  // কোর অনুযায়ী ওয়ার্কার তৈরি করা
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // কোনো ওয়ার্কার ক্র্যাশ করলে নতুন আরেকটি তৈরি করা
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`ওয়ার্কার \${worker.process.pid} বন্ধ হয়েছে। নতুন ওয়ার্কার তৈরি হচ্ছে...\`);
    cluster.fork();
  });
} else {
  // ওয়ার্কাররা একই পোর্ট শেয়ার করে রিকোয়েস্ট শুনবে
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\`হ্যালো, আমি ওয়ার্কার প্রসেস: \${process.pid}\\n\`);
  }).listen(8000);

  console.log(\`ওয়ার্কার \${process.pid} শুরু হয়েছে\`);
}
\`\`\``
  },
  {
    id: 'node-express-72',
    title: 'Explain the difference between Worker Threads, Child Processes, and the Cluster module.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Worker Threads', 'Child Process', 'Cluster'],
    enAnswer: 'Child Processes run in completely isolated OS processes with separate memory spaces. Cluster uses child_process.fork() specifically to run multiple instances of the same script sharing a network port. Worker Threads execute inside the same OS process, sharing the main thread\'s memory via SharedArrayBuffer, making them lightweight and suited for CPU-bound tasks.',
    bnAnswer: 'চাইল্ড প্রসেস সম্পূর্ণ আলাদা মেমোরি স্পেস সহ পৃথক ওএস প্রসেস হিসেবে রান করে। ক্লাস্টার মডিউল একই স্ক্রিপ্টের একাধিক কপি রান করে নেটওয়ার্ক পোর্ট শেয়ার করার জন্য চাইল্ড প্রসেস ব্যবহার করে। অন্যদিকে, ওয়ার্কার থ্রেড একই ওএস প্রসেসের ভেতরে রান করে এবং SharedArrayBuffer-এর মাধ্যমে মেমোরি শেয়ার করতে পারে, যা সিপিইউ-ইনটেনসিভ কাজের জন্য উপযুক্ত।',
    enExplanation: `### Explanation
Node.js provides three main ways to handle concurrency and parallel execution:

| Feature | Cluster Module | Child Processes | Worker Threads |
| :--- | :--- | :--- | :--- |
| **Execution Context** | Separate OS Processes | Separate OS Processes | Same OS Process (Different threads) |
| **Memory Isolation** | Complete (no shared memory) | Complete (no shared memory) | Can share memory (\`SharedArrayBuffer\`) |
| **Communication** | IPC (Message passing) | IPC (Message passing) | MessagePort, Shared memory |
| **Overhead** | High (boots full V8 instance) | High (boots full V8 instance) | Low (shares V8 heap, cheaper startup) |
| **Primary Use Case** | Scaling Web Servers (I/O) | Running external CLI tools/scripts | Heavy CPU computations (Image/crypto) |

- **Child Processes (\`child_process\`)**: Best when running external shell commands (like Python scripts or system binaries) or tasks that require complete OS-level isolation.
- **Cluster**: A specialized use case of child processes designed for scale-out of TCP/HTTP servers over multiple CPU cores.
- **Worker Threads (\`worker_threads\`)**: Designed to offload CPU-intensive tasks (like image processing, machine learning calculations, or zip compression) without blocking the Node.js event loop, while keeping memory usage efficient.

### Real-World Example
In a video streaming service:
- Use **Cluster** to scale the Express web API servers.
- Use **Worker Threads** to transcode or compress video files concurrently in memory.
- Use **Child Processes** to execute external CLI commands like \`ffmpeg\`.

### Best Practice
Choose worker threads for CPU-bound JavaScript computations, and child processes when executing non-JavaScript binaries. Never use worker threads to handle network I/O operations, as Node.js's async event-driven I/O is already fully optimized on the main thread.

### Common Mistakes
Spawning worker threads for database queries or API calls. This actually slows down the application due to thread creation overhead; asynchronous callbacks/promises are much more efficient for I/O.

### Code Example
\`\`\`javascript
// Worker Thread Example
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Spawning worker from same file
  const worker = new Worker(__filename);
  worker.on('message', msg => console.log('Result from worker:', msg));
  worker.postMessage(40); // Send input
} else {
  parentPort.on('message', (num) => {
    // Heavy CPU computation: Fibonacci
    const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
    const result = fib(num);
    parentPort.postMessage(result);
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস-এ প্যারালাল বা কনকারেন্ট কাজ করার জন্য তিনটি মাধ্যম রয়েছে:

১. **চাইল্ড প্রসেস (Child Process)**: সম্পূর্ণ পৃথক অপারেটিং সিস্টেম প্রসেস। এটি নতুন ভি৮ রানটাইম এবং মেমোরি স্পেস তৈরি করে। এটি সিস্টেম কমান্ড বা অন্য কোনো স্ক্রিপ্ট (যেমন পাইথন) চালানোর জন্য সেরা।
২. **ক্লাস্টার (Cluster)**: চাইল্ড প্রসেসেরই একটি বিশেষ রূপ। এটি মূলত একই নেটওয়ার্ক পোর্ট শেয়ার করে একাধিক ওয়েব সার্ভার রিকোয়েস্ট হ্যান্ডেল করতে ব্যবহৃত হয়।
৩. **ওয়ার্কার থ্রেড (Worker Threads)**: একই প্রসেসের অধীনে একাধিক হালকা থ্রেড তৈরি করে। তারা একে অপরের সাথে সরাসরি মেমোরি শেয়ার করতে পারে (\`SharedArrayBuffer\` দিয়ে), ফলে মেমোরি ট্রান্সফার কস্ট অত্যন্ত কম।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ভিডিও স্ট্রিমিং সাইটে:
- **Cluster** ব্যবহার করবেন ওয়েব পোর্টাল বা এক্সপ্রেস এপিআই স্কেল করার জন্য।
- **Worker Threads** ব্যবহার করবেন জাভাস্ক্রিপ্ট দিয়ে কোনো ফাইলের ডাটা এনকোড বা সিপিইউ হেভি ক্যালকুলেশন প্রসেস করার জন্য।
- **Child Process** ব্যবহার করবেন সার্ভার মেশিনে ইনস্টল থাকা \`ffmpeg\` সফটওয়্যারটি রান করার জন্য।

### উত্তম অনুশীলন
ভারী গাণিতিক হিসেব-নিকেশের জন্য ওয়ার্কার থ্রেড ব্যবহার করুন এবং এক্সটার্নাল বাইনারি রান করার জন্য চাইল্ড প্রসেস। ডেটাবেস কুয়েরি বা নেটওয়ার্ক রিকোয়েস্ট পাঠানোর মতো I/O কাজের জন্য কখনো ওয়ার্কার থ্রেড তৈরি করবেন না, কারণ নোডের মেইন থ্রেডই এসিনক্রোনাস উপায়ে এগুলো চমৎকার হ্যান্ডেল করতে পারে।

### সাধারণ ভুলসমূহ
ডেটাবেস থেকে বিপুল ডাটা আনার জন্য বা এপিআই কল করার জন্য নতুন ওয়ার্কার থ্রেড স্পন করা। এতে থ্রেড তৈরির ওভারহেডের কারণে পারফরম্যান্স আরও কমে যায়।

### Code Example
\`\`\`javascript
// ওয়ার্কার থ্রেড ব্যবহারের উদাহরণ
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', msg => console.log('ওয়ার্কার থ্রেড থেকে প্রাপ্ত উত্তর:', msg));
  worker.postMessage(40); // ইনপুট পাঠানো
} else {
  parentPort.on('message', (num) => {
    // সিপিইউ-ইনটেনসিভ কাজ (ফিবোনাচ্চি)
    const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
    const result = fib(num);
    parentPort.postMessage(result);
  });
}
\`\`\``
  },
  {
    id: 'node-express-73',
    title: 'How do you implement Inter-Process Communication (IPC) in Node.js?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'IPC', 'Child Process', 'Process Communication'],
    enAnswer: 'IPC in Node.js is achieved by passing an options object containing { stdio: \'ipc\' } or by spawning children with fork(). This creates a duplex communication channel allowing the master and child processes to send JSON messages back and forth using child.send() and process.on(\'message\').',
    bnAnswer: 'নোডজেএস-এ IPC ইমপ্লিমেন্ট করা হয় চাইল্ড প্রসেস স্পন করার সময় { stdio: \'ipc\' } অপশন দিয়ে অথবা fork() ব্যবহার করে। এটি একটি ডুপ্লেক্স চ্যানেল তৈরি করে যা মাস্টার ও চাইল্ড প্রসেসকে child.send() এবং process.on(\'message\') এর মাধ্যমে একে অপরকে JSON মেসেজ আদান-প্রদান করতে সাহায্য করে।',
    enExplanation: `### Explanation
Inter-Process Communication (IPC) allows separate operating system processes to coordinate and share data.

**How Node.js Handles IPC:**
1. **Underlying Pipes**: When spawning a process with an IPC channel, Node.js establishes a domain socket (on Unix) or named pipe (on Windows) between the parent and child.
2. **Serialization**: Messages passed via \`process.send()\` are serialized to JSON strings, transmitted through the pipe, and deserialized back into JavaScript objects in the receiving process.
3. **Handle Passing**: Node's IPC channel is advanced enough to pass active sockets, TCP servers, or net sockets directly from parent to child (which is how the Cluster module delegates incoming connections).

### Real-World Example
Suppose you run a background PDF generator as a separate child process. The main web application sends the raw JSON data to the generator via IPC, and the generator sends back the generated PDF path once completed.

### Best Practice
Since serialization and deserialization of objects over IPC channels consume CPU, do not transmit massive payloads (e.g., hundreds of megabytes of raw files) over IPC. Instead, write the file to disk/temp storage and pass the file path or URI via IPC.

### Common Mistakes
Forgetting to disconnect the IPC channel (\`child.disconnect()\`) or not handling exit conditions. Keeping the IPC channel open will prevent the Node.js event loop from exiting, leading to hanging processes.

### Code Example
\`\`\`javascript
// parent.js
const { fork } = require('child_process');
const path = require('path');

// fork() automatically sets up IPC
const child = fork(path.join(__dirname, 'child.js'));

child.on('message', (msg) => {
  console.log('Parent received:', msg);
  child.disconnect(); // Safely close the IPC channel
});

child.send({ task: 'generateReport', userId: 123 });

// child.js
process.on('message', (msg) => {
  console.log('Child received task:', msg);
  
  // Simulate processing time
  setTimeout(() => {
    process.send({ status: 'success', path: '/reports/pdf-123.pdf' });
  }, 1000);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইন্টার-প্রসেস কমিউনিকেশন (IPC) আলাদা প্রসেসগুলোকে ডেটা আদান-প্রদান ও সমন্বয় করতে সাহায্য করে।

**নোডজেএস যেভাবে IPC হ্যান্ডেল করে:**
১. **নেপথ্যের পাইপ**: নোডজেএস ইউনিক্সে ডোমেইন সকেট এবং উইন্ডোজে নেমড পাইপ (Named Pipe) তৈরি করে চাইল্ড প্রসেসের সাথে দ্বিমুখী যোগাযোগ স্থাপন করে।
২. **সিরিয়ালাইজেশন**: \`process.send()\` দিয়ে পাঠানো যেকোনো ডেটা ব্যাকগ্রাউন্ডে JSON স্ট্রিংয়ে রুপান্তরিত হয়ে পাইপের মধ্য দিয়ে যায় এবং ওপাশে আবার জাভাস্ক্রিপ্ট অবজেক্টে রূপ নেয়।
৩. **হ্যান্ডেল পাসিং**: নোডজেএস-এর IPC সকেট সরাসরি সক্রিয় TCP কানেকশন বা সকেটকে চাইল্ড প্রসেসের কাছে হস্তান্তর করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্যাকগ্রাউন্ড পিডিএফ জেনারেটরকে আপনি আলাদা চাইল্ড প্রসেস হিসেবে রান করালেন। আপনার ওয়েব অ্যাপ IPC-র মাধ্যমে ওই প্রসেসে ইউজারের ডেটা পাঠাবে এবং জেনারেটর কাজটি শেষ করে ফাইলের পাথটি ফেরত পাঠাবে।

### উত্তম অনুশীলন
IPC চ্যানেলে বড় ডেটা ট্রান্সফার করবেন না (যেমন বড় ফাইল কনটেন্ট), কারণ এতে অবজেক্ট সিরিয়ালাইজ করতে অনেক সিপিইউ খরচ হয়। এর পরিবর্তে ডেটাটি কোনো টেম্পোরারি ফোল্ডারে সেভ করে তার পাথটি মেসেজ হিসেবে পাঠান।

### সাধারণ ভুলসমূহ
কাজ শেষ হয়ে যাওয়ার পরও চাইল্ড প্রসেসের সাথে কানেকশন ক্লোজ (\`child.disconnect()\`) না করা। এটি করার ফলে নোডজেএস ইভেন্ট লুপ সচল থেকে যায় এবং প্রসেস মেমোরি ধরে রেখে ঝুলন্ত অবস্থায় থাকে।

### Code Example
\`\`\`javascript
// parent.js
const { fork } = require('child_process');
const path = require('path');

// fork() ব্যবহার করলে স্বয়ংক্রিয়ভাবে IPC চ্যানেল চালু হয়
const child = fork(path.join(__dirname, 'child.js'));

child.on('message', (msg) => {
  console.log('মাস্টার প্রসেস মেসেজ পেয়েছে:', msg);
  child.disconnect(); // আইপিসি চ্যানেল ক্লোজ করা
});

child.send({ task: 'generateReport', userId: 123 });

// child.js
process.on('message', (msg) => {
  console.log('চাইল্ড প্রসেস কাজ পেয়েছে:', msg);
  
  // কাজ সম্পন্ন হতে কিছু সময় লাগছে
  setTimeout(() => {
    process.send({ status: 'success', path: '/reports/pdf-123.pdf' });
  }, 1000);
});
\`\`\``
  },
  {
    id: 'node-express-74',
    title: 'How does the V8 garbage collector manage memory, and what are Heap vs. Non-Heap memories?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'V8', 'Garbage Collection', 'Memory Management'],
    enAnswer: 'V8 manages heap memory by categorizing it into generations: New Space (Scavenger algorithm for short-lived allocations) and Old Space (Mark-Sweep-Compact algorithm for long-lived objects). Heap memory stores dynamically allocated JS objects, while Non-Heap memory (C++ memory, buffers, V8 internal code spaces) is managed outside V8 garbage collection.',
    bnAnswer: 'V8 হেপ মেমোরিকে দুটি প্রজন্মে ভাগ করে পরিচালনা করে: নিউ স্পেস (স্বল্পস্থায়ী অবজেক্টের জন্য Scavenger অ্যালগরিদম) এবং ওল্ড স্পেস (দীর্ঘস্থায়ী অবজেক্টের জন্য Mark-Sweep-Compact অ্যালগরিদম)। হেপ মেমোরি জাভাস্ক্রিপ্ট অবজেক্ট সংরক্ষণ করে এবং নন-হেপ মেমোরি (C++ কোড, বাফার, ওএস ইন্টারনাল) V8-এর গার্বেজ কালেকশনের বাইরে থাকে।',
    enExplanation: `### Explanation
V8 separates memory into two primary segments: **Heap Memory** and **Non-Heap Memory**.

**1. Heap Memory Structure:**
- **New Space (Young Generation)**: Highly active space where all new object allocations occur. V8 runs a fast "Scavenger" GC sweep here using Cheney's copying algorithm, discarding dead objects and promoting survivors.
- **Old Space (Old Generation)**: Contains objects that survived multiple scavenger sweeps. V8 runs the heavier "Mark-Sweep-Compact" GC here only when old space starts filling up.
- **Large Object Space**: For allocations exceeding space limits, bypassing scavenge cycles entirely.
- **Code Space**: Where V8 compiles JIT code blocks.

**2. Non-Heap Memory (External Memory):**
- Includes raw C++ allocations, node internal bindings, V8 metadata, and Node.js Buffer structures.
- **Crucial Note**: Node.js \`Buffer\` payload allocations are backed by C++ memory (outside V8 heap constraints), meaning large Buffers do not trigger V8's heap size limits.

### Real-World Example
If you build an API that loads 500MB database queries in a single query loop, V8 will rapidly blow up the New Space, causing high CPU spikes as the Scavenger algorithm frantically attempts to clear allocations, eventually moving them to the Old Space and causing latency.

### Best Practice
Set \`--max-old-space-size\` (e.g. \`--max-old-space-size=4096\` for 4GB) in production containers to prevent V8 from triggering garbage collections too early or letting the app crash when it hits the default ~1.4GB limit.

### Common Mistakes
Creating long-lived references to short-lived objects (e.g. pushing request payloads to a global array for stats). V8 will never garbage collect those objects because they are still referenced in the Old Space, causing a memory leak.

### Code Example
\`\`\`javascript
// Access memory usage details
const memoryUsage = process.memoryUsage();

console.log({
  rss: \`\${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB\`, // Resident Set Size (total memory allocated for the process)
  heapTotal: \`\${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB\`, // Total V8 heap size
  heapUsed: \`\${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB\`,   // Memory actively occupied by JS objects
  external: \`\${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB\`,   // C++ objects (including Node Buffers)
  arrayBuffers: \`\${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB\` // Node Buffer memory backing store
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
V8 ইঞ্জিন মেমোরিকে মূলত দুটি ভাগে ভাগ করে: **হেপ মেমোরি (Heap Memory)** এবং **নন-হেপ মেমোরি (Non-Heap Memory)**।

**১. হেপ মেমোরির গঠন:**
- **New Space**: এখানে নতুন তৈরি হওয়া অবজেক্টগুলো স্টোর হয়। দ্রুত পরিষ্কার করার জন্য V8 এখানে "Scavenger" অ্যালগরিদম চালায়।
- **Old Space**: যেসব অবজেক্ট দীর্ঘ সময় সচল থাকে, সেগুলো এখানে চলে যায়। মেমোরি খালি করতে এখানে তুলনামূলক ধীর গতির "Mark-Sweep-Compact" অ্যালগরিদম চালানো হয়।
- **Large Object Space**: বড় সাইজের ডাটা ডিস্ট্রিবিউট করতে এটি ব্যবহৃত হয়।

**২. নন-হেপ মেমোরি (External Memory):**
- নোডজেএস-এর C++ কোড আর্কিটেকচার এবং বাফার (\`Buffer\`) মেমোরি এর অংশ। বাফারগুলো যেহেতু সরাসরি ওএস মেমোরিতে (C++ সাইড) থাকে, তাই এগুলো V8-এর হেপ মেমোরি লিমিটেশনের বাইরে থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেস থেকে একবারে ৫০০ মেগাবাইট ডাটা কুয়েরি করে রিড করার চেষ্টা করলে V8 রানটাইমে নিউ স্পেস খুব দ্রুত পূর্ণ হয়ে যাবে। এর ফলে মেমোরি ওল্ড স্পেসে পাঠানোর জন্য ভি৮ ইঞ্জিন প্রচুর সিপিইউ ব্যবহার করবে ও সার্ভার ধীরগতির হয়ে যাবে।

### উত্তম অনুশীলন
প্রোডাকশন কন্টেইনারে সার্ভারের র‍্যাম অনুযায়ী \`--max-old-space-size\` (যেমন: ৪ জিবি র‍্যামের জন্য \`--max-old-space-size=3072\`) সেট করে দিন, যাতে নোডজেএস ওএস-এর সব র‍্যাম ব্যবহারের আগেই মেমোরি অটো রিলিজ বা ক্র্যাশ করার লিমিটেশন বুঝতে পারে।

### সাধারণ ভুলসমূহ
গ্লোবাল কোনো অ্যারেতে রিকোয়েস্টের লগ বা ডাটা অনবরত পুশ করতে থাকা। এর ফলে V8 মনে করে অবজেক্টগুলো এখনও ব্যবহৃত হচ্ছে এবং ওল্ড স্পেসে এগুলোকে রেখে দেয়, যা পরবর্তীতে মেমোরি লিকের রূপ নেয়।

### Code Example
\`\`\`javascript
// মেমোরির বর্তমান অবস্থা দেখার কোড
const memoryUsage = process.memoryUsage();

console.log({
  rss: \`\${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB\`, // টোটাল ওএস মেমোরি যা নোড প্রসেস হোল্ড করেছে
  heapTotal: \`\${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB\`, // ভি৮ হেপ মেমোরির মোট সাইজ
  heapUsed: \`\${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB\`,   // জাভাস্ক্রিপ্ট অবজেক্ট বর্তমানে যত মেমোরি দখল করেছে
  external: \`\${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB\`,   // সি++ সাইডের মেমোরি (যেমন: বাফার)
  arrayBuffers: \`\${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB\` // বাফার ব্যাকড মেমোরি সাইজ
});
\`\`\``
  },
  {
    id: 'node-express-75',
    title: 'What is UV_THREADPOOL_SIZE, and how does libuv handle asynchronous blocking operations?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'libuv', 'Threadpool', 'Asynchronous', 'Performance'],
    enAnswer: 'libuv provides Node.js with access to a thread pool (default size of 4 threads) to run operations that cannot be done asynchronously at the OS level (like disk I/O, cryptography, compression, and dns lookups). You can scale this by setting the UV_THREADPOOL_SIZE environment variable up to 1024.',
    bnAnswer: 'libuv নোডজেএস-কে একটি থ্রেড পুল (ডিফল্ট সাইজ ৪) প্রদান করে এমন সব কাজ সম্পাদন করতে যা ওএস লেভেলে নন-ব্লকিং নয় (যেমন: ডিস্ক I/O, ক্রিপ্টোগ্রাফি, জিপ কম্প্রেস এবং ডিএনএস লুকআপ)। UV_THREADPOOL_SIZE এনভায়রনমেন্ট ভ্যারিয়েবল সেট করে সর্বোচ্চ ১০২৪ পর্যন্ত এই থ্রেড পুল বাড়ানো যায়।',
    enExplanation: `### Explanation
Node.js relies on two main components: **V8** (compiles/executes JS) and **libuv** (manages I/O event loops and thread pools).

While network sockets are handled using non-blocking OS epoll/kqueue structures, other tasks do not have native async OS calls. libuv offloads these blocking tasks to its internal C++ thread pool.

**Tasks Using the Thread Pool:**
- **Filesystem (\`fs\`)**: Reading, writing, or listing files.
- **Cryptography (\`crypto\`)**: Password hashing (\`pbkdf2\`, \`scrypt\`), asymmetric sign/verify.
- **Compression (\`zlib\`)**: Zipping and unzipping files.
- **DNS Lookup**: Calling \`dns.lookup()\` (resolves domain using local system hosts file).

**Why \`UV_THREADPOOL_SIZE\` matters:**
If you run 5 synchronous/heavy crypto operations concurrently, and the pool size is 4, the 5th operation will be queued and must wait for one of the active 4 threads to complete.

### Real-World Example
If your server receives hundreds of requests that hash passwords using \`bcrypt.hash()\` (which runs on the thread pool), a default size of 4 threads will cause extreme bottlenecking, causing HTTP request response times to skyrocket.

### Best Practice
Set \`process.env.UV_THREADPOOL_SIZE\` at the very entry point of your server (before any asynchronous calls are scheduled) or set it via terminal environment script:
\`\`\`bash
UV_THREADPOOL_SIZE=64 node server.js
\`\`\`
Set the size to match the estimated concurrency load, typically around CPU cores * 4.

### Common Mistakes
Confusing the libuv event loop with the thread pool. The event loop is single-threaded and manages callbacks. The thread pool runs blocking C++ tasks in the background.

### Code Example
\`\`\`javascript
// Changing threadpool size inside the code (Must be at the very top of entry file)
process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require('crypto');
const start = Date.now();

// Running 8 heavy PBKDF2 hashing calculations
for (let i = 0; i < 8; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(\`Hash \${i + 1} completed in: \${Date.now() - start}ms\`);
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস দুটি মূল ভিত্তির ওপর দাঁড়িয়ে আছে: **ভি৮** (জাভাস্ক্রিপ্ট কম্পাইল করে) এবং **libuv** (ইভেন্ট লুপ ও থ্রেড পুল পরিচালনা করে)।

নেটওয়ার্ক আই/ও কাজের জন্য ওএস-এর নিজস্ব অ্যাসিনক্রোনাস কল (যেমন: epoll/kqueue) থাকলেও কিছু ফাইলের কাজ বা ভারী গাণিতিক কাজ ওএস সরাসরি অ্যাসিনক্রোনাসলি করতে পারে না। libuv এগুলোকে নিজের ইন্টারনাল C++ থ্রেড পুলে পাঠায়।

**থ্রেড পুল ব্যবহারকারী কাজসমূহ:**
- **ফাইল সিস্টেম (\`fs\`)**: ফাইল রিড/রাইট।
- **ক্রিপ্টোগ্রাফি (\`crypto\`)**: পাসওয়ার্ড হ্যাশিং (\`pbkdf2\`, \`scrypt\`)।
- **কম্প্রেশন (\`zlib\`)**: জিপ ফাইল করা বা ডিকম্প্রেস করা।
- **DNS লুকআপ**: ডোমেন নেম থেকে আইপি বের করা।

**\`UV_THREADPOOL_SIZE\`-এর গুরুত্ব:**
থ্রেড পুলের ডিফল্ট সাইজ হলো ৪। এর মানে যদি আপনি একই সাথে ৫টি ভারী ক্রিপ্টোগ্রাফি হ্যাশ অপারেশন চালান, তবে ৫ম কাজটি প্রথম ৪টির যেকোনো একটি শেষ না হওয়া পর্যন্ত অপেক্ষমান থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার সাইনআপের সময় পাসওয়ার্ড হ্যাশ করার জন্য যদি আপনার এক্সপ্রেস এপিআই \`bcrypt.hash()\` ব্যবহার করে এবং পোর্টে প্রচুর ইউজার সাইনআপ ট্রাফিকের চাপ থাকে, তবে ৪টি থ্রেড ব্লক হয়ে যাবে ও নতুন ইউজাররা রেসপন্স পেতে অনেক সময় নিবে।

### উত্তম অনুশীলন
সার্ভারের এন্ট্রি ফাইলের সবার ওপরে অথবা টার্মিনালে রান করার আগে এনভায়রনমেন্ট ভ্যারিয়েবল হিসেবে থ্রেডপুলের সাইজ বাড়িয়ে দিন:
\`\`\`bash
UV_THREADPOOL_SIZE=32 node server.js
\`\`\`

### সাধারণ ভুলসমূহ
ইভেন্ট লুপ এবং থ্রেড পুলকে গুলিয়ে ফেলা। ইভেন্ট লুপ সবসময় সিঙ্গেল থ্রেডেড হয়ে কলব্যাক এক্সিকিউট করে আর থ্রেডপুল ব্যাকগ্রাউন্ডে ভারী কাজ সম্পন্ন করে।

### Code Example
\`\`\`javascript
// কোডের একদম শুরুতে থ্রেডপুল সাইজ পরিবর্তন করা
process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require('crypto');
const start = Date.now();

// ৮টি ভারী ক্রিপ্টো হ্যাশিং অপারেশন চালানো হচ্ছে
for (let i = 0; i < 8; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(\`হ্যাশ \${i + 1} শেষ হতে সময় লেগেছে: \${Date.now() - start}ms\`);
  });
}
\`\`\``
  },
  {
    id: 'node-express-76',
    title: 'What are the different types of Node.js Streams, and how do you implement a custom Transform Stream?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'Transform Stream', 'Data Pipeline'],
    enAnswer: 'Node.js has 4 main stream types: Readable (reading data), Writable (writing data), Duplex (both readable and writable, e.g., sockets), and Transform (a Duplex stream that modifies data during transfer). A custom Transform stream is implemented by extending the Transform class and overriding the _transform(chunk, encoding, callback) method.',
    bnAnswer: 'নোডজেএস-এ ৪ ধরণের স্ট্রিম রয়েছে: রিডেবল (ডাটা রিড করার জন্য), রাইটেবল (ডাটা রাইট করার জন্য), ডুপ্লেক্স (রিড ও রাইট দুটিই করা যায়, যেমন: সকেট) এবং ট্রান্সফর্ম (এক ধরণের ডুপ্লেক্স স্ট্রিম যা ডাটা রূপান্তর করে)। custom Transform স্ট্রিম তৈরি করতে Transform ক্লাসকে এক্সটেন্ড করে _transform(chunk, encoding, callback) মেথড ওভাররাইড করতে হয়।',
    enExplanation: `### Explanation
Streams are objects that let you read data from a source or write data to a destination in continuous, chunk-by-chunk portions, avoiding loading entire files into memory.

**Custom Transform Stream Architecture:**
A Transform stream takes an input chunk, processes/transforms it, and pushes the modified chunk down the pipeline.
To implement a custom Transform stream:
1. Import \`Transform\` from the \`stream\` module.
2. Extend the class or instantiate \`new Transform()\` directly.
3. Define the \`_transform(chunk, encoding, callback)\` method:
   - \`chunk\`: The raw Buffer or string containing the current data block.
   - \`encoding\`: If the chunk is a string, this is its encoding.
   - \`callback(err, data)\`: A callback that you invoke once processing is complete, optionally passing the transformed output.

### Real-World Example
In a logging platform, you might want to stream logs from a server, dynamically redact sensitive information (like credit card numbers or passwords), and stream the censored log directly to a cloud database.

### Best Practice
Always handle errors on every step of your stream pipeline. Use \`stream.pipeline()\` instead of \`stream.pipe()\` because \`pipeline\` automatically cleans up streams and forwards errors to a centralized callback if one of the intermediate streams crashes.

### Common Mistakes
Forgetting to call the \`callback()\` inside the \`_transform()\` method. If you omit the callback, the stream will hang indefinitely, waiting to receive or push the next chunk of data.

### Code Example
\`\`\`javascript
const { Transform, pipeline } = require('stream');
const fs = require('fs');

// Custom Transform Stream that converts text to uppercase
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const upperText = chunk.toString().toUpperCase();
      this.push(upperText); // Push transformed data
      callback(); // Signal processing of this chunk is done
    } catch (err) {
      callback(err); // Pass error if any
    }
  }
}

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
const uppercaseFilter = new UppercaseTransform();

// Safe execution using pipeline
pipeline(readStream, uppercaseFilter, writeStream, (err) => {
  if (err) {
    console.error('Pipeline failed:', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্রিম হলো এমন অবজেক্ট যা মেমোরিতে পুরো ফাইল লোড না করে চাঙ্ক (ছোট ছোট অংশ) আকারে ধাপে ধাপে ডাটা রিড বা রাইট করতে সহায়তা করে।

**ট্রান্সফর্ম স্ট্রিম গঠন:**
এটি ইনপুট ডাটা গ্রহণ করে, তাকে মডিফাই বা ট্রান্সফর্ম করে এবং পরবর্তী পাইপলাইনে পাঠিয়ে দেয়।
কাস্টম ট্রান্সফর্ম স্ট্রিম তৈরির ধাপ:
১. \`stream\` মডিউল থেকে \`Transform\` ক্লাস ইম্পোর্ট করুন।
২. ক্লাসটিকে এক্সটেন্ড (Extend) করুন।
৩. \`_transform(chunk, encoding, callback)\` মেথডটি ওভাররাইড করুন:
   - \`chunk\`: বাফার আকারে আসা ডাটা।
   - \`encoding\`: ডাটার এনকোডিং টাইপ।
   - \`callback\`: কাজটি সম্পন্ন হওয়ার পর কলব্যাকটি ট্রিগার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের সিকিউরিটি লগের ডাটা রিড করার সময় যদি সেনসিটিভ কোনো তথ্য (যেমন কার্ড নম্বর) গোপন করতে চান, তবে ট্রান্সফর্ম স্ট্রিম দিয়ে মাঝপথে কার্ড নম্বরটি মাস্ক করে ফাইলে সেভ করতে পারেন।

### উত্তম অনুশীলন
স্ট্রিম পাইপলাইন তৈরির জন্য সর্বদা \`stream.pipeline()\` ব্যবহার করুন। সাধারণ \`pipe()\` মেথড ব্যবহার করলে মাঝপথে কোনো এরর হলে স্ট্রিমগুলো বন্ধ হয় না ও মেমোরি লিক হয়। \`pipeline\` এরর হওয়া মাত্র সবগুলো স্ট্রিম ডেস্ট্রয় করে দেয়।

### সাধারণ ভুলসমূহ
\`_transform()\` মেথডের ভেতরে \`callback()\` কল করতে ভুলে যাওয়া। এটি না করলে স্ট্রিমটি ওখানেই ঝুলে থাকবে এবং পরবর্তী ডাটা রিড বা রাইট হবে না।

### Code Example
\`\`\`javascript
const { Transform, pipeline } = require('stream');
const fs = require('fs');

// কাস্টম ট্রান্সফর্ম ক্লাস যা লেখাকে ক্যাপিটাল লেটারে রূপান্তর করে
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const upperText = chunk.toString().toUpperCase();
      this.push(upperText); // রূপান্তরিত ডাটা পাঠানো
      callback(); // চাঙ্কটি প্রসেস করা শেষ
    } catch (err) {
      callback(err); // এরর থাকলে কলব্যাকে পাস করা
    }
  }
}

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
const uppercaseFilter = new UppercaseTransform();

// পাইপলাইনের মাধ্যমে নিরাপদে রান করা
pipeline(readStream, uppercaseFilter, writeStream, (err) => {
  if (err) {
    console.error('পাইপলাইন এরর:', err);
  } else {
    console.log('পাইপলাইন সফলভাবে শেষ হয়েছে।');
  }
});
\`\`\``
  },
  {
    id: 'node-express-77',
    title: 'Explain Backpressure in Node.js Streams and how to handle it properly.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'Backpressure', 'Memory Optimization'],
    enAnswer: 'Backpressure occurs when a Readable stream reads data faster than the receiving Writable stream can write it, causing the buffer to build up in RAM. It is handled by pausing the Readable stream when write() returns false (signaling high-water-mark breach) and resuming it when the Writable emits the \'drain\' event.',
    bnAnswer: 'ব্যাকপ্রেসার (Backpressure) ঘটে যখন একটি রিডেবল স্ট্রিম রাইটেবল স্ট্রিমের প্রসেস করার ক্ষমতার চেয়েও দ্রুত গতিতে ডাটা পাঠায়, যার ফলে র‍্যামে ক্যাশ বা বাফার জমতে থাকে। রাইটেবল স্ট্রিমের write() যদি false রিটার্ন করে (হাই-ওয়াটার-মার্ক অতিক্রম করলে), তবে রিডেবল স্ট্রিমকে পজ (pause) করে এটি হ্যান্ডেল করা হয় এবং ড্রেইন (\'drain\') ইভেন্ট ফায়ার হলে আবার রিজুম করা হয়।',
    enExplanation: `### Explanation
Streams have internal buffers to temporarily hold chunks of data. The size of this buffer is defined by the \`highWaterMark\` property (default 16KB for object streams, 64KB for raw byte streams).

**The Problem of Backpressure:**
If a source stream reads a local 2GB file at 500MB/s but the destination is writing over a slow 3G cellular connection at 10KB/s, the unwritten data accumulates in Node's RAM. If unchecked, this can crash the process with an Out of Memory (OOM) error.

**How Backpressure Handling Works:**
1. \`writable.write(chunk)\` returns \`true\` if the internal buffer is below \`highWaterMark\`.
2. When the buffer is full, it returns \`false\`. The readable source must notice this and stop reading (\`readable.pause()\`).
3. Once the writable stream clears its buffer, it fires the \`'drain'\` event.
4. The readable source listens for \`'drain'\` and resumes reading (\`readable.resume()\`).

### Real-World Example
Streaming video uploads directly from clients to cloud storage. Without backpressure controls, if the client sends data at high speed and the network upload to S3 is slow, your Node.js container memory will spike and eventually crash.

### Best Practice
Use built-in methods like \`stream.pipeline()\` or \`readable.pipe()\` whenever possible. They have backpressure management fully integrated out of the box, pausing and resuming streams dynamically.

### Common Mistakes
Manually writing custom loop listeners that read from file streams and blindly call \`res.write(chunk)\` in Express response objects without checking the boolean return value of \`write()\`.

### Code Example
\`\`\`javascript
const fs = require('fs');

const readable = fs.createReadStream('large_source.dat');
const writable = fs.createWriteStream('destination.dat');

readable.on('data', (chunk) => {
  // Write returns false if buffer is full (High Water Mark hit)
  const canContinue = writable.write(chunk);
  
  if (!canContinue) {
    console.log('Backpressure detected! Pausing reader.');
    readable.pause();
  }
});

// Resume reading when the writable buffer drains
writable.on('drain', () => {
  console.log('Writable buffer drained. Resuming reader.');
  readable.resume();
});

readable.on('end', () => {
  writable.end();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রতিটি স্ট্রিমের ভেতরে ডাটা বাফারিং করার জন্য একটি ক্যাপাসিটি থাকে যাকে \`highWaterMark\` বলা হয় (ডিফল্ট ১৬ কেবি অবজেক্টের জন্য ও ৬৪ কেবি বাইটের জন্য)।

**ব্যাকপ্রেসারের সমস্যা:**
মনে করুন, একটি সোর্স ফাইল রিডার ৫০০ এমবি/সেকেন্ড গতিতে ডাটা রিড করছে কিন্তু ওপাশে একটি স্লো এপিআই বা ইন্টারনেটে ডাটা পাঠানোর স্পিড মাত্র ১০ কেবি/সেকেন্ড। এই বাড়তি অবিক্রীত বা অলস ডাটা প্রসেসরের র‍্যাম মেমোরিতে জমতে থাকে। এর সমাধান না করা হলে র‍্যাম ফুল হয়ে নোডজেএস প্রসেস বন্ধ হয়ে যাবে।

**ব্যাকপ্রেসার সমাধান প্রক্রিয়া:**
১. \`writable.write(chunk)\` কল করলে বাফার খালি থাকলে \`true\` রিটার্ন করে।
২. বাফার পূর্ণ হয়ে গেলে এটি \`false\` দেয়। তখন রিডারকে থামিয়ে দিতে হয় (\`readable.pause()\`)।
৩. রাইটার যখন বাফার খালি করতে পারে, তখন সে একটি \`'drain'\` ইভেন্ট পাঠায়।
৪. রিডার তখন ড্রেইন ইভেন্ট শুনে আবার ফাইল রিড করা শুরু করে (\`readable.resume()\`)।

### বাস্তব-ভিত্তিক উদাহরণ
ক্লায়েন্ট থেকে সার্ভারে ফাইল আপলোড হয়ে সরাসরি ক্লাউড স্টোরেজে ট্রান্সফার হচ্ছে। ক্লাউডের গতি কম কিন্তু ক্লায়েন্টের স্পিড বেশি হলে ব্যাকপ্রেসার হ্যান্ডেল না করলে সার্ভারের মেমোরি ক্র্যাশ করবে।

### উত্তম অনুশীলন
ম্যানুয়ালি স্ট্রিম হ্যান্ডেল না করে নোডের ইন-বিল্ট \`stream.pipeline()\` অথবা \`pipe()\` মেথড ব্যবহার করুন। এগুলো ব্যাকপ্রেসার স্বয়ংক্রিয়ভাবে ম্যানেজ করে।

### সাধারণ ভুলসমূহ
এক্সপ্রেস রেসপন্সে (\`res\`) রিড করা ফাইল পাঠাতে অনবরত \`res.write()\` কল করে যাওয়া কিন্তু ব্যাকপ্রেসার ফ্ল্যাগ চেক না করা।

### Code Example
\`\`\`javascript
const fs = require('fs');

const readable = fs.createReadStream('large_source.dat');
const writable = fs.createWriteStream('destination.dat');

readable.on('data', (chunk) => {
  // বাফার ফুল হলে write() মেথড false রিটার্ন করে
  const canContinue = writable.write(chunk);
  
  if (!canContinue) {
    console.log('ব্যাকপ্রেসার সনাক্ত হয়েছে! রিডার পজ করা হচ্ছে।');
    readable.pause();
  }
});

// রাইটার তার বাফার খালি করতে পারলে ড্রেইন ইভেন্ট ফায়ার হবে
writable.on('drain', () => {
  console.log('বাফার খালি হয়েছে। রিডার আবার চালু করা হলো।');
  readable.resume();
});

readable.on('end', () => {
  writable.end();
});
\`\`\``
  },
  {
    id: 'node-express-78',
    title: 'How do you detect and debug memory leaks in a running Node.js application?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Memory Leak', 'Debugging', 'Heap Snapshot', 'V8'],
    enAnswer: 'To detect and debug memory leaks, generate Heap Snapshots (.heapsnapshot) at different intervals using the node-heapdump package or via Chrome DevTools (--inspect flag). Compare the snapshots in Chrome DevTools to locate objects that are growing in count but are not being garbage collected.',
    bnAnswer: 'মেমোরি লিক সনাক্ত ও ডিবাগ করতে বিভিন্ন সময়ের বিরতিতে node-heapdump মডিউল বা ক্রোম দেবটুলসের (--inspect) সাহায্যে হিপ স্ন্যাপশট (.heapsnapshot) জেনারেট করতে হয়। এরপর ক্রোম দেবটুলসের "Comparison" ভিউতে স্ন্যাপশটগুলো তুলনা করে কোন অবজেক্ট ক্রমাগত বাড়ছে কিন্তু রিলিজ হচ্ছে না তা বের করা যায়।',
    enExplanation: `### Explanation
A memory leak in Node.js occurs when objects are retained in the V8 heap even after they are no longer needed because they are still reachable from the root object (like global objects or persistent event listeners).

**Steps to Debug Memory Leaks:**
1. **Identify**: Monitor the RSS and Heap memory footprint over time (using PM2 or cloud APM tools). If memory increases monotonically without plateauing, a leak exists.
2. **Launch with Inspector**: Run your app:
   \`\`\`bash
   node --inspect app.js
   \`\`\`
3. **Capture Heap Snapshots**:
   - Open Chrome DevTools at \`chrome://inspect\`.
   - Go to the **Memory** tab.
   - Capture Snapshot 1 (Initial state).
   - Simulate heavy traffic/requests to trigger the leak.
   - Capture Snapshot 2 (Post-load state).
4. **Compare Snapshots**:
   - Select Snapshot 2 and choose "Comparison" perspective compared to Snapshot 1.
   - Sort by **# Delta** (shows new objects created) or **Size Delta**.
   - Look for unexpected growing objects like closures, arrays, or database clients.

### Real-World Example
In a chat app, you add users to an Express event listener array on connection. If you forget to remove them from the array when they disconnect, the memory occupied by their user objects will never be garbage collected, leading to an eventual server crash.

### Best Practice
Integrate heap monitoring flags in your start scripts, and set up your systems to trigger automatic heap dumps when memory hits high limits (e.g. using \`v8.writeHeapSnapshot()\`).

### Common Mistakes
Taking heap snapshots immediately after one another without running garbage collection. Use the "Collect Garbage" trash bin button in Chrome DevTools before taking snapshots to ensure you only inspect leaked objects.

### Code Example
\`\`\`javascript
const v8 = require('v8');
const fs = require('fs');

// Generate heap snapshot programmatically
function dumpMemory() {
  const filename = \`./snapshot-\${Date.now()}.heapsnapshot\`;
  const snapshotPath = v8.writeHeapSnapshot(filename);
  console.log(\`Heap snapshot saved at: \${snapshotPath}\`);
}

// Trigger snapshot on demand (e.g. via custom endpoint or process signal)
process.on('SIGUSR2', () => {
  console.log('Received SIGUSR2 signal. Generating heap dump...');
  dumpMemory();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস-এ মেমোরি লিক ঘটে যখন কোনো অবজেক্ট বা ডাটা মেমোরিতে থেকে যায় যা আসলে কোডে আর ব্যবহার হচ্ছে না কিন্তু ওল্ড স্পেসের গ্লোবাল অবজেক্টের সাথে লিঙ্কড থাকার কারণে V8 সেটিকে গার্বেজ হিসেবে ডিলিট করতে পারছে না।

**ডিবাগ করার ধাপসমূহ:**
১. **মনিটরিং**: PM2 বা কোনো APM টুলের সাহায্যে অ্যাপের মেমোরি ব্যবহার লক্ষ্য করুন। যদি মেমোরি ক্রমাগত বাড়তেই থাকে ও না কমে, তবে লিক নিশ্চিত।
২. **ইন্সপেক্টর চালু**: \`node --inspect app.js\` দিয়ে অ্যাপ স্টার্ট করুন।
৩. **স্ন্যাপশট গ্রহণ**: \`chrome://inspect\`-এ গিয়ে ইনিশিয়াল মেমোরি স্ন্যাপশট নিন। এরপর এপিআই-তে অনেক ট্রাফিক পাঠিয়ে ২য় আরেকটি স্ন্যাপশট নিন।
৪. **তুলনা (Comparison)**: ক্রোম দেবটুলসের মেমোরি ট্যাব থেকে দুটি স্ন্যাপশট কম্পেয়ার করে দেখুন কোন টাইপের অবজেক্ট ডিলিট না হয়ে মেমোরিতে অবস্থান করছে।

### বাস্তব-ভিত্তিক উদাহরণ
চ্যাট অ্যাপ্লিকেশনে কোনো ইউজার কানেক্ট হলে তাকে একটি গ্লোবাল অ্যারেতে পুশ করা হচ্ছে। ডিসকানেক্টের সময় তাকে অ্যারে থেকে রিমুভ করতে ভুলে গেলে ইউজার অবজেক্ট মেমোরিতে জমে থেকে সার্ভার ক্র্যাশ করবে।

### উত্তম অনুশীলন
সার্ভারের সিগন্যাল মনিটর করে প্রোগ্রামাটিক্যালি হিপ স্ন্যাপশট নেওয়ার ফিচার রাখুন। \`v8.writeHeapSnapshot()\` বিল্ট-ইন মেথড ব্যবহার করে সিগন্যাল পাওয়ার পর স্ন্যাপশট সেভ করে রাখতে পারেন।

### সাধারণ ভুলসমূহ
গার্বেজ কালেকশন রান না করিয়েই স্ন্যাপশট নেওয়া। ক্রোম দেবটুলসের ট্র্যাশ বিন বাটনে ক্লিক করে গার্বেজ কালেক্টর সচল করে তবেই স্ন্যাপশট নেওয়া উচিত।

### Code Example
\`\`\`javascript
const v8 = require('v8');
const fs = require('fs');

// প্রোগ্রামাটিক উপায়ে হিপ স্ন্যাপশট নেওয়া
function dumpMemory() {
  const filename = \`./snapshot-\${Date.now()}.heapsnapshot\`;
  const snapshotPath = v8.writeHeapSnapshot(filename);
  console.log(\`স্ন্যাপশট ফাইল তৈরি হয়েছে: \${snapshotPath}\`);
}

// ইউনিক্স সিগন্যাল পেলে মেমোরি ডাম্প তৈরি করা
process.on('SIGUSR2', () => {
  console.log('SIGUSR2 সিগন্যাল পাওয়া গেছে। স্ন্যাপশট নেওয়া হচ্ছে...');
  dumpMemory();
});
\`\`\``
  },
  {
    id: 'node-express-79',
    title: 'Explain SharedArrayBuffer and Atomics in the context of Node.js Worker Threads.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Worker Threads', 'SharedArrayBuffer', 'Atomics', 'Performance'],
    enAnswer: 'SharedArrayBuffer allows multiple Worker Threads to share a common raw memory buffer directly without serialization overhead. The Atomics object provides static methods (like add, sub, load, store, wait) to perform thread-safe operations on this shared memory, preventing race conditions.',
    bnAnswer: 'SharedArrayBuffer একাধিক ওয়ার্কার থ্রেডকে মেসেজ পাসিং বা সিরিয়ালাইজেশনের ওভারহেড ছাড়াই একই মেমোরি সরাসরি শেয়ার করার সুযোগ দেয়। Atomics অবজেক্ট বিভিন্ন স্ট্যাটিক মেথড (যেমন add, load, store, wait) প্রদান করে এই শেয়ার্ড মেমোরিতে থ্রেড-সেফ অপারেশন সম্পন্ন করে রেস কন্ডিশন প্রতিরোধ করার জন্য।',
    enExplanation: `### Explanation
Normally, when worker threads pass data back and forth using \`postMessage()\`, Node.js uses the HTML5 Structured Clone Algorithm, serializing the data to transmit it, which consumes CPU time.

**SharedArrayBuffer (SAB):**
Allows you to allocate a fixed-size block of memory that can be read and written directly by the main thread and all spawned worker threads.

**Atomics:**
Since multiple threads can read and write to the same memory addresses simultaneously, they can hit race conditions (e.g., both threads trying to increment a value at index 0 at the exact same millisecond). JavaScript is single-threaded normally, but multiple workers introduce true parallelism.
- The \`Atomics\` object guarantees that operations on SAB TypedArrays are finished completely before the next thread accesses it.
- \`Atomics.wait()\` and \`Atomics.notify()\` can be used to coordinate threads (sleeping and waking up).

### Real-World Example
In highly performant applications like high-frequency financial trading systems or real-time 3D image renderers built in Node.js, you divide computation chunks among threads. Threads write directly to a shared array buffer, which the main thread displays instantly on screen.

### Best Practice
Only use SharedArrayBuffer and Atomics for complex performance-critical operations. Because managing raw bytes and avoiding thread deadlocks is highly error-prone compared to standard message passing.

### Common Mistakes
Writing directly to a shared index (e.g., \`sharedArray[0] = 5\`) from multiple threads without using \`Atomics.store()\` or \`Atomics.exchange()\`, causing memory corruption or inconsistent variables.

### Code Example
\`\`\`javascript
const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  // Allocate 4 bytes of shared memory (1 32-bit integer)
  const sab = new SharedArrayBuffer(4);
  const int32 = new Int32Array(sab);
  int32[0] = 10; // Initial value

  const worker = new Worker(__filename, { workerData: sab });

  worker.on('exit', () => {
    // Read final value updated by the worker thread safely
    console.log('Final Shared Array Value:', Atomics.load(int32, 0));
  });
} else {
  const sab = workerData;
  const int32 = new Int32Array(sab);

  // Atomically add 5 to the shared array index 0 safely
  Atomics.add(int32, 0, 5);
  console.log('Worker updated shared memory value.');
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণত ওয়ার্কার থ্রেডে \`postMessage()\` ব্যবহার করলে ডাটা কপি করার স্ট্রাকচার্ড ক্লোন অ্যালগরিদম চলে যা প্রচুর মেমোরি ও সিপিইউ খরচ করে।

**SharedArrayBuffer (SAB):**
এর সাহায্যে একটি নির্দিষ্ট সাইজের মেমোরি বাফার তৈরি করা যায় যা মাস্টার ও সকল ওয়ার্কার থ্রেড সরাসরি অ্যাক্সেস করতে পারে। এতে কপি করার ওভারহেড থাকে না।

**Atomics:**
একাধিক থ্রেড যখন একই মেমোরি এড্রেসে রিড/রাইট করতে যাবে, তখন রেস কন্ডিশন তৈরি হবে (একই সময়ে একাধিক জন ডাটা পরিবর্তন করতে চাইলে এরর হবে)। \`Atomics\` নিশ্চিত করে যে একটি থ্রেডের কাজ শেষ হওয়ার আগে অন্য থ্রেড ওই মেমোরিতে হস্তক্ষেপ করতে পারবে না।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারে হাই-ফ্রিকোয়েন্সি ট্রেডিং সিস্টেম বা নোডজেএস-ভিত্তিক থ্রিডি ইমেজ প্রসেসিংয়ের ক্ষেত্রে মেমোরি শেয়ারিং দ্রুততর করতে এআই/এলগরিদম থ্রেডগুলো এই শেয়ার্ড বাফার ব্যবহার করে গেম বা চার্টের ডাটা আপডেট করে।

### উত্তম অনুশীলন
শুধুমাত্র হাই-পারফরম্যান্স রিকোয়ারমেন্ট থাকলেই SharedArrayBuffer ব্যবহার করুন। সাধারণ ক্ষেত্রে স্ট্যান্ডার্ড মেসেজ পাসিং থ্রেড অনেক বেশি নিরাপদ ও ডিবাগ করা সহজ।

### সাধারণ ভুলসমূহ
\`Atomics\` ব্যবহার না করে সরাসরি মেমোরি অ্যারেতে রিড-রাইট করা (যেমন: \`array[0] = 10\`), যা থ্রেডগুলোর কাজ সংঘর্ষে ফেলে ভুল রেজাল্ট তৈরি করবে।

### Code Example
\`\`\`javascript
const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  // ৪ বাইটের একটি শেয়ার্ড মেমোরি স্পেস তৈরি (১টি ৩২-বিট ইন্টিজার)
  const sab = new SharedArrayBuffer(4);
  const int32 = new Int32Array(sab);
  int32[0] = 10; // প্রারম্ভিক মান

  const worker = new Worker(__filename, { workerData: sab });

  worker.on('exit', () => {
    // নিরাপদে আপডেট হওয়া ডেটা লোড করা
    console.log('শেয়ার্ড মেমোরির চূড়ান্ত মান:', Atomics.load(int32, 0));
  });
} else {
  const sab = workerData;
  const int32 = new Int32Array(sab);

  // নিরাপদভাবে শেয়ার্ড ইন্টিজারের সাথে ৫ যোগ করা হচ্ছে
  Atomics.add(int32, 0, 5);
  console.log('ওয়ার্কার থ্রেড মেমোরি সফলভাবে আপডেট করেছে।');
}
\`\`\``
  },
  {
    id: 'node-express-80',
    title: 'How do you handle file uploads in Express using streams to avoid high memory usage (e.g., using busboy/multer)?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Express', 'File Upload', 'Streams', 'Multer'],
    enAnswer: 'To avoid high memory usage, process file uploads as streams rather than loading the entire file into RAM. Configure Multer to use disk storage (diskStorage) instead of memory storage, or use a stream parser like Busboy to stream file chunks directly to cloud destinations (like S3) as they arrive.',
    bnAnswer: 'অতিরিক্ত মেমোরি ব্যবহার এড়াতে পুরো ফাইল র‍্যামে লোড না করে স্ট্রিম আকারে ফাইল আপলোড হ্যান্ডেল করতে হয়। এর জন্য মাল্টার (Multer) কনফিগারেশনে memoryStorage এর বদলে diskStorage ব্যবহার করতে হবে, অথবা Busboy-এর মতো স্ট্রিম পার্সার দিয়ে ডাটা আসামাত্র সরাসরি ক্লাউড স্টোরেজে (যেমন: S3) স্ট্রিম করতে হবে।',
    enExplanation: `### Explanation
When a user uploads a file, the browser transmits it as a \`multipart/form-data\` request body stream.

**The Memory Trap:**
If you parse file uploads by storing them in memory (e.g. Multer's \`memoryStorage()\`), Node.js will hold the entire file byte buffer in the V8 heap. If 10 users upload 500MB video files simultaneously, the server will allocate 5GB of RAM, exceeding its limits and crashing instantly.

**Stream Processing Approach:**
1. **Multer with Disk Storage**: Saves incoming files in chunks to the server's local temporary folder on disk instead of RAM.
2. **Busboy / Raw Streams**: Directly captures the request multipart stream. As chunks arrive, they are piped straight to destinations (like AWS S3 or Google Cloud Storage) using write-streams.

### Real-World Example
If your application allows users to upload raw media content or backups, streaming parses ensure that your Express container can run comfortably on 512MB RAM even while processing gigabytes of media uploads.

### Best Practice
For cloud setups, avoid saving files to the server's disk entirely. Use stream libraries like \`busboy\` or \`multer-s3\` to pipe the incoming request stream directly to a cloud destination.

### Common Mistakes
Using default multer settings that buffer uploads to RAM memory while receiving long files, causing server memory exhaustion during parallel file uploads.

### Code Example
\`\`\`javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure disk storage instead of memory storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/uploads/'); // Saved straight to disk storage
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Enforce a 50MB file size limit
});

app.post('/api/upload', upload.single('avatar'), (req, file, res) => {
  // req.file contains information about the file on disk
  res.json({ message: 'File uploaded safely to disk storage!', path: req.file.path });
});

app.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার যখন বড় সাইজের ফাইল আপলোড করে, ব্রাউজার সেটি \`multipart/form-data\` বডি স্ট্রিম হিসেবে পাঠায়।

**মেমোরি ট্র্যাপ (Memory Trap):**
আপনি যদি ফাইলটি মেমোরি বা বাফারে জমা রেখে সেভ করতে চান (যেমন: Multer-এর \`memoryStorage()\`), তবে পুরো ফাইলটি নোডের হেপ মেমোরিতে জায়গা নিবে। ১০ জন ইউজার একযোগে ৫০০ মেগাবাইটের ভিডিও আপলোড দিলে ৫ জিবি র‍্যাম লাগবে, যা ছোট হোস্টিং বা কন্টেইনারে মেমোরি ওভারফ্লো করে ক্র্যাশ ঘটাবে।

**স্ট্রিম প্রসেসিং সমাধান:**
১. **Multer Disk Storage**: এটি আসার সাথে সাথে চিপ বা পার্স করে ওএস ড্রাইভের টেম্পোরারি ড্রাইভে লিখে ফেলে। ফলে র‍্যাম ফাঁকা থাকে।
২. **Busboy / Raw Streams**: রিকোয়েস্ট আসার স্ট্রিমটি সরাসরি ধরে অ্যামাজন এস৩ (S3)-র মতো ক্লাউডে স্ট্রিম বা পাইপ করে দেওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারদের বড় প্রোফাইল পিক বা ডকুমেন্ট সাবমিট করতে দেওয়ার এপিআই তৈরি করার সময় স্ট্রিম ব্যবহার করলে ২৫৬ বা ৫১২ মেগাবাইট মেমোরির ছোট কন্টেইনারেও কয়েক জিবির ফাইল নিরাপদে আপলোড করা সম্ভব।

### উত্তম অনুশীলন
ক্লাউড ব্যবহারের ক্ষেত্রে লোকাল ডিস্কেও ফাইল সেভ করবেন না। ইনকামিং আপলোড স্ট্রিমটি সরাসরি ক্লাউড রাইটার স্ট্রিমে পাইপ করে দিন যাতে প্রসেস মেমোরি একদম সুরক্ষিত থাকে।

### সাধারণ ভুলসমূহ
ডিফল্ট কনফিগারেশন ব্যবহার করা যা মেমোরিতে ফাইল ধারণ করে, ফলে কয়েক ইউজার বড় ফাইল একই সাথে আপলোড করলে সার্ভার ডাউন হয়ে যায়।

### Code Example
\`\`\`javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// ডিস্ক স্টোরেজ কনফিগার করা
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/uploads/'); // সরাসরি ডিস্কে সেভ হবে
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // ৫০ মেগাবাইটের ওপর ফাইল সাইজ ব্লক করা
});

app.post('/api/upload', upload.single('avatar'), (req, file, res) => {
  // ফাইলটি র‍্যাম ফ্রি রেখে ডিস্কে সেভ হয়েছে
  res.json({ message: 'ফাইলটি নিরাপদে আপলোড হয়েছে!', path: req.file.path });
});

app.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-81',
    title: 'How does the Node.js Event Loop work with microtasks (process.nextTick, Promise) vs macrotasks (setImmediate, setTimeout)?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Event Loop', 'Microtasks', 'Macrotasks', 'Performance'],
    enAnswer: 'The Event Loop executes macrotask queues phase-by-phase (timers, poll, check). However, between each individual phase (and even between individual callbacks in a phase), Node.js immediately drains the microtask queue, executing process.nextTick callbacks first, followed by resolved Promises.',
    bnAnswer: 'ইভেন্ট লুপ পর্যায়ক্রমে ম্যাক্রো-টাস্ক কিউ (Timers, Poll, Check) রান করে। তবে প্রতিটি পর্যায়ের মাঝে (এমনকি একই পর্যায়ের প্রতিটি আলাদা কলব্যাকের মাঝেও) নোডজেএস মাইক্রো-টাস্ক কিউ ড্রেইন করে, যেখানে প্রথমে process.nextTick এবং এরপর প্রোমিজ (Promise) কলব্যাকগুলো রান হয়।',
    enExplanation: `### Explanation
Understanding execution order in Node.js requires distinguishing between **Macrotasks** and **Microtasks**.

**1. Macrotasks (Task Queues):**
Managed by different phases of the Libuv event loop:
- **Timers**: Executes expired \`setTimeout\` and \`setInterval\` callbacks.
- **Pending/Poll**: Executes I/O and network callbacks.
- **Check**: Executes \`setImmediate\` callbacks.
- **Close**: Executes socket close events.

**2. Microtasks (Queues executed inside the loop loop intervals):**
These do not belong to Libuv phases; they belong to the Node.js Javascript execution layer.
- **nextTick Queue**: Callbacks scheduled via \`process.nextTick()\`.
- **Promise Queue**: Resolved/rejected promises (.then, await).

**Crucial execution rule:**
After executing a callback from a Libuv phase, Node.js pauses loop progress, drains the entire \`nextTick\` queue, then drains the \`Promise\` queue, and only then proceeds to the next Libuv task.

### Real-World Example
If you write a recursive function that repeatedly calls \`process.nextTick(fn)\`, the Event Loop will never move to the next phase (such as listening for new API connections in the Poll phase), causing the server to freeze without handling any network operations.

### Best Practice
Use \`setImmediate()\` rather than \`process.nextTick()\` if you want to offload a heavy task to the next loop iteration. \`setImmediate()\` places the callback in the Check phase, allowing other phases (like network I/O) to finish first.

### Common Mistakes
Assuming \`setTimeout(fn, 0)\` is faster than \`setImmediate(fn)\`. Actually, \`setImmediate\` runs in the "Check" phase which runs immediately after poll phase, while \`setTimeout\` requires checking system clock intervals.

### Code Example
\`\`\`javascript
console.log('Start');

setTimeout(() => console.log('setTimeout (Macrotask)'), 0);
setImmediate(() => console.log('setImmediate (Macrotask)'));

Promise.resolve().then(() => console.log('Promise (Microtask)'));
process.nextTick(() => console.log('process.nextTick (Microtask)'));

console.log('End');

// Execution Output:
// Start
// End
// process.nextTick (Microtask)
// Promise (Microtask)
// setTimeout (Macrotask) or setImmediate (depending on loop phase entry)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস ইভেন্ট লুপের কাজের গতি ও কাজের ধারা বুঝতে **ম্যাক্রোটাস্ক (Macrotask)** ও **মাইক্রোটাস্ক (Microtask)** এর পার্থক্য জানা আবশ্যক।

**১. ম্যাক্রোটাস্ক (Macrotask):**
এটি libuv ইভেন্ট লুপের নির্দিষ্ট ফেজগুলোতে রান করে:
- **Timers**: \`setTimeout\` এবং \`setInterval\` এর কলব্যাক রান করে।
- **Poll**: যাবতীয় নেটওয়ার্ক, ফাইল I/O কলব্যাক এক্সিকিউট করে।
- **Check**: \`setImmediate\` কলব্যাকগুলো রান করে।

**২. মাইক্রোটাস্ক (Microtask):**
এগুলো ইভেন্ট লুপের কোনো নির্দিষ্ট ফেজের অংশ নয়। এগুলো জাভাস্ক্রিপ্ট লেভেলেই রান হয়:
- **nextTick Queue**: \`process.nextTick()\` এর কলব্যাক।
- **Promise Queue**: প্রোমিজের রিকলব্যাকসমূহ (\`then()\`/async/await)।

**অ্যাক্সেস রুল:**
লুপের যেকোনো একটি কাজের পর লুপ থেমে যায় ও মাইক্রোটাস্কগুলোর সমস্ত কাজ শেষ করে (প্রথমে \`nextTick\` এবং তারপর \`Promise\` কিউ)। এরপর লুপ আবার তার পরবর্তী ফেজের ম্যাক্রোটাস্ক শুরু করে।

### বাস্তব-ভিত্তিক উদাহরণ
কোডের কোনো রিক্লুসিভ লুপে অনবরত \`process.nextTick()\` কল করলে ইভেন্ট লুপ পরবর্তী ফেজে (যেমন এপিআই পোর্ট লিসেন করা) যেতে পারবে না এবং পুরো নোড সার্ভার লক বা হ্যাং হয়ে যাবে।

### উত্তম অনুশীলন
পরবর্তী লুপ সাইকেলে কোনো কাজ ডেডিকেট করতে চাইলে \`process.nextTick\` এর বদলে \`setImmediate\` ব্যবহার করুন। এতে ইভেন্ট লুপের অন্যান্য কাজ সম্পন্ন হওয়ার সুযোগ পায়।

### সাধারণ ভুলসমূহ
\`setTimeout(fn, 0)\` কে \`setImmediate(fn)\` এর চেয়ে দ্রুত মনে করা। \`setImmediate\` সবসময় "Check" ফেজে রান করে যা আই/ও ফেজের পরপরই আসে, আর টাইমারের জন্য ওএস ক্লক পালস চেক করতে হয়।

### Code Example
\`\`\`javascript
console.log('শুরু');

setTimeout(() => console.log('setTimeout (ম্যাক্রোটাস্ক)'), 0);
setImmediate(() => console.log('setImmediate (ম্যাক্রোটাস্ক)'));

Promise.resolve().then(() => console.log('Promise (মাইক্রোটাস্ক)'));
process.nextTick(() => console.log('process.nextTick (মাইক্রোটাস্ক)'));

console.log('শেষ');

// আউটপুট সিকোয়েন্স:
// শুরু
// শেষ
// process.nextTick (মাইক্রোটাস্ক)
// Promise (মাইক্রোটাস্ক)
// setTimeout / setImmediate (লুপের ফেজ অনুযায়ী)
\`\`\``
  },
  {
    id: 'node-express-82',
    title: 'What is CPU profiling in Node.js, and how do you generate and read flame graphs?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'CPU Profiling', 'Flame Graphs', 'Performance', 'V8'],
    enAnswer: 'CPU profiling records the call stack of a Node.js process at regular intervals to analyze function execution times. You generate a profile using the --prof flag or v8-profiler, and convert the logs into a Flame Graph (using tools like clinic.js or Chrome DevTools) where wider blocks represent functions consuming more CPU time.',
    bnAnswer: 'সিপিইউ প্রোফাইলিং নির্দিষ্ট সময় পরপর নোডজেএস প্রসেসের কল স্ট্যাক রেকর্ড করে ফাংশনগুলো কতটুকু সময় নিচ্ছে তা অ্যানালাইসিস করে। --prof ফ্ল্যাগ বা v8-profiler দিয়ে প্রোফাইল লগ জেনারেট করে ফ্ল্লেম গ্রাফে (Flame Graph) রূপান্তর করা হয় (যেমন: clinic.js দিয়ে)। গ্রাফে চওড়া ব্লকগুলো বেশি সিপিইউ ব্যবহারকারী ফাংশন নির্দেশ করে।',
    enExplanation: `### Explanation
When a Node.js process spikes to 100% CPU usage, you need to know exactly which line of JavaScript code is causing the execution lock. **CPU Profiling** is the tool for this.

**Generating a CPU Profile:**
1. **Built-in V8 Profiler**: Start your app with profiling enabled:
   \`\`\`bash
   node --prof app.js
   \`\`\`
2. This generates a \`isolate-0xXXXXXXXXX-v8.log\` file containing low-level stack-trace logs.
3. **Parse Logs**: Process the log using Node's tick processor:
   \`\`\`bash
   node --prof-process isolate-0xXXXXXXXXX-v8.log > processed.txt
   \`\`\`

**Understanding Flame Graphs:**
A Flame Graph is a visualization of the processed profile:
- **Y-axis**: Stack depth (functions calling functions).
- **X-axis**: Total execution time (not chronological order).
- **Width of Block**: Represents the percentage of CPU cycles spent inside that function.
- **Color**: Typically ranges from warm (red/orange) to cool (yellow), representing function performance hotspots.

### Real-World Example
If your endpoint hashes PDF configurations and hits high latency, a CPU profile flame graph will show a massive orange block on the encryption method, telling you to optimize that specific task.

### Best Practice
Use modern tools like \`clinic.js\` (e.g. \`clinic flame -- node app.js\`) to automatically launch your server, run benchmarking tests, and generate interactive, browser-loadable flame graphs.

### Common Mistakes
Analyzing CPU profiles generated during local testing without simulating production-like load. Always run benchmark tools like \`autocannon\` to generate requests while recording the CPU profile.

### Code Example
\`\`\`bash
# 1. Install Clinic.js globally
npm install -g clinic

# 2. Run the application with clinic flame graph profiler
clinic flame -- node server.js

# 3. In another terminal, generate benchmark traffic
npx autocannon -c 100 -d 10 http://localhost:3000/api/heavy-calculation

# 4. Stop the clinic process to automatically open the generated flame graph in your browser
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন আপনার নোডজেএস অ্যাপের সিপিইউ ব্যবহার হঠাৎ ১০০% হয়ে যায়, তখন কোন ফাংশনের কারণে এই জটিলতা তৈরি হয়েছে তা জানতে **সিপিইউ প্রোফাইলিং** করা প্রয়োজন।

**প্রোফাইল তৈরির ধাপসমূহ:**
১. **ভি৮ প্রোফাইলার**: \`node --prof app.js\` দিয়ে অ্যাপ চালু করলে প্রসেসর ট্র্যাক ফাইল \`isolate-xxx.log\` তৈরি হয়।
২. **লগ প্রসেস**: নোডের টিক প্রসেসর দিয়ে লগ রিডেবল করা হয়: \`node --prof-process isolate-xxx.log > processed.txt\`।

**ফ্লেম গ্রাফ (Flame Graph) বুঝার নিয়ম:**
ফ্লেম গ্রাফ হলো প্রোফাইলের ভিজ্যুয়াল ইন্টারফেস:
- **Y-অক্ষ (Y-axis)**: ফাংশন কল স্ট্যাকের গভীরতা (এক ফাংশন থেকে আরেক ফাংশন কল)।
- **X-অক্ষ (X-axis)**: মোট রানটাইম বা সময়।
- **ব্লকের চওড়া অংশ (Width)**: যে ফাংশনটির ব্লক যত বেশি চওড়া, সেটি সিপিইউর তত বেশি সময় নষ্ট করছে।
- **রং (Color)**: সাধারণত কমলা বা লাল রঙের ব্লকগুলো বেশি গরম বা স্লো প্রসেস চিহ্নিত করে।

### বাস্তব-ভিত্তিক উদাহরণ
পিডিএফ জেনারেট করার একটি এপিআই কল করার পর সার্ভার স্লো হচ্ছে। ফ্লেম গ্রাফ ওপেন করলে দেখা যাবে জেনারেটরের লুপের অংশটি অনেক চওড়া ব্লক দখল করে আছে। এটি নির্দেশ করে আপনার লুপের কোড অপ্টিমাইজ করতে হবে।

### উত্তম অনুশীলন
ম্যানুয়ালি লগ রিড না করে \`clinic.js\` লাইব্রেরি ব্যবহার করুন (\`clinic flame -- node server.js\`)। এটি নিজে গ্রাফ তৈরি করে ব্রাউজারে ওপেন করে দেয়।

### সাধারণ ভুলসমূহ
লোকাল টেস্টে কোনো রিকোয়েস্ট বা লোড ছাড়া প্রোফাইলিং করা। ডায়ালাইসিস সঠিক করতে প্রোফাইল করার সময় \`autocannon\` দিয়ে সার্ভারে ফায়ার রিকোয়েস্ট তৈরি করতে হবে।

### Code Example
\`\`\`bash
# ১. গ্লোবাল ক্লিনিক ইনস্টল করা
npm install -g clinic

# ২. ক্লিনিক ফ্লেম গ্রাফ প্রোফাইলার সহ অ্যাপ রান করা
clinic flame -- node server.js

# ৩. অন্য টার্মিনালে টেস্ট ট্রাফিক পাঠানো
npx autocannon -c 100 -d 10 http://localhost:3000/api/heavy-calculation

# ৪. প্রসেস ক্লোজ করলে স্বয়ংক্রিয়ভাবে ব্রাউজারে ইন্টারেক্টিভ ফ্লেম গ্রাফ ওপেন হবে
\`\`\``
  },
  {
    id: 'node-express-83',
    title: 'How do you implement zero-downtime reload using PM2 and understand its Cluster mode?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'PM2', 'Deployment', 'Zero-downtime', 'DevOps'],
    enAnswer: 'Zero-downtime reload is achieved using the pm2 reload <app> command in PM2 Cluster Mode. Unlike pm2 restart, which kills all instances at once, pm2 reload restarts workers sequentially, ensuring at least one active instance is always online to handle incoming traffic.',
    bnAnswer: 'PM2-এর ক্লাস্টার মোডে pm2 reload <app> কমান্ড দিয়ে জিরো-ডাউনটাইম রিলোড অর্জন করা হয়। pm2 restart সব প্রসেস একবারে বন্ধ করে চালু করে, কিন্তু pm2 reload প্রতিটি ওয়ার্কার একে একে রিস্টার্ট করে, ফলে ট্রাফিক হ্যান্ডেল করার জন্য অন্তত একটি ওয়ার্কার সবসময় সচল থাকে।',
    enExplanation: `### Explanation
During production updates, stopping a process and starting it again creates a window of time (downtime) where incoming API requests fail. PM2 solves this using **Cluster Mode** and **Graceful Reloads**.

**Cluster Mode vs. Fork Mode:**
- **Fork Mode**: Spawns a single Node.js instance (default).
- **Cluster Mode**: Uses the Node.js Cluster module to scale your app across all available cores without changing a line of code.

**How PM2 Reload Achieves Zero Downtime:**
1. When you run \`pm2 reload all\`, PM2 notifies the first worker to stop accepting new requests, finish its active requests, and shut down (graceful shutdown).
2. While the first worker is restarting, the remaining workers continue handling the full traffic load.
3. Once the first worker is successfully online and ready, PM2 moves to the next worker.
4. This rolling restart ensures the service is never completely offline.

### Real-World Example
In a production deployment of a banking API, using \`pm2 reload\` instead of \`pm2 restart\` ensures that users completing credit card transactions do not experience sudden HTTP 502/504 errors when new server updates are deployed.

### Best Practice
Configure PM2 using an \`ecosystem.config.js\` file. Set \`instances: "max"\` to automatically scale to all CPU cores, and listen to the \`SIGINT\` signal in your code to close database connections cleanly before exiting.

### Common Mistakes
Running \`pm2 restart\` instead of \`pm2 reload\` in deployment pipelines. Restarting terminates all servers simultaneously, resulting in a service outage for a few seconds.

### Code Example
\`\`\`javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'payment-service',
    script: './server.js',
    instances: 'max', // Scale to maximum CPU cores
    exec_mode: 'cluster', // Enable cluster mode
    env: {
      NODE_ENV: 'production'
    },
    listen_timeout: 8000, // Wait for app to boot before switching traffic
    kill_timeout: 10000 // Give app 10s to gracefully shut down
  }]
};

// Start using configuration file:
// pm2 start ecosystem.config.js

// Deploy updates with zero downtime:
// pm2 reload payment-service
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশনে কোড আপডেট করার সময় সার্ভার বন্ধ করে আবার চালু করতে গেলে কিছু সময়ের জন্য রিকোয়েস্ট ফেইল হয়। একে ডাউনটাইম বলে। PM2 ক্লাস্টার ও রিলোডের সাহায্যে এই সমস্যা মেটায়।

**Fork বনাম Cluster মোড:**
- **Fork Mode**: অ্যাপের মাত্র একটি প্রসেস রান করে (ডিফল্ট)।
- **Cluster Mode**: নোডের ক্লাস্টার মডিউল ব্যবহার করে কোনো কোড পরিবর্তন ছাড়াই মাল্টি-কোর স্কেলিং করে।

**জিরো-ডাউনটাইম রিলোডের মেকানিজম:**
১. যখন আপনি \`pm2 reload all\` কমান্ড দেন, PM2 প্রথম ওয়ার্কারটিকে রিকোয়েস্ট নেওয়া বন্ধ করতে বলে এবং তাকে বন্ধ করে।
২. প্রথম ওয়ার্কার বন্ধ হয়ে পুনরায় চালু হতে হতে অন্যান্য ওয়ার্কাররা পুরোদমে ট্রাফিক হ্যান্ডেল করতে থাকে।
৩. প্রথম ওয়ার্কার সচল হলে PM2 ক্রমান্বয়ে ২য় ও ৩য় ওয়ার্কার রিলোড করতে শুরু করে।
৪. এভাবে একের পর এক রিস্টার্ট হওয়ার কারণে ব্যবহারকারীরা কখনো সংযোগ বিচ্ছিন্নতার মুখোমুখি হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেমেন্ট এপিআই সার্ভারে ডেপ্লয়মেন্টের সময় সরাসরি রিসেট দিলে ট্রানজেকশন পেন্ডিং থাকা ইউজাররা ৫০২ এরর পাবে। PM2 রিলোড ব্যবহার করলে একটি পেমেন্ট রিকোয়েস্টও ফেইল না হয়ে সাবলীলভাবে আপডেট হয়ে যাবে।

### উত্তম অনুশীলন
ম্যানুয়ালি কমান্ড না লিখে \`ecosystem.config.js\` ফাইল ব্যবহার করে PM2 রান করুন। সেখানে \`instances: "max"\` এবং \`exec_mode: "cluster"\` প্রপার্টি ডিফাইন করুন।

### সাধারণ ভুলসমূহ
ডেপ্লয়মেন্ট পাইপলাইনে \`pm2 reload\` এর জায়গায় \`pm2 restart\` চালানো। এর ফলে প্রসেসগুলো একসাথে অফলাইন হয়ে কয়েক সেকেন্ডের জন্য সার্ভিস বন্ধ থাকে।

### Code Example
\`\`\`javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'payment-service',
    script: './server.js',
    instances: 'max', // সিপিইউ কোর অনুযায়ী ম্যাক্সিমাম প্রসেস চালু করা
    exec_mode: 'cluster', // ক্লাস্টার মোড সক্রিয় করা
    env: {
      NODE_ENV: 'production'
    },
    listen_timeout: 8000, // বুট হতে অ্যাপকে সর্বোচ্চ ৮ সেকেন্ড সময় দেওয়া
    kill_timeout: 10000 // শাটডাউন হতে ১০ সেকেন্ড সময় দেওয়া
  }]
};

// স্টার্ট করার কমান্ড:
// pm2 start ecosystem.config.js

// জিরো-ডাউনটাইম আপডেট কমান্ড:
// pm2 reload payment-service
\`\`\``
  },
  {
    id: 'node-express-84',
    title: 'How do you integrate Redis with Express for distributed session management and API rate limiting?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Express', 'Redis', 'Session', 'Rate Limiting'],
    enAnswer: 'To manage sessions across multiple Node instances, connect connect-redis middleware with express-session to save sessions in Redis. For rate limiting, use rate-limit-redis to store API request count keys inside Redis, which validates requests globally across all cluster workers.',
    bnAnswer: 'একাধিক নোড ইনস্ট্যান্সে সেশন ম্যানেজ করতে connect-redis মিডলওয়্যারকে express-session এর সাথে যুক্ত করে সেশন রেডিস-এ সেভ করতে হয়। রেট লিমিটিংয়ের জন্য rate-limit-redis ব্যবহার করে রিকোয়েস্ট কাউন্টার রেডিস-এ রাখা হয়, যা ক্লাস্টারের সমস্ত ওয়ার্কারের জন্য কাজ করে।',
    enExplanation: `### Explanation
By default, Express stores session data and rate-limiting histories in the local memory of the running process.

**Why Local Storage Fails at Scale:**
- If you use Cluster mode or load balancers across multiple servers, a user's request will land on different processes. Since memory is isolated, Worker 2 will not recognize a session set on Worker 1.
- Local rate limiters cannot share counts, allowing users to bypass limits by hitting different worker nodes.

**Distributed Session Architecture with Redis:**
1. **Redis Session Store**: \`express-session\` stores the session ID in a browser cookie. Instead of checking local memory, it calls Redis using the session ID to fetch user data.
2. **Redis Rate Limiting**: The client IP or User ID is saved as a key in Redis with an expiration time. Each request increments this key atomically (\`INCR\`). If the value exceeds the threshold, the middleware rejects the request.

### Real-World Example
In a high-traffic SaaS application, distributed Redis limits API abuse globally (e.g., maximum 60 requests per minute per IP) across all Kubernetes pods and ensures users do not get logged out when their traffic switches nodes.

### Best Practice
Set key expirations (\`TTL\`) for all session and rate-limit data stored in Redis. This prevents Redis memory from growing indefinitely over time.

### Common Mistakes
Not handling Redis connection drops. If Redis goes down and your app has no fallback or error handling logic, all Express incoming requests will hang or crash.

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');

const app = express();

// 1. Initialize Redis Client
const redisClient = createClient({ url: 'redis://localhost:6379' });
redisClient.connect().catch(console.error);

// 2. Mount Session with Redis Store
app.use(session({
  store: new RedisStore({ client: redisClient, prefix: 'sess:' }),
  secret: 'my-redis-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in HTTPS production
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

app.get('/api/dashboard', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.send(\`Views: \${req.session.views}\`);
});

app.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে এক্সপ্রেস তাদের সেশন ডাটা ও রেট-লিমিটের ডাটা নিজের রানিং মেমোরিতে (RAM) জমা রাখে।

**স্কেলিংয়ে কেন লোকাল মেমোরি ফেইল করে:**
- আপনি যখন লোড ব্যালেন্সার বা ক্লাস্টার চালাবেন, ইউজারের ১ম রিকোয়েস্ট যাবে ওয়ার্কার ১-এ এবং ২য় রিকোয়েস্ট যেতে পারে ওয়ার্কার ২-এ। ওয়ার্কার ২-এর মেমোরিতে আগের সেশন না থাকায় ইউজার লগআউট হয়ে যাবে।
- লোকাল রেট লিমিটের ক্ষেত্রে ইউজার আলাদা আলাদা নোড হিটের মাধ্যমে আইপি ব্লক এড়িয়ে রিকোয়েস্ট স্প্যাম করতে পারবে।

**রেডিস সেন্ট্রালাইজড আর্কিটেকচার:**
১. **Redis Session**: কুকিতে থাকা সেশন আইডি অনুযায়ী সার্ভার সরাসরি লোকাল মেমোরি ছেড়ে রেডিস সার্ভার থেকে ডাটা তুলে আনে। ফলে সমস্ত ওয়ার্কার একই সেশন ডাটা দেখতে পায়।
২. **Redis Rate Limit**: আইপি দিয়ে রেডিস-এ একটি কী তৈরি হয় নির্দিষ্ট লাইফটাইম (TTL) সহ। প্রতি হিটে রেডিসের ইনক্রিমেন্ট (\`INCR\`) কমান্ড দিয়ে কাউন্ট বাড়ানো হয় এবং লিমিট ক্রস করলে রিকোয়েস্ট রিজেক্ট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
হাজার হাজার কনকারেন্ট রিকোয়েস্ট সম্পন্ন একটি অ্যাপে ব্যবহারকারীরা যাতে বিভিন্ন কন্টেইনারে লোড শিফট হলেও লগড-ইন থাকে ও কোনো বট যাতে মিনিটে ৬০টির বেশি রিকোয়েস্ট করে এপিআই স্লো করতে না পারে, তার জন্য রেডিস সাহায্য করে।

### উত্তম অনুশীলন
রেডিসে সেভ করা সমস্ত কি-এর জন্য এক্সপায়ারি টাইম (\`TTL\` বা \`maxAge\`) সেট করুন যাতে ডেড সেশন ডাটা দীর্ঘদিন রেডিসের মূল্যবান র‍্যাম দখল করে না রাখে।

### সাধারণ ভুলসমূহ
রেডিসের কানেকশন ড্রপ হলে অ্যাপের ক্র্যাশ প্রতিরোধক হ্যান্ডলার না রাখা। রেডিস অফলাইন হলে এক্সপ্রেস সার্ভার যাতে বন্ধ না হয়ে অল্টারনেটিভ প্রসেসে এগোয়, তা কোডে সেট করে রাখা জরুরি।

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');

const app = express();

// ১. রেডিস ক্লায়েন্ট তৈরি ও কানেক্ট
const redisClient = createClient({ url: 'redis://localhost:6379' });
redisClient.connect().catch(console.error);

// ২. সেশনের স্টোর হিসেবে রেডিস মাউন্ট করা
app.use(session({
  store: new RedisStore({ client: redisClient, prefix: 'sess:' }),
  secret: 'my-redis-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // প্রোডাকশনে ট্রু (HTTPS)
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // ১ ঘণ্টা লাইফটাইম
  }
}));

app.get('/api/dashboard', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.send(\`ভিজিটর কাউন্ট: \${req.session.views}\`);
});

app.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-85',
    title: 'What is BullMQ, and how do you handle asynchronous, reliable background jobs in Node.js?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'BullMQ', 'Redis', 'Message Queue', 'Background Jobs'],
    enAnswer: 'BullMQ is a fast, robust Redis-based message queue system for Node.js. It separates CPU-heavy tasks from the main thread by pushing job payloads into Redis-backed queues. Independent worker processes pull jobs from the queue, processing them asynchronously and reliably with built-in retry and concurrency features.',
    bnAnswer: 'BullMQ হলো নোডজেএস-এর জন্য একটি অতি দ্রুত ও নির্ভরযোগ্য রেডিস-ভিত্তিক মেসেজ কিউ (Queue) সিস্টেম। এটি জব পেলোডগুলোকে রেডিস কিউ-তে পুশ করার মাধ্যমে মেইন থ্রেড থেকে ভারী কাজগুলো আলাদা করে দেয়। পৃথক ওয়ার্কার প্রসেসগুলো কিউ থেকে জব নিয়ে এসিনক্রোনাসলি প্রসেস করে।',
    enExplanation: `### Explanation
When building web APIs, certain tasks take too long to handle within a single HTTP request-response cycle (e.g. sending bulk marketing emails, generating large PDF invoices, or video processing).

**Why queues are necessary:**
If you execute these operations inside the Express router thread, the client's socket hangs, and the server's single thread gets blocked, making the app unresponsive to other requests.

**How BullMQ Works:**
- **Producer (Publisher)**: The Express route receives the request, publishes a job data payload to a named queue in Redis, and immediately returns a "202 Accepted" status response to the user.
- **Redis Storage**: Redis keeps the queue in memory, guaranteeing persistency and high throughput.
- **Consumer (Worker)**: A separate, dedicated Node.js process (or worker thread) continuously listens to Redis, pulls the next job payload, and completes the work.
- **Robustness Features**: Includes scheduled delays, priorities, concurrent task allocations, rate limiting, and automatic retry-on-failure.

### Real-World Example
When a user purchases a ticket, the server adds a \`send-ticket-email\` job to the BullMQ queue and immediately shows the confirmation page to the buyer. The actual email is built and dispatched in the background by a separate worker node 2 seconds later.

### Best Practice
Run your workers in a completely separate deployment service (different containers) from your web API servers. This ensures that a massive wave of background CPU-intensive jobs does not exhaust the resources needed to keep your API responsive.

### Common Mistakes
Forgetting to handle worker errors properly. If a worker throws an uncaught exception, the job will fail. Always define \`attempts\` (retry counts) and set up backoff strategies in the job configuration.

### Code Example
\`\`\`javascript
const { Queue, Worker } = require('bullmq');

// 1. Create a queue backed by Redis connection settings
const myQueue = new Queue('EmailQueue', {
  connection: { host: '127.0.0.1', port: 6379 }
});

// 2. Add job from API controller
async function addEmailJob(userEmail) {
  await myQueue.add('sendWelcomeEmail', { email: userEmail }, {
    attempts: 3, // Retry up to 3 times on failure
    backoff: 5000 // Wait 5 seconds before retrying
  });
  console.log('Job added to queue.');
}

// 3. Define Worker (normally placed in a separate process file)
const worker = new Worker('EmailQueue', async (job) => {
  console.log(\`Processing job \${job.id} for email: \${job.data.email}\`);
  // Simulate sending email logic
  if (job.data.email === 'invalid') throw new Error('SMTP connection failed');
  return 'Email Sent Successfully';
}, {
  connection: { host: '127.0.0.1', port: 6379 }
});

worker.on('completed', (job, result) => {
  console.log(\`Job \${job.id} completed. Result: \${result}\`);
});

worker.on('failed', (job, err) => {
  console.log(\`Job \${job.id} failed: \${err.message}\`);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েব এপিআই ডেভেলপমেন্টের সময় কিছু কাজ সম্পন্ন হতে প্রচুর সময় লাগে (যেমন: বাল্ক ইমেইল পাঠানো, ইমেজ বা ভিডিও রূপান্তর বা এক্সপোর্ট)। এ ধরনের কাজ সরাসরি এপিআই রেসপন্সের ভেতরে রাখলে সার্ভার থ্রেড আটকে পড়ে ও ইউজারকে দীর্ঘক্ষণ লোডিং স্ক্রিন দেখতে হয়।

**কিউয়ের প্রয়োজনীয়তা:**
এই দীর্ঘ কাজগুলোকে মেইন থ্রেড থেকে সরিয়ে রেডিস-ভিত্তিক কোনো কিউতে পাঠিয়ে দেওয়া হয়। ক্লায়েন্ট সাথে সাথে একটি "রিকোয়েস্ট অ্যাক্সেপ্টেড" মেসেজ পেয়ে যায় আর ব্যাকগ্রাউন্ডে কিউ থেকে ডাটা নিয়ে ওয়ার্কার কাজটি সম্পন্ন করে।

**BullMQ-এর মূল কাঠামো:**
- **প্রডিউসার (Producer)**: এক্সপ্রেস রুট থেকে এপিআই-তে আসা ডাটা দিয়ে একটি কাজের নোটিশ (Job) কিউতে পুশ করে দেয়।
- **রেডিস**: রেডিস সার্ভার এই ডাটা সিকিউরলি মেমোরিতে ধরে রাখে যাতে ব্যাকগ্রাউন্ড ক্র্যাশেও ডাটা না হারায়।
- **কনজিউমার (Worker)**: নোডজেএস-এর সম্পূর্ণ পৃথক একটি প্রসেস যা কিউ থেকে কাজ নিয়ে ব্যাকগ্রাউন্ডে কাজ চালায়।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটে অর্ডার করার পর পিডিএফ ইনভয়েস তৈরি ও ইমেইলে পাঠানো হয়। টিকিট কেনার সাথে সাথে টিকিট জেনারেট করার কাজটিকে কিউতে রেখে কনফার্মেশন স্ক্রিন দেখিয়ে দেওয়া হয়, আর ২ সেকেন্ড পরে ব্যাকগ্রাউন্ডে পিডিএফ তৈরি হয়ে মেইলে যায়।

### উত্তম অনুশীলন
এপিআই রিকোয়েস্ট নেওয়ার নোড সার্ভার আর ব্যাকগ্রাউন্ডে কাজ করার BullMQ ওয়ার্কার সার্ভার দুটিকে সম্পূর্ণ আলাদা ওএস কন্টেইনারে হোস্ট করুন। এতে ব্যাকগ্রাউন্ডের কাজের লোডে মূল এপিআই সার্ভার স্লো হবে না।

### সাধারণ ভুলসমূহ
কিউ জবের ক্ষেত্রে এরর হ্যান্ডেল না করা এবং রিট্রাই পলিসি না দেওয়া। নেটওয়ার্ক এররের কারণে ইমেইল ফেইল করলে যাতে সিস্টেম অটোমেটিক রিট্রাই করে, তার জন্য \`attempts\` ব্যবহার করা উচিত।

### Code Example
\`\`\`javascript
const { Queue, Worker } = require('bullmq');

// ১. রেডিস কানেকশন দিয়ে কিউ তৈরি করা
const myQueue = new Queue('EmailQueue', {
  connection: { host: '127.0.0.1', port: 6379 }
});

// ২. এপিআই রাউট বা কন্ট্রোলার থেকে কাজ যুক্ত করা
async function addEmailJob(userEmail) {
  await myQueue.add('sendWelcomeEmail', { email: userEmail }, {
    attempts: 3, // ব্যর্থ হলে ৩ বার রিট্রাই করবে
    backoff: 5000 // প্রতি রিট্রাইয়ের পূর্বে ৫ সেকেন্ড অপেক্ষা
  });
  console.log('কাজটি কিউতে যোগ করা হয়েছে।');
}

// ৩. ওয়ার্কারের কাজ ডিফাইন করা (সাধারণত আলাদা ফাইলে থাকে)
const worker = new Worker('EmailQueue', async (job) => {
  console.log(\`জব আইডি \${job.id} প্রসেস হচ্ছে। ইমেইল: \${job.data.email}\`);
  // ইমেইল পাঠানোর মূল লজিক এখানে
  if (job.data.email === 'invalid') throw new Error('ইমেইল সার্ভার ডাউন');
  return 'ইমেইল পাঠানো সম্পন্ন';
}, {
  connection: { host: '127.0.0.1', port: 6379 }
});

worker.on('completed', (job, result) => {
  console.log(\`জব \${job.id} শেষ হয়েছে। ফলাফল: \${result}\`);
});

worker.on('failed', (job, err) => {
  console.log(\`জব \${job.id} ব্যর্থ হয়েছে: \${err.message}\`);
});
\`\`\``
  },
  {
    id: 'node-express-86',
    title: 'Explain how to implement an HTTP/2 server in Node.js and its advantages over HTTP/1.1.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'HTTP/2', 'Protocols', 'Performance', 'Network'],
    enAnswer: 'To implement HTTP/2, use the built-in http2 module and create a secure server using createSecureServer() (as HTTP/2 requires TLS/ALPN). HTTP/2 improves on HTTP/1.1 by supporting multiplexing over a single TCP connection, header compression (HPACK), and server push capability.',
    bnAnswer: 'HTTP/2 ইমপ্লিমেন্ট করতে নোডের বিল্ট-ইন http2 মডিউল ব্যবহার করে createSecureServer() দিয়ে একটি সিকিউর সার্ভার তৈরি করতে হয় (যেহেতু HTTP/2-এর জন্য TLS/ALPN আবশ্যক)। HTTP/2 সিঙ্গেল TCP কানেকশনের ওপর মাল্টিপ্লেক্সিং, হেডার কম্প্রেশন (HPACK) এবং সার্ভার পুশ সাপোর্ট করে পারফরম্যান্স বাড়ায়।',
    enExplanation: `### Explanation
HTTP/2 is a major revision of the HTTP network protocol designed to resolve core inefficiencies of HTTP/1.1.

**Key Advantages of HTTP/2:**
1. **Multiplexing**: In HTTP/1.1, browsers are limited to ~6 concurrent TCP connections per domain, and requests must queue up (Head-of-Line blocking). HTTP/2 allows sending and receiving multiple requests/responses in parallel over a single TCP connection.
2. **Header Compression (HPACK)**: HTTP/2 compresses repetitive metadata headers, saving bandwidth on every request.
3. **Server Push**: Allows the server to proactively send resources (like CSS or JS files) to the client's cache before the client parses the HTML and asks for them.
4. **Binary Protocol**: Parses binary frames instead of plain text, making parsing faster and less prone to encoding errors.

### Real-World Example
In a page loaded with 50 high-resolution thumbnails, stylesheets, and scripts, an HTTP/1.1 server forces the browser to open and close dozens of TCP sockets sequentially. An HTTP/2 server delivers all 50 assets concurrently over a single TCP connection, decreasing page load speeds.

### Best Practice
In modern cloud architectures, you rarely run HTTP/2 TLS servers directly in your Node.js code because SSL termination and HTTP/2 multiplexing are handled more efficiently by reverse proxies (like NGINX, Cloudflare, or AWS ALBs) which then proxy the traffic to Node.js as standard HTTP/1.1.

### Common Mistakes
Forgetting that HTTP/2 requires secure connections (HTTPS) with TLS certificates in almost all browsers. Attempting to run raw unencrypted HTTP/2 (\`http2.createServer()\`) will fail to load in client browsers.

### Code Example
\`\`\`javascript
const http2 = require('http2');
const fs = require('fs');

// HTTP/2 requires TLS certificates in browsers
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  // Respond to the client stream
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  });
  
  stream.end('<h1>Welcome to HTTP/2 Secure Server!</h1>');
});

server.listen(8443, () => {
  console.log('HTTP/2 Server running on port 8443');
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
HTTP/2 হলো প্রচলিত HTTP/1.1 প্রোটোকলের একটি আধুনিক রূপ যা নেটওয়ার্কের কার্যদক্ষতা বহুলাংশে বৃদ্ধি করে।

**HTTP/2-এর মূল সুবিধাসমূহ:**
১. **মাল্টিপ্লেক্সিং (Multiplexing)**: HTTP/1.1-এ ব্রাউজার সর্বোচ্চ ৫-৬টি কানেকশন একবারে চালাতে পারতো। ফলে কোনো এসেট লোড হতে দেরি হলে বাকিরা লাইনে আটকে যেত (Head-of-Line blocking)। HTTP/2-তে মাত্র ১টি TCP কানেকশন দিয়েই সমান্তরালে সব ডেটা আদান-প্রদান করা যায়।
২. **হেডার কম্প্রেশন (HPACK)**: এটি রিকোয়েস্ট হেডারের সাইজ ছোট করে ব্যান্ডউইথ সাশ্রয় করে।
৩. **সার্ভার পুশ (Server Push)**: ব্রাউজার কোনো ফাইল রিকোয়েস্ট করার আগেই সার্ভার নিজে থেকে প্রয়োজনীয় এসেট (যেমন সিএসএস বা মেইন জেএস) পুশ করতে পারে।
৪. **বাইনারি ফরম্যাট**: সাধারণ টেক্সটের পরিবর্তে এটি ডাটা বাইনারিতে প্রসেস করে, যা ওএস-এর জন্য ফাস্টার।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেজে যদি ৫০টি আইকন, সিএসএস ও স্ক্রিপ্ট ফাইল থাকে, তবে HTTP/1.1 সার্ভারে একের পর এক রিকোয়েস্ট হিট করার কারণে পেজ লোড হতে ৫ সেকেন্ড সময় লাগতে পারে। HTTP/2 সার্ভারে ১টি কানেকশনেই সব লোড হয়ে ১ সেকেন্ডেরও কম সময়ে পেজ ওপেন হয়ে যাবে।

### উত্তম অনুশীলন
বাস্তব প্রোডাকশন সার্ভারে নোডজেএস কোডের ভেতরে 직접 SSL এবং HTTP/2 কনফিগার না করাই ভালো। SSL Termination এবং HTTP/2 লোড হ্যান্ডলিংয়ের জন্য NGINX, Cloudflare বা AWS ALB ব্যবহার করুন, যা রিকোয়েস্ট রিসিভ করে নোড প্রসেসে পাঠিয়ে দেয়।

### সাধারণ ভুলসমূহ
ব্রাউজার সার্টিফিকেশন ছাড়া প্লেইন HTTP/2 রান করা। ব্রাউজারগুলো HTTPS সার্টিফিকেট বা TLS ছাড়া HTTP/2 সাপোর্ট করে না, ফলে সাধারণ কানেকশন ফেইল হবে।

### Code Example
\`\`\`javascript
const http2 = require('http2');
const fs = require('fs');

// এইচটিটিপি/২ চালুর জন্য টিএলএস (SSL) সার্টিফিকেট লাগবে
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  // ক্লায়েন্ট স্ট্রিমে রেসপন্স পাঠানো
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  });
  
  stream.end('<h1>এইচটিটিপি/২ সিকিউর সার্ভারে আপনাকে স্বাগতম!</h1>');
});

server.listen(8443, () => {
  console.log('HTTP/2 সার্ভার ৮৪৪৩ পোর্টে সচল রয়েছে');
});
\`\`\``
  },
  {
    id: 'node-express-87',
    title: 'How do WebSockets work in Node.js, and how does Socket.io handle scaling using Redis Adapter?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'WebSockets', 'Socket.io', 'Redis Adapter', 'Scaling'],
    enAnswer: 'WebSockets initiate via an HTTP upgrade request to create a persistent, duplex TCP connection. To scale Socket.io across multiple servers, you connect the @socket.io/redis-adapter. When a message is emitted from Server A, the adapter broadcasts it to Redis Pub/Sub, which routes it to Server B and C to deliver to clients connected there.',
    bnAnswer: 'ওয়েবসকেটস প্রথমে একটি HTTP রিকোয়েস্টকে Upgrade করার মাধ্যমে স্থায়ী ও দ্বিমুখী TCP কানেকশন তৈরি করে। একাধিক সার্ভারে Socket.io স্কেল করতে @socket.io/redis-adapter ব্যবহার করতে হয়। সার্ভার A থেকে কোনো মেসেজ পাঠালে তা রেডিস পাব/সাব-এর মাধ্যমে সার্ভার B ও C-তে ব্রডকাস্ট হয়।',
    enExplanation: `### Explanation
WebSockets enable real-time, bi-directional communication between client and server.

**Connection Lifecycle:**
1. **Handshake**: The client starts with an HTTP GET request containing the header \`Upgrade: websocket\`.
2. **Establishment**: The server responds with \`101 Switching Protocols\`. The TCP connection remains open, changing from HTTP request-response syntax to WebSocket binary/text frames.

**The Scaling Problem:**
If Server A handles Client 1, and Server B handles Client 2:
- If Client 1 emits a message to the room, Server A does not know about Client 2, so Client 2 never receives the message.

**How Redis Adapter Solves It:**
The \`@socket.io/redis-adapter\` links all running Node.js WebSocket nodes using Redis Pub/Sub channels:
1. Client 1 sends a message to Server A.
2. Server A's Socket.io emits the event locally and publishes it to a Redis Pub/Sub channel.
3. Server B (which is subscribed to the channel) receives the message and broadcasts it locally to Client 2.

### Real-World Example
In a multiplayer mobile game or chat app, users are routed randomly to different cloud containers. The Redis Adapter ensures that when a user shoots an arrow, all other players in the game lobby see it instantly, regardless of which container they are connected to.

### Best Practice
Configure your load balancers with **sticky sessions** (IP hash) if you support Socket.io's HTTP long-polling fallback, ensuring the handshake request and socket establishment request land on the exact same server instance.

### Common Mistakes
Forgetting that WebSockets bypass traditional HTTP middlewares. Middlwares mounted in Express using \`app.use()\` will not automatically run on WebSocket event calls unless configured explicitly in the Socket.io handshake process.

### Code Example
\`\`\`javascript
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { createClient } = require('redis');
const { createAdapter } = require('@socket.io/redis-adapter');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Setup Redis Pub/Sub Clients
const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // Connect Socket.io to Redis Adapter
  io.adapter(createAdapter(pubClient, subClient));
  console.log('Socket.io Redis Adapter configured.');
});

io.on('connection', (socket) => {
  console.log(\`Socket connected: \${socket.id}\`);
  
  socket.on('chatMessage', (data) => {
    // This broadcasts to ALL instances in the cluster via Redis
    io.emit('message', data);
  });
});

httpServer.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ওয়েবসকেট ক্লায়েন্ট ও সার্ভারের মধ্যে রিয়েল-টাইম, দ্বিমুখী ডেটা আদান-প্রদানের কানেকশন নিশ্চিত করে।

**কানেকশন লাইফসাইকেল:**
১. **হ্যান্ডশেক**: ক্লায়েন্ট প্রথমে একটি সাধারণ HTTP রিকোয়েস্ট পাঠায় যার হেডারে \`Upgrade: websocket\` থাকে।
২. **কানেকশন তৈরি**: সার্ভার রাজি থাকলে \`101 Switching Protocols\` রেসপন্স কোড পাঠায় ও সাধারণ HTTP কানেকশনটি বন্ধ না হয়ে একটি স্থায়ী দ্বিমুখী চ্যানেলে পরিণত হয়।

**স্কেলিং সমস্যা:**
লোকাল সার্ভার A-তে ইউজার ১ এবং সার্ভার B-তে ইউজার ২ কানেক্টেড। ইউজার ১ কোনো মেসেজ পাঠালে সার্ভার A সেটি রিসিভ করবে কিন্তু সার্ভার B-তে থাকা ইউজার ২-এর কাছে মেসেজ পৌঁছাবে না কারণ তাদের মধ্যে কোনো লিঙ্ক নেই।

**রেডিস এডাপ্টারের সমাধান:**
\`@socket.io/redis-adapter\` রেডিসের পাব/সাব (Pub/Sub) সিস্টেম ব্যবহার করে সব সার্ভারকে একত্রে সিনক্রোনাইজ করে। সার্ভার A মেসেজ পেলেই সেটি রেডিস চ্যানেলে পাবলিশ করে দেয়, যা শুনে সার্ভার B তার ইউজারকে মেসেজটি ফরোয়ার্ড করে।

### বাস্তব-ভিত্তিক উদাহরণ
মাল্টিপ্লেয়ার গেম বা চ্যাট রুমে ব্যবহারকারীরা বিশ্বের বিভিন্ন সার্ভারে লোড অনুযায়ী ডিস্ট্রিবিউট হয়। রেডিস এডাপ্টার নিশ্চিত করে যে কোনো ইউজার তার গেম ক্যারেক্টার নাড়ালে অন্য সব কন্টেইনারে যুক্ত প্লেয়াররাও তা সাথে সাথে দেখতে পাবে।

### উত্তম অনুশীলন
লোকার ব্যালেন্সারে **Sticky Sessions** অন রাখুন। সকেট কানেক্ট হওয়ার আগে বেশ কিছু লং-পোলিং HTTP রিকোয়েস্ট একই কন্টেইনারে যেতে হয় হ্যান্ডশেক সম্পন্ন করার জন্য।

### সাধারণ ভুলসমূহ
মনে করা যে এক্সপ্রেসের সমস্ত মিডলওয়্যার সকেটের ভেতরের কোডেও অটো রান করবে। সকেটের জন্য আলাদাভাবে সেশন বা অথেনটিকেশন মিডলওয়্যার কনফিগার করতে হয়।

### Code Example
\`\`\`javascript
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { createClient } = require('redis');
const { createAdapter } = require('@socket.io/redis-adapter');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// রেডিস ক্লায়েন্ট তৈরি করা
const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // সকেটের এডাপ্টার হিসেবে রেডিস সেট করা
  io.adapter(createAdapter(pubClient, subClient));
  console.log('Socket.io রেডিস এডাপ্টার চালু হয়েছে।');
});

io.on('connection', (socket) => {
  console.log(\`সকেট কানেক্টেড: \${socket.id}\`);
  
  socket.on('chatMessage', (data) => {
    // এটি রেডিসের মাধ্যমে ক্লাস্টারের সমস্ত সার্ভারে ব্রডকাস্ট হবে
    io.emit('message', data);
  });
});

httpServer.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-88',
    title: 'What is gRPC, and how does it compare to REST/JSON in a Node.js microservices architecture?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'gRPC', 'Microservices', 'Protocols', 'Performance'],
    enAnswer: 'gRPC is a high-performance, open-source RPC framework. Unlike REST/JSON which uses HTTP/1.1 and plain text JSON payloads, gRPC communicates over HTTP/2 using Protocol Buffers (protobuf) to serialize structured binary data, offering lower latencies, smaller payload sizes, and native streaming support.',
    bnAnswer: 'gRPC হলো একটি হাই-পারফরম্যান্স ওপেন-সোর্স RPC ফ্রেমওয়ার্ক। HTTP/1.1 ও প্লেইন টেক্সট JSON বডি ব্যবহারকারী REST-এর তুলনায় gRPC সরাসরি HTTP/2 প্রোটোকল ও প্রোটোকল বাফার (protobuf) ব্যবহার করে বাইনারি ডেটা আদান-প্রদান করে, যা ডাটা ট্রাফিক হ্রাস করে ও গতি বাড়ায়।',
    enExplanation: `### Explanation
gRPC (Google Remote Procedure Call) is designed for efficient inter-service communication in distributed backend architectures.

**Comparing gRPC and REST/JSON:**

| Feature | REST / JSON | gRPC |
| :--- | :--- | :--- |
| **Protocol** | HTTP/1.1 (typically) | HTTP/2 (always) |
| **Data Format** | JSON (Plain Text) | Protocol Buffers (Binary) |
| **Contract** | Optional (OpenAPI/Swagger) | Strict (\`.proto\` schema file required) |
| **Streaming** | Unidirectional Server-Sent Events | Bidirectional Streaming |
| **Performance** | Medium (Text parsing is slow) | Extremely High (Binary parsing is fast) |

**Protocol Buffers (Protobuf):**
Instead of sending readable keys like \`{"userId": 1234, "username": "rohit"}\`, Protobuf maps these attributes to index numbers in a binary payload. This reduces message sizes by up to 60-80% compared to JSON.

### Real-World Example
In a microservices mesh (e.g. 50 separate services calling each other repeatedly), switching internal API communication from Express REST endpoints to gRPC endpoints decreases CPU loads and reduces network latency bottlenecks.

### Best Practice
Keep gRPC for internal service-to-service communication within your private network, while maintaining a standard HTTP/REST or GraphQL gateway for public client-facing browsers (which do not easily support raw gRPC).

### Common Mistakes
Failing to maintain a single source of truth for \`.proto\` files. Always share Protobuf schema contracts between services using a shared git submodule or a centralized registry package.

### Code Example
\`\`\`javascript
// proto file representation (user.proto)
/*
syntax = "proto3";

service UserService {
  rpc GetUser (UserRequest) returns (UserResponse);
}

message UserRequest {
  int32 id = 1;
}

message UserResponse {
  int32 id = 1;
  string name = 2;
}
*/

// Node.js Implementation
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, 'user.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);
const userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

// UserService implementation
server.addService(userProto.UserService.service, {
  getUser: (call, callback) => {
    const userId = call.request.id;
    // Mock user database query
    callback(null, { id: userId, name: 'Rohit' });
  }
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('gRPC Server running on port 50051');
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
gRPC (Google Remote Procedure Call) হলো ডিস্ট্রিবিউটেড ব্যাকএন্ডে একাধিক মাইক্রোসার্ভিসের মধ্যে দ্রুত যোগাযোগ স্থাপনের জন্য অত্যন্ত কার্যকর একটি প্রোটোকল।

**REST বনাম gRPC তুলনা:**
১. **প্রোটোকল**: REST সাধারণ HTTP/1.1 ব্যবহার করে যেখানে gRPC সর্বদা HTTP/2 দিয়ে চলে।
২. **ডেটা টাইপ**: REST-এ রিডেবল JSON টেক্সট ডাটা পাঠানো হয়, পক্ষান্তরে gRPC-তে পাঠানো হয় কম্প্যাক্ট বাইনারি ফরম্যাট (Protocol Buffers)।
৩. **গতি**: বাইনারি পার্সিং অনেক ফাস্ট এবং ডাটা প্যাকেট ছোট হওয়ায় gRPC বহুগুণ গতিশীল।
৪. **কমিউনিকেশন**: gRPC উভয়দিক থেকেই রিয়েল-টাইম ডাটা স্ট্রিম করতে পারে।

**প্রোটোকল বাফার (Protobuf):**
এটি ডাটাকে কী-ভ্যালু জোড়া হিসেবে না পাঠিয়ে নির্দিষ্ট ইনডেক্স ও সিকোয়েন্স কোড দিয়ে বাইনারি ফাইলে কনভার্ট করে। ফলে মেসেজের সাইজ ৬০% থেকে ৮০% পর্যন্ত হ্রাস পায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মাইক্রোসার্ভিস আর্কিটেকচারে যেখানে ৫০টি সার্ভিস প্রতিনিয়ত ইন্টারনালি ডাটা শেয়ার করছে, সেখানে REST-এর বদলে gRPC ব্যবহার করলে সার্ভারগুলোর নেটওয়ার্ক ব্যান্ডউইথ খরচ ও লেটেন্সি অনেকাংশে কমে আসবে।

### উত্তম অনুশীলন
সার্ভারগুলোর ইন্টারনাল যোগাযোগের জন্য gRPC ব্যবহার করুন এবং ফ্রন্টএন্ড বা ক্লায়েন্ট ব্রাউজারের সাথে যোগাযোগের জন্য গেইটওয়ে হিসেবে স্ট্যান্ডার্ড REST বা GraphQL ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সোর্স ডিরেক্টরিতে প্রোটো (\`.proto\`) ফাইলগুলোর সিঙ্ক বজায় না রাখা। কোড পরিবর্তনের সাথে সাথে সার্ভিসগুলোর স্কিমা ফাইলও আপডেট রাখতে হবে, নাহলে ডেটা এরর দেখা দেবে।

### Code Example
\`\`\`javascript
// প্রোটো ফাইলের গঠন (user.proto)
/*
syntax = "proto3";

service UserService {
  rpc GetUser (UserRequest) returns (UserResponse);
}

message UserRequest {
  int32 id = 1;
}

message UserResponse {
  int32 id = 1;
  string name = 2;
}
*/

// নোডজেএস কোড
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, 'user.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);
const userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

// এপিআই সার্ভিসের ইমপ্লিমেন্টেশন
server.addService(userProto.UserService.service, {
  getUser: (call, callback) => {
    const userId = call.request.id;
    // ডাটাবেস কুয়েরি করে রেসপন্স দেওয়া
    callback(null, { id: userId, name: 'Rohit' });
  }
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('gRPC সার্ভার ৫০০৫১ পোর্টে সচল রয়েছে');
});
\`\`\``
  },
  {
    id: 'node-express-89',
    title: 'How do you write memory-efficient code to parse a massive 10GB JSON or CSV file?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'CSV', 'JSON Parser', 'Memory Optimization'],
    enAnswer: 'To parse massive files without running out of memory, never use fs.readFile() or JSON.parse(). Instead, use readable streams (fs.createReadStream) piped into stream-based line/chunk parsers like csv-parser or JSONStream, which yield objects one-by-one.',
    bnAnswer: 'মেমোরি সংকটের কারণে ক্র্যাশ না করে ১০ জিবি-র ফাইল রিড করতে fs.readFile() বা JSON.parse() পরিহার করুন। এর পরিবর্তে fs.createReadStream ব্যবহার করে ডাটা স্ট্রিম তৈরি করুন এবং csv-parser বা JSONStream-এর মতো ইভেন্ট-ভিত্তিক পার্সার দিয়ে একটি করে অবজেক্ট লাইভ প্রসেস করুন।',
    enExplanation: `### Explanation
Loading a 10GB file using \`fs.readFile()\` reads the entire file into Node's RAM. Node's V8 engine has a default heap memory limit of ~1.4GB. The process will immediately abort with a "JavaScript heap out of memory" error.

**Stream Parsing Flow:**
1. **Source Stream**: \`fs.createReadStream('large_data.json')\` starts pulling data in small chunks (default 64KB).
2. **Streaming Parser**:
   - For CSVs: \`csv-parser\` listens for buffer chunks, extracts lines, and emits a \`'data'\` event for each row object.
   - For JSON: \`JSONStream\` parses JSON syntax incrementally, emitting parsed nested objects when they match specific selector paths.
3. **Pipeline Processing**: You process or write the data row-by-row, keeping active RAM allocations under 50MB throughout the entire 10GB lifecycle.

### Real-World Example
In data migration pipelines where you ingest massive transactions histories or user logs exported from analytics databases, stream-based parsing guarantees server stability under high file volumes.

### Best Practice
Always combine stream parsers with backpressure controls. If you are writing parsed rows to a database, pause the read stream when the DB connection pool is saturated, and resume reading once write queues clear.

### Common Mistakes
Piping a large CSV stream directly into a global array variable (e.g. \`rows.push(data)\`). While you avoid buffering the raw file, saving all parsed objects in memory will eventually cause the same memory exhaustion crash.

### Code Example
\`\`\`javascript
const fs = require('fs');
const csv = require('csv-parser');
const { pipeline } = require('stream');

const sourceFile = 'massive_dataset.csv';

// Read file in chunks
const readStream = fs.createReadStream(sourceFile);

// CSV parser emits objects row-by-row
const parser = csv();

let rowCount = 0;

// Pipeline wraps error handling and cleanup automatically
pipeline(
  readStream,
  parser,
  async function* (source) {
    for await (const row of source) {
      rowCount++;
      // Process each row (e.g. log, transform, write in database)
      if (rowCount % 10000 === 0) {
        console.log(\`Processed \${rowCount} rows...\`);
      }
      yield row;
    }
  },
  (err) => {
    if (err) {
      console.error('Pipeline processing failed:', err);
    } else {
      console.log(\`Successfully processed all \${rowCount} rows without memory crash.\`);
    }
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`fs.readFile()\` ব্যবহার করে ১০ জিবি ওজনের একটি ফাইল রিড করতে গেলে নোডজেএস পুরো ফাইলটি একসাথে র‍্যামে নেওয়ার চেষ্টা করবে। নোডের ভি৮ ইঞ্জিনের মেমোরি লিমিট প্রায় ১.৪ জিবি হওয়ায় সার্ভার সাথে সাথে "JavaScript heap out of memory" এরর দিয়ে ক্র্যাশ করবে।

**স্ট্রিম পার্সিং লজিক:**
১. **সোর্স স্ট্রিম**: \`fs.createReadStream()\` এর মাধ্যমে ফাইলটি ছোট ছোট চাঙ্ক (ডিফল্ট ৬৪ কেবি) আকারে পড়া শুরু করে।
২. **স্ট্রিম পার্সার**:
   - CSV ফাইলের জন্য \`csv-parser\` বাফারের বাইট রিড করে একটি করে রো (Row) অবজেক্ট রিটার্ন করে।
   - JSON ফাইলের জন্য \`JSONStream\` রুলস অনুযায়ী অবজেক্ট রিলিজ করে।
৩. **র্যান্ডম প্রসেসিং**: আপনি প্রতি লাইনের ডাটা পাওয়ার পর কাজ শেষ করে ডিলিট করে দিন। এতে পুরো ফাইলে মাত্র ৫০ মেগাবাইটের মতো র‍্যাম ব্যবহার হবে।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যানালিটিক্স ডাটাবেস বা ইউজার এক্টিভিটি লগের মতো বিশাল ফাইল মাইগ্রেশন করার স্ক্রিপ্ট রানিংয়ের সময় স্ট্রিম ব্যবহার করলে কোনো সার্ভার ক্র্যাশ ছাড়াই ব্যাকগ্রাউন্ডে জিবি ট্রাফিকের ডাটাবেস আপডেট করা সম্ভব।

### উত্তম অনুশীলন
ডাটাবেসে ডাটা ইনসার্ট করার স্পিড কম হলে রিডার স্ট্রিমকে মাঝেমধ্যে পজ (Pause) করুন (ব্যাকপ্রেসার রুলস মেনে), যাতে ডেটাবেস রাইট কুয়েরি ব্যাকলগ র‍্যাম ফুল না করে।

### সাধারণ ভুলসমূহ
CSV ফাইল স্ট্রিম রিড করার সময় সমস্ত লাইনের অবজেক্ট একটি গ্লোবাল অ্যারেতে পুশ করে রাখা। শেষ পর্যন্ত অ্যারের সাইজ বড় হয়ে একই মেমোরি ক্র্যাশ ঘটবে।

### Code Example
\`\`\`javascript
const fs = require('fs');
const csv = require('csv-parser');
const { pipeline } = require('stream');

const sourceFile = 'massive_dataset.csv';

// ফাইল চাঙ্ক আকারে পড়ার স্ট্রিম তৈরি
const readStream = fs.createReadStream(sourceFile);

// প্রতি লাইন প্রসেস করার পার্সার
const parser = csv();

let rowCount = 0;

pipeline(
  readStream,
  parser,
  async function* (source) {
    for await (const row of source) {
      rowCount++;
      // একটি করে রো প্রসেস করা (যেমন ডাটাবেসে সেভ)
      if (rowCount % 10000 === 0) {
        console.log(\`প্রসেস হয়েছে \${rowCount} লাইন...\`);
      }
      yield row;
    }
  },
  (err) => {
    if (err) {
      console.error('পাইপলাইন এরর:', err);
    } else {
      console.log(\`সফলভাবে মোট \${rowCount} লাইন প্রসেস সম্পন্ন হয়েছে।\`);
    }
  }
);
\`\`\``
  },
  {
    id: 'node-express-90',
    title: 'Explain the concept of "Event Emitter Memory Leaks" and how to prevent them.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Event Emitter', 'Memory Leak', 'Garbage Collection'],
    enAnswer: 'An Event Emitter memory leak occurs when a long-lived object (like a global state or database client) acts as an event source, and short-lived objects subscribe to it but fail to unsubscribe. The event emitter retains references to the listener functions, preventing V8 from garbage collecting the subscriber objects.',
    bnAnswer: 'ইভেন্ট এমিটার মেমোরি লিক ঘটে যখন একটি দীর্ঘস্থায়ী অবজেক্ট (যেমন গ্লোবাল অবজেক্ট বা ডিবি ক্লায়েন্ট) ইভেন্ট সোর্স হিসেবে কাজ করে, এবং ক্ষণস্থায়ী অবজেক্টগুলো তাতে সাবস্ক্রাইব করে কিন্তু আনসাবস্ক্রাইব করতে ভুলে যায়। এর ফলে V8 সাবস্ক্রাইবারগুলোকে মেমোরি থেকে রিমুভ করতে পারে না।',
    enExplanation: `### Explanation
In Node.js, the \`EventEmitter\` class facilitates event-driven programming.

**How the Leak Happens:**
When you call \`emitter.on('event', listener)\`, the emitter stores the \`listener\` function in an internal array.
- If the emitter lives for the entire lifecycle of the server (e.g. \`process\`, a global config, or a DB instance), the reference to the listener remains active.
- Even if the request controller or socket that created the listener is closed, the listener function closure keeps those objects alive in the V8 heap.
- Node.js warns you by default if an event emitter has more than 10 listeners appended, showing: \`(node) warning: possible EventEmitter memory leak detected. 11 listeners added\`.

**Prevention Techniques:**
1. **Unsubscribe**: Always remove listeners using \`emitter.removeListener()\` or \`emitter.off()\` when the subscriber object is destroyed.
2. **Use \`once()\`**: If an event only fires one time, register it with \`emitter.once()\` so Node.js automatically removes the callback reference after execution.
3. **AbortSignal**: Modern Node.js APIs support adding event listeners bound to an \`AbortSignal\` that automatically cleans up listeners when aborted.

### Real-World Example
Binding request-specific hooks to global system processes:
\`\`\`javascript
app.get('/api/status', (req, res) => {
  // Leak: This appends a listener every time the endpoint is called!
  process.on('SIGTERM', () => {
    console.log('Server shutting down, cleaning request');
  });
  res.send('OK');
});
\`\`\`

### Best Practice
Never register event listeners inside Express route handlers or middleware on global variables like \`process\`, \`db\`, or connection pools. If you must, ensure you bind them with a cleanup callback during connection close events.

### Common Mistakes
Using anonymous functions as event listeners (e.g. \`emitter.on('event', () => { ... })\`) and then attempting to call \`emitter.off('event', () => { ... })\`. Since function references do not match, the listener is never removed.

### Code Example
\`\`\`javascript
const EventEmitter = require('events');
const myGlobalEmitter = new EventEmitter();

function setupRequestLogger(socket) {
  // Define named listener function reference
  const onLog = (msg) => {
    console.log(\`Socket \${socket.id} Log: \${msg}\`);
  };

  // Register listener
  myGlobalEmitter.on('newLog', onLog);

  // Clean up listener when socket disconnects to prevent memory leak
  socket.on('disconnect', () => {
    myGlobalEmitter.off('newLog', onLog); // Correctly removes referencing link
    console.log('Cleaned up event emitter reference.');
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস-এর ইভেন্ট-ড্রিভেন আর্কিটেকচারের মূলে রয়েছে \`EventEmitter\` ক্লাস।

**লিক যেভাবে তৈরি হয়:**
যখন আপনি \`emitter.on('event', listener)\` ব্যবহার করেন, তখন ওই লিসেনার ফাংশনের একটি রেফারেন্স ইভেন্ট এমিটারের ইন্টারনাল অ্যারেতে যুক্ত হয়ে যায়।
- যদি ইভেন্ট এমিটারটি গ্লোবাল অবজেক্ট হয় (যেমন: \`process\`), তবে রেফারেন্সটি চিরস্থায়ী হয়ে যায়।
- এপিআই বা সকেট ক্লোজ হয়ে গেলেও ওই রেফারেন্সের কারণে V8 মডিউল সেই মেমোরি ডিলিট করতে পারে না।
- সতর্কবার্তা হিসেবে নোডজেএস কোনো এমিটারে ১০টির বেশি লিসেনার এড হলে সতর্ক করে: \`possible EventEmitter memory leak detected\`।

**প্রতিরোধের উপায়:**
১. **আনসাবস্ক্রাইব**: কাজ শেষে \`emitter.off()\` বা \`emitter.removeListener()\` দিয়ে লিসেনার রিমুভ করুন।
২. **\`once()\` ব্যবহার**: ইভেন্ট একবারের জন্য হলে \`emitter.once()\` ব্যবহার করুন যা ট্রিগার হওয়ার পর নিজেই ডিলিট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
এক্সপ্রেস রাউটারের ভেতর গ্লোবাল ওএস প্রসেসের সাথে ইভেন্ট বাইন্ড করা:
\`\`\`javascript
app.get('/api/status', (req, res) => {
  // লিক: প্রতিবার এপিআই কল করার সময় প্রসেসে নতুন লিসেনার যুক্ত হচ্ছে!
  process.on('SIGTERM', () => {
    console.log('সার্ভার শাটডাউন হচ্ছে');
  });
  res.send('OK');
});
\`\`\`

### উত্তম অনুশীলন
এক্সপ্রেস রাউটার বা মিডলওয়্যারের ভেতর গ্লোবাল অবজেক্টের ওপর ইভেন্ট লিসেনার সেট করবেন না। সেট করতে হলেও নিশ্চিত করুন সকেট বা কানেকশন ক্লোজের সময় লিসেনার রিমুভ হচ্ছে।

### সাধারণ ভুলসমূহ
লিসেনার হিসেবে অ্যানোনিমাস ফাংশন ব্যবহার করা (যেমন: \`emitter.on('event', () => {})\`) এবং পরে \`emitter.off()\` কল করা। জাভাস্ক্রিপ্টে দুটি ভিন্ন অ্যানোনিমাস ফাংশন রেফারেন্স এক না হওয়ায় লিসেনার মেমোরি থেকে মুছে যায় না।

### Code Example
\`\`\`javascript
const EventEmitter = require('events');
const myGlobalEmitter = new EventEmitter();

function setupRequestLogger(socket) {
  // নেমড ফাংশন রেফারেন্স তৈরি করা
  const onLog = (msg) => {
    console.log(\`সকেট \${socket.id} লগ: \${msg}\`);
  };

  // লিসেনার যুক্ত করা
  myGlobalEmitter.on('newLog', onLog);

  // সকেট ডিসকানেক্ট হলে লিসেনার রিমুভ করা যাতে মেমোরি লিক না হয়
  socket.on('disconnect', () => {
    myGlobalEmitter.off('newLog', onLog); // মেমোরি রেফারেন্স লিংক রিমুভ
    console.log('ইভেন্ট এমিটার রেফারেন্স পরিচ্ছন্ন করা হয়েছে।');
  });
}
\`\`\``
  },
  {
    id: 'node-express-91',
    title: 'How do you build a robust global error handler in Express.js that handles async/await rejections safely?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Express', 'Error Handling', 'Async/Await', 'Best Practice'],
    enAnswer: 'To handle async rejections in Express 4, wrap router handlers in a wrapper function that catches rejected promises and passes them to next(err). In Express 5, async errors are natively forwarded to the global error handler middleware: (err, req, res, next) => { ... }.',
    bnAnswer: 'এক্সপ্রেস ৪-এ অ্যাসিনক্রোনাস এরর হ্যান্ডেল করতে রাউটার হ্যান্ডলারকে একটি রেপার ফাংশন দিয়ে মুড়ে দিতে হয় যা প্রমিজ রিজেকশন ক্যাচ করে next(err) এ পাঠায়। এক্সপ্রেস ৫-এ অ্যাসিনক্রোনাস এরর স্বয়ংক্রিয়ভাবে গ্লোবাল এরর মিডলওয়্যার (err, req, res, next) এ ফরোয়ার্ড হয়।',
    enExplanation: `### Explanation
In Express.js, if a synchronous route handler throws an error, Express intercepts it automatically and routes it to the error-handling middleware. However, in **Express 4.x**, uncaught errors inside \`async/await\` promises are not forwarded automatically, causing the Node.js process to emit an \`UnhandledPromiseRejectionWarning\` and potentially crash.

**Creating a Robust Error Pipeline:**
1. **Async Wrapper**: Write a helper utility function that wraps async middleware:
   \`\`\`javascript
   const asyncHandler = fn => (req, res, next) => {
     Promise.resolve(fn(req, res, next)).catch(next);
   };
   \`\`\`
2. **Global Error Middleware**: Declare a middleware at the end of the routing stack with exactly 4 parameters: \`(err, req, res, next)\`. Express identifies it by parameter count to handle global app failures.

### Real-World Example
In a database query, if the PostgreSQL connection drops, the database driver throws an async error. An unhandled promise rejection can crash your application, disrupting all other users. An async wrapper safely catches the database failure and returns an HTTP 500 error page.

### Best Practice
Build a custom \`AppError\` class extending the native \`Error\` class to include properties like \`statusCode\` (e.g. 404, 400) and \`isOperational\` (flagging expected user errors vs unexpected system crashes).

### Common Mistakes
Forgetting to specify all 4 arguments in the global error handler signature. If you write \`(err, req, res)\`, Express treats it as a standard middleware, bypassing error handling pipelines.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. Custom App Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Operational errors (Validation, Auth, etc)
    Error.captureStackTrace(this, this.constructor);
  }
}

// 2. Async Wrapper Utility
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// 3. Controller wrapped in catchAsync
app.get('/api/users/:id', catchAsync(async (req, res, next) => {
  const user = await db.findUser(req.params.id); // If fails, promise rejects
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  res.json(user);
}));

// 4. Global Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.isOperational ? 'fail' : 'error';
  
  res.status(statusCode).json({
    status: status,
    message: err.message || 'Internal Server Error',
    // Expose stack trace only in development mode
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেস সার্ভারে কোনো সিঙ্ক্রোনাস কোডে এরর হলে এক্সপ্রেস নিজে থেকেই তা ডিটেক্ট করে গ্লোবাল এরর হ্যান্ডলারে পাঠায়। কিন্তু **Express 4.x**-এ \`async/await\` ব্যবহার করার সময় কোনো এরর হলে তা স্বয়ংক্রিয়ভাবে ক্যাচ হয় না, ফলে প্রসেসটি আনহ্যান্ডেলড প্রোমিজ এরর দিয়ে ক্র্যাশ করতে পারে।

**একটি শক্তিশালী এরর হ্যান্ডলিং কাঠামো:**
১. **অ্যাসিনক্রোনাস রেপার (Async Wrapper)**: এক্সপ্রেস হ্যান্ডলারকে র‍্যাপ করতে একটি ইউটিলিটি লিখুন:
   \`\`\`javascript
   const asyncHandler = fn => (req, res, next) => {
     Promise.resolve(fn(req, res, next)).catch(next);
   };
   \`\`\`
২. **গ্লোবাল এরর মিডলওয়্যার**: রাউটিংয়ের সবার শেষে ৪টি প্যারামিটার সহ মিডলওয়্যার লিখুন: \`(err, req, res, next)\`। ৪টি আর্গুমেন্ট দেখলেই এক্সপ্রেস এটিকে এরর হ্যান্ডলার হিসেবে চিনে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেস কুয়েরি করার সময় কোনো কারণে কানেকশন ফেইল করলে ডাটাবেস ড্রাইভার থেকে অ্যাসিনক্রোনাস এরর থ্রো হয়। এটি হ্যান্ডেল না করা থাকলে পুরো প্রসেস ক্র্যাশ করে রানিং সব ইউজারের কানেকশন কেটে দেবে। অ্যাসিনক্রোনাস রেপার এটি ক্যাচ করে ইউজারকে একটা সুন্দর ৫০০ এরর পেজ দেখাবে।

### উত্তম অনুশীলন
নেটিভ \`Error\` ক্লাসকে এক্সটেন্ড করে একটি কাস্টম \`AppError\` ক্লাস তৈরি করুন যাতে \`statusCode\` (যেমন: ৪৪০, ৪০০) এবং \`isOperational\` (ইউজার এরর নাকি ওএস ক্র্যাশ তা নির্ধারণ করার জন্য) যুক্ত থাকে।

### সাধারণ ভুলসমূহ
গ্লোবাল এরর হ্যান্ডলারের ৪টি আর্গুমেন্ট না লেখা। যদি আপনি \`(err, req, res)\` লেখেন, এক্সপ্রেস একে সাধারণ মিডলওয়্যার মনে করবে এবং এরর হ্যান্ডলার পাইপলাইন বাইপাস করে দেবে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// ১. কাস্টম অ্যাপ এরর ক্লাস
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // অপারেশনাল এরর নির্দেশক
    Error.captureStackTrace(this, this.constructor);
  }
}

// ২. অ্যাসিনক্রোনাস রেপার ইউটিলিটি
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// ৩. catchAsync দিয়ে মোড়ানো এপিআই কন্ট্রোলার
app.get('/api/users/:id', catchAsync(async (req, res, next) => {
  const user = await db.findUser(req.params.id); // ডাটাবেস ফেইল হলে এরর ক্যাচ হবে
  if (!user) {
    return next(new AppError('ইউজার পাওয়া যায়নি', 404));
  }
  res.json(user);
}));

// ৪. গ্লোবাল এরর মিডলওয়্যার (অবশ্যই ৪টি প্যারামিটার থাকতে হবে)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    status: err.isOperational ? 'fail' : 'error',
    message: err.message || 'সার্ভার ইন্টারনাল এরর',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-92',
    title: 'Explain how to implement a secure password hashing mechanism using Argon2 vs Bcrypt in Node.js.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Argon2', 'Bcrypt', 'Security', 'Cryptography'],
    enAnswer: 'Argon2 is the modern industry standard (winner of Password Hashing Competition) which defends against GPU/ASIC cracking by configuration of memory-cost and time-cost parameters. Bcrypt is widely supported but only scales with CPU-cost, making it vulnerable to custom GPU-hardware brute force arrays.',
    bnAnswer: 'Argon2 হলো আধুনিক যুগের ইন্ডাস্ট্রি স্ট্যান্ডার্ড যা মেমোরি-কস্ট ও টাইম-কস্ট কনফিগার করার মাধ্যমে জিপিউ (GPU/ASIC) ক্র্যাকিং প্রতিরোধ করে। Bcrypt শুধুমাত্র সিপিইউ-কস্টের ওপর নির্ভরশীল হওয়ায় আধুনিক হার্ডওয়্যার দিয়ে একে সহজেই ব্রুট-ফোর্স বা ক্র্যাক করা সম্ভব।',
    enExplanation: `### Explanation
Storing passwords in plain text or using raw hashing functions like SHA-256 or MD5 is a critical security vulnerability, as they can be decoded instantly using rainbow tables or brute force setups.

**Comparing Bcrypt and Argon2:**
- **Bcrypt (Blowfish-based)**:
  - Computationally expensive.
  - Scales security strictly via **work factor (rounds)** (CPU usage increases exponentially).
  - Susceptible to specialized GPU/ASIC acceleration rigs which hash millions of attempts per second cheaply.
- **Argon2 (Winner of Password Hashing Competition)**:
  - Configurable in memory cost (\`m\`), time cost (\`t\`), and parallelism (\`p\`).
  - **Memory Hardness**: Forces the hashing algorithm to use a dedicated amount of RAM. This makes hardware-based parallel cracking (like GPUs or ASICs) extremely expensive and unviable.

### Real-World Example
In a high-security user authentication service, configuring Argon2 with 64MB of memory cost and 3 iterations ensures that attempting to run brute force attempts on high-end graphics cards bottlenecks on RAM bandwidth, keeping user passwords secure.

### Best Practice
Set Argon2 memory cost to utilize a safe buffer of your server container RAM. Ensure your signup and login requests are rate-limited to prevent Denial of Service (DoS) attacks that exploit the high resource costs of Argon2 calculations.

### Common Mistakes
Hashing passwords using raw crypto-libraries synchronously on the main thread (\`bcrypt.hashSync()\` or \`argon2.hashSync()\`), which blocks the entire Node.js event loop for hundreds of milliseconds per request, freezing the server for all concurrent clients.

### Code Example
\`\`\`javascript
const argon2 = require('argon2');

async function secureAuthSystem() {
  const plainPassword = 'mySecurePassword123';
  
  try {
    // 1. Securely Hash Password using Argon2id (hybrid method)
    const hashedPassword = await argon2.hash(plainPassword, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16, // 64 MB memory requirement
      timeCost: 3,         // Number of passes
      parallelism: 1       // Number of threads
    });
    
    console.log('Hashed Password:', hashedPassword);

    // 2. Verify incoming password during Login
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    console.log('Password Match Result:', isMatch); // true
    
  } catch (err) {
    console.error('Hashing error:', err);
  }
}

secureAuthSystem();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পাসওয়ার্ড প্লেইন টেক্সট হিসেবে বা সাধারণ হ্যাশ এলগরিদম (যেমন: MD5, SHA-256) ব্যবহার করে ডাটাবেসে সেভ করা বড় ধরণের নিরাপত্তা ঝুঁকি। রেইনবো টেবিল বা আধুনিক ব্রুট-ফোর্স জিপিউ দিয়ে এগুলো মুহূর্তেই ডিকোড করা সম্ভব।

**Bcrypt বনাম Argon2 তুলনা:**
- **Bcrypt**:
  - এটি ক্যালকুলেশন করতে শুধু সিপিইউ (CPU) ব্যবহার করে।
  - এর সিকিউরিটি রাউন্ড বাড়ালে কম্পিউটারের সিপিইউ খরচ বাড়ে।
  - হ্যাকাররা গ্রাফিক্স কার্ড (GPU) ব্যবহার করে খুব কম খরচে মিনিটে লাখ লাখ কম্বিনেশন ট্রাই করে এটি ক্র্যাক করতে পারে।
- **Argon2**:
  - এটি মেমোরি কস্ট (র‍্যাম ব্যবহার) কনফিগার করতে দেয়।
  - এটি জিপিইউ (GPU) বা বিশেষ চিপ দিয়ে প্যারালাল ট্রাই করা অসম্ভব করে তোলে কারণ প্রতিটি ট্রাই করার জন্য একটি নির্দিষ্ট র‍্যাম মেমোরি হোল্ড করতে হয় যা গ্রাফিক্স কার্ডের মেমোরি ব্যান্ডউইথ শেষ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার কাস্টমার পোর্টালের পাসওয়ার্ড স্টোরেজের জন্য Argon2id অ্যালগরিদম ব্যবহার করলে, ডেটাবেস লিক হলেও হ্যাকারদের পক্ষে জিপিউ দিয়ে কোটি কোটি পাসওয়ার্ড টেস্ট করে ইউজারের আসল পাসওয়ার্ড বের করা অসম্ভব হয়ে দাঁড়াবে।

### উত্তম অনুশীলন
কখনো মেইন থ্রেড ব্লক করে সিঙ্ক্রোনাস পদ্ধতিতে হ্যাশ করবেন না (যেমন: \`bcrypt.hashSync\`)। এটি ১টি কোরের প্রসেসরকে প্রায় ২০০-৩০০ মিলিসেকেন্ড আটকে রাখে। সর্বদা অ্যাসিনক্রোনাস \`await argon2.hash()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
হ্যাশ করতে গিয়ে রেট লিমিট অ্যাড না করা। হ্যাকাররা একযোগে হাজার হাজার ফেক লগইন রিকোয়েস্ট পাঠালে Argon2-র মেমোরি ও সিপিইউ খরচ বেশি হওয়ার সুযোগে আপনার সম্পূর্ণ সার্ভার ক্র্যাশ (DoS attack) করতে পারে।

### Code Example
\`\`\`javascript
const argon2 = require('argon2');

async function secureAuthSystem() {
  const plainPassword = 'mySecurePassword123';
  
  try {
    // ১. আর্গন২ দিয়ে পাসওয়ার্ড হ্যাশ করা
    const hashedPassword = await argon2.hash(plainPassword, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16, // ৬৪ মেগাবাইট মেমোরি রিকোয়ারমেন্ট
      timeCost: 3,         // ৩ বার ক্যালকুলেশন পাস
      parallelism: 1       // ১টি প্যারালাল থ্রেড
    });
    
    console.log('হ্যাশকৃত পাসওয়ার্ড:', hashedPassword);

    // ২. লগইনের সময় পাসওয়ার্ড ভেরিফাই করা
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    console.log('পাসওয়ার্ড মিলেছে কিনা:', isMatch); // true
    
  } catch (err) {
    console.error('ক্রিপ্টোগ্রাফি এরর:', err);
  }
}

secureAuthSystem();
\`\`\``
  },
  {
    id: 'node-express-93',
    title: 'What are best practices for securing a Node.js production server (Helmet, CORS, Rate Limiting, CORS preflight)?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Express', 'Security', 'Helmet', 'CORS', 'Rate Limit'],
    enAnswer: 'Best practices include mounting Helmet middleware to set secure HTTP headers (like CSP, HSTS, X-Frame-Options), configuring CORS strictly to trust only defined origin domains, and using express-rate-limit middleware to block brute force and denial of service attacks.',
    bnAnswer: 'উত্তম নিরাপত্তা অনুশীলনের মধ্যে রয়েছে সিকিউর HTTP হেডার (যেমন: CSP, HSTS, X-Frame-Options) সেট করার জন্য Helmet মাউন্ট করা, শুধুমাত্র নির্দিষ্ট ডোমেনকে অনুমতি দিয়ে CORS কনফিগার করা এবং ব্রুট ফোর্স প্রতিরোধে রেট লিমিটার ব্যবহার করা।',
    enExplanation: `### Explanation
Deploying Node.js to production exposes it to automated vulnerability scanners, cross-site script injections, and server flood attempts.

**Core Production Security Layers:**
1. **Helmet**: A middleware wrapper that configures HTTP response headers:
   - \`Content-Security-Policy (CSP)\`: Limits where scripts, stylesheets, and assets can be loaded from, blocking Cross-Site Scripting (XSS).
   - \`Strict-Transport-Security (HSTS)\`: Forces clients to connect over HTTPS only.
   - \`X-Frame-Options\`: Prevents clickjacking by blocking the site from loading inside iframe tags on other domains.
2. **CORS (Cross-Origin Resource Sharing)**:
   - Configures browsers to prevent client-side JS from other domains from reading API responses.
   - Handle **CORS Preflight**: A preliminary \`OPTIONS\` request sent by browsers to verify server policies before sending modifying requests (like \`POST\` or \`DELETE\`).
3. **API Rate Limiting**: Limit the requests an IP can send to endpoints within a window of time.

### Real-World Example
Without Helmet, a hacker injecting an iframe of your payment page inside an infected site can trick users into clicking buttons (Clickjacking). Helmet blocks browser framing, keeping transactions secure.

### Best Practice
Never configure CORS using wildcard origins in production: \`cors({ origin: '*' })\`. Keep origin targets bound to defined client domains. Ensure you also mount the rate limiter specifically on authentication routes (like login, signup, password reset).

### Common Mistakes
Forgetting that CORS is a browser-level security feature. It prevents browsers from reading data, but it does not stop backend servers, Python scripts, or terminal curl commands from querying your Node.js endpoints.

### Code Example
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. Mount Helmet to set secure headers
app.use(helmet());

// 2. Strict CORS Configuration
const corsOptions = {
  origin: ['https://www.mywebsite.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Response status for preflight requests
};
app.use(cors(corsOptions));

// 3. API Rate Limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again after 15 minutes.'
});
app.use('/api/', globalLimiter);

app.get('/api/data', (req, res) => {
  res.json({ data: 'Secure response data' });
});

app.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশনে নোডজেএস রিলিজ করলে তা বিভিন্ন ক্ষতিকর হ্যাকার বট স্ক্যানার, স্ক্রিপ্ট ইনজেকশন ও ডিডিওএস অ্যাটাকের শিকার হতে পারে।

**প্রধান ৩টি প্রটেকশন লেয়ার:**
১. **হেলমেট (Helmet)**: এটি নোডের বিভিন্ন গুরুত্বপূর্ণ HTTP হেডার কনফিগার করে দেয়:
   - \`Content-Security-Policy\`: ক্লায়েন্ট ব্রাউজারে অনাকাঙ্ক্ষিত কোনো স্ক্রিপ্ট রান হওয়া বা ক্রস-সাইট স্ক্রিপ্টিং (XSS) রুখে দেয়।
   - \`X-Frame-Options\`: অন্য কেউ যাতে আইফ্রেম (iframe) দিয়ে আপনার সাইট নকল করে ক্লিকজ্যাকিং করতে না পারে।
২. **CORS**: বাইরের যেকোনো ক্ষতিকর ডোমেনের জাভাস্ক্রিপ্ট থেকে আপনার এপিআই অ্যাক্সেস করা বন্ধ করে দেয়।
   - **Preflight রিকোয়েস্ট**: মডিফাইং মেথড (POST/PUT) ট্রিগার করার আগে ব্রাউজার অটোমেটিক \`OPTIONS\` রিকোয়েস্ট পাঠিয়ে চেক করে যে সার্ভার পারমিশন দেয় কিনা।
৩. **রেট লিমিটিং**: এক ব্যক্তি যাতে বারে বারে কোটি কোটি এপিআই হিট করে সার্ভার ডাউন না করতে পারে, তার আইপি-ভিত্তিক লিমিট বসানো।

### বাস্তব-ভিত্তিক উদাহরণ
হেলমেট ব্যবহার না করলে হ্যাকার আপনার সাইটের ইউআই ফ্রেম নকল করে ফিশিং পেজ তৈরি করতে পারে। হেলমেটের এক্স-ফ্রেম-অপশন হেডার ব্রাউজারকে এটি করতে বাধা দিয়ে গ্রাহককে নিরাপদ রাখবে।

### উত্তম অনুশীলন
কখনো প্রোডাকশন এপিআই-তে ওয়াইল্ডকার্ড অ্যাক্সেস অন করবেন না: \`origin: '*'\`। এটি আপনার পুরো ডেটা ওপেন করে দেয়। সর্বদা ডোমেন নির্দিষ্ট করে দিন।

### সাধারণ ভুলসমূহ
মনে করা যে CORS সেট করলেই ব্যাকএন্ড সেফ। CORS শুধুমাত্র ব্রাউজারকে বাধা দেয়, সরাসরি পাইথন স্ক্রিপ্ট বা টার্মিনালের \`curl\` দিয়ে ব্যাকএন্ড রিকোয়েস্ট ব্লক করার ক্ষমতা CORS-এর নেই। এর জন্য আলাদা আইপি ফায়ারওয়াল বা অথেনটিকেশন লাগবে।

### Code Example
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// ১. হেলমেট দিয়ে সিকিউর হেডার মাউন্ট করা
app.use(helmet());

// ২. কঠোর CORS পলিসি
const corsOptions = {
  origin: ['https://www.mywebsite.com'], // অনুমোদিত সাইট
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // প্রিফ্লাইট রিকোয়েস্ট স্ট্যাটাস
};
app.use(cors(corsOptions));

// ৩. রেট লিমিটিং কনফিগার করা
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ১৫ মিনিট উইন্ডো
  max: 100, // প্রতি আইপি থেকে ১৫ মিনিটে সর্বোচ্চ ১০০ রিকোয়েস্ট
  message: 'আপনার আইপি থেকে অতিরিক্ত রিকোয়েস্ট করা হয়েছে। অনুগ্রহ করে ১৫ মিনিট পর আবার চেষ্টা করুন।'
});
app.use('/api/', globalLimiter);

app.get('/api/data', (req, res) => {
  res.json({ data: 'নিরাপদ ডেটা' });
});

app.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-94',
    title: 'How do you optimize Docker images for Node.js (multi-stage builds, non-root user, node_modules caching)?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Docker', 'DevOps', 'Multi-stage Build', 'Optimization'],
    enAnswer: 'Optimize by using multi-stage builds to exclude build tools and devDependencies from the final runtime image. Build with a small base image (like node:18-alpine), run the container as the non-root "node" user, and copy package files separately to utilize Docker\'s layer cache.',
    bnAnswer: 'মাল্টি-স্টেজ বিল্ড ব্যবহার করে ফাইনাল ইমেজ থেকে বিল্ড টুলস ও ডেভ-ডিপেন্ডেন্সি বাদ দিয়ে ডকার ইমেজ অপ্টিমাইজ করা হয়। লাইটওয়েট বেস ইমেজ (যেমন node:18-alpine) ব্যবহার করা, "node" নামক নন-রুট ইউজারের অধীনে কনটেইনার চালানো এবং লেয়ার ক্যাশ ব্যবহারের জন্য প্যাকেজ ফাইলগুলো আলাদা কপি করতে হবে।',
    enExplanation: `### Explanation
A naive Dockerfile copy-paste command installs all developer packages (like compilers, typescript types, testing packages) into the runtime image, resulting in image sizes of over 1GB, which takes longer to deploy and introduces security vulnerabilities.

**Optimization Pillars for Node.js Dockerfiles:**
1. **Docker Layer Caching**: Copy \`package.json\` and install dependencies *before* copying the remaining source code. Since source code changes frequently but packages do not, Docker will skip the slow \`npm install\` step on subsequent builds.
2. **Multi-Stage Build**:
   - **Stage 1 (Build)**: Use full node image to install dependencies and run build pipelines (like compiling TS to JS).
   - **Stage 2 (Production)**: Use a minimal \`alpine\` runtime image, copy only production dependencies (\`npm prune --production\`) and compiled output from Stage 1.
3. **Non-Root User**: By default, Docker processes run as \`root\`. If an attacker exploits an RCE vulnerability in your Node app, they instantly gain full root privileges over the host. Running as the built-in \`node\` user blocks this.

### Real-World Example
Implementing multi-stage builds for a NestJS or TypeScript-Express API reduces your Docker image sizes from ~1.2GB down to ~150MB, saving hosting storage and decreasing container startup latencies.

### Best Practice
Always include a \`.dockerignore\` file in your directory to block \`node_modules\` and \`.env\` files from being copied directly into the Docker build context.

### Common Mistakes
Forgetting to use Docker layer caching. Copying all files (\`COPY . .\`) before running \`npm install\` forces Docker to rebuild and reinstall all npm packages from scratch every time you modify a single character in your source code.

### Code Example
\`\`\`dockerfile
# --- Stage 1: Build Stage ---
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Leverage Docker cache by copying dependency files first
COPY package*.json ./
RUN npm ci # Installs clean dependencies

# Copy application source code and compile
COPY . .
RUN npm run build

# Remove devDependencies to keep container light
RUN npm prune --production

# --- Stage 2: Production Runtime Stage ---
FROM node:18-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy only required files from build stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

# Secure image by switching from root to node user
USER node

EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডকার ফাইলে অপ্টিমাইজেশন ছাড়া সাধারণ কপি-পেস্ট ব্যবহার করলে ইমেজ সাইজ ১ জিবি-র ওপর চলে যেতে পারে। কারণ সেখানে টাইপস্ক্রিপ্ট কম্পাইলার, টেস্ট প্যাকেজ ও বিভিন্ন বিল্ড টুলস থকে যায়।

**অপ্টিমাইজেশনের ৩টি মূল ভিত্তি:**
১. **ডকার লেয়ার ক্যাশ (Docker Layer Cache)**: সোর্স কোড কপির আগেই \`package.json\` কপি করে \`npm install\` করে নেওয়া। কোড ঘন ঘন পরিবর্তন হলেও প্যাকেজ পরিবর্তন হয় না। তাই পরের বিল্ডগুলোতে ডকার ক্যাশ থেকে প্যাকেজ রিড করে দ্রুত ইমেজ তৈরি করতে পারে।
২. **মাল্টি-স্টেজ বিল্ড (Multi-stage Build)**:
   - **১ম স্টেজ (Build)**: সম্পূর্ণ নোড বেস ইমেজ দিয়ে টাইপস্ক্রিপ্ট কম্পাইল করা ও সব প্যাকেজ লোড করা।
   - **২য় স্টেজ (Run)**: শুধুমাত্র মিনিমাল \`alpine\` ইমেজ রান করা এবং ১ম স্টেজ থেকে বিল্ট জাভাস্ক্রিপ্ট কোড ও প্রোডাকশন ডিপেন্ডেন্সিগুলো কপি করে আনা।
৩. **নন-রুট ইউজার (Non-Root User)**: ডকার ডিফল্টভাবে \`root\` প্রিভিলেজ নিয়ে চলে। নিরাপত্তাজনিত কারণে এটিকে নোডের বিল্ট-ইন \`node\` ইউজারে শিফট করা উচিত।

### বাস্তব-ভিত্তিক উদাহরণ
টাইপস্ক্রিপ্ট এক্সপ্রেস প্রজেক্টে মাল্টি-স্টেজ ডকারফাইল ব্যবহার করলে আপনার প্রজেক্টের ইমেজ ১.২ জিবি থেকে কমে মাত্র ১৫০ মেগাবাইটে নেমে আসে। এতে ক্লাউডে পুশ করতে ও কুবারনেটিসে রানিং স্পিড বহু গুণ বাড়ে।

### উত্তম অনুশীলন
প্রজেক্টে অবশ্যই \`.dockerignore\` ফাইল যুক্ত করুন যাতে আপনার লোকাল মেশিনের \`node_modules\`, \`.git\` বা \`.env\` ফাইল ডকারের ফোল্ডারে কপি না হয়।

### সাধারণ ভুলসমূহ
\`COPY . .\` কমান্ড রান করার পর \`npm install\` চালানো। এর ফলে একটি সামান্য কোড এডিট করলেও ডকার বাধ্য হয়ে প্রতিবার আবার ইন্টারনেট থেকে সমস্ত প্যাকেজ প্রথম থেকে ডাউনলোড করতে শুরু করে।

### Code Example
\`\`\`dockerfile
# --- ১ম স্টেজ: বিল্ড পর্যায় ---
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# প্যাকেজ ডিপেন্ডেন্সি ফাইল আগে কপি করে ক্যাশ ব্যবহার করা
COPY package*.json ./
RUN npm ci

# কোড কপি ও টাইপস্ক্রিপ্ট বিল্ড করা
COPY . .
RUN npm run build

# ডেভ-ডিপেন্ডেন্সি ট্রিম করে ফেলা
RUN npm prune --production

# --- ২য় স্টেজ: প্রোডাকশন রান পর্যায় ---
FROM node:18-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# আগের স্টেজ থেকে শুধু কাজের ফাইলগুলো কপি করা
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

# রুট এক্সেস ব্লক করে সিকিউর ইউজার ব্যবহার করা
USER node

EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\``
  },
  {
    id: 'node-express-95',
    title: 'What is the purpose of the AsyncLocalStorage API in Node.js, and how do you use it for request tracing?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'AsyncLocalStorage', 'Request Tracing', 'Logging', 'Context'],
    enAnswer: 'AsyncLocalStorage is a class in the async_hooks module that stores context (like request IDs or user sessions) across asynchronous call chains. This allows you to track and log unique request IDs throughout different layers of your code without manually passing them down as function arguments.',
    bnAnswer: 'AsyncLocalStorage হলো async_hooks মডিউলের একটি ক্লাস যা এসিনক্রোনাস কাজগুলোর চেইনের মধ্যে নির্দিষ্ট ডাটা (যেমন রিকোয়েস্ট আইডি) শেয়ার করে। এর ফলে প্রতিটি ফাংশনে আর্গুমেন্ট হিসেবে পাস না করেই কোডের বিভিন্ন লেয়ার থেকে রিকোয়েস্ট আইডি ট্র্যাকিং ও লগিং করা সম্ভব।',
    enExplanation: `### Explanation
In languages like Java or PHP, web servers allocate one dedicated thread per request. These threads have access to Thread-Local Storage (TLS) to share request-specific variables globally within that thread.
In Node.js, because a single thread executes all asynchronous operations concurrently, traditional Thread-Local Storage is not possible.

**AsyncLocalStorage (ALS) to the Rescue:**
ALS provides equivalent functionality by keeping track of asynchronous call chains. V8 and Libuv handle event transitions while preserving the state bound to that execution context.

**Common Use Case (Correlation IDs):**
When a client sends a request, you generate a unique \`correlation-id\`. Using ALS, you make this ID accessible globally. Any database queries, external logs, or helpers executed in that async flow can read and print the ID automatically.

### Real-World Example
In a microservices architecture, troubleshooting a failure requires correlation logs. By wrapping your Express request handler in an ALS context, your logging framework can print the unique request ID on every log line, making debugging simple.

### Best Practice
Only store small, read-only metadata objects (like user IDs, tenant IDs, or request tracing IDs) in AsyncLocalStorage. Do not store heavy objects (like entire database instances or express response objects), as they can cause V8 memory leaks.

### Common Mistakes
Failing to initialize the storage container using \`asyncLocalStorage.run(context, callback)\`. Directly calling \`asyncLocalStorage.getStore()\` outside this context wrapper returns \`undefined\`.

### Code Example
\`\`\`javascript
const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const { v4: uuidv4 } = require('uuid');

const app = express();
const asyncLocalStorage = new AsyncLocalStorage();

// Custom log utility that automatically appends request ID if available
function logWithContext(message) {
  const store = asyncLocalStorage.getStore();
  const requestId = store ? store.requestId : 'SYSTEM';
  console.log(\`[\${requestId}] \${message}\`);
}

// Middleware to generate and bind request ID context
app.use((req, res, next) => {
  const context = { requestId: req.headers['x-request-id'] || uuidv4() };
  
  // Run all subsequent operations inside the request context
  asyncLocalStorage.run(context, () => {
    logWithContext(\`Incoming request: \${req.method} \${req.url}\`);
    next();
  });
});

app.get('/api/profile', async (req, res) => {
  logWithContext('Fetching user profile...');
  // Simulate database async delay
  await new Promise(resolve => setTimeout(resolve, 100));
  logWithContext('Profile fetched successfully.');
  res.json({ name: 'Rohit' });
});

app.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জাভা বা পিএইচপির মতো ল্যাঙ্গুয়েজে প্রতি রিকোয়েস্টের জন্য আলাদা ওএস থ্রেড থাকে, যা Thread-Local Storage (TLS) ব্যবহার করে সহজেই গ্লোবাল রিকোয়েস্ট আইডি শেয়ার করতে পারে। নোডজেএস সিঙ্গেল-থ্রেডেড হওয়ায় সাধারণ উপায়ে এটি করা সম্ভব ছিল না।

**AsyncLocalStorage (ALS)-এর সমাধান:**
নোডের \`async_hooks\` মডিউলের এই এপিআই-টি এসিনক্রোনাস কল চেইনের রেফারেন্স অনুসরণ করে একই রিকোয়েস্টের ভেতর তৈরি সমস্ত সাব-ফাংশনে গ্লোবাল ডাটা ট্র্যাক রাখতে পারে।

**কোর ব্যবহার ক্ষেত্র:**
প্রতিটি ইনকামিং রিকোয়েস্টে একটি কাস্টম ট্র্যাকিং আইডি (\`correlation-id\`) জেনারেট করে তা ALS-এ রাখা হয়। প্রজেক্টের গভীরতম কোনো হেল্পার ফাংশনে থেকেও আমরা ওই আইডিটি নিয়ে লগ প্রিন্ট করতে পারি, প্রতিটি ফাংশনে আইডিটি আলাদা প্যারামিটার হিসেবে না পাঠিয়েই।

### বাস্তব-ভিত্তিক উদাহরণ
মাইক্রোসার্ভিসের লগে ট্র্যাক আইডি যোগ করা। ALS মিডলওয়্যার কনফিগার থাকলে, ডাটাবেস এরর লগে বা এপিআই এরর লগে একই রিকোয়েস্ট আইডি প্রিন্ট হবে। ফলে একাধিক লগ থেকে একটি নির্দিষ্ট ইউজারের রিকোয়েস্ট পাথ ট্রেস করা অত্যন্ত সহজ হয়ে যায়।

### উত্তম অনুশীলন
ALS-এর স্টোরেজে খুব হালকা ডেটা রাখুন (যেমন: ইউজার আইডি, ট্র্যাকিং আইডি)। ডাটাবেস কানেকশন বা এক্সপ্রেসের রেসপন্স অবজেক্টের মতো ভারী কিছু এখানে স্টোর করবেন না, এতে মেমোরি লিক হওয়ার চান্স থাকে।

### সাধারণ ভুলসমূহ
\`asyncLocalStorage.run()\` দিয়ে কলব্যাক র‍্যাপ না করেই \`getStore()\` কল করা। রান মেথডের বাইরে এটি ব্যবহার করলে এটি সর্বদা \`undefined\` রিটার্ন করবে।

### Code Example
\`\`\`javascript
const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const { v4: uuidv4 } = require('uuid');

const app = express();
const asyncLocalStorage = new AsyncLocalStorage();

// গ্লোবাল লগ ইউটিলিটি যা অটোমেটিক রিকোয়েস্ট আইডি রিড করে
function logWithContext(message) {
  const store = asyncLocalStorage.getStore();
  const requestId = store ? store.requestId : 'সিস্টেম';
  console.log(\`[\${requestId}] \${message}\`);
}

// মিডলওয়্যার যা প্রতিটি রিকোয়েস্টে আইডি বাইন্ড করে দেয়
app.use((req, res, next) => {
  const context = { requestId: req.headers['x-request-id'] || uuidv4() };
  
  // কন্টেইনারে পরবর্তী সব কাজ এই রান ফাংশনের ব্লকে চালাতে হবে
  asyncLocalStorage.run(context, () => {
    logWithContext(\`রিকোয়েস্ট এসেছে: \${req.method} \${req.url}\`);
    next();
  });
});

app.get('/api/profile', async (req, res) => {
  logWithContext('ইউজার প্রোফাইল খোঁজা হচ্ছে...');
  // এসিনক্রোনাস ডাটাবেস ডিলে সিমুলেশন
  await new Promise(resolve => setTimeout(resolve, 100));
  logWithContext('সফলভাবে প্রোফাইল লোড হয়েছে।');
  res.json({ name: 'Rohit' });
});

app.listen(3000);
\`\`\``
  },
  {
    id: 'node-express-96',
    title: 'How do you manage database connection pooling in Node.js, and what happens when the pool is exhausted?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Database', 'Connection Pool', 'Performance', 'pg'],
    enAnswer: 'Connection pooling maintains a cache of active database connections that are reused across queries. When the pool is exhausted, new database queries are placed in an internal queue and wait until an active connection is released back to the pool, or they fail with a timeout error if the wait exceeds limits.',
    bnAnswer: 'কানেকশন পুলিং ডাটাবেসের বেশ কিছু একটিভ কানেকশন ক্যাশ করে রাখে যা বিভিন্ন কুয়েরিতে পুনরায় ব্যবহার করা যায়। পুল শেষ হয়ে গেলে নতুন কুয়েরিগুলো একটি লাইনে অপেক্ষা করে যতক্ষণ না কোনো একটি কানেকশন মুক্ত হয়, অথবা ওয়েটিং টাইম পার হলে টাইমআউট এরর দেখায়।',
    enExplanation: `### Explanation
Opening a new database connection over the network requires TCP handshakes, SSL negotiations, and database server authentication, which takes 50-200ms. Doing this for every single query ruins performance.

**How Connection Pooling Works:**
- A **Connection Pool** spawns a fixed number of connections (e.g., minimum 5, maximum 20) during application startup.
- When a query executes, it requests an idle client connection from the pool.
- The query runs instantly, and the connection is returned to the pool for reuse.

**When the Pool is Exhausted:**
If the maximum connections is set to 20, and 21 requests hit the database simultaneously:
1. The 21st query is added to an internal queue.
2. If one of the 20 active queries finishes within the timeout limit (e.g. \`connectionTimeoutMillis: 5000\`), it releases the client connection, which is immediately handed to the 21st query.
3. If no connection opens up within the timeout limit, the 21st query crashes with a \`timeout waiting for connection\` error.

### Real-World Example
During a flash sale, database queries surge. If your pool is too small, queries pile up in the queue, causing request response times to drop and eventually throwing database connection errors.

### Best Practice
Scale pool size in relation to your Node.js instance concurrency and your database server capacity. Always clean up connection handles by releasing them in a \`finally\` block, ensuring connections return to the pool even if the query crashes.

### Common Mistakes
Acquiring a connection from the pool (e.g. \`pool.connect()\`) inside a request, but forgetting to release it back. This creates a connection leak, quickly exhausting the pool and causing all subsequent requests to hang indefinitely.

### Code Example
\`\`\`javascript
const { Pool } = require('pg');

// Create connection pool settings
const pool = new Pool({
  connectionString: 'postgresql://db_user:password@localhost:5432/mydb',
  max: 10, // Maximum active connections allowed in pool
  idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
  connectionTimeoutMillis: 2000 // Error out if waiting more than 2 seconds
});

async function runQuery() {
  // Acquire connection client from pool
  const client = await pool.connect();
  
  try {
    const res = await client.query('SELECT NOW()');
    console.log('Query result:', res.rows[0]);
  } catch (err) {
    console.error('Query execution failed:', err);
  } finally {
    // Crucial: Release client back to the pool to prevent leaks
    client.release();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেটওয়ার্কের মাধ্যমে একটি ডাটাবেস কানেকশন তৈরি করতে টিসিপি হ্যান্ডশেক, এসএসএল এবং অথেনটিকেশন করতে প্রায় ৫০-২০০ মিলিসেকেন্ড সময় চলে যায়। প্রতিটি কুয়েরির জন্য নতুন করে কানেকশন নিলে প্রজেক্টের পারফরম্যান্স ধসে যাবে।

**কানেকশন পুলিং কাজের ধাপ:**
- **Connection Pool** প্রজেক্ট রান হওয়ার সময় একগুচ্ছ ডাটাবেস কানেকশন (যেমন: সর্বনিম্ন ৫টি ও সর্বোচ্চ ২০টি) রেডি করে রাখে।
- যখনই কোনো কুয়েরি করতে হবে, সে পুল থেকে একটি ফ্রি কানেকশন চেয়ে নেয় ও কুয়েরি চালায়।
- কুয়েরি শেষে সে কানেকশনটি সার্ভারে বন্ধ না করে পুলে ফিরিয়ে দেয় অন্য কুয়েরি ব্যবহারের জন্য।

**কানেকশন পুল শেষ বা এক্সহস্টেড (Exhausted) হলে:**
পুলের লিমিট ১০। একই সময়ে ১১টি কুয়েরি রানিং হলে:
১. ১১ নম্বর কুয়েরিটি লাইনে (Waiting Queue) দাঁড়ায়।
২. প্রথম ১০টি কুয়েরির যেকোনো একটি সম্পন্ন হয়ে কানেকশন রিলিজ করা মাত্র ১১ নম্বর কুয়েরিটি সেটি ব্যবহার করা শুরু করে।
৩. যদি নির্দিষ্ট সময় (Timeout Limit) পার হওয়ার পরও কোনো কানেকশন খালি না হয়, তবে কুয়েরিটি ফেইল করবে এবং এরর থ্রো করবে।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্ল্যাশ সেলের সময় ওয়েবসাইটে একযোগে হাজার হাজার কাস্টমার অর্ডার দেয়। পুল সাইজ পর্যাপ্ত না থাকলে সব অর্ডার ডাটাবেস কুয়েরির লাইনে আটকে থাকবে ও টাইমআউট হয়ে পেমেন্ট ফেইল হবে।

### উত্তম অনুশীলন
কানেকশন ডিল করার সময় সবসময় \`try/catch/finally\` ব্লক ব্যবহার করুন এবং \`finally\`-তে গিয়ে \`client.release()\` নিশ্চিত করুন, যাতে কোনো এরর হলেও কানেকশন লিক না হয়ে পুলে ফিরে আসে।

### সাধারণ ভুলসমূহ
\`pool.connect()\` কল করে কানেকশন নেওয়া কিন্তু কুয়েরি শেষে তা রিলিজ করতে ভুলে যাওয়া। একে কানেকশন লিক বলে যা অল্প সময়েই পুল খালি করে সার্ভার হ্যাং করে দেয়।

### Code Example
\`\`\`javascript
const { Pool } = require('pg');

// কানেকশন পুল অবজেক্ট তৈরি
const pool = new Pool({
  connectionString: 'postgresql://db_user:password@localhost:5432/mydb',
  max: 10, // পুলে সর্বোচ্চ ১০টি কানেকশন থাকবে
  idleTimeoutMillis: 30000, // অলস কানেকশন ৩০ সেকেন্ড পর বন্ধ হবে
  connectionTimeoutMillis: 2000 // ২ সেকেন্ডে কানেকশন না পেলে এরর থ্রো করবে
});

async function runQuery() {
  // পুল থেকে একটি সচল কানেকশন নেওয়া
  const client = await pool.connect();
  
  try {
    const res = await client.query('SELECT NOW()');
    console.log('কুয়েরির ফলাফল:', res.rows[0]);
  } catch (err) {
    console.error('কুয়েরি এরর:', err);
  } finally {
    // অবশ্যই রিলিজ করতে হবে যাতে পুলে ফেরত যায়
    client.release();
  }
}
\`\`\``
  },
  {
    id: 'node-express-97',
    title: 'Explain the differences between CommonJS (CJS) and ES Modules (ESM) in Node.js execution and loading.',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'CommonJS', 'ES Modules', 'Module System', 'Architecture'],
    enAnswer: 'CommonJS loads modules synchronously at runtime using require(), while ES Modules load asynchronously during a pre-parsing phase using static import. CJS provides dynamic require paths and mutable exports, whereas ESM imports are read-only, statically analyzed, and forbid dynamic require calls.',
    bnAnswer: 'CommonJS রানটাইমে require() দিয়ে সিঙ্ক্রোনাসলি মডিউল লোড করে, আর ES Modules প্রি-পার্সিং ধাপে স্ট্যাটিক ইম্পোর্টের মাধ্যমে এসিনক্রোনাসলি লোড করে। CJS-এ ডাইনামিক রিকোয়ার পাথ সম্ভব হলেও ESM-এর ইম্পোর্টগুলো রিড-ওনলি এবং স্ট্যাটিকালি অ্যানালাইজড হয়।',
    enExplanation: `### Explanation
Node.js historically used **CommonJS (CJS)**. Modern Node.js versions natively support the official JavaScript standard, **ES Modules (ESM)**.

**Key Structural Differences:**
1. **Resolution Phase**:
   - **CommonJS**: Evaluated line-by-line. The code runs, hits a \`require()\` statement, synchronously blocks execution to read the file, and continues.
   - **ES Modules**: Evaluated in two stages. First, it parses imports statically (creating the module map) without running any code. Then, it instantiates and executes.
2. **Context Scope Variables**:
   - ESM does not define variables like \`__dirname\`, \`__filename\`, \`require\`, or \`module\`. Instead, you use \`import.meta.url\` to derive paths.
3. **Dynamic Loading**:
   - CJS allows conditional requires: \`if (condition) require('module')\`.
   - ESM requires top-level imports by default, but allows dynamic imports using \`import('module')\` which returns a promise.

### Real-World Example
Migrating an existing library to ESM forces you to resolve path utilities since \`__dirname\` doesn't exist:
\`\`\`javascript
// ESM equivalent of __dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
\`\`\`

### Best Practice
For new projects, design using ES Modules (ESM) by configuring \`"type": "module"\` inside \`package.json\`. ESM is future-proof, optimizes bundle sizes via tree-shaking, and aligns Node.js syntax with client-side browser development.

### Common Mistakes
Trying to call CommonJS \`require()\` statements inside an ES module file. This raises a \`ReferenceError: require is not defined\` crash.

### Code Example
\`\`\`javascript
// --- CommonJS (CJS) - math.js ---
exports.add = (a, b) => a + b;
// Loaded via: const { add } = require('./math');

// --- ES Modules (ESM) - math.mjs ---
export const add = (a, b) => a + b;
// Loaded via: import { add } from './math.mjs';

// ESM Dynamic Import Example (Can be done inside functions)
async function loadUtility() {
  const { add } = await import('./math.mjs');
  console.log('Sum:', add(2, 3));
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ঐতিহাসিকভাবে নোডজেএস **CommonJS (CJS)** মডিউল ব্যবহার করতো। বর্তমানে নোডজেএস নেটিভ জাভাস্ক্রিপ্ট স্ট্যান্ডার্ড **ES Modules (ESM)** সমর্থন করে।

**মূল কাঠামোগত পার্থক্যসমূহ:**
১. **লোড করার প্রক্রিয়া**:
   - **CommonJS**: রানটাইমে কোড লাইন-বাই-লাইন চলার সময় \`require()\` পেলেই সিঙ্ক্রোনাসলি কোড লোড করে।
   - **ES Modules**: কোড রান করার আগেই পার্সিং ধাপে সব ফাইল রিড করে একটি লিংক ম্যাপ তৈরি করে।
২. **বিল্ট-ইন ভ্যারিয়েবল**:
   - ESM-এ নোডের ক্লাসিক ভ্যারিয়েবল যেমন: \`__dirname\`, \`__filename\`, \`require\` বা \`module\` থাকে না। এগুলো পেতে \`import.meta.url\` ব্যবহার করতে হয়।
৩. **ডাইনামিক লোড**:
   - CommonJS-এ কন্ডিশনের ভেতর require করা যায়: \`if(test) require('x')\`।
   - ESM-এ শুধুমাত্র টপ-লেভেলে স্ট্যাটিক ইম্পোর্ট করতে হয়, তবে ডাইনামিক কাজের জন্য \`import('x')\` প্রোমিজ ফাংশন ব্যবহার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
টাইপস্ক্রিপ্ট বা মডার্ন লাইব্রেরি তৈরির সময় ESM ব্যবহার করলে আপনার প্রজেক্টের সাইজ অপ্টিমাইজ হবে (Tree Shaking বা অপ্রয়োজনীয় কোড বাদ দেওয়া)।

### উত্তম অনুশীলন
নতুন প্রজেক্টগুলোতে ES Modules (ESM) ব্যবহার করুন। এর জন্য \`package.json\` ফাইলে \`"type": "module"\` ডিফাইন করে দিলেই পুরো প্রজেক্ট ESM মোডে কাজ করবে।

### সাধারণ ভুলসমূহ
ESM প্রজেক্ট ফাইলের ভেতর সরাসরি \`require()\` লেখা। এটি করলে রানটাইমে \`ReferenceError: require is not defined\` এরর দিয়ে অ্যাপ ক্র্যাশ করবে।

### Code Example
\`\`\`javascript
// --- CommonJS (CJS) - math.js ---
exports.add = (a, b) => a + b;
// কল করার নিয়ম: const { add } = require('./math');

// --- ES Modules (ESM) - math.mjs ---
export const add = (a, b) => a + b;
// কল করার নিয়ম: import { add } from './math.mjs';

// ESM-এ ডাইনামিক ইম্পোর্টের উদাহরণ
async function loadUtility() {
  const { add } = await import('./math.mjs');
  console.log('যোগফল:', add(2, 3));
}
\`\`\``
  },
  {
    id: 'node-express-98',
    title: 'How do you implement a secure OAuth2 or JWT-based authentication system with token blacklisting/rotation?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Authentication', 'JWT', 'Security', 'Token Rotation'],
    enAnswer: 'Secure token auth uses short-lived Access Tokens (e.g. 15m) and long-lived Refresh Tokens (e.g. 7d) stored in secure, httpOnly cookies. On refresh, implement Refresh Token Rotation by invalidating the old token and generating a new pair; if a reused refresh token is detected, invalidate the entire family to block theft.',
    bnAnswer: 'নিরাপদ অথেনটিকেশনের জন্য কম মেয়াদের এক্সেস টোকেন (যেমন ১৫ মিনিট) এবং দীর্ঘ মেয়াদের রিফ্রেশ টোকেন (যেমন ৭ দিন) httpOnly কুকিতে রাখতে হয়। রিফ্রেশ করার সময় ওল্ড টোকেন বাতিল করে নতুন পেয়ার তৈরি করতে হবে এবং পুরাতন টোকেন পুনরায় সাবমিট হলে পুরো টোকেন ফ্যামিলি বাতিল করতে হবে।',
    enExplanation: `### Explanation
JSON Web Tokens (JWTs) are stateless, meaning once signed, they cannot be easily invalidated before expiration. This exposes a security risk if an access token is stolen.

**Secure JWT Token Strategy:**
1. **Dual Token System**:
   - **Access Token**: Short lifetime (e.g., 15 minutes). Sent in Authorization header to request resources.
   - **Refresh Token**: Long lifetime (e.g., 7 days). Kept in a secure, \`httpOnly\`, \`sameSite\` cookie. Used solely to request new access tokens.
2. **Refresh Token Rotation (RTR)**:
   - When the client uses a Refresh Token to get a new Access Token, the server invalidates the used Refresh Token, generates a new one, and sends the new pair back.
3. **Replay Detection**:
   - If an attacker steals a Refresh Token and tries to reuse it after the user has already rotated it, the server detects the double-use. The server immediately invalidates the entire token family tree (forcing all sessions for that user to log out).

### Real-World Example
In a financial dashboard application, token rotation prevents session hijacking. If a hacker intercepts the user's cookies, they can only access the server until the next token refresh cycle, which instantly flags double usage and logs out both sessions.

### Best Practice
Save active refresh token hashes (or family chains) in Redis with a TTL matching token expiration. Redis allows rapid verification and instant blacklisting during signout or token-rotation failures.

### Common Mistakes
Storing JWT tokens in browser LocalStorage. LocalStorage is readable by any client-side JavaScript, making the token vulnerable to theft via Cross-Site Scripting (XSS) injections.

### Code Example
\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const ACCESS_SECRET = 'access-key-123';
const REFRESH_SECRET = 'refresh-key-456';

// Mock DB/Redis for active refresh token families
let activeRefreshTokens = {}; // userId -> array of valid refresh tokens

app.post('/api/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, REFRESH_SECRET);
    const userTokens = activeRefreshTokens[payload.userId] || [];

    // Detect Replay / Theft
    if (!userTokens.includes(token)) {
      // Token has already been used or is invalid! Compromised!
      activeRefreshTokens[payload.userId] = []; // Clear all sessions
      return res.status(403).json({ message: 'Token theft detected! Logging out all sessions.' });
    }

    // Remove old refresh token from list
    activeRefreshTokens[payload.userId] = userTokens.filter(t => t !== token);

    // Generate new pair (Rotation)
    const newAccessToken = jwt.sign({ userId: payload.userId }, ACCESS_SECRET, { expiresIn: '15m' });
    const newRefreshToken = jwt.sign({ userId: payload.userId }, REFRESH_SECRET, { expiresIn: '7d' });

    // Store new token in list
    activeRefreshTokens[payload.userId].push(newRefreshToken);

    // Send new refresh token in secure cookie
    res.cookie('refreshToken', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'lax' });
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.sendStatus(403);
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জাভাস্ক্রিপ্ট ওয়েব টোকেন (JWT) স্টেটলেস হওয়ায় একবার ইস্যু করা টোকেন সার্ভার সরাসরি রিজেক্ট বা ডিলিট করতে পারে না এক্সপায়ারি ডেটের আগে। টোকেনটি চুরি হলে নিরাপত্তা বিঘ্নিত হতে পারে।

**নিরাপদ JWT টোকেন পলিসি:**
১. **ডাবল টোকেন পদ্ধতি**:
   - **Access Token**: স্বল্পস্থায়ী (যেমন: ১৫ মিনিট)। এটি এপিআই ডাটা রিকোয়েস্ট করতে ব্যবহৃত হয়।
   - **Refresh Token**: দীর্ঘস্থায়ী (যেমন: ৭ দিন)। এটি সুরক্ষিত ব্রাউজার কুকিতে (\`httpOnly\`) রাখা হয় শুধু নতুন এক্সেস টোকেন রিকোয়েস্টের জন্য।
২. **রিফ্রেশ টোকেন রোটেশন (RTR)**:
   - ইউজার যখনই রিফ্রেশ টোকেন দিয়ে নতুন এক্সেস টোকেন চাইবে, সার্ভার পুরোনো রিফ্রেশ টোকেনটি বাতিল করে নতুন আরেকটি রিফ্রেশ ও এক্সেস টোকেন জেনারেট করে ক্লায়েন্টকে পাঠাবে।
৩. **রিপ্লে ডিটেকশন (Replay Detection)**:
   - হ্যাকার যদি কোনোভাবে চুরি করা রিফ্রেশ টোকেন সাবমিট করে যা ইউজার ইতিমধ্যে নতুন সাইকেলে বদলে নিয়েছে, তবে ডাবল ইউজ ধরা পড়ে। সার্ভার সাথে সাথে ওই ইউজারের সেশন বাতিল করে ফোর্স লগআউট করিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফিন্যান্সিয়াল বা ড্যাশবোর্ড অ্যাপে সেশন প্রটেকশন দিতে টোকেন রোটেশন ব্যবহার করা হয়। হ্যাকার কুকি হ্যাক করলেও রোটেশন মেকানিজমের কারণে ব্রাউজার অটো আপডেট নেওয়ার সময় হ্যাকার ও ইউজার উভয়েই সাথে সাথে লগআউট হয়ে যাবে।

### উত্তম অনুশীলন
এক্টিভ রিফ্রেশ টোকেনগুলোর রেকর্ড বা ফ্যামিলি লিস্ট ক্যাশ ডাটাবেস রেডিস-এ রাখুন এবং টোকেন লাইফটাইম অনুযায়ী \`TTL\` সেট করুন।

### সাধারণ ভুলসমূহ
টোকেনগুলো ব্রাউজারের LocalStorage-এ স্টোর করে রাখা। লোকালস্টোরেজ যেকোনো জাভাস্ক্রিপ্ট কোড থেকে রিড করা যায়, ফলে সাইটে XSS এটাক হলে হ্যাকার সহজেই সমস্ত টোকেন চুরি করতে পারবে।

### Code Example
\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const ACCESS_SECRET = 'access-key-123';
const REFRESH_SECRET = 'refresh-key-456';

// মেমোরি ডেটাবেস (সচল রিফ্রেশ টোকেন ট্র্যাক রাখতে)
let activeRefreshTokens = {}; // userId -> array of valid refresh tokens

app.post('/api/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, REFRESH_SECRET);
    const userTokens = activeRefreshTokens[payload.userId] || [];

    // টোকেন পুনর্নবীকরণ চুরি সনাক্ত করা
    if (!userTokens.includes(token)) {
      // এই টোকেনটি আগেই ব্যবহৃত হয়েছে! সেশন হ্যাক হয়েছে!
      activeRefreshTokens[payload.userId] = []; // ইউজারের সব সেশন ডিলিট
      return res.status(403).json({ message: 'টোকেন চুরি সনাক্ত! সকল সেশন বন্ধ করা হয়েছে।' });
    }

    // পুরোনো টোকেনটি লিস্ট থেকে বাদ দেওয়া
    activeRefreshTokens[payload.userId] = userTokens.filter(t => t !== token);

    // নতুন টোকেন পেয়ার তৈরি (Rotation)
    const newAccessToken = jwt.sign({ userId: payload.userId }, ACCESS_SECRET, { expiresIn: '15m' });
    const newRefreshToken = jwt.sign({ userId: payload.userId }, REFRESH_SECRET, { expiresIn: '7d' });

    activeRefreshTokens[payload.userId].push(newRefreshToken);

    // নতুন রিফ্রেশ টোকেন সিকিউর কুকিতে সেট করা
    res.cookie('refreshToken', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'lax' });
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.sendStatus(403);
  }
});
\`\`\``
  },
  {
    id: 'node-express-99',
    title: 'What are custom Node.js C++ Addons or N-API, and when should you use them?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'C++', 'N-API', 'Performance', 'Addons'],
    enAnswer: 'C++ Addons are dynamically-linked shared objects written in C++ that can be loaded into Node.js using require(). Node.js provides N-API (Node-API) as an abstraction layer to build these addons, protecting them from V8 engine ABI version changes and allowing you to offload CPU-bound calculations directly to native code.',
    bnAnswer: 'C++ অ্যাডঅন হলো C++ এ লেখা ডাইনামিকালি-লিঙ্কড শেয়ার্ড অবজেক্ট যা require() দিয়ে নোডে লোড করা যায়। N-API (Node-API) হলো নোডজেএস-এর একটি অ্যাবস্ট্রাকশন লেয়ার যা V8 ইঞ্জিনের ভার্সন পরিবর্তনের প্রভাব থেকে অ্যাডঅনগুলোকে রক্ষা করে ও নেটিভ কোডে ভারী কাজ রান করতে দেয়।',
    enExplanation: `### Explanation
When JavaScript's performance limits are reached (e.g. heavy crypto algorithms, image decoding, parsing massive files), writing C++ bindings provides native machine-code speeds.

**N-API (Node-API):**
In early versions of Node.js, C++ addons were compiled directly against V8 engine bindings. Every time the V8 engine upgraded, the C++ code broke. N-API was introduced to solve this:
- It acts as an Application Binary Interface (ABI) stable wrapper.
- You compile the C++ code once, and it continues to run across different Node.js runtime versions without recompiling.

**When to Use C++ Addons:**
- Performing graphics rendering or heavy audio/video transcoding.
- Integrating existing C/C++ libraries (e.g. OpenCV, TensorFlow, custom system drivers) with your Node.js backend.
- Highly optimized algorithms that require raw pointers and manual memory management.

### Real-World Example
In a high-traffic image processing server, writing a custom N-API addon that interfaces with native C++ image manipulation libraries (like libjpeg-turbo) delivers up to 5-10x faster execution than pure JS equivalents.

### Best Practice
Avoid C++ addons unless strictly necessary. JavaScript engines (V8) have JIT compilers that run pure JS code extremely fast. Debugging C++ segfault crashes inside a Node.js process is highly complex and bypasses Node's core error boundaries.

### Common Mistakes
Writing C++ addons for basic web scraping, file copies, or database queries. Node.js non-blocking I/O is optimized at the OS level; adding C++ wrapper calls only adds marshalling overhead.

### Code Example
\`\`\`cpp
// hello.cpp - Native C++ implementation using Node-API (N-API)
#include <node_api.h>

napi_value Method(napi_env env, napi_callback_info info) {
  napi_value world;
  napi_create_string_utf8(env, "Hello from C++ native code!", NAPI_AUTO_LENGTH, &world);
  return world;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_value fn;
  napi_create_function(env, NULL, 0, Method, NULL, &fn);
  napi_set_named_property(env, exports, "hello", fn);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
\`\`\`
\`\`\`javascript
// index.js - Loading compiled C++ addon in Node.js
// After compiling using node-gyp
const addon = require('./build/Release/addon');
console.log(addon.hello()); // 'Hello from C++ native code!'
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জাভাস্ক্রিপ্টের ক্যালকুলেশন স্পিডের সীমাবদ্ধতা অতিক্রম করে নেটিভ ওএস স্পিড পেতে C++ অ্যাডঅন (Addons) এবং N-API ব্যবহার করা হয়।

**N-API (Node-API):**
আগে নোডজেএস-এর C++ অ্যাডঅনগুলো সরাসরি ভি৮ ইঞ্জিনের কোড স্ট্রাকচার ব্যবহার করতো। ফলে নোডজেএস নতুন ভার্সনে আপডেট নিলেই C++ অ্যাডঅনগুলো ক্র্যাশ করতো। N-API এই সমস্যার সমাধান করে:
- এটি একটি স্ট্যাবল বাইনারি ইন্টারফেস (ABI) যা নোডের ইন্টারনাল চেঞ্জ থেকে অ্যাডঅনকে সুরক্ষিত রাখে।
- আপনি একবার C++ কোড কমপাইল করলে তা পরবর্তী নোড ভার্সনগুলোতেও সমানভাবে কাজ করে।

**কখন ব্যবহার করবেন:**
- ভারী অডিও/ভিডিও বা গ্রাফিক্স এডিটিং ইঞ্জিন নোড ব্যাকএন্ডে ব্যবহার করতে চাইলে।
- পুরানো কোনো C/C++ লাইব্রেরি (যেমন: OpenCV) সরাসরি প্রজেক্টে যুক্ত করতে চাইলে।
- ডাটা ক্রিপ্টোগ্রাফি বা কম্প্রেশন প্রসেস সর্বোচ্চ স্পিডে সম্পন্ন করতে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নোডজেএস ইমেজ প্রসেসিং এপিআই-তে নেটিভ C++ লাইব্রেরি যুক্ত করতে N-API অ্যাডঅন ব্যবহার করলে সাধারণ জাভাস্ক্রিপ্ট কোডের চেয়ে তা ৫ থেকে ১০ গুণ বেশি গতিতে ইমেজ রিসাইজ বা ফিল্টার করতে পারবে।

### উত্তম অনুশীলন
অত্যন্ত জটিল ক্যালকুলেশন রিকোয়ারমেন্ট না থাকলে C++ অ্যাডঅন লেখা পরিহার করুন। জাভাস্ক্রিপ্টের বর্তমান JIT কম্পাইলার নিজেই অনেক ফাস্ট কোড রান করতে পারে। C++ এর সিগমেন্টেশন ফল্ট বা মেমোরি লিক ডিবাগ করা অনেক কঠিন।

### সাধারণ ভুলসমূহ
আই/ও বা ফাইল স্থানান্তরের মতো সাধারণ কাজের জন্য C++ অ্যাডঅন তৈরি করা। এ ধরনের কাজে ডাটা কপি করার বাড়তি সময় নষ্টের কারণে পারফরম্যান্স উল্টো কমে যেতে পারে।

### Code Example
\`\`\`cpp
// hello.cpp - N-API ব্যবহার করে C++ কোড লেখা
#include <node_api.h>

napi_value Method(napi_env env, napi_callback_info info) {
  napi_value world;
  napi_create_string_utf8(env, "হ্যালো, আমি C++ নেটিভ কোড থেকে বলছি!", NAPI_AUTO_LENGTH, &world);
  return world;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_value fn;
  napi_create_function(env, NULL, 0, Method, NULL, &fn);
  napi_set_named_property(env, exports, "hello", fn);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
\`\`\`
\`\`\`javascript
// index.js - নোডজেএস কোডে অ্যাডঅন লোড ও ব্যবহার করা
// node-gyp দিয়ে কমপাইল করার পর:
const addon = require('./build/Release/addon');
console.log(addon.hello()); // 'হ্যালো, আমি C++ নেটিভ কোড থেকে বলছি!'
\`\`\``
  },
  {
    id: 'node-express-100',
    title: 'How do you implement a resilient circuit breaker pattern in Node.js microservices (e.g., using opossum)?',
    difficulty: 'advanced',
    category: 'node-express',
    tags: ['Node.js', 'Circuit Breaker', 'Microservices', 'Resilience', 'opossum'],
    enAnswer: 'The Circuit Breaker pattern wraps external API calls in a monitor. When the failure rate of the downstream service exceeds a threshold, the circuit trips (opens), instantly failing subsequent requests locally with a fallback response rather than letting threads wait for timeouts, thus preventing cascade failures.',
    bnAnswer: 'সার্কিট ব্রেকার প্যাটার্ন এক্সটার্নাল এপিআই কলকে একটি মনিটর দিয়ে মুড়ে দেয়। ডাউনস্ট্রিম সার্ভারের ফেইলুর রেট নির্দিষ্ট সীমা পার হলে সার্কিটটি ওপেন (ট্রিপ) হয়ে যায় এবং রিকোয়েস্ট পেন্ডিং না রেখে সাথে সাথে কাস্টম ফলব্যাক মেসেজ রিটার্ন করে চেইন ক্র্যাশ প্রতিরোধ করে।',
    enExplanation: `### Explanation
In a microservices architecture, services repeatedly call other external services. If a downstream service (e.g. Payment Gateway) becomes extremely slow or down, incoming requests will hang, consuming socket connections and threads on your upstream server. If unchecked, this causes a cascading failure, bringing down the entire cluster.

**The Circuit Breaker States:**
1. **Closed (Normal)**: Requests pass through to the downstream service. The breaker monitors success/failure rates.
2. **Open (Tripped)**: Downstream failures cross the threshold (e.g., 50% failures). The breaker prevents calls to the downstream service. It immediately returns a local error or a cached **fallback response** without consuming network resources.
3. **Half-Open**: After a cooldown period (e.g., 10 seconds), the breaker allows a few trial requests. If they succeed, it closes the circuit. If they fail, it trips back to the Open state.

### Real-World Example
If your catalog API calls an external Recommendation service. If the Recommendation service experiences a network outage, your catalog app will immediately trip the circuit breaker and serve generic default products instead of freezing the site or throwing HTTP 500 crashes.

### Best Practice
Set realistic request timeouts for all external HTTP requests. Use libraries like \`opossum\` to implement circuit breakers, and log status transitions (Closed -> Open) to alert DevOps teams that a dependency is down.

### Common Mistakes
Forgetting to configure a meaningful fallback response. A circuit breaker is most effective when it can return stale cache data or default values instead of displaying a raw error page to the customer.

### Code Example
\`\`\`javascript
const CircuitBreaker = require('opossum');

// Mock function representing a call to an external payment service
async function callExternalPaymentAPI(paymentData) {
  // Simulate network request
  if (Math.random() > 0.8) {
    return 'Payment Successful';
  }
  throw new Error('Payment Gateway Timeout');
}

// Configuration options for the Circuit Breaker
const options = {
  timeout: 3000, // If the API takes more than 3s, count it as a failure
  errorThresholdPercentage: 50, // Trip if 50% of requests fail
  resetTimeout: 10000 // Attempt to reset (Half-Open) after 10 seconds
};

const breaker = new CircuitBreaker(callExternalPaymentAPI, options);

// Define fallback response when the circuit is open or requests fail
breaker.fallback(() => {
  return 'Alternative Payment Channel (Cash on Delivery) activated.';
});

// Event listeners to log status details
breaker.on('open', () => console.warn('Alert! Circuit Breaker is OPEN. Downstream service is down.'));
breaker.on('close', () => console.log('Success! Circuit Breaker is CLOSED. Downstream service is healthy.'));

async function processPayment(data) {
  try {
    const result = await breaker.fire(data);
    console.log('Result:', result);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Simulate calling the payment controller repeatedly
setInterval(() => processPayment({ amount: 100 }), 1000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাইক্রোসার্ভিস আর্কিটেকচারে যখন একটি সার্ভিস আরেকটি এপিআই কল করে, তখন কোনো ডাউনস্ট্রিম সার্ভিস (যেমন পেমেন্ট গেইটওয়ে) ডাউন বা স্লো হয়ে গেলে কলিং সার্ভারের সকেট কানেকশন আটকে থাকে। এর ফলে রিকোয়েস্টের জট লেগে পুরো ক্লাস্টার ক্র্যাশ করতে পারে। একে ক্যাস্কেডিং ফেইলুর (Cascading Failure) বলে।

**সার্কিট ব্রেকারের ৩টি স্টেট:**
১. **Closed (সাধারণ)**: সার্ভিস স্বাভাবিকভাবে চলছে। সার্কিটটি কানেকশন মনিটর করছে।
২. **Open (সক্রিয়)**: যখন ডাউনস্ট্রিম সার্ভারে এররের হার লিমিট পার হয় (যেমন: ৫০% ফেইল), তখন সার্কিট কানেকশন বিচ্ছিন্ন করে দেয়। নতুন কোনো রিকোয়েস্ট ওপাশে না পাঠিয়ে সার্ভার সাথে সাথেই কাস্টম ফলব্যাক মেসেজ রিটার্ন করে।
৩. **Half-Open**: নির্দিষ্ট কুলডাউন পিরিয়ড (যেমন ১০ সেকেন্ড) পর সার্কিট পরীক্ষামূলকভাবে কয়েকটি রিকোয়েস্ট ওপাশে পাঠায়। সব ঠিক থাকলে সার্কিটটি আবার Closed করে দেয়, নাহলে পুনরায় Open স্টেটে ফিরে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটের প্রোডাক্ট রিকমেন্ডেশন ইঞ্জিনটি কোনো কারণে ডাউন। সার্কিট ব্রেকার ট্রিগার হয়ে ওপাশের সার্ভারে রিকোয়েস্ট পাঠানো অফ রাখবে এবং ইউজারদের এরর পেজ না দেখিয়ে ডিফল্ট কিছু প্রোডাক্ট শো করাবে।

### উত্তম অনুশীলন
যেকোনো এপিআই কলের জন্য উপযুক্ত রিকোয়েস্ট টাইমআউট ব্যবহার করুন। নোডজেএস-এ সার্কিট ব্রেকারের জন্য \`opossum\` লাইব্রেরি ব্যবহার করা একটি স্ট্যান্ডার্ড প্র্যাকটিস।

### সাধারণ ভুলসমূহ
উপযুক্ত ফলব্যাক (Fallback) রেসপন্স কনফিগার না করা। সার্কিট ওপেন হলে ইউজার যাতে প্লেইন টেক্সট এরর না দেখে কোনো ক্যাশ ডাটা বা সাবস্টিটিউট সার্ভিস দেখতে পায়, তা নিশ্চিত করা উচিত।

### Code Example
\`\`\`javascript
const CircuitBreaker = require('opossum');

// বাহ্যিক পেমেন্ট সার্ভিসে কল করার মক ফাংশন
async function callExternalPaymentAPI(paymentData) {
  if (Math.random() > 0.8) {
    return 'পেমেন্ট সফলভাবে সম্পন্ন হয়েছে';
  }
  throw new Error('পেমেন্ট সার্ভার টাইমআউট');
}

// সার্কিট ব্রেকার সেটিংস
const options = {
  timeout: 3000, // ৩ সেকেন্ডের বেশি লাগলে ফেইল হিসেবে গণ্য হবে
  errorThresholdPercentage: 50, // ৫০% রিকোয়েস্ট ফেইল হলে সার্কিট ওপেন হবে
  resetTimeout: 10000 // ১০ সেকেন্ড পর ট্রায়াল শুরু হবে (Half-Open)
};

const breaker = new CircuitBreaker(callExternalPaymentAPI, options);

// সার্কিট ওপেন থাকলে বা সার্ভিস ফেইল করলে অল্টারনেটিভ রেসপন্স
breaker.fallback(() => {
  return 'বিকল্প পেমেন্ট মাধ্যম (ক্যাশ অন ডেলিভারি) সক্রিয় করা হয়েছে।';
});

// ইভেন্ট লিসেনার
breaker.on('open', () => console.warn('সতর্কতা! সার্কিট ওপেন হয়েছে। ডাউনস্ট্রিম সার্ভিস ডাউন।'));
breaker.on('close', () => console.log('সার্কিট ক্লোজ হয়েছে। ডাউনস্ট্রিম সার্ভিস সচল।'));

async function processPayment(data) {
  try {
    const result = await breaker.fire(data);
    console.log('ফলাফল:', result);
  } catch (err) {
    console.error('এরর:', err.message);
  }
}

// প্রতি ১ সেকেন্ড পর পর ফাংশনটি রান করে চেক করা হচ্ছে
setInterval(() => processPayment({ amount: 100 }), 1000);
\`\`\``
  }
];
