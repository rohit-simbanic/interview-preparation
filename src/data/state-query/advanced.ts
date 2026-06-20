import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: "state-query-71",
    title: "How do you synchronize state between multiple Zustand stores, or subscribe to changes across stores dynamically?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","Store Sync","subscribe","Architecture"],
    enAnswer: "To synchronize multiple Zustand stores, use the store.subscribe() API outside of React. Write a listener on store A that checks for specific field changes and invokes the appropriate update action on store B, ensuring loops are prevented by doing equality comparisons.",
    bnAnswer: "একাধিক Zustand স্টোরের মধ্যে ডাটা সিঙ্ক করতে রিঅ্যাক্টের বাইরে store.subscribe() এপিআই ব্যবহার করতে হয়। স্টোর A-তে লিসেনার লিখে চেঞ্জ হওয়া ডাটা ফিল্টার করে সরাসরি স্টোর B-এর অ্যাকশন মেথড কল করে ডাটা সিঙ্ক করা সম্ভব।",
    enExplanation: `### Explanation
In clean architecture, stores should have single responsibilities. However, sometimes stores need to coordinate state:
- You cannot call React hooks inside store definitions.
- Instead, use the vanilla JS API exposed on the store object: \`store.subscribe()\`.
- Subscribe store B to updates from store A.
- **Preventing Infinite Loops**: If store A updates B, and B updates A, they can trigger an infinite cycle. Always write strict equality checks before calling \`set\` to ensure updates only run if the value has actually changed.

### Real-World Example
Suppose you have a \`UserSessionStore\` (managing auth tokens) and a \`UserPreferencesStore\` (managing dark mode settings stored in the database). When the user logs out in \`UserSessionStore\` (token becomes null), the preference store should automatically clear its cached preferences:
- Subscribe the preference store to session token changes. When token resolves to null, trigger \`clearPreferences()\`.

### Best Practice
Keep synchronization logic outside of React components. Set up store subscriptions in a dedicated bootstrap file or directly inside the store definition files using vanilla listeners.

### Common Mistakes
Writing synchronization code inside React components using \`useEffect\` hooks, which can lead to layout delays, duplicate events, and dependency tracking bugs.

### Code Example
\`\`\`typescript



// 1. Session Store
// SessionState {
  token: string | null;
  logout: () => void;
}
exports.useSessionStore = create<SessionState>()(
  subscribeWithSelector((set) => ({
    token: 'jwt-active-token',
    logout: () => set({ token: null }),
  }))
);

// 2. Preferences Store
// PrefsState {
  theme: string;
  resetPrefs: () => void;
}
exports.usePrefsStore = create<PrefsState>((set) => ({
  theme: 'dark',
  resetPrefs: () => set({ theme: 'light' }),
}));

// 3. Coordinate stores dynamically outside React
useSessionStore.subscribe(
  (state) => state.token, // selector
  (token) => {
    if (!token) {
      // Trigger preference reset when token is cleared!
      usePrefsStore.getState().resetPrefs();
    }
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জুস্ট্যান্ডে স্টোরসমূহ আলাদা রাখা বেস্ট আর্কিটেকচার হলেও মাঝে মাঝে তাদের সমন্বয় করতে হয়:
- স্টোর ডেফিনেশন ফাইলের ভেতর রিঅ্যাক্ট হুক ব্যবহার করা যায় না।
- এর জন্য স্টোর অবজেক্টের নেটিভ \`store.subscribe()\` মেথড ব্যবহার করা হয়।
- **ইনফিনিট লুপ প্রতিরোধ**: যদি স্টোর A স্টোর B কে ট্রিগার করে এবং B আবার A কে আপডেট করে, তবে অসীম লুপ তৈরি হতে পারে। এটি রুখতে স্টেট আপডেট করার আগে ইনপুট মানটি আগের মানের চেয়ে আলাদা কি না তা পরীক্ষা করা জরুরি।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার সেশন স্টোর (\`UserSessionStore\`) ও ইউজার প্রেফারেন্স স্টোর (\`UserPreferencesStore\`)। সেশন স্টোরে টোকেন খালি (logout) হলে প্রেফারেন্স স্টোরেও থিম রি-সেট হবে। গ্লোবাল সাবস্ক্রিপশন ব্যবহার করে সেশন টোকেন ট্র্যাক করে এটি অটো সেট করা যায়।

### উত্তম অনুশীলন
সিঙ্ক করার লজিক কম্পোনেন্টের বাইরে স্টোর ফাইলসমূহের লোডিং বডির ভেতর রাখুন। এটি ইউজার ইন্টারফেসে কাজের ব্যাঘাত না ঘটিয়ে ব্যাকগ্রাউন্ডে ডাটা ইন্টিগ্রিটি বজায় রাখে।

### সাধারণ ভুলসমূহ
কম্পোনেন্ট ফাইলের ভেতর \`useEffect\` ব্যবহার করে দুটি গ্লোবাল স্টোর সিঙ্ক করতে চাওয়া, যা লেআউট ডিলে বা ডুপ্লিকেট রি-রেন্ডার সৃষ্টি করে।

### কোড উদাহরণ
\`\`\`typescript



// ১. সেশন স্টোর
// SessionState {
  token: string | null;
  logout: () => void;
}
exports.useSessionStore = create<SessionState>()(
  subscribeWithSelector((set) => ({
    token: 'jwt-active-token',
    logout: () => set({ token: null }),
  }))
);

// ২. থিম/প্রেফারেন্স স্টোর
// PrefsState {
  theme: string;
  resetPrefs: () => void;
}
exports.usePrefsStore = create<PrefsState>((set) => ({
  theme: 'dark',
  resetPrefs: () => set({ theme: 'light' }),
}));

// ৩. রিঅ্যাক্টের বাইরে স্টোর সিঙ্ক করা হচ্ছে
useSessionStore.subscribe(
  (state) => state.token, // সিলেক্টর
  (token) => {
    if (!token) {
      // সেশন আউট হলে প্রেফারেন্স ক্লিয়ার
      usePrefsStore.getState().resetPrefs();
    }
  }
);
\`\`\``
  },
  {
    id: "state-query-72",
    title: "How do you share Zustand store state across browser tabs or windows using BroadcastChannel APIs?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","BroadcastChannel","Cross-tab Sync","Advanced JS"],
    enAnswer: "Share Zustand state across tabs by setting up a BroadcastChannel instance. In a store listener, post the action payload to the channel whenever the state updates, and configure a channel message listener to update the store in other tabs.",
    bnAnswer: "ব্রাউজার ট্যাব বা উইন্ডোর মাঝে Zustand স্টেট শেয়ার করতে BroadcastChannel এপিআই ব্যবহার করা হয়। স্টোরে পরিবর্তন হলে লিসেনারের মাধ্যমে চ্যানেলে মেসেজ পাঠানো হয় এবং অন্য ট্যাবে মেসেজ রিসিভ করে স্টোর আপডেট করা হয়।",
    enExplanation: `### Explanation
When a user has multiple tabs of your application open, updating state in tab A (e.g. logging out or changing themes) does not automatically update tab B unless you synchronize them:
- **\`BroadcastChannel\`**: A native browser API enabling communication between tabs/windows sharing the same origin.
- **Workflow**:
  1. Instantiate a channel: \`const channel = new BroadcastChannel('store_sync');\`
  2. Inside a store subscribe block, send state updates to the channel: \`channel.postMessage(updatedState)\`.
  3. Inside the channel listener in other tabs, receive the message and update the local store: \`useStore.setState(messageData)\`.
  4. Ensure you filter messages to prevent echo cycles (ignore messages originating from the same tab).

### Real-World Example
In a SaaS dashboard:
- User logs out in Tab A.
- Tab A posts \`LOGOUT\` to the BroadcastChannel.
- Tab B receives the message and immediately redirects the user to \`/login\` without requiring them to reload the page or click anything.

### Best Practice
Only broadcast serializable updates or action payloads rather than sending the entire state object tree, which can cause high memory usage and sync lag across tabs.

### Common Mistakes
Forgetting to unsubscribe the BroadcastChannel or close it on page reload, leading to memory leaks and port locks in the browser process.

### Code Example
\`\`\`typescript


// SyncState {
  theme: string;
  setTheme: (theme: string, broadcast?: boolean) => void;
}

const syncChannel = new BroadcastChannel('theme_sync_channel');

exports.useSyncStore = create<SyncState>((set) => ({
  theme: 'light',
  setTheme: (theme, broadcast = true) => {
    set({ theme });
    
    // Broadcast change to other tabs
    if (broadcast) {
      syncChannel.postMessage({ theme });
    }
  },
}));

// Listen to messages from other tabs
syncChannel.onmessage = (event) => {
  const { theme } = event.data;
  // Update state locally without broadcasting back (prevent loops)
  useSyncStore.getState().setTheme(theme, false);
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার একই সাইটের একাধিক ট্যাব খুলে রাখলে ট্যাব A-তে স্টেট চেঞ্জ (যেমন থিম পরিবর্তন বা লগআউট) ট্যাব B-তে রিফ্লেক্ট করাতে ব্রাউজারের নেটিভ \`BroadcastChannel\` ব্যবহার করা হয়:
- এটি একই অরিজিনের ট্যাবগুলোর মধ্যে সিঙ্ক করার সহজ গেটওয়ে।
- **কাজের ধাপ**:
  ১. কাস্টম চ্যানেল তৈরি: \`new BroadcastChannel('channel_name')\`।
  ২. স্টোর আপডেটের সাথে সাথে চ্যানেলে মেসেজ পাঠানো হয়: \`channel.postMessage()\`।
  ৩. অন্য ট্যাবগুলোর লিসেনারে মেসেজ রিসিভ হলে স্টোর আপডেট করা হয়।
  - নিজের পাঠানো মেসেজ যেন নিজে আবার রিসিভ করে লুপ তৈরি না করে তা নিশ্চিত করতে কন্ডিশন সেট করতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ
ব্যাংকিং বা সিকিউর অ্যাপে ইউজার ট্যাব A-তে লগআউট ক্লিক করলে, অন্য ট্যাব B-ও সাথে সাথে লগআউট হয়ে লগইন স্ক্রিনে চলে যাবে যাতে সিকিউরিটি ভায়োলেশন না ঘটে।

### উত্তম অনুশীলন
পুরো স্টোরের ডাটা বডকাস্ট না করে শুধুমাত্র যে ডাটা পরিবর্তন হয়েছে তা অবজেক্ট আকারে পাঠান। এতে ব্রাউজার মেমোরির ওপর চাপ কম থাকে।

### সাধারণ ভুলসমূহ
ব্রডকাস্ট চ্যানেল ক্লোজ বা আনসাবস্ক্রাইব করতে ভুলে যাওয়া যা ব্রাউজারের পোর্ট লক করে দেয়।

### কোড উদাহরণ
\`\`\`typescript


// SyncState {
  theme: string;
  setTheme: (theme: string, broadcast?: boolean) => void;
}

const syncChannel = new BroadcastChannel('theme_sync_channel');

exports.useSyncStore = create<SyncState>((set) => ({
  theme: 'light',
  setTheme: (theme, broadcast = true) => {
    set({ theme });
    
    // অন্য ট্যাবে থিম পরিবর্তনের মেসেজ পাঠানো হচ্ছে
    if (broadcast) {
      syncChannel.postMessage({ theme });
    }
  },
}));

// অন্য ট্যাব থেকে আসা মেসেজ রিসিভ করা হচ্ছে
syncChannel.onmessage = (event) => {
  const { theme } = event.data;
  // লোকাল স্টেট আপডেট করা হচ্ছে এবং ব্রডকাস্ট অফ রাখা হয়েছে (লুপ রুখতে)
  useSyncStore.getState().setTheme(theme, false);
};
\`\`\``
  },
  {
    id: "state-query-73",
    title: "What is the best pattern to share a Zustand store via React Context to allow multiple instances of a store?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","React Context","Store Instances","Reusable Components"],
    enAnswer: "To allow multiple store instances, create the Zustand store inside a React context provider using useRef. This instantiates a fresh store instance for each provider mount, allowing reusable components (like independent widgets) to have isolated stores.",
    bnAnswer: "জুস্ট্যান্ড স্টোরের একাধিক ইনস্ট্যান্স তৈরি করতে রিঅ্যাক্ট কন্টেক্সটের ভেতর useRef ব্যবহার করে স্টোর ক্রিয়েট করতে হয়। এর ফলে প্রতিটি প্রোভাইডার মাউন্টে নতুন আলাদা স্টোর তৈরি হয় যা রিইউজেবল উইজেট তৈরিতে কাজে লাগে।",
    enExplanation: `### Explanation
By default, Zustand stores are singletons (global scope). If you instantiate a store inside a reusable component (like a complex table widget), all instances of that table on the page will share the exact same state, causing cross-input conflicts.

**The Context Provider Pattern**:
1. Do not call \`create\` directly as a hook. Use \`createStore\` (from \`'zustand'\`) which creates a vanilla JS store api without the React hook wrapper.
2. Create a standard React Context: \`createContext<StoreApi | null>(null)\`.
3. Inside the Context Provider, use \`useRef\` to initialize the store: \`const storeRef = useRef(createStore(...))\`.
4. Wrap components with this Provider. Inside consumer children, read the context API and pass it to Zustand's native \`useStore\` hook to subscribe to state changes.

### Real-World Example
In a page showing two independent spreadsheet grid components. Each grid needs state tracking for selected cell and rows. Wrapping each grid in a custom context provider instantiates isolated Zustand stores for each grid.

### Best Practice
Always use a Context-level store for complex widgets distributed multiple times in a page. Use global stores only for app-wide singletons (like auth session or theme settings).

### Common Mistakes
Instantiating the store inside the provider directly without \`useRef\`. This causes the entire store to be recreated on every parent re-render, purging client state.

### Code Example
\`\`\`typescript



// CounterState {
  count: number;
  inc: () => void;
}

// 1. Create vanilla store factory (NOT a hook)
const createCounterStore = () =>
  createStore<CounterState>((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));

type CounterStoreApi = ReturnType<typeof createCounterStore>;

// 2. Setup Context
const CounterContext = createContext<CounterStoreApi | null>(null);

// 3. Provider Component using useRef
export function CounterProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore(); // Instantiate once
  }
  return (
    <CounterContext.Provider value={storeRef.current}>
      {children}
    </CounterContext.Provider>
  );
}

// 4. Consumer Hook using useStore to bind Context to Zustand
export function useCounterContextStore<T>(selector: (state: CounterState) => T): T {
  const store = useContext(CounterContext);
  if (!store) throw new Error('Missing CounterProvider in parent tree');
  return useStore(store, selector); // Bind context API to hook
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে Zustand স্টোর গ্লোবাল সিঙ্গেলটন হিসেবে থাকে। আপনি যদি একটি রিইউজেবল উইজেট তৈরি করেন এবং গ্লোবাল স্টোর ব্যবহার করেন, তবে পেজে একই উইজেট ২ বার রেন্ডার করলে একটিতে ইনপুট দিলে অন্যটিতেও ভ্যালু চেঞ্জ হয়ে জ্যাম তৈরি হবে।

**কন্টেক্সট প্রোভাইডার প্যাটার্ন**:
১. সরাসরি হুক ক্রিয়েট না করে \`createStore\` ব্যবহার করে ভ্যানিলা জেএস স্টোর এপিআই বানান।
২. স্ট্যান্ডার্ড রিঅ্যাক্ট কন্টেক্সট ডিক্লেয়ার করুন।
৩. প্রোভাইডারের ভেতর \`useRef\` দিয়ে স্টোর ইনিশিয়ালাইজ করুন যাতে বার বার রেন্ডার হলেও স্টোর রিসেট না হয়।
৪. চাইল্ড ফাইলে \`useStore\` হুকে কন্টেক্সটের স্টোর এপিআই পাস করে সিলেক্টরের মাধ্যমে সাবস্ক্রিপশন সম্পন্ন করুন।

### বাস্তব-ভিত্তিক উদাহরণ
একই ড্যাশবোর্ড পেজে ৩টি আলাদা গ্রাফ চার্ট টেবিল রয়েছে। প্রতিটির রো সিলেকশন ও ফিল্টারিং আলাদা হতে হবে। কন্টেক্সট প্রোভাইডার প্যাটার্ন ব্যবহার করলে প্রতিটি চার্ট তার নিজস্ব স্বাধীন ক্যাশ বা স্টোর মেইনটেইন করবে।

### উত্তম অনুশীলন
জটিল রিইউজেবল উইজেটের জন্য অবশ্যই এই কন্টেক্সট লেভেল স্টোর আর্কিটেকচার ফলো করুন। গ্লোবাল স্টোর শুধু ইউজার লগইন বা গ্লোবাল থিমের মতো কাজের জন্য রাখুন।

### সাধারণ ভুলসমূহ
\`useRef\` ছাড়া সরাসরি প্রোভাইডার বডিতে স্টোর ডিক্লেয়ার করা, যা প্যারেন্ট কম্পোনেন্ট রেন্ডার হওয়ার সাথে সাথে ইউজারের সব কারেন্ট ডাটা মুছে দিয়ে রিসেট করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript



// CounterState {
  count: number;
  inc: () => void;
}

// ১. ভ্যানিলা স্টোর ফ্যাক্টরি (হুক নয়)
const createCounterStore = () =>
  createStore<CounterState>((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));

type CounterStoreApi = ReturnType<typeof createCounterStore>;

// ২. কন্টেক্সট প্রিপারেশন
const CounterContext = createContext<CounterStoreApi | null>(null);

// ৩. useRef ব্যবহার করে প্রোভাইডার কম্পোনেন্ট
export function CounterProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore(); // একবারই ইনিশিয়ালাইজ হবে
  }
  return (
    <CounterContext.Provider value={storeRef.current}>
      {children}
    </CounterContext.Provider>
  );
}

// ৪. কাস্টম কন্টেক্সট সিলেক্টর হুক (useStore দিয়ে কন্টেক্সট সিঙ্ক করা)
export function useCounterContextStore<T>(selector: (state: CounterState) => T): T {
  const store = useContext(CounterContext);
  if (!store) throw new Error('Missing CounterProvider in parent tree');
  return useStore(store, selector);
}
\`\`\``
  },
  {
    id: "state-query-74",
    title: "How does Zustand handle concurrency, and what are the risks of race conditions when multiple async actions update the same store?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","Concurrency","Race Conditions","Async Actions"],
    enAnswer: "Zustand updates synchronously via set() but async actions execute asynchronously. If multiple async updates occur, a race condition can cause older network requests to overwrite newer data. Fix this by checking ID markers or using AbortSignals inside actions.",
    bnAnswer: "Zustand-এ set() সিনক্রোনাস হলেও এসিনক্রোনাস অ্যাকশনগুলোর শেষ হওয়ার গ্যারান্টি নেই। একাধিক রিকোয়েস্ট ফায়ার হলে আগের স্লো এপিআই এর রেসপন্স এসে নতুন ডাটা ওভাররাইট করতে পারে। এপিআই ক্যানসেলেশন সিগন্যাল দিয়ে এটি সমাধান করতে হয়।",
    enExplanation: `### Explanation
In Zustand, state updates are synchronous, but data fetching or calculations inside actions are asynchronous. If a user triggers the same async action multiple times in rapid succession:
- **The Race Condition**:
  - Request 1 is dispatched (takes 3 seconds).
  - Request 2 is dispatched (takes 1 second).
  - Request 2 resolves first and sets state to value B.
  - Request 1 resolves last and sets state to value A.
  - **Result**: The UI displays outdated state A, even though the user's final action was request 2.

### Real-World Example
In a search result filtering sidebar:
- Clicking "Books" fires fetch 1.
- Clicking "Electronics" fires fetch 2.
- Due to server lag, the books request completes last, displaying books items even though the "Electronics" checkbox is active.

### Best Practice
Track request identifiers or use \`AbortController\` inside actions. Store the current request ID inside the action closure, and check if the query ID has changed before calling \`set()\`. Alternatively, invoke \`.abort()\` on the previous request controller.

### Common Mistakes
Allowing multiple asynchronous fetches to resolve and call \`set()\` blindly without verifying if another, newer action has already executed.

### Code Example
\`\`\`typescript


// SearchStore {
  results: string[];
  currentQueryId: number;
  search: (query: string) => Promise<void>;
}

exports.useSearchStore = create<SearchStore>((set, get) => ({
  results: [],
  currentQueryId: 0,
  
  search: async (query) => {
    // 1. Generate unique incrementing ID for this request
    const queryId = get().currentQueryId + 1;
    set({ currentQueryId: queryId });

    try {
      const res = await fetch(\`/api/search?q=\${query}\`);
      const data = await res.json();

      // 2. CRITICAL: Only update state if this is still the latest request!
      if (queryId === get().currentQueryId) {
        set({ results: data });
      } else {
        console.log("Ignored outdated race condition response:", query);
      }
    } catch (err) {
      console.error(err);
    }
  },
}));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জুস্ট্যান্ডে স্টেট পরিবর্তন সঙ্গে সঙ্গে (সিনক্রোনাসলি) ঘটলেও এপিআই ফেচিং চলে ব্যাকগ্রাউন্ডে। ইউজার যদি ব্যাক-টু-ব্যাক বাটনে ক্লিক করতে থাকেন, তবে রেস কন্ডিশন (Race Condition) হতে পারে:
- রিকোয়েস্ট ১ ফায়ার হলো (সার্ভার স্লো থাকায় ৩ সেকেন্ড নিল)।
- রিকোয়েস্ট ২ ফায়ার হলো (১ সেকেন্ড নিল)।
- ২য় কলটি আগে শেষ হয়ে স্ক্রিনে ডাটা B সেভ করে দিল।
- ৩য় সেকেন্ডে ১ম কল শেষ হয়ে ডাটা B মুছে ডাটা A বসিয়ে দিল। ইউজার স্ক্রিনে ২য় বার ক্লিকের পরিবর্তে ১ম বারের ওল্ড ডাটা দেখতে পাবেন।

### বাস্তব-ভিত্তিক উদাহরণ
সার্চ ফিল্টারিং পেজ: ইউজার প্রথমে 'বই' সিলেক্ট করলেন, পরে সাথে সাথে 'মোবাইল' সিলেক্ট করলেন। মোবাইল এপিআই আগে ডাটা এনে দেখালেও বইয়ের স্লো এপিআই পরে লোড হয়ে মোবাইল স্ক্রিন রিপ্লেস করে বইয়ের তালিকা দেখাবে।

### উত্তম অনুশীলন
অ্যাকশনের ভেতর ইনক্রিমেন্টিং কুয়েরি আইডি (\`queryId\`) ট্র্যাকিং সেট করুন। রিকোয়েস্ট সফল হওয়ার পর কারেন্ট আইডির সাথে মেলালেই কেবল \`set\` কল সচল করুন, নতুবা ডাটা ইগনোর করুন।

### সাধারণ ভুলসমূহ
আইডি চেক বা এপিআই ক্যানসেল করা ছাড়া সরাসরি প্রমিস সলভ করে \`set()\` কল করা, যা ডাটা ইনকনসিস্টেন্সি তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript


// SearchStore {
  results: string[];
  currentQueryId: number;
  search: (query: string) => Promise<void>;
}

exports.useSearchStore = create<SearchStore>((set, get) => ({
  results: [],
  currentQueryId: 0,
  
  search: async (query) => {
    // ১. এই রিকোয়েস্টের জন্য ইউনিক আইডি জেনারেট করা হলো
    const queryId = get().currentQueryId + 1;
    set({ currentQueryId: queryId });

    try {
      const res = await fetch(\`/api/search?q=\${query}\`);
      const data = await res.json();

      // ২. যাচাই: আইডি যদি রানিং কুয়েরি আইডির সমান হয় তবেই কেবল স্টেট আপডেট হবে
      if (queryId === get().currentQueryId) {
        set({ results: data });
      } else {
        console.log("রেস কন্ডিশনের কারণে ডাটা বাতিল করা হলো:", query);
      }
    } catch (err) {
      console.error(err);
    }
  },
}));
\`\`\``
  },
  {
    id: "state-query-75",
    title: "How do you implement advanced RTK Query custom base queries (e.g., custom Axios instance with automatic token refreshing)?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Axios","Token Refresh","JWT"],
    enAnswer: "To implement custom base queries with token refreshing, define a custom wrapper function around baseQuery. Inside, intercept requests, check for expired tokens, run token refresh API calls synchronously, and retry the original request.",
    bnAnswer: "টোকেন রিফ্রেশ সহ কাস্টম বেইস কুয়েরি তৈরি করতে baseQuery-র ওপর কাস্টম ফাংশন র‍্যাপার লিখতে হয়। এর ভেতর টোকেন মেয়াদোত্তীর্ণ চেক করে রিফ্রেশ এপিআই অ্যাওয়েট করে পুনরায় মূল রিকোয়েস্ট ফায়ার করা হয়।",
    enExplanation: `### Explanation
While \`fetchBaseQuery\` is sufficient for simple APIs, complex applications require custom features like automatic JWT token refreshing when receiving a 401:
- Define a custom function matching the signature: \`(args, api, extraOptions) => Promise<{ data: any } | { error: any }>\`.
- Inside, execute requests using a custom library (like Axios).
- If the response returns a \`401 Unauthorized\`:
  - Lock subsequent requests.
  - Fetch a new access token using a refresh token endpoint.
  - If refresh succeeds, store the new token and retry the original request using the updated authorization headers.
  - If refresh fails, dispatch a logout action.

### Real-World Example
In a secure bank panel app, the access token expires every 15 minutes. The user doesn't notice because the custom base query catches the 401, silently calls \`/refresh-token\` in the background, updates the store, and loads the dashboard widget data seamlessly.

### Best Practice
Wrap the token refresh call in a mutex or dynamic lock flag to prevent sending multiple refresh token requests simultaneously if several API calls return 401 at the same time.

### Common Mistakes
Retrying requests infinitely if the refresh token itself has expired and returns 401, creating infinite fetch loops that freeze the browser.

### Code Example
\`\`\`typescript



const rawBaseQuery = fetchBaseQuery({ baseUrl: '/api/' });

exports.customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // 1. Run the original request
  let result = await rawBaseQuery(args, api, extraOptions);

  // 2. Intercept 401 Unauthorized status
  if (result.error && result.error.status === 401) {
    console.log('Access token expired. Attempting silent refresh...');

    // Try to get a new access token
    const refreshResult: any = await rawBaseQuery(
      { url: 'auth/refresh', method: 'POST' },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Refresh succeeded! Retry the original request with the new session
      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      // Refresh failed! Force logout
      api.dispatch(logout());
    }
  }

  return result;
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এপিআই রিকোয়েস্ট সিকিউর করতে টোকেন রিফ্রেশ মেকানিজম সম্পন্ন কাস্টম বেইস কুয়েরি ডিক্লেয়ারেশন:
- এটি \`(args, api, extraOptions) => Promise\` ফরম্যাটের কাস্টম ফাংশন রিসিভ করে।
- প্রথম রিকোয়েস্ট ফায়ার হওয়ার পর রেসপন্স ৪০১ (Unauthorized) আসলে:
  - এটি কারেন্ট কল হোল্ড করে।
  - ব্যাকগ্রাউন্ডে সাইন্ড কুকি বা রিফ্রেশ টোকেন পাঠিয়ে নতুন এক্সেস টোকেন রিকোয়েস্ট করে।
  - টোকেন পাওয়া গেলে নতুন হেডার নিয়ে পুনরায় ওল্ড এপিআই রিকোয়েস্টটি ফায়ার করে।
  - রিফ্রেশ প্রসেস ফেইল করলে সরাসরি ইউজারকে লগআউট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
সিকিউর ড্যাশবোর্ডে সেশন টোকেনের মেয়াদ ১৫ মিনিট। ১৫ মিনিট পর যেকোনো বাটনে চাপ দিলে ব্যাকগ্রাউন্ডে কাস্টম কুয়েরি ৪০১ এরর পেয়ে অটোমেটিক নতুন টোকেন জেনারেট করে ডাটা লোড করে দেয়, যার ফলে ইউজার কোনো বাফারিং বা এরর পপ-আপ দেখতে পান না।

### উত্তম অনুশীলন
একাধিক এপিআই একই সময়ে ফেইল করলে একসাথে ৪-৫ বার টোকেন রিফ্রেশ কল করা এড়াতে সিঙ্গেল মিউটেক্স লক সিস্টেম ব্যবহার করুন।

### সাধারণ ভুলসমূহ
রিফ্রেশ টোকেন নিজেই এক্সপায়ার হয়ে যাওয়ার পর কন্ডিশনাল স্টপ না রাখা, যা ইনফিনিট রিফ্রেশ কল লুপ তৈরি করে ব্রাউজার হ্যাং করে।

### কোড উদাহরণ
\`\`\`typescript



const rawBaseQuery = fetchBaseQuery({ baseUrl: '/api/' });

exports.customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // ১. প্রাথমিক রিকোয়েস্ট চালানো হলো
  let result = await rawBaseQuery(args, api, extraOptions);

  // ২. ৪০১ আনঅথরাইজড এরর ইন্টারসেপ্ট করা
  if (result.error && result.error.status === 401) {
    console.log('টোকেনের মেয়াদ শেষ। রিফ্রেশ করার চেষ্টা চলছে...');

    // সাইলেন্ট রিফ্রেশ রিকোয়েস্ট পাঠানো
    const refreshResult: any = await rawBaseQuery(
      { url: 'auth/refresh', method: 'POST' },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // রিফ্রেশ সফল! নতুন টোকেন দিয়ে রি-ট্রাই করা হচ্ছে
      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      // রিফ্রেশ ব্যর্থ! ডিসপ্যাচ লগআউট
      api.dispatch(logout());
    }
  }

  return result;
};
\`\`\``
  },
  {
    id: "state-query-76",
    title: "How do you handle server-side rendering (SSR) data hydration with Redux Toolkit in Next.js App Router?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","SSR","Next.js","Hydration","App Router"],
    enAnswer: "Handle SSR data hydration in Next.js App Router by initializing the store inside a custom provider using useRef, fetching initial data on server components, and dispatching it to the client store upon initialization to ensure state consistency.",
    bnAnswer: "Next.js অ্যাপ রাউটারে SSR ডাটা হাইড্রেশন হ্যান্ডেল করতে প্রোভাইডারে useRef দিয়ে স্টোর ইনিশিয়ালাইজ করতে হয়, সার্ভার কম্পোনেন্টে প্রাক-ডাটা ফেচ করে ক্লায়েন্ট লোডে ডিসপ্যাচের মাধ্যমে স্টেট সামঞ্জস্য নিশ্চিত করা হয়।",
    enExplanation: `### Explanation
In the Pages Router, Redux used \`next-redux-wrapper\`. In the App Router, this is replaced by a React Server Component (RSC) pattern:
- **Singleton Prevention**: Next.js handles multiple concurrent user requests. Storing a global store singleton across server renders leaks data between users.
- **Provider Wrapper**: Wrap the store creation in a \`useRef\` inside a Client Component wrapper: \`const storeRef = useRef(makeStore())\`.
- **RSC Pre-population**:
  - Fetch data on the Server Component.
  - Pass the resolved data to the client-side provider component as props.
  - Dispatch a bootstrap/hydration action inside the store ref constructor block to pre-populate Redux state before React hydration begins.

### Real-World Example
In a blog page:
- Next.js Server Component queries the list of articles from the database.
- It passes the array as \`initialArticles\` prop to the Redux Provider layout.
- The Redux Provider initializes the store with the articles array preloaded, preventing client-side layout shifts and enabling search and sort logic immediately.

### Best Practice
Only use Redux for dynamic client-side interactions on preloaded data. Avoid utilizing Redux as the primary data fetch coordinator inside Next.js; leave server state queries to React Server Components or TanStack Query.

### Common Mistakes
Declaring the Redux store as a global singleton variable at the file level in a Next.js server file, causing memory leaks and user session data to bleed across requests.

### Code Example
\`\`\`typescript
// src/store/StoreProvider.tsx
'use client';




import rootReducer from './rootReducer';

// Store factory function
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

type AppStore = ReturnType<typeof makeStore>;

export default function StoreProvider({
  initialUser,
  children,
}: {
  initialUser: any;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    // 1. Create the store instance once per request
    storeRef.current = makeStore();
    
    // 2. Pre-populate store with SSR data
    storeRef.current.dispatch({
      type: 'auth/hydrateUser',
      payload: initialUser,
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js অ্যাপ রাউটারে রেডক্স ব্যবহারের নিয়ম ও হাইড্রেশন হ্যান্ডলিং:
- **সিঙ্গেলটন নিষেধাজ্ঞা**: সার্ভার রেন্ডারিংয়ের সময় গ্লোবাল সিঙ্গেলটন মেমোরি ব্যবহার করলে এক ইউজারের সিকিউর ডাটা অন্য ইউজারের ব্রাউজার সেশনে চলে যেতে পারে (Data Bleeding)।
- **উইরেফ স্টোর**: সলিউশন হলো ক্লায়েন্ট কম্পোনেন্ট প্রোভাইডারের ভেতর \`useRef\` দিয়ে রিকোয়েস্ট প্রতি আলাদা স্টোর ইনস্ট্যান্স তৈরি করা।
- **এসএসআর পপুলেশন**: সার্ভার কম্পোনেন্টে ডাটা ফেচ করে তা প্রোভাইডারে প্রপস হিসেবে পাঠিয়ে ডেসপ্যাচের মাধ্যমে স্টেট প্রাক-লোড করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
পোর্টাল ড্যাশবোর্ডে সার্ভার কম্পোনেন্ট ডাটাবেজ থেকে ডাটা রিড করল। প্রোভাইডারের \`initialUser\` প্রপসে সেটি পাস করা হলো। রিঅ্যাক্ট ব্রাউজারে মাউন্ট হওয়ার আগেই রেডক্স স্টোরে ইউজারের প্রোফাইল ডাটা চলে গেল, ফলে পেজ একটুও ফ্লিকার না করে ফাস্ট রেডি হবে।

### উত্তম অনুশীলন
সার্ভার সাইড রেন্ডারিং ডাটা ইন্টিগ্রেশনে নেক্সট জেএস-এর নিজস্ব ডাটা ফেচিং প্রসেস ও RSC ব্যবহার করুন। ক্লায়েন্ট সাইড ইন্টারেক্টিভিটি ম্যানেজ করতে শুধুমাত্র রেডক্স প্রোভাইডার ব্যবহার করুন।

### সাধারণ ভুলসমূহ
নেক্সট জেএস ফাইলে গ্লোবাল ভেরিয়েবল হিসেবে স্টোর ডিক্লেয়ার করে রাখা, যা রিকোয়েস্ট লিক ও সিকিউরিটি এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript
// src/store/StoreProvider.tsx
'use client';




import rootReducer from './rootReducer';

// স্টোর তৈরির ফ্যাক্টরি ফাংশন
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

type AppStore = ReturnType<typeof makeStore>;

export default function StoreProvider({
  initialUser,
  children,
}: {
  initialUser: any;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    // ১. রিকোয়েস্ট প্রতি একবারই স্টোর তৈরি হবে
    storeRef.current = makeStore();
    
    // ২. এসএসআর ডাটা দিয়ে স্টোর প্রাক-লোড করা হলো
    storeRef.current.dispatch({
      type: 'auth/hydrateUser',
      payload: initialUser,
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
\`\`\``
  },
  {
    id: "state-query-77",
    title: "How do you handle token-based authentication and secure session state using Redux Toolkit middleware and RTK Query?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Authentication","Token Security","JWT"],
    enAnswer: "Handle token-based authentication by storing access tokens in memory (Redux state) and refresh tokens in secure HttpOnly cookies. Use custom RTK middleware to listen to logout actions and clear caches, and inject access tokens dynamically inside api.prepareHeaders.",
    bnAnswer: "টোকেন-ভিত্তিক অথরাইজেশন হ্যান্ডেল করতে এক্সেস টোকেন মেমোরিতে (Redux state) এবং রিফ্রেশ টোকেন HttpOnly কুকিতে স্টোর করতে হয়। কাস্টম আরটিকে মিডলওয়্যার দিয়ে ক্যাশ ক্লিয়ার ও api.prepareHeaders দিয়ে টোকেন ইনজেকশন সম্পন্ন করা হয়।",
    enExplanation: `### Explanation
Storing JWT tokens securely is critical to prevent XSS (Cross-Site Scripting) token thefts:
- **Security Vulnerability**: Storing access/refresh tokens inside \`localStorage\` makes them readable by malicious script injections.
- **Secure Architecture**:
  1. **Access Token**: Store strictly in memory (Redux state variable). If the user refreshes, it vanishes.
  2. **Refresh Token**: Store inside a secure, \`HttpOnly\`, \`SameSite=Strict\`, \`Secure\` cookie. Javascript cannot read this cookie.
  3. **Auto-injection**: Inside RTK Query \`prepareHeaders\`, select the access token from the Redux state and attach it to the headers dynamically.
  4. **Silent Refresh**: If the access token expires (or on page reload), dispatch a thunk calling the \`/refresh\` endpoint. The browser sends the secure cookie, and the server returns a new access token to Redux.

### Real-World Example
In a banking app. The user logs in, and the API sets the refresh cookie and returns the short-lived access token to Redux. The user browses pages; the custom middleware monitors request failures. When the access token expires, the client silently fetches a new one without interrupting the active payment page.

### Best Practice
Clear all cached RTK Query state data using \`dispatch(api.util.resetApiState())\` when a logout action occurs. This prevents a subsequently logged-in user from reading the previous user's cached details.

### Common Mistakes
Storing the raw JWT token string inside \`localStorage\` or public Redux state trees that persist directly into local disk spaces.

### Code Example
\`\`\`typescript
// src/services/authApi.ts



exports.secureApi = createApi({
  reducerPath: 'secureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { getState }) => {
      // 1. Select access token from memory (Redux state) securely
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  tagTypes: ['UserData'],
  endpoints: (builder) => ({
    getSensitiveData: builder.query<any, void>({
      query: () => 'sensitive-records',
      providesTags: ['UserData'],
    }),
  }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ব্রাউজারে টোকেন লিক প্রতিরোধ ও সিকিউর অথরাইজেশন আর্কিটেকচার সেটআপ:
- **লোকালস্টোরেজ ঝুঁকি**: এক্সেস টোকেন বা রিফ্রেশ টোকেন লোকালস্টোরেজে রাখলে ক্ষতিকারক স্ক্রিপ্ট তা হ্যাক করতে পারে।
- **নিরাপদ মডেল**:
  ১. **এক্সেস টোকেন**: শুধুমাত্র রেডক্স মেমোরিতে (Redux state) রাখুন। রিফ্রেশ দিলে এটি ভ্যানিশ হয়ে যাবে।
  ২. **রিফ্রেশ টোকেন**: সার্ভার থেকে \`HttpOnly\`, \`SameSite=Strict\`, \`Secure\` কুকি হিসেবে সেট করুন। জাভাস্ক্রিপ্ট দিয়ে এই কুকি রিড করা অসম্ভব।
  ৩. **হেডার বাইন্ডিং**: \`prepareHeaders\` মেথড রেডক্স মেমোরি থেকে টোকেন নিয়ে ডেসপ্যাচ হেডারে বসাবে।
  ৪. **সাইলেন্ট রিফ্রেশ**: টোকেন এক্সপায়ার হলে এপিআই ইন্টারসেপ্ট করে সাইলেন্টলি রিফ্রেশ কল পাঠিয়ে নতুন টোকেন মেমোরিতে রাইট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফাইন্যান্সিয়াল পোর্টালে লগইন করার পর রিফ্রেশ কুকি ব্রাউজার কুকিতে জমা হলো আর আরটিকে মেমোরিতে আসল এক্সেস টোকেন। কাজ শেষে ইউজার ট্যাব কেটে দিলে এক্সেস টোকেন ডিলিট হয়ে গেল। আবার পেজ অন করলে সাইলেন্ট রিফ্রেশ এপিআই কুকি চেক করে অটো লগইন করিয়ে দিল।

### উত্তম অনুশীলন
ইউজার লগআউট করার সাথে সাথে \`dispatch(api.util.resetApiState())\` কল করে মেমোরি ক্যাশ সম্পূর্ণ ফাঁকা করে দিন যাতে পরবর্তী ব্যক্তি আগের ইউজারের ডাটা দেখতে না পায়।

### সাধারণ ভুলসমূহ
টোকেন অবজেক্টটি ডিরেক্ট লোকালস্টোরেজে লিখে রাখা বা ডেভটুলসে হাইড না করে পাবলিকলি স্টোর করা।

### কোড উদাহরণ
\`\`\`typescript
// src/services/authApi.ts



exports.secureApi = createApi({
  reducerPath: 'secureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { getState }) => {
      // ১. রেডক্স মেমোরি থেকে এক্সেস টোকেন রিড করা হচ্ছে
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  tagTypes: ['UserData'],
  endpoints: (builder) => ({
    getSensitiveData: builder.query<any, void>({
      query: () => 'sensitive-records',
      providesTags: ['UserData'],
    }),
  }),
});
\`\`\``
  },
  {
    id: "state-query-78",
    title: "What is action matching in Redux Toolkit, and how do you use matching utilities like isAnyOf, isPending, or isRejected in custom middlewares?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","Action Matching","isAnyOf","Middleware"],
    enAnswer: "Action matching utilities in RTK allow creating type-guard predicates to check action lifecycles. Using isAnyOf, isPending, or isRejected, custom middlewares can intercept and filter multiple action types dynamically without writing massive switch-case statements.",
    bnAnswer: "action matching হলো আরটিকে-র টাইপ-গার্ড মেকানিজম যা দিয়ে গ্রুপ অ্যাকশন ক্যাচ করা যায়। isAnyOf, isPending বা isRejected ব্যবহার করে কাস্টম মিডলওয়্যারে সুইচ-কেস ছাড়াই ডাইনামিক্যালি একাধিক অ্যাকশন টাইপ ফিল্টার করা যায়।",
    enExplanation: `### Explanation
Redux Toolkit provides **Action Matching** utilities that act as type guards:
- **\`isPending\`**: Returns \`true\` if the action is an async thunk pending status.
- **\`isRejected\`**: Returns \`true\` if the action failed.
- **\`isAnyOf\`**: Takes an array of action creators and returns \`true\` if the action matches any of them.

Inside custom middlewares or slice \`extraReducers\`, these functions serve as conditional checks. They automatically cast the action type payload in TypeScript, keeping your code strongly typed.

### Real-World Example
In a global notification logging middleware. Instead of mapping 10 different action names to show error messages:
- Use \`isRejected\` or \`isAnyOf(updateUser.rejected, fetchPosts.rejected)\` to intercept any failure.
- Trigger a global error notification toast containing the error message automatically.

### Best Practice
Use action matching to handle cross-cutting features (like global error toasts, loading spinner overlays, or user analytics tracking) inside a single, unified middleware.

### Common Mistakes
Writing duplicate, repetitive reducer states inside multiple slices to handle loading flags instead of using a global loader middleware with \`isPending\` matchers.

### Code Example
\`\`\`typescript



// Custom middleware using action matching utilities
exports.errorLoggerMiddleware: Middleware = (store) => (next) => (action: any) => {
  // 1. Check if ANY action was rejected (failed)
  if (isRejected(action)) {
    console.error(\`Action \${action.type} failed! Error:\`, action.error?.message);
    
    // Dispatch global toast display action
    store.dispatch({
      type: 'toast/show',
      payload: { message: action.error?.message || 'Server error occurred', type: 'error' }
    });
  }

  // 2. Check if action is login or logout
  if (isAnyOf(login, logout)(action)) {
    console.log('Security Event Triggered:', action.type);
  }

  return next(action);
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স টুলকিট অ্যাকশন ম্যাচার (Action Matcher) ইউটিলিটি প্রোভাইড করে যা টাইপ-গার্ড হিসেবে কাজ করে:
- **\`isPending\`**: কোনো এসিনক্রোনাস থাঙ্ক পেন্ডিং স্টেটে থাকলে \`true\` রিটার্ন করে।
- **\`isRejected\`**: কোনো রিকোয়েস্ট ফেইল করলে \`true\` রিটার্ন করে।
- **\`isAnyOf\`**: অনেকগুলো অ্যাকশনের লিস্ট থেকে যেকোনো একটি ফায়ার হলে \`true\` রিটার্ন করে।

এর ফলে মিডলওয়্যারে বিশাল বড় বড় সুইচ-কেস কোড লিখতে হয় না এবং কোড টাইপ সেফ থাকে।

### বাস্তব-ভিত্তিক উদাহরণ
গ্লোবাল এরর নোটিফিকেশন: প্রতিটি এপিআই ফেইলরের জন্য আলাদা স্লাইস কেস না লিখে মিডলওয়্যারে \`isRejected\` ম্যাচিং ব্যবহার করে যেকোনো রিকোয়েস্ট রিজেক্ট হওয়া মাত্র স্ক্রিনে লাল এরর নোটিফিকেশন অ্যালার্ট ট্রিগার করে দেওয়া সম্ভব।

### উত্তম অনুশীলন
গ্লোবাল ক্রস-কাটিং কাজগুলোর জন্য (যেমন: গ্লোবাল লোডার বা অ্যানালিটিক্স ট্র্যাক) এই ম্যাচার ফাংশনগুলো ব্যবহার করে একটি সিঙ্গেল মিডলওয়্যার প্রিপেয়ার করুন।

### সাধারণ ভুলসমূহ
প্রতিটি স্লাইসে আলাদা আলাদা করে লোডিং ফ্ল্যাগ ও এরর স্টেট ভেরিয়েবল ডিফাইন করে কোডের আকার অহেতুক বৃদ্ধি করা।

### কোড উদাহরণ
\`\`\`typescript



// অ্যাকশন ম্যাচার ইউটিলিটি সহ কাস্টম মিডলওয়্যার
exports.errorLoggerMiddleware: Middleware = (store) => (next) => (action: any) => {
  // ১. চেক: যেকোনো অ্যাকশন রিজেক্টেড (ফেইল) হয়েছে কি না
  if (isRejected(action)) {
    console.error(\`অ্যাকশন \${action.type} ব্যর্থ! এরর:\`, action.error?.message);
    
    // গ্লোবাল টোস্ট ডিসপ্যাচ করা হচ্ছে
    store.dispatch({
      type: 'toast/show',
      payload: { message: action.error?.message || 'Server error occurred', type: 'error' }
    });
  }

  // ২. চেক: অ্যাকশনটি লগইন বা লগআউটের কি না
  if (isAnyOf(login, logout)(action)) {
    console.log('সিকিউরিটি ইভেন্ট ট্রিগার হয়েছে:', action.type);
  }

  return next(action);
};
\`\`\``
  },
  {
    id: "state-query-79",
    title: "How do you configure RTK Query for streaming updates (e.g., SSE, WebSockets, or polling) using the onCacheEntryAdded lifecycle hook?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Streaming","WebSockets","onCacheEntryAdded"],
    enAnswer: "Configure streaming updates in RTK Query by utilizing the onCacheEntryAdded hook inside the query endpoint. Inside, instantiate a WebSocket or EventSource, update the cache dynamically using updateCachedData when messages arrive, and close the socket in the cacheEntryRemoved promise block.",
    bnAnswer: "RTK Query-তে স্ট্রিমিং বা ওয়েব সকেট ইন্টিগ্রেশন করতে অ্যান্ডপয়েন্টের onCacheEntryAdded হুক ব্যবহার করতে হয়। এর ভেতর WebSocket কানেক্ট করে ডাটা পাওয়া মাত্র updateCachedData দিয়ে ক্যাশ এডিট করতে হয় ও কানেকশন ক্লোজ চেক করতে হয়।",
    enExplanation: `### Explanation
RTK Query provides the \`onCacheEntryAdded\` lifecycle callback to manage long-lived connections (WebSockets or Server-Sent Events) bound to cache entries:
- **Trigger**: Runs when a component mounts and subscribes to the endpoint query, creating a cache entry.
- **Workflow**:
  1. Open a WebSocket connection inside \`onCacheEntryAdded\`.
  2. Wait for incoming socket events.
  3. When a message arrives, call the provided \`updateCachedData\` callback to update the cache slice dynamically.
  4. **Cleanup**: Await the \`cacheEntryRemoved\` Promise. When all components unsubscribe and the cache entry is cleared, close the WebSocket connection to prevent leaks.

### Real-World Example
In a stock price ticker dashboard or a chat screen:
- The page initial loads messages via a query fetch.
- \`onCacheEntryAdded\` establishes a WebSocket connection.
- When new chat messages are pushed from the server, they are appended to the cache list.
- When the user leaves the chat page, the connection closes automatically.

### Best Practice
Always handle connection drops inside the socket listener. If the connection fails, implement automated reconnection retry logics to maintain // stability.

### Common Mistakes
Leaving WebSockets open forever because of ignoring the \`cacheEntryRemoved\` promise trigger, which leaks server resources and exhausts browser sockets.

### Code Example
\`\`\`typescript


exports.chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getChatMessages: builder.query<string[], string>({
      query: (roomId) => \`rooms/\${roomId}/messages\`,
      
      // Real-time WebSocket streaming configuration
      async onCacheEntryAdded(roomId, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        // Create WebSocket connection
        const ws = new WebSocket(\`wss://api.example.com/rooms/\${roomId}/stream\`);
        
        try {
          // Wait for initial query fetch to resolve first
          await cacheDataLoaded;
          
          // Listen to incoming messages
          ws.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);
            
            // Push message directly into the RTK Query cache!
            updateCachedData((draft) => {
              draft.push(message);
            });
          });
        } catch {}
        
        // Wait for cache entry cleanup (unmount)
        await cacheEntryRemoved;
        ws.close(); // Close socket connection safely
      },
    }),
  }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query-তে রিয়েল-টাইম ডাটা সিঙ্কিং (যেমন: WebSocket বা SSE) হ্যান্ডেল করতে \`onCacheEntryAdded\` লাইফসাইকেল মেথড ব্যবহার করা হয়:
- **কাজের নিয়ম**:
  ১. কম্পোনেন্ট মাউন্ট হয়ে ক্যাশ এন্ট্রি সচল হওয়ার সাথে সাথে এই হুক রান করে।
  ২. হুকের ভেতর \`new WebSocket()\` কানেকশন ওপেন করা হয়।
  ৩. এপিআই সার্ভার থেকে ডাটা পুশ করলে \`updateCachedData\` কল করে সরাসরি ক্যাশে ডাটা পুশ করা হয়।
  ৪. ইউজার পেজ থেকে চলে গেলে (\`cacheEntryRemoved\` প্রমিস সলভ হলে) সকেট কানেকশন ক্লোজ করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি লাইভ কাস্টমার সাপোর্ট চ্যাট উইন্ডো:
- শুরুতে ওল্ড চ্যাট মেসেজগুলো এপিআই কুয়েরি দিয়ে রিড করা হয়।
- কানেকশন সচল হওয়ার পর নতুন মেসেজ আসলে তা সকেটের মাধ্যমে সরাসরি ক্যাশে অ্যাপেন্ড হয়ে স্ক্রিনে ভেসে ওঠে।
- ইউজার চ্যাট উইন্ডো ক্লোজ করলে সকেট সিঙ্ক অফ হয়ে যায়।

### উত্তম অনুশীলন
মোবাইল ইন্টারনেট ডাটা ড্রপ বা কানেকশন লস হতে পারে, তাই সকেট লিসেনারে অবশ্যই অটো-রিকানেকশন লজিক ডিক্লেয়ার করে রাখুন।

### সাধারণ ভুলসমূহ
\`cacheEntryRemoved\` প্রমিস চেক না করে সকেট কানেকশন ব্যাকগ্রাউন্ডে ওপেন রেখে দেওয়া যা মেমোরি লিক ও পোর্ট লকিং এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript


exports.chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getChatMessages: builder.query<string[], string>({
      query: (roomId) => \`rooms/\${roomId}/messages\`,
      
      // রিয়েল-টাইম ওয়েব সকেট স্ট্রিমিং কনফিগারেশন
      async onCacheEntryAdded(roomId, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const ws = new WebSocket(\`wss://api.example.com/rooms/\${roomId}/stream\`);
        
        try {
          // প্রথমে বেস কুয়েরি সফল হওয়া পর্যন্ত অপেক্ষা
          await cacheDataLoaded;
          
          ws.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);
            
            // সরাসরি ক্যাশ মেমোরির ড্রাফট অ্যারেতে ডাটা পুশ করা হচ্ছে
            updateCachedData((draft) => {
              draft.push(message);
            });
          });
        } catch {}
        
        // কম্পোনেন্ট আনমাউন্ট হওয়ার প্রমিস অ্যাওয়েট করা হচ্ছে
        await cacheEntryRemoved;
        ws.close(); // সকেট কানেকশন বন্ধ করা হলো
      },
    }),
  }),
});
\`\`\``
  },
  {
    id: "state-query-80",
    title: "How does RTK Query handle circular dependencies and code-splitting when implementing large APIs across multiple feature domains?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Circular Dependencies","injectEndpoints","Code Splitting"],
    enAnswer: "RTK Query solves circular dependencies and code-splitting through injectEndpoints(). Define a single empty api wrapper at the root, and inject feature-specific endpoints dynamically in separate modules, keeping bundle sizes optimized.",
    bnAnswer: "RTK Query circular dependency এবং কোড-স্প্লিটিং সমাধান করতে injectEndpoints() মেথড দেয়। প্রজেক্টের শুরুতে একটি ফাঁকা এপিআই তৈরি করে পরবর্তীতে অন্যান্য ফিচার ফাইলের ভেতর অ্যান্ডপয়েন্ট ইনজেক্ট করতে হয়।",
    enExplanation: `### Explanation
In large applications, defining all API endpoints in a single \`api\` file leads to circular dependencies:
- Feature A imports the central \`api\` file.
- The central \`api\` file imports types or endpoints from feature A's directory.
- This creates a circular loop, failing compilation or runtime bundle execution.

**RTK Query's Solution: \`injectEndpoints\`**:
1. **Root API Definition**: Create a single, central API wrapper using \`createApi\` with empty endpoints: \`endpoints: () => ({})\`. Register this root API reducer in the store configuration.
2. **Feature API Injections**: Inside each feature folder (e.g., \`features/cart/cartApi.ts\`), import the central root API and call \`rootApi.injectEndpoints({ endpoints: ... })\`.
3. RTK Query merges these endpoints dynamically. The bundle loader compiles files without circular dependencies, and page bundles remain separated.

### Real-World Example
In a modular dashboard:
- User module: lazy loaded at \`/user\`.
- Admin module: lazy loaded at \`/admin\`.
- Both modules use the root Redux store. Using \`injectEndpoints\`, the admin endpoints are not loaded or compiled into the main Javascript bundle until the user visits \`/admin\`, reducing initial page speed metrics.

### Best Practice
Set \`overrideExisting: false\` (or dynamic parameters based on dev environment) inside \`injectEndpoints\` to prevent accidental overwrites of existing endpoints across different modules.

### Common Mistakes
Importing sub-endpoint hooks inside the central root API file, which re-introduces the circular dependency compilation errors you were trying to avoid.

### Code Example
\`\`\`typescript
// --- src/services/rootApi.ts (Root API definition) ---


exports.rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: () => ({}), // Start empty to prevent circular imports!
});

// --- src/features/users/usersApi.ts (Injected inside user module) ---


const usersApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => 'users',
    }),
  }),
  overrideExisting: false, // Prevent accidental overwriting
});

// Export the injected query hook
exports.{ useGetUsersQuery } = usersApi;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
বড় প্রজেক্টে সব এপিআই অ্যান্ডপয়েন্ট এক ফাইলে ডিক্লেয়ার করলে সার্কুলার ডিপেন্ডেন্সি (Circular Dependency) এরর দেখা দেয়:
- স্লাইস A ইম্পোর্ট করে সেন্ট্রাল এপিআই ফাইল।
- সেন্ট্রাল এপিআই ফাইল আবার স্লাইস A-র ভেরিয়েবল ইম্পোর্ট করে, যা লুপ তৈরি করে।

**সমাধান: \`injectEndpoints\`**:
১. **রুট এপিআই**: শুরুতে \`createApi\` দিয়ে একটি ফাঁকা এপিআই ডিফাইন করুন: \`endpoints: () => ({})\`।
২. **ফিচার এপিআই ইনজেকশন**: প্রতিটি ফোল্ডারে (যেমন: \`/cart\`) মূল রুট এপিআই ফাইল ইম্পোর্ট করে \`rootApi.injectEndpoints()\` এর মাধ্যমে নতুন অ্যান্ডপয়েন্ট যুক্ত করুন।
৩. এর ফলে কোড-স্প্লিটিং সচল থাকে ও সার্কুলার এরর ক্র্যাশ সম্পূর্ণ দূর হয়।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন ড্যাশবোর্ড পেজের অ্যান্ডপয়েন্টগুলো যদি মূল ফাইলে থাকে, তবে মার্কেটিং পেজ ভিজিটরদেরও অ্যাডমিন এপিআই ফাইল ডাউনলোড করতে হবে। \`injectEndpoints\` ব্যবহার করলে অ্যাডমিন মডিউলের জাভাস্ক্রিপ্ট ফাইল কেবল অ্যাডমিন পেজে গেলেই ডাউনলোড হবে।

### উত্তম অনুশীলন
অ্যান্ডপয়েন্ট ইনজেক্ট করার সময় \`overrideExisting: false\` প্রপার্টি সেট করে রাখুন যাতে দুর্ঘটনাবশত একই নামের অন্য কোনো অ্যান্ডপয়েন্ট ওভাররাইট না হয়।

### সাধারণ ভুলসমূহ
ইনজেক্টেড কুয়েরি হুকগুলোকে আবার ভুলবশত সেন্ট্রাল রুট এপিআই ফাইলে ইম্পোর্ট করা, যা সার্কুলার ডিপেন্ডেন্সি ফিরিয়ে আনে।

### কোড উদাহরণ
\`\`\`typescript
// --- src/services/rootApi.ts (রুট এপিআই ফাইল) ---


exports.rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: () => ({}), // সার্কুলার ইম্পোর্ট এড়াতে খালি রাখা হলো
});

// --- src/features/users/usersApi.ts (ইউজার ফিচার ফোল্ডার) ---


const usersApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => 'users',
    }),
  }),
  overrideExisting: false,
});

// ইনজেক্টেড কুয়েরি হুক এক্সপোর্ট
exports.{ useGetUsersQuery } = usersApi;
\`\`\``
  },
  {
    id: "state-query-81",
    title: "How do you handle Server-Side Rendering (SSR) data hydration with TanStack Query in Next.js App Router?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","SSR","Next.js","Hydration","App Router"],
    enAnswer: "Handle SSR hydration in App Router by instantiating QueryClient using a singleton pattern inside Client Providers, prefetching queries on Server Components, dehydrating the client state using dehydrate(), and wrapping routes inside a HydrationBoundary.",
    bnAnswer: "Next.js অ্যাপ রাউটারে SSR হাইড্রেশন হ্যান্ডেল করতে সার্ভার কম্পোনেন্টে প্রাক-কুয়েরি ফেচ করে dehydrate() করা হয় এবং ক্লায়েন্ট সাইডে HydrationBoundary ও QueryClientProvider দিয়ে ডাটা সিঙ্ক করা হয়।",
    enExplanation: `### Explanation
In Next.js App Router, combining Server Components with TanStack Query requires the Hydration pattern:

1. **QueryClient Singleton**: Create a helper to generate a new \`QueryClient\` per request on the server, but keep a singleton on the client to avoid cache loss.
2. **Server-Side Prefetching**:
   - Inside a React Server Component (RSC), instantiate a \`QueryClient\`: \`const queryClient = new QueryClient()\`.
   - Await the prefetch: \`await queryClient.prefetchQuery({ queryKey, queryFn })\`.
3. **Dehydration**:
   - Convert the cached query state into a serializable JSON object using \`dehydrate(queryClient)\`.
4. **Hydration Boundary**:
   - Wrap the child Client Components inside a \`<HydrationBoundary state={dehydratedState}>\`.
   - When the client renders, TanStack Query reads this state and preloads the cache synchronously before hydration begins, avoiding layout shifts or loading spinners.

### Real-World Example
A product details page needs SEO indexability:
- Server Component fetches the product details and dehydrates the store.
- The details page renders immediately on the server.
- The browser hydrates the page instantly using the same dehydrated JSON. No client loading spinner is displayed, and the page is fully interactive.

### Best Practice
Always define your \`queryKey\` identically on both the server and client. If they differ, TanStack Query will fail to match the dehydrated cache and will execute a redundant network request.

### Common Mistakes
Using raw client hooks \`useQuery\` inside Server Components without wrapping the parent layout in a \`HydrationBoundary\`.

### Code Example
\`\`\`typescript
// app/posts/page.tsx (Server Component)

import PostsList from './PostsList'; // Client Component

export default async function PostsPage() {
  const queryClient = new QueryClient();

  // 1. Prefetch query on the server
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://api.example.com/posts');
      return res.json();
    },
  });

  return (
    // 2. Dehydrate state and pass to HydrationBoundary
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}

// app/posts/PostsList.tsx (Client Component)
'use client';


export default function PostsList() {
  // Renders instantly with NO loading spinner because of server hydration!
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(res => res.json()),
  });

  return (
    <ul>
      {data?.map((p: any) => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js অ্যাপ রাউটারে সার্ভার সাইড প্রাক-রেন্ডারিং ও ক্যাশ সিঙ্ক সচল রাখার ধাপসমূহ:

১. **QueryClient Singleton**: ক্লায়েন্টে একটি সিঙ্গেলটন এবং সার্ভারে রিকোয়েস্ট প্রতি নতুন ইনস্ট্যান্স নিশ্চিত করা।
২. **সার্ভার প্রি-ফেচ**:
   - সার্ভার কম্পোনেন্টে (RSC) \`QueryClient\` তৈরি করে এপিআই ফেচ করুন: \`await queryClient.prefetchQuery(...)\`।
৩. **ডিহাইড্রেশন (Dehydration)**:
   - স্টোরের মেমোরি ক্যাশ ডাটাকে সিরিয়ালাইজেবল জেসন ফরম্যাটে রূপান্তর করুন: \`dehydrate(queryClient)\`।
৪. **হাইড্রেশন বাউন্ডারি**:
   - ক্লায়েন্ট কম্পোনেন্টকে \`<HydrationBoundary state={dehydratedState}>\` দিয়ে র্যাপ করে দিন।
   - রিঅ্যাক্ট মাউন্ট হওয়ার সাথে সাথে ব্রাউজারের টানস্ট্যাক কুয়েরি এই ডাটা রিড করে ক্যাশ সিঙ্ক করে নেয়, ফলে স্ক্রিন ঝাঁকুনি খায় না।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ পোস্ট ডিটেইলস পেজ: সার্ভার এপিআই ডাটা ডাউনলোড করে ডিহাইড্রেট করে পাঠাল। ব্রাউজার লোড হওয়া মাত্র জেসন রিড করে কোন বাফারিং ছাড়াই ব্লগটি ফুটিয়ে তুলল। সার্চ ইঞ্জিন ক্রলার সহজেই পুরো ব্লগ রিড করতে পারবে যা এসইও-র জন্য দারুণ।

### উত্তম অনুশীলন
সার্ভার ও ক্লায়েন্টের \`queryKey\` হুবহু এক রাখুন। সামান্য টাইপো থাকলে ক্যাশ মিলবে না এবং ব্রাউজার ফালতু রি-ফেচ রিকোয়েস্ট ফায়ার করবে।

### সাধারণ ভুলসমূহ
\`HydrationBoundary\` ব্যবহার না করেই সার্ভার কম্পোনেন্টে রেগুলার ক্লায়েন্ট হুক \`useQuery\` ব্যবহার করতে চাওয়া, যা রানটাইম ক্র্যাশ ঘটায়।

### কোড উদাহরণ
\`\`\`typescript
// app/posts/page.tsx (Server Component)

import PostsList from './PostsList'; // Client Component

export default async function PostsPage() {
  const queryClient = new QueryClient();

  // ১. সার্ভারে কুয়েরি প্রি-ফেচ করা হচ্ছে
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://api.example.com/posts');
      return res.json();
    },
  });

  return (
    // ২. স্টেট ডিহাইড্রেট করে হাইড্রেশন বাউন্ডারিতে পাস
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}

// app/posts/PostsList.tsx (Client Component)
'use client';


export default function PostsList() {
  // সার্ভার হাইড্রেশনের কারণে কোন লোডিং স্ক্রিন ছাড়াই ইনস্ট্যান্ট রেডি হবে!
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(res => res.json()),
  });

  return (
    <ul>
      {data?.map((p: any) => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}
\`\`\``
  },
  {
    id: "state-query-82",
    title: "How do you implement request deduplication and cache sharing across micro-frontends or isolated React roots?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Architecture","Micro-frontends","TanStack Query","Cache Sharing","Deduplication"],
    enAnswer: "To share cache across micro-frontends, instantiate a single QueryClient globally in the host app and share its reference via window objects or custom event brokers, injecting it into each sub-app provider wrapper.",
    bnAnswer: "মাইক্রো-ফ্রন্টএন্ডে ক্যাশ শেয়ার ও রিকোয়েস্ট ডিডুপ্লিকেট করতে হোস্ট অ্যাপে একটি গ্লোবাল QueryClient তৈরি করে window অবজেক্ট বা ইভেন্ট ব্রোকারের সাহায্যে তা প্রতিটি সাব-অ্যাপে ইনজেক্ট করতে হয়।",
    enExplanation: `### Explanation
In a Micro-frontends (MFE) architecture using module federation:
- Multiple isolated React applications run on the same page.
- If each MFE instantiates its own \`new QueryClient()\`, they will have separate cache registries in memory.
- This results in duplicated network requests (e.g. both App A and App B fetching user profile details independently) and mismatched cache states.

**Unified MFE Caching Pattern**:
1. **Host App**: Initializes a single \`QueryClient\` instance.
2. **Expose**: Binds the instance to a shared global namespace: \`window.__mfe_query_client__ = queryClient\`.
3. **Child MFEs**:
   - Instead of initializing a new client, check if \`window.__mfe_query_client__\` exists.
   - If it does, wrap their sub-root inside \`QueryClientProvider\` using that shared reference.
   - Now, all MFEs share the exact same in-memory cache registry, enabling seamless query deduplication and tab-wide invalidations.

### Real-World Example
An enterprise dashboard where the Navigation bar is built in MFE A, and the Profile settings page is in MFE B. Sharing the query client ensure that when the user updates their profile in MFE B (mutates user cache), the avatar in the navbar (MFE A) updates instantly because they share the same in-memory query reference.

### Best Practice
Verify dependency compatibility across MFEs. All micro-applications must share compatible major versions of \`@tanstack/react-query\` to ensure the internal query cache formats match.

### Common Mistakes
Each micro-app compiling its own version of TanStack Query internally without sharing references, which completely isolates their cache states.

### Code Example
\`\`\`typescript
// --- host-app/index.tsx (Primary container) ---


const sharedQueryClient = new QueryClient();

// Expose query client globally to sub-applications
(window as any).__mfe_query_client__ = sharedQueryClient;


// --- sub-app-profile/index.tsx (Micro-app) ---


// Retrieve the shared client reference or fallback if running standalone
const queryClient = (window as any).__mfe_query_client__ ?? new QueryClient();

export default function MicroAppRoot() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileWidget />
    </QueryClientProvider>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
মডিউল ফেডারেশন সমৃদ্ধ মাইক্রো-ফ্রন্টএন্ড (MFE) আর্কিটেকচারে একই স্ক্রিনে একাধিক স্বাধীন রিঅ্যাক্ট প্রজেক্ট রান করে:
- প্রতিটি প্রজেক্ট যদি আলাদা \`new QueryClient()\` ডিক্লেয়ার করে, তবে তাদের মেমোরি ক্যাশ আলাদা হয়ে যাবে।
- এর ফলে একই এপিআই বারবার ফায়ার হবে এবং ডাটা সিঙ্ক নষ্ট হবে।

**সমাধান: গ্লোবাল ক্যাশ শেয়ারিং প্যাটার্ন**:
১. **হোস্ট অ্যাপ**: হোস্ট ফাইলে একটি প্রধান \`QueryClient\` তৈরি করে।
২. **এক্সপোজ**: এটি ব্রাউজারের উইন্ডো অবজেক্টে সেভ করা হয়: \`window.__mfe_query_client__ = queryClient\`।
৩. **চাইল্ড অ্যাপ**: সাব-অ্যাপটি রান হওয়ার সময় উইন্ডো অবজেক্টের কারেন্ট ক্লায়েন্টটি নিয়ে তার নিজস্ব প্রোভাইডারে সেট করে দেয়।
- এর ফলে সব সাব-অ্যাপ একই মেমোরি শেয়ার করে কাজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি পোর্টালের হেডার মেনু তৈরি অ্যাপ A দিয়ে এবং সেটিংস এডিট স্ক্রিন অ্যাপ B দিয়ে। ইউজার সেটিংসে গিয়ে ছবি পরিবর্তন করলেন। একই ক্যাশ শেয়ার করার ফলে অ্যাপ B-তে মিউটেশন সফল হওয়া মাত্র অ্যাপ A-র হেডার ইমেজও সেকেন্ডে চেঞ্জ হয়ে যাবে।

### উত্তম অনুশীলন
সবগুলো মাইক্রো-অ্যাপ্লিকেশনে টানস্ট্যাক কুয়েরির মেজর ভার্সন এক রাখুন, নতুবা ক্যাশ ফরম্যাটে ত্রুটি দেখা দিতে পারে।

### সাধারণ ভুলসমূহ
মাইক্রো-অ্যাপ্লিকেশনের প্রতিটি অংশ ক্যাশ শেয়ার না করে নিজস্ব পৃথক টানস্ট্যাক কুয়েরি ইনস্ট্যান্স কম্পাইল করা, যা স্টেট আইসোলেট করে ফেলে।

### সাধারণ ভুলসমূহ
মাইক্রো-অ্যাপ্লিকেশনের প্রতিটি অংশ ক্যাশ শেয়ার না করে নিজস্ব পৃথক টানস্ট্যাক কুয়েরি ইনস্ট্যান্স কম্পাইল করা, যা স্টেট আইসোলেট করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript
// --- host-app/index.tsx (হোস্ট প্রজেক্ট) ---


const sharedQueryClient = new QueryClient();

// উইন্ডো অবজেক্টে ক্লায়েন্ট এক্সপোজ করা হলো
(window as any).__mfe_query_client__ = sharedQueryClient;


// --- sub-app-profile/index.tsx (সাব প্রজেক্ট) ---


// হোস্টের শেয়ার করা ক্লায়েন্ট রিড করা হচ্ছে (না থাকলে নতুন ফলব্যাক)
const queryClient = (window as any).__mfe_query_client__ ?? new QueryClient();

export default function MicroAppRoot() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileWidget />
    </QueryClientProvider>
  );
}
\`\`\``
  },
  {
    id: "state-query-83",
    title: "How do you debug memory leaks caused by stale query cache data in TanStack Query, and how do you tune cache cleanups?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Memory Leaks","gcTime","Garbage Collection","Debugging"],
    enAnswer: "Debug memory leaks by capturing Heap Snapshots using Chrome DevTools, identifying retaining paths for query observers, and tuning gcTime and staleTime to ensure inactive components cache is cleared progressively.",
    bnAnswer: "মেমোরি লিক ডিবাগ করতে ক্রোম দেব-টুলস দিয়ে হিপ স্ন্যাপশট নিয়ে কুয়েরি অবজারভারের রিটেইনিং পাথ চেক করতে হয় এবং gcTime ও staleTime মডিফাই করে ইনঅ্যাক্টিভ ক্যাশ দ্রুত মুছে ফেলার ব্যবস্থা করা হয়।",
    enExplanation: `### Explanation
TanStack Query keeps query results in memory to support caching. However, memory leaks can occur if:
- Queries remain \`active\` because component observers are not unregistered (unmounted) properly.
- \`gcTime\` is set too high (e.g., infinity), leaving tons of old historical objects in memory.
- Large, nested responses are cached and never purged.

**Tuning Cleanups**:
- **\`gcTime\` (Garbage Collection Time)**: Reduce this value (e.g., from 5 minutes to 1 minute) for heavy data pages to clear inactive cache lines quickly.
- **\`Observer Cleanup\`**: Ensure that custom components using the query client programmatically do not leave active listeners behind.

### Real-World Example
An dashboard renders a high-frequency real-time stock table containing nested charts JSON. If the user keeps clicking different stocks, the cache memory grows by 20MB every minute. Reducing \`gcTime\` to 30 seconds for the stock details query automatically purges old stock lines from RAM, stopping container crashes.

### Best Practice
Take Heap Snapshots in Chrome DevTools before and after simulating a user navigating through your site. Look for \`Query\` or \`QueryObserver\` constructors that fail to decrease when components unmount.

### Common Mistakes
Setting \`gcTime: Infinity\` globally to prevent re-fetching. This permanently locks all fetched database objects in the browser's RAM, causing the page to eventually freeze.

### Code Example
\`\`\`typescript


// Tune client default options for memory-constrained environments
exports.memoryOptimizedClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5, // Consider stale after 5s
      gcTime: 1000 * 60 * 2, // Reduce GC time to 2 minutes (default is 5m)
    },
  },
});

export function HeavyWidget() {
  const { data } = useQuery({
    queryKey: ['heavyData'],
    queryFn: () => fetch('/api/heavy').then(res => res.json()),
    
    // Override settings for this specific heavy payload
    gcTime: 1000 * 30, // Delete from cache after 30 seconds of unmounting!
  });

  return <div>Heavy data details</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরি ডাটা দ্রুত দেখাতে মেমোরিতে ক্যাশ ধরে রাখে। কিন্তু মেমোরি লিকের ঝুঁকি তৈরি হয় যদি:
- কম্পোনেন্ট আনমাউন্ট হওয়ার পরও কুয়েরি অবজারভার প্রপার্টি ওপেন থাকে।
- \`gcTime\` অতিরিক্ত বেশি (বা Infinity) সেট করে রাখা হয়, যার ফলে ওল্ড ডাটা মেমোরি থেকে কখনো ডিলিট হয় না।

**মেমোরি অপ্টিমাইজ করার উপায়**:
- **\`gcTime\` কমানো**: বড় সাইজের রেসপন্স ডাটার ক্ষেত্রে জিসি টাইম কম বা ২ মিনিট করে দিন যাতে ইনঅ্যাক্টিভ ডাটা দ্রুত ফ্লাশ হয়।
- **ডেভটুলস হিপ স্ন্যাপশট**: ব্রাউজারের ক্রোম ডেভটুলসে গিয়ে জিসি সচল করে হিপ স্ন্যাপশট নিয়ে মেমোরি গ্রোথ এনালাইসিস করা।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ চার্ট মনিটর পেজে প্রতি মিনিটে নতুন ডাটা রিড হয়। ইউজার যদি ব্যাক-টু-ব্যাক ৫০টি চার্ট ওপেন করেন এবং ক্যাশ ডিলিট না হয়, তবে ব্রাউজার ১০০ এমবি র‍্যাম খেয়ে হ্যাং হয়ে যাবে। \`gcTime: 30000\` (৩০ সেকেন্ড) দিলে ইনঅ্যাক্টিভ হওয়া মাত্রই তা র‍্যাম থেকে মুছে যাবে।

### উত্তম অনুশীলন
গ্লোবালি সব পেজে \`gcTime: Infinity\` দেওয়া বন্ধ করুন। মেমোরি নিয়ন্ত্রণে রাখতে কুয়েরি লাইফসাইকেল যথাযথভাবে কনফিগার করুন।

### সাধারণ ভুলসমূহ
রি-ফেচ ঠেকাতে গ্লোবালি gcTime: Infinity সেট করা, যা ব্রাউজারের র‍্যামে ডাটা চিরস্থায়ীভাবে লক করে দেয় ও শেষ পর্যন্ত পেজ ফ্রিজ করে ফেলে।

### সাধারণ ভুলসমূহ
রি-ফেচ ঠেকাতে গ্লোবালি gcTime: Infinity সেট করা, যা ব্রাউজারের র‍্যামে ডাটা চিরস্থায়ীভাবে লক করে দেয় ও শেষ পর্যন্ত পেজ ফ্রিজ করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript


// মেমোরি সাশ্রয়ী কুয়েরি ক্লায়েন্ট কনফিগারেশন
exports.memoryOptimizedClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
      gcTime: 1000 * 60 * 2, // ৫ মিনিটের পরিবর্তে ২ মিনিটে জিসি ক্লিয়ার করবে
    },
  },
});

export function HeavyWidget() {
  const { data } = useQuery({
    queryKey: ['heavyData'],
    queryFn: () => fetch('/api/heavy').then(res => res.json()),
    
    // নির্দিষ্ট এই হেভি ডাটার জন্য ক্যাশ জিসি সময় ৩০ সেকেন্ড করা হলো
    gcTime: 1000 * 30, // আনমাউন্টের ৩০ সেকেন্ড পর ডিলিট হবে
  });

  return <div>Heavy data details</div>;
}
\`\`\``
  },
  {
    id: "state-query-84",
    title: "How do you configure a global cache coordinator to handle multi-tab synchronization and locking in TanStack Query?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Multi-tab Sync","LocalStorage","State Coordinator"],
    enAnswer: "Configure multi-tab synchronization by utilizing the broadcastQueryClient utility. This coordinates cache updates across open tabs dynamically, and locking prevents duplicate refetching storms.",
    bnAnswer: "মাল্টি-ট্যাব সিঙ্ক সেটআপ করতে broadcastQueryClient ইউটিলিটি ব্যবহার করা হয়। এটি ট্যাবগুলোর মধ্যে ক্যাশ রিকোয়েস্ট কো-অর্ডিনেট করে এবং লকিংয়ের মাধ্যমে ডুপ্লিকেট রি-ফেচিং রিকোয়েস্ট স্টর্ম প্রতিরোধ করে।",
    enExplanation: `### Explanation
If a user has 4 tabs of your application open, performing a mutation in Tab A should invalidate queries in all tabs. Additionally, if the tabs become active simultaneously, they can launch 4 identical network refetch queries, crashing the server.

**Solving Multi-tab Coordination**:
1. **Synchronization**: Use \`@tanstack/query-broadcast-client-experimental\` (or custom broadcast channel listeners) to broadcast invalidate events across tabs.
2. **Locking (Refetch Prevention)**: Implement a leader election or tab-focused lock checking mechanism. Only the "leader" tab dispatches the network refetch query, then broadcasts the resolved data to the other "follower" tabs using the BroadcastChannel.

### Real-World Example
In a stock trading dashboard. If the price updates, instead of all 4 open tabs fetching the price API simultaneously, the leader tab fetches the stock prices from the server and pushes the update to the other 3 tabs instantly.

### Best Practice
Only broadcast data that updates infrequently or when the user triggers mutations. Do not synchronize high-frequency queries to avoid clogging the browser's thread communication channels.

### Common Mistakes
Allowing all tabs to refetch on window focus simultaneously, creating request floods on your server whenever the user switches back to the browser window.

### Code Example
\`\`\`typescript



const queryClient = new QueryClient();

// Synchronize query updates across all open browser tabs automatically!
broadcastQueryClient({
  queryClient,
  broadcastChannel: 'my-app-tab-sync',
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার একই ব্রাউজারে ৪টি ট্যাব ওপেন করে রাখলে এক ট্যাবের ডাটা সেভ অন্য ট্যাবে অটো সিঙ্ক করার মেকানিজম:
- **সিঙ্কিং**: \`broadcastQueryClient\` ব্যবহার করে ট্যাবগুলোর কুয়েরি ক্যাশ সরাসরি সিঙ্ক রাখা সম্ভব।
- **লকিং (Locking)**: সব ট্যাব যেন একসাথে একই এপিআই ফেচ করে সার্ভারে ওভারলোড না বানায় তা নিয়ন্ত্রণ করা। হোস্ট লিডার ট্যাব রিকোয়েস্ট করে বাকি ৩টি ফলোয়ার ট্যাবে সিঙ্ক ডাটা পুশ করে।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ ক্রিপ্টোকারেন্সি পোর্টফোলিও: ৪টি ট্যাব খোলা থাকলে প্রতিটি ট্যাব এপিআই কল করার পরিবর্তে একটি ট্যাব এপিআই কল করবে এবং ব্রডকাস্ট চ্যানেলের মাধ্যমে বাকি ৩টি ট্যাবের স্ক্রিন ডাটা সাথে সাথে আপডেট করে দিবে।

### উত্তম অনুশীলন
শুধুমাত্র গুরুত্বপূর্ণ ট্রানজ্যাকশন বা ক্যাশ ইনভ্যালিডেশনের সময় ব্রডকাস্ট চালু রাখুন, হাই-ফ্রিকোয়েন্সি ডাটায় এটি এড়িয়ে চলাই শ্রেয়।

### সাধারণ ভুলসমূহ
উইন্ডো ফোকাস করার সাথে সাথে সব ট্যাবকে একই সাথে রি-ফেচ করার অনুমতি দেওয়া, যা ব্রাউজারে ফিরলে সার্ভারে রিকোয়েস্টের বন্যা তৈরি করে।

### সাধারণ ভুলসমূহ
উইন্ডো ফোকাস করার সাথে সাথে সব ট্যাবকে একই সাথে রি-ফেচ করার অনুমতি দেওয়া, যা ব্রাউজারে ফিরলে সার্ভারে রিকোয়েস্টের বন্যা তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript



const queryClient = new QueryClient();

// সব ওপেন ট্যাবের কুয়েরি ক্যাশ অটো সিঙ্ক করার নিয়ম
broadcastQueryClient({
  queryClient,
  broadcastChannel: 'my-app-tab-sync',
});
\`\`\``
  },
  {
    id: "state-query-85",
    title: "How do you manage complex data dependencies and sequential queries using query keys and dependent queries?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Dependent Queries","queryKey","State Cascade"],
    enAnswer: "Manage complex data dependencies by chaining queries using the enabled option. Set enabled of query B to depend on the resolved data of query A, creating a waterfall flow of requests.",
    bnAnswer: "জটিল ডাটা ডিপেন্ডেন্সি হ্যান্ডেল করতে enabled অপশন দিয়ে চেইন তৈরি করতে হয়। ১ম কুয়েরির ডাটা সলভ হলে তার আইডি ২য় কুয়েরির enabled অপশনে পাস করে সিকোয়েন্সিয়াল ফ্লো তৈরি করা হয়।",
    enExplanation: `### Explanation
In complex interfaces, query B must wait for data from query A:
- **Waterfall Cascade**:
  - Query 1: \`useQuery(['user'], fetchUser)\`
  - Query 2: \`useQuery(['projects', user.projectId], fetchProjects, { enabled: !!user?.projectId })\`
  - Query 3: \`useQuery(['tasks', project.taskId], fetchTasks, { enabled: !!project?.taskId })\`
- This creates a controlled cascade. Next.js/React Query ensures that no endpoint is called with undefined values, avoiding immediate API errors.

### Real-World Example
In a project manager application:
- Fetch current active user session details first.
- Read their allocated \`projectId\`.
- Fetch the project team list.
- Read the team lead's ID to fetch their direct logs.

### Best Practice
Combine multiple dependant variables using boolean operators in the \`enabled\` block (e.g., \`enabled: !!projectId && !!userId\`). This blocks the query execution if any required parameter is missing.

### Common Mistakes
Forgetting that dependent query flows can cause waterfall loading slowdowns in the UI. If the server supports nested joins, fetch them in a single query instead of chaining multiple queries.

### Code Example
\`\`\`typescript


export function ProjectTaskViewer({ projectId }: { projectId: string }) {
  // Query 1: Fetch Project details
  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => fetch(\`/api/projects/\${projectId}\`).then(res => res.json()),
  });

  const teamId = project?.teamId;

  // Query 2: Fetch Team (Depends on Query 1 resolving teamId)
  const { data: team, isLoading: isTeamLoading } = useQuery({
    queryKey: ['team', teamId],
    queryFn: () => fetch(\`/api/teams/\${teamId}\`).then(res => res.json()),
    
    // Dependent Check
    enabled: !!teamId,
  });

  return <div>Team count: {team?.members?.length}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জটিল ইন্টারফেসে একটি এপিআই-র ডাটার ওপর ভিত্তি করে অন্য এপিআই ফায়ার করার সিকোয়েন্সিয়াল চেইন:
- **ওয়াটারফল ক্যাসকেড**:
  - কুয়েরি ১: ইউজার সেশন রিড করে।
  - কুয়েরি ২: ইউজারের প্রজেক্ট আইডি নিয়ে প্রজেক্ট ফেচ করে, কন্ডিশন: \`enabled: !!user?.projectId\`।
  - কুয়েরি ৩: প্রজেক্টের টাস্ক আইডি নিয়ে টাস্ক ফেচ করে, কন্ডিশন: \`enabled: !!project?.taskId\`।
- এটি ভুল ডাটা নিয়ে এপিআই কল করা এবং ক্লায়েন্ট এরর হওয়া রোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ
কোম্পানির টিম ম্যানেজমেন্ট ড্যাশবোর্ড: প্রথমে প্রজেক্ট লিস্ট ফেচ করে সেখান থেকে টিম আইডি রিড করতে হয়, এবং টিম আইডি দিয়ে মেম্বার লিস্ট নিয়ে আসা হয়।

### উত্তম অনুশীলন
\`enabled\` অপশনে একাধিক প্যারামিটার অ্যান্ড (\`&&\`) দিয়ে লক করুন (যেমন: \`enabled: !!teamId && !!userId\`) যাতে যেকোনো একটি ডাটা মিসিং থাকলে রিকোয়েস্ট স্টপ থাকে।

### সাধারণ ভুলসমূহ
ডিপেন্ডেন্ট কুয়েরি ফ্লো-র কারণে ইউআই রেন্ডার স্লো ডাউন হওয়া। সার্ভার নেস্টেড জয়েন সমর্থন করলে একটি সিঙ্গেল কুয়েরিতে ডাটা ফেচ করুন।

### সাধারণ ভুলসমূহ
ডিপেন্ডেন্ট কুয়েরি ফ্লো-র কারণে ইউআই রেন্ডার স্লো ডাউন হওয়া। সার্ভার নেস্টেড জয়েন সমর্থন করলে একটি সিঙ্গেল কুয়েরিতে ডাটা ফেচ করুন।

### কোড উদাহরণ
\`\`\`typescript


export function ProjectTaskViewer({ projectId }: { projectId: string }) {
  // কুয়েরি ১: প্রজেক্ট ডিটেইলস ফেচ
  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => fetch(\`/api/projects/\${projectId}\`).then(res => res.json()),
  });

  const teamId = project?.teamId;

  // কুয়েরি ২: টিম ফেচ (১ম কুয়েরির teamId এর ওপর নির্ভরশীল)
  const { data: team, isLoading: isTeamLoading } = useQuery({
    queryKey: ['team', teamId],
    queryFn: () => fetch(\`/api/teams/\${teamId}\`).then(res => res.json()),
    
    // teamId পাওয়া গেলেই কেবল রান করবে
    enabled: !!teamId,
  });

  return <div>Team count: {team?.members?.length}</div>;
}
\`\`\``
  },
  {
    id: "state-query-86",
    title: "How do you design a state synchronization layer between a local client store (Zustand) and a server state cache (TanStack Query)?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Architecture","State Sync","Zustand","TanStack Query","Design Patterns"],
    enAnswer: "Design a state sync layer by treating TanStack Query as the single source of truth for server data. Use Zustand strictly for UI states, and synchronize updates by triggering invalidations or manually updating Zustand values inside useQuery's select/onSuccess selectors.",
    bnAnswer: "সার্ভার ও লোকাল স্টোর সিঙ্ক করতে টানস্ট্যাক কুয়েরিকে ডাটার মূল সোর্স (Source of truth) হিসেবে রাখতে হয়। Zustand-কে শুধুমাত্র ইউআই স্টেটের জন্য রেখে কুয়েরির select/onSuccess কলব্যাকে Zustand আপডেট সিঙ্ক করা হয়।",
    enExplanation: `### Explanation
A common architectural issue is duplicate states (copying query results into Zustand). This breaks caching and causes synchronization conflicts.

**Clean Sync Layer Design**:
1. **Single Source of Truth**: Keep server data in TanStack Query cache.
2. **Local UI Hooks**:
   - If a component needs to edit a list locally before saving (e.g. drafting modifications):
     - Load the initial list from TanStack Query.
     - Copy the specific item to a Zustand editing slice when the user clicks "Edit".
     - Perform all local changes inside Zustand.
     - When saving, trigger a mutation. On mutation success, clear the Zustand editing slice and invalidate the TanStack Query list.

### Real-World Example
In a spreadsheet editor:
- TanStack Query loads the grid rows.
- When double-clicking a cell, copy the cell content to a Zustand \`activeCellEditor\` store.
- Typing updates Zustand only.
- Pressing Enter triggers a mutation saving the change to DB and invalidates the query, refreshing the grid.

### Best Practice
Keep server-state and client-state decoupled. Never write \`useEffect\` wrappers to copy \`useQuery\` return values into a Zustand store immediately on mount.

### Common Mistakes
Copying the query data into Zustand and modifying it locally without updating the server, leaving the cache out of sync.

### Code Example
\`\`\`typescript



// 1. Client Store: manage editing scratchpad ONLY
// EditStore {
  editingId: string | null;
  draftText: string;
  startEdit: (id: string, text: string) => void;
  setDraft: (text: string) => void;
  clearEdit: () => void;
}

exports.useEditStore = create<EditStore>((set) => ({
  editingId: null,
  draftText: '',
  startEdit: (id, text) => set({ editingId: id, draftText: text }),
  setDraft: (draftText) => set({ draftText }),
  clearEdit: () => set({ editingId: null, draftText: '' }),
}));

// 2. Integration in Component
export function TodoItem({ todo }: { todo: any }) {
  const queryClient = useQueryClient();
  const { startEdit, draftText, editingId, setDraft, clearEdit } = useEditStore();

  const { mutate } = useMutation({
    mutationFn: (text: string) => fetch(\`/api/todos/\${todo.id}\`, { method: 'PUT', body: JSON.stringify({ text }) }),
    onSuccess: () => {
      // Invalidate server cache
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      clearEdit(); // Clear client draft
    }
  });

  const isEditing = editingId === todo.id;

  return (
    <div>
      {isEditing ? (
        <input value={draftText} onChange={(e) => setDraft(e.target.value)} onBlur={() => mutate(draftText)} />
      ) : (
        <span onDoubleClick={() => startEdit(todo.id, todo.text)}>{todo.text}</span>
      )}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
জুস্ট্যান্ড ও টানস্ট্যাক কুয়েরির মধ্যে ডাটা ডুপ্লিকেট করার ভুল আর্কিটেকচার এড়ানোর সলিউশন:
- **মূল সোর্স**: সার্ভার ডাটার একমাত্র অধিপতি হবে টানস্ট্যাক কুয়েরি।
- **ক্লায়েন্ট স্ক্র্যাচপ্যাড**:
  - ইউজার কোনো ডাটা এডিট শুরু করলে তা টানস্ট্যাক কুয়েরি থেকে নিয়ে জুস্ট্যান্ডের একটি ডামি \`draft\` ফোল্ডারে কপি করা হয়।
  - টাইপ করার সময় শুধু জুস্ট্যান্ড স্টেট আপডেট হবে (কোনো এপিআই কল হবে না)।
  - সেভ বাটনে চাপ দিলে মিউটেশন এপিআই রান হয়ে সার্ভার ডাটা আপডেট করবে এবং জুস্ট্যান্ড ড্রাফট ক্লিয়ার করে কুয়েরি ইনভ্যালিড করে দেবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ব্লগ আর্টিকেলের টাইটেল এডিট করা: ইউজার ডাবল ক্লিক করলে জুস্ট্যান্ড এডিটর ওপেন হবে। এডিট শেষে সেভ দিলে ডাটাবেজে আপডেট হয়ে ক্যাশ রি-লোড করবে, ফলে ইউজার ইনস্ট্যান্ট কারেক্ট টাইটেল দেখতে পাবেন।

### উত্তম অনুশীলন
সার্ভার স্টেট ও ক্লায়েন্ট স্টেট আলাদা রাখুন। মাউন্ট হওয়ার সাথে সাথে কুয়েরি ডাটা কপি করে জুস্ট্যান্ডে পেস্ট করার জন্য অহেতুক \`useEffect\` লিখবেন না।

### সাধারণ ভুলসমূহ
কুয়েরির ডাটা সরাসরি জুস্ট্যান্ডে কপি করে এডিট করা কিন্তু সার্ভার আপডেট না করা, যা ক্যাশ ডাটা সিঙ্ক নষ্ট করে ফেলে।

### সাধারণ ভুলসমূহ
কুয়েরির ডাটা সরাসরি জুস্ট্যান্ডে কপি করে এডিট করা কিন্তু সার্ভার আপডেট না করা, যা ক্যাশ ডাটা সিঙ্ক নষ্ট করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript



// ১. ক্লায়েন্ট স্টোর: শুধুমাত্র এডিটিং ড্রাফট বা স্ক্র্যাচপ্যাড হ্যান্ডেল করবে
// EditStore {
  editingId: string | null;
  draftText: string;
  startEdit: (id: string, text: string) => void;
  setDraft: (text: string) => void;
  clearEdit: () => void;
}

exports.useEditStore = create<EditStore>((set) => ({
  editingId: null,
  draftText: '',
  startEdit: (id, text) => set({ editingId: id, draftText: text }),
  setDraft: (draftText) => set({ draftText }),
  clearEdit: () => set({ editingId: null, draftText: '' }),
}));

// ২. কম্পোনেন্টে ইন্টিগ্রেশন
export function TodoItem({ todo }: { todo: any }) {
  const queryClient = useQueryClient();
  const { startEdit, draftText, editingId, setDraft, clearEdit } = useEditStore();

  const { mutate } = useMutation({
    mutationFn: (text: string) => fetch(\`/api/todos/\${todo.id}\`, { method: 'PUT', body: JSON.stringify({ text }) }),
    onSuccess: () => {
      // এপিআই ক্যাশ রি-লোড করা হচ্ছে
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      clearEdit(); // ড্রাফট মুছে ফেলা হলো
    }
  });

  const isEditing = editingId === todo.id;

  return (
    <div>
      {isEditing ? (
        <input value={draftText} onChange={(e) => setDraft(e.target.value)} onBlur={() => mutate(draftText)} />
      ) : (
        <span onDoubleClick={() => startEdit(todo.id, todo.text)}>{todo.text}</span>
      )}
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-87",
    title: "Under what conditions should you select Zustand over Redux Toolkit, and vice-versa, for a large enterprise codebase?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Architecture","Zustand","Redux Toolkit","Decision Making"],
    enAnswer: "Select Zustand for modular, low-boilerplate, and performance-critical scoped states. Select Redux Toolkit when you require centralized action tracing, strict debugging, middleware extensibility, and unified state rules in large multi-team repositories.",
    bnAnswer: "কম বয়লারপ্লেট, লাইটওয়েট ও কোড-স্প্লিট ফ্রেন্ডলি ডিজাইনে Zustand সেরা। আর গ্লোবাল অ্যাকশন ট্র্যাকিং, কড়া ডিবাগিং রুলস, এবং একাধিক টিমের কোড মেইনটেন্যান্সে Redux Toolkit বেশি উপযোগী।",
    enExplanation: `### Explanation
Choosing between Zustand and Redux Toolkit depends on team organization and architectural rules:

**Choose Zustand when**:
- **Boilerplate Minimization**: You want rapid feature setup with zero setup frictions.
- **Micro-frontends / Code Splitting**: Sharing states inside isolated components is easier because stores are vanilla and don't require centralized provider setups.
- **Performance**: Transient update subscriptions (\`subscribe\`) are needed for real-time widgets.

**Choose Redux Toolkit when**:
- **Centralized Event Pipeline**: You must monitor all application events in one debug console (Zustand stores are isolated by default; Redux shares a single action channel).
- **Advanced Middleware**: You rely heavily on custom middlewares (e.g. loggers, analytics, JWT refresh queues).
- **Multi-team Scale**: The strict, opinionated folder structure of RTK prevents junior developers from writing spaghetti code, enforcing architectural rules.

### Real-World Example
- **Zustand**: A reusable dashboard builder with dozens of custom widget components that can be dynamically dragged, configured, and instantiated.
- **Redux Toolkit**: A massive online banking portal with complex transaction flows, requiring audit-logging every action dispatch, tracking histories, and handling token updates via middleware.

### Best Practice
For enterprise apps, do not hesitate to mix tools if required: use RTK Query for data fetching, Redux for primary transactional events, and Zustand for local transient animations or widget settings.

### Common Mistakes
Forcing Redux Toolkit into a small landing page or micro-app where the overhead of providers and configurations adds unnecessary complexity.

### Code Example
None required for architectural comparisons.
`,
    bnExplanation: `### ব্যাখ্যা
এন্টারপ্রাইজ প্রজেক্টে জুস্ট্যান্ড ও রেডক্স টুলকিটের মধ্যে যেকোনো একটি বেছে নেওয়ার বৈজ্ঞানিক যুক্তি:

**Zustand কখন ব্যবহার করবেন**:
- **বয়লারপ্লেট এড়াতে**: দ্রুত কাজ শুরু করতে ও ফালতু ফাইল সেটআপ ছাড়া।
- **কোড-স্প্লিটিং**: মাইক্রো-ফ্রন্টএন্ডে বা স্বাধীন কম্পোনেন্টে স্টেট ব্যবহারে।
- **পারফরম্যান্স**: রিয়েল-টাইম ডাটা সিঙ্কিং বা এনিমেশনে ট্রানজিয়েন্ট আপডেট দরকার হলে।

**Redux Toolkit কখন ব্যবহার করবেন**:
- **সেন্ট্রাল ট্র্যাকিং**: অ্যাপের সব অ্যাকশন এক ডেভটুলস প্যানেলে হিস্ট্রি সহ মনিটর করতে হলে।
- **কাস্টম মিডলওয়্যার**: জটিল টোকেন রিফ্রেশ চেইন বা অ্যানালিটিক্স পাইপলাইন বানাতে হলে।
- **লার্জ টিম কোঅর্ডিনেশন**: একাধিক টিম এক প্রজেক্টে কাজ করলে কোডের আর্কিটেকচার কঠোর নিয়মে বেঁধে রাখতে আরটিকে সেরা।

### বাস্তব-ভিত্তিক উদাহরণ
- **Zustand**: একটি ড্র্যাগ অ্যান্ড ড্রপ ক্যানভাস এডিটর যেখানে ইউজার একাধিক সেপ নিয়ে কাজ করবেন।
- **Redux Toolkit**: একটি ফিনটেক বা পেমেন্ট গেটওয়ে পোর্টাল যেখানে প্রতিটি ইউজারের ট্রানজ্যাকশন অ্যাকশন ডেভটুলসে নিখুঁত ট্র্যাক করা প্রয়োজন।

### উত্তম অনুশীলন
বড় প্রজেক্টে প্রয়োজন অনুযায়ী মিক্স করুন: এপিআই ফেচে আরটিকে কুয়েরি এবং ইউআই উইজেট ট্র্যাকিংয়ে জুস্ট্যান্ড বা রিঅ্যাক্ট স্টেট ব্যবহার করতে পারেন।

### সাধারণ ভুলসমূহ
কোনো সাধারণ ল্যান্ডিং পেজ বা ছোট উইজেট অ্যাপে জবরদস্তিমূলক রেডক্স টুলকিট ব্যবহার করা, যা বয়লারপ্লেট ও জটিলতা বাড়ায়।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।
### সাধারণ ভুলসমূহ
কোনো সাধারণ ল্যান্ডিং পেজ বা ছোট উইজেট অ্যাপে জবরদস্তিমূলক রেডক্স টুলকিট ব্যবহার করা, যা বয়লারপ্লেট ও জটিলতা বাড়ায়।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।`
  },
  {
    id: "state-query-88",
    title: "How do you handle non-serializable data (e.g., file objects, class instances) in Redux Toolkit vs Zustand vs TanStack Query?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Architecture","Serialization","Redux Toolkit","Zustand","TanStack Query"],
    enAnswer: "Redux Toolkit strictly warns against non-serializable data and requires customizing middleware to bypass checks. Zustand and TanStack Query support non-serializable values naturally as they are standard JS object scopes.",
    bnAnswer: "Redux Toolkit অ-সিরিয়ালাইজেবল ডাটা (যেমন: File বা Class) স্টোর করলে এরর ওয়ার্নিং দেয় এবং তা এড়াতে মিডলওয়্যার কাস্টমাইজ করতে হয়। Zustand ও TanStack Query এগুলো সরাসরি সাপোর্ট করে কারণ তারা রেগুলার জেএস মেমোরি অবজেক্ট।",
    enExplanation: `### Explanation
Non-serializable data includes Promises, Functions, WebSockets, Map/Set, and Class instances:

1. **Redux Toolkit**:
   - Strictly enforces **Serialization State Invariant Middleware** in dev mode.
   - Storing a File or Date throws a console error warning.
   - *Fix*: Customize \`serializableCheck\` in \`configureStore\` to ignore specific action paths, or avoid storing them entirely (strongly recommended).

2. **Zustand**:
   - Does not perform any serialization checks by default.
   - You can store functions, maps, or websockets directly inside the store state.
   - *Caution*: If you use the \`persist\` middleware, serialization will crash unless you provide custom stringify/parse methods.

3. **TanStack Query**:
   - Allows returning non-serializable values from \`queryFn\`.
   - Useful for storing class instances representing API sdk handlers or file uploads.

### Real-World Example
In a file uploader component, the user drops a 5MB \`File\` object.
- Storing this \`File\` in Redux throws a console warning.
- In Zustand, storing the file is allowed out of the box, making it simple to read \`file.name\` or \`file.size\` globally.

### Best Practice
In Redux, avoid storing non-serializable data. Instead, store key references (like paths or IDs) and instantiate classes or read files locally inside helpers or components.

### Common Mistakes
Disabling the Redux serializability check globally to store a single Date object, which compromises the predictability of the entire state history tree.

### Code Example
\`\`\`typescript
// Redux Toolkit Customization to allow a File object in a specific action

import fileReducer from './fileSlice';

exports.store = configureStore({
  reducer: {
    files: fileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific actions that carry the File object
        ignoredActions: ['files/uploadFile/pending', 'files/setFile'],
        // Ignore paths in the state where the File object is stored
        ignoredPaths: ['files.activeFile'],
      },
    }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সিরিয়ালাইজ করা যায় না এমন ডাটা (যেমন: WebSocket, File, Promise, Class):

১. **Redux Toolkit**:
   - এটি স্টোরে অ-সিরিয়ালাইজেবল ডাটা রাখলে কড়া কনসোল এরর ওয়ার্নিং দেয়।
   - *সমাধান*: \`configureStore\`-এ \`serializableCheck\`-এর ইগনোর অপশনে নির্দিষ্ট অ্যাকশনটি যুক্ত করতে হবে।

২. **Zustand**:
   - এটি কোনো চেক করে না। সরাসরি মেমোরিতে ক্লাস অবজেক্ট বা উইন্ডো সকেট সেভ করতে পারেন।
   - *সতর্কতা*: তবে স্টোরে \`persist\` মিডলওয়্যার থাকলে জেসন কনভার্ট করতে গিয়ে প্রজেক্ট ক্র্যাশ করবে।

৩. **TanStack Query**:
   - \`queryFn\` থেকে যেকোনো ক্লাস অবজেক্ট বা প্রমিস রিটার্ন করা সমর্থন করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ড্রপবক্সে আপলোডের জন্য একটি \`File\` অবজেক্ট ইনপুট দিলেন:
- ফাইল অবজেক্টটি সরাসরি রেডক্সে সেভ করলে এরর ওয়ার্নিং দিবে।
- জুস্ট্যান্ডে এটি সরাসরি সেভ করে অন্য পেজে ফাইল সাইজ বা নেম শো করা যাবে কোনো এরর ছাড়া।

### উত্তম অনুশীলন
রেডক্স স্টোরে ফাইল বা সকেট সরাসরি রাখা এড়িয়ে চলুন। ফাইলের মেটাডাটা (নাম, সাইজ) স্টোরে রাখুন এবং ফাইল অবজেক্টটি লোকাল ভেরিয়েবল বা ফর্মে প্রসেস করুন।

### সাধারণ ভুলসমূহ
শুধুমাত্র একটি অ-সিরিয়ালাইজেবল অবজেক্ট সংরক্ষণের জন্য গ্লোবালি রেডক্সের সিরিয়ালাইজেবিলিটি চেক নিষ্ক্রিয় করা।

### সাধারণ ভুলসমূহ
শুধুমাত্র একটি অ-সিরিয়ালাইজেবল অবজেক্ট সংরক্ষণের জন্য গ্লোবালি রেডক্সের সিরিয়ালাইজেবিলিটি চেক নিষ্ক্রিয় করা।

### কোড উদাহরণ
\`\`\`typescript
// নির্দিষ্ট ফাইলে File অবজেক্ট ব্যবহারের জন্য আরটিকে কনফিগারেশন

import fileReducer from './fileSlice';

exports.store = configureStore({
  reducer: {
    files: fileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // এই অ্যাকশনগুলোতে ফাইল পাস করার অনুমতি দেওয়া হলো
        ignoredActions: ['files/uploadFile/pending', 'files/setFile'],
        // স্টেটের এই পাথে ফাইল সেভ করার অনুমতি দেওয়া হলো
        ignoredPaths: ['files.activeFile'],
      },
    }),
});
\`\`\``
  },
  {
    id: "state-query-89",
    title: "How do you debug state corruption in a complex Redux store, and what tools and patterns assist in root-cause analysis?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux","Debugging","State Corruption","DevTools","Action Trace"],
    enAnswer: "Debug state corruption in Redux by enforcing the immutableStateInvariant middleware to catch direct mutations, using Redux DevTools diff view to trace action logs, and writing custom middlewares to intercept and inspect corrupt state transitions.",
    bnAnswer: "রেডক্সে স্টেট করাপশন ডিবাগ করতে immutableStateInvariant মিডলওয়্যার চালু করতে হয়, দেব-টুলসের diff ভিউ দিয়ে কোন অ্যাকশন ডাটা নষ্ট করল তা ট্র্যাক করা হয় এবং কাস্টম ট্র্যাকার মিডলওয়্যার লিখে স্টেট ট্রান্সফর্ম পরীক্ষা করা হয়।",
    enExplanation: `### Explanation
State corruption occurs when a reducer performs an accidental direct mutation, or an action carries corrupt payloads.

**Root-Cause Analysis Patterns**:
1. **Redux DevTools Diff View**:
   - Inspect the state delta tree. Look for the exact action where the state keys disappeared or changed to incorrect values.
2. **Immutable State Invariant Middleware**:
   - Enabled by default in RTK development mode. It throws an immediate stack trace error if a reducer mutates state properties directly, pointing to the exact line of code.
3. **Action Trace Stack**:
   - Configure the DevTools to record action stack traces, showing exactly which component triggered the action.
4. **Custom Trace Middleware**:
   - Write middleware that validates state schemas using a validation library (like \`zod\`) after every dispatch, alerting you the moment state properties fail validation.

### Real-World Example
In an invoice editor, the list of items becomes undefined after saving:
- Open Redux DevTools.
- Trace back: find the action \`invoice/save/fulfilled\`.
- Check the "Diff" tab. It shows that the \`items\` array was deleted and replaced by a string.
- This isolates the bug to the \`save\` async thunk's return handler.

### Best Practice
Keep your Redux DevTools configured to record trace stacks in development. Ensure that you never mutate states inside custom action parameters.

### Common Mistakes
Mutating the state values directly inside custom middleware or thunks instead of using dispatch actions.

### Common Mistakes
Mutating the state values directly inside custom middleware or thunks instead of using dispatch actions.

### Code Example
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  devTools: {
    // Record the stack trace of actions to trace component triggers
    trace: true,
    traceLimit: 25, // limit stack depth to prevent memory lag
  },
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স স্টোরে ডাটা হারিয়ে যাওয়া বা স্টেট করাপশন ডিবাগ করার বৈজ্ঞানিক উপায়:

১. **দেব-টুলস Diff ভিউ**:
   - ক্রমানুসারে প্রতিটি অ্যাকশনের পর কোন লাইনের ডাটা নষ্ট হলো তা লাল-সবুজ চিহ্নিত ডেল্টা ম্যাপ দিয়ে ট্রেস করা।
২. **Immutable State Invariant Middleware**:
   - আরটিকে ডেভ মোডে সরাসরি স্টেট এডিট করলে কোডের কোন লাইনে ভুল মিউটেশন ঘটেছে তার সম্পূর্ণ ট্র্যাকিং এরর দিয়ে দেখায়।
৩. **অ্যাকশন ট্রেস স্ট্যাক (Action Trace)**:
   - ডেভটুলস অপশনে \`trace: true\` অন করলে কোডের কোন কম্পোনেন্ট থেকে অ্যাকশনটি ফায়ার হয়েছিল তা দেখতে পাওয়া যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইনভয়েস ক্রিয়েট করার সময় হুট করে কার্ট আইটেম উধাও হয়ে গেল:
- ডেভটুলস ওপেন করুন।
- শেষ ফায়ার হওয়া অ্যাকশনটি চেক করুন: \`invoice/save/fulfilled\`।
- Diff ট্যাবে ক্লিক করলেই দেখতে পাবেন এই অ্যাকশনটিই অ্যারে ডিলিট করে ভুল জেসন বডি রাইট করেছে। এর মাধ্যমে সহজেই সোর্স ফাইল চিহ্নিত করা গেল।

### উত্তম অনুশীলন
অ্যাপের শুরুতেই স্টোর কনফিগারেশনে \`trace: true\` সেট করে রাখুন যাতে অ্যাকশনটি কোন চাইল্ড কম্পোনেন্টের ক্লিক থেকে ফায়ার হয়েছে তা সহজেই চেক করা যায়।

### সাধারণ ভুলসমূহ
ডিসপ্যাচ অ্যাকশন ব্যবহার না করে কাস্টম মিডলওয়্যার বা থাঙ্কের ভেতরে সরাসরি স্টেট মিউটেট বা পরিবর্তন করা।

### সাধারণ ভুলসমূহ
ডিসপ্যাচ অ্যাকশন ব্যবহার না করে কাস্টম মিডলওয়্যার বা থাঙ্কের ভেতরে সরাসরি স্টেট মিউটেট বা পরিবর্তন করা।

### কোড উদাহরণ
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  devTools: {
    // অ্যাকশনের স্ট্যাক ট্রেস রেকর্ড সচল করা হলো
    trace: true,
    traceLimit: 25, // সর্বোচ্চ ২৫টি স্ট্যাক লাইন রেকর্ড করবে
  },
});
\`\`\``
  },
  {
    id: "state-query-90",
    title: "How does the Zustand transient update pattern interact with Reacts concurrent rendering features?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","Concurrent Rendering","React 18/19","useTransition","Performance"],
    enAnswer: "Zustand transient updates bypass React rendering by modifying DOM elements directly. While highly performant, they do not participate in Reacts Concurrent rendering features (like useTransition or useDeferredValue), which can cause UI state sync lag if mixed.",
    bnAnswer: "Zustand-এর ট্রানজিয়েন্ট আপডেট সরাসরি DOM এডিট করায় রিঅ্যাক্টের রেন্ডার স্কিপ করে। কিন্তু এর ফলে এটি রিঅ্যাক্টের কনকারেন্ট রেন্ডারিং ফিচার (যেমন useTransition বা useDeferredValue) এর সাথে খাপ খায় না এবং ভিউ মিসম্যাচ তৈরি করতে পারে।",
    enExplanation: `### Explanation
React 18+ introduced concurrent rendering, allowing React to interrupt, pause, or discard rendering frames to keep the page interactive (e.g. using \`useTransition\` or \`useDeferredValue\`).
- **Zustand Transient Updates**:
  - Bypass React completely by writing directly to the DOM via refs: \`ref.current.style.transform = ...\`.
  - **The Conflict**: Because React has no awareness of these DOM modifications, concurrent features like deferred rendering cannot pause or roll back these updates. If a concurrent render yields a previous state, your DOM updates will be out of sync with the React component tree.

### Real-World Example
In a heavy dashboard filtering view:
- If you use a transient update to change a status bar text, and at the same time use \`useTransition\` to calculate heavy chart data.
- React might delay rendering the chart and yield back to previous frame views, but your transient status bar text has already changed on the DOM. The user sees a mismatched UI state.

### Best Practice
Only use transient updates for raw, stateless styling attributes (like canvas drawings, scroll positions, or animation coordinates). For semantic text, page status, or data values, use standard Zustand selector hooks to allow React to coordinate updates through concurrent render engines safely.

### Common Mistakes
Mixing transient updates with React's concurrent transitions (\`startTransition\`) for critical data states, which leads to layout flickering and UI synchronization bugs.

### Code Example
None required for conceptual concurrent state analysis.
`,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট ১৮+ কনকারেন্ট রেন্ডারিং নিয়ে এসেছে, যার ফলে রিঅ্যাক্ট প্রয়োজনে রেন্ডার পজ করতে বা পরে রি-স্টার্ট করতে পারে (\`useTransition\`)।
- **জুস্ট্যান্ড ট্রানজিয়েন্ট আপডেট**:
  - এটি রিঅ্যাক্টের কোনো ট্র্যাকিং মেথড না মেনেই সরাসরি DOM রিড/রাইট করে।
- **সমস্যা**: রিঅ্যাক্ট যেহেতু এই পরিবর্তনের খবর জানে না, তাই \`useTransition\` বা \`useDeferredValue\` দিয়ে কোনো লেআউট রেন্ডার ডিলে করার সময় ডম আপডেট অলরেডি স্ক্রিনে ভেসে উঠবে। ফলে স্টেট সিঙ্ক ভেঙে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চার্ট ফিল্টারিং স্ক্রিন: আপনি \`useTransition\` দিয়ে ভারী চার্ট লোড করছেন, আর ট্রানজিয়েন্ট আপডেট দিয়ে কোণায় লোডিং কাউন্টার আপডেট করছেন। রিঅ্যাক্ট ভারী চার্ট প্রসেস করার সময় কন্টেইনার হোল্ড করে রাখলেও কোণায় কাউন্টার অলরেডি পরের পেজের আইডি শো করতে থাকবে, যা ইউজারের মনে কনফিউশন তৈরি করবে।

### উত্তম অনুশীলন
ট্রানজিয়েন্ট আপডেট শুধুমাত্র এনিমেশন এক্সিস (\`x\`, \`y\`) বা স্ক্রল পজিশনের মতো নন-ক্রিটিক্যাল ডিজাইনে ব্যবহার করুন। ফিজিক্যাল ডাটা বা স্ট্যাটাস টেক্সটের ক্ষেত্রে রেগুলার সিলেক্টর হুক ব্যবহার করুন।

### সাধারণ ভুলসমূহ
জটিল ও ক্রিটিক্যাল ডাটার ক্ষেত্রে রিঅ্যাক্টের কনকারেন্ট ট্রানজিশনের সাথে ট্রানজিয়েন্ট আপডেট একসাথে গুলিয়ে ফেলা, যা ইউআই ফ্লিকারিং তৈরি করে।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।
### সাধারণ ভুলসমূহ
জটিল ও ক্রিটিক্যাল ডাটার ক্ষেত্রে রিঅ্যাক্টের কনকারেন্ট ট্রানজিশনের সাথে ট্রানজিয়েন্ট আপডেট একসাথে গুলিয়ে ফেলা, যা ইউআই ফ্লিকারিং তৈরি করে।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।`
  },
  {
    id: "state-query-91",
    title: "How do you optimize RTK Query configurations for heavy polling endpoints to prevent main thread blocking?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Polling","Performance Optimization","Web Workers"],
    enAnswer: "Optimize heavy polling in RTK Query by adjusting the pollingInterval, implementing conditional polling using skip, and offloading heavy response parsing to Web Workers to keep the browser main thread free.",
    bnAnswer: "ভারী পোলিং অ্যান্ডপয়েন্ট অপ্টিমাইজ করতে pollingInterval বাড়ানো হয়, skip দিয়ে কন্ডিশনাল পোলিং চালু করা হয় এবং ভারী ডাটা প্রসেসিং ম্যাপ করতে ওয়েব ওয়ার্কার্স (Web Workers) ব্যবহার করা হয়।",
    enExplanation: `### Explanation
Polling executes requests repeatedly at fixed intervals. If your API returns heavy payloads and runs every 2 seconds:
- **Main Thread Blocking**: Parsing large JSON strings inside the main thread blocks UI interactions, increasing Interaction to Next Paint (INP) latency.
- **Optimization Strategies**:
  1. **Dynamic Polling**: Disable polling when the page is inactive or in the background by listening to page visibility events.
  2. **Selective Polling (\`skip\`)**: Pause queries using the \`skip\` flag when specific tabs are closed.
  3. **Web Worker Offloading**: Perform data parsing and array filtering inside a background Web Worker before updating the Redux store.

### Real-World Example
In a stock trade listing dashboard. Polling the list of all active orders every 1s parses 200KB of JSON. If the user minimizes the tab to read an email, the app continues parsing, consuming CPU. Setting the polling interval to pause when \`document.hidden\` is true preserves device battery and CPU.

### Best Practice
Set \`pollingInterval\` dynamically inside query hooks based on tab visibility. Wrap heavy state selectors in memoized selectors to prevent recalculating table rows on every poll resolution.

### Common Mistakes
Setting a fixed, short polling interval (like \`500ms\`) globally without any conditional skip triggers, which blocks the browser thread and can crash mobile clients.

### Code Example
\`\`\`typescript



export function ActiveMetricsPanel() {
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Monitor page visibility dynamically
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Configure polling dynamically: pauses when tab is hidden!
  const { data, isLoading } = useGetLiveMetricsQuery(undefined, {
    pollingInterval: isTabVisible ? 2000 : 0, // 2s when active, disabled when inactive
    skip: !isTabVisible, // Stop queries when tab is in background
  });

  return <div>Live users: {data?.activeUsersCount}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পোলিং (Polling) প্রতি নির্দিষ্ট সময় পর পর ডাটা রি-লোডের রিকোয়েস্ট ফায়ার করে। কিন্তু ভারী ডাটার পোলিং ২ সেকেন্ড পর পর চললে ব্রাউজারের মেইন থ্রেড জ্যাম হয়ে রেন্ডারিং স্লো করে দেয়:
- **INP লেটেন্সি**: বড় আকারের জেসন টেক্সট মেইন থ্রেডে পার্স (parse) করলে ইউজার বাটনে ক্লিক করলে রেসপন্স পেতে দেরি হবে।
- **অপ্টিমাইজেশনের ধাপ**:
  - **ডাইনামিক পোলিং**: ইউজার যদি ব্রাউজার ট্যাব চেঞ্জ করে অন্য ট্যাবে যান, তবে পোলিং বন্ধ করুন।
  - **কন্ডিশনাল স্কিপ (\`skip\`)**: ড্যাশবোর্ড মিনিমাইজড থাকলে এপিআই কল অফ রাখা।
  - **ওয়েব ওয়ার্কার**: বড় ডাটা ক্যালকুলেশন ব্যাকগ্রাউন্ড থ্রেডে পাঠিয়ে সম্পন্ন করা।

### বাস্তব-ভিত্তিক উদাহরণ
শেয়ার ট্রেডিং পোর্টাল: ১ সেকেন্ড পর পর এপিআই কল হচ্ছে। ইউজার যখন স্ক্রিন চেঞ্জ করে অন্য ট্যাবে ফেসবুক ঘাটছেন, তখন ব্রাউজারের উইন্ডো লিসেনার ট্র্যাক করে পোলিং সাময়িক পজ করে দিল। এতে প্রজেক্ট স্পিড ও ডিভাইসের ব্যাটারি দুটিই বাঁচে।

### উত্তম অনুশীলন
উইন্ডো ভিজিবিলিটি (\`document.visibilityState\`) ট্র্যাক করে পোলিং ইন্টারভাল ডাইনামিকালি মডিফাই করুন।

### সাধারণ ভুলসমূহ
কোনো কন্ডিশনাল স্কিপ ট্রিপার ছাড়া গ্লোবালি খুবই কম পোলিং ইন্টারভাল (যেমন ৫০০ মিলি-সেকেন্ড) সেট করে রাখা, যা ব্রাউজার থ্রেড জ্যাম করে।

### সাধারণ ভুলসমূহ
কোনো কন্ডিশনাল স্কিপ ট্রিপার ছাড়া গ্লোবালি খুবই কম পোলিং ইন্টারভাল (যেমন ৫০০ মিলি-সেকেন্ড) সেট করে রাখা, যা ব্রাউজার থ্রেড জ্যাম করে।

### কোড উদাহরণ
\`\`\`typescript



export function ActiveMetricsPanel() {
  const [isTabVisible, setIsTabVisible] = useState(true);

  // ট্যাব ভিজিবিলিটি ট্র্যাকিং
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // ডাইনামিক পোলিং কনফিগারেশন: ট্যাব ব্যাকগ্রাউন্ডে গেলে এপিআই রিকোয়েস্ট অফ হয়ে যাবে
  const { data, isLoading } = useGetLiveMetricsQuery(undefined, {
    pollingInterval: isTabVisible ? 2000 : 0, // একটিভ থাকলে ২ সেকেন্ড, অফলাইনে ০
    skip: !isTabVisible, // পোলিং স্কিপ করা হচ্ছে
  });

  return <div>Live users: {data?.activeUsersCount}</div>;
}
\`\`\``
  },
  {
    id: "state-query-92",
    title: "How does TanStack Querys garbage collection cycle interact with JS engine memory, and how do you prevent leaks with long-lived observers?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Garbage Collection","Memory Leaks","Observers","gcTime"],
    enAnswer: "TanStack Query garbage collects queries after gcTime when observers drop to zero. If you leave active query observers inside custom event systems, the JS engine cannot free the query memory. Prevent leaks by unsubscribing observers on dismantle.",
    bnAnswer: "obsersers সংখ্যা শূন্য হলে gcTime পর টানস্ট্যাক কুয়েরি ডাটা রিমুভ করে। কিন্তু কাস্টম ইভেন্ট সিস্টেমে অবজারভার রেফারেন্স ওপেন থাকলে মেমোরি ফ্রী হয় না। মেমোরি লিক রুখতে অবজারভার আনসাবস্ক্রাইব করা আবশ্যক।",
    enExplanation: `### Explanation
TanStack Query's cache cleanup depends on the lifecycle of **QueryObservers**:
- When a component calls \`useQuery\`, it registers an observer on the query cache entry.
- As long as the observer is active, the query cannot be garbage collected.
- When the component unmounts, the observer is removed. When the count of active observers on a query drops to **zero**, the \`gcTime\` timer starts.
- **The Memory Leak Risk**: If you manually instantiate \`new QueryObserver(client, options)\` inside custom classes or global event handlers and fail to call \`.destroy()\`, the observer remains active forever. The JS engine cannot garbage collect the query or its returned data payloads, leaking RAM.

### Real-World Example
In a canvas chart dashboard where nodes query stats using custom class controllers. If class instances are created but never destroyed on node deletions, the observers stay in memory, preventing thousands of query caches from being garbage collected.

### Best Practice
When instantiating \`QueryObserver\` programmatically outside standard React hooks, always execute the \`destroy()\` method when the controller class or component unmounts.

### Common Mistakes
Letting observers persist inside event registries, causing query caches to accumulate indefinitely and slow down browser performance.

### Code Example
\`\`\`typescript


const queryClient = new QueryClient();

// Custom vanilla JS class utilizing QueryObserver programmatically
export class CustomQueryController {
  private observer: QueryObserver;
  private unsubscribe: () => void;

  constructor(queryKey: string[]) {
    this.observer = new QueryObserver(queryClient, {
      queryKey,
      queryFn: () => fetch(\`/api/\${queryKey[0]}\`).then((res) => res.json()),
    });

    // Subscribe to cache updates
    this.unsubscribe = this.observer.subscribe((result) => {
      console.log('Query result updated:', result.data);
    });
  }

  // CRITICAL: Call this on class dismantle to prevent memory leaks!
  public dispose() {
    this.unsubscribe(); // Stop listening
    this.observer.destroy(); // Destroys observer instance, allowing GC to run
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরির ক্যাশ ক্লিয়ার হওয়া মেমোরি অবজারভারের (\`QueryObserver\`) ওপর নির্ভর করে:
- \`useQuery\` কল করলে ব্যাকগ্রাউন্ডে একটি ক্যাশ অবজারভার রেজিস্টার হয়।
- যতক্ষণ পর্যন্ত কমপক্ষে ১টি অবজারভার অ্যাক্টিভ থাকে, ততক্ষণ ক্যাশ ডিলিট করা যায় না।
- কম্পোনেন্ট আনমাউন্ট হলে অবজারভার সংখ্যা শূন্য হয় এবং \`gcTime\` কাউন্টডাউন শেষে ক্যাশ ক্লিয়ার হয়।
- **মেমোরি লিক ঝুকি**: ভ্যানিলা জেএস ফাইলে ম্যানুয়ালি \`new QueryObserver()\` ক্রিয়েট করে কাজ শেষে তা \`.destroy()\` না করলে অবজারভারটি চিরকাল মেমোরিতে থেকে যাবে ও ক্যাশ জিসি হতে বাধা দিবে।

### বাস্তব-ভিত্তিক উদাহরণ
ক্যানভাস বা গ্রাফ প্রজেক্টে কাস্টম ক্লাসের মাধ্যমে অবজারভার সচল করা হয়েছে। নোড ডিলিট হয়ে গেলেও কাস্টম ক্লাসের মেমোরি থেকে অবজারভার আনসাবস্ক্রাইব না হওয়ায় মেমোরি রিলিজ হবে না এবং কয়েক মিনিট পর সাইট স্লো হয়ে যাবে।

### উত্তম অনুশীলন
রিঅ্যাক্টের বাইরে অবজারভার ডিক্লেয়ার করলে লাইফসাইকেল শেষ হওয়া মাত্র অবশ্যই ক্লাস ডিসপোজ মেথডের ভেতর \`observer.destroy()\` এবং সাবস্ক্রিপশন আনসাবস্ক্রাইব কল করুন।

### সাধারণ ভুলসমূহ
কাস্টম ইভেন্ট সিস্টেমে ক্যাশ অবজারভারের রেফারেন্স ওপেন রাখা, যার ফলে মেমোরি লিক হয় এবং প্রজেক্টের পারফরম্যান্স হ্রাস পায়।

### সাধারণ ভুলসমূহ
কাস্টম ইভেন্ট সিস্টেমে ক্যাশ অবজারভারের রেফারেন্স ওপেন রাখা, যার ফলে মেমোরি লিক হয় এবং প্রজেক্টের পারফরম্যান্স হ্রাস পায়।

### কোড উদাহরণ
\`\`\`typescript


const queryClient = new QueryClient();

// কাস্টম জেএস ক্লাস যা অবজারভার ব্যবহার করে
export class CustomQueryController {
  private observer: QueryObserver;
  private unsubscribe: () => void;

  constructor(queryKey: string[]) {
    this.observer = new QueryObserver(queryClient, {
      queryKey,
      queryFn: () => fetch(\`/api/\${queryKey[0]}\`).then((res) => res.json()),
    });

    // ক্যাশ আপডেটে সাবস্ক্রাইব করা হলো
    this.unsubscribe = this.observer.subscribe((result) => {
      console.log('Query result updated:', result.data);
    });
  }

  // মেমোরি লিক রুখতে এই ডিসপোজ মেথডটি কল করতে হবে
  public dispose() {
    this.unsubscribe(); // লিসেনার স্টপ করা হলো
    this.observer.destroy(); // অবজারভার ডেস্ট্রয় করা হলো (জিসি সক্রিয় হবে)
  }
}
\`\`\``
  },
  {
    id: "state-query-93",
    title: "How do you implement query invalidation strategies for batch mutations to prevent network request storms?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Batch Mutations","Invalidation","Performance","Network Optimization"],
    enAnswer: "Prevent request storms during batch mutations by grouping invalidations, using queryClient.invalidateQueries with exact: false to target parent keys, or refetching only active queries using refetchType: \"active\" options.",
    bnAnswer: "ব্যাচ মিউটেশনের সময় নেটওয়ার্ক স্টর্ম রুখতে ইনভ্যালিডেশন গ্রুপ করা হয়, অথবা কুয়েরি অপশনে refetchType: \"active\" সেট করে শুধুমাত্র সচল স্ক্রিনের কুয়েরিগুলো রি-ফেচ করা হয়।",
    enExplanation: `### Explanation
If you execute 50 mutations in a batch (e.g. updating 50 table rows) and call \`invalidateQueries(['items'])\` on each success:
- **Network Storm**: The browser will launch 50 parallel HTTP refetch requests for the items list. This causes server overload, high latency, and request queue throttling in the browser.

**Mitigation Strategies**:
1. **Invalidate Once**: Only invalidate the parent query key once after the *entire* batch mutation list finishes using \`Promise.all\` or a batch queue complete callback.
2. **Limit Refetch Type**: Pass \`{ refetchType: 'active' }\` to only refetch queries that are currently rendered on the screen. Inactive queries will just be marked stale and will refetch when visited later.
3. **Manual Cache Merging**: Instead of invalidating, use \`queryClient.setQueryData\` to update all 50 items locally in the cache from the mutation response, bypassing server fetches completely.

### Real-World Example
In a bulk editor selecting 100 products to set status to "Archived":
- A thunk or loop calls 100 API updates.
- Instead of triggering \`invalidateQueries\` 100 times, await the resolution of \`Promise.allSettled(mutations)\`, and then trigger a single \`invalidateQueries({ queryKey: ['products'] })\`.

### Best Practice
Use \`queryClient.setQueryData\` for batch updates when the mutation response returns the updated models, as this reduces network fetches to zero.

### Common Mistakes
Triggering invalidations inside the \`onSuccess\` callback of individual item mutations when executing bulk operations, resulting in immediate UI lags.

### Code Example
\`\`\`typescript


export function useBulkUpdateTodos() {
  const queryClient = useQueryClient();

  return useMutation({
    // MutationFn handles batch updates on the server
    mutationFn: async (todoIds: string[]) => {
      const res = await fetch('/api/todos/bulk-archive', {
        method: 'POST',
        body: JSON.stringify({ ids: todoIds }),
      });
      return res.json();
    },
    // Only trigger ONE invalidation after the batch operation finishes!
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
        refetchType: 'active', // Only reload queries currently visible in UI
      });
    },
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
একসাথে ৫০টি রো এডিট (Batch Mutation) করার পর প্রতিটির জন্য আলাদা করে \`invalidateQueries\` কল করলে ব্রাউজার একসাথে ৫০টি এপিআই রি-লোড রিকোয়েস্ট ফায়ার করে নেটওয়ার্ক জ্যাম (Network Storm) তৈরি করবে।

**প্রতিরোধের উপায়সমূহ**:
১. **একক ইনভ্যালিডেশন**: পুরো ব্যাচ আপডেট শেষ হওয়ার পর শেষে একবার মাত্র প্যারেন্ট কি ইনভ্যালিড করুন।
২. **অ্যাক্টিভ রি-ফেচ**: ইনভ্যালিডেশনে \`refetchType: 'active'\` সেট করে রাখুন যাতে শুধুমাত্র কারেন্ট স্ক্রিনে থাকা পেজটি রি-লোড হয়, ব্যাকগ্রাউন্ড পেজগুলো রিলোড হওয়া স্থগিত থাকে।
৩. **ক্যাশ মার্জিং**: এপিআই থেকে আপডেট ডাটা রেসপন্স আসলে সরাসরি \`setQueryData\` দিয়ে ক্যাশ আপডেট করে দিন, কোনো রি-ফেচ এপিআই কল করার প্রয়োজনই পড়বে না।

### বাস্তব-ভিত্তিক উদাহরণ
টেবিলের ১০০টি প্রোডাক্ট একসাথে ডিলিট করা: সব প্রমিস \`Promise.all()\` দিয়ে শেষ হওয়া পর্যন্ত অপেক্ষা করে শেষে মাত্র একবার \`invalidateQueries(['products'])\` রান করালে নেটওয়ার্ক ফ্লো একদম স্মুথ থাকবে।

### উত্তম অনুশীলন
ব্যাচ অপারেশনের ক্ষেত্রে মিউটেশন এপিআই-র রেসপন্স ডাটা দিয়ে ক্লায়েন্ট ক্যাশ সরাসরি আপডেট করুন (\`setQueryData\`) যাতে নেটওয়ার্ক রিকোয়েস্ট সংখ্যা শুন্যে নামিয়ে আনা যায়।

### সাধারণ ভুলসমূহ
ব্যাচ অপারেশন করার সময় প্রতিটি একক আইটেমের মিউটেশন onSuccess কলব্যাকে invalidateQueries ট্রিগার করা, যা ইনস্ট্যান্ট ইউআই ল্যাগ তৈরি করে।

### সাধারণ ভুলসমূহ
ব্যাচ অপারেশন করার সময় প্রতিটি একক আইটেমের মিউটেশন onSuccess কলব্যাকে invalidateQueries ট্রিগার করা, যা ইনস্ট্যান্ট ইউআই ল্যাগ তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript


export function useBulkUpdateTodos() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todoIds: string[]) => {
      const res = await fetch('/api/todos/bulk-archive', {
        method: 'POST',
        body: JSON.stringify({ ids: todoIds }),
      });
      return res.json();
    },
    // ব্যাচ কমপ্লিট হলে শেষে একবার ইনভ্যালিড হবে
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
        refetchType: 'active', // শুধুমাত্র স্ক্রিনে দৃশ্যমান কুয়েরি রিলোড করবে
      });
    },
  });
}
\`\`\``
  },
  {
    id: "state-query-94",
    title: "How does TanStack Query manage scroll restoration and layout shifts when loading cached data on back/forward navigations?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Scroll Restoration","Caching","Layout Shifts"],
    enAnswer: "TanStack Query supports scroll restoration by resolving cached data synchronously on mount. If a query is cached, useQuery returns the data immediately during rendering, allowing the browser to position the scrollbar correctly before layout shifts occur.",
    bnAnswer: "টানস্ট্যাক কুয়েরি মাউন্ট হওয়ার সাথে সাথে সিনক্রোনাসলি ক্যাশ ডাটা রিটার্ন করে স্ক্রল রিস্টোরেশন সচল করে। ক্যাশে ডাটা সেভ থাকায় ব্রাউজার লেআউট শিফট হওয়ার আগেই স্ক্রলবার সঠিক পজিশনে সেট করতে পারে।",
    enExplanation: `### Explanation
When navigating back to a page:
- **Without Caching**: The page renders empty, fetches data over the network, and then expands. The browser has already lost the scroll position because the initial height was 0.
- **With TanStack Query**:
  - \`useQuery\` finds the cached entry and returns it *instantly* during the initial render phase.
  - The page renders with its full height and content populated in the first frame.
  - The browser reads the full document height and restores the exact scroll position smoothly before the page displays to the user.
  - A background refresh (\`isFetching\`) runs silently, but the scrollbar remains locked.

### Real-World Example
In a long blog feed layout:
- User scrolls down 2000px, clicks a post, and reads it.
- Clicking the back button restores the feed list page instantly from the query cache.
- The user is placed exactly at 2000px scroll depth. If they had to wait for the API, they would be thrown back to the top of the page.

### Best Practice
Ensure your container heights are stable or use placeholder heights for components to prevent minor layout shifts if the background sync returns data that modifies item heights.

### Common Mistakes
Wiping the cache on unmount or using very short \`gcTime\` values, which deletes the cache and ruins the browser's ability to restore scroll positions.

### Code Example
None required for scroll mechanics.
`,
    bnExplanation: `### ব্যাখ্যা
ইউজার কোনো লিংকে ক্লিক করার পর ব্যাক বাটন চেপে আগের পেজে ফেরত আসলে স্ক্রলRestore হওয়ার মেকানিজম:
- **ক্যাশ ছাড়া**: পেজ ফাঁকা লোড হবে এবং এপিআই সলভ হওয়ার পর হাইট গেইন করবে। এই সময়ের মধ্যে ব্রাউজার স্ক্রল মেমোরি হারিয়ে স্ক্রিনকে উপরে ঠেলে দেয়।
- **টানস্ট্যাক কুয়েরি সহ**:
  - \`useQuery\` প্রথম ফ্রেমেই মেমোরি থেকে ডাটা লোড করে সম্পূর্ণ হাইট নিয়ে পেজ রেন্ডার করে।
  - ব্রাউজার রেন্ডারিং শেষ হওয়ার আগেই বুঝতে পারে পেজের হাইট আগের মতোই আছে, তাই স্ক্রলবার ঠিক আগের জায়গায় (যেমন: ২০০০px নিচে) সেট করে দেয়।
  - ব্যাকগ্রাউন্ড সিঙ্ক চললেও স্ক্রলবার নড়ে না।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক বা লিংকডইন ফিড: ২০টি পোস্ট স্ক্রল করে নিচে নামার পর কোনো লিংকে গেলেন। ব্যাক বাটনে চাপ দিলে আপনি আগের সেই ২০ নম্বর পোস্টের স্ক্রলেই ফেরত আসবেন, নতুন করে এপিআই কলের জন্য ওয়েট করতে হবে না।

### উত্তম অনুশীলন
স্ক্রলবার ঠিক জায়গায় লক রাখতে মেমোরি ক্যাশ বা \`gcTime\` পর্যাপ্ত সময় বাড়িয়ে রাখুন যাতে ব্যাক বাটন চাপলে ক্যাশ ডিলিট না হয়ে যায়।

### সাধারণ ভুলসমূহ
আনমাউন্ট হওয়ার সাথে সাথে ক্যাশ মেমোরি ক্লিয়ার করে দেওয়া অথবা অত্যন্ত কম gcTime ব্যবহার করা, যা ব্রাউজারের স্ক্রল রিস্টোরেশন নষ্ট করে।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।
### সাধারণ ভুলসমূহ
আনমাউন্ট হওয়ার সাথে সাথে ক্যাশ মেমোরি ক্লিয়ার করে দেওয়া অথবা অত্যন্ত কম gcTime ব্যবহার করা, যা ব্রাউজারের স্ক্রল রিস্টোরেশন নষ্ট করে।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।`
  },
  {
    id: "state-query-95",
    title: "How do you design a self-healing Redux Toolkit architecture that recovers from server-side schema mismatches dynamically?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux Toolkit","Architecture","Schema Mismatch","Self-Healing","Zod"],
    enAnswer: "Design a self-healing architecture by validating API responses using schema libraries (like Zod) inside async thunks or middlewares. If a schema mismatch occurs, catch the error, dispatch a migration action to repair or reset the state, and log the mismatch to telemetry.",
    bnAnswer: "সেলফ-হিলিং আর্কিটেকচার তৈরি করতে থাঙ্কের ভেতর Zod দিয়ে এপিআই রেসপন্স ভ্যালিডেট করা হয়। ভ্যালিডেশন এরর পেলে ক্যাচ ব্লকে স্টেট রিসেট বা রিপেয়ার অ্যাকশন ফায়ার করে এরর থেকে রিকভার করা হয়।",
    enExplanation: `### Explanation
In production, backend schema deployments can change without client coordination. If an API returns property structures that differ from what your Redux reducers expect, components can crash during render (e.g. \`cannot read property of undefined\`).

**Self-Healing Redux Architecture**:
1. **Schema Validation**: Run API responses through a schema validator (e.g., \`zod\` parse) inside the async thunk.
2. **Error Interception**: If parsing fails (meaning a schema mismatch was detected):
   - Catch the error before it hits the slice reducer.
   - Dispatch a telemetry action to log the mismatch (Sentry).
   - Resolve the thunk with fallback mock structures or run a data migration parser to reconstruct missing keys.
3. **State Repair**: If local state gets corrupted, trigger a dynamic reset action to restore default values safely.

### Real-World Example
A profile API changes the response field from \`user.fullName\` to \`{ first, last }\`.
- The Zod parser detects this mismatch.
- Instead of crashing the page, the thunk converts \`{ first, last }\` to \`fullName: first + ' ' + last\` dynamically, repairs the payload, and logs a deprecation warning to Sentry.

### Best Practice
Never map raw API JSON directly to Redux store state without validation. Always validate using Zod or define strict fallback defaults for critical fields (like arrays).

### Common Mistakes
Allowing unvalidated JSON payloads to enter slice states, causing multiple rendering crashes across the application when property fields are missing.

### Code Example
\`\`\`typescript



// 1. Define strict Zod validation schema
const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  // Provide safe fallback defaults to prevent rendering crashes!
  roles: z.array(z.string()).default([]),
});

type User = z.infer<typeof UserSchema>;

exports.fetchUserData = createAsyncThunk(
  'user/fetch',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      const rawData = await response.json();
      
      // 2. Validate and auto-repair using Zod defaults
      const parsedData = UserSchema.safeParse(rawData);
      
      if (!parsedData.success) {
        // Schema mismatch detected! Log to Sentry
        console.warn('Schema mismatch details:', parsedData.error.format());
        // Return default fallback structure to keep app from crashing
        return UserSchema.parse({ id: userId, username: 'Guest' });
      }
      
      return parsedData.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিমোট এপিআই ডেপ্লয়মেন্টের সময় ব্যাকএন্ড ডাটার স্কিমা হঠাৎ চেঞ্জ হয়ে যেতে পারে। এটি প্রতিরোধ ও স্টেট রিকভার করার আর্কিটেকচার:
- **ভ্যালিডেশন**: থাঙ্কের ভেতর \`zod\` বা সমতুল্য লাইব্রেরি দিয়ে রেসপন্স ফিল্ড চেক করা হয়।
- **স্বয়ংক্রিয় মেরামত**: যদি স্কিমা অমিল পাওয়া যায়:
  - এটি সেন্ট্রি (Sentry) লগিংয়ে এরর রিপোর্ট পুশ করবে।
  - ডাটা বাতিল করে ক্র্যাশ হওয়ার পরিবর্তে ডিফল্ট মক ভ্যালু সেট করে দিবে অথবা ডাটা রূপান্তরকারী কোড দিয়ে ডাটা মেরামত করে নিবে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার এপিআই থেকে \`user.phone\` ফিল্ডটি ডিলিট করে দেওয়া হলো। Zod এটি সনাক্ত করে স্টোরে এম্পটি স্ট্রিং \`""\` পাঠিয়ে দিল, যার ফলে স্ক্রিনের ডার্কবোর্ড ভেঙে না গিয়ে জাস্ট ফোন নাম্বার এরিয়াটি ফাঁকা দেখাবে।

### উত্তম অনুশীলন
এপিআই থেকে র-জেসন সরাসরি স্টোরে ইনজেক্ট করবেন না। Zod দিয়ে সেফ ভ্যালিডেশন করে ডিফল্ট অপশন ডিক্লেয়ার করে ডাটা পাস করুন।

### সাধারণ ভুলসমূহ
এপিআই থেকে প্রাপ্ত র-জেসন ফাইল ভ্যালিডেশন ছাড়াই সরাসরি রেডক্স স্লাইসে ইনজেক্ট করা, যা কোনো ফিল্ডের অনুপস্থিতিতে অ্যাপ ক্র্যাশ করায়।

### সাধারণ ভুলসমূহ
এপিআই থেকে প্রাপ্ত র-জেসন ফাইল ভ্যালিডেশন ছাড়াই সরাসরি রেডক্স স্লাইসে ইনজেক্ট করা, যা কোনো ফিল্ডের অনুপস্থিতিতে অ্যাপ ক্র্যাশ করায়।

### কোড উদাহরণ
\`\`\`typescript



// ১. Zod দিয়ে স্কিমা ভ্যালিডেশন ও ডিফল্ট মান নির্ধারণ
const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  // ডাটাবেজে ভুল থাকলে বা না থাকলে অটো খালি অ্যারে সেট করবে
  roles: z.array(z.string()).default([]),
});

type User = z.infer<typeof UserSchema>;

exports.fetchUserData = createAsyncThunk(
  'user/fetch',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      const rawData = await response.json();
      
      // ২. স্কিমা ম্যাচিং ভ্যালিডেশন চেক
      const parsedData = UserSchema.safeParse(rawData);
      
      if (!parsedData.success) {
        // অমিল পাওয়া গেছে! সেন্ট্রিতে রিপোর্ট পাঠানো
        console.warn('Schema mismatch details:', parsedData.error.format());
        // অটো-মেরামত: ডিফল্ট গেস্ট ভ্যালু রিটার্ন করে ক্র্যাশ এড়ানো হলো
        return UserSchema.parse({ id: userId, username: 'Guest' });
      }
      
      return parsedData.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
\`\`\``
  },
  {
    id: "state-query-96",
    title: "How do you write a custom state-history (undo/redo) middleware for Zustand from scratch?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Zustand","Custom Middleware","Undo Redo","State History"],
    enAnswer: "Write a custom undo/redo middleware in Zustand by creating a higher-order function that manages past and future state arrays. Intercept set() to push current state to past, clear future, and define undo/redo functions to traverse states.",
    bnAnswer: "Zustand-এ কাস্টম undo/redo মিডলওয়্যার বানাতে past ও future অ্যারে ম্যানেজ করতে হয়। set() কলব্যাক ইন্টারসেপ্ট করে কারেন্ট স্টেট past অ্যারেতে পুশ করে কাস্টম undo/redo মেথড ডিক্লেয়ার করতে হয়।",
    enExplanation: `### Explanation
Implementing undo/redo requires recording history:
- **\`past\`**: Array of historical states.
- **\`future\`**: Array of undone states (redone history).
- **Custom Middleware**:
  - Wraps the state creator.
  - Injects \`undo()\` and \`redo()\` actions into the store.
  - Intercepts \`set\` to save a copy of the current state to the \`past\` array before applying changes, and clears the \`future\` stack.

### Real-World Example
In a drawing canvas layout or text editor:
- Every shape movement calls \`set()\`.
- The middleware records the canvas coordinates.
- Pressing Ctrl+Z triggers \`getState().undo()\`, restoring the previous coordinates from the \`past\` array.

### Best Practice
Only save serializable snapshots of the mutable variables in the history arrays. Avoid saving action functions inside the history stacks.

### Common Mistakes
Forgetting to deep copy nested objects before editing the history stack, which can lead to shared references and state mutation issues.

### Common Mistakes
Forgetting to deep copy nested objects before editing the history stack, which can lead to shared references and state mutation issues.

### Code Example
\`\`\`typescript


// Custom Undo/Redo Middleware
const undoRedo = <T>(config: StateCreator<T>): StateCreator<T & {
  past: Partial<T>[];
  future: Partial<T>[];
  undo: () => void;
  redo: () => void;
}> => (set, get, api) => {
  const initialState = {
    past: [],
    future: [],
  };

  return config(
    (args) => {
      // 1. Intercept state updates to record history
      const currentState = get() as any;
      const { past, future, undo, redo, ...serializableState } = currentState;
      
      set((state: any) => ({
        ...state,
        past: [...state.past, serializableState], // Save past
        future: [], // Clear future history on new action
      }));

      set(args);
    },
    get,
    api
  ) as any;
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
আন্ডু/রিডু (Undo/Redo) ফাংশন বানাতে মেমোরি হিস্ট্রি মেইনটেইন করতে হয়:
- **\`past\`**: আগের স্টেটগুলোর ব্যাকআপ অ্যারে।
- **\`future\`**: রিডু করার জন্য আন্ডু করা স্টেটের অ্যারে।
- **কাস্টম মিডলওয়্যার**:
  - এটি স্টোরে \`undo()\` ও \`redo()\` নামক কাস্টম অ্যাকশন ইনজেক্ট করে।
  - প্রতিটি \`set\` কলের সময় মেমোরির কারেন্ট ডাটা \`past\` অ্যারেতে স্প্রেড করে সেভ করে ও \`future\` অ্যারে ক্লিয়ার করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ক্যানভাস আর্ট বোর্ড বা টেক্সট এডিটর: ইউজার ভুল করে একটি ইমেজ ডিলিট করে ফেললেন। \`undo()\` মেথড ট্রিগার করলে \`past\` অ্যারের শেষ উপাদানটি নিয়ে কারেন্ট স্টেটে সেট করে দিবে, ফলে ইমেজটি ফিরে আসবে।

### উত্তম অনুশীলন
হিস্ট্রি অ্যারেতে শুধুমাত্র সিরিয়ালাইজেবল ডাটার স্ন্যাপশট রাখুন। অ্যাকশন ফাংশন হিস্ট্রি ট্যাবে রাখা এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ
স্টেট হিস্ট্রি এডিট করার পূর্বে নেস্টেড অবজেক্টগুলোর ডিপ কপি করতে ভুলে যাওয়া, যার ফলে স্টেট মিউটেশন কনফ্লিক্ট তৈরি হয়।

### উত্তম অনুশীলন
হিস্ট্রি অ্যারেতে শুধুমাত্র সিরিয়ালাইজেবল ডাটার স্ন্যাপশট রাখুন। অ্যাকশন ফাংশন হিস্ট্রি ট্যাবে রাখা এড়িয়ে চলুন।

### সাধারণ ভুলসমূহ
স্টেট হিস্ট্রি এডিট করার পূর্বে নেস্টেড অবজেক্টগুলোর ডিপ কপি করতে ভুলে যাওয়া, যার ফলে স্টেট মিউটেশন কনফ্লিক্ট তৈরি হয়।

### কোড উদাহরণ
\`\`\`typescript


// কাস্টম আন্ডু-রিডু মিডলওয়্যার
const undoRedo = <T>(config: StateCreator<T>): StateCreator<T & {
  past: Partial<T>[];
  future: Partial<T>[];
  undo: () => void;
  redo: () => void;
}> => (set, get, api) => {
  const initialState = {
    past: [],
    future: [],
  };

  return config(
    (args) => {
      // ১. হিস্ট্রি রেকর্ড করতে আপডেট ইন্টারসেপ্ট করা হচ্ছে
      const currentState = get() as any;
      const { past, future, undo, redo, ...serializableState } = currentState;
      
      set((state: any) => ({
        ...state,
        past: [...state.past, serializableState], // পেছনের ডাটা সেভ
        future: [], // নতুন অ্যাকশনে ফিউচার হিস্ট্রি ক্লিয়ার
      }));

      set(args);
    },
    get,
    api
  ) as any;
};
\`\`\``
  },
  {
    id: "state-query-97",
    title: "How do you build a real-time event pipeline in Redux using middleware connected to a SSE (Server-Sent Events) endpoint?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Redux","Middleware","SSE","Server-Sent Events","Real-time Pipeline"],
    enAnswer: "Build a real-time pipeline by creating a Redux middleware that instantiates an EventSource listener on initialization. When SSE events arrive from the server, dispatch matching action payloads to update the store dynamically.",
    bnAnswer: "রেডক্সে রিয়েল-টাইম পাইপলাইন তৈরি করতে মিডলওয়্যারের ভেতর EventSource লিসেনার চালু করতে হয়। সার্ভার থেকে SSE ইভেন্ট পাঠানো মাত্র মিডলওয়্যার সেটি ক্যাচ করে সংশ্লিষ্ট অ্যাকশন ডেসপ্যাচ করে দেয়।",
    enExplanation: `### Explanation
Server-Sent Events (SSE) provide a one-way real-time data stream from the server:
- Unlike WebSockets, SSE is unidirectional (server to client) and operates over standard HTTP, making it simpler to deploy.
- **Redux Middleware Integration**:
  - Inside the middleware bootstrap block, initialize the \`EventSource\` endpoint.
  - Set up listeners for custom event names.
  - When the server pushes an update, the middleware intercept it and calls \`store.dispatch({ type: event.type, payload: event.data })\` to update the state.
  - Implement automatic reconnection logic if the HTTP channel closes.

### Real-World Example
In a live notification alert center:
- Next.js server pushes real-time notifications to \`/api/events\`.
- The Redux middleware connects.
- Whenever a notification event is pushed, it dispatches \`notifications/addNotification\`, displaying a toast banner instantly in the browser.

### Best Practice
Only open the EventSource connection when the user logs in. Wrap the connection logic inside custom action checks (\`auth/loginSuccess\` starts the listener, \`auth/logout\` closes it).

### Common Mistakes
Opening multiple EventSource connections without checking if a connection is already active, which leads to memory leaks and connection limit exhaustion.

### Common Mistakes
Opening multiple EventSource connections without checking if a connection is already active, which leads to memory leaks and connection limit exhaustion.

### Code Example
\`\`\`typescript


exports.sseRealtimeMiddleware: Middleware = (store) => {
  let eventSource: EventSource | null = null;

  return (next) => (action: any) => {
    // 1. Initialize connection on login success
    if (action.type === 'auth/loginSuccess') {
      eventSource = new EventSource('/api/live-stream');

      eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        // Dispatch action to update Redux store
        store.dispatch({ type: 'stream/receiveUpdate', payload: data });
      });

      eventSource.onerror = (err) => {
        console.error('SSE connection lost:', err);
      };
    }

    // 2. Close connection on logout
    if (action.type === 'auth/logout' && eventSource) {
      eventSource.close();
      eventSource = null;
    }

    return next(action);
  };
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Server-Sent Events (SSE) হলো একমুখী রিয়েল-টাইম ডাটা স্ট্রিম মেথড:
- ওয়েব সকেটের চেয়ে এটি ওয়ান-ওয়ে হওয়ায় কম ওজনের এবং স্ট্যান্ডার্ড HTTP প্রোটোকল ব্যবহার করে।
- **রেডক্স মিডলওয়্যার ইন্টিগ্রেশন**:
  - মিডলওয়্যারের ভেতর এপিআই চ্যানেলে কানেক্ট করতে \`new EventSource()\` কল করা হয়।
  - সার্ভার কোনো মেসেজ পুশ করলে লিসেনার তা রিসিভ করে ডাটা পার্স করে রেডক্স স্টোরে \`dispatch()\` করে।
  - মিডলওয়্যার লগআউট অ্যাকশন ডিটেক্ট করলে অটো কানেকশন ক্লোজ করে মেমোরি সেভ করে।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ নোটিফিকেশন সিস্টেম: সার্ভার থেকে নতুন মেসেজের নোটিফিকেশন আসলে SSE চ্যানেলের মাধ্যমে মিডলওয়্যার তা রিসিভ করে সরাসরি রেডক্সে পাঠিয়ে দিবে। রিঅ্যাক্ট উইজেটটি সাথে সাথে টোস্ট ব্যানার শো করবে।

### উত্তম অনুশীলন
ইউজার লগইন করার পরেই কেবল EventSource কানেকশন তৈরি করুন। লগআউটের সময় কানেকশন সঠিকভাবে বন্ধ করুন।

### সাধারণ ভুলসমূহ
কানেকশন অলরেডি সচল আছে কিনা তা চেক না করে বারবার নতুন EventSource কানেকশন তৈরি করা, যা কানেকশন ও মেমোরি লিক ঘটায়।

### উত্তম অনুশীলন
ইউজার লগইন করার পরেই কেবল EventSource কানেকশন তৈরি করুন। লগআউটের সময় কানেকশন সঠিকভাবে বন্ধ করুন।

### সাধারণ ভুলসমূহ
কানেকশন অলরেডি সচল আছে কিনা তা চেক না করে বারবার নতুন EventSource কানেকশন তৈরি করা, যা কানেকশন ও মেমোরি লিক ঘটায়।

### কোড উদাহরণ
\`\`\`typescript


exports.sseRealtimeMiddleware: Middleware = (store) => {
  let eventSource: EventSource | null = null;

  return (next) => (action: any) => {
    // ১. লগইন সাকসেস হলে কানেকশন শুরু
    if (action.type === 'auth/loginSuccess') {
      eventSource = new EventSource('/api/live-stream');

      eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        // রেডক্স স্টোরে ডিসপ্যাচ করে ক্যাশ আপডেট
        store.dispatch({ type: 'stream/receiveUpdate', payload: data });
      });

      eventSource.onerror = (err) => {
        console.error('SSE connection lost:', err);
      };
    }

    // ২. লগআউট হলে কানেকশন বন্ধ
    if (action.type === 'auth/logout' && eventSource) {
      eventSource.close();
      eventSource = null;
    }

    return next(action);
  };
};
\`\`\``
  },
  {
    id: "state-query-98",
    title: "How do you perform server-state synchronization with local database backends (like IndexedDB or RxDB) using TanStack Query?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","IndexedDB","RxDB","State Sync","Offline DB"],
    enAnswer: "Perform server-state sync with local DBs by defining your queryFn to read directly from the local DB, and configuring background sync listeners (like useMutation onSuccess callbacks) to write updates to both server and local DB simultaneously.",
    bnAnswer: "লোকাল ডাটাবেজে সিঙ্ক করতে queryFn এর ভেতর লোকাল DB (যেমন IndexedDB) রিড করানোর কোড লিখতে হয়, এবং মিউটেশন সফল হলে সার্ভারে ডাটা রাইটের পাশাপাশি লোকাল DB-তেও ডাটা সেভ করার মেথড ট্রিগার করতে হয়।",
    enExplanation: `### Explanation
For offline-first, highly reactive desktop-grade web applications:
- **IndexedDB/RxDB**: Serve as the immediate client database, containing a local copy of all records.
- **TanStack Query's role**:
  - The \`queryFn\` reads directly from the local database (\`RxDB.find()\`), ensuring O(1) synchronous load times.
  - When the component loads, TanStack Query triggers background queries to fetch updates from the server API, writing new records to the local database on completion, which reactively updates the query cache.
  - Mutations write to the local database immediately and queue a background sync handler to post the update to the server when network permits.

### Real-World Example
In a local-first email app (like Superhuman):
- All emails are stored locally inside IndexedDB.
- Navigating folders fetches from IndexedDB instantly (0ms load screen).
- TanStack Query syncs with the server in the background, updating the local database if new emails are found, which triggers a cache update automatically.

### Best Practice
Decouple components from direct server fetch URLs. Components only interact with TanStack Query hooks, which coordinate reads/writes with the local database.

### Common Mistakes
Neglecting query invalidations when updates happen offline, which causes stale UI display when the connection returns.

### Common Mistakes
Neglecting query invalidations when updates happen offline, which causes stale UI display when the connection returns.

### Code Example
\`\`\`typescript

 // Custom IndexedDB wrapper

export function useSyncTodos() {
  const queryClient = useQueryClient();

  // Read data from local IndexedDB first
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: () => localDb.getAllTodos(), // Quick local read
  });

  // Mutation: write to local IndexedDB and sync to server
  const { mutate: addTodo } = useMutation({
    mutationFn: async (text: string) => {
      const newTodo = { id: Date.now().toString(), text, completed: false };
      
      // 1. Write to local database instantly
      await localDb.saveTodo(newTodo);
      
      // 2. Queue or fire background sync to server
      fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
      });
      
      return newTodo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { todos, addTodo };
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
অফলাইন-ফার্স্ট এবং চরম ফাস্ট রিয়্যাক্টিভিটি নিশ্চিত করতে ব্রাউজারের লোকাল ডাটাবেজ ব্যবহার করা হয়:
- **RxDB / IndexedDB**: এটি ব্রাউজারের হার্ড ড্রাইভে সম্পূর্ণ ডাটার কপি লোকাললি সেভ করে রাখে।
- **টানস্ট্যাক কুয়েরির সমন্বয়**:
  - \`queryFn\` সরাসরি ক্লাউড সার্ভার এপিআই হিট না করে লোকাল ডাটাবেজ থেকে ডাটা রিড করে স্ক্রিনে ভিউ রেডি করে দেয় (0ms লোড)।
  - ব্যাকগ্রাউন্ড লিসেনারে সার্ভার এপিআই চেক করে নতুন ডাটা আসলে লোকাল ডাটাবেজ রাইট করে যা কুয়েরির ক্যাশ রি-সিঙ্ক করে দেয়।
  - মিউটেশনগুলো ডিরেক্ট লোকাল ডাটাবেজে রাইট অপারেশন সম্পন্ন করে ও নেটওয়ার্ক ফিরে আসলে সার্ভার এপিআইতে পোস্ট কিউ পাঠায়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি হাই-স্পিড ইমেইল ক্লায়েন্ট: ইনবক্সে ক্লিক করলে এপিআই বাফারিং ছাড়াই লোকালস্টোরেজ থেকে হাজারো ইমেইল ডিরেক্ট চলে আসে। ব্যাকগ্রাউন্ডে টানস্ট্যাক কুয়েরি এপিআই হিট করে নতুন মেইল আনলে তা লোকাল ডাটাবেজে সেভ হয় ও ক্যাশ স্ক্রিন রিলোড করে।

### উত্তম অনুশীলন
কম্পোনেন্টগুলোকে সরাসরি এপিআই ফেচ থেকে মুক্ত রাখুন। ডাটা রিড/রাইট কোঅর্ডিনেট করার কাজ টানস্ট্যাক কুয়েরি ও লোকাল ডিবি-কে করতে দিন।

### সাধারণ ভুলসমূহ
অফলাইনে ডাটা আপডেট হওয়ার পর নেটওয়ার্ক ফিরে আসলে কুয়েরি ইনভ্যালিড করতে ভুলে যাওয়া, যার ফলে স্ক্রিনে পুরোনো ডাটা প্রদর্শিত হয়।

### উত্তম অনুশীলন
কম্পোনেন্টগুলোকে সরাসরি এপিআই ফেচ থেকে মুক্ত রাখুন। ডাটা রিড/রাইট কোঅর্ডিনেট করার কাজ টানস্ট্যাক কুয়েরি ও লোকাল ডিবি-কে করতে দিন।

### সাধারণ ভুলসমূহ
অফলাইনে ডাটা আপডেট হওয়ার পর নেটওয়ার্ক ফিরে আসলে কুয়েরি ইনভ্যালিড করতে ভুলে যাওয়া, যার ফলে স্ক্রিনে পুরোনো ডাটা প্রদর্শিত হয়।

### কোড উদাহরণ
\`\`\`typescript

 // কাস্টম IndexedDB ক্লায়েন্ট

export function useSyncTodos() {
  const queryClient = useQueryClient();

  // লোকাল IndexedDB থেকে ডাটা রিড করা হচ্ছে
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: () => localDb.getAllTodos(), // ওয়ান-টাইম লোকাল রিড
  });

  // মিউটেশন: লোকাল ডাটাবেজে রাইট করে ব্যাকগ্রাউন্ড সার্ভার সিঙ্ক করবে
  const { mutate: addTodo } = useMutation({
    mutationFn: async (text: string) => {
      const newTodo = { id: Date.now().toString(), text, completed: false };
      
      // ১. লোকাল ডাটাবেজে সেভ
      await localDb.saveTodo(newTodo);
      
      // ২. ব্যাকগ্রাউন্ডে সার্ভারে পোস্ট
      fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
      });
      
      return newTodo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { todos, addTodo };
}
\`\`\``
  },
  {
    id: "state-query-99",
    title: "What are the risks of using mutations with optimistic updates in highly concurrent environments, and how do you handle rollback collision issues?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["TanStack Query","Optimistic Updates","Concurrency","Rollback Collision"],
    enAnswer: "The risk of optimistic updates in concurrent environments is state collision. If user A and user B mutate the same key, a failed request from user A can rollback valid edits made by user B. Fix this by using state diff patches instead of replacing full arrays.",
    bnAnswer: "কনকারেন্ট এনভায়রনমেন্টে অপ্টিমিস্টিক আপডেটের মূল ঝুঁকি হলো স্টেট কলিশন বা সংঘাত। ইউজার A-এর এপিআই ক্র্যাশ করলে তা রোলব্যাক হয়ে ইউজার B-এর করা ভ্যালিড এডিট মুছে দিতে পারে। স্লাইস ডিফ প্যাচিং করে এটি সমাধান করা হয়।",
    enExplanation: `### Explanation
In highly concurrent web applications (e.g. collaborative documents or live auction portals):
- **The Collision Risk**:
  - User A likes a post (optimistic count goes from 10 to 11).
  - User B likes the same post (optimistic count goes from 11 to 12).
  - User A's API call fails on the server.
  - User A's \`onError\` callback triggers a rollback, restoring the cache to the snapshot captured *before* User A's action (which was 10).
  - **Result**: User B's successful action is wiped out, and the counter jumps back to 10.

**Solving Rollback Collisions**:
- **Data Delta updates**: Do not save the entire array as a snapshot for rollback. Instead, store the specific change (the delta, e.g. \`-1\` to like count) and apply the delta during error recovery, ensuring other concurrent updates remain intact.

### Real-World Example
In a collaborative Trello board. If two managers drag different cards at the same time:
- Storing full column snapshots in \`onMutate\` causes one manager's network drop to drag the other manager's card back to its old column.
- Using delta path updates ensures only the failed card moves back.

### Best Practice
Avoid full cache overwrites inside \`onError\` rollbacks in collaborative setups. Save specific item patches or use timestamp validations to verify if another update has resolved since the snapshot was captured.

### Common Mistakes
Using full cache snapshots in concurrent collaborative environments, which resets modifications made by other users when a single user fails.

### Common Mistakes
Using full cache snapshots in concurrent collaborative environments, which resets modifications made by other users when a single user fails.

### Code Example
None required for concurrency analysis.
`,
    bnExplanation: `### ব্যাখ্যা
একাধিক ইউজার যখন একই সময়ে একই পেইজে এডিট অপারেশন চালান, তখন অপ্টিমিস্টিক রোলব্যাক সংঘাত (Collision) তৈরি করতে পারে:
- **স্টেট কলিশন ঝুঁকি**:
  - ইউজার A একটি লাইক দিলেন (কাউন্টার ১০ থেকে ১১ হলো)।
  - ইউজার B একই সময়ে ক্লিক করে লাইক দিলেন (কাউন্টার ১১ থেকে ১২ হলো)।
  - ইউজার A-এর নেটওয়ার্ক ড্রপ করায় তার এপিআই ফেইল হলো।
  - ইউজার A-এর \`onError\` কলব্যাক ক্যাশ ডাটা আগের অবস্থায় রিভার্ট করে দিল (কাউন্টার আবার ১০ করে দিল)।
  - ইউজার B-এর করা সফল লাইক ডাটাটি মুছে যাবে এবং স্ক্রিন ভুল রি-সেট ডাটা দেখাবে।

### বাস্তব-ভিত্তিক উদাহরণ
কোলাবোরেটিভ ট্রেলো বোর্ড (Trello board): ২ জন ম্যানেজার কার্ড ড্র্যাগ করছেন। ম্যানেজার A-এর এপিআই কানেকশন এরর হলে যদি পুরো কলাম ডাটা রোলব্যাক করা হয়, তবে ম্যানেজার B-এর সদ্য এডিট করা অন্য কার্ডগুলোও ভুলবশত ওল্ড পজিশনে চলে যাবে।

### উত্তম অনুশীলন
রোলব্যাক করার সময় পুরো ক্যাশ অবজেক্ট স্প্রেড না করে শুধুমাত্র যে এলিমেন্টটি ফেইল হয়েছে তা সিলেক্ট করে আন্ডু করুন। এটি অন্য কনকারেন্ট ইউজারদের আপডেট প্রসেস সুরক্ষিত রাখে।

### সাধারণ ভুলসমূহ
একযোগে একাধিক ইউজার কাজ করার সময় অন-মিউটেট স্ন্যাপশটে সম্পূর্ণ ডাটা অবজেক্ট ব্যাকআপ রাখা, যা কোনো রিকোয়েস্ট ফেইল হলে অন্য ইউজারের কাজ রোলব্যাক করে দেয়।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।
### সাধারণ ভুলসমূহ
একযোগে একাধিক ইউজার কাজ করার সময় অন-মিউটেট স্ন্যাপশটে সম্পূর্ণ ডাটা অবজেক্ট ব্যাকআপ রাখা, যা কোনো রিকোয়েস্ট ফেইল হলে অন্য ইউজারের কাজ রোলব্যাক করে দেয়।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।`
  },
  {
    id: "state-query-100",
    title: "What is the recommended strategy for incrementally migrating a legacy Redux codebase to a modern Zustand + TanStack Query architecture?",
    difficulty: "advanced",
    category: "state-query",
    tags: ["Architecture","Migration","Redux","Zustand","TanStack Query"],
    enAnswer: "The recommended strategy is incremental decoupling. Identify API-bound states and migrate them first to TanStack Query. Then, migrate local UI states slice-by-slice from Redux to isolated Zustand stores, allowing coexistence during migration.",
    bnAnswer: "পদ্ধতিগত মাইগ্রেশনের উপায় হলো ইনক্রিমেন্টাল ডিকাপলিং। প্রথমে এপিআই-ভিত্তিক স্টেটগুলো টানস্ট্যাক কুয়েরিতে শিফট করুন। এরপর লোকাল ইউআই স্টেটগুলো স্লাইস অনুযায়ী রেডক্স থেকে জুস্ট্যান্ড স্টোরে ট্রান্সফার করুন।",
    enExplanation: `### Explanation
Attempting a rewrite of a large Redux codebase all at once is highly risky. Next.js and React support incrementally importing and utilizing multiple state managers.

**Incremental Migration Blueprint**:
1. **Coexistence**: Keep the Redux Store Provider active. Install Zustand and TanStack Query.
2. **Phase 1: Shift Server State**:
   - Locate Redux slices that manage API fetches (loading spinner toggles, data arrays, fetch error states).
   - Convert them one-by-one to TanStack Query \`useQuery\` or \`useMutation\` hooks.
   - Delete the corresponding Redux slices.
3. **Phase 2: Shift Client State**:
   - Look at the remaining Redux slices (UI modals, theme configurations, sidebars).
   - Move these simple states slice-by-slice into dedicated, lightweight Zustand stores.
4. **Phase 3: Clean up**:
   - Once all slices have been refactored, remove \`react-redux\`, \`@reduxjs/toolkit\`, and the Redux Provider layout wrappers entirely, saving bundle weight.

### Real-World Example
In a large SaaS enterprise portal:
- Developers keep the Redux provider active to prevent breaking legacy pages.
- They build new features using Zustand and TanStack Query.
- During sprint cleanups, they migrate the legacy user settings page to Zustand and the billing history queries to TanStack Query, incrementally dismantling the Redux boilerplate.

### Best Practice
Verify that the Redux store does not depend on data from the newly created Zustand stores during the migration. Keep the data flow unidirectional and avoid writing cross-store updates.

### Common Mistakes
Attempting a big-bang rewrite of all Redux slices at once, which increases the likelihood of system-wide regression bugs.

### Common Mistakes
Attempting a big-bang rewrite of all Redux slices at once, which increases the likelihood of system-wide regression bugs.

### Code Example
None required for migration architecture blueprint.
`,
    bnExplanation: `### ব্যাখ্যা
একটি বড় রেডক্স কোডবেস একসাথে সম্পূর্ণ রি-রাইট করার চেষ্টা করা অত্যন্ত ঝুঁকিপূর্ণ। নেক্সট-জেএস এবং রিঅ্যাক্ট একসাথে একাধিক স্টেট ম্যানেজার ব্যবহার সমর্থন করে।

**ধাপে ধাপে মাইগ্রেশনের রূপরেখা**:
১. **সহাবস্থান (Coexistence)**: রেডক্স স্টোর প্রোভাইডার সচল রাখুন এবং পাশাপাশি জুস্ট্যান্ড ও টানস্ট্যাক কুয়েরি ইনস্টল করুন।
২. **ধাপ ১: সার্ভার স্টেট মাইগ্রেশন**:
   - এপিআই ফেচ ম্যানেজ করা রেডক্স স্লাইসগুলো চিহ্নিত করুন এবং টানস্ট্যাক কুয়েরি ব্যবহার করে প্রতিস্থাপন করুন।
৩. **ধাপ ২: ক্লায়েন্ট স্টেট মাইগ্রেশন**:
   - লোকাল ইউআই স্টেটগুলো স্লাইস অনুযায়ী জুস্ট্যান্ড স্টোরে ট্রান্সফার করুন।
৪. **ধাপ ৩: ক্লিনআপ**:
   - মাইগ্রেশন শেষ হলে অব্যবহৃত রেডক্স প্যাকেজগুলো মুছে ফেলুন।

### বাস্তব-ভিত্তিক উদাহরণ
একটি বড় SaaS প্ল্যাটফর্মে ডেভলপাররা পুরোনো পেজ ভেঙে যাওয়া রোধ করতে রেডক্স প্রোভাইডার সচল রাখেন। নতুন ফিচারগুলো জুস্ট্যান্ড ও টানস্ট্যাক কুয়েরি দিয়ে তৈরি করেন এবং স্প্রিন্ট ক্লিনআপে ধাপে ধাপে পুরোনো পার্টগুলো স্থানান্তরিত করেন।

### উত্তম অনুশীলন
মাইগ্রেশনের সময় নিশ্চিত করুন যে রেডক্স স্টোর কোনোভাবেই নতুন জুস্ট্যান্ড স্টোরের ওপর নির্ভরশীল নয়। ডাটা ফ্লো একমুখী রাখুন।

### সাধারণ ভুলসমূহ
সব রেডক্স স্লাইস একসাথে বিগ-ব্যাং মাইগ্রেশন করার চেষ্টা করা, যা সম্পূর্ণ সিস্টেমে বড় ধরনের রিগ্রেশন বাগ তৈরি করতে পারে।

### কোড উদাহরণ
কোড উদাহরণের প্রয়োজন নেই।`
  }
];
