// Week 6 Lab Assignment Demo - JavaScriptLogicDOM

// Part 2: DOM Manipulation
// -----------------------------------------------------

// Accessing the container div from the index.html
const container = document.getElementById('outputContainer');

// Accessing the input field and button from index.html
const userInputField = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');

// Function to create and append a paragraph to the container
function displayOutput(message) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = message;
  container.appendChild(newParagraph);
}

// Part 3: Implementing Comparisons and Control Structures
// -----------------------------------------------------

// Event listener for the button click
submitButton.addEventListener('click', function () {
  // Retrieving the value entered by the user
  const userInput = userInputField.value;

  // Check if the input is empty
  if (userInput.trim() === '') {
    displayOutput('Please enter a value.');
    return;
  }

  // Example of using comparison operators and if-else statements
  // Here we check if the input is a specific number
  if (parseInt(userInput) === 10) {
    displayOutput('You entered number 10!');
  } else if (userInput.toLowerCase() === 'hello') {
    displayOutput('Hello to you too!');
  } else {
    displayOutput('You entered: ' + userInput);
  }
});

// Part 4: Enhancing Output
// -----------------------------------------------------

// The output is already being enhanced by updating every time the user clicks the button.
// The displayOutput function is responsible for this dynamic update.

// Note: This script demonstrates how to create an interactive web page using basic DOM manipulation and JavaScript logic.
// Students should be encouraged to experiment with different comparison operators and control structures to see the varied results.
