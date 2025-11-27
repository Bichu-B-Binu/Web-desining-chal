let val = "JavaScript";
let reversed = "";
// for (let i = val.length - 1; i >= 0; i--) {
//   reversed = reversed + val[i];
//   //   console.log(val);
// }
// console.log(reversed + "using for loop");

// let j = val.length - 1;
// while (j >= 0) {
//   reversed = reversed + val[j];
//   j--;
// }
// console.log("  " + reversed + " using while loop");

// let k = val.length - 1;
// do {
//   reversed = reversed + val[k];
//   k--;
// } while (k >= 0);
// console.log("  " + reversed + " using do while loop");

// let arrr = [1, 2, 3, 4, 5];

// const result = arrr.slice(-4, -2);

// console.log(result);

// Write a forEach() loop to print each element of an array of numbers.

// const arrs = [10, 20, 30, 40, 50];
// const arr2 = ["a", "b", "c", "d", "e"];

// arrs.forEach((arr) => console.log(arr));

// arr2.forEach((aar, index) => {
//   arr2[index] = aar.toUpperCase();
// });
// console.log(arr2);

// let arr2 = ["apple", "ball", "cat"];

// arr2.forEach((item, index) => {
//   arr2[index] = item.toUpperCase();
// });

// console.log(arr2);

// const arr3 = [5, 10, 15, 20, 25];

// let sum = 0;
// arr3.forEach((ar) => (sum += ar));

// console.log(sum);

// const arr4 = [1, 2, 3, 4, 5];

// arr4.forEach((ar) => console.log(ar + 5));

// const arr5 = [1, 4, 2, 6, 5, 7, 9, 8, 3];
// let arr5 = [1, 4, 2, 6, 5, 7, 9, 8, 3];

// const even = [];
// arr5.forEach((ar) => {
//   ar % 2 === 0 ? even.push(ar) : null;
// });

// console.log(even.length);
// console.log(typeof null);

// let arr = [1, 2, 3, 4, 6];
// let count = 0;

// arr.forEach((n) => {
//   n % 2 === 0 ? count++ : null;
// });

// console.log(count);

// const arr6 = [1, 4, 2, 6, 5, 7, 9, 8, 3];

// arr6.forEach((ar, i) => console.log(`Index ${i}: Value ${ar}`));

// const arr7 = ["apple", "mango", "banana"];
// const arr7 = [1, 2, 3, 4, 5, 6];

// const result = arr7.forEach((a, b, c) => {
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   return a * 2;
// });

// const arr7 = [1, 2, 3, 4, 5, 6];

// const result = arr7.map((a) => 2);

// console.log(result);

// const arr7 = [1, 2, 3, 4, 5, 6];

// const result = arr7.filter((arr) => arr > 3);

// console.log(result);

// const arr7 = [1, 2, 3, 4, 5, 6];

// const result = arr7.reduce((acc, element) => {
//   console.log(acc[element]);
// },0);

// console.log(result);

// SUM

// const numbers = [5, 10, 15, 20];

// const result = numbers.reduce((acc, number) => acc + number, 0);

// console.log(result);

//multiply

// const numbers = [2, 3, 4]

// const result = numbers.reduce((acc, number) => acc * number, 1);

// console.log(result);

//Maximum

// const numbers = [11, 99, 45, 32];

// const result = numbers.reduce((acc, number) => {
//   // console.log(acc, number);
//   return acc > number ? acc : number;
// }, 0);

// console.log(result);

// const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const result = strings.reduce((acc, string) => {
//   acc[string] = (acc[string] || 0) + 1;
//   console.log(acc[string]);

//   return acc;

// }, {});

// console.log(result);

// const a = { 1: "apple", banana: 2, 3: "orange", 4: "grapes" };
// console.log(a[1],a.banana, a[3], a[4]);
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const obj = {};
console.log((strings["apple"] = 2));

for (let i = 0; i < strings.length; i++) {
  const fruit = strings[i];
  obj[fruit] = (obj[fruit] || 0) + 1;
  console.log(obj[fruit]);
}

console.log(obj);
