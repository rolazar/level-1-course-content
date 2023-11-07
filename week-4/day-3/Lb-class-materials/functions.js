// Week 4: Day 3 – Understanding and Leveraging Functions in JavaScript

// Instructor Note: Start with an introduction to what functions are.
// Explain that functions are blocks of code that perform a specific task and can be reused.
// Mention how functions are fundamental to JavaScript.

// Instructor Note: Relate to the students' knowledge of built-in functions.
// Describe functions like alert(), prompt(), and string methods such as .toUpperCase() as functions they've already used.

// Instructor Note: Highlight that these functions save us from rewriting complex code.
// For instance, instead of converting a string to uppercase letter by letter, we use .toUpperCase().

// Discussing Function Syntax
// Instructor Note: Show the basic syntax of a function.
function functionName() {
  // Code to be executed
}

// Instructor Note: Emphasize the parentheses '()' as a key feature that distinguishes functions.

// Functions We've Already Seen
// Instructor Note: Remind the students that alert and prompt are functions that we call to interact with the user.
// Mention that .slice() is a method, which is a function that's attached to an object, in this case, a string.

// Instructor Note: Now let's manually replicate what slice() does, using indexing.
// Manually demonstrate .slice() with indexing
let myStr = 'superman';

// Instead of using myStr.slice(0,5), let's do it manually:
console.log(myStr[0] + myStr[1] + myStr[2] + myStr[3] + myStr[4]);

// Instructor Note: Explain how tedious the manual method is compared to using the slice() function.

// Invoking Functions
// Instructor Note: Define a simple function called sayHello.
function sayHello() {
  console.log('Hello!');
}

// Instructor Note: Call the sayHello function multiple times to demonstrate invocation.
sayHello(); // First call
sayHello(); // Second call
// etc...

// Instructor Note: Show what happens if you forget the parentheses.
console.log(sayHello); // This will print the function's definition, not execute it.

// Instructor Note: Now, show invoking a function with different parameters to illustrate flexibility.
function greet(person) {
  console.log('Hello, ' + person + '!');
}

greet('Alice'); // Invoke with "Alice"
greet('Bob'); // Invoke with "Bob"

// Instructor Note: Highlight that functions can be called as many times as needed with different arguments.

// Instructor Note: Now let's introduce some functions that perform specific tasks and return values.

// Function to calculate the area of a rectangle
// Instructor Note: Walk through the calculation step by step, pointing out the use of parameters and return statement.
function calculateAreaOfRectangle(length, width) {
  const area = length * width;
  return area;
}

// Function to convert Fahrenheit to Celsius
// Instructor Note: Explain the formula for converting Fahrenheit to Celsius, highlighting the importance of the return statement.
function convertFahrenheitToCelsius(temperatureInFahrenheit) {
  const celsius = (temperatureInFahrenheit - 32) * (5 / 9);
  return celsius;
}

// Function to greet a user
// Instructor Note: Discuss how we can use template literals to include variables within strings.
function greetUser(name) {
  const greeting = `Hello, ${name}! Welcome to our website.`;
  return greeting;
}

// Instructor Note: Demonstrate how to call the above functions with sample data and log the results.

const rectangleArea = calculateAreaOfRectangle(5, 8);
const celsiusTemperature = convertFahrenheitToCelsius(68);
const userGreeting = greetUser('John Doe');

// Instructor Note: Point out how the functions can be used with different parameters to perform the same action on different data.

console.log('Area of the rectangle:', rectangleArea);
console.log('Temperature in Celsius:', celsiusTemperature);
console.log('User Greeting:', userGreeting);

// Instructor Note: Emphasize the reusability of functions and how they help us avoid repeating code.

// Instructor Note: Indicate the break here with a comment.
// --------- 10-MINUTE BREAK ---------

// After the Break: Going Deeper with Functions

// `function` Keyword vs. Variable Declarations
// Instructor Note: Discuss hoisting by declaring a function above where it's defined.
// Mention that functions can be called before they are defined in the code due to hoisting.
hoistedFunction(); // This works because function declarations are hoisted.

function hoistedFunction() {
  console.log('This function has been hoisted!');
}

// Instructor Note: Now show a variable declaration with const and let and explain why it would throw an error if called before declaration.
// try {
//   console.log(notHoisted); // This will throw a ReferenceError because it's not hoisted.
// } catch (e) {
//   console.log(e);
// }

// let notHoisted = "This variable is not hoisted because it's declared with let.";

// Function Expressions
// Instructor Note: Define a function expression by assigning a function to a variable.
const myFunc = function () {
  console.log('This is a function expression!');
};

// Instructor Note: Call the function expression to show how it works.
myFunc(); // Invoke the function expression

// Array of Functions
// Instructor Note: Explain that functions can be stored in arrays.
const functionsArray = [
  function () {
    console.log('First function in array called.');
  },
  function () {
    console.log('Second function in array called.');
  },
];

// Instructor Note: Invoke functions from the array to demonstrate.
functionsArray[0](); // Calls the first function
functionsArray[1](); // Calls the second function

// Arrow Functions
// Instructor Note: Introduce the syntax for an arrow function.
const arrowFunc = () => {
  console.log('This is an arrow function.');
};

// Instructor Note: Show how to convert an arrow function to a traditional function.
// Arrow function: const arrowFunc = () => console.log("This is an arrow function.");
// Converted to traditional function:
function traditionalFunc() {
  console.log('This is a traditional function.');
}

// Instructor Note: Encourage practice but stick to the `function` keyword for simplicity in the beginning.

// Wrap-Up and Day's Recap
// Instructor Note: Recap the day's content on functions and their importance.
// Prepare the students for the workshop activity and encourage them to write their own functions.

// ------------ END OF LECTURE ------------

// Instructor Note: The following time is reserved for the breakout workshop session.
// Provide exercises and problems for students to solve using functions.
