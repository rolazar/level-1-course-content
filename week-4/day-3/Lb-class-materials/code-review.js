/* Day 2: Arrays and More */
'use strict';

// Line 1: Declaring a string variable with 'let'
let exampleString = 'JavaScript';

// Line 2: Logging the first character of the string using indexing
console.log(exampleString[0]); // Outputs: "J"

// Line 3: Using 'slice' method to extract a part of the string
console.log(exampleString.slice(0, 4)); // Outputs: "Java"

// Line 4: Declaring multiple variables with 'let'
let firstName = 'John',
  lastName = 'Doe',
  age = 39;

// Line 5: Concatenating strings to form a full name
let fullName = firstName + ' ' + lastName;

// Line 6: Declaring an array with different data types
let favoriteThings = ['Pizza', 42, true, 'Blue'];

// Line 7: Accessing the first item in the array
console.log(favoriteThings[0]); // Outputs: "Pizza"

// Line 8: Finding the length of the array
console.log(favoriteThings.length); // Outputs: 4

// Line 9: Adding a new element to the end of the array with 'push'
favoriteThings.push('Jazz');

// Line 10: Removing the last element from the array with 'pop'
favoriteThings.pop();

// Line 11: Declaring a 2D array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Line 12: Accessing an element in a 2D array
console.log(matrix[0][2]); // Outputs: 3

// Line 13: Changing a specific element in an array
favoriteThings[1] = 'Rock Music';

// Line 14: Declaring a constant array
const constantArray = ['Coding', 'Teaching', 'Learning'];

// Line 15: Trying to modify the constant array (allowed for elements)
constantArray[0] = 'Programming';
