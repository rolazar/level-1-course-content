# Homework for Week 4: Day 5 – Consolidation and Recap of JavaScript Fundamentals

This assignment will test your understanding of variables, functions, objects, and arrays. You'll be working with data and applying various operations.

## Instructions

1. **Setup Environment**
      - Open your code editor (e.g., Visual Studio Code).
      - Create a new folder called JS_Review_Assignment on your local machine.

2. **Create Files**
      - Inside the JS_Fundamentals_Assignment folder, create two files:`scripts.js` and `index.html`.
      - Note that we won't be working with the HTML DOM in this assignment.

3. **JavaScript Tasks**

- In the scripts.js file, perform the following tasks:

  - **Variables**:
    - Create a variable called name and assign your name as a string.
    - Create a variable called age and assign your age as a number.
    - Create a variable called isStudent and assign it a boolean value (true or false).
    - Generate a console log that concatenates your name, age, and isStudent variables into a string. For example your output should look similar to: "My name is John, I am 30 years old, and my student status is true."

  - **Objects**:
    - Create an object named person with properties for name, age, and isStudent. Use the variables you defined earlier to populate the object's values.
    - Console log your object to ensure it has the correct properties and values.

  - **Arrays**:
    - Create an array called fruits with at least three different fruit names.
    - Use an array method to add a new fruit to the beginning of the array.
    - Use an array method to remove the last fruit from the array.
    - Use an array method to remove an item at the front of the array.
    - Console log after each method is utilized with some text so you can see what is occurring at each method call.

  - **Functions**:
    - Create a function named calculatePerimeter that calculates and returns the perimeter of a rectangle. The function should take two parameters, length and width. **if you are unsure of how to find the perimeter of a rectangle, google it!**
    - Create a function named reverseArray that takes an array as a parameter and returns a new array with the elements reversed. You can use built-in methods or create your own logic.


4. **Console Logs**
      - Log the results of your functions and the content of your objects and arrays to the console. For example:

    ```javascript

    console.log("Name: ", name);
    // ... more console logs ...
    ```

5. **Submission**
      - Zip the "JS_Review_Assignment" folder.
        In the card with the label "Your work," click on the "+ Add or create."
      - Within that dropdown, click "File," and attach your zipped folder.
      - Click the submit button.

# Rubric

## JavaScript Review - /20

- **Variables - /5**

  - **Fully Achieved - 5 pts**
    - Variables are correctly created and values assigned.
    - Console log is generated with the correct string concatenation combining ALL created variables of name, age, student status(boolean).

  - **Partially Achieved - 3 pts**
    - One or two variables are correctly created and assigned values.
    - Attempt was made to generate a console log with the correct string concatenation.

  - **Not Achieved - 0 pts**
    - More than two variables are missing or incorrectly created/assigned.
    - No attempt was made to generate a console log with the correct string concatenation.

- **Objects - /5**

  - **Fully Achieved - 5 pts**
    - The object is correctly created and populated with properties.
    - Utilized variables created to populate the values within the object.
    - Console log is generated to ensure the object is correctly created.

  - **Partially Achieved - 3 pts**
    - The object is correctly created but lacks some properties.
    - Did not utilize variables created to populate the values within the object.
    - Attempted to console log values.

  - **Not Achieved - 0 pts**
    - The object is missing or incorrectly created.
    - No values were populated for the object and no console log is present.

- **Arrays - /5**

  - **Fully Achieved - 5 pts**
    - The array is correctly created and manipulated using array methods.
    - Utilized array methods to add/remove items from the array.
    - Console log is generated after each method is utilized.

  - **Partially Achieved - 3 pts**
    - The array is correctly created but lacks some manipulation with array methods.
    - Attempted to utilize array methods to add/remove items from the array.
    - Attempted to generate a console log after each method is utilized.

  - **Not Achieved - 0 pts**
    - The array is missing or incorrectly created/managed.
    - No methods were attempted with any console logs.

- **Functions - /5**

  - **Fully Achieved - 5 pts**
    - Functions are correctly created and perform their tasks.
    - Required to create a calculatePerimeter function that takes two parameters and returns the perimeter of a rectangle.
    - Required to create a reverseArray function that takes an array as a parameter and returns a new array with the elements reversed.

  - **Partially Achieved - 3 pts**
    - One or two functions are correctly created and perform their tasks.

  - **Not Achieved - 0 pts**
    - More than two functions are missing or incorrectly created/implemented.