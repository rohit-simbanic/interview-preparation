import type { Question } from '../../types';

export const advancedQuestions: Question[] = [
  {
    id: 'typescript-71',
    title: 'Explain Covariance, Contravariance, and Invariance in TypeScript.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Type Systems', 'Covariance', 'Contravariance'],
    enAnswer: 'Covariance allows a subtype to be assigned where a supertype is expected (returns). Contravariance allows a supertype to be assigned where a subtype is expected (parameters). Invariance requires exact type matches.',
    bnAnswer: 'Covariance একটি সুপারটাইপের স্থানে সাবটাইপ অ্যাসাইন করার অনুমতি দেয় (রিটার্ন টাইপ)। Contravariance একটি সাবটাইপের স্থানে সুপারটাইপ অ্যাসাইন করার অনুমতি দেয় (প্যারামিটার)। Invariance-এ হুবহু টাইপ মিলতে হয়।',
    enExplanation: `### Explanation
These terms describe how subtyping relationships of complex types (like functions or generics) relate to subtyping of their component types:
- **Covariance (producer)**: If \`Dog\` extends \`Animal\`, then \`() => Dog\` is assignable to \`() => Animal\`. Return types are covariant.
- **Contravariance (consumer)**: If \`Dog\` extends \`Animal\`, then \`(a: Animal) => void\` is assignable to \`(d: Dog) => void\`. Function parameters are contravariant under \`strictFunctionTypes\`.
- **Invariance**: Generics or mutable structures where types must match exactly (e.g. read-write arrays).

### Real-World Example
Designing callback handlers. A handler that processes any general \`Animal\` is safe to receive a \`Dog\` object because it will only read animal-level fields. The parameters must accept the broader type.

### Best Practice
Enable \`strictFunctionTypes\` in \`tsconfig.json\` to ensure the compiler flags contravariant parameter mismatches, preventing runtime reference errors.

### Common Mistakes
Assuming function arguments behave covariantly. Expecting \`(d: Dog) => void\` to be assignable to \`(a: Animal) => void\` is unsafe, as the function might call dog-specific methods on a cat.

### Code Example
\`\`\`typescript
class Animal { breed: string = "unknown" }
class Dog extends Animal { bark() { console.log("Woof!") } }

type Provider<T> = () => T;
type Consumer<T> = (arg: T) => void;

let dogProvider: Provider<Dog> = () => new Dog();
let animalProvider: Provider<Animal> = dogProvider; // Covariant (Safe)

let animalConsumer: Consumer<Animal> = (a: Animal) => console.log(a.breed);
let dogConsumer: Consumer<Dog> = animalConsumer; // Contravariant (Safe)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
এই ধারণাসমূহ ব্যাখ্যা করে যে জটিল টাইপগুলোর (যেমন ফাংশন বা জেনেরিকস) সাবটাইপ রিলেশনশিপ তাদের কম্পোনেন্ট টাইপগুলোর ওপর কীভাবে নির্ভর করে:
- **Covariance (প্রডিউসার)**: যদি \`Dog\` ক্লাস \`Animal\` ক্লাসকে এক্সটেন্ড করে, তবে \`() => Dog\` টাইপের ফাংশনকে \`() => Animal\` এ অ্যাসাইন করা যাবে। রিটার্ন টাইপ সবসময় কোভ্যারিয়েন্ট হয়।
- **Contravariance (কনজিউমার)**: যদি \`Dog\` ক্লাস \`Animal\` কে এক্সটেন্ড করে, তবে \`(a: Animal) => void\` টাইপের ফাংশনকে \`(d: Dog) => void\` টাইপে অ্যাসাইন করা যাবে। ফাংশন প্যারামিটার কন্ট্রাভ্যারিয়েন্ট হয়।
- **Invariance**: টাইপ হুবহু এক হতে হয় (যেমন রিড-রাইট উভয় অপারেশন করে এমন অবজেক্ট বা জেনেরিক)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কলব্যাক হ্যান্ডলার ডিজাইন করা। যেকোনো সাধারণ \`Animal\` প্রসেস করতে পারে এমন ফাংশনে \`Dog\` পাস করা নিরাপদ কারণ এটি কেবল অ্যানিম্যাল লেভেলের ফিল্ড অ্যাক্সেস করবে।

### উত্তম অনুশীলন (Best Practice)
প্যারামিটার অ্যাসাইনমেন্টের ভুলগুলো কম্পাইল টাইমে সনাক্ত করতে \`tsconfig.json\` ফাইলে \`strictFunctionTypes\` অপশনটি চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ফাংশন আর্গুমেন্ট কোভ্যারিয়েন্ট আচরণ করবে মনে করা। \`(d: Dog) => void\` কে \`(a: Animal) => void\` এ অ্যাসাইন করা অনিরাপদ, কারণ ফাংশনটি বিড়ালের ওপর কুকুরের মেথড ডাকার চেষ্টা করতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
class Animal { breed: string = "unknown" }
class Dog extends Animal { bark() { console.log("Woof!") } }

type Provider<T> = () => T;
type Consumer<T> = (arg: T) => void;

let dogProvider: Provider<Dog> = () => new Dog();
let animalProvider: Provider<Animal> = dogProvider; // কোভ্যারিয়েন্ট (সুরক্ষিত)

let animalConsumer: Consumer<Animal> = (a: Animal) => console.log(a.breed);
let dogConsumer: Consumer<Dog> = animalConsumer; // কন্ট্রাভ্যারিয়েন্ট (সুরক্ষিত)
\`\`\``
  },
  {
    id: 'typescript-72',
    title: 'Explain Branded Types (Nominal Typing) and how to implement them in TypeScript.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Nominal Typing', 'Branded Types', 'Architecture'],
    enAnswer: 'Branded Types simulate nominal typing by appending a unique, unreachable property flag (the brand) to a type, preventing accidental assignment of structurally identical types.',
    bnAnswer: 'Branded Types টাইপের সাথে একটি ইউনিক বা অদৃশ্য প্রোপার্টি ফ্ল্যাগ (ব্র্যান্ড) যুক্ত করে নমিনাল টাইপিং অনুকরণ করে, যা হুবহু একই স্ট্রাকচারের অন্য টাইপ অ্যাসাইন হওয়া প্রতিরোধ করে।',
    enExplanation: `### Explanation
TypeScript uses a structural type system (if two objects have the same shape, they are identical). Nominal typing requires matching names, not just shapes.
- **Branding**: We intersect a base type (e.g. \`string\`) with a unique object signature containing a brand literal.
- **Casting**: Developers must use type assertions or validation helpers to "cast" standard primitives into branded types.

### Real-World Example
Preventing bugs where a developer accidentally passes a \`UserId\` to a function expecting a \`CompanyId\` (both are database strings at runtime, but structurally incompatible at compile time).

### Best Practice
Use branded types for critical identifiers (IDs, Emails, currency amounts, validated inputs) to ensure they are validated before entry.

### Common Mistakes
Trying to instantiate branded types directly without cast validations. The compiler will reject it because the brand key doesn't actually exist at runtime.

### Code Example
\`\`\`typescript
// Define brand symbols
type Brand<K, T> = K & { readonly __brand: T };

// Declaring nominal types
type UserId = Brand<string, 'UserId'>;
type CompanyId = Brand<string, 'CompanyId'>;

// Validation constructors
function makeUserId(id: string): UserId {
  return id as UserId;
}

function fetchUser(id: UserId) {
  console.log("Fetching user:", id);
}

const rawId = "usr_8890";
// fetchUser(rawId); // Error: Argument of type 'string' is not assignable to parameter of type 'UserId'.
fetchUser(makeUserId(rawId)); // Safe!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট স্ট্রাকচারাল টাইপ সিস্টেম ব্যবহার করে (যদি দুটি অবজেক্টের স্ট্রাকচার একই হয়, তবে তাদের এক ধরা হয়)। নমিনাল টাইপিংয়ে শুধু স্ট্রাকচার নয়, টাইপের নামও মিলতে হয়।
- **Branding**: আমরা মূল টাইপটিকে (যেমন \`string\`) একটি ইউনিক অবজেক্ট সিগনেচারের সাথে ইন্টারসেক্ট করাই যা একটি ব্র্যান্ড নাম ধারণ করে।
- **কাস্টিং**: রানটাইমে এই প্রোপার্টি থাকে না, তাই ডেভেলপারদের কাস্টিং ফাংশন বা অ্যাসার্সন দিয়ে ডাটা টাইপ কনভার্ট করে নিতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ফাংশন যেখানে \`CompanyId\` পাস করার কথা, সেখানে ভুলবশত \`UserId\` পাস করা রোধ করা (রানটাইমে দুটিই স্ট্রিং হলেও কম্পাইল টাইমে তারা ইনকমপ্যাটিবল হয়ে যাবে)।

### উত্তম অনুশীলন (Best Practice)
গুরুত্বপূর্ণ আইডেন্টিফায়ার (যেমন ইউজার আইডি, কারেন্সি ফরম্যাট বা ইমেইল) ব্র্যান্ডেড টাইপ হিসেবে ডিফাইন করুন যাতে এগুলো রানটাইম চেকের পর টাইপ সেফ থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভ্যালিডেশন ছাড়া সরাসরি ব্র্যান্ডেড টাইপ ডিক্লেয়ার করার চেষ্টা করা। ব্র্যান্ড কি-টি না থাকায় সরাসরি অবজেক্ট অ্যাসাইন করা যাবে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ব্র্যান্ড হেল্পার টাইপ
type Brand<K, T> = K & { readonly __brand: T };

// নমিনাল টাইপসমূহ ঘোষণা
type UserId = Brand<string, 'UserId'>;
type CompanyId = Brand<string, 'CompanyId'>;

// কনভার্টার বা ভ্যালিডেটর ফাংশন
function makeUserId(id: string): UserId {
  return id as UserId;
}

function fetchUser(id: UserId) {
  console.log("Fetching user:", id);
}

const rawId = "usr_8890";
// fetchUser(rawId); // এরর: Argument of type 'string' is not assignable to parameter of type 'UserId'.
fetchUser(makeUserId(rawId)); // সুরক্ষিত!
\`\`\``
  },
  {
    id: 'typescript-73',
    title: 'Explain the infer keyword in Conditional Types and how it is used.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Conditional Types', 'Infer Keyword', 'Metaprogramming'],
    enAnswer: 'The infer keyword is used within conditional type checks to declare a type variable that can be dynamically extracted and referenced in the true branch.',
    bnAnswer: 'infer কি-ওয়ার্ড কন্ডিশনাল টাইপ চেকের ভেতরে এমন একটি টাইপ ভ্যারিয়েবল ডিক্লেয়ার করতে ব্যবহৃত হয় যা ট্রু-ব্রাঞ্চে ডাইনামিকালি এক্সট্র্যাক্ট করে রেফারেন্স করা যায়।',
    enExplanation: `### Explanation
The \`infer\` keyword allows you to introduce a type variable inside the \`extends\` clause of a conditional type:
- **Syntax**: \`T extends SomeType<infer U> ? U : Alternative\`
- **Dynamic Capture**: TypeScript inspects \`T\` and, if it matches \`SomeType\`, extracts the internal parameter type and binds it to the alias \`U\`.
- It is the foundation of utility types like \`ReturnType\` and \`Parameters\`.

### Real-World Example
Extracting the resolved payload of a Promise or the inner component properties of generic wrappers without having to look up source definitions.

### Best Practice
Use \`infer\` to build robust metaprogramming helpers that extract nested generic arguments in third-party library types.

### Common Mistakes
Using \`infer\` outside of the \`extends\` clause of a conditional type, which triggers a syntax error.

### Code Example
\`\`\`typescript
// Extract the resolved type of a Promise
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<number>;          // number (not a promise, returns original)

// Extract the first argument of a function
type FirstArgument<F> = F extends (arg1: infer U, ...args: any[]) => any ? U : never;

type MyFunc = (name: string, age: number) => void;
type InferredArg = FirstArgument<MyFunc>; // string
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`infer\` কি-ওয়ার্ড কন্ডিশনাল টাইপের \`extends\` ক্লজের ভেতরে একটি টাইপ ভ্যারিয়েবল ডিক্লেয়ার করার অনুমতি দেয়:
- **সিনট্যাক্স**: \`T extends SomeType<infer U> ? U : Alternative\`
- **ডাইনামিক ক্যাপচার**: টাইপস্ক্রিপ্ট \`T\` কে চেক করে এবং ম্যাচ করলে এর ভেতরের প্যারামিটার টাইপটিকে এক্সট্র্যাক্ট করে \`U\` অ্যালিয়াসে বাইন্ড করে।
- এটি \`ReturnType\` বা \`Parameters\` এর মতো ইউটিলিটি টাইপের মূল ভিত্তি।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি প্রমিজের (Promise) ভেতরের মূল রেসপন্স ডাটা টাইপ অথবা জেনেরিক ক্লাসের ইন্টারনাল টাইপ আলাদা করে সোর্স কোড না দেখেই সরাসরি বের করে আনা।

### উত্তম অনুশীলন (Best Practice)
থার্ড-পার্টি লাইব্রেরির জেনেরিক প্যারামিটার থেকে টাইপ বের করার ক্ষেত্রে মেটাপ্রোগ্রামিং হেল্পার ডিজাইন করতে \`infer\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কন্ডিশনাল টাইপের \`extends\` ক্লজের বাইরে \`infer\` ব্যবহার করার চেষ্টা করা, যা সিনট্যাক্স এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// প্রমিজ টাইপ আনর‍্যাপ করার ইউটিলিটি
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<number>;          // number (প্রমিজ নয়, তাই অরিজিনাল থাকবে)

// ফাংশনের প্রথম আর্গুমেন্ট বের করার ইউটিলিটি
type FirstArgument<F> = F extends (arg1: infer U, ...args: any[]) => any ? U : never;

type MyFunc = (name: string, age: number) => void;
type InferredArg = FirstArgument<MyFunc>; // string
\`\`\``
  },
  {
    id: 'typescript-74',
    title: 'Explain Distributive Conditional Types and how to prevent distribution.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Conditional Types', 'Distributive', 'Unions'],
    enAnswer: 'Conditional types distribute automatically over union types when the checked parameter is a naked type parameter. Surrounding the checked type in square brackets ([T]) prevents distribution.',
    bnAnswer: 'কন্ডিশনাল টাইপ চেক করার প্যারামিটারটি যদি একটি naked টাইপ প্যারামিটার হয়, তবে এটি ইউনিয়নের ওপর স্বয়ংক্রিয়ভাবে ডিস্ট্রিবিউট হয়। চেক করা টাইপটিকে ব্র্যাকেট ([T]) দিয়ে আবৃত করলে ডিস্ট্রিবিউশন বন্ধ হয়।',
    enExplanation: `### Explanation
- **Distribution**: If \`T\` is a union \`A | B\`, then \`T extends U ? X : Y\` resolves to \`(A extends U ? X : Y) | (B extends U ? X : Y)\`.
- **Naked Type Parameter**: A type parameter not wrapped in other structures (like arrays, tuples, or promises).
- **Preventing Distribution**: Sometimes you want to check the union *as a single entity* rather than checking each member individually. Wrapping both sides of the \`extends\` check in square brackets (e.g. \`[T] extends [U]\`) turns off distribution.

### Real-World Example
In complex frameworks, writing a checker that verifies if a full union type is exactly assignable to another union, rather than filtering union elements one-by-one.

### Best Practice
Always wrap generic variables in square brackets in conditional types when checking the union type structure itself.

### Common Mistakes
Forgetting that naked parameters distribute, leading to unexpected union transformations instead of a simple true/false type evaluation.

### Code Example
\`\`\`typescript
// Distributive Type
type ToArray<Type> = Type extends any ? Type[] : never;
type StrOrNumArray = ToArray<string | number>; 
// Result: string[] | number[] (Distributed!)

// Non-Distributive Type (Using square brackets)
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type UnionArray = ToArrayNonDist<string | number>;
// Result: (string | number)[] (Not distributed!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ডিস্ট্রিবিউশন (Distribution)**: যদি \`T\` এর মান \`A | B\` ইউনিয়ন হয়, তবে \`T extends U ? X : Y\` লজিকটি পরিণত হয় \`(A extends U ? X : Y) | (B extends U ? X : Y)\` এ।
- **Naked Type Parameter**: কোনো অবজেক্ট, টাপল বা অ্যারো চিহ্নের ভেতরে না থেকে সরাসরি একা থাকা টাইপ প্যারামিটার।
- **ডিস্ট্রিবিউশন বন্ধ করা**: মাঝে মাঝে আমরা ইউনিয়ন টাইপটির প্রতিটি মেম্বার আলাদা চেক না করে পুরো ইউনিয়নকে *একটি ইউনিট* হিসেবে যাচাই করতে চাই। এ ক্ষেত্রে কন্ডিশনাল চেকের উভয় পাশে স্কয়ার ব্র্যাকেট (যেমন \`[T] extends [U]\`) ব্যবহার করলে ডিস্ট্রিবিউশন বন্ধ হয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি পুরো ইউনিয়ন টাইপ অন্য কোনো ইউনিয়নের সাথে হুবহু ম্যাচ করে কিনা তা চেক করার সময় (আলাদা মেম্বার চেক না করে পুরো গ্রুপ ভ্যালিডেশন)।

### উত্তম অনুশীলন (Best Practice)
ইউনিক বা গ্রুপ টাইপ ভ্যালিডেশনের ক্ষেত্রে ডিস্ট্রিবিউশন এড়াতে কন্ডিশনাল টাইপে ভ্যারিয়েবলগুলোকে থার্ড ব্র্যাকেট দিয়ে মুড়ে রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
ডিস্ট্রিবিউশন ফিচারটি ভুলে যাওয়া, যার ফলে সাধারণ ট্রু/ফলস মূল্যায়নের বদলে সম্পূর্ণ নতুন একটি ইউনিয়ন টাইপ তৈরি হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ডিস্ট্রিবিউটিভ টাইপ
type ToArray<Type> = Type extends any ? Type[] : never;
type StrOrNumArray = ToArray<string | number>; 
// আউটপুট: string[] | number[] (আলাদা আলাদা ডিস্ট্রিবিউট হয়েছে!)

// নন-ডিস্ট্রিবিউটিভ টাইপ (থার্ড ব্র্যাকেট ব্যবহার করে)
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type UnionArray = ToArrayNonDist<string | number>;
// আউটপুট: (string | number)[] (একত্রিত টাপল, ডিস্ট্রিবিউট হয়নি!)
\`\`\``
  },
  {
    id: 'typescript-75',
    title: 'How do you create a DeepReadonly utility type in TypeScript?',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Mapped Types', 'Recursive Types'],
    enAnswer: 'A DeepReadonly utility type uses recursive mapped types to apply the readonly modifier to every property level of an object, including arrays and nested sub-objects.',
    bnAnswer: 'DeepReadonly ইউটিলিটি টাইপ রিকার্সিভ ম্যাপড টাইপ ব্যবহার করে কোনো অবজেক্টের সব লেভেলের প্রোপার্টি (অ্যারে এবং নেস্টেড সাব-অবজেক্ট সহ) রিড-অনলি মোডে কনভার্ট করে।',
    enExplanation: `### Explanation
The built-in \`Readonly<T>\` utility is shallow, meaning nested objects can still be modified at runtime.
- **DeepReadonly**: Solves this by checking if each property type is an object (or function/array) and recursively calling \`DeepReadonly\` on it.
- **Base Cases**: We check if a property is a primitive or function, returning it directly if so. If it is an array or object, we map and call recursively.

### Real-World Example
Freezing global state or configuration files in high-performance react applications to guarantee absolute immutability down to nested attributes.

### Best Practice
Define a robust base-case filter to ensure functions, maps, or sets are not broken by recursive mapping.

### Common Mistakes
Forgetting to handle arrays or functions separately, which turns methods into broken read-only object schemas.

### Code Example
\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

interface UserInfo {
  name: string;
  preferences: {
    theme: string;
    languages: string[];
  };
}

const user: DeepReadonly<UserInfo> = {
  name: "Rohit",
  preferences: {
    theme: "dark",
    languages: ["en", "bn"]
  }
};

// user.preferences.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.
// user.preferences.languages.push("es"); // Error: push does not exist on read-only array.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
বিল্ট-ইন \`Readonly<T>\` ইউটিলিটি শ্যালো (shallow), যা নেস্টেড অবজেক্টের মিউটেশন থামাতে পারে না।
- **DeepReadonly**: এই সীমাবদ্ধতা দূর করতে প্রতিটি প্রোপার্টি অবজেক্ট বা অ্যারে কিনা তা চেক করে এবং রিকার্সিভলি (পুনরাবৃত্তিমূলকভাবে) সেই সাব-অবজেক্টের ওপর \`DeepReadonly\` এপ্লাই করে।
- **বেস কেস**: ফাংশন বা প্রিমিটিভ হলে সরাসরি টাইপটি রিটার্ন করা হয়, আর অ্যারে বা অবজেক্ট হলে ম্যাপ করে রিকার্সিভ কল করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
গ্লোবাল স্টেট বা কনফিগারেশন ফাইল ফ্রিজ করা যাতে কোনোভাবেই নেস্টেড অবজেক্ট পরিবর্তন করতে না পারে।

### উত্তম অনুশীলন (Best Practice)
ফাংশন, ম্যাপ বা সেট যেন রিকার্সিভ ম্যাপিংয়ের কারণে ভেঙে না যায় সেজন্য বেস-কেস ফিল্টারগুলো সঠিকভাবে লিখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অ্যারে বা ফাংশনকে আলাদাভাবে হ্যান্ডেল করতে ভুলে যাওয়া, যার ফলে অবজেক্ট মেথডগুলো ভেঙে যেতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

interface UserInfo {
  name: string;
  preferences: {
    theme: string;
    languages: string[];
  };
}

const user: DeepReadonly<UserInfo> = {
  name: "Rohit",
  preferences: {
    theme: "dark",
    languages: ["en", "bn"]
  }
};

// user.preferences.theme = "light"; // এরর: Cannot assign to 'theme' because it is a read-only property.
// user.preferences.languages.push("es"); // এরর: push মেথড রিড-অনলি অ্যারেতে নেই।
\`\`\``
  },
  {
    id: 'typescript-76',
    title: 'How do you create a DeepPartial utility type in TypeScript?',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Mapped Types', 'Recursive Types'],
    enAnswer: 'DeepPartial recursively marks all properties and nested sub-objects of a type T as optional using recursive conditional mapped types.',
    bnAnswer: 'DeepPartial রিকার্সিভ কন্ডিশনাল ম্যাপড টাইপ ব্যবহার করে কোনো টাইপ T-এর সমস্ত প্রোপার্টি এবং নেস্টেড সাব-অবজেক্টকে অপশনাল বা ঐচ্ছিক হিসেবে সেট করে।',
    enExplanation: `### Explanation
The default \`Partial<T>\` utility type only makes the top-level keys optional. If you have nested configurations, they still require all child properties during state updates.
- **DeepPartial**: Iterates through all keys and, if the value is an object or array, recursively applies \`DeepPartial\` to it.
- **Syntax**: Checks \`T[P] extends object\` to determine whether to recurse or stop.

### Real-World Example
Updating complex application settings. In a PATCH request, you might want to send only a single nested field (e.g. \`{ preferences: { theme: "light" } }\`) without specifying the other nested properties.

### Best Practice
Filter function classes or arrays to prevent converting function parameter signatures into optional properties.

### Common Mistakes
Using standard shallow \`Partial\`, which forces writing all fields of nested sub-objects even if you only want to update a single value.

### Code Example
\`\`\`typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

interface AppSettings {
  api: {
    endpoint: string;
    retries: number;
  };
  ui: {
    sidebarOpen: boolean;
    colors: string[];
  };
}

// Allows updating nested attributes partially
const update: DeepPartial<AppSettings> = {
  api: {
    endpoint: "https://api.test.com"
    // 'retries' is optional here!
  }
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্ট \`Partial<T>\` ইউটিলিটি কেবল প্রথম লেভেলের কি-গুলোকে অপশনাল করে। নেস্টেড কনফিগারেশন থাকলে আপডেটের সময় সব চাইল্ড প্রোপার্টি দিতেই হয়।
- **DeepPartial**: সব প্রোপার্টির কি-সমূহ ইটারেট করে এবং ভ্যালুটি অবজেক্ট বা অ্যারে হলে তার ওপর রিকার্সিভলি \`DeepPartial\` অ্যাপ্লাই করে।
- **সিনট্যাক্স**: \`T[P] extends object\` দিয়ে চেক করে রিকার্সিভ কল চালিয়ে যাওয়া হবে নাকি বন্ধ করা হবে তা নির্ধারণ করা হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
জটিল অ্যাপ্লিকেশন সেটিংস আপডেট করা। একটি PATCH রিকোয়েস্টে আপনি হয়তো কেবল একটি নেস্টেড ফিল্ড পাঠাতে চান (যেমন \`{ preferences: { theme: "light" } }\`), বাকি নেস্টেড প্রোপার্টিগুলোর টাইপ অপশনাল রাখতে চান।

### উত্তম অনুশীলন (Best Practice)
ফাংশন ক্লাসের প্যারামিটার যেন ভুলবশত অপশনাল প্রোপার্টিতে রূপান্তর না হয়ে যায় সেজন্য ফিল্টার ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ শ্যালো \`Partial\` ব্যবহার করা, যা কেবল একটি ফিল্ড আপডেট করতে চাইলেও নেস্টেড অবজেক্টের বাকি সব সাব-ফিল্ড টাইপ করতে বাধ্য করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

interface AppSettings {
  api: {
    endpoint: string;
    retries: number;
  };
  ui: {
    sidebarOpen: boolean;
    colors: string[];
  };
}

// নেস্টেড ফিল্ড আংশিক বা পারশিয়ালি আপডেট করার অনুমতি দেয়
const update: DeepPartial<AppSettings> = {
  api: {
    endpoint: "https://api.test.com"
    // 'retries' এখানে অপশনাল হিসেবে কাজ করবে!
  }
};
\`\`\``
  },
  {
    id: 'typescript-77',
    title: 'Explain Key Remapping in Mapped Types using the as keyword.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Mapped Types', 'Key Remapping', 'Metaprogramming'],
    enAnswer: 'Key Remapping uses the as keyword in a mapped type declaration to filter, transform, or rename object keys using template literal types or conditionals.',
    bnAnswer: 'Key Remapping একটি ম্যাপড টাইপ ডিক্লেয়ারেশনে as কি-ওয়ার্ড ব্যবহার করে টেমপ্লেট লিটারেল বা কন্ডিশনালের মাধ্যমে অবজেক্টের কি-সমূহ ফিল্টার, ট্রান্সফর্ম বা রিনেম করে।',
    enExplanation: `### Explanation
In standard mapped types, you are locked to the exact property names of the source type. Key Remapping (introduced in TS 4.1) lets you modify the keys themselves:
- **Syntax**: \`[K in keyof T as NewKeyType]: T[K]\`
- **Use Cases**: Prefixes/suffixes using template literals, renaming based on types, or filtering keys out by mapping them to \`never\`.

### Real-World Example
Automatically generating getter/setter type maps for a state interface, or filtering an interface to only keep keys that represent function calls.

### Best Practice
Leverage key remapping to generate type-safe APIs for dynamically generated objects, keeping types clean and DRY.

### Common Mistakes
Forgetting that remapping keys to \`never\` filters them out completely from the resulting object type structure.

### Code Example
\`\`\`typescript
// Remap keys to getters format
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface User {
  id: string;
  name: string;
}

type UserGetters = Getters<User>;
/*
Resulting Type:
{
  getId: () => string;
  getName: () => string;
}
*/

// Filter keys by type (Keep only function properties)
type FunctionProperties<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ ম্যাপড টাইপে আপনি সোর্স টাইপের প্রোপার্টির নাম পরিবর্তন করতে পারেন না। Key Remapping (TS 4.1 এ যুক্ত) কি (keys) পরিবর্তনের সুবিধা দেয়:
- **সিনট্যাক্স**: \`[K in keyof T as NewKeyType]: T[K]\`
- **ব্যবহার**: টেমপ্লেট লিটারেল ব্যবহার করে সাফিক্স/প্রিফিক্স যুক্ত করা, টাইপের ওপর ভিত্তি করে রিনেম করা অথবা কোনো কি-কে \`never\` এ ম্যাপ করে ফিল্টার করা।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি স্টেট ইন্টারফেসের জন্য স্বয়ংক্রিয়ভাবে গেটার/সেটার টাইপ জেনারেট করা, অথবা কোনো ইন্টারফেস থেকে কেবল মেথড প্রোপার্টিগুলো ফিল্টার করে রাখা।

### উত্তম অনুশীলন (Best Practice)
ডাইনামিক অবজেক্টের টাইপ সেফটি বজায় রাখতে কি রিম্যাপিং ব্যবহার করুন, যা কোডবেসে টাইপগুলোর ডুপ্লিকেশন কমাবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
কোনো কি-কে \`never\` এ রিম্যাপ করলে সেটি আউটপুট অবজেক্টের স্ট্রাকচার থেকে সম্পূর্ণ বাদ চলে যায়, এটি খেয়াল না রাখা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// কি-সমূহকে গেটার ফরম্যাটে রিম্যাপ করা
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface User {
  id: string;
  name: string;
}

type UserGetters = Getters<User>;
/*
নতুন টাইপ:
{
  getId: () => string;
  getName: () => string;
}
*/

// টাইপের ওপর ভিত্তি করে কি ফিল্টার করা (কেবল ফাংশন প্রোপার্টি রাখবে)
type FunctionProperties<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
\`\`\``
  },
  {
    id: 'typescript-78',
    title: 'Explain Decorators in TypeScript and the TS 5.0 Stage 3 decorator standards.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Decorators', 'OOP', 'TS 5.0'],
    enAnswer: 'Decorators are functions that intercept and modify classes, methods, accessors, or fields. TS 5.0 implements the official Stage 3 JS proposal, which does not require experimental flags.',
    bnAnswer: 'ডেকোরেটরস হলো এমন ফাংশন যা ক্লাস, মেথড, অ্যাক্সেসর বা ফিল্ডকে ইন্টারসেপ্ট ও মডিফাই করে। TS 5.0 অফিশিয়াল Stage 3 JS প্রস্তাবনা ইমপ্লিমেন্ট করে, যার জন্য কোনো এক্সপেরিমেন্টাল ফ্ল্যাগ লাগে না।',
    enExplanation: `### Explanation
Decorators provide metaprogramming capabilities to decorate classes and class members:
- **Legacy Decorators**: Under \`experimentalDecorators\`, used in Angular and NestJS. They are non-standard.
- **TS 5.0 Decorators**: Follow the Stage 3 TC39 ECMAScript standard. They take specific context objects as parameters describing metadata (like name, private status, and initializer details).
- **Execution**: They wrap target declarations and return modified definitions or wrappers.

### Real-World Example
Building loggers or route managers in class-based backend controllers. A \`@logged\` decorator wraps class methods to automatically log inputs and performance timings during execution.

### Best Practice
Migrate new codebases to TS 5.0 standard decorators instead of using the legacy experimental system to ensure long-term runtime compatibility.

### Common Mistakes
Mixing legacy experimental decorators with the TS 5.0 Stage 3 decorators syntax. They are incompatible and compile differently.

### Code Example
\`\`\`typescript
// TS 5.0 Stage 3 Method Decorator
function loggedMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);
  
  return function (this: This, ...args: Args): Return {
    console.log(\`Calling method: \${methodName}\`);
    return target.apply(this, args);
  };
}

class UserService {
  @loggedMethod
  getUser(id: string) {
    return { id, name: "Rohit" };
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডেকোরেটরস ক্লাস এবং ক্লাসের মেম্বারদের সাজাতে মেটাপ্রোগ্রামিং সুবিধা প্রদান করে:
- **লিগ্যাসি ডেকোরেটরস**: \`experimentalDecorators\` এর অধীনে কাজ করে যা Angular ও NestJS-এ ব্যবহৃত হয়। তবে এগুলো কোনো স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট ফিচার ছিল না।
- **TS 5.0 ডেকোরেটরস**: Stage 3 TC39 ECMAScript স্ট্যান্ডার্ড অনুসরণ করে। এগুলো প্যারামিটার হিসেবে মেটাডাটা সহ একটি কনটেক্সট অবজেক্ট নেয় (যেমন নাম, প্রাইভেট স্ট্যাটাস)।
- **কার্যপদ্ধতি**: এগুলো টার্গেট ডিক্লেয়ারেশনকে র‍্যাপ করে নতুন ইমপ্লিমেন্টেশন বা মডিফাইড মেথড রিটার্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ক্লাস-ভিত্তিক ব্যাকএন্ড কন্ট্রোলারে রুট বা লগার ম্যানেজ করা। একটি \`@logged\` ডেকোরেটর মেথডকে র‍্যাপ করে মেথডটি চালু হলে স্বয়ংক্রিয়ভাবে পারফরম্যান্স এবং ইনপুট কনসোলে প্রিন্ট করতে পারে।

### উত্তম অনুশীলন (Best Practice)
দীর্ঘমেয়াদী রানটাইম সামঞ্জস্যের জন্য পুরোনো এক্সপেরিমেন্টাল এভয়েড করে নতুন কোডবেসগুলোতে TS 5.0 স্ট্যান্ডার্ড ডেকোরেটর ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
লিগ্যাসি এক্সপেরিমেন্টাল ডেকোরেটরের সাথে TS 5.0 Stage 3 ডেকোরেটর সিনট্যাক্স গুলিয়ে ফেলা। এদের টাইপ এবং আর্গুমেন্ট সম্পূর্ণ ভিন্ন।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// TS 5.0 Stage 3 মেথড ডেকোরেটর
function loggedMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);
  
  return function (this: This, ...args: Args): Return {
    console.log(\`Calling method: \${methodName}\`);
    return target.apply(this, args);
  };
}

class UserService {
  @loggedMethod
  getUser(id: string) {
    return { id, name: "Rohit" };
  }
}
\`\`\``
  },
  {
    id: 'typescript-79',
    title: 'Explain Recursive Type Aliases and how to type JSON structures or Trees.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Recursive Types', 'JSON', 'Data Structures'],
    enAnswer: 'Recursive Type Aliases refer to themselves within their own definitions, which is required for typing self-referential nested structures like JSON, linked lists, or trees.',
    bnAnswer: 'রিকার্সিভ টাইপ অ্যালিয়াস নিজের ডেফিনিশনের ভেতরে নিজেকেই রেফারেন্স করে, যা JSON, লিঙ্কড লিস্ট বা ট্রির মতো সেলফ-রেফারেন্সিয়াল নেস্টেড ডেটা টাইপ করতে প্রয়োজনীয়।',
    enExplanation: `### Explanation
Prior to TS 3.7, recursive types had to be declared using interfaces. Now, type aliases can directly refer to themselves:
- **Recursive Base**: The type contains primitive branches alongside nested self-referential branches.
- **Compile Resolving**: TypeScript resolves these recursively up to compiler depth limits.

### Real-World Example
Typing arbitrary JSON payloads from external systems. A JSON value is either a string, number, boolean, null, an array of JSON values, or a key-value record of JSON values.

### Best Practice
Use recursive type aliases for directory structures, abstract syntax trees (ASTs), nested navigation menus, or JSON payload parsers.

### Common Mistakes
Creating infinite recursions without a primitive base case, which results in the compiler running out of memory or throwing circular reference errors.

### Code Example
\`\`\`typescript
// Type safe JSON Representation
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

const config: JSONObject = {
  appName: "App",
  retries: 3,
  features: {
    darkMode: true,
    languages: ["en", "bn"]
  }
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট ৩.৭ এর আগে রিকার্সিভ টাইপ কেবল ইন্টারফেস দিয়েই লিখতে হতো। এখন টাইপ অ্যালিয়াস সরাসরি নিজের বডিতে নিজেকেই রেফার করতে পারে:
- **রিকার্সিভ বেস**: টাইপের মধ্যে কিছু প্রিমিটিভ ব্রাঞ্চ থাকে এবং পাশাপাশি নেস্টেড সেলফ-রেফারেন্সিয়াল কন্ডিশনাল ব্রাঞ্চ থাকে।
- **কম্পাইল রেজোলিউশন**: কম্পাইলার মেমোরি ফুরিয়ে যাওয়া রোধ করতে একটি নির্দিষ্ট ডেপথ পর্যন্ত রিকার্সিভ রেজোলিউশন সম্পন্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
যেকোনো কাস্টম JSON ডাটা টাইপ করা। একটি ভ্যালিড JSON ভ্যালু হতে পারে স্ট্রিং, নম্বর, বুলিয়ান, নাল, অথবা এদেরই অ্যারে কিংবা কি-ভ্যালু অবজেক্ট।

### উত্তম অনুশীলন (Best Practice)
ডিরেক্টরি ডোমেইন, নেস্টেড নেভিগেশন সাইডবার মেনু বা JSON ডাটা টাইপিংয়ের জন্য রিকার্সিভ টাইপ ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
বেস প্রিমিটিভ কেস ছাড়া ইনফিনিট সার্কুলার রিকার্সিভ টাইপ তৈরি করা, যার ফলে কম্পাইলার মেমোরি লিমিট পার করে ক্র্যাশ করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// টাইপ-সেফ JSON রিপ্রেজেন্টেশন
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

const config: JSONObject = {
  appName: "App",
  retries: 3,
  features: {
    darkMode: true,
    languages: ["en", "bn"]
  }
};
\`\`\``
  },
  {
    id: 'typescript-80',
    title: 'How do you enforce Nominal Typing using unique symbols or private fields?',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Nominal Typing', 'Unique Symbols', 'OOP'],
    enAnswer: 'Nominal typing can be enforced by adding a private field to classes or intersecting object types with a unique symbol brand, preventing structural matches.',
    bnAnswer: 'ক্লাসে প্রাইভেট ফিল্ড যুক্ত করে অথবা অবজেক্ট টাইপের সাথে একটি ইউনিক সিম্বল ব্র্যান্ড ইন্টারসেক্ট করিয়ে নমিনাল টাইপিং জোরদার করা যায়, যা স্ট্রাকচারাল ম্যাচিং রোধ করে।',
    enExplanation: `### Explanation
By default, class checking in TS is structural. Two classes with identical fields are assignable to each other. To make classes nominally checked:
- **Private Fields**: Add a \`private\` or protected property (e.g. \`private _brand: any\`). Classes with private properties are only assignable if they originate from the exact same declaration.
- **Unique Symbols**: Intersect type definitions with a unique symbol brand: \`type ID = string & { readonly brand: unique symbol }\`.

### Real-World Example
In microservice architectures, separating class instances of \`AdminSession\` and \`UserSession\` even if both contain identical session-token properties.

### Best Practice
Use private fields in domain-driven class designs to prevent arbitrary matching, keeping class inheritance strict and secure.

### Common Mistakes
Forgetting that \`public\` properties do not prevent structural assignments. If the class only has public fields, identical classes will still merge and assign without errors.

### Code Example
\`\`\`typescript
// Class structural bypass example (Unsafe without private fields)
class ClassA {
  constructor(public id: string) {}
}
class ClassB {
  constructor(public id: string) {}
}
let a: ClassA = new ClassB("1"); // Works (structural!)

// Nominal Class using Private Fields
class NominalUser {
  private _brand!: void; // Enforces Nominal typing
  constructor(public name: string) {}
}

class NominalAdmin {
  private _brand!: void;
  constructor(public name: string) {}
}

let user: NominalUser = new NominalUser("Rohit");
// let admin: NominalUser = new NominalAdmin("Rohit"); 
// Error: Types have separate declarations of a private property '_brand'.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্টে ক্লাস চেকিং ডিফল্টভাবে স্ট্রাকচারাল হয়। একই ফিল্ডযুক্ত দুটি ক্লাসকে একে অপরে অ্যাসাইন করা যায়। ক্লাসকে নমিনাল করতে:
- **প্রাইভেট ফিল্ড**: ক্লাসে একটি \`private\` বা protected প্রোপার্টি যুক্ত করুন (যেমন \`private _brand: void\`)। প্রাইভেট প্রোপার্টি থাকলে কেবল অরিজিনাল ক্লাস ডেফিনিশনের ইনস্ট্যান্সই অ্যাসাইন করা যাবে।
- **ইউনিক সিম্বল**: অবজেক্ট টাইপের সাথে ইউনিক সিম্বল ব্র্যান্ড যুক্ত করা: \`type ID = string & { readonly brand: unique symbol }\`।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
মাইক্রোসার্ভিস আর্কিটেকচারে \`AdminSession\` এবং \`UserSession\` ক্লাস দুটিকে আলাদা রাখা, যদিও তাদের ভেতরের সেশন টোকেন প্রোপার্টিগুলো হুবহু একই রকম।

### উত্তম অনুশীলন (Best Practice)
ক্লাস মডেল ডিজাইনের সময় ভুলবশত অ্যাসাইনমেন্ট এড়াতে এবং কড়া ইনহেরিটেন্স ডোমেইন আর্কিটেকচার বজায় রাখতে প্রাইভেট ফিল্ড ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কেবল \`public\` প্রোপার্টি দিয়ে নমিনাল সেফটি আশা করা। সব পাবলিক ফিল্ড থাকলে যেকোনো অবজেক্ট স্ট্রাকচারালি মিলে গেলেই অ্যাসাইন হয়ে যাবে।

### Code Example
\`\`\`typescript
// ক্লাস স্ট্রাকচারাল বাইপাস (প্রাইভেট ফিল্ড ছাড়া অনিরাপদ)
class ClassA {
  constructor(public id: string) {}
}
class ClassB {
  constructor(public id: string) {}
}
let a: ClassA = new ClassB("1"); // পাস হবে (স্ট্রাকচারাল!)

// প্রাইভেট ফিল্ড ব্যবহারের মাধ্যমে নমিনাল ক্লাস তৈরি
class NominalUser {
  private _brand!: void; // নমিনাল টাইপিং এনফোর্স করছে
  constructor(public name: string) {}
}

class NominalAdmin {
  private _brand!: void;
  constructor(public name: string) {}
}

let user: NominalUser = new NominalUser("Rohit");
// let admin: NominalUser = new NominalAdmin("Rohit"); 
// এরর: Types have separate declarations of a private property '_brand'.
\`\`\``
  },
  {
    id: 'typescript-81',
    title: 'Explain Structural Typing vs Nominal Typing and the limitations of structural typing in TypeScript.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Type Systems', 'Structural Typing', 'Nominal Typing'],
    enAnswer: 'Structural typing matches shapes; if two types have the same members, they are compatible. Nominal typing matches explicit declarations. Limitations include accidental compatibilities and lack of units safety.',
    bnAnswer: 'স্ট্রাকচারাল টাইপিং অবজেক্টের শেপ বা স্ট্রাকচার দেখে মিল খুঁজে বের করে। নমিনাল টাইপিং স্পষ্ট টাইপ নেম বা ডিক্লেয়ারেশন চেক করে। স্ট্রাকচারালের অসুবিধা হলো ভুলবশত একই শেপের ডাটা মার্জ হয়ে যাওয়া।',
    enExplanation: `### Explanation
- **Structural Typing**: "Duck typing" at compile-time. If it walks like a duck and quacks like a duck, it is a duck.
- **Nominal Typing**: Found in languages like Java, C#, where type compatibility is determined by explicit declarations/names.
- **Limitations in TS**:
  - Accidental type assignment of unrelated structures with the same keys.
  - No native support for units of measurement (e.g., passing meters to a function expecting seconds).

### Real-World Example
Accidentally passing a coordinate object \`{ x: number, y: number }\` to a 2D size validator expecting \`{ width: number, height: number }\` if the keys were mistakenly mapped to similar identifiers or renamed.

### Best Practice
Utilize branded types or unique classes with private fields where nominal safety is critical (payment, security, authorization contexts).

### Common Mistakes
Relying on object structure alone for sensitive validation parameters, which allows malicious inputs matching structural definitions to pass compile-time verification.

### Code Example
\`\`\`typescript
interface Vector2D {
  x: number;
  y: number;
}

interface Point2D {
  x: number;
  y: number;
}

const printVector = (v: Vector2D) => {
  console.log("Vector:", v.x, v.y);
};

const point: Point2D = { x: 5, y: 10 };
printVector(point); // Allowed! TS compiles because the structures match perfectly.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **স্ট্রাকচারাল টাইপিং (Structural Typing)**: এটি কম্পাইল-টাইমে "ডাক টাইপিং" এর মতো কাজ করে। যদি কোনো অবজেক্টের সব রিকোয়ার্ড ফিল্ড মিলে যায়, তবে টাইপ সেফ ধরা হয়।
- **নমিনাল টাইপিং (Nominal Typing)**: জাভা বা সি-শার্পের মতো ল্যাঙ্গুয়েজে থাকে যেখানে ভ্যালুর স্ট্রাকচার নয়, তার সুনির্দিষ্ট নাম বা ডিক্লেয়ারেশন মিলতে হয়।
- **টাইপস্ক্রিপ্টে সীমাবদ্ধতা**:
  - ভিন্ন কাজের দুটি আলাদা অবজেক্টের কি (keys) একই হলে তারা একে অপরের সাথে মার্জ হয়ে যায়।
  - পরিমাপের ইউনিটে সেফটি থাকে না (যেমন মিটারের ভ্যালুর স্থানে সেকেন্ডের ভ্যালু পাস হয়ে যাওয়া)।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কোঅর্ডিনেট অবজেক্ট \`{ x: number, y: number }\` কে ভুলবশত পয়েন্ট রেন্ডারার ফাংশনে পাস করে দেওয়া, কারণ স্ট্রাকচার এক হওয়ায় টাইপস্ক্রিপ্ট এটিকে এরর দেয় না।

### উত্তম অনুশীলন (Best Practice)
পেমেন্ট ট্রানজ্যাকশন, রোল এবং অথরাইজেশন ফিল্ডের মতো সেনসিটিভ জায়গায় কড়া নমিনাল ভেরিফিকেশন পেতে ব্র্যান্ডেড টাইপ বা প্রাইভেট ক্লাস মেম্বার ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সিকিউরিটি ভ্যালিডেশনের ক্ষেত্রে শুধুমাত্র অবজেক্টের স্ট্রাকচারের ওপর ভরসা করা, যা অনেক সময় কম্পাইল টাইমে মারাত্মক বাগ লুকিয়ে রাখতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface Vector2D {
  x: number;
  y: number;
}

interface Point2D {
  x: number;
  y: number;
}

const printVector = (v: Vector2D) => {
  console.log("Vector:", v.x, v.y);
};

const point: Point2D = { x: 5, y: 10 };
printVector(point); // কোনো এরর ছাড়াই পাস হবে! কারণ স্ট্রাকচার সম্পূর্ণ মিলে গেছে।
\`\`\``
  },
  {
    id: 'typescript-82',
    title: 'How do you write Ambient Declarations for assets like CSS Modules or image files?',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Ambient Declarations', 'CSS Modules', 'Assets'],
    enAnswer: 'Ambient module declarations tell the compiler that imports ending in specific extensions (like .module.css or .png) yield specific types, resolving module import issues.',
    bnAnswer: 'অ্যাম্বিয়েন্ট মডিউল ডিক্লেয়ারেশনস কম্পাইলারকে জানায় যে নির্দিষ্ট এক্সটেনশনযুক্ত ফাইল ইম্পোর্ট করলে (যেমন .module.css বা .png) নির্দিষ্ট কোনো টাইপ পাওয়া যাবে।',
    enExplanation: `### Explanation
By default, the TypeScript compiler only understands JavaScript, TypeScript, and JSON imports. Importing a png or a css file throws a module resolution error.
- **Ambient Modules**: We use \`declare module "*.svg"\` or \`declare module "*.module.css"\` to define wildcard imports and tell TS what type the imported asset resolves to at runtime.

### Real-World Example
React application bundlers (Vite/Webpack) allow importing images as url strings or CSS Modules as key-value class dictionaries. Ambient modules make these imports compile-safe.

### Best Practice
Place asset ambient declarations in a central declaration file (e.g. \`vite-env.d.ts\` or \`react-app-env.d.ts\`) managed at the project root.

### Common Mistakes
Forgetting the wildcard \`*\` symbol in the declaration module string, which makes the compiler resolve only the exact name string rather than all matching files.

### Code Example
\`\`\`typescript
// assets.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

// React usage
import logo from './logo.png'; // Compiled as string (URL)
import styles from './styles.module.css'; // Compiled as string record

console.log(logo); // "static/media/logo.png"
console.log(styles.header); // string classname
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে টাইপস্ক্রিপ্ট কেবল JS, TS এবং JSON ফাইল চেনে। কোনো ইমেজ (png) বা সিএসএস ফাইল ইম্পোর্ট করলে এটি মডিউল রেজোলিউশন এরর দেয়।
- **অ্যাম্বিয়েন্ট মডিউলস**: আমরা \`declare module "*.svg"\` বা \`declare module "*.module.css"\` ওয়াইল্ডকার্ড ব্যবহার করে কম্পাইলারকে জানাই যে এই ফাইলগুলোর আউটপুট কেমন হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React অ্যাপে ইমেজের ইউআরএল স্ট্রিং হিসেবে ইম্পোর্ট করা অথবা CSS Modules এর ক্লাসগুলোকে ডিকশনারি হিসেবে ইম্পোর্ট করা। অ্যাম্বিয়েন্ট মডিউল এটি টাইপ-সেফ করে।

### উত্তম অনুশীলন (Best Practice)
প্রজেক্টের রুট ডিরেক্টরিতে একটি সেন্ট্রাল ডিক্লেয়ারেশন ফাইল (যেমন \`vite-env.d.ts\` বা \`env.d.ts\`) রাখুন যেখানে সব অ্যাসেট ম্যাপ করা থাকবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মডিউল স্ট্রিংয়ের ভেতরে ওয়াইল্ডকার্ড \`*\` দিতে ভুলে যাওয়া, যার ফলে কেবল ওই হুবহু নামের নির্দিষ্ট ফাইল ছাড়া বাকি ফাইলগুলো ইম্পোর্ট এরর দেখায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// assets.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

// React ব্যবহার
import logo from './logo.png'; // স্ট্রিং (URL) হিসেবে রিড হবে
import styles from './styles.module.css'; // ক্লাস ডিকশনারি হিসেবে রিড হবে

console.log(logo); // "static/media/logo.png"
console.log(styles.header); // স্ট্রিং ক্লাসনেম
\`\`\``
  },
  {
    id: 'typescript-83',
    title: 'Explain Triple-Slash Directives vs ES Modules imports in declaration files.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Directives', 'ES Modules', 'Declaration Files'],
    enAnswer: 'Triple-slash directives are single-line XML-like comments that resolve dependencies between declaration files. ES modules are standard runtime imports used in application code.',
    bnAnswer: 'ট্রিপল-স্ল্যাশ ডিরেক্টিভস হলো XML-এর মতো সিঙ্গেল-লাইন কমেন্ট যা ডিক্লেয়ারেশন ফাইলের ডিপেন্ডেন্সি রেজোলিউশনে কাজ করে। ES modules অ্যাপ্লিকেশন লেভেলে কোড ইম্পোর্ট করতে ব্যবহৃত হয়।',
    enExplanation: `### Explanation
- **Triple-Slash Directives**: XML-based comments like \`/// <reference path="..." />\` or \`/// <reference types="..." />\`. They tell the compiler to include extra declaration files in the build compilation process.
- **ES Modules**: Standard JavaScript \`import\` statements.
- **Key Difference**: ES imports resolve at runtime. Triple-slash references are purely compiler directives to resolve missing ambient types without producing import code.

### Real-World Example
Typing a Node framework. Using a triple-slash directive to reference ambient \`node\` types at the top of a library config file to load namespaces without generating JS import code.

### Best Practice
Only use triple-slash directives inside declaration files (\`.d.ts\`) or scripts compiling to global variables. For regular application code, always use ES modules import syntax.

### Common Mistakes
Using triple-slash references in normal ts files when a standard ES import would be cleaner and supported by standard bundlers.

### Code Example
\`\`\`typescript
// library.d.ts
// References node types globally without generating import require statements
/// <reference types="node" />

interface GlobalServer {
  server: import("http").Server;
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **ট্রিপল-স্ল্যাশ ডিরেক্টিভস (Triple-Slash Directives)**: XML-ভিত্তিক কমেন্ট যেমন \`/// <reference types="..." />\`। এগুলো কম্পাইলারকে বিল্ড প্রসেসে অতিরিক্ত ডিক্লেয়ারেশন ফাইল যুক্ত করার নির্দেশ দেয়।
- **ES Modules**: স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট \`import\` স্টেটমেন্ট।
- **মূল পার্থক্য**: ES modules রানটাইমে কোড লোড করতে সাহায্য করে। ট্রিপল-স্ল্যাশ রেফারেন্সগুলো রানটাইম কোড জেনারেট না করে কম্পাইল-টাইম টাইপ ডিফাইন বা এরর এড়াতে ব্যবহৃত হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি নোড ডট জেএস ফ্রেমওয়ার্ক টাইপ করা। লাইব্রেরির কনফিগারেশন ফাইলের ওপর ট্রিপল-স্ল্যাশ ডিরেক্টিভ ব্যবহার করে নোড টাইপকে রেফারেন্স করা যাতে রানটাইমে কোনো এক্সট্রা ইম্পোর্ট কোড তৈরি না হয়।

### উত্তম অনুশীলন (Best Practice)
ট্রিপল-স্ল্যাশ ডিরেক্টিভ কেবল \`.d.ts\` ফাইল বা গ্লোবাল স্ক্রিপ্ট কনফিগারেশনেই ব্যবহার করুন। সাধারণ অ্যাপ্লিকেশন কোড লেখার সময় স্ট্যান্ডার্ড ES Modules ইম্পোর্ট করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
সাধারণ \`.ts\` ফাইলের ভেতরে ট্রিপল-স্ল্যাশ রেফারেন্স ব্যবহার করা, যেখানে সাধারণ ES import দিয়ে সহজেই কাজ সম্পন্ন করা যেত।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// library.d.ts
// কোনো রানটাইম ইম্পোর্ট জেনারেট না করেই গ্লোবাল নোড টাইপকে রেফারেন্স করছে
/// <reference types="node" />

interface GlobalServer {
  server: import("http").Server;
}
\`\`\``
  },
  {
    id: 'typescript-84',
    title: 'Explain the TypeScript Compiler API and the Abstract Syntax Tree (AST).',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Compiler API', 'AST', 'Linting', 'Metaprogramming'],
    enAnswer: 'The Compiler API allows programmatically parsing, analyzing, and transforming TS code. The AST is a tree representation of the code structure generated by the parser.',
    bnAnswer: 'কম্পাইলার API প্রোগ্রামের মাধ্যমে TS কোড পার্স, অ্যানালাইসিস এবং ট্রান্সফর্ম করার সুবিধা দেয়। AST হলো পার্সার দ্বারা তৈরি কোডের স্ট্রাকচারের একটি ট্রি রিপ্রেজেন্টেশন।',
    enExplanation: `### Explanation
- **TypeScript Compiler API**: The core library powering \`tsc\`. It exposes parsers, printers, and type checkers.
- **AST (Abstract Syntax Tree)**: When TS compiles code, it first parses text into a tree of nodes (e.g. \`VariableDeclaration\` or \`FunctionDeclaration\` nodes).
- **Scanner / Parser**: Breaks code into tokens and builds the AST.
- **Binder / Checker**: Resolves symbols and checks types across files.

### Real-World Example
Building custom linters (like ESLint rules), code generators (like automatic swagger schema creators), or codemods that refactor code automatically.

### Best Practice
Use online AST tools (like AST Explorer) to visualize the node structure before writing custom Compiler API scripts.

### Common Mistakes
Trying to check types using only the AST parser. To check types, you must instantiate a Program and TypeChecker, which is resource-intensive.

### Code Example
\`\`\`typescript
import * as ts from 'typescript';

const sourceCode = "const message: string = 'Hello';";

// Create AST SourceFile Node
const sourceFile = ts.createSourceFile(
  'temp.ts',
  sourceCode,
  ts.ScriptTarget.ES2022,
  true
);

// Traverse AST Nodes
function printNodes(node: ts.Node, indent = "") {
  console.log(\`\${indent}\${ts.SyntaxKind[node.kind]}\`);
  node.forEachChild(child => printNodes(child, indent + "  "));
}

printNodes(sourceFile);
// Output will show: SourceFile -> VariableStatement -> VariableDeclarationList ...
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **TypeScript Compiler API**: এটি \`tsc\` এর মূল লাইব্রেরি। এটি ডেভেলপারদের প্রোগ্রামের সাহায্যে কোড পার্সিং, এডিটিং ও টাইপ চেকিং করতে দেয়।
- **AST (Abstract Syntax Tree)**: টাইপস্ক্রিপ্ট যখন কোড কম্পাইল করে, তখন টেক্সট ফাইলটিকে নোডের ট্রিতে রূপান্তর করে (যেমন \`FunctionDeclaration\` বা \`IfStatement\` নোড)।
- **স্ক্যানার ও পার্সার**: কোডকে ছোট ছোট টোকেনে ভাগ করে এবং AST তৈরি করে।
- **বাইন্ডার ও চেকার**: সিম্বল বা ফাইলের টাইপ ভেরিফিকেশন চেক সম্পন্ন করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
কাস্টম লিন্টার তৈরি করা (যেমন কাস্টম ESLint রুলস), কোড জেনারেটর বা রিফ্যাক্টরিং হেল্পার কোড লিখা যা সম্পূর্ণ কোডবেস অটো রিফ্যাক্টর করতে পারে।

### উত্তম অনুশীলন (Best Practice)
Compiler API এর কোড লেখার আগে AST Explorer এর মতো অনলাইন টুলের সাহায্যে নোড অবজেক্টের ভিজ্যুয়াল লেআউট দেখে নিন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কেবল মাত্র AST পার্সার দিয়ে টাইপ চেক করতে যাওয়া। টাইপ চেক করার জন্য একটি Program ও TypeChecker অবজেক্ট লোড করতে হয়, যা বেশি মেমোরি খরচ করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
import * as ts from 'typescript';

const sourceCode = "const message: string = 'Hello';";

// AST সোর্স ফাইল নোড তৈরি করা হচ্ছে
const sourceFile = ts.createSourceFile(
  'temp.ts',
  sourceCode,
  ts.ScriptTarget.ES2022,
  true
);

// AST নোড ট্রাভার্স করা
function printNodes(node: ts.Node, indent = "") {
  console.log(\`\${indent}\${ts.SyntaxKind[node.kind]}\`);
  node.forEachChild(child => printNodes(child, indent + "  "));
}

printNodes(sourceFile);
// আউটপুট দেখাবে: SourceFile -> VariableStatement -> VariableDeclarationList ...
\`\`\``
  },
  {
    id: 'typescript-85',
    title: 'What is Contextual Typing in TypeScript and how does it work?',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Type Inference', 'Contextual Typing'],
    enAnswer: 'Contextual Typing occurs when the type of an expression is implied by its location, allowing the compiler to infer types without explicit annotations.',
    bnAnswer: 'কনটেক্সচুয়াল টাইপিং ঘটে যখন কোনো এক্সপ্রেশনের টাইপ তার লোকেশন বা পজিশন দ্বারা ইনফার করা হয়, যার ফলে কোনো স্পষ্ট ডিক্লেয়ারেশন ছাড়াই টাইপ অ্যাসাইন সম্ভব হয়।',
    enExplanation: `### Explanation
Normally, types are inferred from the value on the right-hand side. Contextual Typing works in reverse: the left-hand side context determines the type of the right-hand expression:
- **Triggers**: Callback parameters in functions, object literals in assignments, array literals.
- **Advantage**: Prevents having to manually annotate obvious variables in inline callbacks.

### Real-World Example
Attaching event listeners in React or JavaScript. In \`window.onmousedown\`, the parameter \`e\` is automatically contextually typed as \`MouseEvent\` without writing \`(e: MouseEvent)\`.

### Best Practice
Rely on contextual typing for inline callback arguments. Only annotate when extracting the callback function to a separate variable definition.

### Common Mistakes
Extracting a callback function and forgetting that it loses its contextual typing. Inline function parameter has type safety; separated function parameter defaults to \`any\` if not annotated.

### Code Example
\`\`\`typescript
// Contextual typing for event handler
window.onmousedown = function (mouseEvent) {
  // mouseEvent is contextually typed as MouseEvent!
  console.log(mouseEvent.button); // Safe, compiler knows buttons exist on MouseEvent
};

// Separated function loses context
const myHandler = (e) => {
  // e is inferred as 'any' (if noImplicitAny: false) or throws error!
  console.log(e.button);
};
// window.onmousedown = myHandler;
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণত ডান পাশের ভ্যালু দেখে টাইপ ইনফার করা হয়। কনটেক্সচুয়াল টাইপিং উল্টোভাবে কাজ করে: বাম পাশের কনটেক্সট বা লোকেশন দেখে ডান পাশের টাইপ ইনফার করা হয়:
- **ট্রিগার**: ইভেন্ট কলব্যাক প্যারামিটার, অবজেক্ট লিটারেল অ্যাসাইনমেন্ট এবং অ্যারে লিটারেল।
- **সুবিধা**: ইনলাইন কলব্যাকগুলোতে প্যারামিটারের ম্যানুয়াল টাইপ ডিক্লেয়ারেশন অনেক কমিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React বা JS এ ইভেন্ট লিসেনার ব্যবহার করা। \`window.onmousedown\` ফাংশনের প্যারামিটার \`e\` কে আলাদা করে \`(e: MouseEvent)\` না লিখলেও টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে তার টাইপ ধরে নেয়।

### উত্তম অনুশীলন (Best Practice)
ইনলাইন কলব্যাকের ক্ষেত্রে কনটেক্সচুয়াল টাইপিংয়ের সুবিধা নিন। তবে কলব্যাক ফাংশনটি বাইরে আলাদা ভ্যারিয়েবলে ডিফাইন করলে অবশ্যই টাইপ ডিক্লেয়ার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
কলব্যাক ফাংশন আলাদা ভ্যারিয়েবলে লিখার পর টাইপ ডিক্লেয়ার না করা। ইনলাইন না রাখলে এটি কনটেক্সচুয়াল টাইপিং হারায় এবং প্যারামিটার টাইপ \`any\` হয়ে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// ইভেন্ট হ্যান্ডলারে কনটেক্সচুয়াল টাইপিং
window.onmousedown = function (mouseEvent) {
  // mouseEvent স্বয়ংক্রিয়ভাবে MouseEvent টাইপ ইনফার করবে
  console.log(mouseEvent.button); // সেফ, কম্পাইলার চেনে
};

// আলাদা ডিফাইন করলে কনটেক্সট হারিয়ে যায়
const myHandler = (e) => {
  // e এর টাইপ any হয়ে যাবে অথবা এরর দিবে!
  console.log(e.button);
};
// window.onmousedown = myHandler;
\`\`\``
  },
  {
    id: 'typescript-86',
    title: 'Explain the Best Common Type algorithm in TypeScript type inference.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Type Inference', 'Compiler Rules'],
    enAnswer: 'The Best Common Type algorithm selects a candidate type from all array/object expression elements that is compatible with all other elements, creating a union if no single type fits.',
    bnAnswer: 'Best Common Type অ্যালগরিদম কোনো অ্যারে বা অবজেক্টের সমস্ত উপাদান থেকে এমন একটি টাইপ নির্বাচন করে যার সাথে অন্য সব উপাদান সামঞ্জস্যপূর্ণ, অন্যথায় ইউনিয়ন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
When inferring the type of an array with multiple elements, TypeScript looks at each element's type and picks a "candidate type" that matches all elements:
- **Logic**: If multiple types are present (e.g. \`Dog\` and \`Cat\` extending \`Animal\`), it checks if one type is a supertype of all others.
- **Union fallback**: If no single candidate can represent all elements, the compiler falls back to a union type of all elements (\`Dog | Cat\`).

### Real-World Example
Declaring mixed lists like arrays of items containing numbers and nulls. TS infers the array type as \`(number | null)[]\`.

### Best Practice
If you want an array to be typed as the base superclass (e.g., \`Animal[]\`), explicitly annotate the variable, otherwise the compiler may narrow it to a union of subclasses.

### Common Mistakes
Expecting the compiler to auto-climb to an unmentioned base interface. If you declare \`[new Dog(), new Cat()]\`, it will infer \`(Dog | Cat)[]\` rather than \`Animal[]\` unless explicitly annotated.

### Code Example
\`\`\`typescript
class Animal {}
class Dog extends Animal { bark = 1 }
class Cat extends Animal { meow = 1 }

// 1. Inferred as (Dog | Cat)[] because neither is a supertype of the other.
const zoo = [new Dog(), new Cat()];

// 2. Inferred as Animal[] because Animal is explicitly specified as the candidate.
const properZoo: Animal[] = [new Dog(), new Cat()];

// 3. Inferred as (number | null)[]
const scores = [90, 85, null];
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
যখন কোনো একাধিক ভিন্ন উপাদান সমৃদ্ধ অ্যারের টাইপ ইনফার করা হয়, তখন টাইপস্ক্রিপ্ট প্রতিটি উপাদানের টাইপ এনালাইসিস করে একটি "ক্যান্ডিডেট টাইপ" নির্বাচন করে:
- **লজিক**: যদি একাধিক টাইপ থাকে (যেমন \`Dog\` ও \`Cat\` যা \`Animal\` কে এক্সটেন্ড করে), তবে এটি দেখে যে কোনো একটি টাইপ বাকি সব উপাদানের সুপারটাইপ কিনা।
- **ইউনিয়ন ফলব্যাক**: যদি এমন কোনো সিঙ্গেল টাইপ না পাওয়া যায় যা সবাইকে রিপ্রেজেন্ট করতে পারে, তবে কম্পাইলার উপাদানগুলোর একটি ইউনিয়ন টাইপ (\`Dog | Cat\`) তৈরি করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি অ্যারেতে নম্বর ও নাল ভ্যালু মিক্সড থাকলে, টাইপস্ক্রিপ্ট তার টাইপ স্বয়ংক্রিয়ভাবে \`(number | null)[]\` হিসেবে ইনফার করবে।

### উত্তম অনুশীলন (Best Practice)
আপনি যদি চান অ্যারেটি সুপারক্লাসের টাইপ নিক (যেমন \`Animal[]\`), তবে স্পষ্টভাবে টাইপ ডিক্লেয়ার করুন, অন্যথায় এটি চাইল্ড ক্লাসগুলোর ইউনিয়ন টাইপ তৈরি করবে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ধরে নেওয়া যে কম্পাইলার নিজে থেকেই সুপারক্লাস চিনে নেবে। \`[new Dog(), new Cat()]\` লিখলে এটি \`Animal[]\` না বানিয়ে \`(Dog | Cat)[]\` বানাবে যদি না আপনি স্পেসিফিক ডিক্লেয়ারেশন দেন।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
class Animal {}
class Dog extends Animal { bark = 1 }
class Cat extends Animal { meow = 1 }

// ১. (Dog | Cat)[] হিসেবে ইনফার হবে কারণ একে অপরকে এক্সটেন্ড করে না
const zoo = [new Dog(), new Cat()];

// ২. Animal[] হিসেবে ইনফার হবে কারণ স্পষ্টভাবে সুপারক্লাস ডিফাইন করা হয়েছে
const properZoo: Animal[] = [new Dog(), new Cat()];

// ৩. (number | null)[] হিসেবে ইনফার হবে
const scores = [90, 85, null];
\`\`\``
  },
  {
    id: 'typescript-87',
    title: 'Explain Method Chaining and Fluent APIs typing using the this type.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Design Patterns', 'Method Chaining', 'Fluent API'],
    enAnswer: 'The polymorphic this return type allows methods in classes to return the current instance, preserving method chaining even after class inheritance.',
    bnAnswer: 'পলিমরফিক this রিটার্ন টাইপ ক্লাসের মেথডগুলোকে বর্তমান ইনস্ট্যান্স রিটার্ন করার সুবিধা দেয়, যা ক্লাস ইনহেরিটেন্সের পরেও মেথড চেইনিং সেফটি বজায় রাখে।',
    enExplanation: `### Explanation
When building fluent APIs or builders, methods return \`this\`.
- **Polymorphic \`this\`**: If you type the return as \`this\`, child classes automatically inherit the correct context.
- **Advantage**: If \`BasicCalculator\` is extended by \`ScientificCalculator\`, chained methods on the child class return \`ScientificCalculator\` instances, not the parent class instance.

### Real-World Example
Building query builders (like Knex or Prisma query interfaces) where you chain filters (\`.where()\`, \`.limit()\`) and want the return types to stay chained to the specific subclass.

### Best Practice
Always return \`this\` as the return type annotation in fluent builders to ensure subclass compatibility.

### Common Mistakes
Typing the return as the parent class name instead of \`this\`. If you return \`BasicCalculator\` from a method, sub-classes will lose access to child-specific methods once a parent method is called.

### Code Example
\`\`\`typescript
class BasicCalculator {
  constructor(protected value: number = 0) {}

  add(val: number): this {
    this.value += val;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
}

const calc = new ScientificCalculator(0);
calc.add(5).sin(); // Chaining works! sin() is available even after add() because add() returned 'this'.
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ফ্লুয়েন্ট API বা বিল্ডার প্যাটার্ন তৈরির সময় মেথডগুলো সাধারণত \`this\` রিটার্ন করে।
- **পলিমরফিক \`this\`**: মেথডের রিটার্ন টাইপ হিসেবে \`this\` ডিক্লেয়ার করলে সাব-ক্লাসগুলো স্বয়ংক্রিয়ভাবে তাদের নিজস্ব টাইপ কনটেক্সট বজায় রাখে।
- **সুবিধা**: যদি \`BasicCalculator\` কে \`ScientificCalculator\` এক্সটেন্ড করে, তবে সাবক্লাসের মেথড চেইন তার চাইল্ড ইনস্ট্যান্সই রিটার্ন করবে, প্যারেন্ট ক্লাসের অবজেক্ট নয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ডাটাবেজ কুয়েরি বিল্ডার তৈরি করা যেখানে মেথড চেইনের মাধ্যমে ফিল্টার (\`.where()\`, \`.limit()\`) যুক্ত করা হয় এবং প্রতিটি চেইন কল চাইল্ড ক্লাস অবজেক্ট রিটার্ন করে।

### উত্তম অনুশীলন (Best Practice)
ফ্লুয়েন্ট এপিআই বা বিল্ডার ক্লাসের মেথডে টাইপ ডিক্লেয়ারেশনের জন্য ক্লাস নেমের বদলে স্পষ্টভাবে \`this\` টাইপ রিটার্ন লিখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
রিটার্ন টাইপ হিসেবে \`this\` না লিখে প্যারেন্ট ক্লাস নেম লিখে রাখা, যার ফলে প্যারেন্ট মেথডটি চেইনের মাঝে কল হওয়ার সাথে সাথে চাইল্ড মেথডের ওপর আর অ্যাক্সেস থাকে না।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
class BasicCalculator {
  constructor(protected value: number = 0) {}

  add(val: number): this {
    this.value += val;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
}

const calc = new ScientificCalculator(0);
calc.add(5).sin(); // মেথড চেইনিং কাজ করবে! add() কল করার পরও sin() পাওয়া যাচ্ছে কারণ add() 'this' রিটার্ন করেছে।
\`\`\``
  },
  {
    id: 'typescript-88',
    title: 'Explain Path Aliasing configurations in tsconfig.json.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Path Aliases', 'Bundlers'],
    enAnswer: 'Path Aliasing maps absolute paths to custom prefixes using paths options in tsconfig.json, eliminating nested relative imports.',
    bnAnswer: 'Path Aliasing tsconfig.json-এর paths কনফিগারেশন ব্যবহার করে কাস্টম প্রিফিক্সের সাথে অ্যাবসোলিউট পাথ ম্যাপ করে, যা নেস্টেড রিলেটিভ ইম্পোর্ট এড়াতে সাহায্য করে।',
    enExplanation: `### Explanation
Deep relative imports like \`import { user } from "../../../components/user"\` are difficult to maintain. Path aliasing resolves this:
- **\`baseUrl\`**: The root folder to resolve non-relative module names.
- **\`paths\`**: A map defining alias patterns and their physical directories. Example: \`"@/*": ["src/*"]\`.
- **Bundler Sync**: The bundler (Vite, Webpack) must also be configured with matching aliases to resolve imports at bundle time.

### Real-World Example
Using \`import { Button } from "@/components/Button"\` anywhere in a Next.js or React Vite project to make import paths clean and refactoring-safe.

### Best Practice
Keep aliases simple. The standard prefix is \`@/\`. Ensure your bundler configurations align with the TS alias maps.

### Common Mistakes
Forgetting that TypeScript path mapping *only* helps the compiler check types. It does not output resolved relative path strings in the compiled JavaScript unless post-processed by a build tool or package like \`tsconfig-paths\`.

### Code Example
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}

// In app.ts
// import { formatData } from '@/utils/format'; // Works clean!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
নেস্টেড রিলেটিভ পাথ যেমন \`import { user } from "../../../components/user"\` মেইনটেইন করা জটিল। এই সমস্যা সমাধানে পাথ অ্যালিয়াসিং:
- **\`baseUrl\`**: রিলেটিভ পাথ বাদে অন্যান্য মডিউল রেজোলিউশনের জন্য রুট ডিরেক্টরি নির্ধারণ করে।
- **\`paths\`**: অ্যালিয়াস প্রিফিক্স এবং তাদের ফিজিক্যাল লোকেশনের একটি ম্যাপিং তৈরি করে। যেমন: \`"@/*": ["src/*"]\`।
- **বান্ডলার সিঙ্ক**: ফাইল রান করানোর জন্য টাইপস্ক্রিপ্টের সাথে সাথে বান্ডলার (যেমন Vite বা Webpack) এর কনফিগারেশনেও একই ম্যাপ সেট করতে হয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় Next.js বা React Vite প্রজেক্টে যেকোনো ফাইল থেকে সরাসরি \`import { Button } from "@/components/Button"\` ব্যবহার করে ক্লিন ইম্পোর্ট পাথ তৈরি করা।

### উত্তম অনুশীলন (Best Practice)
অ্যালিয়াস ম্যাপিং সহজ রাখুন। স্ট্যান্ডার্ড প্র্যাকটিস হিসেবে \`@/\` প্রিফিক্স ব্যবহার করুন এবং বান্ডলারের কনফিগারেশন এর সাথে সিঙ্ক রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে টাইপস্ক্রিপ্ট নিজেই পাথগুলোকে রানটাইম ফাইলে রিলেটিভ বানাবে। এটি কেবল কম্পাইল-টাইম টাইপ চেকিংয়ে সাহায্য করে; বিল্ড করার জন্য প্লাগইন বা বান্ডলার কনফিগারেশনের প্রয়োজন হয়।

### কোড উদাহরণ (Code Example)
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}

// app.ts ফাইলে
// import { formatData } from '@/utils/format'; // পরিষ্কার ও সুরক্ষিত!
\`\`\``
  },
  {
    id: 'typescript-89',
    title: 'Explain Project References in tsconfig.json and their benefits in monorepos.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Project References', 'Monorepo'],
    enAnswer: 'Project References allow splitting a single TypeScript program into smaller, independent projects, optimizing compilation times through incremental caching in monorepos.',
    bnAnswer: 'Project References একটি সিঙ্গেল টাইপস্ক্রিপ্ট প্রোগ্রামকে ছোট ছোট স্বাধীন প্রজেক্টে ভাগ করার সুবিধা দেয়, যা মোনোরেপো প্রজেক্টে ইনক্রিমেন্টাল ক্যাশিংয়ের মাধ্যমে কম্পাইলেশন টাইম কমায়।',
    enExplanation: `### Explanation
In large monorepos, running \`tsc\` over the entire codebase slows down development. Project References solve this:
- **Syntax**: Declared using the \`references\` array pointing to other subdirectories with their own \`tsconfig.json\`.
- **Caching**: The compiler builds referenced projects first and caches type definitions (\`.d.ts\` outputs).
- **Isolation**: Prevents circular dependencies between packages.

### Real-World Example
A monorepo containing a \`shared\` package, a \`frontend\` package, and a \`backend\` package. The backend and frontend refer to the shared package. Changes in the frontend do not trigger recompilation of backend code.

### Best Practice
Enable \`composite: true\` in referenced projects to force TypeScript to output helper files needed for incremental compilation.

### Common Mistakes
Forgetting to compile the referenced projects before compiling the master project, causing resolution errors.

### Code Example
\`\`\`json
// packages/backend/tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist"
  },
  "references": [
    { "path": "../shared" }
  ]
}

// packages/shared/tsconfig.json
{
  "compilerOptions": {
    "composite": true, // Required for project references
    "declaration": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
বড় আকারের মোনোরেপোতে সম্পূর্ণ কোডবেসে একসাথে \`tsc\` চালালে বিল্ড প্রসেস অত্যন্ত ধীর হয়ে যায়। এই সমাধান করে Project References:
- **সিনট্যাক্স**: রুট বা সাব-প্রজেক্টের \`tsconfig.json\` ফাইলে \`references\` অ্যারে দিয়ে অন্য সাব-প্রজেক্টের পাথ দেখিয়ে দেওয়া হয়।
- **ক্যাশিং**: কম্পাইলার প্রথমে রেফারেন্সড প্রজেক্ট বিল্ড করে তাদের টাইপ ফাইল (\`.d.ts\`) ক্যাশ করে রাখে।
- **আইসোলেশন**: প্যাকেজগুলোর মধ্যে সার্কুলার ডিপেন্ডেন্সি বা ভুল ইম্পোর্ট হওয়া রোধ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি মোনোরেপোতে \`shared\` (কমন লজিক), \`frontend\` এবং \`backend\` প্যাকেজ আছে। ফ্রন্টএন্ড প্যাকেজে কোনো কোড পরিবর্তন হলে ব্যাকএন্ড কোড নতুন করে কম্পাইল করার প্রয়োজন হয় না।

### উত্তম অনুশীলন (Best Practice)
রেফারেন্সড প্রজেক্টগুলোর \`tsconfig.json\` এ \`composite: true\` অপশনটি অন রাখুন, যা ইনক্রিমেন্টাল বিল্ড ফাইল তৈরি করতে সাহায্য করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
মূল প্রজেক্ট বিল্ড করার আগে রেফারেন্সড বা ডিপেন্ডেন্ট প্যাকেজগুলো বিল্ড না করা, যার ফলে মডিউল নট ফাউন্ড এরর হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`json
// packages/backend/tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist"
  },
  "references": [
    { "path": "../shared" }
  ]
}

// packages/shared/tsconfig.json
{
  "compilerOptions": {
    "composite": true, // প্রজেক্ট রেফারেন্সের জন্য আবশ্যক
    "declaration": true
  }
}
\`\`\``
  },
  {
    id: 'typescript-90',
    title: 'Explain declaration file generation (declaration and declarationMap flags).',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Declaration Files', 'Source Maps'],
    enAnswer: 'declaration: true outputs .d.ts files containing type signatures. declarationMap: true generates source maps linking the .d.ts files back to the original TS source code.',
    bnAnswer: 'declaration: true টাইপ সিগনেচার সমৃদ্ধ .d.ts ফাইল তৈরি করে। declarationMap: true সোর্স ম্যাপ জেনারেট করে যা .d.ts ফাইলগুলোকে অরিজিনাল TS সোর্স ফাইলের সাথে লিঙ্ক করে।',
    enExplanation: `### Explanation
These flags in \`tsconfig.json\` control how types are exported for consumption:
- **\`declaration\`**: When set to \`true\`, the compiler generates matching \`.d.ts\` declaration files alongside compiled JS files.
- **\`declarationMap\`**: Generates source map files (\`.d.ts.map\`). This is crucial because it links declaration types back to the actual \`.ts\` code. When users use "Go to Definition" in their IDE, they are taken to the readable source code rather than the compiled declaration stub.

### Real-World Example
Publishing an internal npm package. Enabling these flags allows team members to install the package and easily debug issues because their editor links type diagnostics back to the package's original TS source code.

### Best Practice
Enable both \`declaration\` and \`declarationMap\` in shared library configurations to improve the developer experience of consumers.

### Common Mistakes
Enabling \`declarationMap\` but forgetting to publish the original source files (\`.ts\` files) inside the npm package, which breaks the mapping link.

### Code Example
\`\`\`json
// tsconfig.json for a library
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist"
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
\`tsconfig.json\`-এর এই ফ্ল্যাগগুলো আউটপুট টাইপ ফাইল জেনারেশন নিয়ন্ত্রণ করে:
- **\`declaration\`**: এটি \`true\` থাকলে কম্পাইলার প্রজেক্ট বিল্ডের সময় প্রতিটি জাভাস্ক্রিপ্ট ফাইলের জন্য কসপন্ডিং \`.d.ts\` টাইপ ফাইল তৈরি করে।
- **\`declarationMap\`**: এটি \`.d.ts.map\` সোর্স ম্যাপ ফাইল তৈরি করে। যখন ব্যবহারকারী এডিটরে "Go to Definition" এ ক্লিক করেন, তখন এটি টাইপ ফাইলের বদলে সরাসরি অরিজিনাল সোর্স কোডে নিয়ে যায়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি কাস্টম NPM লাইব্রেরি পাবলিশ করা। এই দুটি ফ্ল্যাগ চালু রাখলে আপনার টিমের অন্য সদস্যরা প্রজেক্টে লাইব্রেরিটি ব্যবহার করার সময় সরাসরি লাইব্রেরির কোডে নেভিগেট করতে পারবেন।

### উত্তম অনুশীলন (Best Practice)
লাইব্রেরি প্রজেক্টের ক্ষেত্রে কনজিউমারদের এক্সপেরিয়েন্স ভালো করতে এবং ডিবাগিং সহজ করতে \`declaration\` এবং \`declarationMap\` উভয়ই চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`declarationMap\` চালু রাখা কিন্তু NPM প্যাকেজের ভেতরে অরিজিনাল \`.ts\` ফাইলগুলো আপলোড করতে ভুলে যাওয়া, যার ফলে সোর্স ম্যাপ ভেঙে যায়।

### কোড উদাহরণ (Code Example)
\`\`\`json
// লাইব্রেরির জন্য tsconfig.json কনফিগারেশন
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist"
  }
}
\`\`\``
  },
  {
    id: 'typescript-91',
    title: 'Explain Transpilation vs Type-Checking and build tool implications (tsc vs esbuild/Babel).',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Build Tools', 'Babel', 'esbuild', 'Performance'],
    enAnswer: 'Type-Checking validates types (tsc). Transpilation only strips types to output runnable JS (Babel/esbuild). Hybrid tools compile quickly but require a separate tsc --noEmit check.',
    bnAnswer: 'টাইপ-চেকিং টাইপের শুদ্ধতা যাচাই করে (tsc)। ট্রান্সপাইলেশন কেবল টাইপসমূহ মুছে রানযোগ্য JS আউটপুট দেয় (Babel/esbuild)। হাইব্রিড বিল্ড টুলস দ্রুত বিল্ড করলেও টাইপ চেকের জন্য tsc --noEmit প্রয়োজন হয়।',
    enExplanation: `### Explanation
Modern web builds decouple compiling from checking:
- **Transpilation**: Fast tools like \`esbuild\`, \`swc\`, or \`Babel\` strip out types, interfaces, and decorators, transforming the code to runnable JS. They do *not* check if your types are correct.
- **Type-Checking**: The official \`tsc\` compiler reads types and throws errors if there are bugs.
- **Implication**: Using Vite/esbuild builds your app in milliseconds, but you must run \`tsc --noEmit\` in your CI/CD pipeline to ensure type correctness before deployment.

### Real-World Example
In a CI/CD workflow, you might use Vite to quickly bundle files for production deployment, while running a concurrent Github action job executing \`tsc --noEmit\` to block merging code containing type errors.

### Best Practice
Run type checks as a pre-commit hook or build step via \`tsc --noEmit\` to prevent shipping type-broken code.

### Common Mistakes
Assuming that a successful webpack/vite build guarantees no type errors. If type-checking is not integrated, syntax-invalid types can pass into production.

### Code Example
\`\`\`bash
# 1. Quick compilation/bundling (no type checks, prints JS output in dist)
vite build

# 2. Strict type verification (no JS output, checks code health)
tsc --noEmit
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
আধুনিক ওয়েব বিল্ড প্রসেসে কম্পাইল এবং টাইপ চেক দুটি আলাদা ধাপে সম্পন্ন হয়:
- **ট্রান্সপাইলেশন (Transpilation)**: \`esbuild\`, \`swc\` বা \`Babel\` এর মতো স্পিডি টুলগুলো কোড থেকে টাইপ ডেফিনিশন ও ইন্টারফেসগুলো মুছে রানযোগ্য জাভাস্ক্রিপ্টে রূপান্তর করে। এগুলো টাইপ ভ্যালিডেশন চেক করে না।
- **টাইপ-চেকিং (Type-Checking)**: অফিশিয়াল \`tsc\` কম্পাইলার প্রতিটি লাইনের টাইপ যাচাই করে এবং ভুল থাকলে এরর দেয়।
- **বিল্ড প্রভাব**: Vite/esbuild ব্যবহার করলে মিলি-সেকেন্ডে বিল্ড হয়ে যায় ঠিকই, তবে টাইপ সেফটি নিশ্চিত করতে CI/CD পাইপলাইনে \`tsc --noEmit\` কমান্ড চালানো আবশ্যক।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি প্রোডাকশন প্রজেক্টে বিল্ড ফাস্ট করার জন্য Vite ব্যবহার করা, আর কোড মার্জ করার আগে গিটহাব অ্যাকশনে \`tsc --noEmit\` চালিয়ে পুরো কোডের টাইপ টেস্ট করা।

### উত্তম অনুশীলন (Best Practice)
কোড পুশ করার আগে বা বিল্ড করার সময় প্রাক-প্রস্তুতি হিসেবে \`tsc --noEmit\` মেথডটি রান করুন যাতে কোনো ভুল টাইপ যুক্ত কোড রিলিজ না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে Vite বিল্ড সফল হওয়া মানেই কোডে কোনো টাইপ এরর নেই। টাইপ-চেক আলাদাভাবে রান না করালে এররগুলো থেকে যাওয়ার ঝুঁকি থাকে।

### কোড উদাহরণ (Code Example)
\`\`\`bash
# ১. দ্রুত ট্রান্সপাইলেশন/বিল্ড (কোনো টাইপ চেক ছাড়া JS তৈরি করে)
vite build

# ২. কঠোর টাইপ ভেরিফিকেশন (কোনো JS কোড তৈরি না করে কেবল এরর চেক করে)
tsc --noEmit
\`\`\``
  },
  {
    id: 'typescript-92',
    title: 'Explain the satisfies operator vs type assertions (as Type) in detail.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Satisfies Operator', 'Type Assertions', 'Safety'],
    enAnswer: 'satisfies checks compatibility without mutating the compiler inferred type. Type assertions (as) override the compiler checker, potentially leading to silent runtime bugs.',
    bnAnswer: 'satisfies মূল টাইপ পরিবর্তন না করে কেবল সামঞ্জস্যতা পরীক্ষা করে। টাইপ অ্যাসার্সন (as) কম্পাইলারের চেককে ওভাররাইড করে, যা রানটাইমে মারাত্মক বাগ তৈরি করতে পারে।',
    enExplanation: `### Explanation
- **\`as Type\` (Assertion)**: Tells the compiler "I know the type better than you, treat this as \`Type\`". It silences errors but bypasses checks, which is unsafe.
- **\`satisfies\`**: Tells the compiler "Ensure this object conforms to \`Type\`, but retain the exact literal shape". It maintains type safety and autocomplete details.

### Real-World Example
Designing configuration objects. You want to enforce that all values match a union type, but you still want the properties to retain their exact literal values so downstream functions don't get generalized types.

### Best Practice
Always prefer \`satisfies\` over \`as\` for config objects, state defaults, and theme setups to retain autocompletion.

### Common Mistakes
Using \`as\` to bypass type validation errors when you have incomplete objects, which causes runtime \`undefined\` exceptions.

### Code Example
\`\`\`typescript
type Colors = 'primary' | 'secondary';
type Theme = Record<Colors, string | number[]>;

// 1. Assertion (unsafe, missing secondary is ignored, downstream gets wide type)
const themeOne = {
  primary: "#000"
} as Theme; 
// themeOne.primary is treated as string | number[]

// 2. satisfies (checks structure, retains specific literal types)
const themeTwo = {
  primary: "#000",
  secondary: [255, 255, 255]
} satisfies Theme;

// themeTwo.primary.toUpperCase(); // Safe, inferred as exact string literal!
// themeTwo.secondary.map(n => n); // Safe, inferred as number[]!
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **\`as Type\` (অ্যাসার্সন)**: কম্পাইলারকে নির্দেশ দেয় "আমি টাইপটি ভালো জানি, একে \`Type\` হিসেবে গণ্য করো"। এটি এরর চাপা দেয় কিন্তু কাস্টিং সেফটি নষ্ট করে।
- **\`satisfies\`**: কম্পাইলারকে নির্দেশ দেয় "যাচাই করো এই অবজেক্টটি \`Type\` নিয়মের সাথে মিলে কিনা, কিন্তু এর নিজস্ব লিটারেল শেপ বজায় রাখো"।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
থিম কনফিগারেশন ডিজাইনে। আপনি চান সব কালার প্রোপার্টি সঠিক নিয়মে থাকুক, আবার পরবর্তীতে ব্যবহারের সময় যেন ডাউনস্ট্রিম ফাংশনে নির্দিষ্ট কালারের সঠিক টাইপ অটো-কমপ্লিট হয়।

### উত্তম অনুশীলন (Best Practice)
কনফিগারেশন অবজেক্ট বা স্টেট ইনিশিয়ালাইজ করার সময় \`as\` এর চেয়ে \`satisfies\` ব্যবহার করার চেষ্টা করুন যাতে টাইপ সেফটি পূর্ণাঙ্গ থাকে।

### সাধারণ ভুলসমূহ (Common Mistakes)
ইনকমপ্লিট অবজেক্ট নিয়ে কাজ করার সময় বিল্ড এরর এড়াতে \`as\` ব্যবহার করা, যা রানটাইমে গিয়ে ক্র্যাশ হতে পারে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
type Colors = 'primary' | 'secondary';
type Theme = Record<Colors, string | number[]>;

// ১. অ্যাসার্সন (অনিরাপদ, secondary ফিল্ড নেই তবুও এরর দিবে না)
const themeOne = {
  primary: "#000"
} as Theme; 
// themeOne.primary এর টাইপ string | number[] হিসেবে ট্রিট হবে

// ২. satisfies (কনফর্ম চেক করবে কিন্তু আসল টাইপ ধরে রাখবে)
const themeTwo = {
  primary: "#000",
  secondary: [255, 255, 255]
} satisfies Theme;

// themeTwo.primary.toUpperCase(); // সেফ, অরিজিনাল স্ট্রিং টাইপ ধরে রেখেছে!
// themeTwo.secondary.map(n => n); // সেফ, অরিজিনাল number[] টাইপ ধরে রেখেছে!
\`\`\``
  },
  {
    id: 'typescript-93',
    title: 'Explain the ThisType utility and how it types context inside object literals.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'ThisType', 'Contextual Typing'],
    enAnswer: 'The ThisType utility operates as a marker interface that injects a specific type for the this context inside object literals, requiring noImplicitThis enabled.',
    bnAnswer: 'ThisType ইউটিলিটি একটি মার্কার ইন্টারফেস হিসেবে কাজ করে যা অবজেক্ট লিটারেলের ভেতরে this কনটেক্সটের জন্য কাস্টম টাইপ ইনজেক্ট করে, যার জন্য noImplicitThis চালু থাকতে হয়।',
    enExplanation: `### Explanation
By default, the type of \`this\` inside an object method is inferred to be the object literal itself.
- **\`ThisType<T>\`**: Does not return a modified type. Instead, it acts as a compiler flag. Any object literal whose contextual type is or contains \`ThisType<T>\` will treat \`this\` as type \`T\` inside its methods.
- **Requirement**: Must have \`noImplicitThis: true\` enabled in compiler options.

### Real-World Example
Building Vue-like options APIs or custom state managers where state variables are mapped and accessed directly through \`this\` inside methods.

### Best Practice
Use \`ThisType\` when writing wrapper libraries that bind methods to separate context states at runtime.

### Common Mistakes
Forgetting that \`ThisType\` requires a contextual target to work. Simply declaring \`const x: ThisType<User> = {}\` does not bind context unless it is part of a function parameter or annotated mapping.

### Code Example
\`\`\`typescript
// Options API structure
type ObjectDescriptor<D, M> = {
  data?: () => D;
  methods?: M & ThisType<D & M>; // Injects state and methods into 'this'
};

function makeOptionsApp<D, M>(desc: ObjectDescriptor<D, M>) {
  // Runtime code binds data to methods context
  return desc;
}

const app = makeOptionsApp({
  data: () => ({ x: 10, y: 20 }),
  methods: {
    move() {
      this.x += 5; // Inferred as number due to ThisType injection!
    }
  }
});
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে, অবজেক্ট মেথডের ভেতরে \`this\`-এর টাইপ হয় ওই অবজেক্ট লিটারেল নিজেই।
- **\`ThisType<T>\`**: এটি কোনো টাইপ পরিবর্তন করে না। এটি একটি কম্পাইলার ফ্ল্যাগ হিসেবে কাজ করে। যে অবজেক্ট লিটারেলের কনটেক্সচুয়াল টাইপের মধ্যে \`ThisType<T>\` থাকে, তার মেথডগুলোতে \`this\` এর টাইপ \`T\` হয়ে যায়।
- **প্রয়োজনীয়তা**: compiler options-এ অবশ্যই \`noImplicitThis: true\` চালু থাকতে হবে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
Vue.js-এর মতো অপশনস API বা কাস্টম স্টেট ম্যানেজার তৈরি করা, যেখানে অবজেক্টের ভেতরের মেথডে \`this.state\` এর প্রোপার্টিগুলো সরাসরি অ্যাক্সেস করতে হয়।

### উত্তম অনুশীলন (Best Practice)
এমন র‍্যাপার লাইব্রেরি তৈরির সময় \`ThisType\` ব্যবহার করুন যা রানটাইমে মেথডগুলোকে অন্য কোনো স্টেটের সাথে বাইন্ড করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`ThisType\` সোর্স বা কনটেক্সট ম্যাপিং ছাড়া একা একা কাজ করতে পারে না, এটি মনে না রাখা।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// অপশনস এপিআই স্ট্রাকচার
type ObjectDescriptor<D, M> = {
  data?: () => D;
  methods?: M & ThisType<D & M>; // 'this' এর ভেতর data ও methods ইনজেক্ট করে
};

function makeOptionsApp<D, M>(desc: ObjectDescriptor<D, M>) {
  // রানটাইম কোড মেথডগুলোর সাথে ডাটা বাইন্ড করবে
  return desc;
}

const app = makeOptionsApp({
  data: () => ({ x: 10, y: 20 }),
  methods: {
    move() {
      this.x += 5; // ThisType ইনজেকশনের কারণে x এর টাইপ number দেখাবে!
    }
  }
});
\`\`\``
  },
  {
    id: 'typescript-94',
    title: 'Explain OmitThisParameter and the usage of explicit this parameters in functions.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Utility Types', 'Functions', 'This Context'],
    enAnswer: 'Explicit this parameters enforce the type of this inside a function at compile-time. OmitThisParameter removes the this parameter from the function signature.',
    bnAnswer: 'Explicit this প্যারামিটার কম্পাইল টাইমে ফাংশনের ভেতরে this-এর টাইপ জোরদার করে। OmitThisParameter ফাংশন সিগনেচার থেকে ওই this প্যারামিটার সরিয়ে নতুন টাইপ তৈরি করে।',
    enExplanation: `### Explanation
- **Explicit \`this\` Parameter**: You can declare a parameter named \`this\` as the *first* argument of a function to define its context: \`function log(this: User) { ... }\`. This parameter is completely erased at compile time.
- **\`OmitThisParameter<T>\`**: If a function type expects a specific \`this\` parameter, but you bind it to an object (removing the need for callers to pass context), this utility strips the \`this\` parameter constraint from the type.

### Real-World Example
Typing event handlers or callback libraries where a library calls your function with a specific context (like a button element as \`this\`).

### Best Practice
Always declare explicit \`this\` parameters in helper functions that rely on dynamic context to prevent accidental unbound invocation crashes.

### Common Mistakes
Forgetting that the \`this\` argument is compile-time only. Calling the function at runtime with the \`this\` argument as a normal parameter causes immediate execution errors.

### Code Example
\`\`\`typescript
interface User {
  name: string;
}

// Explicit this context in function
function greet(this: User, prefix: string) {
  return \`\${prefix}, \${this.name}\`;
}

const user: User = { name: "Rohit" };
// greet("Hello"); // Error: The 'this' context of type 'void' is not assignable to method's 'this' of type 'User'.
greet.call(user, "Hello"); // Valid

// OmitThisParameter
type BoundGreet = OmitThisParameter<typeof greet>;
// Inferred as: (prefix: string) => string
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
- **Explicit \`this\` Parameter**: ফাংশনের প্রথম প্যারামিটার হিসেবে \`this\` লিখে তার টাইপ ডিক্লেয়ার করা যায়: \`function log(this: User) {}\`। এই আর্গুমেন্টটি কম্পাইল হওয়ার সময় রিমুভ হয়ে যায়।
- **\`OmitThisParameter<T>\`**: কোনো ফাংশনে যদি \`this\` ডিক্লেয়ার করা থাকে কিন্তু আপনি ফাংশনটি কোনো অবজেক্টের সাথে বাইন্ড করে ফেলেন (যার ফলে কলারদের আর \`this\` সেট করতে হবে না), তখন এই টাইপটি \`this\` প্যারামিটারের বাধ্যবাধকতা সরিয়ে দেয়।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
ইভেন্ট হ্যান্ডলার বা কলব্যাক লাইব্রেরি টাইপ করা যেখানে লাইব্রেরি আপনার কলব্যাক ফাংশনকে একটি নির্দিষ্ট অবজেক্টের কনটেক্সটে কল করবে (যেমন বোতাম বা ইনপুট এলিমেন্টকে \`this\` বানিয়ে)।

### উত্তম অনুশীলন (Best Practice)
ডাইনামিক কনটেক্সটের ওপর নির্ভর করে এমন হেল্পার ফাংশনগুলোতে স্পষ্টভাবে \`this\` প্যারামিটার উল্লেখ করুন যাতে এটি আনবাউন্ড অবস্থায় রান হয়ে ক্র্যাশ না করে।

### সাধারণ ভুলসমূহ (Common Mistakes)
\`this\` আর্গুমেন্টটি কেবল কম্পাইল-টাইম টাইপ চেকিংয়ের জন্য তা ভুলে যাওয়া। রানটাইমে এটিকে সাধারণ প্যারামিটার হিসেবে পাস করলে কোড এরর দেবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
interface User {
  name: string;
}

// ফাংশনে explicit this কনটেক্সট ডিক্লেয়ার করা
function greet(this: User, prefix: string) {
  return \`\${prefix}, \${this.name}\`;
}

const user: User = { name: "Rohit" };
// greet("Hello"); // এরর: The 'this' context of type 'void' is not assignable to method's 'this' of type 'User'.
greet.call(user, "Hello"); // ভ্যালিড

// OmitThisParameter ইউটিলিটি
type BoundGreet = OmitThisParameter<typeof greet>;
// নতুন টাইপ: (prefix: string) => string (this প্যারামিটারটি বাদ গেছে)
\`\`\``
  },
  {
    id: 'typescript-95',
    title: 'Explain Const Modifiers on Type Parameters (const Type parameters in Generics) in detail.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Generics', 'Const Generics', 'TS 5.0'],
    enAnswer: 'Const type parameters enable functions to capture the narrowest read-only literal types of object and array arguments passed in, replacing manual as const declarations.',
    bnAnswer: 'Const type parameters ফাংশনে পাস করা অবজেক্ট ও অ্যারো আর্গুমেন্টের সবচেয়ে সংকীর্ণ বা স্পেসিফিক লিটারেল টাইপ রিড-অনলি হিসেবে ক্যাপচার করে, as const ব্যবহারের প্রয়োজন কমায়।',
    enExplanation: `### Explanation
Introduced in TS 5.0:
- **Prior Solution**: If a function needed exact string values, callers wrote \`myFunc({ x: 10 } as const)\`.
- **Modern Solution**: By adding \`const\` before the type parameter declaration, e.g. \`<const T>\`, the function naturally acts as if \`as const\` was applied to the arguments at the call site.
- **Effect**: It affects objects, arrays, and tuples, causing the compiler to infer them as \`readonly\` literal types.

### Real-World Example
Typing a translation configuration loader where keys like \`"greet.hello"\` must be inferred as exact read-only literal keys rather than generic strings to allow safe translation lookups.

### Best Practice
Use const modifiers when creating configuration builders, routing registries, or schemas that rely on exact literal mapping values.

### Common Mistakes
Forgetting that properties inferred via const parameters are marked \`readonly\`. Attempting to modify fields in the return object triggers compilation errors.

### Code Example
\`\`\`typescript
// Without const modifier: T is inferred as { colors: string[] }
function setupColorsOld<T extends { colors: string[] }>(config: T) {
  return config;
}
const configOld = setupColorsOld({ colors: ["red", "blue"] });
// colors is string[]

// With const modifier: T is inferred as readonly colors: ["red", "blue"]
function setupColorsNew<const T extends { colors: readonly string[] }>(config: T) {
  return config;
}
const configNew = setupColorsNew({ colors: ["red", "blue"] });
// colors type is readonly ["red", "blue"] (Inferred as tuple of literals!)
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
টাইপস্ক্রিপ্ট ৫.০ এর একটি গুরুত্বপূর্ণ ফিচার:
- **আগের পদ্ধতি**: ফাংশনে সঠিক স্ট্রিং লিটারেল ইনফার করাতে কলারদের অবজেক্টের শেষে \`as const\` লিখতে হতো।
- **আধুনিক পদ্ধতি**: জেনেরিক টাইপ ঘোষণার সময় প্যারামিটারের আগে \`const\` যুক্ত করলে (যেমন \`<const T>\`), আর্গুমেন্টটি কল সাইটে স্বয়ংক্রিয়ভাবে \`as const\` হিসেবে ট্রিট হয়।
- **প্রভাব**: এটি অবজেক্ট, অ্যারে এবং টাপলকে \`readonly\` এবং সবচেয়ে ন্যারো লিটারেল টাইপ হিসেবে ইনফার করতে সাহায্য করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি ট্রান্সলেশন ফাইল লোডার যেখানে \`"greet.hello"\` এর মতো কি-গুলো সাধারণ স্ট্রিং না হয়ে যেন নির্দিষ্ট রিড-অনলি লিটারেল হিসেবে ইনফার হয়, যা পরবর্তীতে সঠিক অনুবাদ মেলাতে সাহায্য করে।

### উত্তম অনুশীলন (Best Practice)
রাউট রেজিস্ট্রি বা থিম কনফিগারেশনের ক্ষেত্রে \`const\` মডিফায়ার ব্যবহার করুন যাতে ব্যবহারকারীকে বারবার কল সাইটে \`as const\` লিখতে না হয়।

### সাধারণ ভুলসমূহ (Common Mistakes)
ভুলে যাওয়া যে \`const\` প্যারামিটার দ্বারা ইনফার করা প্রোপার্টিগুলো \`readonly\` হয়ে যায়। রিটার্ন অবজেক্টের কোনো ফিল্ড মিউটেট করার চেষ্টা করলে এরর দেখাবে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// const মডিফায়ার ছাড়া: colors এর টাইপ string[] হিসেবে ইনফার হবে
function setupColorsOld<T extends { colors: string[] }>(config: T) {
  return config;
}
const configOld = setupColorsOld({ colors: ["red", "blue"] });

// const মডিফায়ার সহ: colors এর টাইপ নির্দিষ্ট টাপল হিসেবে ইনফার হবে
function setupColorsNew<const T extends { colors: readonly string[] }>(config: T) {
  return config;
}
const configNew = setupColorsNew({ colors: ["red", "blue"] });
// colors এর টাইপ হলো readonly ["red", "blue"] (লিটারেল টাপল!)
\`\`\``
  },
  {
    id: 'typescript-96',
    title: 'Explain Module Resolution strategies (Node10, NodeNext, Bundler).',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Module Resolution', 'Bundlers'],
    enAnswer: 'Node10 resolves files based on CommonJS directory lookups. NodeNext supports modern ESM rules (exports map, file extensions). Bundler delegates resolution rules to modern bundlers.',
    bnAnswer: 'Node10 CommonJS ডিরেক্টরি অনুযায়ী ফাইল রেজোলিউশন করে। NodeNext আধুনিক ESM নিয়মকানুন (exports map, file extensions) সমর্থন করে। Bundler মডিউল খোঁজার দায়িত্ব আধুনিক বিল্ড টুলসের ওপর ছেড়ে দেয়।',
    enExplanation: `### Explanation
Module resolution controls how the compiler maps an import string like \`import { X } from "./file"\` to a physical file:
- **\`Node10\` (formerly \`Node\`):**: Legacy lookup. Resolves files without requiring file extensions and searches inside \`node_modules\` folder folders.
- **\`NodeNext\` / \`Node16\`**: Strictly matches Node.js runtime resolution. Requires explicit file extensions in ESM imports (e.g. \`import "./file.js"\`) and honors package exports maps.
- **\`Bundler\`**: Designed for modern web applications compiled by tools like Vite or Webpack. Resolves imports dynamically using bundler patterns.

### Real-World Example
Configuring a React Vite app vs an npm library. Vite projects utilize \`Bundler\` resolution to support import aliases, CSS imports, and omitted extensions safely.

### Best Practice
Use \`Bundler\` for modern web apps built with bundlers, and \`NodeNext\` when building libraries or Node.js services.

### Common Mistakes
Using \`Node10\` in new codebases, which fails to support modern \`exports\` configurations inside third-party packages, causing build failures.

### Code Example
\`\`\`json
// tsconfig.json configuration for Vite project
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
মডিউল রেজোলিউশন নির্ধারণ করে কিভাবে কম্পাইলার একটি ইম্পোর্ট স্ট্রিং যেমন \`import { X } from "./file"\` কে একটি ফিজিক্যাল ফাইলে রূপান্তর করে:
- **\`Node10\` (পূর্বে \`Node\` নামে পরিচিত ছিল)**: লিগ্যাসি পদ্ধতি। ফাইল এক্সটেনশন ছাড়াই ফাইল খুঁজে বের করতে পারে এবং \`node_modules\` ফোল্ডারে খোঁজে।
- **\`NodeNext\` / \`Node16\`**: নোড ডট জেএস রানটাইমের মডিউল রেজোলিউশন হুবহু মেনে চলে। এতে ESM ইম্পোর্টে স্পষ্ট ফাইল এক্সটেনশন দিতে হয় (যেমন \`import "./file.js"\`) এবং package.json exports ম্যাপ অনুসরণ করে।
- **\`Bundler\`**: Vite বা Webpack এর মতো আধুনিক ফ্রন্টএন্ড টুলের সাথে কাজ করার জন্য ডিজাইন করা হয়েছে। এটি বান্ডলারের নিজস্ব মডিউল রেজোলিউশন স্ট্রাকচার অনুসরণ করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি React Vite অ্যাপ বনাম একটি NPM লাইব্রেরি তৈরি করা। Vite প্রজেক্টে \`Bundler\` রেজোলিউশন ব্যবহার করা হয় যাতে সিএসএস ফাইল বা ফাইল এক্সটেনশন ছাড়া ইম্পোর্ট সহজে করা যায়।

### উত্তম অনুশীলন (Best Practice)
আধুনিক ফ্রন্টএন্ড অ্যাপের জন্য \`Bundler\` এবং ব্যাকএন্ড সার্ভিস বা লাইব্রেরি তৈরির জন্য \`NodeNext\` ব্যবহার করুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
নতুন প্রজেক্টে \`Node10\` ব্যবহার করা, যা থার্ড-পার্টি প্যাকেজের আধুনিক \`exports\` ফিল্ড রিড করতে পারে না এবং এরর তৈরি করে।

### কোড উদাহরণ (Code Example)
\`\`\`json
// Vite প্রজেক্টের জন্য tsconfig.json কনফিগারেশন
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true
  }
}
\`\`\``
  },
  {
    id: 'typescript-97',
    title: 'Explain the skipLibCheck optimization and its pros/cons.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Performance', 'Build Options'],
    enAnswer: 'skipLibCheck bypasses type-checking of declaration files (.d.ts) inside node_modules, significantly reducing compilation times at the cost of potential library type conflicts.',
    bnAnswer: 'skipLibCheck node_modules-এর ভেতরের টাইপ ডিক্লেয়ারেশন ফাইলগুলোর (.d.ts) টাইপ-চেকিং স্কিপ করে, যা সম্ভাব্য লাইব্রেরি টাইপ কনফ্লিক্টের ঝুঁকি নিয়ে বিল্ড স্পিড বহুগুণ বাড়ায়।',
    enExplanation: `### Explanation
By default, the TypeScript compiler checks the type definitions of every package installed in \`node_modules\`.
- **\`skipLibCheck: true\`**: Instructs the compiler to skip type checking of all declaration files (\`.d.ts\`). It only checks code you wrote in your project.
- **Pros**: Drastically improves compilation and build speeds, and prevents your build from crashing due to bugs in third-party library types.
- **Cons**: If a library has type conflicts or issues that affect your code execution, the compiler will not alert you.

### Real-World Example
In large scale enterprise setups, two libraries might install conflicting versions of another dependency. Enabling \`skipLibCheck\` allows the build to compile successfully instead of throwing duplicate declaration warnings.

### Best Practice
Keep \`skipLibCheck: true\` enabled in your tsconfig.json to prevent development blockers from third-party type bugs.

### Common Mistakes
Forgetting that \`skipLibCheck\` only skips declaration files. If a third-party library has bugs in its runtime JS, it must still be handled.

### Code Example
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "skipLibCheck": true, // Speeds up compilation
    "strict": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
ডিফল্টভাবে, টাইপস্ক্রিপ্ট কম্পাইলার আপনার কোডের সাথে সাথে \`node_modules\`-এ থাকা প্রতিটি প্যাকেজের টাইপ ডিক্লেয়ারেশন চেক করে।
- **\`skipLibCheck: true\`**: এটি কম্পাইলারকে ডিক্লেয়ারেশন ফাইলগুলোর (\`.d.ts\`) টাইপ চেকিং এড়াতে নির্দেশ দেয়। এটি কেবল আপনার লেখা কোডটুকুই চেক করবে।
- **সুবিধা**: প্রজেক্টের বিল্ড ও কম্পাইলেশন টাইম অনেক কমিয়ে দেয়। পাশাপাশি কোনো থার্ড-পার্টি লাইব্রেরির টাইপ ফাইলে কোনো ভুল থাকলে সেটির জন্য আপনার প্রজেক্টের বিল্ড বন্ধ হবে না।
- **অসুবিধা**: কোনো থার্ড-পার্টি লাইব্রেরিতে আপনার কোডের জন্য ক্ষতিকর টাইপ কনফ্লিক্ট থাকলে কম্পাইলার সেটি আপনাকে জানাবে না।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি বড় প্রজেক্টে দুটি ভিন্ন লাইব্রেরি একই ডিপেন্ডেন্সির ভিন্ন ভার্সন ইম্পোর্ট করলে এডিটরে ডুপ্লিকেট টাইপ ডিক্লেয়ারেশন এরর দেখাতে পারে। \`skipLibCheck\` অন করলে এই অপ্রয়োজনীয় এররগুলো বিল্ড আটকাবে না।

### উত্তম অনুশীলন (Best Practice)
থার্ড-পার্টি লাইব্রেরির টাইপ ফাইলের ভুলভ্রান্তির কারণে বিল্ড প্রসেস আটকে যাওয়া ঠেকাতে আপনার \`tsconfig.json\` ফাইলে \`skipLibCheck: true\` চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
মনে করা যে \`skipLibCheck\` আপনার নিজের টাইপ ভুলগুলোও স্কিপ করে। এটি কেবল এক্সটার্নাল লাইব্রেরি ফাইলের ক্ষেত্রে প্রযোজ্য।

### কোড উদাহরণ (Code Example)
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "skipLibCheck": true, // কম্পাইলেশন স্পিড বাড়াবে
    "strict": true
  }
}
\`\`\``
  },
  {
    id: 'typescript-98',
    title: 'Explain the preserveConstEnums flag and its impact on build bundlers.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'tsconfig.json', 'Enums', 'Bundlers'],
    enAnswer: 'preserveConstEnums forces TypeScript to output standard runtime lookup objects for const enums, preventing build failures when bundlers compile files individually.',
    bnAnswer: 'preserveConstEnums টাইপস্ক্রিপ্টকে const enums-এর জন্য স্ট্যান্ডার্ড রানটাইম অবজেক্ট তৈরি করতে বাধ্য করে, যা বান্ডলার ফাইলগুলোকে আলাদা আলাদা কম্পাইল করার সময় বিল্ড এরর আটকায়।',
    enExplanation: `### Explanation
Standard \`const enum\` values are stripped during compilation and inlined directly.
- **Problem with Bundlers**: Modern bundlers (like Babel, esbuild, swc) compile files one-by-one (transpilation) without executing type resolution. Since they don't look at other files, they cannot resolve inlined values from a \`const enum\` exported elsewhere.
- **\`preserveConstEnums\`**: Forces the compiler to emit a standard JavaScript object mapping for \`const enums\`. The code retains inlined speed benefits but exposes runtime lookup objects so transpilers don't crash.

### Real-World Example
Building a library that will be bundled by esbuild or Vite. Enabling this flag prevents consumers from getting runtime "reference error: status is not defined" crashes.

### Best Practice
Enable \`preserveConstEnums: true\` if you utilize \`const enum\` and compile/transpile your code using single-file engines like esbuild, Babel, or SWC.

### Common Mistakes
Publishing a library containing \`const enum\` without this flag, which breaks builds for consumers using modern web bundlers.

### Code Example
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "preserveConstEnums": true,
    "isolatedModules": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ \`const enum\` এর মানগুলো কম্পাইলেশনের সময় কোড থেকে মুছে সরাসরি ইনলাইন হয়ে যায়।
- **বান্ডলারের সমস্যা**: আধুনিক বিল্ড টুলগুলো (Babel, esbuild) ফাইলগুলোকে একটি একটি করে ট্রান্সপাইল করে, কোনো টাইপ রেজোলিউশন বা ফাইল ট্র্যাকিং করে না। অন্য ফাইলে এক্সপোর্ট হওয়া \`const enum\` থেকে আসা কোড তারা ইনলাইন করতে পারে না কারণ তারা পুরো প্রজেক্ট একসাথে রিড করে না।
- **\`preserveConstEnums\`**: এটি কম্পাইলারকে \`const enum\` এর জন্য একটি সাধারণ রানটাইম জাভাস্ক্রিপ্ট অবজেক্ট জেনারেট করতে বাধ্য করে। এর ফলে ট্রান্সপিলারগুলো ক্র্যাশ হওয়া থেকে বাঁচে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
একটি লাইব্রেরি তৈরি করা যা পরবর্তীতে esbuild বা Vite দিয়ে বান্ডেল হবে। এই ফ্ল্যাগ চালু রাখলে লাইব্রেরি ব্যবহারের সময় রানটাইমে রেফারেন্স নট ফাউন্ড এরর হবে না।

### উত্তম অনুশীলন (Best Practice)
আপনি যদি \`const enum\` ব্যবহার করেন এবং বিল্ডের জন্য esbuild বা Babel ব্যবহার করেন, তবে \`preserveConstEnums: true\` চালু রাখা সবচেয়ে নিরাপদ।

### সাধারণ ভুলসমূহ (Common Mistakes)
এই ফ্ল্যাগ ছাড়া \`const enum\` যুক্ত লাইব্রেরি পাবলিশ করা, যা কনজিউমারদের আধুনিক ওয়েব বিল্ডার ব্যবহারের সময় বিল্ড ক্র্যাশ করায়।

### কোড উদাহরণ (Code Example)
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "preserveConstEnums": true,
    "isolatedModules": true
  }
}
\`\`\``
  },
  {
    id: 'typescript-99',
    title: 'Explain Type-Only Imports and Exports and their optimization benefits.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Imports', 'Exports', 'Performance', 'TS 3.8'],
    enAnswer: 'Type-Only imports/exports (import type) explicitly inform the compiler that the imported item is used only for types, allowing complete removal from output JS files.',
    bnAnswer: 'Type-Only imports/exports (import type) কম্পাইলারকে স্পষ্টভাবে জানায় যে ইম্পোর্ট করা উপাদানটি কেবল টাইপের জন্য ব্যবহৃত হচ্ছে, যা আউটপুট JS ফাইল থেকে এটি সম্পূর্ণ মুছে ফেলে।',
    enExplanation: `### Explanation
Standard imports like \`import { User } from "./models"\` compile down to JS imports. If \`User\` is only an interface, the runtime JS still attempts to load the module, which is redundant or can cause circular dependencies.
- **Type-Only**: Declared using \`import type { User }\` or \`export type { Config }\`.
- **Optimization**: Fully stripped during compilation. It prevents bloated imports and resolves circular dependency issues where files import each other's types.

### Real-World Example
Importing database model types into React components. You want to use the types for props validation, but you do not want the browser to download backend database files or ORM models.

### Best Practice
Enable \`"importsNotUsedAsValues": "error"\` or \`"verbatimModuleSyntax": true\` to force developers to write \`import type\` for type declarations.

### Common Mistakes
Mixing runtime class imports with interface imports in a single regular import statement without using \`type-only\` syntax, preventing bundlers from tree-shaking classes.

### Code Example
\`\`\`typescript
// Type-Only Import (Completely erased from JS output)
import type { UserInfo } from './types';

// Regular Import (Preserved in JS output if it has classes/values)
import { UserClass } from './classes';

export const logUser = (user: UserInfo) => {
  const instance = new UserClass();
  console.log(user.name);
};
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
সাধারণ ইম্পোর্ট যেমন \`import { User } from "./models"\` জাভাস্ক্রিপ্ট ইম্পোর্ট হিসেবে থেকে যায়। যদি \`User\` কেবল একটি ইন্টারফেস হয়, রানটাইমে তবুও মডিউলটি লোড হতে যায়, যা অপ্রয়োজনীয় সার্কুলার ডিপেন্ডেন্সি সৃষ্টি করতে পারে।
- **Type-Only**: এটি ডিক্লেয়ার করতে \`import type { User }\` বা \`export type { Config }\` ব্যবহার করা হয়।
- **অপ্টিমাইজেশন**: কম্পাইল করার সময় এটি কোড থেকে সম্পূর্ণ মুছে যায়। এটি ব্রাউজার কোডের সাইজ কমায় এবং সাইক্লিক রিলেশনশিপ এরর দূর করে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
React কম্পোনেন্টে ডাটাবেজ মডেলের টাইপ ইম্পোর্ট করা। আপনি কেবল টাইপ ব্যবহার করতে চান কিন্তু ব্রাউজারে ডাটাবেজের নোড মডিউল বা ওআরএম ফাইলগুলোর ব্যাকএন্ড কোড ডাউনলোড করাতে চান না।

### উত্তম অনুশীলন (Best Practice)
টাইপ ইম্পোর্টের জন্য ডেভেলপাররা যেন \`import type\` ব্যবহার করে তা নিশ্চিত করতে \`tsconfig.json\` ফাইলে \`verbatimModuleSyntax: true\` চালু রাখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
একই স্টেটমেন্টে ক্লাসের মতো রানটাইম উপাদানের সাথে ইন্টারফেস মিক্স করে ইম্পোর্ট করা, যা বান্ডলারের ট্রি-শেকিং অপ্টিমাইজেশন ব্যাহত করে।

### কোড উদাহরণ (Code Example)
\`\`\`typescript
// Type-Only ইম্পোর্ট (জাভাস্ক্রিপ্ট আউটপুট থেকে সম্পূর্ণ মুছে যাবে)
import type { UserInfo } from './types';

// সাধারণ ইম্পোর্ট (আউটপুটে থাকবে কারণ ক্লাস রানটাইমে রান হয়)
import { UserClass } from './classes';

export const logUser = (user: UserInfo) => {
  const instance = new UserClass();
  console.log(user.name);
};
\`\`\``
  },
  {
    id: 'typescript-100',
    title: 'Explain TypeScript Compiler Performance tuning techniques for large projects.',
    difficulty: 'advanced',
    category: 'typescript',
    tags: ['TypeScript', 'Compiler', 'Performance', 'Build Speed'],
    enAnswer: 'TypeScript compilation speed can be optimized by enabling incremental builds, configuring skipLibCheck, using project references, and isolating modules.',
    bnAnswer: 'ইনক্রিমেন্টাল বিল্ড চালু করে, skipLibCheck কনফিগার করে, প্রজেক্ট রেফারেন্স ব্যবহার করে এবং মডিউল আইসোলেট করে বড় প্রজেক্টে কম্পাইলেশন স্পিড অপ্টিমাইজ করা যায়।',
    enExplanation: `### Explanation
As codebases grow, compiler execution slows down. Key optimization techniques include:
- **\`incremental: true\`**: Tells TS to output caching details (\`.tsbuildinfo\`) about the project graph so subsequent runs only rebuild changed files.
- **\`skipLibCheck: true\`**: Skips checking \`.d.ts\` libraries in \`node_modules\`.
- **Project References**: Divide the codebase into separate packages with their own configurations, compile them independently, and cache outputs.
- **\`isolatedModules: true\`**: Forces code to compile safely under single-file transpilation engines.

### Real-World Example
In enterprise apps with over 500,000 lines of code, configuring project references and enabling incremental compiler flags can reduce dev server hot-reload times from 30 seconds to less than 1 second.

### Best Practice
Run diagnostic command \`tsc --diagnostics\` or \`tsc --extendedDiagnostics\` to analyze which files or type operations are causing compiler delays.

### Common Mistakes
Creating deeply nested or circular recursive generic utility types, which can force the compiler to loop repeatedly, consuming gigabytes of system RAM.

### Code Example
\`\`\`json
// Optimized tsconfig.json for large projects
{
  "compilerOptions": {
    "incremental": true, // Cache build info
    "skipLibCheck": true, // Skip external package types
    "isolatedModules": true, // Faster single-file compilers
    "strict": true
  }
}
\`\`\``,
    bnExplanation: `### ব্যাখ্যা (Explanation)
কোডবেস বড় হওয়ার সাথে সাথে কম্পাইলার ধীরগতির হয়ে যায়। বিল্ড স্পিড বাড়ানোর মূল টেকনিকগুলো হলো:
- **\`incremental: true\`**: এটি ক্যাশ ফাইল (\`.tsbuildinfo\`) তৈরি করে যাতে পরবর্তী বিল্ডের সময় কেবল পরিবর্তিত ফাইলগুলো রি-কম্পাইল হয়।
- **\`skipLibCheck: true\`**: \`node_modules\`-এ থাকা হাজার হাজার লাইব্রেরি টাইপ ফাইল রিড করা বন্ধ করে।
- **Project References**: পুরো মোনোরেপো বা কোডবেসকে ছোট ছোট প্যাকেজে ভাগ করে স্বাধীনভাবে বিল্ড করে ক্যাশ করা।
- **\`isolatedModules: true\`**: কোডকে এমনভাবে লিখতে বাধ্য করে যা সিঙ্গেল-ফাইল কম্পাইলার দ্বারা ফাস্ট বিল্ড হতে পারে।

### বাস্তব-ভিত্তিক উদাহরণ (Real-World Example)
৫ লক্ষ লাইনের বেশি বড় প্রজেক্টে প্রজেক্ট রেফারেন্স এবং ইনক্রিমেন্টাল ক্যাশিং চালু করার মাধ্যমে লোকাল ডেভেলপমেন্ট রিলোড স্পিড ৩০ সেকেন্ড থেকে কমিয়ে ১ সেকেন্ডে নিয়ে আসা সম্ভব।

### উত্তম অনুশীলন (Best Practice)
কোন ফাইল বা কোন টাইপের কারণে কম্পাইলার ধীরগতি হচ্ছে তা দেখতে বিল্ডের সময় \`tsc --extendedDiagnostics\` কমান্ডটি চালিয়ে বিস্তারিত রিপোর্ট দেখুন।

### সাধারণ ভুলসমূহ (Common Mistakes)
অত্যধিক জটিল ও নেস্টেড রিকার্সিভ জেনেরিক টাইপ ডিজাইন করা, যা টাইপ চেকারকে ইনফিনিট ক্যালকুলেশনে ঠেলে দিয়ে প্রচুর RAM মেমোরি খরচ করায়।

### কোড উদাহরণ (Code Example)
\`\`\`json
// বড় প্রজেক্টের বিল্ড স্পিড অপ্টিমাইজড tsconfig.json কনফিগারেশন
{
  "compilerOptions": {
    "incremental": true, // বিল্ড ইনফো ক্যাশ করবে
    "skipLibCheck": true, // এক্সটার্নাল লাইব্রেরি টাইপ চেকিং এড়াবে
    "isolatedModules": true, // ফাস্ট বিল্ড ইঞ্জিন সাপোর্ট করবে
    "strict": true
  }
}
\`\`\``
  }
];
