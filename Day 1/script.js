// console.log("Hello World");
// for (let i = 0; i <= 5; i++) {
//   console.log("Numbers:", i);
// }

// const twoSum = (nums, target) => {
//   nums = [2, 7, 11, 15];
//   target = 9;

//   for (let i = 0; i < nums.length; i++) {

//   }
// };

// twoSum();
//declration of a object
// object literal syntax
///const user = {age: 45}
//user.name = " Aravind"
//  const user = {age: 45, "favorate food": "biriyani"}
// console.log(user["favorate food"]);
// delete user.age
// console.log(user);
// const person = {
//   name: "Bichu",
//   age: 22,
//   city: "Kochi",
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// const arr = ["A", "B", "C"];

// for (let f in arr) {
//   console.log(f); // index
// }

// for (let v of arr) {
//   console.log(v); // value
// }

// let numbers = [1, 2, 3];
// let nuwNum;
// // forEach ❌ gives NO new list
// numbers.forEach((num) => {
//   return console.log(nuwNum=num * 2); // this is LOST!
// });
// Keep guessing until correct
// let guess = 0;

// while (guess !== 7) {
//   guess = 7 // user guesses
//   console.log("Guessing...");
// }
// console.log("Correct! ✅");
// // Runs until guess is correct

// const salary = { alice:10000, bob: 15000, charlie: 12000 };

// console.log("charlie" in salary);
// console.log("jhone" in salary);

// const person = {};
// // console.log(person);

// const name = Object.create(person)
// const nameData = { name: "Aravind" };
// const age = { age: 26 };

// const result = Object.assign({}, nameData, age);
// console.log(result);
// const nums = [1, 2, 3, 4, 5];

// nums.splice(1, 1); // start 2 from the end, remove 1

// console.log(nums); // [1, 2, 3, 5]

// const numbers = [1, 2, 3];

// function getFirstTwoElements(arr) {
//   return arr.splice(1, 2);
// }
// const result = getFirstTwoElements(numbers);
// console.log(result);
// console.log(numbers);

// console.log(numbers.map((num)=>num*2));

// const obj={
//   name : "Aravind",
//   age : 26,
//   city : "Kochi"

// }
// console.log(obj);

// const value = 2.66

// const result = Number(  value.toFixed(1))
// console.log(typeof result);

const value = "JavaScript";

for (let i = value.length-1; i >= 0; i--) {
  console.log(value[i]);
}
