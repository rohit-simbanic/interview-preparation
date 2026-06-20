import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: "system-design-36",
    title: "Explain Consistent Hashing with Virtual Nodes (Vnodes) and how it prevents hotspotting.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Consistent Hashing","Virtual Nodes","Sharding","Distributed Systems"],
    enAnswer: "Consistent Hashing with Virtual Nodes assigns multiple virtual hash positions to a single physical server node on the hash ring. This ensures an even distribution of data keys and avoids traffic hotspotting on nodes.",
    bnAnswer: "ভার্চুয়াল নোড (Vnodes) সহ কনসিস্টেন্ট হ্যাশিং একটি ফিজিক্যাল সার্ভারের বিপরীতে রিংয়ে একাধিক ভার্চুয়াল পয়েন্ট বসায়। এটি ডাটা কীগুলোর সুষম বণ্টন নিশ্চিত করে এবং হটস্পটিং এড়ায়।",
    enExplanation: `### Explanation
In basic consistent hashing, if servers are hashed onto the ring, the hash distribution is often non-uniform, leaving large segments of the ring between servers. This creates **Hotspots** (where one server handles 80% of the data/traffic while others sit idle).

### The Solution: Virtual Nodes (Vnodes)
Instead of mapping a physical server (e.g., \`Server A\`) to a single point on the ring, we map it to multiple virtual nodes (e.g., \`Server A-1\`, \`Server A-2\`, \`Server A-3\`, ..., \`Server A-100\`) distributed randomly across the ring hash space.
- **Benefits**:
  1. **Uniform Load Distribution**: As the number of Vnodes per server increases, data key distribution becomes highly balanced.
  2. **Heterogeneous Hardware**: A server with 64GB RAM can be assigned 200 Vnodes, while a server with 8GB RAM gets 25 Vnodes, load-balancing based on resource capacity.
  3. **Faster Recovery**: If a server crashes, its load is split across multiple adjacent virtual nodes on the ring, preventing a cascading failure on a single successor server.

### Real-World Example
Amazon DynamoDB and Apache Cassandra use virtual nodes to manage petabytes of data partitions across large server clusters.

### Architecture Ring
\`\`\`
Ring with Vnodes:
           [Server A-1]
             /      \\
      [Server B-2]   [Server A-2]
           \\        /
           [Server B-1]
(Server A and B keys are scattered uniformly around the ring)
\`\`\`

### Best Practice
Determine the number of virtual nodes based on hardware strength. Stronger nodes should get more virtual nodes on the ring to handle proportional capacity.

### Common Mistakes
Assigning the same number of virtual nodes to servers with different physical resource profiles, overloading weaker servers.

### Best Practice
Determine the number of virtual nodes based on hardware strength. Stronger nodes should get more virtual nodes on the ring to handle proportional capacity.

### Common Mistakes
Assigning the same number of virtual nodes to servers with different physical resource profiles, overloading weaker servers.`,
    bnExplanation: `### ব্যাখ্যা
বেসিক কনসিস্টেন্ট হ্যাশিংয়ে সার্ভারগুলোর হ্যাশ পয়েন্ট যদি রিংয়ের খুব কাছাকাছি বসে, তবে তাদের মাঝখানের ফাকা অংশের ট্রাফিক যেকোনো একটি নোডের ওপর অতিরিক্ত চাপ সৃষ্টি করে। একে **হটস্পটিং (Hotspotting)** বলে।
- **সমাধান: ভার্চুয়াল নোড (Vnodes)**:
  ১. ১টি ফিজিক্যাল সার্ভারের জন্য রিংয়ে শুধুমাত্র ১টি পয়েন্ট সিলেক্ট না করে র্যান্ডমলি ১০০টি বা ২০০টি ডুপ্লিকেট ভার্চুয়াল পয়েন্ট বসানো হয় (যেমন, \`Server A-1\`, \`Server A-2\` ইত্যাদি)।
  ২. এতে ডাটা কীগুলো রিংয়ের সর্বত্র সমানভাবে বিন্যস্ত হয়ে যায়।
  ৩. শক্তিশালী সার্ভারে বেশি Vnodes এবং দুর্বল সার্ভারে কম Vnodes ম্যাপ করে লোড ব্যালেন্স করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
Cassandra এবং DynamoDB রিং ডিজাইনে ভার্চুয়াল নোড ব্যবহার করা হয় যাতে ক্লাস্টারে ডাটা সমানভাবে ডিস্ট্রিবিউটেড থাকে।

### উত্তম অনুশীলন
ফিজিক্যাল সার্ভারের মেমোরি ও প্রসেসিং পাওয়ারের ওপর ভিত্তি করে ভার্চুয়াল নোডের সংখ্যা নির্ধারণ করুন।

### সাধারণ ভুল
দুর্বল ও শক্তিশালী উভয় সার্ভারের জন্য সমান সংখ্যক ভার্চুয়াল নোড সেট করা, যার ফলে দুর্বল সার্ভারটি ট্রাফিকের লোড সামলাতে না পেরে ক্র্যাশ করে।

### বাস্তব-ভিত্তিক উদাহরণ
Cassandra এবং DynamoDB রিং ডিজাইনে ভার্চুয়াল নোড ব্যবহার করা হয় যাতে ক্লাস্টারে ডাটা সমানভাবে ডিস্ট্রিবিউটেড থাকে।

### উত্তম অনুশীলন
ফিজিক্যাল সার্ভারের মেমোরি ও প্রসেসিং পাওয়ারের ওপর ভিত্তি করে ভার্চুয়াল নোডের সংখ্যা নির্ধারণ করুন।

### সাধারণ ভুল
দুর্বল ও শক্তিশালী উভয় সার্ভারের জন্য সমান সংখ্যক ভার্চুয়াল নোড সেট করা, যার ফলে দুর্বল সার্ভারটি ট্রাফিকের লোড সামলাতে না পেরে ক্র্যাশ করে।`
  },
  {
    id: "system-design-37",
    title: "Explain Vector Clocks and how they resolve write conflicts in distributed systems.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Vector Clocks","Distributed Systems","Consistency"],
    enAnswer: "Vector Clocks are logical timestamps used to determine the causal ordering of events and detect concurrent write conflicts in decentralized distributed systems where no master server clock exists.",
    bnAnswer: "ভেক্টর ক্লকস (Vector Clocks) হলো লজিক্যাল টাইমস্ট্যাম্প যা ডিস্ট্রিবিউটেড সিস্টেমে ইভেন্টের কার্যকারণ ক্রম (Causal Ordering) নির্ধারণ করতে এবং কনকারেন্ট রাইট কনফ্লিক্ট সনাক্ত করতে ব্যবহৃত হয়।",
    enExplanation: `### Explanation
In decentralized masterless systems (like DynamoDB), multiple clients can update different replicas of the same record concurrently. Physical server clocks (wall clocks) cannot be used to order these writes because NTP (Network Time Protocol) clock drift makes it impossible to know which write occurred first down to the millisecond.

### Vector Clock Mechanism:
- A vector clock is an array of logical clocks (counters), one for each node in the cluster: \$VC = [V_1, V_2, ..., V_n]\$.
- When Node \$i\$ performs a local update, it increments its counter: \$V_i = V_i + 1\$.
- When a node sends a message to another, it includes its vector clock.
- The receiving node compares vectors to determine if one update causally succeeded the other, or if they are in conflict:
  - **Causal Relation**: Clock A succeeds Clock B if every counter in A is \$ge\$ corresponding counter in B, and at least one counter is strictly greater.
  - **Conflict**: If some counters in A are greater while others in B are greater, they occurred concurrently. The system detects a conflict and saves both versions (siblings) for application-level resolution.

### Real-World Example
Amazon's Dynamo database using Vector Clocks to allow off-line carts to merge later without losing customer items.

### Best Practice
Limit vector clock sizes (using pruning/eviction rules based on timestamp) to prevent vector clocks from bloating and consuming excessive storage overhead as nodes join and leave.

### Common Mistakes
Allowing the vector clock array to grow unbounded in clusters with high client/node churn, leading to severe memory and storage bloat.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড নোডগুলোতে টাইমের অমিল (Clock Drift) থাকার কারণে কোন আপডেটটি আগে আর কোনটি পরে হয়েছে তা ফিজিক্যাল টাইম দিয়ে জানা সম্ভব নয়। ভেক্টর ক্লক (Vector Clocks) লজিক্যাল টাইমিং দিয়ে এই সমস্যা সমাধান করে:
- প্রতিটি নোডের জন্য একটি কাউন্টার অ্যারে থাকে: \$VC = [V_1, V_2, ..., V_n]\$।
- কোনো নোড ডাটা আপডেট করলে তার নিজস্ব কাউন্টার ১ বাড়িয়ে দেয়।
- ডাটা আদান-প্রদানের সময় ভেক্টর ক্লকও সাথে পাঠানো হয়।
- ভেক্টর ক্লক তুলনা করে কনফ্লিক্ট বা ক্যাজুয়াল রিলেশনশিপ (Causal Relationship) খুঁজে বের করা হয় এবং ডাটা সিঙ্ক করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
Riak বা DynamoDB-এর মতো মাস্টারলেস ডাটাবেসে একাধিক ইউজার একই ডকুেমন্ট একই সাথে এডিট করলে কনফ্লিক্ট ডিটেক্ট করতে ভেক্টর ক্লক ব্যবহার করা হয়।

### উত্তম অনুশীলন
ভেক্টর ক্লকের আকার খুব বেশি বড় হওয়া এড়াতে ক্লক ট্রাঙ্কেশন (Clock Truncation) বা এভিকশন পলিসি ব্যবহার করুন যাতে মেমোরি অপচয় না হয়।

### সাধারণ ভুল
ফিজিক্যাল সার্ভার টাইমস্ট্যাম্পকে অত্যন্ত নির্ভুল মনে করে ডিস্ট্রিবিউটেড ট্রানজেকশন ক্রমানুসারে সাজানোর চেষ্টা করা, যা নেটওয়ার্ক টাইম প্রোটোকল (NTP) ড্রিপ্টের কারণে ডাটা ওভাররাইট লস ঘটায়।`
  },
  {
    id: "system-design-38",
    title: "Compare Two-Phase Commit (2PC) and Three-Phase Commit (3PC) distributed transaction protocols.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Distributed Transactions","Consensus","Architecture Patterns"],
    enAnswer: "Two-Phase Commit (2PC) is a blocking consensus protocol split into Prepare and Commit phases. Three-Phase Commit (3PC) splits the process into Can-Commit, Pre-Commit, and Do-Commit, resolving 2PC blocking failures.",
    bnAnswer: "টু-ফেজ কমিট (2PC) হলো একটি ব্লকিং প্রোটোকল যা Prepare এবং Commit ধাপে বিভক্ত। থ্রি-ফেজ কমিট (3PC) একে Can-Commit, Pre-Commit এবং Do-Commit ধাপে ভাগ করে ব্লকিং সমস্যা সমাধান করে।",
    enExplanation: `### Explanation
Distributed transactions require all participant nodes to commit, or all to abort.
- **Two-Phase Commit (2PC)**:
  1. **Prepare Phase**: The coordinator asks participants if they are ready to commit. Participants lock resources and vote "yes" or "no".
  2. **Commit Phase**: If all vote "yes", the coordinator broadcasts the commit command. Otherwise, it broadcasts abort.
  - **Trade-off**: It is **blocking**. If the coordinator crashes mid-process after participants vote "yes", participants remain locked indefinitely waiting for instructions.
- **Three-Phase Commit (3PC)**:
  - Adds a middle phase (**Pre-Commit**) and uses timeout thresholds to remove blocking states. If a node times out waiting in the Pre-Commit state, it assumes a commit occurred globally and proceeds, avoiding deadlocks. (Rarely used in practice due to high network overhead and partition risks).

### Best Practice
Avoid 2PC/3PC in high-performance microservices as the distributed locks hurt throughput. Choose the **Saga Pattern** for eventual consistency or use transactional outbox patterns.

### Real-World Example
Distributed SQL databases like CockroachDB coordinating multi-shard mutations using Two-Phase Commit over Raft consensus replicas.

### Common Mistakes
Using Two-Phase Commit in a highly distributed internet-scale system, where network latency and blocking locks degrade performance.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড ট্রানজেকশনে সব নোডের ডাটা সিঙ্ক বা রোলব্যাক নিশ্চিত করার দুটি প্রধান প্রোটোকল:
- **Two-Phase Commit (2PC)**:
  ১. **Prepare Phase**: কোঅর্ডিনেটর নোড সবাইকে জিজ্ঞেস করে তারা রেডি কিনা। নোডগুলো রিসোর্স লক করে 'হ্যাঁ' বা 'না' ভোট দেয়।
  ২. **Commit Phase**: সবাই 'হ্যাঁ' দিলে কোঅর্ডিনেটর কমিট করার সিগন্যাল দেয়।
  - **সমস্যা**: এটি একটি ব্লকিং প্রোটোকল। কোঅর্ডিনেটর ক্র্যাশ করলে নোডগুলোর রিসোর্স লক হয়ে ঝুলে থাকে।
- **Three-Phase Commit (3PC)**:
  - এটি 2PC-এর ব্লকিং সমস্যা মেটাতে মাঝখানে একটি **Pre-Commit** স্টেট যুক্ত করে এবং নোডের টাইমআউট ব্যবহার করে স্বয়ংক্রিয় ডিসিশন নিতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
ডিস্ট্রিবিউটেড রিলেショナル ডাটাবেস (যেমন CockroachDB বা Spanner) ইন্টারনাল কনসেনসাস ও ট্রানজেকশন কমিট করতে 2PC এবং Paxos এর সমন্বয় ব্যবহার করে।

### উত্তম অনুশীলন
উচ্চ স্কেলাবিলিটি সম্পন্ন সিস্টেমে 2PC এড়িয়ে চলুন কারণ এটি লক হোল করে রাখে। এর পরিবর্তে Saga প্যাটার্ন বা Eventual Consistency ব্যবহার করুন।

### সাধারণ ভুল
কোঅর্ডিনেটর নোডের ফেইলওভার রিডানড্যান্সি না রেখে 2PC ব্যবহার করা, যার ফলে কোঅর্ডিনেটর ক্র্যাশ করলে পুরো ডাটাবেস লক হয়ে সার্ভিস অচল হয়ে পড়ে।`
  },
  {
    id: "system-design-39",
    title: "Explain Event Sourcing and CQRS (Command Query Responsibility Segregation).",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Event Sourcing","CQRS","Design Patterns","Microservices"],
    enAnswer: "Event Sourcing stores the state of an application as a sequence of immutable events. CQRS separates the read models (optimized databases for queries) from the write models (optimized databases for commands).",
    bnAnswer: "ইভেন্ট সোর্সিং অ্যাপ্লিকেশনের স্টেট পরিবর্তনগুলোকে ইমিউটেবল ইভেন্ট সিকোয়েন্স হিসেবে সেভ করে। CQRS রিড মডেল (কুয়েরি ডাটাবেস) এবং রাইট মডেল (কমান্ড ডাটাবেস) আলাদা করে কাজ করে।",
    enExplanation: `### Explanation
- **Event Sourcing**: Instead of updating a database row (e.g. updating user balance to \$100), the database logs immutable events: \`Deposit \$50\`, \`Withdraw \$20\`, \`Deposit \$70\`. The current state is calculated by replaying/aggregating these events from scratch. It provides an audit trail.
- **CQRS**: In standard CRUD, the same database schema is used for reads and writes. Under high scale, these conflict. CQRS splits the application into:
  - **Commands (Write)**: Validates logic and appends events/rows to a write database.
  - **Queries (Read)**: Fetches pre-computed read views from a read-optimized store (like Elasticsearch or Redis).
  - A background process/event-bus synchronizes the write database changes to the read database eventually.

### Real-World Example
- **Event Sourcing**: Banking accounts, where transactions cannot be modified, only reversed with new entries.
- **CQRS**: A social network. Writing a post updates the SQL write DB, while searching user posts queries an Elasticsearch read database.

### System Architecture
\`\`\`
             /---> [ Command Handler ] ---> [ Write DB (Postgres) ]
[Client] ---+                                        |
             |                               (Sync via Event Bus)
             |                                       v
             \\---> [ Query Handler ] <---- [ Read DB (Redis/ES) ]
\`\`\`

### Best Practice
Use CQRS only when read and write query shapes differ significantly. Keep the write model completely optimized for event appending.

### Common Mistakes
Using Event Sourcing for systems with heavy update-verify loops, forcing the app to replay millions of events continuously to fetch basic state.

### Best Practice
Use CQRS only when read and write query shapes differ significantly. Keep the write model completely optimized for event appending.

### Common Mistakes
Using Event Sourcing for systems with heavy update-verify loops, forcing the app to replay millions of events continuously to fetch basic state.`,
    bnExplanation: `### ব্যাখ্যা
- **ইভেন্ট সোর্সিং (Event Sourcing)**: কোনো ডাটাবেস রো ডাইরেক্ট আপডেট করার পরিবর্তে অ্যাপ্লিকেশনের সমস্ত কাজের হিস্ট্রি ইমিউটেবল (যা পরিবর্তন করা যায় না) ইভেন্ট আকারে জমা রাখা হয়। যেমন, একাউন্ট ব্যালেন্স ডিরেক্ট ১০০ করার বদলে +৫০, -২০, +৭০ ইত্যাদি সিকোয়েন্স স্টোর করা।
- **CQRS**: অ্যাপ্লিকেশনকে কমান্ড (ডাটা রাইট বা ক্রিয়েট করার লজিক) এবং কুয়েরি (ডাটা রিড করার লজিক) এই দুইভাগে বিভক্ত করে আলাদা আলাদা ডাটাবেসে পরিচালনা করা। ডাটা রাইট হওয়ার সাথে সাথে ইভেন্ট পাঠিয়ে রিড ডাটাবেসটি আপডেট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং লেজার হিস্ট্রিতে ইভেন্ট সোর্সিং ব্যবহার করা এবং পেমেন্ট রিসিভ ও রিপোর্ট দেখার জন্য আলাদা রিড/রাইট ডাটাবেস ব্যবহার করে CQRS ডিজাইন করা।

### উত্তম অনুশীলন
ইভেন্ট প্লেব্যাকের লেটেন্সি কমাতে নির্দিষ্ট সময় পর পর স্টেটের স্ন্যাপশট (Snapshot) নিয়ে রাখুন যাতে সব ইভেন্ট রি-প্লে করতে না হয়।

### সাধারণ ভুল
খুব সাধারণ ক্রুড (CRUD) অ্যাপ্লিকেশনে জটিল ইভেন্ট সোর্সিং ও CQRS ব্যবহার করা, যা অযথা আর্কিটেকচারাল জটিলতা ও ডেভেলপমেন্ট কস্ট বাড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং লেজার হিস্ট্রিতে ইভেন্ট সোর্সিং ব্যবহার করা এবং পেমেন্ট রিসিভ ও রিপোর্ট দেখার জন্য আলাদা রিড/রাইট ডাটাবেস ব্যবহার করে CQRS ডিজাইন করা।

### উত্তম অনুশীলন
ইভেন্ট প্লেব্যাকের লেটেন্সি কমাতে নির্দিষ্ট সময় পর পর স্টেটের স্ন্যাপশট (Snapshot) নিয়ে রাখুন যাতে সব ইভেন্ট রি-প্লে করতে না হয়।

### সাধারণ ভুল
খুব সাধারণ ক্রুড (CRUD) অ্যাপ্লিকেশনে জটিল ইভেন্ট সোর্সিং ও CQRS ব্যবহার করা, যা অযথা আর্কিটেকচারাল জটিলতা ও ডেভেলপমেন্ট কস্ট বাড়ায়।`
  },
  {
    id: "system-design-40",
    title: "Compare LSM Trees vs. B-Trees database storage engine architectures.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Storage Engines","B-Trees","LSM-Trees","Databases"],
    enAnswer: "B-Trees organize data in structured page segments on disk, optimized for fast random reads. LSM Trees append writes to in-memory tables and flush them to sequential disk logs, optimized for high write throughput.",
    bnAnswer: "B-Tree ডিস্কে স্ট্রাকচার্ড পেজ নোড আকারে ডাটা সাজায়, যা র্যান্ডম রিড স্পিড বাড়ায়। LSM-Tree মেমোরিতে রাইট লিখে ক্রমান্বয়ে ডিস্ক ফাইলে ফ্ল্যাশ করে, যা রাইট স্পিড বহুগুণ বাড়ায়।",
    enExplanation: `### Explanation
Database engines use different internal structures to read and write files:
- **B-Trees (used in MySQL InnoDB, PostgreSQL)**:
  - Writes: Performs in-place updates. Writes directly to page coordinates on disk.
  - Performance: Logarithmic reads (\$O(log N)\$) are extremely fast. Writes are slow due to disk write pointer random hops and page splitting.
  - Best for: Read-heavy workloads, transactional SQL databases.
- **LSM (Log-Structured Merge) Trees (used in Cassandra, RocksDB, LevelDB)**:
  - Writes: Appends writes to a memory buffer (\`MemTable\`). When full, flushes sequentially to disk logs (\`SSTables\`). No in-place updates.
  - Performance: Write throughput is extremely high because sequential writes are fast. Read performance is slower because it may need to search multiple file logs on disk.
  - Best for: Write-heavy workloads, time-series logging, big-data analytics.

### LSM-Tree Write Flow
\`\`\`
[Write Request] ---> [ MemTable (RAM) ] (Fast Write)
                            | (When Memtable is full, flush)
                            v
                    [ SSTables (Disk) ]  <--- Background Compaction
\`\`\`

### Real-World Example
PostgreSQL using B-Tree index for quick primary key lookups, and RocksDB using LSM-Tree to store sequential write logs in blockchain networks.

### Best Practice
Use B-Tree-based databases for relational, query-heavy operational applications. Use LSM-Tree databases (like Cassandra) for high-frequency logs and time-series writing.

### Common Mistakes
Using an LSM-Tree engine for random, ad-hoc read queries over massive datasets, resulting in severe read latency spikes due to multi-SSTable searches.

### Real-World Example
PostgreSQL using B-Tree index for quick primary key lookups, and RocksDB using LSM-Tree to store sequential write logs in blockchain networks.

### Best Practice
Use B-Tree-based databases for relational, query-heavy operational applications. Use LSM-Tree databases (like Cassandra) for high-frequency logs and time-series writing.

### Common Mistakes
Using an LSM-Tree engine for random, ad-hoc read queries over massive datasets, resulting in severe read latency spikes due to multi-SSTable searches.`,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস কীভাবে ডিস্কে ডাটা রিড ও রাইট করবে তা স্টোরেজ ইঞ্জিনের স্ট্রাকচারের ওপর নির্ভর করে:
- **B-Trees**: ডাটা ডিস্কের নির্দিষ্ট ব্লকে বা পেজে সরাসরি ওভাররাইট করে। এতে র্যান্ডম রিড অত্যন্ত দ্রুত হয় কিন্তু র্যান্ডম রাইট অনেক ধীরগতির হয় কারণ ডিস্কের হেডকে বারবার জায়গা পরিবর্তন করতে হয়।
- **LSM Trees**: কোনো ওভাররাইট করে না। প্রথমে সমস্ত রাইট মেমোরিতে (MemTable) লিখে নেয়। মেমোরি ফুল হলে তা ক্রমান্বয়ে সিকোয়েন্সিয়াল লক আকারে ডিস্কে (SSTables) রাইট করে। এটি রাইট ক্যাপাসিটি বহুগুণ বাড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ
রিলেশনাল কুয়েরির জন্য PostgreSQL-এ B-Tree এবং বিগ ডাটা অ্যানালিটিক্স লগের জন্য Cassandra-তে LSM-Tree ব্যবহার।

### উত্তম অনুশীলন
রিড-হেভি ও রিলেশনাল অ্যাপের জন্য B-Tree ডাটাবেস এবং হাই-রাইট ট্র্যাকিং বা লগিং অ্যাপের জন্য LSM-Tree স্টোরেজ ইঞ্জিন সিলেক্ট করুন।

### সাধারণ ভুল
র্যান্ডম রিড-হেভি সিস্টেমে LSM-Tree ডাটাবেস ব্যবহার করা, যা ডাটা খুঁজতে গিয়ে মাল্টিপল ডিস্ক রিড করার কারণে সিস্টেমকে ধীরগতির করে তোলে।

### বাস্তব-ভিত্তিক উদাহরণ
রিলেশনাল কুয়েরির জন্য PostgreSQL-এ B-Tree এবং বিগ ডাটা অ্যানালিটিক্স লগের জন্য Cassandra-তে LSM-Tree ব্যবহার।

### উত্তম অনুশীলন
রিড-হেভি ও রিলেশনাল অ্যাপের জন্য B-Tree ডাটাবেস এবং হাই-রাইট ট্র্যাকিং বা লগিং অ্যাপের জন্য LSM-Tree স্টোরেজ ইঞ্জিন সিলেক্ট করুন।

### সাধারণ ভুল
র্যান্ডম রিড-হেভি সিস্টেমে LSM-Tree ডাটাবেস ব্যবহার করা, যা ডাটা খুঁজতে গিয়ে মাল্টিপল ডিস্ক রিড করার কারণে সিস্টেমকে ধীরগতির করে তোলে।`
  },
  {
    id: "system-design-41",
    title: "Design a scalable URL Shortener (e.g. TinyURL) system architecture.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["System Design Cases","System Architecture","Caching"],
    enAnswer: "A URL shortener converts long URLs to short aliases. The architecture uses a base62 encoding hash generator, a distributed ID allocator, and Redis caching for fast redirects.",
    bnAnswer: "একটি ইউআরএল শর্টনার লং ইউআরএলকে শর্ট লিংকে রূপান্তর করে। এর আর্কিটেকচারে Base62 এনকোডিং হ্যাশ জেনারেটর, ডিস্ট্রিবিউটেড আইডি অ্যালোকেটর এবং রেডিস ক্যাশ ব্যবহৃত হয়।",
    enExplanation: `### Explanation
Designing a scalable URL Shortener involves translating a long URL into a short code (e.g., tinyurl.com/a8B9xz) and redirecting users dynamically.

### Real-World Example
TinyURL, Bitly, or custom link shorteners used in Twitter posts to save character counts.

### Best Practice
Use HTTP 301 (Permanent Redirect) to cache redirects at the client browser level, reducing load on your servers. Use HTTP 302 only if you need link analytics for every click.

### Common Mistakes
Using a relational database with Auto-Increment IDs without a distributed coordination layer, creating a single point of bottleneck for generation.`,
    bnExplanation: `### ব্যাখ্যা
একটি স্কেলযোগ্য ইউআরএল শর্টনার ডিজাইনে লং ইউআরএলকে শর্ট কোডে রূপান্তর করা এবং পরবর্তীতে রিডাইরেক্ট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
Bitly বা TinyURL যা মেসেজ বা টুইটের ক্যারেক্টার লিমিট বাঁচাতে বড় লিংক ছোট করতে ব্যবহার করা হয়।

### উত্তম অনুশীলন
সার্ভারের ওপর চাপ কমাতে ব্রাউজার লেভেলে লিংক ক্যাশ করতে HTTP 301 রিডাইরেকশন ব্যবহার করুন। প্রতিটি ক্লিকের রিয়েল-টাইম অ্যানালিটিক্স ট্র্যাক করতে চাইলে HTTP 302 ব্যবহার করুন।

### সাধারণ ভুল
ডিস্ট্রিবিউটেড রেঞ্জ বা আইডি ম্যানেজার ছাড়া ট্র্যাডিশনাল রিলেশনাল ডাটাবেসের অটো-ইনক্রিমেন্ট আইডি ব্যবহার করা, যা স্কেলিং বোতলনেক তৈরি করে।`
  },
  {
    id: "system-design-42",
    title: "Design a highly scalable Real-Time Chat System (e.g. WhatsApp / Slack) architecture.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["System Design Cases","WebSockets","Real-Time"],
    enAnswer: "A distributed chat architecture utilizes persistent WebSocket servers to maintain client connections, a Message Broker to route chats, and a NoSQL DB (e.g. Cassandra) for high-speed message logging.",
    bnAnswer: "একটি রিয়েল-টাইম চ্যাট সিস্টেমে কানেকশন ধরে রাখতে ওয়েবসেক্ট সার্ভার, মেসেজ রাউটিংয়ের জন্য মেসেজ ব্রোকার এবং চ্যাট হিস্ট্রি সেভ করতে নোএসকিউএল ডাটাবেস ব্যবহৃত হয়।",
    enExplanation: `### Explanation
A real-time chat system requires persistent connections (WebSockets) to deliver messages with sub-second latency and support presence status.

### Real-World Example
WhatsApp, Slack, or Discord handling billions of active connections and routing message payloads across the globe.

### Best Practice
Keep WebSocket servers stateless regarding business logic; let them only handle connection endpoints, forwarding message processing to background microservices.

### Common Mistakes
Storing the message history in SQL databases without partition optimization, which degrades performance as the message volume grows into billions of rows.`,
    bnExplanation: `### ব্যাখ্যা
রিয়েল-টাইম চ্যাট সিস্টেমে ব্যবহারকারীদের সাথে অবিরাম কানেকশন ধরে রাখতে WebSocket ব্যবহার করা হয়, যা দ্রুত মেসেজ ডেলিভারি নিশ্চিত করে।

### বাস্তব-ভিত্তিক উদাহরণ
WhatsApp, Slack বা Messenger যা গ্রাহকদের রীয়েল-টাইম স্ট্যাটাস ও মেসেজিং কানেক্টিভিটি ধরে রাখে।

### উত্তম অনুশীলন
WebSocket সার্ভারগুলোকে বিজনেস লজিক থেকে সম্পূর্ণ আলাদা ও স্টেটলেস রাখুন, যাতে তারা শুধুমাত্র কানেক্টিভিটি এবং ডাটা পুশ হ্যান্ডেল করতে পারে।

### সাধারণ ভুল
পার্টিশনিং ছাড়া ট্র্যাডিশনাল রিলেশনাল ডাটাবেসে চ্যাট মেসেজ হিস্ট্রি স্টোর করা, যা ডাটা বাড়ার সাথে সাথে রিড/রাইট স্পিড ধীরগতির করে ফেলে।`
  },
  {
    id: "system-design-43",
    title: "Design a News Feed System (e.g. Facebook / Twitter Feed). Compare Push vs. Pull models.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["System Design Cases","System Architecture","Performance"],
    enAnswer: "News feed systems aggregate posts from followed users. The Push model (Fan-out-on-write) writes posts directly to all followers cache. The Pull model (Fan-out-on-read) aggregates feed items on-demand during user login.",
    bnAnswer: "নিউজ ফিড সিস্টেম ফলো করা বন্ধুদের পোস্ট একত্রিত করে দেখায়। Push মডেল (Fan-out-on-write) বন্ধুর পোস্ট সরাসরি সব ফলোয়ারের ক্যাশে লেখে। Pull মডেল (Fan-out-on-read) অন-ডিমান্ড ফিড লোড করে।",
    enExplanation: `### Explanation
Designing a news feed involves compiling a timeline of posts from followed users, sorted chronologically or algorithmically.

### Real-World Example
Facebook News Feed, Twitter Timeline, or LinkedIn Feed serving customized posts to millions of concurrent users.

### Best Practice
Use hybrid routing models. Pre-compute feeds (Push) for normal active users, but dynamic merge (Pull) on-demand for celebrity posts to prevent write storm.

### Common Mistakes
Using pure Fan-out-on-write (Push) for users with millions of followers, leading to server timeouts and memory exhaustion on every celebrity post.`,
    bnExplanation: `### ব্যাখ্যা
নিউজ ফিড সিস্টেম ডিজাইনে দুটি প্রধান মডেল রয়েছে:
- **Push Model (Fan-out-on-write)**: ইউজার পোস্ট করার সাথে সাথে তার সমস্ত ফলোয়ারের হোমপেজ ক্যাশ ফাইলে পোস্টটি লিখে দেওয়া হয়। এতে রিড অত্যন্ত দ্রুত হয় কিন্তু সেলিব্রিটিদের ক্ষেত্রে ১টি পোস্ট লাখ লাখ নোটিফিকেশন রাইট তৈরি করে (Write Storm)।
- **Pull Model (Fan-out-on-read)**: ইউজার হোমপেজ ওপেন করার সময় সে যাদের ফলো করে তাদের সাম্প্রতিক পোস্টগুলো ডাটাবেস থেকে টেনে এনে টাইমস্ট্যাম্প অনুযায়ী সাজানো হয়। এতে রিড কুয়েরি অনেক ভারী হয়।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটার বা ফেসবুক হাইব্রিড মডেল ব্যবহার করে। সাধারণ ইউজারদের জন্য Push মডেল এবং অনেক বেশি ফলোয়ার থাকা সেলিব্রিটিদের ক্ষেত্রে Pull মডেল ব্যবহার করা হয়।

### উত্তম অনুশীলন
অপ্রয়োজনীয় ডাটাবেস কুয়েরি কমাতে এবং দ্রুত ফিড লোড করতে হাইব্রিড মডেল ব্যবহার করুন যেখানে সেলিব্রিটিদের ফিড অন-ডিমান্ড মার্জ করা হয়।

### সাধারণ ভুল
সেলিব্রিটিদের ক্ষেত্রেও পুশ মডেল ব্যবহার করা, যার ফলে তারা পোস্ট করার সাথে সাথে ডাটাবেস ও ক্যাশ মেমোরির ওপর অতিরিক্ত চাপ পড়ে সিস্টেম ক্র্যাশ করতে পারে।`
  },
  {
    id: "system-design-44",
    title: "How do you design a Unique Distributed ID Generator (e.g., Twitter Snowflake)?",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Distributed Systems","ID Generation","Cassandra","Database Partitioning"],
    enAnswer: "Twitter Snowflake generates unique 64-bit numeric IDs without a central database coordinator. It composed of a Timestamp (41 bits), Machine/Worker ID (10 bits), and a Sequence Counter (12 bits).",
    bnAnswer: "টুইটার স্নোফ্লেক (Twitter Snowflake) কোনো সেন্ট্রাল ডাটাবেস ছাড়া ইউনিক ৬৪-বিট আইডি জেনারেট করে। এটি টাইমস্ট্যাম্প (৪১ বিট), মেশিন আইডি (১০ বিট) এবং সিকোয়েন্স কাউন্টার (১২ বিট) দিয়ে গঠিত।",
    enExplanation: `### Explanation
A unique distributed ID generator generates sortable 64-bit integer IDs across clusters without coordinate locking.

### Real-World Example
Twitter Snowflake generator creating unique post IDs that automatically sort by creation time.

### Best Practice
Use NTP synchronization and handle clock-drift carefully; if the system clock drifts backward, the generator must wait or reject ID requests until the clock catches up.

### Common Mistakes
Neglecting backward clock-drift protection, which can result in generating duplicate IDs if the system clock resynchronizes with NTP.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড আইডি জেনারেটর কোনো সেন্ট্রাল ডাটাবেস লক ছাড়াই ক্লাস্টারের বিভিন্ন নোডে ইউনিক এবং সময় অনুযায়ী সাজানো আইডি তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
টুইটারের Snowflake আইডি জেনারেটর যা প্রতিটি টুইটের জন্য ইউনিক আইডি জেনারেট করে যা অটোমেটিকালি ক্রিয়েশন টাইম অনুযায়ী সর্ট করা থাকে।

### উত্তম অনুশীলন
এনটিপি (NTP) ক্লক সিঙ্ক ড্রিপ্ট প্রতিরোধে রিভার্স ক্লক-ড্রিপ্ট প্রোটেকশন যুক্ত করুন, যাতে ঘড়ির সময় পেছনে গেলে জেনারেটর আইডি দেওয়া সাময়িকভাবে বন্ধ রাখে।

### সাধারণ ভুল
ক্লক ড্রিপ্ট হ্যান্ডেল না করা, যার ফলে ঘড়ির সময় সামান্য পিছিয়ে গেলে সিস্টেম ডুপ্লিকেট আইডি তৈরি করে ফেলে।`
  },
  {
    id: "system-design-45",
    title: "Compare Raft vs. Paxos Distributed Consensus Algorithms.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Consensus","Raft","Paxos","Distributed Systems"],
    enAnswer: "Paxos is a generalized, complex distributed consensus protocol. Raft is an alternative decomposed consensus algorithm designed for understandability, dividing consensus into Leader Election, Log Replication, and Safety.",
    bnAnswer: "Paxos হলো একটি অত্যন্ত জটিল ডিস্ট্রিবিউটেড কনসেনসাস প্রোটোকল। Raft হলো সহজ বোধগম্যতার জন্য তৈরি একটি বিকল্প অ্যালগরিদম যা কনসেনসাসকে লিডার ইলেকশন এবং লগ রেপ্লিকেশন ধাপে ভাগ করে।",
    enExplanation: `### Explanation
Consensus algorithms ensure multiple independent nodes agree on a value or cluster state (e.g. who is the current database master, has a transaction succeeded).
- **Paxos**: The pioneer of distributed consensus. It runs in rounds, utilizing Proposers, Acceptors, and Learners. Due to its symmetric, mathematical nature, it is notoriously difficult to implement correctly in code.
- **Raft (Decomposed Approach)**:
  - Specifically designed to be understandable.
  - **Leader Election**: If the current leader node fails, remaining nodes enter a Candidate state and vote to elect a new leader.
  - **Log Replication**: The leader receives commands from clients, appends them to its log, broadcasts them to followers, and commits the state once a majority of nodes confirm write.

### Real-World Example
- **Paxos**: Google Spanner database, Chubby Lock Service.
- **Raft**: Kubernetes etcd storage, Consul cluster registry, InfluxDB.

### Best Practice
Choose Raft for new distributed systems where ease of implementation, maintenance, and correctness verification is important.

### Common Mistakes
Attempting to write a custom Paxos implementation from scratch, which almost always introduces subtle consensus bugs in edge cases.

### Best Practice
Choose Raft for new distributed systems where ease of implementation, maintenance, and correctness verification is important.

### Common Mistakes
Attempting to write a custom Paxos implementation from scratch, which almost always introduces subtle consensus bugs in edge cases.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড সিস্টেমে নোডগুলোর মধ্যে মতৈক্য (Consensus) তৈরির দুটি জনপ্রিয় অ্যালগরিদম:
- **Paxos**: এটি ডিস্ট্রিবিউটেড কনসেনসাসের প্রথম অ্যালগরিদম। এটি গাণিতিকভাবে খুবই স্ট্রং কিন্তু কোডে সঠিকভাবে ইমপ্লিমেন্ট করা অত্যন্ত জটিল।
- **Raft**: এটি সহজে বোঝার জন্য তৈরি। এটি লিডার ইলেকশন (Leader Election) এবং লগ রেপ্লিকেশন (Log Replication) এই দুটি পরিষ্কার ধাপে বিভক্ত হয়ে কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
Kubernetes তাদের etcd-তে কনসেনসাস বজায় রাখতে Raft অ্যালগরিদম ব্যবহার করে এবং Google তাদের ডিস্ট্রিবিউটেড ডাটাবেস Spanner-এ Paxos ব্যবহার করে।

### উত্তম অনুশীলন
নতুন কোনো ডিস্ট্রিবিউটেড ফাইল সিস্টেম বা ডাটাবেস ডিজাইন করার সময় Raft বেছে নিন, কারণ এটি সহজে কোডে ইমপ্লিমেন্ট ও ডিবাগ করা যায়।

### সাধারণ ভুল
কোনো রকম প্রোডাকশন-গ্রেড টেস্টিং ছাড়াই নিজে স্ক্র্যাচ থেকে Paxos ইমপ্লিমেন্ট করার চেষ্টা করা, যা সাধারণত অত্যন্ত জটিল কর্নার কেস বা ডেডলক তৈরি করে।`
  },
  {
    id: "system-design-46",
    title: "Design a Dynamic Distributed Rate Limiter using Redis Cluster.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Rate Limiting","Redis Cluster","Distributed Systems"],
    enAnswer: "A distributed rate limiter uses Redis to track request counters per client IP using a Sliding Window Log. To handle high concurrency, it executes transactional Lua scripts to check and update counters atomically.",
    bnAnswer: "ডিস্ট্রিবিউটেড রেট লিমিটারে ক্লায়েন্ট প্রতি রিকোয়েস্ট কাউন্টার ট্র্যাক করতে Redis ব্যবহার করা হয়। কনকারেন্সি ম্যানেজ করতে এটি এটমিক Lua স্ক্রিপ্ট এক্সিকিউট করে কাউন্টার আপডেট করে।",
    enExplanation: `### Explanation
In a multi-server setup, rate limiting in application memory fails because requests hit different servers. We need a centralized fast store like Redis.

### Implementation: Sliding Window Log via Redis Sorted Sets (ZSET)
- Key: Client IP or JWT token ID (e.g. \`rate:192.168.1.1\`).
- Value: Sorted Set where the member and score is the millisecond timestamp of the request.

### The Algorithm steps inside a Lua script:
1. **Remove Old Requests**: Delete keys from the ZSET with scores older than \`current_time - window_size\` (e.g., older than 60 seconds) using \`ZREMRANGEBYSCORE\`.
2. **Count Requests**: Run \`ZCARD\` to count the remaining requests in the set.
3. **Allow or Block**: If the count is less than the limit (e.g. 100), add the current request timestamp using \`ZADD\` and set key TTL. If the count exceeds the limit, block the request.

### Why Lua script?
Lua scripts execute inside Redis **atomically**. This prevents race conditions where two concurrent requests read the counter, see it is under the limit, and bypass the limiter at the exact same millisecond.

### Redis Lua Script Code
\`\`\`lua
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])
local clear_before = now - window

redis.call('zremrangebyscore', key, 0, clear_before)
local current_requests = redis.call('zcard', key)

if current_requests < limit then
    redis.call('zadd', key, now, now)
    redis.call('expire', key, math.ceil(window / 1000))
    return 1
else
    return 0
end
\`\`\`

### Real-World Example
API security layers using Redis Sorted Sets to limit client requests (e.g., 100 requests/min) across multiple application instances.

### Best Practice
Use Redis Lua scripts to execute rate limiter checks atomically, avoiding race conditions under high concurrency.

### Common Mistakes
Executing rate limiter steps individually via separate Redis commands, causing race conditions where users exceed limits.

### Real-World Example
API security layers using Redis Sorted Sets to limit client requests (e.g., 100 requests/min) across multiple application instances.

### Best Practice
Use Redis Lua scripts to execute rate limiter checks atomically, avoiding race conditions under high concurrency.

### Common Mistakes
Executing rate limiter steps individually via separate Redis commands, causing race conditions where users exceed limits.`,
    bnExplanation: `### ব্যাখ্যা
মাল্টি-সার্ভার সিস্টেমে লোকাল মেমোরি রেট লিমিটিং কাজ করে না কারণ একেক রিকোয়েস্ট একেক সার্ভারে যায়। তাই সেন্ট্রাল Redis Cluster ব্যবহার করা হয়।
- **Sliding Window Log ইমপ্লিমেন্টেশন**:
  ১. Redis-এর Sorted Set (ZSET) ডেটা স্ট্রাকচার ব্যবহার করা হয়। যেখানে কী (Key) হলো ইউজারের আইপি এবং ভ্যালু হলো রিকোয়েস্টের টাইমস্ট্যাম্প।
  ২. রিকোয়েস্ট আসলে প্রথমে ZSET থেকে পুরাতন টাইমের রেকর্ডগুলো মুছে দেওয়া হয়।
  ৩. এরপর মোট রেকর্ডের সংখ্যা গণনা করা হয়। সংখ্যা লিমিটের নিচে থাকলে নতুন রিকোয়েস্টের টাইমস্ট্যাম্প যোগ করে পারমিশন দেওয়া হয়, অন্যথায় HTTP 429 পাঠানো হয়।
  ৪. এই অপারেশনটি সম্পন্ন করতে Redis Lua Script ব্যবহার করা হয়, যা সম্পূর্ণ এটমিকভাবে (Atomic) কাজ করে রেস কন্ডিশন এড়ায়।

### বাস্তব-ভিত্তিক উদাহরণ
পেইড এপিআই বা গেটওয়েতে একাধিক নোডের ট্রাফিক কন্ট্রোল করতে Redis Sorted Sets দিয়ে স্লাইডিং উইন্ডো রেট লিমিটিং ব্যবহার।

### উত্তম অনুশীলন
রেস কন্ডিশন এড়াতে এবং অ্যাটমিসিটি নিশ্চিত করতে সম্পূর্ণ অপারেশনটি একটি একক Redis Lua Script-এর ভেতর সম্পন্ন করুন।

### সাধারণ ভুল
লুয়া স্ক্রিপ্ট ছাড়া একাধিক আলাদা আলাদা Redis কমান্ড কল করে রেট লিমিট চেক করা, যা রেস কন্ডিশন তৈরি করে লিমিটের চেয়ে বেশি রিকোয়েস্ট এক্সেপ্ট করে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
পেইড এপিআই বা গেটওয়েতে একাধিক নোডের ট্রাফিক কন্ট্রোল করতে Redis Sorted Sets দিয়ে স্লাইডিং উইন্ডো রেট লিমিটিং ব্যবহার।

### উত্তম অনুশীলন
রেস কন্ডিশন এড়াতে এবং অ্যাটমিসিটি নিশ্চিত করতে সম্পূর্ণ অপারেশনটি একটি একক Redis Lua Script-এর ভেতর সম্পন্ন করুন।

### সাধারণ ভুল
লুয়া স্ক্রিপ্ট ছাড়া একাধিক আলাদা আলাদা Redis কমান্ড কল করে রেট লিমিট চেক করা, যা রেস কন্ডিশন তৈরি করে লিমিটের চেয়ে বেশি রিকোয়েস্ট এক্সেপ্ট করে ফেলে।`
  },
  {
    id: "system-design-47",
    title: "What is a Cache Stampede (Thundering Herd), and how do you mitigate it in distributed systems?",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Caching","Performance","Redis","Distributed Systems"],
    enAnswer: "A Cache Stampede occurs when a hot cache key expires under heavy load, causing thousands of concurrent requests to hit the database simultaneously. Mitigation includes Mutex Locks and XFetch (probabilistic early expiration).",
    bnAnswer: "ক্যাশ স্ট্যাম্পিড (Cache Stampede) ঘটে যখন কোনো গুরুত্বপূর্ণ ক্যাশ কী এক্সপায়ার হয়ে যায় এবং হাজার হাজার ইউজার একই সময়ে ডাটাবেসে রিকোয়েস্ট পাঠায়। মিটিগেশনের জন্য মিউটেক্স লক এবং আর্লি এক্সপায়ারেশন ব্যবহৃত হয়।",
    enExplanation: `### Explanation
Under heavy scale (e.g., 50,000 requests/sec), if a hot cache key (like homepage catalog) expires, the database is flooded with duplicate queries. This can lead to database connection exhaust and system crashes.

### Mitigation Strategies:
1. **Mutex Locking (Single Flight / Distributed Mutex)**:
   - When a cache miss occurs, the application acquires a distributed lock (e.g. Redis lock) for that key.
   - Only the first thread gets the lock to query the DB and update the cache.
   - Other threads wait, retry reading cache, and bypass the DB completely.
2. **XFetch Algorithm (Probabilistic Early Expiration)**:
   - As the cache key approaches its expiration time, the client computes a probability threshold based on DB query time.
   - A random computation decides if the cache should be updated *before* it actually expires. This ensures background update threads write fresh cache data smoothly.
3. **Background Sync Daemon**:
   - The cache never expires via TTL. A background cron job periodically fetches database updates and refreshes the cache.

### Mitigated Flow (Single Flight)
\`\`\`
Threads ---> Cache Miss ---> [ Get Lock ] (Only Thread 1 wins) ---> Query DB
Threads 2,3,4 (Wait/Sleep) ---> Retry Cache ---> [ Cache Updated by Thread 1 ]
\`\`\`

### Real-World Example
A news site homepage expiring its cache. Thousands of requests hit the DB at the same time, causing a connection spike and server crash.

### Best Practice
Implement probabilistic early expiration (XFetch) or single-flight locking, ensuring only one request regenerates the cache.

### Common Mistakes
Simply setting cache keys to expire without locks, allowing high-concurrency requests to slip through to the DB on expiry.

### Real-World Example
A news site homepage expiring its cache. Thousands of requests hit the DB at the same time, causing a connection spike and server crash.

### Best Practice
Implement probabilistic early expiration (XFetch) or single-flight locking, ensuring only one request regenerates the cache.

### Common Mistakes
Simply setting cache keys to expire without locks, allowing high-concurrency requests to slip through to the DB on expiry.`,
    bnExplanation: `### ব্যাখ্যা
যখন অনেক জনপ্রিয় একটি ক্যাশ কী (যেমন হোমপেজ ডাটা) এক্সপায়ার হয়ে যায় এবং ঐ সেকেন্ডে আসা হাজার হাজার রিকোয়েস্ট একসাথে মেইন ডাটাবেসকে কুয়েরি করে, তাকে **ক্যাশ স্ট্যাম্পিড (Cache Stampede)** বলে। এর ফলে ডাটাবেস সার্ভার ক্রাশ করতে পারে।
- **সমাধানের উপায়**:
  ১. **মিউটেক্স লকিং (Mutex Locking)**: ক্যাশ মিউটেক্স ব্যবহার করে শুধুমাত্র ১ম রিকোয়েস্টটিকে ডাটাবেসে যাওয়ার পারমিশন দেওয়া। বাকি রিকোয়েস্টগুলো ১ম জনের ডাটা রাইট করা পর্যন্ত ওয়েট করে সরাসরি ক্যাশ থেকে ডাটা নেয়।
  ২. **আর্লি রিফ্রেশ**: ক্যাশ কী সম্পূর্ণ নষ্ট হওয়ার ৫-১০ সেকেন্ড আগেই ব্যাকগ্রাউন্ডে অ্যাসিনক্রোনাস থ্রেড দিয়ে ডাটা রিফ্রেশ করে নেওয়া।

### বাস্তব-ভিত্তিক উদাহরণ
জনপ্রিয় কোনো লাইভ খেলার স্কোর পেজের ক্যাশ নষ্ট হয়ে গেলে হাজার হাজার ব্যবহারকারী একযোগে ডাটাবেসে রিকোয়েস্ট পাঠানো।

### উত্তম অনুশীলন
ক্যাশ মিউটেক্স লকিং অথবা XFetch আর্লি এক্সপায়ার অ্যালগরিদম ব্যবহার করুন যাতে একই সাথে একের বেশি কুয়েরি ডাটাবেসে না যায়।

### সাধারণ ভুল
কোনো মিউটেক্স লক ছাড়া গ্লোবালি খুব জনপ্রিয় হট-কী এক্সপায়ার করে দেওয়া, যার ফলে ক্যাশ নষ্ট হওয়া মাত্রই ডাটাবেস কুয়েরির বন্যায় ডাউন হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
জনপ্রিয় কোনো লাইভ খেলার স্কোর পেজের ক্যাশ নষ্ট হয়ে গেলে হাজার হাজার ব্যবহারকারী একযোগে ডাটাবেসে রিকোয়েস্ট পাঠানো।

### উত্তম অনুশীলন
ক্যাশ মিউটেক্স লকিং অথবা XFetch আর্লি এক্সপায়ার অ্যালগরিদম ব্যবহার করুন যাতে একই সাথে একের বেশি কুয়েরি ডাটাবেসে না যায়।

### সাধারণ ভুল
কোনো মিউটেক্স লক ছাড়া গ্লোবালি খুব জনপ্রিয় হট-কী এক্সপায়ার করে দেওয়া, যার ফলে ক্যাশ নষ্ট হওয়া মাত্রই ডাটাবেস কুয়েরির বন্যায় ডাউন হয়ে যায়।`
  },
  {
    id: "system-design-48",
    title: "Explain the internal write path of Apache Cassandra (CommitLog, Memtable, SSTable, Compaction).",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Databases","Cassandra","Storage Engines","NoSQL"],
    enAnswer: "Cassandras write path is optimized for speed. Writes are appended to an on-disk CommitLog and written to an in-memory Memtable. When the Memtable is full, it is flushed sequentially to an on-disk SSTable.",
    bnAnswer: "ক্যাসান্দ্রার রাইট পাথ গতির জন্য অপ্টিমাইজড। রাইটগুলো ডিস্কের CommitLog-এ যুক্ত হয় এবং মেমোরির Memtable-এ লেখা হয়। Memtable পূর্ণ হলে তা ডিস্কের SSTable-এ ফ্ল্যাশ করা হয়।",
    enExplanation: `### Explanation
Cassandra achieves high write speeds by avoiding random disk seeks:
1. **CommitLog**: When a write request arrives, it is immediately appended to the on-disk CommitLog. This is a sequential log file, acting as a crash-recovery backup.
2. **Memtable**: The write is then stored in the Memtable—a sorted write buffer in RAM. Once written to Memtable, the database acknowledges write success. (Ultra-fast!).
3. **SSTable (Sorted String Table)**: When the Memtable reaches capacity, it is flushed to disk as an immutable SSTable file. Since SSTables are sorted, writes are sequential and fast.
4. **Compaction**: Because data is never modified in-place, updates create duplicate entries across different SSTables. A background process called **Compaction** merges SSTables, discards deleted records (tombstones), and retains only the latest update.

### Write Path Flow
\`\`\`
[Write Request] ---> Write [ CommitLog (Disk) ] (Sequential Backup)
               \\---> Write [ Memtable (RAM) ] (Fast ACK)
                             | (When full, flush)
                             v
                     [ SSTables (Disk) ] <--- Compaction merges files
\`\`\`

### Real-World Example
Apache Cassandra writing logs sequentially to disk, enabling high write throughput for financial event streams.

### Best Practice
Configure Cassandra Compaction carefully; keep SSTable sizes optimal to prevent read amplification from slowing down lookups.

### Common Mistakes
Over-compacting SSTables manually during peak hours, which consumes disk I/O and CPU, severely degrading application throughput.

### Real-World Example
Apache Cassandra writing logs sequentially to disk, enabling high write throughput for financial event streams.

### Best Practice
Configure Cassandra Compaction carefully; keep SSTable sizes optimal to prevent read amplification from slowing down lookups.

### Common Mistakes
Over-compacting SSTables manually during peak hours, which consumes disk I/O and CPU, severely degrading application throughput.`,
    bnExplanation: `### ব্যাখ্যা
ক্যাসান্দ্রা (Cassandra) একটি নোএসকিউএল ডাটাবেস যা অত্যন্ত দ্রুত ডাটা রাইট করার জন্য লিনিয়ার রাইট পাথ ব্যবহার করে:
১. **CommitLog**: ডাটা রিসিভ করার সাথে সাথে সিকোয়েন্সিয়ালি ডিস্কের CommitLog ফাইলে লিখে রাখা হয় যাতে সার্ভার ক্রাশ করলেও ডাটা রিকভার করা যায়।
২. **Memtable**: এরপর ডাটা মেমোরির Memtable-এ লেখা হয়। এটি সম্পন্ন হলেই ব্যবহারকারী সাকসেসফুল মেসেজ পেয়ে যায়।
৩. **SSTable**: মেমোরি বাফার ফুল হলে তা ডিস্কে একটি ইমিউটেবল SSTable ফাইল হিসেবে সেভ করা হয়।
৪. **কম্প্যাকশন (Compaction)**: ব্যাকগ্রাউন্ড প্রসেস যা মাল্টিপল SSTable ফাইলগুলোকে মার্চ করে ডুপ্লিকেট বা ডিলিট হওয়া রেকর্ডগুলো বাদ দিয়ে ফাইল সাইজ অপ্টিমাইজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
আইওটি ডিভাইস বা সেন্সরের প্রতি সেকেন্ডের তাপমাত্রা ডাটাবেসে রাইট করতে Cassandra-র sequential রাইট পাথ ব্যবহার।

### উত্তম অনুশীলন
কম্প্যাকশন পলিসি ঠিকভাবে কনফিগার করুন এবং ডিস্ক আই/ও স্পাইক এড়াতে পিক ট্রাফিকের সময় হেভি কম্প্যাকশন রান করা পরিহার করুন।

### সাধারণ ভুল
সার্ভারের পিক-আওয়ারে ম্যানুয়ালি হেভি কম্প্যাকশন প্রসেস রান করা, যা ডিস্কের সমস্ত রিড/রাইট ব্যান্ডউইথ শেষ করে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
আইওটি ডিভাইস বা সেন্সরের প্রতি সেকেন্ডের তাপমাত্রা ডাটাবেসে রাইট করতে Cassandra-র sequential রাইট পাথ ব্যবহার।

### উত্তম অনুশীলন
কম্প্যাকশন পলিসি ঠিকভাবে কনফিগার করুন এবং ডিস্ক আই/ও স্পাইক এড়াতে পিক ট্রাফিকের সময় হেভি কম্প্যাকশন রান করা পরিহার করুন।

### সাধারণ ভুল
সার্ভারের পিক-আওয়ারে ম্যানুয়ালি হেভি কম্প্যাকশন প্রসেস রান করা, যা ডিস্কের সমস্ত রিড/রাইট ব্যান্ডউইথ শেষ করে ফেলে।`
  },
  {
    id: "system-design-49",
    title: "Compare Blue-Green, Canary, and Rolling Zero-Downtime Deployment Strategies.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Deployments","CI/CD","DevOps","High Availability"],
    enAnswer: "Blue-Green runs two identical production environments to switch traffic instantly. Canary routes a tiny percentage of traffic to the new version first. Rolling updates servers step-by-step within the active cluster.",
    bnAnswer: "ব্লু-গ্রিন (Blue-Green) দুটি সমতুল্য প্রোডাকশন এনভায়রনমেন্টের মধ্যে তাৎক্ষণিক ট্রাফিক সুইচ করে। ক্যানারি (Canary) শুরুতে মাত্র ২-৫% ট্রাফিক নতুন ভার্সনে পাঠায়। রোলিং (Rolling) ধাপে ধাপে ক্লাস্টারের সার্ভার নোড আপডেট করে।",
    enExplanation: `### Explanation
Zero-Downtime deployments ensure services remain online during code updates:
- **Blue-Green Deployment**:
  - Maintain two identical environments: Blue (active production) and Green (new release).
  - Test the Green environment. Once verified, switch the load balancer routing target from Blue to Green.
  - **Pros**: Instant rollback (just route back to Blue). **Cons**: Double infrastructure cost.
- **Canary Deployment**:
  - Deploy the new version to a single server/pod.
  - Route a small fraction of traffic (e.g. 5%) to this canary instance.
  - Monitor logs and error rates. If clean, roll out the update to the remaining servers.
  - **Pros**: Safest deployment method. Limits blast radius of bugs.
- **Rolling Deployment**:
  - Update service instances sequentially (e.g., 1 server at a time in a 4-server cluster).
  - **Pros**: Zero idle overhead, keeps cluster capacity stable. **Cons**: Rollbacks are slow and complex.

### Deployment Schemes
\`\`\`
Blue-Green:
[Active User Traffic] ---> [ Load Balancer ] ---> [ Environment Blue (V1) ]
                                             x--- [ Environment Green (V2) ] (Test environment)

Canary:
                                 /---> [ Canary Node (V2) - 5% Users ]
[Active User Traffic] ---> [ Load Balancer ]
                                 \\---> [ Production Cluster (V1) - 95% Users ]
\`\`\`

### Real-World Example
Kubernetes updating pods sequentially (Rolling), AWS Route53 switching environments (Blue-Green), or Netflix routing 2% traffic to new UI (Canary).

### Best Practice
Use Canary deployments for high-risk system updates to monitor errors. Use Rolling deployments for standard daily service updates.

### Common Mistakes
Using Blue-Green deployments for systems with stateful local databases without database replication, leading to data inconsistency.

### Real-World Example
Kubernetes updating pods sequentially (Rolling), AWS Route53 switching environments (Blue-Green), or Netflix routing 2% traffic to new UI (Canary).

### Best Practice
Use Canary deployments for high-risk system updates to monitor errors. Use Rolling deployments for standard daily service updates.

### Common Mistakes
Using Blue-Green deployments for systems with stateful local databases without database replication, leading to data inconsistency.`,
    bnExplanation: `### ব্যাখ্যা
অ্যাপ্লিকেশন আপডেট করার সময় ইউজার যেন কোনো ডাউনটাইম বা সার্ভিস অফলাইন না দেখে, সেজন্য বিভিন্ন ডিপ্লয়মেন্ট টেকনিক ব্যবহার করা হয়:
- **Blue-Green**: দুটি হুবহু একই রকম প্রোডাকশন সার্ভার এনভায়রনমেন্ট রেডি রাখা হয়। নতুন ভার্সন গ্রিন এনভায়রনমেন্টে রেডি করে লোড ব্যালেন্সারের রাউটিং ডিরেক্ট সুইচের মাধ্যমে আগের ব্লু থেকে নতুন গ্রিনে চলে যায়। এতে কোনো ভুল হলে সাথে সাথে আবার ব্লু-তে ব্যাক করা যায়।
- **Canary**: পুরো সিস্টেমে মাত্র একটি বা দুটি সার্ভারে নতুন কোড ডিপ্লয় করে ৫% র্যান্ডম ইউজারের কাছে পাঠানো হয়। কোনো এরর না আসলে ধীরে ধীরে বাকি ৯৫% সার্ভার আপডেট করা হয়। এটি সবচেয়ে সেফ মেথড।
- **Rolling**: ক্লাস্টারের সার্ভারগুলো একে একে আপডেট করা। যেমন, ১ নং আপডেট করার সময় বাকি ৩টি সচল থাকে। এভাবে ধাপে ধাপে সব নোড আপগ্রেড হয়।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসে রোলিং আপডেট ব্যবহার করে একে একে নোড রিস্টার্ট করা অথবা নতুন ফিচারের বাগ চেক করতে ২% ট্রাফিক Canary নোডে পাঠানো।

### উত্তম অনুশীলন
রিস্কি বা বড় ধরনের আর্কিটেকচারাল আপডেটের জন্য ক্যানারি (Canary) এবং সাধারণ রিলিজের জন্য জিরো-ডাউনটাইম রোলিং ডিপ্লয়মেন্ট ব্যবহার করুন।

### সাধারণ ভুল
ডাটাবেস সিঙ্ক বা রেপ্লিকেশন ছাড়া স্টেটফুল ডাটাসহ সিস্টেমে ব্লু-গ্রিন ডিপ্লয়মেন্ট করা, যা ইউজারের ডাটার অসঙ্গতি তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসে রোলিং আপডেট ব্যবহার করে একে একে নোড রিস্টার্ট করা অথবা নতুন ফিচারের বাগ চেক করতে ২% ট্রাফিক Canary নোডে পাঠানো।

### উত্তম অনুশীলন
রিস্কি বা বড় ধরনের আর্কিটেকচারাল আপডেটের জন্য ক্যানারি (Canary) এবং সাধারণ রিলিজের জন্য জিরো-ডাউনটাইম রোলিং ডিপ্লয়মেন্ট ব্যবহার করুন।

### সাধারণ ভুল
ডাটাবেস সিঙ্ক বা রেপ্লিকেশন ছাড়া স্টেটফুল ডাটাসহ সিস্টেমে ব্লু-গ্রিন ডিপ্লয়মেন্ট করা, যা ইউজারের ডাটার অসঙ্গতি তৈরি করে।`
  },
  {
    id: "system-design-50",
    title: "Explain the Leader Election process in distributed clusters using consensus nodes.",
    difficulty: "advanced",
    category: "system-design",
    tags: ["Consensus","Leader Election","Raft","High Availability"],
    enAnswer: "Leader election is the process of choosing a single coordinator node (Leader) from a cluster of servers. If the leader fails, consensus nodes vote based on log completeness to appoint a new leader.",
    bnAnswer: "লিডার ইলেকশন হলো সার্ভার ক্লাস্টারের নোডগুলোর মধ্য থেকে একটি নোডকে লিডার বা কোঅর্ডিনেটর হিসেবে বেছে নেওয়া। লিডার ডাউন হলে নোডগুলো লগের ভিত্তিতে নতুন লিডার নির্বাচন করতে ভোট দেয়।",
    enExplanation: `### Explanation
In distributed master-slave configurations, one node must coordinate actions. If this leader node crashes, the cluster must dynamically elect a new leader to restore functionality.

### Raft Leader Election Workflow:
1. **Heartbeat Timeout**: Follower nodes expect periodic heartbeats from the Leader. If a follower does not receive a heartbeat within a randomized timeout window (e.g. 150ms-300ms), the follower changes its state to **Candidate** and increments the election term counter.
2. **Requesting Votes**: The Candidate votes for itself and broadcasts a \`RequestVote\` RPC to all other cluster nodes.
3. **Voting Rules**: A follower node grants its vote to a candidate only if:
   - It hasn't voted for another candidate in the current term.
   - The candidate's log is at least as up-to-date as the voter's own log (ensuring committed data is never lost).
4. **Acquiring Leadership**: If the Candidate receives votes from a majority of nodes in the cluster (e.g., 3 out of 5), it is elected the new **Leader** and immediately begins broadcasting heartbeats to assert its authority.

### Why Randomized Timeouts?
Randomizing the heartbeat timeout prevents "split-brain" scenarios where multiple nodes become candidates at the exact same millisecond, leading to split votes and stale/infinite election rounds.

### Leader Election Transition
\`\`\`
[ Follower ] ---> (No Heartbeat) ---> [ Candidate ] (Request Votes)
                                           |
                   +-----------------------+-----------------------+
                   | (Majority Votes Won)                          | (Election Timeout)
                   v                                               v
              [ Leader ]                                      [ Start New Term ]
\`\`\`

### Real-World Example
Etcd electing a new leader node when the current Kubernetes control plane coordinator goes offline.

### Best Practice
Configure randomized election timeouts (e.g., 150ms-300ms) to reduce split-vote scenarios where multiple nodes become candidates simultaneously.

### Common Mistakes
Setting the election timeout too low in networks with high latency, causing nodes to continuously trigger false elections.

### Real-World Example
Etcd electing a new leader node when the current Kubernetes control plane coordinator goes offline.

### Best Practice
Configure randomized election timeouts (e.g., 150ms-300ms) to reduce split-vote scenarios where multiple nodes become candidates simultaneously.

### Common Mistakes
Setting the election timeout too low in networks with high latency, causing nodes to continuously trigger false elections.`,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড ক্লাস্টারে ডাটা লিখতে বা কোঅর্ডিনেশন করতে একজন মাস্টার বা লিডার নোড দরকার। লিডার সার্ভার ডাউন হলে সার্ভার নোডগুলো নিজেদের মধ্যে ভোটাভুটির মাধ্যমে ডাইনামিকালি একজন নতুন লিডার নোড বেছে নেয়।
- **Raft লিডার ইলেকশনের ধাপসমূহ**:
  ১. **হার্টবিট টাইমআউট**: ফলোয়ার নোডগুলো লিডারের সংকেত পাওয়ার জন্য ওয়েট করে। র্যান্ডম টাইমআউটের (যেমন, ১৫০-৩০০ মিলিসেকেন্ড) মধ্যে সংকেত না আসলে নোডটি নিজের স্টেট পরিবর্তন করে **Candidate** নোড হয়।
  ২. **ভোটের আবেদন**: ক্যান্ডিডেট নোডটি নিজের জন্য ১টি ভোট ধরে বাকি সব নোডকে ভোট দিতে মেসেজ পাঠায়।
  ৩. **ভোটিং পলিসি**: নোডগুলো ক্যান্ডিডেটের ডাটা লগ চেক করে ভোট দেয়। যার লগ বেশি আপডেট, সে ভোট পায়।
  ৪. **সংখ্যাগরিষ্ঠতা**: ক্যান্ডিডেট যদি মোট নোডের সংখ্যাগরিষ্ঠ ভোট পায় (যেমন, ৫টির মধ্যে ৩টি), তবে সে নতুন **Leader** হয়ে বাকিদের কাছে আবার হার্টবিট পাঠানো শুরু করে।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসের etcd ক্লাস্টারে লিডার নোড ডাউন হলে অন্য নোডগুলোর মধ্য থেকে ভোটাভুটি করে নতুন লিডার বেছে নেওয়া।

### উত্তম অনুশীলন
ভোটে টাই হওয়া (Split Vote) এড়াতে ক্যান্ডিডেটদের ইলেকশন টাইমআউট র্যান্ডমলি (যেমন, ১৫০ থেকে ৩০০ মিলি-সেকেন্ড) সেট করুন।

### সাধারণ ভুল
হাই-লেটেন্সি সম্পন্ন নেটওয়ার্ক ক্লাস্টারে ইলেকশন টাইমআউট খুব কম সেট করে রাখা, যার ফলে নোডগুলো বারবার লিডার ইলেকশন ট্রিগার করে জটলা পাকায়।

### বাস্তব-ভিত্তিক উদাহরণ
কুবারনেটিসের etcd ক্লাস্টারে লিডার নোড ডাউন হলে অন্য নোডগুলোর মধ্য থেকে ভোটাভুটি করে নতুন লিডার বেছে নেওয়া।

### উত্তম অনুশীলন
ভোটে টাই হওয়া (Split Vote) এড়াতে ক্যান্ডিডেটদের ইলেকশন টাইমআউট র্যান্ডমলি (যেমন, ১৫০ থেকে ৩০০ মিলি-সেকেন্ড) সেট করুন।

### সাধারণ ভুল
হাই-লেটেন্সি সম্পন্ন নেটওয়ার্ক ক্লাস্টারে ইলেকশন টাইমআউট খুব কম সেট করে রাখা, যার ফলে নোডগুলো বারবার লিডার ইলেকশন ট্রিগার করে জটলা পাকায়।`
  }
];
