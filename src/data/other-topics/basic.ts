import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'other-topics-1',
    title: 'What are the core REST API HTTP methods (GET, POST, PUT, DELETE) and their primary use cases?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['REST API', 'HTTP Methods', 'Backend', 'Architecture'],
    enAnswer: 'The core HTTP methods are GET (read data), POST (create new records), PUT (replace existing records entirely), and DELETE (remove records). Using them appropriately creates standard, predictable API architectures.',
    bnAnswer: 'কোর এইচটিটিপি (HTTP) মেথডগুলো হলো GET (ডাটা পড়া), POST (নতুন ডাটা তৈরি), PUT (পুরোনো ডাটা সম্পূর্ণ প্রতিস্থাপন), এবং DELETE (ডাটা মুছে ফেলা)। এগুলো সঠিকভাবে ব্যবহার করলে স্ট্যান্ডার্ড ও প্রিডিক্টেবিল এপিআই আর্কিটেকচার তৈরি হয়।',
    enExplanation: `### Explanation
REST APIs leverage standard HTTP methods to perform CRUD operations on resources:
1. **GET**: Requests a representation of the specified resource. It must only retrieve data and have no side effects (safe and idempotent).
2. **POST**: Submits data to be processed to the specified resource, usually resulting in a change in state or creation of a new resource on the server.
3. **PUT**: Replaces all current representations of the target resource with the request payload. It is idempotent (multiple identical requests yield the same state).
4. **DELETE**: Removes the specified resource from the server.

### Real-World Example
In a blogging system:
- \`GET /api/posts\` returns a list of posts.
- \`POST /api/posts\` creates a new blog post.
- \`PUT /api/posts/123\` updates post 123 (requiring all fields like title, content, author).
- \`DELETE /api/posts/123\` deletes post 123.

### Best Practice
Always use nouns for resource endpoints (e.g., \`/api/users\`) instead of verbs (e.g., \`/api/getUsers\`). Use the correct HTTP method to convey the action instead of encoding actions in the URI.

### Common Mistakes
Using \`GET\` requests to modify data (e.g., \`GET /api/deleteUser?id=5\`). Browsers or search crawlers prefetching pages can accidentally delete user accounts.

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();
app.use(express.json());

// GET: Read data
app.get('/api/items', (req, res) => {
  res.json({ message: 'Fetching all items' });
});

// POST: Create resource
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', data: newItem });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিসোর্সগুলোর ওপর CRUD অপারেশন সম্পন্ন করতে REST API স্ট্যান্ডার্ড HTTP মেথড ব্যবহার করে:
১. **GET**: নির্দিষ্ট রিসোর্সের ডাটা রিটার্ন করে। এটি শুধুমাত্র ডাটা রিড করবে এবং এর কোনো সাইড-ইফেক্ট থাকবে না (নিরাপদ ও আইডেমপোটেন্ট)।
২. **POST**: নির্দিষ্ট রিসোর্সে নতুন ডাটা প্রসেস বা সাবমিট করতে ব্যবহৃত হয়, যার ফলে সার্ভারে একটি নতুন রিসোর্স তৈরি হয়।
৩. **PUT**: টার্গেট করা রিসোর্সের সম্পূর্ণ ডাটা রিকোয়েস্ট পেলোডের সাহায্যে প্রতিস্থাপন করে। এটি আইডেমপোটেন্ট (একাধিকবার একই রিকোয়েস্ট পাঠালেও স্টেট একই থাকে)।
৪. **DELETE**: সার্ভার থেকে নির্দিষ্ট রিসোর্স মুছে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্লগিং সিস্টেমে:
- \`GET /api/posts\` সব পোস্টের লিস্ট দেয়।
- \`POST /api/posts\` একটি নতুন ব্লগ পোস্ট তৈরি করে।
- \`PUT /api/posts/123\` আইডি ১২৩ পোস্টের পুরো অংশ (title, content, author সহ) আপডেট করে।
- \`DELETE /api/posts/123\` আইডি ১২৩ পোস্টটি ডিলিট করে।

### উত্তম অনুশীলন
এন্ডপয়েন্টের জন্য সবসময় নাউন বা বিশেষ্য (যেমন: \`/api/users\`) ব্যবহার করুন, ভার্ব বা ক্রিয়া (যেমন: \`/api/getUsers\`) এড়িয়ে চলুন। ইউআরআই-এর ভেতর কাজ না লিখে সঠিক HTTP মেথড দিয়ে অ্যাকশন প্রকাশ করুন।

### সাধারণ ভুলসমূহ
ডাটা পরিবর্তন করার জন্য \`GET\` রিকোয়েস্ট ব্যবহার করা (যেমন: \`GET /api/deleteUser?id=5\`)। ব্রাউজার বা সার্চ ক্রলার পেজ প্রি-ফেচ করার সময় ভুলবশত ইউজার ডাটা ডিলিট করে দিতে পারে।

### কোড উদাহরণ
\`\`\`typescript
import express from 'express';
const app = express();
app.use(express.json());

// GET: ডাটা পড়া
app.get('/api/items', (req, res) => {
  res.json({ message: 'Fetching all items' });
});

// POST: রিসোর্স তৈরি
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', data: newItem });
});
\`\`\``
  },
  {
    id: 'other-topics-2',
    title: 'Explain the difference between HTTP Status Codes 200, 201, 400, 401, 403, 404, and 500.',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['REST API', 'HTTP Status Codes', 'Backend', 'Web Standards'],
    enAnswer: 'HTTP status codes communicate client/server results. 2xx signals success (200 OK, 201 Created), 4xx signals client errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found), and 5xx signals server errors (500 Internal Server Error).',
    bnAnswer: 'এইচটিটিপি স্ট্যাটাস কোডগুলো ক্লায়েন্ট/সার্ভার রেসপন্সের ফলাফল নির্দেশ করে। 2xx সফল অপারেশন (200 OK, 201 Created), 4xx ক্লায়েন্ট এরর (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found) এবং 5xx সার্ভার এরর (500 Internal Server Error) প্রকাশ করে।',
    enExplanation: `### Explanation
HTTP Status codes are grouped into five classes:
- **200 OK**: The request succeeded. Used for successful GET, PUT, or DELETE operations.
- **201 Created**: The request succeeded and a new resource was created. Used for POST.
- **400 Bad Request**: The server cannot process the request due to client error (e.g., malformed syntax, missing fields).
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content, even if they are authenticated.
- **404 Not Found**: The server cannot find the requested resource.
- **500 Internal Server Error**: The server encountered a situation it does not know how to handle.

### Real-World Example
- In a shopping site, viewing a product returns \`200 OK\`.
- Checking out successfully creates an invoice and returns \`201 Created\`.
- Submitting checkout without a payment details parameter returns \`400 Bad Request\`.
- Trying to edit another user's profile returns \`403 Forbidden\`.
- Accessing \`/admin-dashboard\` without logging in returns \`401 Unauthorized\`.

### Best Practice
Always return the most specific HTTP status code possible. Do not wrap all responses in \`200 OK\` with custom JSON status codes (e.g., returning \`{ status: 500, error: 'Database crash' }\` inside a \`200 OK\` HTTP header).

### Common Mistakes
Confusing \`401 Unauthorized\` (identity unknown) with \`403 Forbidden\` (identity known but lacks permissions).

### Code Example
\`\`\`typescript
import express from 'express';
const app = express();

app.get('/api/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    // Return 404 when resource is not found
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিটিপি স্ট্যাটাস কোডগুলোকে ৫টি ক্যাটাগরিতে ভাগ করা যায়:
- **200 OK**: রিকোয়েস্ট সফল হয়েছে। সাধারণত GET, PUT বা DELETE অপারেশনে ব্যবহৃত হয়।
- **201 Created**: রিকোয়েস্ট সফল এবং নতুন রিসোর্স তৈরি হয়েছে। POST-এর সাথে ব্যবহৃত হয়।
- **400 Bad Request**: ক্লায়েন্ট এররের কারণে সার্ভার রিকোয়েস্ট প্রসেস করতে পারছে না (যেমন: ভুল সিনট্যাক্স বা ফিল্ড না থাকা)।
- **401 Unauthorized**: রিকোয়েস্ট প্রসেসের আগে ক্লায়েন্টের অথেন্টিকেশন বা লগইন আবশ্যক।
- **403 Forbidden**: ক্লায়েন্ট অথেন্টিকেটেড হলেও ওই নির্দিষ্ট রিসোর্সে প্রবেশ করার পারমিশন নেই।
- **404 Not Found**: সার্ভারে রিসোর্সটি খুঁজে পাওয়া যায়নি।
- **500 Internal Server Error**: সার্ভারে অভ্যন্তরীণ ক্র্যাশ বা জটিলতা ঘটেছে।

### বাস্তব-ভিত্তিক উদাহরণ
- একটি শপিং সাইটে প্রোডাক্ট পেজ দেখতে গেলে \`200 OK\` পাওয়া যায়।
- সাকসেসফুলি চেকআউট করলে ইনভয়েস তৈরি হয়ে \`201 Created\` দেয়।
- পেমেন্ট মেথড ছাড়া সাবমিট করলে \`400 Bad Request\` দেয়।
- অন্য ইউজারের ইনফো এডিট করতে গেলে \`403 Forbidden\` দেয়।
- লগইন ছাড়াই অ্যাডমিন প্যানেলে গেলে \`401 Unauthorized\` দেয়।

### উত্তম অনুশীলন
সবসময় রিসোর্সের অবস্থার সাথে সর্বোচ্চ মানানসই স্ট্যাটাস কোড রিটার্ন করুন। সব এরর রেসপন্সকে \`200 OK\` দিয়ে মুড়ে বডির ভেতর কাস্টম এরর কোড (যেমন: বডিতে \`{ status: 500 }\` কিন্তু হেডারে \`200 OK\`) পাঠানো পরিহার করুন।

### সাধারণ ভুলসমূহ
\`401 Unauthorized\` (ইউজার কে জানা নেই) এবং \`403 Forbidden\` (ইউজার কে জানা আছে কিন্তু তার কাজ করার পারমিশন নেই)-এর মধ্যে গোলমাল পাকিয়ে ফেলা।

### কোড উদাহরণ
\`\`\`typescript
import express from 'express';
const app = express();

app.get('/api/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    // রিসোর্স খুঁজে না পেলে ৪০৪ স্ট্যাটাস কোড
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});
\`\`\``
  },
  {
    id: 'other-topics-3',
    title: 'How does Socket.IO establish a connection, and how does it differ from raw WebSockets?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Socket.IO', 'WebSockets', 'Real-time', 'Networking'],
    enAnswer: 'Socket.IO starts with HTTP long-polling and upgrades to WebSockets if available. Unlike raw WebSockets, it provides features like automatic reconnection, connection fallbacks, multiplexing (namespaces), and room support out of the box.',
    bnAnswer: 'Socket.IO প্রথমে HTTP long-polling দিয়ে কানেকশন শুরু করে এবং সাপোর্ট থাকলে তা WebSockets-এ রূপান্তর করে। কাঁচা WebSockets-এর চেয়ে পার্থক্য হলো, এটি অটোমেটিক রিকানেকশন, কানেকশন ফলব্যাক, নেমস্পেস ও রুম সাপোর্ট সরাসরি প্রদান করে।',
    enExplanation: `### Explanation
Socket.IO is a real-time event-based library wrapper built on top of the Engine.io protocol:
1. **Connection Process**:
   - The client initiates an HTTP handshake request.
   - The connection starts with HTTP long-polling for broad compatibility.
   - It performs upgrade negotiations to switch to raw WebSockets if supported by client and network configurations.
2. **Key Differences**:
   - **Protocol**: Raw WebSocket is a transport protocol; Socket.IO is a high-level library that utilizes WebSocket as a primary transport.
   - **Reliability**: Socket.IO automatically reconnects if the socket drops. Raw WebSocket requires manual reconnection logic.
   - **Multiplexing**: Socket.IO has built-in namespaces and rooms, whereas raw WebSockets require manually building custom routers.

### Real-World Example
In a chat application, using raw WebSockets behind a strict corporate firewall might cause connection drops. Socket.IO bypasses this by falling back to long-polling automatically, ensuring the user stays online, and later upgrading when possible.

### Best Practice
Use raw WebSockets if bundle size is critical and you have a simple single-connection requirement. Choose Socket.IO when you need out-of-the-box reliability, room grouping, and fallback setups.

### Common Mistakes
Assuming Socket.IO clients can connect directly to raw WebSocket servers (e.g., standard \`ws\` in Node). Socket.IO wraps messages in its own framing protocol and requires a matching Socket.IO client-server setup.

### Code Example
\`\`\`typescript
// Server side Socket.IO integration
import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Socket.IO হলো Engine.io প্রোটোকলের ওপর ভিত্তি করে তৈরি একটি রিয়েল-টাইম লাইব্রেরি র‍্যাপার:
১. **কানেকশন প্রসেস**:
   - ক্লায়েন্ট প্রথমে একটি HTTP হ্যান্ডশেক রিকোয়েস্ট ফায়ার করে।
   - কানেকশনটি ব্রড কমপ্যাটিবিলিটির জন্য প্রথমে HTTP long-polling দিয়ে শুরু হয়।
   - পরবর্তীতে ক্লায়েন্ট ও নেটওয়ার্ক সাপোর্ট করলে প্রোটোকল আপগ্রেড হয়ে তা সরাসরি WebSockets-এ স্থানান্তরিত হয়।
২. **মূল পার্থক্যসমূহ**:
   - **প্রোটোকল**: raw WebSocket হলো নেটওয়ার্ক প্রোটোকল; আর Socket.IO হলো লাইব্রেরি যা WebSocket-কে প্রাইমারি ট্রান্সপোর্ট হিসেবে ব্যবহার করে।
   - **রিকানেকশন**: সকেট কানেকশন কেটে গেলে Socket.IO অটোমেটিক রিকানেক্ট করে। কাঁচা WebSockets-এ এটি ম্যানুয়ালি করতে হয়।
   - **মাল্টিপ্লেক্সিং**: Socket.IO-তে বিল্ট-ইন নেমস্পেস এবং রুম সাপোর্ট থাকে, যা কাঁচা WebSockets-এ ম্যানুয়ালি বানাতে হতো।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চ্যাট অ্যাপে, কর্পোরেট ফায়ারওয়ালের পেছনে কাঁচা WebSockets ব্লক হয়ে যেতে পারে। Socket.IO স্বয়ংক্রিয়ভাবে HTTP long-polling ফলব্যাকে চলে যায়, যা ফায়ারওয়ালকে ফাঁকি দিয়ে চ্যাট সচল রাখে।

### উত্তম অনুশীলন
বান্ডেল সাইজ অত্যন্ত ছোট রাখতে চাইলে এবং সাধারণ কানেকশন হলে raw WebSockets বেছে নিন। অন্যদিকে রুম গ্রুপিং ও ফলব্যাক মেকানিজম সরাসরি পেতে চাইলে Socket.IO ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে Socket.IO ক্লায়েন্ট দিয়ে সরাসরি raw WebSocket সার্ভারে (যেমন: Node-এর \`ws\`) কানেক্ট করা যাবে। Socket.IO নিজস্ব প্রোটোকল ফ্রেমিং ব্যবহার করে, তাই ক্লায়েন্ট ও সার্ভার উভয় জায়গাতেই এটি ইনস্টল থাকা বাধ্যতামূলক।

### Code Example
\`\`\`typescript
// সার্ভার সাইড Socket.IO ইন্টিগ্রেশন
import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000);
\`\`\``
  },
  {
    id: 'other-topics-4',
    title: 'How do you emit and listen to custom events in Socket.IO (client-to-server and vice-versa)?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Socket.IO', 'Events', 'Real-time', 'Communication'],
    enAnswer: 'Socket.IO uses socket.emit() to send events with custom payloads, and socket.on() to register listeners for specific event names. This works symmetrically on both client and server.',
    bnAnswer: 'Socket.IO কাস্টম পে-লোড সহ ইভেন্ট পাঠাতে socket.emit() এবং নির্দিষ্ট ইভেন্ট লিসেনার সেট করতে socket.on() ব্যবহার করে। এটি ক্লায়েন্ট ও সার্ভার উভয় পাশেই একইভাবে কাজ করে।',
    enExplanation: `### Explanation
Socket.IO is event-driven. Communication happens by emitting named events from one end and registering listeners for those exact names on the other end:
1. **Emitting Events**: \`socket.emit('event-name', payload)\` sends the data. Payloads are automatically serialized to JSON.
2. **Listening to Events**: \`socket.on('event-name', (payload) => { ... })\` sets up a listener handler.
3. **Targeting**:
   - On the server, \`io.emit()\` sends to all connected sockets.
   - \`socket.broadcast.emit()\` sends to all sockets except the sender.
   - \`socket.emit()\` sends only to the current client.

### Real-World Example
In a collaborative drawing tool, when a user draws a line:
- The client emits the coordinates: \`socket.emit('draw', { x, y })\`.
- The server listens to \`'draw'\` and broadcasts it to all other designers: \`socket.broadcast.emit('draw', coordinates)\`.
- Other clients listen for \`'draw'\` and render the line on their screen.

### Best Practice
Always define shared TypeScript event contract types or schemas for your event names and payload signatures to prevent sending malformed payloads across boundaries.

### Common Mistakes
Using generic built-in event names (like \`message\`, \`data\`, \`connect\`) for custom business events, which can collide with internal lifecycle events.

### Code Example
\`\`\`typescript
// SERVER: Listen and Broadcast
io.on('connection', (socket) => {
  // Listen for user chat events
  socket.on('chat-message', (data) => {
    console.log(\`Msg from \${socket.id}:\`, data.text);
    // Broadcast to everyone else
    socket.broadcast.emit('chat-message', {
      sender: socket.id,
      text: data.text
    });
  });
});

// CLIENT: Emit and Listen
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.emit('chat-message', { text: 'Hello, group!' });

socket.on('chat-message', (data) => {
  console.log(\`Received from \${data.sender}: \${data.text}\`);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Socket.IO সম্পূর্ণ ইভেন্ট-চালিত। এক প্রান্ত থেকে নির্দিষ্ট নামের ইভেন্ট ফায়ার করা হয় এবং অন্য প্রান্ত থেকে সেই নামের ওপর লিসেনার রেজিস্টার করে রিয়েল-টাইম যোগাযোগ সম্পন্ন হয়:
১. **ইভেন্ট পাঠানো**: \`socket.emit('event-name', payload)\` ফাংশন ডাটা পাঠায়। পে-লোডটি অটোমেটিক জেসন-এ কনভার্ট হয়ে যায়।
২. **ইভেন্ট গ্রহণ**: \`socket.on('event-name', (payload) => { ... })\` কলব্যাক দিয়ে লিসেনার সেট করা হয়।
৩. **টার্গেটিং**:
   - সার্ভারে \`io.emit()\` সব ক্লায়েন্টকে ডাটা পাঠায়।
   - \`socket.broadcast.emit()\` সোর্সার (যে পাঠিয়েছে) ছাড়া সবাইকে মেসেজ দেয়।
   - \`socket.emit()\` শুধুমাত্র ওই নির্দিষ্ট ক্লায়েন্টকে ডাটা ফেরত দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ড্রয়িং প্রজেক্টে কোনো ইউজার লাইনের স্থানাঙ্ক ড্র করলে:
- ক্লায়েন্ট ফায়ার করে: \`socket.emit('draw', { x, y })\`।
- সার্ভার লিসেন করে তা বাকি ডিজাইনারদের ব্রডকাস্ট করে: \`socket.broadcast.emit('draw', coordinates)\`।
- বাকি ডিজাইনারদের ক্লায়েন্ট ডাটা ক্যাচ করে স্ক্রিনে আঁকা ফুটিয়ে তোলে।

### উত্তম অনুশীলন
ইভেন্টের নাম ও পে-লোড মিসম্যাচ এড়াতে টাইপস্ক্রিপ্টে ইভেন্ট কনট্র্যাক্ট টাইপ বা ইন্টারফেস ডিফাইন করুন যাতে দুই প্রান্তেই প্রোপার অটো-কমপ্লিশন পাওয়া যায়।

### সাধারণ ভুলসমূহ
কাস্টম বিজনেজ লজিকের জন্য সিস্টেমের রিজার্ভড কী-ওয়ার্ড (যেমন: \`connect\`, \`disconnect\`, \`error\`) কাস্টম ইভেন্টের নাম হিসেবে ব্যবহার করা।

### Code Example
\`\`\`typescript
// SERVER: রিসিভ ও ব্রডকাস্ট
io.on('connection', (socket) => {
  // চ্যাট ইভেন্ট শোনা হচ্ছে
  socket.on('chat-message', (data) => {
    console.log(\`Msg from \${socket.id}:\`, data.text);
    // অন্যদের ব্রডকাস্ট করা হচ্ছে
    socket.broadcast.emit('chat-message', {
      sender: socket.id,
      text: data.text
    });
  });
});

// CLIENT: সেন্ড ও রিসিভ
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.emit('chat-message', { text: 'Hello, group!' });

socket.on('chat-message', (data) => {
  console.log(\`Received from \${data.sender}: \${data.text}\`);
});
\`\`\``
  },
  {
    id: 'other-topics-5',
    title: 'What are Rooms in Socket.IO, and how do you use join() and leave()?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Socket.IO', 'Rooms', 'Real-time', 'Backend'],
    enAnswer: 'Rooms are server-side channels that sockets can join() and leave(). They allow you to broadcast messages to a targeted subset of sockets (e.g. users in a specific chat group) instead of globally.',
    bnAnswer: 'রুম (Rooms) হলো সার্ভার-সাইড চ্যানেল যাতে সকেট কানেকশনগুলো join() ও leave() হতে পারে। এটি গ্লোবাল ব্রডকাস্ট করার পরিবর্তে শুধুমাত্র একটি নির্দিষ্ট সাব-গ্রুপে (যেমন: একটি নির্দিষ্ট চ্যাট গ্রুপের ইউজারদের) মেসেজ পাঠাতে সাহায্য করে।',
    enExplanation: `### Explanation
In Socket.IO, rooms are a server-only concept (the client does not have access to the list of rooms it is in):
1. **Join**: \`socket.join('room-name')\` places the socket in the designated channel.
2. **Leave**: \`socket.leave('room-name')\` removes the socket from that channel.
3. **Broadcasting to Rooms**:
   - \`io.to('room-name').emit(...)\` sends an event to all users in that room.
   - \`socket.to('room-name').emit(...)\` sends to all users in the room *except* the sender.

### Real-World Example
In a support ticket app, customer support staff must only see messages related to ticket ID \`ticket-789\`. When they open that ticket view, the server adds them to room \`ticket-789\`. When a customer writes a message, it is emitted only to room \`ticket-789\`, preventing leakages to other tickets.

### Best Practice
Always clean up rooms. While Socket.IO automatically removes a socket from all rooms it was in upon disconnect, it is best practice to call \`socket.leave()\` when users switch tabs or close UI view models to avoid redundant network updates.

### Common Mistakes
Trying to call \`socket.join()\` from the client-side code directly. Joining/leaving a room is strictly a server-controlled operation for security reasons.

### Code Example
\`\`\`typescript
// SERVER side room management
io.on('connection', (socket) => {
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(\`Socket \${socket.id} joined room: \${roomId}\`);
  });

  socket.on('send-room-msg', (data) => {
    // Send event only to room members
    io.to(data.roomId).emit('new-message', {
      sender: socket.id,
      text: data.text
    });
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Socket.IO-তে রুম হলো সম্পূর্ণ সার্ভার-সাইড একটি কনসেপ্ট (ক্লায়েন্ট কোন কোন রুমে আছে তা দেখতে পারে না):
১. **Join**: \`socket.join('room-name')\` এর মাধ্যমে সকেট কানেকশনটি নির্দিষ্ট রুমে প্রবেশ করে।
২. **Leave**: \`socket.leave('room-name')\` এর মাধ্যমে সকেট কানেকশনটি রুম থেকে বিদায় নেয়।
৩. **রুমে ব্রডকাস্ট**:
   - \`io.to('room-name').emit(...)\` ওই রুমের সব মেম্বারকে মেসেজ পাঠায়।
   - \`socket.to('room-name').emit(...)\` রিকোয়েস্টকারী ছাড়া রুমের বাকিদের মেসেজ পাঠায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাপোর্ট টিকিট অ্যাপ্লিকেশনে, নির্দিষ্ট টিকিটের চ্যাট শুধু সংশ্লিষ্ট কাস্টমার কেয়ার ও ইউজার দেখতে পাবেন। ইউজার চ্যাটবক্স ওপেন করলে সার্ভার তাকে \`ticket-789\` রুমে যুক্ত করে। ওই রুমে কোনো মেসেজ আসলে তা শুধুমাত্র রুমের গ্রাহকরাই পাবেন, বাইরের কেউ ডাটা পাবেন না।

### উত্তম অনুশীলন
ডিসকানেক্ট হলে সকেট অটোমেটিক সব রুম থেকে বিদায় নিলেও, মেমোরি ফ্রী রাখতে ও ব্যান্ডউইথ বাঁচাতে ইউজার নির্দিষ্ট ইউআই পেজ লিভ করলে ম্যানুয়ালি \`socket.leave(roomId)\` কল করা একটি ভালো অভ্যাস।

### সাধারণ ভুলসমূহ
ক্লায়েন্ট সাইড থেকে সরাসরি \`socket.join()\` মেথড রান করানোর চেষ্টা করা। সিকিউরিটি সুরক্ষার স্বার্থে রুমে প্রবেশ ও বের হওয়ার প্রক্রিয়াটি পুরোপুরি সার্ভার থেকে নিয়ন্ত্রিত হতে হবে।

### Code Example
\`\`\`typescript
// SERVER সাইড রুম ম্যানেজমেন্ট
io.on('connection', (socket) => {
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(\`Socket \${socket.id} joined room: \${roomId}\`);
  });

  socket.on('send-room-msg', (data) => {
    // শুধুমাত্র ওই রুমের সদস্যদের ইভেন্ট পাঠানো হচ্ছে
    io.to(data.roomId).emit('new-message', {
      sender: socket.id,
      text: data.text
    });
  });
});
\`\`\``
  },
  {
    id: 'other-topics-6',
    title: 'What is Bull Job Queue, and why do we use it in Node.js applications?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Bull Queue', 'Redis', 'Job Queue', 'Node.js', 'Asynchronous'],
    enAnswer: 'Bull is a Redis-backed job and message queue for Node.js. It is used to handle CPU-heavy or time-consuming tasks (like sending emails, image resizing, or report generation) in the background asynchronously, keeping the main HTTP thread fast.',
    bnAnswer: 'Bull হলো Node.js-এর জন্য একটি Redis-ভিত্তিক জব ও মেসেজ কিউ (Queue)। এটি মূলত সিপিইউ-ভারী বা সময়সাপেক্ষ কাজগুলো (যেমন: ইমেইল পাঠানো, ইমেজ রিসাইজ, রিপোর্ট জেনারেশন) ব্যাকগ্রাউন্ডে অ্যাসিনক্রোনাসলি রান করতে ব্যবহৃত হয়, যাতে মেইন এইচটিটিপি থ্রেড ফাস্ট থাকে।',
    enExplanation: `### Explanation
Node.js runs on a single thread. CPU-intensive operations block the event loop, causing APIs to delay responses to all users.
1. **How Bull Works**:
   - **Producers**: Express endpoints receive a request, wrap parameters, and add a job to the queue: \`myQueue.add(data)\`.
   - **Redis Store**: Redis persists the job list, tracking states and schedules.
   - **Consumers (Workers)**: Isolated processor tasks pull jobs from the queue and run them in the background.
2. **Benefits**:
   - Prevents API timeout errors.
   - Supports job retries, delays, rate-limiting, and cron schedules out of the box.

### Real-World Example
When a new user signs up, you must generate a PDF welcome handbook and send a verification email. Processing this inside the register request takes 4 seconds, forcing the user to wait. Using Bull, the API puts a \`{ userId }\` job in the queue and immediately returns \`200 OK\`. The background worker processes it in the background while the user begins browsing.

### Best Practice
Always isolate worker processes from your main Express API servers in production. Run workers on separate machine instances or containers to prevent background CPU spikes from crashing your user-facing APIs.

### Common Mistakes
Storing heavy objects or binary buffers (like complete PDF buffers) inside the job details. Always save minimum references (like ID paths or database primary keys) and fetch files or schemas inside the worker.

### Code Example
\`\`\`typescript
import Queue from 'bull';

// 1. Create a queue backed by Redis
const emailQueue = new Queue('email-sending', 'redis://127.0.0.1:6379');

// 2. Producer: Add a job to the queue
async function registerUser(email: string) {
  await emailQueue.add({ email, template: 'welcome' });
  console.log('Job queued');
}

// 3. Consumer: Process the job in background
emailQueue.process(async (job) => {
  console.log(\`Processing email job for: \${job.data.email}\`);
  await sendEmailViaSmtp(job.data.email, job.data.template);
});

async function sendEmailViaSmtp(email: string, template: string) {
  // Email sending implementation
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Node.js একটি মাত্র মেইন থ্রেডে কাজ করে। ফলে ভারী কোনো ক্যালকুলেশন মেইন থ্রেডকে ব্লক করে দিলে সবার জন্য সাইট হ্যাং হয়ে যায়।
১. **Bull যেভাবে কাজ করে**:
   - **প্রডিউসার (Producer)**: এক্সপ্রেস রাউট ডাটা রিসিভ করে কিউ-তে জব পুশ করে: \`myQueue.add(data)\`।
   - **রেডিস (Redis)**: এটি কিউ-র সব জব ডাটাবেজে স্টোর করে সিকোয়েন্স ধরে রাখে।
   - **কনজিউমার (Consumer/Worker)**: ব্যাকগ্রাউন্ডে প্রসেসর ফাইল কিউ থেকে ডাটা রিড করে এক এক করে প্রসেস করে।
২. **সুবিধাসমূহ**:
   - এপিআই রেসপন্স টাইমআউট হওয়া বন্ধ হয়।
   - অটোমেটিক জব রি-ট্রাই, ডিলে জব ও ক্রন জব সাপোর্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
কোনো ইউজার রেজিস্ট্রেশন করলে তাকে একটি পিডিএফ গাইডবুক ও ভেরিফিকেশন মেইল পাঠাতে হবে। পুরো প্রসেস এক্সপ্রেস রাউটে রান করালে ৪ সেকেন্ড লোডিং স্ক্রিন ভেসে থাকবে। Bull কিউ ব্যবহার করলে রাউট শুধু \`{ userId }\` কিউ-তে পুশ করে সাথে সাথে ইউজারকে পেজে ঢুকিয়ে দিবে, আর ইমেইল ব্যাকগ্রাউন্ডে পাঠানো হবে।

### উত্তম অনুশীলন
প্রোডাকশন লেভেলে এক্সপ্রেস এপিআই সার্ভার এবং কিউ ওয়ার্কার থ্রেডগুলোকে আলাদা কন্টেইনারে রান করান। এতে ভারী প্রসেসিংয়ের সময় সিপিইউ লোড বেড়ে এপিআই ক্র্যাশ করার ভয় থাকে না।

### সাধারণ ভুলসমূহ
জবের ভেতরের ডাটাতে পুরো পিডিএফ ফাইল বা বাফারের মতো বড় ডাটা পুশ করা। সবসময় শুধুমাত্র ডাটাবেজের আইডি বা ফাইলের পাথ (References) জবে সেভ করবেন এবং ওয়ার্কারের ভেতরে গিয়ে মেইন ডাটা রিড করবেন।

### Code Example
\`\`\`typescript
import Queue from 'bull';

// ১. রেডিস কানেকশন সহ কিউ তৈরি
const emailQueue = new Queue('email-sending', 'redis://127.0.0.1:6379');

// ২. প্রডিউসার: কিউতে কাজ অ্যাড করা হচ্ছে
async function registerUser(email: string) {
  await emailQueue.add({ email, template: 'welcome' });
  console.log('Job queued');
}

// ৩. কনজিউমার: ব্যাকগ্রাউন্ডে কাজ সম্পন্ন করা হচ্ছে
emailQueue.process(async (job) => {
  console.log(\`Processing email job for: \${job.data.email}\`);
  await sendEmailViaSmtp(job.data.email, job.data.template);
});

async function sendEmailViaSmtp(email: string, template: string) {
  // ইমেইল পাঠানোর প্রসেস
}
\`\`\``
  },
  {
    id: 'other-topics-7',
    title: 'Explain the lifecycle states of a Bull job (Active, Completed, Failed, Delayed, Waiting).',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Bull Queue', 'Redis', 'Job Lifecycle', 'Backend', 'Job States'],
    enAnswer: 'A Bull job goes through: Waiting (ready to be processed), Active (currently executing), Completed (succeeded), Failed (threw error during execution), and Delayed (scheduled for a future time).',
    bnAnswer: 'একটি Bull জবের লাইফসাইকেল ধাপগুলো হলো: Waiting (প্রসেসের অপেক্ষায়), Active (বর্তমানে সচল), Completed (সফলভাবে শেষ), Failed (এরর পেয়ে ব্যর্থ), এবং Delayed (ভবিষ্যতে ফায়ার হওয়ার শিডিউল)।',
    enExplanation: `### Explanation
Every job pushed into a Bull queue traverses through deterministic states managed by Redis lists:
- **Waiting**: The job is inside the queue waiting to be fetched by any free worker.
- **Active**: A worker has pulled the job from the queue and the process function is currently executing.
- **Completed**: The worker finished processing successfully. The job remains in this state until cleaned up by memory policies.
- **Failed**: The process function threw an uncaught error. Bull records the error stack trace in Redis.
- **Delayed**: The job is scheduled to run after a specific duration or at a specific interval. Redis monitors the timer and moves it to \`Waiting\` when expired.

### Real-World Example
In a subscription billing system:
- A user's invoice generation job starts in **Waiting**.
- The worker picks it up: state becomes **Active**.
- If the payment gateway API crashes during fetch, the state moves to **Failed** (ready for retry policies).
- If successful, it moves to **Completed**.
- A job scheduled to check user trial expiration in 30 days remains in **Delayed** state.

### Best Practice
Set clean-up limits for Completed and Failed jobs (e.g., \`removeOnComplete: 100\`, \`removeOnFail: 500\`) to prevent Redis memory from bloating with old history logs.

### Common Mistakes
Not configuring retries or delay configurations for jobs prone to network fluctuations, causing them to move directly to \`Failed\` and block operations.

### Code Example
\`\`\`typescript
import Queue from 'bull';
const pdfQueue = new Queue('pdf-generator');

// Adding a delayed job with retry attempts
await pdfQueue.add(
  { fileId: '123' },
  {
    delay: 5000,          // Stays in 'Delayed' for 5s before 'Waiting'
    attempts: 3,          // Try up to 3 times if it fails
    backoff: 1000,        // Wait 1s between retries
    removeOnComplete: true // Auto delete history on success
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিস মেমরির সাহায্যে Bull কিউ-এর প্রতিটি জব নির্দিষ্ট লাইফসাইকেল স্টেজ অনুসরণ করে:
- **Waiting**: জবটি লাইনে অপেক্ষা করছে যতক্ষণ না কোনো খালি ওয়ার্কার একে তুলে নেয়।
- **Active**: কোনো ওয়ার্কার থ্রেড কিউ থেকে জবটি রিসিভ করে বর্তমানে প্রসেস করছে।
- **Completed**: প্রসেস কোডটি কোনো এরর ছাড়া সাকসেসফুলি রান হয়েছে।
- **Failed**: জব রান হওয়ার সময় এরর পেয়ে কাজ থেমে গেছে।
- **Delayed**: নির্দিষ্ট সময় পর কাজ শুরু হওয়ার শিডিউল। সময় শেষ হলে এটি \`Waiting\` লিস্টে শিফট হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাবস্ক্রিপশন সিস্টেমে:
- মান্থলি বিল জেনারেট করার কমান্ড ফায়ার হলে তা **Waiting** স্টেটে থাকে।
- ওয়ার্কার চার্জ প্রসেস শুরু করলে তা **Active** হয়।
- ব্যাংক গেটওয়ে অফলাইন থাকলে রিকোয়েস্টটি এরর পেয়ে **Failed** স্টেটে চলে যায় (রি-ট্রাই করার যোগ্য)।
- চার্জ কমপ্লিট হলে তা **Completed** হয়।
- ৩০ দিন পর ট্রায়াল শেষ হবে এমন জবটি **Delayed** লিস্টে অপেক্ষা করতে থাকে।

### উত্তম অনুশীলন
রেডিস র‍্যাম ডাটা ফ্রী রাখতে কিউ কনফিগারে \`removeOnComplete: 100\` এবং \`removeOnFail: 500\` সেট করে রাখুন যাতে পুরনো হিস্ট্রির কারণে মেমোরি জ্যাম না হয়।

### সাধারণ ভুলসমূহ
যে কাজগুলোতে নেটওয়ার্ক এরর হওয়ার চান্স থাকে, সেগুলোতে রি-ট্রাই সেট না করা, ফলে কোনো ভুল পেলেই সাথে সাথে জবটি \`Failed\` হয়ে বাতিল হয়ে যায়।

### Code Example
\`\`\`typescript
import Queue from 'bull';
const pdfQueue = new Queue('pdf-generator');

// ডিলে ও রি-ট্রাই মেকানিজম সহ জব পুশ করা হচ্ছে
await pdfQueue.add(
  { fileId: '123' },
  {
    delay: 5000,          // ৫ সেকেন্ড 'Delayed' স্টেটে থাকবে
    attempts: 3,          // ফেইল হলে সর্বোচ্চ ৩ বার ট্রাই করবে
    backoff: 1000,        // প্রতি রি-ট্রাইয়ের মাঝে ১ সেকেন্ড বিরতি
    removeOnComplete: true // সাকসেস হলে সাথে সাথে ক্যাশ মেমোরি ক্লিয়ার করবে
  }
);
\`\`\``
  },
  {
    id: 'other-topics-8',
    title: 'What is a Mongoose Schema, and how does it define validation rules for MongoDB collections?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Mongoose', 'MongoDB', 'Database Schema', 'Validation', 'ODM'],
    enAnswer: 'A Mongoose Schema is a configuration object that defines the structure, data types, and validation rules for documents within a MongoDB collection. It acts as an application-level gatekeeper to keep database records consistent.',
    bnAnswer: 'Mongoose Schema হলো একটি কনফিগারেশন অবজেক্ট যা MongoDB কালেকশনের জন্য ডকুমেন্টের স্ট্রাকচার, ডাটা টাইপ ও ভ্যালিডেশন রুল ডিফাইন করে। এটি ডাটাবেজ স্তরে ডাটার সামঞ্জস্য বজায় রাখতে গেটকিপার হিসেবে কাজ করে।',
    enExplanation: `### Explanation
MongoDB is schema-less by default. To prevent documents from containing unstructured or corrupt fields, Mongoose (the MongoDB Object Data Modeling library) provides Schemas:
1. **Schema Mapping**: Map properties to specific JavaScript types (\`String\`, \`Number\`, \`Boolean\`, \`Date\`, \`Array\`, \`ObjectId\`).
2. **Built-in Validators**: Enforce properties like \`required\`, \`min\`/\`max\` values for numbers, \`match\` regex expressions for strings, and custom validation functions.
3. **Defaults**: Set automatic fields like \`{ type: Date, default: Date.now }\`.

### Real-World Example
In a user database, registering a user without an email address or inserting a user age of \`-5\` corrupts business analytics. A Mongoose schema prevents this. If a controller tries to save age as \`-5\`, Mongoose blocks the query before it hits MongoDB, throwing a validation error.

### Best Practice
Always define schemas with clear validations. Add indexes directly inside the schema definition on frequently queried fields (e.g., \`{ email: { type: String, unique: true, index: true } }\`) to optimize query speeds.

### Common Mistakes
Relying only on database-level checks. MongoDB will accept any object structure if Mongoose models are bypassed (e.g., using raw Mongo drivers). Always validate critical payload fields using Mongoose Schemas or schema validation layers.

### Code Example
\`\`\`typescript
import mongoose, { Schema, model } from 'mongoose';

// 1. Define the Schema with validations
const productSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Product name is required'],
    trim: true
  },
  price: { 
    type: Number, 
    min: [0, 'Price cannot be negative'],
    required: true
  },
  inStock: { 
    type: Boolean, 
    default: true 
  }
});

// 2. Create the Model
export const Product = model('Product', productSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
MongoDB ডিফল্টভাবে স্কিমা-হীন (schema-less)। কালেকশনে যাতে ভুল বা অসমঞ্জস্যপূর্ণ ডাটা প্রবেশ করতে না পারে, সেজন্য Mongoose (একটি ODM লাইব্রেরি) স্কিমা ডিফাইন করার সুবিধা দেয়:
১. **টাইপ নির্ধারণ**: ডাটার নির্দিষ্ট ফিল্ডে কোন টাইপ (\`String\`, \`Number\`, \`Boolean\`, \`Date\`, \`Array\`) সেভ হবে তা নির্দিষ্ট করে দেওয়া।
২. **ভ্যালিডেশন রুল**: \`required\` (বাধ্যতামূলক), সংখ্যা হলে \`min\`/\`max\`, টেক্সট হলে রেগুলার এক্সপ্রেশন (\`match\`), অথবা কাস্টম ভ্যালিডেশন ফাংশন সেট করে দেওয়া।
৩. **ডিফল্ট ভ্যালু**: ডাটা সেভের সময় কোনো প্রোপার্টি না দিলে অটোমেটিক ভ্যালু পুশ করা (যেমন: \`default: Date.now\`)।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার কালেকশনে ইমেইল ছাড়া ইউজার তৈরি করা অথবা বয়স \`-৫\` ইনপুট দেওয়া রোধ করতে Mongoose স্কিমা ব্যবহৃত হয়। কোনো কন্ট্রোলার মাইনাস ভ্যালু দিয়ে ইউজার ডাটা সেভ করার রিকোয়েস্ট পাঠালে মঙ্গুজ ডাটাবেজে হিট করার আগেই কুয়েরি আটকে ভ্যালিডেশন এরর থ্রো করে।

### উত্তম অনুশীলন
স্কিমা তৈরি করার সময় প্রয়োজনীয় ফিল্ডে ভ্যালিডেশন ও ইনডেক্সিং ডিফাইন করে দিন। ঘন ঘন কুয়েরি হয় এমন ফিল্ডে (যেমন ইমেইল) \`{ unique: true, index: true }\` সেট করুন যাতে ডাটাবেজ সার্চ স্পিড বৃদ্ধি পায়।

### সাধারণ ভুলসমূহ
মনে করা যে স্কিমা ডিক্লেয়ার করলেই ডাটাবেজ লেভেলে সব লক হয়ে গেছে। আপনি যদি মঙ্গুজ বাইপাস করে র-ড্রাইভার দিয়ে ডাটা রাইট করেন তবে যেকোনো ডাটা সেভ হয়ে যাবে। তাই ভ্যালিডেশন গেটকিপার হিসেবে মঙ্গুজ স্কিমা মডেল ব্যবহার করুন।

### Code Example
\`\`\`typescript
import mongoose, { Schema, model } from 'mongoose';

// ১. ভ্যালিডেশন সহ স্কিমা তৈরি
const productSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Product name is required'],
    trim: true
  },
  price: { 
    type: Number, 
    min: [0, 'Price cannot be negative'],
    required: true
  },
  inStock: { 
    type: Boolean, 
    default: true 
  }
});

// ২. মডেল তৈরি করা
export const Product = model('Product', productSchema);
\`\`\``
  },
  {
    id: 'other-topics-9',
    title: 'How do pre and post hooks work in Mongoose schemas (e.g., password hashing)?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Mongoose', 'Middleware', 'Pre Post Hooks', 'Security', 'Database'],
    enAnswer: 'Mongoose middlewares (pre and post hooks) intercept database operations. "pre" hooks run before an event (e.g., hashing a password before save), while "post" hooks run after an event (e.g., logging or sending notifications after save).',
    bnAnswer: 'Mongoose মিডলওয়্যার (pre এবং post hooks) ডাটাবেজ অপারেশনকে ইন্টারসেপ্ট করে। "pre" হুক কাজের আগে রান হয় (যেমন: সেভ করার আগে পাসওয়ার্ড হ্যাশ করা), আর "post" হুক কাজের শেষে রান হয় (যেমন: সেভের পর লগ তৈরি করা বা নোটিফিকেশন পাঠানো)।',
    enExplanation: `### Explanation
Mongoose middlewares are functions which are passed control during execution of asynchronous functions:
1. **Pre Hooks (\`schema.pre\`)**:
   - Executes logic *before* Mongoose performs actions like \`save\`, \`validate\`, \`remove\`, or \`updateOne\`.
   - Commonly used for data sanitization, password hashing, and auto-populating relations.
   - Requires calling \`next()\` or returning a Promise to proceed.
2. **Post Hooks (\`schema.post\`)**:
   - Executes logic *after* Mongoose completes actions.
   - Typically used for logging, sending welcome emails, or analytics logging.
   - Receives the saved document context directly.

### Real-World Example
In a user registration flow, storing the plain-text password \`123456\` in the database is a massive security hazard. Using a Mongoose \`pre('save')\` hook, the schema automatically intercepts the document, hashes the password using \`bcrypt\` before writing to MongoDB, and updates the database with the secure hash.

### Best Practice
Inside \`pre('save')\` hooks, check if the password field was actually modified using \`this.isModified('password')\` to prevent re-hashing the password when updating unrelated fields like username or bio.

### Common Mistakes
Using arrow functions (\`() => {}\`) inside Mongoose hooks. Mongoose binds the document instance to the \`this\` context. Arrow functions override \`this\`, making the document attributes inaccessible (\`this\` becomes undefined).

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: String,
  password: { type: String, required: true }
});

// Pre-save hook: Hash password before saving to DB
userSchema.pre('save', async function (next) {
  // 'this' refers to the user document
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose মিডলওয়্যার বা হুক হলো অ্যাসিনক্রোনাস লাইফসাইকেল ফাংশন যা ডাটাবেজ কুয়েরি এগজিকিউশনের নির্দিষ্ট সময়ে রান হয়:
১. **Pre Hooks (\`schema.pre\`)**:
   - ডাটাবেজে \`save\`, \`validate\`, \`remove\` ইত্যাদি অপারেশন সম্পন্ন হওয়ার *পূর্বে* নির্দিষ্ট লজিক রান করায়।
   - পাসওয়ার্ড হ্যাশিং, ইনপুট ক্লিনিং ইত্যাদিতে ব্যবহৃত হয়।
   - পরবর্তী ধাপে যেতে \`next()\` কল করতে হয়।
২. **Post Hooks (\`schema.post\`)**:
   - অপারেশন সম্পন্ন হওয়ার *পরে* রান হয়।
   - লগইন অ্যানালিটিক্স, নোটিফিকেশন পাঠানো ইত্যাদিতে ব্যবহৃত হয়। এটি সেভ হওয়া মেইন অবজেক্ট প্যারামিটার হিসেবে পায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার রেজিস্ট্রেশনের সময় ডাটাবেজে প্লেইন টেক্সট পাসওয়ার্ড \`123456\` সেভ করা মারাত্মক সিকিউরিটি ঝুঁকি। Mongoose-এর \`pre('save')\` হুক ব্যবহার করে ডাটা মঙ্গোডিবিতে রাইট হওয়ার ঠিক আগে পাসওয়ার্ডটি \`bcrypt\` লাইব্রেরি দিয়ে হ্যাশ করা যায়, ফলে হ্যাকাররা ডাটাবেজ লিক করলেও র পাসওয়ার্ড পাবে না।

### উত্তম অনুশীলন
পাসওয়ার্ড হ্যাশ করার আগে সবসময় চেক করে নিন পাসওয়ার্ডটি আসলেই মডিফাই হয়েছে কিনা (\`this.isModified('password')\`)। এটি অন্য কোনো নন-সিকিউরিটি ফিল্ড (যেমন ইউজারনেম) আপডেট করার সময় পাসওয়ার্ড পুনরায় হ্যাশ হওয়া আটকায়।

### সাধারণ ভুলসমূহ
Mongoose হুকের ভেতর অ্যারো ফাংশন (\`() => {}\`) ব্যবহার করা। অ্যারো ফাংশন ব্যবহার করলে \`this\` এর বাইন্ডিং নষ্ট হয়ে যায়, যার ফলে ডকুমেন্টের ডাটা অ্যাক্সেস করা যায় না (\`this\` আনডিফাইন্ড দেখায়)।

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: String,
  password: { type: String, required: true }
});

// Pre-save হুক: ডেটাবেজে সেভ হওয়ার ঠিক আগে পাসওয়ার্ড হ্যাশ করা
userSchema.pre('save', async function (next) {
  // 'this' এখানে কারেন্ট ইউজার ডকুমেন্টকে পয়েন্ট করে
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});
\`\`\``
  },
  {
    id: 'other-topics-10',
    title: 'What is document population in Mongoose, and how do you use populate()?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Mongoose', 'MongoDB', 'Relationships', 'Population', 'Database Design'],
    enAnswer: 'Population is the process of replacing reference IDs in Mongoose documents with the actual documents from another collection. It works like a join operation in relational databases.',
    bnAnswer: 'Mongoose-এ পপুলেশন (Population) হলো নির্দিষ্ট ডকুমেন্টের রেফারেন্স আইডিগুলোকে অন্য কালেকশনের মূল ডকুমেন্ট দিয়ে প্রতিস্থাপন করার প্রসেস। এটি রিলেশনাল ডাটাবেজের জয়েন (Join) অপারেশনের মতো কাজ করে।',
    enExplanation: `### Explanation
MongoDB is non-relational, meaning it does not support SQL JOIN clauses:
- Instead, you store document references using their \`Schema.Types.ObjectId\` along with a \`ref\` parameter pointing to the target Model.
- **\`populate()\`**: When fetching data, Mongoose queries the referenced collection in the background and resolves the matching documents, returning a nested JSON object to the application.

### Real-World Example
In a project manager dashboard, each task has an \`author\` field stored as a user ID:
- Raw MongoDB returns: \`{ title: 'Fix bug', author: '60c72b2f9b1d8a' }\`.
- Using \`.populate('author')\`, Mongoose fetches the user and returns: \`{ title: 'Fix bug', author: { name: 'Rohit', email: 'rohit@dev.com' } }\`.

### Best Practice
Only select required fields during population (e.g., \`.populate('author', 'name email')\`) to avoid fetching sensitive or heavy fields like hashed passwords from the referenced documents, saving bandwidth.

### Common Mistakes
Forgetting that populating triggers an additional database query behind the scenes. Storing too many references and populating them all in loop lookups creates the N+1 query problem, slowing down page loads.

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

// 1. Reference definition in Schema
const PostSchema = new Schema({
  title: String,
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // Must match model name exactly
    required: true 
  }
});

const Post = model('Post', PostSchema);

// 2. Fetch and populate author data
async function getPostDetails(postId: string) {
  const post = await Post.findById(postId)
    .populate('author', 'username email'); // Populates only username and email
  return post;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
MongoDB মূলত নন-রিলেশনাল ডাটাবেজ, অর্থাৎ এতে কোনো এসকিউএল (SQL) JOIN ক্লাজ নেই:
- এর পরিবর্তে আমরা এক ডকুমেন্টের রেফারেন্স বা আইডি অন্য ডকুমেন্টে \`Schema.Types.ObjectId\` এবং \`ref\` (মডেলের নাম) এর সাহায্যে স্টোর করি।
- **\`populate()\`**: কুয়েরি রান করার সময় মঙ্গুজ ব্যাকগ্রাউন্ডে রেফারেন্স করা কালেকশন থেকে ডাটা তুলে এনে আইডিটির জায়গায় মেইন অবজেক্টটি নেস্ট করে বসিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফোরাম পোস্টে, প্রতিটি পোস্টের একজন রাইটার বা \`author\` থাকেন যার ইউজার আইডি পোস্টে সেভ করা থাকে:
- র-মঙ্গোডিবি কুয়েরি দিবে: \`{ title: 'React Guide', author: '60c72b2f9b1d8a' }\`।
- \`.populate('author')\` ব্যবহার করলে আউটপুট আসবে: \`{ title: 'React Guide', author: { username: 'rohit', email: 'rohit@dev.com' } }\`।

### উত্তম অনুশীলন
পপুলেট করার সময় পাসওয়ার্ডের মতো সেন্সিটিভ ডাটা লোড হওয়া এড়াতে শুধুমাত্র প্রয়োজনীয় কলাম সিলেক্ট করে দিন (যেমন: \`.populate('author', 'username email')\`)।

### সাধারণ ভুলসমূহ
পপুলেশনকে মঙ্গোডিবি লেভেলের জয়েন ভাবা। আসলে মঙ্গুজ অতিরিক্ত কুয়েরি রান করে এই ডাটাগুলো নিয়ে আসে। লুপের ভেতর একাধিক পপুলেশন ফায়ার করলে কুয়েরি সংখ্যা অনেক বেড়ে যায় (N+1 query problem) এবং প্রজেক্টের স্পিড ড্রপ করে।

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';

// ১. স্কিমাতে রেফারেন্স বা আইডি পয়েন্ট করা
const PostSchema = new Schema({
  title: String,
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // মেইন মডেল নামের সাথে অবিকল মিলতে হবে
    required: true 
  }
});

const Post = model('Post', PostSchema);

// ২. অথর ডাটা পপুলেট করে পোস্ট তুলে আনা
async function getPostDetails(postId: string) {
  const post = await Post.findById(postId)
    .populate('author', 'username email'); // শুধুমাত্র ইউজারনেম ও ইমেইল লোড করবে
  return post;
}
\`\`\``
  },
  {
    id: 'other-topics-11',
    title: 'What is Redis, and what is it primarily used for in modern web architectures?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Redis', 'Caching', 'Database', 'Key-Value', 'Performance'],
    enAnswer: 'Redis is an open-source, in-memory key-value data store. It is primarily used as a caching layer, session store, message broker, and rate limiter to deliver sub-millisecond data read speeds.',
    bnAnswer: 'Redis হলো একটি ওপেন-সোর্স ও ইন-মেমোরি কী-ভ্যালু ডাটা স্টোর। এটি মূলত ক্যাশিং লেয়ার, সেশন স্টোর, মেসেজ ব্রোকার ও রেট লিমিটার হিসেবে ব্যবহৃত হয় যাতে সাব-মিলিসেকেন্ড স্পিডে ডাটা রিড করা যায়।',
    enExplanation: `### Explanation
Redis (Remote Dictionary Server) stores all data in volatile RAM rather than writing to hard disk drives:
1. **Performance**: Reading from RAM is orders of magnitude faster than querying disk-bound databases like PostgreSQL or MongoDB.
2. **Data Structure Store**: Unlike standard caches, Redis supports data structures like Strings, Lists, Sets, Hashes, and Sorted Sets.
3. **Use Cases**:
   - **Database Caching**: Storing expensive query results.
   - **Session Store**: Tracking user login states across clustered web servers.
   - **Rate Limiting**: Tracking API requests per IP.

### Real-World Example
In a high-traffic news website, querying the database for "Trending Articles" on every page load runs heavy SQL joins, slowing the homepage. Instead, the server fetches it once, saves the JSON string in Redis with a 5-minute expiry, and serves subsequent users directly from Redis RAM in 1 millisecond.

### Best Practice
Always define a Time-To-Live (TTL) expiry on cached items (e.g., using \`SETEX\` or \`EXPIRE\`) to prevent stale data from lingering and to prevent Redis RAM from filling up.

### Common Mistakes
Using Redis as a primary, persistent database for critical financial transaction histories without configuring proper persistence parameters. If the server power cycles, unsaved RAM data is lost.

### Code Example
\`\`\`typescript
import { createClient } from 'redis';

async function manageCache() {
  const client = createClient();
  await client.connect();

  // 1. Write data to cache with 60 seconds TTL (Time to Live)
  await client.set('trending_posts', JSON.stringify([{ id: 1, title: 'Dev Tips' }]), {
    EX: 60
  });

  // 2. Read from Redis Cache
  const cachedData = await client.get('trending_posts');
  console.log('Cached output:', JSON.parse(cachedData || '[]'));
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Redis (Remote Dictionary Server) ডিস্কে লেখার পরিবর্তে সমস্ত ডাটা র‍্যামে (RAM) জমা রাখে:
১. **গতি**: হার্ডডিস্কের ডেটাবেজ (যেমন: PostgreSQL, MongoDB) কুয়েরির চেয়ে র‍্যাম থেকে রিড করা কয়েকশ গুণ ফাস্ট।
২. **স্ট্রাকচারড ডাটা**: সাধারণ ডিকশনারির বাইরে এটি Strings, Lists, Sets, Hashes এবং Sorted Sets ডাটা টাইপ সাপোর্ট করে।
৩. **ব্যবহার ক্ষেত্র**:
   - **ডেটাবেজ ক্যাশিং**: ভারী কুয়েরির রেজাল্ট ক্যাশে সেভ রাখা।
   - **সেশন স্টোর**: বিভিন্ন ক্লাস্টারে থাকা সার্ভারের ইউজার লগইন ট্র্যাকিং।
   - **রেট লিমিটিং**: কোনো আইপি থেকে এপিআই হিট লিমিট গণনা।

### বাস্তব-ভিত্তিক উদাহরণ
একটি জনপ্রিয় নিউজ সাইটে, ট্রেন্ডিং নিউজের জন্য প্রতি সেকেন্ডে হাজারো বার ডাটাবেজে SQL জয়েন কুয়েরি পাঠালে সার্ভার ডাউন হয়ে যাবে। এর চেয়ে ট্রেন্ডিং নিউজের রেজাল্ট একবার তুলে এনে ৫ মিনিটের এক্সপায়ারি (TTL) দিয়ে রেডিস র‍্যামে ক্যাশ করা হলো। পরবর্তী ৫ মিনিট সব ইউজার ১ মিলিসেকেন্ডে ফাস্ট ডাটা দেখতে পাবেন।

### উত্তম অনুশীলন
ক্যাশ করার সময় অবশ্যই মেয়াদের সময় বা টিটিএল (TTL) ডিফাইন করে দিন (যেমন: \`SETEX\` বা \`EXPIRE\`)। এটি মেমোরি ক্লিয়ার রাখতে ও অ্যাপ্লিকেশনে সঠিক ডাটা দেখাতে সাহায্য করে।

### সাধারণ ভুলসমূহ
গুরুত্বপূর্ণ ডাটাবেজ ব্যাকআপ ও পারসিস্টেন্স কনফিগ করা ছাড়াই রেডিসকে প্রাইমারি ডাটাবেজ হিসেবে ব্যবহার করা। সার্ভার রিস্টার্ট হলে র‍্যামে থাকা সব আনসেভড ডাটা সাথে সাথে হারিয়ে যাবে।

### Code Example
\`\`\`typescript
import { createClient } from 'redis';

async function manageCache() {
  const client = createClient();
  await client.connect();

  // ১. ৬০ সেকেন্ডের মেয়াদে ক্যাশ রাইট করা হচ্ছে
  await client.set('trending_posts', JSON.stringify([{ id: 1, title: 'Dev Tips' }]), {
    EX: 60
  });

  // ২. ক্যাশ থেকে ডাটা রিড করা হচ্ছে
  const cachedData = await client.get('trending_posts');
  console.log('Cached output:', JSON.parse(cachedData || '[]'));
}
\`\`\``
  },
  {
    id: 'other-topics-12',
    title: 'What is a Redis Hash, and when should you choose it over standard Redis Strings?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Redis', 'Redis Hashes', 'Caching', 'Performance Optimization'],
    enAnswer: 'A Redis Hash is a data structure represented as flat objects with field-value pairs. Use it to store structured objects (like user profiles) where you need to read or update individual properties without parsing the entire object string.',
    bnAnswer: 'Redis Hash হলো ফিল্ড-ভ্যালু জোড়ায় সাজানো একটি অবজেক্ট ডাটা স্ট্রাকচার। এটি ইউজার প্রোফাইলের মতো অবজেক্ট সেভ করতে ব্যবহৃত হয় যেখানে সম্পূর্ণ অবজেক্ট পার্স করা ছাড়াই নির্দিষ্ট সিঙ্গেল প্রোপার্টি রিড বা রাইট করার দরকার পড়ে।',
    enExplanation: `### Explanation
When storing a JSON object like \`{ id: '1', name: 'Alim', role: 'admin' }\` in Redis:
1. **Standard String approach**:
   - Serialize to a JSON string: \`SET user:1 '{"name":"Alim","role":"admin"}'\`.
   - To update \`role\`, you must retrieve the entire JSON, parse it in Node, change \`role\`, re-stringify, and save it back. This causes network overhead.
2. **Hash approach**:
   - Store as fields: \`HSET user:1 name "Alim" role "admin"\`.
   - Update a single field instantly: \`HSET user:1 role "superadmin"\`.
   - Fetch a single field: \`HGET user:1 role\`.

### Real-World Example
In a gaming scoreboard where a player's score and level change constantly:
- Using a JSON string forces parsing the entire player data on every point change.
- Using a Redis Hash allows incrementing the score instantly using \`HINCRBY player:100 score 10\`, keeping updates lightweight and highly concurrent.

### Best Practice
Use Hashes for objects with multiple properties that are updated independently. Use Strings when the object is simple or when it is always read and written as a whole (e.g., rendering static templates).

### Common Mistakes
Trying to nest arrays or complex objects inside Redis Hash fields. Hashes are flat string-to-string maps; nested structures must be serialized manually or broken down into separate keys.

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// 1. Create a Redis Hash
await client.hSet('user:profile:101', {
  username: 'alim_dev',
  role: 'member',
  points: '150'
});

// 2. Update a single field
await client.hSet('user:profile:101', 'role', 'moderator');

// 3. Increment a numeric field
await client.hIncrBy('user:profile:101', 'points', 50);

// 4. Retrieve the entire Hash object
const profile = await client.hGetAll('user:profile:101');
console.log('User Profile:', profile);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিসে কোনো অবজেক্ট (যেমন: \`{ id: '1', name: 'Alim', role: 'admin' }\`) সেভ করার ক্ষেত্রে ২টি মেথড আছে:
১. **রেগুলার স্ট্রিং মেথড**:
   - জেসন টেক্সট করে রাখা: \`SET user:1 '{"name":"Alim","role":"admin"}'\`।
   - কিন্তু শুধু \`role\` পরিবর্তন করতে হলে পুরো জেসন স্ট্রিংটি নোড সার্ভারে এনে পার্স করে, এডিট করে পুনরায় স্ট্রিং বানিয়ে সেভ করতে হয় যা নেটওয়ার্ক ব্যান্ডউইথ নষ্ট করে।
২. **হ্যাশ (Hash) মেথড**:
   - ফ্ল্যাট অবজেক্ট ফিল্ড আকারে সেভ করা: \`HSET user:1 name "Alim" role "admin"\`।
   - যেকোনো নির্দিষ্ট কী মুহূর্তের মধ্যে সরাসরি আপডেট করা: \`HSET user:1 role "superadmin"\`।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গেম লিডারবোর্ডে প্লেয়ারের লাইভ স্কোর অনবরত আপডেট হচ্ছে:
- সম্পূর্ণ ডাটা জেসন স্ট্রিং আকারে রাখলে প্রতি ১ পয়েন্ট অর্জনের সাথে পুরো জেসন পার্স করতে হবে যা সার্ভারে ল্যাগ আনবে।
- হ্যাস ব্যবহার করলে প্লেয়ারের লাইভ স্কোর \`HINCRBY player:100 score 10\` মেথড দিয়ে সরাসরি ইনক্রিমেন্ট করা সম্ভব।

### উত্তম অনুশীলন
যে সমস্ত অবজেক্টে একাধিক কলাম থাকে এবং যারা আলাদা আলাদা কলাম ধরে আপডেট হয়, তাদের জন্য সবসময় Redis Hash ব্যবহার করুন।

### সাধারণ ভুলসমূহ
Redis Hash-এর ভেতরে আবার নেস্টেড অবজেক্ট বা অ্যারে সেভ করার চেষ্টা করা। হ্যাস শুধুমাত্র ফ্ল্যাট কী-ভ্যালু স্ট্রিং সাপোর্ট করে। নেস্টেড ডাটা রাখতে চাইলে তাকে স্ট্রিং বানিয়ে রাখতে হবে।

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const client = createClient();
await client.connect();

// ১. একটি রেডিস হ্যাশ অবজেক্ট তৈরি
await client.hSet('user:profile:101', {
  username: 'alim_dev',
  role: 'member',
  points: '150'
});

// ২. একটি নির্দিষ্ট ফিল্ড আপডেট
await client.hSet('user:profile:101', 'role', 'moderator');

// ৩. সংখ্যার মান বৃদ্ধি করা
await client.hIncrBy('user:profile:101', 'points', 50);

// ৪. সম্পূর্ণ হ্যাশ অবজেক্টটি তুলে আনা
const profile = await client.hGetAll('user:profile:101');
console.log('User Profile:', profile);
\`\`\``
  },
  {
    id: 'other-topics-13',
    title: 'What is Dragonfly Redis, and how does it improve upon standard Redis architectures?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Dragonfly', 'Redis', 'Caching', 'Performance', 'Multi-threading'],
    enAnswer: 'Dragonfly is a modern, drop-in replacement for Redis. It leverages a multi-threaded, shared-nothing architecture to deliver up to 25x higher throughput and significantly better memory efficiency compared to standard Redis.',
    bnAnswer: 'Dragonfly হলো Redis-এর একটি আধুনিক ও ড্রপ-ইন প্রতিস্থাপন। এটি মাল্টি-থ্রেডেড ও শেয়ার্ড-নাথিং আর্কিটেকচার ব্যবহার করে স্ট্যান্ডার্ড রেডিক্সের তুলনায় ২৫ গুণ বেশি থ্রুপুট এবং অসাধারণ মেমোরি দক্ষতা প্রদান করে।',
    enExplanation: `### Explanation
Standard Redis is single-threaded. While this makes it extremely simple and avoids concurrency race locks, it means Redis cannot scale horizontally across multi-core CPUs on a single node:
1. **Dragonfly Multi-threading**: Utilizes a shared-nothing thread architecture where keys are partitioned (sharded) across multiple threads, allowing it to scale vertically using all CPU cores.
2. **Memory Efficiency**: Dragonfly uses novel cache serialization techniques, consuming up to 30-40% less memory than Redis for identical datasets.
3. **Compatibility**: It supports standard Redis commands out of the box, requiring zero code modifications in Node/Python clients.

### Real-World Example
In a high-scale e-commerce billing portal on Black Friday, a standard Redis instance peaks at 100% CPU utilization on its single thread, leading to queue delays. Upgrading the server hardware does not help Redis. Replacing Redis with Dragonfly instantly unlocks all 8 CPU cores of the server, absorbing the traffic spikes easily.

### Best Practice
Choose Dragonfly when scaling standard Redis requires complex clustering setups, or when you are running memory-bound databases where reducing hardware footprints saves costs.

### Common Mistakes
Assuming Dragonfly requires a custom client driver. Dragonfly is 100% wire-compatible with Redis, meaning you can connect directly using standard packages like \`redis\` or \`ioredis\`.

### Code Example
\`\`\`typescript
// Connection is identical to standard Redis connection
import { createClient } from 'redis';

// Connect to Dragonfly instance running on default Redis port 6379
const client = createClient({
  url: 'redis://localhost:6379'
});

async function run() {
  await client.connect();
  await client.set('dragonfly_key', 'Multi-core high throughput');
  const val = await client.get('dragonfly_key');
  console.log('Value:', val);
}
run();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্যান্ডার্ড Redis হলো সিঙ্গেল-থ্রেডেড। এটি সিস্টেম সহজ রাখলেও মাল্টি-কোর প্রসেসর সম্পন্ন সার্ভারের পুরো ক্ষমতা একা ব্যবহার করতে পারে না:
১. **Dragonfly মাল্টি-থ্রেডিং**: এটি একটি শেয়ার্ড-নাথিং থ্রেড আর্কিটেকচার ব্যবহার করে। ফলে কীগুলো প্রসেসরের একাধিক থ্রেডে ভাগ হয়ে প্রসেস হয়, যা সিস্টেমের সব সিপিইউ কোরের পূর্ণ ব্যবহার নিশ্চিত করে।
২. **মেমোরি সেভিং**: ড্রাগনফ্লাই অভিনব ডাটা সিরিয়ালাইজেশন মেথড ব্যবহার করে, যা সাধারণ রেডিসের চেয়ে ৩০-৪০% কম র‍্যাম মেমোরি খরচ করে।
৩. **কম্প্যাটিবিলিটি**: এটি রেডিসের সমস্ত এপিআই কমান্ড সাপোর্ট করে, ফলে কোডে কোনো চেঞ্জ করতে হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
ব্ল্যাক ফ্রাইডে ই-কমার্স বিক্রির সময় একটি সার্ভারে রেডিস তার সিঙ্গেল থ্রেড ফুল লোড হওয়ার কারণে রিকোয়েস্ট হোল্ড করে রাখছে। সার্ভারে ১৬টি কোর প্রসেসর থাকলেও রেডিস কেবল ১টি কোরই ব্যবহার করতে পারছিল। রেডিস সরিয়ে ড্রাগনফ্লাই ব্যবহার করা মাত্রই এটি সার্ভারের ১৬টি প্রসেসর কোরের সবগুলোকে কাজে লাগিয়ে সিস্টেমকে ফাস্ট করে দেয়।

### উত্তম অনুশীলন
রেডিস ক্লাস্টার সেটআপের জটিলতা এড়াতে এবং মাল্টি-কোর হার্ডওয়্যারের সর্বোচ্চ ব্যবহার পেতে ড্রাগনফ্লাইকে ড্রপ-ইন প্রতিস্থাপক হিসেবে ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে ড্রাগনফ্লাইয়ের জন্য আলাদা ড্রাইভ লাইব্রেরি ইনস্টল করতে হবে। এটি রেডিসের সাথে শতভাগ সামঞ্জস্যপূর্ণ, তাই প্রচলিত \`redis\` বা \`ioredis\` প্যাকেজ দিয়েই কানেক্ট করা যায়।

### Code Example
\`\`\`typescript
// apparel connect to standard Redis code
import { createClient } from 'redis';

// ডিফল্ট ৬৩৭৯ পোর্টে রান হওয়া ড্রাগনফ্লাই সার্ভারে কানেক্ট করা হচ্ছে
const client = createClient({
  url: 'redis://localhost:6379'
});

async function run() {
  await client.connect();
  await client.set('dragonfly_key', 'Multi-core high throughput');
  const val = await client.get('dragonfly_key');
  console.log('Value:', val);
}
run();
\`\`\``
  },
  {
    id: 'other-topics-14',
    title: 'What is RxDB, and what makes it suitable for offline-first web applications?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['RxDB', 'NoSQL', 'Offline-First', 'Database', 'Reactive'],
    enAnswer: 'RxDB (Reactive Database) is a client-side NoSQL database for JavaScript applications. It is offline-first because it stores data locally in the browser (IndexedDB) and automatically synchronizes with remote servers when network returns.',
    bnAnswer: 'RxDB (Reactive Database) হলো জাভাস্ক্রিপ্ট অ্যাপ্লিকেশনের জন্য একটি ক্লায়েন্ট-সাইড NoSQL ডাটাবেজ। এটি অফলাইন-ফার্স্ট কারণ এটি ব্রাউজারের লোকাল মেমোরিতে (IndexedDB) ডাটা সেভ রাখে এবং নেটওয়ার্ক সচল হলে সার্ভারের সাথে অটো সিঙ্ক করে।',
    enExplanation: `### Explanation
RxDB is designed to build highly reactive, local-first web and mobile applications:
1. **Local-First Writes**: Reads and writes occur instantly on the local device database (using storage adapters like Dexie, IndexedDB, or SQLite), guaranteeing 0ms latency.
2. **Reactive Queries**: Leverages RxJS Observables. Instead of query-polling, components subscribe to query objects. When database documents change, the UI reactively updates automatically.
3. **Replication Protocol**: Syncs dynamically with backends (CouchDB, custom REST endpoints, or WebSockets) handling conflicts automatically.

### Real-World Example
In a notes app like Notion:
- User edits a note on an airplane without internet.
- RxDB saves the edits instantly to IndexedDB; the UI updates immediately.
- When the plane lands and internet returns, RxDB replication protocol detects connection, pushes local diffs to the PostgreSQL cloud database, resolving conflicts silently.

### Best Practice
Always define strict JSON Schemas for your collections in RxDB to prevent invalid documents from corrupting local storages.

### Common Mistakes
Forgetting that RxDB runs inside the client browser. Do not store massive gigabyte-scale datasets locally, as browser storage limits are strict and can be cleared by the OS when disk space is low.

### Code Example
\`\`\`typescript
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

async function setupLocalDb() {
  // 1. Create reactive local database using Dexie storage engine
  const db = await createRxDatabase({
    name: 'notesdb',
    storage: getRxStorageDexie()
  });

  // 2. Define schema
  await db.addCollections({
    notes: {
      schema: {
        version: 0,
        primaryKey: 'id',
        type: 'object',
        properties: {
          id: { type: 'string', maxLength: 100 },
          content: { type: 'string' }
        },
        required: ['id', 'content']
      }
    }
  });

  return db;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RxDB একটি ক্লায়েন্ট-সাইড নো-এসকিউএল (NoSQL) ডাটাবেজ যা লোকাল-ফার্স্ট আর্কিটেকচার নিয়ে তৈরি:
১. **লোকাল-ফার্স্ট রাইট**: সব ডাটা ডিভাইস মেমরিতে সরাসরি সেভ হয় (IndexedDB/Dexie এর মাধ্যমে), ফলে এপিআই ল্যাটেন্সি ০ মিলি-সেকেন্ড হয়।
২. **রিয়্যাক্টিভ কুয়েরি**: এটি RxJS Observables ব্যবহার করে। ফলে ডাটাবেজে কোনো রো চেঞ্জ হলে কুয়েরি সাবস্ক্রাইব করা কম্পোনেন্ট অটোমেটিক রি-রেন্ডার হয়।
৩. **রেপ্লিকেশন প্রোটোকল**: যখনই নেটওয়ার্ক ফিরে আসে, এটি কাস্টম এপিআই বা ক্লাউড ডাটাবেজের সাথে অফলাইন ডাটা অটো সিঙ্ক করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
নোটস বা টু-ডু অ্যাপে ইন্টারনেট কানেকশন না থাকলেও নোটিফিকেশন ছাড়া ইউজার নোট সেভ করতে পারেন। RxDB ডাটাটি লোকাল IndexedDB-তে স্টোর করে স্ক্রিন আপডেট করে দেয়। বিমান থেকে নেমে নেটওয়ার্ক চালু হওয়া মাত্রই এটি ডাটাবেজে ওল্ড ডাটা মার্জ করে দেয়।

### উত্তম অনুশীলন
লোকাল স্টোরেজ সুস্থ ও সিকিউর রাখতে RxDB কালেকশন ডিফাইন করার সময় সঠিক JSON Schema ব্যবহার করুন।

### সাধারণ ভুলসমূহ
RxDB যেহেতু ব্রাউজার মেমোরিতে চলে, তাই এতে খুব বড় ফাইল (যেমন ভিডিও বা গিগাবাইট ডাটা) সেভ করা। ব্রাউজার মেমোরি লিমিট লিমিটেড হওয়ায় ওএস (OS) যেকোনো সময় এটি ডিলিট করে দিতে পারে।

### Code Example
\`\`\`typescript
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

async function setupLocalDb() {
  // ১. Dexie স্টোরেজ ইঞ্জিন ব্যবহার করে রিয়্যাক্টিভ ডাটাবেজ তৈরি
  const db = await createRxDatabase({
    name: 'notesdb',
    storage: getRxStorageDexie()
  });

  // ২. স্কিমা ডিফাইন করা
  await db.addCollections({
    notes: {
      schema: {
        version: 0,
        primaryKey: 'id',
        type: 'object',
        properties: {
          id: { type: 'string', maxLength: 100 },
          content: { type: 'string' }
        },
        required: ['id', 'content']
      }
    }
  });

  return db;
}
\`\`\``
  },
  {
    id: 'other-topics-15',
    title: 'What is Dexie.js, and how does it simplify IndexedDB interactions?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Dexie.js', 'IndexedDB', 'Client Database', 'SQL-like Queries'],
    enAnswer: 'Dexie.js is a lightweight wrapper for IndexedDB. It simplifies complex IndexedDB database code by offering clean Promise-based APIs, SQL-like query syntaxes, robust index queries, and transaction safety features.',
    bnAnswer: 'Dexie.js হলো IndexedDB-এর একটি লাইটওয়েট র‍্যাপার। এটি প্রমিস-ভিত্তিক চমৎকার এপিআই, এসকিউএল-এর মতো কুয়েরি সিনট্যাক্স, ইনডেক্স সার্চিং ও ট্রানজ্যাকশন সেফটি দিয়ে ব্রাউজার ডাটাবেজ প্রসেস সহজ করে।',
    enExplanation: `### Explanation
IndexedDB is the browser's built-in low-level NoSQL database. However, raw IndexedDB is notoriously complex to write:
- It relies on verbose event listener callbacks (\`onerror\`, \`onsuccess\`, \`onupgradeneeded\`).
- Transactions are tedious to chain.
- Handling database upgrades is error-prone.

**How Dexie.js solves this**:
1. **Promise-based**: Returns standard JS Promises (\`db.friends.add().then()\`), working cleanly with \`async/await\`.
2. **SQL-like queries**: Allows chaining like \`db.friends.where('age').between(20, 25).toArray()\`.
3. **Transaction tracking**: Implements implicit and explicit transaction management.

### Real-World Example
Searching for users between ages 20 and 25 in raw IndexedDB requires 30+ lines of cursor loop setups. With Dexie.js, it is a single-line readable command: \`db.users.where('age').between(20, 25).toArray()\`, saving development time and improving code readability.

### Best Practice
Define schema indexes carefully on property fields you search by (e.g., \`'id, name, age'\`). Dexie uses these indexes to run binary search queries, keeping searches fast even with 50,000+ items stored locally.

### Common Mistakes
Writing database updates without transaction wrappers when performing multiple sequential writes. If one write fails, the database remains in a half-written, corrupted state.

### Code Example
\`\`\`typescript
import Dexie from 'dexie';

// 1. Initialize Dexie Database
class MyDatabase extends Dexie {
  friends!: Dexie.Table<{ id?: number; name: string; age: number }, number>;

  constructor() {
    super('FriendDatabase');
    // Define tables and indexes (first field 'id' is auto-increment primary key)
    this.version(1).stores({
      friends: '++id, name, age'
    });
  }
}

const db = new MyDatabase();

// 2. Insert and Query using async/await
async function runDemo() {
  await db.friends.add({ name: 'Rohit', age: 24 });
  const youngFriends = await db.friends.where('age').below(30).toArray();
  console.log('Friends below 30:', youngFriends);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
IndexedDB হলো ব্রাউজারের ইন-বিল্ট নো-এসকিউএল ডাটাবেজ। কিন্তু র-IndexedDB কোড লেখা অত্যন্ত জটিল:
- এটি ইভেন্ট লিসেনার কলব্যাকের ওপর নির্ভরশীল (\`onerror\`, \`onsuccess\`)।
- কুয়েরি কোড লিখতে প্রচুর বয়লারপ্লেট লিখতে হয়।
- ডাটাবেজ স্কিমা আপডেট ট্র্যাকিং করা কঠিন।

**Dexie.js যেভাবে এটি সমাধান করে**:
১. **প্রমিস-ভিত্তিক**: এটি সরাসরি জাভাস্ক্রিপ্ট প্রমিস রিটার্ন করায় \`async/await\` দিয়ে সহজে কাজ করা যায়।
২. **সহজ কুয়েরি**: \`db.friends.where('age').between(20, 25).toArray()\` এভাবে ফিল্টারিং করা যায়।
৩. **ট্রানজ্যাকশন সেফটি**: ডাটা রিড/রাইট সুরক্ষিত করতে কাস্টম ট্রানজ্যাকশন সুবিধা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
IndexedDB-তে ২০ থেকে ২৫ বছর বয়সী বন্ধুদের খুঁজতে গেলে র-কোডে ৩০+ লাইনের কার্সার সেটআপ করতে হবে। Dexie ব্যবহার করলে মাত্র ১ লাইনের সহজ কোড লিখলেই তা ব্যাকগ্রাউন্ডে ইনডেক্স সার্চ করে রেজাল্ট নিয়ে আসে।

### উত্তম অনুশীলন
সার্চিং ফাস্ট করতে প্রোপার্টির ওপরে ইনডেক্স সেট করুন (যেমন: \`friends: '++id, name, age'\`)। এটি ডাটাবেজ সার্চ অপ্টিমাইজড রাখবে।

### সাধারণ ভুলসমূহ
একাধিক ধারাবাহিক রাইট অপারেশন চালানোর সময় ট্রানজ্যাকশন ব্যবহার না করা। এর ফলে মাঝে কোনো এরর হলে ডাটাবেজ অর্ধেক রাইট হওয়া অবস্থায় আটকে ডাটা নষ্ট হতে পারে।

### Code Example
\`\`\`typescript
import Dexie from 'dexie';

// ১. ডেপসি ডাটাবেজ ইনিশিয়লাইজ করা
class MyDatabase extends Dexie {
  friends!: Dexie.Table<{ id?: number; name: string; age: number }, number>;

  constructor() {
    super('FriendDatabase');
    // টেবিল ও ইনডেক্স ফিল্ড ডিক্লেয়ার করা হলো
    this.version(1).stores({
      friends: '++id, name, age'
    });
  }
}

const db = new MyDatabase();

// ২. async/await ব্যবহার করে ডাটা সেভ ও সার্চ
async function runDemo() {
  await db.friends.add({ name: 'Rohit', age: 24 });
  const youngFriends = await db.friends.where('age').below(30).toArray();
  console.log('Friends below 30:', youngFriends);
}
\`\`\``
  },
  {
    id: 'other-topics-16',
    title: 'What is the difference between a Docker Image and a Docker Container?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Docker', 'Containers', 'DevOps', 'Infrastructure'],
    enAnswer: 'A Docker Image is a read-only template containing the application code, libraries, and dependencies. A Docker Container is a running instance of an image, containing a writeable layer to execute application commands.',
    bnAnswer: 'Docker Image হলো একটি রিড-অনলি টেমপ্লেট যাতে অ্যাপ কোড, লাইব্রেরি ও ডিপেন্ডেন্সি থাকে। আর Docker Container হলো ওই ইমেজের একটি লাইভ বা রানিং ইনস্ট্যান্স, যার ওপর রাইট করার লেয়ার থাকে।',
    enExplanation: `### Explanation
Understanding Docker requires separating the build template from the active running environment:
1. **Docker Image**:
   - Acts as a blueprint or class definition in OOP.
   - It is static, immutable, and read-only.
   - Created using a \`Dockerfile\` via the \`docker build\` command.
2. **Docker Container**:
   - Acts as an instantiated object of the class.
   - It is an isolated, secure, and executable environment running on the host OS kernel.
   - Created using the \`docker run\` command. You can run multiple containers from a single image.

### Real-World Example
An image is like a recipe for a cake (detailing ingredients, temperature, steps). It is static. A container is the actual cake baked using that recipe. You can bake 10 identical cakes (containers) from a single recipe book (image).

### Best Practice
Keep your Docker images as small as possible by using alpine base images (e.g., \`node:20-alpine\`) to speed up deployment uploads and reduce server storage costs.

### Common Mistakes
Storing dynamic state or files (like uploaded user avatars) inside the container's writable layer. Containers are ephemeral; when a container restarts or is updated, all local write-layer files are deleted. Always use Docker volumes or external cloud storage for persistent files.

### Code Example
\`\`\`dockerfile
# 1. This file defines the Docker Image structure (Dockerfile)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Commands to run in terminal:
# Build the Image:
# docker build -t my-express-app .
#
# Spin up the Container from the Image:
# docker run -d -p 3000:3000 --name active-app my-express-app
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডকার ব্যবহারের সময় ডকার ইমেজ ও ডকার কন্টেইনারের মধ্যে পার্থক্য বোঝা আবশ্যক:
১. **Docker Image**:
   - এটি অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের ক্লাসের মতো কাজ করে।
   - এটি একটি স্ট্যাটিক ও রিড-অনলি ফাইল যা পরিবর্তন করা যায় না।
   - \`Dockerfile\` থেকে \`docker build\` কম্যান্ড দিয়ে ইমেজ তৈরি করা হয়।
২. **Docker Container**:
   - এটি ওই ক্লাসের ইনস্ট্যানশিয়েট হওয়া অবজেক্টের মতো কাজ করে।
   - এটি আইসোলেটেড ও রান করা লাইভ প্রসেস যা হোস্ট কম্পিউটারের কার্নেল ব্যবহার করে চলে।
   - \`docker run\` কম্যান্ড দিয়ে একটি ইমেজ থেকে একাধিক কন্টেইনার তৈরি করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ডকার ইমেজ হলো একটি কেক বানানোর রেসিপি বা নির্দেশিকা যা অপরিবর্তনশীল। আর ডকার কন্টেইনার হলো ওই রেসিপি অনুসরণ করে তৈরি করা আসল কেক। একটি রেসিপি বুক (ইমেজ) ব্যবহার করে আপনি ১০টি আলাদা আলাদা কেক (কন্টেইনার) বানাতে পারেন।

### উত্তম অনুশীলন
ডকার ইমেজের সাইজ ছোট রাখতে লাইটওয়েট বেস ইমেজ ব্যবহার করুন (যেমন: \`node:20-alpine\`)। এটি সার্ভারে আপলোড স্পিড বৃদ্ধি করে ও ব্যান্ডউইথ বাঁচায়।

### সাধারণ ভুলসমূহ
কন্টেইনারের রাইটেবল লেয়ারে ফাইল আপলোডের মতো ডায়নামিক ডাটা স্টোর করা। কন্টেইনার সাময়িক বা ক্ষণস্থায়ী (ephemeral); কন্টেইনার রিস্টার্ট বা ডিলিট হলে ওর ভেতর সেভ হওয়া সব ডাটা হাওয়া হয়ে যাবে। সবসময় পারসিস্টেন্ট ডাটা রাখতে ডকার ভলিউম বা ক্লাউড স্টোরেজ ব্যবহার করুন।

### Code Example
\`\`\`dockerfile
# ১. এটি ডকার ইমেজের আর্কিটেকচার ডিফাইন করে (Dockerfile)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# টার্মিনালে রান করার কম্যান্ডসমূহ:
# ইমেজ তৈরি করতে:
# docker build -t my-express-app .
#
# ইমেজ থেকে লাইভ কন্টেইনার রান করাতে:
# docker run -d -p 3000:3000 --name active-app my-express-app
\`\`\``
  },
  {
    id: 'other-topics-17',
    title: 'How does Docker build caching work, and how do you optimize instruction order in a Dockerfile?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Docker', 'Build Cache', 'Dockerfile', 'Optimization', 'DevOps'],
    enAnswer: 'Docker builds images layer-by-layer, caching each instruction. If a layer changes, all subsequent layer caches are invalidated. Optimize builds by placing static tasks (like npm install) before dynamic tasks (like copying source code).',
    bnAnswer: 'ডকার লেয়ার ধরে ধরে ইমেজ বিল্ড করে এবং প্রতি লেয়ার ক্যাশ করে রাখে। কোনো লেয়ারে ফাইল পরিবর্তন হলে তার পরের সব লেয়ারের ক্যাশ বাতিল হয়। তাই সোর্স কোড কপির পূর্বে প্যাকেজ ইনস্টলেশনের মতো স্ট্যাটিক কাজ রাখলে বিল্ড স্পিড বৃদ্ধি পায়।',
    enExplanation: `### Explanation
Docker executes instructions in a \`Dockerfile\` sequentially. Each instruction creates a new read-only image layer:
1. **Caching Rule**: When building, Docker checks if it can reuse previously built layers. If the files referenced in an instruction (e.g. \`COPY\`) are identical to the previous build, Docker uses the cached layer.
2. **Invalidation**: If a layer changes, the cache for *that layer* and *all steps after it* is broken.
3. **Optimization Strategy**:
   - Place tasks that rarely change (installing dependencies) at the top.
   - Place tasks that change on every edit (source code files) at the bottom.

### Real-World Example
If your \`Dockerfile\` copies all source files first and then runs \`npm install\`, editing a single character in a UI component breaks the cache on the \`COPY\` step. Docker is forced to download and reinstall all \`node_modules\` again, taking 3 minutes. Splitting it so \`package.json\` is copied and installed *before* copying the rest of the source code reduces rebuild times to 2 seconds.

### Best Practice
Always copy only \`package.json\` and \`package-lock.json\` first, run dependency installs, and copy the rest of the source code later.

### Common Mistakes
Not using a \`.dockerignore\` file. This causes Docker to copy heavy local logs or \`node_modules\` folders, bloating the build layer and rendering the build cache useless.

### Code Example
\`\`\`dockerfile
# OPTIMIZED DOCKERFILE STRUCTURE

FROM node:20-alpine
WORKDIR /usr/src/app

# 1. Copy package files first (changes rarely)
COPY package*.json ./

# 2. Install dependencies (layer cached unless packages change)
RUN npm ci --only=production

# 3. Copy source files (changes on every code edit)
COPY . .

CMD ["node", "src/index.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডকার ফাইলে থাকা কম্যান্ডগুলো সিকোয়েন্স অনুসারে একটার পর একটা লেয়ার আকারে রান হয়:
১. **ক্যাশিং নিয়ম**: ইমেজ তৈরি করার সময় ডকার পূর্ববর্তী বিল্ডের ক্যাশ করা লেয়ারগুলো রিইউজ করার চেষ্টা করে। কম্যান্ডে ব্যবহৃত ফাইল অপরিবর্তিত থাকলে ডকার বিল্ড স্কিপ করে ক্যাশ ব্যবহার করে।
২. **ক্যাশ বাতিল হওয়া**: কোনো নির্দিষ্ট লাইনে ফাইল চেঞ্জ হলে ওই লাইন থেকে শুরু করে ডকার ফাইলের পরবর্তী সমস্ত লাইনের ক্যাশ মেমোরি বাতিল হয়ে যায় এবং ডকার নতুন করে এক্সিকিউট করে।
৩. **অপ্টিমাইজেশন পদ্ধতি**:
   - যে কোড বা ফাইলগুলো খুব কম বদলায় (যেমন ডিপেন্ডেন্সি প্যাকেজ) সেগুলো উপরে রাখুন।
   - প্রতিনিয়ত পরিবর্তন হওয়া সোর্স কোডগুলো একদম শেষের দিকে রাখুন।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি যদি ডকার ফাইলে আগে সব কোড কপি করেন এবং পরে \`npm install\` রান করেন, তবে কোডের একটি লাইন এডিট করলেই ডকার মনে করবে ফাইল বদলে গেছে। এর ফলে সে ক্যাশ বাদ দিয়ে আবার নতুন করে ৫ মিনিট ধরে সব প্যাকেজ ডাউনলোড করবে। প্যাকেজ কপি ও কোড কপি আলাদা করলে রি-বিল্ড টাইম ৫ মিনিট থেকে ২ সেকেন্ডে নেমে আসে।

### উত্তম অনুশীলন
সবসময় আগে \`package.json\` ও \`package-lock.json\` কপি করে লাইব্রেরি ইনস্টল করুন, আর মেইন সোর্স ফাইল একদম শেষে কপি করুন।

### সাধারণ ভুলসমূহ
প্রজেক্টে \`.dockerignore\` ফাইল ব্যবহার না করা। এর ফলে লোকাল কম্পিউটারের ভারী \`node_modules\` বা লগ ফাইল ডকার কন্টেইনারে ডিরেক্ট কপি হয়ে যায় যা ডকার বিল্ড ক্যাশ নষ্ট করে।

### Code Example
\`\`\`dockerfile
# অপ্টিমাইজড ডকারফাইল আর্কিটেকচার

FROM node:20-alpine
WORKDIR /usr/src/app

# ১. আগে শুধু প্যাকেজ ফাইল কপি করা হলো (খুব কম চেঞ্জ হয়)
COPY package*.json ./

# ২. ডিপেন্ডেন্সি ইনস্টল (প্যাকেজ ফাইল চেঞ্জ না হলে এটি ক্যাশ থেকে রিইউজ হবে)
RUN npm ci --only=production

# ৩. সোর্স কোড কপি (যা প্রতি এডিটে চেঞ্জ হতে পারে)
COPY . .

CMD ["node", "src/index.js"]
\`\`\``
  },
  {
    id: 'other-topics-18',
    title: 'What is Docker Compose, and how does it simplify managing multi-container applications?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Docker Compose', 'Containers', 'Orchestration', 'DevOps'],
    enAnswer: 'Docker Compose is a tool for defining and running multi-container Docker applications. Using a YAML file, it configures all app services, networks, and volumes, allowing you to spin up the entire stack with a single command.',
    bnAnswer: 'Docker Compose হলো মাল্টি-কন্টেইনার ডকার অ্যাপ্লিকেশন রান করার একটি ইউটিলিটি টুল। একটি YAML ফাইলের সাহায্যে এটি অ্যাপের সমস্ত সার্ভিস, নেটওয়ার্ক ও ভলিউম কনফিগার করে এবং একটি মাত্র কমান্ডে পুরো প্রজেক্ট চালু করতে সাহায্য করে।',
    enExplanation: `### Explanation
For applications requiring multiple interconnected services (e.g., an Express API, a React frontend, a MongoDB database, and a Redis cache):
1. **Without Compose**: You must build and run each container manually using long commands in multiple terminals, specifying ports, environment variables, and network links.
2. **With Compose**:
   - You define all configurations in a single \`docker-compose.yml\` file.
   - Run \`docker-compose up\` to start all containers. They automatically join a shared network, allowing them to communicate using container names as hostnames (e.g., connecting to \`mongodb://database-service:27017\`).

### Real-World Example
In a development setup, starting your full-stack app requires launching PostgreSQL, Redis, and your API server. Instructing junior developers to install and run database engines locally leads to environment errors. Docker Compose packages these requirements into a YAML script. Any developer can boot the full stack by typing \`docker compose up\`.

### Best Practice
Use environment variables in your Compose files using a \`.env\` file to separate database credentials and sensitive configurations from the public repository code.

### Common Mistakes
Hardcoding absolute IP addresses for cross-container communication. Docker Compose establishes a virtual network; containers should refer to each other using their service names defined in the YAML file.

### Code Example
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  # API Service
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - redis # Start redis container first

  # Caching Service
  redis:
    image: "redis:alpine"
    ports:
      - "6379:6379"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি অ্যাপের প্রোপার রানিং এনভায়রনমেন্টে যখন একাধিক ইন্টারকানেক্টেড সার্ভিস থাকে (যেমন: এক্সপ্রেস এপিআই, রিয়্যাক্ট ফ্রন্টএন্ড, মঙ্গোডিবি ও রেডিস ক্যাশ):
১. **কম্পোজ ছাড়া**: আপনাকে আলাদা আলাদা টার্মিনালে অনেক বড় বড় কমান্ড লিখে ম্যানুয়ালি প্রতিটা কন্টেইনার রান করতে হবে, যা অত্যন্ত ঝামেলার।
২. **কম্পোজ সহ**:
   - আপনি সব কনফিগারেশন একটি মাত্র \`docker-compose.yml\` ফাইলে লিখে রাখতে পারেন।
   - টার্মিনালে \`docker compose up\` লিখলেই সব সার্ভিস একবারে স্টার্ট হয়ে যাবে এবং তারা ইন্টারনাল ভার্চুয়াল নেটওয়ার্কে একে অপরের সাথে সার্ভিস নেম ব্যবহার করে কথা বলতে পারবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফুল-স্ট্যাক প্রোজেক্ট রান করতে ডাটাবেজ, ক্যাশ ও এপিআই সার্ভার একযোগে রানিং থাকা প্রয়োজন। নতুন কোনো ডেভেলপার টিমে যোগ দিলে তাকে ম্যানুয়ালি ডাটাবেজ ইনস্টল করতে বললে ওএস কনফ্লিক্ট হতে পারে। ডকার কম্পোজ ফাইল থাকলে সে জাস্ট ১ লাইনের কমান্ড লিখে পুরো সিস্টেম তার লোকাল পিসিতে রেডি করে নিতে পারবে।

### উত্তম অনুশীলন
ডাটাবেজ পাসওয়ার্ড বা সিক্রেট ফাইল সরাসরি কম্পোজ ফাইলে না লিখে \`.env\` ফাইল ব্যবহার করুন এবং ডকার কম্পোজ ফাইলে ভেরিয়েবলগুলোকে পয়েন্ট করুন।

### সাধারণ ভুলসমূহ
কন্টেইনারগুলোর পারস্পরিক যোগাযোগের জন্য লোকালহোস্ট \`localhost\` বা আইপি অ্যাড্রেস হার্ডকোড করা। ডকার কম্পোজের নেটওয়ার্কে কন্টেইনারগুলো একে অপরের সার্ভিস নেম (যেমন: \`redis\`, \`db\`) দিয়ে কানেক্ট হয়।

### Code Example
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  # এপিআই সার্ভিস
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - redis # আগে রেডিস কন্টেইনার স্টার্ট হবে

  # ক্যাশ সার্ভিস
  redis:
    image: "redis:alpine"
    ports:
      - "6379:6379"
\`\`\``
  },
  {
    id: 'other-topics-19',
    title: 'What is Nginx, and what is its role as a reverse proxy in web hosting architectures?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Nginx', 'Reverse Proxy', 'Web Server', 'Hosting', 'Infrastructure'],
    enAnswer: 'Nginx is a high-performance web server and reverse proxy. As a reverse proxy, it sits in front of backend servers, intercepting client requests and routing them to the appropriate application servers to improve security and performance.',
    bnAnswer: 'Nginx হলো একটি উচ্চ-ক্ষমতাসম্পন্ন ওয়েব সার্ভার ও রিভার্স প্রক্সি। রিভার্স প্রক্সি হিসেবে এটি ব্যাকএন্ড সার্ভারগুলোর সামনে অবস্থান করে ক্লায়েন্টদের থেকে আসা রিকোয়েস্ট গ্রহণ করে নির্দিষ্ট অ্যাপ্লিকেশন সার্ভারে পাঠিয়ে দেয়।',
    enExplanation: `### Explanation
Nginx is widely used in modern cloud hosting architectures to orchestrate request routing:
1. **Reverse Proxy definition**: A forward proxy helps clients access the internet (hiding client info). A reverse proxy helps servers handle requests from the internet (hiding backend server info).
2. **Key Roles**:
   - **Security**: Hides backend IP addresses and ports, protecting them from direct attacks.
   - **SSL Termination**: Handles decryption/encryption of HTTPS requests, freeing backend node servers from CPU-heavy SSL operations.
   - **Static Asset Serving**: Serves HTML, CSS, and images directly, bypassing Node.js runtimes.

### Real-World Example
In a production web hosting setup, you run an Express app on port \`5000\`. Exposing port \`5000\` directly to the public web is insecure. Instead, you put Nginx on port \`80\` (HTTP) and \`443\` (HTTPS). When a user visits \`https://mywebsite.com\`, Nginx intercepts the call, manages SSL certificates, and forwards the raw request internally to Express on port \`5000\`.

### Best Practice
Configure Nginx to serve static files (like frontend production build folders) directly using \`try_files\` and proxy only API requests (e.g. \`/api/\`) to your Node/Express processes.

### Common Mistakes
Exposing Node.js server ports directly to public firewall boundaries instead of routing all HTTP traffic through Nginx wrappers.

### Code Example
\`\`\`nginx
# Typical Nginx Server Block Configuration (nginx.conf)
server {
    listen 80;
    server_name mywebsite.com;

    # 1. Route static client files directly
    location / {
        root /var/www/my-app/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # 2. Forward API requests to Node backend running on port 5000
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Nginx ক্লাউড হোস্টিং এবং সার্ভার আর্কিটেকচারে রিকোয়েস্ট ম্যানেজ করতে ব্যাপকভাবে ব্যবহৃত হয়:
১. **রিভার্স প্রক্সি**: এটি ক্লায়েন্টের কাছ থেকে রিকোয়েস্ট নিয়ে ব্যাকএন্ড নোড অ্যাপ্লিকেশনে পাস করে। এটি ব্যাকএন্ড সার্ভারের আসল আইপি ও পোর্ট বাইরের দুনিয়া থেকে লুকিয়ে রাখে।
২. **মূল দায়িত্বসমূহ**:
   - **নিরাপত্তা**: এপিআই পোর্ট সরাসরি এক্সপোজ না করে প্রক্সির আড়ালে রাখা।
   - **SSL টার্মিনেশন**: এইচটিটিপিএস (HTTPS) এনক্রিপশন ডিক্রিপশনের সব কাজ নিজে করা যাতে নোড সার্ভারের সিপিইউ লোড কমে।
   - **স্ট্যাটিক ফাইল রেন্ডার**: এইচটিএমএল, সিএসএস ডিরেক্ট ক্যাশ থেকে রিড করা।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাকশনে আপনার এক্সপ্রেস অ্যাপটি পোর্ট \`5000\`-এ চলছে। পোর্টটি ওপেন রাখা ঝুঁকিপূর্ণ। তাই সার্ভার পোর্টে Nginx বসানো হলো \`80\` (HTTP) এবং \`443\` (HTTPS) পোর্টে। ইউজার যখন সাইটে ভিজিট করেন, Nginx কানেকশন রিসিভ করে সিকিউরিটি চেক করে রিকোয়েস্টটি ইন্টারনাল আইপি দিয়ে পোর্ট \`5000\`-এ ফরোয়ার্ড করে দেয়।

### উত্তম অনুশীলন
সিঙ্গেল পেজ অ্যাপ্লিকেশনের (SPA) ক্ষেত্রে ফ্রন্টএন্ড বিল্ড ফোল্ডার সরাসরি Nginx দিয়ে রেন্ডার করান এবং শুধুমাত্র ব্যাকএন্ড কুয়েরিগুলোকে (\`/api/\`) নোড এপিআই প্রক্সি পাস করুন।

### সাধারণ ভুলসমূহ
ফায়ারওয়ালে প্রক্সি গার্ড না রেখে নোড বা এক্সপ্রেস পোর্ট সরাসরি ইন্টারনেটের জন্য ওপেন করে দেওয়া।

### Code Example
\`\`\`nginx
# টিপিক্যাল Nginx সার্ভার ব্লক কনফিগারেশন (nginx.conf)
server {
    listen 80;
    server_name mywebsite.com;

    # ১. ফ্রন্টএন্ড স্ট্যাটিক ফাইল সরাসরি রেন্ডার করা হচ্ছে
    location / {
        root /var/www/my-app/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # ২. এক্সপ্রেস ব্যাকএন্ডে এপিআই রিকোয়েস্ট পাঠানো হচ্ছে (Port 5000)
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-20',
    title: 'Explain the difference between Nginx server block directive patterns (server_name, location).',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Nginx', 'Configuration', 'Server Block', 'Routing'],
    enAnswer: 'The server_name directive specifies which domain name Nginx should match to handle a request. The location directive defines rules on how to process specific request URIs inside that matched server block.',
    bnAnswer: 'server_name ডিরেক্টিভ নির্দিষ্ট করে কোন ডোমেন নামের রিকোয়েস্ট Nginx হ্যান্ডেল করবে। আর location ডিরেক্টিভ নির্দিষ্ট করে ওই সার্ভার ব্লকের ভেতর আসা নির্দিষ্ট ইউআরআই (URI) কীভাবে প্রসেস হবে।',
    enExplanation: `### Explanation
Nginx configuration files are hierarchical, using context blocks to match routing configurations:
1. **\`server\` block**: Defines a virtual server. You can run multiple sites on a single Nginx instance.
2. **\`server_name\`**: Match criteria based on the HTTP Request \`Host\` header.
   - Example: \`server_name admin.site.com;\` matches calls to that subdomain.
3. **\`location\`**: Matches request URI paths.
   - Example: \`location /images/\` tells Nginx how to find file paths for graphic requests.
   - Supports prefix matching, exact matches (\`=\`), and regular expressions (\`~\`).

### Real-World Example
On a server hosting both a shop and a blog:
- Nginx matches \`shop.com\` (using \`server_name shop.com\`) and routes it to container A.
- Nginx matches \`blog.com\` (using \`server_name blog.com\`) and routes it to container B.
- Inside \`blog.com\`, if a user calls \`/blog.com/images/logo.png\`, the \`location /images/\` block matches and serves it directly from the local disk partition instead of querying Node.js.

### Best Practice
Always write explicit location matches to prevent routing static assets to Node.js backend proxies. Keep your fallback \`location /\` configured to return \`index.html\` for single-page applications.

### Common Mistakes
Writing conflicting location blocks (e.g. nested locations with syntax errors) which prevents Nginx service from reloading or starting.

### Code Example
\`\`\`nginx
# Routing two subdomains using server_name and location rules
server {
    listen 80;
    server_name api.mycompany.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}

server {
    listen 80;
    server_name static.mycompany.com;

    location /uploads/ {
        alias /var/www/uploads/;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Nginx কনফিগারেশন ফাইলগুলো হায়ারার্কিকাল বা স্তরভিত্তিক হয়ে থাকে:
১. **\`server\` block**: একটি ভার্চুয়াল সার্ভার তৈরি করে। একটি Nginx ইনস্ট্যান্সে একাধিক সাইট হোস্ট করা যায়।
২. **\`server_name\`**: এইচটিটিপি রিকোয়েস্টের \`Host\` হেডার দেখে ম্যাচিং নির্ধারণ করে (যেমন: \`server_name api.site.com;\`)।
৩. **\`location\`**: নির্দিষ্ট ইউআরআই (URI) পাথের প্যাটার্ন ম্যাচ করায় (যেমন: \`location /api/\`)। এটি প্রেফিক্স ম্যাচ, ইকুয়াল ম্যাচ (\`=\`) ও রেগুলার এক্সপ্রেশন সাপোর্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
একই সার্ভারে একটি ব্লগ ও একটি শপ হোস্ট করা হলো:
- ডোমেন \`shop.com\` হিট করলে \`server_name shop.com\` ম্যাচ করে শপ কন্টেইনারে চলে যাবে।
- ডোমেন \`blog.com\` হিট করলে \`server_name blog.com\` ম্যাচ করে ব্লগ কন্টেইনারে চলে যাবে।
- ব্লগের ভেতর কেউ ইমেজ চাইলে \`location /images/\` блокটি ফাইলটি সরাসরি ডিস্ক থেকে রিটার্ন করে দিবে।

### উত্তম অনুশীলন
স্ট্যাটিক ফাইলগুলোকে এক্সপ্রেস এপিআই প্রক্সিতে পাঠানোর পরিবর্তে সরাসরি Nginx-এর সঠিক \`location\` দিয়ে রেন্ডার করান।

### সাধারণ ভুলসমূহ
ভুল লোকেশন সিনট্যাক্স দিয়ে ফাইল রিলোড করার চেষ্টা করা, যার ফলে Nginx কনফিগ এরর দিয়ে ক্র্যাশ করতে পারে।

### Code Example
\`\`\`nginx
# server_name এবং location ব্যবহার করে ২টা সাবডোমেন রাউটিং
server {
    listen 80;
    server_name api.mycompany.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}

server {
    listen 80;
    server_name static.mycompany.com;

    location /uploads/ {
        alias /var/www/uploads/;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-21',
    title: 'Explain the essential Linux file commands (ls, cd, pwd, mkdir, rm, mv, cp) and their options.',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Linux', 'CLI', 'Terminal', 'DevOps', 'Operations'],
    enAnswer: 'These are the core file system navigation commands: ls (list files), cd (change directory), pwd (print working directory), mkdir (make directory), rm (remove), mv (move/rename), and cp (copy).',
    bnAnswer: 'এগুলো হলো লিনাক্স ফাইল সিস্টেমের মূল কমান্ড: ls (ফাইল লিস্ট দেখা), cd (ডিরেক্টরি পরিবর্তন), pwd (কারেন্ট পাথের নাম), mkdir (নতুন ফোল্ডার তৈরি), rm (মুছে ফেলা), mv (স্থানান্তর/নাম পরিবর্তন), এবং cp (কপি)।',
    enExplanation: `### Explanation
Most production servers run on Linux. Knowing these commands is essential for server navigation:
- **\`pwd\`**: Displays the absolute path of the current directory.
- **\`cd\`**: Changes the current workspace directory.
- **\`ls\`**: Lists directory contents. Commonly used with \`-la\` to show hidden files and permissions.
- **\`mkdir\`**: Creates a new folder. Use \`-p\` to create nested folders (e.g., \`mkdir -p parent/child\`).
- **\`rm\`**: Deletes files. Use \`-rf\` for recursive directory deletions (handle with caution!).
- **\`cp\`**: Copies files. Use \`-r\` to copy directories recursively.
- **\`mv\`**: Moves or renames files/directories.

### Real-World Example
When SSH-ing into a server to view app logs:
- Run \`pwd\` to check where you are.
- Run \`cd /var/log/nginx\` to navigate to Nginx log folder.
- Run \`ls -la\` to see all log files and verification dates.

### Best Practice
Avoid running \`rm -rf\` with wildcards (\`rm -rf *\`) or absolute root paths while logged in as root. A minor typo can delete the entire server file system.

### Common Mistakes
Assuming \`rm\` throws a recycle-bin confirmation. Deletions in Linux terminals are immediate, absolute, and irreversible.

### Code Example
\`\`\`bash
# Terminal operations log
$ pwd
/home/ubuntu

# Create nested directories
$ mkdir -p my-app/src

# Copy config file to destination
$ cp config.env my-app/src/config.env

# List files with detailed permissions
$ ls -la my-app/src
total 8
drwxr-xr-x 2 ubuntu ubuntu 4096 Jun 19 22:00 .
-rw-r--r-- 1 ubuntu ubuntu  120 Jun 19 22:00 config.env
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অধিকাংশ প্রোডাকশন সার্ভার লিনাক্সে রান হয়। তাই টার্মিনাল নেভিগেশনের জন্য এই কমান্ডগুলো জানা আবশ্যক:
- **\`pwd\`**: আপনি বর্তমানে কোন ফোল্ডার পাথে আছেন তার সম্পূর্ণ নাম দেখায়।
- **\`cd\`**: ডিরেক্টরি চেঞ্জ করে অন্য ফোল্ডারে প্রবেশ করায়।
- **\`ls\`**: ফোল্ডারের ভেতরের ফাইলের তালিকা দেখায়। হিডেন ফাইল ও পারমিশন দেখতে \`ls -la\` ব্যবহৃত হয়।
- **\`mkdir\`**: নতুন ফোল্ডার তৈরি করে। নেস্টেড ফোল্ডার একবারে তৈরি করতে \`mkdir -p parent/child\` ব্যবহার করা হয়।
- **\`rm\`**: ফাইল মুছে ফেলে। পুরো ডিরেক্টরি মুছতে \`rm -rf\` ব্যবহৃত হয়।
- **\`cp\`**: ফাইল কপি করে। ফোল্ডার কপিতে \`cp -r\` ব্যবহৃত হয়।
- **\`mv\`**: ফাইল রিনেম বা স্থান পরিবর্তন করায়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারে লগইন করে কোনো অ্যাপের লগ চেক করার সময়:
- \`pwd\` লিখে আগে কারেন্ট পাথ চেক করবেন।
- \`cd /var/log/nginx\` দিয়ে প্রক্সি সার্ভারের লগ ফোল্ডারে যাবেন।
- \`ls -la\` দিয়ে লগ ফাইলগুলোর আপডেট তালিকা দেখবেন।

### উত্তম অনুশীলন
রুট ইউজার হিসেবে লগইন থাকা অবস্থায় ভুলবশতও ওয়াইল্ডকার্ড সহ \`rm -rf *\` কমান্ড রান করবেন না। ছোট একটি টাইপিং ভুলের কারণে পুরো অপারেটিং সিস্টেমের ডাটা সেকেন্ডে ডিলিট হয়ে যেতে পারে।

### সাধারণ ভুলসমূহ
মনে করা যে উইন্ডোজের মতো ফাইল ডিলিট করলে তা রিসাইকেল বিন বা ট্র্যাশে জমা থাকবে। লিনাক্স টার্মিনালে ডিলিট করা ফাইল রিকভার করা অসম্ভব।

### Code Example
\`\`\`bash
# টার্মিনাল অপারেশন উদাহরণ
$ pwd
/home/ubuntu

# নেস্টেড ফোল্ডার একবারে তৈরি
$ mkdir -p my-app/src

# কনফিগ ফাইল কপি করা
$ cp config.env my-app/src/config.env

# ফাইল তালিকা ও পারমিশন দেখা
$ ls -la my-app/src
total 8
drwxr-xr-x 2 ubuntu ubuntu 4096 Jun 19 22:00 .
-rw-r--r-- 1 ubuntu ubuntu  120 Jun 19 22:00 config.env
\`\`\``
  },
  {
    id: 'other-topics-22',
    title: 'How do Linux file permissions work, and what do chmod and chown do?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Linux', 'File Permissions', 'chmod', 'chown', 'Security'],
    enAnswer: 'Linux assigns permissions to User, Group, and Others for Read, Write, and Execute. chmod changes these read/write/execute permissions, while chown changes the owner or group of a file.',
    bnAnswer: 'লিনাক্সে ফাইল পারমিশন ৩টি ভাগে (User, Group, Others) and ৩টি মোডে (Read, Write, Execute) বিভক্ত। chmod ফাইলের রিড/রাইট/এগজিকিউট পারমিশন এবং chown ফাইলের মালিকানা পরিবর্তন করে।',
    enExplanation: `### Explanation
Every file in Linux has metadata mapping permissions:
1. **Permission Classes**:
   - **User (u)**: The owner of the file.
   - **Group (g)**: Users in the assigned group.
   - **Others (o)**: Everyone else.
2. **Permission Types**:
   - **Read (r / 4)**: View file content.
   - **Write (w / 2)**: Modify file content.
   - **Execute (x / 1)**: Run the file as a script/program.
3. **Commands**:
   - **\`chmod 755 file.sh\`**: Sets permissions (7 = rwx for User, 5 = rx for Group, 5 = rx for Others).
   - **\`chown ubuntu:ubuntu file.txt\`**: Sets the owner user to \`ubuntu\` and owner group to \`ubuntu\`.

### Real-World Example
You deploy a Node.js shell runner script \`deploy.sh\` on your server. When you try to run \`./deploy.sh\`, you get a \`Permission Denied\` error. This is because raw text files do not have execute rights. Running \`chmod +x deploy.sh\` adds the execute bit, allowing you to run it.

### Best Practice
Follow the Principle of Least Privilege. Never set permissions to \`777\` (rwx for everyone) on database files or configuration files, as this allows unauthorized local users to modify or delete them.

### Common Mistakes
Using \`sudo chmod -R 777 /var/www\` to fix permission errors, which exposes all application secrets and source files to anyone on the machine.

### Code Example
\`\`\`bash
# View permissions of a file (output: -rw-r--r--)
$ ls -l script.sh

# Change owner to root user
$ sudo chown root:root script.sh

# Make script executable for user and group
$ chmod 750 script.sh
# Now permissions are: -rwxr-x--- (User has rwx, Group has rx, Others have nothing)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিনাক্সে প্রতিটি ফাইলের পারমিশন ট্র্যাকিং মেকানিজম রয়েছে:
১. **ইউজার ক্লাস**:
   - **User (u)**: যে ফাইলের মালিক।
   - **Group (g)**: নির্দিষ্ট গ্রুপের ইউজাররা।
   - **Others (o)**: বাকি সবাই।
২. **পারমিশন মোড**:
   - **Read (r / 4)**: ফাইল রিড করা।
   - **Write (w / 2)**: ফাইল এডিট বা মুছে ফেলা।
   - **Execute (x / 1)**: ফাইলটি প্রোগ্রাম বা স্ক্রিপ্ট হিসেবে রান করানো।
৩. **কমান্ডসমূহ**:
   - **\`chmod\`**: ফাইল পারমিশন পরিবর্তন করা। যেমন: \`chmod 755 script.sh\` (৭ = মালিকের rwx, ৫ = গ্রুপের rx, ৫ = অন্যদের rx)।
   - **\`chown\`**: ফাইলের মালিকানা ইউজার বা গ্রুপ পরিবর্তন করা।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারে একটি ডেপ্লয় স্ক্রিপ্ট \`deploy.sh\` তৈরি করে টার্মিনালে \`./deploy.sh\` লিখলে \`Permission Denied\` এরর পেতে পারেন। কারণ তৈরি করার পর ফাইলে রান করার পারমিশন থাকে না। \`chmod +x deploy.sh\` কম্যান্ড দিলে ফাইলটিতে এগজিকিউশন রাইট যুক্ত হয়ে যাবে।

### উত্তম অনুশীলন
সর্বনিম্ন অধিকারের নীতি (Principle of Least Privilege) মেনে চলুন। কোনো ডাটাবেজ ফাইল বা কনফিগ ফাইলের পারমিশন কখনো \`777\` (সবার জন্য রীড, রাইট, এগজিকিউট) করবেন না, যা প্রজেক্ট সিকিউরিটি নষ্ট করে।

### সাধারণ ভুলসমূহ
পারমিশন এরর ঠিক করার জন্য শর্টকাট হিসেবে \`chmod -R 777\` রান করা। এর ফলে সার্ভারের সিকিউরিটি চেইন পুরোপুরি ভেঙে পড়তে পারে।

### Code Example
\`\`\`bash
# ফাইলের পারমিশন দেখা (আউটপুট: -rw-r--r--)
$ ls -l script.sh

# ফাইলের মালিক পরিবর্তন করে রুট করা হচ্ছে
$ sudo chown root:root script.sh

# ফাইলকে এগজিকিউটেবল করা হচ্ছে
$ chmod 750 script.sh
# এখন পারমিশন হলো: -rwxr-x--- (মালিকের rwx, গ্রুপের rx, অন্যদের পারমিশন নেই)
\`\`\``
  },
  {
    id: 'other-topics-23',
    title: 'Explain the conceptual difference between git merge and git rebase.',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Git', 'Version Control', 'Merge', 'Rebase', 'Workflow'],
    enAnswer: 'Git merge combines branches by creating a new merge commit, preserving the historical timeline of both branches. Git rebase moves the base of your branch onto another branch, rewriting commit history to create a clean, linear line of commits.',
    bnAnswer: 'Git merge একটি নতুন মার্জ কমিট তৈরির মাধ্যমে শাখাগুলোকে যুক্ত করে ও দুই শাখার ইতিহাস আলাদাভাবে ধরে রাখে। অন্যদিকে Git rebase আপনার শাখার বেস বা শুরুর অংশকে অন্য শাখার শেষ মাথায় নিয়ে যায় ও সরলরৈখিক ইতিহাস তৈরি করে।',
    enExplanation: `### Explanation
Both commands integrate changes from one branch into another, but they differ in how they shape commit history:
1. **Git Merge**:
   - Creates a **merge commit** containing references to both parent branches.
   - Non-destructive: History is never altered. The exact chronology of commits is preserved.
   - Downside: History charts can become cluttered with "train tracks" diagrams.
2. **Git Rebase**:
   - Temporarily removes your commits, pulls the latest commits from the target branch, and reapplies your commits on top of them.
   - Rewrites history: Commits get new SHA hashes.
   - Benefit: Clean, linear history tree without redundant merge commits.

### Real-World Example
In a team workspace:
- If you work on feature branch \`feat-a\` and main updates with 5 commits.
- **Merge**: Merging main into \`feat-a\` creates a new commit "Merge branch main into feat-a". Your commit history shows local merges.
- **Rebase**: Rebasing \`feat-a\` on main moves your feature commits to begin *after* mains latest commit. It looks like you wrote your feature on top of the newest code.

### Best Practice
Never rebase branches that have been pushed to a public/shared repository. Rebasing rewrites history and changes commit hashes, which will break the workspace history for other developers. Use rebase for local cleanup before pushing.

### Common Mistakes
Rebasing the master/main branch locally and pushing it with force, which desynchronizes the commit history for everyone else on the team.

### Code Example
\`\`\`bash
# --- MERGE WORKFLOW ---
$ git checkout feature-branch
$ git merge main
# (Resolves conflicts if any, creates merge commit)

# --- REBASE WORKFLOW ---
$ git checkout feature-branch
$ git rebase main
# (Applies commits one by one on top of main, no merge commit)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
দুটি কমান্ডই ভিন্ন ভিন্ন ব্রাঞ্চের কোড মার্জ করে, কিন্তু গিট হিস্ট্রিতে তাদের ইমপ্যাক্ট আলাদা:
১. **Git Merge**:
   - এটি একটি বিশেষ **মার্জ কমিট** তৈরি করে যা দুই ব্রাঞ্চের ইতিহাসকে একসাথে জুড়ে দেয়।
   - এটি নন-ডেসট্রাক্টিভ; কমিটের ইতিহাস বা হ্যাশ কখনো পরিবর্তন হয় না।
   - সমস্যা হলো, অনেক বেশি মার্জ কমিট তৈরি হলে গিট গ্রাফ ম্যাপ হিজিবিজি দেখায়।
২. **Git Rebase**:
   - এটি আপনার ব্রাঞ্চের কমিটগুলোকে সাময়িক তুলে নিয়ে টার্গেট ব্রাঞ্চের সব শেষ কমিটকে আগে বসায়, তার ওপর আপনার কমিটগুলো এক এক করে পেস্ট করে।
   - এটি হিস্ট্রি রি-রাইট করে। নতুন ইউনিক হ্যাশ আইডি তৈরি হয়।
   - সুবিধা হলো, গিট হিস্ট্রি ট্রিতে কোনো মার্জ কমিট দেখায় না, একদম সোজাসুজি সরলরেখায় হিস্ট্রি দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি একটি ফিচার ব্রাঞ্চে কাজ করছেন এবং মেইন ব্রাঞ্চে ইতিমধ্যে ৫টি নতুন কোড পুশ হয়েছে:
- **Merge**: মেইন ব্রাঞ্চকে ফিচারে মার্জ করলে একটি কমিট জমা হবে: "Merge branch main into feature-branch"।
- **Rebase**: রিবেস করলে আপনার কোডের শুরুটাই এমনভাবে শিফট হবে যেন আপনি মেইনের শেষ কোডটি ডাউনলোড করেই কাজ শুরু করেছিলেন।

### উত্তম অনুশীলন
পাবলিক বা শেয়ার্ড কোনো রিমোট ব্রাঞ্চে ইতিমধ্যে কোড পুশ হয়ে থাকলে সেখানে কখনো রিবেস করবেন না। রিবেস হিস্ট্রি রি-রাইট করে বলে সহকর্মীদের কোড সিঙ্ক ক্র্যাশ করবে। লোকাল ব্রাঞ্চে কাজ গুছিয়ে নেওয়ার সময় কেবল রিবেস ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মেইন বা মাস্টার ব্রাঞ্চে রিবেস করে ফোর্স পুশ (\`git push --force\`) করা, যা অন্য সবার রেপোজিটরি সিনক্রোনাইজেশন পুরোপুরি ভেঙে দেয়।

### Code Example
\`\`\`bash
# --- মার্জ ফ্লো ---
$ git checkout feature-branch
$ git merge main
# (মার্জ কমিট তৈরি করে মার্জ হবে)

# --- রিবেস ফ্লো ---
$ git checkout feature-branch
$ git rebase main
# (মেইন শেষ হওয়ার পর আপনার কমিটগুলো পরপর বসে রিবেস হবে)
\`\`\``
  },
  {
    id: 'other-topics-24',
    title: 'What does git cherry-pick do, and in what situations should you use it?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Git', 'Version Control', 'Cherry-pick', 'Workflow'],
    enAnswer: 'Git cherry-pick applies the changes introduced by one or more existing commits from another branch onto your current branch as new commits. It is useful for pulling single commits without merging the entire branch.',
    bnAnswer: 'Git cherry-pick অন্য কোনো শাখার এক বা একাধিক নির্দিষ্ট কমিটের পরিবর্তনগুলোকে আপনার বর্তমান শাখায় নতুন কমিট হিসেবে কপি করে এনে যুক্ত করে। এটি পুরো শাখা মার্জ না করে কেবল নির্দিষ্ট ফিচার বা বাগফিক্স বেছে আনতে সাহায্য করে।',
    enExplanation: `### Explanation
\`git cherry-pick <commit-hash>\` extracts the diff introduced by a specific commit from a source branch and applies it to the active branch:
1. **Targeted Integration**: Avoids merging the parent branch which might contain incomplete or untested commits.
2. **New Commit**: It creates a new commit on the target branch with identical code and commit message, but a new commit hash.

### Real-World Example
You are developing a feature on \`feat-dashboard\` and discover a bug in user auth. You write a fix and commit it (\`commit-abc\`). The rest of your dashboard feature is still buggy and cannot be merged to production. However, hotfixing production immediately requires that auth fix. You switch to \`main\`, run \`git cherry-pick commit-abc\` to pull only the bugfix, and deploy it to staging immediately.

### Best Practice
Use cherry-picking sparingly. Overusing it creates duplicate commits across branches, making the repository graph complex and increasing the likelihood of future merge conflicts.

### Common Mistakes
Cherry-picking a commit that relies on changes made in prior commits that you did not cherry-pick. This will lead to compile errors and merge conflicts.

### Code Example
\`\`\`bash
# 1. View logs in another branch to find the commit hash
$ git log --oneline another-branch
a1b2c3d Fix auth token expiration bug
f4e5d6c Add unfinished charts UI

# 2. Switch to target deployment branch
$ git checkout main

# 3. Cherry-pick only the bugfix commit
$ git cherry-pick a1b2c3d
# Commit is applied directly to main as a new commit
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`git cherry-pick <commit-hash>\` কমান্ড নির্দিষ্ট একটি কমিটের পরিবর্তন অন্য যেকোনো ব্রাঞ্চ থেকে আপনার বর্তমান কাজের ব্রাঞ্চে কপি করে নিয়ে আসে:
১. **টার্গেটেড মার্জ**: পুরো ব্রাঞ্চ মার্জ করা এড়ায়, কারণ পুরো ব্রাঞ্চে এমন অনেক কমিট থাকতে পারে যা এখনো টেস্ট করা হয়নি।
২. **নতুন কমিট**: এটি টার্গেট ব্রাঞ্চে একই মেসেজে নতুন কমিট যুক্ত করে তবে এর হ্যাশ আইডিটি বদলে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি \`feat-dashboard\` ব্রাঞ্চে নতুন ডিজাইন করছেন এবং হঠাৎ একটি ইমেইল ভেরিফিকেশনের বাগ খুঁজে পেলেন। আপনি ওই বাগের ফিক্স করে একটি কমিট (\`commit-abc\`) দিলেন। আপনার ড্যাশবোর্ডের ডিজাইন কাজ এখনো অসম্পূর্ণ বিধায় এটি প্রোডাকশনে মার্জ করা যাবে না। কিন্তু প্রোডাকশনে হটফ্লিক্স দেওয়া দরকার। আপনি \`main\` ব্রাঞ্চে গিয়ে \`git cherry-pick commit-abc\` রান করে কেবল বাগফিক্স পার্টটুকু মেইনে নিয়ে এসে ডেপ্লয় করে দিতে পারবেন।

### উত্তম অনুশীলন
চেরি-পিকিং খুব সীমিত আকারে ব্যবহার করুন। অতিরিক্ত চেরি-পিক করলে বিভিন্ন ব্রাঞ্চে ডুপ্লিকেট কোড তৈরি হয়, যা পরবর্তীতে ব্রাঞ্চ মার্জ করার সময় জটিল এরর তৈরি করে।

### সাধারণ ভুলসমূহ
এমন কোনো কমিট চেরি-পিক করা যার ফাইল পরিবর্তনের ইতিহাস তার পূর্ববর্তী অন্য কোনো আন-চেরি-পিকড কমিটের ওপর নির্ভরশীল। এর ফলে কোড ভেঙে যাবে।

### Code Example
\`\`\`bash
# ১. অন্য ব্রাঞ্চের লগ দেখে কমিট হ্যাশ খুঁজে বের করা
$ git log --oneline another-branch
a1b2c3d Fix auth token expiration bug
f4e5d6c Add unfinished charts UI

# ২. বর্তমান প্রোডাকশন ব্রাঞ্চে সুইচ করা
$ git checkout main

# ৩. শুধুমাত্র ওই বাগফিক্স কমিটটি চেরি-পিক করা
$ git cherry-pick a1b2c3d
# সাকসেসফুলি কমিটটি মেইনে যুক্ত হবে
\`\`\``
  },
  {
    id: 'other-topics-25',
    title: 'What is CI/CD, and how does it automate code integration and deployment pipelines?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    enAnswer: 'CI/CD stands for Continuous Integration and Continuous Deployment. CI automates compiling, linting, and testing code whenever changes are pushed. CD automates deploying those tested changes to production/staging servers.',
    bnAnswer: 'CI/CD মানে হলো Continuous Integration এবং Continuous Deployment। CI প্রতিবার কোড পুশ করার সময় কম্পাইলিং, লিন্টিং ও টেস্টিং প্রসেস অটোমেট করে। আর CD সফলভাবে টেস্ট হওয়া কোডটি প্রোডাকশন বা স্টেজিং সার্ভারে অটো-ডেপ্লয় করে।',
    enExplanation: `### Explanation
CI/CD shifts manual validation pipelines into automated cloud executors:
1. **Continuous Integration (CI)**:
   - Developers merge code frequently to the main branch.
   - An automated server (like GitHub Actions) runs code builds, style checks (linters), and test suites.
   - Alerts developers immediately if the build fails, maintaining main branch health.
2. **Continuous Deployment (CD)**:
   - Takes the tested build artifact and deploys it automatically to staging or production environments (e.g. AWS, Vercel, Docker Swarm).
   - Minimizes manual CLI deployment mistakes.

### Real-World Example
In a software team, before CI/CD, developers ran tests locally before git pushing. Junior developers often forgot to run tests, pushing bugs that crashed staging. Setting up a GitHub Actions CI pipeline forces the server to run Jest test suites on every pull request. If tests fail, the "Merge" button is blocked, keeping the codebase bug-free.

### Best Practice
Keep your CI test stages fast. Cache dependency folders (\`node_modules\`) to avoid downloading packages from scratch on every run, optimizing runner minutes.

### Common Mistakes
Deploying to production (CD) even if the test suite (CI) fails. The CD pipeline must strictly depend on the CI checks passing successfully first.

### Code Example
\`\`\`yaml
# Conceptual workflow pipeline stages in YAML configuration
name: Node CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  # Job 1: Run Tests (CI)
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run Jest tests
        run: npm test

  # Job 2: Deploy (CD) - Runs only if Job 1 passes!
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: SSH and Pull code on Server
        run: echo "Deploying to production server..."
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
CI/CD ম্যানুয়াল টেস্টিং ও ডেপ্লয়মেন্ট প্রসেসকে সম্পূর্ণ ক্লাউড অটোমেশনে রূপান্তর করে:
১. **Continuous Integration (CI)**:
   - ডেভেলপাররা মেইন ব্রাঞ্চে কোড পুশ করার সাথে সাথে অটোমেটিক রানার চালু হয়।
   - রানারটি কোড বিল্ড করে, কোড স্টাইল লিন্টার চেক করে এবং ইউনিট টেস্টগুলো এক্সিকিউট করে।
   - কোনো টেস্ট ফেইল হলে সাথে সাথে ডেভেলপারদের ইমেইল ও নোটিফিকেশন পাঠিয়ে এলার্ট করে।
২. **Continuous Deployment (CD)**:
   - টেস্ট পাস হওয়া কোডটি নিয়ে স্বয়ংক্রিয়ভাবে প্রোডাকশন সার্ভারে (যেমন AWS বা Vercel) ডেপ্লয় করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
পূর্বে ডেভেলপাররা লোকাল পিসিতে টেস্ট রান করে কোড পুশ করতেন। নতুন ডেভেলপাররা প্রায়ই টেস্ট করতে ভুলে বাগ সহ কোড পুশ করে প্রোডাকশন ডাউন করে দিতেন। গিটহাব অ্যাকশনস দিয়ে সিআই পাইপলাইন সেট করার পর, প্রতিবার কোড পুশ করলে ক্লাউড সার্ভার নিজে থেকেই টেস্ট রান করে। টেস্ট পাস না করলে পুল রিকোয়েস্ট মার্জ বাটন লক হয়ে থাকে।

### উত্তম অনুশীলন
সিআই পাইপলাইন রান করার সময় প্যাকেজ ডাউনলোডের সময় বাঁচাতে \`node_modules\` ক্যাশ করে রাখুন। এটি সার্ভার রানারের সময় ও খরচ বাঁচায়।

### সাধারণ ভুলসমূহ
টেস্ট স্যুইট (CI) ফেইল করা সত্ত্বেও কোড ডেপ্লয় (CD) করে ফেলা। সিডি প্রসেসটি অবশ্যই সিআই পাসের ওপর নির্ভরশীল হতে হবে।

### Code Example
\`\`\`yaml
# গিটহাব অ্যাকশনস সিআই/সিডি YAML কনফিগারেশনের অংশ
name: Node CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  # জব ১: টেস্ট রান করা (CI)
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run Jest tests
        run: npm test

  # জব ২: ডেপ্লয়মেন্ট (CD) - টেস্ট সফল হলেই কেবল এটি রান হবে
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: SSH and Pull code on Server
        run: echo "Deploying to production server..."
\`\`\``
  },
  {
    id: 'other-topics-26',
    title: 'What are GitHub Actions, and how do you write a basic workflow file in YAML?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['GitHub Actions', 'YAML', 'CI/CD', 'DevOps'],
    enAnswer: 'GitHub Actions is a CI/CD platform integrated inside GitHub. Workflows are defined in YAML files located inside the \`.github/workflows/\` directory, triggering tasks on git events like push or pull requests.',
    bnAnswer: 'GitHub Actions হলো গিটহাবের সাথে যুক্ত একটি বিল্ট-ইন CI/CD প্ল্যাটফর্ম। এর ওয়ার্কফ্লো ফাইলগুলো \`.github/workflows/\` ফোল্ডারে YAML ফরম্যাটে সেভ করা হয়, যা পুশ বা পুল রিকোয়েস্টের মতো গিট ইভেন্টে ট্রিগার হয়।',
    enExplanation: `### Explanation
GitHub Actions automates code tasks directly inside the repository:
1. **Workflow File Location**: Must be placed in \`.github/workflows/main.yml\`.
2. **YAML Components**:
   - **\`name\`**: The label for the workflow.
   - **\`on\`**: Event triggers (e.g., \`push: branches: [main]\`).
   - **\`jobs\`**: The execution blocks. Jobs run in parallel on isolated virtual machines (runners) unless configured otherwise.
   - **\`steps\`**: The sequence of commands to execute. Uses pre-made actions via \`uses\` (like checking out code) or runs custom bash scripts via \`run\`.

### Real-World Example
Every time a team member pushes code, you want to make sure it builds without syntax errors. You write a YAML workflow that triggers on \`push\`. The GitHub runner boots up an Ubuntu container, installs Node, runs \`npm install\`, and executes \`npm run build\`. If the build crashes, the developer gets an email warning them.

### Best Practice
Use official, version-pinned actions (e.g., \`actions/checkout@v3\` instead of \`@main\` or generic tags) to prevent pipeline failures if the action maintainers release breaking changes.

### Common Mistakes
Indentation errors in the YAML file. YAML is strictly indentation-sensitive; using tabs instead of spaces will cause parser crashes, preventing the workflow from running.

### Code Example
\`\`\`yaml
# .github/workflows/verify.yml
name: Verify Codebase

# Trigger workflow on pushes to main branch
on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the code
      - name: Checkout repository code
        uses: actions/checkout@v3

      # Step 2: Set up Node.js runtime environment
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      # Step 3: Install dependencies and compile
      - name: Install packages and Build
        run: |
          npm ci
          npm run build
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
গিটহাব অ্যাকশনস রেপোজিটরির ভেতরেই অটোমেটেড রানার পরিচালনা করার সুবিধা দেয়:
১. **ফাইল লোকেশন**: প্রজেক্টের রুট ফোল্ডারে \`.github/workflows/verify.yml\` পাথে ফাইলটি থাকতে হবে।
২. **YAML এলিমেন্টস**:
   - **\`name\`**: ওয়ার্কফ্লোর নাম।
   - **\`on\`**: কোন গিট ইভেন্টে এটি ট্রিগার হবে (যেমন: \`push: branches: [main]\`)।
   - **\`jobs\`**: এক বা একাধিক কাজের ব্লক যা ক্লাউড ভার্চুয়াল মেশিনে রান হবে।
   - **\`steps\`**: জবের ভেতর এক এক করে রান হওয়া কমান্ডের তালিকা।

### বাস্তব-ভিত্তিক উদাহরণ
দলের কোনো ডেভেলপার কোড পুশ করলে প্রজেক্টটি কম্পাইল হচ্ছে কিনা তা নিশ্চিত করা দরকার। গিটহাব অ্যাকশন কনফিগার করে রাখলে, পুশ হওয়া মাত্র গিটহাবের সার্ভার চালু হবে, লিনাক্স কন্টেইনার রেডি করবে, নোড এনভায়রনমেন্ট সেটআপ করে প্রজেক্ট বিল্ড টেস্ট সম্পন্ন করবে। কোডে এরর থাকলে নোটিফিকেশন আসবে।

### উত্তম অনুশীলন
থার্ড-পার্টি প্লাগইন রান করার সময় সবসময় ভার্সন পিন করে রাখুন (যেমন: \`actions/checkout@v3\`)। এতে প্লাগইন ডেভেলপাররা নতুন কোনো ব্রেকিং চেঞ্জ আনলেও আপনার ডেপ্লয় পাইপলাইন ভেঙে পড়বে না।

### সাধারণ ভুলসমূহ
YAML ফাইলে ইনডেন্টেশন বা স্পেসিং ভুল করা। স্পেসের জায়গায় ট্যাব কি-বোর্ড স্পেস প্রেস করলে পার্সিং এরর হয়ে ওয়ার্কফ্লো পুরো বাতিল হয়ে যাবে।

### Code Example
\`\`\`yaml
# .github/workflows/verify.yml
name: Verify Codebase

# মেইন ব্রাঞ্চে কোড পুশ হলে অ্যাক্টিভ হবে
on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # ধাপ ১: প্রজেক্ট কোড ক্লোন করা
      - name: Checkout repository code
        uses: actions/checkout@v3

      # ধাপ ২: নোড রানটাইম সেটআপ করা
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      # ধাপ ৩: প্যাকেজ ইনস্টল ও কম্পাইল করা
      - name: Install packages and Build
        run: |
          npm ci
          npm run build
\`\`\``
  },
  {
    id: 'other-topics-27',
    title: 'What is Sentry, and how does it help in tracking production errors?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Sentry', 'Error Tracking', 'Monitoring', 'Debugging'],
    enAnswer: 'Sentry is an application monitoring and error tracking platform. It captures uncaught runtime exceptions and crashes in production in real time, grouping them with complete stack traces, user browser specs, and steps leading to the error.',
    bnAnswer: 'Sentry হলো একটি অ্যাপ্লিকেশন মনিটরিং ও এরর ট্র্যাকিং প্ল্যাটফর্ম। এটি রিয়েল-টাইমে প্রোডাকশনে ঘটা রানটাইম এরর ও ক্র্যাশগুলো ক্যাপচার করে এবং ডিভাইসের নাম, ব্রাউজার ডিটেইলস ও স্ট্যাক ট্রেস সহ গ্রুপ করে ড্যাশবোর্ডে শো করে।',
    enExplanation: `### Explanation
When an app goes to production, users do not report javascript console errors. Sentry acts as your eyes in production:
1. **Uncaught Error Capture**: Sentry's SDK wraps the application context. If an uncaught error occurs, Sentry intercepts it and uploads the error details immediately to the Sentry cloud.
2. **Telemetry Details**: Sentry captures:
   - The exact file and line number (using stack trace).
   - User specifications (OS, device, browser version).
   - Breadcrumbs (user actions like page visits or button clicks leading up to the crash).

### Real-World Example
A user clicks a checkout button on your React app, and the screen goes blank because of a parsing bug. The user closes the tab and leaves. Without Sentry, you have no idea this happened. With Sentry, a slack notification immediately alerts the dev team: "TypeError: Cannot read properties of undefined (reading 'checkoutUrl') on Page /cart". The team fixes the bug before other users encounter it.

### Best Practice
Configure Sentry with environment tags (e.g., \`production\`, \`staging\`, \`development\`) to filter out local developer test errors from real production issues.

### Common Mistakes
Forgetting to upload Source Maps to Sentry in minified production builds. Without Source Maps, Sentry will display minified, unreadable code (like \`a.b() at main-chunk.js\`) instead of your original TypeScript code files.

### Code Example
\`\`\`typescript
import * as Sentry from "@sentry/react";

// Initialize Sentry SDK at application bootstrap
Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  // Capture 100% of transactions for performance monitoring in development
  tracesSampleRate: 1.0,
});

// Wrapping root component to capture rendering errors automatically
export default Sentry.withProfiler(App);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোড প্রোডাকশনে চলে যাওয়ার পর ইউজাররা ব্রাউজারের কনসোলে কী এরর আসলো তা রিপোর্ট করতে পারেন না। Sentry প্রোডাকশন সাইটে ঘটমান সমস্ত এররের ওপর নজর রাখে:
১. **রানটাইম এরর ক্যাপচার**: Sentry SDK অ্যাপ্লিকেশনের গ্লোবাল এক্সেপশন লিসেনারের সাথে যুক্ত থাকে। কোনো এরর হলে তা সাথে সাথে সেন্ট্রি সার্ভারে পুশ করে।
২. **ডিটেইলস ট্র্যাকিং**: এটি কোডের নির্দিষ্ট লাইন নম্বর, ইউজারের অপারেটিং সিস্টেম, ব্রাউজার ও এরর হওয়ার পূর্বে ইউজার কোন কোন বাটনে ক্লিক করেছিলেন তার ট্র্যাকিং হিস্ট্রি (Breadcrumbs) তুলে ধরে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটের পেমেন্ট বাটনে ক্লিক করার পর সিস্টেম এরর খেলো। ইউজার বিরক্ত হয়ে ট্যাব কেটে চলে গেলেন। Sentry ইনস্টল করা না থাকলে আপনি এই লস ট্রাফিকের কারণ জানতেও পারতেন না। Sentry থাকলে সাথে সাথে ডেভেলপার টিমের স্ল্যাক বা ডিসকর্ড চ্যানেলে এলার্ট চলে আসবে: "TypeError: Cannot read properties of undefined inside Cart.tsx line 45"। এতে কাস্টমার চলে যাওয়ার আগেই তা সমাধান করা যায়।

### উত্তম অনুশীলন
ডেভলপমেন্টের এরর আর প্রোডাকশনের এরর জট পাকানো এড়াতে সেন্ট্রি ইনিশিয়ালাইজ করার সময় \`environment: 'production'\` ট্যাগ সেট করে রাখুন।

### সাধারণ ভুলসমূহ
মিনিফাইড প্রোডাকশন বিল্ডে সোর্স ম্যাপ (Source Maps) সেন্ট্রিতে আপলোড করতে ভুলে যাওয়া। সোর্স ম্যাপ না থাকলে সেন্ট্রি কোডের আসল ফাইল নেম বা ভেরিয়েবল নেম ডিক্রিপ্ট করতে পারে না।

### Code Example
\`\`\`typescript
import * as Sentry from "@sentry/react";

// অ্যাপ স্টার্টআপে সেন্ট্রি ইনিশিয়লাইজ
Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  // ট্র্যাকিং স্যাম্পল রেট
  tracesSampleRate: 1.0,
});

// রুট কম্পোনেন্ট র্যাপ করা
export default Sentry.withProfiler(App);
\`\`\``
  },
  {
    id: 'other-topics-28',
    title: 'What is Datadog, and how does it assist in Application Performance Monitoring (APM)?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Datadog', 'APM', 'Monitoring', 'Logging', 'Infrastructure'],
    enAnswer: 'Datadog is an observability and monitoring platform. Its APM agent monitors server health, database query speeds, and API latency in real time, helping teams identify performance bottlenecks in cloud infrastructures.',
    bnAnswer: 'Datadog হলো একটি অবজারভেবিলিটি ও মনিটরিং প্ল্যাটফর্ম। এর APM সার্ভারের হেলথ, ডাটাবেজ কুয়েরি স্পিড ও এপিআই ল্যাটেন্সি রিয়েল-টাইমে ট্র্যাক করে প্রজেক্টের স্লো পারফরম্যান্সের কারণ চিহ্নিত করতে সাহায্য করে।',
    enExplanation: `### Explanation
While tools like Sentry focus on tracking code errors, Datadog focuses on tracking system health and infrastructure performance:
1. **APM (Application Performance Monitoring)**: Traces requests from the moment they hit Nginx, flow through Express, query MongoDB, and return, mapping out the latency of each segment.
2. **Infrastructure Metrics**: Monitors server CPU load, RAM consumption, disk storage, and network throughput.
3. **Log Aggregation**: Collects application stdout/stderr logs from multiple microservices into one central dashboard.

### Real-World Example
On a Friday night, the server slows down and requests time out. There are no uncaught errors (so Sentry is quiet). Datadog's APM dashboard shows a chart mapping API latency. It highlights that the \`GET /api/products\` query inside database query execution spike-jumped from 20ms to 4.5 seconds because of a missing MongoDB index. The team knows exactly what query is causing the latency and fixes it immediately.

### Best Practice
Set up alerts and thresholds in Datadog (e.g., triggering an email/Slack page if host CPU exceeds 90% for more than 5 minutes) to scale cloud resources or fix leaks before a crash occurs.

### Common Mistakes
Configuring the Datadog Agent to trace and report 100% of telemetry traces in high-traffic enterprise setups, which can create high network bandwidth usage and increase billing costs significantly.

### Code Example
\`\`\`typescript
// Initializing Datadog APM Tracer in a Node.js API server
// This must be imported and executed at the absolute top of the index file!
import ddTrace from 'dd-trace';

ddTrace.init({
  env: 'production',
  service: 'user-auth-service',
  logInjection: true, // Inject trace IDs into application logs for easy debugging
  analytics: true
});

// Subsequent imports (Express, Database connection) follow below
import express from 'express';
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Sentry যেখানে কোডের এররগুলো ট্র্যাকিং করে, সেখানে Datadog সিস্টেমের হেলথ ও ক্লাউড ইনফ্রাস্ট্রাকচারের সামগ্রিক পারফরম্যান্স ট্র্যাকিংয়ে ফোকাস করে:
১. **APM (Application Performance Monitoring)**: একটি রিকোয়েস্ট Nginx হয়ে, এক্সপ্রেস পার্স করে, ডাটাবেজে হিট করে ফিরে আসতে কত সময় নিলো তা নিখুঁত গ্রাফ আকারে দেখায়।
২. **ইনফ্রাস্ট্রাকচার মেট্রিক্স**: সার্ভারের সিপিইউ লোড, র‍্যাম ব্যবহার ও ডিস্ক স্টোরেজ লাইভ ট্র্যাক করে।
৩. **লগ এগ্রিগেশন**: একাধিক মাইক্রোসার্ভিসের লগ এক প্যানেলে নিয়ে আসে।

### বাস্তব-ভিত্তিক উদাহরণ
উইকেন্ডে সাইট স্লো হয়ে গেল কিন্তু কোথাও কোনো এরর লক দেখাচ্ছে না। Datadog APM প্যানেলে গিয়ে দেখা গেল \`GET /api/products\` রাউটটির ডাটাবেজ কুয়েরি রিড হতে ২০ মিলিসেকেন্ডের জায়গায় ৪.৫ সেকেন্ড সময় লাগছে, কারণ ওই কুয়েরি টেবিলে ইনডেক্স করা নেই। মেট্রিক দেখেই টিম বুঝতে পেরে ডাটাবেজে ইনডেক্স বসিয়ে রিলিজ দিলে সার্ভিস ফাস্ট হয়ে যায়।

### উত্তম অনুশীলন
ডেটাডগ ড্যাশবোর্ডে থ্রেশহোল্ড অ্যালার্ট সেট করুন (যেমন: সিপিইউ ব্যবহার ৫ মিনিটের বেশি সময় ধরে ৯০% উপরে থাকলে এলার্ট বা অ্যালার্ম ট্রিগার করা) যাতে বড় ধরনের ডাউনটাইম এড়ানো যায়।

### সাধারণ ভুলসমূহ
ভারী ট্রাফিকযুক্ত অ্যাপ্লিকেশনে ১০০% ট্রেস লগ ডেটাডগে পাঠানোর কনফিগ করা। এটি প্রজেক্টের সার্ভার স্পিড ড্রপ করায় ও প্রচুর অতিরিক্ত ক্লাউড বিল তৈরি করে।

### Code Example
\`\`\`typescript
// Node.js এপিআই সার্ভারে ডেটাডগ এপিএম ট্রেসার সক্রিয় করা
// ফাইলটি প্রজেক্টের একদম প্রধান ইনডেক্স ফাইলের সবার উপরে ইমপোর্ট করতে হবে!
import ddTrace from 'dd-trace';

ddTrace.init({
  env: 'production',
  service: 'user-auth-service',
  logInjection: true, // লগ ট্রেসিং সহজ করতে ট্রেস আইডি ইন্টিগ্রেট করবে
  analytics: true
});

// অন্যান্য ইমপোর্টগুলো (যেমন: Express) এর নিচে বসবে
import express from 'express';
\`\`\``
  },
  {
    id: 'other-topics-29',
    title: 'What is Figma, and how does the developer handoff process work?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Figma', 'UI UX', 'Design Handoff', 'Developer Mode'],
    enAnswer: 'Figma is a collaborative UI/UX design tool. The developer handoff process allows developers to inspect wireframes, extract CSS styling tokens (fonts, spacing, colors), download assets (SVGs/PNGs), and read component dimensions directly.',
    bnAnswer: 'Figma হলো একটি কোলাবোরেটিভ UI/UX ডিজাইন টুল। ডেভেলপার হ্যান্ডঅফ (Handoff) প্রসেসের মাধ্যমে ডিজাইনারের তৈরি আর্টবোর্ড থেকে সিএসএস (CSS) কোড টোকেন, প্যাডিং, কালার কোড এবং ইমেজ/এসভিজি ফাইল সরাসরি কপি ও ডাউনলোড করা যায়।',
    enExplanation: `### Explanation
Figma bridges the gap between designers and developers by providing a shared web canvas:
1. **Design Files**: UI/UX designers sketch mobile and desktop layouts in Figma.
2. **Dev Mode**: Developers toggle to "Dev Mode" to inspect components.
   - **Measurements**: Hovering over elements displays margins and paddings in pixels relative to other elements.
   - **Styles**: Generates CSS snippets (e.g., \`font-family\`, \`border-radius\`, \`box-shadow\`) automatically.
   - **Assets**: Allows exporting vector icons as SVGs or photos as PNG/WebP files.

### Real-World Example
A designer creates a custom button widget. Instead of emailing the designer to ask for the font size, button height, and color codes, you open the Figma link. In Dev Mode, you click the button. Figma displays: \`padding: 12px 24px\`, \`background-color: #6366F1\`, and \`border-radius: 8px\`. You copy this into your CSS stylesheet instantly.

### Best Practice
Designers and developers should align on a design system. If Figma styles match your project's Tailwind/CSS variables (e.g. \`color-primary\`), developers can translate visual mockups into code tokens without hardcoding random pixel sizes.

### Common Mistakes
Hardcoding absolute pixel coordinates (\`top: 154px; left: 242px\`) from Figma into your web layouts, which ruins responsive grid adaptations on mobile screens. Use Figma measurements to determine relative values (padding, margins, flex gaps).

### Code Example
\`\`\`css
/* Example CSS extracted directly from Figma Dev Mode inspect panel */
.figma-custom-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 140px;
  height: 48px;
  background: #6366F1;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Figma ডিজাইনার ও ডেভেলপারদের কাজের গ্যাপ মেটাতে সাহায্য করে একটি কমন ক্যানভাস প্রদান করে:
১. **ডিজাইন ফাইল**: ইউজার ইন্টারফেস ও লেআউটগুলো ফিজমায় তৈরি হয়।
২. **ডেভ মোড (Dev Mode)**: ডেভেলপাররা এই মোড অন করে ডিজাইনের ওপর ক্লিক করলে:
   - **পরিমাপ**: মার্জিন, প্যাডিং, উইডথ ও হাইটের পিক্সেল ম্যাপ দেখা যায়।
   - **সিএসএস টোকেন**: ডিরেক্ট সিএসএস কোড জেনারেট করে স্ক্রিনে শো করে।
   - **রপ্তানি (Export)**: আইকনগুলোকে SVG এবং ইমেজগুলোকে WebP হিসেবে ডাউনলোড করার সুযোগ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ডিজাইনার একটি প্রিমিয়াম বাটন ডিজাইন করলেন। বাটনের কালার কোড বা বর্ডার রেডিয়াস কী তা চ্যাট করে ডিজাইনারকে জিজ্ঞাসা না করে ফিজমা ফাইল ওপেন করে বাটনের ওপর ক্লিক করবেন। ডেভ মোডে দেখাবে: \`background: #6366F1\`, \`border-radius: 8px\`। আপনি সহজে এটি আপনার কোডবেসে রি-রাইট করতে পারবেন।

### উত্তম অনুশীলন
ডিজাইন সিস্টেমে একই টোকেন কালার ব্যবহার করুন। ডিজাইনের কালার যদি সিএসএস ভেরিয়েবলের সাথে মিলে যায় (যেমন: \`var(--color-primary)\`), তবে সরাসরি সেই ভেরিয়েবল ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ফিজমার পিক্সেল মেজারমেন্ট দেখে কোডে সরাসরি পজিশন হার্ডকোড করা (\`top: 154px; left: 242px\`), যা সাইটের রেসপন্সিভনেস নষ্ট করে দেয়। শুধুমাত্র প্যাডিং ও মার্জিন দেখে ফ্লেক্স বক্স লেআউট তৈরি করুন।

### Code Example
\`\`\`css
/* ফিজমা ডেভ মোড থেকে সরাসরি কপি করা সিএসএস কোডের উদাহরণ */
.figma-custom-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 140px;
  height: 48px;
  background: #6366F1;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
}
\`\`\``
  },
  {
    id: 'other-topics-30',
    title: 'What is Jest, and how do you write a basic unit test with assertions and mock functions?',
    difficulty: 'basic',
    category: 'other-topics',
    tags: ['Jest', 'Testing', 'Unit Testing', 'Mocking', 'JavaScript'],
    enAnswer: 'Jest is a JavaScript testing framework. It runs test suites, provides assertion functions (expect().toBe()) to verify output values, and supports mocking functions (jest.fn()) to isolate components during tests.',
    bnAnswer: 'Jest হলো একটি জাভাস্ক্রিপ্ট টেস্টিং ফ্রেমওয়ার্ক। এটি টেস্ট ফাইলগুলো রান করে, আউটপুট যাচাইয়ের জন্য অ্যাসারশন (\`expect().toBe()\`) দেয় এবং টেস্টে নির্দিষ্ট পার্ট আলাদা রাখতে মক ফাংশন (\`jest.fn()\`) সাপোর্ট করে।',
    enExplanation: `### Explanation
Unit testing isolates and tests specific functions to ensure they produce correct outputs:
1. **Test Blocks**: Written using \`test('description', () => { ... })\` or \`describe\` blocks to group tests.
2. **Assertions**: Use \`expect(actualValue).toBe(expectedValue)\` to check if code behaves correctly. Supports matchers like \`toEqual\`, \`toContain\`, \`toThrow\`.
3. **Mocks**: \`jest.fn()\` creates a fake spy function. You can track if it was called, how many times, and with what arguments.

### Real-World Example
In a shopping cart, a function calculates discount totals: \`calculateDiscount(100, 0.1)\`. You write a unit test to verify that the returned value is exactly \`90\`. If another developer accidentally breaks the math formula in a future commit, the Jest test pipeline fails immediately, blocking the deployment.

### Best Practice
Keep unit tests fast and independent. Avoid making real network API requests or database writes inside Jest unit tests. Use mock modules (\`jest.mock\`) to return fake API responses.

### Common Mistakes
Writing assertions without returning promises inside asynchronous tests, which causes Jest to pass the test before the async expectations actually run.

### Code Example
\`\`\`typescript
// math.ts - Code to test
export function add(a: number, b: number): number {
  return a + b;
}

// math.test.ts - Jest Test Suite
import { add } from './math';

describe('Math Utilities', () => {
  test('adds 2 + 3 to equal 5', () => {
    // Assertion check
    expect(add(2, 3)).toBe(5);
  });

  test('calls custom callback using Jest Mock', () => {
    const mockCallback = jest.fn();
    
    // Call function under test with mock spy
    mockCallback('test-arg');
    
    // Assert mock behavior
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('test-arg');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউনিট টেস্টিংয়ের মূল লক্ষ্য হলো কোডের নির্দিষ্ট কোনো ফাংশন আইসোলেটেড বা আলাদা করে পরীক্ষা করা যে সেটি সঠিক আউটপুট দিচ্ছে কিনা:
১. **টেস্ট ব্লক**: \`test('বর্ণনা', () => { ... })\` ফাংশনের ভেতরে অ্যাসারশনগুলো লেখা হয়।
২. **অ্যাসারশন**: \`expect(actual).toBe(expected)\` ব্যবহার করে লজিক ঠিক আছে কিনা চেক করা হয়।
৩. **মক ফাংশন**: \`jest.fn()\` একটি মক ফাংশন তৈরি করে যা ট্র্যাক করতে পারে যে ফাংশনটি কল হয়েছিল কিনা এবং কী প্যারামিটার পাঠানো হয়েছিল।

### বাস্তব-ভিত্তিক উদাহরণ
শপিং কার্টে ডিসকাউন্ট হিসেবের ফাংশন আছে: \`calculateDiscount(100, 0.1)\`। আপনি টেস্ট ফাইলে লিখবেন যেন এর আউটপুট ৯০ আসে। ভবিষ্যতে কোনো ডেভেলপার কোড পরিবর্তন করার সময় ম্যাথ ফর্মুলা গুলিয়ে ফেললে জেস্ট টেস্ট রান করার সময় এরর দেখাবে এবং ডেপ্লয় আটকে দেবে।

### উত্তম অনুশীলন
ইউনিট টেস্টকে ফাস্ট রাখুন। টেস্ট ফাইলের ভেতর সরাসরি রিয়েল ডাটাবেজে ডাটা রাইট বা রিয়েল এপিআই কল করা এড়াতে \`jest.mock()\` দিয়ে মক ডাটা ব্যবহার করুন।

### সাধারণ ভুলসমূহ
অ্যাসিনক্রোনাস ফাংশন টেস্ট করার সময় প্রমিস রিটার্ন না করা বা \`await\` না করা। এর ফলে জেস্ট অ্যাসিনক্রোনাস কাজ শেষ হওয়ার আগেই টেস্ট পাস দেখিয়ে শেষ হয়ে যায়।

### Code Example
\`\`\`typescript
// math.ts - মূল ফাংশন
export function add(a: number, b: number): number {
  return a + b;
}

// math.test.ts - জেস্ট টেস্ট ফাইল
import { add } from './math';

describe('Math Utilities', () => {
  test('adds 2 + 3 to equal 5', () => {
    // অ্যাসারশন চেক
    expect(add(2, 3)).toBe(5);
  });

  test('calls custom callback using Jest Mock', () => {
    const mockCallback = jest.fn();
    
    // মক ফাংশনটি কল করা হলো
    mockCallback('test-arg');
    
    // মক বিহেভিয়ার চেক করা
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('test-arg');
  });
});
\`\`\``
  }
];
