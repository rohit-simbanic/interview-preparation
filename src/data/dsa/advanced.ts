import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: "dsa-36",
    title: "Explain Dynamic Programming. Compare Top-Down (Memoization) vs. Bottom-Up (Tabulation).",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Dynamic Programming","Algorithms","Basics"],
    enAnswer: "Dynamic Programming solves optimization problems by breaking them into overlapping subproblems. Top-Down (Memoization) uses recursion and caches results, while Bottom-Up (Tabulation) solves subproblems iteratively using a table. Time complexity is O(N) and space is O(N).",
    bnAnswer: "ডাইনামিক প্রোগ্রামিং (DP) ওভারল্যাপিং সাব-প্রবলেমগুলো সলভ করে জটিল অপ্টিমাইজেশন প্রবলেম সমাধান করে। Top-Down (মেমোইজেশন) রিকার্সন ও ক্যাশিং ব্যবহার করে এবং Bottom-Up (ট্যাবুলেশন) ইটারেটিভলি টেবিল ব্যবহার করে প্রবলেম সলভ করে। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(এন)।",
    enExplanation: `### Explanation
Dynamic Programming (DP) is used when a problem has:
1. **Overlapping Subproblems**: Subproblems are solved repeatedly.
2. **Optimal Substructure**: The optimal solution to the problem can be constructed from optimal solutions to its subproblems.
- **Top-Down (Memoization)**:
  - Recursive approach. Starts with the large problem and solves subproblems on-demand, caching the results in a map/array.
  - **Pros**: Easy to write; only solves subproblems that are actually needed.
  - **Cons**: Recursion stack overhead.
- **Bottom-Up (Tabulation)**:
  - Iterative approach. Starts by solving the smallest subproblems first and filling up a table (1D/2D array) up to the target solution.
  - **Pros**: Zero recursion overhead; can be space-optimized by keeping only the previous states.
  - **Cons**: Requires solving all subproblems in order.

### Real-World Example
- **Memoization**: Asking the price of a car. If you don't know it, you call the department to calculate it and write it down. Next time, you read the note.
- **Tabulation**: Filling a spreadsheet. You calculate row 1, then use row 1 to calculate row 2, and so on, until you reach the bottom totals.

### Best Practice
Prefer **Tabulation** for production code where performance is critical to avoid call stack limits. Use state-reduction techniques (e.g. keeping only the last 2 rows of a DP matrix) to reduce space complexity from \$O(N)\$ to \$O(1)\$.

### Common Mistakes
Forgetting that DP requires optimal substructure. If the subproblems do not share optimal components (e.g., finding the longest path without cycles in a graph), DP cannot be used.

### DP Matrix Tabulation View
\`\`\`
DP Table:
[ 0 | 1 | 1 | 2 | 3 | 5 | 8 ] (Iteratively computed left-to-right)
  0   1   2   3   4   5   6
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাইনামিক প্রোগ্রামিং (DP) মূলত দুটি প্রধান বৈশিষ্ট্য থাকলে ব্যবহার করা যায়:
১. **ওভারল্যাপিং সাব-প্রবলেম (Overlapping Subproblems)**: একই ছোট ছোট প্রবলেম বারবার হিসাব করতে হওয়া।
২. **অপটিমাল সাবস্ট্রাকচার (Optimal Substructure)**: সাব-প্রবলেমের অপটিমাল সমাধানগুলো মিলিয়ে মূল প্রবলেমটির সেরা সমাধান তৈরি করা।
- **Top-Down (Memoization)**:
  - রিকার্সিভ মেথড। বড় প্রবলেম থেকে শুরু করে নিচে নামে এবং অন-ডিমান্ড ছোট প্রবলেম সলভ করে তা ক্যাশ বা মেমো টেবিলে জমা রাখে।
  - **সুবিধা**: কোড লেখা সহজ; শুধুমাত্র প্রয়োজনীয় সাব-প্রবলেমগুলোই সলভ করে।
  - **অসুবিধা**: রিকার্সন কল স্ট্যাকের ওভারহেড থাকে।
- **Bottom-Up (Tabulation)**:
  - ইটারেটিভ মেথড। সবচেয়ে ছোট সাব-প্রবলেম দিয়ে শুরু করে টেবিল (১D বা ২D অ্যারে) ফিলাপ করতে করতে টার্গেট সমাধানে পৌঁছায়।
  - **সুবিধা**: কল স্ট্যাকের ওভারহেড নেই; মেমোরি বাঁচানোর জন্য আগের স্টেটগুলো ট্র্যাকে রেখে স্পেস অপ্টিমাইজ করা যায়।
  - **অসুবিধা**: সিকোয়েন্স অনুযায়ী সব সাব-প্রবলেম সলভ করতে হয়, লাগুক আর না লাগুক।

### বাস্তব-ভিত্তিক উদাহরণ
- **মেমোইজেশন**: গাড়ির দাম জিজ্ঞেস করা। না জানলে আপনি ডিপার্টমেন্টকে ফোন দিয়ে হিসাব করতে বলেন এবং খাতায় লিখে রাখেন। পরবর্তীতে কেউ চাইলে খাতা দেখেই বলে দেন।
- **ট্যাবুলেশন**: স্প্রেডশিট ফিলাপ করা। আপনি ১ম রো হিসাব করলেন, এরপর ১ম রো-র ডাটা দিয়ে ২য় রো হিসাব করলেন, এভাবে ক্রমান্বয়ে শেষ রো-র মোট যোগফল বের করলেন।

### উত্তম অনুশীলন
কল স্ট্যাক ওভারফ্লো এড়াতে প্রোডাকশন কোডের জন্য সর্বদা ট্যাবুলেশনকে অগ্রাধিকার দিন। স্পেস কমাতে ডাইনামিক টেবিলের শেষ দুটি রো বা কলাম স্টোর করে স্পেস জটিলতা \$O(N)\$ থেকে ও(১)-এ নামিয়ে আনুন।

### সাধারণ ভুল
ভুলে যাওয়া যে DP চালানোর জন্য অপটিমাল সাবস্ট্রাকচার থাকা আবশ্যক। সাব-প্রবলেমগুলো যদি স্বাধীন না হয় বা অপটিমাল সমাধান দিতে না পারে (যেমন কোনো গ্রাফের সাইকেল ছাড়া সবচেয়ে লম্বা রাস্তা খোঁজা), তবে সেখানে DP ব্যবহার করা যাবে না।`
  },
  {
    id: "dsa-37",
    title: "Solve the Longest Common Subsequence (LCS) problem using DP.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Dynamic Programming","Strings","Algorithms"],
    enAnswer: "Longest Common Subsequence (LCS) finds the length of the longest subsequence present in both strings. We construct a 2D DP table where DP[i][j] stores the LCS of prefixes. If characters match, DP[i][j] = 1 + DP[i-1][j-1], else max(DP[i-1][j], DP[i][j-1]). Time is O(M * N) and space is O(M * N).",
    bnAnswer: "Longest Common Subsequence (LCS) দুটি স্ট্রিংয়ের মধ্যে সাধারণ দীর্ঘতম সাব-সেকুয়েন্সের দৈর্ঘ্য খুঁজে বের করে। আমরা একটি ২D DP টেবিল তৈরি করি যেখানে DP[i][j] প্রিফিক্সের LCS স্টোর করে। অক্ষর মিললে DP[i][j] = 1 + DP[i-1][j-1], না মিললে max(DP[i-1][j], DP[i][j-1])। সময় ও স্পেস জটিলতা ও(এম * এন)।",
    enExplanation: `### Explanation
Given two strings \`text1\` and \`text2\`, return the length of their longest common subsequence.
- **DP Table Formulation**:
  - Let \`dp[i][j]\` be the length of LCS of prefix \`text1[0...i-1]\` and \`text2[0...j-1]\`.
  - If \`text1[i-1] === text2[j-1]\` (characters match):
    - \`dp[i][j] = 1 + dp[i - 1][j - 1]\` (extend LCS by 1).
  - Else:
    - \`dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])\` (take max by dropping one character).
- **Complexity**:
  - **Time**: \$O(M * N)\$ where \$M, N\$ are string lengths.
  - **Space**: \$O(M * N)\$ to store the 2D DP matrix table.

### Real-World Example
Git Diff tool comparing two file versions. To highlight added/removed lines, it calculates the Longest Common Subsequence of lines between the old and new file versions.

### Best Practice
Since the state only depends on the current row and the previous row of the DP table, we can optimize space to \$O(min(M, N))\$ by maintaining only two rows instead of a full 2D grid.

### Common Mistakes
Forgetting to initialize the base cases (row 0 and column 0 must be filled with 0s) which represents comparing strings with empty strings.

### Code Example (TypeScript)
\`\`\`typescript
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত দুটি স্ট্রিং \`text1\` এবং \`text2\` থেকে তাদের সাধারণ দীর্ঘতম সাব-সেকুয়েন্সের (LCS) দৈর্ঘ্য বের করতে হবে।
- **DP টেবিল ফর্মুলেশন**:
  - ধরি \`dp[i][j]\` হলো \`text1[0...i-1]\` এবং \`text2[0...j-1]\`-এর LCS দৈর্ঘ্য।
  - যদি ক্যারেক্টারদ্বয় মিলে যায় (\`text1[i-1] === text2[j-1]\`):
    - \`dp[i][j] = 1 + dp[i-1][j-1]\` (LCS দৈর্ঘ্য ১ বৃদ্ধি পায়)।
  - না মিললে:
    - \`dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])\` (যেকোনো একদিকের সর্বোচ্চটি নেওয়া)।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(M * N)\$ যেখানে \$M, N\$ হলো স্ট্রিং দুটির দৈর্ঘ্য।
  - **স্পেস**: \$O(M * N)\$ - ২D DP ম্যাট্রিক্স টেবিল সেভ রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
Git Diff টুল। দুটি ফাইলের সংস্করণের মধ্যে তুলনা করে কোন কোন লাইন যোগ বা বিয়োগ করা হয়েছে তা বের করতে লাইনের LCS হিসাব করা হয়।

### উত্তম অনুশীলন
যেহেতু বর্তমান স্টেটের মান শুধুমাত্র আগের রানিং রোর (Row) ওপর নির্ভর করে, তাই সম্পূর্ণ ২D গ্রিড ব্যবহার না করে মাত্র ২টি রোর মান স্টোর করে স্পেস জটিলতা \$O(min(M, N))\$-এ অপ্টিমাইজ করুন।

### সাধারণ ভুল
DP টেবিলের রো ০ এবং কলাম ০-কে ০ দিয়ে ইনিশিয়ালাইজ করতে ভুলে যাওয়া, যা মূলত খালি স্ট্রিংয়ের সাথে তুলনা করার বেইস কেস নির্দেশ করে।`
  },
  {
    id: "dsa-38",
    title: "Solve the 0/1 Knapsack problem using tabulation.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Dynamic Programming","Knapsack","Algorithms"],
    enAnswer: "The 0/1 Knapsack problem maximizes item value within a weight capacity. We fill a 2D DP table DP[i][w] representing max value using first i items and weight capacity w. If item weight exceeds capacity we skip, else take max of including or excluding item. Time is O(N * W) and space is O(N * W).",
    bnAnswer: "0/1 Knapsack প্রবলেমটি একটি নির্দিষ্ট ওজনের ক্ষমতার ব্যাগে সর্বোচ্চ মূল্যের আইটেম নেওয়ার অপ্টিমাইজেশন সলভ করে। আমরা একটি ২D DP টেবিল DP[i][w] ফিলাপ করি যা প্রথম i-সংখ্যক আইটেম এবং w-ক্যাপাসিটির ক্ষেত্রে সর্বোচ্চ ভ্যালু নির্দেশ করে। সময় ও স্পেস জটিলতা ও(এন * ডাব্লিউ)।",
    enExplanation: `### Explanation
Given weights and values of \$N\$ items, put these items in a knapsack of capacity \$W\$ to get the maximum total value. Each item can either be taken (1) or left (0).
- **DP State Definition**:
  - Let \`dp[i][w]\` be the max value we can get using first \`i\` items with weight capacity \`w\`.
  - For item \`i-1\` (weight \`wt\`, value \`val\`):
    - If \`wt > w\` (item too heavy):
      - \`dp[i][w] = dp[i-1][w]\` (cannot include, take previous max).
    - Else:
      - \`dp[i][w] = Math.max(dp[i-1][w], val + dp[i-1][w - wt])\` (max of excluding or including the item).
- **Complexity**:
  - **Time**: \$O(N * W)\$
  - **Space**: \$O(N * W)\$

### Real-World Example
An adventurer packing a backpack for a hike. The backpack can carry at most 15kg. The adventurer has items with different weights and utility values (sleeping bag, food, camera). They must select the subset that maximizes utility value without exceeding 15kg.

### Best Practice
Optimize space complexity to \$O(W)\$ using a 1D array. By looping backwards from \`W\` down to \`wt\` when filling the row, we can overwrite the same array without accessing already overwritten current row states.

### Common Mistakes
Looping forward when using a 1D array optimization, which allows using the same item multiple times (solving the unbounded knapsack problem instead of 0/1 knapsack).

### Code Example (TypeScript)
\`\`\`typescript
function knapsack(values: number[], weights: number[], w: number): number {
  const n = values.length;
  const dp = new Int32Array(w + 1); // 1D Array space optimization O(W)
  
  for (let i = 0; i < n; i++) {
    const wt = weights[i];
    const val = values[i];
    // Loop backwards to prevent using the same item multiple times
    for (let j = w; j >= wt; j--) {
      dp[j] = Math.max(dp[j], val + dp[j - wt]);
    }
  }
  return dp[w];
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত \$N\$-সংখ্যক আইটেমের মূল্য ও ওজন এবং ব্যাগের ধারণক্ষমতা \$W\$ থেকে ব্যাগে সর্বোচ্চ মূল্যের কতটুকু আইটেম নেওয়া সম্ভব তা বের করতে হবে। প্রতিটি আইটেম সর্বোচ্চ একবার নেওয়া যাবে (১) অথবা বাদ দিতে হবে (০)।
- **DP স্টেট ফর্মুলেশন**:
  - ধরি \`dp[i][w]\` হলো প্রথম \`i\`-সংখ্যক আইটেম ও \`w\` ওজন সীমার সর্বোচ্চ মূল্য।
  - বর্তমান আইটেম \`i-1\` (ওজন \`wt\`, মূল্য \`val\`)-এর জন্য:
    - যদি \`wt > w\` হয় (আইটেম অতিরিক্ত ভারী):
      - \`dp[i][w] = dp[i-1][w]\` (নেওয়া সম্ভব নয়, আগের সর্বোচ্চ মান)।
    - অন্যথায়:
      - \`dp[i][w] = Math.max(dp[i-1][w], val + dp[i-1][w - wt])\` (না নেওয়া এবং নেওয়ার মধ্যকার সর্বোচ্চ মান)।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N * W)\$
  - **স্পেস**: \$O(N * W)\$ - ২D ডাইনামিক টেবিলের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ভ্রমণের জন্য ট্রাভেলার ব্যাগ গোছানো। ব্যাগে সর্বোচ্চ ১৫ কেজি বহন করা যায়। ট্যুরিস্টের কাছে থাকা বিভিন্ন জিনিসের ওজন ও প্রয়োজনীয় ভ্যালু আলাদা (যেমন তাঁবু, খাবার, ক্যামেরা)। তাকে এমন সেট সিলেক্ট করতে হবে যেন সর্বোচ্চ প্রয়োজনীয় ভ্যালু পাওয়া যায় কিন্তু ওজন ১৫ কেজি না পেরোয়।

### উত্তম অনুশীলন
১D অ্যারে ব্যবহার করে স্পেস জটিলতা \$O(W)\$-এ অপ্টিমাইজ করুন। এ জন্য ভেতরের লুপটি \`W\` থেকে উল্টো দিক দিয়ে কমিয়ে \`wt\` পর্যন্ত চালাতে হবে, যা একই অ্যারে রো ওভাররাইট হওয়া প্রতিরোধ করে।

### সাধারণ ভুল
১D অ্যারে ব্যবহারের সময় ইনার লুপটি সোজা ক্রমানুসারে চালানো। এতে একই আইটেম একাধিকবার ব্যবহার হয়ে যায় (যা মূলত Unbounded Knapsack সলভ করে, 0/1 নয়)।`
  },
  {
    id: "dsa-39",
    title: "Explain Dijkstra's shortest path algorithm and its complexity.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","Dijkstra","Priority Queue","Algorithms"],
    enAnswer: "Dijkstra's algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. Using a Min-Heap/Priority Queue, it repeatedly relaxes edge values. Time complexity is O((V + E) log V) and space is O(V).",
    bnAnswer: "Dijkstra-র অ্যালগরিদম একটি একক সোর্স নোড থেকে নন-নেগেটিভ ওয়েট গ্রাফের সব নোডের শর্টেস্ট পাথ খুঁজে বের করে। একটি Min-Heap/Priority Queue ব্যবহার করে এটি বারবার কানেকশন রিল্যাক্স বা আপডেট করে। সময় জটিলতা ও((ভি + ই) লগ ভি) এবং স্পেস জটিলতা ও(ভি)।",
    enExplanation: `### Explanation
Dijkstra's algorithm is a greedy search algorithm that resolves the Single-Source Shortest Path (SSSP) problem.
- **Algorithm**:
  1. Initialize distance array \`dist\` with \`Infinity\` and \`dist[source] = 0\`.
  2. Create a Min-Heap (Priority Queue) and push \`[source, 0]\`.
  3. While Priority Queue is not empty:
     - Pop node \`u\` with the minimum distance.
     - If the popped distance is greater than the recorded \`dist[u]\`, skip (stale node).
     - For each neighbor \`v\` of \`u\` with edge weight \`w\`:
       - If \`dist[u] + w < dist[v]\` (found a shorter path):
         - Update \`dist[v] = dist[u] + w\`.
         - Push \`[v, dist[v]]\` onto the priority queue.
- **Complexity**:
  - **Time**: \$O((V + E) log V)\$ using a binary min-heap.
  - **Space**: \$O(V)\$ to store priority queue and distance map array.

### Real-World Example
Google Maps directions service. Finding the fastest driving route from your house to a restaurant by calculating roads as edges and traffic delays as edge weights.

### Best Practice
Always ignore popped heap states if \`popped_distance > dist[u]\`. In dense graphs, nodes are pushed multiple times with different weights, and skipping stale records prevents redundant neighbor expansions.

### Common Mistakes
Attempting to run Dijkstra's algorithm on graphs with **negative edge weights**. Dijkstra assumes once a node is popped from the min-heap, its shortest path is final. Negative weights violate this greedy constraint, requiring Bellman-Ford instead.

### Adjacency List Graph Example
\`\`\`
  (A) --- 4 ---> (B)
   |            /  |
   2          1    5
   v        v      v
  (C) --- 3 ---> (D)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Dijkstra-র অ্যালগরিদম হলো একটি গ্রীডি সার্চ অ্যালগরিদম যা Single-Source Shortest Path (SSSP) সমস্যা সমাধান করে।
- **ধাপসমূহ**:
  ১. একটি দূরত্ব ট্র্যাকিং অ্যারে \`dist\` নিন যেখানে সব নোডের দূরত্ব \`Infinity\` এবং শুরুর নোডের দূরত্ব \`dist[source] = 0\`।
  ২. একটি Min-Heap (Priority Queue) তৈরি করে শুরুতে \`[source, 0]\` পুশ করুন।
  ৩. হিপ খালি না হওয়া পর্যন্ত লুপ চালান:
     - ন্যূনতম দূরত্বের নোড \`u\` হিপ থেকে পপ করুন।
     - যদি পপ করা দূরত্বটি \`dist[u]\`-এর চেয়ে বড় হয়, তবে নোডটি স্কিপ করুন (পুরাতন রেকর্ড)।
     - \`u\`-এর প্রতিটি প্রতিবেশী \`v\` (এজ ওয়েট \`w\` সহ)-এর জন্য:
       - যদি \`dist[u] + w < dist[v]\` হয় (নতুন শর্টেস্ট পাথ পাওয়া গেছে):
         - আপডেট করুন: \`dist[v] = dist[u] + w\`।
         - হিপে পুশ করুন: \`[v, dist[v]]\`।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O((V + E) log V)\$ - বাইনারি মিন-হিপ ব্যবহার করার কারণে।
  - **স্পেস**: \$O(V)\$ - হিপ ও ডিস্ট্যান্স ভেরিয়েবলের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
গুগল ম্যাপস নেভিগেশন। রাস্তাগুলোকে গ্রাফের এজ এবং জ্যাম বা সিগন্যাল টাইমকে এজের ওয়েট ধরে আপনার বাসা থেকে রেস্টুরেন্টে যাওয়ার দ্রুততম রুট বের করা।

### উত্তম অনুশীলন
হিপ থেকে নোড পপ করার পর যদি দেখা যায় তার দূরত্ব ইতিমধ্যে আপডেট করা দূরত্বের চেয়ে বেশি (\`distance > dist[u]\`), তবে সেটিকে প্রসেস না করে সরাসরি স্কিপ করুন। এটি ডুপ্লিকেট নোড রিড করা আটকায়।

### সাধারণ ভুল
গ্রাফে **নেগেটিভ ওয়েট** (Negative Edge Weights) থাকা সত্ত্বেও Dijkstra চালানোর চেষ্টা করা। Dijkstra গ্রীডি নীতিতে চলে যা ধরে নেয় হিপ থেকে পপ হওয়া নোডের দূরত্বই ফাইনাল। নেগেটিভ এজ থাকলে এই ধারণা কাজ করে না, তখন Bellman-Ford ব্যবহার করতে হবে।`
  },
  {
    id: "dsa-40",
    title: "Explain the Bellman-Ford Algorithm and its negative cycle detection.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","Bellman-Ford","Algorithms"],
    enAnswer: "Bellman-Ford finds shortest paths from a single source to all nodes in a graph that can have negative edge weights. It relaxes all edges V-1 times. A Vth relaxation check detects negative cycles if distances continue to shrink. Time is O(V * E) and space is O(V).",
    bnAnswer: "Bellman-Ford গ্রাফের নেগেটিভ এজ ওয়েট থাকা সত্ত্বেও সোর্স নোড থেকে সব নোডের শর্টেস্ট পাথ খুঁজে বের করে। এটি সব এজকে V-1 বার রিল্যাক্স বা আপডেট করে। V-তম ধাপে পুনরায় আপডেট হলে নেগেটিভ সাইকেল বা লুপ ডিটেক্ট হয়। সময় জটিলতা ও(ভি * ই)।",
    enExplanation: `### Explanation
Unlike Dijkstra, Bellman-Ford can handle negative weights and detect negative weight cycles (loops whose total weight sum is negative, allowing infinite loops to decrease path cost infinitely).
- **Algorithm**:
  1. Initialize distance array \`dist\` with \`Infinity\` and \`dist[source] = 0\`.
  2. **Relax Edges**: Loop \`V - 1\` times:
     - For each edge \`(u, v)\` with weight \`w\`:
       - If \`dist[u] !== Infinity\` and \`dist[u] + w < dist[v]\`:
         - Update \`dist[v] = dist[u] + w\`.
  3. **Detect Negative Cycle**: Loop over all edges one more time:
     - If \`dist[u] + w < dist[v]\` holds true, it means a value shrunk further at step \`V\`. Therefore, a **negative weight cycle exists**.
- **Complexity**:
  - **Time**: \$O(V * E)\$ - slower than Dijkstra due to nested vertices-edges loops.
  - **Space**: \$O(V)\$ to store distance array.

### Real-World Example
Currency arbitrage detection in financial markets. If converting USD -> EUR -> GBP -> USD yields a net negative cost (profit), it forms a negative cycle representing an arbitrage opportunity.

### Best Practice
Optimize the algorithm by terminating the loop early if no edge relaxations occur during an entire inner pass, as the shortest paths have already been fully computed.

### Common Mistakes
Forgetting that a negative cycle makes finding a shortest path impossible because a walk can go around the negative loop infinitely to make the path weight negative infinity. Always throw an error or handle the negative cycle state.

### Negative Cycle View
\`\`\`
  (A) --- 3 ---> (B)
   ^            /
  -5           2
   |          v
  (C) <------
   Loop A -> B -> C -> A sum is: 3 + 2 - 5 = 0.
   If sum is < 0, it is a negative cycle.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Dijkstra-র মতো নয়, Bellman-Ford অ্যালগরিদম নেগেটিভ এজ ওয়েট হ্যান্ডেল করতে পারে এবং নেগেটিভ সাইকেল বা লুপ সনাক্ত করতে পারে (এমন লুপ যার মোট যোগফল ঋণাত্মক, যার ফলে বারবার ঘুরলে দূরত্বের মান ঋণাত্মক অসীমের দিকে ধাবিত হয়)।
- **ধাপসমূহ**:
  ১. একটি দূরত্ব অ্যারে \`dist\` নিন যেখানে সব নোডের মান \`Infinity\` এবং শুরুর নোডের মান \`dist[source] = 0\`।
  ২. **এজ রিল্যাক্সেশন**: \`V - 1\` বার লুপ চালান (যেখানে \$V\$ হলো মোট নোড সংখ্যা):
     - প্রতিটি এজ \`(u, v)\` (ওজন \`w\` সহ)-এর জন্য:
       - যদি \`dist[u] !== Infinity\` এবং \`dist[u] + w < dist[v]\` হয়:
         - আপডেট করুন: \`dist[v] = dist[u] + w\`।
  ৩. **নেগেটিভ সাইকেল সনাক্তকরণ**: পুনরায় সব এজের ওপর আরেকটি লুপ চালান:
     - যদি কোনো এজের জন্য এখনও \`dist[u] + w < dist[v]\` সত্যি হয়, তার মানে V-তম ধাপেও দূরত্বের মান কমেছে। অর্থাৎ গ্রাফে একটি **নেগেটিভ ওয়েট সাইকেল** রয়েছে।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(V * E)\$ - Dijkstra-র চেয়ে ধীরগতির কারণ নেস্টেড নোড-এজ লুপ চলে।
  - **স্পেস**: \$O(V)\$ - দূরত্ব অ্যারে স্টোর রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ফরেক্স মার্কেটে কারেন্সি আরবিট্রেজ (Arbitrage) ডিটেকশন। যদি ডলার -> ইউরো -> পাউন্ড -> ডলারে রূপান্তর করলে ঋণাত্মক খরচ বা লাভ পাওয়া যায়, তবে এটি একটি ফিন্যান্সিয়াল নেগেটিভ সাইকেল যা থেকে প্রফিট করা সম্ভব।

### উত্তম অনুশীলন
যদি কোনো ইনার পাসে একটি এজেরও মান পরিবর্তন না হয়, তবে লুপটি ওখানেই ব্রেক করে দিন। এর মানে শর্টেস্ট পাথ ইতিমধ্যে চলে এসেছে। এটি কোড রানটাইম কমায়।

### সাধারণ ভুল
নেগেটিভ সাইকেল থাকার পরেও দূরত্ব রিটার্ন করার চেষ্টা করা। নেগেটিভ লুপ থাকলে শর্টেস্ট পাথ বের করা অসম্ভব কারণ লুপে যত ঘুরবেন দূরত্ব তত কমতে থাকবে। এ ধরনের গ্রাফে এরর বা ফ্ল্যাগ রিটার্ন করা উচিত।`
  },
  {
    id: "dsa-41",
    title: "Explain Kruskal's algorithm for Minimum Spanning Tree (MST) using Union-Find.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","MST","Union-Find","Algorithms"],
    enAnswer: "Kruskal's algorithm finds a Minimum Spanning Tree (MST) in a weighted undirected graph. It sorts all edges by weight, then iteratively adds the cheapest edge using Union-Find to avoid cycle formations, stopping when V-1 edges are selected. Time complexity is O(E log E) and space is O(V).",
    bnAnswer: "Kruskal-এর অ্যালগরিদম একটি ওয়েটেড গ্রাফের Minimum Spanning Tree (MST) খুঁজে বের করে। এটি সব এজকে ওজনের ক্রমানুসারে সর্ট করে, এরপর Union-Find ব্যবহার করে সাইকেল গঠন এড়াতে ক্রমান্বয়ে সবচেয়ে কম ওজনের এজগুলো যোগ করে। সময় জটিলতা ও(ই লগ ই)।",
    enExplanation: `### Explanation
A Minimum Spanning Tree (MST) is a subset of edges connecting all vertices in an undirected graph with the minimum possible total edge weight, without cycles.
- **Kruskal's Algorithm**:
  1. Sort all edges of the graph in ascending order of their weights.
  2. Initialize a Union-Find (DSU) structure containing all vertices.
  3. Loop through the sorted edges:
     - For edge \`(u, v)\`:
       - Check if \`u\` and \`v\` belong to the same disjoint set using DSU \`find\`.
       - If they do not, union them: \`union(u, v)\` and add the edge to the MST.
       - If they do, skip the edge to prevent cycle formation.
     - Stop once the MST contains exactly \`V - 1\` edges.
- **Complexity**:
  - **Time**: \$O(E log E)\$ or \$O(E log V)\$ since sorting edges takes \$O(E log E)\$ time, and DSU union/find takes near \$O(1)\$ amortized time.
  - **Space**: \$O(V)\$ to store parents and ranks in DSU.

### Real-World Example
Laying down cables or pipelines. Connecting 10 regional offices with internet fibers such that all offices are connected (directly or indirectly) with the absolute minimum total fiber length.

### Best Practice
Using DSU with path compression and union by rank is critical to achieve Kruskal's optimal performance. Without DSU optimizations, cycle checks would slow the algorithm down to \$O(E * V)\$.

### Common Mistakes
Forgetting that Kruskal's algorithm only works on **undirected** graphs. For directed graphs, Chu-Liu-Edmonds' algorithm must be used to find optimum branchings.

### Code Example (TypeScript)
\`\`\`typescript
interface Edge {
  src: number;
  dest: number;
  weight: number;
}

function kruskalMST(edges: Edge[], numVertices: number): Edge[] {
  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);
  
  const dsu = new DSU(numVertices);
  const mst: Edge[] = [];
  
  for (const edge of edges) {
    if (mst.length === numVertices - 1) break;
    
    // If they don't form a cycle, include this edge
    if (dsu.union(edge.src, edge.dest)) {
      mst.push(edge);
    }
  }
  return mst;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Minimum Spanning Tree (MST) হলো একটি আন-ডাইরেক্টেড গ্রাফের এমন একটি সাব-সেট কানেকশন যা সব নোডকে কোনো সাইকেল গঠন ছাড়া সর্বনিম্ন ওজনের তার বা লাইনে যুক্ত করে।
- **Kruskal-এর অ্যালগরিদম**:
  ১. গ্রাফের সব কানেকশন বা এজ ওজনের ছোট থেকে বড় ক্রমানুসারে সর্ট করুন।
  ২. সব নোড নিয়ে একটি Union-Find (DSU) স্ট্রাকচার ইনিশিয়েলাইজ করুন।
  ৩. সর্ট করা এজের ওপর লুপ চালান:
     - কানেকশন \`(u, v)\`-এর জন্য:
       - DSU \`find\` ব্যবহার করে চেক করুন \`u\` এবং \`v\` অলরেডি একই কানেক্টেড গ্রুপে আছে কিনা।
       - যদি না থাকে, তবে তাদের যুক্ত করুন: \`union(u, v)\` এবং এজটি MST-তে যোগ করুন।
       - যদি থাকে, তবে লুপ এড়াতে এজটি স্কিপ করুন।
     - যখনই MST-তে \`V - 1\` এজ চলে আসবে, তখনই প্রসেস শেষ করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(E log E)\$ বা \$O(E log V)\$ - এজ সর্ট করার জন্য। DSU অপারেশনে প্রায় ও(১) সময় লাগে।
  - **স্পেস**: \$O(V)\$ - DSU-তে প্যারেন্ট এবং র‍্যাংক অ্যারের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইবার কেবল কানেকশন বা গ্যাস পাইপলাইন বসানো। ১০টি অফিসে এমনভাবে ফাইবার লাইন বসানো যেন প্রতিটি অফিস একে অপরের সাথে যুক্ত থাকে এবং মোট ফাইবারের দৈর্ঘ্য সর্বনিম্ন হয়।

### উত্তম অনুশীলন
Kruskal-এর সেরা পারফরম্যান্স পেতে পাথ কম্প্রেশন এবং ইউনিয়ন বাই র‍্যাংক সহ DSU ব্যবহার করা আবশ্যক। DSU ছাড়া লুপ ডিটেক্ট করতে গেলে অ্যালগরিদমটি অত্যন্ত ধীরগতির (\$O(E * V)\$) হয়ে যাবে।

### সাধারণ ভুল
ভুলে যাওয়া যে Kruskal শুধুমাত্র **আন-ডাইরেক্টেড** গ্রাফের ক্ষেত্রে কাজ করে। ডাইরেক্টেড গ্রাফের ক্ষেত্রে এটি কার্যকর নয়।`
  },
  {
    id: "dsa-42",
    title: "What is Topological Sort, and how does Kahn's algorithm implement it?",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","BFS","Topological Sort","Algorithms"],
    enAnswer: "Topological Sort linearly orders vertices of a Directed Acyclic Graph (DAG) such that for edge u->v, u comes before v. Kahn's algorithm implements this by repeatedly queueing nodes with an in-degree of 0 and reducing neighbor in-degrees. Time is O(V + E) and space is O(V).",
    bnAnswer: "টপোলজিক্যাল সর্ট একটি Directed Acyclic Graph (DAG)-এর নোডগুলোকে এমনভাবে সাজায় যেন u->v এজের জন্য u নোডটি v-এর আগে আসে। Kahn-এর অ্যালগরিদম ০ ইন-ডিগ্রি (In-degree) নোডগুলো কিউতে প্রসেস করে এটি সম্পন্ন করে। সময় জটিলতা ও(ভি + ই)।",
    enExplanation: `### Explanation
Topological Sort is only possible on Directed Acyclic Graphs (DAGs). If there is a cycle, no valid topological ordering exists.
- **Kahn's Algorithm (BFS-based)**:
  1. Calculate the **in-degree** (number of incoming edges) for every vertex.
  2. Queue all vertices with an in-degree of 0 (no prerequisites).
  3. While queue is not empty:
     - Dequeue node \`u\`. Add \`u\` to the topological order list.
     - For each neighbor \`v\` of \`u\`:
       - Decrement the in-degree of \`v\` by 1 (we resolved the prerequisite \`u\`).
       - If \`v\`'s in-degree becomes 0, enqueue \`v\`.
  4. If the size of the topological order list is less than \`V\`, a cycle exists (cannot sort).
- **Complexity**:
  - **Time**: \$O(V + E)\$ - each vertex and edge is processed once.
  - **Space**: \$O(V)\$ to store in-degrees array and queue.

### Real-World Example
Course scheduling. You must take "Introduction to Programming" (in-degree 0) before "Data Structures", and "Data Structures" before "Advanced Algorithms". Topological sort output gives the correct sequence of courses to graduate.

### Best Practice
Kahn's algorithm is excellent because it **detects cycles automatically** if the final sorted array length is less than \$V\$. Always check this condition at the end of execution to prevent returning incomplete lists on cyclic data.

### Common Mistakes
Running Topological Sort on a graph containing cycles, which causes nodes in the cycle to never reach in-degree 0. They will never enter the queue, and the algorithm will fail to sort them.

### Code Example (TypeScript)
\`\`\`typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const adjList: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = new Int32Array(numCourses);
  
  for (const [dest, src] of prerequisites) {
    adjList[src].push(dest);
    inDegree[dest]++;
  }
  
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order: number[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    
    for (const neighbor of adjList[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  return order.length === numCourses ? order : []; // Empty if cycle exists
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টপোলজিক্যাল সর্ট (Topological Sort) শুধুমাত্র Directed Acyclic Graph (DAG - লুপহীন ডাইরেক্টেড গ্রাফ)-এর ওপর চালনা করা সম্ভব। গ্রাফে সাইকেল থাকলে কোনো অর্ডার তৈরি করা সম্ভব নয়।
- **Kahn-এর অ্যালগরিদম (BFS-ভিত্তিক)**:
  ১. প্রতিটি নোডের **ইন-ডিগ্রি** (In-degree - নোডে কতটি ইনকামিং বা প্রবেশকারী লাইন আছে) হিসাব করুন।
  ২. যেসব নোডের ইন-ডিগ্রি ০ (অর্থাৎ কোনো প্রি-রিকুইজিট নেই), সেগুলোকে কিউতে পুশ করুন।
  ৩. কিউ খালি না হওয়া পর্যন্ত লুপ চালান:
     - কিউ থেকে নোড \`u\` ডিকিউ করে আমাদের সর্টেড অর্ডারে রাখুন।
     - নোড \`u\`-এর প্রতিটি প্রতিবেশী \`v\`-এর জন্য:
       - \`v\`-এর ইন-ডিগ্রি ১ কমিয়ে দিন (যেহেতু তার কন্ডিশন \`u\` প্রসেস হয়ে গেছে)।
       - ইন-ডিগ্রি ০ হয়ে গেলে \`v\` নোডটি কিউতে পুশ করুন।
  ৪. লুপ শেষে যদি সর্টেড অর্ডারের সংখ্যা মোট নোড \$V\$-এর চেয়ে কম হয়, তবে গ্রাফে সাইকেল বা লুপ আছে।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(V + E)\$ - নোড ও এজ প্রসেস করার জন্য।
  - **স্পেস**: \$O(V)\$ - ইন-ডিগ্রি ও কিউয়ের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ভার্সিটির কোর্স রেজিস্ট্রেশন। "Programming 101" (ইন-ডিগ্রি ০) কোর্সটি করার পর আপনি "Algorithms 101" করতে পারবেন, এবং সেটি শেষ করার পর "Machine Learning" করতে পারবেন। টপোলজিক্যাল সর্ট আপনাকে পুরো গ্র্যাজুয়েশনের সঠিক ক্রমানুসারী কোর্স তালিকা দেবে।

### উত্তম অনুশীলন
Kahn-এর অ্যালগরিদমের একটি বড় সুবিধা হলো এটি নোডের সাইজ চেক করে **স্বয়ংক্রিয়ভাবে গ্রাফের লুপ সনাক্ত করতে পারে**। লুপ শেষে সর্টেড লিস্টের দৈর্ঘ্য যাচাই করতে ভুলবেন না।

### সাধারণ ভুল
সাইকেল বা লুপ থাকা গ্রাফে টপোলজিক্যাল সর্ট চালানো, যার ফলে সাইকেলের ভেতরে থাকা নোডগুলোর ইন-ডিগ্রি কখনোই ০ হবে না এবং তারা কখনোই কিউতে প্রবেশ করতে পারবে না।`
  },
  {
    id: "dsa-43",
    title: "What is the A* Search algorithm, and how does it use heuristics?",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","A* Search","Heuristics","Algorithms"],
    enAnswer: "A* Search is a pathfinding algorithm that extends Dijkstra's by using heuristics to estimate distance to the goal. It evaluates nodes using f(n) = g(n) + h(n), where g(n) is the cost from start and h(n) is the heuristic estimate. Time is O(E) in best case and space is O(V).",
    bnAnswer: "A* Search একটি পাথফাইন্ডিং অ্যালগরিদম যা হিউরিস্টিকস (Heuristics) ব্যবহার করে Dijkstra-র অ্যালগরিদমকে উন্নত করে। এটি f(n) = g(n) + h(n) সমীকরণে নোড মূল্যায়ন করে, যেখানে g(n) হলো শুরু থেকে খরচ এবং h(n) হলো হিউরিস্টিক অনুমান। সময় জটিলতা ও(ই) এর কাছাকাছি।",
    enExplanation: `### Explanation
A* Search finds the shortest path between a start node and a goal node. It improves on Dijkstra's by prioritizing nodes that appear to be topologically closer to the goal using a **heuristic function**.
- **The Scoring Equation**:
  - For node \$n\$: \$f(n) = g(n) + h(n)\$
  - \$g(n)\$: The exact cost incurred to reach node \$n\$ from the start node.
  - \$h(n)\$: The estimated cost to reach the goal from node \$n\$ (the heuristic). E.g., Euclidean distance or Manhattan distance on a grid.
- **Rules of Heuristic**:
  - To guarantee the shortest path is found, the heuristic must be **admissible** (it must never overestimate the actual cost to reach the goal) and **consistent** (satisfies triangle inequality).
- **Complexity**:
  - **Time**: Worst-case is \$O(E)\$ (same as Dijkstra), but average search time is significantly lower because A* explores fewer branches directed towards the goal.
  - **Space**: \$O(V)\$ to store open/closed node lists.

### Real-World Example
GPS Navigation systems or Video Game AI. A game character navigating a grid map to attack a player. Instead of checking path nodes in all directions (Dijkstra), A* focuses searching in the general direction of the player.

### Best Practice
Choose the right heuristic function:
- **Manhattan Distance**: Use when movement is restricted to 4 directions (up, down, left, right).
- **Euclidean Distance**: Use when movement is allowed in any direction.

### Common Mistakes
Using an inadmissible heuristic (one that overestimates the distance), which causes the A* algorithm to bypass the actual shortest path and return a sub-optimal route.

### A* Pathfinding Directional View
\`\`\`
Dijkstra (Explores in circle):     A* Search (Explores towards target):
     [  . . .  ]                       [       ]
     [ . Start . ]  -->                [ Start ===> Goal ]
     [  . . .  ]                       [       ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
A* Search হলো একটি অত্যন্ত জনপ্রিয় পাথফাইন্ডিং অ্যালগরিদম যা সোর্স ও গোল নোডের মধ্যকার শর্টেস্ট পাথ খুঁজে বের করে। এটি Dijkstra-র অ্যালগরিদমকে একটি **হিউরিস্টিক ফাংশন** (Heuristic Function) দিয়ে অপ্টিমাইজড করে নোডের দিকনির্দেশনা নির্দিষ্ট করে।
- **স্কোরিং সমীকরণ**:
  - নোড \$n\$-এর জন্য: \$f(n) = g(n) + h(n)\$
  - \$g(n)\$: শুরু থেকে নোড \$n\$-এ পৌঁছানোর প্রকৃত ট্রাভেল কস্ট বা দূরত্ব।
  - \$h(n)\$: নোড \$n\$ থেকে গোল বা গন্তব্য নোডের আনুমানিক দূরত্ব (Heuristic)। যেমন গ্রিডে ম্যানহাটন বা ইউক্লিডীয় দূরত্ব।
- **হিউরিস্টিকের শর্ত**:
  - শর্টেস্ট পাথ পাওয়ার গ্যারান্টি পেতে হিউরিস্টিক ফাংশনটি অবশ্যই **Admissible** হতে হবে (যা কখনোই গন্তব্যের আসল দূরত্বের চেয়ে বেশি অনুমান করবে না) এবং **Consistent** হতে হবে।
- **জটিলতা (Complexity)**:
  - **সময়**: সবচেয়ে খারাপ ক্ষেত্রে \$O(E)\$ (Dijkstra-র সমান), কিন্তু গড়ে এটি অনেক ফাস্ট কারণ এটি গোল নোডের নির্দিষ্ট অভিমুখে সার্চ করে।
  - **স্পেস**: \$O(V)\$ - ওপেন ও ক্লোজড নোড ট্র্যাকিংয়ের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ভিডিও গেমের এআই (Game AI)। কোনো গেমের চরিত্র ম্যাপের ভেতর দিয়ে হেঁটে এসে প্লেয়ারকে অ্যাটাক করতে চায়। চারপাশের সব রাস্তা চেক না করে (Dijkstra), চরিত্রটি প্লেয়ারের সরাসরি অভিমুখে থাকা রাস্তাগুলোকে অগ্রাধিকার দেয় (A*)।

### উত্তম অনুশীলন
কাজের ধরন অনুযায়ী সঠিক হিউরিস্টিক বেছে নিন:
- **Manhattan Distance**: যখন শুধু ৪টি অভিমুখে (ওপরে, নিচে, ডানে, বামে) মুভমেন্ট সীমাবদ্ধ থাকে।
- **Euclidean Distance**: যখন যেকোনো কোণ বা ডিরেকশনে মুক্তভাবে মুভমেন্ট করার সুবিধা থাকে।

### সাধারণ ভুল
এমন হিউরিস্টিক ব্যবহার করা যা আসল দূরত্বের চেয়ে বেশি অনুমান করে (Inadmissible Heuristic)। এর ফলে A* অ্যালগরিদম শর্টেস্ট পাথ স্কিপ করে বড় বা ভুল পথ রিটার্ন করতে পারে।`
  },
  {
    id: "dsa-44",
    title: "What is a Segment Tree, and what operations does it optimize?",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Trees","Segment Tree","Algorithms"],
    enAnswer: "A Segment Tree is a tree structure used for range queries and point updates on an array. It stores intervals in nodes, allowing both range sum/min/max queries and point updates in O(log N) time. Time complexity is O(N) for construction, and space is O(N).",
    bnAnswer: "সেগমেন্ট ট্রি (Segment Tree) হলো রেঞ্জ কুয়েরি এবং পয়েন্ট আপডেট অপ্টিমাইজ করার জন্য ব্যবহৃত ট্রি স্ট্রাকচার। এটি নোডে ইন্টারভাল বা সীমার মান সংরক্ষণ করে, যা ও(লগ এন) সময়ে রেঞ্জ sum/min/max এবং পয়েন্ট আপডেট করতে দেয়। সময় জটিলতা ও(লগ এন)।",
    enExplanation: `### Explanation
When dealing with an array where we frequently perform:
1. **Range Queries** (e.g., finding the sum/min/max in index range \`[L, R]\`).
2. **Point Updates** (e.g., updating value at index \`i\`).
- **Standard Array Trade-off**:
  - Array loop: Update \$O(1)\$, Range Query \$O(N)\$.
  - Prefix Sum: Update \$O(N)\$, Range Query \$O(1)\$.
- **Segment Tree Solution**:
  - Both operations are optimized to **\$O(log N)\$**.
- **Structure**:
  - The root represents the entire array range \`[0, N-1]\`.
  - Child nodes represent split intervals \`[0, mid]\` and \`[mid+1, N-1]\`.
  - Leaf nodes represent individual array elements.
  - The size of the segment tree array is bounded by \$4N\$ elements.

### Real-World Example
Financial tickers. Analyzing the maximum stock price transaction in any dynamic range (e.g. between 10:15am and 10:45am) while prices are continuously being updated in real-time.

### Best Practice
Store the Segment Tree inside a flat array of size \$4N\$ (similar to a Heap representation) where parent node at index \`tree[i]\` has children at \`tree[2*i + 1]\` and \`tree[2*i + 2]\`.

### Common Mistakes
Forgetting that segment tree updates must propagate all the way from the leaf node up to the root, updating all parent nodes that cover the modified index.

### Segment Tree Structure View
\`\`\`
Tree Nodes (stores range sums):
             [0-3: Sum=36]
             /           \\
      [0-1: Sum=16]     [2-3: Sum=20]
      /         \\       /         \\
  [0: Sum=6] [1: Sum=10] [2: Sum=8] [3: Sum=12]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অ্যারের ওপর ঘন ঘন নিচের অপারেশনগুলো করার প্রয়োজন হলে সেগমেন্ট ট্রি ব্যবহার করা হয়:
১. **রেঞ্জ কুয়েরি (Range Queries)**: ইনডেক্স রেঞ্জ \`[L, R]\`-এর মোট যোগফল বা ক্ষুদ্রতম/সর্বোত্তম মান খুঁজে বের করা।
২. **পয়েন্ট আপডেট (Point Updates)**: ইনডেক্স \`i\`-এর মান পরিবর্তন বা আপডেট করা।
- **সাধারণ অ্যারে সীমাবদ্ধতা**:
  - লুপ চালিয়ে বের করা: আপডেট \$O(1)\$, রেঞ্জ কুয়েরি \$O(N)\$।
  - প্রিফিক্স সাম (Prefix Sum): আপডেট \$O(N)\$, রেঞ্জ কুয়েরি \$O(1)\$।
- **সেগমেন্ট ট্রি সমাধান**:
  - উভয় অপারেশনের গতি বাড়িয়ে **\$O(log N)\$** করে ফেলে।
- **গঠন**:
  - রুট নোডটি সম্পূর্ণ অ্যারে রেঞ্জ \`[0, N-1]\` কভার করে।
  - চাইল্ড নোডগুলো ইন্টারভাল ভাগ করে নেয় \`[0, mid]\` এবং \`[mid+1, N-1]\`।
  - লিফ (Leaf) নোডগুলো অ্যারের প্রতিটি একক উপাদান নির্দেশ করে।
  - সেগমেন্ট ট্রি অ্যারের মোট সাইজ সর্বোচ্চ \$4N\$ পর্যন্ত হয়ে থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইন্যান্সিয়াল স্টক মার্কেট। লাইভ স্টক প্রাইস অনবরত আপডেট হওয়ার পাশাপাশি যেকোনো কাস্টম রেঞ্জে (যেমন সকাল ১০:১৫ থেকে ১০:৪৫) সর্বোচ্চ প্রফিট বা প্রাইস বের করা।

### উত্তম অনুশীলন
হিপ রিপ্রেজেন্টেশনের মতো সেগমেন্ট ট্রিকে \$4N\$ সাইজের ফ্ল্যাট অ্যারে দিয়ে প্রকাশ করুন। যেখানে ইনডেক্স \`i\`-এর চাইল্ডরা থাকবে \`2*i + 1\` এবং \`2*i + 2\` পজিশনে।

### সাধারণ ভুল
পয়েন্ট আপডেটের সময় শুধুমাত্র লিফ নোডের মান আপডেট করে রেখে দেওয়া। অবশ্যই লিফ নোড থেকে রুট নোড পর্যন্ত ওপরে উঠে সবকটি প্যারেন্ট নোডের ওভারল্যাপিং ভ্যালু রিসিঙ্ক বা আপডেট করতে হবে।`
  },
  {
    id: "dsa-45",
    title: "Design an LRU Cache with O(1) complexities.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Design","LRU Cache","Linked Lists","Hash Map"],
    enAnswer: "An LRU Cache gets and puts items in O(1) time using a Hash Map combined with a Doubly Linked List (DLL). The Hash Map maps keys to DLL nodes for O(1) lookup. The DLL maintains access order; most recent at head, least recent at tail. Time is O(1) and space is O(C).",
    bnAnswer: "ও(১) সময়ে LRU Cache ডিজাইন করতে একটি Hash Map এবং Doubly Linked List (DLL)-এর সমন্বয় ব্যবহার করুন। হ্যাশ ম্যাপ কী-কে DLL নোডের সাথে ম্যাপ করে ও(১) সার্চ দেয়। DLL ব্যবহারের ক্রমানুসারী অর্ডার বজায় রাখে। সময় জটিলতা ও(১)।",
    enExplanation: `### Explanation
An Least Recently Used (LRU) Cache discards the least recently used items first when capacity is reached.
- **The Design Components**:
  1. **Doubly Linked List (DLL)**: Keeps track of node access order.
     - Head: Most Recently Used (MRU).
     - Tail: Least Recently Used (LRU).
     - Node has pointers: \`prev\`, \`next\`, \`key\`, \`value\`.
  2. **Hash Map**: Maps \`key\` to the \`DLL Node\`. This allows looking up any node in \$O(1)\$ time.
- **Operations**:
  - **Get(key)**:
    - Look up node in map. If not exists, return -1.
    - If exists, move the node to the Head of DLL (mark as most recently used) and return its value.
  - **Put(key, value)**:
    - If key exists, update value and move node to DLL Head.
    - If key is new:
      - Create a new node and add it to DLL Head and Map.
      - If cache size exceeds capacity, remove the tail node of DLL (least recently used) and delete its key from the Map.
- **Complexity**:
  - **Time**: \$O(1)\$ for both get and put operations.
  - **Space**: \$O(C)\$ where \$C\$ is cache capacity.

### Real-World Example
A smartphone multitasking screen. The apps you opened recently are at the top. The app you haven't opened in days sits at the bottom and is eventually killed by the OS to free up RAM when memory runs low.

### Best Practice
Use dummy **Head** and **Tail** nodes in the Doubly Linked List. Dummy nodes act as boundaries, preventing null pointer edge cases when adding or removing elements at the ends.

### Common Mistakes
Forgetting to delete the evicted node's key from the Hash Map when deleting the node from the Doubly Linked List tail, leading to memory leaks and stale index lookups.

### LRU Cache Diagram
\`\`\`
  Hash Map: [ KeyA -> NodeA ] , [ KeyB -> NodeB ]
                  |                  |
                  v                  v
  DLL:  [DummyHead] <---> [NodeA] <---> [NodeB] <---> [DummyTail]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
LRU (Least Recently Used) ক্যাশ মেমোরি লিমিট পূর্ণ হয়ে গেলে সবচেয়ে বেশি সময় ধরে অব্যবহৃত থাকা আইটেমটি প্রথমে মুছে ফেলে।
- **ডিজাইন কম্পোনেন্টসমূহ**:
  ১. **ডাব্লি লিঙ্কড লিস্ট (DLL)**: নোড ব্যবহারের ক্রমানুসারী অর্ডার বা ক্রম ধরে রাখে।
     - Head: সম্প্রতি ব্যবহৃত আইটেম (Most Recently Used - MRU)।
     - Tail: সবচেয়ে পুরাতন অব্যবহৃত আইটেম (Least Recently Used - LRU)।
  ২. **হ্যাশ ম্যাপ**: কী-কে DLL নোডের অ্যাড্রেসের সাথে ম্যাপ করে রাখে, যা ও(১) সময়ে নোড খুঁজে বের করার সুবিধা দেয়।
- **অপারেশনসমূহ**:
  - **Get(key)**:
    - ম্যাপে কী খুঁজুন। না থাকলে -১ রিটার্ন করুন।
    - থাকলে নোডটিকে DLL-এর মাথায় (Head-এ) সরিয়ে আনুন (সম্প্রতি ব্যবহৃত চিহ্নিত করতে) এবং ভ্যালু রিটার্ন করুন।
  - **Put(key, value)**:
    - কীটি অলরেডি থাকলে ভ্যালু আপডেট করে নোডটিকে DLL-এর মাথায় আনুন।
    - কীটি নতুন হলে:
      - নতুন নোড তৈরি করে DLL-এর মাথায় এবং ম্যাপে যোগ করুন।
      - যদি ক্যাশের ক্যাপাসিটি ছাড়িয়ে যায়, তবে DLL-এর লেজ বা লেজের আগের নোডটি (Tail node) ডিলিট করে দিন এবং ম্যাপ থেকেও তার কী-টি মুছে ফেলুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(1)\$ get এবং put উভয় অপারেশনের জন্য।
  - **স্পেস**: \$O(C)\$ যেখানে \$C\$ হলো ক্যাশের ক্যাপাসিটি।

### বাস্তব-ভিত্তিক উদাহরণ
স্মার্টফোনের মাল্টিটাস্কিং স্ক্রিন। আপনি সম্প্রতি যেসব অ্যাপ ওপেন করেছেন সেগুলো ওপরে থাকে। যে অ্যাপটি অনেক দিন ওপেন করেননি সেটি নিচে থাকে এবং র‌্যাম খালি করার জন্য ওএস সেটি ব্যাকগ্রাউন্ড থেকে কিল বা রিমুভ করে দেয়।

### উত্তম অনুশীলন
ডাব্লি লিঙ্কড লিস্টে ডামি **Head** এবং **Tail** নোড ব্যবহার করুন। ডামি নোডগুলো বাউন্ডারি হিসেবে কাজ করে, যা লিস্টের নোড অ্যাড বা রিমুভ করার সময় নাল পয়েন্টার এরর হওয়া আটকায়।

### সাধারণ ভুল
লিস্টের লেজ বা টেল থেকে নোড এভিক্ট/ডিলিট করার সময় হ্যাশ ম্যাপ থেকে নোডের কী-টি মুছতে ভুলে যাওয়া, যার ফলে মেমোরি লিক হয় এবং ম্যাপ থেকে ভুল মেমোরি রেফারেন্স রিড করার এরর ঘটে।`
  },
  {
    id: "dsa-46",
    title: "Explain the Knuth-Morris-Pratt (KMP) string matching algorithm.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Strings","KMP","Searching","Algorithms"],
    enAnswer: "KMP matches a pattern in a string in O(N + M) time. It avoids duplicate checks by preprocessing the pattern into a Longest Prefix Suffix (LPS) array, which tells us how many characters we can skip comparing on mismatch. Space complexity is O(M).",
    bnAnswer: "KMP অ্যালগরিদম ও(এন + এম) সময়ে একটি স্ট্রিং থেকে প্যাটার্ন ম্যাচ খুঁজে বের করে। এটি প্যাটার্নটিকে প্রি-প্রসেস করে LPS (Longest Prefix Suffix) অ্যারে তৈরি করে ম্যাচিং ব্যর্থ হওয়ার পর কতটি ক্যারেক্টার স্কিপ করা যাবে তা নির্ধারণ করে। স্পেস জটিলতা ও(এম)।",
    enExplanation: `### Explanation
Given a text \$T\$ of length \$N\$ and a pattern \$P\$ of length \$M\$, find if \$P\$ exists in \$T\$.
- **Brute Force**: Shift pattern by 1 index and check. Complexity: \$O(N * M)\$.
- **KMP Algorithm**:
  - We precompute a **Longest Prefix Suffix (LPS)** table for the pattern.
  - \`lps[i]\` stores the length of the longest proper prefix of \`P[0...i]\` that is also a suffix of \`P[0...i]\`.
  - When a mismatch occurs after matching \$j\$ characters, we don't restart from index 0 of the pattern. Instead, we resume matching from index \`lps[j-1]\`.
- **Complexity**:
  - **Time**: \$O(N + M)\$ - \$O(M)\$ to build the LPS table and \$O(N)\$ to scan the text.
  - **Space**: \$O(M)\$ auxiliary space to store the LPS array.

### Real-World Example
Text editors search function (Ctrl + F). Finding occurrences of a query word in a massive document containing millions of characters instantly, without freezing the browser thread.

### Best Practice
LPS array construction is crucial. Ensure you implement the prefix pointer loop correctly, updating \`len = lps[len - 1]\` iteratively when characters mismatch during preprocessing.

### Common Mistakes
Forgetting that KMP requires \$O(M)\$ space for the LPS array. For extremely short patterns, brute-force might execute faster in practice due to lower constant factor overhead.

### Code Example (TypeScript)
\`\`\`typescript
function buildLPS(pattern: string): Int32Array {
  const lps = new Int32Array(pattern.length);
  let len = 0;
  let i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
দৈর্ঘ্য \$N\$-এর টেক্সট \$T\$ এবং দৈর্ঘ্য \$M\$-এর প্যাটার্ন \$P\$ থেকে টেক্সটের ভেতর প্যাটার্নটি আছে কিনা তা খুঁজে বের করতে হবে।
- **ব্রুট ফোর্স মেথড**: প্যাটার্ন ১ ঘর করে সরিয়ে চেক করা। জটিলতা: \$O(N * M)\$।
- **KMP অ্যালগরিদম**:
  - এটি প্যাটার্নের জন্য একটি **LPS (Longest Prefix Suffix)** টেবিল তৈরি করে।
  - \`lps[i]\` নির্দেশ করে প্যাটার্ন সাব-স্ট্রিংয়ের সর্বোচ্চ কত বড় প্রিফিক্স একই সাথে তার সাফিক্সও বটে।
  - ম্যাচিং করার সময় কোনো ক্যারেক্টার মিসম্যাচ বা অমিল হলে আমরা প্যাটার্নের শুরুতে ফেরত যাই না। বরং সরাসরি প্যাটার্নের \`lps[j-1]\` ইনডেক্সে জাম্প করে ম্যাচিং প্রসেস কন্টিনিউ করি।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N + M)\$ - যেখানে \$O(M)\$ লাগে LPS টেবিল তৈরিতে এবং \$O(N)\$ লাগে টেক্সট স্ক্যান করতে।
  - **স্পেস**: \$O(M)\$ - LPS অ্যারে স্টোর রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
কোড এডিটরের সার্চ অপশন (Ctrl + F)। লাখ লাখ ক্যারেক্টার থাকা একটি বিশাল ডকুমেন্টে কোনো নির্দিষ্ট কিওয়ার্ড টাইপ করলে নিমেষেই তার সব ম্যাচ খুঁজে বের করা।

### উত্তম অনুশীলন
LPS টেবিল তৈরির লজিকটি নির্ভুল হওয়া গুরুত্বপূর্ণ। প্রিপ্রসেসিংয়ের সময় ক্যারেক্টার অমিল হলে \`len = lps[len - 1]\` লুপ দিয়ে ইটারেটিভলি লেন্থ আপডেট করুন।

### সাধারণ ভুল
মনে রাখা KMP অ্যালগরিদমে \$O(M)\$ মেমোরি লাগে। খুব ছোট সাইজের কিওয়ার্ড বা প্যাটার্ন সার্চের ক্ষেত্রে স্লাইডিং উইন্ডো বা ব্রুট ফোর্স ব্যবহার করাই তুলনামূলক দ্রুত ও সহজ হয়।`
  },
  {
    id: "dsa-47",
    title: "Solve the Edit Distance (Levenshtein Distance) problem using DP.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Dynamic Programming","Strings","Algorithms"],
    enAnswer: "Edit Distance calculates the minimum operations (insert, delete, replace) to convert string A to B. We fill a 2D DP table DP[i][j]. If characters match, DP[i][j] = DP[i-1][j-1], else 1 + min(insert, delete, replace). Time is O(M * N) and space is O(M * N).",
    bnAnswer: "Edit Distance (লেভেনশটাইন দূরত্ব) একটি স্ট্রিংকে অন্য স্ট্রিংয়ে রূপান্তর করতে ন্যূনতম অপারেশন (ইনসার্ট, ডিলিট, রিপ্লেস) হিসাব করে। আমরা একটি ২D DP টেবিল তৈরি করে প্রবলেমটি সমাধান করি। সময় ও স্পেস জটিলতা ও(এম * এন)।",
    enExplanation: `### Explanation
Given two strings \`word1\` and \`word2\`, return the minimum number of operations required to convert \`word1\` to \`word2\`. Allowed operations are: Insert, Delete, and Replace a character.
- **DP State Definition**:
  - Let \`dp[i][j]\` be the minimum edit distance between \`word1[0...i-1]\` and \`word2[0...j-1]\`.
  - If \`word1[i-1] === word2[j-1]\` (characters match):
    - \`dp[i][j] = dp[i-1][j-1]\` (no operation needed).
  - Else:
    - \`dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])\`
      - \`dp[i][j-1]\`: Insert operation.
      - \`dp[i-1][j]\`: Delete operation.
      - \`dp[i-1][j-1]\`: Replace operation.
- **Complexity**:
  - **Time**: \$O(M * N)\$
  - **Space**: \$O(M * N)\$ to store the DP table.

### Real-World Example
Auto-correction or spell check. If a user types "graf", the editor calculates the edit distance between "graf" and dictionary words, suggesting "graph" (edit distance of 1) or "graft" (edit distance of 1) as corrections.

### Best Practice
Initialize the boundaries correctly: \`dp[i][0] = i\` (deleting all characters to match empty string) and \`dp[0][j] = j\` (inserting all characters to match empty string).

### Common Mistakes
Forgetting the \`1 +\` cost factor when computing the minimum of insert/delete/replace operations, which leads to returning incorrect low edit distances.

### Code Example (TypeScript)
\`\`\`typescript
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i][j - 1],   // Insert
          dp[i - 1][j],   // Delete
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }
  return dp[m][n];
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত দুটি শব্দ \`word1\` এবং \`word2\` থেকে ১ম শব্দটিকে ২য় শব্দে রূপান্তর করতে সর্বনিম্ন কতটি ক্যারেক্টার অপারেশন (ইনসার্ট, ডিলিট, রিপ্লেস) লাগবে তা বের করতে হবে।
- **DP স্টেট ফর্মুলেশন**:
  - ধরি \`dp[i][j]\` হলো \`word1[0...i-1]\` এবং \`word2[0...j-1]\`-এর ন্যূনতম এডিট দূরত্ব।
  - যদি ক্যারেক্টার দুটি মিলে যায় (\`word1[i-1] === word2[j-1]\`):
    - \`dp[i][j] = dp[i-1][j-1]\` (কোনো অপারেশনের প্রয়োজন নেই)।
  - না মিললে:
    - \`dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])\`
      - \`dp[i][j-1]\`: ইনসার্ট (Insert) অপারেশন।
      - \`dp[i-1][j]\`: ডিলিট (Delete) অপারেশন।
      - \`dp[i-1][j-1]\`: রিপ্লেস (Replace) বা প্রতিস্থাপন অপারেশন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(M * N)\$
  - **স্পেস**: \$O(M * N)\$ - ২D ম্যাট্রিক্স টেবিল সংরক্ষণের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
সার্চ কী-ওয়ার্ড অটো-কারেকশন বা বানানের ভুল ধরা। ইউজার যদি "graf" লেখে, স্পেলচেকার ফাস্ট ডিকশনারির শব্দের সাথে এর এডিট দূরত্ব হিসাব করে এবং ১ দূরত্ব থাকা "graph" বা "graft" শব্দটিকে কারেকশন হিসেবে সাজেস্ট করে।

### উত্তম অনুশীলন
বেইজ কেসগুলো সঠিকভাবে সেট করুন: \`dp[i][0] = i\` (সব নোড ডিলিট করে ফাঁকা স্ট্রিং করা) এবং \`dp[0][j] = j\` (সব নোড ইনসার্ট করে ফাঁকা থেকে ম্যাচ করা)।

### সাধারণ ভুল
ইনসার্ট/ডিলিট/রিপ্লেস অপারেশনের সর্বনিম্ন মান নেওয়ার সময় \`1 +\` কস্ট যোগ করতে ভুলে যাওয়া, যার ফলে কোড ভুল বা সবসময় ০ রিটার্ন করে।`
  },
  {
    id: "dsa-48",
    title: "Find the length of the Longest Increasing Subsequence in O(N log N) time.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Arrays","Binary Search","Dynamic Programming","Algorithms"],
    enAnswer: "The Longest Increasing Subsequence (LIS) finds the longest subsequence where elements are sorted in ascending order. Using a dynamic array and binary search (Patience Sorting), we maintain an active sorted sub-list. Time complexity is O(N log N) and space is O(N).",
    bnAnswer: "Longest Increasing Subsequence (LIS) ক্রমানুসারে ছোট থেকে বড় সাজানো দীর্ঘতম সাব-সেকুয়েন্সটি খুঁজে বের করে। বাইনারি সার্চ ও ডাইনামিক অ্যারে (Patience Sorting) ব্যবহার করে আমরা সর্টেড সাব-লিস্ট মেইনটেইন করি। সময় জটিলতা ও(এন লগ এন)।",
    enExplanation: `### Explanation
Given an integer array \`nums\`, return the length of the longest strictly increasing subsequence.
- **DP Solution**: Standard DP table takes \$O(N^2)\$ time.
- **Binary Search Solution (Patience Sorting / Tails Array)**:
  1. Maintain an array \`tails\` where \`tails[i]\` stores the smallest tail of all increasing subsequences of length \`i + 1\`.
  2. For each number \`x\` in \`nums\`:
     - Use Binary Search to find the index of the first element in \`tails\` that is \`>= x\`.
     - If found, overwrite that element with \`x\`. (This keeps our tails as small as possible, allowing longer subsequences).
     - If not found (meaning \`x\` is larger than all elements in \`tails\`), append \`x\` to the end of \`tails\`.
  3. The length of the \`tails\` array is the length of the LIS.
- **Complexity**:
  - **Time**: \$O(N log N)\$ - we loop \$N\$ times and run binary search taking \$O(log N)\$ in each step.
  - **Space**: \$O(N)\$ to store the tails array.

### Real-World Example
Ordering airplanes landing sequences based on their ascending sizes or weights to optimize runway layout and safety constraints.

### Best Practice
Understand that the \`tails\` array itself does **not** store the actual LIS subsequence. It only stores the minimum tails of subsequences of specific lengths. The length of the array is correct, but the values might not represent the final LIS.

### Common Mistakes
Using standard DP taking \$O(N^2)\$ time when the array size is very large (e.g. \$N = 100,000\$), which causes query timeouts. Always use the binary search patience sorting approach for large \$N\$.

### Code Example (TypeScript)
\`\`\`typescript
function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  
  for (const x of nums) {
    let low = 0;
    let high = tails.length;
    
    // Binary Search to find first element >= x
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2);
      if (tails[mid] < x) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    
    if (low === tails.length) {
      tails.push(x); // Append
    } else {
      tails[low] = x; // Overwrite
    }
  }
  return tails.length;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি ইন্টিজার অ্যারে থেকে ক্রমানুসারে ছোট থেকে বড় আকারে সাজানো দীর্ঘতম সাব-সেকুয়েন্সের (LIS) দৈর্ঘ্য বের করতে হবে।
- **DP মেথড**: সাধারণ ডাইনামিক টেবিল সল্যুশনে \$O(N^2)\$ সময় লাগে।
- **বাইনারি সার্চ মেথড (Patience Sorting)**:
  ১. একটি ডাইনামিক অ্যারে \`tails\` নিন যেখানে \`tails[i]\` কভার করে \`i + 1\` দৈর্ঘ্যের সাব-সেকুয়েন্সের সবচেয়ে ছোট শেষ উপাদানটি।
  ২. লুপ চালিয়ে প্রতিটি উপাদান \`x\`-এর জন্য:
     - বাইনারি সার্চ ব্যবহার করে \`tails\`-এ এমন প্রথম নোড খুঁজুন যার মান \`x\`-এর বড় বা সমান (\`>= x\`)।
     - পাওয়া গেলে, ঐ পজিশনের মান \`x\` দিয়ে ওভাররাইট করুন (যাতে শেষ মানটি যতটা সম্ভব ছোট রাখা যায়)।
     - পাওয়া না গেলে (তার মানে \`x\` হিপের সবার চেয়ে বড়), তবে \`x\`-কে \`tails\`-এর শেষে পুশ বা অ্যাপেন্ড করুন।
  ৩. লুপ শেষে \`tails\` অ্যারের মোট দৈর্ঘ্যই হবে LIS-এর দৈর্ঘ্য।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N log N)\$ - প্রতি উপাদানে ও(লগ এন) বাইনারি সার্চ চালানোর কারণে।
  - **স্পেস**: \$O(N)\$ - tails অ্যারে রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
উড়োজাহাজ ল্যান্ডিং শিডিউল। বিমানের সাইজ বা রানওয়ে ধারণক্ষমতা ছোট থেকে বড় ক্রম অনুযায়ী সাজানো যাতে ফাস্ট ল্যান্ডিং ও টেক অফ নিশ্চিত করা যায়।

### উত্তম অনুশীলন
মনে রাখবেন যে \`tails\` অ্যারেটি কিন্তু নিজে সর্টেড LIS সাব-সেকুয়েন্সটি ধারণ করে না, এটি শুধুমাত্র সাব-সেকুয়েন্সের শেষ নোডের মান ট্র্যাকে রাখে। তবে এর চূড়ান্ত দৈর্ঘ্য সবসময় সঠিক উত্তরের সমান হয়।

### সাধারণ ভুল
ডাটার সাইজ অনেক বড় (\$N = ১,০০,০০০\$) হওয়া সত্ত্বেও \$O(N^2)\$ সময়ের সাধারণ DP কোড ব্যবহার করা, যা ব্রাউজার হ্যাং করায়। বড় ডাটার জন্য সর্বদা বাইনারি সার্চ অপ্টিমাইজেশন ব্যবহার করুন।`
  },
  {
    id: "dsa-49",
    title: "Explain Tarjan's algorithm for finding Strongly Connected Components (SCCs).",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Graphs","SCC","DFS","Algorithms"],
    enAnswer: "Tarjan's algorithm finds Strongly Connected Components (SCCs) in a directed graph. Using a single DFS pass, it tracks discovery times and the lowest reachable node index for each vertex using a Stack. Time complexity is O(V + E) and space is O(V).",
    bnAnswer: "Tarjan-এর অ্যালগরিদম একটি ডাইরেক্টেড গ্রাফের Strongly Connected Components (SCCs) খুঁজে বের করে। একটি মাত্র DFS পাসে এটি ডিসকভারি টাইম এবং একটি কাস্টম স্ট্যাক ব্যবহার করে কানেক্টেড গ্রুপ সনাক্ত করে। সময় জটিলতা ও(ভি + ই) এবং স্পেস জটিলতা ও(ভি)।",
    enExplanation: `### Explanation
A Strongly Connected Component (SCC) of a directed graph is a maximal subtree of vertices such that every vertex in the subtree is reachable from any other vertex in the same subtree.
- **Tarjan's DFS Algorithm**:
  - We track:
    - \`ids[u]\`: Discovery time/index of node \`u\`.
    - \`low[u]\`: Lowest node index reachable from \`u\` during DFS traversal.
  - Maintain a stack to hold nodes in the current DFS path.
  - On visiting node \`u\`:
    - Assign a unique ID, set \`low[u] = ids[u]\`, and push \`u\` to the stack.
    - For each neighbor \`v\`:
      - If unvisited, recursively run DFS, then update \`low[u] = Math.min(low[u], low[v])\`.
      - If already on the stack, update \`low[u] = Math.min(low[u], ids[v])\`.
    - If \`low[u] === ids[u]\` (u is the root of an SCC):
      - Pop nodes from stack until \`u\` is popped. All popped nodes form one SCC.
- **Complexity**:
  - **Time**: \$O(V + E)\$ - single DFS pass.
  - **Space**: \$O(V)\$ for DSU-like state arrays and stack.

### Real-World Example
Social Networks: Identifying "communities" where every member in the group has followed each other (directly or indirectly) so they share close communication connectivity.

### Best Practice
Keep tracking nodes on stack using a boolean lookup array \`onStack[i]\`. This allows checking if a node is currently in the stack in \$O(1)\$ time, avoiding searching the stack array.

### Common Mistakes
Confusing strongly connected components in directed graphs with connected components in undirected graphs. Undirected components can be found easily using standard DFS or Union-Find, whereas directed SCCs require Tarjan's or Kosaraju's algorithms.

### SCC Directed Graph View
\`\`\`
  (A) <===> (B) --------> (C) <===> (D)
   LCS Component 1         LCS Component 2
   (Nodes A, B)            (Nodes C, D)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাইরেক্টেড (Directed) গ্রাফের Strongly Connected Component (SCC) হলো এমন নোডগুলোর গ্রুপ যেখানে গ্রুপের যেকোনো নোড থেকে গ্রুপের অন্য যেকোনো নোডে পৌঁছানো সম্ভব।
- **Tarjan-এর DFS অ্যালগরিদম**:
  - আমরা ট্র্যাক করি:
    - \`ids[u]\`: নোড \`u\` ভিজিট করার ক্রমানুসারী ইউনিক আইডি।
    - \`low[u]\`: DFS ট্রাভার্সালে নোড \`u\` থেকে সর্বনিম্ন কত আইডি সম্পন্ন নোডে ফেরত যাওয়া যায়।
  - একটি কাস্টম স্ট্যাক মেইনটেইন করা হয় যা DFS পাথের নোডগুলো সেভ রাখে।
  - নোড \`u\` ভিজিট করার সময়:
    - আইডি অ্যাসাইন করুন, \`low[u] = ids[u]\` সেট করুন এবং নোডটি স্ট্যাকে পুশ করুন।
    - প্রতিটি প্রতিবেশীর জন্য:
      - প্রতিবেশী আন-ভিজিটেড হলে রিকার্সিভলি DFS কল করুন, এরপর \`low[u] = Math.min(low[u], low[v])\` আপডেট করুন।
      - প্রতিবেশী অলরেডি স্ট্যাকে থাকলে, \`low[u] = Math.min(low[u], ids[v])\` আপডেট করুন।
    - যদি \`low[u] === ids[u]\` হয় (অর্থাৎ u হলো একটি SCC-এর মূল রুট নোড):
      - স্ট্যাক থেকে নোড \`u\` না আসা পর্যন্ত পপ করতে থাকুন। পপ হওয়া সবকটি নোড মিলে একটি SCC গঠন করে।
- **জতিলা (Complexity)**:
  - **সময়**: \$O(V + E)\$ - একবার গ্রাফ DFS ট্রাভার্সাল করার কারণে।
  - **স্পেস**: \$O(V)\$ - স্ট্যাক এবং ট্র্যাকিং অ্যারের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
সোশ্যাল নেটওয়ার্কের ক্লোজড গ্রুপ বা কমিউনিটি। যেখানে গ্রুপের প্রতিজন মেম্বার ডিরেক্ট বা ইনডিরেক্টলি একে অপরের ফ্রেন্ডলিস্টে আছে।

### উত্তম অনুশীলন
একটি নোড স্ট্যাকে আছে কিনা তা ও(১) সময়ে চেক করতে একটি বুলিয়ান ভেরিয়েবল অ্যারে \`onStack[i]\` মেইনটেইন করুন, যা মূল স্ট্যাক অ্যারে লুপ চালিয়ে খোঁজার ল্যাটেন্সি কমায়।

### সাধারণ ভুল
ডাইরেক্টেড গ্রাফের SCC এবং আন-ডাইরেক্টেড গ্রাফের Connected Components গুলিয়ে ফেলা। আন-ডাইরেক্টেড গ্রাফের ক্ষেত্রে সহজে DFS বা Union-Find দিয়ে করা গেলেও ডাইরেক্টেড গ্রাফের জন্য Tarjan বা Kosaraju অ্যালগরিদম ব্যবহার করতে হয়।`
  },
  {
    id: "dsa-50",
    title: "Explain the Backtracking method by solving the N-Queens puzzle.",
    difficulty: "advanced",
    category: "dsa",
    tags: ["Backtracking","Recursion","Algorithms"],
    enAnswer: "Backtracking is a systematic search method that builds candidates and discards them as soon as they cannot lead to a valid solution. For N-Queens, we recursively place queens row-by-row, backtracking if a conflict is found. Time complexity is O(N!).",
    bnAnswer: "ব্যাকট্র্যাকিং (Backtracking) হলো একটি সিস্টেম্যাটিক সার্চ মেথড যা সম্ভাব্য সমাধান ধাপে ধাপে তৈরি করে এবং ভুল পথে গেলে সাথে সাথে তা বর্জন বা রোলব্যাক করে। N-Queens ধাঁধায় আমরা রিকার্সিভলি কুইন বসাই ও দ্বন্দ্ব থাকলে ব্যাকট্র্যাক করি। সময় জটিলতা ও(এন!)।",
    enExplanation: `### Explanation
Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.
- **N-Queens Problem**: Place \$N\$ chess queens on an \$N 	imes N\$ chessboard such that no two queens attack each other (no two share same row, column, or diagonal).
- **Backtracking Steps**:
  1. Start in the first row.
  2. For each column in the current row:
     - Check if placing a queen here is safe (verify column, positive diagonal, and negative diagonal).
     - If safe, mark columns/diagonals as blocked, place queen, and recursively move to the next row.
     - If the recursive call returns a solution, propagate it.
     - If it fails (dead end), **backtrack**: remove the queen, unblock columns/diagonals, and try the next column.
- **Complexity**:
  - **Time**: \$O(N!)\$ - search space size reduces factorial-wise.
  - **Space**: \$O(N)\$ to store board state and recursive stack.

### Real-World Example
Crossword puzzles. You write letters in pencil. If you realize a word does not fit because of a conflict further down, you erase (backtrack) the incorrect letters and try a different word.

### Best Practice
Instead of scanning the board to check if a position is safe (which takes \$O(N)\$ time), maintain three boolean sets: \`cols\`, \`diag1\` (where row + col is constant), and \`diag2\` (where row - col is constant) to check safety in \$O(1)\$ time.

### Common Mistakes
Forgetting to undo the state modifications (backtracking step) when a recursive branch fails, which corrupts the board state for subsequent loop searches.

### N-Queens Chessboard View
\`\`\`
Board Representation (Q = Queen):
  .  Q  .  .
  .  .  .  Q
  Q  .  .  .
  .  .  Q  .
  No two queens attack each other.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্যাকট্র্যাকিং (Backtracking) হলো একটি রিকার্সিভ সার্চ অ্যালগরিদম যা ধাপে ধাপে প্রবলেমের সমাধানের দিকে এগোয়। কোনো এক ধাপে গিয়ে যদি দেখা যায় এই পথে গেলে সঠিক সমাধান পাওয়া সম্ভব নয়, তবে অ্যালগরিদমটি তার আগের ধাপে ফিরে আসে (রোলব্যাক করে) এবং অন্য আরেকটি পথ ট্রাই করে।
- **N-Queens সমস্যা**: একটি \$N 	imes N\$ দাবা বোর্ডে এমনভাবে \$N\$-সংখ্যক কুইন বা মন্ত্রী বসাতে হবে যেন কেউ কাউকে আক্রমণ করতে না পারে (অর্থাৎ কেউ একই রো, কলাম বা ডায়াগোনাল কোণ শেয়ার করবে না)।
- **ব্যাকট্র্যাকিংয়ের ধাপসমূহ**:
  ১. প্রথম রো বা সারি থেকে শুরু করুন।
  ২. বর্তমান সারির প্রতিটি কলামের জন্য:
     - চেক করুন কুইনটি বসানো নিরাপদ কিনা (কলাম এবং কোণ চেক করুন)।
     - নিরাপদ হলে, কলাম/কোণ লক করে কুইনটি বসান এবং রিকার্সিভলি পরবর্তী সারিতে চলে যান।
     - যদি পরবর্তী সারির রিকার্সন সফল হয়, তবে সমাধান রিটার্ন করুন।
     - যদি পথ বন্ধ হয়ে যায় (Dead End), তবে **ব্যাকট্র্যাক বা রোলব্যাক** করুন: কুইনটি বোর্ড থেকে তুলে নিন, কলাম/কোণ আনলক করুন এবং লুপের পরবর্তী কলাম ট্রাই করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N!)\$ - কুইন বসানোর সম্ভাব্য কম্বিনেশন ফ্যাক্টোরিয়াল হারে হ্রাস পাওয়ার কারণে।
  - **স্পেস**: \$O(N)\$ - বোর্ডের অবস্থা এবং রিকার্সন কল স্ট্যাকের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
পেন্সিল দিয়ে শব্দছক (Crossword) মেলানো। আপনি একটি শব্দ মেলাতে পেন্সিল দিয়ে লিখলেন। একটু সামনে এগিয়ে যাওয়ার পর যদি দেখেন অন্য ঘরের শব্দ মিলছে না, তবে আপনি পেন্সিল দিয়ে লেখা আগের শব্দটি মুছে (ব্যাকট্র্যাক) দিয়ে নতুন শব্দ লেখার চেষ্টা করেন।

### উত্তম অনুশীলন
বোর্ডে কুইন সেফ কিনা তা চেক করতে পুরো বোর্ড স্ক্যান (\$O(N)\$) না করে ৩টি সেট মেইনটেইন করুন: \`cols\`, \`diag1\` (\`row + col\` ধ্রুবক) এবং \`diag2\` (\`row - col\` ধ্রুবক)। এটি সেফটি চেককে ও(১)-এ নামিয়ে আনে।

### সাধারণ ভুল
রিকার্সন ফেইল করার পর বোর্ডের আগের অবস্থা ফিরিয়ে না আনা (ব্যাকট্র্যাক করতে ভুলে যাওয়া), যার ফলে বোর্ডের ডাটা নষ্ট হয়ে যায় এবং পরবর্তী লুপ সার্চ ভুল উত্তর দেয়।`
  }
];
