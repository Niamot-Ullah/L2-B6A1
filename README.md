3. Explain the difference between any, unknown, and never types in TypeScript.
any: যখন একটি ভেরিয়েবলকে any হিসেবে টাইপ করা হয়, তখন আমরা এতে যেকোনো ধরণের মান নির্ধারণ করতে পারি এবং typescript type error ছাড়াই আমরা এতে যেকোনো অপারেশন করতে পারি।
let value: any = "hello";
value = 123;
value.toUpperCase();

unknown:  যখন আমরা কোন মানের type জানি না, তখন unknown type, any type এর চেয়ে নিরাপদ বিকল্প।
let value: unknown = "hello";
value = 123;

never: এটি এমন পরিস্থিতিতে ব্যবহৃত হয় যেখানে ফাংশন কখনও return করে না
function throwError(message: string): never {
  throw new Error(message);
}



5. Provide an example of using union and intersection types in TypeScript.
Union (|): একটি variable একাধিক ধরণের হতে পারে।
Intersection (&): একটি variable কে অবশ্যই সকল প্রকারের condition পূরণ করতে হবে

type StringNumber = string | number;
let value: StringNumber;
value = "Hello";
value = 42;

type Person = { name: string };
type Employee = { salary: number };
type Staff = Person & Employee;
const staffMember: Staff = { name: "Alice", salary: 5000 };
