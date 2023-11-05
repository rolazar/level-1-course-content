// Day 1: Variables, Primitives, and Basic Interaction
// Instructor Note: Begin with an explanation of what variables are and the types of primitive data in JavaScript: string, number, boolean, null, undefined, symbol, and bigint.

// Variables
let message = 'Hello, JavaScript!';
alert(message); // Display a pop-up with the message

// String indexing
let firstChar = message[0]; // 'H'
console.log(firstChar);

// String methods
console.log(message.toUpperCase()); // Convert message to uppercase
console.log(message.slice(0, 5)); // Extracts 'Hello'

// Instructor Note: Demonstrate the use of prompt for user input and document.write to display content on the webpage.
let userName = prompt("What's your name?");
document.write(`Welcome, ${userName}!`); // Displays a welcome message on the page

// Day 2: Fundamentals with Arrays
// Instructor Note: Explain that arrays are used to store multiple values in a single variable.

let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.join(' - ')); // Join all elements into a string separated by ' - '

// Array manipulation
fruits.push('Dragonfruit'); // Add an item at the end
console.log(fruits);
fruits.pop(); // Remove the last item
console.log(fruits);

// Day 3: Fundamentals with Functions
// Instructor Note: Discuss the importance of functions for code reuse and modularity.

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet(userName)); // Greet the user by name

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Outputs: 6

// Instructor Note: Introduce the concept of function scope and the block scope.

// Day 4: Objects
// Instructor Note: Explain that objects are collections of properties and methods.

const superhero = {
  name: 'Batman',
  city: 'Gotham',
  isVigilante: true,
  allies: ['Robin', 'Batgirl', 'Superman'],
  introduce: function () {
    console.log(`I am ${this.name}, the protector of ${this.city}.`);
  },
  addAlly: function (ally) {
    this.allies.push(ally);
    console.log(this.allies);
  },
};
superhero.introduce();
superhero.addAlly('Nightwing');

// Day 5: Review and Variable Hoisting
// Instructor Note: Take a moment to review the previous concepts before the break.

// Review of variables
console.log(`Your name is still ${userName}, right?`); // Recall the userName from Day 1

// Review of arrays
console.log(`Here's an array of fruits from Day 2: ${fruits.join(', ')}`);

// Review of functions and scope
console.log(
  `The multiply arrow function from Day 3 gives us: ${multiply(5, 8)}`
);

// Review of objects
console.log(`Does ${superhero.name} still live in ${superhero.city}?`);

// 10-Minute Break
// Instructor Note: Announce a 10-minute break before continuing with the demonstration of variable hoisting.

// Understanding `var` and its peculiarities
// Instructor Note: Explain that `var` has function scope and is hoisted, which can lead to unexpected behavior.

// Example of var hoisting
function varHoistingExample() {
  console.log(hoistedVar); // Output: undefined due to hoisting
  var hoistedVar = 'var is hoisted';
  console.log(hoistedVar); // Output: 'var is hoisted'
}
varHoistingExample();

// Instructor Note: Explain why modern JavaScript favors `let` and `const` due to block scoping, which prevents the issues seen with `var`.

// Template Literals and Expressions
// Instructor Note: Explain template literals and how they can be used to embed expressions.
let price = 10;
let taxRate = 0.05;
let totalPrice = `Total Price: $${(price * (1 + taxRate)).toFixed(2)}`;
console.log(totalPrice); // Outputs: Total Price: $10.50

// Default Function Parameters
// Instructor Note: Introduce the concept of default parameters in functions.
function calculateTotal(price, taxRate = 0.05) {
  return price * (1 + taxRate);
}
console.log(calculateTotal(20)); // No tax rate passed, defaults to 0.05
console.log(calculateTotal(20, 0.1)); // Tax rate is passed as 0.1

// Destructuring Assignments
// Instructor Note: Teach how to extract data from arrays or objects into distinct variables.
const rgb = [255, 0, 0];
const [red, green, blue] = rgb;
console.log(red, green, blue); // Outputs: 255 0 0

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
};
const { firstName, email } = user;
console.log(firstName, email); // Outputs: John john.doe@example.com

// Spread and Rest Operators
// Instructor Note: Show how to use spread syntax to expand elements and rest syntax to collect arguments.

// Spread for arrays
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // Outputs: [1, 2, 3, 4, 5, 6]

// Rest for function arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Instructor Note: Use the examples to explain how each feature contributes to cleaner and more expressive code. Encourage the students to think of scenarios where these could be particularly useful.

// Conclusion
// Instructor Note: Summarize the day's lesson and remind students how the new concepts build on what they've already learned. Reiterate the importance of understanding scope and why modern JavaScript has introduced `let` and `const` to avoid the pitfalls of `var`.

// End of Day 5 Content.
