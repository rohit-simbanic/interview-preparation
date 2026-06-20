import type { Question } from '../../types';

export const basicQuestions: Question[] = [
  {
    id: "state-query-1",
    title: "What is Zustand, and how does it differ from React Context API and Redux?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","React Context","Redux","Architecture"],
    enAnswer: "Zustand is a lightweight, hook-based state management library. Unlike Redux, it has minimal boilerplate, does not require wrap-providers, and does not require complex action/reducer configurations. Unlike React Context, Zustand does not trigger global re-renders on consumers when unrelated parts of the state change.",
    bnAnswer: "Zustand হলো একটি লাইটওয়েট ও হুক-ভিত্তিক স্টেট ম্যানেজমেন্ট লাইব্রেরি। রিডাক্সের মতো এতে প্রচুর বয়লারপ্লেট কোড লিখতে হয় না, কোনো প্রোভাইডার দিয়ে অ্যাপ মুড়ে দেওয়ার প্রয়োজন পড়ে না। রিঅ্যাক্ট কন্টেক্সটের সাথে পার্থক্য হলো, Zustand-এ স্টেট পরিবর্তন হলে কনজিউমার ছাড়া অপ্রয়োজনীয় অন্য কোনো কম্পোনেন্ট রি-রেন্ডার হয় না।",
    enExplanation: `### Explanation
Zustand is a state management solution that addresses key drawbacks of React's built-in Context and traditional Redux:

1. **Boilerplate Comparison**:
   - **Redux**: Requires configuring stores, actions, action types, reducers, and dispatch bindings.
   - **Context**: Requires writing Context definitions, provider components, and state management values in parents.
   - **Zustand**: Requires a single \`create\` function, returning a custom React hook.

2. **Rendering Performance (Selective Updates)**:
   - **React Context**: If a context value changes, *all* components using \`useContext\` re-render, even if they only read a static field.
   - **Zustand**: Components subscribe to slices of state using selectors. Re-renders only occur if the selected state changes.

3. **No Provider Wrappers**:
   - Stores are initialized as globals. You can write to or read store values outside of the React render cycle (e.g., inside utilities or interceptors) directly.

### Real-World Example
In a multi-step user checkout process, storing the user's billing address in React Context means every keystroke updates the context, causing the entire checkout page, sidebar, and summary items to re-render. Switching to Zustand with selectors ensures only the address inputs re-render.

### Best Practice
Choose Zustand for lightweight to medium applications where you want global state without the configuration friction of Redux. Always use selector functions to consume state fields rather than destructuring the entire hook to prevent redundant re-rendering.

### Common Mistakes
Destructuring state values directly from the Zustand hook (e.g., \`const { users, userCount } = useStore()\`): this subscribes the component to all store changes, recreating Context-like performance issues.

### Code Example
\`\`\`typescript


// StoreState {
  count: number;
  increment: () => void;
}

// 1. Create the store (No Provider wrapping required)
exports.useCounterStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// 2. Consume in components with selectors (Optimized Rendering)
export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count); // selector
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand হলো এমন একটি স্টেট ম্যানেজমেন্ট যা রিঅ্যাক্ট কন্টেক্সট ও রিডাক্সের সীমাবদ্ধতা দূর করে:

১. **বয়লারপ্লেট তুলনা**:
   - **Redux**: স্টোর, অ্যাকশন, রিডিউসার অনেক কিছু কনফিগার করতে হয়।
   - **Context**: প্রোভাইডার সেটআপ এবং ভ্যালু প্রপস পাস করতে হয়।
   - **Zustand**: একটি মাত্র \`create\` ফাংশন দিয়ে হুক তৈরি করা যায়।

২. **রেন্ডারিং পারফরম্যান্স (সিলেক্টিভ আপডেট)**:
   - **React Context**: কন্টেক্সটের কোনো ডাটা চেঞ্জ হলে ওই কন্টেক্সট ব্যবহার করা সকল কম্পোনেন্ট রি-রেন্ডার হয়।
   - **Zustand**: এটি সিলেক্টর মেকানিজম ব্যবহার করে। নির্দিষ্ট সিলেক্ট করা স্টেট ফিল্ড পরিবর্তন না হলে কম্পোনেন্ট রেন্ডার হয় না।

৩. **প্রোভাইডার মুক্ত আর্কিটেকচার**:
   - কোন র‍্যাপার ছাড়া সরাসরি ব্রাউজার বা জেএস (JS) ফাইল থেকে গ্লোবাল অবজেক্ট হিসেবে স্টেট রিড/রাইট করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চেকআউট পেজে ইউজারের বিলিং অ্যাড্রেস টাইপ করার সময় যদি রিঅ্যাক্ট কন্টেক্সট ব্যবহার করা হয়, তবে প্রতিটি ক্যারেক্টার টাইপের সাথে পুরো চেকআউট পেজ, পেমেন্ট কার্ড এবং কার্ট সামারি রি-রেন্ডার হতে থাকবে। Zustand ব্যবহার করলে শুধুমাত্র অ্যাড্রেস ইনপুট বক্সটিই রি-রেন্ডার হবে।

### উত্তম অনুশীলন
ছোট ও মাঝারি প্রজেক্টে গ্লোবাল স্টেট ম্যানেজ করতে Zustand ব্যবহার করুন। স্টেট ব্যবহার করার সময় ডেসট্রাকচার না করে সবসময় সিলেক্টর মেথড (\`useCounterStore(state => state.count)\`) ব্যবহার করুন।

### সাধারণ ভুলসমূহ
সিলেক্টর ছাড়া সরাসরি হুক থেকে ডাটা ডেসট্রাকচার করা (যেমন: \`const { items } = useCartStore()\`), যা কোনো আইটেম আপডেট হলে কার্ট ও অপ্রয়োজনীয় কম্পোনেন্টকে জোর করে রি-রেন্ডার করায়।

### কোড উদাহরণ
\`\`\`typescript


// StoreState {
  count: number;
  increment: () => void;
}

// ১. স্টোর তৈরি করা
exports.useCounterStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// ২. কম্পোনেন্টে সিলেক্টর দিয়ে স্টেট রিড করা
export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count); // সিলেক্টর ব্যবহার
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-2",
    title: "How do you create a basic Zustand store and consume its state and actions in a component?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","React Components","State","Actions"],
    enAnswer: "To create a store, import create from \"zustand\" and define state values and action functions within the set callback. Consume the store in components by invoking the custom hook returned by create, using a selector function to retrieve the required properties.",
    bnAnswer: "Zustand স্টোর তৈরি করতে \"zustand\" থেকে create ইম্পোর্ট করে set কলব্যাকের ভেতর স্টেট ভ্যালু ও অ্যাকশন ডিফাইন করতে হয়। কম্পোনেন্টে এটি ব্যবহারের জন্য create থেকে পাওয়া কাস্টম হুকটি সিলেক্টর ফাংশন দিয়ে কল করা হয়।",
    enExplanation: `### Explanation
Creating and using a store in Zustand involves:
1. **Defining the Store State Interface**: Specify types for both state values and functions (actions) modifying the state.
2. **Calling \`create\`**: Passes a callback with a \`set\` parameter. \`set\` is used to update the state.
3. **Consuming using Selectors**: Extract only what the component needs. By using selectors, React tracks changes only to that specific slice, ignoring changes to other properties.

### Real-World Example
Imagine a dark mode theme toggle. The theme state needs to be accessed by the navbar, the main layout, and the settings panel. You create a theme store that contains a \`theme\` string and a \`toggleTheme\` action. Components import this hook and subscribe to the theme mode.

### Best Practice
Separate state values from action functions inside selectors if you want to avoid re-rendering the component when actions are loaded. Since action functions are reference-stable, they do not trigger re-renders.

### Common Mistakes
Passing a new object return from the selector inline without dependency mapping (e.g., \`useStore(state => ({ count: state.count }))\`). This causes a new object reference to be created on every render, triggering constant re-rendering unless you use a shallow comparison hook.

### Code Example
\`\`\`typescript


// ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

exports.useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

// Component usage
export function ThemeToggleButton() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current Theme: {theme}
    </button>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand-এ স্টোর তৈরি ও কনজিউম করার ধাপসমূহ:
১. **ইন্টারফেস তৈরি**: স্টোরের ভেরিয়েবল ও অ্যাকশনগুলোর টাইপ ডিফাইন করতে হয়।
2. **\`create\` মেথড কল**: \`set\` প্যারামিটার সংবলিত কলব্যাক প্রোভাইড করতে হবে যা মেমোরি স্টেট মার্জ করতে কাজ করে।
৩. **সিলেক্টর দিয়ে ব্যবহার**: কম্পোনেন্টে শুধুমাত্র প্রয়োজনীয় ফিল্ড রিড করার ব্যবস্থা করা।

### বাস্তব-ভিত্তিক উদাহরণ
ওয়েবসাইটের থিম টগল (Light/Dark mode) সব কম্পোনেন্ট থেকে পরিবর্তন করা লাগতে পারে। থিম স্টোর বানিয়ে সেখানে থিম ডাটা ও সেটি পরিবর্তনের ফাংশন রাখলে যে কোনো বাটন বা কম্পোনেন্ট থিম রিড করতে পারে।

### উত্তম অনুশীলন
রি-রেন্ডারিং এড়াতে অবজেক্ট ডেসট্রাকচারের পরিবর্তে সিঙ্গেল সিলেক্টর ভ্যালু ব্যবহার করুন। অ্যাকশন মেথডগুলো সাধারণত রেফারেন্স-স্টেবল থাকে, তাই এগুলো রি-রেন্ডার ট্রিগার করে না।

### সাধারণ ভুলসমূহ
সিলেক্টরের ভেতর নতুন অবজেক্ট রিটার্ন করা যেমন \`useStore(state => ({ a: state.a }))\`। প্রতিবার স্টোর চেঞ্জ হলে নতুন অবজেক্ট রেফারেন্স তৈরি হয় এবং কম্পোনেন্ট অনর্থক রি-রেন্ডার হয়।

### কোড উদাহরণ
\`\`\`typescript


// ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

exports.useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

// কম্পোনেন্ট ব্যবহার
export function ThemeToggleButton() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current Theme: {theme}
    </button>
  );
}
\`\`\``
  },
  {
    id: "state-query-3",
    title: "What is the purpose of selectors in Zustand, and why should you use them?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","Selectors","Performance","Re-renders"],
    enAnswer: "Selectors extract specific slices of state from a Zustand store. You should use them because they allow components to subscribe to only the selected state data. React will only re-render the component when the selected slice changes, preventing unnecessary rendering cycles.",
    bnAnswer: "সিলেক্টর (Selectors) হলো স্টোর থেকে নির্দিষ্ট কিছু অংশ বা স্লাইস এক্সট্র্যাক্ট করার ফাংশন। এগুলো ব্যবহার করা উচিত কারণ এর ফলে কম্পোনেন্ট শুধুমাত্র সিলেক্ট করা ডাটায় সাবস্ক্রাইব করে। সিলেক্ট করা ডাটা পরিবর্তন না হলে কম্পোনেন্টটি রি-রেন্ডার হয় না।",
    enExplanation: `### Explanation
In Zustand, the state-consumption hook returned by \`create\` listens to changes in the store.
- **Without Selectors**: If you write \`const state = useStore()\`, any change to any variable in the store will force a re-render of this component.
- **With Selectors**: If you write \`const count = useStore((state) => state.count)\`, React checks if the returned value (using strict equality \`===\`) is different from the previous render. If they are equal, the component is not re-rendered.

**Equality Comparison**:
- By default, Zustand uses strict equality (\`===\`) to compare selector return values.
- If you select multiple primitive values as an object: \`state => ({ a: state.a, b: state.b })\`, strict equality fails because a new object is returned every time. You can fix this by using the \`useStore(selector, shallow)\` compare hook or Zustand's \`useShallow\` helper.

### Real-World Example
A shopping cart store has \`items\` (array), \`totalPrice\` (number), and \`couponCode\` (string). The cart icon header only needs \`items.length\` to show the item count badge. By selecting \`state => state.items.length\`, the header badge component avoids re-rendering when the user types or updates the \`couponCode\`.

### Best Practice
Always write separate selector hooks or single-property selectors for values. If selecting an object or array, wrap it in \`useShallow\` to perform a key-by-key comparison instead of reference equality checks.

### Common Mistakes
Returning arrays or objects inline from a selector without using \`useShallow\`, which bypasses strict check controls and re-renders the component on every store update.

### Code Example
\`\`\`typescript



// CartStore {
  items: string[];
  coupon: string;
  addItem: (item: string) => void;
  setCoupon: (code: string) => void;
}

exports.useCartStore = create<CartStore>((set) => ({
  items: [],
  coupon: '',
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  setCoupon: (code) => set({ coupon: code }),
}));

// Component subscribing to multiple properties safely using useShallow
export function CartSummary() {
  const { itemCount, coupon } = useCartStore(
    useShallow((state) => ({
      itemCount: state.items.length,
      coupon: state.coupon,
    }))
  );

  return (
    <div>
      Items: {itemCount} | Active Coupon: {coupon}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand-এ সিলেক্টর রেন্ডার অপ্টিমাইজেশনের প্রধান চালিকাশক্তি:
- **সিলেক্টর ছাড়া**: \`const state = useStore()\` লিখলে স্টোরের যেকোনো একটা ভ্যালু চেঞ্জ হলেই ওই কম্পোনেন্ট পুনরায় রেন্ডার হবে।
- **সিলেক্টর সহ**: \`const count = useStore(state => state.count)\` লিখলে রিঅ্যাক্ট আগের মানের সাথে \`===\` তুলনা করে দেখে। পরিবর্তন না থাকলে রেন্ডার স্কিপ করে।

**ইকুয়ালিটি চেক ও shallow**:
- ডিফল্টভাবে এটি স্ট্রিক্ট ইকুয়ালিটি ব্যবহার করে।
- যখন কাস্টম অবজেক্ট সিলেক্ট করা হয়, রেফারেন্স পরিবর্তন এড়াতে \`useShallow\` ব্যবহার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি শপিং কার্টে আইটেম লিস্ট, মোট প্রাইস ও কুপন কোড রয়েছে। হেডারের ঝুড়ি বা কার্ট আইকনে শুধু আইটেম সংখ্যা দেখতে হবে। আপনি যদি সিলেক্টর দিয়ে \`state => state.items.length\` রিড করেন, তবে কুপন কোড এডিট বা রিমুভ করার সময় হেডার আইকনটি রি-রেন্ডার হবে না।

### উত্তম অনুশীলন
মাল্টিপল ভ্যালু একবারে সিলেক্ট করতে চাইলে \`useShallow\` র‍্যাপার ব্যবহার করুন। এতে অবজেক্টের প্রতিটি প্রপার্টি আলাদাভাবে চেক করা সম্ভব হয়।

### সাধারণ ভুলসমূহ
\`useShallow\` ছাড়া সিলেক্টরে সরাসরি অবজেক্ট রিটার্ন করা (যেমন: \`state => ({ list: state.list })\`), যা অহেতুক রি-রেন্ডার ট্র্রিগার করে।

### কোড উদাহরণ
\`\`\`typescript



// CartStore {
  items: string[];
  coupon: string;
  addItem: (item: string) => void;
  setCoupon: (code: string) => void;
}

exports.useCartStore = create<CartStore>((set) => ({
  items: [],
  coupon: '',
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  setCoupon: (code) => set({ coupon: code }),
}));

// useShallow ব্যবহার করে একাধিক ফিল্ড রিসিভ করার নিরাপদ উপায়
export function CartSummary() {
  const { itemCount, coupon } = useCartStore(
    useShallow((state) => ({
      itemCount: state.items.length,
      coupon: state.coupon,
    }))
  );

  return (
    <div>
      Items: {itemCount} | Active Coupon: {coupon}
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-4",
    title: "How do you update state in Zustand, and what is the difference between set and get functions?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","State Updates","set","get"],
    enAnswer: "State in Zustand is updated using the set() function, which shallowly merges changes into the store state. The get() function retrieves the current snapshot of the store state inside actions without requiring hooks, useful for reading values in async callbacks.",
    bnAnswer: "Zustand-এ স্টেট আপডেট করতে set() ফাংশন ব্যবহার করা হয়, যা স্টেটের সাথে নতুন ডাটা শ্যালো মার্জ (shallow merge) করে। আর get() ফাংশন হুকের প্রয়োজন ছাড়াই অ্যাকশনের ভেতর থেকে কারেন্ট স্টেটের স্ন্যাপশট রিড করার সুবিধা দেয়।",
    enExplanation: `### Explanation
Zustand's creator function provides two main utilities inside store definitions:

1. **\`set(recipe, replace?)\`**:
   - Updates store values. It merges the provided object with the current state shallowly (no nested deep merging).
   - If a function is passed to \`set\`, it receives the current state as a parameter: \`set((state) => ({ count: state.count + 1 }))\`.
   - If the second argument is \`true\`, it *replaces* the entire state instead of merging it.

2. **\`get()\`**:
   - Accesses the current state values directly inside actions or callback routines.
   - Useful for checking values dynamically before performing logic or dispatching events (e.g., checking if user is logged in before dispatching).

### Real-World Example
In a chat app, sending a message requires appending the text to a message list.
- Use \`set\` to update the message list: \`set((state) => ({ messages: [...state.messages, newMsg] }))\`.
- To check if the current user has exceeded a draft rate limit, use \`get().messageCount\` to evaluate conditions beforehand.

### Best Practice
Always use functional updates with \`set((state) => ...)\` when the new state depends on the previous state. This prevents race conditions and ensures you are working with the most up-to-date snapshot.

### Common Mistakes
Forgetting that \`set\` performs a shallow merge. If you have a nested object structure, writing \`set({ user: { age: 30 } })\` will completely overwrite all other user fields (like \`user.name\`).

### Code Example
\`\`\`typescript


// UserProfile {
  name: string;
  age: number;
}

// UserStore {
  profile: UserProfile;
  updateAge: (age: number) => void;
  logCurrentProfile: () => void;
}

exports.useUserStore = create<UserStore>((set, get) => ({
  profile: { name: 'Rahim', age: 25 },
  
  updateAge: (newAge) => set((state) => ({
    // Must spread nested properties to prevent overwriting 'name'
    profile: { ...state.profile, age: newAge }
  })),
  
  logCurrentProfile: () => {
    // Read state values dynamically inside actions using get()
    const currentProfile = get().profile;
    console.log("Current Profile Snapshot:", currentProfile);
  }
}));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand স্টোর তৈরির সময় ২টি গুরুত্বপূর্ণ মেথড এভেইলেবল থাকে:

১. **\`set()\`**:
   - এটি স্টেট আপডেট করতে কাজ করে। এটি ডিরেক্ট অবজেক্ট বা ওল্ড স্টেট প্যারামিটার সহ কলব্যাক রিসিভ করে। এটি শ্যালো মার্জ করে।
   - দ্বিতীয় প্যারামিটারে \`true\` পাস করলে পুরো স্টেটটি প্রতিস্থাপিত (replace) হয়।

২. **\`get()\`**:
   - হুক কল করা ছাড়াই অ্যাকশন ফাংশনের ভেতর স্টেটের ইনস্ট্যান্ট ডাটা রিড করতে এটি ব্যবহার করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চ্যাট বক্সে মেসেজ পাঠানোর সময় আগের মেসেজ অ্যারের সাথে নতুন মেসেজ যোগ করতে \`set\` প্রয়োজন। আবার মেসেজ পাঠানোর আগে ক্যারেক্টার লিমিট ক্রস করেছে কি না তা চেক করতে \`get().draftText.length\` দিয়ে কন্ডিশনাল চেকিং করা সম্ভব।

### উত্তম অনুশীলন
স্টেট আপডেটের ক্ষেত্রে আগের স্টেটের ওপর ভ্যালু ডিপেন্ড করলে সবসময় কলব্যাক ফাংশন মেথড \`set((state) => ({ count: state.count + 1 }))\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`set\` নেস্টেড অবজেক্টের ক্ষেত্রে শুধু শ্যালো মার্জ করে তা ভুলে যাওয়া। যেমন: \`profile: { name: 'X', age: 20 }\` স্টেটে শুধুমাত্র \`set({ profile: { age: 21 } })\` দিলে \`name\` প্রপার্টিটি চিরতরে মুছে যাবে।

### কোড উদাহরণ
\`\`\`typescript


// UserProfile {
  name: string;
  age: number;
}

// UserStore {
  profile: UserProfile;
  updateAge: (age: number) => void;
  logCurrentProfile: () => void;
}

exports.useUserStore = create<UserStore>((set, get) => ({
  profile: { name: 'Rahim', age: 25 },
  
  updateAge: (newAge) => set((state) => ({
    // নেস্টেড অবজেক্টের জন্য স্প্রেড অপারেটর ব্যবহার আবশ্যক
    profile: { ...state.profile, age: newAge }
  })),
  
  logCurrentProfile: () => {
    // get() ব্যবহার করে সরাসরি ডাটা রিড করা হচ্ছে
    const currentProfile = get().profile;
    console.log("Current Profile Snapshot:", currentProfile);
  }
}));
\`\`\``
  },
  {
    id: "state-query-5",
    title: "How does Zustand handle asynchronous operations, and is any middleware required?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","Asynchronous","Middleware","Actions"],
    enAnswer: "Zustand handles asynchronous operations natively without requiring any thunk or saga middleware. Actions in Zustand can be declared as async functions, where you perform async fetches and then invoke set() to update the state once the data resolves.",
    bnAnswer: "Zustand-এ কোনো অতিরিক্ত মিডলওয়্যার বা থাঙ্ক ছাড়া সরাসরি এসিনক্রোনাস অপারেশন হ্যান্ডেল করা যায়। স্টোরের অ্যাকশনগুলোকে সরাসরি async ফাংশন হিসেবে ডিক্লেয়ার করা যায় এবং ফেচ করা শেষে set() কল করে স্টেট আপডেট করা সম্ভব।",
    enExplanation: `### Explanation
Unlike Redux, which requires separate packages (like \`redux-thunk\` or \`redux-saga\`) to dispatch async actions, Zustand actions are standard JavaScript functions.
- You can declare actions as \`async\` or return promises.
- You simply perform the async network fetches or database promises directly inside the action.
- When the operation completes, call \`set()\` to update store state values.
- Zustand handles the react reconciliation and state updates automatically.

### Real-World Example
When loading user list details:
- You set a \`loading\` state to \`true\`.
- Fetch details from an API endpoint.
- Once the fetch completes, set the \`users\` state array and set \`loading\` back to \`false\`. All of this is written in a simple, readable async function inside the store.

### Best Practice
Wrap async logic in \`try-catch\` blocks to catch network errors. Set an \`error\` state in the store if the request fails so the UI can display an appropriate alert.

### Common Mistakes
Writing \`async\` inside the \`set\` method. \`set\` must remain synchronous and receive a resolved state object or a callback returning a state object. Perform the await logic *outside* the \`set\` function.

### Code Example
\`\`\`typescript


// User {
  id: number;
  name: string;
}

// UserStore {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

exports.useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: false,
  error: null,
  
  // Asynchronous action (no middleware required)
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to load users');
      const data = await res.json();
      
      set({ users: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিডাক্সে এসিনক্রোনাস এপিআই হ্যান্ডেল করতে আলাদা প্যাকেজ লাগে (যেমন Thunk বা Saga), কিন্তু Zustand-এ এমন কিছু লাগে না:
- অ্যাকশনগুলোকে সরাসরি \`async/await\` বা প্রমিস হিসেবে ডিক্লেয়ার করা যায়।
- ফাংশনের ভেতরে সরাসরি ডাটা ফেচিং বা নেটওয়ার্ক রিকোয়েস্ট করা যায়।
- ফেচ হওয়া রেজাল্ট পাওয়ার পর শুধু \`set()\` কল করলেই স্টেট আপডেট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ডাটাবেজ থেকে কোনো ব্লগ লিস্ট ফেচ করার সময় লোডিং স্ক্রিন দেখানো দরকার। এপিআই রিকোয়েস্টের শুরুতে \`set({ loading: true })\` করে ফায়ার করবেন, রিকোয়েস্ট শেষে ডাটা সেট করে \`set({ loading: false })\` করে দিলে ইউজার স্মুথ ফেচিং ফ্লো দেখতে পাবেন।

### উত্তম অনুশীলন
যেকোনো এসিনক্রোনাস অপারেশনে অবশ্যই \`try-catch\` ব্লক ব্যবহার করুন এবং কোনো নেটওয়ার্ক এরর হলে তা স্টেটে স্টোর করুন যাতে ইউজারকে এরর নোটিফিকেশন দেখানো যায়।

### সাধারণ ভুলসমূহ
\`set\` মেথডের ভেতরের কলব্যাককে \`async\` ঘোষণা করা। \`set\` ফাংশন নিজে সিনক্রোনাস থাকবে, এপিআই রিকোয়েস্ট বাইরে সম্পন্ন করে শুধুমাত্র রিটার্ন ডাটা \`set\`-এ পাস করুন।

### কোড উদাহরণ
\`\`\`typescript


// User {
  id: number;
  name: string;
}

// UserStore {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

exports.useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: false,
  error: null,
  
  // এসিনক্রোনাস অ্যাকশন (কোনো মিডলওয়্যারের প্রয়োজন নেই)
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to load users');
      const data = await res.json();
      
      set({ users: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
\`\`\``
  },
  {
    id: "state-query-6",
    title: "What is the transient update pattern in Zustand, and how does it bypass React re-renders?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","Transient Updates","Performance","subscribe"],
    enAnswer: "The transient update pattern in Zustand involves subscribing directly to the store changes using subscribe() without triggering React hooks. This retrieves state changes on every update, allowing manual DOM manipulations or rapid property updates (e.g. coordinates in animations) while completely bypassing React render cycles.",
    bnAnswer: "Zustand-এ ট্রানজিয়েন্ট আপডেট (Transient Update) প্যাটার্ন হলো রিঅ্যাক্ট হুক ব্যবহার না করে সরাসরি subscribe() মেথডের মাধ্যমে স্টেট পরিবর্তনের আপডেট নেওয়া। এটি রিঅ্যাক্ট কম্পোনেন্ট রি-রেন্ডার না করে সরাসরি ম্যানুয়াল ডম (DOM) আপডেট করতে সাহায্য করে, যা গেম বা এনিমেশনে দরকার হয়।",
    enExplanation: `### Explanation
Normally, changes to Zustand state trigger component re-renders through hooks. However, for high-frequency updates (like mouse positions, scroll depths, canvas frames, or form inputs), rendering React components on every tick degrades performance.

**Transient Updates**:
- Use \`useStore.subscribe(callback)\` to listen to changes in store values without triggering hooks.
- Inside the callback, update the DOM elements manually by mutating their references (\`ref.current.style.transform\`, \`ref.current.value\`).
- Result: The UI updates instantly at 60+ FPS, but the React component remains un-rendered.

### Real-World Example
In a drag-and-drop dashboard or a custom game UI where items move constantly:
- Subscribing via custom hooks to \`x\` and \`y\` coordinates would trigger thousands of React re-renders, causing lag.
- Using a transient update, the component subscribes via \`useStore.subscribe()\` on mount. When the coordinates update, the listener changes the element's CSS transform dynamically via a React ref.

### Best Practice
Always return the unsubscribe function from \`useEffect\` to clear the store listener when the component unmounts, preventing memory leaks.

### Common Mistakes
Using transient updates for components that require rendering nested React components or structure changes. Transient updates are only suited for simple DOM attributes or styles that can be mutated via refs.

### Code Example
\`\`\`typescript



// PositionStore {
  x: number;
  updatePosition: (x: number) => void;
}

exports.usePositionStore = create<PositionStore>((set) => ({
  x: 0,
  updatePosition: (newX) => set({ x: newX }),
}));

export function TransientTracker() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subscribe directly to the store (Transient Update)
    const unsubscribe = usePositionStore.subscribe(
      (state) => {
        if (boxRef.current) {
          // Manually update the DOM style (bypasses React render)
          boxRef.current.style.transform = \`translateX(\${state.x}px)\`;
        }
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return <div ref={boxRef} style={{ width: 50, height: 50, backgroundColor: 'red' }} />;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সাধারণভাবে স্টেট চেঞ্জ হলে রিঅ্যাক্ট কম্পোনেন্ট রেন্ডার হয়। কিন্তু অতি দ্রুত পরিবর্তনশীল ডাটায় (যেমন এনিমেশন, স্ক্রল বা মাউস মুভমেন্ট) প্রতিবার রি-রেন্ডার হলে সাইট হ্যাং করবে।

**ট্রানজিয়েন্ট আপডেট প্যাটার্ন**:
- \`useStore.subscribe()\` দিয়ে সরাসরি ব্যাকগ্রাউন্ডে স্টেট ট্র্যাকিং সেট করা হয়।
- ডাটা চেঞ্জ হলে রিঅ্যাক্ট হুক ছাড়াই কাস্টম কলব্যাক ফায়ার হয়।
- এই কলব্যাকের ভেতর রিঅ্যাক্ট \`ref\`-এর সাহায্যে সরাসরি DOM এলিমেন্টের স্টাইল বা টেক্সট আপডেট করে দেওয়া যায়।
- ফলে রিঅ্যাক্ট রেন্ডারিং সাইকেল সম্পূর্ণ বাইপাস হয়ে প্রজেক্টের পারফরম্যান্স চরম বৃদ্ধি পায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি কাস্টম কার্সার বা গেমিং ক্যারেক্টার মুভমেন্ট স্ক্রিন:
- স্ক্রিনের \`x\` ও \`y\` অক্ষের স্থানাঙ্ক প্রতি সেকেন্ডে ৬০ বার বদলাবে। হুক ব্যবহার করলে সেকেন্ডে ৬০ বার কম্পোনেন্ট রেন্ডার হয়ে ক্র্যাশ করবে।
- ট্রানজিয়েন্ট আপডেট দিয়ে রেফ (\`ref\`) স্টাইল আপডেট করলে অ্যাপ স্মুথ এবং ফাস্ট থাকবে।

### উত্তম অনুশীলন
\`useEffect\`-এর ভেতর সাবস্ক্রাইব করার পর অবশ্যই রিটার্ন করা আনসাবস্ক্রাইব ফাংশনটি কল করুন যখন কম্পোনেন্ট আনমাউন্ট হয়ে যায়, অন্যথায় মেমোরি লিক হবে।

### সাধারণ ভুলসমূহ
কম্পোনেন্টের ভেতরে নতুন লেআউট বা কন্ডিশনাল রেন্ডার দেখানোর প্রজেক্টে ট্রানজিয়েন্ট আপডেট ব্যবহার করা। এটি শুধুমাত্র রেফ দিয়ে হ্যান্ডেল করা ছোটোখাটো কাজের জন্য উপযুক্ত।

### কোড উদাহরণ
\`\`\`typescript



// PositionStore {
  x: number;
  updatePosition: (x: number) => void;
}

exports.usePositionStore = create<PositionStore>((set) => ({
  x: 0,
  updatePosition: (newX) => set({ x: newX }),
}));

export function TransientTracker() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // সরাসরি স্টোরে সাবস্ক্রাইব করা হলো (রিঅ্যাক্ট রেন্ডার ছাড়াই)
    const unsubscribe = usePositionStore.subscribe(
      (state) => {
        if (boxRef.current) {
          // ম্যানুয়ালি ডম স্টাইল চেঞ্জ করা হচ্ছে
          boxRef.current.style.transform = \`translateX(\${state.x}px)\`;
        }
      }
    );

    // আনমাউন্ট হলে শ্রোতা ক্লিয়ার করা
    return () => unsubscribe();
  }, []);

  return <div ref={boxRef} style={{ width: 50, height: 50, backgroundColor: 'red' }} />;
}
\`\`\``
  },
  {
    id: "state-query-7",
    title: "What are the three core principles of Redux, and why are they important?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux","Architecture","State Principles","Design Patterns"],
    enAnswer: "The three core principles of Redux are: 1. Single source of truth (the entire application state is stored in an object tree within a single store), 2. State is read-only (the only way to change state is to emit an action), and 3. Changes are made with pure functions (reducers evaluate state transition changes).",
    bnAnswer: "Redux-এর তিনটি মূল নীতি হলো: ১. Single source of truth (অ্যাপ্লিকেশনের সম্পূর্ণ স্টেট একটিমাত্র অবজেক্ট হিসেবে একটি স্টোরে সংরক্ষিত থাকে), ২. State is read-only (স্টেট পরিবর্তনের একমাত্র উপায় হলো অ্যাকশন ডেসপ্যাচ করা), এবং ৩. Changes are made with pure functions (রিডিউসার নামক পিওর ফাংশন দিয়ে নতুন স্টেট জেনারেট করা)।",
    enExplanation: `### Explanation
Redux operates under three fundamental tenets to maintain deterministic state predictability:

1. **Single Source of Truth**:
   - The state of your whole application is stored in an object tree within a single store.
   - *Importance*: Makes debugging, server-side hydration, and application state snapshot logging extremely straightforward.

2. **State is Read-Only (Immutable)**:
   - The only way to change the state is to dispatch an action (a plain JS object describing what happened).
   - *Importance*: Prevents UI rendering methods from directly mutating state. Everything is serialized and runs in order.

3. **Changes are Made with Pure Functions**:
   - To specify how the state tree is transformed by actions, you write pure reducers: \`(state, action) => newState\`.
   - *Importance*: Because reducers are pure (no side effects, same inputs return same output), features like undo/redo, travel debugging, and testing are highly reliable.

### Real-World Example
In a financial dashboard:
- Mutating a balance variable directly inside a component (\`state.balance = 500\`) makes it impossible to track when and why a transaction happened.
- Redux forces you to dispatch \`{ type: 'DEPOSIT', payload: 500 }\`. The reducer receives the old balance, adds 500, and returns a new state object. This creates a clear timeline of account changes.

### Best Practice
Strictly keep your store state serializable. Do not store class instances, functions, or active web sockets in Redux state.

### Common Mistakes
Mutating the state object directly inside a legacy reducer (e.g., \`state.items.push(item)\`) instead of returning a new state reference. This breaks react re-renders because the state reference remains unchanged.

### Code Example
\`\`\`typescript
// Redux Pure Reducer Example
// State {
  balance: number;
}

// Action {
  type: string;
  payload: number;
}

const initialState: State = { balance: 1000 };

// Pure function: no mutations, returns a completely new state object
export function bankReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Redux ৩টি নিয়মের ওপর ভিত্তি করে কাজ করে যা স্টেটের ভবিষ্যৎ নির্ণয় সহজ করে তোলে:

১. **Single Source of Truth**:
   - পুরো অ্যাপের যাবতীয় গ্লোবাল স্টেট একটিমাত্র ডাটা ট্রির ভেতর স্টোরে জমা থাকে।
   - *গুরুত্ব*: কোড ডিবাগিং বা লগ ট্র্যাকিং সহজ হয়।

২. **State is Read-Only**:
   - স্টেট ডিরেক্ট রাইট করা যায় না। পরিবর্তনের জন্য নির্দিষ্ট অবজেক্ট (অ্যাকশন) ডেসপ্যাচ করতে হয়।
   - *গুরুত্ব*: একাধিক জায়গা থেকে একসাথে ডিরেক্ট মোডিফাই করে ডাটা নষ্ট করা রোধ করে।

৩. **Changes with Pure Functions**:
   - রিডিউসারগুলোকে অবশ্যই পিওর ফাংশন হতে হবে: \`(state, action) => newState\`।
   - *গুরুত্ব*: পিওর ফাংশনের একই ইনপুটে সবসময় একই আউটপুট আসে। ফলে টাইম-ট্রাভেল ডিবাগিং সচল থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং অ্যাপ্লিকেশনে ইউজারের ব্যালেন্স যদি বাটন ক্লিকের মাধ্যমে সরাসরি \`state.balance = 500\` দিয়ে পরিবর্তন করা হয়, তবে অডিটররা কখনো বুঝতে পারবে না কে কখন ব্যালেন্স বদলাল। রিডাক্সে \`DEPOSIT\` অ্যাকশন পাঠিয়ে স্টেট আপডেট করলে প্রতিটি ট্রানজ্যাকশনের হিস্ট্রি নির্ভুল থাকে।

### উত্তম অনুশীলন
স্টোরের ভেতর ক্লাস অবজেক্ট বা ফাংশন রাখবেন না, শুধুমাত্র সিরিয়ালাইজেবল ডাটা (অবজেক্ট, অ্যারে, প্রিমিটিভ) সংরক্ষণ করুন।

### সাধারণ ভুলসমূহ
রিডিউসারের ভেতর পুরনো স্টেট সরাসরি এডিট করা (যেমন: \`state.value = newValue\` বা \`push()\`), যা রিঅ্যাক্টকে নতুন রেন্ডার কল করতে বাধা দেয় (যদি না Immer ব্যবহার করা হয়)।

### কোড উদাহরণ
\`\`\`typescript
// রিডাক্স পিওর রিডিউসার উদাহরণ
// State {
  balance: number;
}

// Action {
  type: string;
  payload: number;
}

const initialState: State = { balance: 1000 };

// পিওর ফাংশন: মেমোরি এডিট করে না, নতুন অবজেক্ট রিটার্ন করে
export function bankReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}
\`\`\``
  },
  {
    id: "state-query-8",
    title: "What is Redux Toolkit (RTK), and why was it introduced to replace legacy Redux boilerplate?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux Toolkit","RTK","Boilerplate","Best Practices"],
    enAnswer: "Redux Toolkit (RTK) is the official, opinionated toolset for efficient Redux development. It was introduced to simplify configuring the store, eliminate standard boilerplate files, enforce best practices out of the box, and include Immer internally to support direct state mutations during write operations.",
    bnAnswer: "Redux Toolkit (RTK) হলো অফিসিয়াল রেডক্স টুলসেট। এটি রেডক্স কনফিগ সহজ করতে, বয়লারপ্লেট ফাইল বা কোড কমাতে, ডিফল্ট বেস্ট প্র্যাকটিস নিশ্চিত করতে এবং Immer যুক্ত করে সরাসরি স্টেট মিউটেট করার সুবিধা দিয়ে কোড সংক্ষেপ করতে আনা হয়েছে।",
    enExplanation: `### Explanation
Traditional Redux was criticized for its massive boilerplate requirements (creating actions, types, sagas/thunks, selectors, and store setups separately). Redux Toolkit resolves this by providing utilities:

1. **\`configureStore()\`**: Configures the store in one function call, automatically enabling Redux DevTools and injecting default middleware (like \`redux-thunk\` for async work and dev checks).
2. **\`createSlice()\`**: Combines action creators, action types, and reducers into a single, clean file block.
3. **Built-in Immer integration**: Allows developers to write "mutative" code inside reducers (e.g., \`state.value = 5\`). Immer intercepts this and translates it into immutable update operations automatically under the hood.
4. **Built-in TypeScript support**: Exports robust TypeScript utility types automatically.

### Real-World Example
In legacy Redux, adding a new item to a shopping cart required updating 4 different files: \`constants.js\`, \`actions.js\`, \`reducer.js\`, and \`store.js\`. In Redux Toolkit, you write a single slice file (\`cartSlice.ts\`) with a reducer that appends the item, and the actions are auto-generated.

### Best Practice
Always build new Redux projects using Redux Toolkit. Legacy Redux syntax is no longer recommended by the Redux maintainers.

### Common Mistakes
Manually creating action types or action creators using strings when using RTK, which bypasses the automatic generation provided by \`createSlice\`.

### Code Example
\`\`\`typescript


// CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Immer allows us to write mutating logic (value += 1) safely!
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Auto-generated actions and reducer
exports.{ increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আগের সাধারণ রেডক্স প্রজেক্টে সামান্য এক লাইনের কাজের জন্য ৪-৫টি আলাদা ফাইলে কোড লিখতে হতো (Constants, Actions, Reducers)। রেডক্স টুলকিট (RTK) এগুলো কমাতে নিয়ে এসেছে:

১. **\`configureStore()\`**: এক ফাংশনেই স্টোর সেটআপ, ডেভটুলস কানেকশন ও থাঙ্ক মিডলওয়্যার ইন্টিগ্রেশন করে দেয়।
২. **\`createSlice()\`**: রিডিউসার, অ্যাকশন ও টাইপ একসাথে এক জায়গায় লেখার সুবিধা দেয়।
৩. **ইমার (Immer) ব্যবহার**: রিডিউসারে সরাসরি স্টেটের মিউটেশন (যেমন \`state.value += 1\`) লেখার সুযোগ দেয় যা ব্যাকগ্রাউন্ডে ইমিউটেবল মডিফায়ারে কনভার্ট হয়।

### বাস্তব-ভিত্তিক উদাহরণ
পুরনো রেডক্সে শপিং কার্টে আইটেম যুক্ত করতে হলে \`actions.js\` ফাইলে ডিক্লেয়ারেশন এবং \`reducer.js\` ফাইলে স্প্রেড অ্যারে রিটার্ন করতে হতো। আরটিকে-তে শুধুমাত্র একটি \`cartSlice.ts\` ফাইলে \`state.items.push(item)\` লিখে দিলে কাজ হয়ে যায়।

### উত্তম অনুশীলন
নতুন প্রজেক্টে রেডক্স ব্যবহারের ক্ষেত্রে অবশ্যই রেডক্স টুলকিট ব্যবহার করুন। পুরনো ভ্যানিলা রেডক্সের বয়লারপ্লেট সিনট্যাক্স এখন বর্জনীয়।

### সাধারণ ভুলসমূহ
RTK ব্যবহারের পরও ম্যানুয়ালি অ্যাকশন টাইপ স্ট্রিং লিখে হ্যান্ডেল করতে চাওয়া, যা আরটিকে-র অটো জেনারেশন সুবিধা নষ্ট করে।

### কোড উদাহরণ
\`\`\`typescript


// CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Immer ব্যবহারের ফলে সরাসরি মিউটেশন লেখা সম্ভব হয়েছে
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// অ্যাকশন ও রিডিউসার অটো-জেনারেট হয়ে গেছে
exports.{ increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\``
  },
  {
    id: "state-query-9",
    title: "What is a Redux Store, and how do you configure it using configureStore?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux Store","configureStore","RTK","Store Config"],
    enAnswer: "The Redux Store is the centralized container that holds the complete state tree of the application. In Redux Toolkit, configureStore() is used to configure it, automatically setting up the store with DevTools, Redux Thunk middleware, and runtime development check guards.",
    bnAnswer: "রেডক্স স্টোর (Redux Store) হলো সেন্ট্রালাইজড কনটেইনার যা অ্যাপ্লিকেশনের সম্পূর্ণ স্টেট ট্রি সংরক্ষণ করে। রেডক্স টুলকিটে configureStore() দিয়ে এটি কনফিগার করা হয়, যা অটোমেটিক দেব-টুলস, থাঙ্ক মিডলওয়্যার ও রানটাইম চেক সক্রিয় করে।",
    enExplanation: `### Explanation
The Redux store binds all pieces of state and reducers together:
- It maintains the global state tree.
- It exposes \`dispatch(action)\` to trigger state modifications.
- It exposes \`getState()\` to read current state snapshots.
- It exposes \`subscribe(listener)\` to listen for store updates.

**RTK's \`configureStore()\` vs Legacy \`createStore()\`**:
- Automatically merges slice reducers into a single root reducer using \`combineReducers\` under the hood.
- Automatically injects default middleware:
  - \`thunk\`: For handling async operations.
  - \`serializabilityStateInvariantMiddleware\`: Warns if you store non-serializable objects (like class instances or functions).
  - \`immutableStateInvariantMiddleware\`: Detects accidental mutations outside reducers.
- Automatically sets up Redux DevTools in development.

### Real-World Example
In a multi-module dashboard app with user settings, order tracking, and product catalogs, \`configureStore\` serves as the central hub. It mounts \`settingsReducer\`, \`orderReducer\`, and \`catalogReducer\` together so they can interact and be inspected in one DevTools tree.

### Best Practice
Maintain a single store configuration file per application. Pass your slice reducers inside the \`reducer\` object property to keep the root setup organized.

### Common Mistakes
Adding too many custom middlewares to the store without returning the default middleware array, which removes the serializability and thunk check guards.

### Code Example
\`\`\`typescript

import counterReducer from './counterSlice';
import userReducer from './userSlice';

// Configure the central Redux Store
exports.store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  // Optional: customize middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Turn off warning if storing special objects
    }),
});

// Infer types for state and dispatch to use throughout the TypeScript app
// RootState = ReturnType<typeof store.getState>;
// AppDispatch = typeof store.dispatch;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স স্টোর পুরো অ্যাপের সমস্ত রিডিউসার ও স্টেট একসুতোয় বেঁধে রাখে:
- এটি গ্লোবাল স্টেট ট্রি ম্যানেজ করে।
- এটি \`dispatch(action)\` দিয়ে নতুন ট্রানজ্যাকশন সক্রিয় করে।
- এটি \`getState()\` দিয়ে কারেন্ট ডাটা প্রোভাইড করে।

**configureStore-এর বৈশিষ্ট্য**:
- এটি একাধিক রিডিউসারকে একসাথে কম্বাইন করে রুট রিডিউসার বানায়।
- বাই-ডিফল্ট কিছু গুরুত্বপূর্ণ মিডলওয়্যার রান করায়:
  - \`thunk\`: এসিনক্রোনাস কাজের জন্য।
  - \`serializability check\`: সিরিয়ালাইজেবল নয় এমন ডাটা স্টোরে রাখলে ওয়ার্নিং দেয়।
  - \`immutable check\`: লিক হওয়া মিউটেশন ডিটেক্ট করে।
- ডেভ-টুলস কানেকশন অটো সেটআপ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বড় অ্যাপে ইউজার সেটিংস, প্রডাক্ট ক্যাটালগ ও কার্ট ম্যানেজমেন্ট রয়েছে। \`configureStore\` ব্যবহার করে এই তিনটি মডিউলকে একসাথে যুক্ত করা হয় যাতে সম্পূর্ণ অ্যাপে যেকোনো অ্যাকশন হ্যান্ডেল করা যায়।

### উত্তম অনুশীলন
পুরো অ্যাপের জন্য একটিমাত্র স্টোর তৈরি করুন। টাইপস্ক্রিপ্ট প্রজেক্টে কাজ করার সময় স্টোর থেকে \`RootState\` ও \`AppDispatch\` টাইপ ইনফার (infer) করে রাখুন যা পরবর্তীতে টাইপ সেফ হুক তৈরিতে লাগবে।

### সাধারণ ভুলসমূহ
কাস্টম মিডলওয়্যার যোগ করার সময় আরটিকে-র ডিফল্ট মিডলওয়্যার অ্যারে ক্লিয়ার করে ফেলা, যার ফলে থাঙ্ক বা সিরিয়ালাইজেশন গার্ড অফ হয়ে যায়।

### কোড উদাহরণ
\`\`\`typescript

import counterReducer from './counterSlice';
import userReducer from './userSlice';

// সেন্ট্রাল রেডক্স স্টোর কনফিগারেশন
exports.store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  // কাস্টম মিডলওয়্যার মডিফাই করার নিয়ম
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // সিরিয়ালাইজেশন ওয়ার্নিং অফ করা হলো
    }),
});

// টাইপস্ক্রিপ্ট অ্যাপের জন্য টাইপ ডিক্লেয়ারেশন
// RootState = ReturnType<typeof store.getState>;
// AppDispatch = typeof store.dispatch;
\`\`\``
  },
  {
    id: "state-query-10",
    title: "What is a slice in Redux Toolkit, and how do you define one using createSlice?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux Toolkit","createSlice","Slices","Reducers"],
    enAnswer: "A slice is a collection of Redux reducer logic and actions for a single feature of your app, configured together in a single file. You define it using createSlice(), passing a name, initial state, and an object of reducer functions, which auto-generates the action creators and types.",
    bnAnswer: "স্লাইস (Slice) হলো অ্যাপ্লিকেশনের একটি নির্দিষ্ট ফিচারের জন্য রিডিউসার লজিক এবং অ্যাকশনের সমন্বিত সেট, যা একটি সিঙ্গেল ফাইলে লেখা হয়। createSlice() দিয়ে নাম, ইনিশিয়াল স্টেট ও রিডিউসার ডিফাইন করলে এর অ্যাকশন ক্রিয়েটর ও টাইপস অটো জেনারেট হয়ে যায়।",
    enExplanation: `### Explanation
\`createSlice()\` is the core building block of Redux Toolkit:
- It maps your domain features (e.g., auth, cart, settings).
- **Arguments**:
  - \`name\`: String namespace used to prefix the auto-generated action types (e.g., \`cart/addItem\`).
  - \`initialState\`: The initial state value for the reducer.
  - \`reducers\`: An object mapping action names to case reducer functions.
- **Outputs**:
  - \`actions\`: Auto-generated action creators matching the names of the reducer methods.
  - \`reducer\`: The complete root reducer function for this slice.

### Real-World Example
For an auth module:
- Slices compile everything in \`authSlice.ts\`.
- Reducers: \`loginSuccess(state, action)\` and \`logout(state)\`.
- When compiled, \`authSlice.actions.loginSuccess\` acts as the dispatch function creator, and \`authSlice.reducer\` is exported to be loaded into the store.

### Best Practice
Follow the ducks pattern: keep your slice file self-contained. Export the slice actions as named exports, and export the slice reducer as the default export.

### Common Mistakes
Forgetting that you must export the generated action creators from the slice. Without doing this, you cannot dispatch actions from your components.

### Code Example
\`\`\`typescript


// AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action: auth/login
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Immer makes this mutation-like update safe
    },
    // Action: auth/logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export action creators for use in components
exports.{ login, logout } = authSlice.actions;

// Export default reducer for store registration
export default authSlice.reducer;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`createSlice()\` হলো রেডক্স টুলকিটের মূল লাইব্রেরি ফাংশন:
- এটি একটি নির্দিষ্ট ডোমেইন বা ফিচারের (যেমন: Auth, Cart) জন্য কাজ করে।
- **প্যারামিটারসমূহ**:
  - \`name\`: স্লাইসের নাম, যা অ্যাকশন টাইপ জেনারেট করতে প্রিফিক্স হিসেবে বসে (যেমন \`auth/login\`)।
  - \`initialState\`: স্লাইসটির শুরুর স্টেট ভ্যালু।
  - \`reducers\`: অ্যাকশন অনুযায়ী মেমোরি স্টেট চেঞ্জ করার ফাংশন অবজেক্ট।
- **রিটার্ন ভ্যালু**:
  - \`actions\`: অটো-জেনারেটেড অ্যাকশন ক্রিয়েটরস।
  - \`reducer\`: কনফিগ করার জন্য তৈরি ইন্টিগ্রেটেড রিডিউসার।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লগইন মেকানিজমে \`authSlice.ts\` তৈরি করা হলো। এর রিডিউসারগুলো হলো \`login\` এবং \`logout\`। স্লাইসটি অ্যাপের ভেতরের অ্যাকশনসমূহকে অটো জেনারেট করে দেয় যা দিয়ে বাটন ক্লিকে ইউজার লগইন ট্রিগার করা যায়।

### উত্তম অনুশীলন
ডাফস (Ducks) প্যাটার্ন অনুসরণ করুন। অর্থাৎ একটি ফাইলের ভেতরেই স্লাইস তৈরি, অ্যাকশনগুলো নেমড এক্সপোর্ট এবং রিডিউসারটি ডিফল্ট এক্সপোর্ট হিসেবে রাখুন।

### সাধারণ ভুলসমূহ
স্লাইসের শেষে অ্যাকশন ক্রিয়েটরগুলো (\`authSlice.actions\`) এক্সপোর্ট করতে ভুলে যাওয়া। এটি না করলে কম্পোনেন্ট থেকে ডিসপ্যাচ করা সম্ভব হয় না।

### কোড উদাহরণ
\`\`\`typescript


// AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // অ্যাকশন: auth/login
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload; // ইমার ব্যবহারের ফলে সরাসরি মিউটেশন সেফ
    },
    // অ্যাকশন: auth/logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// কম্পোনেন্টে ব্যবহারের জন্য অ্যাকশন এক্সপোর্ট
exports.{ login, logout } = authSlice.actions;

// স্টোরে অ্যাড করার জন্য রিডিউসার এক্সপোর্ট
export default authSlice.reducer;
\`\`\``
  },
  {
    id: "state-query-11",
    title: "What is the role of reducers and actions in Redux?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux","Reducers","Actions","Data Flow"],
    enAnswer: "Actions are plain JavaScript objects that represent an intention to change the state, carrying a descriptive type and optional payload. Reducers are pure functions that take the current state and an action as arguments, and return a new state object, defining how state changes in response to actions.",
    bnAnswer: "অ্যাকশন (Actions) হলো সাধারণ জাভাস্ক্রিপ্ট অবজেক্ট যা স্টেট পরিবর্তনের ইচ্ছা প্রকাশ করে (এতে type ও payload থাকে)। রিডিউসার (Reducers) হলো পিওর ফাংশন যা আগের স্টেট ও অ্যাকশন নিয়ে নতুন স্টেট রিটার্ন করে এবং কীভাবে ডাটা পরিবর্তিত হবে তা ডিফাইন করে।",
    enExplanation: `### Explanation
Redux maintains a strict unidirectional data flow:

1. **Actions (What happened)**:
   - Plain objects. They must have a \`type\` property (identifying the action). They can have a \`payload\` property (carrying input data).
   - Think of actions as descriptive news reports sent to the store.

2. **Reducers (How to respond)**:
   - Pure functions with signature: \`(state, action) => newState\`.
   - Reducers must not perform side effects (no API requests, no console logs, no mutations, no calling random numbers).
   - They calculate the next state by returning a completely new state object if updates occur, or the unchanged old state if no matches occur.

### Real-World Example
Consider checking in at a hotel:
- **Action**: You hand your ID to the desk clerk. This is the action \`{ type: 'CHECK_IN_GUEST', payload: { name: 'Karim', room: 204 } }\`.
- **Reducer**: The desk clerk updates the guest registry book without losing historical logs, checking you into the room, and returning a new version of the guestbook.

### Best Practice
Keep your actions small and simple. Let the reducers do the heavy lifting of state transitions. Keep all business logic and state structures inside reducers, rather than formatting the state inside components before dispatching.

### Common Mistakes
Performing side effects (like fetching data or modifying external variables) inside a reducer. This breaks the predictability of state and makes testing impossible.

### Code Example
\`\`\`typescript
// 1. Defining the Action format
// IncrementAction {
  type: 'INCREMENT';
  payload: number;
}

// 2. The Reducer (Must be a pure function)
// CounterState {
  count: number;
}

export function counterReducer(
  state: CounterState = { count: 0 },
  action: IncrementAction
): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      // Return a new object reference
      return {
        count: state.count + action.payload
      };
    default:
      // Return old state reference if no actions match
      return state;
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স গ্লোবাল ডাটা ফ্লো একমুখী ও সুনির্দিষ্ট নীতি মেনে চলে:

১. **অ্যাকশন (Actions - কী ঘটেছে)**:
   - এটি সাধারণ অবজেক্ট যা একটি স্ট্রিং \`type\` (কী কাজ করা হচ্ছে) এবং অপশনাল \`payload\` (নতুন ডাটা) বহন করে।
   - এটি কোনো স্টেট সরাসরি আপডেট করতে পারে না, জাস্ট খবর পাঠায়।

২. **রিডিউসার (Reducers - কীভাবে আপডেট হবে)**:
   - এটি একটি পিওর ফাংশন যার সিগনেচার হলো \`(state, action) => newState\`।
   - রিডিউসার আগের স্টেট ও অ্যাকশন ডাটা রিড করে একটি সম্পূর্ণ নতুন স্টেট অবজেক্ট রিটার্ন করে। এটি কোনো সাইড-ইফেক্ট (যেমন: এপিআই কল) করতে পারে না।

### বাস্তব-ভিত্তিক উদাহরণ
হোটেল রুম বুক করার উদাহরণ:
- **অ্যাকশন**: আপনি রিসেপশনে আপনার আইডি কার্ড দিলেন। এটি হলো অ্যাকশন \`{ type: 'BOOK_ROOM', payload: { name: 'Karim', room: 204 } }\`।
- **রিডিউসার**: ম্যানেজার বুকিং খাতায় আপনার নাম তুললেন এবং পূর্বের খাতার সাথে নতুন রুম বরাদ্দ যুক্ত করে একটি ফ্রেশ আপডেট খাতা প্রস্তুত করলেন।

### উত্তম অনুশীলন
অ্যাকশন অবজেক্টগুলোকে হালকা রাখুন। স্টেটের গঠন কেমন হবে তা কম্পোনেন্ট থেকে ডিসপ্যাচ করার আগেই রিডিউসারের ভেতরের লজিকে প্রসেস করুন।

### সাধারণ ভুলসমূহ
রিডিউসারের ভেতর এপিআই কল করা (\`fetch\`) বা সরাসরি উইন্ডো বা লোকালস্টোরেজ হ্যান্ডেল করা। এটি পিওর ফাংশনের ব্যাকরণ লঙ্ঘন করে ও ডিবাগ করা অসম্ভব করে তোলে।

### কোড উদাহরণ
\`\`\`typescript
// ১. অ্যাকশন ফর্ম্যাট ডিক্লেয়ারেশন
// IncrementAction {
  type: 'INCREMENT';
  payload: number;
}

// ২. রিডিউসার (অবশ্যই পিওর ফাংশন হতে হবে)
// CounterState {
  count: number;
}

export function counterReducer(
  state: CounterState = { count: 0 },
  action: IncrementAction
): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      // নতুন অবজেক্ট রেফারেন্স রিটার্ন করা হচ্ছে
      return {
        count: state.count + action.payload
      };
    default:
      // টাইপ না মিললে পুরনো রেফারেন্স রিটার্ন
      return state;
  }
}
\`\`\``
  },
  {
    id: "state-query-12",
    title: "How do you dispatch actions and read state in a React component using React-Redux hooks?",
    difficulty: "basic",
    category: "state-query",
    tags: ["React Redux","useSelector","useDispatch","React Components"],
    enAnswer: "To dispatch actions, invoke useDispatch() to get the dispatch function and call it with an action creator. To read state, invoke useSelector(), passing a selector function that extracts the desired slice from the root state tree.",
    bnAnswer: "অ্যাকশন ডেসপ্যাচ করতে useDispatch() হুক থেকে পাওয়া dispatch ফাংশন দিয়ে অ্যাকশন ক্রিয়েটর কল করতে হয়। আর স্টেট রিড করতে useSelector() হুকে সিলেক্টর ফাংশন পাস করে রুট স্টেট থেকে প্রয়োজনীয় অংশ আলাদা করা হয়।",
    enExplanation: `### Explanation
React-Redux provides hooks to bridge React components with the Redux store:

1. **\`useDispatch()\`**:
   - Returns the store's \`dispatch\` function reference.
   - Used to send actions to the store: \`dispatch(increment())\`.

2. **\`useSelector(selector)\`**:
   - Subscribes the React component to the Redux store state tree.
   - It runs the selector function whenever an action is dispatched. If the returned value changes, it forces a re-render.
   - Uses strict reference comparison (\`===\`) by default.

### Real-World Example
In a user profile settings page:
- To show the username in the header: Use \`const username = useSelector((state: RootState) => state.user.username)\`.
- When the user submits a name change form, trigger \`dispatch(updateName(newName))\` to dispatch the update action to the store.

### Best Practice
Define typed wrappers for \`useSelector\` and \`useDispatch\` inside a dedicated store hook file. This saves you from importing types like \`RootState\` and \`AppDispatch\` in every individual UI component.

### Common Mistakes
Returning a new inline object from \`useSelector\` without a shallow equality comparison (e.g., \`useSelector(state => ({ count: state.counter.value }))\`). This causes a re-render on *every* single dispatch in the app, regardless of whether the counter changed.

### Code Example
\`\`\`typescript
// hooks.ts (Recommended Type Setup)



// Custom typed wrappers
exports.useAppDispatch = () => useDispatch<AppDispatch>();
exports.useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Component.tsx



export default function CounterComponent() {
  // Read value safely with types
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>Value: {count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
React-Redux গ্লোবাল স্টোরের সাথে রিঅ্যাক্ট কম্পোনেন্ট সিঙ্ক করতে মূলত দুটি হুক ব্যবহার করে:

১. **\`useDispatch()\`**:
   - এটি স্টোরের \`dispatch\` মেথডের রেফারেন্স রিটার্ন করে।
   - এর সাহায্যে অ্যাকশন ফায়ার করা হয়: \`dispatch(increment())\`।

২. **\`useSelector(selector)\`**:
   - এটি গ্লোবাল স্টেট রিড করতে সাহায্য করে।
   - প্রতিবার কোনো অ্যাকশন ডেসপ্যাচ হলে এটি সিলেক্টর রান করে চেক করে মান বদলেছে কি না। বদল হলে কম্পোনেন্ট রি-রেন্ডার হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি প্রোফাইল পেজে ইউজারের নাম দেখাতে:
- নাম রিড করতে: \`const username = useSelector(state => state.user.username)\`।
- নাম এডিট করে সেভ করতে: বাটনে ক্লিকের সাথে \`dispatch(updateName(newName))\` রান করানো হয়।

### উত্তম অনুশীলন
অ্যাপের শুরুতেই টাইপস্ক্রিপ্টের জন্য কাস্টম টাইপড হুক (\`useAppSelector\` এবং \`useAppDispatch\`) তৈরি করে নিন। এতে প্রতি ফাইলে বারবার \`RootState\` ইম্পোর্ট করার ঝামেলা থাকে না।

### সাধারণ ভুলসমূহ
\`useSelector\` এর ভেতর ডিরেক্ট নতুন অবজেক্ট রিটার্ন করা যেমন \`useSelector(state => ({ val: state.counter.val }))\`। এটি রিঅ্যাক্টকে মনে করায় প্রতিবার রেফারেন্স বদলে গেছে, ফলে অ্যাপের যেকোনো জায়গায় ক্লিক করলে এই কম্পোনেন্ট রি-রেন্ডার হবে।

### কোড উদাহরণ
\`\`\`typescript
// hooks.ts (টাইপড হুক প্রিপারেশন)



// কাস্টম টাইপ সেফ হুকস
exports.useAppDispatch = () => useDispatch<AppDispatch>();
exports.useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Component.tsx



export default function CounterComponent() {
  // টাইপ সেফ উপায়ে স্টেট রিড করা
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>Value: {count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-13",
    title: "What is the purpose of Redux Thunks, and how do you write async actions using createAsyncThunk?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux Toolkit","createAsyncThunk","Thunks","Asynchronous"],
    enAnswer: "Redux Thunks are middleware-based functions designed to handle side effects and asynchronous operations in Redux. In RTK, you write them using createAsyncThunk(), which handles lifecycle actions (pending, fulfilled, rejected) automatically, letting you update the store state based on fetch outcomes.",
    bnAnswer: "রেডক্স থাঙ্কস (Redux Thunks) হলো মিডলওয়্যার-ভিত্তিক ফাংশন যা রেডক্সে এসিনক্রোনাস কাজ এবং এপিআই কল হ্যান্ডেল করতে সাহায্য করে। আরটিকে-তে createAsyncThunk() ব্যবহার করে এগুলো লেখা হয়, যা পেন্ডিং, ফুলফিল্ড ও রিজেক্টেড স্টেট অটো জেনারেট করে।",
    enExplanation: `### Explanation
Redux reducers are pure and cannot perform network tasks. To solve this, **Thunks** represent function actions:
- A thunk returns a function that receives \`(dispatch, getState)\` as parameters.
- Inside the thunk, you perform the async action (like calling \`axios.get\`).
- Redux Toolkit provides \`createAsyncThunk(actionTypeString, payloadCreator)\` to streamline this:
  - It generates action creators for three states: \`pending\`, \`fulfilled\`, and \`rejected\`.
  - You handle these cases inside the slice's \`extraReducers\` builder property to write data to the store.

### Real-World Example
When logging in a user:
- You dispatch \`loginUser(credentials)\`.
- The thunk enters the \`pending\` state (renders loading spinners in the UI).
- It calls the authentication API.
- If successful, it dispatches the \`fulfilled\` action with the user profile payload, updating the logged-in user state.
- If it fails, it dispatches \`rejected\`, rendering error alerts.

### Best Practice
Keep payload creator functions inside thunks focused solely on data fetching and errors. Let the slice reducers handle formatting the store state with the returned data.

### Common Mistakes
Forgetting to handle the \`rejected\` error case in the slice's \`extraReducers\`. This causes loading spinners to run indefinitely if a network request fails.

### Code Example
\`\`\`typescript


// 1. Create the async thunk
exports.fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: string, thunkAPI) => {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      return thunkAPI.rejectWithValue('User not found');
    }
    return (await response.json()) as { name: string };
  }
);

// UserState {
  name: string | null;
  loading: boolean;
  error: string | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { name: null, loading: false, error: null } as UserState,
  reducers: {},
  // 2. Handle the lifecycle cases
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'An error occurred';
      });
  },
});

export default userSlice.reducer;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স রিডিউসার পিওর হওয়ায় সেখানে কোনো এপিআই কল করা যায় না। এর সমাধান হলো **Thunks**:
- থাঙ্ক হলো এমন একটি অ্যাকশন যা নিজে সরাসরি ডাটা না হয়ে একটি ফাংশন রিটার্ন করে, যা পরবর্তীতে এপিআই রিকোয়েস্ট চালায়।
- আরটিকে-র \`createAsyncThunk\` দিয়ে সহজেই ৩টি স্টেট ট্র্যাকিং সেট করা যায়: \`pending\`, \`fulfilled\`, এবং \`rejected\`।
- এই ৩টি স্টেটের আপডেট আমরা স্লাইসের \`extraReducers\`-এর ভেতর হ্যান্ডেল করি।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার এপিআই থেকে ইউজার প্রোফাইল ডাটা রিড করা:
- প্রথমে \`fetchUserById\` অ্যাকশন ফায়ার হবে যা লোডিং স্পিনার শো করতে \`pending\` মেথড ফায়ার করবে।
- এপিআই ডাটা নিয়ে আসলে \`fulfilled\` ট্রিগার হবে এবং স্পিনার অফ করে ডাটা দেখাবে।
- এপিআই ক্র্যাশ করলে \`rejected\` ট্রিগার হবে ও এরর মেসেজ শো করবে।

### উত্তম অনুশীলন
THA-ভিত্তিক কাজগুলোর এরর ক্যাচ করতে \`thunkAPI.rejectWithValue\` ব্যবহার করুন। এটি কাস্টম এরর মেসেজগুলোকে রিজেক্টেড পে-লোডে পাস করতে সাহায্য করে।

### সাধারণ ভুলসমূহ
\`extraReducers\`-এ \`rejected\` কেস হ্যান্ডেল করতে ভুলে যাওয়া। এর ফলে কোনো রিকোয়েস্ট ফেইল করলে লোডিং স্পিনার চিরকাল ঘুরতে থাকবে এবং ইউজার বুঝতে পারবে না কী ভুল হয়েছে।

### কোড উদাহরণ
\`\`\`typescript


// ১. থাঙ্ক ক্রিয়েশন
exports.fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: string, thunkAPI) => {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      return thunkAPI.rejectWithValue('User not found');
    }
    return (await response.json()) as { name: string };
  }
);

// UserState {
  name: string | null;
  loading: boolean;
  error: string | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { name: null, loading: false, error: null } as UserState,
  reducers: {},
  // ২. লাইফসাইকেল অ্যাকশন হ্যান্ডেল করা
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'An error occurred';
      });
  },
});

export default userSlice.reducer;
\`\`\``
  },
  {
    id: "state-query-14",
    title: "Why must Redux reducers be pure functions, and how does Immer allow \"mutating\" state inside RTK slices?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux","Pure Functions","Immer","Immutability"],
    enAnswer: "Redux reducers must be pure functions to ensure state changes are predictable, trace-debugging works, and components know when to re-render. Immer allows \"mutating\" state in RTK by using a draft proxy wrapper, tracking your mutations, and translating them into a brand-new immutable state object.",
    bnAnswer: "রেডক্স রিডিউসার পিওর ফাংশন হওয়া জরুরি যাতে স্টেট পরিবর্তন প্রেডিক্ট করা যায় এবং রেন্ডার ট্রিগার করা সহজ হয়। আরটিকে-তে Immer সরাসরি মিউটেট করতে দেয় কারণ এটি ব্যাকগ্রাউন্ডে একটি ড্রাফট প্রক্সি তৈরি করে মিউটেশন ট্র্যাক করে এবং একটি নতুন ইমিউটেবল অবজেক্ট রিটার্ন করে।",
    enExplanation: `### Explanation
Why Redux requires pure reducers:
- **Reference Comparison**: React-Redux checks if the root state reference changed. If a reducer mutates properties directly on the old state object, the root reference remains equal, and React components fail to re-render.
- **Predictability**: Given the same state and action, a pure reducer always produces the exact same output. No external variables are modified.

**Immer's Magic inside RTK**:
- Redux Toolkit integrates the **Immer** library by default inside \`createSlice\` and \`createReducer\`.
- Immer wraps your state in a dynamic **Proxy** object called the \`draft\`.
- You can write normal, mutative JavaScript code like \`state.user.age = 26\` or \`state.items.push(newItem)\`.
- Immer intercepts these actions on the proxy draft, records the operations, and outputs a completely new, immutably updated state tree under the hood.

### Real-World Example
If you update a nested profile:
- **Legacy Redux**: You had to write \`return { ...state, user: { ...state.user, age: 26 } }\`. This becomes unreadable for deeply nested objects.
- **Redux Toolkit**: You write \`state.user.age = 26\`. Immer handles all nested spreading automatically.

### Best Practice
Only write mutative code inside methods managed by RTK's \`createSlice\` or \`createReducer\`. Writing mutative updates inside components or custom middlewares will still corrupt references and break updates.

### Common Mistakes
Returning a value when mutating the draft state. In Immer, you either mutate the draft directly (e.g., \`state.push()\`), or return a new state object completely. Combining both inside the same reducer throws runtime errors.

### Code Example
\`\`\`typescript


// Todo {
  id: string;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    // 1. Direct array push (safe under Immer proxy)
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    // 2. Direct property toggle (safe under Immer proxy)
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স রিডিউসার পিওর ফাংশন হওয়া কেন জরুরি:
- **রেফারেন্স চেক**: রিঅ্যাক্ট-রেডক্স রুট রেফারেন্স ট্র্যাক করে। আগের অবজেক্টের ভ্যালু সরাসরি পরিবর্তন করলে রেফারেন্স আইডি পাল্টায় না, ফলে কম্পোনেন্ট আপডেট হবে না।
- **প্রেডিক্টাবিলিটি**: পিওর ফাংশন কোনো বাইরের এনভায়রনমেন্টে হাত দেয় না, তাই ডিবাগ করা সহজ হয়।

**Immer এর কাজ**:
- রেডক্স টুলকিট বাই-ডিফল্ট **Immer** লাইব্রেরি ব্যবহার করে।
- এটি কারেন্ট স্টেটকে একটি কাস্টম প্রক্সি ড্রাফট (\`draft\`) দিয়ে র্যাপ করে।
- আমরা কোডে সরাসরি \`state.items.push(item)\` লিখলে ইমার মডিফিকেশনগুলো ট্র্যাক করে এবং আমাদের জন্য ফ্রেশ ইমিউটেবল অবজেক্ট রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
নেস্টেড অবজেক্টের ক্ষেত্রে:
- **আগের রেডক্স**: \`return { ...state, user: { ...state.user, address: { ...state.user.address, code: 12 } } }\` লিখতে হতো।
- **টুলকিট**: জাস্ট লিখবেন \`state.user.address.code = 12\`। বাকি সব ইমার দেখবে।

### উত্তম অনুশীলন
শুধুমাত্র টুলকিটের রিডিউসার ব্লকের ভেতরেই এই ডিরেক্ট মিউটেশন কোড লিখুন। অন্য কোথাও যেমন কম্পোনেন্টে বা কাস্টম অ্যাকশনে সরাসরি অবজেক্ট মডিফাই করবেন না।

### সাধারণ ভুলসমূহ
ড্রাফট মিউটেট করার সাথে সাথে রিডিউসারের শেষে রিটার্ন স্টেট ভ্যালু অ্যাড করা। ইমারে হয় সরাসরি মিউটেট করতে হবে, না হয় সম্পূর্ণ নতুন অবজেক্ট রিটার্ন করতে হবে, একসাথে দুটি করা যাবে না।

### কোড উদাহরণ
\`\`\`typescript


// Todo {
  id: string;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    // ১. অ্যারেতে সরাসরি পুশ করা (ইমারে নিরাপদ)
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    // ২. অবজেক্ট প্রপার্টি সরাসরি টগল করা (ইমারে নিরাপদ)
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
\`\`\``
  },
  {
    id: "state-query-15",
    title: "What is TanStack Query (React Query), and what primary problems does it solve?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","React Query","Server State","Data Fetching"],
    enAnswer: "TanStack Query is a robust data-fetching and state management library for web applications. It solves primary server-state issues including automatic caching, request deduplication, background data refetching, managing loading/error states, garbage collection, and synchronization.",
    bnAnswer: "TanStack Query (React Query) হলো ওয়েব অ্যাপ্লিকেশনের জন্য ডাটা ফেচিং ও স্টেট ম্যানেজমেন্ট লাইব্রেরি। এটি সার্ভার স্টেটের মূল সমস্যাসমূহ যেমন স্বয়ংক্রিয় ক্যাশিং, ডুপ্লিকেট রিকোয়েস্ট ফিল্টারিং, ব্যাকগ্রাউন্ড ডাটা রি-ফেচিং, এরর ও লোডিং ট্র্যাকিং সমাধান করে।",
    enExplanation: `### Explanation
Most global state managers (like Redux or Zustand) are designed for client state (e.g., UI modals, sidebar states, user theme inputs). Server state is different:
- It is located on a remote database/server.
- It requires async APIs to fetch and update.
- It is shared and can be mutated by other active users.

**Problems solved by TanStack Query**:
1. **Automatic Caching**: Fetched data is cached globally. Subsequent component mounts retrieve cached details instantly without loading screens.
2. **Deduplication**: If 3 nested components call the same API simultaneously, TanStack Query aggregates them into a single HTTP network request.
3. **Background Refetching**: Automatically verifies if data is stale and triggers a silent refetch when the window gains focus or network reconnects.
4. **Out-of-box status hooks**: Eliminates manual writing of loading, error, and success state variables.

### Real-World Example
In a stock dashboard app, stock pricing changes constantly.
- Without TanStack Query, you write custom \`useEffect\` hooks with timers, handle client connection drops, and manage cache expiry.
- With TanStack Query, you call \`useQuery('stocks', fetchStocks, { refetchInterval: 5000 })\` and the library automatically handles caching, refetching, and connectivity checks.

### Best Practice
Do not store server-returned API data in local client stores like Redux or Zustand. Use TanStack Query to manage server state and keep Redux/Zustand dedicated strictly to local client-side configuration states.

### Common Mistakes
Manually saving fetched query data to a local React \`useState\` or a global Zustand store upon fetch success. This creates duplicate sources of truth and defeats the automatic caching updates.

### Code Example
\`\`\`typescript


async function fetchPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export default function PostsList() {
  // TanStack Query automatically manages caching, loading, and error states!
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading articles...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post: any) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অধিকাংশ গ্লোবাল স্টেট লাইব্রেরি (যেমন Redux বা Zustand) মূলত ক্লায়েন্ট স্টেট (যেমন থিম টগল, মেনু ওপেন/ক্লোজ) সামলাতে তৈরি। কিন্তু সার্ভার স্টেট সম্পূর্ণ ভিন্ন জিনিস:
- এটি রিমোট ডাটাবেজে থাকে এবং ফেচ করার জন্য এসিনক্রোনাস এপিআই রিকোয়েস্টের দরকার হয়।
- অন্য কোনো ইউজার ব্যাকগ্রাউন্ডে এটি পরিবর্তন করে দিতে পারে।

**TanStack Query যেসব সমস্যার সমাধান দেয়**:
১. **অটোমেটিক ক্যাশিং**: এপিআই থেকে আনা ডাটা স্টোর করে রাখে যাতে পরে অন্য পেজে গেলে রিলোড হওয়া ছাড়াই ডাটা চলে আসে।
২. **ডুপ্লিকেট রিকোয়েস্ট ডিডুপ্লিকেট করা**: একই এপিআই ৩টি কম্পোনেন্ট একসাথে কল করলে ব্যাকগ্রাউন্ডে নেটওয়ার্ক হিট একবারই যাবে।
৩. **ব্যাকগ্রাউন্ড রি-ফেচিং**: ইউজার উইন্ডো পরিবর্তন করে আবার ব্রাউজারে ফিরলে এটি ডাটা ব্যাকগ্রাউন্ডে রিলোড করে আপডেট করে নেয়।
৪. **লোডিং/এরর ট্র্যাকিং**: প্রতি এপিআই কলের জন্য ম্যানুয়ালি লোডিং বা এরর স্টেট ভেরিয়েবল বানাতে হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার বাজারের লাইভ প্রডাক্ট রেট ট্র্যাকিং প্রজেক্টে এপিআই ডাটা নিয়মিত আপডেট করতে হয়। সাধারণ রিঅ্যাক্টে কোড লিখলে টাইমআউট সেট ও কানেকশন ফেইলর ডিটেক্ট করতে অনেক কোড লিখতে হতো। TanStack Query দিয়ে এটি এক লাইনে হ্যান্ডেল করা সম্ভব।

### উত্তম অনুশীলন
সার্ভার থেকে প্রাপ্ত ডাটা কখনো গ্লোবাল স্টেট ম্যানেজার (যেমন Redux বা Zustand)-এ সেভ করে রাখবেন না। এপিআই ডাটা সরাসরি TanStack Query-কে ম্যানেজ করতে দিন।

### সাধারণ ভুলসমূহ
এপিআই ফেচ করার পর তা আবার জোর করে \`useEffect\` দিয়ে Zustand স্টোরে সেভ করে রাখা। এতে ডুপ্লিকেট সোর্স তৈরি হয় এবং কোয়েরি ক্যাশিং সিস্টেম অকেজো হয়ে যায়।

### কোড উদাহরণ
\`\`\`typescript


async function fetchPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export default function PostsList() {
  // TanStack Query স্বয়ংক্রিয়ভাবে লোডিং ও এরর হ্যান্ডেল করে
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading articles...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post: any) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
\`\`\``
  },
  {
    id: "state-query-16",
    title: "How do you initialize the Query Client and wrap your application with QueryClientProvider?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","QueryClient","QueryClientProvider","React Setup"],
    enAnswer: "To initialize TanStack Query, instantiate the QueryClient class at the root level of your project. Then, wrap your root component tree inside the QueryClientProvider component, passing the initialized query client instance as the client prop.",
    bnAnswer: "TanStack Query সেটআপ করতে প্রথমে প্রোজেক্টের রুট লেভেলে QueryClient ক্লাসের একটি ইনস্ট্যান্স তৈরি করতে হয়। এরপর QueryClientProvider কম্পোনেন্ট দিয়ে রুট কম্পোনেন্ট ট্রি মুড়ে দিয়ে client প্রপসে তৈরি করা ইনস্ট্যান্সটি পাস করতে হয়।",
    enExplanation: `### Explanation
Setting up TanStack Query requires registering the context provider at the top of your component hierarchy:

1. **\`QueryClient\` Instance**:
   - Holds the cache registry and manages query and mutation schedules globally.
   - You can pass global default configuration parameters inside the constructor (like custom \`staleTime\` or default \`retry\` limits).

2. **\`QueryClientProvider\`**:
   - A React Context Provider that distributes the \`QueryClient\` instance to all child hooks.
   - All components calling \`useQuery\` or \`useMutation\` must be nested inside this provider.

### Real-World Example
In a React SPA, you instantiate the \`QueryClient\` inside \`main.tsx\` or \`App.tsx\`. You wrap the parent route layouts with the provider so that subcomponents like \`Profile.tsx\` or \`Dashboard.tsx\` can run data query commands securely.

### Best Practice
Instantiate the \`QueryClient\` outside the component render cycle (or inside a React state if using SSR frameworks like Next.js) to prevent the cache from being wiped out and recreated if the root component re-renders.

### Common Mistakes
Instantiating \`const queryClient = new QueryClient()\` inside the render body of a functional component without any memoization, causing cache purges on every parent update.

### Code Example
\`\`\`typescript
// App.tsx


import PostsList from './PostsList';

// 1. Initialize the query client (outside the component render function)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes default stale time
      retry: 2, // Retry failed fetch requests twice before showing error
    },
  },
});

export default function App() {
  return (
    // 2. Wrap the application tree
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <h1>My Dashboard</h1>
        <PostsList />
      </div>
      {/* Optional: Add developer tools floating panel */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
TanStack Query সেটআপ করতে রুট ফাইলে এর প্রোভাইডার ডিক্লেয়ার করা আবশ্যক:

১. **\`QueryClient\` ইনস্ট্যান্স**:
   - এটি গ্লোবাল ক্যাশ মেমোরি ও কনফিগারেশন হোল্ড করে।
   - কনস্ট্রাক্টরের ভেতর গ্লোবাল সেটিংস (যেমন রি-ট্রাই সংখ্যা বা স্টেল টাইম) কাস্টমাইজ করা যায়।

২. **\`QueryClientProvider\`**:
   - এটি রিঅ্যাক্ট কন্টেক্সট প্রোভাইডার যা চাইল্ড কম্পোনেন্টগুলোতে কুয়েরি অবজেক্ট পাস করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি রিঅ্যাক্ট প্রজেক্টে এপিআই ডাটা ক্যাশ সচল রাখতে \`App.tsx\` বা \`main.tsx\` ফাইলে \`QueryClient\` তৈরি করে পুরো ইউআই ট্রি প্রোভাইডার দিয়ে মুড়ে দেওয়া হয় যাতে সব চাইল্ড পেজ ফেচ মেথড এক্সেস করতে পারে।

### উত্তম অনুশীলন
\`new QueryClient()\` কম্পোনেন্ট রেন্ডার স্কোপের বাইরে ডিক্লেয়ার করুন। এটি রুট পেজ ভুলবশত রি-রেন্ডার হলেও পূর্বের ডাউনলোড করা ক্যাশ ডাটা ডিলিট হতে দেয় না।

### সাধারণ ভুলসমূহ
ইনস্ট্যান্স তৈরির কোডটি সরাসরি কম্পোনেন্ট বডির ভেতর রাখা, যার ফলে রুট পেজ রেন্ডার হলে সম্পূর্ণ মেমোরি ক্যাশ বার বার রিসেট হতে থাকে।

### কোড উদাহরণ
\`\`\`typescript
// App.tsx


import PostsList from './PostsList';

// ১. কুয়েরি ক্লায়েন্ট ইনিশিয়ালাইজ করা (রেন্ডারের বাইরে)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // ৫ মিনিট স্টেল টাইম
      retry: 2, // এপিআই ফেইল করলে ২ বার রি-ট্রাই করবে
    },
  },
});

export default function App() {
  return (
    // ২. প্রোভাইডার দিয়ে র্যাপ করা
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <h1>My Dashboard</h1>
        <PostsList />
      </div>
      {/* অপশনাল: ডেভটুলস প্যানেল */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
\`\`\``
  },
  {
    id: "state-query-17",
    title: "What is the difference between client state and server state in web applications?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Architecture","Client State","Server State","Design Patterns"],
    enAnswer: "Client state is local data owned and managed entirely by the browser application (e.g. active tabs, modal visibility). Server state is remote data owned by a server or database, requiring asynchronous requests to fetch, mutate, or synchronize, and can change independently of the client.",
    bnAnswer: "ক্লায়েন্ট স্টেট হলো ব্রাউজার অ্যাপ্লিকেশনের সম্পূর্ণ নিজস্ব লোকাল ডাটা (যেমন: ওপেন মডাল, ডার্ক মোড)। আর সার্ভার স্টেট হলো রিমোট ডাটা যা এপিআই সার্ভার বা ডাটাবেজে থাকে এবং যার রিড ও রাইট অপারেশনের জন্য এসিনক্রোনাস রিকোয়েস্ট দরকার হয়।",
    enExplanation: `### Explanation
Separating client state from server state is the key to clean front-end architecture:

1. **Client State**:
   - **Ownership**: The browser application owns it.
   - **Latency**: Instantly accessible and synchronous.
   - **Persistence**: Exists only as long as the user sessions lasts or is stored locally (localStorage).
   - **Examples**: Dark/Light mode theme state, active sidebar menu tab, whether a confirm modal overlay is visible.

2. **Server State**:
   - **Ownership**: Remote servers and databases own it.
   - **Latency**: Asynchronous access adding network response delay.
   - **Persistence**: Exists persistently outside the client.
   - **Concurrency**: Can be modified by other users in real time.
   - **Examples**: User profiles database entries, shopping cart catalog inventories, comments threads.

### Real-World Example
On an online shop checkout page:
- Whether the "Promo Code Input Box" is collapsed is **Client State** (managed via Zustand or simple \`useState\`).
- The actual list of products in the cart and whether the entered promo code is valid are **Server State** (fetched and synchronized using TanStack Query).

### Best Practice
Do not use a single monolithic store (like one huge Redux store) to house both client UI toggles and server database lists. Let client states reside in Zustand or local React state, and leave server state handling to TanStack Query/RTK Query.

### Common Mistakes
Treating server state like client state by copying API payloads into global Redux stores and expecting manual cache invalidations to keep database states synchronized.

### Code Example
\`\`\`typescript
// Combining both states in one component cleanly




export function UserListPanel() {
  // 1. Client State: Local UI toggle (Synchronous)
  const [showEmails, setShowEmails] = useState(false);

  // 2. Server State: Remote database query (Asynchronous)
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div>
      <button onClick={() => setShowEmails(!showEmails)}>
        Toggle Emails Display
      </button>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.name} {showEmails && \`(\${u.email})\`}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
স্টেটের ধরন অনুযায়ী সঠিক টুলস নির্বাচন করা আধুনিক ফ্রন্টএন্ড ডিজাইনের মূল শর্ত:

১. **ক্লায়েন্ট স্টেট (Client State)**:
   - **মালিকানা**: শুধুমাত্র ইউজারের ব্রাউজার সেশন এটি নিয়ন্ত্রণ করে।
   - **ল্যাটেন্সি**: তাৎক্ষণিকভাবে এক্সেস করা যায় (সিনক্রোনাস)।
   - **উদাহরণ**: সাইডবার ওপেন/ক্লোজ, থিম সেটিংস, ফর্ম ইনপুটের কারেন্ট ভ্যালু।

২. **সার্ভার স্টেট (Server State)**:
   - **মালিকানা**: রিমোট ডাটাবেজের ওপর নির্ভরশীল।
   - **ল্যাটেন্সি**: নেটওয়ার্ক স্পিডের কারণে ডাটা পেতে কিছুটা সময় লাগে (এসিনক্রোনাস)।
   - **উদাহরণ**: প্রডাক্ট লিস্ট, পেমেন্ট হিস্ট্রি, ব্লগ কমেন্টস।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বুকমার্কিং পেজে:
- "ডার্ক মোড সক্রিয় আছে কি না" এটি হলো **ক্লায়েন্ট স্টেট** (সহজ \`useState\` বা Zustand দিয়ে হ্যান্ডেল করা হয়)।
- "ইউজার কোন কোন পেজ বুকমার্ক করে রেখেছেন" তা হলো **সার্ভার স্টেট** (ডাটাবেজ এপিআই থেকে TanStack Query দিয়ে নিয়ে আসা হয়)।

### উত্তম অনুশীলন
ইউজার ইন্টারফেসের লোকাল টগলগুলো রিডাক্স বা জুস্ট্যান্ড স্টোরে রাখুন আর ডাটাবেজ এপিআই এর কাজগুলো টানস্ট্যাক কুয়েরিকে সামলাতে দিন।

### সাধারণ ভুলসমূহ
এপিআই এর রেসপন্স ডাটা এনে গ্লোবাল রিডাক্স স্টোরে সেভ করে রাখা এবং পরে সার্ভারে ডাটা ডিলিট হলে ক্লায়েন্ট সাইডের ডাটা সিঙ্ক করার জন্য বিশাল আকারের কোড লেখা।

### কোড উদাহরণ
\`\`\`typescript
// ২টি স্টেট একসাথে ব্যবহার করার সঠিক উদাহরণ




export function UserListPanel() {
  // ১. ক্লায়েন্ট স্টেট: লোকাল ইউআই টগল (সিনক্রোনাস)
  const [showEmails, setShowEmails] = useState(false);

  // ২. সার্ভার স্টেট: ডাটাবেজ কোয়েরি (এসিনক্রোনাস)
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div>
      <button onClick={() => setShowEmails(!showEmails)}>
        Toggle Emails Display
      </button>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.name} {showEmails && \`(\${u.email})\`}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-18",
    title: "How do you fetch data using the useQuery hook in TanStack Query?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","useQuery","Data Fetching","API Call"],
    enAnswer: "To fetch data, call the useQuery hook, passing an configuration object containing: 1. A unique queryKey (array representing the fetch dependency), and 2. A queryFn (an async function returning a promise that resolves the fetched data).",
    bnAnswer: "ডাটা ফেচ করতে useQuery হুকটি কল করতে হয় এবং এর প্যারামিটারে ১. একটি ইউনিক queryKey (অ্যারে যা ডাটা ক্যাশের চাবিকাঠি) এবং ২. একটি queryFn (এসিনক্রোনাস ফাংশন যা ডাটা প্রমিস রিটার্ন করে) পাস করতে হয়।",
    enExplanation: `### Explanation
The \`useQuery\` hook is the core API for loading read-only data from the server:

- **\`queryKey\` (Array)**:
  - Serves as the unique cache identifier. If you fetch \`['posts', userId]\`, TanStack Query stores the result under that key namespace.
  - Acts as a dependency array: if a variable inside the queryKey changes (e.g., \`userId\` changes), TanStack Query automatically refetches the data.
- **\`queryFn\` (Function returning Promise)**:
  - The actual asynchronous operation. It must resolve the data or throw an error.

### Real-World Example
When loading profile configurations, calling \`useQuery({ queryKey: ['profile'], queryFn: fetchProfile })\` fetches data on mount. If the user navigates away and returns, the profile displays instantly from cache while a background refresh runs silently.

### Best Practice
Always return the resolved response from your \`queryFn\`. If using Axios, return \`response.data\`, not the entire wrapper response. Make sure to throw errors explicitly if using the browser's raw \`fetch\` API when \`res.ok\` is false.

### Common Mistakes
Forgetting that raw \`fetch()\` does not throw errors on 404 or 500 statuses. You must check \`res.ok\` and throw the error manually inside the \`queryFn\` so that TanStack Query can trigger error states.

### Code Example
\`\`\`typescript


// Post {
  id: number;
  title: string;
}

// Data fetching helper
async function fetchPostDetail(postId: number): Promise<Post> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
  
  // fetch() needs manual error throwing to trigger useQuery's isError!
  if (!res.ok) {
    throw new Error('Failed to fetch post details');
  }
  return res.json();
}

export function PostDetail({ id }: { id: number }) {
  const { data: post, isLoading, isError, error } = useQuery({
    // queryKey dependencies: will refetch automatically when id changes!
    queryKey: ['post', id],
    queryFn: () => fetchPostDetail(id),
  });

  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error loading data: {error.message}</div>;

  return (
    <article>
      <h2>{post?.title}</h2>
    </article>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`useQuery\` হুক এপিআই থেকে রিড-অনলি ডাটা লোড ও ট্র্যাক করার প্রধান ফাংশন:

- **\`queryKey\` (অ্যারে)**:
  - এটি ডাটা ক্যাশ ম্যাপিংয়ের কী (Key) হিসেবে কাজ করে।
  - এটি একটি ডিপেন্ডেন্সি অ্যারে। এর ভেতরের কোনো ভেরিয়েবল (যেমন \`userId\`) চেঞ্জ হলে কুয়েরিটি অটোমেটিক নতুন ডাটা ফেচ করে নেয়।
- **\`queryFn\` (ফাংশন)**:
  - এটি মূলত এসিনক্রোনাস এপিআই রিকোয়েস্ট চালায় এবং ডাটা রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্লগ আর্টিকেলে ইউজারের সিলেক্ট করা পোস্ট আইডি অনুযায়ী ডাটা লোড করতে হবে। \`useQuery\` তে \`queryKey: ['post', postId]\` পাস করলে, প্রতিবার ইউজার অন্য কোনো পোস্টে ক্লিক করলেই নতুন আইডি অনুযায়ী ডাটা রিলোড হয়ে চলে আসবে।

### উত্তম অনুশীলন
ভ্যানিলা \`fetch\` ব্যবহার করলে মনে রাখুন যে 404 বা 500 রেসপন্সেও এরর থ্রো হয় না। তাই ম্যানুয়ালি \`if (!res.ok) throw new Error()\` চেক করে নিতে হবে, অন্যথায় টানস্ট্যাক কুয়েরি এরর চিহ্নিত করতে পারবে না।

### সাধারণ ভুলসমূহ
\`queryKey\`-তে ডাইনামিক ডিপেন্ডেন্সি ভেরিয়েবল (যেমন: \`id\`) লিখতে ভুলে যাওয়া, যার ফলে আইডি পরিবর্তন হলেও ব্রাউজার সর্বদা আগের আইডির ক্যাশ ডাটাই শো করতে থাকে।

### কোড উদাহরণ
\`\`\`typescript


// Post {
  id: number;
  title: string;
}

// এপিআই ফেচার ফাংশন
async function fetchPostDetail(postId: number): Promise<Post> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
  
  // errors ম্যানুয়ালি থ্রো করা হলো
  if (!res.ok) {
    throw new Error('Failed to fetch post details');
  }
  return res.json();
}

export function PostDetail({ id }: { id: number }) {
  const { data: post, isLoading, isError, error } = useQuery({
    // ডিপেন্ডেন্সি অ্যারে: id পরিবর্তন হলে অটো এপিআই কল হবে
    queryKey: ['post', id],
    queryFn: () => fetchPostDetail(id),
  });

  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error loading data: {error.message}</div>;

  return (
    <article>
      <h2>{post?.title}</h2>
    </article>
  );
}
\`\`\``
  },
  {
    id: "state-query-19",
    title: "Why are query keys structured as arrays in TanStack Query, and what is their role in caching?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","Query Keys","Caching","Data Dependencies"],
    enAnswer: "Query keys are structured as arrays to support hierarchical caching and dynamic dependency mapping. They serve as cache keys: TanStack Query hashes the array elements to store and retrieve cache values, and automatically refetches data when any element inside the array changes.",
    bnAnswer: "টানস্ট্যাক কুয়েরিতে query keys-কে অ্যারে হিসেবে রাখার কারণ হলো এটি হায়ারার্কিকাল ক্যাশিং এবং ডাইনামিক ডিপেন্ডেন্সি ট্র্যাকিং সাপোর্ট করে। এটি ক্যাশের চাবি হিসেবে কাজ করে এবং অ্যারের ভেতরের উপাদান বদলালে স্বয়ংক্রিয়ভাবে নতুন ডাটা ফেচ করে।",
    enExplanation: `### Explanation
In older versions of React Query, query keys could be strings, but they are now strictly standardized as arrays:
- **Hashing**: TanStack Query serializes and hashes the array elements (objects, numbers, strings) to create a deterministic cache key. Order matters for array items, but object keys are hashed order-independently.
- **Dynamic Scopes**: If your fetch depends on variables like page number, sorting flags, or search terms, they must be part of the array: \`['products', category, { page, limit }]\`.
- **Granular Purging**: Arranging keys hierarchically lets you invalidate cache subsets. Invalidation triggers like \`queryClient.invalidateQueries({ queryKey: ['products'] })\` will match and invalidate *all* sub-keys under products (like \`['products', 'electronics']\`, \`['products', 'clothing', page 2]\`).

### Real-World Example
In a product catalog with category search and paging:
- Key layout: \`['products', activeCategory, currentPage]\`.
- If the user changes page from 1 to 2, the query key changes, and TanStack Query runs the fetch command for page 2.
- When you add a product, invalidating \`['products']\` purges all categories and pages cache instantly.

### Best Practice
Organize keys from generic to specific: \`[category, sub-category, identifiers, configs]\`. Ensure any parameter used inside the \`queryFn\` is also included in the \`queryKey\` array to keep the cache synchronized.

### Common Mistakes
Using variables inside \`queryFn\` (like a local page index state) but omitting them from the \`queryKey\`. The query won't update when the page variable changes, leaving the UI static.

### Code Example
\`\`\`typescript


export function ProductCatalog({ category, page }: { category: string; page: number }) {
  const { data: products } = useQuery({
    // Correct setup: category and page are registered as dependencies
    queryKey: ['products', category, { page }],
    queryFn: async () => {
      const res = await fetch(\`/api/products?category=\${category}&page=\${page}\`);
      return res.json();
    }
  });

  return <div>Catalog Display</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরিতে কোয়েরি কি (Query Keys) সবসময় অ্যারে হিসেবে ডিক্লেয়ার করতে হয়:
- **ক্যাশ আইডেন্টিফায়ার**: এটি ডাটা সেভ করার জন্য হ্যাশ কি তৈরি করে। অ্যারের উপাদানের ক্রম গুরুত্বপূর্ণ, কিন্তু অবজেক্ট প্রপার্টির ক্রম হ্যাশ মেলাতে বাঁধা দেয় না।
- **ডিপেন্ডেন্সি ট্র্যাকিং**: এপিআই ডাটায় পেজ বা ফিল্টারিং ভেরিয়েবল থাকলে তা অ্যারের অংশ হতে হবে: \`['products', category, page]\`।
- **হায়ারার্কিকাল ক্লিয়ারেন্স**: প্যারেন্ট কি ইনভ্যালিড করলে চাইল্ড কি-সমূহ অটো ডিলিট হয়। যেমন \`['products']\` ইনভ্যালিড করলে \`['products', 'shoes']\` বা \`['products', 'shirts', page 1]\` সব ক্যাশ একসাথে আপডেট হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ই-কমার্স সাইটে প্রডাক্টের তালিকা ফিল্টারিং:
- ক্যাশ কি বিন্যাস: \`['products', category, page]\`।
- ইউজার ক্যাটাগরি 'বই' থেকে 'জামা'তে বদলালে কুয়েরি কি চেঞ্জ হবে এবং এপিআই রান হয়ে জামার তালিকা শো করবে।

### উত্তম অনুশীলন
কুয়েরি কি সবসময় সাধারণ বা প্যারেন্ট নাম থেকে শুরু করে ডাইনামিক ফিল্টারে সাজান। এপিআই ফাংশনের ভেতরের যেকোনো ডাইনামিক ভেরিয়েবল অবশ্যই এই অ্যারেতে রেজিস্টার করুন।

### সাধারণ ভুলসমূহ
ফেচিং ফাংশনে ডাইনামিক ভেরিয়েবল (যেমন \`page\`) ব্যবহার করা কিন্তু কুয়েরি কি অ্যারেতে তা না দেওয়া। এর ফলে পেজ নাম্বার চেঞ্জ করলেও নতুন কোনো ডাটা লোড হবে না।

### কোড উদাহরণ
\`\`\`typescript


export function ProductCatalog({ category, page }: { category: string; page: number }) {
  const { data: products } = useQuery({
    // ক্যাটাগরি ও পেজ ডিপেন্ডেন্সি রেজিস্টার করা হয়েছে
    queryKey: ['products', category, { page }],
    queryFn: async () => {
      const res = await fetch(\`/api/products?category=\${category}&page=\${page}\`);
      return res.json();
    }
  });

  return <div>Catalog Display</div>;
}
\`\`\``
  },
  {
    id: "state-query-20",
    title: "What are the main statuses returned by useQuery in TanStack Query, and how are they used?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","useQuery","Query Status","Loading States"],
    enAnswer: "The main statuses returned by useQuery are: isLoading (true on first mount, no cache data), isFetching (true whenever network request runs, including background fetches), isError (true if queryFn throws), and isSuccess (true if data is successfully resolved).",
    bnAnswer: "useQuery থেকে পাওয়া মূল স্ট্যাটাসগুলো হলো: isLoading (প্রথমবার ডাটা লোড করার সময় true থাকে), isFetching (ব্যাকগ্রাউন্ড রি-ফেচ সহ যেকোনো নেটওয়ার্ক হিট চলাকালীন true থাকে), isError (এপিআই এরর হলে true হয়) এবং isSuccess (ডাটা সফলভাবে পাওয়া গেলে true হয়)।",
    enExplanation: `### Explanation
TanStack Query splits the query request lifecycle into precise states:

1. **\`isLoading\` (or \`status === 'pending'\`)**:
   - True when the query has no cached data and is fetching for the first time.
   - Use this to display screen skeleton loaders.

2. **\`isFetching\`**:
   - True whenever the query is executing a network fetch, even if cached data is already available.
   - Useful for rendering subtle background reload indicators (e.g., small refresh spinners).

3. **\`isError\` (or \`status === 'error'\`)**:
   - True if the \`queryFn\` threw an exception. The actual error details reside in \`error\`.

4. **\`isSuccess\` (or \`status === 'success'\`)**:
   - True if the request successfully resolves, making \`data\` available.

### Real-World Example
In a news feed reader app:
- First launch: \`isLoading\` is true, displaying placeholder card layouts.
- User clicks refresh: \`isFetching\` becomes true, displaying a small spinner in the corner while keeping current news cards visible so the layout doesn't jump.

### Best Practice
Check \`isLoading\` first to display layouts when data is empty. Use \`isFetching\` for secondary styling indicators to keep users notified of background updates without interrupting their view.

### Common Mistakes
Using \`isLoading\` to check for any fetch operation, which causes the entire UI screen to clear and flicker back to a loading spinner on every background refresh, degrading the user experience.

### Code Example
\`\`\`typescript


export function NewsFeed() {
  const { data: news, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => fetch('/api/news').then(res => res.json()),
  });

  // 1. Initial Load: block UI with full page loader
  if (isLoading) return <div>Initializing News Feed...</div>;

  // 2. Error State
  if (isError) return <div>Failed to load: {error instanceof Error ? error.message : 'Error'}</div>;

  return (
    <div>
      {/* 3. Background Refetching Indicator (keeps UI intact but shows sync state) */}
      {isFetching && <div className="sync-banner">Syncing with server...</div>}
      
      <main>
        {news.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </main>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরি স্টেট ট্র্যাকিং সহজ করতে কয়েকটি নির্দিষ্ট মেম্বার ভ্যালু রিটার্ন করে:

১. **\`isLoading\` (বা \`pending\`)**:
   - যখন প্রথমবার পেজ লোড হচ্ছে এবং ক্যাশে কোনো ডাটা সেভ নেই তখন এটি \`true\` থাকে। এটি ফুল স্ক্রিন কঙ্কাল (skeleton loader) দেখাতে লাগে।

২. **\`isFetching\`**:
   - ব্যাকগ্রাউন্ডে নেটওয়ার্ক রিকোয়েস্ট এক্টিভ থাকলেই এটি \`true\` হয়, ক্যাশে ডাটা থাকলেও। এটি ব্যাকগ্রাউন্ড সিঙ্ক নোটিফিকেশন দেখাতে কাজ করে।

৩. **\`isError\`**:
   - এপিআই কল ফেইল করলে এটি \`true\` হয় এবং এরর কন্টেন্ট \`error\` ভেরিয়েবলে পাওয়া যায়।

৪. **\`isSuccess\`**:
   - রিকোয়েস্ট সফলভাবে ডাটা ফেচ করতে সক্ষম হলে এটি \`true\` হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক বা লিংকডইন ফিডের মতো অ্যাপসে:
- প্রথমবার অ্যাপ খুললে \`isLoading\` অন হয়ে প্লেসহোল্ডার ডামি বক্স দেখায়।
- পেজ স্ক্রল করার সময় ব্যাকগ্রাউন্ডে ডাটা রি-ফেচ হলে \`isFetching\` অন হয়, যা কোণায় ছোট রিফ্রেশ ইন্ডিকেটর দেখায় কিন্তু স্ক্রিনের কারেন্ট পোস্টগুলো হাইড করে না।

### উত্তম অনুশীলন
ইউজার এক্সপেরিয়েন্স ঠিক রাখতে প্রথম লোডে \`isLoading\` এবং ব্যাকগ্রাউন্ড ডাটা আপডেটে \`isFetching\` ব্যবহার করুন যাতে ইউজার পেজ ফ্লিকারিং এর শিকার না হন।

### সাধারণ ভুলসমূহ
ব্যাকগ্রাউন্ড ডাটা চেক করার জন্য \`isFetching\` এর পরিবর্তে \`isLoading\` ব্যবহার করা, যার ফলে প্রতিবার রুট সিঙ্ক হওয়ার সময় পুরো স্ক্রিন ক্লিয়ার হয়ে লোডিং এনিমেশন চলে আসে।

### কোড উদাহরণ
\`\`\`typescript


export function NewsFeed() {
  const { data: news, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => fetch('/api/news').then(res => res.json()),
  });

  // ১. প্রাথমিক লোড: ফুল পেজ লোডার
  if (isLoading) return <div>Initializing News Feed...</div>;

  // ২. এরর স্টেট
  if (isError) return <div>Failed to load: {error instanceof Error ? error.message : 'Error'}</div>;

  return (
    <div>
      {/* ৩. ব্যাকগ্রাউন্ড রি-ফেচ ইন্ডিকেটর (স্ক্রিন হাইড না করে সিঙ্ক স্ট্যাটাস দেখাবে) */}
      {isFetching && <div className="sync-banner">Syncing with server...</div>}
      
      <main>
        {news.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </main>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-21",
    title: "How do you perform data mutations using the useMutation hook in TanStack Query?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","useMutation","Data Mutations","Write Operations"],
    enAnswer: "To perform data mutations (POST/PUT/DELETE requests), invoke the useMutation hook, passing a mutationFn async function. Execute the mutation in components by calling the mutate() function returned by the hook, optionally passing input variables.",
    bnAnswer: "ডাটা মিউটেশন (ডাটাবেজ রাইট, এডিট বা ডিলিট) করতে useMutation হুক ব্যবহার করতে হয় যেখানে একটি mutationFn পাস করা হয়। কম্পোনেন্টে অ্যাকশনটি ট্রিগার করতে হুক থেকে পাওয়া mutate() ফাংশনটি কল করা হয়।",
    enExplanation: `### Explanation
While \`useQuery\` is meant for GET requests, **\`useMutation\`** handles data modifications (mutations):
- **\`mutationFn\`**: The async API helper that changes data on the server (e.g., \`axios.post\`).
- **Callbacks**:
  - \`onSuccess\`: Triggers when mutation completes successfully. Often used to invalidate query caches so components reload fresh data.
  - \`onError\`: Triggers if the mutation fails.
  - \`onMutate\`: Triggers *before* the request starts (ideal for optimistic updates).

Unlike queries, mutations do not run automatically. You must call the returned \`mutate\` function manually.

### Real-World Example
In a todo app, creating a new todo requires a mutation:
- Define \`useMutation({ mutationFn: createTodo })\`.
- When the user clicks "Submit", run \`mutate(todoText)\`.
- In \`onSuccess\`, invalidate the \`['todos']\` cache so the UI updates to show the new todo in the list.

### Best Practice
Always run \`queryClient.invalidateQueries\` inside the \`onSuccess\` callback of a mutation to force affected pages to pull the updated data immediately.

### Common Mistakes
Forgetting that \`mutate\` is asynchronous but does not return a Promise directly. If you need to wait for a promise inside a try-catch block, call \`mutateAsync\` instead of \`mutate\`.

### Code Example
\`\`\`typescript


async function createNewTodo(text: string) {
  const res = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json();
}

export function AddTodoInput() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createNewTodo,
    onSuccess: () => {
      // Invalidate and refetch the todos query list instantly
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('todoText') as string;
    
    if (text) {
      mutate(text); // Trigger the mutation
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todoText" type="text" disabled={isPending} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`useQuery\` শুধুমাত্র ডাটা রিড করতে সাহায্য করে কিন্তু ডাটা পরিবর্তন (POST, PUT, DELETE) করতে **\`useMutation\`** হুক ব্যবহার করতে হয়:
- **\`mutationFn\`**: সার্ভার ডাটা পরিবর্তনের কাস্টম এসিনক্রোনাস এপিআই ফাংশন।
- **কলব্যাকসমূহ**:
  - \`onSuccess\`: মিউটেশন সফল হলে রান করে (সাধারণত ক্যাশ ক্লিয়ার করতে ব্যবহৃত হয়)।
  - \`onError\`: মিউটেশন ফেইল করলে রান করে।
  - \`onMutate\`: মিউটেশন ফায়ারিংয়ের শুরুতে ট্রিগার হয়।

কুয়েরির মতো এটি অটো রান হয় না, বাটনে ক্লিকের মাধ্যমে ম্যানুয়ালি \`mutate\` কল করে এটি ফায়ার করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি সামাজিক যোগাযোগ মাধ্যমে নতুন কমেন্ট অ্যাড করা:
- \`useMutation({ mutationFn: postComment })\` কনফিগ করা হলো।
- ইউজার এন্টার বাটন প্রেস করলে \`mutate(commentText)\` ফায়ার হবে।
- \`onSuccess\` এ \`['comments']\` ক্যাশ কি ইনভ্যালিড করা হবে যাতে ইউজার স্ক্রিনে তার কমেন্টটি সাথে সাথে দেখতে পান।

### উত্তম অনুশীলন
মিউটেশন সফল হওয়ার পর সংশ্লিষ্ট এপিআই কি-সমূহ ইনভ্যালিড (\`invalidateQueries\`) করে দিন যাতে ক্যাশ ডাটা ও রিমোট সার্ভার ডাটা সবসময় সিঙ্ক থাকে।

### সাধারণ ভুলসমূহ
\`mutate\` ব্যবহারের পর রেসপন্স প্রমিস আশা করা। যদি আপনার রিঅ্যাক্ট ফর্ম সাবমিশনে প্রমিস অ্যাওয়েট করা জরুরি হয়, তবে \`mutate\` এর পরিবর্তে \`mutateAsync\` ব্যবহার করতে হবে।

### কোড উদাহরণ
\`\`\`typescript


async function createNewTodo(text: string) {
  const res = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json();
}

export function AddTodoInput() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createNewTodo,
    onSuccess: () => {
      // মিউটেশন শেষে টুডু ক্যাশ ইনভ্যালিড করা হচ্ছে
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('todoText') as string;
    
    if (text) {
      mutate(text); // মিউটেশন ফায়ার করা হলো
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todoText" type="text" disabled={isPending} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
\`\`\``
  },
  {
    id: "state-query-22",
    title: "What is the difference between staleTime and gcTime in TanStack Query?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","staleTime","gcTime","Caching"],
    enAnswer: "staleTime is the duration (in milliseconds) before fetched data is considered stale; fresh data is read from cache without trigger refetching. gcTime (garbage collection time) is the duration inactive query cache data is kept in memory before being cleared.",
    bnAnswer: "staleTime হলো ফেচ করা ডাটা ফ্রেশ থাকার সময়সীমা (মিলিসেকেন্ডে), এর মধ্যে কোনো রিকোয়েস্ট ক্যাশ থেকে রিড হবে। gcTime হলো কোনো কুয়েরি ইনঅ্যাক্টিভ হওয়ার পর সেটি মেমোরি ক্যাশে কতক্ষণ থাকবে তা নির্ধারণ করার সময়সীমা। মেয়াদের পর এটি মেমোরি থেকে মুছে যায়।",
    enExplanation: `### Explanation
Understanding these two values determines cache behavior:

1. **\`staleTime\`**:
   - Default: \`0\`.
   - Meaning: How long does data remain "fresh"?
   - Behavior: If a query runs and the data is fresh (time < \`staleTime\`), TanStack Query returns the cached data *without* making any background API fetch. If stale (time > \`staleTime\`), it returns cached data but starts a background refetch in parallel.

2. **\`gcTime\` (formerly \`cacheTime\` in v4)**:
   - Default: \`5 * 60 * 1000\` (5 minutes).
   - Meaning: How long does data stay in memory when no components are using it (inactive state)?
   - Behavior: When a component unmounts and the query becomes inactive, the garbage collection timer starts. If the component mounts again before \`gcTime\` expires, it loads data from the cache immediately. If it expires, the cache is deleted, and the next mount must show a loading spinner.

### Real-World Example
Suppose \`staleTime = 1 minute\` and \`gcTime = 5 minutes\`:
- User visits Profile page: API fetches user details.
- User leaves Profile page (Profile unmounts): Garbage collection timer starts counting down.
- **Scenario A**: User returns to Profile in 30 seconds. Data is fresh (< 1 min) and in cache. Data displays instantly, no network requests are sent.
- **Scenario B**: User returns in 3 minutes. Data is stale (> 1 min) but in cache (< 5 min). Data displays instantly from cache, but a background network request fetches fresh details.
- **Scenario C**: User returns in 10 minutes. Cache is deleted (> 5 min). User sees a loading spinner while fetching fresh details.

### Best Practice
Keep \`staleTime\` lower than \`gcTime\`. For data that doesn't change often (e.g., config details), set a high \`staleTime\` (e.g., 10 minutes). For real-time feeds, keep \`staleTime\` at \`0\`.

### Common Mistakes
Configuring \`staleTime\` to be greater than \`gcTime\`. If \`gcTime\` is 2 minutes and \`staleTime\` is 5 minutes, the cache will be deleted after 2 minutes of inactivity anyway, rendering the 5-minute stale configuration useless.

### Code Example
\`\`\`typescript


export function ConfigPanel() {
  const { data: config } = useQuery({
    queryKey: ['siteConfig'],
    queryFn: () => fetch('/api/config').then(res => res.json()),
    
    // Custom cache configuration
    staleTime: 1000 * 60 * 10, // Considered fresh for 10 minutes
    gcTime: 1000 * 60 * 30,    // Keep inactive data in memory for 30 minutes
  });

  return <div>Config loaded</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ক্যাশিং অপ্টিমাইজ করতে এই দুটি প্যারামিটার বুদ্বিমত্তার সাথে কনফিগ করতে হয়:

১. **\`staleTime\`**:
   - ডিফল্ট মান: \`0\`।
   - মানে: ডাটা কতক্ষণ পর্যন্ত "তাজা" বা ফ্রেশ থাকবে?
   - আচরণ: ডাটা ফ্রেশ থাকা অবস্থায় (\`staleTime\` এর মধ্যে) পেজে ঢুকলে নেটওয়ার্ক হিট হবে না, ডিরেক্ট ক্যাশ থেকে ডাটা চলে আসবে। মেয়াদ শেষ হলে ক্যাশ ডাটা দেখালেও ব্যাকগ্রাউন্ডে এপিআই কল সচল হবে।

২. **\`gcTime\` (সাবেক \`cacheTime\`)**:
   - ডিফল্ট মান: ৫ মিনিট।
   - মানে: কোনো কম্পোনেন্ট আনমাউন্ট হয়ে কুয়েরি ইনঅ্যাক্টিভ হলে তা মেমোরিতে কতক্ষণ জমা থাকবে?
   - আচরণ: ইনঅ্যাক্টিভ কুয়েরিটি মেমোরি থেকে একদম মুছে ফেলার কাউন্টডাউন। এটি ফুরিয়ে গেলে মেমোরির ক্যাশ ডিলিট হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ধরি, \`staleTime = ১ মিনিট\` এবং \`gcTime = ৫ মিনিট\`:
- ইউজার হোমপেজ থেকে প্রোফাইল পেজে গেলেন: এপিআই ডাটা ক্যাশে ঢুকল। ইউজার আবার হোমপেজে ফিরে আসলেন (প্রোফাইল ইনঅ্যাক্টিভ হলো)।
- **কেস ১**: ৩০ সেকেন্ড পর প্রোফাইলে ফিরলেন। ডাটা তাজা (< ১ মিনিট) এবং মেমোরিতে আছে। কোনো এপিআই কল ছাড়াই সাথে সাথে ডাটা লোড হবে।
- **কেস ২**: ৩ মিনিট পর ফিরলেন। ডাটা পুরনো (> ১ মিনিট) কিন্তু মেমোরিতে আছে (< ৫ মিনিট)। ক্যাশ ডাটা স্ক্রিনে চলে আসবে কিন্তু সাথে সাথে ব্যাকগ্রাউন্ডে রিফ্রেস এপিআই রান হবে।
- **কেস ৩**: ৭ মিনিট পর ফিরলেন। মেমোরি ফাঁকা (> ৫ মিনিট)। ডিরেক্ট লোডিং স্পিনার স্ক্রিনে শো করবে।

### উত্তম অনুশীলন
সবসময় \`staleTime\`-কে \`gcTime\` এর চেয়ে ছোট রাখুন। যে ডাটা খুব একটা বদলায় না (যেমন সেটিংস পেজ), সেটিতে \`staleTime\` ৫-১০ মিনিট দিয়ে রাখুন যাতে অহেতুক ডাটাবেজে হিট না হয়।

### সাধারণ ভুলসমূহ
\`gcTime\`-কে \`staleTime\` এর চেয়ে ছোট রাখা। যেমন gcTime ২ মিনিট ও staleTime ৫ মিনিট রাখলে ২ মিনিট পর ক্যাশ এমনিতেই মুছে যাবে, ফলে ৫ মিনিটের ফ্রেশ টাইমের কোনো গুরুত্বই থাকবে না।

### কোড উদাহরণ
\`\`\`typescript


export function ConfigPanel() {
  const { data: config } = useQuery({
    queryKey: ['siteConfig'],
    queryFn: () => fetch('/api/config').then(res => res.json()),
    
    // কাস্টম ক্যাশ সেটিংস
    staleTime: 1000 * 60 * 10, // ১০ মিনিট পর্যন্ত ডাটা ফ্রেশ থাকবে
    gcTime: 1000 * 60 * 30,    // ইনঅ্যাক্টিভ থাকলে ৩০ মিনিট মেমোরিতে রাখবে
  });

  return <div>Config loaded</div>;
}
\`\`\``
  },
  {
    id: "state-query-23",
    title: "How do you use the persist middleware to persist store data in localStorage or sessionStorage inside a Zustand store?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","Persist Middleware","localStorage","SessionStorage"],
    enAnswer: "To persist store data, wrap your store creation state creator function with the persist() middleware imported from \"zustand/middleware\". Pass a configuration object containing: 1. A unique name key, and 2. An optional storage configuration (defaulting to localStorage).",
    bnAnswer: "Zustand স্টোরে ডাটা স্থায়ী বা লোকালস্টোরেজে সেভ করতে \"zustand/middleware\" থেকে persist মিডলওয়্যার ইম্পোর্ট করে স্টোর ক্রিয়েটর ফাংশনটি র্যাপ করতে হয়। এর কনফিগারেশনে একটি ইউনিক name কী এবং অপশনাল storage প্যারামিটার সেট করতে হয়।",
    enExplanation: `### Explanation
Zustand provides a built-in \`persist\` middleware to automatically synchronize the store state with browser storage:
- **Automatic Sync**: Any changes made via \`set()\` are automatically saved to \`localStorage\` or \`sessionStorage\`.
- **Hydration**: When the application loads, the store is automatically initialized with the saved values from storage.
- **Config**:
  - \`name\`: Represents the storage key (e.g., \`cart-storage\`).
  - \`storage\`: Set custom storage engines (e.g., \`createJSONStorage(() => sessionStorage)\`).

### Real-World Example
In an e-commerce website:
- You want the user's shopping cart items to persist even if they close the browser tab.
- Wrapping the cart store in the \`persist\` middleware ensures items are saved to \`localStorage\`. The next time the user visits, their cart items are instantly populated.

### Best Practice
When working with SSR frameworks like Next.js, always handle hydration mismatch issues by checking if the client has finished loading from storage before rendering state values, or use Zustand's custom hydration triggers.

### Common Mistakes
Forgetting that state values containing non-serializable properties (like class instances or DOM elements) cannot be serialized into JSON storage strings.

### Code Example
\`\`\`typescript



// CartState {
  items: string[];
  addItem: (item: string) => void;
  clearCart: () => void;
}

exports.useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart-storage', // unique key in storage
      storage: createJSONStorage(() => localStorage), // default storage engine
    }
  )
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand-এ ব্রাউজার রিলোড বা ট্যাব ক্লোজ করার পরও ডাটা ধরে রাখতে \`persist\` মিডলওয়্যার ব্যবহৃত হয়:
- **অটো সিঙ্ক**: \`set()\` দিয়ে স্টেট আপডেট হওয়া মাত্র ডাটা অটো লোকালস্টোরেজে সেভ হয়ে যায়।
- **হাইড্রেশন**: পেজ রিফ্রেশ দিলে লোকালস্টোরেজ থেকে ডাটা রিড করে স্টেটকে অটো পপুলেট করে।
- **কনফিগ**:
  - \`name\`: লোকালস্টোরেজের কি (Key) নাম নির্ধারণ করে।
  - \`storage\`: চাইলে \`sessionStorage\` বা কাস্টম স্টোরেজ ম্যাপ করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ওয়েবসাইটে শপিং কার্টের আইটেমগুলো সেভ করে রাখা দরকার যাতে ব্রাউজার বন্ধ করলেও শপিং ব্যাগ ক্লিয়ার না হয়। কার্ট স্টোরটিকে \`persist\` দিয়ে মুড়ে দিলে আইটেমগুলো লোকালস্টোরেজে থেকে যাবে ও পরেরবার ইউজার ওয়েবসাইটে ভিজিট করলে পুনরায় লোড হবে।

### উত্তম অনুশীলন
এসএসআর (SSR) ফ্রেমওয়ার্কে (যেমন Next.js) হাইড্রেশন এরর এড়াতে পেজ মাউন্ট হওয়ার পরেই শুধুমাত্র গ্লোবাল পারসিস্টেড স্টেট ডাটা ইউজার ইন্টারফেসে শো করুন।

### সাধারণ ভুলসমূহ
পারসিস্ট স্টোরের ভেতর নন-সিরিয়ালাইজেবল ডাটা (যেমন: প্রমিজ বা মিউটেশন মেথড) রাখার চেষ্টা করা যা লোকালস্টোরেজে স্ট্রিং আকারে সেভ হতে পারে না।

### কোড উদাহরণ
\`\`\`typescript



// CartState {
  items: string[];
  addItem: (item: string) => void;
  clearCart: () => void;
}

exports.useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart-storage', // স্টোরেজ কী নাম
      storage: createJSONStorage(() => localStorage), // স্টোরেজ ইঞ্জিন
    }
  )
);
\`\`\``
  },
  {
    id: "state-query-24",
    title: "What is the purpose of Redux DevTools, and how do you inspect actions and state history?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux DevTools","Debugging","Time Travel","State Inspector"],
    enAnswer: "Redux DevTools is a browser extension that enables advanced debugging for Redux applications. It records every dispatched action, logs state changes, lets you inspect state structures visually, and supports \"Time Travel Debugging\" to step backward and forward through state states.",
    bnAnswer: "রেডক্স দেব-টুলস (Redux DevTools) হলো একটি ব্রাউজার এক্সটেনশন যা রেডক্স অ্যাপ ডিবাগ করতে সাহায্য করে। এটি প্রতিবার ডেসপ্যাচ হওয়া অ্যাকশন ও স্টেটের পরিবর্তন রেকর্ড করে এবং \"টাইম ট্রাভেল ডিবাগিং\"-এর মাধ্যমে স্টেটের ইতিহাস পেছনে ও সামনে গিয়ে পরীক্ষা করার সুযোগ দেয়।",
    enExplanation: `### Explanation
Redux DevTools provides transparency into state modifications, resolving the "black box" issue of global stores:

**Core Debugging Features**:
1. **Action Logger**: View a complete chronological timeline of every action dispatched, including its payload parameters.
2. **State Inspector**: Review the exact state tree structure at any given point in time. Shows visual diffs highlighting exactly what changed in response to an action.
3. **Time Travel**: Click "Jump" or "Skip" on any past action. Redux rewinds the store state to that snapshot and updates the React UI dynamically.
4. **Action Dispatcher**: Dispatch mock actions manually from the DevTools panel to test reducers.

Redux Toolkit activates this by default under \`configureStore()\` in development mode.

### Real-World Example
If a user reports that clicking a checkout button crashes the cart:
- Open Redux DevTools.
- Inspect the last actions: \`cart/checkout/pending\` followed by \`cart/checkout/rejected\`.
- Inspect the error payload inside the action details. You can jump back to the state right before the crash to see what parameters was passed to the checkout action.

### Best Practice
Disable Redux DevTools in production configuration builds. Having full state tracing active in production exposes user logs, session tokens, and business configurations to anyone inspecting the page.

### Common Mistakes
Storing non-serializable objects (like promises or DOM nodes) in the Redux store, which crashes the Redux DevTools serialization formatter and slows down application performance.

### Code Example
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  // Redux Toolkit automatically turns on devTools in development.
  // We can customize it to disable in production:
  devTools: process.env.NODE_ENV !== 'production',
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স দেব-টুলস গ্লোবাল স্টেটের সমস্ত পরিবর্তনকে স্বচ্ছ ও ডিবাগযোগ্য করতে সাহায্য করে:

**মূল ডিবাগিং ফিচারসমূহ**:
১. **অ্যাকশন লগ**: ক্রমানুসারে কোন অ্যাকশনটি কখন ফায়ার হয়েছে তা পে-লোড সহ দেখতে পাওয়া যায়।
২. **স্টেট ইন্সপেক্টর**: অ্যাকশন ফায়ার হওয়ার সাথে সাথে স্টেটের কোন লাইনে কী পরিবর্তন হয়েছে তা ডিফারেন্স হাইলাইটারের (diff) মাধ্যমে ভিজ্যুয়ালি দেখা যায়।
৩. **টাইম ট্রাভেল**: প্যানেল থেকে যেকোনো অ্যাকশনের পাশে "Jump" ক্লিক করলে অ্যাপটি পেছনের সেই সময়ে ফেরত যায় এবং স্ক্রিনের রেন্ডারও সেই অনুযায়ী বদলে যায়।
৪. **টেস্ট অ্যাকশন**: ডেভটুলস প্যানেল থেকেই কাস্টম ডামি অ্যাকশন লিখে রান করানো যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার পেমেন্ট করার সময় সাইট ক্র্যাশ করল। আপনি ডেভটুলস ওপেন করে দেখতে পেলেন শেষ অ্যাকশনটি ছিল \`payment/failed\` এবং এর পে-লোডের ভেতর সার্ভার থেকে আসা সঠিক কারণটি ডিক্লেয়ার করা আছে। আপনি চাইলে পেমেন্ট ফেইল হওয়ার ঠিক আগের স্টেটে জাম্প করে ফর্ম ডাটা চেক করতে পারেন।

### উত্তম অনুশীলন
প্রোডাকশন বিল্ডে রেডক্স ডেভটুলস অপশনটি অফ রাখুন। প্রোডাকশনে ডেভটুলস অন থাকলে কাস্টমারদের সিকিউর টোকেন বা ইউজার ডাটা ব্রাউজার কনসোল থেকে চুরি হওয়ার ঝুঁকি থাকে।

### সাধারণ ভুলসমূহ
স্টোরে সিরিয়ালাইজ করা যায় না এমন ডাটা রাখা, যা দেব-টুলসের টাইম ট্রাভেলিং মেকানিজম হ্যাং বা স্লো করে দেয়।

### কোড উদাহরণ
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  // প্রোডাকশন মোডে ডেভটুলস অফ করে রাখা হচ্ছে
  devTools: process.env.NODE_ENV !== 'production',
});
\`\`\``
  },
  {
    id: "state-query-25",
    title: "What is query invalidation in TanStack Query, and how do you trigger it using queryClient?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","Query Invalidation","queryClient","Refetching"],
    enAnswer: "Query invalidation is the process of marking cached query data as stale, prompting an immediate refetch for active queries. It is triggered by calling queryClient.invalidateQueries(), passing a queryKey configuration object.",
    bnAnswer: "কোয়েরি ইনভ্যালিডেশন (Query Invalidation) হলো ক্যাশে থাকা ডাটাকে পুরনো বা স্টেল হিসেবে চিহ্নিত করে সক্রিয় কুয়েরিগুলোকে রি-ফেচ করতে বাধ্য করা। এটি queryClient.invalidateQueries() কল করে সম্পন্ন করা হয়।",
    enExplanation: `### Explanation
Query invalidation handles synchronizing local cache with server mutations. When you update a database model:
- The local cache for that query becomes outdated.
- Calling \`queryClient.invalidateQueries({ queryKey })\` flags the matching queries in the cache registry as \`stale\`.
- **Immediate Action**:
  - If the query is currently mounted/rendered in a component, TanStack Query triggers a background refetch immediately.
  - If the query is not active, it stays in the cache but is marked stale. The next time a component using it mounts, it triggers a refetch instead of serving stale data.

### Real-World Example
In a chat room:
- The room list query key is \`['rooms']\`.
- When the user creates a new room, a mutation runs.
- On success, you call \`queryClient.invalidateQueries({ queryKey: ['rooms'] })\`. This triggers the rooms list to fetch the updated room items instantly, updating the UI.

### Best Practice
Pass precise query keys when invalidating to avoid triggering unnecessary network requests for unrelated components. For example, invalidating \`['user', userId]\` is safer than purging \`['user']\` globally.

### Common Mistakes
Forgetting that \`invalidateQueries\` matches keys hierarchically. Calling \`invalidateQueries({ queryKey: ['orders'] })\` will also invalidate \`['orders', 'details']\` and \`['orders', 'list']\`.

### Code Example
\`\`\`typescript


export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      await fetch(\`/api/products/\${productId}\`, { method: 'DELETE' });
    },
    onSuccess: () => {
      // Invalidate the product list cache so the UI removes the deleted item
      queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: false, // matches 'products' and nested children keys
      });
    },
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
কোয়েরি ইনভ্যালিডেশন সার্ভার ও লোকাল ক্যাশ মেমোরির মধ্যে ডাটা সিঙ্ক করার প্রক্রিয়া। ডাটাবেজে নতুন তথ্য যোগ বা ডিলিট হলে:
- পূর্বের ডাউনলোড করা ক্যাশ ডাটাটি পুরনো হয়ে যায়।
- \`queryClient.invalidateQueries({ queryKey })\` কল করলে ওই নির্দিষ্ট কি-র আন্ডারে থাকা ক্যাশগুলোকে \`stale\` বা পুরনো মার্ক করা হয়।
- **তাৎক্ষণিক প্রভাব**:
  - যদি পেজে কারেন্টলি ওই কুয়েরির কোনো ডাটা রেন্ডার থাকে, তবে ব্যাকগ্রাউন্ডে ইনস্ট্যান্ট নতুন এপিআই কল সচল হবে।
  - যদি রেন্ডার না থাকে, তবে পরের বার ওই পেজে ঢোকা মাত্র ক্যাশ ডাটা বাইপাস করে এপিআই ফেচ শুরু হবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেসেজিং গ্রুপে:
- গ্রুপ লিস্টের ক্যাশ কি হলো \`['groups']\`।
- ইউজার "নতুন গ্রুপ ক্রিয়েট" বাটনে ক্লিক করলেন (মিউটেশন সাকসেস হলো)।
- সাথে সাথে \`invalidateQueries({ queryKey: ['groups'] })\` কল করা হবে যাতে ড্যাশবোর্ডে নতুন গ্রুপটি সাথে সাথে লিস্টে যোগ হয়।

### উত্তম অনুশীলন
ইনভ্যালিডেট করার সময় সুনির্দিষ্ট সাব-কি ব্যবহার করুন যাতে অপ্রয়োজনীয় অন্য পেইজের এপিআই রি-লোড না হয়।

### সাধারণ ভুলসমূহ
ইনভ্যালিডেশনের সময় প্যারেন্ট কি পাস করার ফলে চাইল্ড কি-সমূহ অটো ক্লিয়ার হয়ে যাওয়ার বিষয়টি ভুলে যাওয়া। যেমন \`['user']\` ইনভ্যালিড করলে ইউজারের ডিটেইল ও নোটিফিকেশন ক্যাশও অটো রিলোড হবে।

### কোড উদাহরণ
\`\`\`typescript


export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      await fetch(\`/api/products/\${productId}\`, { method: 'DELETE' });
    },
    onSuccess: () => {
      // ডিলিট সাকসেস হলে প্রডাক্ট ক্যাশ ক্লিয়ার করা হচ্ছে
      queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: false, // products এবং এর চাইল্ড কি-সমূহ ম্যাচ করবে
      });
    },
  });
}
\`\`\``
  },
  {
    id: "state-query-26",
    title: "What is middleware in Redux, and how does it intercept actions?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux","Middleware","Action Interceptor","Data Flow"],
    enAnswer: "Redux middleware is a extension pipeline that sits between the dispatch of an action and the moment it reaches the reducer. It intercepts actions, allowing you to log details, handle side effects (like async requests), modify action payloads, or cancel dispatches entirely.",
    bnAnswer: "রেডক্স মিডলওয়্যার (Redux Middleware) হলো একটি এক্সটেনশন পাইপলাইন যা অ্যাকশন ডেসপ্যাচ হওয়ার পর এবং তা রিডিউসারে পৌঁছানোর আগে অবস্থান করে। এটি অ্যাকশন ইন্টারসেপ্ট করে লগ রাখা, এপিআই রিকোয়েস্ট চালানো, পে-লোড পরিবর্তন বা অ্যাকশন বাতিল করার সুবিধা দেয়।",
    enExplanation: `### Explanation
Redux middleware provides a third-party extension point:
- **Data Flow Placement**: \`Action -> Middleware -> Reducer\`.
- **Signature**: Uses a curried function format returning a nested scope chain:
  \`store => next => action => { ... }\`.
- **Interception Controls**:
  - You can inspect the action details (\`action.type\`, \`action.payload\`).
  - You can inspect the current store state before the update (\`store.getState()\`).
  - You can pass the action to the next middleware or reducer by calling \`next(action)\`.
  - You can delay or block the action, or dispatch a different action instead.

### Real-World Example
In a logger middleware, whenever any action is dispatched:
- The middleware prints the action name and payload to the console.
- It calls \`next(action)\` to update the store.
- It then prints the new state values, making it easy to trace state transitions during development.

### Best Practice
Only use middleware for cross-cutting concerns that apply globally (like analytics tracking, error logging, JWT authentication refreshes, or socket connections). Keep normal feature logic inside slice actions.

### Common Mistakes
Forgetting to invoke \`next(action)\` inside a custom middleware. This stops the action in its tracks, preventing it from ever reaching the reducer, which breaks the application UI.

### Code Example
\`\`\`typescript


// Custom middleware: logs every action to console
exports.customLoggerMiddleware: Middleware = (store) => (next) => (action: any) => {
  console.group(\`Action: \${action.type}\`);
  console.log('Previous State:', store.getState());
  console.log('Action Details:', action);
  
  // Pass action to the next receiver (Crucial step!)
  const result = next(action);
  
  console.log('Next State:', store.getState());
  console.groupEnd();
  
  return result;
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স মিডলওয়্যার মূলত অ্যাকশন ও রিডিউসারের মাঝখানে গেটকিপার হিসেবে বসে:
- **ডাটা ফ্লো**: \`Action -> Middleware -> Reducer\`।
- **ফাংশন ফরম্যাট**: এটি কারিড (curried) ফাংশন আকারে ৩টি চেইনে কাজ করে: \`store => next => action => { ... }\`।
- **ইন্টারসেপশন ক্ষমতা**:
  - এটি কারেন্ট অ্যাকশন অবজেক্টটি রিড করতে পারে।
  - এটি \`store.getState()\` কল করে কারেন্ট স্টেটের স্ন্যাপশট চেক করতে পারে।
  - এটি \`next(action)\` কল করে অ্যাকশনটিকে সামনে যেতে দেয়। এটি বন্ধ করলে অ্যাকশন রিডিউসারে পৌঁছায় না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ট্র্যাকিং বা অ্যানালিটিক্স সিস্টেমে:
- ইউজার পেজের "Add to Cart" বাটনে প্রেস করলেন।
- মিডলওয়্যার অ্যাকশনটি ক্যাপচার করে গুগল অ্যানালিটিক্স সার্ভারে ইভেন্ট ডাটা পোস্ট করে দিল।
- এরপর \`next(action)\` কল করে লোকাল কার্ট আপডেট সম্পন্ন হতে দিল।

### উত্তম অনুশীলন
মিডলওয়্যার শুধুমাত্র গ্লোবাল কাজের জন্য ব্যবহার করুন (যেমন এরর রিপোর্টিং, সেশন টোকেন ভেরিফিকেশন)। লোকাল ফিচার লজিক স্লাইসের রিডিউসারে রাখুন।

### সাধারণ ভুলসমূহ
কাস্টম মিডলওয়্যারের ভেতর \`next(action)\` কল করতে ভুলে যাওয়া। এটি না করলে অ্যাকশন আটকে যাবে এবং রিডিউসার কখনো রিকনসিলিয়েশন সম্পন্ন করতে পারবে না।

### কোড উদাহরণ
\`\`\`typescript


// কাস্টম লগার মিডলওয়্যার
exports.customLoggerMiddleware: Middleware = (store) => (next) => (action: any) => {
  console.group(\`Action: \${action.type}\`);
  console.log('Previous State:', store.getState());
  console.log('Action Details:', action);
  
  // অ্যাকশনটিকে রিডিউসারে পাঠিয়ে দেওয়া হলো (অত্যন্ত গুরুত্বপূর্ণ ধাপ)
  const result = next(action);
  
  console.log('Next State:', store.getState());
  console.groupEnd();
  
  return result;
};
\`\`\``
  },
  {
    id: "state-query-27",
    title: "What is the difference between isLoading and isFetching in TanStack Query?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","isLoading","isFetching","Performance"],
    enAnswer: "isLoading is true only when the query is fetching for the first time and has no cached data. isFetching is true whenever a network request is active, regardless of whether there is already cached data in the store.",
    bnAnswer: "isLoading শুধুমাত্র তখনই true হয় যখন কুয়েরিটি প্রথমবার লোড হচ্ছে এবং ক্যাশে কোনো ডাটা নেই। আর isFetching তখন true হয় যখনই কোনো নেটওয়ার্ক রিকোয়েস্ট অ্যাক্টিভ থাকে, ক্যাশে ডাটা অলরেডি সেভ থাকলেও।",
    enExplanation: `### Explanation
Understanding this distinction is the key to creating smooth, flicker-free UIs:

- **\`isLoading\` (Initial Fetch)**:
  - Equivalent to \`status === 'pending' && isFetching\`.
  - True ONLY during the initial network request when the cache is empty.
  - Action: Show skeletal designs or full-page spinner interfaces.

- **\`isFetching\` (Any Fetch)**:
  - True during the initial fetch, *and* during any subsequent background refetch (such as window focus refetch, query invalidation refetch, or manual query polling).
  - Action: Show a subtle top progress bar or corner loading indicator, leaving the main content visible.

### Real-World Example
In a user profile dashboard:
- When a user logs in and views the page for the first time, \`isLoading\` is true. The app displays a loading screen.
- The user navigates to settings and comes back. Since data is cached, \`isLoading\` remains false (instant view). However, TanStack Query runs a background sync, making \`isFetching\` true. A small spinning wheel appears in the corner while the user reads the cached profile.

### Best Practice
Never use \`isLoading\` for background updates. Only block the UI with a full-page loader when \`isLoading\` is true. For updates where cached data exists, use \`isFetching\` to show non-blocking synchronization banners.

### Common Mistakes
Writing \`if (isLoading || isFetching) return <Spinner />\`. This causes the entire page to block and flicker on every single background query refresh.

### Code Example
\`\`\`typescript


export function DashboardView() {
  const { data: metrics, isLoading, isFetching } = useQuery({
    queryKey: ['metrics'],
    queryFn: () => fetch('/api/metrics').then(res => res.json()),
  });

  // 1. Only block UI when no cache exists
  if (isLoading) return <div>Loading dashboard metrics...</div>;

  return (
    <div className="dashboard-content">
      {/* 2. Show background sync indicators without blocking user actions */}
      {isFetching && <span className="syncing-spinner">Syncing...</span>}
      
      <h1>Active Users: {metrics.activeCount}</h1>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার এক্সপেরিয়েন্স উন্নত করতে এই দুটির তফাত বুঝতে হবে:

- **\`isLoading\` (প্রথম লোড)**:
  - যখন মেমোরিতে কোনো ডাটা নেই এবং প্রথমবারের মতো এপিআই কল চলছে।
  - ইউজার ইন্টারফেসে কার্ড কঙ্কাল বা বড় স্ক্রিন লোডার দেখাতে এটি ব্যবহার করা হয়।

- **\`isFetching\` (যেকোনো লোড)**:
  - এটি প্রথমবার ফেচ হওয়ার সময়ও \`true\` থাকবে, আবার পরবর্তীতে যখনই ব্যাকগ্রাউন্ড রিফ্রেস হবে তখনও \`true\` থাকবে।
  - এটি পেজ কন্টেন্ট আড়াল না করে শুধুমাত্র কোণায় হালকা লোডিং প্রগ্রেস বার দেখাতে ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেইলবক্সের মেইল তালিকা:
- প্রথমবার ঢোকার সময় কোনো মেইল ক্যাশে নেই, তাই \`isLoading\` অন হয়ে বড় লোডার স্ক্রিন আসবে।
- পরবর্তীতে আরেকটি ইমেইল ওপেন করে ব্যাক করার সময় মেইলগুলো ইনস্ট্যান্ট স্ক্রিনে দেখা যাবে (যেহেতু ক্যাশে সেভ আছে), তাই \`isLoading\` ফেইল হবে। কিন্তু নতুন কোনো ইমেইল এসেছে কি না তা ব্যাকগ্রাউন্ডে চেক করতে \`isFetching\` অন হবে।

### উত্তম অনুশীলন
ইউজার ইন্টারফেস বারবার ক্লিয়ার হওয়া এড়াতে ব্যাকগ্রাউন্ড সিঙ্কিংয়ে কখনো \`isLoading\` দিয়ে পেজ ব্লক করবেন না। ডাটা কন্টেন্ট আগের জায়গায় রেখে আলতো সিঙ্ক ব্যানার দেখান।

### সাধারণ ভুলসমূহ
\`if (isLoading || isFetching) return <Spinner />\` ব্যবহার করা, যা প্রতিবার ব্যাকগ্রাউন্ড ডাটা আপডেটের সাথে সাথে পুরো স্ক্রিন ব্ল্যাঙ্ক করে দেয়।

### কোড উদাহরণ
\`\`\`typescript


export function DashboardView() {
  const { data: metrics, isLoading, isFetching } = useQuery({
    queryKey: ['metrics'],
    queryFn: () => fetch('/api/metrics').then(res => res.json()),
  });

  // ১. শুধুমাত্র প্রাথমিক ফেচে স্ক্রিন ব্লক করা হলো
  if (isLoading) return <div>Loading dashboard metrics...</div>;

  return (
    <div className="dashboard-content">
      {/* ২. ইউজারকে ডিস্টার্ব না করে আলতো ব্যাকগ্রাউন্ড সিঙ্ক দেখানো */}
      {isFetching && <span className="syncing-spinner">Syncing...</span>}
      
      <h1>Active Users: {metrics.activeCount}</h1>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-28",
    title: "How do you access and update Zustand store state outside of React components?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Zustand","React Context","Vanilla JavaScript","Non-React files"],
    enAnswer: "You access store state outside React components by calling useStore.getState() directly. Update the state by calling useStore.setState(), passing the update object or function callback. These methods are fully synchronous.",
    bnAnswer: "রিঅ্যাক্ট কম্পোনেন্টের বাইরে Zustand স্টোর রিড করতে সরাসরি useStore.getState() কল করতে হয়। আর আপডেট করতে useStore.setState() ব্যবহার করতে হয়। এই মেথডগুলো সম্পূর্ণ সিনক্রোনাস।",
    enExplanation: `### Explanation
Zustand stores are initialized as standard JavaScript closures, meaning they do not rely on React Context. Because of this, you can read or write store values anywhere in your codebase (e.g., inside vanilla JS files, Axios interceptors, route guards, or analytics scripts):

1. **\`store.getState()\`**:
   - Synchronously returns the current state snapshot.
   - Useful inside API interceptors to read auth tokens.

2. **\`store.setState(recipe)\`**:
   - Synchronously updates the state values.
   - Triggers re-renders in all mounted React components subscribed to the modified values.

### Real-World Example
In a JWT token auth setup:
- You configure an Axios Request Interceptor.
- Before sending the HTTP request, the interceptor calls \`useAuthStore.getState().token\` to read the current token and appends it to the authorization headers.
- If the server returns a 401 (unauthorized) response, the error interceptor calls \`useAuthStore.getState().logout()\` to log the user out instantly.

### Best Practice
Use \`getState()\` and \`setState()\` inside API configuration files, websockets listeners, and helper functions to bypass React hook constraints (such as the rule preventing hooks inside nested helper functions).

### Common Mistakes
Trying to use the store hook directly inside a plain JS helper file (e.g., calling \`const token = useAuthStore(state => state.token)\` inside an Axios interceptor). This triggers React errors because hooks can only be called inside functional components.

### Code Example
\`\`\`typescript


// AuthState {
  token: string | null;
  logout: () => void;
}

exports.useAuthStore = create<AuthState>((set) => ({
  token: 'mock-jwt-token-123',
  logout: () => set({ token: null }),
}));

// --- vanilla-api-helper.ts (Plain JS file, NOT a React component) ---
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
});

// Axios Interceptor reads store state outside React
apiClient.interceptors.request.use((config) => {
  // Read token synchronously without hooks!
  const token = useAuthStore.getState().token;
  
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// Axios Error interceptor updates store state outside React
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Trigger logout action programmatically outside React!
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand স্টোর মূলত জাভাস্ক্রিপ্ট ক্লোজারের ওপর তৈরি, তাই এটি ব্যবহারের জন্য রিঅ্যাক্টের কোনো গণ্ডি বা কন্টেক্সটের দরকার হয় না। যেকোনো সাধারণ \`.ts\` বা \`.js\` ফাইল (যেমন এপিআই ক্লায়েন্ট, মিডলওয়্যার বা ইউটিলিটি ফাইল) থেকে এটি ব্যবহার করা যায়:

১. **\`useStore.getState()\`**:
   - স্টোরের বর্তমান ভ্যালু সিনক্রোনাসলি প্রোভাইড করে।

২. **\`useStore.setState()\`**:
   - সরাসরি স্টোরের ভ্যালু আপডেট করে দেয় এবং ওই স্টোরের সাথে জড়িত রিঅ্যাক্ট কম্পোনেন্টগুলোকেও অটোমেটিক আপডেট করায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি এপিআই অথরাইজেশন সিস্টেমে:
- আপনি Axios ইন্টারসেপ্টর তৈরি করলেন।
- ব্যাকএন্ড এপিআই রিকোয়েস্ট যাওয়ার ঠিক আগে ইন্টারসেপ্টর \`useAuthStore.getState().token\` কল করে টোকেনটি নিয়ে রিকোয়েস্ট হেডারে বসিয়ে দিল।
- যদি সার্ভার ৪০১ (Unauthorized) এরর দেয়, তবে ইন্টারসেপ্টর সরাসরি \`useAuthStore.getState().logout()\` কল করে সেশন ক্লিয়ার করে দিল।

### উত্তম অনুশীলন
রিঅ্যাক্টের রুলস অফ হুকস (Rules of Hooks) এর ঝামেলা এড়াতে সাধারণ ক্লায়েন্ট বা ইউটিলিটি স্ক্রিপ্ট ফাইলে সরাসরি \`getState()\` ও \`setState()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ভ্যানিলা জেএস ফাইলে রিঅ্যাক্ট হুকের মতো স্টোর ব্যবহার করতে চাওয়া (যেমন: \`const token = useAuthStore(state => state.token)\`), যা রুলস অফ হুক্স ভায়োলেশনের এরর তৈরি করবে।

### কোড উদাহরণ
\`\`\`typescript


// AuthState {
  token: string | null;
  logout: () => void;
}

exports.useAuthStore = create<AuthState>((set) => ({
  token: 'mock-jwt-token-123',
  logout: () => set({ token: null }),
}));

// --- vanilla-api-helper.ts (একটি সাধারণ জেএস ফাইল, রিঅ্যাক্ট কম্পোনেন্ট নয়) ---
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
});

// Axios ইন্টারসেপ্টরে হুক ছাড়া সরাসরি স্টোর ডাটা রিড করা হচ্ছে
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// এরর ইন্টারসেপ্টরে হুক ছাড়া সরাসরি স্টোর ডাটা আপডেট করা হচ্ছে
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // সরাসরি লগআউট ফাংশন ট্রিগার
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
\`\`\``
  },
  {
    id: "state-query-29",
    title: "How does Redux Toolkit automate the creation of action creators and action types?",
    difficulty: "basic",
    category: "state-query",
    tags: ["Redux Toolkit","createSlice","Action Creators","Action Types"],
    enAnswer: "Redux Toolkit automates actions using createSlice() by mapping reducer keys to auto-generated actions. The action type is generated as \"name/reducerKey\", and the action creator returns the type along with the provided argument mapped to the payload key.",
    bnAnswer: "রেডক্স টুলকিট createSlice() এর সাহায্যে রিডিউসারের প্রতি চাবি বা কী-এর ওপর বেস করে অটোমেটিক অ্যাকশন ক্রিয়েটর ও টাইপ তৈরি করে। টাইপটি তৈরি হয় \"name/reducerKey\" ফরম্যাটে এবং অ্যাকশন ক্রিয়েটরটি আর্গুমেন্টকে payload প্রপার্টিতে ম্যাপ করে।",
    enExplanation: `### Explanation
In legacy Redux, you had to manually declare:
1. Action Type String constant: \`const ADD_TODO = 'ADD_TODO';\`
2. Action Creator function: \`const addTodo = (text) => ({ type: ADD_TODO, payload: text })\`
3. Reducer mapping: \`case ADD_TODO: ...\`

Redux Toolkit's \`createSlice()\` automates this:
- **Action Type**: Combines the slice's \`name\` with the reducer's key: \`[name]/[reducerKey]\` (e.g. \`todos/addTodo\`).
- **Action Creator**: Creates a helper function that accepts a parameter and assigns it to \`action.payload\` automatically. You can invoke this function and dispatch it directly: \`dispatch(addTodo('new task'))\`.

### Real-World Example
If you create a slice named \`billing\` with a reducer method \`chargeSuccess(state, action)\`:
- RTK generates an action type: \`billing/chargeSuccess\`.
- RTK generates an action creator: \`chargeSuccess(payload)\` returning \`{ type: 'billing/chargeSuccess', payload }\`.
- Components just import \`chargeSuccess\` and dispatch it.

### Best Practice
Avoid defining action types as manual string constants inside your codebase when using Redux Toolkit. Always export and destructure action creators directly from the slice configuration.

### Common Mistakes
Manually writing action types inside a separate file instead of utilizing the auto-generated types (which can be accessed via \`sliceAction.type\` or \`sliceAction.toString()\`).

### Code Example
\`\`\`typescript


const notificationSlice = createSlice({
  name: 'alert',
  initialState: { message: '' },
  reducers: {
    // RTK generates action: { type: 'alert/setAlert', payload: string }
    setAlert: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// 1. RTK generates this action helper: setAlert
exports.{ setAlert } = notificationSlice.actions;

// 2. You can inspect the auto-generated action type string:
console.log(setAlert.type); // Output: "alert/setAlert"
console.log(setAlert('Hello').type); // Output: "alert/setAlert"
console.log(setAlert('Hello').payload); // Output: "Hello"

export default notificationSlice.reducer;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পুরনো রেডক্সে অ্যাকশন ও রিডিউসার লিখতে ৩টি আলাদা কাজ করতে হতো:
১. কনস্ট্যান্ট তৈরি: \`const ADD_TODO = 'ADD_TODO';\`
২. অ্যাকশন মেথড তৈরি: \`const addTodo = (text) => ({ type: ADD_TODO, payload: text })\`
৩. সুইচ কেস তৈরি করা।

রেডক্স টুলকিটের \`createSlice\` এটি অটোমেটিক করে দেয়:
- **অ্যাকশন টাইপ**: স্লাইসের নামের সাথে রিডিউসারের প্রপার্টি কী যুক্ত করে টাইপ তৈরি হয়: \`[name]/[reducerKey]\` (যেমন: \`alert/setAlert\`)।
- **অ্যাকশন ক্রিয়েটর**: এটি একটি হেল্পার মেথড তৈরি করে দেয় যা আর্গুমেন্ট নিয়ে \`payload\`-এ বাইন্ড করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নোটিফিকেশন স্লাইসের নাম দিলেন \`alert\` এবং রিডিউসার দিলেন \`setAlert\`। আরটিকে অটোমেটিক নোটিফিকেশন টাইপ বানাবে \`alert/setAlert\`। কম্পোনেন্টে সরাসরি \`dispatch(setAlert('সফল হয়েছে'))\` কল করলেই ডাটা স্টোরে চলে যাবে।

### উত্তম অনুশীলন
রেডক্স টুলকিট ব্যবহারে কাস্টম স্ট্রিং কনস্ট্যান্ট দিয়ে ম্যানুয়াল অ্যাকশন লিখবেন না। অ্যাকশনের নাম বা টাইপ স্ট্রিংয়ের দরকার হলে সরাসরি \`actionName.type\` বা \`actionName.toString()\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
আরটিকে স্লাইস ব্যবহারের পরও আলাদা অ্যাকশন ফাইল মেইনটেইন করার চেষ্টা করা, যা বয়লারপ্লেট বাড়ায়।

### কোড উদাহরণ
\`\`\`typescript


const notificationSlice = createSlice({
  name: 'alert',
  initialState: { message: '' },
  reducers: {
    // আরটিকে অটো অ্যাকশন জেনারেট করবে: alert/setAlert
    setAlert: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// ১. অটো-জেনারেটেড অ্যাকশন হেল্পার
exports.{ setAlert } = notificationSlice.actions;

// ২. অটো-জেনারেটেড টাইপ প্রিন্ট করে চেক করার নিয়ম:
console.log(setAlert.type); // আউটপুট: "alert/setAlert"
console.log(setAlert('Hello').type); // আউটপুট: "alert/setAlert"
console.log(setAlert('Hello').payload); // আউটপুট: "Hello"

export default notificationSlice.reducer;
\`\`\``
  },
  {
    id: "state-query-30",
    title: "How do you handle pagination in TanStack Query using placeholder or previous data configurations?",
    difficulty: "basic",
    category: "state-query",
    tags: ["TanStack Query","Pagination","placeholderData","useQuery"],
    enAnswer: "To handle pagination smoothly in TanStack Query, use the placeholderData option with the keepPreviousData helper (import { keepPreviousData } from \"@tanstack/react-query\"). This retains the previous page data on screen while the new page loads, preventing layout shifts.",
    bnAnswer: "টানস্ট্যাক কুয়েরিতে পেজিনেশন স্মুথ করতে placeholderData অপশনে keepPreviousData হেল্পার (যা \"@tanstack/react-query\" থেকে ইম্পোর্ট করা হয়) সেট করতে হয়। এটি নতুন পেজ লোড হওয়ার সময় আগের পেজের ডাটা স্ক্রিনে ধরে রাখে, যার ফলে লেআউট শিফট হয় না।",
    enExplanation: `### Explanation
When implementing pagination, clicking "Next Page" changes the query key dependency (e.g., from \`['posts', 1]\` to \`['posts', 2]\`).
- By default, a new query key means no cached data is available, causing the query state to switch to \`pending\` (isLoading is true). The screen blank out or displays loading spinners, causing layout jumps.
- **Solution**: Use \`placeholderData: keepPreviousData\`.
  - When the key changes, TanStack Query holds onto the resolved data of the previous key and keeps it visible on screen.
  - \`isFetching\` is set to true in the background.
  - Once the fetch for page 2 resolves, it swaps the UI data seamlessly.

### Real-World Example
In a customer list grid with page size 10:
- Clicking page 2 holds page 1's grid list rows in view.
- A tiny progress bar shows it is loading.
- As soon as page 2 rows arrive, they replace page 1 rows. The grid wrapper does not collapse or flicker.

### Best Practice
Always pair \`keepPreviousData\` pagination with loading indicator styles (using the \`isPlaceholderData\` property) so users are notified that the page change is processing and they are viewing temporary placeholder data.

### Common Mistakes
Forgetting that without \`keepPreviousData\`, pagination queries will jump back to a blank layout on every page change, ruining the user // stability.

### Code Example
\`\`\`typescript



export function PaginatedUserList() {
  const [page, setPage] = useState(1);

  const { data: users, isPlaceholderData, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetch(\`/api/users?page=\${page}\`).then(res => res.json()),
    
    // Smooth pagination: keeps page 1 data visible while page 2 fetches
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      {/* Show tiny loader when syncing new page */}
      {isFetching && <div>Fetching updates...</div>}
      
      <ul style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
        {users?.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
        Prev
      </button>
      <button
        onClick={() => setPage(p => p + 1)}
        // Disable next button if viewing placeholder data
        disabled={isPlaceholderData}
      >
        Next
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পেজিনেশনের সময় "Next Page" বাটনে ক্লিক করলে কুয়েরি কি পরিবর্তিত হয় (যেমন: \`['posts', 1]\` থেকে \`['posts', 2]\`)।
- ডিফল্ট আচরণে, নতুন পেজের এপিআই কল চলার সময় কোনো ক্যাশ না থাকায় স্ক্রিন ব্ল্যাঙ্ক হয়ে যায় এবং লোডার স্ক্রিন আসে, যা লেআউটে ঝাঁকুনি (layout shift) তৈরি করে।
- **সমাধান**: টানস্ট্যাক কুয়েরির \`placeholderData: keepPreviousData\` কনফিগারেশন ব্যবহার করা।
- এটি নতুন পেজের ডাটা ডাউনলোড সম্পন্ন না হওয়া পর্যন্ত স্ক্রিনে আগের পেজের ওল্ড ডাটাই সচল রাখে এবং এপিআই সলভ হলে সাথে সাথে সওয়াপ করে।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন ড্যাশবোর্ডে ইউজার টেবিল লিস্টে ১০টি করে সারি থাকে:
- ইউজার পেজ ২-এ ক্লিক করলে টেবিলের আগের রো-সমূহ হালকা আবছা (opacity 0.5) দেখাবে কিন্তু টেবিলটি ভেঙে যাবে না।
- পেজ ২-এর ডাটা চলে আসলে পেজ ১-এর ডাটা নিমেষেই রিপ্লেস হয়ে যাবে।

### উত্তম অনুশীলন
\`keepPreviousData\` ব্যবহারের সময় অবশ্যই \`isPlaceholderData\` ফ্ল্যাগ চেক করে ইউজার ইন্টারফেস কিছুটা অপাসিটি কমান বা ডেসিবল বাটন অ্যাক্টিভ করুন যাতে ইউজার বোঝেন ডাটা প্রসেস হচ্ছে।

### সাধারণ ভুলসমূহ
পেজিনেশন করার সময় \`keepPreviousData\` প্রপার্টি ব্যবহার না করা, যার ফলে প্রতিবার পেজ চেঞ্জের সময় গ্লিচিং ও লোডার এনিমেশন বার বার স্ক্রিনে আসতে থাকে।

### কোড উদাহরণ
\`\`\`typescript



export function PaginatedUserList() {
  const [page, setPage] = useState(1);

  const { data: users, isPlaceholderData, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetch(\`/api/users?page=\${page}\`).then(res => res.json()),
    
    // পেজ পরিবর্তনের সময় পেজ ১-এর ডাটা স্ক্রিনে ধরে রাখবে
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      {/* ব্যাকগ্রাউন্ডে নতুন পেজ আসার সময় লোডিং টেক্সট */}
      {isFetching && <div>Fetching updates...</div>}
      
      <ul style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
        {users?.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
        Prev
      </button>
      <button
        onClick={() => setPage(p => p + 1)}
        // প্লেসহোল্ডার দেখার সময় বাটন নিষ্ক্রিয় রাখা
        disabled={isPlaceholderData}
      >
        Next
      </button>
    </div>
  );
}
\`\`\``
  }
];
