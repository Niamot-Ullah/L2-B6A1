3. Explain the difference between any, unknown, and never types in TypeScript.
- any: যখন একটি ভেরিয়েবলকে any হিসেবে টাইপ করা হয়, তখন আমরা এতে যেকোনো ধরণের মান নির্ধারণ করতে পারি এবং typescript type error ছাড়াই আমরা এতে যেকোনো অপারেশন করতে পারি। <br>
let value: any = "hello"; <br>
value = 123; <br>
value.toUpperCase(); <br>

- unknown:  যখন আমরা কোন মানের type জানি না, তখন unknown type, any type এর চেয়ে নিরাপদ বিকল্প। <br>
let value: unknown = "hello"; <br>
value = 123; <br>

- never: এটি এমন পরিস্থিতিতে ব্যবহৃত হয় যেখানে ফাংশন কখনও return করে না <br>
function throwError(message: string): never { <br>
  throw new Error(message); <br>
}



5. Provide an example of using union and intersection types in TypeScript.
- Union (|): একটি variable একাধিক ধরণের হতে পারে।
- Intersection (&): একটি variable কে অবশ্যই সকল প্রকারের condition পূরণ করতে হবে

type StringNumber = string | number;  <br>
let value: StringNumber; <br>
value = "Hello"; <br>
value = 42; <br>

type Person = { name: string }; <br>
type Employee = { salary: number };  <br>
type Staff = Person & Employee; <br>
const staffMember: Staff = { name: "Alice", salary: 5000 };
