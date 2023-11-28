// Week 6: Day 1 Lecture Demo - Part 1

// Accessing an element by ID
const container = document.getElementById('container');

// Creating new elements: paragraphs, divs, etc.
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph element.';

// Appending new elements to the container
newDiv.appendChild(newParagraph);
container.appendChild(newDiv);

// Modifying elements: changing text, styles, etc.
newParagraph.style.color = 'blue';
newParagraph.style.fontSize = '20px';

// Introduction to Comparison Operators and Conditional Statements
// -----------------------------------------------------

// Explain comparison operators: ==, ===, !=, !==, >, <, >=, <=
// These operators are used to compare values and return a boolean result.

// Example using 'if', 'else if', and 'else'
const exampleValue = 10;
if (exampleValue > 15) {
  console.log('The value is greater than 15');
} else if (exampleValue < 5) {
  console.log('The value is less than 5');
} else {
  console.log('The value is between 5 and 15');
}

// Discuss the difference between == and ===
// == compares only values, whereas === compares both value and type.

// Adding a title to our container for the quiz
const quizTitle = document.createElement('h2');
quizTitle.textContent = 'Yes or No Quiz';
container.appendChild(quizTitle);

// Comparison Operators and Simple Quiz
// -----------------------------------------------------

// Function to create a question using DOM
function createQuestion(questionText) {
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';

  const questionP = document.createElement('p');
  questionP.textContent = questionText;

  questionDiv.appendChild(questionP);
  container.appendChild(questionDiv);

  // Using prompt to get user input
  const userAnswer = prompt(questionText + ' (yes/no)');
  const answerP = document.createElement('p');

  // Using comparison operators to check the answer
  if (userAnswer.toLowerCase() === 'yes') {
    answerP.textContent = 'You answered YES.';
  } else if (userAnswer.toLowerCase() === 'no') {
    answerP.textContent = 'You answered NO.';
  } else {
    answerP.textContent = 'Invalid answer. Please respond with yes or no.';
  }

  answerP.style.fontWeight = 'bold';
  questionDiv.appendChild(answerP);
}

// Creating a few sample questions
createQuestion('Is JavaScript a programming language?');
createQuestion('Is the sky green?');
createQuestion('Can JavaScript manipulate the DOM?');

// Note: Encourage students to think about how DOM manipulation and basic logic work together.
// Discuss how this simple quiz could be expanded or improved.
