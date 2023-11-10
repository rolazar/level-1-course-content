# Week 6: Day 4 Assignment - Advanced DOM Manipulation

## Objective

Demonstrate proficiency in DOM manipulation techniques by creating a specific interactive web page layout with varied styles and responding to user events.

## Instructions

Create a web page that includes specific elements, applies various styles, and incorporates interactive features through JavaScript.

### Part 1: Setting up the Project

- **Create a New Repository on GitHub**:

  - Create a repository named `AdvancedDOMManipulation`.
  - Clone the repository to your local machine.

- **Project Structure**:
  - Inside the repository, create `index.html` and `script.js` files.

### Part 2: DOM Selection and Manipulation

- **HTML Setup**:

  - In `index.html`, add:
    - A `div` container with an ID `main-container`.
    - Three `button` elements with IDs `btn-1`, `btn-2`, and `btn-3`.
    - An empty `ul` element with an ID `list-container`.

- **JavaScript Interactions**:

  - Use `getElementById` to select `main-container` and `list-container`.
  - Use `querySelectorAll` to select all buttons.

- **Modify DOM Elements**:
  - When `btn-1` is clicked, add a new `li` item to `list-container` with text "New Item".
  - When `btn-2` is clicked, change the text of all `li` items to "Updated Item".
  - When `btn-3` is clicked, remove the last `li` item from `list-container`.

### Part 3: Styling Elements with JavaScript

- **Inline and Class Styling**:
  - Apply a border and padding to `main-container` using inline styles.
  - Create a CSS class `highlight` in a `<style>` tag that changes the background color of elements.
  - When any `li` item in `list-container` is clicked, toggle the `highlight` class for that item.

### Part 4: Event Listener Implementation

- **Add Event Listeners**:
  - Attach `click` event listeners to the buttons to perform the above actions.
  - Attach a `click` event listener to each `li` item to toggle the `highlight` class.

### Part 5: Event Handling

- **Dynamic Interaction**:
  - Ensure that the page responds to user actions as described above.
  - Implement functionality so that new `li` items also have the click event listener attached for the `highlight` class toggle.

### Part 6: Commit and Push Changes

- **Version Control**:
  - Commit changes to the local repository with clear messages.
  - Push changes to the GitHub repository.

## Submission

- **Submit Your Work**:
  - Ensure your GitHub repository `AdvancedDOMManipulation` contains the implemented features.
  - Submit the URL link to your GitHub repository in the "Your work" card.

## Rubric

### DOM Selection and Manipulation - /10

- **Fully Achieved - 10 pts**

  - Accurately selects elements using various DOM methods.
  - Correctly implements the specified actions for button clicks and `li` item interactions.

- **Partially Achieved - 5 pts**

  - Basic implementation of DOM selection and manipulation with minor inaccuracies.

- **Not Achieved - 0 pts**
  - Incorrect or incomplete implementation of DOM selection and manipulation.

### Styling and Event Handling - /10

- **Fully Achieved - 10 pts**

  - Successfully applies styles to elements and toggles classes as specified.
  - Effectively implements event listeners for dynamic user interactions.

- **Partially Achieved - 5 pts**

  - Some implementation of styling and event handling, but lacks full functionality or correctness.

- **Not Achieved - 0 pts**
  - Fails to implement styling and event handling as described.
