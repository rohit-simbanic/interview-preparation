import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'other-topics-31',
    title: 'What does HTTP method idempotency mean, and which standard HTTP methods are idempotent?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['REST API', 'HTTP Specifications', 'Idempotency', 'Backend Design'],
    enAnswer: 'Idempotency means that executing the same request multiple times leaves the server in the exact same state as running it once. GET, PUT, DELETE, HEAD, and OPTIONS are idempotent; POST is not.',
    bnAnswer: 'আইডেমপোটেন্সি (Idempotency) মানে হলো একই রিকোয়েস্ট একাধিকবার রান করলেও সার্ভারের স্টেট প্রথমবার রান করার ফলের মতোই অবিকল থাকবে। GET, PUT, DELETE, HEAD এবং OPTIONS হলো আইডেমপোটেন্ট; কিন্তু POST আইডেমপোটেন্ট নয়।',
    enExplanation: `### Explanation
Idempotency is a critical constraint of the HTTP protocol that prevents server side effects during duplicate network submissions:
1. **Idempotent Methods**:
   - **GET**: Reading data multiple times yields the same results without modifying the database.
   - **PUT**: Replacing a user's details with \`{ name: 'Rohit' }\` multiple times leaves the user named 'Rohit'.
   - **DELETE**: Deleting item 100 once removes it. Deleting it again returns 404/200, but the resource remains deleted.
2. **Non-Idempotent Methods**:
   - **POST**: Submitting a credit card payment of $50 multiple times creates multiple separate charges on the user's account.

### Real-World Example
In an online bank portal, if a user clicks the "Pay Now" button, and due to slow internet double-clicks it:
- If the endpoint is \`POST /api/charges\`, the user is billed twice (Non-idempotent).
- If the portal uses an idempotency key header or redirects updates to \`PUT /api/charges/charge_abc\`, the second click yields the same charge without charging them again.

### Best Practice
Always design update endpoints using \`PUT\` instead of \`POST\` if you are sending the complete resource body. For critical transaction operations using \`POST\`, require a unique client-generated Idempotency-Key header to reject duplicate transactions on the server.

### Common Mistakes
Making \`POST\` requests modify state multiple times without transaction checking, leading to duplicate database records when clients retry failed connections.

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();

const processedKeys = new Set<string>();

// POST with Idempotency Check
app.post('/api/payments', (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'] as string;

  if (!idempotencyKey) {
    return res.status(400).json({ error: 'Idempotency-Key header is missing' });
  }

  if (processedKeys.has(idempotencyKey)) {
    // Return cached response for duplicate request
    return res.status(409).json({ error: 'Duplicate transaction blocked' });
  }

  // Process payment...
  processedKeys.add(idempotencyKey);
  res.status(201).json({ status: 'success', chargeId: 'ch_987' });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আইডেমপোটেন্সি হলো HTTP প্রটোকলের একটি গুরুত্বপূর্ণ কনসেপ্ট যা ডুপ্লিকেট নেটওয়ার্ক রিকোয়েস্টের ক্ষতিকর প্রভাব প্রতিরোধ করে:
১. **আইডেমপোটেন্ট মেথড**:
   - **GET**: ডাটা রিড করা। বারবার রিড করলেও ডাটাবেজে কোনো পরিবর্তন হয় না।
   - \`PUT\`: অবজেক্ট প্রতিস্থাপন। বারবার নাম এডিট করে \`{ name: 'Rohit' }\` সেট করলেও নাম 'Rohit'-ই থাকবে।
   - \`DELETE\`: ডাটা মোছা। একবার মোছার পর পরেরবার এরর দিলেও ডাটাবেজে ফাইল মোছা অবস্থাতেই থাকবে।
২. **নন-আইডেমপোটেন্ট মেথড**:
   - **POST**: পেমেন্ট সাবমিট করা। ৩ বার ক্লিক করলে ৩টি আলাদা পেমেন্ট চার্জ জেনারেট হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি অনলাইন শপ পেজে ইউজার পেমেন্ট বাটনে ক্লিক করার সময় ডাবল ক্লিক করে ফেললেন:
- সার্ভিসটি \`POST /api/charges\` ব্যবহার করলে ইউজারের কার্ড থেকে ২ বার টাকা কেটে যাবে।
- আর যদি সার্ভিসটি একটি কাস্টম Idempotency Key দিয়ে \`PUT /api/charges/charge_abc\` হিট করে, তবে দ্বিতীয় ক্লিকে ব্যাংক ডাটা ডুপ্লিকেট হিসেবে চিহ্নিত করে পেমেন্ট চার্জ আটকাবে।

### উত্তম অনুশীলন
পুরো ফাইল প্রতিস্থাপন করতে \`PUT\` মেথড ব্যবহার করুন। কোনো ক্রিটিক্যাল ট্রানজ্যাকশন এপিআই-তে ক্লায়েন্ট-সাইড থেকে জেনারেট করা ইউনিক \`Idempotency-Key\` হেডার ট্র্যাক করুন।

### সাধারণ ভুলসমূহ
আইডেমপোটেন্সি চেক ছাড়া পেমেন্ট রাউটে \`POST\` মেথড সচল রাখা, যা নেটওয়ার্ক এররের সময় ক্লায়েন্ট অটো-রিট্রাই করলে ডুপ্লিকেট ডাটাবেজ এন্ট্রি তৈরি করে।

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();

const processedKeys = new Set<string>();

// Idempotency চেক সহ পেমেন্ট প্রসেস
app.post('/api/payments', (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'] as string;

  if (!idempotencyKey) {
    return res.status(400).json({ error: 'Idempotency-Key header is missing' });
  }

  if (processedKeys.has(idempotencyKey)) {
    // ডুপ্লিকেট রিকোয়েস্ট হলে ব্লক করো
    return res.status(409).json({ error: 'Duplicate transaction blocked' });
  }

  // পেমেন্ট প্রসেস সম্পন্ন করা হলো...
  processedKeys.add(idempotencyKey);
  res.status(201).json({ status: 'success', chargeId: 'ch_987' });
});
\`\`\``
  },
  {
    id: 'other-topics-32',
    title: 'What is the purpose of Namespaces in Socket.IO, and how do they differ from Rooms?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Socket.IO', 'Namespaces', 'Rooms', 'Real-time', 'Multiplexing'],
    enAnswer: 'Namespaces allow you to split a single socket connection into multiple communication channels (multiplexing), each running its own event listeners. Rooms are subdivisions inside a namespace used to group specific sockets together.',
    bnAnswer: 'নেমস্পেস (Namespaces) একটিমাত্র সকেট কানেকশনকে একাধিক স্বাধীন যোগাযোগ চ্যানেলে ভাগ করার সুবিধা দেয় (মাল্টিপ্লেক্সিং)। আর রুম হলো কোনো নির্দিষ্ট নেমস্পেসের ভেতরে সকেটগুলোকে আলাদাভাবে গ্রুপিং করার ইউটিলিটি।',
    enExplanation: `### Explanation
Socket.IO namespaces partition application logic over the same shared physical TCP connection:
1. **Namespaces (\`io.of('/path')\`)**:
   - Establish dedicated communication channels.
   - Sockets must connect explicitly to a namespace: \`const socket = io('/admin')\`.
   - Each namespace has its own connection handlers, authentication checkers, and event channels.
2. **Rooms**:
   - Reside *inside* a namespace.
   - Sockets join/leave dynamically: \`socket.join('chat-room-1')\`.
   - Used for temporary, runtime client groupings.

### Real-World Example
In a SaaS application:
- You create an \`/admin\` namespace with strict token authentication for dashboard statistics.
- You create a \`/chat\` namespace for user-to-user customer support chats.
- Sockets in \`/chat\` can join rooms like \`room-user-123\`.
- Sockets in \`/admin\` cannot receive events from the \`/chat\` namespace, separating data payloads cleanly.

### Best Practice
Use Namespaces to separate distinct feature modules (e.g. alerts vs gameplay) to prevent event collision and manage authorization checks at namespace boundaries. Use Rooms to bundle user scopes within those modules.

### Common Mistakes
Creating too many dynamic namespaces. Namespaces require setup declarations on the server. For dynamic runtime groups (like chat groups), always use Rooms instead of dynamically creating namespaces.

### Code Example
\`\`\`typescript
// SERVER side multiplexing
import { Server } from 'socket.io';
const io = new Server(3000);

// 1. Create a dedicated Admin Namespace
const adminNamespace = io.of('/admin');
adminNamespace.use((socket, next) => {
  // Middleware: Only allow authenticated admins!
  const token = socket.handshake.auth.token;
  token === 'secret-admin-pass' ? next() : next(new Error('Auth failed'));
});

adminNamespace.on('connection', (socket) => {
  console.log('Admin connected to dashboard namespace');
});

// 2. Create a generic Chat Namespace
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  // Join a Room inside /chat namespace
  socket.join('public-room');
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নেমস্পেস একটি সিঙ্গেল ফিজিক্যাল টিসিপি (TCP) কানেকশন ব্যবহার করে লজিক্যাল সাব-চ্যানেল তৈরি করে:
১. **Namespaces (\`io.of('/path')\`)**:
   - এটি সম্পূর্ণ আলাদা চ্যানেল যা এক্সপ্রেস রাউটের মতো কাজ করে।
   - সকেটকে নির্দিষ্ট নেমস্পেসে কানেক্ট হতে হয়: \`io('/admin')\`।
   - প্রতিটির নিজস্ব মিডলওয়্যার ও এরর হ্যান্ডলিং সিকিউরিটি চেক থাকে।
২. **Rooms**:
   - এটি নেমস্পেসের *ভেতরে* সকেটগুলোর পারস্পরিক গ্রুপ।
   - ডাইনামিকালি যোগ বা বিদায় নেওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রজেক্টে:
- আপনি ড্যাশবোর্ড ডাটা পাঠাতে একটি \`/admin\` নেমস্পেস বানালেন যাতে টোকেন অথেনটিকেশন চেক দিয়ে সিকিউর করা।
- কাস্টমার কেয়ার চ্যাটের জন্য আরেকটি \`/chat\` নেমস্পেস বানালেন।
- \`/chat\`-এর চাইল্ডরা রুমে জয়েন করতে পারে (যেমন: \`support-room-1\`)।
- দুটি নেমস্পেস আলাদা থাকায় অ্যাডমিনের সকেটে চ্যাটের কোনো ডাটা লোড হবে না, যা সিকিউরিটি ও স্পিড বাড়ায়।

### উত্তম অনুশীলন
আলাদা মেম্বার প্যানেল বা সম্পূর্ণ ভিন্ন ফিচারের জন্য নেমস্পেস ব্যবহার করুন। আর একই ফিচারের সাব-গ্রুপ তৈরি করতে রুম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
প্রতিটি নতুন চ্যাট গ্রুপের জন্য ডাইনামিকালি নতুন নেমস্পেস তৈরি করা। নেমস্পেসগুলো স্ট্যাটিক রাখা উচিত এবং ডাইনামিক গ্রুপের জন্য সবসময় রুম ব্যবহার করা উচিত।

### Code Example
\`\`\`typescript
// SERVER সাইড মাল্টিপ্লেক্সিং
import { Server } from 'socket.io';
const io = new Server(3000);

// ১. এডমিনদের জন্য বিশেষ নেমস্পেস
const adminNamespace = io.of('/admin');
adminNamespace.use((socket, next) => {
  // শুধুমাত্র অথরাইজড এডমিনদের অনুমতি দেওয়া হচ্ছে
  const token = socket.handshake.auth.token;
  token === 'secret-admin-pass' ? next() : next(new Error('Auth failed'));
});

adminNamespace.on('connection', (socket) => {
  console.log('Admin connected to dashboard namespace');
});

// ২. সাধারণ চ্যাট নেমস্পেস
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  // চ্যাট নেমস্পেসের ভেতরে রুমে জয়েন
  socket.join('public-room');
});
\`\`\``
  },
  {
    id: 'other-topics-33',
    title: 'How do you configure concurrency and sandboxed workers in Bull Job Queues?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Bull Queue', 'Concurrency', 'Sandboxed Workers', 'Node.js', 'Performance'],
    enAnswer: 'Configure concurrency by passing a number to the process() function. To prevent CPU-intensive tasks from blocking the main event loop, define a file path in process() to run workers inside isolated Node child processes (Sandboxed Workers).',
    bnAnswer: 'process() ফাংশনে সংখ্যা পাস করে কনকারেন্সি কনফিগ করা যায়। সিপিইউ-ভারী কাজের সময় মেইন ইভেন্ট লুপ সচল রাখতে process() ফাংশনে ফাইলের পাথ দিয়ে আইসোলেটেড চাইল্ড প্রসেস (Sandboxed Workers) ব্যবহার করা হয়।',
    enExplanation: `### Explanation
By default, Bull processes jobs on the same thread as your main Node app, one job at a time. For heavy computations, this causes lagging:
1. **Concurrency Control**: Pass a numeric value as the first parameter: \`queue.process(5, handler)\`. This executes up to 5 jobs in parallel inside the event loop.
2. **Sandboxed Workers**:
   - Pass a file path string instead of a callback function: \`queue.process('/path/to/worker.js')\`.
   - Bull spins up a separate Node.js child process pool.
   - If a job crashes with an out-of-memory error or hangs, the main application thread remains completely unaffected and safe.

### Real-World Example
In a video encoding service:
- Running ffmpeg conversions on the main Express process blocks all users from visiting the website.
- Setting up a Sandboxed Worker pool running 3 concurrent conversions offloads the video rendering tasks to separate CPU worker threads, keeping the website loading at 0ms delay.

### Best Practice
Always use sandboxed workers for tasks that run complex loops, file processing, or heavy computations. Ensure that your sandboxed worker file exports a single function returning a Promise.

### Common Mistakes
Defining inline arrow function callbacks in \`process\` and expecting it to run on a separate CPU core. Only passing a file path string activates the child process sandbox pool.

### Code Example
\`\`\`typescript
// --- main-app.ts ---
import Queue from 'bull';
import path from 'path';

const imageQueue = new Queue('image-processor');

// Configure: Run up to 4 concurrent jobs inside sandboxed child processes!
imageQueue.process(4, path.join(__dirname, 'image-worker.js'));


// --- image-worker.ts ---
// Sandboxed workers must export a single function (CommonJS syntax recommended for runner compatibility)
module.exports = async function (job: any) {
  console.log(\`Processing image \${job.data.imageId} inside process: \${process.pid}\`);
  // Perform CPU heavy resizing logic here...
  return { success: true };
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে Bull কিউ একটি মাত্র থ্রেডে কাজ করে। ফলে কোনো ভারী জব আসলে নোড সার্ভার লক হয়ে পড়ে:
১. **কনকারেন্সি কন্ট্রোল**: \`queue.process(5, handler)\` মেথডে প্রথমে সংখ্যা পাস করলে ইভেন্ট লুপে একসাথে ৫টি কাজ সমান্তরালভাবে চলতে পারে।
২. **স্যান্ডবক্সড ওয়ার্কার (Sandboxed Workers)**:
   - প্রসেস ফাংশনে কলব্যাক না দিয়ে স্ক্রিপ্টের ফাইল পাথ পাস করতে হবে: \`queue.process('/path/to/worker.js')\`।
   - এটি নোডের চাইল্ড প্রসেস তৈরি করে ব্যাকগ্রাউন্ড থ্রেড পুলে প্রসেসটি পাঠায়।
   - চাইল্ড প্রসেসটি মেমোরি শেষ হয়ে ক্র্যাশ করলেও মেইন এক্সপ্রেস সার্ভারের কোনো ক্ষতি হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ভিডিও কনভার্টিং সাইটে:
- মেইন নোড প্রসেসে ভিডিও কনভার্ট চালু করলে সাথে সাথে সব ইউজারের জন্য পেজ আনরেসপন্সিভ দেখাবে।
- স্যান্ডবক্সড ওয়ার্কারের মাধ্যমে একসাথে ৩টি ডাইনামিক ভিডিও চাইল্ড থ্রেডে পাঠিয়ে কনভার্ট করলে মেইন সার্ভার সম্পূর্ণ ফ্রী থাকে।

### উত্তম অনুশীলন
যেকোনো ফাইল প্রসেসিং বা ওভিএম (Image/Video) জেনারেশনের কাজে স্যান্ডবক্সড চাইল্ড ওয়ার্কার প্রসেস ব্যবহার করুন এবং ফাইল এক্সপোর্ট সঠিক রাখুন।

### সাধারণ ভুলসমূহ
ইনলাইন ফাংশন লিখে সেটি অন্য কোর-এ রান হবে বলে আশা করা। চাইল্ড প্রসেস রান করতে চাইলে অবশ্যই ওয়ার্কার কোডটি আলাদা ফাইলে লিখে তার সম্পূর্ণ পাথ পাস করতে হবে।

### Code Example
\`\`\`typescript
// --- main-app.ts ---
import Queue from 'bull';
import path from 'path';

const imageQueue = new Queue('image-processor');

// ৪টি সমান্তরাল চাইল্ড প্রসেসে ইমেজ রিসাইজ করা হচ্ছে
imageQueue.process(4, path.join(__dirname, 'image-worker.js'));


// --- image-worker.ts ---
// স্যান্ডবক্সড ওয়ার্কারকে সিঙ্গেল ফাংশন এক্সপোর্ট করতে হবে
module.exports = async function (job: any) {
  console.log(\`Processing image \${job.data.imageId} inside process: \${process.pid}\`);
  // ইমেজ প্রসেসিংয়ের কোড...
  return { success: true };
};
\`\`\``
  },
  {
    id: 'other-topics-34',
    title: 'How do you implement query validators and pre-save validation hooks in Mongoose?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Mongoose', 'Validation', 'Mongoose Hooks', 'Database Design'],
    enAnswer: 'Mongoose query validators run validation rules during update queries by setting the runValidators: true option. Pre-save validation hooks check fields before compiling documents using pre("validate").',
    bnAnswer: 'আপডেট কুয়েরির সময় ভ্যালিডেশন সচল করতে runValidators: true অপশনটি পাস করতে হয়। আর সেভ করার পূর্বে ডাটা ফিল্ড পরীক্ষা করতে pre("validate") হুক ব্যবহার করা হয়।',
    enExplanation: `### Explanation
Mongoose validation runs on \`save\` by default. However, when executing update operations, Mongoose bypasses standard validation:
1. **The Update Validation Bypass**:
   - Calling \`User.findOneAndUpdate\` bypasses schema validations.
   - *Fix*: You must pass \`{ runValidators: true }\` in the options parameter to enforce validation.
2. **Pre-Validation Hooks**:
   - \`schema.pre('validate', callback)\` intercepts the data *before* Mongoose compiles types and rules.
   - Useful for trimming strings, setting defaults, or executing custom schema validations programmatically.

### Real-World Example
If your schema requires email validation using a regex format. When creating a user, the validation blocks incorrect emails. If you write an update query: \`User.findByIdAndUpdate(id, { email: 'bad_email' })\` without \`runValidators\`, the database saves the incorrect email. Setting \`runValidators: true\` prevents this database corruption.

### Best Practice
Always bundle \`{ runValidators: true, new: true }\` inside update queries to guarantee schema integrity and return the updated document.

### Common Mistakes
Expecting custom schema validators to run on \`update\` without setting \`runValidators: true\` globally or in options, leading to unstructured values in database collections.

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, minlength: 5 },
  email: {
    type: String,
    validate: {
      validator: (v: string) => /\\S+@\\S+\\.\\S+/.test(v),
      message: 'Invalid email format'
    }
  }
});

const User = model('User', userSchema);

// Update document enforcing schema validations
async function updateEmail(userId: string, newEmail: string) {
  return await User.findByIdAndUpdate(
    userId,
    { email: newEmail },
    { 
      new: true, 
      runValidators: true // Enforces email validation regex on update!
    }
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে মঙ্গুজ কেবল \`save\` করার সময় ভ্যালিডেশন চেক করে। ডাটা আপডেট কুয়েরি চালানোর সময় এটি ভ্যালিডেশন এড়িয়ে যায়:
১. **আপডেট ভ্যালিডেশন বাইপাস**:
   - \`User.findOneAndUpdate\` বা \`updateOne\` কল করলে স্কিমা ভ্যালিডেশন বন্ধ থাকে।
   - *সমাধান*: কুয়েরি অপশনে \`{ runValidators: true }\` পাস করতে হবে।
২. **Pre-Validation Hooks**:
   - \`schema.pre('validate')\` ডাটা চেক হওয়ার ঠিক আগের মুহূর্তে ট্রিগার হয়, যা ডাটা ট্রিম বা ফরম্যাট করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারের প্রোফাইল এডিটের সময় যদি সে ভুল ফরমেটের ইমেইল দেয় এবং কুয়েরিতে \`runValidators\` অন না থাকে, তবে ডাটাবেজে ভুল ইমেইল সেভ হয়ে যাবে। \`runValidators: true\` সেট করে রাখলে আপডেট কুয়েরিও ভুল ডাটা ডিটেক্ট করে আটকে দেয়।

### উত্তম অনুশীলন
আপডেট কুয়েরিতে সবসময় \`{ runValidators: true, new: true }\` কনফিগার করুন যাতে ডাটাবেজের সুস্থতা রক্ষা পায় ও রিটার্ন ভ্যালু আপডেট ডাটা দেয়।

### সাধারণ ভুলসমূহ
মঙ্গুজ সব কুয়েরিতে অটোমেটিক সব চেক করে নিবে ভেবে রিলেক্স থাকা, যার ফলে অপশন সেট করতে ভুলে গিয়ে ভুল ডাটাবেজ এন্ট্রি তৈরি হয়।

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, minlength: 5 },
  email: {
    type: String,
    validate: {
      validator: (v: string) => /\S+@\S+\.\S+/.test(v),
      message: 'Invalid email format'
    }
  }
});

const User = model('User', userSchema);

// ভ্যালিডেশন নিশ্চিত করে ইমেইল আপডেট
async function updateEmail(userId: string, newEmail: string) {
  return await User.findByIdAndUpdate(
    userId,
    { email: newEmail },
    { 
      new: true, 
      runValidators: true // আপডেট কুয়েরিতেও ইমেইল ভ্যালিডেশন চেক করবে
    }
  );
}
\`\`\``
  },
  {
    id: 'other-topics-35',
    title: 'How do you use Redis Lists and Sets, and what are their use cases?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Redis', 'Data Structures', 'Redis Lists', 'Redis Sets', 'Performance'],
    enAnswer: 'Redis Lists are ordered arrays of strings (ideal for queues using LPUSH/RPOP). Redis Sets are unordered collections of unique strings (ideal for tracking tags, unique views, or social followers using SADD/SISMEMBER).',
    bnAnswer: 'Redis Lists হলো সাজানো স্ট্রিং অ্যারে (LPUSH/RPOP ব্যবহার করে কিউ তৈরির জন্য সেরা)। আর Redis Sets হলো ইউনিক স্ট্রিংয়ের কালেকশন যেখানে ডুপ্লিকেট থাকে না (SADD/SISMEMBER দিয়ে ট্যাগ বা ইউনিক ফলোয়ার ট্র্যাকিংয়ের জন্য সেরা)।',
    enExplanation: `### Explanation
Redis is not just a key-value string store. It supports structured memory primitives:
1. **Redis Lists**:
   - Maintained in insertion order.
   - Operations: \`LPUSH\` (prepend), \`RPUSH\` (append), \`LPOP\`/\`RPOP\` (retrieve and remove).
   - Use Cases: Building message queues, timeline feeds, or recent search logs.
2. **Redis Sets**:
   - Collections of unique, unsorted elements.
   - Operations: \`SADD\` (add item), \`SISMEMBER\` (check if exists), \`SINTER\` (intersection between sets).
   - Use Cases: Storing unique visitor IPs, user tags, or social follower accounts.

### Real-World Example
- **Lists**: A user clicks 5 products in a session. You push their IDs to \`user:101:recent\` using \`LPUSH\`. Using \`LTRIM user:101:recent 0 4\` keeps only the 5 most recent items.
- **Sets**: An article needs to show unique views. Every visit checks \`SADD article:99:views user_id\`. If user A visits 10 times, the Set size remains 1, giving an accurate unique view count.

### Best Practice
Use Sets for membership testing (checking if a user liked a post) because \`SISMEMBER\` runs in O(1) time complexity, whereas searching an array/list runs in O(N) complexity.

### Common Mistakes
Using Redis Lists for unique item checks. Lists allow duplicate items, leading to bloated data arrays and incorrect count metrics.

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// 1. Lists: Push and Pop (FIFO Queue)
await client.lPush('task_list', 'task_one');
await client.lPush('task_list', 'task_two');
const activeTask = await client.rPop('task_list'); // Returns 'task_one'

// 2. Sets: Manage unique items
await client.sAdd('article:123:tags', 'programming');
await client.sAdd('article:123:tags', 'javascript');
await client.sAdd('article:123:tags', 'javascript'); // Duplicate ignored!

const isTagged = await client.sIsMember('article:123:tags', 'javascript'); // Returns true
const tags = await client.sMembers('article:123:tags'); // Returns ['programming', 'javascript']
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিস শুধুমাত্র প্লেইন টেক্সট ছাড়াও এডভান্সড ডাটা স্ট্রাকচার মেমোরি সাপোর্ট করে:
১. **Redis Lists**:
   - পুশ করার অর্ডার অনুযায়ী সাজানো অ্যারে।
   - মেথড: \`LPUSH\` (শুরুতে পুশ), \`RPUSH\` (শেষে পুশ), \`LPOP\`/\`RPOP\` (পপ বা ডাটা রিমুভ করে রিটার্ন)।
   - ব্যবহার: লাইভ মেসেজ ফিড, সাম্প্রতিক ব্রাউজিং ট্র্যাকিং।
২. **Redis Sets**:
   - ডুপ্লিকেট বিহীন ইউনিক ডাটা গ্রুপ।
   - মেথড: \`SADD\` (অ্যাড), \`SISMEMBER\` (মেম্বার কিনা চেক), \`SINTER\` (কমন উপাদান খোঁজা)।
   - ব্যবহার: ইউনিক ভিউ গণনা, ফ্রেন্ড লিস্ট চেক।

### বাস্তব-ভিত্তিক উদাহরণ
- **Lists**: ইউজার ৫টি পেজ ভিজিট করলেন। \`LPUSH\` দিয়ে প্রতিটি আইডি পুশ করে \`LTRIM\` দিয়ে সাইজ ৫ করে লক করে রাখা যায়।
- **Sets**: একটি পোস্টে রিয়েল ভিউ কাউন্ট করতে হবে। ইউজার ক্লিক করলে \`SADD post:99:views user_id\` করা হলো। একই ইউজার ১০০ বার রি-লোড দিলেও ডুপ্লিকেট রিমুভ হওয়ায় সেট এর মোট মেম্বার ১-ই থাকবে।

### উত্তম অনুশীলন
মেম্বারশিপ ভেরিফিকেশনে (যেমন: ইউজার লাইক দিয়েছেন কিনা) সবসময় Set ব্যবহার করুন। কারণ \`SISMEMBER\` ওয়ান-শট ওয়ান টাইম O(1) স্পিডে কাজ করে, যা লিস্টের O(N) সার্চের চেয়ে কোটি গুণ ফাস্ট।

### সাধারণ ভুলসমূহ
ইউনিক চেকিংয়ের কাজে Redis List ব্যবহার করা, যার ফলে ডুপ্লিকেট ডাটা ঢুকে ডাটার কাউন্ট নষ্ট করে ফেলে।

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// ১. Lists: পুশ ও পপ অপারেশন (FIFO Queue)
await client.lPush('task_list', 'task_one');
await client.lPush('task_list', 'task_two');
const activeTask = await client.rPop('task_list'); // 'task_one' রিটার্ন করবে

// ২. Sets: ইউনিক মেম্বারশিপ ট্র্যাকিং
await client.sAdd('article:123:tags', 'programming');
await client.sAdd('article:123:tags', 'javascript');
await client.sAdd('article:123:tags', 'javascript'); // ডুপ্লিকেটটি অটোমেটিক ইগনোর হবে

const isTagged = await client.sIsMember('article:123:tags', 'javascript'); // true রিটার্ন করবে
const tags = await client.sMembers('article:123:tags'); // ['programming', 'javascript']
\`\`\``
  },
  {
    id: 'other-topics-36',
    title: 'How does Pub-Sub (Publish-Subscribe) messaging work in Redis?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Redis', 'Pub-Sub', 'Real-time', 'Message Broker', 'Backend'],
    enAnswer: 'Redis Pub-Sub is a messaging pattern where publishers send messages to channels without knowing the subscribers, and subscribers listen to channels to receive updates instantly in real time.',
    bnAnswer: 'Redis Pub-Sub হলো একটি মেসেজিং প্যাটার্ন যেখানে পাবলিশাররা চ্যানেলগুলোতে মেসেজ পাঠায় এবং সাবস্ক্রাইবাররা ওই চ্যানেলগুলোতে লিসেন করে রিয়েল-টাইমে ডাটা রিসিভ করে।',
    enExplanation: `### Explanation
Redis Pub-Sub provides a lightweight, fire-and-forget message broker pipeline:
1. **Publishers (\`PUBLISH channel message\`)**: Send string messages to named channels.
2. **Subscribers (\`SUBSCRIBE channel\`)**: Settle open listeners on channels. Whenever a message is published, subscribers receive it.
3. **Decoupled Architecture**: The publisher has no awareness of how many subscribers exist, or if any are online at all. Redis manages the routing internally.
4. **Fire-and-forget**: Messages are not persisted in Redis. If a subscriber is offline when a message is published, the message is lost forever.

### Real-World Example
In a multi-server live notification dashboard:
- User A posts a comment. The server handling User A publishes a message: \`PUBLISH new-comment { postId: 5 }\`.
- Other server instances running across different machines subscribe to \`new-comment\`. They receive the payload instantly and push it to their active WebSocket clients, syncing everyone's screen.

### Best Practice
Only use Redis Pub-Sub for transient, real-time message broadcasting where message persistence is not required (like chat notifications or active state broadcasts). For reliable queue delivery, use Redis Streams or Bull.

### Common Mistakes
Assuming Redis Pub-Sub stores messages for offline users. Since it is fire-and-forget, any subscriber disconnection results in missing all messages dispatched during the downtime.

### Code Example
\`\`\`typescript
// Publisher and Subscriber setup in Node.js
import { createClient } from 'redis';

async function setupPubSub() {
  const subscriber = createClient();
  const publisher = createClient();
  
  await subscriber.connect();
  await publisher.connect();

  // 1. Subscribe to a channel
  await subscriber.subscribe('news_channel', (message) => {
    console.log('Received message:', message);
  });

  // 2. Publish message to the channel
  await publisher.publish('news_channel', 'Breaking: New JS framework released!');
}
setupPubSub();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Redis Pub-Sub একটি লাইটওয়েট ও ফায়ার-অ্যান্ড-ফরগেট মেসেজ ব্রোকার পাইপলাইন প্রদান করে:
১. **পাবলিশার**: নির্দিষ্ট চ্যানেলে টেক্সট মেসেজ ফায়ার করে।
২. **সাবস্ক্রাইবার**: নির্দিষ্ট চ্যানেলে কানেকশন ওপেন করে মেসেজের জন্য ওয়েট করে। মেসেজ আসামাত্র রিসিভ করে।
৩. **ডিকাপলড আর্কিটেকচার**: পাবলিশার জানে না কতজন লাইনে আছে। রেডিস ইন্টারনালি এই কানেকশন ডিস্ট্রিবিউট করে।
৪. **ফায়ার-অ্যান্ড-ফরগেট**: মেসেজগুলো রেডিস মেমরিতে জমা থাকে না। সাবস্ক্রাইবার অফলাইনে থাকলে মেসেজ চিরতরে হারিয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
একাধিক নোড সার্ভার সমন্বিত লাইভ গেমিং প্রজেক্টে:
- প্লেয়ার A লেভেল আপ করলেন। একটি ব্যাকএন্ড নোড থেকে রেডিস চ্যানেলে পাবলিশ করা হলো: \`PUBLISH level-up { user: "PlayerA" }\`।
- বাকি সার্ভারগুলো রেডিস চ্যানেলটি সাবস্ক্রাইব করে রাখায় তারা সাথে সাথে মেসেজ রিসিভ করে নিজেদের সকেট কানেকশন দিয়ে গেম স্ক্রিন রিলোড করে দেয়।

### উত্তম অনুশীলন
লাইভ চ্যাট নোটিফিকেশন বা ইনস্ট্যান্ট অ্যালার্ট যেখানে ডাটা হারিয়ে গেলেও বড় ক্ষতি নেই, এমন রিয়েল-টাইম ব্রডকাস্টে কেবল এটি ব্যবহার করুন। মেসেজ ডেলিভারি নিশ্চিত করতে চাইলে Redis Streams ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে সাবস্ক্রাইবার অফলাইনে গেলেও রেডিস ডাটা জমা রাখবে। অফলাইন অবস্থায় পাঠানো সব মেসেজ সাবস্ক্রাইবার চিরতরে মিস করবে।

### Code Example
\`\`\`typescript
// নোড জেএস পাবলিশার ও সাবস্ক্রাইবার সেটআপ
import { createClient } from 'redis';

async function setupPubSub() {
  const subscriber = createClient();
  const publisher = createClient();
  
  await subscriber.connect();
  await publisher.connect();

  // ১. চ্যানেলে সাবস্ক্রাইব করা হচ্ছে
  await subscriber.subscribe('news_channel', (message) => {
    console.log('Received message:', message);
  });

  // ২. চ্যানেলে মেসেজ পাবলিশ করা হচ্ছে
  await publisher.publish('news_channel', 'Breaking: New JS framework released!');
}
setupPubSub();
\`\`\``
  },
  {
    id: 'other-topics-37',
    title: 'What are the main advantages of Dragonfly over Redis in heavy read/write production workloads?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Dragonfly', 'Redis', 'Performance', 'Multi-threading', 'Caching'],
    enAnswer: 'Dragonfly outperforms Redis in heavy workloads by utilizing all CPU cores via multi-threaded execution, preventing latency spikes during snapshots using advanced serialization, and saving up to 40% memory.',
    bnAnswer: 'ড্রাগনফ্লাই মাল্টি-থ্রেডিংয়ের মাধ্যমে সব সিপিইউ কোর ব্যবহার করে ভারী লোডে রেডিসকে হারিয়ে দেয়, এডভান্সড সিরিয়ালাইজেশন দিয়ে স্ন্যাপশট নেয়ার সময় ল্যাটেন্সি স্পাইক রোধ করে এবং ৪০% পর্যন্ত মেমোরি বাঁচায়।',
    enExplanation: `### Explanation
When web applications scale to millions of operations per second, standard Redis reaches physical boundaries:
1. **Vertical Scaling**: Redis cannot use more than 1 CPU core. Increasing throughput requires complex clustering configurations. Dragonfly scales automatically with the hardware's core count.
2. **Snapshot Stability**: Redis uses the \`fork()\` system call to save data to disk, doubling memory requirements during write peaks and causing API latency spikes. Dragonfly uses a custom asynchronous serialization engine that executes snapshots without freezing memory operations.
3. **No Clustering Overhead**: A single Dragonfly instance can handle up to 4 million queries per second, bypassing the need for complex, multi-node Redis clusters.

### Real-World Example
In a ticket selling website on the day of a major concert:
- High read/write lock requests peak standard Redis CPU to 100%. Users experience loading errors.
- Switching to Dragonfly allows the server to process transaction states across 8 threads simultaneously, reducing CPU load to 15% and keeping API latency under 1ms.

### Best Practice
Deploy Dragonfly in environments running heavy caching arrays (like multi-player game loops or real-time analytics dashboards) where single-threaded databases become the bottleneck.

### Common Mistakes
Failing to optimize thread count configurations in Dragonfly. For optimal performance, run Dragonfly with the \`--threads\` parameter set to match the exact physical CPU core count of the host server.

### Code Example
\`\`\`bash
# Typical command line to spin up a high-performance Dragonfly container:
docker run -d --name dragonfly-cache -p 6379:6379 \\
  -v dragonfly_data:/data \\
  docker.dragonflydb.io/dragonflydb/dragonfly \\
  --threads=8 \\
  --maxmemory=4gb
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন এপিআই প্রতি সেকেন্ডে লাখ লাখ অপারেশন প্রসেস করে, তখন রেডিস তার সিঙ্গেল থ্রেড লিমিটের কারণে আর স্পিড বাড়াতে পারে না:
১. **ভার্টিকাল স্কেলিং**: রেডিস ১টির বেশি সিপিইউ কোর ব্যবহার করতে পারে না। ড্রাগনফ্লাই প্রসেসরের সব কোর ডাইনামিকালি ব্যবহার করতে সক্ষম।
২. **স্থায়িত্ব ও ব্যাকআপ**: রেডিস ডাটা ব্যাকআপ নেওয়ার সময় \`fork()\` সিস্টেম ব্যবহার করে সাময়িকভাবে মেমোরি দ্বিগুণ করে ও এপিআই স্লো করে দেয়। ড্রাগনফ্লাই কোনো ব্যাকআপ ল্যাগ ছাড়াই রানিং মেমোরি সেভ করতে পারে।
৩. **ক্লাস্টার মুক্ত সমাধান**: একটি সিঙ্গেল ড্রাগনফ্লাই ইনস্ট্যান্স সেকেন্ডে ৪০ লাখ কুয়েরি প্রসেস করতে পারে, ফলে জটিল ক্লাস্টারিংয়ের প্রয়োজন ফুরিয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
কনসার্টের টিকিট বিক্রির দিন টিকিট কাউন্ট চেক ও সিট বুকিং লক ট্রাফিকের কারণে রেডিস সার্ভার জ্যাম হয়ে যায়। রেডিস বদলে ড্রাগনফ্লাই ইনস্টল করলে এটি একবারে ৮টি প্রসেসর থ্রেডে টিকিট লক ডাটা প্রসেস করে সিপিইউ লোড ১০০% থেকে ১৫% এ নামিয়ে নিয়ে আসে।

### উত্তম অনুশীলন
অধিক ট্রাফিকযুক্ত ড্যাশবোর্ড বা রিয়েল-টাইম গেম লুপে প্রক্সি হিসেবে ড্রাগনফ্লাই ব্যবহার করুন। ড্রাগনফ্লাই রান করার সময় প্রজেক্টের হোস্ট কম্পিউটারের প্রসেসর কোরের সাথে থ্রেড সংখ্যা ইকুয়াল করে দিন (\`--threads=8\`)।

### সাধারণ ভুলসমূহ
ড্রাগনফ্লাই রান করার সময় থ্রেড কাউন্ট কনফিগ করতে ভুলে যাওয়া, যার ফলে এটি হোস্ট সার্ভারের প্রসেসর কোরের সঠিক বন্টন করতে পারে না।

### Code Example
\`\`\`bash
# ডকারে ড্রাগনফ্লাই কন্টেইনার ফাস্ট মোডে রান করার কমান্ড:
docker run -d --name dragonfly-cache -p 6379:6379 \
  -v dragonfly_data:/data \
  docker.dragonflydb.io/dragonflydb/dragonfly \
  --threads=8 \
  --maxmemory=4gb
\`\`\``
  },
  {
    id: 'other-topics-38',
    title: 'How does the RxDB replication protocol synchronize local IndexedDB data with remote databases?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['RxDB', 'Database Replication', 'Sync', 'IndexedDB', 'Offline-First'],
    enAnswer: 'The RxDB replication protocol uses pull/push streams. It fetches changes from the server database to apply locally (pull) and monitors local changes in IndexedDB to push them immediately to the remote API (push).',
    bnAnswer: 'RxDB রেপ্লিকেশন প্রোটোকল পুশ/পুল স্ট্রিম ব্যবহার করে। এটি রিমোট সার্ভার থেকে নতুন আপডেট লোকাল মেমরিতে নিয়ে আসে (pull) এবং লোকালে ঘটা পরিবর্তনগুলো সার্ভার এপিআইতে পুশ করে সিঙ্ক করে (push)।',
    enExplanation: `### Explanation
Offline-first synchronization requires double-checking state histories on both client and server:
1. **Pull Replication**:
   - The client queries the server for changes that occurred since the last sync timestamp (checkpoint).
   - If new records are found, RxDB inserts them into local IndexedDB and updates the local checkpoint.
2. **Push Replication**:
   - RxDB listens to local document updates using hooks.
   - When a change occurs, it queues a push request to the remote endpoint.
3. **Conflict Resolution**:
   - If the same document was updated on the server and client concurrently, RxDB runs validation checks to merge or reject client edits.

### Real-World Example
In a collaborative task manager:
- User A goes offline and updates a task description to "Build UI".
- Meanwhile, User B online updates the same task title to "V2 Dashboard".
- When User A reconnects, the RxDB replication plugin pulls User B's edits, runs the conflict solver, merges both updates, and pushes the final resolved document to the server database.

### Best Practice
Define custom conflict resolution strategies (e.g. "server-wins" or "client-wins" or delta merging) explicitly inside collection replication setups to prevent silent data loss during concurrent offline edits.

### Common Mistakes
Not configuring JWT authorization header refreshes inside the replication requests, causing the synchronization stream to fail silently when user login tokens expire.

### Code Example
\`\`\`typescript
import { replicateRxCollection } from 'rxdb/plugins/replication';

async function startSync(myRxCollection: any) {
  // Set up bidirectional replication stream
  const replicationState = replicateRxCollection({
    collection: myRxCollection,
    replicationIdentifier: 'my-custom-api-sync',
    live: true, // Run continuously in the background
    pull: {
      handler: async (lastCheckpoint) => {
        // Fetch new server changes since last checkpoint
        const response = await fetch(\`/api/sync/pull?since=\${lastCheckpoint?.time || 0}\`);
        const data = await response.json();
        return {
          documents: data.changes,
          checkpoint: { time: data.timestamp }
        };
      }
    },
    push: {
      handler: async (changeRows) => {
        // Push local client changes to the server API
        await fetch('/api/sync/push', {
          method: 'POST',
          body: JSON.stringify(changeRows)
        });
      }
    }
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অফলাইন-ফার্স্ট সিস্টেমে লোকাল ও রিমোট সার্ভারের ডাটা এক সুতায় বাঁধতে চেকপয়েন্ট মেথড কাজ করে:
১. **Pull Replication**:
   - ক্লায়েন্ট তার শেষ সিঙ্কের টাইমস্ট্যাম্প (Checkpoint) সার্ভারে পাঠিয়ে জিজ্ঞাসা করে নতুন কোনো এডিট হয়েছে কিনা।
   - আপডেট ডাটা পেলে তা ক্লায়েন্ট নিজের লোকাল IndexedDB-তে রাইট করে নেয়।
২. **Push Replication**:
   - RxDB লোকাল ডাটাবেজে ফাইল রাইট হওয়ার সাথে সাথে লিসেন করে এডিট ডাটা সার্ভারে পোস্ট করে।
৩. **Conflict Resolution (দ্বন্দ্ব নিরসন)**:
   - একই ফাইল অফলাইনে ক্লায়েন্ট ও অনলাইনে সার্ভার একযোগে এডিট করলে সংঘর্ষ রুখতে মার্চ বা ডিটেকশন পলিসি রান হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি টু-ডু অ্যাপে ইন্টারনেট না থাকায় ইউজার একটি টাস্কের বিবরণ দিলেন "ডিজাইন কমপ্লিট"। একই সময়ে সার্ভারে অন্য ম্যানেজার টাস্কের ডেডলাইন চেইঞ্জ করলেন। কানেকশন ফিরে আসা মাত্রই RxDB দুইজনের করা চেঞ্জগুলোকে একত্র করে মার্জ ফাইল তৈরি করে সার্ভারে ও লোকালে একযোগে রাইট করে দেয়।

### উত্তম অনুশীলন
ডাটা হারিয়ে যাওয়া ঠেকাতে প্রজেক্টের ধরন বুঝে কনফ্লিক্ট মেথড (যেমন: "server-wins" বা "client-wins") স্পষ্টভাবে ডিফাইন করে দিন।

### সাধারণ ভুলসমূহ
টোকেন এক্সপায়ারি হ্যান্ডেল না করা। ইউজার টোকেন এক্সপায়ার হয়ে এপিআই রিজেক্ট করলে রেপ্লিকেশন ফেইল হবে কিন্তু অ্যাপ কোথাও এরর শো করবে না। তাই টোকেন রিফ্রেশ লুপ সচল রাখুন।

### Code Example
\`\`\`typescript
import { replicateRxCollection } from 'rxdb/plugins/replication';

async function startSync(myRxCollection: any) {
  // দ্বি-মুখী রেপ্লিকেশন সিঙ্ক স্ট্রিম সচল করা হলো
  const replicationState = replicateRxCollection({
    collection: myRxCollection,
    replicationIdentifier: 'my-custom-api-sync',
    live: true, // ব্যাকগ্রাউন্ডে অনবরত লিসেন করবে
    pull: {
      handler: async (lastCheckpoint) => {
        // শেষ চেকপয়েন্টের পর থেকে সার্ভারের আপডেট আনা হচ্ছে
        const response = await fetch(\`/api/sync/pull?since=\${lastCheckpoint?.time || 0}\`);
        const data = await response.json();
        return {
          documents: data.changes,
          checkpoint: { time: data.timestamp }
        };
      }
    },
    push: {
      handler: async (changeRows) => {
        // ক্লায়েন্ট বা লোকাল এডিট ডাটা সার্ভারে পাঠানো হচ্ছে
        await fetch('/api/sync/push', {
          method: 'POST',
          body: JSON.stringify(changeRows)
        });
      }
    }
  });
}
\`\`\``
  },
  {
    id: 'other-topics-39',
    title: 'How do you implement Dexie.js live queries using the useObservable hook to build reactive UIs?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Dexie.js', 'React', 'Reactive UI', 'IndexedDB', 'Observables'],
    enAnswer: 'Dexie.js reactive queries are built using the useLiveQuery hook. It automatically subscribes to the IndexedDB table queries, refreshing the React component state whenever database records are updated.',
    bnAnswer: 'Dexie.js-এর রিয়্যাক্টিভ কুয়েরি useLiveQuery হুক দিয়ে তৈরি করা হয়। এটি IndexedDB টেবিলে সাবস্ক্রাইব করে রাখে এবং ডাটা চেঞ্জ হওয়া মাত্র রিঅ্যাক্ট স্টেট আপডেট করে রেন্ডারিং সচল করে।',
    enExplanation: `### Explanation
Standard IndexedDB operations require manual querying every time we save. To build responsive UIs, we need data updates to stream automatically:
1. **\`useLiveQuery\` Hook**:
   - Provided by Dexie's React integration package.
   - It monitors the specific tables referenced inside the query callback.
   - If any insert, delete, or modify operation runs on those tables (even in other tabs), the query rerun executes, and the component renders the fresh array automatically.

### Real-World Example
In a messaging app:
- The UI fetches messages using \`useLiveQuery(() => db.messages.toArray())\`.
- When a new message arrives in the background (via WebSockets) and writes to \`db.messages.add()\`, the message list updates instantly on the screen without requiring the component to run manual fetch loops.

### Best Practice
Wrap heavy mapping or computations inside the query callback passed to \`useLiveQuery\`. This ensures the processing runs alongside the database read query and only recalculates when the cache state changes.

### Common Mistakes
Writing database write operations (like \`db.table.put()\`) inside the \`useLiveQuery\` read function. This creates an infinite loop because writes trigger query reruns, which execute writes again, crashing the browser tab.

### Code Example
\`\`\`typescript
import React from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

// Setup database
const db = new Dexie('TodoDatabase') as any;
db.version(1).stores({
  todos: '++id, text'
});

export function TodoList() {
  // Reactive query: subscribes and updates on any table changes!
  const todos = useLiveQuery(
    () => db.todos.toArray()
  );

  const addTodo = async () => {
    await db.todos.add({ text: 'New Task' });
  };

  if (!todos) return <div>Loading cache...</div>;

  return (
    <div>
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লোকাল ডাটাবেজে ডাটা রাইট করার পর রিঅ্যাক্ট ইউআই রি-রেন্ডার করতে ম্যানুয়াল ফেচ লুপ চালানোর প্রয়োজন নেই:
১. **\`useLiveQuery\` হুক**:
   - এটি ডেক্সির অফিশিয়াল রিঅ্যাক্ট প্যাকেজ থেকে পাওয়া যায়।
   - কুয়েরি কলব্যাকের ভেতর কোন কোন টেবিল ব্যবহার হয়েছে তা এটি ট্র্যাক করে।
   - ওই টেবিলে যেকোনো ধরণের রাইট, আপডেট বা ডিলিট হলে এটি অটোমেটিক নতুন ডাটা ফেচ করে কম্পোনেন্ট আপডেট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেসেজিং অ্যাপে মেসেজ লিস্ট রেন্ডার করা হয়েছে:
- ইউআই হুক ডিক্লেয়ার করলো: \`useLiveQuery(() => db.messages.toArray())\`।
- ব্যাকগ্রাউন্ড সকেট কানেকশন দিয়ে নতুন মেসেজ এসে ডাটাবেজে রাইট হওয়া মাত্রই স্ক্রিনে নতুন চ্যাট চলে আসবে, কোনো ম্যানুয়াল রিলোড বাটনে চাপ দিতে হবে না।

### উত্তম অনুশীলন
ডাটা ফিল্টারিং বা জটিল ম্যাপিং কুয়েরি কলব্যাকের ভেতরেই সম্পন্ন করুন, যাতে ডাটাবেজ থেকে ডাটা রিটার্ন হওয়ার সময় ফিল্টারড ডাটা সরাসরি কম্পোনেন্টে আসে।

### সাধারণ ভুলসমূহ
\`useLiveQuery\` এর ভেতরের রিড ফাংশনে ভুলে ডাটাবেজ রাইট করার মেথড (যেমন: \`db.table.add\`) লিখে ফেলা। এর ফলে ইনফিনিট লুপ (Infinite Loop) তৈরি হয়ে ব্রাউজার হ্যাং করবে।

### Code Example
\`\`\`typescript
import React from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

// ডেটাবেজ সেটআপ
const db = new Dexie('TodoDatabase') as any;
db.version(1).stores({
  todos: '++id, text'
});

export function TodoList() {
  // রিয়্যাক্টিভ কুয়েরি: টেবিল এডিট হওয়া মাত্র আপডেট রেন্ডার করবে
  const todos = useLiveQuery(
    () => db.todos.toArray()
  );

  const addTodo = async () => {
    await db.todos.add({ text: 'New Task' });
  };

  if (!todos) return <div>Loading cache...</div>;

  return (
    <div>
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'other-topics-40',
    title: 'What are Docker Volumes, and how do they differ from Bind Mounts for database data persistence?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Docker', 'Docker Volumes', 'Bind Mounts', 'Database', 'Persistence'],
    enAnswer: 'Docker Volumes are managed entirely by Docker inside protected host folders, making them ideal for database persistence. Bind Mounts point directly to any directory on the host machine, ideal for local code sharing.',
    bnAnswer: 'ডকার ভলিউম সম্পূর্ণ ডকার দ্বারা হোস্ট পিসির প্রোটেক্টেড ফোল্ডারে নিয়ন্ত্রিত হয়, যা ডাটাবেজ ব্যাকআপের জন্য আদর্শ। আর বাইন্ড মাউন্ট হোস্ট পিসির যেকোনো ফোল্ডারের ডিরেক্ট পাথ পয়েন্ট করে, যা লোকাল কোড শেয়ারিংয়ে সেরা।',
    enExplanation: `### Explanation
Containers delete all file modifications upon restart. To persist database logs and asset files, you must mount storage:
1. **Docker Volumes**:
   - Stored in a directory managed by Docker on the host machine (e.g. \`/var/lib/docker/volumes/\`).
   - Highly secure: Non-docker processes cannot modify these folders.
   - Independent of host directory structures, ensuring portability.
2. **Bind Mounts**:
   - Maps a specific folder on your host machine (e.g. \`C:/projects/app/src\`) to a directory inside the container.
   - Subject to host file permissions and path differences, making them less portable.
   - Ideal for development setups to hot-reload local file changes inside the container.

### Real-World Example
- **Docker Volumes**: For a production PostgreSQL database, you mount a volume named \`db_data\`. If the database container is deleted and a new version is spun up, mounting \`db_data\` restores the database state immediately.
- **Bind Mounts**: During development, you map your local project folder to \`/app\` inside the container. When you edit \`App.tsx\` on VS Code, the change syncs instantly inside the container, triggering the hot-reload server.

### Best Practice
Always use named Docker Volumes for database engines (MongoDB, PostgreSQL) in production to ensure high performance and protect database folders from host OS file locks.

### Common Mistakes
Mounting local directories (Bind Mounts) with incorrect permissions for databases, causing database engines to crash on launch due to file lock restriction errors.

### Code Example
\`\`\`bash
# 1. Run container with a Named Docker Volume (Recommended for DBs)
$ docker run -d --name production-db -v pg_data:/var/lib/postgresql/data postgres:alpine

# 2. Run container with a Bind Mount (Recommended for local dev hot-reload)
$ docker run -d --name dev-server -v $(pwd)/src:/app/src -p 3000:3000 node:20-alpine
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কন্টেইনার ডিলিট বা রিস্টার্ট হলে সব লোকাল মডিফিকেশন মুছে যায়। ডাটা পারসিস্ট বা স্থায়ী রাখতে ডকারে মাউন্টিং সিস্টেম ব্যবহৃত হয়:
১. **Docker Volumes**:
   - ডকার সার্ভারের হোস্ট মেশিনে একটি প্রোটেক্টেড ফোল্ডারে এটি নিয়ন্ত্রণ করে (যেমন: \`/var/lib/docker/volumes/\`)।
   - এটি সিকিউর এবং হোস্ট পিসির বাইরের কোনো সফটওয়্যার ফাইল ডিলিট বা এডিট করতে পারে না।
   - ডাটাবেজ ব্যাকআপে এটি ব্যবহৃত হয়।
২. **Bind Mounts**:
   - ডেভেলপার হোস্ট পিসির ডিরেক্টরি (যেমন: \`C:/projects/app\`) কন্টেইনারের ভেতরে মাউন্ট করে দেয়।
   - ডেভেলপমেন্টের সময় কোড হট-রিলোড সক্রিয় রাখতে এটি ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
- **Docker Volumes**: প্রোডাকশনে PostgreSQL ডাটাবেজের ফাইল পারসিস্ট রাখতে \`db_data\` নামক ভলিউম মাউন্ট করলেন। ডাটাবেজ কন্টেইনার রিস্টার্ট বা ডিলিট হলেও ফাইলগুলো সংরক্ষিত থাকবে।
- **Bind Mounts**: লোকাল পিসিতে কোড এডিট করার সাথে সাথে কন্টেইনারে রিফ্লেক্ট করাতে লোকাল সোর্স ফোল্ডারটি মাউন্ট করলেন। কোড সেভ করা মাত্রই কন্টেইনারের নোড অ্যাপ হট-রিলোড নিবে।

### উত্তম অনুশীলন
প্রোডাকশন ডাটাবেজে ডকার ভলিউম ব্যবহার করুন এবং ডকার দিয়ে তার ব্যাকআপ নিয়ন্ত্রণ করুন। ডেভেলপমেন্ট কোড শেয়ারে বাইন্ড মাউন্ট ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ডাটাবেজ ইঞ্জিনগুলো রান করার সময় বাইন্ড মাউন্ট করা, যার ফলে উইন্ডোজ বা ম্যাকের ফাইল পারমিশন লক থাকার দরুন ডাটাবেজ রাইট এরর খেয়ে ক্র্যাশ করতে পারে।

### Code Example
\`\`\`bash
# ১. নেমড ডকার ভলিউম মাউন্ট করে কন্টেইনার রান (ডাটাবেজের জন্য রিকমেন্ডেড)
$ docker run -d --name production-db -v pg_data:/var/lib/postgresql/data postgres:alpine

# ২. বাইন্ড মাউন্ট ব্যবহার করে কন্টেইনার রান (লোকাল ডেভেলপমেন্টের জন্য সেরা)
$ docker run -d --name dev-server -v $(pwd)/src:/app/src -p 3000:3000 node:20-alpine
\`\`\``
  },
  {
    id: 'other-topics-41',
    title: 'Explain Nginx configuration rules for routing reverse proxy paths to multiple backend services.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Nginx', 'Reverse Proxy', 'Server Configuration', 'Load Balancing'],
    enAnswer: 'Configure Nginx routing by defining separate location blocks with proxy_pass directives. Nginx checks request path prefixes and forwards the request to the matching backend service address.',
    bnAnswer: 'Nginx রাউটিং কনফিগার করতে আলাদা আলাদা location ব্লকে proxy_pass ডিরেক্টিভ সেট করতে হয়। Nginx রিকোয়েস্ট পাথের প্রেফিক্স ম্যাচ করে নির্দিষ্ট ব্যাকএন্ড সার্ভিস অ্যাড্রেসে সেটি ফরোয়ার্ড করে।',
    enExplanation: `### Explanation
In microservice architectures, Nginx acts as a single API Gateway routing traffic to backend services based on URI paths:
1. **\`proxy_pass\` Directive**: Forwards the matched request to the specified backend URL (e.g. \`http://127.0.0.1:8080\`).
2. **Trailing Slashes (Critical Rule)**:
   - \`location /api/ { proxy_pass http://backend:5000; }\`: Fowards \`/api/users\` as \`/api/users\`.
   - \`location /api/ { proxy_pass http://backend:5000/; }\`: Strips the prefix and forwards \`/api/users\` as \`/users\`.
3. **Upstream Blocks**: Group multiple backend servers for simple load balancing.

### Real-World Example
In a SaaS dashboard:
- Visits to \`mycompany.com/\` are served static HTML from folder \`/var/www/dist\`.
- API calls to \`mycompany.com/api/v1/users\` are forwarded to the Auth Service container running on port \`8001\`.
- Calls to \`mycompany.com/api/v1/reports\` are forwarded to the Reporting Service container running on port \`8002\`.

### Best Practice
Set custom proxy headers (\`X-Real-IP\`, \`X-Forwarded-For\`, \`X-Forwarded-Proto\`) in your Nginx config. This ensures the backend services can read the client's actual IP address instead of seeing Nginx's local IP address.

### Common Mistakes
Forgetting the trailing slash rules in \`proxy_pass\`, causing backend route handlers to return 404 errors due to incorrect URL path forwards.

### Code Example
\`\`\`nginx
# /etc/nginx/sites-available/default
server {
    listen 80;
    server_name app.mybusiness.com;

    # Auth Service Reverse Proxy
    location /auth/ {
        proxy_pass http://auth_service:8080/; # Trailing slash strips '/auth/' from path
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Billing Service Reverse Proxy
    location /billing/ {
        proxy_pass http://billing_service:9090/; # Forward to billing container
        proxy_set_header Host $host;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাইক্রোসার্ভিস আর্কিটেকচারে Nginx একটি সিঙ্গেল এপিআই গেটওয়ে হিসেবে কাজ করে, যা পাথ প্যাটার্ন রিড করে নির্দিষ্ট ব্যাকএন্ড কন্টেইনারে ডাটা পাঠায়:
১. **\`proxy_pass\` ডিরেক্টিভ**: রিকোয়েস্ট ম্যাচ হলে ব্যাকএন্ডের ডিরেক্ট আইপি ও পোর্টে তা ফরোয়ার্ড করে।
২. **স্ল্যাশ (/) নিয়ম**:
   - \`proxy_pass http://backend:5000;\` (শেষে স্ল্যাশ নেই): পাথটি হুবহু রেখে ফরোয়ার্ড করে (যেমন: \`/api/users\` -> \`/api/users\`)।
   - \`proxy_pass http://backend:5000/;\` (শেষে স্ল্যাশ আছে): পাথ থেকে প্রেফিক্স ফিল্টার করে ফরোয়ার্ড করে (যেমন: \`/api/users\` -> \`/users\`)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফুল-স্ট্যাক প্রজেক্টে:
- হোম পেজ \`site.com/\` ওপেন করলে Nginx লোকাল ফোল্ডার থেকে রিয়্যাক্ট বিল্ড দেখায়।
- ইউজার সাইন আপ করতে গেলে \`site.com/auth/register\` পাথ ম্যাচ করে Nginx রিকোয়েস্টটি অথেনটিকেশন কন্টেইনারে (Port 8080) পাঠিয়ে দেয়।
- কার্ট এডিট করতে গেলে \`site.com/cart/add\` পাথ ম্যাচ করে শপিং কার্ট কন্টেইনারে (Port 9090) রিকোয়েস্ট পাঠিয়ে দেয়।

### উত্তম অনুশীলন
ব্যাকএন্ড সার্ভার যাতে ইউজারের রিয়েল আইপি অ্যাড্রেস দেখতে পারে, সেজন্য Nginx-এ কাস্টম প্রক্সি হেডার (যেমন: \`X-Real-IP\`, \`X-Forwarded-For\`) সেট করে দিন।

### সাধারণ ভুলসমূহ
\`proxy_pass\`-এর স্ল্যাশ কনফিগারেশনে ভুল করা, যার ফলে এপিআই ফরোয়ার্ডের সময় রুট পাথ নষ্ট হয়ে ৪০৪ এরর চলে আসে।

### Code Example
\`\`\`nginx
# /etc/nginx/sites-available/default
server {
    listen 80;
    server_name app.mybusiness.com;

    # অথেনটিকেশন সার্ভিস রিভার্স প্রক্সি
    location /auth/ {
        proxy_pass http://auth_service:8080/; # স্ল্যাশ থাকায় পাথ থেকে '/auth/' বাদ যাবে
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # বিলিং সার্ভিস রিভার্স প্রক্সি
    location /billing/ {
        proxy_pass http://billing_service:9090/;
        proxy_set_header Host $host;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-42',
    title: 'How do you configure load balancing in Nginx, and what are the main load balancing algorithms?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Nginx', 'Load Balancing', 'Scalability', 'Backend Architecture'],
    enAnswer: 'Configure load balancing in Nginx using upstream blocks containing lists of backend servers. The main algorithms are Round Robin (default sequential), Least Connections (routes to least busy server), and IP Hash (binds user IP to specific server).',
    bnAnswer: 'Nginx-এ লোড ব্যালেন্সিং সেটআপ করতে upstream ব্লকের ভেতর ব্যাকএন্ড সার্ভারগুলোর তালিকা দিতে হয়। প্রধান অ্যালগরিদমগুলো হলো Round Robin (ক্রমানুসারে), Least Connections (কম ব্যস্ত সার্ভারে) এবং IP Hash (ইউজার আইপি নির্দিষ্ট সার্ভারে লক রাখতে)।',
    enExplanation: `### Explanation
When web traffic exceeds the capability of a single server container, you must scale horizontally by running multiple identical servers and distributing requests:
1. **Round Robin (Default)**: Requests are distributed sequentially and evenly across the listed backend servers.
2. **Least Connections (\`least_conn\`)**: Directs the request to the server with the lowest number of active connections. Ideal for long-running requests.
3. **IP Hash (\`ip_hash\`)**: Uses a hash function to map the user's IP to a specific backend server. Enforces session persistence.
4. **Weighted Distribution**: You can assign priority weights (e.g. \`server srv1 weight=3\`) to direct more traffic to higher-spec machines.

### Real-World Example
In a high-traffic banking system:
- User logins must stay on the same server to preserve local memory sessions. You configure \`ip_hash\`.
- For generating heavy reports, you route requests using \`least_conn\` to ensure the server currently crunching a PDF doesn't receive new processing loads.

### Best Practice
Always set up health checks or backup parameters (e.g. \`max_fails=3 fail_timeout=30s\`) in your upstream server definitions so Nginx automatically stops routing traffic to a crashed backend container.

### Common Mistakes
Using default Round Robin when your application relies on local server memory sessions. If user A's login session is saved on Server 1, and the next click is balanced to Server 2, they will be logged out instantly. Use Redis for shared sessions or configure \`ip_hash\`.

### Code Example
\`\`\`nginx
# Define upstream server pool for load balancing
upstream api_servers {
    # Least Connections algorithm
    least_conn;

    server backend-srv1.com:5000 weight=3; # Higher specs, takes more requests
    server backend-srv2.com:5000;
    server backend-srv3.com:5000 backup;  # Used only when others are down
}

server {
    listen 80;
    server_name api.myservice.com;

    location / {
        # Route to the upstream pool
        proxy_pass http://api_servers;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভারের ওপর ট্রাফিক বাড়লে পারফরম্যান্স সচল রাখতে একই অ্যাপের একাধিক কন্টেইনার বিভিন্ন সার্ভারে রান করে লোড ভাগ করে দেওয়া হয়:
১. **Round Robin (ডিফল্ট)**: এটি ক্রমানুসারে সমভাবে সব সার্ভারে একটির পর একটি রিকোয়েস্ট পাঠায়।
২. **Least Connections (\`least_conn\`)**: যে সার্ভারে বর্তমানে একটিভ কানেকশন সবচেয়ে কম, রিকোয়েস্টটি সেখানে পাঠায়।
৩. **IP Hash (\`ip_hash\`)**: ক্লায়েন্টের আইপি অ্যাড্রেস হ্যাশ করে তাকে একটি নির্দিষ্ট সার্ভারের সাথে লক করে দেয়, যা সেশন সচল রাখতে সাহায্য করে।
৪. **Weighted (ওয়েট ডিস্ট্রিবিউশন)**: যে সার্ভারের র‍্যাম/সিপিইউ বেশি, তাতে \`weight\` বাড়িয়ে বেশি পারসেন্টেজ ট্রাফিক পাঠানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গেম ড্যাশবোর্ডে:
- ইউজারের লগইন সেশন একটি নির্দিষ্ট হোস্টে টিকিয়ে রাখতে আমরা \`ip_hash\` ব্যবহার করি।
- কোনো ভারী পিডিএফ বা রিপোর্ট জেনারেট করার কাজে আমরা \`least_conn\` ব্যবহার করি যাতে লোড ফ্রি সার্ভার কাজ শেষ করতে পারে।

### উত্তম অনুশীলন
আপস্ট্রিম সার্ভার ডিক্লেয়ার করার সময় \`max_fails\` ও \`fail_timeout\` সেট করে দিন যাতে কোনো সার্ভার ক্র্যাশ করলে Nginx সেখানে ট্রাফিক পাঠানো বন্ধ করে ব্যাকআপ সার্ভার সচল করে।

### সাধারণ ভুলসমূহ
লোকাল মেমোরি সেশন ব্যবহার করা সত্ত্বেও ডিফল্ট রাউন্ড রবিন অ্যালগরিদম সচল রাখা। এর ফলে প্রতি ক্লিকের সাথে ইউজারের রিকোয়েস্ট ভিন্ন সার্ভারে গিয়ে সেশন না পেয়ে ইউজার লগআউট হয়ে যাবে।

### Code Example
\`\`\`nginx
# লোড ব্যালেন্সিংয়ের জন্য ব্যাকএন্ড সার্ভার পুল
upstream api_servers {
    # কম কানেকশন থাকা সার্ভারকে প্রায়োরিটি দিবে
    least_conn;

    server backend-srv1.com:5000 weight=3; # এটি ভারী প্রসেসরযুক্ত সার্ভার
    server backend-srv2.com:5000;
    server backend-srv3.com:5000 backup;  # অন্য সব ক্র্যাশ করলে এটি চালু হবে
}

server {
    listen 80;
    server_name api.myservice.com;

    location / {
        # আপস্ট্রিম পুলে রাউট করা হচ্ছে
        proxy_pass http://api_servers;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-43',
    title: 'Explain the difference between environment variables and PATH configurations in Linux.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Linux', 'Environment Variables', 'PATH', 'System Configuration', 'CLI'],
    enAnswer: 'Environment Variables are key-value string configurations readable by processes (e.g. database credentials). The PATH variable is a special system environment variable containing a list of directories where Linux looks for executable commands.',
    bnAnswer: 'এনভায়রনমেন্ট ভেরিয়েবল (Environment Variables) হলো কী-ভ্যালু পেয়ার যা প্রসেসগুলো রিড করতে পারে (যেমন: ডাটাবেজ পাসওয়ার্ড)। আর PATH হলো একটি বিশেষ সিস্টেম ভেরিয়েবল যার ভেতর এগজিকিউটেবল কম্যান্ড ফাইলগুলোর ডিরেক্টরি লিস্ট সেভ করা থাকে।',
    enExplanation: `### Explanation
1. **Environment Variables**:
   - Variables globally accessible by running processes inside the terminal session.
   - Examples: \`NODE_ENV=production\`, \`PORT=5000\`.
   - Viewed using the \`printenv\` or \`echo $VARIABLE_NAME\` commands.
2. **PATH Configuration**:
   - A specific environment variable: \`PATH=/usr/bin:/bin:/usr/local/bin\`.
   - When you type a command (like \`node\` or \`git\`) in the terminal, Linux does not search the entire disk. It scans the directories listed in the \`PATH\` variable from left to right.
   - If the executable file is found in one of these directories, it runs; otherwise, it throws a "command not found" error.

### Real-World Example
When you install Node.js:
- The installer places the \`node\` binary in \`/usr/local/bin/node\`.
- Because \`/usr/local/bin\` is inside your system's \`PATH\` variable, you can type \`node\` anywhere in the terminal and it runs.
- If you install a custom tool in \`/home/user/my-tools/run\`, typing \`run\` will fail until you append \`/home/user/my-tools\` to your system \`PATH\`: \`export PATH=$PATH:/home/user/my-tools\`.

### Best Practice
Never overwrite the PATH variable entirely (e.g., doing \`export PATH=/my/path\`). Always append to the existing path using \`export PATH=$PATH:/new/path\` to avoid breaking standard shell commands like \`ls\` or \`cd\`.

### Common Mistakes
Configuring temporary variables in the terminal session and expecting them to persist after closing the ssh window. Always save persistent variables inside \`.bashrc\` or \`.profile\` files.

### Code Example
\`\`\`bash
# 1. Print all environment variables
$ printenv

# 2. View current PATH setup
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin

# 3. Temporarily append a new directory to the PATH
$ export PATH=$PATH:/opt/node/bin

# 4. Save permanently in bash profile
$ echo 'export PATH=$PATH:/opt/node/bin' >> ~/.bashrc
$ source ~/.bashrc
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
১. **এনভায়রনমেন্ট ভেরিয়েবল (Environment Variables)**:
   - টার্মিনাল সেশনে সচল থাকা বিভিন্ন অ্যাপ্লিকেশন ও প্রসেসের জন্য গ্লোবাল ভেরিয়েবল।
   - যেমন: \`PORT=5000\`, \`DB_URL=mongodb://...\`।
   - \`printenv\` কম্যান্ড দিয়ে সব এনভায়রনমেন্ট ভেরিয়েবল দেখতে পাওয়া যায়।
২. **PATH কনফিগারেশন**:
   - এটি একটি বিশেষ সিস্টেম এনভায়রনমেন্ট ভেরিয়েবল।
   - আপনি যখন টার্মিনালে কোনো কম্যান্ড (যেমন: \`npm\` বা \`git\`) টাইপ করেন, লিনাক্স পুরো হার্ডডিস্ক খোঁজার পরিবর্তে এই \`PATH\`-এ ডিফাইন করা ফোল্ডারগুলো চেক করে। রানার ফাইলটি সেখানে পেলে কমান্ড রান হয়, নয়তো "command not found" দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি নোড জেএস ইনস্টল করলেন:
- নোডের মেইন রানার ফাইলটি \`/usr/local/bin/node\` ফোল্ডারে সেভ হলো।
- যেহেতু \`/usr/local/bin\` অলরেডি লিনাক্স সিস্টেমের \`PATH\` ভেরিয়েবলে লিস্ট করা থাকে, তাই আপনি টার্মিনালের যেকোনো ফোল্ডার থেকে \`node\` টাইপ করলেই নোড রান হয়ে যায়।
- আপনি যদি কাস্টম একটি সফটওয়্যার \`/home/my-tools/run\` ফোল্ডারে রাখেন, তবে টার্মিনালে \`run\` লিখলে কাজ করবে না যতক্ষণ না আপনি \`export PATH=$PATH:/home/my-tools\` লিখে ডিরেক্টরি সেট করে দিচ্ছেন।

### উত্তম অনুশীলন
কখনো নতুন ডিরেক্টরি যুক্ত করার সময় আগের পাথ মুছে ফেলবেন না (যেমন: \`export PATH=/my/path\`)। সবসময় আগেরটি বজায় রেখে শেষে নতুন ডিরেক্টরি অ্যাপেন্ড করুন: \`export PATH=$PATH:/new/path\`।

### সাধারণ ভুলসমূহ
টার্মিনালে সরাসরি রান করা ভেরিয়েবল চিরস্থায়ী মনে করা। টার্মিনাল উন্ডো বন্ধ করলে এটি মুছে যায়, স্থায়ী করতে ডিরেক্টরি কনফিগারেশনটি \`~/.bashrc\` ফাইলে লিখে রাখতে হবে।

### Code Example
\`\`\`bash
# ১. সব এনভায়রনমেন্ট ভেরিয়েবল দেখতে:
$ printenv

# ২. বর্তমান PATH ভেরিয়েবল দেখতে:
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin

# ৩. সাময়িকভাবে নতুন পাথ যুক্ত করা:
$ export PATH=$PATH:/opt/node/bin

# ৪. স্থায়ীভাবে bash ফাইলে কনফিগ সেভ করা:
$ echo 'export PATH=$PATH:/opt/node/bin' >> ~/.bashrc
$ source ~/.bashrc
\`\`\``
  },
  {
    id: 'other-topics-44',
    title: 'What is a Linux service daemon, and how do you manage them using systemctl command lines?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Linux', 'systemctl', 'Systemd', 'Daemon', 'Server Operations'],
    enAnswer: 'A daemon is a background process managed by systemd in Linux. You control these services using systemctl commands like start (launch), stop (halt), enable (boot on startup), and status (check diagnostics).',
    bnAnswer: 'ডেমন (Daemon) হলো লিনাক্সে ব্যাকগ্রাউন্ডে সচল থাকা সার্ভিস যা systemd দ্বারা নিয়ন্ত্রিত হয়। এগুলো ম্যানেজ করতে systemctl-এর start, stop, enable এবং status কমান্ড ব্যবহার করা হয়।',
    enExplanation: `### Explanation
A daemon is a utility process that runs continuously in the background, listening for requests or performing periodic checks:
1. **Systemd**: The system initialization manager in Linux that starts and monitors daemons.
2. **\`systemctl\` CLI**: The command interface used to interact with systemd:
   - \`systemctl start [service]\`: Boots the service instantly.
   - \`systemctl stop [service]\`: Gracefully stops the service.
   - \`systemctl enable [service]\`: Configures the service to launch automatically whenever the server boots.
   - \`systemctl status [service]\`: Displays diagnostic states, process IDs, and recent logs.

### Real-World Example
When hosting a production Express app, running \`node index.js\` inside an SSH terminal stops the app the moment you close the terminal window. To solve this, you wrap the app in a systemd service file (e.g. \`myapp.service\`). Now, systemd runs Node.js as a daemon. Typing \`sudo systemctl start myapp\` boots it, and \`sudo systemctl enable myapp\` ensures the app starts automatically if the server reboots.

### Best Practice
Configure your daemon service files to automatically restart on failures (\`Restart=on-failure\`) and set maximum memory limits to prevent memory leaks from crashing the host machine OS.

### Common Mistakes
Running application daemon processes directly as the \`root\` user, which gives hackers complete control over the entire system if they compromise the node app. Always create and use a dedicated low-privilege user (like \`node\` or \`www-data\`).

### Code Example
\`\`\`ini
# Example Systemd Service Configuration File (/etc/systemd/system/nodeapp.service)
[Unit]
Description=Node Express Production Server
After=network.target

[Service]
Type=simple
User=node-user
WorkingDirectory=/var/www/node-app
ExecStart=/usr/bin/node src/index.js
Restart=on-failure
Environment=NODE_ENV=production PORT=3000

[Install]
WantedBy=multi-user.target

# Terminal commands to manage the daemon:
# $ sudo systemctl daemon-reload
# $ sudo systemctl start nodeapp
# $ sudo systemctl enable nodeapp
# $ sudo systemctl status nodeapp
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিনাক্সে ডেমন (Daemon) হলো ব্যাকগ্রাউন্ড প্রসেস যা কোনো ইউজার ইন্টারঅ্যাকশন ছাড়াই নীরবে কাজ করে যায়:
১. **Systemd**: লিনাক্সের প্রধান সিস্টেম ম্যানেজার যা এই ব্যাকগ্রাউন্ড প্রসেসগুলোকে কনফিগার ও তদারকি করে।
২. **\`systemctl\`**: ডেমনের সাথে যোগাযোগ করার টার্মিনাল কমান্ড:
   - \`start\`: কন্টেইনার বা সার্ভিস ইনস্ট্যান্ট রান করায়।
   - \`stop\`: সার্ভিস অফ করে।
   - \`enable\`: সার্ভার রিস্টার্ট হলে এটি নিজে নিজে বুট হবে এমন সেটিংস অন করে।
   - \`status\`: এরর ডায়াগনস্টিক ও রানিং লগ দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারে নোড জেএস অ্যাপ রান করার সময় টার্মিনাল ক্লোজ করলেই নোড প্রসেস অফ হয়ে যায়। এই সমস্যা এড়াতে প্রজেক্টটিকে systemd সার্ভিস ফাইলে (যেমন: \`myapp.service\`) রূপান্তর করা হয়। এরপর নোড অ্যাপটি ডেমন হিসেবে লিনাক্স ব্যাকগ্রাউন্ডে সেট হয়ে যায়। \`sudo systemctl enable myapp\` লিখে রাখলে পাওয়ার বিভ্রাটের কারণে সার্ভার অটো-রিস্টার্ট নিলেও নোড অ্যাপ ব্যাকগ্রাউন্ডে নিজে থেকেই রান হয়ে যাবে।

### উত্তম অনুশীলন
সার্ভিস ফাইলে অবশ্যই অটো-রিস্টার্ট সচল রাখুন (\`Restart=on-failure\`) যাতে কোনো কারণে এপিআই এরর খেয়ে ক্র্যাশ করলেও লিনাক্স সাথে সাথে প্রসেসটি পুনরায় চালু করে দেয়।

### সাধারণ ভুলসমূহ
নোড সার্ভিস ফাইলটি \`root\` প্রিভিলেজ দিয়ে রান করানো। এর ফলে হ্যাকাররা অ্যাপের কোড কোনোভাবে হ্যাক করতে পারলে সম্পূর্ণ অপারেটিং সিস্টেমের কন্ট্রোল পেয়ে যাবে।

### Code Example
\`\`\`ini
# সিস্টেমডি সার্ভিস ফাইলের উদাহরণ (/etc/systemd/system/nodeapp.service)
[Unit]
Description=Node Express Production Server
After=network.target

[Service]
Type=simple
User=node-user
WorkingDirectory=/var/www/node-app
ExecStart=/usr/bin/node src/index.js
Restart=on-failure
Environment=NODE_ENV=production PORT=3000

[Install]
WantedBy=multi-user.target

# ডেমন প্রসেস ম্যানেজ করার কম্যান্ডসমূহ:
# $ sudo systemctl daemon-reload
# $ sudo systemctl start nodeapp
# $ sudo systemctl enable nodeapp
# $ sudo systemctl status nodeapp
\`\`\``
  },
  {
    id: 'other-topics-45',
    title: 'Explain the difference between git merge --squash and git rebase --interactive.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Git', 'git squash', 'git rebase', 'Git History', 'Workflow'],
    enAnswer: 'git merge --squash combines all commits from a feature branch into a single commit on the destination branch, keeping main clean. git rebase -i lets you rewrite, edit, squash, or delete commits in your branch before merging.',
    bnAnswer: 'git merge --squash ফিচারের সব কমিটকে একসাথে ঘনীভূত করে টার্গেট ব্রাঞ্চে একটিমাত্র নতুন মার্জ কমিট হিসেবে যোগ করে। আর git rebase -i মার্জ করার পূর্বে আপনার ব্রাঞ্চের কমিটগুলোকে এডিট, রিনেম বা মুছে ফেলার সুবিধা দেয়।',
    enExplanation: `### Explanation
Both features clean up dirty commit histories (e.g. lots of "fix typo", "test build" logs) before merging code:
1. **\`git merge --squash\`**:
   - Performs a merge but does not create a merge commit pointing to two histories.
   - It takes the total code difference of the feature branch, puts it on the target branch as a staged file change, and asks you to make one commit.
   - **Result**: The feature branch timeline is ignored on the target branch.
2. **\`git rebase -i\` (Interactive Rebase)**:
   - Launches a text editor showing a list of commits.
   - You can choose to \`pick\` (keep), \`reword\` (edit commit message), \`squash\` (merge commits together), or \`drop\` (delete commit entirely).
   - Allows fine-grained control over local history before sharing it.

### Real-World Example
While building a dashboard, you made 15 commits containing syntax fixes.
- If you use \`git merge --squash main\` inside the PR, only one commit "Add dashboard widgets" is merged to main, keeping the main timeline clean.
- If you run \`git rebase -i HEAD~15\`, you can combine those 15 messy commits into 3 structured logical commits ("Add schema", "Build UI", "Add unit tests") before pushing.

### Best Practice
Use \`rebase -i\` locally to tidy your branch during sprints. Use \`squash merge\` at the GitHub Pull Request level to merge features into the main branch as a single transactional update.

### Common Mistakes
Squashing commits that contain unrelated changes (e.g., mixing database upgrades with button CSS changes) into a single commit, which makes hotfix rollbacks difficult.

### Code Example
\`\`\`bash
# 1. Start interactive rebase for the last 5 commits
$ git rebase -i HEAD~5

# A text editor opens:
# pick a1b2c3d Add analytics API
# squash f4e5d6c fix typo in logger
# squash g7h8i9j print debug logs
# reword k1l2m3n build dashboard layout
#
# (After saving, git squashes commits 2 and 3 into commit 1 and renames commit 4)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কাজের সময় হওয়া অতিরিক্ত এলোমেলো কমিট হিস্ট্রি মার্জ করার আগে গুছিয়ে নিতে দুটি কমান্ডই কাজে লাগে:
১. **\`git merge --squash\`**:
   - এটি ফিচার ব্রাঞ্চের সমস্ত কাজকে একত্র করে ওয়ান-শট ফাইল চেঞ্জ আকারে টার্গেট ব্রাঞ্চে স্টেজিং ফাইলে বসায়।
   - এটি মূলত ফিচার ব্রাঞ্চের আলাদা কোনো শাখা হিস্ট্রিতে দেখায় না, মেইন ব্রাঞ্চে মাত্র ১টি কমিট তৈরি হয়।
২. **\`git rebase -i\` (ইন্টারেক্টিভ রিবেস)**:
   - এটি একটি এডিটর ওপেন করে যেখানে প্রতিটি কমিটের কমান্ড লিস্ট দেওয়া থাকে।
   - ডেভেলপার যেকোনো কমিটকে \`pick\` (রাখতে), \`reword\` (নাম বদলাতে), \`squash\` (কমিট মার্জ করতে) অথবা \`drop\` (মুছে ফেলতে) পারেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেজ ডেভেলপমেন্টের সময় আপনি ১৫টি ছোট ছোট সেভ কমিট দিলেন ("fix syntax", "test button")।
- **Squash Merge**: মার্জ করার সময় আপনি সব কাজ গুটিয়ে "Add User Settings page" নামে মাত্র ১টি ক্লিন কমিট মেইন ব্রাঞ্চে মার্জ করলেন।
- **Interactive Rebase**: কোড পুশ করার আগেই লোকাল পিসিতে রিবেস রান করে ১৫টি কমিটকে ৩টি সাজানো কমিটে রূপান্তর করলেন ("Setup schema", "Design UI", "Write tests")।

### উত্তম অনুশীলন
লোকাল ব্রাঞ্চ গুছাতে \`rebase -i\` ব্যবহার করুন। আর পুল রিকোয়েস্ট মার্জ করার সময় গিটহাব প্যানেলে \`Squash and Merge\` সিলেক্ট করুন যাতে মেইন ব্রাঞ্চ ট্র্যাকিং ফাস্ট থাকে।

### সাধারণ ভুলসমূহ
সম্পূর্ণ সম্পর্কহীন ২টি কাজকে একসাথে স্কোয়াশ করে ফেলা, যা পরবর্তীতে বাগ দেখা দিলে রোলব্যাক করা জটিল করে তোলে।

### Code Example
\`\`\`bash
# ১. শেষ ৫টি কমিটের ওপর ইন্টারেক্টিভ রিবেস চালানো
$ git rebase -i HEAD~5

# টার্মিনালে এডিটর ওপেন হবে:
# pick a1b2c3d Add analytics API
# squash f4e5d6c fix typo in logger
# squash g7h8i9j print debug logs
# reword k1l2m3n build dashboard layout
#
# (সেভ করলে ২ ও ৩ নম্বর কমিট ১ নম্বরে মার্জ হবে এবং ৪ নম্বরের নাম রি-নেম হবে)
\`\`\``
  },
  {
    id: 'other-topics-46',
    title: 'How do you configure GitHub Actions secrets to store and run deployments securely?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['GitHub Actions', 'Secrets', 'Security', 'CI/CD', 'Environment Variables'],
    enAnswer: 'Configure secrets in GitHub settings under Secrets and Variables -> Actions. You reference these encrypted secrets inside your workflow YAML file using the secrets context: ${{ secrets.SECRET_NAME }}.',
    bnAnswer: 'গিটহাবের Settings -> Secrets and Variables -> Actions অপশনে সিক্রেট সেভ করতে হয়। এই এনক্রিপ্টেড ডাটাগুলো ওয়ার্কফ্লো ফাইলে ${{ secrets.SECRET_NAME }} ফরম্যাটে রিড করা হয়।',
    enExplanation: `### Explanation
Deploying applications requires private credentials (like SSH keys, AWS access tokens, or database URLs). Hardcoding these in a public \`main.yml\` file exposes them to the internet:
1. **GitHub Secrets**:
   - GitHub encrypts secrets using public-key cryptography.
   - Once saved in repository settings, secrets cannot be viewed by developers; they can only be updated or deleted.
2. **Access in Workflow**:
   - Passed during execution using the expression syntax: \`\${{ secrets.MY_SECRET }}\`.
   - The runner decrypts these values in memory during execution and automatically masks them (showing \`***\`) in build console logs.

### Real-World Example
In a pipeline deploying to AWS:
- Save \`AWS_ACCESS_KEY_ID\` in GitHub Settings -> Secrets.
- In the workflow YAML file, pass the key to the AWS CLI setup action.
- When the job runs, it logs in securely. If the build log tries to print the key, GitHub masks it with stars, protecting it from exposure.

### Best Practice
Never echo secrets to console log files or output folders inside run scripts. Use the principle of least privilege, creating deployment-only API tokens on your servers instead of root access keys.

### Common Mistakes
Accidentally committing \`.env\` configuration files containing secrets to the git repository history, which exposes secrets even if they are later deleted. Always add \`.env\` to \`.gitignore\`.

### Code Example
\`\`\`yaml
# .github/workflows/deploy.yml
name: Production Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      # Log in to Docker Registry using repository secrets securely
      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোড ডেপ্লয় করার জন্য ডাটাবেজ পাসওয়ার্ড বা সার্ভারের এসএসএইচ (SSH) কী প্রয়োজন হয়। এগুলো ভুলবশত গিটহাব ফাইলে লিখে পুশ করলে প্রোজেক্ট হ্যাক হতে পারে:
১. **GitHub Secrets**:
   - এটি গিটহাব রেপোজিটরির সেটিংসে সেভ করা এনক্রিপ্টেড কী-ভ্যালু স্টোর।
   - একবার সেভ করার পর কোনো ডেভেলপার এর আসল টেক্সট দেখতে পারেন না, শুধু ডিলিট বা আপডেট করতে পারেন।
২. **ওয়ার্কফ্লোতে অ্যাক্সেস**:
   - ফাইলে ব্যবহারের নিয়ম: \`\${{ secrets.MY_SECRET }}\`।
   - গিটহাব রানার মেমোরিতে এটি রিড করার সময় কনসোল লগে এর ভ্যালু স্টার (\`***\`) দিয়ে মাস্ক বা লুকিয়ে রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
ডকার হাবে ইমেজ পুশ করতে হবে:
- আপনি গিটহাব সেটিংসে গিয়ে \`DOCKER_PASSWORD\` নামে পাসওয়ার্ড সেভ করে রাখলেন।
- YAML ফাইলে পাসওয়ার্ড প্রোপার্টিতে সিক্রেট কী-টি পয়েন্ট করলেন।
- রানার যখন ডকার লগইন স্ক্রিপ্ট এক্সিকিউট করবে, তখন সে ডাটাবেজ থেকে সিক্রেট রিড করবে কিন্তু বিল্ড লগে পাসওয়ার্ডের জায়গায় ডিরেক্ট স্টার প্রিন্ট করে রাখবে।

### উত্তম অনুশীলন
কখনো রান স্ক্রিপ্টের ভেতর ইকো (\`echo\`) কম্যান্ড লিখে সিক্রেট প্রিন্ট করবেন না। এছাড়া রুট পাসওয়ার্ড ব্যবহার না করে শুধুমাত্র ডেপ্লয়মেন্টের জন্য তৈরি কাস্টম লিমিটেড কী ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভুল করে প্রোজেক্টের ভেতরের \`.env\` ফাইলটি গিটে পুশ করে দেওয়া, যার ফলে গিট হিস্ট্রিতে সিক্রেটগুলো থেকে যায়। প্রজেক্ট তৈরির শুরুতেই \`.gitignore\` ফাইলের ভেতর \`.env\` পাথ লিখে রাখুন।

### Code Example
\`\`\`yaml
# .github/workflows/deploy.yml
name: Production Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      # সিক্রেট ব্যবহার করে ডকার রেজিষ্ট্রিতে লগইন
      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
\`\`\``
  },
  {
    id: 'other-topics-47',
    title: 'How do you upload Webpack or Vite source maps to Sentry, and why is this necessary?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Sentry', 'Vite', 'Webpack', 'Source Maps', 'DevOps'],
    enAnswer: 'Upload source maps to Sentry using bundler plugins (like @sentry/vite-plugin or webpack-plugin) during production compilation. This is necessary to translate minified, unreadable crash logs into readable TypeScript/JavaScript source code locations.',
    bnAnswer: 'প্রোডাকশন বিল্ডের সময় বান্ডলার প্লাগইন (যেমন: @sentry/vite-plugin) দিয়ে সোর্স ম্যাপ সেন্ট্রিতে আপলোড করতে হয়। এটি মিনিফাইড কোডের এররকে মূল রিডেবল কোড লাইনে রূপান্তর করার জন্য আবশ্যক।',
    enExplanation: `### Explanation
Production compilers (Vite, Webpack) uglify and minify javascript code to reduce file sizes (converting functions to letters like \`a.b()\`).
- **The Problem**: When a crash occurs, the browser reports the error at \`index-min.js:1:34005\`. This stack trace is useless for debugging.
- **Source Maps**: Files mapping every character of minified code back to the original source code lines.
- **Sentry Integration**:
  - Uploading source maps directly to Sentry allows Sentry to decrypt the crash report.
  - Sentry displays the exact TypeScript file and line of code where the error occurred, along with a code preview.
  - *Security*: Source maps should be uploaded to Sentry and then deleted from the public build output folder so users cannot view your source code.

### Real-World Example
In a React production site built with Vite:
- Without Source Maps, Sentry reports: \`Error inside chunk-98a.js at function t.z()\`.
- With Sentry Vite Plugin configured, Sentry intercepts the report, matches the source map, and displays: \`NullPointerException in src/components/CartList.tsx at line 58: const price = item.meta.price;\`.

### Best Practice
Set up Sentry plugins to automatically delete local \`.map\` files from the \`/dist\` directory after uploading them to Sentry, preventing clients from reverse-engineering your source code.

### Common Mistakes
Leaving source maps publicly hosted on the production web server, which exposes the entire original code structure to anyone inspecting the site.

### Code Example
\`\`\`typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // 1. Enable automated source map uploads during build
    sentryVitePlugin({
      org: "my-organisation",
      project: "react-web-app",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true, // 2. Generate source map files for Sentry plugin to upload
  },
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশন কম্পাইলাররা (Vite, Webpack) ফাইলের সাইজ কমাতে কোডকে মিনিফাই বা হিজিবিজি কোডে রূপান্তর করে (যেমন: সব ফাংশন \`a()\` বা \`b()\` হয়ে যায়)।
- **সমস্যা**: এর ফলে কোনো এরর হলে ব্রাউজার দেখাবে এররটি ঘটেছে \`dist-min.js\` ফাইলের ১ নম্বর লাইনের ৩৪০৫ ক্যারেক্টারে, যা পড়ে বাগ ডিবাগ করা অসম্ভব।
- **সোর্স ম্যাপ (Source Maps)**: এই ফাইলটি মিনিফাইড কোডের কোন অংশটি আপনার আসল ফাইলের কত নম্বর লাইন ছিল তার ম্যাপ ধরে রাখে।
- **সেন্ট্রি ইন্টিগ্রেশন**: সোর্স ম্যাপ সেন্ট্রিতে আপলোড করে দিলে সেন্ট্রি সেই এরর রিপোর্ট ডিক্রিপ্ট করে আসল ফাইলের নাম ও এরর ঘটা নির্দিষ্ট লাইন প্রজেক্টের ভিউয়ারে শো করে।

### বাস্তব-ভিত্তিক উদাহরণ
সোর্স ম্যাপ ছাড়া সেন্ট্রি রিপোর্ট দেখাবে: \`Error in function t() inside main.js\`। আর সোর্স ম্যাপ সচল থাকলে সেন্ট্রি ম্যাপের সাথে মিলিয়ে ডিরেক্ট ইউআইতে ফাইল শো করবে: \`Error in src/components/Cart.tsx line 58: const total = price.value;\`।

### উত্তম অনুশীলন
সেন্ট্রিতে সোর্স ম্যাপ আপলোড সম্পন্ন হওয়ার পর লোকাল বিল্ড ডিরেক্টরি (\`/dist\`) থেকে ম্যাপ ফাইলগুলো ডিলিট করে দিন, যাতে ভিজিটররা আপনার সোর্স কোড ডাউনলোড করতে না পারেন।

### সাধারণ ভুলসমূহ
সোর্স ম্যাপ ফাইলগুলো প্রোডাকশন সার্ভারে ওপেন রেখে দেওয়া। এর ফলে যেকেউ ব্রাউজার কনসোলে আপনার সম্পূর্ণ প্রোজেক্টের সোর্স কোড রিস্টোর করে দেখতে পারবে।

### Code Example
\`\`\`typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // ১. বিল্ড রান হওয়ার সময় অটোমেটিক সোর্স ম্যাপ আপলোড করবে
    sentryVitePlugin({
      org: "my-organisation",
      project: "react-web-app",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true, // ২. সোর্স ম্যাপ জেনারেট সক্রিয় করা হলো
  },
});
\`\`\``
  },
  {
    id: 'other-topics-48',
    title: 'Explain Figma developer inspection parameters (Spacing, Colors, Typography) and how they translate to Tailwind CSS.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Figma', 'Tailwind CSS', 'Design Tokens', 'Dev Handoff'],
    enAnswer: 'Translate Figma specs to Tailwind by mapping Figma spacing values to padding/margin utility classes, color hex values to custom Tailwind color themes, and font specs to typography configurations.',
    bnAnswer: 'ফিজমা পরিমাপগুলোকে টেইলউইন্ডে রূপান্তর করতে স্পেসিং ভ্যালুগুলোকে প্যাডিং/মার্জিন ক্লাসে, কালার হেক্স কোডগুলোকে টেইলউইন্ড কালার থিমে এবং ফন্ট স্পেসগুলোকে টাইপোগ্রাফি ফাইলে ম্যাপ করতে হয়।',
    enExplanation: `### Explanation
Figma layouts define design tokens that should be translated to utility classes instead of hardcoded values:
1. **Spacing (Margins/Padding)**:
   - Figma defines gaps in pixels.
   - In Tailwind, spacing is in \`rem\` units (1 unit = 0.25rem = 4px).
   - *Translation*: A Figma padding of \`16px\` translates to Tailwind's \`p-4\` (16 / 4 = 4).
2. **Colors**:
   - Figma displays hex values (e.g. \`#6366F1\`).
   - *Translation*: Register hex values under \`theme.extend.colors\` in \`tailwind.config.js\` as semantic classes (e.g. \`bg-primary\`).
3. **Typography**:
   - Figma shows \`font-size: 24px\`, \`line-height: 32px\`, \`font-weight: 700\`.
   - *Translation*: Map to Tailwind text classes: \`text-2xl font-bold\` (\`2xl\` is 1.5rem/24px with 2rem/32px line-height).

### Real-World Example
In a mock card design:
- Figma shows a card has \`24px\` border radius, \`#1E293B\` background, and \`32px\` internal padding.
- Instead of writing inline styles: \`style={{ padding: '32px', borderRadius: '24px', backgroundColor: '#1E293B' }}\`, you map these to Tailwind utility classes: \`p-8 bg-slate-800 rounded-3xl\`, creating clean and maintainable code.

### Best Practice
Create a shared design tokens sheet. Configure Tailwind configurations (\`tailwind.config.js\`) to contain custom colors and typography configurations matching the Figma design system names to prevent layout mismatches.

### Common Mistakes
Hardcoding exact pixel values from Figma into static inline CSS, which breaks responsiveness on mobile viewports. Always translate to Tailwind relative scaling units.

### Code Example
\`\`\`javascript
// tailwind.config.js
// Map Figma Design Tokens to Tailwind Config
module.exports = {
  theme: {
    extend: {
      colors: {
        // Figma brand primary color: #6366F1
        primary: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
        }
      },
      borderRadius: {
        // Figma border-radius: 24px
        'card': '1.5rem',
      }
    },
  },
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফিজমার পিক্সেল ভ্যালুগুলোকে সরাসরি কোড ফাইলে বসানোর চেয়ে টেইলউইন্ডের ইউটিলিটি ক্লাসে রূপান্তর করা উত্তম:
১. **স্পেসিং (Spacing)**:
   - ফিজমা পিক্সেল (px) ভ্যালু শো করে।
   - টেইলউইন্ডের প্রতি ১ ইউনিট মানে হলো ৪ পিক্সেল (0.25rem)।
   - *রূপান্তর*: ফিজমার \`16px\` প্যাডিং মানে টেইলউইন্ডের \`p-4\` (১৬ / ৪ = ৪)।
২. **কালার (Colors)**:
   - ফিজমা হেক্স কালার দেখায় (যেমন: \`#6366F1\`)।
   - *রূপান্তর*: টেইলউইন্ড ফাইলে এটি সেভ করুন যাতে \`bg-primary\` হিসেবে ইউজ করা যায়।
৩. **টাইপোগ্রাফি (Typography)**:
   - ফিজমা \`font-size: 24px\` এবং \`line-height: 32px\` দেখায়।
   - *রূপান্তর*: টেইলউইন্ডের \`text-2xl\` এ রূপান্তর করুন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কার্ড ডিজাইনে ফিজমা শো করছে: বর্ডার রেডিয়াস \`24px\`, ব্যাকগ্রাউন্ড \`#1E293B\` এবং ভেতরের প্যাডিং \`32px\`।
- ইনলাইন স্টাইল লেখার পরিবর্তে আমরা টেইলউইন্ডে লিখবো: \`p-8 bg-slate-800 rounded-3xl\`। এর ফলে কোড অত্যন্ত পরিচ্ছন্ন দেখায়।

### উত্তম অনুশীলন
ফিজমা ফাইলের কালার প্যালেট দেখে টেইলউইন্ড কনফিগ ফাইলে কাস্টম ভেরিয়েবল ডিফাইন করুন যাতে ডিজাইনার কালার এডিট করলেও কোডে সহজে গ্লোবাল এডিট করা যায়।

### সাধারণ ভুলসমূহ
ফিজমার পিক্সেল ভ্যালু কোডে সরাসরি ইনলাইন সিএসএস দিয়ে বসানো, যা মোবাইল স্ক্রিনে রেসপন্সিভ গ্রিড ভেঙে ফেলে।

### Code Example
\`\`\`javascript
// tailwind.config.js
// ফিজমা ডিজাইন টোকেন টেইলউইন্ডে ম্যাপ করার উদাহরণ
module.exports = {
  theme: {
    extend: {
      colors: {
        // ফিজমার প্রাইমারি কালার: #6366F1
        primary: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
        }
      },
      borderRadius: {
        // ফিজমার কাস্টম বর্ডার রেডিয়াস: 24px (1.5rem)
        'card': '1.5rem',
      }
    },
  },
}
\`\`\``
  },
  {
    id: 'other-topics-49',
    title: 'How do you mock external Node.js modules (like axios or fs) in Jest tests?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Jest', 'Testing', 'Mocking', 'Axios', 'fs'],
    enAnswer: 'Mock external modules using jest.mock("module_name"). This intercepts calls to the module and allows you to specify custom return values using mockResolvedValue or mockReturnValue.',
    bnAnswer: 'বাহ্যিক মডিউল মক করতে jest.mock("module_name") ব্যবহার করা হয়। এটি মডিউলের মেথডগুলোকে ইন্টারসেপ্ট করে mockResolvedValue বা mockReturnValue দিয়ে কাস্টম রিটার্ন ভ্যালু সেট করার সুযোগ দেয়।',
    enExplanation: `### Explanation
When unit testing, calling real external packages is slow and introduces networking dependencies:
1. **\`jest.mock('axios')\`**:
   - Tells Jest to replace the entire \`axios\` library with mock functions globally for the test file.
2. **Configuration**:
   - Import the mocked package into your test file.
   - Use mock injectors:
     - \`mockResolvedValue(data)\`: Mock resolved promises (e.g., API responses).
     - \`mockRejectedValue(error)\`: Mock failed API requests.
     - \`mockReturnValue(value)\`: Mock synchronous function returns.

### Real-World Example
In a user dashboard, a function fetches user data from a third-party API using axios. Running the unit test shouldn't hit the actual API (since it could be offline or rate-limited). Mocking axios allows you to define a fake user response object instantly. The test asserts that the controller parses the object correctly.

### Best Practice
Always call \`jest.clearAllMocks()\` inside \`beforeEach\` hooks to clear execution count stats on mock functions, preventing tests from conflicting with each other.

### Common Mistakes
Trying to configure mocks *after* calling the function under test. Always set up mock return values before executing the code block you want to assert.

### Code Example
\`\`\`typescript
// userService.ts
import axios from 'axios';
export async function getUserName(userId: string) {
  const res = await axios.get(\`/api/users/\${userId}\`);
  return res.data.username;
}

// userService.test.ts
import { getUserName } from './userService';
import axios from 'axios';

// 1. Mock the axios module globally
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear calls count
  });

  test('returns username on successful API fetch', async () => {
    // 2. Set up mock API response
    mockedAxios.get.mockResolvedValue({ data: { username: 'test_user' } });

    const name = await getUserName('101');
    
    // Assertions
    expect(name).toBe('test_user');
    expect(mockedAxios.get).toHaveBeenCalledWith('/api/users/101');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউনিট টেস্ট করার সময় রিয়েল এপিআই কল বা ফাইল রিড অপারেশন বন্ধ রাখতে কাস্টম মক মডিউল তৈরি করা হয়:
১. **\`jest.mock('axios')\`**:
   - এটি জেস্টকে নির্দেশ দেয় সম্পূর্ণ লাইব্রেরিটি মক ফাইল দিয়ে রিপ্লেস করতে।
২. **কনফিগারেশন**:
   - মক করা প্যাকেজটি টেস্ট ফাইলে ইমপোর্ট করতে হবে।
   - কাস্টম রিটার্ন সেট করতে হবে:
     - \`mockResolvedValue(data)\`: প্রমিস রিজলভড মক ডাটা (যেমন: API রেসপন্স)।
     - \`mockRejectedValue(error)\`: প্রমিস এরর বা ক্র্যাশ।
     - \`mockReturnValue(value)\`: সিনক্রোনাস রিটার্ন ভ্যালু।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ড্যাশবোর্ডে থার্ড-পার্টি সার্ভিস থেকে এক্সিওস (axios) দিয়ে ডাটা আনা হয়। টেস্ট রান করার সময় আমরা রিয়েল এপিআই হিট করাতে চাই না (কারণ এপিআই ডাউন থাকতে পারে)। এক্সিওস মক করে দিলে ডুপ্লিকেট রিকোয়েস্ট তৈরি না করে সাথে সাথে মক ডাটা দিয়ে টেস্ট সফলভাবে সম্পন্ন করা সম্ভব হয়।

### উত্তম অনুশীলন
প্রতিটি টেস্টের শুরুতে \`beforeEach\` হুকের ভেতর \`jest.clearAllMocks()\` কল করুন। এটি একটি টেস্টের মক কাউন্ট অন্য টেস্টে প্রভাব ফেলা বন্ধ করে।

### সাধারণ ভুলসমূহ
ফাংশন এক্সিকিউট করার *পরে* মক ডাটা ডিফাইন করার চেষ্টা করা। লজিক রান করার পূর্বেই মক ভ্যালু ইনিশিয়ালাইজ করা আবশ্যক।

### Code Example
\`\`\`typescript
// userService.ts - মূল ফাংশন
import axios from 'axios';
export async function getUserName(userId: string) {
  const res = await axios.get(\`/api/users/\${userId}\`);
  return res.data.username;
}

// userService.test.ts - টেস্ট ফাইল
import { getUserName } from './userService';
import axios from 'axios';

// ১. এক্সিওস মডিউল মক করা হচ্ছে
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // মক ট্র্যাকিং ক্লিয়ার করা
  });

  test('returns username on successful API fetch', async () => {
    // ২. মক এপিআই রেসপন্স সেটআপ
    mockedAxios.get.mockResolvedValue({ data: { username: 'test_user' } });

    const name = await getUserName('101');
    
    // অ্যাসারশনসমূহ
    expect(name).toBe('test_user');
    expect(mockedAxios.get).toHaveBeenCalledWith('/api/users/101');
  });
});
\`\`\``
  },
  {
    id: 'other-topics-50',
    title: 'What is snapshot testing in Jest, and when is it appropriate to use it?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Jest', 'Testing', 'Snapshot Testing', 'React', 'Regression'],
    enAnswer: 'Snapshot testing records the output structure of a component or object and saves it in a file. Future test runs compare the new output to the saved snapshot, alerting you to unexpected UI or data changes.',
    bnAnswer: 'স্ন্যাপশট টেস্টিং (Snapshot testing) কম্পোনেন্ট বা অবজেক্টের স্ট্রাকচার রেকর্ড করে ফাইলে সেভ রাখে। পরবর্তী টেস্ট রানগুলোতে বর্তমান আউটপুট সংরক্ষিত স্ন্যাপশটের সাথে মিলিয়ে কোনো পরিবর্তন হয়েছে কিনা তা চেক করে।',
    enExplanation: `### Explanation
Snapshot testing is used to catch unexpected regressions in complex data structures or UI markup:
1. **How it works**:
   - When run for the first time, \`expect(tree).toMatchSnapshot()\` creates a \`.snap\` text file containing the serialized output.
   - On subsequent runs, Jest compares the newly rendered output to this file.
   - If they differ, the test fails, showing a diff.
2. **Updating**: If the change was intentional, you update the snapshot using \`jest -u\` or the update command.

### Real-World Example
In a React UI button component, you have complex CSS configurations and child icons. Instead of writing 50 assertions checking every tag, class, and attribute, you capture a snapshot. If a developer accidentally deletes a class name in the styling config, the snapshot check fails immediately, showing the exact deleted styling rule.

### Best Practice
Only use snapshots for stable UI structures or complex configuration schemas. Keep snapshots small; giant 2000-line HTML snapshots are ignored by developers during code reviews, making them useless for catching bugs.

### Common Mistakes
Automatically pressing \`u\` to update failed snapshots without checking if the change was actually a bug, rendering the test regression prevention useless.

### Code Example
\`\`\`typescript
import React from 'react';
import renderer from 'react-test-renderer';

// Component to test
function SuccessAlert({ message }: { message: string }) {
  return (
    <div className="alert-box success">
      <span className="icon">✓</span>
      <p>{message}</p>
    </div>
  );
}

// Jest Snapshot Test
test('renders SuccessAlert component correctly', () => {
  const component = renderer.create(
    <SuccessAlert message="Operation successful!" />
  );
  let tree = component.toJSON();
  
  // Compares to saved snapshot file
  expect(tree).toMatchSnapshot();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ন্যাপশট টেস্টিং মূলত জটিল ইউআই লেআউট বা অবজেক্ট স্ট্রাকচারে হঠাৎ কোনো পরিবর্তন বা রিগ্রেশন এড়াতে ব্যবহৃত হয়:
১. **যেভাবে কাজ করে**:
   - প্রথমবার রান করার সময় \`expect(tree).toMatchSnapshot()\` ফোল্ডারে একটি \`.snap\` টেক্সট ফাইল তৈরি করে।
   - পরবর্তী রানগুলোতে জেস্ট কারেন্ট রেন্ডার আউটপুটকে এই ফাইলের সাথে ম্যাচ করায়।
   - অমিল পেলে টেস্ট ফেইল দেখায় ও লাল-সবুজ ডেল্টা ভিউ দিয়ে পরিবর্তন চিহ্নিত করে।
২. **আপডেট**: চেঞ্জটি ইচ্ছাকৃত হলে \`jest -u\` কম্যান্ড দিয়ে স্ন্যাপশট আপডেট করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি রিঅ্যাক্ট অ্যালার্ট বক্সে সিএসএস স্টাইল ও আইকন আছে। প্রতিটি ক্লাসের নাম, প্যাডিং ম্যানুয়ালি টেস্ট কোডে না লিখে আমরা স্ন্যাপশট রেকর্ড করে নিই। অন্য কোনো ডেভেলপার ভুলবশত সিএসএস ফাইল থেকে কার্ডের প্যাডিং বা আইকন ক্লাস মুছে ফেললে স্ন্যাপশট সাথে সাথে ফেইল হয়ে এরর দিবে।

### উত্তম অনুশীলন
শুধুমাত্র স্ট্যাটিক বা স্টেবল ইউআই কম্পোনেন্টের জন্য স্ন্যাপশট লিখুন। ফাইলে ২ হাজার লাইনের বেশি স্ন্যাপশট তৈরি হওয়া এড়িয়ে চলুন, কারণ কোড রিভিউয়ের সময় বড় স্ন্যাপশট ফাইলের পরিবর্তন চেক করা কঠিন।

### সাধারণ ভুলসমূহ
কোথাও এরর আসলেই চোখ বন্ধ করে \`u\` চেপে স্ন্যাপশট আপডেট করে দেওয়া, যা বাগগুলোকেও ভ্যালিড ডাটা হিসেবে সেভ করে ফেলে।

### Code Example
\`\`\`typescript
import React from 'react';
import renderer from 'react-test-renderer';

// টেস্ট করার কম্পোনেন্ট
function SuccessAlert({ message }: { message: string }) {
  return (
    <div className="alert-box success">
      <span className="icon">✓</span>
      <p>{message}</p>
    </div>
  );
}

// জেস্ট স্ন্যাপশট টেস্ট
test('renders SuccessAlert component correctly', () => {
  const component = renderer.create(
    <SuccessAlert message="Operation successful!" />
  );
  let tree = component.toJSON();
  
  // সংরক্ষিত স্ন্যাপশট ফাইলের সাথে কম্পেয়ার করবে
  expect(tree).toMatchSnapshot();
});
\`\`\``
  },
  {
    id: 'other-topics-51',
    title: 'What is Playwright, and how does it differ from Selenium or Cypress for E2E testing?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Playwright', 'Testing', 'E2E Testing', 'Cypress', 'Selenium'],
    enAnswer: 'Playwright is a modern E2E testing library by Microsoft. It runs faster than Selenium by communicating directly with browser dev tools protocols, and unlike Cypress, it supports multi-tab testing, cross-domain navigation, and native parallel execution out of the box.',
    bnAnswer: 'Playwright হলো মাইক্রোসফটের একটি আধুনিক E2E টেস্টিং লাইব্রেরি। এটি সরাসরি ব্রাউজার ডেভ-টুলস প্রোটোকল ব্যবহার করে সেলিনিয়ামের চেয়ে দ্রুত রান হয় এবং সাইপ্রেসের বিপরীতে এটি সরাসরি মাল্টি-ট্যাব, ক্রস-ডোমেন রাউটিং ও প্যারালাল রান সমর্থন করে।',
    enExplanation: `### Explanation
End-to-End (E2E) testing automates actual user interactions inside the browser to verify full-stack workflows:
1. **Playwright vs Selenium**: Selenium relies on outdated WebDriver APIs which require middle-man drivers, causing slow executions. Playwright connects directly to Chromium, Firefox, and WebKit debugger sockets, executing actions in milliseconds.
2. **Playwright vs Cypress**:
   - Cypress runs inside the browser sandbox, making it difficult to test multiple tabs, iframes, or switch domains (e.g., from \`myapp.com\` to \`stripe.com\`).
   - Playwright runs outside the browser, controlling it via debugging protocols. It supports multiple browser contexts (tabs/windows) and cross-domain steps naturally.

### Real-World Example
In a SaaS payment setup, a user signs up on \`app.com\`, clicks "Pay", gets redirected to \`stripe.com\`, fills payment info, and returns to \`app.com\`. Cypress blocks this cross-domain hop. Playwright handles this flow easily, simulating the complete user lifecycle.

### Best Practice
Use Playwright's auto-wait feature. Playwright automatically waits for elements to be visible, enabled, and stable before clicking, reducing "flaky" tests caused by loading delays.

### Common Mistakes
Hardcoding static timeout delays (e.g., \`page.waitForTimeout(5000)\`) in test scripts. This slows down test suites unnecessarily. Use dynamic locator waits instead (e.g., \`locator.waitFor()\`).

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('basic login test on multiple domains', async ({ page }) => {
  // 1. Visit website login page
  await page.goto('https://example.com/login');

  // 2. Auto-waits for input to be ready, then types
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'securepass123');
  
  // 3. Click submit
  await page.click('button[type="submit"]');

  // 4. Verify landing page URL
  await expect(page).toHaveURL('https://example.com/dashboard');
  
  // 5. Verify visual heading
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome Back!');
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
End-to-End (E2E) টেস্টিং ব্রাউজারের ভেতর ইউজারের মাউস ক্লিক ও টাইপিং প্রসেস অটোমেট করে সিস্টেম টেস্ট করে:
১. **Playwright বনাম Selenium**: সেলিনিয়াম ব্যাকডেটেড ওয়েবড্রাইভার প্রোটোকল ব্যবহার করে যা ড্রাইভের মাধ্যমে রান হওয়ায় অনেক স্লো। প্লেরাইট সরাসরি ব্রাউজার ইঞ্জিনের ডিবাগ সকেট ব্যবহার করে মিলিসেকেন্ডে কাজ সারে।
২. **Playwright বনাম Cypress**:
   - সাইপ্রেস ব্রাউজার স্যান্ডবক্সের ভেতর রান হওয়ায় মাল্টি-ট্যাব চ্যাট বা ডোমেন চেঞ্জ (যেমন: এপিআই থেকে স্ট্রাইপ পেমেন্ট গেটওয়েতে যাওয়া) সহজে টেস্ট করতে পারে না।
   - প্লেরাইট ব্রাউজারের বাইরে থেকে এটি কন্ট্রোল করায় একই টেস্টে ২টা আলাদা ট্যাব বা ভিন্ন ডোমেনে প্রবেশ ইজিলি হ্যান্ডেল করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ল্যান্ডিং পেজে গিয়ে সাইন আপ করলেন, পেমেন্ট বাটনে ক্লিক করতে স্ট্রাইপ গেটওয়েতে রিডাইরেক্ট হলেন এবং কার্ড পিন দিয়ে পুনরায় মেইন অ্যাপে ফিরে আসলেন। সাইপ্রেস এই ক্রস-ডোমেন ট্রানজিশন ব্লক করে দেয়, কিন্তু প্লেরাইট এটি সফলভাবে রান করে সম্পূর্ণ ইউজার লাইফসাইকেল ভ্যালিডেট করতে পারে।

### উত্তম অনুশীলন
প্লেরাইটের অটো-ওয়েট (Auto-wait) ফিচার ব্যবহার করুন। এলিমেন্টটি স্ক্রিনে লোড হয়ে ক্লিক করার উপযোগী হওয়া পর্যন্ত প্লেরাইট নিজে থেকেই অপেক্ষা করে, ফলে নেটওয়ার্ক ল্যাগের কারণে টেস্ট ক্র্যাশ করে না।

### সাধারণ ভুলসমূহ
টেস্টে স্ট্যাটিক ওয়েট সেট করা (যেমন: \`page.waitForTimeout(5000)\`)। এটি টেস্ট রান হতে অহেতুক ৫ সেকেন্ড ডিলে করায়। এর চেয়ে ডায়নামিক \`locator.waitFor()\` ব্যবহার করুন।

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('basic login test on multiple domains', async ({ page }) => {
  // ১. সাইটের লগইন পেজে প্রবেশ
  await page.goto('https://example.com/login');

  // ২. ইনপুট রেডি হওয়া পর্যন্ত অপেক্ষা করে টাইপ করবে
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'securepass123');
  
  // ৩. বাটনে ক্লিক
  await page.click('button[type="submit"]');

  // ৪. ড্যাশবোর্ড ইউআরএল ভ্যালিডেশন
  await expect(page).toHaveURL('https://example.com/dashboard');
  
  // ৫. হেডিং টেক্সট সঠিক আছে কিনা যাচাই
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome Back!');
});
\`\`\``
  },
  {
    id: 'other-topics-52',
    title: 'What is Playwright Codegen, and how does it accelerate writing E2E tests?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Playwright', 'Codegen', 'E2E Testing', 'Test Generation'],
    enAnswer: 'Playwright Codegen is a CLI tool that launches a browser and records your manual clicks and typings, automatically generating clean, ready-to-run Playwright test scripts in TypeScript, JS, or Python.',
    bnAnswer: 'Playwright Codegen হলো একটি CLI টুল যা ব্রাউজার চালু করে আপনার মাউস ক্লিক ও টাইপিং রেকর্ড করে প্লেরাইটের রেডি-টু-রান টেস্ট স্ক্রিপ্ট অটোমেটিক তৈরি করে দেয়।',
    enExplanation: `### Explanation
Writing E2E selectors and actions manually requires constant inspection of the browser DOM to locate elements.
- **\`codegen\` Tool**: Playwright provides the code generator tool via \`npx playwright codegen\`.
- **How it works**:
  - It launches a target URL along with a "Playwright Inspector" side window.
  - As you type username, click checkbox, or click submit, the inspector generates matching TypeScript locator assertions in real time.
  - It automatically optimizes selector targets, prioritizing robust accessibility selectors (like \`getByRole\` or \`getByLabel\`) over brittle CSS classes.

### Real-World Example
To test a complex multi-step checkout form:
- Instead of spending 1 hour inspecting elements and typing selectors, you run \`npx playwright codegen example.com\`.
- You fill out the form manually in 30 seconds.
- Copy the generated TypeScript code from the inspector panel, paste it into your test file, and you have a working test instantly.

### Best Practice
Do not rely blindly on generated assertions. Review and refine the generated selectors to ensure they remain stable if layout attributes or styling classes change.

### Common Mistakes
Recording tests containing sensitive inputs (like actual user credit cards or admin passwords) and pushing the generated code directly to GitHub. Always use mock credentials in tests.

### Code Example
\`\`\`bash
# Launch Playwright Code Generator in terminal:
$ npx playwright codegen https://my-dev-site.com/login

# The inspector window pops up and outputs:
# await page.goto('https://my-dev-site.com/login');
# await page.getByLabel('Email Address').fill('user@test.com');
# await page.getByRole('button', { name: 'Log in' }).click();
# (Copy and save the output directly into test.spec.ts)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
E2E টেস্টের জন্য প্রতিটা বাটনের আইডি খুঁজে খুঁজে ম্যানুয়ালি কোড লেখা বেশ সময়সাপেক্ষ। প্লেরাইট এর কোড জেনারেটর কোড রাইটিং ফাস্ট করে দেয়:
- **\`codegen\` ইউটিলিটি**: টার্মিনালে \`npx playwright codegen\` লিখে এটি স্টার্ট করা হয়।
- **যেভাবে কাজ করে**:
  - এটি নির্দিষ্ট ইউআরএল সহ একটি ব্রাউজার ও পাশে একটি কোড জেনারেটর প্যানেল ওপেন করে।
  - ব্রাউজারে টাইপ বা ক্লিক করা মাত্রই জেনারেটর প্যানেলে টাইপস্ক্রিপ্ট টেস্ট কোড তৈরি হতে থাকে।
  - এটি ভঙ্গুর সিএসএস ক্লাসের পরিবর্তে এক্সেসিবিলিটি সিলেক্টর (\`getByRole\`, \`getByLabel\`) সিলেক্ট করে কোড তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ৩ পৃষ্ঠার ফর্ম ফিলিং প্রসেস টেস্ট করতে হবে। সিলেক্টর খুঁজতে ১ ঘণ্টা নষ্ট না করে আপনি কোডজেন রান করলেন। ৩০ সেকেন্ডে ফর্মটি পূরণ করে জেনারেট হওয়া টাইপস্ক্রিপ্ট কোডটি কপি করে ফাইল পেস্ট করে দিলেন। খুব সহজেই টেস্ট ফাইল রেডি হয়ে গেল।

### উত্তম অনুশীলন
অটো-জেনারেটেড সিলেক্টরগুলো একবার ভালো করে রিভিও করে নিন। আইডি বা লেবেল বেশি পরিবর্তনশীল হলে ম্যানুয়ালি সিলেক্টর টিউন করে রাখুন যাতে প্রজেক্ট রি-ডিজাইনের সময় টেস্ট ফাইল ভেঙে না যায়।

### সাধারণ ভুলসমূহ
কোডজেন রেকর্ড করার সময় রিয়েল পাসওয়ার্ড বা ডাটা ইনপুট দেওয়া ও জেনারেটেড ফাইলটি গিটে পুশ করে দেওয়া। টেস্টিংয়ে সবসময় মক ভ্যালু ব্যবহার করুন।

### Code Example
\`\`\`bash
# টার্মিনালে প্লেরাইট কোড জেনারেটর সচল করার কম্যান্ড:
$ npx playwright codegen https://my-dev-site.com/login

# ব্রাউজার ওপেন হয়ে ইনস্পেক্টরে নিচের কোড জেনারেট হবে:
# await page.goto('https://my-dev-site.com/login');
# await page.getByLabel('Email Address').fill('user@test.com');
# await page.getByRole('button', { name: 'Log in' }).click();
# (কপি করে ফাইল ডিরেক্ট সেভ করুন)
\`\`\``
  },
  {
    id: 'other-topics-53',
    title: 'What is the difference between REST API PUT and PATCH methods?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['REST API', 'HTTP Methods', 'PUT', 'PATCH', 'API Design'],
    enAnswer: 'PUT replaces the entire resource with the request payload, requiring all fields to be sent. PATCH performs a partial update, modifying only the fields specified in the request payload.',
    bnAnswer: 'PUT রিকোয়েস্টের পেলোড দিয়ে সম্পূর্ণ রিসোর্সটিকে প্রতিস্থাপন করে, যার ফলে সব ফিল্ড পাঠানো আবশ্যক। আর PATCH আংশিক বা পারশিয়াল আপডেট করে, অর্থাৎ শুধুমাত্র পেলোডে পাঠানো ফিল্ডগুলো পরিবর্তন করে।',
    enExplanation: `### Explanation
Understanding when to use PUT vs PATCH keeps your backend APIs REST-compliant and optimized:
1. **PUT (Idempotent)**:
   - Client sends the entire model: \`{ id: 1, name: 'Hasan', age: 30, city: 'Dhaka' }\`.
   - If you only send \`{ name: 'Hasan' }\`, PUT will set other fields (\`age\`, \`city\`) to \`null\` or defaults as it replaces the document entirely.
2. **PATCH (Non-Idempotent by spec, though often implemented as such)**:
   - Client sends only modified fields: \`{ age: 31 }\`.
   - The server updates only the \`age\` field, leaving \`name\` and \`city\` unchanged.

### Real-World Example
In a user profile update:
- If the user changes only their bio text.
- **PATCH**: Sending \`PATCH /api/users/1\` with \`{ bio: 'Coding...' }\` is clean and saves bandwidth.
- **PUT**: Requires fetching the full user first, updating the bio locally, and sending the entire user object back using \`PUT /api/users/1\`.

### Best Practice
Use \`PATCH\` for edit forms where users only modify a few inputs. Use \`PUT\` for complete resource overwrites or when creating/replacing configuration presets.

### Common Mistakes
Using \`PUT\` but implementing \`PATCH\` logic on the server (i.e. partially updating fields inside a PUT handler), which violates standard HTTP specifications.

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();
app.use(express.json());

let userProfile = { id: 1, name: 'Hasan', age: 30, city: 'Dhaka' };

// PUT: Replace entire resource
app.put('/api/profile', (req, res) => {
  // Expects complete object structure
  userProfile = { id: 1, ...req.body };
  res.json(userProfile);
});

// PATCH: Partial update
app.patch('/api/profile', (req, res) => {
  // Merge updates into existing object
  userProfile = { ...userProfile, ...req.body };
  res.json(userProfile);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
PUT ও PATCH-এর সঠিক ব্যবহার এপিআই পারফরম্যান্স ও আর্কিটেকচার অপ্টিমাইজড রাখে:
১. **PUT (আইডেমপোটেন্ট)**:
   - ক্লায়েন্টকে সম্পূর্ণ অবজেক্ট পাঠাতে হবে: \`{ id: 1, name: 'Hasan', age: 30, city: 'Dhaka' }\`।
   - আপনি যদি শুধু \`{ name: 'Hasan' }\` পাঠান, তবে সার্ভার বাকি কলামগুলো ডিলিট বা নাল করে দিতে পারে কারণ এটি পুরো ফাইল প্রতিস্থাপন করে।
২. **PATCH (আংশিক আপডেট)**:
   - ক্লায়েন্ট শুধুমাত্র পরিবর্তিত কলাম পাঠাবে: \`{ age: 31 }\`।
   - সার্ভার অন্য সব ডাটা অক্ষুণ্ণ রেখে শুধু বয়স কলামটি আপডেট করে দিবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার তার বায়ো টেক্সট আপডেট করতে চান:
- **PATCH**: \`PATCH /api/users/1\`-এ \`{ bio: 'Coding...' }\` পাঠানো সহজ এবং এতে নেটওয়ার্ক ডাটা কম খরচ হয়।
- **PUT**: নোড সার্ভার থেকে আগে ইউজারের সব ডাটা নিয়ে এসে এডিট করে সম্পূর্ণ অবজেক্টটি পুনরায় \`PUT /api/users/1\`-এ পুশ করতে হবে।

### উত্তম অনুশীলন
ইউজার যখন ফর্মের কোনো নির্দিষ্ট অংশ এডিট করবেন তখন \`PATCH\` ব্যবহার করুন। পুরো ফাইল ওভাররাইট বা সেটিং রিসেট করার সময় \`PUT\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সার্ভারে \`PUT\` রাউট হ্যান্ডেল করার সময় আংশিক বা পারশিয়াল আপডেট লজিক ইমপ্লিমেন্ট করা, যা এইচটিটিপি স্পেসিফিকেশন ভঙ্গ করে।

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();
app.use(express.json());

let userProfile = { id: 1, name: 'Hasan', age: 30, city: 'Dhaka' };

// PUT: সম্পূর্ণ অবজেক্ট প্রতিস্থাপন
app.put('/api/profile', (req, res) => {
  // রেডি বডির সব ডাটা সেট করবে
  userProfile = { id: 1, ...req.body };
  res.json(userProfile);
});

// PATCH: আংশিক বা ফিল্ড মার্জ আপডেট
app.patch('/api/profile', (req, res) => {
  // ওল্ড অবজেক্টের সাথে নিউ ফিল্ড মার্জ করা হচ্ছে
  userProfile = { ...userProfile, ...req.body };
  res.json(userProfile);
});
\`\`\``
  },
  {
    id: 'other-topics-54',
    title: 'Explain the difference between Socket.IO rooms and namespaces for scaling real-time engines.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Socket.IO', 'Namespaces', 'Rooms', 'Scalability', 'Real-time'],
    enAnswer: 'Namespaces are separate connection channels that require authentication and setup on the server. Rooms are virtual clusters within a namespace created dynamically to broadcast events to subset groups.',
    bnAnswer: 'নেমস্পেস হলো সম্পূর্ণ পৃথক কানেকশন চ্যানেল যা সার্ভারে অথেনটিকেশন ও রাউটিং হ্যান্ডেল করে। আর রুম হলো কোনো নেমস্পেসের ভেতরে ডাইনামিকালি তৈরি ভার্চুয়াল ক্লাস্টার যা সাব-গ্রুপে ব্রডকাস্ট করে।',
    enExplanation: `### Explanation
When scaling real-time socket engines using Redis adapters across multiple servers, choosing between rooms and namespaces affects resource overhead:
1. **Namespaces**:
   - Create distinct websocket paths, requiring initial connection setup costs.
   - Ideal for isolating unrelated business units (e.g. \`/notification-pipeline\` vs \`/gameplay-pipeline\`).
   - Sockets inside \`/notification-pipeline\` cannot talk to \`/gameplay-pipeline\` without establishing a separate socket connection.
2. **Rooms**:
   - Virtual groupings managed in memory. Joining a room is cheap and requires zero TCP connection overhead.
   - Sockets inside the same namespace can join multiple rooms.
   - Ideal for dynamic groups (e.g., chat room ID, document ID).

### Real-World Example
In a collaborative workspace app (like Slack):
- The server initializes namespaces \`/organization-a\` and \`/organization-b\` to keep enterprise data isolated.
- Within \`/organization-a\`, users create channels like \`#marketing\`, \`#dev\`, and \`#general\`. These channels are implemented as **Rooms** inside the \`/organization-a\` namespace.

### Best Practice
Keep namespaces static and pre-configured. Use rooms for dynamic runtime allocations (like chat rooms, dashboard widgets, or live document sharing blocks) since rooms do not require server reboot definitions.

### Common Mistakes
Creating a new namespace for every chat group, which causes memory overhead and network throttling as client browsers establish dozens of socket handshakes.

### Code Example
\`\`\`typescript
// Multiplexing connection pipeline in Socket.IO
import { Server } from 'socket.io';
const io = new Server(3000);

// 1. Static namespace (requires separate client connection: io('/chat'))
const chatNamespace = io.of('/chat');

chatNamespace.on('connection', (socket) => {
  // 2. Dynamic Rooms (cheap, dynamic grouping)
  socket.on('join-channel', (channelId) => {
    socket.join(\`channel:\${channelId}\`);
  });

  socket.on('message', (data) => {
    socket.to(\`channel:\${data.channelId}\`).emit('new-msg', data.text);
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একাধিক সার্ভারে রেডিস অ্যাডাপ্টার দিয়ে রিয়েল-টাইম ইঞ্জিন স্কেল করার সময় নেমস্পেস ও রুমের মেমোরি খরচ বোঝা জরুরি:
১. **Namespaces**:
   - এটি আলাদা ভার্চুয়াল পথ তৈরি করে। ক্লায়েন্ট নতুন নেমস্পেসে ঢুকলে নতুন টিসিপি হ্যান্ডশেক রিকোয়েস্ট তৈরি হয়।
   - সম্পূর্ণ সম্পর্কহীন মডিউলগুলোকে আলাদা রাখতে এটি ব্যবহার করা হয়।
২. **Rooms**:
   - এটি মেমরিতে থাকা ভার্চুয়াল ম্যাপ। রুমে জয়েন হতে নতুন কানেকশনের কোনো খরচ নেই।
   - একই চ্যানেলে থাকা সকেটগুলো একাধিক রুমে ফ্রিতে জয়েন করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
স্ল্যাক বা ডিসকর্ড অ্যাপে:
- ডাটা সিকিউরিটি বা প্রাইভেসি বজায় রাখতে প্রতিটি অর্গানাইজেশনের জন্য আলাদা নেমস্পেস তৈরি করা হলো (যেমন: \`/org-a\`, \`/org-b\`)।
- এবার \`/org-a\`-র ভেতরে যেসব চ্যানেল আছে (যেমন: \`#marketing\`, \`#dev\`), সেগুলোকে **Rooms** হিসেবে ম্যাপ করা হলো।

### উত্তম অনুশীলন
নেমস্পেসগুলো কোডে স্ট্যাটিক ও স্থায়ী রাখুন। আর ডাইনামিক চ্যাট বা লাইভ ট্র্যাকিং রুমের সংখ্যা ডাইনামিকালি বাড়াতে Rooms ব্যবহার করুন।

### সাধারণ ভুলসমূহ
প্রতিটি নতুন গ্রুপ চ্যাটের জন্য আলাদা নেমস্পেস তৈরি করা, যা শত শত অতিরিক্ত কানেকশন হ্যান্ডশেক তৈরি করে সার্ভার ডাউন করে দেয়।

### Code Example
\`\`\`typescript
// Socket.IO মাল্টিপ্লেক্সিং পাইপলাইন
import { Server } from 'socket.io';
const io = new Server(3000);

// ১. স্ট্যাটিক নেমস্পেস
const chatNamespace = io.of('/chat');

chatNamespace.on('connection', (socket) => {
  // ২. ডাইনামিক রুমস (অত্যন্ত কম মেমোরি খরচ)
  socket.on('join-channel', (channelId) => {
    socket.join(\`channel:\${channelId}\`);
  });

  socket.on('message', (data) => {
    socket.to(\`channel:\${data.channelId}\`).emit('new-msg', data.text);
  });
});
\`\`\``
  },
  {
    id: 'other-topics-55',
    title: 'How do you handle job delays, retries, and backoff strategies in Bull queues?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Bull Queue', 'Redis', 'Retries', 'Delayed Jobs', 'Backoff'],
    enAnswer: 'Configure job delays using the delay option, and handle failures using the attempts option combined with a backoff strategy (fixed or exponential) to retry jobs after a delay.',
    bnAnswer: 'delay অপশন দিয়ে জবে ডিলে সেট করা যায়, এবং attempts ও backoff স্ট্র্যাটেজি (fixed বা exponential) ব্যবহার করে কাজ ব্যর্থ হওয়ার পর নির্দিষ্ট সময় বিরতিতে পুনরায় চেষ্টা করা হয়।',
    enExplanation: `### Explanation
Background jobs often interact with third-party APIs (like stripe or sendgrid) which can experience temporary network outages:
1. **Delayed Jobs**: Pass \`{ delay: 60000 }\` to pause the job execution for 60 seconds.
2. **Retries**: Pass \`{ attempts: 5 }\` to automatically retry the job up to 5 times if the worker throws an error.
3. **Backoff Strategies**: Defines the wait time between retries:
   - **Fixed**: Waits a constant duration (e.g., 5 seconds between every retry).
   - **Exponential**: Doubles the wait time after each failure (e.g., 2s, then 4s, then 8s) to prevent spamming server endpoints.

### Real-World Example
In a newsletter delivery queue:
- Sendgrid API is down for 10 minutes.
- If you don't configure backoff, all 1000 email jobs fail immediately on the first network drop.
- Setting \`{ attempts: 5, backoff: { type: 'exponential', delay: 1000 } }\` ensures the worker waits before retrying, allowing Sendgrid to recover and successfully deliver the emails without database corruption.

### Best Practice
Always use exponential backoff for external network calls. This prevents your server from DDoS-ing third-party APIs when they are recovering from outages.

### Common Mistakes
Not setting a maximum retry cap (\`attempts\`), or setting retries without any backoff delay, which causes failed jobs to retry instantly 5 times in 1 millisecond, failing completely.

### Code Example
\`\`\`typescript
import Queue from 'bull';
const emailQueue = new Queue('email-delivery');

async function queueNewsletter(emailData: any) {
  await emailQueue.add(
    emailData,
    {
      // 1. Run the job 10 seconds from now
      delay: 10000,
      
      // 2. Retry up to 5 times if it fails
      attempts: 5,
      
      // 3. Exponential backoff (1s, 2s, 4s, 8s, etc.)
      backoff: {
        type: 'exponential',
        delay: 1000 // Base delay in milliseconds
      }
    }
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্যাকগ্রাউন্ডে সচল থাকা জবগুলো প্রায়শই এক্সটারনাল এপিআই ব্যবহার করে, যা যেকোনো সময় অফলাইন বা স্লো হতে পারে:
১. **Delayed Jobs**: \`{ delay: 60000 }\` মানে কাজ পাওয়ার পর ৬০ সেকেন্ড অপেক্ষা করে প্রসেসিং শুরু করবে।
২. **Retries**: \`{ attempts: 5 }\` দিলে কোনো কারণে প্রসেস এরর খেলে সর্বোচ্চ ৫ বার চেষ্টা করবে।
৩. **Backoff Strategies**: প্রতি রি-ট্রাইয়ের মাঝের বিরতি নির্ধারণ করে:
   - **Fixed**: ফিক্সড সময় ধরে অপেক্ষা করে (যেমন: প্রতিবার ৫ সেকেন্ড পর পর)।
   - **Exponential**: প্রতি ব্যর্থতার সাথে বিরতির সময় ডাবল হয়ে যায় (যেমন: প্রথমে ২ সেকেন্ড, এরপর ৪ সে., ৮ সে.), যা থার্ড-পার্টি এপিআই লোড কমায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নিউজলেটার পাঠানোর লাইভ প্রসেসে:
- ইমেইল গেটওয়ে সার্ভিস ডাউন রয়েছে।
- ব্যাকঅফ কনফিগ না থাকলে গেটওয়ে অফলাইন হওয়া মাত্রই আপনার ১ হাজার জবের সব ইনস্ট্যান্ট ফেইল হয়ে ক্যান্সেল হয়ে যাবে।
- \`attempts: 5, backoff: { type: 'exponential' }\` সেট করে রাখলে রানার প্রথম ট্রাইয়ের পর একটু অপেক্ষা করবে, এরপর আরো বেশি সময় পর রি-ট্রাই করবে। এর মাঝে গেটওয়ে সচল হলে সব মেইল সাকসেসফুলি চলে যাবে।

### উত্তম অনুশীলন
এক্সটারনাল এপিআই রিকোয়েস্ট ফেইল হওয়ার প্রোজেক্টগুলোতে এক্সপোনেনশিয়াল ব্যাকঅফ ব্যবহার করুন। এটি রিকভারি টাইমে এপিআই লোড রক্ষা করে।

### সাধারণ ভুলসমূহ
কোথাও ব্যাকঅফ টাইম ডিক্লেয়ার না করা, যার ফলে কোনো এরর পেলে ১ মিলিসেকেন্ডের মধ্যেই ৫টি ট্রাই শেষ করে জবটিকে লাল তথা Failed ক্যাটাগরিতে পাঠিয়ে দেয়।

### Code Example
\`\`\`typescript
import Queue from 'bull';
const emailQueue = new Queue('email-delivery');

async function queueNewsletter(emailData: any) {
  await emailQueue.add(
    emailData,
    {
      // ১. ১০ সেকেন্ড ডিলে করে কাজ শুরু করবে
      delay: 10000,
      
      // ২. এরর হলে সর্বোচ্চ ৫ বার চেষ্টা করবে
      attempts: 5,
      
      // ৩. এক্সপোনেনশিয়াল ব্যাকঅফ (1s, 2s, 4s, 8s, ইত্যাদি)
      backoff: {
        type: 'exponential',
        delay: 1000 // বেস বা শুরুর টাইম (মিলি-সেকেন্ড)
      }
    }
  );
}
\`\`\``
  },
  {
    id: 'other-topics-56',
    title: 'Explain Mongoose query middleware (pre/post find) and how it assists in soft-deletes.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Mongoose', 'Query Middleware', 'Soft Delete', 'Database Schema'],
    enAnswer: 'Mongoose query middleware intercepts search queries like find and findOne. You implement soft deletes by using a pre("find") hook to automatically filter out documents where isDeleted: true is set.',
    bnAnswer: 'Mongoose কোয়েরি মিডলওয়্যার find ও findOne সার্চ কুয়েরিগুলোকে ইন্টারসেপ্ট করে। pre("find") হুক দিয়ে কুয়েরিতে অটোমেটিক isDeleted: true ফিল্টার সেট করে সফট-ডিলিট ইমপ্লিমেন্ট করা হয়।',
    enExplanation: `### Explanation
Query middleware runs logic before or after query execution (different from document middleware which runs on instance methods like \`save\`):
1. **Query Hooks**:
   - \`schema.pre('find', callback)\` intercepts queries. Inside, \`this\` refers to the **Query** object, not the document.
   - You can inspect or modify the query parameters dynamically.
2. **Soft Deletes**:
   - Instead of permanently deleting a record (\`DELETE\`), you mark it: \`{ isDeleted: true }\`.
   - To prevent displaying deleted items, you must filter them in every query.
   - Query middleware automates this filter globally.

### Real-World Example
In a project dashboard containing files:
- When a user deletes a file, the server updates \`{ isDeleted: true }\`.
- Using a Mongoose pre-find middleware, any code calling \`File.find()\` is automatically rewritten to \`File.find({ isDeleted: { $ne: true } })\`.
- This ensures deleted files are hidden globally across search views without developers writing filters manually in every file.

### Best Practice
Set up query hooks for \`find\`, \`findOne\`, \`findOneAndUpdate\`, and \`countDocuments\` to ensure soft-deleted records are hidden across all query variations.

### Common Mistakes
Using \`this.isDeleted\` inside query middleware. Remember that in query middleware, \`this\` is a query builder, not the document. You must modify query filters using \`this.where({ isDeleted: { $ne: true } })\`.

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  isDeleted: { type: Boolean, default: false }
});

// Pre-query hook: Automatically filter out soft-deleted items!
productSchema.pre(/^find/, function (this: any, next) {
  // Enforces query filtering on matches
  this.where({ isDeleted: { $ne: true } });
  next();
});

const Product = model('Product', productSchema);

// Example execution:
// Product.find() will only fetch items where isDeleted is false/undefined!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোয়েরি মিডলওয়্যার ডাটাবেজে সার্চ কুয়েরি রান হওয়ার সময় ইন্টারসেপ্ট করে (এটি ডকুমেন্ট লাইফসাইকেলের \`save\` হুকের চেয়ে আলাদা, কারণ এখানে \`this\` কোয়েরি বিল্ডারকে নির্দেশ করে):
১. **কোয়েরি হুক**:
   - \`schema.pre('find')\` বা \`pre('findOne')\` সার্চ ফিল্টার মডিফাই করে।
২. **সফট-ডিলিট (Soft Delete)**:
   - ডাটাবেজ থেকে রো মুছে ফেলার পরিবর্তে আমরা সেখানে \`isDeleted: true\` ট্যাগ সেট করি।
   - কুয়েরি মিডলওয়্যারে গ্লোবাল ফিল্টার সেট করে রাখলে প্রতিবার কুয়েরি করার সময় আলাদা করে ফিল্টার বসাতে হয় না, ব্যাকগ্রাউন্ডে সফট-ডিলিট করা ফাইলগুলো ফিল্টার আউট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফাইল ড্রাইভে ইউজার একটি ছবি ডিলিট করলেন:
- ডাটাবেজে পার্মানেন্ট ডিলিট না হয়ে ফ্ল্যাগ সেট হলো \`{ isDeleted: true }\`।
- মঙ্গুজ মিডলওয়্যারের কারণে কোডের কোথাও \`File.find()\` রান করা হলে মঙ্গুজ নিজে থেকেই কুয়েরি এডিট করে \`File.find({ isDeleted: { $ne: true } })\` বানিয়ে দেয়। এর ফলে সব পেজে ডিলিট হওয়া ফাইলগুলো অটোমেটিক হাইড হয়ে যায়।

### উত্তম অনুশীলন
শুধুমাত্র \`find\` নয়, বরং \`findOne\`, \`countDocuments\` এবং আপডেট কোয়েরিতেও রেগুলার এক্সপ্রেশন (\`/^find/\`) দিয়ে সফট-ডিলিট ফিল্টার সক্রিয় করুন।

### সাধারণ ভুলসমূহ
কোয়েরি মিডলওয়্যারের ভেতর \`this\` অবজেক্ট দিয়ে ডকুমেন্টের প্রোপার্টি খুজে পাওয়ার চেষ্টা করা। মনে রাখবেন, এখানে \`this\` হলো কোয়েরি বিল্ডার, কোনো ডকুমেন্ট নয়।

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  isDeleted: { type: Boolean, default: false }
});

// কোয়েরি মিডলওয়্যার: find দিয়ে শুরু হওয়া সব কুয়েরিতে ডিলিট ডাটা ফিল্টার করবে
productSchema.pre(/^find/, function (this: any, next) {
  // সফট ডিলিট করা ডাটা বাদ দিয়ে কুয়েরি করবে
  this.where({ isDeleted: { $ne: true } });
  next();
});

const Product = model('Product', productSchema);

// এখন Product.find() কল করলে ডিলিট ফাইলগুলো বাদ দিয়ে ডাটা আসবে।
\`\`\``
  },
  {
    id: 'other-topics-57',
    title: 'Explain the difference between Redis Pub-Sub and Redis Streams.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Redis', 'Redis Streams', 'Pub-Sub', 'Messaging', 'Data Persistence'],
    enAnswer: 'Redis Pub-Sub is a transient, fire-and-forget messaging channel with no history. Redis Streams is a persistent, append-only log database supporting consumer groups, message tracking, and offline delivery guarantees.',
    bnAnswer: 'Redis Pub-Sub হলো একটি সাময়িক ও ফায়ার-অ্যান্ড-ফরগেট মেসেজিং চ্যানেল যাতে কোনো হিস্ট্রি থাকে না। আর Redis Streams হলো একটি স্থায়ী ও অ্যাপেন্ড-অনলি লগ ডাটাবেজ যা কনজিউমার গ্রুপ ও অফলাইন মেসেজ ডেলিভারি সাপোর্ট করে।',
    enExplanation: `### Explanation
Choosing between Pub-Sub and Streams depends on your message reliability requirements:
1. **Redis Pub-Sub**:
   - Transmits messages instantly to active socket connections.
   - Zero storage: Messages are destroyed immediately after dispatch.
   - No delivery guarantee: Offline subscribers miss all events.
2. **Redis Streams**:
   - Messages are stored as a persistent list inside Redis keys.
   - **Consumer Groups**: Allows multiple workers to divide processing loads, tracking which worker successfully processed which message ID.
   - If a worker crashes mid-job, the message can be claimed by another worker, ensuring zero loss.

### Real-World Example
- **Pub-Sub**: Broadcasting active typing indicators ("Rohit is typing...") in a chat app. If a user has a network drop for 2s, they miss the typing alert, which is harmless.
- **Streams**: Processing bank transactions. If the payment worker server crashes, the transaction must remain in the queue until another worker takes over and completes the transaction securely.

### Best Practice
Use Pub-Sub for simple, high-frequency status broadcasts (like coordinates updates). Use Streams or Bull queues when message delivery must be guaranteed and you need parallel worker groups.

### Common Mistakes
Using Pub-Sub to build transactional job processors where task loss during server deployments causes broken application states.

### Code Example
\`\`\`typescript
// Redis Streams message publishing inside Node.js
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// 1. Add a message to a stream (persistent)
// '*' instructs Redis to generate a unique auto-incrementing ID
await client.xAdd(
  'order_stream',
  '*',
  { orderId: '2026_xyz', price: '450' }
);

// 2. Read from stream starting at the beginning (0-0)
const messages = await client.xRead(
  { key: 'order_stream', id: '0-0' },
  { COUNT: 1 }
);
console.log('Stream Message:', messages);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যোগাযোগের প্রোটোকলের স্থায়িত্ব ও নিরাপত্তার ওপর ভিত্তি করে Pub-Sub ও Streams বেছে নেওয়া হয়:
১. **Redis Pub-Sub**:
   - মেসেজ ফায়ার করার সাথে সাথে সাবস্ক্রাইবারদের কাছে পাঠিয়ে দেয়।
   - এটি কোনো স্টোরেজ ব্যাকআপ রাখে না; মেসেজ ডেলিভারির সাথে সাথে র‍্যাম থেকে ক্লিয়ার হয়ে যায়।
২. **Redis Streams**:
   - এটি ডাটাবেজের লগের মতো কাজ করে এবং রেডিস কীতে মেসেজগুলো পারসিস্টেন্ট বা স্থায়ী রাখে।
   - **কনজিউমার গ্রুপ**: একটি কাজের কিউ থেকে একাধিক ওয়ার্কার কাজ ভাগ করে নিতে পারে এবং কে কত আইডি পর্যন্ত প্রসেস করেছে তা রেডিস ট্র্যাক রাখে।
   - কোনো ওয়ার্কার কাজ করার মাঝে ক্র্যাশ করলে সেই মেসেজটি অন্য ওয়ার্কার রিকভার করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
- **Pub-Sub**: চ্যাট অ্যাপে লাইভ টাইপিং নোটিফিকেশন ("Hasan is typing...")। ইউজার অফলাইন থাকলে এটি লস হওয়াতে কোনো সমস্যা নেই।
- **Streams**: পেমেন্ট গেটওয়ের নোটিফিকেশন প্রসেস করা। নেটওয়ার্ক ড্রপ বা রিলোড নিলেও পেমেন্ট জবটি কিউতে সেভ থাকবে যতক্ষণ না কোনো একটিভ ওয়ার্কার অর্ডার কমপ্লিট করছে।

### উত্তম অনুশীলন
ডাটা হারানোর ঝুঁকি এড়াতে ক্রিটিক্যাল কাজের জবে Streams বা Bull ব্যবহার করুন। আর রিয়েল-টাইম কুইক অ্যালার্ট বা এনিমেশনে Pub-Sub ব্যবহার করুন।

### সাধারণ ভুলসমূহ
জব প্রসেসিং বা ইনভয়েস জেনারেশনের কাজে Pub-Sub ব্যবহার করা, যার ফলে রিলিজ ডেপ্লয়মেন্টের সময় এপিআই রিস্টার্ট নিলে বহু ডাটা চিরতরে হারিয়ে যায়।

### Code Example
\`\`\`typescript
// নোড জেএস-এ Redis Streams মেসেজ রাইটিং
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// ১. স্ট্রিমে একটি নতুন মেসেজ স্থায়ীভাবে রাইট করা হচ্ছে
// '*' ডিরেক্টিভ রেডিসকে অটো-আইডি জেনারেট করতে নির্দেশ দেয়
await client.xAdd(
  'order_stream',
  '*',
  { orderId: '2026_xyz', price: '450' }
);

// ২. স্ট্রিমের শুরু (0-0) থেকে ডাটা রিড করা হচ্ছে
const messages = await client.xRead(
  { key: 'order_stream', id: '0-0' },
  { COUNT: 1 }
);
console.log('Stream Message:', messages);
\`\`\``
  },
  {
    id: 'other-topics-58',
    title: 'How does Dragonfly optimize multi-core performance compared to Redis cluster setups?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Dragonfly', 'Redis Cluster', 'Multi-core', 'Scalability', 'Backend Infrastructure'],
    enAnswer: 'Dragonfly scales vertically on a single instance by running independent execution loops across threads using a shared-nothing architecture. Standard Redis requires setting up complex multi-node clusters to scale horizontally.',
    bnAnswer: 'ড্রাগনফ্লাই শেয়ার্ড-নাথিং আর্কিটেকচার দিয়ে প্রতিটি থ্রেডে স্বাধীন লুপ চালিয়ে একটিমাত্র ইনস্ট্যান্সে ভার্টিকাল স্কেল করে। অন্যদিকে স্ট্যান্ডার্ড রেডিসকে স্কেল করতে হলে একাধিক নোডের জটিল ক্লাস্টার সেটআপের প্রয়োজন পড়ে।',
    enExplanation: `### Explanation
1. **Redis Clustering (Horizontal Scaling)**:
   - To utilize 8 CPU cores, you must run 8 separate Redis process instances (nodes) and configure slot allocations.
   - Complexity: Requires managing cluster configurations, network ports, and routing layers in application clients.
   - Cross-slot commands (like joining keys) become slow or throw errors.
2. **Dragonfly (Vertical Scaling)**:
   - Sits on a single port.
   - Internally splits the keyspace across CPU threads. Sockets are routed to the thread owning the requested key.
   - **Vast Throughput**: Bypasses clustering network overhead, allowing a single server to handle millions of queries with zero configuration complexity.

### Real-World Example
In a gaming scoreboard backend, managing 8 Redis nodes in a cluster means writing complex logic to query player scores scattered across different nodes. Replacing the cluster with a single Dragonfly instance running on 8 threads simplifies backend code to standard commands while utilizing all CPU cores of the server.

### Best Practice
Use Dragonfly if your primary scaling bottleneck is CPU throughput on a single server, as it avoids the maintenance overhead of managing a Redis cluster with multiple instances and ports.

### Common Mistakes
Setting up a complex Redis cluster in small to medium applications where a single multi-threaded Dragonfly database could easily absorb all workloads with zero maintenance overhead.

### Code Example
\`\`\`bash
# Compare connection urls:
# Redis Cluster Connection (Requires client cluster routing):
# redis-cli -c -p 7000

# Dragonfly Connection (Identical to standard single Redis node):
# redis-cli -p 6379
# (Wire-compatible, no cluster routing flags needed in backend clients)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
১. **Redis Clustering (হরাইজন্টাল স্কেলিং)**:
   - ৮টি সিপিইউ কোর ব্যবহার করতে হলে আপনাকে ৮টি আলাদা রেডিস প্রসেস (নোড) রান করে ক্লাস্টার স্লট অ্যাসাইন করতে হবে।
   - সমস্যা: কোডে ক্লাস্টার ক্লায়েন্ট কনফিগার করা বেশ জটিল এবং ক্রস-স্লট কুয়েরি প্রায়ই এরর দেয়।
২. **Dragonfly (ভার্টিকাল স্কেলিং)**:
   - একটি মাত্র পোর্ট এবং একটি মাত্র নোডেই রান হয়।
   - এটি ইন্টারনালি কী-গুলোকে প্রসেসরের থ্রেডগুলোতে ভাগ করে প্রসেস করে।
   - সুবিধা: ক্লাস্টারিং নেটওয়ার্ক ল্যাগ ছাড়াই কোটি কোটি কুয়েরি প্রসেস করা যায় জটিলতা ছাড়াই।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গেমিং প্রজেক্টে প্লেয়ারদের লাইভ স্কোর ৮টি ভিন্ন রেডিস নোডে ছড়ানো থাকলে তাদের মার্জ করা কঠিন। ক্লাস্টার সরিয়ে ৮ থ্রেডের একটি সিঙ্গেল ড্রাগনফ্লাই ডেটাবেজ বসালে কোডের লজিক একদম নরমাল সিঙ্গেল রেডিসের মতোই রাখা যায়, অথচ সার্ভারের ৮টি প্রসেসর কোরই ফুল স্পিডে সচল থাকে।

### উত্তম অনুশীলন
সার্ভার মেইনটেন্যান্স খরচ ও কোডের জটিলতা কমাতে রেডিস ক্লাস্টারের পরিবর্তে ড্রাগনফ্লাইকে সিঙ্গেল পোর্টে ড্রপ-ইন প্রতিস্থাপক হিসেবে ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ছোট বা মাঝারি প্রজেক্টে রেডিস ক্লাস্টারিংয়ের পেছনে সময় নষ্ট করা, যেখানে একটি মাল্টি-থ্রেডেড ড্রাগনফ্লাই ডাটাবেজ কোনো বাড়তি কনফিগ ছাড়াই পুরো লোড সামলাতে পারত।

### Code Example
\`\`\`bash
# কানেকশন ইউআরএল তুলনা:
# রেডিস ক্লাস্টার কানেকশন (কোডে ক্লাস্টার রাউটিং ম্যাপ প্রসেস করতে হয়):
# redis-cli -c -p 7000

# ড্রাগনফ্লাই কানেকশন (নরমাল সিঙ্গেল রেডিসের মতোই অবিকল):
# redis-cli -p 6379
# (কোড ফাইলে এক্সট্রা কোনো ক্লাস্টার রাউটিং ফ্লাগ সেট করতে হয় না)
\`\`\``
  },
  {
    id: 'other-topics-59',
    title: 'Explain the difference between RxDB reactive queries and standard one-off fetch queries.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['RxDB', 'Reactive Queries', 'Observables', 'Database', 'Frontend'],
    enAnswer: 'Standard queries execute once and return static data. RxDB reactive queries return RxJS Observables that push new data arrays to the subscriber automatically whenever matching documents are modified in local IndexedDB.',
    bnAnswer: 'স্ট্যান্ডার্ড কুয়েরি একবার রান হয়ে স্ট্যাটিক ডাটা রিটার্ন করে। আর RxDB রিয়্যাক্টিভ কুয়েরি RxJS Observables রিটার্ন করে যা লোকাল IndexedDB-তে কোনো পরিবর্তন হলে সাবস্ক্রাইবারকে অটোমেটিক নতুন ডাটা পুশ করে।',
    enExplanation: `### Explanation
Traditional web apps fetch data once (e.g. using \`axios.get\`), render it, and remain static until a page refresh or user action triggers another fetch:
1. **Standard One-off Queries**:
   - Action: Read database -> return JSON -> Close connection.
   - Drawback: UI becomes stale if other components or tabs update the database state in the background.
2. **RxDB Reactive Queries**:
   - Action: Open query stream -> return Observable -> Listen to changes.
   - When any database write operation runs (even in a Web Worker or another browser tab), the query engine recalculates the query and pushes the new result array to the active subscription.

### Real-World Example
In a collaborative spreadsheet:
- With standard queries, you must click a "Refresh" button to see edits made by other users.
- With RxDB, you write \`db.rows.find().$\` which returns a live stream. When the sync protocol writes database updates in the background, the columns update reactively in real time.

### Best Practice
Always unsubscribe from RxDB Observables when React components unmount (e.g., in \`useEffect\` cleanup) to prevent memory leaks from long-lived listeners.

### Common Mistakes
Forgetting that reactive queries listen to *all* updates on a table. Not indexing sorting fields can cause RxDB to run expensive full-table scans repeatedly on every write, slowing down the UI thread.

### Code Example
\`\`\`typescript
import { useEffect, useState } from 'react';

export function LiveNotesList({ db }: { db: any }) {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    // 1. Subscribe to RxDB Query stream ($ represents Observable)
    const subscription = db.notes.find({
      sort: [{ createdAt: 'desc' }]
    }).$.subscribe((documents: any) => {
      // 2. Reactively set state when notes change
      setNotes(documents);
    });

    // 3. Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, [db]);

  return (
    <ul>
      {notes.map(n => <li key={n.id}>{n.title}</li>)}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ঐতিহ্যবাহী অ্যাপে এপিআই কল করার পর ডাটা রেন্ডার হয়ে স্ট্যাটিক থাকে। নতুন ডাটা দেখতে পেজ রিলোড দিতে হয়:
১. **স্ট্যান্ডার্ড কুয়েরি**:
   - কুয়েরি করে জেসন ডাটা রিটার্ন করে কানেকশন অফ করে দেয়। ব্যাকগ্রাউন্ডে ডাটা চেঞ্জ হলেও স্ক্রিনে ওল্ড ডাটা দেখা যায়।
২. **RxDB রিয়্যাক্টিভ কুয়েরি**:
   - এটি কুয়েরি সাবস্ক্রাইব করে লাইভ কানেকশন সচল রাখে।
   - ব্যাকগ্রাউন্ডে ডাটাবেজে নতুন কোনো রো বা কলাম রাইট হওয়ামাত্র কুয়েরিটি অটোমেটিক রি-রান হয়ে অ্যাপে লাইভ ডাটা পুশ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কোলাবোরেটিভ এক্সেল বা স্প্রেডশিটে:
- সাধারণ কুয়েরি ব্যবহার করলে অন্য ইউজারের এডিট দেখতে আপনাকে বারবার রিলোড বাটন প্রেস করতে হবে।
- RxDB ব্যবহার করলে কুয়েরিটি \`db.rows.find().$\` স্ট্রিম অন করে রাখবে। ব্যাকগ্রাউন্ড সিঙ্ক প্রোটোকল ডাটা রাইট করা মাত্রই লাইভ স্ক্রিন আপডেট হয়ে যাবে।

### উত্তম অনুশীলন
রিঅ্যাক্ট কম্পোনেন্ট আনমাউন্ট হওয়ার সময় অবশ্যই RxDB সাবস্ক্রিপশন আনসাবস্ক্রাইব (\`subscription.unsubscribe()\`) করুন যাতে মেমোরি লিক না হয়।

### সাধারণ ভুলসমূহ
রিয়্যাক্টিভ কুয়েরিতে সর্টিং ফিল্ডে ইনডেক্স ব্যবহার না করা। এর ফলে প্রতিবার ডাটা সেভের সময় পুরো টেবিল স্ক্যান করার কারণে ব্রাউজার থ্রেড স্লো হয়ে যায়।

### Code Example
\`\`\`typescript
import { useEffect, useState } from 'react';

export function LiveNotesList({ db }: { db: any }) {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    // ১. RxDB কুয়েরি স্ট্রিমে সাবস্ক্রাইব করা হলো ($ রিপ্রেজেন্ট করে Observable)
    const subscription = db.notes.find({
      sort: [{ createdAt: 'desc' }]
    }).$.subscribe((documents: any) => {
      // ২. ডাটা চেঞ্জ হওয়া মাত্র রিঅ্যাক্ট স্টেট আপডেট হবে
      setNotes(documents);
    });

    // ৩. আনমাউন্ট হলে কানেকশন ডিসকানেক্ট করা হচ্ছে
    return () => subscription.unsubscribe();
  }, [db]);

  return (
    <ul>
      {notes.map(n => <li key={n.id}>{n.title}</li>)}
    </ul>
  );
}
\`\`\``
  },
  {
    id: 'other-topics-60',
    title: 'How does Dexie.js manage database schema upgrades and data migrations?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Dexie.js', 'IndexedDB', 'Migrations', 'Database Schema', 'Upgrades'],
    enAnswer: 'Dexie.js manages upgrades by defining version numbers in stores. If the version increases, Dexie updates table indexes and runs upgrade() callbacks to modify existing documents synchronously before resolving open connections.',
    bnAnswer: 'Dexie.js স্টোরে ভার্সন নম্বর ডিফাইন করে আপগ্রেড ম্যানেজ করে। ভার্সন বাড়লে ডেক্স টেবিল ইনডেক্স আপডেট করে এবং রানিং কানেকশন চালুর পূর্বে upgrade() কলব্যাক দিয়ে ওল্ড ডকুমেন্টে ডাটা মাইগ্রেশন সম্পন্ন করে।',
    enExplanation: `### Explanation
IndexedDB schemas cannot be modified dynamically at runtime. When updating your application code, you must manage schema migrations:
1. **Version Declarations**:
   - \`db.version(1).stores({ users: 'id, name' })\`
   - \`db.version(2).stores({ users: 'id, name, age' })\` (Adds \`age\` index).
2. **\`upgrade(tx => { ... })\` Callback**:
   - Runs strictly when the browser detects a version upgrade.
   - The callback receives a transaction object. You can read old documents, modify their structures (e.g. splitting full names to first/last), and write them back before the database opens.

### Real-World Example
In a chat app, version 1 stores messages with a simple timestamp. Version 2 updates to store structured ISO strings. You publish version 2 with an \`.upgrade()\` callback that reads all version 1 messages, converts the numbers to ISO strings, and overwrites the records. This prevents the new frontend code from crashing on old database schemas.

### Best Practice
Keep all historical versions and upgrade paths in your Dexie code. When a user who hasn't opened your app in months visits, Dexie executes each upgrade block sequentially (v1 -> v2 -> v3) to ensure their local data migrates safely.

### Common Mistakes
Modifying version schemas directly in place without increasing the version number (e.g., editing \`version(1)\` definitions). The browser will not trigger upgrades, causing schemas to mismatch and crash.

### Code Example
\`\`\`typescript
import Dexie from 'dexie';

const db = new Dexie('AppDatabase') as any;

// Version 1 definition
db.version(1).stores({
  users: '++id, name'
});

// Version 2 upgrade: Add age index and migrate old documents!
db.version(2)
  .stores({
    users: '++id, name, age' // New index added
  })
  .upgrade(async (tx) => {
    // Migrate old documents: set default age for existing users
    return tx.table('users').toCollection().modify((user: any) => {
      user.age = 18; // Default value to prevent null pointer crashes in new code
    });
  });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্রাউজারের IndexedDB স্কিমা সরাসরি রানটাইমে এডিট করা যায় না। প্রজেক্ট কোড আপডেট করার সময় ডাটাবেজ মাইগ্রেশন মেইনটেইন করা আবশ্যক:
১. **ভার্সন ডিক্লেয়ারেশন**:
   - \`db.version(1).stores({ users: 'id, name' })\`
   - \`db.version(2).stores({ users: 'id, name, age' })\` (নতুন ইনডেক্স যুক্ত হলো)।
২. **\`upgrade\` কলব্যাক**:
   - এটি কেবল তখনই রান হয় যখন ব্রাউজার দেখে ওল্ড ডাটাবেজের চেয়ে নিউ কোডের ভার্সন বেশি।
   - এটি ডাটাবেজ সচল হওয়ার পূর্বেই ওল্ড ডকুমেন্টে কাস্টম চেঞ্জ রান করার ট্রানজ্যাকশন পারমিশন দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেসেঞ্জারে ভার্সন ১-এ মেসেজের সময় প্লেইন নাম্বারে সেভ হতো। ভার্সন ২-এ স্ট্যান্ডার্ড আইএসও (ISO) ডেট দরকার। আপনি ভার্সন ২ রিলিজ দিয়ে একটি \`.upgrade()\` কলব্যাক লিখে দিলেন যা লোকাল ডেটার ওল্ড নাম্বারগুলোকে আইএসও ডেটে কনভার্ট করে সেভ করে দিবে, ফলে নতুন ফ্রন্টএন্ড কোড ক্র্যাশ করবে না।

### উত্তম অনুশীলন
কোড ফাইলে সব ঐতিহাসিক ভার্সন আপগ্রেডের সিকোয়েন্স ধাপে ধাপে রেখে দিন। অনেক দিন পর পর ইউজার অ্যাপে ঢুকলেও ডেক্সি সিকোয়েন্স অনুযায়ী v1 -> v2 -> v3 একটার পর একটা রান করে ডাটা অক্ষুণ্ণ রাখবে।

### সাধারণ ভুলসমূহ
কোডের ভার্সন নম্বর না বাড়িয়ে সরাসরি পূর্বের স্কিমা লাইন এডিট করা। এর ফলে ব্রাউজার কোনো ডিরেক্টরি চেঞ্জ ডিটেক্ট করতে পারে না এবং অ্যাপ ক্র্যাশ করে।

### Code Example
\`\`\`typescript
import Dexie from 'dexie';

const db = new Dexie('AppDatabase') as any;

// ভার্সন ১ স্কিমা
db.version(1).stores({
  users: '++id, name'
});

// ভার্সন ২ আপগ্রেড: নতুন ইনডেক্স ও ওল্ড ডাটায় মাইগ্রেশন রান করা হচ্ছে
db.version(2)
  .stores({
    users: '++id, name, age' // নতুন ইনডেক্স
  })
  .upgrade(async (tx) => {
    // ওল্ড ডাটায় মডিফাই রান করা হলো
    return tx.table('users').toCollection().modify((user: any) => {
      user.age = 18; // ক্র্যাশ এড়াতে ডিফল্ট বয়স ১৮ সেট করা হলো
    });
  });
\`\`\``
  },
  {
    id: 'other-topics-61',
    title: 'Explain Nginx configuration rules for serving single-page applications (SPAs) and handling client-side routing.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Nginx', 'Single-page Application', 'SPA', 'Routing', 'try_files'],
    enAnswer: 'Configure Nginx for SPAs by using the try_files directive inside the location / block to fallback to index.html. This allows React or Vue routers to resolve URL paths instead of throwing Nginx 404 errors.',
    bnAnswer: 'এসপিএ (SPA) রাউটিংয়ের জন্য Nginx-এর location / ব্লকের ভেতর try_files ডিরেক্টিভ ব্যবহার করে index.html-কে ফলব্যাক করতে হয়। এটি Nginx-এর ৪০৪ এরর এড়াতে সাহায্য করে রিঅ্যাক্ট/ভিউ রাউটারকে কাজ করার সুযোগ দেয়।',
    enExplanation: `### Explanation
In single-page applications (like React Router, Vue Router), routing is handled entirely in the browser using the HTML5 History API:
1. **The 404 Problem**:
   - When a user visits \`myweb.com/dashboard\`, the browser sends a request to Nginx looking for a physical folder/file named \`/dashboard\`.
   - Because React compiled into a single \`index.html\` file, no \`/dashboard\` directory exists on the disk. Nginx returns a \`404 Not Found\` error.
2. **\`try_files $uri $uri/ /index.html\`**:
   - Tells Nginx: First check if the physical file exists (\`$uri\`).
   - Second, check if the folder exists (\`$uri/\`).
   - If neither is found, fallback and return \`/index.html\`.
   - The browser receives \`index.html\`, runs your JavaScript bundle, reads the URL path, and renders the Dashboard view smoothly.

### Real-World Example
In a React Router app, refreshing the page on \`/profile\` without Nginx configuration shows Nginx's default 404 page. Adding the \`try_files\` configuration redirects all traffic back to the single-page javascript router, restoring the profile view on refresh.

### Best Practice
Always place your static assets (like \`/assets/\` or \`/static/\`) inside specific location blocks with custom cache headers, and keep \`try_files\` exclusively for the root \`location /\` routing fallback.

### Common Mistakes
Forgetting the final \`/index.html\` fallback in \`try_files\`, causing users to get 404 page crashes on every direct URL navigation or refresh.

### Code Example
\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;
    root /var/www/myapp/dist;

    # 1. Root handler for Single-page Application
    location / {
        index index.html;
        # Check files -> check folder -> fallback to index.html
        try_files $uri $uri/ /index.html;
    }

    # 2. Optimize static assets with high caching expiry
    location ~* \\.(?:css|js|jpg|jpeg|gif|png|ico|svg|woff|woff2|webp)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট বা ভিউ-এর মতো সিঙ্গেল পেজ অ্যাপ্লিকেশনগুলোতে (SPA) রাউটিং পুরোপুরি ক্লায়েন্ট-সাইড ব্রাউজারে হিস্ট্রি এপিআই (HTML5 History API) দিয়ে হ্যান্ডেল করা হয়:
১. **৪০৪ (404) সমস্যা**:
   - ইউজার সরাসরি \`site.com/dashboard\` লিংকে গেলে Nginx সার্ভার ফিজিক্যাল ড্রাইভে \`/dashboard\` নামের কোনো ফোল্ডার বা ফাইল খোঁজার চেষ্টা করে।
   - যেহেতু প্রজেক্টে একটিমাত্র \`index.html\` ফাইল ছাড়া আর কিছু থাকে না, তাই Nginx ফাইল খুঁজে না পেয়ে ৪০৪ এরর শো করে।
২. **\`try_files $uri $uri/ /index.html\` সমাধান**:
   - এটি Nginx-কে বলে: প্রথমে ফাইলের ইউআরএল খোঁজ (\`$uri\`)।
   - না পেলে ওই নামের ফোল্ডার খোঁজ (\`$uri/\`)।
   - তাও না পেলে ডিরেক্ট \`/index.html\` ফাইলটি রিটার্ন করো।
   - ব্রাউজার ইনডেক্স ফাইল পেয়ে রিয়্যাক্ট রাউটার সক্রিয় করে সঠিক পেজটি স্ক্রিনে রেন্ডার করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি রিঅ্যাক্ট রাউটার প্রজেক্টে প্রোফাইল পেজে (\`/profile\`) থাকা অবস্থায় ব্রাউজার রি-লোড দিলে Nginx ৪০৪ এরর স্ক্রিন দেখায়। \`try_files\` কনফিগার করে দিলে রি-লোডের পরও পেজটি সুন্দরভাবে রিমোট এপিআই সিঙ্ক করে প্রোফাইল পেজ সচল রাখে।

### উত্তম অনুশীলন
স্ট্যাটিক ফাইলগুলোকে দ্রুত লোড করতে ক্যাশ হেডার সহ আলাদা লোকেশন ব্লক ডিফাইন করুন এবং রুট লোকেশনে \`try_files\` এর ট্র্যাকিং সচল রাখুন।

### সাধারণ ভুলসমূহ
\`try_files\`-এর শেষে \`/index.html\` লিখতে ভুলে যাওয়া, যার ফলে যেকোনো সাব-রাউট রি-লোড করলেই ৪০৪ পেজ ক্র্যাশ হয়।

### Code Example
\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;
    root /var/www/myapp/dist;

    # ১. সিঙ্গেল-পেজ অ্যাপ্লিকেশন রাউটিং হ্যান্ডলার
    location / {
        index index.html;
        # ফাইল চেক -> ফোল্ডার চেক -> না পেলে index.html ফলব্যাক
        try_files $uri $uri/ /index.html;
    }

    # ২. স্ট্যাটিক মিডিয়া ফাইলগুলোর ক্যাশিং অপ্টিমাইজেশন
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|svg|woff|woff2|webp)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
\`\`\``
  },
  {
    id: 'other-topics-62',
    title: 'Explain the difference between Git merge and Git rebase conflict resolution flows.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Git', 'Conflicts', 'Merge', 'Rebase', 'Version Control'],
    enAnswer: 'Git merge resolves conflicts in a single merge commit after combining code. Git rebase resolves conflicts commit-by-commit as it reapplies your branch changes, requiring you to run git rebase --continue after each fix.',
    bnAnswer: 'Git merge কোড মার্জ করার পর সব কনফ্লিক্ট একসাথে একটিমাত্র মার্জ কমিটে সমাধান করে। আর Git rebase কমিট-বাই-কমিট ধরে কনফ্লিক্ট সলভ করায়, যেখানে প্রতিটা কমিট ফিক্স করার পর git rebase --continue রান করতে হয়।',
    enExplanation: `### Explanation
When Git detects changes to the same line in both the feature branch and target branch, it pauses to ask for manual conflict resolution:
1. **Merge Conflict Resolution**:
   - Git attempts to merge both branches. If conflicts are found, it stops and marks the files.
   - You resolve all conflicts across all files at once.
   - Run \`git add\` and \`git commit\` to create the final **merge commit**.
2. **Rebase Conflict Resolution**:
   - Git rolls back your feature commits, pulls latest target commits, and applies your commits one-by-one.
   - If commit 1 conflicts, Git pauses. You resolve the conflict, run \`git add\`, and type \`git rebase --continue\`.
   - Git then applies commit 2. If it conflicts, you resolve it and type \`git rebase --continue\`. This repeats.

### Real-World Example
If you wrote 5 commits altering a helper file, and the team updated the same file on main:
- **Merge**: You resolve all changes once, test the app, and save. One merge commit is created.
- **Rebase**: You may have to resolve conflicts 5 times (once for each commit) as Git replays history. While more tedious, it keeps your commits clean and linear.

### Best Practice
If you have too many commits on a branch, run an interactive rebase (\`git rebase -i\`) to squash them into 1 or 2 logical commits *before* rebasing on main. This reduces the conflict resolution loop to a single step.

### Common Mistakes
Running \`git commit\` inside a rebase conflict resolution. You must only run \`git rebase --continue\`; running \`git commit\` will abort or corrupt the active rebase loop.

### Code Example
\`\`\`bash
# --- MERGE CONFLICT FLOW ---
$ git merge main
# (Pauses due to conflict)
# 1. Edit conflicting files to resolve
$ git add .
$ git commit -m "Merge main and resolve conflicts"

# --- REBASE CONFLICT FLOW ---
$ git rebase main
# (Pauses due to conflict on Commit 1)
# 1. Edit conflicting files to resolve
$ git add .
$ git rebase --continue
# (Pauses on Commit 2 if conflict exists, repeat steps)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ফিচার ব্রাঞ্চ ও মেইন ব্রাঞ্চ একই ফাইলের একই লাইনে এডিট করলে গিট দ্বন্দ্ব বা কনফ্লিক্ট হিসেবে চিহ্নিত করে প্রসেস পজ করে দেয়:
১. **মার্জ কনফ্লিক্ট সমাধান**:
   - গিট মার্জ অপারেশন ফায়ার করে। কনফ্লিক্ট পেলে ফাইলগুলো রেড মার্ক করে।
   - আপনি সব ফাইলের কনফ্লিক্ট একসাথে এডিট করে মিটমাট করবেন।
   - শেষে \`git add\` ও \`git commit\` করে একটি মার্জ কমিট তৈরি করবেন।
২. **রিবেস কনফ্লিক্ট সমাধান**:
   - গিট আপনার সব কমিট রিওয়াইন্ড করে মেইনের শেষ মাথায় নিয়ে একটি একটি করে কমিট বসাতে থাকে।
   - ১ম কমিটে কনফ্লিক্ট হলে গিট পজ হবে। আপনি সলভ করে \`git add\` দিয়ে \`git rebase --continue\` লিখবেন।
   - এরপর ২য় কমিট বসানোর সময় কনফ্লিক্ট হলে পুনরায় সলভ করে \`git rebase --continue\` লিখবেন।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি একটি হেল্পার ফাইলে ৫টি সেভ কমিট দিয়েছিলেন, যার সাথে মেইন ব্রাঞ্চের কোড কনফ্লিক্ট করছে:
- **Merge**: আপনি একবারে সব কনফ্লিক্ট ক্লিয়ার করে একটি ফাইনাল টেস্ট দিয়ে মার্জ কমিট করে দিলেন। কাজ শেষ।
- **Rebase**: গিট একে একে আপনার ৫টি কমিট টেস্ট করবে। তাই আপনাকে ৫ বার কনফ্লিক্ট উইন্ডো সলভ করতে হতে পারে। তবে এটি গিট হিস্ট্রি সরলরেখায় ক্লিন রাখে।

### উত্তম অনুশীলন
রিবেস করার আগে আপনার ব্রাঞ্চের ছোট ছোট অগুরুত্বপূর্ণ কমিটগুলোকে ইন্টারেক্টিভ রিবেস (\`rebase -i\`) দিয়ে ১টি বা ২টি কমিটে মার্জ বা স্কোয়াশ করে নিন। এতে রিবেস কনফ্লিক্ট লুপ বারবার ফেস করতে হবে না।

### সাধারণ ভুলসমূহ
রিবেস কনফ্লিক্ট সমাধানের পর ভুলে \`git commit\` টাইপ করা। রিবেসের সময় নতুন কমিট করা নিষিদ্ধ; শুধুমাত্র \`git rebase --continue\` রান করতে হবে।

### Code Example
\`\`\`bash
# --- মার্জ কনফ্লিক্ট সমাধান ফ্লো ---
$ git merge main
# (কনফ্লিক্ট এরর দিল)
# ১. ফাইল ওপেন করে কনফ্লিক্ট ফিক্স করুন
$ git add .
$ git commit -m "Merge main and resolve conflicts"

# --- রিবেস কনফ্লিক্ট সমাধান ফ্লো ---
$ git rebase main
# (১ম কমিটে কনফ্লিক্ট এরর দিল)
# ১. ফাইল ওপেন করে ১ম কনফ্লিক্ট ফিক্স করুন
$ git add .
$ git rebase --continue
# (পরবর্তী কমিটে কনফ্লিক্ট থাকলে রি-রান হবে)
\`\`\``
  },
  {
    id: 'other-topics-63',
    title: 'How do you configure GitHub Actions environments and caching to speed up CI runs?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['GitHub Actions', 'CI/CD', 'Caching', 'Performance Optimization', 'DevOps'],
    enAnswer: 'Configure caching in GitHub Actions using actions/cache or bundler setup actions (like actions/setup-node with cache: "npm"). This stores the node_modules folder in GitHubs cache memory to prevent downloading dependencies on every build.',
    bnAnswer: 'GitHub Actions-এ actions/cache বা setup-node-এর cache: "npm" কনফিগ করে ক্যাশিং করা হয়। এটি node_modules ফোল্ডারটি গিটহাব মেমরিতে ক্যাশ করে রাখে যাতে প্রতি বিলে প্যাকেজ ডাউনলোড করতে না হয়।',
    enExplanation: `### Explanation
GitHub bills CI runners based on execution minutes. Installing Node dependencies (\`npm install\`) on every push takes 1-2 minutes and consumes budget:
1. **GitHub Actions Caching**:
   - Saves specified folders (like node_modules or build cache) indexed by a unique key (usually a hash of \`package-lock.json\`).
   - On the next run, if the key matches (meaning packages did not change), the runner restores the directory instantly from cache.
2. **Setup-Node Integration**:
   - Modern setup actions have built-in caching: \`cache: 'npm'\` or \`cache: 'yarn'\`.
   - Simplifies YAML configurations.

### Real-World Example
In a React project with 50+ npm dependencies:
- Without Caching: Running tests takes 2 minutes and 40 seconds.
- With Caching: The runner restores the \`node_modules\` folder in 4 seconds. The test suite finishes in 45 seconds, saving 70% of runner time.

### Best Practice
Include the \`package-lock.json\` hash inside the cache key definition (e.g. \`key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}\`). This guarantees the cache invalidates and updates automatically whenever you run npm install or add new packages.

### Common Mistakes
Caching directories that contain volatile build metadata (like dynamic env files), which can inject obsolete environment configurations into new production builds.

### Code Example
\`\`\`yaml
# Optimized GitHub Actions Workflow with Caching
name: CI Verification

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      # Set up Node with automatic npm cache mapping
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm' # Automatically caches global npm cache!

      - name: Install dependencies
        run: npm ci

      - name: Run Tests
        run: npm test
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
গিটহাব অ্যাকশন রানার প্রতি মিনিটের জন্য বিল জেনারেট করে। প্রতিবার কোড পুশ করার সময় \`npm install\` রান করলে ১-২ মিনিট এক্সট্রা সময় নষ্ট হয়:
১. **গিটহাব অ্যাকশনস ক্যাশিং**:
   - এটি নির্দিষ্ট ফোল্ডার (যেমন \`node_modules\`) একটি ইউনিক কী-এর (যেমন: \`package-lock.json\`-এর হ্যাশ কোড) অধীনে ক্লাউড মেমরিতে সেভ রাখে।
   - পরবর্তী রান করার সময় কী ম্যাচ করলে গিটহাব ডাউনলোড না করে সরাসরি ক্লাউড ক্যাশ রিস্টোর করে দেয়।
২. **Setup-Node বিল্ট-ইন ক্যাশ**:
   - আধুনিক নোড প্লাগইনে সরাসরি \`cache: 'npm'\` লিখে এটি সচল করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বড় প্রজেক্টে অনেক লাইব্রেরি ইনস্টল করা আছে:
- ক্যাশ ছাড়া: টেস্ট রান হতে ২ মিনিট ৪০ সেকেন্ড সময় লাগে।
- ক্যাশ সহ: রানার মাত্র ৪ সেকেন্ডে সম্পূর্ণ \`node_modules\` রিস্টোর করে নেয়। সম্পূর্ণ পাইপলাইন ৪৫ সেকেন্ডে শেষ হয়, যা প্রায় ৭০% রানার টাইম বাঁচায়।

### উত্তম অনুশীলন
ক্যাশ কী-এর সাথে লক ফাইলের হ্যাশ যুক্ত করুন: \`key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}\`। এর ফলে নতুন কোনো লাইব্রেরি ইনস্টল করা মাত্রই ওল্ড ক্যাশটি অটোমেটিক বাতিল হয়ে নতুন ক্যাশ তৈরি হবে।

### সাধারণ ভুলসমূহ
ডায়নামিক এনভায়রনমেন্ট কনফিগ ক্যাশ করে ফেলা, যার ফলে বিল্ডের সময় পুরোনো কনফিগারেশন ফাইল কন্টেইনারে ইনজেক্ট হয়ে যেতে পারে।

### Code Example
\`\`\`yaml
# ক্যাশ সহ অপ্টিমাইজড গিটহাব অ্যাকশনস ফাইল
name: CI Verification

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      # অটোমেটিক এনপিএম ক্যাশ সহ নোড সেটআপ করা হচ্ছে
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm' # এনপিএম গ্লোবাল ক্যাশ স্টোর করবে

      - name: Install dependencies
        run: npm ci

      - name: Run Tests
        run: npm test
\`\`\``
  },
  {
    id: 'other-topics-64',
    title: 'Explain Jest mock clear, reset, and restore APIs (clearMocks, resetMocks, restoreMocks).',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Jest', 'Testing', 'Mocking API', 'Unit Testing', 'Debugging'],
    enAnswer: 'clearMocks clears call history metrics on mock functions. resetMocks clears call history and removes custom mock implementations (resets to empty mock). restoreMocks restores original non-mocked behaviors for spied functions.',
    bnAnswer: 'clearMocks মক ফাংশনের পূর্বের কল হিস্ট্রি মুছে ফেলে। resetMocks কল হিস্ট্রি মুছার পাশাপাশি কাস্টম ইমপ্লিমেন্টেশনগুলো ডিলেট করে দেয়। আর restoreMocks স্পাই করা ফাংশনের আগের রিয়াল বিহেভিয়ার রিস্টোর করে।',
    enExplanation: `### Explanation
When running multiple tests in the same suite, mock states can spill over, causing assertions like \`toHaveBeenCalledTimes\` to fail unexpectedly:
1. **\`jest.clearMocks()\`**:
   - Clears the list of calls, arguments, and instances of the mocks.
   - *Keeps* the custom implementations/return values you defined.
2. **\`jest.resetMocks()\`**:
   - Clears calls history AND wipes out custom implementations.
   - Resets mocks back to a default \`jest.fn()\` returning \`undefined\`.
3. **\`jest.restoreMocks()\`**:
   - Only works for mocks created using \`jest.spyOn()\`.
   - Restores the original, real function implementation, stopping the spy.

### Real-World Example
In a test file, Test 1 calls a mocked database saver: it asserts it was called 1 time.
- If you don't clear mocks, and Test 2 calls the database saver again: Test 2 asserts it was called 1 time, but the test fails because the total call count is now 2.
- Calling \`jest.clearMocks()\` in \`beforeEach\` resets the count back to 0 before Test 2 starts.

### Best Practice
Configure your Jest settings (\`jest.config.js\`) to set \`clearMocks: true\` or call \`jest.clearAllMocks()\` in a global \`beforeEach\` block to guarantee a clean slate for every test case.

### Common Mistakes
Using \`jest.resetMocks()\` when you have defined a global mock implementation at the top of the test file, which deletes the global mockup and causes all tests to return \`undefined\`.

### Code Example
\`\`\`typescript
const mockDatabase = {
  save: jest.fn().mockReturnValue('saved_id')
};

describe('Mock Cleanups', () => {
  beforeEach(() => {
    // Reset mock execution counts before every test case
    jest.clearAllMocks();
  });

  test('Test case 1', () => {
    mockDatabase.save();
    expect(mockDatabase.save).toHaveBeenCalledTimes(1);
  });

  test('Test case 2', () => {
    // Without clearAllMocks, this check would fail because count would be 2!
    mockDatabase.save();
    expect(mockDatabase.save).toHaveBeenCalledTimes(1);
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জেস্ট টেস্ট ফাইল রান করার সময় একটি টেস্টের মক ডাটা ও কল-হিস্ট্রি অন্য টেস্টে চলে গেলে ভুল এরর দেখায়। এটি সলভ করতে ক্লিনআপ মেথডগুলো ব্যবহৃত হয়:
১. **\`jest.clearMocks()\`**:
   - মক ফাংশনটি কতবার কল হয়েছে এবং কী প্যারামিটার পেয়েছে তা মেমোরি থেকে ক্লিয়ার করে।
   - তবে আপনি মক ফাংশনে যে কাস্টম রিটার্ন ভ্যালু সেট করে রেখেছিলেন তা অক্ষুণ্ণ রাখে।
২. **\`jest.resetMocks()\`**:
   - এটি মক কল হিস্ট্রি ক্লিয়ার করার পাশাপাশি কাস্টম ইমপ্লিমেন্টেশন পুরো ডিলিট করে খালি মকে রূপান্তর করে।
৩. **\`jest.restoreMocks()\`**:
   - এটি শুধুমাত্র \`jest.spyOn()\` দিয়ে তৈরি করা মকের ওপর কাজ করে এবং রিয়েল ফাংশন রিস্টোর করে।

### বাস্তব-ভিত্তিক উদাহরণ
টেস্ট ১-এ ইউজার ক্রিয়েট ফাংশনটি ১ বার রান হলো।
- আপনি যদি মক ক্লিয়ার না করেন, তবে টেস্ট ২-এ ইউজার ক্রিয়েট আবার রান হলে জেস্ট মনে করবে এটি মোট ২ বার রান হয়েছে। ফলস্বরূপ টেস্ট ২ ফেইল করবে।
- \`beforeEach\` হুকের ভেতর \`jest.clearMocks()\` কল করে দিলে প্রতিটি নতুন টেস্টের শুরুতে কাউন্টার আবার ০ হয়ে যায়।

### উত্তম অনুশীলন
প্রতিটি টেস্ট ফাইল ক্লিন রাখতে জেস্ট কনফিগ ফাইলে \`clearMocks: true\` অন করে রাখুন অথবা টেস্ট ফাইলে গ্লোবাল \`beforeEach\` ক্লিনআপ যুক্ত করুন।

### সাধারণ ভুলসমূহ
গ্লোবাল মক ডিফাইন করার পর টেস্টের মাঝে \`jest.resetMocks()\` কল করা, যা মকের কাস্টম রিটার্ন লজিক ডিলিট করে ইউজারকে \`undefined\` এরর দেয়।

### Code Example
\`\`\`typescript
const mockDatabase = {
  save: jest.fn().mockReturnValue('saved_id')
};

describe('Mock Cleanups', () => {
  beforeEach(() => {
    // প্রতি টেস্টের পূর্বে রান কাউন্ট ০ করে দেওয়া হচ্ছে
    jest.clearAllMocks();
  });

  test('Test case 1', () => {
    mockDatabase.save();
    expect(mockDatabase.save).toHaveBeenCalledTimes(1);
  });

  test('Test case 2', () => {
    // clearAllMocks না থাকলে এই চেকটি ফেইল করতো কারণ কাউন্ট ২ দেখাতো!
    mockDatabase.save();
    expect(mockDatabase.save).toHaveBeenCalledTimes(1);
  });
});
\`\`\``
  },
  {
    id: 'other-topics-65',
    title: 'Explain how Playwright handles browser contexts, and how this assists in testing multi-user roles.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Playwright', 'Browser Contexts', 'Multi-user Testing', 'E2E Testing'],
    enAnswer: 'Playwright Browser Contexts are isolated incognito-like sessions running inside a single browser instance. They allow you to test multi-user roles (e.g. Admin and Client) in parallel without cookie collision.',
    bnAnswer: 'প্লেরাইট ব্রাউজার কনটেক্সট হলো একটি ব্রাউজার ইনস্ট্যান্সের ভেতর রান হওয়া একাধিক স্বাধীন ইনকগনিটো সেশন। এটি কুকি সংঘর্ষ ছাড়া একই সাথে একাধিক ইউজার রোলের (যেমন: এডমিন ও ক্লায়েন্ট) টেস্ট করতে সাহায্য করে।',
    enExplanation: `### Explanation
In traditional E2E testing (like Selenium), testing multi-user flows requires launching multiple heavy browser windows, consuming CPU and memory:
1. **Browser Contexts**:
   - Playwright launches one physical browser process.
   - It instantiates multiple independent \`BrowserContexts\` inside it.
   - Each context has its own cookies, localStorage, and session states, behaving like a fresh incognito window.
   - Spin-up time is near 0ms, and resource overhead is minimal.
2. **Multi-User testing**:
   - You can assign Context A to an "Admin" session and Context B to a "Customer" session.
   - Both contexts execute tasks concurrently in the same test runner script.

### Real-World Example
In a support chat application:
- You create Context A (Admin), open the support dashboard, and listen for messages.
- You create Context B (Customer), open the website, and type a message "Help me".
- The test asserts that the message sent in Context B instantly renders inside Context A's admin panel window.

### Best Practice
Use \`browser.newContext()\` manually when testing collaborative or chat features. For standard single-user tests, rely on the default \`page\` fixture, which sets up a fresh browser context automatically.

### Common Mistakes
Trying to run multi-user tests using a single \`page\` reference, which causes the second user login to overwrite the active session cookie of the first user.

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('collaborative user chat test', async ({ browser }) => {
  // 1. Create isolated session for Admin
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await adminPage.goto('https://myapp.com/admin');
  await adminPage.fill('#login', 'admin_user');

  // 2. Create isolated session for Customer
  const customerContext = await browser.newContext();
  const customerPage = await customerContext.newPage();
  await customerPage.goto('https://myapp.com/chat');
  await customerPage.fill('#chat-input', 'Hello Support!');
  await customerPage.click('#send-btn');

  // 3. Verify Admin received the message in their window
  const adminChatSelector = adminPage.locator('.chat-messages');
  await expect(adminChatSelector).toContainText('Hello Support!');

  // Close contexts to free memory
  await adminContext.close();
  await customerContext.close();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রচলিত E2E টেস্টিংয়ে (যেমন সেলিনিয়াম) একাধিক ইউজারের কাজ টেস্ট করতে হলে একাধিক ভারী ব্রাউজার উইন্ডো ওপেন করতে হতো যা কম্পিউটার স্লো করে দেয়:
১. **ব্রাউজার কনটেক্সট (Browser Contexts)**:
   - প্লেরাইট একটি মাত্র ফিজিক্যাল ব্রাউজার প্রসেস চালু করে।
   - এর ভেতর একাধিক স্বাধীন \`BrowserContexts\` বা ইনকগনিটো সেশন তৈরি করে।
   - প্রতিটি কনটেক্সটের কুকি, লোকালস্টোরেজ সম্পূর্ণ আলাদা হওয়ায় কেউ কারো সেশন ওভাররাইট করে না।
২. **মাল্টি-ইউজার টেস্টিং**:
   - আপনি কনটেক্সট A-তে "এডমিন" এবং কনটেক্সট B-তে "কাস্টমার" সেশন একযোগে রান করাতে পারেন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইভ কাস্টমার চ্যাট প্রজেক্টে:
- আপনি কনটেক্সট A (এডমিন) চালু করে সাপোর্ট স্ক্রিন ওপেন করে রাখলেন।
- কনটেক্সট B (কাস্টমার) চালু করে চ্যাট বক্সে লিখলেন "আমাকে সাহায্য করুন" এবং সেন্ড করলেন।
- টেস্ট কোড ভ্যালিডেট করবে কাস্টমারের পাঠানো মেসেজটি এডমিন উইন্ডোতে লাইভ শো হচ্ছে কিনা।

### উত্তম অনুশীলন
কোলাবোরেটিভ ফিচার টেস্ট করতে ম্যানুয়ালি \`browser.newContext()\` ব্যবহার করুন। আর সিঙ্গেল-ইউজার টেস্ট হলে প্লেরাইটের ডিফল্ট \`page\` অপশনটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
একটি মাত্র \`page\` অবজেক্ট দিয়ে ২ জন ইউজারের লগইন টেস্ট করার চেষ্টা করা, যার ফলে ২য় বার লগইন করার সময় ১ম ইউজারের কুকি ক্লিয়ার হয়ে সেশন নষ্ট হয়ে যায়।

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('collaborative user chat test', async ({ browser }) => {
  // ১. এডমিনের জন্য আলাদা ব্রাউজার সেশন তৈরি
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await adminPage.goto('https://myapp.com/admin');
  await adminPage.fill('#login', 'admin_user');

  // ২. কাস্টমারের জন্য আলাদা ব্রাউজার সেশন তৈরি
  const customerContext = await browser.newContext();
  const customerPage = await customerContext.newPage();
  await customerPage.goto('https://myapp.com/chat');
  await customerPage.fill('#chat-input', 'Hello Support!');
  await customerPage.click('#send-btn');

  // ৩. এডমিনের স্ক্রিনে চ্যাট মেসেজটি এসেছে কিনা যাচাই
  const adminChatSelector = adminPage.locator('.chat-messages');
  await expect(adminChatSelector).toContainText('Hello Support!');

  // মেমোরি ফ্রী করতে সেশন বন্ধ করা হচ্ছে
  await adminContext.close();
  await customerContext.close();
});
\`\`\``
  },
  {
    id: 'other-topics-66',
    title: 'How do you handle API request mocking and network interception in Playwright?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Playwright', 'API Mocking', 'Network Interception', 'E2E Testing'],
    enAnswer: 'Intercep network requests in Playwright using page.route(). You can mock backend API responses by intercepting the target URL and returning custom mock JSON payloads using route.fulfill().',
    bnAnswer: 'Playwright-এ নেটওয়ার্ক ইন্টারসেপ্ট করতে page.route() ব্যবহার করা হয়। নির্দিষ্ট ইউআরএল-এর এপিআই রিকোয়েস্ট আটকে route.fulfill() দিয়ে মক জেসন ডাটা রিটার্ন করে টেস্ট সচল রাখা যায়।',
    enExplanation: `### Explanation
When running E2E tests, hitting actual backend databases or external endpoints (like Stripe) is slow, can cost money, and introduces network failures:
1. **\`page.route(url, handler)\`**:
   - Intercepts outgoing HTTP requests matching the URL pattern.
2. **\`route.fulfill(options)\`**:
   - Returns a mock response instantly to the browser, bypassing the server.
   - You can specify mock \`status\`, custom \`headers\`, and \`json\` body payloads.
3. **\`route.continue()\`**:
   - Allows specific requests to proceed to the actual server.

### Real-World Example
In a weather dashboard widget, rendering depends on a heavy third-party weather API. In your Playwright test, you intercept calls to \`*/api/weather*\` and return \`{ temp: '25C', condition: 'Sunny' }\`. The browser renders the mock stats instantly, allowing you to test UI rendering stability without making real API calls.

### Best Practice
Always mock external third-party payment or email gateway APIs during E2E testing. This prevents your tests from creating fake bills or flooding real users with test emails.

### Common Mistakes
Not using wildcards in route patterns when API URLs contain query parameters (e.g. \`/api/data?id=5\`), causing requests to bypass the mock and hit the live server.

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('mocks weather dashboard API response', async ({ page }) => {
  // 1. Intercept API request matching regex pattern
  await page.route(/**/\\/api\\/weather/, async (route) => {
    // 2. Fulfill request with mock JSON payload
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      json: {
        temperature: '25°C',
        summary: 'Cloudy with cool breeze'
      }
    });
  });

  // 3. Visit page (which triggers the API call internally)
  await page.goto('https://myweatherapp.com/dashboard');

  // 4. Assert UI renders the mocked data correctly
  const tempSelector = page.locator('.temp-display');
  await expect(tempSelector).toHaveText('25°C');
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
E2E টেস্টের সময় রিয়েল এপিআই বা থার্ড-পার্টি পেমেন্ট সার্ভিস হিট করা ঝুঁকিপূর্ণ ও ধীরগতির হতে পারে:
১. **\`page.route(url, handler)\`**:
   - এটি ব্রাউজার থেকে বের হওয়া ম্যাচিং এপিআই রিকোয়েস্টগুলো মাঝপথে আটকে দেয়।
২. **\`route.fulfill(options)\`**:
   - এটি আটকে দেওয়া রিকোয়েস্টে সার্ভার ছাড়াই সাথে সাথে মক রেসপন্স পাঠিয়ে দেয়।
   - আপনি কাস্টম \`status\`, \`headers\` ও \`json\` বডি সেট করে দিতে পারেন।
৩. **\`route.continue()\`**:
   - নির্দিষ্ট রিকোয়েস্টগুলোকে রিয়েল সার্ভারে চলে যেতে পারমিশন দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ড্যাশবোর্ডে আবহাওয়ার লাইভ ডাটা শো করা হয়। টেস্ট করার সময় আবহাওয়া সার্ভিস অফলাইন থাকতে পারে। তাই প্লেরাইটে \`*/api/weather*\` রাউটটি ইন্টারসেপ্ট করে বডিতে \`{ temperature: '25°C' }\` রিটার্ন করে দেওয়া হলো। ব্রাউজার রিয়েল এপিআই কল ছাড়াই ইউআই রেন্ডার কমপ্লিট করবে এবং আপনি ড্যাশবোর্ড চেক করতে পারবেন।

### উত্তম অনুশীলন
পেমেন্ট বা এসএমএস গেটওয়ে এপিআই টেস্ট করার সময় সবসময় মকিং ব্যবহার করুন। এটি ফালতু চার্জ ও মেইল পাঠানো রোধ করে।

### সাধারণ ভুলসমূহ
কোয়েরি প্যারামিটার যুক্ত ইউআরএল রাউটে ওয়াইল্ডকার্ড ব্যবহার না করা, যার ফলে মক কাজ না করে সরাসরি রিয়েল সার্ভারে হিট করে বসে।

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('mocks weather dashboard API response', async ({ page }) => {
  // ১. এপিআই রিকোয়েস্ট ইন্টারসেপ্ট করা হচ্ছে
  await page.route(/\/api\/weather/, async (route) => {
    // ২. মক জেসন ডাটা রিটার্ন করা হলো
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      json: {
        temperature: '25°C',
        summary: 'Cloudy with cool breeze'
      }
    });
  });

  // ৩. ড্যাশবোর্ড পেজে ভিজিট
  await page.goto('https://myweatherapp.com/dashboard');

  // ৪. মক ডাটা স্ক্রিনে শো হচ্ছে কিনা তা যাচাই
  const tempSelector = page.locator('.temp-display');
  await expect(tempSelector).toHaveText('25°C');
});
\`\`\``
  },
  {
    id: 'other-topics-67',
    title: 'Explain the difference between Git cherry-pick and Git merge.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Git', 'Version Control', 'Merge', 'Cherry-pick', 'Workflow'],
    enAnswer: 'Git merge integrates all commits and history from a source branch into the target branch. Git cherry-pick copies and applies only specific commits from a source branch onto the target branch.',
    bnAnswer: 'Git merge একটি সোর্স শাখার সমস্ত কমিট ও কোড ইতিহাস মেইন শাখায় মার্জ করে। আর Git cherry-pick সোর্স শাখা থেকে শুধুমাত্র নির্দিষ্ট কিছু কমিট কপি করে বর্তমান শাখায় অ্যাপ্লাই করে।',
    enExplanation: `### Explanation
While both commands integrate code, they target different scopes of repository history:
1. **Git Merge**:
   - Integrates the entire branch timeline.
   - Combines histories of both branches, creating a new merge commit.
   - Commonly used when a feature branch is fully completed, reviewed, and ready to be integrated into main.
2. **Git Cherry-pick**:
   - Selects specific commits based on their SHA hashes.
   - Does not integrate other commits on the source branch.
   - Creates a new commit with a new hash on the target branch.
   - Commonly used to pull a single hotfix or isolation task without merging unfinished features.

### Real-World Example
You are building widgets on branch \`widgets-dev\`. You write a bugfix commit (\`hash-123\`) to fix a button UI bug. You also write 5 unfinished commits.
- **Merge**: Merging \`widgets-dev\` into \`main\` pulls the auth fix along with all 5 unfinished, broken widgets, crashing production.
- **Cherry-pick**: Switching to \`main\` and running \`git cherry-pick hash-123\` pulls ONLY that single button fix safely, leaving unfinished widgets behind.

### Best Practice
Keep your commit messages clean. When cherry-picking, you can pass the \`-x\` flag (e.g. \`git cherry-pick -x <hash>\`) to automatically append a line saying "(cherry picked from commit ...)", which helps other developers trace the origin of the code.

### Common Mistakes
Cherry-picking commits to resolve branch synchronization issues instead of merging, leading to duplicate commits and messy conflicts when branches are eventually merged.

### Code Example
\`\`\`bash
# --- MERGE WORKFLOW (Full integration) ---
$ git checkout main
$ git merge widgets-dev
# (Pulls all commits from widgets-dev)

# --- CHERRY-PICK WORKFLOW (Targeted integration) ---
$ git checkout main
$ git cherry-pick a8d9c2b
# (Pulls ONLY commit a8d9c2b)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
দুটি কমান্ডই ভিন্ন শাখা থেকে কোড ইন্টিগ্রেট করে, কিন্তু তাদের কাজের পরিধি আলাদা:
১. **Git Merge**:
   - সম্পূর্ণ ব্রাঞ্চের সব পরিবর্তন এবং ইতিহাস নিয়ে আসে।
   - মার্জ হিস্ট্রি গ্রাফ তৈরি করে ও একটি মার্জ কমিট যুক্ত করে।
   - ফিচার পুরোপুরি রেডি হলে মেইন ডেভেলপমেন্ট ট্র্যাকে যুক্ত করতে এটি ব্যবহৃত হয়।
২. **Git Cherry-pick**:
   - হ্যাশ আইডি দেখে নির্দিষ্ট কমিট নির্বাচন করে।
   - সোর্স ব্রাঞ্চের অন্য কোনো কাজ স্পর্শ করে না।
   - ফিচার ব্রাঞ্চের অর্ধেক কাজ বাকি রেখেই শুধু নির্দিষ্ট একটি সমাধান তুলে আনতে এটি সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি \`widgets-dev\` ব্রাঞ্চে নতুন উইজেট বানাচ্ছেন এবং মাঝে একটি লাইব্রেরি ফিক্স করে কমিট (\`hash-123\`) দিলেন। অন্য উইজেটের কাজগুলো এখনও ইন-কমপ্লিট ও প্রজেক্ট ভাঙা:
- **Merge**: মেইনে মার্জ করলে বাগ ফিক্সের সাথে ভাঙা উইজেটগুলোও চলে গিয়ে সাইট ডাউন করে দেবে।
- **Cherry-pick**: মেইনে গিয়ে শুধু \`hash-123\` চেরি-পিক করলে উইজেটগুলো বাদ দিয়ে কেবল ফিক্সড কোডটুকু নিরাপদে চলে আসবে।

### উত্তম অনুশীলন
চেরি-পিক করার সময় \`git cherry-pick -x <hash>\` ব্যবহার করুন। এটি কোন মূল কমিট থেকে কোড কপি করে আনা হয়েছে তার ট্র্যাকিং হিস্ট্রি লগে যুক্ত করে।

### সাধারণ ভুলসমূহ
মার্জ এড়াতে বারবার চেরি-পিক করা, যা ব্রাঞ্চে ডুপ্লিকেট হিস্ট্রি তৈরি করে মার্জ করার সময় জটিল জট তৈরি করে।

### Code Example
\`\`\`bash
# --- মার্জ ফ্লো (সম্পূর্ণ ইন্টিগ্রেশন) ---
$ git checkout main
$ git merge widgets-dev
# (widgets-dev-এর সব কাজ একসাথে মার্জ হবে)

# --- চেরি-পিক ফ্লো (নির্দিষ্ট ইন্টিগ্রেশন) ---
$ git checkout main
$ git cherry-pick a8d9c2b
# (শুধুমাত্র a8d9c2b কমিটটি কপি হবে)
\`\`\``
  },
  {
    id: 'other-topics-68',
    title: 'How do you configure Jest to run test suites in parallel, and what are the concurrency limits?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Jest', 'Concurrency', 'Parallel Execution', 'Testing Performance', 'DevOps'],
    enAnswer: 'Jest runs test files in parallel by default using a worker pool. You configure concurrency limits using the --maxWorkers parameter (e.g. --maxWorkers=50%) to optimize CPU core allocations.',
    bnAnswer: 'Jest ডিফল্টভাবে ওয়ার্কার পুলের মাধ্যমে টেস্ট ফাইলগুলো সমান্তরালভাবে রান করায়। কনকারেন্সি লিমিট কন্ট্রোল করতে --maxWorkers প্যারামিটার (যেমন: --maxWorkers=50%) ব্যবহার করা হয়।',
    enExplanation: `### Explanation
To speed up testing on multi-core systems, Jest spins up separate worker processes for each test file:
1. **Default Concurrency**: Jest runs parallel suites using \`total_cpu_cores - 1\` workers. This leaves 1 core free for system operations.
2. **\`--maxWorkers\` Configuration**:
   - You can pass a number: \`--maxWorkers=4\` limits to 4 parallel processes.
   - You can pass a percentage: \`--maxWorkers=50%\` uses half of the available CPU cores.
   - In resource-constrained environments (like CI pipelines), running too many parallel processes leads to CPU throttling and memory crashes. In these setups, limiting workers improves stability.

### Real-World Example
In a GitHub Actions runner with 2 CPU cores, Jest tries to run 2 parallel workers. However, because the VM resources are shared and constrained, it crashes with out-of-memory errors. Setting \`jest --maxWorkers=2\` or \`--runInBand\` (running tests sequentially in a single process) stabilizes the build pipeline.

### Best Practice
Set \`--maxWorkers=50%\` in your test run scripts to keep dev machines responsive while tests are running. In CI workflows, use \`--maxWorkers=2\` or \`--runInBand\` to prevent virtual machine CPU throttling.

### Common Mistakes
Writing test cases that share the same global mock state or write to the same database tables. When tests run in parallel, they will conflict, causing tests to pass locally but fail randomly in parallel pipelines.

### Code Example
\`\`\`json
// package.json configuration for optimized Jest runs
{
  "scripts": {
    // 1. Dev run: limit CPU consumption to 50%
    "test:dev": "jest --maxWorkers=50%",
    
    // 2. CI run: run sequentially in a single process for stability
    "test:ci": "jest --runInBand --detectOpenHandles"
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাল্টি-কোর কম্পিউটারে টেস্টিং স্পিড বাড়াতে জেস্ট প্রতিটা টেস্ট ফাইলের জন্য আলাদা আলাদা ওয়ার্কার প্রসেস তৈরি করে:
১. **ডিফল্ট কনকারেন্সি**: জেস্ট সাধারণত প্রসেসরের \`মোট কোরের সংখ্যা - ১\` টি প্রসেস সমান্তরালভাবে চালু করে।
২. **\`--maxWorkers\` কনফিগ**:
   - সংখ্যা পাস করা: \`--maxWorkers=4\` (সর্বোচ্চ ৪টি প্যারালাল ওয়ার্কার প্রসেস চলবে)।
   - পারসেন্টেজ পাস করা: \`--maxWorkers=50%\` (অর্ধেক কোর ব্যবহার করবে)।
   - ক্লাউড সিআই (CI) রানারগুলোতে প্রসেসর ও মেমোরি লিমিটেড থাকে। সেখানে কনকারেন্সি লিমিট না করলে মেমোরি ক্র্যাশ হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
গিটহাব অ্যাকশনের রানার মেশিনে মাত্র ২টি কোর প্রসেসর থাকে। সেখানে জেস্ট একসাথে ৩-৪টি টেস্ট ফাইল প্রসেস করতে গিয়ে ওওএম (Out-Of-Memory) এরর দিয়ে ক্র্যাশ করে। সেখানে রান কম্যান্ড বদলে \`jest --runInBand\` (একে একে সিরিয়ালি রান করা) লিখে দিলে পাইপলাইন একদম স্মুথ চলে।

### উত্তম অনুশীলন
ডেভেলপমেন্টে পিসি সচল রাখতে \`--maxWorkers=50%\` ব্যবহার করুন। আর সিআই সার্ভারে রিসোর্স বাঁচাতে \`--runInBand\` বা \`--maxWorkers=2\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
টেস্ট ফাইলগুলোর ভেতর শেয়ার্ড ডাটাবেজ বা গ্লোবাল স্টেট এডিট করা। প্যারালাল রান করার সময় একটি ফাইলের রাইট অপারেশন অন্য ফাইলের টেস্ট রেজাল্ট নষ্ট করে দেবে। টেস্ট ফাইলগুলোকে সম্পূর্ণ আইসোলেটেড রাখুন।

### Code Example
\`\`\`json
// package.json-এ অপ্টিমাইজড জেস্ট রান কনফিগারেশন
{
  "scripts": {
    // ১. লোকাল পিসিতে: ৫০% সিপিইউ কোরের লিমিট
    "test:dev": "jest --maxWorkers=50%",
    
    // ২. সিআই রানারে: সিকোয়েন্সিয়াল মেথডে সিঙ্গেল প্রসেস রান
    "test:ci": "jest --runInBand --detectOpenHandles"
  }
}
\`\`\``
  },
  {
    id: 'other-topics-69',
    title: 'Explain the difference between Playwright page.click() and locator.click() and why locator is preferred.',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Playwright', 'Locators', 'Selectors', 'Best Practice', 'E2E Testing'],
    enAnswer: 'page.click() uses a static selector string resolved instantly. locator.click() returns a dynamic pointer that auto-waits, auto-retries, and resolves elements dynamically at execution time to prevent page actions from failing.',
    bnAnswer: 'page.click() সরাসরি স্ট্যাটিক সিলেক্টর টেক্সট দিয়ে সাথে সাথে ক্লিক করার চেষ্টা করে। আর locator.click() একটি ডাইনামিক পয়েন্টার রিটার্ন করে যা অটো-ওয়েট ও অটো-রিট্রাই ব্যবহার করে এলিমেন্ট দৃশ্যমান হলে ক্লিক করে।',
    enExplanation: `### Explanation
Early versions of Playwright used page-based actions. Modern Playwright recommends Locators as the primary interaction API:
1. **\`page.click(selector)\`**:
   - Resolves the selector immediately.
   - If the element is not found on the page instantly, the action can fail unless you write explicit wait timers.
2. **\`locator.click()\`**:
   - Returns a **Locator** object. Locators are lazy: they do not search the DOM when declared; they only search when the action (\`click\`, \`fill\`) is executed.
   - **Actionability Checks**: Playwright automatically checks if the element is:
     - Visible in the DOM.
     - Enabled (not disabled).
     - Stable (not moving in an animation).
     - Receives pointer events (not hidden behind overlays).
   - If these checks fail, Playwright retries up to the configured timeout limit, reducing test crashes.

### Real-World Example
In a dashboard where data loads in 300ms:
- \`page.click('#submit-btn')\` runs immediately on mount. If the DOM is compiling, it throws an "element not found" crash.
- \`page.locator('#submit-btn').click()\` awaits the 300ms render silently, completes actionability validation, and clicks only when the button is physically interactive.

### Best Practice
Always use \`page.locator()\` or accessibility selectors (like \`page.getByRole()\`) to declare pointers, and execute actions on those locator instances.

### Common Mistakes
Declaring locators and expecting them to evaluate immediately. A locator is a pointer, not the resolved DOM element. Accessing element attributes requires calling async resolver methods like \`.innerText()\`.

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('interacts with dynamic button using locator', async ({ page }) => {
  await page.goto('https://example.com');

  // 1. Declare dynamic locator (Lazy evaluation, does not query DOM yet)
  const submitButton = page.getByRole('button', { name: 'Submit Application' });

  // 2. Click (Playwright auto-waits for button to be visible and stable!)
  await submitButton.click();

  // 3. Verify success alert
  const alert = page.locator('.success-alert');
  await expect(alert).toBeVisible();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্লেরাইটের আগের ভার্সনে পেজ-ভিত্তিক অ্যাকশন ব্যবহার হতো। বর্তমানে প্লেরাইট ইউআই সিলেক্টর হিসেবে লোকেটর (Locators) ব্যবহারের জোর সুপারিশ করে:
১. **\`page.click(selector)\`**:
   - এটি সিলেক্টর টেক্সট ম্যাচ করিয়ে সাথে সাথে ক্লিক করার চেষ্টা করে।
   - পেজ লোড হতে একটু দেরি হলে এটি এলিমেন্ট খুঁজে না পেয়ে ক্র্যাশ করে।
২. **\`locator.click()\`**:
   - এটি একটি লেজি (Lazy) অবজেক্ট রিটার্ন করে। অর্থাৎ ডিক্লেয়ার করার সময় এটি ডম স্ক্যান করে না, অ্যাকশন বা ক্লিকের ঠিক আগের মুহূর্তে স্ক্যান করে।
   - **Actionability Checks**: ক্লিক করার আগে প্লেরাইট চেক করে:
     - বাটনটি ভিজিবল (দৃশ্যমান) কিনা।
     - এটি সচল (Enabled) কিনা (যেমন: disabled প্রপস অফ থাকা)।
     - এটি কোনো এনিমেশনের কারণে নড়াচড়া করছে কিনা (Stable)।
     - এটি কোনো ওভারলে বা পপআপের আড়ালে ঢাকা পড়েছে কিনা।
   - কোনো চেক ফেইল করলে এটি অটোমেটিক রি-ট্রাই লুপ চালায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি এপিআই ডাটা রেন্ডার হতে ৩০০ মিলি-সেকেন্ড সময় নেয়:
- \`page.click('#submit')\` রান করলে ৩০০ মিলি-সেকেন্ড পার হওয়ার আগেই ক্লিক করার চেষ্টা করে ৪-৪ (Not found) এরর দিয়ে টেস্ট ক্যানসেল করে দেবে।
- \`page.locator('#submit').click()\` রান করলে ৩০০ মিলি-সেকেন্ড নিরবে অপেক্ষা করে বাটনটি স্ট্যাবল হওয়া মাত্র ক্লিক সম্পন্ন করবে।

### উত্তম অনুশীলন
সবসময় লোকেটর বা এক্সেসিবিলিটি মেথড (\`page.getByRole()\`) দিয়ে সিলেক্টর ডিফাইন করুন এবং লোকেটর ভেরিয়েবলের ওপর ক্লিক রান করুন।

### সাধারণ ভুলসমূহ
লোকেটর ডিক্লেয়ার করা মাত্রই ডম ম্যাচ হয়ে গেছে ভাবা। এটি কেবল একটি ডাইনামিক পয়েন্টার; এর ভেতরের টেক্সট পেতে হলে আপনাকে \`await\` সহ \`.innerText()\` কল করতে হবে।

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('interacts with dynamic button using locator', async ({ page }) => {
  await page.goto('https://example.com');

  // ১. ডাইনামিক লোকেটর তৈরি (এখনও ডম সার্চ করবে না)
  const submitButton = page.getByRole('button', { name: 'Submit Application' });

  // ২. ক্লিক (বাটন সচল ও ভিজিবল হওয়া পর্যন্ত অটো-ওয়েট করবে!)
  await submitButton.click();

  // ৩. সাকসেস মেসেজ যাচাই
  const alert = page.locator('.success-alert');
  await expect(alert).toBeVisible();
});
\`\`\``
  },
  {
    id: 'other-topics-70',
    title: 'How do you configure Jest coverage report thresholds to enforce strict testing metrics?',
    difficulty: 'intermediate',
    category: 'other-topics',
    tags: ['Jest', 'Code Coverage', 'Testing Metrics', 'CI/CD', 'Quality Gates'],
    enAnswer: 'Configure Jest coverage thresholds using the coverageThreshold block in jest.config.js. Specify target percentages for global or path-specific metrics (branches, functions, lines, statements); Jest will fail tests if code fails to meet these limits.',
    bnAnswer: 'Jest কভারেজ থ্রেশহোল্ড সেট করতে jest.config.js ফাইলে coverageThreshold ব্লক যুক্ত করতে হয়। সেখানে ব্রাঞ্চ, ফাংশন, লাইন ও স্টেটমেন্টের জন্য মিনিমাম পারসেন্টেজ লিমিট সেট করা হয়; পারসেন্টেজ কম হলে টেস্ট ফেইল দেখায়।',
    enExplanation: `### Explanation
Code coverage measures what percentage of your source code is executed during test runs. To prevent developers from pushing untested features, you can configure Jest to fail the build if coverage metrics drop:
1. **\`coverageThreshold\` Configurations**:
   - You specify limits for **statements**, **branches**, **functions**, and **lines**.
   - If code coverage falls below the specified percentages (e.g. 80% functions), Jest exit code returns \`1\`, flagging a failure.
2. **Metrics**:
   - **Branches**: Checks if conditional branches (e.g., both \`if\` and \`else\` blocks) were executed.
   - **Functions**: Checks if all functions were called.
   - **Lines**: Checks the percentage of source code lines executed.

### Real-World Example
In a company repo, junior developers write critical helpers but skip writing unit tests to save sprint time. By setting the global coverage threshold to 85% in \`jest.config.js\`, any pull request that reduces the codebase coverage below 85% causes the GitHub Actions CI pipeline to fail, blocking merging until tests are added.

### Best Practice
Start with realistic thresholds (e.g., 60-70%) on legacy codebases and incrementally increase them. Enforce 90%+ thresholds on critical business folders (like \`/src/helpers\` or \`/src/controllers\`) while keeping UI styling files excluded.

### Common Mistakes
Setting 100% coverage requirements globally, which forces developers to write meaningless tests for boilerplate config files or simple getters/setters, wasting development resources.

### Code Example
\`\`\`javascript
// jest.config.js
module.exports = {
  collectCoverage: true, // Generate coverage reports on run
  coverageDirectory: 'coverage',
  
  // Define strict testing quality gates
  coverageThreshold: {
    // 1. Enforce global rules for all files
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: -10, // Allow maximum 10 uncovered statements globally
    },
    // 2. Enforce stricter rules on critical directories
    './src/helpers/**/*.ts': {
      branches: 95,
      functions: 95,
    }
  }
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোড কভারেজ পরিমাপ করে টেস্ট রান করার সময় আপনার সোর্স কোডের কত পারসেন্ট অংশ এক্সিকিউট হয়েছে। প্রজেক্টে টেস্টবিহীন ফিচার কোড পুশ করা আটকাতে কভারেজ থ্রেশহোল্ড সেট করা হয়:
১. **\`coverageThreshold\` কনফিগ**:
   - এখানে আপনি statements, branches, functions ও lines-এর জন্য নূন্যতম পাসের হার নির্ধারণ করে দিতে পারেন।
   - কভারেজ পারসেন্টেজ ওই হারের নিচে নেমে গেলে জেস্ট টেস্ট এরর দেখাবে এবং রানার এক্সিট কোড \`1\` দিবে (টেস্ট ফেইল)।
২. **মেট্রিক্সসমূহ**:
   - **Branches**: কন্ডিশনাল লজিকের (if ও else উভয় ব্লক) ভেতর টেস্ট কোড প্রবেশ করেছে কিনা তা যাচাই করে।
   - **Functions**: সব ফাংশন টেস্টে রান হয়েছে কিনা দেখে।
   - **Lines**: কত পারসেন্ট লাইন এক্সিকিউট হয়েছে তার পরিমাপ।

### বাস্তব-ভিত্তিক উদাহরণ
ডেভেলপাররা দ্রুত কাজ সারতে টেস্টিং না করে সোর্স ফাইল পুশ করেন। \`jest.config.js\` ফাইলে গ্লোবাল কভারেজ লিমিট ৮৫% সেট করে দিলে, নতুন কোড পুশ করার পর কভারেজ ৮৫% এর নিচে নামা মাত্রই গিটহাব রানার বিল্ড ব্লক করে দিবে। মার্জ করতে চাইলে বাধ্যতামূলকভাবে টেস্ট কোড যুক্ত করতে হবে।

### উত্তম অনুশীলন
প্রথমেই ১০০% টার্গেট না করে প্রথমে ৬০-৭০% দিয়ে শুরু করুন। মূল লজিক ফোল্ডারগুলোতে (\`/src/helpers\`) ৯৫% এবং সাধারণ ফাইলে ৭০% কাস্টম থ্রেশহোল্ড বন্টন করুন।

### সাধারণ ভুলসমূহ
গ্লোবালি ১০০% কভারেজ বাধ্যতামূলক করা। এর ফলে কোডের বয়লারপ্লেট বা কনফিগ ফাইলের জন্য অহেতুক টেস্ট লিখতে গিয়ে ডেভেলপারদের কাজের প্রোডাক্টিভিটি নষ্ট হয়।

### Code Example
\`\`\`javascript
// jest.config.js
module.exports = {
  collectCoverage: true, // কভারেজ রিপোর্ট তৈরি করবে
  coverageDirectory: 'coverage',
  
  // কভারেজ কোয়ালিটি গেট ডিফাইন করা হলো
  coverageThreshold: {
    // ১. গ্লোবাল নিয়ম (সব ফাইলের জন্য)
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: -10, // গ্লোবালি সর্বোচ্চ ১০টি আন-কভার্ড স্টেটমেন্টের ছাড় দেওয়া হলো
    },
    // ২. গুরুত্বপূর্ণ হেল্পার ফাইলের জন্য কঠোর নিয়ম
    './src/helpers/**/*.ts': {
      branches: 95,
      functions: 95,
    }
  }
};
\`\`\``
  }
];
