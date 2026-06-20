import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: "dsa-16",
    title: "Explain Binary Tree Traversals: In-order, Pre-order, and Post-order.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Trees","Binary Tree","Traversals"],
    enAnswer: "Binary Tree traversals are depth-first algorithms. In-order visits (left, root, right), Pre-order visits (root, left, right), and Post-order visits (left, right, root). Time complexity is O(N) and space is O(H).",
    bnAnswer: "বাইনারি ট্রি ট্রাভার্সাল হলো ডেপথ-ফার্স্ট অ্যালগরিদম। In-order ঘুরে (বাম, রুট, ডান), Pre-order ঘুরে (রুট, বাম, ডান), এবং Post-order ঘুরে (বাম, ডান, রুট)। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(এইচ)।",
    enExplanation: `### Explanation
Traversing a tree means visiting every node exactly once. In depth-first search (DFS) traversals, the order is defined by when the root node is visited relative to its subtrees:
1. **In-order (Left, Root, Right)**: Recursively traverse the left subtree, visit the root, recursively traverse the right subtree. (For a BST, this yields nodes in sorted ascending order).
2. **Pre-order (Root, Left, Right)**: Visit the root first, then recursively traverse left and right subtrees. Useful for duplicating trees.
3. **Post-order (Left, Right, Root)**: Traverse left and right subtrees first, then visit the root. Useful for deleting/freeing tree memory.
- **Complexity**:
  - **Time**: \$O(N)\$ - each node is visited once.
  - **Space**: \$O(H)\$ - function call stack overhead, where \$H\$ is the height of the tree. In worst case (skewed tree), \$H = N\$.

### Real-World Example
Directory structure listings. To list the contents of a directory (Pre-order), you list the parent folder name first, and then list the contents. To delete a directory (Post-order), you must delete all contents first, and then delete the parent directory.

### Best Practice
For deep trees, recursion can trigger stack overflow. Implement iterative versions using an explicit Stack if stack memory limits are tight.

### Common Mistakes
Forgetting the base case in recursion (\`if (root === null) return;\`), which causes infinite recursion and StackOverflow crashes.

### Code Example (TypeScript)
\`\`\`typescript
class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val: number) { this.val = val; }
}

function inOrderTraversal(root: TreeNode | null, result: number[] = []): number[] {
  if (root === null) return result;
  inOrderTraversal(root.left, result);
  result.push(root.val);
  inOrderTraversal(root.right, result);
  return result;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ট্রি ট্রাভার্সাল মানে প্রতিটি নোড ঠিক একবার ভিজিট করা। ডেপথ-ফার্স্ট সার্চ (DFS) পদ্ধতিতে রুট নোডটি কখন ভিজিট হবে তার ওপর ভিত্তি করে ৩ ভাগে ভাগ করা যায়:
১. **In-order (বাম, রুট, ডান)**: বাম সাব-ট্রি ট্রাভার্স করুন, রুট নোড রিড করুন, তারপর ডান সাব-ট্রি ট্রাভার্স করুন। (BST-এর ক্ষেত্রে এটি ছোট থেকে বড় সর্টেড অর্ডার দেয়)।
২. **Pre-order (রুট, বাম, ডান)**: শুরুতে রুট নোড রিড করুন, এরপর বাম ও ডান সাব-ট্রি ট্রাভার্স করুন। ট্রি কপি করার জন্য এটি উপযোগী।
৩. **Post-order (বাম, ডান, রুট)**: আগে বাম ও ডান সাব-ট্রি ট্রাভার্স করুন এবং শেষে রুট নোড রিড করুন। ট্রি মেমোরি থেকে ডিলিট বা ফ্রি করতে এটি ব্যবহৃত হয়।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - প্রতিটি নোড একবার স্পর্শ করার জন্য।
  - **স্পেস**: \$O(H)\$ - কল স্ট্যাকের সাইজ, যেখানে \$H\$ হলো ট্রির উচ্চতা (Height)।

### বাস্তব-ভিত্তিক উদাহরণ
ডিরেক্টরি বা ফোল্ডারের ফাইল দেখা। কোনো ফোল্ডার প্রিন্ট করার জন্য (Pre-order) আগে মূল ফোল্ডারের নাম লিখতে হয়, তারপর ভেতরের ফাইলগুলো। কিন্তু ফোল্ডার ডিলিট করতে চাইলে (Post-order) আগে ভেতরের ফাইলগুলো মুছতে হবে, শেষে মূল ফোল্ডার।

### উত্তম অনুশীলন
অতিরিক্ত গভীর বা বড় ট্রির ক্ষেত্রে স্ট্যাক ওভারফ্লো এড়াতে রিকার্সনের বদলে কাস্টম স্ট্যাক অবজেক্ট ব্যবহার করে ইটারেটিভ (Iterative) উপায়ে ট্রাভার্সাল ডিজাইন করুন।

### সাধারণ ভুল
রিকার্সন শেষ করার শর্ত বা বেস কেস (\`if (root === null) return;\`) দিতে ভুলে যাওয়া, যা লুপ জ্যাম করে কল স্ট্যাক ক্র্যাশ করায়।`
  },
  {
    id: "dsa-17",
    title: "Define a Binary Search Tree (BST) and its operational complexities.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Trees","BST","Data Structures"],
    enAnswer: "A Binary Search Tree is a binary tree where for each node, left subtree values are smaller, and right subtree values are larger. Lookup, insert, and delete take average O(log N) time and worst-case O(N) time.",
    bnAnswer: "বাইনারি সার্চ ট্রি হলো এমন একটি বাইনারি ট্রি যার প্রতিটি নোডের বাম সাব-ট্রির মান ছোট এবং ডান সাব-ট্রির মান বড় হয়। এর খোঁজা, ইনসার্ট ও ডিলিট করতে গড়ে ও(লগ এন) এবং সবচেয়ে খারাপ ক্ষেত্রে ও(এন) সময় লাগে।",
    enExplanation: `### Explanation
A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:
- The left subtree of a node contains only nodes with keys lesser than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- The left and right subtree must each also be a binary search tree.
- **Complexities**:
  - **Average Case**:
    - **Lookup / Search**: \$O(log N)\$
    - **Insertion**: \$O(log N)\$
    - **Deletion**: \$O(log N)\$
  - **Worst Case (Skewed Tree)**:
    - \$O(N)\$ for all operations if the tree becomes unbalanced (like a linked list).

### Real-World Example
A digital sorting cabinet. When a new file arrives, you look at the middle folder. If the name is alphabetically smaller, you look left, otherwise right. This cuts searching time in half.

### Best Practice
To prevent \$O(N)\$ worst-case scenarios, use self-balancing binary search trees like **AVL Trees** or **Red-Black Trees**, which guarantee \$O(log N)\$ height by rotating nodes during inserts and deletes.

### Common Mistakes
Assuming a BST is always \$O(log N)\$. If you insert sorted elements (e.g., 1, 2, 3, 4, 5) into a standard BST, it turns into a straight line (skewed tree), causing search to degrade to linear \$O(N)\$ speed.

### BST Diagram
\`\`\`
        8
       / \\
      3   10
     / \\    \\
    1   6    14
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বাইনারি সার্চ ট্রি (BST) হলো নোড-ভিত্তিক একটি বিশেষ বাইনারি ট্রি ডাটা স্ট্রাকচার যার নিচের বৈশিষ্ট্যগুলো রয়েছে:
- যেকোনো নোডের বাম সাব-ট্রির সব উপাদানের মান ঐ নোডের চেয়ে ছোট হবে।
- যেকোনো নোডের ডান সাব-ট্রির সব উপাদানের মান ঐ নোডের চেয়ে বড় হবে।
- প্রতিটি সাব-ট্রিও নিজে এক একটি বাইনারি সার্চ ট্রি হবে।
- **জটিলতা (Complexities)**:
  - **গড় ক্ষেত্র (Average Case)**:
    - **সার্চ**: \$O(log N)\$
    - **ইনসার্ট**: \$O(log N)\$
    - **ডিলিট**: \$O(log N)\$
  - **সবচেয়ে খারাপ ক্ষেত্র (Worst Case - Skewed Tree)**:
    - \$O(N)\$ সব অপারেশনে, যদি ট্রিটি আন-ব্যালেন্সড বা এক লাইনে চলে যায় (যেমন লিঙ্কড লিস্ট)।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ডিজিটাল ফাইল ক্যাবিনেট। যখনই কোনো নতুন ফাইল আসে, আপনি মাঝখানের ফোল্ডারটি চেক করেন। ফাইলের নাম বর্ণানুসারে ছোট হলে বাম দিকে আর বড় হলে ডান দিকে খোঁজেন, যা সার্চ সময় অর্ধেক করে ফেলে।

### উত্তম অনুশীলন
সবচেয়ে খারাপ ক্ষেত্রে \$O(N)\$ ধীরগতি এড়াতে সেলফ-ব্যালেন্সিং বাইনারি সার্চ ট্রি ব্যবহার করুন, যেমন **AVL Tree** বা **Red-Black Tree**। এগুলো ইনসার্ট বা ডিলিটের সময় নোড রোটেট করে ও(লগ এন) হাইট বজায় রাখে।

### সাধারণ ভুল
মনে করা BST সবসময় \$O(log N)\$ ফাস্ট। আপনি যদি সর্টেড ডাটা (যেমন ১, ২, ৩, ৪) একটি সাধারণ BST-তে এক এক করে ইনসার্ট করেন, তবে এটি সোজা এক লাইনের গাছে পরিণত হয় এবং পারফরম্যান্স লিঙ্কড লিস্টের মতো স্লো হয়ে যায়।`
  },
  {
    id: "dsa-18",
    title: "Determine if a binary tree is a valid Binary Search Tree (BST).",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Trees","BST","Recursion","Algorithms"],
    enAnswer: "To validate a BST, recursively check if each node value falls within a valid range [min, max]. When moving left, update max = node.val; when moving right, update min = node.val. Time complexity is O(N) and space is O(H).",
    bnAnswer: "একটি বাইনারি ট্রি বৈধ BST কিনা তা নির্ধারণ করতে রিকার্সিভলি চেক করুন প্রতিটি নোডের মান নির্দিষ্ট সীমার [min, max] ভেতর আছে কিনা। বামে যাওয়ার সময় max = node.val এবং ডানে যাওয়ার সময় min = node.val আপডেট করুন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(এইচ)।",
    enExplanation: `### Explanation
A binary tree is a valid BST only if every node satisfies the BST property relative to all its ancestors, not just its immediate children.
- **Validation Algorithm (Recursive Bound check)**:
  1. Define a helper function \`validate(node, min, max)\`.
  2. If node is null, return true (base case).
  3. If node's value is not strictly greater than \`min\` and strictly less than \`max\`, return false.
  4. Recursively validate subtrees:
     - Left subtree: \`validate(node.left, min, node.val)\`.
     - Right subtree: \`validate(node.right, node.val, max)\`.
- **Complexity**:
  - **Time**: \$O(N)\$ - each node is checked once.
  - **Space**: \$O(H)\$ - recursion call stack height.

### Real-World Example
A corporate hierarchy validation. Every employee in Team A (left subtree) must report to a manager whose level is below the director, and no one can exceed their senior manager level bounds.

### Best Practice
Use null or infinity values for the initial boundary conditions (\`min = -Infinity\`, \`max = Infinity\`) to support node values that can be any valid 32-bit integer.

### Common Mistakes
Only checking if a node is larger than its left child and smaller than its right child (e.g. \`node.left.val < node.val < node.right.val\`). This fails if a node deeper in the left subtree is larger than the root node.

### Code Example (TypeScript)
\`\`\`typescript
function isValidBST(root: TreeNode | null): boolean {
  return validate(root, null, null);
}

function validate(node: TreeNode | null, min: number | null, max: number | null): boolean {
  if (node === null) return true;
  
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }
  
  return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি বাইনারি ট্রি শুধুমাত্র তখনই বৈধ BST হবে যখন প্রতিটি নোড তার প্যারেন্ট এবং পূর্ববর্তী সকল নোডের সীমার সাথে সামঞ্জস্যপূর্ণ হবে, শুধু ইমিডিয়েট চাইল্ডের সাথে চেক করাই যথেষ্ট নয়।
- **ভ্যালিডেশন অ্যালগরিদম (রিকার্সিভ বাউন্ডারি চেক)**:
  ১. একটি হেল্পার ফাংশন লিখুন: \`validate(node, min, max)\`।
  ২. নোড নাল হলে true রিটার্ন করুন (বেস কেস)।
  ৩. যদি নোডের মান সীমার বাইরে চলে যায় (যেমন, \`<= min\` অথবা \`>= max\`), তবে false রিটার্ন করুন।
  ৪. রিকার্সিভলি সাব-ট্রিগুলো চেক করুন:
     - বাম পাশের জন্য সর্বোচ্চ সীমা আপডেট করুন: \`validate(node.left, min, node.val)\`।
     - ডান পাশের জন্য সর্বনিম্ন সীমা আপডেট করুন: \`validate(node.right, node.val, max)\`।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - প্রতিটি নোড একবার চেক করার জন্য।
  - **স্পেস**: \$O(H)\$ - রিকার্সন কল স্ট্যাক ট্র্যাকিং মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কর্পোরেট পদমর্যাদার চেইন অফ কমান্ড চেক করার মতো। টিম ক (বাম সাব-ট্রি)-এর প্রতিটি কর্মীর ম্যানেজার র‍্যাংক অবশ্যই ডিরেক্টরের নিচে হতে হবে এবং কেউই তার সিনিয়র ম্যানেজারের উপরে যেতে পারবে না।

### উত্তম অনুশীলন
শুরুর বাউন্ডারি চেক হিসেবে \`min = null\` এবং \`max = null\` বা ইনফিনিটি ব্যবহার করুন যাতে সব ধরণের ইন্টিজার ভ্যালু রেঞ্জ কোডটি সাপোর্ট করতে পারে।

### সাধারণ ভুল
শুধুমাত্র নোড তার ঠিক নিচের চাইল্ডের চেয়ে বড় বা ছোট কিনা চেক করা (যেমন \`left < node < right\`)। এটি ভুল কারণ বাম সাব-ট্রির গভীরে থাকা কোনো উপাদান যদি রুটের চেয়েও বড় হয়ে বসে থাকে, তবে তা বেসিক চাইল্ড চেকে ধরা পড়বে না।`
  },
  {
    id: "dsa-19",
    title: "How do you perform Level Order Traversal (BFS) of a Binary Tree?",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Trees","BFS","Queue","Algorithms"],
    enAnswer: "Level Order Traversal visits nodes level-by-level using a Queue. We enqueue the root, then loop: dequeue a node, visit it, and enqueue its left and right children. Time complexity is O(N) and space is O(W) where W is max width.",
    bnAnswer: "লেভেল অর্ডার ট্রাভার্সাল একটি Queue ব্যবহার করে প্রতিটি লেভেল বা স্তর অনুযায়ী নোডগুলো ভিজিট করে। শুরুতে রুট কিউতে রেখে লুপের ভেতর নোড ডিকিউ করুন, রিড করুন এবং তার বাম ও ডান চাইল্ড কিউতে যোগ করুন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(ডাব্লিউ)।",
    enExplanation: `### Explanation
Level Order Traversal is a breadth-first search (BFS) algorithm for trees. It visits all nodes at level 0, then level 1, then level 2, and so on.
- **Queue-based Implementation**:
  1. Initialize an empty queue and insert the \`root\`.
  2. While the queue is not empty:
     - Get the number of nodes at the current level: \`levelSize = queue.length\`.
     - Loop \`levelSize\` times to process the current level:
       - Dequeue a node.
       - Add its value to the current level list.
       - Enqueue its left child (if not null).
       - Enqueue its right child (if not null).
- **Complexity**:
  - **Time**: \$O(N)\$ since we visit every node once.
  - **Space**: \$O(W)\$ where \$W\$ is the maximum width of the tree. In a balanced binary tree, the last level has \$N/2\$ nodes, making space complexity \$O(N)\$.

### Real-World Example
An organization chart where you send a newsletter first to the CEO (level 0), then to all VPs reporting directly to CEO (level 1), then to all managers reporting to VPs (level 2).

### Best Practice
Using the \`levelSize\` trick allows you to group node values level-by-level (e.g. \`[[8], [3, 10], [1, 6, 14]]\`), which is required for many tree-level algorithms.

### Common Mistakes
Forgetting to check if \`root\` is null before enqueuing, leading to runtime null pointer crashes on initialization.

### Code Example (TypeScript)
\`\`\`typescript
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (root === null) return result;
  
  const queue: TreeNode[] = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);
      
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লেভেল অর্ডার ট্রাভার্সাল (Level Order Traversal) হলো ট্রির ব্রেথ-ফার্স্ট সার্চ (BFS) অ্যালগরিদম। এটি প্রথমে লেভেল ০, তারপর লেভেল ১, এরপর লেভেল ২ এভাবে স্তর অনুযায়ী ট্রাভার্স করে।
- **কিউ-ভিত্তিক ইমপ্লিমেন্টেশন**:
  ১. একটি কিউ (Queue) ডিক্লেয়ার করুন এবং শুরুতে \`root\` পুশ করুন।
  ২. কিউ খালি না হওয়া পর্যন্ত লুপ চালান:
     - বর্তমান স্তরে কতটি নোড আছে তা বের করুন: \`levelSize = queue.length\`।
     - লুপ চালিয়ে স্তরের সব নোড প্রসেস করুন:
       - কিউ থেকে নোড ডিকিউ (shift) করুন।
       - নোডের মান বর্তমান স্তরের লিস্টে অ্যাড করুন।
       - বাম নোড সচল থাকলে কিউতে রাখুন।
       - ডান নোড সচল থাকলে কিউতে রাখুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - প্রতিটি নোড একবার প্রসেস করার জন্য।
  - **স্পেস**: \$O(W)\$ - ট্রির সর্বোচ্চ প্রস্থ (Width)। একটি ব্যালেন্সড ট্রির শেষ স্তরে \$N/2\$ নোড থাকে, তাই স্পেস জটিলতা \$O(N)\$।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রতিষ্ঠানের চেইন অফ কমান্ডের ইমেইল ব্রডকাস্ট। প্রথমে সিইও (CEO - লেভেল ০) মেইল পাবেন, এরপর তার অধীনে থাকা ডিরেক্টররা (লেভেল ১), এরপর ম্যানেজাররা (লেভেল ২)।

### উত্তম অনুশীলন
\`levelSize\` ভেরিয়েবল ট্র্যাক করার টেকনিকটি ব্যবহার করুন, যা ডাটাগুলোকে স্তরের গ্রুপ অনুযায়ী সাজাতে সাহায্য করে (যেমন: \`[[৮], [৩, ১০], [১, ৬, ১৪]]\`)।

### সাধারণ ভুল
কিউতে প্রথম উপাদান রাখার আগে রুট নোডটি নাল (\`null\`) কিনা তা চেক না করা, যার ফলে খালি ট্রির ক্ষেত্রে কোড ক্র্যাশ করে।`
  },
  {
    id: "dsa-20",
    title: "Explain Depth-First Search (DFS) on a Graph and its complexity.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Graphs","DFS","Recursion","Algorithms"],
    enAnswer: "Depth-First Search (DFS) is a graph traversal algorithm that explores as deep as possible along each branch before backtracking. It uses recursion or a Stack, tracking visited nodes in a Set. Time complexity is O(V + E) and space is O(V).",
    bnAnswer: "ডেপথ-ফার্স্ট সার্চ (DFS) একটি গ্রাফ ট্রাভার্সাল অ্যালগরিদম যা ব্যাকট্র্যাক করার আগে প্রতিটি শাখায় যথাসম্ভব গভীরে যায়। এটি রিকার্সন বা কাস্টম স্ট্যাক ব্যবহার করে এবং ভিজিটেড নোডগুলো সেটে ট্র্যাক রাখে। সময় জটিলতা ও(ভি + ই) এবং স্পেস জটিলতা ও(ভি)।",
    enExplanation: `### Explanation
DFS explores a graph by diving deep into adjacent nodes. To prevent infinite loops in cyclic graphs, we must maintain a \`visited\` set.
- **Algorithm (Recursive)**:
  1. Mark the current node as visited.
  2. For each unvisited neighbor of the current node, recursively call the DFS function.
- **Complexity**:
  - **Time**: \$O(V + E)\$ where \$V\$ is vertices/nodes and \$E\$ is edges. We visit every node once and scan all adjacency list edges.
  - **Space**: \$O(V)\$ auxiliary space for the recursion call stack (or explicit Stack) and the visited tracking set.

### Real-World Example
Solving a maze. You walk down a path until you hit a dead end, then backtrack to the last junction and try a different path.

### Best Practice
Always pass the \`visited\` set through the recursive call stack to ensure cycle protection. For large graphs, prefer iterative DFS using an explicit Stack to avoid call stack overflow.

### Common Mistakes
Not tracking visited nodes in a directed/undirected cyclic graph, which causes the program to enter an infinite recursion loop and crash with a Stack Overflow error.

### Code Example (TypeScript)
\`\`\`typescript
type Graph = { [key: number]: number[] };

function dfs(graph: Graph, start: number, visited = new Set<number>()): void {
  if (visited.has(start)) return;
  
  console.log(\`Visited Node: \${start}\`);
  visited.add(start);
  
  const neighbors = graph[start] || [];
  for (const neighbor of neighbors) {
    dfs(graph, neighbor, visited);
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
DFS একটি গ্রাফের এক দিক ধরে যথাসম্ভব শেষ নোড পর্যন্ত প্রবেশ করে। গ্রাফে লুপ বা সাইকেল থাকলে ইনফিনিট লুপ এড়াতে একটি \`visited\` সেট ব্যবহার করে ভিজিট করা নোড ট্র্যাক রাখতে হয়।
- **অ্যালগরিদম (রিকার্সিভ)**:
  ১. বর্তমান নোডটিকে ভিজিটেড নোড হিসেবে চিহ্নিত করুন।
  ২. বর্তমান নোডের প্রতিটি আন-ভিজিটেড (যা এখনো ভিজিট করা হয়নি) প্রতিবেশীর জন্য রিকার্সিভলি DFS ফাংশনটি আবার কল করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(V + E)\$ যেখানে \$V\$ হলো মোট নোড সংখ্যা এবং \$E\$ হলো মোট কানেকশন বা এজ সংখ্যা।
  - **স্পেস**: \$O(V)\$ - রিকার্সন কল স্ট্যাক এবং ভিজিটেড নোড লিস্টের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
একটি গোলকধাঁধা (Maze) সমাধান করা। আপনি সোজা একটি রাস্তা ধরে হাঁটতে থাকবেন যতক্ষণ না দেয়ালে ধাক্কা খাচ্ছেন, দেয়ালে আটকালে আপনি আগের টার্নিং পয়েন্টে ফেরত এসে অন্য রাস্তা ট্রাই করবেন।

### উত্তম অনুশীলন
রিকার্সন কলের প্যারামিটারে সর্বদা \`visited\` সেটটি পাস করুন যাতে সাইকেল প্রটেকশন থাকে। অনেক বড় গ্রাফের ক্ষেত্রে সিস্টেম স্ট্যাক বাঁচাতে কাস্টম স্ট্যাক ভেরিয়েবল ব্যবহার করুন।

### সাধারণ ভুল
ভিজিটেড নোড ট্র্যাক না করা, যার ফলে গ্রাফের লুপে পড়ে রিকার্সন অবিরত চলতে থাকে এবং অবশেষে Stack Overflow এরর দিয়ে ক্র্যাশ করে।`
  },
  {
    id: "dsa-21",
    title: "Explain Breadth-First Search (BFS) on a Graph and its complexity.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Graphs","BFS","Queue","Algorithms"],
    enAnswer: "Breadth-First Search (BFS) explores a graph level-by-level starting from a source node, visiting all direct neighbors before moving deeper. It uses a Queue and a visited Set. Time complexity is O(V + E) and space is O(V).",
    bnAnswer: "ব্রেথ-ফার্স্ট সার্চ (BFS) একটি সোর্স নোড থেকে শুরু করে স্তর অনুযায়ী গ্রাফ ট্রাভার্স করে, গভীরে যাওয়ার আগে সমস্ত সরাসরি প্রতিবেশীদের ভিজিট করে। এটি একটি Queue এবং visited Set ব্যবহার করে। সময় জটিলতা ও(ভি + ই) এবং স্পেস জটিলতা ও(ভি)।",
    enExplanation: `### Explanation
BFS explores the graph outwards from the source, level by level. It is guaranteed to find the **shortest path** in an unweighted graph.
- **Algorithm**:
  1. Initialize a queue with the source node and add it to the \`visited\` set.
  2. While the queue is not empty:
     - Dequeue node \`u\`.
     - For each unvisited neighbor \`v\` of \`u\`:
       - Mark \`v\` as visited.
       - Enqueue \`v\`.
- **Complexity**:
  - **Time**: \$O(V + E)\$ - each node is enqueued once, and we scan all edges in adjacency lists.
  - **Space**: \$O(V)\$ to store the queue and visited set.

### Real-World Example
Social Networks: Finding "friend recommendations". BFS checks your 1st-degree friends first, then your 2nd-degree friends (friends of friends), and so on.

### Best Practice
Mark nodes as visited *immediately* when enqueuing them, rather than waiting until they are dequeued. This prevents the same node from being added to the queue multiple times, which would waste memory.

### Common Mistakes
Forgetting that BFS is only suitable for shortest paths in **unweighted** graphs. For weighted graphs, Dijkstra's algorithm must be used.

### Code Example (TypeScript)
\`\`\`typescript
function bfs(graph: Graph, start: number): void {
  const queue: number[] = [start];
  const visited = new Set<number>([start]);
  
  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(\`Visited: \${node}\`);
    
    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
BFS সোর্স নোড থেকে শুরু করে ধাপে ধাপে স্তর অনুযায়ী বাইরের দিকে গ্রাফ ট্রাভার্স করে। এটি কোনো আন-ওয়েটেড (Unweighted) গ্রাফে **শর্টেস্ট পাথ (Shortest Path)** খুঁজে বের করার গ্যারান্টি দেয়।
- **ধাপসমূহ**:
  ১. একটি কিউ তৈরি করে সোর্স নোডটি রাখুন এবং নোডটি \`visited\` সেটে যোগ করুন।
  ২. কিউ খালি না হওয়া পর্যন্ত লুপ চালান:
     - কিউ থেকে নোড \`u\` বের বা ডিকিউ করুন।
     - নোড \`u\`-এর প্রতিটি আন-ভিজিটেড প্রতিবেশী \`v\`-এর জন্য:
       - নোড \`v\`-কে ভিজিটেড চিহ্নিত করুন।
       - নোড \`v\`-কে কিউতে পুশ করুন।
- **জতিলা (Complexity)**:
  - **সময়**: \$O(V + E)\$ - প্রতিটি নোড কিউতে সর্বোচ্চ একবার প্রসেস হয় এবং এজগুলো রিড হয়।
  - **স্পেস**: \$O(V)\$ - কিউ এবং সেটের ডাটা স্টোরেজের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
সোশ্যাল নেটওয়ার্ক (যেমন ফেসবুক)। ফ্রেন্ড সাজেশনে প্রথমে আপনার ১ম স্তরের বন্ধুদের চেক করা হয়, এরপর বন্ধুদের বন্ধুদের (২য় স্তর) চেক করা হয়।

### উত্তম অনুশীলন
নোড কিউতে পুশ করার *সাথে সাথেই* সেটিকে ভিজিটেড হিসেবে সেট করুন, কিউ থেকে বের করা পর্যন্ত ওয়েট করবেন না। এতে একই নোড বারবার কিউতে ঢোকা বন্ধ হয় এবং মেমোরি সাশ্রয় হয়।

### সাধারণ ভুল
মনে করা BFS সব ধরণের গ্রাফের শর্টেস্ট পাথ বের করতে পারে। ওয়েটেড (Weighted) গ্রাফের ক্ষেত্রে অবশ্যই Dijkstra-র অ্যালগরিদম ব্যবহার করতে হবে।`
  },
  {
    id: "dsa-22",
    title: "Find the maximum sum of a contiguous subarray of size K (Sliding Window).",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Arrays","Sliding Window","Algorithms"],
    enAnswer: "To find the max sum of a subarray of size K, use the Sliding Window pattern. Calculate the sum of the first K elements, then slide the window by adding the next element and subtracting the leftmost. Time complexity is O(N) and space is O(1).",
    bnAnswer: "K সাইজের সাব-অ্যারির সর্বোচ্চ যোগফল বের করতে Sliding Window প্যাটার্ন ব্যবহার করুন। প্রথমে প্রথম Kটি উপাদানের যোগফল বের করুন, এরপর উইন্ডোটি সামনে বাড়িয়ে নতুন উপাদান যোগ করুন এবং সর্ববামের উপাদান বিয়োগ করুন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
Given an array of integers and a number \`K\`, find the maximum sum of any contiguous subarray of size \`K\`.
- **Brute Force**: Compute the sum of all possible subarrays of size \`K\`. Nested loops take \$O(N * K)\$ time.
- **Sliding Window Approach**:
  1. Calculate the sum of the first \`K\` elements. Let this be \`windowSum\`.
  2. Set \`maxSum = windowSum\`.
  3. Loop from index \`i = K\` to \`N - 1\`:
     - Slide the window: \`windowSum = windowSum + arr[i] - arr[i - K]\` (add new right element, drop old left element).
     - Update \`maxSum = Math.max(maxSum, windowSum)\`.
  4. Return \`maxSum\`.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass through the array.
  - **Space**: \$O(1)\$ - only a few scalar variables.

### Real-World Example
Streaming data analytics. Calculating the highest volume of transactions during any continuous 24-hour window by simply sliding the time-slot and subtracting the hour that just expired.

### Best Practice
Sliding window is the ideal pattern when asked to compute metrics over contiguous subsegments of an array, saving duplicate summation overhead.

### Common Mistakes
Forgetting to handle cases where array length is less than \`K\`, which should be checked at the beginning of the function.

### Code Example (TypeScript)
\`\`\`typescript
function maxSubarraySum(arr: number[], k: number): number {
  if (arr.length < k) return 0;
  
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Slide window
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত একটি অ্যারে এবং সংখ্যা \`K\` থেকে যেকোনো সংলগ্ন K সাইজের সাব-অ্যারির সর্বোচ্চ যোগফল খুঁজে বের করতে হবে।
- **ব্রুট ফোর্স মেথড**: প্রতিটি K সাইজের সম্ভাব্য সাব-অ্যারির যোগফল আলাদাভাবে বের করা। নেস্টেড লুপের জন্য সময় জটিলতা: \$O(N * K)\$।
- **স্লাইডিং উইন্ডো মেথড**:
  ১. প্রথম Kটি উপাদানের যোগফল বের করুন। একে ধরুন \`windowSum\`।
  ২. ইনিশিয়াল ম্যাক্সিমাম সেট করুন: \`maxSum = windowSum\`।
  ৩. ইনডেক্স \`i = K\` থেকে \`N - 1\` পর্যন্ত লুপ চালান:
     - উইন্ডোটি ডানে বাড়ান: \`windowSum = windowSum + arr[i] - arr[i - K]\` (ডানের নতুন মান যোগ এবং বামের পুরাতন মান বিয়োগ)।
     - ম্যাক্সিমাম আপডেট করুন: \`maxSum = Math.max(maxSum, windowSum)\`।
  ৪. \`maxSum\` রিটার্ন করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - পুরো অ্যারে মাত্র একবার রিড করার কারণে।
  - **স্পেস**: \$O(1)\$ - অতিরিক্ত মেমোরি প্রয়োজন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ ট্রাফিক অ্যানালিটিক্স। যেকোনো ২৪ ঘণ্টার উইন্ডোতে সর্বোচ্চ কত ট্রাফিক এসেছে তা বের করতে প্রতি ঘণ্টায় নতুন আওয়ারের ট্রাফিক যোগ করা হয় এবং ২৪ ঘণ্টা আগের ১ম আওয়ারের ট্রাফিক বাদ দেওয়া হয়।

### উত্তম অনুশীলন
অ্যারির সংলগ্ন অংশ বা সাব-সেগমেন্টের হিসাব করার জন্য স্লাইডিং উইন্ডো হলো সেরা চয়েস, যা একই উপাদান বারবার যোগ করার ডুপ্লিকেট রান টাইম বাঁচায়।

### সাধারণ ভুল
অ্যারের মোট সাইজ যদি K-এর চেয়ে ছোট হয় সে ক্ষেত্রে হ্যান্ডেল না করা, যা শুরুতেই চেক করে ০ বা এরর রিটার্ন করা উচিত।`
  },
  {
    id: "dsa-23",
    title: "Solve the Container With Most Water problem using Two Pointers.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Arrays","Two Pointers","Algorithms"],
    enAnswer: "To find the max water container, place pointers at the start and end of the height array. Calculate the area based on the shorter boundary, update maxArea, and shift the pointer pointing to the shorter line inward. Time complexity is O(N) and space is O(1).",
    bnAnswer: "Container With Most Water প্রবলেম সলভ করতে অ্যারের শুরু ও শেষে দুটি পয়েন্টার রাখুন। ছোট বাউন্ডারির ওপর ভিত্তি করে ক্ষেত্রফল বা এরিয়া বের করুন, maxArea আপডেট করুন এবং ছোট লাইনের দিকের পয়েন্টারটি কেন্দ্রের দিকে সরান। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(১)।",
    enExplanation: `### Explanation
Given \$N\$ non-negative integers representing line heights, find two lines that together with the x-axis form a container, such that the container contains the most water.
- **Two-Pointer Strategy**:
  - The area is constrained by the shorter line: \`Area = min(height[left], height[right]) * (right - left)\`.
  - To maximize area, we start with the widest width: \`left = 0\`, \`right = height.length - 1\`.
  - In each step:
    - Compute the area and update \`maxArea\`.
    - To find a taller container, we must move the pointer pointing to the **shorter line** inward, because moving the taller line can never increase the height constraint.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass.
  - **Space**: \$O(1)\$ - auxiliary variables.

### Real-World Example
Finding the best wall dimensions to build a water tank. You start by placing the walls at the maximum distance. If one wall is short, moving the taller wall closer will only decrease the volume. So you must search for a taller wall to replace the shorter one.

### Best Practice
Using two pointers starting from ends is ideal for problems involving maximization of window area/volume, reducing brute-force \$O(N^2)\$ pairs search to linear \$O(N)\$ time.

### Common Mistakes
Moving the pointer pointing to the taller line, which always decreases the area because the width shrinks and the height constraint cannot improve.

### Code Example (TypeScript)
\`\`\`typescript
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxVal = 0;
  
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = minHeight * (right - left);
    maxVal = Math.max(maxVal, currentArea);
    
    // Move the pointer of the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxVal;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত লাইনের উচ্চতা নির্দেশক অ্যারে থেকে এমন দুটি লাইন নির্বাচন করতে হবে যা এক্স-অক্ষের সাথে মিলে সবচেয়ে বেশি পানি ধারণ করতে পারে।
- **টু-পয়েন্টার স্ট্র্যাটেজি**:
  - ধারণকৃত পানির ক্ষেত্রফল ছোট দেয়াল দ্বারা সীমাবদ্ধ: \`Area = min(height[left], height[right]) * (right - left)\`।
  - এরিয়া বড় করতে আমরা সবচেয়ে বড় উইডথ বা চওড়া দিয়ে শুরু করি: \`left = 0\` এবং \`right = height.length - 1\`।
  - প্রতিটি ধাপে:
    - এরিয়া হিসাব করে \`maxArea\` আপডেট করুন।
    - এরপর লম্বা দেয়াল খোঁজার জন্য যে পয়েন্টারটি **ছোট লাইন বা দেয়াল** নির্দেশ করছে সেটিকে কেন্দ্রের দিকে সরান, কারণ বড় দেয়াল সরালে ক্ষেত্রফল কখনো বাড়বে না।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - একবার চেক করার জন্য।
  - **স্পেস**: \$O(1)\$ - অতিরিক্ত মেমোরি প্রয়োজন হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পানির ট্যাংক তৈরির জন্য দুই পাশের দেয়াল নির্বাচন করা। আপনি শুরুতে দেয়াল দুটি সর্বোচ্চ দূরত্বে রাখলেন। এক পাশের দেয়াল নিচু হলে, উঁচু দেয়ালটি ভেতরের দিকে সরালে আয়তন কমবে ছাড়া বাড়বে না। তাই নিচু দেয়ালটি ভেঙে তার চেয়ে উঁচু দেয়াল খুঁজতে হবে।

### উত্তম অনুশীলন
অ্যারির দুই প্রান্ত থেকে পয়েন্টার শুরু করা ক্ষেত্রফল বা আয়তন ম্যাক্সিমাইজেশনের জন্য সেরা প্যাটার্ন, যা ব্রুট-ফোর্সের \$O(N^2)\$ সার্চ টাইম কমিয়ে ও(এন)-এ নামিয়ে আনে।

### সাধারণ ভুল
উঁচু দেয়ালের পয়েন্টারটি মুভ করা, যার ফলে ক্ষেত্রফল কমতে থাকে কারণ উইডথও কমে যায় এবং উচ্চতার সীমাবদ্ধতাও উন্নত হতে পারে না।`
  },
  {
    id: "dsa-24",
    title: "How does Quick Sort choose a pivot and partition an array?",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Sorting","Divide & Conquer","Algorithms"],
    enAnswer: "Quick Sort partitions an array by choosing a pivot element. It rearranges the array so that elements smaller than the pivot go left, and larger elements go right, then recursively sorts the sub-arrays. Average time is O(N log N), worst is O(N^2), space is O(log N).",
    bnAnswer: "কুইক সর্ট একটি পিভট (Pivot) উপাদান বেছে নিয়ে অ্যারে পার্টিশন করে। এটি অ্যারেকে এমনভাবে সাজায় যেন পিভটের চেয়ে ছোট উপাদান বামে এবং বড় উপাদান ডানে যায়, এরপর রিকার্সিভলি সাব-অ্যারে সর্ট করে। গড় সময় ও(এন লগ এন), সবচেয়ে খারাপ ক্ষেত্র ও(এন^২)।",
    enExplanation: `### Explanation
Quick Sort is a Divide and Conquer sorting algorithm:
1. **Choose Pivot**: Select an element from the array (e.g., first, last, median, or random).
2. **Partition**: Rearrange elements. Let pivot be \$P\$. All elements \$< P\$ are moved before it; all elements \$> P\$ are moved after it.
3. **Recurse**: Recursively apply Quick Sort to the left and right sub-arrays.
- **Complexity**:
  - **Time**: Average \$O(N log N)\$, Worst-case \$O(N^2)\$ (occurs when the pivot is consistently the smallest or largest element, e.g. sorting an already sorted array using first element as pivot).
  - **Space**: \$O(log N)\$ average recursive call stack size.

### Real-World Example
Sorting a library stack of books. You pick a random book (pivot). You put all books lighter than it on the left shelf and heavier on the right shelf. Then you repeat the process for both shelves.

### Best Practice
To avoid the \$O(N^2)\$ worst-case bottleneck, use **Randomized Quick Sort** (pick a random pivot) or the **Median-of-Three** pivot selection strategy.

### Common Mistakes
Implementing a non-in-place partition algorithm that allocates new arrays for smaller/larger elements, which wipes out Quick Sort's space-efficiency advantage (\$O(N)\$ space instead of \$O(1)\$ auxiliary space).

### Code Example (TypeScript)
\`\`\`typescript
function quickSort(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]; // Choosing last element as pivot
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot
  return i + 1;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কুইক সর্ট একটি Divide and Conquer সর্টিং অ্যালগরিদম যা নিচে বর্ণিত উপায়ে কাজ করে:
১. **Pivot সিলেকশন**: অ্যারে থেকে যেকোনো একটি পিভট নোড বেছে নেওয়া (যেমন প্রথম, শেষ বা র্যান্ডম উপাদান)।
২. **Partitioning**: উপাদানগুলো এমনভাবে রি-অ্যারেঞ্জ করুন যেন পিভট উপাদানের চেয়ে ছোট সব ডাটা বামে এবং বড় সব ডাটা ডানে চলে যায়।
৩. **রিকার্সন**: পিভটের বাম ও ডান পাশের সাব-অ্যারেতে পুনরায় কুইক সর্ট কল করা।
- **জটিলতা (Complexity)**:
  - **সময়**: গড়ে \$O(N log N)\$, সবচেয়ে খারাপ ক্ষেত্রে \$O(N^2)\$ (এটি ঘটে যখন পিভটটি সর্বদা সবচেয়ে বড় বা ছোট উপাদান হয়, যেমন সর্টেড অ্যারেতে প্রথম নোড পিভট করা)।
  - **স্পেস**: গড়ে \$O(log N)\$ রিকার্সন কল স্ট্যাকের জন্য মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
লাইব্রেরির বই ওজনের ক্রমানুসারে সাজানো। আপনি একটি র্যান্ডম বই সিলেক্ট করলেন (পিভট)। এর চেয়ে হালকা সব বই বাম পাশে আর ভারী বইগুলো ডান পাশে রাখলেন। এরপর দুই পাশের বইগুলোর জন্য আবার একই কাজ করলেন।

### উত্তম অনুশীলন
সবচেয়ে খারাপ ক্ষেত্রের \$O(N^2)\$ এড়াতে **র্যান্ডম পিভট** (Randomized Quick Sort) অথবা **Median-of-Three** (প্রথম, মাঝের ও শেষ উপাদানের মধ্যক) পিভট সিলেকশন মেথড ব্যবহার করুন।

### সাধারণ ভুল
পার্টিশন করার জন্য নতুন বা আলাদা অ্যারে মেমোরি ডিক্লেয়ার করা, যা কুইক সর্টের স্পেস-এফিশিয়েন্সি সুবিধা নষ্ট করে মেমোরি খরচ বাড়িয়ে দেয়।`
  },
  {
    id: "dsa-25",
    title: "Compare Recursion vs. Iteration and their memory footprints.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Recursion","Iteration","Basics"],
    enAnswer: "Recursion solves problems by calling the same function recursively, adding stack frames in memory (O(N) space). Iteration uses loops (for/while) and maintains constant memory (O(1) space). Recursion is cleaner but has higher memory footprint.",
    bnAnswer: "রিকার্সন একই ফাংশনকে বারবার কল করার মাধ্যমে প্রবলেম সলভ করে, যা মেমোরিতে নতুন স্ট্যাক ফ্রেম যোগ করে ও(এন) স্পেস নেয়। ইটারেশন লুপ (for/while) ব্যবহার করে ও(১) মেমোরি বজায় রাখে। রিকার্সন কোড ক্লিন করলেও মেমোরি বেশি খরচ করে।",
    enExplanation: `### Explanation
- **Recursion**:
  - A function calls itself.
  - State is saved in **Stack Frames** in the system call stack.
  - **Memory Footprint**: \$O(N)\$ space where \$N\$ is recursion depth.
  - **Pros**: Clean code, ideal for tree/graph traversals.
- **Iteration**:
  - Uses loops (\`for\`, \`while\`).
  - State is saved in local counter variables.
  - **Memory Footprint**: \$O(1)\$ space.
  - **Pros**: Low overhead, faster execution, zero stack overflow risk.

### Real-World Example
- **Recursion**: Russian Matryoshka dolls. Opening one doll reveals a smaller doll inside, until you find the smallest one (base case). You must keep all dolls open on the table (stack memory).
- **Iteration**: Walking up a staircase. You count your steps: 1, 2, 3... until you reach step 10, without needing any table space to hold previous steps.

### Best Practice
Use recursion when the problem has a natural recursive structure (e.g. tree traversals, backtracking) and the depth is guaranteed to be small. Use iteration for flat array operations or performance-critical loops.

### Common Mistakes
Forgetting the base case in recursion, which leads to infinite loops and crashes the application with a **Maximum Call Stack Size Exceeded** (Stack Overflow) error.

### Call Stack Comparison
\`\`\`
Recursion Call Stack:
[ func(3) ] -> [ func(2) ] -> [ func(1) ] (Consumes memory per call)

Iteration:
[ Loop Variable i = 3 ] (Same single memory slot updated)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
- **রিকার্সন (Recursion)**:
  - একটি ফাংশন নিজেকে নিজে কল করে।
  - প্রতিটি কলের অবস্থা বা ভ্যালু সিস্টেম কল স্ট্যাকে (Call Stack) নতুন ফ্রেম আকারে জমা হয়।
  - **মেমোরি খরচ**: \$O(N)\$ স্পেস জটিলতা, যেখানে \$N\$ হলো রিকার্সনের গভীরতা।
  - **সুবিধা**: কোড ক্লিন হয়, ট্রি/গ্রাফের ক্ষেত্রে বেস্ট চয়েস।
- **ইটারেশন (Iteration)**:
  - লুপ (\`for\`, \`while\`) ব্যবহার করা হয়।
  - ডাটা লোকাল ভেরিয়েবলে আপডেট হতে থাকে।
  - **মেমোরি খরচ**: \$O(1)\$ কনস্ট্যান্ট স্পেস জটিলতা।
  - **সুবিধা**: মেমোরি খরচ কম, দ্রুত রান করে, স্ট্যাক ওভারফ্লো এরর হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
- **রিকার্সন**: রাশিয়ান কাঠের পুতুল (Matryoshka)। একটি পুতুল খুললে আরেকটি ছোট পুতুল বের হয়, এভাবে সর্বশেষ ছোট পুতুল (বেস কেস) না পাওয়া পর্যন্ত চলতে থাকে। এ সময় টেবিলের ওপর সবকটি খোলা পুতুলের খোলস (মেমোরি) রাখতে হয়।
- **ইটারেশন**: সিঁড়ি বেয়ে ওপরে ওঠা। আপনি প্রতিটি ধাপ গুনছেন: ১, ২, ৩... ১০ এ পৌঁছালে শেষ। আগের ধাপগুলোর রেকর্ড মেমোরিতে ধরে রাখার প্রয়োজন নেই।

### উত্তম অনুশীলন
ট্রি ট্রাভার্সাল বা ব্যাকট্র্যাকিংয়ের মতো জটিল স্ট্রাকচারে রিকার্সন ব্যবহার করুন যেখানে ডেপথ বা গভীরতা বেশি হওয়ার চান্স নেই। সাধারণ লুপ বা পারফরম্যান্স-ক্রিটিক্যাল কাজের জন্য ইটারেশন ব্যবহার করুন।

### সাধারণ ভুল
রিকার্সনের বেস কেস সেট না করা, যার ফলে কোড অসীম সময় কল হতে হতে ব্রাউজার বা নোড জেএস প্রসেসকে **Maximum Call Stack Size Exceeded** এরর দিয়ে ক্র্যাশ করায়।`
  },
  {
    id: "dsa-26",
    title: "Explain recursion with memoization using Fibonacci numbers.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Recursion","Memoization","Dynamic Programming"],
    enAnswer: "Normal recursion for Fibonacci takes O(2^N) time due to overlapping subproblems. Memoization caches the results of function calls in a hash map or array, reducing the time complexity to O(N) and space to O(N).",
    bnAnswer: "ফিবোনাচির সাধারণ রিকার্সনে ওভারল্যাপিং সাব-প্রবলেমের কারণে ও(২^এন) সময় লাগে। মেমোইজেশন মেথড ফাংশন কলের রেজাল্টগুলো একটি হ্যাশ ম্যাপ বা অ্যারেতে ক্যাশ করে রাখে, যা সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(এন)-এ নামিয়ে আনে।",
    enExplanation: `### Explanation
Calculating Fibonacci \$F(N) = F(N-1) + F(N-2)\$ recursively creates a tree of overlapping calls. E.g., to compute \$F(5)\$, \$F(3)\$ is computed twice.
- **Without Memoization**:
  - Time complexity: \$O(2^N)\$ - exponential growth of duplicate computations.
- **With Memoization (Top-down DP)**:
  1. Create a memoization array or map to cache results: \`memo = {}\`.
  2. Before computing \`fib(n)\`, check if \`memo[n]\` exists. If yes, return it immediately.
  3. If no, compute \`memo[n] = fib(n - 1) + fib(n - 2)\` and return it.
- **Complexity**:
  - **Time**: \$O(N)\$ - each fibonacci number is calculated once.
  - **Space**: \$O(N)\$ for memo cache array and recursion call stack.

### Real-World Example
Calculating tax rates. Instead of running a complex formula containing millions of multiplication steps for every client invoice, you calculate it once for each category and check the lookup table future times.

### Best Practice
Memoization is highly effective for problems with overlapping subproblems. Use an array for memoization if the keys are contiguous integers. Use a map if the keys are scattered or strings.

### Common Mistakes
Forgetting to pass the memo cache object through the recursive call parameters or forgetting to store the newly computed value back in the memo table.

### Code Example (TypeScript)
\`\`\`typescript
function fibonacci(n: number, memo: { [key: number]: number } = {}): number {
  if (n <= 1) return n;
  
  // Check cache
  if (memo[n] !== undefined) {
    return memo[n];
  }
  
  // Compute and store in cache
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিকার্সন দিয়ে ফিবোনাচি \$F(N) = F(N-1) + F(N-2)\$ হিসাব করলে একই ফাংশন বারবার ডুপ্লিকেট কল হতে থাকে। যেমন \$F(5)\$ বের করতে \$F(3)\$ দুইবার হিসাব করতে হয়।
- **মেমোইজেশন ছাড়া**:
  - সময় জটিলতা: \$O(2^N)\$ - যা অত্যন্ত ধীরগতির।
- **মেমোইজেশন সহ (Top-down DP)**:
  ১. একটি মেমো অ্যারে বা অবজেক্ট তৈরি করুন ক্যাশ হিসেবে: \`memo = {}\`।
  ২. \`fib(n)\` হিসাব করার আগে চেক করুন \`memo[n]\`-এ মান সেভ আছে কিনা। থাকলে সাথে সাথে রিটার্ন করুন।
  ৩. না থাকলে মানটি হিসাব করে ক্যাশে সেভ করে দিন: \`memo[n] = fib(n - 1) + fib(n - 2)\`।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - প্রতিটি নম্বর মাত্র একবার হিসাব হওয়ার কারণে।
  - **স্পেস**: \$O(N)\$ - মেমো ক্যাশ টেবিল এবং রিকার্সন স্ট্যাক মেমোরির জন্য।

### বাস্তব-ভিত্তিক উদাহরণ
ট্যাক্স রেট হিসাব করা। প্রতিবার কোনো ইনভয়েসের জন্য জটিল ট্যাক্স ফর্মুলা নতুন করে ক্যালকুলেট না করে, আপনি ক্যাটাগরি অনুযায়ী ট্যাক্স আগে হিসাব করে একটি ডায়েরিতে (ক্যাশ) লিখে রাখেন এবং ওখান থেকে সরাসরি দেখে বসিয়ে দেন।

### উত্তম অনুশীলন
সাব-প্রবলেম যখন বারবার ফিরে আসে (Overlapping Subproblems), তখন মেমোইজেশন ব্যবহার করুন। কি (Key) যদি সংখ্যা হয় তবে ফাস্ট অ্যাক্সেসের জন্য ক্যাশ হিসেবে অ্যারে ব্যবহার করুন।

### সাধারণ ভুল
রিকার্সিভ প্যারামিটারে ক্যাশ বা মেমো অবজেক্টটি পাস করতে ভুলে যাওয়া অথবা নতুন হিসাব করা মানটি ক্যাশ টেবিলে সেভ না করে সরাসরি রিটার্ন করা।`
  },
  {
    id: "dsa-27",
    title: "Find the total number of continuous subarrays whose sum equals K.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Arrays","Hash Map","Prefix Sum","Algorithms"],
    enAnswer: "To find the total number of continuous subarrays whose sum equals K, use the Prefix Sum pattern with a Hash Map. Keep track of cumulative sums and check if (cumulativeSum - K) exists in map. Time complexity is O(N) and space is O(N).",
    bnAnswer: "K-এর সমান যোগফলের মোট কন্টিনিউয়াস সাব-অ্যারির সংখ্যা বের করতে Prefix Sum এবং Hash Map প্যাটার্ন ব্যবহার করুন। কিউমুলেটিভ যোগফল ট্র্যাকে রাখুন এবং চেক করুন (cumulativeSum - K) ম্যাপে আছে কিনা। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(এন)।",
    enExplanation: `### Explanation
Given an array of integers \`nums\` and an integer \`k\`, return the total number of continuous subarrays whose sum equals to \`k\`.
- **Why Sliding Window fails**: The array can contain negative numbers, so expanding/shrinking the window is not monotonic. We must use **Prefix Sum**.
- **Prefix Sum + Hash Map Algorithm**:
  1. Maintain a cumulative sum \`currSum\`.
  2. Maintain a hash map storing \`prefixSum: frequency\`. Initialize it with \`{0: 1}\` (to handle cases where subarray starts from index 0).
  3. Traverse array:
     - Add \`nums[i]\` to \`currSum\`.
     - If \`currSum - k\` exists in map, add its frequency to the count.
     - Increment the frequency of \`currSum\` in the map.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass.
  - **Space**: \$O(N)\$ - hash map storage.

### Real-World Example
An account ledger audit. You want to find how many times a set of transactions sum up to exactly \$100. By keeping a running total, if the running total is \$350 and you had a running total of \$250 earlier, it means the transactions in between sum up to \$100.

### Best Practice
Initialize the prefix sum map with \`{0: 1}\`. Otherwise, you will miss subarrays that sum to \`k\` starting from index 0.

### Common Mistakes
Using a sliding window when negative numbers are present. Sliding window only works when all elements are non-negative because adding elements monotonically increases the sum.

### Code Example (TypeScript)
\`\`\`typescript
function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1); // Base case
  
  let currSum = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const diff = currSum - k;
    
    if (map.has(diff)) {
      count += map.get(diff)!;
    }
    
    map.set(currSum, (map.get(currSum) || 0) + 1);
  }
  return count;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত একটি অ্যারে \`nums\` এবং পূর্ণসংখ্যা \`k\` থেকে এমন কতগুলো সংলগ্ন সাব-অ্যারে আছে যাদের উপাদানগুলোর যোগফল \`k\`-এর সমান তা বের করতে হবে।
- **স্লাইডিং উইন্ডো কেন ব্যর্থ হয়**: অ্যারেতে নেগেটিভ বা ঋণাত্মক সংখ্যা থাকতে পারে, তাই উইন্ডো বাড়ানো বা কমানোর সাথে যোগফল ক্রমানুসারে বাড়ে বা কমে না। তাই আমাদের **Prefix Sum** ব্যবহার করতে হবে।
- **Prefix Sum + Hash Map অ্যালগরিদম**:
  ১. একটি রানিং যোগফল \`currSum\` মেইনটেইন করুন।
  ২. একটি হ্যাশ ম্যাপে \`prefixSum: frequency\` (যোগফল কতবার এসেছে) স্টোর করুন। ম্যাপটি শুরুতে \`{0: 1}\` দিয়ে সেট করুন (ইনডেক্স ০ থেকে যোগফল শুরু হওয়া কভার করতে)।
  ৩. অ্যারেতে লুপ চালান:
     - বর্তমান মান \`nums[i]\` রানিং যোগফল \`currSum\`-এ যোগ করুন।
     - যদি \`currSum - k\` ম্যাপে থাকে, তবে ম্যাপে থাকা ফ্রিকোয়েন্সির মান কাউন্টারে যোগ করুন।
     - ম্যাপে বর্তমান \`currSum\`-এর ফ্রিকোয়েন্সি ১ বাড়িয়ে দিন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - একবার অ্যারে ঘোরার কারণে।
  - **স্পেস**: \$O(N)\$ - ম্যাপে ডাটা রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাকাউন্টের হিসাব মেলানো। আপনি দেখতে চান কতবার পরপর কয়েকটি ট্রানজেকশনের যোগফল ঠিক ১০০ টাকা হয়েছে। রানিং ব্যালেন্স হিসাব করার সময় যদি বর্তমান ব্যালেন্স ৩৫০ টাকা হয় এবং আগে কখনো ব্যালেন্স ২৫০ টাকা থেকে থাকে, তার মানে মাঝের ট্রানজেকশনগুলোর যোগফল ১০০ টাকা ছিল।

### উত্তম অনুশীলন
ম্যাপের শুরুতে সর্বদা \`{0: 1}\` সেট করুন। তা না হলে নোড ০ থেকে শুরু হওয়া সাব-অ্যারির যোগফল মিস হয়ে যাবে।

### সাধারণ ভুল
ঋণাত্মক সংখ্যা থাকা সত্ত্বেও স্লাইডিং উইন্ডো চালানোর চেষ্টা করা। স্লাইডিং উইন্ডো শুধুমাত্র তখনই কাজ করে যখন সব উপাদান ধনাত্মক হয়।`
  },
  {
    id: "dsa-28",
    title: "Find the top K frequent elements using a Min-Heap.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Heap","Hash Map","Priority Queue","Algorithms"],
    enAnswer: "To find the top K frequent elements, count element frequencies in a Hash Map, then insert elements into a Min-Heap of size K based on frequency. If heap size exceeds K, pop the minimum. Time complexity is O(N log K) and space is O(N).",
    bnAnswer: "শীর্ষ K-সংখ্যক ঘন ঘন ব্যবহৃত উপাদান খুঁজে বের করতে, প্রথমে একটি হ্যাশ ম্যাপে ফ্রিকোয়েন্সি কাউন্ট করুন। এরপর ফ্রিকোয়েন্সির ওপর ভিত্তি করে উপাদানগুলো K সাইজের একটি Min-Heap-এ ইনসার্ট করুন। সাইজ K অতিক্রম করলে ন্যূনতম উপাদানটি পপ করুন। সময় জটিলতা ও(এন লগ কে)।",
    enExplanation: `### Explanation
Given an integer array \`nums\` and an integer \`k\`, return the \`k\` most frequent elements.
- **Algorithm**:
  1. Count the frequency of each element using a Hash Map: \`Map<value, frequency>\`.
  2. Create a Min-Heap (Priority Queue) sorted by frequency.
  3. Iterate through map entries:
     - Push the element onto the Min-Heap.
     - If the Heap size exceeds \`k\`, remove/pop the top element (which is the element with the lowest frequency currently in the heap).
  4. The elements remaining in the Heap are the top \`k\` frequent elements.
- **Complexity**:
  - **Time**: \$O(N log k)\$ where \$N\$ is unique elements. Maintaining a heap of size \$k\$ takes \$log k\$ per insert. (Faster than sorting the map which takes \$O(N log N)\$).
  - **Space**: \$O(N)\$ to store frequencies in map.

### Real-World Example
An e-commerce store wants to display the "Top 3 Best Selling Products" in real-time. We count sales counts, and keep a small bucket of size 3, dropping the lowest seller whenever a new product exceeds its sales.

### Best Practice
Using a Min-Heap of size \`k\` is more memory-optimal and time-efficient than using a Max-Heap of size \`N\`, because maintaining a heap of size \$k\$ keeps heap operations bounded to \$O(log k)\$.

### Common Mistakes
Using a Max-Heap and pushing all elements, which takes \$O(N log N)\$ time. While it yields correct results, it is less efficient than the bounded Min-Heap approach.

### Code Example (TypeScript)
\`\`\`typescript
// Assumes a PriorityQueue implementation is available
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  // Using a custom MinHeap sorted by value's frequency
  const minHeap = new MinHeap<[number, number]>((a, b) => a[1] - b[1]); // [val, freq]
  
  for (const entry of map.entries()) {
    minHeap.push(entry);
    if (minHeap.size() > k) {
      minHeap.pop(); // Remove the element with lowest frequency
    }
  }
  
  return minHeap.toArray().map(entry => entry[0]);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একটি ইন্টিজার অ্যারে থেকে সবচেয়ে বেশিবার পুনরাবৃত্তি হওয়া K-সংখ্যক উপাদান খুঁজে বের করতে হবে।
- **ধাপসমূহ**:
  ১. একটি হ্যাশ ম্যাপ ব্যবহার করে প্রতিটি উপাদানের ফ্রিকোয়েন্সি বা কাউন্ট বের করুন: \`Map<value, frequency>\`।
  ২. ফ্রিকোয়েন্সি সর্টিংয়ের ওপর ভিত্তি করে একটি Min-Heap (Priority Queue) তৈরি করুন।
  ৩. ম্যাপের প্রতিটি এন্ট্রির ওপর লুপ চালান:
     - উপাদানটি Min-Heap-এ পুশ করুন।
     - যদি হিপের সাইজ K অতিক্রম করে, তবে হিপের টপ উপাদানটি (যার ফ্রিকোয়েন্সি সবচেয়ে কম) পপ বা রিমুভ করে দিন।
  ৪. শেষ পর্যন্ত হিপে অবশিষ্ট থাকা উপাদানগুলোই হবে শীর্ষ K-সংখ্যক ফ্রিকোয়েন্ট উপাদান।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N log k)\$ - নোড পুশ ও রিমুভ করার জন্য হিপের সাইজ K সীমাবদ্ধ থাকায়। এটি সম্পূর্ণ ম্যাপ সর্ট করার (\$O(N log N)\$) চেয়ে ফাস্ট।
  - **স্পেস**: \$O(N)\$ - ম্যাপে ফ্রিকোয়েন্সি কাউন্ট সেভ রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স সাইটের "টপ ৩টি সেরা বিক্রিত প্রোডাক্ট" রিয়েল-টাইমে বের করা। সব প্রোডাক্টের সেলস ট্র্যাক করার সময় একটি ৩ সাইজের ঝুড়ি মেইনটেইন করা হয়, যেখানে নতুন কোনো প্রোডাক্ট বেশি সেল হলে ঝুড়ির সবচেয়ে কম বিক্রিত প্রোডাক্টটি সরিয়ে ফেলা হয়।

### উত্তম অনুশীলন
সাইজ K-এর Min-Heap ব্যবহার করা সম্পূর্ণ অ্যারের Max-Heap ব্যবহারের চেয়ে অনেক বেশি সাশ্রয়ী ও দ্রুতগতির, কারণ হিপের সাইজ K-তে সীমাবদ্ধ থাকায় এর অপারেশন লেটেন্সি কম থাকে।

### সাধারণ ভুল
Max-Heap ব্যবহার করে সব উপাদান পুশ করা, যা সর্টিংয়ের মতোই ধীরগতির (\$O(N log N)\$) হয়ে যায়।`
  },
  {
    id: "dsa-29",
    title: "Explain Min-Heap and Max-Heap structures and their complexities.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Heap","Data Structures","Basics"],
    enAnswer: "A Heap is a complete binary tree. In a Min-Heap, the root is the minimum element, and parent nodes are smaller than child nodes. In a Max-Heap, the root is the maximum. Insertion and deletion take O(log N), search takes O(N), and peek takes O(1).",
    bnAnswer: "হিপ একটি কমপ্লিট বাইনারি ট্রি। Min-Heap-এ রুট নোডটি হলো ন্যূনতম উপাদান এবং প্যারেন্ট নোড চাইল্ড নোডের চেয়ে ছোট হয়। Max-Heap-এ রুট নোডটি সর্বোচ্চ উপাদান। ইনসার্ট ও ডিলিট করতে ও(লগ এন), সার্চে ও(এন), এবং পিকে ও(১) সময় লাগে।",
    enExplanation: `### Explanation
A Heap is a specialized tree-based data structure that satisfies the **heap property**:
- **Min-Heap**: The value of each parent node is less than or equal to the values of its children. The root holds the minimum key.
- **Max-Heap**: The value of each parent node is greater than or equal to the values of its children. The root holds the maximum key.
- **Structure**: A Heap is a **complete binary tree** (all levels are completely filled except possibly the last level, filled from left to right). Because of this, it is highly optimized to be stored inside a flat array:
  - Parent index of node at index \`i\`: \`Math.floor((i - 1) / 2)\`.
  - Left child: \`2 * i + 1\`.
  - Right child: \`2 * i + 2\`.
- **Complexities**:
  - **Peek (Min/Max)**: \$O(1)\$
  - **Insert**: \$O(log N)\$ (requires pushing element to the end and bubbling up/heapifying up).
  - **Delete Min/Max**: \$O(log N)\$ (swaps root with last element, deletes last element, and bubbles down/heapifies down).
  - **Search**: \$O(N)\$ (requires linear scan since it is not fully sorted left-to-right).

### Real-World Example
An emergency room triage. Patients are assigned priority levels. The patient with the highest medical priority (Max-Heap root) is treated first, regardless of when they arrived.

### Best Practice
Represent heaps using arrays rather than tree node objects. Array representation avoids pointer overhead and matches CPU cache locality beautifully.

### Common Mistakes
Confusing a Heap with a Binary Search Tree (BST). Heaps do not maintain left-to-right sorting constraints; they only guarantee parent-child vertical constraints.

### Heap Array Representation
\`\`\`
Tree View:
      10
     /  \\
    15   30
   /  \\
  40  50

Array View: [ 10 | 15 | 30 | 40 | 50 ]
Index:         0    1    2    3    4
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
হিপ (Heap) হলো একটি বিশেষ গাছ বা ট্রি-ভিত্তিক ডাটা স্ট্রাকচার যা **হিপ প্রপার্টি** মেনে চলে:
- **Min-Heap**: প্রতিটি প্যারেন্ট নোডের মান তার চাইল্ড নোডের মানের চেয়ে ছোট বা সমান হয়। রুটে থাকে সবচেয়ে ছোট মান।
- **Max-Heap**: প্রতিটি প্যারেন্ট নোডের মান তার চাইল্ড নোডের মানের চেয়ে বড় বা সমান হয়। রুটে থাকে সবচেয়ে বড় মান।
- **গঠন**: হিপ একটি **কমপ্লিট বাইনারি ট্রি** (শেষ লেভেল ছাড়া বাকি সব লেভেল পরিপূর্ণ থাকে এবং বাম থেকে ডানে ফিলাপ হয়)। এ জন্য একে মেমোরি সাশ্রয় করতে সরাসরি ফ্ল্যাট অ্যারে দিয়ে প্রকাশ করা যায়:
  - ইনডেক্স \`i\`-এর প্যারেন্ট ইনডেক্স: \`Math.floor((i - 1) / 2)\`।
  - বাম চাইল্ড ইনডেক্স: \`2 * i + 1\`।
  - ডান চাইল্ড ইনডেক্স: \`2 * i + 2\`।
- **জটিলতা (Complexities)**:
  - **টপ উপাদান দেখা (Peek)**: \$O(1)\$
  - **ইনসার্ট**: \$O(log N)\$ (উপাদান শেষে যোগ করে ওপরে বাবল-আপ বা heapify-up করতে হয়)।
  - **টপ উপাদান ডিলেট**: \$O(log N)\$ (রুট নোড শেষের উপাদানের সাথে সোয়াপ করে মুছে ফেলে নিচে বাবল-ডাউন বা heapify-down করতে হয়)।
  - **সার্চ**: \$O(N)\$ (কারণ এটি বাম থেকে ডানে সম্পূর্ণ সর্টেড থাকে না)।

### বাস্তব-ভিত্তিক উদাহরণ
হাসপাতালের ইমার্জেন্সি রুম। রোগীদের শারীরিক গুরুত্ব অনুযায়ী ক্যাটাগরি করা হয়। সবচেয়ে বেশি সংকটাপন্ন রোগীকে (Max-Heap root) সবার আগে ট্রিটমেন্ট দেওয়া হয়, সে কখন লাইনে দাঁড়িয়েছে তা বিবেচনা না করে।

### উত্তম অনুশীলন
হিপ তৈরি করতে অবজেক্ট ট্রি নোড ব্যবহার না করে ফ্ল্যাট অ্যারে ব্যবহার করুন। এটি পয়েন্টারের মেমোরি বাঁচায় এবং ক্যাশ লোকালিটি বৃদ্ধি করে।

### সাধারণ ভুল
হিপের সাথে বাইনারি সার্চ ট্রির (BST) গুলিয়ে ফেলা। হিপে বাম থেকে ডানে ছোট-বড় সর্টিং মেইনটেইন হয় না; এটি শুধুমাত্র প্যারেন্ট-চাইল্ড সম্পর্ক বজায় রাখে।`
  },
  {
    id: "dsa-30",
    title: "What is a Trie (Prefix Tree), and why is it used for autocomplete?",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Trie","Trees","Data Structures"],
    enAnswer: "A Trie is a tree-like data structure used to store strings. Each node represents a single character, and paths from root represent prefixes. Search and insert take O(L) where L is string length, making it ideal for autocomplete.",
    bnAnswer: "ট্রাই (Trie) হলো একটি গাছ বা ট্রি-র মতো ডাটা স্ট্রাকচার যা স্ট্রিং সংরক্ষণে ব্যবহৃত হয়। এর প্রতিটি নোড একটি একক অক্ষর রিপ্রেজেন্ট করে এবং রুট থেকে পাথগুলো প্রিফিক্স নির্দেশ করে। সার্চ ও ইনসার্টে ও(এল) সময় লাগে, যা অটো-কমপ্লিটের জন্য সেরা।",
    enExplanation: `### Explanation
A Trie (pronounced "try") or Prefix Tree is an ordered tree structure. Nodes do not store keys; instead, their position in the tree defines the key they are associated with.
- **Structure**:
  - The root is empty.
  - Each node has child references (e.g., an array of size 26 for English lowercase letters or a Map).
  - A boolean flag \`isEndOfWord\` marks if this node completes a valid word.
- **Why it is faster than Hash Map**:
  - Searching a word takes \$O(L)\$ where \$L\$ is word length, independent of the number of words stored in the Trie.
  - Unlike a Hash Map, a Trie handles prefix queries easily (e.g. "Find all words starting with 'cat'"), which is required for autocompleting search keys.
- **Complexities**:
  - **Insert**: \$O(L)\$
  - **Search Word**: \$O(L)\$
  - **Search Prefix**: \$O(L)\$

### Real-World Example
Google search bar autocomplete. As you type "sys", the system searches the prefix node "s -> y -> s" and quickly traverses down all child branches to suggest "system design", "system restore", etc.

### Best Practice
Use a Map/Dictionary for child nodes instead of a fixed array of size 26 if space is an issue, as fixed arrays leave many null pointers empty, consuming excessive memory for sparse trees.

### Common Mistakes
Forgetting to set the \`isEndOfWord = true\` flag when inserting a word, which causes the search function to report that the word does not exist in the Trie even if the character path is present.

### Trie Structure Diagram
\`\`\`
       (Root)
        /  \\
       c    d
      /      \\
     a        o
    /          \\
   t*           g*  (* indicates isEndOfWord = true)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ট্রাই (Trie) বা প্রিফিক্স ট্রি হলো একটি বিন্যস্ত ট্রি স্ট্রাকচার। নোডগুলো সরাসরি শব্দ স্টোর করে না; নোডের পজিশন বা পাথটি নির্দেশ করে সেটি কোন শব্দের অংশ।
- **গঠন**:
  - রুট নোডটি ফাঁকা থাকে।
  - প্রতিটি নোডের চাইল্ড রেফারেন্স থাকে (যেমন ইংরেজি ২৬টি অক্ষরের জন্য অ্যারে অথবা ম্যাপ)।
  - একটি বুলিয়ান ফ্ল্যাগ \`isEndOfWord\` নির্দেশ করে এখানে একটি বৈধ শব্দ শেষ হয়েছে কিনা।
- **হ্যাশ ম্যাপের চেয়ে কেন সেরা**:
  - শব্দ খোঁজার সময় জটিলতা \$O(L)\$ যেখানে \$L\$ শব্দটির দৈর্ঘ্য। এটি ট্রাইয়ের মোট শব্দের সংখ্যার ওপর নির্ভর করে না।
  - হ্যাশ ম্যাপে আংশিক বা প্রিফিক্স সার্চ করা যায় না। কিন্তু ট্রাইয়ের মাধ্যমে সহজেই প্রিফিক্স সার্চ করা যায় (যেমন "cat" দিয়ে শুরু হওয়া সব শব্দ), যা অটো-কমপ্লিটের জন্য আবশ্যক।
- **জটিলতা (Complexities)**:
  - **ইনসার্ট**: \$O(L)\$
  - **শব্দ সার্চ**: \$O(L)\$
  - **প্রিফিক্স সার্চ**: \$O(L)\$

### বাস্তব-ভিত্তিক উদাহরণ
গুগল সার্চ বার অটো-কমপ্লিট। আপনি যখন "sys" টাইপ করেন, সিস্টেম ট্রাইয়ের রুট থেকে "s -> y -> s" নোডে যায় এবং তার নিচে ঝুলে থাকা সব ব্রাঞ্চের শব্দগুলো (যেমন "system design", "system update") আপনাকে সাজেস্ট করে।

### উত্তম অনুশীলন
মেমোরি সেভ করতে প্রতিটি নোডে ২৬ সাইজের ফিক্সড অ্যারে ব্যবহার না করে হ্যাশ ম্যাপ ব্যবহার করুন। ফিক্সড অ্যারেতে অনেক নাল (null) পয়েন্টার থাকে যা মেমোরি অপচয় করে।

### সাধারণ ভুল
নতুন শব্দ ইনসার্ট করার পর শেষ নোডটিতে \`isEndOfWord = true\` সেট করতে ভুলে যাওয়া, যার ফলে পুরো পাথ থাকলেও সার্চ অ্যালগরিদম দেখাবে শব্দটি ডিরেক্টরিতে নেই।`
  },
  {
    id: "dsa-31",
    title: "Find the length of the longest substring without repeating characters.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Strings","Sliding Window","Hash Map","Algorithms"],
    enAnswer: "Use a dynamic Sliding Window with a Hash Map storing character indices. Move the right pointer to expand the window, and if a repeat character is found, shift the left pointer to the right of the previous occurrence. Time complexity is O(N) and space is O(min(M, N)).",
    bnAnswer: "ক্যারেক্টারের ইনডেক্স সেভ রেখে একটি ডাইনামিক স্লাইডিং উইন্ডো এবং হ্যাশ ম্যাপ ব্যবহার করুন। ডান পয়েন্টার বাড়িয়ে উইন্ডো বড় করুন এবং রিপিট ক্যারেক্টার পাওয়া গেলে বাম পয়েন্টারটিকে আগের ক্যারেক্টারের ডান পাশে শিফট করুন। সময় জটিলতা ও(এন) এবং স্পেস জটিলতা ও(মিন(এম, এন))।",
    enExplanation: `### Explanation
Given a string \`s\`, find the length of the longest substring without repeating characters.
- **Sliding Window Approach**:
  1. Maintain two pointers: \`left\` and \`right\` forming the window.
  2. Create a Map \`charMap\` to store \`character -> lastSeenIndex\`.
  3. Traverse with \`right\` pointer:
     - If the character \`s[right]\` is already in the map and its index is inside the current window (\`>= left\`), shrink the window by moving \`left = charMap.get(s[right]) + 1\`.
     - Update the map with the new index of \`s[right]\`.
     - Calculate length: \`maxLength = Math.max(maxLength, right - left + 1)\`.
- **Complexity**:
  - **Time**: \$O(N)\$ - single pass of the string with \$O(1)\$ map lookups.
  - **Space**: \$O(min(M, N))\$ where \$N\$ is string length and \$M\$ is alphabet size.

### Real-World Example
Text compression algorithms searching for unique byte sequences to create custom dictionaries and optimize file sizes.

### Best Practice
Always check if the cached index of the repeated character is greater than or equal to \`left\`. Otherwise, you might incorrectly move the \`left\` pointer backward to an old index outside the current window.

### Common Mistakes
Forgetting that a substring must be contiguous. Do not confuse it with subsequence, which doesn't need to be continuous.

### Code Example (TypeScript)
\`\`\`typescript
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let left = 0;
  const map = new Map<string, number>(); // char -> index
  
  for (let right = 0; i < s.length; right++) {
    const char = s[right];
    if (map.has(char) && map.get(char)! >= left) {
      left = map.get(char)! + 1; // Shrink window
    }
    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রদত্ত একটি স্ট্রিং থেকে এমন একটি সাব-স্ট্রিং বের করতে হবে যার দৈর্ঘ্য সবচেয়ে বড় এবং কোনো রিপিট বা পুনরাবৃত্ত ক্যারেক্টার নেই।
- **স্লাইডিং উইন্ডো মেথড**:
  ১. দুটি পয়েন্টার \`left\` এবং \`right\` দিয়ে একটি ডাইনামিক উইন্ডো তৈরি করুন।
  ২. একটি ম্যাপে \`character -> lastSeenIndex\` (ক্যারেক্টারের শেষ অবস্থান) স্টোর করুন।
  ৩. \`right\` পয়েন্টার দিয়ে স্ট্রিং স্ক্যান করুন:
     - যদি ক্যারেক্টারটি ম্যাপে থাকে এবং তার ইনডেক্স রানিং উইন্ডোর ভেতরে হয় (\`>= left\`), তবে বাম পয়েন্টার সরিয়ে নিন: \`left = map.get(char) + 1\`।
     - ম্যাপে ক্যারেক্টারটির নতুন ইনডেক্স পজিশন আপডেট করুন।
     - উইন্ডোর সাইজ কাউন্ট করুন: \`maxLength = Math.max(maxLength, right - left + 1)\`।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - পুরো স্ট্রিং একবার স্ক্যান করার জন্য।
  - **স্পেস**: \$O(min(M, N))\$ - ম্যাপে ক্যারেক্টার ও ইনডেক্স সেভ রাখার মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
টেক্সট কম্প্রেশন অ্যালগরিদম। যেখানে ফাইলের আকার ছোট করার জন্য ফাইলের ইউনিক বাইট বা ক্যারেক্টার সিকোয়েন্সের সর্বোচ্চ দৈর্ঘ্য খুঁজে বের করা হয়।

### উত্তম অনুশীলন
রিপিট হওয়া ক্যারেক্টারের ম্যাপ ইনডেক্সটি বর্তমান উইন্ডোর বাম সীমার বড় বা সমান (\`>= left\`) কিনা তা চেক করুন। তা না হলে পয়েন্টার ভুলবশত পেছনের দিকে সরে যেতে পারে।

### সাধারণ ভুল
সাব-স্ট্রিং ও সাব-সেকুয়েন্সের গুলিয়ে ফেলা। সাব-স্ট্রিং অবশ্যই সংলগ্ন হতে হবে, সাব-সেকুয়েন্সের মতো মাঝে অন্য ক্যারেক্টার থাকা যাবে না।`
  },
  {
    id: "dsa-32",
    title: "How to detect a cycle in a directed graph using DFS?",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Graphs","DFS","Algorithms"],
    enAnswer: "Detect a cycle in a directed graph by tracking visited nodes and recursion stack states (coloring). If a DFS visit hits a node that is currently in the active recursion stack, a cycle is detected. Time complexity is O(V + E) and space is O(V).",
    bnAnswer: "ডাইরেক্টেড গ্রাফে সাইকেল বা লুপ খুঁজতে DFS ট্রাভার্সাল চালান এবং রিকার্সন স্ট্যাক ট্র্যাকিং (Coloring) করুন। ভিজিট করার সময় কোনো নোড যদি অলরেডি রানিং রিকার্সন স্ট্যাকে থাকে, তবে সেখানে লুপ রয়েছে। সময় জটিলতা ও(ভি + ই) এবং স্পেস জটিলতা ও(ভি)।",
    enExplanation: `### Explanation
In a directed graph, a simple visited array is not enough to detect cycles because visiting a previously visited node might just mean we reached it from a different path (not a cycle). We need to track nodes in the **current recursion stack**.
- **Coloring States (3-Color DFS)**:
  - **Unvisited (0 / White)**: Node not processed yet.
  - **Visiting (1 / Gray)**: Node is currently in the recursion stack (being processed).
  - **Visited (2 / Black)**: Node and all its neighbors have been fully processed.
- **Algorithm**:
  - Run DFS on all unvisited nodes.
  - Set state to \`Visiting (1)\` on entering.
  - For each neighbor:
    - If neighbor state is \`Visiting (1)\`, **a cycle is found (Back Edge)**.
    - If neighbor state is \`Unvisited (0)\`, recursively call DFS.
  - Set state to \`Visited (2)\` before exiting the function.
- **Complexity**:
  - **Time**: \$O(V + E)\$
  - **Space**: \$O(V)\$ for recursion stack and states array.

### Real-World Example
Circular dependencies in package managers. If Package A imports Package B, Package B imports Package C, and Package C imports Package A, it creates an infinite install cycle.

### Best Practice
Instead of 3 arrays, maintain a single \`state\` array where values represent states (0, 1, 2) or use two sets: \`visited\` and \`inStack\`.

### Common Mistakes
Treating undirected graph cycle detection the same as directed. In undirected graphs, we must pass the parent node to avoid counting the path back to the immediate parent as a cycle.

### Code Example (TypeScript)
\`\`\`typescript
function hasCycle(numCourses: number, prerequisites: number[][]): boolean {
  const adjList: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [dest, src] of prerequisites) {
    adjList[src].push(dest);
  }
  
  const visited = new Uint8Array(numCourses); // 0 = unvisited, 1 = visiting, 2 = visited
  
  const dfs = (node: number): boolean => {
    visited[node] = 1; // Mark as visiting
    
    for (const neighbor of adjList[node]) {
      if (visited[neighbor] === 1) return true; // Cycle detected!
      if (visited[neighbor] === 0 && dfs(neighbor)) return true;
    }
    
    visited[node] = 2; // Fully processed
    return false;
  };
  
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && dfs(i)) return true;
  }
  return false;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাইরেক্টেড (Directed) গ্রাফে সাধারণ visited অ্যারে দিয়ে লুপ চেক করা যায় না, কারণ একটি নোডে অন্য রাস্তা দিয়েও পৌঁছানো যেতে পারে। এ জন্য রানিং রিকার্সন স্ট্যাকে নোডটি আছে কিনা তা চেক করতে হয়।
- **কালারিং মেথড (৩-কালার DFS)**:
  - **Unvisited (0)**: নোডটি এখনো ভিজিট করা হয়নি।
  - **Visiting (1)**: নোডটি বর্তমানে রিকার্সন স্ট্যাকে প্রসেস হচ্ছে।
  - **Visited (2)**: নোড এবং তার সব প্রতিবেশীর ট্রাভার্সাল শেষ।
- **অ্যালগরিদম**:
  - সব আন-ভিজিটেড নোডের ওপর DFS চালান।
  - নোডে ঢোকার সময় তার স্টেট \`Visiting (1)\` করুন।
  - প্রতিটি প্রতিবেশীর জন্য:
    - প্রতিবেশী যদি \`Visiting (1)\` স্টেটে থাকে, তার মানে **সাইকেল পাওয়া গেছে**।
    - প্রতিবেশী যদি \`Unvisited (0)\` হয়, তবে রিকার্সিভলি DFS কল করুন।
  - নোড থেকে বের হওয়ার সময় তার স্টেট \`Visited (2)\` করে দিন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(V + E)\$ - নোড ও এজ প্রসেসিং টাইম।
  - **স্পেস**: \$O(V)\$ - কল স্ট্যাক এবং স্টেট অ্যারের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
প্যাকেজ ম্যানেজারের ডিপেন্ডেন্সি। যদি প্যাকেজ ক ডিপেন্ড করে প্যাকেজ খ-এর ওপর, প্যাকেজ খ ডিপেন্ড করে প্যাকেজ গ-এর ওপর এবং প্যাকেজ গ ডিপেন্ড করে প্যাকেজ ক-এর ওপর, তবে লাইব্রেরি ইনস্টল করার সময় ইনফিনিট লুপ তৈরি হবে।

### উত্তম অনুশীলন
কোড শর্ট করতে ৩টি আলাদা অ্যারের বদলে একটি একক \`state\` অ্যারে ব্যবহার করুন যেখানে ০, ১, ২ দিয়ে অবস্থা নির্দেশ করা যায়।

### সাধারণ ভুল
ডাইরেক্টেড গ্রাফের সাইকেল লজিক আন-ডাইরেক্টেড গ্রাফে চালানো। আন-ডাইরেক্টেড গ্রাফের ক্ষেত্রে ইমিডিয়েট প্যারেন্ট নোডকে স্কিপ করার জন্য রিকার্সনে প্যারেন্ট নোড পাস করতে হয়।`
  },
  {
    id: "dsa-33",
    title: "Detect a cycle in an undirected graph using Union-Find.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Graphs","Union-Find","Algorithms"],
    enAnswer: "Union-Find detects cycles in undirected graphs. Iterate through all edges, calling find() on both vertices. If they share the same parent root, a cycle exists. Otherwise, call union() to merge their sets. Time complexity is O(E alpha(V)) and space is O(V).",
    bnAnswer: "Union-Find আন-ডাইরেক্টেড গ্রাফের সাইকেল খুঁজে পায়। সব এজ বা কানেকশনের ওপর লুপ চালিয়ে নোড দুটির find() কল করুন। যদি তারা একই প্যারেন্ট রুট শেয়ার করে, তবে সাইকেল আছে। অন্যথায় union() দিয়ে সেট দুটি মার্চ করুন। সময় জটিলতা ও(ই আলফা(ভি))।",
    enExplanation: `### Explanation
Union-Find (Disjoint Set Union - DSU) is an algorithm that tracks elements partitioned into disjoint subsets.
- **Core Operations**:
  - **Find**: Determine which subset an element belongs to (returns root parent). Optimized using **Path Compression**.
  - **Union**: Merge two subsets into a single subset. Optimized using **Union by Rank**.
- **Cycle Detection Algorithm**:
  1. Initialize DSU where each node is its own parent: \`parent[i] = i\`.
  2. For each edge \`(u, v)\`:
     - Find the root of \`u\`: \`rootU = find(u)\`.
     - Find the root of \`v\`: \`rootV = find(v)\`.
     - If \`rootU === rootV\`, they are already connected in the same set! This edge forms a cycle.
     - Else, merge them: \`union(rootU, rootV)\`.
- **Complexity**:
  - **Time**: \$O(E alpha(V))\$ where \$alpha\$ is the Inverse Ackermann function (practically constant \$O(1)\$).
  - **Space**: \$O(V)\$ to store parent and rank arrays.

### Real-World Example
Network routers cycle avoidance. When connecting a new cable between Router A and Router B, if they are already in the same connected subnetwork, adding the cable will create a network loop/storm.

### Best Practice
Always implement **Path Compression** inside the \`find\` function: \`parent[x] = find(parent[x])\`. This flattens the tree structure and keeps find operations running at near \$O(1)\$ speed.

### Common Mistakes
Forgetting that Union-Find cycle detection only works for **undirected** graphs. For directed graphs, DFS recursion stack tracking must be used.

### Code Example (TypeScript)
\`\`\`typescript
class DSU {
  private parent: number[];
  private rank: number[];
  
  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }
  
  find(i: number): number {
    if (this.parent[i] === i) return i;
    this.parent[i] = this.find(this.parent[i]); // Path Compression
    return this.parent[i];
  }
  
  union(i: number, j: number): boolean {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) return false; // Cycle detected
    
    // Union by Rank
    if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }
    return true;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Union-Find (বা Disjoint Set Union - DSU) একটি বিশেষ অ্যালগরিদম যা পরস্পর বিচ্ছিন্ন নোডগুলোর সেট বা গ্রুপ ট্র্যাক করতে ব্যবহৃত হয়।
- **কোর অপারেশন**:
  - **Find**: একটি উপাদান কোন গ্রুপ বা সেটের সদস্য তা বের করা (গ্রুপের মূল প্যারেন্ট রিটার্ন করে)। এটি **Path Compression** দিয়ে অপ্টিমাইজড করা হয়।
  - **Union**: দুটি বিচ্ছিন্ন সেটকে মার্চ করে একটি সেটে রূপান্তর করা। এটি **Union by Rank** দিয়ে অপ্টিমাইজড করা হয়।
- **সাইকেল খোঁজার অ্যালগরিদম**:
  ১. DSU ইনিশিয়েলাইজ করুন যেখানে শুরুতে প্রতিটি নোড নিজেই নিজের প্যারেন্ট: \`parent[i] = i\`।
  ২. প্রতিটি কানেকশন বা এজ \`(u, v)\`-এর ওপর লুপ চালান:
     - \`u\`-এর মূল প্যারেন্ট খুঁজুন: \`rootU = find(u)\`।
     - \`v\`-এর মূল প্যারেন্ট খুঁজুন: \`rootV = find(v)\`।
     - যদি \`rootU === rootV\` হয়, তার মানে তারা অলরেডি একই গ্রুপে কানেক্টেড আছে! নতুন এই লাইনটি দিলে একটি সাইকেল তৈরি হবে।
     - অন্যথায়, তাদের কানেক্ট করুন: \`union(rootU, rootV)\`।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(E alpha(V))\$ যেখানে \$alpha\$ হলো ইনভার্স অ্যাকারম্যান ফাংশন (যা প্রায় কনস্ট্যান্ট ও(১) এর সমান)।
  - **স্পেস**: \$O(V)\$ - প্যারেন্ট এবং র‍্যাংক অ্যারে সংরক্ষণের মেমোরি।

### বাস্তব-ভিত্তিক উদাহরণ
ইন্টারনেট রাউটার নেটওয়ার্ক। রাউটার ক এবং খ-এর মধ্যে নতুন তার সংযোগ দেওয়ার সময় যদি দেখা যায় তারা অলরেডি একে অপরের সাথে ঘুরতি কানেকশনে যুক্ত আছে, তবে নতুন তারটি দিলে ডাটা লুপ বা ঝড়ের সৃষ্টি হবে।

### উত্তম অনুশীলন
\`find\` ফাংশনে সর্বদা **Path Compression** ইমপ্লিমেন্ট করুন: \`parent[x] = find(parent[x])\`। এটি ট্রির ডালপালা ভেঙে ফ্ল্যাট করে ফেলে, যার ফলে পরবর্তী সার্চ স্পিড প্রায় ও(১)-এ নেমে আসে।

### সাধারণ ভুল
ভুলে যাওয়া যে Union-Find সাইকেল ডিটেকশন শুধুমাত্র **আন-ডাইরেক্টেড (Undirected)** গ্রাফের ক্ষেত্রে কাজ করে। ডাইরেক্টেড গ্রাফের জন্য এটি উপযুক্ত নয়।`
  },
  {
    id: "dsa-34",
    title: "Explain Binary Search on Answer using the \"Capacity To Ship Packages Within D Days\" problem.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Searching","Binary Search","Algorithms"],
    enAnswer: "Binary Search on Answer solves optimization problems by searching the target answer space. For package shipping, low is max(weights) and high is sum(weights). We binary search the mid capacity and verify if it can ship within D days. Time complexity is O(N log(Sum-Max)) and space is O(1).",
    bnAnswer: "Binary Search on Answer মূলত অপ্টিমাইজেশন প্রবলেম সলভ করতে সম্ভাব্য উত্তরের রেঞ্জের ওপর বাইনারি সার্চ চালায়। শিপিং প্রবলেমে low হলো max(weights) এবং high হলো sum(weights)। আমরা মিডল ক্যাপাসিটি চেক করে দেখি D দিনে শিপ করা যায় কিনা। সময় জটিলতা ও(এন লগ(Sum-Max))।",
    enExplanation: `### Explanation
Binary Search on Answer is a powerful pattern used when the answer space is monotonic (if capacity \$C\$ works, any capacity \$> C\$ also works, and if it fails, any capacity \$< C\$ also fails).
- **The Shipping Problem**: Given weights of packages and a limit \`D\` days, find the minimum ship capacity to ship all packages in sequence within \`D\` days.
- **Search Space**:
  - Minimum possible capacity (\`low\`): \`max(weights)\` (the ship must be able to carry the heaviest package).
  - Maximum possible capacity (\`high\`): \`sum(weights)\` (carrying all packages in 1 day).
- **Algorithm**:
  - While \`low <= high\`:
    - Calculate \`mid\` capacity.
    - Check if it is possible to ship within \`D\` days using \`mid\` capacity.
    - If yes, this capacity works! Try to find a smaller one: \`high = mid - 1\`.
    - If no, the capacity is too small: \`low = mid + 1\`.
  - Return \`low\` (the minimum working capacity).
- **Complexity**:
  - **Time**: \$O(N log(	ext{Sum} - 	ext{Max}))\$ where \$N\$ is number of packages. We run a verification check taking \$O(N)\$ for each binary search step.
  - **Space**: \$O(1)\$ auxiliary space.

### Real-World Example
Configuring a factory conveyor belt speed. If a speed of 50 items/min works without breaking items, any speed slower than 50 also works safely. You binary search the speed limit to find the maximum possible throughput.

### Best Practice
Write a clean, isolated helper function \`canShip(capacity)\` that runs in \$O(N)\$ time. Keeping the decision logic separate makes binary search on answer code very clean and readable.

### Common Mistakes
Setting the \`low\` pointer to 0 or 1. If the heaviest package is 10 and capacity is set to 5, the ship can never carry that package, causing an infinite loop or wrong answer. \`low\` must start at \`max(weights)\`.

### Code Example (TypeScript)
\`\`\`typescript
function shipWithinDays(weights: number[], days: number): number {
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);
  
  const canShip = (capacity: number): boolean => {
    let currentDaySum = 0;
    let requiredDays = 1;
    for (const w of weights) {
      if (currentDaySum + w > capacity) {
        requiredDays++;
        currentDaySum = w;
      } else {
        currentDaySum += w;
      }
    }
    return requiredDays <= days;
  };
  
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canShip(mid)) {
      high = mid - 1; // Try to find a smaller capacity
    } else {
      low = mid + 1;  // Increase capacity
    }
  }
  return low;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Binary Search on Answer হলো এমন একটি কার্যকরী প্যাটার্ন যা অপ্টিমাইজেশন প্রবলেমে সম্ভাব্য উত্তরের রেঞ্জের ওপর বাইনারি সার্চ চালায়। এটি কাজ করে যখন উত্তরের রেঞ্জটি মোনোটোনিক বা একমুখী হয় (যেমন ক্যাপাসিটি C কাজ করলে, C-এর বড় যেকোনো মানও কাজ করবে)।
- **শিপিং প্রবলেম**: প্যাকেজের ওয়েট এবং নির্দিষ্ট দিন \`D\` দেওয়া আছে। ক্রমানুসারে সবগুলো প্যাকেজ D দিনের মধ্যে শিপ করতে সর্বনিম্ন কত জাহাজ ক্যাপাসিটি লাগবে তা বের করতে হবে।
- **সার্চ পরিধি (Search Space)**:
  - সর্বনিম্ন ক্যাপাসিটি (\`low\`): \`max(weights)\` (জাহাজটিকে অবশ্যই সবচেয়ে ভারী প্যাকেজটি বহনে সক্ষম হতে হবে)।
  - সর্বোচ্চ ক্যাপাসিটি (\`high\`): \`sum(weights)\` (১ দিনেই সব প্যাকেজ নিয়ে যাওয়া)।
- **অ্যালগরিদম**:
  - \`low <= high\` হওয়া পর্যন্ত লুপ চালান:
    - মাঝের ক্যাপাসিটি \`mid\` বের করুন।
    - চেক করুন \`mid\` ক্যাপাসিটি নিয়ে D দিনের মধ্যে সব প্যাকেজ শিপ করা যায় কিনা।
    - সম্ভব হলে, এই ক্যাপাসিটি কাজ করছে! আরও ছোট ক্যাপাসিটি ট্রাই করতে: \`high = mid - 1\` করুন।
    - সম্ভব না হলে, ক্যাপাসিটি আরও বাড়াতে: \`low = mid + 1\` করুন।
  - লুপ শেষে সর্বনূন্যতম কার্যকরী ক্যাপাসিটি \`low\` রিটার্ন করুন।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N log(	ext{Sum} - 	ext{Max}))\$ - প্রতি বাইনারি সার্চের ধাপে \$O(N)\$ ভ্যালিডেশন চেকের জন্য।
  - **স্পেস**: \$O(1)\$ - অতিরিক্ত মেমোরি লাগে না।

### বাস্তব-ভিত্তিক উদাহরণ
ফ্যাক্টরির কনভেয়র বেল্টের স্পিড ঠিক করা। স্পিড ৫০ হলে প্রোডাক্ট না ভেঙে ঠিকঠাক চললে, ৫০-এর নিচের যেকোনো স্পিডেও ঠিকঠাক চলবে। আপনি রেঞ্জের ওপর বাইনারি সার্চ করে সর্বোচ্চ সেফ স্পিড লিমিট বের করবেন।

### উত্তম অনুশীলন
ভ্যালিডেশনের জন্য একটি আলাদা হেল্পার ফাংশন \`canShip(capacity)\` লিখুন যা ও(এন) সময়ে কাজ করবে। সল্যুশন লজিক আলাদা রাখলে কোড পড়তে অনেক সুবিধা হয়।

### সাধারণ ভুল
\`low\` পয়েন্টারটি ০ বা ১ সেট করা। যদি সবচেয়ে ভারী প্যাকেজের ওজন ১০ হয় এবং জাহাজের ধারণক্ষমতা ৫ হয়, তবে জাহাজটি কখনোই ঐ প্যাকেজ নিতে পারবে না, যার ফলে কোড ভুল উত্তর দেবে। \`low\` অবশ্যই \`max(weights)\` দিয়ে শুরু হতে হবে।`
  },
  {
    id: "dsa-35",
    title: "Determine if two strings are anagrams of each other.",
    difficulty: "intermediate",
    category: "dsa",
    tags: ["Strings","Hash Map","Algorithms"],
    enAnswer: "Two strings are anagrams if they contain the same characters with the same frequencies. Count characters of string A in a hash map/frequency array, decrement using string B, and check if all frequencies are zero. Time complexity is O(N) and space is O(1).",
    bnAnswer: "দুটি স্ট্রিং অ্যানাগ্রাম (Anagram) হবে যদি তাদের ক্যারেক্টার এবং ফ্রিকোয়েন্সি হুবহু মিলে যায়। স্ট্রিং ক-এর ক্যারেক্টারগুলো হ্যাশ ম্যাপ বা ফ্রিকোয়েন্সি অ্যারেতে কাউন্ট করুন, স্ট্রিং খ-এর ক্যারেক্টার দিয়ে ডিক্রিমেন্ট করুন এবং চেক করুন সব ফ্রিকোয়েন্সি শূন্য কিনা। সময় জটিলতা ও(এন)।",
    enExplanation: `### Explanation
An anagram is a word formed by rearranging the letters of another word (e.g., \`"anagram"\` and \`"nagaram"\`).
- **Optimal Hash Map / Frequency Array Approach**:
  1. If string lengths are different, return false immediately.
  2. Create a frequency counter array of size 26 (for English lowercase letters) or a Hash Map.
  3. Loop through both strings simultaneously:
     - Increment the count for character in string A.
     - Decrement the count for character in string B.
  4. If all counts in the frequency array/map are 0, return true. Otherwise, return false.
- **Complexity**:
  - **Time**: \$O(N)\$ where \$N\$ is string length.
  - **Space**: \$O(1)\$ auxiliary space because the alphabet size is constant (e.g., 26 for English lowercase, or bounded Unicode set).

### Real-World Example
Text parsing search engines index keywords by their character profiles to support scrambled text search or matching spellcheck suggestions.

### Best Practice
Use a simple fixed-size array of size 26 (e.g., \`new Int32Array(26)\`) instead of a JavaScript \`Map\` or \`Object\` when dealing with standard ASCII lowercase strings, as array index operations are much faster than hashing keys.

### Common Mistakes
Sorting both strings and comparing them (e.g. \`s1.split("").sort().join("") === s2.split("").sort().join("")\`). While correct, this takes \$O(N log N)\$ time and allocates multiple temporary arrays, which is inefficient.

### Code Example (TypeScript)
\`\`\`typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const counts = new Int32Array(26);
  const baseCharCode = 'a'.charCodeAt(0);
  
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - baseCharCode]++;
    counts[t.charCodeAt(i) - baseCharCode]--;
  }
  
  for (let i = 0; i < 26; i++) {
    if (counts[i] !== 0) return false;
  }
  return true;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
দুটি শব্দকে একে অপরের অ্যানাগ্রাম (Anagram) বলা হয় যদি তাদের ভেতরের সব অক্ষর এবং তাদের মোট সংখ্যা হুবহু এক হয়, শুধু বসার স্থান আলাদা থাকে (যেমন, \`"silent"\` এবং \`"listen"\`)।
- **অপ্টিমাইজড ফ্রিকোয়েন্সি কাউন্টার মেথড**:
  ১. যদি দুটি স্ট্রিংয়ের দৈর্ঘ্য আলাদা হয়, তবে শুরুতেই false রিটার্ন করুন।
  ২. ইংরেজি ২৬টি অক্ষরের জন্য ২৬ সাইজের একটি ফ্রিকোয়েন্সি কাউন্টার অ্যারে তৈরি করুন।
  ৩. লুপ চালিয়ে দুটি স্ট্রিংয়ের অক্ষর প্রসেস করুন:
     - স্ট্রিং ক-এর ক্যারেক্টার ইনডেক্স অনুযায়ী কাউন্টার ১ করে বাড়ান।
     - স্ট্রিং খ-এর ক্যারেক্টার ইনডেক্স অনুযায়ী কাউন্টার ১ করে কমান।
  ৪. লুপ শেষে অ্যারেটির সব ইনডেক্সের মান ০ কিনা তা চেক করুন। সব ০ হলে true, অন্যথায় false।
- **জটিলতা (Complexity)**:
  - **সময়**: \$O(N)\$ - স্ট্রিংয়ের অক্ষরের ওপর দিয়ে একবার লুপ চালানোর জন্য।
  - **স্পেস**: \$O(1)\$ - ২৬ সাইজের ফিক্সড অ্যারে মেমোরি ব্যবহারের কারণে।

### বাস্তব-ভিত্তিক উদাহরণ
সার্চ ইঞ্জিনের স্পেলচেক সাজেশন। টাইপ করা ভুল কিওয়ার্ডটির অক্ষরগুলো সাজিয়ে সঠিক ডিকশনারির শব্দের সাথে ম্যাচ করাতে ক্যারেক্টার অ্যানাগ্রাম প্রোফাইল ব্যবহার করা হয়।

### উত্তম অনুশীলন
ইংরেজি ছোট হাতের ক্যারেক্টার প্রসেস করার ক্ষেত্রে কাস্টম হ্যাশ ম্যাপ বা অবজেক্টের বদলে ২৬ সাইজের ফিক্সড ইন-মেমোরি অ্যারে ব্যবহার করুন, এটি মেমোরি অ্যালোকেশন কমিয়ে স্পিড বহুগুণ বাড়িয়ে দেয়।

### সাধারণ ভুল
দুটি স্ট্রিংকে সর্ট করে তুলনা করা (যেমন: \`s1.sort() === s2.sort()\` আকারে)। এটি সঠিক উত্তর দিলেও সর্ট করার কারণে \$O(N log N)\$ সময় এবং নতুন অ্যারে তৈরি করে মেমোরি অপচয় করে।`
  }
];
