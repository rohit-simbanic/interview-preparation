import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: "dsa-1",
    title: "Explain how an Array is stored in memory and its time complexities.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Arrays","Data Structures","Basics"],
    enAnswer: "An array is stored as a contiguous block of memory where each element is accessed using an index. Lookup by index is O(1), while insertion and deletion in the worst case are O(N).",
    bnAnswer: "একটি অ্যারে মেমোরিতে একটি ধারাবাহিক বা সংলগ্ন ব্লক হিসেবে সংরক্ষিত হয় যেখানে ইনডেক্স ব্যবহার করে উপাদানগুলো অ্যাক্সেস করা হয়। ইনডেক্স দিয়ে খোঁজা ও(১) সময়ে হয়, তবে ইনসার্ট ও ডিলিট করতে ও(এন) সময় লাগে।",
    enExplanation: `### Explanation
An array is a linear data structure that stores elements of the same type in contiguous memory locations. Because it is contiguous, the address of any element can be computed using the base address and offset: \`Address = BaseAddress + Index * ElementSize\`.
- **Time Complexities**:
  - **Access (by index)**: \$O(1)\$ - direct memory offset calculation.
  - **Search (by value)**: \$O(N)\$ - linear scan if unsorted, \$O(log N)\$ if sorted (using binary search).
  - **Insertion**: \$O(N)\$ - requires shifting elements if inserted at the beginning or middle.
  - **Deletion**: \$O(N)\$ - requires shifting elements to fill the gap.

### Real-World Example
An inventory list of items stored in consecutive boxes in a warehouse shelf. If you know the box number, you can get it instantly. If you add a box at the start, you must slide all other boxes down.

### Best Practice
Use arrays when you have a fixed size or need frequent random access by index. Prefer dynamic arrays (like vectors or ArrayLists) when size is unpredictable, but be aware of the resizing overhead.

### Common Mistakes
Accessing an array index out of bounds, which causes runtime errors (like SegFault or ArrayIndexOutOfBoundsException). Forgetting that inserting at index 0 shifts the entire array, causing performance issues in loop constructs.

### Code Example (TypeScript)
\`\`\`typescript
const arr: number[] = [10, 20, 30, 40];
// O(1) Lookup
const val = arr[2]; // 30

// O(N) Insertion at start
arr.unshift(5); // arr is now [5, 10, 20, 30, 40]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারে একটি লিনিয়ার ডাটা স্ট্রাকচার যা মেমোরিতে একের পর এক সংলগ্ন ব্লকে ডাটা স্টোর করে। সংলগ্ন ব্লকে থাকার কারণে বেস অ্যাড্রেস এবং ইনডেক্স ব্যবহার করে যেকোনো উপাদানের মেমোরি লোকেশন সরাসরি বের করা যায়: \`Address = BaseAddress + Index * ElementSize\`।
- **সময় জটিলতা (Time Complexities)**:
  - **অ্যাক্সেস (ইনডেক্স দিয়ে)**: \$O(1)\$ - সরাসরি মেমোরি অফসেট হিসাব।
  - **সার্চ (মান দিয়ে)**: \$O(N)\$ - পুরো অ্যারে ঘুরে খুঁজতে হয়, সর্টেড থাকলে \$O(log N)\$ (বাইনারি সার্চ)।
  - **ইনসার্ট**: \$O(N)\$ - শুরুতে বা মাঝখানে উপাদান যোগ করলে পরবর্তী সব উপাদান শিফট করতে হয়।
  - **ডিলিট**: \$O(N)\$ - উপাদানটি বাদ দেওয়ার পর ফাকা জায়গা পূরণ করতে পরের সব উপাদান এগিয়ে আনতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ওয়ারহাউসের তাকে ক্রমানুসারে রাখা বাক্সগুলো। যদি বাক্স নম্বর জানা থাকে তবে সাথে সাথে সেটি বের করা যাবে। কিন্তু শুরুর বক্সে নতুন কিছু রাখতে চাইলে পেছনের সব বাক্স সরাতে হবে।

### উত্তম অনুশীলন
ডাটার সাইজ নির্দিষ্ট থাকলে এবং ইনডেক্স দিয়ে ঘন ঘন ডাটা রিড করতে চাইলে অ্যারে ব্যবহার করুন। সাইজ পরিবর্তনশীল হলে ডাইনামিক অ্যারে ব্যবহার করতে পারেন, তবে মেমোরি রি-অ্যালোকেশনের ওভারহেড মাথায় রাখুন।

### সাধারণ ভুল
অ্যারের সীমার বাইরে (Out of Bounds) ইনডেক্স অ্যাক্সেস করা, যা অ্যাপ ক্র্যাশ করায়। লুপের ভেতর প্রতিবার শুরুতে ইনসার্ট (unshift) করা, যা পুরো অ্যারে শিফট করে পারফরম্যান্স অত্যন্ত স্লো করে দেয়।`
  },
  {
    id: "dsa-2",
    title: "Write an algorithm to reverse an array in-place.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Arrays","Two Pointers","Algorithms"],
    enAnswer: "To reverse an array in-place, use a two-pointer approach starting at the beginning and end, swapping elements and moving inward until they meet. The time complexity is O(N) and auxiliary space is O(1).",
    bnAnswer: "ইন-প্লেস অ্যারে রিভার্স করতে টু-পয়েন্টার অ্যাপ্রোচ ব্যবহার করুন: একটি পয়েন্টার শুরুতে এবং অন্যটি শেষে রেখে একে অপরের উপাদান সোয়াপ বা বিনিময় করতে করতে তারা কেন্দ্রে না পৌঁছানো পর্যন্ত এগোবে। এর সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
Reversing an array "in-place" means we modify the original array without allocating extra space for another array.
- **Two-Pointer Approach**:
  1. Initialize two pointers: \`left\` at index 0 and \`right\` at index \`N - 1\`.
  2. Swap the elements at \`left\` and \`right\`.
  3. Increment \`left\` and decrement \`right\`.
  4. Repeat until \`left >= right\`.
- **Complexity**:
  - **Time**: \$O(N)\$ since we visit each element once.
  - **Space**: \$O(1)\$ auxiliary space as we only use a few pointer variables.

### Real-World Example
Rearranging a deck of cards face-to-back by swapping the first with the last, second with the second last, and so on, until you reach the middle.

### Best Practice
Always prefer in-place reversal over allocating a new array unless the original data must remain immutable, as it saves memory allocations and CPU garbage collection.

### Common Mistakes
Using a loop that goes from index 0 to N-1 and swapping elements, which ends up reversing the array twice and restoring it to its original order. Make sure the loop stops at the midpoint (\`left < right\`).

### Code Example (TypeScript)
\`\`\`typescript
function reverseArray(arr: number[]): void {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারে "ইন-প্লেস" রিভার্স করার অর্থ হলো কোনো অতিরিক্ত মেমোরি ব্যবহার না করে মূল অ্যারেটিকেই উল্টে ফেলা।
- **টু-পয়েন্টার মেথড**:
  ১. দুটি পয়েন্টার সেট করুন: \`left\` থাকবে ইনডেক্স ০-তে এবং \`right\` থাকবে ইনডেক্স \`N - 1\`-এ।
  ২. \`left\` এবং \`right\` পজিশনের উপাদান দুটি একে অপরের সাথে সোয়াপ বা অদলবদল করুন।
  ৩. \`left\` পয়েন্টার ১ বাড়িয়ে এগিয়ে নিন এবং \`right\` পয়েন্টার ১ কমিয়ে পিছিয়ে আনুন।
  ৪. লুপটি চালাতে থাকুন যতক্ষণ না \`left\` পয়েন্টার \`right\` পয়েন্টারের সমান বা বড় হয়।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ কারণ আমরা প্রতিটি উপাদান একবার ভিজিট করছি।
  - **স্পেস**: \$O(1)\$ অতিরিক্ত মেমোরি প্রয়োজন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইনে দাঁড়ানো ছাত্র-ছাত্রীদের মুখোমুখি ঘুরিয়ে দেওয়ার মতো: লাইনের ১ম জন শেষ জনের সাথে জায়গা বদল করবে, ২য় জন শেষ থেকে ২য় জনের সাথে বদল করবে, এভাবে মাঝে পৌঁছানো পর্যন্ত।

### উত্তম অনুশীলন
অরিজিনাল ডাটা অপরিবর্তিত রাখার প্রয়োজন না থাকলে সর্বদা ইন-প্লেস রিভার্স ব্যবহার করুন, এটি মেমোরি সাশ্রয় করে।

### সাধারণ ভুল
লুপটি অর্ধেক যাওয়ার পর না থামিয়ে পুরো সাইজ (N) পর্যন্ত চালানো, যার ফলে অ্যারেটি পুনরায় আগের অবস্থায় চলে আসে। লুপ কন্ডিশন অবশ্যই \`left < right\` হতে হবে।`
  },
  {
    id: "dsa-3",
    title: "Compare Singly Linked Lists vs. Arrays.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Linked Lists","Arrays","Data Structures"],
    enAnswer: "Arrays are stored in contiguous memory and offer O(1) random access, but have costly resizing. Linked Lists are non-contiguous, connecting nodes via pointers, allowing O(1) insertion/deletion at nodes but O(N) access.",
    bnAnswer: "অ্যারে মেমোরিতে ক্রমানুসারে সংলগ্ন ব্লকে ডাটা স্টোর করে এবং ও(১) অ্যাক্সেস সুবিধা দেয়, তবে এর সাইজ বদলানো কঠিন। লিঙ্কড লিস্টের উপাদানগুলো বিক্ষিপ্তভাবে থাকে এবং নোডগুলো একে অপরের সাথে পয়েন্টার দিয়ে যুক্ত থাকে, যা ও(১) ইনসার্ট করতে দেয় কিন্তু অ্যাক্সেস করতে ও(এন) সময় লাগে।",
    enExplanation: `### Explanation
- **Memory Allocation**:
  - **Array**: Static/Contiguous. Allocated as one continuous block.
  - **Linked List**: Dynamic/Non-contiguous. Nodes are allocated dynamically in heap space and linked via pointers.
- **Comparison Table**:
  | Operations | Array | Linked List |
  | :--- | :--- | :--- |
  | **Access Time** | \$O(1)\$ (Random Access) | \$O(N)\$ (Sequential Access) |
  | **Insert/Delete (Start)** | \$O(N)\$ (Shifting overhead) | \$O(1)\$ (Pointer updates) |
  | **Insert/Delete (End)** | \$O(1)\$ (if capacity exists) | \$O(N)\$ (requires traversing to tail unless tail pointer is maintained) |
  | **Memory Overhead** | Smallest (just data elements) | Large (extra space for pointer address in each node) |

### Real-World Example
- **Array**: A pre-booked row of seats in a cinema hall. You can go to seat #5 instantly.
- **Linked List**: A treasure hunt game where each clue card tells you the location of the next clue card. You must follow the sequence to find the target.

### Best Practice
Choose arrays when you need random lookup and size is predictable. Choose linked lists when you have a highly dynamic set of elements with frequent insertions and deletions at the head/ends.

### Common Mistakes
Assuming linked lists are always faster because of \$O(1)\$ insertions. In modern CPUs, arrays perform significantly faster for traversal due to **cache locality**, whereas linked list node lookups trigger cache misses.

### Structure Diagram
\`\`\`
Array: [ Data0 | Data1 | Data2 | Data3 ] (Consecutive addresses)

Linked List: [Data|Next] ---> [Data|Next] ---> [Data|Null] (Scattered addresses)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **মেমোরি বিন্যাস**:
  - **অ্যারে**: স্ট্যাটিক/সংলগ্ন ব্লক। মেমোরিতে একটি নির্দিষ্ট সাইজের সিঙ্গেল ব্লক দখল করে।
  - **লিঙ্কড লিস্ট**: ডাইনামিক/অসংলগ্ন। নোডগুলো মেমোরির যেকোনো জায়গায় থাকতে পারে এবং পয়েন্টার বা অ্যাড্রেস দিয়ে সংযুক্ত থাকে।
- **তুলনামূলক টেবিল**:
  | অপারেশন | অ্যারে | লিঙ্কড লিস্ট |
  | :--- | :--- | :--- |
  | **অ্যাক্সেস টাইম** | \$O(1)\$ (র্যান্ডম অ্যাক্সেস) | \$O(N)\$ (ধারাবাহিক অ্যাক্সেস) |
  | **শুরুতে ইনসার্ট/ডিলিট** | \$O(N)\$ (উপাদান সরানোর কারণে) | \$O(1)\$ (পয়েন্টার পরিবর্তন) |
  | **শেসে ইনসার্ট/ডিলিট** | \$O(1)\$ (ফ্রি স্পেস থাকলে) | \$O(N)\$ (শেষে যাওয়ার কারণে) |
  | **মেমোরি অতিরিক্ত ব্যয়** | নেই (শুধু ডাটা থাকে) | বেশি (পয়েন্টার সেভ রাখার এক্সট্রা মেমোরি) |

### বাস্তব-ভিত্তিক উদাহরণ
- **অ্যারে**: একটি ট্রেনের নির্দিষ্ট পাশাপাশি সিট নম্বর। আপনি সরাসরি ৫ নম্বর সিটে যেতে পারবেন।
- **লিঙ্কড লিস্ট**: কাগজের চিরকুটের খেলা। ১ম চিরকুটে লেখা আছে ২য় চিরকুটের ঠিকানা, ২য় চিরকুটে ৩য়টির ঠিকানা। আপনি সরাসরি শেষের চিরকুট পড়তে পারবেন না।

### উত্তম অনুশীলন
র্যান্ডম রিড অপারেশন বেশি থাকলে এবং সাইজ নির্ধারিত থাকলে অ্যারে ব্যবহার করুন। অন্যদিকে অনবরত ডাটা ইনসার্ট/ডিলিট করার প্রয়োজন হলে লিঙ্কড লিস্ট ব্যবহার করতে পারেন।

### সাধারণ ভুল
মনে করা লিঙ্কড লিস্ট সব সময় ফাস্ট। আধুনিক সিপিইউ ক্যাশ অপ্টিমাইজেশনের কারণে ক্যাশ লোকালিটি সুবিধার জন্য অ্যারে প্রসেস করা লিঙ্কড লিস্টের চেয়ে অনেক দ্রুত হয়।`
  },
  {
    id: "dsa-4",
    title: "Explain how to reverse a Singly Linked List in-place.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Linked Lists","Two Pointers","Algorithms"],
    enAnswer: "To reverse a singly linked list in-place, iterate through the list using three pointers: prev, curr, and next. In each step, point curr.next to prev, then shift the pointers forward. Time complexity is O(N) and space is O(1).",
    bnAnswer: "ইন-প্লেস লিঙ্কড লিস্ট রিভার্স করতে ৩টি পয়েন্টার (prev, curr এবং next) ব্যবহার করতে হবে। প্রতিটি ধাপে curr.next পয়েন্টারটিকে পেছনের prev নোডে ঘুরিয়ে দিন এবং পয়েন্টারগুলোকে এক ধাপ সামনে এগিয়ে নিন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
To reverse a singly linked list, we must flip the direction of all next pointers without losing track of the remaining nodes.
- **Three-Pointer Iteration**:
  1. Initialize three node pointers: \`prev = null\`, \`curr = head\`, and \`next = null\`.
  2. Loop while \`curr\` is not null:
     - Store the next node: \`next = curr.next\` (so we don't lose the rest of the list).
     - Reverse the pointer: \`curr.next = prev\` (point backwards).
     - Move pointers forward: \`prev = curr\`, \`curr = next\`.
  3. The new head of the reversed list will be \`prev\`.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass through the list.
  - **Space**: \$O(1)\$ - no extra memory allocated.

### Real-World Example
A line of people holding hands, where each person places their hand on the shoulder of the person in front. To reverse the direction, each person must turn around and place their hand on the shoulder of the person who was behind them.

### Best Practice
Always handle the edge cases carefully: empty lists (\`head === null\`) and lists with a single node (\`head.next === null\`) should return the head immediately.

### Common Mistakes
Forgetting to save the \`curr.next\` pointer before changing it, which cuts off the remaining list and causes the pointer traversal to fail (NullPointer dereferencing).

### Code Example (TypeScript)
\`\`\`typescript
class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number) { this.val = val; }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  
  while (curr !== null) {
    const nextNode = curr.next; // Save next
    curr.next = prev;           // Reverse link
    prev = curr;                // Move prev
    curr = nextNode;            // Move curr
  }
  return prev;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি লিঙ্কড লিস্ট উল্টানোর জন্য অবশিষ্ট নোডগুলোর ট্র্যাকিং না হারিয়ে প্রতিটি নোডের \`next\` পয়েন্টারটিকে তার পেছনের নোডের দিকে রি-ডিরেক্ট করতে হয়।
- **তিন-পয়েন্টার অ্যালগরিদম**:
  ১. ৩টি ভেরিয়েবল নিন: \`prev = null\`, \`curr = head\`, এবং \`next = null\`।
  ২. \`curr !== null\` হওয়া পর্যন্ত লুপ চালান:
     - পরবর্তী নোড সেভ রাখুন: \`next = curr.next\`।
     - লিঙ্ক উল্টে দিন: \`curr.next = prev\`।
     - পয়েন্টার সামনে বাড়ান: \`prev = curr\`, এবং \`curr = next\`।
  ৩. লুপ শেষে \`prev\` হবে নতুন হেড নোড।
- **জতিলা (Complexity)**:
  - **সময়**: \$O(N)\$ - একবার লিস্ট ট্রাভার্স করতে হয়।
  - **স্পেস**: \$O(1)\$ - অতিরিক্ত মেমোরি লাগে না।

### বাস্তব-ভিত্তিক উদাহরণ
একদল মানুষ লাইনে দাঁড়িয়ে একে অপরের কাঁধে হাত দিয়ে আছে। লাইন উল্টাতে হলে সবাইকে ঘুরে দাঁড়িয়ে তার পেছনের মানুষের কাঁধে হাত রাখতে হবে।

### উত্তম অনুশীলন
খালি লিস্ট (\`head === null\`) অথবা একটি মাত্র নোড থাকা লিস্টের জন্য শুরুতেই চেক বসিয়ে রিটার্ন করে দিন যাতে এজ কেস মিস না হয়।

### সাধারণ ভুল
\`curr.next\`-এর লিংক পরিবর্তন করার আগে পরের নোডের অ্যাড্রেস সেভ না করা, যার ফলে বাকি নোডগুলো মেমোরি থেকে হারিয়ে যায় এবং লুপ ব্রেক হয়ে যায়।`
  },
  {
    id: "dsa-5",
    title: "Explain the Two Sum problem and solve it using a Hash Map.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Arrays","Hash Map","Algorithms"],
    enAnswer: "The Two Sum problem finds indices of two numbers in an array that add up to a target. Using a Hash Map, we can store visited values and lookup the complement (target - num) in O(1), giving an overall O(N) time complexity.",
    bnAnswer: "Two Sum প্রবলেমটি একটি অ্যারে থেকে দুটি সংখ্যার ইনডেক্স খুঁজে বের করে যাদের যোগফল নির্দিষ্ট টার্গেটের সমান। একটি হ্যাশ ম্যাপ ব্যবহার করে পূর্ববর্তী সংখ্যাগুলো স্টোর করে কমপ্লিমেন্ট (টার্গেট - বর্তমান সংখ্যা) ও(১) সময়ে খুঁজে বের করে ও(এন) সময়ে প্রবলেমটি সলভ করা যায়।",
    enExplanation: `### Explanation
Given an array of integers \`nums\` and an integer \`target\`, find the indices of the two numbers such that they add up to \`target\`.
- **Brute Force**: Try all pairs using nested loops. Time complexity: \$O(N^2)\$.
- **Hash Map Approach (Single Pass)**:
  1. Create a hash map to store \`value: index\`.
  2. For each number \`num\` at index \`i\`:
     - Calculate \`complement = target - num\`.
     - Check if \`complement\` exists in the hash map. If yes, return \`[map.get(complement), i]\`.
     - If no, store \`num\` and its index \`i\` in the map.
- **Complexity**:
  - **Time**: \$O(N)\$ - lookup and insertion in map takes \$O(1)\$ on average.
  - **Space**: \$O(N)\$ - to store array elements in the hash map.

### Real-World Example
A cashier checks if they have two items in their register whose total price matches a coupon value. Instead of checking every pair, they keep a lookup sheet of prices they have already seen.

### Best Practice
Use the Hash Map method to trade space for time. It is highly optimized compared to sorting the array first, which would take \$O(N log N)\$ time and change the original index positions.

### Common Mistakes
Using the same element twice (e.g. if target is 6 and array has 3, returning index of 3 twice). A hash map check prevents this because we lookup before adding the current element to the map.

### Code Example (TypeScript)
\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // Stores value -> index
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত একটি অ্যারে \`nums\` এবং একটি টার্গেট সংখ্যা থেকে এমন দুটি সংখ্যার ইনডেক্স বের করতে হবে যাদের যোগফল টার্গেটের সমান।
- **ব্রুট ফোর্স মেথড**: নেস্টেড লুপ চালিয়ে প্রতিটি পেয়ার চেক করা। সময় জটিলতা: \$O(N^2)\$।
- **হ্যাশ ম্যাপ মেথড (একক পাস)**:
  ১. একটি হ্যাশ ম্যাপ তৈরি করুন যা জোড়া ডাটা \`value: index\` স্টোর করবে।
  ২. লুপের প্রতিটি সংখ্যা \`nums[i]\`-এর জন্য:
     - বাকী অংশ হিসাব করুন: \`complement = target - nums[i]\`।
     - যদি হ্যাশ ম্যাপে এই \`complement\` থাকে, তবে আগের ইনডেক্স ও বর্তমান ইনডেক্স \`[map.get(complement), i]\` রিটার্ন করুন।
     - না থাকলে বর্তমান সংখ্যা ও তার ইনডেক্স ম্যাপে যোগ করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - হ্যাশ ম্যাপের সার্চ \$O(1)\$ হওয়ায়।
  - **স্পেস**: \$O(N)\$ - ডাটাগুলো ম্যাপে স্টোর করার জন্য মেমোরি লাগে।

### বাস্তব-ভিত্তিক উদাহরণ
একজন ক্যাশিয়ার চেক করছেন তার কাছে এমন দুটি প্রোডাক্ট আছে কিনা যাদের মূল্যের যোগফল একটি গিফট ভাউচারের সমান। তিনি আগের দেখা প্রোডাক্টের প্রাইস শিট লিখে রাখেন যাতে সহজে ম্যাচ করতে পারেন।

### উত্তম অনুশীলন
সময় বাঁচাতে স্পেস বা মেমোরি ব্যবহারের ট্রেড-অফ মেনে চলুন। প্রথমে সর্ট করে টু-পয়েন্টার চালালে \$O(N log N)\$ লাগতো এবং ইনডেক্স নষ্ট হয়ে যেত, তাই হ্যাশ ম্যাপ ব্যবহার করাই উত্তম।

### সাধারণ ভুল
একই ইনডেক্সের উপাদান দুইবার যোগ করে ফেলা (যেমন টার্গেট ৪, অ্যারেতে ২ আছে, ২-কে দুইবার ব্যবহার করা)। হ্যাশ ম্যাপে চেক করার সময় বর্তমান উপাদানটি ম্যাপে অ্যাড করার আগে চেক চালানো উচিত।`
  },
  {
    id: "dsa-6",
    title: "Explain the Stack data structure and its core operations.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Stack","Data Structures","Basics"],
    enAnswer: "A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Its core operations are push (inserts element in O(1)), pop (removes last element in O(1)), and peek (reads top element in O(1)).",
    bnAnswer: "স্ট্যাক একটি লিনিয়ার ডাটা স্ট্রাকচার যা LIFO (Last In, First Out) নীতি অনুসরণ করে। এর প্রধান অপারেশনগুলো হলো push (ও(১)-এ উপাদান যোগ করা), pop (ও(১)-এ শেষের উপাদান মুছে ফেলা), এবং peek (ও(১)-এ টপ উপাদান দেখা)।",
    enExplanation: `### Explanation
A Stack is a LIFO (Last In, First Out) collection. The element added last is the first to be removed. It acts like a container where access is restricted to only one end (the top).
- **Core Operations**:
  - **Push**: Adds an item to the top. Complexity: \$O(1)\$.
  - **Pop**: Removes the item from the top. Complexity: \$O(1)\$.
  - **Peek/Top**: Returns the top item without removing it. Complexity: \$O(1)\$.
  - **isEmpty**: Checks if the stack is empty. Complexity: \$O(1)\$.

### Real-World Example
- A stack of dinner plates. You always add new plates to the top and remove plates from the top.
- Browser History (Back button): The last page visited is pushed onto history stack; clicking "Back" pops it to return to the previous page.

### Best Practice
Implement stacks using dynamic arrays (like JS Array push/pop) or linked lists. Use stacks for backtracking tasks, call stack tracking, expression parsing, or balancing parenthesis.

### Common Mistakes
Attempting to pop from an empty stack, which triggers a **Stack Underflow** error. Forgetting recursion uses the system call stack, which can cause a **Stack Overflow** if recursion depth is too deep.

### Stack Diagram
\`\`\`
  |   Data3   | <- Top of Stack
  |   Data2   |
  |   Data1   |
  +-----------+
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্যাক হলো একটি LIFO (Last In, First Out) ডাটা স্ট্রাকচার। অর্থাৎ সবার শেষে যে ডাটা রাখা হবে, সেটিই সবার আগে বের হবে। এটি এমন একটি পাত্রের মতো যার শুধুমাত্র এক প্রান্ত (টপ) দিয়ে ডাটা আদান-প্রদান করা যায়।
- **প্রধান দায়িত্বসমূহ (Operations)**:
  - **Push**: স্ট্যাকের ওপরে নতুন উপাদান যোগ করা। জটিলতা: \$O(1)\$।
  - **Pop**: স্ট্যাকের উপর থেকে উপাদান মুছে ফেলে তা রিটার্ন করা। জটিলতা: \$O(1)\$।
  - **Peek/Top**: স্ট্যাকের ওপরের উপাদানটি না মুছে শুধুমাত্র সেটি ভিউ করা। জটিলতা: \$O(1)\$।
  - **isEmpty**: স্ট্যাক খালি কিনা পরীক্ষা করা। জটিলতা: \$O(1)\$।

### বাস্তব-ভিত্তিক উদাহরণ
- খাওয়ার প্লেটের স্তূপ। আপনি সবসময় ওপরে নতুন প্লেট রাখেন এবং ওখান থেকেই প্লেট তুলে নেন।
- ব্রাউজারের ব্যাক বাটন (Back Button)। শেষ দেখা ওয়েবসাইটটি হিস্ট্রি স্ট্যাকে জমা থাকে। ব্যাক চাপলে সেটি পপ হয়ে আগের পেজে নিয়ে যায়।

### উত্তম অনুশীলন
সহজ ইমপ্লিমেন্টেশনের জন্য ডাইনামিক অ্যারে (যেমন JS Array push/pop) ব্যবহার করুন। ব্যাকট্র্যাকিং, এক্সপ্রেশন পার্সিং বা প্যারেন্থেসিস চেক করার কাজের জন্য স্ট্যাক ব্যবহার করা উপযুক্ত।

### সাধারণ ভুল
খালি স্ট্যাক থেকে উপাদান পপ করার চেষ্টা করা, যা **Stack Underflow** এরর ঘটায়। রিকার্সনে বেস কেস না রাখলে সিস্টেম কল স্ট্যাক জ্যাম হয়ে **Stack Overflow** ক্র্যাশ হতে পারে।`
  },
  {
    id: "dsa-7",
    title: "Check if a string containing parentheses is valid using a Stack.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Stack","Strings","Algorithms"],
    enAnswer: "To validate brackets, iterate through the string pushing opening brackets onto a stack. For closing brackets, check if the stack top matches; if yes pop, else return false. The stack must be empty at the end. Time complexity is O(N) and space is O(N).",
    bnAnswer: "ব্র্যাকেট ভ্যালিডেশন করতে স্ট্রিংয়ের ভেতর লুপ চালিয়ে ওপেনিং ব্র্যাকেটগুলো স্ট্যাকে পুশ করুন। ক্লোজিং ব্র্যাকেট আসলে স্ট্যাকের টপ উপাদানটি ম্যাচ করে কিনা চেক করুন; ম্যাচ করলে পপ করুন, না করলে false দিন। শেষে স্ট্যাক খালি হতে হবে। সময় ও স্পেস জটিলতা ও(এন)।",
    enExplanation: `### Explanation
Given a string containing characters \`(\`, \`)\`, \`{\`, \`}\`, \`[\` and \`]\`, determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets in the correct order.
- **Algorithm**:
  1. Initialize an empty stack.
  2. Map closing brackets to opening brackets for quick lookup: \`{ ')': '(', '}': '{', ']': '[' }\`.
  3. Loop through characters:
     - If it is an opening bracket, push to stack.
     - If it is a closing bracket, check the top of the stack. If stack is empty or doesn't match the mapped open bracket, return false. Otherwise, pop.
  4. Return true if stack is empty, else false.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass over string.
  - **Space**: \$O(N)\$ - in worst case, we push all opening brackets to stack.

### Real-World Example
Code editors validating syntax brackets. If you close a curly brace before closing a parenthesis, the IDE highlights a compiler error.

### Best Practice
Using a map key lookup makes it clean to scale the code if new bracket characters (like \`<\` and \`>\`) need to be supported in the future.

### Common Mistakes
Returning true without checking if the stack is empty at the end. For example, input \`"(()"\` would push twice, pop once, leaving 1 bracket in stack. If not checked, it wrongly returns valid.

### Code Example (TypeScript)
\`\`\`typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (map[char]) {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইনপুট স্ট্রিংয়ে ব্র্যাকেটগুলো সঠিক ক্রমানুসারে ক্লোজ হয়েছে কিনা তা চেক করতে স্ট্যাক ডাটা স্ট্রাকচার সবচেয়ে বেশি কার্যকরী।
- **ধাপসমূহ**:
  ১. একটি ফালি স্ট্যাক ডিক্লেয়ার করুন।
  ২. ক্লোজিং ব্র্যাকেটের সাথে ওপেনিং ব্র্যাকেটের ম্যাপ তৈরি করুন: \`{ ')': '(', '}': '{', ']': '[' }\`।
  ৩. স্ট্রিংয়ের প্রতিটি ক্যারেক্টারের মধ্য দিয়ে লুপ চালান:
     - যদি এটি ওপেনিং ব্র্যাকেট হয়, স্ট্যাকে পুশ করুন।
     - যদি ক্লোজিং ব্র্যাকেট হয়, চেক করুন স্ট্যাক খালি কিনা অথবা স্ট্যাকের টপ উপাদানটি এই ব্র্যাকেটের ওপেনিং রূপ কিনা। শর্ত না মিললে false রিটার্ন করুন, মিললে পপ করুন।
  ৪. লুপ শেষে স্ট্যাক সম্পূর্ণ খালি থাকলে true রিটার্ন করুন, অন্যথায় false।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - পুরো স্ট্রিং একবার চেক করার জন্য।
  - **স্পেস**: \$O(N)\$ - স্ট্যাকে ডাটা রাখার জন্য।

### বাস্তব-ভিত্তিক উদাহরণ
কোড এডিটরের সিনট্যাক্স হাইলাইটার। আপনি একটি থার্ড ব্র্যাকেট ক্লোজ করার আগে যদি ফার্স্ট ব্র্যাকেট ক্লোজ করেন তবে এডিটর এরর দেখায়।

### উত্তম অনুশীলন
ম্যাপ ব্যবহারের মাধ্যমে কোড ক্লিন রাখুন, এতে পরবর্তীতে নতুন কোনো ব্র্যাকেট ক্যারেক্টার অ্যাড করা সহজ হয়।

### সাধারণ ভুল
লুপ শেষে স্ট্যাক খালি হয়েছে কিনা তা চেক করতে ভুলে যাওয়া। যেমন \`"(()"\` স্ট্রিংয়ের জন্য লুপের পর স্ট্যাকে ১টি ব্র্যাকেট ঝুলে থাকবে, যা ইনভ্যালিড কিন্তু চেক না করলে এটি পাস হয়ে যাবে।`
  },
  {
    id: "dsa-8",
    title: "Explain the Queue data structure and its core operations.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Queue","Data Structures","Basics"],
    enAnswer: "A Queue is a linear data structure that follows the First In, First Out (FIFO) principle. Its core operations are enqueue (inserts element at tail in O(1)) and dequeue (removes element from head in O(1)).",
    bnAnswer: "কিউ একটি লিনিয়ার ডাটা স্ট্রাকচার যা FIFO (First In, First Out) নীতি অনুসরণ করে। এর মূল অপারেশনগুলো হলো enqueue (ও(১)-এ শেষে উপাদান যোগ করা) এবং dequeue (ও(১)-এ শুরু থেকে উপাদান মুছে ফেলা)।",
    enExplanation: `### Explanation
A Queue is a FIFO (First In, First Out) collection. The element inserted first is the one removed first. Elements are inserted at the back (rear/tail) and removed from the front (head).
- **Core Operations**:
  - **Enqueue**: Adds an item to the rear. Complexity: \$O(1)\$.
  - **Dequeue**: Removes the item from the front. Complexity: \$O(1)\$.
  - **Front/Peek**: Returns the front item without removing it. Complexity: \$O(1)\$.
  - **isEmpty**: Checks if the queue is empty. Complexity: \$O(1)\$.

### Real-World Example
- A queue of customers waiting at a ticket counter. The person arriving first gets the ticket first.
- Printer Job Queue: Documents sent to the printer are printed in the order they were submitted.

### Best Practice
Avoid using standard JavaScript arrays with \`shift()\` for dequeue, as array \`shift()\` is an \$O(N)\$ operation due to index realignment. Use a linked list or keep track of start/end pointers in an object to maintain true \$O(1)\$ operations.

### Common Mistakes
Forgetting that removing from the front of a flat array has a time complexity of \$O(N)\$. For memory efficiency, use a **Circular Queue** to reuse empty slots created by dequeues.

### Queue Diagram
\`\`\`
Front (Dequeue)                       Rear (Enqueue)
      v                                      v
  [ HeadNode ] ---> [ Node1 ] ---> [ TailNode ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কিউ (Queue) হলো একটি FIFO (First In, First Out) ডাটা স্ট্রাকচার। অর্থাৎ যে উপাদানটি প্রথমে যোগ করা হয়েছিল, সেটিই সবার আগে বের হবে। এটি একমুখী লাইনের মতো যার এক মাথা (Rear) দিয়ে ডাটা ঢুকে এবং অন্য মাথা (Front) দিয়ে ডাটা বের হয়।
- **প্রধান দায়িত্বসমূহ**:
  - **Enqueue**: লাইনের পেছনে নতুন উপাদান যোগ করা। জটিলতা: \$O(1)\$।
  - **Dequeue**: লাইনের সামনে থেকে উপাদান মুছে ফেলে তা রিটার্ন করা। জটিলতা: \$O(1)\$।
  - **Front/Peek**: লাইনের প্রথম উপাদানটি না মুছে শুধুমাত্র সেটি ভিউ করা। জটিলতা: \$O(1)\$।
  - **isEmpty**: কিউ খালি কিনা পরীক্ষা করা। জটিলতা: \$O(1)\$।

### বাস্তব-ভিত্তিক উদাহরণ
- টিকিট কাউন্টারের সামনে ক্রেতাদের লাইন। যে প্রথমে আসবে সে টিকিট প্রথমে পাবে।
- প্রিন্টারের কাজের লাইন (Printer Queue)। যে ফাইলটি আগে প্রিন্ট করতে দেওয়া হয় তা আগে প্রিন্ট হয়।

### উত্তম অনুশীলন
জাভাস্ক্রিপ্ট অ্যারের \`shift()\` ফাংশন দিয়ে dequeue করা এড়িয়ে চলুন, কারণ এটি অভ্যন্তরীণ সব ইনডেক্স রিসিঙ্ক করে \$O(N)\$ সময় নষ্ট করে। পয়েন্টার ট্র্যাকিং বা লিঙ্কড লিস্ট ব্যবহার করে খাঁটি \$O(1)\$ অর্জন করুন।

### সাধারণ ভুল
সাধারণ ফ্ল্যাট অ্যারে ব্যবহার করে কিউ চালালে শুরু থেকে ডিলিট করার অপারেশনটি ধীরগতির (\$O(N)\$) হয়ে পড়ে। মেমোরি বাঁচানোর জন্য সার্কুলার কিউ (Circular Queue) ব্যবহার করা একটি উত্তম উপায়।`
  },
  {
    id: "dsa-9",
    title: "Implement a Queue using two Stacks.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Queue","Stack","Algorithms"],
    enAnswer: "To implement a queue using two stacks (stack1, stack2), push elements onto stack1 for enqueue. For dequeue, if stack2 is empty, pop all elements from stack1 and push them to stack2, then pop from stack2. Amortized time complexity is O(1).",
    bnAnswer: "দুটি স্ট্যাক (stack1, stack2) দিয়ে কিউ ইমপ্লিমেন্ট করতে, enqueue করার সময় stack1-এ পুশ করুন। Dequeue করার সময় যদি stack2 খালি থাকে, তবে stack1-এর সব উপাদান পপ করে stack2-তে পুশ করুন এবং stack2 থেকে পপ করুন। এর অ্যামোর্টাইজড সময় জটিলতা ও(১)।",
    enExplanation: `### Explanation
A Stack is LIFO while a Queue is FIFO. By using two stacks, we can reverse the order of elements twice to restore queue order.
- **Mechanism**:
  - **Enqueue**: Push onto \`stack1\`. Time complexity: \$O(1)\$.
  - **Dequeue**:
    - If \`stack2\` is empty, pop all items from \`stack1\` and push them into \`stack2\`. This reverses the LIFO order to FIFO order.
    - Pop from \`stack2\`.
    - If \`stack2\` is not empty, simply pop from \`stack2\`.
- **Complexity**:
  - **Enqueue**: \$O(1)\$.
  - **Dequeue**: Amortized \$O(1)\$. Although copying elements takes \$O(N)\$ time, each element is copied at most once, making the average cost per operation \$O(1)\$.
  - **Space**: \$O(N)\$ to store elements.

### Real-World Example
Transferring a stack of books from one box to another. The bottom book of the first box becomes the top book of the second box, allowing you to access it first.

### Best Practice
Only migrate elements from \`stack1\` to \`stack2\` when \`stack2\` is completely empty. This preserves the correct chronological order of the elements.

### Common Mistakes
Copying elements back and forth between stack1 and stack2 on every single enqueue or dequeue operation, which destroys the amortized performance and runs in \$O(N)\$ time.

### Code Example (TypeScript)
\`\`\`typescript
class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];
  
  enqueue(x: number): void {
    this.stack1.push(x);
  }
  
  dequeue(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2.pop();
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্ট্যাক LIFO নীতি মেনে চলে এবং কিউ FIFO নীতি মানে। দুটি স্ট্যাকের মাধ্যমে উপাদানগুলোকে দুইবার রিভার্স বা উল্টে দিয়ে আমরা কিউয়ের অর্ডার ফিরে পেতে পারি।
- **কাজের নিয়ম**:
  - **Enqueue**: নতুন ডাটা সরাসরি \`stack1\`-এ পুশ করুন। সময় জটিলতা: \$O(1)\$।
  - **Dequeue**:
    - যদি \`stack2\` খালি থাকে, তবে \`stack1\`-এর সমস্ত উপাদান একে একে পপ করে \`stack2\`-তে পুশ করুন। এতে প্রথম স্ট্যাকের উল্টো সিকোয়েন্স সোজা হয়ে যায়।
    - এরপর \`stack2\` থেকে উপাদান পপ করে রিটার্ন করুন।
    - যদি \`stack2\` খালি না থাকে, সরাসরি সেখান থেকে পপ করুন।
- **জটিলতা (Complexity)**:
  - **Enqueue**: \$O(1)\$।
  - **Dequeue**: অ্যামোর্টাইজড \$O(1)\$। যদিও ডাটা ট্রান্সফারের সময়ে \$O(N)\$ সময় লাগে, কিন্তু প্রতিটি উপাদান পুরো লাইফসাইকেলে মাত্র একবারই ট্রান্সফার হয়, তাই গড় হিসাব \$O(1)\$।

### বাস্তব-ভিত্তিক উদাহরণ
এক বক্সের বই অন্য বক্সে ঢালা। ১ম বক্সের সবার নিচের বইটি ২য় বক্সের ওপরে চলে আসবে, যা আগে রিড করা যাবে।

### উত্তম অনুশীলন
শুধুমাত্র যখন \`stack2\` সম্পূর্ণ খালি হবে, তখনই কেবল \`stack1\` থেকে ডাটা ট্রান্সফার করুন। অন্যথায় ডিকিউয়ের সিকোয়েন্স এলোমেলো হয়ে যাবে।

### সাধারণ ভুল
প্রতিবার ইনসার্ট বা ডিলিটের সময় ডাটা একবার stack1 থেকে stack2 এবং পুনরায় stack2 থেকে stack1-এ নিয়ে যাওয়া, যা কোডকে অলস এবং ধীরগতির (\$O(N)\$) করে তোলে।`
  },
  {
    id: "dsa-10",
    title: "What is a collision in a Hash Map, and how is it resolved?",
    difficulty: "basic",
    category: "dsa",
    tags: ["Hash Map","Data Structures","Basics"],
    enAnswer: "A hash collision occurs when two different keys hash to the same bucket index. Collisions are resolved using Chaining (storing colliding items in a linked list at the bucket) or Open Addressing (finding another empty bucket).",
    bnAnswer: "হ্যাশ কলিশন বা সংঘর্ষ ঘটে যখন দুটি আলাদা কী (Key) হ্যাশ ফাংশনের মাধ্যমে একই বাকেট ইনডেক্স তৈরি করে। এটি সমাধান করার প্রধান দুটি উপায় হলো Chaining (একই বাকেটে লিঙ্কড লিস্ট রাখা) এবং Open Addressing (অন্য কোনো ফাকা বাকেট খুঁজে নেওয়া)।",
    enExplanation: `### Explanation
A Hash Map uses a hash function to map keys to indexes in an array. Since the number of possible keys is infinite but the array size is finite, two keys can yield the same index. This is a **Hash Collision**.
- **Resolution Methods**:
  1. **Chaining (Separate Chaining)**: Each bucket contains a linked list of all key-value pairs that hash to this index.
     - **Lookup**: Go to index, traverse list to match key. Worst case \$O(N)\$, average \$O(1)\$.
  2. **Open Addressing**: All elements are stored inside the hash table array. On collision, probe/scan other cells:
     - **Linear Probing**: Check next index: \`(index + 1) % size\`.
     - **Quadratic Probing**: Check quadratic offsets: \`(index + i^2) % size\`.
     - **Double Hashing**: Use a second hash function to calculate the step size.

### Real-World Example
- **Chaining**: Storing files in folders. If two file categories map to folder #3, you just stack both files inside folder #3.
- **Open Addressing**: Parking a car. If spot #5 is taken, you drive forward to park in the next available spot.

### Best Practice
Use **Separate Chaining** when the load factor (items/buckets) is high or table resizing is costly. Keep the hash function uniform to distribute keys evenly and prevent \$O(N)\$ worst-case bottlenecks.

### Common Mistakes
Not resizing the hash table when it fills up, which leads to long linked lists (chaining) or endless probing (open addressing), degrading search performance from \$O(1)\$ to \$O(N)\$.

### Collision Diagram
\`\`\`
Chaining:
Index 0: [ KeyA | ValA ]
Index 1: [ KeyB | ValB ] ---> [ KeyC | ValC ] (Collision!)
Index 2: [ Null ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
হ্যাশ ম্যাপ একটি হ্যাশ ফাংশন ব্যবহার করে কী-কে অ্যার ইনডেক্সে রূপান্তর করে। যেহেতু সম্ভাব্য কী অসীম কিন্তু অ্যারের সাইজ সসীম, তাই ভিন্ন কী-এর হ্যাশ ভ্যালু বা ইনডেক্স একই হতে পারে। একে **হ্যাশ কলিশন (Collision)** বলে।
- **সমাধানের উপায়সমূহ**:
  ১. **চেইনিং (Chaining)**: প্রতিটি বাকেটে একটি লিঙ্কড লিস্ট রাখা হয়। কলিশন হলে নতুন কী-ভ্যালু পেয়ারটি ঐ বাকেটের লিস্টে যোগ করা হয়।
     - খোঁজার সময় ইনডেক্সে গিয়ে লিস্টের ভেতর সার্চ করা হয়। গড় সময় \$O(1)\$, তবে সব নোড এক লাইনে থাকলে \$O(N)\$ হতে পারে।
  ২. **ওপেন এড্রেসিং (Open Addressing)**: সমস্ত ডাটা বাকেট অ্যারের ভেতরেই স্টোর করা হয়। ইনডেক্স ব্লক থাকলে অন্যান্য সেল খোঁজা হয়:
     - **লিনিয়ার প্রোবিং**: পরবর্তী ক্রমানুসারী সেল চেক করা: \`(index + 1) % size\`।
     - **কোয়াড্রেটিক প্রোবিং**: কোয়াড্রেটিক অফসেটে চেক করা: \`(index + i^2) % size\`।
     - **ডাবল হ্যাশিং**: ২য় আরেকটি হ্যাশ ফাংশন দিয়ে নতুন অফসেট হিসাব করা।

### বাস্তব-ভিত্তিক উদাহরণ
- **চেইনিং**: ফাইলের ফোল্ডার। একই ক্যাটাগরির দুটি ফাইল আসলে আপনি দুটোকেই একই ফোল্ডারে স্টেপল করে রেখে দেন।
- **ওপেন এড্রেসিং**: গাড়ি পার্কিং। ৫ নম্বর পার্কিং স্পট বুকড থাকলে আপনি সামনে এগিয়ে ৬ নম্বর স্পটে পার্ক করেন।

### উত্তম অনুশীলন
লোড ফ্যাক্টর (ডাটার সংখ্যা / মোট বাকেট) বেশি হলে চেইনিং ব্যবহার করুন। এছাড়া কী ডিস্ট্রিবিউশন সমান রাখতে শক্তিশালী ইউনিফর্ম হ্যাশ ফাংশন ব্যবহার করা উচিত।

### সাধারণ ভুল
ডাটা বাড়ার সাথে সাথে হ্যাশ টেবিল রি-সাইজ বা রিবিল্ড না করা, যার ফলে চেইনিং লিঙ্কড লিস্ট অনেক লম্বা হয়ে সার্চ পারফরম্যান্স \$O(1)\$ থেকে ড্রপ করে \$O(N)\$ হয়ে যায়।`
  },
  {
    id: "dsa-11",
    title: "Check if a string is a palindrome ignoring non-alphanumeric characters.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Strings","Two Pointers","Algorithms"],
    enAnswer: "To check if a string is a palindrome, use two pointers (start and end). Skip non-alphanumeric characters and compare letters case-insensitively, moving pointers inward. Time complexity is O(N) and space is O(1).",
    bnAnswer: "একটি স্ট্রিং প্যালিন্ড্রোম কিনা চেক করতে টু-পয়েন্টার (শুরু ও শেষ) ব্যবহার করুন। ক্যারেক্টারগুলো আলফানিউমেরিক না হলে স্কিপ করুন এবং কেস-ইনসেনসিটিভভাবে মিলিয়ে পয়েন্টার কেন্দ্রে আনুন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
A string is a palindrome if it reads the same backward as forward, ignoring casing and punctuation (e.g., \`"A man, a plan, a canal: Panama"\`).
- **Two-Pointer Solution**:
  1. Set pointer \`left = 0\` and \`right = s.length - 1\`.
  2. In a loop while \`left < right\`:
     - If character at \`left\` is not alphanumeric, increment \`left\`.
     - If character at \`right\` is not alphanumeric, decrement \`right\`.
     - Otherwise, convert both to lowercase and compare. If not equal, return false. If equal, move both pointers inward (\`left++\`, \`right--\`).
  3. Return true if loop finishes.
- **Complexity**:
  - **Time**: \$O(N)\$ - each character is visited at most once.
  - **Space**: \$O(1)\$ - in-place pointers comparison.

### Real-World Example
Verifying if a palindrome puzzle string is correct, like checking if the text "Race car" matches after ignoring the space and capitalization.

### Best Practice
Avoid creating a new cleaned string using regular expressions if memory constraint is strict, as regex allocation of a new string requires \$O(N)\$ auxiliary memory. The two-pointer in-place skip is memory-optimal.

### Common Mistakes
Forgetting to compare numbers (alphanumeric includes \`0-9\` as well as \`a-z\`). Forgetting case normalization, making \`'A'\` and \`'a'\` not match.

### Code Example (TypeScript)
\`\`\`typescript
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  
  const isAlphaNumeric = (char: string): boolean => {
    return /[a-zA-Z0-9]/.test(char);
  };
  
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }
    
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি স্ট্রিং প্যালিন্ড্রোম হবে যদি সেটির ক্যারেক্টার কেস ও বিরামচিহ্ন এড়িয়ে সরাসরি পড়লে সামনে এবং পেছন থেকে সমান অর্থ দেয় (যেমন, \`"A man, a plan, a canal: Panama"\`)।
- **টু-পয়েন্টার মেথড**:
  ১. দুটি পয়েন্টার সেট করুন: \`left = 0\` এবং \`right = s.length - 1\`।
  ২. \`left < right\` হওয়া পর্যন্ত লুপ চালান:
     - যদি \`left\`-এর ক্যারেক্টার আলফানিউমেরিক না হয়, \`left++\` করুন।
     - যদি \`right\`-এর ক্যারেক্টার আলফানিউমেরিক না হয়, \`right--\` করুন।
     - অন্যথায়, দুজনকে স্মল লেটারে কনভার্ট করে ম্যাচ করুন। ম্যাচ না করলে false দিন। ম্যাচ করলে পয়েন্টার সামনে বাড়ান।
  ৩. লুপ শেষ হলে true রিটার্ন করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - পুরো স্ট্রিংয়ে একবার পাস দেওয়ার জন্য।
  - **স্পেস**: \$O(1)\$ - কোনো অতিরিক্ত মেমোরি লাগে না।

### বাস্তব-ভিত্তিক উদাহরণ
মজার ধাঁধা মেলানো যেমন "Race car" শব্দগুচ্ছ চেক করা। এখানে স্পেস এবং ক্যাপিটাল লেটার বাদ দিলে সামনে বা পেছন থেকে পড়া হলে একই উচ্চারণ আসে।

### উত্তম অনুশীলন
মেমোরি সেভ করতে রেগুলার এক্সপ্রেশন দিয়ে নতুন স্ট্রিং তৈরি করা পরিহার করুন। টু-পয়েন্টার ইন-প্লেস স্কিপ মেথডটি মেমোরির দিক দিয়ে সবচেয়ে অপ্টিমাইজড।

### সাধারণ ভুল
আলফানিউমেরিক চেকের সময় সংখ্যা (\`0-9\`) বাদ দিয়ে দেওয়া। কেস কনভার্ট করতে ভুলে যাওয়া, যার ফলে বড় হাতের 'A' এবং ছোট হাতের 'a' অসমান হিসেবে ধরা পড়ে।`
  },
  {
    id: "dsa-12",
    title: "Detect if a Singly Linked List has a cycle.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Linked Lists","Two Pointers","Algorithms"],
    enAnswer: "Detect a cycle in a linked list using Floyd's Cycle Finding Algorithm (Tortoise and Hare). Move a slow pointer by 1 step and a fast pointer by 2 steps; if they meet, a cycle exists. Time complexity is O(N) and space is O(1).",
    bnAnswer: "লিঙ্কড লিস্টে সাইকেল ডিটেক্ট করতে Floyd-এর কচ্ছপ ও খরগোশ (Tortoise and Hare) অ্যালগরিদম ব্যবহার করুন। একটি slow পয়েন্টার ১ ধাপ এবং fast পয়েন্টার ২ ধাপ করে এগিয়ে নিন; তারা একে অপরের সাথে মিলিত হলে সাইকেল বা লুপ আছে। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
A cycle occurs in a linked list if a node's next pointer points back to a previous node in the list, causing an infinite loop during traversal.
- **Floyd's Cycle Detection (Tortoise and Hare)**:
  1. Initialize two pointers at the head: \`slow\` and \`fast\`.
  2. Traverse the list:
     - Move \`slow\` one step: \`slow = slow.next\`.
     - Move \`fast\` two steps: \`fast = fast.next.next\`.
     - If at any point \`fast === null\` or \`fast.next === null\`, there is no cycle (we reached the tail).
     - If \`slow === fast\`, they met! A cycle exists.
- **Complexity**:
  - **Time**: \$O(N)\$ - worst-case traversal before fast pointer catches up to slow.
  - **Space**: \$O(1)\$ - only two pointer reference variables.

### Real-World Example
Two runners on a circular track. One runs twice as fast as the other. Eventually, the faster runner will lap the slower runner and meet them. If it was a straight road, they would never meet.

### Best Practice
Always check null constraints for the fast pointer (\`fast !== null && fast.next !== null\`) before attempting to move it two steps forward, to avoid null pointer dereferencing crashes.

### Common Mistakes
Using a Hash Set to store visited nodes, which works in \$O(N)\$ time but takes \$O(N)\$ space. Floyd's algorithm achieves the same result in \$O(1)\$ auxiliary space.

### Cycle Diagram
\`\`\`
Head ---> [Node1] ---> [Node2] ---> [Node3]
                         ^            |
                         |            v
                       [Node5] <--- [Node4] (Cycle!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লিঙ্কড লিস্টের কোনো নোডের \`next\` পয়েন্টার যদি পেছনের কোনো নোডকে নির্দেশ করে, তবে লিস্ট ট্রাভার্স করার সময় ইনফিনিট লুপ তৈরি হয়। একে সাইকেল বলে।
- **Floyd-এর অ্যালগরিদম (কচ্ছপ ও খরগোশ)**:
  ১. হেডে দুটি পয়েন্টার সেট করুন: \`slow\` এবং \`fast\`।
  ২. ট্রাভার্স করুন:
     - \`slow\`-কে ১ ধাপ এগিয়ে নিন: \`slow = slow.next\`।
     - \`fast\`-কে ২ ধাপ এগিয়ে নিন: \`fast = fast.next.next\`।
     - যদি কোনো এক সময় \`fast === null\` বা \`fast.next === null\` হয়, তবে সাইকেল নেই (আমরা শেষ নোডে পৌঁছে গেছি)।
     - যদি \`slow === fast\` হয়, তার মানে তারা একে অপরকে ল্যাপ করেছে বা মিলিত হয়েছে। অর্থাৎ সাইকেল আছে।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - ফাস্ট নোড স্লো নোডকে ক্যাচ করা পর্যন্ত।
  - **স্পেস**: \$O(1)\$ - মাত্র ২টি ভেরিয়েবল মেমোরি লাগে।

### বাস্তব-ভিত্তিক উদাহরণ
বৃত্তাকার ট্র্যাকে দৌড়ানো দুজন অ্যাথলেট। একজন অন্যজনের চেয়ে দ্বিগুণ স্পিডে দৌড়ালে এক সময় সে স্লো রানারকে পেছন থেকে টপকে আবার তার সাথে মিলিত হবে। সোজা রাস্তা হলে কখনোই মিলত না।

### উত্তম অনুশীলন
ফাস্ট পয়েন্টারকে ২ ধাপ সরানোর আগে সর্বদা চেক করুন যেন সেটি নিজে বা তার পরবর্তী নোড নাল (\`null\`) না হয়, তা না হলে কোড ক্র্যাশ করবে।

### সাধারণ ভুল
ভিজিটেড নোডগুলো সেভ রাখতে হ্যাশ সেট (Hash Set) ব্যবহার করা। এটি \$O(N)\$ স্পেস দখল করে। অথচ Floyd-এর অ্যালগরিদম দিয়ে \$O(1)\$ মেমোরিতে এটি সলভ করা যায়।`
  },
  {
    id: "dsa-13",
    title: "Explain Binary Search and write its implementation on a sorted array.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Searching","Arrays","Algorithms"],
    enAnswer: "Binary Search finds a target in a sorted array by repeatedly dividing the search interval in half. It compares the target with the middle element, reducing the range to left or right. Time complexity is O(log N) and space is O(1).",
    bnAnswer: "বাইনারি সার্চ একটি সর্টেড অ্যারে থেকে সার্চ ইন্টারভাল বা খোঁজার পরিসীমা ক্রমাগত অর্ধেক করার মাধ্যমে কাঙ্ক্ষিত উপাদান খুঁজে বের করে। এটি টার্গেটের সাথে মিডল উপাদানের তুলনা করে ডানে বা বামে সার্চ রেঞ্জ ছোট করে। সময় জটিলতা ও(লগ এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
Binary Search is a highly efficient searching algorithm for sorted arrays. Instead of checking every element linearly, it eliminates half of the search space in each step.
- **How it works**:
  1. Set pointer \`low = 0\` and \`high = arr.length - 1\`.
  2. While \`low <= high\`:
     - Calculate middle index: \`mid = low + Math.floor((high - low) / 2)\` (avoids integer overflow).
     - If \`arr[mid] === target\`, return \`mid\`.
     - If \`arr[mid] < target\`, shift search space right: \`low = mid + 1\`.
     - If \`arr[mid] > target\`, shift search space left: \`high = mid - 1\`.
  3. If not found, return -1.
- **Complexity**:
  - **Time**: \$O(log N)\$ - the search space is divided by 2 in each step.
  - **Space**: \$O(1)\$ for iterative implementation.

### Real-World Example
Searching for a word in a printed dictionary. You open it exactly in the middle. If your word starts with "S" and the page is on "M", you ignore the left half and open the middle of the right half.

### Best Practice
Always write \`mid = low + Math.floor((high - low) / 2)\` instead of \`Math.floor((low + high) / 2)\` to prevent integer overflow bug when \`low + high\` exceeds maximum safe integer limits in languages like Java/C++.

### Common Mistakes
Running Binary Search on an unsorted array, which returns wrong results. Always ensure the data is pre-sorted before applying binary search.

### Code Example (TypeScript)
\`\`\`typescript
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বাইনারি সার্চ হলো একটি সর্টেড অ্যারের ডাটা দ্রুত খোঁজার অত্যন্ত কার্যকরী অ্যালগরিদম। এটি প্রতি ধাপে খোঁজার পরিধি অর্ধেক করে ফেলে।
- **কাজের নিয়ম**:
  ১. পয়েন্টার সেট করুন: \`low = 0\` এবং \`high = arr.length - 1\`।
  ২. \`low <= high\` হওয়া পর্যন্ত লুপ চালান:
     - মধ্যবিন্দু বের করুন: \`mid = low + Math.floor((high - low) / 2)\` (এটি ইন্টিজার ওভারফ্লো এড়ায়)।
     - যদি \`arr[mid] === target\` হয়, তবে \`mid\` ইনডেক্স রিটার্ন করুন।
     - যদি \`arr[mid] < target\` হয়, ডান পাশে রেঞ্জ শিফট করুন: \`low = mid + 1\`।
     - যদি \`arr[mid] > target\` হয়, বাম পাশে রেঞ্জ শিফট করুন: \`high = mid - 1\`।
  ৩. পাওয়া না গেলে -১ রিটার্ন করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(log N)\$ - প্রতি ধাপে সার্চ স্পেস অর্ধেক হওয়ার কারণে।
  - **স্পেস**: \$O(1)\$ - অতিরিক্ত মেমোরি লাগে না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডিকশনারিতে শব্দ খোঁজা। আপনি ঠিক মাঝের পেজটি খুললেন। যদি কাঙ্ক্ষিত শব্দটি "S" দিয়ে শুরু হয় এবং মাঝের পেজটি "M" অক্ষরের হয়, তবে আপনি বাম পাশের সব পেজ বাদ দিয়ে ডান পাশের পেজগুলোর মাঝে খুঁজবেন।

### উত্তম অনুশীলন
ইন্টিজার ওভারফ্লো বাগ এড়াতে সর্বদা \`mid = low + Math.floor((high - low) / 2)\` কোডটি ব্যবহার করুন, বিশেষ করে বড় অ্যারের ক্ষেত্রে।

### সাধারণ ভুল
আন-সর্টেড (Unsorted) বা অগোছালো অ্যারেতে বাইনারি সার্চ চালানো, যা ভুল ইনডেক্স রিটার্ন করবে। বাইনারি সার্চ চালানোর পূর্বশর্ত হলো ডাটা সর্ট বা সাজানো থাকতে হবে।`
  },
  {
    id: "dsa-14",
    title: "How does Bubble Sort work, and what is its complexity?",
    difficulty: "basic",
    category: "dsa",
    tags: ["Sorting","Arrays","Algorithms"],
    enAnswer: "Bubble Sort repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. This passes through the array until no swaps are needed. Time complexity is O(N^2) and space is O(1).",
    bnAnswer: "বাবল সর্ট বারবার অ্যারের মধ্য দিয়ে যায়, পাশাপাশি দুটি উপাদানের তুলনা করে এবং ভুল ক্রমানুসারে থাকলে তাদের সোয়াপ বা বিনিময় করে। কোনো সোয়াপিংয়ের প্রয়োজন না হওয়া পর্যন্ত লুপটি চলতে থাকে। সময় জটিলতা ও(এন^২) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
Bubble Sort is a simple comparison-based sorting algorithm. In each pass, the largest unsorted element "bubbles up" to its correct position at the end of the array.
- **Algorithm**:
  1. Loop through the array from \`i = 0\` to \`N - 1\`.
  2. For each position, loop from \`j = 0\` to \`N - i - 2\`:
     - Compare \`arr[j]\` and \`arr[j + 1]\`.
     - If \`arr[j] > arr[j + 1]\`, swap them.
  3. **Optimization**: Keep track of a \`swapped\` boolean flag. If a pass completes without any swaps, the array is already sorted; break the loop early.
- **Complexity**:
  - **Time**: \$O(N^2)\$ worst and average case. \$O(N)\$ best case (already sorted array with optimization flag).
  - **Space**: \$O(1)\$ auxiliary space (in-place sort).

### Real-World Example
Carbonated bubbles rising in a glass of soda. The larger bubbles rise to the top faster than the smaller ones.

### Best Practice
Bubble Sort is highly inefficient and should not be used for production sorting of large datasets. However, it can be useful for educational purposes or on nearly-sorted lists with very few elements.

### Common Mistakes
Not using the optimization flag, which forces the code to run in \$O(N^2)\$ time even if the array is already fully sorted.

### Code Example (TypeScript)
\`\`\`typescript
function bubbleSort(arr: number[]): void {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization: early stop
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বাবল সর্ট হলো একটি সাধারণ তুলনা-ভিত্তিক সর্টিং অ্যালগরিদম। প্রতি রান বা পাসে অ্যারের সবচেয়ে বড় উপাদানটি ক্রমান্বয়ে পিছনের দিকে বা টপ পজিশনে "বুদবুদ" এর মতো উঠে আসে।
- **ধাপসমূহ**:
  ১. অ্যারের শুরুতে \`i = 0\` থেকে \`N - 1\` পর্যন্ত লুপ চালান।
  ২. প্রতিটি ধাপের ভেতর \`j = 0\` থেকে \`N - i - 2\` পর্যন্ত আরেকটি লুপ চালান:
     - পাশাপাশি দুটি উপাদান \`arr[j]\` এবং \`arr[j + 1]\` তুলনা করুন।
     - যদি বামের উপাদান ডানের চেয়ে বড় হয় (\`arr[j] > arr[j + 1]\`), তবে তাদের পজিশন বদল বা সোয়াপ করুন।
  ৩. **অপ্টিমাইজেশন**: একটি \`swapped\` বুলিয়ান ফ্ল্যাগ রাখুন। যদি কোনো পাসে একটিও সোয়াপ না ঘটে, তবে লুপটি ওখানেই ব্রেক করে দিন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N^2)\$ গড় ও সবচেয়ে খারাপ ক্ষেত্রে। \$O(N)\$ সবচেয়ে ভালো ক্ষেত্রে (অপ্টিমাইজেশন ফ্ল্যাগ সহ সর্টেড অ্যারের জন্য)।
  - **স্পেস**: \$O(1)\$ অতিরিক্ত কোনো মেমোরি লাগে না।

### বাস্তব-ভিত্তিক উদাহরণ
সোডার গ্লাসে গ্যাস বুদবুদ ওঠার মতো। বড় বুদবুদগুলো দ্রুত ওপরে উঠে আসে আর ছোটগুলো নিচে পড়ে থাকে।

### উত্তম অনুশীলন
বাবল সর্ট অত্যন্ত ধীরগতির এবং এটি প্রোডাকশনে ব্যবহার করা উচিত নয়। শুধুমাত্র অ্যালগরিদম শেখার বা প্রায় সর্ট হয়ে থাকা অল্প কিছু ডাটা সাজাতে এটি ব্যবহার করা যেতে পারে।

### সাধারণ ভুল
অপ্টিমাইজেশন ফ্ল্যাগ ব্যবহার না করা, যার ফলে অ্যারেটি পুরোপুরি সর্ট থাকা সত্ত্বেও এটি \$O(N^2)\$ বার লুপ ঘুরিয়ে সিপিইউ সাইকেল অপচয় করে।`
  },
  {
    id: "dsa-15",
    title: "Explain the Divide and Conquer strategy of Merge Sort.",
    difficulty: "basic",
    category: "dsa",
    tags: ["Sorting","Divide & Conquer","Algorithms"],
    enAnswer: "Merge Sort is a Divide and Conquer algorithm. It divides the array in half, recursively sorts both halves, and merges the sorted halves back. Time complexity is O(N log N) in all cases, and auxiliary space is O(N).",
    bnAnswer: "মার্জ সর্ট একটি Divide and Conquer (বিভক্ত ও জয়) অ্যালগরিদম। এটি অ্যারেটিকে সমান দুই ভাগে বিভক্ত করে, রিকার্সিভলি উভয় ভাগ সর্ট করে এবং সর্টেড হওয়া ভাগ দুটিকে পুনরায় মার্জ বা একত্রিত করে। এর সময় জটিলতা ও(এন লগ এন) এবং স্পেস জটিলতা ও(এন)।",
    enExplanation: `### Explanation
Merge Sort uses recursion to split and sort arrays:
1. **Divide**: Split the array into two halves at the midpoint.
2. **Conquer**: Recursively sort both halves using Merge Sort.
3. **Combine (Merge)**: Merge the two sorted halves back into a single sorted array.
- **Complexity**:
  - **Time**: \$O(N log N)\$ in all cases (best, average, worst). Splitting the array takes \$O(log N)\$ steps, and merging elements at each level takes \$O(N)\$ time.
  - **Space**: \$O(N)\$ auxiliary space as we need temporary arrays to hold elements during merging.

### Real-World Example
Sorting a pile of files. You split the pile in two and ask two assistants to sort their half. Once they return their sorted piles, you merge them together by looking at the top file of each pile and placing the smaller one into a new ordered pile.

### Best Practice
Use Merge Sort when stability is required (stable sort preserves original order of equal elements). For linked lists, Merge Sort is highly preferred as it can be implemented with \$O(1)\$ auxiliary space.

### Common Mistakes
Forgetting that Merge Sort is not an in-place sorting algorithm and requires \$O(N)\$ extra memory. In memory-constrained systems, prefer Quick Sort or Heap Sort to save memory.

### Code Example (TypeScript)
\`\`\`typescript
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মার্জ সর্ট রিকার্সন ব্যবহার করে অ্যারেকে বিভক্ত ও সর্ট করে:
১. **Divide (বিভক্ত করা)**: অ্যারেটিকে ঠিক মাঝ বরাবর সমান দুই ভাগে ভাগ করা হয়।
২. **Conquer (জয় করা)**: রিকার্সিভলি উভয় ভাগকে মার্জ সর্ট দিয়ে সাজানো হয়।
৩. **Combine (মার্জ বা একত্রিত করা)**: সর্ট হয়ে যাওয়া দুটি ভাগকে ক্রমানুসারে একটি বড় সর্টেড অ্যারেতে রূপান্তর করা হয়।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N log N)\$ সকল ক্ষেত্রে (Best, Average, Worst)। অ্যারে ভাগ করতে \$O(log N)\$ এবং মার্জ করতে \$O(N)\$ সময় লাগে।
  - **স্পেস**: \$O(N)\$ অতিরিক্ত মেমোরি লাগে কারণ মার্জ করার সময় টেম্পোরারি অ্যারে বা বাফার মেমোরি প্রয়োজন হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একগাদা ফাইল সাজানো। আপনি ফাইলগুলোকে সমান দুই ভাগে ভাগ করে আপনার দুই সহকারীকে সাজাতে দিলেন। তারা ফাইল সাজিয়ে নিয়ে আসার পর আপনি দুই ফাইলের সবার ওপরে থাকা ফাইল তুলনা করে করে একটি বড় ক্রমানুসারী ফাইল সেট তৈরি করলেন।

### উত্তম অনুশীলন
সর্টিংয়ের ক্ষেত্রে স্থায়িত্ব (Stability - সমমানের উপাদানের আদি পজিশন ঠিক রাখা) প্রয়োজন হলে মার্জ সর্ট ব্যবহার করুন। লিঙ্কড লিস্ট সর্ট করতে মার্জ সর্ট অত্যন্ত উপযোগী কারণ সে ক্ষেত্রে ও(১) এক্সট্রা মেমোরিতে এটি করা সম্ভব।

### সাধারণ ভুল
মার্জ সর্টের অতিরিক্ত মেমোরি লাগার বিষয়টি ভুলে যাওয়া। লিমিটেড মেমোরি বা র‍্যাম সম্পন্ন ডিভাইসে মার্জ সর্টের বদলে কুইক সর্ট (Quick Sort) বা হিপ সর্ট (Heap Sort) ব্যবহার করা শ্রেয়।`
  }
];
