// String Example
const greeting = 'Hello, World!';
console.log(greeting); // Challenge 1: Predict the output of this line.

// Array Example
const colors = ['Red', 'Green', 'Blue'];
console.log(colors[2]); // Challenge 2: What is the output here? Why?

// Nested Object Example
const smartphone = {
  brand: 'TechPhone',
  model: 'X1000',
  specifications: {
    memory: '128GB',
    camera: '12MP',
    battery: '4500mAh',
  },
  availableColors: ['Black', 'White', 'Blue'],
};
console.log(smartphone.specifications.camera); // Challenge 3: Find the camera specification.
console.log(smartphone.availableColors[1]); // Challenge 4: Which color does this index refer to?

// Function Declaration
function findLargest(a, b) {
  return a > b ? a : b;
}
console.log(findLargest(15, 10)); // Challenge 5: Determine the larger number.

// Function Expression
const getFullName = function (firstName, lastName) {
  return firstName + ' ' + lastName;
};
console.log(getFullName('John', 'Doe')); // Challenge 6: Construct the full name.

// Arrow Function
const calculateArea = (length, width) => length * width;
console.log(calculateArea(5, 10)); // Challenge 7: Calculate the area.

// Object Literal with Methods
const mathOperations = {
  add: (a, b) => a + b,
  subtract(a, b) {
    return a - b;
  },
  name: 'Math Operations',
};
console.log(mathOperations.name); // Challenge 8: Identify the object's property.
console.log(mathOperations.add(12, 3)); // Challenge 9: Perform an addition operation.

// String Concatenation and Slicing
const phrase = 'Learning JavaScript is fun!';
console.log(phrase.slice(9, 19)); // Challenge 10: What part of the string is extracted?
console.log(phrase + ' And useful.'); // Challenge 11: Predict the final string.

// Accessing Object within Array
const teamMembers = [
  { name: 'Alice', role: 'Developer' },
  { name: 'Bob', role: 'Designer' },
];
console.log(teamMembers[1].name); // Challenge 12: Identify the second team member's name.
