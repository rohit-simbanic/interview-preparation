import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'other-topics-71',
    title: 'Compare WebSockets, Server-Sent Events (SSE), and WebTransport for real-time web communication.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['WebSockets', 'SSE', 'WebTransport', 'Protocols', 'Performance'],
    enAnswer: 'WebSockets provide full-duplex TCP communication. SSE is a lightweight, unidirectional HTTP/2 protocol for server-to-client streaming. WebTransport uses HTTP/3 over QUIC to deliver multiplexed, bidirectional, low-latency transport.',
    bnAnswer: 'WebSockets ফুল-ডুপ্লেক্স টিসিপি (TCP) যোগাযোগ প্রদান করে। SSE হলো সার্ভার-থেকে-ক্লায়েন্ট স্ট্রিম করার জন্য একটি হালকা ও একমুখী HTTP/2 প্রোটোকল। WebTransport মূলত HTTP/3 ওভার QUIC ব্যবহার করে মাল্টিপ্লেক্সড, দ্বিমুখী ও লো-লেটেন্সি যোগাযোগ প্রদান করে।',
    enExplanation: `### Explanation
The choice of real-time communication protocol impacts latency, connection overhead, and battery consumption:
1. **WebSockets (TCP)**:
   - Full-duplex: Both client and server can send messages at any time.
   - Overhead: TCP handshake, connection state management.
   - Fallbacks: Needs protocol upgrade (HTTP to WS).
2. **Server-Sent Events (SSE) (HTTP/2)**:
   - Unidirectional: Only the server streams data to the client.
   - Simplicity: Uses standard HTTP, automatic reconnection, text-based format.
   - Efficiency: Runs over HTTP/2, sharing the same TCP connection with other resources.
3. **WebTransport (HTTP/3 over QUIC)**:
   - Bidirectional & Multiplexed: Can send streams (reliable) and datagrams (unreliable, ultra-fast like UDP).
   - Head-of-line blocking elimination: If a packet drops, it doesn't block other streams.
   - Connection migration: Keeps connection alive when switching from Wi-Fi to cellular data.

### Real-World Example
- **WebSockets**: Collaborative multiplayer game where player coordinates must be sent and received in full-duplex with minimal latency.
- **SSE**: Financial stock dashboard showing live price changes. The client only listens to server updates and does not need to publish back.
- **WebTransport**: Virtual Reality video streaming where audio/video streams must be transmitted reliably, while controller tracking inputs are sent via fast, unreliable datagrams.

### Best Practice
Use SSE for simple server-to-client notifications or dashboards to avoid socket handshaking. Use WebTransport for intensive bidirectional data sync or media-heavy applications. Fallback to WebSockets if client browser support for HTTP/3 is unavailable.

### Common Mistakes
Using WebSockets for one-way analytics tracking, which creates unnecessary long-lived socket connection burdens on the server.

### Code Example
\`\`\`typescript
// Server-Sent Events (SSE) Route in Express (HTTP/2 compatible)
import express from 'express';
const app = express();

app.get('/api/live-ticks', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const intervalId = setInterval(() => {
    // Format must be "data: <payload>\n\n"
    res.write(\`data: \${JSON.stringify({ price: Math.random() * 100 })}\\n\\n\`);
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিয়েল-টাইম যোগাযোগের প্রোটোকল নির্বাচনের ওপর সিস্টেমের লেটেন্সি, কানেকশন ওভারহেড ও সার্ভার পারফরম্যান্স নির্ভর করে:
১. **WebSockets (TCP)**:
   - এটি দ্বিমুখী (Full-duplex) যোগাযোগ ব্যবস্থা। সার্ভার ও ক্লায়েন্ট যেকোনো সময় তথ্য আদান-প্রদান করতে পারে।
   - প্রোটোকল আপগ্রেড করার প্রয়োজন পড়ে (HTTP থেকে WS)।
২. **Server-Sent Events (SSE) (HTTP/2)**:
   - এটি একমুখী (Unidirectional) যোগাযোগ ব্যবস্থা। কেবল সার্ভার থেকে ক্লায়েন্টে ডাটা স্ট্রিম করা হয়।
   - এটি স্ট্যান্ডার্ড HTTP ব্যবহার করে এবং সংযোগ বিচ্ছিন্ন হলে অটো-কানেক্ট সুবিধা প্রদান করে।
৩. **WebTransport (HTTP/3 over QUIC)**:
   - এটি ওয়ান-ওয়ে ও দ্বিমুখী উভয় যোগাযোগই সাপোর্ট করে এবং একই সাথে রিলাইয়েবল স্ট্রিম ও আন-রিলাইয়েবল ডেটাগ্রাম (UDP-র মতো দ্রুত) সমর্থন করে।
   - QUIC প্রোটোকল ব্যবহারের কারণে এটি হেড-অফ-লাইন ব্লকিং এড়ায় এবং নেটওয়ার্ক সুইচ (যেমন: ওয়াইফাই থেকে মোবাইল ডাটা) হলেও সংযোগ বিচ্ছিন্ন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
- **WebSockets**: একটি মাল্টিপ্লেয়ার গেম যেখানে প্লেয়ারের পজিশন ক্রমাগত আদান-প্রদান করতে হয়।
- **SSE**: স্টক এক্সচেঞ্জের ড্যাশবোর্ড যেখানে কেবল সার্ভার প্রতিনিয়ত শেয়ারের দাম পাঠায়, ক্লায়েন্টের উল্টো রেসপন্স পাঠানোর দরকার হয় না।
- **WebTransport**: ভিআর (VR) গেমিং যেখানে অডিও-ভিডিও ফাইল রিলাইয়েবলি পাঠাতে হয় এবং কন্ট্রোলারের মুভমেন্ট অত্যন্ত দ্রুত আন-রিলাইয়েবল ডেটাগ্রামে পাঠাতে হয়।

### উত্তম অনুশীলন
একমুখী মেসেজ বা নোটিফিকেশনের জন্য হালকা ওজনের SSE ব্যবহার করুন। ইন্টারেক্টিভ ও হাই-পারফরম্যান্স দ্বিমুখী ডাটা সিঙ্ক করতে WebTransport ব্যবহার করুন এবং ক্লায়েন্ট ব্রাউজারে এটি সাপোর্ট না থাকলে WebSockets-এ ফলব্যাক করুন।

### সাধারণ ভুলসমূহ
প্যাসিভ অ্যানালিটিক্স ডাটা ট্র্যাক করতে অহেতুক WebSockets ব্যবহার করা, যা সার্ভারে অযথা সকেট কানেকশনের চাপ তৈরি করে।

### Code Example
\`\`\`typescript
// এক্সপ্রেস-এ সার্ভার-সেন্ট ইভেন্টস (SSE) তৈরি করার নিয়ম
import express from 'express';
const app = express();

app.get('/api/live-ticks', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const intervalId = setInterval(() => {
    // অবশ্যই "data: <payload>\n\n" ফরমেটে ডাটা পাঠাতে হবে
    res.write(\`data: \${JSON.stringify({ price: Math.random() * 100 })}\\n\\n\`);
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});
\`\`\``
  },
  {
    id: 'other-topics-72',
    title: 'Explain how to design and implement Idempotency Keys in REST APIs for transaction safety.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['REST API', 'Idempotency Keys', 'Backend Security', 'Redis', 'Database Transactions'],
    enAnswer: 'Implement idempotency by generating a unique token (e.g. UUID) on the client, checking its existence in a fast store like Redis before processing, and returning the cached response if the key has already been executed.',
    bnAnswer: 'ক্লায়েন্ট থেকে একটি ইউনিক টোকেন (যেমন: UUID) পাঠিয়ে এবং প্রসেসিংয়ের পূর্বে রেডিসের মতো ফাস্ট মেমরিতে সেই কী চেক করে ডুপ্লিকেট রিকোয়েস্ট ব্লক করা ও ক্যাশড রেসপন্স রিটার্ন করার মাধ্যমে আইডেমপোটেন্সি ইমপ্লিমেন্ট করা হয়।',
    enExplanation: `### Explanation
Idempotency ensures that performing an API request multiple times (due to client timeouts, double clicks, or retries) yields the same server state change:
1. **Client Generation**: The client generates a unique UUID for a transaction and sends it in the \`Idempotency-Key\` HTTP header.
2. **Atomic Lock**: The server attempts to acquire a lock or write the key to Redis with a short TTL (e.g. 24 hours) using \`SETNX\` (Set if Not Exists).
3. **Execution Routing**:
   - If the key exists with a status of \`PROCESSING\`, return a \`409 Conflict\` (already running).
   - If the key exists with a status of \`COMPLETED\`, return the cached response directly to the client.
   - If the key doesn't exist, process the transaction, save the response payload in Redis, and return it.

### Real-World Example
In a payment gateway (like Stripe):
- A customer submits a payment of $100.
- Due to a weak mobile network, the server processes the payment but the response times out on the client.
- Without an idempotency key, retrying the API call would charge the customer's card a second time ($200).
- With \`Idempotency-Key: pay_abc123\`, the retry detects the completed transaction and returns the original success message without double charging.

### Best Practice
Use atomic database checks or Redis locks (\`Redlock\`) to prevent race conditions when two identical requests hit different server instances in a load balancer concurrently. Always set a TTL on cached responses to avoid bloating database size.

### Common Mistakes
Caching error responses (like \`500 Internal Server Error\`) under the idempotency key, preventing users from retrying when server bugs are fixed.

### Code Example
\`\`\`typescript
import { Request, Response, NextFunction } from 'express';
import { createClient } from 'redis';

const redis = createClient();
redis.connect();

export async function idempotencyMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.headers['idempotency-key'];
  if (!key) return next();

  // Try to atomically set the key to 'processing'
  const isUnique = await redis.set(\`idemp:\${key}\`, 'PROCESSING', {
    NX: true,
    EX: 86400 // 24 hours expiry
  });

  if (!isUnique) {
    const value = await redis.get(\`idemp:\${key}\`);
    if (value === 'PROCESSING') {
      return res.status(409).json({ error: 'Request already in progress' });
    }
    // Return original cached response
    return res.status(200).json(JSON.parse(value || '{}'));
  }

  // Override res.json to capture response and cache it
  const originalJson = res.json.bind(res);
  res.json = (body: any) => {
    redis.set(\`idemp:\${key}\`, JSON.stringify(body), { EX: 86400 });
    return originalJson(body);
  };

  next();
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আইডেমপোটেন্সি কী নিশ্চিত করে যে একই রিকোয়েস্ট ক্লায়েন্ট থেকে একাধিকবার (নেটওয়ার্ক সমস্যা বা ডাবল ক্লিকের কারণে) পাঠালেও সার্ভারের স্টেটে কেবল একবারই পরিবর্তন ঘটবে:
১. **ক্লায়েন্ট টোকেন**: ক্লায়েন্ট রিকোয়েস্টের সাথে একটি ইউনিক টোকেন (যেমন: UUID) হেডার হিসেবে পাঠায়: \`Idempotency-Key: pay_xyz\`।
২. **অ্যাটমিক লক (Atomic Lock)**: সার্ভার রেডিসে \`SETNX\` দিয়ে কী-টি সেভ করে। যদি কী-টি আগে থেকেই থাকে, তার অর্থ এই রিকোয়েস্টটি ডুপ্লিকেট।
৩. **রেসপন্স রাউটিং**:
   - রিকোয়েস্টটি প্রসেসিং অবস্থায় থাকলে \`409 Conflict\` রিটার্ন করা হয়।
   - রিকোয়েস্টটি কমপ্লিট থাকলে পূর্বের সেভ করা ক্যাশ রেসপন্স রিটার্ন করে দেওয়া হয়।
   - রিকোয়েস্টটি নিউ হলে সেটি সম্পন্ন করে রেসপন্স ডাটা রেডিসে ক্যাশ করে রাখা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেমেন্ট সিস্টেমে:
- ইউজার ১০০ ডলার সাবমিট করলেন কিন্তু দুর্বল নেটওয়ার্কের কারণে সার্ভার থেকে রেসপন্স ফিরে আসার আগেই ব্রাউজার টাইমআউট খেলো।
- ইউজার পেজ রিফ্রেশ করে আবার সাবমিট করলেন। আইডেমপোটেন্সি কী না থাকলে ইউজারের একাউন্ট থেকে কেটে নেওয়া ১০০ টাকা কাটা হতো।
- \`Idempotency-Key\` ব্যবহার করলে ২য় সাবমিটটি সরাসরি ব্লক হয়ে কেবল পূর্বের ট্রানজ্যাকশনের রিসিট কপি স্ক্রিনে চলে আসবে।

### উত্তম অনুশীলন
রেডিস ডিস্ট্রিবিউটেড লক ব্যবহার করুন যাতে একাধিক সার্ভার প্যারালালি রিকোয়েস্ট রিসিভ করলেও কোনো রেস কন্ডিশন তৈরি না হয়। আইডেমপোটেন্সি ক্যাশের জন্য অবশ্যই ২৪ ঘণ্টার মতো TTL বা এক্সপায়ারি টাইম সেট করবেন।

### সাধারণ ভুলসমূহ
সার্ভারের সাময়িক এরর বা \`500 Internal Error\` গুলোকেও আইডেমপোটেন্সি কী-র আন্ডারে ক্যাশ করে ফেলা, যার ফলে সার্ভার ঠিক হওয়ার পরও ইউজার পুনরায় চেষ্টা করতে পারেন না।

### Code Example
\`\`\`typescript
// এক্সপ্রেস ও রেডিস দিয়ে আইডেমপোটেন্সি মিডলওয়্যার ইমপ্লিমেন্টেশন
import { Request, Response, NextFunction } from 'express';
import { createClient } from 'redis';

const redis = createClient();
redis.connect();

export async function idempotencyMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.headers['idempotency-key'];
  if (!key) return next();

  // অ্যাটমিক লক সেট করার ট্রাই
  const isUnique = await redis.set(\`idemp:\${key}\`, 'PROCESSING', {
    NX: true,
    EX: 86400 // ২৪ ঘণ্টার এক্সপায়ারি
  });

  if (!isUnique) {
    const value = await redis.get(\`idemp:\${key}\`);
    if (value === 'PROCESSING') {
      return res.status(409).json({ error: 'Request already in progress' });
    }
    // পূর্বের ক্যাশ করা রেসপন্স রিটার্ন
    return res.status(200).json(JSON.parse(value || '{}'));
  }

  // রেসপন্স ক্যাচ করে ক্যাশ করার ওভাররাইড লজিক
  const originalJson = res.json.bind(res);
  res.json = (body: any) => {
    redis.set(\`idemp:\${key}\`, JSON.stringify(body), { EX: 86400 });
    return originalJson(body);
  };

  next();
}
\`\`\``
  },
  {
    id: 'other-topics-73',
    title: 'How do you scale Socket.IO servers horizontally using the Redis Adapter?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Socket.IO', 'Redis Adapter', 'Horizontal Scaling', 'Pub/Sub', 'Backend Architecture'],
    enAnswer: 'Scale Socket.IO horizontally by deploying multiple instances behind a load balancer with sticky sessions, and binding them with the @socket.io/redis-adapter to broadcast events between server nodes via Redis Pub/Sub channels.',
    bnAnswer: 'স্টিকি সেশন সহ লোড ব্যালেন্সারের পেছনে একাধিক Socket.IO ইনস্ট্যান্স ডেপ্লয় করে এবং @socket.io/redis-adapter দিয়ে রেডিস পাব-সাব চ্যানেলের মাধ্যমে সমস্ত নোডের মাঝে মেসেজ ব্রডকাস্ট করিয়ে Socket.IO স্কেল করা হয়।',
    enExplanation: `### Explanation
When scaling Socket.IO horizontally across multiple server instances (e.g. behind Nginx or AWS ALB), WebSocket connections are split:
1. **The Partitioning Issue**: If User A is connected to Server 1, and User B is connected to Server 2, Server 1 cannot emit a message directly to User B because User B's socket descriptor is stored in Server 2's memory.
2. **Redis Adapter Integration**:
   - Every time a server wants to emit to a room or user, the \`@socket.io/redis-adapter\` interceptor publishes this event to a global Redis Pub/Sub channel.
   - All server nodes subscribe to this channel. They receive the message and check if any of their local connected clients belong to the targeted room.
   - If yes, they dispatch the message locally, synchronizing states.
3. **Sticky Sessions**: Necessary during the initial HTTP handshaking phase of Socket.IO before upgrading to WebSockets.

### Real-World Example
In a collaborative drawing application hosted on ECS with 5 server nodes:
- When a user draws a line, their local tab transmits the coordinates to Server Node 3.
- Server Node 3 uses the Redis adapter to publish the line updates.
- Server Nodes 1, 2, 4, and 5 receive the update via Redis and immediately forward it to all active drawing tabs connected to them, keeping the canvas in sync.

### Best Practice
Always enable sticky sessions on your load balancer (like Nginx \`ip_hash\` or AWS ALB target group cookie) to prevent HTTP handshake failures during the upgrade phase. Configure Redis connection pools to prevent timeout lags.

### Common Mistakes
Not using sticky sessions, which causes clients to hit random servers during the HTTP polling stage, resulting in handshake validation errors and socket disconnection loops.

### Code Example
\`\`\`typescript
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // Bind Socket.IO adapter to Redis Clients
  io.adapter(createAdapter(pubClient, subClient));
  
  io.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
    });

    socket.on('broadcast-msg', (data) => {
      // This emit will automatically propagate to all servers via Redis!
      io.to(data.roomId).emit('message', data.text);
    });
  });

  httpServer.listen(3000);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লো-ব্যালেন্সারের পেছনে যখন একাধিক Socket.IO সার্ভার ডেপ্লয় করা হয়, তখন কানেকশনগুলো আলাদা সার্ভারে ভাগ হয়ে যায়:
১. **কানেকশন ভাগ হওয়ার সমস্যা**: ইউজার A যুক্ত সার্ভার ১-এ, আর ইউজার B যুক্ত সার্ভার ২-এ। এখন সার্ভার ১ যদি ব্রডকাস্ট করে, তবে সার্ভার ২-এর মেমরিতে থাকা ইউজার B সেই মেসেজ পাবে না।
২. **রেডিস অ্যাডাপ্টার সমাধান**:
   - সকেট সার্ভারগুলোকে গ্লোবাল রেডিসের পাব-সাব চ্যানেলের সাথে কানেক্ট করা হয়।
   - যখনই কোনো সার্ভার কোনো রুমে বা ইউজারের কাছে মেসেজ পাঠাতে চায়, অ্যাডাপ্টারটি মেসেজটি রেডিস পাব-সাব চ্যানেলে পাবলিশ করে।
   - সবকটি সকেট সার্ভার ওই চ্যানেল সাবস্ক্রাইব করে রাখায় তারা মেসেজটি পায় এবং তাদের আন্ডারে থাকা ক্লায়েন্টদের মেসেজটি পাঠিয়ে দেয়।
৩. **স্টিকি সেশন**: সকেট কানেকশন তৈরির প্রথম ধাপে (HTTP Long-polling) একই সার্ভারে রিকোয়েস্ট বজায় রাখতে লোড ব্যালেন্সারে স্টিকি সেশন অন করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইভ গেম সার্ভারে যেখানে ৫টি ভিন্ন সার্ভার নোড রয়েছে:
- প্লেয়ার ১ সোর্ড অ্যাটাক বাটন ক্লিক করলে সকেটটি সার্ভার ৪-এ ইভেন্ট ফায়ার করে।
- সার্ভার ৪ রেডিস অ্যাডাপ্টারের মাধ্যমে মেসেজটি গ্লোবালি পাবলিশ করে।
- বাকি ৪টি সার্ভার সাথে সাথে রেডিস থেকে সিগন্যাল পেয়ে যার যার সেশনে কানেক্টেড প্লেয়ারদের স্ক্রিন আপডেট করে দেয়।

### উত্তম অনুশীলন
লোড ব্যালেন্সারে অবশ্যই স্টিকি সেশন (Sticky Sessions) একটিভ করুন (যেমন Nginx-এর \`ip_hash\` ব্যবহার করে), অন্যথায় সকেট আপগ্রেড করার সময় ক্লায়েন্ট বারবার এরর খেয়ে ডিসকানেক্ট হবে।

### সাধারণ ভুলসমূহ
স্টিকি সেশন কনফিগার না করেই মাল্টি-সার্ভার ডেপ্লয়মেন্ট রান করা, যার ফলে ক্লায়েন্ট বারবার সার্ভার পরিবর্তনের কারণে সকেট হ্যান্ডশেক এরর দেখায়।

### Code Example
\`\`\`typescript
// Socket.IO-তে হরাইজন্টাল স্কেলিংয়ের জন্য Redis Adapter সেটআপ
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // সকেট সার্ভারে রেডিস অ্যাডাপ্টার বাইন্ড করা হলো
  io.adapter(createAdapter(pubClient, subClient));
  
  io.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
    });

    socket.on('broadcast-msg', (data) => {
      // এই ইমিটটি রেডিস পাব-সাব দিয়ে সব সকেট সার্ভার নোডে অটোমেটিক ছড়িয়ে পড়বে!
      io.to(data.roomId).emit('message', data.text);
    });
  });

  httpServer.listen(3000);
});
\`\`\``
  },
  {
    id: 'other-topics-74',
    title: 'Explain parent-child jobs and task dependency graphs in Bull queues using FlowProducer.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['BullMQ', 'FlowProducer', 'Job Queue', 'Task Dependencies', 'Redis'],
    enAnswer: 'Manage complex jobs in BullMQ using FlowProducer. It defines tree-like parent-child hierarchies where a parent job is executed only after all its child jobs complete successfully, enabling reliable data pipelines.',
    bnAnswer: 'BullMQ-তে FlowProducer ব্যবহার করে জটিল টাস্কের নির্ভরতা তৈরি করা হয়। এটি ট্রি-আকারের প্যারেন্ট-চাইল্ড হাইয়ারার্কি তৈরি করে যেখানে চাইল্ড জবগুলো সফল হওয়ার পরই কেবল প্যারেন্ট জবটি রান হয়।',
    enExplanation: `### Explanation
In complex systems, jobs are rarely isolated. Often, you need to execute parallel processes, aggregate their results, and run a final finishing task:
1. **FlowProducer in BullMQ**:
   - Replaces flat job queues with hierarchical flows (directed acyclic graphs / tree nodes).
   - Each node contains a job definition, a queue name, and optional child jobs.
2. **Execution Flow**:
   - The queue processor automatically runs leaf children first.
   - Once all child jobs in a branch finish, their returned values are passed to the parent job as dependencies.
   - If any child job fails, the parent halts or remains in \`waiting-children\` state, preserving pipeline safety.

### Real-World Example
In a video transcoder service:
- To process a heavy movie, you split the video into 3 parts.
- Part 1, Part 2, and Part 3 are sent as 3 parallel child jobs.
- The parent job is "Merge and Upload".
- BullMQ runs all 3 transcoders concurrently. When all 3 finish successfully, the "Merge and Upload" parent job starts, accessing transcoded file paths to merge them into a single movie file.

### Best Practice
Keep child job payloads lean to prevent clogging Redis memory (store paths to AWS S3 instead of raw binary data). Configure retries on child jobs so temporary failures can be resolved before failing the parent flow.

### Common Mistakes
Not passing the results of child jobs correctly to the parent processor, forcing developers to run manual database queries inside the parent job to locate raw chunks.

### Code Example
\`\`\`typescript
import { FlowProducer, Queue } from 'bullmq';

const flowProducer = new FlowProducer();

async function createVideoTranscodeFlow() {
  // Tree Structure: Merge runs ONLY after Chunk 1 and Chunk 2 finish!
  const flow = await flowProducer.add({
    name: 'merge-video-chunks',
    queueName: 'uploader-queue',
    data: { outputName: 'final_movie.mp4' },
    children: [
      {
        name: 'transcode-chunk-1',
        queueName: 'transcoder-queue',
        data: { chunkPath: 's3://temp/chunk1.avi' }
      },
      {
        name: 'transcode-chunk-2',
        queueName: 'transcoder-queue',
        data: { chunkPath: 's3://temp/chunk2.avi' }
      }
    ]
  });
  console.log('Flow created with ID:', flow.job.id);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জটিল সিস্টেমে ব্যাকগ্রাউন্ড কাজগুলো একে অপরের ওপর নির্ভরশীল হতে পারে:
১. **FlowProducer (BullMQ)**:
   - এটি সমতল কিউ-র পরিবর্তে ডাইরেকটেড অ্যাসাইক্লিক গ্রাফ (DAG) বা ট্রি-সদৃশ চাইল্ড-প্যারেন্ট কাঠামো গঠন করে।
   - এতে প্যারেন্ট জব তখনই সচল হয় যখন তার সাথে সংযুক্ত চাইল্ড জবগুলো সফলভাবে শেষ হয়।
২. **কাজের গতিপ্রকৃতি**:
   - লিফ বা চাইল্ড জবগুলো প্রথমে রান করা হয়।
   - চাইল্ড জবের রিটার্ন ডাটা বা ফাইল লোকেশন প্যারেন্ট জবের ইনপুট প্যারামিটার হিসেবে অটোমেটিক ইনজেক্ট হয়।
   - কোনো চাইল্ড ফেইল হলে মূল প্যারেন্ট জব রান হবে না, যা ত্রুটিপূর্ণ বা অসম্পূর্ণ ফাইল জেনারেশন রোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ভিডিও ট্রান্সকোডার সার্ভিসে:
- একটি বড় ভিডিও ফাস্ট প্রসেস করতে ২ ভাগে ভাগ করে ২টি ওয়ার্কারকে চাইল্ড হিসেবে অ্যাসাইন করা হলো।
- মেইন প্যারেন্ট জব হলো "মার্জ এবং আপলোড"।
- BullMQ দুটি চাইল্ড একই সাথে সচল করে কোডিং সম্পন্ন করবে। দুটি কাজ শেষ হওয়া মাত্র "মার্জ এবং আপলোড" স্টার্ট হয়ে দুটি অংশ জোড়া দিয়ে একটি এমপি৪ ফাইল বানিয়ে ক্লাউডে আপলোড করবে।

### উত্তম অনুশীলন
জবের ডেটা পে-লোডের আকার ছোট রাখুন। রেডিসের র‍্যাম বাঁচাতে জবে ফিজিক্যাল ডাটা না রেখে S3 ইউআরএল বা ফাইল পাথ ব্যবহার করুন। চাইল্ড জবে অবশ্যই রি-ট্রাই সেট করে রাখুন যাতে হালকা নেটের কারণে প্যারেন্ট পাইপলাইন ক্র্যাশ না করে।

### সাধারণ ভুলসমূহ
প্যারেন্ট জবে চাইল্ডের আউটপুট হ্যান্ডেল না করে ম্যানুয়ালি ডাটাবেজ কোয়েরি করা, যা FlowProducer-এর ডাটা বাইন্ডিং ফিচারকে অকার্যকর করে দেয়।

### Code Example
\`\`\`typescript
// BullMQ-তে FlowProducer ব্যবহার করে ডিপেন্ডেন্সি ফ্লো তৈরি
import { FlowProducer } from 'bullmq';

const flowProducer = new FlowProducer();

async function createVideoTranscodeFlow() {
  // Chunk 1 এবং Chunk 2 শেষ হওয়ার পর merge-video-chunks রান হবে
  const flow = await flowProducer.add({
    name: 'merge-video-chunks',
    queueName: 'uploader-queue',
    data: { outputName: 'final_movie.mp4' },
    children: [
      {
        name: 'transcode-chunk-1',
        queueName: 'transcoder-queue',
        data: { chunkPath: 's3://temp/chunk1.avi' }
      },
      {
        name: 'transcode-chunk-2',
        queueName: 'transcoder-queue',
        data: { chunkPath: 's3://temp/chunk2.avi' }
      }
    ]
  });
  console.log('Flow created with ID:', flow.job.id);
}
\`\`\``
  },
  {
    id: 'other-topics-75',
    title: 'How do you run multi-document ACID transactions in MongoDB/Mongoose?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Mongoose', 'MongoDB Transactions', 'ACID Compliance', 'Replica Sets', 'Database Security'],
    enAnswer: 'Run transactions using session.startTransaction() in Mongoose. You must pass the session option to all read/write queries, and invoke commitTransaction() or abortTransaction() to guarantee atomic execution.',
    bnAnswer: 'Mongoose-এ session.startTransaction() দিয়ে ট্রানজ্যাকশন সচল করা হয়। কুয়েরি ও রাইট অপারেশনে session অপশনটি পাস করতে হবে এবং commitTransaction() বা abortTransaction() কল করতে হবে।',
    enExplanation: `### Explanation
MongoDB supports multi-document ACID transactions across replica sets:
1. **Sessions**: Transactions require a client session (\`connection.startSession()\`).
2. **Start & Run**: Call \`session.startTransaction()\`. All operations within this block must pass \`{ session }\` in their configuration options.
3. **Commit/Abort**:
   - \`session.commitTransaction()\` writes changes permanently.
   - \`session.abortTransaction()\` rolls back all updates if an exception is caught.
4. **Prerequisite**: Transactions only work on Replica Sets or Sharded Clusters, not on standalone MongoDB servers.

### Real-World Example
In a e-commerce checkout:
- Step 1: Create an Order record (\`Orders.create(...)\`).
- Step 2: Deduct money from User wallet (\`Users.updateOne(...)\`).
- Step 3: Decrease item stock count (\`Products.updateOne(...)\`).
- If step 3 fails because the item is out of stock, the wallet deduction in step 2 must be reversed to avoid taking money without shipping items. Wrapping this inside a transaction automatically rolls back wallet deductions on failure.

### Best Practice
Always use \`withTransaction\` helper in Mongoose. It handles automatic retry logic for transient commit errors (like network blips) which can occur in distributed replica sets.

### Common Mistakes
Forgetting to pass the \`session\` object in the query options (e.g. \`User.create([userData], { session })\`), causing those specific operations to run outside the transaction, bypassing rollback protection.

### Code Example
\`\`\`typescript
import mongoose from 'mongoose';

async function processECommerceCheckout(userId: string, productId: string, price: number) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1. Deduct balance from user wallet (passing session!)
    const user = await mongoose.model('User').findOneAndUpdate(
      { _id: userId, balance: { $gte: price } },
      { $inc: { balance: -price } },
      { session, new: true }
    );
    if (!user) throw new Error('Insufficient wallet balance');

    // 2. Reduce product inventory stock (passing session!)
    const product = await mongoose.model('Product').findOneAndUpdate(
      { _id: productId, stock: { $gt: 0 } },
      { $inc: { stock: -1 } },
      { session, new: true }
    );
    if (!product) throw new Error('Product is out of stock');

    // 3. Commit all changes atomically
    await session.commitTransaction();
    console.log('Transaction completed successfully.');
  } catch (error) {
    // Abort and roll back database updates to original state
    await session.abortTransaction();
    console.error('Checkout failed. Rolled back changes:', (error as Error).message);
  } finally {
    session.endSession();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি-তে একাধিক কালেকশনের মধ্যে ACID ট্রানজ্যাকশন সম্পন্ন করতে মঙ্গুজ সেশন ব্যবহার করা হয়:
১. **সেশন শুরু**: প্রথমে ডাটাবেজ সেশন ক্লায়েন্ট শুরু করতে হয় (\`mongoose.startSession()\`)।
২. **ট্রানজ্যাকশন চালু**: সেশনে \`startTransaction()\` রান করতে হবে। এর আন্ডারে করা প্রতিটি ক্রিয়েট, রিড বা আপডেট অপারেশনে প্যারামিটার হিসেবে \`{ session }\` পাস করতে হবে।
৩. **কমিট বা রrollback**:
   - কাজ সফল হলে \`commitTransaction()\` দিয়ে ডাটা পার্মানেন্টলি সেভ করা হয়।
   - কোনো এরর পেলে \`abortTransaction()\` দিয়ে সব কাজ বাতিল করে পূর্বের অবস্থায় ফিরিয়ে নেওয়া হয়।
৪. **পূর্বশর্ত**: ট্রানজ্যাকশন কেবল Replica Set বা Sharded ক্লাস্টারে কাজ করে, স্ট্যান্ডঅ্যালোন মঙ্গোডিবিতে চলে না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স পেমেন্ট সিস্টেমে:
- অর্ডার ক্রিয়েট হলো, এরপর ইউজারের ব্যালেন্স থেকে ১০০ টাকা কাটা হলো, এবং শেষে স্টক থেকে ১ পিস প্রোডাক্ট কমানো হলো।
- যদি প্রোডাক্ট স্টক কমানোর সময় সার্ভার দেখে যে প্রোডাক্ট শেষ, তবে ট্রানজ্যাকশনটি ফেইল করবে এবং ইউজারের একাউন্ট থেকে কেটে নেওয়া ১০০ টাকা অটোমেটিক রিফান্ড বা রোলব্যাক হয়ে যাবে।

### উত্তম অনুশীলন
ম্যানুয়ালি ট্রানজ্যাকশন না লিখে মঙ্গুজের বিল্ট-ইন \`session.withTransaction()\` ব্যবহার করুন। এটি কোনো সাময়িক ডিস্ট্রিবিউটেড ল্যাগ বা এরর থাকলে অটোমেটিক রিকোয়েস্ট রি-ট্রাই করে।

### সাধারণ ভুলসমূহ
কোয়েরি প্যারামিটারে সেশন পাস করতে ভুলে যাওয়া (যেমন: \`User.create(data)\` এর বদলে \`User.create([data], { session })\` না লেখা)। এর ফলে ওই কমান্ডটি ট্রানজ্যাকশনের বাইরে চলে যায় এবং রোলব্যাক ট্র্যাকিং কাজ করে না।

### Code Example
\`\`\`typescript
// মঙ্গুজ দিয়ে ট্রানজ্যাকশন এবং রোলব্যাক হ্যান্ডেল করার নিয়ম
import mongoose from 'mongoose';

async function processECommerceCheckout(userId: string, productId: string, price: number) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // ১. ইউজারের ব্যালেন্স কমানো হচ্ছে (session পাস করা হয়েছে)
    const user = await mongoose.model('User').findOneAndUpdate(
      { _id: userId, balance: { $gte: price } },
      { $inc: { balance: -price } },
      { session, new: true }
    );
    if (!user) throw new Error('Insufficient wallet balance');

    // ২. প্রোডাক্ট স্টক কমানো হচ্ছে (session পাস করা হয়েছে)
    const product = await mongoose.model('Product').findOneAndUpdate(
      { _id: productId, stock: { $gt: 0 } },
      { $inc: { stock: -1 } },
      { session, new: true }
    );
    if (!product) throw new Error('Product is out of stock');

    // ৩. ট্রানজ্যাকশন কমিট বা সফল ডিক্লেয়ার করা হলো
    await session.commitTransaction();
    console.log('Transaction completed successfully.');
  } catch (error) {
    // ডাটাবেজের সব চেঞ্জ বাতিল করে রোলব্যাক করা হচ্ছে
    await session.abortTransaction();
    console.error('Checkout failed. Rolled back changes:', (error as Error).message);
  } finally {
    session.endSession();
  }
}
\`\`\``
  },
  {
    id: 'other-topics-76',
    title: 'How do you optimize MongoDB Aggregation Pipelines to prevent memory limit errors?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['MongoDB', 'Aggregation Pipeline', 'Performance Optimization', 'Indexes', 'Memory Limits'],
    enAnswer: 'Optimize aggregation pipelines by placing $match and $project filters at the very beginning to utilize indexes, limiting sort memory issues using allowDiskUse: true, and avoiding heavy sub-document joins with $lookup where possible.',
    bnAnswer: 'ইনডেক্স ব্যবহার করতে অ্যাগ্রিগেশন পাইপলাইনের শুরুতেই $match এবং $project ফিল্টার যুক্ত করা, সর্ট মেমোরি লিমিট এড়াতে allowDiskUse: true ব্যবহার করা এবং $lookup দিয়ে ভারী জয়েন করা কমানোর মাধ্যমে অ্যাগ্রিগেশন অপ্টিমাইজ করা হয়।',
    enExplanation: `### Explanation
MongoDB limits aggregation stage operations to **100MB of RAM** by default. If a sorting or grouping stage exceeds this memory ceiling, MongoDB throws a crash error:
1. **Pipeline Execution Order**:
   - Place \`$match\` and \`$sort\` stages at the very top. This allows MongoDB to utilize indexes. If placed after \`$project\` or \`$unwind\`, indexing benefits are lost, triggering slow database scans.
2. **Filtering Early**:
   - Reduce the number of documents passed down the pipe. Execute \`$match\` filters first, then \`$project\` to strip unused columns.
3. **\`allowDiskUse: true\`**:
   - Configures MongoDB to write temporary buffers to disk if a sorting/grouping step exceeds 100MB RAM.
4. **$lookup optimization**:
   - Joining large collections generates huge objects. Index the join keys on both collections.

### Real-World Example
In a report generation dashboard of a SaaS application processing millions of events:
- A query sorting events by date throws \`QueryExceededMemoryLimitNoDiskUseAllowed\` error.
- Adding \`{ allowDiskUse: true }\` resolves the crash.
- Further optimizing the pipeline by moving the \`$match\` filter before the \`$sort\` stage reduces execution time from 8 seconds to 120ms by utilizing compound date indexes.

### Best Practice
Always run \`.explain('executionStats')\` on aggregation pipelines to analyze query execution plans. Ensure that stages are running in index scans (\`IXSCAN\`) rather than full collection scans (\`COLLSCAN\`).

### Common Mistakes
Placing \`$unwind\` stages before \`$match\` stages. This forces MongoDB to expand every sub-document in the database prior to filtering, bloating memory usage and killing throughput.

### Code Example
\`\`\`typescript
import mongoose from 'mongoose';

async function getCompanyBillingReport(companyId: string) {
  const BillingModel = mongoose.model('Billing');

  const report = await BillingModel.aggregate([
    // 1. Match early to use index (companyId index)
    { $match: { companyId: new mongoose.Types.ObjectId(companyId), status: 'paid' } },
    
    // 2. Sort on indexed date field before projecting or unwinding
    { $sort: { billingDate: -1 } },
    
    // 3. Project only required fields to minimize pipeline payload sizes
    { $project: { amount: 1, billingDate: 1, items: 1 } },
    
    // 4. Flatten arrays for calculation
    { $unwind: '$items' },
    
    // 5. Group values
    {
      $group: {
        _id: '$companyId',
        totalRevenue: { $sum: '$amount' },
        itemCount: { $sum: 1 }
      }
    }
  ]).allowDiskUse(true); // Allow disk caching if memory exceeds 100MB

  return report;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি অ্যাগ্রিগেশন পাইপলাইনের প্রতিটা স্টেজের জন্য মেমোরি লিমিট ডিফল্টভাবে **১০০ মেগাবাইট (100MB)**। সর্টিং বা গ্রুপিং করতে গিয়ে র‍্যামের লিমিট ক্রস করলে কুয়েরি ক্র্যাশ করে:
১. **পাইপলাইন ধাপের সিকোয়েন্স**:
   - পাইপলাইনের একদম শুরুতে \`$match\` ও \`$sort\` বসান। এর ফলে মঙ্গোডিবি ইনডেক্স স্ক্যান করতে পারে। \`$project\` বা \`$unwind\` এর পর বসালে ইনডেক্স কাজ করে না।
২. **ফিল্টারিং ও প্রজেক্টিং**:
   - শুরুতেই ডাটা ছেঁকে ছোট করে আনুন। অপ্রয়োজনীয় কলাম বাদ দিতে প্রথম দিকেই \`$project\` লিখুন।
৩. **\`allowDiskUse: true\`**:
   - এটি ১০০ মেগাবাইট মেমোরির বেশি ডাটা প্রসেস করার সময় মঙ্গোডিবিকে সার্ভার ড্রাইভে টেম্পোরারি ফাইল তৈরি করার অনুমতি দেয়।
৪. **$lookup জয়েন অপ্টিমাইজেশন**:
   - ফরেন কালেকশনের জয়েন কী-তে অবশ্যই ইনডেক্স সেট করে রাখুন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাশ (SaaS) প্রজেক্টে কোটি কোটি ডাটার উপর রিপোর্ট জেনারেট করার সময়:
- ক্রিয়েটেড ডেট দিয়ে সর্ট করতে গিয়ে \`QueryExceededMemoryLimitNoDiskUseAllowed\` এরর দিয়ে রিপোর্ট ব্লক হয়ে গেল।
- কোডে \`.allowDiskUse(true)\` সেট করায় ক্র্যাশ ঠিক হলো।
- এরপর পাইপলাইনে \`$sort\` কে \`$match\` এর ঠিক পরে এনে ইনডেক্স একটিভ করায় রানটাইম ৮ সেকেন্ড থেকে কমে মাত্র ১২০ মিলি-সেকেন্ডে নেমে এলো।

### উত্তম অনুশীলন
অ্যাগ্রিগেশন কুয়েরি রান করার পূর্বে অবশ্যই \`.explain('executionStats')\` মেথড দিয়ে কুয়েরি প্ল্যান চেক করে নিন যে এটি \`COLLSCAN\` (সম্পূর্ণ টেবিল স্ক্যান) এর বদলে \`IXSCAN\` (ইনডেক্স স্ক্যান) ব্যবহার করছে কিনা।

### সাধারণ ভুলসমূহ
ফিল্টার (\`$match\`) করার আগেই \`$unwind\` কল করা। এর ফলে ডাটাবেজের সব রেকর্ড স্প্লিট হয়ে মেমরির আকার কয়েকগুণ বাড়িয়ে দেয় এবং সিস্টেম ডাউন হয়ে যায়।

### Code Example
\`\`\`typescript
// অপ্টিমাইজড মঙ্গোডিবি অ্যাগ্রিগেশন পাইপলাইন
import mongoose from 'mongoose';

async function getCompanyBillingReport(companyId: string) {
  const BillingModel = mongoose.model('Billing');

  const report = await BillingModel.aggregate([
    // ১. শুরুতেই ম্যাচ ফিল্টার দিয়ে ডাটা ছেঁকে ইনডেক্স ব্যবহার করা হলো
    { $match: { companyId: new mongoose.Types.ObjectId(companyId), status: 'paid' } },
    
    // ২. ইনডেক্সড ডেট ফিল্ড দিয়ে প্রথম দিকেই সর্ট সম্পন্ন করা হলো
    { $sort: { billingDate: -1 } },
    
    // ৩. শুধুমাত্র দরকারী কলাম প্রজেক্ট করে মেমোরি লোড কমানো হলো
    { $project: { amount: 1, billingDate: 1, items: 1 } },
    
    // ৪. সাব-আইটেম ফ্ল্যাট করা হলো
    { $unwind: '$items' },
    
    // ৫. গ্রুপিং ক্যালকুলেশন
    {
      $group: {
        _id: '$companyId',
        totalRevenue: { $sum: '$amount' },
        itemCount: { $sum: 1 }
      }
    }
  ]).allowDiskUse(true); // ১০০ মেগাবাইট ক্রস করলে ড্রাইভে টেম্প ফাইল লিখবে

  return report;
}
\`\`\``
  },
  {
    id: 'other-topics-77',
    title: 'Explain the difference between Redis MULTI/EXEC transactions and Lua Scripting.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Redis', 'Transactions', 'Lua Scripting', 'Atomicity', 'Database Engines'],
    enAnswer: 'MULTI/EXEC queues commands for batch execution but does not support conditional read-then-write logic inside the transaction block. Lua scripts run atomically in a single execution loop, allowing database reads to dictate subsequent writes.',
    bnAnswer: 'MULTI/EXEC ট্রানজ্যাকশন সব কম্যান্ড কিউতে জমা করে একসাথে রান করে কিন্তু মাঝপথে কন্ডিশনাল রিড-রাইট লজিক সাপোর্ট করে না। আর Lua স্ক্রিপ্ট সম্পূর্ণ এটমিক মেথডে রান হয় এবং রিড অপারেশনের ওপর ভিত্তি করে রাইট ডিক্টেট করতে পারে।',
    enExplanation: `### Explanation
Redis transaction models determine how commands are grouped and executed:
1. **MULTI / EXEC (Basic Transactions)**:
   - Command Queue: When you call \`MULTI\`, Redis queues all subsequent commands in memory without running them.
   - Atomic Execution: When you call \`EXEC\`, Redis runs the entire queue in sequence.
   - **No Mid-Transaction Reads**: You cannot read a key in line 2 and use its value to execute a conditional write in line 3. You can only watch keys using \`WATCH\` to abort if they are modified.
2. **Lua Scripts (\`EVAL\`)**:
   - Fully Programmable & Atomic: The entire script is uploaded and executed as a single blocking operation on the Redis main thread.
   - No other client commands can run during the script's execution.
   - **Conditional Control**: You can run \`redis.call('get')\`, inspect the string using Lua \`if/else\`, and decide to update other keys, providing absolute atomicity.

### Real-World Example
- **MULTI / EXEC**: Transferring balances between two accounts: deduct $10 from Key A and add $10 to Key B. No conditional logic is needed; both updates are queued and pushed.
- **Lua Scripting**: Implementing a rate limiter. You must get the API call counter, check if it exceeds 100, increment it if under 100, and set an expiry. If you did this in Node code, a race condition could allow 10 clients to bypass the limit simultaneously. Lua handles this check-and-set atomically in Redis.

### Best Practice
Use MULTI/EXEC for basic pipelining or state updates. Use Lua scripting for concurrent checks, inventory reservations, or complex locks where read-then-write operations must be protected from race conditions.

### Common Mistakes
Writing heavy loops in Lua scripts. Because Redis is single-threaded, a Lua script that takes 2 seconds to calculate will block all other incoming commands, causing application-wide request timeout failures.

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const redis = createClient();
redis.connect();

// Atomically decrement stock only if it is greater than zero
async function purchaseTicketLua(ticketKey: string): Promise<boolean> {
  const luaScript = \`
    local stock = tonumber(redis.call('get', KEYS[1]))
    if stock and stock > 0 then
      redis.call('decr', KEYS[1])
      return 1
    else
      return 0
    end
  \`;

  // Run Lua script atomically inside Redis
  const result = await redis.eval(luaScript, {
    keys: [ticketKey]
  });

  return result === 1;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিস ডাটাবেজে কনকারেন্সি ও ট্রানজ্যাকশন হ্যান্ডেল করার দুটি প্রধান উপায় রয়েছে:
১. **MULTI / EXEC (অ্যাটমিক কম্যান্ড কিউ)**:
   - এটি একের পর এক কমান্ড কিউ বা বাফারে জমা করে। \`EXEC\` কল করার পর সবগুলো কমান্ড এক টানে সিকোয়েন্সিয়ালি রান হয়।
   - এর সীমাবদ্ধতা হলো, ট্রানজ্যাকশন চলাকালীন কোনো কী-এর ভ্যালু রিড করে সেই অনুযায়ী পরবর্তী আপডেট বা কন্ডিশন সেট করা যায় না। এর জন্য \`WATCH\` কমান্ড দরকার হয়।
২. **Lua Scripting (\`EVAL\`)**:
   - এটি রেডিসের ভেতর সরাসরি স্ক্রিপ্ট রান করার সুবিধা দেয়।
   - সম্পূর্ণ স্ক্রিপ্টটি একটি সিঙ্গেল কমান্ড হিসেবে এটমিক মেথডে এক্সিকিউট হয়। স্ক্রিপ্ট চলাকালীন অন্য কোনো ক্লায়েন্ট রিকোয়েস্ট প্রসেস হয় না।
   - স্ক্রিপ্টের ভেতর সরাসরি ডাটা রিড করে লজিক্যাল \`if/else\` কন্ডিশন বসিয়ে রাইট করা সম্ভব।

### বাস্তব-ভিত্তিক উদাহরণ
- **MULTI / EXEC**: অ্যাকাউন্ট A থেকে ১০ টাকা কেটে অ্যাকাউন্ট B-তে যোগ করা। এখানে ডাটা রিড করার কন্ডিশন নেই, সরাসরি কম্যান্ড ব্যাচ পুশ করলেই হয়।
- **Lua Scripting**: টিকিট বুকিং সিস্টেম। টিকিট এভেলেবল (stock > 0) থাকলে তবেই স্টক ১টি কমাবে এবং বুকিং আইডি জেনারেট করবে। নোড জেএস কোডে রিড ও রাইট আলাদা করতে গেলে রেস কন্ডিশনের কারণে ১টি সিটের বিপরীতে একাধিক টিকিট বিক্রি হয়ে যাওয়ার চান্স থাকে। Lua স্ক্রিপ্ট এটি ডাটাবেজের ভেতরেই এটমিক ভাবে সমাধান করে।

### উত্তম অনুশীলন
সাধারণ ব্যাচ অপারেশনের জন্য MULTI/EXEC বা পাইপলাইনিং ব্যবহার করুন। ডিস্ট্রিবিউটেড লক বা স্টক বুকিংয়ের মতো রেস-কন্ডিশন এড়ানোর কাজে Lua স্ক্রিপ্ট ব্যবহার করুন।

### সাধারণ ভুলসমূহ
Lua স্ক্রিপ্টের ভেতর বড় লুপ বা ভারী লজিক রান করা। রেডিস সিঙ্গেল-থ্রেডেড হওয়ায় আপনার স্ক্রিপ্ট প্রসেস করতে ১ সেকেন্ড বেশি নিলেও সেই সময়ে পুরো সাইটের সকেট কানেকশন ও এপিআই রিকোয়েস্ট হ্যাং হয়ে থাকবে।

### Code Example
\`\`\`typescript
// রেডিস Lua স্ক্রিপ্ট দিয়ে টিকিট বুকিংয়ের অ্যাটমিক স্টক চেক ও সেল
import { createClient } from 'redis';
const redis = createClient();
redis.connect();

async function purchaseTicketLua(ticketKey: string): Promise<boolean> {
  const luaScript = \`
    local stock = tonumber(redis.call('get', KEYS[1]))
    if stock and stock > 0 then
      redis.call('decr', KEYS[1])
      return 1
    else
      return 0
    end
  \`;

  // রেডিস ইঞ্জিনে স্ক্রিপ্টটি ইভ্যালুয়েট করা হচ্ছে
  const result = await redis.eval(luaScript, {
    keys: [ticketKey]
  });

  return result === 1;
}
\`\`\``
  },
  {
    id: 'other-topics-78',
    title: 'Explain Cache Stampede (Dogpiling) and how to mitigate it using locking or probabilistic early expiration.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Caching', 'Cache Stampede', 'Redis', 'Performance Tuning', 'Distributed Systems'],
    enAnswer: 'Cache stampede happens when a high-traffic cache key expires, forcing thousands of concurrent requests to hit the database simultaneously. Mitigate this using mutex locks (only one worker regenerates the cache) or XFetch (probabilistic early expiration).',
    bnAnswer: 'ক্যাশের এক্সপায়ারি ডেট শেষ হওয়ার পর হাজার হাজার রিকোয়েস্ট একসাথে মেইন ডাটাবেজে আছড়ে পড়লে ক্যাশ স্ট্যাম্পিড (ডগপাইলিং) হয়। মিউটেক্স লক অথবা প্রোবাবিলিস্টিক আর্লি এক্সপায়ারেশন (XFetch) দিয়ে এটি সমাধান করা যায়।',
    enExplanation: `### Explanation
Under heavy traffic, cache invalidation can cause a cascading system outage known as **Cache Stampede** or **Dogpiling**:
1. **The Invalidation Crash**:
   - A hot cache key (like homepage config) expires.
   - 10,000 concurrent users hit the server.
   - The server detects a cache miss. All 10,000 processes query the SQL database at the same instant.
   - The database CPU utilization spikes to 100%, causing the application to throw timeout errors.
2. **Mitigation 1: Mutex Locking (Single Lock)**:
   - When a cache miss occurs, the worker attempts to acquire a short-lived lock (e.g., Redis \`SET lockKey true NX EX 5\`).
   - Only the worker that acquires the lock queries the database and regenerates the cache.
   - Other workers wait, sleep for 50ms, and query the cache again.
3. **Mitigation 2: Probabilistic Early Expiration (XFetch)**:
   - The worker dynamically calculates if it should update the cache *before* it physically expires.
   - Probability of update: $P = -\\beta \\cdot \\delta \\cdot \\ln(\\text{rand}())$. If this exceeds the remaining TTL, the worker updates the cache in the background while serving the active cached data, preventing cache misses completely.

### Real-World Example
In a news portal during breaking news:
- The article cache expires every 5 minutes.
- If 50,000 users refresh the page, the database crashes instantly on expiration.
- Implementing a Redis Mutex lock ensures only 1 backend worker updates the article data, while the other 49,999 requests wait for 50ms and read the newly generated cache smoothly.

### Best Practice
Use background cache warming (cron jobs updating keys) for ultra-hot static configurations. For dynamic keys, use distributed locks (\`redlock\` or simple Redis SETNX) to ensure only one database query runs per key miss.

### Common Mistakes
Setting cache expiration (TTL) to exactly the same second on multiple related keys, causing them all to miss at once and crash the SQL server.

### Code Example
\`\`\`typescript
import { createClient } from 'redis';
const redis = createClient();

async function getCachedDataWithLock(key: string, dbFetch: () => Promise<any>): Promise<any> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const lockKey = \`\${key}:lock\`;
  // Attempt to acquire lock for 5 seconds
  const acquiredLock = await redis.set(lockKey, 'locked', { NX: true, EX: 5 });

  if (acquiredLock) {
    try {
      // 1. Only this request queries the database
      const freshData = await dbFetch();
      // 2. Set key with 60s TTL
      await redis.set(key, JSON.stringify(freshData), { EX: 60 });
      return freshData;
    } finally {
      // 3. Release lock
      await redis.del(lockKey);
    }
  } else {
    // Wait 100ms and retry reading cache
    await new Promise((resolve) => setTimeout(resolve, 100));
    return getCachedDataWithLock(key, dbFetch);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
হুট করে ক্যাশের মেয়াদ শেষ হওয়ার সাথে সাথে হাজার হাজার ইউজার ডাটাবেজ কোয়েরি করার ফলে সার্ভার ক্র্যাশ করাকে ক্যাশ স্ট্যাম্পিড বা ডগপাইলিং বলা হয়:
১. **ক্র্যাশের কারণ**:
   - একটি হট ক্যাশ কী (যেমন: হোমপেজ ডাটা) এক্সপায়ার হলো।
   - একই সেকেন্ডে আসা ১০ হাজার ইউজার ক্যাশ না পেয়ে সবাই একযোগে রিলেশনাল ডাটাবেজে কুয়েরি পাঠাল।
   - ডাটাবেজের প্রসেসর লোড ১০০% উঠে কানেকশন জ্যাম তৈরি করে এবং পুরো প্রজেক্ট অফলাইন হয়ে যায়।
২. **মিউটেক্স লক সমাধান**:
   - ক্যাশ মিস হলে প্রথম আসা রিকোয়েস্টটি রেডিসে একটি শর্ট-টার্ম লক তৈরি করে (\`SET lockKey true NX EX 5\`)।
   - কেবল লক পাওয়া রিকোয়েস্টটি ডাটাবেজ থেকে ডাটা নিয়ে ক্যাশ আপডেট করবে।
   - বাকি ৯,৯৯৯টি রিকোয়েস্ট লক না পেয়ে ১০০ মিলি-সেকেন্ড স্লিপ মোডে থাকবে এবং এরপর ডাটাবেজে না গিয়ে রিফ্রেসড ক্যাশ রিড করবে।
৩. **প্রোবাবিলিস্টিক আর্লি এক্সপায়ারেশন (XFetch)**:
   - একটি গাণিতিক সূত্রের ভিত্তিতে মেয়াদ শেষ হওয়ার কিছুক্ষণ পূর্বেই ব্যাকগ্রাউন্ডে ডাটাবেজ থেকে ক্যাশ আপডেট করে নেওয়া হয় যাতে ডিরেক্ট ক্যাশ মিসের ঘটনা না ঘটে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইভ খেলাধুলার স্কোরবোর্ডে:
- প্রতি ১০ সেকেন্ড পর পর ক্যাশ ক্লিয়ার হয়। লাখ লাখ ইউজার অ্যাক্টিভ থাকার কারণে মেয়াদ শেষ হওয়া মাত্রই ডাটাবেজ লোড সামলাতে না পেরে হ্যাং হয়ে যায়।
- মিউটেক্স লক যুক্ত করায় প্রতি ১০ম সেকেন্ডের মাথায় কেবল ১ম ইউজারের পিসি থেকে ডাটাবেজে কুয়েরি গিয়ে ডাটা ক্যাশ আপডেট হবে এবং বাকি সব ইউজার ক্যাশ লোড পেয়ে কোনো ল্যাগ ছাড়াই স্কোর দেখতে পাবেন।

### উত্তম অনুশীলন
ডাটাবেজের কোলাহল কমাতে লাইভ ডাটার জন্য ব্যাকগ্রাউন্ড ক্রন জব দিয়ে ক্যাশ ফাইল জেনারেট করে রাখুন। ডাইনামিক ক্যাশে ডগপাইলিং ঠেকাতে রেডিস \`NX\` ডিরেক্টিভ দিয়ে ডিস্ট্রিবিউটেড লক সাজান।

### সাধারণ ভুলসমূহ
একাধিক সম্পর্কিত ক্যাশ কী-এর মেয়াদ (TTL) একই সেকেন্ডে শেষ হওয়া সেট করা, যার ফলে সবগুলো একসাথে রিফ্রেশ হতে গিয়ে ডেটাবেজ ক্র্যাশ করে।

### Code Example
\`\`\`typescript
// রেডিস দিয়ে ক্যাশ স্ট্যাম্পিড রোধ করতে মিউটেক্স লক ইমপ্লিমেন্টেশন
import { createClient } from 'redis';
const redis = createClient();

async function getCachedDataWithLock(key: string, dbFetch: () => Promise<any>): Promise<any> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const lockKey = \`\${key}:lock\`;
  // ৫ সেকেন্ডের জন্য লক নেওয়ার ট্রাই
  const acquiredLock = await redis.set(lockKey, 'locked', { NX: true, EX: 5 });

  if (acquiredLock) {
    try {
      // ১. কেবল লক পাওয়া ইউজারটি ডাটাবেজ হিট করবে
      const freshData = await dbFetch();
      // ২. ৬০ সেকেন্ডের জন্য ক্যাশ সেট করা হচ্ছে
      await redis.set(key, JSON.stringify(freshData), { EX: 60 });
      return freshData;
    } finally {
      // ৩. ডাটা সেভের পর লক রিলিজ
      await redis.del(lockKey);
    }
  } else {
    // লক না পেলে ১০০ মিলি-সেকেন্ড ওয়েট করে পুনরায় ট্রাই
    await new Promise((resolve) => setTimeout(resolve, 100));
    return getCachedDataWithLock(key, dbFetch);
  }
}
\`\`\``
  },
  {
    id: 'other-topics-79',
    title: 'How do you design custom conflict resolution strategies in RxDB for offline synchronization?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['RxDB', 'Conflict Resolution', 'Offline Sync', 'Database Synchronization', 'IndexedDB'],
    enAnswer: 'Implement custom RxDB conflict resolution by defining a conflictHandler function inside the collection schema. This function compares client and server document hashes, merges differences, and returns the resolved document.',
    bnAnswer: 'RxDB কালেকশন স্কিমার ভেতর একটি conflictHandler ফাংশন ডিফাইন করে কাস্টম কনফ্লিক্ট রেজোলিউশন করা হয়। এই ফাংশনটি লোকাল ও রিমোট ডকুমেন্টের তুলনা করে ডাটা মার্জ করে ফাইনাল ডকুমেন্ট রিটার্ন করে।',
    enExplanation: `### Explanation
In offline-first architectures, conflicts occur when a document is modified locally while offline, and simultaneously modified by another client on the server:
1. **Conflict Detection**: RxDB tracks document states using revision hashes (\`_rev\`). When syncing, if the remote document version is newer and different, the sync protocol triggers a conflict.
2. **Conflict Handler**:
   - A function that receives the local document version (\`localDocument\`) and the remote server version (\`realServerDocument\`).
   - Inside, you write merge logic.
   - Return \`{ resolvedDocument: mergedDoc }\`. RxDB writes this merged copy locally and syncs it back to the server, resolving the branch.

### Real-World Example
In a collaborative task manager:
- A task name is "Draft Blog".
- User A goes offline, updates the task description to "Draft Blog (Include SEO guidelines)".
- While User A is offline, User B updates the task description to "Draft Blog (Include Images)".
- When User A goes online, a conflict occurs.
- A custom conflict handler merges descriptions: "Draft Blog (Include SEO guidelines + Images)" and updates the record safely.

### Best Practice
Never use "last write wins" (overwriting server updates) for collaborative documents like documents or notebooks. Always write structural merge strategies (like diffing text fields or concatenating arrays) to preserve data integrity.

### Common Mistakes
Forgetting that conflict handlers run in client browsers. If the resolution code is too heavy or throws exceptions, the entire local database synchronization loop halts indefinitely.

### Code Example
\`\`\`typescript
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

const todoSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    title: { type: 'string' },
    updatedAt: { type: 'number' }
  },
  required: ['id', 'title', 'updatedAt']
};

// Custom conflict resolution strategy
const todoConflictHandler = async (input: any) => {
  const local = input.newDocumentState;
  const remote = input.realDocumentState;

  // Resolve conflict: Keep the one with the latest timestamp!
  if (local.updatedAt > remote.updatedAt) {
    return { resolvedDocumentState: local };
  }
  return { resolvedDocumentState: remote };
};

async function initDatabase() {
  const db = await createRxDatabase({
    name: 'todosdb',
    storage: getRxStorageDexie()
  });

  await db.addCollections({
    todos: {
      schema: todoSchema,
      conflictHandler: todoConflictHandler // Bind custom resolver!
    }
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অফলাইন-ফার্স্ট অ্যাপে কোনো ডকুমেন্ট যখন অফলাইনে থাকা অবস্থায় এডিট হয় এবং একই সময়ে অন্য ইউজার সার্ভারেও সেটি এডিট করেন, তখন কনফ্লিক্ট তৈরি হয়:
১. **কনফ্লিক্ট ডিটেকশন**: RxDB রিভিশন হ্যাশ (\`_rev\`) দিয়ে ওল্ড ও নিউজ ডেটার ট্র্যাক রাখে। সিঙ্ক করার সময় লোকাল ও রিমোট হ্যাশ অমিল থাকলে কনফ্লিক্ট ট্রিগার হয়।
২. **কনফ্লিক্ট হ্যান্ডলার**:
   - এটি একটি জাভাস্ক্রিপ্ট ফাংশন যা লোকাল ও সার্ভারের ওল্ড কপি দুটি প্যারামিটার হিসেবে রিসিভ করে।
   - ফাংশনের ভেতরে ডেভেলপাররা ডিসাইড করেন কোন ফিল্ডটি থাকবে বা কিভাবে দুটি ডাটা কম্বাইন হবে।
   - রিটার্ন করা \`{ resolvedDocumentState }\` ডাটাটি সিঙ্ক হয়ে ডাটাবেজ সচল রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নোড প্রজেক্টে:
- কাজের নাম "রিঅ্যাক্ট প্রজেক্ট"।
- অফলাইনে থাকা অবস্থায় ইউজার ১ নোটে লিখলেন "রেডক্স অ্যাড করতে হবে"।
- একই সময়ে অনলাইন থাকা অবস্থায় ইউজার ২ নোটে লিখলেন "সুইট অ্যালার্ট অ্যাড করতে হবে"।
- ইউজার ১ অনলাইনে আসলে কনফ্লিক্ট হ্যান্ডলার দুটি নোটের ডেট চেক করে রিঅ্যাক্ট প্রোজেক্টে দুটি কথাই কম্বাইন করে দিবে: "রেডক্স অ্যাড করতে হবে + সুইট অ্যালার্ট অ্যাড করতে হবে"।

### উত্তম অনুশীলন
গুরুত্বপূর্ণ নোটে কখনোই "Last Write Wins" (শেষে আসা রাইট আগের ডাটা মুছে ফেলবে) স্ট্র্যাটেজি ব্যবহার করবেন না। সম্ভব হলে টেক্সট মার্জ বা টাইমস্ট্যাম্প দেখে ডিশন নেওয়ার কোড সাজান।

### সাধারণ ভুলসমূহ
মনে রাখতে হবে যে কনফ্লিক্ট হ্যান্ডলার ব্রাউজারে রান করে। কোডটি যদি অতিরিক্ত ভারী হয় বা এরর দেয়, তবে অফলাইন ডাটা সিঙ্ক করার লুপ পুরোপুরি হ্যাং হয়ে যাবে।

### Code Example
\`\`\`typescript
// RxDB-তে কাস্টম কনফ্লিক্ট রেজোলিউশন হ্যান্ডলার সেটআপ
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

const todoSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    title: { type: 'string' },
    updatedAt: { type: 'number' }
  },
  required: ['id', 'title', 'updatedAt']
};

// কাস্টম হ্যান্ডলার: আপডেট টাইমস্ট্যাম্প চেক করে লেটেস্ট ডাটা রাখবে
const todoConflictHandler = async (input: any) => {
  const local = input.newDocumentState;
  const remote = input.realDocumentState;

  if (local.updatedAt > remote.updatedAt) {
    return { resolvedDocumentState: local };
  }
  return { resolvedDocumentState: remote };
};

async function initDatabase() {
  const db = await createRxDatabase({
    name: 'todosdb',
    storage: getRxStorageDexie()
  });

  await db.addCollections({
    todos: {
      schema: todoSchema,
      conflictHandler: todoConflictHandler // কাস্টম রিজলভার বাইন্ড করা হলো
    }
  });
}
\`\`\``
  },
  {
    id: 'other-topics-80',
    title: 'How do you design compound indexes and execute complex query logic using Dexie.js?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Dexie.js', 'Compound Indexes', 'Complex Queries', 'IndexedDB', 'Frontend Database'],
    enAnswer: 'Define compound indexes in Dexie by placing multi-field names inside brackets in store schemas (e.g. "[category+status]"). Query them using db.table.where("[category+status]").equals([catName, statusVal]) to avoid heavy javascript filtering.',
    bnAnswer: 'ডেক্সি স্কিমায় ব্র্যাকেটের ভেতর একাধিক ফিল্ড লিখে compound index ডিফাইন করা হয় (যেমন: "[category+status]")। এবং equals([cat, status]) দিয়ে কুয়েরি করে জাভাস্ক্রিপ্ট লুপ ফিল্টারিং এড়ানো যায়।',
    enExplanation: `### Explanation
IndexedDB does not support native SQL joins or complex SQL query statements. To execute efficient multi-field queries in Dexie.js, you must use Compound Indexes:
1. **Compound Index syntax**:
   - \`db.version(1).stores({ products: '++id, [category+price]' })\`
   - Configures IndexedDB to index the combination of both properties.
2. **Query Execution**:
   - Call \`.where('[category+price]').equals([targetCat, targetPrice])\`
   - Bypasses pulling all records into browser memory to filter manually in Javascript, running inside IndexedDB's native speed.
3. **Compound Range Queries**:
   - You can query ranges, e.g. querying products in category 'electronics' with price between $10 and $100 using Dexie's \`.between()\` method.

### Real-World Example
In a local email client database:
- You need to search for messages in the folder 'Inbox' that are marked as 'unread'.
- Doing \`db.messages.where('folder').equals('Inbox').filter(m => !m.read)\` is slow because it reads thousands of emails to filter them.
- Creating a compound index \`[folder+read]\` enables \`db.messages.where('[folder+read]').equals(['Inbox', 0]).toArray()\`. This queries the target records in less than 5ms.

### Best Practice
Only create compound indexes for fields that are constantly queried together. Adding too many indexes increases the local database write overhead and increases IndexedDB memory footprints in the browser.

### Common Mistakes
Forgetting that IndexedDB keys in compound indexes are case-sensitive, which can lead to empty result arrays if input search casing mismatches.

### Code Example
\`\`\`typescript
import Dexie from 'dexie';

class AppDatabase extends Dexie {
  products!: Dexie.Table<any, number>;

  constructor() {
    super('ShopDatabase');
    
    // Define schema with a compound index
    this.version(1).stores({
      products: '++id, name, [category+status]' // Compound index defined
    });
  }
}

const db = new AppDatabase();

async function getAvailableElectronics() {
  // Querying using the compound index for maximum speed
  const electronics = await db.products
    .where('[category+status]')
    .equals(['electronics', 'in-stock'])
    .toArray();

  return electronics;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্রাউজারের IndexedDB-তে এসকিউএল জয়েন বা কাস্টম কোয়েরি করার ব্যবস্থা নেই। একাধিক ফিল্ড ফিল্টার করার কুয়েরি ফাস্ট করতে Dexie.js-এ Compound Index ব্যবহার করা হয়:
১. **স্কিমা সিনট্যাক্স**:
   - \`[category+price]\` ব্র্যাকেট দিয়ে ডিক্লেয়ার করলে এটি একই সাথে দুটি ফিল্ড ইনডেক্স করে রাখে।
২. **কুয়েরি রান**:
   - \`where('[category+price]').equals(['electronics', 500])\` কল করলে ব্রাউজার মেমরিতে সব অবজেক্ট না এনেই ডাটাবেজ লেভেলে ফিল্টার করে সঠিক ডাটা পাঠায়।
   - এটি হাজার হাজার লোকাল অবজেক্টের জাভাস্ক্রিপ্ট লুপ ফিল্টারিং স্ক্র্যাপ করে ব্রাউজারের থ্রেড ফ্রি রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি অফলাইন ইমেইল ডাটাবেজে:
- আপনাকে 'Inbox' ফোল্ডারে থাকা 'unread' (না পড়া) ইমেইলগুলো লোড করতে হবে।
- সাধারণ ইনডেক্সে \`db.emails.where('folder').equals('Inbox')\` কোয়েরি করে লুপ চালিয়ে রিড কন্ডিশন চেক করা অত্যন্ত ধীরগতির।
- \`[folder+read]\` কম্পাউন্ড ইনডেক্স সেট করে ডিরেক্ট কুয়েরি করায় ব্রাউজার ১ সেকেন্ডের বদলে মাত্র ৫ মিলি-সেকেন্ডে হাজারটি ইমেইল থেকে আন-রিডগুলো লোড করে নেয়।

### উত্তম অনুশীলন
যে ফিল্ডগুলো সবসময় একসাথে চেক করা হয় (যেমন: ক্যাটাগরি ও এভেলেবিলিটি) কেবল তাদের জন্যই কম্পাউন্ড ইনডেক্স তৈরি করুন। বেশি ইনডেক্স বসালে ব্রাউজারের রাইট স্পিড ও ডেটাবেজের সাইজ বেড়ে যায়।

### সাধারণ ভুলসমূহ
IndexedDB-তে কম্পাউন্ড ইনডেক্সের ভ্যালুগুলো কেস-সেনসিটিভ (case-sensitive) হয়, সার্চ করার সময় অক্ষরের মিল না থাকলে কোনো ডাটা খুঁজে পাওয়া যাবে না।

### Code Example
\`\`\`typescript
// Dexie.js-এ Compound Index তৈরি এবং দ্রুত কুয়েরি রান করার নিয়ম
import Dexie from 'dexie';

class AppDatabase extends Dexie {
  products!: Dexie.Table<any, number>;

  constructor() {
    super('ShopDatabase');
    
    // কম্পাউন্ড ইনডেক্স স্কিমা ডিফাইন করা হলো
    this.version(1).stores({
      products: '++id, name, [category+status]' 
    });
  }
}

const db = new AppDatabase();

async function getAvailableElectronics() {
  // কম্পাউন্ড ইনডেক্স কুয়েরি রান
  const electronics = await db.products
    .where('[category+status]')
    .equals(['electronics', 'in-stock'])
    .toArray();

  return electronics;
}
\`\`\``
  },
  {
    id: 'other-topics-81',
    title: 'Explain the architecture and optimization benefits of Docker Multi-Stage builds.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Docker', 'Multi-Stage Build', 'CI/CD', 'Docker Optimization', 'DevOps'],
    enAnswer: 'Docker Multi-stage builds use multiple FROM instructions in a single Dockerfile. You build source code in a temporary container containing compiler tools, and copy only the compiled production output to a minimal runtime image, reducing image sizes.',
    bnAnswer: 'ডকার মাল্টি-স্টেজ বিল্ড একটি ডকারফাইলে একাধিক FROM ডিরেক্টিভ ব্যবহার করে। ভারী কম্পাইলার কন্টেইনারে কোড বিল্ড করে কেবল ফাইনাল আউটপুট মিনিমাল রানটাইম কন্টেইনারে কপি করে নিয়ে সাইজ হ্রাস করা হয়।',
    enExplanation: `### Explanation
To compile TypeScript or React applications, you require Node.js, git, npm, and package compilers. However, running these tools inside the production environment bloats image size and exposes security vulnerabilities:
1. **Multi-Stage Concept**:
   - You declare multiple builds inside a single \`Dockerfile\`.
   - Stage 1 (Build): Uses a full Node image, copies source files, installs development dependencies, and runs \`npm run build\` to output compiled Javascript assets.
   - Stage 2 (Production): Uses a lightweight Alpine Node or Nginx image. You copy *only* the compiled folder from Stage 1.
2. **Benefits**:
   - **Reduced Footprint**: Shrinks final image sizes from 1.5GB to less than 100MB.
   - **Improved Security**: Eliminates compiler shells, node_modules development binaries, and package managers from the production container.

### Real-World Example
In a NestJS backend container:
- Standard Dockerfile: Bundles typescript compilers, tests, and source codes. Image size: 1.2GB.
- Multi-Stage Dockerfile: Compiles code in build stage, then copies only the \`/dist\` folder and production \`node_modules\` to a minimal Alpine container. Final image size: 120MB, saving 90% of cloud storage costs and speeding up deployment times.

### Best Practice
Always name your stages (e.g., \`FROM node:20 AS builder\`). Use \`.dockerignore\` to block local node_modules from copying into the build container, keeping docker caching efficient.

### Common Mistakes
Forgetting to install only production dependencies in the final runtime container, resulting in full devDependencies being copied and bloat remaining in the image.

### Code Example
\`\`\`dockerfile
# Stage 1: Build environment containing compiler tools
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Minimal Production runtime environment
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# Install only production dependencies (no devDependencies!)
RUN npm ci --only=production
# Copy compiled output from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট বা নোড জেএস কোড বিল্ড ও কম্পাইল করতে কম্পাইলার, প্যাকেজ ম্যানেজার ও এনপিএম টুলসের প্রয়োজন হয়। কিন্তু প্রোডাকশন কন্টেইনারে এগুলো রেখে দিলে সিকিউরিটি রিস্ক বাড়ে ও কন্টেইনারের সাইজ অনেক বড় হয়ে যায়:
১. **মাল্টি-স্টেজ বিল্ড কনসেপ্ট**:
   - একটি মাত্র \`Dockerfile\`-এর ভেতরে একাধিক রানটাইম ডিক্লেয়ার করা যায়।
   - স্টেজ ১ (বিল্ড): এটি সব কম্পাইলার টুলস সহ নোড ইমেজ লোড করে কোড বিল্ড করে জেনারেটেড ফাইল তৈরি করে।
   - স্টেজ ২ (রানার): এটি একটি হালকা ওজনের মিনিমাল ইমেজ (যেমন Alpine) লোড করে কেবল স্টেজ ১ থেকে তৈরি ফাইলগুলো কপি করে নেয়।
২. **সুবিধাসমূহ**:
   - **সাইজ সংকোচন**: ১.৫ জিবি কন্টেইনার ইমেজকে মাত্র ১০০ এমবিতে নামিয়ে আনে।
   - **নিরাপত্তা**: প্রোডাকশন সার্ভারে অপ্রয়োজনীয় প্যাকেজ ও শেল স্ক্রিপ্ট না থাকায় হ্যাকারদের অ্যাটাক সারফেস কমে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নেস্ট জেএস (NestJS) প্রোজেক্টে:
- নরমাল ডকার বিল্ড করলে পুরো সোর্স কোড ও হেভি টুলসের কারণে ইমেজ ১.২ জিবি হয়ে যায়, যা সার্ভারে পুল হতে কয়েক মিনিট সময় নেয়।
- মাল্টি-স্টেজ বিল্ড ব্যবহার করায় এটি কম্পাইলড \`/dist\` ডিরেক্টরি আর মিনিমাল নোড কন্টেইনার যুক্ত করে মাত্র ১২০ এমবি ইমেজ তৈরি করে। ফলে ডেপ্লয়মেন্ট স্পিড বহু গুণ বেড়ে যায়।

### উত্তম অনুশীলন
ডকারফাইলে প্রতিটা স্টেজের নাম দিন (\`FROM node AS builder\`)। প্রোজেক্টের লোকাল node_modules ফাইল যাতে ডকার কন্টেইনারে ঢুকে ক্যাশ নষ্ট না করে, তার জন্য অবশ্যই \`.dockerignore\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ফাইনাল রানার কন্টেইনারে ভুলবশত প্রোডাকশন ব্যতীত সব devDependencies ইনস্টল করে রাখা, যা ইমেজের সাইজ বাড়িয়ে দেয়।

### Code Example
\`\`\`dockerfile
# স্টেজ ১: হেভি বিল্ড এনভায়রনমেন্ট (builder)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stager ২: লাইটওয়েট প্রোডাকশন রানটাইম (runner)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# কেবল প্রোডাকশন ডিপেন্ডেন্সি ইনস্টল করা হচ্ছে
RUN npm ci --only=production
# বিল্ডার স্টেজ থেকে কম্পাইল করা dist ফোল্ডার কপি
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]
\`\`\``
  },
  {
    id: 'other-topics-82',
    title: 'Explain why running containers as root is a security risk, and how to configure non-root users in Dockerfiles.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Docker Security', 'Non-Root User', 'Dockerfile Best Practices', 'Container Hardening', 'DevOps'],
    enAnswer: 'Running containers as root poses a risk because container breaks (escapes) grant root access to the host machine. Configure non-root execution by creating a user group/user and adding the USER directive in the Dockerfile.',
    bnAnswer: 'রুট হিসেবে কন্টেইনার চালালে কন্টেইনার ব্রেকআউট করে হ্যাকাররা সরাসরি হোস্ট সার্ভারের রুট অ্যাক্সেস পেয়ে যেতে পারে। এটি এড়াতে ডকারফাইলে কাস্টম ইউজার গ্রুপ তৈরি করে USER ডিরেক্টিভ সেট করতে হয়।',
    enExplanation: `### Explanation
By default, Docker containers run operations as the \`root\` user (UID 0). This is a critical security vulnerability:
1. **The Escape Vulnerability**:
   - If an application vulnerability (like remote code execution) is exploited inside a container running as root, the attacker operates as root.
   - If the attacker successfully escapes the container namespace onto the host system (via kernel bugs or bind-mounted sockets), they gain full root privileges over the physical host virtual machine.
2. **Non-Root Execution**:
   - Create a dedicated system user and group with no login permissions.
   - Restrict file permissions of the app folder to this user.
   - Set the \`USER <username>\` directive. All subsequent commands (and container runs) will execute with limited user permissions.

### Real-World Example
In a payment processing microservice:
- The container runs as root. An attacker exploits an outdated package, executes a script, binds the host docker socket \`/var/run/docker.sock\`, and immediately boots a malicious container to steal host data.
- Rewriting the Dockerfile to create a \`node\` user and run \`USER node\` ensures that even if the server is compromised, the OS blocks the script from accessing system folders or sockets.

### Best Practice
Use built-in non-root users in official base images when available (e.g., the \`node\` user in official Node.js Alpine images). Set file permissions carefully using \`chown\` during copy phases.

### Common Mistakes
Declaring the \`USER\` directive but failing to change ownership of the workspace directory first. This prevents the application from writing temporary log files, crashing the server on startup.

### Code Example
\`\`\`dockerfile
# Secure Dockerfile running with a non-root user
FROM node:20-alpine
WORKDIR /app

# 1. Create a system group and user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package*.json ./
RUN npm ci --only=production

# 2. Copy source files and transfer ownership to the custom user
COPY --chown=appuser:appgroup . .

# 3. Switch active execution scope to the secure non-root user
USER appuser

EXPOSE 3000
CMD ["node", "server.js"]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে ডকার কন্টেইনারের কমান্ডগুলো রুট (root) ইউজার হিসেবে চলে, যা প্রোডাকশন সার্ভারের জন্য একটি বড় নিরাপত্তা ঝুঁকি:
১. **ব্রেকআউট ঝুঁকি**:
   - কন্টেইনারে কোনো প্যাকেজ বা লাইব্রেরির সিকিউরিটি এরর থাকলে হ্যাকাররা সহজে সার্ভারে প্রবেশ করতে পারে। কন্টেইনার রুট মোডে সচল থাকলে হ্যাকারের স্ক্রিপ্টটিও রুট হিসেবে রান হয়।
   - কোনো উপায়ে হোস্ট অপারেটিং সিস্টেমে কন্টেইনার এস্কেপ (namespace escape) ঘটলে হ্যাকার পুরো ভৌত সার্ভারের কন্ট্রোল পেয়ে যায়।
২. **নন-রুট সমাধান**:
   - ডকারফাইলে একটি কাস্টম লিমিটেড প্রিভিলেজ ইউজার তৈরি করতে হবে।
   - সোর্স ফাইলের রাইট অ্যাক্সেস কেবল ওই ইউজারকে দিয়ে \`USER user_name\` ডিরেক্টিভ সেট করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পেমেন্ট প্রসেসিং কন্টেইনারে:
- রুট হিসেবে রান করার কারণে হ্যাকার কোড ফাইল রিরাইট করে সার্ভারের ডকার ডিরেক্টরি মাউন্ট করে সব ডাটা ডাউনলোড করে নিলো।
- ডকারফাইলে ইউজার ডিফাইন করে \`USER node\` হিসেবে রান করায় হ্যাকারের স্ক্রিপ্টটি হোস্ট ফাইলের কাছে রিজেক্টেড হয়ে গেল, ফলে হোস্ট সার্ভার সুরক্ষিত থাকল।

### উত্তম অনুশীলন
অফিসিয়াল নোড Alpine ইমেজে আগে থেকেই \`node\` ইউজার ডিক্লেয়ার করা থাকে। আপনি কেবল \`USER node\` সিলেক্ট করে কোড কপি করার সময় \`--chown=node:node\` ফ্ল্যাগ ব্যবহার করুন।

### সাধারণ ভুলসমূহ
USER ডিরেক্টিভ সেট করার পূর্বে ওয়ার্কস্পেস ডিরেক্টরির মালিকানা (ownership) পরিবর্তন করতে ভুলে যাওয়া, যার ফলে পারমিশন এরর এসে অ্যাপ বুট করতে পারে না।

### Code Example
\`\`\`dockerfile
# সিকিউর নন-রুট ডকারফাইল কনফিগারেশন
FROM node:20-alpine
WORKDIR /app

# ১. সিস্টেমে কাস্টম গ্রুপ ও ইউজার তৈরি
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package*.json ./
RUN npm ci --only=production

# ২. সোর্স কোড কপি ও কাস্টম ইউজারকে মালিকানা হস্তান্তর
COPY --chown=appuser:appgroup . .

# ৩. অ্যাক্টিভ ইউজার হিসেবে নন-রুট ইউজার সিলেক্ট
USER appuser

EXPOSE 3000
CMD ["node", "server.js"]
\`\`\``
  },
  {
    id: 'other-topics-83',
    title: 'How do you configure Nginx rate limiting to protect API endpoints from abuse and DDoS?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Nginx', 'Rate Limiting', 'DDoS Protection', 'API Security', 'Security Configurations'],
    enAnswer: 'Configure Nginx rate limiting using the limit_req_zone directive to allocate memory for tracking IP addresses, and apply limit_req in location blocks with burst and nodelay to smooth traffic peaks.',
    bnAnswer: 'Nginx-এ limit_req_zone ডিরেক্টিভ দিয়ে আইপি ট্র্যাক করার জন্য মেমোরি বরাদ্দ করা হয়, এবং ট্রাফিক স্মুথ করতে location ব্লকে burst ও nodelay প্যারামিটার সহ limit_req ডিরেক্টিভ অ্যাপ্লাই করা হয়।',
    enExplanation: `### Explanation
Rate limiting protects backend application servers from API spamming, brute-force attacks, and distributed denial-of-service (DDoS) overloads:
1. **\`limit_req_zone\` (Define memory zone)**:
   - Configured in the global \`http\` block.
   - Syntax: \`limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;\`
   - Defines a 10MB memory pool named \`api_limit\` to track client IPs, enforcing a rate of 10 requests per second.
2. **\`limit_req\` (Apply limits)**:
   - Configured inside specific \`server\` or \`location\` blocks.
   - **\`burst=5\`**: Allows temporary spikes of up to 5 additional requests, placing them in a queue.
   - **\`nodelay\`**: Processes burst requests immediately without queue delay, returning \`503 Service Unavailable\` for anything beyond.

### Real-World Example
In a login API route (\`/api/login\`):
- Bots attack the endpoint by brute-forcing passwords with 100 requests per second.
- Nginx blocks the attack by enforcing a limit of \`1r/s\` with a burst of \`3\`.
- The bot gets 1 login attempt and 3 instant queue processes; the other 96 requests return 503 errors instantly, protecting the database from auth CPU overloads.

### Best Practice
Configure rate limit zones based on \`$binary_remote_addr\` (which stores IP addresses in compact binary format, 4 bytes for IPv4) to fit millions of IPs in small RAM blocks. Exclude internal microservice networks or CDNs from rate limits.

### Common Mistakes
Forgetting the \`nodelay\` flag on high-performance sites, which forces Nginx to artificially delay connection processing, making users experience artificial lags on rapid navigations.

### Code Example
\`\`\`nginx
# http block context in nginx.conf
http {
    # 1. Define rate limit zone: 10MB memory, 10 requests per second cap
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

    server {
        listen 80;
        server_name myapi.com;

        # 2. Protect login route strictly (1 request per second max)
        location /api/login {
            # Define specific local zone limit
            limit_req_zone $binary_remote_addr zone=login_limit:10m rate=1r/s;
            
            # Apply rate limit with a burst queue of 3
            limit_req zone=login_limit burst=3 nodelay;
            
            proxy_pass http://node_backend;
        }

        # 3. General API route limit
        location /api/ {
            limit_req zone=api_limit burst=10 nodelay;
            proxy_pass http://node_backend;
        }
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেট লিমিটিং এপিআই রিকোয়েস্ট স্প্যামিং, ব্রুট-ফোর্স অ্যাটাক এবং ডিডিপস (DDoS) আক্রমণ থেকে ব্যাকএন্ড সার্ভারকে সুরক্ষিত রাখে:
১. **\`limit_req_zone\` (মেমোরি জোন নির্ধারণ)**:
   - এটি Nginx-এর গ্লোবাল \`http\` ব্লকে লিখতে হয়।
   - সিনট্যাক্স: \`limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;\`
   - এটি ১০ মেগাবাইট মেমোরির একটি জোন তৈরি করে যা ইউজারদের আইপি ম্যাপ করে প্রতি সেকেন্ডে ১০টি রিকোয়েস্টের লিমিট ট্র্যাক রাখবে।
২. **\`limit_req\` (লিমিট প্রয়োগ)**:
   - এটি নির্দিষ্ট \`location\` ব্লকে বসাতে হয়।
   - **\`burst=5\`**: কোনো ইউজার হঠাৎ অতিরিক্ত ৫টি রিকোয়েস্ট করলে তা কিউতে পেন্ডিং রাখবে।
   - **\`nodelay\`**: রিকোয়েস্টগুলো জ্যাম না করে সাথে সাথে প্রসেস করে দেবে কিন্তু কিউ লিমিট ক্রস করলেই \`503 Service Unavailable\` এরর রিটার্ন করবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ওটিপি (OTP) বা লগইন এপিআই রাউটে:
- হ্যাকার ডিকশনারি অ্যাটাক করে প্রতি সেকেন্ডে ১০০টি পাসওয়ার্ড চেক করছে।
- Nginx-এ ওটিপি রাউটে \`rate=1r/s burst=3 nodelay\` কনফিগার করে দেওয়া হলো।
- হ্যাকারের ১ম ৪টি রিকোয়েস্ট সফলভাবে চেক হবে এবং বাকি ৯৬টি রিকোয়েস্ট সার্ভার স্পর্শ করার আগেই Nginx গেটওয়ে থেকে ৫০৩ এরর দিয়ে রিজেক্ট করে দেবে, ফলে ডাটাবেজ সুরক্ষিত থাকবে।

### উত্তম অনুশীলন
আইপি সেভের জন্য গ্লোবাল ভেরিয়েবলের বদলে \`$binary_remote_addr\` ব্যবহার করুন। এটি কমপ্যাক্ট বাইনারি ফরম্যাটে আইপি সেভ করায় মাত্র ১০ এমবি মেমরিতে প্রায় ১ লাখ ৬০ হাজার ইউনিক আইপি ট্র্যাক করা যায়।

### সাধারণ ভুলসমূহ
হাই-পারফরম্যান্স সাইটে nodelay ফ্ল্যাগ ব্যবহার না করা, যা রিকোয়েস্ট প্রসেস করতে অহেতুক কৃত্তিম ল্যাগ তৈরি করে ক্লায়েন্ট এক্সপেরিয়েন্স নষ্ট করে।

### Code Example
\`\`\`nginx
# Nginx-এ রেট লিমিটিং এবং ওটিপি রাউট প্রটেক্ট করার রুলস
http {
    # ১. গ্লোবাল রেট লিমিট জোন ডিফাইন করা হলো
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

    server {
        listen 80;
        server_name myapi.com;

        # ২. লগইন রাউট প্রটেক্ট করা হচ্ছে (সেকেন্ডে ১টি রিকোয়েস্ট)
        location /api/login {
            limit_req_zone $binary_remote_addr zone=login_limit:10m rate=1r/s;
            
            # লিমিট প্রয়োগ (burst ৩টি এবং nodelay একটিভ)
            limit_req zone=login_limit burst=3 nodelay;
            proxy_pass http://node_backend;
        }

        # ৩. অন্যান্য সাধারণ এপিআই রাউট
        location /api/ {
            limit_req zone=api_limit burst=10 nodelay;
            proxy_pass http://node_backend;
        }
    }
}
\`\`\``
  },
  {
    id: 'other-topics-84',
    title: 'Explain Nginx Microcaching and how it scale applications during sudden traffic spikes.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Nginx', 'Microcaching', 'Reverse Proxy Caching', 'Performance Optimization', 'Scale'],
    enAnswer: 'Microcaching is the practice of caching dynamic page responses or API payloads for very short intervals (e.g. 1 to 5 seconds). This absorbs massive traffic spikes by serving cached requests while preventing data from getting stale.',
    bnAnswer: 'মাইক্রোক্যাশিং হলো ডাইনামিক এপিআই বা পেজ রেসপন্সকে অত্যন্ত স্বল্প বিরতির (যেমন: ১ থেকে ৫ সেকেন্ড) জন্য ক্যাশ করে রাখা। এটি ডাটা বাসি না রেখেই লাখ লাখ ইউজারের ট্রাফিক চাপ ডিক্লেয়ার্ড ক্যাশ দিয়ে হ্যান্ডেল করে।',
    enExplanation: `### Explanation
Traditional database caching (like Redis) requires modifying backend code. Nginx Microcaching runs entirely in the reverse proxy layer, catching and serving requests before they hit Node/SQL:
1. **The Short TTL Strategy**:
   - Cache dynamic endpoints for exactly **1 second**: \`proxy_cache_valid 200 1s;\`.
   - To 1 user, 1 second is imperceptible; they see near-live data.
   - To the server, if 5,000 users request the same page in that 1 second, Nginx queries the backend only once, serving the other 4,999 from its proxy cache.
2. **\`proxy_cache_use_stale\`**:
   - Serves outdated cache if the backend server goes down or is currently updating the cache key, preventing frontend crashes.

### Real-World Example
In a live sports score API:
- The scores change every few seconds.
- During a final match, 100,000 requests hit the server per second.
- Without microcaching, your Node servers crash.
- Enabling a 1s Nginx microcache reduces the load on backend database controllers from 100,000 queries per second to exactly **1 query per second**, boosting system capacity by 100,000%.

### Best Practice
Use \`proxy_cache_key\` properly (e.g. including query parameters or user language tags). Enforce \`proxy_cache_bypass\` for request headers containing active authorization tokens (like Bearer tokens) to prevent users from seeing each other's private account views.

### Common Mistakes
Caching requests containing session cookies or Authorization headers, which leaks private user data to anonymous public requests.

### Code Example
\`\`\`nginx
# nginx.conf http block
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=microcache:10m max_size=500m inactive=10m;

server {
    listen 80;
    server_name myscores.com;

    location /api/scores {
        # 1. Enable cache zone
        proxy_cache microcache;
        
        # 2. Cache successful responses for exactly 1 second
        proxy_cache_valid 200 1s;
        
        # 3. Serve stale cache if backend is updating or offline
        proxy_cache_use_stale error timeout updating http_500 http_502;
        
        # 4. Lock concurrent requests to wait for first response
        proxy_cache_lock on;

        # Bypass cache for authenticated users
        proxy_cache_bypass $http_authorization;
        proxy_no_cache $http_authorization;

        proxy_pass http://node_backend;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিসের মতো প্রথাগত ক্যাশিংয়ে কোড ফাইল এডিট করতে হয়। অন্যদিকে Nginx মাইক্রোক্যাশিং রিভার্স প্রক্সি লেভেলে কাজ করায় সার্ভার টাচ করার পূর্বেই রিকোয়েস্ট প্রসেস করে দেয়:
১. **শর্ট TTL স্ট্র্যাটেজি**:
   - ডাইনামিক ডাটা কেবল **১ সেকেন্ডের** জন্য ক্যাশ করা হয়: \`proxy_cache_valid 200 1s;\`।
   - ১ সেকেন্ড ক্যাশ থাকার ফলে ইউজারের কাছে মনে হয় ডাটা রিয়েল-টাইম।
   - কিন্তু ১ সেকেন্ডের মধ্যে যদি ১০ হাজার ইউজার পেজ লোড দেয়, তবে Nginx ব্যাকএন্ডে মাত্র ১টি কুয়েরি পাঠাবে এবং বাকি ৯,৯৯৯ জনকে ক্যাশড কপি দিয়ে বিদায় করবে।
২. **\`proxy_cache_use_stale\`**:
   - যদি ব্যাকএন্ড ডাউন বা ক্র্যাশ থাকে, তবে Nginx ওল্ড ক্যাশটি ইউজারকে শো করবে যাতে সার্ভার এরর স্ক্রিন না আসে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নির্বাচনী লাইভ ফলাফলের পাতায়:
- প্রতি সেকেন্ডে ভোটের কাউন্ট বাড়ছে। লাখ লাখ ভোটার একসাথে পেজ রিফ্রেশ করায় ডাটাবেজ ডাউন হয়ে গেল।
- Nginx-এ ১ সেকেন্ডের মাইক্রোক্যাশিং চালু করার সাথে সাথে ব্যাকএন্ড ডাটাবেজের লোড লাখ থেকে কমে প্রতি সেকেন্ডে মাত্র ১টিতে নেমে আসলো এবং পুরো ডেপ্লয়মেন্ট সুরক্ষিত থাকল।

### উত্তম অনুশীলন
অথরাইজড রিকোয়েস্ট (Authorization header) অথবা সেশন কুকি আছে এমন রিকোয়েস্টগুলোকে ক্যাশ এড়াতে \`proxy_cache_bypass\` ও \`proxy_no_cache\` দিয়ে ব্লক করুন, অন্যথায় এক ইউজারের পার্সোনাল ড্যাশবোর্ড অন্য ইউজারের কাছে চলে যেতে পারে।

### সাধারণ ভুলসমূহ
সেশন কুকি বা অথরাইজেশন হেডার সমৃদ্ধ পার্সোনাল রিকোয়েস্টগুলোকেও ক্যাশ করে ফেলা, যার ফলে এক ইউজারের ব্যক্তিগত ডাটা অন্য ইউজারের পেজে রেন্ডার হয়ে যায়।

### Code Example
\`\`\`nginx
# Nginx-এ ১ সেকেন্ডের মাইক্রোক্যাশিং কনফিগারেশন রুলস
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=microcache:10m max_size=500m inactive=10m;

server {
    listen 80;
    server_name myscores.com;

    location /api/scores {
        # ১. ক্যাশ জোন সক্রিয় করা হলো
        proxy_cache microcache;
        
        # ২. সাকসেস রেসপন্স মাত্র ১ সেকেন্ড ক্যাশ থাকবে
        proxy_cache_valid 200 1s;
        
        # ৩. ব্যাকএন্ড ডাউন থাকলে ওল্ড ক্যাশ দিয়ে ইউজার ভিজিট সচল রাখবে
        proxy_cache_use_stale error timeout updating http_500 http_502;
        
        # ৪. প্যারালাল রিকোয়েস্ট লক অন রাখা হলো (একসাথে ডাটা জেনারেট করবে না)
        proxy_cache_lock on;

        # টোকেনধারী ইউজারদের জন্য ক্যাশ বাইপাস করা হচ্ছে
        proxy_cache_bypass $http_authorization;
        proxy_no_cache $http_authorization;

        proxy_pass http://node_backend;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-85',
    title: 'Explain SSL/TLS termination in Nginx and how to configure modern HTTP/2 features.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Nginx', 'SSL/TLS Termination', 'HTTP/2', 'Security Protocols', 'ALPN'],
    enAnswer: 'SSL/TLS termination decrypts incoming HTTPS traffic at the Nginx edge, passing raw HTTP requests to backend servers. Configure this by specifying certificate paths and enabling http2 inside the listen directive.',
    bnAnswer: 'SSL/TLS termination Nginx এজে এসে এনক্রিপ্টেড ট্রাফিক ডিক্রিপ্ট করে আন-এনক্রিপ্টেড HTTP হিসেবে ব্যাকএন্ড সার্ভারে পাঠায়। সার্টিফিকেট পাথ বসিয়ে listen লাইনে http2 ডিরেক্টিভ সেট করে এটি একটিভ করতে হয়।',
    enExplanation: `### Explanation
Decrypting HTTPS traffic is CPU-intensive. SSL/TLS termination offloads this workload onto Nginx, freeing up backend servers to focus on business logic:
1. **SSL Termination**:
   - Clients establish secure TLS handshakes with Nginx (Port 443).
   - Nginx decrypts the packets using SSL certificates (e.g. from Let's Encrypt).
   - The decrypted requests are forwarded to backend services (like Node.js running on port 3000) over a secure internal network.
2. **HTTP/2 Optimization**:
   - Enabled by appending \`http2\` in the \`listen 443 ssl\` directive.
   - **Multiplexing**: Allows downloading multiple files (JS, CSS, images) concurrently over a single TCP connection.
   - **Header Compression (HPACK)**: Reduces HTTP request/response headers sizes, accelerating mobile network load times.

### Real-World Example
In a microservices mesh:
- Running HTTPS decryption directly inside 15 separate Node.js processes consumes 40% CPU overhead globally.
- Setting up a single Nginx reverse proxy to terminate SSL at the network boundary reduces the Node.js instances CPU loads to 5% while enabling HTTP/2 support for browser clients.

### Best Practice
Enforce modern secure TLS protocols (\`ssl_protocols TLSv1.2 TLSv1.3;\`) and disable old vulnerable versions (like SSLv3, TLSv1.0, TLSv1.1). Enable HTTP Strict Transport Security (HSTS) headers to force browsers to connect via HTTPS.

### Common Mistakes
Forwarding traffic from Nginx to Node.js backend using HTTPS over the public internet instead of terminating SSL at the proxy, which results in double encryption and CPU resource wastage.

### Code Example
\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;
    # 1. Force HTTPS redirect
    return 301 https://$host$request_uri;
}

server {
    # 2. Enable SSL and HTTP/2 on port 443
    listen 443 ssl http2;
    server_name myapp.com;

    # SSL Certificate Paths
    ssl_certificate /etc/letsencrypt/live/myapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myapp.com/privkey.pem;

    # 3. Modern Secure TLS Cipher Suites and Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';

    # 4. HSTS Header (Force HTTPS for 1 year)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        # Pass raw HTTP to internal backend
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto https;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এইচটিটিপিএস (HTTPS) ডাটা ডিক্রিপ্ট করা প্রসেসরের জন্য অত্যন্ত ব্যয়বহুল। SSL/TLS termination এই লোডটি Nginx গেটওয়েতে রিলিজ করে ব্যাকএন্ড সার্ভারকে সচল রাখে:
১. **SSL Termination**:
   - ক্লায়েন্ট Nginx-এর সাথে পোর্ট ৪৪৩-এ নিরাপদ এনক্রিপ্টেড কানেকশন তৈরি করে।
   - Nginx সার্টিফিকেট কি ব্যবহার করে ডেটা ডিক্রিপ্ট করে নেয়।
   - ডিক্রিপ্ট করা সাধারণ HTTP ডাটা লোকাল নেটওয়ার্কে নোড বা পাইথন অ্যাপ্লিকেশনে (যেমন: পোর্ট ৩০০০) ট্রান্সফার করে।
২. **HTTP/2 অপ্টিমাইজেশন**:
   - এটি Nginx-এর listen কম্যান্ডে \`http2\` ট্যাগ বসিয়ে অন করতে হয়।
   - **মাল্টিপ্লেক্সিং**: ব্রাউজার একই সাথে সিএসএস, জেএস ও ইমেজ ফাইল মাত্র ১টি কানেকশন ব্যবহার করে ডাউনলোড করতে পারে।
   - **হেডার কম্প্রেশন (HPACK)**: ডাটার হেডার সাইজ সংকুচিত করে মোবাইল নেটের লোডিং স্পিড বাড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মাইক্রোসার্ভিস আর্কিটেকচারে:
- যদি ১৫টি নোড জেএস সার্ভিসকে ডিরেক্ট HTTPS ডিক্রিপ্ট করতে দেওয়া হয়, তবে তাদের প্রসেসর লোড ৪০% পর্যন্ত বেড়ে যায়।
- নোডের সামনে একটি Nginx প্রক্সি বসিয়ে ৪৪৩ পোর্টে SSL টার্মিনেশন করায় প্রসেসর লোড ৫%-এ নেমে আসে এবং সার্ভার অনেক ফাস্ট রেসপন্স করে।

### উত্তম অনুশীলন
নিরাপত্তা বাড়াতে পুরোনো দুর্বল প্রোটোকল (TLS 1.0, 1.1) অফ করে আধুনিক \`TLSv1.2 TLSv1.3\` সেট করুন। ব্রাউজার যাতে আজীবন কেবল HTTPS-এই সাইট ওপেন করে, তার জন্য HSTS হেডার যুক্ত করুন।

### সাধারণ ভুলসমূহ
প্রক্সির বাইরেও ব্যাকএন্ড নোড অ্যাপে পুনরায় ডাবল HTTPS এনক্রিপশন ব্যবহার করা, যা অহেতুক সিপিইউ রিসোর্স নষ্ট করে।

### Code Example
\`\`\`nginx
# Nginx-এ HTTPS রিডিরেক্ট ও HTTP/2 টার্মিনেশন কনফিগারেশন
server {
    listen 80;
    server_name myapp.com;
    # ১. ইউজারকে সরাসরি HTTPS-এ রিডিরেক্ট করা হচ্ছে
    return 301 https://$host$request_uri;
}

server {
    # ২. ৪৪৩ পোর্টে SSL ও HTTP/2 সক্রিয়
    listen 443 ssl http2;
    server_name myapp.com;

    ssl_certificate /etc/letsencrypt/live/myapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myapp.com/privkey.pem;

    # ৩. সিকিউর প্রোটোকল ও সাইফার সুইট সিলেকশন
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';

    # ৪. HSTS হেডার ডিফাইন
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto https;
    }
}
\`\`\``
  },
  {
    id: 'other-topics-86',
    title: 'How do you create and manage a custom systemd service in Linux to keep Node.js applications alive?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Linux', 'systemd', 'Process Management', 'Node.js Production', 'DevOps'],
    enAnswer: 'Configure a systemd service by creating a .service file in /etc/systemd/system/ specifying the ExecStart node path, defining Restart=always for auto-recovery, and using systemctl to enable and run the daemon.',
    bnAnswer: 'systemd সার্ভিস তৈরি করতে /etc/systemd/system/ ফোল্ডারে একটি .service ফাইলে অ্যাপের রান পাথ ExecStart, স্বয়ংক্রিয় স্টার্টের জন্য Restart=always সেট করতে হয় এবং systemctl দিয়ে সার্ভিসটি রান ও এনেবল করতে হয়।',
    enExplanation: `### Explanation
In production VPS servers, running a Node.js process using a terminal shell (\`node server.js\`) is dangerous because if the SSH shell disconnects or the app crashes, the website goes offline. Linux **systemd** manages processes as background services (daemons):
1. **Service Unit Configuration**:
   - Location: \`/etc/systemd/system/myapp.service\`
   - Defines when to start the service (usually after network driver starts).
   - Specifies execution directories, environment variables, and the target user.
2. **Auto-Recovery**:
   - Setting \`Restart=always\` instructs the Linux kernel to restart the Node.js process automatically if it crashes or gets killed due to memory issues.
3. **\`systemctl\` Commands**:
   - \`systemctl start myapp\` boots the daemon.
   - \`systemctl enable myapp\` registers the app to start automatically when the VPS reboots.

### Real-World Example
You deploy a Node.js REST API on a Linode Ubuntu server.
- The server crashes due to a random \`UnhandledPromiseRejection\` error.
- Without systemd, the site remains offline until you manually SSH in and restart it.
- With systemd, Ubuntu detects the process crash and restarts Node.js in 100 milliseconds, restoring the API without developer intervention.

### Best Practice
Never run your systemd service as the root user. Always create a restricted user (e.g. \`User=www-data\` or \`User=node\`) and set the \`RestartSec=3\` to prevent rapid reboot loop crashes if the database connection fails.

### Common Mistakes
Forgetting to run \`systemctl daemon-reload\` after editing the \`.service\` configuration file, which causes Linux to continue running old configurations.

### Code Example
\`\`\`ini
# File: /etc/systemd/system/node-app.service
[Unit]
Description=Node.js Production Application REST API
After=network.target

[Service]
# Run as non-root system user
User=www-data
Group=www-data
WorkingDirectory=/var/www/myapp

# Load Environment Variables from external file
EnvironmentFile=/var/www/myapp/.env
ExecStart=/usr/bin/node dist/server.js

# Restart policy: Auto-restart Node.js if it crashes!
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশন সার্ভারে প্লেইন টার্মিনালে \`node server.js\` চালালে SSH বন্ধ হওয়া মাত্রই অ্যাপ অফলাইন হয়ে যায়। এই সমস্যা এড়াতে লিনাক্সের **systemd** প্রসেস ম্যানেজার ব্যবহার করা হয় যা ব্যাকগ্রাউন্ড সার্ভিস (Daemon) হিসেবে অ্যাপ সচল রাখে:
১. **সার্ভিস কনফিগারেশন**:
   - পাথ: \`/etc/systemd/system/myapp.service\`
   - এটি বলে দেয় নেটওয়ার্ক সচল হওয়ার পর সার্ভিস রান হবে। অ্যাপের ফোল্ডার ডিরেক্টরি ও এনভায়রনমেন্ট ফাইল কোথায় তাও ম্যাপ করে।
২. **স্বয়ংক্রিয় রিস্টার্ট (Auto-Recovery)**:
   - \`Restart=always\` থাকলে কোনো রিকোয়েস্টে এরর খেয়ে নোড প্রসেস ডাউন হলে লিনাক্স কার্নেল সাথে সাথে নোড অ্যাপটি পুনরায় রিস্টার্ট করে দেয়।
৩. **\`systemctl\` কমান্ড কন্ট্রোল**:
   - সার্ভিসটি একটিভ করে এনেবল করে দিলে সার্ভার রিবুট নিলেও ব্যাকগ্রাউন্ডে নোড অ্যাপ নিজে নিজেই বুট হবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি উবুন্টু ভিপিএস (VPS) সার্ভারে এপিআই ডেপ্লয় করা আছে:
- কোনো মেমোরি লিকের কারণে নোড অ্যাপটি গভীর রাতে ক্র্যাশ করল।
- systemd না থাকলে আপনার ডেভেলপার সকালে ঘুম থেকে উঠে সার্ভার অন করার আগ পর্যন্ত পুরো সাইট ডাউন থাকত।
- systemd সচল থাকায় উবুন্টু প্রসেসটি ডাউন হওয়া মাত্র ১০০ মিলি-সেকেন্ডের মধ্যে ব্যাকস্টেজেই নোড সার্ভার রিস্টার্ট করে সাইট সচল রাখে।

### উত্তম অনুশীলন
সার্ভিসটিকে রুট ইউজার হিসেবে চালাবেন না; কাস্টম ইউজার (\`User=www-data\`) ডিফাইন করুন। ডাটাবেজ অফলাইন থাকাকালীন অহেতুক ঘন ঘন রিস্টার্ট ঠেকাতে \`RestartSec=3\` দিয়ে ৩ সেকেন্ডের গ্যাপ রাখুন।

### সাধারণ ভুলসমূহ
systemd সার্ভিস ফাইল আপডেট করার পর systemctl daemon-reload রান না করা, যার ফলে আগের পুরোনো ফাইলটিই চলতে থাকে।

### Code Example
\`\`\`ini
# /etc/systemd/system/node-app.service ফাইলের রুলস
[Unit]
Description=Node.js Production Application REST API
After=network.target

[Service]
# নন-রুট ইউজার হিসেবে সার্ভিস চালানো হচ্ছে
User=www-data
Group=www-data
WorkingDirectory=/var/www/myapp

# এনভায়রনমেন্ট ফাইল বাইন্ডিং ও এক্সিকিউশন রান পাথ
EnvironmentFile=/var/www/myapp/.env
ExecStart=/usr/bin/node dist/server.js

# প্রসেস ক্র্যাশ করলে অটোমেটিক রিস্টার্ট পলিসি
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
\`\`\``
  },
  {
    id: 'other-topics-87',
    title: 'Explain SSH Key Authentication, and how to secure a Linux VPS by disabling password login.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['SSH Authentication', 'Linux Security', 'Server Hardening', 'VPS Administration', 'DevOps'],
    enAnswer: 'Secure SSH authentication uses asymmetric cryptography (public and private key pair). Protect a VPS by adding the public key to authorized_keys and editing sshd_config to set PasswordAuthentication no.',
    bnAnswer: 'SSH কী অথেনটিকেশন অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি (পাবলিক ও প্রাইভেট কী জোড়া) ব্যবহার করে। authorized_keys ফাইলে পাবলিক কী যুক্ত করে sshd_config ফাইলে PasswordAuthentication no সেট করে পাসওয়ার্ড লগইন ব্লক করা হয়।',
    enExplanation: `### Explanation
Password-based SSH access on a public VPS is vulnerable to brute-force attacks from bots scanning port 22. SSH Key authentication secures access using asymmetric cryptography:
1. **Asymmetric Cryptography**:
   - You generate a key pair: A **Private Key** (kept secure on your local machine) and a **Public Key** (saved on the VPS in \`~/.ssh/authorized_keys\`).
   - The server verifies your signature using the public key. Only the owner of the matching private key can access the shell.
2. **Disabling Passwords**:
   - Edit the SSH daemon config file \`/etc/ssh/sshd_config\`.
   - Set \`PasswordAuthentication no\`. This blocks password submissions, rendering brute-force attacks impossible.

### Real-World Example
An Ubuntu VPS with a simple root password "qwerty123" is provisioned.
- Within 24 hours, automated hacker bots scan port 22 and execute dictionary attacks, gaining access and installing coin miners.
- Disabling password logins and forcing SSH Key authentication blocks all bot attempts instantly, returning a "Permission denied (publickey)" reject message.

### Best Practice
Change the default SSH port from 22 to a random unused port (e.g. 2288) to avoid 99% of automated port-scanning bots. Keep your local private key protected with a strong passphrase.

### Common Mistakes
Disabling password authentication *before* copying your public key to the server or verifying that key authentication works, locking yourself out of the server permanently.

### Code Example
\`\`\`bash
# --- LOCAL MACHINE: Generate SSH Keys ---
$ ssh-keygen -t ed25519 -C "admin@myapp.com"
# (Generates id_ed25519 and id_ed25519.pub)

# Copy public key to remote VPS
$ ssh-copy-id -i ~/.ssh/id_ed25519.pub root@123.45.67.89

# --- REMOTE SERVER: Edit Config ---
$ sudo nano /etc/ssh/sshd_config

# Find and change these parameters to secure VPS:
# PasswordAuthentication no
# PubkeyAuthentication yes
# ChallengeResponseAuthentication no

# Restart the SSH daemon to apply changes
$ sudo systemctl restart ssh
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পাসওয়ার্ড দিয়ে পাবলিক ভিপিএস (VPS) সার্ভারে লগইন করার ব্যবস্থা থাকলে হ্যাকাররা পোর্ট ২২ স্ক্যান করে লাখ লাখ ডিকশনারি পাসওয়ার্ড ইনপুট দিয়ে ব্রুট-ফোর্স অ্যাটাক চালায়। SSH কী অথেনটিকেশন এটি সম্পূর্ণ ব্লক করে দেয়:
১. **অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি**:
   - আপনি লোকাল পিসিতে একটি কী জোড়া জেনারেট করেন: **Private Key** (লোকাল পিসিতে লক থাকে) এবং **Public Key** (সার্ভারের \`~/.ssh/authorized_keys\` ফাইলে পেস্ট করা হয়)।
   - লগইনের সময় সার্ভার দুটি কী ম্যাচ করে। পাসওয়ার্ড ছাড়া কেবল আপনার প্রাইভেট কী ম্যাচ করলেই উবুন্টু শেলের অ্যাক্সেস দেয়।
২. **পাসওয়ার্ড নিষ্ক্রিয়করণ**:
   - \`/etc/ssh/sshd_config\` ফাইলে গিয়ে পাসওয়ার্ড অথেনটিকেশন বন্ধ করে দিতে হবে (\`PasswordAuthentication no\`)।
   - পাসওয়ার্ড অফ করে দিলে হ্যাকারের কাছে পাসওয়ার্ড সাবমিট করার কোনো ফর্ম বা গেট থাকে না, ফলে ব্রুট-ফোর্স অ্যাটাক অসম্ভব হয়ে পড়ে।

### বাস্তব-ভিত্তিক উদাহরণ
উবুন্টু সার্ভারে রুট পাসওয়ার্ড "admin123" সেট করা ছিল:
- ২৪ ঘণ্টার মধ্যে বিভিন্ন দেশের বট ২২ পোর্টে ট্রাই করে পাসওয়ার্ড ধরে ফেলে সার্ভারের ফাইল ড্যামেজ করে দিল।
- এসএসএইচ কী একটিভ করে পাসওয়ার্ড লগইন ডিজঅ্যাবেল করার পর বাইরের যেকোনো কানেকশন পোর্ট ২২-এ এলে সার্ভার সরাসরি কানেকশন রিজেক্ট করে দেয়।

### উত্তম অনুশীলন
ডিফল্ট পোর্ট ২২ পরিবর্তন করে একটি র্যান্ডম পোর্ট (যেমন: ২২০০) সেট করুন। এটি বটের অটোমেটিক পোর্ট স্ক্যানিং এড়াতে সাহায্য করে। পাসওয়ার্ড অফ করার আগে অন্য একটি উইন্ডোতে আপনার কী লগইন সাকসেসফুলি কাজ করছে কিনা তা ডাবল চেক করে নিন।

### সাধারণ ভুলসমূহ
এসএসএইচ কী সংযোগ সফলভাবে কাজ করছে কিনা তা ডাবল-চেক না করেই পাসওয়ার্ড লগইন নিষ্ক্রিয় করা, যার ফলে সার্ভারে চিরতরে অ্যাক্সেস ব্লক হয়ে যায়।

### Code Example
\`\`\`bash
# --- লোকাল পিসি: SSH কী তৈরি করা ---
$ ssh-keygen -t ed25519 -C "admin@myapp.com"
# (প্রাইভেট ও পাবলিক কী ফাইল জেনারেট হবে)

# পাবলিক কী সার্ভারে পাঠানো হচ্ছে
$ ssh-copy-id -i ~/.ssh/id_ed25519.pub root@123.45.67.89

# --- রিমোট সার্ভার: কনফিগারেশন এডিট ---
$ sudo nano /etc/ssh/sshd_config

# নিচের প্যারামিটারগুলো এডিট করে সেভ করুন:
# PasswordAuthentication no
# PubkeyAuthentication yes

# এসএসএইচ ডেমন রিস্টার্ট দিন
$ sudo systemctl restart ssh
\`\`\``
  },
  {
    id: 'other-topics-88',
    title: 'Explain Git Bisect and how to use it to locate the exact commit that introduced a bug.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Git', 'Git Bisect', 'Debugging', 'Version Control', 'Workflow'],
    enAnswer: 'Git Bisect is a debugging tool that uses binary search to find the commit that introduced a bug. You mark a bad commit (containing the bug) and a good commit (no bug), then Git checks out midway commits for testing.',
    bnAnswer: 'Git Bisect হলো একটি ডিবাগিং টুল যা বাইনারি সার্চ দিয়ে বাগ সৃষ্টিকারী নির্দিষ্ট কমিটটি খুঁজে বের করে। বাগ থাকা কমিটটিকে bad এবং বাগহীন কমিটটিকে good মার্ক করার পর গিট অটোমেটিক মাঝখানের কমিটগুলোতে চেকআউট করায়।',
    enExplanation: `### Explanation
When a bug goes unnoticed for weeks and is discovered later, finding which of the 100 recent commits caused it is difficult. **Git Bisect** automates this debugging process using binary search:
1. **Initiate**: Run \`git bisect start\`.
2. **Define Boundaries**:
   - \`git bisect bad\`: Mark the current commit as broken.
   - \`git bisect good <commit_hash>\`: Mark a past historical commit where the feature was working.
3. **Binary Search Iteration**:
   - Git automatically checks out the commit halfway between the good and bad versions.
   - You run your app or execute tests.
   - If the app works, type \`git bisect good\`. If it fails, type \`git bisect bad\`.
   - Git splits the remaining range in half again and checks out the next candidate. This repeats until Git prints the exact commit author and diff.

### Real-World Example
In a React dashboard, a charting button stops displaying tooltips:
- You know it worked at version 1.2 (commit \`a1b2c3d\`), but is broken now (commit \`x9y8z7w\`).
- Git Bisect checks out the middle commit. You test tooltip rendering.
- Tooltip is broken -> type \`git bisect bad\`.
- Git splits and checks out another commit. Tooltip works -> type \`git bisect good\`.
- After 7 quick tests, Git prints: "Commit d5e6f7g is the first bad commit. Fixed charts but removed tooltips." You save hours of reading line-by-line diffs.

### Best Practice
Write automated test scripts to run the bisect loop instantly. By running \`git bisect run npm test\`, Git will check out commits, run the test runner, assess the exit code, and isolate the broken commit in seconds without user interaction.

### Common Mistakes
Forgetting to exit bisect mode using \`git bisect reset\` after isolating the bug, leaving your head detached and preventing clean merges.

### Code Example
\`\`\`bash
# 1. Start the bisect debugging wizard
$ git bisect start

# 2. Tell git that current head is broken
$ git bisect bad

# 3. Tell git a historical commit where it was working
$ git bisect good v1.2.0
# (Git outputs: Bisecting: 50 revisions left to test, ~6 steps)

# 4. Git checks out the midway commit. Run app and check:
# If broken:
$ git bisect bad
# If working:
$ git bisect good

# (Repeat until git outputs the bad commit name)
# 5. Reset git branch back to original state
$ git bisect reset
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অনেক দিন আগে অ্যাড করা কোনো এরর বা বাগ যখন বর্তমানে ধরা পড়ে, তখন মাঝের ১০০টি কমিটের মধ্যে কোন ফাইল এডিটের কারণে এটি হলো তা বের করা কঠিন। **Git Bisect** বাইনারি সার্চ অ্যালগরিদম ব্যবহার করে বাগ খুঁজে বের করে:
১. **শুরু**: \`git bisect start\` দিয়ে কমান্ড স্টার্ট করতে হয়।
২. **সীমানা চিহ্নিতকরণ**:
   - \`git bisect bad\`: বর্তমান ব্রাঞ্চে বাগ আছে তা গিটকে জানানো।
   - \`git bisect good <commit_hash>\`: আগে যে ডেটে বাগ ছিল না সেই কমিট আইডি মার্ক করা।
৩. **বাইনারি সার্চ লুপ**:
   - গিট অটোমেটিক ঠিক মাঝখানের কমিটে চলে যায়। আপনি কোড চেক করে প্রজেক্ট কাজ করলে বলবেন \`git bisect good\`, আর ক্র্যাশ করলে বলবেন \`git bisect bad\`।
   - প্রতি ক্লিকের সাথে সার্চ অর্ধেক হয়ে যায়। অবশেষে গিট প্রিসাইজলি বাগার কমিটের ডিটেইলস স্ক্রিনে প্রিন্ট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চ্যাটিং অ্যাপে ইমোজি প্যানেল ওপেন হচ্ছে না:
- আপনি জানেন রিলিজ v1.0-এ এটি ঠিক ছিল, কিন্তু v1.5-এ ভেঙে গেছে।
- Git Bisect দিয়ে রান করায় গিট মাঝের কমিটে চেকআউট করাল।
- আপনি চেক করে দেখলেন ইমোজি কাজ করছে না -> \`git bisect bad\` লিখলেন।
- গিট আবার ড্রপ ডাউন করে অন্য কমিটে নিল। সেখানে কাজ করছে -> \`git bisect good\` লিখলেন।
- এভাবে মাত্র ৫-৬ বার চেক করে গিট বলে দিল অমুক ডেভেলপার অমুক ফাইলে এডিট করায় বাগটি ঢুকেছিল।

### উত্তম অনুশীলন
ম্যানুয়ালি টেস্ট না করে অটোমেটেড স্ক্রিপ্ট থাকলে \`git bisect run npm test\` কম্যান্ড দিয়ে পুরো টেস্ট লুপ গিটের ওপর ছেড়ে দিন। গিট নিজে নিজেই টেস্ট ফাইল চালিয়ে ১ মিনিটে বাগ খুঁজে বের করে রিসেট করে দেবে।

### সাধারণ ভুলসমূহ
বাগ চিহ্নিত করার পর git bisect reset কমান্ড দিতে ভুলে যাওয়া, যা আপনাকে একটি বিচ্ছিন্ন (detached HEAD) অবস্থায় আটকে রাখে।

### Code Example
\`\`\`bash
# ১. গিট বাইসেক্ট ডিবাগ চালু
$ git bisect start

# ২. বর্তমান কমিট বাগযুক্ত (bad)
$ git bisect bad

# ৩. আগের একটি সফল ভার্সন বা কমিট মার্ক (good)
$ git bisect good v1.2.0
# (গিট দেখাবে আর কয়টি কমিট টেস্ট করতে হবে)

# ৪. গিট অটোমেটিক মিডিয়ান কমিট চেকআউট করবে। চেক করে বলুন:
# প্রজেক্ট ভাঙা থাকলে:
$ git bisect bad
# প্রজেক্ট ঠিক থাকলে:
$ git bisect good

# ৫. বাগ খুঁজে পাওয়ার পর রুট শাখায় ফেরত যাওয়া
$ git bisect reset
\`\`\``
  },
  {
    id: 'other-topics-89',
    title: 'Explain Git Reflog and how to recover deleted branches or lost commits.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Git', 'Reflog', 'Disaster Recovery', 'Version Control', 'Advanced Git'],
    enAnswer: 'Git Reflog records every single local HEAD change, branch checkout, commit, reset, or cherry-pick. You recover deleted data by searching the reflog history for the SHA hash and running git checkout -b recovery-branch <hash>.',
    bnAnswer: 'Git Reflog লোকাল পিসিতে করা প্রতিটা HEAD পরিবর্তন, চেকআউট, রিসেট ও কমিটের ব্যাকআপ ট্র্যাকিং রাখে। রিফ্লগ থেকে কাঙ্ক্ষিত হ্যাশ আইডি খুঁজে git checkout -b recovery <hash> দিয়ে ডিলেট হওয়া ব্রাঞ্চ রিকভার করা যায়।',
    enExplanation: `### Explanation
Unlike \`git log\` which only displays the commit timeline of the active branch, \`git reflog\` tracks the movement of the local \`HEAD\` pointer over time:
1. **Complete History**: Reflog saves actions that do not belong to current branches, including commits that were squashed, resets that deleted files (\`git reset --hard\`), and deleted feature branches.
2. **Disaster Recovery**:
   - Every time you commit or checkout, Git writes the update to reflog.
   - These logs are private to your machine and expire after 30 to 90 days.
   - As long as the commit objects are not garbage collected by Git, you can locate the exact hash before a destructive reset or delete occurred and restore it.

### Real-World Example
You are developing a feature on branch \`feature-payment\`.
- You accidentally run \`git branch -D feature-payment\` and lose 3 days of work.
- \`git log\` will not show the branch because it is deleted.
- Running \`git reflog\` lists the commits you made on that branch before it was destroyed.
- Finding the last commit hash (\`a7b8c9d\`), you run \`git checkout -b feature-payment a7b8c9d\` and restore all your files instantly.

### Best Practice
Use reflog immediately after a git command failure. Do not run garbage collection commands manually (\`git gc\`) when searching for lost code, as that permanently purges unreferenced commit blobs from Git's local database.

### Common Mistakes
Thinking reflog is synced to GitHub. Reflog is strictly local to your machine; if you delete a branch locally that was never pushed, other developers cannot help you recover it via GitHub logs.

### Code Example
\`\`\`bash
# 1. View complete local HEAD movement history
$ git reflog

# Output example:
# a1b2c3d HEAD@{0}: reset: moving to HEAD~1 (Destructive reset!)
# e5f6g7h HEAD@{1}: commit: Added stripe checkout integration
# x9y8z7w HEAD@{2}: checkout: moving from main to feature-payment

# 2. Locate the hash before the reset occurred (e5f6g7h)
# 3. Recover the lost commit by creating a new branch at that pointer:
$ git checkout -b recover-payment e5f6g7h

# Now, your payment code is back on the new branch!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`git log\` কেবল বর্তমান সচল শাখার কমিট গ্রাফ দেখায়। কিন্তু \`git reflog\` লোকাল মেশিনে ঘটা আপনার প্রতিটা স্লাইড মুভমেন্ট ও ডিরেক্টরি পরিবর্তনের লগের ট্র্যাকিং রাখে:
১. **সার্বজনীন ইতিহাস**: রিফ্লগ এমন সব পরিবর্তন সেভ রাখে যা কোনো একটিভ ব্রাঞ্চে নেই। যেমন: স্কোয়াশ করা কমিট, রিসেট দিয়ে উধাও করা ফাইল (\`git reset --hard\`) এবং ডিলেট করা ফিচার ব্রাঞ্চ।
২. **বিপর্যয় থেকে উদ্ধার**:
   - আপনি লোকালি ডিলিট করলেও গিট সেই ফাইলগুলোর কমিট ডাটাবেজ সাথে সাথে মুছে ফেলে না; সেটি ৩০-৯০ দিনের জন্য ব্লিঙ্ক অবস্থায় থাকে।
   - রিফ্লগ থেকে সেই ডিলিট হওয়ার ঠিক আগের মুহূর্তের হ্যাশ আইডি খুঁজে বের করে তা রিস্টোর করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি একটি পেমেন্ট গেটওয়ের ব্রাঞ্চে ৩ দিন কোড লিখে ভুলে ব্রাঞ্চটি ডিলিট করে দিলেন:
- গিট লগে ব্রাঞ্চটি আর দেখাবে না।
- আপনি \`git reflog\` টাইপ করলেন। স্ক্রিনে দেখতে পেলেন ডিলিট করার ঠিক পূর্বে কোন কোন কমিট আইডি জেনারেট হয়েছিল।
- শেষ সাকসেসফুল এডিটের হ্যাশ আইডি \`e5f6g7h\` কপি করে \`git checkout -b payment-back e5f6g7h\` রান করার সাথে সাথে ৩ দিনের কোড ফিরে আসলো।

### উত্তম অনুশীলন
কোনো ভুল কম্যান্ড দিয়ে কোড হারিয়ে ফেললে সাথে সাথে রিফ্লগ ব্যবহার করুন। লোকাল ডাটাবেজে ওল্ড ট্র্যাশ ক্লিয়ার করার কম্যান্ড (\`git gc\`) রান করবেন না, এটি করলে ডিলিট ডাটা চিরতরে মুছে যায়।

### সাধারণ ভুলসমূহ
ভুল করে ভাবা যে রিফ্লগ রিমোট গিটহাবে সিঙ্ক হয়। রিফ্লগ সম্পূর্ণ লোকাল হিস্ট্রি, তাই পুশ না করা লোকাল ফাইল পিসি ফরম্যাট বা ডিলিট হলে অন্য কেউ রিকভার করতে পারবে না।

### Code Example
\`\`\`bash
# ১. লোকাল হেড মুভমেন্ট ইতিহাস দেখা
$ git reflog

# উদাহরণ আউটপুট:
# a1b2c3d HEAD@{0}: reset: hard reset (কোড ডিলিট হয়ে গেছে!)
# e5f6g7h HEAD@{1}: commit: পেমেন্ট গেটওয়ে ইমপ্লিমেন্ট করা হয়েছিল
# x9y8z7w HEAD@{2}: checkout: মেইন থেকে পেমেন্ট ব্রাঞ্চে সুইচ

# ২. ডিলিট বা রিসেট হওয়ার আগের হ্যাশ আইডি সিলেক্ট (e5f6g7h)
# ৩. ওই হ্যাশ আইডি দিয়ে নতুন ব্রাঞ্চে রিকভারি সম্পন্ন করা
$ git checkout -b recover-payment e5f6g7h
\`\`\``
  },
  {
    id: 'other-topics-90',
    title: 'How do you configure a GitHub Actions matrix build to test across multiple Node.js versions and OS types?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['GitHub Actions', 'Matrix Builds', 'CI/CD Pipelines', 'Automation', 'DevOps'],
    enAnswer: 'Configure matrix builds in GitHub Actions workflows using the strategy.matrix block. List variables for node-version and os; GitHub automatically spawns parallel job runners for each combination.',
    bnAnswer: 'GitHub Actions-এ strategy.matrix ব্লক ব্যবহার করে ম্যাট্রিক্স বিল্ড কনফিগার করা হয়। সেখানে node-version এবং os লিস্ট করলে গিটহাব অটোমেটিক প্রতিটা কম্বিনেশনের জন্য সমান্তরাল জবের রানার চালু করে।',
    enExplanation: `### Explanation
When publishing open-source libraries or scaling enterprise applications, you must guarantee that code functions correctly across multiple environments. Writing separate workflows is redundant. GitHub Actions **Matrix Builds** automate this:
1. **\`strategy.matrix\` Configuration**:
   - Defines arrays of configurations (e.g. \`node-version: [18, 20, 22]\`, \`os: [ubuntu-latest, windows-latest, macos-latest]\`).
   - GitHub multiplies these lists to spawn parallel runners (in this case, 3x3 = 9 parallel workflows).
2. **Fail-Fast**:
   - Setting \`fail-fast: true\` (default) cancels all remaining matrix combinations if any single job fails. Disabling it ensures all tests finish.

### Real-World Example
In a database adapter library:
- The code must run on Linux servers, Windows local setups, and Mac dev environments using Node 18, 20, and 22.
- Configuring a matrix build runs tests in 9 different configurations concurrently on GitHub cloud servers.
- If the library crashes on Windows with Node 18 due to file path slashes, the CI flags that combination, allowing the developer to fix compatibility issues before publishing.

### Best Practice
Use \`exclude\` or \`include\` options in your matrix to filter out unnecessary combinations (like skipping Windows testing on Node 18 if Node 20 is already covered), saving runner credits.

### Common Mistakes
Spawning too many matrix combinations in private repositories, which quickly consumes the monthly quota of free GitHub Actions runner minutes.

### Code Example
\`\`\`yaml
name: Cross-Platform Test Suite

on: [push, pull_request]

jobs:
  test:
    name: Run tests on Node \${{ matrix.node-version }} - \${{ matrix.os }}
    runs-on: \${{ matrix.os }}
    
    strategy:
      # 1. Define the Matrix grid
      matrix:
        os: [ubuntu-latest, windows-latest]
        node-version: [18, 20, 22]
      # 2. Prevent failing one combination from aborting others
      fail-fast: false

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Execute Tests
        run: npm test
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি লাইব্রেরি বা সফটওয়্যার উইন্ডোজ, লিনাক্স ও ম্যাকের ভিন্ন নোড ভার্সনে ঠিকঠাক কাজ করছে কিনা তা আলাদা আলাদা ফাইল না লিখে গিটহাবের **Matrix Builds** দিয়ে অটোমেটিক প্যারালালি টেস্ট করা হয়:
১. **\`strategy.matrix\` গ্রিড**:
   - এখানে আপনি কনফিগ ভেরিয়েবল লিস্ট করেন: \`os: [ubuntu, windows]\` ও \`node-version: [18, 20]\`।
   - গিটহাব এদের কম্বিনেশন তৈরি করে (২x২ = ৪টি ভিন্ন রানার কন্টেইনার) একই সাথে ৪টি টেস্ট রান করে দেবে।
২. **Fail-Fast**:
   - এটি ট্রু থাকলে যেকোনো একটি কম্বিনেশন ফেইল করলেই বাকি সচল থাকা রানারগুলো স্টপ হয়ে যায়। ফলস থাকলে সব শেষ পর্যন্ত চলে পুর্ণাঙ্গ রিপোর্ট দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফাইল হেল্পার প্লাগইন বানানোর সময়:
- প্লাগইনটি লিনাক্স ও উইন্ডোজের পাথ স্লাশের পার্থক্যের কারণে উইন্ডোজে ক্র্যাশ করত।
- ম্যাট্রিক্স বিল্ড দিয়ে সিআই পাইপলাইন টেস্ট করার ফলে গিটহাব উবুন্টু বিল্ডগুলো গ্রিন পাস দেখালেও উইন্ডোজের বিল্ডগুলো লাল ক্র্যাশ দেখায়। এর ফলে ডেপ্লয় করার আগেই বাগ ফিক্স সম্ভব হয়।

### উত্তম অনুশীলন
অহেতুক বিল্ড খরচ বাঁচাতে অপ্রয়োজনীয় কম্বিনেশন বাদ দিতে \`exclude\` ডিরেক্টিভ ব্যবহার করুন। প্রাইভেট রিপোজিটরিতে লিমিটেড গিটহাব মিনিটস থাকায় বেশি কম্বিনেশন তৈরি করা এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ
প্রাইভেট রিপোজিটরিতে অহেতুক শত শত ম্যাট্রিক্স কম্বিনেশন চালু করে ফেলা, যা দ্রুত আপনার ফ্রি গিটহাব রানার মিনিটস শেষ করে দেয়।

### Code Example
\`\`\`yaml
# গিটহাব অ্যাকশনে ম্যাট্রিক্স বিল্ড সেটআপ
name: Cross-Platform Test Suite

on: [push, pull_request]

jobs:
  test:
    name: Run tests on Node \${{ matrix.node-version }} - \${{ matrix.os }}
    runs-on: \${{ matrix.os }}
    
    strategy:
      # ১. ম্যাট্রিক্স ভেরিয়েবল ডিফাইন
      matrix:
        os: [ubuntu-latest, windows-latest]
        node-version: [18, 20, 22]
      fail-fast: false

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Execute Tests
        run: npm test
\`\`\``
  },
  {
    id: 'other-topics-91',
    title: 'Explain the difference between GitHub Actions Composite Actions and Reusable Workflows.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['GitHub Actions', 'Composite Actions', 'Reusable Workflows', 'CI/CD Best Practices', 'DevOps'],
    enAnswer: 'Composite Actions combine multiple workflow steps into a single reusable action running in the same job context. Reusable Workflows call entire YAML files containing multiple jobs and environments, behaving like sub-pipelines.',
    bnAnswer: 'Composite Actions একই জবের কনটেক্সটে একাধিক স্টেপকে কম্বাইন করে একটি শেয়ার্ড অ্যাকশন বানায়। আর Reusable Workflows সম্পূর্ণ পাইপলাইন ফাইলকে কল করে যাতে একাধিক জব ও রানার থাকতে পারে।',
    enExplanation: `### Explanation
To dry up CI/CD workflows across multiple repositories, GitHub Actions provides two reuse patterns:
1. **Composite Actions (\`action.yml\`)**:
   - Scope: Reuses *steps* within a job.
   - Shell: Must explicitly declare \`using: "composite"\` and specify \`shell: bash\` on every run step.
   - Limitation: Cannot run multiple separate jobs, use secret environments directly, or change runner OS inside the action.
2. **Reusable Workflows (\`workflow_call\`)**:
   - Scope: Reuses entire *workflows* (jobs and pipelines).
   - Integration: Triggered using \`uses: owner/repo/.github/workflows/shared.yml@ref\`.
   - Advantages: Supports multiple parallel jobs, builds matrix strategies, targets environments (with approval gates), and passes encrypted secrets cleanly.

### Real-World Example
- **Composite Action**: Creating a step that installs Node, sets up ssh keys, and runs a security check. This step is repeated in 10 different projects.
- **Reusable Workflow**: Creating a deployment pipeline that builds an image, runs integration tests, pushes to ECR, and triggers a slack alert. Calling this workflow from 5 different repositories reuses the entire devops process with a single line of code.

### Best Practice
Use Composite Actions to pack common build steps (like cache setups and dependency checks) into reusable modules. Use Reusable Workflows to define company-wide standard CI/CD deployment pipelines.

### Common Mistakes
Trying to use matrix strategy configurations inside a Composite Action, which is syntactically unsupported and will fail workflow compilation.

### Code Example
\`\`\`yaml
# --- COMPOSITE ACTION EXAMPLE ---
# Save as: .github/actions/setup-and-install/action.yml
name: Setup Node and Cache
description: Installs node and executes npm ci with caching

inputs:
  node-version:
    required: true
    default: '20'

runs:
  using: "composite" # Tells GitHub this is composite
  steps:
    - uses: actions/setup-node@v3
      with:
        node-version: \${{ inputs.node-version }}
        cache: 'npm'
    
    # Must declare shell in composite steps!
    - run: npm ci
      shell: bash
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
গিটহাব অ্যাকশন ফাইলে একই স্ক্রিপ্ট বারবার লেখা এড়াতে এবং কোড ড্রায় (DRY) রাখতে দুটি পদ্ধতি ব্যবহার করা হয়:
১. **Composite Actions (\`action.yml\`)**:
   - এর পরিধি হলো জবের ভেতরের *স্টেপ* বা কমান্ডগুলো রিইউজ করা।
   - এর জন্য ফাইলে \`using: "composite"\` লিখতে হয় এবং প্রতিটা কম্যান্ড লাইনে রান করার শেল (\`shell: bash\`) ডিফাইন করতে হয়।
   - এতে আলাদা একাধিক জব বা আলাদা ওএস রানার কল করা যায় না।
২. **Reusable Workflows (\`workflow_call\`)**:
   - এর পরিধি হলো সম্পূর্ণ একটি *ওয়ার্কফ্লো* ফাইল অন্য ফাইল থেকে রিইউজ করা।
   - এটি সচল করতে ফাইলটি \`uses\` কম্যান্ড দিয়ে কল করলেই ব্যাকগ্রাউন্ডের সব ডিক্লেয়ার্ড জব ও ম্যাট্রিক্স প্যারালালি অ্যাক্টিভ হয়ে যায়। এটি ডিক্লেয়ার্ড এনভায়রনমেন্ট ও সিক্রেট অ্যাক্সেস সাপোর্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
- **Composite Action**: নোড জেএস সেটআপ করা ও কোড স্ক্যান করার জন্য ৩টি কমন স্টেপ যা আপনার অফিসের সব প্রোজেক্টে এক।
- **Reusable Workflow**: একটি সম্পূর্ণ রিলিজ ডাব পাইপলাইন যা ডকার ইমেজ তৈরি করে, ক্লাউডে টেস্ট করে, এডমিনের পারমিশন গেট পার হয়ে এডব্লিউএস (AWS)-এ ডেপ্লয় করে। রিইউজেবল ফাইল ব্যবহারে ৫টি প্রোজেক্টের কোড খালি ১ লাইন দিয়েই ডেপ্লয় করা সম্ভব।

### উত্তম অনুশীলন
ছোট ও মাঝারি প্রজেক্টের কোড বিল্ড ও লাইব্রেরি ইনস্টল ধাপে Composite Actions ব্যবহার করুন, আর পুরো কোম্পানির ডেপ্লয়মেন্ট গেটওয়ে কনফিগার করতে Reusable Workflows ব্যবহার করুন।

### সাধারণ ভুলসমূহ
Composite Action ফাইলের ভেতর ম্যাট্রিক্স (matrix) স্ট্র্যাটেজি ব্যবহার করার চেষ্টা করা, যা গিটহাব সিনট্যাক্স অনুযায়ী এরর দেখাবে।

### Code Example
\`\`\`yaml
# Composite Action তৈরির নিয়ম (.github/actions/setup-and-install/action.yml)
name: Setup Node and Cache
description: Installs node and executes npm ci with caching

inputs:
  node-version:
    required: true
    default: '20'

runs:
  using: "composite" # কম্পোজিট ডিক্লেয়ারেশন
  steps:
    - uses: actions/setup-node@v3
      with:
        node-version: \${{ inputs.node-version }}
        cache: 'npm'
    
    # কম্পোজিট স্টেপে অবশ্যই shell ডিক্লেয়ার করতে হবে!
    - run: npm ci
      shell: bash
\`\`\``
  },
  {
    id: 'other-topics-92',
    title: 'Explain Visual Regression Testing in Playwright and how to handle dynamic page elements.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Playwright', 'Visual Regression', 'Snapshot Testing', 'Dynamic Elements', 'E2E Testing'],
    enAnswer: 'Visual Regression Testing compares page screenshots against golden baseline images. Handle dynamic elements (dates, random text) using the mask option to cover them with solid color blocks before diffing.',
    bnAnswer: 'ভিজ্যুয়াল রিগ্রেশন টেস্টিং বর্তমান স্ক্রিনশটকে বেস গোল্ডেন ইমেজের সাথে তুলনা করে। ডাইনামিক এলিমেন্ট (তারিখ, র্যান্ডম টেক্সট) হ্যান্ডেল করতে mask অপশন দিয়ে সেগুলোকে সলিড কালার ব্লক দিয়ে ঢেকে দেওয়া হয়।',
    enExplanation: `### Explanation
Visual regression testing asserts that UI layout, alignment, and styling remain correct pixel-for-pixel:
1. **Screen Comparison**: Playwright captures a screenshot and compares it to a pre-recorded reference image (\`toMatchSnapshot()\`). If pixels differ beyond a set threshold, the test fails.
2. **The Dynamic Content Problem**: Pages containing dynamic timestamps, loading indicators, database data, or animations generate different screenshots on every run, causing false test failures.
3. **Masking & Hiding**:
   - **\`mask\`**: Replaces specified Locators with a solid pink box before diffing.
   - **\`animations: 'allow'\` / \`'disabled'\`**: Disables CSS animations or gif playback to capture stable snapshots.

### Real-World Example
In a customer billing invoice view:
- The invoice includes the current date (e.g. "June 19, 2026") and invoice ID.
- Running a visual test tomorrow will fail because the date changes.
- To prevent this, you pass \`{ mask: [page.locator('.invoice-date'), page.locator('.invoice-id')] }\` to \`toHaveScreenshot()\`. Playwright covers the invoice date and ID with pink blocks, comparing only the layout grid and logo styling securely.

### Best Practice
Configure a small pixel mismatch threshold (e.g. \`maxDiffPixels: 100\` or \`maxDiffPixelRatio: 0.05\`) in your test config to prevent anti-aliasing variations across different browser engines from triggering false failures.

### Common Mistakes
Running visual regression tests locally on Mac and expecting them to pass in Linux CI pipelines. Font rendering engines vary across OS environments. Always generate baseline snapshots inside Docker containers matching the CI OS.

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('dashboard home page visual layout verification', async ({ page }) => {
  await page.goto('https://myapp.com/dashboard');

  // Wait for dynamic charts to finish rendering
  await page.waitForSelector('.chart-container');

  // Compare screenshot masking dynamic username and date panels
  await expect(page).toHaveScreenshot('dashboard-home.png', {
    // 1. Mask dynamic DOM nodes
    mask: [
      page.locator('.user-profile-name'),
      page.locator('.live-clock')
    ],
    // 2. Adjust pixel diff tolerance for OS font rendering
    maxDiffPixelRatio: 0.02,
    // 3. Halt animations to capture stable screen state
    animations: 'disabled'
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভিজ্যুয়াল রিগ্রেশন টেস্ট ইউআই-এর লেআউট, এলাইনমেন্ট ও ফন্ট স্টাইলিং পিক্সেল বাই পিক্সেল চেক করে:
১. **স্ক্রিনশট তুলনা**: প্লেরাইট পেজের বর্তমান স্ক্রিনশট নিয়ে সেটিকে পূর্বে সেভ করা বেস লাইনের সাথে ম্যাচ করায় (\`toMatchSnapshot()\`)। পিক্সেল ম্যাচিং ফেইল করলে টেস্ট ফেইল দেখায়।
২. **ডাইনামিক কন্টেন্ট সমস্যা**: পেজে লাইভ ঘড়ি, ইউজার নেম বা এনিমেশন থাকলে প্রতিবার স্ক্রিনশট ভিন্ন আসবে, যা টেস্ট এরর তৈরি করে।
৩. **মাস্কিং (Masking)**:
   - **\`mask\`**: এটি ম্যাচ করানোর ঠিক আগে ডাইনামিক অংশগুলোকে একটি সলিড কালার বক্স দিয়ে ঢেকে দেয়।
   - **\`animations: 'disabled'\`**: সিএসএস এনিমেশন পজ করে দেয় যাতে স্ক্রিনশট কাঁপাকাঁপি না করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ইনভয়েস বিলিং পেজে:
- বিলের ভেতরের তারিখ প্রতিনিয়ত চেঞ্জ হয়। তারিখ পরিবর্তনের কারণে ভিজ্যুয়াল টেস্ট রোজ সকালে ফেইল করবে।
- তারিখ ফিল্ডটিকে মাস্ক করে দিলে (\`mask: [page.locator('.date')]\`) প্লেরাইট তারিখের ওপর একটি গোলাপী ব্লক টেনে দেবে। ফলে কেবল ইনভয়েসের লেআউট ডিজাইনটি চেক হবে, তারিখ ভিন্ন হলেও টেস্ট পাস করবে।

### উত্তম অনুশীলন
ডিজাইনের ফন্ট স্মুথিং বা ছোটখাটো পিক্সেল পরিবর্তনের জন্য \`maxDiffPixelRatio: 0.02\` সেট করে রাখুন। ভিজ্যুয়াল টেস্টের ইমেজগুলো লোকাল উইন্ডোজ/ম্যাক-এ না বানিয়ে ডকার কন্টেইনারে বানান, কারণ সিআই লিনাক্স সার্ভারে ফন্ট রেন্ডারিং লোকাল পিসি থেকে ভিন্ন হয়।

### সাধারণ ভুলসমূহ
লোকাল ম্যাক/উইন্ডোজ পিসিতে ভিজ্যুয়াল স্ন্যাপশট জেনারেট করে তা লিনাক্স সিআই সার্ভারে ম্যাচ করার চেষ্টা করা, যা ফন্ট রেন্ডারিং পার্থক্যের কারণে ফেইল করে।

### Code Example
\`\`\`typescript
// Playwright-এ ভিজ্যুয়াল টেস্টে ডাইনামিক ফিল্ড মাস্ক করার নিয়ম
import { test, expect } from '@playwright/test';

test('dashboard home page visual layout verification', async ({ page }) => {
  await page.goto('https://myapp.com/dashboard');

  // চার্ট লোড হওয়া পর্যন্ত ওয়েট করা হলো
  await page.waitForSelector('.chart-container');

  // স্ক্রিনশট তুলনা ও মাস্কিং ফিল্ড ম্যাপ
  await expect(page).toHaveScreenshot('dashboard-home.png', {
    // ১. ডাইনামিক ফিল্ড মাস্কিং
    mask: [
      page.locator('.user-profile-name'),
      page.locator('.live-clock')
    ],
    // ২. ২% পিক্সেল ছাড় দেওয়ার লিমিট
    maxDiffPixelRatio: 0.02,
    // ৩. সিএসএস এনিমেশন ডিজঅ্যাবেল রাখা হলো
    animations: 'disabled'
  });
});
\`\`\``
  },
  {
    id: 'other-topics-93',
    title: 'How do you interact with IFrames and Shadow DOM elements in Playwright?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Playwright', 'IFrames', 'Shadow DOM', 'E2E Testing', 'Locators'],
    enAnswer: 'Access IFrames in Playwright using the frameLocator() API. Shadow DOM elements are bypassed automatically; Playwrights engine traverses shadow roots natively without special selectors.',
    bnAnswer: 'Playwright-এ frameLocator() ব্যবহার করে আইফ্রেমের (IFrame) ভেতরের এলিমেন্ট অ্যাক্সেস করতে হয়। তবে Shadow DOM এলিমেন্টগুলো প্লেরাইটের সার্চ ইঞ্জিন অটোমেটিক ডিটেক্ট করে কুয়েরি করতে পারে।',
    enExplanation: `### Explanation
Interacting with third-party components (like Stripe payment fields) or web components requires understanding sandboxed boundaries:
1. **IFrames (Separate documents)**:
   - Elements inside an \`<iframe>\` do not belong to the parent page DOM.
   - Standard locators (\`page.locator()\`) cannot find them.
   - You must target the frame first using \`page.frameLocator(selector)\` to build a sandboxed context, then call standard locators inside.
2. **Shadow DOM (Encapsulated scopes)**:
   - Modern web components isolate their CSS and DOM inside shadow roots.
   - Playwright's locator engine handles this automatically: it penetrates open shadow roots natively. You write standard selector tags without special Shadow Root APIs.

### Real-World Example
- **IFrame**: Testing a checkout checkout. The credit card input is hosted inside a Stripe iframe to prevent security leaks. To fill the input, you use \`page.frameLocator('#stripe-iframe').locator('#card-number').fill('4242...')\`.
- **Shadow DOM**: Testing a custom corporate slider component \`<company-slider>\`. The internal button is hidden in a shadow root. Playwright clicks it directly using \`page.locator('company-slider button').click()\`.

### Best Practice
Always wait for the iframe to load before interacting with its contents (use locator auto-waiting). Avoid accessing frames by index number (like \`frame(0)\`), as frame loading sequences are dynamic and can cause race condition failures.

### Common Mistakes
Trying to query shadow DOM elements using custom XPath selectors, which fails because XPath specs do not support traversing shadow boundaries. Use CSS selectors instead.

### Code Example
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('interacts with stripe iframe and custom web component', async ({ page }) => {
  await page.goto('https://myapp.com/checkout');

  // 1. Target IFrame context using frameLocator
  const stripeFrame = page.frameLocator('iframe[name="stripe-card-iframe"]');
  
  // Interact with inputs inside the secure frame
  await stripeFrame.locator('#card-number-input').fill('4242424242424242');

  // 2. Target Shadow DOM element (CSS path traverses shadow root automatically!)
  const shadowSliderButton = page.locator('custom-slider-element >>> button.next-slide');
  await shadowSliderButton.click();

  await expect(page.locator('.success-payment')).toBeVisible();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আইফ্রেম (IFrame) ও শ্যাডো ডম (Shadow DOM) হলো ব্রাউজারের আইসোলেটেড বা ঘেরা অংশ যা প্যারেন্ট পেজের সিলেক্টর দিয়ে সরাসরি অ্যাক্সেস করা যায় না:
১. **আইফ্রেম (IFrames)**:
   - আইফ্রেম হলো মূল ওয়েবসাইটের ভেতর রেন্ডার হওয়া আরেকটি ভিন্ন ওয়েবসাইট।
   - এর এলিমেন্ট খুজে পেতে \`page.frameLocator(iframe_selector)\` দিয়ে তার আন্ডারে কুয়েরি চালাতে হয়।
২. **Shadow DOM**:
   - এটি ওয়েব কম্পোনেন্টের নিজস্ব ডম ট্রি যা সিএসএস ওভাররাইট রক্ষা করে।
   - প্লেরাইটের ডিফল্ট সিলেক্টর ইঞ্জিন শ্যাডো রুটগুলোর সীমানা নিজেই টপকে যায়। এখানে আলাদা কোনো ডিরেক্টিভ ছাড়াই রেগুলার সিএসএস সিলেক্টর ব্যবহার করা সম্ভবভ।

### বাস্তব-ভিত্তিক উদাহরণ
- **IFrame**: একটি কার্ড পেমেন্ট ফিল্ড স্ট্রাইপ (Stripe) সিকিউরিটি আইফ্রেমে রয়েছে। এটি পূরণ করতে আপনাকে প্রথমে স্ট্রাইপ ফ্রেম লোকেটর টার্গেট করতে হবে: \`page.frameLocator('#stripe').locator('#card-number')\`।
- **Shadow DOM**: একটি কাস্টম বাটন তৈরি করা আছে শ্যাডো রুটে। প্লেরাইটে সরাসরি \`page.locator('slider button')\` লিখলেই শ্যাডো রুটের বাটনটি অ্যাক্সেস করা যাবে।

### উত্তম অনুশীলন
আইফ্রেমগুলো লোড হতে সময় নেয়, তাই ক্লিক করার পূর্বে লোকেটর অটো-ওয়েট সচল রাখা আবশ্যক। আইফ্রেম ট্র্যাকিংে ইনডেক্স নম্বর (\`frames[0]\`) ব্যবহার করবেন না, কারণ এটি সিকোয়েন্স পরিবর্তন হলে উল্টাপাল্টা এলিমেন্ট সিলেক্ট করে।

### সাধারণ ভুলসমূহ
শ্যাডো ডম এলিমেন্ট টার্গেট করার সময় এক্সপাথ (XPath) সিলেক্টর ব্যবহার করা, যা শ্যাডো বাউন্ডারি ভেদ করতে পারে না।

### Code Example
\`\`\`typescript
// Playwright-এ IFrame ও Shadow DOM অ্যাক্সেস করার রুলস
import { test, expect } from '@playwright/test';

test('interacts with stripe iframe and custom web component', async ({ page }) => {
  await page.goto('https://myapp.com/checkout');

  // ১. frameLocator দিয়ে সিকিউর আইফ্রেম সিলেক্ট করা হলো
  const stripeFrame = page.frameLocator('iframe[name="stripe-card-iframe"]');
  
  // আইফ্রেমের ভেতরের ইনপুটে টাইপ করা হচ্ছে
  await stripeFrame.locator('#card-number-input').fill('4242424242424242');

  // ২. শ্যাডো ডম এলিমেন্ট সিলেক্ট (CSS সিলেক্টর শ্যাডো বাউন্ডারি ভেদ করে কাজ করবে)
  const shadowSliderButton = page.locator('custom-slider-element button.next-slide');
  await shadowSliderButton.click();

  await expect(page.locator('.success-payment')).toBeVisible();
});
\`\`\``
  },
  {
    id: 'other-topics-94',
    title: 'How do you configure Jest global setup and teardown routines for database integration testing?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Jest', 'Global Setup', 'Global Teardown', 'Integration Testing', 'Test Databases'],
    enAnswer: 'Configure Jest global routines by specifying globalSetup and globalTeardown script paths in jest.config.js. These scripts execute exactly once before and after the entire test suite runs, setting up database sandboxes.',
    bnAnswer: 'jest.config.js ফাইলে globalSetup ও globalTeardown স্ক্রিপ্টের পাথ বসিয়ে এটি কনফিগার করা হয়। এই স্ক্রিপ্টগুলো সম্পূর্ণ টেস্ট স্যুট রান হওয়ার আগে ও পরে কেবল একবার রান হয়ে টেস্ট ডাটাবেজ অন/অফ করে।',
    enExplanation: `### Explanation
Running database integration tests requires spinning up and destroying a test database sandbox. Running this inside \`beforeAll\` of every test file is slow and locks database connections:
1. **\`globalSetup\` Script**:
   - Executes once before any test files are loaded or run.
   - Ideal for booting an in-memory MongoDB server (\`mongodb-memory-server\`) or executing SQL migrations.
2. **\`globalTeardown\` Script**:
   - Executes once after all test files finish running.
   - Cleans up connection pools, terminates processes, and clears memory.
3. **IPC (Inter-Process Communication)**:
   - Global setup runs in a separate Node.js process from your tests. You pass database URI credentials using environment variables (\`process.env\`).

### Real-World Example
In a backend API test suite:
- You need a clean PostgreSQL test database.
- The \`globalSetup\` script boots a Docker container of Postgres and runs Knex migrations. It saves the connection string in \`process.env.TEST_DB_URL\`.
- The tests run in parallel, connecting to the clean database instance.
- The \`globalTeardown\` script executes, stops the Docker container, and frees system ports, preventing port conflict crashes on subsequent builds.

### Best Practice
Use in-memory databases (like \`mongodb-memory-server\`) for fast, isolated MongoDB testing. Always verify connection state variables are terminated in the teardown phase to prevent Jest from hanging indefinitely after test completion.

### Common Mistakes
Forgetting that variables declared in \`globalSetup\` (like local variables) are not shared directly with test files because they run in different process scopes. You must communicate via \`process.env\` or write config files to disk.

### Code Example
\`\`\`javascript
// 1. Register scripts in jest.config.js
module.exports = {
  testEnvironment: 'node',
  globalSetup: './tests/globalSetup.ts',
  globalTeardown: './tests/globalTeardown.ts'
};

// 2. Define globalSetup.ts
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function () {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  // Pass connection string via environment variables
  process.env.MONGO_URI = uri;
  
  // Store reference globally to close in teardown
  (global as any).__MONGO_SERVER__ = mongoServer;
  console.log('\\nStarted In-Memory MongoDB Server:', uri);
}

// 3. Define globalTeardown.ts
export default async function () {
  console.log('\\nStopping In-Memory MongoDB Server...');
  const mongoServer = (global as any).__MONGO_SERVER__;
  if (mongoServer) {
    await mongoServer.stop();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেজ ইন্টিগ্রেশন টেস্ট রান করার সময় প্রতিবার নতুন ডাটাবেজ তৈরি ও টেস্ট শেষে তা মুছে ফেলার কাজ প্রতিটি টেস্ট ফাইলের \`beforeAll\`-এ লিখলে টেস্ট রান টাইম অনেক বেড়ে যায়। জেস্ট গ্লোবাল রুটিন এটি একবারে সম্পন্ন করে:
১. **\`globalSetup\`**:
   - এটি কোনো টেস্ট রান হওয়ার পূর্বে একবার নোড ব্যাকগ্রাউন্ড প্রসেস চালু করে ডাটাবেজ বুট বা মাইগ্রেশন রান করে।
২. **\`globalTeardown\`**:
   - সম্পূর্ণ টেস্ট স্যুট শেষ হওয়ার পর কানেকশন পুল ক্লোজ ও মেমোরি সার্ভার অফ করে মেমোরি খালি করে।
৩. **প্রসেস কমিউনিকেশন**:
   - গ্লোবাল সেটআপ ও টেস্ট ফাইলগুলো আলাদা প্রসেসে রান হয়। সেটআপ ফাইলটি এপিআই ডাটাবেজ লিঙ্কটি \`process.env\`-এ অ্যাসাইন করে দেয় যা সব টেস্ট ফাইল অ্যাক্সেস করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি এক্সপ্রেস এপিআই টেস্ট করার সময়:
- \`globalSetup\` নোড মেমোরি ডাটাবেজ (In-memory DB) চালু করে একটি সিকিউর কানেকশন স্ট্রিং এনভায়রনমেন্ট ভেরিয়েবলে দিয়ে দিল।
- সব টেস্ট ফাইল ওই কানেকশনে ডাটা রাইট ও ডিলিট করে টেস্ট শেষ করল।
- \`globalTeardown\` সাথে সাথে ডাটাবেজ কানেকশন স্টপ করে ডকার সার্ভিস রিলিজ করে দিল। এর ফলে পোর্ট ব্লক এরর এড়ানো সম্ভব হয়।

### উত্তম অনুশীলন
টেস্ট ফিনিশ হওয়ার পর জেস্ট প্রসেস যাতে আটকে না থাকে, তার জন্য নিশ্চিত করুন সব সকেট কানেকশন ও মেমোরি সার্ভার টিয়ারডাউন ফাইলে স্টপ হয়েছে।

### সাধারণ ভুলসমূহ
globalSetup ফাইলের লোকাল ভেরিয়েবলগুলোকে সরাসরি টেস্ট ফাইলে পাওয়ার আশা করা। এরা আলাদা প্রসেসে চলায় কেবল process.env দিয়ে ডাটা পাস করা যায়।

### Code Example
\`\`\`javascript
// jest.config.js-এ গ্লোবাল স্ক্রিপ্ট রেজিস্ট্রেশন
module.exports = {
  testEnvironment: 'node',
  globalSetup: './tests/globalSetup.ts',
  globalTeardown: './tests/globalTeardown.ts'
};

// --- globalSetup.ts ---
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function () {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  // এনভায়রনমেন্ট ভেরিয়েবল দিয়ে লিংক পাস
  process.env.MONGO_URI = uri;
  
  (global as any).__MONGO_SERVER__ = mongoServer;
  console.log('\\nStarted In-Memory MongoDB Server:', uri);
}

// --- globalTeardown.ts ---
export default async function () {
  console.log('\\nStopping In-Memory MongoDB Server...');
  const mongoServer = (global as any).__MONGO_SERVER__;
  if (mongoServer) {
    await mongoServer.stop();
  }
}
\`\`\``
  },
  {
    id: 'other-topics-95',
    title: 'Explain Sentry Transaction Tracing and Application Performance Monitoring (APM) integrations.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Sentry', 'Transaction Tracing', 'APM', 'Performance Monitoring', 'DevOps'],
    enAnswer: 'Sentry transaction tracing tracks HTTP requests across service boundaries using traceparent headers. It profiles slow database queries, maps error root causes, and visualizes system latency bottlenecks.',
    bnAnswer: 'Sentry ট্রানজ্যাকশন ট্রেসিং traceparent হেডারের মাধ্যমে বিভিন্ন সার্ভার বা ক্লায়েন্ট সীমানা পেরিয়ে রিকোয়েস্ট ট্র্যাক করে। এটি স্লো ডাটাবেজ কোয়েরি চিহ্নিত করে সিস্টেমের লেটেন্সি বের করে।',
    enExplanation: `### Explanation
Application Performance Monitoring (APM) inside Sentry allows developers to trace a transaction's lifecycle from client interactions down to backend database queries:
1. **Distributed Tracing**:
   - When a user clicks a button, Sentry SDK generates a unique trace ID and appends it to outgoing requests using the \`sentry-trace\` or \`traceparent\` HTTP header.
   - The backend server intercepts the header, binds the logs to the same trace context, and forwards it to downstream APIs.
2. **Transaction Spans**:
   - Tracks individual execution blocks (e.g. database serialization, password hashing, stripe api calls) as "spans" inside a parent transaction.
   - Pinpoints exactly which block is slow.

### Real-World Example
A checkout button takes 5 seconds to respond:
- Frontend Sentry reports a transaction duration of 5000ms.
- Inspecting the trace parent graph shows:
  - HTTP network delay: 50ms.
  - Express controller execution: 10ms.
  - Stripe external checkout call: 4800ms.
  - SQL query write: 140ms.
- The developer instantly identifies that the slow response is caused by Stripe's API delay, not the internal database queries.

### Best Practice
Configure Sentry transaction sampling rates dynamically (\`tracesSampleRate: 0.1\` or lower in production) to avoid consuming Sentry subscription quotas and slowing down server threads under high traffic.

### Common Mistakes
Forgetting to configure CORS headers to allow Sentry tracing headers (\`sentry-trace\`, \`baggage\`), causing browser security blocks on cross-origin API calls.

### Code Example
\`\`\`typescript
import * as Sentry from '@sentry/node';

// Initialize Sentry with Performance Monitoring enabled
Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  
  // 1. Enable APM metrics
  tracesSampleRate: 0.2, // Track 20% of all transactions in production
});

// Custom transaction trace scope in Express controller
import express from 'express';
const app = express();

app.get('/api/checkout', async (req, res) => {
  // Start Sentry transaction manually
  const transaction = Sentry.startTransaction({
    op: 'http.server',
    name: 'GET /api/checkout',
  });

  try {
    // Start a custom span for database operation
    const dbSpan = transaction.startChild({
      op: 'db.query',
      description: 'Fetch active user account details'
    });
    
    const user = await fetchUserAccount(req.query.userId as string);
    dbSpan.finish(); // Finish database span

    res.json(user);
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Finish main transaction to send metrics to Sentry Dashboard
    transaction.finish();
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Sentry APM এবং ট্রানজ্যাকশন ট্রেসিং ক্লায়েন্ট ব্রাউজার থেকে শুরু করে ব্যাকএন্ড ডাটাবেজের শেষ প্রান্ত পর্যন্ত একটি রিকোয়েস্টের পুরো ট্রাভেল জার্নি ম্যাপ করতে সাহায্য করে:
১. **ডিস্ট্রিবিউটেড ট্রেসিং (Distributed Tracing)**:
   - ক্লায়েন্ট এপিআই রিকোয়েস্ট পাঠানোর সময় Sentry ব্রাউজার লাইব্রেরি হেডার হিসেবে \`sentry-trace\` আইডি যুক্ত করে দেয়।
   - ব্যাকএন্ড সার্ভার এই হেডার রিড করে সেশন ও কোয়েরি ট্র্যাকগুলো ওই একই ট্রেসিং আইডির সাথে ট্যাগ করে ফেলে।
২. **ট্রানজ্যাকশন স্প্যান (Spans)**:
   - এটি প্রতিটি প্রসেসের অংশগুলোকে (যেমন: পাসওয়ার্ড হ্যাশিং, পেমেন্ট গেটওয়ে রিড, মঙ্গোডিবি রাইট) ছোট ছোট ভাগে ম্যাপ করে সময় ডিউরেশন গ্রাফ দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সাইটে পেমেন্ট সাকসেস হতে ৫ সেকেন্ড সময় নিচ্ছে:
- সেন্ট্রির ট্রানজ্যাকশন গ্রাফ ওপেন করে ডেভেলপার দেখতে পেলেন:
  - ক্লায়েন্ট রিকোয়েস্ট ল্যাগ: ৫০ মিলি-সেকেন্ড।
  - ডাটাবেজ আপডেট টাইম: ১০০ মিলি-সেকেন্ড।
  - থার্ড-পার্টি গেটওয়েতে রিকোয়েস্ট আটকে আছে: ৪.৮ সেকেন্ড।
- এর ফলে খুব সহজে আইডেন্টিফাই করা যায় যে সমস্যাটি আমাদের প্রজেক্টে নয়, বরং গেটওয়ে পার্টনারের এপিআই ডাউনের কারণে হচ্ছে।

### উত্তম অনুশীলন
প্রোডাকশন ডেপ্লয়মেন্টে \`tracesSampleRate\` ০.১ বা ০.২ (১০% বা ২০% রিকোয়েস্ট ট্রেস) সেট করুন। এটি সার্ভার পারফরম্যান্স ও সেন্ট্রি ড্যাশবোর্ড কোটা অক্ষুণ্ণ রাখে।

### সাধারণ ভুলসমূহ
সেন্ট্রির ট্রেসিং হেডারগুলো ক্রস-অরিজিন এপিআই রিকোয়েস্টে এলাউ করতে সিওআরএস (CORS) কনফিগার না করা, যা ব্রাউজার সিকিউরিটি ব্লকিং ট্রিগার করে।

### Code Example
\`\`\`typescript
// নোড জেএস-এ Sentry APM ও কাস্টম ট্রানজ্যাকশন স্প্যান মনিটরিং
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  tracesSampleRate: 0.2, // ২০% রিকোয়েস্ট ট্র্যাক করবে
});

import express from 'express';
const app = express();

app.get('/api/checkout', async (req, res) => {
  const transaction = Sentry.startTransaction({
    op: 'http.server',
    name: 'GET /api/checkout',
  });

  try {
    // ডাটাবেজ কুয়েরি ট্র্যাকিংয়ের জন্য চাইল্ড স্প্যান তৈরি
    const dbSpan = transaction.startChild({
      op: 'db.query',
      description: 'Fetch active user account details'
    });
    
    const user = await fetchUserAccount(req.query.userId as string);
    dbSpan.finish(); // চাইল্ড স্প্যান ফিনিশ

    res.json(user);
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // সেন্ট্রিতে ডাটা পাঠানোর জন্য মেইন ট্রানজ্যাকশন ফিনিশ করা হলো
    transaction.finish();
  }
});
\`\`\``
  },
  {
    id: 'other-topics-96',
    title: 'Explain Dragonfly multi-threaded lock engine vs Redis single-threaded execution.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Dragonfly', 'Redis Architecture', 'Locking Engine', 'Concurrency', 'Databases'],
    enAnswer: 'Redis is single-threaded and executes commands sequentially to prevent race conditions. Dragonfly uses a multi-threaded shared-nothing architecture, executing keyspace transactions concurrently using a fiber-based lock manager.',
    bnAnswer: 'রেডিস সিঙ্গল-থ্রেডেড হওয়ায় সব কমান্ড একের পর এক সিরিয়ালি রান করিয়ে রেস কন্ডিশন এড়ায়। ড্রাগনফ্লাই মাল্টি-থ্রেডেড শেয়ার্ড-নাথিং মডেল ও ফাইবার-ভিত্তিক লক ম্যানেজার ব্যবহার করে সমান্তরালভাবে ট্রানজ্যাকশন রান করে।',
    enExplanation: `### Explanation
Understanding how Dragonfly and Redis process commands under the hood explains their performance differences:
1. **Redis Execution (Single-Threaded)**:
   - All client queries (GET, SET, EVAL) enter a single queue and run sequentially on one CPU core.
   - Advantage: Simple, absolute thread-safety, no deadlock concerns.
   - Disadvantage: Cannot scale vertically on multi-core servers, and long-running queries block all other clients.
2. **Dragonfly Execution (Multi-Threaded)**:
   - Slices the database keyspace across multiple threads (V-threads).
   - Uses a **multi-key lock manager**. When a transaction requests keys, it locks only the specific slices owning those keys.
   - Other threads can process unrelated keys concurrently, achieving millions of operations per second on a single machine.

### Real-World Example
In a high-frequency banking cache with a 16-core CPU:
- **Redis**: Spits out peak performance on 1 core; the other 15 cores sit idle. Running \`KEYS *\` locks the entire database, causing connection timeout crashes for all active users.
- **Dragonfly**: Utilizes all 16 cores. Running a write query on Key A only locks the slice of Key A; clients writing to Key B are processed concurrently on other threads with zero delay.

### Best Practice
Deploy Dragonfly when running on modern cloud servers with multi-core CPUs where caching performance bottlenecks on single-thread limits. Use standard Redis if your backend stack relies heavily on classic single-thread atomic assumptions.

### Common Mistakes
Assuming Dragonfly is a completely different API. It is 100% wire-compatible with Redis protocol commands; you replace the database connection port without rewriting any code.

### Code Example
\`\`\`bash
# --- DRAGONFLY CLI EXECUTION COMMAND ---
# Runs dragonfly utilizing all 4 CPU cores, configuring memory limits
$ dragonfly --threads=4 --maxmemory=8GB --port=6379

# --- REDIS RUNNER COMPARISON ---
# Redis executes single-threaded (no threads flag available in standard runner)
$ redis-server --port=6379 --maxmemory 8gb
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডিস ও ড্রাগনফ্লাইয়ের ডাটা প্রসেসিং লজিক ও প্রসেসর কোর ব্যবহারের কার্যকারিতা ভিন্ন:
১. **Redis (সিঙ্গেল-থ্রেডেড)**:
   - এটি প্রসেসরের মাত্র ১টি কোর ব্যবহার করে এবং সব ক্লায়েন্টের রিকোয়েস্ট সিরিয়ালি রান করায়।
   - সুবিধা: রেস কন্ডিশন বা লক নিয়ে কোনো চিন্তা করতে হয় না।
   - অসুবিধা: ভারী বা ভুল কোয়েরি (যেমন \`KEYS *\`) রান করলে পুরো ডাটাবেজ ব্লক হয়ে অন্য সব ইউজারের পেজ জ্যাম হয়ে যায়।
২. **Dragonfly (মাল্টি-থ্রেডেড)**:
   - এটি শেয়ার্ড-নাথিং মডেল ব্যবহার করে সার্ভারের সবকটি সিপিইউ কোর কাজ করার সুযোগ দেয়।
   - ফাইবার-ভিত্তিক লক ম্যানেজারের সাহায্যে এটি নির্দিষ্ট কীগুলোর ওপরে লক সেট করে। ফলে কোডের অংশ ১-এ কাজ চলার সময় অন্য কোরের ডাটায় কোনো ব্লক ছাড়াই সমান্তরালভাবে রাইট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ১৬-কোর প্রসেসরের ক্লাউড সার্ভারে:
- **Redis**: কেবল ১টি কোরে ফাস্ট পারফরম্যান্স দিবে, বাকি ১৫টি কোর অলস বসে থাকবে। ডাটাবেজ স্কেল করতে হলে ক্লাস্টার সেটআপের জটিলতায় যেতে হবে।
- **Dragonfly**: ১৬টি কোরই একসাথে একটিভ থাকবে। ইউজার ১ ও ইউজার ২ একই সময়ে ভিন্ন কীতে পেমেন্ট ক্যাশ আপডেট করলে ড্রাগনফ্লাই দুটি কোর প্যারালালি ব্যবহার করে কয়েক মিলি-সেকেন্ডে সার্ভিস দুটি ডিল করে ফেলবে।

### উত্তম অনুশীলন
মাল্টি-কোর সিপিইউ সার্ভারে যেখানে রেডিসের সিঙ্গেল-থ্রেড লিমিট পারফরম্যান্সের বোতলনেক তৈরি করে, সেখানে ড্রাগনফ্লাই ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভুলবশত ভাবা যে ড্রাগনফ্লাইয়ের জন্য নতুন এপিআই শিখতে হবে; এটি সম্পূর্ণ রেডিস প্রোটোকলের সাথে ১০০% সামঞ্জস্যপূর্ণ।

### Code Example
\`\`\`bash
# --- ড্রাগনফ্লাই স্টার্টআপ কম্যান্ড ---
$ dragonfly --threads=4 --maxmemory=8GB --port=6379
\`\`\``
  },
  {
    id: 'other-topics-97',
    title: 'Explain WebTransport API and how it improves over standard WebSockets in low latency applications.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['WebTransport', 'WebSockets', 'HTTP/3', 'QUIC Protocol', 'Low Latency'],
    enAnswer: 'WebTransport runs on top of HTTP/3 over QUIC. It improves on WebSockets by providing reliable multiplexed streams and unreliable UDP-like datagrams, eliminating TCP head-of-line blocking for real-time actions.',
    bnAnswer: 'WebTransport মূলত HTTP/3 ওভার QUIC প্রোটোকল দিয়ে চলে। এটি নির্ভরযোগ্য মাল্টিপ্লেক্সড স্ট্রিম এবং আন-রিলাইয়েবল ডেটাগ্রাম উভয় সুবিধা দিয়ে সকেটের হেড-অফ-লাইন ব্লকিং দূর করে পারফরম্যান্স বাড়ায়।',
    enExplanation: `### Explanation
WebSockets have served real-time needs for years but suffer from limitations due to their TCP foundation. **WebTransport** (built on HTTP/3 and QUIC) solves these limitations:
1. **No Head-of-line Blocking**:
   - In WebSockets (TCP), if a network packet drops, the browser buffers all subsequent packets until the dropped packet is retransmitted.
   - In WebTransport (QUIC), packets are split across independent streams. A drop in Stream 1 does not block data flow in Stream 2.
2. **Unreliable Datagrams**:
   - WebTransport supports sending UDP-like datagrams. If a packet is lost, it is skipped (ideal for coordinates or game states where only the latest value matters).
3. **Faster Connection Handshakes**:
   - QUIC integrates TLS 1.3 encryption directly, reducing connection negotiation time to a single round-trip.

### Real-World Example
In a cloud-gaming controller:
- You need to stream video frames (must be reliable) and controller inputs (must be ultra-fast).
- With WebSockets, a momentary network lag buffers your joystick movements, causing the player to experience a sudden jumpy delay.
- With WebTransport, joystick updates are sent as datagrams. If a movement frame drops, it is ignored; the server immediately processes the latest position frame, keeping latency at 0ms.

### Best Practice
Use WebTransport for cloud gaming, real-time audio/video streaming, or low-latency financial feeds. Ensure your server environment supports HTTP/3 protocols, and always implement WebSockets as a fallback wrapper for older browsers.

### Common Mistakes
Using WebTransport datagrams to send critical billing checkout transactions. Datagrams do not guarantee delivery or packet order; billing checks must always use reliable streams.

### Code Example
\`\`\`typescript
// Client-side WebTransport implementation
async function initWebTransport(url: string) {
  // Prerequisite: Requires https connection
  const transport = new WebTransport(url);

  // 1. Establish connection to HTTP/3 server
  await transport.ready;
  console.log('WebTransport session is ready!');

  // 2. Sending Unreliable Datagrams (Ultra-fast, no TCP checks)
  const writer = transport.datagrams.writable.getWriter();
  const data = new TextEncoder().encode(JSON.stringify({ x: 105, y: 220 }));
  await writer.write(data);
  writer.releaseLock();

  // 3. Receiving Datagrams
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const msg = new TextDecoder().decode(value);
    console.log('Received Datagram:', JSON.parse(msg));
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টিসিপি (TCP) কানেকশনের ওপর নির্ভরশীল থাকায় সকেটে অনেক ল্যাগ হয়। **WebTransport** (HTTP/3 ও QUIC ভিত্তিক) এই ল্যাগগুলো দূর করে:
১. **হেড-অফ-লাইন ব্লকিং এড়ানো**:
   - WebSockets-এ কোনো একটি প্যাকেট ড্রপ করলে উডুন্ত সব ডাটা পজ হয়ে যায় যতক্ষণ না ওল্ড ডাটা রিসিভ হচ্ছে।
   - WebTransport-এ প্রতিটি স্ট্রিম স্বাধীন হওয়ায় একটি সেশনে কোনো প্যাক্ট লস হলেও অন্য সেশনের ডাটায় ব্লক বা স্লোনেস ঘটে না।
২. **অবিশ্বস্ত ডেটাগ্রাম (Unreliable Datagrams)**:
   - এটি UDP-র মতো ডাটা পাঠাতে পারে, যেখানে প্যাকেট লস হলে ট্র্যাকিং রি-ট্রাই না করে সরাসরি লেটেস্ট ডাটা রিড করা হয় (যেমন গেমের পজিশন)।
৩. **দ্রুত সেশন হ্যান্ডশেক**:
   - QUIC ও TLS 1.3 সরাসরি মার্জ থাকায় সংযোগ শুরুর সময় কোনো অতিরিক্ত প্রোটোকল ল্যাগ হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গেম কন্ট্রোলারের কাজে:
- আপনার জয়স্টিক মুভমেন্টের ডাটা অত্যন্ত দ্রুত সার্ভারে পৌঁছাতে হবে।
- WebSockets ব্যবহার করলে নেট একটু দুর্বল হলে জয়স্টিক ডাটা বাফার হয়ে হঠাৎ প্লেয়ারকে সামনে লাফিয়ে দেবে।
- WebTransport ব্যবহারে জয়স্টিক ডাটা ডেটাগ্রাম মেথডে পাঠানো হয়। আগের প্যাকেট মিস হলেও কোনো বাফারিং ছাড়াই কারেন্ট পজিশন ইনপুট কাজ করবে।

### উত্তম অনুশীলন
লাইভ ভিডিও স্ট্রিমিং ও ক্লাউড গেমিংয়ের জন্য WebTransport ব্যবহার করুন এবং পুরোনো ব্রাউজারের জন্য WebSockets ফলব্যাক কোড বজায় রাখুন।

### সাধারণ ভুলসমূহ
পেমেন্ট বা পিন কোডের মতো ক্রিটিক্যাল ডাটায় WebTransport ডেটাগ্রাম ব্যবহার করা, কারণ ডেটাগ্রাম ডাটা পৌঁছানোর কোনো গ্যারান্টি দেয় না।

### Code Example
\`\`\`typescript
// ব্রাউজারে WebTransport ক্লায়েন্ট ইমপ্লিমেন্টেশন
async function initWebTransport(url: string) {
  // অবশ্যই https যুক্ত ইউআরএল হতে হবে
  const transport = new WebTransport(url);

  // ১. কানেকশন এস্টাবলিশ হওয়া পর্যন্ত অপেক্ষা
  await transport.ready;
  console.log('WebTransport session is ready!');

  // ২. অতি দ্রুত ডেটাগ্রাম রাইট করা হচ্ছে
  const writer = transport.datagrams.writable.getWriter();
  const data = new TextEncoder().encode(JSON.stringify({ x: 105, y: 220 }));
  await writer.write(data);
  writer.releaseLock();

  // ৩. ডেটাগ্রাম রিড করা হচ্ছে
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const msg = new TextDecoder().decode(value);
    console.log('Received Datagram:', JSON.parse(msg));
  }
}
\`\`\``
  },
  {
    id: 'other-topics-98',
    title: 'Explain BullMQ sandboxed workers and how they prevent event loop blocking.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['BullMQ', 'Sandboxed Workers', 'Event Loop', 'Child Processes', 'Node.js Performance'],
    enAnswer: 'BullMQ sandboxed workers run job processing logic in separate Node.js child processes. This prevents heavy computational tasks from blocking the main process event loop, keeping web APIs responsive.',
    bnAnswer: 'BullMQ স্যান্ডবক্সড ওয়ার্কার আলাদা নোড চাইল্ড প্রসেসে জব প্রসেসিং লজিক রান করায়। এর ফলে সিপিইউ-ইনটেনসিভ কাজগুলো মেইন প্রসেসের ইভেন্ট লুপ ব্লক করে না এবং ওয়েব এপিআই সচল থাকে।',
    enExplanation: `### Explanation
Node.js is single-threaded. If a BullMQ worker executes a heavy CPU-bound task (such as video rendering, PDF parsing, or cryptography) directly in the main thread, the entire process event loop blocks, stopping HTTP API routes from responding to incoming user requests:
1. **Sandboxed Workers**:
   - Instead of passing an inline function to the \`Worker\` constructor, you pass a file path: \`new Worker(queueName, '/path/to/processor.js')\`.
   - BullMQ spins up separate OS child processes (\`child_process.fork()\`) to execute the code in that file.
2. **Event Loop Safety**:
   - The child processes communicate progress and results back to the main process via IPC (Inter-Process Communication).
   - If a child process crashes or hangs in an infinite loop, the main Express/NestJS server continues serving users with zero downtime.

### Real-World Example
In a document management system:
- A user uploads a heavy scanned document. The worker has to run OCR text recognition, taking 4 seconds.
- Without sandboxing: During those 4 seconds, the entire web server hangs. Any other user trying to load the homepage experiences connection timeout.
- With sandboxing: The OCR runs on CPU Core 2 in a child container, while the web server on CPU Core 1 continues serving web pages smoothly.

### Best Practice
Always use sandboxed workers for CPU-bound tasks. Set the concurrency limit (e.g. \`concurrency: 4\`) based on the number of physical CPU cores on the server to prevent spawning too many child processes, which can trigger OS memory crashes.

### Common Mistakes
Forgetting that code inside a sandboxed worker runs in a isolated process context. You cannot access global memory variables or singletons declared in your main server file. Database connection pools must be initialized separately inside the worker script.

### Code Example
\`\`\`typescript
// 1. main.ts - Start worker pointing to file path
import { Worker } from 'bullmq';
import path from 'path';

// Point to the compiled JS path of the processor
const processorPath = path.resolve(__dirname, 'processors/heavyOCR.js');

const worker = new Worker('ocr-queue', processorPath, {
  connection: { host: 'localhost', port: 6379 },
  concurrency: 4 // Spawn up to 4 parallel child processes
});

console.log('Sandboxed Workers initialized.');

// 2. processors/heavyOCR.ts - Sandboxed Processor File
import { Job } from 'bullmq';

export default async function (job: Job) {
  console.log(\`Processing heavy OCR job \${job.id} in Child Process:\`, process.pid);
  
  // CPU-heavy calculation loop runs here safely
  let count = 0;
  for (let i = 0; i < 1e9; i++) {
    count += i;
  }

  return { text: 'Extracted PDF text data', score: count };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নোড জেএস সিঙ্গেল-থ্রেডেড হওয়ার কারণে যদি কোনো কিউ ওয়ার্কার সিপিইউ-ভারী কাজ (যেমন: ভিডিও কনভার্ট বা পিডিএফ পার্স) মেইন থ্রেডে করে, তবে পুরো সার্ভারের রেসপন্স হ্যাং হয়ে যায়:
১. **স্যান্ডবক্সড ওয়ার্কার (Sandboxed Workers)**:
   - সকেট বা প্রসেসর কোড সরাসরি ফাইলে না লিখে একটি আলাদা ফাইলের পাথ দিয়ে ডিক্লেয়ার করা হয়: \`new Worker(queue, '/path/to/worker.js')\`।
   - BullMQ ব্যাকগ্রাউন্ডে অপারেটিং সিস্টেমের চাইল্ড প্রসেস (\`child_process.fork()\`) তৈরি করে কোড ফাইলটি সম্পূর্ণ আলাদা থ্রেডে রান করে।
২. **ইভেন্ট লুপ নিরাপত্তা**:
   - চাইল্ড প্রসেস তার কাজের আপডেট আইপিসি (IPC) চ্যানেলের মাধ্যমে মেইন সার্ভারে পাঠায়।
   - চাইল্ড প্রসেসটি ক্র্যাশ করলেও মূল এক্সপ্রেস সার্ভার কোনো ডাউনটাইম ছাড়াই সচল থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডকুমেন্ট ম্যানেজমেন্ট সিস্টেমে:
- ইউজার একটি বড় পিডিএফ স্ক্যান পেজ আপলোড করলেন। ওয়ার্কারকে সেটি থেকে ওসিআর (OCR) টেক্সট রিড করতে হবে, যা প্রসেসরের ৪ সেকেন্ড হাই লোড খাবে।
- স্যান্ডবক্স না থাকলে: এই ৪ সেকেন্ড পুরো ওয়েবসাইট অন্য সব ইউজারের কাছে লোডিং হয়ে থাকবে।
- স্যান্ডবক্স থাকলে: ওসিআর রান হবে আলাদা কোর ২-এর চাইল্ড প্রসেসে, মেইন উবুন্টু প্রসেসর কোর ১-এ নরমাল সার্ভিস দিয়ে যাবে।

### উত্তম অনুশীলন
সিপিইউ-ইনটেনসিভ প্রজেক্টে কনকারেন্সি লিমিট প্রসেসর কোরের সংখ্যার সমান রাখুন। স্যান্ডবক্স ফাইলের কোড আলাদা প্রসেসে চলায় সেখানে মেইন ফাইলের গ্লোবাল ভেরিয়েবল অ্যাক্সেস করা যাবে না; ডাটাবেজ কানেকশনগুলো স্যান্ডবক্স ফাইলের ভেতরেই হ্যান্ডেল করতে হবে।

### সাধারণ ভুলসমূহ
স্যান্ডবক্সড ফাইলে মেইন সার্ভার ফাইলের গ্লোবাল মেমোরি অবজেক্ট বা সিঙ্গেলটন সরাসরি কল করা, কারণ তারা সম্পূর্ণ ভিন্ন প্রসেস মেমরিতে রান হয়।

### Code Example
\`\`\`typescript
// ১. main.ts - স্যান্ডবক্সড ওয়ার্কার ফাইল পাথ দিয়ে ডিফাইন করার নিয়ম
import { Worker } from 'bullmq';
import path from 'path';

const processorPath = path.resolve(__dirname, 'processors/heavyOCR.js');

const worker = new Worker('ocr-queue', processorPath, {
  connection: { host: 'localhost', port: 6379 },
  concurrency: 4 //最高 4টি প্যারালাল চাইল্ড প্রসেস চলবে
});

// ২. processors/heavyOCR.ts - আলাদা চাইল্ড প্রসেস ফাইল
import { Job } from 'bullmq';

export default async function (job: Job) {
  console.log(\`Processing heavy OCR job \${job.id} in Child Process:\`, process.pid);
  
  // সিপিইউ ভারী লজিক এখানে রান হবে
  let count = 0;
  for (let i = 0; i < 1e9; i++) {
    count += i;
  }

  return { text: 'Extracted PDF text data', score: count };
}
\`\`\``
  },
  {
    id: 'other-topics-99',
    title: 'Explain Linux iptables and UFW firewall rules for securing a production VPS database port.',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Linux Firewall', 'UFW', 'iptables', 'Server Security', 'DevOps'],
    enAnswer: 'Secure a VPS database port by default-blocking incoming traffic and using UFW or iptables rules to allow access strictly from the trusted IP address of the backend application server.',
    bnAnswer: 'ডিফল্টরূপে সমস্ত ইনকামিং ট্রাফিক ব্লক করে এবং UFW বা iptables রুল দিয়ে কেবল মাত্র বিশ্বস্ত ব্যাকএন্ড সার্ভারের আইপি থেকে ডেটাবেজ অ্যাক্সেসের অনুমতি দিয়ে VPS পোর্ট সুরক্ষিত করা হয়।',
    enExplanation: `### Explanation
By default, exposing databases (like MongoDB on port 27017 or PostgreSQL on 5432) to the public internet invites automated attacks trying to brute-force databases. Firewalls act as server gates:
1. **UFW (Uncomplicated Firewall)**:
   - A user-friendly command-line wrapper for iptables in Ubuntu.
   - You block all external incoming traffic by default, and selectively whitelist connections.
2. **iptables (Kernel level)**:
   - Direct packet filtering framework inside the Linux kernel.
   - Inspects incoming packets based on source IP, protocol, and port, rejecting unauthorized requests before they touch backend network interfaces.
3. **Database Whitelisting**:
   - Database ports should *never* accept requests from \`anywhere\`.
   - Write a rule allowing port access strictly for the source IP of your backend API server.

### Real-World Example
You deploy a Node app on Server A (IP \`104.22.33.44\`) and a Postgres database on Server B.
- Exposed database port 5432 is open to the public. Bots attempt login scripts, consuming all connection pools and causing web crashes.
- Running UFW commands on Server B to block port 5432 globally, and adding \`ufw allow from 104.22.33.44 to any port 5432\` resolves this. Only Server A can query the database; all other public IP requests are dropped at the kernel boundary.

### Best Practice
Set your default firewall policies to Deny (e.g. \`ufw default deny incoming\`). Always keep SSH port access whitelist active so you do not lock yourself out of the command shell during firewall activations.

### Common Mistakes
Allowing open database access (\`ufw allow 5432\`) in public setups, trusting that database passwords alone are strong enough to block hackers.

### Code Example
\`\`\`bash
# --- LINUX SERVER B (Database Server Security) ---
# 1. Reset firewall configurations
$ sudo ufw reset

# 2. Block all incoming connections by default
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing

# 3. Securely open SSH Port to allow remote shell management
$ sudo ufw allow 22/tcp

# 4. Whitelist database port 5432 strictly for the application server IP
# Replace 104.22.33.44 with your actual backend API server IP
$ sudo ufw allow from 104.22.33.44 to any port 5432 proto tcp

# 5. Enable the firewall
$ sudo ufw enable

# Verify status rules
$ sudo ufw status verbose
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেজ পোর্ট (যেমন মঙ্গোডিবি পোর্ট ২৭০১৭ বা পোস্টগ্রেস ৫৪৩২) পাবলিক ইন্টারনেটে ওপেন থাকলে হ্যাকাররা বট দিয়ে ডাটাবেজ লক করে মুক্তিপণ দাবি করার ঝুঁকি বাড়ে। ফায়ারওয়াল এটি সমাধান করে:
১. **UFW (Uncomplicated Firewall)**:
   - এটি উবুন্টুতে ফায়ারওয়াল কনফিগার করার সহজ কমান্ড-লাইন টুল।
   - এর মূল পলিসি হলো বাই-ডিফল্ট সব ইনকামিং ব্লক রাখা এবং নির্দিষ্ট আইপি হোয়াইটলিস্ট করা।
২. **iptables (লিনাক্স কার্নেল লেভেল)**:
   - এটি লিনাক্স কার্নেলের ভেতরে সরাসরি নেটওয়ার্ক প্যাকেট ফিল্টার করে। ডাটাবেজ পোর্ট স্পর্শ করার পূর্বেই সন্দেহজনক রিকোয়েস্ট ড্রপ করে দেয়।
৩. **ডাটাবেজ হোয়াইটলিস্ট রুল**:
   - ডাটাবেজ কখনো "anywhere" বা সবার জন্য ওপেন রাখা যাবে না। কেবল আপনার নোড সার্ভারের নির্দিষ্ট আইপিকে পোর্ট অ্যাক্সেস দিতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার এপিআই প্রজেক্ট রান হচ্ছে সার্ভার A-তে (IP \`104.22.33.44\`) এবং ডাটাবেজ হোস্ট করা আছে সার্ভার B-তে:
- ডাটাবেজ সিকিউর করতে আপনি সার্ভার B-তে প্রবেশ করলেন।
- UFW দিয়ে প্রথমে সবার জন্য ৫৪৩২ পোর্ট ব্লক করে দিলেন।
- এরপর স্পেশাল রুল সেট করলেন: \`ufw allow from 104.22.33.44 to any port 5432\`।
- এখন সার্ভার A ছাড়া আর কোনো সার্ভার ডাটাবেজ কুয়েরি করতে পারবে না। হ্যাকাররা ট্রাই করলে কার্নেল লেভেলেই রিকোয়েস্ট রিজেক্ট হয়ে যাবে।

### উত্তম অনুশীলন
ইউজারদের ট্রাফিক ব্লক এড়াতে ফায়ারওয়াল অন করার পূর্বে নিশ্চিত করুন SSH পোর্ট (২২) সচল রেখেছেন। ডিফল্ট হিসেবে \`ufw default deny incoming\` পলিসি বজায় রাখুন।

### সাধারণ ভুলসমূহ
কোনো ফায়ারওয়াল প্রটেকশন ছাড়াই ডাটাবেজ পোর্ট ওপেন করে রাখা এবং কেবল পাসওয়ার্ডের ওপর ভিত্তি করে ডাটা সিকিউরিটি ভরসা করা।

### Code Example
\`\`\`bash
# উবুন্টু VPS সার্ভারে UFW ফায়ারওয়াল দিয়ে ডাটাবেজ পোর্ট লক করার কম্যান্ড
$ sudo ufw reset

# ১. ইনকামিং ট্রাফিক ডিফল্ট ব্লক ও আউটগোয়িং এলাউ
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing

# ২. ম্যানেজমেন্টের জন্য SSH পোর্ট (২২) ওপেন রাখা হলো
$ sudo ufw allow 22/tcp

# ৩. কেবল নোড সার্ভারের আইপি (104.22.33.44) থেকে ৫৪৩২ পোর্টের অনুমতি
$ sudo ufw allow from 104.22.33.44 to any port 5432 proto tcp

# ৪. ফায়ারওয়াল রান ও স্ট্যাটাস চেক
$ sudo ufw enable
$ sudo ufw status verbose
\`\`\``
  },
  {
    id: 'other-topics-100',
    title: 'How do you implement custom Mongoose schema types and lifecycle setters/getters?',
    difficulty: 'advanced',
    category: 'other-topics',
    tags: ['Mongoose', 'Schema Settings', 'Getters and Setters', 'Database Middleware', 'Node.js Security'],
    enAnswer: 'Implement custom Mongoose formatting using getters and setters inside the schema field definition. Setters transform data before saving (e.g. encrypting), while getters transform data on retrieval (e.g. decrypting), configured with toJSON: { getters: true }.',
    bnAnswer: 'Mongoose স্কিমা ফিল্ডের ভেতরে getters এবং setters ডিফাইন করে ডাটা ট্রান্সফর্ম করা হয়। setters ডাটা সংরক্ষণের পূর্বে মডিফাই করে (যেমন: এনক্রিপ্ট) এবং getters ডাটা রিড করার সময় ট্রান্সফর্ম করে (যেমন: ডিক্রিপ্ট)।',
    enExplanation: `### Explanation
Mongoose schema options support defining interceptor transformations directly inside field definitions:
1. **Setters (\`set\`)**:
   - Executes automatically when you assign a value to the field before saving to MongoDB.
   - Useful for normalizing strings (lowercase emails), hashing, or encrypting sensitive values.
2. **Getters (\`get\`)**:
   - Executes automatically when you retrieve the field value from the document in your code.
   - Useful for decrypting keys, formatting dates, or appending absolute URLs to relative image paths.
3. **JSON Serialization**:
   - By default, getters do not apply when calling \`res.json(doc)\` or \`doc.toJSON()\`.
   - You must enable them globally in the schema options: \`toJSON: { getters: true }\`.

### Real-World Example
In a user account collection storing private national IDs:
- To comply with security rules, national IDs must be encrypted before saving to MongoDB.
- Instead of writing encryption logic manually in every controller, you write a \`set\` helper that encrypts the string, and a \`get\` helper that decrypts it.
- When calling \`User.create({ nationalId: '12345' })\`, Mongoose encrypts it to \`hash_abc\`.
- When calling \`console.log(user.nationalId)\`, Mongoose returns \`12345\` decrypted on the fly.

### Best Practice
Keep getters and setters synchronous. If you need asynchronous operations (like querying a remote HSM), handle those inside Mongoose pre-save middleware hooks (\`pre('save')\`) instead.

### Common Mistakes
Forgetting to set \`toObject: { getters: true }\` and \`toJSON: { getters: true }\` in the schema options, resulting in raw database values (like encrypted ciphertexts) being sent to frontend APIs.

### Code Example
\`\`\`typescript
import { Schema, model } from 'mongoose';
import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const ENCRYPTION_KEY = Buffer.alloc(32, 'my-super-secret-key-32-bytes-long');
const IV = Buffer.alloc(16, 'static-iv-for-demo-purposes-16');

// Encrypt helper
function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, IV);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt helper
function decrypt(encryptedText: string): string {
  try {
    const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, IV);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch {
    return encryptedText; // Fallback if not encrypted
  }
}

const secureUserSchema = new Schema({
  name: String,
  // Bind setters and getters directly to nationalId field
  nationalId: {
    type: String,
    set: encrypt, // Encrypts before saving to mongo
    get: decrypt  // Decrypts when reading from model
  }
}, {
  // Ensure getters execute when document is converted to JSON or Object!
  toJSON: { getters: true },
  toObject: { getters: true }
});

const SecureUser = model('SecureUser', secureUserSchema);
export default SecureUser;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গুজ স্কিমা ফিল্ড ডিক্লেয়ারেশনের সময় ভেতরেই ডাটা ট্রান্সফর্ম বা মডিফাই করার গেটার্স ও সেটার্স মেথড সাপোর্ট করে:
১. **সেটার্স (set)**:
   - ডাটাবেজে ডাটা রাইট হওয়ার ঠিক আগের মুহূর্তে এটি অটোমেটিক ভ্যালু মডিফাই করে।
   - যেমন: ইমেইল টেক্সট অটোমেটিক ছোটহাতের করা (\`email.toLowerCase()\`), পাসওয়ার্ড হ্যাশ করা বা ডাটা এনক্রিপ্ট করতে ব্যবহৃত হয়।
২. **গেটার্স (get)**:
   - ডাটাবেজ থেকে ডাটা রিড করে কোডে নিয়ে আসার সময় এটি অটোমেটিক ট্রিগার হয়।
   - যেমন: রিড করার সময় এনক্রিপ্টেড ডাটা ডিক্রিপ্ট করা বা ইমেজের রিলেটিভ পাথের সাথে ডোমেইন যুক্ত করা।
৩. **জেসন সিরিয়ালাইজেশন**:
   - কুয়েরি করে ডাটা এপিআই-তে রেসপন্স হিসেবে পাঠানোর সময় getters একটিভ রাখতে স্কিমা অপশনে \`toJSON: { getters: true }\` কনফিগ করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারের জাতীয় পরিচয়পত্র নম্বর (NID) সেভ করার সময়:
- ডাটাবেজে হ্যাকার হানা দিলেও এনআইডি নম্বর পড়তে না পারে তার জন্য সেটি এনক্রিপ্ট করে রাখতে হবে।
- প্রতিটি কন্ট্রোলারে আলাদা কোড না লিখে স্কিমার ভেতর \`set: encrypt\` ও \`get: decrypt\` লিখে দিলে ডাটাবেজে সেভ হওয়ার সময় ডাটা অটো-এনক্রিপ্ট হবে এবং কোডে কল করার সাথে সাথে ডিক্রিপ্ট হয়ে মূল নাম্বার দেখাবে।

### উত্তম অনুশীলন
গেটার্স ও সেটার্স ফাংশনগুলো সবসময় সিনক্রোনাস (Synchronous) রাখুন। এসিনক্রোনাস কাজ করার দরকার হলে প্রাক-সেভ মিডলওয়্যার (\`pre('save')\`) ব্যবহার করা উত্তম।

### সাধারণ ভুলসমূহ
স্কিমা অপশনে toJSON: { getters: true } সেট করতে ভুলে যাওয়া, যার ফলে এপিআই রেসপন্সে ডিক্রিপ্ট হওয়ার বদলে এনক্রিপ্ট হওয়া র ডাটা চলে যায়।

### Code Example
\`\`\`typescript
// Mongoose Schema-তে গেটার্স ও সেটার্স সেটআপ
import { Schema, model } from 'mongoose';
import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const ENCRYPTION_KEY = Buffer.alloc(32, 'my-super-secret-key-32-bytes-long');
const IV = Buffer.alloc(16, 'static-iv-for-demo-purposes-16');

// এনক্রিপশন হেল্পার
function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, IV);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// ডিক্রিপশন হেল্পার
function decrypt(encryptedText: string): string {
  try {
    const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, IV);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch {
    return encryptedText;
  }
}

const secureUserSchema = new Schema({
  name: String,
  nationalId: {
    type: String,
    set: encrypt, // সেভ করার আগে এনক্রিপ্ট হবে
    get: decrypt  // রিড করার সময় ডিক্রিপ্ট হবে
  }
}, {
  // এপিআই রেসপন্সে গেটার্স একটিভ করার অপশন
  toJSON: { getters: true },
  toObject: { getters: true }
});

const SecureUser = model('SecureUser', secureUserSchema);
export default SecureUser;
\`\`\``
  }
];
