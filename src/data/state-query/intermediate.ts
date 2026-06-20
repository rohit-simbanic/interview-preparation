import type { Question } from '../../types';

export const intermediateQuestions: Question[] = [
  {
    id: "state-query-31",
    title: "How do you implement the slice pattern in Zustand to modularize large stores?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Slice Pattern","Architecture","Store Design"],
    enAnswer: "The slice pattern in Zustand modularizes stores by defining separate creator functions for distinct feature domains. You then merge these slices into a single store by combining them inside the root create function, passing the set, get, and store arguments to each slice creator.",
    bnAnswer: "Zustand-এ স্লাইস প্যাটার্ন (Slice Pattern) ব্যবহার করতে প্রতিটি ফিচারের জন্য আলাদা আলাদা ক্রিয়েটর ফাংশন লিখতে হয়। পরবর্তীতে রুট create ফাংশনের ভেতর set, get এবং store আর্গুমেন্ট পাস করে স্লাইসগুলোকে একত্রিত করা হয়।",
    enExplanation: `### Explanation
As applications grow, keeping all state and actions in a single file becomes unmaintainable. Zustand supports splitting state using the slice pattern:
- **Slice Creators**: You write creator functions for each sub-domain (e.g., \`createCartSlice\`, \`createAuthSlice\`).
- **Signature**: Each slice is a function that accepts \`(set, get, store)\` and returns a state object.
- **Root Store**: In the root store file, you call \`create\` and invoke each slice creator inside, passing the arguments down: \`...createCartSlice(set, get, store)\`.

### Real-World Example
For an e-commerce dashboard containing cart management and user authentication:
- Create \`cartSlice.ts\` to manage item arrays.
- Create \`authSlice.ts\` to manage tokens and sessions.
- In \`store.ts\`, combine them into a single unified hook \`useBoundStore\`.

### Best Practice
Use TypeScript's \`StateCreator\` utility to define types for each slice. This ensures that state access using \`get()\` and updates using \`set()\` remain fully typed across slice boundaries.

### Common Mistakes
Forgetting to pass all arguments \`(set, get, store)\` to the slice creators in the root store, which causes runtime errors when slices try to update state.

### Code Example
\`\`\`typescript


// CartSlice {
  items: string[];
  addItem: (item: string) => void;
}

// UserSlice {
  user: string | null;
  login: (name: string) => void;
}

// 1. Define Slices using StateCreator
const createCartSlice: StateCreator<CartSlice & UserSlice, [], [], CartSlice> = (set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
});

const createUserSlice: StateCreator<CartSlice & UserSlice, [], [], UserSlice> = (set) => ({
  user: null,
  login: (name) => set({ user: name }),
});

// 2. Combine Slices into a single Store
exports.useBoundStore = create<CartSlice & UserSlice>((...a) => ({
  ...createCartSlice(...a),
  ...createUserSlice(...a),
}));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
প্রজেক্ট বড় হলে সব স্টেট এক ফাইলে রাখা কঠিন। স্লাইস প্যাটার্ন এটি সমাধান করে:
- **স্লাইস ক্রিয়েটর**: প্রতিটি বিষয়ের জন্য আলাদা ফাংশন (যেমন: \`createCartSlice\`) লেখা হয়।
- **প্যারামিটার**: প্রতিটি স্লাইস প্যারামিটার হিসেবে \`(set, get, store)\` গ্রহণ করে এবং অবজেক্ট রিটার্ন করে।
- **রুট স্টোর**: মূল স্টোর ফাইলে সবগুলো স্লাইস স্প্রেড করে মার্জ করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ই-কমার্স অ্যাপে কার্ট ও ইউজার প্রোফাইলের জন্য ২টি আলাদা ফাইল \`cartSlice.ts\` ও \`authSlice.ts\` তৈরি করা হলো। এরপর মূল \`store.ts\` ফাইলে তাদের কম্বাইন করে একটি গ্লোবাল হুক \`useBoundStore\` প্রকাশ করা হলো।

### উত্তম অনুশীলন
টাইপ সেফটি বজায় রাখতে টাইপস্ক্রিপ্টের \`StateCreator\` ইউটিলিটি ব্যবহার করুন। এটি এক স্লাইস থেকে অন্য স্লাইসের ডাটা রিড ও রাইট করা সুরক্ষিত করে।

### সাধারণ ভুলসমূহ
রুট ফাইলে স্লাইস ক্রিয়েটর রান করার সময় আর্গুমেন্ট পাস করতে ভুল করা, যা রানটাইম ক্র্যাশ ঘটায়।

### কোড উদাহরণ
\`\`\`typescript


// CartSlice {
  items: string[];
  addItem: (item: string) => void;
}

// UserSlice {
  user: string | null;
  login: (name: string) => void;
}

// ১. StateCreator দিয়ে আলাদা স্লাইস ডিফাইন করা
const createCartSlice: StateCreator<CartSlice & UserSlice, [], [], CartSlice> = (set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
});

const createUserSlice: StateCreator<CartSlice & UserSlice, [], [], UserSlice> = (set) => ({
  user: null,
  login: (name) => set({ user: name }),
});

// ২. স্লাইসগুলো একত্রিত করে স্টোর তৈরি
exports.useBoundStore = create<CartSlice & UserSlice>((...a) => ({
  ...createCartSlice(...a),
  ...createUserSlice(...a),
}));
\`\`\``
  },
  {
    id: "state-query-32",
    title: "How do you integrate Immer middleware inside a Zustand store to handle deeply nested updates easily?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Immer","Middleware","Nested State"],
    enAnswer: "To integrate Immer in Zustand, wrap your state creator function with the immer() middleware imported from \"zustand/middleware/immer\". This changes the behavior of the set() function inside your store, allowing you to directly mutate the state draft synchronously.",
    bnAnswer: "Zustand-এ Immer ইন্টিগ্রেট করতে \"zustand/middleware/immer\" থেকে immer মিডলওয়্যার নিয়ে স্টোর ক্রিয়েটর র্যাপ করতে হয়। এর ফলে স্টোরের set() ফাংশন সরাসরি ড্রাফট ডিক্লেয়ার করে মিউটেশন লজিক সেফলি এক্সিকিউট করতে সাহায্য করে।",
    enExplanation: `### Explanation
Zustand's default \`set\` performs a shallow merge. For deeply nested object structures, you must spread every nesting layer to preserve fields:
\`set(state => ({ user: { ...state.user, address: { ...state.user.address, city: 'Dhaka' } } }))\`

By wrapping the store with the \`immer\` middleware:
- The \`set\` callback parameter receives a mutable \`state\` draft proxy (from Immer).
- You can write normal mutations directly: \`state.user.address.city = 'Dhaka'\`.
- Immer records the updates and outputs a new immutable state automatically.

### Real-World Example
In a user profile settings page where address coordinates, billing info, and preferences are nested inside a \`user\` object. Writing nested spreads makes code unreadable and prone to property losses. Immer keeps the update code clean and readable.

### Best Practice
When combining \`immer\` with other middlewares like \`persist\`, wrap \`immer\` on the inside: \`persist(immer((set) => ...))\`.

### Common Mistakes
Forgetting that when using \`immer\` middleware, you should not return an object from the \`set\` function if you are mutating the state draft directly.

### Code Example
\`\`\`typescript



// Todo {
  id: string;
  text: string;
  meta: {
    priority: string;
    labels: string[];
  };
}

// TodoStore {
  todos: Todo[];
  addLabel: (todoId: string, label: string) => void;
}

// Wrap with immer middleware
exports.useTodoStore = create<TodoStore>()(
  immer((set) => ({
    todos: [
      { id: '1', text: 'Task', meta: { priority: 'High', labels: [] } }
    ],
    addLabel: (todoId, label) =>
      set((state) => {
        const todo = state.todos.find((t) => t.id === todoId);
        if (todo) {
          // Mutate nested array directly! Immer handles deep immutability
          todo.meta.labels.push(label);
        }
      }),
  }))
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand-এর ডিফল্ট \`set\` শ্যালো মার্জ করায় নেস্টেড অবজেক্ট আপডেট করা অনেক কঠিন হয়ে দাঁড়ায়। \`immer\` মিডলওয়্যার এটি সহজ করে:
- এটি \`set\` মেথডের ভেতর একটি ড্রাফট স্টেট (\`state\`) প্রক্সি তৈরি করে।
- আপনি সরাসরি \`state.user.address.city = 'Dhaka'\` লিখতে পারেন।
- ইমার ব্যাকগ্রাউন্ডে এটি সেফ ইমিউটেবল আপডেটে পরিণত করে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার প্রোফাইল এডিটে নাম, ঠিকানা ও কাজের অভিজ্ঞতা যদি আলাদা নেস্টেড ফোল্ডারে থাকে, তবে ইমার ব্যবহার করে খুব সহজে এক লাইনের লজিকে ডাটা মডিফাই করা যায়।

### উত্তম অনুশীলন
যখন \`immer\` এবং \`persist\` মিডলওয়্যার একসাথে ব্যবহার করবেন, তখন ইমারকে পারসিস্টের ভেতরে রাখুন: \`persist(immer((set) => ...))\`।

### সাধারণ ভুলসমূহ
ড্রাফট মিউটেট করার সময়ও \`set\` থেকে ভুল করে অবজেক্ট রিটার্ন করতে চাওয়া যা এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript



// Todo {
  id: string;
  text: string;
  meta: {
    priority: string;
    labels: string[];
  };
}

// TodoStore {
  todos: Todo[];
  addLabel: (todoId: string, label: string) => void;
}

// immer মিডলওয়্যার দিয়ে র্যাপ করা হলো
exports.useTodoStore = create<TodoStore>()(
  immer((set) => ({
    todos: [
      { id: '1', text: 'Task', meta: { priority: 'High', labels: [] } }
    ],
    addLabel: (todoId, label) =>
      set((state) => {
        const todo = state.todos.find((t) => t.id === todoId);
        if (todo) {
          // সরাসরি নেস্টেড অ্যারেতে পুশ করা হচ্ছে
          todo.meta.labels.push(label);
        }
      }),
  }))
);
\`\`\``
  },
  {
    id: "state-query-33",
    title: "How do you subscribe to specific state changes programmatically in Zustand using the subscribe listener?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","subscribe","State Listening","Side Effects"],
    enAnswer: "To subscribe to specific state changes, call the subscribe() function exposed on your store hook. It receives a callback with the current and previous state, and you can filter changes inside it or use subscribeWithSelector middleware for granular field-level triggers.",
    bnAnswer: "Zustand-এ নির্দিষ্ট স্টেট পরিবর্তনের লিসেনার সেট করতে স্টোর হুকের subscribe() মেথড কল করতে হয়। কাস্টম ফিল্ড ট্র্যাকিংয়ের জন্য subscribeWithSelector মিডলওয়্যার ব্যবহার করা হয় যা নির্দিষ্ট ভ্যালু চেঞ্জ ট্র্যাকিং সহজ করে।",
    enExplanation: `### Explanation
Zustand allows listening to state updates outside the React lifecycle:
- **\`useStore.subscribe\`**: Fires on every state modification, receiving \`(state, prevState)\`.
- **Granular subscriptions**: To avoid checking manually if a field changed, wrap your store with **\`subscribeWithSelector\`** middleware. This updates the \`subscribe\` signature, enabling selectors and shallow equality comparisons directly.

### Real-World Example
Logging user actions or synchronizing theme states with dynamic analytics engines. You subscribe to the user authentication state, and when the user changes from anonymous to logged-in, you push login metrics to your analytics servers automatically.

### Best Practice
Always return the unsubscribe handler from \`useEffect\` cleanups to prevent memory leaks when components unmount.

### Common Mistakes
Using standard \`subscribe\` inside a component without cleaning it up, causing listeners to accumulate on every render.

### Code Example
\`\`\`typescript



// AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

// 1. Wrap with subscribeWithSelector
exports.useAuthStore = create<AuthState>()(
  subscribeWithSelector((set) => ({
    token: null,
    setToken: (token) => set({ token }),
  }))
);

// --- Anywhere in your codebase (e.g. index.ts) ---
// 2. Subscribe to specific field (token) changes only
const unsub = useAuthStore.subscribe(
  (state) => state.token,
  (token) => {
    console.log("Token changed dynamically to:", token);
    if (token) {
      localStorage.setItem('auth-token', token);
    } else {
      localStorage.removeItem('auth-token');
    }
  },
  { fireImmediately: false }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand-এ রিঅ্যাক্টের বাইরে স্টেটের পরিবর্তন ট্র্যাক করার মেথড:
- **\`useStore.subscribe\`**: স্টোরে যেকোনো চেঞ্জ ঘটলেই এটি ফায়ার হয়।
- **\`subscribeWithSelector\`**: নির্দিষ্ট একটি ভেরিয়েবলের পরিবর্তন নিখুঁতভাবে লিসেন করতে এই মিডলওয়্যার ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার লগইন টোকেন পরিবর্তন ট্র্যাক করে লোকালস্টোরেজ আপডেট রাখা। টোকেন পরিবর্তন হলেই সাবস্ক্রিপশন ফাংশনটি স্বয়ংক্রিয়ভাবে সেটি স্টোরেজে লিখে দেয়।

### উত্তম অনুশীলন
মেমোরি লিক এড়াতে লিসেনার ব্যবহারের পর অবশ্যই আনসাবস্ক্রাইব ফাংশন কল করে সিঙ্ক শ্রোতা ডিলিট করুন।

### সাধারণ ভুলসমূহ
\`useEffect\`-এর ভেতর সাবস্ক্রিপশন অন করার পর তা রিটার্ন ব্লকে আনসাবস্ক্রাইব না করা।

### কোড উদাহরণ
\`\`\`typescript



// AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

// ১. subscribeWithSelector মিডলওয়্যার দিয়ে তৈরি স্টোর
exports.useAuthStore = create<AuthState>()(
  subscribeWithSelector((set) => ({
    token: null,
    setToken: (token) => set({ token }),
  }))
);

// ২. শুধুমাত্র টোকেন পরিবর্তনের ওপর সাবস্ক্রিপশন সেটআপ
const unsub = useAuthStore.subscribe(
  (state) => state.token,
  (token) => {
    console.log("টোকেন পরিবর্তন হয়েছে:", token);
    if (token) {
      localStorage.setItem('auth-token', token);
    } else {
      localStorage.removeItem('auth-token');
    }
  },
  { fireImmediately: false }
);
\`\`\``
  },
  {
    id: "state-query-34",
    title: "How do you handle store hydration when using the persist middleware with SSR frameworks like Next.js?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","SSR","Next.js","Hydration","persist"],
    enAnswer: "To handle store hydration in Next.js, check if the store has hydrated using useStore.persist.hasHydrated() or wait for useEffect to mount before rendering persisted values to prevent server/client HTML mismatches.",
    bnAnswer: "Next.js-এ স্টোর হাইড্রেশন হ্যান্ডেল করতে useStore.persist.hasHydrated() দিয়ে হাইড্রেশন চেক করে নিতে হয় অথবা HTML মিসম্যাচ এড়াতে useEffect মাউন্ট হওয়া পর্যন্ত পেজের পারসিস্টেড ডাটা রেন্ডার করা বন্ধ রাখতে হয়।",
    enExplanation: `### Explanation
SSR frameworks render pages on the server first, then hydrate them in the browser:
- The server evaluates the store state to its initial state (e.g., \`items = []\`).
- The client reads the persisted data from \`localStorage\` on load and updates the store (e.g., \`items = ['product-1']\`).
- This causes a **Hydration Mismatch Error** because the initial HTML generated on the server does not match the initial client DOM.

### Real-World Example
In a Next.js header showing shopping cart items. The server renders "0 items", but the client has "3 items" in storage. React throws a console error and forces page layout shifts.

### Best Practice
1. Create a React custom hook \`useHasHydrated\` using \`useEffect\` to track client-side mounting before rendering state.
2. Alternatively, use Zustand's \`.persist.onHydrate\` callback to coordinate load sequences.

### Common Mistakes
Directly rendering persisted variables on the first frame of a Next.js Server Component page, causing visual flickering and hydration bugs.

### Code Example
\`\`\`typescript



// Custom hook to verify client-side hydration
export function usePersistedCartCount() {
  const [hydrated, setHydrated] = useState(false);
  const itemsCount = useCartStore((state) => state.items.length);

  useEffect(() => {
    // Runs only on client after hydration is safe
    setHydrated(true);
  }, []);

  // Return placeholder count (0) on server, actual count on client
  return hydrated ? itemsCount : 0;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Next.js প্রথমে সার্ভার সাইডে HTML জেনারেট করে ব্রাউজারে পাঠায়:
- সার্ভার ইনিশিয়াল স্টেট দিয়ে পেজ রেন্ডার করে (কার্ট খালি)।
- ক্লায়েন্ট লোকালস্টোরেজ থেকে ডাটা নিয়ে স্টোর রি-ফিল করে (কার্ট ফুল)।
- এর ফলে ব্রাউজারে হাইড্রেশন মিসম্যাচ এরর দেখায় কারণ সার্ভারের HTML ও ক্লায়েন্টের DOM মিলেনি।

### বাস্তব-ভিত্তিক উদাহরণ
নেক্সট জেএস হেডারে কার্ট প্রোডাক্ট কাউন্ট: সার্ভার রেন্ডার করছে ০, কিন্তু ইউজারের ব্রাউজার স্টোরেজ থেকে রিড করে দেখাচ্ছে ৩। রিঅ্যাক্ট সাথে সাথে এরর দিবে।

### উত্তম অনুশীলন
একটি কাস্টম হুক তৈরি করুন যা পেজ মাউন্ট হওয়া ট্র্যাক করে। পেজ মাউন্ট হওয়ার পরেই কেবল পারসিস্টেড ডাটা স্ক্রিনে রেন্ডার করার সুযোগ দিন।

### সাধারণ ভুলসমূহ
পেজ মাউন্ট না হওয়া পর্যন্ত সার্ভারের প্লেসহোল্ডার টেক্সট মেইনটেইন না করে সরাসরি র-ডাটা শো করা।

### কোড উদাহরণ
\`\`\`typescript



// ক্লায়েন্ট মাউন্ট ট্র্যাক করার হুক
export function usePersistedCartCount() {
  const [hydrated, setHydrated] = useState(false);
  const itemsCount = useCartStore((state) => state.items.length);

  useEffect(() => {
    // মাউন্ট শেষে এটি রান করবে
    setHydrated(true);
  }, []);

  // সার্ভার মোডে ০ রিটার্ন করবে, মাউন্ট শেষে সঠিক ডাটা রিটার্ন করবে
  return hydrated ? itemsCount : 0;
}
\`\`\``
  },
  {
    id: "state-query-35",
    title: "How do you create custom middleware in Redux Toolkit, and what is the signature of a Redux middleware?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","Middleware","configureStore","Advanced Redux"],
    enAnswer: "A Redux middleware is defined as a curried function with signature: store => next => action => {}. Inside, you can run logic before or after calling next(action), which forwards the action to the reducer or next middleware.",
    bnAnswer: "রেডক্স মিডলওয়্যারের সিগনেচার হলো একটি কারিড ফাংশন: store => next => action => {}। এর ভেতরে next(action) কল করার আগে বা পরে কাস্টম কোড রান করিয়ে অ্যাকশন রিডিউসারে ফরওয়ার্ড করা যায়।",
    enExplanation: `### Explanation
Redux middleware provides a powerful extension layer. The curried signature gives access to three closures:
- **\`store\`**: Exposes \`dispatch\` and \`getState\` to read or trigger new flows.
- **\`next\`**: The next middleware handler in the pipeline. If this is the last middleware, it calls the reducer.
- **\`action\`**: The plain object action currently being dispatched.

### Real-World Example
Creating an analytics tracking middleware. Whenever an action of type \`cart/addItem\` is intercepted, the middleware logs the product details to Google Analytics before passing it to the reducer via \`next(action)\`.

### Best Practice
Always return the result of \`next(action)\` from your middleware to ensure action returns (like promises from thunks) flow back to the dispatch caller.

### Common Mistakes
Forgetting to call \`next(action)\`, which stops the action execution and freezes the application state updates.

### Code Example
\`\`\`typescript


// Define the typed middleware
exports.sessionExpiryMiddleware: Middleware = (store) => (next) => (action: any) => {
  // Check action criteria before reducer runs
  if (action.type === 'auth/checkSession') {
    const { expiryTime } = store.getState().auth;
    if (expiryTime && Date.now() > expiryTime) {
      // Dispatch redirect/logout action
      store.dispatch({ type: 'auth/logout' });
      return; // Block the original action
    }
  }

  // Forward action
  return next(action);
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স মিডলওয়্যার ৩টি নেস্টেড স্কোপের মাধ্যমে কাজ করে:
- **\`store\`**: \`getState\` ও \`dispatch\` মেথড প্রোভাইড করে।
- **\`next\`**: চেইনের পরবর্তী লিসেনার বা রিডিউসারকে ট্রিগার করে।
- **\`action\`**: ফায়ার হওয়া অ্যাকশন অবজেক্ট।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার সেশন ট্র্যাক করার মিডলওয়্যার: পেজে কোনো অ্যাকশন ফায়ার হওয়ার আগে এটি চেক করে সেশন টাইমআউট শেষ হয়েছে কি না। শেষ হলে অ্যাকশন রিডিউসারে না পাঠিয়ে সরাসরি লগআউট ডেসপ্যাচ করে দেয়।

### উত্তম অনুশীলন
মিডলওয়্যারের শেষে অবশ্যই \`next(action)\` রিটার্ন করুন যাতে কলিং কম্পোনেন্ট সঠিক ডাটা রিটার্ন রিসিভ করতে পারে।

### সাধারণ ভুলসমূহ
\`next(action)\` কল না করা, যার ফলে রেডক্স ডাটা ফ্লো লক হয়ে পুরো অ্যাপ্লিকেশন স্তব্ধ হয়ে যায়।

### কোড উদাহরণ
\`\`\`typescript


// সেশন ভ্যালিডিটি চেক করার মিডলওয়্যার
exports.sessionExpiryMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (action.type === 'auth/checkSession') {
    const { expiryTime } = store.getState().auth;
    if (expiryTime && Date.now() > expiryTime) {
      // সেশন মেয়াদ শেষ হলে লগআউট ফায়ার
      store.dispatch({ type: 'auth/logout' });
      return; // মেইন অ্যাকশন ব্লক করা হলো
    }
  }

  // পরবর্তী পদক্ষেপে পাঠানো হলো
  return next(action);
};
\`\`\``
  },
  {
    id: "state-query-36",
    title: "What is the extraReducers builder pattern in RTK, and how is it used to handle actions generated by other slices or thunks?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","extraReducers","builder","createAsyncThunk"],
    enAnswer: "The extraReducers builder pattern defines case reducers that respond to action types defined outside the slice. Using builder.addCase(), you can safely intercept actions generated by async thunks or separate slices without creating circular imports.",
    bnAnswer: "extraReducers বিল্ডার প্যাটার্ন হলো স্লাইসের বাইরে জেনারেট হওয়া অ্যাকশন (যেমন এসিনক্রোনাস থাঙ্ক) হ্যান্ডেল করার মেথড। builder.addCase() দিয়ে সার্কুলার ইম্পোর্ট এরর ছাড়াই বাইরের যেকোনো অ্যাকশনের ওপর বেস করে স্লাইস আপডেট করা যায়।",
    enExplanation: `### Explanation
In Redux Toolkit:
- **\`reducers\`**: Handles internal actions. RTK automatically generates corresponding action creators.
- **\`extraReducers\`**: Handles external actions. It does *not* generate new action creators.
- **Builder Pattern**: Uses a \`builder\` argument providing method APIs:
  - \`builder.addCase(actionCreator, reducer)\`: Matches a specific action creator.
  - \`builder.addMatcher(predicate, reducer)\`: Matches actions based on a conditional test function.
  - \`builder.addDefaultCase(reducer)\`: Fallback case.

This is the standard pattern for handling \`pending\`, \`fulfilled\`, and \`rejected\` lifecycle states of \`createAsyncThunk\`.

### Real-World Example
Suppose you have a \`themeSlice\` and a \`authSlice\`. When the user logs out (\`auth/logout\`), the \`themeSlice\` wants to reset the display theme back to light mode automatically. Since \`logout\` belongs to the auth slice, \`themeSlice\` handles it in \`extraReducers\`.

### Best Practice
Always use the builder callback syntax (\`(builder) => { ... }\`) for \`extraReducers\`. The older object map syntax is deprecated and lacks reliable TypeScript type checking.

### Common Mistakes
Defining thunk lifecycle handlers inside the standard \`reducers\` block, which fails because the thunk is compiled as an external action creator.

### Code Example
\`\`\`typescript

 // External action

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  },
  // Handle actions from outside the slice
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.mode = 'light'; // Reset theme when user logs out
    });
  }
});

export default themeSlice.reducer;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স টুলকিটে দুই ধরণের রিডিউসার ব্লক থাকে:
- **\`reducers\`**: শুধুমাত্র নিজস্ব ইন্টারনাল অ্যাকশন হ্যান্ডেল করে এবং অ্যাকশন ক্রিয়েটর অটো তৈরি করে।
- **\`extraReducers\`**: বাইরে তৈরি হওয়া যেকোনো অ্যাকশন ম্যাপ করে কিন্তু কোনো নতুন অ্যাকশন ক্রিয়েটর তৈরি করে না।

এটি মূলত \`createAsyncThunk\` এর লাইফসাইকেল ট্র্যাকিং করার স্ট্যান্ডার্ড বিল্ডার মেথড।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার লগআউট (\`auth/logout\`) করার পর আপনার কার্ট স্লাইসটি (\`cartSlice\`) চাইবে কার্টের আইটেমগুলো ক্লিয়ার করে দিতে। কার্ট স্লাইসের \`extraReducers\`-এ \`authSlice.logout\` অ্যাকশনটি ম্যাচ করিয়ে এই স্লাইস স্টেট জিরো করে দেওয়া যায়।

### উত্তম অনুশীলন
\`extraReducers\` ডিক্লেয়ার করার জন্য সবসময় বিল্ডার কলব্যাক সিনট্যাক্স ব্যবহার করুন। এটি টাইপস্ক্রিপ্টে নিখুঁত টাইপ সাপোর্ট দেয়।

### সাধারণ ভুলসমূহ
থাঙ্ক বা অন্য স্লাইসের অ্যাকশন ভুলবশত রেগুলার \`reducers\` ব্লকে লেখার চেষ্টা করা, যা কাজ করবে না।

### কোড উদাহরণ
\`\`\`typescript

 // বাইরের অ্যাকশন

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  },
  // বাইরের স্লাইসের অ্যাকশন হ্যান্ডেল করা হচ্ছে
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.mode = 'light'; // লগআউট হলে থিম লাইট মোড করে দিবে
    });
  }
});

export default themeSlice.reducer;
\`\`\``
  },
  {
    id: "state-query-37",
    title: "How does createEntityAdapter work in Redux Toolkit, and how does it normalize state structures?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","createEntityAdapter","Normalization","Performance"],
    enAnswer: "createEntityAdapter is a utility in RTK that manages normalized data structures (ids array and entities dictionary). It provides built-in reducer CRUD helpers (addOne, removeMany, updateOne) to optimize lookup speeds to O(1).",
    bnAnswer: "createEntityAdapter হলো আরটিকে-র একটি ডাটা নরমালাইজার ইউটিলিটি যা ids অ্যারে ও entities ডিকশনারির সাহায্যে ডাটা সাজায়। এটি O(1) সার্চিং স্পিড নিশ্চিত করতে addOne, updateOne এর মতো ক্রুড (CRUD) রিডিউসার প্রোভাইড করে।",
    enExplanation: `### Explanation
Storing database items as lists of nested arrays (e.g., \`[{ id: '1', name: 'A' }]\`) is inefficient because:
- Updating an item requires iterating the entire list (O(N) search complexity).
- Data duplicates can happen across components.

**\`createEntityAdapter\`** normalizes the state structure:
- **\`ids\`**: A flat array containing all unique item IDs (e.g., \`['id1', 'id2']\`).
- **\`entities\`**: A dictionary map lookup table (e.g., \`{ id1: { name: 'A' } }\`).
- **Lookup Performance**: Finding an entity is reduced to O(1) direct dictionary key accesses.

### Real-World Example
In a chat app with thousands of posts. Selecting a post and updating its like count would be slow if you had to loop through a huge array. Normalizing it with \`createEntityAdapter\` lets you update a single item directly using its ID.

### Best Practice
Combine the adapter's selectors (via \`getSelectors\`) with your store state selector references to retrieve list views (\`selectAll\`) or lookup maps (\`selectById\`) cleanly.

### Common Mistakes
Forgetting that items loaded into the adapter must have a unique identifier property. By default, it expects an \`id\` field. If your DB uses \`_id\`, you must specify a custom \`selectId\` function.

### Code Example
\`\`\`typescript


// Book {
  bookId: string;
  title: string;
}

// 1. Initialize the adapter with a custom ID selector
const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
});

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(), // returns { ids: [], entities: {} }
  reducers: {
    // 2. Use adapter's built-in CRUD operations
    bookAdded: booksAdapter.addOne,
    bookUpdated: booksAdapter.updateOne,
    bookRemoved: booksAdapter.removeOne,
  },
});

exports.{ bookAdded, bookUpdated, bookRemoved } = booksSlice.actions;
export default booksSlice.reducer;

// 3. Export selectors
exports.{ selectAll: selectAllBooks, selectById: selectBookById } =
  booksAdapter.getSelectors((state: any) => state.books);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডাটাবেজ আইটেমগুলোকে সিম্পল অ্যারে আকারে সেভ করা স্লো হতে পারে কারণ কোনো আইটেম মডিফাই করতে হলে পুরো অ্যারে লুপ করতে হয় (O(N))।

**\`createEntityAdapter\`** ডাটা নরমালাইজ করে এভাবে সাজায়:
- **\`ids\`**: আইটেমের আইডিগুলোর একটি ফ্ল্যাট অ্যারে।
- **\`entities\`**: ডিকশনারি লুপআপ টেবিল, যেখানে আইডি কী দিয়ে আইটেম এক্সেস করা যায় (O(1))।

### বাস্তব-ভিত্তিক উদাহরণ
একটি চ্যাট রুমে হাজার হাজার মেসেজ আছে। কোনো নির্দিষ্ট মেসেজ এডিট করতে ওল্ড অ্যারে ফিল্টার না করে জাস্ট ওই মেসেজ আইডি দিয়ে Entities ম্যাপ চেক করলেই তাৎক্ষণিকভাবে আপডেট হয়ে যায়।

### উত্তম অনুশীলন
ডাটা নরমালাইজ করার পর এডাপ্টারের বিল্ট-ইন মেথড \`getSelectors\` ব্যবহার করে \`selectAll\` বা \`selectById\` কুয়েরি সিলেক্টর তৈরি করুন।

### সাধারণ ভুলসমূহ
আইটেমে কোনো ইউনিক আইডি বা চাবি না রাখা। ডিফল্টভাবে এটি \`id\` ফিল্ড খোঁজে। যদি ডাটাবেজে \`_id\` বা অন্য নাম থাকে, তবে \`selectId\` কনফিগ করে দিতে হবে।

### কোড উদাহরণ
\`\`\`typescript


// Book {
  bookId: string;
  title: string;
}

// ১. কাস্টম আইডি ম্যাপিং সহ অ্যাডাপ্টার ডিক্লেয়ারেশন
const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
});

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(), // { ids: [], entities: {} } রিটার্ন করবে
  reducers: {
    // ২. অ্যাডাপ্টারের কাস্টম CRUD মেথডস ব্যবহার
    bookAdded: booksAdapter.addOne,
    bookUpdated: booksAdapter.updateOne,
    bookRemoved: booksAdapter.removeOne,
  },
});

exports.{ bookAdded, bookUpdated, bookRemoved } = booksSlice.actions;
export default booksSlice.reducer;

// ৩. অটো-জেনারেটেড সিলেক্টর এক্সপোর্ট
exports.{ selectAll: selectAllBooks, selectById: selectBookById } =
  booksAdapter.getSelectors((state: any) => state.books);
\`\`\``
  },
  {
    id: "state-query-38",
    title: "How do you compose selectors in Redux using createSelector from Reselect to avoid unnecessary recalculations?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux","Reselect","createSelector","Memoization","Performance"],
    enAnswer: "You compose memoized selectors using createSelector() from Reselect (re-exported by RTK). It takes input selectors and a transform function. The transform function only executes if the inputs change, preventing expensive recalculations and unnecessary component re-renders.",
    bnAnswer: "Reselect-এর createSelector() ব্যবহার করে মেমোইজড সিলেক্টর তৈরি করা হয়। এটি কয়েকটি ইনপুট সিলেক্টর ও একটি ট্রান্সফর্ম ফাংশন নেয়। ইনপুটের ভ্যালু পরিবর্তন না হলে ট্রান্সফর্ম ফাংশনটি পুনরায় এক্সিকিউট হয় না, ফলে পারফরম্যান্স বুস্ট হয়।",
    enExplanation: `### Explanation
In Redux, any state change triggers all active \`useSelector\` hooks.
- If you perform computations inside a standard selector (e.g., \`useSelector(state => state.todos.filter(t => t.completed))\`), a new array reference is returned on *every* single action dispatch, even if no todos changed. This forces the component to re-render.
- **\`createSelector\`** implements **Memoization**:
  - It saves the input references and the returned result in memory.
  - If state changes but the selected input references remain unchanged, it returns the cached result instantly, preventing the component from re-rendering.

### Real-World Example
In a task manager dashboard showing only high-priority uncompleted tasks:
- Input 1: select all tasks.
- Input 2: select priority level filter.
- \`createSelector\` merges these. The filtering logic only executes if the tasks list or priority filter variables change. If a user toggles the UI dark mode setting, the task filter is bypassed completely.

### Best Practice
Always create memoized selectors for any state extraction that performs filtering, sorting, mapping, or complex calculations.

### Common Mistakes
Passing unstable selectors (like inline filter operations) directly inside \`useSelector\` instead of wrapping them inside a \`createSelector\` reference.

### Code Example
\`\`\`typescript



// 1. Simple input selectors
const selectTodos = (state: RootState) => state.todos;
const selectVisibilityFilter = (state: RootState) => state.filter;

// 2. Memoized composed selector
exports.selectFilteredTodos = createSelector(
  [selectTodos, selectVisibilityFilter], // Input selectors array
  (todos, filter) => {
    // This transform logic ONLY runs if todos or filter values change!
    console.log("Filtering logic executed");
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্সে যেকোনো ডাটা চেঞ্জ হলে সব একটিভ \`useSelector\` ট্র্রিগার হয়:
- যদি ইনলাইন সিলেক্টরে ডাটা ফিল্টার বা সর্ট করেন (যেমন \`state.todos.filter(...)\`), তবে প্রতি ক্লিকে নতুন মেমোরি রেফারেন্স তৈরি হবে এবং রিঅ্যাক্ট কম্পোনেন্ট রিলোড করতে বাধ্য হবে।
- **\`createSelector\`** মেমোইজেশন মেকানিজম নিয়ে কাজ করে:
  - এটি সিলেক্টরের ইনপুট মেমোরিতে ক্যাশ করে রাখে।
  - যদি মূল ডাটা চেঞ্জ না হয়, তবে এটি আগের রান করা রেজাল্ট রিটার্ন করে দেয়। ফলে রি-রেন্ডার হয় না।

### বাস্তব-ভিত্তিক উদাহরণ
হাজারো টাস্কের মধ্য থেকে শুধুমাত্র "জরুরি" টাস্কগুলো ফিল্টার করা। ইউজার যদি থিম মোড টগল করেন, তবে টাস্ক ফিল্টারিং কোড আর রান করবে না কারণ মেমোরিতে অলরেডি ফিল্টার করা টাস্ক সেভ আছে।

### উত্তম অনুশীলন
যেকোনো এপিআই ডাটা সর্টিং, ফিল্টারিং বা জটিল গাণিতিক কাজের সিলেক্টরে অবশ্যই \`createSelector\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ইনলাইন ফিল্টারিং অপারেশন সরাসরি \`useSelector\` এর ভেতর লিখে রাখা, যা মেমোইজেশনের সুবিধা সম্পূর্ণ নষ্ট করে।

### কোড উদাহরণ
\`\`\`typescript



// ১. বেসিক ইনপুট সিলেক্টর
const selectTodos = (state: RootState) => state.todos;
const selectVisibilityFilter = (state: RootState) => state.filter;

// ২. মেমোইজড কম্পোজড সিলেক্টর তৈরি
exports.selectFilteredTodos = createSelector(
  [selectTodos, selectVisibilityFilter], // ইনপুট সিলেক্টর অ্যারে
  (todos, filter) => {
    // এই লজিকটি শুধুমাত্র তখনই রান করবে যখন todos অথবা filter পরিবর্তিত হবে
    console.log("Filtering logic executed");
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);
\`\`\``
  },
  {
    id: "state-query-39",
    title: "What is RTK Query, and how does it differ from using standard Redux Thunks for data fetching?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Redux Thunks","Data Fetching"],
    enAnswer: "RTK Query is an advanced data fetching and caching capability built on top of Redux Toolkit. It differs from standard Redux Thunks by automating request caching, background refetching, query status tracking, and cache invalidation without requiring manual slice declarations or thunk code.",
    bnAnswer: "RTK Query হলো রেডক্স টুলকিটের ওপরে তৈরি ডাটা ফেচিং ও ক্যাশিং সিস্টেম। এটি সাধারণ Redux Thunks-এর চেয়ে আলাদা কারণ এটি সম্পূর্ণ রিকোয়েস্ট ক্যাশিং, লোডিং/এরর ট্র্যাকিং ও ক্যাশ ইনভ্যালিডেশন প্রসেস অটোমেটিক করে দেয়, যার ফলে কোনো ম্যানুয়াল স্লাইস বা থাঙ্ক কোড লিখতে হয় না।",
    enExplanation: `### Explanation
Traditional data fetching with Redux Thunks requires:
1. Creating a thunk with \`createAsyncThunk\`.
2. Defining a slice with pending/fulfilled/rejected cases.
3. Managing loading, error, and caching flags manually in the reducer.
4. Manually handling cache expiry and refetching inside components.

**RTK Query** replaces all of this:
- It uses a declarative API definitions model.
- You define endpoints inside a single \`createApi\` call.
- It auto-generates custom React hooks (e.g., \`useGetUsersQuery\`) that manage data caching, lifecycle status, polling, and refetching automatically.
- Internally, it manages a dedicated Redux slice and cache lifecycle pipeline for you.

### Real-World Example
In a dashboard fetching posts, users, and settings:
- With Thunks, you write 3 async thunks, 3 slices, and manage loading flags inside 3 files.
- With RTK Query, you define a single API file mapping 3 endpoints. The application UI imports the auto-generated hooks directly, cutting code size by 70%.

### Best Practice
Use RTK Query for all API-bound network states (server state). Keep standard Redux slices strictly reserved for UI layout control and client-only state variables.

### Common Mistakes
Copying data returned by RTK Query hooks into a local Redux slice. This duplicates the state and disables RTK Query's automated cache invalidation benefits.

### Code Example
\`\`\`typescript
// src/services/api.ts


// 1. Declare API with endpoints
exports.pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => \`pokemon/\${name}\`,
    }),
  }),
});

// 2. Export auto-generated hook
exports.{ useGetPokemonByNameQuery } = pokemonApi;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
পুরনো রেডক্স থাঙ্ক দিয়ে ডাটা ফেচ করতে হলে থাঙ্ক ডিক্লেয়ারেশন, স্লাইস তৈরি, পেন্ডিং/ফুলফিল্ড কেস হ্যান্ডেল করাসহ অনেক কোড লিখতে হতো।

**RTK Query** এই পুরো প্রসেসটিকে অনেক সহজ করে দেয়:
- এটি ডিক্লেয়ারেটিভ উপায়ে চলে। একটিমাত্র \`createApi\` মেথডের ভেতর সব এপিআই ডিফাইন করা যায়।
- এটি অটোমেটিক কাস্টম রিঅ্যাক্ট হুক জেনারেট করে (যেমন \`useGetUsersQuery\`) যা ক্যাশ ও লোডিং ট্র্যাকিং নিজে থেকেই হ্যান্ডেল করে।
- ব্যাকগ্রাউন্ডে এটি নিজের জন্য একটি ডেডিকেটেড রেডক্স স্লাইস ম্যানেজ করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ড্যাশবোর্ডে পোস্ট ও ইউজার ডাটা ফেচ করতে:
- থাঙ্ক ব্যবহার করলে ৩টি থাঙ্ক ও ৩টি স্লাইস ফাইল বানাতে হতো।
- আরটিকে কুয়েরি দিয়ে জাস্ট একটি এপিআই ফাইলে ২টি অ্যান্ডপয়েন্ট লিখলেই কাস্টম হুক রেডি হয়ে যায়।

### উত্তম অনুশীলন
এপিআই বা সার্ভার ডাটার জন্য আরটিকে কুয়েরি ব্যবহার করুন আর ক্লায়েন্ট ইউআই লজিকের জন্য রেগুলার স্লাইস ব্যবহার করুন।

### সাধারণ ভুলসমূহ
আরটিকে কুয়েরি হুক থেকে পাওয়া ডাটা আবার ম্যানুয়ালি আরেকটি কার্ট স্লাইসে নিয়ে সেভ করা, যা ডাটা ডুপ্লিকেশন তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript
// src/services/api.ts


// ১. এপিআই ও অ্যান্ডপয়েন্ট ডিক্লেয়ারেশন
exports.pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => \`pokemon/\${name}\`,
    }),
  }),
});

// ২. অটো-জেনারেটেড হুক এক্সপোর্ট
exports.{ useGetPokemonByNameQuery } = pokemonApi;
\`\`\``
  },
  {
    id: "state-query-40",
    title: "How do you define RTK Query endpoints using createApi and fetchBaseQuery?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","createApi","fetchBaseQuery"],
    enAnswer: "You define RTK Query endpoints using createApi(), passing a reducerPath, a baseQuery wrapper constructed with fetchBaseQuery(), and an endpoints definition builder that maps query/mutation scopes to custom URLs.",
    bnAnswer: "RTK Query অ্যান্ডপয়েন্ট ডিফাইন করতে createApi() ব্যবহার করতে হয়, যেখানে reducerPath, fetchBaseQuery() দিয়ে তৈরি baseQuery এবং কুয়েরি বা মিউটেশন ইউআরএল ম্যাপিংয়ের জন্য endpoints বিল্ডার পাস করা হয়।",
    enExplanation: `### Explanation
Defining an API services in RTK Query requires configuring the \`createApi\` hook wrapper:

- **\`reducerPath\`**: The slice state namespace in the Redux store.
- **\`baseQuery\`**: Resolves base requests. \`fetchBaseQuery\` is a wrapper around the browser's \`fetch\` API that supports automatic header injection and response parsing.
- **\`endpoints\`**: A function returning an object. It provides a \`builder\` argument:
  - \`builder.query<ResultType, ArgType>\`: Used for read operations (GET).
  - \`builder.mutation<ResultType, ArgType>\`: Used for write operations (POST/PUT/DELETE).

### Real-World Example
In a user management database, you map dynamic fetch routers using the builder query, passing the user identity to resolve the API route.

### Best Practice
Configure your request headers (e.g. Authorization tokens) globally in the \`fetchBaseQuery\`'s \`prepareHeaders\` option. This keeps individual endpoint configurations clean.

### Common Mistakes
Forgetting to register the generated API reducer and middleware inside the Redux store configuration (\`configureStore\`), which prevents the queries from resolving.

### Code Example
\`\`\`typescript
// src/features/users/usersApi.ts


exports.usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    // Inject auth token globally
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Query (GET request)
    getUsers: builder.query<any[], void>({
      query: () => 'users',
    }),
    // Mutation (POST request)
    addUser: builder.mutation<any, { name: string }>({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

exports.{ useGetUsersQuery, useAddUserMutation } = usersApi;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query-তে এপিআই সেটআপ করতে \`createApi\` মেথডের কনফিগারেশন রুলস:
- **\`reducerPath\`**: রেডক্স স্টোরে এই স্লাইসের ইউনিক নাম।
- **\`baseQuery\`**: রিকোয়েস্টের বেইস ইউআরএল সেটআপ। \`fetchBaseQuery\` হলো ব্রাউজারের ভ্যানিলা ফেচ এপিআই-এর আরটিকে র্যাপার।
- **\`endpoints\`**: এটি একটি ফাংশন যা বিল্ডার আর্গুমেন্ট নিয়ে কাজ করে:
  - \`builder.query\`: ডাটা রিড করার জন্য (GET)।
  - \`builder.mutation\`: ডাটা রাইট করার জন্য (POST/PUT/DELETE)।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ডেটাবেজের জন্য রুট তৈরি করা: কাস্টম হেডার বা টোকেন ম্যানেজ করার জন্য \`prepareHeaders\` ব্যবহার করে এপিআই রিকোয়েস্ট নিরাপদ করা সম্ভব।

### উত্তম অনুশীলন
অথরাইজেশন টোকেন সরাসরি এন্ডপয়েন্টে না পাঠিয়ে \`fetchBaseQuery\` এর \`prepareHeaders\` অপশনে গ্লোবালি হ্যান্ডেল করুন।

### সাধারণ ভুলসমূহ
\`configureStore\` ফাইলে আরটিকে কুয়েরির রিডিউসার এবং এর কাস্টম মিডলওয়্যার যুক্ত করতে ভুলে যাওয়া, যার ফলে এপিআই ফায়ার হয় না।

### কোড উদাহরণ
\`\`\`typescript
// src/features/users/usersApi.ts


exports.usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    // গ্লোবালি অথ টোকেন ইনজেক্ট করা হচ্ছে
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // কোয়েরি (GET রিকোয়েস্ট)
    getUsers: builder.query<any[], void>({
      query: () => 'users',
    }),
    // মিউটেশন (POST রিকোয়েস্ট)
    addUser: builder.mutation<any, { name: string }>({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

exports.{ useGetUsersQuery, useAddUserMutation } = usersApi;
\`\`\``
  },
  {
    id: "state-query-41",
    title: "How do you use auto-generated hooks in RTK Query to fetch data, and how do they manage loading/error states?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","React Hooks","Loading States"],
    enAnswer: "RTK Query generates hooks like use[EndpointName]Query based on endpoints. When called in components, they return destructure-ready variables: data, isLoading (first load), isFetching (subsequent requests), isError, and error.",
    bnAnswer: "RTK Query অ্যান্ডপয়েন্টের ওপর ভিত্তি করে use[EndpointName]Query ফরম্যাটে অটোমেটিক হুক তৈরি করে। কম্পোনেন্টে এগুলো কল করলে data, isLoading, isFetching, isError এবং error ভেরিয়েবল পাওয়া যায়।",
    enExplanation: `### Explanation
RTK Query hooks automate state management for API calls. When you invoke a hook like \`useGetUsersQuery()\`:
- **Automatic Trigger**: The hook automatically dispatches a fetch action on component mount.
- **States Managed**:
  - \`data\`: Holds the parsed response payload.
  - \`isLoading\`: True during the very first request (when no cache exists).
  - \`isFetching\`: True on any network request cycle (useful for background syncs).
  - \`isError\`: True if the query fails, with error logs stored in \`error\`.

### Real-World Example
In a dashboard loading page:
- Show loading state: \`if (isLoading) return <Loader />\`
- Show error state: \`if (isError) return <ErrorView message={error} />\`
- Show data once loaded: map the \`data\` array to table rows.

### Best Practice
Use the query hook arguments to pass parameters to the API (e.g. \`useGetUsersQuery(pageNumber)\`). RTK Query automatically caches the responses by parameter keys, so changing pages fetches new data without code overhead.

### Common Mistakes
Treating \`isFetching\` and \`isLoading\` as the same. Check \`isLoading\` to show initial skeletons, but use \`isFetching\` to show secondary sync status markers.

### Code Example
\`\`\`typescript


export function UsersList() {
  // Call the auto-generated query hook
  const { data: users, isLoading, isFetching, isError, error } = useGetUsersQuery();

  if (isLoading) return <div>First load: Loading users...</div>;
  if (isError) return <div>Failed to load: {JSON.stringify(error)}</div>;

  return (
    <div>
      {isFetching && <div>Background Sync active...</div>}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query হুক এপিআই রিকোয়েস্ট চালানোর সাথে সাথে সমস্ত লোডিং/এরর স্টেট ডাইনামিক্যালি ম্যানেজ করে:
- **অটো ট্রিগার**: কম্পোনেন্ট মাউন্ট হওয়া মাত্র এপিআই কল সচল হয়।
- **স্টেট ডিক্লেয়ারেশন**:
  - \`data\`: এপিআই থেকে প্রাপ্ত ডাটা।
  - \`isLoading\`: ফার্স্ট এপিআই রিকোয়েস্টের জন্য \`true\`।
  - \`isFetching\`: যেকোনো নেটওয়ার্ক রিকোয়েস্ট বা রি-ফেচ রানিং থাকলে \`true\`।
  - \`isError\`: এপিআই ক্র্যাশ করলে \`true\`।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ইউজার পেজ লোড করার সময়:
- \`isLoading\` অন থাকলে একটি স্পিনার রেন্ডার করা হলো।
- এপিআই সাকসেস হলে ডাটা লুপ করে টেবিলে দেখানো হলো।

### উত্তম অনুশীলন
হুক প্যারামিটারে ডাইনামিক আইডি পাস করুন (যেমন \`useGetUsersQuery(page)\`)। আরটিকে কোয়ারি প্যারামিটার অনুযায়ী আলাদা আলাদা ক্যাশ ব্লক সংরক্ষণ করবে।

### সাধারণ ভুলসমূহ
\`isFetching\` ও \`isLoading\` একই মনে করা। প্রথমবার লোডের স্পিনার দেখানোর পর ব্যাকগ্রাউন্ড আপডেটের ক্ষেত্রে \`isLoading\` এর বদলে \`isFetching\` ব্যবহার করা উচিত।

### কোড উদাহরণ
\`\`\`typescript


export function UsersList() {
  // অটো-জেনারেটেড হুক কল করা হলো
  const { data: users, isLoading, isFetching, isError, error } = useGetUsersQuery();

  if (isLoading) return <div>First load: Loading users...</div>;
  if (isError) return <div>Failed to load: {JSON.stringify(error)}</div>;

  return (
    <div>
      {isFetching && <div>Background Sync active...</div>}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-42",
    title: "How does RTK Query caching system work, and how do tags (providesTags, invalidatesTags) manage automatic refetching?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Caching","providesTags","invalidatesTags"],
    enAnswer: "RTK Query caching system uses query parameter keys to store data. providesTags assigns descriptive tags to queries, and invalidatesTags purges these tags during mutations, automatically triggering refetches for active queries.",
    bnAnswer: "RTK Query-র ক্যাশ সিস্টেম কুয়েরি প্যারামিটারের ওপর ভিত্তি করে ডাটা সেভ করে। providesTags দিয়ে কুয়েরির ডাটাতে কাস্টম ট্যাগ অ্যাসাইন করা হয় এবং mutations-এর সময় invalidatesTags দিয়ে সেই ট্যাগ বাতিল করে রি-ফেচ সম্পন্ন করা হয়।",
    enExplanation: `### Explanation
RTK Query manages automatic cache synchronization through a label-based tag system:

1. **Tag Declaration**: Register tags in the API using the \`tagTypes\` array property.
2. **\`providesTags\` (Queries)**:
   - Attaches labels to the data returned by a query.
   - Example: \`providesTags: ['Post']\` or dynamic tags: \`providesTags: (result) => result.map(p => ({ type: 'Post', id: p.id }))\`.
3. **\`invalidatesTags\` (Mutations)**:
   - Declares which labels are invalidated when a mutation succeeds.
   - Once a tag is invalidated, RTK Query immediately forces any active query matching those tags to refetch fresh data from the server.

### Real-World Example
If your book catalog has a GET query \`getBooks\` and a POST mutation \`addBook\`:
- \`getBooks\` provides the tag \`['Books']\`.
- \`addBook\` invalidates the tag \`['Books']\`.
- When you add a new book, the \`addBook\` mutation succeeds, the \`['Books']\` tag is marked stale, and the \`getBooks\` query re-fetches the list, updating the screen dynamically.

### Best Practice
Use dynamic tags containing item IDs for mutations updating single items (e.g. \`[{ type: 'Post', id: postId }]\`). This prevents purging your entire list cache when only one item was updated.

### Common Mistakes
Forgetting to declare the tag types in the API's root \`tagTypes\` array before trying to attach them inside query configurations.

### Code Example
\`\`\`typescript


exports.blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  // 1. Declare all available tag types
  tagTypes: ['Post'],
  
  endpoints: (builder) => ({
    // 2. Query provides tags
    getPosts: builder.query<any[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
          : ['Post'],
    }),
    
    // 3. Mutation invalidates tags
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: \`posts/\${id}\`,
        method: 'DELETE',
      }),
      // Purges only the deleted post cache
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query লেবেল-ভিত্তিক ট্যাগ মেকানিজম ব্যবহার করে অটোমেটিক ক্যাশ সিঙ্ক সচল রাখে:

১. **ট্যাগ ডিক্লেয়ারেশন**: এপিআই-এর রুট ফাইলে \`tagTypes\` অ্যারেতে সব ট্যাগের নাম দিতে হবে।
২. **\`providesTags\` (কুয়েরি)**:
   - কুয়েরি ডাটার সাথে মেমোরি লেবেল যুক্ত করে।
   - যেমন: \`providesTags: ['Post']\`।
৩. **\`invalidatesTags\` (মিউটেশন)**:
   - কোনো ডাটা আপডেট বা ডিলিট সাকসেস হলে নির্দিষ্ট ট্যাগটি বাতিল (invalidate) করে দেয়।
   - এটি ট্রিগার হওয়া মাত্র আরটিকে কুয়েরি ব্যাকগ্রাউন্ডে ওই ট্যাগের সব ভিউ রি-লোডের নির্দেশ দেয়।

### বাস্তব-ভিত্তিক উদাহরণ
বইয়ের তালিকায় নতুন বই যুক্ত করা:
- লিস্ট রিডার এপিআই \`['Books']\` ট্যাগ দিয়ে ক্যাশ হয়ে আছে।
- যখনই অ্যাড বাটন চেপে নতুন বই যুক্ত করা হলো, মিউটেশনটি \`['Books']\` ট্যাগ বাতিল করে দিল। আরটিকে কুয়েরি তৎক্ষণাৎ ব্যাকগ্রাউন্ডে নতুন বই সহ পুরো তালিকা রি-লোড করে ইউজারকে ফ্রেশ ডাটা শো করাল।

### উত্তম অনুশীলন
সিঙ্গেল আইটেম আপডেটের জন্য ডাইনামিক আইডি ট্যাগ (\`{ type: 'Post', id }\`) ব্যবহার করুন যাতে একটি কাজের জন্য পুরো ডাটাবেজ ক্যাশ খালি না হয়।

### সাধারণ ভুলসমূহ
স্লাইসে ট্যাগ ব্যবহার করার আগে মূল এপিআই ফোল্ডারের \`tagTypes\` অ্যারেতে ট্যাগের নামটি ডিক্লেয়ার করতে ভুলে যাওয়া, যা কোন ক্যাশ সিঙ্ক হতে দেয় না।

### কোড উদাহরণ
\`\`\`typescript


exports.blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  // ১. সব ট্যাগের নাম ডিক্লেয়ার করা হলো
  tagTypes: ['Post'],
  
  endpoints: (builder) => ({
    // ২. কুয়েরি ট্যাগ প্রোভাইড করছে
    getPosts: builder.query<any[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
          : ['Post'],
    }),
    
    // ৩. মিউটেশন ট্যাগ বাতিল করছে
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: \`posts/\${id}\`,
        method: 'DELETE',
      }),
      // শুধুমাত্র ডিলিট হওয়া পোস্টের ক্যাশ ডিলিট করবে
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});
\`\`\``
  },
  {
    id: "state-query-43",
    title: "How do you configure dynamic queries that run conditionally using the enabled option in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","enabled option","Conditional Fetching","useQuery"],
    enAnswer: "To run dynamic queries conditionally, pass a boolean value to the enabled property inside useQuery configuration. When enabled is false, the query will remain idle on mount and will not run automatically until the boolean evaluates to true.",
    bnAnswer: "কন্ডিশনাল বা ডাইনামিক কুয়েরি রান করতে useQuery-র কনফিগারেশনে enabled প্রপার্টিতে বুলিয়ান ভ্যালু পাস করতে হয়। enabled এর মান false থাকলে এপিআই কল অফ থাকবে এবং মানটি true হওয়া মাত্র এপিআই কল চালু হবে।",
    enExplanation: `### Explanation
By default, \`useQuery\` executes immediately when the component mounts. You can control this behavior using **\`enabled\`**:
- When \`enabled: false\`, the query starts in the \`status === 'pending'\` state and does not fetch.
- It stays idle until the condition is met and \`enabled\` changes to \`true\`.
- Common Use Cases:
  - **Dependent Queries**: Wait for query A to finish before fetching query B (e.g., waiting for user session details to fetch user posts).
  - **Search Actions**: Prevent query execution when the search input string is empty.
  - **User Interaction**: Wait for a modal or panel to open before loading details.

### Real-World Example
In a user dashboard, you must fetch user details first. Once the details resolve, read the user's \`groupId\` and fetch the group discussions. If \`groupId\` is undefined, calling the group discussions endpoint will return a 400 error. Setting \`enabled: !!user?.groupId\` prevents this error.

### Best Practice
Always convert nullable or undefined variables to strict boolean types (e.g. \`!!userId\` or \`Boolean(userId)\`) when assigning them to the \`enabled\` configuration.

### Common Mistakes
Writing the API call directly inside a React \`if\` condition, which violates React's Rules of Hooks (hooks must be called at the top level).

### Code Example
\`\`\`typescript


export function UserGroupPanel({ userId }: { userId: string | null }) {
  // 1. First query: fetch user details
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(res => res.json()),
    enabled: !!userId, // Only run if userId is not null
  });

  const groupId = user?.groupId;

  // 2. Dependent query: fetch group details (dependent on user.groupId)
  const { data: group, isLoading } = useQuery({
    queryKey: ['group', groupId],
    queryFn: () => fetch(\`/api/groups/\${groupId}\`).then(res => res.json()),
    
    // Dynamic Query Condition: Only run once groupId resolves!
    enabled: !!groupId,
  });

  if (isLoading) return <div>Loading group discussions...</div>;

  return <div>Group: {group?.name}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে \`useQuery\` কম্পোনেন্ট লোড হওয়া মাত্র রান করে। এটি কন্ডিশনালি বন্ধ করতে \`enabled\` ব্যবহার করা হয়:
- যখন \`enabled: false\` থাকে, তখন কুয়েরিটি নিষ্ক্রিয় থাকে এবং কোনো নেটওয়ার্ক কল করে না।
- মানটি \`true\` হওয়া মাত্র এপিআই ফায়ার হয়।
- প্রধান ব্যবহারের ক্ষেত্রসমূহ:
  - **ডিপেন্ডেন্ট কুয়েরি**: ১ম এপিআই ফেচ হওয়ার পর ২য় এপিআই ফেচ শুরু করা।
  - **সার্চ কুয়েরি**: ইউজার ইনপুট বক্সে কিছু টাইপ না করা পর্যন্ত ফেচিং বন্ধ রাখা।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজারের তথ্য থেকে তার গ্রুপ আইডি \`groupId\` নিয়ে গ্রূপ মেম্বার ফেচ করতে হবে। যদি ডাইরেক্ট ফেচ করেন আর শুরুতে আইডি না থাকে তবে এপিআই এরর দিবে। \`enabled: !!groupId\` কনফিগ করলে আইডি পাওয়া গেলেই কেবল ২য় কলটি ফায়ার হবে।

### উত্তম অনুশীলন
\`enabled\` অপশনে পাস করার সময় ভেরিয়েবলগুলোকে ডাবল নট (\`!!\`) বা \`Boolean()\` দিয়ে কড়া বুলিয়ানে কনভার্ট করে দিন।

### সাধারণ ভুলসমূহ
রিঅ্যাক্টের \`if\` কন্ডিশন ব্লকের ভেতর হুক ঢোকাতে চাওয়া যা Rules of Hooks ভঙ্গ করে।

### কোড উদাহরণ
\`\`\`typescript


export function UserGroupPanel({ userId }: { userId: string | null }) {
  // ১. ১ম কুয়েরি: ইউজার ডাটা ফেচ
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(res => res.json()),
    enabled: !!userId, // userId থাকলে রান করবে
  });

  const groupId = user?.groupId;

  // ২. ২য় কুয়েরি: গ্রুপ ডাটা ফেচ (১ম কুয়েরির groupId এর ওপর নির্ভরশীল)
  const { data: group, isLoading } = useQuery({
    queryKey: ['group', groupId],
    queryFn: () => fetch(\`/api/groups/\${groupId}\`).then(res => res.json()),
    
    // কন্ডিশনাল ক্যোয়ারী: groupId আসার পর এটি এক্টিভ হবে
    enabled: !!groupId,
  });

  if (isLoading) return <div>Loading group discussions...</div>;

  return <div>Group: {group?.name}</div>;
}
\`\`\``
  },
  {
    id: "state-query-44",
    title: "What is query prefetching, and how do you implement it to improve perceived user navigation speeds?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Prefetching","queryClient","Performance"],
    enAnswer: "Query prefetching is the process of fetching and caching data before it is rendered on screen. Implement it by calling queryClient.prefetchQuery(), passing the queryKey and queryFn. When the user navigates, the component loads the data instantly from the cache.",
    bnAnswer: "কোয়েরি প্রি-ফেচিং (Query Prefetching) হলো পেজ স্ক্রিনে আসার আগেই ব্যাকগ্রাউন্ডে ডাটা ডাউনলোড ও ক্যাশ করে রাখা। এটি queryClient.prefetchQuery() দিয়ে কি ও ফেচার ফাংশন পাস করে করা হয়, যা নেভিগেশনের সময় ডাটা ইনস্ট্যান্ট লোড হতে সাহায্য করে।",
    enExplanation: `### Explanation
Query prefetching loads data in anticipation of user action, completely eliminating loading states:
- **\`queryClient.prefetchQuery\`**: Resolves the query asynchronously and stores the result in the cache.
- If the query is already cached and not stale, prefetch is skipped automatically.
- When the user triggers the action (e.g., hovering on a link, clicking a page tab), the component renders using the pre-cached data instantly.

### Real-World Example
On an online article listing page:
- When a user hovers their mouse cursor over a blog post title card, a listener triggers \`prefetchQuery(['post', postId], () => fetchPost(postId))\`.
- During the ~300ms hover latency before the click finishes, the article data is downloaded.
- When the click occurs and they navigate, the post page renders instantly with no loading spinner.

### Best Practice
Set a reasonable \`staleTime\` when prefetching, otherwise the component might immediately trigger a background refetch anyway upon mounting, wasting bandwidth.

### Common Mistakes
Using \`useQuery\` for prefetching in root components, which executes the fetch unnecessarily on first mount even if the user never intends to visit the page. Use \`queryClient.prefetchQuery\` inside event listeners instead.

### Code Example
\`\`\`typescript


export function BlogListItem({ post }: { post: any }) {
  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    // Prefetch post details dynamically on hover!
    queryClient.prefetchQuery({
      queryKey: ['post', post.id],
      queryFn: async () => {
        const res = await fetch(\`/api/posts/\${post.id}\`);
        return res.json();
      },
      // Keep it fresh for 1 minute
      staleTime: 1000 * 60,
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} // Trigger prefetch on hover
      className="post-item"
    >
      <h3>{post.title}</h3>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার কোনো বাটনে ক্লিক করার আগেই ব্যাকগ্রাউন্ডে ডাটা প্রাক-ডাউনলোড করে রাখার পদ্ধতিকে প্রি-ফেচিং বলে:
- **\`queryClient.prefetchQuery\`**: এটি এসিনক্রোনাস উপায়ে ডাটা ডাউনলোড করে ক্যাশে সেভ করে রাখে।
- যদি ডাটা ক্যাশে অলরেডি তাজা থাকে, তবে এটি পুনরায় নেটওয়ার্ক রিকোয়েস্ট পাঠায় না।
- ইউজার যখন অবশেষে পেজে ঢুকবেন, তখন কোনো উইটিং টাইম ছাড়াই সরাসরি ডিরেক্ট পেজ রেডি দেখতে পাবেন।

### বাস্তব-ভিত্তিক উদাহরণ
ব্লগ সাইটের কার্ড ও আর্টিকেলের লিস্ট:
- ইউজার মাউস কার্সার কোনো আর্টিকেলের ওপর ধরলেন (hover করলেন)।
- সাথে সাথে মাউস হোভার ইভেন্টে এপিআই প্রি-ফেচ রান হয়ে গেল।
- ইউজার যখন ৩শ মিলিসেকেন্ড পর কার্ডে ক্লিক করলেন, তখন আর কোনো লোডিং স্পিনার ছাড়াই সাথে সাথে পুরো আর্টিকেল পেজ ওপেন হয়ে গেল।

### উত্তম অনুশীলন
প্রি-ফেচিং এপিআই-তে অবশ্যই কাস্টম \`staleTime\` বসিয়ে দিন, নতুবা পেজে ঢোকার পরপরই আবার নতুন করে ব্যাকগ্রাউন্ড রি-ফেচ শুরু হয়ে যাবে যা ব্যান্ডউইথ নষ্ট করে।

### সাধারণ ভুলসমূহ
রুট কম্পোনেন্টে সরাসরি \`useQuery\` দিয়ে প্রি-ফেচ করতে চাওয়া যা সাইটের প্রাথমিক লোডিং স্পিড অনেক কমিয়ে দিতে পারে।

### কোড উদাহরণ
\`\`\`typescript


export function BlogListItem({ post }: { post: any }) {
  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    // হোভার করলেই ব্যাকগ্রাউন্ডে প্রি-ফেচ রিকোয়েস্ট ফায়ার হবে
    queryClient.prefetchQuery({
      queryKey: ['post', post.id],
      queryFn: async () => {
        const res = await fetch(\`/api/posts/\${post.id}\`);
        return res.json();
      },
      staleTime: 1000 * 60, // ১ মিনিট ফ্রেশ রাখবে
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="post-item"
    >
      <h3>{post.title}</h3>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-45",
    title: "How do you implement infinite scrolling using the useInfiniteQuery hook in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","useInfiniteQuery","Infinite Scroll","Pagination"],
    enAnswer: "Implement infinite scrolling using useInfiniteQuery() by defining getNextPageParam to resolve the page parameter for subsequent requests. Trigger data loading by calling fetchNextPage() inside scroll/click listeners.",
    bnAnswer: "ইনফিনিট স্ক্রলিং (Infinite Scroll) সেটআপ করতে useInfiniteQuery() হুকের getNextPageParam অপশনে পরবর্তী পেজের প্যারামিটার রিটার্ন করতে হয় এবং স্ক্রল বা মাউস ক্লিকে fetchNextPage() কল করতে হয়।",
    enExplanation: `### Explanation
\`useInfiniteQuery\` aggregates sequential paginated responses inside a single nested list:
- **\`queryFn\`**: Receives an object containing \`pageParam\`. Use this parameter in your request (e.g. page number or cursor).
- **\`getNextPageParam\`**: A function receiving \`(lastPage, allPages, lastPageParam, allPageParams)\`. Return the next \`pageParam\` value (like \`page + 1\` or cursor ID), or return \`undefined\` to signify there are no more pages.
- **Trigger**: Call \`fetchNextPage()\` to trigger downloading the next block.

### Real-World Example
In a Twitter-like social media feed:
- Scroll listener monitors proximity to the footer.
- When the scroll depth reaches 90%, it triggers \`fetchNextPage()\`.
- Next.js fetches the next 20 posts and appends them to \`data.pages\`, preventing screen re-renders.

### Best Practice
Check if \`isFetchingNextPage\` or \`hasNextPage\` are true before calling \`fetchNextPage()\` inside scroll listeners to prevent triggering multiple network calls simultaneously.

### Common Mistakes
Forgetting that \`data\` returned by \`useInfiniteQuery\` is structured differently than normal queries: it contains \`data.pages\` (array of query page payloads) and \`data.pageParams\`.

### Code Example
\`\`\`typescript


// FeedResponse {
  items: string[];
  nextCursor: number | null;
}

export function InfiniteFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<FeedResponse>({
    queryKey: ['feed'],
    // pageParam is initialized dynamically
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(\`/api/feed?cursor=\${pageParam}\`);
      return res.json();
    },
    initialPageParam: 0,
    // Calculate page parameter dynamically
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  return (
    <div>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.items.map((item) => (
            <div className="feed-item" key={item}>{item}</div>
          ))}
        </React.Fragment>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`useInfiniteQuery\` একাধিক পেজের ডাটা একটিমাত্র অ্যারে স্ট্রাকচারে কম্বাইন করে রাখে:
- **\`queryFn\`**: এটি আর্গুমেন্ট হিসেবে \`pageParam\` রিসিভ করে। এটি এপিআই রিকোয়েস্ট ক্যোয়ারীতে ব্যবহৃত হয়।
- **\`getNextPageParam\`**: এটি কারেন্ট পেজের রেসপন্স থেকে পরবর্তী পেজ আইডেন্টিফায়ার রিটার্ন করে। পরবর্তী পেজ না থাকলে \`undefined\` রিটার্ন করে।
- **ট্রিগার**: পরবর্তী পেজের ডাটা নামাতে \`fetchNextPage()\` মেথড কল করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
ফেসবুক বা ইনস্টাগ্রাম ফিড যেখানে স্ক্রল ডাউন করলে অটো নতুন পোস্ট লোড হতে থাকে:
- ইউজার পেজের শেষে পৌঁছালে স্ক্রল লিসেনার \`fetchNextPage()\` মেথড ফায়ার করে।
- এটি পরবর্তী ২০টি পোস্ট নিয়ে এসে পেজ অ্যারেতে যুক্ত করে দেয়।

### উত্তম অনুশীলন
বারবার রিকোয়েস্ট পাঠানো এড়াতে \`fetchNextPage()\` কল করার আগে চেক করে নিন \`hasNextPage\` সচল আছে কি না এবং অলরেডি কোনো রিকোয়েস্ট রানিং (\`isFetchingNextPage\`) কি না।

### সাধারণ ভুলসমূহ
\`useInfiniteQuery\` থেকে আসা ডাটা সাধারণ ডাটার মতোই এডিট করার চেষ্টা করা। মনে রাখবেন এটি মূলত \`data.pages\` নামের নেস্টেড অ্যারে রিটার্ন করে।

### কোড উদাহরণ
\`\`\`typescript


// FeedResponse {
  items: string[];
  nextCursor: number | null;
}

export function InfiniteFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<FeedResponse>({
    queryKey: ['feed'],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(\`/api/feed?cursor=\${pageParam}\`);
      return res.json();
    },
    initialPageParam: 0,
    // পরবর্তী পেজ প্যারামিটার নির্ধারণ লজিক
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  return (
    <div>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.items.map((item) => (
            <div className="feed-item" key={item}>{item}</div>
          ))}
        </React.Fragment>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-46",
    title: "How do you perform parallel query execution, and when should you use useQueries instead of multiple useQuery calls?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","useQueries","Parallel Queries","Dynamic Queries"],
    enAnswer: "To run multiple fixed queries in parallel, write multiple useQuery calls (which run concurrently). Use useQueries() when you need to fetch a dynamic list of queries in parallel (e.g. fetching details for a dynamic array of IDs) without violating the rules of hooks.",
    bnAnswer: "স্থির সংখ্যক প্যারালাল কুয়েরির জন্য একাধিক useQuery কল করাই যথেষ্ট (এগুলো একসাথে রান করে)। কিন্তু ডাইনামিক সংখ্যার প্যারালাল কুয়েরির ক্ষেত্রে (যেমন: পরিবর্তনশীল আইডির অ্যারে থেকে ডাটা ফেচ করতে) useQueries() ব্যবহার করা আবশ্যক।",
    enExplanation: `### Explanation
TanStack Query is designed to execute queries in parallel by default if they are rendered together:
- **Static Parallel Queries**: Declaring two separate \`useQuery\` calls in the same component body executes them concurrently.
- **Dynamic Parallel Queries**: If you have a dynamic list of IDs (e.g. \`[12, 45, 87]\`) and want to fetch queries for each, writing a loop inside the component block containing \`useQuery\` violates React's Rules of Hooks (hooks cannot be called inside loops or conditions).
- **The Solution**: Use **\`useQueries\`**. It accepts an array of query options objects and returns an array of query results dynamically.

### Real-World Example
In a user messages panel, you fetch details about a list of 5 dynamic chat rooms:
- The list of room IDs changes dynamically.
- Call \`useQueries({ queries: roomIds.map(id => ({ queryKey: ['room', id], queryFn: () => fetchRoom(id) })) })\` to run all 5 fetch requests concurrently without breaking React hooks rules.

### Best Practice
Use \`useQueries\` with custom combine configurations to merge results or formats into a unified state, reducing state tracking variables inside components.

### Common Mistakes
Trying to run a loop mapping \`useQuery\` inside a JSX render return block, which triggers React compiler compilation exceptions.

### Code Example
\`\`\`typescript


export function ChatRoomsPanel({ roomIds }: { roomIds: number[] }) {
  // Execute a dynamic list of queries in parallel safely!
  const queryResults = useQueries({
    queries: roomIds.map((id) => ({
      queryKey: ['room', id],
      queryFn: async () => {
        const res = await fetch(\`/api/rooms/\${id}\`);
        return res.json();
      },
    })),
  });

  const loading = queryResults.some((result) => result.isLoading);

  if (loading) return <div>Syncing chat rooms...</div>;

  return (
    <div>
      {queryResults.map((res, index) => {
        const room = res.data;
        return <div key={roomIds[index]}>Room Name: {room?.name}</div>;
      })}
    </div>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরি ডিফল্টভাবে সমান্তরাল বা প্যারালাল ডাটা ফেচিং সমর্থন করে:
- **স্ট্যাটিক প্যারালাল কুয়েরি**: একটি কম্পোনেন্টে ২টি আলাদা \`useQuery\` কল লিখলে তারা একসাথে সমান্তরালভাবে রান হয়।
- **ডাইনামিক প্যারালাল কুয়েরি**: যদি আপনার একটি ডাইনামিক অ্যারে থাকে (যেমন: \`[1, 2, 3]\`) এবং প্রতিটির জন্য আলাদা এপিআই কল করার প্রয়োজন হয়, তবে লুপের ভেতর রেগুলার হুক ডিক্লেয়ার করা রিঅ্যাক্ট রুলসের পরিপন্থী।
- **সমাধান**: \`useQueries\` হুক ব্যবহার করা। এটি কুয়েরি অপশন অবজেক্টের অ্যারে গ্রহণ করে ও ডাইনামিক ফলাফল প্রোভাইড করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি মেসেঞ্জারে ইউজার ৩টি ফ্রেন্ড আইডিতে ক্লিক করে তাদের সবার প্রোফাইল ডিটেইলস একসাথে লোড করতে চান। \`useQueries\` দিয়ে আইডি লুপ ম্যাপিং পাস করলে ৩টি ফেচ কলই সমান্তরালভাবে সম্পন্ন হবে।

### উত্তম অনুশীলন
প্যারালাল কুয়েরির ক্ষেত্রে রেসপন্স মার্জ করতে চাইলে \`useQueries\` এর কম্বাইন্ড মেথড ব্যবহার করুন যা ট্র্যাকিং ভেরিয়েবল কমাতে সাহায্য করে।

### সাধারণ ভুলসমূহ
JSX রেন্ডার বডির ভেতর অথবা জাভাস্ক্রিপ্ট \`map\` এর ভেতর \`useQuery\` হুক লেখার চেষ্টা করা যা কম্পাইলেশন এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript


export function ChatRoomsPanel({ roomIds }: { roomIds: number[] }) {
  // ডাইনামিক সংখ্যার কুয়েরি একসাথে প্যারালাল রান করা হচ্ছে
  const queryResults = useQueries({
    queries: roomIds.map((id) => ({
      queryKey: ['room', id],
      queryFn: async () => {
        const res = await fetch(\`/api/rooms/\${id}\`);
        return res.json();
      },
    })),
  });

  const loading = queryResults.some((result) => result.isLoading);

  if (loading) return <div>Syncing chat rooms...</div>;

  return (
    <div>
      {queryResults.map((res, index) => {
        const room = res.data;
        return <div key={roomIds[index]}>Room Name: {room?.name}</div>;
      })}
    </div>
  );
}
\`\`\``
  },
  {
    id: "state-query-47",
    title: "How do you implement optimistic updates inside a mutation to update the UI instantly before server response?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Optimistic Updates","useMutation","UX"],
    enAnswer: "Implement optimistic updates by using the onMutate callback in useMutation to cancel outgoing queries, save a snapshot of the current cache, update the cache with the expected value, and use onError/onSettled to roll back or refetch if needed.",
    bnAnswer: "অপ্টিমিস্টিক আপডেট সেটআপ করতে useMutation-এর onMutate কলব্যাকে গিয়ে রানিং কুয়েরি ক্যানসেল করতে হয়, আগের ক্যাশ ডাটা ব্যাকআপ রাখতে হয়, এরপর ক্যাশ মেমোরিতে প্রত্যাশিত ডাটা রাইট করে এবং এরর ফেস করলে onError বা onSettled দিয়ে রোলব্যাক করতে হয়।",
    enExplanation: `### Explanation
Optimistic updates make the UI respond instantly to user writes by assuming success:

**Step-by-step implementation in \`useMutation\`**:
1. **\`onMutate\`**:
   - Cancel outgoing refetches for that query using \`queryClient.cancelQueries\`.
   - Take a snapshot of the current cache state: \`queryClient.getQueryData\`.
   - Update the cache instantly with the optimistic value: \`queryClient.setQueryData\`.
   - Return the snapshot as context.
2. **\`onError\`**:
   - If the request fails, read the snapshot context and roll the cache back to the saved state.
3. **\`onSettled\`**:
   - Always run \`invalidateQueries\` to trigger a background fetch, confirming the client is perfectly synchronized with the server's final database state.

### Real-World Example
Toggling bookmark status on a post:
- Clicking Bookmark turns the icon blue instantly.
- The server request starts.
- If the server succeeds, the blue icon stays active.
- If the server fails (e.g. database down), the icon reverts back to gray, and an error message displays.

### Best Practice
Always return the rollback snapshot from the \`onMutate\` function. React Query passes this returned value directly to \`onError\` as the third parameter (\`context\`).

### Common Mistakes
Forgetting to cancel ongoing queries for that key inside \`onMutate\`, which can overwrite your optimistic updates with stale network response results.

### Code Example
\`\`\`typescript


export function useOptimisticTodoLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todoId: string) => {
      await fetch(\`/api/todos/\${todoId}/like\`, { method: 'POST' });
    },
    // 1. Triggered before mutation starts
    onMutate: async (todoId) => {
      const queryKey = ['todos'];
      
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(queryKey);

      // Optimistically update the cache
      queryClient.setQueryData(queryKey, (old: any) =>
        old.map((t: any) => (t.id === todoId ? { ...t, likes: t.likes + 1 } : t))
      );

      // Return context containing previous value for rollback
      return { previousTodos };
    },
    // 2. Rollback if error occurs
    onError: (err, todoId, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    // 3. Always sync with server at the end
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
সার্ভার কনফার্মেশন পাওয়ার আগেই ইন্টারফেস সাথে সাথে রেন্ডার করার মেথডই হলো অপ্টিমিস্টিক আপডেট:

**\`useMutation\`-এ ধাপে ধাপে কনফিগ**:
১. **\`onMutate\`**:
   - রানিং রি-ফেচ রিকোয়েস্টগুলো ক্যানসেল করতে হবে (\`cancelQueries\`) যাতে কনফ্লিক্ট না হয়।
   - আগের ক্যাশ ডাটার একটি কপি তুলে রাখুন (\`getQueryData\`)।
   - প্রত্যাশিত আপডেট ডাটা মেমোরি ক্যাশে পুশ করুন (\`setQueryData\`)।
   - ব্যাকআপ ডাটাটি ফাংশন থেকে রিটার্ন করুন।
২. **\`onError\`**:
   - এপিআই ক্র্যাশ করলে রিটার্ন করা ব্যাকআপ ডাটা দিয়ে স্টেট রোলব্যাক বা রিভার্ট করুন।
৩. **\`onSettled\`**:
   - কাজ সফল বা ব্যর্থ যাই হোক না কেন, শেষে \`invalidateQueries\` কল করে সার্ভারের সাথে একদম শেষ ডাটা সিঙ্ক করুন।

### বাস্তব-ভিত্তিক উদাহরণ
সামাজিক যোগাযোগ মাধ্যমে লাইক বাটনে প্রেস করা:
- লাইক বাটনে ক্লিক করলে রিকোয়েস্ট ফায়ার হওয়ার আগেই লাভ আইকনটি লাল হয়ে যায়।
- যদি পেমেন্ট বা ডাটাবেজ প্রসেস সফল হয়, আইকন লাল থাকবে।
- এপিআই ব্লক হয়ে গেলে আইকনটি আবার সাথে সাথে কালারলেস হয়ে যাবে।

### উত্তম অনুশীলন
\`onMutate\` ফাংশন থেকে ব্যাকআপ ডাটা অবজেক্ট আকারে রিটার্ন করুন। এটি \`onError\` কলব্যাকের ৩য় প্যারামিটার (\`context\`) হিসেবে পাওয়া যায়।

### সাধারণ ভুলসমূহ
\`onMutate\` এর ভেতর রানিং কুয়েরিগুলো ক্যানসেল করতে ভুলে যাওয়া, যার ফলে ব্যাকগ্রাউন্ড এপিআই রেসপন্স আপনার অপ্টিমিস্টিক ডাটা ওভাররাইট করে ফেলে।

### কোড উদাহরণ
\`\`\`typescript


export function useOptimisticTodoLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todoId: string) => {
      await fetch(\`/api/todos/\${todoId}/like\`, { method: 'POST' });
    },
    // ১. মিউটেশন শুরু হওয়ার আগে ট্রিগার হবে
    onMutate: async (todoId) => {
      const queryKey = ['todos'];
      
      // রানিং কুয়েরি ক্যানসেল করা হচ্ছে
      await queryClient.cancelQueries({ queryKey });

      // পূর্বের ক্যাশ ডাটা স্ন্যাপশট নেওয়া
      const previousTodos = queryClient.getQueryData(queryKey);

      // ক্যাশ ডাটা ইনস্ট্যান্ট আপডেট করা হচ্ছে
      queryClient.setQueryData(queryKey, (old: any) =>
        old.map((t: any) => (t.id === todoId ? { ...t, likes: t.likes + 1 } : t))
      );

      // ব্যাকআপ অবজেক্ট রিটার্ন করা হলো
      return { previousTodos };
    },
    // ২. এরর হলে রোলব্যাক করা হবে
    onError: (err, todoId, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    // ৩. কাজ শেষে ডাটাবেজের সাথে একদম ফাইনাল সিঙ্ক
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
\`\`\``
  },
  {
    id: "state-query-48",
    title: "How does TanStack Query use AbortController to cancel outgoing fetch requests?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","AbortController","Query Cancellation","Performance"],
    enAnswer: "TanStack Query supports cancellation by passing a signal property to the queryFn. If the query is cancelled (due to unmounting or key changes), TanStack Query triggers the AbortController signal, stopping the browser network request.",
    bnAnswer: "টানস্ট্যাক কুয়েরি queryFn এ signal প্রপার্টি পাস করার মাধ্যমে রিকোয়েস্ট ক্যানসেলেশন সাপোর্ট করে। কুয়েরি আনমাউন্ট বা কি চেঞ্জ হলে এটি AbortController ট্রিগার করে ব্রাউজারের আউটগোয়িং এপিআই কল বাতিল করে।",
    enExplanation: `### Explanation
When a user navigates pages rapidly, queries can mount and unmount before resolving.
- **AbortController** is a web standard API allowing you to cancel active HTTP requests.
- **TanStack Query's Integration**:
  - The \`queryFn\` receives a context object containing a \`signal\` of type \`AbortSignal\`.
  - Pass this \`signal\` directly to the request options of \`fetch\` or \`axios\`.
  - If the query becomes inactive (e.g., the user changes tabs or typing triggers another key search), TanStack Query invokes \`controller.abort()\`. The browser cancels the pending HTTP request instantly, saving bandwidth and server execution load.

### Real-World Example
In a search auto-complete bar:
- As the user types "react", 5 network requests are dispatched sequentially.
- Without abort control, all 5 complete, and a race condition can cause older responses to load last, corrupting the search results.
- With \`signal\`, typing a new key cancels the previous search request instantly.

### Best Practice
Always extract the \`signal\` argument from the query function context and feed it directly into your \`fetch\` or Axios config options.

### Common Mistakes
Writing search query functions that ignore the \`signal\` parameter, allowing defunct queries to keep wasting server bandwidth.

### Code Example
\`\`\`typescript


export function SearchResults({ query }: { query: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    
    // 1. Destructure the signal from queryFn context
    queryFn: async ({ signal }) => {
      const res = await fetch(\`/api/search?q=\${query}\`, {
        // 2. Feed the signal to the fetch config options
        signal,
      });
      if (!res.ok) throw new Error('Search failed');
      return res.json();
    },
    enabled: !!query,
  });

  return <div>Results count: {data?.length}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইউজার যখন খুব দ্রুত এক পেজ থেকে অন্য পেজে যান, তখন ডাটা লোড হওয়ার আগেই পেজ ক্লোজ হয়ে যেতে পারে:
- **AbortController** হলো ব্রাউজারের নেটিভ স্ট্যান্ডার্ড এপিআই যা রানিং HTTP রিকোয়েস্ট বাতিল করতে পারে।
- **টানস্ট্যাক কুয়েরি মেকানিজম**:
  - \`queryFn\` তার প্যারামিটারে একটি \`signal\` অবজেক্ট রিসিভ করে।
  - এই \`signal\` মেথডটি ফেচ বা এক্সিওসের (Axios) অপশনে পাস করতে হয়।
  - ইউজার পেজ চেঞ্জ বা নতুন কিছু সার্চ করলে কুয়েরি কি চেঞ্জ হওয়ার সাথে সাথে আগের রানিং নেটওয়ার্ক হিটটি ক্যানসেল হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
সার্চ অটো-কমপ্লিট ইনপুট বক্স:
- ইউজার টাইপ করছেন "Nextjs" - প্রতিটি অক্ষরে ক্যোয়ারী নতুন নেটওয়ার্ক রিকোয়েস্ট পাঠাবে।
- ওল্ড রিকোয়েস্ট ক্যানসেল না করলে আগের ক্যোয়ারী পরে এসে স্ক্রিন ডাটা ওল্ড মডিফায়ারে লক করে দিতে পারে।
- সিগন্যাল ব্যবহারের ফলে শুধুমাত্র কারেন্ট স্পেলিংয়ের এপিআই ওপেন থাকে, আগেরগুলো ডিলিট হয়ে যায়।

### উত্তম অনুশীলন
যেকোনো সার্চ বা ফাস্ট ট্রানজ্যাকশন পেজে ফেচ কল করার সময় প্যারামিটার থেকে \`signal\` ডেসট্রাকচার করে এপিআই রিকোয়েস্টে পাস করুন।

### সাধারণ ভুলসমূহ
\`signal\` কনফিগ না করা, যার কারণে রানিং নেটওয়ার্ক কুয়েরিগুলো ব্যাকগ্রাউন্ডে চলতে থাকে এবং অহেতুক হোস্টিং সার্ভার রিসোর্স অপচয় করে।

### কোড উদাহরণ
\`\`\`typescript


export function SearchResults({ query }: { query: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    
    // ১. queryFn প্যারামিটার থেকে signal আলাদা করা হলো
    queryFn: async ({ signal }) => {
      const res = await fetch(\`/api/search?q=\${query}\`, {
        // ২. ফেচ রিকোয়েস্টে সিগন্যাল পাস করা হলো
        signal,
      });
      if (!res.ok) throw new Error('Search failed');
      return res.json();
    },
    enabled: !!query,
  });

  return <div>Results count: {data?.length}</div>;
}
\`\`\``
  },
  {
    id: "state-query-49",
    title: "How do you perform side effects on mutation success, error, or completion using mutation lifecycle callbacks?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","useMutation","Lifecycle Callbacks","Side Effects"],
    enAnswer: "Perform side effects in useMutation by defining callback hooks: onSuccess triggers on success, onError handles error notifications, and onSettled executes cleanup tasks regardless of the mutation outcome.",
    bnAnswer: "useMutation-এ সাইড-ইফেক্ট বা অতিরিক্ত কোড রান করতে কলব্যাক হুক ব্যবহার করতে হয়: সফল হলে onSuccess, এরর হলে onError এবং কাজ সম্পন্ন হলে (সফল বা ব্যর্থ যাই হোক) onSettled লজিক রান করে।",
    enExplanation: `### Explanation
\`useMutation\` provides lifecycle hooks to handle triggers after actions run:

1. **\`onSuccess(data, variables, context)\`**:
   - Fires when the mutation is successful. Perfect for setting toast notifications or invalidating cache listings.
2. **\`onError(error, variables, context)\`**:
   - Fires if the mutation fails. Perfect for resetting form states or showing popup error alerts.
3. **\`onSettled(data, error, variables, context)\`**:
   - Fires when the mutation is complete (regardless of success or failure). Perfect for resetting loading button states or closing modals.

### Real-World Example
In a form saving a user profile:
- Clicking save starts the mutation.
- On success: show "Profile Saved Successfully" Toast, and invalidate user query.
- On error: show "Failed to save profile: Server offline".
- On settled: enable the save button again.

### Best Practice
Keep your global invalidations (like refetching list keys) inside the hook configuration. Use the \`mutate\` callback parameter overrides for local UI changes (like closing a modal).

### Common Mistakes
Writing redirect code inside the hook configuration when the same mutation is used across different pages that require different redirect actions.

### Code Example
\`\`\`typescript


export function useSaveSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (settings: any) => {
      const res = await fetch('/api/settings', {
        method: 'POST',
        body: JSON.stringify(settings),
      });
      return res.json();
    },
    // Lifecycle hooks
    onSuccess: (data) => {
      console.log('Success payload:', data);
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (error) => {
      console.error('Mutation error:', error.message);
    },
    onSettled: () => {
      // Runs always (success or failure)
      console.log('Mutation settled');
    }
  });
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`useMutation\` অ্যান্ডপয়েন্টে কোনো কাজ সম্পূর্ণ হওয়ার পরবর্তী ধাপগুলো সামলাতে ৩টি হুক দেয়:

১. **\`onSuccess\`**: কাজ সফল হলে কলার ট্রিগার করে। মেসেজ শো করা বা এপিআই রি-লোড করার আদর্শ জায়গা।
২. **\`onError\`**: কাজ ব্যর্থ হলে রান করে। স্ক্রিনে পপ-আপ ওয়ার্নিং দেখাতে কাজে লাগে।
৩. **\`onSettled\`**: সফল বা ব্যর্থ যাই হোক, এটি শেষ মুহূর্তে রান করবেই। লোডিং এনিমেশন স্টপ করা বা মডাল অফ করতে এটি উপযোগী।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার ড্যাশবোর্ডের সেটিং সেভ করা:
- সেভ বাটনে চাপ দিলেন (মিউটেশন রান হলো)।
- সফল হলে: নোটিফিকেশনে দেখাল "সেটিংস সফলভাবে সংরক্ষিত হয়েছে"।
- ব্যর্থ হলে: লাল কালারে এরর মেসেজ শো করল।
- কমপ্লিট হলে: বাটনটি আবার সেভ করার জন্য একটিভ হলো।

### উত্তম অনুশীলন
গ্লোবাল ডাটা সিঙ্ক (যেমন ক্যোয়ারী ইনভ্যালিড করা) অপশনটি হুকের ভেতর ডিফাইন করুন। আর লোকাল কাজ (যেমন রিডাইরেক্ট বা মডাল ক্লোজ) কম্পোনেন্ট ফাইলের \`mutate\` মেথডের ভেতর ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ
একই মিউটেশন দিয়ে ২-৩ জায়গায় ভিন্ন ধরণের রিডাইরেক্ট করাতে চাইলে মেইন হুকের ভেতরে রিডাইরেক্ট লজিক বসানো।

### কোড উদাহরণ
\`\`\`typescript


export function useSaveSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (settings: any) => {
      const res = await fetch('/api/settings', {
        method: 'POST',
        body: JSON.stringify(settings),
      });
      return res.json();
    },
    // লাইফসাইকেল কলব্যাকসমূহ
    onSuccess: (data) => {
      console.log('সাকসেস ডাটা:', data);
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (error) => {
      console.error('এরর ম্যাসেজ:', error.message);
    },
    onSettled: () => {
      // সাকসেস বা ফেইল যাই হোক, এটি রান করবে
      console.log('মিউটেশন সম্পূর্ণ');
    }
  });
}
\`\`\``
  },
  {
    id: "state-query-50",
    title: "How do you test a Zustand store to ensure actions update state correctly without mounting React components?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Unit Testing","Jest","Vanilla JavaScript"],
    enAnswer: "To test a Zustand store, invoke the store actions inside standard Jest/Vitest unit tests directly. Since Zustand stores are vanilla JS hooks, you can read current snapshots using store.getState() and assert state updates without wrapping components.",
    bnAnswer: "Zustand স্টোর টেস্ট করতে কম্পোনেন্ট মাউন্ট ছাড়াই সরাসরি জেস্ট (Jest) বা ভাইটেস্ট (Vitest) ফাইলে অ্যাকশন রান করা যায়। স্টোরের getState() কল করে প্রত্যাশিত ভ্যালু অ্যাসার্ট (assert) করে পরীক্ষা সম্পন্ন করা হয়।",
    enExplanation: `### Explanation
Because Zustand is build on vanilla JavaScript, you do not need React Hooks Testing Library or DOM rendering to test store states:
- **Direct Invocation**: Import the store hook.
- **Read**: Call \`useStore.getState().value\`.
- **Execute**: Call \`useStore.getState().action()\`.
- **Reset**: It is critical to reset store states before each test case run (\`beforeEach\`) because Zustand stores are long-lived memory singletons.

### Real-World Example
In a calculator app store:
- Call \`useStore.getState().add(5)\`.
- Assert that \`useStore.getState().result\` is 5.
- Call \`useStore.getState().reset()\`.

### Best Practice
Write a helper reset function inside your store config if it is used in tests. In your \`beforeEach\` test block, trigger this reset function to ensure test cases do not leak states into each other.

### Common Mistakes
Forgetting to reset state variables between tests, causing subsequent test cases to fail because of residual states left by prior tests.

### Code Example
\`\`\`typescript
// --- store.ts ---


// CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

exports.useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

// --- store.test.ts ---


describe('Counter Zustand Store', () => {
  beforeEach(() => {
    // Reset store state before every test run (Crucial!)
    useCounterStore.getState().reset();
  });

  it('should increment the counter value', () => {
    // 1. Initial assertion
    expect(useCounterStore.getState().count).toBe(0);

    // 2. Trigger action directly
    useCounterStore.getState().increment();

    // 3. Assert updated state
    expect(useCounterStore.getState().count).toBe(1);
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand রিঅ্যাক্টের বাইরের মডিউল হওয়ায় এটি টেস্ট করতে কোনো ডম (DOM) বা রিঅ্যাক্ট মাউন্টিং টুলস লাগে না:
- **ডিরেক্ট কল**: টেস্ট ফাইলে স্টোর মডিউল ইম্পোর্ট করুন।
- **রিড**: \`store.getState().value\` দিয়ে রিড করুন।
- **রাইট**: \`store.getState().action()\` ফায়ার করুন।
- **স্টেট রিসেট**: টেস্ট রানার গ্লোবাল মেমোরি শেয়ার করায় প্রতিটি টেস্ট কেসের শুরুতে \`beforeEach\` ব্লকে স্টোরের ডাটা রিসেট করা আবশ্যক।

### বাস্তব-ভিত্তিক উদাহরণ
একটি ক্যালকুলেটর স্টোর টেস্ট করা:
- সরাসরি \`getState().add(5)\` ফায়ার করলেন।
- জেস্টে চেক করলেন রেজাল্ট \`toBe(5)\` কি না।
- কাজ শেষে মেমোরি রিসেট করলেন।

### উত্তম অনুশীলন
স্টোর ফাইলে একটি কাস্টম \`reset()\` ফাংশন ডিক্লেয়ার করে রাখুন যা সমস্ত ভেরিয়েবলকে ডিফল্ট মানে ফিরিয়ে দেয়। টেস্ট স্যুটের \`beforeEach\` এ এটি কল করুন।

### সাধারণ ভুলসমূহ
টেস্টগুলোর মাঝে স্টেট ক্লিয়ার না করা। এর ফলে আগের টেস্টের ডাটা পরের টেস্টের কন্ডিশনে প্রভাব ফেলে এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript
// --- store.ts ---


// CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

exports.useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

// --- store.test.ts ---


describe('Counter Zustand Store', () => {
  beforeEach(() => {
    // প্রতি টেস্ট স্যুটের আগে গ্লোবাল মেমোরি রিসেট (অতি প্রয়োজনীয়)
    useCounterStore.getState().reset();
  });

  it('should increment the counter value', () => {
    // ১. শুরুতে চেক
    expect(useCounterStore.getState().count).toBe(0);

    // ২. অ্যাকশন ফায়ার
    useCounterStore.getState().increment();

    // ৩. ফাইনাল রেজাল্ট চেক
    expect(useCounterStore.getState().count).toBe(1);
  });
});
\`\`\``
  },
  {
    id: "state-query-51",
    title: "How do you test Redux Toolkit reducers, thunks, and selectors in isolation?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","Testing","Reducers","Thunks","Selectors"],
    enAnswer: "Test Redux Toolkit by verifying reducers as pure functions mapping (state, action) to new state, testing selectors as functions mapping RootState to outputs, and executing thunks by mocking the dispatch pipeline.",
    bnAnswer: "Redux Toolkit টেস্ট করতে রিডিউসারকে পিওর ফাংশন হিসেবে ইনপুট-আউটপুট দিয়ে, সিলেক্টরকে স্টেট পাস করে এবং থাঙ্কগুলোকে মক ডেসপ্যাচ (mock dispatch) চেইন দিয়ে আলাদাভাবে পরীক্ষা করা হয়।",
    enExplanation: `### Explanation
Testing Redux Toolkit components in isolation:

1. **Reducers**:
   - Since reducers are pure functions, call them directly: \`reducer(initialState, action)\`. Assert that the returned object matches the expected updates.
2. **Selectors**:
   - Call the selector function and pass a mock \`RootState\` object. Assert the returned extraction.
3. **Thunks**:
   - Thunks require a mock store dispatch pipeline. You mock the \`dispatch\` and \`getState\` arguments, execute the thunk, and verify that the correct action types (e.g., \`pending\`, \`fulfilled\`) were dispatched in sequence.

### Real-World Example
Testing a shopping cart add action:
- Pass a state containing 0 items and dispatch the \`addItem\` action.
- Assert that the returned state contains 1 item. No React UI code is involved in this test suite.

### Best Practice
Write isolated tests for reducers and selectors first before testing async thunk pipelines. Keep mock state objects minimal, representing only the fields referenced by the test target.

### Common Mistakes
Creating a full Redux Store inside every simple reducer unit test, which adds unnecessary runtime overhead and configuration complexity.

### Code Example
\`\`\`typescript
// --- reducer.test.ts ---
import counterReducer, { increment } from './counterSlice';

describe('Counter Reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle increment action', () => {
    const prevState = { value: 10 };
    // Call reducer directly as a pure function!
    const nextState = counterReducer(prevState, increment());
    expect(nextState).toEqual({ value: 11 });
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Redux Toolkit-এর পার্টগুলো আলাদাভাবে টেস্ট করার মেথড:

১. **রিডিউসার (Reducers)**:
   - যেহেতু এটি পিওর ফাংশন, তাই সরাসরি টেস্টে \`reducer(state, action)\` কল করুন। চেক করুন রিটার্ন করা অবজেক্টটি সঠিক কি না।
২. **সিলেক্টর (Selectors)**:
   - সিলেক্টর মেথডে একটি ডামি \`RootState\` অবজেক্ট প্যারামিটার হিসেবে পাঠিয়ে দিন এবং আউটপুট মিলছে কি না পরীক্ষা করুন।
৩. **থাঙ্ক (Thunks)**:
   - থাঙ্কের জন্য ডেসপ্যাচ ফাংশন মক (\`jest.fn()\`) করতে হয় এবং অ্যাকশনের সিকোয়েন্স চেক করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ
শপিং কার্টে প্রোডাক্ট অ্যাড করার রিডিউসার টেস্ট করা:
- ডামি স্টেট ফাইলে কার্ট এম্পটি রাখলেন এবং \`addItem\` অ্যাকশন রান করলেন।
- চেক করে দেখলেন কার্ট লেন্থ ১ হয়েছে কি না।

### উত্তম অনুশীলন
রিডিউসার টেস্ট করার জন্য অহেতুক সম্পূর্ণ রেডক্স স্টোর প্রোভাইডার সেটআপ করবেন না। সরাসরি রিডিউসার ফাংশন কল দিয়ে পরীক্ষা করুন।

### সাধারণ ভুলসমূহ
প্রতিটি ইউনিটে থাঙ্ক ও রিডিউসার মিক্স করে টেস্ট করা, যা এররের মূল কারণ চিহ্নিত করতে বাঁধা দেয়।

### কোড উদাহরণ
\`\`\`typescript
// --- reducer.test.ts ---
import counterReducer, { increment } from './counterSlice';

describe('Counter Reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle increment action', () => {
    const prevState = { value: 10 };
    // রিডিউসারকে সরাসরি পিওর ফাংশন হিসেবে কল করা হলো
    const nextState = counterReducer(prevState, increment());
    expect(nextState).toEqual({ value: 11 });
  });
});
\`\`\``
  },
  {
    id: "state-query-52",
    title: "How do you mock and test RTK Query endpoints using Mock Service Worker (MSW)?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","MSW","API Testing","Integration Testing"],
    enAnswer: "To test RTK Query endpoints, configure Mock Service Worker (MSW) to intercept HTTP requests in test suites. Define handlers to return mock mock JSON, wrap tests in a Redux store containing the API, and dispatch queries to assert outcomes.",
    bnAnswer: "RTK Query অ্যান্ডপয়েন্ট টেস্ট করতে Mock Service Worker (MSW) দিয়ে নেটওয়ার্ক রিকোয়েস্ট ইন্টারসেপ্ট করতে হয়। কাস্টম হ্যান্ডলার দিয়ে মক ডাটা রিটার্ন করে, টেস্ট স্টোরে এপিআই রেজিস্টার করে ডিসপ্যাচ অ্যাসার্ট করতে হয়।",
    enExplanation: `### Explanation
RTK Query runs network queries. To test them safely without hitting a live production database:
- **Mock Service Worker (MSW)**: Intercepts network calls at the browser or Node process level using service workers.
- **Workflow**:
  1. Define MSW API request handlers (e.g., \`http.get('/api/users', () => HttpResponse.json(mockUsers))\`).
  2. Setup an MSW test server to intercept calls during tests.
  3. Initialize a temporary Redux store in the test setup containing the RTK Query API reducer and middleware.
  4. Dispatch the API query action, wait for the response, and assert the resolved payload matches MSW's JSON.

### Real-World Example
Testing whether \`useGetUsersQuery\` stores and parses user details correctly. MSW catches the request to \`/api/users\` and yields 2 dummy users. The test asserts that the store contains the same 2 users upon resolving.

### Best Practice
Always clear the RTK Query cache registry using \`store.dispatch(api.util.resetApiState())\` between tests to avoid cache leaks across separate test runs.

### Common Mistakes
Using standard mock fetch overrides (like \`jest.spyOn(global, 'fetch')\`) which fail to mock the complex caching, headers, and retry pipelines executed inside RTK Query.

### Code Example
\`\`\`typescript
// src/features/users/usersApi.test.ts





// 1. Setup MSW handlers
const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: '1', name: 'Mitu' }]);
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('RTK Query Users API', () => {
  it('should fetch users list successfully', async () => {
    // 2. Create temporary store with API reducer & middleware
    const store = configureStore({
      reducer: { [usersApi.reducerPath]: usersApi.reducer },
      middleware: (gdm) => gdm().concat(usersApi.middleware),
    });

    // 3. Dispatch the query
    const result = await store.dispatch(usersApi.endpoints.getUsers.initiate());

    // 4. Assert response matches MSW mock payload
    expect(result.data).toEqual([{ id: '1', name: 'Mitu' }]);
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
লাইভ ডাটাবেজ হিট না করে নিরাপদভাবে এপিআই ফেচিং টেস্ট করতে **MSW** ব্যবহার করা হয়:
- **Mock Service Worker**: এটি ব্রাউজার বা নোড প্রসেসের নেটওয়ার্ক কল হাইজ্যাক বা ইন্টারসেপ্ট করে।
- **টেস্ট ফ্লো**:
  ১. MSW হ্যান্ডলার সেট করে মক এপিআই গেটওয়ে তৈরি করুন (যেমন: \`http.get('/api/users', ...)\`)।
  ২. টেস্ট রান করার পূর্বে MSW সার্ভার স্টার্ট করুন।
  ৩. টেস্ট ফাইলে আরটিকে কুয়েরির রিডিউসার সমৃদ্ধ ডামি রেডক্স স্টোর রেডি করুন।
  ৪. কুয়েরি ট্রিগার করে চেক করুন ডাটা MSW-র রিটার্ন করা মক ডাটার সাথে মিলছে কি না।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার এপিআই কাজ করছে কি না তা নিশ্চিত করা। MSW রিকোয়েস্ট ইন্টারসেপ্ট করে ডামি রেসপন্স রিটার্ন করে যার ফলে ক্যাশিং ও ডেটাবেজ লজিক নিখুঁত টেস্ট করা যায়।

### উত্তম অনুশীলন
প্রতিটি টেস্ট কেসের শেষে \`store.dispatch(api.util.resetApiState())\` কল করে কুয়েরির মেমোরি ক্যাশ রিসেট করে নিন।

### সাধারণ ভুলসমূহ
সাধারণ \`fetch\` মকিং টুলস ব্যবহার করা যা আরটিকে কুয়েরির জটিল রি-ট্রাই ও ক্যাশ মেকানিজম হ্যান্ডেল করতে পারে না।

### কোড উদাহরণ
\`\`\`typescript
// src/features/users/usersApi.test.ts





// ১. MSW এপিআই হ্যান্ডলার সেটআপ
const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: '1', name: 'Mitu' }]);
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('RTK Query Users API', () => {
  it('should fetch users list successfully', async () => {
    // ২. ডামি স্টোর তৈরি
    const store = configureStore({
      reducer: { [usersApi.reducerPath]: usersApi.reducer },
      middleware: (gdm) => gdm().concat(usersApi.middleware),
    });

    // ৩. কুয়েরি ডেসপ্যাচ
    const result = await store.dispatch(usersApi.endpoints.getUsers.initiate());

    // ৪. রেজাল্ট ম্যাচিং চেক
    expect(result.data).toEqual([{ id: '1', name: 'Mitu' }]);
  });
});
\`\`\``
  },
  {
    id: "state-query-53",
    title: "How do you unit test custom React hooks that utilize useQuery or useMutation using React Hooks Testing Library?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Testing Hooks","React Hooks Testing Library","Vitest"],
    enAnswer: "Test custom hooks utilizing useQuery by calling renderHook() inside tests, wrapping the hook wrapper inside the QueryClientProvider component context, and using await waitFor() to resolve async fetch states.",
    bnAnswer: "useQuery ব্যবহার করা কাস্টম হুক টেস্ট করতে renderHook() ব্যবহার করে wrapper অপশনে QueryClientProvider পাস করতে হয় এবং কুয়েরি ডাটা প্রসেস হওয়া পর্যন্ত await waitFor() দিয়ে অপেক্ষা করতে হয়।",
    enExplanation: `### Explanation
Testing hooks containing TanStack Query requires wrapping them in a query client context provider:
- **\`renderHook(callback, options)\`**: Evaluates the hook in isolation.
- **\`wrapper\` Option**: Pass a React component that wraps the hook in a \`QueryClientProvider\` containing a fresh \`QueryClient\` instance for each test.
- **Asynchronous assertions**: Since data fetching is async, call \`waitFor(() => expect(result.current.isSuccess).toBe(true))\` before asserting the returned data.

### Real-World Example
Testing a custom hook \`useUserData(id)\`:
- Create a new \`QueryClient\` for the test.
- Run \`renderHook(() => useUserData('1'), { wrapper })\`.
- Wait for the hook's \`isSuccess\` to resolve, then assert that the returned user object has the expected fields.

### Best Practice
Always instantiate a *new* \`QueryClient\` inside the \`wrapper\` function for every single test case. Sharing a global client instance across tests leads to state contamination and caching interference.

### Common Mistakes
Forgetting to wrap the test hook inside the \`QueryClientProvider\` wrapper, which causes the test to fail immediately with a "No QueryClient set" console exception.

### Code Example
\`\`\`typescript
// useUser.test.tsx


 // Custom hook

describe('useUser Hook', () => {
  it('should fetch user details successfully', async () => {
    // 1. Create a fresh query client for this test
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }, // disable retries to speed up tests
    });

    // 2. Set the wrapper provider option
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    // 3. Render the hook
    const { result } = renderHook(() => useUser('12'), { wrapper });

    // 4. Wait for async fetch to resolve
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // 5. Assert hook returned state values
    expect(result.current.user.name).toBe('Shakib');
  });
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরি ব্যবহার করা কাস্টম হুক সরাসরি টেস্ট করতে গেলে প্রোভাইডার না পাওয়ায় ক্র্যাশ করবে। তাই টেস্ট করার নিয়ম:
- **\`renderHook\`**: হুকটি আলাদাভাবে রান করায়।
- **\`wrapper\`**: প্রোভাইডার সেট করার অপশন। এতে প্রতিটি টেস্ট কেসের জন্য নতুন \`QueryClientProvider\` ম্যাপ করা হয়।
- **\`waitFor\`**: এপিআই ফেচ এসিনক্রোনাস হওয়ায় ডাটা রিসিভ করা নিশ্চিত করতে কিছুক্ষণ অপেক্ষা করে।

### বাস্তব-ভিত্তিক উদাহরণ
কাস্টম হুক \`useUser(id)\` টেস্ট করা:
- একটি নতুন \`QueryClient\` তৈরি করা হলো।
- হুকটি প্রোভাইডারসহ রান করা হলো।
- ডাটা লোড হওয়া পর্যন্ত ওয়েট করে চেক করা হলো ইউজারের নেম সঠিক আছে কি না।

### উত্তম অনুশীলন
প্রতিটি আলাদা টেস্ট কেসের শুরুতে নতুন \`QueryClient\` অবজেক্ট ডিক্লেয়ার করুন যাতে আগের টেস্টের ক্যাশ ডাটা পরের টেস্টে না ঢুকে পড়ে।

### সাধারণ ভুলসমূহ
\`QueryClientProvider\` ছাড়া হুকটি টেস্ট রান করানো, যা সরাসরি "No QueryClient set" এরর থ্রো করবে।

### কোড উদাহরণ
\`\`\`typescript
// useUser.test.tsx


 // কাস্টম হুক

describe('useUser Hook', () => {
  it('should fetch user details successfully', async () => {
    // ১. টেস্টের জন্য নতুন ফ্রেশ কুয়েরি ক্লায়েন্ট
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }, // টেস্ট দ্রুত করতে রি-ট্রাই অফ করা হলো
    });

    // ২. কুয়েরি প্রোভাইডার র‍্যাপার তৈরি
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    // ৩. হুক রেন্ডার
    const { result } = renderHook(() => useUser('12'), { wrapper });

    // ৪. এসিনক্রোনাস রেজাল্টের জন্য অপেক্ষা
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // ৫. ডাটা ম্যাচিং চেক
    expect(result.current.user.name).toBe('Shakib');
  });
});
\`\`\``
  },
  {
    id: "state-query-54",
    title: "How do you configure global error boundaries with TanStack Query to catch fetch failures?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Error Boundary","useQuery","React Integration"],
    enAnswer: "Configure Error Boundaries with TanStack Query by setting the throwOnError option to true in useQuery configurations or global QueryClient defaults. This causes queries to throw errors during render, triggering the React Error Boundary wrapper.",
    bnAnswer: "টানস্ট্যাক কুয়েরিতে এরর বাউন্ডারি সেট করতে useQuery-র throwOnError কনফিগারেশনটি true সেট করতে হয়। এর ফলে এপিআই এরর হলে তা সরাসরি রিঅ্যাক্ট এরর বাউন্ডারির মাধ্যমে ধরা পড়ে।",
    enExplanation: `### Explanation
React Error Boundaries catch JavaScript errors in their child component tree during rendering. By default:
- TanStack Query catches errors inside \`queryFn\` and stores them in the hook's \`error\` state, keeping the UI running.
- To delegate error handling to a parent React **Error Boundary**:
  - Configure \`throwOnError: true\` inside the query options (or globally in \`QueryClient\` defaults).
  - When the request fails, TanStack Query throws the error during the React render phase, letting the parent Error Boundary render fallback screens.

### Real-World Example
If your dashboard components connect to multiple microservices. If the news panel API fails, instead of showing individual error boxes, setting \`throwOnError: true\` triggers a parent Error Boundary, rendering a clean "Widget Offline" card.

### Best Practice
Configure \`throwOnError\` globally inside the \`QueryClient\` default options, but override it to \`false\` for non-critical query widgets (like notification bars) where you want inline error messages instead of crash overlays.

### Common Mistakes
Forgetting that Error Boundaries do not catch async errors outside the render cycle by default. You must configure \`throwOnError: true\` for TanStack Query to bubble up errors into the React render sequence.

### Code Example
\`\`\`typescript


// 1. Enable throwOnError globally in default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true, // Bubbles error up to React Error Boundary
    },
  },
});

// Component that throws error if API fails
function ProfileWidget() {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await fetch('/api/profile');
      if (!res.ok) throw new Error('Profile Service Down');
      return res.json();
    }
  });

  return <div>Welcome, {data?.name}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রিঅ্যাক্ট এরর বাউন্ডারি কম্পোনেন্ট ট্রির ভেতরের ক্র্যাশগুলো ডিটেক্ট করে ব্যাকআপ ইউআই শো করে:
- ডিফল্টভাবে টানস্ট্যাক কুয়েরি এপিআই এররগুলো নিজের স্ক্রিনেই আটকে রাখে এবং গ্লোবাল এরর উইন্ডো চালু করে না।
- রিঅ্যাক্টের **Error Boundary**-তে এটি পাঠাতে চাইলে:
  - কুয়েরি অপশনে \`throwOnError: true\` করে দিতে হবে।
  - এপিআই ক্র্যাশ করলে এটি রেন্ডারিং টাইমে এরর থ্রো করবে এবং প্যারেন্ট এরর বাউন্ডারি অ্যাক্টিভ হয়ে যাবে।

### বাস্তব-ভিত্তিক উদাহরণ
ড্যাশবোর্ডের নিউজ প্যানেল এপিআই ক্র্যাশ করল। আপনি চান না যে পেজটি ভেঙে যাক বা ব্ল্যাঙ্ক দেখাক। \`throwOnError: true\` সেট করা থাকলে নিউজ এরিয়াটি এরর বাউন্ডারির মাধ্যমে র্যাপ করা একটি ডেকোরেটিভ "সার্ভিস ডাউন" মেসেজ কার্ডে কনভার্ট হয়ে যাবে।

### উত্তম অনুশীলন
কুয়েরি ক্লায়েন্ট কনফিগার করার সময় গ্লোবালি \`throwOnError: true\` দিয়ে রাখতে পারেন এবং ছোটোখাটো কুয়েরির ক্ষেত্রে স্থানীয়ভাবে তা \`false\` করে ওভাররাইড করতে পারেন।

### সাধারণ ভুলসমূহ
\`throwOnError: true\` কনফিগ না করে এরর বাউন্ডারি কুয়েরি এরর ক্যাচ করবে এমন আশা করা।

### কোড উদাহরণ
\`\`\`typescript


// ১. গ্লোবাল কুয়েরি ক্লায়েন্টে throwOnError সক্রিয় করা
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true, // রিঅ্যাক্ট এরর বাউন্ডারিতে এরর পুশ করবে
    },
  },
});

// এরর বাউন্ডারির আওতাভুক্ত কম্পোনেন্ট
function ProfileWidget() {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await fetch('/api/profile');
      if (!res.ok) throw new Error('Profile Service Down');
      return res.json();
    }
  });

  return <div>Welcome, {data?.name}</div>;
}
\`\`\``
  },
  {
    id: "state-query-55",
    title: "How do you structure a store with dependent states, and how do you access other actions from within an action in Zustand?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Store Structure","Dependent State","Actions"],
    enAnswer: "To handle dependent state and access other actions inside a Zustand store, use the get() parameter provided in the store creator. Invoke get().property to read variables, or get().actionName() to trigger other actions directly.",
    bnAnswer: "Zustand স্টোরে ডিপেন্ডেন্ট স্টেট হ্যান্ডেল করতে এবং অন্য অ্যাকশন অ্যাক্সেস করতে স্টোর ক্রিয়েটর ফাংশনে থাকা get() মেথড ব্যবহার করতে হয়। এর মাধ্যমে get().actionName() কল করে সরাসরি অন্য অ্যাকশন চালানো যায়।",
    enExplanation: `### Explanation
Zustand's state creator receives \`(set, get)\` arguments.
- **Accessing State**: Calling \`get().value\` returns the current store value.
- **Triggering Actions**: Calling \`get().otherAction()\` triggers helper actions dynamically.
- **Handling Dependent updates**:
  - Perform calculations or queries inside an action using \`get()\`.
  - Pass the calculated results to \`set()\` to update dependent fields.

This eliminates writing redundant dispatch hooks inside components.

### Real-World Example
In a calculation store where changes to \`subTotal\` automatically update the \`totalPrice\` with taxes:
- When calling \`addItem\`, the action appends the item to the list.
- It then calls \`get().calculateTotals()\` to compute the new subtotal, tax, and final total values.

### Best Practice
Keep state transitions unified. If an action has side effects or changes other properties, coordinate the updates using \`get()\` and \`set()\` inside the action function directly.

### Common Mistakes
Trying to call hooks inside actions to get state. Actions are plain JS and do not run inside React contexts. Use the \`get()\` parameter instead.

### Code Example
\`\`\`typescript


// InvoiceStore {
  items: { price: number }[];
  taxRate: number;
  subTotal: number;
  total: number;
  addItem: (price: number) => void;
  recalculate: () => void;
}

exports.useInvoiceStore = create<InvoiceStore>((set, get) => ({
  items: [],
  taxRate: 0.15, // 15% tax
  subTotal: 0,
  total: 0,

  addItem: (price) => {
    // 1. Add item
    set((state) => ({ items: [...state.items, { price }] }));
    
    // 2. Access and trigger another action in the store using get()
    get().recalculate();
  },

  recalculate: () => {
    // 3. Read current state values using get()
    const { items, taxRate } = get();
    const subTotal = items.reduce((sum, item) => sum + item.price, 0);
    const total = subTotal + (subTotal * taxRate);

    set({ subTotal, total });
  }
}));
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand স্টোরে আগের স্টেটের ওপর ভিত্তি করে হিসাব নিকাশ করতে \`get()\` প্যারামিটার দরকার হয়:
- **স্টেট রিড**: \`get().value\` দিয়ে বর্তমান ডাটা নেওয়া হয়।
- **অন্য অ্যাকশন কল**: \`get().actionName()\` দিয়ে একই স্টোরের অন্য কাজ চালানো যায়।
- এর ফলে কম্পোনেন্ট ফাইলের ভেতর অতিরিক্ত লজিক লেখার কোনো প্রয়োজন থাকে না।

### বাস্তব-ভিত্তিক উদাহরণ
একটি শপিং কার্টে আইটেম যুক্ত করার পর ট্যাক্স হিসাব করা:
- ইউজার প্রডাক্ট এড করলেন (\`addItem\`)।
- স্টোর তার আইটেম আপডেট করার পর \`get().recalculate()\` কল করল।
- \`recalculate\` মেথডটি কার্টের মোট প্রাইস ও ট্যাক্স হিসাব করে সেট করে দিল।

### উত্তম অনুশীলন
স্টেটের ডেটা ক্যালকুলেশন এবং ডিপেন্ডেন্ট আপডেট সবসময় স্টোরের ভেতরেই প্রসেস করুন। কম্পোনেন্টকে শুধু মেইন অ্যাকশন ট্রিগার করার অনুমতি দিন।

### সাধারণ ভুলসমূহ
অ্যাকশন ফাংশনের ভেতর রিঅ্যাক্ট হুক ব্যবহার করে ভ্যালু পাওয়ার চেষ্টা করা যা টাইপ এরর তৈরি করে।

### কোড উদাহরণ
\`\`\`typescript


// InvoiceStore {
  items: { price: number }[];
  taxRate: number;
  subTotal: number;
  total: number;
  addItem: (price: number) => void;
  recalculate: () => void;
}

exports.useInvoiceStore = create<InvoiceStore>((set, get) => ({
  items: [],
  taxRate: 0.15, // ১৫% ট্যাক্স
  subTotal: 0,
  total: 0,

  addItem: (price) => {
    // ১. আইটেম যুক্ত করা
    set((state) => ({ items: [...state.items, { price }] }));
    
    // ২. get() ব্যবহার করে অন্য অ্যাকশন ট্রিগার করা হচ্ছে
    get().recalculate();
  },

  recalculate: () => {
    // ৩. get() ব্যবহার করে কারেন্ট ডাটা রিড করা হচ্ছে
    const { items, taxRate } = get();
    const subTotal = items.reduce((sum, item) => sum + item.price, 0);
    const total = subTotal + (subTotal * taxRate);

    set({ subTotal, total });
  }
}));
\`\`\``
  },
  {
    id: "state-query-56",
    title: "How do you customize standard middlewares in Redux Toolkit, such as disabling serializability checks?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","configureStore","Middleware","serializableCheck"],
    enAnswer: "To customize standard middlewares, pass a callback function to the middleware property in configureStore. Invoke getDefaultMiddleware() and configure custom settings (like serializableCheck: false) inside its options object.",
    bnAnswer: "স্ট্যান্ডার্ড মিডলওয়্যার কাস্টমাইজ করতে configureStore-এর middleware প্রপার্টিতে একটি কলব্যাক পাস করতে হয়। এর ভেতর getDefaultMiddleware() কল করে অপশনে serializableCheck: false সেট করে কাস্টমাইজ করা যায়।",
    enExplanation: `### Explanation
Redux Toolkit's \`configureStore\` automatically sets up default middleware. To override their behaviors without deleting them:
- Pass a function as the \`middleware\` property: \`middleware: (getDefaultMiddleware) => ...\`
- **\`getDefaultMiddleware\` Options**:
  - \`serializableCheck\`: Disables validation check warning console errors if you must store objects like \`Date\` or \`File\` directly in state.
  - \`immutableCheck\`: Customizes mutation checks settings.
  - \`thunk\`: Customizes thunk extra arguments configurations.

### Real-World Example
If you use Firebase or Mongoose schemas, their returned objects contain non-serializable function methods. The Redux developer console will flood with warnings. Setting \`serializableCheck: false\` silences these warnings.

### Best Practice
Avoid disabling the serializability check globally unless absolutely required. Instead, configure it to ignore specific action types or paths (like a login date stamp path) to keep your store healthy.

### Common Mistakes
Replacing the middleware array with a custom array directly, e.g. \`middleware: [myLogger]\`. This disables all default middlewares including Thunk, crashing async tasks.

### Code Example
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configure the serializability check middleware
      serializableCheck: {
        // Ignore specific actions
        ignoredActions: ['auth/setLoginTime'],
        // Ignore specific paths in the state tree
        ignoredPaths: ['auth.loginTime'],
      },
      // Disable immutable checks in production to speed up
      immutableCheck: process.env.NODE_ENV !== 'production',
    }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Redux Toolkit-এর \`configureStore\`-এ বাই-ডিফল্ট কিছু মিডলওয়্যার সেট থাকে। এগুলো ডিলিট না করে কাস্টমাইজ করার নিয়ম:
- \`middleware\` প্রপার্টিতে কলব্যাক পাস করুন: \`middleware: (getDefaultMiddleware) => ...\`
- **\`getDefaultMiddleware\` অপশনসমূহ**:
  - \`serializableCheck\`: ডিরেক্ট \`Date\` বা \`File\` অবজেক্ট স্টোরে রাখলে যে লাল এরর দেখাত, তা অফ করার অপশন।
  - \`immutableCheck\`: ডিরেক্ট মিউটেশন ওয়ার্নিং কনফিগার করার মেথড।

### বাস্তব-ভিত্তিক উদাহরণ
ফায়ারবেস বা ডাটাবেজের ডাইরেক্ট স্কিমা অবজেক্ট রেডক্সে রাখলে কনসোলে বারবার সিরিয়ালাইজেশন ওয়ার্নিং দিতে থাকে। \`serializableCheck: false\` সেট করে এটি বন্ধ করা যায়।

### উত্তম অনুশীলন
গ্লোবালি পুরো চেকটি অফ না করে নির্দিষ্ট কিছু অ্যাকশন পাথকে ইগনোর করার জন্য কনফিগ করুন যাতে বাকি স্টোর ডাটা টাইপ-সেফ থাকে।

### সাধারণ ভুলসমূহ
ডিফল্ট মিডলওয়্যার বাদ দিয়ে সরাসরি নতুন অ্যারে ডিক্লেয়ার করা (যেমন: \`middleware: [myLogger]\`), যার ফলে থাঙ্ক বা ইমিউটেবল গার্ড অফ হয়ে যায়।

### কোড উদাহরণ
\`\`\`typescript

import rootReducer from './reducer';

exports.store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // সিরিয়ালাইজেশন মিডলওয়্যার কাস্টমাইজেশন
      serializableCheck: {
        // নির্দিষ্ট অ্যাকশন ইগনোর করা হলো
        ignoredActions: ['auth/setLoginTime'],
        // স্টেটের নির্দিষ্ট পাথ ইগনোর করা হলো
        ignoredPaths: ['auth.loginTime'],
      },
      immutableCheck: process.env.NODE_ENV !== 'production',
    }),
});
\`\`\``
  },
  {
    id: "state-query-57",
    title: "How do you implement optimistic updates in RTK Query using the onQueryStarted lifecycle hook?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","Optimistic Updates","onQueryStarted"],
    enAnswer: "Implement optimistic updates in RTK Query using the onQueryStarted hook in the mutation definition. Inside, call dispatch(api.util.updateQueryData()) to modify cached query data before the mutation resolves, handling rollbacks in a catch block.",
    bnAnswer: "RTK Query-তে অপ্টিমিস্টিক আপডেট করতে মিউটেশন অ্যান্ডপয়েন্টের onQueryStarted হুক ব্যবহার করতে হয়। এর ভেতর dispatch(api.util.updateQueryData()) কল করে রিকোয়েস্ট পেন্ডিং থাকা অবস্থায় ক্যাশ এডিট করা হয়।",
    enExplanation: `### Explanation
RTK Query provides the \`onQueryStarted\` lifecycle hook inside endpoint mutations to handle optimistic state updates:
- **Trigger**: Runs as soon as the mutation is dispatched.
- **Workflow**:
  1. Call \`dispatch(api.util.updateQueryData(endpoint, args, draft => { ... }))\` to mutate the query cache draft optimistically.
  2. Await the \`queryFulfilled\` Promise.
  3. If the promise throws an error, catch it and dispatch the rollback action using the returned undo patch.

### Real-World Example
When liking a post:
- Users click Like.
- \`onQueryStarted\` modifies the cached \`getPosts\` query immediately to increment the like count.
- If the server API fails, the catch block restores the previous cache state automatically.

### Best Practice
Store the returned \`patchResult\` object from the cache update dispatch. You can invoke \`patchResult.undo()\` inside the catch block to rollback changes instantly.

### Common Mistakes
Forgetting that \`api.util.updateQueryData\` only affects the RTK Query cache. If you have custom state variables elsewhere, you must update them separately.

### Code Example
\`\`\`typescript
// src/services/postsApi.ts


exports.postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => 'posts',
    }),
    toggleLike: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: \`posts/\${id}/like\`,
        method: 'POST',
      }),
      // Trigger optimistic updates!
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        // 1. Apply patch to getPosts query cache
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((p) => p.id === id);
            if (post) post.likes += 1; // Increment immediately
          })
        );
        
        try {
          // 2. Wait for API to resolve
          await queryFulfilled;
        } catch {
          // 3. Rollback changes if API throws error!
          patchResult.undo();
        }
      },
    }),
  }),
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query-তে অপ্টিমিস্টিক আপডেট ম্যানেজ করতে মিউটেশনের অ্যান্ডপয়েন্টে \`onQueryStarted\` লাইফসাইকেল হুক ব্যবহার করা হয়:
- **কাজের ধাপ**:
  ১. \`dispatch(api.util.updateQueryData(endpoint, arg, draft => {}))\` কল করে ডাটা পেন্ডিং থাকা অবস্থায় ক্যাশ চেঞ্জ করা হয়।
  ২. \`queryFulfilled\` প্রমিসটি অ্যাওয়েট (await) করা হয়।
  ৩. প্রমিসটি ফেইল করলে ক্যাচ ব্লকে \`patchResult.undo()\` কল করে ক্যাশ রোলব্যাক করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
পোস্ট লাইক করা: বাটনে চাপ দিলে \`onQueryStarted\` লাইক কাউন্টার ১ বাড়িয়ে দেয়। যদি এপিআই সাকসেস না হয়ে ক্র্যাশ করে, তবে ক্যাচ ব্লক পূর্বের লাইক সংখ্যায় ফিরিয়ে আনে।

### উত্তম অনুশীলন
ক্যাশ এডিট করার সময় রিটার্ন করা \`patchResult\` ব্যবহার করুন। এটি রোলব্যাক করার জন্য অটোমেটিক \`undo()\` মেথড প্রোভাইড করে।

### সাধারণ ভুলসমূহ
এরর ব্লকে রোলব্যাক কোড লিখতে ভুলে যাওয়া, যার ফলে এপিআই ফেইল হলেও স্ক্রিনে লাইক বাটনটি ভুল লাল কালারে থেকে যায়।

### কোড উদাহরণ
\`\`\`typescript
// src/services/postsApi.ts


exports.postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => 'posts',
    }),
    toggleLike: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: \`posts/\${id}/like\`,
        method: 'POST',
      }),
      // অপ্টিমিস্টিক আপডেট শুরু
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        // ১. getPosts ক্যাশ অপ্টিমিস্টিক্যালি এডিট করা হলো
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((p) => p.id === id);
            if (post) post.likes += 1;
          })
        );
        
        try {
          // ২. সার্ভার উত্তরের অপেক্ষা
          await queryFulfilled;
        } catch {
          // ৩. এরর হলে ওল্ড ডাটাতে রোলব্যাক
          patchResult.undo();
        }
      },
    }),
  }),
});
\`\`\``
  },
  {
    id: "state-query-58",
    title: "How do you perform manual cache updates in RTK Query using api.util.updateQueryData?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","RTK Query","api.util.updateQueryData","Cache Mutation"],
    enAnswer: "To perform manual cache updates, dispatch api.util.updateQueryData(), passing the endpoint name, query arguments (to locate the cache key), and a callback function that directly mutates the cache draft.",
    bnAnswer: "ম্যানুয়ালি ক্যাশ আপডেট করতে api.util.updateQueryData() ডিসপ্যাচ করতে হয়, যেখানে অ্যান্ডপয়েন্টের নাম, কুয়েরি আর্গুমেন্ট (ক্যাশ কি শনাক্ত করতে) এবং ক্যাশ ড্রাফট মিউটেট করার কলব্যাক ফাংশন পাস করতে হয়।",
    enExplanation: `### Explanation
In RTK Query, you can modify the cache programmatically using **\`api.util.updateQueryData\`**:
- It targets a specific query cache slice using the endpoint name and the arguments used to fetch it.
- **Why use it**:
  - Avoids triggering network requests (saving API costs).
  - Perfect for manual updates, chat notifications, or syncing socket data directly into existing cached lists.
- Inside the callback, the \`draft\` is mutable (wrapped with Immer).

### Real-World Example
In a real-time tracking app. A websocket listener receives a notification that user Karim changed their status to offline. Instead of calling a fresh \`getUsers\` API, dispatch \`updateQueryData\` to locate Karim in the cache and update his \`status\` field.

### Best Practice
Ensure the query arguments passed to \`updateQueryData\` exactly match the arguments used in the component's query hook (e.g., if page number 2 was queried, pass 2 as the argument), otherwise RTK Query won't find the target cache key.

### Common Mistakes
Trying to call \`updateQueryData\` as a standard function. It is a Redux action creator; you must wrap it in a \`dispatch()\` call.

### Code Example
\`\`\`typescript



// Web Socket callback (runs outside React components)
export function handleSocketStatusUpdate(userId: string, newStatus: string) {
  // Dispatch the manual cache update!
  store.dispatch(
    usersApi.util.updateQueryData(
      'getUsers', // Endpoint name
      undefined,  // Query arguments (undefined if query doesn't take parameters)
      (draft) => {
        // Draft is a mutable array of users (Immer handles immutability)
        const user = draft.find((u) => u.id === userId);
        if (user) {
          user.status = newStatus; // Update directly
        }
      }
    )
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
RTK Query-তে এপিআই রি-লোড না করেই সরাসরি কোড লিখে মেমোরি ক্যাশ ডাটা মডিফাই করার মেথড:
- **\`api.util.updateQueryData\`**: এটি এপিআই অ্যান্ডপয়েন্ট ও প্যারামিটার চেক করে নির্দিষ্ট ক্যাশ কি সনাক্ত করে।
- **উপযোগিতা**: ব্যাকগ্রাউন্ডে সকেট (Socket.io) ডাটা আসলে এপিআই কল না করে সরাসরি মেমোরিতে নতুন ডাটা যুক্ত করা।

### বাস্তব-ভিত্তিক উদাহরণ
লাইভ চ্যাট অ্যাপ্লিকেশনে কোনো ফ্রেন্ড অনলাইন আসলে সকেট রিকোয়েস্ট ডাটা আসে। নতুন করে পুরো ফ্রেন্ড এপিআই কল করার পরিবর্তে সরাসরি \`updateQueryData\` কল করে ওই ফ্রেন্ড আইডির অনলাইন স্ট্যাটাস ট্রু করে দেওয়া হলো।

### উত্তম অনুশীলন
ক্যোয়ারী আর্গুমেন্ট (২য় প্যারামিটার) প্রপার্টি যেন হুবহু রানিং পেজের প্যারামিটারের সাথে মেলে তা চেক করুন। প্যারামিটার না মিললে আরটিকে ক্যাশ ফাইল খুঁজে পাবে না।

### সাধারণ ভুলসমূহ
\`updateQueryData\` মেথডটি ডিসপ্যাচ (\`dispatch()\`) করা ছাড়া সরাসরি ফাংশন হিসেবে কল করা, যা কোনো কাজই করবে না।

### কোড উদাহরণ
\`\`\`typescript



// ওয়েব সকেট ইভেন্ট লিসেনার (রিঅ্যাক্টের বাইরে রান করবে)
export function handleSocketStatusUpdate(userId: string, newStatus: string) {
  // ম্যানুয়াল ক্যাশ আপডেট ডিসপ্যাচ করা হচ্ছে
  store.dispatch(
    usersApi.util.updateQueryData(
      'getUsers', // অ্যান্ডপয়েন্টের নাম
      undefined,  // কুয়েরি আর্গুমেন্ট (কোনো আর্গুমেন্ট না থাকলে undefined)
      (draft) => {
        // ড্রাফট স্টেটের ডাটা সরাসরি এডিট
        const user = draft.find((u) => u.id === userId);
        if (user) {
          user.status = newStatus;
        }
      }
    )
  );
}
\`\`\``
  },
  {
    id: "state-query-59",
    title: "What is the difference between the mutation helpers mutate and mutateAsync in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","useMutation","mutate","mutateAsync","Promises"],
    enAnswer: "mutate is a void function that handles callbacks internally and does not throw errors in the render cycle. mutateAsync returns a Promise, allowing you to use await inside components and handle errors manually using try-catch blocks.",
    bnAnswer: "mutate হলো একটি সাধারণ ভয়েড (void) ফাংশন যা নিজের কলব্যাকের ভেতর এরর সামলায়। আর mutateAsync একটি প্রমিস (Promise) রিটার্ন করে, যার ফলে কম্পোনেন্টের ভেতর await ব্যবহার করা যায় এবং try-catch দিয়ে এরর হ্যান্ডেল করা যায়।",
    enExplanation: `### Explanation
When calling \`useMutation\`, you get two functions to trigger the action:

1. **\`mutate\`**:
   - Signature: \`mutate(variables, { onSuccess, onError })\` (returns void).
   - Behavior: If the API fails, it catches the error internally. It will not crash the component or bubble up exceptions.
   - Use Case: Standard forms where you declare success/error triggers inside the mutation hook options.

2. **\`mutateAsync\`**:
   - Signature: \`mutateAsync(variables)\` (returns \`Promise<Data>\`).
   - Behavior: Acts like a standard promise. You must wrap it in a \`try-catch\` block, otherwise uncaught promise errors will crash the React render.
   - Use Case: When you need to chain multiple mutations sequentially, run logic after the promise resolves inside the component, or coordinate with React Form libraries.

### Real-World Example
- **mutate**: Use when updating a profile name. The button triggers \`mutate(name)\` and the global success toast is handled inside the hook setup.
- **mutateAsync**: Use when deleting a item. You want to trigger the delete, wait for the response, and *then* close the modal and redirect the user using router.push.

### Best Practice
Prefer using \`mutate\` by default because it is simpler and does not force you to write manual error catches. Only switch to \`mutateAsync\` if you need to await the promise response to coordinate nested workflows.

### Common Mistakes
Calling \`mutateAsync\` inside a component without wrapping it in a \`try-catch\` block, causing silent runtime crashes or console red errors if a network drop happens.

### Code Example
\`\`\`typescript


export function DeleteButton({ id }: { id: string }) {
  const { mutateAsync } = useMutation({
    mutationFn: (itemId: string) => fetch(\`/api/items/\${itemId}\`, { method: 'DELETE' }),
  });

  const handleDelete = async () => {
    try {
      // We must use mutateAsync to await completion before redirecting
      await mutateAsync(id);
      console.log('Deleted successfully on server!');
      // Navigate user away only after deletion is confirmed
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  return <button onClick={handleDelete}>Delete Item</button>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
\`useMutation\` হুক থেকে ডাটা ট্রিগার করার জন্য ২টি হেল্পার ফাংশন পাওয়া যায়:

১. **\`mutate\`**:
   - এটি কোনো প্রমিস রিটার্ন করে না (void)।
   - এপিআই ক্র্যাশ করলে এটি ইন্টারনাল ক্যাচ করে নেয়, ফলে রিঅ্যাক্ট অ্যাপ ক্র্যাশ করে না।
   - ব্যবহার: সাধারণ ফর্ম বা বাটন যেখানে হুকের ভেতরেই কলব্যাক হ্যান্ডেল করা যায়।

২. **\`mutateAsync\`**:
   - এটি একটি প্রমিস রিটার্ন করে (\`Promise<Data>\`)।
   - এরর হ্যান্ডেল করতে অবশ্যই \`try-catch\` ব্লক ব্যবহার করতে হবে, নতুবা আনক্যাচড প্রমিস এররের কারণে সাইট ক্র্যাশ হতে পারে।
   - ব্যবহার: পর পর একাধিক এপিআই রিকোয়েস্ট চালাতে চাইলে বা সফল হওয়ার পর ডিরেক্ট রাউটার চেঞ্জ করতে চাইলে।

### বাস্তব-ভিত্তিক উদাহরণ
- **mutate**: প্রোফাইলের নাম সেভ করার সময়। এটি সেভ বাটন লক করে কলব্যাক রান করিয়ে দেয়।
- **mutateAsync**: কোনো আইটেম ডিলিট করার পর পেজ ব্যাক করাবেন। আপনাকে ডিলিশন কনফার্ম হওয়া পর্যন্ত অপেক্ষা করে উইন্ডো রিডাইরেক্ট কোড কল করতে হবে।

### উত্তম অনুশীলন
সাধারণ পরিস্থিতিতে নিরাপদ থাকতে \`mutate\` ব্যবহার করুন। শুধুমাত্র প্রমিস চেইনিং বা জটিল ফ্লো সমন্বয়ের ক্ষেত্রে \`mutateAsync\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
\`try-catch\` ব্লক ছাড়া সরাসরি \`mutateAsync\` কল করা, যার কারণে নেটওয়ার্ক ড্রপ হলে ব্রাউজার কনসোলে আনক্যাচড এক্সেপশন লাল দাগ দেখাবে।

### কোড উদাহরণ
\`\`\`typescript


export function DeleteButton({ id }: { id: string }) {
  const { mutateAsync } = useMutation({
    mutationFn: (itemId: string) => fetch(\`/api/items/\${itemId}\`, { method: 'DELETE' }),
  });

  const handleDelete = async () => {
    try {
      // এপিআই প্রসেস শেষ হওয়া পর্যন্ত অ্যাওয়েট করা হচ্ছে
      await mutateAsync(id);
      console.log('Deleted successfully on server!');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  return <button onClick={handleDelete}>Delete Item</button>;
}
\`\`\``
  },
  {
    id: "state-query-60",
    title: "How do you configure query retries with custom retry delays and exponential backoff in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Retry configuration","Exponential Backoff","Performance"],
    enAnswer: "Configure query retries by setting the retry and retryDelay properties in useQuery. Define retry as a number, and pass a function to retryDelay that evaluates the retry count and returns milliseconds (e.g. exponential backoff math).",
    bnAnswer: "কুয়েরি রি-ট্রাই কনফিগার করতে useQuery-তে retry ও retryDelay প্রপার্টি সেট করতে হয়। retry-তে সংখ্যা এবং retryDelay-তে একটি ফাংশন পাস করে রি-ট্রাই সংখ্যার ওপর ভিত্তি করে এক্সপোনেনশিয়াল ব্যাকঅফ হিসাব করা হয়।",
    enExplanation: `### Explanation
When a query fails, TanStack Query automatically retries the fetch:
- **\`retry\`**:
  - Default: \`3\` in browser, \`0\` in server.
  - Can be a number, boolean (\`true\` for infinite, \`false\` to disable), or a function returning a boolean.
- **\`retryDelay\`**:
  - The delay between retries.
  - Using a function, you can implement **Exponential Backoff**: doubling the delay with each attempt (e.g., 1s, 2s, 4s, 8s) to prevent overwhelming your server during downtime.

### Real-World Example
If your mobile app fetches notifications:
- If the user goes through a tunnel and network drops, the first query fails.
- Setting \`retry: 3\` and \`retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000)\` delays subsequent retries, giving time for the connection to recover.

### Best Practice
Do not set high retry counts for 404 or 401 statuses. You can return \`false\` inside the \`retry\` callback function based on the HTTP status code to stop retrying immediately.

### Common Mistakes
Allowing standard retries for immediate user-blocking actions, which creates a laggy experience because the loading spinner spins for 3 full fail cycles before displaying an error alert.

### Code Example
\`\`\`typescript


export function NotificationBadge() {
  const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await fetch('/api/notifications');
      if (!res.ok) throw res; // Throw response to access status code
      return res.json();
    },
    
    // Dynamic retry logic
    retry: (failureCount, error: any) => {
      // Stop retrying immediately if error is 404 (Not Found)
      if (error.status === 404) return false;
      return failureCount < 3; // Otherwise try up to 3 times
    },
    
    // Exponential backoff math: 2s, 4s, 8s... capped at 30s
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
  });

  return <div>Notifications</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এপিআই রিকোয়েস্ট ফেইল করলে টানস্ট্যাক কুয়েরি অটোমেটিক্যালি রি-ট্রাই করে:
- **\`retry\`**:
  - ডিফল্ট মান: ৩ বার।
  - এটি সংখ্যা, বুলিয়ান (রি-ট্রাই বন্ধ করতে \`false\`) বা কন্ডিশনাল ফাংশন হতে পারে।
- **\`retryDelay\`**:
  - প্রতি চেষ্টার মাঝের ওয়েটিং সময়।
  - এখানে ফাংশন লিখে **Exponential Backoff** ফর্মুলা সেট করা যায়, যাতে প্রতিবার ফেইলরের পর ওয়েটিং টাইম দ্বিগুণ হয় (যেমন: ২ সেকেন্ড, ৪ সেকেন্ড, ৮ সেকেন্ড)।

### বাস্তব-ভিত্তিক উদাহরণ
মোবাইল ডাটা ড্রপ হওয়ার সময় অ্যাপের নোটিফিকেশন ফেচ করা:
- নেটওয়ার্ক হুট করে চলে গেলে ১ম চেষ্টা ফেইল হবে।
- ব্যাকঅফ ফর্মুলার ফলে ২য় চেষ্টা ২ সেকেন্ড পর ও ৩য় চেষ্টা ৪ সেকেন্ড পর হবে, যা ফোন নেটওয়ার্ক ফিরে পাওয়ার জন্য অতিরিক্ত সময় দেয় এবং ডাটাবেজ ট্রাফিকের চাপ কমায়।

### উত্তম অনুশীলন
৪০৪ (Not Found) বা ৪০১ (Unauthorized) এররের ক্ষেত্রে রি-ট্রাই করা বন্ধ করে দিন। \`retry\` ফাংশনে এরর কোড চেক করে সরাসরি \`false\` রিটার্ন করা সম্ভব।

### সাধারণ ভুলসমূহ
ইউজার-ব্লকিং কোনো কাজে রি-ট্রাই লিমিট বাড়িয়ে রাখা, যা এপিআই ক্র্যাশ করলে ইউজারকে দীর্ঘক্ষণ লোডিং স্পিনারে আটকে রাখে।

### কোড উদাহরণ
\`\`\`typescript


export function NotificationBadge() {
  const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await fetch('/api/notifications');
      if (!res.ok) throw res;
      return res.json();
    },
    
    // কন্ডিশনাল রি-ট্রাই লজিক
    retry: (failureCount, error: any) => {
      // ৪০৪ এরর হলে রি-ট্রাই করা হবে না
      if (error.status === 404) return false;
      return failureCount < 3; // সর্বোচ্চ ৩ বার চেষ্টা করবে
    },
    
    // এক্সপোনেনশিয়াল ব্যাকঅফ ফর্মুলা: ২ সেকেন্ড, ৪ সেকেন্ড, ৮ সেকেন্ড... সর্বোচ্চ ৩০ সেকেন্ড
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
  });

  return <div>Notifications</div>;
}
\`\`\``
  },
  {
    id: "state-query-61",
    title: "How do you manage offline support and synchronization in TanStack Query using persistent cache adapters?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Offline Cache","persister","IndexedDB"],
    enAnswer: "To manage offline support, configure a persister adapter (like createSyncStoragePersister or createIndexedDBPersister) in TanStack Query. The persister saves your query cache to localStorage or IndexedDB, allowing offline access and automatic sync when connection is restored.",
    bnAnswer: "অফলাইন সাপোর্ট চালু করতে টানস্ট্যাক কুয়েরিতে পারসিস্টার এডাপ্টার (যেমন: IndexedDB পারসিস্টার) কনফিগ করতে হয়। পারসিস্টার ক্যাশ ডাটা IndexedDB-তে সেভ করে অফলাইনে দেখার এবং নেটওয়ার্ক ফিরে এলে অটো সিঙ্কের সুবিধা দেয়।",
    enExplanation: `### Explanation
By default, TanStack Query stores its cache in memory. If the user refreshes the page or goes offline, the cache is wiped.
To enable complete offline support:
1. **Persisters**: Libraries that write the in-memory cache to a physical web storage (like \`localStorage\` or \`IndexedDB\`).
2. **Setup**: Use \`persistQueryClient\` wrapper:
   - It intercepts cache writes and serializes query states to storage.
   - When the app launches offline, it populates the QueryClient cache immediately from local storage.
3. **Synchronizer**: When connection resumes, TanStack Query automatically fires background refetches for all stale queries.

### Real-World Example
In a notes app:
- User creates and edits notes while on a flight (offline).
- The persister saves queries in IndexedDB.
- When the plane lands and internet returns, TanStack Query detects the connection change, triggers mutations queue, and syncs notes to the database.

### Best Practice
Use \`createIndexedDBPersister\` instead of \`localStorage\` for large database payloads. \`localStorage\` is synchronous, limited to 5MB, and can block the browser main thread during heavy serialization.

### Common Mistakes
Forgetting that parsed Date objects are serialized to strings in localStorage. You must restore Date types inside the query function or configure a custom deserializer.

### Code Example
\`\`\`typescript




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // Keep inactive cache for 24 hours
    },
  },
});

// Configure localStorage persister
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Initialize offline persistent cache
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours persistence validity
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে টানস্ট্যাক কুয়েরির ক্যাশ মেমোরিতে থাকে, পেজ রিফ্রেশ দিলে বা অফলাইন গেলে তা ডিলিট হয়ে যায়। অফলাইন সাপোর্ট সচল করার ধাপসমূহ:
- **পারসিস্টার (Persisters)**: এটি মেমোরি ক্যাশ ডাটাকে ব্রাউজারের ফিজিক্যাল স্টোরেজে (IndexedDB বা LocalStorage) সেভ করে।
- **\`persistQueryClient\`**: এটি ক্যাশ রাইট ইন্টারসেপ্ট করে স্টোরেজে রাইট করে এবং অফলাইনে অ্যাপ অন করলে ওল্ড ক্যাশ দিয়ে ইউআই সচল রাখে।
- **অটো সিঙ্ক**: নেটওয়ার্ক ফিরে আসা মাত্র এটি জমে থাকা এপিআই কল সচল করে ডাটাবেজের সাথে সিঙ্ক সম্পন্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ
একটি নোটস অ্যাপ: বিমানে থাকা অবস্থায় ইউজার নতুন নোট লিখলেন। পারসিস্টার এটি ব্রাউজারের IndexedDB-তে সেভ করে রাখবে। ইন্টারনেট কানেকশন পাওয়া মাত্র টানস্ট্যাক কুয়েরি ডাটাবেজের সাথে সিঙ্ক করে নোটটি ক্লাউডে আপলোড করে দিবে।

### উত্তম অনুশীলন
বড় ডাটার ক্ষেত্রে লোকালস্টোরেজের পরিবর্তে IndexedDB ব্যবহার করুন। লোকালস্টোরেজ ৫ এমবির বেশি ডাটা ধারণ করতে পারে না এবং এটি সিংক্রোনাস হওয়ায় ব্রাউজার স্লো করে দেয়।

### সাধারণ ভুলসমূহ
পারসিস্ট স্টোরে রাখা ডেট (\`Date\`) অবজেক্টগুলো ব্রাউজার রিলোডের পর স্ট্রিং হয়ে যাওয়ার বিষয়টি মাথায় না রাখা। কাস্টম সিরিয়ালাইজার দিয়ে ডাটা রিকভার করতে হবে।

### কোড উদাহরণ
\`\`\`typescript




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // ২৪ ঘণ্টা ক্যাশ ইনঅ্যাক্টিভ রাখবে
    },
  },
});

// লোকালস্টোরেজ পারসিস্টার সেটআপ
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

// অফলাইন ক্যাশিং চালু করা হলো
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 1000 * 60 * 60 * 24, // ২৪ ঘণ্টা পর্যন্ত ক্যাশ ভ্যালিড থাকবে
});
\`\`\``
  },
  {
    id: "state-query-62",
    title: "What is the difference between initialData and placeholderData in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","initialData","placeholderData","Caching"],
    enAnswer: "initialData is persistent cached data that is treated as already fetched (it is saved to the cache and triggers no loading state). placeholderData is temporary mock data that is not saved to the cache, acting as a visual filler while the query fetches actual data.",
    bnAnswer: "initialData হলো পারসিস্টেড ক্যাশ ডাটা যা সরাসরি ক্যাশ মেমোরিতে যুক্ত হয় এবং কোনো প্রাথমিক লোডিং স্ক্রিন ট্রিগার করে না। আর placeholderData হলো সাময়িক ডামি ডাটা যা ক্যাশে সেভ হয় না এবং এপিআই সলভ হওয়া পর্যন্ত স্ক্রিনে ডামি ভিউ দেখায়।",
    enExplanation: `### Explanation
Both properties supply mock or default data to prevent loading states, but they behave differently:

1. **\`initialData\` (Cache-Level)**:
   - Parsed directly into the query cache registry.
   - If \`initialData\` is provided, the query starts in the \`success\` state (\`isLoading\` is false).
   - A background refetch is still triggered if the data is considered stale based on \`staleTime\`.
   - Best for: Restoring data from another query's detail cache (e.g., loading a post detail page when the post list query already has the title and summary).

2. **\`placeholderData\` (UI-Level)**:
   - Does *not* write to the query cache.
   - The query remains in the \`pending\` (loading) status, but serves the placeholder values to the UI.
   - Once the network request finishes, the placeholder data is discarded and overwritten by the real response.
   - Best for: Displaying temporary structures or holding previous page data during pagination transitions.

### Real-World Example
- **initialData**: Clicking a product card in a list opens the product detail page. You pass the card's product details as \`initialData\`. The details render instantly.
- **placeholderData**: When page 2 of a table is requested. You pass page 1 data as \`placeholderData\` so the table remains filled while page 2 downloads.

### Best Practice
Use \`initialData\` when you have valid, real database data that you want to persist in the cache. Use \`placeholderData\` when you only want to display temporary skeletons or mock structures to prevent layout collapses.

### Common Mistakes
Using \`initialData\` with mock structures, which saves the mock data in the global cache and can result in corrupted cached state if a network request fails.

### Code Example
\`\`\`typescript


export function ProductDetails({ productId }: { productId: string }) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetch(\`/api/products/\${productId}\`).then(res => res.json()),
    
    // Setup initialData from existing product list cache!
    initialData: () => {
      const list = queryClient.getQueryData<any[]>(['products']);
      return list?.find((p) => p.id === productId);
    },
    staleTime: 1000 * 60, // Consider it fresh for 1 minute
  });

  return <div>Product: {data?.title}</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
এই দুটি প্রপার্টিই স্ক্রিনে ডাটা লোড হওয়ার গ্যাপ পূরণ করতে ব্যবহৃত হয় কিন্তু এদের মেকানিজম আলাদা:

১. **\`initialData\` (ক্যাশ লেভেল)**:
   - এটি সরাসরি গ্লোবাল ক্যাশ মেমোরিতে ডাটা যুক্ত করে।
   - এটি থাকলে কুয়েরির প্রাথমিক লোডিং স্টেট স্ক্রিপ্ট হয় (\`isLoading\` সরাসরি \`false\` হয়)।
   - ব্যবহার: অন্য কুয়েরির ডাটা দিয়ে কারেন্ট কুয়েরি স্টার্ট করা (যেমন: পোস্ট লিস্টের ডাটা নিয়ে ডিটেইলস পেজ ওপেন করা)।

২. **\`placeholderData\` (ইউআই লেভেল)**:
   - এটি ক্যাশ মেমোরিতে কোনো ডাটা যুক্ত করে না।
   - কুয়েরি লোডিং স্টেটেই থাকে, জাস্ট স্ক্রিনে সাময়িকভাবে ডামি ডাটা রেন্ডার করে রাখে।
   - ব্যবহার: কঙ্কাল (skeleton) ভিউ দেখানো বা পেজিনেশনের সময় ওল্ড পেজের ডাটা ধরে রাখা।

### বাস্তব-ভিত্তিক উদাহরণ
- **initialData**: কার্ড লিস্ট থেকে আইটেম ডিটেইলে যাওয়ার সময়। কার্ডে অলরেডি নেম ও ডেসক্রিপশন ডাটা ছিল, তাই ডিটেইল পেজে ক্লিক করলে ডাটাবেজ হিট হওয়ার আগেই কার্ডের ডাটা দিয়ে স্ক্রিন সাথে সাথে ওপেন হয়ে যাবে।
- **placeholderData**: নিউজ পেজে লোড করার সময়। এটি ডামি মক ডাটা শো করে রাখে যতক্ষণ না এপিআই ডাটা রিসিভ হচ্ছে।

### উত্তম অনুশীলন
বাস্তব ডাটা দিয়ে ক্যাশ পূরণ করতে চাইলে \`initialData\` এবং ডামি ভিজ্যুয়াল ফিলার হিসেবে \`placeholderData\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
ডামি মক অবজেক্টকে \`initialData\`-তে দিয়ে রাখা, যা এপিআই এরর ফেস করলে স্টোরে চিরতরে ভুল ডামি ডাটা ক্যাশ করে দেয়।

### কোড উদাহরণ
\`\`\`typescript


export function ProductDetails({ productId }: { productId: string }) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetch(\`/api/products/\${productId}\`).then(res => res.json()),
    
    // প্রডাক্ট লিস্ট ক্যাশ থেকে initialData রিড করা হচ্ছে
    initialData: () => {
      const list = queryClient.getQueryData<any[]>(['products']);
      return list?.find((p) => p.id === productId);
    },
    staleTime: 1000 * 60, // ১ মিনিট ফ্রেশ রাখবে
  });

  return <div>Product: {data?.title}</div>;
}
\`\`\``
  },
  {
    id: "state-query-63",
    title: "How do you set up developer tools (Devtools middleware) for Zustand, and how do you specify custom action names?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Devtools","Debugging","Redux DevTools"],
    enAnswer: "To set up devtools for Zustand, wrap the store creator function with the devtools() middleware from \"zustand/middleware\". Inside actions, pass the action name string as the second parameter to set() (e.g. set(state => {}, false, \"actionName\")).",
    bnAnswer: "Zustand-এ দেব-টুলস সেটআপ করতে \"zustand/middleware\" থেকে devtools মিডলওয়্যার নিয়ে স্টোর ক্রিয়েটর র্যাপ করতে হয়। আর কাস্টম অ্যাকশন নাম দিতে set() মেথডের ৩য় প্যারামিটারে স্ট্রিং পাস করতে হয় (যেমন: set(state => {}, false, \"actionName\"))।",
    enExplanation: `### Explanation
Zustand stores can be inspected using the Redux DevTools browser extension:
1. **\`devtools\` Middleware**: Wrap the store callback function. This hooks the Zustand store events directly into the Redux DevTools extension dashboard.
2. **Naming Actions**: By default, Zustand updates appear as generic anonymous actions (\`"anonymous"\`). To define clear action names:
   - Provide the action type name string as the third parameter inside \`set()\`.
   - The second parameter is the replace flag (\`false\` to merge shallowly, \`true\` to replace).
   - Syntax: \`set(recipe, replace, actionName)\`.

### Real-World Example
In a user cart checkout store. Setting action names like \`cart/addItem\`, \`cart/clear\`, or \`cart/applyCoupon\` makes it extremely simple to trace when and where a user action modified the cart details.

### Best Practice
Always name your actions when using \`devtools\` middleware. In large production apps, anonymous updates are impossible to trace.

### Common Mistakes
Forgetting that \`set()\` inside \`devtools\` expects three parameters if you want to set names. Omitting the second boolean \`replace\` argument (e.g. \`set(state => {}, "actionName")\`) will replace the entire state with the string, crashing the store.

### Code Example
\`\`\`typescript



// CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Wrap store with devtools middleware
exports.useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      
      increment: () => set(
        (state) => ({ count: state.count + 1 }),
        false, // 2nd param: do NOT replace state
        'counter/increment' // 3rd param: Action Name in DevTools
      ),
      
      decrement: () => set(
        (state) => ({ count: state.count - 1 }),
        false,
        'counter/decrement'
      ),
    }),
    { name: 'CounterStore' } // Name of store in DevTools selector dropdown
  )
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand স্টোরকে ব্রাউজারের রেডক্স দেব-টুলস এক্সটেনশন দিয়ে ট্র্যাক করা সম্ভব:
১. **\`devtools\` মিডলওয়্যার**: স্টোর ডিক্লেয়ারেশনের সময় এটি র্যাপার হিসেবে দিতে হয়।
২. **অ্যাকশন নেমিং**: ডিফল্টভাবে সব ট্রানজ্যাকশনের নাম \`"anonymous"\` দেখায়। কাস্টম নাম দিতে \`set\` মেথডের ৩য় প্যারামিটারে অ্যাকশন নেম পাস করতে হয়। এর দ্বিতীয় প্যারামিটারে রিপ্লেস বুলিয়ান দিতে হবে।
   - সিনট্যাক্স: \`set(state => ({ count: state.count + 1 }), false, 'actionName')\`।

### বাস্তব-ভিত্তিক উদাহরণ
কার্ট প্রজেক্টের দেব-টুলস ট্র্যাকিং: বাটনে ক্লিক করলে অ্যাকশনের নাম \`cart/addItem\` হিসেবে ডেভটুলস প্যানেলে ভেসে উঠবে, যা প্রতিটি টগল নিখুঁতভাবে রিড করতে সাহায্য করে।

### উত্তম অনুশীলন
ডেভটুলস ব্যবহার করার সময় অবশ্যই প্রতিটি অ্যাকশনের কাস্টম নাম লিখে দিন। অন্যথায় বড় প্রজেক্টে এডিট ট্র্যাকিং করা কঠিন হয়ে দাঁড়াবে।

### সাধারণ ভুলসমূহ
২য় প্যারামিটার \`false\` না দিয়ে সরাসরি ৩য় প্যারামিটারে অ্যাকশন নাম স্ট্রিং বসিয়ে দেওয়া (যেমন: \`set(state => {}, 'actionName')\`)। এতে পুরো স্টেটটি ভেঙে যাবে।

### কোড উদাহরণ
\`\`\`typescript



// CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// devtools মিডলওয়্যার সেটআপ
exports.useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      
      increment: () => set(
        (state) => ({ count: state.count + 1 }),
        false, // ২য় প্যারামিটার: স্টেট মার্জ হবে (রিপ্লেস নয়)
        'counter/increment' // ৩য় প্যারামিটার: অ্যাকশন নাম
      ),
      
      decrement: () => set(
        (state) => ({ count: state.count - 1 }),
        false,
        'counter/decrement'
      ),
    }),
    { name: 'CounterStore' } // ডেভটুলস ড্রপডাউনে স্টোরের নাম
  )
);
\`\`\``
  },
  {
    id: "state-query-64",
    title: "What are the performance implications of using inline selectors in useSelector vs memoized selectors created via createSelector?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux","useSelector","createSelector","Performance","Memoization"],
    enAnswer: "Inline selectors in useSelector that perform calculations (like .filter) run on every dispatch and return new references, forcing component re-renders. createSelector memoizes inputs and only recalculates if they change, avoiding unnecessary renders.",
    bnAnswer: "useSelector-এ ইনলাইন সিলেক্টরে ক্যালকুলেশন (যেমন .filter) করলে প্রতি ডিসপ্যাচে নতুন মেমোরি রেফারেন্স তৈরি হয় ও রি-রেন্ডার ট্রিগার করে। আর createSelector মেমোইজেশন ব্যবহার করায় অপ্রয়োজনীয় রি-রেন্ডারিং প্রতিরোধ করে।",
    enExplanation: `### Explanation
Whenever *any* Redux action is dispatched, React-Redux triggers all active \`useSelector\` hooks across the component tree:
- **Inline Selector**: If you write \`useSelector(state => state.todos.filter(t => !t.completed))\`, the filter function runs. Even if no todos changed, the filter returns a *new array reference*. React-Redux detects a reference difference (\`prev !== next\`) and forces the component to re-render.
- **Memoized Selector**: Created via \`createSelector\`. It compares input references first. If \`state.todos\` reference has not changed, it skips running the filter function completely, returning the cached array reference. The component does not re-render.

### Real-World Example
In a chat application with 1,000 messages. If the footer text box dispatches character typing actions, every component with an inline selector filtering messages runs that filter on every keypress, freezing the browser. Composing the filter inside \`createSelector\` completely stops this calculation load during typing.

### Best Practice
Always use \`createSelector\` from Reselect for any selector that extracts state using array transformations (\`filter\`, \`map\`, \`sort\`), string formatting, or object constructs.

### Common Mistakes
Writing nested objects inline in \`useSelector\` (e.g. \`useSelector(state => ({ user: state.user, role: state.role }))\`), which creates reference mismatches on every state update.

### Code Example
\`\`\`typescript



// 1. Un-memoized inline Selector (BAD! re-renders on EVERY dispatch)
// const selectActiveUsers = (state: RootState) => state.users.filter(u => u.active);

// 2. Memoized Composed Selector (GOOD! only runs if state.users reference changes)
const selectRawUsers = (state: RootState) => state.users;

exports.selectActiveUsers = createSelector(
  [selectRawUsers],
  (users) => {
    console.log("Calculated only when users list updates");
    return users.filter((u) => u.active);
  }
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স স্টোরে যেকোনো ডাটা ডেসপ্যাচ হলে সব \`useSelector\` ট্র্রিগার হয়:
- **ইনলাইন সিলেক্টর**: \`useSelector(state => state.todos.filter(...))\` লিখলে প্রতিবার নতুন মেমোরি রেফারেন্স তৈরি হয় এবং ভ্যালু সেম থাকলেও রিঅ্যাক্ট কম্পোনেন্ট রিলোড হতে বাধ্য হয়।
- **মেমোইজড সিলেক্টর**: \`createSelector\` দিয়ে বানালে এটি ইনপুট ডাটা ক্যাশ করে। ডাটা না বদলালে এটি আগের সেভ করা রেফারেন্সটাই ফেরত দেয় এবং রি-রেন্ডার হওয়া আটকায়।

### বাস্তব-ভিত্তিক উদাহরণ
১০০০ মেসেজ সম্বলিত চ্যাট রুম। ইউজার যখন ইনপুট বক্সে মেসেজ টাইপ করছেন, তখন প্রতিবার টাইপ ডিসপ্যাচ হওয়ার কারণে ইনলাইন সিলেক্টরগুলো বারবার ফিল্টারিং কোড রান করে ব্রাউজার হ্যাং করে দিবে। মেমোইজেশন ব্যবহার করলে টাইপিংয়ের সময় ফিল্টারিং একেবারেই স্কিপ হবে।

### উত্তম অনুশীলন
এপিআই ডাটার ওপর কোনো ফিল্টার, সর্ট বা কাস্টম অবজেক্ট ম্যাপিং করতে হলে সবসময় \`createSelector\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ
হুকের ভেতর সরাসরি অবজেক্ট ম্যাপ করা যেমন: \`useSelector(state => ({ a: state.a, b: state.b }))\` যা অহেতুক রেন্ডারিং বাড়ায়।

### কোড উদাহরণ
\`\`\`typescript



// ১. আন-মেমোইজড ইনলাইন সিলেক্টর (খারাপ অনুশীলন! প্রতি ডিসপ্যাচে রেন্ডার হবে)
// const selectActiveUsers = (state: RootState) => state.users.filter(u => u.active);

// ২. মেমোইজড সিলেক্টর (উত্তম অনুশীলন! শুধু ইউজার লিস্ট চেঞ্জ হলে রান করবে)
const selectRawUsers = (state: RootState) => state.users;

exports.selectActiveUsers = createSelector(
  [selectRawUsers],
  (users) => {
    console.log("Calculated only when users list updates");
    return users.filter((u) => u.active);
  }
);
\`\`\``
  },
  {
    id: "state-query-65",
    title: "How does Redux handle state persistence across browser refreshes using libraries like redux-persist?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux","redux-persist","State Persistence","localStorage"],
    enAnswer: "Redux handles persistence using redux-persist by wrapping the root reducer with persistReducer and wrapping the root component with PersistGate. This automatically serializes the store state to localStorage on updates and hydates it on page reload.",
    bnAnswer: "রেডক্স-এ ডাটা স্থায়ী করতে redux-persist ব্যবহার করা হয় যা রুট রিডিউসারকে persistReducer দিয়ে এবং রুট ফাইলকে PersistGate দিয়ে র্যাপ করে। এটি অটোমেটিক গ্লোবাল স্টেট লোকালস্টোরেজে সিঙ্ক ও পেজ লোডে হাইড্রেট করে।",
    enExplanation: `### Explanation
In Redux, \`redux-persist\` is the standard library to persist states across refreshes:
1. **\`persistReducer\`**: Takes a configuration object (\`key\`, \`storage\`, \`whitelist\` or \`blacklist\` of slices) and your root reducer, wrapping it to automatically intercept actions and sync state to storage.
2. **\`persistStore\`**: Wraps the Redux store to initialize the persistence syncing manager.
3. **\`PersistGate\`**: A React wrapper component that delays the rendering of your app UI until the persisted state has been retrieved and loaded into the Redux store.

### Real-World Example
In a user auth session:
- Wrapping the \`auth\` slice in \`redux-persist\` ensures token and user objects stay in \`localStorage\`.
- When the user refreshes, \`PersistGate\` renders a loading screen for a fraction of a second, gets the token, loads it into Redux, and then renders the authenticated dashboard smoothly.

### Best Practice
Only whitelist slice states that are critical for persistence (like user authentication tokens and shopping carts). Avoid persisting transient UI states (like loading spinners or search text inputs).

### Common Mistakes
Forgetting to add serializability check middleware overrides in Redux Toolkit configuration when using \`redux-persist\`, which floods the browser console with serializability warnings.

### Code Example
\`\`\`typescript
// src/store.ts


import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist the auth slice
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

exports.store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignore redux-persist actions in serializable check
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

exports.persistor = persistStore(store);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
রেডক্স স্টোরের ডাটা লোকালস্টোরেজে সিঙ্ক করতে \`redux-persist\` লাইব্রেরি স্ট্যান্ডার্ড মেথড হিসেবে ব্যবহৃত হয়:
১. **\`persistReducer\`**: এটি কনফিগারেশন (স্টোরেজ টাইপ, হোয়াইটলিস্ট স্লাইস) ও রুট রিডিউসার নিয়ে ক্যাশ রিডিউসার জেনারেট করে।
২. **\`persistStore\`**: এটি রেডক্স স্টোর নিয়ে পারসিস্ট ম্যানেজার তৈরি করে।
৩. **\`PersistGate\`**: এটি রিঅ্যাক্ট কম্পোনেন্টকে লোড হতে হোল্ড করে যতক্ষণ না ব্রাউজার স্টোরেজ থেকে ডাটা রেডক্সে ফিরে আসছে।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার সেশন অটো-লগইন: পেজ রিলোড দেওয়ার পর \`PersistGate\` মিলি-সেকেন্ডের জন্য অ্যাপ রেন্ডার ব্লক রাখবে যতক্ষণ না লোকালস্টোরেজ থেকে টোকেন রেডক্সে লোড হচ্ছে। টোকেন লোড শেষ হলে ডাইরেক্ট লগইন ইউজারকে ড্যাশবোর্ড দেখাবে।

### উত্তম অনুশীলন
গ্লোবাল সব স্লাইস সেভ না করে শুধুমাত্র প্রয়োজনীয় স্লাইস (যেমন টোকেন বা ইউজার প্রোফাইল) \`whitelist\`-এ যুক্ত করুন।

### সাধারণ ভুলসমূহ
টুলকিটের \`configureStore\`-এ \`redux-persist\` ব্যবহার করার পর থাঙ্ক মিডলওয়্যারে সিরিয়ালাইজেশন চেক ইগনোর কনফিগ না করা, যা কনসোলে ক্রমাগত এরর ওয়ার্নিং ছুড়বে।

### কোড উদাহরণ
\`\`\`typescript
// src/store.ts


import storage from 'redux-persist/lib/storage'; // লোকালস্টোরেজ
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // শুধুমাত্র auth স্লাইসটি সেভ হবে
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

exports.store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // পারসিস্ট অ্যাকশনগুলোকে সিরিয়ালাইজেবল রুল থেকে ছাড় দেওয়া হলো
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

exports.persistor = persistStore(store);
\`\`\``
  },
  {
    id: "state-query-66",
    title: "How do you track and visualize active queries and mutations using the TanStack Query Devtools?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","Devtools","Debugging","Cache Inspector"],
    enAnswer: "Track and visualize active queries by importing <ReactQueryDevtools /> from \"@tanstack/react-query-devtools\" and placing it inside the QueryClientProvider. This renders a floating toggle button to inspect cache status and trigger refetches.",
    bnAnswer: "অ্যাক্টিভ কুয়েরি ট্র্যাক করতে \"@tanstack/react-query-devtools\" থেকে <ReactQueryDevtools /> ইম্পোর্ট করে QueryClientProvider-এর ভেতর রেন্ডার করতে হয়। এটি ক্যাশ স্ট্যাটাস দেখা ও রি-ফেচ করার প্যানেল ওপেন করে।",
    enExplanation: `### Explanation
The TanStack Query Devtools is an invaluable debugging interface:
- **Visual Inspector**: Displays all queries in the cache categorized by state: \`fresh\`, \`stale\`, \`fetching\`, \`inactive\`.
- **Cache Explorer**: Review the raw JSON data returned by queries.
- **Triggers**: Manually trigger query refetching, invalidation, or cache resets directly from the browser panel.
- **State Timeline**: Trace when mutations start, succeed, or fail.

By default, the devtools panel is excluded from production bundles automatically.

### Real-World Example
During development, if a profile name does not update on screen:
- Open the Query Devtools floating panel.
- Check the query key \`['profile']\`.
- Inspect if the query is in \`stale\` state. Click "Refetch" in the devtools to see if the API returns the correct data. This isolates whether the bug is in the UI rendering or the backend response.

### Best Practice
Include \`initialIsOpen={false}\` in the devtools configuration to prevent the inspector window from covering the screen automatically during app launches.

### Common Mistakes
Assuming devtools bundle size impacts production. The package is smart and compiled out in production builds automatically if configured inside React environments.

### Code Example
\`\`\`typescript



const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>My App Content</main>
      
      {/* Configure the Devtools panel */}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom" // Panel position layout
      />
    </QueryClientProvider>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরি ডেভটুলস হলো ব্রাউজার ইন্টারফেস ডিবাগ করার পাওয়ারফুল টুল:
- **ভিজ্যুয়াল প্যানেল**: ক্যাশের কুয়েরিগুলো কোন ক্যাটাগরিতে আছে (তাজা, পুরনো, লোড হচ্ছে, ইনঅ্যাক্টিভ) তা রঙের কোড দিয়ে দেখায়।
- **ডাটা ভিউ**: এপিআই-এর রেসপন্স র-জেসন (JSON) ডাটা সরাসরি প্যানেলে দেখা যায়।
- **ম্যানুয়াল ট্রিগার**: যেকোনো কুয়েরি সরাসরি রি-ফেচ বা রিমুভ করার বাটন প্রোভাইড করে।
- প্রোডাকশন বিল্ড তৈরির সময় এটি অটোমেটিক রিমুভ হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার এডিটের পর প্রোফাইল চেঞ্জ স্ক্রিনে রেন্ডার হচ্ছে না। ডেভটুলস ওপেন করে \`['profile']\` কি-টি চেক করলেন। সেখানে "Refetch" বাটনে ক্লিক করে দেখলেন ডাটা আপডেট হচ্ছে কি না। এটি ভুলটি রিঅ্যাক্ট কোডে না কি ডাটাবেজে তা আলাদা করতে হেল্প করে।

### উত্তম অনুশীলন
ডেভটুলস প্যানেলে \`initialIsOpen={false}\` কনফিগ করে রাখুন যাতে ব্রাউজার লোড হওয়া মাত্র প্যানেলটি পুরো স্ক্রিন ঢেকে না ফেলে।

### সাধারণ ভুলসমূহ
ডেভটুলস প্রোডাকশন সাইট স্লো করে দিবে ভেবে ডেভেলপমেন্ট মোডেও এটি ব্যবহার না করা।

### কোড উদাহরণ
\`\`\`typescript



const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>My App Content</main>
      
      {/* ডেভটুলস প্যানেল ইন্টিগ্রেশন */}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom" // প্যানেলটি স্ক্রিনের নিচে থাকবে
      />
    </QueryClientProvider>
  );
}
\`\`\``
  },
  {
    id: "state-query-67",
    title: "How do you configure a querys network mode (online, always, offlineFirst) to control behavior during connection drops?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","networkMode","Offline Behavior","Error Handling"],
    enAnswer: "Configure networkMode in TanStack Query by setting it in the query options. online (default) pauses queries until internet returns, always runs queries regardless of connection status, and offlineFirst fetches and resolves immediately using the local cache.",
    bnAnswer: "নেটওয়ার্ক মোড (networkMode) কনফিগ করতে useQuery অপশনে এটি সেট করতে হয়। online (ডিফল্ট) মোড অফলাইনে কুয়েরি পজ করে রাখে, always অনলাইন স্ট্যাটাস ছাড়াই কোয়েরি চালায় এবং offlineFirst লোকাল ক্যাশ থাকলে সাথে সাথে রেসপন্ড করে।",
    enExplanation: `### Explanation
TanStack Query manages request flow during network losses using the \`networkMode\` configuration:

1. **\`online\` (Default)**:
   - Queries will only fetch if there is an active internet connection.
   - If offline, the request status is paused as \`paused\` and wait for connectivity before executing.

2. **\`always\`**:
   - Queries execute regardless of internet status.
   - Best for offline-first setups, or testing mock API resolvers operating locally.

3. **\`offlineFirst\`**:
   - Similar to \`online\`, but the query function executes once anyway. If it fails due to network drop, it then pauses the request.

### Real-World Example
In a messaging dashboard. The chat feed should operate in \`networkMode: 'online'\` to prevent spamming failed fetch alerts while offline. A local database sync script, however, should run in \`networkMode: 'always'\` to keep sync hooks resolving.

### Best Practice
Keep the default \`online\` mode for standard internet APIs. Switch to \`always\` if your \`queryFn\` executes local operations like querying IndexedDB, which does not require an active internet connection.

### Common Mistakes
Forgetting that when \`networkMode\` is set to \`online\`, queries will pause without throwing errors if the user goes offline, which can keep loading spinners active indefinitely if not styled for paused state.

### Code Example
\`\`\`typescript


export function LocalDatabaseViewer() {
  const { data } = useQuery({
    queryKey: ['localItems'],
    queryFn: async () => {
      // Querying local database (does not need internet connection!)
      return getIndexedDBData();
    },
    // Run query even if user is completely offline
    networkMode: 'always',
  });

  return <div>Local data loaded</div>;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ইন্টারনেট কানেকশন চলে গেলে টানস্ট্যাক কুয়েরি কীভাবে কাজ করবে তা \`networkMode\` দিয়ে কনফিগ করা হয়:

১. **\`online\` (ডিফল্ট)**:
   - শুধুমাত্র ইন্টারনেট অ্যাক্টিভ থাকলেই এপিআই কল ফায়ার করবে। অফলাইনে কুয়েরি পজ (\`paused\`) হয়ে দাঁড়িয়ে থাকবে।

২. **\`always\`**:
   - ইন্টারনেট কানেকশন চেক করা ছাড়াই এপিআই কল জোরপূর্বক ফায়ার করবে। লোকাল মক এপিআই টেস্টিংয়ের জন্য উপযুক্ত।

৩. **\`offlineFirst\`**:
   - প্রথমে কুয়েরি ফাংশন ফায়ার করার ট্রাই করে। অফলাইন জনিত ক্র্যাশ হলে এরপর কুয়েরি পজ করে রাখে।

### বাস্তব-ভিত্তিক উদাহরণ
লোকাল ডাটাবেজ ভিউয়ার: ইউজার তার ফোনের IndexedDB থেকে সেভ করা ফাইল রিড করছেন। এই কাজে ইন্টারনেটের দরকার নেই, তাই কুয়েরি অপশনে \`networkMode: 'always'\` দিয়ে রাখতে হবে যাতে ডাটা অফলাইনেও রিলোড হয়।

### উত্তম অনুশীলন
বাইরে ক্লাউড এপিআই কলের জন্য ডিফল্ট \`online\` মোডই রাখুন। শুধু লোকাল ডাটাবেজ কোয়েরির ক্ষেত্রে \`always\` মোড অন করুন।

### সাধারণ ভুলসমূহ
\`online\` মোডে অফলাইনে থাকাকালীন কুয়েরিগুলো ফেইল না হয়ে পজ হয়ে থাকে। পজ স্ট্যাটাস হ্যান্ডেল না করলে স্ক্রিনে অনন্তকাল লোডিং স্পিনার ঘুরতে পারে।

### কোড উদাহরণ
\`\`\`typescript


export function LocalDatabaseViewer() {
  const { data } = useQuery({
    queryKey: ['localItems'],
    queryFn: async () => {
      // লোকাল ডাটাবেজ কোয়েরি (ইন্টারনেটের দরকার নেই)
      return getIndexedDBData();
    },
    // অফলাইনেও কোয়েরি সচল থাকবে
    networkMode: 'always',
  });

  return <div>Local data loaded</div>;
}
\`\`\``
  },
  {
    id: "state-query-68",
    title: "How do you build a custom middleware for Zustand?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Zustand","Custom Middleware","Store Config","Advanced JS"],
    enAnswer: "To build a custom middleware for Zustand, write a higher-order function that wraps the state creator. The middleware receives set, get, and api arguments, and returns a modified state creator with intercepted functions.",
    bnAnswer: "Zustand-এ কাস্টম মিডলওয়্যার তৈরি করতে একটি হায়ার-অর্ডার ফাংশন লিখতে হয় যা স্টেট ক্রিয়েটরকে র‍্যাপ করে। এটি set, get ও api আর্গুমেন্ট নিয়ে ইন্টারসেপ্ট ফাংশন রিটার্ন করে।",
    enExplanation: `### Explanation
Zustand middlewares are higher-order functions wrapping the store state creator:
- **Signature**: \`(config) => (set, get, api) => config(customSet, get, api)\`.
- You intercept the \`set\` function to run custom logic (like logging or validation checks) before the store updates.

### Real-World Example
Creating a logging middleware to print state diffs to console on every update, helpful for monitoring store changes in non-browser environments where Redux Devtools are unavailable.

### Best Practice
Keep custom middlewares pure. Return the original return types from the configuration callback to prevent breaking other middlewares chained to the store.

### Common Mistakes
Modifying state values directly inside custom middleware without calling the original \`set\` receiver, which prevents components from detecting changes.

### Code Example
\`\`\`typescript


// 1. Define custom logger middleware
const logMiddleware = <T>(config: StateCreator<T>): StateCreator<T> => 
  (set, get, api) => 
    config(
      (args) => {
        console.log('  Applying state change:', args);
        set(args); // Call original set function
        console.log('  New State:', get());
      },
      get,
      api
    );

// BearStore {
  bears: number;
  addBear: () => void;
}

// 2. Wrap state creator with custom middleware
exports.useBearStore = create<BearStore>()(
  logMiddleware((set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
  }))
);
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
Zustand মিডলওয়্যার হলো একটি হায়ার-অর্ডার ফাংশন যা কারেন্ট স্টেট ক্রিয়েটরকে র‍্যাপ করে:
- **সিনট্যাক্স**: \`(config) => (set, get, api) => config(customSet, get, api)\`।
- এখানে \`set\` মেথডটি ইন্টারসেপ্ট বা ক্যাচ করে মনের মতো কাস্টম কোড অ্যাড করা যায়।

### বাস্তব-ভিত্তিক উদাহরণ
কাস্টম লগার মিডলওয়্যার: যখনই স্টোরে নতুন প্রডাক্ট অ্যাড হবে, এটি কনসোলে আগের ও পরের স্টেট ডাটা প্রিন্ট করে দিবে।

### উত্তম অনুশীলন
মিডলওয়্যার তৈরি করার সময় টাইপস্ক্রিপ্টের জেনেরিক টাইপস (\`<T>\`) ব্যবহার করুন যাতে স্টোরের সব ভেরিয়েবল টাইপ সেফ থাকে।

### সাধারণ ভুলসমূহ
কাস্টম মিডলওয়্যারে আগের \`set\` মেথডটি ফায়ার করতে ভুলে যাওয়া, যার ফলে কোনো ডাটাই আর স্টোরে আপডেট হবে না।

### কোড উদাহরণ
\`\`\`typescript


// ১. কাস্টম লগার মিডলওয়্যার তৈরি
const logMiddleware = <T>(config: StateCreator<T>): StateCreator<T> => 
  (set, get, api) => 
    config(
      (args) => {
        console.log('  Applying state change:', args);
        set(args); // মূল set মেথড কল করা হলো
        console.log('  New State:', get());
      },
      get,
      api
    );

// BearStore {
  bears: number;
  addBear: () => void;
}

// ২. কাস্টম মিডলওয়্যার দিয়ে স্টোর র্যাপ করা
exports.useBearStore = create<BearStore>()(
  logMiddleware((set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
  }))
);
\`\`\``
  },
  {
    id: "state-query-69",
    title: "How does code splitting work with Redux Toolkit to dynamically inject reducers for lazy-loaded pages?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["Redux Toolkit","Code Splitting","Lazy Loading","store.replaceReducer"],
    enAnswer: "Code splitting in Redux is implemented by configuring store.replaceReducer(). On lazy-loaded pages, you dynamically inject new slice reducers into a root reducer registry and replace the store configuration on the fly.",
    bnAnswer: "রেডক্সে কোড স্প্লিটিং করতে store.replaceReducer() মেথড ব্যবহার করা হয়। লেজি-লোডেড পেজ ওপেন হলে স্লাইস রিডিউসারগুলোকে ডাইনামিক্যালি রুট রেজিস্ট্রিতে ইনজেক্ট করে স্টোর রিডিউসার প্রতিস্থাপন করা হয়।",
    enExplanation: `### Explanation
By default, \`configureStore\` requires all reducers to be defined at launch. For large applications, loading all reducers on the initial load increases bundle size.

**Dynamic Reducer Injection**:
- Keep a root reducer map object.
- When a user lazy loads a module:
  - Add the new slice reducer to the root reducer map dynamically.
  - Call \`store.replaceReducer(newRootReducer)\` to replace the active store reducer logic.
  - All subsequent dispatches will now target the newly injected state slices correctly.

### Real-World Example
In a portal with an Admin Dashboard. The admin panel requires heavy configurations, and users rarely visit it. Lazy loading the admin dashboard route and dynamically injecting the \`adminSlice\` reducer only when the admin page mounts saves 150KB of initial JS bundle download.

### Best Practice
Use a library like \`redux-injectors\` or build a helper manager inside your store file to handle the dynamic injection safely without duplicating slices.

### Common Mistakes
Forgetting that when you inject a reducer, the initial state for that slice will not exist in the store until the moment the reducer is loaded, which can cause selectors to return undefined if not initialized with fallbacks.

### Code Example
\`\`\`typescript


// 1. Initial reducers map
const staticReducers = {
  auth: (state = {}) => state,
};

// 2. Helper store creator supporting dynamic injection
export function configureAppStore() {
  const store = configureStore({
    reducer: combineReducers(staticReducers),
  }) as any;

  store.asyncReducers = {};

  // 3. Custom injection method
  store.injectReducer = (key: string, asyncReducer: Reducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(
      combineReducers({
        ...staticReducers,
        ...store.asyncReducers,
      })
    );
  };

  return store;
}

exports.store = configureAppStore();
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
ডিফল্টভাবে \`configureStore\` অ্যাপ চালুর সময় সব রিডিউসার চেইনে লোড করে নেয়। কিন্তু বড় অ্যাপ্লিকেশনে সব রিডিউসার একসাথে লোড করলে বান্ডেল সাইজ বড় হয়ে যায়।

**ডাইনামিক রিডিউসার ইনজেকশন**:
- একটি গ্লোবাল রিডিউসার ম্যাপ অবজেক্ট রাখা হয়।
- লেজি-লোডেড পেজে ইউজার ঢুকলে:
  - নতুন স্লাইস রিডিউসার গ্লোবাল ম্যাপে যুক্ত করা হয়।
  - \`store.replaceReducer(newRootReducer)\` কল করে স্টোরকে নতুন চেইনে কনভার্ট করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ
অ্যাডমিন ড্যাশবোর্ড পেজের রিডিউসার কেবল অ্যাডমিন লগইন করার পরেই রিলোড হওয়া দরকার। লেজি লোড ব্যবহার করে অ্যাডমিন পেজ ওপেন হওয়ার সাথে সাথে \`adminSlice\` স্টোরে ইনজেক্ট করা হলে সাধারণ ভিজিটরদের অহেতুক অ্যাডমিন মডিউল ডাউনলোড করতে হয় না।

### উত্তম অনুশীলন
ইনজেকশন প্রসেস নিরাপদ রাখতে \`redux-injectors\` প্যাকেজটি ব্যবহার করতে পারেন যা ডুপ্লিকেট স্লাইস মেমোরিতে লোড হতে বাধা দেয়।

### সাধারণ ভুলসমূহ
ইনজেক্ট হওয়ার পূর্বে ওই স্লাইসের ডাটা সিলেক্টর দিয়ে রিড করার চেষ্টা করা যা \`undefined\` এরর থ্রো করবে।

### কোড উদাহরণ
\`\`\`typescript


// ১. প্রাথমিক রিডিউসার ম্যাপ
const staticReducers = {
  auth: (state = {}) => state,
};

// ২. ডাইনামিক ইনজেকশন মেথড সহ স্টোর তৈরি
export function configureAppStore() {
  const store = configureStore({
    reducer: combineReducers(staticReducers),
  }) as any;

  store.asyncReducers = {};

  // ৩. ইনজেকশন মেথড লজিক
  store.injectReducer = (key: string, asyncReducer: Reducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(
      combineReducers({
        ...staticReducers,
        ...store.asyncReducers,
      })
    );
  };

  return store;
}

exports.store = configureAppStore();
\`\`\``
  },
  {
    id: "state-query-70",
    title: "How do you implement query filtering, sorting, or mapping using the select configuration option in TanStack Query?",
    difficulty: "intermediate",
    category: "state-query",
    tags: ["TanStack Query","select option","Data Transformation","Performance"],
    enAnswer: "To transform query data, define a select() callback function inside the useQuery options. It receives the resolved query data as a parameter and returns the filtered, sorted, or mapped result, automatically memoizing the output.",
    bnAnswer: "কুয়েরি ডাটা ফিল্টার বা ট্রান্সফর্ম করতে useQuery অপশনে select() কলব্যাক ফাংশন ডিফাইন করতে হয়। এটি এপিআই থেকে প্রাপ্ত ডাটা রিসিভ করে সর্ট বা ম্যাপ করা আউটপুট রিটার্ন করে এবং মেমোইজেশন নিশ্চিত করে।",
    enExplanation: `### Explanation
The \`select\` option in TanStack Query allows transforming or filtering query results before they reach the component:
- **How it works**: The \`queryFn\` fetches the full payload and saves it to the cache. The \`select\` function takes this cached data, processes it, and returns the slice.
- **Performance Optimization**: The \`select\` function only runs if the cached data changes or if the selector function reference changes.
- **Rendering**: The component only re-renders if the transformed slice of data changes, bypassing updates to other parts of the payload.

### Real-World Example
An API endpoint \`/api/users\` returns 100 users with full profile details. Your component only needs a list of user names for a dropdown menu. Using \`select: (users) => users.map(u => u.name)\` extracts the list, keeping component logic simple.

### Best Practice
Wrap the \`select\` function in \`useCallback\` if it references variables outside the query, or define it outside the component body to maintain reference stability and prevent redundant recalculations.

### Common Mistakes
Forgetting that \`select\` only runs inside the component's hook. The global cache still retains the original full payload returned by the API.

### Code Example
\`\`\`typescript



export function UserNamesDropdown() {
  // Callback memoization is critical to prevent selector recalculations on every render
  const selectUserNames = useCallback((data: any[]) => {
    console.log('Mapping usernames...');
    return data.map((user) => ({ id: user.id, name: user.name }));
  }, []);

  const { data: userNames } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
    
    // Transform full user array to simple ID/Name maps
    select: selectUserNames,
  });

  return (
    <select>
      {userNames?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা
টানস্ট্যাক কুয়েরির \`select\` অপশন কম্পোনেন্টে ডাটা পৌঁছানোর আগে ডাটা মডিফাই বা ট্রান্সফর্ম করার সুযোগ দেয়:
- **কাজের নিয়ম**: \`queryFn\` পুরো ডাটা ক্যাশ করে। \`select\` কাস্টম মেথড ক্যাশ ডাটা ইনপুট নিয়ে কাস্টম ফিল্টার ডাটা রিটার্ন করে।
- **পারফরম্যান্স**: এপিআই ডাটা চেঞ্জ না হলে \`select\` ফাংশন পুনরায় রান করে না (মেমোইজড থাকে)।

### বাস্তব-ভিত্তিক উদাহরণ
ইউজার লিস্ট এপিআই ১০০ জন ইউজারের ইমেইল, মোবাইল ও কাজের বিবরণ সহ ডাটা দেয়। ড্রপডাউন বক্সে দেখাতে আমাদের শুধু ইউজারের নাম লাগবে। \`select: (users) => users.map(u => u.name)\` লিখে দিলে এপিআই ওয়ান-টাইম ডাউনলোড হয়ে ক্যাশে থেকে যাবে এবং পেজ শুধু নাম প্রদর্শন করবে।

### উত্তম অনুশীলন
পুনরায় গণনা বা রান হওয়া ঠেকাতে সিলেক্ট মেথডটিকে কম্পোনেন্টের বাইরে ডিফাইন করুন অথবা কম্পোনেন্ট বডির ভেতর \`useCallback\` দিয়ে ঘিরে রাখুন।

### সাধারণ ভুলসমূহ
\`select\` ব্যবহার করলে ক্যাশ মেমোরির ডাটাও মডিফাই হয়ে যায় ভাবা। ক্যাশে সর্বদা এপিআই-র রিসিভ করা সম্পূর্ণ মূল পে-লোডই স্টোর থাকে।

### কোড উদাহরণ
\`\`\`typescript



export function UserNamesDropdown() {
  // useCallback ব্যবহার করে রেফারেন্স স্টেবল রাখা হলো
  const selectUserNames = useCallback((data: any[]) => {
    console.log('Mapping usernames...');
    return data.map((user) => ({ id: user.id, name: user.name }));
  }, []);

  const { data: userNames } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
    
    // জেসন অ্যারে থেকে শুধুমাত্র আইডি ও নাম সিলেক্ট করা হলো
    select: selectUserNames,
  });

  return (
    <select>
      {userNames?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
\`\`\``
  }
];
