import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: 'react-31',
    title: 'Explain Automatic State Batching and its improvements in React 18+.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'StateBatching', 'Performance'],
    enAnswer: 'State batching groups multiple state updates into a single re-render. React 18+ introduces automatic batching for all updates inside promises, timeouts, and native event handlers.',
    bnAnswer: 'স্টেট ব্যাচিং একাধিক স্টেট আপডেটকে একত্রিত করে একবার রেন্ডার ট্রিগার করায়। রিঅ্যাক্ট ১৮+ এ প্রমিস, টাইমআউট এবং নেটিভ ইভেন্ট হ্যান্ডলারের ভেতরের আপডেটগুলোর জন্যও স্বয়ংক্রিয় ব্যাচিং চালু করা হয়েছে।',
    enExplanation: `### Explanation
Prior to React 18, updates inside React event handlers were batched, but asynchronous microtasks (like fetch handlers, timeouts, promises) caused separate re-renders for each state change. React 18 handles updates universally by scheduling them into a single render update.

### Real-World Example
In a search request callback, updating \`setLoading(false)\` and \`setResults(data)\` concurrently now results in exactly one rendering cycle instead of two, preventing partial frame layouts.

### Best Practice
Rely on automatic batching. If you need to immediately read DOM layout measurements after state updates, use \`flushSync\` from \`react-dom\` to force updates.

### Common Mistakes
Writing state updates and trying to read the updated values on the immediate next line, forgetting that state updates are batched asynchronously.

### Code Example
\`\`\`tsx
import { useState } from 'react';
import { flushSync } from 'react-dom';

export function BatchCard() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleAsyncClick = () => {
    setTimeout(() => {
      // React 18 automatically batches both updates into 1 render
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 100);
  };

  const handleForceSync = () => {
    // If we need synchronous update to measure DOM layout
    flushSync(() => {
      setCount(c => c + 1);
    });
    // DOM is guaranteed to be updated here
  };

  return (
    <button onClick={handleAsyncClick}>
      Count: {count}, Flag: {flag ? 'T' : 'F'}
    </button>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট ১৮ সংস্করণের পূর্বে শুধুমাত্র ইভেন্ট হ্যান্ডলারের ভেতরের স্টেটগুলো ব্যাচ হতো। যদি এপিআই ফেচ বা টাইমআউটের ভেতর দুটি স্টেট আপডেট হতো, তবে রিঅ্যাক্ট দুইবার পেজ রেন্ডার করাতো। সংস্করণ ১৮ থেকে সকল অ্যাসিনক্রোনাস কাজকে একত্রিত করে একবারই রেন্ডার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই কলের রেসপন্স পাওয়ার পর লোডার বন্ধ করা এবং ডাটা সেট করা আলাদা আলাদা রেন্ডার না নিয়ে একই সাথে স্ক্রিনে রিফ্লেক্ট করবে, যা ফ্লেকারিং বা কাঁপাকাঁপি এড়ায়।

### উত্তম অনুশীলন (Best Practice)
স্বয়ংক্রিয় ব্যাচিংয়ের ওপর ভরসা রাখুন। তবে যদি স্টেট আপডেটের ঠিক পরপরই ডম সাইজ মাপতে হয়, তবে \`flushSync\` ব্যবহার করে সিনক্রোনাস আপডেট করিয়ে নিতে পারেন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্টেট আপডেট করার পরের লাইনেই আপডেটেড মান পড়তে চাওয়া, কারণ রিঅ্যাক্ট স্টেট আপডেট সিনক্রোনাসলি সাথে সাথে করে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';
import { flushSync } from 'react-dom';

export function BatchCard() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleAsyncClick = () => {
    setTimeout(() => {
      // রিঅ্যাক্ট ১৮ এই দুটি আপডেটকে একসাথে ব্যাচ করে একবার রেন্ডার করবে
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 100);
  };

  const handleForceSync = () => {
    // ডম মেজারমেন্টের জন্য সিনক্রোনাসলি আপডেট করতে চাইলে
    flushSync(() => {
      setCount(c => c + 1);
    });
    // এখানে এসে ডম আপডেট হওয়া নিশ্চিত
  };

  return (
    <button onClick={handleAsyncClick}>
      কাউন্ট: {count}, ফ্ল্যাগ: {flag ? 'T' : 'F'}
    </button>
  );
}
\`\`\``
  },
  {
    id: 'react-32',
    title: 'What are Error Boundaries and how do you implement them in React?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ErrorBoundary', 'Architecture'],
    enAnswer: 'Error Boundaries are class components that catch JavaScript errors anywhere in their child component tree, log the errors, and render a fallback UI instead of crashing the app.',
    bnAnswer: 'এরর বাউন্ডারি হলো ক্লাস কম্পোনেন্ট যা চাইল্ড কম্পোনেন্ট ট্রির যেকোনো জাভাস্ক্রিপ্ট এরর ধরতে পারে, তা লগ করে এবং সম্পূর্ণ অ্যাপ ক্র্যাশ হতে না দিয়ে একটি ফলব্যাক UI প্রদর্শন করে।',
    enExplanation: `### Explanation
A component crashes if an error is thrown during rendering. Error Boundaries catch these lifecycle errors. They must be class components because they use the unique lifecycle methods \`getDerivedStateFromError\` (to update state for fallback render) and \`componentDidCatch\` (to log error details to logging tools).

### Real-World Example
In a dashboard with multiple grid modules, if the weather widget crashes due to API structure errors, the Error Boundary wraps the widget, shows a "Failed to load weather" fallback, and keeps the main dashboard working.

### Best Practice
Wrap features individually (e.g. sidebar, widget, checkout form) instead of wrapping the entire root element. This prevents minor module crashes from ruining the entire page.

### Common Mistakes
Expecting Error Boundaries to catch errors inside asynchronous callbacks (like fetch calls) or click handlers. Error boundaries only catch rendering-time lifecycle errors.

### Code Example
\`\`\`tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }; // Trigger fallback rendering
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Logged to monitoring tool:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-50 text-red-700 rounded-lg">Widget failed to load.</div>;
    }
    return this.props.children;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রেন্ডারিংয়ের সময় কোনো কোড ক্র্যাশ করলে রিঅ্যাক্ট পুরো পেজ খালি (blank) করে দেয়। এরর বাউন্ডারি এটি প্রতিরোধ করে। এর জন্য ক্লাস কম্পোনেন্ট ব্যবহার করতে হয় কারণ এতে \`getDerivedStateFromError\` এবং \`componentDidCatch\` লাইফসাইকেল মেথড রয়েছে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মাল্টি-উইজেট ড্যাশবোর্ডে যদি ওয়েদার উইজেটটি এপিআই এররের কারণে ক্র্যাশ করে, তবে এরর বাউন্ডারি পুরো পেজ নষ্ট হতে না দিয়ে শুধুমাত্র ওই উইজেটের জায়গায় "এরর" দেখাবে, বাকি সাইট সচল রাখবে।

### উত্তম অনুশীলন (Best Practice)
পুরো অ্যাপের গোড়ায় এরর বাউন্ডারি না দিয়ে প্রতিটি বড় ফিচার মডিউলকে আলাদাভাবে মুড়িয়ে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যাসিনক্রোনাস কাজ (যেমন- ফেচ রিকোয়েস্ট) বা ক্লিক হ্যান্ডলারের এরর ধরার জন্য এরর বাউন্ডারি আশা করা। এগুলো শুধু রেন্ডারিং টাইমের লাইফসাইকেল এরর ধরতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }; // ফলব্যাক UI দেখানোর জন্য স্টেট আপডেট
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('মনিটরিং ট্যুলে লগ করা হচ্ছে:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-50 text-red-700 rounded-lg">উইজেটটি লোড করা যায়নি।</div>;
    }
    return this.props.children;
  }
}
\`\`\``
  },
  {
    id: 'react-33',
    title: 'Explain the Higher-Order Component (HOC) design pattern and how it compares to Custom Hooks.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'HOC', 'DesignPatterns', 'CustomHooks'],
    enAnswer: 'A Higher-Order Component is a function that takes a component and returns a new enhanced component. While HOCs wrap UI nodes, Custom Hooks share code logic without adding nested components.',
    bnAnswer: 'হায়ার-অর্ডার কম্পোনেন্ট (HOC) হলো এমন একটি ফাংশন যা একটি কম্পোনেন্ট গ্রহণ করে এবং নতুন একটি আপগ্রেডেড কম্পোনেন্ট রিটার্ন করে। HOC ডমে বাড়তি নোড যোগ করে, যেখানে কাস্টম হুক ডম পরিবর্তন ছাড়াই লজিক শেয়ার করতে পারে।',
    enExplanation: `### Explanation
HOCs represent a decorator pattern (e.g. \`withAuth(Dashboard)\`). They wrap components to inject authentication props or analytical checks. Since React introduced Hooks, Custom Hooks are widely preferred because they avoid wrapper hell (deep nested DOM trees) and keep logic clean.

### Real-World Example
An authorization wrapper. Protecting multiple secret screens by wrapping them with a \`withAuth\` helper that redirects unauthenticated requests to the login gateway.

### Best Practice
Pass through all props to the wrapped component using spread operations: \`<WrappedComponent {...props} />\`. Do not mutate component classes; use pure wrapper composition.

### Common Mistakes
Declaring HOC wrappers inside the render function of another component. This recreates the component definition on every single render, causing it to fully unmount and remount, losing local states.

### Code Example
\`\`\`tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// HOC Auth Guard definition
export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const isAuthenticated = !!localStorage.getItem('user-token');

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
HOC হলো ডেকরেশন ডিজাইন প্যাটার্ন (যেমন- \`withAuth(Dashboard)\`)। এটি আরেকটি কম্পোনেন্টকে মুড়িয়ে তাকে অতিরিক্ত প্রপস বা লজিক দেয়। কাস্টম হুক ডমে বাড়তি স্তর বা রেনডারিং লেয়ার যোগ না করে সরাসরি লজিক ব্যবহারের সুবিধা দেয় বলে এটি বেশি জনপ্রিয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি অথোরাইজেশন গার্ড। সিক্রেট পেজগুলোকে \`withAuth\` দিয়ে র‍্যাপ করে দেওয়া যাতে টোকেন না থাকলে অটোমেটিক লগইন পেজে রিডাইরেক্ট করে দেওয়া যায়।

### উত্তম অনুশীলন (Best Practice)
র‍্যাপ করা কম্পোনেন্টের মূল প্রপস নষ্ট না করতে প্রপস স্প্রেড করে দিন: \`<WrappedComponent {...props} />\`।

### সাধারণ ভুলসমূহ (Common Mistakes)
অন্য কম্পোনেন্টের রেন্ডার ফাংশনের ভেতরে HOC ডিক্লেয়ার করা। এটি প্রতি আপডেটে নতুন কম্পোনেন্ট তৈরি করায় চাইল্ড কম্পোনেন্টটি বারবার আনমাউন্ট-মাউন্ট হয়ে তার স্টেট হারিয়ে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// HOC দিয়ে রাউট প্রটেক্ট করার নিয়ম
export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const isAuthenticated = !!localStorage.getItem('user-token');

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };
}
\`\`\``
  },
  {
    id: 'react-34',
    title: 'Explain the Render Props pattern and its use cases.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'RenderProps', 'DesignPatterns'],
    enAnswer: 'The Render Props pattern is a technique for sharing stateful logic between components using a prop whose value is a function, allowing the parent to control layout rendering.',
    bnAnswer: 'রেন্ডার প্রপস এমন একটি ডিজাইন প্যাটার্ন যা একটি ফাংশন প্রপের মাধ্যমে দুই বা ততোধিক কম্পোনেন্টের মধ্যে স্টেট শেয়ার করার সুবিধা দেয় এবং প্যারেন্ট নোডকে রেন্ডার আউটপুট নির্ধারণ করতে দেয়।',
    enExplanation: `### Explanation
Instead of a component defining its own UI, it takes a rendering function. It tracks state internally and passes the state variables as arguments to the rendering function. The caller component decides how to style and render the output.

### Real-World Example
A mouse hover tracker component. It tracks x and y pointer positions, but does not enforce UI style. One screen renders coords as text, another draws it onto a map canvas.

### Best Practice
Use Custom Hooks for standard logic sharing in modern React. Use Render Props when component layouts need to follow a strict structure or parent layout controls.

### Common Mistakes
Defining inline render functions that recreate on every render, causing React component memoizations to fail due to reference changes.

### Code Example
\`\`\`tsx
import { useState, ReactNode } from 'react';

interface Coords { x: number; y: number }
interface TrackerProps {
  render: (data: Coords) => ReactNode;
}

export function MouseTracker({ render }: TrackerProps) {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMove} className="h-48 border border-dashed rounded">
      {render(coords)}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কম্পোনেন্ট নিজের UI ঠিক না করে প্যারেন্টকে একটি ফাংশন প্রপ দেয়। এটি স্টেট ক্যালকুলেট করে ফাংশন আর্গুমেন্টে পাঠিয়ে দেয়, আর প্যারেন্ট তার নিজের মতো করে ডিজাইন করে রেন্ডার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মাউস মুভমেন্ট ট্র্যাকার। এটি শুধু মাউসের পজিশন x এবং y কোঅর্ডিনেট বের করে কিন্তু কীভাবে সাজানো হবে তা ঠিক করে না। এক পেজে এটি টেক্সট আকারে দেখানো যেতে পারে, অন্য পেজে গ্রাফিক্স ক্যানভাসে।

### উত্তম অনুশীলন (Best Practice)
আধুনিক রিঅ্যাক্ট অ্যাপে স্টেট শেয়ারিংয়ের জন্য কাস্টম হুক ব্যবহার করুন। রেন্ডার প্রপস তখনই ব্যবহার করুন যখন প্যারেন্টকে সরাসরি নোড লেআউট স্ট্রাকচার করতে দেওয়া প্রয়োজন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনলাইন রেন্ডার ফাংশন লেখার ফলে প্রতি রেন্ডারে নতুন রেফারেন্স তৈরি হয়, যা চাইল্ড কম্পোনেন্টের মেমোয়াইজেশন নষ্ট করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, ReactNode } from 'react';

interface Coords { x: number; y: number }
interface TrackerProps {
  render: (data: Coords) => ReactNode;
}

export function MouseTracker({ render }: TrackerProps) {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMove} className="h-48 border border-dashed rounded">
      {render(coords)}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-35',
    title: 'Explain useReducer for implementing state machines inside React.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'useReducer', 'StateMachines'],
    enAnswer: 'useReducer is a hook for managing complex state logic. It operates on a reducer function of type (state, action) => newState, ensuring state changes follow predictable action paths.',
    bnAnswer: 'useReducer হলো জটিল স্টেট লজিক ম্যানেজ করার হুক। এটি একটি রিডিউসার ফাংশন (state, action) => newState ইনপুট নেয় এবং বর্তমান স্টেট ও একটি ডিসপ্যাচ মেথড রিটার্ন করে।',
    enExplanation: `### Explanation
When multiple state variables depend on each other (e.g. data, loading, errors inside a request wrapper), using multiple \`useState\` statements can lead to invalid configurations. \`useReducer\` centralizes state changes inside a pure reducer function, triggered by dispatching structured actions.

### Real-World Example
An API query state manager. When starting a fetch, dispatching \`{ type: 'FETCH_START' }\` sets \`loading: true\` and clears previous errors, coordinating states correctly.

### Best Practice
Keep reducer functions pure. Do not perform network requests, API calls, or side effects inside a reducer.

### Common Mistakes
Mutating the state object directly inside the reducer switch blocks. Always return a new state object using spread operators to force state change recognition.

### Code Example
\`\`\`typescript
import { useReducer } from 'react';

type State = { status: 'idle' | 'loading' | 'success'; data: any; error: string | null };
type Action = 
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_ERROR'; error: string };

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'success', data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, status: 'idle', error: action.error };
    default:
      return state;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন একটি কম্পোনেন্টে একাধিক স্টেট একে অপরের ওপর নির্ভর করে (যেমন- ফর্মের ভ্যালু, ভ্যালিডেশন এরর, সাবমিট লোডিং), তখন \`useReducer\` সকল স্টেট পরিবর্তনকে একটি একক পিওর ফাংশনের মধ্যে এনে ভুল পরিবর্তন প্রতিরোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি এপিআই রিকোয়েস্ট স্টেট: \`loading\`, \`error\` এবং \`data\` একসাথে কন্ট্রোল করা। লোডিং শুরু হলে পূর্বের এরর মুছে যাওয়া প্রয়োজন, যা রিডিউসার দিয়ে সহজে করা যায়।

### উত্তম অনুশীলন (Best Practice)
রিডিউসার ফাংশন সবসময় পিওর (pure) রাখুন। রিডিউসারের ভেতরে কখনও এপিআই কল বা অ্যাসিনক্রোনাস কাজ করবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিডিউসার ফাংশনের ভেতরে সরাসরি স্টেট অবজেক্ট পরিবর্তন (mutation) করা। সবসময় স্প্রেড অপারেটর ব্যবহার করে নতুন অবজেক্ট রিটার্ন করুন।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
import { useReducer } from 'react';

type State = { status: 'idle' | 'loading' | 'success'; data: any; error: string | null };
type Action = 
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_ERROR'; error: string };

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'success', data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, status: 'idle', error: action.error };
    default:
      return state;
  }
}
\`\`\``
  },
  {
    id: 'react-36',
    title: 'Explain Memoization using React.memo and how it compares to useMemo.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Memoization', 'ReactMemo', 'useMemo'],
    enAnswer: 'React.memo is a higher-order component that memoizes an entire component to prevent renders if props match. useMemo is a hook that caches the calculated return value of an expensive calculation inside a component.',
    bnAnswer: 'React.memo হলো একটি হায়ার-অর্ডার কম্পোনেন্ট যা প্রপস না বদলালে পুরো কম্পোনেন্ট রি-রেন্ডার হওয়া বন্ধ করে। useMemo হলো একটি হুক যা কম্পোনেন্টের ভেতরের কোনো ভারী হিসাবকে ক্যাশ করে রাখে।',
    enExplanation: `### Explanation
- **React.memo**: Scopes component rendering. Performs shallow prop equality checking before deciding to execute the component function.
- **useMemo**: Scopes code blocks. Caches the evaluated object value of a heavy loop or array filtering, re-evaluating only if dependency array values change.

### Real-World Example
In a shopping dashboard, the products table is memoized with **React.memo** to skip updates when sidebar filters change. The total cost of items in the cart is cached inside the table component using **useMemo** so it is not recalculated on every minor visual re-render.

### Best Practice
Only use memoization where performance profiling shows a bottleneck. Overuse adds cognitive load and overhead from shallow checks.

### Common Mistakes
Passing dynamic, inline objects or callbacks to React.memo components, which recreates references and defeats the optimization.

### Code Example
\`\`\`tsx
import React, { useMemo } from 'react';

interface RowProps { items: number[] }

// React.memo skips re-rendering if props are identical
export const ExpensiveList = React.memo(function ExpensiveList({ items }: RowProps) {
  // useMemo prevents recalculating sum unless items array changes
  const sum = useMemo(() => {
    console.log('Computing heavy sum...');
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);

  return <div>Sum: {sum}</div>;
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **React.memo**: চাইল্ড কম্পোনেন্ট লেভেলের অপ্টিমাইজেশন। ইনপুট প্রপস এক থাকলে কম্পোনেন্ট রেন্ডারিং এড়ায়।
- **useMemo**: কম্পোনেন্টের ভেতরের নির্দিষ্ট ক্যালকুলেশন লেভেলের অপ্টিমাইজেশন। ডিপেন্ডেন্সি না বদলালে ক্যাশড মান ব্যবহার করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি শপিং পেজে প্রোডাক্ট টেবিলটি **React.memo** দিয়ে লক করা যাতে সাইডবার ফিল্টার করার সময় টেবিল রি-রেন্ডার না হয়। আর কার্টের সব প্রোডাক্টের দামের যোগফল বের করার প্রসেসটি **useMemo** দিয়ে ক্যাশ করা।

### উত্তম অনুশীলন (Best Practice)
প্রোফাইল চেকিংয়ে কোনো পারফরম্যান্স ল্যাগ ধরা পড়লেই কেবল মেমোয়াইজেশন করুন। সময়ের আগে অহেতুক মেমোয়াইজেশন কোডের জটিলতা বাড়ায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মেমো করা চাইল্ড নোডে ইনলাইন অবজেক্ট বা ফাংশন পাঠানো। এতে শ্যালো কম্প্যারিসন প্রতিবারই ফেইল করে নোড আপডেট করতে বাধ্য করবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { useMemo } from 'react';

interface RowProps { items: number[] }

// React.memo প্যারেন্ট রেন্ডার হলে নোড রেন্ডারিং স্কিপ করতে সাহায্য করে
export const ExpensiveList = React.memo(function ExpensiveList({ items }: RowProps) {
  // useMemo আইটেমস অ্যারে পরিবর্তন না হওয়া পর্যন্ত ভারী যোগফলটি ক্যাশ করে রাখে
  const sum = useMemo(() => {
    console.log('হিসাব করা হচ্ছে...');
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);

  return <div>যোগফল: {sum}</div>;
});
\`\`\``
  },
  {
    id: 'react-37',
    title: 'Explain Context API dynamic values and consumer optimization.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ContextAPI', 'Performance'],
    enAnswer: 'The Context API provides global values down the component tree. However, changing provider values triggers re-renders on all consumer components, requiring useMemo optimizations.',
    bnAnswer: 'কনটেক্সট এপিআই চাইল্ড ট্রিতে গ্লোবাল ভ্যালু যোগ করে। তবে প্রোভাইডারের মান পরিবর্তন হলে তার সাথে যুক্ত সমস্ত কনজিউমার কম্পোনেন্ট রি-রেন্ডার হয়, যা এড়াতে useMemo ও স্প্লিটিং ব্যবহার করা হয়।',
    enExplanation: `### Explanation
React triggers updates for any component calling \`useContext(MyContext)\` when the provider value changes. If your provider value is an inline object (e.g. \`value={{ user, token }}\`), the object reference changes on every render of the provider component, forcing all consumers to update.

### Real-World Example
In a theme and locale context provider, changing the user language will force elements that only care about dark/light theme options to re-render if they share the same provider container.

### Best Practice
1. Separate monolithic context states into modular contexts (e.g. \`ThemeContext\`, \`UserContext\`).
2. Wrap provider value objects in a \`useMemo\` hook.

### Common Mistakes
Using Context API as a generic state manager for highly frequent updates (like real-time coordinate tracking), which degrades rendering performance.

### Code Example
\`\`\`tsx
import { createContext, useState, useMemo, ReactNode } from 'react';

export const ThemeContext = createContext<{ theme: string; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // Memoize value to prevent recreating reference on parent updates
  const contextValue = useMemo(() => ({ theme, toggle }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রোভাইডারে কন্টেন্ট বদলালে \`useContext(MyContext)\` কল করা চাইল্ড নোডগুলো রেন্ডার হয়। যদি প্রোভাইডারে ইনলাইন অবজেক্ট পাস করা হয় (\`value={{ user, token }}\`), তবে প্রতি রেন্ডারে নতুন রেফারেন্স তৈরি হবে এবং সকল চাইল্ডকে রি-রেন্ডার করবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় পেজে ভাষা বদলানোর ফলে থিম কাস্টমাইজেশন রিলেটেড বাটনগুলোও রি-রেন্ডার হওয়া, কারণ তারা সবাই একই কনটেক্সট শেয়ার করছে।

### উত্তম অনুশীলন (Best Practice)
১. বড় কনটেক্সট বিভক্ত করে ছোট ও নির্দিষ্ট বিষয়ের ওপর কনটেক্সট বানান।
২. প্রোভাইডারের ভ্যালু অবজেক্টটি \`useMemo\` এর ভেতরে মেমোয়াইজ করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
খুব ঘন ঘন আপডেট হওয়া ডেটা (যেমন মাউস পজিশন বা টাইপিং চ্যাট) কনটেক্সটে রাখা, যা পুরো অ্যাপকে স্লো করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { createContext, useState, useMemo, ReactNode } from 'react';

export const ThemeContext = createContext<{ theme: string; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // প্যারেন্ট আপডেট হলেও যেন ভ্যালু অবজেক্টের রেফারেন্স অপরিবর্তিত থাকে
  const contextValue = useMemo(() => ({ theme, toggle }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\``
  },
  {
    id: 'react-38',
    title: 'Explain Context Provider Composition Pattern to avoid nesting hell.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ContextAPI', 'CompositionPattern'],
    enAnswer: 'The Context Provider Composition pattern uses a helper component to dynamically compose and wrap multiple context providers, preventing deeply nested JSX code structures.',
    bnAnswer: 'প্রোভাইডার কম্পোজিশন প্যাটার্ন একটি হেল্পার ফাংশনের মাধ্যমে একাধিক কনটেক্সট প্রোভাইডারকে ডাইনামিকালি কমপোজ করে, যা গভীর নেস্টেড JSX কোড (nesting hell) তৈরি হওয়া প্রতিরোধ করে।',
    enExplanation: `### Explanation
As apps grow, they accumulate context providers (Auth, Theme, Query, Redux, Language). Nesting them manually in App.tsx creates "provider nesting hell", which is hard to read.
- **Solution**: A utility component that accepts children and an array of providers, nesting them dynamically using \`Array.reduce\`.

### Real-World Example
A complex frontend dashboard requiring 6 different state providers. Instead of nesting 6 tags, they are passed as an array to a \`ComposeProviders\` helper.

### Best Practice
Keep the orchestration clean. Only compose providers that have global or app-level lifecycle scope.

### Common Mistakes
Composing providers that depend on each other out of order. Ensure parent dependencies are registered before the children that consume them.

### Code Example
\`\`\`tsx
import React, { ReactNode } from 'react';

interface ComposeProps {
  providers: Array<React.ComponentType<{ children: ReactNode }>>;
  children: ReactNode;
}

export function ComposeProviders({ providers, children }: ComposeProps) {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
}

// Usage in App.tsx
// <ComposeProviders providers={[AuthProvider, ThemeProvider, QueryProvider]}>
//   <Dashboard />
// </ComposeProviders>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রজেক্ট বড় হওয়ার সাথে সাথে প্রোভাইডারের সংখ্যা বাড়তে থাকে (Auth, Theme, Query)। এগুলোকে App.tsx ফাইলে ম্যানুয়ালি নেস্ট করতে গেলে কোড রিডাবিলিটি নষ্ট হয়ে যায়।
- **সমাধান**: একটি কমন কম্পোজার কম্পোনেন্ট তৈরি করা যা \`reduceRight\` মেথড ব্যবহার করে ডাইনামিকালি একটির ভেতর আরেকটি প্রোভাইডার বসিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
৬টি স্টেট প্রোভাইডার সম্বলিত অ্যাপ। ৬টি আলাদা ট্যাগ একে অপরের ভেতর না লিখে একটি জেনারেলাইজড লিস্ট আকারে পাস করা।

### উত্তম অনুশীলন (Best Practice)
কম্পোজার ব্যবহারের সময় খেয়াল রাখুন যেন গ্লোবাল প্রোভাইডারগুলোই শুধু এখানে সেট হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
পরস্পরের ওপর নির্ভরশীল প্রোভাইডারগুলোকে ভুল সিকোয়েন্সে কম্পোজ করা। প্যারেন্ট প্রোভাইডার সবসময় চাইল্ড প্রোভাইডারের পূর্বে থাকতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import React, { ReactNode } from 'react';

interface ComposeProps {
  providers: Array<React.ComponentType<{ children: ReactNode }>>;
  children: ReactNode;
}

export function ComposeProviders({ providers, children }: ComposeProps) {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
}

// App.tsx এ ব্যবহার
// <ComposeProviders providers={[AuthProvider, ThemeProvider, QueryProvider]}>
//   <Dashboard />
// </ComposeProviders>
\`\`\``
  },
  {
    id: 'react-39',
    title: 'Explain Memory Leak Cleanup inside useEffect with async functions.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'useEffect', 'MemoryLeaks', 'Async'],
    enAnswer: 'Cleanup in asynchronous effects is handled by using a cancellation flag or abort controller inside the effect to prevent updating component state if the component has unmounted.',
    bnAnswer: 'অ্যাসিনক্রোনাস ইফেক্টে মেমোরি লিক এড়াতে একটি ক্যান্সেলেশন ফ্ল্যাগ বা অ্যাবোর্ট কন্ট্রোলার ব্যবহার করতে হয়, যা কম্পোনেন্ট আনমাউন্ট হয়ে গেলে তার স্টেট আপডেট হওয়া বন্ধ করে।',
    enExplanation: `### Explanation
If an asynchronous fetch takes 5 seconds, and the user clicks away causing the component to unmount, when the fetch promise resolves, calling \`setData\` on an unmounted component was a common source of memory leak warnings in React.
- **Solution**: Use an active boolean flag or \`AbortController\` to discard state updates if unmounted.

### Real-World Example
In a fast-navigated tab layout, users switch tabs quickly. Fetch requests from previously closed tabs should be aborted, and their callbacks must not trigger state updates.

### Best Practice
Prefer using modern libraries like TanStack Query (React Query) which handle fetch aborts and state sync automatically.

### Common Mistakes
Trying to make the outer useEffect callback function directly asynchronous: \`useEffect(async () => { ... })\`. This is illegal because useEffect must return either nothing or a synchronous cleanup function.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function UserFetcher({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let active = true; // cancellation flag

    async function loadData() {
      const res = await fetch(\`/api/user/\${userId}\`);
      const data = await res.json();
      if (active) {
        setUser(data);
      }
    }
    loadData();

    // Cleanup executes on unmount or id changes
    return () => {
      active = false;
    };
  }, [userId]);

  return <div>{user ? JSON.stringify(user) : 'Loading...'}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ধরা যাক একটি এপিআই কল হতে ৫ সেকেন্ড সময় লাগে। এর মধ্যে যদি ইউজার পেজ চেঞ্জ করে চলে যান তবে মাউন্ট চলে যাওয়ার পর এপিআই রেসপন্স এসে স্টেট সেট করার ট্রাই করলে মেমোরি লিক এরর আসে।
- **সমাধান**: একটি একটিভ ফ্ল্যাগ ভ্যারিয়েবল বা \`AbortController\` সেট করা যা আনমাউন্ট হলে ফেচ প্রমিজ বাতিল করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ট্যাব মেনু যেখানে দ্রুত ক্লিক করার সময় আগের ট্যাবগুলোর ব্যাকগ্রাউন্ড এপিআই আপডেট ডিসকার্ড করে নতুন ট্যাব শো করানো।

### উত্তম অনুশীলন (Best Practice)
অ্যাসিনক্রোনাস ডাটা লাইফসাইকেল কন্ট্রোল করার জন্য TanStack Query ব্যবহার করুন, এটি এগুলো নিজে থেকেই হ্যান্ডেল করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
useEffect-এর মূল কলব্যাককে সরাসরি \`async\` ঘোষণা করা, যেমন- \`useEffect(async () => {})\`। এটি ভুল কারণ ইফেক্টকে শুধুমাত্র একটি সিনক্রোনাস ফাংশন রিটার্ন করতে হয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function UserFetcher({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let active = true; // ক্যান্সেলেশন ফ্ল্যাগ

    async function loadData() {
      const res = await fetch(\`/api/user/\${userId}\`);
      const data = await res.json();
      if (active) {
        setUser(data);
      }
    }
    loadData();

    // আনমাউন্ট বা আইডি পরিবর্তনের সময় এটি সচল হবে
    return () => {
      active = false;
    };
  }, [userId]);

  return <div>{user ? JSON.stringify(user) : 'লোড হচ্ছে...'}</div>;
}
\`\`\``
  },
  {
    id: 'react-40',
    title: 'Explain the Profiler API for performance measurements in React.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Profiler', 'Performance'],
    enAnswer: 'The Profiler API measures how often a React application renders and the CPU cost of rendering, helping developers identify bottlenecks.',
    bnAnswer: 'প্রোফাইলার এপিআই (Profiler API) পরিমাপ করে কতবার রিঅ্যাক্ট অ্যাপ্লিকেশনটি রেন্ডার হচ্ছে এবং তার জন্য কেমন সিপিইউ প্রোসেসিং লাগছে, যা পারফরম্যান্স ল্যাগ খুঁজে পেতে সাহায্য করে।',
    enExplanation: `### Explanation
React provides a \`<Profiler>\` component to measure render performance. It collects details:
- \`id\`: string identifier.
- \`phase\`: 'mount' or 'update'.
- \`actualDuration\`: time spent rendering the commit.
- \`baseDuration\`: estimate time of full sub-tree render without memoization.

### Real-World Example
Wrapping a heavy product navigation filter dashboard in a \`<Profiler>\` to log render speeds to your analytics tool, showing if filters make the UI laggy on slow mobile screens.

### Best Practice
Do not deploy Profiler wrappers globally in production apps, as tracking render durations adds light runtime overhead. Use it selectively.

### Common Mistakes
Confusing \`actualDuration\` with standard page load time. Profiler measures React reconciliation execution speed, not network speeds.

### Code Example
\`\`\`tsx
import { Profiler, ReactNode } from 'react';

export function PerformanceMonitor({ children }: { children: ReactNode }) {
  const onRenderCallback = (
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number,
    baseDuration: number
  ) => {
    console.log(\`Profiler [\${id}] - Phase: \${phase}\`);
    console.log(\`Render time: \${actualDuration}ms (Base target: \${baseDuration}ms)\`);
  };

  return (
    <Profiler id="DashboardView" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট মেজারমেন্টের জন্য \`<Profiler>\` প্রদান করে। এটি নিচের বিষয়গুলো ট্র্যাক করে:
- \`id\`: নাম বা আইডেন্টিফায়ার।
- \`phase\`: 'mount' (প্রথমবার) অথবা 'update' (স্টেট পরিবর্তন)।
- \`actualDuration\`: রেন্ডার হতে ঠিক কত মিলি-সেকেন্ড সময় লেগেছে।
- \`baseDuration\`: মেমো ছাড়া রেন্ডার হলে কেমন সময় লাগতো তার ধারণা।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় ডাটা গ্রিডকে প্রোফাইলারের মধ্যে রাখা যাতে রেন্ডার স্পিডের গড় হিসাব করে পারফরম্যান্স মনিটরিং ডাটাবেজে পাঠানো যায়।

### উত্তম অনুশীলন (Best Practice)
প্রোডাকশন এনভায়রনমেন্টে প্রোফাইলার ব্যবহার করবেন না, কারণ এটি সামান্য সিপিইউ লোড বাড়ায়। এটি শুধু টেস্টিং ও প্রোফাইলিংয়ের জন্য রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`actualDuration\` কে নেকওয়ার্কের ডাটা লোডিং টাইম মনে করা। এটি নেটওয়ার্ক স্পিড মাপে না, এটি শুধুমাত্র রিকনসিলার অ্যালগরিদম রান হওয়ার স্পিড মাপে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { Profiler, ReactNode } from 'react';

export function PerformanceMonitor({ children }: { children: ReactNode }) {
  const onRenderCallback = (
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number,
    baseDuration: number
  ) => {
    console.log(\`প্রোফাইলার [\${id}] - ফেজ: \${phase}\`);
    console.log(\`রেন্ডার টাইম: \${actualDuration}ms (বেস টার্গেট: \${baseDuration}ms)\`);
  };

  return (
    <Profiler id="DashboardView" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
}
\`\`\``
  },
  {
    id: 'react-41',
    title: 'Explain Class Components Migration to Functional Components.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Migration', 'Hooks'],
    enAnswer: 'Migration involves converting component classes into functions, replacing state variables with useState, and refactoring lifecycle methods into useEffect calls.',
    bnAnswer: 'মাইগ্রেশনের সময় ক্লাসগুলোকে সাধারণ ফাংশনে রূপান্তর করা হয়, ভেতরের স্টেটকে useState এবং বিভিন্ন লাইফসাইকেল মেথডগুলোকে useEffect হুকে কনভার্ট করা হয়।',
    enExplanation: `### Explanation
Functional components are cleaner and bundle to smaller file sizes.
- **Conversion steps**:
  1. Replace \`class X extends Component\` with \`function X(props)\`.
  2. Remove \`this.state\` and \`this.setState\` references.
  3. Swap constructor initializers for \`useState\` initial values.
  4. Replace render method return block with simple function returns.

### Real-World Example
Upgrading a legacy React 16 calendar component class to use functional hooks, allowing use of React 18 concurrent transitions and avoiding memory leaks.

### Best Practice
Migrate step-by-step. Keep unit test suites running during migration to ensure component inputs and output behaviors stay identical.

### Common Mistakes
Forgetting that state updates via \`useState\` setters replace the state value entirely, whereas class \`this.setState\` merged object properties automatically. Always spread objects: \`setObj(prev => ({ ...prev, updatedKey: val }))\`.

### Code Example
\`\`\`tsx
import { useState } from 'react';

// Legacy Class Component
// class Profile extends React.Component {
//   state = { name: 'Guest', role: 'User' };
//   render() { ... }
// }

// Migrated Functional Component
export function ProfileCard() {
  const [user, setUser] = useState({ name: 'Guest', role: 'User' });

  const handleUpdate = () => {
    // Correct: Must spread to prevent losing the 'role' property
    setUser(prev => ({ ...prev, name: 'Rohit' }));
  };

  return (
    <div>
      <p>Name: {user.name}, Role: {user.role}</p>
      <button onClick={handleUpdate}>Change Name</button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ফাংশনাল কম্পোনেন্ট বেশি পরিচ্ছন্ন এবং কোড সাইজ ছোট করে।
- **মাইগ্রেশন ধাপসমূহ**:
  ১. \`class X extends Component\` এর স্থানে \`function X(props)\` ডিক্লেয়ার করুন।
  ২. \`this.state\` এবং \`this.setState\` রেফারেন্সগুলো মুছে দিন।
  ৩. কনস্ট্রাক্টরের পরিবর্তে \`useState\` ব্যবহার করুন।
  ৪. রেন্ডার মেথডের ভেতরের রিটার্ন অংশ সরাসরি ফাংশন রিটার্ন হিসেবে লিখুন।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
রিঅ্যাক্ট ১৬ দিয়ে লেখা একটি পুরোনো ডায়েরি কম্পোনেন্টকে হুকে কনভার্ট করা যাতে এটি রিঅ্যাক্ট ১৮-এর ট্রানজিশন সাপোর্ট করতে পারে।

### উত্তম অনুশীলন (Best Practice)
ধাপে ধাপে মাইগ্রেশন করুন। মাইগ্রেশনের সময় টেস্ট সুইট সচল রাখুন যাতে আউটপুটের ফলাফল পরিবর্তন না হয়ে যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে \`useState\` সরাসরি পূর্বের স্টেট মুছে নতুন মান সেট করে, যেখানে ক্লাসের \`setState\` অবজেক্ট অটোমেটিক মার্জ করতো। তাই হুকে স্প্রেড করা জরুরি: \`setObj(prev => ({ ...prev, key: val }))\`।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';

// লেগাসি ক্লাস কম্পোনেন্ট
// class Profile extends React.Component {
//   state = { name: 'Guest', role: 'User' };
//   render() { ... }
// }

// মাইগ্রেট করা ফাংশনাল কম্পোনেন্ট
export function ProfileCard() {
  const [user, setUser] = useState({ name: 'Guest', role: 'User' });

  const handleUpdate = () => {
    // সঠিক: 'role' প্রপার্টি হারিয়ে যাওয়া ঠেকাতে স্প্রেড করতে হবে
    setUser(prev => ({ ...prev, name: 'Rohit' }));
  };

  return (
    <div>
      <p>নাম: {user.name}, রোল: {user.role}</p>
      <button onClick={handleUpdate}>নাম পরিবর্তন</button>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-42',
    title: 'How do you implement input Debouncing inside React search components?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Debounce', 'Optimization', 'useEffect'],
    enAnswer: 'Debouncing delays execution of a search API request until the user stops typing for a specified time delay, implemented inside useEffect with a setTimeout and cleanup.',
    bnAnswer: 'ইনপুট ডিবেন্সিং টাইপ করার সাথে সাথে এপিআই রিকোয়েস্ট ফায়ার না করিয়ে ইউজার টাইপ করা থামালে নির্দিষ্ট সময় পর রিকোয়েস্ট ফায়ার করতে সাহায্য করে, যা useEffect এবং setTimeout দিয়ে করা যায়।',
    enExplanation: `### Explanation
Typing triggers an event on every keypress. If each letter typed fires a database API call, it wastes database resources and causes lags. Debouncing clears previous timers using a cleanup function, setting a new timer on every keypress so only the final input fires the API.

### Real-World Example
An autocomplete search bar. Typing "laptop" has 6 letters. Without debouncing, it runs 6 API calls. With a 300ms debounce, it only executes 1 API call when the user pauses typing.

### Best Practice
Maintain a clean state separation: one state for the fast, responsive input field value, and another state for the debounced query used in API requests.

### Common Mistakes
Forgetting to clear the timeout in the useEffect return block, which causes multiple delayed API calls to execute anyway.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function SearchBox() {
  const [input, setInput] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    // Set timer to update value after 300ms
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 300);

    // Correct: Clean up previous timer if input changes before 300ms
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // Execute API query only when debouncedValue changes
  useEffect(() => {
    if (debouncedValue) {
      console.log('API call fired with query:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input 
      value={input} 
      onChange={e => setInput(e.target.value)} 
      placeholder="Type to search..." 
    />
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কিবোর্ডে টাইপ করার প্রতি ক্লিকে ইভেন্ট ট্রিগার হয়। প্রতিটি অক্ষরের জন্য এপিআই কল বসালে সার্ভার ক্র্যাশ করতে পারে। ডিবেন্সিং প্রতি টাইপিং ক্লিকে আগের টাইমার ক্লিয়ার করে নতুন টাইমার চালু করে, ফলে ইউজার টাইপ থামানো পর্যন্ত এপিআই কল ঠেকানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইভ ফিল্টার প্রোডাক্ট ড্যাশবোর্ড। "laptop" লেখার সময় ৬ বার এপিআই কল না পাঠিয়ে টাইপিং শেষে মাত্র ১ বার রিকোয়েস্ট পাঠানো।

### উত্তম অনুশীলন (Best Practice)
দুইটি আলাদা স্টেট রাখুন: একটি ইনপুট টেক্সট বক্সের ইনস্ট্যান্ট মানের জন্য, অন্যটি ডিবেন্স হওয়া মানের জন্য যা কুয়েরিতে যাবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
useEffect-এর ক্লিনআপ ব্লকে \`clearTimeout(timer)\` করতে ভুলে যাওয়া, যার ফলে টাইপ করতে থাকলেও সবগুলো এপিআই কল একের পর এক ফায়ার হতে থাকবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function SearchBox() {
  const [input, setInput] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    // ৩০০ মিলি-সেকেন্ড পর ভ্যালু সেট করার টাইমার
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 300);

    // সঠিক: ইউজার টাইপ করা থামালে আগের টাইমার ডিলিট করবে
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // ডিবেন্স করা ভ্যালু বদলালে এপিআই রান হবে
  useEffect(() => {
    if (debouncedValue) {
      console.log('এপিআই কল হচ্ছে সার্চ কুয়েরি:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input 
      value={input} 
      onChange={e => setInput(e.target.value)} 
      placeholder="টাইপ করে খুঁজুন..." 
    />
  );
}
\`\`\``
  },
  {
    id: 'react-43',
    title: 'What are Custom Ref Hooks and how do you compose multiple DOM refs?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Refs', 'CustomHooks', 'useForkRef'],
    enAnswer: 'Composing refs involves creating a callback ref that updates both a local ref and an external forwarded ref, enabling multiple listeners to share the same DOM node reference.',
    bnAnswer: 'কাস্টম রেফ হুকস বা রেফ কমপোজিশন হলো এমন মেকানিজম যা একটি নোডের ডম রেফারেন্সকে লোকাল রেফ এবং এক্সটারনাল ফরোয়ার্ড করা রেফ উভয়ের কাছেই সমানভাবে পৌঁছে দেয়।',
    enExplanation: `### Explanation
In complex component libraries, a parent component passes a ref via \`forwardRef\` to access a child's DOM node. At the same time, the child component needs its own local ref to compute layout boundaries. Directly writing \`ref={ref}\` will block the other.
- **Solution**: A custom ref hook (often called \`useForkRef\`) that returns a callback ref, forwarding the node to all target ref containers.

### Real-World Example
Building a custom tooltip wrapper inside a UI library. The tooltip component needs to measure input boundary size locally while letting parent form managers trigger focus.

### Best Practice
Ensure composed callback refs handle null cleanup safely during node unmounting cycles.

### Common Mistakes
Directly mutating forwarded ref objects manually like \`forwardedRef.current = node\` without checking if it is passed as a function ref instead of a ref object.

### Code Example
\`\`\`tsx
import { useRef, useCallback, MutableRefObject, Ref } from 'react';

export function useForkRef<T>(
  refA: Ref<T> | undefined,
  refB: Ref<T> | undefined
): Ref<T> {
  return useCallback(
    (node: T | null) => {
      // Handle first ref target
      if (typeof refA === 'function') {
        refA(node);
      } else if (refA) {
        (refA as MutableRefObject<T | null>).current = node;
      }

      // Handle second ref target
      if (typeof refB === 'function') {
        refB(node);
      } else if (refB) {
        (refB as MutableRefObject<T | null>).current = node;
      }
    },
    [refA, refB]
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোনো লাইব্রেরি কম্পোনেন্টে প্যারেন্ট নোড চাইল্ডের ডম রেফারেন্স পেতে ফরোয়ার্ড রেফ পাঠায়। আবার চাইল্ডের নিজের নোড সাইজ মাপতেও লোকাল রেফ দরকার হয়। সরাসরি ডম নোডে একটি রেফ বসালে অন্যটি ব্লক হয়ে যায়।
- **সমাধান**: একটি কাস্টম বা ফর্ক রেফ ফাংশন কল করা যা উভয় রেফ অবজেক্টের কাছে ডম নোডের পয়েন্টারটি পাঠিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম ড্রপডাউন ইনপুট নোড। প্যারেন্ট নোড ইনপুট ফোকাস করার কন্ট্রোল চায়, আবার চাইল্ড নোড নিজের পজিশন অনুযায়ী পপআপ বক্সটি প্লেস করতে চায়।

### উত্তম অনুশীলন (Best Practice)
কম্পোনেন্ট আনমাউন্ট হওয়ার সময় নাল (null) ভ্যালু হ্যান্ডেল করার সুবিধা রেফ কম্বাইনারের ভেতর যোগ করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফরোয়ার্ড করা রেফটি ফাংশন নাকি অবজেক্ট তা যাচাই না করে সরাসরি \`forwardedRef.current = node\` লিখে দেওয়া।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useRef, useCallback, MutableRefObject, Ref } from 'react';

export function useForkRef<T>(
  refA: Ref<T> | undefined,
  refB: Ref<T> | undefined
): Ref<T> {
  return useCallback(
    (node: T | null) => {
      // প্রথম রেফ হ্যান্ডেল করা হচ্ছে
      if (typeof refA === 'function') {
        refA(node);
      } else if (refA) {
        (refA as MutableRefObject<T | null>).current = node;
      }

      // দ্বিতীয় রেফ হ্যান্ডেল করা হচ্ছে
      if (typeof refB === 'function') {
        refB(node);
      } else if (refB) {
        (refB as MutableRefObject<T | null>).current = node;
      }
    },
    [refA, refB]
  );
}
\`\`\``
  },
  {
    id: 'react-44',
    title: 'Explain React Portals and event bubbling behavior through Portal boundaries.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Portals', 'EventBubbling'],
    enAnswer: 'React Portals let you render children into a different DOM node outside the parent hierarchy, but events still bubble up through the virtual React parent hierarchy normally.',
    bnAnswer: 'রিঅ্যাক্ট পোর্টাল (Portals) কোনো চাইল্ড নোডকে প্যারেন্টের বাইরে সম্পূর্ণ আলাদা ডম নোডে রেন্ডার করতে দেয়, তবে ইভেন্টগুলো ভার্চুয়াল রিঅ্যাক্ট ট্রি দিয়ে প্যারেন্টের কাছে স্বাভাবিকভাবেই বাবল (bubble) করে।',
    enExplanation: `### Explanation
Using \`ReactDOM.createPortal(child, container)\`, you can render overlays (modals, tooltips) directly under \`<body>\`, avoiding layout nesting bugs (like \`overflow: hidden\` or \`z-index\` conflicts). Although the portal element is physically placed elsewhere in the HTML DOM, React maintains a virtual tree hierarchy, so clicks inside portals bubble up to React parents.

### Real-World Example
Clicking an action button inside a body-level popup Modal still triggers forms or logs inside the parent container component wrapping the modal.

### Best Practice
Ensure portal targets (like container divs) exist in the DOM before rendering to avoid runtime errors, and capture bubbles using \`e.stopPropagation()\` if needed.

### Common Mistakes
Forgetting that events bubble through portals. Clicking a close button inside a portal modal could trigger form submits or click-outside events in parent modules unless intercepted.

### Code Example
\`\`\`tsx
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps { children: ReactNode }

export function ModalPortal({ children }: PortalProps) {
  // Renders children directly into body container, ignoring parent styles
  const mountNode = document.body;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {children}
    </div>,
    mountNode
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`ReactDOM.createPortal(child, container)\` দিয়ে ওভারলে বা মডাল সরাসরি \`<body>\` এর নিচে রেন্ডার করা যায়, যা সিএসএস \`overflow: hidden\` বা \`z-index\` এর সমস্যাগুলো দূর করে। ডমে এটি অন্য জায়গায় গেলেও রিঅ্যাক্ট তার ভার্চুয়াল কানেকশন ঠিক রাখে, তাই পোর্টালের ভেতরের ক্লিক প্যারেন্ট কম্পোনেন্টে বাবল হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি পপআপ ডিলিট মডালের ভেতরের ক্লোজ বাটনে ক্লিক করলে ইভেন্ট বাবল হয়ে প্যারেন্ট ফর্ম কন্টেইনারে অ্যাকশন ট্রিগার করে।

### উত্তম অনুশীলন (Best Practice)
পোর্টাল কন্টেইনার ডমে উপস্থিত থাকা নিশ্চিত করুন এবং প্রয়োজনে \`e.stopPropagation()\` দিয়ে ভুল বাবলিং আটকে দিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
পোর্টালের ভেতর ক্লিক করলে যে প্যারেন্ট ইভেন্ট ট্রিগার হতে পারে তা ভুলে যাওয়া, যা মাঝে মাঝে ভুল করে ফর্ম সাবমিট করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps { children: ReactNode }

export function ModalPortal({ children }: PortalProps) {
  // চিলড্রেনকে সরাসরি বডিতে পাঠানো হচ্ছে সিএসএস সেফটির জন্য
  const mountNode = document.body;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {children}
    </div>,
    mountNode
  );
}
\`\`\``
  },
  {
    id: 'react-45',
    title: 'How do you design custom skeleton loading layouts in Suspense boundaries?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Suspense', 'Skeletons', 'UX'],
    enAnswer: 'You design animated HTML blocks that mimic the target layouts structure, passing them as the fallback prop to Suspense boundaries for a smooth loading transition.',
    bnAnswer: 'টার্গেট লেআউটের সাথে মিল রেখে অ্যানিমেটেড HTML নোড ডিজাইন করতে হয় এবং সাসপেন্স বাউন্ডারির fallback প্রপে পাস করতে হয় যাতে লোডিংয়ের সময় স্ক্রিন মসৃণ থাকে।',
    enExplanation: `### Explanation
Instead of a blank screen or a rotating spinner, custom skeletons mimic page text paragraphs or image boxes with a subtle pulse animation. Skeletons improve the Perceived Performance (UX) of the application.

### Real-World Example
In a news listing page, while articles load asynchronously, displaying 3 cards containing gray pulse boxes for title, description, and preview image.

### Best Practice
Match card size and margins exactly between the skeleton loader and the actual component to prevent layout shifts when the data resolves.

### Common Mistakes
Using a single spinner for the entire layout, causing the page elements to jump abruptly when loaded.

### Code Example
\`\`\`tsx
import { Suspense, lazy } from 'react';

const ProfileDetails = lazy(() => import('./ProfileDetails'));

// Pulse Skeleton mimicking profile card
function ProfileSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 p-4 border rounded-lg max-w-sm">
      <div className="rounded-full bg-slate-200 h-10 w-10" />
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded" />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2" />
            <div className="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDetails />
    </Suspense>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোনো স্পিনার বা ফাঁকা সাদা স্ক্রিন দেখানোর পরিবর্তে কাঙ্ক্ষিত UI-এর মতো হালকা অ্যানিমেটেড ব্লক দেখানোকে স্কেলিটন লোডার বলে। এটি অ্যাপের ইউজার এক্সপেরিয়েন্স (UX) এবং গতির অনুভূতি বাড়িয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি নিউজ ফিড পেজে খবরগুলো লোড হওয়ার সময় ধূসর রঙের ৩টি অ্যানিমেটেড পালস কার্ড দেখানো।

### উত্তম অনুশীলন (Best Practice)
স্কেলিটনের মার্জিন এবং নোডের উচ্চতা মূল কম্পোনেন্টের সাথে হুবহু মিল রাখুন যাতে লোড হওয়ার পর ডম এলিমেন্ট লাফ দিয়ে পজিশন পরিবর্তন না করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
একটি বড় স্পিনার দিয়ে পুরো পেজ লোড করানো, যা কন্টেন্ট রেডি হলে চোখের সামনে একটি ঝটকা তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { Suspense, lazy } from 'react';

const ProfileDetails = lazy(() => import('./ProfileDetails'));

// প্রোফাইল পেজের সাথে মিল রেখে পালস স্কেলিটন
function ProfileSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 p-4 border rounded-lg max-w-sm">
      <div className="rounded-full bg-slate-200 h-10 w-10" />
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded" />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2" />
            <div className="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDetails />
    </Suspense>
  );
}
\`\`\``
  },
  {
    id: 'react-46',
    title: 'Explain CSS-in-JS vs CSS Modules styling architectural trade-offs.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Styling', 'CSSinJS', 'CSSModules'],
    enAnswer: 'CSS Modules compiles static stylesheets at build-time. CSS-in-JS evaluates styles dynamically at runtime using JS, which adds light browser execution overhead.',
    bnAnswer: 'CSS Modules বিল্ড-টাইমে স্ট্যাটিক সিএসএস ফাইল তৈরি করে। CSS-in-JS রানটাইমে জাভাস্ক্রিপ্ট ব্যবহার করে ডাইনামিক স্টাইল শিট জেনারেট করে যা ব্রাউজারের লোড সামান্য বাড়িয়ে দেয়।',
    enExplanation: `### Explanation
- **CSS Modules**: Static compilation, zero runtime engine cost. Standard CSS syntax. Excellent performance.
- **CSS-in-JS (Styled-Components/Emotion)**: Dynamic state integration. Styling variables are bound to props directly. However, runtime evaluation slows rendering in large apps.
- **RSC Implications**: React Server Components cannot run typical CSS-in-JS libraries because server bundles do not support runtime JS context injection.

### Real-World Example
Choosing CSS modules or Tailwind for a performance-critical user-facing ecommerce website, and choosing styled-components for an admin system with high state-driven style transitions.

### Best Practice
Default to compile-time utilities like CSS modules or utility classes (Tailwind CSS) to support React Server Components and fast rendering times.

### Common Mistakes
Injecting styled declarations dynamically inside render functions: \`const Btn = styled.button({ color })\`. This recreates stylesheet styles on every single render, causing massive performance lag.

### Code Example
\`\`\`tsx
// CSS Modules (Compile-Time) - Recommended
import styles from './Card.module.css';

export function StaticCard({ isActive }: { isActive: boolean }) {
  return (
    <div className={\`\${styles.card} \${isActive ? styles.active : ''}\`}>
      Static Performance Card
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **CSS Modules**: বিল্ড টাইমে পুরো স্টাইল শিট তৈরি হয়, রানটাইমে ব্রাউজারের ওপর কোনো এক্সট্রা লোড থাকে না। পারফরম্যান্স দারুণ।
- **CSS-in-JS**: প্রপসের ওপর ভিত্তি করে ডাইনামিকালি ক্লাস বা স্টাইল তৈরি করা সহজ। তবে খুব বড় অ্যাপে এটি রেন্ডারিং ধীর করে।
- **সার্ভার কম্পোনেন্ট**: সার্ভার কম্পোনেন্টগুলো (RSC) সিএসএস-ইন-জেএস সাপোর্ট করে না কারণ সেখানে রানটাইম জেএস নোড থাকে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইকমার্স সাইটে স্পিড বাড়াতে CSS Modules বা Tailwind ব্যবহার করা এবং একটি অ্যাডমিন প্যানেলে জটিল থিমের জন্য styled-components ব্যবহার করা।

### উত্তম অনুশীলন (Best Practice)
কম্পাইল-টাইম টুলস যেমন CSS Modules বা Tailwind ব্যবহার করুন যাতে সার্ভার কম্পোনেন্ট ও ফাস্ট লোডিং নিশ্চিত করা যায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডার ফাংশনের ভেতরে styled কম্পোনেন্ট তৈরি করা: \`const Card = styled.div\`। এটি প্রতি রেন্ডারে সিএসএস ইঞ্জিনকে পুনরায় ক্লাস তৈরি করতে বাধ্য করে পেজ ফ্রিজ করে দিতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// CSS Modules (কম্পাইল-টাইম) - উত্তম অনুশীলন
import styles from './Card.module.css';

export function StaticCard({ isActive }: { isActive: boolean }) {
  return (
    <div className={\`\${styles.card} \${isActive ? styles.active : ''}\`}>
      পারফরম্যান্স ফ্রেন্ডলি কার্ড
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-47',
    title: 'Explain Loader functions in React Router DOM.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactRouter', 'Loaders', 'DataFetching'],
    enAnswer: 'Loader functions let you fetch page data asynchronously before the component page render cycle starts, improving UI loading coordination.',
    bnAnswer: 'লোডার ফাংশন (Loader) কোনো পেজ বা রাউট রেন্ডার শুরু হওয়ার আগেই ব্যাকগ্রাউন্ডে অ্যাসিনক্রোনাস ডাটা ফেচিং সম্পন্ন করতে সাহায্য করে এবং মসৃণ রাউট ট্রানজিশন দেয়।',
    enExplanation: `### Explanation
Traditional fetching loads components first, then triggers \`useEffect\` fetch. This creates a "render-then-fetch" waterfall, causing layout shifts. React Router Loaders fetch data in parallel with route bundle fetching. The component reads resolved data using \`useLoaderData\`.

### Real-World Example
Clicking a user profile link. The profile page renders only *after* the user's data fetch is resolved, preventing blank pages or jumps.

### Best Practice
Utilize loader functions for route-level data fetching. Combine with \`defer\` and \`<Await>\` for streaming slow requests.

### Common Mistakes
Not handling fetch errors inside loaders, causing routing crashes. Always return proper response wrappers or boundary errors.

### Code Example
\`\`\`tsx
// Loader config mapping
import { useLoaderData } from 'react-router-dom';

export async function userProfileLoader({ params }: any) {
  const res = await fetch(\`/api/user/\${params.id}\`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}

export function UserProfileView() {
  // Read loaded data immediately without useEffect
  const userData = useLoaderData() as { name: string };

  return <h1>Profile of: {userData.name}</h1>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ ফেচিংয়ে আগে কম্পোনেন্ট স্ক্রিনে আসে তারপর useEffect চলে। এতে পেজে বারংবার লেআউট শিফট হয়। রাউটার লোডার রাউট ফাইল লোড হওয়ার সাথে সাথেই ডাটা তুলে আনে এবং নোডগুলোতে সরাসরি প্রোভাইড করে। ডাটা রিড করতে \`useLoaderData\` ব্যবহার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি প্রোফাইল রাউটে ক্লিক করার পর লোডার ব্যাকগ্রাউন্ডে ডাটা নিয়ে আসবে এবং ডাটা রেডি হওয়ার পর প্রোফাইল স্ক্রিনটি একবারে সুন্দরভাবে ভেসে উঠবে।

### উত্তম অনুশীলন (Best Practice)
রাউট-লেভেলের জন্য লোডার ব্যবহার করুন। এপিআই রেসপন্স ধীরগতির হলে \`defer\` এবং \`<Await>\` দিয়ে স্ট্রিমিং লোডার বানান।

### সাধারণ ভুলসমূহ (Common Mistakes)
লোডারের ভেতরে ট্রাই-ক্যাচ বা এপিআই এরর হ্যান্ডেল না করা, যা রিকোয়েস্ট ফেইল করলে পুরো অ্যাপকে হ্যাং করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// লোডার কনফিগারেশন এর নমুনা
import { useLoaderData } from 'react-router-dom';

export async function userProfileLoader({ params }: any) {
  const res = await fetch(\`/api/user/\${params.id}\`);
  if (!res.ok) throw new Error('ইউজার পাওয়া যায়নি');
  return res.json();
}

export function UserProfileView() {
  // useEffect ছাড়াই সরাসরি লোডার ডাটা রিড করা হচ্ছে
  const userData = useLoaderData() as { name: string };

  return <h1>ইউজার প্রোফাইল: {userData.name}</h1>;
}
\`\`\``
  },
  {
    id: 'react-48',
    title: 'Explain Action functions in React Router DOM.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactRouter', 'Actions', 'FormSubmits'],
    enAnswer: 'Action functions handle data mutations triggered by route forms. They receive requests, execute backend mutations, and trigger automatic route revalidations.',
    bnAnswer: 'অ্যাকশন ফাংশন ফর্ম মিউটেশন ও সাবমিশন হ্যান্ডেল করে। এটি ফর্মের ডাটা নিয়ে ব্যাকএন্ড এপিআই-তে পাঠায় এবং স্বয়ংক্রিয়ভাবে রাউটের ডাটা রি-ভ্যালিডেট করে।',
    enExplanation: `### Explanation
React Router Actions manage form writes. When a user submits a Router \`<Form method="post">\`, React Router intercepts the submit event, calls the defined action function, and automatically updates all active route loaders on the page, keeping the UI fresh.

### Real-World Example
Submitting a "new task" form inside a todo list. The action saves the task to the database, and the page list re-fetches the list automatically.

### Best Practice
Support progressive enhancement. Form actions work even if client-side JS is slow or disabled.

### Common Mistakes
Trying to mutate database states in loaders. Loaders are for read-only operations; all write operations must use actions.

### Code Example
\`\`\`tsx
import { Form, redirect } from 'react-router-dom';

export async function createTaskAction({ request }: any) {
  const formData = await request.formData();
  const title = formData.get('title');

  await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });

  return redirect('/dashboard'); // Redirect after action finishes
}

export function NewTaskForm() {
  return (
    <Form method="post">
      <input name="title" required />
      <button type="submit">Create Task</button>
    </Form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রাউটার অ্যাকশন মূলত রাইট বা এডিট অপারেশন ম্যানেজ করে। ইউজার যখন রাউটার \`<Form method="post">\` সাবমিট করে, তখন অ্যাকশন ফাংশনটি রান হয় এবং শেষ হওয়ার সাথে সাথে পেজের সকল লোডারকে অটোমেটিক রি-ভ্যালিডেট (পুনরায় ডাটা লোড) করায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি নতুন কাজের এন্ট্রি দেওয়া। অ্যাকশনটি ব্যাকএন্ডে ডাটা সেভ করবে এবং তালিকাটি নিজে নিজেই সতেজ বা রিলোড হয়ে যাবে।

### উত্তম অনুশীলন (Best Practice)
প্রোগ্রেসিভ এনহান্সমেন্টের সুবিধা পাওয়ার জন্য সাধারণ ফর্ম ট্যাগের বদলে রাউটার ফর্ম অ্যাকশন ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
লোডার ফাংশনের ভেতরে ডাটাবেজ এডিট করার ট্রাই করা। লোডার শুধু রিড-অনলি কাজের জন্য, আর অ্যাকশন শুধু ডাটা মডিফিকেশনের জন্য।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { Form, redirect } from 'react-router-dom';

export async function createTaskAction({ request }: any) {
  const formData = await request.formData();
  const title = formData.get('title');

  await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });

  return redirect('/dashboard'); // কাজ শেষে ড্যাশবোর্ডে রিডাইরেক্ট করা হচ্ছে
}

export function NewTaskForm() {
  return (
    <Form method="post">
      <input name="title" required />
      <button type="submit">নতুন কাজ যোগ করুন</button>
    </Form>
  );
}
\`\`\``
  },
  {
    id: 'react-49',
    title: 'How do you design Protected Routes in React Router DOM?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactRouter', 'ProtectedRoutes', 'Auth'],
    enAnswer: 'Protected Routes use an authorization check inside a wrapper layout component. If authenticated, it renders children via <Outlet />; otherwise, it redirects to the login path.',
    bnAnswer: 'প্রটেক্টেড রাউট একটি অথোরাইজেশন চেকের সাহায্য নেয়। ইউজার লগইন থাকলে এটি <Outlet /> এর সাহায্যে চাইল্ড পেজ দেখায়, অন্যথায় লগইন পেজে রিডাইরেক্ট করে দেয়।',
    enExplanation: `### Explanation
Protected routes prevent access to authenticated screens (like dashboard or billing pages) for unauthenticated visitors.
- **Outlet**: Renders nested child routes matching path configs.
- **Navigate**: Router redirect helper.

### Real-World Example
A user tries to access \`/settings\` without logging in. The system intercepts, checks token validity, and pushes them to \`/login\`.

### Best Practice
Combine frontend route guards with API token verification, as client-side authorization can be bypassed by editing localStorage.

### Common Mistakes
Forgetting the \`replace\` attribute inside Navigate tag, allowing users to hit the browser "back" button and return to the protected blank screen.

### Code Example
\`\`\`tsx
import { Navigate, Outlet } from 'react-router-dom';

interface GuardProps { isAuthenticated: boolean }

export function ProtectedLayout({ isAuthenticated }: GuardProps) {
  // Correct: redirect to login if auth check fails
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renders the child routes matching current path
  return <Outlet />;
}

// Config:
// <Route element={<ProtectedLayout isAuthenticated={userLoggedIn} />}>
//   <Route path="/dashboard" element={<Dashboard />} />
// </Route>
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রটেক্টেড রাউট সাধারণ দর্শকদের লগইন ছাড়া ড্যাশবোর্ড বা সেটিংসের মতো ইন্টারনাল পেজে ঢুকতে বাধা দেয়।
- **Outlet**: এটি নেস্টেড চাইল্ড রাউটের স্ক্রিন রেন্ডার করে।
- **Navigate**: রিডাইরেক্ট করার রাউটার হেল্পার।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
লগইন ছাড়া সরাসরি \`/settings\` পেজে ঢুকতে চাইলে চেক করে টোকেন না পেয়ে ইউজারকে \`/login\` পেজে পাঠিয়ে দেওয়া।

### উত্তম অনুশীলন (Best Practice)
ক্লায়েন্ট-সাইড রাউট গার্ডের পাশাপাশি ব্যাকএন্ড এপিআই-তেও টোকেন ভ্যালিডেশন রাখুন, কারণ লোকালস্টোরেজ এডিট করে ক্লায়েন্ট গার্ড এড়ানো সম্ভব।

### সাধারণ ভুলসমূহ (Common Mistakes)
Navigate ট্যাগে \`replace\` অ্যাট্রিবিউট না দেওয়া, যার ফলে ইউজার ব্যাক বাটন টিপলে আবার ওই খালি স্ক্রিনেই ফিরে আসে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { Navigate, Outlet } from 'react-router-dom';

interface GuardProps { isAuthenticated: boolean }

export function ProtectedLayout({ isAuthenticated }: GuardProps) {
  // সঠিক: লগইন না থাকলে সরাসরি লগইন পেজে রিডাইরেক্ট
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // কন্ডিশন ঠিক থাকলে চাইল্ড রাউট রেন্ডার করবে
  return <Outlet />;
}

// রাউট কনফিগারেশন:
// <Route element={<ProtectedLayout isAuthenticated={userLoggedIn} />}>
//   <Route path="/dashboard" element={<Dashboard />} />
// </Route>
\`\`\``
  },
  {
    id: 'react-50',
    title: 'Explain Context API performance optimizations using selectors and split states.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ContextAPI', 'Optimization'],
    enAnswer: 'Optimizations involve splitting state into separate providers for read-only dispatch and read-write state, ensuring components only subscribe to needed changes.',
    bnAnswer: 'স্টেটকে ডিসপ্যাচ ও ভ্যালু এই দুই ভাগে আলাদা প্রোভাইডারে বিভক্ত করা, যার ফলে চাইল্ড নোডগুলো অহেতুক আপডেট ফায়ার হওয়া থেকে রক্ষা পায়।',
    enExplanation: `### Explanation
If you package dispatch functions and states in the same Context Provider value object, any state update triggers re-renders on components that only use the dispatch trigger function.
- **Solution**: Splitting context into two providers:
  1. \`StateContext\` (carries current values).
  2. \`DispatchContext\` (carries immutable update callbacks).

### Real-World Example
In a chat app, sending a message should not trigger a re-render of the message sender text box if the sender is only subscribed to the dispatch context provider.

### Best Practice
Avoid giant, global context providers. Use state management packages like Zustand for multi-slice enterprise-grade applications.

### Common Mistakes
Putting unrelated components under a single monolithic context provider, forcing total layout updates for minor feature alterations.

### Code Example
\`\`\`tsx
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

const CountStateContext = createContext<number | null>(null);
const CountDispatchContext = createContext<Dispatch<SetStateAction<number>> | null>(null);

export function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CountStateContext.Provider value={count}>
      <CountDispatchContext.Provider value={setCount}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

// Consumer that only updates value does not re-render when count changes
export function IncrementButton() {
  const setCount = useContext(CountDispatchContext);
  if (!setCount) throw new Error('Provider missing');
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যদি ডিসপ্যাচ (dispatch) ফাংশন এবং স্টেট একই প্রোভাইডারে রাখা হয়, তবে স্টেট বদলালে যে চাইল্ড নোড শুধু অ্যাকশন বাটন ট্রিগার করে সেও রি-রেন্ডার হবে।
- **সমাধান**: দুটি আলাদা প্রোভাইডার ব্যবহার করা:
  ১. \`StateContext\` (স্টেট ভ্যালু ধারণ করে)।
  ২. \`DispatchContext\` (স্টেট আপডেট করার মেথড ধারণ করে)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মেসেঞ্জার অ্যাপে মেসেজ পাঠানোর বাটনে ক্লিক করলে মেসেজ বক্সটির রেন্ডারিং ট্রিগার হওয়া প্রতিরোধ করা যদি সেটি শুধু ডিসপ্যাচ কন্টেইনারে সাবস্ক্রাইবড থাকে।

### উত্তম অনুশীলন (Best Practice)
একটি গ্লোবাল প্রোভাইডার দিয়ে সব স্টেট ম্যানেজ না করে মডুলার প্রোভাইডার বানান অথবা Zustand এর সাহায্য নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সম্পর্কহীন মডিউলগুলোকে একটি সিঙ্গেল কনটেক্সট ফাইলের আওতায় আনা, যা ছোট পরিবর্তনেও পুরো পেজের লেআউট রি-রেন্ডার করায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

const CountStateContext = createContext<number | null>(null);
const CountDispatchContext = createContext<Dispatch<SetStateAction<number>> | null>(null);

export function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CountStateContext.Provider value={count}>
      <CountDispatchContext.Provider value={setCount}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

// এই নোডটি কাউন্ট স্টেট পরিবর্তিত হলেও অহেতুক রেন্ডার নেবে না
export function IncrementButton() {
  const setCount = useContext(CountDispatchContext);
  if (!setCount) throw new Error('প্রোভাইডার পাওয়া যায়নি');
  return <button onClick={() => setCount(c => c + 1)}>বৃদ্ধি করুন</button>;
}
\`\`\``
  },
  {
    id: 'react-51',
    title: 'Explain the React Rendering Cycle (Render phase vs Commit phase).',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Rendering', 'Fiber'],
    enAnswer: 'The rendering cycle has two main phases: (1) Render phase, which calculates virtual tree changes without visual changes, and (2) Commit phase, which applies modifications directly to the browser DOM.',
    bnAnswer: 'রেন্ডারিং সাইকেলের দুটি মূল ধাপ রয়েছে: (১) রেন্ডার ফেজ, যা স্ক্রিনে কোনো টাচ না করে মেমোরিতে আগের ও পরের ভার্চুয়াল ট্রির পার্থক্য হিসাব করে, এবং (২) কমিট ফেজ, যা পরিবর্তনগুলো সরাসরি ব্রাউজার ডমে (DOM) বসায়।',
    enExplanation: `### Explanation
- **Render Phase**: React calls component functions and runs the diffing reconciler algorithm. This phase is pure, side-effect free, and can be paused or restarted by React in Concurrent Mode.
- **Commit Phase**: React applies layout modifications to the real DOM (via insertions, attributes, deletes). Lifecycle methods like \`componentDidMount\` and hooks like \`useEffect\` execute right after this phase.

### Real-World Example
If you trigger a state update, React runs the render phase to compute differences. If the resulting virtual tree is identical to the current layout, React bails out and never runs the commit phase, saving painting costs.

### Best Practice
Keep rendering logic pure. Do not write side effects (like API requests, document mutations, or setting timeouts) inside the body of a component function.

### Common Mistakes
Writing database fetch calls or ref modifications directly in the render path, causing duplicated calls and layout shifts.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function RenderFlow() {
  const [count, setCount] = useState(0);

  // Body of function runs in the RENDER phase
  console.log('Render phase execution for count:', count);

  useEffect(() => {
    // Executes inside the COMMIT phase (safe for side effects)
    console.log('Commit phase callback completed');
  }, [count]);

  return <button onClick={() => setCount(c => c + 1)}>Tick</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Render Phase**: রিঅ্যাক্ট কম্পোনেন্ট ফাংশন রান করিয়ে ডিফারেন্স হিসাব করে। এটি সম্পূর্ণ পিওর হওয়া উচিত এবং কনকারেন্ট মোডে রিঅ্যাক্ট চাইলে এটি পজ করতে পারে।
- **Commit Phase**: রিঅ্যাক্ট ডমে নোড পরিবর্তনগুলো যোগ করে। এই পর্যায় শেষে \`componentDidMount\` বা \`useEffect\` হুক রান হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বাটনে ক্লিক করে স্টেট ০ থেকে ০ তেই রাখলে রিঅ্যাক্ট রেন্ডার ফেজ চালালেও ডমে কোনো পরিবর্তন না দেখে কমিট ফেজ চালানো বাতিল করে দেয়, যা পেইন্টিং খরচ বাঁচায়।

### উত্তম অনুশীলন (Best Practice)
রেন্ডারিং লজিক পিওর রাখুন। কম্পোনেন্ট বডির ভেতর সরাসরি কোনো এপিআই কল বা ডকুমেন্ট মডিফিকেশন করবেন না।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইফেক্ট নোডের বাইরে সরাসরি এপিআই রিকোয়েস্ট বসিয়ে দেওয়া, যা প্রতি আপডেটে বারবার এপিআই ফায়ার করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function RenderFlow() {
  const [count, setCount] = useState(0);

  // ফাংশনের এই বডিটি RENDER ফেজে রান করে
  console.log('রেন্ডার ফেজ এক্সিকিউশন:', count);

  useEffect(() => {
    // এটি COMMIT ফেজ সম্পন্ন হওয়ার পর চলে (সাইড ইফেক্ট এর জন্য নিরাপদ)
    console.log('কমিট ফেজ সম্পন্ন হয়েছে');
  }, [count]);

  return <button onClick={() => setCount(c => c + 1)}>টিক</button>;
}
\`\`\``
  },
  {
    id: 'react-52',
    title: 'Explain Rendering Bailout and how React avoids unnecessary rendering.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Rendering', 'Bailout', 'Performance'],
    enAnswer: 'Bailout is the process where React skips rendering a component if the incoming state or props are determined to be identical to the current ones via shallow checks.',
    bnAnswer: 'বেইলআউট (Bailout) হলো এমন একটি প্রক্রিয়া যেখানে রিঅ্যাক্ট কোনো কম্পোনেন্টের স্টেট বা প্রপস অপরিবর্তিত দেখলে তার রেন্ডারিং বাতিল করে দেয়।',
    enExplanation: `### Explanation
React checks if new state matches the old state using \`Object.is\` equality comparison. If it evaluates to true, React bails out of rendering the component and its children, preventing wasting execution cycles.

### Real-World Example
In a status tracker, clicking the "Set Active" button when the status is already "Active" triggers a state update, but React compares values, notices they are identical, and halts the sub-tree render.

### Best Practice
Ensure state modifications return new object references only when data changes. Do not return copy references if no values changed.

### Common Mistakes
Mutating an object property directly and calling setter: \`user.name = 'Rohit'; setUser(user)\`. Since the object reference did not change, React bails out, and the UI will not update.

### Code Example
\`\`\`tsx
import { useState } from 'react';

export function BailoutTracker() {
  const [active, setActive] = useState(true);
  console.log('Tracker rendering checked');

  const handleToggle = () => {
    // If we call setActive(true) when active is already true, React bails out
    setActive(true);
  };

  return <button onClick={handleToggle}>Keep Active ({active ? 'Yes' : 'No'})</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্ট \`Object.is\` দিয়ে আগের ও নতুন স্টেট তুলনা করে। স্টেট যদি একই থাকে তবে রিকনসিলার রেন্ডারিং স্কিপ করে চলে যায় যা প্রসেসিং ও ব্যাটারি লাইফ বাঁচায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বাটন যা অ্যাক্টিভ স্ট্যাটাস ধারণ করে। স্ট্যাটাস অলরেডি "Active" থাকা অবস্থায় আবার "Active" সেট করা হলে রিঅ্যাক্ট বেইলআউট করে চাইল্ড রেন্ডারিং বন্ধ করে দেয়।

### উত্তম অনুশীলন (Best Practice)
ডাটা সত্যিই পরিবর্তন হলেই কেবল নতুন অবজেক্ট রেফারেন্স রিটার্ন করুন। কোনো মান না বদলালে কপি অবজেক্ট পাঠানো বন্ধ রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্টেট অবজেক্ট সরাসরি এডিট করে সেটার কল করা যেমন- \`user.name = 'Rohit'; setUser(user)\`। অবজেক্ট রেফারেন্স সেম থাকায় রিঅ্যাক্ট বেইলআউট করবে এবং পেজ ভিজ্যুয়ালি আপডেট হবে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';

export function BailoutTracker() {
  const [active, setActive] = useState(true);
  console.log('ট্র্যাকার রেন্ডার চেক করা হচ্ছে');

  const handleToggle = () => {
    // active অলরেডি true থাকা অবস্থায় পুনরায় true সেট করলে রিঅ্যাক্ট বেইলআউট করবে
    setActive(true);
  };

  return <button onClick={handleToggle}>সক্রিয় রাখুন ({active ? 'হ্যাঁ' : 'না'})</button>;
}
\`\`\``
  },
  {
    id: 'react-53',
    title: 'Explain the basic architecture of Server-Side Rendering (SSR) in React.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'SSR', 'Hydration', 'Architecture'],
    enAnswer: 'Server-Side Rendering generates the static HTML representation of a React component tree on the server, sending it to the client where React hydrates and binds listeners to it.',
    bnAnswer: 'সার্ভার-সাইড রেন্ডারিং (SSR) সার্ভারে রিঅ্যাক্ট ট্রির একটি স্ট্যাটিক HTML ফাইল তৈরি করে ক্লায়েন্টে পাঠায় এবং পরবর্তীতে ব্রাউজারে রিঅ্যাক্ট কোড চালু হয়ে ইভেন্ট লিসনার বাইন্ড করে।',
    enExplanation: `### Explanation
In CSR (Client-Side Rendering), the browser receives an empty \`div\` and a giant JS bundle. In SSR, the server parses the React tree using APIs (like \`renderToString\`), producing complete HTML instantly. The browser displays the static content immediately, then loads client JS to activate components (Hydration).

### Real-World Example
An online news publication website. Search engines need to crawl article text instantly for SEO. SSR returns raw HTML containing the article, making it indexable.

### Best Practice
Ensure code runs safely in non-browser environment. Do not access browser global objects (like \`window\`, \`document\`, \`localStorage\`) during render.

### Common Mistakes
Relying on client-side global variables directly inside component render flows. This crashes the server node during initial pre-rendering.

### Code Example
\`\`\`tsx
// Conceptual SSR Server endpoint snippet
// import ReactDOMServer from 'react-dom/server';
// import { App } from './App';
// 
// app.get('/', (req, res) => {
//   // Convert React components to static HTML string
//   const html = ReactDOMServer.renderToString(<App />);
//   res.send(\`
//     <html>
//       <body>
//         <div id="root">\${html}</div>
//         <script src="/bundle.js"></script>
//       </body>
//     </html>
//   \`);
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সিএসআর (CSR) এ ব্রাউজার একটি খালি ফাইল ও বড় বান্ডেল পায়। এসএসআর (SSR) এ সার্ভারে রিঅ্যাক্ট ট্রি রিড করে এপিআই-এর সাহায্যে সরাসরি HTML জেনারেট করে ক্লায়েন্টে পাঠানো হয়। ব্রাউজার সাথে সাথে খবরটি রেন্ডার করে এবং ব্যাকগ্রাউন্ডে জেএস এসে একটিভেট করে যাকে হাইড্রেশন বলা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ব্লগ সাইট। গুগল সার্চ ইঞ্জিনে র্যাঙ্ক করার জন্য পেজে আর্টিকেল টেক্সট থাকা আবশ্যক। এসএসআর সার্চ ইঞ্জিনকে রেডিমেড টেক্সটসহ HTML দেয় যা ইন্ডেক্সিং সহজ করে।

### উত্তম অনুশীলন (Best Practice)
সার্ভারে ব্রাউজার ডম নোড থাকে না। তাই রেন্ডারের সময় \`window\`, \`document\` বা \`localStorage\` অ্যাক্সেস করা এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রেন্ডার ফাংশনের ভেতরে সরাসরি ব্রাউজার স্পেসিফিক কোড লিখে ফেলা, যা সার্ভার স্ক্রিপ্টকে ক্র্যাশ করিয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// এসএসআর সার্ভার নোডের কনসেপচুয়াল নমুনা
// import ReactDOMServer from 'react-dom/server';
// import { App } from './App';
// 
// app.get('/', (req, res) => {
//   // রিঅ্যাক্ট কম্পোনেন্টকে স্ট্যাটিক HTML স্ট্রিং-এ রূপান্তর
//   const html = ReactDOMServer.renderToString(<App />);
//   res.send(\`
//     <html>
//       <body>
//         <div id="root">\${html}</div>
//         <script src="/bundle.js"></script>
//       </body>
//     </html>
//   \`);
// });
\`\`\``
  },
  {
    id: 'react-54',
    title: 'Explain Hydration Mismatch Errors and how to resolve them.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Hydration', 'SSR', 'Debugging'],
    enAnswer: 'Hydration mismatches occur when the pre-rendered HTML from the server differs from the first render output of the React component tree in the browser.',
    bnAnswer: 'হাইড্রেশন মিসম্যাচ তখনই ঘটে যখন সার্ভার থেকে পাঠানো HTML ফাইলের সাথে ব্রাউজারের প্রথম রেন্ডার হওয়া রিঅ্যাক্ট কম্পোনেন্ট ট্রির মিল থাকে না।',
    enExplanation: `### Explanation
During hydration, React walks the existing server DOM and attaches event listeners. It expects the client virtual DOM tree structure to match exactly. If a mismatch occurs (e.g. server rendered "Guest" but client reads localStorage and renders "Rohit"), React throws a warning or breaks visual layout.

### Real-World Example
Using \`new Date()\` inside a component. The server pre-renders the time at server time (e.g., 10:00:00), but by the time the browser runs client JS, the time is 10:00:02, triggering a mismatch.

### Best Practice
Run browser-specific operations inside \`useEffect\` hooks, which execute only on the client side after hydration completes.

### Common Mistakes
Nesting invalid HTML tags (like putting a \`<div>\` inside a \`<p>\`), which causes browser parsers to rewrite the DOM automatically, breaking React reconciliation matches.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function SafeClientClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Safe: Runs only on client after mount, preventing mismatch
    setTime(new Date().toLocaleTimeString());
  }, []);

  if (!time) {
    return <div>Loading clock...</div>;
  }

  return <div>Time: {time}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
হাইড্রেশনের সময় রিঅ্যাক্ট সার্ভার ডম নোডগুলোর ওপর ইভেন্ট লিসনার ফিট করে। এটি ক্লায়েন্ট নোডের সাথে সার্ভার নোডের হুবহু মিল আশা করে। মিল না থাকলে (যেমন- সার্ভারে নাম ছিল "Guest" কিন্তু ক্লায়েন্টে লোকালস্টোরেজ পড়ে নাম দেখাল "Rohit"), রিঅ্যাক্ট হাইড্রেশন মিসম্যাচ ওয়ার্নিং দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
সরাসরি রেন্ডার পাথে \`new Date()\` ব্যবহার করা। সার্ভারে যখন এটি তৈরি হয় তখন হয়তো ঘড়িতে বাজে ১০:০০, কিন্তু ক্লায়েন্টে জেএস চলাকালীন বেজে যায় ১০:০১, যা অমিল সৃষ্টি করে।

### উত্তম অনুশীলন (Best Practice)
ক্লায়েন্ট স্পেসিফিক ক্যালকুলেশনগুলো \`useEffect\`-এর ভেতর রাখুন, কারণ এটি হাইড্রেশন শেষ হওয়ার পরই কেবল ডমে রান করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুল HTML স্ট্রাকচার লেখা (যেমন- \`<p>\` ট্যাগের ভেতরে \`<div>\` রাখা)। ব্রাউজার এটি ফিক্স করতে স্বয়ংক্রিয়ভাবে নোড বিন্যাস চেঞ্জ করে ফেলে যা রিঅ্যাক্ট রিকনসিলারকে ধন্দে ফেলে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function SafeClientClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // সঠিক: মাউন্ট হওয়ার পর ক্লায়েন্টে রান করবে, মিসম্যাচ এড়াবে
    setTime(new Date().toLocaleTimeString());
  }, []);

  if (!time) {
    return <div>লোড হচ্ছে...</div>;
  }

  return <div>সময়: {time}</div>;
}
\`\`\``
  },
  {
    id: 'react-55',
    title: 'Explain SSR Styles Injection and critical CSS extraction.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'SSR', 'CSS', 'Performance'],
    enAnswer: 'Styles injection gathers and extracts styling sheets during server renders, embedding them in the HTML response to prevent visual flickering before JS downloads.',
    bnAnswer: 'সার্ভার রেন্ডারিংয়ের সময় সিএসএস সংগ্রহ করে তা HTML রেসপন্সের হেডার ট্যাগে ঢুকিয়ে দেওয়া হয়, যাতে সিএসএস ফাইল ডাউনলোড হওয়ার আগে পেজে কোনো স্টাইলছাড়া ভাঙা কন্টেন্ট না দেখায়।',
    enExplanation: `### Explanation
In client-side styles setup, JS loads and injects \`<style>\` tags dynamically. In SSR, if the browser renders HTML before JS downloads, the page briefly appears without any styling (Flash of Unstyled Content - FOUC). Critical CSS extraction reads the components rendered, collects the styling rules, and inserts them directly inside the server HTML head.

### Real-World Example
An ecommerce checkout screen loading instantly with correct fonts, borders, and margins, instead of rendering raw HTML list points for 2 seconds while the bundle loads.

### Best Practice
Utilize modern web framework templates (like Next.js or Remix) which automate style collections and injection out of the box.

### Common Mistakes
Forgetting to collect styled sheets during server builds, resulting in unstyled visual flickering on initial loads.

### Code Example
\`\`\`typescript
// Conceptual CSS extraction flow
// import { ServerStyleSheet } from 'styled-components';
// 
// const sheet = new ServerStyleSheet();
// try {
//   // Collect style tags during React tree generation
//   const html = renderToString(sheet.collectStyles(<App />));
//   const styleTags = sheet.getStyleTags(); // Yields raw CSS string
//   const finalHtml = \`
//     <head>\${styleTags}</head>
//     <body><div id="root">\${html}</div></body>
//   \`);
// } catch (e) {
//   sheet.seal();
// }
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সিএসআর (CSR) এ জেএস ফাইল লোড হয়ে ডাইনামিকালি ডমে \`<style>\` ট্যাগ ইনজেক্ট করে। এসএসআর এ যদি জেএস ফাইল আসার আগেই HTML চলে আসে তবে স্টাইল ছাড়া ভাঙা লেআউট শো করবে (FOUC)। স্টাইল ইনজেকশন সার্ভারে ব্যবহৃত সিএসএস রুলসগুলো কালেক্ট করে সরাসরি HTML হেডারে পুশ করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ই-কমার্স কার্ট পেজ। জেএস ডাউনলোড হওয়ার আগেই যেন পেজের বর্ডার, বাটন কালার ও ফন্টগুলো সঠিক জায়গায় সঠিকভাবে লোড হয়।

### উত্তম অনুশীলন (Best Practice)
Next.js বা Remix এর মতো ফ্রেমওয়ার্ক ব্যবহার করুন যা স্টাইল ইনজেকশনের পুরো কাজটি অটোমেটিক করে দেয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
সার্ভার বিল্ড কনফিগারেশনে সিএসএস কালেক্টর যুক্ত না করা, যার ফলে ইনিশিয়াল লোডে পেজ কাঁপাকাঁপি ও ভাঙা রূপ দেখায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// সিএসএস এক্সট্র্যাকশনের নমুনা ফ্লো
// import { ServerStyleSheet } from 'styled-components';
// 
// const sheet = new ServerStyleSheet();
// try {
//   // রিঅ্যাক্ট ট্রি জেনারেশনের সময় স্টাইল সংগ্রহ করা হচ্ছে
//   const html = renderToString(sheet.collectStyles(<App />));
//   const styleTags = sheet.getStyleTags(); // সিএসএস টেক্সট দেবে
//   const finalHtml = \`
//     <head>\${styleTags}</head>
//     <body><div id="root">\${html}</div></body>
//   \`);
// } catch (e) {
//   sheet.seal();
// }
\`\`\``
  },
  {
    id: 'react-56',
    title: 'How do you integrate React Form Validation with schema-based libraries like Zod?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Validation', 'Zod', 'Schema'],
    enAnswer: 'You define a validation schema using Zod, parse the input state using the schema during onSubmit check, and write any parsing errors to local validation states.',
    bnAnswer: 'Zod লাইব্রেরি দিয়ে একটি রুলস বা স্কিমা ডিফাইন করতে হয়, ফর্ম সাবমিটের সময় ইনপুট স্টেটটিকে স্কিমা দিয়ে পাস করাতে হয় এবং এরর পেলে তা স্টেটে স্টোর করে দেখানো হয়।',
    enExplanation: `### Explanation
Manual input checks (like \`if (val.length < 5) ...\`) pollute forms with nested code. Schema libraries validate the entire object using a single check. Zod parses input objects, returning structured validation reports and preventing invalid data processing.

### Real-World Example
A signup form checking email syntax, minimum password length, and password match confirmations. Zod validates the fields together, reporting field-specific issues.

### Best Practice
Combine Zod with React Hook Form to handle input updates, rendering, and schema validation efficiently.

### Common Mistakes
Trying to run database updates when Zod validation fails, or ignoring parse error details returned in Zod's error object.

### Code Example
\`\`\`typescript
import { z } from 'zod';

// Define strict validation rules
export const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Validation function
export function validateForm(data: unknown) {
  const result = signupSchema.safeParse(data);
  if (!result.success) {
    // Format issues to map to input names
    return result.error.flatten().fieldErrors;
  }
  return null; // No errors
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ম্যানুয়াল ইনপুট চেক কোডকে নোংরা করে। স্কিমা লাইব্রেরি সম্পূর্ণ ইনপুট অবজেক্টকে এক ক্লিকে পরীক্ষা করে। Zod অবজেক্ট রিড করে একটি রিজেক্টেড এরর স্টাকচার দেয় যা ইউজারকে সঠিক ভুল পয়েন্ট আউট করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি সাইনআপ ফর্মের ইমেইল প্যাটার্ন, পাসওয়ার্ডের দৈর্ঘ্য এবং পাসওয়ার্ড ম্যাচিং ভ্যালিডেশন করা।

### উত্তম অনুশীলন (Best Practice)
Zod এর সাথে React Hook Form ব্যবহার করুন যা স্কিমা ভ্যালিডেশনের জটিল লুপগুলো একা একাই হ্যান্ডেল করতে পারে।

### সাধারণ ভুলসমূহ (Common Mistakes)
Zod এরর খাওয়া সত্ত্বেও সাবমিশন সচল রাখা বা Zod অবজেক্টের এরর মেসেজটি ইউজারের সামনে সুন্দরভাবে উপস্থাপন না করা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
import { z } from 'zod';

// কড়া ভ্যালিডেশন স্কিমা
export const signupSchema = z.object({
  email: z.string().email('ইমেইলটি সঠিক নয়'),
  password: z.string().min(8, 'পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে'),
});

// ভ্যালিডেশন মেথড
export function validateForm(data: unknown) {
  const result = signupSchema.safeParse(data);
  if (!result.success) {
    // এররগুলো ইনপুট ফিল্ড ও মেসেজ অনুযায়ী সাজানো হচ্ছে
    return result.error.flatten().fieldErrors;
  }
  return null; // কোনো ভুল নেই
}
\`\`\``
  },
  {
    id: 'react-57',
    title: 'How do you create a custom React hook to track window dimensions?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'CustomHooks', 'ResizeObserver'],
    enAnswer: 'You store window width and height inside local state, register a resize listener inside a useEffect block, and return cleanups to remove the listener.',
    bnAnswer: 'উইন্ডোর হাইট ও উইডথ লোকাল স্টেটে রাখতে হয়, useEffect-এর ভেতর একটি উইন্ডো রিসাইজ লিসনার যুক্ত করতে হয় এবং আনমাউন্টের সময় তা ক্লিয়ার করতে হয়।',
    enExplanation: `### Explanation
Tracking resizing is required for layout adjustments (like responsive layouts or canvas sizing). We trigger updates using a throttle or simple listener on \`window.addEventListener('resize')\`.

### Real-World Example
Adjusting the column count in a photo grid dynamically based on the current window pixel width.

### Best Practice
Debounce or throttle the resize listener if layout adjustments require intensive computation, preventing rendering lag during window drags.

### Common Mistakes
Forgetting to clean up the event listener, causing page lags when the window is resized after the component unmounts.

### Code Example
\`\`\`tsx
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    
    // Correct: Cleanup listener to prevent leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডাইনামিক গ্রিড বা ক্যানভাস ডিজাইনের জন্য স্ক্রিনের সাইজ ট্র্যাক করা জরুরি। \`window.addEventListener('resize')\` ইভেন্ট ব্যবহার করে এটি পরিমাপ করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ব্রাউজার উইন্ডো ছোট-বড় করার সাথে সাথে ইমেজ গ্যালারির কলাম সংখ্যা ডাইনামিকালি ৫ থেকে ৩ এ নামিয়ে আনা।

### উত্তম অনুশীলন (Best Practice)
রিসাইজ লিসন করার সময় ডিবেন্স বা থ্রোটল ব্যবহার করুন যাতে পেজ টানার সময় প্রতি পিক্সেল পরিবর্তনে ভারী ক্যালকুলেশন বারবার না চলে।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিসাইজ লিসনার ক্লিনআপ করতে ভুলে যাওয়া, যার ফলে মডিউল উধাও হয়ে গেলেও ব্যাকগ্রাউন্ডে ব্রাউজার লুপ সচল থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    
    // সঠিক: মেমোরি লিক এড়াতে লিসনার রিমুভ করা হচ্ছে
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
\`\`\``
  },
  {
    id: 'react-58',
    title: 'How do you test custom React Hooks using React Testing Library?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Testing', 'ReactTestingLibrary', 'CustomHooks'],
    enAnswer: 'You test custom hooks using the renderHook helper, which wraps the hook inside a test component context, letting you track and assert returned states.',
    bnAnswer: 'renderHook ইউটিলিটির সাহায্যে কাস্টম হুক টেস্ট করা হয়, যা হুকটিকে একটি টেম্পোরারি টেস্ট নোডের ভেতর রান করায় এবং তার রিটার্ন মানগুলো পরীক্ষা করার সুযোগ দেয়।',
    enExplanation: `### Explanation
React hooks cannot be called directly inside testing functions because they require a functional component context. The \`renderHook\` utility wraps the hook execution, returning a \`result\` object containing the hook's return values. Use \`act\` to wrap triggers that modify states.

### Real-World Example
Testing a custom counter hook. Invoking \`increment\` must update the counter state. We wrap the increment call inside \`act\` and assert the final count.

### Best Practice
Verify hook responses over multiple calls, and test cleanup functions by calling the \`unmount\` function returned by \`renderHook\`.

### Common Mistakes
Forgetting to wrap state-updating callback triggers inside the \`act(() => { ... })\` block, which causes testing errors.

### Code Example
\`\`\`tsx
// Hook: useCounter.ts
// import { useState } from 'react';
// export function useCounter() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(c => c + 1);
//   return { count, increment };
// }

// Test: useCounter.test.ts
// import { renderHook, act } from '@testing-library/react';
// import { useCounter } from './useCounter';
// test('should increment count', () => {
//   const { result } = renderHook(() => useCounter());
//   expect(result.current.count).toBe(0);
//   act(() => {
//     result.current.increment();
//   });
//   expect(result.current.count).toBe(1);
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
হুক সরাসরি টেস্ট জেএস ফাইলে কল করা যায় না কারণ এদের জন্য রিঅ্যাক্ট নোড এনভায়রনমেন্ট লাগে। \`renderHook\` এটি তৈরি করে এবং একটি \`result\` অবজেক্ট দেয় যার \`current\` প্রপার্টি থেকে হুকের মান পাওয়া যায়। স্টেট পরিবর্তনকারী কাজগুলোকে \`act\` দিয়ে মুড়তে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম কাউন্টার হুক টেস্ট করা। বাটন বা মেথড ক্লিক করলে কাউন্টের মান ০ থেকে ১ হচ্ছে কি না তা ভেরিফাই করা।

### উত্তম অনুশীলন (Best Practice)
হুকটি ডম থেকে রিমুভ হলে ক্লিনআপ কল হচ্ছে কি না তা চেক করতে \`renderHook\` থেকে রিটার্ন হওয়া \`unmount\` মেথডটি রান করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
স্টেট আপডেট ট্রিগার করার সময় কোডটি \`act(() => {})\` ব্লকের ভেতরে না রাখা, যা রিঅ্যাক্ট টেস্ট কম্পাইলারকে এরর দিতে বাধ্য করে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// Hook: useCounter.ts
// import { useState } from 'react';
// export function useCounter() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(c => c + 1);
//   return { count, increment };
// }

// Test: useCounter.test.ts
// import { renderHook, act } from '@testing-library/react';
// import { useCounter } from './useCounter';
// test('কাউন্টারের মান বৃদ্ধি পাওয়া উচিত', () => {
//   const { result } = renderHook(() => useCounter());
//   expect(result.current.count).toBe(0);
//   act(() => {
//     result.current.increment();
//   });
//   expect(result.current.count).toBe(1);
// });
\`\`\``
  },
  {
    id: 'react-59',
    title: 'How do you mock API fetch requests inside React unit tests?',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Testing', 'Mocking', 'Jest'],
    enAnswer: 'You mock API requests by assigning a fake resolve promise to jest.fn() or by utilizing libraries like Mock Service Worker (MSW) to intercept HTTP traffic.',
    bnAnswer: 'jest.fn() ব্যবহার করে গ্লোবাল ফেচ (fetch) মেথডটিকে রি-রাইট করে কাস্টম ফেক প্রমিজ রিসলভ করানো হয়, অথবা MSW লাইব্রেরি দিয়ে নেটওয়ার্ক ইন্টারসেপ্ট করা হয়।',
    enExplanation: `### Explanation
Unit tests should not execute real network requests. Real requests are slow, fragile, and require backend servers.
- **Jest Mocking**: Overwrites \`global.fetch\` with a mockup promise returning mock JSON.
- **MSW**: Recommended modern solution. Runs a service worker in testing, intercepting matching URLs and returning mock server data cleanly.

### Real-World Example
Testing a product page. We mock fetch calls to return a product list array, checking if the product names are successfully written to cards.

### Best Practice
Use MSW (Mock Service Worker) for API mocking. It allows writing tests that interact with network boundaries naturally without altering source codes.

### Common Mistakes
Forgetting to restore the mock setup after each test runs, which causes fake network configurations to leak into other test suites.

### Code Example
\`\`\`typescript
// Mocking global fetch using Jest in test file
// beforeEach(() => {
//   global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve([{ id: '1', name: 'Mock Laptop' }]),
//     })
//   );
// });
// 
// afterEach(() => {
//   jest.restoreAllMocks(); // Clean mock definitions
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ইউনিট টেস্টের সময় বাস্তব নেটওয়ার্ক এপিআই কল করা অনুচিত। এটি টেস্ট ধীর করে এবং ফেইল হওয়ার সম্ভাবনা বাড়ায়।
- **Jest Mocking**: এটি গ্লোবাল \`fetch\` মেথডকে সাময়িকভাবে ওভাররাইট করে কাস্টম ফেক JSON প্রমিজ পাঠায়।
- **MSW**: আধুনিক ও প্রফেশনাল উপায় যা নেটওয়ার্ক ট্রাফিক ইন্টারসেপ্ট করে ফেক কন্টেন্ট ইনজেক্ট করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ইউজার লিস্ট পেজ টেস্ট করা যেখানে ব্যাকএন্ড থেকে আসা ২ জন ইউজারের নাম স্ক্রিনে ঠিকঠাক কলামে বসছে কি না চেক করা।

### উত্তম অনুশীলন (Best Practice)
মকিংয়ের জন্য MSW ব্যবহার করুন। এটি রিয়েল এপিআই কলের মতো আচরণ বজায় রাখে অথচ টেস্টকে নেটওয়ার্ক ফ্রি রাখে।

### সাধারণ ভুলসমূহ (Common Mistakes)
টেস্ট শেষ হওয়ার পর মক ক্লিয়ার করতে ভুলে যাওয়া, যার ফলে অন্য কোনো টেস্টে ভুল ফেচ রেজাল্ট চলে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// টেস্ট ফাইলে Jest দিয়ে গ্লোবাল ফেচ মক করার নিয়ম
// beforeEach(() => {
//   global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve([{ id: '1', name: 'Mock Laptop' }]),
//     })
//   );
// });
// 
// afterEach(() => {
//   jest.restoreAllMocks(); // মক ক্লিয়ার করা হচ্ছে
// });
\`\`\``
  },
  {
    id: 'react-60',
    title: 'Explain E2E testing of React applications using Playwright.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Testing', 'Playwright', 'E2E'],
    enAnswer: 'E2E testing uses Playwright to launch a headless web browser, loading your built application and interacting with it exactly like a human user.',
    bnAnswer: 'E2E টেস্টিংয়ে Playwright একটি অদৃশ্য ব্রাউজার চালু করে, আপনার প্রজেক্টটি লোড করে এবং সম্পূর্ণ ইউজার ফ্লো (যেমন ক্লিক, লগইন) মানুষের মতো পরীক্ষা করে।',
    enExplanation: `### Explanation
End-to-End (E2E) testing tests the entire software system. Unlike unit tests that check components in isolation, Playwright runs the compiled frontend and calls the actual backend database. It verifies if pages reload, links navigate, and data saves correctly.

### Real-World Example
Testing a checkout workflow: opening the homepage, adding a product to the cart, typing payment details, clicking confirm, and asserting that a success invoice is generated.

### Best Practice
Run E2E tests inside CI/CD workflows before code is deployed to staging, and use Playwright's locator engines (like \`page.getByRole\`).

### Common Mistakes
Writing E2E tests that rely on static sleep timers (like \`page.waitForTimeout(3000)\`). Always use auto-waiting assertions (like \`toBeVisible()\`) to prevent slow test suites.

### Code Example
\`\`\`typescript
// Playwright test configuration example
// import { test, expect } from '@playwright/test';
// 
// test('should navigate and display dashboard stats', async ({ page }) => {
//   // Go to home url
//   await page.goto('http://localhost:5173/');
//   
//   // Check if stats card is visible
//   const statsCard = page.locator('#stats-container');
//   await expect(statsCard).toBeVisible();
//   
//   // Click on React topic link
//   await page.click('text=React');
//   await expect(page).toHaveURL(/.*react/);
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এন্ড-টু-এন্ড (E2E) টেস্টিং সম্পূর্ণ সিস্টেমকে একসাথে পরীক্ষা করে। ইউনিট টেস্টের মতো আলাদা নোড না দেখে, এটি আক্ষরিক অর্থেই ব্রাউজার ওপেন করে ক্লিক ও রিকোয়েস্ট চালায়। এটি চেক করে বাটনে ক্লিক করলে ডাটাবেজে ডাটা সেভ হচ্ছে কি না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কেনাকাটার কার্ড ফ্লো: সাইটে ঢোকা, কার্ট আইকন ক্লিক করা, পেমেন্ট ডিটেইল টাইপ করা এবং রসিদ বা ইনভয়েস বের হওয়া নিশ্চিত করা।

### উত্তম অনুশীলন (Best Practice)
কোড ডেপ্লয় করার আগে সিআই/সিডি (CI/CD) পাইপলাইনে প্লেরাইট টেস্ট রান করুন এবং লোকেটর হিসেবে এ্যাক্সেসিবল রুলস ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
টেস্ট ফাইলে হার্ডকোডেড স্লিপ টাইমার ব্যবহার করা যেমন \`page.waitForTimeout(3000)\`। এর বদলে অটো-ওয়েটিং অপশন ব্যবহার করুন।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// প্লেরাইট টেস্ট ফাইলের কনফিগারেশন এর নমুনা
// import { test, expect } from '@playwright/test';
// 
// test('ড্যাশবোর্ড স্ট্যাটস শো করছে কি না পরীক্ষা', async ({ page }) => {
//   // হোম পেজে যাওয়া হচ্ছে
//   await page.goto('http://localhost:5173/');
//   
//   // স্ট্যাটস কার্ড ডমে দৃশ্যমান কি না চেক
//   const statsCard = page.locator('#stats-container');
//   await expect(statsCard).toBeVisible();
//   
//   // React ক্যাটাগরি লিংকে ক্লিক এবং ইউআরএল চেক
//   await page.click('text=React');
//   await expect(page).toHaveURL(/.*react/);
// });
\`\`\``
  },
  {
    id: 'react-61',
    title: 'Explain Framer Motion layouts and animations in React.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'FramerMotion', 'Animations'],
    enAnswer: 'Framer Motion provides custom motion.* elements that accept animation parameters, automatically running layout animations when state changes occur.',
    bnAnswer: 'Framer Motion রিঅ্যাক্টের জন্য motion.* নোড সরবরাহ করে যা সিএসএস অ্যানিমেশন রুলস ছাড়াই স্টেট বদলালে ডাইনামিক ও মসৃণ অ্যানিমেশন ইফেক্ট তৈরি করতে পারে।',
    enExplanation: `### Explanation
Framer Motion is a production-ready library. It handles spring-physics animations.
- **motion.div**: Extends standard HTML elements with animation props.
- **layout prop**: Automatically animates sizing changes on surrounding elements without manual CSS transitions.

### Real-World Example
An accordion page list. When clicking to expand an item, the surrounding list elements slide down smoothly instead of jumping instantly.

### Best Practice
Use simple spring configs (like \`type: "spring", stiffness: 100\`) to create premium, responsive transitions that do not distract the user.

### Common Mistakes
Forgetting that motion elements require explicit styles or layout values to animate, or overcomplicating pages with heavy frame rate drops.

### Code Example
\`\`\`tsx
import { motion } from 'framer-motion';

export function AnimatedBox() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="p-6 bg-indigo-600 rounded-lg text-white"
    >
      Framer Motion Anim Box
    </motion.div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
Framer Motion রিঅ্যাক্ট অ্যাপে আকর্ষণীয় অ্যানিমেশন যোগ করার সেরা লাইব্রেরি। এটি স্প্রিং ফিজিক্স ব্যবহার করে ইন্টারঅ্যাকশন নিয়ন্ত্রণ করে।
- **motion.div**: সাধারণ ডম ট্যাগকে ডাইনামিক অ্যানিমেশন প্রপস হ্যান্ডেল করার ক্ষমতা দেয়।
- **layout**: নোডের আকার পরিবর্তনের সময় আশেপাশের সব নোডকে স্বয়ংক্রিয়ভাবে মসৃণভাবে সরিয়ে জায়গা করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি অ্যাকোর্ডিয়ন লিস্ট। একটি আইটেমের ওপর ক্লিক করলে বাকি আইটেমগুলো হুট করে নিচে না নেমে লাফিয়ে বা গ্লাইড করে নিচে নেমে জায়গা করে দেয়।

### উত্তম অনুশীলন (Best Practice)
ইউজারকে বিরক্ত না করে আকর্ষণীয় লুক দেওয়ার জন্য হালকা এবং স্ট্যান্ডার্ড স্প্রিং ভ্যালু ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মোশন উপাদানগুলোতে ইনিশিয়াল বা অ্যানিমেট প্রপস ভুল ফরম্যাটে দেওয়া, যার ফলে কোনো অ্যানিমেশন রান করে না।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { motion } from 'framer-motion';

export function AnimatedBox() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="p-6 bg-indigo-600 rounded-lg text-white"
    >
      মোশন অ্যানিমেশন বক্স
    </motion.div>
  );
}
\`\`\``
  },
  {
    id: 'react-62',
    title: 'Explain AnimatePresence in Framer Motion for unmounting animations.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'FramerMotion', 'AnimatePresence'],
    enAnswer: 'AnimatePresence allows components to animate before they are unmounted (removed) from the React virtual tree, using the exit prop.',
    bnAnswer: 'AnimatePresence কোনো কম্পোনেন্টকে ডম বা রিঅ্যাক্ট ট্রি থেকে রিমুভ (unmount) করার ঠিক পূর্বে exit প্রপের মাধ্যমে বিদায়ী অ্যানিমেশন চালানোর সুবিধা দেয়।',
    enExplanation: `### Explanation
In plain React, if a state changes to hide a modal, it disappears instantly from the DOM. Framer Motion cannot animate its exit because the node is already gone. Wrapping the conditional elements inside \`<AnimatePresence>\` pauses unmounting until the exit animation finishes.

### Real-World Example
An alert notification banner that appears at the top. When clicked, it fades out and slides upward before disappearing from the screen.

### Best Practice
Each direct child inside \`<AnimatePresence>\` must have a unique, stable \`key\` prop so Framer Motion can track which component is leaving.

### Common Mistakes
Placing the \`<AnimatePresence>\` wrapper inside the conditional block rather than wrapping the conditional check. It must sit *outside* the condition to work.

### Code Example
\`\`\`tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function NotificationAlert() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(false)}>Hide Alert</button>
      
      {/* Correct: AnimatePresence wraps the conditional check */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="alert-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-yellow-100 text-yellow-800 rounded"
          >
            Critical Alert Banner!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
রিঅ্যাক্টে স্টেট মিথ্যা হলে ডম থেকে নোডটি সাথে সাথে ভ্যানিশ হয়ে যায়। ফলে ফ্রেমার মোশন এর চলে যাওয়ার অ্যানিমেশন রান করাতে পারে না। \`<AnimatePresence>\` কন্ডিশনাল চেকের প্যারেন্ট হিসেবে থাকলে, এটি চলে যাওয়ার নোডটি ডম থেকে মুছে ফেলার আগে অ্যানিমেশন শেষ হওয়া পর্যন্ত ডম লক করে রাখে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
স্ক্রিনের ওপরে ভেসে ওঠা একটি নোটিফিকেশন অ্যালার্ট। বাটনে ক্লিক করলে তা বাতাসে মিলিয়ে যাওয়ার মতো ধীরে ধীরে আবছা হয়ে ওপরে উঠে উধাও হয়।

### উত্তম অনুশীলন (Best Practice)
\`<AnimatePresence>\` এর ভেতরের প্রতিটি নোডের জন্য অবশ্যই ইউনিক \`key\` প্রপ দিন, তা না হলে মোশন লাইব্রেরি বিদায় নোডটি চিহ্নিত করতে পারবে না।

### সাধারণ ভুলসমূহ (Common Mistakes)
কন্ডিশনাল ব্লকের ভেতরে \`<AnimatePresence>\` রাখা। এটি অবশ্যই কন্ডিশনের বাইরে (প্যারেন্ট হিসেবে) থাকতে হবে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function NotificationAlert() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(false)}>অ্যালার্ট লুকান</button>
      
      {/* সঠিক: কন্ডিশনাল চেকের বাইরে AnimatePresence রাখা হয়েছে */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="alert-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-yellow-100 text-yellow-800 rounded"
          >
            জরুরি নোটিফিকেশন ব্যানার!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-63',
    title: 'Explain SVG animations in React using Framer Motion.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'SVG', 'Animations', 'FramerMotion'],
    enAnswer: 'SVG animations in React are handled by wrapping SVG paths inside motion.path elements, allowing control over stroke dash arrays and draw paths dynamically.',
    bnAnswer: 'SVG অ্যানিমেশন রিঅ্যাক্টে motion.path ট্যাগের সাহায্যে সম্পন্ন করা হয়, যা ছবির আউটলাইন স্ট্রোক ডাইনামিকালি আঁকার মতো ইফেক্ট তৈরি করতে পারে।',
    enExplanation: `### Explanation
SVG elements are represented as DOM XML nodes. Framer Motion supports SVG tags. You can animate properties like \`pathLength\` (drawing a signature or border line on load), \`fill\`, and \`strokeWidth\` by declaring them as motion variables.

### Real-World Example
An animated checkmark icon. When a transaction succeeds, the check circle draws its green outline in a circular motion, and then the checkmark line is drawn inside it.

### Best Practice
Verify SVG viewBox ratios so elements scale properly on high-resolution screens during animation paths.

### Common Mistakes
Applying motion props directly to standard \`<path>\` tags without changing them to \`<motion.path>\` tags, which generates console warnings.

### Code Example
\`\`\`tsx
import { motion } from 'framer-motion';

export function DrawingCheckmark() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-green-500 fill-none stroke-[5]">
      {/* Animates path drawing from 0 to 1 */}
      <motion.path 
        d="M 20,50 L 40,70 L 80,30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </svg>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
SVG নোডগুলো ডমের অংশ। ফ্রেমার মোশন এই নোডগুলোর গতিবিধি কন্ট্রোল করতে পারে। আমরা \`pathLength\` প্রপ জিরো থেকে ওয়ান করে খুব সুন্দরভাবে একটি লোগো বা ছবির আউটলাইন ড্রয়িং অ্যানিমেশন তৈরি করতে পারি।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি গোল চেক চিহ্ন। টাকা পেমেন্ট করার পর স্ক্রিনে প্রথমে বৃত্তটি আঁকা হয় এবং তারপর ভেতর টিক চিহ্নটি ডাইনামিকালি এঁকে সফল বার্তা দেওয়া হয়।

### উত্তম অনুশীলন (Best Practice)
অ্যানিমেশন ঠিক রাখতে এবং রেসপনসিভ করতে SVG ফাইলের viewBox সঠিক অনুপাতে বজায় রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ \`<path>\` ট্যাগের প্রপে অ্যানিমেশন কোড রাখা যেখানে \`<motion.path>\` ট্যাগটি ব্যবহার করা হয়নি।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { motion } from 'framer-motion';

export function DrawingCheckmark() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-green-500 fill-none stroke-[5]">
      {/* pathLength০ থেকে ১ এ এনে ড্রয়িং অ্যানিমেশন করা হচ্ছে */}
      <motion.path 
        d="M 20,50 L 40,70 L 80,30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </svg>
  );
}
\`\`\``
  },
  {
    id: 'react-64',
    title: 'Explain React Hook Form Integration and performance differences with standard controlled forms.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactHookForm', 'Forms', 'Performance'],
    enAnswer: 'React Hook Form uses uncontrolled inputs under the hood to bypass re-renders, subscribing only to target validation states, which scales much better than standard controlled inputs.',
    bnAnswer: 'React Hook Form ডমের পেছনে আনকন্ট্রোলড ইনপুট ও রিফ ব্যবহার করে, ফলে প্রতি ক্লিকে টোটাল পেজ রি-রেন্ডার হয় না যা সাধারণ কন্ট্রোলড ফর্মের চেয়ে অনেক দ্রুত কাজ করে।',
    enExplanation: `### Explanation
- **Controlled Forms**: State updates on every keypress. If a form has 50 fields, typing a single character renders all 50 fields and their parent page, causing keyboard input lag.
- **React Hook Form**: Inputs are uncontrolled. State updates are bypassed. Inputs only trigger rendering on field focus, validation failures, or submit triggers.

### Real-World Example
A complex user profile wizard with 4 tabs and 40 input fields. Standard state management will lag during fast typing. React Hook Form runs with zero input lag.

### Best Practice
Pair React Hook Form with Zod schemas to handle form data validation, error displaying, and type checks cleanly.

### Common Mistakes
Registering components inside React Hook Form but manually overriding the state binding by adding a duplicate \`value\` and \`onChange\` prop, defeating the uncontrolled performance.

### Code Example
\`\`\`tsx
import { useForm } from 'react-hook-form';

interface ProfileData { fullName: string }

export function HookFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileData>();

  const onSubmit = (data: ProfileData) => {
    console.log('Valid Form Data submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Register binds node inputs to library refs automatically */}
      <input {...register('fullName', { required: 'Name is required' })} />
      {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
      <button type="submit">Submit Form</button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Controlled Forms**: প্রতি টাইপিংয়ে রেন্ডার হয়। ফর্মে ৫০টি ইনপুট থাকলে প্রতি ক্লিকে ৫০টি নোডই রি-রেন্ডার হবে, যা টাইপিং স্পিড কমিয়ে ল্যাগ তৈরি করে।
- **React Hook Form**: ইনপুটগুলো আনকন্ট্রোলড থাকায় অহেতুক রেন্ডারিং ডিলিট হয়। শুধু ভ্যালিডেশন এরর বা সাবমিটের সময় নোড রি-রেন্ডার হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় তথ্য ফরম যাতে ৪টি আলাদা ট্যাব এবং ৪০টি ইনপুট বক্স আছে। সাধারণ স্টেট দিয়ে এটি বানালে টাইপ করার সময় ল্যাগ দেখা দেবে। React Hook Form এটি জিরো ল্যাগে রান করবে।

### উত্তম অনুশীলন (Best Practice)
টাইপ সেফটি এবং ক্লিন ভ্যালিডেশনের জন্য React Hook Form এর সাথে Zod স্কিমা যুক্ত করে রান করান।

### সাধারণ ভুলসমূহ (Common Mistakes)
React Hook Form এ রেজিস্টার করার পরেও ইনপুট ফিল্ডে ম্যানুয়ালি স্টেট বাইন্ডিং করার জন্য \`value\` ও \`onChange\` প্রপস জোড়া দেওয়া, যা লাইব্রেরির গতি কমিয়ে সাধারণ ফর্মের সমান করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useForm } from 'react-hook-form';

interface ProfileData { fullName: string }

export function HookFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileData>();

  const onSubmit = (data: ProfileData) => {
    console.log('সঠিক ডাটা জমা দেওয়া হয়েছে:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* register মেথড ইনপুটকে লাইব্রেরি রিফ দিয়ে কন্ট্রোল করে */}
      <input {...register('fullName', { required: 'নাম পূরণ করা আবশ্যক' })} />
      {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
      <button type="submit">জমা দিন</button>
    </form>
  );
}
\`\`\``
  },
  {
    id: 'react-65',
    title: 'Explain Asset and Route Pre-fetching in React.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Prefetching', 'Performance', 'UX'],
    enAnswer: 'Pre-fetching loads asset bundles (like secondary page scripts or images) in the background before the user actually clicks navigation links, eliminating loading pauses.',
    bnAnswer: 'প্রি-ফেচিং (Pre-fetching) ব্যবহারকারী লিংকে ক্লিক করার আগেই ব্যাকগ্রাউন্ডে পরবর্তী পেজের ফাইল বা ইমেজ ডাউনলোড করে রাখে, ফলে ক্লিক করার সাথে সাথে পেজটি ভেসে ওঠে।',
    enExplanation: `### Explanation
Lazy-loaded bundles require time to download when clicked. Pre-fetching runs dynamic imports when the user hovers over navigation links or when browser idle callbacks fire, caching script bundles so route transitions feel instantaneous.

### Real-World Example
When a user hovers their mouse over the "Billing Options" nav item, the browser detects intent and starts fetching the billing module JS file in the background, readying the view.

### Best Practice
Utilize link prefetching tags (\`<link rel="prefetch" />\`) or framework routing options (like Link from Next.js or React Router) which prefetch on viewport visibility.

### Common Mistakes
Prefetching too many files on load, wasting browser bandwidth on slow mobile connections for pages the user may never visit.

### Code Example
\`\`\`tsx
import { useState } from 'react';

export function NavLink() {
  const [module, setModule] = useState<any>(null);

  const prefetchModule = () => {
    // Start downloading the heavy bundle on hover
    import('./HeavyStatsModule').then((loaded) => {
      setModule(loaded);
    });
  };

  return (
    <a 
      href="/stats" 
      onMouseEnter={prefetchModule}
      className="text-indigo-600 hover:underline"
    >
      View Statistics
    </a>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
লেজি-লোডেড ফাইলগুলো ক্লিক করার পর ডাউনলোড হতে সামান্য টাইম নেয়। প্রি-ফেচিং ইউজারের মাউস হোভার করা বা উইন্ডো খালি থাকার সময় ব্যাকগ্রাউন্ডে ফাইল ডাউনলোড করে রাখে যাতে পরবর্তী রাউটে কোনো বাফারিং না দেখা যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
নেভিগেশন বারের "Billing" বাটনে মাউস পয়েন্টার নেওয়ার সাথে সাথেই ব্যাকগ্রাউন্ডে ওই পেজের স্ক্রিপ্ট ফাইল ডাউনলোড হতে শুরু করা।

### উত্তম অনুশীলন (Best Practice)
Next.js বা আধুনিক রিঅ্যাক্ট রাউটারের প্রি-ফেচ লিঙ্ক প্রপস ব্যবহার করুন যা অটোমেটিক্যালি স্ক্রিনে লিংকের উপস্থিতি দেখে ব্যাকগ্রাউন্ড ফেচ চালায়।

### সাধারণ ভুলসমূহ (Common Mistakes)
একসাথে গাদা গাদা ফাইল প্রি-ফেচ করা, যা মোবাইলের ব্যান্ডউইডথ শেষ করে এবং প্রজেক্টের গতি ধীর করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { useState } from 'react';

export function NavLink() {
  const [module, setModule] = useState<any>(null);

  const prefetchModule = () => {
    // মাউস হোভার করার সাথে সাথেই ব্যাকগ্রাউন্ড ডাউনলোড শুরু হবে
    import('./HeavyStatsModule').then((loaded) => {
      setModule(loaded);
    });
  };

  return (
    <a 
      href="/stats" 
      onMouseEnter={prefetchModule}
      className="text-indigo-600 hover:underline"
    >
      স্ট্যাটিসটিক্স দেখুন
    </a>
  );
}
\`\`\``
  },
  {
    id: 'react-66',
    title: 'Explain the concept of Windowing/Virtualization for handling large lists.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Virtualization', 'Windowing', 'Performance'],
    enAnswer: 'Windowing renders only the list items that are currently visible within the viewport window, dynamically replacing out-of-view items with spacer blocks.',
    bnAnswer: 'উইন্ডোয়িং বা ভার্চুয়ালাইজেশন কেবল স্ক্রিনে দৃশ্যমান লিস্ট আইটেমগুলোকে রেন্ডার করে এবং স্ক্রিনের বাইরের নোডগুলোকে ডম থেকে মুছে খালি স্পেসার দিয়ে প্রতিস্থাপন করে।',
    enExplanation: `### Explanation
If you render 20,000 DOM elements inside a list, the browser crashes due to memory limits.
- **Windowing**: Only renders the 10 rows visible on screen, plus a small buffer.
- **Spacer**: Spacer divs at the top and bottom replicate scrollbar heights, creating the illusion of a massive list while keeping DOM size extremely small.

### Real-World Example
An infinity scroll list in a social media application. Scrollbars show thousands of items, but the actual active DOM node count never exceeds 20 items.

### Best Practice
Default to Virtualization for lists exceeding 1000 items. Ensure list rows have fixed heights where possible to simplify layout calculations.

### Common Mistakes
Writing standard maps inside lists with thousands of entries, causing browsers to freeze during sorting or filtering actions.

### Code Example
\`\`\`tsx
// Conceptual Virtualization element builder
export function VirtualRow({ index, style, data }: { index: number; style: React.CSSProperties; data: string[] }) {
  // Styles handle absolute top/height placement inside viewport container
  return (
    <div style={style} className="absolute w-full border-b p-2">
      Row ID: {index} - Value: {data[index]}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
লিস্টে ২০,০০০ নোড সরাসরি রেন্ডার করালে ব্রাউজার মেমোরির অভাবে ক্র্যাশ করে।
- **উইন্ডোয়িং**: এটি স্ক্রিনে দৃশ্যমান ১০-১৫টি রো এবং সামান্য বাফার রেন্ডার করে।
- **স্পেসার**: স্ক্রলবারের পজিশন ঠিক রাখতে উপরে-নিচে অদৃশ্য স্পেসার দিয়ে ডম সাইজ চরম নিয়ন্ত্রণে রাখা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
টুইটার বা ফেসবুকের ফিড স্ক্রল। স্ক্রলবার দেখে মনে হবে হাজার হাজার পোস্ট আছে, কিন্তু ডমে নোডের সংখ্যা ২০টির বেশি থাকে না।

### উত্তম অনুশীলন (Best Practice)
১০০০ এর বেশি আইটেমের তালিকার জন্য ভার্চুয়ালাইজেশন করুন। রো-এর হাইট ফিক্সড রাখলে লেআউট জেনারেশন খুব ফাস্ট হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
হাজার হাজার উপাদানের ক্ষেত্রে সাধারণ \`map\` ব্যবহার করা, যা সর্টিং বা ফিল্টারিং করার সময় ব্রাউজার সম্পূর্ণ হ্যাং করে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// ভার্চুয়ালাইজড রো রেন্ডারিংয়ের কনসেপচুয়াল লেআউট
export function VirtualRow({ index, style, data }: { index: number; style: React.CSSProperties; data: string[] }) {
  // style প্রপটি ডাইনামিকালি পজিশন ও হাইট ইনজেক্ট করে
  return (
    <div style={style} className="absolute w-full border-b p-2">
      সারি নং: {index} - মান: {data[index]}
    </div>
  );
}
\`\`\``
  },
  {
    id: 'react-67',
    title: 'Explain React Window implementation for list rendering.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactWindow', 'Performance'],
    enAnswer: 'React Window is a lightweight virtualization library that implements windowing, only rendering rows in viewport to optimize large data sets rendering speed.',
    bnAnswer: 'React Window হলো একটি জনপ্রিয় লাইটওয়েট ভার্চুয়ালাইজেশন লাইব্রেরি, যা স্ক্রিনের বাইরের নোডগুলো বাদ দিয়ে ডম মেমোরি খালি রাখে এবং গতির উন্নয়ন ঘটায়।',
    enExplanation: `### Explanation
\`react-window\` replaces massive, heavy list elements. It provides components like \`FixedSizeList\` which calculate pixel offsets dynamically and absolute position items inside scroll wrappers.

### Real-World Example
Rendering a search dashboard showing 5,000 transaction log rows. React Window keeps scroll actions running at 60 FPS.

### Best Practice
Use \`react-window\` for simple lists. Combine it with \`react-virtualized-auto-sizer\` to handle responsive container resizing.

### Common Mistakes
Forgetting to pass the \`style\` prop received in the row component down to the outer child container div. Without this style, items stack on top of each other.

### Code Example
\`\`\`tsx
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 1000 }, (_, i) => \`Item \${i}\`);

// Row Component must accept and bind the style prop
const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  <div style={style} className="flex items-center p-2 border-b">
    {items[index]}
  </div>
);

export function App() {
  return (
    <List
      height={300}
      itemCount={items.length}
      itemSize={35} // Pixel height of each row
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`react-window\` বড় ও ভারী তালিকার রেন্ডারিং স্পিড ঠিক রাখে। এটি \`FixedSizeList\` এর মতো কম্পোনেন্ট দেয় যা ডাইনামিক পিক্সেল অফসেট হিসাব করে স্ক্রল র্যাপারের ভেতরে রো-গুলোকে পজিশন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
৫,০০০ ট্রানজেকশন লগ সম্বলিত ড্যাশবোর্ড টেবিল। React Window এটি ৬০ এফপিএস (FPS) গতিতে স্ক্রল করার সুবিধা দেয়।

### উত্তম অনুশীলন (Best Practice)
সাধারণ তালিকার জন্য \`react-window\` ব্যবহার করুন। রেসপনসিভ কন্টেইনারের জন্য এর সাথে \`react-virtualized-auto-sizer\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রো কম্পোনেন্টে রিসিভ করা \`style\` প্রপসটি মূল চাইল্ড ডিভে বাইন্ড করতে ভুলে যাওয়া, যার ফলে সবগুলো আইটেম স্ক্রিনের এক কোণায় একটার ওপর আরেকটি চেপে বসে থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 1000 }, (_, i) => \`আইটেম \${i}\`);

// রো কম্পোনেন্টে অবশ্যই style প্রপ বাইন্ড করতে হবে
const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  <div style={style} className="flex items-center p-2 border-b">
    {items[index]}
  </div>
);

export function App() {
  return (
    <List
      height={300}
      itemCount={items.length}
      itemSize={35} // প্রতিটি সারির পিক্সেল উচ্চতা
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\``
  },
  {
    id: 'react-68',
    title: 'Explain React Virtualized configuration setups and dynamic row heights.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'ReactVirtualized', 'Virtualization'],
    enAnswer: 'React Virtualized is an enterprise-grade virtualization package that supports dynamic height calculations, multi-column tables, grids, and auto-sizing wrappers.',
    bnAnswer: 'React Virtualized হলো একটি এন্টারপ্রাইজ লেভেল ভার্চুয়ালাইজেশন প্যাকেজ, যা ডাইনামিক রো হাইট হিসাব করা, গ্রিড টেবিল এবং রেসপনসিভ অটো-সাইজিং সাপোর্ট করে।',
    enExplanation: `### Explanation
While \`react-window\` is light and supports fixed-height lists, \`react-virtualized\` is full-featured. To support items containing dynamic texts (where row height varies), it uses \`CellMeasurer\` and \`CellMeasurerCache\` to calculate height dynamically on mount.

### Real-World Example
An online chat box where user comments can be 1 line or 10 lines long. React Virtualized measures each message row and updates scroll height.

### Best Practice
Use react-window where possible due to smaller bundle sizes. Choose react-virtualized only if you need complex features like dynamic heights, multi-grids, or scroll indexes.

### Common Mistakes
Not passing the dynamic cache instance to both \`CellMeasurer\` and \`List\` components, preventing height data sharing.

### Code Example
\`\`\`tsx
// Conceptual CellMeasurer setup inside React Virtualized list
// <List
//   deferredMeasurementCache={cache}
//   rowHeight={cache.rowHeight}
//   rowRenderer={({ index, key, parent, style }) => (
//     <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
//       <div style={style}>Dynamic content here...</div>
//     </CellMeasurer>
//   )}
// />
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`react-window\` ফিক্সড হাইটের জন্য সেরা আর \`react-virtualized\` হলো জটিল ফিচারের জন্য। ডাইনামিক টেক্সটের ক্ষেত্রে (যেখানে রোর হাইট কম-বেশি হয়) এটি \`CellMeasurer\` এবং \`CellMeasurerCache\` ব্যবহার করে ডাইনামিক উচ্চতা মেপে নেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি চ্যাট উইন্ডো যেখানে ইউজারের মেসেজ ১ লাইনের হতে পারে আবার ১০ লাইনেরও হতে পারে। এটি প্রতিটি রো মেপে স্ক্রল হাইট অ্যাডজাস্ট করে।

### উত্তম অনুশীলন (Best Practice)
বান্ডেল সাইজ কমাতে ফিক্সড হাইটের জন্য \`react-window\` পছন্দ করুন। কেবল তখনই এটি ব্যবহার করুন যখন ডাইনামিক রো এবং জটিল গ্রিড টেবিল দরকার।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডাইনামিক ক্যাশ অবজেক্টটি \`CellMeasurer\` এবং \`List\` উভয়ের সাথে লিংক না করানো, যা ডাইনামিক হাইট ক্যালকুলেশন ফেইল করায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// CellMeasurer কনফিগারেশন এর নমুনা ফ্লো
// <List
//   deferredMeasurementCache={cache}
//   rowHeight={cache.rowHeight}
//   rowRenderer={({ index, key, parent, style }) => (
//     <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
//       <div style={style}>এখানে ডাইনামিক টেক্সট থাকবে...</div>
//     </CellMeasurer>
//   )}
// />
\`\`\``
  },
  {
    id: 'react-69',
    title: 'Explain Hot Module Replacement (HMR) inner workings in React tooling.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'HMR', 'BuildTool', 'Vite'],
    enAnswer: 'HMR is a build tool feature that injects updated JavaScript modules in the browser on code save, preserving local component states without full page refreshes.',
    bnAnswer: 'HMR হলো ডেভলপমেন্ট টুলের একটি বৈশিষ্ট্য যা কোড পরিবর্তন করার সাথে সাথে ব্রাউজারের পুরো পেজ রিলোড না করে শুধুমাত্র পরিবর্তিত মডিউলটি আপডেট করে নোডের লোকাল স্টেট বজায় রাখে।',
    enExplanation: `### Explanation
In legacy environments, saving a file triggers a full page refresh, which clears console logs and resets form entries. HMR uses WebSockets. The dev server tracks file alterations, compiles only the modified file, and sends the update patch. The client browser swaps modules dynamically.

### Real-World Example
Editing the color of a checkout button in code editor. The button turns green instantly in browser without resetting the typed name or card digits inside the billing form.

### Best Practice
Write code that has clean side effects and clear useEffect cleanups, preventing HMR updates from stacking duplicated events or timers.

### Common Mistakes
Exporting anonymous elements or non-component utilities alongside React component wrappers in the same file, which breaks HMR analysis and forces full page reload.

### Code Example
\`\`\`tsx
// Correct component export pattern for HMR tracking
export function HeaderLogo() {
  return <div className="text-xl font-bold">DevPrep.io</div>;
}

// Avoid: export default () => { ... } (Anonymous exports break HMR scope)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
আগে কোড সেভ করলেই পুরো পেজ রিলোড হতো, ফলে টেস্ট ফর্মের ভেতরের সব লেখা মুছে যেত। HMR ওয়েব সকেটের মাধ্যমে ফাইল বদলানোর খবর পাঠায় এবং ক্লায়েন্টে শুধু ওই পরিবর্তিত নোডের জেএস ফাইলটি সোয়াপ (swap) করে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় ফর্মের ইনপুট ফিল্ড টাইপ করার সময় বাটনের কালার চেঞ্জ করা। বাটনের রং সাথে সাথে আপডেট হবে কিন্তু ফর্মে টাইপ করা টেক্সট অক্ষত থাকবে।

### উত্তম অনুশীলন (Best Practice)
ইফেক্ট নোডে সঠিক ক্লিনআপ রাখুন যাতে কোড চেঞ্জ হওয়ার সাথে সাথে ডুপ্লিকেট ইন্টারভাল টাইমার জমা না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
একই ফাইলে রিঅ্যাক্ট কম্পোনেন্টের পাশাপাশি নামহীন বেনামী এলিমেন্ট (\`export default () => {}\`) এক্সপোর্ট করা। এটি HMR অ্যালগরিদমকে বিভ্রান্ত করে পুরো পেজ রিলোড করায়।

### কোড উদাহরণ (Code Example)
\`\`\`tsx
// HMR ট্র্যাক করার সুবিধার্থে নেমড এক্সপোর্ট ব্যবহারের সঠিক নিয়ম
export function HeaderLogo() {
  return <div className="text-xl font-bold">DevPrep.io</div>;
}

// পরিহার করুন: export default () => {} (বেনামী এক্সপোর্ট HMR ব্রেক করে)
\`\`\``
  },
  {
    id: 'react-70',
    title: 'Explain critical production build optimization configurations inside React projects.',
    difficulty: 'intermediate',
    category: 'react',
    tags: ['React', 'Optimizations', 'Webpack', 'Vite'],
    enAnswer: 'Production optimizations involve code minification, tree shaking, asset compressions, and chunk split settings to maximize load speeds.',
    bnAnswer: 'প্রোডাকশন অপ্টিমাইজেশনে কোড মিনিফাই করা, ট্রি-শেকিং (tree shaking) এর মাধ্যমে অব্যবহৃত কোড বাদ দেওয়া, কোড স্প্লিটিং এবং অ্যাসেট কম্প্রেশন ব্যবহার করা হয়।',
    enExplanation: `### Explanation
Production builds prepare code for the real world:
- **Minification**: Strips whitespace, comments, and shortens variable names.
- **Tree Shaking**: Scans imports and drops unused exports from dependencies.
- **Chunk Splitting**: Splits heavy library files (like React, Framer Motion) into separate cacheable bundles.

### Real-World Example
Using tree shaking to drop unused icons from a giant icon package, reducing package bundle weight from 1.2MB down to 10KB.

### Best Practice
Configure custom Rollup output chunk splitting inside \`vite.config.ts\` to split node_modules from user components.

### Common Mistakes
Leaving debug codes like \`console.log\` or dev source maps enabled inside production config files, increasing weight.

### Code Example
\`\`\`typescript
// Vite config code split sample
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom', 'react-router-dom'],
//         },
//       },
//     },
//   },
// });
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
প্রোডাকশন অপ্টিমাইজেশন কোডবেসকে লাইভ সার্ভারের জন্য অপ্টিমাইজ করে:
- **মিনিফিকেশন**: কোড থেকে অতিরিক্ত স্পেস ও কমেন্ট মুছে দিয়ে ভ্যারিয়েবল ছোট করে।
- **ট্রি শেকিং**: অব্যবহৃত ইম্পোর্টগুলো বান্ডেল থেকে ঝেড়ে ফেলে দেয়।
- **চাঙ্ক স্প্লিটিং**: ফ্রেমওয়ার্ক ফাইলগুলোকে আলাদা বান্ডেলে রাখে যাতে ব্রাউজার দ্রুত ক্যাশ করতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় আইকন প্যাক থেকে কেবল ৩টি আইকন ব্যবহার করা হলে ট্রি-শেকিং বাকি হাজারটি আইকন বাদ দিয়ে বান্ডেল সাইজ ১.২ এমবি থেকে ১০ কেবিতে নামায়।

### উত্তম অনুশীলন (Best Practice)
Vite কনফিগারেশনে Rollup চাঙ্ক স্প্লিটিং অ্যাক্টিভ রাখুন যাতে ইউজার ও ভেন্ডর ফাইলগুলো আলাদা ফাইল তৈরি করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
বিল্ড ফাইলে ভুলবশত ডেভলপমেন্ট সোর্স ম্যাপ বা ডিবাগিং লগার সচল রাখা, যা প্রোডাকশন কোডের সাইজ ফালতু বাড়িয়ে দেয়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ভাইট কনফিগারেশনে কোড স্প্লিটিং চাঙ্ক সেটআপের নমুনা
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom', 'react-router-dom'],
//         },
//       },
//     },
//   },
// });
\`\`\``
  }
];
