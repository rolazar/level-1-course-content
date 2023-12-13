/**
 * Week 6: Day 3 – Callback Functions and Array Methods in JavaScript
 *
 * This file contains expanded examples and exercises to accompany the lecture.
 * Follow the comments to guide your lecture and demonstrate each concept.
 */

// 1. Introduction to Callback Functions
// --------------------------------------------------

// Explaining what a callback function is
// - A function passed into another function as an argument, which is then invoked inside the outer function.

// Example of a callback function
function greet(name) {
  console.log('Hello ' + name);
}
console.log(greet); // Show what reference to a function looks like in the console
function processInput(callback) {
  let name = 'Alice'; // Simulating user input
  callback(name);
}

// Using addEventListener with a callback function
// --------------------------------------------------

// Example: Adding an event listener to a button click

// Assuming there is a button element with the id 'myButton' in your HTML
const button = document.getElementById('myButton');

// The callback function that will be executed when the button is clicked
function onButtonClick() {
  console.log('Button was clicked!');
}

// Adding the event listener to the button
// Here, onButtonClick is a callback function that gets executed when the 'click' event happens

button.addEventListener('click', onButtonClick);

// Another example: Passing an anonymous function directly
button.addEventListener('click', function () {
  console.log('Button clicked (anonymous function)');
});

// Demonstrating how event objects can be used in callback functions
button.addEventListener('click', function (event) {
  // The event object contains information about the event
  console.log('Event type:', event.type); // will log 'click'
});
// Demonstrate the callback
// processInput(greet);

// Additional example: using callbacks for array operations
const numbers = [1, 2, 3, 4, 5];
//* demo this with the a normal function declaration too, and explain how its reference to a function.
numbers.forEach(function (number) {
  console.log(number * 2); // doubling each number
});

// 2. Exploring Array Methods: map, filter, forEach
// --------------------------------------------------

// The map method
const squared = numbers.map((number) => number ** 2);
console.log(squared);

// The filter method
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

// The forEach method
numbers.forEach((number) => console.log(`Number: ${number}`));

// More complex example with map
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

const names = people.map((person) => person.name);
console.log(names);

// 3. Array Methods in Action
// --------------------------------------------------

// Real-world example of filter and map
const adults = people.filter((person) => person.age >= 30);
const adultNames = adults.map((adult) => adult.name);
console.log(adultNames);

// forEach for logging
people.forEach((person) =>
  console.log(`${person.name} is ${person.age} years old.`)
);

/**
 * 4. Understanding Reference vs Primitive Types
 * --------------------------------------------------
 *
 * This section delves deeper into the differences between reference and primitive types in JavaScript,
 * highlighting their behaviors and implications in programming.
 */

// Reference Types: Objects and Arrays
// - When you assign a reference type to another variable, they both refer to the same memory location.

let person1 = { name: 'Alice' };
let person2 = person1; // person2 now references the same object as person1

// Modifying person2 will affect person1 as well
person2.name = 'Bob';
console.log(person1.name); // Outputs 'Bob' - because person1 and person2 point to the same object

// Demonstrating with arrays
let array1 = [1, 2, 3];
let array2 = array1; // Both arrays refer to the same memory location

// Modifying array2 affects array1
array2.push(4);
console.log(array1); // Outputs [1, 2, 3, 4]

// Primitive Types: String, Number, Boolean, etc.
// - Primitive types hold the value itself, and when you assign it to another variable, a copy is made.

let num1 = 10;
let num2 = num1; // num2 is a copy of num1

// Modifying num2 does not affect num1
num2 = 20;
console.log(num1); // Outputs 10 - num1 remains unchanged

// Demonstrating with strings
let str1 = 'Hello';
let str2 = str1; // str2 is a separate copy of str1

// Modifying str2 doesn't affect str1
str2 = 'World';
console.log(str1); // Outputs "Hello"

/**
 * 5. Practical Implications of Type Differences
 * --------------------------------------------------
 *
 * Understanding the behavior of reference and primitive types is crucial to avoid bugs and write efficient code.
 */

// Cloning Objects to Avoid Unintentional Modifications
let originalPerson = { name: 'Carol' };
let clonedPerson = { ...originalPerson }; // Using spread operator to create a shallow clone

// Modifying clonedPerson does not affect originalPerson
clonedPerson.name = 'Dave';
console.log(originalPerson.name); // Outputs 'Carol'

// Deep Cloning - When objects contain other objects
let complexPerson = {
  name: 'Eve',
  address: { city: 'New York', country: 'USA' },
};
//! Without creating prototype functions there is no way to see a difference between deep and shallow copies
let deepClonedPerson = JSON.parse(JSON.stringify(complexPerson));

// Modifying deepClonedPerson's address does not affect complexPerson
deepClonedPerson.address.city = 'Los Angeles';
console.log(complexPerson.address.city); // Outputs 'New York'

// Demonstrating the limitations of shallow cloning
let shallowClonedPerson = { ...complexPerson };
shallowClonedPerson.address.city = 'Boston';
console.log(complexPerson.address.city); // Outputs 'Boston' - shallow clone does not work for nested objects

/**
 * Note: This expanded section provides a deeper understanding of how JavaScript handles data storage and manipulation.
 *       Use these examples to explain the importance of considering data types in programming logic and bug resolution.
 */

// Wrap-Up
// --------------------------------------------------

// Summarize the key concepts: callback functions, array methods, reference vs primitive types.
// Remind students to practice these concepts and explore further with additional examples.

/**
 * Note: The code contains comments and examples suitable for a lecture.
 *       Uncomment and run parts of the code as needed during the lecture.
 */
