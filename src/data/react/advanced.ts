import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'react-71',
    title: 'Explain the Virtual DOM Diffing algorithm and its O(n) heuristic complexity.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Diffing', 'Reconciliation', 'Algorithms'],
    enAnswer: 'React performs tree diffing with O(n) complexity based on two heuristics: (1) two elements of different types produce different trees, and (2) keys flag stable children across renders.',
    bnAnswer: 'ভার্চুয়াল DOM-এর ডিফিং অ্যালগরিদম O(n) জটিলতায় কাজ করে দুটি নিয়মের ওপর ভিত্তি করে: (১) আলাদা টাইপের এলিমেন্ট আলাদা ট্রি তৈরি করবে, এবং (২) চাইল্ড নোড ইউনিক key দিয়ে চিহ্নিত করলে রেন্ডার জুড়ে অপরিবর্তিত থাকবে।',
    enExplanation: `### Explanation
Finding the minimum updates to convert one tree to another has a general complexity of O(n³). React implements a heuristic O(n) reconciliation algorithm based on matching element types. If element types differ, React tears down the old tree and builds the new one. If they match, it updates only changed properties.

### Real-World Example
In a dynamic data grid, changing a single cell value should not re-render the outer grid frame. React diffs the old and new grid virtual nodes, notices only that specific cell changed, and updates only that element in the real DOM.

### Best Practice
Always use stable, unique, and predictable IDs for list keys instead of random index numbers to help the diffing engine match components.

### Common Mistakes
Generating dynamic keys like \`key={Math.random()}\` during rendering. This forces React to destroy and recreate the component node on every update, breaking performance.

### Code Example
\`\`\`tsx
interface GridItem { id: string; val: string }

export function DynamicGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(item => (
        // Correct reconciliation with stable key
        <div key={item.id} className="p-4 border">
          {item.val}
        </div>
      ))}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
তাত্ত্বিকভাবে দুটি ট্রির পার্থক্য বের করার সাধারণ অ্যালগরিদমের জটিলতা O(n³)। রিঅ্যাক্ট এটিকে ও(এন) বা O(n) এ সম্পন্ন করে দুটি হিউরিস্টিক নিয়মে: টাইপ বা এলিমেন্ট ম্যাচিং এবং কি (key) সনাক্তকরণ। আলাদা টাইপ নোড দেখলেই রিঅ্যাক্ট আগেরটি ডিলিট করে নতুন নোড বসায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডাইনামিক গ্রিডে একটি ঘরের ডাটা পরিবর্তিত হলে পুরো গ্রিডটি রি-রেন্ডার হওয়া উচিত নয়। রিঅ্যাক্ট আগের ও পরের গ্রিড ট্রি মিলিয়ে দেখে কেবল নির্দিষ্ট ঘরটি আপডেট করে।

### উত্তম অনুশীলন (Best Practice)
লিস্ট কী হিসেবে সবসময় স্থায়ী ও ইউনিক আইডি ব্যবহার করুন যাতে রিকনসিলার অ্যালগরিদম নোডগুলোকে সহজে চিহ্নিত করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডারের সময় ডাইনামিক কী তৈরি করা যেমন \`key={Math.random()}\`। এটি প্রতি আপডেটে কম্পোনেন্ট ধ্বংস ও পুনরায় তৈরি করতে বাধ্য করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
interface GridItem { id: string; val: string }

export function DynamicGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(item => (
        // স্থায়ী কী (key) দিয়ে সঠিক রিকনসিলিয়েশন
        <div key={item.id} className="p-4 border">
          {item.val}
        </div>
      ))}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-72',
    title: 'How do React Hooks map to the rendering cycle and fiber nodes under the hood?',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Hooks', 'Fiber', 'UnderTheHood'],
    enAnswer: 'React Hooks represent a linked list of hook objects stored inside the fiber node of the component, running in the exact same order on every render cycle.',
    bnAnswer: 'রিঅ্যাক্ট হুকগুলো আলাদা লাইফসাইকেলে চলে না। এগুলো মূলত কম্পোনেন্টের ফাইবার নোডের ভেতরে সংরক্ষিত হুক অবজেক্টের একটি লিঙ্কড লিস্ট (Linked List), যা প্রতিটি রেন্ডারে একই ক্রমানুসারে চলে।',
    enExplanation: `### Explanation
Inside each fiber node, hooks are stored as a linked list of objects containing \`memoizedState\`, \`queue\`, and a pointer to the \`next\` hook. This is why hooks cannot be called inside conditionals. If a hook call is skipped, the pointers mismatch, breaking state synchronization.

### Real-World Example
In a multi-step checkout form, you cannot conditionally invoke \`useEffect\` based on step index. If you do, React throws a "Rendered fewer hooks than expected" error, breaking compilation.

### Best Practice
Only call hooks at the top level of React functions. Never call them inside conditionals, loops, or nested callbacks.

### Common Mistakes
Nesting hooks inside \`if\` statements or loops, which corrupts the Hook pointer hierarchy on state changes.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function Checkout({ step }: { step: string }) {
  const [data, setData] = useState(null);

  // Correct: Condition is placed inside the hook, not wrapping the hook
  useEffect(() => {
    if (step === 'payment') {
      console.log('Initialize payment gateway');
    }
  }, [step]);

  return <div>Step: {step}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রতিটি ফাইবার নোডের ভেতর হুকগুলো লিঙ্কড লিস্ট হিসেবে থাকে যার প্রতিটি নোডে \`memoizedState\`, \`queue\` ও \`next\` পয়েন্টার থাকে। এ কারণেই হুক কন্ডিশনালের ভেতর রাখা যায় না। কন্ডিশন পরিবর্তন হলে লিঙ্কড লিস্টে নোড মিস হয়ে যায় এবং স্টেট এক্সচেঞ্জ নষ্ট হয়ে ক্র্যাশ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মাল্টি-স্টেপ চেকআউট ফর্মে আপনি স্টেপের ওপর ভিত্তি করে \`useEffect\` কল করতে পারবেন না। করলে রিঅ্যাক্ট "Rendered fewer hooks than expected" এরর দেখাবে।

### উত্তম অনুশীলন (Best Practice)
হুক সবসময় ফাংশনাল কম্পোনেন্টের একদম উপরে কল করুন। কন্ডিশনাল, লুপ বা নেস্টেড কলব্যাকের ভেতরে হুক কল করবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`if\` স্টেটমেন্ট বা লুপের ভেতরে হুক রাখা, যা পয়েন্টার সিকোয়েন্সকে নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function Checkout({ step }: { step: string }) {
  const [data, setData] = useState(null);

  // সঠিক: কন্ডিশন হুকের ভেতরে রাখা হয়েছে, বাইরে নয়
  useEffect(() => {
    if (step === 'payment') {
      console.log('পেমেন্ট গেটওয়ে চালু করা হচ্ছে');
    }
  }, [step]);

  return <div>Step: {step}</div>;
}
\`\`\``
  },
  {
    id: 'react-73',
    title: 'Explain Context API performance overheads and why it is not a state manager.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'ContextAPI', 'Performance', 'Redux'],
    enAnswer: 'Context is a dependency injection tool, not a state manager. Whenever context value updates, all components calling useContext on it re-render, bypassing shouldComponentUpdate.',
    bnAnswer: 'কনটেক্সট একটি ডিপেন্ডেন্সি ইনজেকশন মেকানিজম, স্টেট ম্যানেজার নয়। প্রোভাইডারের মান পরিবর্তন হলে তার সাথে যুক্ত সমস্ত চাইল্ড নোড রি-রেন্ডার হয়, যা রেন্ডার স্কিপ রুলস বাইপাস করে।',
    enExplanation: `### Explanation
Unlike Redux or Zustand which support selector subscriptions (listening to a single property change), Context forces all consumers to update when the value object reference changes, even if a component only consumes an unchanged property. Context has no internal diffing engine for state properties.

### Real-World Example
An app using a giant Context Provider containing user settings, notifications, theme options, and profile status. Updating a notification count forces the main menu theme toggle buttons to re-render.

### Best Practice
Use Context for static or low-frequency updates (theme, locale, auth). For high-frequency state updates, use Redux Toolkit, Zustand, or Jotai.

### Common Mistakes
Using a single massive context provider for the entire application, triggering site-wide rendering cycles for minor adjustments.

### Code Example
\`\`\`tsx
// Context does not support selector-based subscription natively
// Use Zustand instead for dynamic selectors:
// const theme = useStore(state => state.theme); // Only renders if theme changes
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Zustand বা Redux সিলেক্টর সাবস্ক্রিপশন সাপোর্ট করে (যার ফলে নোডের কেবল নির্দিষ্ট অংশ বদলালেই শুধু ওই নোড রেন্ডার হয়)। কিন্তু কনটেক্সটে প্রোভাইডারের পুরো অবজেক্টটির রেফারেন্স বদলানোর কারণে সকল চাইল্ডকে রি-রেন্ডার হতে বাধ্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় কনটেক্সট প্রোভাইডারে থিম, ইউজার প্রফাইল ও নোটিফিকেশন রাখা। এখন নোটিফিকেশন ১ বৃদ্ধি পাওয়ার সাথে সাথেই থিম বাটন বা ইউজার ইনফো কার্ড পেজটি অহেতুক রেন্ডার শুরু করা।

### উত্তম অনুশীলন (Best Practice)
কম ফ্রিকোয়েন্ট মান (থিম, ভাষা, লগইন অবস্থা) এর জন্য কনটেক্সট ব্যবহার করুন। ফাস্ট স্টেট আপডেটের জন্য Zustand বা Jotai ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কনটেক্সটকে একটি জেনারেলাইজড স্টেট ম্যানেজার হিসেবে ব্যবহার করে সব বিজনেস স্টেট এর ভেতর ঠেলে দেওয়া।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// কনটেক্সটে সিলেক্টর ভিত্তিক সাবস্ক্রিপশন সরাসরি সম্ভব নয়
// এর বদলে Zustand ব্যবহার করুন:
// const theme = useStore(state => state.theme); // শুধুমাত্র থিম বদলালেই রেন্ডার হবে
\`\`\``
  },
  {
    id: 'react-74',
    title: 'Explain Concurrent Mode features (Time Slicing and Interruptible Rendering).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'ConcurrentMode', 'Performance', 'Architecture'],
    enAnswer: 'Concurrent Mode splits rendering work into small slices, letting React pause heavy rendering updates to process high-priority events like typing or clicking.',
    bnAnswer: 'কনকারেন্ট মোড রেন্ডারিং কাজকে ছোট ছোট অংশে ভাগ করে, যার ফলে রিঅ্যাক্ট টাইপিং বা ক্লিকের মতো হাই-প্রায়োরিটি ইভেন্ট হ্যান্ডেল করতে রানিং কোনো ভারী রেন্ডারকে পজ বা বাতিল করতে পারে।',
    enExplanation: `### Explanation
In older React, rendering was blocking: once started, it had to finish, freezing the screen on large grids. Concurrent mode uses time slicing to yield control back to the browser every 5ms, checking if keyboard inputs occurred, and resuming calculation only during idle frames.

### Real-World Example
In a big charts dashboard, a user types rapidly inside a search input box. React pauses dashboard rendering patches on every keystroke, allowing the typing input to stay fluid and lag-free.

### Best Practice
Leverage \`useTransition\` or \`useDeferredValue\` to tell the scheduler which states are low-priority.

### Common Mistakes
Wrapping all state setters in transitions, which makes critical UI elements feel unresponsive.

### Code Example
\`\`\`tsx
// Under Concurrent Mode, React 18 uses lane priorities to pause rendering
// and prioritize urgent user input events natively.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
পূর্বে রেন্ডারিং ছিল ব্লকিং। একবার রেন্ডার শুরু হলে তা শেষ হওয়া পর্যন্ত পেজ জমে (freeze) থাকতো। কনকারেন্ট মোড প্রতি ৫ মিলি-সেকেন্ডে ব্রাউজার লুপকে চেক করে কোনো কিবোর্ড ইভেন্ট এসেছে কি না। ইভেন্ট আসলে রানিং রেন্ডার স্থগিত করে আগে ওটি প্রসেস করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় ডাটা ড্যাশবোর্ডে সার্চ বক্সে দ্রুত টাইপ করার সময়, রিঅ্যাক্ট চার্টের রেন্ডারিং মাঝপথে থামিয়ে দিয়ে টাইপিং টেক্সট বক্স সচল রাখে।

### উত্তম অনুশীলন (Best Practice)
কম গুরুত্বপূর্ণ কাজগুলোকে চিহ্নিত করতে \`useTransition\` বা \`useDeferredValue\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সব ধরণের সাধারণ স্টেট আপডেটকেও ট্রানজিশনের ভেতরে ঢুকিয়ে দেওয়া, যা অ্যাপকে আনরেসপনসিভ দেখায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// কনকারেন্ট মোডে রিঅ্যাক্ট ১৮ লেন প্রায়োরিটি (lane priorities) ব্যবহার করে
// ইউজার ইন্টারঅ্যাকশনকে অগ্রাধিকার দেয় এবং পেজ ফ্রিজিং আটকায়।
\`\`\``
  },
  {
    id: 'react-75',
    title: 'Explain the useTransition Hook for responsive inputs and state updates.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'useTransition', 'ConcurrentMode'],
    enAnswer: 'useTransition lets you mark state updates as non-urgent transitions, ensuring the UI remains responsive by letting urgent inputs interrupt rendering.',
    bnAnswer: 'useTransition কন্টেন্ট আপডেটগুলোকে নন-আর্জেন্ট বা কম গুরুত্বপূর্ণ হিসেবে চিহ্নিত করে, ফলে ব্রাউজার টাইপিংয়ের মতো জরুরি কাজে ল্যাগ এড়াতে ভারী রেন্ডার স্থগিত করতে পারে।',
    enExplanation: `### Explanation
\`useTransition\` returns an \`isPending\` status indicator and a \`startTransition\` trigger function. State updates wrapped in \`startTransition\` are treated as lower priority by the fiber scheduler. If the user types while a transition is running, React discards the current render and updates the input first.

### Real-World Example
Filtering a list of 10,000 components. The text input value is updated urgently, but updating the filtered list is marked as a transition, preventing typing delays.

### Best Practice
Only wrap state setters that trigger heavy computations in transitions. Never wrap controlled input text value setters.

### Common Mistakes
Trying to run asynchronous API fetch calls inside the \`startTransition\` callback function directly. It must contain only synchronous state setters.

### Code Example
\`\`\`tsx
import { useState, useTransition } from 'react';

export function FilterList() {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Urgent update: Keep typing instant
    setQuery(e.target.value);

    // Non-urgent update: Defer list filter calculation
    startTransition(() => {
      const filtered = Array.from({ length: 5000 }, (_, i) => \`Result \${i} for \${e.target.value}\`);
      setList(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <p>Filtering database...</p>}
      <ul>{list.slice(0, 10).map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`useTransition\` হুকটি \`isPending\` (লোডিং অবস্থা) এবং \`startTransition\` ফাংশন রিটার্ন করে। এর ভেতরের আপডেটগুলো লো-প্রায়োরিটি পায়। টাইপ করার সময় যদি এই নোডটি রেন্ডার হতে থাকে, তবে রিঅ্যাক্ট রানিং রেন্ডার রিজেক্ট করে ইনপুট আপডেট করতে ব্রাউজার ফ্রি করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
১০০০০ আইটেমের লিস্ট সার্চ করা। সার্চ বক্সের লেখা ইনস্ট্যান্ট টাইপ হবে কিন্তু পেছনের লিস্ট ফিল্টারিংয়ের কাজটি ট্রানজিশনে থাকবে, ফলে টাইপিং ল্যাগ হবে না।

### উত্তম অনুশীলন (Best Practice)
শুধুমাত্র সেই স্টেট সেটারগুলো ট্রানজিশনে রাখুন যেগুলো বেশি রেন্ডার টাইম নেয়। ইনপুট ফিল্ড হোল্ড করা স্টেটকে এর ভেতর রাখবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`startTransition\` এর ভেতরে সরাসরি এপিআই ফেচ করতে চাওয়া। এটি ভুল, এর ভেতর শুধুমাত্র সিনক্রোনাস স্টেট সেটার রাখা যাবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useTransition } from 'react';

export function FilterList() {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // আর্জেন্ট আপডেট: টাইপিং সাথে সাথে হবে
    setQuery(e.target.value);

    // নন-আর্জেন্ট আপডেট: ফিল্টারিংয়ের কাজটি ট্রানজিশন দিয়ে পিছিয়ে দেওয়া হচ্ছে
    startTransition(() => {
      const filtered = Array.from({ length: 5000 }, (_, i) => \`রেজাল্ট \${i} - \${e.target.value}\`);
      setList(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="খুঁজুন..." />
      {isPending && <p>ডাটা ফিল্টার হচ্ছে...</p>}
      <ul>{list.slice(0, 10).map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-76',
    title: 'Explain useDeferredValue for input throttling and performance.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'useDeferredValue', 'ConcurrentMode'],
    enAnswer: 'useDeferredValue is a hook that returns a deferred version of a value, letting React delay rendering parts of the tree that depend on it until higher-priority updates finish.',
    bnAnswer: 'useDeferredValue এমন একটি হুক যা কোনো মানের একটি বিলম্বিত সংস্করণ রিটার্ন করে, এবং রিঅ্যাক্টকে সেই মানের ওপর নির্ভরশীল চাইল্ড নোডগুলোর রেন্ডারিং ধীর করতে সাহায্য করে।',
    enExplanation: `### Explanation
Unlike \`useTransition\` which requires wrapping state setters, \`useDeferredValue\` is used when values are received as props from parents (read-only). React will attempt to render using the old value first, then render using the new value in the background once the main UI is free.

### Real-World Example
A search query string passed down to a heavy chart visualization component. The query text box updates instantly, while the chart uses the deferred query, re-rendering smoothly in the background.

### Best Practice
Use \`useDeferredValue\` combined with \`React.memo\` on the consuming sub-tree component so it only re-renders when the deferred value actually shifts.

### Common Mistakes
Declaring new arrays or objects inside render alongside deferred values, which triggers memoization comparisons to fail.

### Code Example
\`\`\`tsx
import { useState, useDeferredValue, useMemo } from 'react';

export function DeferredSearch() {
  const [query, setQuery] = useState('');
  // Defer the query value
  const deferredQuery = useDeferredValue(query);

  // Memoize results based on deferred value
  const list = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => \`Deferred Result \${i} for \${deferredQuery}\`);
  }, [deferredQuery]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <p>Current: {query} (Rendering target: {deferredQuery})</p>
      <ul>{list.slice(0, 5).map(x => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`useTransition\` ব্যবহার করতে স্টেট সেটার ফাংশনটির অ্যাক্সেস লাগে। কিন্তু যখন প্যারেন্ট থেকে রিড-অনলি প্রপস আকারে ভ্যালু আসে তখন \`useDeferredValue\` ব্যবহার করতে হয়। রিঅ্যাক্ট প্রথমে পুরোনো ভ্যালু দিয়ে পেজ সচল রাখে এবং ব্যাকগ্রাউন্ডে নতুন ভ্যালু রেন্ডার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি জটিল চার্ট উইজেট যা ইনপুট টেক্সটের ওপর নির্ভর করে। ইনপুট বক্সে ইনস্ট্যান্ট লেখা টাইপ হবে, আর চার্টটি বিলম্বিত মান ব্যবহার করে ব্যাকগ্রাউন্ডে শান্তিতে আপডেট হবে।

### উত্তম অনুশীলন (Best Practice)
মেমোয়াইজেশনের সাথে এটি ব্যবহার করুন যাতে বিলম্বিত মানটি সত্যিই আপডেট হওয়ার আগে রি-রেন্ডার ট্রিগার না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডারের সময় ডাইনামিক অবজেক্ট রেফারেন্স পাস করা, যা মেমো ভ্যালিডেশন নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useDeferredValue, useMemo } from 'react';

export function DeferredSearch() {
  const [query, setQuery] = useState('');
  // ভ্যালুটি ডাইনামিকালি ডিফার করা হচ্ছে
  const deferredQuery = useDeferredValue(query);

  // ডিফার্ড কুয়েরির ওপর ভিত্তি করে লিস্ট মেমোয়াইজ করা হচ্ছে
  const list = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => \`রেজাল্ট \${i} - \${deferredQuery}\`);
  }, [deferredQuery]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <p>ইনপুট: {query} (রেন্ডার হচ্ছে: {deferredQuery})</p>
      <ul>{list.slice(0, 5).map(x => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-77',
    title: 'Explain Server Components vs Client Components in the React Server Components (RSC) architecture.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'RSC', 'ServerComponents', 'Next.js'],
    enAnswer: 'Server Components render solely on the server to reduce client bundle weight, while Client Components are hydrated in the browser to enable interactivity (useClient).',
    bnAnswer: 'সার্ভার কম্পোনেন্ট (RSC) শুধুমাত্র সার্ভারে রেন্ডার হয় ক্লায়েন্ট ফাইলের ওজন কমাতে, আর ক্লায়েন্ট কম্পোনেন্ট ব্রাউজারে হাইড্রেশনের মাধ্যমে ইন্টারেকশন যোগ করতে সাহায্য করে।',
    enExplanation: `### Explanation
- **Server Components (Default)**: Execute on the server. They can query databases directly, read server resources, and send zero JS to the browser.
- **Client Components (\`'use client'\`)**: Hydrate in the browser. They support state (\`useState\`), side effects (\`useEffect\`), browser APIs, and click handlers.

### Real-World Example
An online shop: the product description page can be a static Server Component (direct DB lookup, no client JS). The "Add to Cart" button inside it is a Client Component (requires state, local storage, click handler).

### Best Practice
Keep Server Components at the root and pass Client Components as children or import them inside leaf nodes to minimize JavaScript weight.

### Common Mistakes
Adding the \`'use client'\` directive to every single component file by default, defeating the bundle size optimization benefits of RSC.

### Code Example
\`\`\`tsx
// Component 1: ProductPage.tsx (Server Component - default)
// import { db } from './db';
// import { BuyButton } from './BuyButton'; // Client Component
// 
// export async function ProductPage({ id }: { id: string }) {
//   const product = await db.query('SELECT * FROM products WHERE id = ?', [id]);
//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <BuyButton productId={id} />
//     </div>
//   );
// }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **সার্ভার কম্পোনেন্ট**: এগুলো ডাটাবেজের সাথে সরাসরি কানেক্ট হতে পারে, এদের জন্য ব্রাউজারে কোনো জাভাস্ক্রিপ্ট ফাইল যায় না। ফলে সাইট সুপার ফাস্ট লোড হয়।
- **ক্লায়েন্ট কম্পোনেন্ট**: ব্রাউজারে ইন্টারেক্টিভ ও সচল করার জন্য এগুলো প্রয়োজন। এগুলোতে \`useState\` বা \`useEffect\` ব্যবহার করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ই-কমার্স পেজ: প্রোডাক্টের ছবি ও বিবরণ সার্ভার কম্পোনেন্টে রেন্ডার হবে (ডিরেক্ট ডাটাবেজ কোয়েরি)। আর কার্ট বাটনটি ক্লায়েন্ট কম্পোনেন্ট হবে কারণ এটিতে ক্লিক করার ইন্টারেকশন দরকার।

### উত্তম অনুশীলন (Best Practice)
সার্ভার কম্পোনেন্টগুলোকে ট্রির মূলে রাখুন এবং ক্লায়েন্ট কম্পোনেন্টগুলোকে পাতা বা চাইল্ড নোড হিসেবে ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
প্রতিটি ফাইলে গদাই লস্করি চালে \`'use client'\` ব্যবহার করা, যা সার্ভার কম্পোনেন্টের পারফরম্যান্স সুবিধা পুরোপুরি মুছে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// Component 1: ProductPage.tsx (সার্ভার কম্পোনেন্ট)
// import { db } from './db';
// import { BuyButton } from './BuyButton'; // ক্লায়েন্ট কম্পোনেন্ট
// 
// export async function ProductPage({ id }: { id: string }) {
//   const product = await db.query('SELECT * FROM products WHERE id = ?', [id]);
//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <BuyButton productId={id} />
//     </div>
//   );
// }
\`\`\``
  },
  {
    id: 'react-78',
    title: 'Explain React Server Actions security, encryption, and CSRF protection.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'ServerActions', 'Security', 'CSRF'],
    enAnswer: 'Server Actions automatically encrypt action endpoints, bundle unique build IDs, and run built-in CSRF origin validation checks during form submissions.',
    bnAnswer: 'সার্ভার অ্যাকশন স্বয়ংক্রিয়ভাবে অ্যাকশন এন্ডপয়েন্ট এনক্রিপ্ট করে, ইউনিক বিল্ড আইডি জেনারেট করে এবং ফর্ম সাবমিশনের সময় CSRF আক্রমণ ঠেকাতে অরিজিন চেক সম্পন্ন করে।',
    enExplanation: `### Explanation
Server Actions allow client components to invoke server-side database functions directly. This creates safety risks.
1. **Dynamic Endpoints**: Next.js/React compiles actions into unique dynamic URLs, preventing brute force scanning.
2. **Serialization**: React encrypts values passed inside closure variables.
3. **CSRF Validation**: It compares host headers to prevent unauthorized cross-site requests.

### Real-World Example
A money transfer action: \`transferMoney(amount)\`. The recipient account and transfer details must be serialized and protected against browser header manipulation.

### Best Practice
Never rely solely on form variables for authorization. Always re-verify user identity and validate input data inside the Server Action function body.

### Common Mistakes
Passing sensitive, unencrypted raw identifiers in client form action arguments without verifying permissions on the server side.

### Code Example
\`\`\`typescript
// File: actions.ts ('use server' directive)
// import { getSession } from './auth';
// 
// export async function deletePost(postId: string) {
//   'use server';
//   const session = await getSession();
//   if (!session || session.role !== 'admin') {
//     throw new Error('Unauthorized access blocked');
//   }
//   // Perform secure deletion
// }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সার্ভার অ্যাকশন ক্লায়েন্ট থেকে সরাসরি সার্ভারের ডাটাবেজ ফাংশন রান করতে দেয়, যা নিরাপত্তা ঝুঁকি বাড়ায়।
১. **ডাইনামিক এন্ডপয়েন্ট**: বিল্ড টাইমে অ্যাকশন ইউআরএলগুলো ইউনিক আইডিতে পরিণত হয়।
২. **এনক্রিপশন**: ক্লোজারের ভেতরের ভ্যারিয়েবল রিঅ্যাক্ট নিজে সিকিউরড ভাবে পাস করায়।
৩. **CSRF চেক**: ব্রাউজার রিকোয়েস্টের হোস্ট হেডার যাচাই করে অন্য সাইট থেকে আসা অ্যাটাক প্রতিরোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মানি ট্রান্সফার অ্যাকশন। কত টাকা কার একাউন্টে যাবে তা সিকিউর অরিজিন ছাড়া রান হতে না দেওয়া।

### উত্তম অনুশীলন (Best Practice)
ক্লায়েন্ট প্রপের ওপর চোখ বন্ধ করে ভরসা করবেন না। সার্ভার অ্যাকশন বডির ভেতর পুনরায় ইউজারের আইডেন্টিটি ও ডাটা পারমিশন চেক করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
নিরাপত্তা যাচাই না করেই ক্লায়েন্ট থেকে আসা ইউজারের আইডি অনুযায়ী ডাটা ডিলিট বা এডিট কোড সার্ভারে চালিয়ে দেওয়া।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ফাইল: actions.ts ('use server' নির্দেশক)
// import { getSession } from './auth';
// 
// export async function deletePost(postId: string) {
//   'use server';
//   const session = await getSession();
//   if (!session || session.role !== 'admin') {
//     throw new Error('অননুমোদিত অ্যাক্সেস ব্লক করা হয়েছে');
//   }
//   // সিকিউর ডিলিট অপারেশন
// }
\`\`\``
  },
  {
    id: 'react-79',
    title: 'Explain Hydration Errors under the hood and RSC Serialization Payloads.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Hydration', 'RSC', 'Serialization'],
    enAnswer: 'RSC serialization payloads translate Server Component node structures into a streamable JSON-like format. Hydration fails if this payload generates DOM states mismatched with browser renderings.',
    bnAnswer: 'RSC সিরিয়ালাইজেশন পেলোড সার্ভার কম্পোনেন্টের গঠনকে একটি স্ট্রিমযোগ্য JSON ফরম্যাটে রূপান্তর করে। এই পেলোড ব্রাউজারের প্রথম রেন্ডার হওয়া ট্রির সাথে অমিল হলে হাইড্রেশন এরর ঘটে।',
    enExplanation: `### Explanation
Server Components do not return HTML directly to React. They generate an RSC payload: a serialization graph describing element tags, props, and Client Component bundle references. If this payload describes layout tags that differ from browser-parsed DOM trees, the hydration compiler loses track of node references, forcing heavy layout shifts or broken UI states.

### Real-World Example
Passing a complex non-serializable object (like a Class instance containing functions or a DB connection pool) across the network boundary from Server Component to Client Component. This crashes the serialization engine.

### Best Practice
Only pass pure JSON-compatible structures (strings, numbers, simple arrays/objects) across Server-Client boundaries.

### Common Mistakes
Passing complex dates, functions, or circular object references from Server Components to client children props.

### Code Example
\`\`\`tsx
// Server Component passing serialized primitive properties
// export default async function PostCard({ id }: { id: string }) {
//   const post = await db.getPost(id);
//   // Correct: Passing simple strings/numbers
//   return <ClientComments postTitle={post.title} initialLikes={post.likes} />;
// }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সার্ভার কম্পোনেন্ট সরাসরি ব্রাউজারে HTML পাঠায় না। এটি একটি RSC payload জেনারেট করে যা দেখতে JSON এর মতো। এই পেলোডে ডম ট্যাগের গঠন ও ক্লায়েন্ট ফাইলের পাথ নির্দেশিত থাকে। ব্রাউজার ডম নোডের সাথে এর মিল না থাকলে ব্রাউজারের হাইড্রেশন ইঞ্জিন বিভ্রান্ত হয়ে এরর ছুড়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
সার্ভার সাইড ডাটাবেজ অবজেক্ট সরাসরি ক্লায়েন্ট প্রপে পাঠানোর ট্রাই করা। এতে সিরিয়ালাইজেশন ইঞ্জিন ক্র্যাশ করে কারণ ডাটাবেজ ক্লাসের ভেতরের মেথড বা ফাংশনগুলো নেটওয়ার্কে ট্রান্সফার করা যায় না।

### উত্তম অনুশীলন (Best Practice)
সার্ভার ও ক্লায়েন্ট বাউন্ডারির মধ্যে শুধুমাত্র সাধারণ JSON-কম্প্যাটিবল ভ্যালু (যেমন- স্ট্রিং, নাম্বার, প্লেইন অ্যারে) পাস করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সার্ভার কম্পোনেন্ট থেকে ক্লায়েন্ট চাইল্ডে প্রপ হিসেবে মেথড, ফাংশন বা সার্কুলার রেফারেন্স পাঠানো।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// সার্ভার কম্পোনেন্ট সিরিয়ালাইজড ডাটা পাঠাচ্ছে
// export default async function PostCard({ id }: { id: string }) {
//   const post = await db.getPost(id);
//   // সঠিক: প্লেইন স্ট্রিং ও নাম্বার প্রপস হিসেবে পাঠানো
//   return <ClientComments postTitle={post.title} initialLikes={post.likes} />;
// }
\`\`\``
  },
  {
    id: 'react-80',
    title: 'Explain React Server Components serialization payloads boundaries and constraints.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'RSC', 'Serialization', 'Next.js'],
    enAnswer: 'The serialization boundary defines what data can pass from Server Components to Client Components, enforcing strict JSON-like structures and blocking functions or classes.',
    bnAnswer: 'সিরিয়ালাইজেশন বাউন্ডারি নির্ধারণ করে কোন ডাটাগুলো সার্ভার থেকে ক্লায়েন্ট নোডে পাঠানো যাবে, যা ক্লাস বা ফাংশন ব্লক করে শুধুমাত্র সাধারণ JSON ফরম্যাট অনুমোদন করে।',
    enExplanation: `### Explanation
When passing props across the server-to-client boundary, React must serialize them to send them over the HTTP network stream.
- **Allowed**: Strings, numbers, booleans, null, arrays, plain objects, and Promises.
- **Not Allowed**: Functions, class instances, Symbols, and DOM elements.

### Real-World Example
In a blog page, fetching an article containing a \`createdAt\` Date object. Passing it directly to a client comment card will crash unless you convert it to an ISO string first: \`date.toISOString()\`.

### Best Practice
Map database model results into flat JSON objects before passing them to client child nodes.

### Common Mistakes
Passing complex ORM instances (like Mongoose models containing hidden query methods) across boundary props.

### Code Example
\`\`\`typescript
// Safe serialization mapper
export function serializeUser(dbUser: any) {
  return {
    id: String(dbUser._id),
    email: dbUser.email,
    createdAt: dbUser.createdAt.toISOString() // Convert date to ISO string
  };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সার্ভার থেকে ক্লায়েন্টে ডাটা পাঠানোর সময় প্রোটোকলকে নেটওয়ার্কে ট্রান্সফার করার জন্য স্ট্রিং রূপ দিতে হয়।
- **অনুমোদিত**: স্ট্রিং, নাম্বার, বুলিয়ান, নাল, অ্যারে, প্লেইন অবজেক্ট এবং প্রমিস।
- **অননুমোদিত**: ফাংশন, ক্লাস নোড, সিম্বল এবং ডম নোড।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি আর্টিকেলের ডেট অবজেক্ট সরাসরি ক্লায়েন্টে পাঠালে তা ক্র্যাশ করবে। ক্লায়েন্টে পাঠানোর আগে এটিকে ISO স্ট্রিং করে নিতে হবে: \`date.toISOString()\`।

### উত্তম অনুশীলন (Best Practice)
ডাটাবেজের জটিল অবজেক্টগুলোকে প্লেইন ফ্ল্যাট অবজেক্টে রূপান্তর করে পাস করান।

### সাধারণ ভুলসমূহ (Common Mistakes)
Mongoose-এর মডেল অবজেক্ট সরাসরি প্রপ হিসেবে পাঠানো যা ভেতরে অনেক ইন্টারনাল ডাটাবেজ কানেকশন মেথড ধরে রাখে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// সেফ সিরিয়ালাইজেশন কনভার্ট ফাংশন
export function serializeUser(dbUser: any) {
  return {
    id: String(dbUser._id),
    email: dbUser.email,
    createdAt: dbUser.createdAt.toISOString() // ডেটকে স্ট্রিং বানানো হচ্ছে
  };
}
\`\`\``
  },
  {
    id: 'react-81',
    title: 'Explain the React 19 useActionState hook for form submittal states.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'useActionState', 'FormActions'],
    enAnswer: 'useActionState is a React 19 hook that wraps form action handlers, returning the current form state, the formAction trigger, and a pending boolean state.',
    bnAnswer: 'useActionState (পূর্বে useFormState) রিঅ্যাক্ট ১৯ এর একটি হুক যা ফর্ম অ্যাকশন হ্যান্ডলারকে র‍্যাপ করে ফর্মের বর্তমান রেসপন্স স্টেট এবং লোডিং (pending) ট্র্যাকিং রিটার্ন করে।',
    enExplanation: `### Explanation
React 19 native form actions support asynchronous execution. \`useActionState\` manages status, error returns, and pending loaders natively without manually managing isLoading states.

### Real-World Example
Signing in a user. Submitting a login credentials form triggers the backend server action; the button shows a "Submitting..." text automatically while processing.

### Best Practice
Use React 19 Server Actions combined with \`useActionState\` to support progressive enhancement (forms working even before client-side JS hydrates).

### Common Mistakes
Trying to manage loaders manually with local state flags instead of utilizing the returned \`isPending\` flag.

### Code Example
\`\`\`tsx
import { useActionState } from 'react';

async function updateProfile(prevState: any, formData: FormData) {
  const name = formData.get('name');
  if (!name) return { error: 'Name is required' };
  
  // Async simulation
  await new Promise(r => setTimeout(r, 1000));
  return { success: true };
}

export function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, null);

  return (
    <form action={formAction} className="space-y-2">
      <input name="name" className="border p-2" />
      <button type="submit" disabled={isPending} className="bg-indigo-600 text-white p-2">
        {isPending ? 'Updating...' : 'Save Changes'}
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ১৯ এ ফর্ম অ্যাকশন ডিরেক্ট অ্যাসিনক্রোনাস কাজ সাপোর্ট করে। \`useActionState\` ফর্মের রেসপন্স স্ট্যাটাস, এরর এবং লোডিং স্টেট আলাদা কোনো ঝামেলা ছাড়াই ম্যানেজ করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লগইন ফর্ম সাবমিশন। ইউজার ক্রেডেনশিয়াল দিলে ব্যাকএন্ড সার্ভার অ্যাকশন ট্রিগার হয় এবং আপডেট চলাকালীন বাটনটি অটোমেটিক "Updating..." লেখা দেখায়।

### উত্তম অনুশীলন (Best Practice)
প্রোগ্রেসিভ এনহান্সমেন্টের (জাভাস্ক্রিপ্ট লোড হওয়ার আগেই ফর্ম কাজ করা) সুবিধা পাওয়ার জন্য রিঅ্যাক্ট ১৯ সার্ভার অ্যাকশনের সাথে এটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
হুকের দেয়া \`isPending\` ভ্যালু ব্যবহার না করে আলাদা স্টেট দিয়ে ম্যানুয়ালি লোডার টগল করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useActionState } from 'react';

async function updateProfile(prevState: any, formData: FormData) {
  const name = formData.get('name');
  if (!name) return { error: 'নাম আবশ্যক' };
  
  // অ্যাসিনক্রোনাস কাজ সিমুলেশন
  await new Promise(r => setTimeout(r, 1000));
  return { success: true };
}

export function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, null);

  return (
    <form action={formAction} className="space-y-2">
      <input name="name" className="border p-2" />
      <button type="submit" disabled={isPending} className="bg-indigo-600 text-white p-2">
        {isPending ? 'আপডেট হচ্ছে...' : 'পরিবর্তন সংরক্ষণ করুন'}
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
\`\`\``
  },
  {
    id: 'react-82',
    title: 'Explain the React 19 useFormStatus hook for pending indicators.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'useFormStatus', 'FormActions'],
    enAnswer: 'useFormStatus is a React 19 hook that accesses the status details of the parent form context, returning pending status, action data, and request methods.',
    bnAnswer: 'useFormStatus রিঅ্যাক্ট ১৯ এর একটি হুক যা প্যারেন্ট ফর্মের সাবমিশন স্ট্যাটাস নোড ট্র্যাক করে তার পেন্ডিং অবস্থা এবং প্রেরিত ডাটা চাইল্ড বাটনকে জানায়।',
    enExplanation: `### Explanation
\`useFormStatus\` reads status from the parent context. Because of this, it must be called inside a component that is nested *under* the \`<form>\` tag, not inside the component declaring the form itself. It helps decouple submit button loading states from parent form code.

### Real-World Example
Creating a reusable submit button widget. The button automatically changes its icon to a loading spinner when any parent form begins sending data.

### Best Practice
Create isolated sub-components for form controls (like SubmitButton) to utilize \`useFormStatus\` cleaner.

### Common Mistakes
Calling \`useFormStatus\` in the same component that renders the \`<form>\` tag, which returns undefined status.

### Code Example
\`\`\`tsx
import { useFormStatus } from 'react-dom';

// Child component under the form tag
export function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="p-2 bg-indigo-600 text-white">
      {pending ? 'Saving...' : 'Submit Form'}
    </button>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`useFormStatus\` প্যারেন্ট কনটেক্সট থেকে তথ্য সংগ্রহ করে। এ কারণে হুকটি অবশ্যই \`<form>\` ট্যাগের *ভেতরে* থাকা কোনো চাইল্ড কম্পোনেন্টের বডিতে কল করতে হবে, ফর্ম ডিক্লেয়ার করা ফাইলটিতে নয়। এটি সাবমিট বাটনের লোডিং অবস্থা প্যারেন্ট থেকে আলাদা করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি রিইউজেবল সাবমিট বাটন। যখনই ওই বাটনের প্যারেন্ট ফর্মটি সাবমিট হওয়া শুরু করবে, বাটনটি নিজে থেকেই তার রূপ বদলে লোডিং স্পিনার শো করাবে।

### উত্তম অনুশীলন (Best Practice)
বাটন নোডটি আলাদা কম্পোনেন্ট হিসেবে ফাইল করুন যাতে এটি সহজে প্যারেন্ট ফর্মের পেন্ডিং স্ট্যাটাস রিড করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
যে কম্পোনেন্ট ফাইলে \`<form>\` ডিক্লেয়ার করা হয়েছে ঠিক সেই ফাইলের রুট লেভেলে হুকটি কল করা, যা কোনো পেন্ডিং স্ট্যাটাস রিটার্ন করবে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useFormStatus } from 'react-dom';

// ফর্মের ভেতরে নেস্টেড চাইল্ড বাটন নোড
export function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="p-2 bg-indigo-600 text-white">
      {pending ? 'সংরক্ষণ হচ্ছে...' : 'সাবমিট করুন'}
    </button>
  );
}
\`\`\``
  },
  {
    id: 'react-83',
    title: 'Explain the React 19 useOptimistic hook for instant UI updates.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'useOptimistic', 'OptimisticUpdates'],
    enAnswer: 'useOptimistic is a React 19 hook that lets you render an optimistic state during async actions, reverting back to the actual state if the action fails.',
    bnAnswer: 'useOptimistic রিঅ্যাক্ট ১৯ এর একটি হুক যা অ্যাসিনক্রোনাস কাজ চলাকালীন সাথে সাথে স্ক্রিনে একটি প্রত্যাশিত বা অপটিমিস্টিক স্টেট দেখায় এবং কাজ ফেইল করলে আগের স্টেটে ফেরত যায়।',
    enExplanation: `### Explanation
Optimistic updates make UIs feel responsive by assuming success. \`useOptimistic\` accepts the source state and returns a temporary state. During async actions (using startTransition), you inject the temporary value, and if the promise fails, React automatically rolls back the change.

### Real-World Example
A social media like button. When the user clicks "Like", the icon turns red immediately. In the background, the API request executes; if the API fails, the icon color rolls back to grey.

### Best Practice
Pair \`useOptimistic\` with async form action transactions to simplify error recovery.

### Common Mistakes
Mutating the parent state inside the action function before resolving the API, defeating the purpose of the temporary status.

### Code Example
\`\`\`tsx
import { useOptimistic, startTransition, useState } from 'react';

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  
  // Custom reducer for optimistic value changes
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    likes,
    (state, newLike: number) => state + newLike
  );

  const handleLike = async () => {
    startTransition(async () => {
      setOptimisticLikes(1); // Optimistically increment by 1
      try {
        await fetch('/api/like', { method: 'POST' });
        setLikes(prev => prev + 1); // Confirm permanent update
      } catch {
        // Automatically rolls back if error is caught
      }
    });
  };

  return <button onClick={handleLike}>Likes: {optimisticLikes}</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
অপটিমিস্টিক আপডেট অ্যাপকে অনেক ফাস্ট দেখায়। \`useOptimistic\` সোর্স স্টেট গ্রহণ করে এবং একটি সাময়িক স্টেট দেয় যা অ্যাকশন এরর খেলে পূর্বাবস্থায় ফিরে যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ফেসবুকে রিঅ্যাকশন বা লাইক বাটন। ইউজার ক্লিক করলে সাথে সাথে বাটনটি কালারড হয়ে যায়। ব্যাকগ্রাউন্ডে এপিআই কল চলতে থাকে; যদি নেটওয়ার্ক ফেইল করে তবে লাইকটি রিমুভ হয়ে যায়।

### উত্তম অনুশীলন (Best Practice)
রুলস অফ এরর রিকভারি সহজ রাখতে \`useOptimistic\` কে অ্যাসিনক্রোনাস ফর্ম অ্যাকশনের সাথে লিঙ্ক করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যাসিনক্রোনাস এপিআই সফল হওয়ার আগেই সরাসরি প্যারেন্ট স্টেট মিউট্রেট করে ফেলা, যা টেম্পোরারি ফলো নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useOptimistic, startTransition, useState } from 'react';

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  
  // অপটিমিস্টিক চেঞ্জের জন্য হুক ডিক্লেয়ারেশন
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    likes,
    (state, newLike: number) => state + newLike
  );

  const handleLike = async () => {
    startTransition(async () => {
      setOptimisticLikes(1); // সাময়িকভাবে ১ বাড়ানো হচ্ছে
      try {
        await fetch('/api/like', { method: 'POST' });
        setLikes(prev => prev + 1); // কনফার্ম স্থায়ী আপডেট
      } catch {
        // এরর হলে হুকটি নিজে থেকেই স্টেট আগের জায়গায় নিয়ে যাবে
      }
    });
  };

  return <button onClick={handleLike}>লাইক: {optimisticLikes}</button>;
}
\`\`\``
  },
  {
    id: 'react-84',
    title: 'Explain the React 19 use() hook for Promises and Context consumption.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'useHook', 'Promises', 'Context'],
    enAnswer: 'The use() hook is a React 19 API that resolves Promises and Context values dynamically during rendering, and can be called inside conditionals and loops.',
    bnAnswer: 'use() হুক রিঅ্যাক্ট ১৯ এর একটি এপিআই যা রেন্ডারের সময় প্রমিস এবং কনটেক্সট ডাইনামিকালি রিড করতে সাহায্য করে এবং কন্ডিশন বা লুপের ভেতরেও কল করা যায়।',
    enExplanation: `### Explanation
Unlike standard React hooks (like \`useContext\`) which must run at the root of a component function, \`use()\` is a flexible compiler API. If passed a Promise, React pauses rendering and yields to Suspense until the promise resolves. If passed a Context, it reads context values conditionally.

### Real-World Example
Conditionally reading a theme context only if a specific profile setting is enabled, avoiding subscribing to theme changes when not required.

### Best Practice
Combine \`use()\` with Suspense fallback boundaries when fetching data at the component level to simplify loader UI templates.

### Common Mistakes
Trying to pass a promise created inside the render body to \`use()\`. This causes a rendering loop since a new promise reference is created on every render. Always create promises in server components or cache them.

### Code Example
\`\`\`tsx
import { use, createContext } from 'react';

const ThemeContext = createContext('light');

export function DynamicPanel({ shouldShowTheme }: { shouldShowTheme: boolean }) {
  if (shouldShowTheme) {
    // Correct: use() hook can be placed inside an IF statement
    const theme = use(ThemeContext);
    return <div className={\`theme-\${theme}\`}>Theme Settings Visible</div>;
  }

  return <div>Standard Panel</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ হুকের বিপরীতে \`use()\` কম্পাইল-টাইম মেকানিজম যা রুট লেভেল বাউন্ডারি মানে না। এটি কন্ডিশন বা লুপের ভেতরেও কাজ করতে পারে। এর ভেতর প্রমিস পাস করলে এটি প্রমিস সমাধান না হওয়া পর্যন্ত সাসপেন্স বাউন্ডারি ট্রিগার করে লোডার দেখায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কন্ডিশনের ওপর ভিত্তি করে শুধুমাত্র প্রোফাইল পেজে থিম কনটেক্সট সাবস্ক্রাইব করা, যাতে হোমপেজে অহেতুক থিম চেঞ্জের রি-রেন্ডার এড়ানো যায়।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্ট লেভেলে ডাটা ফেচ করতে প্রমিসের সাথে সাসপেন্স যুক্ত করে এটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডার বডির ভেতরেই প্রমিস ডিক্লেয়ার করে তা \`use()\` হুকে পাস করা। এটি ইনফিনিট লুপ তৈরি করে কারণ প্রতি রেন্ডারে নতুন প্রমিস রেফারেন্স তৈরি হয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { use, createContext } from 'react';

const ThemeContext = createContext('light');

export function DynamicPanel({ shouldShowTheme }: { shouldShowTheme: boolean }) {
  if (shouldShowTheme) {
    // সঠিক: use() হুকটি IF কন্ডিশনের ভেতরে ব্যবহার করা হয়েছে
    const theme = use(ThemeContext);
    return <div className={\`theme-\${theme}\`}>থিম প্যানেল সচল</div>;
  }

  return <div>সাধারণ প্যানেল</div>;
}
\`\`\``
  },
  {
    id: 'react-85',
    title: 'Explain React 19 Ref forwarding improvements (Removal of forwardRef).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'Refs', 'forwardRef'],
    enAnswer: 'In React 19, ref is passed directly as a standard component prop, deprecating the forwardRef wrapper utility entirely.',
    bnAnswer: 'রিঅ্যাক্ট ১৯ এ ref প্রপার্টিটি সরাসরি সাধারণ প্রপস হিসেবে চাইল্ড কম্পোনেন্টে পাঠানো যায়, যার ফলে পুরোনো forwardRef ইউটিলিটিটির আর কোনো প্রয়োজন নেই।',
    enExplanation: `### Explanation
Prior to React 19, DOM refs could not be passed as normal props; you had to wrap child components inside the complex \`forwardRef\` API wrapper. In React 19, ref is normalized as a first-class prop, simplifying type layouts and components.

### Real-World Example
Passing a reference to a custom text input modal from a parent form controller to trigger focus.

### Best Practice
Adopt standard prop layouts for refs in new React 19 structures, omitting any legacy \`forwardRef\` wrappers.

### Common Mistakes
Trying to use \`forwardRef\` in React 19 codebases, adding unnecessary wrapper code.

### Code Example
\`\`\`tsx
import { useRef } from 'react';

interface InputProps {
  label: string;
  ref: React.RefObject<HTMLInputElement | null>; // Direct ref type support in props
}

// Child Component receives ref directly as prop
function CustomInput({ label, ref }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} className="border p-2" />
    </div>
  );
}

export function ParentForm() {
  const myRef = useRef<HTMLInputElement>(null);
  return <CustomInput label="Username" ref={myRef} />;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সংস্করণ ১৯-এর পূর্বে ref কোনো সাধারণ প্রপের মতো পাঠানো যেত না; তার জন্য চাইল্ড কম্পোনেন্টকে \`forwardRef\` এ পিষ্ট করতে হতো। রিঅ্যাক্ট ১৯ এ ref কে ফার্স্ট-ক্লাস প্রপ করা হয়েছে যা টাইপ ডেফিনিশন ও কোড স্ট্রাকচার সহজ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম টেক্সট ইনপুট নোডে প্যারেন্ট থেকে ডিরেক্ট রেফ পাস করা যাতে বাটনে ক্লিক করলে ইনপুটে ফোকাস চলে যায়।

### উত্তম অনুশীলন (Best Practice)
রিঅ্যাক্ট ১৯ প্রজেক্টে সরাসরি প্রপের মাধ্যমে রেফ পাস করুন এবং পুরোনো \`forwardRef\` ব্যবহার বাদ দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট ১৯ কোডবেসে অহেতুক \`forwardRef\` ব্যবহার করে কোড জটিল করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useRef } from 'react';

interface InputProps {
  label: string;
  ref: React.RefObject<HTMLInputElement | null>; // প্রপস এ সরাসরি ref টাইপ সাপোর্ট
}

// চাইল্ড কম্পোনেন্ট প্রপস হিসেবে সরাসরি ref রিসিভ করছে
function CustomInput({ label, ref }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} className="border p-2" />
    </div>
  );
}

export function ParentForm() {
  const myRef = useRef<HTMLInputElement>(null);
  return <CustomInput label="ইউজারনেম" ref={myRef} />;
}
\`\`\``
  },
  {
    id: 'react-86',
    title: 'Explain React 19 Cleanup functions in Ref callbacks.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'Refs', 'Cleanup'],
    enAnswer: 'React 19 ref callback functions can return a cleanup callback that executes automatically when the component unmounts, replacing legacy null checking.',
    bnAnswer: 'রিঅ্যাক্ট ১৯ এর রেফ কলব্যাক ফাংশনগুলো একটি ক্লিনআপ কলব্যাক রিটার্ন করতে পারে যা কম্পোনেন্ট আনমাউন্ট হওয়ার সময় স্বয়ংক্রিয়ভাবে নোডটি রিলিজ করায়।',
    enExplanation: `### Explanation
Previously, if you passed a callback ref like \`<div ref={el => { ... }}\` to run setup logic, React invoked the callback twice: once with the DOM node on mount, and once with \`null\` on unmount. React 19 simplifies this: you return a cleanup function directly from the callback, which is invoked automatically when unmounting.

### Real-World Example
Attaching a custom ResizeObserver to a text area box. You initialize it inside the ref callback, and return the observer disconnect trigger as the cleanup function.

### Best Practice
Use ref callbacks to run node-specific registrations, and return cleanup functions directly to avoid memory leaks.

### Common Mistakes
Forgetting that returning a cleanup function is only supported in React 19+, throwing errors in older versions.

### Code Example
\`\`\`tsx
export function ObsCard() {
  return (
    <div 
      ref={(node) => {
        if (!node) return;
        
        console.log('Mounting node:', node);
        const observer = new ResizeObserver(() => console.log('Resized'));
        observer.observe(node);

        // Correct: Return cleanup callback directly
        return () => {
          console.log('Node unmounted, cleaning observer');
          observer.disconnect();
        };
      }}
      className="p-4 border"
    >
      Resizable Observation Node
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
পূর্বে রেফ কলব্যাক ব্যবহারের সময় রিঅ্যাক্ট মাউন্টের সময় একবার নোড পাস করতো এবং আনমাউন্টের সময় \`null\` পাঠাতো। রিঅ্যাক্ট ১৯ এ ডিরেক্ট ইফেক্ট মেকানিজম আনা হয়েছে: কলব্যাক নোড পাওয়ার পর কাজ সম্পন্ন করে একটি ক্লিনআপ ফাংশন রিটার্ন করতে পারে যা আনমাউন্টের সময় একা একাই চলে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি টেক্সট এরিয়া বক্সে ResizeObserver যুক্ত করা। রেফ কলব্যাকে অবজারভার চালু করা এবং তার রিটার্ন ব্লকে অবজারভার বন্ধ বা ডিসকানেক্ট মেথড রিটার্ন করা।

### উত্তম অনুশীলন (Best Practice)
নোড-স্পেসিফিক থার্ড পার্টি প্লাগইন ইনিশিয়ালাইজ করতে রেফ কলব্যাক ব্যবহার করে সাথে সাথে তার ক্লিনআপ রিটার্ন লিখে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট ১৯ এর নিচের ভার্সনে এই ক্লিনআপ রিটার্ন ফরম্যাট ব্যবহার করা যা এরর ঘটাবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
export function ObsCard() {
  return (
    <div 
      ref={(node) => {
        if (!node) return;
        
        console.log('ডমে নোড যুক্ত হয়েছে:', node);
        const observer = new ResizeObserver(() => console.log('সাইজ পরিবর্তন হয়েছে'));
        observer.observe(node);

        // সঠিক: সরাসরি ক্লিনআপ কলব্যাক রিটার্ন করা হচ্ছে
        return () => {
          console.log('আনমাউন্টের সময় অবজারভার ডিসকানেক্ট করা হচ্ছে');
          observer.disconnect();
        };
      }}
      className="p-4 border"
    >
      সাইজ অবজারভার নোড
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-87',
    title: 'Explain React 19 Context as a Provider (Deprecation of Context.Provider).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'ContextAPI', 'Provider'],
    enAnswer: 'React 19 lets you render context objects directly as providers (e.g. <Theme> instead of <Theme.Provider>), deprecating the Provider suffix.',
    bnAnswer: 'রিঅ্যাক্ট ১৯ এ সরাসরি কনটেক্সট অবজেক্টটিকেই প্রোভাইডার ট্যাগ হিসেবে রেন্ডার করা যায় (যেমন <Theme>), ফলে পুরোনো .Provider সাফিক্সটির প্রয়োজন ফুরিয়েছে।',
    enExplanation: `### Explanation
Prior to React 19, a context created using \`createContext\` required writing \`<ThemeContext.Provider>\` to supply values down the tree. React 19 simplifies the JSX template: you render \`<ThemeContext>\` directly. The old \`.Provider\` is deprecated.

### Real-World Example
Refactoring global state structures to support React 19 context rendering style, removing the suffix tag nesting layers.

### Best Practice
Use the context object tag directly in new React 19 applications to keep your JSX clean and modern.

### Common Mistakes
Forgetting that legacy codebases (<19) do not support direct context tags, which causes compiler crashes.

### Code Example
\`\`\`tsx
import { createContext, useState, ReactNode } from 'react';

const Theme = createContext('light');

export function App({ children }: { children: ReactNode }) {
  const [theme] = useState('dark');

  return (
    // Correct: Rendering Theme context directly as provider in React 19
    <Theme value={theme}>
      {children}
    </Theme>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ১৯ সংস্করণের আগে \`createContext\` ব্যবহারের পর \`<ThemeContext.Provider>\` লিখতে হতো। ১৯ ভার্সন JSX সিমপ্লিফাই করেছে: সরাসরি \`<ThemeContext>\` লিখলেই তা প্রোভাইডার হিসেবে রিড হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় প্রোফাইল অ্যাপের কনটেক্সট রিকনফিগার করা এবং সাফিক্স নোডগুলো রিমুভ করে কোড ক্লিনিং করা।

### উত্তম অনুশীলন (Best Practice)
রিঅ্যাক্ট ১৯ প্রজেক্টগুলোতে সরাসরি ডিরেক্ট ট্যাগ ব্যবহার করুন কোড সতেজ রাখতে।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট ১৯ এর নিচের ভার্সনে সরাসরি কনটেক্সট অবজেক্ট ট্যাগ ব্যবহার করা, যা ব্রাউজার কম্পাইল করতে পারবে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { createContext, useState, ReactNode } from 'react';

const Theme = createContext('light');

export function App({ children }: { children: ReactNode }) {
  const [theme] = useState('dark');

  return (
    // সঠিক: রিঅ্যাক্ট ১৯ এ সরাসরি Theme কনটেক্সট প্রোভাইডার হিসেবে রেন্ডার হচ্ছে
    <Theme value={theme}>
      {children}
    </Theme>
  );
}
\`\`\``
  },
  {
    id: 'react-88',
    title: 'Explain React 19 native Document Metadata support.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React19', 'Metadata', 'SEO'],
    enAnswer: 'React 19 supports rendering document metadata tags (title, meta, link) directly inside component trees, automatically placing them in the document head.',
    bnAnswer: 'রিঅ্যাক্ট ১৯ এ কম্পোনেন্টের ভেতরেই সরাসরি মেটাডাটা ট্যাগ (<title>, <meta>, <link>) ব্যবহার করা যায়, এবং রিঅ্যাক্ট নিজেই এগুলোকে ডকুমেন্টের <head> ট্যাগে পাঠিয়ে দেয়।',
    enExplanation: `### Explanation
In older React versions, you had to use third-party libraries like \`react-helmet\` to dynamically update the page title or meta description for SEO. React 19 natively parses these tags during rendering and hoists them into the document's \`<head>\`, supporting both client-side routes and server-side rendering (SSR) pipelines natively.

### Real-World Example
A news article page component. Inside the component body, rendering \`<title>{article.title}</title>\` updates the tab title instantly when the component mounts.

### Best Practice
Utilize native head tags inside route components for SEO configurations, eliminating heavy third-party metadata packages.

### Common Mistakes
Thinking you need to import helper modules or execute DOM updates like \`document.title = ...\` inside useEffect hooks in React 19.

### Code Example
\`\`\`tsx
export function ProductPage() {
  return (
    <article className="p-6">
      {/* React 19 natively hoists these tags to the document head */}
      <title>Premium React Course</title>
      <meta name="description" content="Learn advanced React 19 features." />
      <link rel="canonical" href="https://devprep.io/react" />

      <h1>Advanced React Course</h1>
      <p>Course content description goes here...</p>
    </article>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
পূর্বে পেজের টাইটেল বা মেটা ট্যাগ পরিবর্তন করতে \`react-helmet\` লাইব্রেরি ব্যবহার করা লাগতো। রিঅ্যাক্ট ১৯ এই ঝামেলা দূর করেছে: কম্পোনেন্টের বডিতে মেটা ট্যাগ বা টাইটেল লিখলে এটি অটোমেটিক ডকুমেন্টের \`<head>\` ট্যাগের ভেতর প্রতিস্থাপন করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি খবরের পেজ নোড। খবরের ভেতরেই সরাসরি \`<title>{article.title}</title>\` লিখে রাখা যা খবরটি ওপেন করার সাথে সাথেই ব্রাউজারের ট্যাবের টাইটেল বদলে দিবে।

### উত্তম অনুশীলন (Best Practice)
এসইও (SEO) ফ্রেন্ডলি পেজ ডিজাইনে সরাসরি মেটাডাটা ট্যাগ ব্যবহার করুন এবং বাড়তি লাইব্রেরির ব্যবহার পরিহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট ১৯ এ কাজ করার সময়ও মেটা ডাটার জন্য অহেতুক \`document.title = ...\` ইফেক্ট নোড দিয়ে করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
export function ProductPage() {
  return (
    <article className="p-6">
      {/* রিঅ্যাক্ট ১৯ মেটা ট্যাগগুলোকে অটোমেটিক হেডারে পাঠিয়ে দিবে */}
      <title>প্রিমিয়াম রিঅ্যাক্ট কোর্স</title>
      <meta name="description" content="রিঅ্যাক্ট ১৯ এর অ্যাডভান্সড ফিচারসমূহ শিখুন।" />
      <link rel="canonical" href="https://devprep.io/react" />

      <h1>অ্যাডভান্সড রিঅ্যাক্ট কোর্স</h1>
      <p>কোর্সের বিষয়বস্তুর বিবরণ...</p>
    </article>
  );
}
\`\`\``
  },
  {
    id: 'react-89',
    title: 'Explain Fiber Architecture and reconciliation phases (Reconciler vs Renderer).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Fiber', 'Reconciliation', 'Architecture'],
    enAnswer: 'Fiber is Reacts core reconciliation engine. It divides work into fiber nodes, separating the Reconciler (computes tree differences) from the Renderer (draws DOM nodes).',
    bnAnswer: 'ফাইবার হলো রিঅ্যাক্টের মূল রিকনসিলিয়েশন ইঞ্জিন। এটি রিকনসিলার (যা আগের ও পরের ট্রির তফাত হিসাব করে) এবং রেন্ডারার (যা ডমে নোড ড্রইং করায়) এই দুই ভাগকে আলাদা করে।',
    enExplanation: `### Explanation
React Fiber is a complete rewrite of the core reconciliation algorithm.
- **Fiber Node**: A JavaScript object containing component state, props, and pointers, acting as a unit of work.
- **Reconciler**: Calculates tree differences. This phase is asynchronous and interruptible in Concurrent mode.
- **Renderer**: Applies changes to the target environment (e.g., \`react-dom\` for web, \`react-native\` for mobile). This phase is synchronous and blocking.

### Real-World Example
In a high-resolution canvas application, the Reconciler schedules work priorities (Lanes). High-priority user input events interrupt low-priority canvas background updates, preserving page smoothness.

### Best Practice
Design components without deep side-effect paths to ensure the Fiber engine can pause and schedule rendering cycles optimally.

### Common Mistakes
Confusing reconciler jobs with browser painting cycles, expecting rendering phase computations to always reflect synchronously in the DOM.

### Code Example
\`\`\`tsx
// React Fiber divides components into a tree of fiber nodes
// enabling cooperative scheduling (Time Slicing) on top of browser frames.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ফাইবার (Fiber) হলো রিকনসিলিয়েশন অ্যালগরিদমের রি-রাইট সংস্করণ।
- **ফাইবার নোড**: একটি জেএস অবজেক্ট যা কাজের একটি একক ইউনিট হিসেবে কাজ করে।
- **রিকনসিলার**: ট্রির তফাত হিসাব করে। এই পর্যায়টি পজ ও রিস্টার্ট করা যায়।
- **রেন্ডারার**: টার্গেট মাধ্যমে (যেমন ব্রাউজার বা মোবাইল স্ক্রিন) ডিরেক্ট নোড বসায়। এটি সিনক্রোনাস ও নন-ইন্টারাপ্টিবল।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চার্ট অ্যানিমেশন চলার সময় ইউজারের কিবোর্ড ইনপুটকে টপ প্রায়োরিটি দিয়ে রেন্ডারিং লেন (Lanes) কন্ট্রোল করা।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্ট ফ্লো ক্লিন রাখুন যাতে ফাইবার শিডিউলার সহজে কাজ ডিস্ট্রিবিউট করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভাবা যে রেন্ডার ফেজের সব কাজ সাথে সাথে ডমে রাইট হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// রিঅ্যাক্ট ফাইবার ডম নোডগুলোর ওপর কো-অপারেটিভ শিডিউলিং (time slicing)
// সেট করতে সাহায্য করে যা স্ক্রিন স্মুথ রাখে।
\`\`\``
  },
  {
    id: 'react-90',
    title: 'Explain Fiber Node structures and traversal pointers.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Fiber', 'UnderTheHood', 'DataStructures'],
    enAnswer: 'A Fiber node is a structure that links to other nodes via three pointers: child (first child), sibling (next sibling), and return (parent node).',
    bnAnswer: 'একটি ফাইবার নোড ৩টি পয়েন্টার ধারণ করে অন্য নোডের সাথে লিঙ্ক করার জন্য: child (প্রথম সন্তান), sibling (পার্শ্ববর্তী ভাই/বোন), এবং return (প্যারেন্ট নোড)।',
    enExplanation: `### Explanation
Traditional reconciliation walked the virtual DOM tree recursively, which could not be interrupted. Fiber changes the tree into a linked list structure using traversal pointers:
- \`child\`: Points to the first nested child element.
- \`sibling\`: Points to the next sibling element at the same level.
- \`return\`: Points to the parent fiber node (where execution returns).
This allows React to pause traversal, memorize the current node pointer, and resume work later.

### Real-World Example
In a nested list component: \`<ul><li>Item 1</li><li>Item 2</li></ul>\`. The \`ul\` fiber points to \`li (Item 1)\` via its **child** pointer. \`Item 1\` points to \`Item 2\` via its **sibling** pointer. Both list items point back to \`ul\` via their **return** pointer.

### Best Practice
Understand traversal to write optimized layouts. Flat component structures have smaller sibling link pointer sizes, resolving faster.

### Common Mistakes
Assuming React walks the tree recursively using traditional stack calls, which would block time slicing.

### Code Example
\`\`\`typescript
// Conceptual structure of a Fiber Node
interface FiberNode {
  type: any;
  key: string | null;
  stateNode: any; // Reference to actual DOM node or class instance
  
  // Link Pointers
  child: FiberNode | null;
  sibling: FiberNode | null;
  return: FiberNode | null; // Parent
  
  memoizedState: any; // Linked list of hooks
  lanes: number; // Priority lanes
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
পূর্বে রিকনসিলার রিকার্সিভ উপায়ে ট্রি ট্রাভার্স করতো যা মাঝপথে থামানো যেত না। ফাইবার ট্রিটিকে একটি লিঙ্কড লিস্টে রূপান্তর করে এই ৩টি পয়েন্টার দিয়ে:
- \`child\`: প্রথম চাইল্ড নোডকে পয়েন্ট করে।
- \`sibling\`: একই লেভেলের পরবর্তী নোডকে পয়েন্ট করে।
- \`return\`: প্যারেন্ট নোডকে পয়েন্ট করে।
এর ফলে রিঅ্যাক্ট কাজ বন্ধ করে পয়েন্টার সেভ রাখতে পারে এবং পরে সেখান থেকেই কাজ শুরু করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
\`<ul><li>Item 1</li><li>Item 2</li></ul>\` এ \`ul\` এর child পয়েন্টার ধরে \`Item 1\` এ যায়। \`Item 1\` এর sibling ধরে \`Item 2\` এ যায়। উভয়ই return ধরে পুনরায় \`ul\` এ ব্যাক করতে পারে।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্ট লেআউট যতটা সম্ভব ফ্ল্যাট রাখুন যাতে অপ্রয়োজনীয় নেস্টেড পয়েন্টারের জটলা এড়ানো যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে রিঅ্যাক্ট ব্রাউজারের কল স্ট্যাকের সাহায্যে রিকার্সিভলি ট্রি ট্রাভার্স করে যা রানটাইম ব্লক করে দিতে পারতো।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ফাইবার নোডের কনসেপচুয়াল টাইপ স্ট্রাকচার
interface FiberNode {
  type: any;
  key: string | null;
  stateNode: any; // আসল ডম নোডের রেফারেন্স
  
  // লিঙ্ক পয়েন্টারসমূহ
  child: FiberNode | null;
  sibling: FiberNode | null;
  return: FiberNode | null; // প্যারেন্ট নোড
  
  memoizedState: any; // হুকের লিঙ্কড লিস্ট
  lanes: number; // প্রায়োরিটি লেন
}
\`\`\``
  },
  {
    id: 'react-91',
    title: 'Explain the React Scheduler package (Work Loop, priority levels, and lane model).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Scheduler', 'ConcurrentMode', 'Lanes'],
    enAnswer: 'The Scheduler package coordinates rendering priorities. It uses the Lane Model (31 binary bits representing priority levels) and a Work Loop to run tasks based on urgency.',
    bnAnswer: 'শিডিউলার প্যাকেজ রেন্ডারিংয়ের কাজগুলোর অগ্রাধিকার নিয়ন্ত্রণ করে। এটি লেন মডেল (৩১টি বাইনারি বিট) এবং একটি ওয়ার্ক লুপের সাহায্যে জরুরি কাজ আগে রান করায়।',
    enExplanation: `### Explanation
The Scheduler manages execution scheduling. It uses a **Work Loop** that checks if the browser frame time (5ms) is exhausted before yielding control. The **Lane Model** replaced legacy priority levels, using 31 lanes (binary bits) to represent concurrent updates. This allows updates to be prioritized, merged, or overridden dynamically.

### Real-World Example
A page fetches search results. While loading, the user clicks "Cancel". The cancellation action is scheduled on a high-priority lane, instantly stopping the low-priority fetch render cycle.

### Best Practice
Minimize blocking synchronous calculations on the main thread. Delegate heavy computations to Web Workers to keep the scheduler responsive.

### Common Mistakes
Calling state updates repeatedly in short intervals (like drag events) without debouncing, overwhelming the scheduler.

### Code Example
\`\`\`tsx
// React 18+ uses binary bits (Lanes) to categorize update priorities:
// SyncLane: Immediate (typing)
// InputContinuousLane: Mouse movement
// DefaultLane: API data updates
// IdleLane: Background tasks
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
শিডিউলার কাজ ডিস্ট্রিবিউট ও রান করায়। এর **Work Loop** ব্রাউজার ফ্রেমের সময় (৫ মিলি-সেকেন্ড) শেষ হওয়ার আগেই কন্ট্রোল ব্যাক করে দেয়। **Lane Model** ৩১টি বাইনারি বিট ব্যবহার করে সমান্তরাল আপডেট ট্র্যাক করে। এর ফলে একই টাইপের আপডেট একসাথে মার্জ করা বা ক্যানসেল করা সহজ হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটা লোড হওয়ার মাঝখানে ইউজার "Cancel" বাটনে চাপ দিলেন। ক্যানসেল ইভেন্টটি হাই-সবচেয়ে বেশি অগ্রাধিকার লেনে (SyncLane) এসে রানিং লোড প্রসেসটি বাতিল করে দেয়।

### উত্তম অনুশীলন (Best Practice)
অতিরিক্ত প্রসেসিংয়ের কাজগুলো মেইন থ্রেডে না রেখে ওয়েব ওয়ার্কারে পাঠিয়ে দিন যাতে শিডিউলার বাধার মুখে না পড়ে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ড্র্যাগ ইভেন্টের মতো ফাস্ট আপডেটগুলোকে থ্রোটল না করে সরাসরি সেটার দিয়ে চালানো যা শিডিউলার লুপ ফুল করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// রিঅ্যাক্ট ১৮ লেনের মাধ্যমে আপডেট আলাদা করে:
// SyncLane: টাইপিং (সবচেয়ে জরুরি)
// InputContinuousLane: মাউস ড্র্যাগ
// DefaultLane: এপিআই ফেচিং
// IdleLane: ব্যাকগ্রাউন্ড অফ-টাইম প্রসেস
\`\`\``
  },
  {
    id: 'react-92',
    title: 'How do you design a state synchronization hook between Zustand and React Query?',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Zustand', 'ReactQuery', 'Architecture'],
    enAnswer: 'You synchronize state by subscribing to Zustand changes and triggering query cache updates, or by mapping React Query success callbacks (onSuccess) to Zustand setters.',
    bnAnswer: 'Zustand-এর স্টেট পরিবর্তনের লিসনার তৈরি করে রিঅ্যাক্ট কুয়েরির ক্যাশ আপডেট করিয়ে অথবা কুয়েরির সফল কলের পর (onSuccess) প্রাপ্ত ডাটা Zustand-এ সেভ করে এই সিঙ্ক সম্পন্ন করা হয়।',
    enExplanation: `### Explanation
React Query (TanStack Query) manages asynchronous server states (cache, stale times, fetching status). Zustand manages client-side UI states. Synchronizing them is required when server responses (like user profile updates) need to overwrite client UI configurations immediately.

### Real-World Example
Updating the user's avatar image. React Query sends the patch request and, upon success, updates the Zustand global header store to change the avatar icon instantly.

### Best Practice
Maintain a single source of truth. Do not copy server data into Zustand unless you are performing complex client-side calculations or dynamic client transformations.

### Common Mistakes
Creating synchronization loops where Zustand updates trigger React Query fetches, which in turn update Zustand, causing infinite loop cascades.

### Code Example
\`\`\`typescript
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

// Zustand Store
interface UserStore {
  username: string;
  setUsername: (name: string) => void;
}
const useUserStore = create<UserStore>((set) => ({
  username: 'Guest',
  setUsername: (name) => set({ username: name }),
}));

// Sync Hook
export function useSyncUser(userId: string) {
  const setUsername = useUserStore(state => state.setUsername);
  
  const { data } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/user/\${userId}\`).then(res => res.json())
  });

  useEffect(() => {
    if (data?.name) {
      // Sync Query data to Zustand store
      setUsername(data.name);
    }
  }, [data, setUsername]);
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট কুয়েরি সার্ভার ডাটা ও ক্যাশ ম্যানেজ করে আর Zustand লোকাল UI স্টেট ম্যানেজ করে। সার্ভার রেসপন্স (যেমন ইউজারের প্রোফাইল এডিট) সরাসরি লোকাল স্ক্রিনে রিফ্লেক্ট করাতে হলে এদের মধ্যে সমন্বয় বা সিঙ্ক করা দরকার।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজারের প্রোফাইল এডিটের পর রিঅ্যাক্ট কুয়েরি ক্যাশ রি-ভ্যালিডেট করে এবং তার ডেটা সাথে সাথে Zustand গ্লোবাল স্টোরে আপডেট পাঠায়, ফলে হেডার নোডের ছবিও সাথে সাথে বদলে যায়।

### উত্তম অনুশীলন (Best Practice)
ডাটার একটিমাত্র সোর্স অফ ট্রুথ বজায় রাখুন। জটিল ক্লায়েন্ট সাইড লজিক না থাকলে অহেতুক সার্ভার ডাটা Zustand-এ ডুপ্লিকেট করবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
এমন চক্রাকার লুপ তৈরি করা যেখানে Zustand আপডেট কুয়েরি ফেচ ট্রিগার করে এবং কুয়েরি আপডেট আবার Zustand স্টেট ট্রগার করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

// Zustand স্টোর
interface UserStore {
  username: string;
  setUsername: (name: string) => void;
}
const useUserStore = create<UserStore>((set) => ({
  username: 'Guest',
  setUsername: (name) => set({ username: name }),
}));

// সিঙ্ক করার কাস্টম হুক
export function useSyncUser(userId: string) {
  const setUsername = useUserStore(state => state.setUsername);
  
  const { data } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/user/\${userId}\`).then(res => res.json())
  });

  useEffect(() => {
    if (data?.name) {
      // কোয়েরি ডাটা Zustand স্টোরে সিঙ্ক করা হচ্ছে
      setUsername(data.name);
    }
  }, [data, setUsername]);
}
\`\`\``
  },
  {
    id: 'react-93',
    title: 'Explain Custom State Selector Hooks in Redux Toolkit and Zustand.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'StateManagement', 'Selectors', 'Zustand'],
    enAnswer: 'Selector hooks subscribe components only to a specific slice of the state store, preventing re-renders if other unrelated parts of the state change.',
    bnAnswer: 'সিলেক্টর হুক (Selector) কম্পোনেন্টকে শুধুমাত্র স্টোরের একটি নির্দিষ্ট অংশের সাথে যুক্ত করে, যার ফলে অন্যান্য ডাটা পরিবর্তিত হলেও কম্পোনেন্টটি অহেতুক রেন্ডার হয় না।',
    enExplanation: `### Explanation
If you call \`const store = useStore()\` without selector filters, the component subscribes to the *entire* state object. Any modification anywhere in the store triggers a render. Selecting slices like \`const user = useStore(state => state.user)\` uses strict comparison on only the selected property, avoiding unnecessary rendering updates.

### Real-World Example
In a messaging store containing conversation lists and user settings. A component displaying only settings will not re-render when a new chat message arrives if it uses a selector for settings.

### Best Practice
Always use specific selectors. Combine selectors with memoized library features (like \`createSelector\` from Reselect) for complex calculations.

### Common Mistakes
Returning new object literals inside selector functions: \`useStore(state => ({ theme: state.theme }))\`. This recreates a new object reference on every state shift, rendering the component anyway. Always use shallow compare helpers in these cases.

### Code Example
\`\`\`typescript
import { create } from 'zustand';

interface AppStore {
  theme: string;
  count: number;
  increment: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  theme: 'light',
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

// Consuming component using specific selector
export function ThemeDisplay() {
  // Correct: This component will NEVER re-render when count increments
  const theme = useAppStore(state => state.theme);
  return <div>Active Theme: {theme}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সিলেক্টর ফিল্টার ছাড়া পুরো স্টোর কল করলে (\`const store = useStore()\`), স্টোরের যেকোনো একটি পরিবর্তন পুরো কম্পোনেন্ট রি-রেন্ডার করে দেয়। সিলেক্টরের সাহায্যে চাইল্ড কম্পোনেন্ট কেবল তার প্রয়োজনীয় নোডে সাবস্ক্রাইব করে: \`const user = useStore(s => s.user)\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি স্টোরে মেসেজ লিস্ট এবং থিম কাস্টমাইজেশন আছে। যে কম্পোনেন্ট শুধু থিম দেখায় সে মেসেজ আসার সময় আপডেট হবে না যদি সিলেক্টর হুক দিয়ে থিম লক করা থাকে।

### উত্তম অনুশীলন (Best Practice)
সবসময় নির্দিষ্ট মান ধরে সিলেক্ট করুন। জটিল ক্যালকুলেশনের জন্য \`createSelector\` দিয়ে মেমোয়াইজড সিলেক্টর ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সিলেক্টরের ভেতর নতুন অবজেক্ট রিটার্ন করা: \`useStore(s => ({ theme: s.theme }))\`। এটি প্রতিবার নতুন রেফারেন্স তৈরি করায় মেমো চেক ফেইল করে রেন্ডারিং ট্রিগার করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
import { create } from 'zustand';

interface AppStore {
  theme: string;
  count: number;
  increment: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  theme: 'light',
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

// সিলেক্টর দিয়ে নোড কল করার সঠিক নিয়ম
export function ThemeDisplay() {
  // সঠিক: count পরিবর্তন হলে এই কম্পোনেন্টটি কখনই রি-রেন্ডার হবে না
  const theme = useAppStore(state => state.theme);
  return <div>থিম: {theme}</div>;
}
\`\`\``
  },
  {
    id: 'react-94',
    title: 'Explain Portals event bubbling through the React virtual tree (Under-the-hood implementation).',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Portals', 'EventBubbling', 'UnderTheHood'],
    enAnswer: 'React bubbles events through portals using synthetic events. It traces the virtual component parent path to propagate events, ignoring the physical HTML DOM hierarchy.',
    bnAnswer: 'পোর্টালের ভেতরের ইভেন্ট বাবলিং ব্রাউজার ডম নোডের গঠন অনুসরণ করে না। এটি রিঅ্যাক্টের ভার্চুয়াল কম্পোনেন্ট নোড প্যারেন্ট ট্র্যাকিং সিস্টেম অনুসরণ করে সম্পন্ন হয়।',
    enExplanation: `### Explanation
Native browser events bubble based on HTML layout hierarchy. Since portals render nodes under body, native events do not reach the React parent container. React bypasses this by managing events at the root. The synthetic event processor walks up the React virtual fiber tree, not the DOM tree, resolving event handlers along the virtual path.

### Real-World Example
An click-outside handler wrapping a modal page. Clicks inside the body-level portal modal are recognized as clicks *inside* the parent wrapper because the portal component sits nested inside the parent in React code.

### Best Practice
Call \`e.stopPropagation()\` inside portal overlay nodes if you need to prevent click event leakages to parent forms.

### Common Mistakes
Expecting native DOM handlers like \`document.addEventListener\` to register event bubbles along the virtual React path configuration.

### Code Example
\`\`\`tsx
import React from 'react';
import { createPortal } from 'react-dom';

export function ParentWrapper() {
  const handleParentClick = () => {
    // This will execute when child button inside Portal is clicked
    console.log('React virtual event bubble detected!');
  };

  return (
    <div onClick={handleParentClick} className="p-8 border">
      <h3>Parent Container</h3>
      {createPortal(
        <button className="bg-red-500 text-white p-2">
          Click inside Portal
        </button>,
        document.body // physically placed outside the parent div
      )}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
নেটিভ ব্রাউজার ইভেন্ট ডম নোডের অবস্থান মেনে বাবল করে। পোর্টাল বডির নিচে থাকায় ব্রাউজার ইভেন্ট প্যারেন্ট রিঅ্যাক্ট কন্টেইনার পর্যন্ত পৌঁছাতে পারে না। রিঅ্যাক্ট ইভেন্ট ডেলিগেশন প্রসেসর ফাইবার ট্রি (Fiber Tree) বেয়ে ওপরে উঠে ভার্চুয়াল প্যারেন্টের হ্যান্ডলারগুলো খুঁজে নিয়ে ফায়ার করায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মডাল পপআপ ডায়ালগ। মডালটি বডির নিচে থাকলেও রিঅ্যাক্ট ট্রিতে প্যারেন্ট র‍্যাপার নোডের ভেতর থাকায় পপআপে ক্লিক হলে প্যারেন্ট নোডের বাবল ইভেন্ট ট্রিগার হয়।

### উত্তম অনুশীলন (Best Practice)
প্যারেন্ট ফর্মে ভুল ক্লিক বা রিকোয়েস্ট ফায়ার এড়াতে পোর্টাল বডির ভেতরে প্রয়োজনে \`e.stopPropagation()\` কল করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডকুমেন্ট লেভেলের নেটিভ ইভেন্ট লিসনারের ক্ষেত্রেও এই রিঅ্যাক্ট ওরিয়েন্টেড ভার্চুয়াল বাবল ফ্লো আশা করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React from 'react';
import { createPortal } from 'react-dom';

export function ParentWrapper() {
  const handleParentClick = () => {
    // পোর্টালের ভেতরের বাটনে ক্লিক করলেও এটি রান করবে
    console.log('রিঅ্যাক্ট ভার্চুয়াল বাবল ডিটেক্ট হয়েছে!');
  };

  return (
    <div onClick={handleParentClick} className="p-8 border">
      <h3>প্যারেন্ট কন্টেইনার</h3>
      {createPortal(
        <button className="bg-red-500 text-white p-2">
          পোর্টাল বাটন ক্লিক
        </button>,
        document.body // ডমে এটি প্যারেন্ট ডিভের বাইরে অবস্থিত
      )}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-95',
    title: 'Explain React Testing Library vs Cypress Component Testing architectural differences.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Testing', 'ReactTestingLibrary', 'Cypress'],
    enAnswer: 'React Testing Library renders components inside a node-js simulated environment (jsdom), while Cypress Component Testing mounts components inside a real web browser.',
    bnAnswer: 'রিঅ্যাক্ট টেস্টিং লাইব্রেরি Node.js এর ভেতর একটি কাল্পনিক ডম (jsdom) বানিয়ে কোড রান করায়, যেখানে Cypress কম্পোনেন্টকে সরাসরি বাস্তব ক্রোম বা ফায়ারফক্স ব্রাউজারে রেন্ডার করে।',
    enExplanation: `### Explanation
- **RTL (React Testing Library)**: Runs in terminal window. Simulates DOM interfaces using \`jsdom\`. Very fast execution speeds. However, it cannot verify actual CSS layouts, rendering positions, paint frames, or browser-specific rendering bugs.
- **Cypress Component Testing**: Runs in a real Chromium/Firefox engine. Allows executing visual testing, testing real mouse drag operations, and debugging styles visually. Adds slight overhead in initialization speeds.

### Real-World Example
Testing a custom color picker dropdown. RTL checks if click actions toggle the dropdown visibility in code structure. Cypress renders the actual color box on screen, verifying color contrast and element offsets visually.

### Best Practice
Use RTL for test suites covering component states, event configurations, and loader flows. Use Cypress or Playwright component testing when verifying complex gestures or visual layouts.

### Common Mistakes
Trying to run complex visual layout testing inside RTL tests, which is impossible due to lack of a rendering browser canvas.

### Code Example
\`\`\`tsx
// RTL uses node-based simulated environment (fast terminal test runs):
// npm run test
// Cypress / Playwright Component tests mount inside real Chrome containers.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **RTL**: টার্মিনালে রান হয় এবং নোড প্রসেসের ভেতর কাল্পনিক DOM (\`jsdom\`) দিয়ে কাজ সারে। গতি অনেক ফাস্ট কিন্তু এটি সিএসএস লেআউট, কালার কন্টাস্ট বা পিক্সেল সাইজ মেলাতে পারে না।
- **Cypress Component Testing**: আসল ব্রাউজার ইঞ্জিন চালু করে পেজ নোড রেন্ডার করে। মাউসের ড্র্যাগ করা বা পিক্সেলের অবস্থান পরীক্ষা করা সহজ কিন্তু প্রসেস লোড হতে সামান্য অতিরিক্ত সময় নেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কলার পিকার ইনপুট টেস্ট করা। RTL দিয়ে শুধু ইনপুটের ভ্যালু কোডে সেভ হচ্ছে কি না তা ভেরিফাই করা এবং Cypress দিয়ে স্ক্রিনে কালার বক্সের পজিশন ও সিএসএস বর্ডার টেস্ট করা।

### উত্তম অনুশীলন (Best Practice)
স্টেট ও লজিক টেস্টের জন্য RTL পছন্দ করুন। জটিল সিএসএস এবং মাউস ইভেন্ট ট্র্যাকিংয়ের জন্য Cypress বা Playwright বেছে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
RTL এর কাছে বাস্তব ব্রাউজার রেন্ডারিং বা পিক্সেল অফসেট মডাল টেস্ট আশা করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// RTL টেস্ট রান হয় নোড প্রসেসের ভেতর (jsdom):
// npm run test
// Cypress কম্পোনেন্ট রান করায় সরাসরি ব্রাউজার উইন্ডো প্যানেলে।
\`\`\``
  },
  {
    id: 'react-96',
    title: 'How do you author custom ESLint rules to enforce React clean architecture guidelines?',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'ESLint', 'AST', 'CleanArchitecture'],
    enAnswer: 'You author rules by writing an AST (Abstract Syntax Tree) selector script that intercepts target configurations and triggers warnings if boundaries are crossed.',
    bnAnswer: 'ইএসলিন্ট রুলস লেখার জন্য একটি AST (Abstract Syntax Tree) সিলেক্টর স্ক্রিপ্ট লিখতে হয়, যা ফাইল কোড স্ক্যান করে কাস্টম আর্কিটেকচারাল রুলস ভায়োলেট হলে ওয়ার্নিং দেয়।',
    enExplanation: `### Explanation
ESLint parsers read Javascript source code and build an AST (Abstract Syntax Tree) representing variables, functions, and nodes. To enforce architecture rules (e.g., "components under /ui cannot import states from /store"), you write an AST selector query that filters import declarations and triggers reports.

### Real-World Example
Restricting team developers from importing data models directly inside visual display buttons, ensuring all data flows reside in hook modules.

### Best Practice
Verify rules using ESLint RuleTester suites before deploying the config plugin to team repositories.

### Common Mistakes
Writing overly complex AST filters that scan unrelated folders, slowing down code editor file saving cycles.

### Code Example
\`\`\`typescript
// Conceptual custom ESLint rule snippet checking import paths
// module.exports = {
//   create(context) {
//     return {
//       ImportDeclaration(node) {
//         if (node.source.value.includes('/store') && context.getFilename().includes('/components/ui/')) {
//           context.report({
//             node,
//             message: 'UI components must not import global state managers directly. Use container nodes.',
//           });
//         }
//       }
//     };
//   }
// };
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ESLint কোডবেস রিড করে একটি AST (Abstract Syntax Tree) ম্যাপ বানায়। ডিক্লেয়ারেশন নোডগুলো পরীক্ষা করার জন্য AST সিলেক্টর তৈরি করতে হয় যা রুলস ভায়োলেশন হলে ওয়ার্নিং জেনারেট করে (যেমন- "/ui নোডগুলো গ্লোবাল /store থেকে ডাটা ডিরেক্ট ইম্পোর্ট করতে পারবে না")।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কোনো ডেভেলপার যেন ভুল করে ভিউ এলিমেন্টে এপিআই মডিউল সরাসরি ইম্পোর্ট করে ডিজাইন কাপলড না করে ফেলে, তার জন্য অ্যালার্ট তৈরি করা।

### উত্তম অনুশীলন (Best Practice)
রুলস ডেপ্লয় করার পূর্বে ESLint RuleTester দিয়ে বিভিন্ন কোড স্যাম্পল ভ্যালিডেট করিয়ে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অতিরিক্ত জটিল AST কুয়েরি লেখা যা সেভ করার সময় ইডিটর হ্যাং বা স্লো করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// কাস্টম ESLint রুলস স্ক্রিপ্টের নমুনা যা ভুল ইম্পোর্ট আটকায়
// module.exports = {
//   create(context) {
//     return {
//       ImportDeclaration(node) {
//         if (node.source.value.includes('/store') && context.getFilename().includes('/components/ui/')) {
//           context.report({
//             node,
//             message: 'UI কম্পোনেন্ট সরাসরি গ্লোবাল স্টোর ইম্পোর্ট করতে পারবে না।',
//           });
//         }
//       }
//     };
//   }
// };
\`\`\``
  },
  {
    id: 'react-97',
    title: 'How do you profile CPU and memory leaks using Chrome DevTools for React applications?',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'DevTools', 'MemoryLeaks', 'Profiling'],
    enAnswer: 'You record CPU performance using the Performance Panel, and locate memory leaks using the Memory Panel Heap Snapshots to inspect retained unmounted components.',
    bnAnswer: 'ক্রোম ডেভটুলসের পারফরম্যান্স প্যানেলের সাহায্যে সিপিইউ লোড মাপা হয় এবং মেমোরি প্যানেলের হিপ স্ন্যাপশটের (Heap Snapshots) সাহায্যে আনমাউন্ট হওয়া নোড ডমে টিকে আছে কি না ট্র্যাক করা হয়।',
    enExplanation: `### Explanation
- **CPU Profiling**: Record user flow in Performance tab. Inspect yellow bars representing CPU bottlenecks. Look for long-running fiber reconciliation execution frames.
- **Memory Profiling**: Take a Heap Snapshot. Perform UI mount/unmount cycles. Take a second snapshot. Compare them using the "Comparison" view, searching for "Detached HTMLElement" or un-cleared fiber nodes.

### Real-World Example
Debugging a chat application that gets slower over time. Heap snapshots reveal that closed chat window DOM nodes remain in memory because setInterval timers were not cleared on close.

### Best Practice
Conduct memory profiling inside Chrome Incognito windows to prevent installed extensions from adding false memory signatures to snapshots.

### Common Mistakes
Forgetting that heap snapshot graphs show all browser memory; always filter allocations to target your app namespace to avoid noise.

### Code Example
\`\`\`tsx
// Memory profiling requires inspectable builds:
// 1. Open DevTools -> Memory Panel -> Take Heap Snapshot
// 2. Filter result constructor by: "Detached" to find leaking DOM nodes.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **CPU Profiling**: পারফরম্যান্স ট্যাবে রেকর্ড চালিয়ে কাজ করুন। বড় হলুদ রঙের নোডগুলো সিপিইউ জটলা বা স্লো রেন্ডার নির্দেশ করে।
- **Memory Profiling**: হিপ স্ন্যাপশট নিয়ে রাখুন। এরপর উইজেট মাউন্ট-আনমাউন্ট করে দ্বিতীয় স্ন্যাপশট নিন। দুটি স্ন্যাপশট কম্পেয়ার করে দেখুন মেমোরিতে কোনো অবশিষ্টাংশ বা Detached HTMLElement রয়ে গেছে কি না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চ্যাট অ্যাপ ব্যবহারের সময় কিছুক্ষণ পর স্লো হয়ে যাওয়া। স্ন্যাপশট চেক করে দেখা গেল চ্যাট বক্সটি বন্ধ হলেও মেমোরি রিলিজ হয়নি কারণ সকেট লিসনার এখনও কানেক্টেড আছে।

### উত্তম অনুশীলন (Best Practice)
মেমোরি টেস্ট করার সময় ক্রোম ইনকগনিটো মোড ব্যবহার করুন যাতে কোনো এক্সটেনশন ভুল মেমোরি ডাটা প্রডিউস না করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
পেজে ব্রাউজারের সব কন্টেন্ট ও ইমেজ মেমোরি একসাথে দেখে গুলিয়ে ফেলা। ফিল্টারে শুধু নিজের কোড স্পেস লিখে সার্চ করুন।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// মেমোরি লিক ডিটেক্ট করার ধাপসমূহ:
// ১. DevTools -> Memory Panel -> Take Heap Snapshot
// ২. কনস্ট্রাক্টর ফিল্টারে "Detached" লিখে সার্চ করে মেমোরিতে জমে থাকা ডম নোড সনাক্তকরণ।
\`\`\``
  },
  {
    id: 'react-98',
    title: 'Explain Micro-frontend architecture with React and Webpack Module Federation.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'MicroFrontends', 'ModuleFederation', 'Architecture'],
    enAnswer: 'Micro-frontends split an application into isolated modules. Webpack Module Federation allows compiling and loading dynamic components from separate servers at runtime.',
    bnAnswer: 'মাইক্রো-ফ্রন্টএন্ড একটি বড় প্রজেক্টকে স্বয়ংসম্পূর্ণ ছোট ছোট প্রজেক্টে ভাগ করে। মডিউল ফেডারেশন রানটাইমে আলাদা সার্ভার থেকে কোড ডাউনলোড করে একসাথে রেন্ডার করতে দেয়।',
    enExplanation: `### Explanation
In monolithic apps, everything builds together. In Micro-frontends, separate teams build, test, and deploy modules (e.g., Auth, Checkout, Search) independently. Webpack Module Federation configures:
- **Host**: Main shell layout that consumes modules.
- **Remote**: Dynamic bundle exporter compiling sub-elements.
At runtime, Host fetches Remote JS bundles, integrating them inside the React route tree.

### Real-World Example
An enterprise banking system. The transaction dashboard host app dynamically imports the credit card widget (compiled and hosted on a separate server by the credit card team) at runtime.

### Best Practice
Coordinate dependency version rules. Share common core runtimes (like React, React-DOM) to prevent browsers from downloading multiple versions of React.

### Common Mistakes
Hardcoupling remote endpoints inside build steps, preventing dynamic routing switches if server locations change.

### Code Example
\`\`\`typescript
// Host module federation configuration snippet
// plugins: [
//   new ModuleFederationPlugin({
//     name: 'hostApp',
//     remotes: {
//       checkoutApp: 'checkout@http://localhost:3002/remoteEntry.js',
//     },
//     shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
//   }),
// ]
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
বড় প্রজেক্টকে মডুলার টিম নোডে বিভক্ত করাই মাইক্রো-ফ্রন্টএন্ড। মডিউল ফেডারেশন রানটাইমে আলাদা সার্ভার থেকে ডাইনামিক চাঙ্ক ইম্পোর্ট করতে সাহায্য করে।
- **Host**: প্রধান ফ্রেম বা শেল যা মডিউল ব্যবহার করে।
- **Remote**: স্বাধীন ছোট প্রজেক্ট যা কন্টেন্ট এক্সপোর্ট করে।
চলতি অবস্থায় হোস্ট রিমোট সার্ভার থেকে জেএস চাঙ্ক তুলে এনে রিঅ্যাক্ট রাউট ট্রিতে যোগ করে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ব্যাংকিং অ্যাপ্লিকেশন। পেমেন্ট টিম এবং কার্ড টিম আলাদা সার্ভারে অ্যাপ ডেপ্লয় করেছে। হোস্ট অ্যাপটি চলার সময় কার্ড টিম সার্ভার থেকে ডাইনামিকালি মডিউল ডাউনলোড করে রেন্ডার করে।

### উত্তম অনুশীলন (Best Practice)
ডিপেন্ডেন্সি কনফ্লিক্ট এড়াতে রিঅ্যাক্ট ও রিঅ্যাক্ট-ডম প্যাকেজগুলোকে সিঙ্গলটন (singleton) করে শেয়ার করুন যাতে ব্রাউজার একই লাইব্রেরি দুইবার ডাউনলোড না করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিমোট সার্ভারগুলোর ইউআরএল বা পাথ কনফিগারেশন হার্ডকোড করে রাখা যা ডোমেইন চেঞ্জ হলে অ্যাপ ক্র্যাশ করায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// হোস্ট অ্যাপ্লিকেশনের মডিউল ফেডারেশন কনফিগারেশন এর নমুনা
// plugins: [
//   new ModuleFederationPlugin({
//     name: 'hostApp',
//     remotes: {
//       checkoutApp: 'checkout@http://localhost:3002/remoteEntry.js',
//     },
//     shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
//   }),
// ]
\`\`\``
  },
  {
    id: 'react-99',
    title: 'Explain hydration mismatches in React Server Components and Next.js and how to debug them.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Hydration', 'RSC', 'Next.js'],
    enAnswer: 'Hydration mismatches are debugged by locating differences between server static layouts and client browser layouts, tracing mismatch triggers using browser console element trees.',
    bnAnswer: 'সার্ভারের লেআউট ও ব্রাউজারের লেআউটের পার্থক্য খুঁজে বের করে এবং ব্রাউজার কনসোলের এলিমেন্ট ডিফ ট্রি নোড ট্র্যাক করে হাইড্রেশন মিসম্যাচ ডিবাগ করা হয়।',
    enExplanation: `### Explanation
Hydration warnings are logged inside browser consoles, pointing out exact tag discrepancies (e.g. \`Expected server HTML to contain a <span> but browser rendered a <div>\`).
- **Debugging steps**:
  1. Inspect the console warning to identify the incorrect tag.
  2. Use browser inspection to check if browser extensions (like password managers or translations) injected HTML styles dynamically, corrupting the DOM match.
  3. Turn off dynamic local storage parsing inside the render loop.

### Real-World Example
A profile header rendering local login names. On the server, it reads null and renders "Login". On the browser, it reads cookies and renders "Welcome Rohit", triggering mismatch warnings.

### Best Practice
Utilize \`suppressHydrationWarning\` only on small dynamic values (like random number displays or time clocks) if a mismatch is completely harmless and unavoidable.

### Common Mistakes
Ignoring hydration warnings. While the app may render visually correct, hydration mismatches cause React to tear down and recreate elements, ruining client performance.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ProfileHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Correct: This runs only after mounting on client side
    setIsClient(true);
  }, []);

  const username = isClient ? localStorage.getItem('name') : 'Guest';

  return <div>Welcome: {username}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
হাইড্রেশন এরর ব্রাউজার কনসোলে নোটিফাই হয় (যেমন- \`Expected server HTML to contain <span> but browser rendered <div>\`)।
- **ডিবাগ করার উপায়**:
  ১. কনসোল এররটি ভালো করে পড়ে অমিল হওয়া ট্যাগটি সনাক্ত করুন।
  ২. ব্রাউজারের এক্সটেনশন (যেমন ট্রান্সলেট বা পাসওয়ার্ড ম্যানেজার) ডমে কোনো স্টাইল ঢুকিয়ে ডম নষ্ট করছে কি না যাচাই করুন।
  ৩. রেন্ডারের লাইনে সরাসরি লোকালস্টোরেজ বা টাইম ফেচ বন্ধ করুন।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার প্রোফাইল হেডার। সার্ভারে এটি "Guest" রেন্ডার করেছে আর ক্লায়েন্টে এসে ব্রাউজার ডাটা পড়ে "Welcome Rohit" রেন্ডার করায় হাইড্রেশন বাধার মুখে পড়ে।

### উত্তম অনুশীলন (Best Practice)
ডেট বা ঘড়ির মতো ডাইনামিক কন্টেন্টের ক্ষেত্রে এরর এড়াতে প্রয়োজনে \`suppressHydrationWarning\` ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ (Common Mistakes)
হাইড্রেশন এররকে পাত্তা না দেওয়া। এটি দেখতে সঠিক মনে হলেও ব্যাকগ্রাউন্ডে রিঅ্যাক্ট সম্পূর্ণ ডম ভেঙে নতুন করে বানাতে বাধ্য হয় যা সাইট স্লো করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ProfileHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // সঠিক: মাউন্ট হওয়ার পরেই এটি ট্রু হবে, হাইড্রেশন এরর এড়াবে
    setIsClient(true);
  }, []);

  const username = isClient ? localStorage.getItem('name') : 'Guest';

  return <div>স্বাগতম: {username}</div>;
}
\`\`\``
  },
  {
    id: 'react-100',
    title: 'Explain Concurrent Rendering Priority Lanes and how the scheduler resolves them.',
    difficulty: 'advanced',
    category: 'react',
    tags: ['React', 'Scheduler', 'Lanes', 'ConcurrentMode'],
    enAnswer: 'Lanes represent priority categories using 31 binary bits. The scheduler resolves them using bitwise operations, running Sync lanes first and deferring Transition lanes.',
    bnAnswer: 'লেন (Lanes) হলো ৩১টি বাইনারি বিটের সাহায্যে তৈরি প্রায়োরিটি ক্যাটাগরি। শিডিউলার বিটওয়াইজ অপারেশনের মাধ্যমে Sync লেন আগে চালায় এবং Transition লেন পিছিয়ে দেয়।',
    enExplanation: `### Explanation
React 18+ uses a 31-bit Lane system to replace simple priority levels.
- **Lane priority types**:
  1. \`SyncLane\`: Immediate, blocks thread (typing).
  2. \`InputContinuousLane\`: Hover, touch, scroll.
  3. \`DefaultLane\`: standard state modifications, fetch resolutions.
  4. \`TransitionLane\`: useTransition deferred updates.
The Scheduler package checks priority bits. If a higher priority bit is activated during low-priority lane rendering, the low priority render is aborted and re-scheduled.

### Real-World Example
In a dynamic document editor, as the user types, a word counter runs in a lower priority lane. Keypresses (SyncLane) continuously preempt the counter calculation (TransitionLane) to keep typing responsive.

### Best Practice
Avoid triggering high-frequency state updates in SyncLanes. Use Transitions to group calculations that do not require instant visual updates.

### Common Mistakes
Forgetting that concurrent lane updates can lead to temporary UI inconsistencies (tearing) if not protected by hooks like \`useSyncExternalStore\`.

### Code Example
\`\`\`tsx
// React Scheduler uses bitwise operators to resolve Lane flags:
// const hasHighPriorityWork = (wantsLanes & urgentLanes) !== 0;
// Higher priority work aborts and sweeps low priority lanes during execution.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ১৮ লেনের মাধ্যমে ৩১ বিটের প্রায়োরিটি ম্যাপিং করে।
- **লেনের শ্রেণীবিভাগ**:
  ১. \`SyncLane\`: অত্যন্ত জরুরি (টাইপিং)।
  ২. \`InputContinuousLane\`: মাউস মুভমেন্ট, স্ক্রল।
  ৩. \`DefaultLane\`: ফেচিং ও সাধারণ স্টেট আপডেট।
  ৪. \`TransitionLane\`: ট্রানজিশনের ভেতরের আপডেট।
শিডিউলার বিটওয়াইজ ট্র্যাকিং করে। লো-প্রায়োরিটি রেন্ডার চলার সময় কোনো SyncLane বিট এক্টিভেট হলে রানিং কাজ বাতিল করে আগে SyncLane প্রসেস করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি টেক্সট এডিটর। ইউজার টাইপ করছে (SyncLane) আর ব্যাকগ্রাউন্ডে টেক্সট অ্যানালাইসিস চলছে (TransitionLane)। ইউজার দ্রুত টাইপ করতে থাকলে অ্যানালাইসিস লুপ স্থগিত রেখে টাইপিং স্পিড স্মুথ রাখা হবে।

### উত্তম অনুশীলন (Best Practice)
SyncLane এ ভারী ক্যালকুলেশন ফায়ার করা বন্ধ রাখুন। ট্রানজিশনের ভেতরে আপডেটগুলো মার্জ করে রান করান।

### সাধারণ ভুলসমূহ (Common Mistakes)
লেন বা ট্রানজিশন ব্যবহারের ফলে ভিন্ন স্টেট নোডে ডেটার সাময়িক অমিল (tearing) এড়িয়ে যাওয়া যা \`useSyncExternalStore\` দিয়ে হ্যান্ডেল করা উচিত।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// শিডিউলার বিটওয়াইজ অর/অ্যান্ড ব্যবহার করে লেনের মান চেক করে:
// const hasHighPriorityWork = (wantsLanes & urgentLanes) !== 0;
// উচ্চ প্রায়োরিটি নোড আসা মাত্রই কম প্রায়োরিটি কাজ স্থগিত হয়।
\`\`\``
  }
];
