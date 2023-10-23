'use strict';

// !! THIS IS THE ANSWERS TO THE HOMEWORK DO NOT USE DIRECTLY, PLEASE MODIFY DURING LECTURE !!

// Variables
const firstName = "John";
let age = 30;
let isStudent = false;

console.log("My name is " + firstName + ", I am " + age + " years old, and my student status is " + isStudent + ".");

// Objects
let person = {
  firstName: firstName,
  age: age,
  isStudent: isStudent
};

console.log("Person Object:", person);

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log("Initial Fruits Array:", fruits);

fruits.unshift("grape"); // Add a new fruit to the beginning
console.log("Fruits Array after Adding a Fruit:", fruits);

fruits.pop(); // Remove the last fruit
console.log("Fruits Array after Removing the Last Fruit:", fruits);

fruits.shift(); // Remove an item at the front
console.log("Fruits Array after Removing the First Fruit:", fruits);

// Functions
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

//!! can utilize .slice() to create a copy of the array and then .reverse() to reverse the copy as another option to solve
function reverseArray(arr) {
  return arr.reverse();
}

// Console Logs
console.log("Perimeter of a rectangle (4x6):", calculatePerimeter(4, 6));

let originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reverseArray(originalArray));