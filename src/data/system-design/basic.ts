import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: "system-design-1",
    title: "What is the difference between Horizontal Scaling (Scale-Out) and Vertical Scaling (Scale-Up)?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Scaling","Infrastructure","System Architecture"],
    enAnswer: "Vertical scaling increases the capacity (CPU, RAM, Disk) of a single server, whereas horizontal scaling adds more servers to the existing pool to distribute the load.",
    bnAnswer: "ভার্টিক্যাল স্কেলিং একটি মাত্র সার্ভারের ক্ষমতা (CPU, RAM, Disk) বাড়িয়ে দেয়, পক্ষান্তরে হরিজন্টাল স্কেলিং বিদ্যমান পুলের সাথে আরো বেশি সার্ভার যুক্ত করে লোড বণ্টন করে।",
    enExplanation: `### Explanation
Vertical scaling (Scale-Up) means adding more power to an existing server (e.g., upgrading from 8GB RAM to 64GB RAM). It is easy to implement but has a hardware limit (single point of failure and maximum capacity ceiling).
Horizontal scaling (Scale-Out) means adding more machines/servers to your resource pool (e.g., adding 5 more web servers behind a load balancer). It provides high availability, fault tolerance, and theoretically infinite scaling, but increases system complexity.

### Real-World Example
- **Vertical Scaling**: Upgrading a database instance on AWS from \`db.t3.medium\` to \`db.r5.4xlarge\`.
- **Horizontal Scaling**: Adding more nodes/pods to a Kubernetes cluster dynamically as traffic spikes during a flash sale.

### Best Practice
For web servers and stateless application layers, always scale horizontally. Use vertical scaling only as a temporary quick-fix or for database components that do not support easy clustering.

### Common Mistakes
Assuming horizontal scaling is automatic. To scale horizontally, applications must be stateless (session state must not reside on the server disk/memory itself but in shared stores like Redis).

### Code/Architecture Example
\`\`\`
Vertical Scaling (Single Server):
[Client] ---> [ Server (Upgraded to 128GB RAM / 32 Cores) ]

Horizontal Scaling (Distributed):
               /---> [ Server A (16GB RAM) ]
[Client] ---> [ Load Balancer ] ---> [ Server B (16GB RAM) ]
               \\---> [ Server C (16GB RAM) ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভার্টিক্যাল স্কেলিং (Scale-Up) মানে একটি বিদ্যমান সার্ভারের ক্ষমতা বাড়ানো (যেমন, ৮জিবি র‌্যাম থেকে ৬৪জিবি র‌্যামে উন্নীত করা)। এটি বাস্তবায়ন করা সহজ তবে এর হার্ডওয়্যার সীমা এবং একক ব্যর্থতার ঝুঁকি (Single Point of Failure) রয়েছে।
হরিজন্টাল স্কেলিং (Scale-Out) মানে রিসোর্স পুলে আরও বেশি সার্ভার যুক্ত করা (যেমন, একটি লোড ব্যালেন্সারের পিছনে আরও ৫টি ওয়েব সার্ভার যুক্ত করা)। এটি উচ্চ প্রাপ্যতা (High Availability), ফল্ট টলারেন্স এবং তাত্ত্বিকভাবে অসীম স্কেলিং নিশ্চিত করে, তবে সিস্টেমের জটিলতা বৃদ্ধি করে।

### বাস্তব-ভিত্তিক উদাহরণ
- **ভার্টিক্যাল স্কেলিং**: AWS-এ ডাটাবেস ইন্সট্যান্সকে \`db.t3.medium\` থেকে \`db.r5.4xlarge\` এ আপগ্রেড করা।
- **হরিজন্টাল স্কেলিং**: ফ্ল্যাশ সেলের সময় কুবারনেটিস (Kubernetes) ক্লাস্টারে ডাইনামিকভাবে আরও পড (Pods) বা নোড যুক্ত করা।

### উত্তম অনুশীলন
ওয়েব সার্ভার এবং স্টেটলেস অ্যাপ্লিকেশন লেয়ারের জন্য সবসময় হরিজন্টাল স্কেলিং করুন। ভার্টিক্যাল স্কেলিং শুধুমাত্র সাময়িক সমাধান বা ক্লাস্টার সাপোর্ট করে না এমন ডাটাবেসের জন্য ব্যবহার করুন।

### সাধারণ ভুলসমূহ
হরিজন্টাল স্কেলিং স্বয়ংক্রিয়ভাবে কাজ করে মনে করা। হরিজন্টাল স্কেল করতে হলে অ্যাপ্লিকেশনকে অবশ্যই স্টেটলেস (Stateless) হতে হবে (সেশন বা স্টেট লোকাল সার্ভার মেমোরিতে রাখা যাবে না, Redis-এর মতো শেয়ার্ড স্টোরে রাখতে হবে)।`
  },
  {
    id: "system-design-2",
    title: "Compare Monolith and Microservices Architectures.",
    difficulty: "basic",
    category: "system-design",
    tags: ["Microservices","Monolith","System Architecture"],
    enAnswer: "A Monolith architecture builds an entire application as a single cohesive unit, while Microservices split the application into small, independent services communicating over APIs.",
    bnAnswer: "মনোলিথ আর্কিটেকচার একটি সম্পূর্ণ অ্যাপ্লিকেশনকে একক ইউনিট হিসেবে তৈরি করে, আর মাইক্রোসার্ভিস অ্যাপ্লিকেশনটিকে এপিআই (API)-এর মাধ্যমে যোগাযোগকারী ছোট ও স্বাধীন সার্ভিসে বিভক্ত করে।",
    enExplanation: `### Explanation
- **Monolithic Architecture**: All features, database schemas, and business logic reside in a single codebase. It is simple to develop, test, and deploy initially. However, it becomes hard to scale, deploy, and maintain as the team and codebase grow.
- **Microservices Architecture**: The system is split into independent services, each managing its own data store and domain logic. Services communicate via light protocols (HTTP/gRPC/Message Queues). It enables independent deployments and technological flexibility, but introduces network latency, distributed data consistency challenges, and operational overhead.

### Real-World Example
An e-commerce app:
- **Monolith**: A single Ruby on Rails codebase handling users, payments, inventory, and notifications in one package.
- **Microservices**: A Go service for Payments, a Java service for Inventory, and a Node.js service for Notifications, communicating via RabbitMQ.

### Best Practice
Start with a modular monolith first if the domain model is unclear. Split into microservices only when organizational scaling (independent dev teams) or scaling boundaries require it.

### Common Mistakes
Creating microservices with a single shared database. This forms a "distributed monolith," which retains the deploy coupling of monoliths and adds the network complexity of microservices.

### Architecture Schema
\`\`\`
Monolith:
[Client] ---> [ Web / Business Logic / DB Access (Single App Node) ] ---> [ Single Database ]

Microservices:
[Client] ---> [ API Gateway ]
                   |---> [ Auth Service ] ---> [ Auth DB ]
                   |---> [ Order Service ] ---> [ Order DB ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **মনোলিথ আর্কিটেকচার**: সব ফিচার, ডাটাবেস স্কিমা এবং বিজনেস লজিক একটি মাত্র কোডবেসে থাকে। শুরুতে এটি ডেভেলপ, টেস্ট এবং ডিপ্লয় করা খুব সহজ। তবে অ্যাপ্লিকেশন ও টিম বড় হলে এটি স্কেল ও মেইনটেইন করা কঠিন হয়ে পড়ে।
- **মাইক্রোসার্ভিস আর্কিটেকচার**: সিস্টেমটি স্বাধীন সার্ভিসে বিভক্ত থাকে, যেখানে প্রতিটি সার্ভিস নিজস্ব ডাটা স্টোর এবং ডোমেন লজিক নিয়ন্ত্রণ করে। সার্ভিসগুলো লাইটওয়েট প্রোটোকল (HTTP/gRPC/Message Queue) দিয়ে যোগাযোগ করে। এটি প্রযুক্তিগত স্বাধীনতা দিলেও নেটওয়ার্ক লেটেন্সি এবং ডিস্ট্রিবিউটেড ডাটা ম্যানেজমেন্ট জটিলতা বাড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স অ্যাপ:
- **মনোলিথ**: একটি মাত্র Ruby on Rails অ্যাপ্লিকেশন যা ইউজার, পেমেন্ট, ইনভেন্টরি এবং নোটিফিকেশন সব হ্যান্ডেল করে।
- **মাইক্রোসার্ভিস**: পেমেন্টের জন্য একটি Go সার্ভিস, ইনভেন্টরির জন্য Java সার্ভিস এবং নোটিফিকেশনের জন্য Node.js সার্ভিস, যা RabbitMQ-এর মাধ্যমে যোগাযোগ করে।

### উত্তম অনুশীলন
ডোমেন মডেল স্পষ্ট না হলে প্রথমে মডুলার মনোলিথ দিয়ে শুরু করুন। অর্গানাইজেশনাল টিম স্কেলিং বা সুনির্দিষ্ট রিসোর্স বাউন্ডারি আলাদা করার প্রয়োজন হলেই কেবল মাইক্রোসার্ভিসে বিভক্ত করুন।

### সাধারণ ভুলসমূহ
সব মাইক্রোসার্ভিসের জন্য একটি কমন শেয়ার্ড ডাটাবেস ব্যবহার করা। একে "ডিস্ট্রিবিউটেড মনোলিথ" বলা হয়, যা মনোলিথের কাপলিং জটিলতা এবং মাইক্রোসার্ভিসের নেটওয়ার্ক জটিলতা দুই-ই ধারণ করে।`
  },
  {
    id: "system-design-3",
    title: "What is a Load Balancer, and what are its key routing algorithms?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Load Balancing","Networking","High Availability"],
    enAnswer: "A Load Balancer distributes incoming network traffic across multiple servers to prevent overload and ensure high availability. Common algorithms include Round Robin, Least Connections, and IP Hash.",
    bnAnswer: "লোড ব্যালেন্সার ওভারলোড এড়াতে এবং উচ্চ প্রাপ্যতা নিশ্চিত করতে একাধিক সার্ভারে ইনকামিং নেটওয়ার্ক ট্রাফিক বণ্টন করে। সাধারণ অ্যালগরিদমগুলোর মধ্যে রয়েছে রাউন্ড রবিন, লিস্ট কানেকশন এবং আইপি হ্যাশ।",
    enExplanation: `### Explanation
A Load Balancer (LB) acts as a traffic cop sitting in front of servers. It routes client requests to optimal server instances.
Key Algorithms:
1. **Round Robin**: Routes requests sequentially across the list of servers.
2. **Weighted Round Robin**: Routes based on assigned server capacity weights.
3. **Least Connections**: Sends requests to the server with the fewest active connections (best for long-running connections/requests).
4. **IP Hash**: Derives a hash from client IP addresses to determine the server, ensuring a client consistently hits the same server (session persistence).

### Real-World Example
Nginx or AWS Application Load Balancer (ALB) routing HTTP requests to a cluster of Express.js backend API containers.

### Best Practice
For stateful apps requiring session affinity, use IP Hash or Cookie-based sticky sessions. For stateless API services, use Least Connections or Round Robin to optimize load distribution.

### Common Mistakes
Leaving the Load Balancer as a Single Point of Failure (SPOF). Always run redundant Load Balancers with Active-Passive configurations using tools like Keepalived or DNS-level Failover.

### Configuration Example (Nginx)
\`\`\`nginx
upstream backend_servers {
    least_conn; # Use Least Connections algorithm
    server 10.0.0.1:8080;
    server 10.0.0.2:8080;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend_servers;
    }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লোড ব্যালেন্সার (LB) সার্ভারের সামনে ট্রাফিক নিয়ন্ত্রক হিসেবে কাজ করে। এটি ক্লায়েন্ট রিকোয়েস্টগুলোকে সঠিক সার্ভার ইন্সট্যান্সে পাঠায়।
প্রধান অ্যালগরিদমসমূহ:
১. **রাউন্ড রবিন (Round Robin)**: পর্যায়ক্রমিকভাবে প্রতিটি সার্ভারে রিকোয়েস্ট পাঠায়।
২. **ওয়েটেড রাউন্ড রবিন (Weighted Round Robin)**: সার্ভারের মেমোরি বা সিপিইউ ক্ষমতা অনুযায়ী রিকোয়েস্ট পাঠায়।
৩. **লিস্ট কানেকশন (Least Connections)**: সবচেয়ে কম একটিভ কানেকশন থাকা সার্ভারে রিকোয়েস্ট পাঠায় (দীর্ঘ সময় চলা রিকোয়েস্টের জন্য উপযোগী)।
৪. **আইপি হ্যাশ (IP Hash)**: ক্লায়েন্টের আইপি অ্যাড্রেস থেকে হ্যাশ জেনারেট করে নির্দিষ্ট সার্ভারে পাঠায়, যা সেশন পারসিস্টেন্স বা স্টিকি সেশনের জন্য দরকার।

### বাস্তব-ভিত্তিক উদাহরণ
Nginx বা AWS Application Load Balancer (ALB) যা হাজার হাজার এইচটিটিপি রিকোয়েস্টকে একদল ব্যাকএন্ড কনটেইনারে ভাগ করে দেয়।

### উত্তম অনুশীলন
স্টেটলেস এপিআই সার্ভিসের জন্য Least Connections বা Round Robin ব্যবহার করুন। সেশন নির্ভর অ্যাপ্লিকেশনের জন্য আইপি হ্যাশ বা কুকি-ভিত্তিক স্টিকি সেশন সিলেক্ট করুন।

### সাধারণ ভুলসমূহ
লোড ব্যালেন্সারকে একটি সিঙ্গেল পয়েন্ট অফ ফেইলিউর (SPOF) হিসেবে রেখে দেওয়া। Keepalived বা ডিএনএস Failover ব্যবহার করে লোড ব্যালেন্সারের একাধিক রিডান্ডেন্ট কপি অ্যাক্টিভ-প্যাসিভ মোডে রাখা উচিত।`
  },
  {
    id: "system-design-4",
    title: "Explain Caching and why it is critical for application performance.",
    difficulty: "basic",
    category: "system-design",
    tags: ["Caching","Performance","Redis"],
    enAnswer: "Caching is the process of storing copies of data in a high-speed data access layer (RAM) to serve future requests faster, reducing database load and network latency.",
    bnAnswer: "ক্যাশিং হলো হাই-স্পিড ডাটা অ্যাক্সেস লেয়ারে (RAM) ডাটার কপি সংরক্ষণ করা যাতে ভবিষ্যতের রিকোয়েস্ট দ্রুত হ্যান্ডেল করা যায়, যা ডাটাবেসের চাপ এবং নেটওয়ার্ক লেটেন্সি কমায়।",
    enExplanation: `### Explanation
Retrieving data from disks or databases is slow and resource-heavy. Caching stores frequently accessed query results, API responses, or session data in fast memory (like RAM).
- **Benefits**:
  1. Lowers database read load.
  2. Reduces network latency (sub-millisecond reads).
  3. Cost-effective hosting scale.

### Real-World Example
An online portal caching its homepage feed in Redis instead of querying the SQL Database on every single user request.

### Best Practice
Set an appropriate TTL (Time To Live) to expire cache items and avoid serving stale data. Use caching only for read-heavy and slowly changing database models.

### Common Mistakes
Caching write-heavy tables without eviction controls, causing memory overflow. Cache stampede where cache expires under heavy load and thousands of requests query database at the same time.

### Code Example (Node.js + Redis)
\`\`\`typescript
import Redis from 'ioredis';
const redis = new Redis();

async function getProduct(productId: string) {
  // Try Cache first
  const cacheKey = \`product:\${productId}\`;
  const cachedData = await redis.get(cacheKey);
  
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  
  // Database Query (Fallback)
  const product = await queryDatabase(productId);
  
  // Save cache with 1 Hour TTL
  await redis.set(cacheKey, JSON.stringify(product), 'EX', 3600);
  return product;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস বা ডিস্ক থেকে ডাটা রিড করা অনেক সময়সাপেক্ষ। ক্যাশিংয়ের মাধ্যমে বহুল ব্যবহৃত এপিআই রেসপন্স বা কুয়েরি ডাটা দ্রুত অ্যাক্সেসযোগ্য মেমোরিতে (RAM-এ যেমন Redis বা Memcached) রেখে দেওয়া হয়।
- **উপকারিতা**:
  ১. ডাটাবেসের রিড প্রেশার কমায়।
  ২. নেটওয়ার্ক লেটেন্সি কমায় (সাব-মিলিসেকেন্ড রিড)।
  ৩. কম খরচে বড় ট্রাফিক হ্যান্ডেল করার সুবিধা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নিউজ পোর্টাল প্রতিটি ইউজারের জন্য ডাটাবেস কুয়েরি না করে হোমপেজের আর্টিকেলের লিস্ট Redis-এ ক্যাশ করে রাখে।

### উত্তম অনুশীলন
ক্যাশ আইটেমের জন্য উপযুক্ত TTL (Time To Live) সেট করুন যাতে মেয়াদ শেষ হলে সেটি স্বয়ংক্রিয়ভাবে মুছে যায় এবং ইউজার ব্যাকডেটেড ডাটা না দেখে। রিড-হেভি ডাটার ক্ষেত্রে ক্যাশিং ব্যবহার করুন।

### সাধারণ ভুলসমূহ
রাইট-হেভি (Write-Heavy) ডাটা ক্যাশ করা, যার ফলে মেমোরি ওভারফ্লো হয়। এছাড়া উপযুক্ত এভিকশন পলিসি না রাখলে রিয়েল-টাইম ডাটার অমিল দেখা দিতে পারে।`
  },
  {
    id: "system-design-5",
    title: "What is a CDN (Content Delivery Network)? Compare CDN Push vs. CDN Pull.",
    difficulty: "basic",
    category: "system-design",
    tags: ["CDN","Performance","Caching"],
    enAnswer: "A CDN is a globally distributed network of servers that caches static assets close to users. CDN Push proactively uploads assets to the CDN, while CDN Pull fetches assets on-demand upon the first user request.",
    bnAnswer: "সিডিএন (CDN) হলো বিশ্বজুড়ে ছড়িয়ে থাকা সার্ভারের নেটওয়ার্ক যা ব্যবহারকারীর কাছাকাছি স্ট্যাটিক ফাইল ক্যাশ করে। CDN Push ম্যানুয়ালি ফাস্ট সিডিএনে ফাইল আপলোড করে, আর CDN Pull প্রথম ব্যবহারকারীর রিকোয়েস্টে অন-ডিমান্ড ফাইল ক্যাশ করে।",
    enExplanation: `### Explanation
CDNs reduce latency by bringing static assets (images, CSS, JS, videos) physically closer to the user using Edge Servers.
- **CDN Pull**: The client requests an asset from CDN. If the CDN does not have it (Cache Miss), it fetches it from the Origin server, caches it locally, and serves the user. Next requests will hit Cache. (Easy maintenance, minimal management).
- **CDN Push**: The developer pushes assets directly to the CDN upon deployment. (Better load management on origin, but requires build-step integrations).

### Real-World Example
Cloudflare, Akamai, or AWS CloudFront serving JS/CSS bundles and product images for an international e-commerce portal like Amazon.

### Best Practice
Use CDN Pull for dynamic sites where assets are updated frequently. Use CDN Push for heavy file distributions (like mobile app update patches, PDF manuals, or video streams).

### Common Mistakes
Not using versioned filenames (e.g. \`styles.css\` instead of \`styles.a8f9c.css\`) when using CDNs. This causes users to receive old cached files even after you deploy new builds, unless cache invalidations are manually triggered.

### Architecture Workflow
\`\`\`
CDN Pull Flow:
[User] ---> [CDN Edge Server] (Cache Miss) ---> [Origin Web Server]
[User] <--- [CDN Edge Server] (Cached & Served) <--- [Origin Web Server]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিডিএন (Content Delivery Network) বিশ্বজুড়ে ডিস্ট্রিবিউটেড এজ সার্ভারের সাহায্যে ব্যবহারকারীর নিকটবর্তী লোকেশন থেকে স্ট্যাটিক রিসোর্স (CSS, JS, ছবি, ভিডিও) প্রদান করে লেটেন্সি কমায়।
- **CDN Pull**: ইউজার এজ সার্ভারে ফাইল রিকোয়েস্ট করে। এজ সার্ভারে ফাইল না থাকলে (Cache Miss) সে মেইন অরিজিন সার্ভার থেকে ফাইল এনে নিজের কাছে ক্যাশ করে ইউজারকে দেয়। পরবর্তী ইউজাররা সরাসরি ক্যাশ ফাইলটি পায়।
- **CDN Push**: যখনই কোনো নতুন ফাইল বা কোড ডিপ্লয় করা হয়, কোডবেস থেকে সরাসরি সিডিএন স্টোরেজে ফাইল আপলোড করে দেওয়া হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি আন্তর্জাতিক ই-কমার্স পোর্টাল বিশ্বব্যাপী ব্যবহারকারীদের জন্য ক্লাউডফ্লেয়ার (Cloudflare) বা CloudFront-এর মাধ্যমে প্রোডাক্ট ইমেজ এবং স্ক্রিপ্ট ফাইল পরিবেশন করে।

### উত্তম অনুশীলন
ডাইনামিক এবং ঘন ঘন পরিবর্তনশীল স্ট্যাটিক ফাইলের জন্য CDN Pull ব্যবহার করুন। বড় সাইজের ফাইল (যেমন সফটওয়্যার আপডেট, ভিডিও বা পিডিএফ) ডিস্ট্রিবিউট করতে CDN Push ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ফাইলের সাথে ইউনিক ইউনিক বিল্ড আইডি বা সংস্করণ যুক্ত না করা (যেমন \`index.js\` এর জায়গায় \`index.v1.js\`)। এর ফলে নতুন কোড ডিপ্লয় করার পরও ইউজাররা ব্রাউজারে পুরাতন স্ট্যাটিক ফাইল ক্যাশ দেখতে পায়।`
  },
  {
    id: "system-design-6",
    title: "Explain Database Replication and the Leader-Follower (Master-Slave) pattern.",
    difficulty: "basic",
    category: "system-design",
    tags: ["Databases","Replication","High Availability"],
    enAnswer: "Database replication copies data across multiple servers. In Leader-Follower replication, all writes go to the Leader database, which replicates changes to Follower databases for read scaling.",
    bnAnswer: "ডাটাবেস রেপ্লিকেশন একাধিক সার্ভারে ডাটা কপি করে রাখে। লিডার-ফলোয়ার রেপ্লিকেশনে সমস্ত রাইট অপারেশন লিডার ডাটাবেসে যায়, যা রিড ক্ষমতা বাড়াতে ফলোয়ার ডাটাবেসগুলোতে ডাটা কপি করে পাঠায়।",
    enExplanation: `### Explanation
Database replication ensures data redundancy and high availability.
- **Leader (Master)**: Handles all write operations (\`INSERT\`, \`UPDATE\`, \`DELETE\`). It is the single source of truth for updates.
- **Followers (Slaves)**: Synchronize with the Leader asynchronously or synchronously. They process only read queries (\`SELECT\`).
- **Benefits**: Scalability (increases read throughput by adding more followers), reliability, and backup (a follower can be promoted to leader if the leader dies).

### Real-World Example
A social network handles thousands of read requests per second compared to write requests. They run 1 Master PostgreSQL instance to write posts, and 5 Read-replicas to render users feeds.

### Best Practice
Use asynchronous replication for performance, but prepare for "read-your-own-writes" inconsistency (where a user writes data to master but doesn't see it immediately on a read replica due to replication lag).

### Common Mistakes
Directing write operations to a Follower instance, causing database write failures or data drift errors.

### Flow Diagram
\`\`\`
          [Write Request]
                 |
                 v
        +-----------------+
        |  Leader DB      |
        +-----------------+
           /     |     \\   (Asynchronous Replication)
          v      v      v
      +-----+ +-----+ +-----+
      |Fol.1| |Fol.2| |Fol.3|  <--- [Read Requests]
      +-----+ +-----+ +-----+
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস রেপ্লিকেশন সিস্টেমের রিড ক্যাপাসিটি বাড়ানোর এবং ডাটা সুরক্ষিত রাখার জন্য একাধিক সার্ভারে একই ডাটা কপি করে রাখে।
- **লিডার (Leader/Master)**: সমস্ত ডাটা রাইট (\`INSERT\`, \`UPDATE\`) হ্যান্ডেল করে।
- **ফলোয়ার (Followers/Slaves)**: লিডারের সাথে সিঙ্ক করে ডাটা কপি করে রাখে এবং রিড বা কুয়েরি কোয়ারিগুলোর রেসপন্স দেয়।
- **উপকারিতা**: স্কেলাবিলিটি (সহজেই নতুন রিড-রেপ্লিকা বা ফলোয়ার যুক্ত করে রিড ট্রাফিক সামলানো যায়) এবং ডিজাস্টার রিকভারি (লিডার ক্রাশ করলে ফলোয়ারকে নতুন লিডার বানানো যায়)।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক বা টুইটারে ডাটা লেখার চেয়ে মানুষ পোস্ট পড়ে বেশি। তাই তারা ১টি মূল মাস্টার ডাটাবেস রান করে যেখানে পোস্ট সেভ হয় এবং ৫/১০টি রিড-রেপ্লিকা রান করে যা ব্যবহারকারীদের ফিড লোড করে।

### উত্তম অনুশীলন
পারফরম্যান্স বজায় রাখতে Asynchronous রেপ্লিকেশন ব্যবহার করুন। তবে রাইট করার সাথে সাথে দেখতে না পাওয়ার সমস্যা (Replication Lag) দূর করতে সেশন লেভেলে বা রাইটের পরপরই সরাসরি লিডার থেকে সাময়িকভাবে রিড করার ট্র্যাকিং রাখুন।

### সাধারণ ভুলসমূহ
ভুলবশত ফলোয়ার রিড-রেপ্লিকাতে রাইট কুয়েরি রুট করা, যা ডাটাবেস লেভেলে রাইট এরর তৈরি করে।`
  },
  {
    id: "system-design-7",
    title: "What are the main trade-offs between SQL (Relational) and NoSQL (Non-Relational) databases?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Databases","SQL","NoSQL"],
    enAnswer: "SQL databases are relational, structured, and support ACID transactions for strict consistency. NoSQL databases are non-relational, schema-less, and scale horizontally for high-throughput write paths.",
    bnAnswer: "SQL ডাটাবেস হলো রিলেশনাল ও স্ট্রাকচার্ড এবং কঠোর কনসিস্টেন্সির জন্য ACID ট্রানজেকশন সাপোর্ট করে। NoSQL ডাটাবেস নন-রিলেশনাল ও স্কিমাহীন এবং হাই-রাইট স্পিডের জন্য সহজে হরিজন্টালি স্কেল করা যায়।",
    enExplanation: `### Explanation
- **SQL (e.g., PostgreSQL, MySQL)**:
  - Structure: Strictly structured tables with predefined schemas and relations.
  - Transactions: Strong ACID (Atomicity, Consistency, Isolation, Durability) guarantees.
  - Scaling: Primarily vertical scaling (scale-up).
  - Use Case: Financial systems, ERPs, inventory management.
- **NoSQL (e.g., MongoDB, DynamoDB, Cassandra)**:
  - Structure: Flexible schema (document, key-value, column-family, graph).
  - Transactions: Favors BASE properties (Basically Available, Soft-state, Eventual consistency).
  - Scaling: Horizontally scalable (scale-out) by design.
  - Use Case: Real-time analytics, high-speed write logs, catalog models.

### Real-World Example
- **SQL**: Storing bank account balances where transaction consistency is critical.
- **NoSQL**: Storing user clickstream analytics logs or chat histories where write speed is high.

### Best Practice
Choose SQL when the schema is stable, data integrity is top priority, and complex joins are needed. Choose NoSQL when handling massive volume, rapidly changing attributes, or needing simple key-value reads.

### Common Mistakes
Choosing NoSQL solely because it is "hype" without realizing you need complex queries or table-joining, which leads to slow application-level join computations.

### Database Comparison
| Feature | SQL Databases | NoSQL Databases |
| :--- | :--- | :--- |
| **Data Schema** | Fixed, Predetermined | Dynamic, Flexible |
| **Scalability** | Vertical (Scale-Up) | Horizontal (Scale-Out) |
| **Relationships** | Join queries | Denormalized data |
| **Consistency** | Strong Consistency | Eventual Consistency |
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **SQL ডাটাবেস (যেমন, PostgreSQL, MySQL)**:
  - ডাটা স্ট্রাকচার: রিলেশন এবং ফিক্সড স্কিমা বিশিষ্ট টেবিল।
  - ট্রানজেকশন: শক্তিশালী ACID কমপ্লায়েন্স নিশ্চিত করে।
  - স্কেলিং: সাধারণত ভার্টিকালি স্কেল করতে হয়।
  - ব্যবহার: ব্যাংকিং ট্রানজেকশন, অর্ডার বুকিং, ইউজার প্রোফাইল।
- **NoSQL ডাটাবেস (যেমন, MongoDB, Cassandra, Redis)**:
  - ডাটা স্ট্রাকচার: পরিবর্তনশীল ডকুমেন্ট, কী-ভ্যালু বা গ্রাফ রিলেশন।
  - ট্রানজেকশন: BASE মডেল মেনে চলে (সহজ কথায় Eventual Consistency)।
  - স্কেলিং: নেটিভভাবে হরিজন্টালি স্কেল করা যায়।
  - ব্যবহার: চ্যাট হিস্ট্রি, রিয়েল-টাইম ট্র্যাকিং ডাটা, প্রোডাক্ট ক্যাটালগ।

### বাস্তব-ভিত্তিক উদাহরণ
- **SQL**: ব্যাংকিং সিস্টেমের একাউন্ট ব্যালেন্স যেখানে ট্রানজেকশন সেফটি প্রধান অগ্রাধিকার।
- **NoSQL**: রাইড শেয়ারিং অ্যাপের রিয়েল-টাইম জিপিএস লেকেশন হিস্ট্রি স্টোর করা।

### উত্তম অনুশীলন
ডাটা স্ট্রাকচার পরিবর্তন না হলে এবং ডাটার নির্ভুলতা সবচেয়ে গুরুত্বপূর্ণ হলে SQL ব্যবহার করুন। অন্যদিকে রাইট স্পিড, ডাটার ভলিউম এবং হরিজন্টাল স্কেলিং দরকার হলে NoSQL সিলেক্ট করুন।

### সাধারণ ভুল
ডাটাবেস রিলেশনশিপ এবং জটিল কুয়েরির প্রয়োজনীয়তা থাকা সত্ত্বেও শুধুমাত্র হাইপের কারণে NoSQL ডাটাবেস সিলেক্ট করা, যা পরবর্তীতে অ্যাপ্লিকেশন লেভেলে স্লো জয়েনিং তৈরি করে।

### সাধারণ ভুল
ডাটাবেস রিলেশনশিপ এবং জটিল কুয়েরির প্রয়োজনীয়তা থাকা সত্ত্বেও শুধুমাত্র হাইপের কারণে NoSQL ডাটাবেস সিলেক্ট করা, যা পরবর্তীতে অ্যাপ্লিকেশন লেভেলে স্লো জয়েনিং তৈরি করে।`
  },
  {
    id: "system-design-8",
    title: "What is an API Gateway, and what functions does it perform?",
    difficulty: "basic",
    category: "system-design",
    tags: ["API Gateway","Microservices","Networking"],
    enAnswer: "An API Gateway is a reverse proxy that acts as a single entry point for clients, routing requests to appropriate backend microservices and handling tasks like rate limiting, auth, and SSL termination.",
    bnAnswer: "এপিআই গেটওয়ে (API Gateway) হলো একটি রিভার্স প্রক্সি যা ক্লায়েন্টদের জন্য একক প্রবেশপথ হিসেবে কাজ করে, নির্দিষ্ট মাইক্রোসার্ভিসে রিকোয়েস্ট রুট করে এবং রেট লিমিটিং, অথেনটিকেশন ও SSL টার্মিনেশন হ্যান্ডেল করে।",
    enExplanation: `### Explanation
In a microservice architecture, instead of clients directly calling dozens of individual services, they call the API Gateway.
- **Key Functions**:
  1. **Request Routing**: Directs requests to backend service endpoints.
  2. **Authentication & Authorization**: Validates JWTs or OAuth tokens before forwarding requests.
  3. **Rate Limiting & Throttling**: Limits API requests per client to prevent abuse.
  4. **SSL Termination**: Decrypts HTTPS traffic at the gateway, saving CPU cycles on backend microservices.
  5. **Protocol Translation**: Translates REST requests into gRPC or message queue payloads.

### Real-World Example
Using Kong, AWS API Gateway, or Nginx at the entry point of your system to route client mobile app requests to Order, Product, and Billing microservices.

### Best Practice
Keep the API Gateway lightweight. Do not write custom business logic inside the gateway; limit its scope to routing, security, and traffic monitoring.

### Common Mistakes
Making the API Gateway a Single Point of Failure (SPOF) or overloading it with compute-heavy filters, which bottlenecks the entire system's throughput.

### System Flow
\`\`\`
[Client Mobile/Web] ---> [ API Gateway (Auth / Rate Limit) ]
                              |---> [ Order Service ]
                              |---> [ User Service ]
                              |---> [ Payment Service ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাইক্রোসার্ভিস আর্কিটেকচারে ক্লায়েন্ট সরাসরি অসংখ্য আলাদা আলাদা সার্ভিস কল করার পরিবর্তে একটি মাত্র এপিআই গেটওয়েকে কল করে।
- **প্রধান দায়িত্বসমূহ**:
  ১. **রিকোয়েস্ট রাউটিং**: ক্লায়েন্টের রিকোয়েস্টকে সঠিক মাইক্রোসার্ভিস এন্ডপয়েন্টে পাঠিয়ে দেয়।
  ২. **অথেনটিকেশন ও অথরাইজেশন**: রিকোয়েস্ট পাস করার আগে JWT বা টোকেন ভ্যালিডেশন চেক করে।
  ৩. **রেট লিমিটিং**: ডস (DoS) এটাক বা এপিআই অপব্যবহার রোধে ক্লায়েন্ট প্রতি রিকোয়েস্টের সীমা নির্ধারণ করে।
  ৪. **SSL টার্মিনেশন**: গেটওয়ে লেভেলে SSL ডিক্রিপ্ট করে ফেলায় ব্যাকএন্ড সার্ভিসগুলো দ্রুত প্রসেস করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইল অ্যাপের ট্রাফিক হ্যান্ডেল করতে গেটওয়ে হিসেবে Kong বা AWS API Gateway ব্যবহার করা, যা অর্ডার ও ইউজার সার্ভিসকে নেটওয়ার্ক ফিল্টার দিয়ে প্রটেক্ট করে।

### উত্তম অনুশীলন
এপিআই গেটওয়েকে লাইটওয়েট রাখুন। গেটওয়ের ভেতর কাস্টম বিজনেস লজিক লিখবেন না; একে শুধু ট্রাফিক সিকিউরিটি ও রাউটিং লেয়ার হিসেবে ব্যবহার করুন।

### সাধারণ ভুল
গেটওয়েতে জটিল বিজনেস লজিক বা অতিরিক্ত প্রসেসিং যোগ করা, যা এপিআই গেটওয়েকে ধীরগতির করে তোলে এবং এটিকে একটি সিঙ্গেল পয়েন্ট অফ ফেইলিউর (SPOF) বানায়।

### সাধারণ ভুল
গেটওয়েতে জটিল বিজনেস লজিক বা অতিরিক্ত প্রসেসিং যোগ করা, যা এপিআই গেটওয়েকে ধীরগতির করে তোলে এবং এটিকে একটি সিঙ্গেল পয়েন্ট অফ ফেইলিউর (SPOF) বানায়।`
  },
  {
    id: "system-design-9",
    title: "Explain System Availability and the meaning of \"Nines\" (e.g., 99.9% vs. 99.99%).",
    difficulty: "basic",
    category: "system-design",
    tags: ["SLA","High Availability","System Metrics"],
    enAnswer: "System Availability is the percentage of time a system remains operational. \"Nines\" refer to uptime SLAs: 99.9% allows ~8.76 hours of downtime per year, while 99.99% allows only ~52.6 minutes.",
    bnAnswer: "সিস্টেম এভেইল্যাবিলিটি বা প্রাপ্যতা হলো একটি নির্দিষ্ট সময়ে সিস্টেমের সচল থাকার শতকরা হার। যেমন: ৯৯.৯% আপটাইম বছরে সর্বোচ্চ ~৮.৭৬ ঘণ্টা ডাউনটাইম অনুমোদন করে, আর ৯৯.৯৯% আপটাইম বছরে মাত্র ~৫২.৬ মিনিট ডাউনটাইম দেয়।",
    enExplanation: `### Explanation
Availability is a core SLA (Service Level Agreement) metric:
- **Three Nines (99.9%)**: Uptime metric allowing a maximum of 8 hours, 45 minutes of unplanned downtime per year.
- **Four Nines (99.99%)**: Higher availability grade allowing a maximum of 52.6 minutes of downtime per year.
- **Five Nines (99.999%)**: Premium/Enterprise grade allowing only 5.26 minutes of downtime per year.

### Real-World Example
An payment processor like Stripe guarantees 99.999% availability because even 5 minutes of offline status can cause millions of dollars in lost transaction volume.

### Best Practice
Design for redundancy at every layer (Active-Active servers, multi-region database backups, auto-healing containers) to achieve four or five nines. Avoid manual deployment interventions.

### Common Mistakes
Over-engineering for "five nines" when the business case only requires "three nines". Reaching 99.999% availability exponentially increases hosting costs and architecture complexity.

### Downtime Summary Table
| Uptime % | Daily Downtime | Yearly Downtime |
| :--- | :--- | :--- |
| **99% (Two Nines)** | 14.4 minutes | 3.65 days |
| **99.9% (Three Nines)** | 1.44 minutes | 8.76 hours |
| **99.99% (Four Nines)** | 8.6 seconds | 52.56 minutes |
| **99.999% (Five Nines)** | 0.86 seconds | 5.26 minutes |
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিস্টেমের সচল বা একটিভ থাকার হারকে এভেইল্যাবিলিটি (Availability) বলা হয়। এটি SLA (Service Level Agreement) পরিমাপের মূল ইউনিট:
- **তিনটি নয় (99.9%)**: বছরে সর্বোচ্চ ৮ ঘণ্টা ৪৫ মিনিট সিস্টেম ডাউন থাকতে পারে।
- **চারটি নয় (99.99%)**: বছরে সর্বোচ্চ ৫২.৬ মিনিট সিস্টেম ডাউন থাকতে পারে।
- **পাঁচটি নয় (99.999%)**: বছরে মাত্র ৫.২৬ মিনিট ডাউনটাইম অনুমোদন করে।

### বাস্তব-ভিত্তিক উদাহরণ
Stripe বা ভিসা-র মতো ইন্টারন্যাশনাল পেমেন্ট গেটওয়েগুলো ৯৯.৯৯৯% সিস্টেম সচল রাখার গ্যারান্টি দেয়, কারণ সামান্য ১ মিনিটের ডাউনটাইমেও বিশ্বব্যাপী কোটি কোটি টাকার লোকসান হতে পারে।

### উত্তম অনুশীলন
সিস্টেমে চার বা পাঁচ নয়ের আপটাইম পেতে চাইলে প্রতিটি লেয়ারে রিডান্ডেন্সি নিশ্চিত করুন (যেমন, ডিস্ট্রিবিউটেড ডাটাবেস, মাল্টি-রিজিয়ন ব্যাকআপ)।

### সাধারণ ভুলসমূহ
টাকার অপচয় করা। স্টার্টআপ বা ছোট কোনো ব্লগের জন্য ৩টি নয় (৯৯.৯%) যথেষ্ট হলেও বেশি টাকা খরচ করে অযথা ৫টি নয় (৯৯.৯৯৯%) এর জন্য সিস্টেম আর্কিটেকচার জটিল করে ফেলা।`
  },
  {
    id: "system-design-10",
    title: "What is Rate Limiting, and why is it used?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Security","Rate Limiting","Networking"],
    enAnswer: "Rate limiting is a technique to control the rate of requests a client can make to a server, used to prevent abuse, secure resources from DDoS attacks, and protect billing quotas.",
    bnAnswer: "রেট লিমিটিং হলো এমন একটি প্রযুক্তি যা ক্লায়েন্ট কর্তৃক সার্ভারে পাঠানো রিকোয়েস্টের ফ্রিকোয়েন্সি নিয়ন্ত্রণ করে, যা সিস্টেমে ক্ষতিকর DDoS অ্যাটাক প্রতিরোধ করতে এবং রিসোর্স সুরক্ষিত রাখতে ব্যবহৃত হয়।",
    enExplanation: `### Explanation
Rate Limiting defines thresholds on how many times a user or client IP can call an API endpoint in a given time window (e.g., 60 requests per minute).
- **Key Uses**:
  1. **DDoS Protection**: Prevents malicious actors from overloading backend servers.
  2. **Brute-Force Mitigation**: Thwarts automated password guessing tools on login routes.
  3. **Resource Fair-Use**: Prevents single users/spiders from hogging database compute resources.
  4. **Cost Control**: Limits calls to expensive external API models (e.g., OpenAI, Stripe).

### Real-World Example
A weather API limits free tier users to 10 requests per minute. If a client exceeds this, they receive an HTTP Status Code \`429 Too Many Requests\`.

### Best Practice
Rate limit at the edge of your network (using Cloudflare or an API Gateway like Kong) to block abusive traffic before it ever reaches and consumes your application server resources.

### Common Mistakes
Applying a single global rate limit across all endpoints. Sensitive routes (like \`/api/login\` or \`/api/checkout\`) must have much stricter limits than read-only endpoints (like \`/api/products\`).

### Request Flow
\`\`\`
Client ---> [ Rate Limiter (Check Redis Counter) ]
                | (Requests < 60/min) ---> Forward to App Server
                | (Requests > 60/min) ---> Return HTTP 429 (Too Many Requests)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেট লিমিটিং হলো নির্দিষ্ট সময়ের ব্যবধানে একজন ইউজার বা নির্দিষ্ট আইপি (IP) কতবার এপিআই কল করতে পারবে তার সীমা ঠিক করে দেওয়া (যেমন, মিনিটে ৬০ বারের বেশি নয়)।
- **ব্যবহারের কারণ**:
  ১. **DDoS প্রতিরোধ**: হ্যাকার বা বট যেন কোটি কোটি রিকোয়েস্ট পাঠিয়ে সার্ভার ডাউন না করতে পারে।
  ২. **ব্রুট-ফোর্স রোধ**: লগইন পেজে রোবট দিয়ে পাসওয়ার্ড মেলানোর চেষ্টা ব্লক করা।
  ৩. **ফেয়ার-ইউজ**: সব ইউজার যেন সমানভাবে রিসোর্স ব্যবহার করতে পারে।
  ৪. **খরচ নিয়ন্ত্রণ**: থার্ড-পার্টি পেইড এপিআই অতিরিক্ত কল হওয়া থেকে বাঁচানো।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটার বা রেডিট তাদের এপিআই ফ্রী ইউজারদের জন্য লিমিটেড করে রাখে। লিমিট শেষ হলে স্ক্রিনে \`429 Too Many Requests\` মেসেজ দেখায়।

### উত্তম অনুশীলন
মোবাইল অ্যাপ বা ক্লায়েন্ট থেকে আসা ক্ষতিকর ট্রাফিক ফিল্টার করতে এপিআই গেটওয়ে লেভেলে বা নেটওয়ার্ক এজ-এ (যেমন Cloudflare-এ) রেট লিমিটিং পলিসি বসান।

### সাধারণ ভুল
শুধুমাত্র আইপি এড্রেসের ওপর ভিত্তি করে রেট লিমিট করা, কারণ একই অফিসের সব ইউজার সাধারণত একটি সিঙ্গেল পাবলিক আইপি শেয়ার করে, যার ফলে অনেক ইউজার ভুলবশত ব্লক হতে পারে।

### সাধারণ ভুল
শুধুমাত্র আইপি এড্রেসের ওপর ভিত্তি করে রেট লিমিট করা, কারণ একই অফিসের সব ইউজার সাধারণত একটি সিঙ্গেল পাবলিক আইপি শেয়ার করে, যার ফলে অনেক ইউজার ভুলবশত ব্লক হতে পারে।`
  },
  {
    id: "system-design-11",
    title: "How does the Domain Name System (DNS) work, and how does it help in scaling applications?",
    difficulty: "basic",
    category: "system-design",
    tags: ["DNS","Networking","Scaling"],
    enAnswer: "DNS translates human-readable domain names into IP addresses. It helps scale apps by using Anycast routing, Round-Robin DNS, and GeoDNS to route users to the closest or least busy server instance.",
    bnAnswer: "ডিএনএস (DNS) মানুষের পঠনযোগ্য ডোমেন নেমকে আইপি অ্যাড্রেসে রূপান্তর করে। এটি Anycast রাউটিং, রাউন্ড-রবিন ডিএনএস এবং GeoDNS-এর মাধ্যমে ইউজারকে নিকটবর্তী সার্ভারে রুট করে অ্যাপ্লিকেশন স্কেল করতে সাহায্য করে।",
    enExplanation: `### Explanation
When a user visits a domain (e.g., \`example.com\`), the browser queries DNS servers to find the corresponding IP address.
- **DNS Scaling Techniques**:
  1. **Round-Robin DNS**: Resolving a single domain to multiple IP addresses of backend load balancers, distributing traffic at the routing level.
  2. **GeoDNS (Geographic Routing)**: Resolving domain requests to different IPs based on the client's location (e.g., a user in Asia gets routed to Singapore servers, while a user in Europe hits Dublin servers).
  3. **Anycast Routing**: Multiple servers share the same IP address; routers direct traffic to the topologically closest node.

### Real-World Example
Netflix using GeoDNS to point users to regional servers, reducing latency and load on their global core network.

### Best Practice
Set short TTL (Time To Live) records for critical endpoints to enable quick failovers if an IP address goes down, but utilize stable CDN IPs to prevent excessive DNS query overhead.

### Common Mistakes
Relying solely on DNS Round-Robin for high-availability load balancing. DNS servers do not check if a target IP is healthy, so they will continue routing traffic to a crashed server until the DNS record is updated.

### Resolution Steps
\`\`\`
[Browser] ---> Query DNS (e.g., devprep.io) ---> [DNS Server]
[Browser] <--- Returns IP: 104.26.2.204 <--- [DNS Server]
[Browser] ---> HTTP Request to 104.26.2.204 ---> [Load Balancer]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিএনএস (Domain Name System) ইন্টারনেটের ফোনবুক হিসেবে কাজ করে যা মানুষের রিড করা ডোমেনকে (\`google.com\`) কম্পিউটারের আইপি অ্যাড্রেসে (\`142.250.190.46\`) রূপান্তর করে।
- **ডিএনএস স্কেলিং টেকনিক**:
  ১. **রাউন্ড-রবিন ডিএনএস**: একটি ডোমেনের বিপরীতে একাধিক আইপি দিয়ে রাখা, যাতে একেক রিকোয়েস্ট একেক সার্ভার আইপিতে যায়।
  ২. **GeoDNS**: ইউজারের ভৌগোলিক অবস্থান ট্র্যাক করে তাকে সবচেয়ে কাছের সার্ভারে পাঠানো (যেমন, বাংলাদেশ থেকে এপিআই রিকোয়েস্ট ইন্ডিয়ান সার্ভারে যাবে, ইউরোপ থেকে জার্মানির সার্ভারে)।
  ৩. **Anycast**: একাধিক সার্ভার একটি নির্দিষ্ট আইপি ব্যবহার করে এবং ট্রাফিক স্বয়ংক্রিয়ভাবে সবচেয়ে কাছে থাকা অ্যাক্টিভ নোডে পৌঁছায়।

### বাস্তব-ভিত্তিক উদাহরণ
নেটফ্লিক্স (Netflix) তাদের ভিডিও স্ট্রিমিং সার্ভারের লোড কমাতে GeoDNS ব্যবহার করে ভৌগোলিকভাবে নিকটতম এজ সার্ভারে ট্রাফিক পাঠায়।

### উত্তম অনুশীলন
দ্রুত ফেইলওভার সাপোর্ট করার জন্য ডিএনএস টিটিএল (TTL) টাইম কম রাখুন, যাতে কোনো ব্যাকএন্ড ক্রাশ করলে রুট রেকর্ড দ্রুত পরিবর্তন করা যায়।

### সাধারণ ভুল
ডিএনএস রেকর্ড ক্যাশ হওয়ার কারণে আইপি পরিবর্তনের পর নতুন আইপিতে ট্রাফিক ট্রানজিশন হতে দেরি হয়। তাই ডিএনএস ফেইলওভারের ক্ষেত্রে টিটিএল (TTL) এর মান ছোট রাখা উচিত।

### সাধারণ ভুল
ডিএনএস রেকর্ড ক্যাশ হওয়ার কারণে আইপি পরিবর্তনের পর নতুন আইপিতে ট্রাফিক ট্রানজিশন হতে দেরি হয়। তাই ডিএনএস ফেইলওভারের ক্ষেত্রে টিটিএল (TTL) এর মান ছোট রাখা উচিত।`
  },
  {
    id: "system-design-12",
    title: "What is the difference between Stateless and Stateful services, and why are stateless services preferred for scaling?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Scaling","State Management","Software Design"],
    enAnswer: "Stateless services do not store client session data locally, treating every request independently. Stateful services retain client context locally. Stateless services are preferred because they can be easily scaled horizontally.",
    bnAnswer: "স্টেটলেস সার্ভিস লোকাল মেমোরিতে ক্লায়েন্টের সেশন ডাটা জমা রাখে না, প্রতিটি রিকোয়েস্টকে আলাদা মনে করে। স্টেটফুল সার্ভিস ক্লায়েন্ট কনটেক্সট মনে রাখে। সহজে হরিজন্টালি স্কেল করার জন্য স্টেটলেস সার্ভিস বেশি ব্যবহৃত হয়।",
    enExplanation: `### Explanation
- **Stateless Services**: The application server does not store user profiles, session states, or database states in its local memory/disk. If Server A fails, the request can safely go to Server B because the client sends all necessary context (e.g. JWT token) with the request, or fetches state from a shared database.
- **Stateful Services**: The server retains user state (e.g., logged-in status, shopping cart data) in its local memory. Routing subsequent requests must hit the exact same server instance (using sticky sessions).

### Why Stateless is preferred:
1. **Easy Scaling**: You can add/remove servers behind a load balancer without data sync worries.
2. **High Availability**: If a server crashes, no user data is lost; traffic redirects to any healthy instance.
3. **Simpler Load Balancing**: The balancer can route traffic to the least busy server without worrying about session affinity.

### Real-World Example
- **Stateless**: A REST API validating a JWT token and reading product inventories from a database on every request.
- **Stateful**: A game server tracking live player positions and chat rooms in local memory.

### Best Practice
Store session states in Redis or client-side signed cookies, keeping your application servers completely stateless.

### Architecture Comparison
\`\`\`
Stateful:
[User A] ---> [Server 1 (Holds User A Session in memory)] (Must consistently route here)

Stateless:
[User A] ---> [Server 1] ---> [Shared Redis Session Database]
[User A] ---> [Server 2] ---> [Shared Redis Session Database] (Can hit any server)
\`\`\`

### Common Mistakes
Storing transient user session state in application memory, which prevents scaling servers horizontally and causes user logs to fail when a server restarts.

### Common Mistakes
Storing transient user session state in application memory, which prevents scaling servers horizontally and causes user logs to fail when a server restarts.`,
    bnExplanation: `### ব্যাখ্যা
- **স্টেটলেস সার্ভিস (Stateless)**: সার্ভার তার নিজস্ব মেমোরি বা লোকাল ডিস্কে ইউজারের লগইন সেশন বা কার্ট ইনফরমেশন সেভ রাখে না। প্রতিটি রিকোয়েস্টই নতুন এবং ক্লায়েন্ট নিজে রিকোয়েস্টের সাথে সব ইনফরমেশন পাঠায় (যেমন টোকেন)। এর ফলে ১ নং সার্ভার ক্রাশ করলেও ২ নং সার্ভার রিকোয়েস্টটি হ্যান্ডেল করতে পারে।
- **স্টেটফুল সার্ভিস (Stateful)**: সার্ভার মেমোরিতে ইউজারের পূর্ববর্তী রিকোয়েস্টের ডাটা স্টোর করে। এর জন্য ইউজারকে প্রতিবার নির্দিষ্ট ঐ একটি সার্ভারেই রিকোয়েস্ট পাঠাতে হয় (Sticky Session)।

### স্টেটলেস সার্ভিস পছন্দ করার কারণ:
১. **হরিজন্টাল স্কেলিং**: ডাটা সিঙ্ক করার কোনো ঝামেলা ছাড়াই ক্লাস্টারে নতুন নতুন সার্ভার নোড অ্যাড বা রিমুভ করা যায়।
২. **ফল্ট টলারেন্স**: যেকোনো সার্ভার যখন তখন বন্ধ হয়ে গেলেও ইউজারের সেশন লস হয় না।
৩. **লোড ব্যালেন্সার অপ্টিমাইজেশন**: ট্রাফিক ডিস্ট্রিবিউট করা একদম সহজ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
- **স্টেটলেস**: স্ট্যান্ডার্ড REST API যা প্রতিবার JWT টোকেন ডিক্রিপ্ট করে ডাটাবেস কুয়েরি রান করে।
- **স্টেটফুল**: রিয়েল-টাইম মাল্টিপ্লেয়ার গেম সার্ভার যা প্লেয়ারের ইনস্ট্যান্ট পজিশন র‌্যামে ধরে রাখে।

### উত্তম অনুশীলন
সেশন ডাটা স্টোর করতে ক্লায়েন্ট-সাইড কুকি অথবা সেন্ট্রালাইজড Redis বা Memcached ক্লাস্টার ব্যবহার করুন।

### সাধারণ ভুল
অ্যাপ্লিকেশন মেমোরিতে (ইন-মেমোরি) সেশন ডাটা স্টোর করা, যা নোডগুলোকে স্কেল করতে বাধা দেয় এবং যেকোনো নোড রিস্টার্ট হলে ইউজারের সেশন লস ঘটায়।

### উত্তম অনুশীলন
সেশন ডাটা স্টোর করতে ক্লায়েন্ট-সাইড কুকি অথবা সেন্ট্রালাইজড Redis বা Memcached ক্লাস্টার ব্যবহার করুন।

### সাধারণ ভুল
অ্যাপ্লিকেশন মেমোরিতে (ইন-মেমোরি) সেশন ডাটা স্টোর করা, যা নোডগুলোকে স্কেল করতে বাধা দেয় এবং যেকোনো নোড রিস্টার্ট হলে ইউজারের সেশন লস ঘটায়।`
  },
  {
    id: "system-design-13",
    title: "Explain Database Indexing. What are its benefits and write performance trade-offs?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Databases","Indexing","Performance"],
    enAnswer: "Database indexing is a data structure (commonly B-Trees) that speeds up data retrieval queries. While it improves read performance, it degrades write performance since the index must be updated on every write.",
    bnAnswer: "ডাটাবেস ইনডেক্সিং হলো একটি ডাটা স্ট্রাকচার (সাধারণত B-Tree) যা কুয়েরির মাধ্যমে দ্রুত ডাটা খুঁজে পেতে সাহায্য করে। এটি রিড স্পিড বাড়ালেও রাইট স্পিড কমিয়ে দেয়, কারণ প্রতিটি রাইট অপারেশনে ইনডেক্স আপডেট করতে হয়।",
    enExplanation: `### Explanation
Without an index, the database must perform a full-table scan (check every row) to locate matching entries.
- **How it works**: An index acts like the index section at the back of a book. It points directly to the memory address of the target row.
- **Trade-offs**:
  - **Read Performance**: Queries on indexed columns (e.g., \`WHERE email = 'user@test.com'\`) execute in logarithmic time (\$O(log N)\$) instead of linear time (\$O(N)\$).
  - **Write Performance**: \`INSERT\`, \`UPDATE\`, and \`DELETE\` queries become slower because the database must update both the raw table and the underlying index B-Tree.
  - **Storage**: Indexes consume extra disk space and RAM.

### Real-World Example
Creating an index on the \`user_id\` or \`email\` column in a users database table to load user profiles instantly.

### Best Practice
Only index columns that are frequently used in \`WHERE\` clauses, \`JOIN\` conditions, or \`ORDER BY\` statements. Avoid indexing tables with high write/insert frequencies but low read ratios.

### Common Mistakes
Indexing every single column in a table. This bloated overhead makes writes slow and fills server memory with useless B-Tree records.

### SQL Example
\`\`\`sql
-- Slow query without index (searches millions of rows):
SELECT * FROM users WHERE email = 'test@example.com';

-- Creating Index:
CREATE INDEX idx_users_email ON users(email);

-- Fast query now uses the Index:
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com'; 
-- output will show Index Scan instead of Seq Scan (Sequential Scan).
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেসে ইনডেক্স না থাকলে কোনো নির্দিষ্ট ডাটা খুঁজতে পুরো টেবিল চেক করতে হয় (Sequential Scan)।
- **কাজের নিয়ম**: এটি বইয়ের শেষের সূচিপত্রের মতো কাজ করে, যা সুনির্দিষ্ট পেজে নিয়ে যায়।
- **সুবিধা ও অসুবিধা**:
  - **রিড স্পিড**: ইনডেক্স কলামের কুয়েরিগুলো লিনিয়ার টাইমের (\$O(N)\$) পরিবর্তে লগারিদমিক টাইমে (\$O(log N)\$) শেষ হয়।
  - **রাইট স্পিড**: নতুন ডাটা ইনসার্ট, ডিলিট বা আপডেট করলে ডাটাবেসকে ইনডেক্স ফাইল রি-অর্গানাইজ করতে হয়, তাই রাইট স্পিড কিছুটা কমে যায়।
  - **মেমোরি**: ইনডেক্স ফাইল অতিরিক্ত স্টোরেজ দখল করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার টেবিলের ইমেইল কলামে ইনডেক্স তৈরি করা যাতে লগইন ভ্যালিডেশনের সময় কুয়েরি নিমেষেই শেষ হয়।

### উত্তম অনুশীলন
শুধুমাত্র \`WHERE\`, \`JOIN\` এবং \`ORDER BY\` কন্ডিশনে ব্যবহৃত কলামে ইনডেক্স ব্যবহার করুন। অপ্রয়োজনীয় কলামে ইনডেক্সিং পরিহার করুন।

### সাধারণ ভুল
টেবিলের প্রতিটি কলামে ইনডেক্স তৈরি করা, যা রাইট অপারেশনকে অত্যন্ত ধীরগতির করে ফেলে এবং অতিরিক্ত মেমোরি ও স্টোরেজ অপচয় করে।

### সাধারণ ভুল
টেবিলের প্রতিটি কলামে ইনডেক্স তৈরি করা, যা রাইট অপারেশনকে অত্যন্ত ধীরগতির করে ফেলে এবং অতিরিক্ত মেমোরি ও স্টোরেজ অপচয় করে।`
  },
  {
    id: "system-design-14",
    title: "What is Database Sharding (Horizontal Partitioning)?",
    difficulty: "basic",
    category: "system-design",
    tags: ["Databases","Sharding","Scaling"],
    enAnswer: "Sharding is a database architecture pattern that splits a single large database horizontally into smaller, faster database nodes (shards) across multiple servers.",
    bnAnswer: "শার্ডিং (Sharding) হলো একটি ডাটাবেস প্যাটার্ন যা একটি বড় ডাটাবেসকে হরিজন্টালি বিভক্ত করে একাধিক সার্ভারে ছোট ও দ্রুতগতিসম্পন্ন ডাটাবেস নোডে (শার্ড) ভাগ করে রাখে।",
    enExplanation: `### Explanation
When a single database server cannot handle scale even with read replicas (due to write bottleneck or storage limits), sharding is implemented.
- **Horizontal Partitioning**: Splitting a table by rows. For example, users with IDs 1-1M are stored in Shard A, and IDs 1M-2M are stored in Shard B.
- **Vertical Partitioning**: Splitting a table by columns. For example, basic profile columns go to Server A, and heavy payment detail columns go to Server B.

### Sharding Key
The criteria used to determine which shard a row goes to (e.g. hashing the \`user_id\`). Choosing a good shard key is critical to ensure data is evenly distributed across all shards.

### Real-World Example
Instagram sharding their databases using Consistent Hashing on User IDs to distribute billions of photo posts across clusters of server nodes.

### Best Practice
Only shard when vertical scaling and caching have been exhausted. Sharding introduces massive complexity: joins across shards become slow/impossible, and database schema updates become complex.

### Architecture View
\`\`\`
                          [ Application Server ]
                        /          |           \\
             (Route by User ID Hash)
                      v            v            v
                [Shard DB 1]  [Shard DB 2]  [Shard DB 3]
                 (IDs 1-100)  (IDs 101-200) (IDs 201-300)
\`\`\`

### Common Mistakes
Sharding too early before exhausting vertical scaling, caching, or read replicas, leading to unnecessary architectural complexity and join difficulties.

### Common Mistakes
Sharding too early before exhausting vertical scaling, caching, or read replicas, leading to unnecessary architectural complexity and join difficulties.`,
    bnExplanation: `### ব্যাখ্যা
যখন একটি একক ডাটাবেস সার্ভার অতিরিক্ত ট্রাফিকের চাপে ভেঙে পড়ে (রাইট বোতলনেক বা স্টোরেজ লিমিটের কারণে), তখন শার্ডিং করা হয়।
- **হরিজন্টাল পার্টিশনিং**: টেবিলকে রো (Rows) বা সারি অনুযায়ী আলাদা করা। যেমন, আইডি ১ থেকে ১ লাখ ইউজার থাকবে ১ম শার্ড সার্ভারে, আর আইডি ১ লাখ ১ থেকে ২ লাখ ইউজার থাকবে ২য় শার্ড সার্ভারে।
- **ভার্টিক্যাল পার্টিশনিং**: কলাম আলাদা করা (ইউজারের সাধারণ ইনফো এক সার্ভারে, এবং ক্রেডিট কার্ডের মতো সিকিউর ডাটা অন্য সার্ভারে রাখা)।

### শার্ড কী (Shard Key)
কোন ডাটা কোন শার্ডে যাবে তা নির্ধারণ করার জন্য কলাম সিলেক্ট করা (যেমন ইউজার আইডি)। সঠিক শার্ড কী সিলেক্ট না করলে কোনো একটি শার্ড সার্ভারে অতিরিক্ত ট্রাফিকের লোড পড়ে যেতে পারে (Hotspotting)।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটার বা ইনস্টাগ্রাম ইউজার আইডি ব্যবহার করে বিলিয়ন বিলিয়ন টুইট বা ছবি বিশ্বজুড়ে ছড়ানো ডাটাবেস ক্লাস্টারে ভাগ করে স্টোর করে।

### উত্তম অনুশীলন
ক্যাশিং বা রিড-রেপ্লিকা দিয়ে সমাধান না হলে শেষ পদক্ষেপ হিসেবে শার্ডিং অ্যাপ্লাই করুন, কারণ শার্ডিং করার পর ডাটাবেস জয়েন কুয়েরি এবং ট্রানজেকশন ম্যানেজমেন্ট অত্যন্ত জটিল হয়ে পড়ে।

### সাধারণ ভুল
সিস্টেমের প্রথম দিকেই বা অকাল শার্ডিং করা, যখন রিড-রেপ্লিকা বা ক্যাশিং দিয়েই স্কেল করা সম্ভব ছিল। এটি সিস্টেমের জটিলতা বাড়ে।

### সাধারণ ভুল
সিস্টেমের প্রথম দিকেই বা অকাল শার্ডিং করা, যখন রিড-রেপ্লিকা বা ক্যাশিং দিয়েই স্কেল করা সম্ভব ছিল। এটি সিস্টেমের জটিলতা বাড়ে।`
  },
  {
    id: "system-design-15",
    title: "Explain the purpose of Health Checks and the Heartbeat Pattern in distributed systems.",
    difficulty: "basic",
    category: "system-design",
    tags: ["Fault Tolerance","Microservices","Monitoring"],
    enAnswer: "Health checks inspect if a service instance is operational, while heartbeats are periodic messages sent from a service node to a coordinator to signal that it is alive.",
    bnAnswer: "হেলথ চেক পরীক্ষা করে যে একটি সার্ভিস নোড সচল আছে কিনা, আর হার্টবিট হলো একটি সার্ভিস নোড থেকে কোঅর্ডিনেটরের কাছে পাঠানো সাময়িক সংকেত যা তার সক্রিয়তা নিশ্চিত করে।",
    enExplanation: `### Explanation
In distributed systems, servers fail. Load balancers and service registries need a real-time mechanism to identify and isolate failed nodes.
- **Health Check**: An endpoint (e.g. \`GET /health\`) exposed by a service that runs internal checks (database connection, disk space, memory limits) and returns HTTP 200 if healthy.
- **Heartbeat Pattern**: A node sends a simple ping/signal to a central server at regular intervals (e.g., every 5 seconds). If the central server doesn't receive a heartbeat within a threshold, it assumes the node has crashed and removes it from the routing pool.

### Real-World Example
- **Kubernetes Liveness Probe**: Continually calling a container's \`/healthz\` endpoint. If it returns 500, Kubernetes kills and restarts the container.
- **Consul or Eureka**: Microservices sending heartbeats to the service discovery server to remain in the active service directory.

### Best Practice
Make health check endpoints lightweight. Do not perform complex queries in your health check code to prevent the checker itself from overloading the server.

### Code Example (Express.js Health Route)
\`\`\`typescript
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get('/health', async (req, res) => {
  try {
    // Check database connection health
    const dbState = mongoose.connection.readyState;
    if (dbState !== 1) {
      throw new Error('Database disconnected');
    }
    
    res.status(200).json({ status: 'UP', db: 'CONNECTED' });
  } catch (error) {
    res.status(500).json({ status: 'DOWN', error: error.message });
  }
});
\`\`\`

### Common Mistakes
Running heavy database queries or resource-intensive checks inside the health check handler, which can crash the node under high monitoring traffic.

### Common Mistakes
Running heavy database queries or resource-intensive checks inside the health check handler, which can crash the node under high monitoring traffic.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড সিস্টেমে যেকোনো সময় কোনো সার্ভার ডাউন হতে পারে। লোড ব্যালেন্সার বা গেটওয়ে যেন ট্রাফিক ডেড সার্ভারে না পাঠায়, সেজন্য এটি ব্যবহৃত হয়।
- **হেলথ চেক (Health Check)**: এটি অ্যাপ্লিকেশনের একটি স্পেশাল এপিআই রাউট (যেমন \`/health\`), যা কল করলে চেক করে যে ইন্টারনাল কম্পোনেন্ট (ডাটাবেস কানেকশন, ডিস্ক স্পেস) ঠিক আছে কিনা। ঠিক থাকলে HTTP 200 পাঠায়।
- **হার্টবিট (Heartbeat)**: সার্ভিস নোড প্রতি ৫ বা ১০ সেকেন্ড পর পর সেন্ট্রাল কন্ট্রোলার বা মেম্বারশিপ ম্যানেজারের কাছে একটি সিগন্যাল পাঠায়। সময়মতো সিগন্যাল না আসলে কোঅর্ডিনেটর নোডটিকে ডেড ঘোষণা করে রাউটিং পুল থেকে বাদ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিস (Kubernetes) লরেন্স প্রোব এপিআই নোডের স্থিতি জানতে প্রতি ১০ সেকেন্ড পর পর নোডের \`/healthz\` রাউটে রিকোয়েস্ট পাঠিয়ে চেক করে নোডটি জীবিত আছে কিনা।

### উত্তম অনুশীলন
হেলথ চেক কুয়েরিগুলোকে অত্যন্ত লাইটওয়েট এবং ফাস্ট রাখুন এবং মেমোরি-ডিস্ক স্পেস মনিটর করুন।

### সাধারণ ভুল
হেলথ চেক রাউটে খুব ভারী ডাটাবেস কুয়েরি চালানো, যার ফলে মনিটরিং টুলসগুলোর অতিরিক্ত রিকোয়েস্টের চাপেই সার্ভার ডাউন হতে পারে।

### উত্তম অনুশীলন
হেলথ চেক কুয়েরিগুলোকে অত্যন্ত লাইটওয়েট এবং ফাস্ট রাখুন এবং মেমোরি-ডিস্ক স্পেস মনিটর করুন।

### সাধারণ ভুল
হেলথ চেক রাউটে খুব ভারী ডাটাবেস কুয়েরি চালানো, যার ফলে মনিটরিং টুলসগুলোর অতিরিক্ত রিকোয়েস্টের চাপেই সার্ভার ডাউন হতে পারে।`
  }
];
