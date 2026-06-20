import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: 'react-1',
    title: 'Explain the difference between State and Props in React.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'State', 'Props'],
    enAnswer: 'State is a local data storage that is managed within the component and can change over time. Props are read-only inputs passed down from a parent component to configure the child component.',
    bnAnswer: 'স্টেট হলো কম্পোনেন্টের অভ্যন্তরীণ লোকাল ডাটা যা পরিবর্তনশীল এবং কম্পোনেন্ট নিজেই তা ম্যানেজ করে। প্রপস হলো রিড-অনলি ডাটা যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়।',
    enExplanation: `### Explanation
- **State**: Mutated using setter functions (e.g. \`useState\`). Updating state triggers component re-rendering. It represents the component's internal behavior.
- **Props**: Immutable data passed across component boundaries. A child cannot directly modify props received from a parent.

### Real-World Example
In a user profile component, the user's view theme (dark or light mode) can be stored in **state** (managed by toggle clicks), while the user's name fetched from database is passed as a **prop** to be displayed.

### Best Practice
Keep state local where possible. Only lift state up if multiple sibling components need to share it.

### Common Mistakes
Trying to directly reassign prop values like \`props.value = "new"\`. This will fail since props are read-only.

### Code Example
\`\`\`tsx
import { useState } from 'react';

// Parent Component passing props
export function ProfileParent() {
  return <UserProfile username="Rohit" />;
}

// Child Component receiving props and managing local state
function UserProfile({ username }: { username: string }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <h3>Name: {username}</h3>
      <button onClick={() => setIsOnline(prev => !prev)}>
        Status: {isOnline ? 'Online' : 'Offline'}
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্টেট (State)**: স্টেট সেটার ফাংশন (যেমন \`useState\`) দিয়ে পরিবর্তন করা হয়। স্টেট আপডেট হলে রি-রেন্ডার হয়। এটি কম্পোনেন্টের অভ্যন্তরীণ লজিক ধারণ করে।
- **প্রপস (Props)**: কম্পোনেন্ট বাউন্ডারি জুড়ে পাঠানো অপরিবর্তনশীল ডাটা। চাইল্ড কম্পোনেন্ট সরাসরি প্যারেন্ট থেকে পাওয়া প্রপস পরিবর্তন করতে পারে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইউজার প্রোফাইলে, ইউজারের ভিজ্যুয়াল থিম (ডার্ক বা লাইট মোড) **স্টেটে** রাখা যেতে পারে, আর ইউজারের নাম ডাটাবেজ থেকে এনে চাইল্ড কম্পোনেন্টে **প্রপস** হিসেবে পাঠানো যেতে পারে।

### উত্তম অনুশীলন (Best Practice)
স্টেট যথাসম্ভব লোকাল রাখুন। কেবল তখনই স্টেট প্যারেন্টে তুলুন (lift state up) যখন একাধিক চাইল্ডের মধ্যে শেয়ারিং প্রয়োজন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সরাসরি প্রপের মান পরিবর্তন করার চেষ্টা করা যেমন- \`props.value = "new"\`। প্রপস রিড-অনলি হওয়ায় এটি কাজ করবে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';

// প্যারেন্ট কম্পোনেন্ট প্রপস পাস করছে
export function ProfileParent() {
  return <UserProfile username="Rohit" />;
}

// চাইল্ড কম্পোনেন্ট প্রপস গ্রহণ করছে এবং লোকাল স্টেট ম্যানেজ করছে
function UserProfile({ username }: { username: string }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <h3>নাম: {username}</h3>
      <button onClick={() => setIsOnline(prev => !prev)}>
        অবস্থা: {isOnline ? 'অনলাইন' : 'অফলাইন'}
      </button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-2',
    title: 'How does JSX compilation work under the hood in React?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'JSX', 'Compilation'],
    enAnswer: 'JSX is an XML-like syntax extension for JavaScript. Under the hood, compilers like Babel or SWC compile JSX into standard React.createElement calls (or _jsx runtime calls in React 17+), which evaluate to virtual DOM objects.',
    bnAnswer: 'JSX হলো জাভাস্ক্রিপ্টের একটি XML-এর মতো সিনট্যাক্স এক্সটেনশন। ভেতরে ভেতরে Babel বা SWC এর মতো কম্পাইলারগুলো JSX কে সাধারণ React.createElement কলে রূপান্তর করে যা ভার্চুয়াল DOM অবজেক্ট তৈরি করে।',
    enExplanation: `### Explanation
Browsers cannot read HTML tags directly inside JavaScript. JSX provides a declarative UI writing style. During bundle compilation, the compiler parses JSX tags and transpiles them to Javascript function executions.

### Real-World Example
Writing \`<h1 className="title">Hello</h1>\` is converted to:
\`\`\`js
import { jsx as _jsx } from 'react/jsx-runtime';
_jsx('h1', { className: 'title', children: 'Hello' });
\`\`\`
This compiles down to a lightweight object describing the DOM node structure.

### Best Practice
Rely on compilers to automatically inject the jsx runtime. Do not manually import React in every file unless using legacy React versions (<17).

### Common Mistakes
Trying to return multiple root-level JSX elements without wrapping them in a fragment (\`<></>\`) or a div container.

### Code Example
\`\`\`tsx
// Compiles to _jsx(React.Fragment, { children: [_jsx("h1", ...), _jsx("p", ...)] })
export function WelcomeSection() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Building highly performant interfaces.</p>
    </>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ব্রাউজার সরাসরি জাভাস্ক্রিপ্টের ভেতরের HTML ট্যাগ পড়তে পারে না। JSX আমাদের সুন্দর করে ডিক্লারেটিভ UI লিখতে সাহায্য করে। বান্ডলিংয়ের সময় কম্পাইলার এই ট্যাগগুলোকে জাভাস্ক্রিপ্ট ফাংশন কলে পরিণত করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
\`<h1 className="title">Hello</h1>\` কোডটি কম্পাইল হওয়ার পর নিচের রূপে পরিবর্তিত হয়:
\`\`\`js
import { jsx as _jsx } from 'react/jsx-runtime';
_jsx('h1', { className: 'title', children: 'Hello' });
\`\`\`
এটি মূলত ডম নোডের গঠন বর্ণনাকারী একটি অবজেক্ট তৈরি করে।

### উত্তম অনুশীলন (Best Practice)
কম্পাইলার স্বয়ংক্রিয়ভাবে jsx রানটাইম ইনজেক্ট করতে পারে। রিঅ্যাক্ট ১৭ বা তার বেশি সংস্করণে প্রতিটি ফাইলে ম্যানুয়ালি \`import React\` করার প্রয়োজন নেই।

### সাধারণ ভুলসমূহ (Common Mistakes)
একাধিক রুট-লেভেল JSX উপাদানকে ফ্র্যাগমেন্ট (\`<></>\`) বা কোনো ডিভ কন্টেইনার দিয়ে না মুড়িয়ে সরাসরি রিটার্ন করার চেষ্টা করা।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// কম্পাইল হওয়ার পর ফ্র্যাগমেন্টসহ রিটার্ন করে
export function WelcomeSection() {
  return (
    <>
      <h1>রিঅ্যাক্টে স্বাগতম</h1>
      <p>উচ্চ পারফরম্যান্সের ইন্টারফেস তৈরি করা হচ্ছে।</p>
    </>
  );
}
\`\`\``
  },
  {
    id: 'react-3',
    title: 'Explain Controlled vs Uncontrolled components in React forms.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Forms', 'State'],
    enAnswer: 'Controlled components have their input state managed directly by React component state. Uncontrolled components rely on the DOM itself to manage the input state, with values read using refs.',
    bnAnswer: 'কন্ট্রোলড কম্পোনেন্টের ফর্ম ইনপুটের মান সরাসরি রিঅ্যাক্ট স্টেট দিয়ে ম্যানেজ করা হয়। আনকন্ট্রোলড কম্পোনেন্টের ক্ষেত্রে ডাটা সরাসরি ডম (DOM) ধারণ করে এবং তা রিড করতে refs ব্যবহার করা হয়।',
    enExplanation: `### Explanation
- **Controlled**: Component state dictates the value prop. Every change triggers a state update via \`onChange\`. Highly predictable, ideal for real-time validation.
- **Uncontrolled**: The DOM maintains values natively. React accesses values on-demand using \`ref.current.value\`. Acts like standard HTML forms.

### Real-World Example
In a registration form, controlled inputs are used to show a "password too weak" warning as the user is typing. Uncontrolled inputs are useful for quick logins or handling raw file inputs.

### Best Practice
Default to controlled inputs for typical forms. For extremely large forms with critical performance requirements, consider uncontrolled inputs or libraries like React Hook Form.

### Common Mistakes
Initializing a controlled input state with \`undefined\` or \`null\` and then updating it to a string. This triggers React errors because the component switches from uncontrolled to controlled.

### Code Example
\`\`\`tsx
import { useState, useRef, FormEvent } from 'react';

export function FormComponent() {
  // Controlled State
  const [username, setUsername] = useState('');
  
  // Uncontrolled Ref
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      controlledVal: username,
      uncontrolledVal: passwordRef.current?.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Controlled Username" />
      <input ref={passwordRef} type="password" placeholder="Uncontrolled Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Controlled**: রিঅ্যাক্ট স্টেট ইনপুটের মান নিয়ন্ত্রণ করে। প্রতিটি পরিবর্তনে \`onChange\` ইভেন্ট ফায়ার হয়। ইনপুট ভ্যালিডেশনের জন্য এটি উত্তম।
- **Uncontrolled**: ডম (DOM) নিজেই স্টেট ধরে রাখে। যখনই মানের প্রয়োজন হয় তখন \`ref.current.value\` দিয়ে আনা হয়। এটি সাধারণ HTML ফর্মের মতোই আচরণ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি রেজিস্ট্রেশন ফর্মে টাইপ করার সময় পাসওয়ার্ড সঠিক কি না তা সাথে সাথে দেখাতে কন্ট্রোলড ইনপুট লাগবে। অন্যদিকে কোনো মেইনটেন্যান্স ছাড়া ফাইল আপলোড করতে আনকন্ট্রোলড ইনপুট ও রেফারেন্স সাহায্য করবে।

### উত্তম অনুশীলন (Best Practice)
সাধারণ ফর্মগুলোর জন্য কন্ট্রোলড ইনপুট ব্যবহার করুন। কিন্তু অত্যন্ত বড় পেজগুলোতে ল্যাগ এড়াতে আনকন্ট্রোলড অথবা React Hook Form ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনপুট স্টেটকে \`undefined\` বা \`null\` দিয়ে চালু করে পরবর্তীতে পরিবর্তন করা। এটি ইনপুটকে আনকন্ট্রোলড থেকে কন্ট্রোলড বানায় যা রিঅ্যাক্ট ওয়ার্নিং দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useRef, FormEvent } from 'react';

export function FormComponent() {
  // কন্ট্রোলড স্টেট
  const [username, setUsername] = useState('');
  
  // আনকন্ট্রোলড রেফারেন্স
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      controlledVal: username,
      uncontrolledVal: passwordRef.current?.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="কন্ট্রোলড ইউজারনেম" />
      <input ref={passwordRef} type="password" placeholder="আনকন্ট্রোলড পাসওয়ার্ড" />
      <button type="submit">জমা দিন</button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'react-4',
    title: 'Explain the critical role of key props in dynamic React lists.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Keys', 'Lists'],
    enAnswer: 'Keys give list items stable identities, allowing Reacts diffing engine to track additions, updates, and removals during list changes rather than recreating nodes from scratch.',
    bnAnswer: 'কী (Keys) লিস্টের প্রতিটি নোডকে একটি নির্দিষ্ট এবং স্থায়ী পরিচয় প্রদান করে, যা রিঅ্যাক্টের ডিফারেন্স ট্র্যাকিং ইঞ্জিনকে আইটেম যোগ, ডিলিট বা রিঅর্ডার বুঝতে সাহায্য করে।',
    enExplanation: `### Explanation
React maps items sequentially. When an item changes or is inserted at the top of a list, without keys, React will re-render and overwrite state for every subsequent element. Keys tell React exactly which DOM elements should be moved, retained, or deleted.

### Real-World Example
In a user messages list, if a user deletes the top message and there are no keys (or indices are used), React will destroy/re-render all components below it, losing local component states (like expanded buttons).

### Best Practice
Always use stable, unique IDs from the database (e.g. \`item.id\`) as keys. Do not generate random numbers on the fly or use loop index as keys if the list can be sorted, filtered, or mutated.

### Common Mistakes
Using \`key={Math.random()}\` inside map. Since a new key is generated on every render, React will destroy the old DOM node and mount a new one, breaking performance and keyboard focus.

### Code Example
\`\`\`tsx
interface Task { id: string; text: string }

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul>
      {/* Correct: Using database ID as key */}
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট সিকোয়েন্স অনুসারে উপাদান ট্র্যাক করে। যদি কোনো আইটেম লিস্টের উপরে যোগ বা ডিলিট হয় আর সেখানে কোনো key না থাকে, তবে নিচের সব কম্পোনেন্ট রি-রেন্ডার হয়। Key রিঅ্যাক্টকে জানায় ঠিক কোন উপাদানটি ডিলিট বা রিঅর্ডার হয়েছে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মেসেজ লিস্টে কোনো মেসেজ ডিলিট করা হলে ইউনিক আইডি না থাকলে রিঅ্যাক্ট নিচের সকল মেসেজ রি-রেন্ডার করে দিবে এবং এক্সপ্যান্ড থাকা মেসেজগুলোর স্টেট হারাতে পারে।

### উত্তম অনুশীলন (Best Practice)
সবসময় ডাটাবেজ থেকে পাওয়া ইউনিক আইডি (যেমন- \`item.id\`) key হিসেবে ব্যবহার করুন। কোনো অবস্থায় রেন্ডম কি ব্যবহার করবেন না এবং লিস্টটি রিঅর্ডারযোগ্য হলে ইনডেক্স ব্যবহার পরিহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডারের সময় \`key={Math.random()}\` ব্যবহার করা। এতে প্রতি রেন্ডারে নতুন key তৈরি হওয়ায় রিঅ্যাক্ট পুরোনো ডম মুছে নতুন ডম তৈরি করে যা পারফরম্যান্সের ব্যাপক ক্ষতি করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
interface Task { id: string; text: string }

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul>
      {/* সঠিক: ডাটাবেজ আইডি ব্যবহার করে কি সেট করা */}
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
\`\`\``
  },
  {
    id: 'react-5',
    title: 'Explain useRef for direct DOM access and how it differs from State.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'useRef', 'DOM'],
    enAnswer: 'useRef creates a mutable object with a .current property that persists across renders. Unlike state, modifying useRef.current does not trigger component re-renders.',
    bnAnswer: 'useRef একটি পরিবর্তনশীল অবজেক্ট তৈরি করে যার একটি .current প্রপার্টি থাকে এবং তা রেন্ডার জুড়ে মান ধরে রাখে। স্টেটের মতো নয়, useRef.current এর মান পাল্টালে কম্পোনেন্ট রি-রেন্ডার হয় না।',
    enExplanation: `### Explanation
- **State**: Triggers UI updates when modified. Used for values that affect visual render output.
- **useRef**: Keeps values persistent. Changing values does not block or queue rendering. Primarily used to store DOM references or timer variables.

### Real-World Example
Auto-focusing a search input field immediately after a popup modal opens. You do not need state to hold the DOM element reference; a ref holds the node cleanly.

### Best Practice
Do not read or write to \`ref.current\` during the rendering phase, as this makes rendering output unpredictable. Only access refs inside \`useEffect\` or event callbacks.

### Common Mistakes
Trying to render reference values directly inside JSX, like \`<div>{myRef.current}</div>\`, expecting it to update visually when the ref changes.

### Code Example
\`\`\`tsx
import { useRef, useEffect } from 'react';

export function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Correct: Access DOM node after component paints
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Focused automatically" />;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্টেট (State)**: পরিবর্তিত হলে UI আপডেট বা রেন্ডার ট্রিগার করে। স্ক্রিনে ভিজ্যুয়াল আউটপুটের জন্য এটি প্রয়োজন।
- **useRef**: এর ভেতরের মান পরিবর্তন হলেও রি-রেন্ডার সাইকেল চলে না। এটি মূলত ডম নোড রেফারেন্স ও টাইমার আইডি ট্র্যাক করতে ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মডাল ওপেন হওয়ার সাথে সাথে ইনপুট বক্সটি ফোকাস করা। ডম রেফারেন্স ধারণ করার জন্য স্টেটের প্রয়োজন নেই, রেফ দিয়ে এটি সহজেই করা যায়।

### উত্তম অনুশীলন (Best Practice)
রেন্ডারের সময় \`ref.current\` রিড বা রাইট করবেন না। শুধুমাত্র \`useEffect\` বা ইভেন্ট কলব্যাকের ভেতর এটি ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেফারেন্সের মান সরাসরি JSX এর ভেতর প্রিন্ট করা, যেমন- \`<div>{myRef.current}</div>\` এবং আশা করা যে রেফ পরিবর্তন হলে পেজে সেটি পরিবর্তিত হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useRef, useEffect } from 'react';

export function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // সঠিক: কম্পোনেন্ট স্ক্রিনে আসার পর ডম নোড ফোকাস করা হচ্ছে
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="স্বয়ংক্রিয়ভাবে ফোকাসড হবে" />;
}
\`\`\``
  },
  {
    id: 'react-6',
    title: 'How do you handle event binding and context parameters in React components?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Events', 'EventBinding'],
    enAnswer: 'React passes synthetic event objects to handlers. You can bind custom parameters by wrapping the handler execution in an inline arrow function, or by using closures.',
    bnAnswer: 'রিঅ্যাক্ট হ্যান্ডলারের কাছে সিন্থেটিক ইভেন্ট অবজেক্ট পাঠায়। আপনি ইনলাইন অ্যারো ফাংশন ব্যবহার করে অথবা ক্লোজার তৈরি করে হ্যান্ডলারের সাথে কাস্টম প্যারামিটার যুক্ত করতে পারেন।',
    enExplanation: `### Explanation
In standard React, functions are passed as references to event attributes, e.g., \`onClick={handleClick}\`. If you need to supply arguments to a handler, you must write an inline callback: \`onClick={() => handleClick(id)}\`.

### Real-World Example
In a user cart panel, clicking the delete button beside a cart item needs to trigger an action with that specific item's database ID.

### Best Practice
Avoid creating complex inline functions inside loops if it affects performance. For optimized lists, pass params using custom attributes or memoized callbacks.

### Common Mistakes
Directly invoking the handler in the event prop, like \`onClick={handleClick(id)}\`. This fires the function immediately during rendering instead of waiting for a user click.

### Code Example
\`\`\`tsx
import { MouseEvent } from 'react';

export function MessageItem() {
  const handleDelete = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    console.log('Deleting item with ID:', id);
  };

  return (
    <div className="card">
      {/* Correct: Arrow wrapper passes custom ID and event */}
      <button onClick={(e) => handleDelete('msg-99', e)}>
        Delete Message
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্টে হ্যান্ডলারগুলো রেফারেন্স হিসেবে পাস হয়, যেমন- \`onClick={handleClick}\`। যদি হ্যান্ডলারে আর্গুমেন্ট পাঠাতে হয় তবে তা অ্যারো ফাংশনে মুড়িয়ে দিতে হয়: \`onClick={() => handleClick(id)}\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি শপিং কার্ট পেজে কোনো নির্দিষ্ট আইটেম মুছে ফেলতে চাইলে ডিলিট বাটনে ক্লিক করার সাথে সাথে ওই আইটেমের আইডিটি হ্যান্ডলারে পাঠাতে হবে।

### উত্তম অনুশীলন (Best Practice)
রেন্ডারিং পারফরম্যান্স ঠিক রাখতে লুপের ভেতরে জটিল ইনলাইন ফাংশন তৈরি করা এড়িয়ে চলুন। প্রয়োজন হলে মেমোয়াইজড কলব্যাক ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইভেন্ট প্রপে সরাসরি হ্যান্ডলার এক্সিকিউট করা, যেমন- \`onClick={handleClick(id)}\`। এটি ক্লিক হওয়া পর্যন্ত অপেক্ষা না করে রেন্ডারের সময়ই রান করে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { MouseEvent } from 'react';

export function MessageItem() {
  const handleDelete = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    console.log('ডিলিট হচ্ছে আইডি:', id);
  };

  return (
    <div className="card">
      {/* সঠিক: অ্যারো ফাংশন দিয়ে আইডি এবং ইভেন্ট পাস করা */}
      <button onClick={(e) => handleDelete('msg-99', e)}>
        মেসেজ মুছুন
      </button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-7',
    title: 'How do you create global custom event listeners inside a React component?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Events', 'useEffect'],
    enAnswer: 'You attach custom listeners to the window or document object inside a useEffect hook, and always return a cleanup function to remove the listener on component unmount.',
    bnAnswer: 'একটি useEffect হুকের ভেতরে ওয়ানডো বা ডকুমেন্ট অবজেক্টে কাস্টম লিসনার যুক্ত করতে হয়, এবং মেমোরি লিক এড়াতে কম্পোনেন্ট আনমাউন্ট হওয়ার সময় লিসনারটি রিমুভ করার জন্য ক্লিনআপ ফাংশন রিটার্ন করতে হয়।',
    enExplanation: `### Explanation
Components often need to listen to global events (like window resize, scroll, or online status changes). Setting these in the render loop is dangerous. Use \`useEffect\` with an empty dependency array and remove listeners in the return block.

### Real-World Example
A navigation bar that changes background color when the page is scrolled down more than 100 pixels.

### Best Practice
Always clean up. Leaving event listeners active after a component unmounts causes memory leaks and updates to unmounted components.

### Common Mistakes
Attaching events but not providing a cleanup function, or passing a different function reference to \`removeEventListener\` than the one registered.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    // Register listener on mount
    window.addEventListener('scroll', handleScroll);
    
    // Correct: Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="fixed bottom-4 right-4">Offset: {scrollY}px</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কখনও কখনও গ্লোবাল ইভেন্ট লিসেন করার প্রয়োজন হয় (যেমন- উইন্ডো রিসাইজ, স্ক্রল)। এগুলো রেন্ডার সাইকেলে সরাসরি বসানো যাবে না। \`useEffect\` হুকের ভেতরে খালি ডিপেন্ডেন্সি অ্যারে দিয়ে লিসনার রেজিস্টার করতে হবে এবং রিটার্ন ব্লকে তা রিমুভ করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি নেভিগেশন বার যা পেজ ১০০ পিক্সেল স্ক্রল হওয়ার পর তার ব্যাকগ্রাউন্ড কালার বদলে ফেলে।

### উত্তম অনুশীলন (Best Practice)
সবসময় ক্লিনআপ করুন। আনমাউন্ট হওয়ার পরও লিসনার সচল থাকলে মেমোরি লিক হয় এবং ক্র্যাশ হতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইভেন্ট লিসনার অ্যাড করা কিন্তু ক্লিনআপ করতে ভুলে যাওয়া, অথবা \`removeEventListener\` করার সময় ভুল ফাংশন রেফারেন্স দেওয়া।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    // মাউন্ট হওয়ার সময় লিসনার অ্যাড হচ্ছে
    window.addEventListener('scroll', handleScroll);
    
    // সঠিক: আনমাউন্ট হওয়ার সময় লিসনার রিমুভ হচ্ছে
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="fixed bottom-4 right-4">স্ক্রল অফসেট: {scrollY}px</div>;
}
\`\`\``
  },
  {
    id: 'react-8',
    title: 'What are Synthetic Events in React and why are they necessary?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'SyntheticEvents', 'Compatibility'],
    enAnswer: 'SyntheticEvents are cross-browser wrappers around native browser events, normalizing event behaviors and properties so they act consistently across all web browsers.',
    bnAnswer: 'সিন্থেটিক ইভেন্টস হলো ব্রাউজারের নেティブ ইভেন্টের ওপর তৈরি করা একটি ক্রস-ব্রাউজার র‍্যাপার, যা সব ব্রাউজারে একই রকম আচরণ এবং ইন্টারফেস নিশ্চিত করে।',
    enExplanation: `### Explanation
Browsers like Chrome, Safari, and Firefox have small discrepancies in their event engines. React wraps them in a unified class object (\`SyntheticEvent\`). React handles delegation internally by attaching events to the root element.

### Real-World Example
Handling keyboard inputs or mouse coordinate positions, where Safari and Firefox might have slightly different names for standard property keys.

### Best Practice
Event pooling is disabled in React 17+. You can safely access event properties inside async callbacks without calling \`e.persist()\`.

### Common Mistakes
Trying to return \`false\` inside React handlers to prevent default behavior. You must explicitly call \`e.preventDefault()\`.

### Code Example
\`\`\`tsx
import React from 'react';

export function SubmitButton() {
  const handleAction = (e: React.FormEvent) => {
    e.preventDefault(); // Correct way to prevent default submit behaviour
    console.log('Action registered without page reload');
  };

  return (
    <form onSubmit={handleAction}>
      <button type="submit">Submit Form</button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ক্রোম, সাফারি বা ফায়ারফক্সের ইভেন্ট সিস্টেমে সামান্য অমিল থাকতে পারে। রিঅ্যাক্ট সেগুলোকে একত্রিত করে \`SyntheticEvent\` ক্লাসের অবজেক্ট তৈরি করে এবং রুট নোডে ডেলিগেট করে রান করায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কপি/পেস্ট বা মাউসের পজিশন ইভেন্ট হ্যান্ডেল করা যেখানে সাফারি বা ফায়ারফক্সে নেটিভ কি-গুলোর নাম সামান্য ভিন্ন হতে পারে।

### উত্তম অনুশীলন (Best Practice)
রিঅ্যাক্ট ১৭ থেকে ইভেন্ট পুলিং অপটিমাইজেশন তুলে দেওয়া হয়েছে, তাই এখন অ্যাসিনক্রোনাস কলব্যাকে সহজেই \`e.persist()\` ছাড়াই ইভেন্ট রিড করা যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট হ্যান্ডলারে কেবল \`return false\` দিয়ে সাবমিশন আটকানোর চেষ্টা করা। রিঅ্যাক্টে অবশ্যই \`e.preventDefault()\` মেথড কল করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React from 'react';

export function SubmitButton() {
  const handleAction = (e: React.FormEvent) => {
    e.preventDefault(); // ডিফোল্ট রিলোড আটকানোর সঠিক উপায়
    console.log('পেজ রিলোড ছাড়াই অ্যাকশন সফল হয়েছে');
  };

  return (
    <form onSubmit={handleAction}>
      <button type="submit">জমা দিন</button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'react-9',
    title: 'Explain Pure Components and how they optimize rendering predictability.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'PureComponent', 'Performance'],
    enAnswer: 'A component is pure if it renders the exact same output when given the same props and state. React.memo can be used to make functional components behave like pure components through shallow prop comparisons.',
    bnAnswer: 'একটি কম্পোনেন্টকে তখনই পিওর কম্পোনেন্ট বলা হয় যখন একই প্রপস এবং স্টেটের জন্য এটি সবসময় একই আউটপুট দেখায়। React.memo চাইল্ড কম্পোনেন্টকে পিওর বানাতে সাহায্য করে প্রপের শ্যালো তুলনার মাধ্যমে।',
    enExplanation: `### Explanation
React components re-render by default whenever their parent renders. Pure components check if incoming props changed via shallow equality comparison. If props are identical, rendering is skipped, saving CPU cycles.

### Real-World Example
In a list dashboard with a search bar, typing in the search bar should not re-render the list items that do not match or change. Memoizing the item components avoids full list redrawing.

### Best Practice
Only use memoization wrapper on components that have simple props and re-render frequently with unchanged inputs.

### Common Mistakes
Passing inline arrow functions or new object literals as props to a memoized pure component. Since references change on every render, the shallow check always fails.

### Code Example
\`\`\`tsx
import React from 'react';

interface CardProps { title: string }

// React.memo wraps the component to skip renders when props are identical
export const InfoCard = React.memo(function InfoCard({ title }: CardProps) {
  console.log('Rendering Card:', title);
  return <div className="p-4 border rounded">{title}</div>;
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে প্যারেন্ট রেন্ডার হলে চাইল্ড নোডগুলোও রি-রেন্ডার হয়। পিওর কম্পোনেন্ট প্রপের মান শ্যালো ইকুয়ালিটি (shallow equality) চেক করে তুলনা করে। প্রপস না বদলালে রেন্ডারিং বাতিল হয় এবং প্রোসেসিং সেভ হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
সার্চ বার সম্বলিত লিস্টে সার্চ টাইপ করার সময় প্রতিটা লিস্ট আইটেম যেন রি-রেন্ডার না হয় সেজন্য লিস্ট নোডগুলোতে React.memo ব্যবহার করা উচিত।

### উত্তম অনুশীলন (Best Practice)
শুধুমাত্র সেই সব নোডেই মেমো ব্যবহার করুন যেগুলো ঘন ঘন একই প্রপস নিয়ে রি-রেন্ডার হয় কিন্তু কোনো ডাটা পরিবর্তন হয় না।

### সাধারণ ভুলসমূহ (Common Mistakes)
মেমো করা চাইল্ড কম্পোনেন্টে ইনলাইন ফাংশন বা অবজেক্ট পাস করা। রেফারেন্স বদলানোর কারণে শ্যালো চেক সবসময়ই রেন্ডার ট্রিগার করবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React from 'react';

interface CardProps { title: string }

// React.memo কম্পোনেন্টটিকে মোড়ায় যাতে প্রপস একই থাকলে রেন্ডারিং এড়ানো যায়
export const InfoCard = React.memo(function InfoCard({ title }: CardProps) {
  console.log('রেন্ডার হচ্ছে কার্ড:', title);
  return <div className="p-4 border rounded">{title}</div>;
});
\`\`\``
  },
  {
    id: 'react-10',
    title: 'How do you persist React state inside LocalStorage safely?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'LocalStorage', 'StateSync'],
    enAnswer: 'You initialize state with a callback function that reads from localStorage, and use a useEffect hook with state dependencies to serialize and save updates.',
    bnAnswer: 'লোকালস্টোরেজে স্টেট সংরক্ষণ করতে স্টেট ইনিশিয়ালাইজ করার সময় একটি কলব্যাক দিয়ে লোকালস্টোরেজ থেকে ডাটা পড়তে হয়, এবং পরবর্তীতে স্টেট আপডেটের সাথে সাথে useEffect ব্যবহার করে ডাটা সেভ করতে হয়।',
    enExplanation: `### Explanation
Local storage accesses are synchronous, blocking API operations. Reading from local storage inside the render loop causes lag. To solve this, read localstorage values only during the initial state mount using state initializer callbacks.

### Real-World Example
Saving the dark mode preference or user theme selection so that the UI stays in the desired configuration when the page is refreshed.

### Best Practice
Wrap JSON parsing in try-catch blocks to prevent crashes if localstorage gets corrupted, and keep key names structured.

### Common Mistakes
Writing \`useState(localStorage.getItem('key'))\` directly. This reads localstorage on every single render cycle, hurting application speed.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ThemeSelector() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('app-theme');
      return saved ? JSON.parse(saved) : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    localStorage.setItem('app-theme', JSON.stringify(theme));
  }, [theme]);

  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
লোকালস্টোরেজ অপারেশন সিনক্রোনাস হওয়ায় রেন্ডার লুপের মধ্যে এটি রান করালে ল্যাগ দেখা দেয়। তাই স্টেট সেট করার সময় ইনিশিয়ালাইজার কলব্যাক ব্যবহার করে কেবল প্রথমবার ডাটা পড়তে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজারের থিম সিলেকশন (ডার্ক বা লাইট) লোকালস্টোরেজে রাখা যাতে পরবর্তী ভিজিটে সরাসরি পছন্দের লেআউট লোড হয়।

### উত্তম অনুশীলন (Best Practice)
লোকালস্টোরেজ ফাইল করাপ্টেড থাকতে পারে তাই JSON.parse করার সময় ট্রাই-ক্যাচ (try-catch) ব্লক ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সরাসরি \`useState(localStorage.getItem('key'))\` লেখা। এটি প্রতিটি রেন্ডারে রিড অপারেশন চালায় যা গতি কমিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function ThemeSelector() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('app-theme');
      return saved ? JSON.parse(saved) : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    localStorage.setItem('app-theme', JSON.stringify(theme));
  }, [theme]);

  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>টগল করুন</button>;
}
\`\`\``
  },
  {
    id: 'react-11',
    title: 'Explain State Propagation and Props Drilling, and how to avoid it.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'PropsDrilling', 'ContextAPI'],
    enAnswer: 'Props drilling is passing props through multiple nested child components that do not need the data, just to reach a deep child. It is avoided using Context API, custom hooks, or state managers.',
    bnAnswer: 'প্রপস ড্রিলিং হলো মাঝখানের কোনো কম্পোনেন্টের প্রয়োজন না থাকা সত্ত্বেও শুধুমাত্র নিচের কোনো নোডে প্রপস পৌঁছানোর জন্য একের পর এক প্রপ পাস করা। এটি এড়াতে Context বা স্টেট ম্যানেজার ব্যবহার করা হয়।',
    enExplanation: `### Explanation
When a deep sub-child needs parent state, passing state via 5 intervening parent levels makes components highly coupled.
- **Solutions**:
  1. Component composition (passing children directly).
  2. React Context (injecting context globally).
  3. External state management libraries (Zustand, Redux).

### Real-World Example
Passing logged-in user auth status from App.tsx down through Header, Nav, Profile, Info, and finally EditButton. EditButton only needs it, but all intervening components must carry the prop.

### Best Practice
Only use Context for global variables like locale, theme, or authentication. Do not use context for heavily updated business data as it causes full sub-tree re-renders.

### Common Mistakes
Using Context API for every local state propagation. This overcomplicates component hierarchies and degrades optimization.

### Code Example
\`\`\`tsx
import { createContext, useContext } from 'react';

const AuthContext = createContext<string | null>(null);

// Avoids drilling auth details through Nav/Header
export function App() {
  return (
    <AuthContext.Provider value="Rohit">
      <Header />
    </AuthContext.Provider>
  );
}

function Header() {
  return <Navigation />; // No props passed here!
}

function Navigation() {
  const user = useContext(AuthContext);
  return <div>Logged in: {user}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন কোনো গভীর চাইল্ড কম্পোনেন্টের প্যারেন্ট স্টেট দরকার হয়, ৫ স্তর নিচে পাস করার ফ্লো তৈরি করাকে প্রপস ড্রিলিং বলে।
- **সমাধান**:
  ১. কম্পোনেন্ট কম্পোজিশন (চিলড্রেন প্রপস সরাসরি পাস করা)।
  ২. রিঅ্যাক্ট কনটেক্সট (Context API)।
  ৩. গ্লোবাল স্টেট ম্যানেজার (Zustand বা Redux)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লগইন ইউজারের তথ্য App.tsx থেকে Header, Nav, Profile হয়ে EditButton-এ পাস করা যেখানে মাঝখানের কোনো নোডের ওই ডাটা কোনো কাজেই লাগে না।

### উত্তম অনুশীলন (Best Practice)
গ্লোবাল মান যেমন থিম, ভাষা বা লগইন ক্রেডেনশিয়ালের জন্যই কনটেক্সট ব্যবহার করুন। অতিরিক্ত ফ্রিকোয়েন্ট স্টেট পরিবর্তনের জন্য কনটেক্সট ব্যবহার পরিহার করুন কারণ এটি চাইল্ড নোডগুলোকে অহেতুক রেন্ডার করায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
প্রতিটি ছোটখাটো স্টেট শেয়ারিংয়ের জন্য কনটেক্সট বানিয়ে ফেলা, যা ফালতু জটিলতা তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { createContext, useContext } from 'react';

const AuthContext = createContext<string | null>(null);

// হেডার বা ন্যাভ দিয়ে অথ ডাটা ড্রিল করা হচ্ছে না
export function App() {
  return (
    <AuthContext.Provider value="Rohit">
      <Header />
    </AuthContext.Provider>
  );
}

function Header() {
  return <Navigation />; // কোনো প্রপস দেওয়া হয়নি!
}

function Navigation() {
  const user = useContext(AuthContext);
  return <div>লগইন ইউজার: {user}</div>;
}
\`\`\``
  },
  {
    id: 'react-12',
    title: 'Explain the utility of React Children API and when to use it.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'ChildrenAPI', 'Components'],
    enAnswer: 'The React.Children API provides helper utilities for manipulating and mapping the this.props.children opaque data structure, enabling safe mapping or counting of child nodes.',
    bnAnswer: 'React.Children API হলো একটি হেল্পার ইউটিলিটি যা চাইল্ড কম্পোনেন্ট ট্রি বা props.children ম্যানিপুলেট করতে ব্যবহৃত হয়, এবং নিরাপদে চিলড্রেন লুপ বা কাউন্টিং সম্পন্ন করে।',
    enExplanation: `### Explanation
\`props.children\` is not a clean array. If there is only one child, it is an object. If there are none, it is undefined. Directly running \`props.children.map\` will crash in these edge cases. \`React.Children.map\` handles these variations safely.

### Real-World Example
Creating a custom Tabs layout component where you need to loop through children, extract their title props, and render them as tabs headings at the top.

### Best Practice
Prefer standard layout composition with slots (like passing dedicated named components) before resorting to children parsing APIs.

### Common Mistakes
Trying to alter props directly on raw children elements. You must use \`React.cloneElement\` to inject additional props safely.

### Code Example
\`\`\`tsx
import React, { ReactNode } from 'react';

interface ListProps { children: ReactNode }

export function RenderCount({ children }: ListProps) {
  // Safe calculation even if children is a single item or null
  const count = React.Children.count(children);

  return (
    <div>
      <p>Total items nested: {count}</p>
      {React.Children.map(children, (child) => (
        <div className="border-b p-2">{child}</div>
      ))}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`props.children\` সরাসরি কোনো অ্যারে নয়। যদি একটি নোড থাকে তবে এটি অবজেক্ট হয় আর কোনো নোড না থাকলে undefined হয়। সরাসরি \`props.children.map\` চালালে এটি ক্র্যাশ করবে। \`React.Children.map\` এই সমস্যা দূর করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম ট্যাব লেআউট যেখানে ভেতরের সকল চাইল্ডকে লুপ করে তাদের প্রপস পড়ে উপরে হেডার তৈরি করতে হয়।

### উত্তম অনুশীলন (Best Practice)
জটিল চিলড্রেন পার্সিং করার আগে স্লট কম্পোজিশন ট্রাই করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
চাইল্ড এলিমেন্টের প্রপস সরাসরি এডিট করার চেষ্টা করা। কোনো চাইল্ডে অতিরিক্ত প্রপস ঢোকাতে চাইলে \`React.cloneElement\` ব্যবহার করতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { ReactNode } from 'react';

interface ListProps { children: ReactNode }

export function RenderCount({ children }: ListProps) {
  // চিলড্রেন একটা হোক বা বেশি, নিরাপদে কাউন্ট করে
  const count = React.Children.count(children);

  return (
    <div>
      <p>মোট নোড সংখ্যা: {count}</p>
      {React.Children.map(children, (child) => (
        <div className="border-b p-2">{child}</div>
      ))}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-13',
    title: 'How do you build a custom React hook to track media queries?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'CustomHooks', 'MediaQueries'],
    enAnswer: 'You register a window.matchMedia event listener inside a custom hook, storing the match status in state and cleaning up the listener on component unmount.',
    bnAnswer: 'একটি কাস্টম হুকের ভেতর window.matchMedia লিসনার রেজিস্টার করে তার ফলাফল স্টেটে আপডেট করতে হয় এবং মাউন্ট চলে যাওয়ার সময় ইভেন্টটি ক্লিয়ার করতে হয়।',
    enExplanation: `### Explanation
Responsive styling is usually done in CSS. However, when you need to load different React logic or conditionally render components (like loading a mobile slider instead of a desktop table) based on resolution, a JS custom hook is required.

### Real-World Example
In a dashboard dashboard, loading a mobile drawer layout instead of a desktop sidebar layout conditionally when screen width decreases below 768px.

### Best Practice
Use modern standard \`mediaQueryList.addEventListener('change', listener)\` instead of the legacy deprecated \`addListener\` method.

### Common Mistakes
Registering matchMedia listeners inside render loop directly, triggering new event registrations on every minor update.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রেসপনসিভ স্টাইল সাধারণত সিএসএস দিয়েই করা ভালো। তবে যদি স্ক্রিন সাইজ মেপে কোনো রিঅ্যাক্ট কম্পোনেন্ট রেন্ডারিং কন্ডিশনাল করতে হয় (যেমন- মোবাইলে স্লাইডার, ডেক্সটপে টেবিল), তখন জেএস দিয়ে মিডিয়া কুয়েরি ট্র্যাক করতে কাস্টম হুক দরকার হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মেইন ড্যাশবোর্ড স্ক্রিন ৭৬৮ পিক্সেলের নিচে নামার সাথে সাথে সাইডবারটি রিমুভ করে দিয়ে মোবাইলের ড্রয়ার মেনু শো করানো।

### উত্তম অনুশীলন (Best Practice)
পুরোনো \`addListener\` ব্যবহারের পরিবর্তে আধুনিক ও স্ট্যান্ডার্ড \`mediaQueryList.addEventListener('change', listener)\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডারের সময় ডিরেক্ট matchMedia অ্যাড করা, যা প্রতিটি স্টেট আপডেটে নতুন নতুন ইভেন্ট লিসনার তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}
\`\`\``
  },
  {
    id: 'react-14',
    title: 'Explain the rules of custom React hooks creation.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'CustomHooks', 'RulesOfHooks'],
    enAnswer: 'A custom hook is a Javascript function whose name starts with "use" and that can call other React hooks. They must follow Hook rules: only call hooks at the top level.',
    bnAnswer: 'কাস্টম হুক হলো এমন একটি সাধারণ জাভাস্ক্রিপ্ট ফাংশন যার নাম "use" দিয়ে শুরু হয় এবং যা অন্যান্য হুক কল করতে পারে। এগুলো হুকের নিয়ম মেনে চলে এবং শুধু টপ-লেভেলেই কল করা যায়।',
    enExplanation: `### Explanation
Custom Hooks extract stateful logic into reusable functions.
- **Rules of Hooks**:
  1. Only call Hooks at the top level of functional components. Don't call them inside loops, conditions, or nested functions.
  2. Only call Hooks from React function components or custom Hooks.

### Real-World Example
Instead of duplicating fetch calls and loaders across multiple tables, we extract the logic into a reusable \`useFetch\` hook.

### Best Practice
Name custom hooks starting with \`use\` (e.g. \`useAuth\`). This allows ESLint checkers to enforce hooks rules automatically.

### Common Mistakes
Assuming custom hooks share state values. Custom hooks share state *logic*, not actual state values. Every invocation of a hook creates an isolated state container.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

// Reusable Hook for Fetching
export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(resData => {
        if (active) {
          setData(resData);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, [url]);

  return { data, loading };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কাস্টম হুক মূলত শেয়ার করা লজিকগুলোকে সাধারণ ফাংশน ফাইলে রূপান্তর করতে সাহায্য করে।
- **হুকের নিয়মাবলী**:
  ১. শুধুমাত্র রুট লেভেলে হুক কল করুন। কোনো কন্ডিশনাল, লুপ বা ফাংশনের ভেতরে হুক লেখা যাবে না।
  ২. শুধুমাত্র ফাংশনal কম্পোনেন্ট অথবা অন্য কোনো কাস্টম হুকের ভেতর থেকে এটি রান করানো যাবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একাধিক টেবিলে ডাটা লোডিং ও এরর হ্যান্ডলিং কোড বারবার না লিখে একটি কমন \`useFetch\` কাস্টম হুক ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
কাস্টম হুকের নাম অবশ্যই \`use\` দিয়ে শুরু করুন (যেমন- \`useAuth\`) যাতে ইএসলিন্ট (ESLint) হুকের নিয়মগুলো কম্পাইল করার সময় ভ্যালিডেট করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে কাস্টম হুক ব্যবহার করলে তাদের স্টেটগুলোও শেয়ার হয়ে যায়। আসলে কাস্টম হুক শুধুমাত্র স্টেট চালানোর লজিক শেয়ার করে, একেক জায়গায় ডিক্লেয়ার করলে তারা সম্পুর্ণ আলাদা স্টেট ধারণ করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

// ডাটা ফেচ করার কমন রিইউজেবল কাস্টম হুক
export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(resData => {
        if (active) {
          setData(resData);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, [url]);

  return { data, loading };
}
\`\`\``
  },
  {
    id: 'react-15',
    title: 'Explain various Conditional Rendering techniques in React.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'ConditionalRendering', 'JSX'],
    enAnswer: 'React supports conditional rendering using ternary operators, Logical AND (&&), if-else blocks outside JSX, and switch-case expressions.',
    bnAnswer: 'রিঅ্যাক্ট কন্ডিশনাল রেন্ডারিংয়ের জন্য টার্নারি অপারেটর, লজিক্যাল AND (&&), JSX-এর বাইরে if-else কন্ডিশন এবং switch-case ব্যবহার সমর্থন করে।',
    enExplanation: `### Explanation
JSX evaluates expressions. Therefore, you cannot run standard \`if/else\` statements inside JSX curly braces.
- **Logical AND (&&)**: Renders when condition is true.
- **Ternary (?:)**: Renders output A when true, output B when false.
- **Early Return**: Returning JSX early from a function if a condition is met.

### Real-World Example
Displaying an admin edit panel button only if user role equals admin, else displaying a standard lock sign.

### Best Practice
Avoid complex, nested ternary operators in JSX, as they make reading structure very difficult. Instead, refactor them into sub-components or local variables.

### Common Mistakes
Using a number field in logical AND like \`count && <p>Item exists</p>\`. If \`count\` is 0, React will render \`0\` on screen since 0 is evaluated as a falsy number. Use \`count > 0 && ...\` instead.

### Code Example
\`\`\`tsx
export function StatusIndicator({ state }: { state: 'loading' | 'success' | 'error' }) {
  // 1. Early return pattern
  if (state === 'loading') {
    return <div>Loading resources...</div>;
  }

  return (
    <div>
      {/* 2. Ternary operator */}
      {state === 'success' ? (
        <p className="text-green-500">Operation Successful</p>
      ) : (
        <p className="text-red-500">Error Occurred</p>
      )}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
JSX জাভাস্ক্রিপ্ট এক্সপ্রেশন ইভ্যালুয়েট করে। তাই JSX-এর ভেতর সরাসরি \`if/else\` চালানো যায় না।
- **Logical AND (&&)**: কন্ডিশন সত্য হলে পাশের অংশ রেন্ডার করে।
- **Ternary (?:)**: সত্য হলে এক অংশ এবং মিথ্যা হলে অন্য অংশ রেন্ডার করে।
- **Early Return**: সত্য হলে ফাংশন থেকে আগেই রিটার্ন করে দেওয়া।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার যদি অ্যাডমিন হন তবেই কেবল এডিট বাটনটি রেন্ডার করা, অন্যথায় লক সাইন শো করানো।

### উত্তম অনুশীলন (Best Practice)
JSX-এর ভেতর নেস্টেড টার্নারি অপারেটর পরিহার করুন, কারণ এটি রিডাবিলিটি নষ্ট করে। এর পরিবর্তে লজিকটি বাইরে নিয়ে ভেরিয়েবলে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
লজিক্যাল AND-এ সংখ্যা বা কাউন্টার ফিল্ড চেক করা, যেমন- \`count && <p>আইটেম আছে</p>\`। কাউন্ট যদি ০ হয় তবে স্ক্রিনে \`0\` প্রিন্ট হয়ে যাবে কারণ রিঅ্যাক্ট ০ রেন্ডার করে। এর বদলে \`count > 0 && ...\` লিখুন।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
export function StatusIndicator({ state }: { state: 'loading' | 'success' | 'error' }) {
  // ১. আর্লি রিটার্ন প্যাটার্ন
  if (state === 'loading') {
    return <div>লোড হচ্ছে...</div>;
  }

  return (
    <div>
      {/* ২. টার্নারি অপারেটর */}
      {state === 'success' ? (
        <p className="text-green-500">কাজটি সফল হয়েছে</p>
      ) : (
        <p className="text-red-500">ত্রুটি দেখা দিয়েছে</p>
      )}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-16',
    title: 'Explain basic Form Validation in React.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Forms', 'Validation'],
    enAnswer: 'Form validation in React is managed by storing validation error messages in state, updating them during input onChange triggers or form onSubmit checks.',
    bnAnswer: 'রিঅ্যাক্ট ফর্ম ভ্যালিডেশন ইনপুট পরিবর্তনের সময় বা সাবমিট ক্লিক করার সময় ভ্যালিডেশন এররগুলো স্টেটে স্টোর করে এবং UI-তে প্রদর্শন করে হ্যান্ডেল করা হয়।',
    enExplanation: `### Explanation
When building controlled forms, you check rules (like email formats or character lengths) before posting data to API. If a field fails, error strings are set in error state, which blocks the submit action and flags the invalid elements.

### Real-World Example
Checking if the email input contains an \`@\` symbol. If it does not, prevent form submission and color the border red.

### Best Practice
Perform basic validation on change, and run full checks on form submit. Clear field-specific errors once the user corrects their input.

### Common Mistakes
Submitting the form with invalid data because client-side check checks were ignored or error state updates were not handled synchronously.

### Code Example
\`\`\`tsx
import { useState, FormEvent } from 'react';

export function SimpleForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }
    setError(null);
    console.log('Sending data to API...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={e => {
          setEmail(e.target.value);
          if (e.target.value.includes('@')) setError(null);
        }} 
        placeholder="Enter Email"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ফর্ম ডেটা এপিআই-তে পাঠানোর আগে এর ফরম্যাট চেক করা হয়। কোনো ইনপুট নিয়মের বাইরে গেলে এরর টেক্সটটিকে স্টেট ভেরিয়েবলে সংরক্ষণ করা হয় এবং ইনপুটের বর্ডার লাল করে সাবমিশন আটকানো হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইমেইল ইনপুট ফিল্ডে \`@\` চিহ্ন আছে কি না তা পরীক্ষা করা। না থাকলে সাবমিশন বন্ধ করে দেওয়া এবং ওয়ার্নিং দেখানো।

### উত্তম অনুশীলন (Best Practice)
ইনপুটের সাথে সাথে ছোট ভ্যালিডেশন করতে পারেন কিন্তু সম্পূর্ণ ভ্যালিডেশন সাবমিটের সময় করাই শ্রেয়। ইউজার ইনপুট সংশোধন করার সাথে সাথে এরর দূর করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভ্যালিডেশন এরর থাকা সত্ত্বেও এপিআই রিকোয়েস্ট পাঠিয়ে দেওয়া কারণ এরর চেক ব্লক করা হয়নি।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, FormEvent } from 'react';

export function SimpleForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('ইমেইলটি সঠিক নয়');
      return;
    }
    setError(null);
    console.log('এপিআই রিকোয়েস্ট পাঠানো হচ্ছে...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={e => {
          setEmail(e.target.value);
          if (e.target.value.includes('@')) setError(null);
        }} 
        placeholder="ইমেইল লিখুন"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">জমা দিন</button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'react-17',
    title: 'Explain Cleanup Operations in useEffect and why they are necessary.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'useEffect', 'Cleanup'],
    enAnswer: 'A cleanup function is returned from a useEffect callback. It runs when the component unmounts or before the effect runs again, clearing timeouts, intervals, and observers.',
    bnAnswer: 'useEffect কলব্যাক থেকে একটি ক্লিনআপ ফাংশন রিটার্ন করা হয়। এটি কম্পোনেন্ট আনমাউন্ট হওয়ার সময় অথবা পরবর্তী ইফেক্ট রান হওয়ার আগে অবজেক্ট বা টাইমার ক্লিয়ার করতে সাহায্য করে।',
    enExplanation: `### Explanation
Some effects create persistent resources (like \`setInterval\`, WebSockets, or global event listeners). If these are not removed when components disappear, they remain in browser memory, executing in the background and causing memory leaks.

### Real-World Example
An app widget has a countdown timer ticking every second. When the user navigates away and the widget unmounts, the interval must be cleared, or it will tick forever in the background.

### Best Practice
Always return cleanups when using timers, subscriptions, observers, or manual DOM events inside useEffect.

### Common Mistakes
Forgetting that React Strict Mode mounts and unmounts components twice in development. Without cleanups, this causes double events or memory leaks immediately.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Correct: Clear interval to prevent memory leak
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Current Time: {time}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কিছু ইফেক্ট ব্রাউজারে সক্রিয় রিসোর্স তৈরি করে (যেমন- \`setInterval\`, ওয়েব সকেট)। এগুলো কম্পোনেন্ট চলে যাওয়ার সময় ডিলিট না করলে ব্রাউজারের মেমোরিতে থেকে যায় যা মেমোরি লিক ঘটিয়ে কম্পিউটার স্লো করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইভ ক্লক উইজেট প্রতি সেকেন্ডে টাইম আপডেট করে। ইউজার অন্য পেজে চলে গেলে টাইমারটি বন্ধ করা প্রয়োজন যাতে ব্যাকগ্রাউন্ডে ব্রাউজার অহেতুক লুপ না চালায়।

### উত্তম অনুশীলন (Best Practice)
টাইমার, সকেট সাবস্ক্রিপশন, অবজারভার বা ম্যানুয়াল ডম ইভেন্ট রেজিস্টার করলে ইফেক্ট ফাংশনের শেষে অবশ্যই ক্লিনআপ লজিক রিটার্ন করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিঅ্যাক্ট স্ট্রিট মোড ডেভেলপমেন্ট মোডে কম্পোনেন্ট দুইবার মাউন্ট-আনমাউন্ট করে। ক্লিনআপ না দিলে শুরুতেই দুইটি টাইমার সমান্তরালে চলতে শুরু করবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // সঠিক: মেমোরি লিক এড়াতে ইন্টারভাল ক্লিয়ার করা হচ্ছে
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>বর্তমান সময়: {time}</div>;
}
\`\`\``
  },
  {
    id: 'react-18',
    title: 'What triggers a React Component to re-render?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Rendering', 'Lifecycle'],
    enAnswer: 'A component re-renders when: (1) its local state changes, (2) its parent component renders, or (3) its received props change.',
    bnAnswer: 'একটি রিঅ্যাক্ট কম্পোনেন্ট তখনই পুনরায় রেন্ডার হয় যখন: (১) এর লোকাল স্টেট পরিবর্তিত হয়, (২) এর প্যারেন্ট কম্পোনেন্ট রেন্ডার হয়, অথবা (৩) এর প্রপস পরিবর্তিত হয়।',
    enExplanation: `### Explanation
React updates the UI when state changes are detected.
1. **State mutation**: calling \`setState\`.
2. **Prop update**: Parent changes passed properties.
3. **Parent re-render**: By default, child elements re-render when the parent renders unless memoized.
4. **Context changes**: If context value updates, all consumer components render.

### Real-World Example
In a user card component, clicking a "change username" button updates state, triggering a redraw of the card UI to show the new name.

### Best Practice
Design components to be clean and stateless where possible. Minimize re-renders by moving state to leaf components.

### Common Mistakes
Directly mutating state variables, like \`state.items.push(newItem)\` and then setting state with the same reference. React compares states by reference and will skip rendering.

### Code Example
\`\`\`tsx
import { useState } from 'react';

export function RendererTracker() {
  const [list, setList] = useState<string[]>([]);

  const handleAdd = () => {
    // Correct: Creating a new array reference triggers render
    setList(prev => [...prev, 'Item']);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Item</button>
      <p>Length: {list.length}</p>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্টেট পরিবর্তন শনাক্ত হলে রিঅ্যাক্ট ব্রাউজার স্ক্রিনে UI আপডেট পাঠায়।
১. **স্টেট আপডেট**: \`setState\` ফাংশন কল করা।
২. **প্রপস আপডেট**: প্যারেন্ট কম্পোনেন্ট প্রপসের মান পরিবর্তন করা।
৩. **প্যারেন্ট রেন্ডার**: প্যারেন্ট নোড রেন্ডার হলে তার ভেতরের সকল চাইল্ড নোড ডিফল্টভাবে রেন্ডার হয় (যদি না memo করা থাকে)।
৪. **কনটেক্সট পরিবর্তন**: কনটেক্সটের ভ্যালু পরিবর্তন হলে কনজিউমার নোডগুলো রেন্ডার হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইউজার কার্ডে "নাম পরিবর্তন" বাটনে ক্লিক করলে স্টেটে ইউজারের নাম আপডেট হবে যা কার্ডটিকে রি-রেন্ডার করে নতুন নাম স্ক্রিনে আনবে।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্টগুলোকে যথাসম্ভব পরিচ্ছন্ন ও স্টেটলেস রাখুন। রি-রেন্ডার কমাতে স্টেটগুলোকে রিলেটেড চাইল্ডদের কাছে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্টেটের ভ্যারিয়েবল সরাসরি পরিবর্তন করা, যেমন- \`state.items.push(item)\` এবং পরে একই রেফারেন্সে স্টেট সেট করা। রিঅ্যাক্ট রেফারেন্স তুলনা করে বলে কোনো পরিবর্তন না দেখে রেন্ডার করা এড়িয়ে যাবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';

export function RendererTracker() {
  const [list, setList] = useState<string[]>([]);

  const handleAdd = () => {
    // সঠিক: নতুন অ্যারে রেফারেন্স তৈরি করায় রেন্ডারিং হবে
    setList(prev => [...prev, 'নতুন আইটেম']);
  };

  return (
    <div>
      <button onClick={handleAdd}>আইটেম যোগ করুন</button>
      <p>মোট আইটেম: {list.length}</p>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-19',
    title: 'Explain React.lazy and Suspense for basic code splitting.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'lazy', 'Suspense', 'Performance'],
    enAnswer: 'React.lazy lets you define components that are loaded dynamically, while Suspense lets you show fallback skeletons while the dynamic components bundles are downloading.',
    bnAnswer: 'React.lazy এমন কম্পোনেন্ট তৈরি করতে দেয় যা ডাইনামিকালি লোড হয়, এবং Suspense সেই বান্ডেল ডাউনলোড হওয়া পর্যন্ত স্ক্রিনে একটি ফলব্যাক লোডার বা স্কেলিটন দেখাতে সাহায্য করে।',
    enExplanation: `### Explanation
By default, compilers put all code into a single big JavaScript file. This causes long initial page load times. Code splitting splits scripts into small pieces. Routes or heavy widgets are lazy loaded only when needed.

### Real-World Example
An admin layout containing heavy statistics tables and charts. When users land on the public homepage, they do not need to download the admin files. We lazy load it.

### Best Practice
Always declare lazy-loaded components outside the parent component render function to prevent reloading on every update cycle.

### Common Mistakes
Not wrapping lazy components inside a \`<Suspense>\` boundary. This causes React runtime errors.

### Code Example
\`\`\`tsx
import { lazy, Suspense } from 'react';

// Lazy loading component
const HeavyWidget = lazy(() => import('./HeavyWidget'));

export function PortalPage() {
  return (
    <div>
      <h1>Standard Dashboard Header</h1>
      <Suspense fallback={<div>Loading Dashboard Layout...</div>}>
        <HeavyWidget />
      </Suspense>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে কম্পাইলার সকল কোডকে একটিমাত্র বড় জাভাস্ক্রিপ্ট ফাইলে রূপান্তর করে, যা পেজের স্পিড কমিয়ে দেয়। কোড স্প্লিটিং স্ক্রিপ্টগুলোকে ছোট করে প্রয়োজন অনুযায়ী ক্লায়েন্টে পাঠায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় চার্ট সম্বলিত অ্যাডমিন মডিউল। সাধারণ ইউজার যখন শুধু হোমপেজে ঘুরবে তখন ওই চার্টের ফাইল লোড না করে স্ক্রিন সামনে আসার পর lazy load করা।

### উত্তম অনুশীলন (Best Practice)
সবসময় রেন্ডার ফাংশনের বাইরে ফাইলের একদম শুরুতে \`React.lazy\` দিয়ে ইম্পোর্ট ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাসপেন্স (\`<Suspense>\`) বাউন্ডারির মধ্যে lazy কম্পোনেন্ট না রাখা। এর ফলে পুরো রিঅ্যাক্ট অ্যাপ ক্র্যাশ করে এরর দেখাবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { lazy, Suspense } from 'react';

// লেজি লোড দিয়ে ডাইনামিক ইম্পোর্ট
const HeavyWidget = lazy(() => import('./HeavyWidget'));

export function PortalPage() {
  return (
    <div>
      <h1>সাধারণ ড্যাশবোর্ড হেডার</h1>
      <Suspense fallback={<div>ড্যাশবোর্ড লেআউট লোড হচ্ছে...</div>}>
        <HeavyWidget />
      </Suspense>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-20',
    title: 'What are CSS Modules in React and why are they used?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'CSSModules', 'Styling'],
    enAnswer: 'CSS Modules are CSS files where all class names are scoped locally to the component by default, preventing name clashes across the application.',
    bnAnswer: 'CSS Modules হলো এমন CSS ফাইল যেখানে ক্লাসগুলোর নাম স্বয়ংক্রিয়ভাবে লোকালি ডিফাইন হয়, ফলে অ্যাপ্লিকেশনের বিভিন্ন ফাইলে একই নামের ক্লাস থাকলেও স্টাইল ওভারল্যাপ বা গোলমাল হয় না।',
    enExplanation: `### Explanation
In plain CSS, class names are global. If two files define \`.card\`, they overwrite each other. CSS modules solve this by appending a unique hash to class names during build time, e.g. \`Card_card__3a9f1\`.

### Real-World Example
You have a primary card styling in profile section and another card layout in products section. CSS modules ensure their styles never conflict even if both files use \`className="card"\`.

### Best Practice
Name files as \`[Component].module.css\` and import styles as an object wrapper: \`import styles from './Card.module.css'\`.

### Common Mistakes
Trying to use global style classes inside a CSS module without declaring them as \`:global(.className)\`.

### Code Example
\`\`\`tsx
// File: Button.module.css
/* 
.btn {
  background-color: blue;
  color: white;
}
*/

// File: Button.tsx
import styles from './Button.module.css';

export function CustomButton() {
  // Styles btn is hashed to a unique class string automatically
  return <button className={styles.btn}>Save Changes</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ সিএসএসে ক্লাসের নাম গ্লোবাল থাকে। দুটি ফাইলে \`.card\` থাকলে তারা একে অপরকে রি-রাইট করতে পারে। CSS Modules বিল্ড টাইমে ক্লাস নামের শেষে একটি ইউনিক হ্যাশ কোড যুক্ত করে দেয়, যেমন- \`Card_card__3a9f1\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
প্রোফাইল সেকশনে একটি কার্ড এবং প্রোডাক্ট লিস্ট সেকশনে আরেকটি কার্ড আছে। সিএসএস মডিউল নিশ্চিত করে যে উভয় ফাইলে ক্লাস নেম \`card\` থাকলেও একে অপরের স্টাইল নষ্ট করবে না।

### উত্তম অনুশীলন (Best Practice)
ফাইলের নাম \`[Component].module.css\` রাখুন এবং অবজেক্ট আকারে ইম্পোর্ট করুন: \`import styles from './Card.module.css'\`।

### সাধারণ ভুলসমূহ (Common Mistakes)
মডিউল সিএসএসের ভেতর গ্লোবাল সিএসএস ক্লাস রান করতে চাওয়া যেখানে \`:global(.className)\` সিনট্যাক্সটি ব্যবহার করা হয়নি।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// ফাইল: Button.module.css
/* 
.btn {
  background-color: blue;
  color: white;
}
*/

// ফাইল: Button.tsx
import styles from './Button.module.css';

export function CustomButton() {
  // styles.btn স্বয়ংক্রিয়ভাবে ইউনিক স্ট্রিং ক্লাসে পরিণত হবে
  return <button className={styles.btn}>পরিবর্তন সংরক্ষণ করুন</button>;
}
\`\`\``
  },
  {
    id: 'react-21',
    title: 'Explain Tailwind CSS Integration inside React applications.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'TailwindCSS', 'Styling'],
    enAnswer: 'Tailwind CSS compiles utility-first utility classes by scanning React files, injecting only matching utility rules into a single production stylesheet.',
    bnAnswer: 'Tailwind CSS রিঅ্যাক্ট ফাইলগুলো স্ক্যান করে ব্যবহৃত ইউটিলিটি ক্লাসগুলো সংগ্রহ করে এবং শুধুমাত্র সেই রুলসগুলো দিয়ে একটি সিএসএস ফাইল তৈরি করে।',
    enExplanation: `### Explanation
Tailwind uses post-processing compiler configurations. In Tailwind v4, integration is fully CSS-driven, configuring directories and theme variables inside custom stylesheet annotations.

### Real-World Example
Building a responsive flex grid with padding, background colors, and rounded corners without writing any custom CSS selector files.

### Best Practice
Design components using semantic components rather than writing long, duplicate tailwind lists in every JSX node. Keep layout utility declarations cohesive.

### Common Mistakes
Generating dynamic class names by string concatenation like \`className={\`bg-\${color}-500\`}\`. Tailwind static analysis scans files for exact strings; it cannot resolve runtime concatenations. Always specify full classes: \`color === 'red' ? 'bg-red-500' : 'bg-blue-500'\`.

### Code Example
\`\`\`tsx
export function AccentButton({ isCritical }: { isCritical: boolean }) {
  // Correct static class resolution
  const buttonStyle = isCritical 
    ? 'bg-red-600 hover:bg-red-700' 
    : 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <button className={\`px-4 py-2 text-white font-semibold rounded-lg shadow-md transition \${buttonStyle}\`}>
      Confirm Action
    </button>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টেইলউইন্ড পোস্ট-প্রসেসিং কম্পাইলার কনফিগারেশন ব্যবহার করে। সংস্করণ ৪ থেকে ডিরেক্ট সিএসএস ফাইল নির্দেশনার মাধ্যমে থিম ভ্যারিয়েবল ও স্ক্যানিং সেটআপ কন্ট্রোল করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কোনো সিএসএস ফাইল না লিখেই মার্জিন, বর্ডার-রেডিয়াস, ফ্ল্যাক্স বক্স এবং হোভার অ্যানিমেশন দিয়ে একটি আকর্ষণীয় বাটন ইন্টারফেস তৈরি করা।

### উত্তম অনুশীলন (Best Practice)
ক্লাস লিস্ট অতিরিক্ত বড় হয়ে গেলে সেগুলোকে ছোট করার জন্য কাস্টম কম্পোনেন্ট তৈরি করুন যাতে একই কোড ডুপ্লিকেট না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডারের সময় ডাইনামিক স্ট্রিং কনক্যাটেনেশন করা যেমন- \`className={\`bg-\${color}-500\`}\`। টেইলউইন্ডের স্ট্যাটিক অ্যানালাইজার রানিং কোড বুঝতে পারে না বলে সেই স্টাইলটি রিমুভ করে দিবে। সঠিক উপায়: \`color === 'red' ? 'bg-red-500' : 'bg-blue-500'\`।

### Code Example
\`\`\`tsx
export function AccentButton({ isCritical }: { isCritical: boolean }) {
  // সঠিক স্ট্যাটিক ক্লাস ডিফাইন করার নিয়ম
  const buttonStyle = isCritical 
    ? 'bg-red-600 hover:bg-red-700' 
    : 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <button className={\`px-4 py-2 text-white font-semibold rounded-lg shadow-md transition \${buttonStyle}\`}>
      নিশ্চিত করুন
    </button>
  );
}
\`\`\``
  },
  {
    id: 'react-22',
    title: 'Explain Component Lifecycle in Class Components and how they map to functional Hooks.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Lifecycle', 'ClassComponents', 'Hooks'],
    enAnswer: 'Class lifecycle methods manage phases of mounting, updating, and unmounting. Functional components use useEffect to map and consolidate these lifecycle events.',
    bnAnswer: 'ক্লাস কম্পোনেন্টের লাইফসাইকেল মেথডগুলো মাউন্ট, আপডেট এবং আনমাউন্ট পর্যায়গুলো হ্যান্ডেল করে। ফাংশনাল কম্পোনেন্ট একই লজিক useEffect হুকের মাধ্যমে রান করায়।',
    enExplanation: `### Explanation
- **Mounting**: \`componentDidMount\` runs once after render. Maps to \`useEffect(fn, [])\`.
- **Updating**: \`componentDidUpdate\` runs after prop/state changes. Maps to \`useEffect(fn, [deps])\`.
- **Unmounting**: \`componentWillUnmount\` runs before DOM removal. Maps to the return callback of \`useEffect\`.

### Real-World Example
Registering a window resize handler. In class components, this requires setting listeners in \`componentDidMount\` and clearing them in \`componentWillUnmount\`. In functions, it resides inside a single \`useEffect\` block.

### Best Practice
Avoid mixing class components and functional components inside new modules. Modern React prioritizes Hooks for logic sharing.

### Common Mistakes
Thinking \`useEffect\` with no dependency array runs exactly like \`componentDidMount\`. A hook with no array runs on *every single render cycle*, whereas an empty array \`[]\` runs only once.

### Code Example
\`\`\`tsx
import { useEffect } from 'react';

export function LifecycleMapComponent() {
  useEffect(() => {
    console.log('Mounting: Component mounted to DOM (componentDidMount)');

    return () => {
      console.log('Unmounting: Component is leaving DOM (componentWillUnmount)');
    };
  }, []); // Empty array signifies mount/unmount cycle

  return <div>Lifecycle mapped cleanly</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Mounting**: \`componentDidMount\` ডমে নোড স্ক্রিনে আসার পর একবার চলে। হুকে এটি \`useEffect(fn, [])\`।
- **Updating**: \`componentDidUpdate\` স্টেট বা প্রপস পরিবর্তনের পর চলে। হুকে এটি \`useEffect(fn, [deps])\`।
- **Unmounting**: \`componentWillUnmount\` ডম থেকে চলে যাওয়ার আগে চলে। হুকে এটি \`useEffect\`-এর রিটার্ন বা ক্লিনআপ ফাংশন।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চ্যাট উইজেট কানেক্ট করা। ক্লাসে মাউন্ট হওয়ার সময় কানেক্ট এবং আনমাউন্টের সময় ডিসকানেক্ট লজিক আলাদা মেথডে লিখতে হয়। হুকে তা একই ব্লকে রাখা যায়।

### উত্তম অনুশীলন (Best Practice)
নতুন কোডবেসে ক্লাস কম্পোনেন্ট পরিহার করুন। আধুনিক রিঅ্যাক্ট হুকের ওপরই জোর দেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডিপেন্ডেন্সি অ্যারে না দিয়ে ভাবা এটি \`componentDidMount\`-এর মতো কাজ করবে। অ্যারে না দিলে প্রতিটি রেন্ডারে ইফেক্ট ফায়ার হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useEffect } from 'react';

export function LifecycleMapComponent() {
  useEffect(() => {
    console.log('মাউন্টিং: ডম নোড স্ক্রিনে এসেছে (componentDidMount)');

    return () => {
      console.log('আনমাউন্টিং: ডম নোড বিদায় নিচ্ছে (componentWillUnmount)');
    };
  }, []); // খালি অ্যারে মাউন্ট ও আনমাউন্ট নির্দেশ করে

  return <div>লাইফসাইকেল পরিষ্কারভাবে ম্যাপ করা হয়েছে</div>;
}
\`\`\``
  },
  {
    id: 'react-23',
    title: 'Explain Vite React Configuration and compilation settings.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Vite', 'BuildTool'],
    enAnswer: 'Vite uses native ES Modules (ESM) for lightning fast development dev server starts, compiling React TSX files via SWC or Babel plugins on the fly.',
    bnAnswer: 'Vite নেটিভ ES Modules (ESM) ব্যবহার করে অত্যন্ত দ্রুত ডেভ সার্ভার লোড করতে সাহায্য করে এবং SWC বা Babel প্লাগইনের সাহায্যে ডাইনামিকালি TSX ফাইল কম্পাইল করে।',
    enExplanation: `### Explanation
Legacy tools like Webpack bundle the entire app before loading. Vite serves source files directly via browser ESM, compiling files on demand. Production compilation uses Rollup to generate minified bundles.

### Real-World Example
Configuring path aliases inside \`vite.config.ts\` to map \`@/components\` to the local src folder to avoid nested directory paths like \`../../components\`.

### Best Practice
Use Vite templates with SWC (\`@vitejs/plugin-react-swc\`) instead of Babel for significantly faster Hot Module Replacement (HMR).

### Common Mistakes
Trying to access Node environment variables using \`process.env\` in a client Vite application. Vite uses \`import.meta.env.VITE_VARIABLE\` instead.

### Code Example
\`\`\`typescript
// vite.config.ts configuration snippet
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
webpack-এর মতো টুলগুলো প্রজেক্টের সব ফাইল একসাথে বান্ডেল করার পর ডেভ সার্ভার চালু করে। Vite সরাসরি ব্রাউজার ESM ব্যবহার করে কেবল প্রয়োজনীয় ফাইলটি ডাইনামিকালি কম্পাইল করে পাঠায়। প্রোডাকশনে বান্ডেল ছোট করার জন্য এটি Rollup ব্যবহার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
\`vite.config.ts\` এর ভেতরে পাথ অ্যালিয়াস (path alias) সেট করা যাতে প্রজেক্টে নোংরা নেস্টেড পাথ যেমন \`../../components\` এর জায়গায় \`@/components\` ব্যবহার করা যায়।

### উত্তম অনুশীলন (Best Practice)
কম্পাইলেশন স্পিড ও HMR দ্রুত করার জন্য Babel-এর পরিবর্তে SWC প্লাগইন (\`@vitejs/plugin-react-swc\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
Vite দিয়ে তৈরি অ্যাপ্লিকেশনে নোডের \`process.env\` দিয়ে এনভায়রনমেন্ট ভ্যারিয়েবল পড়তে চাওয়া। ভাইট অ্যাপে এটির পরিবর্তে \`import.meta.env.VITE_VARIABLE\` লিখতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// vite.config.ts কনফিগারেশন এর নমুনা
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
\`\`\``
  },
  {
    id: 'react-24',
    title: 'Explain Dynamic Routing in React Router DOM.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'ReactRouter', 'Routing'],
    enAnswer: 'Dynamic routing defines routes using path variables (e.g. /user/:id). Component screens extract these URL parameters using the useParams hook.',
    bnAnswer: 'ডাইনামিক রাউটিং পাথ ভ্যারিয়েবল (যেমন- /user/:id) ব্যবহার করে রাউট ডিফাইন করতে দেয়। কম্পোনেন্টগুলো useParams হুক ব্যবহার করে ইউআরএল থেকে এই প্যারামিটার মান পড়তে পারে।',
    enExplanation: `### Explanation
Web apps need dynamic screens representing database assets. Instead of registering hundreds of static URLs, routes are defined with placeholders: \`<Route path="/profile/:username" />\`. The colon tells React Router to capture the value.

### Real-World Example
Clicking on a user item redirecting the screen to \`/profile/rohit\`. The profile screen loads and displays info for "rohit" by reading URL parameters.

### Best Practice
Secure route structures. Always validate parameter formats (e.g. check if ID is an integer) inside the controller or loader function to prevent invalid database calls.

### Common Mistakes
Forgetting the colon (\`:\`) when registering the route path, making React Router treat the route path as a literal path.

### Code Example
\`\`\`tsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

export function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetails() {
  // Extract productId from route parameter
  const { productId } = useParams<{ productId: string }>();

  return <div>Loading details for product: {productId}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ইউজার প্রোফাইল বা কন্টেন্ট পেজের জন্য ডাইনামিক ইউআরএল-এর প্রয়োজন হয়। প্রতিটি পেজের জন্য আলাদা ইউআরএল না বানিয়ে কোলন চিহ্নের মাধ্যমে ডাইনামিক রাউট ডিক্লেয়ার করা হয়, যেমন- \`<Route path="/profile/:username" />\`। কোলন চিহ্নিত অংশটি রিঅ্যাক্ট রাউটার ক্যাপচার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি তালিকায় ইউজারের নামের ওপর ক্লিক করলে \`/profile/rohit\` এ চলে যাওয়া এবং পেজটি ইউআরএল থেকে "rohit" আইডি রিড করে তার ডাটাবেজ কন্টেন্ট তুলে আনা।

### উত্তম অনুশীলন (Best Practice)
রাউট প্যারামিটার ভ্যালিডেট করুন (যেমন- আইডিটি আসলেই সংখ্যা কি না চেক করা) যাতে ডাটাবেজে ভুল এপিআই কুয়েরি ফায়ার না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
রাউট রেজিস্টার করার সময় কোলন (\`:\`) দিতে ভুলে যাওয়া, যার ফলে রিঅ্যাক্ট রাউটার ওটিকে স্ট্যাটিক ডিরেক্ট পাথ মনে করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

export function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetails() {
  // useParams হুক দিয়ে productId প্যারামিটার রিড করা হচ্ছে
  const { productId } = useParams<{ productId: string }>();

  return <div>প্রোডাক্টের বিবরণ লোড হচ্ছে: {productId}</div>;
}
\`\`\``
  },
  {
    id: 'react-25',
    title: 'Explain Web Accessibility (a11y) standards in React component design.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Accessibility', 'a11y'],
    enAnswer: 'Web accessibility guarantees screen reader compatibility. In React, we use standard aria-* attributes, semantic HTML tags, and associate form inputs with labels using htmlFor.',
    bnAnswer: 'ওয়েব অ্যাক্সেসিবিলিটি নিশ্চিত করে যেন স্ক্রিন রিডার সহজে অ্যাপ রিড করতে পারে। রিঅ্যাক্টে আমরা aria-* অ্যাট্রিবিউট, সেম্যান্টিক ট্যাগ এবং htmlFor দিয়ে ইনপুটের সাথে লেবেল যুক্ত করি।',
    enExplanation: `### Explanation
Interactive components must support keyboard navigation and assistive screen reading.
- **aria-***: properties specify controls (like \`aria-expanded={isOpen}\`).
- **htmlFor**: In React, standard HTML \`for\` is reserved in JS. We use \`htmlFor\` on labels to map input fields to screen readers.

### Real-World Example
Creating an interactive dropdown list button. If opened, it must toggle the \`aria-expanded\` attribute so blind users are notified by screen readers that the option container is visible.

### Best Practice
Run ESLint plugins like \`eslint-plugin-jsx-a11y\` inside configurations to automatically warn developers about missing tags or attributes during development.

### Common Mistakes
Using standard non-interactive elements like \`<div onClick={handleClick}>\` without setting a \`role="button"\` or handling keypress events. This locks out keyboard-only users.

### Code Example
\`\`\`tsx
export function AccessibleForm() {
  return (
    <div className="flex flex-col gap-2">
      {/* Correct: htmlFor binds label to input ID for screen readers */}
      <label htmlFor="user-email">Email Address</label>
      <input 
        id="user-email" 
        type="email" 
        placeholder="Enter Email"
        aria-required="true"
      />
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ইন্টারেক্টিভ কম্পোনেন্টগুলোতে কিবোর্ড নেভিগেশন ও স্ক্রিন রিডার কম্প্যাটিবিলিটি থাকা আবশ্যক।
- **aria-***: বিভিন্ন ইন্টারেক্টিভ অবস্থা বর্ণনা করে (যেমন \`aria-expanded={isOpen}\`)।
- **htmlFor**: জাভাস্ক্রিপ্টে \`for\` কিওয়ার্ডটি রিজার্ভড থাকায় লেবেলে \`htmlFor\` ব্যবহার করে ইনপুট আইডির সাথে লিংক তৈরি করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম ড্রপডাউন বাটন ক্লিক করার সময় স্ক্রিন রিডার যেন বুঝতে পারে কন্টেন্ট খোলা হয়েছে, সেজন্য \`aria-expanded\` স্ট্যাটাস ট্রগল করা।

### উত্তম অনুশীলন (Best Practice)
কোডে কোনো অ্যাক্সেসিবিলিটি লিক আছে কি না তা কম্পাইল টাইমে চেক করতে \`eslint-plugin-jsx-a11y\` ইএসলিন্ট প্লাগইনটি সেটআপে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ \`div\`-এ \`onClick\` দিয়ে ইন্টারেকশন তৈরি করা যেখানে \`role="button"\` বা কিবোর্ড ইভেন্ট হ্যান্ডলার সেট করা হয়নি। এটি কিবোর্ড ইউজারদের ওই বাটন ক্লিক করতে দেয় না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
export function AccessibleForm() {
  return (
    <div className="flex flex-col gap-2">
      {/* সঠিক: htmlFor স্ক্রিন রিডারের জন্য লেবেলের সাথে ইনপুট লিংক করেছে */}
      <label htmlFor="user-email">ইমেইল ঠিকানা</label>
      <input 
        id="user-email" 
        type="email" 
        placeholder="ইমেইল লিখুন"
        aria-required="true"
      />
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-26',
    title: 'How do you handle focus management inside popup Modals in React?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'FocusManagement', 'useRef', 'Modal'],
    enAnswer: 'You track modal visibility using state, assign a ref to the first interactive field inside the modal, and trigger a focus() update inside a useEffect block when the modal opens.',
    bnAnswer: 'মডাল ভিজিবিলিটি স্টেট দিয়ে ট্র্যাক করা হয় এবং মডাল ওপেন হওয়ার সাথে সাথে useEffect-এর ভেতর থেকে মডালের প্রথম ইনপুট নোডটিকে focus() মেথড দিয়ে অ্যাক্টিভেট করা হয়।',
    enExplanation: `### Explanation
When a user clicks "Open Modal", screen readers and keyboard users need their browser focus pushed inside the dialog. Otherwise, pressing "tab" continues navigation behind the visible modal. When the modal closes, focus should return to the button that triggered it.

### Real-World Example
Opening a confirmation popup. As soon as it appears, the focus is placed onto the "Cancel" or "Yes" action button to support instant keyboard execution.

### Best Practice
Build a "focus trap" inside custom modals or utilize accessible headless library components (like Radix UI or Headless UI) which handle keyboard focus trapping natively.

### Common Mistakes
Forgetting to restore focus to the original button that launched the modal after it is closed, disorienting keyboard-only users.

### Code Example
\`\`\`tsx
import { useEffect, useRef } from 'react';

export function ConfirmModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the key button when dialog appears
      confirmBtnRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="modal-overlay">
      <div className="modal-body">
        <p>Confirm operation?</p>
        <button ref={confirmBtnRef} onClick={onClose}>Yes, Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন কোনো মডাল ওপেন হয়, তখন কিবোর্ড বা স্ক্রিন রিডার ব্যবহারকারীদের ব্রাউজার ফোকাস মডাল ডায়ালগের ভেতর নিয়ে যেতে হবে। তা না হলে কিবোর্ডের "Tab" চাপলে স্ক্রিনের পেছনের এলিমেন্টগুলো ফোকাস হতে থাকবে। মডাল বন্ধ হলে ফোকাস আগের ট্রিগার বাটনে ফিরিয়ে আনতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ডিলেট কনফার্মেশন মডাল ওপেন হওয়ার সাথে সাথে ফোকাস সরাসরি "Yes, Confirm" বাটনে নিয়ে যাওয়া যাতে ইউজার সহজেই কিবোর্ডের এন্টার দিয়ে কনফার্ম করতে পারেন।

### উত্তম অনুশীলন (Best Practice)
মডালের চারপাশেই কিবোর্ড ফোকাস আটকে রাখার জন্য "Focus Trap" লজিক লিখুন অথবা Radix UI এর মতো হেডলেস লাইব্রেরি ব্যবহার করুন যা এটি অটোমেটিক করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মডাল বন্ধ হওয়ার পর পেজের মূল ট্রিগার বাটনে ফোকাস রিস্টোর করতে ভুলে যাওয়া।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useEffect, useRef } from 'react';

export function ConfirmModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // মডাল ওপেন হওয়ার সাথে সাথে কনফার্ম বাটনে ফোকাস নেওয়া হচ্ছে
      confirmBtnRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="modal-overlay">
      <div className="modal-body">
        <p>আপনি কি নিশ্চিত?</p>
        <button ref={confirmBtnRef} onClick={onClose}>হ্যাঁ, নিশ্চিত</button>
        <button onClick={onClose}>বাতিল</button>
      </div>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-27',
    title: 'How do you handle keyboard event navigation in React lists?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'KeyboardNavigation', 'Events'],
    enAnswer: 'You attach an onKeyDown listener to the container, track the active item index in state, and update the index based on key events (ArrowUp, ArrowDown, Enter).',
    bnAnswer: 'কন্টেইনারে একটি onKeyDown লিসনার যুক্ত করতে হয়, বর্তমানে অ্যাক্টিভ আইটেমটি ইনডেক্স দিয়ে স্টেটে ট্র্যাক করতে হয় এবং কিবোর্ডের অ্যারো-কি প্রেসের ওপর ভিত্তি করে ইনডেক্স আপডেট করতে হয়।',
    enExplanation: `### Explanation
Dropdowns, autocomplete lists, and navigation menus need keyboard support. Pressing the "ArrowDown" key should shift highlight styles down the list, and pressing "Enter" should trigger selection logic.

### Real-World Example
An search input autocomplete panel showing matching products. The user types, presses arrow down to scroll through matches, and presses enter to load product details.

### Best Practice
Make list elements have \`tabIndex={0}\` or control active list state using \`aria-activedescendant\` so screen readers announce changes.

### Common Mistakes
Forgetting to call \`e.preventDefault()\` when navigation keys are pressed, causing the entire webpage scrollbar to jump up and down.

### Code Example
\`\`\`tsx
import React, { useState } from 'react';

export function KeyboardList({ items }: { items: string[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < items.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : items.length - 1));
    } else if (e.key === 'Enter' && activeIndex !== -1) {
      alert(\`Selected: \${items[activeIndex]}\`);
    }
  };

  return (
    <ul onKeyDown={handleKeyDown} tabIndex={0} className="border p-2 outline-none">
      {items.map((item, idx) => (
        <li 
          key={item} 
          className={\`p-2 \${idx === activeIndex ? 'bg-indigo-100 dark:bg-indigo-950 font-bold' : ''}\`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ড্রপডাউন, অটো-কমপ্লিট এবং নেভিগেশন লিস্টে কিবোর্ড সাপোর্ট অত্যন্ত জরুরি। কিবোর্ডের "ArrowDown" প্রেস করলে সিলেকশন মার্ক নিচে নামা উচিত এবং "Enter" চাপলে সিলেক্ট হওয়া উচিত।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি সার্চ সাজেশনের বক্স। ইউজার টাইপ করার পর মাউস না ধরে কিবোর্ডের অ্যারো বাটন টিপে নিচে নেমে এন্টার দিয়ে সার্চ সম্পন্ন করা।

### উত্তম অনুশীলন (Best Practice)
লিস্টের উপাদানগুলোতে \`tabIndex={0}\` ব্যবহার করুন অথবা স্ক্রিন রিডারের সুবিধার জন্য \`aria-activedescendant\` সেট করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যারো বাটন প্রেসের সময় \`e.preventDefault()\` কল না করা, যার ফলে অ্যারো চাপার সাথে সাথে সম্পূর্ণ ওয়েব পেজের মূল স্ক্রলবারটি উপরে-নিচে লাফাতে থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { useState } from 'react';

export function KeyboardList({ items }: { items: string[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < items.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : items.length - 1));
    } else if (e.key === 'Enter' && activeIndex !== -1) {
      alert(\`সিলেক্ট করা হয়েছে: \${items[activeIndex]}\`);
    }
  };

  return (
    <ul onKeyDown={handleKeyDown} tabIndex={0} className="border p-2 outline-none">
      {items.map((item, idx) => (
        <li 
          key={item} 
          className={\`p-2 \${idx === activeIndex ? 'bg-indigo-100 dark:bg-indigo-950 font-bold' : ''}\`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
\`\`\``
  },
  {
    id: 'react-28',
    title: 'Explain React Strict Mode Logs and double rendering in development.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'StrictMode', 'Debugging'],
    enAnswer: 'React StrictMode intentional double-renders components and double-runs effects in development mode to help programmers detect side-effects and cleanup bugs early.',
    bnAnswer: 'স্ট্রিক্ট মোড (StrictMode) ডেভেলপমেন্টে ইচ্ছা করে প্রতিটি কম্পোনেন্ট দুবার রেন্ডার এবং হুক ইফেক্ট রান করে, যাতে মেমোরি লিক এবং ক্লিনআপ সংক্রান্ত বাগগুলো শুরুতেই ধরা পড়ে।',
    enExplanation: `### Explanation
StrictMode is a tool for highlighting potential bugs. It does not affect production builds.
- **Double Invocation**: It runs rendering, state initializers, and effects twice.
- **Goal**: In React 18+ Concurrent mode, components must be resilient to being mounted and destroyed repeatedly. Double mounting guarantees cleanup codes execute properly.

### Real-World Example
An API fetch running twice in development. This is expected StrictMode behavior to check if double mounts generate network leaks or duplicate states.

### Best Practice
Do not try to bypass double logs. Fix the underlying side effect in your useEffect code. Ensure you return cleanups for everything you register.

### Common Mistakes
Disabling Strict Mode entirely in index.tsx just because the console logs are printed twice, missing memory leak checks.

### Code Example
\`\`\`tsx
import React, { useEffect } from 'react';

export function StrictTrack() {
  useEffect(() => {
    console.log('Registering listener...');
    const handleResize = () => console.log('Resized');
    window.addEventListener('resize', handleResize);

    // If this cleanup is missing, Strict Mode will cause 2 listeners to stick
    return () => {
      console.log('Removing listener...');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Strict Mode Test Panel</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
স্ট্রিক্ট মোড হলো প্রজেক্টে লুকিয়ে থাকা বাগ খোঁজার সেরা হাতিয়ার। এটি প্রোডাকশন বিল্ডে কোনো প্রভাব ফেলে না।
- **ডাবল ইনভোকেশন**: এটি রেন্ডার ফাংশন, স্টেট ইনিশিয়ালাইজার এবং ইফেক্টকে দুইবার চালায়।
- **উদ্দেশ্য**: কম্পোনেন্ট যেন বারংবার মাউন্ট ও ডেস্ট্রয় হলেও সঠিক আচরণ করে তা নিশ্চিত করা।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডেভেলপমেন্টে এপিআই রিকোয়েস্ট দুইবার ফায়ার হওয়া। এটি স্ট্রিক্ট মোডের সাধারণ আচরণ যা চেক করে এপিআই কলের ক্লিনআপ ঠিকমতো হচ্ছে কি না।

### উত্তম অনুশীলন (Best Practice)
ডাবল রেন্ডারিং এড়াতে স্ট্রিক্ট মোড বন্ধ করবেন না। হুকের ভেতর যে রিসোর্স তৈরি হবে, তার জন্য যথাযথ ক্লিনআপ রিটার্ন লিখে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কনসোলে ডুপ্লিকেট লগ এড়ানোর জন্য index.tsx থেকে \`<StrictMode>\` র‍্যাপারটি সম্পূর্ণ মুছে ফেলা, যা পরবর্তীতে মেমোরি লিকের বড় কারণ হয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { useEffect } from 'react';

export function StrictTrack() {
  useEffect(() => {
    console.log('লিসনার সেট হচ্ছে...');
    const handleResize = () => console.log('উইন্ডো রিসাইজ হয়েছে');
    window.addEventListener('resize', handleResize);

    // এই ক্লিনআপ না থাকলে স্ট্রিক্ট মোডে দুইটি ডুপ্লিকেট লিসনার তৈরি হবে
    return () => {
      console.log('লিসনার রিমুভ হচ্ছে...');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>স্ট্রিক্ট মোড টেস্ট প্যানেল</div>;
}
\`\`\``
  },
  {
    id: 'react-29',
    title: 'How do you write basic unit tests for React components using Jest?',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Testing', 'Jest'],
    enAnswer: 'You write test suites using Jest, rendering components, simulating user actions like clicks, and asserting that the DOM elements reflect the expected changes.',
    bnAnswer: 'Jest ব্যবহার করে টেস্ট কেস লেখা হয়, যেখানে কম্পোনেন্ট রেন্ডার করে ক্লিক বা টাইপিং সিমুলেট করা হয় এবং DOM উপাদানগুলো কাঙ্ক্ষিত স্টেট পরিবর্তন করছে কি না তা অ্যাসার্ট করা হয়।',
    enExplanation: `### Explanation
Testing ensures visual interfaces do not break when changes are introduced. Jest handles the test suite runner framework and assertion utilities (like \`expect(element).toBeInTheDocument()\`).

### Real-World Example
Testing a toggle button component. When the component mounts, it should display "Inactive". When clicked, the text should change to "Active".

### Best Practice
Write tests that verify component behavior from the user's perspective rather than testing internal state variables directly.

### Common Mistakes
Not mocking external module dependencies (like router paths or API fetch requests), causing unit tests to crash due to network failures.

### Code Example
\`\`\`tsx
// Component: SimpleToggle.tsx
import { useState } from 'react';

export function SimpleToggle() {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive(p => !p)}>
      {active ? 'Active' : 'Inactive'}
    </button>
  );
}

// Test File: SimpleToggle.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import { SimpleToggle } from './SimpleToggle';
// test('toggles status on click', () => {
//   render(<SimpleToggle />);
//   const btn = screen.getByRole('button');
//   expect(btn.textContent).toBe('Inactive');
//   fireEvent.click(btn);
//   expect(btn.textContent).toBe('Active');
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টেস্টিং নিশ্চিত করে নতুন কোড যোগ করার সাথে সাথে আগের স্ক্রিনগুলো ভেঙে যাচ্ছে না। Jest পুরো টেস্ট সুইট রান করে এবং অ্যাসারশন মেথড (যেমন- \`toBeInTheDocument()\`) প্রদান করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইট বাল্ব টগল বাটন টেস্ট করা। শুরুতে পেজে "বন্ধ" লেখা থাকবে, ক্লিক করলে লেখাটি "চালু" হয়ে যাবে।

### উত্তম অনুশীলন (Best Practice)
ভেতরের প্রাইভেট ভ্যারিয়েবল বা স্টেট চেক না করে সরাসরি ডম নোডের ভিজ্যুয়াল আচরণ (যেমন- স্ক্রিন টেক্সট) টেস্ট করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
এক্সটারনাল ডিপেন্ডেন্সি (যেমন এপিআই কল বা রাউটার প্যারামিটার) মক না করা, যার ফলে নেটওয়ার্ক কানেকশন ফেইল করে টেস্ট এরর দেখায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// Component: SimpleToggle.tsx
import { useState } from 'react';

export function SimpleToggle() {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive(p => !p)}>
      {active ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
    </button>
  );
}

// Test File: SimpleToggle.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import { SimpleToggle } from './SimpleToggle';
// test('ক্লিক করলে সক্রিয়/নিষ্ক্রিয় টগল হবে', () => {
//   render(<SimpleToggle />);
//   const btn = screen.getByRole('button');
//   expect(btn.textContent).toBe('নিষ্ক্রিয়');
//   fireEvent.click(btn);
//   expect(btn.textContent).toBe('সক্রিয়');
// });
\`\`\``
  },
  {
    id: 'react-30',
    title: 'Explain various queries available in React Testing Library.',
    difficulty: 'basic',
    category: 'react',
    tags: ['React', 'Testing', 'ReactTestingLibrary'],
    enAnswer: 'React Testing Library provides queries like getBy, queryBy, and findBy. "getBy" throws errors if elements are missing, "queryBy" returns null, and "findBy" handles asynchronous elements.',
    bnAnswer: 'রিঅ্যাক্ট টেস্টিং লাইব্রেরিতে getBy, queryBy এবং findBy কুয়েরি পাওয়া যায়। "getBy" উপাদান না পেলে এরর দেয়, "queryBy" এরর না দিয়ে null দেয়, এবং "findBy" অ্যাসিনক্রোনাস উপাদান খোঁজে।',
    enExplanation: `### Explanation
- **getBy***: Synchronous. Expects element to exist. Throws error immediately if it doesn't.
- **queryBy***: Synchronous. Used when testing if an element is *not* in the DOM. Returns null instead of crashing.
- **findBy***: Asynchronous. Returns a promise that resolves when the element appears (waits up to 1000ms by default).

### Real-World Example
Testing a popup box. Checking that the loader skeleton is in the DOM (getBy), verifying the modal dialog is not yet visible (queryBy), and waiting for the API to render user names (findBy).

### Best Practice
Default to \`getByRole\` queries (like \`getByRole('button', { name: /save/i })\`) to ensure accessibility requirements are met.

### Common Mistakes
Using \`getBy\` to check if an element is absent from the DOM, causing tests to crash with an error rather than verifying the assertion.

### Code Example
\`\`\`tsx
// Example test assertion calls
// test('renders content correctly', async () => {
//   render(<MyComponent />);
//   
//   // 1. Correct: getByRole for sync checks
//   const heading = screen.getByRole('heading', { name: /profile/i });
//   
//   // 2. Correct: queryBy to assert absence
//   const errorMsg = screen.queryByText(/failed to fetch/i);
//   expect(errorMsg).toBeNull();
//   
//   // 3. Correct: findBy for asynchronous elements
//   const asyncUser = await screen.findByText(/rohit/i);
//   expect(asyncUser).toBeInTheDocument();
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **getBy***: সিনক্রোনাস। উপাদান না পেলে সাথে সাথে এরর থ্রো করে।
- **queryBy***: সিনক্রোনাস। কোনো উপাদান ডমে *নেই* তা প্রমাণ করতে ব্যবহৃত হয়। উপাদান না পেলে null রিটার্ন করে।
- **findBy***: অ্যাসিনক্রোনাস। উপাদান ডমে হাজির হওয়া পর্যন্ত অপেক্ষা করে এবং প্রমিস রিটার্ন করে (ডিফল্ট ১ সেকেন্ড)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি পপআপ বক্স টেস্ট করা। লোডার আছে কি না দেখতে getBy, মডাল উইন্ডোটি নেই প্রমাণ করতে queryBy, এবং ডাটা লোড হওয়া পর্যন্ত অপেক্ষা করতে findBy ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
সবসময় \`getByRole\` ব্যবহার করে উপাদান খোঁজার চেষ্টা করুন, এটি অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ড ধরে রাখতে দারুণ সাহায্য করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
একটি উপাদান ডমে নেই তা চেক করার জন্য \`getBy\` ব্যবহার করা, যা উপাদান না পেয়ে টেস্ট ক্র্যাশ করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// টেস্টিং কুয়েরির নমুনা কলসমূহ
// test('পেজ কন্টেন্ট টেস্ট', async () => {
//   render(<MyComponent />);
//   
//   // ১. সঠিক: সিনক্রোনাস খোঁজার জন্য getByRole
//   const heading = screen.getByRole('heading', { name: /প্রোফাইল/i });
//   
//   // ২. সঠিক: উপাদানটি নেই তা প্রমাণের জন্য queryBy
//   const errorMsg = screen.queryByText(/রিকোয়েস্ট ব্যর্থ হয়েছে/i);
//   expect(errorMsg).toBeNull();
//   
//   // ৩. সঠিক: অ্যাসিনক্রোনাস উপাদানের জন্য findBy
//   const asyncUser = await screen.findByText(/rohit/i);
//   expect(asyncUser).toBeInTheDocument();
// });
\`\`\``
  }
];
