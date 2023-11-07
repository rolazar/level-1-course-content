/* 
Section 1: Introduction to Variables 
In this section, we discuss the basics of variable assignment and declaration.
*/

// Use strict mode is recommended to avoid common pitfalls in JS.
'use strict';

// Instructor notes:
// Start with discussing 'use strict' and its benefits. Then, show how to accidentally create a global variable without it.

// Example of incorrect variable assignment that creates an accidental global variable without 'use strict'
// Instructor should remove 'use strict' to demonstrate this part.
let userName = 'Alice';
userNAme = 'Bob'; // Notice the typo in the variable name that leads to the creation of a new global variable.

// Instructor notes:
// Point out the typo and discuss how 'use strict' helps prevent such errors by throwing a reference error.

// Accessing variables using dev tools
// Instructor notes:
// Show students how to log variables to the console and access them through browser developer tools.

let age = 25;
console.log(age); // Outputs the age to the console.

// Introduction to console.log method
// Instructor notes:
// Explain the console.log method as a way to output information to the console for debugging purposes.

console.log('User name is', userName, 'and their age is', age);

/* 
Section 2: Constants and Legacy Variable Declaration 
Here we discuss the 'const' keyword and briefly touch upon 'var'.
*/

// Using const for values that should not change.
const birthYear = 1994;

// Instructor notes:
// Explain that attempting to reassign a 'const' will result in an error. Uncomment the line below during demonstration.
// birthYear = 1995; // Should produce an error because 'birthYear' is a constant.

// Brief mention of 'var' and its pitfalls
// Instructor notes:
// Mention that 'var' has some unexpected behavior and will be covered in future lessons. Advise using 'let' instead of 'var'.

var outdatedVariable = 'This is old school';
// Instructor notes:
// Let students know that they might encounter 'var' in older code examples but should default to using 'let' or 'const'.

/*
Section 3: Primitive Data Types
This section will cover the basics of primitive data types in JavaScript.
*/

// Numbers
let score = 10;
// Instructor notes:
// Numbers include integers and floats.

// Strings
let greeting = 'Hello';
// Instructor notes:
// Strings are used for text and can include both single and double quotes.

// Booleans
let isLoggedin = true;
// Instructor notes:
// Booleans represent a truthy or falsy value.

// Null
let empty = null;
// Instructor notes:
// Null is used to represent the intentional absence of any object value.

// Undefined
let notAssigned;
// Instructor notes:
// Undefined is the default value of a variable that has not been assigned a value.

// Instructor notes:
// Insert a comment for the break here.
// ---------------- Break ----------------

/*
Section 4: Interaction with the User
Discussing alert, prompt, and document.write to interact with the user.
*/

// Alert
alert('Welcome to our website!');
// Instructor notes:
// Alert is used to show a message to the user.

// Prompt
let userName = prompt('Please enter your name:');
// Instructor notes:
// Prompt is used to ask for input from the user.

// Document.write
document.write('Your name is ' + userName);
// Instructor notes:
// Document.write is used to write directly to the HTML document.

/*
Section 5: Strings and their Properties
Exploring string properties, concatenation, escape characters, and template literals.
*/

// Concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
// Instructor notes:
// Explain how the + operator is used to concatenate strings together.

// Escape Characters
let sentence = 'He said, "JavaScript is awesome!"';
// Instructor notes:
// Show how to use escape characters like \" to include quotes within a string.

// Template Literals
let newFullName = `${firstName} ${lastName}`;
// Instructor notes:
// Template literals allow for easier-to-read string concatenation and can include expression interpolation.

// String Indexing
let firstLetter = firstName[0];
// Instructor notes:
// Discuss how strings are indexed starting from 0.

// Length property
let nameLength = firstName.length;
// Instructor notes:
// The length property returns the number of characters in a string.

// Attempting to access an index that is out of bounds
let nonExistentCharacter = firstName[nameLength]; // Returns undefined
// Instructor notes:
// Explain that accessing an index equal to the length of the string returns undefined because indexing starts at 0.

/*
Section 6: Important String Methods
Introducing string methods and their usefulness in manipulating strings.
*/

let upperCaseName = firstName.toUpperCase();
let lowerCaseName = firstName.toLowerCase();
// Show slice so the students see how arguments can be used in methods, but dont deep dive.
console.log('superman'.slice(0, 5)); // start at index 0, end on index 4 (does not include index 5)
// Instructor notes:
// Demonstrate a couple of string methods and encourage exploration of others as time permits.
