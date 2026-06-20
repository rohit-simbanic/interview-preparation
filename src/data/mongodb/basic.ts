import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'mongodb-1',
    title: 'What is MongoDB and how does it differ from traditional Relational Databases (RDBMS)?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['MongoDB', 'NoSQL', 'Database Architecture'],
    enAnswer: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents (BSON) rather than tables with rows and columns. Unlike RDBMS, MongoDB is schema-less by default, supports hierarchical nested data structures, and scales horizontally using sharding.',
    bnAnswer: 'MongoDB হলো একটি ডকুমেন্ট-ওরিয়েন্টেড নোএসকিউএল (NoSQL) ডাটাবেস যা টেবিল ও রো-কলামের পরিবর্তে নমনীয় JSON-এর মতো ডকুমেন্ট (BSON) আকারে ডাটা সংরক্ষণ করে। আরডিবিএমএস-এর তুলনায় মঙ্গোডিবি ডিফল্টভাবে স্কিমাহীন, নেস্টেড ডাটা স্ট্রাকচার সমর্থন করে এবং শার্ডিংয়ের মাধ্যমে অনুভূমিকভাবে স্কেল করতে পারে।',
    enExplanation: `### Explanation
MongoDB is built on a distributed document database architecture.

**Key Differences between MongoDB and RDBMS:**
1. **Data Model**: RDBMS uses a structured table model (rows, columns, foreign keys). MongoDB uses a document model (BSON format, key-value pairs, nested arrays, and sub-documents).
2. **Schema Flexibility**: RDBMS requires a predefined schema and migrations for alterations. MongoDB is schema-less; documents in the same collection can have different fields.
3. **Relations**: RDBMS relies heavily on JOIN operations. MongoDB uses embedded documents (denormalization) or references (linking) to model relationships.
4. **Scaling**: RDBMS typically scales vertically (adding more CPU/RAM). MongoDB is designed to scale horizontally across commodity servers using sharding (partitioning data).
5. **Transactions**: RDBMS has native multi-table ACID transactions. MongoDB has supported multi-document ACID transactions since version 4.0.

### Real-World Example
In an e-commerce platform, user profiles, shipping addresses, and dynamic product specifications (which vary wildly between electronics and clothing) can be saved in a single MongoDB collection without needing complex SQL join tables.

### Best Practice
Choose MongoDB when your data structure is semi-structured or polymorphic, and when you need rapid prototyping and high write/read scaling across distributed locations.

### Common Mistakes
Treating MongoDB exactly like SQL and creating hundreds of small collections linked with references, which leads to heavy query joins and poor performance.

### Code Example
\`\`\`javascript
// MongoDB Document Representation
{
  "_id": ObjectId("60c72b2f9b1d8b2bad000001"),
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 29.99,
  "specs": {
    "dpi": 1600,
    "battery": "AA"
  },
  "tags": ["accessory", "wireless"]
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
MongoDB হলো একটি ডিস্ট্রিবিউটেড ডকুমেন্ট ডাটাবেস।

**RDBMS ও MongoDB-এর মধ্যে মূল পার্থক্য:**
১. **ডাটা মডেল**: আরডিবিএমএস টেবিলে রো ও কলাম ব্যবহার করে। মঙ্গোডিবি কি-ভ্যালু পেয়ার ও নেস্টেড অ্যারে সহ BSON ফরম্যাটে ডাটা রাখে।
২. **নমনীয়তা**: SQL ডাটাবেসে পূর্বনির্ধারিত স্কিমা এবং মাইগ্রেশন লাগে। মঙ্গোডিবির কোনো নির্দিষ্ট স্কিমা নেই; একই কালেকশনের বিভিন্ন ডকুমেন্টে ভিন্ন ভিন্ন ফিল্ড থাকতে পারে।
৩. **সম্পর্ক (Relations)**: SQL জয়েন (JOIN) কুয়েরি ব্যবহার করে। মঙ্গোডিবি ডকুমেন্টের ভেতর আরেকটি ডকুমেন্ট এমবেড (Embed) করে বা রেফারেন্স তৈরি করে।
৪. **স্কেলিং**: SQL সাধারণত ভার্টিকালি স্কেল করা হয়। মঙ্গোডিবি শার্ডিংয়ের সাহায্যে একাধিক সার্ভারে ডাটা ভাগ করে হরিজন্টালি স্কেল করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স সাইটে বিভিন্ন ক্যাটাগরির প্রোডাক্ট (যেমন বই ও ল্যাপটপ)-এর স্পেসিফিকেশন আলাদা হয়। মঙ্গোডিবির একটি কালেকশনেই কোনো রিলেশন টেবিল ছাড়া সরাসরি ডাইনামিক ফিল্ডের সাহায্যে সব প্রোডাক্ট সেভ করা যায়।

### উত্তম অনুশীলন
যখন আপনার ডাটার গঠন নির্দিষ্ট নয় বা ঘন ঘন পরিবর্তনশীল এবং যেখানে দ্রুত রিড-রাইট অপারেশন ও স্কেলিং প্রয়োজন, সেখানে মঙ্গোডিবি বেছে নিন।

### সাধারণ ভুলসমূহ
মঙ্গোডিবিকে আরডিবিএমএস-এর মতো বিবেচনা করে শত শত ছোট কালেকশন তৈরি করা এবং রেফারেন্স দিয়ে রিলেশন তৈরি করা, যা পারফরম্যান্স ধীর করে দেয়।

### Code Example
\`\`\`javascript
// মঙ্গোডিবি ডকুমেন্টের গঠন
{
  "_id": ObjectId("60c72b2f9b1d8b2bad000001"),
  "name": "মাউস",
  "category": "ইলেকট্রনিক্স",
  "price": 29.99,
  "specs": {
    "dpi": 1600,
    "battery": "AA"
  },
  "tags": ["অ্যাক্সেসরি", "ওয়্যারলেস"]
}
\`\`\``
  },
  {
    id: 'mongodb-2',
    title: 'Explain BSON and how it differs from JSON.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['BSON', 'JSON', 'Data Format'],
    enAnswer: 'BSON stands for Binary JSON. It is a binary-serialized serialization of JSON-like documents. BSON extends JSON by adding support for additional data types (such as Date, ObjectId, Decimal128, and Binary) and optimizes parsing speed and storage space.',
    bnAnswer: 'BSON-এর পূর্ণরূপ হলো Binary JSON। এটি JSON-এর মতো ডকুমেন্টের একটি বাইনারি-সিরিয়ালাইজড রূপ। BSON বাড়তি কিছু ডাটা টাইপ (যেমন: Date, ObjectId, Decimal128, Binary) সমর্থন করে এবং পার্সিংয়ের গতি ও স্টোরেজ অপ্টিমাইজ করে।',
    enExplanation: `### Explanation
MongoDB stores and queries data in BSON format internally, though users interact with it using JSON or JavaScript objects.

**Key Differences:**
1. **Serialization**: JSON is text-based (human-readable, slower parsing). BSON is binary-based (faster for machines to parse, supports skipping fields during queries).
2. **Data Types**:
   - JSON supports only: String, Number, Boolean, Array, Object, and Null.
   - BSON supports JSON types plus: \`Date\` (milliseconds since epoch), \`ObjectID\` (12-byte unique key), \`Decimal128\` (precise floating point), \`Binary\` (for raw files/buffers), and \`Int32\`/\`Int64\`.
3. **Storage Efficiency**: While BSON is designed for fast traversal rather than absolute space savings, its typed binary representation makes document reads highly efficient.

### Real-World Example
If you save a date string like \`"2026-06-19"\` in JSON, your backend must manually parse it into a Javascript Date object. In BSON, it is stored natively as a 64-bit integer, and the driver returns a true Javascript \`Date\` object instantly.

### Best Practice
Be aware of native BSON types. For monetary/financial values, always use BSON \`Decimal128\` instead of standard float numbers to prevent IEEE 754 precision errors.

### Common Mistakes
Assuming BSON always takes less space than JSON. Sometimes BSON's overhead for length prefixes and types makes it slightly larger than minified JSON.

### Code Example
\`\`\`javascript
// BSON Type representation using Mongoose/MongoDB Driver
const doc = {
  _id: new ObjectId(), // Native BSON 12-byte identifier
  createdAt: new Date(), // Stored as 64-bit datetime integer
  binData: Buffer.from("hello"), // BSON Binary type
  salary: new Double(12000.50) // Explicit BSON Double float precision
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি ইন্টারনালি ডাটা BSON ফরম্যাটে সেভ করে, যদিও ইউজাররা প্লেইন JSON ব্যবহার করে যোগাযোগ করে।

**পার্থক্যসমূহ:**
১. **সিরিয়ালাইজেশন**: JSON হলো টেক্সট-ভিত্তিক (পার্স করতে বেশি সময় লাগে)। BSON হলো বাইনারি-ভিত্তিক (মেশিন দ্রুত রিড করতে পারে)।
২. **ডাটা টাইপ**:
   - JSON-এ শুধু স্ট্রিং, নম্বর, বুলিয়ান, অ্যারে, অবজেক্ট ও নাল ব্যবহার করা যায়।
   - BSON-এ ডেট (Date), অবজেক্টআইডি (ObjectID), বাইনারি ডাটা (Buffer) ও ডেসিমেল১২৮ (নিখুঁত ক্যালকুলেশনের জন্য) ব্যবহার করা যায়।
৩. **স্পিড**: BSON ফাইল ট্রাভার্সিং বা অনুসন্ধান করতে ডেটা রিডারকে দ্রুত কাজ করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইল সিস্টেমে কোনো ফটো বা বাইনারি বাফার সেভ করতে চাইলে JSON-এ তা Base64 স্ট্রিংয়ে কনভার্ট করতে হয়, যা সাইজ বাড়িয়ে দেয়। BSON-এ সরাসরি বাইনারি টাইপ ব্যবহার করে ইমেজ সোর্স সেভ করা যায়।

### উত্তম অনুশীলন
টাকা বা ক্রিপ্টো কারেন্সির হিসাব রাখার সময় সাধারণ ফ্লোট নম্বর ব্যবহার না করে মঙ্গোডিবির \`Decimal128\` টাইপ ব্যবহার করুন, যাতে দশমিকের পরের নিখুঁত হিসাব বজায় থাকে।

### সাধারণ ভুলসমূহ
মনে করা যে BSON ফাইলের সাইজ সবসময় JSON-এর চেয়ে ছোট হয়। বিএসওএন-এর ডাটা টাইপ হেডার ও প্রিফিক্সের কারণে ছোট ডকুমেন্টে এর ফাইল সাইজ মাঝে মাঝে সামান্য বেশি হতে পারে।

### Code Example
\`\`\`javascript
// মঙ্গোডিবি ড্রাইভার ব্যবহার করে BSON ডাটা টাইপ
const doc = {
  _id: new ObjectId(), // ১২-বাইটের ইউনিক বিএসওএন আইডি
  createdAt: new Date(), // ৬৪-বিট ডেট ইন্টিজার
  binData: Buffer.from("hello"), // বাইনারি টাইপ
  salary: new Double(12000.50) // ডাবল ফ্লোট প্রিসিশন
};
\`\`\``
  },
  {
    id: 'mongodb-3',
    title: 'Explain the 12-byte structure of MongoDB ObjectID.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['ObjectID', 'BSON', 'UUID'],
    enAnswer: 'An ObjectID is a 12-byte unique identifier used as the primary key (_id) for MongoDB documents. Its structure consists of: 4 bytes representing a Unix timestamp, 5 bytes representing a random value unique to the machine and process, and 3 bytes representing an incrementing counter.',
    bnAnswer: 'অবজেক্টআইডি (ObjectID) হলো ১২-বাইটের একটি ইউনিক আইডি যা মঙ্গোডিবির ডকুমেন্টের প্রাইমারি কি (_id) হিসেবে ব্যবহৃত হয়। এর গঠন হলো: প্রথম ৪ বাইট ইউনিক্স টাইমস্ট্যাম্প, পরের ৫ বাইট মেশিন ও প্রসেস-ভিত্তিক র্যান্ডম ভ্যালু এবং শেষ ৩ বাইট সাধারণ ইনক্রিমেন্টিং কাউন্টার।',
    enExplanation: `### Explanation
MongoDB's default primary key generator is designed to be decentralized and scale-friendly. Unlike SQL auto-incrementing IDs, ObjectIDs can be generated locally by client drivers without hitting the database server for locking.

**The 12-byte hex representation breakdown (24 hexadecimal characters):**
1. **Timestamp (4 bytes / 8 hex chars)**: Stores the Unix time (seconds resolution) when the ObjectID was created. Allows you to extract creation time directly without a separate 'createdAt' field.
2. **Random Value (5 bytes / 10 hex chars)**: Generated once per machine and process, ensuring uniqueness across multiple servers.
3. **Counter (3 bytes / 6 hex chars)**: An auto-incrementing integer starting at a random value. Can generate up to 16.7 million unique IDs per second on the same process.

### Real-World Example
In a distributed backend with 10 server nodes handling millions of logs concurrently, they can generate ObjectIDs locally without waiting for database synchronization, preventing transaction bottlenecking.

### Best Practice
Use ObjectID timestamp bytes to extract creation dates instead of writing a redundant \`createdAt\` field:
\`\`\`javascript
const creationTime = doc._id.getTimestamp();
\`\`\`

### Common Mistakes
Assuming ObjectIDs are completely unpredictable. Because they start with a timestamp, ObjectIDs are sequentially sorted, meaning they expose document creation order and rates.

### Code Example
\`\`\`javascript
const { ObjectId } = require('mongodb');

// Generate new ObjectID
const myId = new ObjectId();
console.log("Generated Hex ID:", myId.toHexString()); // 24-character hex

// Extract timestamp directly from ObjectID
console.log("Timestamp:", myId.getTimestamp()); // Prints creation Date object
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির অবজেক্টআইডি ডিস্ট্রিবিউটেড ডাটাবেসের কথা মাথায় রেখে তৈরি করা হয়েছে। আরডিবিএমএস-এর অটো-ইনক্রিমেন্ট আইডির মতো এর জন্য ডাটাবেস লকিংয়ের প্রয়োজন হয় না। ক্লায়েন্ট ড্রাইভার নিজেই এটি তৈরি করতে পারে।

**১২-বাইটের গঠনপ্রণালী (২৪ অক্ষরের হেক্সাডেসিমেল স্ট্রিং):**
১. **টাইমস্ট্যাম্প (৪ বাইট / ৮টি ক্যারেক্টার)**: আইডি তৈরির সময়কে (সেকেন্ডে) চিহ্নিত করে। এটি ব্যবহার করে ডকুমেন্টের তৈরির তারিখ সরাসরি বের করা যায়।
২. **র্যান্ডম মান (৫ বাইট / ১০টি ক্যারেক্টার)**: মেশিন ও প্রসেসের র্যান্ডম সিগনেচার যা আলাদা ডকার বা সার্ভার চিনতে সাহায্য করে।
৩. **কাউন্টার (৩ বাইট / ৬টি ক্যারেক্টার)**: র্যান্ডমলি শুরু হওয়া একটি অটো-ইনক্রিমেন্টিং নম্বর যা প্রতি সেকেন্ডে প্রায় ১ কোটি ৬৭ লাখ ইউনিক আইডি তৈরি করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার সাইটে ১ দিনে কোটি কোটি ট্রাফিক লগ হচ্ছে। প্রতিটি লগ সেভ করার সময় ডাটাবেস থেকে পরবর্তী আইডির সিকোয়েন্স নেওয়ার প্রয়োজন নেই। ১০টি এপিআই সার্ভার নিজেরাই লোকালি অবজেক্টআইডি তৈরি করে সাথে সাথে ডাটাবেসে সেভ করতে পারবে।

### উত্তম অনুশীলন
আলাদা করে \`createdAt\` প্রপার্টি না লিখে অবজেক্টআইডির ভেতরের বিল্ট-ইন মেথড ব্যবহার করে ডকুমেন্ট তৈরির তারিখ ও সময় বের করুন।

### সাধারণ ভুলসমূহ
মনে করা যে অবজেক্টআইডি সম্পূর্ণ সিকিউর ও অনুমান করা অসম্ভব। এটি যেহেতু টাইমস্ট্যাম্প দিয়ে শুরু হয়, তাই অবজেক্টআইডিগুলো ক্রমানুসারে সজ্জিত থাকে এবং এর সিকোয়েন্স দেখে হ্যাকাররা সৃষ্টির ধারা ও সময় ট্র্যাক করতে পারে।

### Code Example
\`\`\`javascript
const { ObjectId } = require('mongodb');

// নতুন অবজেক্টআইডি তৈরি
const myId = new ObjectId();
console.log("হেক্সাডেসিমেল আইডি:", myId.toHexString()); // ২৪ অক্ষরের হেক্স

// সরাসরি অবজেক্টআইডি থেকে টাইমস্ট্যাম্প বের করা
console.log("তৈরির সময়কাল:", myId.getTimestamp()); // ডেট অবজেক্ট রিটার্ন করবে
\`\`\``
  },
  {
    id: 'mongodb-4',
    title: 'How do you insert single and multiple documents in MongoDB?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Insert', 'mongosh'],
    enAnswer: 'To insert a single document, use the db.collection.insertOne(doc) command. To insert multiple documents, use the db.collection.insertMany([doc1, doc2, ...]) command, passing an array of objects.',
    bnAnswer: 'একটি ডকুমেন্ট ইনসার্ট করতে db.collection.insertOne(doc) কমান্ড ব্যবহার করা হয়। আর একাধিক ডকুমেন্ট ইনসার্ট করতে db.collection.insertMany([doc1, doc2, ...]) কমান্ডে অবজেক্টের একটি অ্যারে পাস করতে হয়।',
    enExplanation: `### Explanation
MongoDB provides specific methods to save data to collections:

- **\`insertOne()\`**: Accepts a single object. If the object does not contain an \`_id\` field, MongoDB automatically generates and appends a BSON ObjectID.
- **\`insertMany()\`**: Accepts an array of objects. By default, MongoDB processes inserts sequentially. If an error occurs midway, execution stops, but prior documents remain inserted.
- **Ordered vs Unordered**: You can change this behavior in \`insertMany\` by setting \`{ ordered: false }\`. In this case, MongoDB will attempt to write all documents, skipping failed ones and completing the rest in parallel.

### Real-World Example
When registering a new user, you use \`insertOne\`. When importing a CSV file containing 10,000 product inventory records, you use \`insertMany\` with \`{ ordered: false }\` to process them efficiently.

### Best Practice
When inserting bulk logs or data, always use \`insertMany\` instead of looping over \`insertOne\`. Bulk inserts combine multiple database round-trips into a single batch network call, increasing write performance.

### Common Mistakes
Passing a raw array directly into \`insertOne()\`, which will result in an error or save the array as a single embedded document instead of separate records.

### Code Example
\`\`\`javascript
// 1. Insert One Document
db.users.insertOne({
  name: "Rohit",
  email: "rohit@example.com",
  role: "admin"
});

// 2. Insert Multiple Documents (Unordered write performance)
db.products.insertMany([
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 150 },
  { name: "HDMI Cable", price: 10 }
], { ordered: false });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি কালেকশনে ডাটা ইনসার্ট করার জন্য দুটি প্রধান মেথড রয়েছে:

- **\`insertOne()\`**: একটি মাত্র অবজেক্ট ইনপুট নেয়। যদি \`_id\` উল্লেখ না থাকে, মঙ্গোডিবি স্বয়ংক্রিয়ভাবে একটি অবজেক্টআইডি যুক্ত করে দেয়।
- **\`insertMany()\`**: অবজেক্টের একটি অ্যারে ইনপুট নেয়। ডিফল্টভাবে এটি সিরিয়ালি ডাটা ইনসার্ট করে। মাঝপথে কোনো এরর হলে প্রসেস থেমে যায়, তবে পূর্বের ফাইলগুলো সেভ হয়ে থাকে।
- **Ordered vs Unordered**: \`insertMany\` এর ২য় প্যারামিটারে \`{ ordered: false }\` দিয়ে দিলে একটি রিকোয়েস্ট ফেইল করলেও বাকি ডাটাগুলো প্যারালালি সেভ হওয়া অব্যাহত থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
নতুন কোনো ইউজার সাইনআপ করলে আমরা \`insertOne\` ব্যবহার করি। কিন্তু অ্যাডমিন যখন এক্সেল শিট আপলোড করে ৫০০টি প্রোডাক্ট ইনভেন্টরিতে যুক্ত করতে চান, তখন \`insertMany\` ব্যবহার করে একবারে সব ডাটা পাঠানো হয়।

### উত্তম অনুশীলন
একত্রে অনেক ডাটা সেভ করার জন্য লুপ চালিয়ে বারবার \`insertOne\` কল করবেন না। এতে বারবার নেটওয়ার্ক রিকোয়েস্ট কল হয়ে ডাটাবেস স্লো হয়ে যায়। লুপের বদলে \`insertMany\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`insertOne()\` মেথডের ভেতর ডাইরেক্ট অ্যারে পাস করা। এতে মঙ্গোডিবি এরর দেখাবে অথবা পুরো অ্যারেকে একটি সিঙ্গেল নেস্টেড ডকুমেন্টে রূপান্তর করে সেভ করবে।

### Code Example
\`\`\`javascript
// ১. একটি ডকুমেন্ট ইনসার্ট করা
db.users.insertOne({
  name: "Rohit",
  email: "rohit@example.com",
  role: "admin"
});

// ২. একাধিক ডকুমেন্ট ইনসার্ট করা (Unordered মোড সহ)
db.products.insertMany([
  { name: "কীবোর্ড", price: 45 },
  { name: "মনিটর", price: 150 },
  { name: "এইচডিএমআই ক্যাবল", price: 10 }
], { ordered: false });
\`\`\``
  },
  {
    id: 'mongodb-5',
    title: 'How do you query documents in MongoDB using find() and findOne()?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'mongosh'],
    enAnswer: 'db.collection.find(query) returns a cursor pointing to all matching documents in the collection, which can be iterated. db.collection.findOne(query) returns the actual first document that matches the query, or null if no match is found.',
    bnAnswer: 'db.collection.find(query) কালেকশনের সমস্ত ম্যাচিং ডকুমেন্টের একটি কার্সর (Cursor) রিটার্ন করে যা লুপে ঘোরানো যায়। db.collection.findOne(query) কুয়েরির সাথে মেলা প্রথম সম্পূর্ণ ডকুমেন্টটি রিটার্ন করে অথবা না মিললে null দেয়।',
    enExplanation: `### Explanation
MongoDB query filters use JSON match documents:

- **\`find(queryFilter)\`**: Does not fetch all data instantly. It returns a **Cursor**. A cursor is a pointer that pulls data page-by-page as you iterate over it, preventing RAM exhaustion. If no query parameter is passed (\`find({})\`), it matches all documents.
- **\`findOne(queryFilter)\`**: Executes instantly and returns a single document object directly. It is equivalent to limiting a find query to 1 (\`find().limit(1)\`).
- **Embedded Field Query**: To query nested values, use dot notation inside quotes, e.g. \`{ "address.city": "Dhaka" }\`.

### Real-World Example
In a blogging system:
- Use \`findOne({ slug: "mongodb-basics" })\` to load the target article details page.
- Use \`find({ authorId: 123 })\` to get a list of all posts written by a writer to display on their profile dashboard.

### Best Practice
Always specify projections (selecting only needed fields) in \`find()\` and \`findOne()\` queries to minimize network payloads and improve query execution speeds.

### Common Mistakes
Forgetting to enclose dot notation keys in string quotes when querying nested documents (e.g. using \`{ address.city: "Dhaka" }\` instead of \`{ "address.city": "Dhaka" }\`), which causes a JS syntax crash.

### Code Example
\`\`\`javascript
// 1. findOne: Get a single user by email
const user = db.users.findOne({ email: "rohit@example.com" });

// 2. find: Get active products under category 'Books'
const cursor = db.products.find({ 
  category: "Books", 
  status: "active" 
});

// Iterate through the cursor
while (cursor.hasNext()) {
  printjson(cursor.next());
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির কুয়েরি ফিল্টার মূলত JSON অবজেক্ট প্যাটার্ন ব্যবহার করে কাজ করে:

- **\`find()\`**: এটি সাথে সাথে সব ডাটা র‍্যামে নিয়ে আসে না। এটি একটি **কার্সর (Cursor)** রিটার্ন করে। কার্সর হলো একটি পয়েন্টার যা আপনার ডিমান্ড অনুযায়ী অল্প অল্প করে ডেটা লোড করে। খালি অবজেক্ট দিলে (\`find({})\`) কালেকশনের সব ডকুমেন্ট সিলেক্ট হয়।
- **\`findOne()\`**: সরাসরি প্রথম ম্যাচিং অবজেক্টটি ব্রাউজার বা মেমোরিতে রিটার্ন করে। এটি \`find().limit(1)\`-এর সমতুল্য।
- **নেস্টেড ফিল্ড কুয়েরি**: নেস্টেড কোনো ফিল্ডে সার্চ করার জন্য ডট নোটেশন কোটেশনের ভেতর লিখতে হয়, যেমন: \`{ "address.city": "Dhaka" }\`।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্লগিং সাইটে:
- নির্দিষ্ট ব্লগের ডিটেইলস পেজ লোড করতে \`findOne({ slug: "mongodb-basics" })\` ব্যবহার করবেন।
- লেখকের প্রোফাইলে তার লেখা সব পোস্টের লিস্ট দেখতে \`find({ authorId: 123 })\` ব্যবহার করবেন।

### উত্তম অনুশীলন
সার্ভার ও এপিআই পারফরম্যান্স বাড়াতে কুয়েরি করার সময় অপ্রয়োজনীয় ফিল্ড বাদ দিয়ে শুধু প্রয়োজনীয় ফিল্ড প্রজেকশন বা সিলেক্ট করে ডাটা আনুন।

### সাধারণ ভুলসমূহ
নেস্টেড ডট নোটেশন কুয়েরির কী-তে কোটেশন দিতে ভুলে যাওয়া (যেমন: \`{ address.city: "Dhaka" }\` লেখা)। ডট থাকলে কী-তে অবশ্যই ডাবল বা সিঙ্গেল কোট ব্যবহার করতে হবে: \`{ "address.city": "Dhaka" }\`।

### Code Example
\`\`\`javascript
// ১. findOne: ইমেইল দিয়ে নির্দিষ্ট ইউজার সার্চ
const user = db.users.findOne({ email: "rohit@example.com" });

// ২. find: বুক ক্যাটাগরির একটিভ বইগুলোর কার্সর নেওয়া
const cursor = db.products.find({ 
  category: "Books", 
  status: "active" 
});

// কার্সর লুপের মাধ্যমে ডাটা প্রিন্ট করা
while (cursor.hasNext()) {
  printjson(cursor.next());
}
\`\`\``
  },
  {
    id: 'mongodb-6',
    title: 'Explain how updateOne() and updateMany() work with the $set and $unset operators.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Update', 'Operators'],
    enAnswer: 'updateOne() modifies the first document matching a filter, while updateMany() modifies all matching documents. The $set operator updates or adds defined fields without overwriting the entire document, while the $unset operator deletes specified fields from matching documents.',
    bnAnswer: 'updateOne() ফিল্টারের সাথে মেলা প্রথম ডকুমেন্টটি পরিবর্তন করে এবং updateMany() সমস্ত ম্যাচিং ডকুমেন্ট আপডেট করে। $set অপারেটর সম্পূর্ণ ডকুমেন্ট ওভাররাইট না করে নির্দিষ্ট ফিল্ড আপডেট বা যুক্ত করে এবং $unset অপারেটর ডকুমেন্ট থেকে নির্দিষ্ট ফিল্ড ডিলিট করে।',
    enExplanation: `### Explanation
MongoDB updates require explicit update operators to prevent losing document data.

- **The Overwrite Trap**: In early MongoDB versions, passing a plain object without operators would replace/overwrite the entire document. Using \`$set\` prevents this.
- **\`$set\`**: Takes an object representing fields to update. If a field exists, its value is replaced; if it does not exist, it is appended to the document.
- **\`$unset\`**: Takes an object specifying fields to remove from the document, set to a dummy value (usually \`""\` or \`1\`).
- **Options**:
  - \`upsert: true\`: Creates a new document if no match is found.

### Real-World Example
In a user profile dashboard, when a user changes their password, you call \`updateOne\` with \`$set\`. If they decide to disconnect their LinkedIn integration, you use \`$unset\` to remove the \`linkedinProfileUrl\` field from their record.

### Best Practice
Always specify atomic operators like \`$set\` instead of replacing entire objects, and verify that your update filters target unique fields (like \`_id\` or \`email\`) when running \`updateOne\` to avoid updating incorrect records.

### Common Mistakes
Using \`updateMany()\` without verifying filters, which can accidentally update or corrupt millions of records across the database in a single command.

### Code Example
\`\`\`javascript
// 1. updateOne: Set new price and append update timestamp
db.products.updateOne(
  { _id: ObjectId("60c72b2f9b1d8b2bad000001") },
  { 
    $set: { 
      price: 39.99,
      updatedAt: new Date()
    } 
  }
);

// 2. updateMany: Disable promotion flag and remove coupon field
db.products.updateMany(
  { category: "Electronics", discountActive: true },
  {
    $set: { discountActive: false },
    $unset: { couponCode: "" } // Removes key from all matched documents
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির আপডেট কুয়েরিতে ভুলবশত ডাটা ডিলিট হওয়া এড়াতে আপডেট অপারেটর ব্যবহার করা হয়।

- **ওভাররাইট ট্র্যাপ**: অপারেটর ছাড়া শুধু অবজেক্ট পাস করলে মঙ্গোডিবি পুরো ডকুমেন্টটি ওই নতুন অবজেক্ট দিয়ে প্রতিস্থাপন করে দেয়। \`$set\` এটি প্রতিরোধ করে।
- **\`$set\`**: নির্দিষ্ট ফিল্ড আপডেট করে। ফিল্ড না থাকলে নতুন ফিল্ড তৈরি করে ডাটা বসায়।
- **\`$unset\`**: ডকুমেন্ট থেকে কোনো ফিল্ড একেবারে ডিলিট করতে সাহায্য করে (এতে ভ্যালু হিসেবে \`""\` বা \`1\` পাস করতে হয়)।
- **অপশনস**:
  - \`upsert: true\`: ম্যাচিং ফিল্টার না পেলে নতুন একটি ডকুমেন্ট তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার তার অ্যাকাউন্টের ফোন নম্বর চেঞ্জ করলে \`updateOne\` ও \`$set\` দিয়ে আপডেট করবেন। যদি সে প্রোফাইল থেকে কাস্টম নিকনেম বাতিল করতে চায়, তবে \`$unset\` ব্যবহার করে \`nickname\` ফিল্ডটি মুছে ফেলবেন।

### উত্তম অনুশীলন
পুরো অবজেক্ট রিপ্লেস না করে সর্বদা অ্যাটমিক অপারেটর যেমন \`$set\` ব্যবহার করুন। আপডেট করার সময় ফিল্টারে ইউনিক আইডি ব্যবহার করতে চেষ্টা করুন যাতে ভুল ডকুমেন্টে আপডেট না হয়।

### সাধারণ ভুলসমূহ
সতর্ক না হয়ে ফিল্টার ছাড়াই \`updateMany()\` চালনা করা। এর ফলে ডাটাবেসের সমস্ত ডকুমেন্টের ডাটা চেঞ্জ হয়ে বড় ধরণের ডিজাস্টার হতে পারে।

### Code Example
\`\`\`javascript
// ১. updateOne: দাম পরিবর্তন ও আপডেটের সময় সেট করা
db.products.updateOne(
  { _id: ObjectId("60c72b2f9b1d8b2bad000001") },
  { 
    $set: { 
      price: 39.99,
      updatedAt: new Date()
    } 
  }
);

// ২. updateMany: সব ইলেকট্রনিক্স আইটেমের অফার বন্ধ করা ও কুপন ডিলিট করা
db.products.updateMany(
  { category: "Electronics", discountActive: true },
  {
    $set: { discountActive: false },
    $unset: { couponCode: "" } // কুপন কোড ফিল্ডটি মুছে ফেলবে
  }
);
\`\`\``
  },
  {
    id: 'mongodb-7',
    title: 'Explain comparison query operators in MongoDB ($eq, $ne, $gt, $gte, $lt, $lte, $in, $nin).',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Operators'],
    enAnswer: 'Comparison operators compare values: $eq (equals), $ne (not equal), $gt (greater than), $gte (greater than or equal), $lt (less than), $lte (less than or equal), $in (matches any value in an array), and $nin (does not match any value in an array).',
    bnAnswer: 'কম্পারিজন অপারেটর ডাটা তুলনা করতে ব্যবহৃত হয়: $eq (সমান), $ne (অসমান), $gt (চেয়ে বড়), $gte (সমান বা বড়), $lt (চেয়ে ছোট), $lte (সমান বা ছোট), $in (অ্যারেতে থাকা যেকোনো মানের সাথে মিললে), এবং $nin (অ্যারের কোনো মানের সাথে না মিললে)।',
    enExplanation: `### Explanation
Comparison operators allow you to build range and condition filters in query documents:

- **Syntax**: \`{ field: { $operator: value } }\`
- **\`$in\` and \`$nin\`**: Expect an array of target values. For example, \`{ status: { $in: ["active", "pending"] } }\` is a clean replacement for multiple OR conditions.
- **Implicit equality**: If you write \`{ price: 20 }\`, MongoDB implicitly treats it as \`{ price: { $eq: 20 } }\`.

### Real-World Example
In a property search platform:
- Retrieve apartments priced between $100,000 and $250,000: \`{ price: { $gte: 100000, $lte: 250000 } }\`.
- Retrieve apartments located in either Dhaka, Chittagong, or Sylhet: \`{ city: { $in: ["Dhaka", "Chittagong", "Sylhet"] } }\`.

### Best Practice
Ensure that fields queried using range operators (like \`$gt\`, \`$lte\`) are indexed. Range queries benefit significantly from index scans instead of visiting every document in the collection.

### Common Mistakes
Forgetting that MongoDB operators must be nested inside objects. Writing \`{ price: $gt: 50 }\` is syntax-invalid; it must be written as \`{ price: { $gt: 50 } }\`.

### Code Example
\`\`\`javascript
// Querying products with multiple comparison operators
const products = db.products.find({
  category: { $in: ["Electronics", "Appliances"] },
  price: { $gte: 50, $lt: 200 },
  stock: { $ne: 0 } // Exclude out-of-stock items
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কম্পারিজন অপারেটর দিয়ে কুয়েরিতে বিভিন্ন গাণিতিক শর্ত ও সীমা যোগ করা হয়:

- **গঠন**: \`{ field: { $অপারেটর: মান } }\`
- **\`$in\` ও \`$nin\`**: এগুলো ইনপুট হিসেবে একটি অ্যারে গ্রহণ করে। যেমন: একাধিক OR কন্ডিশন না লিখে \`{ status: { $in: ["active", "pending"] } }\` লিখলে সহজে ম্যাচিং করা যায়।
- **স্বতঃস্ফূর্ত সমতা**: \`{ price: 20 }\` লিখলে মঙ্গোডিবি ব্যাকগ্রাউন্ডে \`{ price: { $eq: 20 } }\` কন্ডিশন হিসেবেই দেখে।

### বাস্তব-ভিত্তিক উদাহরণ
বাসা খোঁজার অ্যাপে:
- ১ লক্ষ থেকে আড়াই লক্ষ টাকার ফ্ল্যাট খুঁজতে: \`{ price: { $gte: 100000, $lte: 250000 } }\`।
- ঢাকা, চট্টগ্রাম বা সিলেটে থাকা ফ্ল্যাট ফিল্টার করতে: \`{ city: { $in: ["Dhaka", "Chittagong", "Sylhet"] } }\`।

### উত্তম অনুশীলন
রেঞ্জ অপারেটর (\`$gt\`, \`$lte\`) দিয়ে যে ফিল্ডগুলো সার্চ করছেন, সেগুলোতে ইনডেক্স ব্যবহার করুন। ইনডেক্স না থাকলে ডাটাবেসকে প্রতিটি ফাইলে সার্চ করতে হয় যা ভারী ডেটাতে স্লো হয়ে যায়।

### সাধারণ ভুলসমূহ
অপারেটর ডিক্লেয়ার করার সময় অবজেক্ট স্ট্রাকচার না দেওয়া। যেমন: \`{ price: $gt: 50 }\` লেখা ভুল। সঠিক হবে: \`{ price: { $gt: 50 } }\`।

### Code Example
\`\`\`javascript
// একাধিক কম্পারিজন অপারেটর দিয়ে প্রোডাক্ট ফিল্টারিং
const products = db.products.find({
  category: { $in: ["Electronics", "Appliances"] }, // নির্দিষ্ট ক্যাটাগরি
  price: { $gte: 50, $lt: 200 }, // ৫০ থেকে ২০০-র নিচে দাম
  stock: { $ne: 0 } // স্টক ০ নয় এমন
});
\`\`\``
  },
  {
    id: 'mongodb-8',
    title: 'Explain logical query operators in MongoDB ($and, $or, $nor, $not).',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Logical Operators'],
    enAnswer: '$and joins queries with logical AND (all must match), $or joins queries with logical OR (at least one must match), $nor joins queries with logical NOR (all must fail), and $not inverts the effect of a query expression.',
    bnAnswer: '$and কুয়েরিগুলোকে লজিক্যাল AND দিয়ে যুক্ত করে (সব কন্ডিশন মিলতে হবে), $or লজিক্যাল OR দিয়ে যুক্ত করে (যেকোনো একটি মিললেই হবে), $nor লজিক্যাল NOR দিয়ে যুক্ত করে (কোনো কন্ডিশন মেলা যাবে না), এবং $not কন্ডিশনের ফলাফল বিপরীত করে দেয়।',
    enExplanation: `### Explanation
Logical operators group multiple condition objects together:

- **Syntax for root operators (\`$or\`, \`$and\`, \`$nor\`)**: Expect an array of query objects.
  - \`{ $or: [ { cond1 }, { cond2 } ] }\`
- **Syntax for field operator (\`$not\`)**: Inverts a specific operator result.
  - \`{ price: { $not: { $gt: 50 } } }\`
- **Implicit AND**: MongoDB automatically ANDs properties inside a single query object, e.g. \`{ status: "active", price: 10 }\`. You only need \`$and\` explicitly if you have multiple conditions on the same field name.

### Real-World Example
In a banking app, if a user wants to view suspicious transactions, you query: transactions that are either above $10,000 OR flagged as risky, but NOT marked as authorized:
\`\`\`javascript
{
  $or: [ { amount: { $gt: 10000 } }, { flagged: true } ],
  status: { $ne: "authorized" }
}
\`\`\`

### Best Practice
Avoid excessive nesting of \`$or\` and \`$and\` queries. If you have multiple conditions checking equality on a single field, always prefer \`$in\` over \`$or\` for better performance and readability.

### Common Mistakes
Using \`$and\` unnecessarily for independent fields (e.g. \`{ $and: [{ status: "active" }, { price: 20 }] }\`). Simply write \`{ status: "active", price: 20 }\` which is cleaner and parsed faster.

### Code Example
\`\`\`javascript
// Fetch products that are either:
// (cheap and active) OR (expensive but in stock)
const items = db.products.find({
  $or: [
    { price: { $lt: 20 }, status: "active" },
    { price: { $gte: 200 }, stock: { $gt: 0 } }
  ]
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লজিক্যাল অপারেটর দিয়ে একাধিক কুয়েরি অবজেক্টকে একত্রে গ্রুপ করা হয়:

- **রুট অপারেটর গঠন (\`$or\`, \`$and\`, \`$nor\`)**: কন্ডিশন অবজেক্টের একটি অ্যারে রিসিভ করে।
  - \`{ $or: [ { শর্ত১ }, { শর্ত২ } ] }\`
- **ফিল্ড অপারেটর গঠন (\`$not\`)**: কন্ডিশন ফলাফলকে উল্টে দেয়।
  - \`{ price: { $not: { $gt: 50 } } }\`
- **স্বতঃস্ফূর্ত AND**: মঙ্গোডিবি কমা ব্যবহার করা ফিল্ডগুলোকে ডিফল্টভাবে AND হিসেবে দেখে (যেমন: \`{ status: "active", price: 10 }\`)। একই ফিল্ডে একাধিক ডাবল কন্ডিশন চেক করা ছাড়া সরাসরি \`$and\` ব্যবহারের প্রয়োজন নেই।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং অ্যাপে সন্দেহজনক ট্রানজেকশন ফিল্টার করতে: যে ট্রানজেকশনগুলোর পরিমাণ ১০,০০০ টাকার বেশি অথবা যেগুলোর স্ট্যাটাস ঝুঁকিপূর্ণ, কিন্তু যেগুলো সিস্টেম কর্তৃক অথরাইজড নয়:
\`\`\`javascript
{
  $or: [ { amount: { $gt: 10000 } }, { flagged: true } ],
  status: { $ne: "authorized" }
}
\`\`\`

### উত্তম অনুশীলন
অতিরিক্ত নেস্টেড \`$or\` ও \`$and\` লেখা এড়িয়ে চলুন। একই ফিল্ডের বিভিন্ন মান চেক করার জন্য \`$or\` এর পরিবর্তে সরাসরি \`$in\` অপারেটর ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভিন্ন ভিন্ন ফিল্ডে অ্যান্ড করতে গিয়ে জোরপূর্বক \`$and\` ব্যবহার করা (যেমন: \`{ $and: [{ status: "active" }, { price: 20 }] }\`)। সাধারণ কমা দিয়ে লিখলেই এটি অ্যান্ড কন্ডিশন নিয়ে নেয়: \`{ status: "active", price: 20 }\`।

### Code Example
\`\`\`javascript
// নিচের যেকোনো একটি শর্ত মিললে প্রোডাক্ট তুলে আনা:
// (কম দাম ও একটিভ প্রোডাক্ট) অথবা (বেশি দাম কিন্তু স্টকে আছে)
const items = db.products.find({
  $or: [
    { price: { $lt: 20 }, status: "active" },
    { price: { $gte: 200 }, stock: { $gt: 0 } }
  ]
});
\`\`\``
  },
  {
    id: 'mongodb-9',
    title: 'Explain element query operators in MongoDB ($exists and $type).',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Element Operators'],
    enAnswer: '$exists matches documents containing (or lacking) a specified field. $type matches documents where the field value corresponds to a defined BSON type (like string, array, object, or number).',
    bnAnswer: '$exists এমন ডকুমেন্ট খুঁজে পায় যাতে নির্দিষ্ট ফিল্ডটি থাকে (অথবা থাকে না)। $type ডকুমেন্টের ফিল্ড ভ্যালুটি নির্দিষ্ট BSON টাইপ (যেমন: string, array, object) কিনা তা ম্যাচ করে।',
    enExplanation: `### Explanation
Because MongoDB is schema-less, documents in a collection can have varying shapes. Element operators verify the structure of documents.

- **\`$exists\`**:
  - \`{ field: { $exists: true } }\`: Matches documents containing the field (even if the value is \`null\`).
  - \`{ field: { $exists: false } }\`: Matches documents that do not contain the field at all.
- **\`$type\`**:
  - Useful when checking if data types are inconsistent. You can pass the BSON type alias string (e.g. \`"string"\`, \`"array"\`, \`"number"\`) or BSON type number identifiers.

### Real-World Example
If you migrated a database and added a new \`referredByUserId\` property, you can find all legacy users who do not have this field set yet using \`{ referredByUserId: { $exists: false } }\` and update them with defaults.

### Best Practice
Combine \`$exists: true\` with checking for null if you want to ensure a field contains a valid value, since \`{ field: { $exists: true } }\` will still match documents where the field value is explicitly set to \`null\`.

### Common Mistakes
Assuming \`{ bio: { $exists: true } }\` guarantees the field has a text value. If the document has \`bio: null\` or \`bio: ""\`, it still matches.

### Code Example
\`\`\`javascript
// 1. Find users who have a verified phone number key
const verifiedUsers = db.users.find({ 
  phoneNumber: { $exists: true, $ne: null } 
});

// 2. Find legacy products where the 'price' field was stored as string instead of double
const brokenProducts = db.products.find({ 
  price: { $type: "string" } 
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি স্কিমাহীন হওয়ায় একটি কালেকশনের একেকটি ডকুমেন্টের ডেটা কি-সমূহ আলাদা হতে পারে। এই কন্ডিশন চেক করতে এলিমেন্ট অপারেটর কাজ করে।

- **\`$exists\`**:
  - \`{ field: { $exists: true } }\`: ফিল্ডটি ডকুমেন্টে উপস্থিত থাকলে ম্যাচ করে (এমনকি ভ্যালু \`null\` হলেও)।
  - \`{ field: { $exists: false } }\`: ফিল্ডটি ডকুমেন্টে না থাকলে ম্যাচ করে।
- **\`$type\`**:
  - ডকুমেন্টের ফিল্ডের ডাটা টাইপ কনফার্ম করতে সাহায্য করে। যেমন: ডাটা টাইপ \`"string"\` বা \`"array"\` কিনা তা যাচাই করা।

### বাস্তব-ভিত্তিক উদাহরণ
সিস্টেম আপডেটের পর আগের ইউজারদের প্রোফাইলে \`backupEmail\` নামে একটি নতুন ফিল্ড যোগ করার সিদ্ধান্ত নিলেন। যেসব পুরোনো ইউজারের এই ফিল্ডটি সেট করা নেই, তাদের বের করতে লিখবেন: \`{ backupEmail: { $exists: false } }\`।

### উত্তম অনুশীলন
কোনো ফিল্ডে ভ্যালিড ডেটা আছে কিনা নিশ্চিত করতে \`$exists: true\`-এর সাথে \`$ne: null\` চেক করুন। শুধু এক্সিস্ট ট্রু করলে নাল (\`null\`) ডাটা থাকলেও তা সিলেক্ট হয়ে যায়।

### সাধারণ ভুলসমূহ
\`{ bio: { $exists: true } }\` দিলেই সেই ফিল্ডে টেক্সট থাকবে এমনটা ভাবা। বায়ো ফিল্ডে যদি প্লেইন \`null\` বা ফাঁকা স্ট্রিং \`""\` সেভ থাকে, তবুও এই কুয়েরিতে ওই ডকুমেন্ট ধরা পড়বে।

### Code Example
\`\`\`javascript
// ১. যেসব ইউজারের ফোন নম্বর ফিল্ডটি ডাটাবেসে তৈরি আছে এবং নাল নয়
const verifiedUsers = db.users.find({ 
  phoneNumber: { $exists: true, $ne: null } 
});

// ২. ভুল ডেটা টাইপ ধরা: যে প্রোডাক্টগুলোর দাম ডাবলের বদলে স্ট্রিং ফরম্যাটে সেভ আছে
const brokenProducts = db.products.find({ 
  price: { $type: "string" } 
});
\`\`\``
  },
  {
    id: 'mongodb-10',
    title: 'What is Query Projection in MongoDB, and how do you include or exclude fields?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Query', 'Projection', 'Performance'],
    enAnswer: 'Query projection is the process of selecting only specific fields to be returned in matching documents. It is configured in the second argument of find() by setting field names to 1 (include) or 0 (exclude). You cannot mix inclusion and exclusion in a single projection, except for the _id field.',
    bnAnswer: 'কুয়েরি প্রজেকশন হলো ডকুমেন্ট থেকে শুধু নির্দিষ্ট ফিল্ডগুলো রিটার্ন করার জন্য সিলেক্ট করা। এটি find() এর ২য় আর্গুমেন্টে ফিল্ডের পাশে ১ (অন্তর্ভুক্ত) বা ০ (বাদ দেওয়া) লিখে সেট করা হয়। _id ব্যতীত অন্য ফিল্ডগুলোর ক্ষেত্রে ১ ও ০ একত্রে মিক্স করা যায় না।',
    enExplanation: `### Explanation
When you fetch documents from MongoDB, the entire BSON document (including large arrays and sub-documents) is transferred over the network. **Projection** filters this at the database level.

- **Inclusion (\`1\`)**: Returns *only* the fields set to 1. All other fields are hidden. The \`_id\` field is included by default unless explicitly excluded (\`_id: 0\`).
- **Exclusion (\`0\`)**: Returns all fields *except* the fields set to 0.
- **Rule of Mixing**: You cannot write \`{ name: 1, email: 0 }\`. MongoDB will throw an projection error because it cannot determine if you want to include or exclude by default. The only exception is \`_id\` (e.g. \`{ name: 1, _id: 0 }\` is valid).

### Real-World Example
In a user database where profiles contain large chunks of log data and encrypted hash passwords, when returning a list of search matches on the frontend directory, you project only the profile picture and name: \`{ name: 1, avatar: 1, _id: 0 }\`.

### Best Practice
Always project query results in high-traffic APIs. Reducing the document payload size prevents network bandwidth congestion and saves CPU parsing time in Node.js.

### Common Mistakes
Fetching heavy documents containing huge nested arrays and parsing them inside Node.js code manually, rather than writing a database projection filter, which causes high RAM usage.

### Code Example
\`\`\`javascript
// 1. Project Inclusion: Get only name and email (exclude _id)
db.users.find(
  { status: "active" },
  { name: 1, email: 1, _id: 0 } // Only name and email will be returned
);

// 2. Project Exclusion: Get all fields except password
db.users.find(
  { email: "rohit@example.com" },
  { password: 0 } // Password removed, everything else returned
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস থেকে কোনো ডকুমেন্ট কুয়েরি করার সময় সম্পূর্ণ ডকুমেন্টের সব বড় বড় ফিল্ড (যেমন পাসওয়ার্ড, লম্বা অ্যারে) নেটওয়ার্কের মাধ্যমে ট্রান্সফার হয়। **প্রজেকশন** ডেটাবেস লেভেলেই এই ফিল্ডগুলোকে ফিল্টার করে দেয়।

- **Inclusion (\`1\`)**: শুধুমাত্র ১ সেট করা ফিল্ডগুলোই রিটার্ন করে। বাকি সব হাইড থাকে। তবে \`_id\` ফিল্ডটি ডিফল্টভাবে থাকে, একে রিমুভ করতে হলে আলাদাভাবে \`_id: 0\` দিতে হয়।
- **Exclusion (\`0\`)**: ০ সেট করা ফিল্ডটি বাদে ডকুমেন্টের বাকি সমস্ত ফিল্ড রিটার্ন করে।
- **মিক্সিং রুল**: আপনি এক প্রজেকশনে \`{ name: 1, email: 0 }\` লিখতে পারবেন না। মঙ্গোডিবি প্রজেকশন এরর দেখাবে। একমাত্র ব্যতিক্রম হলো \`_id\` (যেমন: \`{ name: 1, _id: 0 }\` লেখা যাবে)।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার কালেকশনে ইউজারের পাসওয়ার্ড হ্যাশ সেভ থাকে। পেজে যখন ইউজারদের নামের তালিকা দেখাবেন, তখন সিকিউরিটি ও স্পিডের স্বার্থে পাসওয়ার্ড ফিল্ডটি বাদ দিতে প্রজেকশন ফিল্টার ব্যবহার করবেন: \`{ name: 1, avatar: 1, _id: 0 }\`।

### উত্তম অনুশীলন
উচ্চ ট্রাফিকের এপিআই-তে সর্বদা প্রজেকশন ব্যবহার করুন। অপ্রয়োজনীয় ডাটা ট্রাফিক কমালে ডাটাবেস এবং নোডজেএস মেমোরির ওপর লোড অনেক কম থাকে।

### সাধারণ ভুলসমূহ
ডাটাবেস থেকে বড় ডকুমেন্টের সব ডাটা তুলে এনে নোডজেএস কোডে লুপ ঘুরিয়ে ফিল্ড ডিলিট করা। ডাটাবেস থেকে ফিল্টার হয়ে আসাটাই সবচেয়ে সাশ্রয়ী।

### Code Example
\`\`\`javascript
// ১. Inclusion: শুধু নাম ও ইমেইল নেওয়া (আইডি বাদ দিয়ে)
db.users.find(
  { status: "active" },
  { name: 1, email: 1, _id: 0 } // শুধু নাম ও ইমেইল রিটার্ন হবে
);

// ২. Exclusion: পাসওয়ার্ড ছাড়া বাকি সব ডাটা নেওয়া
db.users.find(
  { email: "rohit@example.com" },
  { password: 0 } // পাসওয়ার্ড ছাড়া সব ফিল্ড রিটার্ন হবে
);
\`\`\``
  },
  {
    id: 'mongodb-11',
    title: 'Explain how sorting, limiting, and skipping query results work in MongoDB.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Query', 'Pagination', 'Sort', 'Limit'],
    enAnswer: 'sort({ field: 1 }) sorts results in ascending order, while -1 sorts in descending order. limit(N) restricts results to N documents. skip(M) skips the first M documents, which is commonly used to implement pagination.',
    bnAnswer: 'sort({ field: 1 }) আরোহী (ascending) এবং -1 অবরোহী (descending) ক্রমে সাজায়। limit(N) সর্বোচ্চ N-সংখ্যক ডকুমেন্ট রিটার্ন করে। skip(M) প্রথম M-সংখ্যক ডকুমেন্ট বাদ দেয়, যা মূলত পেজিনেশন তৈরিতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Sorting, limiting, and skipping are methods chained to MongoDB query cursors to structure retrieved datasets:

- **\`sort()\`**: Expects an object mapping keys to \`1\` (ascending) or \`-1\` (descending).
- **\`limit()\`**: Expects an integer specifying max results to return.
- **\`skip()\`**: Expects an integer specifying offset documents to bypass.
- **Execution Order**: No matter what order you chain them in your code (e.g. \`find().skip().limit().sort()\`), MongoDB always executes them in this logical order:
  1. **Sort** (applies sorting filters first).
  2. **Skip** (skips initial offset documents).
  3. **Limit** (restricts output to the specified batch size).

### Real-World Example
In a news feed page showing 10 articles per page, when loading page 3:
- Page size = 10. Offset/skip = \`(page - 1) * page_size\` = 20.
- Query: \`db.articles.find().sort({ publishedAt: -1 }).skip(20).limit(10)\`. This fetches the 21st to 30th latest articles.

### Best Practice
Always create an index on the fields you sort by. If you run a \`sort()\` query without an index on a large dataset, and MongoDB's in-memory sort exceeds 32MB, the query will crash with an error.

### Common Mistakes
Using large \`skip()\` offsets (e.g. \`skip(100000)\`) for paginating massive collections. The database has to scan and discard 100,000 documents from disk sequentially before returning results, making it extremely slow. Use cursor-based pagination (keyset paging) instead.

### Code Example
\`\`\`javascript
// Fetch page 2 of products sorted by price (low to high)
const pageSize = 5;
const pageNumber = 2;

const products = db.products.find({})
  .sort({ price: 1 }) // Sort by price ascending
  .skip((pageNumber - 1) * pageSize) // Skip first 5 items
  .limit(pageSize); // Limit to next 5 items
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সর্টিং, লিমিটিং এবং স্কিপিং হলো মঙ্গোডিবির কার্সর মেথড যা কুয়েরির ফলাফল বিন্যাস করতে কাজ করে:

- **\`sort()\`**: আরোহী বা এসেন্ডিংয়ের জন্য \`1\` এবং ডিসেন্ডিংয়ের জন্য \`-1\` ব্যবহার করে।
- **\`limit()\`**: ফলাফল সর্বোচ্চ কয়টি ডকুমেন্টে সীমাবদ্ধ থাকবে তা নির্ধারণ করে।
- **\`skip()\`**: শুরুর দিক থেকে নির্দিষ্ট সংখ্যক ফাইল বাদ দিয়ে ডাটা লোড করে।
- **এক্সিকিউশন সিকোয়েন্স**: কোডে আপনি এগুলো যেকোনো অর্ডারে লিখুন না কেন (যেমন: \`skip().limit().sort()\`), মঙ্গোডিবি সবসময় এই সিরিয়ালে রান করে:
  ১. **সর্ট** (আগে সর্টিং কমপ্লিট করে)।
  ২. **স্কিপ** (স্লাইড বা অফসেট ডাটা বাদ দেয়)।
  ৩. **লিমিট** (নির্দিষ্ট সংখ্যক রেজাল্ট রিলিজ করে)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নিউজ সাইটে প্রতি পেজে ১০টি করে পোস্ট দেখাবেন। ৩ নম্বর পেজ লোড করার সময়:
- স্কিপ হিসাব: \`(৩ - ১) * ১০\` = ২০।
- কুয়েরি: \`db.articles.find().sort({ publishedAt: -1 }).skip(20).limit(10)\`। এটি ২১ থেকে ৩০ নম্বর নতুন খবরগুলো দেখাবে।

### উত্তম অনুশীলন
সর্ট করতে ব্যবহৃত ফিল্ডে অবশ্যই ইনডেক্স ব্যবহার করুন। ইনডেক্স ছাড়া বড় ফাইলে সর্ট করতে গেলে মঙ্গোডিবির ইন-মেমোরি সর্ট বাফার লিমিট (৩২ মেগাবাইট) ক্রস করে কুয়েরি ফেইল বা ক্র্যাশ করবে।

### সাধারণ ভুলসমূহ
খুব বড় ডাটাতে পেজিনেশনের জন্য অতিরিক্ত \`skip()\` ব্যবহার করা (যেমন: \`skip(100000)\`)। ডাটাবেসকে ১ লাখ ফাইল রিড করে ফেলে দিয়ে তবেই ফলাফল দেখাতে হয়, যা কুয়েরি ধীরগতির করে। এর বদলে কার্সর-ভিত্তিক বা আইডি ট্র্যাকিং পেজিনেশন ব্যবহার করুন।

### Code Example
\`\`\`javascript
// কম দাম থেকে বেশি দামের প্রোডাক্টগুলোর পেজ ২ লোড করা
const pageSize = 5;
const pageNumber = 2;

const products = db.products.find({})
  .sort({ price: 1 }) // দামের আরোহী ক্রমানুসারে
  .skip((pageNumber - 1) * pageSize) // প্রথম ৫টি প্রোডাক্ট বাদ দেওয়া
  .limit(pageSize); // পরবর্তী ৫টি প্রোডাক্ট লিমিট করা
\`\`\``
  },
  {
    id: 'mongodb-12',
    title: 'Explain the difference between Embedded Documents and References in MongoDB data modeling.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Data Modeling', 'Database Design', 'Best Practice'],
    enAnswer: 'Embedded Documents (Denormalization) save related data inside a single parent document, allowing single-query reads. References (Normalization) store data in separate collections and link them using ObjectIDs, requiring query joins (populate or lookup) to merge data.',
    bnAnswer: 'এমবেডেড ডকুমেন্ট (Denormalization) রিলেটেড ডাটা একটি মাত্র প্যারেন্ট ডকুমেন্টের ভেতরে সেভ করে, ফলে এক কুয়েরিতেই সব রিড করা যায়। রেফারেন্স (Normalization) ডাটা আলাদা কালেকশনে রাখে এবং ObjectIDs দিয়ে লিঙ্ক করে, যা রিড করার জন্য জয়েন কুয়েরির প্রয়োজন হয়।',
    enExplanation: `### Explanation
Data modeling in MongoDB centers on the choice between embedding and referencing:

**1. Embedded Documents (One-to-Few / One-to-Many):**
- Related data is stored as a sub-document or array of objects inside the document.
- **Pros**: High read performance, atomic writes (updating a user and their address in a single write operation), simple structure.
- **Cons**: Document size limit is 16MB. Arrays can grow out of bound (unbounded growth).

**2. References (One-to-Many / Many-to-Many):**
- Storing primary key ObjectIDs of target documents in the reference properties.
- **Pros**: Prevents data duplication, bypasses the 16MB document size limit, allows independent querying on referenced collections.
- **Cons**: Slower reads (requires application-level joins using Mongoose \`populate\` or database aggregate \`$lookup\`).

### Real-World Example
- **Embedding**: An ecommerce order document embeds the shipping address and ordered product items at the moment of purchase, as orders are historical immutable records.
- **Referencing**: A user has thousands of log logs. You reference logs to prevent the user document from exceeding 16MB.

### Best Practice
Follow the rule: "Represent relationships by embedding unless there is a compelling reason not to." Avoid nesting arrays inside arrays, and never embed arrays that grow without limits (like comments on a viral post).

### Common Mistakes
Embedding a list that grows indefinitely. For example, storing all user notifications in a sub-document array. Eventually, active users will hit the 16MB limit, causing database write crashes.

### Code Example
\`\`\`javascript
// 1. Embedded Address (Denormalized)
const userEmbedded = {
  name: "Rohit",
  addresses: [
    { city: "Dhaka", zip: "1212" },
    { city: "Sylhet", zip: "3100" }
  ]
};

// 2. Referenced Orders (Normalized)
const userReferenced = {
  name: "Rohit",
  orders: [
    ObjectId("60c72b2f9b1d8b2bad000002"),
    ObjectId("60c72b2f9b1d8b2bad000003")
  ]
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির স্কিমা ডিজাইনের মূলে রয়েছে দুটি আর্কিটেকচারাল প্যাটার্ন:

**১. এমবেডেড ডকুমেন্ট (Embedded Documents - Denormalization):**
- সাব-ডকুমেন্ট বা অবজেক্ট অ্যারে হিসেবে ডকুমেন্টের ভেতরেই রিলেটেড ডাটা রাখা হয়।
- **সুবিধা**: রিড স্পিড চমৎকার, এক রিকোয়েস্টেই সব ডাটা চলে আসে এবং ডাটা সেভ করাও সহজ।
- **অসুবিধা**: ডকুমেন্টের সাইজ ১৬ মেগাবাইটের বেশি হতে পারবে না। অ্যারের সাইজ আনলিমিটেড বাড়লে সমস্যা হতে পারে।

**২. রেফারেন্স (References - Normalization):**
- অন্য ডকুমেন্টের আইডি অবজেক্টআইডি (\`_id\`) রেফারেন্স হিসেবে রাখা হয়।
- **সুবিধা**: একই ডাটা বারবার ডুপ্লিকেট হয় না, ১৬ এমবি লিমিটের বাইরে ফাইল রাখা যায়।
- **অসুবিধা**: রিড অপারেশন ধীরগতির হয় কারণ জয়েন কুয়েরি (\`$lookup\` বা \`populate\`) চালাতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
- **এমবেডিং**: ই-কমার্স অর্ডারে কাস্টমারের শিপিং এড্রেসটি সরাসরি এমবেড করে দেওয়া হয়, কারণ অর্ডার সম্পন্ন হয়ে গেলে এড্রেসটি ভবিষ্যতের জন্য ফিক্সড রেকর্ড।
- **রেফারেন্সিং**: একটি ব্লগে হাজার হাজার রিডার কমেন্ট করছে। সব কমেন্ট ব্লগের ভেতরে এমবেড রাখলে এক সময় পোস্টের সাইজ ১৬ এমবি ক্রস করবে। তাই কমেন্টগুলো আলাদা কালেকশনে রেখে আইডি দিয়ে লিংক করা হয়।

### উত্তম অনুশীলন
"নরমাল কারণ ছাড়া সর্বদা এমবেডিং ব্যবহার করুন।" তবে যে অ্যারের সাইজ অনবরত বাড়তেই থাকে (যেমন ফেসবুকের লাইক লিস্ট), তা এমবেড না করে রেফারেন্স ব্যবহার করাই শ্রেয়।

### সাধারণ ভুলসমূহ
আনলিমিটেড বাউন্ডারি না দিয়ে ডকুমেন্টের ভেতর ডাটা পুশ করতে থাকা। এর ফলে ইউজার ডাটা একসময় ডিলিট না হয়ে ডাটাবেস ক্র্যাশ করার কারণ হয়ে দাঁড়ায়।

### Code Example
\`\`\`javascript
// ১. এমবেডেড এড্রেস (একক অবজেক্টে ডাটা)
const userEmbedded = {
  name: "Rohit",
  addresses: [
    { city: "ঢাকা", zip: "1212" },
    { city: "সিলেট", zip: "3100" }
  ]
};

// ২. রেফারেন্সড অর্ডার (আলাদা কালেকশন লিংক)
const userReferenced = {
  name: "Rohit",
  orders: [
    ObjectId("60c72b2f9b1d8b2bad000002"),
    ObjectId("60c72b2f9b1d8b2bad000003")
  ]
};
\`\`\``
  },
  {
    id: 'mongodb-13',
    title: 'What is Mongoose and how does it benefit Node.js developers over the native MongoDB driver?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'ODM', 'Node.js', 'Database Architecture'],
    enAnswer: 'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It benefits developers by providing strict schema validation, type casting, query helpers, validation middleware, and middleware hooks (middleware) directly at the application layer, which the native driver lacks.',
    bnAnswer: 'Mongoose হলো নোডজেএস এবং মঙ্গোডিবির জন্য একটি অবজেক্ট ডাটা মডেলিং (ODM) লাইব্রেরি। এটি ডেভেলপারদের ডাটাবেসের ওপর স্কিমা ভ্যালিডেশন, অটো টাইপ কাস্টিং, মিডলওয়্যার হুক ও কোড রিডাবিলিটি বাড়াতে সহায়তা করে যা সাধারণ মঙ্গোডিবি ড্রাইভারে নেই।',
    enExplanation: `### Explanation
While MongoDB is inherently schema-less, running large production enterprise software with unstructured databases can lead to data integrity bugs. Mongoose provides a structured interface on top of the raw driver.

**Key Benefits of Mongoose:**
1. **Schema Definition**: Enforces strict shapes on documents at the application layer.
2. **Built-in Validation**: Defines validators (e.g. \`required: true\`, custom regex patterns) to block invalid data writes.
3. **Type Casting**: Automatically casts variables to matching BSON formats (e.g. converting a string \`"100"\` to integer \`100\` if specified in Schema).
4. **Middleware (Hooks)**: Register pre-save hooks (e.g. hashing passwords before saving user records) or post-query events.
5. **Populate API**: Provides a clean declarative syntax for resolving referenced links.

### Real-World Example
Without Mongoose, if your Node app writes a user document missing the \`email\` field, MongoDB writes it successfully. With Mongoose validation, the application catches the missing field instantly and returns a clean validation error to the client before calling the database.

### Best Practice
Use Mongoose for general application servers to secure schema structures. However, for raw logging pipelines or bulk migration scripts, use the native MongoDB driver directly to avoid Mongoose instantiation and hook processing overheads.

### Common Mistakes
Confusing application-level schemas with database constraints. Mongoose schemas are enforced in your Node.js code; raw updates triggered directly in MongoDB Compass bypass Mongoose rules completely.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number, min: 18 }
});

// Compile Model
const User = mongoose.model('User', userSchema);

async function createUser() {
  try {
    // Mongoose validates this object automatically before inserting
    const newUser = await User.create({ username: "rohit", email: "rohit@example.com", age: 25 });
    console.log("User saved:", newUser);
  } catch (err) {
    console.error("Validation failed:", err.message);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি স্কিমাহীন হলেও বড় প্রোডাকশন প্রজেক্টে কোনো স্ট্রাকচার না থাকলে ডাটাবেসে ভুল ভাল ডাটা ইনসার্ট হয়ে বাগ তৈরি হতে পারে। Mongoose নোড অ্যাপ্লিকেশনের ওপর একটি ভ্যালিডেশন লেয়ার তৈরি করে।

**Mongoose-এর প্রধান সুবিধাসমূহ:**
১. **স্কিমা ডেফিনিশন**: ডকুমেন্টের গঠনে টাইপ সেফটি ও ফিল্ড নির্ধারণ করে দেয়।
২. **বিল্ট-ইন ভ্যালিডেশন**: ইমেইল প্যাটার্ন চেক করা বা রিকোয়ার্ড ফিল্ড মিসিং থাকলে রাইট ব্লক করা।
৩. **অটো টাইপ কাস্টিং**: স্ট্রিংয়ে থাকা কোনো সংখ্যাকে (\`"100"\`) স্কিমা অনুযায়ী অটোমেটিক ইন্টিজারে রূপান্তর করে।
৪. **মিডলওয়্যার হুক (Middleware)**: যেমন পাসওয়ার্ড ডাটাবেসে সেভ করার ঠিক আগের মুহূর্তে পাসওয়ার্ডটি হ্যাশ করে ফেলা।
৫. **পপুলেট এপিআই**: সহজে রেফারেন্স ফাইলের আইডি থেকে সম্পূর্ণ ডকুমেন্টের ডাটা লোড করা।

### বাস্তব-ভিত্তিক উদাহরণ
Mongoose ছাড়া যদি এপিআই-তে ইউজারের ইমেইল ছাড়া রিকোয়েস্ট সাবমিট করা হয়, মঙ্গোডিবি তা সেভ করে ফেলবে। Mongoose ব্যবহার করলে ডাটাবেসে কুয়েরি ফায়ার হওয়ার আগেই নোডজেএস-এর লেভেলের স্ক্রিপ্ট ভ্যালিডেশন ফেইল করবে ও ইউজারকে এরর মেসেজ পাঠাবে।

### উত্তম অনুশীলন
সাধারণ ওয়েব এপিআই ও অ্যাপ্লিকেশন ডেভেলপমেন্টে ডাটা সিকিউরিটি ও শৃঙ্খলার জন্য Mongoose ব্যবহার করুন। কিন্তু বাল্ক ট্র্যাকিং লগ সিস্টেম বা ডাটা মাইগ্রেশনের মতো হাই-স্পিড কাজের জন্য সরাসরি নেটিভ মঙ্গোডিবি ড্রাইভার ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে করা যে Mongoose স্কিমা ডাটাবেসের ভেতরেও রুলস সেট করে। এই রুলসগুলো শুধু আপনার নোডজেএস কোডের অ্যাপ্লিকেশন লেভেলে সচল থাকে; মঙ্গোডিবি কম্পাস বা অন্য কোনো উপায়ে সরাসরি কুয়েরি করলে এই রুলস কাজ করবে না।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// স্কিমা তৈরি
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number, min: 18 }
});

// মডেল কম্পাইল করা
const User = mongoose.model('User', userSchema);

async function createUser() {
  try {
    // সেভ করার আগে Mongoose নিজে থেকেই অবজেক্টটি ভ্যালিডেট করবে
    const newUser = await User.create({ username: "rohit", email: "rohit@example.com", age: 25 });
    console.log("ইউজার সেভ হয়েছে:", newUser);
  } catch (err) {
    console.error("ভ্যালিডেশন ফেইল:", err.message);
  }
}
\`\`\``
  },
  {
    id: 'mongodb-14',
    title: 'How do you create schemas and models in Mongoose?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Schema', 'Model'],
    enAnswer: 'In Mongoose, define a schema using new mongoose.Schema({ ... }), specifying fields and data types. Then, compile it into a queryable model using mongoose.model(CollectionName, schema).',
    bnAnswer: 'Mongoose-এ new mongoose.Schema({ ... }) ব্যবহার করে ফিল্ড ও ডাটা টাইপ নির্ধারণ করে স্কিমা তৈরি করা হয়। এরপর mongoose.model(CollectionName, schema) দিয়ে এটি কুয়েরিযোগ্য মডেলে রূপান্তর করা হয়।',
    enExplanation: `### Explanation
Creating Mongoose models involves two steps:

1. **Schema Definition**: Maps directly to a MongoDB collection structure and defines validation, types, and defaults.
2. **Model Compilation**: Wraps the Schema with query helper methods (like \`find()\`, \`create()\`, \`update()\`). When compiled, Mongoose automatically connects to the pluralized lowercased collection name (e.g. model \`User\` maps to collection \`users\`).

**Configuration Schema Options:**
You can pass configuration objects to the schema constructor, such as enabling timestamps:
\`\`\`javascript
new mongoose.Schema({ ... }, { timestamps: true });
\`\`\`
This appends \`createdAt\` and \`updatedAt\` fields automatically.

### Real-World Example
In a blog website database, you design a \`Post\` Schema with titles, bodies, and published flags, compile it to a \`Post\` model, and call \`Post.find({ published: true })\` inside your Express route controllers.

### Best Practice
Always name models in the singular starting with a capital letter (e.g. \`Product\`, \`Article\`). Mongoose will pluralize it to map to the collection (\`products\`, \`articles\`) automatically, preventing naming confusion.

### Common Mistakes
Forgetting that compiling a schema twice using \`mongoose.model()\` on the same connection causes a \`OverwriteModelError\` crash, which often happens in serverless hot-reload loops.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// 1. Define the Schema structure
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true // Appends createdAt and updatedAt automatically
});

// 2. Compile to Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose-এ ডাটা মডেল করার ধাপ দুটি:

১. **স্কিমা নির্ধারণ**: ডাটাবেস কালেকশনের স্ট্রাকচার কেমন হবে তা ডিফাইন করে, যেখানে ভ্যালিডেশন ও ডিফল্ট ভ্যালু থাকে।
২. **মডেল কম্পাইল করা**: স্কিমাকে মঙ্গোডিবির কুয়েরি ফাংশনসমূহ (যেমন: \`find()\`, \`create()\`) দিয়ে র‍্যাপ করা হয়। মডেল কম্পাইল করার সময় Mongoose অবজেক্টের ছোট হাতের বহুবচন হিসেবে কালেকশনের নাম ঠিক করে নেয় (যেমন: \`User\` মডেল তৈরি করলে তা ডাটাবেসে \`users\` কালেকশনে সেভ হবে)।

**স্কিমা কনফিগারেশন অপশন:**
স্কিমা তৈরির সময় দ্বিতীয় প্যারামিটারে কাস্টম সেটিংস দেওয়া যায়, যেমন টাইমস্ট্যাম্প সক্রিয় করা:
\`\`\`javascript
new mongoose.Schema({ ... }, { timestamps: true });
\`\`\`
এটি ডকুমেন্টে স্বয়ংক্রিয়ভাবে \`createdAt\` এবং \`updatedAt\` ফিল্ড অ্যাড করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ ওয়েবসাইটের জন্য আপনি একটি \`Post\` স্কিমা ডিজাইন করলেন যেখানে টাইটেল, বডি ও পাবলিশড ফ্ল্যাগ আছে। একে \`Post\` মডেলে রূপান্তর করার পর এপিআই রাউটারে \`Post.find()\` কল করে সমস্ত লাইভ পোস্ট শো করাবেন।

### উত্তম অনুশীলন
মডেলের নাম সবসময় বড় হাতের অক্ষরে এবং একবচনে রাখুন (যেমন: \`Product\`, \`Article\`)। মঙ্গোডিবি অটোমেটিক একে ডাটাবেসে বহুবচন করে কালেকশন ম্যাপ করবে (\`products\`, \`articles\`)।

### সাধারণ ভুলসমূহ
কোডে একই মডেল একাধিকবার কম্পাইল করা। এর ফলে সার্ভার \`OverwriteModelError\` দিয়ে ক্র্যাশ করবে। সার্ভারলেস বা হট রিলোড এনভায়রনমেন্টে এটি বেশি ঘটে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// ১. স্কিমার গঠন ডিফাইন করা
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true // স্বয়ংক্রিয়ভাবে তৈরির সময় ও আপডেটের সময় যোগ হবে
});

// ২. মডেলে রূপান্তর করা
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
\`\`\``
  },
  {
    id: 'mongodb-15',
    title: 'How does Mongoose handle validation hooks and pre/post middleware hooks?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Middleware', 'Validation', 'Hooks'],
    enAnswer: 'Mongoose middleware hooks allow you to execute functions before (pre) or after (post) specific database actions (like save, find, or update). Pre-hooks are typically used for validation, password hashing, and slug generation, while post-hooks handle logging or analytics.',
    bnAnswer: 'Mongoose মিডলওয়্যার হুকগুলো নির্দিষ্ট ডাটাবেস একশন (যেমন: save, find, বা update) হওয়ার ঠিক আগে (pre) বা পরে (post) কাস্টম ফাংশন রান করতে সাহায্য করে। Pre-hooks সাধারণত পাসওয়ার্ড হ্যাশিং বা স্ল্যাগ জেনারেট করতে এবং Post-hooks লগিংয়ের জন্য ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Mongoose middlewares (hooks) intercept execution flows:

- **Pre-hooks (\`schema.pre\` )**:
  - Run before database actions occur.
  - Require calling \`next()\` or returning a Promise to yield execution.
  - \`this\` inside pre-hooks refers to the document being saved (for document middleware like \`'save'\`).
- **Post-hooks (\`schema.post\` )**:
  - Run after database actions complete.
  - Do not block database execution flow; great for side-effects.
  - Receive the saved document as the first parameter.

### Real-World Example
When a user registers or updates their password, you write a \`pre('save')\` hook to hash their password using bcrypt before it ever touches the database, guaranteeing security.

### Best Practice
Inside Mongoose middleware functions, do not use ES6 arrow functions \`() => {}\` if you need to access \`this\`. Arrow functions do not bind their own \`this\` context, which prevents you from reading or mutating document properties.

### Common Mistakes
Forgetting to call \`next()\` in synchronous \`pre\` middleware handlers, which hangs the execution stream forever and prevents Node.js from completing the save query.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  password: { type: String, required: true }
});

// Pre-save hook: Hash password before database insert
userSchema.pre('save', async function(next) {
  // Only hash password if it has been modified or is new
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err); // Forward error to stop the save operation
  }
});

// Post-save hook: Log success message
userSchema.post('save', function(doc) {
  console.log(\`User \${doc.username} has been saved successfully.\`);
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose মিডলওয়্যার (বা হুক) ইন্টারসেপ্ট ফ্লোর মতো কাজ করে:

- **Pre-hooks (\`schema.pre\`)**:
  - ডাটাবেস কোড এক্সিকিউট হওয়ার ঠিক আগে রান করে।
  - কাজ শেষ হলে পরবর্তী ধাপে যেতে \`next()\` কল করতে হয় অথবা একটি প্রোমিজ রিটার্ন করতে হয়।
  - ফাংশনের ভেতর \`this\` দিয়ে সরাসরি বর্তমান ডকুমেন্টকে মডিফাই করা যায়।
- **Post-hooks (\`schema.post\`)**:
  - ডাটাবেস রাইট বা আপডেট সম্পূর্ণ হওয়ার পর রান করে।
  - এগুলো ডাটা সেভ হওয়াকে ব্লক করে না; নোটিফিকেশন পাঠানো বা লগ জেনারেট করার জন্য দারুণ।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার যখন নতুন পাসওয়ার্ড সেট করে, তখন ডাটাবেসে সেভ করার ঠিক আগের মুহূর্তে পাসওয়ার্ডটি হ্যাশ করে নেওয়া উচিত। এর জন্য \`pre('save')\` হুক দিয়ে bcrypt লাইব্রেরি দিয়ে পাসওয়ার্ড হ্যাশ করে ফাস্টে সেট করা হয়।

### উত্তম অনুশীলন
Mongoose মিডলওয়্যার ফাংশনে \`this\`-এর ভ্যালু রিসিভ করতে চাইলে অ্যানোনিমাস অ্যারো ফাংশন \`() => {}\` ব্যবহার করবেন না। অ্যারো ফাংশনে \`this\` গ্লোবাল অবজেক্ট রেফার করায় ডকুমেন্টের প্রপার্টি রিড করা যায় না। সর্বদা ক্লাসিক \`function() {}\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`pre\` মিডলওয়্যারে \`next()\` কল করতে ভুলে যাওয়া। এটি না করলে আপনার নোডজেএস কোড ঝুলে থাকবে এবং মঙ্গোডিবির কানেকশন কোনো রেসপন্স না দিয়ে টাইমআউট ফেইল হবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  password: { type: String, required: true }
});

// Pre-save hook: ডাটাবেসে সেভ হওয়ার আগে পাসওয়ার্ড হ্যাশ করা
userSchema.pre('save', async function(next) {
  // পাসওয়ার্ড পরিবর্তিত বা নতুন না হলে হ্যাশিং এড়ানো
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err); // এরর ফরোয়ার্ড করা
  }
});

// Post-save hook: সেভ হওয়ার পরে সাকসেস লগ প্রিন্ট
userSchema.post('save', function(doc) {
  console.log(\`ইউজার \${doc.username} সফলভাবে সেভ হয়েছে।\`);
});
\`\`\``
  },
  {
    id: 'mongodb-16',
    title: 'Explain the difference between query-level and document-level update triggers in Mongoose.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Middleware', 'Update Operations', 'Hooks'],
    enAnswer: 'Document-level updates (using doc.save()) run validation rules and trigger pre/post "save" middleware hooks. Query-level updates (using Model.updateOne() or updateMany()) bypass document instantiation, meaning validation rules do not run automatically and pre/post "save" hooks are not triggered.',
    bnAnswer: 'ডকুমেন্ট-লেভেল আপডেট (doc.save() দিয়ে) ভ্যালিডেশন রুলস রান করায় এবং "save" মিডলওয়্যার ট্রিগার করে। কুয়েরি-লেভেল আপডেট (Model.updateOne() দিয়ে) কোনো ডকুমেন্ট অবজেক্ট তৈরি না করে সরাসরি চলে, ফলে ডিফল্ট ভ্যালিডেশন ও "save" হুকগুলো রান হয় না।',
    enExplanation: `### Explanation
Mongoose handles updates differently depending on the method called.

**1. Document-level Updates (\`doc.save()\`):**
- First, you retrieve the document, update properties, and call \`.save()\`.
- **Hooks**: Triggers \`pre('save')\` and \`post('save')\`.
- **Validation**: Mongoose validates all fields against your Schema definitions before executing.

**2. Query-level Updates (\`Model.updateOne()\`, \`Model.findByIdAndUpdate()\`, etc.):**
- MongoDB updates the document directly in the database without instantiating a Javascript document.
- **Hooks**: Does *not* trigger \`pre('save')\` or \`post('save')\`. It triggers query hooks like \`pre('updateOne')\` or \`pre('findOneAndUpdate')\` if defined.
- **Validation**: By default, Mongoose skips schema validation for update queries. You must explicitly request validation by passing \`{ runValidators: true }\`.

### Real-World Example
If your schema enforces a minimum price of 10, and you run:
\`\`\`javascript
Product.updateOne({ id: 1 }, { price: 5 })
\`\`\`
It writes 5 successfully to the DB, violating your schema rules. Using \`{ runValidators: true }\` blocks this save.

### Best Practice
When updating passwords or fields that rely on pre-save calculations, always fetch the document and call \`doc.save()\` to ensure all hooks run. For simple, bulk flag changes, use query-level updates with \`runValidators: true\`.

### Common Mistakes
Writing a password hashing algorithm inside \`pre('save')\` and then running \`User.findByIdAndUpdate()\` to change a user password, which bypasses the hashing function completely and writes plain text passwords.

### Code Example
\`\`\`javascript
// 1. Document-level update (Safe, runs validation and save hooks)
const userDoc = await User.findById(userId);
userDoc.password = 'newPassword123';
await userDoc.save(); // Password will be hashed by pre-save hook

// 2. Query-level update (Must explicitly request validation)
await Product.findByIdAndUpdate(
  productId,
  { price: 5 }, // If minimum is 10, this will be blocked ONLY because runValidators is set
  { runValidators: true, new: true }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose-এ কুয়েরি মেথডের ওপর ভিত্তি করে আপডেট প্রক্রিয়া দুভাগে কাজ করে:

**১. ডকুমেন্ট-লেভেল আপডেট (\`doc.save()\`):**
- ডাটাবেস থেকে আগে পুরো অবজেক্টটি তুলে আনা হয়, ভ্যারিয়েবল মডিফাই করা হয় এবং \`save()\` কল করা হয়।
- **হুক**: এটি \`pre('save')\` এবং \`post('save')\` হুকগুলো ফায়ার করে।
- **ভ্যালিডেশন**: সেভ হওয়ার আগে মঙ্গুস আপনার স্কিমার সমস্ত ভ্যালিডেশন চেক করে।

**২. কুয়েরি-লেভেল আপডেট (\`Model.updateOne()\`, \`Model.findByIdAndUpdate()\`):**
- নোডজেএস মেমোরিতে কোনো অবজেক্ট লোড না করে সরাসরি ডাটাবেসে রিকোয়েস্ট পাঠিয়ে আপডেট করা হয়।
- **হুক**: এটি কোন "save" হুককে ট্রিগার করে না।
- **ভ্যালিডেশন**: ডিফল্টভাবে মঙ্গুস কুয়েরি আপডেটের সময় ভ্যালিডেশন এড়িয়ে যায়। কুয়েরিতেও ভ্যালিডেশন চালাতে চাইলে \`{ runValidators: true }\` পাস করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার প্রোডাক্ট স্কিমায় দামের মিনিমাম লিমিট ১০ সেট করা আছে। আপনি যদি কুয়েরি আপডেটে ১ সেট করেন, ডাটাবেস সেটি ১-এই আপডেট করে দেবে ভ্যালিডেশন এড়িয়ে। এটি ঠেকাতে \`runValidators\` অপশন ব্যবহার করতে হয়।

### উত্তম অনুশীলন
পাসওয়ার্ড পরিবর্তন বা প্রোফাইল তৈরির মতো কাজে সর্বদা ডকুমেন্ট-লেভেল \`save()\` ব্যবহার করুন যাতে হ্যাশিং ও চেকিং হুকগুলো রান করে। স্ট্যাটাস ফ্ল্যাগ চেঞ্জের মতো বাল্ক আপডেটে কুয়েরি মেথডের সাথে \`runValidators: true\` এড করুন।

### সাধারণ ভুলসমূহ
পাসওয়ার্ড হ্যাশারকে \`pre('save')\`-এ সেট করে রাখা কিন্তু এপিআই আপডেটে \`User.findByIdAndUpdate()\` চালানো। এতে হুক বাইপাস হয়ে প্লেইন টেক্সট পাসওয়ার্ড সেভ হয়ে যাবে।

### Code Example
\`\`\`javascript
// ১. ডকুমেন্ট-লেভেল আপডেট (নিরাপদ, হুক ও ভ্যালিডেশন সচল থাকে)
const userDoc = await User.findById(userId);
userDoc.password = 'newPassword123';
await userDoc.save(); // পাসওয়ার্ডটি সেভ হুক দ্বারা হ্যাশ হবে

// ২. কুয়েরি-লেভেল আপডেট (ভ্যালিডেশন সচল করতে runValidators এড করা)
await Product.findByIdAndUpdate(
  productId,
  { price: 5 }, // যদি মিনিমাম ১০ হয়, runValidators-এর কারণে এটি ব্লক হবে
  { runValidators: true, new: true }
);
\`\`\``
  },
  {
    id: 'mongodb-17',
    title: 'Explain what indexing is in MongoDB and why it is critical for read performance.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Indexing', 'Performance', 'Database Optimization'],
    enAnswer: 'Indexing in MongoDB is the creation of specialized data structures (B-trees) that store a small portion of the collection\'s data in a traversable form. It is critical because indexes allow MongoDB to locate matching documents instantly, preventing slow collection scans (COLLSCAN).',
    bnAnswer: 'মঙ্গোডিবির ইনডেক্সিং হলো একটি বিশেষ ডাটা স্ট্রাকচার (B-tree) তৈরি করা যা কালেকশনের ডাটার একটি অংশ দ্রুত অনুসন্ধানযোগ্য উপায়ে সাজিয়ে রাখে। এটি রিড পারফরম্যান্সের জন্য গুরুত্বপূর্ণ কারণ ইনডেক্স থাকলে মঙ্গোডিবি পুরো টেবিল স্ক্যান (COLLSCAN) না করেই নির্দিষ্ট ডাটা দ্রুত খুঁজে পায়।',
    enExplanation: `### Explanation
When you run a search query in MongoDB without an index:
- MongoDB must perform a **Collection Scan (COLLSCAN)**, reading every single document in the collection sequentially to check for a match.
- If the collection contains 10 million documents, the disk read overhead will lock resources and cause slow response times.

**How Indexes Work:**
- MongoDB uses **B-Tree indexes** (similar to a book index).
- An index stores the values of a specific field sorted in a sequential tree path, pointing directly to the disk locations of the full documents.
- When querying using an indexed field, MongoDB performs an **Index Scan (IXSCAN)**, locating the target document in logarithmic time ($O(\log N)$ instead of $O(N)$).

### Real-World Example
Searching a library of 1 million books for a specific title by reading every page of every book one by one (COLLSCAN) vs. using the library card catalog sorted alphabetically to find the book shelf number instantly (IXSCAN).

### Best Practice
Only index fields that are frequently queried, sorted, or used in joins. Since indexes reside in RAM to maintain speed, creating too many indexes exhausts server memory and slows down write operations (as every insert/update must update the index structures).

### Common Mistakes
Forgetting that indexes improve read speeds but degrade write speeds. Every document insertion forces MongoDB to recalculate and insert keys into the B-tree index, making database writes slower.

### Code Example
\`\`\`javascript
// 1. Create ascending index on 'email' field in users collection
db.users.createIndex({ email: 1 });

// 2. View current indexes in collection
db.users.getIndexes();

// 3. Drop index when no longer needed
db.users.dropIndex("email_1");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইনডেক্সিং ছাড়া মঙ্গোডিবির যেকোনো কুয়েরি রান করলে:
- মঙ্গোডিবিকে **কালেকশন স্ক্যান (COLLSCAN)** করতে হয়, অর্থাৎ কালেকশনের শুরু থেকে শেষ পর্যন্ত প্রতিটি ফাইল রিড করে ম্যাচিং চেক করে।
- কালেকশনে ১০ লাখ ডকুমেন্ট থাকলে পুরো ডিস্ক স্ক্যান করে উত্তর বের করতে অনেক সেকেন্ড সময় লেগে যাবে ও সার্ভার হ্যাং হবে।

**ইনডেক্স যেভাবে কাজ করে:**
- মঙ্গোডিবি **B-Tree ইনডেক্স** ব্যবহার করে (বইয়ের শেষের সূচিপত্রের মতো)।
- ইনডেক্স নির্দিষ্ট ফিল্ডের ভ্যালুগুলোকে একটি সাজানো সিকোয়েন্স পাথে সেভ রাখে যা সরাসরি ডকুমেন্টের মূল ডিস্ক লোকেশন নির্দেশ করে।
- ইনডেক্স করা ফিল্ডে কুয়েরি করলে মঙ্গোডিবি **ইনডেক্স স্ক্যান (IXSCAN)** চালায়, ফলে খুব দ্রুত ($O(\log N)$ সময়ে) ডাটা লোড করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
১ লক্ষ বইয়ের লাইব্রেরিতে নির্দিষ্ট নামের বই খুঁজতে প্রতিটি বইয়ের প্রতিটি পাতা পড়ে দেখা (COLLSCAN) বনাম লাইব্রেরি কার্ড বা ড্যাশবোর্ডে সার্চ করে বুক সেলফ নাম্বার বের করে ফেলা (IXSCAN)।

### উত্তম অনুশীলন
শুধু সেই ফিল্ডগুলোতেই ইনডেক্স ব্যবহার করুন যেগুলো প্রতিনিয়ত কুয়েরি বা সর্টিং ফিল্টারে ব্যবহৃত হয়। ইনডেক্সগুলো ডাটাবেস র‍্যামে স্থান দখল করায় অতিরিক্ত ইনডেক্স স্টোরেজ লিমিট পার করে ফায়ার রেট স্লো করতে পারে।

### সাধারণ ভুলসমূহ
ইনডেক্স রিড স্পিড বাড়ালেও রাইট স্পিড কমিয়ে দেয়। প্রতিবার নতুন ডাটা সেভ করার সময় মঙ্গোডিবিকে ইনডেক্স বাফারেও ডাটা রি-ক্যালকুলেট করে রাখতে হয়, যা রাইট স্পিড ধীর করে।

### Code Example
\`\`\`javascript
// ১. ইউজার কালেকশনের ইমেইল ফিল্ডে এসেন্ডিং ইনডেক্স তৈরি করা
db.users.createIndex({ email: 1 });

// ২. কালেকশনের বর্তমান ইনডেক্সসমূহ দেখা
db.users.getIndexes();

// ৩. অপ্রয়োজনীয় ইনডেক্স মুছে ফেলা
db.users.dropIndex("email_1");
\`\`\``
  },
  {
    id: 'mongodb-18',
    title: 'Explain single-field indexes in MongoDB.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Indexing', 'Database Optimization'],
    enAnswer: 'A single-field index creates an index on a single key of a document (e.g. createIndex({ username: 1 })). MongoDB can use this index for queries matching the field, and it can traverse the index in both ascending and descending directions for sorting.',
    bnAnswer: 'সিঙ্গেল-ফিল্ড ইনডেক্স ডকুমেন্টের একটি মাত্র নির্দিষ্ট ফিল্ডের ওপর ইনডেক্স তৈরি করে (যেমন: createIndex({ username: 1 }))। মঙ্গোডিবি এই ইনডেক্সটি ম্যাচিং কুয়েরিতে ব্যবহার করে এবং সর্টিংয়ের জন্য এটি সোজা ও উল্টো উভয় দিকেই রিড করতে পারে।',
    enExplanation: `### Explanation
Single-field indexes are the simplest form of index optimization in MongoDB.

- **Direction is Arbitrary**: When creating a single-field index, the sort direction (e.g., \`1\` for ascending or \`-1\` for descending) does not affect performance. MongoDB can traverse a single-field index backwards with equal efficiency.
- **Embedded Fields**: You can index sub-properties of nested objects using dot notation, e.g. \`db.users.createIndex({ "address.zip": 1 })\`.
- **Arrays (Multikey)**: Indexing a field containing an array automatically converts the index to a Multikey index, indexing every individual element.

### Real-World Example
In a user management portal, you query users strictly by their username to show profiles. Creating a single-field index on the \`username\` field guarantees that profile requests return instantly.

### Best Practice
Verify that your single-field indexes are being used by appending \`.explain()\` to your queries. Ensure that the query execution plan reports \`IXSCAN\` instead of \`COLLSCAN\`.

### Common Mistakes
Creating separate single-field indexes for multiple fields (like one on \`age\` and one on \`status\`) when your queries frequently filter by both fields together. In that case, a single **Compound Index** is much more efficient.

### Code Example
\`\`\`javascript
// 1. Create a single-field index on username
db.users.createIndex({ username: 1 });

// 2. Query that utilizes this index
db.users.find({ username: "rohit_dev" });

// 3. Query sorting that utilizes this index (both directions work)
db.users.find({}).sort({ username: -1 });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিঙ্গেল-ফিল্ড ইনডেক্স হলো মঙ্গোডিবির ইনডেক্স অপ্টিমাইজেশনের সবচেয়ে সহজ রূপ।

- **দিকনির্দেশনা ঐচ্ছিক**: সিঙ্গেল-ফিল্ড ইনডেক্স ডিক্লেয়ার করার সময় আরোহী (\`1\`) বা অবরোহী (\`-1\`) দিক পারফরম্যান্সে কোনো প্রভাব ফেলে না। মঙ্গোডিবি উভয় দিকেই সমভাবে ইনডেক্স ট্রাভার্স করতে পারে।
- **নেস্টেড ফিল্ড**: ডট নোটেশন ব্যবহার করে অবজেক্টের সাব-প্রপার্টিতেও ইনডেক্স করা যায়, যেমন: \`db.users.createIndex({ "address.zip": 1 })\`।
- **অ্যারে (Multikey)**: অ্যারে ডাটার ওপর ইনডেক্স তৈরি করলে মঙ্গোডিবি অটোমেটিক প্রতিটি উপাদানের জন্য আলাদা কী ইনডেক্স করে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার পোর্টাল অ্যাপে আপনি ইউজারদের শুধু তাদের ইউনিক ইউজারনেম দিয়ে সার্চ করেন। ইউজারনেম ফিল্ডের ওপর সিঙ্গেল ইনডেক্স তৈরি করলে ইউজারের ক্লিক করার সাথে সাথেই পেজ লোড হবে।

### উত্তম অনুশীলন
কুয়েরির শেষে \`.explain()\` যোগ করে নিশ্চিত হোন যে আপনার সিঙ্গেল ইনডেক্সটি কাজ করছে কিনা। কুয়েরি প্ল্যানে \`IXSCAN\` দেখালে বুঝবেন ইনডেক্স সফলভাবে কাজ করছে।

### সাধারণ ভুলসমূহ
ভিন্ন ভিন্ন ফিল্ডের জন্য আলাদা আলাদা সিঙ্গেল ইনডেক্স তৈরি করা (যেমন একটি \`age\` ফিল্ডে এবং আরেকটি \`status\` ফিল্ডে) যখন আপনার কুয়েরি দুটি ফিল্ড একসাথেই চেক করে। এই ক্ষেত্রে সিঙ্গেল ইনডেক্সের চেয়ে একটি **কম্পাউন্ড ইনডেক্স** ব্যবহার করা সেরা।

### Code Example
\`\`\`javascript
// ১. ইউজারনেম ফিল্ডে সিঙ্গেল-ফিল্ড ইনডেক্স তৈরি
db.users.createIndex({ username: 1 });

// ২. কুয়েরি যা এই ইনডেক্স ব্যবহার করবে
db.users.find({ username: "rohit_dev" });

// ৩. সর্ট কুয়েরি যা এই ইনডেক্স উল্টো দিকে রিড করে সর্ট করবে
db.users.find({}).sort({ username: -1 });
\`\`\``
  },
  {
    id: 'mongodb-19',
    title: 'What is MongoDB Compass and how does it assist developers in database administration?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['MongoDB Compass', 'GUI', 'Database Administration'],
    enAnswer: 'MongoDB Compass is the official Graphical User Interface (GUI) for MongoDB. It assists developers by allowing them to visually explore schemas, run queries, analyze query performance using explain plans, build aggregation pipelines, and manage database indexes.',
    bnAnswer: 'MongoDB Compass হলো মঙ্গোডিবির অফিসিয়াল গ্রাফিক্যাল ইউজার ইন্টারফেস (GUI)। এটি ডেভেলপারদের ভিজ্যুয়াল উপায়ে স্কিমা এনালাইসিস, কুয়েরি চালানো, এক্সপ্লেইন প্ল্যান দিয়ে কুয়েরি পারফরম্যান্স চেক, এগ্রিগেশন পাইপলাইন বিল্ড এবং ইনডেক্স ম্যানেজ করতে সাহায্য করে।',
    enExplanation: `### Explanation
While using the command line tool (\`mongosh\`) is great for automation, complex database administration is easier with a graphical tool.

**Key Features of MongoDB Compass:**
1. **Schema Visualization**: Scans collections and displays visual graphs of data types, range frequencies, and field distributions.
2. **Interactive Query Builder**: Allows you to filter and sort documents using a simple point-and-click UI form.
3. **Aggregation Pipeline Builder**: A step-by-step visual editor where you can build, preview, and debug aggregation stages sequentially.
4. **Index Management**: Displays active indexes, their sizes, usage frequencies, and allows index creation/deletion with a button click.
5. **Real-Time Performance Dashboard**: Shows server statistics (ops/second, memory usage, network traffic, slow operations).

### Real-World Example
If your Node.js application is hitting database performance bottlenecks, you can open MongoDB Compass, navigate to the Explain Plan tab, run the query, and instantly view visual flowcharts showing where the index scan failed and triggered a COLLSCAN.

### Best Practice
Use Compass's Schema tab to scan your collections during development. It helps locate data inconsistency bugs (e.g. finding that 2% of documents have the \`age\` field stored as a string instead of a number).

### Common Mistakes
Leaving MongoDB Compass connected to high-traffic production databases with active performance monitoring tabs open, which can consume query execution threads on the database cluster.

### Code Example
\`\`\`javascript
// Compass query filter field equivalent of JSON command:
// Filter: { status: "active", price: { $gte: 100 } }
// Project: { name: 1, price: 1, _id: 0 }
// Sort: { price: -1 }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টার্মিনাল বা কমান্ড লাইনে কাজ করা চমৎকার হলেও বড় ডেটাবেস ম্যানেজমেন্টে গ্রাফিক্যাল ইন্টারফেস বেশি সহায়ক।

**MongoDB Compass-এর মূল সুবিধাসমূহ:**
১. **ভিজ্যুয়াল স্কিমা এনালাইসিস**: কালেকশন স্ক্যান করে কোন ফিল্ডে কী ধরণের ডাটা আছে তার গ্রাফিক্যাল চার্ট দেখায়।
২. **কুয়েরি বিল্ডার**: ইউজার ফ্রেন্ডলি ফর্ম ব্যবহার করে সরাসরি ফিল্টার ও সর্ট করার কুয়েরি চালানো যায়।
৩. **এগ্রিগেশন পাইপলাইন বিল্ডার**: ধাপে ধাপে এগ্রিগেশন কোড লেখার সময় প্রতি ধাপের কিউ ও আউটপুটের লাইভ ডাটা প্রিভিউ দেখায়।
৪. **ইনডেক্স ম্যানেজমেন্ট**: একটি ক্লিকের মাধ্যমেই কোন কোন ইনডেক্স চালু আছে ও কত র‍্যাম মেমোরি খরচ করছে তা প্রদর্শন করে।
৫. **লাইভ ড্যাশবোর্ড**: সার্ভারে প্রতি সেকেন্ডে কত রিকোয়েস্ট আসছে ও মেমোরি ফ্রিকোয়েন্সি কত তা লাইভ দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ
কোডের কোনো কুয়েরির কারণে এপিআই স্লো হচ্ছে। আপনি মঙ্গোডিবি কম্পাস ওপেন করে Explain Plan ট্যাবে গিয়ে কুয়েরিটি পেস্ট করে রান করালেই দেখতে পাবেন কোন ইনডেক্সটি মিসিং হওয়ার কারণে সার্ভার ধীরগতির হচ্ছে।

### উত্তম অনুশীলন
ডেভেলপমেন্টের সময় কম্পাসের স্কিমা ট্যাব দিয়ে কালেকশনগুলো স্ক্যান করুন। এটি ডাটা টাইপের অসঙ্গতি (যেমন: ১০% ডকুমেন্টে ভুল ডাটা টাইপ সেভ হওয়া) খুব সহজে ডিটেক্ট করে দেয়।

### সাধারণ ভুলসমূহ
প্রোডাকশন ডাটাবেসে কম্পাস দিয়ে লাইভ রিয়েল-টাইম পারফরম্যান্স মনিটর ট্যাব চালু করে রাখা, যা ডাটাবেস সার্ভারের থ্রেড টিকিট দখল করে সার্ভার স্লো করে দিতে পারে।

### Code Example
\`\`\`javascript
// মঙ্গোডিবি কম্পাস ইন্টারফেসে কুয়েরি ফিল্টার লেখার নিয়ম:
// Filter বক্স: { status: "active", price: { $gte: 100 } }
// Project বক্স: { name: 1, price: 1, _id: 0 }
// Sort বক্স: { price: -1 }
\`\`\``
  },
  {
    id: 'mongodb-20',
    title: 'Explain the structure of a MongoDB Connection URI.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Connection URI', 'Configuration', 'Database Administration'],
    enAnswer: 'A MongoDB Connection URI follows the format: mongodb://[username:password@]host[:port]/[database][?options]. For cloud deployments (MongoDB Atlas), it uses the mongodb+srv:// protocol, which enables DNS seedlists to dynamically locate replica set members.',
    bnAnswer: 'মঙ্গোডিবি কানেকশন ইউআরআই (URI)-এর গঠন হলো: mongodb://[username:password@]host[:port]/[database][?options]। ক্লাউড ডেপ্লয়মেন্টের (যেমন Atlas) ক্ষেত্রে এটি mongodb+srv:// প্রোটোকল ব্যবহার করে যা ডাইনামিকালি রেপ্লিকা সেটের মেম্বারদের খুঁজে নেয়।',
    enExplanation: `### Explanation
The connection string tells your Node.js application driver how to establish a connection pool with MongoDB.

**URI Components:**
1. **Protocol**:
   - \`mongodb://\`: Standard protocol. Requires listing all hosts if connecting to a replica set.
   - \`mongodb+srv://\`: SRV protocol. Resolves hosts dynamically using DNS, allowing cluster configuration changes without editing application code.
2. **Credentials**: \`username:password\` for authentication.
3. **Hosts**: Domain or IP address of the database servers (port default is 27017).
4. **Database**: The target default database to connect to.
5. **Query Options**:
   - \`retryWrites=true\`: Automatically retries write operations on temporary network failures.
   - \`w=majority\`: Demands acknowledgment from the majority of replica set nodes.

### Real-World Example
Connecting a local Express server to MongoDB vs. connecting to MongoDB Atlas:
- Local: \`mongodb://localhost:27017/my_app\`
- Production Atlas: \`mongodb+srv://rohit:secure_pass@cluster0.abcde.mongodb.net/my_app?retryWrites=true&w=majority\`

### Best Practice
Never hardcode connection strings with passwords inside your source code files. Always store them as environment variables inside a secure \`.env\` file, and exclude the \`.env\` file from git repositories.

### Common Mistakes
Forgetting to URL-encode special characters (like \`@\`, \`/\`, \`:\`, \`+\`) inside the database password, causing connection errors due to URI parsing failures.

### Code Example
\`\`\`javascript
// Load environment variables
require('dotenv').config();
const mongoose = require('mongoose');

// Read database URI from process.env
const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri)
  .then(() => console.log('Successfully connected to MongoDB Cluster'))
  .catch(err => console.error('Connection failed:', err));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কানেকশন স্ট্রিং মূলত নোডজেএস ড্রাইভারকে ডাটাবেসের সাথে কানেকশন পুল তৈরি করার ঠিকানা প্রদান করে।

**ইউআরআই (URI)-এর অংশসমূহ:**
১. **প্রোটোকল**:
   - \`mongodb://\`: স্ট্যান্ডার্ড প্রোটোকল। এতে লোকাল হোস্ট বা আইপি দেওয়া থাকে।
   - \`mongodb+srv://\`: ডাইনামিক এসআরভি প্রোটোকল। এটি ডিএনএস সলভ করে ক্লাস্টারের হোস্ট এড্রেস স্বয়ংক্রিয়ভাবে ডিটেক্ট করে।
২. **ক্রেডেনশিয়াল**: ডাটাবেসের \`username:password\`।
৩. **হোস্ট**: ডাটাবেস সার্ভারের আইপি বা ডোমেন নেম (ডিফল্ট পোর্ট ২৭০১৭)।
৪. **ডাটাবেস**: কানেক্ট করতে চাওয়া টার্গেট ডাটাবেসের নাম।
৫. **কোয়েরি অপশন**:
   - \`retryWrites=true\`: নেটওয়ার্ক ড্রপ হলে কুয়েরি অটো রিট্রাই করবে।
   - \`w=majority\`: মেজরিটি নোডে ডাটা রাইট সাকসেস হলে রেসপন্স পাঠাবে।

### বাস্তব-ভিত্তিক উদাহরণ
লোকাল ডাটাবেস এবং ক্লাউড এটলাসের ইউআরআই-এর পার্থক্য:
- লোকাল: \`mongodb://localhost:27017/my_app\`
- প্রোডাকশন এটলাস: \`mongodb+srv://rohit:secure_pass@cluster0.abcde.mongodb.net/my_app?retryWrites=true&w=majority\`

### উত্তম অনুশীলন
কখনো কোড ফাইলের ভেতর কানেকশন ইউআরআই পাসওয়ার্ড সহ হার্ডকোড করে লিখবেন না। এটি সর্বদা \`.env\` ফাইলে রাখুন এবং গিটহাবে পুশ হওয়া থেকে বিরত রাখতে \`.gitignore\`-এ \`.env\` যুক্ত করে দিন।

### সাধারণ ভুলসমূহ
পাসওয়ার্ডে কোনো স্পেশাল ক্যারেক্টার (যেমন: \`@\`, \`/\`, \`+\`) থাকলে তা URL-encode না করে সরাসরি ইউআরআই-তে লিখে দেওয়া, যার ফলে কানেকশন স্ট্রিং পার্সিং এরর ঘটে।

### Code Example
\`\`\`javascript
// এনভায়রনমেন্ট ভ্যারিয়েবল লোড করা
require('dotenv').config();
const mongoose = require('mongoose');

// .env ফাইল থেকে রিড করা
const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri)
  .then(() => console.log('মঙ্গোডিবি ক্লাস্টারের সাথে সংযোগ সফল হয়েছে'))
  .catch(err => console.error('সংযোগ ব্যর্থ হয়েছে:', err));
\`\`\``
  },
  {
    id: 'mongodb-21',
    title: 'What is MongoDB Atlas, and how does it differ from a self-hosted MongoDB instance?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['MongoDB Atlas', 'Cloud Database', 'DevOps'],
    enAnswer: 'MongoDB Atlas is a fully managed cloud database-as-a-service (DBaaS) developed by MongoDB. Unlike self-hosted instances (which require manual configuration, scaling, backups, and OS maintenance), Atlas automates provisioning, replication, security updates, scaling, and backups in AWS, Azure, or GCP.',
    bnAnswer: 'MongoDB Atlas হলো মঙ্গোডিবির নিজস্ব ক্লাউড ডাটাবেস-অ্যাজ-আ-সার্ভিস (DBaaS)। লোকাল বা সেলফ-হোস্টেড মঙ্গোডিবির তুলনায় (যেখানে সব ম্যানুয়ালি ব্যাকআপ ও সিকিউর করতে হয়) এটলাস স্বয়ংক্রিয়ভাবে ক্লাউড সেটআপ, স্কেলিং, সিকিউরিটি প্যাচ ও ব্যাকআপ কন্ট্রোল করে।',
    enExplanation: `### Explanation
Choosing between MongoDB Atlas and self-hosting involves balancing control vs. operational overhead.

**Self-Hosted MongoDB:**
- Installed manually on VM instances (e.g. AWS EC2, digitalocean droplets).
- **Pros**: Complete control over configuration, no third-party subscription fees, data residency limits.
- **Cons**: High operations overhead (manual setups for security firewalls, replica configurations, zero-downtime upgrades, monitoring alerts).

**MongoDB Atlas (Managed Service):**
- **Pros**:
  - **Zero Administration**: Deploy a multi-node replica set with a button click.
  - **Auto-Scaling**: Dynamically adjusts storage and CPU capacity based on traffic.
  - **Advanced Security**: Integrated VPC peering, IP whitelisting, encryption-by-default, and network isolation.
  - **Backups**: Point-in-time recovery and automated daily backup routines.
- **Cons**: Can become expensive as traffic and storage requirements grow.

### Real-World Example
For a fast-growing startup with a small engineering team, using MongoDB Atlas allows developers to focus 100% on writing application code instead of hiring dedicated database administrators (DBAs) to maintain server updates and data recovery setups.

### Best Practice
Use MongoDB Atlas free tier (M0) for local prototyping and sandbox environments. When moving to production, switch to shared (M10+) or dedicated clusters to ensure high availability and proper SLA performance.

### Common Mistakes
Failing to whitelist application IP addresses in the Atlas network access configuration, resulting in connection timeout errors when Node.js attempts to connect.

### Code Example
\`\`\`javascript
// Connection configuration settings are configured in Atlas dashboard:
// 1. Go to Network Access -> Add IP Address -> Whitelist client/server IP (e.g. 0.0.0.0/0 for testing)
// 2. Go to Database Access -> Create Database User with ReadWrite permissions
// 3. Retrieve connection string and configure dotenv
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি এটলাস এবং সেলফ-হোস্ট করার মধ্যে নির্বাচন মূলত কন্ট্রোল বনাম মেস-কন্ট্রোলের ওপর নির্ভর করে।

**সেলফ-হোস্টেড মঙ্গোডিবি (Self-Hosted):**
- ভিএম বা ডকার কন্টেইনারে ম্যানুয়ালি ইনস্টল করে চালাতে হয়।
- **সুবিধা**: কনফিগারেশনের ওপর সম্পূর্ণ নিয়ন্ত্রণ থাকে, থার্ড-পার্টি সাবস্ক্রিপশন ফি থাকে না।
- **অসুবিধা**: অপারেটিং সিস্টেম আপডেট, সিকিউরিটি ফায়ারওয়াল, ডাটা রিকভারি ও স্কেলিং সব ম্যানুয়ালি এডমিনকে করতে হয়।

**MongoDB Atlas (Managed Service):**
- **সুবিধা**:
  - **জিরো এডমিনিস্ট্রেশন**: কোনো ঝামেলা ছাড়াই একটি ক্লিকের মাধ্যমে ক্লাউডে ৩-নোড রেপ্লিকা সেট তৈরি করা যায়।
  - **অটো স্কেলিং**: ট্রাফিকের চাপ অনুযায়ী অটোমেটিক সিপিইউ ও র‍্যাম স্কেল করে।
  - **উন্নত নিরাপত্তা**: আইপি হোয়াইটলিস্টিং ও ডেটা এনক্রিপশন ডিফল্টভাবে সক্রিয় থাকে।
  - **ব্যাকআপ**: শিডিউল অনুযায়ী অটো ব্যাকআপ এবং ডাটা রিস্টোর করার সুবিধা।
- **অসুবিধা**: ডাটা সাইজ ও ট্রাফিকের ওপর ভিত্তি করে এর কস্ট সেলফ-হোস্টের চেয়ে বেশি হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ছোট স্টার্টআপে ডেডিকেটেড ডাটাবেস এডমিনিস্ট্রেটর (DBA) নিয়োগ করার বাজেট নেই। সেখানে মঙ্গোডিবি এটলাস ব্যবহার করলে ডেভেলপাররা কোনো ডাটাবেস রক্ষণাবেক্ষণের চিন্তা ছাড়াই প্রজেক্ট ডেভেলপ করতে পারবেন।

### উত্তম অনুশীলন
প্রোটোটাইপ বা শেখার জন্য এটলাসের ফ্রি টিয়ার (M0) ক্লাস্টার ব্যবহার করুন। প্রোডাকশনে যাওয়ার আগে ডেডিকেটেড ক্লাস্টারে (M10 বা তার ওপরে) শিফট করুন ব্যাকআপ ও সিকিউরড কানেকশনের জন্য।

### সাধারণ ভুলসমূহ
এটলাস নেটওয়ার্ক কনফিগারেশনে এপিআই সার্ভারের আইপি হোয়াইটলিস্ট করতে ভুলে যাওয়া, যার ফলে নোডজেএস থেকে ডাটাবেস কানেক্ট করতে গেলে কানেকশন টাইমআউট এরর আসে।

### Code Example
\`\`\`javascript
// মঙ্গোডিবি এটলাসের ড্যাশবোর্ড সেটিংসের ধাপসমূহ:
// ১. Network Access ট্যাবে যান -> Add IP Address ক্লিক করুন -> সার্ভারের আইপি হোয়াইটলিস্ট করুন
// ২. Database Access ট্যাবে যান -> ডাটাবেস ইউজার তৈরি করে রিড-রাইট পারমিশন দিন
// ৩. Connection String কপি করে .env ফাইলে পেস্ট করুন
\`\`\``
  },
  {
    id: 'mongodb-22',
    title: 'How do you query documents using the $regex operator in MongoDB?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Regex'],
    enAnswer: 'The $regex operator allows you to perform pattern matching on string fields using regular expressions. It is configured as: { field: { $regex: /pattern/, $options: "i" } }, where options like "i" enable case-insensitive searches.',
    bnAnswer: '$regex অপারেটর রেগুলার এক্সপ্রেশন ব্যবহার করে স্ট্রিং ফিল্ডে প্যাটার্ন ম্যাচিং করতে সাহায্য করে। এর কনফিগারেশন: { field: { $regex: /pattern/, $options: "i" } }, যেখানে "i" অপশন কেস-ইনসেনসিটিভ সার্চ চালু করে।',
    enExplanation: `### Explanation
The \`$regex\` operator is useful for implementing simple text search features in databases:

- **Syntax Options**:
  - Using JS regex literals: \`{ name: /rohit/i }\` (MongoDB implicitly uses \`$regex\`).
  - Using explicit operator: \`{ name: { $regex: "rohit", $options: "i" } }\`.
- **Options Flag**:
  - \`i\`: Case-insensitivity (matches uppercase and lowercase).
  - \`m\`: Multiline match.
  - \`x\`: Ignore whitespace characters in pattern.

### Real-World Example
In a user search directory, when a user types "roh" in the search box, you query the database to find all users whose name contains the search term case-insensitively:
\`\`\`javascript
db.users.find({ username: { $regex: "roh", $options: "i" } })
// Matches "Rohit", "rohit_dev", "pro_rohan"
\`\`\`

### Best Practice
Avoid starting regular expressions with wildcards (e.g. \`{ name: /.*rohit/ }\`). If a regex starts with a wildcard, MongoDB cannot use indexes efficiently and must perform a full index/collection scan. If searching for exact prefix matches, use \`^\` (e.g. \`{ name: /^rohit/ }\`), which can utilize indexes.

### Common Mistakes
Using regex queries on massive collections without full-text indexes. Standard index performance drops significantly when performing substring matches (contains queries), slowing down the database.

### Code Example
\`\`\`javascript
// 1. Find products where name starts with "smart" (Prefix match - index friendly)
const prefixMatches = db.products.find({
  name: { $regex: "^smart", $options: "i" }
});

// 2. Find emails ending with ".edu"
const eduEmails = db.users.find({
  email: { $regex: "\\\\.edu$", $options: "i" }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`$regex\` অপারেটর ডাটাবেসে সাধারণ টেক্সট সার্চ বা ক্যারেক্টার প্যাটার্ন ম্যাচিং করার জন্য ব্যবহৃত হয়:

- **লেখার ধরণ**:
  - জাভাস্ক্রিপ্ট রেগুলার এক্সপ্রেশন লিটারেল: \`{ name: /rohit/i }\`।
  - এক্সপ্লিসিট অপারেটর: \`{ name: { $regex: "rohit", $options: "i" } }\`।
- **অপশনস ফ্ল্যাগ**:
  - \`i\`: কেস-ইনসেনসিটিভ (ছোট বা বড় হাতের অক্ষর পার্থক্য করবে না)।
  - \`m\`: মাল্টিলাইন ম্যাচিং।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ডিরেক্টরি সার্চে কেউ ইনপুট বক্সে "roh" লিখলে নামের ভেতর যেখানেই এই ক্যারেক্টারগুলো আছে তা কেস-ইনসেনসিটিভ উপায়ে খুঁজে বের করতে কুয়েরি:
\`\`\`javascript
db.users.find({ username: { $regex: "roh", $options: "i" } })
// এটি "Rohit", "rohit_dev", "pro_rohan" সবার সাথে ম্যাচ করবে
\`\`\`

### উত্তম অনুশীলন
রেগুলার এক্সপ্রেশন ওয়াইল্ডকার্ড দিয়ে শুরু করবেন না (যেমন: \`{ name: /.*rohit/ }\`)। শুরুতে ওয়াইল্ডকার্ড থাকলে মঙ্গোডিবি ইনডেক্স ব্যবহার করতে পারে না। নামের শুরুর সাথে মিলাতে চাইলে \`^\` (যেমন: \`{ name: /^rohit/ }\`) ব্যবহার করুন, এটি ইনডেক্স ফ্রেন্ডলি।

### সাধারণ ভুলসমূহ
বিশাল বড় কালেকশনে সাবস্ট্রিং টেক্সট সার্চের জন্য সাধারণ ইনডেক্স রেজেক্স কুয়েরি করা। এ ক্ষেত্রে ডাটাবেস স্লো হয়ে যায়; বড় প্রজেক্টে এ জন্য ফুল-টেক্সট ইনডেক্স বা এটলাস সার্চ ব্যবহার করুন।

### Code Example
\`\`\`javascript
// ১. যেসব প্রোডাক্টের নাম "smart" দিয়ে শুরু হয় (ইনডেক্স ব্যবহারযোগ্য)
const prefixMatches = db.products.find({
  name: { $regex: "^smart", $options: "i" }
});

// ২. যেসব ইমেইল ".edu" দিয়ে শেষ হয় তা ফিল্টার করা
const eduEmails = db.users.find({
  email: { $regex: "\\\\.edu$", $options: "i" }
});
\`\`\``
  },
  {
    id: 'mongodb-23',
    title: 'What is an Upsert operation in MongoDB updates, and when should you use it?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Update', 'Upsert'],
    enAnswer: 'An upsert is an option in update queries (upsert: true). If a document matches the query filter, MongoDB updates it. If no document matches, MongoDB creates and inserts a new document combining the query filter and update fields.',
    bnAnswer: 'আপসার্ট (Upsert) হলো আপডেট কুয়েরির একটি বিশেষ অপশন (upsert: true)। যদি ফিল্টারের সাথে কোনো ডকুমেন্ট মেলে, মঙ্গোডিবি তা আপডেট করে। আর যদি কোনো ডকুমেন্ট না মেলে, তবে ফিল্টার ও আপডেটের তথ্য মিলিয়ে নতুন একটি ডকুমেন্ট তৈরি করে।',
    enExplanation: `### Explanation
The term **"Upsert"** is a portmanteau of "Update" and "Insert".

**How it works (when \`{ upsert: true }\` is passed):**
1. MongoDB runs the query filter search.
2. **Match found**: Standard update executes.
3. **No match found**:
   - A new document is generated.
   - The fields from the query filter are added to the document.
   - The fields specified in the update operators (like \`$set\`, \`$setOnInsert\`) are applied to the new document.
   - The document is inserted into the collection, receiving a unique \`_id\`.

### Real-World Example
In a website traffic tracking system, you log user page visits. If the tracking document for "2026-06-19" already exists for the user, you increment the page views count (\`$inc\`). If it does not exist, upsert creates the day's document and sets the initial count to 1:
\`\`\`javascript
db.page_views.updateOne(
  { userId: 123, date: "2026-06-19" },
  { $inc: { views: 1 } },
  { upsert: true }
);
\`\`\`

### Best Practice
Use the \`$setOnInsert\` operator in combination with upsert. It allows you to define fields that should *only* be set during document creation (like \`createdAt\`) but ignored during subsequent updates.

### Common Mistakes
Forgetting that upsert is disabled by default. If you run a standard \`updateOne\` query looking for an ID that doesn't exist, it will complete successfully but modify 0 documents, without inserting anything.

### Code Example
\`\`\`javascript
db.users.updateOne(
  { email: "rohit@example.com" },
  {
    $set: { lastLogin: new Date() },
    $setOnInsert: { 
      createdAt: new Date(),
      role: "user" 
    } // Set only when document is created for the first time
  },
  { upsert: true } // Enable upsert
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
"Upsert" শব্দটি তৈরি হয়েছে "Update" এবং "Insert"-এর সমন্বয়ে।

**\`{ upsert: true }\` যেভাবে কাজ করে:**
১. মঙ্গোডিবি প্রথমে কুয়েরি ফিল্টার দিয়ে ডকুমেন্ট খোঁজে।
২. **ডকুমেন্ট পাওয়া গেলে**: সাধারণ আপডেট সম্পন্ন করে।
৩. **ডকুমেন্ট না পাওয়া গেলে**:
   - একটি নতুন ডকুমেন্ট তৈরি করে।
   - কুয়েরি ফিল্টারের ফিল্ডগুলো ডকুমেন্টে যুক্ত করে।
   - আপডেট অপারেটরে (\`$set\`, \`$setOnInsert\`) থাকা ডেটা ডকুমেন্টে যুক্ত করে ইনসার্ট করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইট ভিজিটর ট্র্যাকিং সিস্টেমে ইউজারের ডেইলি ভিজিট পেজ কাউন্ট করছেন। আজকের তারিখের ডকুমেন্ট অলরেডি থাকলে ভিউ কাউন্ট ১ বাড়িয়ে দেবেন (\`$inc\`)। আর যদি প্রথম ভিজিট হয়, তবে আপসার্ট নতুন ডকুমেন্ট ক্রিয়েট করে কাউন্ট ১ করে দেবে:
\`\`\`javascript
db.page_views.updateOne(
  { userId: 123, date: "2026-06-19" },
  { $inc: { views: 1 } },
  { upsert: true }
);
\`\`\`

### উত্তম অনুশীলন
আপসার্টের সাথে \`$setOnInsert\` অপারেটর ব্যবহার করুন। এর ফলে নির্দিষ্ট কিছু ডাটা (যেমন: \`createdAt\`) শুধুমাত্র ডকুমেন্ট প্রথমবার সৃষ্টির সময় সেভ হবে কিন্তু পরের বার আপডেটের সময় অপরিবর্তিত থাকবে।

### সাধারণ ভুলসমূহ
আপসার্ট ডিফল্টভাবে নিষ্ক্রিয় থাকে। আপনি যদি সাধারণ \`updateOne\` কুয়েরি চালান যা ডাটা খুঁজে পাবে না, তবে তা সফলভাবে রান হবে কিন্তু কোনো ডাটা মডিফাই বা ইনসার্ট হবে না।

### Code Example
\`\`\`javascript
db.users.updateOne(
  { email: "rohit@example.com" },
  {
    $set: { lastLogin: new Date() }, // প্রতি লগে আপডেট হবে
    $setOnInsert: { 
      createdAt: new Date(),
      role: "user" 
    } // শুধুমাত্র প্রথমবার ইনসার্টের সময় সেট হবে
  },
  { upsert: true } // আপসার্ট অন করা
);
\`\`\``
  },
  {
    id: 'mongodb-24',
    title: 'How do you query and match elements inside arrays in MongoDB?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Arrays'],
    enAnswer: 'To query arrays, check for simple matches directly using { tags: "wireless" } (matches if the value is in the array). For range or multiple matching conditions on array elements, use the $elemMatch operator.',
    bnAnswer: 'অ্যারে কুয়েরি করতে সরাসরি { tags: "wireless" } চেক করা যায় (অ্যারের ভেতর ভ্যালুটি থাকলে মিলবে)। আর অ্যারের উপাদানগুলোর ওপর রেঞ্জ বা জটিল একাধিক শর্ত প্রয়োগ করতে $elemMatch অপারেটর ব্যবহার করতে হয়।',
    enExplanation: `### Explanation
MongoDB natively understands arrays and matches values inside them seamlessly.

**1. Implicit Array Matching:**
If a document has \`tags: ["wireless", "accessory"]\`:
- The query \`{ tags: "wireless" }\` matches the document. MongoDB automatically unpacks the array to check elements.

**2. Exact Array Matching:**
- The query \`{ tags: ["wireless", "accessory"] }\` matches only if the array contains exactly those elements in that precise order.

**3. \`$elemMatch\` Operator:**
- Required when querying arrays of nested objects. It ensures that at least one single object in the array satisfies *all* specified query criteria, rather than different objects satisfying different conditions.

### Real-World Example
In a school database where students contain an array of course objects:
- Find students who have scored $>80$ in Mathematics *in the same course object*:
\`\`\`javascript
db.students.find({
  courses: { $elemMatch: { name: "Mathematics", score: { $gt: 80 } } }
})
\`\`\`

### Best Practice
Use \`$elemMatch\` when filtering arrays of objects. Without it, standard dot notation filters (e.g. \`{ "courses.name": "Mathematics", "courses.score": { $gt: 80 } }\`) can match a student who has "Mathematics" in one course, and a score $>80$ in History.

### Common Mistakes
Assuming standard dot notation on arrays behaves like \`$elemMatch\`, which leads to false-positive matches when filtering array elements on multiple criteria.

### Code Example
\`\`\`javascript
// 1. Simple array query (matches if "wireless" is in the tags array)
const wirelessItems = db.products.find({ tags: "wireless" });

// 2. Querying array of objects using $elemMatch
const highlyRatedItems = db.products.find({
  reviews: {
    $elemMatch: {
      rating: { $gte: 5 },
      verified: true
    } // Matches only if a single review satisfies both conditions
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি অ্যারে ডেটা চমৎকারভাবে রিড ও সার্চ করতে পারে।

**১. সাধারণ অ্যারে ম্যাচিং:**
কোনো ডকুমেন্টে যদি \`tags: ["wireless", "accessory"]\` থাকে:
- \`{ tags: "wireless" }\` কুয়েরি করলেই মঙ্গোডিবি তা ম্যাচ করবে। সে নিজে থেকেই অ্যারে ঘেঁটে উপাদানটি বের করে।

**২. নিখুঁত অ্যারে ম্যাচিং:**
- \`{ tags: ["wireless", "accessory"] }\` দিলে শুধুমাত্র এই সিরিয়ালে দুটি উপাদান থাকলেই কেবল ম্যাচ করবে।

**৩. \`$elemMatch\` অপারেটর:**
- এটি অবজেক্টের অ্যারে কুয়েরি করার সময় ব্যবহৃত হয়। এটি নিশ্চিত করে যে অ্যারের ভেতরের অন্তত ১টি নির্দিষ্ট অবজেক্টের মধ্যে সব শর্ত পূরণ হতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
স্কুল ডাটাবেসে ছাত্রদের কোর্সের স্কোর অ্যারে আছে:
- এমন ছাত্র খোঁজা যে ম্যাথ কোর্সে ৮০-র বেশি পেয়েছে (একই অবজেক্টে নাম ম্যাথ এবং স্কোর ৮০+ হতে হবে):
\`\`\`javascript
db.students.find({
  courses: { $elemMatch: { name: "Mathematics", score: { $gt: 80 } } }
})
\`\`\`

### উত্তম অনুশীলন
অবজেক্টের অ্যারে ফিল্টার করতে সর্বদা \`$elemMatch\` ব্যবহার করুন। সাধারণ ডট নোটেশন (\`{ "courses.name": "Math", "courses.score": { $gt: 80 } }\`) দিলে ছাত্রটি বাংলায় ৮০ আর ম্যাথে ৫০ পেলেও ট্রু ম্যাচ রিটার্ন করবে, কারণ দুটি আলাদা অবজেক্টে কন্ডিশনগুলো স্যাটিসফাই হয়েছে।

### সাধারণ ভুলসমূহ
মনে করা যে সাধারণ ডট ফিল্টার আর \`$elemMatch\` একই কাজ করে। এর ফলে রিপোর্টিং ফিল্টারে ভুল ডেটা চলে আসে।

### Code Example
\`\`\`javascript
// ১. সাধারণ অ্যারে কুয়েরি (ট্যাগ্স অ্যারেতে "wireless" থাকলেই ম্যাচ করবে)
const wirelessItems = db.products.find({ tags: "wireless" });

// ২. $elemMatch দিয়ে অবজেক্টের অ্যারে ফিল্টার করা
const highlyRatedItems = db.products.find({
  reviews: {
    $elemMatch: {
      rating: { $gte: 5 },
      verified: true
    } // শুধুমাত্র একটি রিভিউতেই ৫ রেটিং ও ভেরিফাইড সত্য হতে হবে
  }
});
\`\`\``
  },
  {
    id: 'mongodb-25',
    title: 'How do you delete single and multiple documents in MongoDB?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Delete', 'mongosh'],
    enAnswer: 'To delete a single document, use db.collection.deleteOne(filter) (deletes the first match). To delete multiple documents, use db.collection.deleteMany(filter) (deletes all matches). Passing an empty object {} to deleteMany() deletes all documents in the collection.',
    bnAnswer: 'একটি ডকুমেন্ট ডিলিট করতে db.collection.deleteOne(filter) এবং একাধিক ডকুমেন্ট ডিলিট করতে db.collection.deleteMany(filter) ব্যবহার করা হয়। deleteMany({ }) দিলে কালেকশনের সব ডকুমেন্ট ডিলিট হয়ে যায়।',
    enExplanation: `### Explanation
Deleting data in MongoDB requires using explicit filtering parameters:

- **\`deleteOne(filter)\`**: Removes the first document that matches the query filter. It is recommended to use unique values like \`_id\` to ensure you delete the target document.
- **\`deleteMany(filter)\`**: Removes all documents that match the filter criteria.
- **Dropping Collections**: If you want to delete all records inside a collection, using \`db.collection.drop()\` is much faster than \`deleteMany({})\` because \`drop()\` deletes the collection and index structures directly from disk instead of scanning documents one-by-one.

### Real-World Example
- **deleteOne**: A user deletes a single post from their dashboard: \`db.posts.deleteOne({ _id: ObjectId("post_id") })\`.
- **deleteMany**: An admin deletes all spam reviews marked as pending: \`db.reviews.deleteMany({ status: "spam", approved: false })\`.

### Best Practice
Always test your delete query filter first by running a \`find()\` query with the exact same filter. This allows you to verify what documents will be deleted before executing destructive delete commands.

### Common Mistakes
Running \`db.collection.deleteMany()\` without passing a filter parameter (or passing \`{}\`), which deletes all data in the collection instantly.

### Code Example
\`\`\`javascript
// 1. deleteOne: Delete a single user by ID
const deleteResult1 = db.users.deleteOne({ 
  _id: ObjectId("60c72b2f9b1d8b2bad000001") 
});
console.log("Deleted count:", deleteResult1.deletedCount); // 1

// 2. deleteMany: Delete all temporary guest accounts older than 30 days
const cutoffDate = new Date();
cutoffDate.setDate(cutoffDate.getDate() - 30);

db.users.deleteMany({
  role: "guest",
  createdAt: { $lt: cutoffDate }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি থেকে ডাটা রিমুভ বা ডিলিট করার দুটি প্রধান মেথড রয়েছে:

- **\`deleteOne(filter)\`**: ফিল্টারের সাথে মেলা প্রথম ডকুমেন্টটি ডিলিট করে। ভুল এড়াতে ইউনিক \`_id\` দিয়ে ডিলিট করা সবচেয়ে নিরাপদ।
- **\`deleteMany(filter)\`**: ফিল্টারের শর্ত পূরণ করা সমস্ত ডকুমেন্ট কালেকশন থেকে মুছে ফেলে।
- **কালেকশন ড্রপ**: পুরো কালেকশনের সব ডাটা একবারে ডিলিট করার জন্য \`deleteMany({})\` চালানোর চেয়ে \`db.collection.drop()\` কল করা দ্রুততর, কারণ এটি মেমোরি ও ইনডেক্স ডিরেক্ট ডিস্ক থেকে মুছে ফেলে।

### বাস্তব-ভিত্তিক উদাহরণ
- **deleteOne**: ইউজার তার ড্যাশবোর্ড থেকে ১টি পোস্ট ডিলিট বাটনে চাপ দিলে: \`db.posts.deleteOne({ _id: ObjectId("post_id") })\`।
- **deleteMany**: অ্যাডমিন তার স্প্যাম প্যানেল থেকে সব স্প্যাম রিভিউ একবারে ডিলিট করলে: \`db.reviews.deleteMany({ status: "spam", approved: false })\`।

### উত্তম অনুশীলন
যেকোনো ডিলিট অপারেশন চালানোর আগে একই ফিল্টার দিয়ে একটি \`find()\` কুয়েরি চালিয়ে ডেটা চেক করে নিন। এতে আপনি নিশ্চিত হতে পারবেন যে আপনি সঠিক ডকুমেন্টগুলোই ডিলিট করতে যাচ্ছেন।

### সাধারণ ভুলসমূহ
ভুলবশত ফিল্টার আর্গুমেন্ট না দিয়ে বা খালি অবজেক্ট দিয়ে \`deleteMany()\` রান করা। এর ফলে কালেকশনের সমস্ত ডাটা সেকেন্ডের মধ্যে হাওয়া হয়ে যাবে।

### Code Example
\`\`\`javascript
// ১. deleteOne: আইডি দিয়ে নির্দিষ্ট ১টি অ্যাকাউন্ট ডিলিট
const deleteResult1 = db.users.deleteOne({ 
  _id: ObjectId("60c72b2f9b1d8b2bad000001") 
});
console.log("ডিলিট হওয়া ফাইলের সংখ্যা:", deleteResult1.deletedCount);

// ২. deleteMany: ৩০ দিনের পুরনো সব গেস্ট অ্যাকাউন্ট মুছে ফেলা
const cutoffDate = new Date();
cutoffDate.setDate(cutoffDate.getDate() - 30);

db.users.deleteMany({
  role: "guest",
  createdAt: { $lt: cutoffDate }
});
\`\`\``
  },
  {
    id: 'mongodb-26',
    title: 'Explain what Mongoose Query Helpers are and how to create them.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Query Helpers', 'Database Design'],
    enAnswer: 'Mongoose Query Helpers are chainable custom helper functions that you attach to Mongoose queries. They allow you to extend Mongoose\'s chainable query builder API (e.g. User.find().byName("rohit")) to write reusable filter chains.',
    bnAnswer: 'Mongoose কোয়েরি হেল্পার হলো চেইনেবল (Chainable) কাস্টম ফাংশন যা মঙ্গুস কুয়েরি বিল্ডার এপিআই-এর সাথে যুক্ত করা যায়। এর সাহায্যে ফিল্টারিং করার রিইউজেবল কোড চেইন তৈরি করা যায় (যেমন: User.find().byName("rohit"))।',
    enExplanation: `### Explanation
Query helpers extend Mongoose's chainable query API. Unlike static methods (which are called directly on models), query helpers are chained to existing query instances.

**Steps to Create a Query Helper:**
1. Declare the helper on the schema's \`query\` object:
\`\`\`javascript
schema.query.helperName = function(arg) {
  return this.find({ field: arg }); // 'this' refers to the query object
};
\`\`\`
2. Chain the helper to standard Mongoose queries: \`Model.find().helperName(value)\`.

### Real-World Example
In an online newspaper, articles are filtered by language and active publication state. Creating a query helper allows developer teams to write \`Article.find().byLanguage("bn")\` seamlessly.

### Best Practice
Use query helpers to encapsulate common domain-specific filters (e.g. \`isActive()\`, \`byTenant(id)\`, \`isPremium()\`). This reduces code duplication and keeps your controller layers highly readable.

### Common Mistakes
Using arrow functions when defining query helpers. Arrow functions bind \`this\` lexically, which prevents Mongoose from injecting the active query builder context into the helper function.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  inStock: Boolean
});

// Define custom Query Helper
bookSchema.query.inGenre = function(genreName) {
  // 'this' is the query builder instance
  return this.find({ genre: genreName });
};

bookSchema.query.available = function() {
  return this.find({ inStock: true });
};

const Book = mongoose.model('Book', bookSchema);

// Usage: Chaining multiple custom helpers together
async function getFictionInStock() {
  const books = await Book.find()
    .inGenre('Fiction')
    .available(); // Chain query helpers together
  console.log(books);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোয়েরি হেল্পার হলো মঙ্গুসের কোয়েরি এপিআই এক্সটেন্ড করার চমৎকার মাধ্যম। এটি স্ট্যাটিক মেথডের মতো ডিরেক্ট মডেলে কল না হয়ে ফিল্টারের ওপর অতিরিক্ত কাস্টম লুপ চেইন করতে দেয়।

**তৈরির নিয়ম:**
১. স্কিমার \`query\` অবজেক্টে হেল্পার ফাংশন যুক্ত করুন:
\`\`\`javascript
schema.query.helperName = function(arg) {
  return this.find({ field: arg }); // এখানে 'this' হলো কুয়েরি অবজেক্ট
};
\`\`\`
২. কোডে ব্যবহার করার নিয়ম: \`Model.find().helperName(value)\`।

### বাস্তব-ভিত্তিক উদাহরণ
নিউজ পোর্টাল প্রজেক্টে প্রতিনিয়ত পাবলিশড নিউজ ও ল্যাঙ্গুয়েজ অনুযায়ী ফিল্টার করতে হয়। হেল্পার থাকলে খুব সহজে \`Article.find().byLanguage("bn")\` চেইন কোড লিখে কাজ শেষ করা যায়।

### উত্তম অনুশীলন
অ্যাপ্লিকেশনের কমন ডোমেন ফিল্টারগুলো (যেমন: \`isActive()\`, \`byTenant(id)\`) কোয়েরি হেল্পারে রূপান্তর করুন। এতে আপনার এপিআই কন্ট্রোলারের কোড অনেক সংক্ষেপিত ও রিডেবল থাকবে।

### সাধারণ ভুলসমূহ
কোয়েরি হেল্পার লেখার সময় অ্যারো ফাংশন ব্যবহার করা। অ্যারো ফাংশনে \`this\` গ্লোবাল স্কোপ ধারণ করায় মঙ্গুস কোয়েরি রানারকে অ্যাক্সেস করতে পারে না।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  inStock: Boolean
});

// কাস্টম কোয়েরি হেল্পার যুক্ত করা
bookSchema.query.inGenre = function(genreName) {
  return this.find({ genre: genreName }); // 'this' হলো কুয়েরি ইন্সট্যান্স
};

bookSchema.query.available = function() {
  return this.find({ inStock: true });
};

const Book = mongoose.model('Book', bookSchema);

// ব্যবহারপ্রণালী: একাধিক হেল্পার চেইন করা
async function getFictionInStock() {
  const books = await Book.find()
    .inGenre('Fiction')
    .available(); // দুটি কাস্টম হেল্পার একসাথে চেইন করা হয়েছে
  console.log(books);
}
\`\`\``
  },
  {
    id: 'mongodb-27',
    title: 'Explain what Mongoose virtuals are, and how they differ from database fields.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Virtuals', 'Database Design'],
    enAnswer: 'Mongoose virtuals are document properties that you can get and set but do not persist/save to the MongoDB database. They are computed dynamically at runtime (e.g. combining firstName and lastName into a fullName property).',
    bnAnswer: 'Mongoose ভার্চুয়াল হলো এমন ডকুমেন্ট প্রপার্টি যা গেট (get) ও সেট (set) করা যায় কিন্তু মঙ্গোডিবি ডাটাবেসে সেভ বা পার্সিস্ট করা হয় না। এগুলো রানটাইমে ডাইনামিকালি ক্যালকুলেট করা হয় (যেমন: firstName ও lastName মিলিয়ে fullName প্রপার্টি তৈরি)।',
    enExplanation: `### Explanation
Virtuals allow you to create logical computed properties on your models without inflating your database storage size.

- **No Persistence**: Virtual properties do not exist inside your BSON documents in MongoDB.
- **Getters**: A function that runs when you read the virtual property.
- **Setters**: A function that runs when you assign a value to the virtual property, allowing you to split and assign values to real fields.
- **JSON Serialization**: By default, virtuals are not included when you convert documents to JSON (\`toObject()\` or \`toJSON()\`). You must explicitly enable them:
\`\`\`javascript
schema.set('toJSON', { virtuals: true });
\`\`\`

### Real-World Example
In a user database, you save \`firstName: "Rohit"\` and \`lastName: "Kumar"\`. Instead of wasting database bytes saving \`fullName: "Rohit Kumar"\`, you declare a virtual getter for \`fullName\` that concatenates them instantly on request.

### Best Practice
Only use virtuals for display formatting or combining fields. Since virtuals are not saved in the database, they **cannot** be used inside MongoDB database queries (e.g. you cannot run \`User.find({ fullName: "Rohit Kumar" })\`).

### Common Mistakes
Attempting to run search filters or write indexes on Mongoose virtual fields. Since MongoDB has no knowledge of virtuals, search filters on virtual keys will always return no results.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// Define virtual getter for 'fullName'
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

// Configure Schema to include virtuals in JSON conversions
userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

// Usage:
const u = new User({ firstName: "Rohit", lastName: "Kumar" });
console.log(u.fullName); // Prints: "Rohit Kumar" (dynamic getter)
console.log(JSON.stringify(u)); // Includes "fullName" property
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ভার্চুয়াল হলো ডাটাবেস স্টোরেজ নষ্ট না করে ডকুমেন্টের ওপর লজিক্যাল ক্যালকুলেটেড প্রপার্টি তৈরি করার উপায়।

- **ডাটাবেসে সেভ হয় না**: ভার্চুয়াল প্রপার্টি মঙ্গোডিবির ডকুমেন্টে বা ডিস্কে সেভ থাকে না।
- **Getters**: ভার্চুয়াল প্রপার্টি রিড বা কল করার সময় এই মেথডটি রান করে রিটার্ন দেয়।
- **Setters**: ভার্চুয়াল প্রপার্টিতে কোনো ভ্যালু এসাইন করার সময় এই মেথডটি ব্যাকগ্রাউন্ডে অন্যান্য রিয়েল প্রপার্টিতে ডাটা রাইট করে দেয়।
- **JSON কনভার্সন**: ডিফল্টভাবে ডকুমেট JSON-এ রুপান্তর করার সময় ভার্চুয়াল ফিল্ডগুলো আসে না। পেতে হলে স্কিমা সেটিংসে অপশনটি অন করতে হয়:
\`\`\`javascript
schema.set('toJSON', { virtuals: true });
\`\`\`

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার কালেকশনে \`firstName: "Rohit"\` এবং \`lastName: "Kumar"\` সেভ করা আছে। বাড়তি সাইজ খরচ করে ডাটাবেসে \`fullName\` সেভ না করে মঙ্গুসের একটি ভার্চুয়াল গেটার দিয়ে ডাইনামিকালি "Rohit Kumar" বানিয়ে শো করা যায়।

### উত্তম অনুশীলন
শুধু ডিসপ্লে ফরম্যাটিং বা কাস্টম ক্যালকুলেশনের জন্য ভার্চুয়াল ব্যবহার করুন। ভার্চুয়াল যেহেতু ডাটাবেসে থাকে না, তাই মঙ্গোডিবির কোনো কুয়েরি ফিল্টারে এটি সার্চ করা যায় না (যেমন: \`User.find({ fullName: "Rohit Kumar" })\` রান করা সম্ভব নয়)।

### সাধারণ ভুলসমূহ
ভার্চুয়াল ফিল্ডের ওপর ইনডেক্স তৈরি করা বা সার্চ কোয়েরি চালানো। ডাটাবেস এই ফিল্ডের কোনো অস্তিত্ব না পাওয়ায় কুয়েরি রান করলে সর্বদা খালি রেজাল্ট আসবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// 'fullName' এর জন্য ভার্চুয়াল গেটার ডিফাইন করা
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

// অবজেক্ট বা জেএসন রূপান্তরের সময় ভার্চুয়াল ফিল্ড যুক্ত করা
userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

// ব্যবহারপ্রণালী:
const u = new User({ firstName: "Rohit", lastName: "Kumar" });
console.log(u.fullName); // আউটপুট: "Rohit Kumar"
console.log(JSON.stringify(u)); // এর ভেতর "fullName" কি-টি শো করবে
\`\`\``
  },
  {
    id: 'mongodb-28',
    title: 'How do you configure database connection options like poolSize and timeouts in Mongoose?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Connection Pool', 'Database Configuration'],
    enAnswer: 'Configure database options by passing a settings object to mongoose.connect(URI, options). Key parameters include maxPoolSize (defines the connection pool limit) and serverSelectionTimeoutMS (defines how long Mongoose waits before failing on connection drops).',
    bnAnswer: 'mongoose.connect(URI, options) এর ২য় আর্গুমেন্টে একটি সেটিংস অবজেক্ট পাস করে কানেকশন অপশন কনফিগার করা হয়। এর প্রধান প্যারামিটারগুলো হলো maxPoolSize (কানেকশন পুল লিমিট) এবং serverSelectionTimeoutMS (কানেকশন ড্রপ হলে মঙ্গুস কত সময় অপেক্ষা করবে)।',
    enExplanation: `### Explanation
Proper connection settings prevent database crashes from overwhelming your server and protect your Node.js app from freezing during network outages.

**Important Connection Options:**
- **\`maxPoolSize\` (default 100)**: Maximum number of active parallel TCP connections Mongoose keeps open. If your API handles high concurrency, increasing this allows faster parallel queries.
- **\`minPoolSize\` (default 0)**: Minimum number of idle connections to keep alive in the background pool.
- **\`serverSelectionTimeoutMS\` (default 30000)**: How long the driver attempts to search for a healthy database server before returning an error (default 30s is too long for modern web APIs; 5s is recommended).
- **\`socketTimeoutMS\` (default 0)**: How long to wait on inactive sockets before throwing an error.

### Real-World Example
In a serverless environment (like AWS Lambda), connections are expensive and pool limits must be kept small (e.g. \`maxPoolSize: 5\`) to prevent exhausting database capacity across hundreds of spinning lambdas. In a standard continuous container (ECS), set \`maxPoolSize: 50\` to handle peak API traffic.

### Best Practice
Configure connection options in an object variable and pass it to your Mongoose connect initialization. Ensure you set \`serverSelectionTimeoutMS\` to a low threshold (e.g. \`5000\`) so your web server fails fast instead of hanging when MongoDB cluster crashes.

### Common Mistakes
Not configuring limits in serverless functions, which results in each lambda invocation creating new connection pools and rapidly throwing "too many connections" errors on the database cluster.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/my_app';

const options = {
  maxPoolSize: 50, // Keep up to 50 active sockets
  minPoolSize: 10, // Maintain at least 10 sockets idle
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
  socketTimeoutMS: 45000, // Close socket after 45s of inactivity
  family: 4 // Force IPv4 instead of IPv6 (reduces DNS resolution time)
};

mongoose.connect(dbUri, options)
  .then(() => console.log('Configured connection database pool successful.'))
  .catch(err => console.error('Database connection failed:', err));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সঠিক কানেকশন সেটিংস আপনার নোডজেএস অ্যাপ্লিকেশনকে ডাটাবেস আউটেজ বা স্লোনেসের সময় হ্যাং হওয়া থেকে বাঁচায়।

**গুরুত্বপূর্ণ কানেকশন প্যারামিটারসমূহ:**
- **\`maxPoolSize\` (ডিফল্ট ১০০)**: এটি সর্বোচ্চ কতটি সমান্তরাল টিসিপি (TCP) সকেট কানেক্ট রাখবে তা নির্ধারণ করে। ট্রাফিকের চাপ বেশি হলে এটি বাড়িয়ে দিতে পারেন।
- **\`minPoolSize\` (ডিফল্ট ০)**: মঙ্গুস পুলে সর্বনিম্ম কতটি কানেকশন ব্যাকগ্রাউন্ডে রেডি রাখবে।
- **\`serverSelectionTimeoutMS\` (ডিফল্ট ৩০০০০)**: ডাটাবেস ডাউন থাকলে কানেকশন এরর দেখানোর আগে মঙ্গুস কত মিলি-সেকেন্ড ট্রাই করবে (ডিফল্ট ৩০ সেকেন্ড অনেক বেশি, ৫ সেকেন্ড দেওয়া উত্তম)।
- **\`socketTimeoutMS\`**: সকেট নিষ্ক্রিয় থাকলে তা অফ করার লিমিট।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারলেস হোস্টিংয়ে (যেমন: AWS Lambda) প্রতি কলের জন্য নতুন ইনস্ট্যান্স তৈরি হয়। সেখানে পুল সাইজ কম রাখতে হয় (যেমন: \`maxPoolSize: 5\`) যাতে ডাটাবেসের মোট কানেকশন লিমিট শেষ না হয়ে যায়। সাধারণ নোড কনটেইনার হোস্টিংয়ে ৫০ থেকে ১০০ পর্যন্ত পুল রাখতে পারেন।

### উত্তম অনুশীলন
\`serverSelectionTimeoutMS\` এর মান ৫ সেকেন্ডের (\`5000\`) কাছাকাছি রাখুন। এতে ডাটাবেস ডাউন থাকলে আপনার এক্সপ্রেস এপিআই সাথে সাথে এরর দিবে, ইউজারকে ৩০ সেকেন্ড পর্যন্ত লোডিং স্ক্রিন ধরে রেখে অপেক্ষা করাবে না।

### সাধারণ ভুলসমূহ
সার্ভারলেস সিস্টেমে কানেকশন পুল লিমিট সেট না করা, যার ফলে কুয়েরির চাপে খুব দ্রুত ডাটাবেস "too many connections" এরর দিয়ে নতুন সার্ভিস রিকোয়েস্ট ব্লক করে দেয়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/my_app';

const options = {
  maxPoolSize: 50, // সর্বোচ্চ ৫০টি সক্রিয় সকেট থাকবে
  minPoolSize: 10, // কমপক্ষে ১০টি অলস সকেট সচল থাকবে
  serverSelectionTimeoutMS: 5000, // ৫ সেকেন্ড পর কানেকশন ট্রাই ফেইল করবে
  socketTimeoutMS: 45000, // সকেট নিষ্ক্রিয়তার ৪৫ সেকেন্ড পর অফ হবে
  family: 4 // IPv6-এর পরিবর্তে IPv4 ফোর্স করা (বুট স্পিড বাড়ায়)
};

mongoose.connect(dbUri, options)
  .then(() => console.log('নিরাপদ কানেকশন পুল সফলভাবে কনফিগার হয়েছে।'))
  .catch(err => console.error('সংযোগ ফেইল হয়েছে:', err));
\`\`\``
  },
  {
    id: 'mongodb-29',
    title: 'Explain what Mongoose schema timestamps are and how they operate.',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['Mongoose', 'Schema', 'Timestamps'],
    enAnswer: 'Mongoose timestamps automatically add createdAt and updatedAt fields of Date type to your schema. Mongoose manages these fields under the hood, writing createdAt on document insertion and updating updatedAt automatically during save or update operations.',
    bnAnswer: 'Mongoose টাইমস্ট্যাম্প স্বয়ংক্রিয়ভাবে স্কিমায় Date টাইপের createdAt এবং updatedAt ফিল্ড যুক্ত করে। Mongoose নিজে থেকেই ডকুমেন্ট প্রথম তৈরির সময় createdAt এবং প্রতিবার সেভ/আপডেটের সময় updatedAt আপডেট করে।',
    enExplanation: `### Explanation
Manually updating date fields on every write operation leads to repetitive code and timestamp inaccuracies. Mongoose builds this functionality natively into schemas.

**Enabling Timestamps:**
Pass \`{ timestamps: true }\` as the second argument to the \`mongoose.Schema\` constructor.

**Operation Details:**
1. **Insert**: Both \`createdAt\` and \`updatedAt\` are populated with the current date/time.
2. **Update (\`save()\`)**: Mongoose updates the \`updatedAt\` field to the current timestamp.
3. **Query Updates**: When using updates like \`findOneAndUpdate()\`, Mongoose intercept and appends \`updatedAt\` changes automatically.
4. **Disabling**: You can customize property keys, e.g. \`{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }\`.

### Real-World Example
In a blogging system, you sort posts by the newest published date using \`createdAt\`. When a user edits a post, \`updatedAt\` changes automatically, allowing the frontend to display: "Last updated on 2026-06-19".

### Best Practice
Always enable timestamps on all production schemas. Tracking creation and last-modified dates is critical for analytics, debug auditing, caching, and data syncing.

### Common Mistakes
Forgetting that raw MongoDB updates (via direct driver commands or bypass queries) will bypass Mongoose schema configurations, resulting in the \`updatedAt\` field failing to update unless manually set in the query.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Define schema with timestamps enabled
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
}, { 
  timestamps: true // Appends createdAt and updatedAt automatically
});

const Article = mongoose.model('Article', articleSchema);

// Insert will set both fields
// Update (via save) will only change updatedAt
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ম্যানুয়ালি প্রতিবার ডেট অবজেক্ট জেনারেট করে সেভ করতে গেলে কোডের জটিলতা ও সময়ের অমিল তৈরি হতে পারে। Mongoose এই কাজটি নিজেই করে দেয়।

**সক্রিয় করার নিয়ম:**
স্কিমা ডিক্লেয়ারেশনের দ্বিতীয় আর্গুমেন্টে \`{ timestamps: true }\` অবজেক্ট পাস করতে হয়।

**কাজের ধাপ:**
১. **নতুন ইনসার্ট**: প্রথমবার ডাটা সেভ করার সময় \`createdAt\` এবং \`updatedAt\` দুটিতেই একই কারেন্ট ডেট সেট হয়।
২. **আপডেট**: পরবর্তীতে ডকুমেন্ট কোনো মডিফিকেশনের পর \`save()\` কল হলে মঙ্গুস নিজে থেকেই \`updatedAt\`-এর সময় বর্তমান সময়ে বদলে দেয়।
৩. **কাস্টম নাম**: চাইলে ফিল্ড দুটির নাম নিজের মতো করে পরিবর্তন করা যায়: \`{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }\`।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের পোস্টগুলো ক্রমানুসারে সাজাতে \`createdAt\` সাহায্য করে। কোনো ইউজার তার আর্টিকেলের লেখা এডিট করার পর পেজে যখন "সর্বশেষ আপডেট: ১৯-০৬-২০২৬" দেখাবেন, তখন \`updatedAt\` ফিল্ডটি রিড করা হয়।

### উত্তম অনুশীলন
প্রোডাকশনের সমস্ত স্কিমাতে চোখ বন্ধ করে টাইমস্ট্যাম্প অন রাখুন। ডাটা ট্র্যাকিং, ক্যাশিং ও ডেটাবেস অডিটের কাজে এটি অত্যন্ত গুরুত্বপূর্ণ।

### সাধারণ ভুলসমূহ
মঙ্গুস স্কিমার বাইরে গিয়ে কালেকশনে সরাসরি ডাটা রাইট বা আপডেট করা। এতে মঙ্গুসের টাইমস্ট্যাম্প হুক রান হবে না ও আপডেটের সময় অপরিবর্তিতই থেকে যাবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// টাইমস্ট্যাম্প সক্রিয় করে স্কিমা তৈরি
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
}, { 
  timestamps: true // স্বয়ংক্রিয়ভাবে createdAt এবং updatedAt অ্যাড করবে
});

const Article = mongoose.model('Article', articleSchema);

// নতুন ইনসার্ট উভয় ডেট সেট করবে
// পরবর্তী এডিট শুধু updatedAt পরিবর্তন করবে
\`\`\``
  },
  {
    id: 'mongodb-30',
    title: 'How do you query database collections using array comparisons with the $all and $size operators?',
    difficulty: 'basic',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Array Operators'],
    enAnswer: '$all matches documents where the array field contains all the specified elements, regardless of order. $size matches documents where the array size is exactly equal to the specified integer value.',
    bnAnswer: '$all এমন ডকুমেন্ট ম্যাচ করে যার অ্যারে ফিল্ডটিতে অর্ডারের পরোয়া না করে নির্দিষ্ট সব উপাদানই থাকে। $size এমন ডকুমেন্ট ম্যাচ করে যার অ্যারে সাইজ বা উপাদানের সংখ্যা নির্দিষ্ট ইন্টিজারের সমান।',
    enExplanation: `### Explanation
When filtering documents based on array properties, standard equality checking is limited.

- **\`$all\`**:
  - Matches if the target array contains *every* element in the query array.
  - Unlike exact matching (\`{ tags: ["A", "B"] }\`), the order of elements and the presence of additional elements do not matter.
- **\`$size\`**:
  - Matches arrays containing exactly the defined count of elements.
  - **Limitation**: \`$size\` only accepts exact numbers, e.g. you cannot query for arrays with a size greater than 3 using \`{ tags: { $size: { $gt: 3 } } }\` directly.

### Real-World Example
In a movie rating database:
- Find movies that contain both "Action" and "Sci-Fi" genres: \`{ genres: { $all: ["Action", "Sci-Fi"] } }\`.
- Find items that have exactly 3 tags: \`{ tags: { $size: 3 } }\`.

### Best Practice
Do not use \`$size\` queries if you need to perform range limits (like size $>5$). Instead, store a separate \`itemCount\` integer field in the document that is incremented/decremented when elements are updated, and index that field for fast range queries.

### Common Mistakes
Attempting to pass range operators directly inside \`$size\` (such as \`{ $size: { $gt: 2 } }\`), which causes MongoDB to fail as \`$size\` requires a single, static integer.

### Code Example
\`\`\`javascript
// 1. Find products that contain ALL listed tags
const matchingProducts = db.products.find({
  tags: { $all: ["wireless", "gaming", "rgb"] }
});

// 2. Find orders that have exactly two items in the checkout list
const doubleOrders = db.orders.find({
  items: { $size: 2 }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারে ফিল্টারিংয়ের জন্য মঙ্গোডিবির বিশেষ দুটি অপারেটর হলো \`$all\` এবং \`$size\`:

- **\`$all\`**:
  - এটি তখন ব্যবহৃত হয় যখন অ্যারেতে নির্দিষ্ট সমস্ত উপাদানের উপস্থিতি আবশ্যক।
  - ক্রমানুসার (Order) এলোমেলো থাকলেও বা অতিরিক্ত উপাদান থাকলেও ম্যাচ করবে, যতক্ষণ পর্যন্ত সবগুলো ইনপুট অ্যারেতে থাকবে।
- **\`$size\`**:
  - অ্যারেতে উপাদানের সংখ্যা কত তা নির্দিষ্ট করে ম্যাচ করে।
  - **সীমাবদ্ধতা**: এটি শুধু ফিক্সড নম্বর ইনপুট নেয়, রেঞ্জ অপারেটর (যেমন: সাইজ ৩-এর বড়) এর ভেতর সরাসরি চালানো যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
সিনেমা ডাটাবেসে:
- এমন সিনেমা যা একযোগে "Action" ও "Sci-Fi" ক্যাটাগরির অন্তর্ভুক্ত: \`{ genres: { $all: ["Action", "Sci-Fi"] } }\`।
- যেসব অর্ডারে কাস্টমার ঠিক ৩টি আইটেম কার্টে নিয়েছে: \`{ items: { $size: 3 } }\`।

### উত্তম অনুশীলন
সাইজ ৩-এর বেশি বা ৫-এর কম কুয়েরি করার জন্য জোর করে \`$size\` ব্যবহার করবেন না। এর চেয়ে ডকুমেন্টে \`arrayLength\` নামে আলাদা ইন্টিজার ফিল্ড রাখুন যা প্রতি ইনসার্টে ১ করে বাড়ে। ওই ফিল্ডে সহজেই রেঞ্জ সার্চ ও ইনডেক্সিং করা যায়।

### সাধারণ ভুলসমূহ
\`$size\`-এর ভেতর রেঞ্জ কুয়েরি ফায়ার করা (যেমন: \`{ $size: { $gt: 2 } }\`)। মঙ্গোডিবি রানটাইমে এই কুয়েরি এরর দেখাবে কারণ সাইজে কেবল নির্দিষ্ট ইন্টিজার সংখ্যা গ্রহণযোগ্য।

### Code Example
\`\`\`javascript
// ১. যেসব প্রোডাক্টে "wireless", "gaming" এবং "rgb" তিনটি ট্যাগই আছে
const matchingProducts = db.products.find({
  tags: { $all: ["wireless", "gaming", "rgb"] }
});

// ২. যেসব অর্ডারে ঠিক দুটি আইটেম কেনা হয়েছে
const doubleOrders = db.orders.find({
  items: { $size: 2 }
});
\`\`\``
  }
];
