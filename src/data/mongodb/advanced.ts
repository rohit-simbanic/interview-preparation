import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'mongodb-71',
    title: 'Explain the MongoDB Replica Set Election Process and Primary Node Failover mechanics.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Replica Set', 'High Availability', 'Database Administration'],
    enAnswer: 'MongoDB replica sets achieve high availability through automated failover. If the primary node becomes unavailable, voting members detect this via heartbeats (default 2s interval) and trigger an election. The node with the highest priority, most up-to-date oplog, and a majority of votes from voting members is elected as the new primary.',
    bnAnswer: 'মঙ্গোডিবি রেপ্লিকা সেট স্বয়ংক্রিয় ফেইলওভারের মাধ্যমে হাই অ্যাভেইল্যাবিলিটি নিশ্চিত করে। প্রাইমারি নোড কোনো কারণে ডাউন হলে অন্যান্য নোড হার্টবিট (ডিফল্ট ২ সেকেন্ড) না পেয়ে নির্বাচন (election) শুরু করে। যে নোডের প্রায়োরিটি সবচেয়ে বেশি, অপলগ (oplog) সবচেয়ে আপ-টু-ডেট এবং যা অধিকাংশ মেম্বারের ভোট পায়, সেটি নতুন প্রাইমারি নির্বাচিত হয়।',
    enExplanation: `### Explanation
When a replica set's primary node fails, the secondary nodes elect a new primary:
1. **Heartbeats**: Every node sends heartbeats to all other members every 2 seconds. If a node doesn't respond within 10 seconds (the \`electionTimeoutMillis\` threshold), it is marked as unreachable.
2. **Election Trigger**: If the primary is unreachable, a secondary node sets itself to the \`candidate\` state and initiates an election.
3. **Voting Rules**: Only voting members (up to 7 voting members out of 50 total members) can cast votes. A candidate must receive a majority of the configured voting members' votes to become primary.
4. **Tie Breakers**:
   - **Priority**: Nodes with priority 0 can never become primary. Candidates with higher priority are preferred.
   - **Oplog Position**: A node cannot become primary if its oplog is behind other voting members. This prevents data loss.

### Real-World Example
If your replica set has 3 nodes (1 Primary, 2 Secondaries) in different regions, and the primary data center experiences a power outage:
- The 2 secondaries detect the outage in ~10 seconds.
- An election is triggered, and one of the secondaries becomes the new primary in <12 seconds.
- The client driver automatically reconnects write operations to the new primary.

### Best Practice
Ensure you have an odd number of voting members (e.g., 3, 5, or 7) to avoid split-brain scenarios or tie votes. If you have an even number of nodes, add an Arbiter (which votes but does not store data).

### Common Mistakes
Setting an even number of members without an arbiter (e.g., 2 nodes). If one node fails, the remaining node cannot form a majority (which is 2 out of 2) and cannot elect itself as primary, leaving the set in read-only mode.

### Code Example
\`\`\`javascript
// View replica set status and election configurations
rs.status();

// Check heartbeat and election timeouts in replica set config
rs.config().settings;
/* Output:
{
  "heartbeatIntervalMillis": 2000,
  "electionTimeoutMillis": 10000,
  "catchUpTimeoutMillis": -1,
  "catchUpTakeoverDelayMillis": 30000
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রাইমারি নোড ডাউন হলে মঙ্গোডিবি রেপ্লিকা সেটের নোডগুলো নিজেদের মধ্যে নির্বাচন করে নতুন প্রাইমারি ঠিক করে:
১. **হার্টবিট (Heartbeats)**: প্রতিটি নোড প্রতি ২ সেকেন্ড পর পর অন্য নোডগুলোকে চেক করে। ১০ সেকেন্ডের মধ্যে (ডিফল্ট \`electionTimeoutMillis\`) রেসপন্স না পেলে নোডটিকে ডাউন ধরা হয়।
২. **নির্বাচন শুরু**: প্রাইমারি নোড ডাউন হলে যেকোনো সেকেন্ডারি নোড ক্যান্ডিডেট হয়ে নির্বাচন আহ্বান করে।
৩. **ভোট প্রদান**: সর্বোচ্চ ৭টি ভোটিং মেম্বার (মোট ৫০টি নোডের মধ্যে) ভোট দিতে পারে। নতুন প্রাইমারি হতে হলে মোট ভোটিং মেম্বারের সংখ্যাগরিষ্ঠের (majority) ভোট পেতে হবে।
৪. **বাধ্যবাধকতা**:
   - **Priority**: প্রায়োরিটি ০ থাকলে সেই নোড কখনোই প্রাইমারি হতে পারবে না।
   - **Oplog**: যে নোডের ডাটা (oplog) সবচেয়ে বেশি আপ-টু-ডেট, কেবল সেই নোডই জয়ী হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি, ৩টি নোড বিশিষ্ট রেপ্লিকা সেটে হঠাৎ প্রাইমারি সার্ভার ক্র্যাশ করল। অন্য ২টি নোড ১০ সেকেন্ডের মধ্যে এটি বুঝতে পেরে ভোট করে একটি সেকেন্ডারি নোডকে প্রাইমারি বানিয়ে দেয়। ক্লায়েন্ট ড্রাইভার স্বয়ংক্রিয়ভাবে নতুন প্রাইমারির সাথে কানেক্ট হয়ে রাইট অপারেশন চালু রাখে।

### উত্তম অনুশীলন
ভোট যেন টাই (Tie) না হয় সেজন্য ভোটিং মেম্বারের সংখ্যা সর্বদা বিজোড় (৩, ৫ বা ৭) রাখুন। জোড় নোড থাকলে ডাটা ছাড়া শুধু ভোট দেওয়ার জন্য একটি আর্বিটার (Arbiter) নোড যোগ করুন।

### সাধারণ ভুলসমূহ
আর্বিটার ছাড়া ২ নোডের রেপ্লিকা সেট করা। ১টি নোড ডাউন হলে বাকি ১টি নোড কখনো মেজরিটি (২ এর মধ্যে ২) পাবে না, ফলে ডাটাবেস পার্মানেন্টলি রিড-অনলি মোডে চলে যাবে।

### Code Example
\`\`\`javascript
// রেপ্লিকা সেটের স্ট্যাটাস ও তথ্য দেখা
rs.status();

// কনফিগারেশনে টাইমআউট প্যারামিটার চেক করা
rs.config().settings;
/* আউটপুট:
{
  "heartbeatIntervalMillis": 2000,
  "electionTimeoutMillis": 10000,
  "catchUpTimeoutMillis": -1,
  "catchUpTakeoverDelayMillis": 30000
}
*/
\`\`\``
  },
  {
    id: 'mongodb-72',
    title: 'Explain Replica Set Read Preferences and their appropriate use cases.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Replica Set', 'Read Preference', 'Database Administration'],
    enAnswer: 'Read preference determines how MongoDB clients route read queries to replica set members. The modes are: primary (default, read from primary only), primaryPreferred (read from secondary if primary is down), secondary (read from secondaries only), secondaryPreferred (read from primary if secondaries are down), and nearest (read from lowest latency node).',
    bnAnswer: 'রিড প্রেফারেন্স নির্ধারণ করে ক্লায়েন্ট কীভাবে রেপ্লিকা সেটের নোডগুলোর কাছে রিড কুয়েরি পাঠাবে। মোডগুলো হলো: primary (শুধু প্রাইমারি থেকে পড়বে), primaryPreferred (প্রাইমারি না থাকলে সেকেন্ডারি থেকে পড়বে), secondary (শুধু সেকেন্ডারি নোড থেকে পড়বে), secondaryPreferred (সেকেন্ডারি না থাকলে প্রাইমারি থেকে পড়বে), এবং nearest (সবচেয়ে কম ল্যাটেন্সির নোড থেকে পড়বে)।',
    enExplanation: `### Explanation
By default, all reads and writes go to the primary node to ensure strict consistency. Read preferences let you distribute read load:

| Read Preference Mode | Description | Consistency | Use Case |
|---|---|---|---|
| \`primary\` (default) | Reads always go to the primary. | Strong | Critical transactions, user profile updates. |
| \`primaryPreferred\` | Reads go to primary, fallback to secondaries. | Strong/Eventual | High availability reads. |
| \`secondary\` | Reads always go to secondaries. | Eventual | Heavy reports, analytics, background backups. |
| \`secondaryPreferred\`| Reads go to secondaries, fallback to primary. | Eventual | Offloading read traffic from primary. |
| \`nearest\` | Reads go to the node with lowest network ping. | Eventual | Multi-region globally distributed apps. |

### Real-World Example
In a global social media application:
- User posts and likes are read with \`primary\` or \`primaryPreferred\` to ensure immediate consistency when posting.
- Generating a monthly PDF engagement report for business users uses \`secondary\` so the heavy table scans don't degrade the main database performance.

### Best Practice
Do not use \`secondary\` read preference to scale general application reads blindly. Because replication is asynchronous, secondaries may return stale data, which can cause subtle application bugs (e.g., a user updates their password but still sees the old one).

### Common Mistakes
Using \`nearest\` expecting strong consistency. Since it routes to whichever node is closest (even a secondary with replication lag), users in different regions may read drastically outdated states of the database.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Mongoose Connection with Read Preference set to secondary
mongoose.connect('mongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=myRepl&readPreference=secondary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Or set per-query read preference
const users = await User.find({ status: 'active' }).read('secondaryPreferred');
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে সমস্ত রিড-রাইট অপারেশন প্রাইমারি নোডে যায়। রিড লোড কমানোর জন্য মঙ্গোডিবি নিচে বর্ণিত রিড প্রেফারেন্স মোডগুলো অফার করে:

| রিড প্রেফারেন্স মোড | বিবরণ | কনসিস্টেন্সি | ব্যবহারের ক্ষেত্র |
|---|---|---|---|
| \`primary\` (ডিফল্ট) | সর্বদা প্রাইমারি নোড থেকে রিড করবে। | স্ট্রং (Strong) | ফাইন্যান্সিয়াল পেমেন্ট বা ক্রিটিক্যাল ডাটা রিড। |
| \`primaryPreferred\` | প্রথমে প্রাইমারি, ডাউন থাকলে সেকেন্ডারি। | স্ট্রং/ইভেনচুয়াল | উচ্চ নির্ভরযোগ্য রিড। |
| \`secondary\` | সর্বদা সেকেন্ডারি নোড থেকে রিড করবে। | ইভেনচুয়াল (Eventual) | ভারী রিপোর্ট জেনারেশন, ব্যাকগ্রাউন্ড অ্যানালিটিক্স। |
| \`secondaryPreferred\`| প্রথমে সেকেন্ডারি, না থাকলে প্রাইমারি। | ইভেনচুয়াল | প্রাইমারি সার্ভারের রিড লোড কমানো। |
| \`nearest\` | নেটওয়ার্ক ল্যাটেন্সি যার কম তার থেকে পড়বে। | ইভেনচুয়াল | গ্লোবাল মাল্টি-রিজিয়ন অ্যাপ্লিকেশন। |

### বাস্তব-ভিত্তিক উদাহরণ
একটি সোশ্যাল মিডিয়া অ্যাপে:
- ইউজার যখন নতুন ছবি পোস্ট করে তা দেখতে \`primary\` বা \`primaryPreferred\` ব্যবহার করা হয় যাতে সাথে সাথে এটি দেখা যায়।
- মাসের শেষে ইউজারদের অ্যানালিটিক্স পিডিএফ রিপোর্ট তৈরির কুয়েরিগুলোতে \`secondary\` রিড প্রেফারেন্স ব্যবহার করা হয় যাতে মূল সার্ভারের ওপর প্রভাব না পড়ে।

### উত্তম অনুশীলন
অ্যাপের রিড কুয়েরির চাপ কমানোর জন্য পাইকারি হারে \`secondary\` ব্যবহার করবেন না। রেপ্লিক্যাশন অ্যাসিনক্রোনাস হওয়ায় সেকেন্ডারি নোডে ডাটা পৌঁছাতে একটু সময় লাগতে পারে, যা ইউজারকে পুরোনো ডাটা দেখাবে।

### সাধারণ ভুলসমূহ
স্ট্রং কনসিস্টেন্সি আশা করে \`nearest\` মোড ব্যবহার করা। এটি নেটওয়ার্ক দূরত্ব বিবেচনা করে সেকেন্ডারি নোড থেকেও রিড করতে পারে যা রেপ্লিক্যাশন ল্যাগের কারণে পুরোনো ডাটা দেখাতে পারে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// মঙ্গুস কানেকশনে কানেকশন স্ট্রিংয়েই সেকেন্ডারি রিড সেট করা
mongoose.connect('mongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=myRepl&readPreference=secondary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// অথবা কুয়েরি স্তরে রিড প্রেফারেন্স সেট করা
const users = await User.find({ status: 'active' }).read('secondaryPreferred');
\`\`\``
  },
  {
    id: 'mongodb-73',
    title: 'How do you design a Shard Key in MongoDB? Compare Ranged vs Hashed Sharding.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Sharding', 'Database Design', 'Scaling'],
    enAnswer: 'A shard key determines the distribution of documents across shards. Ranged sharding groups documents by ranges of the shard key, ideal for range queries but prone to hotspots with monotonically increasing keys. Hashed sharding uses an MD5 hash of the key to distribute documents evenly, preventing hotspots but making range queries inefficient.',
    bnAnswer: 'শার্ড কি (shard key) নির্ধারণ করে ডকুমেন্টস কোন শার্ডে জমা হবে। Ranged sharding কি-এর রেঞ্জের ওপর ভিত্তি করে ডাটা বিন্যাস করে যা রেঞ্জ কুয়েরির জন্য ভালো, তবে ক্রমান্বয়ে বৃদ্ধি পাওয়া ভ্যালুর ক্ষেত্রে হটস্পট তৈরি করে। Hashed sharding এমডি৫ হ্যাশ মান দিয়ে ডাটা সমানভাবে ছড়িয়ে দেয়, যা হটস্পট এড়ায় কিন্তু রেঞ্জ কুয়েরি স্লো করে দেয়।',
    enExplanation: `### Explanation
Sharding scales MongoDB horizontally. Selecting the right shard key is critical and cannot be easily changed in older versions without collection re-creation.

**1. Ranged Sharding**:
- Splits data into chunks based on values (e.g., \`{ age: 1 }\`).
- **Advantage**: Queries targeting ranges (e.g., \`age > 20 and age < 30\`) only hit shards containing those chunks.
- **Disadvantage**: If you shard on an auto-incrementing ID or timestamp, all new writes will hit the exact same chunk on a single shard (hotspotting), defeating the purpose of horizontal scaling.

**2. Hashed Sharding**:
- Hashes the field value to determine target shard (e.g., \`{ _id: "hashed" }\`).
- **Advantage**: Uniform distribution of write traffic across all shards even with sequential keys.
- **Disadvantage**: A range query (e.g., \`_id > 1000\`) must broadcast the query to every single shard (scatter-gather) because sequential documents are scattered.

**Criteria for a Good Shard Key:**
- **High Cardinality**: The field must have many unique values (e.g., \`userId\`, not \`status\`).
- **Low Frequency**: No single value should represent a huge percentage of data (e.g., avoiding \`countryCode\` if 95% of users are from one country).
- **Query Patterns**: The shard key should match the most frequent query filters so the mongos router can target specific shards.

### Real-World Example
In a SaaS application with millions of users, sharding on \`{ tenantId: 1, _id: 1 }\` (Compound Shard Key) is highly effective. It groups each tenant's data together (good for tenant range queries) while maintaining high cardinality.

### Best Practice
Use compound shard keys combining a low-cardinality routing field with a high-cardinality unique field (e.g. \`{ companyId: 1, userId: 1 }\`). This satisfies both write distribution and query targeting.

### Common Mistakes
Sharding on a field like \`created_at\` using Ranged Sharding. This creates write bottlenecks on the maximum value shard while other shards sit idle.

### Code Example
\`\`\`javascript
// Enable sharding on database
sh.enableSharding("e-commerce");

// Shard a collection using Hashed Sharding
sh.shardCollection("e-commerce.orders", { _id: "hashed" });

// Shard a collection using a Compound Shard Key (Ranged)
sh.shardCollection("e-commerce.users", { tenantId: 1, email: 1 });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
শার্ডিং মঙ্গোডিবিকে হরিজন্টালি স্কেল করে। সঠিক শার্ড কি সিলেক্ট করা অত্যন্ত গুরুত্বপূর্ণ:

**১. Ranged Sharding (রেঞ্জ-ভিত্তিক শার্ডিং):**
- এটি মানের রেঞ্জের ওপর ভিত্তি করে ডাটা ভাগ করে (যেমন: \`{ age: 1 }\`)।
- **সুবিধা**: নির্দিষ্ট সীমার কুয়েরিগুলো (যেমন: বয়স ২০ থেকে ৩০) কেবল নির্দিষ্ট শার্ডে হিট করে।
- **অসুবিধা**: ক্রমবর্ধমান আইডির (ID) ওপর রেঞ্জ শার্ডিং করলে সব নতুন রাইট কুয়েরি শেষ শার্ডে গিয়ে হিট করবে (হটস্পট), যা হরিজন্টাল স্কেলিং ব্যাহত করবে।

**২. Hashed Sharding (হ্যাশ-ভিত্তিক শার্ডিং):**
- এটি মানের MD5 হ্যাশ করে ডাটা শার্ডে বণ্টন করে (যেমন: \`{ _id: "hashed" }\`)।
- **সুবিধা**: রাইট কুয়েরি প্রতিটি শার্ডে সমানভাবে বিভক্ত হয়।
- **অসুবিধা**: রেঞ্জ কুয়েরি রান করলে সব শার্ড স্ক্যান করতে হয় (Scatter-gather) কারণ ক্রমানুসারী ডাটা ভিন্ন ভিন্ন শার্ডে থাকে।

**একটি ভালো শার্ড কি-এর বৈশিষ্ট্য:**
- **High Cardinality**: ফিল্ডে প্রচুর ইউনিক ভ্যালু থাকতে হবে (যেমন: \`userId\`, \`status\` নয়)।
- **Low Frequency**: কোনো একটি মানের ডাটা যেন অস্বাভাবিক বেশি না হয় (যেমন: \`countryCode\`, যদি ৯০% ইউজার একই দেশের হয়)।
- **Query Patterns**: কুয়েরি ফিল্টারের সাথে শার্ড কি মিল থাকা উচিত যাতে রাউটার সঠিক নোডে কুয়েরি পাঠাতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মাল্টি-টেন্যান্ট SaaS অ্যাপে \`{ tenantId: 1, _id: 1 }\` (কম্পাউন্ড শার্ড কি) ব্যবহার করা খুবই কার্যকর। এটি একই টেন্যান্টের সব ডাটা এক শার্ডে রাখে আবার কম্পাউন্ড হিসেবে ইউনিক আইডি থাকায় ডাটা সমানভাবে শার্ডে বিন্যস্ত হয়।

### উত্তম অনুশীলন
কম্পাউন্ড শার্ড কি ব্যবহার করুন যা একটি রাউটিং ফিল্ড এবং একটি ইউনিক আইডি ফিল্ডের সমন্বয়ে গঠিত (যেমন: \`{ companyId: 1, userId: 1 }\`)। এতে রাইট ডিস্ট্রিবিউশন ও কুয়েরি টার্গেটিং দুটিই অর্জিত হয়।

### সাধারণ ভুলসমূহ
ক্রমবর্ধমান ফিল্ড যেমন \`created_at\`-এর ওপর Ranged Sharding করা। এতে সব নতুন রাইট একটি নির্দিষ্ট শার্ডে গিয়ে লোড ফেলে এবং বাকি শার্ডগুলো অলস বসে থাকে।

### Code Example
\`\`\`javascript
// ডাটাবেসে শার্ডিং এনাবল করা
sh.enableSharding("e-commerce");

// Hashed Sharding ব্যবহার করে কালেকশন শার্ড করা
sh.shardCollection("e-commerce.orders", { _id: "hashed" });

// Compound Shard Key (Ranged) ব্যবহার করে শার্ড করা
sh.shardCollection("e-commerce.users", { tenantId: 1, email: 1 });
\`\`\``
  },
  {
    id: 'mongodb-74',
    title: 'Explain the internal mechanics of MongoDB Change Streams and how to ensure resumability.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Change Streams', 'Real-time', 'Oplog', 'Database Architecture'],
    enAnswer: 'Change Streams allow applications to access real-time data changes by tailing the replication oplog. Resumability is achieved using a resume token (_id field of the change event) which contains epoch times, transaction details, and UUID. Passing this token via resumeAfter or startAfter allows resuming the stream from the exact disconnection point.',
    bnAnswer: 'চেঞ্জ স্ট্রিম (Change Streams) রেপ্লিক্যাশন অপলগ (oplog) ট্র্যাকিংয়ের মাধ্যমে রিয়েল-টাইম ডাটা পরিবর্তন অ্যাপে পাঠায়। রেজুমেবিলিটি (পুনরায় চালু করার ক্ষমতা) নিশ্চিত করা হয় রেজুমে টোকেন (ইভেন্টের \`_id\` ফিল্ড) দিয়ে, যার মধ্যে সময়, ট্রানজ্যাকশন আইডি ও UUID থাকে। এই টোকেনটি \`resumeAfter\` বা \`startAfter\`-এ পাস করে সংযোগ বিচ্ছিন্ন হওয়ার নিখুঁত পয়েন্ট থেকে পুনরায় কাজ শুরু করা যায়।',
    enExplanation: `### Explanation
Change Streams read the internal \`oplog.rs\` collection in a replica set or sharded cluster:
1. **Oplog Requirement**: Change Streams only work on replica sets or sharded clusters because they rely on the replication log.
2. **Resume Tokens**: Every change event returned by a change stream contains an \`_id\` field, which serves as a unique **resume token**.
3. **Resuming**:
   - **\`resumeAfter\`**: Resumes the stream after the specified change event. The event itself is not re-sent.
   - **\`startAfter\`**: Resumes the stream *at* or after the event. Unlike \`resumeAfter\`, it can resume from invalidating events (like collection drops).
4. **Oplog Retention**: Resumability depends on the oplog size. If the stream is down longer than the oplog window, the resume token is lost, and the stream will throw an error when attempting to resume.

### Real-World Example
In a real-time collaborative tool (like Google Docs clone):
- A Node.js microservice listens to change streams on the \`documents\` collection to push updates via WebSockets.
- If the Node.js process crashes, it retrieves the last successfully processed resume token from Redis on startup.
- It resumes the stream using \`resumeAfter(token)\` to avoid missing any updates that occurred during the crash downtime.

### Best Practice
Always store the processed resume token in a persistent, low-latency store (like Redis or a separate database collection) on every change event. Configure a large enough oplog window to accommodate potential application downtime.

### Common Mistakes
Forgetting that schema-modifying events (like \`drop\` or \`rename\`) invalidate the stream. If you use \`resumeAfter\` on an invalidating event, it will fail; use \`startAfter\` for these cases.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function watchOrders() {
  const Order = mongoose.model('Order');
  
  // Retrieve saved token from Redis/DB
  const lastResumeToken = await getSavedResumeToken(); 
  
  const changeStream = Order.watch([], {
    // Resume stream from the exact event position
    resumeAfter: lastResumeToken, 
    fullDocument: 'updateLookup' // Include full document state
  });

  changeStream.on('change', async (next) => {
    console.log('Change detected:', next);
    
    // Save resume token dynamically for resilience
    await saveResumeToken(next._id); 
  });

  changeStream.on('error', (err) => {
    console.error('Stream error:', err);
    // Trigger reconnection logic
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
চেঞ্জ স্ট্রিম রেপ্লিকা সেটের বা শার্ডেড ক্লাস্টারের ইন্টারনাল \`oplog.rs\` কালেকশন রিড করে:
১. **অপলগ বাধ্যবাধকতা**: এটি ব্যবহারের জন্য অবশ্যই রেপ্লিকা সেট বা শার্ডেড ক্লাস্টার থাকতে হবে, কারণ এটি রেপ্লিক্যাশন লগের ওপর নির্ভরশীল।
২. **রেজুমে টোকেন (Resume Tokens)**: প্রতিটি চেঞ্জ ইভেন্ট অবজেক্টে একটি অনন্য \`_id\` থাকে যা টোকেন হিসেবে কাজ করে।
৩. **পুনরায় কানেকশন স্থাপন (Resuming)**:
   - **\`resumeAfter\`**: পাস করা ইভেন্ট আইডির ঠিক পরের ঘটনা থেকে স্ট্রিমিং শুরু করে।
   - **\`startAfter\`**: ইভেন্টটির অবস্থান বা তার পর থেকে শুরু করে। এটি কালেকশন ড্রপের মতো বিশেষ ক্ষেত্রেও স্ট্রিমিং চালু করতে পারে।
৪. **অপলগ সাইজ**: কতক্ষণ আগের ইভেন্ট রিকভার করা যাবে তা ওপলগের সাইজের ওপর নির্ভর করে। ওপলগ উইন্ডো পার হয়ে গেলে টোকেনটি ডাটাবেস থেকে ডিলিট হয়ে যায় এবং রিজিউম করতে গেলে এরর দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
রিয়েল-টাইম কোলাবোরেটিভ অ্যাপ্লিকেশনে:
- নোড সার্ভার ডকুমেন্টস কালেকশনের ওপর চেঞ্জ স্ট্রিম লিসেন করে কাজ করছে।
- যদি নোড সার্ভার ক্র্যাশ করে, তবে রিস্টার্টের সময় এটি রেডিস (Redis) থেকে লাস্ট সেভ করা রেজুমে টোকেনটি পড়ে নেয়।
- তারপর \`resumeAfter\` দিয়ে পুনরায় কানেক্ট করায় ক্র্যাশ ডাউনটাইমের সময় ইউজারদের করা কোনো এডিট মিস হয় না।

### উত্তম অনুশীলন
প্রতিটি চেঞ্জ ইভেন্ট পাওয়ার পর তার রেজুমে টোকেনটি রেডিস বা মেমোরিতে সেভ করে রাখুন। প্রোডাকশন সার্ভারে ওপলগ সাইজ বড় রাখুন যাতে সার্ভার ১ ঘণ্টা ডাউন থাকলেও ওপলগ ওভাররাইট না হয়ে যায়।

### সাধারণ ভুলসমূহ
কালেকশন ড্রপ হওয়ার মতো ইভেন্টে \`resumeAfter\` ব্যবহার করা, যা কাজ করবে না। এ ধরণের কালেকশন রিসেট ইভেন্টগুলোতে নতুন করে স্ট্রিমিং চালু করতে \`startAfter\` ব্যবহার করতে হয়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function watchOrders() {
  const Order = mongoose.model('Order');
  
  // রেডিস থেকে সর্বশেষ রেজুমে টোকেন রিড করা
  const lastResumeToken = await getSavedResumeToken(); 
  
  const changeStream = Order.watch([], {
    resumeAfter: lastResumeToken, 
    fullDocument: 'updateLookup' // আপডেটেড ডকুমেন্টের পুরো বডি রিটার্ন করবে
  });

  changeStream.on('change', async (next) => {
    console.log('পরিবর্তন চিহ্নিত হয়েছে:', next);
    
    // ভবিষ্যতের ক্র্যাশ এড়াতে টোকেন সেভ করা
    await saveResumeToken(next._id); 
  });

  changeStream.on('error', (err) => {
    console.error('স্ট্রিমিং এরর:', err);
    // রিকানেকশন লজিক ট্রিগার করা
  });
}
\`\`\``
  },
  {
    id: 'mongodb-75',
    title: 'Explain WiredTiger Storage Engine Caching mechanisms and how to tune the cache size.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['WiredTiger', 'Storage Engine', 'Caching', 'Performance'],
    enAnswer: 'WiredTiger uses an internal cache to hold indexes and documents in memory, separate from the filesystem cache. By default, it allocates 50% of (Physical RAM - 1GB) or 256MB, whichever is larger. Tuning requires balancing the eviction rate of clean and dirty pages, preventing cache eviction queues from blocking write tickets.',
    bnAnswer: 'WiredTiger ফাইলসিস্টেম ক্যাশের বাইরে ইমেমোরি ইনডেক্স ও ডকুমেন্টস সংরক্ষণে একটি অভ্যন্তরীণ ক্যাশ ব্যবহার করে। ডিফল্টভাবে এটি মোট র‍্যামের ৫০% থেকে ১ জিবি বাদ দিয়ে (RAM - 1GB) অথবা ২৫৬ এমবি (যা বড়) ক্যাশ মেমোরি হিসেবে নেয়। এটি টিউন করতে ক্লিন ও ডার্টি পেজের ইভিকশন রেট এবং রাইট টিকিটের ব্লক হওয়া এড়ানো গুরুত্বপূর্ণ।',
    enExplanation: `### Explanation
WiredTiger manages data transfer between disks and memory:
1. **Internal Cache vs Filesystem Cache**:
   - **Internal Cache**: Holds uncompressed documents, index structures, and transaction logs. WiredTiger manages this directly.
   - **Filesystem Cache**: MongoDB relies on the operating system's page cache to store compressed database files on disk. The OS manages this.
2. **Eviction Process**: WiredTiger monitors "dirty" data (pages modified in memory but not written to disk) and "clean" data in cache:
   - Eviction starts when cache utilization passes 80%.
   - Application threads begin doing eviction work if dirty pages exceed 20% of cache, which causes severe write latencies (eviction pressure).
3. **Tuning Formula**:
   $$\\text{Cache Size} = 0.50 \\times (\\text{Total RAM} - 1\\text{GB})$$
   If you have a dedicated 16GB RAM database server, the default WiredTiger cache size will be $0.50 \\times (16 - 1) = 7.5\\text{GB}$.

### Real-World Example
If your MongoDB instance shares a server with a memory-hungry Node.js app on a 16GB instance, leaving MongoDB at default cache size will cause the server to run out of memory (OOM) and crash because Node.js and WiredTiger compete for the same physical RAM.

### Best Practice
On a dedicated database server, use the default cache size. If other processes run on the same server, manually constrain WiredTiger's cache size to prevent OOM errors, but keep it large enough to hold your "working set" (indexes + frequently accessed documents).

### Common Mistakes
Setting the WiredTiger cache size to 90% of total server RAM. This starves the OS Page Cache (filesystem cache), which MongoDB relies on to read compressed files from disk, resulting in high disk read I/O.

### Code Example
\`\`\`ini
# In mongod.conf (Configuration File)
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  wiredTiger:
    engineConfig:
      # Manually set internal cache size to 4GB
      cacheSizeGB: 4
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
WiredTiger হার্ডডিস্ক ও মেমোরির মধ্যে ডাটা ট্রান্সফার প্রসেস নিয়ন্ত্রণ করে:
১. **Internal vs Filesystem Cache**:
   - **Internal Cache**: এখানে আন-কম্প্রেসড অবজেক্ট, ইনডেক্স এবং ট্রানজ্যাকশন লগ সংরক্ষিত থাকে। এটি WiredTiger নিজে ম্যানেজ করে।
   - **Filesystem Cache**: অপারেটিং সিস্টেমের ক্যাশ যা কম্প্রেসড ফাইল রিড-রাইট ফাস্ট করতে কাজ করে।
২. **Eviction প্রসেস**: মেমোরিতে মডিফাই করা কিন্তু ডিস্কে রাইট না হওয়া ডাটাকে "ডার্টি পেজ" (dirty pages) বলে। ক্যাশ যখন ৮০% ফুল হয়, তখন পুরোনো ক্লিন ডাটা মুছে নতুন ডাটার জায়গা করা হয় (Eviction)। ডার্টি পেজ ক্যাশের ২০% পার করলে মূল রাইট থ্রেডগুলো থমকে গিয়ে রাইট পারফরম্যান্স স্লো করে দেয়।
৩. **ক্যাশ নির্ধারণ সূত্র**:
   $$\\text{ক্যাশ সাইজ} = ০.৫০ \\times (\\text{মোট র‍্যাম} - ১\\text{জিবি})$$
   অর্থাৎ ১৬ জিবি র‍্যামের একটি ডেডিকেটেড সার্ভারে WiredTiger ৭.৫ জিবি র‍্যাম রিজার্ভ করে রাখবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ১৬ জিবি র‍্যামের সার্ভারে যদি আপনার এক্সপ্রেস অ্যাপ্লিকেশন এবং মঙ্গোডিবি একসাথেই চলে, তবে ডিফল্ট ক্যাশ লিমিটের কারণে সার্ভার ওওএম (OOM - Out of memory) এরর খেয়ে ক্র্যাশ করতে পারে। কারণ এক্সপ্রেস অ্যাপ ও মঙ্গোডিবি উভয়েই মেমোরির জন্য লড়াই করবে।

### উত্তম অনুশীলন
ডেডিকেটেড ডাটাবেস সার্ভারে ডিফল্ট কনফিগারেশন রাখুন। তবে শেয়ার্ড সার্ভার হলে মঙ্গোডিবির ক্যাশ লিমিট ম্যানুয়ালি কমিয়ে দিন (যেমন ৪ জিবি), যেন অপারেটিং সিস্টেম ও অন্য অ্যাপ চলার মতো পর্যাপ্ত মেমোরি পায়।

### সাধারণ ভুলসমূহ
সার্ভার র‍্যামের ৯০% ক্যাশ সাইজ হিসেবে WiredTiger-কে দিয়ে দেওয়া। এতে অপারেটিং সিস্টেমের পেজ ক্যাশ ব্লক হয়ে যায় এবং ডিস্ক রিড আইও (Disk I/O) অস্বাভাবিক বৃদ্ধি পায়।

### Code Example
\`\`\`ini
# mongod.conf ফাইলের ভেতর ক্যাশ লিমিট নির্ধারণের কোড
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  wiredTiger:
    engineConfig:
      # ম্যানুয়ালি ইন্টারনাল ক্যাশ ৪ জিবি ডিফাইন করা
      cacheSizeGB: 4
\`\`\``
  },
  {
    id: 'mongodb-76',
    title: 'Detail the Concurrency Control and Locking Model in MongoDB.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Locking', 'Concurrency', 'WiredTiger', 'Database Architecture'],
    enAnswer: 'MongoDB uses Multi-Version Concurrency Control (MVCC) at the storage engine level alongside a hierarchical locking model. Locks are applied at Global (W), Database (D), Collection (C), and Document levels using four lock modes: Shared (S) for reads, Exclusive (X) for writes, Intent Shared (IS), and Intent Exclusive (IX) to coordinate nested resource locking.',
    bnAnswer: 'মঙ্গোডিবি স্টোরেজ ইঞ্জিন লেভেলে Multi-Version Concurrency Control (MVCC) এবং একটি হায়ারার্কিকাল লকিং মডেল ব্যবহার করে। লকগুলো গ্লোবাল (W), ডাটাবেস (D), কালেকশন (C) এবং ডকুমেন্ট স্তরে বিভক্ত। লক মোডগুলো হলো: রিডের জন্য Shared (S), রাইটের জন্য Exclusive (X), এবং নেস্টেড লকিং সমন্বয়ের জন্য Intent Shared (IS) ও Intent Exclusive (IX)।',
    enExplanation: `### Explanation
MongoDB allows multiple clients to read and write data simultaneously using locks and MVCC:
1. **Lock Hierarchy**: To write to a document, MongoDB must acquire an Intent Exclusive (IX) lock on the Global level, IX on the Database, IX on the Collection, and finally an Exclusive (X) lock on the specific document.
2. **Intent Locks (IS / IX)**: These indicate that a thread intends to lock a resource deeper in the hierarchy. This prevents concurrent operations from locking the parent database or collection (e.g., preventing a table drop while a document is being updated).
3. **Lock Yielding**: Long-running read/write operations yield their locks when doing disk access to allow other short operations to execute, avoiding starvation.
4. **MVCC (Multi-Version Concurrency Control)**: WiredTiger uses MVCC to provide snapshot isolation. Readers do not block writers, and writers do not block readers. Reads access a point-in-time snapshot of the data.

### Real-World Example
If User A is updating their cart (IX lock on document) and Admin B runs a collection drop on the products collection (Exclusive X lock on collection):
- Admin B's operation will wait because User A holds an IX lock on the collection hierarchy.
- Once User A's update completes, the collection lock becomes free, and Admin B's drop operation executes.

### Best Practice
Avoid long-running JavaScript execution inside the database (like using \`db.eval()\` in older versions or large unchecked updates) because it holds locks on database objects, causing other application requests to pile up and timeout.

### Common Mistakes
Believing that MongoDB still locks the entire database for every write. Since version 3.0 (WiredTiger), locking is document-level, meaning concurrent writes to different documents in the same collection execute in parallel.

### Code Example
\`\`\`javascript
// Check current database locks and active client sessions
db.currentOp({ "waitingForLock": true });

// Inspect locking metrics in serverStatus
db.serverStatus().locks;
/* Output showing Lock requests and acquisitions by resource type:
{
  "Global": { "acquireCount": { "r": 12, "w": 3, "R": 1, "W": 1 } },
  "Database": { "acquireCount": { "r": 10, "w": 3, "IX": 2 } },
  "Collection": { "acquireCount": { "r": 10, "IX": 2 } }
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি একই সাথে হাজার হাজার রিড ও রাইট কুয়েরি সম্পাদন করতে লক ও MVCC প্রসেস ব্যবহার করে:
১. **লক হায়ারার্কি (Lock Hierarchy)**: একটি ডকুমেন্টে ডাটা রাইট করতে হলে মঙ্গোডিবিকে ক্রমান্বয়ে Global স্তরে Intent Exclusive (IX), Database স্তরে IX, Collection স্তরে IX এবং সবশেষে নির্দিষ্ট ডকুমেন্টে Exclusive (X) লক নিতে হয়।
২. **ইনটেন্ট লক (IS / IX)**: এই লকগুলো প্রকাশ করে যে থ্রেডটি হায়ারার্কির গভীরে কোনো ডাটা লক করছে। এটি পুরো কালেকশন বা ডাটাবেস লক হওয়া থেকে রক্ষা করে (যেমন: ডকুমেন্ট আপডেট করার সময় পুরো টেবিল ড্রপ করা বন্ধ রাখা)।
৩. **লক ইয়েল্ডিং (Yielding)**: কোনো কুয়েরির ডিস্ক থেকে ফাইল রিড করতে সময় লাগলে সে লক ছেড়ে দিয়ে (yield) অন্য কুয়েরিকে সুযোগ দেয়, যাতে সিস্টেম হ্যাং না হয়।
৪. **MVCC**: এর মাধ্যমে রিডার ও রাইটার পরস্পরকে ব্লক করে না। রিড করার সময় মেমোরির একটি স্ন্যাপশট (snapshot) ইউজারকে দেখানো হয়, ফলে রাইট চলার সময়ও রিড কুয়েরি আটকে থাকে না।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি, ইউজার ক একটি প্রোডাক্ট আপডেট করছে (ডকুমেন্ট লেভেলে IX লক)। একই সময়ে অ্যাডমিন খ পুরো কালেকশনটি মুছে দিতে চাইল (কালেকশন লেভেলে X লক)।
- অ্যাডমিন খ এর কুয়েরিটি লাইনে অপেক্ষা করবে কারণ ইউজার ক কালেকশনটির একটি ডকুমেন্টে কাজ করায় কালেকশনে IX লক রয়েছে।
- ইউজার ক এর রাইট শেষ হলে লক রিলিজ হবে এবং অ্যাডমিন খ এর রিকোয়েস্টটি এক্সিকিউট হবে।

### উত্তম অনুশীলন
ডাটাবেসের ভেতরে বড় কাস্টম জাভাস্ক্রিপ্ট স্ক্রিপ্ট রান করা থেকে বিরত থাকুন। এটি পুরো ডাটাবেসে লক বসিয়ে দেয় এবং ইউজারদের সাধারণ রিড-রাইট কুয়েরি রিকোয়েস্টগুলো জ্যাম হয়ে এপিআই টাইমআউট তৈরি করে।

### সাধারণ ভুলসমূহ
ধারণা করা যে মঙ্গোডিবি একটি ডকুমেন্টে রাইট করার সময় পুরো ডাটাবেস লক করে রাখে। ৩.০ ভার্সন থেকে WiredTiger ব্যবহারের ফলে এখন ডকুমেন্ট-লেভেলে লক হয়, অর্থাৎ একই টেবিলে পাশাপাশি বহু রাইট প্যারালালি সম্পন্ন হয়।

### Code Example
\`\`\`javascript
// লকের জন্য আটকে থাকা অ্যাক্টিভ অপারেশনগুলো চেক করা
db.currentOp({ "waitingForLock": true });

// সার্ভার স্ট্যাটাস থেকে লক ডাটা এনালাইসিস করা
db.serverStatus().locks;
/* আউটপুট ফরম্যাট:
{
  "Global": { "acquireCount": { "r": 12, "w": 3, "R": 1, "W": 1 } },
  "Database": { "acquireCount": { "r": 10, "w": 3, "IX": 2 } },
  "Collection": { "acquireCount": { "r": 10, "IX": 2 } }
}
*/
\`\`\``
  },
  {
    id: 'mongodb-77',
    title: 'Explain Time-Series Collections in MongoDB and their internal architectural design.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Time-Series', 'Database Architecture', 'Optimization'],
    enAnswer: 'MongoDB Time-Series collections store sequences of measurements over time efficiently. Internally, they bucket data from the same source over time intervals into a column-oriented format inside a hidden collection. This reduces storage footprint, improves index efficiency, and optimizes query execution on chronological data.',
    bnAnswer: 'টাইম-সিরিজ কালেকশন সময়ের সাথে পরিবর্তিত পরিমাপের ডাটা অত্যন্ত দক্ষভাবে সংরক্ষণ করে। অভ্যন্তরীণভাবে এটি নির্দিষ্ট সময়ের ব্যবধানে একই সোর্সের ডাটাগুলোকে একটি হিডেন কালেকশনে বাকেট (bucket) ও কলাম-ওরিয়েন্টেড ফরম্যাটে গ্রুপ করে। এটি মেমোরি বাঁচায়, ইনডেক্স ছোট রাখে এবং ক্রোনোলজিক্যাল কুয়েরির পারফরম্যান্স বাড়ায়।',
    enExplanation: `### Explanation
Time-series data (e.g., IoT sensors, stock prices) is write-heavy and grows rapidly. Storing each measurement as a standalone document leads to massive storage overhead and huge indexes.

**Internal Design of Time-Series Collections:**
1. **Bucketing**: MongoDB automatically aggregates multiple incoming measurements into a single internal document (bucket).
2. **Hidden Collection**: When you insert data into a time-series collection, MongoDB writes it to a hidden system collection prefixed with \`system.buckets.\`.
3. **Internal Schema**: A bucket document stores:
   - \`metaField\`: The static metadata identifying the source (e.g., \`sensorId: 101\`).
   - \`timeField\`: The timestamp range of the bucket.
   - Arrays of measurements: Instead of duplicate field names, values are stored in arrays under their respective keys.
4. **Columnar Storage**: WiredTiger compresses the bucket arrays using delta-of-delta and double-delta compression, reducing disk space by up to 90%.

### Real-World Example
In a weather monitoring system recording temperature every second:
- **Normal Collection**: 86,400 documents per day per sensor.
- **Time-Series Collection**: MongoDB automatically groups these into a few buckets (e.g., hourly buckets containing 3,600 readings in a single document).

### Best Practice
Always specify the \`metaField\` when creating a time-series collection. Grouping by metadata prevents cross-contamination of buckets, ensuring that queries filtering by sensor/device ID only read relevant buckets.

### Common Mistakes
Updating or deleting data in time-series collections frequently. Time-series collections are optimized for write-once, read-many (immutable) workloads. Dynamic updates/deletes in older versions are heavily restricted or perform poorly.

### Code Example
\`\`\`javascript
// Create a Time-Series collection
db.createCollection("weatherSensorData", {
  timeseries: {
    timeField: "timestamp",     // Time tracking field
    metaField: "sensorId",      // Metadata grouping key
    granularity: "minutes"      // Optional: seconds, minutes, hours
  }
});

// Insert measurement documents (interact with it like a normal collection)
db.weatherSensorData.insertMany([
  { sensorId: "SN-991", timestamp: ISODate("2026-06-19T20:00:00Z"), temp: 22.4 },
  { sensorId: "SN-991", timestamp: ISODate("2026-06-19T20:01:00Z"), temp: 22.5 }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আইওটি সেন্সর, স্টক মার্কেট বা লগ ট্র্যাকিংয়ের ডাটা দ্রুত বাড়ে। সাধারণ কালেকশনে প্রতিটি পরিমাপ আলাদা সেভ করলে ইন্ডেক্স সাইজ বড় হয় ও মেমোরি অপচয় হয়।

**টাইম-সিরিজ কালেকশনের অভ্যন্তরীণ আর্কিটেকচার:**
১. **বাকেটিং (Bucketing)**: মঙ্গোডিবি নির্দিষ্ট সময় পরপর একই সোর্সের পরিমাপগুলোকে একটিমাত্র ডকুমেন্টে বাকেট করে গ্রুপ করে।
২. **হিডেন কালেকশন**: আপনি সরাসরি কালেকশনে লিখলেও মঙ্গোডিবি ব্যাকগ্রাউন্ডে \`system.buckets.\` নামক একটি ইন্টারনাল হিডেন কালেকশনে তা সেভ করে।
৩. **অভ্যন্তরীণ গঠন**: একটি বাকেটের মধ্যে থাকে:
   - \`metaField\`: নির্দিষ্ট ডিভাইসের পরিচিতি (যেমন: \`sensorId: 101\`) যা পুরো বাকেটের জন্য কমন।
   - \`timeField\`: বাকেটের সময়সীমা।
   - ডাটা অ্যারে: রিডিংগুলো ভ্যালুর অ্যারে আকারে স্টোর হয়।
৪. **কম্প্রেশন**: কলামার স্টোরেজ ব্যবহারের ফলে ডাটার ডুপ্লিকেট নাম বাদ যায় এবং ডেল্টা কম্প্রেশন অ্যালগরিদম দিয়ে ডিস্ক স্পেস ৯০% পর্যন্ত হ্রাস পায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি থার্মোমিটার সেন্সর প্রতি সেকেন্ডে ডাটা পাঠায়।
- **স্বাভাবিক কালেকশন**: প্রতিদিন ৮৬,৪০০টি ডকুমেন্ট তৈরি হবে।
- **টাইম-সিরিজ কালেকশন**: মঙ্গোডিবি এগুলোকে অটো গ্রুপ করে হয়তো ২৪টি ডকুমেন্টে (প্রতি ঘণ্টায় ১টি বাকেট) রূপান্তর করবে।

### উত্তম অনুশীলন
টাইম-সিরিজ কালেকশন তৈরির সময় অবশ্যই \`metaField\` সিলেক্ট করুন। এটি ডিভাইসের আইডি অনুযায়ী ডাটা সেপারেশন বজায় রাখে ও কুয়েরি স্পিড বৃদ্ধি করে।

### সাধারণ ভুলসমূহ
টাইম-সিরিজ ডাটাবেসে ঘন ঘন আপডেট বা ডিলিট কুয়েরি চালানো। এই কালেকশনগুলো শুধুমাত্র রাইট-ওয়ান্স (Immutable) ডাটার জন্য অপ্টিমাইজড, ঘন ঘন আপডেট লজিকের জন্য নয়।

### Code Example
\`\`\`javascript
// টাইম-সিরিজ কালেকশন তৈরি করার কমান্ড
db.createCollection("weatherSensorData", {
  timeseries: {
    timeField: "timestamp",     // সময় ট্র্যাকিং ফিল্ড
    metaField: "sensorId",      // মেটাডাটা গ্রুপিং কি
    granularity: "minutes"      // বাকেট সাইজের গুরুত্ব
  }
});

// স্বাভাবিক কালেকশনের মতোই ডাটা ইনসার্ট করা
db.weatherSensorData.insertMany([
  { sensorId: "SN-991", timestamp: ISODate("2026-06-19T20:00:00Z"), temp: 22.4 },
  { sensorId: "SN-991", timestamp: ISODate("2026-06-19T20:01:00Z"), temp: 22.5 }
]);
\`\`\``
  },
  {
    id: 'mongodb-78',
    title: 'Explain Client-Side Field Level Encryption (CSFLE) and how it compares to Encryption-at-Rest.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Security', 'Cryptography', 'CSFLE', 'Compliance'],
    enAnswer: 'Client-Side Field Level Encryption (CSFLE) encrypts sensitive fields in the application driver before sending the data over the network to MongoDB, meaning the database server only stores ciphertext and cannot read the sensitive data. In contrast, Encryption-at-Rest encrypts the database files on disk, but the database process can read decrypted data in memory.',
    bnAnswer: 'ক্লায়েন্ট-সাইড ফিল্ড লেভেল এনক্রিপশন (CSFLE) অ্যাপ্লিকেশন ড্রাইভারেই সংবেদনশীল ফিল্ডগুলো এনক্রিপ্ট করে ডাটাবেসে পাঠায়, যার ফলে মঙ্গোডিবি সার্ভার নিজেও সংবেদনশীল ডাটা পড়তে পারে না। অন্যদিকে, এনক্রিপশন-অ্যাট-রেস্ট (Encryption-at-Rest) ডিস্ক ফাইলগুলো লক করে কিন্তু রানিং ডাটাবেস প্রসেস মেমোরিতে সরাসরি ডাটা রিড করতে পারে।',
    enExplanation: `### Explanation
Data security compliance (such as GDPR or HIPAA) requires strict isolation of Personally Identifiable Information (PII).

**1. Encryption-at-Rest**:
- Protects data files when they are sitting on the physical disk drive.
- Uses storage engine features (e.g., WiredTiger's AES-256 encryption) or operating system disk encryption.
- **Limitation**: A database administrator (DBA) or an attacker who gains root access to the database server can query and read all data in plain text.

**2. Client-Side Field Level Encryption (CSFLE)**:
- The encryption key is managed by an external Key Management Service (KMS) like AWS KMS, Google Cloud KMS, or HashiCorp Vault.
- The application server's MongoDB driver pulls the key, encrypts specific fields (e.g., \`socialSecurityNumber\`), and sends BSON data containing binary ciphertext.
- **Strength**: The database server has zero knowledge of the encryption keys. Even if the entire database is leaked, PII data remains unreadable.

**Encryption Algorithms:**
- **Deterministic**: Returns the same ciphertext for a given plaintext. Allows indexing and equality queries.
- **Randomized**: Returns different ciphertext every time. Highly secure but prevents indexing/searching.

### Real-World Example
In a healthcare application, patient medical history is highly sensitive. Using CSFLE, a patient's \`diagnoses\` field is encrypted on the Node.js backend. Even if a rogue database administrator compromises the database server, they only see binary garbage values.

### Best Practice
Encrypt fields like social security numbers, credit card numbers, and passwords using CSFLE with AWS/GCP KMS. Use deterministic encryption if you need to query by those fields (e.g. searching user by SSN), and randomized encryption for all other fields to prevent pattern analysis.

### Common Mistakes
Storing the Master Key on the database server. If the database server is compromised, the keys are compromised, defeating the entire design of CSFLE.

### Code Example
\`\`\`javascript
const { MongoClient, Binary } = require('mongodb');

// Define encryption schema map
const schemaMap = {
  "medicalDB.patients": {
    bsonType: "object",
    properties: {
      ssn: {
        encrypt: {
          keyId: [new Binary(Buffer.from("my-key-uuid-16-bytes", "hex"), 4)],
          algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic",
          bsonType: "string"
        }
      }
    }
  }
};

// Create client with automatic encryption config
const client = new MongoClient("mongodb://localhost:27017", {
  autoEncryption: {
    keyVaultNamespace: "medicalDB.encryptionKeys",
    kmsProviders: {
      aws: { accessKeyId: "AWS_ACCESS_KEY", secretAccessKey: "AWS_SECRET" }
    },
    schemaMap
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
নিরাপত্তা কমপ্লায়েন্স (যেমন: GDPR, HIPAA) মেলাতে PII (ব্যক্তিগত তথ্য) অত্যন্ত সুরক্ষিত রাখা প্রয়োজন।

**১. Encryption-at-Rest (ডিস্কে এনক্রিপশন):**
- এটি ডাটাবেসের ফিজিক্যাল ফাইলগুলোকে হার্ডডিস্কে এনক্রিপ্ট করে রাখে।
- স্টোরেজ ইঞ্জিনের সাহায্যে (যেমন: WiredTiger AES-256) এটি করা হয়।
- **সীমাবদ্ধতা**: ডাটাবেস প্রসেসের কাছে ডিক্রিপশন কি থাকায় একজন ডিবিএ (DBA) বা সার্ভারে রুট অ্যাক্সেস পাওয়া হ্যাকার চাইলেই কুয়েরি করে সব ডাটা প্লেইন টেক্সটে দেখে নিতে পারবে।

**২. Client-Side Field Level Encryption (CSFLE):**
- অ্যাপ্লিকেশন ড্রাইভার ডাটাবেসে পাঠানোর আগেই নির্দিষ্ট ফিল্ডগুলো এনক্রিপ্ট করে।
- ডিক্রিপশন কি বা চাবি এক্সটার্নাল KMS (যেমন AWS KMS, GCP KMS) দিয়ে ম্যানেজ করা হয়।
- **সুবিধা**: ডাটাবেস সার্ভার চাবি চেনে না। ফলে ডাটাবেস সার্ভার হ্যাক হলেও হ্যাকার কেবল বাইনারি আবর্জনা মান দেখতে পাবে।

**এনক্রিপশন অ্যালগরিদম মোড:**
- **Deterministic**: একই ইনপুটের জন্য সর্বদা একই এনক্রিপ্ট মান দেয়। এটি দিয়ে ইকুয়ালিটি কুয়েরি চালানো ও ইনডেক্স করা যায়।
- **Randomized**: একই ইনপুটের জন্য প্রতিবার আলাদা মান দেয়। এটি বেশি নিরাপদ কিন্তু এর ওপর ইনডেক্স করা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
হেলথকেয়ার অ্যাপে রোগীর রোগের ইতিহাস নোডজেএস ব্যাকেন্ড ড্রাইভারের মাধ্যমে এনক্রিপ্ট করে পাঠানো হয়। ডাটাবেসের কালেকশন ফাইল ও মেমোরিতেও এই ডাটা বাইনারি আকারে সেভ থাকায় ডিবিএ (DBA) সেটি রিড করতে পারে না।

### উত্তম অনুশীলন
ক্রেডিট কার্ড, পাসওয়ার্ড বা জাতীয় পরিচয়পত্রের নম্বরের মতো ডাটাতে CSFLE ব্যবহার করুন। যদি সেই ফিল্ডে সার্চ করার দরকার হয় তবে ডেটারমিনিস্টিক (Deterministic) ব্যবহার করুন, অন্যথায় র্যান্ডমাইজড (Randomized) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মাস্টার কি (Master Key) ডাটাবেস সার্ভারেই টেক্সট ফাইল আকারে রেখে দেওয়া। এতে ডাটাবেস সার্ভার কম্প্রোমাইজ হলে কি-ও লিক হয়ে যায়, যা CSFLE এর মূল উদ্দেশ্য নষ্ট করে।

### Code Example
\`\`\`javascript
const { MongoClient, Binary } = require('mongodb');

// এনক্রিপশন স্কিমা ম্যাপ তৈরি করার নিয়ম
const schemaMap = {
  "medicalDB.patients": {
    bsonType: "object",
    properties: {
      ssn: {
        encrypt: {
          keyId: [new Binary(Buffer.from("my-key-uuid-16-bytes", "hex"), 4)],
          algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic",
          bsonType: "string"
        }
      }
    }
  }
};

// অটো এনক্রিপশন কনফিগারেশন সহ ক্লায়েন্ট সংযোগ
const client = new MongoClient("mongodb://localhost:27017", {
  autoEncryption: {
    keyVaultNamespace: "medicalDB.encryptionKeys",
    kmsProviders: {
      aws: { accessKeyId: "AWS_ACCESS_KEY", secretAccessKey: "AWS_SECRET" }
    },
    schemaMap
  }
});
\`\`\``
  },
  {
    id: 'mongodb-79',
    title: 'Compare Multi-Tenant SaaS Database Design strategies in MongoDB.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['SaaS', 'Database Design', 'Multi-Tenancy', 'Database Architecture'],
    enAnswer: 'Multi-tenancy in MongoDB is achieved using three patterns: Database-per-tenant (highest isolation, complex connection management), Collection-per-tenant (moderate isolation, risk of namespace limits), or Shared-collection with tenantId filtering (e.g., via partial indexes, lowest cost, requires strict tenant isolation logic).',
    bnAnswer: 'মঙ্গোডিবির মাল্টি-টেন্যান্সি ৩টি উপায়ে ডিজাইন করা যায়: Database-per-tenant (সর্বোচ্চ নিরাপত্তা, জটিল কানেকশন পুল), Collection-per-tenant (মাঝারি নিরাপত্তা, নেমস্পেস লিমিটের ঝুঁকি), এবং Shared-collection (সবচেয়ে কম খরচ, tenantId দিয়ে ফিল্টার করতে হয় যা আংশিক ইনডেক্স ব্যবহার করে)।',
    enExplanation: `### Explanation
Designing SaaS (Software-as-a-Service) databases requires deciding how to isolate customer (tenant) data:

**1. Database-per-Tenant**:
- Every customer has a dedicated database (e.g., \`tenant_abc\`, \`tenant_xyz\`).
- **Pros**: Strongest security isolation. Easy backup/restore per tenant.
- **Cons**: High resource cost. Managing connection pools dynamically in Node.js is complex and exhausts socket descriptors.

**2. Collection-per-Tenant**:
- Tenants share a database but have separate collections (e.g., \`orders_tenant1\`, \`orders_tenant2\`).
- **Pros**: Logical separation without multiple database pings.
- **Cons**: Scale bottleneck. MongoDB has a maximum limit on database namespace metadata. Too many collections degrade metadata operations.

**3. Shared Collection (Logical Isolation)**:
- Tenants share the same collections. Every document includes a \`tenantId\` field.
- **Pros**: Lowest resource consumption. Extremely easy to run queries across all tenants.
- **Cons**: Risk of data leakage if a developer forgets to filter by \`tenantId\`.

### Real-World Example
In a SaaS accounting application:
- A shared-collection design is used. To prevent cross-tenant data leaks, a Mongoose middleware automatically appends \`tenantId\` to all \`find\`, \`update\`, and \`delete\` queries. A compound index of \`{ tenantId: 1, _id: 1 }\` secures fast lookups.

### Best Practice
For small to medium scale B2B SaaS, use the **Shared Collection** model with Mongoose middleware to inject the \`tenantId\` automatically. Use **Database-per-Tenant** only if customers require strict regulatory compliance (e.g. finance/government) and are willing to pay for dedicated cluster instances.

### Common Mistakes
Using the database-per-tenant pattern with a microservices backend without connection pooling limits. This will quickly exhaust MongoDB's connection limit, causing API crashes.

### Code Example
\`\`\`javascript
// Mongoose middleware to enforce Tenant Isolation in a Shared Collection model
const orderSchema = new mongoose.Schema({
  tenantId: { type: String, required: true, index: true },
  productId: String,
  amount: Number
});

// Pre-find hook to automatically restrict query results to the active tenant
orderSchema.pre(/^find/, function(next) {
  const query = this.getQuery();
  
  // Throw error if developer forgot to pass tenant context
  if (query.tenantId === undefined) {
    return next(new Error("Database security error: tenantId context is missing!"));
  }
  next();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
SaaS (Software-as-a-Service) অ্যাপ্লিকেশনে গ্রাহকদের (টেন্যান্ট) ডাটা আলাদা করার ৩টি ডিজাইন প্যাটার্ন রয়েছে:

**১. Database-per-Tenant (টেন্যান্ট প্রতি ডাটাবেস):**
- প্রতিটি গ্রাহকের জন্য পৃথক ডাটাবেস থাকে (যেমন: \`db_tenant1\`, \`db_tenant2\`)।
- **সুবিধা**: সর্বোচ্চ ডাটা সিকিউরিটি। যেকোনো একক টেন্যান্টের ব্যাকআপ আলাদাভাবে রিস্টোর করা যায়।
- **অসুবিধা**: মেমোরির খরচ অনেক বেশি এবং নোডে কানেকশন পুল ডাইনামিকালি হ্যান্ডেল করা জটিল।

**২. Collection-per-Tenant (টেন্যান্ট প্রতি কালেকশন):**
- টেন্যান্টরা একই ডাটাবেস শেয়ার করে কিন্তু কালেকশন আলাদা থাকে (যেমন: \`orders_tenant1\`)।
- **সুবিধা**: ডাটাবেস কানেকশন পরিবর্তনের দরকার হয় না।
- **অসুবিধা**: কালেকশনের সংখ্যা লক্ষাধিক ছাড়িয়ে গেলে মঙ্গোডিবির নেমস্পেস ইনডেক্স লিমিট শেষ হয়ে মেটাডাটা প্রসেস স্লো হয়ে যায়।

**৩. Shared Collection (শেয়ার্ড কালেকশন - লজিক্যাল সেপারেশন):**
- সব টেন্যান্ট একই কালেকশন ব্যবহার করে এবং প্রতিটি ফাইলে \`tenantId\` থাকে।
- **সুবিধা**: মেমোরি খরচ সবচেয়ে কম, ক্লাস্টার মেইনটেইন করা সহজ।
- **অসুবিধা**: কোডে ফিল্টার করতে ভুল করলে এক টেন্যান্টের ডাটা অন্য টেন্যান্টের কাছে লিক হওয়ার ঝুঁকি থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বুককিপিং SaaS অ্যাপে শেয়ার্ড কালেকশন ডিজাইন বেছে নেওয়া হয়েছে। ডাটা লিক এড়াতে একটি গ্লোবাল মঙ্গুস মিডলওয়্যার বসানো আছে যা প্রতি কুয়েরিতে স্বয়ংক্রিয়ভাবে একটি \`tenantId\` যোগ করে। ইনডেক্স করা হয়েছে \`{ tenantId: 1, _id: 1 }\`।

### উত্তম অনুশীলন
সাধারণ SaaS এর জন্য **Shared Collection** ব্যবহার করুন এবং ডাটা লিকেজ রোধে গেটওয়ে/মিডলওয়্যার লেভেলে কঠোর চেকিং বসান। কেবল সর্বোচ্চ পেমেন্ট করা গ্রাহক যাদের ডাটা রেগুলেশন (যেমন ব্যাংকিং) জটিল, তাদের জন্য **Database-per-Tenant** স্ট্র্যাটেজি নিন।

### সাধারণ ভুলসমূহ
মাইক্রোসার্ভিস আর্কিটেকচারে Database-per-Tenant ডিজাইন নিয়ে কোনো লিমিট ছাড়া কানেকশন ওপেন করা। এতে অল্প সময়েই মঙ্গোডিবির কানেকশন লিমিট শেষ হয়ে সার্ভার বন্ধ হয়ে যাবে।

### Code Example
\`\`\`javascript
// শেয়ার্ড কালেকশন মডেলে টেন্যান্ট সিকিউরিটি নিশ্চিত করতে মিডলওয়্যার
const orderSchema = new mongoose.Schema({
  tenantId: { type: String, required: true, index: true },
  productId: String,
  amount: Number
});

// কোনো কুয়েরি রান করার আগে tenantId উপস্থিত থাকা বাধ্যতামূলক করা
orderSchema.pre(/^find/, function(next) {
  const query = this.getQuery();
  
  if (query.tenantId === undefined) {
    return next(new Error("ডাটাবেস সিকিউরিটি এরর: tenantId ফিল্টার অনুপস্থিত!"));
  }
  next();
});
\`\`\``
  },
  {
    id: 'mongodb-80',
    title: 'Explain the mechanics of MongoDB bulk operations and optimizing high-throughput writes using bulkWrite.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Performance', 'bulkWrite', 'Optimization', 'Batch Processing'],
    enAnswer: 'MongoDB bulkWrite() groups multiple write operations (insertOne, updateOne, replaceOne, deleteOne) into a single database network call. It supports ordered execution (stops at first error) and unordered execution (processes all operations in parallel, reporting errors at the end), which significantly reduces round-trip latencies.',
    bnAnswer: 'মঙ্গোডিবির bulkWrite() একাধিক রাইট কুয়েরি অপারেশনকে (যেমন: insertOne, updateOne, deleteOne) একটি মাত্র নেটওয়ার্ক কলে গ্রুপ করে। এটি ordered (প্রথম ভুল পেলে অপারেশন বন্ধ করে) ও unordered (সবগুলো প্যারালালি সম্পন্ন করে শেষে এরর দেখায়) এক্সিকিউশন সমর্থন করে, যা নেটওয়ার্ক যাতায়াত সময় অনেক কমায়।',
    enExplanation: `### Explanation
When dealing with massive data modifications, making individual \`save()\` calls in a loop creates major bottlenecks due to round-trip latency (RTT) between application and database servers.

**How bulkWrite() Works:**
1. **Network Optimization**: Instead of sending 1,000 updates one by one, \`bulkWrite()\` bundles them into a single batch and sends it to the server.
2. **Batch Limits**: The MongoDB driver automatically splits bulk write requests into chunks of maximum **100,000 operations** or **48MB** payload size to prevent packet buffer exhaustion.
3. **Execution Modes**:
   - **Ordered (Default)**: Operations are executed sequentially. If operation \#5 fails, MongoDB immediately aborts and does not process operations 6 to 1,000.
   - **Unordered**: Operations are executed in parallel across shards. If operation \#5 fails, the server continues processing the rest and aggregates all errors into a final report.

### Real-World Example
In a stock price syncing dashboard:
- Every minute, a background job fetches prices for 50,000 tickers.
- Using unordered \`bulkWrite()\`, the script performs upserts for all 50,000 tickers in a single command, taking ~1.5 seconds instead of 40+ seconds if done in a standard loop.

### Best Practice
Set \`{ ordered: false }\` inside bulk write options whenever operations are independent. This allows MongoDB to process the writes concurrently across shard clusters, maximizing CPU utilization.

### Common Mistakes
Mixing huge amounts of inserts and updates in an ordered bulk write when order doesn't matter, which blocks parallel execution pipelines and increases overall execution time.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

async function syncInventory(updates) {
  // Map raw data array to Mongoose bulkWrite operations
  const operations = updates.map(item => ({
    updateOne: {
      filter: { sku: item.sku },
      update: { $set: { quantity: item.qty, price: item.price } },
      upsert: true
    }
  }));

  try {
    const result = await Product.bulkWrite(operations, { 
      ordered: false // Process in parallel for speed
    });
    
    console.log('Bulk write stats:', {
      inserted: result.upsertedCount,
      modified: result.modifiedCount
    });
  } catch (error) {
    console.error('Bulk write encountered errors:', error.writeErrors);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লুপ চালিয়ে হাজার হাজার ডকুমেন্টে সিঙ্গেল \`save()\` কল করলে অ্যাপ ও ডাটাবেসের মধ্যে নেটওয়ার্ক যাতায়াত (Round-Trip Time) বেড়ে ডাটাবেস লক হয়ে যায়।

**bulkWrite() এর কার্যপ্রণালী:**
১. **নেটওয়ার্ক অপ্টিমাইজেশন**: ১,০০০টি আপডেট কুয়েরি ১,০০০ বার না পাঠিয়ে একটি প্যাকেটে মুড়ে একবারে ডাটাবেস সার্ভারে পাঠিয়ে দেয়।
২. **অটো ব্যাচ স্প্লিটিং**: ড্রাইভার নিজেই প্রতি প্যাকেজকে অনূর্ধ্ব **১,০০,০০০ অপারেশন** বা **৪৮ এমবি** পেলোড সাইজে ভাগ করে পাঠায়, যাতে নেটওয়ার্ক বাফারিং ফেটে না যায়।
৩. **এক্সিকিউশন মোড**:
   - **Ordered (ডিফল্ট)**: এটি সিরিয়ালি চলে। ধরি ৫ নম্বর কুয়েরিতে কোনো ভুল হলো, মঙ্গোডিবি সাথে সাথে পুরো প্রসেস থামিয়ে দেবে। পরবর্তী কুয়েরিগুলো আর চলবে না।
   - **Unordered**: এটি প্যারালালি চলে। মাঝখানে কোনো কুয়েরি ফেইল করলেও বাকিগুলোর প্রসেস চলতে থাকে এবং শেষে রিপোর্ট আকারে সমস্ত এরর তালিকা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার বাজারের স্টক রেট সিনক্রোনাইজ করার স্ক্রিপ্টে:
- প্রতি মিনিটে ৫০,০০০ স্টকের লাইভ রেট সিন্ক করতে হয়।
- Unordered \`bulkWrite()\` ব্যবহার করায় ৫০,০০০ রেট আপডেট ১.৫ সেকেন্ডে কমপ্লিট হয়, যা সাধারণ লুপ চালালে ৪০ সেকেন্ডের বেশি সময় নিত।

### উত্তম অনুশীলন
ডাটা অপারেশনের অর্ডার যদি আপনার জন্য গুরুত্বপূর্ণ না হয়, তবে সর্বদা \`{ ordered: false }\` প্যারামিটার সেট করুন। এটি ডাটাবেসের কোর প্রসেসর ও বিভিন্ন শার্ডকে একসাথে কাজে লাগিয়ে রাইট স্পিড কয়েকগুণ বাড়িয়ে দেয়।

### সাধারণ ভুলসমূহ
অর্ডার গুরুত্বপূর্ণ না হওয়া সত্ত্বেও ডিফল্ট Ordered মোডে রাইট চালানো। এতে ডাটাবেস ব্যাকগ্রাউন্ড প্যারালাল প্রসেস বন্ধ করে একটির পর একটি সিঙ্গেল অপারেশন চালাতে থাকে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

async function syncInventory(updates) {
  // ডাটা ম্যাপ করে bulkWrite এর জন্য অ্যারে তৈরি
  const operations = updates.map(item => ({
    updateOne: {
      filter: { sku: item.sku },
      update: { $set: { quantity: item.qty, price: item.price } },
      upsert: true // না থাকলে নতুন তৈরি করবে
    }
  }));

  try {
    const result = await Product.bulkWrite(operations, { 
      ordered: false // স্পিড বাড়ানোর জন্য প্যারালাল রান অন করা
    });
    
    console.log('সিন্ক সম্পন্ন হয়েছে:', {
      inserted: result.upsertedCount,
      modified: result.modifiedCount
    });
  } catch (error) {
    console.error('কিছু অপারেশনে ভুল হয়েছে:', error.writeErrors);
  }
}
\`\`\``
  },
  {
    id: 'mongodb-81',
    title: 'Explain WiredTiger Write-Ticket Starvation and how to diagnose it.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['WiredTiger', 'Performance', 'Troubleshooting', 'Concurrency'],
    enAnswer: 'WiredTiger uses read and write tickets to control concurrent execution threads (default 128 tickets per read/write type). Write-ticket starvation occurs when high disk latency or unindexed queries hold tickets long enough to exhaust the queue, causing incoming write requests to wait and spike database connection counts.',
    bnAnswer: 'WiredTiger কনকারেন্ট এক্সিকিউশন থ্রেড নিয়ন্ত্রণ করতে রিড ও রাইট টিকিট সিস্টেম ব্যবহার করে (ডিফল্টভাবে প্রতিটির জন্য ১২৮টি করে টিকিট থাকে)। রাইট-টিকিট স্টারভেশন (অনাহার) ঘটে যখন হাই ডিস্ক ল্যাটেন্সি বা ইনডেক্সবিহীন কুয়েরি টিকিটগুলো আটকে রাখে এবং কিউ (queue) খালি না থাকায় নতুন রাইট রিকোয়েস্টগুলোর কানেকশন জ্যাম করে ফেলে।',
    enExplanation: `### Explanation
To prevent CPU thrashing and context switching overhead under heavy workloads, WiredTiger limits active executing threads:
1. **Ticket Pool**: By default, WiredTiger allows a maximum of **128 concurrent write operations** and **128 concurrent read operations** to execute in the storage engine at any single millisecond.
2. **Queueing**: If all 128 write tickets are in use, the 129th write request is queued and blocks, waiting for a ticket to become available.
3. **Starvation Causes**:
   - Slow hardware (high disk write latency / poor I/O).
   - Long-running locks or unindexed updates scanning millions of documents.
   - Large bulk operations that choke the system.
4. **Symptoms**: Sudden rise in response times, API timeouts, and a spike in active client connections (\`connections.active\`).

### Real-World Example
During a flash sale, thousands of users write to the database. Due to an unindexed collection check, updates take 500ms instead of 2ms.
- 128 tickets are immediately locked.
- Hundreds of incoming writes wait in queue.
- The Node.js server connection pool fills up, and users start seeing "504 Gateway Timeout" errors.

### Best Practice
Configure alert monitors on your database looking at WiredTiger ticket availability (available tickets dropping near 0). Ensure all updates and deletes are fully indexed to release write tickets in microseconds rather than milliseconds.

### Common Mistakes
Scaling the CPU or memory of the database server thinking it is a system capacity issue. If the bottleneck is disk I/O write latency, the tickets will remain exhausted regardless of CPU cores.

### Code Example
\`\`\`javascript
// Run in mongo shell to inspect active ticket counts
db.serverStatus().wiredTiger.concurrentTransactions;
/* Output showing available tickets:
{
  "write": {
    "out": 128,          // High Alert: All 128 tickets are checked out!
    "available": 0,      // Ticket Starvation! Incoming writes are queued.
    "totalTickets": 128
  },
  "read": {
    "out": 5,
    "available": 123,
    "totalTickets": 128
  }
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কনকারেন্ট থ্রেডের অতিরিক্ত চাপে সিপিইউ ক্র্যাশ হওয়া আটকাতে WiredTiger থ্রেড সংখ্যা সীমিত রাখে:
১. **টিকিট পুল (Ticket Pool)**: ডিফল্টভাবে একই মিলি-সেকেন্ডে এক্সিকিউট হওয়ার জন্য ১২৮টি রিড ও ১২৮টি রাইট টিকিট বরাদ্দ থাকে।
২. **কিউ বা লাইন**: যদি ১২৮টি রাইট টিকিটই কাজে ব্যস্ত থাকে, তবে ১২৯তম রাইট রিকোয়েস্ট লাইনে অপেক্ষা করে এবং টিকিট ফ্রী হওয়ার আগ পর্যন্ত কুয়েরি আটকে থাকে।
৩. **স্টারভেশনের কারণ**:
   - অত্যন্ত স্লো ডিস্ক রাইট স্পিড (High Disk Latency)।
   - ইনডেক্সবিহীন কুয়েরি যা টেবিলে থাকা লক্ষাধিক ডাটা স্ক্যান করতে গিয়ে টিকিট আটকে রেখেছে।
   - অতিরিক্ত ভারী বাল্ক অপারেশন চালানো।
৪. **লক্ষণ**: এপিআই রেসপন্স টাইম হঠাৎ বৃদ্ধি পাওয়া, টাইমআউট হওয়া এবং অ্যাক্টিভ কানেকশন সংখ্যা হু হু করে বাড়া।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ফ্ল্যাশ সেল চলার সময় হাজার হাজার রাইট রিকোয়েস্ট আসছে। কিন্তু প্রোডাক্ট টেবিলে ইনডেক্স না থাকায় প্রতিটি আপডেট ফিনিশ হতে ৫০০ মিলি-সেকেন্ড সময় নিচ্ছে।
- সেকেন্ডের মধ্যে ১২৮টি টিকিট ব্লক হয়ে যায়।
- পরবর্তীতে আসা সব রিকোয়েস্ট লাইনে আটকে যায়।
- নোড সার্ভার কানেকশন পুল ফুল হয়ে যায় এবং ব্যবহারকারীরা ব্রাউজারে গেটওয়ে টাইমআউট এরর দেখতে পান।

### উত্তম অনুশীলন
ডাটাবেস মনিটরিংয়ে WiredTiger টিকিটের ওপর অ্যালার্ট সেট করুন (যেমন এভেইলেবল টিকিট ১০ এর নিচে নামলে অ্যালার্ট)। আপডেট ও ডিলিট কুয়েরির কন্ডিশনে সর্বদা ইনডেক্স ফিল্ড ব্যবহার করুন যাতে মাইক্রো-সেকেন্ডেই কাজ শেষ করে টিকিট ছেড়ে দেওয়া যায়।

### সাধারণ ভুলসমূহ
টিকিট ফুরিয়ে যাওয়ার সমস্যাকে সিপিইউ বা র‍্যামের সমস্যা মনে করে অযথা সার্ভার বিল বাড়ানো। যদি মূল সমস্যা স্লো হার্ডডিস্ক ড্রাইভ বা ইনডেক্সিং হয়, তবে ৩ গুণ শক্তিশালী সার্ভারেও টিকিট স্টারভেশন ঘটবে।

### Code Example
\`\`\`javascript
// মঙ্গো শেলে রানিং টিকিটের বিবরণ চেক করার কমান্ড
db.serverStatus().wiredTiger.concurrentTransactions;
/* আউটপুট বিশ্লেষণ:
{
  "write": {
    "out": 128,          // হাই অ্যালার্ট: ১২৮টি টিকিটই ফুল বুকড!
    "available": 0,      // টিকিট স্টারভেশন! নতুন কুয়েরি প্রসেস হচ্ছে না।
    "totalTickets": 128
  },
  "read": {
    "out": 5,
    "available": 123,
    "totalTickets": 128
  }
}
*/
\`\`\``
  },
  {
    id: 'mongodb-82',
    title: 'How do you perform a Zero-Downtime Database Migration to MongoDB Atlas?',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Migration', 'MongoDB Atlas', 'DevOps', 'Database Administration'],
    enAnswer: 'A zero-downtime migration is achieved using Live Migration in MongoDB Atlas or a manual replica set approach. Atlas Live Migration connects to the source database as a replica set member, replicates all existing data, tails the oplog to keep data synchronized in real-time, and prompts the developer to cut over DNS when lag reaches zero.',
    bnAnswer: 'জিরো-ডাউনটাইম মাইগ্রেশন মঙ্গোডিবি অ্যাটলাসের Live Migration বা ম্যানুয়াল রেপ্লিকা সেট দিয়ে সম্পন্ন হয়। লাইভ মাইগ্রেশন সোর্স ডাটাবেসের সাথে রেপ্লিকা সেটের মতো কানেক্ট হয়ে সমস্ত ডাটা কপি করে, রিয়েল-টাইমে অপলগ (oplog) ট্র্যাকিংয়ের মাধ্যমে ডাটা সিঙ্ক রাখে এবং ল্যাগ ০ মিলি-সেকেন্ড হলে ডেভেলপারকে ডিএনএস কাটার নির্দেশ দেয়।',
    enExplanation: `### Explanation
Migrating databases with gigabytes of active production data without dropping user connections requires a continuous replication strategy:

**Steps for Live Migration:**
1. **Network Connectivity**: Establish a secure connection between MongoDB Atlas and the source database (via IP Whitelisting, VPC Peering, or VPN).
2. **Initial Sync**: Atlas copies all documents, collections, and indexes from the source database. Writes continue on the source database during this process.
3. **Oplog Tailing**: After the initial copy, Atlas tails the source's \`oplog\` in real-time to apply any new changes that occurred during the initial sync.
4. **Synchronization Verification**: The migration dashboard shows the replication lag. Once the lag reaches 0, the databases are identical.
5. **Application Cutover**:
   - Change the application's connection string to point to MongoDB Atlas.
   - Deploy/restart the application.
   - Stop the migration process in Atlas.

### Real-World Example
An online banking dashboard wants to migrate from self-hosted servers in AWS EC2 to MongoDB Atlas. Using Live Migration:
- The sync takes 6 hours to copy 500GB of transactions.
- During these 6 hours, users can still log in and transfer money.
- When replication lag is 0, the DevOps engineer pushes a config update to Kubernetes changing the MongoDB URI, completing the migration in <5 seconds.

### Best Practice
Ensure the source database's oplog window is large enough to hold changes for the entire duration of the initial sync. If the oplog rolls over before the initial sync is complete, the migration will fail and must be restarted.

### Common Mistakes
Configuring the target migration server with lower capacity (e.g. M10 tier) than the source server during migration, causing it to fall behind on oplog synchronization due to write-speed limits.

### Code Example
\`\`\`javascript
// Step 1: Ensure user privileges on source database (Admin database)
// Create a migration user with cluster admin and backup roles
db.createUser({
  user: "atlasMigrationUser",
  pwd: "securePassword123",
  roles: [
    { role: "backup", db: "admin" },
    { role: "readAnyDatabase", db: "admin" },
    { role: "clusterMonitor", db: "admin" }
  ]
});

// Step 2: Ensure source replica set configuration is running
rs.initiate();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লাইভ প্রোডাকশন ডাটাবেস ডাউন না করে ক্লাউড সার্ভারে সরাতে হলে রেপ্লিক্যাশন স্ট্র্যাটেজি অনুসরণ করা হয়:

**লাইভ মাইগ্রেশনের ধাপসমূহ:**
১. **নেটওয়ার্ক সংযোগ**: প্রথমে মঙ্গোডিবি অ্যাটলাস ক্লাস্টার ও সোর্স ডাটাবেসের মধ্যে কানেক্টিভিটি (VPC Peering বা আইপি হোয়াইটলিস্ট) সেট করতে হবে।
২. **ইনিশিয়াল সিঙ্ক**: অ্যাটলাস মূল ডাটাবেসের সমস্ত ডাটা ও ইনডেক্স রিড করে নিজের মেমোরিতে কপি করতে শুরু করে। এ সময় মূল ডাটাবেসে ইউজারদের রাইট অপারেশন অব্যাহত থাকে।
৩. **অপলগ ট্র্যাকিং**: কপি শেষ হলে ব্যাকগ্রাউন্ডের অপলগ (oplog) পড়ে মাইগ্রেশনের সময়কালের গ্যাপ ডাটা রিয়েল-টাইমে সিঙ্ক করে নেয়।
৪. **ডিএনএস কাটওভার**: মঙ্গোডিবি ড্যাশবোর্ডে রেপ্লিক্যাশন ল্যাগ চেক করা হয়। ল্যাগ ০ মিলি-সেকেন্ডে পৌঁছালে এর মানে সোর্স ও টার্গেটের ডাটা হুবহু সমান।
৫. **অ্যাপ্লিকেশন আপডেট**: নোড অ্যাপের কানেকশন ইউআরআই (Connection URI) বদলে অ্যাটলাসের অ্যাড্রেস দিয়ে অ্যাপটি রিস্টার্ট করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ট্রাভেল বুকিং সাইটের ৫০০ জিবি ডাটা সেলফ-হোস্টেড সার্ভার থেকে ক্লাউডে ট্রান্সফার করতে হবে। লাইভ মাইগ্রেশনের মাধ্যমে সিঙ্ক চলতে থাকাবস্থায় গ্রাহকরা টিকিট কাটতে পারেন। ল্যাগ ০ হওয়ার পর সার্ভার রিস্টার্ট করে কানেকশন ইউআরআই পরিবর্তন করা হয় মাত্র ৫ সেকেন্ডে।

### উত্তম অনুশীলন
মাইগ্রেশন শুরুর আগে সোর্স ডাটাবেসের অপলগ সাইজ বা উইন্ডো বড় রাখুন। যদি পুরো ডাটা কপি করতে ৬ ঘণ্টা লাগে এবং অপলগ সাইজ ৩ ঘণ্টার ডেটা ধরে রাখতে পারে, তবে ইনিশিয়াল সিঙ্ক ফেইল করবে।

### সাধারণ ভুলসমূহ
মাইগ্রেশন চলাকালীন টার্গেটের ক্লাস্টার স্পেসিফিকেশন (যেমন CPU/RAM) খুব কম রাখা। এর ফলে টার্গেট সার্ভার সোর্স সার্ভারের স্পিডে অপলগ ডাটা রাইট করতে না পেরে ক্রমাগত ল্যাগের শিকার হয়।

### Code Example
\`\`\`javascript
// ধাপ ১: সোর্স ডাটাবেসে মাইগ্রেশনের জন্য প্রয়োজনীয় পারমিশন সহ ইউজার তৈরি
db.createUser({
  user: "atlasMigrationUser",
  pwd: "securePassword123",
  roles: [
    { role: "backup", db: "admin" },
    { role: "readAnyDatabase", db: "admin" },
    { role: "clusterMonitor", db: "admin" }
  ]
});

// ধাপ ২: সোর্স ডাটাবেসে রেপ্লিকা সেট রানিং থাকা নিশ্চিত করা
rs.initiate();
\`\`\``
  },
  {
    id: 'mongodb-83',
    title: 'Explain FTDC (Full-Time Diagnostic Data Capture) in MongoDB and how to use it to analyze performance issues.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['FTDC', 'Diagnostics', 'Monitoring', 'Troubleshooting'],
    enAnswer: 'FTDC is a built-in diagnostics system that captures statistics about the server (WiredTiger, CPU, OS memory, network) every second. This data is saved as compressed binary files in the diagnostic.data directory under dbPath and is analyzed using diagnostic tools like keyinsight or MongoDB support charts.',
    bnAnswer: 'FTDC হলো মঙ্গোডিবির একটি ইন-বিল্ট ডায়াগনস্টিক সিস্টেম যা প্রতি সেকেন্ডে সার্ভারের স্ট্যাটাস (WiredTiger, CPU, Memory, Network) রেকর্ড করে। এই তথ্য \`dbPath\`-এর অধীনে \`diagnostic.data\` ডিরেক্টরিতে কম্প্রেশন বাইনারি ফাইল হিসেবে থাকে যা \`keyinsight\` বা ক্লাউড চার্টের মাধ্যমে এনালাইসিস করা যায়।',
    enExplanation: `### Explanation
FTDC runs automatically in the background with minimal performance overhead (~1% CPU):
1. **File Location**: Look inside your configured database path (\`dbPath\`). You will find a directory named \`diagnostic.data/\`.
2. **File format**: Files are stored in a binary compressed format (e.g., \`metrics.2026-06-19T14-30-00Z-00000\`).
3. **Recorded Metrics**:
   - **WiredTiger Stats**: Concurrent transactions (tickets), cache activity (dirty pages, read/write latency), checkpoint duration.
   - **OS Metrics**: CPU load, virtual memory stats, disk utilization, network statistics.
   - **Database Stats**: Active connections, lock queue, operations count (inserts, updates, queries).

### Real-World Example
If your database server crashes at 3:00 AM due to CPU spikes, standard logs may only show connection resets. By downloading the FTDC metrics file from \`diagnostic.data/\` and rendering it in an FTDC parser, you can visually see that the cache dirty pages crossed 20% exactly 5 minutes before the crash, pointing to WiredTiger eviction bottleneck.

### Best Practice
Never delete the \`diagnostic.data\` directory to free up space. If you experience severe database performance issues, these files are the single most valuable resource to trace CPU, disk, or cache bottlenecks over time.

### Common Mistakes
Assuming FTDC consumes huge storage space. Because it uses delta-compression (only saving changes between seconds), it rarely exceeds a few hundred megabytes even on busy servers.

### Code Example
\`\`\`bash
# 1. Locate the diagnostic files on the database host
ls -la /var/lib/mongodb/diagnostic.data/

# Typical output:
# -rw-r--r--  1 mongodb mongodb 10243921 Jun 19 20:00 metrics.2026-06-19T20-00-00Z-00000
# -rw-r--r--  1 mongodb mongodb       12 Jun 19 20:01 metrics.interrupted

# 2. Extracting metrics in JSON format using utility tools
# (Note: MongoDB does not provide a built-in CLI tool for parsing FTDC;
# engineers use open-source Go/Python parsers like 'ftdc-utils' to convert it)
# ftdc-utils export metrics.2026-06-19T20-00-00Z-00000 > output.json
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
FTDC কোনো পারফরম্যান্স ক্ষতি ছাড়াই (অনূর্ধ্ব ১% CPU) ব্যাকগ্রাউন্ডে ডায়াগনস্টিক ট্র্যাকিং চালায়:
১. **ফাইলের অবস্থান**: ডাটাবেসের ডাটা ডিরেক্টরির (\`dbPath\`) অধীনে \`diagnostic.data/\` নামক ফোল্ডারে এটি থাকে।
২. **ফরম্যাট**: ফাইলগুলো বাইনারি কম্প্রেসড ফরম্যাটে থাকে (যেমন: \`metrics.2026-06-19T14-30-00Z-00000\`)।
৩. **রেকর্ড হওয়া প্যারামিটার**:
   - **WiredTiger**: কনকারেন্ট ট্রানজ্যাকশন টিকেট, ডার্টি ক্যাশ পেজ, ক্যাশ মেমোরি ইভিকশন স্ট্যাটাস।
   - **OS**: সিপিইউ লোড, ভার্চুয়াল মেমোরি পেজিং, ডিস্ক আইও (I/O) ইউটিলাইজেশন।
   - **Database**: অ্যাক্টিভ কানেকশন, লক কিউ, বিভিন্ন কুয়েরি ভলিউম।

### বাস্তব-ভিত্তিক উদাহরণ
ভোর ৩টায় ডাটাবেস ক্র্যাশ করেছে কিন্তু লগে শুধু "connection reset" লেখা। আপনি \`diagnostic.data\` ফোল্ডারের ফাইলটি নিয়ে FTDC পার্সার টুলে আপলোড করলেন। সেখানে গ্রাফে পরিষ্কার দেখা গেল রাত ২:৫৫ মিনিটে ক্যাশের ডার্টি পেজ সীমা অতিক্রম করে ২০% পার করেছিল, যা রাইট কুয়েরি ব্লক করে ওওএম (OOM) ক্র্যাশ তৈরি করেছে।

### উত্তম অনুশীলন
স্টোরেজ স্পেস বাঁচানোর নাম করে কখনো \`diagnostic.data\` ফোল্ডার ডিলিট করবেন না। ডাটাবেসের যেকোনো জটিল পারফরম্যান্স ডাউনটাইম ডায়াগনোসিস করার জন্য এই ফাইলটিই একমাত্র নির্ভরযোগ্য উৎস।

### সাধারণ ভুলসমূহ
FTDC অনেক জায়গা নষ্ট করে মনে করা। এটি শুধুমাত্র প্রতি সেকেন্ডের পার্থক্যের মান (delta-compression) সেভ করায় ১ মাসের ডাটাও মাত্র কয়েকশ মেগাবাইটের মধ্যে কম্প্রেসড হয়ে থাকে।

### Code Example
\`\`\`bash
# ১. ডাটাবেস হোস্টে ডায়াগনস্টিক ফাইল লোকেশন চেক করা
ls -la /var/lib/mongodb/diagnostic.data/

# ফাইল ফরম্যাটের উদাহরণ:
# -rw-r--r--  1 mongodb mongodb 10243921 Jun 19 20:00 metrics.2026-06-19T20-00-00Z-00000
# -rw-r--r--  1 mongodb mongodb       12 Jun 19 20:01 metrics.interrupted

# ২. ডিকম্প্রেস করতে থার্ড-পার্টি ওপেন সোর্স ftdc-utils ব্যবহার করা যায়
# ftdc-utils export metrics.2026-06-19T20-00-00Z-00000 > output.json
\`\`\``
  },
  {
    id: 'mongodb-84',
    title: 'Explain MongoDB Transaction Internals and how ACID compliance is achieved.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Transactions', 'ACID', 'WiredTiger', 'Database Architecture'],
    enAnswer: 'MongoDB achieves multi-document ACID transactions using sessions. Under the hood, WiredTiger uses snapshots to isolate transactional writes. Writes are kept in memory buffers and not committed to the global state until commitTransaction() is called, which writes all changes to the journal file for durability.',
    bnAnswer: 'মঙ্গোডিবি সেশন (sessions) ব্যবহারের মাধ্যমে মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন সম্পন্ন করে। অভ্যন্তরীণভাবে WiredTiger স্ন্যাপশট আইসোলেশন ব্যবহার করে। ট্রানজ্যাকশন চলাকালীন সমস্ত রাইট মেমোরি বাফারে জমা থাকে এবং \`commitTransaction()\` কল না হওয়া পর্যন্ত গ্লোবাল স্টেটে প্রকাশ পায় না। এটি স্থায়িত্ব নিশ্চিত করতে জার্নাল ফাইলে লেখে।',
    enExplanation: `### Explanation
Since version 4.0, MongoDB supports multi-document transactions inside sessions.

**ACID Compliance Mechanism:**
1. **Atomicity (All-or-Nothing)**: Writes are held in a private transaction buffer. If any step fails or the transaction aborts, all changes are discarded.
2. **Consistency**: Enforced through schema validation rules and unique index constraints.
3. **Isolation (Snapshot Isolation)**: Transactions run inside a dedicated session. The engine reads from a point-in-time snapshot. Concurrent transactions do not see uncommitted writes of other transactions (Read Committed isolation).
4. **Durability**: Upon commit, changes are written to the WiredTiger journal file. If a node crashes post-commit, the journal replay recovers the state.

**Limits & Constraints:**
- **Execution Limit**: Transactions have a default timeout of 60 seconds (\`transactionLifetimeLimitSeconds\`).
- **Storage Limit**: The transaction modifications must fit in the 16MB document size limit because they are logged inside a single oplog entry.

### Real-World Example
In a double-entry bookkeeping financial system:
- When a user transfers $100, you must deduct $100 from Account A and add $100 to Account B.
- A transaction ensures that if the system crashes midway or Account B does not exist, Account A's $100 deduction is rolled back.

### Best Practice
Keep transactions short and modify only a few documents. Long transactions consume WiredTiger transaction tickets, hog cache memory by keeping transaction snapshots alive, and can trigger write conflicts if concurrent writes hit the same documents.

### Common Mistakes
Using transactions for every single write. Transactions have heavy CPU and memory overhead. Use MongoDB's atomic operators (like \`$inc\`, \`$push\`, \`findOneAndUpdate\`) instead of multi-document transactions whenever possible.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function transferFunds(fromAccountId, toAccountId, amount) {
  // Start Client Session
  const session = await mongoose.startSession();
  
  try {
    // Start Transaction
    session.startTransaction();
    
    // 1. Deduct from sender
    await Account.updateOne(
      { _id: fromAccountId },
      { $inc: { balance: -amount } },
      { session }
    );

    // 2. Add to receiver
    await Account.updateOne(
      { _id: toAccountId },
      { $inc: { balance: amount } },
      { session }
    );

    // Commit changes
    await session.commitTransaction();
    console.log("Transaction successfully committed.");
  } catch (error) {
    // Rollback changes on error
    await session.abortTransaction();
    console.error("Transaction aborted due to error:", error);
  } finally {
    // End session
    session.endSession();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি সেশন ও স্ন্যাপশটের সমন্বয়ে মাল্টি-ডকুমেন্ট ট্রানজ্যাকশন সম্পন্ন করে:
১. **Atomicity (অখণ্ডতা)**: রাইট অপারেশনগুলো একটি মেমোরি বাফারে জমা থাকে। কোনো একটি ধাপে এরর হলে সব কাজ বাতিল (abort) হয়ে যায়।
২. **Consistency (সংগতি)**: ইউনিক ইনডেক্স ও ভ্যালিডেশন স্কিমার মাধ্যমে ডাটার সঠিকতা রক্ষা হয়।
৩. **Isolation (বিচ্ছিন্নতা)**: ট্রানজ্যাকশন স্ন্যাপশট আইসোলেশনে চলে। এর মানে একটি ট্রানজ্যাকশন চলাকালীন অন্য কোনো ক্লায়েন্ট ট্রানজ্যাকশনের ভেতরের আন-কমিটেড পরিবর্তন দেখতে পাবে না।
৪. **Durability (স্থায়িত্ব)**: কমিট করার সাথে সাথে সমস্ত পরিবর্তন জার্নাল (journal) ফাইলে লিখে স্থায়ী করা হয়।

**সীমাবদ্ধতা ও নিয়মাবলী:**
- **সময়সীমা**: একটি ট্রানজ্যাকশন সর্বোচ্চ ৬০ সেকেন্ড রানিং থাকতে পারে (\`transactionLifetimeLimitSeconds\`)।
- **সাইজ লিমিট**: ট্রানজ্যাকশনের মোট ডাটা সাইজ ১৬ এমবি-র কম হতে হবে, কারণ পুরো ট্রানজ্যাকশন অপলগে (oplog) একটি মাত্র ডাটা এন্ট্রি হিসেবে সেভ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং সিস্টেমে এক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে টাকা পাঠানোর সময়:
- অ্যাকাউন্ট ক থেকে ১০০ টাকা বিয়োগ এবং অ্যাকাউন্ট খ-তে ১০০ টাকা যোগ করতে হবে।
- ট্রানজ্যাকশন নিশ্চিত করে যে মাঝপথে বিদ্যুৎ চলে গেলে বা খ অ্যাকাউন্টটি না পাওয়া গেলে ক অ্যাকাউন্টের ১০০ টাকা কাটা যাবে না (রোলব্যাক হবে)।

### উত্তম অনুশীলন
ট্রানজ্যাকশন যতটা সম্ভব ছোট রাখুন এবং কম ফাইলে কাজ করুন। লম্বা ট্রানজ্যাকশন WiredTiger মেমোরি লক করে রাখে এবং রাইট কনফ্লিক্ট (Write Conflict) তৈরি করে পারফরম্যান্স ধীর করে দেয়।

### সাধারণ ভুলসমূহ
অ্যাপ্লিকেশনের প্রতিটি সাধারণ আপডেটেও ট্রানজ্যাকশন ব্যবহার করা। ট্রানজ্যাকশনে মেমোরি ও সিপিইউ খরচ বেশি হয়। সম্ভব হলে মঙ্গোডিবির সিঙ্গেল এটমিক অপারেটর (যেমন: \`$inc\`, \`$push\`) ব্যবহার করে ট্রানজ্যাকশন এড়িয়ে চলুন।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function transferFunds(fromAccountId, toAccountId, amount) {
  // সেশন শুরু করা
  const session = await mongoose.startSession();
  
  try {
    // ট্রানজ্যাকশন চালু করা
    session.startTransaction();
    
    // ১. প্রেরকের ব্যালেন্স কমানো
    await Account.updateOne(
      { _id: fromAccountId },
      { $inc: { balance: -amount } },
      { session }
    );

    // ২. প্রাপকের ব্যালেন্স বাড়ানো
    await Account.updateOne(
      { _id: toAccountId },
      { $inc: { balance: amount } },
      { session }
    );

    // পরিবর্তনগুলো স্থায়ী করা
    await session.commitTransaction();
    console.log("ট্রানজ্যাকশন সফল হয়েছে।");
  } catch (error) {
    // ভুল হলে রোলব্যাক করা
    await session.abortTransaction();
    console.error("ট্রানজ্যাকশন বাতিল করা হয়েছে:", error);
  } finally {
    // সেশন ক্লোজ করা
    session.endSession();
  }
}
\`\`\``
  },
  {
    id: 'mongodb-85',
    title: 'Explain the Outlier Pattern and schema design for Many-to-Many Relationships at scale.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Schema Design', 'Data Modeling', 'Outlier Pattern', 'Performance'],
    enAnswer: 'The Outlier Pattern manages documents that exceed typical array limits in relationships. For example, in a many-to-many model, most documents have small arrays of references, but a few "outliers" (like popular users or products) have huge arrays. The pattern handles outliers by spawning overflow documents linked via a hasMore flag, preventing document size limit crashes.',
    bnAnswer: 'আউটলায়ার প্যাটার্ন (Outlier Pattern) অনেক বড় রিলেশনাল অ্যারে সাইজ হ্যান্ডেল করতে ব্যবহৃত হয়। উদাহরণস্বরূপ, মেনি-টু-মেনি রিলেশনে অধিকাংশ ডকুমেন্টের অ্যারে ছোট হলেও কিছু ডকুমেন্টে (যেমন সেলিব্রিটি অ্যাকাউন্ট) লক্ষাধিক ডাটা থাকে। আউটলায়ার প্যাটার্ন এই ডেটাগুলোকে \`hasMore\` ফ্ল্যাগ এবং ওভারফ্লো ডকুমেন্টের সাহায্যে অন্য টেবিলে ভাগ করে মঙ্গোডিবির ১৬ এমবি সাইজ লিমিট রক্ষা করে।',
    enExplanation: `### Explanation
In a document database, embedding arrays is the natural way to represent 1:N or N:M relationships. However, if arrays grow unboundedly, you will hit the **16MB BSON document size limit** and experience query performance degradation because the database has to read massive documents from disk.

**The Outlier Pattern Design:**
- **Standard Document**: Stores typical relationship lists directly inside an array (e.g. up to 1,000 items).
- **Outlier Flag**: If the count exceeds the threshold, you set a boolean flag \`hasMore: true\`.
- **Overflow Document**: Additional items are written to a separate collection linked back to the parent ID. This prevents the primary document from growing beyond boundaries.

### Real-World Example
In a book review app, most books have 10 to 500 reviews, which can be embedded in a book document for fast queries.
- However, a bestseller book might get 500,000 reviews.
- Rather than bloating the bestselling book document to 20MB (which crashes MongoDB), you embed the first 500 reviews in the primary document.
- For the bestseller, set \`hasMore: true\` and save reviews 501 to 500,000 in a separate \`reviews\` collection, queried only when the user clicks "Load More Reviews".

### Best Practice
Design schema models based on statistics, not outliers. If 99% of your data has arrays with <100 items, embed them. Implement the Outlier Pattern explicitly in your application logic to handle the remaining 1% of edge cases cleanly.

### Common Mistakes
Designing relationships strictly as fully referenced collections (relational database style) to avoid the 16MB limit. This results in slow queries due to excessive application-level joins for the 99% of normal documents.

### Code Example
\`\`\`javascript
// Schema representation using Outlier Pattern
// Parent Book Document
{
  "_id": ObjectId("60c72b2f9b1d8b2bad000999"),
  "title": "Bestselling Book",
  "author": "John Doe",
  "reviewCount": 1500,
  "hasMore": true, // Outlier flag: book has overflow reviews
  "reviews": [
    // Embed only the first 5 recent reviews for instant loading
    { "user": "Alice", "rating": 5, "comment": "Amazing!" },
    { "user": "Bob", "rating": 4, "comment": "Good read." }
  ]
}

// Overflow Collection: book_reviews
{
  "_id": ObjectId("60c72b2f9b1d8b2bad0000aa"),
  "bookId": ObjectId("60c72b2f9b1d8b2bad000999"),
  "reviews": [
    // Store batches of additional reviews
    { "user": "Charlie", "rating": 5, "comment": "Outstanding!" },
    { "user": "David", "rating": 3, "comment": "Average." }
  ]
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির ডকুমেন্টে ওয়ান-টু-মেনি বা মেনি-টু-মেনি সম্পর্ক বোঝাতে অ্যারে (Array) ব্যবহার করা সহজ। কিন্তু কোনো অ্যারে যদি আনলিমিটেড বড় হতে থাকে, তবে ডাটাবেসের ১৬ এমবি ফাইল সাইজ লিমিট অতিক্রম করে পারফরম্যান্স ধীর হয়ে যাবে।

**আউটলায়ার প্যাটার্ন ডিজাইন:**
- **সাধারণ ফাইল**: সাধারণত ছোট রিলেশনাল অ্যারেগুলো ডকুমেন্টের ভেতরেই রাখা হয় (যেমন ১০০০টি আইটেম পর্যন্ত)।
- **আউটলায়ার ফ্ল্যাগ**: যদি লিমিট পার হয়ে যায়, তবে ডকুমেন্টে \`hasMore: true\` ফ্ল্যাগ সেট করা হয়।
- **ওভারফ্লো ডকুমেন্ট**: অতিরিক্ত ডাটাগুলো আরেকটি নতুন কালেকশনে পেরেন্ট আইডি লিঙ্ক করে সেভ করা হয়, যাতে মেইন ফাইলের সাইজ না বাড়ে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বইয়ের রিভিউ সাইটে অধিকাংশ বইয়ের ৫০ থেকে ১০০টি রিভিউ থাকে। এগুলোকে বইয়ের ফাইলের ভেতরেই সহজে রাখা যায়।
- কিন্তু একটি তুমুল জনপ্রিয় বইয়ের ৫ লক্ষ রিভিউ আসতে পারে।
- ৫ লক্ষ রিভিউ বইয়ের ফাইলের ভেতর রাখলে ফাইল সাইজ ২০ এমবি হয়ে মঙ্গোডিবি ক্র্যাশ করবে।
- আউটলায়ার প্যাটার্নে প্রথম ১০০টি রিভিউ বইয়ের ফাইলে রেখে \`hasMore: true\` করে দেওয়া হয় এবং বাকি রিভিউগুলো \`book_reviews\` নামক আলাদা কালেকশনে রাখা হয়।

### উত্তম অনুশীলন
ডেটাবেস ডিজাইন করুন ৯৯% সাধারণ কেসের ওপর ভিত্তি করে। যদি আপনার অ্যাপের ৯৯% ডাটা ছোট অ্যারেতে চলে তবে এমবেড করুন। বাকি ১% ব্যতিক্রমী আউটলায়ার কেস সামলাতে কোড লেভেলে আউটলায়ার হ্যান্ডলার যোগ করুন।

### সাধারণ ভুলসমূহ
১৬ এমবি লিমিটের আতঙ্কে সাধারণ রিলেশনের জন্যও সমস্ত ডাটা আলাদা কালেকশনে রাখা এবং SQL-এর মতো জয়েন কুয়েরি চালানো। এতে সাধারণ ইউজারদের ডাটা লোড হওয়ার স্পিড অনেক ধীর হয়ে যায়।

### Code Example
\`\`\`javascript
// আউটলায়ার প্যাটার্নের ফাইল স্ট্রাকচার উদাহরণ
// মূল বুক ডকুমেন্ট
{
  "_id": ObjectId("60c72b2f9b1d8b2bad000999"),
  "title": "জনপ্রিয় বই",
  "author": "লেখক",
  "reviewCount": 1500,
  "hasMore": true, // আউটলায়ার ফ্ল্যাগ: অতিরিক্ত রিভিউ আছে
  "reviews": [
    // ইনস্ট্যান্ট লোড হওয়ার জন্য মাত্র ৫টি সাম্প্রতিক রিভিউ এমবেড করা
    { "user": "সাকিব", "rating": 5, "comment": "দুর্দান্ত!" },
    { "user": "রনি", "rating": 4, "comment": "ভালো বই।" }
  ]
}

// ওভারফ্লো রিভিউ কালেকশন
{
  "_id": ObjectId("60c72b2f9b1d8b2bad0000aa"),
  "bookId": ObjectId("60c72b2f9b1d8b2bad000999"), // পেরেন্ট লিঙ্ক
  "reviews": [
    // পরবর্তী অতিরিক্ত রিভিউগুলো এখানে ব্যাচ আকারে জমা হবে
    { "user": "আসিফ", "rating": 5, "comment": "অসাধারণ!" },
    { "user": "জাহিদ", "rating": 3, "comment": "মোটামুটি।" }
  ]
}
\`\`\``
  },
  {
    id: 'mongodb-86',
    title: 'Explain the ESR (Equality, Sort, Range) rule for creating compound indexes in MongoDB.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Indexing', 'Performance', 'ESR Rule', 'Database Optimization'],
    enAnswer: 'The ESR rule states that when designing compound indexes, fields must be ordered: 1) Equality fields first (exact matches), 2) Sort fields second (determines sort order without in-memory sorting), and 3) Range fields last (inequality operators like $gt, $lt, $in). Following this order minimizes key scanning and prevents memory sorting.',
    bnAnswer: 'ESR রুল বলে যে কম্পাউন্ড ইনডেক্স তৈরি করার সময় ফিল্ডের ক্রমানুসার হতে হবে: ১) Equality ফিল্ড প্রথমে (নিখুঁত ম্যাচ), ২) Sort ফিল্ড দ্বিতীয়তে (মেমোরি ছাড়াই সর্টিং করতে সাহায্য করে), এবং ৩) Range ফিল্ড সবার শেষে ($gt, $lt, $in অপারেটর)। এই ক্রম মেনে ইনডেক্স বসালে কী-স্ক্যান সবচেয়ে কম হয় এবং র‍্যামে সর্টিং করার প্রয়োজন পড়ে না।',
    enExplanation: `### Explanation
When building a compound index to support complex queries, the order of fields in the index definition is critical. The **ESR Rule** dictates this order:

1. **Equality (E)**: Fields queried with exact values (e.g., \`{ status: "active" }\`). Put these first to narrow down the search space immediately.
2. **Sort (S)**: Fields used to order query results (e.g., \`{ created_at: -1 }\`). Placing these before Range allows MongoDB to scan the index in the exact order requested, avoiding expensive in-memory sorts (which fail if memory usage exceeds 32MB).
3. **Range (R)**: Fields queried with inequality operators (e.g., \`{ price: { $gt: 50 } }\`). Placing these last ensures that once the index range scan begins, the database does not need to sort the remaining index keys.

### Real-World Example
Suppose you run a query:
\`\`\`javascript
db.orders.find({ status: "shipped", price: { $gt: 100 } }).sort({ orderDate: -1 })
\`\`\`
- Here, \`status\` is **Equality**, \`orderDate\` is **Sort**, and \`price\` is **Range**.
- **Correct Index**: \`{ status: 1, orderDate: -1, price: 1 }\` (ESR order).
- **Incorrect Index**: \`{ status: 1, price: 1, orderDate: -1 }\` (Range before Sort). The database will scan keys matching price range, but must then perform a slow memory sort to order them by \`orderDate\`.

### Best Practice
Always follow the ESR rule when writing compound indexes. If you have queries that require sorting, place the sort field before any range filters. Check the explain plan to verify that the query has \`hasSortStage: false\` (indicating the index handled the sort).

### Common Mistakes
Putting Range fields before Sort fields in compound indexes. While the index is still used for filtering, it forces MongoDB to perform a blocking in-memory sort on the returned keys, degrading query performance.

### Code Example
\`\`\`javascript
// Query: Filter by category (Equality), sort by rating (Sort), filter by price (Range)
db.products.find({
  category: "Electronics",
  price: { $gte: 200 }
}).sort({ rating: -1 });

// Apply ESR Rule to create compound index
// E = category, S = rating, R = price
db.products.createIndex({ category: 1, rating: -1, price: 1 });

// Verify query execution plan
db.products.find({
  category: "Electronics",
  price: { $gte: 200 }
}).sort({ rating: -1 }).explain("executionStats");
// Look for Stage: "IXSCAN" and "SORT" stage should NOT be present.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কম্পাউন্ড ইনডেক্সে ফিল্ডের ক্রমানুসার কেমন হবে তা নির্ধারণ করতে **ESR Rule** ব্যবহৃত হয়:

১. **Equality (E) - সমতা**: যে ফিল্ডগুলোর নিখুঁত মান ম্যাচ করা হয় (যেমন: \`{ status: "active" }\`)। এগুলোকে ইনডেক্সে সবার প্রথমে রাখতে হবে।
২. **Sort (S) - সাজানো**: যে ফিল্ডের ভিত্তিতে ডাটা সর্ট বা ক্রমানুসারে সাজানো হয় (যেমন: \`{ created_at: -1 }\`)। এটিকে রেঞ্জ ফিল্ডের আগে বসালে ডাটাবেস ইনডেক্স থেকেই ক্রমানুসার বুঝে নেয়, র‍্যামে নতুন করে সর্ট করতে হয় না (র‍্যামে সর্টিং ৩২ এমবি পার করলে মঙ্গোডিবি এরর দেখাবে)।
৩. **Range (R) - ব্যাপ্তি**: যে ফিল্ডে রিলেশনাল অপারেটর দিয়ে রেঞ্জ খোঁজা হয় (যেমন: \`{ price: { $gt: 50 } }\`)। এটিকে ইনডেক্সে সবার শেষে রাখতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি আপনার একটি কুয়েরি আছে:
\`\`\`javascript
db.orders.find({ status: "shipped", price: { $gt: 100 } }).sort({ orderDate: -1 })
\`\`\`
- এখানে \`status\` হলো Equality, \`orderDate\` হলো Sort এবং \`price\` হলো Range।
- **সঠিক ইনডেক্স**: \`{ status: 1, orderDate: -1, price: 1 }\` (ESR নিয়ম অনুযায়ী)।
- **ভুল ইনডেক্স**: \`{ status: 1, price: 1, orderDate: -1 }\` (Range আগে চলে এসেছে)। এর ফলে ইনডেক্স কুয়েরি ফিল্টার করতে পারলেও সর্টিংয়ের জন্য আলাদা মেমোরি সর্ট করতে বাধ্য হবে।

### উত্তম অনুশীলন
কম্পাউন্ড ইনডেক্স ডিফাইন করার সময় সর্বদা ESR রুল মাথায় রাখুন। কুয়েরির এক্সপ্লেন প্ল্যানে চেক করুন যেন \`hasSortStage\` প্রপার্টিটি \`false\` দেখায়, যার মানে ডাটাবেসকে র‍্যামে অতিরিক্ত সর্ট করতে হয়নি।

### সাধারণ ভুলসমূহ
ইনডেক্সে Sort ফিল্ডের আগে Range ফিল্ড বসানো। এর ফলে ইনডেক্স থাকা সত্ত্বেও মঙ্গোডিবি একটি ব্লকিং ইন-মেমোরি সর্ট অপারেশন চালায় যা কুয়েরিকে ধীর করে।

### Code Example
\`\`\`javascript
// কুয়েরি: ক্যাটাগরি মিল (Equality), রেটিং দিয়ে সাজানো (Sort), মূল্য সীমা (Range)
db.products.find({
  category: "Electronics",
  price: { $gte: 200 }
}).sort({ rating: -1 });

// ESR নিয়ম অনুযায়ী সঠিক কম্পাউন্ড ইনডেক্স তৈরি করা
// E = category, S = rating, R = price
db.products.createIndex({ category: 1, rating: -1, price: 1 });

// কুয়েরির explain প্ল্যান দেখা
db.products.find({
  category: "Electronics",
  price: { $gte: 200 }
}).sort({ rating: -1 }).explain("executionStats");
// আউটপুটে SORT স্টেজ অনুপস্থিত থাকা নিশ্চিত করুন (IXSCAN ডিরেক্ট সর্ট হ্যান্ডেল করবে)।
\`\`\``
  },
  {
    id: 'mongodb-87',
    title: 'Explain Collation in MongoDB and its impact on case-insensitive queries and index usage.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Collation', 'Indexing', 'Performance', 'Database Optimization'],
    enAnswer: 'Collation allows users to specify language-specific rules for string comparison, such as case sensitivity, accent markings, and numeric ordering. For a query to utilize an index with collation, the query must specify the exact same collation settings as the index, otherwise it falls back to a collection scan.',
    bnAnswer: 'কোলিশন (Collation) ইউজারকে স্ট্রিং তুলনার জন্য ভাষা-নির্দিষ্ট নিয়ম (যেমন: ছোট-বড় হাতের অক্ষরের পার্থক্য বা accent) সেট করার সুযোগ দেয়। কোলিশন ইনডেক্স ব্যবহার করতে হলে কুয়েরির কোলিশন কনফিগারেশন এবং ইনডেক্সের কোলিশন কনফিগারেশন হুবহু এক হতে হবে, অন্যথায় এটি টেবিল স্ক্যান করবে।',
    enExplanation: `### Explanation
By default, MongoDB string comparisons are case-sensitive and byte-by-byte (binary comparison). Collation changes this behavior.

**Key Collation Settings:**
- **\`locale\`**: Defines language rules (e.g., \`en\` for English, \`bn\` for Bengali).
- **\`strength\`**: Level of comparison strictness (1 to 5):
  - **Strength 1**: Case and accent insensitive (treats "a", "A", and "á" as identical). Excellent for general search.
  - **Strength 2**: Case-insensitive but accent-sensitive.
  - **Strength 3 (Default)**: Case-sensitive and accent-sensitive.
- **\`numericOrdering\`**: If true, compares numbers as numeric values rather than strings (e.g., "10" is greater than "2").

**Collation Index Matching Rule:**
If you create a collation index:
\`\`\`javascript
db.users.createIndex({ username: 1 }, { collation: { locale: "en", strength: 2 } })
\`\`\`
Running \`db.users.find({ username: "john" })\` **will not** use this index. It will perform a collection scan because the query does not specify the collation matching the index definition.

### Real-World Example
In a user registration system, you want to ensure usernames are unique regardless of case (e.g. preventing "JohnDoe" and "johndoe" from registering separately). Creating a unique index with collation strength 2 handles this case validation natively at the database layer.

### Best Practice
If you use collation for case-insensitive searches, apply the collation configuration globally to the collection upon creation. This makes all indexes on that collection inherit the collation by default, preventing query-index mismatches.

### Common Mistakes
Creating a collation index on a field but running standard queries without collation parameters, which leads to silent performance failure (fallback to COLLSCAN).

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Define Mongoose Schema with global case-insensitive collation
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Will inherit collection collation rules
  }
}, {
  // Apply English locale case-insensitive collation (Strength 2)
  collation: { locale: 'en', strength: 2 }
});

const User = mongoose.model('User', userSchema);

// Querying using the case-insensitive index
// Even if stored as "User@Email.com", searching "user@email.com" uses index
const user = await User.findOne({ email: "user@email.com" });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির সাধারণ স্ট্রিং তুলনা বাইনারি পদ্ধতিতে চলে এবং তা ছোট/বড় হাতের অক্ষরের তফাত ধরে। কোলিশন (Collation) এই আচরণের ভাষা-ভিত্তিক নিয়মে পরিবর্তন ঘটায়।

**কোলিশন সেটিংসের মূল প্যারামিটারসমূহ:**
- **\`locale\`**: নির্দিষ্ট ভাষা নির্ধারণ করে (যেমন: ইংরেজির জন্য \`en\`, বাংলার জন্য \`bn\`)।
- **\`strength\`**: তুলনার কঠোরতার লেভেল (১ থেকে ৫):
  - **Strength 1**: অক্ষর ছোট-বড় বা আকৃতিগত পার্থক্য অবহেলা করে (যেমন: "a", "A" এবং "á" কে এক ধরে)। এটি সাধারণ সার্চের জন্য দারুণ।
  - **Strength 2**: বড়-ছোট হাতের অক্ষর ইনসেনসিটিভ কিন্তু accent সেনসিটিভ।
  - **Strength 3 (ডিফল্ট)**: ছোট-বড় অক্ষর ও accent দুটোই কঠোরভাবে চেক করে।
- **\`numericOrdering\`**: অ্যাক্টিভ থাকলে স্ট্রিং নম্বরকে গাণিতিক মান হিসেবে তুলনা করে (যেমন: "১০" কে "২" এর চেয়ে বড় ধরবে, স্ট্রিং হিসেবে "২" বড়)।

**ইনডেক্স ম্যাচিংয়ের নিয়ম:**
আপনি যদি কোনো কোলিশন ইনডেক্স তৈরি করেন:
\`\`\`javascript
db.users.createIndex({ username: 1 }, { collation: { locale: "en", strength: 2 } })
\`\`\`
তাহলে সাধারণ কুয়েরি \`db.users.find({ username: "john" })\` এই ইনডেক্স ব্যবহার করবে না। এটি পুরো টেবিল স্ক্যান করবে, কারণ কুয়েরির কোলিশন ইনডেক্সের সাথে মেলেনি।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার সাইনআপ সিস্টেমে ইউনিক ইমেইল যাচাই করতে হবে। ইউজার যেন ভুল করে একই ইমেইল দিয়ে দুরকম অ্যাকাউন্ট খুলতে না পারে (যেমন: "John@test.com" ও "john@test.com")। কোলিশন স্ট্রেন্থ ২ বিশিষ্ট ইউনিক ইনডেক্স সরাসরি ডাটাবেস লেভেলেই এই ডুপ্লিকেট অ্যাকাউন্ট রেজিস্টার হওয়া রোধ করে।

### উত্তম অনুশীলন
যদি আপনি কোলিশন ইনডেক্স ব্যবহার করেন, তবে কালেকশন তৈরির সময় এটি গ্লোবালি ডিক্লেয়ার করুন। এতে কালেকশনের সমস্ত ইনডেক্স স্বয়ংক্রিয়ভাবে কোলিশন সেটিংসটি পেয়ে যায় এবং কুয়েরি মিসম্যাচের ঝামেলা এড়ানো যায়।

### সাধারণ ভুলসমূহ
ইনডেক্সে কোলিশন বসালেও কুয়েরিতে সাধারণ স্ট্রিং সার্চ ব্যবহার করা। এর ফলে ডাটাবেস ইনডেক্সটি স্কিপ করে অত্যন্ত ধীরগতির টেবিল স্ক্যানে চলে যায়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// মঙ্গুস স্কিমাতে কোলিশন ডিফাইন করার সঠিক নিয়ম
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // কালেকশন কোলিশন রুলস অটো-ইনহেরিট করবে
  }
}, {
  // ইংরেজি ছোট-বড় হাতের অক্ষরের বৈষম্য দূর করতে Strength 2 কোলিশন
  collation: { locale: 'en', strength: 2 }
});

const User = mongoose.model('User', userSchema);

// কোলিশন ইনডেক্স ব্যবহার করে খোঁজা
// ডাটাবেসে "User@Email.com" সেভ থাকলেও "user@email.com" দিয়ে ইনডেক্স সার্চ করা যাবে
const user = await User.findOne({ email: "user@email.com" });
\`\`\``
  },
  {
    id: 'mongodb-88',
    title: 'Compare Partial Indexes vs Sparse Indexes in MongoDB and analyze their query execution behavior.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Indexing', 'Performance', 'Sparse Index', 'Partial Index'],
    enAnswer: 'Sparse indexes only index documents containing the indexed field. Partial indexes extend this by using a partialFilterExpression to index documents based on a filter condition. Unlike sparse indexes, partial indexes can index fields that are missing, have specific values, or match complex logical operators.',
    bnAnswer: 'স্পার্স ইনডেক্স (Sparse Index) কেবল সেই ডকুমেন্টগুলো ইনডেক্স করে যেখানে নির্দিষ্ট ফিল্ডটি উপস্থিত থাকে। পার্শিয়াল ইনডেক্স (Partial Index) এটিকে আরও উন্নত করে \`partialFilterExpression\`-এর মাধ্যমে কন্ডিশন সেট করে নির্দিষ্ট ডাটা ইনডেক্স করে। এটি ফিল্ড অনুপস্থিত থাকা বা জটিল কন্ডিশন ফিল্টারেও কাজ করে।',
    enExplanation: `### Explanation
Both index types optimize memory usage by reducing index size:

**1. Sparse Indexes**:
- Defined as: \`db.collection.createIndex({ email: 1 }, { sparse: true })\`
- Indexes documents only if the \`email\` field exists.
- **Limitation**: Cannot filter based on value ranges or status (e.g. "index only if status is active"). If a document contains \`email: null\`, a sparse index still indexes it.

**2. Partial Indexes (Recommended)**:
- Defined using a filter expression:
  \`\`\`javascript
  db.collection.createIndex(
    { email: 1 },
    { partialFilterExpression: { status: "active", email: { $exists: true } } }
  )
  \`\`\`
- Indexes fields dynamically based on query expressions.
- **Rules for Query Match**: For a query to use a partial index, the query filter must contain a subset of the \`partialFilterExpression\` criteria.

### Real-World Example
In a real-time ride-sharing application:
- You only query driver locations for drivers who are active and online (\`status: "online"\`).
- Creating a geospatial index on driver location with a partial filter \`{ status: "online" }\` reduces the index size by 90% (excluding offline drivers), saving precious RAM.

### Best Practice
Prefer Partial Indexes over Sparse Indexes. Partial indexes offer a superset of sparse index functionality, allow more granular control, and prevent unnecessary index entries, which speeds up write operations.

### Common Mistakes
Running queries with filters that don't match the partial index criteria. For example, if the partial index filter is \`{ age: { $gte: 21 } }\`, running \`db.users.find({ age: 20 })\` cannot use the index and triggers a full table scan.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  status: String
});

// Create Partial Index: Only index emails of active users
// This allows email uniqueness checks only among active accounts
userSchema.index(
  { email: 1 },
  { 
    unique: true,
    partialFilterExpression: { 
      status: 'active',
      email: { $type: "string" } // Only index if email is a string
    } 
  }
);

const User = mongoose.model('User', userSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
দুটি ইনডেক্সই ইনডেক্সের সাইজ কমিয়ে মেমোরি ব্যবহারে সাহায্য করে:

**১. Sparse Indexes (স্পার্স ইনডেক্স):**
- ডিক্লেয়ারেশন: \`db.collection.createIndex({ email: 1 }, { sparse: true })\`
- এটি কেবল তখনই ইনডেক্স এন্ট্রি তৈরি করে যদি ডকুমেন্টে \`email\` ফিল্ডটি উপস্থিত থাকে।
- **সীমাবদ্ধতা**: এটি মানের ওপর কন্ডিশন সেট করতে পারে না (যেমন: শুধু স্ট্যাটাস একটিভ হলে ইনডেক্স করো)। যদি ফিল্ডের মান \`null\` হয়, তবুও স্পার্স ইনডেক্স তৈরি হবে।

**২. Partial Indexes (আংশিক ইনডেক্স - রেকমেন্ডেড):**
- ডিক্লেয়ারেশন কন্ডিশনাল এক্সপ্রেশন দিয়ে হয়:
  \`\`\`javascript
  db.collection.createIndex(
    { email: 1 },
    { partialFilterExpression: { status: "active", email: { $exists: true } } }
  )
  \`\`\`
- এটি ফিল্টারের কন্ডিশন মিলে গেলেই কেবল সেই ডাটাগুলোর জন্য ইনডেক্স তৈরি করে।
- **কুয়েরি ম্যাচিং রুল**: কুয়েরি চালানোর সময় ফিল্টারে অবশ্যই পার্শিয়াল ফিল্টারের কন্ডিশন থাকতে হবে, অন্যথায় মঙ্গোডিবি ইনডেক্সটি স্কিপ করবে।

### বাস্তব-ভিত্তিক উদাহরণ
রাইড-শেয়ারিং অ্যাপে কাস্টমার শুধু অনলাইন ও রাইডের জন্য প্রস্তুত চালকদের ট্র্যাক করতে চায়। তাই জিপিএস কোঅর্ডিনেট ফিল্ডের ওপর পার্শিয়াল ইনডেক্স \`{ status: "online" }\` ফিল্টার দিয়ে তৈরি করা হলো। এতে অফলাইন চালকদের তথ্য ইনডেক্সে না আসায় র‍্যাম সাইজ ৯০% কমে যায়।

### উত্তম অনুশীলন
স্পার্স ইনডেক্সের চেয়ে পার্শিয়াল ইনডেক্স ব্যবহারকে অগ্রাধিকার দিন। এটি অত্যন্ত সূক্ষ্ম কন্ট্রোল প্রদান করে এবং ডাটাবেস রাইট স্পিড বৃদ্ধি করে কারণ অপ্রয়োজনীয় ডাটার ইনডেক্স আপডেট করতে হয় না।

### সাধারণ ভুলসমূহ
পার্শিয়াল ইনডেক্সের কন্ডিশন না মেনে কুয়েরি চালানো। যেমন ইনডেক্স কন্ডিশন \`{ age: { $gte: 21 } }\` থাকলে যদি আপনি \`db.users.find({ age: 20 })\` কুয়েরি করেন, তবে ডাটাবেস ইনডেক্সটি ব্যবহার না করে পুরো কালেকশন স্ক্যান করবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  status: String
});

// পার্শিয়াল ইনডেক্স: শুধুমাত্র অ্যাক্টিভ ইউজারদের ইমেইলের ওপর ইউনিক ইনডেক্স তৈরি
// এর ফলে ইন-অ্যাক্টিভ অ্যাকাউন্টের একই ইমেইল ডুপ্লিকেট থাকলেও এরর দেখাবে না
userSchema.index(
  { email: 1 },
  { 
    unique: true,
    partialFilterExpression: { 
      status: 'active',
      email: { $type: "string" } // ইমেইল স্ট্রিং হলেই কেবল ইনডেক্স করবে
    } 
  }
);

const User = mongoose.model('User', userSchema);
\`\`\``
  },
  {
    id: 'mongodb-89',
    title: 'Explain MongoDB Atlas Search (Lucene Integration) and how it differs from traditional $text indexes.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Atlas Search', 'Lucene', 'Full-Text Search', 'Database Design'],
    enAnswer: 'MongoDB Atlas Search integrates Apache Lucene directly alongside the database engine. Unlike traditional $text indexes which are limited in scale and language analysis, Atlas Search supports complex analyzers, fuzzy matching (typo tolerance), synonym mappings, autocomplete, and faceting, without requiring an external Elasticsearch cluster.',
    bnAnswer: 'মঙ্গোডিবি অ্যাটলাস সার্চ (Atlas Search) ডাটাবেস ইঞ্জিনের সাথে সরাসরি অ্যাপাচি লুসিন (Apache Lucene) ইন্টিগ্রেট করে। সাধারণ $text ইনডেক্সের তুলনায় (যা ল্যাঙ্গুয়েজ এনালাইসিস ও স্কেলিংয়ে দুর্বল) অ্যাটলাস সার্চ কোনো বাড়তি সার্চ ইঞ্জিন (যেমন: Elasticsearch) ছাড়াই ফাজি ম্যাচিং (টাইপো টলারেন্স), সিনোনিম, অটো-কমপ্লিট এবং ক্যাটাগরি ফেসেন্টিং সমর্থন করে।',
    enExplanation: `### Explanation
Traditional full-text search (\`$text\` index) in MongoDB runs inside the WiredTiger engine, but it lacks advanced search engine capabilities and has poor performance at scale.

**Differences between $text Index and Atlas Search:**

| Feature | Traditional \`$text\` Index | Atlas Search (Lucene) |
|---|---|---|
| **Engine** | WiredTiger (standard DB) | Apache Lucene (dedicated index) |
| **Typo Tolerance** | Not supported | Supported (Fuzzy matching) |
| **Autocomplete** | Poor regex-like matches | Native edgeGram tokenization |
| **Synonyms** | Not supported | Supported via custom mapping |
| **Relevance Scoring** | Basic TF-IDF | Advanced BM25 algorithm |
| **Operator** | Uses \`$text\` inside query | Uses \`$search\` stage in aggregation |

**Workflow**:
Atlas Search automatically monitors collections via Change Streams, syncing documents into Lucene search indexes in near-real-time.

### Real-World Example
In an e-commerce search bar, if a user types "iphne" (typo) or "cellphone" (synonym), a traditional \`$text\` index returns 0 results. Atlas Search matches it to "iPhone" using fuzzy distance metrics and synonym definitions, scoring it high on relevance.

### Best Practice
Use Atlas Search for any production-facing search features (e.g. search bars, product catalogs). Configure index analyzers based on language requirements (e.g. custom analyzers for multi-lingual search).

### Common Mistakes
Creating regular text indexes on self-hosted instances hoping for advanced search properties. Standard \`$text\` indexes perform table locks on write heavy collections, causing query delays.

### Code Example
\`\`\`javascript
// Run an Atlas Search query using Aggregation pipeline
// Must be run on MongoDB Atlas (requires a configured Search Index)
const searchResult = await db.collection('products').aggregate([
  {
    $search: {
      index: "default", // Lucene search index name
      text: {
        query: "iphne",
        path: "name", // Target field
        fuzzy: {
          maxEdits: 1, // Allow 1 character typo mismatch
          prefixLength: 1
        }
      }
    }
  },
  {
    // Project search relevance score
    $project: {
      name: 1,
      price: 1,
      score: { $meta: "searchScore" }
    }
  }
]).toArray();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির প্রথাগত টেক্সট সার্চ (\`$text\` ইনডেক্স) ডাটাবেসের অভ্যন্তরে চললেও এতে আধুনিক সার্চ ইঞ্জিনের জটিল ফিচারগুলো থাকে না।

**$text ইনডেক্স বনাম অ্যাটলাস সার্চের পার্থক্য:**

| ফিচার | সনাতন \`$text\` ইনডেক্স | অ্যাটলাস সার্চ (Lucene) |
|---|---|---|
| **ইঞ্জিন** | WiredTiger (সাধারণ DB) | Apache Lucene (সার্চ ইঞ্জিন) |
| **ভুল বানান প্রতিরোধ** | সাপোর্ট করে না | সাপোর্ট করে (Fuzzy matching) |
| **অটো-কমপ্লিট** | স্লো Regex-ভিত্তিক | নেটিভ এজগ্রাম টোকেনাইজার |
| **সমার্থক শব্দ (Synonyms)** | সাপোর্ট করে না | সিনোনিম ডিকশনারি সাপোর্ট করে |
| **স্কোরিং অ্যালগরিদম** | সাধারণ TF-IDF | আধুনিক BM25 ফর্মুলা |
| **কুয়েরি অপারেটর** | \`$text\` (find কুয়েরিতে) | \`$search\` (এগ্রিগেশন পাইপলাইনে) |

**কার্যপ্রণালী**:
অ্যাটলাস সার্চ চেঞ্জ স্ট্রিমের সাহায্যে ব্যাকগ্রাউন্ডে ডাটাবেসের পরিবর্তনগুলো লুসিন সার্চ ইনডেক্সে রিয়েল-টাইমে সিঙ্ক করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটের সার্চ বারে গ্রাহক যদি "iphne" (বানান ভুল) বা "cellphone" (সমার্থক) লেখে, সনাতন \`$text\` ইনডেক্স কোনো রেজাল্ট দিতে পারবে না। কিন্তু অ্যাটলাস সার্চ ফাজি ম্যাচিং ও সিনোনিম ব্যবহার করে সঠিক আইফোন (iPhone) প্রোডাক্টটি ব্রাউজারে রিকমেন্ড করবে।

### উত্তম অনুশীলন
প্রোডাকশন গ্রেড অ্যাপ্লিকেশনের সার্চ ফিচার বা ক্যাটালগ সার্চের জন্য অ্যাটলাস সার্চ ব্যবহার করুন। ভাষার ওপর ভিত্তি করে ইনডেক্স এনালাইজার কনফিগার করুন (যেমন ইংরেজি ও বাংলার জন্য আলাদা স্টেমার)।

### সাধারণ ভুলসমূহ
সেলফ-হোস্টেড মঙ্গোডিবির সাধারণ টেক্সট ইনডেক্সকে গুগল বা ইলাস্টিকসার্চের মতো শক্তিশালী মনে করে সার্ভিস দেওয়া। সাধারণ টেক্সট ইনডেক্স রাইট-হেভি কালেকশনে টেবিল লক তৈরি করে ডাটাবেস স্লো করে দেয়।

### Code Example
\`\`\`javascript
// এগ্রিগেশন পাইপলাইনে Atlas Search কুয়েরি রান করার উদাহরণ
// এটি চালানোর জন্য অবশ্যই মঙ্গোডিবি অ্যাটলাসে ইনডেক্স কনফিগার থাকতে হবে
const searchResult = await db.collection('products').aggregate([
  {
    $search: {
      index: "default", // লুসিন ইনডেক্স নাম
      text: {
        query: "iphne", // বানান ভুল সহ সার্চ কিউরি
        path: "name",   // যে ফিল্ডে সার্চ করা হবে
        fuzzy: {
          maxEdits: 1,  // ১টি অক্ষরের ভুল বানান ছাড় দেওয়া হবে
          prefixLength: 1
        }
      }
    }
  },
  {
    // সার্চ স্কোর প্রজেক্ট করা
    $project: {
      name: 1,
      price: 1,
      score: { $meta: "searchScore" } // সার্চের নিখুঁত স্কোর
    }
  }
]).toArray();
\`\`\``
  },
  {
    id: 'mongodb-90',
    title: 'Explain Aggregation Pipeline Optimization, Stage Ordering, and Stage Coalescing rules.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Aggregation', 'Query Optimization', 'Performance', 'Database Architecture'],
    enAnswer: 'The MongoDB query optimizer improves aggregation performance through stage coalescing and query pushdown. It automatically moves $match stages to the beginning of the pipeline to leverage indexes, combines $sort and $limit stages to perform top-n memory sort optimization, and restricts projection scope early to minimize document payloads.',
    bnAnswer: 'মঙ্গোডিবি কোয়েরি অপ্টিমাইজার স্টেজ কোয়ালেসিং (coalescing) ও পুশডাউনের মাধ্যমে এগ্রিগেশন পাইপলাইন অপ্টিমাইজ করে। এটি অটোমেটিকালি \`$match\` স্টেজগুলোকে পাইপলাইনের প্রথমে নিয়ে এসে ইনডেক্স ব্যবহার করায়, \`$sort\` ও \`$limit\` একীভূত করে টপ-এন সর্টিং অপ্টিমাইজেশন করে এবং প্রজেকশন আগে বসিয়ে ডাটা সাইজ ছোট রাখে।',
    enExplanation: `### Explanation
Aggregation pipelines execute stages sequentially, but the query optimizer reorganizes steps to maximize speed:

**1. Index Utilization ($match and $sort)**:
- Indexes can only be utilized if \`$match\` and \`$sort\` stages appear at the **very beginning** of the pipeline before any document transformations (like \`$project\`, \`$unwind\`, or \`$group\`) occur.

**2. Stage Coalescing (Merging Stages)**:
- If a \`$sort\` stage is followed by a \`$limit\`, MongoDB merges them into a single memory-optimized sort. It keeps only the top-n elements in memory, preventing memory overload.
- If a \`$limit\` is followed by another \`$limit\`, they merge into the smaller value limit.

**3. Projection Pushdown**:
- If you have a \`$project\` at the end of the pipeline, MongoDB pushes down the projection internally to avoid fetching fields that are never used in subsequent stages.

### Real-World Example
Suppose you run this aggregation pipeline:
\`\`\`javascript
db.orders.aggregate([
  { $project: { customerId: 1, total: 1, status: 1 } },
  { $match: { status: "completed" } }
])
\`\`\`
- Because \`$project\` is before \`$match\`, an index on \`status\` cannot be used in standard execution.
- MongoDB optimizer detects this and internally rearranges it to:
\`\`\`javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $project: { customerId: 1, total: 1, status: 1 } }
])
\`\`\`
- This allows it to use the \`status\` index and avoid scanning all documents in the collection.

### Best Practice
Write pipelines with \`$match\` first, followed by \`$sort\`, then \`$limit\`. Avoid using \`$unwind\` or \`$group\` until you have filtered out as many documents as possible, as these stages are blocking and load documents into RAM.

### Common Mistakes
Placing an unnecessary \`$project\` stage early in the pipeline to clean up keys. This prevents the optimizer from performing optimization matches and can block index coverage.

### Code Example
\`\`\`javascript
// Optimized Aggregation Pipeline following best practices
db.orders.aggregate([
  // 1. Filter early using index
  { $match: { status: "shipped", orderDate: { $gte: ISODate("2026-01-01") } } },
  
  // 2. Sort immediately using compound index (orderDate)
  { $sort: { orderDate: -1 } },
  
  // 3. Limit early to avoid parsing unnecessary documents
  { $limit: 100 },
  
  // 4. Transform documents
  { $unwind: "$items" },
  
  // 5. Project only required fields
  { $project: { customerId: 1, "items.productId": 1, "items.price": 1 } }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এগ্রিগেশন পাইপলাইন সিকোয়েন্সিয়ালি চললেও ডাটাবেস অপ্টিমাইজার কোডের স্টেজগুলোর ক্রম পরিবর্তন করে গতি বাড়ায়:

**১. ইনডেক্সের সঠিক ব্যবহার ($match এবং $sort):**
- ইনডেক্স ব্যবহার করতে হলে \`$match\` ও \`$sort\` স্টেজকে অবশ্যই পাইপলাইনের **সবার শুরুতে** রাখতে হবে। মাঝখানে কোনো ডকুমেন্ট ট্রান্সফরমেশন (যেমন: \`$project\` বা \`$group\`) ঘটে গেলে ইনডেক্স কাজ করা বন্ধ করে দেয়।

**২. স্টেজ কোয়ালেসিং (Stage Coalescing):**
- যদি \`$sort\` এর পরপরই \`$limit\` থাকে, মঙ্গোডিবি মেমোরি লোড কমাতে এ দুটিকে একসাথে প্রসেস করে। এটি মেমোরিতে কেবল সেরা N-সংখ্যক ডাটা ধরে রাখে (৩২ এমবি সর্ট লিমিট অতিক্রম করা রোধ করে)।
- পরপর দুটি \`$limit\` থাকলে ছোট লিমিটটি কার্যকর হয়।

**৩. প্রজেকশন পুশডাউন:**
- পাইপলাইনের শেষে \`$project\` থাকলে মঙ্গোডিবি ডাটাবেস রিড করার সময়েই অপ্রয়োজনীয় ফিল্ডগুলো বাদ দিয়ে দেয়, যাতে মেমোরি কম খরচ হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি আপনি একটি কুয়েরি রান করলেন:
\`\`\`javascript
db.orders.aggregate([
  { $project: { customerId: 1, total: 1, status: 1 } },
  { $match: { status: "completed" } }
])
\`\`\`
- যেহেতু \`$project\` আগে আছে, তাই \`status\`-এর ইনডেক্স কাজ করার কথা নয়।
- কিন্তু মঙ্গোডিবি অপ্টিমাইজার ইন্টারনালি এটিকে ঘুরিয়ে প্রথমে \`$match\` এবং পরে \`$project\` বসিয়ে দেয়, যাতে ইনডেক্স সাকসেসফুলি কাজ করতে পারে।

### উত্তম অনুশীলন
সর্বদা এগ্রিগেশন কুয়েরিতে \`$match\` প্রথমে, তারপর \`$sort\` এবং তারপর \`$limit\` বসান। যতক্ষণ না পর্যন্ত ফিল্টার করে ডাটা সংখ্যা কমানো যাচ্ছে, ততক্ষণ \`$unwind\` বা \`$group\` ব্যবহার করবেন না, কারণ এগুলো প্রচুর র‍্যাম মেমোরি খরচ করে।

### সাধারণ ভুলসমূহ
পাইপলাইনের শুরুতে অপ্রয়োজনীয় \`$project\` বসিয়ে ফিল্ড পরিষ্কার করা। এটি মঙ্গোডিবির ইন্টারনাল ইনডেক্স অপ্টিমাইজেশনকে ব্লক করে দেয়।

### Code Example
\`\`\`javascript
// সর্বোত্তম অনুশীলনী মেনে তৈরি এগ্রিগেশন পাইপলাইন
db.orders.aggregate([
  // ১. ইনডেক্স ব্যবহার করে ডাটা ফিল্টার করা
  { $match: { status: "shipped", orderDate: { $gte: ISODate("2026-01-01") } } },
  
  // ২. কম্পাউন্ড ইনডেক্স ব্যবহার করে সর্ট করা
  { $sort: { orderDate: -1 } },
  
  // ৩. লিমিট আগে বসিয়ে ডাটা সাইজ ছোট রাখা
  { $limit: 100 },
  
  // ৪. মেমোরি কনজাম্পশন কমানোর পর আনউইন্ড করা
  { $unwind: "$items" },
  
  // ৫. শুধুমাত্র প্রয়োজনীয় ফিল্ড প্রজেক্ট করা
  { $project: { customerId: 1, "items.productId": 1, "items.price": 1 } }
]);
\`\`\``
  },
  {
    id: 'mongodb-91',
    title: 'Explain GridFS internals and streaming binary files using Node.js without high server memory consumption.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['GridFS', 'Streams', 'Binary Data', 'Node.js', 'Performance'],
    enAnswer: 'GridFS splits binary files exceeding 16MB into 255KB chunks, saving metadata in fs.files and chunks in fs.chunks. In Node.js, files must be streamed using GridFSBucketReadStream and piped to the HTTP response, preventing the server from loading the entire file into memory and avoiding OOM crashes.',
    bnAnswer: 'GridFS ১৬ এমবি-র বড় বাইনারি ফাইলকে ২৫৫ কেবি চাঙ্কে ভাগ করে fs.files ও fs.chunks কালেকশনে রাখে। নোডজেএস-এ GridFSBucketReadStream ব্যবহার করে ফাইলটিকে সরাসরি HTTP রেসপন্সে পাইপ করতে হয়, যাতে সার্ভারের মেমোরিতে পুরো ফাইল লোড না হয়ে ওওএম (OOM) ক্র্যাশ এড়ানো যায়।',
    enExplanation: `### Explanation
When handling large files (e.g. 1GB video) on a backend server, loading the entire file into memory before sending it to the client is catastrophic. It will instantly crash the server due to Out of Memory (OOM) errors.

**GridFS Streaming Mechanics:**
- **\`GridFSBucket\`**: The modern MongoDB driver class used to read and write files.
- **\`openDownloadStream\`**: Returns a Node.js **Readable Stream**.
- **\`pipe()\`**: Pipes the chunks of data (each 255KB) sequentially as they are read from the database, transmitting them directly to the client's network socket.
- **Memory Profile**: The Node.js server RAM utilization remains constant at a few kilobytes regardless of whether the file is 10MB or 10GB.

### Real-World Example
In a media hosting service, users stream movies stored in MongoDB.
- Instead of using \`fs.readFile\` (which buffers the entire file in RAM), the Node.js API creates a download stream from the GridFS bucket.
- The stream is piped directly to Express's \`res\` object.
- The browser begins playing the video instantly, and the server's RAM usage remains flat during the process.

### Best Practice
Always handle stream errors (e.g., \`error\` events on the read stream) to prevent hanging connections. Set correct \`Content-Type\` and \`Content-Length\` headers so browsers can download or stream the file properly.

### Common Mistakes
Buffering GridFS file chunks into an array in memory to join them before sending, which replicates the OOM problem that GridFS was designed to prevent.

### Code Example
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const app = express();

app.get('/video/:fileId', async (req, res) => {
  const db = mongoose.connection.db;
  // Initialize GridFS bucket
  const bucket = new mongodb.GridFSBucket(db, { bucketName: 'videos' });
  
  const fileId = new mongodb.ObjectId(req.params.fileId);

  // 1. Retrieve file metadata first to set correct headers
  const files = await bucket.find({ _id: fileId }).toArray();
  if (files.length === 0) {
    return res.status(404).send('File not found');
  }
  const file = files[0];

  res.set({
    'Content-Type': file.contentType || 'video/mp4',
    'Content-Length': file.length,
    'Accept-Ranges': 'bytes'
  });

  // 2. Stream download from GridFS and pipe directly to HTTP response
  const downloadStream = bucket.openDownloadStream(fileId);
  
  downloadStream.on('error', (err) => {
    console.error('Error during GridFS streaming:', err);
    res.sendStatus(500);
  });

  downloadStream.pipe(res); // Chunk-by-chunk piping to browser
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভারে যখন বড় ফাইল (যেমন ১ জিবি ভিডিও) হ্যান্ডেল করতে হয়, তখন তা একবারে র‍্যামে লোড করে ক্লায়েন্টকে পাঠানো আত্মঘাতী। এটি সার্ভারকে OOM এররের মাধ্যমে ক্র্যাশ করায়।

**GridFS স্ট্রিমিং মেকানিক্স:**
- **\`GridFSBucket\`**: মঙ্গোডিবির মডার্ন ড্রাইভার ক্লাস যা ফাইল রিড-রাইট করতে সাহায্য করে।
- **\`openDownloadStream\`**: এটি একটি নোডজেএস **Readable Stream** রিটার্ন করে।
- **\`pipe()\`**: মঙ্গোডিবি থেকে রিড হওয়া ২৫৫ কেবির ছোট বাফারটি সরাসরি ক্লায়েন্টের নেটওয়ার্ক সকেটে পাইপ করে ট্রান্সফার করে।
- **মেমোরি প্রোফাইল**: ফাইল ১০ এমবি বা ১০ জিবি যা-ই হোক না কেন, নোড সার্ভারের র‍্যাম খরচ মাত্র কয়েক কিলোবাইটে সীমাবদ্ধ থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
মুভি স্ট্রিমিং পোর্টালে মঙ্গোডিবির গ্রিডএফএস বাকেট ব্যবহার করা হয়েছে।
- ইউজার ভিডিও প্লে করলে নোড সার্ভার মঙ্গোডিবির ফাইল আইডি দিয়ে ডাউনলোড স্ট্রিম ওপেন করে।
- স্ট্রিমটি সরাসরি এক্সপ্রেসের রেসপন্স (\`res\`) অবজেক্টে পাইপ করে পাঠানো হয়।
- ব্রাউজার সাথে সাথে ভিডিও প্লে শুরু করে এবং সার্ভারের র‍্যাম স্বাভাবিক থাকে।

### উত্তম অনুশীলন
স্ট্রিমিংয়ে কানেকশন হ্যাং হওয়া এড়াতে সর্বদা এরর হ্যান্ডলার (\`error\` ইভেন্ট) ডিক্লেয়ার করুন। ব্রাউজার যেন ভিডিওর ফাইল টাইপ বুঝতে পারে সেজন্য রেসপন্সে সঠিক \`Content-Type\` এবং \`Content-Length\` হেডার যুক্ত করুন।

### সাধারণ ভুলসমূহ
গ্রিডএফএস থেকে রিড করা চাঙ্কগুলোকে মেমোরিতে একটি অ্যারেতে পুশ করে রিস্টোর করা। এটি ওওএম (OOM) এরর ডেকে আনে যা দূর করতেই মূলত গ্রিডএফএস ডিজাইন করা হয়েছিল।

### Code Example
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const app = express();

app.get('/video/:fileId', async (req, res) => {
  const db = mongoose.connection.db;
  // videos নামের বাকেট ইনিশিয়ালাইজ করা
  const bucket = new mongodb.GridFSBucket(db, { bucketName: 'videos' });
  
  const fileId = new mongodb.ObjectId(req.params.fileId);

  // ১. মেটাডাটা চেক করে হেডার কনফিগার করা
  const files = await bucket.find({ _id: fileId }).toArray();
  if (files.length === 0) {
    return res.status(404).send('ফাইল পাওয়া যায়নি');
  }
  const file = files[0];

  res.set({
    'Content-Type': file.contentType || 'video/mp4',
    'Content-Length': file.length,
    'Accept-Ranges': 'bytes'
  });

  // ২. গ্রিডএফএস থেকে ডাউনলোড স্ট্রিম ওপেন করে রেসপন্সে পাইপ করা
  const downloadStream = bucket.openDownloadStream(fileId);
  
  downloadStream.on('error', (err) => {
    console.error('স্ট্রিমিং এরর:', err);
    res.sendStatus(500);
  });

  downloadStream.pipe(res); // চাঙ্ক বাই চাঙ্ক ব্রাউজারে রিড-রাইট করা
});
\`\`\``
  },
  {
    id: 'mongodb-92',
    title: 'Explain TTL (Time-To-Live) Index Internals and their limitations in MongoDB.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Indexing', 'TTL Index', 'Database Administration'],
    enAnswer: 'TTL indexes automatically delete documents after a specified time. A background thread running once per minute checks these indexes and deletes expired documents. Limitations include: TTL cannot be compound, does not support capped collections, and deletes can cause sudden disk I/O spikes under high-write loads.',
    bnAnswer: 'টিটিএল (TTL) ইনডেক্স নির্দিষ্ট সময় পর কালেকশন থেকে ডকুমেন্ট অটোমেটিক ডিলিট করে। ব্যাকগ্রাউন্ডে প্রতি মিনিটে একবার চলা একটি থ্রেড মেয়াদোত্তীর্ণ ডাটাগুলো মুছে দেয়। এর সীমাবদ্ধতাগুলো হলো: এটি কম্পাউন্ড ইনডেক্স সমর্থন করে না, ক্যাপড কালেকশনে চলে না এবং ডিলিট অপারেশনের ফলে ডিস্ক আইও (Disk I/O) স্পাইক হতে পারে।',
    enExplanation: `### Explanation
TTL indexes are useful for managing temporary data like sessions, log events, or OTPs.

**Internal Mechanics:**
1. **Background Thread**: MongoDB has a background service that runs once every 60 seconds. It queries the TTL index and performs delete operations for documents where current time is greater than the creation date plus the specified expire seconds.
2. **Dynamic Expiry**: You can configure documents to expire at a specific time (e.g. \`expireAfterSeconds: 0\`) by storing a future date value in the indexed field.

**Limitations of TTL Indexes:**
- **Single-Field Only**: You cannot create a compound TTL index. The indexed field must be a Date type.
- **Capped Collections**: Capped collections cannot have TTL indexes because document deletion is blocked in capped architecture.
- **High Disk I/O**: Deleting millions of documents concurrently can trigger heavy WiredTiger write ticket usage and disk write contention, slowing down general application reads/writes.

### Real-World Example
In a user registration system:
- When a user requests a password reset, you save a verification token in the \`passwordResets\` collection.
- You create a TTL index on \`createdAt\` with \`expireAfterSeconds: 600\` (10 minutes).
- MongoDB automatically deletes the token document exactly 10 minutes later, invalidating the link without requiring a cron job.

### Best Practice
Under high workloads, if deleting documents causes CPU/Disk bottlenecks, consider setting dynamic expiration dates or performing bulk deletes during off-peak hours using custom scripts instead of relying on the background TTL thread.

### Common Mistakes
Forgetting that the TTL thread runs once per minute. If you set a TTL of 10 seconds, documents may persist for up to 70 seconds before the background thread runs and removes them.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  phoneNumber: String,
  code: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create a TTL index to delete OTP documents after 5 minutes (300 seconds)
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const OTP = mongoose.model('OTP', otpSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অস্থায়ী ডাটা যেমন সেশন, ওটিপি (OTP) বা লগ ফাইল ম্যানেজ করতে TTL ইনডেক্স ব্যবহার করা হয়।

**অভ্যন্তরীণ কার্যপ্রণালী:**
১. **ব্যাকগ্রাউন্ড থ্রেড**: মঙ্গোডিবি ব্যাকগ্রাউন্ডে প্রতি ৬০ সেকেন্ড পর পর একটি প্রসেস রান করে। এটি চেক করে দেখে কোন কোন ডকুমেন্টের নির্দিষ্ট সময়সীমা পার হয়েছে এবং সেগুলোকে মুছে দেয়।
২. **ডাইনামিক এক্সপায়ারি**: আপনি যদি \`expireAfterSeconds: 0\` সেট করেন এবং ইনডেক্সড ফিল্ডে ভবিষ্যতের ডেট সেভ করেন, তবে ঠিক সেই নির্দিষ্ট সময়ে ডাটা ডিলিট হয়ে যাবে।

**সীমাবদ্ধতা ও বাধ্যবাধকতা:**
- **সিঙ্গেল ফিল্ড**: টিটিএল ইনডেক্স সর্বদা সিঙ্গেল ফিল্ডে হতে হবে (কম্পাউন্ড বা মাল্টি-ফিল্ড ইনডেক্স সমর্থন করে না) এবং টাইপ অবশ্যই \`Date\` হতে হবে।
- **ক্যাপড কালেকশন**: ক্যাপড কালেকশনে এটি কাজ করবে না কারণ সেখানে রাইট ওভাররাইট ছাড়া ডিলিট করার সুযোগ নেই।
- **ডিস্ক রাইট চাপ**: একসাথে লক্ষ লক্ষ ডাটা ডিলিট হলে ডিস্কের ওপর প্রচুর প্রেশার পড়ে যা অ্যাপ্লিকেশনের গতি সাময়িকভাবে ধীর করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
পাসওয়ার্ড রিসেট সিস্টেমে:
- ইউজার ভেরিফিকেশন ওটিপি সেভ করার জন্য \`createdAt\` ফিল্ডের ওপর \`expireAfterSeconds: 300\` দিয়ে টিটিএল ইনডেক্স করা হয়েছে।
- ইউজার ৫ মিনিটের মধ্যে ওটিপি সাবমিট না করলে ডাটাবেস নিজে থেকেই ওটিপি ডকুমেন্টটি মুছে দেবে, আলাদা কোনো ক্রন জব (cron job) লাগবে না।

### উত্তম অনুশীলন
অতিরিক্ত ট্রাফিকের প্রজেক্টে টিটিএল ডিলিট অপারেশনের জন্য ডিস্ক বা সিপিইউ স্পাইক হতে পারে। এ ক্ষেত্রে ডাটাবেসের অফ-পিক আওয়ারে (যেমন রাতে) স্ক্রিপ্ট চালিয়ে ডিলিট করা ভালো।

### সাধারণ ভুলসমূহ
টিটিএল থ্রেড প্রতি মিনিটে একবার চলে তা ভুলে যাওয়া। আপনি যদি ১০ সেকেন্ড লাইফ সেট করেন, তবে ডকুমেন্ট ডিলিট হতে ৭০ সেকেন্ড পর্যন্ত সময় লাগতে পারে (যেহেতু থ্রেড প্রতি ৬০ সেকেন্ড পর চেক করে)।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  phoneNumber: String,
  code: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// ৫ মিনিট (৩০০ সেকেন্ড) পর ওটিপি ডকুমেন্ট স্বয়ংক্রিয়ভাবে মুছে ফেলার ইনডেক্স
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const OTP = mongoose.model('OTP', otpSchema);
\`\`\``
  },
  {
    id: 'mongodb-93',
    title: 'Explain Read Concerns in MongoDB and compare local, majority, linearizable, and snapshot modes.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Read Concern', 'Replica Set', 'Consistency', 'Database Administration'],
    enAnswer: 'Read concern controls the consistency and isolation of data read from a replica set. local/available returns the node\'s current state immediately (prone to dirty reads). majority returns data committed by a majority of nodes (prevents rollbacks). linearizable blocks until the primary confirms it is still primary. snapshot guarantees ACID transaction isolation.',
    bnAnswer: 'রিড কনসার্ন (Read Concern) রেপ্লিকা সেট থেকে ডাটা পড়ার সময় তার ধারাবাহিকতা ও আইসোলেশন নিয়ন্ত্রণ করে। local/available নোডের বর্তমান ডাটা সাথে সাথে রিটার্ন করে (রোলব্যাক ঝুঁকিপূর্ণ)। majority সংখ্যাগরিষ্ঠ নোডের মাধ্যমে রাইট হওয়া ডাটা রিটার্ন করে। linearizable প্রাইমারি নোডের স্থায়িত্ব যাচাই করে পড়ে। snapshot ট্রানজ্যাকশন আইসোলেশন রক্ষা করে।',
    enExplanation: `### Explanation
Read concerns define what level of replication safety you require when reading data from a replica set:

**1. \`local\` / \`available\`**:
- Returns data from the local replica set member immediately.
- **Risk**: The data might not have replicated to other secondaries. If the primary crashes before replication completes, this data is rolled back, causing a "dirty read" (reading data that eventually disappears).

**2. \`majority\`**:
- Returns data that has been acknowledged by a majority of voting members.
- **Benefit**: This data is durable and can never be rolled back in case of a node failure.

**3. \`linearizable\`**:
- The primary blocks the read request and pings other nodes to verify it is still the primary (preventing stale reads in split-brain scenarios).
- **Limitation**: Very high query latency; only works on the primary.

**4. \`snapshot\`**:
- Used inside multi-document transactions. It reads from a specific point-in-time snapshot, guaranteeing isolation and consistency across all operations in the transaction.

### Real-World Example
In a payment processing system:
- When verifying if a customer has paid before issuing a ticket, query using \`readConcern: "majority"\`. This ensures the payment record is permanently saved in the cluster before you issue the physical ticket.

### Best Practice
Use \`local\` (default) for fast, non-critical reads (e.g., social feed posts). Use \`majority\` for critical transactions where reading rolled-back data would cause serious business issues (e.g., banking balances, security tokens).

### Common Mistakes
Using \`linearizable\` read concern for high-throughput API endpoints. This converts fast read queries into blocking operations, creating serious bottleneck queues.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Querying with Majority Read Concern
const transaction = await Transaction.findOne({ transactionId: "TXN-9901" })
  .readConcern('majority'); // Guarantees data cannot be rolled back

// Querying inside transaction session (automatically uses snapshot isolation)
const session = await mongoose.startSession();
session.startTransaction({
  readConcern: { level: 'snapshot' },
  writeConcern: { w: 'majority' }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিড কনসার্ন ডিফাইন করে যে রেপ্লিকা সেট থেকে রিড করার সময় আপনি কতটা ডাটা সুরক্ষা ও ধারাবাহিকতা চান:

**১. \`local\` / \`available\` (লোকাল/এভেইলেবল):**
- স্থানীয় মেম্বার নোডে এই মুহূর্তে যা ডাটা আছে তা-ই সরাসরি রিটার্ন করে।
- **ঝুঁকি**: ডাটা মেজরিটি নোডে পৌঁছার আগেই প্রাইমারি নোড ডাউন হয়ে গেলে এই ডাটা মুছে (rollback) যেতে পারে। একে "ডার্টি রিড" (Dirty Read) বলে।

**২. \`majority\` (মেজরিটি):**
- শুধুমাত্র মেজরিটি (সংখ্যাগরিষ্ঠ) নোড দ্বারা স্থায়ী হওয়া কনফিগ কোড রিটার্ন করে।
- **সুবিধা**: এই ডাটা কখনোই রোলব্যাক হতে পারে না, ডাটা হারিয়ে যাওয়ার জিরো পারসেন্ট রিস্ক থাকে।

**৩. \`linearizable\` (লিনিয়ারাইজেবল):**
- প্রাইমারি অন্য নোডগুলোতে পিং পাঠিয়ে নিশ্চিত হয় যে সে নিজেই এখনও মেজরিটি দলের প্রাইমারি আছে (নেটওয়ার্ক বিভাজনের কারণে ডুপ্লিকেট প্রাইমারি তৈরি হওয়া প্রতিরোধ করে)।
- **সীমাবদ্ধতা**: এটি অত্যন্ত ধীরগতির।

**৪. \`snapshot\` (স্ন্যাপশট):**
- এটি মাল্টি-ডকুমেন্ট ট্রানজ্যাকশনের মধ্যে চলে। এটি একটি নির্দিষ্ট স্ন্যাপশট থেকে ডাটা পড়ে, ফলে ট্রানজ্যাকশন চলাকালীন ডাটার কোনো পরিবর্তন হলেও রিড ডিস্টার্বড হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট ভেরিফিকেশন অ্যাপে:
- গ্রাহককে টিকিট দেওয়ার আগে চেক করতে হবে সে পেমেন্ট করেছে কিনা। এ ক্ষেত্রে \`readConcern: "majority"\` ব্যবহার করুন। এর ফলে পেমেন্টের ডাটা ডাটাবেসে পার্মানেন্ট সেভ হওয়া নিশ্চিত হবে ও ফ্রড রোখা যাবে।

### উত্তম অনুশীলন
সাধারণ রিডের জন্য (যেমন পোস্ট ফিড) ডিফল্ট \`local\` রিড ব্যবহার করুন যা সুপার ফাস্ট। ফাইনান্সিয়াল স্টেটমেন্ট বা গুরুত্বপূর্ণ ডাটা চেকিংয়ের জন্য \`majority\` ব্যবহার করুন যাতে ক্ষণস্থায়ী বা রোলব্যাক হওয়া ডাটা দিয়ে ভুল হিসাব না হয়।

### সাধারণ ভুলসমূহ
উচ্চ ট্রাফিকের এন্ডপয়েন্টগুলোতে \`linearizable\` রিড কনসার্ন ব্যবহার করা। এটি প্রতিটি ফাস্ট রিড কুয়েরিকে ব্লকিং নেটওয়ার্ক কলে পরিণত করে পুরো এপিআই সার্ভারকে ডাউন করে দেয়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Majority Read Concern দিয়ে ডাটা কুয়েরি করার নিয়ম
const transaction = await Transaction.findOne({ transactionId: "TXN-9901" })
  .readConcern('majority'); // ডাটা রোলব্যাক হওয়ার সম্ভাবনা নেই

// ট্রানজ্যাকশন সেশনের ভেতরে অটো স্ন্যাপশট রিড কনসার্ন রান হওয়া
const session = await mongoose.startSession();
session.startTransaction({
  readConcern: { level: 'snapshot' },
  writeConcern: { w: 'majority' }
});
\`\`\``
  },
  {
    id: 'mongodb-94',
    title: 'Explain Write Concerns in MongoDB and compare the behaviors of w:1, w:majority, and j:true.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Write Concern', 'Replica Set', 'Data Safety', 'Database Administration'],
    enAnswer: 'Write concern describes the level of acknowledgement requested from MongoDB for write operations. w:1 returns success after the primary node writes to memory. w:majority returns success after a majority of replica set nodes write to memory. j:true guarantees the write is flushed to the physical journal file on disk before success is returned.',
    bnAnswer: 'রাইট কনসার্ন (Write Concern) নির্ধারণ করে ডাটা রাইট হওয়ার পর মঙ্গোডিবি কখন ক্লায়েন্টকে সফলতার রেসপন্স পাঠাবে। w:1 প্রাইমারি নোডের র‍্যামে রাইট সম্পন্ন হলেই রেসপন্স দেয়। w:majority মেজরিটি রেপ্লিকা নোডের র‍্যামে রাইট হলে রেসপন্স দেয়। j:true ডাটা হার্ডডিস্কের জার্নাল (journal) ফাইলে সেভ হওয়া নিশ্চিত করে রেসপন্স দেয়।',
    enExplanation: `### Explanation
Write concerns manage the trade-off between write performance (latency) and data durability:

**1. \`{ w: 1 }\` (Default)**:
- Success is returned as soon as the write is acknowledged by the **Primary node** in memory.
- **Latency**: Very low.
- **Risk**: If the primary crashes before replicating this write to the secondaries, the write is lost.

**2. \`{ w: "majority" }\`**:
- Success is returned only when the write has replicated to the memory of a **majority** of voting members (e.g., 2 out of 3 nodes).
- **Durability**: High. In case of primary failure, the elected new primary is guaranteed to have this write.

**3. \`{ j: true }\` (Journaling Acknowledgement)**:
- Guarantees the write is flushed to the physical WiredTiger **journal file on disk** before returning success.
- **Default behavior**: MongoDB writes to the journal every 100ms. By setting \`j: true\`, the client forces an immediate flush.
- **Use Case**: Critical data updates where loss during a power outage is unacceptable.

### Real-World Example
In a banking application:
- Crediting money to a user's account requires \`writeConcern: { w: "majority", j: true, wtimeout: 5000 }\`. This ensures the balance is written to the disks of a majority of servers, preventing balance losses during server crashes.

### Best Practice
Configure your replica set's default write concern to \`w: "majority"\` in MongoDB 5.0+. For critical transactions, pair it with \`j: true\` and always specify a \`wtimeout\` (e.g., 5000ms) to prevent write queries from hanging indefinitely if a secondary node becomes unresponsive.

### Common Mistakes
Using \`{ j: true }\` on high-throughput, non-critical logging collections. This turns database writes into blocking disk I/O operations, slowing down performance.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Configure Schema-level Write Concern
const paymentSchema = new mongoose.Schema({
  userId: String,
  amount: Number
}, {
  writeConcern: {
    w: 'majority',      // Must write to majority of nodes
    j: true,            // Must write to disk journal
    wtimeout: 2000      // Timeout after 2 seconds if replica lag is high
  }
});

const Payment = mongoose.model('Payment', paymentSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রাইট কনসার্ন ল্যাটেন্সি (গতি) বনাম ডাটা সিকিউরিটির (স্থায়িত্ব) ভারসাম্য বজায় রাখতে ভূমিকা রাখে:

**১. \`{ w: 1 }\` (ডিফল্ট):**
- প্রাইমারি সার্ভার নিজের র‍্যামে ডাটা রাইট করার সাথে সাথে ক্লায়েন্টকে সাকসেস মেসেজ দিয়ে দেয়।
- **ল্যাটেন্সি**: অত্যন্ত কম (দ্রুত কাজ করে)।
- **ঝুঁকি**: ডাটা অন্যান্য সেকেন্ডারিতে ট্রান্সফার হওয়ার আগেই যদি প্রাইমারি সার্ভার ফেইল করে, তবে ডাটাটি পার্মানেন্টলি ডিলিট হয়ে যাবে।

**২. \`{ w: "majority" }\`:**
- সংখ্যাগরিষ্ঠ ভোটিং মেম্বারের মেমোরিতে (যেমন ৩টির মধ্যে ২টি নোডে) রাইট সম্পন্ন হলে তবেই সাকসেস মেসেজ আসে।
- **সুরক্ষা**: অনেক বেশি। প্রাইমারি ডাউন হলেও নতুন প্রাইমারিতে এই ডাটা সংরক্ষিত থাকবে।

**৩. \`{ j: true }\` (জার্নালিং):**
- এটি নিশ্চিত করে যে ডাটা ডিস্কের WiredTiger **জার্নাল ফাইলে** সেভ হয়েছে, তারপর সাকসেস রিটার্ন করবে।
- **কার্যপ্রণালী**: মঙ্গোডিবি সাধারণত ১০০ মি.সে. পরপর ডিস্কে রাইট করে। \`j: true\` দিলে ডাটা সাথে সাথে ডিস্কে সেভ করা বাধ্যতামূলক করা হয়।
- **ব্যবহার**: ব্যাংক ব্যালেন্স আপডেট বা ইউজার পেমেন্ট সংক্রান্ত ডাটা।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং বা পেমেন্ট সিস্টেমে ব্যালেন্স আপডেট করার সময় \`writeConcern: { w: "majority", j: true, wtimeout: 5000 }\` ব্যবহার করা উচিত। এর ফলে পেমেন্ট ডাটা একাধিক সার্ভারের ডিস্কে সুরক্ষিত হয় এবং বিদ্যুৎ চলে গেলেও ডাটা লস হয় না।

### উত্তম অনুশীলন
মঙ্গোডিবি ৫.০+ ভার্সনে আপনার ক্লাস্টারের ডিফল্ট রাইট কনসার্ন \`w: "majority"\` রাখুন। গুরুত্বপূর্ণ আপডেটে এর সাথে \`j: true\` এবং সর্বদা একটি \`wtimeout\` (যেমন ৫০০০ মি.সে.) সেট করুন যাতে কোনো নেটওয়ার্ক সমস্যার কারণে কুয়েরি চিরদিনের জন্য ঝুলে না থাকে।

### সাধারণ ভুলসমূহ
উচ্চ ফ্রিকোয়েন্সির লগ জেনারেট করার ফাইলে \`{ j: true }\` ব্যবহার করা। এতে অতিরিক্ত ডিস্ক আইও (I/O) প্রেশারের কারণে সিস্টেম জ্যাম হয়ে যাবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// স্কিমা লেভেলে কঠোর রাইট কনসার্ন সেটিংস কনফিগার করা
const paymentSchema = new mongoose.Schema({
  userId: String,
  amount: Number
}, {
  writeConcern: {
    w: 'majority',      // মেজরিটি নোডে রাইট হওয়া লাগবে
    j: true,            // হার্ডডিস্ক জার্নালে সেভ করা লাগবে
    wtimeout: 2000      // ২ সেকেন্ড ল্যাগের বেশি হলে টাইমআউট দেবে
  }
});

const Payment = mongoose.model('Payment', paymentSchema);
\`\`\``
  },
  {
    id: 'mongodb-95',
    title: 'Explain the MongoDB Query Optimizer and Query Plan Cache eviction rules.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Query Optimizer', 'Execution Plans', 'Performance', 'Database Administration'],
    enAnswer: 'The MongoDB Query Optimizer runs candidate index plans in parallel to evaluate execution speeds. The fastest plan is saved in the Query Plan Cache. The cache entry is evicted (cleared) if the index changes, the collection is dropped, the server restarts, or the query performance degrades (examined-to-returned ratio exceeds threshold).',
    bnAnswer: 'মঙ্গোডিবি কুয়েরি অপ্টিমাইজার ইনডেক্স প্ল্যানগুলো প্যারালালি চালিয়ে প্রসেসিং স্পিড পরীক্ষা করে। সবচেয়ে দ্রুততম প্ল্যানটি কুয়েরি প্ল্যান ক্যাশ (Query Plan Cache)-এ সেভ করা হয়। ইনডেক্স পরিবর্তন হলে, কালেকশন ড্রপ হলে, সার্ভার রিস্টার্ট হলে বা কুয়েরির পারফরম্যান্স হঠাৎ ধীর হলে ক্যাশ থেকে প্ল্যানটি মুছে দিয়ে নতুন করে ইনডেক্স রি-টেস্ট করা হয়।',
    enExplanation: `### Explanation
To choose the most efficient index path, MongoDB uses an empirical testing system:

**1. Candidate Plan Selection**:
- When a query is run and no cached plan exists, the optimizer identifies eligible indexes.
- It spins up trial runs in parallel, scoring the execution plans based on how few documents they need to scan.
- The plan with the highest score is declared the **winning plan**, and other plans are designated as **losing plans**.

**2. Query Plan Cache**:
- The winning plan is cached so subsequent identical queries execute instantly without the testing phase overhead.

**3. Eviction Rules (When the cache is cleared):**
- **DDL Actions**: Rebuilding or creating an index, or dropping a collection.
- **Server Shutdown**: The plan cache is stored in RAM and cleared on mongod restart.
- **Data Growth / Drift**: If 1,000 writes occur in the collection, the query plan is re-evaluated.
- **Inefficiency Detection**: If the cached winning plan starts scanning too many keys (e.g. \`totalKeysExamined\` grows compared to \`nReturned\`), the cache entry is evicted.

### Real-World Example
Suppose you search for users by \`{ status: "active", country: "US" }\`. The database has separate indexes on both fields. The optimizer tests both.
- If US users are rare, the \`country\` index is faster.
- The optimizer caches the \`country\` index plan.
- If you import 10 million US users, searching by \`country\` becomes slow. The optimizer detects this, evicts the plan from cache, and re-runs parallel tests to choose a new winning plan.

### Best Practice
If you have a complex query where the optimizer repeatedly chooses the wrong index (e.g., in edge cases with skewed data distribution), use **Index Hints** (\`hint()\`) to force the query to use the correct index path.

### Common Mistakes
Forgetting that query plan caches are query-shape dependent. If your query filters changes slightly (e.g. adding a new field filter), a separate plan testing phase occurs, causing a minor initial latency spike.

### Code Example
\`\`\`javascript
// View the cached query plans for a collection
db.products.getPlanCache().list();

// Clear the plan cache for a specific query shape
db.products.getPlanCache().clearPlansByFilter({
  category: "Electronics",
  status: "active"
});

// Force query to bypass optimizer and use a specific index (Hint)
db.products.find({
  category: "Electronics",
  status: "active"
}).hint({ category: 1 }); // Force index usage
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সবচেয়ে কার্যকরী ইনডেক্স দিয়ে কুয়েরি সম্পন্ন করতে মঙ্গোডিবি একটি পরীক্ষা পদ্ধতি চালায়:

**১. ক্যান্ডিডেট প্ল্যান সিলেকশন:**
- যখন কোনো কুয়েরি প্রথম রান হয়, অপ্টিমাইজার যোগ্য ইনডেক্সগুলোর তালিকা করে।
- এটি ব্যাকগ্রাউন্ডে ইনডেক্স প্ল্যানগুলো একসাথে চালিয়ে চেক করে কোনটি সবচেয়ে কম ডকুমেন্ট স্ক্যান করে ডাটা রিটার্ন করেছে।
- সেরা পারফর্ম করা পথটিকে **winning plan** (জয়ী প্ল্যান) ও বাকিগুলোকে losing plan বলে।

**২. কুয়েরি প্ল্যান ক্যাশ:**
- জয়ী প্ল্যানটি মেমোরিতে ক্যাশ করে রাখা হয়, যাতে পরবর্তীতে একই ধরণের কুয়েরি সরাসরি ইনডেক্স দিয়ে সম্পন্ন হতে পারে।

**৩. ক্যাশ ডিলিট হওয়ার নিয়ম (Eviction Rules):**
- **ইনডেক্স আপডেট**: নতুন ইনডেক্স তৈরি বা ডিলিট হলে, অথবা কালেকশন ড্রপ হলে।
- **সার্ভার রিস্টার্ট**: ক্যাশ মেমোরি র‍্যামে থাকায় রিস্টার্টে মুছে যায়।
- **ডাটা পরিবর্তন**: কালেকশনে ১০০০টির বেশি ডাটা ডিলিট/আপডেট হলে রি-ইভালুয়েশন হয়।
- **ধীরগতি**: কোনো কারণে ক্যাশের জয়ী প্ল্যানটি বেশি ডাটা স্ক্যান করতে শুরু করলে (যেমন ডাটার অনুপাত বদলে গেলে) ক্যাশ রিলিজ হয়ে পুনরায় টেস্ট চলে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারদের \`{ status: "active", country: "US" }\` ফিল্টার দিয়ে খোঁজা হচ্ছে। ডাটাবেসে দুটিরই আলাদা ইনডেক্স আছে।
- যদি আমেরিকায় ইউজারের সংখ্যা খুব কম হয়, তবে \`country\` ইনডেক্সটি দ্রুত ডাটা দেবে এবং এটি ক্যাশে সেভ হবে।
- পরবর্তীতে যদি আমেরিকায় ১ কোটি ইউজার যুক্ত হয়, তবে \`country\` ইনডেক্সটি স্লো হয়ে যাবে। মঙ্গোডিবি এটি বুঝতে পেরে ক্যাশ থেকে প্ল্যানটি মুছে দিয়ে পুনরায় টেস্ট করে অন্য ইনডেক্স সেট করবে।

### উত্তম অনুশীলন
ডাটাবেস অপ্টিমাইজার কখনো ভুল ইনডেক্স সিলেক্ট করলে (সাধারণত ডাটা ডিস্ট্রিবিউশন আঁকাবাঁকা হলে), কুয়েরি শেষে \`hint()\` মেথড ব্যবহার করে ডাটাবেসকে নির্দিষ্ট ইনডেক্স ব্যবহারে বাধ্য করুন।

### সাধারণ ভুলসমূহ
মনে রাখা যে কুয়েরির সামান্য ফিল্টার পরিবর্তনের ফলেও ক্যাশ ইনভ্যালিড হয়ে নতুন ট্রায়াল রান শুরু হয়, যা প্রথম কুয়েরিটিতে সামান্য ল্যাটেন্সি বাড়ায়।

### Code Example
\`\`\`javascript
// কালেকশনের ক্যাশ প্ল্যানগুলোর তালিকা দেখা
db.products.getPlanCache().list();

// নির্দিষ্ট কুয়েরি আকারের জন্য ক্যাশ প্ল্যান মুছে ফেলা
db.products.getPlanCache().clearPlansByFilter({
  category: "Electronics",
  status: "active"
});

// অপ্টিমাইজার এড়িয়ে নির্দিষ্ট ইনডেক্স ব্যবহারে বাধ্য করা (Hint)
db.products.find({
  category: "Electronics",
  status: "active"
}).hint({ category: 1 }); // এই ইনডেক্সটি ব্যবহারে বাধ্য করা
\`\`\``
  },
  {
    id: 'mongodb-96',
    title: 'Explain Capped Collections and their limitations and structural advantages in MongoDB.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Capped Collections', 'Database Architecture', 'Performance'],
    enAnswer: 'Capped collections are fixed-size collections that insert documents in circular FIFO (First-In-First-Out) order. Once the allocated storage limit is reached, new writes overwrite the oldest documents. Limitations: you cannot delete documents, modify document size, or shard capped collections.',
    bnAnswer: 'ক্যাপড কালেকশন (Capped Collections) হলো নির্দিষ্ট সাইজের কালেকশন যা FIFO (আগে আসলে আগে যাবে) ভিত্তিতে কাজ করে। স্টোরেজ লিমিট পূর্ণ হলে নতুন ডাটা রাইট করার সময় সবচেয়ে পুরোনো ডাটা ওভাররাইট হয়ে যায়। সীমাবদ্ধতা: এখান থেকে ডকুমেন্ট ডিলিট করা যায় না, ফাইলের সাইজ বাড়ানো যায় না এবং শার্ডিং করা যায় না।',
    enExplanation: `### Explanation
Capped collections operate like circular buffers. They are created with a maximum size in bytes.

**Structural Advantages:**
1. **High Write Performance**: Since documents are written in natural sequence (circular buffer), there is no fragmentation on disk. Writes are append-only, saving disk write I/O.
2. **Natural Sort Order**: Queries returning documents in insertion order do not require an index or sort stage. MongoDB reads them directly from disk in natural sequence.
3. **Tailable Cursors**: Clients can keep a cursor open on a capped collection (similar to \`tail -f\` in Unix), enabling real-time event streaming without polling.

**Limitations:**
- **No Deletes**: You cannot run \`deleteOne\` or \`deleteMany\` on a capped collection.
- **Immutable Document Size**: Updates that cause a document to grow in size are blocked. Only updates that keep the exact same size are allowed.
- **No Sharding**: Capped collections cannot be sharded across cluster nodes.

### Real-World Example
Capped collections are ideal for system log files, audit trails, and high-frequency messaging queues.
- For a chat application: Storing the last 10,000 messages in a capped collection ensures fast historical retrieval while automatically purging ancient messages without complex database clean-up scripts.

### Best Practice
Always specify both \`size\` (maximum bytes, which is mandatory) and \`max\` (maximum number of documents) when defining a capped collection. Capped collections are great for logging but never use them for master business entities like Users or Orders where deletions or updates occur.

### Common Mistakes
Trying to use Mongoose's \`remove()\` or standard delete query methods on a capped collection, which yields a database operation error: "cannot delete from a capped collection".

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Creating a Capped Collection via Mongoose Connection
mongoose.connection.on('open', async () => {
  const db = mongoose.connection.db;
  
  // Create a capped collection of maximum 5MB or 5000 documents
  await db.createCollection('systemLogs', {
    capped: true,
    size: 5242880, // 5MB in bytes (Mandatory)
    max: 5000      // Maximum document count limit
  });
});

// Capped collections support Tailable Cursors in Node.js
function tailLogs(SystemLogModel) {
  const stream = SystemLogModel.find({})
    .cursor({ tailable: true, awaitData: true }); // Tailable configuration

  stream.on('data', (doc) => {
    console.log('New log captured:', doc);
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্যাপড কালেকশন ফিক্সড-সাইজ সার্কুলার বাফারের মতো কাজ করে। এটি তৈরির সময়ই সর্বোচ্চ মেমোরি সাইজ বাইট আকারে দিয়ে দিতে হয়।

**আর্কিটেকচারাল সুবিধা:**
১. **উচ্চ রাইট পারফরম্যান্স**: ডাটা সিকোয়েন্সিয়ালি জমা হয় বলে হার্ডডিস্কে কোনো ফ্র্যাগমেন্টেশন (fragmentation) ঘটে না। ডিরেক্ট অ্যাপেন্ড অপারেশন চলায় রাইট স্পিড অত্যন্ত বেশি থাকে।
২. **ন্যাচারাল সর্টিং**: ইনসার্ট হওয়ার ক্রমানুসারে ডাটা পেতে কোনো ইনডেক্স বা সর্ট পাইপলাইন লাগে না। মঙ্গোডিবি ন্যাচারাল সিকোয়েন্সে ফাস্ট রিড করে।
৩. **টেইলেবল কার্সার (Tailable Cursors)**: নোডজেএস ক্লায়েন্ট টেইলেবল কার্সার দিয়ে কালেকশনটি ট্র্যাক করে রাখতে পারে (যেমন লিনাক্সে \`tail -f\`), ফলে ডাটাবেসে নতুন ডাটা পুশ হওয়ার সাথে সাথে তা ক্লায়েন্ট নোটিফিকেশনে চলে আসে।

**সীমাবদ্ধতা:**
- **ডিলিট করা নিষেধ**: আপনি এই কালেকশন থেকে কোনো ডকুমেন্ট ডিলিট করতে পারবেন না।
- **সাইজ মিউটেশন নিষেধ**: আপডেট করার কারণে যদি কোনো ডকুমেন্টের সাইজ আগের চেয়ে বাড়ে, তবে মঙ্গোডিবি সে আপডেট রিজেক্ট করবে।
- **শার্ডিং অসম্ভব**: ক্যাপড কালেকশন একাধিক সার্ভারে শার্ডিং করা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
লগ ট্র্যাকিং ও চ্যাট মেসেজ কিউ-এর জন্য এটি আদর্শ।
- চ্যাট অ্যাপে শেষ ১০,০০০ মেসেজ সংরক্ষণ করতে ক্যাপড কালেকশন সেট করা হলো। এর ফলে নতুন চ্যাট এলে পুরোনো চ্যাট অটো মুছে যায়, মেমোরি খালি করার জন্য বাড়তি কোড বা ক্রন জব লিখতে হয় না।

### উত্তম অনুশীলন
ক্যাপড কালেকশন তৈরির সময় সর্বদা \`size\` (বাইট লিমিট - আবশ্যিক) এবং \`max\` (ফাইলের সংখ্যা সীমা) নির্ধারণ করে দিন। এটি শুধুমাত্র সিস্টেমে অনলি-রাইট/রিড লগের জন্য ব্যবহার করুন, ইউজার বা প্রোডাক্টের মতো এডিটেবল ডাটাতে ব্যবহার করবেন না।

### সাধারণ ভুলসমূহ
ক্যাপড কালেকশনের ওপর সাধারণ ডিলিট কুয়েরি চালানো। ডাটাবেস সাথে সাথে "cannot delete from a capped collection" এরর দেখাবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// মঙ্গুস কানেকশনে ক্যাপড কালেকশন তৈরি করার নিয়ম
mongoose.connection.on('open', async () => {
  const db = mongoose.connection.db;
  
  // ৫ মেগাবাইট বা সর্বোচ্চ ৫০০০টি ফাইলের ক্যাপড কালেকশন তৈরি
  await db.createCollection('systemLogs', {
    capped: true,
    size: 5242880, // ৫ এমবি বাইটে (আবশ্যিক)
    max: 5000      // সর্বোচ্চ ফাইলের সংখ্যা
  });
});

// নোডজেএস-এ টেইলেবল কার্সার দিয়ে লাইভ লগ ট্র্যাকিং
function tailLogs(SystemLogModel) {
  const stream = SystemLogModel.find({})
    .cursor({ tailable: true, awaitData: true }); // টেইলেবল কার্সার সেটিংস

  stream.on('data', (doc) => {
    console.log('নতুন লগ এসেছে:', doc);
  });
}
\`\`\``
  },
  {
    id: 'mongodb-97',
    title: 'Explain Mongoose Schema Discriminators and how they facilitate schema inheritance.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Mongoose', 'Schema', 'Discriminators', 'OOP'],
    enAnswer: 'Mongoose Discriminators are a schema inheritance mechanism. They allow you to define multiple models with differing schemas on top of a single underlying MongoDB collection. They utilize a discriminatorKey (default __t) to distinguish document types and automatically apply query filters.',
    bnAnswer: 'মঙ্গুস ডিসক্রিমিনেটর (Discriminators) হলো স্কিমা ইনহেরিটেন্সের একটি মাধ্যম। এটি একটিমাত্র মঙ্গোডিবি কালেকশনের ওপর ভিন্ন ভিন্ন স্কিমা বিশিষ্ট একাধিক মডেল তৈরি করার সুবিধা দেয়। এটি ডকুমেন্টের ধরণ আলাদা করতে একটি discriminatorKey (ডিফল্ট \`__t\`) ব্যবহার করে এবং অটো কুয়েরি ফিল্টার যুক্ত করে।',
    enExplanation: `### Explanation
In object-oriented programming, inheritance is a core pattern (e.g., a \`User\` can be an \`AdminUser\` or a \`CustomerUser\`). In MongoDB, storing polymorphic structures in separate collections requires separate query handles.

**How Discriminators Work:**
1. **Single Collection**: All documents derived from the base model and its discriminators are saved in the **same MongoDB collection**.
2. **Discriminator Key**: Mongoose adds a field named \`__t\` containing the model name to identify the document type.
3. **Schema Separation**: When saving an \`AdminUser\`, Mongoose validates it using the admin schema properties.
4. **Query Isolation**: Calling \`AdminUser.find()\` automatically appends \`{ __t: "AdminUser" }\` to the query, hiding standard customer users.

### Real-World Example
In a payment processing gateway:
- You have a base \`Transaction\` schema containing \`amount\` and \`status\`.
- You inherit it to create \`CreditCardTransaction\` (adding \`cardNumber\`) and \`PaypalTransaction\` (adding \`paypalEmail\`).
- All transactions are stored in a single \`transactions\` collection, making reporting simple, while Mongoose handles schema-specific validations.

### Best Practice
Use discriminators when you have models that share many identical fields but have a few different properties and methods. This keeps your database normalized in a single collection, reducing query joins, while preserving object-oriented class patterns.

### Common Mistakes
Using discriminators when models have completely different schemas. If the models share almost zero fields (e.g. \`Car\` and \`Order\`), storing them in the same collection via discriminators is a bad design that creates massive, sparse, unmanageable documents.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Base Schema
const baseOption = { discriminatorKey: 'kind' }; // Custom discriminator key
const eventSchema = new mongoose.Schema({
  title: String,
  time: Date
}, baseOption);

const EventModel = mongoose.model('Event', eventSchema);

// Discriminator 1: Click Event Schema
const ClickedEvent = EventModel.discriminator('Clicked', new mongoose.Schema({
  elementId: String,
  url: String
}));

// Discriminator 2: Purchase Event Schema
const PurchasedEvent = EventModel.discriminator('Purchased', new mongoose.Schema({
  price: Number,
  quantity: Number
}));

// Saving a PurchasedEvent will write to 'events' collection with 'kind: "Purchased"'
const purchase = new PurchasedEvent({ title: "Checkout", time: new Date(), price: 99, quantity: 1 });
await purchase.save();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের ইনহেরিটেন্স বা উত্তরাধিকার ধারণা মঙ্গুসে ডিক্লেয়ার করতে ডিসক্রিমিনেটর ব্যবহার করা হয় (যেমন: একজন \`User\` হতে পারে \`Admin\` অথবা \`Customer\`):

**কার্যপ্রণালী:**
১. **একক কালেকশন (Single Collection)**: বেস মডেল ও তার থেকে তৈরি সমস্ত চাইল্ড মডেলের ডাটা ডাটাবেসের **একটি সাধারণ টেবিলেই** সেভ হয়।
২. **ডিসক্রিমিনেটর কি (__t)**: মঙ্গুস ডাটা আলাদা করে চিনতে ফাইলে একটি \`__t\` বা কাস্টম কি যুক্ত করে যার মান হয় চাইল্ড মডেলের নাম।
৩. **ভ্যালিডেশন সেপারেশন**: চাইল্ড মডেল দিয়ে ডাটা সেভ করার সময় মঙ্গুস শুধুমাত্র সেই চাইল্ডের নির্ধারিত ফিল্ডগুলো ভ্যালিডেট করে।
৪. **কুয়েরি আইসোলেশন**: আপনি যখন \`AdminUser.find()\` কল করবেন, মঙ্গুস অটোমেটিকালি ফিল্টারে \`{ __t: "AdminUser" }\` যুক্ত করে কুয়েরি করবে, ফলে কাস্টমারদের ডাটা হাইড থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট গেটওয়েতে:
- একটি বেস মডেল \`Transaction\` (অ্যামাউন্ট, স্ট্যাটাস সহ)।
- এটি ইনহেরিট করে তৈরি হলো \`CreditCardTransaction\` (কার্ড নম্বর সহ) এবং \`PaypalTransaction\` (ইমেইল সহ)।
- সব ডাটা একক কালেকশন \`transactions\`-এ জমা হবে। এতে পুরো ব্যালেন্স শিট তৈরি করা সহজ হবে, আবার স্কিমা ভ্যালিডেশনও আলাদা থাকবে।

### উত্তম অনুশীলন
যদি মডেলগুলোর মধ্যে ৬০% এর বেশি প্রপার্টি এক হয় এবং সামান্য কিছু ফিল্ডের পার্থক্য থাকে, তবে ডিসক্রিমিনেটর ব্যবহার করুন। এটি ডাটাবেসের কালেকশন সংখ্যা কমায় এবং কুয়েরি জয়েন ছাড়াই ফাস্ট রিডের সুবিধা দেয়।

### সাধারণ ভুলসমূহ
সম্পূর্ণ বিপরীত দুটি মডেলের জন্য এটি ব্যবহার করা। যদি দুটির মধ্যে কোনো কমন প্রপার্টি না থাকে (যেমন: \`Car\` ও \`Order\`), তবে জোর করে ডিসক্রিমিনেটর ব্যবহার করলে ডাটাবেস অগোছালো ও জটিল হয়ে পড়বে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// বেস স্কিমা ডিফাইন
const baseOption = { discriminatorKey: 'kind' }; // কাস্টম ডিসক্রিমিনেটর কি
const eventSchema = new mongoose.Schema({
  title: String,
  time: Date
}, baseOption);

const EventModel = mongoose.model('Event', eventSchema);

// ডিসক্রিমিনেটর ১: ক্লিক ইভেন্ট স্কিমা
const ClickedEvent = EventModel.discriminator('Clicked', new mongoose.Schema({
  elementId: String,
  url: String
}));

// ডিসক্রিমিনেটর ২: পারচেজ ইভেন্ট স্কিমা
const PurchasedEvent = EventModel.discriminator('Purchased', new mongoose.Schema({
  price: Number,
  quantity: Number
}));

// PurchasedEvent সেভ করলে 'events' টেবিলে 'kind: "Purchased"' ভ্যালু সহ সেভ হবে
const purchase = new PurchasedEvent({ title: "কেনার ইভেন্ট", time: new Date(), price: 99, quantity: 1 });
await purchase.save();
\`\`\``
  },
  {
    id: 'mongodb-98',
    title: 'How do you mitigate MongoDB Out-of-Memory (OOM) crashes in production environments?',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['OOM', 'Performance', 'Database Administration', 'Troubleshooting'],
    enAnswer: 'MongoDB OOM crashes are prevented by manually capping the WiredTiger cache size, enabling aggregation disk usage (allowDiskUse) to prevent RAM exhaustion, monitoring and limiting connections, and ensuring all database queries are indexed to avoid large scale memory sorting.',
    bnAnswer: 'মঙ্গোডিবি ওওএম (OOM) ক্র্যাশ এড়াতে WiredTiger ক্যাশ সাইজ ম্যানুয়ালি সীমিত করতে হয়, ভারী এগ্রিগেশন কুয়েরিতে ডিস্ক রাইট (\`allowDiskUse\`) সক্রিয় করতে হয়, সর্বোচ্চ কানেকশন পুল কন্ট্রোল করতে হয় এবং মেমোরিতে বড় সর্টিং এড়াতে সব কুয়েরিতে ইনডেক্স ব্যবহার বাধ্যতামূলক করতে হয়।',
    enExplanation: `### Explanation
The Linux Out-of-Memory (OOM) Killer terminates processes that exhaust system RAM to protect the OS kernel. MongoDB is a common target if memory consumption spikes unchecked.

**Mitigation Steps:**
1. **WiredTiger Cache Cap**: By default, WiredTiger takes 50% of total RAM. If you run other processes on the same host, limit cache size manually via \`wiredTiger.engineConfig.cacheSizeGB\`.
2. **Aggregation RAM Limits**: MongoDB restricts aggregation stages to **100MB of RAM** per query. If a query exceeds this, it throws an error. However, if multiple queries run concurrently near the limit, it can trigger OOM. Enable \`allowDiskUse: true\` to write temporary data to disk.
3. **Connection Overhead**: Each database connection consumes up to 1MB of RAM. 1,000 active connections consume 1GB of RAM just for socket overhead. Configure connection pooling limits in the client driver (\`maxPoolSize\`).
4. **Prevent Unindexed Sorts**: If a sort query cannot use an index and the result set exceeds **32MB**, it fails. Ensure all sorts use indexes to avoid buffering document keys in RAM.

### Real-World Example
A Node.js server starts spawning hundreds of new worker instances during a traffic burst, opening 2,000 parallel database connections.
- MongoDB connection overhead spikes RAM usage by 2GB.
- Concurrently, an admin runs an unindexed export report on 5 million rows.
- The system RAM gets exhausted, the Linux OS triggers OOM Killer, and terminates the \`mongod\` process.

### Best Practice
Run MongoDB on a dedicated database instance rather than sharing resources with web servers. Always limit the client-side connection pool size to reasonable values (e.g. \`maxPoolSize: 50\`) and monitor memory metrics regularly.

### Common Mistakes
Failing to monitor the ratio of free RAM on the database host. Relying purely on CPU monitoring will fail to alert you when the database is minutes away from an OOM crash.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Connect to MongoDB with safe connection pooling configurations
mongoose.connect('mongodb://localhost:27017/mydb', {
  maxPoolSize: 50,          // Limit connections per client to 50
  minPoolSize: 10,          // Keep 10 connections warm
  socketTimeoutMS: 45000,   // Close idle sockets
});

// Running heavy aggregation queries with disk fallback configuration
const heavyReport = await Transaction.aggregate([
  { $group: { _id: "$userId", totalSpend: { $sum: "$amount" } } }
]).allowDiskUse(true); // Prevents OOM by using temp files on disk if RAM > 100MB
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিনাক্স অপারেটিং সিস্টেম মেমোরি শেষ হয়ে ক্র্যাশ হওয়া রুখতে সংবেদনশীল অতিরিক্ত মেমোরি নেওয়া প্রসেসগুলোকে বন্ধ (kill) করে দেয়। একে OOM Killer বলে।

**OOM ক্র্যাশ প্রতিরোধের উপায়সমূহ:**
১. **WiredTiger ক্যাশ লিমিট**: মঙ্গোডিবির ইন্টারনাল ক্যাশ লিমিট ম্যানুয়ালি কনফিগার করে রাখুন (যেমন মোট র‍্যামের ৪০%) যাতে ওএস প্রসেস চলার মতো পর্যাপ্ত মেমোরি ফাঁকা থাকে।
২. **এগ্রিগেশন মেমোরি লিমিট**: এগ্রিগেশনে প্রতি কুয়েরি সর্বোচ্চ ১০০ এমবি র‍্যাম ব্যবহার করতে পারে। কুয়েরি এর চেয়ে বড় হলে ওওএম এড়াতে \`allowDiskUse: true\` ব্যবহার করুন, যা র‍্যামের বদলে হার্ডডিস্কে বাফার তৈরি করে।
৩. **কানেকশন ওভারহেড**: প্রতিটি নতুন ডাটাবেস কানেকশন প্রায় ১ এমবি র‍্যাম রিজার্ভ করে। ১০০০ কানেকশন মানেই খালি কানেকশনেই ১ জিবি র‍্যাম শেষ। তাই ক্লায়েন্টে \`maxPoolSize\` সীমিত রাখা উচিত।
৪. **ইনডেক্সড সর্টিং**: ইনডেক্স ছাড়া সর্টিং মেমোরিতে ৩২ এমবি লিমিট পার করলে কুয়েরি ফেইল করে। তাই সর্ট ফিল্ডে ইনডেক্স রাখা বাধ্যতামূলক।

### বাস্তব-ভিত্তিক উদাহরণ
হঠাৎ ট্রাফিক আসায় নোডজেএস সার্ভার ২০০টি নতুন থ্রেড খুলে মোট ২,০০০টি কানেকশন ডাটাবেসে পাঠাল। এতে ডাটাবেসের র‍্যাম ২ জিবি ফুরিয়ে গেল। একই সময় ব্যাক-অফিসে ইনডেক্স ছাড়া ১০ লক্ষ ডাটার রিপোর্ট এগ্রিগেশন চালানো হলো। সিস্টেম মেমোরি খালি না থাকায় লিনাক্স ওএস সাথে সাথে \`mongod\` প্রসেসটিকে টার্মিনেট বা কিল করে দিল।

### উত্তম অনুশীলন
মঙ্গোডিবি সর্বদা আলাদা ডেডিকেটেড সার্ভারে হোস্ট করুন (শেয়ার্ড সার্ভারে না রেখে)। কানেকশন পুলে \`maxPoolSize: 50\`-এর মতো লিমিট ব্যবহার করুন এবং ওওএম অ্যালার্ট ট্র্যাকিং চালু রাখুন।

### সাধারণ ভুলসমূহ
শুধুমাত্র সিপিইউ মনিটর করা। র‍্যাম মনিটরিং ও ওওএম ট্র্যাকিং চালু না রাখলে ডাটাবেস যেকোনো সময় হঠাৎ করে বন্ধ হয়ে যেতে পারে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// কানেকশন পুল সীমিত করে ডাটাবেসের সাথে যুক্ত হওয়ার নিয়ম
mongoose.connect('mongodb://localhost:27017/mydb', {
  maxPoolSize: 50,          // সর্বোচ্চ ৫০টি কানেকশন এলাউড
  minPoolSize: 10,          // কমপক্ষে ১০টি কানেকশন অ্যাক্টিভ থাকবে
  socketTimeoutMS: 45000,
});

// বড় এগ্রিগেশন কুয়েরিতে allowDiskUse কনফিগার করার নিয়ম
const heavyReport = await Transaction.aggregate([
  { $group: { _id: "$userId", totalSpend: { $sum: "$amount" } } }
]).allowDiskUse(true); // ১০০ এমবির বেশি ডাটা হলে ডিস্কে টেম্প ফাইল তৈরি করে ওওএম আটকাবে
\`\`\``
  },
  {
    id: 'mongodb-99',
    title: 'Explain Custom Aggregation using $accumulator and $function, their limitations, and performance costs.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Aggregation', '$accumulator', '$function', 'JavaScript Engine'],
    enAnswer: '$accumulator and $function allow executing custom JavaScript code inside the MongoDB aggregation pipeline. Limitations: they execute in an internal JS engine, bypassing native C++ optimization, which causes high CPU overhead and prevents pipeline optimization.',
    bnAnswer: '\`$accumulator\` এবং \`$function\` এগ্রিগেশন পাইপলাইনের ভেতরে কাস্টম জাভাস্ক্রিপ্ট কোড চালানোর সুযোগ দেয়। সীমাবদ্ধতা: এগুলো ডাটাবেসের নেটিভ C++ অপ্টিমাইজেশন এড়িয়ে একটি অভ্যন্তরীণ জেএস (JS) ইঞ্জিনে চলে, যা প্রচুর সিপিইউ খরচ করায় ও পাইপলাইনের গতি কমিয়ে দেয়।',
    enExplanation: `### Explanation
Sometimes, native aggregation operators cannot represent complex business formulas. MongoDB provides JavaScript execution stages:

1. **\`$function\`**: Executes a custom JS function to transform fields inside a projection or match stage.
2. **\`$accumulator\`**: Executes user-defined JavaScript functions to perform custom group accumulation states (init, accumulate, merge, finalize).

**The Performance Catch:**
- MongoDB is written in C++ and executes native stages (like \`$group\`, \`$sum\`) at bare-metal speed.
- When MongoDB encounters \`$function\` or \`$accumulator\`, it must pass the documents to an internal JavaScript engine (v8/SpiderMonkey) running inside the process.
- This context switching between C++ and JS engines destroys CPU pipeline performance and runs single-threaded, slowing down processing speeds significantly.

### Real-World Example
Suppose you want to compute custom text sentiment analysis during aggregation.
- Doing this inside the pipeline using \`$function\` with a custom JS parser will take 20 seconds for 100,000 documents.
- The same operation can be done 10x faster by fetching the raw documents and processing them in parallel on the Node.js application server.

### Best Practice
Avoid \`$accumulator\` and \`$function\` at all costs. 99% of aggregation needs can be accomplished using native operators (e.g. \`$cond\`, \`$let\`, \`$reduce\`, \`$map\`). Only use JS execution if there is absolutely no other mathematical representation.

### Common Mistakes
Using \`$function\` to perform basic calculations (like string formatting or date parsing) that could easily be achieved using native operators like \`$concat\` or \`$dateToString\`.

### Code Example
\`\`\`javascript
// Custom aggregation accumulator (Avoid in production if possible)
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      // Custom accumulator using JS functions
      customCalculations: {
        $accumulator: {
          init: function() { return { count: 0, sum: 0 }; },
          accumulate: function(state, amount) {
            state.count++;
            state.sum += amount;
            return state;
          },
          accumulateArgs: ["$amount"],
          merge: function(state1, state2) {
            return {
              count: state1.count + state2.count,
              sum: state1.sum + state2.sum
            };
          },
          finalize: function(state) {
            return state.sum / state.count; // Return custom average
          },
          lang: "js" // Define language context
        }
      }
    }
  }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কখনো কখনো মঙ্গোডিবির নেটিভ এগ্রিগেশন কুয়েরি দিয়ে জটিল গাণিতিক হিসাব বা লজিক মেলানো যায় না। এ জন্য মঙ্গোডিবি জাভাস্ক্রিপ্ট কোড চালানোর গেটওয়ে দেয়:

১. **\`$function\`**: এগ্রিগেশনের ভেতরের ডকুমেন্টের ডেটা কনভার্ট করতে কাস্টম জেএস ফাংশন রান করে।
২. **\`$accumulator\`**: গ্রুপিং করার সময় কাস্টম স্টেট (init, accumulate, merge, finalize) হ্যান্ডেল করতে জেএস ফাংশন ব্যবহার করে।

**পারফরম্যান্সের ওপর মারাত্মক প্রভাব:**
- মঙ্গোডিবি নেটিভভাবে C++ কোডে চলে যা অত্যন্ত দ্রুতগতিসম্পন্ন।
- পাইপলাইনে যখনই জাভাস্ক্রিপ্ট কল আসে, ডাটাবেস তার নেটিভ মেমোরি থেকে ডাটা কনভার্ট করে একটি অভ্যন্তরীণ জাভাস্ক্রিপ্ট ইঞ্জিনে (V8) পাঠায়।
- C++ এবং জাভাস্ক্রিপ্ট ইঞ্জিনের এই অবিরত ডাটা যাতায়াত (Context switching) পুরো সিপিইউ প্রসেসকে সিঙ্গেল থ্রেডে আটকে ফেলে কুয়েরি স্পিড চরম ধীর করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
এগ্রিগেশন চলার সময় প্রতিটি ইউজারের করা কমেন্টের ওপর কাস্টম টেক্সট সেন্টমেন্ট অ্যানালিটিক্স করতে চান।
- পাইপলাইনের ভেতরে \`$function\` ব্যবহার করলে ১ লক্ষ ডাটা প্রসেস হতে ২০ সেকেন্ডের বেশি সময় লাগবে।
- এই কাজটি ডাটাবেস থেকে শুধু টেক্সট কুয়েরি করে এনে আপনার এক্সপ্রেস অ্যাপের নোড সার্ভারে প্রসেস করলে ২ সেকেন্ডেরও কম সময়ে হয়ে যাবে।

### উত্তম অনুশীলন
\`$accumulator\` ও \`$function\` ব্যবহার কঠোরভাবে এড়িয়ে চলুন। মঙ্গোডিবির ৯৯% জটিল হিসাব নেটিভ অপারেটর (যেমন: \`$cond\`, \`$let\`, \`$reduce\`, \`$map\`) দিয়ে করা সম্ভব। কেবল গাণিতিক কোনো বিকল্প পথ না থাকলে তবেই কেবল এগুলো ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সাধারণ স্ট্রিং যোগফল বা ডেট ফরম্যাট করার জন্য \`$function\` ব্যবহার করা, যা মঙ্গোডিবির নিজস্ব \`$concat\` বা \`$dateToString\` দিয়ে নিমেষেই করা সম্ভব।

### Code Example
\`\`\`javascript
// কাস্টম জাভাস্ক্রিপ্ট একুমুলেটর ব্যবহার করে গ্রুপ কুয়েরির উদাহরণ (এড়িয়ে চলাই ভালো)
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      customCalculations: {
        $accumulator: {
          init: function() { return { count: 0, sum: 0 }; },
          accumulate: function(state, amount) {
            state.count++;
            state.sum += amount;
            return state;
          },
          accumulateArgs: ["$amount"],
          merge: function(state1, state2) {
            return {
              count: state1.count + state2.count,
              sum: state1.sum + state2.sum
            };
          },
          finalize: function(state) {
            return state.sum / state.count; // গড় হিসাব করে রিটার্ন
          },
          lang: "js" // ভাষা হিসেবে জাভাস্ক্রিপ্ট ডিক্লেয়ার
        }
      }
    }
  }
]);
\`\`\``
  },
  {
    id: 'mongodb-100',
    title: 'Explain Oplog Size management, monitoring the Oplog Window, and dynamic resizing.',
    difficulty: 'advanced',
    category: 'mongodb',
    tags: ['Oplog', 'Replica Set', 'Database Administration', 'Troubleshooting'],
    enAnswer: 'The Oplog (operations log) is a capped collection recording database modifications for replication. The oplog window is the time it takes for the oplog to fill and overwrite itself. Dynamic resizing allows altering the oplog size online to accommodate spikes in write activity, preventing secondaries from falling behind and requiring a full sync.',
    bnAnswer: 'অপলগ (Oplog) হলো একটি ক্যাপড কালেকশন যা রেপ্লিক্যাশনের জন্য সমস্ত ডাটা মডিফিকেশন রেকর্ড করে। অপলগ উইন্ডো (oplog window) হলো অপলগটি সম্পূর্ণ ভরে ওভাররাইট হতে যে সময় লাগে। ওপলগ ডাইনামিকালি রিসাইজ করার মাধ্যমে ডাটা রাইট স্পাইকের সময়েও ওপলগের আকার বাড়িয়ে সেকেন্ডারি নোডগুলোর সিঙ্ক ডিসকানেক্ট হওয়া আটকানো যায়।',
    enExplanation: `### Explanation
The replica set primary writes all write operations to the \`local.oplog.rs\` capped collection. Secondaries tail this oplog to apply changes.

**Oplog Window Concept:**
- If your oplog size is 10GB, and your application writes 10GB of changes per day, the **Oplog Window** is **24 hours**.
- If a secondary node goes offline for maintenance for 12 hours, it can resume sync on startup because the oldest operations in the primary's oplog haven't been overwritten yet.
- If the secondary is offline for 26 hours, the primary's oplog has already rolled over. The secondary is now "out of sync" and cannot catch up. It must trigger a slow **Initial Sync** (copying all data files again).

**Dynamic Resizing:**
Older versions of MongoDB required stopping the server, dropping the oplog collection, and recreating it to change the size. Modern MongoDB (4.0+) supports online dynamic resizing using \`db.adminCommand({ replSetResizeOplog: 1 })\`.

### Real-World Example
A database has a 2-hour oplog window. During a database migration or batch import, writes spike heavily, and the oplog window shrinks to 15 minutes.
- One secondary experiences a transient network drop for 20 minutes.
- When it reconnects, it fails to resume because the required oplog entry is gone.
- The secondary starts an initial sync, adding heavy read load to the primary node.

### Best Practice
Configure alert monitors on your oplog window size. Keep the window at a minimum of **24 to 72 hours** to allow DevOps engineers time to resolve secondary node hardware failures over weekends without triggering full syncs.

### Common Mistakes
Assuming that oplog window sizing is static and safe under all circumstances. Running large bulk deletes or data migrations without increasing the oplog size beforehand can shrink the window instantly, causing replication lag alerts.

### Code Example
\`\`\`javascript
// 1. Check replication status and current Oplog Window size
rs.printReplicationInfo();
/* Typical output:
configured oplog size:   51200MB
log length start to end: 172800secs (48 hours)
oplog window:            48 hours
*/

// 2. Dynamically resize the oplog to 100GB (102400 MB) online without downtime
db.adminCommand({
  replSetResizeOplog: 1,
  size: 102400 // Size in Megabytes (MB)
});

// 3. Verify the changes
db.getSiblingDB("local").oplog.rs.stats().maxSize;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেপ্লিকা সেটের প্রাইমারি নোড সমস্ত রাইট কুয়েরি \`local.oplog.rs\` নামক ক্যাপড কালেকশনে রেকর্ড করে রাখে। সেকেন্ডারি নোডগুলো এটি পড়েই নিজেদের ডাটা সিঙ্ক করে।

**অপলগ উইন্ডো (Oplog Window):**
- ধরি আপনার ওপলগ সাইজ ১০ জিবি, এবং আপনার অ্যাপে প্রতিদিন ১০ জিবি ডাটা রাইট হয়। এর মানে আপনার **অপলগ উইন্ডো** হলো **২৪ ঘণ্টা**।
- যদি কোনো সেকেন্ডারি সার্ভার কোনো ত্রুটির কারণে ১২ ঘণ্টা বন্ধ থাকে, তবে চালু হওয়ার পর সে বাকি ডাটা অপলগ থেকে নিয়ে ব্যাকগ্রাউন্ড সিঙ্ক করে নিতে পারবে কারণ ২৪ ঘণ্টার আগে পুরোনো অপলগ ওভাররাইট হবে না।
- কিন্তু সার্ভারটি যদি ২৬ ঘণ্টা বন্ধ থাকে, তবে ওপলগ অলরেডি ওভাররাইট হয়ে পুরোনো ডাটা মুছে গেছে। ফলে নোডটি আর সিঙ্ক হতে পারবে না এবং তাকে পুরো ডাটা নতুন করে ইনিশিয়াল সিঙ্ক (Initial Sync) করতে হবে যা অত্যন্ত ধীরগতির।

**ডাইনামিক রিসাইজিং (Dynamic Resizing):**
আগে অপলগের সাইজ বাড়াতে সার্ভার বন্ধ করে কালেকশন মুছে নতুন করে তৈরি করতে হতো। মঙ্গোডিবি ৪.০+ ভার্সনে সার্ভার চালু রেখেই কমান্ডের মাধ্যমে অপলগ সাইজ বাড়িয়ে নেওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেসের অপলগ উইন্ডো ২ ঘণ্টার। একদিন ডাটাবেস মাইগ্রেশনের কারণে প্রচুর রাইট কুয়েরি আসায় অপলগ উইন্ডো কমে মাত্র ১৫ মিনিটে নেমে এলো।
- একটি সেকেন্ডারি নোডে সাময়িক নেটওয়ার্ক ডিস্টার্ব হওয়ায় এটি ২০ মিনিট ডিসকানেক্টেড ছিল।
- কানেকশন ফিরে এলে সে দেখল প্রয়োজনীয় লগের মান মুছে গেছে।
- ফলে নোডটি ক্র্যাশ খেয়ে নতুন করে ইনিশিয়াল সিঙ্ক শুরু করল, যা মূল ডাটাবেসের ওপর বাড়তি রিড প্রেশার তৈরি করল।

### উত্তম অনুশীলন
অপলগ উইন্ডোর ওপর সর্বদা ট্র্যাকিং অ্যালার্ট সেট রাখুন। সেফটি মার্জিন হিসেবে অপলগ উইন্ডো কমপক্ষে **২৪ থেকে ৭২ ঘণ্টা** বজায় রাখুন যাতে ছুটির দিনেও সার্ভার ডাউন থাকলে ডাটা মিসম্যাচ বা ফুল সিঙ্কের ঝামেলা পোহাতে না হয়।

### সাধারণ ভুলসমূহ
অপলগ উইন্ডোর সাইজ অপরিবর্তনশীল ধরে রাখা। বড় কোনো ডাটা ক্লিনিং বা ডিলিট অপারেশন চালানোর আগে ওপলগের সাইজ বাড়িয়ে না নিলে উইন্ডো হঠাৎ সংকুচিত হয়ে রেপ্লিক্যাশন ল্যাগ শুরু হবে।

### Code Example
\`\`\`javascript
// ১. রেপ্লিক্যাশন ইনফো ও ওপলগ উইন্ডো চেক করার কমান্ড
rs.printReplicationInfo();
/* আউটপুট উদাহরণ:
configured oplog size:   51200MB (৫০ জিবি)
log length start to end: 172800secs (৪৮ ঘণ্টা)
oplog window:            ৪৮ ঘণ্টা
*/

// ২. ডাটাবেস ডাউন করা ছাড়াই অপলগ সাইজ বাড়িয়ে ১০০ জিবি (১০২৪০০ এমবি) করা
db.adminCommand({
  replSetResizeOplog: 1,
  size: 102400 // মেগাবাইটে সাইজ লিমিট (MB)
});

// ৩. পরিবর্তন কনফার্ম করা
db.getSiblingDB("local").oplog.rs.stats().maxSize;
\`\`\``
  }
];
