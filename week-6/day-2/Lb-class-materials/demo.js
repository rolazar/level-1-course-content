/*
Week 6: Day 2 – Understanding Loops in JavaScript

Session Outline
----------------

Introduction
-------------
What to Say:
"Today, we're going to explore loops in JavaScript, a fundamental concept that enables us to run a block of code repeatedly. We'll look at `for` and `while` loops, understand their syntax, and see how they can be applied in real-world scenarios."

1. Introduction to Looping Constructs
--------------------------------------
What to Say:
"Loops are essential in programming for executing repetitive tasks. JavaScript offers several loop constructs, each with its unique use cases."
Figma Activity:
Draw a simple flowchart showing a looping process.
What to Draw:
Start with a start point, an arrow leading to a condition check, a block for the loop body, and an arrow looping back to the condition.

2. Mastering `for` Loops
------------------------


/*
What to Say:
"Let's dive deeper into `for` loops. We'll start by printing a simple list of numbers, then perform some math on these numbers. We'll also look at counting forwards and backwards. Finally, I'll show you how to iterate over an array using a `for` loop, which is a common use case in JavaScript."
*/

// Example: Printing a List of Numbers
console.log('Printing a List of Numbers:');
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Explain: This loop prints numbers from 0 to 9.

// Example: Performing Math on Loop Numbers
console.log('Performing Math on Numbers:');
for (let i = 0; i < 10; i++) {
  console.log(i * 2); // Multiplying each number by 2
}
// Explain: This loop multiplies each number by 2 and prints the result.

// Example: Counting Forwards
console.log('Counting Forwards:');
for (let i = 0; i < 10; i++) {
  console.log(`Forward Count: ${i}`);
}
// Explain: We're counting from 0 to 9, moving forward.

// Example: Counting Backwards
console.log('Counting Backwards:');
for (let i = 9; i >= 0; i--) {
  console.log(`Backward Count: ${i}`);
}
// Explain: Here we count backwards from 9 to 0.

// Example: Iterating Over an Array
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

console.log('Iterating Over an Array:');

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Explain: We're using the loop to access each element in the array by its index.

/*
What to Say:
"Notice how in the array example, we use the variable 'i' to access each element's index. Let's see what it looks like to print each element without a loop and then with a loop."
*/

// Without Loop: Printing Array Elements
console.log('Printing Array Elements Without Loop:');
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
console.log(fruits[3]); // Date
// Explain: Here we're accessing each element of the array manually.

// With Loop: Printing Array Elements
console.log('Printing Array Elements With Loop:');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Explain: This loop simplifies the process, allowing us to print each element without manually accessing each index.
/*
3. Exploring `while` Loops
--------------------------
What to Say:
"Now, let's look at `while` loops. They're similar to `for` loops but are used when the number of iterations is not known in advance."
Code to Show:
*/
// while loop example
console.log('while loop example:');
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
// Explain: This loop also prints numbers from 0 to 4, but the condition is checked before the loop body.
/*
4. `for` vs `while`: Choosing the Right Loop
--------------------------------------------
What to Say:
"Choosing between `for` and `while` loops depends on your specific needs. Use `for` loops for a known number of iterations and `while` loops for unknown or variable numbers of iterations."
Figma Activity:
Illustrate the decision-making process with a flowchart.
What to Draw:
A flowchart that starts with "Is the number of iterations known?" leading to either a `for` loop or a `while` loop.

5. Nested Loops and Advanced Concepts
-------------------------------------
What to Say:
"Nested loops are loops inside loops. They are useful for working with multi-dimensional arrays or complex data structures."
Code to Show:
*/
// nested loop example
console.log('nested loop example:');
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}
// Explain: This nested loop prints pairs of numbers, showing how the inner loop completes its iteration for every single iteration of the outer loop.
/*
Wrap-Up
-------
What to Say:
"Today, we've covered the basics of `for` and `while` loops in JavaScript. Remember, understanding loops is crucial for controlling program flow and handling repetitive tasks efficiently."

Interactive Elements
--------------------
Code-Along Segments:
Encourage participants to write their own loops based on the examples shown.
Loop Challenges:
Pose simple challenges like reversing an array using a loop or counting the number of odd numbers within a range.
Debugging Loop Errors:
Show common loop mistakes and ask participants to identify and correct them.

Reminder for Instructor:
As an instructor, your role is to clarify the logic behind each type of loop and encourage students to experiment and discover the applications of loops in various scenarios. Tailor your examples to suit different learning styles and levels of understanding.
*/

// Additional code examples and challenges can be added here as needed to extend the session to the full two-hour duration.
