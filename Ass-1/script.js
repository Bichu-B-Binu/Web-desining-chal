// const clicked = () => {
//   const input = document.getElementById("inp").value;
//   document.getElementById("hi").innerHTML=input
// };

// const color = (clr) => {
//   document.getElementById("screen").style.backgroundColor = clr;
// }

// Declare variables using var, let, and const and display their values with console.log.

var nam = "Jot";
let age = 40;
const gar = "Goa";
console.log(`name is ${nam} age is ${age} place ${gar}`);

// Write a for loop that prints numbers 1–10 in the console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Create a simple function that takes a number and returns its square.
let num = 10;
const sqr = () => {
  let sqr = num * num;

  return console.log(sqr);
};
sqr();

// Build a small HTML page with an input field and a button, and display an alert on button click.

const clicked = () => {
  const input = document.getElementById("inp").value;

  alert(input);
};
// Create an object with at least 3 properties and display them on the webpage.
const person = {
  personName: "Joan",
  personAge: 100,
  personPlace: "pattaya",
};
const obj = () => {
  document.getElementById("name").innerHTML = person.personName;
  document.getElementById("age").innerHTML = person.personAge;
  document.getElementById("place").innerHTML = person.personPlace;
};
