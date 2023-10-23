'use strict';

// Define arrays as ordered, list-like collections
let fruits = ['apple', 'banana', 'orange'];

// Demonstrate the creation of arrays using square brackets
let numbers = [1, 2, 3, 4, 5];

// Explain zero-based indexing and accessing items within arrays
console.log(fruits[0]); // Access the first element
console.log(numbers[2]); // Access the third element


// Introduce core array methods
numbers.push(6); // Add an item to the end
console.log('we added 6 to our numbers array ' + numbers)
numbers.pop();   // Remove an item from the end
console.log('we removed 6 from our numbers array ' + numbers)
numbers.shift(); // Remove the first item
console.log('we removed the first item from our numbers array ' + numbers)
numbers.unshift(0); // Add an item to the beginning
console.log('we added 0 to the beginning of our numbers array ' + numbers)


// Elaborate on the length property and others
console.log(numbers.length); // Print the length of the array
console.log(Array.isArray(numbers)); // Check if it's an array


// Example: Add more fruits to the 'fruits' array
fruits.push('grapes');
fruits.push('kiwi');
console.log(fruits); // Print the updated array