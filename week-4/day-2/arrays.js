/* Day 2: Arrays and More */
'use strict;';
/* Recap of Strings */
// Quick recap on string indexing
console.log('Recap: String indexing');
let exampleString = 'JavaScript';
console.log(exampleString[0]); // Outputs: "J"

// String methods like slice
console.log('String methods: .slice()');
console.log(exampleString.slice(0, 4)); // Outputs: "Java"

/* Variable Declarations */
console.log('Variable declarations');
let firstName = 'John';
let lastName = 'Doe';
let city = 'New York';
let country = 'USA';
let occupation = 'Developer';
let hobby = 'Photography';
let favoriteFood = 'Pizza';
let favoriteColor = 'Blue';
let favoriteMusic = 'Jazz';
let favoriteBook = '1984';

/* Segway into Arrays */
console.log('Introduction to arrays');
// Declare an array literal
let favoriteThings = ['Pizza', 'Blue', 'Jazz', favoriteBook];

// Alerting the array and accessing its items

alert(favoriteThings);
console.log('Accessing array items');
console.log(favoriteThings[0]); // Outputs: "Pizza"

// Using .length property
console.log('Array length property');
console.log(favoriteThings.length); // Outputs: 4

// Inject array items into a string template
console.log(`Some of my favorite things: ${favoriteThings.join(', ')}`);

/* Break */ 
// Instructor Note: This is a good place to take a short break

/* More on Arrays and Strings */
console.log('Indexing arrays and strings');
// Show nested indexing
console.log('Nested indexing: ' + ['strings'][0][3]); // Outputs: "i"

// Assigning elements to an array using indexing
console.log('Assigning new elements to an array');
favoriteThings[4] = 'Chess'; // Add a new favorite thing
console.log(favoriteThings);

// What happens when you skip an index
favoriteThings[6] = 'Programming'; // Skips the index 5
console.log(favoriteThings); // Index 5 will be "empty"

/* Array Manipulation Methods */
console.log('Array manipulation: push() and pop()');
// Push and Pop
favoriteThings.push('Tea'); // Adds to the end
console.log(favoriteThings);
favoriteThings.pop(); // Removes from the end
console.log(favoriteThings);

console.log('Array manipulation: shift() and unshift()');
// Shift and Unshift
favoriteThings.shift(); // Removes the first element
console.log(favoriteThings);
favoriteThings.unshift('Coffee'); // Adds to the beginning
console.log(favoriteThings);

// Using const with arrays
console.log('Using const with arrays');
const arrayExample = [1, 2, 3];
arrayExample.push(4); // This is allowed
console.log(arrayExample);

/* 2D Arrays */
console.log('2D arrays');
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0][2]); // Access the third element of the first array

/* Instructor Note */
// Encourage students to try their own methods and play with the arrays.
// Show more examples if time allows, and prepare for exercises and tasks.
