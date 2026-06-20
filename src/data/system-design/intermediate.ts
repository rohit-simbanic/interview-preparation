import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: "system-design-16",
    title: "Explain the CAP Theorem and its implications for distributed systems.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["CAP Theorem","Distributed Systems","Databases"],
    enAnswer: "The CAP Theorem states that a distributed system can guarantee at most two out of three properties: Consistency (all nodes see the same data), Availability (every request receives a non-error response), and Partition Tolerance (the system continues to operate despite network splits).",
    bnAnswer: "ক্যাপ থিওরেম (CAP Theorem) অনুসারে একটি ডিস্ট্রিবিউটেড সিস্টেম একই সাথে সর্বোচ্চ দুটি প্রপার্টি গ্যারান্টি দিতে পারে: Consistency (সব নোডে একই ডাটা থাকবে), Availability (প্রতিটি রিকোয়েস্ট রেসপন্স পাবে) এবং Partition Tolerance (নেটওয়ার্ক বিচ্ছিন্ন হলেও সিস্টেম সচল থাকবে)।",
    enExplanation: `### Explanation
In distributed architectures:
- **Consistency (C)**: Every read receives the most recent write or an error.
- **Availability (A)**: Every non-failing node returns a response for every request (no errors/timeouts), without guarantee that it contains the most recent write.
- **Partition Tolerance (P)**: The system continues to function even if a network partition (communication drop between nodes) occurs.

### The Real Trade-off (CP vs AP)
Since network partitions are inevitable in real-world physical networks, **Partition Tolerance (P) is mandatory**. Therefore, distributed databases must choose between:
- **CP (Consistency + Partition Tolerance)**: If a partition happens, the database rejects updates or reads on disconnected nodes to prevent inconsistent data. (e.g., MongoDB, HBase).
- **AP (Availability + Partition Tolerance)**: The database accepts reads and writes on partitioned nodes, returning stale/soft data. The database reconciles discrepancies once the partition heals. (e.g., Cassandra, DynamoDB).

### Real-World Example
- **CP Database**: A banking system during a network split between branches. It stops cash withdrawals until consistency is restored, preventing double-spending.
- **AP Database**: A shopping cart system. It allows customers to continue adding items to their cart during network drops, fixing cart counts later.

### Best Practice
Choose **CP** systems when data correctness is critical (financials, identity audits). Choose **AP** systems when uptime/responsiveness is paramount and eventual consistency is acceptable.

### CAP Visual representation
\`\`\`
          Consistency
             /   \\
            /  P  \\
           /   a   \\
          /    r    \\
         /     t     \\
  MongoDB/     i     \\Cassandra
   HBase/      t      \\DynamoDB
       /       i       \\
      /        o        \\
     /         n         \\
Availability ----------- Partition Tolerance
\`\`\`

### Common Mistakes
Trying to build an all-in-one system that claims to be CA (Consistent and Available) under network partitions, which is mathematically impossible according to the CAP theorem.

### Common Mistakes
Trying to build an all-in-one system that claims to be CA (Consistent and Available) under network partitions, which is mathematically impossible according to the CAP theorem.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড সিস্টেম ডিজাইনের মূল ভিত্তি হলো ক্যাপ থিওরেম:
- **Consistency (C)**: যেকোনো নোড থেকে রিড করলে সর্বশেষ রাইট করা সঠিক ডাটা পাওয়া যাবে, নতুবা এরর আসবে।
- **Availability (A)**: রিকোয়েস্ট পাঠালে সিস্টেম সবসময় রেসপন্স করবে (সফল রেসপন্স), তবে তা লেটেস্ট ডাটা নাও হতে পারে।
- **Partition Tolerance (P)**: নেটওয়ার্ক বিচ্ছেদের (নোডগুলোর মধ্যে ডেটা আদান-প্রদান ব্যাহত হওয়া) পরেও পুরো সিস্টেম সামগ্রিকভাবে সচল থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
- **CP ডাটাবেস**: ব্যাংক ট্রানজেকশন। নেটওয়ার্ক ডাউন থাকলে ব্যাংক ব্যালেন্স রিড বা রাইট বন্ধ করে দেয় যাতে ভুল ব্যালেন্স না দেখায়।
- **AP ডাটাবেস**: ফেসবুক লাইক কাউন্ট। লাইক কাউন্ট কয়েক সেকেন্ড ভুল দেখালেও সমস্যা নেই, তাই ফেসবুক এভেইল্যাবিলিটিকে অগ্রাধিকার দেয়।

### উত্তম অনুশীলন
সিস্টেমের প্রয়োজনীয়তা অনুযায়ী সঠিক ডাটাবেস মোড (যেমন, পেমেন্টের জন্য CP এবং নোটিফিকেশনের জন্য AP) নির্বাচন করুন।

### সাধারণ ভুল
নেটওয়ার্ক ডাউন থাকার সময়েও সিস্টেম একই সাথে সম্পূর্ণ কনসিস্টেন্ট (C) এবং এভেইলঅ্যাবল (A) থাকবে এমন আশা করা, যা ক্যাপ থিওরেম অনুযায়ী অসম্ভব।

### উত্তম অনুশীলন
সিস্টেমের প্রয়োজনীয়তা অনুযায়ী সঠিক ডাটাবেস মোড (যেমন, পেমেন্টের জন্য CP এবং নোটিফিকেশনের জন্য AP) নির্বাচন করুন।

### সাধারণ ভুল
নেটওয়ার্ক ডাউন থাকার সময়েও সিস্টেম একই সাথে সম্পূর্ণ কনসিস্টেন্ট (C) এবং এভেইলঅ্যাবল (A) থাকবে এমন আশা করা, যা ক্যাপ থিওরেম অনুযায়ী অসম্ভব।`
  },
  {
    id: "system-design-17",
    title: "What is the PACELC Theorem, and how does it extend the CAP Theorem?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Distributed Databases","CAP Theorem","PACELC"],
    enAnswer: "PACELC extends CAP by stating: If there is a Partition (P), trade off Availability (A) or Consistency (C); Else (E), when the system runs normally, trade off Latency (L) or Consistency (C).",
    bnAnswer: "PACELC থিওরেম CAP-কে বর্ধিত করে বলে: যদি নেটওয়ার্ক পার্টিশন (P) থাকে, তবে Availability (A) বা Consistency (C) বেছে নিন; অন্যথায় (E), সাধারণ অবস্থায় Latency (L) বা Consistency (C) এর মধ্যে ট্রেড-অফ করুন।",
    enExplanation: `### Explanation
CAP theorem only describes system behavior during rare network splits (partitions). **PACELC** addresses normal operations as well.
- **P-A-C**: If **P**artition, trade off **A**vailability or **C**onsistency.
- **E-L-C**: **E**lse (normal runs), trade off **L**atency or **C**onstancy.

### The Normal Run Trade-off (L vs C)
To guarantee consistency (C) during normal runs, write requests must be replicated to multiple nodes before acknowledging the client. This introduces network **Latency (L)**.
- **PC/EC (e.g. MongoDB)**: Consistency-focused during partitions and normal runs.
- **PA/EL (e.g. Cassandra)**: Availability-focused during partitions, and minimizes latency during normal runs.

### Real-World Example
- **Cassandra (PA/EL)**: Writes are immediately acknowledged locally (low latency), and synchronized with other servers eventually.
- **PostgreSQL Synchronous replication (PC/EC)**: Writes wait for secondary nodes confirmation (high latency) to guarantee absolute consistency.

### Best Practice
Identify the system metrics. If SLA requires sub-10ms response times (low latency), choose an **EL** database. If data correctness must be immediate (e.g., changing password keys), choose an **EC** database.

### Common Mistakes
Failing to account for latency trade-offs during normal operations, leading to consistency bottlenecks in low-latency APIs.`,
    bnExplanation: `### ব্যাখ্যা
PACELC থিওরেম মূলত CAP থিওরেমকে আরো বিস্তারিত করে। এটি বলে:
- **P-A-C**: যদি নেটওয়ার্ক বিভ্রাট (Partition) ঘটে, তবে সিস্টেম এভেইল্যাবিলিটি (Availability) নাকি কনসিস্টেন্সি (Consistency) বেছে নেবে?
- **E-L-C**: অন্যথায় (Else - সাধারণ অবস্থায়), সিস্টেম লেটেন্সি (Latency) নাকি কনসিস্টেন্সি (Consistency) কে অগ্রাধিকার দেবে?

### বাস্তব-ভিত্তিক উদাহরণ
- **Cassandra (PA/EL)**: নেটওয়ার্ক ডাউন থাকলে এটি এভেইল্যাবিলিটি বজায় রাখে এবং সাধারণ সময়ে দ্রুত রেসপন্স (কম লেটেন্সি) দেয়।
- **PostgreSQL Synchronous replication (PC/EC)**: Writes wait for secondary nodes confirmation (high latency) to guarantee absolute consistency.

### উত্তম অনুশীলন
রিয়েল-টাইম অ্যাপের ক্ষেত্রে কম লেটেন্সি (EL) বেছে নিন। কিন্তু ফিন্যান্সিয়াল ডাটার ক্ষেত্রে লেটেন্সি একটু বেশি হলেও সর্বাবস্থায় কনসিস্টেন্সি (EC) বেছে নেওয়া উচিত।

### সাধারণ ভুল
সাধারণ মোডে লেটেন্সি এবং কনসিস্টেন্সির মধ্যকার ট্রেড-অফ বুঝতে না পারা, যার ফলে হাই-লেটেন্সি সম্পন্ন ডাটাবেস দিয়ে রিয়েল-টাইম অ্যাপ ডিজাইন করার চেষ্টা করা।`
  },
  {
    id: "system-design-18",
    title: "How does Consistent Hashing work, and why is it used in load balancers and sharded databases?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Hashing","Caching","Load Balancing","Sharding"],
    enAnswer: "Consistent Hashing maps both servers and data keys to a circular ring hash space. When a server node is added or removed, it minimizes data relocation, remapping only $1/N$ of the keys.",
    bnAnswer: "কনসিস্টেন্ট হ্যাশিং (Consistent Hashing) সার্ভার এবং ডাটা কী উভয়কেই একটি বৃত্তাকার রিং হ্যাশ স্পেসে ম্যাপ করে। এর ফলে কোনো সার্ভার নোড যুক্ত বা বাদ দিলে ডাটালস বা স্থানান্তর সর্বনিম্ন পর্যায়ে নেমে আসে।",
    enExplanation: `### Explanation
Traditional modulo hashing (\$Hash(Key) pmod N\$) maps keys to \$N\$ servers. If \$N\$ changes (a server dies or is added), almost all keys map to different servers, wiping out cache hits and forcing massive database re-sharding.

### Consistent Hashing Mechanism:
1. **Hash Ring**: The hash space is represented as a circle (e.g., \$0\$ to \$2^{32}-1\$).
2. **Server Placement**: Server nodes are hashed onto points along the ring.
3. **Key Placement**: Data keys are hashed onto the ring. A key is routed to the first server it finds by moving clockwise.
4. **Impact of Adding/Removing a Node**: Only keys located between the affected server and its predecessor need to be re-routed.

### Real-World Example
CDNs (like Cloudflare) hashing URL requests to cache servers, ensuring that if one cache server fails, only the users connected to that server are affected.

### Best Practice
Utilize **Virtual Nodes (Vnodes)**. Map multiple virtual points on the ring to the same physical server. This ensures a balanced distribution of keys across nodes with different hardware capacities.

### Ring Visualization
\`\`\`
           [Server A] (Hash: 100)
             /      \\
            /        \\
      [Key 1]        [Key 2] (Hash: 250 -> routed to B)
     (Hash: 50)        \\
        \\             \\
      [Server C] ---- [Server B] (Hash: 300)
     (Hash: 500)
\`\`\`

### Common Mistakes
Not using virtual nodes, which leads to unequal data distribution (hotspots) where some servers handle almost all requests while others sit idle.

### Common Mistakes
Not using virtual nodes, which leads to unequal data distribution (hotspots) where some servers handle almost all requests while others sit idle.`,
    bnExplanation: `### ব্যাখ্যা
সাধারণ হ্যাশিং মেথডে (\$Hash(Key) pmod N\$) ক্যাশ বা ডাটা নোড সিলেক্ট করা হয়। কিন্তু নোডের সংখ্যা (\$N\$) পরিবর্তিত হলে সমস্ত কুয়েরি নতুন আইপিতে হিট করে, যা ক্যাশ মিস এবং সিস্টেমে বড় বিভ্রাট ঘটায়।
- **কনসিস্টেন্ট হ্যাশিং**:
  ১. একটি কাল্পনিক বৃত্তাকার হ্যাশ রিং কল্পনা করা হয়।
  ২. সার্ভার এবং ডাটা কী উভয়কেই হ্যাশ করে রিংয়ের বিভিন্ন পয়েন্টে বসানো হয়।
  ৩. একটি নির্দিষ্ট ডাটা রিংয়ের ক্লকওয়াইজ (ঘড়ির কাঁটার দিকে) সবচেয়ে কাছের সার্ভারে রুট করা হয়।
  ৪. কোনো সার্ভার ডাউন হয়ে গেলে শুধুমাত্র ঐ নির্দিষ্ট নোডের ডাটাগুলো পাশের নোডে শিফট করতে হয়। বাকি সিস্টেম অপরিবর্তিত থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ডিস্ট্রিবিউটেড ডাটাবেস (যেমন DynamoDB বা Cassandra) এবং ক্যাশ নোড ডিস্ট্রিবিউশনে ট্রাফিক রুট করার জন্য কনসিস্টেন্ট হ্যাশিং ব্যবহার করা হয়।

### উত্তম অনুশীলন
হ্যাশ রিংয়ে ইউনিফর্ম ডাটা ডিস্ট্রিবিউশন নিশ্চিত করতে প্রতি ফিজিক্যাল সার্ভারের জন্য ১০০+ ভার্চুয়াল নোড ব্যবহার করুন।

### সাধারণ ভুল
ভার্চুয়াল নোড ব্যবহার না করা, যার ফলে হ্যাশ ডিস্ট্রিবিউশন অসমান হয়ে কোনো নির্দিষ্ট নোডের ওপর অতিরিক্ত ট্রাফিক লোড বা হটস্পট তৈরি হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ডিস্ট্রিবিউটেড ডাটাবেস (যেমন DynamoDB বা Cassandra) এবং ক্যাশ নোড ডিস্ট্রিবিউশনে ট্রাফিক রুট করার জন্য কনসিস্টেন্ট হ্যাশিং ব্যবহার করা হয়।

### উত্তম অনুশীলন
হ্যাশ রিংয়ে ইউনিফর্ম ডাটা ডিস্ট্রিবিউশন নিশ্চিত করতে প্রতি ফিজিক্যাল সার্ভারের জন্য ১০০+ ভার্চুয়াল নোড ব্যবহার করুন।

### সাধারণ ভুল
ভার্চুয়াল নোড ব্যবহার না করা, যার ফলে হ্যাশ ডিস্ট্রিবিউশন অসমান হয়ে কোনো নির্দিষ্ট নোডের ওপর অতিরিক্ত ট্রাফিক লোড বা হটস্পট তৈরি হয়।`
  },
  {
    id: "system-design-19",
    title: "Explain Cache Eviction Policies: LRU, LFU, and FIFO.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Caching","Redis","Algorithms"],
    enAnswer: "Cache eviction policies decide which data to remove when the cache is full. FIFO removes the oldest added data, LRU discards the least recently accessed data, and LFU removes the least frequently used data.",
    bnAnswer: "ক্যাশ এভিকশন পলিসি নির্ধারণ করে ক্যাশ ফুল হয়ে গেলে কোন ডাটাটি আগে ডিলিট করা হবে। FIFO সবচেয়ে পুরাতন ডাটা মুছে ফেলে, LRU সবচেয়ে দীর্ঘ সময় ধরে আন-অ্যাক্সেসড ডাটা মুছে ফেলে এবং LFU সবচেয়ে কম ব্যবহৃত ডাটা মুছে ফেলে।",
    enExplanation: `### Explanation
Caches run in high-speed RAM, which has storage limits. When the limit is reached, eviction algorithms free up memory:
1. **FIFO (First In, First Out)**: Evicts the oldest item based on its entry time, ignoring how many times it was read.
2. **LRU (Least Recently Used)**: Tracks the time of access. Evicts the item that has not been read/written for the longest time. (Highly effective for temporal locality workloads).
3. **LFU (Least Frequently Used)**: Tracks a counter of accesses. Evicts the item with the lowest read count. (Best for items that have stable, long-term popularity).

### Real-World Example
Redis configured with \`maxmemory-policy allkeys-lru\` to prevent out-of-memory errors by dropping least-active session keys first.

### Best Practice
For standard web applications, **LRU** is the safest default since users generally access newer items (recent posts, active shopping carts) repeatedly.

### Common Mistakes
Using LFU on transient spike datasets. If an item spikes in popularity for 1 day (e.g. breaking news), it gets a high counter and won't be evicted by LFU even if it is never accessed again. (Use decay factors if using LFU).`,
    bnExplanation: `### ব্যাখ্যা
ক্যাশের মেমোরি (RAM) লিমিটেড থাকে। ক্যাশ ফুল হয়ে গেলে নতুন ডাটা সেভ করার জন্য পুরাতন ডাটা মুছে ফেলার নিয়মকে ক্যাশ এভিকশন পলিসি বলে:
- **FIFO (First In, First Out)**: সবার আগে যে ডাটাটি ক্যাশে ঢুকেছিল তা আগে ডিলিট করে।
- **LRU (Least Recently Used)**: যে ডাটাটি সবচেয়ে বেশি সময় ধরে ইউজার রিড বা রাইট করেনি তা ডিলিট করে।
- **LFU (Least Frequently Used)**: মোট ব্যবহারের কাউন্ট ট্র্যাক করে এবং সবচেয়ে কম ব্যবহার হওয়া ডাটা ডিলিট করে।

### বাস্তব-ভিত্তিক উদাহরণ
Redis-এ \`maxmemory-policy allkeys-lru\` সেট করা, যাতে মেমোরি ফুল হলে সবচেয়ে কম ব্যবহৃত সেশন ডাটা স্বয়ংক্রিয়ভাবে মুছে যায়।

### উত্তম অনুশীলন
সাধারণ ওয়েব অ্যাপ্লিকেশনের জন্য **LRU** পলিসি ব্যবহার করুন, কারণ ইউজার সাধারণত সাম্প্রতিক রিড করা ডাটাই বারবার অ্যাক্সেস করে।

### সাধারণ ভুল
ক্যাশিং সিস্টেমে ক্ষণস্থায়ী বা সাময়িক ট্রাফিক স্পাইক থাকা ডাটাসেটে LFU ব্যবহার করা। কোনো আর্টিকেলের একদিনের হাই ট্রাফিকের কারণে LFU কাউন্টার বেড়ে যায়, যা পরে আর এভিক্ট হতে চায় না।`
  },
  {
    id: "system-design-20",
    title: "Compare Cache-Aside, Read-Through, Write-Through, and Write-Behind (Write-Back) Caching Strategies.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Caching","Architecture Patterns","Databases"],
    enAnswer: "Cache-Aside requires the application to manage cache-miss flow. Read-Through/Write-Through delegate read/write operations to the cache layer. Write-Behind updates cache immediately and syncs with the database asynchronously.",
    bnAnswer: "Cache-Aside-এ অ্যাপ্লিকেশন নিজেই ক্যাশ-মিস লজিক নিয়ন্ত্রণ করে। Read-Through এবং Write-Through ক্যাশ লেয়ারের ওপরেই সমস্ত রিড/রাইট দায়িত্ব অর্পণ করে। Write-Behind ক্যাশ আপডেট করে পরে এসিনক্রোনাসলি ডাটাবেস আপডেট করে।",
    enExplanation: `### Explanation
Different workloads require different caching patterns:
- **Cache-Aside (Lazy Loading)**: Application queries the cache. On miss, it queries the database, updates the cache, and returns data. (Most common, protects against cache failures).
- **Read-Through**: Application queries cache. Cache provider automatically loads data from DB on cache miss.
- **Write-Through**: Application writes to cache. Cache writes to DB synchronously before confirming success. (Ensures consistency, but writes are slow).
- **Write-Behind (Write-Back)**: Application writes to cache, which acknowledges immediately. Cache batch-writes updates to the database asynchronously. (Highest write throughput, but risk of data loss if cache crashes before syncing).

### Real-World Example
- **Cache-Aside**: Standard React + Node + Redis user profile fetch.
- **Write-Behind**: Gaming leaderboard tracking high-speed point increments, syncing to MySQL database every 5 minutes.

### Caching Patterns Table
| Strategy | Read Latency | Write Latency | Data Consistency | DB Write Load |
| :--- | :--- | :--- | :--- | :--- |
| **Cache-Aside** | Low (on hit) | High (direct DB) | Eventual | High |
| **Write-Through** | Low | High (DB sync) | Strong | High |
| **Write-Behind** | Low | Low | Weak | Low (Batched) |
\`\`\`

### Best Practice
Use Cache-Aside for read-heavy operations to prevent cache failures from breaking the app. Set appropriate TTLs to maintain cache freshness.

### Common Mistakes
Using Write-Back (Write-Behind) without a persistent fallback database queue, leading to data loss if the cache node crashes before synchronization.

### Best Practice
Use Cache-Aside for read-heavy operations to prevent cache failures from breaking the app. Set appropriate TTLs to maintain cache freshness.

### Common Mistakes
Using Write-Back (Write-Behind) without a persistent fallback database queue, leading to data loss if the cache node crashes before synchronization.`,
    bnExplanation: `### ব্যাখ্যা
ক্যাশিং সিস্টেমকে ডাটাবেসের সাথে সিঙ্ক করার জন্য বিভিন্ন স্ট্র্যাটেজি ব্যবহৃত হয়:
- **Cache-Aside**: অ্যাপ্লিকেশন নিজে ক্যাশ চেক করে। ডাটা না থাকলে ডাটাবেস থেকে রিড করে ক্যাশে লেখে। এটি সবচেয়ে জনপ্রিয় এবং ক্যাশ সার্ভার ডাউন হলেও পুরো সিস্টেম সচল থাকে।
- **Write-Through**: অ্যাপ্লিকেশন ক্যাশে রাইট করার সাথে সাথে ক্যাশ লাইব্রেরি ডাটাবেসেও রাইট নিশ্চিত করে। এটি ডাটার অমিল কমায় তবে রাইট লেটেন্সি বাড়ায়।
- **Write-Behind**: অ্যাপ্লিকেশন ক্যাশে লিখে রেসপন্স পেয়ে যায়। ক্যাশ প্রোভাইডার পরবর্তীতে ব্যাকগ্রাউন্ডে ব্যাচ আকারে ডাটাবেস রাইট করে। এটি অত্যন্ত ফাস্ট কিন্তু ক্যাশ নোড ডাউন হলে ডাটা হারানোর রিস্ক থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক পোস্ট রিড করতে Cache-Aside এবং ইনস্ট্যান্ট গেমের লাইভ স্কোর স্টোর করতে Write-Back ক্যাশিং ব্যবহার করা।

### উত্তম অনুশীলন
রিড-হেভি সার্ভিসের জন্য Cache-Aside স্ট্র্যাটেজি ব্যবহার করুন এবং ডাটাবেস ডাউনের সময় সার্ভিস চালু রাখতে ক্যাশ ফলব্যাক অ্যাক্টিভ রাখুন।

### সাধারণ ভুল
পর্যাপ্ত রিডানড্যান্সি ছাড়া Write-Behind ব্যবহার করা, যার ফলে ক্যাশ সার্ভার ক্রাশ করলে ডাটাবেসে সিঙ্ক না হওয়া ডাটা চিরতরে হারিয়ে যেতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক পোস্ট রিড করতে Cache-Aside এবং ইনস্ট্যান্ট গেমের লাইভ স্কোর স্টোর করতে Write-Back ক্যাশিং ব্যবহার করা।

### উত্তম অনুশীলন
রিড-হেভি সার্ভিসের জন্য Cache-Aside স্ট্র্যাটেজি ব্যবহার করুন এবং ডাটাবেস ডাউনের সময় সার্ভিস চালু রাখতে ক্যাশ ফলব্যাক অ্যাক্টিভ রাখুন।

### সাধারণ ভুল
পর্যাপ্ত রিডানড্যান্সি ছাড়া Write-Behind ব্যবহার করা, যার ফলে ক্যাশ সার্ভার ক্রাশ করলে ডাটাবেসে সিঙ্ক না হওয়া ডাটা চিরতরে হারিয়ে যেতে পারে।`
  },
  {
    id: "system-design-21",
    title: "Compare Message Queues (e.g. RabbitMQ) and Event Streaming Platforms (e.g. Apache Kafka).",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Message Queues","Kafka","System Architecture"],
    enAnswer: "Message Queues distribute messages to consumers and delete them upon acknowledgment. Event Streaming platforms append messages to a persistent partition log, allowing multiple consumers to replay logs.",
    bnAnswer: "মেসেজ কিউ (Message Queue) গ্রাহককে মেসেজ দেওয়ার পর তা কিউ থেকে ডিলিট করে দেয়। ইভেন্ট স্ট্রিমিং প্ল্যাটফর্ম মেসেজগুলোকে রানিং লগ ফাইল আকারে রেখে দেয়, যা একাধিক গ্রাহক পুনরায় রিড বা রিপ্লে করতে পারে।",
    enExplanation: `### Explanation
- **Message Queues (e.g. RabbitMQ, ActiveMQ)**:
  - Smart broker, dumb consumer model.
  - Deletes messages as soon as a consumer acknowledges consumption.
  - Good for task distribution, simple worker queues, and complex routing requirements.
- **Event Streaming (e.g. Apache Kafka, AWS Kinesis)**:
  - Dumb broker, smart consumer model (consumers track their own offsets/cursors).
  - Messages are persisted in a log for a retention window (e.g. 7 days) and can be replayed.
  - Excellent for real-time analytics, event sourcing, log aggregation, and pub-sub patterns with high throughput.

### Real-World Example
- **RabbitMQ**: An order processing system sending checkout tasks to background invoice-generator workers.
- **Kafka**: Uber tracking real-time GPS coordinates of all drivers to compute surge pricing and update maps.

### Best Practice
Use Message Queues for transactional task processing where tasks are processed exactly once and deleted. Use Event Streaming for event-driven microservices that need to replay data history or broadcast events to multiple services.

### Log Architecture Comparison
\`\`\`
RabbitMQ (Queue):
[Producer] ---> [ Exchange ] ---> [ Queue (Message deleted after pop) ] ---> [Consumer]

Kafka (Log Partition):
[Producer] ---> [ Log: Msg1 | Msg2 | Msg3 | Msg4 ] 
                           ^ Consumer A Offset
                                        ^ Consumer B Offset
\`\`\`

### Common Mistakes
Using a Message Queue like RabbitMQ for high-volume telemetry streaming, which degrades performance because the broker is overloaded by deleting messages constantly.

### Common Mistakes
Using a Message Queue like RabbitMQ for high-volume telemetry streaming, which degrades performance because the broker is overloaded by deleting messages constantly.`,
    bnExplanation: `### ব্যাখ্যা
- **মেসেজ কিউ (যেমন, RabbitMQ)**: এটি মেসেজ রিসিভ করে এবং কনজিউমার প্রসেস করার পর নিশ্চিত করলে তা ডিলিট করে দেয়। এটি নির্দিষ্ট ব্যাকগ্রাউন্ড জব প্রসেস করার জন্য পারফেক্ট।
- **ইভেন্ট স্ট্রিমিং (যেমন, Apache Kafka)**: এটি মেসেজগুলোকে রিং বা অ্যাপেন্ড-অনলি ফাইলে সেভ করে রাখে। একই ডাটা একের অধিক আলাদা আলাদা টিম বা সার্ভিস নিজের সুবিধামতো সময়ে রিপ্লে করতে পারে। এটি অত্যন্ত হাই-থ্রুপুট এবং অ্যানালিটিক্স ডাটার জন্য সেরা।

### বাস্তব-ভিত্তিক উদাহরণ
- **RabbitMQ**: পেমেন্ট সফল হওয়ার পর ইনভয়েস জেনারেট করার জন্য নোটিফিকেশন সার্ভিসে একটি মেসেজ পাঠানো।
- **Kafka**: উবারের রিয়েল-টাইম রাইডার লোকেশন ডাটা যা একই সাথে ম্যাপ সার্ভিস, সিকিউরিটি সার্ভিস এবং ড্রাইভার ম্যাচিং সার্ভিসে স্ট্রিম হয়।

### উত্তম অনুশীলন
টাস্ক ডিস্ট্রিবিউশন ও জব কিউয়ের জন্য RabbitMQ এবং রিয়েল-টাইম বিগ ডাটা অ্যানালিটিক্স বা ইভেন্ট স্ট্রিমের জন্য Kafka ব্যবহার করুন।

### সাধারণ ভুল
অতিরিক্ত ভলিউম অ্যানালিটিক্স ডাটা বা ইভেন্ট স্ট্রিমিংয়ের জন্য RabbitMQ ব্যবহার করা, যা কিউ ম্যানেজমেন্টকে ধীরগতির করে ফেলে।

### উত্তম অনুশীলন
টাস্ক ডিস্ট্রিবিউশন ও জব কিউয়ের জন্য RabbitMQ এবং রিয়েল-টাইম বিগ ডাটা অ্যানালিটিক্স বা ইভেন্ট স্ট্রিমের জন্য Kafka ব্যবহার করুন।

### সাধারণ ভুল
অতিরিক্ত ভলিউম অ্যানালিটিক্স ডাটা বা ইভেন্ট স্ট্রিমিংয়ের জন্য RabbitMQ ব্যবহার করা, যা কিউ ম্যানেজমেন্টকে ধীরগতির করে ফেলে।`
  },
  {
    id: "system-design-22",
    title: "Explain Rate Limiting Algorithms: Token Bucket vs. Leaky Bucket.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Rate Limiting","Algorithms","Security"],
    enAnswer: "The Token Bucket algorithm accumulates tokens up to a capacity and allows bursts of traffic by consuming tokens. The Leaky Bucket algorithm processes requests at a constant, steady rate through a FIFO queue.",
    bnAnswer: "টোকেন বাকেট (Token Bucket) টোকেন জমা করে ট্রাফিকের তীব্র চাপ (Bursts) অনুমতি দেয়। লিকি বাকেট (Leaky Bucket) একটি ফিক্সড কিউয়ের মাধ্যমে সব রিকোয়েস্টকে সমান ও ধীর গতিতে প্রসেস করে।",
    enExplanation: `### Explanation
- **Token Bucket**:
  - A bucket has a maximum token capacity. Tokens are added at a constant rate.
  - Each request consumes a token. If the bucket is empty, the request is rejected.
  - **Advantage**: Handles bursts of traffic easily (e.g., if a user sends 10 requests instantly but has 10 tokens, all go through).
- **Leaky Bucket (Queue-based)**:
  - Requests enter a queue. Requests are processed at a constant leak rate.
  - If the queue overflows, new requests are rejected.
  - **Advantage**: Smooths out traffic spikes, guaranteeing a stable load on backend servers.

### Real-World Example
- **Token Bucket**: API clients fetching search listings can refresh rapidly in short intervals but are limited long-term.
- **Leaky Bucket**: Payment gateway integrations where server cannot handle traffic bursts and must queue writes.

### Rate Limiting Comparison
| Algorithm | Burst Traffic | Implementation | Memory Overhead |
| :--- | :--- | :--- | :--- |
| **Token Bucket** | Allowed | Low (Stores timestamp and token count) | Low |
| **Leaky Bucket** | Smoothed Out | Medium (Requires a physical FIFO queue) | High (Queue size dependent) |
\`\`\`

### Best Practice
Implement Token Bucket when you want to allow small, controlled bursts of API traffic. Use Leaky Bucket when you need a smooth, constant request rate.

### Common Mistakes
Setting rate limiting values without analyzing network latency, which can result in false-positive blocks for legitimate API users.

### Best Practice
Implement Token Bucket when you want to allow small, controlled bursts of API traffic. Use Leaky Bucket when you need a smooth, constant request rate.

### Common Mistakes
Setting rate limiting values without analyzing network latency, which can result in false-positive blocks for legitimate API users.`,
    bnExplanation: `### ব্যাখ্যা
- **টোকেন বাকেট (Token Bucket)**: একটি বাকেটে টোকেন জমা হতে থাকে। রিকোয়েস্ট আসলে একটি করে টোকেন কমে। বাকেটে টোকেন থাকলে একসাথে অনেকগুলো রিকোয়েস্ট (Burst Traffic) প্রসেস করা যায়।
- **লিকি বাকেট (Leaky Bucket)**: এটি বাকেটের নিচে ছোট ছিদ্রের মতো কাজ করে। ওপর দিয়ে ট্রাফিক ঢাললেও নিচ দিয়ে ফিক্সড রেটে ফোটা ফোটা পানি (রিকোয়েস্ট) বের হয়। এটি সার্ভারের ওপর হঠাৎ আসা প্রেশার একদম সমান বা স্মুথ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট প্রসেস করার ক্ষেত্রে লিকি বাকেট ব্যবহার করা এবং সার্চ এপিআইয়ের ক্ষেত্রে টোকেন বাকেট রেট লিমিটিং ব্যবহার করা।

### উত্তম অনুশীলন
হঠাৎ আসা অতিরিক্ত ট্রাফিক (Burst Traffic) হ্যান্ডেল করার জন্য টোকেন বাকেট এবং স্মুথ ট্রাফিকের জন্য লিকি বাকেট ব্যবহার করুন।

### সাধারণ ভুল
অতিরিক্ত রিকোয়েস্ট বাফার করার সুবিধা ছাড়া পেমেন্ট এপিআইতে টোকেন বাকেট ব্যবহার করা, যা ট্রাফিক স্পাইকে পেমেন্ট প্রসেসিং ব্যাহত করে।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট প্রসেস করার ক্ষেত্রে লিকি বাকেট ব্যবহার করা এবং সার্চ এপিআইয়ের ক্ষেত্রে টোকেন বাকেট রেট লিমিটিং ব্যবহার করা।

### উত্তম অনুশীলন
হঠাৎ আসা অতিরিক্ত ট্রাফিক (Burst Traffic) হ্যান্ডেল করার জন্য টোকেন বাকেট এবং স্মুথ ট্রাফিকের জন্য লিকি বাকেট ব্যবহার করুন।

### সাধারণ ভুল
অতিরিক্ত রিকোয়েস্ট বাফার করার সুবিধা ছাড়া পেমেন্ট এপিআইতে টোকেন বাকেট ব্যবহার করা, যা ট্রাফিক স্পাইকে পেমেন্ট প্রসেসিং ব্যাহত করে।`
  },
  {
    id: "system-design-23",
    title: "What is Service Discovery, and how do Client-side vs. Server-side Service Discovery differ?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Service Discovery","Microservices","Networking"],
    enAnswer: "Service Discovery dynamically tracks the IP addresses of changing microservice instances. Client-side queries the registry directly to choose an IP, while Server-side routes requests to a load balancer which queries the registry.",
    bnAnswer: "সার্ভিস ডিসকভারি ডাইনামিকভাবে পরিবর্তনশীল মাইক্রোসার্ভিস নোডের আইপি ট্র্যাক করে। ক্লায়েন্ট-সাইড ডিসকভারিতে ক্লায়েন্ট সরাসরি রেজিস্ট্রি কুয়েরি করে আইপি বেছে নেয়, আর সার্ভার-সাইড ডিসকভারিতে লোড ব্যালেন্সার হয়ে রুট হয়।",
    enExplanation: `### Explanation
In cloud environments, containers/pods scale up, down, or crash, dynamically changing their IP addresses. Service Discovery uses a Service Registry (e.g., Consul, Eureka) to track active node IPs.
- **Client-Side Discovery**:
  - The client queries the Service Registry to get available service IPs.
  - The client runs its load balancing algorithm (e.g., Round Robin) to select an IP and directly calls the service.
  - **Pros**: Fewer network hops. **Cons**: Client code must be language-specific to integrate registry SDKs.
- **Server-Side Discovery**:
  - The client calls a Load Balancer / API Gateway.
  - The Load Balancer queries the Service Registry, gets the active IPs, and routes the request.
  - **Pros**: Client code is completely decoupled from the registry. **Cons**: Extra network hop through the load balancer.

### Real-World Example
- **Client-Side**: Netflix Ribbon/Eureka in a Java Spring Boot microservices cluster.
- **Server-Side**: AWS Application Load Balancer or Kubernetes CoreDNS routing traffic inside pods.

### Discovery Flows
\`\`\`
Client-Side:
[Client] ---> Queries Registry ---> [Service Registry]
[Client] (Picks Server 2 IP) ---> [Service Instance 2]

Server-Side:
[Client] ---> [Load Balancer] ---> Queries Registry ---> [Service Registry]
                   |
                   v
        [Service Instance 2]
\`\`\`

### Best Practice
Use Server-side Discovery when you want to simplify client applications and keep them decoupled from registry protocols. Use Client-side Discovery when you want to eliminate the load balancer latency.

### Common Mistakes
Hardcoding microservice IP addresses in configuration files instead of using a dynamic Service Registry, leading to failure when nodes scale.

### Best Practice
Use Server-side Discovery when you want to simplify client applications and keep them decoupled from registry protocols. Use Client-side Discovery when you want to eliminate the load balancer latency.

### Common Mistakes
Hardcoding microservice IP addresses in configuration files instead of using a dynamic Service Registry, leading to failure when nodes scale.`,
    bnExplanation: `### ব্যাখ্যা
মাইক্রোসার্ভিস আর্কিটেকচারে সার্ভার নোডগুলো অনবরত অন/অফ বা আইপি পরিবর্তন করে। সার্ভিস ডিসকভারি (যেমন, Eureka বা Consul) এই পরিবর্তনশীল আইপিগুলোর অটোমেটিক ডিরেক্টরি মেইনটেইন করে।
- **ক্লায়েন্ট-সাইড ডিসকভারি**: ক্লায়েন্ট সার্ভিস ডিরেক্টরি থেকে আইপি লিস্ট নেয় এবং নিজে ডিসিশন নিয়ে সরাসরি সার্ভিস নোডে হিট করে। এতে লোড ব্যালেন্সারের বাড়তি লেটেন্সি থাকে না।
- **সার্ভার-সাইড ডিসকভারি**: ক্লায়েন্ট একটি সেন্ট্রাল লোড ব্যালেন্সারকে রিকোয়েস্ট পাঠায়। লোড ব্যালেন্সার নিজে ডিরেক্টরি চেক করে ট্রাফিকটি রুট করে দেয়। এটি ক্লায়েন্টকে ডিরেক্টরি কোড লেখার ঝামেলা থেকে মুক্ত রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসের ইন্টারনাল সার্ভিস ডিএনএস (Server-side Discovery) এবং নেটফ্লিক্স ইউরিকার সাথে স্প্রিং ক্লাউড (Client-side Discovery) ব্যবহার।

### উত্তম অনুশীলন
মাইক্রোসার্ভিসের জটিলতা কমাতে এবং কোড ডিকাপলড রাখতে সার্ভার-সাইড ডিসকভারি ব্যবহার করুন।

### সাধারণ ভুল
কনফিগ ফাইলে মাইক্রোসার্ভিসের আইপি এড্রেস হার্ডকোড করে রাখা, যার ফলে নোডগুলো রিস্টার্ট বা রি-স্কেল হলে কানেকশন এরর দেখা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসের ইন্টারনাল সার্ভিস ডিএনএস (Server-side Discovery) এবং নেটফ্লিক্স ইউরিকার সাথে স্প্রিং ক্লাউড (Client-side Discovery) ব্যবহার।

### উত্তম অনুশীলন
মাইক্রোসার্ভিসের জটিলতা কমাতে এবং কোড ডিকাপলড রাখতে সার্ভার-সাইড ডিসকভারি ব্যবহার করুন।

### সাধারণ ভুল
কনফিগ ফাইলে মাইক্রোসার্ভিসের আইপি এড্রেস হার্ডকোড করে রাখা, যার ফলে নোডগুলো রিস্টার্ট বা রি-স্কেল হলে কানেকশন এরর দেখা দেয়।`
  },
  {
    id: "system-design-24",
    title: "Explain the Circuit Breaker Pattern and its states in microservices.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Fault Tolerance","Microservices","Resilience"],
    enAnswer: "The Circuit Breaker pattern prevents cascading failures by blocking calls to failing services. Its states are Closed (requests pass), Open (requests fail instantly), and Half-Open (test requests sent to check recovery).",
    bnAnswer: "সার্কিট ব্রেকার প্যাটার্ন ব্যর্থ সার্ভিসে কল ব্লক করে ক্যাসকেডিং ফেইলিউর রোধ করে। এর স্টেটগুলো হলো: Closed (স্বাভাবিক প্রবাহ), Open (তাত্ক্ষণিক ফেইলিউর) এবং Half-Open (রিকভারি চেক করার জন্য পরীক্ষামূলক রিকোয়েস্ট)।",
    enExplanation: `### Explanation
In microservices, if Service A calls Service B, and Service B is down, Service A's threads will block waiting for timeouts. Under high traffic, Service A runs out of resources, causing a cascading failure across the system.
The Circuit Breaker wraps the network call and monitors failure rates.

### The Three States:
1. **Closed**: Normal state. All requests flow through to the target service. If failure rate exceeds a threshold (e.g. 50% failures), the circuit trips to **Open**.
2. **Open**: Requests are blocked immediately. The circuit breaker returns a fallback response or error without calling the target service, giving it time to recover. After a timeout period, it transitions to **Half-Open**.
3. **Half-Open**: Allows a limited number of test requests to pass. If they succeed, the circuit closes (normal operation). If they fail, it returns to **Open**.

### Real-World Example
An e-commerce gateway. If the recommendation service crashes, the Gateway's circuit breaker trips to **Open** and displays generic products instead of waiting for connection timeouts.

### Circuit Breaker States Diagram
\`\`\`
    +-----------------------------------------+
    |                                         |
    v                                         | (Failure threshold met)
[ Closed ] (Normal Flow) -------------------> [ Open ] (Fail Fast)
    ^                                         |
    |                                         | (Timeout duration passes)
    |                                         v
    +------------------------------------ [ Half-Open ] (Test Requests)
          (All test requests succeed)
\`\`\`

### Best Practice
Configure proper timeout thresholds and fallback responses. Do not let threads block indefinitely waiting for a degraded service.

### Common Mistakes
Setting the failure threshold too low, causing the circuit to trip to Open during minor network spikes that resolve quickly.

### Best Practice
Configure proper timeout thresholds and fallback responses. Do not let threads block indefinitely waiting for a degraded service.

### Common Mistakes
Setting the failure threshold too low, causing the circuit to trip to Open during minor network spikes that resolve quickly.`,
    bnExplanation: `### ব্যাখ্যা
একটি সার্ভিস যখন ডাউন থাকে, তখন অন্যান্য সার্ভিস তাকে বারবার কল করতে গিয়ে নিজেদের থ্রেড ব্লক করে ফেলে এবং পুরো সিস্টেম ডাউন হয়ে যায়। সার্কিট ব্রেকার এই ধরনের ক্যাসকেডিং ফেইলিউর (Cascading Failure) আটকায়।
- **স্টেটসমূহ**:
  ১. **ক্লোজড (Closed)**: সিস্টেম স্বাভাবিকভাবে কাজ করছে। রিকোয়েস্ট ঠিকমতো যাচ্ছে। নির্দিষ্ট সীমার বেশি রিকোয়েস্ট ফেইল করলে সার্কিট ট্রিপ করে **Open** হয়।
  ২. **ওপেন (Open)**: সার্ভারে রিকোয়েস্ট না পাঠিয়ে সরাসরি ফেইল দেখায়। এর ফলে ডাউন থাকা সার্ভিসটি রিকভার করার সময় পায়।
  ৩. **হাফ-ওপেন (Half-Open)**: কিছু টেস্ট রিকোয়েস্ট পাঠিয়ে চেক করে সার্ভিসটি রিকভার হয়েছে কিনা। সাকসেসফুল হলে সার্কিট আবার **Closed** হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
অর্ডার প্লেসিং পেজে পেমেন্ট গেটওয়ে রেসপন্স করতে দেরি করলে সার্কিট ট্রিপ করে এবং ইউজারকে 'পেমেন্ট গেটওয়ে ডাউন, পরে চেষ্টা করুন' ফলব্যাক মেসেজ দেখায়।

### উত্তম অনুশীলন
সার্কিট ব্রেকারের ফেইলর থ্রেশহোল্ড খুব বেশি টাইট না রেখে ৫০% রাখুন এবং উপযুক্ত ফলব্যাক মেথড ও রেসপন্স ডিজাইন করুন।

### সাধারণ ভুল
সার্কিট ব্রেকার সেট করলেও কোনো ফলব্যাক মেকানিজম বা এরর মেসেজ ডিজাইন না করা, যার ফলে কাস্টমার ফাঁকা ইউআই স্ক্রিন দেখতে পায়।

### বাস্তব-ভিত্তিক উদাহরণ
অর্ডার প্লেসিং পেজে পেমেন্ট গেটওয়ে রেসপন্স করতে দেরি করলে সার্কিট ট্রিপ করে এবং ইউজারকে 'পেমেন্ট গেটওয়ে ডাউন, পরে চেষ্টা করুন' ফলব্যাক মেসেজ দেখায়।

### উত্তম অনুশীলন
সার্কিট ব্রেকারের ফেইলর থ্রেশহোল্ড খুব বেশি টাইট না রেখে ৫০% রাখুন এবং উপযুক্ত ফলব্যাক মেথড ও রেসপন্স ডিজাইন করুন।

### সাধারণ ভুল
সার্কিট ব্রেকার সেট করলেও কোনো ফলব্যাক মেকানিজম বা এরর মেসেজ ডিজাইন না করা, যার ফলে কাস্টমার ফাঁকা ইউআই স্ক্রিন দেখতে পায়।`
  },
  {
    id: "system-design-25",
    title: "Compare WebSockets, Server-Sent Events (SSE), and HTTP Long Polling.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["WebSockets","SSE","Communication Protocols"],
    enAnswer: "WebSockets offer full-duplex TCP communication. SSE provides client-receive only server push over HTTP. Long polling holds HTTP requests open until new data is ready.",
    bnAnswer: "ওয়েবসকেট (WebSockets) দ্বিমুখী (Bi-directional) রিয়েল-টাইম টিসিপি যোগাযোগ দেয়। এসএসই (SSE) এইচটিটিপির মাধ্যমে শুধুমাত্র সার্ভার-টু-ক্লায়েন্ট পুশ দেয়। লং পোলিং নতুন ডাটার জন্য এইচটিটিপি রিকোয়েস্ট ঝুলিয়ে রাখে।",
    enExplanation: `### Explanation
- **HTTP Long Polling**: The client requests data. The server holds the connection open until there is new data. Once sent, the client immediately opens a new request. (High HTTP overhead, poor scalability).
- **Server-Sent Events (SSE)**: A persistent, unidirectional (server to client) connection over standard HTTP. Best for real-time dashboards, news feeds, or status updates where the client doesn't need to push continuous updates back to the server.
- **WebSockets**: A persistent, bidirectional (full-duplex) connection over a single TCP socket. Essential for high-frequency interactive applications.

### Real-World Example
- **Long Polling**: Legacy chat widgets or notification alerts.
- **SSE**: Real-time stock price tickers, crypto dashboards, or Twitter notifications.
- **WebSockets**: Multiplayer games (e.g. Agar.io), collaborative drawing apps (Figma), or live chat rooms.

### Protocol Trade-offs
| Feature | Long Polling | SSE | WebSockets |
| :--- | :--- | :--- | :--- |
| **Direction** | Client-Pull | Server-Push (Unidirectional) | Bidirectional |
| **Protocol** | Standard HTTP | Standard HTTP | WebSocket Protocol (upgrade from HTTP) |
| **Connection Overhead**| High | Low | Low |
| **Proxy Compatibility**| High | High | Can be blocked by strict enterprise proxies |
\`\`\`

### Best Practice
Choose SSE for unidirectional server-to-client updates like dashboards or news feeds. Use WebSockets only when true bidirectional communication is required.

### Common Mistakes
Using WebSockets for a dashboard application where data only flows from server to client, unnecessarily consuming server connections.

### Best Practice
Choose SSE for unidirectional server-to-client updates like dashboards or news feeds. Use WebSockets only when true bidirectional communication is required.

### Common Mistakes
Using WebSockets for a dashboard application where data only flows from server to client, unnecessarily consuming server connections.`,
    bnExplanation: `### ব্যাখ্যা
রিয়েল-টাইম ডেটা আদান-প্রদানের জন্য প্রধান তিনটি প্রোটোকল:
- **HTTP Long Polling**: ক্লায়েন্ট সার্ভারে ডাটা চায়। ডাটা না থাকলে সার্ভার কানেকশন ঝুলিয়ে রাখে এবং ডাটা আসার সাথে সাথে রেসপন্স দিয়ে কানেকশন কেটে দেয়। ক্লায়েন্ট আবার নতুন রিকোয়েস্ট পাঠায়।
- **Server-Sent Events (SSE)**: এটি একমুখী রিয়েল-টাইম কানেকশন। শুধুমাত্র সার্ভার ক্লায়েন্টকে অবিরাম ডাটা পুশ করতে পারে। এটি লাইভ স্কোরবোর্ড বা স্টক এক্সচেঞ্জের ডাটা ব্রডকাস্ট করতে দারুণ কাজ করে।
- **WebSockets**: এটি দ্বিমুখী (Bidirectional) কানেকশন। ক্লায়েন্ট এবং সার্ভার একই সাথে রিয়েল-টাইম ডাটা আদান-প্রদান করতে পারে (যেমন লাইভ গেম বা রিয়েল-টাইম চ্যাট)।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটার নোটিফিকেশন পুশ করতে SSE এবং মেসেঞ্জার বা পাবজি গেমে লাইভ লোকেশন আদান-প্রদান করতে WebSockets প্রোটোকল ব্যবহার করা।

### উত্তম অনুশীলন
একমুখী লাইভ আপডেটের (যেমন লাইভ স্কোর বা স্টক মার্কেট) জন্য SSE এবং দ্বিমুখী রীয়ল-টাইম চ্যাটের জন্য WebSockets ব্যবহার করুন।

### সাধারণ ভুল
শুধুমাত্র সার্ভার থেকে ক্লায়েন্টে ডাটা আসার ক্ষেত্রে WebSockets ব্যবহার করা, যা অযথা সার্ভারে হাজার হাজার কানেকশন হোল্ড করে রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটার নোটিফিকেশন পুশ করতে SSE এবং মেসেঞ্জার বা পাবজি গেমে লাইভ লোকেশন আদান-প্রদান করতে WebSockets প্রোটোকল ব্যবহার করা।

### উত্তম অনুশীলন
একমুখী লাইভ আপডেটের (যেমন লাইভ স্কোর বা স্টক মার্কেট) জন্য SSE এবং দ্বিমুখী রীয়ল-টাইম চ্যাটের জন্য WebSockets ব্যবহার করুন।

### সাধারণ ভুল
শুধুমাত্র সার্ভার থেকে ক্লায়েন্টে ডাটা আসার ক্ষেত্রে WebSockets ব্যবহার করা, যা অযথা সার্ভারে হাজার হাজার কানেকশন হোল্ড করে রাখে।`
  },
  {
    id: "system-design-26",
    title: "Explain Database Partitioning: Range, Hash, and Directory-Based Partitioning.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Databases","Partitioning","System Architecture"],
    enAnswer: "Partitioning divides a database table into segments. Range partitioning groups data by value ranges, Hash partitioning applies a hash function on keys, and Directory partitioning uses a lookup table.",
    bnAnswer: "পার্টিশনিং ডাটাবেস টেবিলকে বিভিন্ন খণ্ডে বিভক্ত করে। রেঞ্জ পার্টিশনিং নির্দিষ্ট সীমার ভিত্তিতে, হ্যাশ পার্টিশনিং হ্যাশ ফাংশন প্রয়োগ করে এবং ডিরেক্টরি পার্টিশনিং একটি লুপ-আপ টেবিল ব্যবহার করে ডাটা বণ্টন করে।",
    enExplanation: `### Explanation
Partitioning divides tables into logical parts to speed up queries by limiting search scope (partition pruning):
1. **Range Partitioning**: Maps rows to partitions based on a range of values (e.g., partitioning a \`sales\` table by date: \`2025-Jan\`, \`2025-Feb\`).
2. **Hash Partitioning**: Applies a hash function to a column (e.g., \`Hash(user_id) % 4\`) to distribute rows evenly across a fixed number of partitions. Good for avoiding hotspots.
3. **Directory-Based Partitioning**: Uses a central lookup directory table that stores the mapping of keys to partition IDs. Highly flexible, but query lookup adds latency.

### Real-World Example
A financial app partitioning transaction tables by \`transaction_date\` (Range) so queries searching for last week's transactions don't scan years of history.

### Best Practice
Choose **Range Partitioning** for time-series data or logs. Choose **Hash Partitioning** when you want uniform data distribution and do not perform range queries (e.g. \`WHERE age BETWEEN 20 AND 30\` is inefficient on Hash partitions).

### Common Mistakes
Over-partitioning tables too early, which creates huge overhead for the database query planner and degrades performance.`,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস পার্টিশনিং হলো একটি বিশাল টেবিলকে লজিক্যালি আলাদা আলাদা অংশে বিভক্ত করা:
- **Range Partitioning**: নির্দিষ্ট রেঞ্জের ওপর ভিত্তি করে ডাটা ভাগ করা (যেমন, জানুয়ারি, ফেব্রুয়ারি মাসের বিক্রয় ডাটা)।
- **Hash Partitioning**: হ্যাশ ফাংশন ব্যবহার করে ডাটা নোডগুলোতে ছড়িয়ে দেওয়া (যেমন, \`user_id % 4\` দিয়ে ৪টি পার্টিশনে ভাগ করা)।
- **Directory-Based**: একটি সেন্ট্রাল লুকআপ টেবিল থাকে যা কোন ডাটা কোন নোডে আছে তার ম্যাপ ডিরেক্টরি হিসেবে কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্যাংকিং অ্যাপ্লিকেশনে ট্রানজেকশন টেবিলকে \`transaction_date\` দিয়ে Range Partitioning করা, যাতে ১ বছরের পুরোনো ডাটা সার্চ করতে পুরো ১০ বছরের ডাটা স্ক্যান করতে না হয়।

### উত্তম অনুশীলন
টাইম-সিরিজ ডাটার ক্ষেত্রে Range Partitioning এবং ডাটার সুষম বণ্টন নিশ্চিত করতে ও হটস্পট এড়াতে Hash Partitioning ব্যবহার করুন।

### সাধারণ ভুল
অতিরিক্ত পার্টিশন তৈরি করা, যা ডাটাবেস কুয়েরির পারফরম্যান্স বাড়ানোর বদলে কুয়েরি প্ল্যানারের ওভারহেড বাড়িয়ে সিস্টেমকে ধীরগতির করে ফেলে।`
  },
  {
    id: "system-design-27",
    title: "What is a Distributed Lock, and how does Redis Redlock implement it?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Distributed Systems","Caching","Redis","Concurrency"],
    enAnswer: "A Distributed Lock prevents concurrent processes across different servers from modifying a shared resource. Redis Redlock acquires a lock by setting a unique key with a TTL across a majority of independent Redis nodes.",
    bnAnswer: "ডিস্ট্রিবিউটেড লক একাধিক সার্ভারে চলা কনকারেন্ট প্রসেসগুলোকে একই সময়ে শেয়ার্ড রিসোর্স পরিবর্তন করতে বাধা দেয়। Redis Redlock অধিকাংশ নোডে একটি ইউনিক কী এবং TTL সেট করে লকটি অর্জন করে।",
    enExplanation: `### Explanation
In a distributed system, standard local application locks (e.g., \`synchronized\` in Java, mutexes in Go) only protect threads inside a single server. A distributed lock is needed to serialize access to a shared resource across multiple application instances.

### Redis Redlock Algorithm:
1. **Acquire Lock**: The client attempts to set a unique key with a TTL on \$N\$ independent Redis nodes (typically 5) in sequence, using a short timeout.
2. **Majority Consensus**: The lock is successfully acquired if the client sets the key on a majority of nodes (e.g., 3 out of 5) before the lock TTL expires.
3. **Release Lock**: To unlock, the client runs a Lua script on all Redis nodes to safely delete the key only if the value matches the client's unique token.

### Real-World Example
An airline booking site. If two users click the last seat at the same second from servers in different countries, a distributed lock ensures only one transaction goes through.

### Best Practice
Always set a safe TTL on the lock to prevent deadlocks if the client holding the lock crashes before releasing it. Avoid distributed locks if eventual consistency or database optimistic locking (\`version\` fields) can resolve the concurrency.

### Code Example (Acquiring lock in Redis)
\`\`\`typescript
// Lua script to release lock safely (matches unique identifier)
const releaseLockScript = \`
  if redis.call("get", KEYS[1]) == ARGV[1] then
    return redis.call("del", KEYS[1])
  else
    return 0
  end
\`;
\`\`\`

### Common Mistakes
Using a distributed lock for long-running batch operations, which leads to lock timeouts, resource leaks, or lock starvation for other processes.

### Common Mistakes
Using a distributed lock for long-running batch operations, which leads to lock timeouts, resource leaks, or lock starvation for other processes.`,
    bnExplanation: `### ব্যাখ্যা
লোকাল মেমোরি লক শুধুমাত্র ১টি সার্ভারে কাজ করে। কিন্তু মাল্টি-সার্ভার ডিস্ট্রিবিউটেড আর্কিটেকচারে একই ফাইল বা ডাটা নিয়ে একাধিক প্রসেস যেন জটলা বা ডেডলক না পাকায়, সেজন্য ডিস্ট্রিবিউটেড লকিং দরকার।
- **Redis Redlock অ্যালগরিদম**:
  ১. ৫টি স্বাধীন Redis নোডে একটি ইউনিক ভ্যালু এবং TTL সহ লকিং কী রাইট করার রিকোয়েস্ট পাঠানো হয়।
  ২. যদি অধিকাংশ নোডে (৩টি নোডে) নির্দিষ্ট সময়ের আগেই সাকসেসফুলি কী সেট করা যায়, তবে ক্লায়েন্ট লক পায়।
  ৩. কাজ শেষ হলে ক্লায়েন্ট সব নোড থেকে কী ডিলিট করে লক রিলিজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাভিয়েশন বুকিং সিস্টেমে কনকারেন্ট সিট বুকিং এড়াতে Redis Redlock ব্যবহার করে ডিস্ট্রিবিউটেড লকিং ইমপ্লিমেন্ট করা।

### উত্তম অনুশীলন
লকের একটি সেফ এবং রিজনাবল টিটিএল (TTL) নির্ধারণ করুন যাতে ক্লায়েন্ট ক্র্যাশ করলেও ডেডলক এড়ানো যায়।

### সাধারণ ভুল
দীর্ঘ সময় ধরে চলা বা ব্যাচ জবের ক্ষেত্রে ডিস্ট্রিবিউটেড লক ধরে রাখা, যার ফলে অন্যান্য নোডগুলোর লক পেতে স্টার্ভেশন ঘটে।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাভিয়েশন বুকিং সিস্টেমে কনকারেন্ট সিট বুকিং এড়াতে Redis Redlock ব্যবহার করে ডিস্ট্রিবিউটেড লকিং ইমপ্লিমেন্ট করা।

### উত্তম অনুশীলন
লকের একটি সেফ এবং রিজনাবল টিটিএল (TTL) নির্ধারণ করুন যাতে ক্লায়েন্ট ক্র্যাশ করলেও ডেডলক এড়ানো যায়।

### সাধারণ ভুল
দীর্ঘ সময় ধরে চলা বা ব্যাচ জবের ক্ষেত্রে ডিস্ট্রিবিউটেড লক ধরে রাখা, যার ফলে অন্যান্য নোডগুলোর লক পেতে স্টার্ভেশন ঘটে।`
  },
  {
    id: "system-design-28",
    title: "Explain Database Isolation Levels and the anomalies they prevent.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Databases","Transactions","ACID"],
    enAnswer: "Isolation levels define how transaction integrity is visible to other concurrent transactions. The four levels are Read Uncommitted, Read Committed, Repeatable Read, and Serializable, preventing anomalies like Dirty Reads.",
    bnAnswer: "আইসোলেশন লেভেল নির্ধারণ করে একটি রানিং ট্রানজেকশন অন্য ট্রানজেকশনের কাছে কতটা দৃশ্যমান হবে। ৪টি প্রধান লেভেল হলো Read Uncommitted, Read Committed, Repeatable Read এবং Serializable।",
    enExplanation: `### Explanation
Under high concurrency, databases must manage data visibility to prevent anomalies:
- **Anomalies**:
  - **Dirty Read**: Transaction A reads data modified by Transaction B that has not been committed yet.
  - **Non-Repeatable Read**: Transaction A reads a row, Transaction B updates it, Transaction A reads it again and gets different data.
  - **Phantom Read**: Transaction A runs a query matching a range, Transaction B inserts new matching rows, Transaction A re-runs the query and gets "phantom" rows.

### The Isolation Levels:
1. **Read Uncommitted**: Lowest level. Permits dirty reads. Max performance.
2. **Read Committed**: Prevents Dirty Reads. A transaction only reads committed data. (PostgreSQL default).
3. **Repeatable Read**: Prevents Dirty and Non-Repeatable Reads. Ensures re-reading data within the same transaction yields identical values.
4. **Serializable**: Highest level. Prevents all anomalies by executing transactions sequentially/concurrently with strict locking. Extreme performance cost.

### Isolation Levels Anomalies Matrix
| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |
| :--- | :--- | :--- | :--- |
| **Read Uncommitted** | Allowed | Allowed | Allowed |
| **Read Committed** | Prevented | Allowed | Allowed |
| **Repeatable Read** | Prevented | Prevented | Allowed (mostly prevented in PG) |
| **Serializable** | Prevented | Prevented | Prevented |
\`\`\`

### Real-World Example
Using PostgreSQL Read Committed default isolation for basic CRUD, and Serializable isolation for credit transfer operations.

### Best Practice
Keep transactions short. Choose Read Committed for high-throughput systems, and only use Serializable for critical financial transaction paths.

### Common Mistakes
Using Serializable isolation level globally, which results in extreme database locking, query timeouts, and severe performance bottlenecks.

### Real-World Example
Using PostgreSQL Read Committed default isolation for basic CRUD, and Serializable isolation for credit transfer operations.

### Best Practice
Keep transactions short. Choose Read Committed for high-throughput systems, and only use Serializable for critical financial transaction paths.

### Common Mistakes
Using Serializable isolation level globally, which results in extreme database locking, query timeouts, and severe performance bottlenecks.`,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেসে একের অধিক ইউজার একই সাথে কাজ করলে একে অপরের ট্রানজেকশনের ডাটা ওভারল্যাপ করা ঠেকাতে আইসোলেশন লেভেল ব্যবহৃত হয়।
- **সমস্যাসমূহ**:
  - **Dirty Read**: অন্য ইউজারের আন-কমিটেড (Uncommitted) কাঁচা ডাটা রিড করা।
  - **Non-Repeatable Read**: একই ট্রানজেকশনের ভেতর একই ডাটা ডাবল রিড করলে মান আলাদা আসা।
  - **Phantom Read**: রেঞ্জ কোয়েরি করার পর নতুন রো অ্যাড হওয়ার কারণে পরবর্তী রিডে ডাটার মোট সংখ্যায় অমিল থাকা।

- **৪টি লেভেল**:
  ১. **Read Uncommitted**: সবচেয়ে ফাস্ট, কিন্তু সিকিউরিটি কম (Dirty Read হতে পারে)।
  ২. **Read Committed**: শুধুমাত্র কমিট হওয়া ডাটা রিড করতে দেয়। (সাধারণত ডিফল্ট থাকে)।
  ৩. **Repeatable Read**: একই ট্রানজেকশনে যতবারই ডাটা রিড করা হোক না কেন ডাটা একই থাকবে।
  ৪. **Serializable**: একদম লকড মেথড। কুয়েরিগুলোকে একের পর এক সিরিয়ালে রান করে। এটি সবচেয়ে সিকিউর কিন্তু পারফরম্যান্স অনেক কমিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং অ্যাকাউন্টের ব্যালেন্স ট্রান্সফারের সময় Serializable আইসোলেশন ব্যবহার করা এবং ই-কমার্স প্রোডাক্ট ভিউয়ের জন্য Read Committed ব্যবহার করা।

### উত্তম অনুশীলন
ট্রানজেকশনগুলো যতটা সম্ভব ছোট রাখুন এবং সাধারণ রিড-রাইটের জন্য Read Committed ও অতি গুরুত্বপূর্ণ ট্রানজেকশনের জন্য Serializable ব্যবহার করুন।

### সাধারণ ভুল
গলোবালি Serializable আইসোলেশন লেভেল সেট করে রাখা, যা ডাটাবেসের কনকারেন্সি শেষ করে দেয় এবং কুয়েরিগুলোর মধ্যে ডেডলক তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং অ্যাকাউন্টের ব্যালেন্স ট্রান্সফারের সময় Serializable আইসোলেশন ব্যবহার করা এবং ই-কমার্স প্রোডাক্ট ভিউয়ের জন্য Read Committed ব্যবহার করা।

### উত্তম অনুশীলন
ট্রানজেকশনগুলো যতটা সম্ভব ছোট রাখুন এবং সাধারণ রিড-রাইটের জন্য Read Committed ও অতি গুরুত্বপূর্ণ ট্রানজেকশনের জন্য Serializable ব্যবহার করুন।

### সাধারণ ভুল
গলোবালি Serializable আইসোলেশন লেভেল সেট করে রাখা, যা ডাটাবেসের কনকারেন্সি শেষ করে দেয় এবং কুয়েরিগুলোর মধ্যে ডেডলক তৈরি করে।`
  },
  {
    id: "system-design-29",
    title: "What is the Saga Pattern, and how does it manage transactions in microservices?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Microservices","Saga Pattern","Transactions","Design Patterns"],
    enAnswer: "The Saga Pattern manages distributed transactions through a sequence of local transactions. Each service updates its database; if a step fails, Saga executes compensating transactions to undo the changes.",
    bnAnswer: "সাগা প্যাটার্ন (Saga Pattern) লোকাল ট্রানজেকশনের একটি সিকোয়েন্সের মাধ্যমে ডিস্ট্রিবিউটেড ট্রানজেকশন পরিচালনা করে। কোনো ধাপ ব্যর্থ হলে এটি রিভার্স বা কম্পেনসেটিং ট্রানজেকশন চালিয়ে পূর্বের কাজ বাতিল করে দেয়।",
    enExplanation: `### Explanation
In microservices, each service has its own database. Standard ACID transactions (like 2PC) block resources across servers, reducing scalability. Saga offers an eventual consistency alternative.
A Saga consists of a series of local transactions:
- **Normal Flow**: Service A commits data -> Service B commits data -> Service C commits data.
- **Rollback (Compensating) Flow**: If Service C fails, Saga triggers compensating transactions: Service B rolls back changes -> Service A rolls back changes.

### Two Orchestration Styles:
1. **Choreography**: Each service performs a local transaction and emits an event. Other services listen and trigger their steps. (Decoupled, but hard to debug/trace).
2. **Orchestration**: A central Coordinator service orchestrates the exact sequence of service calls and rollback calls. (Easier to manage, but coordinator is a single coordinator node).

### Real-World Example
Booking a trip:
1. Orchestrator calls Flight Service (Books flight - Success).
2. Orchestrator calls Hotel Service (Books hotel - Success).
3. Orchestrator calls Payment Service (Fails due to insufficient funds).
4. Orchestrator triggers compensating actions: Cancels hotel booking -> Cancels flight booking.

### Best Practice
Ensure all compensating transactions are **idempotent**, as they might be retried multiple times due to network retries.

### Common Mistakes
Failing to design compensating transactions to be idempotent, which can lead to incomplete rollbacks or duplicate operations.`,
    bnExplanation: `### ব্যাখ্যা
মাইক্রোসার্ভিসে প্রতিটি সার্ভিসের নিজস্ব ডাটাবেস থাকে। ফলে ট্র্যাডিশনাল এসিড (ACID) ট্রানজেকশন কাজ করে না। সাগা (Saga) প্যাটার্ন এর সমাধান দেয়:
- **স্বাভাবিক ফ্লো**: সার্ভিস ক পেমেন্ট নিল -> সার্ভিস খ ইনভেন্টরি কমাল -> সার্ভিস গ শিপিং বুক করল।
- **রোলব্যাক ফ্লো**: যদি সার্ভিস গ শিপিং বুক করতে ব্যর্থ হয়, তবে সাগা রিভার্স বা কম্পেনসেটিং ট্রানজেকশন ট্রিগার করে সার্ভিস খ-এর ইনভেন্টরি আবার বাড়িয়ে দেয় এবং সার্ভিস ক-কে রিফান্ড করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফুড ডেলিভারি অ্যাপে ইউজার অর্ডার করার পর পেমেন্ট সার্ভিস, রেস্টুরেন্ট সার্ভিস এবং ডেলিভারি সার্ভিস একে একে সফল হলে অর্ডার কনফার্ম হয়, অন্যথায় সম্পূর্ণ পেমেন্ট ফেরত দেওয়া হয়।

### উত্তম অনুশীলন
জটিল সাগা পরিচালনার ক্ষেত্রে সেন্ট্রাল অর্কেস্ট্রেটর (Orchestrator Style) ব্যবহার করুন যা স্টেপগুলো মনিটর করতে এবং বাগ ডিবাগ করতে সুবিধা দেয়।

### সাধারণ ভুল
ব্যর্থতার পর রোলব্যাক বা কম্পেনসেটিং ট্রানজেকশন ডিজাইনে ভুল করা, যার ফলে ইউজারের একাউন্ট থেকে টাকা কেটে নেওয়া হলেও তাকে প্রোডাক্ট না দিয়ে সেশন ক্লোজ করা হয়।`
  },
  {
    id: "system-design-30",
    title: "How do you optimize a system for Read-Heavy vs. Write-Heavy workloads?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["System Performance","Databases","Scaling"],
    enAnswer: "Read-heavy workloads are optimized using caching, read replicas, CDNs, and database indexes. Write-heavy workloads are optimized using message queues, write buffering, NoSQL databases, and de-indexing.",
    bnAnswer: "রিড-হেভি সিস্টেমে ক্যাশিং, রিড-রেপ্লিকা, সিডিএন এবং ইনডেক্সিং ব্যবহার করে অপ্টিমাইজ করা হয়। রাইট-হেভি সিস্টেমে মেসেজ কিউ, নোএসকিউএল ডাটাবেস এবং বাফারিং ব্যবহার করা হয়।",
    enExplanation: `### Explanation
Workload profiles dictate system architecture choices:
- **Read-Heavy Workloads (e.g., Blog, Wiki, Catalog)**:
  - Cache aggressively using Redis/Memcached.
  - Deploy Database Read Replicas (Leader-Follower model).
  - Move static assets to CDNs.
  - Build comprehensive Database Indexes.
- **Write-Heavy Workloads (e.g., IoT Sensors, Chat, Logging)**:
  - Use Message Queues (Kafka/RabbitMQ) to buffer writes and protect the database from spiking.
  - Choose Append-Only databases (NoSQL like Cassandra/LSM-Tree engines) which support high write speeds.
  - Reduce database indexes, as indexing slows down write operations.
  - Utilize Write-Back caching (Write data to memory, sync to disk in batches).

### Real-World Example
- **Read-Heavy**: Wikipedia, where millions read articles, but only a few update them.
- **Write-Heavy**: GPS trackers sending geographic coordinates of delivery trucks every 2 seconds.

### Best Practice
Split read and write paths using the **CQRS (Command Query Responsibility Segregation)** pattern to allow scaling the read database cluster independently from the write database instance.

### Common Mistakes
Adding too many indexes on a write-heavy database table, causing write operations to slow down significantly.`,
    bnExplanation: `### ব্যাখ্যা
ওয়ার্কলোডের ওপর ভিত্তি করে সিস্টেম ডিজাইন করতে হয়:
- **Read-Heavy (যেমন উইকিপিডিয়া, ব্লগ)**: এ ক্ষেত্রে ক্যাশিং (Redis/CDN), ডাটাবেস রিড রেপ্লিকা এবং ইনডেক্সিং করে রিড পারফরম্যান্স বাড়ানো হয়।
- **Write-Heavy (যেমন চ্যাট, আইওটি সেন্সর)**: এ ক্ষেত্রে মেসেজ কিউ ব্যবহার করে রিকোয়েস্ট বাফার করা হয়, NoSQL ডাটাবেস (Cassandra) ব্যবহার করা হয় এবং রাইট স্পিড বাড়াতে ইনডেক্স সংখ্যা কমানো হয়।

### বাস্তব-ভিত্তিক উদাহরণ
উইকিপিডিয়া তাদের হোমপেজ আর্টিকেলের রিড পারফরম্যান্স বাড়াতে ক্যাশিং ও CDN ব্যবহার করে। অন্যদিকে উবার তাদের রাইডার লোকেশন ক্রমাগত ট্র্যাকিংয়ের রাইট স্পিড সামলাতে Kafka ও Cassandra ব্যবহার করে।

### উত্তম অনুশীলন
রিড-হেভি সিস্টেমে ডাটাবেসের ওপর চাপ কমাতে শুরুতেই ক্যাশিং লেয়ার যুক্ত করুন। রাইট-হেভি সিস্টেমে ডাটাবেসে সরাসরি রাইট না করে মেসেজ কিউ বা ব্যাকগ্রাউন্ড বাফার ব্যবহার করুন।

### সাধারণ ভুল
রাইট-হেভি সিস্টেমে প্রতিটি টেবিলের কলামে ইনডেক্স ব্যবহার করা, যা রাইট অপারেশনকে অত্যন্ত ধীরগতির করে ফেলে।`
  },
  {
    id: "system-design-31",
    title: "Explain CDN Invalidation Strategies: TTL vs. Active Invalidation.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["CDN","Caching","Performance"],
    enAnswer: "TTL sets an automatic expiration time for cached assets. Active Invalidation forces the CDN to purge or replace specific cached files immediately, usually triggered on new deployments.",
    bnAnswer: "TTL ক্যাশ করা ফাইলের জন্য একটি স্বয়ংক্রিয় মেয়াদ নির্ধারণ করে। একটিভ ইনভ্যালিডেশন (Active Invalidation) সিডিএনকে জোরপূর্বক তাৎক্ষণিকভাবে নির্দিষ্ট ফাইল মুছে ফেলতে বাধ্য করে, যা সাধারণত নতুন বিল্ড ডিপ্লয়ের সময় করা হয়।",
    enExplanation: `### Explanation
Hanging on to old cache assets ruins client UI experience. Invalidating CDN cache is managed in two ways:
1. **TTL-Based (Time-To-Live)**: The edge server retains the file for a set period (e.g. 24 hours). After expiration, it fetches a fresh copy from the origin. (Zero API overhead, but users might see stale assets for up to 24 hours).
2. **Active Invalidation (Purging)**: When a file is updated at the origin, the system calls the CDN API to purge the cached URL (e.g. \`POST /purge/styles.css\`). (Instant updates, but CDNs charge API call costs and purging takes minutes to propagate globally).

### Best Practice
Avoid active purging of static bundles. Use **Cache Busting / Content Hashing** (e.g., \`app.a8df1.js\`). Since the filename changes on every build, the CDN treats it as a new file and fetches it instantly, completely avoiding the need to purge the cache.

### Real-World Example
Updating a blog post and actively calling Cloudflare's purge API to clear the post's cached URL immediately.

### Common Mistakes
Not using cache busting filenames for static bundles, requiring slow manual CDN invalidations on every deployment.`,
    bnExplanation: `### ব্যাখ্যা
সিডিএন (CDN) এজ সার্ভারে পুরাতন বা ব্যাকডেটেড ফাইল জমে থাকা আটকাতে দুটি পদ্ধতি ব্যবহার করা হয়:
- **TTL-Based**: ফাইলগুলো নির্দিষ্ট সময় (যেমন ২৪ ঘণ্টা) পর পর স্বয়ংক্রিয়ভাবে এক্সপায়ার হয়ে যায় এবং নতুন ফাইল রি-ফেচ করে।
- **Active Invalidation (Purging)**: যখনই মেইন সার্ভারে কোনো পরিবর্তন হয়, তখন এপিআই কল করে সিডিএন ক্যাশ ফাইলটি সাথে সাথে ডিলিট করে দেওয়া হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সিএসএস বা জাভাস্ক্রিপ্ট ফাইলের আপডেটের জন্য ফাইলে কন্টেন্ট হ্যাশ (যেমন \`main.a7f8.js\`) ব্যবহার করা, যা ফাইল আপডেট হলে নতুন নামের কারণে সিডিএন বাইপাস করে ইনস্ট্যান্ট লোড হয়।

### উত্তম অনুশীলন
ফাইল আপডেটের জন্য কন্টেন্ট হ্যাশ বা ক্যাশ বাস্টিং (Cache Busting) ব্যবহার করুন, যাতে করে সিডিএন রিকোয়েস্ট পুশ/পার্জ করার খরচ ও ঝামেলা থেকে মুক্তি পাওয়া যায়।

### সাধারণ ভুল
একই নামের স্ট্যাটিক ফাইল বারবার আপডেট করে অ্যাক্টিভ পার্জ এপিআই কল না করা, যার ফলে ইউজার পুরোনো বা আংশিক ভাঙা ওয়েবসাইট রেন্ডার হতে দেখে।`
  },
  {
    id: "system-design-32",
    title: "What is Backpressure, and why is it important in streaming architectures?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Streaming","Reactive Systems","Backpressure"],
    enAnswer: "Backpressure is a flow-control mechanism where a slow consumer signals a fast producer to slow down, preventing the consumer from running out of memory and crashing.",
    bnAnswer: "ব্যাকপ্রেসার (Backpressure) হলো একটি ফ্লো-কন্ট্রোল মেকানিজম যেখানে ধীরগতির কনজিউমার দ্রুতগতির প্রডিউসারকে ডাটা পাঠানোর গতি কমাতে সিগন্যাল দেয়, যাতে কনজিউমার মেমোরি ওভারফ্লো হয়ে ক্রাশ না করে।",
    enExplanation: `### Explanation
In system streaming, if a Producer node generates 10,000 events/sec, but the Consumer node can only process 1,000 events/sec, the consumer's memory buffer starts piling up, leading to an Out-Of-Memory (OOM) crash.
- **Handling Backpressure**:
  1. **Buffer**: Temporarily queue events in memory or disk (e.g., using Kafka).
  2. **Drop**: Discard excess incoming messages if they are low-priority (e.g., real-time video frames).
  3. **Signal (Slow Down)**: The consumer blocks the input TCP socket read, forcing the network buffer to fill up and naturally slowing down the producer's write loop.

### Real-World Example
A log streaming daemon (like FluentBit) routing server logs to Elasticsearch. If Elasticsearch is overloaded, FluentBit pauses log extraction from server files instead of crashing.

### Best Practice
Design event-driven consumer pipelines using reactive streams that support native backpressure propagation (like RxJS, Akka Streams, or Node.js Streams piping).

### Common Mistakes
Using unbounded memory buffers in stream processors, causing the application to crash with Out-Of-Memory (OOM) errors under spike loads.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড ডেটা স্ট্রিমিংয়ে প্রডিউসার (Producer) যদি কনজিউমার (Consumer) এর চেয়ে দ্রুত গতিতে ডাটা পাঠায়, তবে কনজিউমারের র‍্যামে ডাটা জমতে জমতে সিস্টেম ওওএম (Out of Memory) ক্র্যাশ করতে পারে। একে ব্যাকপ্রেসার (Backpressure) হ্যান্ডেলিং বলে:
- **Buffer**: মেসেজগুলো সাময়িকভাবে কাফকা কিউতে জমা রাখা।
- **Drop**: কম গুরুত্বপূর্ণ মেসেজগুলো রিসিভ না করে সরাসরি ডিলিট করা।
- **Control (Slow Down)**: কনজিউমার প্রডিউসারকে সিগন্যাল পাঠিয়ে ডাটা পাঠানোর স্পিড সাময়িকভাবে কমিয়ে দিতে বলে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভার থেকে ইলাস্টিক সার্চে লগ ফাইল পুশ করার সময় ইলাস্টিক সার্চ ওভারলোডেড হয়ে গেলে FluentBit এজেন্ট ফাইল থেকে নতুন লগ রিড করা সাময়িকভাবে পজ করে দেয়।

### উত্তম অনুশীলন
রিয়েল-টাইম বিগ ডাটা স্ট্রিমিংয়ে ব্যাকপ্রেসার ম্যানেজ করতে প্রডিউসার ও কনজিউমারের মাঝে Kafka বা RabbitMQ এর মতো একটি ডিস্ট্রিবিউটেড মেসেজ কিউ বাফার হিসেবে ব্যবহার করুন।

### সাধারণ ভুল
কোনো ব্যাকপ্রেসার প্রোটেকশন ছাড়াই নোড ডট জেএস স্ট্রিম ব্যবহার করা, যার ফলে মেমোরি আনলিমিটেড গ্রো করে এবং পুরো সার্ভার ক্র্যাশ করে।`
  },
  {
    id: "system-design-33",
    title: "Compare Data Warehouses and Data Lakes.",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Big Data","Data Engineering","System Architecture"],
    enAnswer: "A Data Warehouse stores highly structured, processed, and cleaned relational data for business intelligence. A Data Lake stores raw, unstructured, and structured data in its native format for machine learning and data science.",
    bnAnswer: "ডাটা ওয়্যারহাউস (Data Warehouse) বিজনেস অ্যানালিটিক্সের জন্য সুবিন্যস্ত রিলেশনাল ডাটা সেভ করে। ডাটা লেক (Data Lake) বিগ ডাটা অ্যানালিসিসের জন্য র-ডাটা (Raw Data) তার মূল ফরম্যাটে জমা রাখে।",
    enExplanation: `### Explanation
- **Data Warehouse (e.g., Snowflake, Google BigQuery, Amazon Redshift)**:
  - Schema: Schema-on-write (data must be transformed and cleaned before storing).
  - Target Users: Business Analysts, Executives using SQL reporting dashboards.
  - Data Types: Relational tables, transaction logs.
- **Data Lake (e.g., Amazon S3, Hadoop HDFS)**:
  - Schema: Schema-on-read (data is stored raw; queries define the schema during execution).
  - Target Users: Data Scientists, Machine Learning engineers.
  - Data Types: Unstructured logs, images, JSON files, raw csv dumps.

### Best Practice
Implement a **Lakehouse** architecture. Use the cheap Data Lake as the landing zone for all raw application telemetry/logs, and run ETL (Extract, Transform, Load) pipelines to feed clean, structured subsets into the Data Warehouse for business reporting.

### Real-World Example
A company streaming user click logs into Amazon S3 (Data Lake) and running daily ETL jobs to insert aggregated sales numbers into Snowflake (Data Warehouse).

### Common Mistakes
Running direct ad-hoc BI queries on raw unstructured data files in a Data Lake without indexing or schema enforcement, resulting in extremely slow queries.`,
    bnExplanation: `### ব্যাখ্যা
- **Data Warehouse**: এটি অত্যন্ত রিলেশনাল ও ক্লিনড স্ট্রাকচার্ড ডাটা সংরক্ষণ করে (Schema-on-write)। এটি মূলত বিজনেস অ্যানালিস্টদের জন্য তৈরি।
- **Data Lake**: এটি র-ফরম্যাটে (Raw JSON, Images, Logs) ডাটা সেভ করে (Schema-on-read)। এটি মূলত ডাটা সায়েন্টিস্ট ও এমএল ইঞ্জিনিয়ারদের ব্যবহারের জন্য উপযোগী।

### বাস্তব-ভিত্তিক উদাহরণ
গ্রাহকদের কেনাকাটার ট্রানজেকশন হিস্ট্রি ও সেলস গ্রাফ অ্যানালিটিক্সের জন্য Snowflake Data Warehouse ব্যবহার করা এবং সার্ভারের আনফিল্টার্ড র-লগ বা কাঁচা সিসিটিভি ফুটেজ সেভ করতে Amazon S3 Data Lake ব্যবহার করা।

### উত্তম অনুশীলন
ল্যান্ডিং জোন হিসেবে সস্তা ক্লাউড স্টোরেজে Data Lake তৈরি করুন এবং পরবর্তীতে ETL পাইপলাইন দিয়ে ক্লিনড ডাটা Data Warehouse-এ লোড করুন (Lakehouse আর্কিটেকচার)।

### সাধারণ ভুল
সরাসরি ডাটা লেকের আনস্ট্রাকচার্ড ডাটায় কোনো সূচক ছাড়াই ভারী বিজনেস অ্যানালিটিক্স কুয়েরি চালানো, যার ফলে কুয়েরি স্পিড স্লো হয়ে যায় এবং খরচ বৃদ্ধি পায়।`
  },
  {
    id: "system-design-34",
    title: "What is API Idempotency, and how do you design an idempotent POST endpoint?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["API Design","Idempotency","REST API"],
    enAnswer: "API idempotency ensures that making the same request multiple times yields the identical side-effect as a single request. An idempotent POST is designed using a unique client-generated Idempotency Key.",
    bnAnswer: "এপিআই আইডেমপোটেন্সি (API Idempotency) নিশ্চিত করে যে একই রিকোয়েস্ট একাধিকবার পাঠালেও ডাটাবেসে বা সার্ভারে ডাবল ইফেক্ট পড়ে না। এটি বাস্তবায়ন করতে ক্লায়েন্ট-জেনারেটেড Idempotency Key ব্যবহার করা হয়।",
    enExplanation: `### Explanation
If a client submits a payment request, and the request times out due to network latency, the client doesn't know if the payment went through. If they retry, they risk double-charging.
- **How to design an idempotent POST endpoint**:
  1. **Idempotency Key**: The client generates a unique UUID (Idempotency Key) and sends it in the request headers (e.g. \`Idempotency-Key: a83d-9f8d-4f12\`).
  2. **Cache Lookup**: Before processing the transaction, the server checks if this key exists in a fast store (like Redis).
  3. **Already Processed**: If the key exists, the server returns the cached response of the previous transaction immediately, without reprocessing.
  4. **New Transaction**: If the key is new, the server runs the transaction, saves the result in Redis under that key (with a TTL of e.g. 24 hours), and returns the response.

### Real-World Example
Stripe API requiring an \`Idempotency-Key\` header for all charge creation requests.

### Best Practice
Store idempotency keys in Redis with an eviction time (TTL) matching your payment retry windows (e.g., 24-48 hours).

### Common Mistakes
Using client-generated timestamps as idempotency keys, which can collide or be easily duplicated across different clients.`,
    bnExplanation: `### ব্যাখ্যা
এপিআই আইডেমপোটেন্সি (Idempotency) নিশ্চিত করে যে একটি এপিআই একই প্যারামিটার নিয়ে যতবারই কল করা হোক না কেন, ডাটাবেস বা সিস্টেমে তার অ্যাকশন একবারই কার্যকর হবে।
- **ইমপ্লিমেন্টেশন**:
  ১. ক্লায়েন্ট রিকোয়েস্ট হেদারে একটি ইউনিক UUID পাঠায় (Idempotency Key)।
  ২. সার্ভার Redis-এ কীটি চেক করে।
  ৩. কীটি অলরেডি থাকলে প্রসেস না করে আগের সেভ করা রেসপন্স সরাসরি ফেরত পাঠায়।
  ৪. কীটি নতুন হলে ট্রানজেকশনটি প্রসেস করে এবং রেসপন্সটি Redis-এ সেভ করে।

### বাস্তব-ভিত্তিক উদাহরণ
Stripe বা পেমেন্ট গেটওয়েতে রিকোয়েস্ট হেদারে \`Idempotency-Key\` ব্যবহার করা, যাতে দুর্বল ইন্টারনেটের কারণে রিট্রাই করলে কাস্টমারের ক্রেডিট কার্ড থেকে ডাবল পেমেন্ট কেটে না নেওয়া হয়।

### উত্তম অনুশীলন
পেমেন্ট গেটওয়ে, ফান্ড ট্রান্সফার বা অর্ডার ক্রিয়েশন এপিআই-তে সর্বদা \`Idempotency-Key\` বাধ্যতামূলক করুন এবং Redis-এ এটির এক্সপায়ারি টাইম ২৪-৪৮ ঘণ্টা সেট করুন।

### সাধারণ ভুল
পেমেন্ট এপিআই-তে আইডেমপোটেন্সি না রাখা, যার ফলে কাস্টমার পেমেন্ট বাটনে ডাবল ক্লিক করলে ডাবল চার্জ হওয়ার সুযোগ থাকে।`
  },
  {
    id: "system-design-35",
    title: "What is the Gossip Protocol, and how does it manage state in distributed clusters?",
    difficulty: "intermediate",
    category: "system-design",
    tags: ["Consensus","Distributed Systems","Cluster Management"],
    enAnswer: "The Gossip Protocol is a decentralized communication method where nodes periodically exchange status updates with a few randomly selected peers, propagating state changes globally like a rumor.",
    bnAnswer: "গসিপ প্রোটোকল (Gossip Protocol) হলো একটি বিকেন্দ্রীকৃত যোগাযোগ পদ্ধতি যেখানে নোডগুলো পর্যায়ক্রমিকভাবে র্যান্ডম সিলেক্ট করা নোডের সাথে তথ্য আদান-প্রদান করে পুরো ক্লাস্টারে ডাটা ছড়িয়ে দেয়।",
    enExplanation: `### Explanation
In large distributed clusters (e.g., 1000 nodes), maintaining a central directory of which nodes are alive creates a bottleneck. The Gossip Protocol mimics how rumors spread in social networks.
- **How it works**:
  - Every \$T\$ seconds, a node randomly selects \$K\$ nodes and shares its state and membership list.
  - The receiving nodes update their state lists and repeat the process.
  - The information propagates exponentially (\$O(log N)\$ steps to cover \$N\$ nodes).
  - **Pros**: Highly decentralized, handles node failures naturally (fault-tolerant), and scales infinitely.

### Real-World Example
- **Cassandra**: Uses Gossip to discover new nodes joining the cluster and to detect dead nodes.
- **Redis Cluster**: Uses Gossip messages to detect master failovers and keep node metadata updated.

### Best Practice
Adjust the gossip interval and fan-out factors based on the network bandwidth to avoid excessive communication traffic in large clusters.

### Common Mistakes
Setting the gossip frequency too high in a large cluster, causing network congestion and overloading nodes with duplicate health checks.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড সিস্টেমে যখন হাজার হাজার নোড থাকে, তখন কে সচল আর কে অচল তা জানার জন্য সেন্ট্রাল ডাটাবেস ব্যবহার করলে সেখানে জটলা তৈরি হয়। গসিপ প্রোটোকল (Gossip Protocol) সামাজিক গুজবের মতো কাজ করে:
- প্রতিটি নোড প্রতি সেকেন্ডে র্যান্ডমলি কয়েকটি নোড বেছে নিয়ে নিজের কাছে থাকা অন্য নোডগুলোর হেলথ স্ট্যাটাস লিস্ট শেয়ার করে।
- রিসিভ করা নোডগুলো তাদের মেমোরি লিস্ট আপডেট করে আবার র্যান্ডম নোড সিলেক্ট করে শেয়ার করে।
- অত্যন্ত দ্রুতগতিতে (\$O(\\log N)\$ পদক্ষেপে) পুরো ক্লাস্টারে নোডের হেলথ ইনফরমেশন পৌঁছে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
Cassandra এবং Redis Cluster-এর নোডগুলো একে অপরের সাথে কানেকশন ও মেম্বারশিপ স্ট্যাটাস সিঙ্ক রাখতে গসিপ প্রোটোকল ব্যবহার করে।

### উত্তম অনুশীলন
ডিসেন্ট্রালাইজড ক্লাস্টার ডিজাইনের ক্ষেত্রে নোড ডিসকভারি ও ফেইলিউর ডিটেকশনের জন্য গসিপ প্রোটোকল ব্যবহার করুন।

### সাধারণ ভুল
গসিপের ফ্রিকোয়েন্সি বা নোড সংখ্যার প্যারামিটার খুব বেশি বাড়িয়ে দেওয়া, যা ক্লাস্টারের ইন্টারনাল নেটওয়ার্ক ব্যান্ডউইথ শেষ করে ফেলে।`
  }
];
