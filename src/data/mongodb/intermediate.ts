import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'mongodb-31',
    title: 'Explain Compound Indexes and the Equality-Sort-Range (ESR) rule in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Database Optimization', 'Best Practice'],
    enAnswer: 'A compound index is an index on multiple fields of a document. When creating compound indexes, you must follow the Equality-Sort-Range (ESR) rule: place fields queried for exact match (Equality) first, followed by fields used for Sorting, and finally fields queried for range values (Range).',
    bnAnswer: 'কম্পাউন্ড ইনডেক্স হলো ডকুমেন্টের একাধিক ফিল্ডের সমন্বয়ে তৈরি ইনডেক্স। কম্পাউন্ড ইনডেক্স তৈরির সময় Equality-Sort-Range (ESR) নিয়ম মেনে চলতে হয়: প্রথমে ইকুয়ালিটি (Equality) কুয়েরি ফিল্ড, এরপর সর্টিং (Sort) ফিল্ড এবং সবশেষে রেঞ্জ (Range) ফিল্ড রাখতে হয়।',
    enExplanation: `### Explanation
A compound index supports queries that filter or sort on multiple fields. The order of fields in a compound index is critical for database optimization.

**The ESR (Equality-Sort-Range) Rule:**
1. **Equality (\`E\`)**: Place fields queried with exact matches first (e.g. \`status: "active"\` or \`userId: 123\`). This narrows down the scanned documents to a small bucket.
2. **Sort (\`S\`)**: Place fields used to sort results next (e.g. \`createdAt: -1\`). If the index matches the sort key sequence, MongoDB can return results directly from the index tree without running an expensive in-memory sort (blocking sort).
3. **Range (\`R\`)**: Place fields queried with inequality range operators last (e.g. \`price: { $gt: 50 }\` or \`age: { $lt: 30 }\`). Once a range scan begins, subsequent fields in the index cannot be used efficiently for sorting.

### Real-World Example
In a real-estate search portal, users query apartments with:
- Exact location (Equality): \`city: "Dhaka"\`
- Sort by price (Sort): \`price: 1\`
- Number of bedrooms (Range): \`bedrooms: { $gt: 2 }\`
Following ESR, the optimal compound index is: \`db.apartments.createIndex({ city: 1, price: 1, bedrooms: 1 })\`.

### Best Practice
Ensure the field order matches your query patterns. An index on \`{ A: 1, B: 1 }\` can optimize queries filtering on \`A\` or on \`A and B\`, but it cannot optimize a query filtering on \`B\` alone.

### Common Mistakes
Creating a compound index with range fields placed before sort fields (e.g. \`{ age: 1, score: 1 }\` where \`age\` is queried as a range and \`score\` is used for sorting). This forces MongoDB to perform a slow in-memory sort.

### Code Example
\`\`\`javascript
// 1. Create index following ESR: (Equality: status, Sort: createdAt, Range: price)
db.orders.createIndex({ status: 1, createdAt: -1, price: 1 });

// 2. Query that perfectly matches the index execution path
db.orders.find({ status: "completed", price: { $gte: 100 } })
  .sort({ createdAt: -1 });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কম্পাউন্ড ইনডেক্স তৈরি করা হয় একাধিক ফিল্ডকে একসাথে সর্ট বা ফিল্টার করার জন্য। এতে ফিল্ডগুলোর সাজানোর ক্রম পারফরম্যান্সের ওপর ব্যাপক প্রভাব ফেলে।

**ESR (Equality-Sort-Range) নিয়ম:**
১. **Equality (\`E\`)**: হুবহু মিল বা ইকুয়ালিটি ফিল্টার করে এমন ফিল্ডগুলো সবার প্রথমে রাখুন (যেমন: \`status: "active"\`)। এতে ডাটার খোঁজ একটি ক্ষুদ্র গণ্ডির মধ্যে চলে আসে।
২. **Sort (\`S\`)**: ফলাফল সাজাতে সর্টিং ফিল্ডগুলো এর পরেই রাখুন (যেমন: \`createdAt: -1\`)। ইনডেক্স যদি সর্ট অর্ডারের সাথে মেলে, মঙ্গোডিবি মেমোরিতে অতিরিক্ত সর্ট কুয়েরি না চালিয়ে সরাসরি ইনডেক্স থেকে ডাটা দিতে পারে।
৩. **Range (\`R\`)**: রেঞ্জ ফিল্টার (যেমন: \`price: { $gt: 50 }\`) সবার শেষে রাখুন। কারণ ইনডেক্সিংয়ে একবার রেঞ্জ স্ক্যান শুরু হলে পরবর্তী ফিল্ডগুলোকে আর সর্টের জন্য ব্যবহার করা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্ল্যাট খোঁজার এপিআই-তে ইউজারের কুয়েরি:
- নির্দিষ্ট শহর (Equality): \`city: "Dhaka"\`
- দামের ভিত্তিতে সর্ট (Sort): \`price: 1\`
- বেডরুমের সংখ্যা (Range): \`bedrooms: { $gt: 2 }\`
ESR রুল মেনে সঠিক ইনডেক্স হবে: \`db.apartments.createIndex({ city: 1, price: 1, bedrooms: 1 })\`।

### উত্তম অনুশীলন
ইনডেক্সের ফিল্ড অর্ডার কুয়েরির সাথে মিল রাখুন। \`{ A: 1, B: 1 }\` ইনডেক্সটি শুধু \`A\` অথবা \`A ও B\` উভয় ফিল্ডের কুয়েরিতে কাজ করবে, কিন্তু শুধু \`B\` দিয়ে কুয়েরি করলে এটি কাজ করবে না।

### সাধারণ ভুলসমূহ
সর্ট ফিল্ডের আগে রেঞ্জ ফিল্ড রেখে ইনডেক্স তৈরি করা (যেমন: \`{ age: 1, score: 1 }\` যেখানে \`age\` হলো রেঞ্জ ফিল্টার)। এর ফলে ইন-মেমোরি সর্টের কারণে কুয়েরি অনেক ধীরগতির হয়ে যায়।

### Code Example
\`\`\`javascript
// ১. ESR রুল মেনে ইনডেক্স তৈরি: (Equality: status, Sort: createdAt, Range: price)
db.orders.createIndex({ status: 1, createdAt: -1, price: 1 });

// ২. ইনডেক্স ব্যবহারের কুয়েরি প্যাটার্ন
db.orders.find({ status: "completed", price: { $gte: 100 } })
  .sort({ createdAt: -1 });
\`\`\``
  },
  {
    id: 'mongodb-32',
    title: 'What are Multikey Indexes in MongoDB and what are their limitations?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Arrays', 'Database Optimization'],
    enAnswer: 'A multikey index is created when you index a field containing an array value. MongoDB automatically creates index keys for every element in the array. Its key limitation is that you cannot create a compound multikey index where more than one field is an array.',
    bnAnswer: 'মাল্টিকি (Multikey) ইনডেক্স তৈরি হয় যখন আপনি এমন কোনো ফিল্ড ইনডেক্স করেন যার মান একটি অ্যারে। মঙ্গোডিবি অ্যারের প্রতিটি উপাদানের জন্য আলাদা ইনডেক্স কী তৈরি করে। এর মূল সীমাবদ্ধতা হলো আপনি এমন কম্পাউন্ড ইনডেক্স তৈরি করতে পারবেন না যার একাধিক ফিল্ড অ্যারে টাইপ।',
    enExplanation: `### Explanation
Multikey indexes allow efficient searches inside array values (e.g. string arrays or arrays of sub-documents).

**How it works:**
If a document contains \`tags: ["green", "cotton"]\` and you index \`{ tags: 1 }\`, MongoDB creates two index entries pointing to the same document (one for "green", one for "cotton").

**Limitations of Multikey Indexes:**
1. **Single Array Field Restriction**: In a compound index (e.g. \`{ A: 1, B: 1 }\`), only one of these fields can be an array. If you try to insert a document where both \`A\` and \`B\` are arrays (e.g. \`A = [1, 2]\` and \`B = ["x", "y"]\`), MongoDB will reject the write operation with a cartesian product size warning.
2. **Hashed Indexes**: Hashed indexes cannot be multikey.
3. **Covered Queries**: Multikey indexes cannot cover queries because they reference multiple array items.

### Real-World Example
In a product catalog:
- Product has: \`tags: ["appliances", "home"]\` (array) and \`status: "active"\` (string).
- You can create a compound index on \`{ tags: 1, status: 1 }\` (only 1 array field). This is valid.
- If product also has: \`colors: ["red", "blue"]\` (array), you CANNOT index \`{ tags: 1, colors: 1 }\` because both are arrays.

### Best Practice
Monitor your index sizes. Since multikey indexes store multiple entries per document, they consume more RAM than standard single-field indexes.

### Common Mistakes
Attempting to create compound indexes on multiple array fields, which blocks document inserts when users supply arrays for both properties.

### Code Example
\`\`\`javascript
// 1. Create a multikey index on array field 'tags'
db.products.createIndex({ tags: 1 });

// 2. Query matching elements inside the array efficiently
db.products.find({ tags: "electronics" });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মাল্টিকি ইনডেক্স অ্যারের উপাদানগুলোর ওপর দ্রুত অনুসন্ধান চালাতে সহায়তা করে (যেমন: স্ট্রিং অ্যারে বা অবজেক্টের অ্যারে)।

**কাজের পদ্ধতি:**
যদি কোনো ডকুমেন্টে \`tags: ["green", "cotton"]\` থাকে এবং আপনি \`{ tags: 1 }\` ইনডেক্স করেন, মঙ্গোডিবি ব্যাকগ্রাউন্ডে দুটি আলাদা ইনডেক্স কী তৈরি করবে ("green" এবং "cotton"), যা একই ডকুমেন্ট নির্দেশ করবে।

**মাল্টিকি ইনডেক্সের সীমাবদ্ধতা:**
১. **একক অ্যারে সীমাবদ্ধতা**: কোনো কম্পাউন্ড ইনডেক্সে (যেমন: \`{ A: 1, B: 1 }\`) কেবল একটি ফিল্ডই অ্যারে হতে পারবে। আপনি যদি \`A\` ও \`B\` উভয়ই অ্যারে সেট করা কোনো ডকুমেন্ট সেভ করতে যান, তবে ডাটাবেস রাইট অপারেশনটি রিজেক্ট করবে।
২. **হ্যাশড ইনডেক্স**: হ্যাশড ইনডেক্স মাল্টিকি হতে পারে না।
৩. **কাভার্ড কুয়েরি**: মাল্টিকি ইনডেক্স কাভার্ড কুয়েরি সাপোর্ট করে না।

### বাস্তব-ভিত্তিক উদাহরণ
প্রোডাক্ট ক্যাটালগে:
- প্রোডাক্টের আছে: \`tags: ["appliances", "home"]\` (অ্যারে) এবং \`status: "active"\` (স্ট্রিং)।
- আপনি \`{ tags: 1, status: 1 }\` কম্পাউন্ড ইনডেক্স তৈরি করতে পারবেন কারণ এতে মাত্র ১টি অ্যারে আছে।
- কিন্তু প্রোডাক্টে যদি \`colors: ["red", "blue"]\` (অ্যারে) থাকে, তবে আপনি \`{ tags: 1, colors: 1 }\` ইনডেক্স করতে পারবেন না।

### উত্তম অনুশীলন
ইনডেক্সের সাইজ মনিটর করুন। যেহেতু মাল্টিকি ইনডেক্স একটি ফাইলের জন্য একাধিক কী স্টোর করে, তাই এটি সাধারণ ইনডেক্সের চেয়ে র‍্যামের বেশি মেমোরি খরচ করে।

### সাধারণ ভুলসমূহ
একাধিক অ্যারে ফিল্ডের ওপর একসাথে কম্পাউন্ড ইনডেক্স তৈরি করার চেষ্টা করা, যা অ্যাপ্লিকেশন সেভ করার সময় এরর মেসেজ দিয়ে ক্র্যাশ করে।

### Code Example
\`\`\`javascript
// ১. অ্যারে ফিল্ড 'tags' এর ওপর ইনডেক্স তৈরি (মাল্টিকি)
db.products.createIndex({ tags: 1 });

// ২. অ্যারের ভেতর সার্চ কুয়েরি রান করা
db.products.find({ tags: "electronics" });
\`\`\``
  },
  {
    id: 'mongodb-33',
    title: 'Explain Text Indexes and search weights in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Text Search', 'mongosh'],
    enAnswer: 'A Text Index supports full-text search queries on string content using the $text operator. Weights configure the relative importance of indexed fields in search score calculations, ensuring matching terms in high-weight fields rank higher in results.',
    bnAnswer: 'টেক্সট ইনডেক্স $text অপারেটর ব্যবহার করে স্ট্রিং কন্টেন্টের ওপর ফুল-টেক্সট সার্চ সুবিধা দেয়। ওয়েট (Weights) ইনডেক্স করা ফিল্ডগুলোর আপেক্ষিক গুরুত্ব নির্ধারণ করে, যাতে বেশি ওয়েটের ফিল্ডে মিল থাকা ডকুমেন্টের সার্চ স্কোর বেশি হয়।',
    enExplanation: `### Explanation
Standard index regex queries are slow. MongoDB's **Text Indexes** build inverted search indexes that stem words (e.g. matching "cooking" with "cook") and ignore stop words (like "the", "a", "and").

**Key Text Index Properties:**
- **Limit**: A collection can have at most **one** text index. However, it can cover multiple fields (a compound text index).
- **Weights**: You can assign numeric priorities to fields. For instance, a match in the \`title\` field is usually more important than a match in the \`content\` body.
- **Sorting by Score**: Text search queries calculate a metadata relevance \`textScore\` for each matching document, allowing you to sort results by relevance.

### Real-World Example
In a blog website search box:
- You want users to search posts by title and description.
- You want a match in the title to be 5 times more important than in the description.
Index definition: \`{ title: "text", description: "text" }\` with weights: \`{ title: 5, description: 1 }\`.

### Best Practice
Since a collection is limited to one text index, include all fields you want users to search (like name, category, and description) in a single compound text index.

### Common Mistakes
Forgetting that a text index requires the \`$text\` operator to execute. Writing regular regex expressions on text-indexed fields will not utilize the text search engine.

### Code Example
\`\`\`javascript
// 1. Create compound text index with custom weights
db.articles.createIndex(
  { title: "text", body: "text" },
  {
    weights: {
      title: 10, // Title matches are 5x more important than body
      body: 2
    },
    name: "ArticleTextIndex"
  }
);

// 2. Query and sort by relevance textScore
db.articles.find(
  { $text: { $search: "mongodb database" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণ রেজেক্স সার্চ বড় ডাটাতে স্লো হয়। মঙ্গোডিবির **টেক্সট ইনডেক্স** শব্দের গোড়া বিশ্লেষণ করে (যেমন: "running" সার্চ করলে "run" ম্যাচ করা) এবং স্টপ-ওয়ার্ড (যেমন: "the", "and") বাদ দিয়ে সার্চ ইনডেক্স তৈরি করে।

**টেক্সট ইনডেক্সের বৈশিষ্ট্য:**
- **সীমাবদ্ধতা**: একটি কালেকশনে সর্বোচ্চ **একটি** টেক্সট ইনডেক্স তৈরি করা যায় (যদিও একাধিক ফিল্ড ওই একটি ইনডেক্সের অংশ হতে পারে)।
- **ওয়েট (Weights)**: ফিল্ডের গুরুত্ব ঠিক করা। যেমন: প্রোডাক্টের নামের সাথে মিল প্রোডাক্টের ডেসক্রিপশনের সাথে মিলের চেয়ে বেশি স্কোর পাবে।
- **সার্চ স্কোর**: প্রতিটি ম্যাচিং ডকুমেন্টের জন্য মঙ্গোডিবি একটি \`textScore\` তৈরি করে, যার ভিত্তিতে প্রাসঙ্গিকতার সর্ট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের সার্চ বক্সে:
- ইউজার টাইটেল ও বডি মিলিয়ে সার্চ করবে।
- আমরা চাই টাইটেলে ম্যাচ বডির ম্যাচের চেয়ে ৫ গুণ বেশি স্কোর পাক।
ইনডেক্স ডিক্লেয়ার করব: \`{ title: "text", body: "text" }\` এবং ওয়েট দেব: \`{ title: 5, body: 1 }\`।

### উত্তম অনুশীলন
কালেকশনে যেহেতু একটির বেশি টেক্সট ইনডেক্স করা যায় না, তাই সার্চ করতে চাওয়া সব ফিল্ডকে একটি মাত্র কম্পাউন্ড টেক্সট ইনডেক্সে যুক্ত করুন।

### সাধারণ ভুলসমূহ
টেক্সট ইনডেক্স তৈরি করার পর সাধারণ রেজেক্স \`$regex\` দিয়ে সার্চ চালানো। রেজেক্স কুয়েরি টেক্সট ইনডেক্সের সুবিধা নিতে পারে না, এর জন্য \`$text\` অপারেটর ব্যবহার করতে হয়।

### Code Example
\`\`\`javascript
// ১. কাস্টম ওয়েট সহ কম্পাউন্ড টেক্সট ইনডেক্স তৈরি
db.articles.createIndex(
  { title: "text", body: "text" },
  {
    weights: {
      title: 10, // টাইটেল ম্যাচ ১০ গুণ গুরুত্বপূর্ণ
      body: 2
    },
    name: "ArticleTextIndex"
  }
);

// ২. সার্চ ও প্রাসঙ্গিকতার স্কোরের (textScore) ভিত্তিতে সর্ট করা
db.articles.find(
  { $text: { $search: "mongodb database" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
\`\`\``
  },
  {
    id: 'mongodb-34',
    title: 'What are TTL (Time-To-Live) Indexes in MongoDB and how do they operate?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'TTL Index', 'Database Configuration'],
    enAnswer: 'A TTL index is a single-field index on a Date field that automatically deletes documents after a specified number of seconds or at a specific expiration date. A background thread running every 60 seconds handles the cleanup operations.',
    bnAnswer: 'টিটিএল (TTL - Time-To-Live) ইনডেক্স হলো ডেট ফিল্ডের ওপর তৈরি সিঙ্গেল-ফিল্ড ইনডেক্স যা নির্দিষ্ট সময় বা নির্দিষ্ট মেয়াদ শেষের পর স্বয়ংক্রিয়ভাবে ডকুমেন্ট ডিলিট করে। প্রতি ৬০ সেকেন্ড পরপর একটি ব্যাকগ্রাউন্ড থ্রেড এই ক্লিনআপ সম্পন্ন করে।',
    enExplanation: `### Explanation
TTL indexes are ideal for cleaning up ephemeral data automatically without cron jobs or database cleaning scripts.

**How TTL Indexes Work:**
- You create an index on a field containing a BSON Date type, specifying the \`expireAfterSeconds\` property.
- **Relative Expire**: The document is deleted when the current date is greater than the field date plus \`expireAfterSeconds\`.
- **Absolute Expire**: If \`expireAfterSeconds\` is set to \`0\`, and you set the indexed date property to a future date (e.g. \`expireAt: new Date("2026-06-19T21:00:00Z")\`), the document is deleted at that exact time.

**Restrictions:**
1. Only works on single-field indexes. Compound indexes cannot be TTL.
2. The target field must contain a BSON Date type; strings or integers will be ignored.
3. Cannot be created on capped collections since they do not allow document deletion.

### Real-World Example
In a user auth system, when you generate a temporary one-time password (OTP) or email verification token, you set an \`expiresAt\` field in the document. A TTL index on \`expiresAt\` with \`expireAfterSeconds: 0\` ensures the token disappears automatically after 10 minutes.

### Best Practice
Do not rely on TTL indexes for exact, second-accurate deletions. Because the background cleanup process runs once every 60 seconds, a document can remain on disk for up to a minute past its official expiration time depending on the cleanup loop cycle.

### Common Mistakes
Attempting to create a TTL index on a string date field (e.g. \`"2026-06-19T18:00:00Z"\`). Since it is not a true BSON Date object, the cleanup thread will ignore the document, causing it to remain in the database forever.

### Code Example
\`\`\`javascript
// 1. Create TTL index to delete logs after 24 hours (86400 seconds)
db.server_logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }
);

// 2. Insert document: will be deleted automatically 24 hours from now
db.server_logs.insertOne({
  message: "API Request completed successfully",
  createdAt: new Date() // Must be native BSON Date
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্রন জব বা ব্যাকগ্রাউন্ড স্ক্রিপ্ট ছাড়াই ডাটাবেস থেকে ক্ষণস্থায়ী বা টেম্পোরারি ডাটা অটোমেটিক ডিলিট করতে TTL (Time-To-Live) ইনডেক্স ব্যবহার করা হয়।

**টিটিএল যেভাবে কাজ করে:**
- একটি BSON ডেট ফিল্ড সিলেক্ট করে \`expireAfterSeconds\` অপশন দিয়ে ইনডেক্স তৈরি করা হয়।
- **আপেক্ষিক বিলুপ্তি (Relative)**: ডেট ফিল্ডের সময়ের সাথে সেকেন্ড যোগ হয়ে টাইম ক্রস করলেই ফাইল ডিলিট হয়।
- **নির্দিষ্ট বিলুপ্তি (Absolute)**: যদি সেকেন্ডের মান \`0\` রাখা হয়, তবে ডেট ফিল্ডে ভবিষ্যতের যে সময় উল্লেখ থাকবে, সেই সময় আসা মাত্রই ফাইল মুছে যাবে।

**সীমাবদ্ধতা:**
১. এটি শুধু সিঙ্গেল-ফিল্ড ইনডেক্সে কাজ করে, কম্পাউন্ড ইনডেক্সে কাজ করে না।
২. ফিল্ডের মান অবশ্যই বিএসওএন ডেট হতে হবে (স্ট্রিং বা ইন্টিজারে কাজ করবে না)।
৩. ক্যাপড কালেকশনে এটি ব্যবহার করা যায় না।

### বাস্তব-ভিত্তিক উদাহরণ
ওটিপি (OTP) ভেরিফিকেশন সিস্টেমে ৫ মিনিটের জন্য একটি টেম্পোরারি ওটিপি টেবিল রাখা হয়। ওটিপি সেভ করার ডেট ফিল্ডে টিটিএল ইনডেক্স সক্রিয় রাখলে ৫ মিনিট পার হওয়া মাত্র ডাটাবেস থেকে ওটিপি নিজে থেকেই মুছে যাবে।

### উত্তম অনুশীলন
সেকেন্ডের নিখুঁত হিসাবের ডিলিটের জন্য টিটিএল-এর ওপর শতভাগ নির্ভর করবেন না। যেহেতু ব্যাকগ্রাউন্ড সার্ভিসটি ৬০ সেকেন্ড পর পর রান করে, তাই কোনো কোনো ফাইল ডিলিট হতে মূল মেয়াদের চেয়ে অতিরিক্ত ৬০ সেকেন্ড পর্যন্ত বেশি সময় লাগতে পারে।

### সাধারণ ভুলসমূহ
স্ট্রিং আকারে ডেট সেভ করে টিটিএল রান করা (যেমন: \`"2026-06-19"\`)। ডেট টাইপ ছাড়া অন্য যেকোনো ফরম্যাট থাকলে টিটিএল সার্ভিস ফাইলটি ইগনোর করে ফলে ডাটা স্থায়ী থেকে যায়।

### Code Example
\`\`\`javascript
// ১. ২৪ ঘণ্টা (৮৬৪০০ সেকেন্ড) পর লগ ডিলিট করার টিটিএল ইনডেক্স তৈরি
db.server_logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }
);

// ২. লগ ইনসার্ট করা যা ২৪ ঘণ্টা পর ডিলিট হবে
db.server_logs.insertOne({
  message: "সার্ভার রিকোয়েস্ট রেসপন্স ওয়ান",
  createdAt: new Date() // অবশ্যই ডেট অবজেক্ট হতে হবে
});
\`\`\``
  },
  {
    id: 'mongodb-35',
    title: 'Explain the difference between Partial and Sparse Indexes in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Database Optimization'],
    enAnswer: 'Sparse indexes only index documents that contain the indexed field, ignoring documents where it is missing. Partial indexes filter indexed documents using a filter expression (partialFilterExpression), offering greater flexibility by indexing based on values, not just presence.',
    bnAnswer: 'স্পার্স (Sparse) ইনডেক্স শুধু সেই ডকুমেন্টগুলোকে ইনডেক্স করে যাতে ইনডেক্সকৃত ফিল্ডটি উপস্থিত থাকে। পার্শিয়াল (Partial) ইনডেক্স একটি ফিল্টার এক্সপ্রেশনের সাহায্যে নির্দিষ্ট শর্ত পূরণকারী ডকুমেন্টগুলো ইনডেক্স করে, যা অনেক বেশি নমনীয়।',
    enExplanation: `### Explanation
Both index types save memory by only indexing a subset of documents in a collection.

**1. Sparse Indexes:**
- Legacy indexing type.
- Matches documents where the indexed field has any value (even \`null\`).
- If a document misses the field, it is skipped in the index tree.
- Syntax: \`db.collection.createIndex({ field: 1 }, { sparse: true })\`.

**2. Partial Indexes (Recommended over Sparse):**
- Introduced in MongoDB 3.2.
- Uses a \`partialFilterExpression\` object to declare filter rules using query operators (like \`$gt\`, \`$exists\`, \`$type\`).
- Gives complete control over which subset of documents is indexed.

### Real-World Example
- **Sparse**: In a users collection, only a few users have a \`twitterUsername\` field. Indexing \`{ twitterUsername: 1 }\` as sparse saves memory by skipping the 95% of users who do not have Twitter linked.
- **Partial**: In an e-commerce inventory, you want to index products that are active and priced above $100:
\`\`\`javascript
db.products.createIndex(
  { price: 1 },
  { partialFilterExpression: { status: "active", price: { $gt: 100 } } }
)
\`\`\`

### Best Practice
Prefer Partial Indexes over Sparse Indexes. Partial indexes provide a superset of sparse index capabilities (e.g., a sparse index is equivalent to a partial index with a filter of \`{ field: { $exists: true } }\`).

### Common Mistakes
Forgetting that MongoDB will only use a partial index if the query filter matches or is a subset of the \`partialFilterExpression\`. If your query filters on \`price: 50\`, the partial index created for \`price > 100\` will be ignored, resulting in a COLLSCAN.

### Code Example
\`\`\`javascript
// 1. Create a Partial Index: index only active users email (protects uniqueness for active users only)
db.users.createIndex(
  { email: 1 },
  { 
    unique: true,
    partialFilterExpression: { status: "active" } 
  }
);

// 2. Query that uses the partial index
db.users.find({ email: "rohit@example.com", status: "active" });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্পার্স ও পার্শিয়াল উভয় ইনডেক্সই আংশিক বা ফিল্টার করা ডকুমেন্টের ওপর ইনডেক্স তৈরি করে ডাটাবেসের মূল্যবান র‍্যাম মেমোরি সাশ্রয় করে।

**১. স্পার্স ইনডেক্স (Sparse Indexes):**
- এটি তুলনামূলক পুরনো মেথড।
- ফিল্ডের মান থাকলে (এমনকি \`null\` হলেও) ইনডেক্স করে, ফিল্ডটি না থাকলে ইগনোর করে।
- গঠন: \`db.collection.createIndex({ field: 1 }, { sparse: true })\`।

**২. পার্শিয়াল ইনডেক্স (Partial Indexes):**
- মঙ্গোডিবি ৩.২ ভার্সনে এটি যুক্ত হয়।
- এটি \`partialFilterExpression\` ফিল্টার ব্যবহার করে অত্যন্ত নমনীয় উপায়ে জটিল শর্ত অনুযায়ী ইনডেক্সিং করার ক্ষমতা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
- **স্পার্স**: ইউজার কালেকশনের ৫% ইউজার শুধু তাদের \`twitterUsername\` লিঙ্ক করেছে। স্পার্স ইনডেক্স ব্যবহার করলে বাকি ৯৫% ইউজারের জন্য ইনডেক্স মেমোরি খরচ হবে না।
- **পার্শিয়াল**: ই-কমার্স কালেকশনে আপনি শুধু সেই প্রোডাক্টগুলোর দাম ইনডেক্স করতে চান যেগুলোর স্ট্যাটাস একটিভ এবং দাম ১০০-এর বেশি:
\`\`\`javascript
db.products.createIndex(
  { price: 1 },
  { partialFilterExpression: { status: "active", price: { $gt: 100 } } }
)
\`\`\`

### উত্তম অনুশীলন
স্পার্স ইনডেক্সের চেয়ে পার্শিয়াল ইনডেক্স বেশি ব্যবহার করুন। কারণ পার্শিয়াল ইনডেক্স দিয়ে স্পার্সের কাজও সম্পন্ন করা সম্ভব (যেমন: \`{ field: { $exists: true } }\` ফিল্টার ব্যবহার করে)।

### সাধারণ ভুলসমূহ
পার্শিয়াল ইনডেক্স কুয়েরিতে ব্যবহারের জন্য কুয়েরি ফিল্টারের ফিল্ডগুলো ইনডেক্সের ফিল্টার এক্সপ্রেশনের সাথে হুবহু মিলতে হয়। আপনার কুয়েরিতে যদি ইনডেক্স ফিল্টারের শর্ত না মেলে, তবে মঙ্গোডিবি ইনডেক্স বাইপাস করে কালেকশন স্ক্যান চাাবে।

### Code Example
\`\`\`javascript
// ১. পার্শিয়াল ইনডেক্স: শুধুমাত্র একটিভ ইউজারদের ইমেইল ইউনিক রাখা (ইনএক্টিভদের বাদ দিয়ে)
db.users.createIndex(
  { email: 1 },
  { 
    unique: true,
    partialFilterExpression: { status: "active" } 
  }
);

// ২. কুয়েরি যা ইনডেক্স ব্যবহার করবে (শর্ত ম্যাচ হয়েছে)
db.users.find({ email: "rohit@example.com", status: "active" });
\`\`\``
  },
  {
    id: 'mongodb-36',
    title: 'How do you analyze query performance using the explain() method in MongoDB?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Performance', 'explain', 'Database Optimization'],
    enAnswer: 'The explain() method returns details on query execution plans. It supports three verbosity modes: queryPlanner (shows candidate plans), executionStats (adds runtime execution metrics like scanned documents vs returned matches), and allPlansExecution (adds metrics for all evaluated plans).',
    bnAnswer: 'explain() মেথড কুয়েরি এক্সিকিউশন প্ল্যানের বিস্তারিত তথ্য রিটার্ন করে। এটি তিনটি মোড সাপোর্ট করে: queryPlanner (সম্ভাব্য প্ল্যান দেখায়), executionStats (রানিং ডাটা ও রুট স্ক্যান দেখায়), এবং allPlansExecution (সবগুলো ইভ্যালুয়েটেড প্ল্যান এনালাইসিস করে)।',
    enExplanation: `### Explanation
Optimizing database queries requires checking how the engine evaluates them behind the scenes.

**Explain Modes:**
1. **\`queryPlanner\` (Default)**: Shows what index choices were considered and which one was selected as the winning plan.
2. **\`executionStats\` (Recommended for profiling)**: Runs the query, records statistics, and reports runtime details:
   - \`nReturned\`: Number of documents returned to client.
   - \`totalKeysExamined\`: Number of index keys read.
   - \`totalDocsExamined\`: Number of actual documents read from disk.
3. **\`allPlansExecution\`**: Provides stats for all candidate plans during optimization cycles.

**Evaluating Metrics:**
- **Optimal state**: \`totalKeysExamined\` $\approx$ \`nReturned\`, and \`totalDocsExamined\` $\approx$ \`nReturned\` (or 0 for covered queries).
- **Suboptimal state**: \`totalDocsExamined\` $\gg$ \`nReturned\` (suggests missing indexes causing COLLSCAN).

### Real-World Example
If your dashboard page takes 3 seconds to load a user's recent orders, appending \`.explain("executionStats")\` to the mongoose query reveals \`totalDocsExamined: 5000000\` and \`nReturned: 10\`, showing that a compound index on \`{ userId: 1, createdAt: -1 }\` is missing.

### Best Practice
Verify that your execution stage is **\`IXSCAN\`** (Index Scan) and not **\`COLLSCAN\`** (Collection Scan) or **\`FETCH\`** (meaning documents were read from disk to check unindexed fields).

### Common Mistakes
Running explain queries without passing the \`executionStats\` parameter, which only returns the proposed index selection path without showing actual execution times or scanned document counts.

### Code Example
\`\`\`javascript
// Run query explain in executionStats mode
const performanceDetails = db.orders.find({ 
  status: "completed",
  price: { $gte: 150 }
}).explain("executionStats");

// Print key metrics from the output object
printjson(performanceDetails.executionStats);
/*
Output structure includes:
{
  "executionSuccess": true,
  "nReturned": 25,
  "executionTimeMillis": 2,
  "totalKeysExamined": 25,
  "totalDocsExamined": 25
}
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেস কুয়েরির গতি অপ্টিমাইজ করার জন্য মঙ্গোডিবি কীভাবে কোডটি ব্যাকগ্রাউন্ডে হ্যান্ডেল করছে তা চেক করা আবশ্যক।

**এক্সপ্লেইন মোডসমূহ:**
১. **\`queryPlanner\` (ডিফল্ট)**: এটি কোন কোন ইনডেক্স বিবেচনা করা হয়েছিল এবং কোনটিকে চূড়ান্ত বিজয়ী প্ল্যান হিসেবে সিলেক্ট করা হয়েছে তা দেখায়।
২. **\`executionStats\` (ডিবাগিংয়ের জন্য সেরা)**: কুয়েরিটি রান করে তার পারফরম্যান্স স্ট্যাটাস রিপোর্ট করে:
   - \`nReturned\`: কতটি ডকুমেন্ট খুঁজে ক্লায়েন্টকে দেওয়া হয়েছে।
   - \`totalKeysExamined\`: কতটি ইনডেক্স কী পড়া হয়েছে।
   - \`totalDocsExamined\`: কতটি ফাইল সরাসরি ডিস্ক থেকে রিড করতে হয়েছে।
৩. **\`allPlansExecution\`**: কুয়েরি অপ্টিমাইজ করার সময় অন্য সব ক্যান্ডিডেট প্ল্যানের মেথড স্ট্যাটাস দেখায়।

**মেট্রিক্স এনালাইসিস:**
- **আদর্শ অবস্থা**: \`totalKeysExamined\` $\approx$ \`nReturned\` এবং \`totalDocsExamined\` $\approx$ \`nReturned\`।
- **ঝুঁকিপূর্ণ অবস্থা**: \`totalDocsExamined\` $\gg$ \`nReturned\` (যেমন: ১০টি ডাটা রিটার্ন করতে গিয়ে ১০ লক্ষ ফাইল ডিস্ক থেকে পড়তে হয়েছে)। এর মানে ইনডেক্সিং কাজ করেনি।

### বাস্তব-ভিত্তিক উদাহরণ
একটি অর্ডারের লিস্ট লোড হতে ৫ সেকেন্ড সময় নিচ্ছে। কুয়েরির শেষে \`.explain("executionStats")\` যোগ করে চেক করে দেখলেন \`totalDocsExamined: 5000000\` এবং \`nReturned: 10\`। এর মানে ৫ লক্ষ ডাটা স্ক্যান করা হয়েছে মাত্র ১০টি অর্ডারের জন্য। অর্থাৎ ইউজার আইডির ওপর ইনডেক্স দেওয়া নেই।

### উত্তম অনুশীলন
এক্সিকিউশন স্টেজে সর্বদা **\`IXSCAN\`** (Index Scan) নিশ্চিত করুন এবং **\`COLLSCAN\`** (Collection Scan) বর্জন করুন।

### সাধারণ ভুলসমূহ
\`explain()\` মেথডের ভেতর \`executionStats\` প্যারামিটার পাস না করা। এর ফলে মঙ্গোডিবি শুধু ধারণাগত প্ল্যান দেখাবে কিন্তু বাস্তবে কত মিলিসেকেন্ড সময় বা কয়টি ফাইল স্ক্যান হয়েছে তা রিপোর্টে আসবে না।

### Code Example
\`\`\`javascript
// executionStats মোডে কুয়েরি এক্সপ্লেইন রান করা
const performanceDetails = db.orders.find({ 
  status: "completed",
  price: { $gte: 150 }
}).explain("executionStats");

// আউটপুট মেথড প্রিন্ট করা
printjson(performanceDetails.executionStats);
/*
আউটপুটের মূল অংশ:
{
  "executionSuccess": true,
  "nReturned": 25,
  "executionTimeMillis": 2, // কত মিলি-সেকেন্ড সময় লেগেছে
  "totalKeysExamined": 25,
  "totalDocsExamined": 25
}
*/
\`\`\``
  },
  {
    id: 'mongodb-37',
    title: 'Explain Read Concern vs. Write Concern in MongoDB cluster architectures.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Database Architecture', 'Write Concern', 'Read Concern', 'Clustering'],
    enAnswer: 'Write Concern configures the level of acknowledgment requested from MongoDB for write operations (e.g. w: 1, w: majority). Read Concern controls the consistency and isolation of data read from the replica set (e.g. local, majority, linearizable).',
    bnAnswer: 'রাইট কনসার্ন (Write Concern) রাইট অপারেশনের সময় ডাটাবেস কতটি নোড থেকে কনফার্মেশন রিসিভ করবে তা সেট করে (যেমন: w: 1, w: majority)। রিড কনসার্ন (Read Concern) রেপ্লিকা সেট থেকে ডেটা পড়ার সময় তার কনসিস্টেন্সি ও আইসোলেশন লেভেল কন্ট্রোল করে (যেমন: local, majority)।',
    enExplanation: `### Explanation
In a distributed MongoDB replica set, managing data safety and consistency requires configuring read and write thresholds.

**1. Write Concern (\`w\` and \`j\`):**
- Controls how secure a write must be before returning success:
  - \`w: 1\` (Default): Returns success once the primary node acknowledges the write in memory. Risks data loss if the primary crashes before replicating.
  - \`w: majority\`: Returns success only after the majority of replica set nodes write the data. Protects against rollbacks during failovers.
  - \`j: true\` (Journaling): Ensures the write is committed to the physical disk journal, guaranteeing crash recovery durability.

**2. Read Concern:**
- Controls what version of data is returned during queries:
  - \`local\` / \`available\` (Default): Returns the node's local copy of data, which might be rolled back if the primary crashes.
  - \`majority\`: Returns data acknowledged by the majority of replica set members, preventing dirty reads of data that could be rolled back.
  - \`linearizable\`: Prevents stale reads by forcing the primary to contact other nodes to confirm it is still the primary before returning data.

### Real-World Example
In a money transfer application, you must use \`w: majority\` and \`j: true\` for database writes to guarantee that a user's transfer is physically committed to disks across multiple servers, and \`readConcern: "majority"\` to prevent reading fake balances during failover elections.

### Best Practice
For standard logs or analytics, use \`w: 1\` and \`readConcern: "local"\` to maximize database speed. For financial, order checkouts, or user password updates, always enforce \`w: majority\` to prevent data loss.

### Common Mistakes
Using \`w: majority\` on a cluster with high latency connections without enabling asynchronous query handling, which slows down API response times due to wait durations.

### Code Example
\`\`\`javascript
// 1. Executing a write with strict write concern parameters
db.payments.insertOne(
  { transactionId: "TXN1002", amount: 250, status: "authorized" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
);

// 2. Querying with majority read concern
db.payments.find({ transactionId: "TXN1002" })
  .readConcern("majority");
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিস্ট্রিবিউটেড রেপ্লিকা সেটে ডাটার নিরাপত্তা ও ধারাবাহিকতা বজায় রাখার জন্য রিড ও রাইট থ্রেশহোল্ড ব্যবহার করা হয়।

**১. রাইট কনসার্ন (Write Concern - \`w\` ও \`j\`):**
- রাইট সাকসেস মেসেজ রিটার্ন করার সিকিউরিটি লেভেল নিয়ন্ত্রণ করে:
  - \`w: 1\` (ডিফল্ট): প্রাইমারি নোড ডাটা মেমোরিতে রিসিভ করলেই সাকসেস দেয়। প্রাইমারি নোড ক্র্যাশ করলে ডাটা হারানোর ঝুঁকি থাকে।
  - \`w: majority\`: রেপ্লিকা সেটের মেজরিটি (অধিকাংশ) সার্ভারে ডাটা রাইট হওয়ার পর রেসপন্স দেয়।
  - \`j: true\` (জার্নালিং): ডাটা ওএস র‍্যাম মেমোরি ছাড়াও ফিজিক্যাল হার্ডডিস্কের জার্নালে রাইট হওয়া নিশ্চিত করে।

**২. রিড কনসার্ন (Read Concern):**
- কুয়েরি করার সময় ডাটার কোন ভার্সন রিড করা হবে তা কন্ট্রোল করে:
  - \`local\` (ডিফল্ট): নোডের লোকাল মেমোরি থেকে ডাটা দেয়, যা অন্য নোডে সিঙ্ক নাও হতে পারে।
  - \`majority\`: শুধুমাত্র সেই ডাটা রিটার্ন করে যা মেজরিটি নোড দ্বারা কনফার্মড হয়ে গেছে। এটি ভুল বা বাসি ডাটা রিড করা বন্ধ করে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং বা পেমেন্ট অ্যাপে টাকা স্থানান্তরের সময় অবশ্যই \`w: majority\` এবং \`j: true\` ব্যবহার করবেন যাতে টাকা কাটার ট্রানজেকশনটি নিশ্চিতভাবে একাধিক সার্ভারের ডিস্কে সেভ হয় এবং \`readConcern: "majority"\` ব্যবহার করে সঠিক ব্যালেন্স রিড করবেন।

### উত্তম অনুশীলন
সাধারণ ওটিপি বা ট্র্যাকিং লগের জন্য \`w: 1\` ও \`local\` রিড ব্যবহার করুন স্পিড বৃদ্ধির জন্য। ফাইনাল মানি অর্ডার বা একাউন্ট চেঞ্জের কাজে ডাটা লস এড়াতে \`w: majority\` ব্যবহার বাধ্যতামূলক করুন।

### সাধারণ ভুলসমূহ
নেটওয়ার্ক কানেকশন ধীরগতির হওয়া সত্ত্বেও মেজরিটি কনসার্ন ব্যবহার করা এবং এপিআই টাইমআউট সেট না করা, যার ফলে কুয়েরি ব্লক হয়ে ব্যাকএন্ড এপিআই হ্যাং হয়ে যায়।

### Code Example
\`\`\`javascript
// ১. কঠোর রাইট কনসার্ন দিয়ে ডাটা ইনসার্ট করা
db.payments.insertOne(
  { transactionId: "TXN1002", amount: 250, status: "authorized" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } } // ৫ সেকেন্ডের টাইমআউট
);

// ২. মেজরিটি রিড কনসার্ন দিয়ে কুয়েরি করা
db.payments.find({ transactionId: "TXN1002" })
  .readConcern("majority");
\`\`\``
  },
  {
    id: 'mongodb-38',
    title: 'Explain the pipeline concept of MongoDB Aggregation Framework.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Aggregation', 'Pipeline', 'Database Query'],
    enAnswer: 'The MongoDB Aggregation Framework is structured as a pipeline of stages. Documents pass through these stages sequentially, where each stage transforms, filters, groups, or refines the documents before passing the output stream to the next stage.',
    bnAnswer: 'মঙ্গোডিবি এগ্রিগেশন ফ্রেমওয়ার্ক পাইপলাইনের ধারণা নিয়ে গঠিত। ডকুমেন্টগুলো ধারাবাহিকভাবে পাইপলাইনের বিভিন্ন স্টেজের মধ্য দিয়ে যায়, যেখানে প্রতিটি স্টেজ পরবর্তী স্টেজে আউটপুট পাঠানোর আগে ডাটা ট্রান্সফর্ম, ফিল্টার বা গ্রুপ করে।',
    enExplanation: `### Explanation
The Aggregation Framework is a powerful data processing engine in MongoDB, functioning similarly to Unix pipes (e.g. \`cat file.txt | grep "error" | wc -l\`).

**Key Core Properties of Aggregations:**
- **Linear Stage Processing**: You pass an array of stage objects: \`db.collection.aggregate([ { stage1 }, { stage2 }, { stage3 } ])\`.
- **Memory Boundaries**: By default, each stage is limited to **100MB of RAM**. If a sorting or grouping stage exceeds this limit, you must enable disk fallback:
\`\`\`javascript
db.collection.aggregate([...], { allowDiskUse: true })
\`\`\`
- **Database-Level Execution**: All computations occur inside the MongoDB database engine. This is significantly faster than pulling raw documents into Node.js and calculating averages/groups in JavaScript.

### Real-World Example
Suppose you run a reporting dashboard. To calculate the total sales of completed orders for the month:
1. **Stage 1 (\`$match\` )**: Filter orders placed in the last 30 days that are "completed".
2. **Stage 2 (\`$group\` )**: Group all matched documents together and sum their price fields.

### Best Practice
Always place filtering stages (like \`$match\` and \`$limit\`) at the very beginning of your aggregation pipeline. Reducing the document count early ensures subsequent stages use less memory and run faster.

### Common Mistakes
Running grouping or sorting operations as the first stage of aggregation before filtering, which loads the entire database collection into memory and results in out-of-memory query crashes.

### Code Example
\`\`\`javascript
// Aggregation pipeline: Calculate average price of active books
db.books.aggregate([
  // Stage 1: Match active books (uses indexes if placed first)
  { $match: { status: "active" } },
  
  // Stage 2: Group by genre and calculate average price
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  },
  
  // Stage 3: Sort by average price descending
  { $sort: { averagePrice: -1 } }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এগ্রিগেশন ফ্রেমওয়ার্ক হলো মঙ্গোডিবির অন্যতম শক্তিশালী ডাটা প্রসেসিং ইঞ্জিন যা ইউনিক্স পাইপলাইনের (Unix Pipes) মতো কাজ করে।

**এগ্রিগেশনের মূল বৈশিষ্ট্যসমূহ:**
১. **ধাপভিত্তিক প্রসেসিং**: এটি স্টেজ অবজেক্টের একটি অ্যারে গ্রহণ করে একের পর এক কাজ সম্পন্ন করে: \`db.collection.aggregate([ { স্টেজ১ }, { স্টেজ২ } ])\`।
২. **মেমোরি সীমা**: ডিফল্টভাবে প্রতিটি এগ্রিগেশন স্টেজ সর্বোচ্চ **১০০ মেগাবাইট র‍্যাম** ব্যবহার করতে পারে। সর্ট বা গ্রুপের কাজ এর চেয়ে বেশি মেমোরি নিলে ডিস্ক রাইট সক্রিয় করতে হয়:
\`\`\`javascript
db.collection.aggregate([...], { allowDiskUse: true })
\`\`\`
৩. **ডাটাবেস লেভেল এক্সিকিউশন**: সমস্ত ক্যালকুলেশন ডাটাবেসের ভেতরেই প্রসেস হয়। নোডজেএস-এ লাখ লাখ ডাটা এনে লুপ চালানোর চেয়ে এটি বহুগুণ দ্রুত কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সেলস ড্যাশবোর্ডে গত ৩০ দিনের মোট বিক্রির হিসাব দেখাতে:
১. **১ম স্টেজ (\`$match\`)**: কালেকশন থেকে গত ৩০ দিনের "completed" অর্ডারগুলো ফিল্টার করে আনা।
২. **২য় স্টেজ (\`$group\`)**: ফিল্টার হয়ে আসা অর্ডারগুলোর মোট দাম যোগ করা।

### উত্তম অনুশীলন
পাইপলাইনের একদম শুরুতে ফিল্টারিং স্টেজগুলো (\`$match\`, \`$limit\`) রাখুন। শুরুতে ডাটা কমিয়ে ফেললে পরবর্তী ভারী স্টেজগুলোর র‍্যাম মেমোরি খরচ অনেক কমে যায় ও দ্রুত কুয়েরি শেষ হয়।

### সাধারণ ভুলসমূহ
কোডের শুরুতে \`$match\` ব্যবহার না করে সরাসরি পাইপলাইনের প্রথম ধাপেই \`$group\` বা \`$sort\` চালানো, যা কালেকশনের সমস্ত ডাটা লোড করে র‍্যাম ক্র্যাশ ঘটাতে পারে।

### Code Example
\`\`\`javascript
// এগ্রিগেশন পাইপলাইন: একটিভ বইগুলোর জঁনরা-ভিত্তিক গড় দাম বের করা
db.books.aggregate([
  // ১ম স্টেজ: ফিল্টারিং (ইনডেক্স ব্যবহার করতে সবার আগে রাখা হয়েছে)
  { $match: { status: "active" } },
  
  // ২য় স্টেজ: গ্রুপ করে গড় হিসাব করা
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  },
  
  // ৩য় স্টেজ: গড় দামের ক্রমানুসারে সাজানো
  { $sort: { averagePrice: -1 } }
]);
\`\`\``
  },
  {
    id: 'mongodb-39',
    title: 'Explain the difference between $match and $group stages in MongoDB Aggregation.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Aggregation', 'Pipeline', 'Match Stage', 'Group Stage'],
    enAnswer: 'The $match stage filters documents to allow only matching records to pass to the next stage, utilizing database indexes if placed first. The $group stage collapses multiple documents into grouped summaries based on a defined group key (_id), calculating aggregate values using accumulators.',
    bnAnswer: '$match স্টেজটি ডকুমেন্টের ওপর ফিল্টার চালিয়ে শুধু ম্যাচিং রেকর্ডগুলোকে পরবর্তী স্টেজে পাঠায়। $group স্টেজটি নির্দিষ্ট গ্রুপ কি (_id)-র ওপর ভিত্তি করে একাধিক ডকুমেন্টকে একত্রিত করে গড় বা যোগফল হিসাব করে।',
    enExplanation: `### Explanation
- **\`$match\` Stage**:
  - Acts exactly like the standard \`find()\` query filter.
  - Passes documents unchanged; it only reduces the count of documents passing through.
  - Can take advantage of indexes (such as compound indexes) only if it is the first stage in the pipeline.
- **\`$group\` Stage**:
  - Combines separate records into a single summary document per unique key.
  - Changes the document shape completely. Output documents will only contain the \`_id\` (group key) and accumulator fields.
  - Accumulators include: \`$sum\`, \`$avg\`, \`$first\`, \`$last\`, \`$push\` (collects values into an array), and \`$addToSet\` (collects unique values).

### Real-World Example
In a global retail company:
- Use \`$match: { region: "Asia" }\` to select Asian stores data.
- Use \`$group: { _id: "$storeId", revenue: { $sum: "$saleAmount" } }\` to sum total revenue generated by each store.

### Best Practice
Verify that your \`$match\` stage is utilizing indexes by running \`.explain()\` on the aggregation command. Ensure that index scans are running for the initial matches.

### Common Mistakes
Confusing the output structure of \`$group\`. Remember that fields from the original documents (like \`price\`, \`name\`) are no longer directly accessible after a \`$group\` stage unless you explicitly save them inside the group using accumulators like \`$first\` or \`$push\`.

### Code Example
\`\`\`javascript
db.sales.aggregate([
  // 1. Match stage (Filters only completed sales)
  { $match: { status: "completed" } },

  // 2. Group stage (Calculates total items sold per product)
  {
    $group: {
      _id: "$productId", // Group key
      totalQty: { $sum: "$quantity" }, // Accumulator
      uniqueCustomers: { $addToSet: "$customerId" } // Collects unique customer IDs in array
    }
  }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **\`$match\` স্টেজ**:
  - এটি সাধারণ \`find()\` কুয়েরির মতো কাজ করে।
  - ডকুমেন্টের গঠন পরিবর্তন করে না; এটি শুধু পরবর্তী ধাপে যাওয়ার জন্য ফাইলের সংখ্যা কমিয়ে আনে।
  - পাইপলাইনের একদম শুরুতে থাকলে এটি ডাটাবেস ইনডেক্স ব্যবহারের সুযোগ পায়।
- **\`$group\` স্টেজ**:
  - ডুপ্লিকেট কি-এর ভিত্তিতে আলাদা আলাদা ফাইলকে একটি মাত্র সামারি ডকুমেন্টে মার্জ করে ফেলে।
  - ডকুমেন্টের রূপ সম্পূর্ণ বদলে দেয়। এর আউটপুটে শুধু গ্রুপ কি \`_id\` এবং হিসাবকৃত অন্যান্য সামারি ফিল্ড থাকে।
  - একুমুলেটর অপারেটরসমূহ: \`$sum\` (যোগ), \`$avg\` (গড়), \`$push\` (অ্যারেতে ডাটা জমানো), \`$addToSet\` (অ্যারেতে ইউনিক ডাটা জমানো)।

### বাস্তব-ভিত্তিক উদাহরণ
সুপারশপ কালেকশনে:
- এশিয়ার শাখাগুলো ফিল্টার করতে \`$match: { region: "Asia" }\` ব্যবহার করবেন।
- প্রতিটি আউটলেটের মোট সেলস মেলাতে \`$group: { _id: "$storeId", revenue: { $sum: "$saleAmount" } }\` ব্যবহার করবেন।

### উত্তম অনুশীলন
ইনডেক্স সচল রাখতে এগ্রিগেশনের প্রথমে \`$match\` ব্যবহার করুন। কুয়েরির শেষে \`explain()\` রান করে ইনডেক্স স্ক্যান চেক করে নেওয়া ভালো।

### সাধারণ ভুলসমূহ
গ্রুপ স্টেজের আউটপুট ডিজাইন বুঝতে ভুল করা। মনে রাখবেন, গ্রুপ স্টেজ চালুর পর ডকুমেন্টের অরিজিনাল কোনো ফিল্ড (যেমন: \`price\`, \`name\`) সরাসরি পড়া যায় না, যতক্ষণ না আপনি একুমুলেটর (যেমন: \`$first\`) দিয়ে তাকে সেভ করে রাখছেন।

### Code Example
\`\`\`javascript
db.sales.aggregate([
  // ১. Match স্টেজ: শুধু সফল বিক্রি হওয়া অর্ডারগুলো নেওয়া
  { $match: { status: "completed" } },

  // ২. Group স্টেজ: প্রোডাক্ট আইডি অনুযায়ী মোট পরিমাণ হিসাব
  {
    $group: {
      _id: "$productId", // প্রোডাক্টের ওপর গ্রুপ করা হলো
      totalQty: { $sum: "$quantity" }, // মোট বিক্রি হওয়া পরিমাণ যোগ
      uniqueCustomers: { $addToSet: "$customerId" } // ইউনিক কাস্টমার আইডি নিয়ে অ্যারে তৈরি
    }
  }
]);
\`\`\``
  },
  {
    id: 'mongodb-40',
    title: 'Explain the purpose and function of the $unwind stage in MongoDB Aggregation.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Aggregation', 'Pipeline', 'Unwind Stage', 'Arrays'],
    enAnswer: 'The $unwind stage deconstructs an array field from input documents to output a separate document for each element in the array. This allows you to run aggregation operations (like grouping or filtering) on individual array items.',
    bnAnswer: '$unwind স্টেজটি ইনপুট ডকুমেন্টের একটি অ্যারে ফিল্ডকে ভেঙে অ্যারের প্রতিটি উপাদানের জন্য আলাদা আলাদা ডকুমেন্ট তৈরি করে আউটপুট দেয়। এর সাহায্যে অ্যারের প্রতিটি উপাদানের ওপর এগ্রিগেশন কুয়েরি চালানো সম্ভব হয়।',
    enExplanation: `### Explanation
When you have documents containing arrays of values, you cannot directly perform operations like sorting, grouping, or matching on individual array elements. The \`$unwind\` stage solves this.

**How it works:**
If a document is:
\`\`\`javascript
{ _id: 1, item: "Shirt", sizes: ["S", "M"] }
\`\`\`
Applying \`{ $unwind: "$sizes" }\` splits it into two separate documents:
\`\`\`javascript
{ _id: 1, item: "Shirt", sizes: "S" }
{ _id: 1, item: "Shirt", sizes: "M" }
\`\`\`

**Useful Options:**
- \`preserveNullAndEmptyArrays: true\`: By default, if the array field is missing or empty, \`$unwind\` discards the document. Enabling this option retains the document with the array field set to \`null\`.

### Real-World Example
In a blogging system, to generate a tag cloud listing the count of posts written for each unique tag (where tags are stored as a string array inside each post: \`tags: ["tech", "coding"]\`):
- Unwind the \`tags\` array, then group by tag name and calculate total sums using \`$sum: 1\`.

### Best Practice
Only unwind arrays when necessary. Unwinding large arrays multiplies the document count inside the pipeline, which increases memory consumption. Always filter documents using \`$match\` *before* running \`$unwind\` to keep document count minimal.

### Common Mistakes
Unwinding an array that contains missing or empty values without setting \`preserveNullAndEmptyArrays: true\`, which silently deletes those parent documents from the aggregation pipeline.

### Code Example
\`\`\`javascript
// Aggregation: Find the total quantity sold for each shirt size
db.orders.aggregate([
  // 1. Filter only shirt categories
  { $match: { category: "Shirts" } },

  // 2. Unwind the sizes array
  { $unwind: "$sizes" },

  // 3. Group by size name and sum quantities
  {
    $group: {
      _id: "$sizes",
      totalSold: { $sum: "$quantity" }
    }
  }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
যখন কোনো ডকুমেন্টের ভেতর কোনো অ্যারে ফিল্ড থাকে, তখন ওই অ্যারের ভেতরের উপাদানগুলোর ওপর সর্ট বা গ্রুপ চালানো কঠিন। \`$unwind\` স্টেজটি এই সমস্যার সমাধান করে।

**কাজের উদাহরণ:**
যদি কালেকশনে একটি ফাইল থাকে:
\`\`\`javascript
{ _id: 1, item: "Shirt", sizes: ["S", "M"] }
\`\`\`
\`{ $unwind: "$sizes" }\` অ্যাপ্লাই করলে এটি দুটি আলাদা ফাইলে ভেঙে যাবে:
\`\`\`javascript
{ _id: 1, item: "Shirt", sizes: "S" }
{ _id: 1, item: "Shirt", sizes: "M" }
\`\`\`

**প্রয়োজনীয় সেটিংস:**
- \`preserveNullAndEmptyArrays: true\`: ডিফল্টভাবে অ্যারে ফাঁকা থাকলে বা না থাকলে \`$unwind\` ওই পুরো ডকুমেন্টটি আউটপুট থেকে বাদ দিয়ে দেয়। এই সেটিংসটি অন রাখলে ফাঁকা অ্যারে থাকা সত্ত্বেও ডকুমেন্টটি বাদ যাবে না, ফিল্ডের মান \`null\` হয়ে থাকবে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের ট্যাগের লিস্টের পরিসংখ্যান তৈরি করতে চান (যেখানে পোস্টের ভেতর ট্যাগ অ্যারে আকারে আছে: \`tags: ["tech", "coding"]\`):
- প্রথমে ট্যাগ অ্যারেটি \`$unwind\` দিয়ে ভেঙে নিন, এরপর ট্যাগ অনুযায়ী গ্রুপ করে মোট পোস্ট সংখ্যা হিসাব করুন।

### উত্তম অনুশীলন
প্রয়োজন ছাড়া অপ্রয়োজনীয় অ্যারে আনওয়াইন্ড করবেন না। বড় অ্যারে আনওয়াইন্ড করলে পাইপলাইনে ফাইলের সংখ্যা বহুগুণ বেড়ে যায় যা মেমোরি খরচ বাড়ায়। সর্বদা পাইপলাইনের প্রথমে \`$match\` দিয়ে ফিল্টার করে ফাইল কমিয়ে নিয়ে তবেই \`$unwind\` করুন।

### সাধারণ ভুলসমূহ
ফাঁকা বা নাল অ্যারে রয়েছে এমন ফাইলে \`preserveNullAndEmptyArrays: true\` সেট না করে \`$unwind\` চালানো। এর ফলে কিছু ফাইল আউটপুট থেকে সম্পূর্ণ গায়েব হয়ে যাবে যা আপনি হয়তো টেরই পাবেন না।

### Code Example
\`\`\`javascript
// এগ্রিগেশন: শার্টের প্রতিটি সাইজ কতটি করে বিক্রি হয়েছে তা বের করা
db.orders.aggregate([
  // ১. শার্ট ক্যাটাগরি ফিল্টার করা
  { $match: { category: "Shirts" } },

  // ২. সাইজ অ্যারে আনওয়াইন্ড করা (ভেঙে সিঙ্গেল করা)
  { $unwind: "$sizes" },

  // ৩. সাইজের ওপর গ্রুপ করে মোট বিক্রি যোগ করা
  {
    $group: {
      _id: "$sizes",
      totalSold: { $sum: "$quantity" }
    }
  }
]);
\`\`\``
  },
  {
    id: 'mongodb-41',
    title: 'Explain the function and syntax of the $lookup stage in MongoDB Aggregation.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Aggregation', 'Pipeline', 'Lookup Stage', 'Joins'],
    enAnswer: 'The $lookup stage performs a left outer join to combine documents from another collection on a matching field. Its syntax requires defining the target collection (from), local matching field (localField), foreign matching field (foreignField), and output array name (as).',
    bnAnswer: '$lookup স্টেজটি অন্য একটি কালেকশন থেকে ডাটা এনে সমতার ভিত্তিতে জয়েন (Left Outer Join) সম্পন্ন করে। এর সিনট্যাক্সে টার্গেট কালেকশন (from), লোকাল ফিল্ড (localField), ফরেন ফিল্ড (foreignField) এবং আউটপুট অ্যারের নাম (as) উল্লেখ করতে হয়।',
    enExplanation: `### Explanation
Since MongoDB is document-oriented, joining collections is handled at the query level using the \`$lookup\` stage.

**Classic Syntax Structure:**
\`\`\`javascript
{
  $lookup: {
    from: "foreignCollection", // Collection to join
    localField: "localField",  // Field from input documents
    foreignField: "foreignField", // Field from foreign documents
    as: "outputArray" // Name of the array field to append
  }
}
\`\`\`
- **Left Outer Join Behavior**: If no matching documents are found in the foreign collection, the \`as\` field is still appended to the document as an empty array \`[]\`.
- **Complex Lookup**: In modern MongoDB, you can use \`let\` and \`pipeline\` inside \`$lookup\` to execute complex nested aggregation queries on the target collection instead of standard field matching.

### Real-World Example
In a forum app, you store posts in a \`posts\` collection and user details in a \`users\` collection. To load posts and append the author's profile details:
- Lookup from the \`users\` collection, matching \`authorId\` (local) with \`_id\` (foreign).

### Best Practice
Always create an index on the \`foreignField\` in the target collection. When \`$lookup\` runs, it executes search queries on the target collection for every document passing through. If the foreign field is not indexed, it will cause slow collection scans for each matched record.

### Common Mistakes
Forgetting that the output of \`$lookup\` is **always an array**, even if there is only a single matching document (like matching a user by unique ID). You must chain a \`$unwind\` stage or use array operators to convert the array back into a single object.

### Code Example
\`\`\`javascript
// Fetch orders and join user profile details
db.orders.aggregate([
  { $match: { status: "shipped" } },
  
  // Join users collection
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "customerDetails"
    }
  },
  
  // Flatten the customerDetails array (since there is only 1 matching user)
  { $unwind: "$customerDetails" }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির জয়েনিং কুয়েরি প্রসেস করার জন্য এগ্রিগেশন পাইপলাইনে \`$lookup\` স্টেজটি ব্যবহৃত হয়।

**সাধারণ সিনট্যাক্স গঠন:**
\`\`\`javascript
{
  $lookup: {
    from: "foreignCollection", // যে কালেকশন থেকে ডাটা আনা হবে
    localField: "localField",  // বর্তমান ডকুমেন্টের আইডি/ফিল্ড
    foreignField: "foreignField", // ওপাশের কালেকশনের আইডি/ফিল্ড
    as: "outputArray" // যে নতুন অ্যারে নামে ডাটা স্টোর হবে
  }
}
\`\`\`
- **Left Outer Join**: ওপাশের টেবিলে কোনো ডাটা না মিললে আউটপুট প্রপার্টি ফাঁকা অ্যারে \`[]\` হিসেবেই ফায়ার হবে।
- **জটিল লুকআপ**: আধুনিক মঙ্গোডিবির \`$lookup\`-এর ভেতর সাব-পাইপলাইন (\`pipeline\`) চালানো যায়, যা ডাটা ম্যাচ করার আগেই ওপাশের ফাইলে কাস্টম ফিল্টার রান করার সুবিধা দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ বা ফোরাম সাইটে পোস্টগুলো \`posts\` কালেকশনে এবং রাইটারের তথ্য \`users\` কালেকশনে রাখা আছে। পোস্ট দেখানোর সময় রাইটারের ছবি ও নাম ডাটাতে যোগ করতে:
- \`users\` কালেকশন থেকে লুকআপ করে \`authorId\` (লোকাল) এবং \`_id\` (ফরেন) ম্যাচ করতে হবে।

### উত্তম অনুশীলন
টার্গেট কালেকশনের \`foreignField\`-এর ওপর অবশ্যই ইনডেক্স তৈরি করে রাখুন। \`$lookup\` চালানোর সময় প্রতি ডকুমেন্টের বিপরীতে মঙ্গোডিবি ওপাশের কালেকশনে সার্চ কুয়েরি ফায়ার করে। ইনডেক্স না থাকলে প্রতিটি ম্যাচের জন্য ওপাশে COLLSCAN হবে যা ডাটাবেসকে ক্র্যাশ করাবে।

### সাধারণ ভুলসমূহ
লুকআপের আউটপুট সর্বদা **একটি অ্যারে** তৈরি করে। কুয়েরিতে যদি মাত্র একটি ম্যাচও থাকে (যেমন নির্দিষ্ট ইউজারের আইডি), তবুও তা অবজেক্ট না হয়ে অ্যারে হয়ে থাকবে। এটিকে সিঙ্গেল অবজেক্টে কনভার্ট করতে লুকআপের পরপরই \`$unwind\` ব্যবহার করা উচিত।

### Code Example
\`\`\`javascript
// অর্ডার ফাইলের সাথে কাস্টমারের প্রোফাইল জয়েন করা
db.orders.aggregate([
  { $match: { status: "shipped" } },
  
  // ইউজার কালেকশন জয়েন করা হচ্ছে
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "customerDetails"
    }
  },
  
  // অ্যারে ফ্ল্যাট করা (যেহেতু ১টি অর্ডারে ১জন কাস্টমারই থাকবে)
  { $unwind: "$customerDetails" }
]);
\`\`\``
  },
  {
    id: 'mongodb-42',
    title: 'Explain the function of $sort, $count, and $facet stages in MongoDB Aggregation.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Aggregation', 'Pipeline', 'Facet Stage', 'Performance'],
    enAnswer: '$sort orders documents based on fields. $count returns a count of the documents passing through the stage. $facet runs multiple independent aggregation sub-pipelines concurrently on the same input documents, enabling faceted search.',
    bnAnswer: '$sort ফিল্ডের মানের ভিত্তিতে ডকুমেন্ট সাজায়। $count পাইপলাইনের এই ধাপে মোট কতটি ডকুমেন্ট এসেছে তা সংখ্যায় রিটার্ন করে। $facet একই ইনপুট ডকুমেন্টের ওপর একাধিক স্বাধীন সাব-পাইপলাইন সমান্তরালে চালিয়ে ফেসেটেড সার্চের সুবিধা দেয়।',
    enExplanation: `### Explanation
These aggregation stages are vital for reporting and dashboards:

- **\`$sort\` Stage**: Sorts the stream of documents. If placed after grouping stages, it runs in memory (limited to 100MB RAM unless \`allowDiskUse\` is enabled).
- **\`$count\` Stage**: Counts the documents and outputs a single record containing the count, e.g. \`{ count: 150 }\`. It terminates prior document structures.
- **\`$facet\` Stage**:
  - Allows you to perform multiple calculations in a single query.
  - Useful for search filters where you want to show both the matching items list AND category statistical breakdowns at the same time.

### Real-World Example
In a shopping product filter sidebar, when a user searches for "shoes", you want to:
1. Show the first 10 matching products (Pagination).
2. Show the count of matches per brand (Brand counts).
Without \`$facet\`, you would have to run two separate database queries. With \`$facet\`, you write a single aggregation pipeline with two parallel branches.

### Best Practice
Minimize data passing into the \`$facet\` stage. Since \`$facet\` processes multiple sub-pipelines in parallel in memory, running it on massive, unfiltered collections will cause performance drops. Always place a \`$match\` stage before running a facet.

### Common Mistakes
Forgetting that the output of \`$facet\` wraps all results inside arrays. You must process this output structure carefully in your backend code.

### Code Example
\`\`\`javascript
db.products.aggregate([
  { $match: { category: "Electronics" } },
  
  // Run parallel analyses
  {
    $facet: {
      "paginatedResults": [
        { $sort: { price: 1 } },
        { $skip: 0 },
        { $limit: 2 }
      ],
      "brandStats": [
        { $group: { _id: "$brand", count: { $sum: 1 } } }
      ]
    }
  }
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিপোর্টিং ও ড্যাশবোর্ডের কাজ সম্পন্ন করতে এই এগ্রিগেশন স্টেজগুলো ব্যবহৃত হয়:

- **\`$sort\` স্টেজ**: পাইপলাইনের ডকুমেন্টগুলোকে নির্দিষ্ট অর্ডারে সাজায়। এটি প্রথম ধাপে না থাকলে ইন-মেমোরি সর্ট ব্যবহার করে (যা সর্বোচ্চ ১০০ এমবি লিমিট পায়)।
- **\`$count\` স্টেজ**: এই ধাপ পর্যন্ত কতটি ফাইল এসেছে তা কাউন্ট করে একটি সিঙ্গেল অবজেক্ট দেয় (যেমন: \`{ count: 150 }\`)। পূর্ববর্তী ফাইলের রূপ এটি ধুয়ে মুছে ফেলে।
- **\`$facet\` স্টেজ**:
  - এটি এক কুয়েরির ভেতর একাধিক সমান্তরাল বা প্যারালাল সাব-পাইপলাইন চালানোর সুযোগ দেয়।
  - এটি ফিল্টারিং ড্যাশবোর্ড তৈরির জন্য অত্যন্ত শক্তিশালী।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স ফিল্টার সাইডবারে ইউজার "shoes" লিখে সার্চ দিল। আমরা এক কুয়েরিতেই চাই:
১. প্রথম ১০টি প্রোডাক্টের তালিকা (Pagination)।
২. ব্র্যান্ড-ভিত্তিক প্রোডাক্টের পরিসংখ্যান (যেমন: নাইকি ২০টি, এডিডাস ১৫টি)।
\`$facet\` ব্যবহার করে আপনি একটি মাত্র কুয়েরির ভেতর দুটি আলাদা পাইপলাইন ব্র্যান্ড ও রেজাল্ট একই সাথে রান করতে পারবেন।

### উত্তম অনুশীলন
\`$facet\` রান করার আগে কালেকশন ছোট করতে \`$match\` ব্যবহার করুন। বড় ও আন-ফিল্টারড ডাটাতে ফেসেট চালালে সার্ভারের মেমোরিতে অতিরিক্ত প্রসেস লোড তৈরি হয়।

### সাধারণ ভুলসমূহ
মনে রাখা যে \`$facet\`-এর আউটপুট সমস্ত রেজাল্টকে আলাদা আলাদা অ্যারে কি-তে র‍্যাপ করে রিটার্ন করে। ব্যাকএন্ডে রিসিভ করার সময় এই স্ট্রাকচার অনুযায়ী ডাটা ম্যাপ করতে হয়।

### Code Example
\`\`\`javascript
db.products.aggregate([
  { $match: { category: "Electronics" } },
  
  // প্যারালাল সাব-পাইপলাইন চালানো হচ্ছে
  {
    $facet: {
      "paginatedResults": [
        { $sort: { price: 1 } },
        { $skip: 0 },
        { $limit: 2 }
      ],
      "brandStats": [
        { $group: { _id: "$brand", count: { $sum: 1 } } }
      ]
    }
  }
]);
\`\`\``
  },
  {
    id: 'mongodb-43',
    title: 'What is Mongoose Population and what are its performance implications?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Population', 'Performance', 'Database Query'],
    enAnswer: 'Mongoose Population is an application-level join mechanism that automatically replaces referenced ObjectIDs in documents with full documents from other collections. Its primary implication is that it executes separate query calls behind the scenes, making it slower than native database joins.',
    bnAnswer: 'Mongoose পপুলেশন (Population) হলো অ্যাপ্লিকেশন-লেভেলের জয়েন মেকানিজম যা ডকুমেন্টে থাকা রেফারেন্সড ObjectIDs-কে অন্য কালেকশনের সম্পূর্ণ তথ্য দিয়ে প্রতিস্থাপন করে। এর প্রধান সমস্যা হলো এটি নেপথ্যে আলাদা আলাদা কুয়েরি ফায়ার করে যা মঙ্গোডিবির নেটিভ জয়েনের চেয়ে ধীরগতির।',
    enExplanation: `### Explanation
Although Mongoose's \`.populate()\` syntax feels like a SQL JOIN, it operates very differently.

**How Mongoose Population Works:**
1. You run \`Order.find().populate('userId')\`.
2. Mongoose queries the \`orders\` collection and gets the order documents.
3. It extracts all unique \`userId\` ObjectIDs from the results.
4. Mongoose automatically runs a *second* separate query on the \`users\` collection: \`User.find({ _id: { $in: [id1, id2, ...] } })\`.
5. It maps the returned user objects back into the parent order documents in memory before returning them to your application.

**Performance Implications:**
- **N+1 Query Issue**: If not handled properly, population can trigger dozens of database roundtrips.
- **Memory Consumption**: Merging documents in Node.js memory consumes application CPU and RAM compared to having the database engine run native aggregation joins (\`$lookup\`).

### Real-World Example
In a high-traffic social media feed API, running \`.populate('comments')\` on 50 posts will cause multiple parallel database roundtrips to retrieve comments, which can slow down your homepage API speed.

### Best Practice
Only use \`.populate()\` for simple queries where request throughput is low. For high-volume read APIs or complex reporting metrics, use MongoDB's native aggregation \`$lookup\` stage, which joins collections in C++ database memory directly.

### Common Mistakes
Nesting deep populate calls (e.g. \`populate({ path: 'orders', populate: { path: 'products', populate: 'vendor' } })\`), which can freeze your Node.js thread as it waits for multiple sequential database network calls to resolve.

### Code Example
\`\`\`javascript
// Mongoose Schema Reference Definition
const orderSchema = new mongoose.Schema({
  productName: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});

const Order = mongoose.model('Order', orderSchema);

// Executing Population in query
async function getOrderDetails() {
  const orders = await Order.find({ productName: "Laptop" })
    .populate('userId', 'username email'); // Populates only username and email fields
  console.log(orders);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose-এর \`.populate()\` কোড দেখতে SQL JOIN-এর মতো হলেও এর কার্যপ্রণালী সম্পূর্ণ ভিন্ন।

**পপুলেশন যেভাবে কাজ করে:**
১. আপনি কুয়েরি চালালেন \`Order.find().populate('userId')\`।
২. মঙ্গুস প্রথমে অর্ডার কালেকশন থেকে ডাটা তুলে আনে।
৩. এরপর সে অর্ডারগুলোর ভেতর থাকা সব ইউনিক \`userId\` অবজেক্টআইডি ফিল্টার করে নেয়।
৪. মঙ্গুস অটোমেটিক ডাটাবেসে ২য় আরেকটি কুয়েরি পাঠায়: \`User.find({ _id: { $in: [...] } })\`।
৫. ওখান থেকে কাস্টমারদের ডাটা নিয়ে নোডজেএস মেমোরির ভেতর অর্ডারের অবজেক্টে রি-ম্যাপ করে আপনাকে ফাইনাল রেজাল্ট দেয়।

**পারফরম্যান্সের প্রভাব:**
- **N+1 Query সমস্যা**: প্রতিবার কুয়েরি করার পর লুপের ভেতর পপুলেট চালালে সার্ভারে ডজন ডজন অপ্রয়োজনীয় ডাটাবেস রিকোয়েস্ট হিট করে।
- **মেমোরি ব্যবহার**: ওএস র‍্যামে ডাটা মার্জ করায় জাভাস্ক্রিপ্ট ইঞ্জিনের ওপর লোড বাড়ে, যেখানে ডাটাবেসের নেটিভ জয়েন (\`$lookup\`) অনেক সাশ্রয়ী।

### বাস্তব-ভিত্তিক উদাহরণ
সোশ্যাল মিডিয়া ফিডে ৫০টি পোস্ট লোড করার সময় প্রতিটি পোস্টের জন্য \`.populate('comments')\` কল করলে ব্যাকগ্রাউন্ডে প্রচুর ডাটাবেস নেটওয়ার্ক কল তৈরি হবে, যা আপনার হোমপেজ লোডিং স্পিড ধীর করে দেবে।

### উত্তম অনুশীলন
কম ট্রাফিকের ব্যাকএন্ডের সাধারণ কাজের জন্য পপুলেট ব্যবহার করুন। কিন্তু হাই-ভলিউম রিড এপিআই বা ড্যাশবোর্ড রিপোর্টিংয়ের জন্য মঙ্গোডিবির নেটিভ এগ্রিগেশন \`$lookup\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
নেস্টেড ডিপ পপুলেট কল করা (যেমন: অর্ডারের ভেতর প্রোডাক্ট পপুলেট, তার ভেতর ভেন্ডর পপুলেট)। এটি নোডজেএস থ্রেডকে ব্লক করে রাখে কারণ তাকে ক্রমানুসারে একের পর এক নেটওয়ার্ক ডিক্লেয়ারেশন রেজাল্ট পেতে হয়।

### Code Example
\`\`\`javascript
// মঙ্গুস স্কিমা রেফারেন্স ডেফিনিশন
const orderSchema = new mongoose.Schema({
  productName: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // ইউজার মডেলের রেফারেন্স
});

const Order = mongoose.model('Order', orderSchema);

// কুয়েরিতে পপুলেশন ব্যবহার করার নিয়ম
async function getOrderDetails() {
  const orders = await Order.find({ productName: "Laptop" })
    .populate('userId', 'username email'); // শুধু ইউজারনেম ও ইমেইল ফিল্ড পপুলেট করবে
  console.log(orders);
}
\`\`\``
  },
  {
    id: 'mongodb-44',
    title: 'Explain document-level vs. query-level middlewares in Mongoose.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Middleware', 'Database Design'],
    enAnswer: 'Document-level middleware hooks bind this to the active document instance (supporting save, init, validate, remove). Query-level middleware hooks bind this to the query builder instance (supporting find, update, delete, count), meaning individual documents cannot be mutated directly in the hook.',
    bnAnswer: 'ডকুমেন্ট-লেভেল মিডলওয়্যার \`this\` কে সরাসরি ডকুমেন্টের অবজেক্টের সাথে যুক্ত করে (save, validate সাপোর্ট করে)। কুয়েরি-লেভেল মিডলওয়্যার \`this\` কে মঙ্গুস কুয়েরি বিল্ডারের সাথে বাইন্ড করে (find, update সাপোর্ট করে), ফলে সরাসরি হুকের ভেতর কোনো ডকুমেন্ট অবজেক্ট মডিফাই করা যায় না।',
    enExplanation: `### Explanation
Mongoose middleware hooks execute at different operational scopes.

**1. Document Middleware:**
- Triggered by document actions like \`doc.save()\`, \`doc.validate()\`.
- Inside the hook, \`this\` is the **Document object**. You can read and write properties directly (e.g. \`this.password = hash\`).

**2. Query Middleware:**
- Triggered by model queries like \`Model.find()\`, \`Model.findOneAndUpdate()\`, \`Model.updateMany()\`.
- Inside the hook, \`this\` is the **Query object** (the query builder). You cannot access the document properties because the documents have not been retrieved or instantiated yet.
- To modify the update payload in query middleware, you must inspect the update object using \`this.getUpdate()\`.

### Real-World Example
If you want to auto-slugify a title before saving, use document middleware (\`pre('save')\`) because you need access to the document's title: \`this.slug = slugify(this.title)\`. If you want to automatically append a \`{ deleted: false }\` filter to all \`find\` queries to implement soft-deletes, use query middleware (\`pre('find')\`).

### Best Practice
Understand what \`this\` represents in each hook. If you write a pre-update hook for query methods (like \`findOneAndUpdate\`), use \`this.getUpdate()\` to read and modify the payload data atomically.

### Common Mistakes
Using \`this.title\` inside a query middleware like \`pre('updateOne')\`. Since \`this\` is the query builder, \`this.title\` will evaluate to \`undefined\`, causing bugs or runtime crashes.

### Code Example
\`\`\`javascript
const schema = new mongoose.Schema({ title: String, slug: String, active: Boolean });

// 1. Document Middleware: 'this' is the document
schema.pre('save', function(next) {
  this.slug = this.title.toLowerCase().replace(/ /g, '-');
  next();
});

// 2. Query Middleware: 'this' is the query builder
schema.pre('find', function(next) {
  // Automatically filter out inactive documents from all queries
  this.where({ active: true });
  next();
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose-এ মিডলওয়্যার রান করার সময় অপারেশনের ওপর ভিত্তি করে \`this\` এর স্কোপ বদলে যায়।

**১. ডকুমেন্ট মিডলওয়্যার (Document Middleware):**
- এটি \`doc.save()\`, \`doc.validate()\` মেথড দ্বারা ট্রিগার হয়।
- হুকের ভেতর \`this\` হলো স্বয়ং **ডকুমেন্ট অবজেক্ট**। আপনি সরাসরি ফিল্ডের মান পড়তে ও লিখতে পারবেন (যেমন: \`this.password = hash\`)।

**২. কোয়েরি মিডলওয়্যার (Query Middleware):**
- এটি \`Model.find()\`, \`Model.updateMany()\` এর মতো কুয়েরি মেথডে রান করে।
- হুকের ভেতর \`this\` হলো **কোয়েরি বিল্ডার অবজেক্ট**। জাভাস্ক্রিপ্ট অবজেক্ট মেমোরিতে ক্রিয়েট না হওয়ায় এখানে ডকুমেন্টের প্রপার্টি রিড করা যায় না।
- আপডেটের ডাটা দেখতে বা পরিবর্তন করতে এখানে \`this.getUpdate()\` মেথড ব্যবহার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
টাইটেল থেকে ইউআরএল ফ্রেন্ডলি স্ল্যাগ তৈরি করতে ডকুমেন্ট মিডলওয়্যার \`pre('save')\` ব্যবহার করবেন, কারণ আপনার \`this.title\` রিড করা প্রয়োজন। আর সিস্টেমে সফট-ডিলিট চালু করতে (প্রতিটি ফাইন্ড কুয়েরিতে অটোমেটিক \`{ deleted: false }\` কন্ডিশন যোগ করতে) কুয়েরি মিডলওয়্যার \`pre('find')\` ব্যবহার করবেন।

### উত্তম অনুশীলন
কোন হুকে \`this\` কী নির্দেশ করে তা নিশ্চিত হোন। কুয়েরি আপডেটে হুক চালাতে চাইলে \`this.getUpdate()\` দিয়ে রিড-রাইট অপারেশন হ্যান্ডেল করুন।

### সাধারণ ভুলসমূহ
\`pre('updateOne')\`-এর মতো কুয়েরি হুকের ভেতর সরাসরি \`this.title\` অ্যাক্সেস করার চেষ্টা করা। কুয়েরি হুকে টাইটেল রিড করতে গেলে তা \`undefined\` রিটার্ন করবে ও স্ল্যাগ তৈরি হবে না।

### Code Example
\`\`\`javascript
const schema = new mongoose.Schema({ title: String, slug: String, active: Boolean });

// ১. ডকুমেন্ট মিডলওয়্যার: 'this' হলো ডকুমেন্ট অবজেক্ট
schema.pre('save', function(next) {
  this.slug = this.title.toLowerCase().replace(/ /g, '-');
  next();
});

// ২. কুয়েরি মিডলওয়্যার: 'this' হলো কুয়েরি বিল্ডার
schema.pre('find', function(next) {
  // প্রতিটি কুয়েরিতে অটোমেটিক একটিভ ফিল্টার যোগ করা
  this.where({ active: true });
  next();
});
\`\`\``
  },
  {
    id: 'mongodb-45',
    title: 'Explain database transactions and session management in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Database Architecture', 'Transactions', 'ACID', 'Sessions'],
    enAnswer: 'MongoDB supports multi-document ACID transactions using sessions (startSession()). Transactions group multiple write operations together; either all operations succeed and commit, or all operations fail and rollback, maintaining data consistency.',
    bnAnswer: 'মঙ্গোডিবি সেশন (startSession()) ব্যবহার করে মাল্টি-ডকুমেন্ট ACID ট্রানজেকশন সমর্থন করে। ট্রানজেকশন একাধিক রাইট অপারেশনকে গ্রুপ করে; হয় সবগুলো অপারেশন সফল হয়ে কমিট হবে, অন্যথায় সবগুলো বাতিল বা রোলব্যাক হবে।',
    enExplanation: `### Explanation
Prior to version 4.0, MongoDB did not support ACID transactions across multiple documents. Applications had to rely on two-phase commits. Modern MongoDB supports native ACID transactions within replica sets and sharded clusters.

**Transactions Workflow using Sessions:**
1. **Create Session**: Call \`const session = await client.startSession()\` or \`mongoose.startSession()\`.
2. **Start Transaction**: Call \`session.startTransaction()\`.
3. **Execute Queries**: Pass the \`session\` object as an option to every query (e.g. \`User.create([payload], { session })\`).
4. **Commit/Abort**:
   - If all queries succeed, call \`session.commitTransaction()\`.
   - If any query fails, call \`session.abortTransaction()\` to rollback all changes.
5. **End Session**: Call \`session.endSession()\`.

### Real-World Example
In a banking balance transfer:
- Node.js must deduct $100 from Account A, and add $100 to Account B.
- If Account A is successfully deducted, but the server crashes before Account B is credited, the money disappears.
- Wrapping both updates in a transaction guarantees that if crediting Account B fails, Account A's deduction is rolled back automatically.

### Best Practice
Keep transactions short and lightweight. Since transactions lock modified documents during execution, long-running transactions (exceeding the default 60-second limit) degrade database performance and throw transaction errors.

### Common Mistakes
Forgetting to pass the \`{ session }\` options object to every query within the transaction block. Queries executed without the session options will run outside the transaction pipeline and will not be rolled back on failures.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function transferFunds(fromId, toId, amount) {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    // 1. Deduct from sender (Pass session in options)
    await Account.updateOne(
      { _id: fromId, balance: { $gte: amount } },
      { $inc: { balance: -amount } },
      { session }
    );

    // 2. Add to receiver (Pass session in options)
    await Account.updateOne(
      { _id: toId },
      { $inc: { balance: amount } },
      { session }
    );

    // Commit all changes
    await session.commitTransaction();
    console.log('Transaction completed successfully.');
  } catch (err) {
    // Rollback all database writes on failure
    await session.abortTransaction();
    console.error('Transaction aborted due to error:', err);
  } finally {
    session.endSession();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি ৪.০ ভার্সনের পূর্বে মাল্টি-ডকুমেন্ট ট্রানজেকশন সাপোর্ট করতো না। বর্তমানে রেপ্লিকা সেটের ওপর এটি নেটিভ ট্রানজেকশন ও এসিড (ACID) পলিসি সমর্থন করে।

**ট্রানজেকশন পরিচালনা প্রক্রিয়া:**
১. **সেশন শুরু**: \`mongoose.startSession()\` কল করে সেশন তৈরি করুন।
২. **ট্রানজেকশন ট্রিগার**: \`session.startTransaction()\` কল করুন।
৩. **কুয়েরি রান**: প্রতিটি কুয়েরিতে অপশন হিসেবে সেশন আইডি পাস করুন (\`{ session }\`)।
৪. **কমিট ও রোলব্যাক**:
   - সব কুয়েরি সফল হলে \`session.commitTransaction()\` দিয়ে ডাটা সেভ করুন।
   - যেকোনো একটি ফেইল করলে \`session.abortTransaction()\` দিয়ে সব ডাটা আগের অবস্থায় ফিরিয়ে আনুন (রোলব্যাক)।
৫. **সেশন সমাপ্তি**: \`session.endSession()\` কল করুন।

### বাস্তব-ভিত্তিক উদাহরণ
টাকা ট্রান্সফার সিস্টেমে:
- ইউজার এ-র একাউন্ট থেকে ১০০ টাকা কেটে ইউজার বি-র একাউন্টে ১০০ টাকা যোগ করতে হবে।
- ইউজার এ-র টাকা কাটার পর যদি সার্ভার কারেন্ট চলে যাওয়ার কারণে ক্র্যাশ করে, তবে ইউজার বি টাকা পাবে না ও টাকা লস হবে।
- এই দুটি আপডেটকে ট্রানজেকশনে রাখলে বি-র একাউন্টে টাকা যোগ হওয়ার আগে ক্র্যাশ করলে এ-র একাউন্ট থেকে টাকা কাটার ঘটনাটি রোলব্যাক হয়ে বাতিল হয়ে যাবে।

### উত্তম অনুশীলন
ট্রানজেকশনের প্রসেস ছোট ও ফাস্ট রাখুন। ট্রানজেকশন চলাকালীন মঙ্গোডিবি ম্যাচিং ফাইলগুলোকে লক (Lock) করে রাখে। দীর্ঘ সময় ট্রানজেকশন ঝুলে থাকলে (ডিফল্ট ৬০ সেকেন্ডের বেশি) ডাটাবেস পারফরম্যান্স ড্রপ করে।

### সাধারণ ভুলসমূহ
ট্রানজেকশন ব্লকের ভেতরের কুয়েরিগুলোতে \`{ session }\` অপশন পাস করতে ভুলে যাওয়া। সেশন ছাড়া রান হওয়া কুয়েরিগুলো ট্রানজেকশনের বাইরে চলে যায় ও ভুল হলে রোলব্যাক হয় না।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

async function transferFunds(fromId, toId, amount) {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    // ১. টাকা বিয়োগ (অপশনে session পাস করা হয়েছে)
    await Account.updateOne(
      { _id: fromId, balance: { $gte: amount } },
      { $inc: { balance: -amount } },
      { session }
    );

    // ২. টাকা যোগ (অপশনে session পাস করা হয়েছে)
    await Account.updateOne(
      { _id: toId },
      { $inc: { balance: amount } },
      { session }
    );

    // সফল হলে কমিট করা
    await session.commitTransaction();
    console.log('ট্রানজেকশন সফলভাবে শেষ হয়েছে।');
  } catch (err) {
    // এরর হলে সব কাজ রোলব্যাক বা বাতিল করা
    await session.abortTransaction();
    console.error('ট্রানজেকশন বাতিল হয়েছে:', err);
  } finally {
    session.endSession();
  }
}
\`\`\``
  },
  {
    id: 'mongodb-46',
    title: 'What are Capped Collections in MongoDB, and when should you use them?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Capped Collection', 'Database Architecture', 'Performance'],
    enAnswer: 'Capped collections are fixed-size circular database collections that maintain document insertion order. Once a capped collection reaches its maximum allocated storage limit, MongoDB automatically overwrites the oldest documents with new ones, bypassing deletion overheads.',
    bnAnswer: 'ক্যাপড কালেকশন (Capped Collections) হলো নির্দিষ্ট সাইজের বৃত্তাকার কালেকশন যা ডকুমেন্টের ইনসার্ট অর্ডার বজায় রাখে। এটি সর্বোচ্চ স্টোরেজ সাইজ সীমা স্পর্শ করলে মঙ্গোডিবি স্বয়ংক্রিয়ভাবে সবচেয়ে পুরোনো ফাইলটি মুছে নতুন ফাইল দিয়ে প্রতিস্থাপন করে।',
    enExplanation: `### Explanation
Capped collections behave like a circular buffer.

**Core Properties of Capped Collections:**
- **Fixed Size**: Defined in bytes and document limits during creation.
- **Natural Order Insertion**: Documents are saved sequentially on disk. Queries returning documents in insertion order do not require sorting indexes.
- **High Performance Writes**: Inserts write straight to the next disk block without searching for space.
- **Deletions Forbidden**: You cannot run \`remove()\` or \`deleteOne()\` on capped collections. Documents can only be removed by dropping the collection or via auto-overwrite.
- **Size Limit**: Updates that increase document size are restricted.

### Real-World Example
In system monitoring, you want to store server system logs but limit the log size to 500MB to prevent server hard disks from filling up. A capped collection automatically manages this, keeping only the most recent 500MB of logs without cron cleanup scripts.

### Best Practice
Use capped collections for high-volume logs, telemetry histories, or caching queues. Do not use them for business models (like users or orders) where you need to delete records or perform updates that increase document sizes.

### Common Mistakes
Attempting to run delete operations on capped collections, which throws a database write exception.

### Code Example
\`\`\`javascript
// Create a capped collection named 'system_logs'
// Max size: 5,242,880 bytes (5MB), Max documents: 5000
db.createCollection("system_logs", {
  capped: true,
  size: 5242880,
  max: 5000
});

// Verify collection type and specifications
db.system_logs.stats();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্যাপড কালেকশন মূলত একটি ফিক্সড সাইজের বৃত্তাকার বাফারের (Circular Buffer) মতো কাজ করে।

**ক্যাপড কালেকশনের বৈশিষ্ট্যসমূহ:**
- **স্থির সাইজ**: কালেকশন তৈরির সময় এর সাইজ বাইট আকারে এবং সর্বোচ্চ ফাইল সংখ্যা দিয়ে লক করে দেওয়া হয়।
- **স্বাভাবিক ক্রমানুসার (Natural Order)**: ফাইলগুলো ডিস্কে ক্রমানুসারে সেভ হয়। সর্ট ইনডেক্স ছাড়াই ইনসার্ট অর্ডার অনুযায়ী খুব দ্রুত ডাটা রিড করা যায়।
- **উচ্চ রাইট পারফরম্যান্স**: খালি জায়গা খোঁজার কোনো ঝামেলা না থাকায় রাইট স্পিড অত্যন্ত বেশি।
- **ডিলিট করা নিষেধ**: এখানে কোনো ফাইল ম্যানুয়ালি ডিলিট করা যায় না। ফাইল মুছতে হলে পুরো কালেকশন ড্রপ করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্ভারের ট্র্যাকিং সিস্টেমে আপনি এরর লগ রাখতে চান কিন্তু চান না যে লগের সাইজ বেড়ে গিয়ে ওএস-এর হার্ডডিস্ক জ্যাম করুক। ৫০০ মেগাবাইটের একটি ক্যাপড কালেকশন তৈরি করে রাখলে পুরানো ডাটা অটো ডিলিট হয়ে নতুন লগ সেভ হতে থাকবে কোনো ক্রন জব ছাড়াই।

### উত্তম অনুশীলন
লগিং, মেসেজ কিউ বা টেম্পোরারি ক্যাশিংয়ের জন্য ক্যাপড কালেকশন ব্যবহার করুন। কাস্টমার একাউন্ট বা অর্ডারের মতো প্রজেক্ট ফাইলে এটি ব্যবহার করবেন না কারণ সেখানে ফাইল ডিলিট বা আপডেটের প্রয়োজন পড়ে।

### সাধারণ ভুলসমূহ
ক্যাপড কালেকশনের ওপর ডিলিট কুয়েরি চালানো, যা ডাটাবেস রাইট এরর থ্রো করবে।

### Code Example
\`\`\`javascript
// ৫ মেগাবাইট সাইজ এবং সর্বোচ্চ ৫০০০ ডকুমেন্টের 'system_logs' ক্যাপড কালেকশন তৈরি
db.createCollection("system_logs", {
  capped: true,
  size: 5242880, // ৫ এমবি বাইটে
  max: 5000 // সর্বোচ্চ ডকুমেন্ট সংখ্যা
});

// কালেকশনের টাইপ ও কনফিগারেশন চেক
db.system_logs.stats();
\`\`\``
  },
  {
    id: 'mongodb-47',
    title: 'What is GridFS in MongoDB and when should you use it?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['GridFS', 'Binary Data', 'Storage', 'Database Architecture'],
    enAnswer: 'GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16MB. It works by dividing a large file into chunks (default 255KB) and storing them across two collections: fs.files (metadata) and fs.chunks (binary chunks).',
    bnAnswer: 'GridFS হলো মঙ্গোডিবির ১৬ মেগাবাইট BSON সাইজ লিমিট অতিক্রম করা বড় সাইজের ফাইল স্টোর ও রিড করার স্পেসিফিকেশন। এটি ফাইলকে ছোট ছোট চাঙ্ক (ডিফল্ট ২৫৫ কেবি) হিসেবে ভাগ করে দুটি কালেকশনে স্টোর করে: fs.files (মেটাডাটা) ও fs.chunks (বাইনারি চাঙ্ক)।',
    enExplanation: `### Explanation
MongoDB enforces a strict 16MB limit on single documents to keep V8 query performance and network payloads optimal. For storing large assets (videos, massive PDFs, ZIP archives), MongoDB provides **GridFS**.

**How GridFS Works:**
Instead of storing a 50MB file as one document, GridFS divides it:
1. **\`fs.chunks\` Collection**: Stores the binary chunks of the file. Each chunk document is limited to the BSON size and contains the binary payload and a reference link to the parent file.
2. **\`fs.files\` Collection**: Stores the file metadata (filename, upload date, total length, contentType, MD5 hash).
3. When you read the file, the MongoDB driver streams the chunks sequentially, reconstructing the file on the fly.

### Real-World Example
If you build a medical reporting platform where hospitals upload raw 100MB DICOM MRI scans, you can save them in GridFS inside your MongoDB cluster instead of deploying a separate cloud storage server (like S3).

### Best Practice
Avoid using GridFS for standard images or asset files (avatars, icons). Cloud object stores like Amazon S3 or Google Cloud Storage combined with CDN caches are much more performant and cost-effective for serving assets. Use GridFS if you want to keep your large binary assets synchronized with your database backups and security layers.

### Common Mistakes
Loading the entire GridFS file into memory at once when serving it to clients. Always use Node.js streams to pipe file chunks directly from the database to the HTTP response object (\`res\`) to keep RAM usage minimal.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const fs = require('fs');

const conn = mongoose.connection;

conn.once('open', () => {
  // Initialize GridFS Bucket
  const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });

  // Stream upload file to GridFS
  fs.createReadStream('heavy_video.mp4')
    .pipe(bucket.openUploadStream('video.mp4'))
    .on('finish', () => console.log('File uploaded to GridFS successfully.'));
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি প্রতিটি ডকুমেন্টের সাইজ ১৬ মেগাবাইটে সীমাবদ্ধ রাখে যাতে কুয়েরি স্পিড ও নেটওয়ার্কের লেটেন্সি নিয়ন্ত্রণে থাকে। কিন্তু প্রজেক্টে যদি আরও বড় ফাইল (যেমন ভিডিও বা ভারী পিডিএফ) সেভ করার প্রয়োজন হয়, তবে মঙ্গোডিবির **GridFS** স্পেসিফিকেশন ব্যবহার করা হয়।

**GridFS যেভাবে কাজ করে:**
৫০ এমবি-র একটি ফাইলকে একটি ডকুমেন্টে না রেখে এটি দুটি কালেকশনে ভাগ করে ফেলে:
১. **\`fs.chunks\`**: এখানে ফাইলের বাইনারি ডাটাগুলো ২৫৫ কেবির ছোট ছোট ভাগে ভাগ হয়ে সেভ হয়। প্রতিটি চাঙ্কের সাথে প্যারেন্ট আইডির রেফারেন্স লিংক থাকে।
২. **\`fs.files\`**: এখানে ফাইলের মূল মেটাডাটা থাকে (ফাইলের নাম, মোট সাইজ, আপলোডের তারিখ)।
৩. যখন ফাইলটি পড়া হয়, নোডজেএস ড্রাইভার সব চাঙ্ককে ক্রমানুসারে সিঙ্ক করে লাইভ ফাইল তৈরি করে স্ট্রিম করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি হেলথকেয়ার অ্যাপে হাসপাতালগুলো ১০০ মেগাবাইটের বেশি এমআরআই স্ক্যান ফাইল আপলোড করে। আলাদা ক্লাউড স্টোরেজ সার্ভার সেটআপ করার ঝামেলা এড়াতে এগুলোকে সরাসরি ডাটাবেসের গ্রিডএফএস বাকেটে স্টোর করা যায়।

### উত্তম অনুশীলন
সাধারণ প্রোফাইল পিকচার বা লোগোর জন্য গ্রিডএফএস ব্যবহার করবেন না। এগুলো অ্যামাজন এস৩ (S3)-তে রেখে ডাটাবেসে শুধু লিঙ্ক সেভ রাখা ও সিডিএন দিয়ে লোড করা অনেক বেশি সাশ্রয়ী ও দ্রুত। শুধুমাত্র ব্যাকআপ সিনক্রোনাইজেশন ও কঠোর ডাটা নিরাপত্তার প্রয়োজনে এটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ
গ্রিডএফএস থেকে ফাইল রিড করার সময় সম্পূর্ণ ফাইল মেমোরিতে লোড করে কাস্টমারকে পাঠানো। মেমোরি ক্র্যাশ এড়াতে নোডজেএস স্ট্রিম ব্যবহার করে চাঙ্ক বাই চাঙ্ক ডাটা ক্লায়েন্ট রেসপন্সে (\`res\`) পাইপ করুন।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const fs = require('fs');

const conn = mongoose.connection;

conn.once('open', () => {
  // গ্রিডএফএস বাকেট ইনিশিয়ালাইজ করা
  const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });

  // ফাইল ডিস্ক থেকে রিড করে গ্রিডএফএস বাকেটে আপলোড স্ট্রিম করা
  fs.createReadStream('heavy_video.mp4')
    .pipe(bucket.openUploadStream('video.mp4'))
    .on('finish', () => console.log('ফাইলটি সফলভাবে গ্রিডএফএস-এ আপলোড হয়েছে।'));
});
\`\`\``
  },
  {
    id: 'mongodb-48',
    title: 'Explain Geospatial Indexes and query operators like $near and $geoWithin.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Geospatial', 'GeoJSON', 'Query'],
    enAnswer: 'Geospatial indexes allow you to index coordinate data stored as GeoJSON objects. The $near operator queries for locations close to a coordinate point sorted by distance, while the $geoWithin operator queries for locations inside a defined boundary (like a polygon).',
    bnAnswer: 'জিওস্পেশিয়াল ইনডেক্স ডকুমেন্টে GeoJSON ফরম্যাটে সেভ থাকা অক্ষাংশ-দ্রাঘিমাংশ (স্থানাঙ্ক) ইনডেক্স করতে সাহায্য করে। $near অপারেটর নির্দিষ্ট পয়েন্টের কাছাকাছি থাকা স্থান দূরত্ব অনুযায়ী সর্ট করে এবং $geoWithin সীমানার (Polygon) ভেতরের স্থানগুলো খুঁজে বের করে।',
    enExplanation: `### Explanation
MongoDB supports location-based queries using geospatial indexes:

- **GeoJSON Format**: Coordinates must be stored as \`[longitude, latitude]\` (Note: Longitude is specified first).
- **Index Types**:
  - **\`2dsphere\`**: Supports queries on a flat surface or a spherical earth model (recommended for GPS coordinates).
  - **\`2d\`**: Used for flat 2D coordinate planes.
- **Operators**:
  - **\`$near\`**: Finds points near a coordinate. Requires a \`2dsphere\` index. Supports \`$maxDistance\` (in meters).
  - **\`$geoWithin\`**: Finds points inside a specific area (like a rectangle or circle). Does not sort results by distance, making it faster than \`$near\` for boundary checks.

### Real-World Example
In a ride-sharing app (like Uber), when a user opens the app, you want to show the nearest available drivers within a 3km radius. You use \`$near\` with a \`2dsphere\` index on the driver's location coordinate.

### Best Practice
Always store coordinates in the correct GeoJSON object format: \`{ type: "Point", coordinates: [lng, lat] }\`. Index this field with \`2dsphere\` for optimal geospatial calculation performance.

### Common Mistakes
Storing coordinates as \`[latitude, longitude]\`. Because the standard GeoJSON specification dictates longitude first, swapping these values will locate your markers in the wrong hemisphere or ocean.

### Code Example
\`\`\`javascript
// 1. Create a 2dsphere index on location field
db.restaurants.createIndex({ location: "2dsphere" });

// 2. Find restaurants within 2000 meters of a coordinate
db.restaurants.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [90.4125, 23.8103] // [Longitude, Latitude]
      },
      $maxDistance: 2000 // Distance in meters (2km)
    }
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি জিওস্পেশিয়াল ইনডেক্সিংয়ের মাধ্যমে ম্যাপের অবস্থান ও ডিস্ট্যান্স ক্যালকুলেশন কোয়েরি সাপোর্ট করে:

- **GeoJSON ফরম্যাট**: স্থানাঙ্ক অবশ্যই \`[দ্রাঘিমাংশ, অক্ষাংশ]\` বা \`[longitude, latitude]\` ফরম্যাটে রাখতে হবে (মনে রাখবেন: দ্রাঘিমাংশ আগে বসে)।
- **ইনডেক্স টাইপ**:
  - **\`2dsphere\`**: গোলকাকার পৃথিবীর ম্যাপের দূরত্বের হিসাব করতে এটি ব্যবহৃত হয় (জিপিএস লোকেশনের জন্য সেরা)।
- **অপারেটরসমূহ**:
  - **\`$near\`**: নির্দিষ্ট বিন্দুর চারপাশের স্থানগুলো দূরত্বের ক্রমানুসারে খুঁজে বের করে। এর জন্য \`$maxDistance\` (মিটারে) ডিফাইন করা যায়।
  - **\`$geoWithin\`**: গোলক বা বহুভুজের (Polygon) মতো নির্দিষ্ট বাউন্ডারির ভেতরের স্থানগুলো ফিল্টার করে। এটি দূরত্ব দিয়ে সর্ট করে না, তাই বাউন্ডারি চেকিংয়ে এর স্পিড বেশি।

### বাস্তব-ভিত্তিক উদাহরণ
উবার বা রাইড শেয়ারিং অ্যাপে ইউজার যখন অ্যাপ অন করে, তখন ৩ কিলোমিটার ব্যাসার্ধের মধ্যে থাকা সচল রাইডারদের লিস্ট দেখাতে: ড্রাইভারের লোকেশন ফিল্ডে \`2dsphere\` ইনডেক্স করে \`$near\` অপারেটর দিয়ে কুয়েরি ফায়ার করতে হয়।

### উত্তম অনুশীলন
লোকেশন ডাটা সবসময় সঠিক GeoJSON নিয়মে সেভ করুন: \`{ type: "Point", coordinates: [lng, lat] }\`।

### সাধারণ ভুলসমূহ
কোঅর্ডিনেট সেভ করার সময় ভুলবশত অক্ষাংশ আগে লেখা (যেমন: \`[latitude, longitude]\`)। জিওজেএসএন নিয়মে লংগিটিউড বা দ্রাঘিমাংশ আগে লিখতে হয়। উল্টো লিখলে ম্যাপের লোকেশন ভুল মহাদেশ বা সাগরে চলে যাবে।

### Code Example
\`\`\`javascript
// ১. লোকেশন ফিল্ডে 2dsphere ইনডেক্স তৈরি করা
db.restaurants.createIndex({ location: "2dsphere" });

// ২. নির্দিষ্ট বিন্দু থেকে ২০০০ মিটারের (২ কিমি) মধ্যে থাকা রেস্টুরেন্ট খোঁজা
db.restaurants.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [90.4125, 23.8103] // [দ্রাঘিমাংশ, অক্ষাংশ]
      },
      $maxDistance: 2000 // দূরত্ব মিটারে (২ কিমি)
    }
  }
});
\`\`\``
  },
  {
    id: 'mongodb-49',
    title: 'How do you perform document backups and restores in MongoDB?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Database Administration', 'Backup', 'Restore', 'mongodump'],
    enAnswer: 'To backup a database, use the mongodump utility command, which exports data into BSON/JSON binary dumps. To restore a database from a dump, use the mongorestore utility command to import BSON data back into collections.',
    bnAnswer: 'ডাটাবেস ব্যাকআপ নিতে mongodump কমান্ড ব্যবহার করা হয় যা BSON/JSON বাইনারি ফাইলে ডাটা এক্সপোর্ট করে। ব্যাকআপ থেকে ডাটাবেস রিস্টোর করতে mongorestore কমান্ড দিয়ে BSON ডাটা পুনরায় কালেকশনে ইম্পোর্ট করা হয়।',
    enExplanation: `### Explanation
MongoDB provides CLI utilities for database administration (installed separately via MongoDB Database Tools):

- **\`mongodump\`**:
  - Connects to a running database and dumps BSON binary representations of documents to files.
  - **Syntax**: \`mongodump --uri="mongodb://localhost:27017/db_name" --out=/backup/dir\`
- **\`mongorestore\`**:
  - Reads BSON dumps and reconstructs collections and indexes in the target database.
  - **Syntax**: \`mongorestore --uri="mongodb://localhost:27017/db_name" /backup/dir/db_name\`
- **JSON Alternatives**: Use \`mongoexport\` and \`mongoimport\` if you specifically need text-based JSON/CSV representations (however, JSON loses precise BSON type configurations).

### Real-World Example
In a devops cron job, a script runs \`mongodump\` every night at 3 AM to create a compressed backup archive, uploads it to an S3 backup bucket, and sends a notification. If the server crashes, they run \`mongorestore\` to recover the database.

### Best Practice
For production backups, always use \`mongodump\` instead of \`mongoexport\`. Since BSON is binary-typed, it preserves exact field data types (like Decimal128 or Dates) during restoration, which text JSON format can lose.

### Common Mistakes
Attempting to run \`mongodump\` commands inside the \`mongosh\` shell interface. These are command-line binary utilities and must be executed in your system terminal shell, not inside the MongoDB shell.

### Code Example
\`\`\`bash
# --- Execute in System Terminal Shell, NOT mongosh ---

# 1. Backup local database 'prod_db' into directory './backups'
mongodump --db=prod_db --out=./backups

# 2. Backup to a single compressed archive file
mongodump --uri="mongodb://localhost:27017/prod_db" --archive=backup.gz --gzip

# 3. Restore from the compressed archive file
mongorestore --uri="mongodb://localhost:27017/restore_db" --archive=backup.gz --gzip
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির ডাটাবেস অ্যাডমিনিস্ট্রেশনের জন্য কিছু কমান্ড লাইন টুল রয়েছে (যা MongoDB Database Tools প্যাকেজে থাকে):

- **\`mongodump\`**:
  - রানিং ডাটাবেস থেকে ডকুমেন্টের BSON বাইনারি মেমোরি ব্যাকআপ ফাইল এক্সপোর্ট করে।
  - কমান্ড: \`mongodump --uri="mongodb://localhost:27017/db_name" --out=/backup/dir\`
- **\`mongorestore\`**:
  - বিএসওএন ডাম্প ফাইল রিড করে টার্গেট ডাটাবেসের কালেকশন ও ইনডেক্স পুনরায় তৈরি করে।
  - কমান্ড: \`mongorestore --uri="mongodb://localhost:27017/db_name" /backup/dir/db_name\`
- **JSON অল্টারনেটিভ**: টেক্সট আকারে ডাটা ব্যাকআপ নিতে \`mongoexport\` ও \`mongoimport\` ব্যবহার করা যায় (তবে এতে নিখুঁত BSON টাইপ মেটাডাটা হারিয়ে যাওয়ার ঝুঁকি থাকে)।

### বাস্তব-ভিত্তিক উদাহরণ
প্রতিদিন রাত ৩টায় একটি অটোমেটেড লিনাক্স স্ক্রিপ্ট \`mongodump\` রান করে পুরো ডাটাবেসের জিপ ব্যাকআপ ফাইল তৈরি করে ক্লাউডে আপলোড করে। কোনো কারণে সার্ভারের ডাটা নষ্ট হয়ে গেলে তারা \`mongorestore\` চালিয়ে পূর্বের ডাটা রিস্টোর করে।

### উত্তম অনুশীলন
প্রোডাকশনের ক্ষেত্রে ব্যাকআপের জন্য \`mongoexport\`-এর বদলে সর্বদা \`mongodump\` ব্যবহার করুন। বিএসওএন বাইনারি ফাইল হওয়ায় এটি ডেটের মান বা ডেসিমেল ডাটা টাইপ নিখুঁতভাবে সংরক্ষণ করে, যা সাধারণ টেক্সট ফাইলে নষ্ট হতে পারে।

### সাধারণ ভুলসমূহ
\`mongodump\` বা \`mongorestore\` কমান্ডগুলো মঙ্গোডিবি শেলের (\`mongosh\`) ভেতর রান করার চেষ্টা করা। এগুলো ওএস-এর এক্সটার্নাল বাইনারি ইউটিলিটি, তাই এগুলো সিস্টেমের মূল টার্মিনালে রান করতে হবে।

### Code Example
\`\`\`bash
# --- কোডটি সিস্টেমের সাধারণ টার্মিনালে রান করুন, mongosh-এ নয় ---

# ১. লোকাল ডাটাবেস 'prod_db' এর ব্যাকআপ './backups' ডিরেক্টরিতে নেওয়া
mongodump --db=prod_db --out=./backups

# ২. জিপ কমপ্রেসড আর্কাইভ হিসেবে ব্যাকআপ ফাইল তৈরি
mongodump --uri="mongodb://localhost:27017/prod_db" --archive=backup.gz --gzip

# ৩. জিপ ব্যাকআপ আর্কাইভ থেকে ডাটাবেস রিস্টোর করা
mongorestore --uri="mongodb://localhost:27017/restore_db" --archive=backup.gz --gzip
\`\`\``
  },
  {
    id: 'mongodb-50',
    title: 'Explain Mongoose Discriminators and how they facilitate schema inheritance.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Discriminators', 'Schema Inheritance', 'Database Design'],
    enAnswer: 'Mongoose Discriminators are a schema inheritance mechanism that allows you to store multiple models with overlapping schemas inside the same MongoDB collection. Each discriminator model has a unique key (__t) that identifies its specific sub-schema structure.',
    bnAnswer: 'Mongoose ডিসক্রিমিনেটর (Discriminators) হলো স্কিমা ইনহেরিটেন্স বা উত্তরাধিকার মেকানিজম যা একই মঙ্গোডিবি কালেকশনে ওভারল্যাপিং স্কিমা সহ একাধিক মডেল সেভ করতে দেয়। প্রতিটি ডিসক্রিমিনেটর মডেল একটি ইউনিক কি (__t) দিয়ে তার নিজস্ব সাব-স্কিমা সনাক্ত করে।',
    enExplanation: `### Explanation
Sometimes you have models that share common properties but contain distinct specialized fields. Instead of creating separate collections for each, Mongoose discriminators allow you to store them in a single collection, optimizing query execution and search indexing.

**How Discriminators Work:**
1. **Base Model**: Define a base schema and compile it to a model (e.g. \`Event\`).
2. **Discriminator Model**: Attach a sub-schema to the base model using \`Event.discriminator('EventName', subSchema)\`.
3. **Storage**: Documents save in the same collection. Mongoose automatically appends a discriminator key string \`__t\` (default name of type) to distinguish the model type during queries.

### Real-World Example
In a notification system:
- All notifications have \`userId\`, \`message\`, and \`read\` state.
- **EmailNotification** also needs a \`senderEmail\` and \`subject\`.
- **SMSNotification** also needs a \`phoneNumber\`.
By utilizing discriminators, you save all notifications in a single \`notifications\` collection but validate email/sms structures separately in your Node code.

### Best Practice
Only use discriminators when models share at least 70-80% of their schema properties and you need to query them together (e.g., loading a unified timeline feed of different event types). If the schemas are completely different, create separate database collections.

### Common Mistakes
Creating too many deeply nested discriminators inside a single collection. If the data shapes vary wildly, it creates sparse collection indexes and wastes memory footprint.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Base Schema
const options = { discriminatorKey: 'kind' }; // Customize default '__t' key to 'kind'
const eventSchema = new mongoose.Schema({
  title: String,
  time: Date
}, options);

const Event = mongoose.model('Event', eventSchema);

// Discriminator 1: Click Event
const ClickedEvent = Event.discriminator('Clicked', new mongoose.Schema({
  elementId: String,
  url: String
}));

// Usage: Both models write to the 'events' collection
const click = new ClickedEvent({
  title: "Button Clicked",
  time: new Date(),
  elementId: "signup-btn",
  url: "/register"
});
// click.kind will be automatically set to "Clicked"
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কিছু মডেলে কমন কিছু প্রপার্টি থাকে কিন্তু কাস্টম কিছু ফিল্ড আলাদা হয়। এদের জন্য আলাদা আলাদা কালেকশন তৈরি না করে একই কালেকশনে মঙ্গুস ডিসক্রিমিনেটরের সাহায্যে ডাটা স্টোর করা যায়।

**ডিসক্রিমিনেটর যেভাবে কাজ করে:**
১. **বেস মডেল (Base Model)**: কমন স্কিমা দিয়ে একটি মূল মডেল তৈরি করা হয় (যেমন: \`Event\`)।
২. **ডিসক্রিমিনেটর মডেল**: বেস মডেল থেকে এক্সটেন্ড করে কাস্টম ফিল্ড দিয়ে সাব-মডেল তৈরি করা হয়: \`Event.discriminator('EventName', subSchema)\`।
৩. **স্টোরেজ**: ডাটাবেসের একই কালেকশনে সব সেভ হয়। মঙ্গুস নিজে থেকেই ডকুমেন্টে একটি টাইপ কি \`__t\` (ডিফল্ট) যোগ করে দেয় যা দেখে কুয়েরির সময় সঠিক কাস্টম অবজেক্ট ম্যাচ করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
নোটিফিকেশন সিস্টেমে:
- সব নোটিফিকেশনেই \`userId\`, \`message\` এবং \`read\` ফিল্ড থাকে।
- **EmailNotification** মডেলে বাড়তি \`subject\` ফিল্ড লাগবে।
- **SMSNotification** মডেলে বাড়তি \`phoneNumber\` ফিল্ড লাগবে।
ডিসক্রিমিনেটর ব্যবহার করে সব নোটিফিকেশন একটিমাত্র \`notifications\` কালেকশনে সেভ রেখেই নোডের ভেতর স্কিমা ভ্যালিডেশন আলাদা রাখা সম্ভব।

### উত্তম অনুশীলন
মডেলগুলোর প্রপার্টি যখন প্রায় ৭০%-৮০% মিলে যায় এবং যখন সেগুলোকে একসাথে কুয়েরি করতে হয়, তখনই ডিসক্রিমিনেটর ব্যবহার করুন। স্কিমা যদি সম্পূর্ণ আলাদা হয়, তবে আলাদা কালেকশন তৈরি করাই শ্রেয়।

### সাধারণ ভুলসমূহ
কালেকশনের ভেতর অতিরিক্ত অবান্তর ডাটা ভ্যারিয়েশন তৈরি করা। এর ফলে ইনডেক্সের সাইজ অহেতুক বেড়ে যায় ও পারফরম্যান্স কমতে থাকে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// বেস স্কিমা
const options = { discriminatorKey: 'kind' }; // ডিফল্ট '__t' পরিবর্তন করে 'kind' করা হলো
const eventSchema = new mongoose.Schema({
  title: String,
  time: Date
}, options);

const Event = mongoose.model('Event', eventSchema);

// ডিসক্রিমিনেটর ১: ক্লিক ইভেন্ট মডেল
const ClickedEvent = Event.discriminator('Clicked', new mongoose.Schema({
  elementId: String,
  url: String
}));

// ব্যবহারপ্রণালী: ClickedEvent সরাসরি 'events' কালেকশনে রাইট করবে
const click = new ClickedEvent({
  title: "বাটন ক্লিক",
  time: new Date(),
  elementId: "signup-btn",
  url: "/register"
});
// এর ফলে ডাটাতে kind প্রপার্টি অটোমেটিক "Clicked" সেট হবে
\`\`\``
  },
  {
    id: 'mongodb-51',
    title: 'How do you query and match documents using array comparison query operators like $all and $elemMatch?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['CRUD', 'Query', 'Array Operators'],
    enAnswer: '$all matches arrays that contain all specified elements regardless of order, while $elemMatch matches documents where at least one array element satisfies all defined criteria, which is critical for querying arrays of objects.',
    bnAnswer: '$all ক্রমানুসার বিবেচনা না করে নির্দিষ্ট সব উপাদান থাকা অ্যারে ম্যাচ করে, আর $elemMatch নিশ্চিত করে যে অ্যারের অন্তত একটি অবজেক্টে সব শর্ত পূরণ হয়েছে, যা অবজেক্টের অ্যারে ফিল্টার করার জন্য অপরিহার্য।',
    enExplanation: `### Explanation
Array filtering requires understanding how MongoDB unpacks datasets:

- **\`$all\`**: Match helper for arrays of primitive values (strings, numbers). It acts like a logical AND for array values.
  - \`{ tags: { $all: ["A", "B"] } }\`: Means the array must contain both "A" and "B".
- **\`$elemMatch\`**: Required when filtering arrays of objects.
  - If you write \`{ "items.price": { $gt: 10 }, "items.color": "red" }\` without \`$elemMatch\`, MongoDB returns the document if *any* item has price $>10$ and *any* item is red. They do not have to be the same item!
  - Using \`{ items: { $elemMatch: { price: { $gt: 10 }, color: "red" } } }\` guarantees that a single, specific item object is both red and priced $>10$.

### Real-World Example
In an online learning management system (LMS), to find students who have achieved a score $>90$ in a course called "Chemistry" (where course scores are stored as objects inside a \`courses\` array):
- Use \`$elemMatch\` to ensure the name "Chemistry" and score $>90$ are in the same course object.

### Best Practice
Always use \`$elemMatch\` when querying arrays of sub-documents with multiple condition limits to prevent false-positive query results from unrelated objects inside the array.

### Common Mistakes
Using \`$elemMatch\` for single-condition queries inside arrays (such as \`{ tags: { $elemMatch: { $eq: "admin" } } }\`). A simple \`{ tags: "admin" }\` is faster and does the exact same thing.

### Code Example
\`\`\`javascript
// 1. $all: Matches if tags array has all three items
db.posts.find({ tags: { $all: ["javascript", "node", "mongodb"] } });

// 2. $elemMatch: Matches only if at least one item satisfies both criteria
db.orders.find({
  items: {
    $elemMatch: {
      productId: ObjectId("60c72b2f9b1d8b2bad000005"),
      quantity: { $gte: 5 }
    }
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারে ফিল্টারিংয়ের সময় মঙ্গোডিবি কীভাবে ডাটা রিড করে তা বোঝা গুরুত্বপূর্ণ:

- **\`$all\`**: এটি সাধারণ ভ্যালু (যেমন স্ট্রিং বা নম্বর)-এর অ্যারেতে লজিক্যাল AND কন্ডিশনের মতো কাজ করে।
  - \`{ tags: { $all: ["A", "B"] } }\`: এর মানে অ্যারেতে "A" এবং "B" দুটি উপাদানই থাকতে হবে।
- **\`$elemMatch\`**: এটি অবজেক্টের অ্যারে ফিল্টার করার জন্য অত্যন্ত গুরুত্বপূর্ণ।
  - আপনি যদি \`{ "items.price": { $gt: 10 }, "items.color": "red" }\` লেখেন, মঙ্গোডিবি এমন ডকুমেন্টও রিটার্ন করবে যার একটি আইটেমের দাম ১০-এর বেশি কিন্তু আরেকটি আইটেমের কালার লাল। তারা একই আইটেম নাও হতে পারে।
  - কিন্তু \`{ items: { $elemMatch: { price: { $gt: 10 }, color: "red" } } }\` ব্যবহার করলে নিশ্চিত হয় যে একটি নির্দিষ্ট আইটেমের মধ্যেই দাম ১০+ এবং কালার লাল হতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
লার্নিং ম্যানেজমেন্ট সিস্টেমে (LMS) এমন ছাত্র ফিল্টার করতে চান যে "Chemistry" পরীক্ষায় ৯০-এর বেশি পেয়েছে:
- \`$elemMatch\` ব্যবহার করে নিশ্চিত করতে হবে যে একই কোর্স অবজেক্টের মধ্যে নাম কেমিস্ট্রি ও স্কোর ৯০+ আছে।

### উত্তম অনুশীলন
অ্যারের ভেতরের অবজেক্টের একাধিক ফিল্ডে কন্ডিশন সেট করার সময় সর্বদা \`$elemMatch\` ব্যবহার করুন ভুল বা অসঙ্গতিপূর্ণ ডেটা এড়াতে।

### সাধারণ ভুলসমূহ
সিঙ্গেল কন্ডিশনের জন্য অপ্রয়োজনীয়ভাবে \`$elemMatch\` ব্যবহার করা (যেমন: \`{ tags: { $elemMatch: { $eq: "admin" } } }\`)। সরাসরি \`{ tags: "admin" }\` লিখলে মঙ্গোডিবি দ্রুত কুয়েরি প্রসেস করতে পারে।

### Code Example
\`\`\`javascript
// ১. $all: ট্যাগ্স অ্যারেতে তিনটি উপাদানই থাকতে হবে
db.posts.find({ tags: { $all: ["javascript", "node", "mongodb"] } });

// ২. $elemMatch: আইটেম অ্যারের যেকোনো একটি আইটেমে একই সাথে আইডি ও পরিমাণ ৫-এর বেশি হতে হবে
db.orders.find({
  items: {
    $elemMatch: {
      productId: ObjectId("60c72b2f9b1d8b2bad000005"),
      quantity: { $gte: 5 }
    }
  }
});
\`\`\``
  },
  {
    id: 'mongodb-52',
    title: 'Explain what Mongoose lean queries are and why they are critical for read-heavy APIs.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Performance', 'lean', 'Database Optimization'],
    enAnswer: 'Mongoose lean queries (using .lean()) skip the overhead of instantiating full Mongoose documents, returning raw JavaScript objects from MongoDB instead. This decreases memory usage and CPU cycles, improving execution speed by up to 5-10x for read-heavy APIs.',
    bnAnswer: 'Mongoose লীন কুয়েরি (.lean() ব্যবহারের মাধ্যমে) মঙ্গুস ডকুমেন্টের ওভারহেড এড়িয়ে সরাসরি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট রিটার্ন করে। এটি র‍্যাম মেমোরি ও সিপিইউ খরচ কমিয়ে রিড-হেভি এপিআই-এর স্পিড ৫ থেকে ১০ গুণ বাড়িয়ে দেয়।',
    enExplanation: `### Explanation
By default, when you execute a query like \`User.find()\`, Mongoose does not return raw JS objects. It performs **hydration**:

- **Hydration Overhead**: Mongoose wraps every single returned BSON document inside a heavy virtual class instance. This instance attaches:
  - Change tracking/dirty checking states.
  - Validation routines.
  - Virtual property getters/setters.
  - Internal save/update method attachments.
- For a query returning 1,000 documents, hydrating 1,000 virtual classes allocates substantial RAM and locks CPU cycles during serialization.

**Using \`.lean()\`:**
- Instructs Mongoose to bypass the hydration phase completely.
- You receive plain, raw JavaScript objects directly from the MongoDB driver.
- **Trade-off**: You cannot use Mongoose virtuals, save hooks (\`doc.save()\`), or schema helpers on lean results.

### Real-World Example
If your app homepage loads a public list of 500 catalog items, running \`Catalog.find().lean()\` instead of \`Catalog.find()\` keeps your server container memory clean, preventing out-of-memory crashes during high concurrent traffic spikes.

### Best Practice
Always use \`.lean()\` in your GET API controllers. Only omit \`.lean()\` if you specifically need to modify the returned document and call \`doc.save()\` to trigger validation and save hooks in your PUT or POST routes.

### Common Mistakes
Attempting to call virtual properties (like a computed \`fullName\`) or update methods (like \`doc.save()\`) on results returned from a \`.lean()\` query. Since they are raw JS objects, these methods will throw \`TypeError: doc.save is not a function\`.

### Code Example
\`\`\`javascript
const User = require('./models/User');

// Read-Only GET Controller
async function getUsersList(req, res) {
  try {
    // Using lean() for high performance read
    const users = await User.find({ role: 'member' }).lean();
    
    // users is a plain array of objects; serialization is super fast
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণত \`User.find()\` কুয়েরি চালালে Mongoose সরাসরি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট রিটার্ন করে না। এটি ডকুমেন্টের **হাইড্রেস (Hydration)** সম্পন্ন করে:

- **হাইড্রেট ওভারহেড**: মঙ্গুস প্রতিটি ডকুমেন্টের ওপর একটি বড় ভার্চুয়াল ক্লাস ইনজেক্ট করে। এর সাথে যুক্ত হয়:
  - চেঞ্জ ট্র্যাকিং ও ডার্টি চেকিং লজিক।
  - স্কিমা ভ্যালিডেশন মেথড।
  - ভার্চুয়াল গেটার্স ও সেটার্স।
  - ডকুমেন্টের নিজস্ব \`save()\` বা \`update()\` এপিআই।
- ১০০০টি ডাটা কুয়েরি করলে ১০০০টি ক্লাস ইনিশিয়ালাইজ করতে প্রচুর ওএস র‍্যাম মেমোরি ও সিপিইউ ব্লক হয়।

**\`.lean()\` এর কার্যকারিতা:**
- এটি মঙ্গুসকে হাইড্রেট ফেজ সম্পূর্ণ স্কিপ করতে ডিরেকশন দেয়।
- আপনি সরাসরি মঙ্গোডিবি ড্রাইভারে সেভ থাকা প্লেইন অবজেক্টগুলো নোডজেএস-এ পাবেন।
- **সুবিধা-অসুবিধা**: মেমোরি ও সময় বাঁচে। তবে এর আউটপুটে আপনি ভার্চুয়াল ফিল্ড বা \`doc.save()\` চালাতে পারবেন না।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার হোমপেজে ৫০০টি প্রোডাক্টের লিস্ট পাবলিকলি শো করতে হবে। সেখানে \`Catalog.find().lean()\` ব্যবহার করলে আপনার এক্সপ্রেস সার্ভার মেমোরি ক্লিন থাকবে এবং হঠাৎ বেশি ইউজার লাইভ এপিআই হিট করলেও সার্ভার ডাউন হবে না।

### উত্তম অনুশীলন
সমস্ত রিড-ওনলি গেট (\`GET\`) এপিআই-তে চোখ বন্ধ করে \`.lean()\` ব্যবহার করুন। শুধুমাত্র ডকুমেণ্ট মডিফাই করে \`save()\` হুক রান করার প্রয়োজন পড়লেই কেবল এটি বাদ দিন।

### সাধারণ ভুলসমূহ
\`.lean()\` দিয়ে পাওয়া অবজেক্টের ওপর ভার্চুয়াল প্রপার্টি বা \`doc.save()\` মেথড কল করার চেষ্টা করা। এটি করলে রানটাইমে \`TypeError: doc.save is not a function\` এরর আসবে।

### Code Example
\`\`\`javascript
const User = require('./models/User');

// রিড-ওনলি গেট কন্ট্রোলার এপিআই
async function getUsersList(req, res) {
  try {
    // লীন কুয়েরি ব্যবহারের মাধ্যমে হাই-পারফরম্যান্স রিড নিশ্চিত করা
    const users = await User.find({ role: 'member' }).lean();
    
    // users হলো সাধারণ জাভাস্ক্রিপ্ট অ্যারে; এপিআই রেসপন্স ফাস্ট হবে
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
\`\`\``
  },
  {
    id: 'mongodb-53',
    title: 'Explain Mongoose timestamps and how to customize their field names.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Schema', 'Timestamps', 'Database Design'],
    enAnswer: 'To customize timestamps in Mongoose, pass an options object to the Schema constructor: { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }. This replaces the default camelCase field names with your custom defined keys.',
    bnAnswer: 'Mongoose-এ টাইমস্ট্যাম্প কাস্টমাইজ করতে স্কিমা অপশনে { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } } অবজেক্ট পাস করতে হয়। এটি ডিফল্ট camelCase নামের পরিবর্তে কাস্টম কী যুক্ত করে।',
    enExplanation: `### Explanation
By default, Mongoose appends \`createdAt\` and \`updatedAt\` in camelCase format when \`{ timestamps: true }\` is enabled. If your database naming conventions enforce snake_case (common in legacy systems or python/SQL integrations), you must customize them.

**Customization Syntax:**
\`\`\`javascript
const schema = new mongoose.Schema({
  title: String
}, {
  timestamps: {
    createdAt: 'created_at', // Custom key for creation timestamp
    updatedAt: 'updated_at'  // Custom key for update timestamp
  }
});
\`\`\`

**Behavior:**
- Mongoose maintains the same automation, managing the custom keys during database writes.
- If you query using timestamps, make sure to query the custom keys: \`find().sort({ created_at: -1 })\`.

### Real-World Example
If your Node.js backend shares a database with a Python Django or PHP Laravel backend that expects database fields in snake_case format, customizing Mongoose timestamps ensures seamless database integration without breaking existing scripts.

### Best Practice
Choose a database naming convention (snake_case vs camelCase) at the beginning of the project and enforce it consistently across all schemas.

### Common Mistakes
Forgetting that once you customize the timestamp keys, standard helper queries sorting by \`createdAt\` will fail to sort or yield unexpected results because the field is now named \`created_at\`.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  body: String
}, {
  // Customizing timestamp fields to snake_case
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Post = mongoose.model('Post', postSchema);

// Example query utilizing custom key
async function getLatestPosts() {
  return await Post.find().sort({ created_at: -1 }).lean();
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে Mongoose \`{ timestamps: true }\` সেট করলে camelCase ফরম্যাটে \`createdAt\` ও \`updatedAt\` তৈরি করে। যদি আপনার প্রজেক্টের রুলস অনুযায়ী snake_case প্রপার্টি ব্যবহারের বাধ্যবাধকতা থাকে, তবে এগুলো কাস্টমাইজ করা যায়।

**কাস্টমাইজড সিনট্যাক্স:**
\`\`\`javascript
const schema = new mongoose.Schema({
  title: String
}, {
  timestamps: {
    createdAt: 'created_at', // কাস্টম ক্রিয়েশন কি
    updatedAt: 'updated_at'  // কাস্টম আপডেট কি
  }
});
\`\`\`

**বৈশিষ্ট্যসমূহ:**
- মঙ্গুস একই সুবিধা বজায় রাখবে এবং ব্যাকগ্রাউন্ডে কাস্টম কী নাম অনুযায়ী ডেট আপডেট করবে।
- কুয়েরি সর্ট করার সময় কাস্টমাইজড কি ব্যবহার করতে হবে: \`find().sort({ created_at: -1 })\`।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার নোডজেএস ব্যাকএন্ডের পাশাপাশি ডাটাবেসে অন্য কোনো পাইথন বা পিএইচপি অ্যাপ্লিকেশনও রিড-রাইট অপারেশন চালাচ্ছে যেখানে snake_case স্টাইল স্ট্যান্ডার্ড। মঙ্গুসের টাইমস্ট্যাম্প কাস্টমাইজ করলে উভয় সিস্টেম একই ডাটাবেসে কোনো ঝামেলা ছাড়াই ইন্টিগ্রেট হতে পারবে।

### উত্তম অনুশীলন
প্রজেক্টের শুরুতে যেকোনো একটি নেমিং কনভেনশন (snake_case অথবা camelCase) ঠিক করুন এবং সব স্কিমাতে তা কঠোরভাবে বজায় রাখুন।

### সাধারণ ভুলসমূহ
টাইমস্ট্যাম্প কী পরিবর্তন করার পর সর্ট করার সময় ভুলবশত মঙ্গুসের ডিফল্ট \`createdAt\` ব্যবহার করা, যার ফলে সর্ট কাজ করবে না বা নাল রেজাল্ট আসবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  body: String
}, {
  // টাইমস্ট্যাম্প প্রপার্টি snake_case-এ পরিবর্তন করা হলো
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Post = mongoose.model('Post', postSchema);

// কাস্টম কি ব্যবহার করে সর্ট কুয়েরি
async function getLatestPosts() {
  return await Post.find().sort({ created_at: -1 }).lean();
}
\`\`\``
  },
  {
    id: 'mongodb-54',
    title: 'Explain MongoDB Capped Collections and their performance characteristics.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Capped Collection', 'Database Architecture', 'Performance'],
    enAnswer: 'Capped collections are high-performance circular collections of fixed size. They guarantee document insertion order, allow high-speed sequential disk writes, and forbid document deletions or size-increasing updates, ensuring maximum performance.',
    bnAnswer: 'ক্যাপড কালেকশন হলো নির্দিষ্ট সাইজের হাই-পারফরম্যান্স বৃত্তাকার কালেকশন। এগুলো ফাইল ইনসার্টের সিকোয়েন্স বজায় রাখে, অত্যন্ত দ্রুত গতিতে ডিস্ক রাইট করে এবং কোনো ফাইল ডিলিট বা সাইজ বৃদ্ধি করার আপডেট সাপোর্ট করে না।',
    enExplanation: `### Explanation
Capped collections operate under strict limits to achieve near-raw filesystem speed.

**Performance Characteristics:**
1. **O(1) Writes**: Because documents are saved sequentially in the order they are created, MongoDB writes new documents straight to the end of the collection. It does not search for empty gaps, resulting in high write speeds.
2. **No Sorting Index Needed**: Since document order matches disk order, queries sorting by natural order (\`{ $natural: 1 }\` or \`-1\`) are extremely fast and consume zero index memory.
3. **No Fragmentation**: Because updates cannot grow the document size beyond initial allocations, and deletes are forbidden, the database physical storage never fragments.
4. **Auto-FIFO**: When the allocated byte size is exhausted, the oldest documents are overwritten instantly.

### Real-World Example
In a high-throughput chat room logging system with 1 million messages sent per minute, storing the log history in a capped collection ensures the database is fast, saves disk space, and automatically drops old messages without garbage collection queries.

### Best Practice
Always create capped collections with a size buffer large enough to hold your expected active data. Use them strictly for append-only logs, notification feeds, or transient session states.

### Common Mistakes
Trying to use Mongoose's \`.save()\` after increasing the size of a document stored in a capped collection, which throws a database write exception if the document grows.

### Code Example
\`\`\`javascript
// Create capped collection in mongosh
db.createCollection("chat_history", {
  capped: true,
  size: 10485760, // 10MB limit
  max: 10000 // Keep at most 10,000 messages
});

// Query using natural order (oldest first - no sort index needed)
db.system_logs.find().sort({ $natural: 1 });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্যাপড কালেকশন ফাইল সিস্টেমের ফাস্ট রাইট স্পিড ধরে রাখতে নির্দিষ্ট সীমার অধীনে চলে।

**পারফরম্যান্সের বৈশিষ্ট্যসমূহ:**
১. **O(1) রাইট**: ফাইলগুলো ক্রমানুসারে সেভ হওয়ায় মঙ্গোডিবি নতুন ডাটা সরাসরি শেষ ব্লকে বসিয়ে দেয়। কোনো ফাঁকা জায়গা খোঁজার প্রয়োজন না থাকায় রাইট স্পিড অত্যন্ত বেশি থাকে।
২. **সর্ট ইনডেক্স প্রয়োজন নেই**: যেহেতু ফাইলের অর্ডার ডিস্কের অর্ডারের সাথে মেলে, তাই স্বাভাবিকভাবে সর্ট (\`{ $natural: 1 }\`) করার জন্য কোনো মেমোরি খরচ বা সর্ট ইনডেক্সের প্রয়োজন হয় না।
৩. **নো ফ্র্যাগমেন্টেশন (No Fragmentation)**: ফাইল সাইজ বাড়ানোর প্রসেস লক থাকায় এবং ডিলিট করা নিষেধ হওয়ায় ডাটাবেসের ফিজিক্যাল স্টোরেজে কোনো ফাঁকা বা এলোমেলো ফাটল তৈরি হয় না।
৪. **অটো FIFO**: মেমোরি বাফার পূর্ণ হলে সবচেয়ে পুরনো ডাটা নিজে থেকেই নতুন ডাটা দিয়ে প্রতিস্থাপিত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
রিয়েল-টাইম চ্যাট অ্যাপ্লিকেশন লগে প্রতি মিনিটে লাখ লাখ মেসেজ আসে। এই মেসেজ ট্র্যাকারটি ক্যাপড কালেকশনে রাখলে ডাটাবেস রাইট অনেক ফাস্ট হবে এবং ডিস্ক স্পেস নিয়ন্ত্রণে থাকবে কোনো ডিলিট স্ক্রিপ্ট ছাড়াই।

### উত্তম অনুশীলন
আপনার ট্রাফিকের প্রয়োজন অনুযায়ী পর্যাপ্ত মেমোরি বাফার দিয়ে ক্যাপড কালেকশন তৈরি করুন। এগুলো শুধু অ্যাপেন্ড-ওনলি লগ বা মেসেজ কিউ বা ক্যাশিংয়ের জন্য ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ক্যাপড কালেকশনের ফাইলে ডাটা সাইজ বাড়িয়ে আপডেট কুয়েরি চালানো। ডকুমেন্ট মূল স্পেসের চেয়ে বড় হয়ে গেলে মঙ্গোডিবি রাইট এরর দেখাবে।

### Code Example
\`\`\`javascript
// ১০ মেগাবাইটের ক্যাপড কালেকশন তৈরি
db.createCollection("chat_history", {
  capped: true,
  size: 10485760, // ১০ এমবি
  max: 10000 // সর্বোচ্চ ১০,০০০টি মেসেজ থাকবে
});

// ন্যাচারাল সর্টিং কুয়েরি (কোনো ইনডেক্স ছাড়াই এসেন্ডিং অর্ডারে ডাটা দেবে)
db.system_logs.find().sort({ $natural: 1 });
\`\`\``
  },
  {
    id: 'mongodb-55',
    title: 'Explain MongoDB bulkWrite operations and when you should use them.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['CRUD', 'bulkWrite', 'Performance', 'Database Optimization'],
    enAnswer: 'The bulkWrite() method allows you to execute multiple write operations (insertOne, updateOne, updateMany, deleteOne, deleteMany, replaceOne) in a single batch network command, reducing network latency and round-trip times.',
    bnAnswer: 'bulkWrite() মেথড একটি সিঙ্গেল ব্যাচ নেটওয়ার্ক কমান্ডের মাধ্যমে একাধিক রাইট অপারেশন (insertOne, updateOne, deleteOne ইত্যাদি) একসাথে রান করতে দেয়, যা নেটওয়ার্ক লেটেন্সি ও ডাটাবেস রাউন্ড-ট্রিপ সময় কমায়।',
    enExplanation: `### Explanation
When building applications, you often need to perform different types of write operations (e.g. inserting 5 items, updating 10 items, and deleting 2 items) in response to a single event.

**Why bulkWrite is necessary:**
If you run these as separate queries in a loop, your Node.js app makes multiple individual network round-trips to MongoDB. This causes a major bottleneck.

**How bulkWrite works:**
- Accepts an array of operation objects.
- Combines them into a single write request package sent over the network.
- MongoDB executes the queries in a single database pass and returns a summary object detailing the results (insertedCount, modifiedCount, deletedCount).
- Supports both **ordered** (fails on first error) and **unordered** (processes all operations in parallel, reporting errors at the end) configurations.

### Real-World Example
In a stock inventory management system, a supplier uploads an Excel sheet to sync inventory:
- Some products are new (Insert).
- Some products exist but need price updates (Update).
- Some products are discontinued (Delete).
Using \`bulkWrite()\` allows you to send all these diverse actions in a single network query.

### Best Practice
Use \`bulkWrite()\` for backend sync scripts, imports, and batch updates. Keep bulk batch sizes around 1,000 to 5,000 operations per batch to prevent allocating excessive memory inside the Node.js process.

### Common Mistakes
Forgetting that \`bulkWrite\` bypasses Mongoose schema validation hooks (like \`pre('save')\`) by default because it interacts with the database driver at a low level.

### Code Example
\`\`\`javascript
db.products.bulkWrite([
  // 1. Insert One operation
  { 
    insertOne: { 
      document: { name: "USB Hub", price: 15, stock: 100 } 
    } 
  },
  // 2. Update One operation
  { 
    updateOne: {
      filter: { name: "Mouse" },
      update: { $set: { price: 25 } }
    }
  },
  // 3. Delete One operation
  { 
    deleteOne: { 
      filter: { name: "Old Cables" } 
    } 
  }
], { ordered: false }); // Unordered: execute in parallel
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রজেক্টে কাজ করার সময় অনেক সময় একই সাথে বিভিন্ন ধরণের রাইট অপারেশন (যেমন: ৫টি ফাইল ইনসার্ট, ১০টি আপডেট ও ২টি ডিলিট) একসাথে প্রসেস করতে হয়।

**bulkWrite কেন প্রয়োজন:**
আপনি যদি আলাদা আলাদা লুপ চালিয়ে এগুলো রান করেন, তবে নোডজেএস-কে বারবার ডাটাবেসের সাথে নেটওয়ার্ক রিকোয়েস্ট তৈরি করতে হবে। এতে নেটওয়ার্ক চ্যানেল জ্যাম হয়ে প্রজেক্ট স্লো হয়ে যাবে।

**bulkWrite যেভাবে কাজ করে:**
- এটি অপারেশন অবজেক্টের একটি অ্যারে গ্রহণ করে।
- সব অপারেশনকে একত্রিত করে একটি মাত্র নেটওয়ার্ক প্যাকেজে ডাটাবেসে পাঠায়।
- মঙ্গোডিবি একবারে সব প্রসেস সম্পন্ন করে একটি চূড়ান্ত সামারি রিপোর্ট দেয় (কতটি ইনসার্ট বা আপডেট হয়েছে)।
- এটি **ordered** (একটি ভুল হলে থেমে যাবে) এবং **unordered** (সবগুলো প্যারালালি রান হবে) সাপোর্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ
সুপারশপের ইনভেন্টরি সিঙ্ক করার সময় সরবরাহকারী একটি এক্সেল শিট আপলোড করলেন:
- কিছু নতুন প্রোডাক্ট আছে (Insert)।
- কিছু আগের প্রোডাক্টের দাম পাল্টাতে হবে (Update)।
- কিছু প্রোডাক্টের স্টক শেষ হওয়ায় বাদ দিতে হবে (Delete)।
\`bulkWrite()\` ব্যবহার করে আপনি এক রিকোয়েস্টেই সব টাইপের কোয়েরি একবারে পাঠিয়ে দিতে পারবেন।

### উত্তম অনুশীলন
ডাটা ইম্পোর্ট বা ব্যাচ আপডেটের জন্য \`bulkWrite()\` ব্যবহার করুন। মেমোরির ওপর প্রেশার কমাতে প্রতি ব্যাচে ১০০০ থেকে ৫০০০-এর মধ্যে লিমিট রাখুন।

### সাধারণ ভুলসমূহ
মনে রাখা যে \`bulkWrite()\` লো-লেভেলে কাজ করায় এটি মঙ্গুসের সাধারণ স্কিমা ভ্যালিডেশন বা \`pre('save')\` পাসওয়ার্ড হ্যাশারের মতো হুকগুলোকে বাইপাস করে যায়।

### Code Example
\`\`\`javascript
db.products.bulkWrite([
  // ১. insertOne অপারেশন
  { 
    insertOne: { 
      document: { name: "USB Hub", price: 15, stock: 100 } 
    } 
  },
  // ২. updateOne অপারেশন
  { 
    updateOne: {
      filter: { name: "Mouse" },
      update: { $set: { price: 25 } }
    }
  },
  // ৩. deleteOne অপারেশন
  { 
    deleteOne: { 
      filter: { name: "Old Cables" } 
    } 
  }
], { ordered: false }); // Unordered: সমান্তরালে সব কুয়েরি চলবে
\`\`\``
  },
  {
    id: 'mongodb-56',
    title: 'How do you query and update arrays using positional operators ($ and $[] and $[<identifier>])?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['CRUD', 'Update', 'Arrays', 'Positional Operators'],
    enAnswer: 'The $ positional operator updates the first array element that matches the query condition. The $[] operator updates all elements in the array. The $[<identifier>] operator updates only elements that match a custom filter specified in arrayFilters.',
    bnAnswer: 'পজিশনাল $ অপারেটর কুয়েরির সাথে মেলা প্রথম অ্যারে উপাদানটি আপডেট করে। $[] অপারেটর অ্যারের সমস্ত উপাদান আপডেট করে। এবং $[<identifier>] অপারেটর arrayFilters-এ উল্লেখ করা কাস্টম ফিল্টারের সাথে মেলা উপাদানগুলো আপডেট করে।',
    enExplanation: `### Explanation
MongoDB provides advanced positional operators to update nested elements inside arrays without rewriting the entire array.

**1. The First Match Positional Operator (\`$\`):**
- Finds the index of the first array element that matched your query filter.
- Syntax: \`{ "array.$.field": value }\`.
- Requirement: The array field must be included in the query filter.

**2. All Elements Positional Operator (\`$[]\`):**
- Modifies every element in the array.
- Syntax: \`{ "array.$[].field": value }\`.

**3. Filtered Positional Operator (\`$[<identifier>]\`):**
- Modifies only elements that meet a specific condition, defined in a separate \`arrayFilters\` option block.
- Syntax: \`{ "array.$[elem].field": value }, { arrayFilters: [ { "elem.condition": val } ] }\`.

### Real-World Example
Suppose a user has an array of product items in their shopping cart:
- Update the quantity of the item with ID "PROD101" to 5: use \`$\` matching \`PROD101\`.
- Apply a 10% discount to all items priced above $50 in the cart: use \`$[elem]\` with \`arrayFilters: [{ "elem.price": { $gt: 50 } }]\`.

### Best Practice
Use filtered positional operators (\`$[<identifier>]\`) instead of bringing the array to the client side, modifying it, and saving it back. It keeps database updates atomic and fast.

### Common Mistakes
Using the first-match operator \`$\` in an update query without including the array field in the search filter, which causes a "positional operator did not find the match" database error.

### Code Example
\`\`\`javascript
// 1. Update first matching array element: Set status to "read" for notification ID 101
db.users.updateOne(
  { _id: userId, "notifications.id": 101 },
  { $set: { "notifications.$.status": "read" } }
);

// 2. Update all array elements: Increment school grades by 5
db.students.updateOne(
  { _id: studentId },
  { $inc: { "grades.$[]": 5 } }
);

// 3. Filtered Update: Set discount to true for items priced above 100
db.orders.updateOne(
  { _id: orderId },
  { $set: { "items.$[item].discount": true } },
  { arrayFilters: [ { "item.price": { $gt: 100 } } ] }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি পুরো অ্যারে ওভাররাইট না করে অ্যারের ভেতরের নির্দিষ্ট আইটেমকে পরমাণু পর্যায়ে আপডেট করার জন্য পজিশনাল অপারেটর প্রদান করে।

**১. প্রথম ম্যাচ পজিশনাল অপারেটর (\`$\`):**
- কুয়েরি ফিল্টারের সাথে মেলা প্রথম অ্যারে আইটেমটির ইনডেক্স খুঁজে আপডেট করে।
- গঠন: \`{ "array.$.field": value }\`।
- শর্ত: কুয়েরি ফিল্টারে অবশ্যই ওই অ্যারে ফিল্ডটি থাকতে হবে।

**২. অল এলিমেন্টস পজিশনাল অপারেটর (\`$[]\`):**
- অ্যারের ভেতরের সমস্ত উপাদানের মান একসাথে আপডেট করে।
- গঠন: \`{ "array.$[].field": value }\`।

**৩. ফিল্টার্ড পজিশনাল অপারেটর (\`$[<identifier>]\`):**
- একটি কাস্টম আইডেন্টিফায়ার তৈরি করে \`arrayFilters\` কন্ডিশন সেট করে শুধু শর্ত পূরণ করা উপাদানগুলো আপডেট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারের শপিং কার্টে প্রোডাক্টের অ্যারে আছে:
- কার্ট থেকে শুধু "PROD101" আইডির শার্টের সংখ্যা ৫ করতে: \`$\` অপারেটর ব্যবহার করবেন।
- কার্টে ৫০ টাকার বেশি মূল্যের সব প্রোডাক্টে ১০% ডিসকাউন্ট যোগ করতে: \`$[elem]\` ব্যবহার করবেন যেখানে \`arrayFilters: [{ "elem.price": { $gt: 50 } }]\`।

### উত্তম অনুশীলন
অ্যারে আপডেট করার জন্য এপিআই সার্ভারে ডাটা তুলে লুপ চালিয়ে আবার সেভ করার ভুল পদ্ধতি বাদ দিন। পজিশনাল অপারেটর ব্যবহার করুন, এতে কোড অনেক ফাস্ট হবে।

### সাধারণ ভুলসমূহ
কুয়েরি ফিল্টারে অ্যারে ফিল্ডটি উল্লেখ না করেই আপডেট অংশে \`$\` পজিশনাল অপারেটর ব্যবহার করা, যার ফলে কুয়েরি এরর আসবে।

### Code Example
\`\`\`javascript
// ১. প্রথম ম্যাচ আপডেট: ১০১ আইডি নোটিফিকেশনের স্ট্যাটাস "read" করা
db.users.updateOne(
  { _id: userId, "notifications.id": 101 },
  { $set: { "notifications.$.status": "read" } }
);

// ২. অল ম্যাচ আপডেট: ক্লাসের সব স্টুডেন্টের গ্রেড ৫ নম্বর বাড়ানো
db.students.updateOne(
  { _id: studentId },
  { $inc: { "grades.$[]": 5 } }
);

// ৩. ফিল্টার্ড আপডেট: ১০০ টাকার বেশি দামি আইটেমে ডিসকাউন্ট ফ্ল্যাগ ট্রু করা
db.orders.updateOne(
  { _id: orderId },
  { $set: { "items.$[item].discount": true } },
  { arrayFilters: [ { "item.price": { $gt: 100 } } ] }
);
\`\`\``
  },
  {
    id: 'mongodb-57',
    title: 'Explain Mongoose virtual populates and when you should use them.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Virtuals', 'Population', 'Database Design'],
    enAnswer: 'Virtual Populate allows you to define relationships between collections that are linked in only one direction (e.g. from child to parent) without storing referenced arrays. This enables Mongoose to fetch related documents dynamically during query population, saving memory.',
    bnAnswer: 'ভার্চুয়াল পপুলেট (Virtual Populate) রিলেশনশিপ তৈরি করে যেখানে লিংক শুধু একদিকে থাকে (যেমন: চাইল্ড থেকে প্যারেন্ট) কোনো অতিরিক্ত অ্যারে ডাটা সেভ না করেই। এর ফলে মঙ্গুস রানটাইমে ডাইনামিকালি রেফারেন্সড ডাটা তুলে আনতে পারে।',
    enExplanation: `### Explanation
In MongoDB database designs, you often reference a parent document inside child documents (e.g., each \`Comment\` document has a \`postId\` field linking back to the \`Post\` it belongs to).

**The Storage Problem:**
If you want to quickly fetch all comments for a post, you have two options:
1. Store an array of \`commentIds\` inside the \`Post\` document. This leads to **unbounded array growth** as popular posts can get millions of comments, exceeding the 16MB document limit.
2. Store only the \`postId\` in the \`Comment\` document. But how do you query the post and easily populate its comments?

**The Virtual Populate Solution:**
Mongoose virtual populates solve this by defining a virtual relationship link on the parent schema that is computed dynamically on demand:
- **\`ref\`**: Target Model to join.
- **\`localField\`**: Key in parent schema (e.g., \`_id\`).
- **\`foreignField\`**: Key in child schema referencing parent (e.g., \`postId\`).

### Real-World Example
In a social network post, comments are stored as separate documents referencing the post ID. Virtual populate allows you to write \`Post.find().populate('comments')\` without saving any comments arrays in the post document.

### Best Practice
Always use virtual populates when designing one-to-many relationships where the child document count is high or grows without limits (like user posts, comments, or server logs).

### Common Mistakes
Forgetting that virtual fields do not serialize to JSON by default. You must configure the schema option \`{ toJSON: { virtuals: true } }\` to see the virtual populated array in your API response.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// 1. Child Schema: Comment references Post
const commentSchema = new mongoose.Schema({
  text: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});
const Comment = mongoose.model('Comment', commentSchema);

// 2. Parent Schema: Post schema definition
const postSchema = new mongoose.Schema({
  title: String,
  content: String
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

// Define Virtual Populate relationship
postSchema.virtual('comments', {
  ref: 'Comment',          // The model to join
  localField: '_id',       // Find comments where 'postId' matches this '_id'
  foreignField: 'postId'   // Field on the Comment model
});

const Post = mongoose.model('Post', postSchema);

// Usage: Fetch post and dynamically pull all its comments
async function getPostWithComments(postId) {
  const post = await Post.findById(postId).populate('comments');
  console.log(post.comments); // Array of comment documents
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি স্কিমা ডিজাইনে অনেক সময় চাইল্ড ডকুমেন্টের ভেতরে প্যারেন্ট ডকুমেন্টের আইডি রেফারেন্স করে রাখা হয় (যেমন: প্রতিটি \`Comment\` ডকুমেন্টে একটি \`postId\` থাকে যা মূল \`Post\`-এর সাথে কানেক্টেড)।

**স্টোরেজ সমস্যা:**
পোস্টের সমস্ত কমেন্ট রিড করার জন্য যদি আপনি:
১. পোস্ট ডকুমেন্টের ভেতরেই সব কমেন্ট আইডির অ্যারে সেভ করেন, তবে কমেন্ট আনলিমিটেড বেড়ে গিয়ে এক সময় ১৬ এমবি ডকুমেন্ট লিমিট ক্রস করবে।
২. শুধু কমেন্টে পোস্ট আইডি রাখবেন। কিন্তু পোস্ট কুয়েরি করার সময় সহজেই তার সব কমেন্ট কীভাবে পপুলেট করবেন?

**ভার্চুয়াল পপুলেটের সমাধান:**
Mongoose-এর ভার্চুয়াল পপুলেট এই সমস্যার সমাধান করে প্যারেন্ট স্কিমাতে একটি ভার্চুয়াল রিলেশনশিপ লিংক ডিক্লেয়ার করার মাধ্যমে:
- **\`ref\`**: যে মডেল জয়েন করা হবে (যেমন: \`Comment\`)।
- **\`localField\`**: প্যারেন্ট স্কিমার কি (যেমন: \`_id\`)।
- **\`foreignField\`**: চাইল্ড স্কিমার রেফারেন্স কি (যেমন: \`postId\`)।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ বা ফেসবুক পোস্টের কমেন্টগুলো আলাদা কালেকশনে পোস্ট আইডি রেফার করে সেভ থাকে। ভার্চুয়াল পপুলেট ব্যবহার করলে আপনি সরাসরি \`Post.find().populate('comments')\` লিখতে পারবেন কোনো অ্যারে সেভ না রেখেই।

### উত্তম অনুশীলন
চাইল্ড ডকুমেন্ট যখন আনলিমিটেড বাড়ার সুযোগ থাকে (যেমন: কমেন্ট বা লগ ফাইল), সেখানে ওয়ান-টু-মেনি রিলেশনে মেমোরি সুরক্ষায় ভার্চুয়াল পপুলেট ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভার্চুয়াল ফিল্ডগুলো ডিফল্টভাবে এপিআই রেসপন্সে শো করে না। এপিআই রেসপন্সে দেখতে চাইলে প্যারেন্ট স্কিমার শেষে \`{ toJSON: { virtuals: true } }\` কনফিগারেশন অবশ্যই অন করতে হবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// ১. চাইল্ড স্কিমা: কমেন্ট যা পোস্ট আইডি রেফারেন্স করছে
const commentSchema = new mongoose.Schema({
  text: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});
const Comment = mongoose.model('Comment', commentSchema);

// ২. প্যারেন্ট স্কিমা: পোস্ট স্কিমা
const postSchema = new mongoose.Schema({
  title: String,
  content: String
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

// ভার্চুয়াল পপুলেশন লিংক ডিফাইন করা
postSchema.virtual('comments', {
  ref: 'Comment',          // জয়েন করতে চাওয়া মডেল
  localField: '_id',       // পোস্টের নিজস্ব _id ফিল্ড
  foreignField: 'postId'   // কমেন্ট মডেলের ভেতর থাকা postId ফিল্ড
});

const Post = mongoose.model('Post', postSchema);

// ব্যবহারপ্রণালী: পোস্ট লোড করে ডাইনামিকালি সব কমেন্ট পপুলেট করা
async function getPostWithComments(postId) {
  const post = await Post.findById(postId).populate('comments');
  console.log(post.comments); // কমেন্ট ডকুমেন্টের অ্যারে শো করবে
}
\`\`\``
  },
  {
    id: 'mongodb-58',
    title: 'Explain how Mongoose Plugins facilitate schema dry-run compliance and code reuse.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Plugins', 'Database Design'],
    enAnswer: 'Mongoose Plugins allow you to write reusable schema logic (like custom middlewares, validations, methods, or virtuals) once, and apply them across multiple database schemas in your application, promoting DRY code practices.',
    bnAnswer: 'Mongoose প্লাগইন রিইউজেবল স্কিমা লজিক (যেমন: কাস্টম মিডলওয়্যার, মেথড বা ভার্চুয়াল ফিল্ড) একবার লিখে একাধিক ডাটাবেস স্কিমাতে শেয়ার করতে সাহায্য করে, যা DRY কোড রুলস বজায় রাখে।',
    enExplanation: `### Explanation
When building enterprise web applications, you often need to implement the same behaviors across multiple schemas:
- Soft deletes (\`deletedAt\`, \`deletedBy\` fields and query filtering).
- Auto-encryption of specific personal identifiable information (PII).
- Auto-generating unique alphanumeric references.

Instead of writing this hook logic in every single schema file, Mongoose permits you to compile a **Plugin**. A plugin is a function that receives the target schema as a parameter and applies hooks or properties dynamically.

### Real-World Example
Suppose you want to implement soft deletes for \`User\`, \`Order\`, and \`Product\` schemas. You write a single \`softDeletePlugin\` and apply it to each schema:
\`\`\`javascript
schema.plugin(softDeletePlugin);
\`\`\`

### Best Practice
Encapsulate common utility fields and middleware in plugins. Keep your plugins focused and test them independently to ensure they do not introduce bugs into database lifecycles.

### Common Mistakes
Applying global plugins blindly using \`mongoose.plugin()\` without checking if some schemas should be excluded, which can append unnecessary fields and query hooks to metadata collections.

### Code Example
\`\`\`javascript
// 1. Create the plugin function
function lastModifiedPlugin(schema, options) {
  // Add field to schema
  schema.add({ lastModified: Date });

  // Add pre-save hook
  schema.pre('save', function(next) {
    this.lastModified = new Date();
    next();
  });
}

// 2. Apply the plugin to schemas
const userSchema = new mongoose.Schema({ name: String });
userSchema.plugin(lastModifiedPlugin); // Adds lastModified automation

const productSchema = new mongoose.Schema({ title: String });
productSchema.plugin(lastModifiedPlugin); // Reuses the same logic
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশন লেভেলের বড় প্রজেক্টে অনেক সময় একই রকম আচরণ একাধিক স্কিমায় যোগ করতে হয়:
- সফট ডিলিট (\`deletedAt\` ফিল্ড ও কুয়েরি ফিল্টার)।
- কাস্টম আইডি জেনারেটর।
- নির্দিষ্ট ফিল্ডের অটো ক্রিপ্টো এনক্রিপশন।

এই কোডগুলো বারবার প্রতিটি স্কিমা ফাইলে আলাদাভাবে না লিখে Mongoose প্লাগইন তৈরি করে একবারে রিইউজেবল আকারে শেয়ার করা যায়। প্লাগইন হলো একটি সাধারণ ফাংশন যা প্যারামিটার হিসেবে মঙ্গুস স্কিমা গ্রহণ করে তার ওপর ডাইনামিকালি প্রপার্টি ও হুক যোগ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনার প্রজেক্টের \`User\`, \`Order\` এবং \`Product\` তিনটি মডেলেই সফট-ডিলিট সিস্টেম এড করতে হবে। এর জন্য আলাদা আলাদা কোড না লিখে একটি \`softDeletePlugin\` তৈরি করে সেগুলোতে প্লাগইন মাউন্ট করে দিবেন:
\`\`\`javascript
schema.plugin(softDeletePlugin);
\`\`\`

### উত্তম অনুশীলন
কমন কাজগুলোর জন্য প্লাগইন তৈরি করুন এবং সেগুলোকে ইন্ডিপেন্ডেন্টলি ইউনিট টেস্ট করুন যাতে ডাটাবেস রাইট ফ্লোতে কোনো বাধার সৃষ্টি না হয়।

### সাধারণ ভুলসমূহ
\`mongoose.plugin()\` দিয়ে গ্লোবালি সব মডেলে প্লাগইন অ্যাপ্লাই করে দেওয়া কোনো চেকিং ছাড়াই। এর ফলে ছোট মেটাডাটা কালেকশনেও অপ্রয়োজনীয় ফিল্ড যুক্ত হয়ে যায়।

### Code Example
\`\`\`javascript
// ১. প্লাগইন ফাংশন তৈরি করা
function lastModifiedPlugin(schema, options) {
  // স্কিমাতে নতুন ফিল্ড যোগ করা
  schema.add({ lastModified: Date });

  // প্রি-সেভ হুক যোগ করা
  schema.pre('save', function(next) {
    this.lastModified = new Date();
    next();
  });
}

// ২. বিভিন্ন স্কিমাতে প্লাগইন অ্যাপ্লাই করা
const userSchema = new mongoose.Schema({ name: String });
userSchema.plugin(lastModifiedPlugin); // লাস্টমডিফাইড সুবিধা যুক্ত হলো

const productSchema = new mongoose.Schema({ title: String });
productSchema.plugin(lastModifiedPlugin); // একই লজিক আবার ব্যবহার করা হলো
\`\`\``
  },
  {
    id: 'mongodb-59',
    title: 'Explain the difference between $push and $addToSet array update operators.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['CRUD', 'Update', 'Array Operators'],
    enAnswer: '$push appends a specified value to the end of an array, allowing duplicate values. $addToSet adds a value to the array only if the value does not already exist in it, maintaining uniqueness.',
    bnAnswer: '$push অপারেটর অ্যারের শেষে নির্দিষ্ট মান যুক্ত করে এবং ডুপ্লিকেট মান সমর্থন করে। $addToSet শুধুমাত্র তখনই অ্যারেতে মান যুক্ত করে যখন মানটি আগে থেকে অ্যারেতে উপস্থিত থাকে না, অর্থাৎ ইউনিকনেস বজায় রাখে।',
    enExplanation: `### Explanation
These update operators modify array elements inside documents atomically at the database level:

- **\`$push\`**:
  - Simply appends the element.
  - Can be combined with modifiers like \`$each\` (push multiple items), \`$slice\` (keep array limited to N items), and \`$sort\` (sort array after push).
- **\`$addToSet\`**:
  - Performs a duplicate check before writing.
  - If the item matches an existing array element, the write is skipped.
  - Note: \`$addToSet\` does not guarantee element ordering.

### Real-World Example
- Use **\`$push\`** to add logging updates to a user's login history array: \`{ $push: { logins: new Date() } }\` (duplicates are fine).
- Use **\`$addToSet\`** when adding active tags to a blog post to prevent duplicate tags: \`{ $addToSet: { tags: "coding" } }\` (should remain unique).

### Best Practice
Choose \`$addToSet\` when array uniqueness is required. Do not pull the array to Node.js, run duplicate filters in JS, and write the full array back; let MongoDB's \`$addToSet\` handle uniqueness atomically.

### Common Mistakes
Assuming \`$addToSet\` works on object arrays by comparing nested keys. \`$addToSet\` checks strict object equality, meaning it will add \`{ id: 1, name: "A" }\` even if \`{ id: 1, name: "B" }\` exists, as they are not identical objects.

### Code Example
\`\`\`javascript
// 1. $push: Append tags (duplicates allowed)
db.articles.updateOne(
  { _id: articleId },
  { $push: { tags: "tech" } }
);

// 2. $addToSet: Add tags only if they do not exist
db.articles.updateOne(
  { _id: articleId },
  { $addToSet: { tags: "javascript" } } // If "javascript" is already in tags, ignored
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারের ডেটা পরমাণু বা ডাটাবেস লেভেলে আপডেট করার জন্য এই অপারেটরগুলো ব্যবহৃত হয়:

- **\`$push\`**:
  - কোনো ডুপ্লিকেট চেক ছাড়াই অ্যারের শেষে সরাসরি উপাদান যুক্ত করে।
  - এর সাথে \`$each\` (একাধিক উপাদান পুশ), \`$slice\` (অ্যারের সাইজ লিমিট লক করা) মডিফায়ার ব্যবহার করা যায়।
- **\`$addToSet\`**:
  - এটি রাইট করার আগে ডুপ্লিকেট চেক চালায়।
  - উপাদানটি আগে থেকেই অ্যারেতে থাকলে কুয়েরি স্কিপ করে। ফলে ডুপ্লিকেট ডাটা ঢোকে না।

### বাস্তব-ভিত্তিক উদাহরণ
- **$push**: ইউজারের সাইটে লগইনের ইতিহাস ট্র্যাকিং অ্যারেতে ডেট পুশ করা: \`{ $push: { logins: new Date() } }\` (এখানে একই ডেট বা ডুপ্লিকেট হওয়া স্বাভাবিক)।
- **$addToSet**: ব্লগের ট্যাগ ফিল্টারে নতুন ট্যাগ যোগ করা: \`{ $addToSet: { tags: "coding" } }\` (একটি ট্যাগ একবারের বেশি থাকা যাবে না)।

### উত্তম অনুশীলন
অ্যারেতে ইউনিক ডাটা রাখার জন্য জাভাস্ক্রিপ্টে লুপ চালিয়ে ডেটা ফিল্টার না করে সরাসরি ডাটাবেসে \`$addToSet\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
অবজেক্টের অ্যারেতে ডুপ্লিকেট আটকাতে \`$addToSet\` ব্যবহার করা। এটি অবজেক্টের প্রতিটি কি ও ভ্যালু হুবহু মিললে তবেই ডুপ্লিকেট মনে করে। অবজেক্টের একটি কি আলাদা হলেই সে নতুন অবজেক্ট ভেবে পুশ করে দেবে।

### Code Example
\`\`\`javascript
// ১. $push: সরাসরি ট্যাগ অ্যাড করা (ডুপ্লিকেট অ্যালাউড)
db.articles.updateOne(
  { _id: articleId },
  { $push: { tags: "tech" } }
);

// ২. $addToSet: ট্যাগ না থাকলেই কেবল অ্যাড করা
db.articles.updateOne(
  { _id: articleId },
  { $addToSet: { tags: "javascript" } } // "javascript" আগে থেকে থাকলে মঙ্গোডিবি স্কিপ করবে
);
\`\`\``
  },
  {
    id: 'mongodb-60',
    title: 'Explain what Mongoose schema validation is, and how to define custom validation rules.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Validation', 'Database Design'],
    enAnswer: 'Mongoose schema validation guarantees document data integrity before saving to the database. Custom validation rules are defined inside the schema property definition by providing a validator function and a custom error message.',
    bnAnswer: 'Mongoose স্কিমা ভ্যালিডেশন ডাটাবেসে সেভ হওয়ার আগে ডকুমেন্টের সঠিকতা নিশ্চিত করে। স্কিমা প্রপার্টি ডেফিনিশনের ভেতর কাস্টম ভ্যালিডেটর ফাংশন ও এরর মেসেজ দিয়ে কাস্টম রুলস তৈরি করা যায়।',
    enExplanation: `### Explanation
Mongoose provides both **built-in validators** (like \`required\`, \`min\`, \`max\`, \`enum\`, \`match\`) and **custom validators**.

**Defining Custom Validators:**
To define a custom validator, add a \`validate\` property to your schema field containing:
- **\`validator\`**: A function returning \`true\` (valid) or \`false\` (invalid).
- **\`message\`**: The string error message returned when validation fails. It supports token interpolation (e.g. \`{VALUE}\` gets replaced with the submitted input).

### Real-World Example
Suppose you store user phone numbers. You want to validate that the submitted phone number matches a specific country code format (e.g., must be a valid Bangladeshi number starting with +880):
- Create a validator function executing a regex pattern: \`/^\\+8801[3-9]\\d{8}$/\`.

### Best Practice
Write clean regex patterns and keep validation logic asynchronous if it requires external checks (e.g., checking a database to see if a username is unique). Remember to handle validator errors gracefully to prevent crashing your web API.

### Common Mistakes
Forgetting that validation only triggers by default on document \`save()\` and \`create()\` calls. If you run query-level updates (such as \`updateOne()\`), validation rules are bypassed unless you pass \`{ runValidators: true }\`.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    // Custom validation definition
    validate: {
      validator: function(v) {
        // Must match +8801XXXXXXXX format (Bangladesh mobile)
        return /^\\+8801[3-9]\\d{8}$/.test(v);
      },
      message: props => \`\${props.value} is not a valid Bangladeshi phone number!\`
    }
  }
});

const User = mongoose.model('User', userSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Mongoose বিল্ট-ইন ভ্যালিডেটরস (যেমন: \`required\`, \`enum\`) ছাড়াও ডেভেলপারদের কাস্টম লজিক দিয়ে ভ্যালিডেশন তৈরির সুবিধা দেয়।

**কাস্টম ভ্যালিডেটর ডিফাইন করার নিয়ম:**
স্কিমা ফিল্ডের ভেতর \`validate\` নামক প্রপার্টিতে দুটি কি পাস করতে হয়:
- **\`validator\`**: একটি ফাংশন যা ইনপুট ভ্যালিড হলে \`true\` এবং ইনভ্যালিড হলে \`false\` রিটার্ন করবে।
- **\`message\`**: ভ্যালিডেশন ফেইল হলে যে এরর মেসেজ নোটিফিকেশন পাঠাবে। এখানে \`{VALUE}\` দিয়ে ইউজারের ইনপুট শো করানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারের মোবাইল নম্বর ডাটাবেসে সেভ করার আগে আমরা ভ্যালিডেশন করতে চাই যে সেটি সঠিক বাংলাদেশী মোবাইল নম্বর ফরম্যাটে (যেমন: +৮৮০১XXXXXXXX) আছে কিনা:
- রেগুলার এক্সপ্রেশন \`/^\\+8801[3-9]\\d{8}$/\` ব্যবহার করে ভ্যালিডেটর ডিফাইন করা।

### উত্তম অনুশীলন
ভ্যালিডেশন ফাংশনগুলো যথাসম্ভব পরিচ্ছন্ন রাখুন। প্রয়োজনে অ্যাসিনক্রোনাস ভ্যালিডেটর ব্যবহার করুন (যেমন: ডাটাবেস চেক করা যে ইউজারনেমটি আগে থেকেই রেজিস্টার্ড কিনা)।

### সাধারণ ভুলসমূহ
মনে রাখা যে ভ্যালিডেশন হুক শুধুমাত্র \`save()\` ও \`create()\`-এর সময় স্বয়ংক্রিয়ভাবে সচল থাকে। কুয়েরি আপডেটে (\`updateOne()\`) এটি রান করাতে হলে অবশ্যই \`runValidators: true\` অপশন পাস করতে হবে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    // কাস্টম ভ্যালিডেশন ডিফাইন করা
    validate: {
      validator: function(v) {
        // +8801XXXXXXXX (বাংলাদেশি মোবাইল ফরম্যাট) চেক করা
        return /^\\+8801[3-9]\\d{8}$/.test(v);
      },
      message: props => \`\${props.value} একটি সঠিক বাংলাদেশি ফোন নম্বর নয়!\`
    }
  }
});

const User = mongoose.model('User', userSchema);
\`\`\``
  },
  {
    id: 'mongodb-61',
    title: 'Explain index selectability and the winning plan optimization in MongoDB queries.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Performance', 'Database Architecture'],
    enAnswer: 'When a query runs, MongoDB evaluates candidates from available indexes. It runs multiple plans concurrently for a brief period; the plan that returns results fastest is crowned the winning plan. This plan is cached and reused for subsequent identical queries.',
    bnAnswer: 'যখন কোনো কুয়েরি রান করে, মঙ্গোডিবি উপলব্ধ ইনডেক্সগুলোর কার্যকারিতা ইভ্যালুয়েট করে। এটি সমান্তরালে কয়েকটি প্ল্যান সামান্য সময় চালায়; যে প্ল্যানটি সবচেয়ে দ্রুত ডাটা দিতে পারে সেটি বিজয়ী প্ল্যান (winning plan) হিসেবে ক্যাশ হয়ে যায়।',
    enExplanation: `### Explanation
MongoDB queries utilize a dynamic execution plan optimizer.

**How Winning Plans are Selected:**
1. **Query Ingestion**: You execute a query with specific filters.
2. **Candidate Selection**: The optimizer identifies which indexes can satisfy the query.
3. **Trial Phase**: If there are multiple candidate indexes, the database runs them concurrently inside V8.
4. **Winning Plan**: The first plan to return a threshold of results is chosen. The query plan is saved in the **Plan Cache**.
5. **Re-evaluation**: The winning plan remains in cache until:
   - Index modifications occur (create/drop).
   - The database server restarts.
   - The collection undergoes substantial data changes.

### Real-World Example
If you query users by \`{ age: 25, status: "active" }\`, and have one index on \`{ age: 1 }\` and another on \`{ status: 1 }\`. MongoDB runs both. If \`age_1\` filters faster, it is cached as the winning plan.

### Best Practice
Avoid creating redundant or overlapping indexes (e.g. having both \`{ A: 1 }\` and \`{ A: 1, B: 1 }\`). This confuses the query optimizer, wastes database RAM, and increases CPU overhead during index election trial phases.

### Common Mistakes
Assuming the query optimizer always selects the perfect index. In rare cases of heavily fragmented data, the optimizer can choose a suboptimal index. Use the \`.hint()\` method to explicitly force MongoDB to use your desired index if needed.

### Code Example
\`\`\`javascript
// 1. Force the database to use a specific index ('email_1') bypassing the optimizer
db.users.find({ email: "rohit@example.com" })
  .hint("email_1"); // Explicitly forces usage of email_1 index

// 2. Clear index plan cache to force a re-evaluation of winning plans
db.users.getPlanCache().clear();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবি কুয়েরির পারফরম্যান্স ঠিক রাখতে একটি ডাইনামিক প্ল্যান অপ্টিমাইজার ইঞ্জিন ব্যবহার করে।

**বিজয়ী প্ল্যান নির্ধারণের ধাপসমূহ:**
১. **কুয়েরি রিসিভ**: যখন এপিআই থেকে একটি ফিল্টার কুয়েরি ডাটাবেসে আসে।
২. **ইনডেক্স বাছাই**: অপ্টিমাইজার দেখে কোন কোন ইনডেক্স ব্যবহার করে ডাটা আনা সম্ভব।
৩. **পরীক্ষামূলক ট্রায়াল**: একাধিক সম্ভাব্য ইনডেক্স থাকলে মঙ্গোডিবি ব্যাকগ্রাউন্ডে সমান্তরালে সব ইনডেক্সিং পদ্ধতিতে কুয়েরি সামান্য চালিয়ে ট্রায়াল দেয়।
৪. **Winning Plan**: যে পদ্ধতিটি সবার আগে রেসপন্স দিতে পারে, সেটি বিজয়ী প্ল্যান হিসেবে সিলেক্ট হয়ে **প্ল্যান ক্যাশ (Plan Cache)**-এ সেভ থাকে।
৫. **রিসেট**: ডাটাবেস রিস্টার্ট হলে বা ইনডেক্স এডিট হলে এই ক্যাশ ক্লিয়ার হয়ে আবার নতুন ট্রায়াল চলে।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি কুয়েরি করলেন \`{ age: 25, status: "active" }\`। আপনার ইনডেক্স আছে \`age\`-এর ওপর এবং \`status\`-এর ওপর। মঙ্গোডিবি দুটিই ট্রায়াল দেবে। যদি দেখা যায় \`age\` ইনডেক্সটি দ্রুত ডাটা ফিল্টার করতে পারছে, তবে সেটি উইনিং প্ল্যান হিসেবে ক্যাশ থাকবে।

### উত্তম অনুশীলন
অহেতুক ডুপ্লিকেট বা ওভারল্যাপিং ইনডেক্স তৈরি করবেন না (যেমন একই সাথে \`{ A: 1 }\` এবং \`{ A: 1, B: 1 }\` দুটি ইনডেক্স রাখা)। এটি অপ্টিমাইজারকে বিভ্রান্ত করে এবং ট্রায়াল ফেজে সার্ভার সিপিইউ বেশি খরচ করায়।

### সাধারণ ভুলসমূহ
মনে করা যে অপ্টিমাইজার সবসময় সঠিক ইনডেক্সই চিনে নেবে। ডাটাবেসের ডাটার ধরন অগোছালো হলে মাঝে মাঝে ভুল ইনডেক্স চুজ হতে পারে। এ ক্ষেত্রে কুয়েরির সাথে \`.hint()\` যোগ করে জোরপূর্বক নির্দিষ্ট ইনডেক্স ধরিয়ে দেওয়া যায়।

### Code Example
\`\`\`javascript
// ১. অপ্টিমাইজার বাইপাস করে জোরপূর্বক 'email_1' ইনডেক্স ব্যবহার করানো
db.users.find({ email: "rohit@example.com" })
  .hint("email_1"); // সরাসরি ইনডেক্সের নাম বলে দেওয়া হলো

// ২. প্ল্যান ক্যাশ ক্লিয়ার করা যাতে মঙ্গোডিবি নতুন করে ইনডেক্স ট্রায়াল রান করে
db.users.getPlanCache().clear();
\`\`\``
  },
  {
    id: 'mongodb-62',
    title: 'How do you configure database locks and concurrency control in MongoDB?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Database Architecture', 'Locks', 'Concurrency', 'WiredTiger'],
    enAnswer: 'MongoDB uses the WiredTiger storage engine, which handles concurrency control using document-level locking. It executes write operations using optimistic concurrency control, meaning writes do not block read operations, and locks are held only briefly during transaction commits.',
    bnAnswer: 'মঙ্গোডিবি WiredTiger স্টোরেজ ইঞ্জিন ব্যবহার করে, যা ডকুমেন্ট-লেভেল লকিংয়ের মাধ্যমে কনকারেন্সি কন্ট্রোল করে। এটি অপ্টিমিস্টিক কনকারেন্সি ব্যবহার করায় রাইট অপারেশন রিডকে ব্লক করে না এবং লক খুব সামান্য সময় ধরে থাকে।',
    enExplanation: `### Explanation
Early versions of MongoDB used a global or database-level lock, which meant one slow write operation blocked all other queries.

**WiredTiger Concurrency Mechanics:**
1. **Document-level Locking**: Multiple clients can update different documents in the same collection simultaneously without locking each other out.
2. **Intent Locks**: When a transaction updates a document, WiredTiger applies an intent lock at the database and collection levels (allowing multiple readers/writers to share the collection) and an exclusive lock only on the target document.
3. **Multi-Version Concurrency Control (MVCC)**: WiredTiger allows readers to access the last committed version of a document even while another transaction is modifying the document in memory, preventing read blockages.

### Real-World Example
In a high-concurrency ticket booking application, 500 users can update their seat selections simultaneously. Document-level locking ensures that User A booking Seat 10 does not block User B from booking Seat 11 at the exact same millisecond.

### Best Practice
Avoid operations that lock entire collections, such as running \`db.collection.drop()\` or rebuilding heavy indexes in foreground during peak hours. Use background index building options to keep the collection write-enabled.

### Common Mistakes
Running long-running transactions that update thousands of documents. This keeps write locks active, causing other incoming requests to queue up and wait, eventually throwing write lock timeouts.

### Code Example
\`\`\`javascript
// Checking database lock latency and active tickets in mongosh
db.serverStatus().locks;
// This returns metrics on active Shared (S), Exclusive (X), and Intent locks in the cluster
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মঙ্গোডিবির শুরুর দিকের ভার্সনগুলোতে গ্লোবাল বা ডাটাবেস-লেভেল লক ব্যবহৃত হতো, যার ফলে ১টি কুয়েরি স্লো হলে অন্য সব কুয়েরি লক হয়ে বসে থাকতো।

**WiredTiger কনকারেন্সি মেকানিজম:**
১. **ডকুমেন্ট-লেভেল লকিং (Document-level Locking)**: একই সময়ে ভিন্ন ভিন্ন ডকুমেন্টে শত শত রাইট রিকোয়েস্ট চললেও তারা একে অপরের কাজ বাধাগ্রস্ত বা লক করে না।
২. **ইনটেন্ট লক (Intent Locks)**: যখন কোনো ট্রানজেকশন চলে, মঙ্গুস কালেকশন লেভেলে ইনটেন্ট শেয়ার্ড লক রাখে যাতে অন্য ইউজার রিড করতে পারে, কিন্তু নির্দিষ্ট ডকুমেন্টে এক্সক্লুসিভ লক রাখে।
৩. **MVCC (Multi-Version Concurrency Control)**: একটি ডকুমেন্ট রাইট বা এডিট হওয়া চলাকালীন রিডারদের পূর্ববর্তী সেভ থাকা সাকসেস ডাটা ভিউ করতে দেয়। ফলে রিড প্রসেস কখনো আটকে থাকে না।

### বাস্তব-ভিত্তিক উদাহরণ
বাস বা ট্রেনের সিট বুকিং ড্যাশবোর্ডে একই সেকেন্ডে ৫০০ কাস্টমার টিকিট বুক করছে। ডকুমেন্ট-লেভেল লকিং থাকায় সিট ১০ নম্বরের বুকিং সিট ১১ নম্বরের বুকিং প্রসেসকে এক মিলি-সেকেন্ডের জন্যও লক করে রাখবে না।

### উত্তম অনুশীলন
কালেকশন লেভেলের লক তৈরি করে এমন কাজ এড়ান (যেমন পিক আওয়ারে \`drop()\` চালানো বা ভারী ইনডেক্স তৈরি করা)। ডাটাবেস সচল রাখতে ব্যাকগ্রাউন্ড অপশন ব্যবহার করে ইনডেক্সিং করুন।

### সাধারণ ভুলসমূহ
একটি ট্রানজেকশনের ভেতর হাজার হাজার ফাইল আপডেট করা। এর ফলে দীর্ঘ সময় রাইট লক সচল থেকে নতুন ট্রাফিক ব্লক হয়ে যাবে ও টাইমআউট এরর শো করবে।

### Code Example
\`\`\`javascript
// ডাটাবেসের লক স্ট্যাটাস ও এক্টিভ টিকিটের হিসাব দেখা (mongosh-এ রান করুন)
db.serverStatus().locks;
// এটি ক্লাস্টারের এক্টিভ শেয়ার্ড (S) ও এক্সক্লুসিভ (X) লকের পরিসংখ্যান রিটার্ন করবে
\`\`\``
  },
  {
    id: 'mongodb-63',
    title: 'What is the purpose of Mongoose Discriminators and when should you use them?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Discriminators', 'Schema Inheritance', 'Database Design'],
    enAnswer: 'Mongoose Discriminators enable schema inheritance by allowing multiple models with different schemas to share the same MongoDB collection. Use them when you have distinct models that share a common base set of properties and need to be queried together.',
    bnAnswer: 'Mongoose ডিসক্রিমিনেটর একই কালেকশন শেয়ার করে ভিন্ন ভিন্ন স্কিমার একাধিক মডেল সেভ করতে দিয়ে স্কিমা ইনহেরিটেন্সের সুবিধা দেয়। যখন বিভিন্ন মডেলের অধিকাংশ প্রপার্টি কমন থাকে এবং তাদের একসাথে কুয়েরি করতে হয়, তখন এটি ব্যবহৃত হয়।',
    enExplanation: `### Explanation
Discriminators are a way of saving polymorphic schemas in a single MongoDB collection.

**Key Concepts:**
- **Discriminator Key**: A string field (default \`__t\`) appended to every document. Mongoose reads this field at runtime to determine which model schema to instantiate.
- **Model Isolation**: When you query using a discriminator model (e.g. \`ClickedEvent.find()\`), Mongoose automatically adds a filter for the discriminator key (\`{ kind: "Clicked" }\`) to ensure you only get documents belonging to that sub-schema.

### Real-World Example
In a billing and payment platform:
- Base Schema: \`Payment\` (contains \`amount\`, \`currency\`, \`status\`, \`userId\`).
- **CreditCardPayment** discriminator: Adds \`cardNumberHash\`, \`cardBrand\`.
- **PaypalPayment** discriminator: Adds \`paypalEmail\`, \`payerId\`.
Both models save to the \`payments\` collection.

### Best Practice
Define a shared Base Schema first. If you need to search or aggregate across all payment types (e.g., calculating total revenue regardless of payment method), using discriminators makes the aggregation pipeline simple because all data resides in the same collection.

### Common Mistakes
Modifying base schema fields directly in a discriminator model schema, which can lead to schema conflicts and validation failures across other discriminators.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// 1. Define Base Schema
const paymentSchema = new mongoose.Schema({
  amount: Number,
  status: String
}, { discriminatorKey: 'type' });

const Payment = mongoose.model('Payment', paymentSchema);

// 2. Define Discriminators
const CardPayment = Payment.discriminator('Card', new mongoose.Schema({
  cardBrand: String
}));

const PaypalPayment = Payment.discriminator('Paypal', new mongoose.Schema({
  paypalEmail: String
}));

// Usage: Mongoose handles collection mapping automatically
// CardPayment.find() will search: { type: "Card" } inside 'payments' collection
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিসক্রিমিনেটর হলো একটি সিঙ্গেল কালেকশনের ভেতর পলিমরফিক (বহুরূপী) স্কিমা সেভ করার চমৎকার নোডজেএস মেথড।

**মূল বিষয়সমূহ:**
- **ডিসক্রিমিনেটর কি**: এটি ডকুমেন্টের টাইপ নির্দেশক ফিল্ড (ডিফল্ট \`__t\`)। মঙ্গুস রানটাইমে এটি রিড করে নির্ধারণ করে কোন সাব-স্কিমা লোড করতে হবে।
- **মডেল আইসোলেশন**: আপনি যখন সাব-মডেল দিয়ে কুয়েরি করবেন (যেমন: \`ClickedEvent.find()\`), মঙ্গুস স্বয়ংক্রিয়ভাবে ফিল্টারে টাইপ সেট করে দেবে (\`{ kind: "Clicked" }\`) যাতে ভুল স্কিমার ডাটা লোড না হয়।

### বাস্তব-ভিত্তিক উদাহরণ
পেমেন্ট গেটওয়ে এপিআই-তে:
- বেস স্কিমা: \`Payment\` (কমন ফিল্ড: \`amount\`, \`currency\`, \`status\`)।
- **CreditCardPayment**: কার্ডের ব্যান্ড ও কার্ড নম্বর হ্যাশ সেভ করবে।
- **PaypalPayment**: পেপ্যাল ইমেইল ও পেয়ার আইডি সেভ করবে।
উভয় মডেলই ডাটাবেসের একটিমাত্র \`payments\` কালেকশনে সেভ থাকবে।

### উত্তম অনুশীলন
কমন ফিল্ডগুলো বেস স্কিমাতে রাখুন। যখন আপনাকে সব পেমেন্ট টাইপ মিলিয়ে ক্যাশ রেভিনিউ হিসাব করতে হবে, তখন একটি মাত্র কালেকশনে ডাটা থাকায় আপনার এগ্রিগেশন কুয়েরি চালানো অনেক সহজ হবে।

### সাধারণ ভুলসমূহ
সাব-মডেলের স্কিমার ভেতর বেস মডেলের কমন ফিল্ডের ডেটা টাইপ পরিবর্তন করে ফেলা, যা মঙ্গুসের ইন্টারনাল কুয়েরি ম্যাপিংয়ে এরর ঘটাতে পারে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// ১. বেস স্কিমা তৈরি
const paymentSchema = new mongoose.Schema({
  amount: Number,
  status: String
}, { discriminatorKey: 'type' });

const Payment = mongoose.model('Payment', paymentSchema);

// ২. দুটি ডিসক্রিমিনেটর সাব-মডেল তৈরি করা
const CardPayment = Payment.discriminator('Card', new mongoose.Schema({
  cardBrand: String
}));

const PaypalPayment = Payment.discriminator('Paypal', new mongoose.Schema({
  paypalEmail: String
}));

// ব্যবহারপ্রণালী: মঙ্গুস নিজেই কালেকশন ডিস্ট্রিবিউট করবে
// CardPayment.find() অটোমেটিক 'payments' কালেকশনে { type: "Card" } কুয়েরি চালাবে
\`\`\``
  },
  {
    id: 'mongodb-64',
    title: 'Explain index selectability and winning plan optimization in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Indexing', 'Performance', 'Database Optimization'],
    enAnswer: 'Index selectability measures how efficiently an index narrows down query results. High selectability indexes (like unique IDs) return fewer matches per key. MongoDB query optimizer evaluates candidate indexes by running concurrent trial plans, saving the fastest one in cache as the winning plan.',
    bnAnswer: 'ইনডেক্স সিলেক্টেবিলিটি পরিমাপ করে একটি ইনডেক্স কত দক্ষতার সাথে কুয়েরি রেজাল্ট ফিল্টার করতে পারে। মঙ্গোডিবি অপ্টিমাইজার সমান্তরালে সম্ভাব্য ইনডেক্সিং প্ল্যানগুলো ট্রায়াল দিয়ে সবচেয়ে ফাস্ট রেসপন্স করা প্ল্যানটিকে উইনিং প্ল্যান হিসেবে ক্যাশ করে।',
    enExplanation: `### Explanation
Index selectability is a metric for database design.

- **High Selectability**: A unique field (e.g. \`email\` or \`userId\`) has high selectability. An index on this field matches at most 1 document per key, resolving queries instantly.
- **Low Selectability**: A boolean field (e.g. \`active: true/false\`) has low selectability. An index on this field matches 50% of the database, requiring the engine to scan millions of documents anyway.
- **Winning Plan Selection**:
  - The optimizer runs the query using multiple candidate indexes concurrently.
  - The plan that completes its trial phase fastest is selected.
  - The optimizer saves the winning plan in the **Plan Cache** to bypass trial phases on future identical queries.

### Real-World Example
If you query \`{ gender: "male", email: "rohit@example.com" }\`. An index on \`gender\` is low selectability (matches half the database). An index on \`email\` is high selectability. The query optimizer will quickly select the \`email\` index plan as the winning plan.

### Best Practice
Never create indexes on fields with low selectability (like booleans or simple flags) unless they are part of a compound index. An index that doesn't filter out at least 80% of documents is usually ignored by the query optimizer.

### Common Mistakes
Leaving old, unused indexes in the database. Every time the query optimizer runs a trial phase, it evaluates all candidate indexes. Unused indexes increase the execution plan evaluation overhead.

### Code Example
\`\`\`javascript
// 1. Review index usage statistics to find unused indexes
db.users.aggregate([
  { $indexStats: {} } // Returns usage count and operations details for all indexes
]);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইনডেক্স সিলেক্টেবিলিটি হলো ইনডেক্সের কার্যক্ষমতার মানদণ্ড।

- **হাই সিলেক্টেবিলিটি (High Selectability)**: ইউনিক ফিল্ডের (যেমন: \`email\`) সিলেক্টেবিলিটি বেশি। এখানে একটি কুয়েরি ফিল্টারে মাত্র ১টি ম্যাচ পাওয়া যায়, ফলে এটি দ্রুত সমাধান হয়।
- **লো সিলেক্টেবিলিটি (Low Selectability)**: বুলিয়ান ফিল্ডের (যেমন: \`active: true/false\`) সিলেক্টেবিলিটি কম। এটি কুয়েরি করলে ডাটাবেসের অর্ধেক ফাইলই সিলেক্ট হয়ে যায়, ফলে ইনডেক্স খুব একটা কাজে আসে না।
- **উইনিং প্ল্যান নির্বাচন**:
  - অপ্টিমাইজার সম্ভাব্য ইনডেক্সিং মেথডগুলো একই সাথে ট্রায়াল রান করায়।
  - যে পদ্ধতিটি দ্রুততম সময়ে সাকসেস দেয়, তাকে উইনিং প্ল্যান ঘোষণা করে।
  - প্ল্যানটি **Plan Cache**-এ সংরক্ষিত থাকে যাতে পরবর্তীতে ট্রায়াল টাইম নষ্ট না হয়।

### বাস্তব-ভিত্তিক উদাহরণ
আপনি কুয়েরি করলেন \`{ gender: "male", email: "rohit@example.com" }\`। জেন্ডার ইনডেক্সটি লো সিলেক্টেবিলিটি সম্পন্ন (ডাটাবেসের অর্ধেক মেল ইউজার)। ইমেইল ইনডেক্সটি হাই সিলেক্টেবিলিটি সম্পন্ন। অপ্টিমাইজার অটোমেটিক ইমেইল ইনডেক্সকে উইনিং প্ল্যান হিসেবে ডিক্লেয়ার করবে।

### উত্তম অনুশীলন
কম সিলেক্টেবিলিটি সম্পন্ন ফিল্ডের (যেমন: ট্রু/ফলস ফ্ল্যাগ) ওপর সিঙ্গেল ইনডেক্স তৈরি করবেন না। ইনডেক্স যদি অন্তত ৮০% ফাইল ফিল্টার করে বাদ দিতে না পারে, তবে অপ্টিমাইজার সেটি ব্যবহারই করবে না।

### সাধারণ ভুলসমূহ
ডাটাবেসে পুরোনো ও অব্যবহৃত ইনডেক্স ফেলে রাখা। প্রতিবার কুয়েরি অপ্টিমাইজার ট্রায়াল দেওয়ার সময় অব্যবহৃত ইনডেক্সগুলোও প্রসেস করে, যা ইভ্যালুয়েশন টাইম বাড়িয়ে দেয়।

### Code Example
\`\`\`javascript
// ১. অব্যবহৃত ইনডেক্স খুঁজে বের করতে ইনডেক্স ব্যবহারের স্ট্যাটাস দেখা
db.users.aggregate([
  { $indexStats: {} } // প্রতিটি ইনডেক্স কতবার ব্যবহৃত হয়েছে তার রিপোর্ট দেবে
]);
\`\`\``
  },
  {
    id: 'mongodb-65',
    title: 'Explain Mongoose document validation hooks and custom validators.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Validation', 'Hooks', 'Database Design'],
    enAnswer: 'Mongoose document validation runs before saving documents. Custom validators are defined by providing a validator function and a message property. Asynchronous custom validators are supported by returning a Promise from the validator function.',
    bnAnswer: 'Mongoose ডকুমেন্ট ভ্যালিডেশন সেভ করার আগে সম্পন্ন হয়। কাস্টম ভ্যালিডেটরে একটি ভ্যালিডেটর ফাংশন ও এরর মেসেজ পাস করতে হয়। অ্যাসিনক্রোনাস ভ্যালিডেশনের জন্য প্রমিজ (Promise) রিটার্ন করা যায়।',
    enExplanation: `### Explanation
Custom validators allow you to implement complex business logic directly in your schemas.

**Asynchronous Validation:**
If your validation rule requires checking an external resource (e.g., verifying an address format via a third-party API or checking if a username exists in the database):
- Make the validator function return a **Promise** (by using \`async/await\` or returning \`new Promise()\`).
- If the promise resolves to \`false\`, validation fails.

### Real-World Example
Suppose you run a tenant-based SaaS application:
- When a user signs up, you must validate that the \`tenantId\` they provide exists in the \`tenants\` collection.
- You write an async validator that queries the \`Tenant\` model.

### Best Practice
Keep validation checks lightweight. If an async validator calls a slow external API, every write operation on your database will hang, waiting for the API response. Cache external validation states when possible.

### Common Mistakes
Using arrow functions when declaring validators that need to compare fields within the same document. Arrow functions prevent you from using \`this\` to read sibling field values (e.g. comparing \`password\` and \`confirmPassword\`).

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    validate: {
      // Async validator checking if email is already taken
      validator: async function(emailVal) {
        // Query database to check uniqueness
        const count = await mongoose.models.User.countDocuments({ email: emailVal });
        return count === 0; // Return true if email is unique
      },
      message: 'Email address {VALUE} is already registered!'
    }
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কাস্টম ভ্যালিডেটর দিয়ে মঙ্গুস স্কিমার মধ্যে জটিল লজিক ও সিকিউরিটি রুলস ইন্টিগ্রেট করা যায়।

**অ্যাসিনক্রোনাস ভ্যালিডেশন (Async Validation):**
যদি আপনার ভ্যালিডেশন রুলসের জন্য ডাটাবেস কুয়েরি বা অন্য কোনো সার্ভার রিকোয়েস্ট চেক করার প্রয়োজন পড়ে:
- ভ্যালিডেটর ফাংশন থেকে একটি **প্রোমিজ (Promise)** রিটার্ন করুন (\`async/await\` বা \`new Promise\` দিয়ে)।
- প্রোমিজের রিটার্ন মান \`false\` হলে মঙ্গুস ভ্যালিডেশন রিজেক্ট করবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মাল্টি-টেন্যান্ট SaaS অ্যাপে:
- ইউজার সাইনআপ করার সময় চেক করতে হবে যে তার সাবমিট করা \`tenantId\`-টি রিয়েল টেন্যান্ট কালেকশনে উপস্থিত আছে কিনা।
- এর জন্য টেন্যান্ট মডেল কুয়েরি করে একটি অ্যাসিনক্রোনাস ভ্যালিডেটর লিখতে হবে।

### উত্তম অনুশীলন
ভ্যালিডেশন প্রসেস লাইটওয়েট রাখুন। অ্যাসিনক্রোনাস ভ্যালিডেটর যদি স্লো কোনো এপিআই কল করে, তবে ডাটাবেসে সেভ হওয়ার স্পিড অনেক ধীর হয়ে যাবে। প্রয়োজনে ভ্যালিডেশন রেজাল্ট ক্যাশ (Cache) করে রাখুন।

### সাধারণ ভুলসমূহ
একই ডকুমেন্টের দুটি ফিল্ড তুলনা করার সময় (যেমন: পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড) ভ্যালিডেটরে অ্যারো ফাংশন ব্যবহার করা। অ্যারো ফাংশনে \`this\` কাজ না করায় অন্য ফিল্ডের ডাটা রিড করা যাবে না।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    validate: {
      // ইমেইল আগে থেকেই রেজিস্টার্ড কিনা তা ডাটাবেস কুয়েরি করে চেক করা (Async)
      validator: async function(emailVal) {
        const count = await mongoose.models.User.countDocuments({ email: emailVal });
        return count === 0; // ইউনিক হলে ট্রু রিটার্ন করবে
      },
      message: 'ইমেইল এড্রেস {VALUE} ইতিমধ্যে নিবন্ধিত রয়েছে!'
    }
  }
});
\`\`\``
  },
  {
    id: 'mongodb-66',
    title: 'Explain database profiling levels and analyzing slow queries in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Database Administration', 'Performance', 'Profiling', 'Troubleshooting'],
    enAnswer: 'MongoDB database profiler records operations in the system.profile collection. It supports three profiling levels: 0 (off), 1 (profiles slow operations exceeding slowms threshold), and 2 (profiles all operations).',
    bnAnswer: 'মঙ্গোডিবি ডাটাবেস প্রোফাইল সিস্টেমের রানিং কুয়েরি অপারেশনগুলো system.profile কালেকশনে রেকর্ড করে। এটি ৩টি প্রোফাইলিং লেভেল সাপোর্ট করে: ০ (বন্ধ), ১ (slowms থ্রেশহোল্ডের বেশি লাগা স্লো কুয়েরি ট্র্যাকিং), এবং ২ (সব কুয়েরি ট্র্যাকিং)।',
    enExplanation: `### Explanation
Tuning database performance requires monitoring slow-running database queries in production.

**Profiling Levels:**
- **Level 0**: Profiling is off. Zero performance overhead.
- **Level 1**: Only records queries that take longer than the \`slowms\` threshold (default 100ms). Perfect for production debugging.
- **Level 2**: Records every query executed. High CPU and memory overhead; should only be used during local testing.

**How to Query Logged Profiles:**
All profiled queries are saved in a capped collection named \`system.profile\`. You query this collection like a standard collection:
\`\`\`javascript
// Find queries that took longer than 200ms
db.system.profile.find({ millis: { $gt: 200 } })
\`\`\`

### Real-World Example
If mobile clients complain that loading the checkout page is slow, you can set the database profiling level to 1, configure \`slowms: 50\`, and query \`system.profile\` to locate the exact aggregation query blocking the system thread.

### Best Practice
In production environments, keep profiling at level 1 with a reasonable \`slowms\` limit (e.g. 100ms). Never run level 2 profiling in production, as logging every single read/write query degrades database throughput significantly.

### Common Mistakes
Forgetting that profiling is disabled by default. If you try to query \`db.system.profile.find()\` without enabling profiling first, MongoDB will throw a "collection not found" error.

### Code Example
\`\`\`javascript
// 1. Configure database profiling: Level 1, slowms threshold = 50ms
db.setProfilingLevel(1, { slowms: 50 });

// 2. View current database profiling configuration
db.getProfilingStatus();

// 3. Find top 5 slowest queries sorted by execution time descending
db.system.profile.find()
  .sort({ millis: -1 })
  .limit(5);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রোডাকশন সার্ভারে স্লো কুয়েরিগুলো ডায়াগনোসিস করতে ডাটাবেস প্রোফাইল ব্যবহার করা হয়।

**প্রোফাইলিং লেভেলসমূহ:**
- **লেভেল ০**: প্রোফাইলিং অফ থাকে। সিস্টেমে কোনো বাড়তি লোড তৈরি করে না।
- **লেভেল ১**: শুধুমাত্র নির্দিষ্ট সময়ের (\`slowms\` - ডিফল্ট ১০০ মি.সে.) চেয়ে বেশি সময় নেওয়া কুয়েরিগুলো সেভ করে। প্রোডাকশন সার্ভারের জন্য এটি আদর্শ।
- **লেভেল ২**: ডাটাবেসে চলা প্রতিটি সিঙ্গেল কুয়েরি রেকর্ড করে। এটি প্রচুর সিপিইউ ও মেমোরি নষ্ট করে, তাই শুধু লোকাল টেস্টিংয়ে এটি ব্যবহার করা উচিত।

**প্রোফাইল রিড করার নিয়ম:**
প্রোফাইলার সব তথ্য কালেকশনের \`system.profile\` নামক ক্যাপড কালেকশনে জমা রাখে। সাধারণ কুয়েরির মতোই এটি ফিল্টার করা যায়:
\`\`\`javascript
// ২০০ মিলি-সেকেন্ডের বেশি সময় নেওয়া কুয়েরি খোঁজা
db.system.profile.find({ millis: { $gt: 200 } })
\`\`\`

### বাস্তব-ভিত্তিক উদাহরণ
গ্রাহক কমপ্লেন করছে পেমেন্ট হিস্ট্রি লোড হতে অনেক সময় নিচ্ছে। আপনি ডাটাবেসে প্রোফাইলিং লেভেল ১ সেট করে \`slowms: 50\` করে দিলেন। এরপর \`system.profile\` কুয়েরি করে দেখে নিলেন পেমেন্টের কোন কোন সর্ট কুয়েরি ধীরগতিতে রান করছে।

### উত্তম অনুশীলন
প্রোডাকশন সার্ভারে সর্বদা লেভেল ১ প্রোফাইলিং অন রাখুন এবং টাইম লিমিট ১০০ মি.সে. সেট করুন। প্রোডাকশন সার্ভারে কখনো লেভেল ২ অন করবেন না, কারণ প্রতি কুয়েরির লগ রাখতে গেলে ডাটাবেস চরম ধীরগতির হয়ে যাবে।

### সাধারণ ভুলসমূহ
প্রোফাইলিং সক্রিয় না করেই \`db.system.profile.find()\` চালানোর চেষ্টা করা। প্রোফাইলিং অফ থাকলে কালেকশনটি তৈরিই হয় না, ফলে মঙ্গোডিবি এরর দেখাবে।

### Code Example
\`\`\`javascript
// ১. প্রোফাইলিং লেভেল ১ সক্রিয় করা (৫০ মিলি-সেকেন্ডের বেশি লাগা কুয়েরি লগের জন্য)
db.setProfilingLevel(1, { slowms: 50 });

// ২. বর্তমান প্রোফাইলিং স্ট্যাটাস দেখা
db.getProfilingStatus();

// ৩. সবচেয়ে স্লো ৫টি কুয়েরি খোঁজা ও ক্রমানুসারে সাজানো
db.system.profile.find()
  .sort({ millis: -1 })
  .limit(5);
\`\`\``
  },
  {
    id: 'mongodb-67',
    title: 'Explain what Mongoose schema timestamps are and how they operate.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Mongoose', 'Schema', 'Timestamps'],
    enAnswer: 'Schema timestamps automatically manage createdAt and updatedAt fields. In Mongoose, these fields are generated during document insertion, and updatedAt is updated automatically during save() or updateOne() operations.',
    bnAnswer: 'স্কিমা টাইমস্ট্যাম্প স্বয়ংক্রিয়ভাবে createdAt এবং updatedAt প্রপার্টি ম্যানেজ করে। মঙ্গুস ডকুমেন্টের প্রথম ইনসার্টের সময় ডেট তৈরি করে এবং save() বা updateOne() কুয়েরির সময় updatedAt পরিবর্তন করে।',
    enExplanation: `### Explanation
Timestamps are a built-in feature of Mongoose schemas.

**Operational Details:**
- **\`createdAt\`**: Set once when the document is first created using \`save()\` or \`create()\`. It cannot be modified by subsequent Mongoose save actions.
- **\`updatedAt\`**: Updated to the current date/time every time you call \`doc.save()\` or run update queries.
- **Bypassing**: If you perform updates where you explicitly want to keep the old \`updatedAt\` timestamp, you can pass \`{ timestamps: false }\` inside the update options.

### Real-World Example
In a support ticket system, \`createdAt\` tracks when a user submitted a complaint, and \`updatedAt\` tracks when a support agent last updated the ticket status.

### Best Practice
Enable timestamps on all collections that represent business states (orders, users, payments). Choose consistent naming conventions and utilize Mongoose's built-in automation instead of manual Date declarations.

### Common Mistakes
Updating documents using low-level raw MongoDB driver operations bypassing Mongoose models, which prevents Mongoose from updating the \`updatedAt\` timestamp.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  subject: String,
  status: String
}, { 
  timestamps: true // Appends createdAt and updatedAt automatically
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// Example update bypassing timestamp updates explicitly
await Ticket.updateOne(
  { _id: ticketId },
  { $set: { status: 'resolved' } },
  { timestamps: false } // Prevents updatedAt from changing
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টাইমস্ট্যাম্প মঙ্গুস স্কিমার একটি অটোমেটেড ইন-বিল্ট ফিচার।

**কার্যপ্রণালী:**
- **\`createdAt\`**: ডকুমেন্ট প্রথম ইনসার্ট বা \`create()\` হওয়ার সময় এটি একবার সেট হয়। পরবর্তীতে মঙ্গুস এটি পরিবর্তন করে না।
- **\`updatedAt\`**: প্রতিবার ডকুমেন্টে \`save()\` বা আপডেট কোড ট্রিগার হলে এটি বর্তমান সময় অনুযায়ী অটো চেঞ্জ হয়।
- **বাইপাস**: কোনো আপডেটে যদি আপনি চান টাইমস্ট্যাম্পের সময় অপরিবর্তিত থাকুক, তবে অপশনে \`{ timestamps: false }\` পাস করতে পারেন।

### বাস্তব-ভিত্তিক উদাহরণ
সাপোর্ট টিকিট সিস্টেমে, \`createdAt\` ট্র্যাক করে গ্রাহক কখন টিকিট সাবমিট করেছে এবং \`updatedAt\` ট্র্যাক করে সাপোর্ট এজেন্ট সর্বশেষ কখন টিকিটের স্ট্যাটাস আপডেট করেছে।

### উত্তম অনুশীলন
ব্যবসায়িক ডাটা (অর্ডার, পেমেন্ট)-র সাথে জড়িত সমস্ত কালেকশনে টাইমস্ট্যাম্প অন রাখুন। এটি ম্যানুয়ালি ডেট লেখার ঝামেলা দূর করে ও হিউম্যান এরর প্রতিরোধ করে।

### সাধারণ ভুলসমূহ
মঙ্গুস মডেল এড়িয়ে সরাসরি র-ড্রাইভার দিয়ে ডাটাবেস আপডেট করা। এতে মঙ্গুসের টাইমস্ট্যাম্প হুক কাজ করে না ও আপডেটের সময় অপরিবর্তিতই থেকে যায়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  subject: String,
  status: String
}, { 
  timestamps: true // createdAt ও updatedAt অটো সেট করবে
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// কাস্টম কুয়েরি যেখানে জোরপূর্বক updatedAt পরিবর্তন বন্ধ রাখা হয়েছে
await Ticket.updateOne(
  { _id: ticketId },
  { $set: { status: 'resolved' } },
  { timestamps: false } // updatedAt আপডেট হবে না
);
\`\`\``
  },
  {
    id: 'mongodb-68',
    title: 'Explain GridFS file chunking and streaming mechanisms in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['GridFS', 'Binary Data', 'Streams', 'Performance'],
    enAnswer: 'GridFS works by breaking large files into binary chunks of 255KB. It saves metadata in a files collection, and the binary payload chunks in a chunks collection. When reading, the driver streams the chunks sequentially, reducing RAM overhead.',
    bnAnswer: 'GridFS বড় ফাইলকে ২৫৫ কেবির বাইনারি টুকরোতে (chunks) রূপান্তর করে। এটি files কালেকশনে মেটাডাটা এবং chunks কালেকশনে বাইনারি টুকরোগুলো রাখে। রিড করার সময় ড্রাইভার চাঙ্কগুলো সিকোয়েন্সিয়ালি স্ট্রিম করে র‍্যাম মেমোরি বাঁচায়।',
    enExplanation: `### Explanation
GridFS handles files that exceed the 16MB document size limit by splitting the files into two collections:

**1. The \`fs.files\` Collection:**
Each file has a single document in this collection:
- \`_id\`: Unique identifier of the file.
- \`length\`: Total size in bytes.
- \`chunkSize\`: Size of each chunk (default 255KB).
- \`filename\`: Name of the file.

**2. The \`fs.chunks\` Collection:**
Stores the actual binary data pieces:
- \`_id\`: Unique chunk identifier.
- \`files_id\`: Reference to the parent \`fs.files\` ID.
- \`n\`: Index sequence of the chunk (0, 1, 2, ...).
- \`data\`: BSON Binary payload representing the file slice.

**Streaming Benefit:**
Because the file is retrieved chunk-by-chunk, your Node.js server does not need to allocate 500MB of RAM to hold a 500MB file during downloads. You pipe the stream directly to the client response, processing only 255KB in RAM at any given millisecond.

### Real-World Example
In a video education portal, large lecture video files are stored in GridFS. When a student plays a video, the Node.js server reads chunks from \`fs.chunks\` sequentially and streams them to the browser, enabling instant playback without loading the whole video into server memory.

### Best Practice
Always handle stream events (\`data\`, \`end\`, \`error\`) carefully when reading GridFS files in Node.js. Use \`pipeline\` to cleanly pipe the database stream to the client response and prevent memory leaks.

### Common Mistakes
Forgetting that GridFS does not support editing file chunks easily. To modify a file, you must delete all old chunks and upload the new version, making it unsuitable for highly mutable files.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// GET Endpoint to stream file to browser
app.get('/file/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) return res.status(404).send('File not found');

    res.set('Content-Type', file.contentType);
    
    // Create read stream and pipe directly to response
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res); // Streams chunks sequentially to browser
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
GridFS কালেকশনে ১৬ এমবি সাইজের লিমিট পার করা বড় ফাইলগুলোকে দুটি কালেকশনের ভেতর ডিস্ট্রিবিউট করে রিড-রাইট অপারেশন চালায়:

**১. \`fs.files\` কালেকশন:**
প্রতিটি ফাইলের একটি সামারি বা মেটাডাটা অবজেক্ট থাকে:
- \`_id\`: ফাইলের ইউনিক আইডি।
- \`length\`: ফাইলের মোট সাইজ বাইটে।
- \`chunkSize\`: প্রতিটি চাঙ্কের সাইজ (ডিফল্ট ২৫৫ কেবি)।
- \`filename\`: ফাইলের নাম।

**২. \`fs.chunks\` কালেকশন:**
এখানে ফাইলের মূল বাইনারি ডাটা খণ্ডগুলো থাকে:
- \`_id\`: চাঙ্কের নিজস্ব আইডি।
- \`files_id\`: প্যারেন্ট ফাইলের আইডি (\`fs.files\`-এর রেফারেন্স)।
- \`n\`: চাঙ্কের সিরিয়াল বা ইনডেক্স নম্বর (০, ১, ২...)।
- \`data\`: বাইনারি ডাটা বা বিএসওএন বাইনারি পেলোড।

**স্ট্রিমিংয়ের সুবিধা:**
ফাইল চাঙ্ক আকারে রিড করায় নোডজেএস সার্ভারে কোনো ৫০০ এমবির ফাইল ওপেন করার জন্য ৫০০ এমবি র‍্যামের প্রয়োজন হয় না। পাইপের সাহায্যে ডাটাবেস থেকে রিড হওয়া ২৫৫ কেবির ছোট বাফারটি সরাসরি গ্রাহকের ব্রাউজারে ট্রান্সফার হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ভিডিও টিউটোরিয়াল সাইটে বড় লেকচার ভিডিও গ্রিডএফএস বাকেটে সেভ থাকে। ছাত্র ভিডিও প্লে করলে নোড সার্ভার চাঙ্ক ডাটা সিকোয়েন্সিয়ালি রিড করে ব্রাউজারে স্ট্রিম করে দেয়, ফলে সার্ভার মেমোরি ফুল হওয়া ছাড়াই ইউজার ভিডিওটি দেখতে পায়।

### উত্তম অনুশীলন
গ্রিডএফএস ফাইল ব্যবহারের সময় নোডজেএস-এর স্ট্রিম ইভেন্টগুলো (যেমন: \`error\`, \`end\`) সাবধানে কন্ট্রোল করুন। ডাটা লিক এড়াতে \`stream.pipeline()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
মনে রাখা যে গ্রিডএফএস ফাইলের আংশিক অংশ এডিট করা সম্ভব নয়। ফাইল মডিফাই করতে হলে পুরোনো সব চাঙ্ক ডিলিট করে সম্পূর্ণ নতুন ফাইল আবার আপলোড করতে হয়।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// এপিআই এন্ডপয়েন্ট: ফাইল ব্রাউজারে স্ট্রিম করা
app.get('/file/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) return res.status(404).send('ফাইল পাওয়া যায়নি');

    res.set('Content-Type', file.contentType);
    
    // রিড স্ট্রিম তৈরি করে সরাসরি এক্সপ্রেস রেসপন্সে পাইপ করা
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res); // চাঙ্কগুলো সরাসরি ব্রাউজারে স্ট্রিম হবে
  });
});
\`\`\``
  },
  {
    id: 'mongodb-69',
    title: 'Explain Geospatial 2dsphere indexes and distance calculations in MongoDB.',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Geospatial', '2dsphere Index', 'Database Optimization'],
    enAnswer: 'A 2dsphere index calculates geometry on a spherical earth model (WGS84 ellipsoid). It supports query operations like $near (distance-sorted proximity) and $geoWithin (boundary containment) on GeoJSON coordinates [longitude, latitude].',
    bnAnswer: '2dsphere ইনডেক্স গোলকাকার পৃথিবীর জ্যামিতিক হিসাব করতে কাজ করে। এটি GeoJSON স্থানাঙ্ক [দ্রাঘিমাংশ, অক্ষাংশ] ব্যবহার করে $near (দূরত্ব-ভিত্তিক অবস্থান) ও $geoWithin (সীমানা ফিল্টারিং) কুয়েরি সমর্থন করে।',
    enExplanation: `### Explanation
Geospatial calculations on a sphere (like Earth) require mathematical models that account for curvature, unlike flat 2D maps.

- **WGS84 Reference**: MongoDB's \`2dsphere\` index uses the WGS84 ellipsoid model to calculate accurate spherical distance metrics.
- **Coordinates Order**: Must always be \`[longitude, latitude]\`.
- **Supported GeoJSON Shapes**:
  - \`Point\`: A single location coordinate.
  - \`LineString\`: A path/line of points.
  - \`Polygon\`: A closed loop boundary.
- **Distance Unit**: \`$near\` queries return distance metrics in **meters**.

### Real-World Example
In a food delivery app, you want to query restaurants within a 5km radius of a customer's location. A \`2dsphere\` index on the restaurant's coordinate ensures that the distance calculation accounts for the Earth's curvature, returning precise results.

### Best Practice
Always enforce the GeoJSON schema format on your location properties. Create a compound index containing the \`2dsphere\` field and standard fields (e.g. \`{ location: "2dsphere", category: 1 }\`) if you need to filter results by category along with proximity.

### Common Mistakes
Creating a \`2d\` index instead of a \`2dsphere\` index for GPS coordinates. The \`2d\` index is designed for flat Euclidean planes (like video game grids) and will yield inaccurate distance calculations when applied to real-world global coordinates.

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// Mongoose GeoJSON Schema Definition
const storeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ['Point'], // Must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  }
});

// Compile 2dsphere index on location field
storeSchema.index({ location: '2dsphere' });

const Store = mongoose.model('Store', storeSchema);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পৃথিবীর মতো গোলকাকার বস্তুর ওপর দূরত্ব ও ম্যাপের হিসাব করতে বাঁক বা কার্ভ হিসাব করতে হয়, যা সমতল ২ডি ম্যাপের চেয়ে ভিন্ন।

- **WGS84 মডেল**: মঙ্গোডিবির \`2dsphere\` ইনডেক্স পৃথিবীর গোলকাকার মডেলে নিখুঁত দূরত্ব পরিমাপ করতে WGS84 এলিপসয়েড মডেল ব্যবহার করে।
- **কোঅর্ডিনেট অর্ডার**: সর্বদা \`[দ্রাঘিমাংশ, অক্ষাংশ]\` বা \`[longitude, latitude]\` বজায় রাখতে হবে।
- **GeoJSON শেইপস**:
  - \`Point\`: একটি নির্দিষ্ট পয়েন্ট বা জিপিএস কোঅর্ডিনেট।
  - \`Polygon\`: একটি আবদ্ধ বাউন্ডারি বা বহুভুজ এলাকা।
- **দূরত্বের একক**: \`$near\` কুয়েরির দূরত্বের মান সর্বদা **মিটারে** হিসাব হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফুড ডেলিভারি অ্যাপে কাস্টমারের অবস্থান থেকে ৫ কিমি ব্যাসার্ধের মধ্যে থাকা রেস্টুরেন্টগুলো ফিল্টার করতে হবে। রেস্টুরেন্টের লোকেশন ফিল্ডে \`2dsphere\` ইনডেক্স থাকলে জিপিএস কোঅর্ডিনেট হিসাব করে সঠিক দূরত্বের রেস্টুরেন্টগুলো খুঁজে বের করা সম্ভব হবে।

### উত্তম অনুশীলন
স্কিমা ফাইলে জিওস্পেশিয়াল কোঅর্ডিনেট GeoJSON ফরম্যাটে রাখুন। যদি প্রোফাইল লোকেশনের সাথে অন্য ফিল্ড ফিল্টার করতে চান (যেমন নির্দিষ্ট ক্যাটাগরি), তবে কম্পাউন্ড জিও-ইনডেক্স তৈরি করুন: \`{ location: "2dsphere", category: 1 }\`।

### সাধারণ ভুলসমূহ
জিপিএস কোঅর্ডিনেটের জন্য \`2dsphere\` এর বদলে সাধারণ \`2d\` ইনডেক্স ব্যবহার করা। \`2d\` ইনডেক্স শুধু ফ্ল্যাট সমতল ক্ষেত্রের (যেমন গেমের গ্রিড) দূরত্ব পরিমাপের জন্য, এটি দিয়ে জিপিএস গণনা করলে বড় ধরণের গোলযোগ হতে পারে।

### Code Example
\`\`\`javascript
const mongoose = require('mongoose');

// মঙ্গুস GeoJSON স্কিমা ডিফাইন করার নিয়ম
const storeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ['Point'], // অবশ্যই 'Point' হতে হবে
      required: true
    },
    coordinates: {
      type: [Number], // [দ্রাঘিমাংশ, অক্ষাংশ]
      required: true
    }
  }
});

// লোকেশন ফিল্ডের ওপর 2dsphere ইনডেক্স তৈরি
storeSchema.index({ location: '2dsphere' });

const Store = mongoose.model('Store', storeSchema);
\`\`\``
  },
  {
    id: 'mongodb-70',
    title: 'How do you perform and analyze query execution statistics using the executionStats mode of explain()?',
    difficulty: 'intermediate',
    category: 'mongodb',
    tags: ['Performance', 'explain', 'Database Optimization', 'Troubleshooting'],
    enAnswer: 'To run executionStats, call db.collection.find().explain("executionStats"). This runs the query and reports stats like executionTimeMillis (total latency), totalKeysExamined (scanned index keys), and totalDocsExamined (scanned documents on disk).',
    bnAnswer: 'executionStats রান করতে db.collection.find().explain("executionStats") কল করতে হয়। এটি কুয়েরিটি চালিয়ে executionTimeMillis (সময়কাল), totalKeysExamined (স্ক্যান হওয়া ইনডেক্স কি) এবং totalDocsExamined (স্ক্যান হওয়া ডকুমেন্ট)-এর পরিসংখ্যান দেয়।',
    enExplanation: `### Explanation
Analyzing \`executionStats\` output is key to identifying slow database operations.

**Key Metrics in \`executionStats\` JSON Output:**
1. **\`executionTimeMillis\`**: The actual duration of the query in milliseconds. Should be close to 0 for indexed reads.
2. **\`totalKeysExamined\`**: The number of index entries scanned.
3. **\`totalDocsExamined\`**: The number of physical documents read from disk.
4. **\`nReturned\`**: The number of documents that matched the query and were returned to the client.

**Analyzing the Ratios:**
- **Covered Query**: \`totalKeysExamined > 0\`, \`totalDocsExamined == 0\`, \`nReturned > 0\`. This is the fastest query state; no disk reads were required because the index contained all projected fields.
- **Index Scan + Fetch**: \`totalKeysExamined == totalDocsExamined == nReturned\`. Healthy indexed query.
- **Collection Scan (COLLSCAN)**: \`totalKeysExamined == 0\` and \`totalDocsExamined > nReturned\`. Very slow query state.

### Real-World Example
In a reports dashboard, a query looks up sales by status. Running explain reveals \`totalDocsExamined: 1000000\` and \`nReturned: 5\`. This warns you that the query is performing a collection scan, and you must add an index on the \`status\` field.

### Best Practice
Regularly check the ratio of \`totalKeysExamined\` to \`nReturned\`. If this ratio is high (e.g. 100:1), it indicates that your compound index does not follow the ESR rule, causing the database to scan too many index keys before finding matches.

### Common Mistakes
Taking local testing \`executionTimeMillis\` results literally. Local database sizes are small. Always run explain plans on production-sized staging database copies to get realistic execution stats.

### Code Example
\`\`\`javascript
// Run explain on query
const explanation = db.products.find({
  category: "Laptop",
  price: { $gte: 1000 }
}).explain("executionStats");

// Print stats log
printjson(explanation.executionStats.executionStages);
/*
Check the "stage" value in executionStages:
- "IXSCAN": Excellent (Index scan)
- "COLLSCAN": Bad (Full table scan)
- "FETCH": Document read from disk
*/
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`executionStats\` আউটপুট এনালাইসিস করে ধীরগতির ডাটাবেস অপারেশনগুলোর মূল কারণ চিহ্নিত করা সম্ভব।

**executionStats রিপোর্টের মূল ফিল্ডসমূহ:**
১. **\`executionTimeMillis\`**: কুয়েরি প্রসেস হতে কত মিলি-সেকেন্ড সময় লেগেছে। ইনডেক্সড কুয়েরি হলে এটি ০-এর কাছাকাছি হবে।
২. **\`totalKeysExamined\`**: কতটি ইনডেক্স এন্ট্রি রিড করা হয়েছে।
৩. **\`totalDocsExamined\`**: ডাটাবেসকে কতটি ডকুমেন্ট মেমোরি/ডিস্ক থেকে পড়তে হয়েছে।
৪. **\`nReturned\`**: কতটি ডকুমেন্ট ফাইনাল রেজাল্ট হিসেবে ক্লায়েন্টকে দেওয়া হয়েছে।

**পারফরম্যান্স অনুপাত এনালাইসিস:**
- **কাভার্ড কুয়েরি (Covered)**: \`totalKeysExamined > 0\`, \`totalDocsExamined == 0\`, \`nReturned > 0\`। এটি সবচেয়ে ফাস্ট মোড; ইনডেক্স থেকেই সব ডাটা পাওয়া গেছে, হার্ডডিস্ক থেকে কোনো ফাইল রিড করার প্রয়োজনই পড়েনি।
- **ইনডেক্সড কুয়েরি (IXSCAN + FETCH)**: \`totalKeysExamined == totalDocsExamined == nReturned\`। এটি একটি স্বাভাবিক স্বাস্থ্যকর কুয়েরি স্ট্যাটাস।
- **কালেকশন স্ক্যান (COLLSCAN)**: \`totalKeysExamined == 0\` এবং \`totalDocsExamined > nReturned\`। এটি সবচেয়ে স্লো ও ক্ষতিকর কুয়েরি স্ট্যাটাস।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন প্যানেলে সেলস রিপোর্ট জেনারেট করার সময় এপিআই স্লো হচ্ছে। আপনি এক্সপ্লেইন চালিয়ে দেখলেন: \`totalDocsExamined: 1000000\` এবং \`nReturned: 5\`। এর মানে ৫টি ডাটা পেতে ১০ লক্ষ ফাইল স্ক্যান করতে হচ্ছে। অর্থাৎ কুয়েরির ফিল্ডে ইনডেক্স নেই।

### উত্তম অনুশীলন
\`totalKeysExamined\` বনাম \`nReturned\`-এর অনুপাত চেক করুন। এই অনুপাত যদি খুব বেশি হয় (যেমন: ১০০:১), এর মানে আপনার কম্পাউন্ড ইনডেক্সটি সঠিক ক্রমানুসারে (ESR) তৈরি করা হয়নি।

### সাধারণ ভুলসমূহ
লোকাল হালকা ডাটাতে প্রোফাইলিং স্ট্যাটাস টেস্ট করে নিশ্চিত হয়ে যাওয়া। লোকাল ডাটাবেস ছোট হওয়ায় সব কুয়েরিই ফাস্ট দেখাবে। পারফরম্যান্স বিচার করতে স্টেজ বা প্রোডাকশনের সমপরিমাণ ক্লোন ডাটাতে explain রান করুন।

### Code Example
\`\`\`javascript
// কুয়েরির ওপর explain রান করা
const explanation = db.products.find({
  category: "Laptop",
  price: { $gte: 1000 }
}).explain("executionStats");

// এক্সিকিউশন স্টেজ প্রিন্ট করা
printjson(explanation.executionStats.executionStages);
/*
আউটপুটের "stage" প্রপার্টি চেক করুন:
- "IXSCAN": অত্যন্ত ভালো (ইনডেক্স স্ক্যান)
- "COLLSCAN": অত্যন্ত খারাপ (টেবিল স্ক্যান)
- "FETCH": ডিস্ক থেকে ফাইল রিড
*/
\`\`\``
  }
];
