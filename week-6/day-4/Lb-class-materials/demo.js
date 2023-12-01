/**
 * Week 6: Day 4 – Advanced DOM Manipulation in JavaScript
 *
 * Lecture Demo File
 *
 * This JavaScript file contains examples and detailed comments for a lecture on Advanced DOM Manipulation.
 * Use these examples to demonstrate different concepts to the students.
 */

/**
 * Section 1: DOM Selection Techniques
 *
 * Explain the basics of the Document Object Model (DOM) and how JavaScript can be used to select and manipulate elements.
 */

//! Add this to HTML
// Import bootstrap.
/*
<header>Header Content</header>
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <!-- Add more list items as needed -->
</ul>
<div id="main-content">Main Content</div>
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>

*/

// Example 1: querySelector
// Use this to explain how querySelector can select the first element that matches a CSS selector.
// Mention it's very versatile but may not always be the most efficient for specific tasks.
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  console.log('Selected header:', header);
  // Talk about the DOMContentLoaded event here and how it's important for DOM manipulation.
});

// Example 2: querySelectorAll
const listItems = document.querySelectorAll('li');
console.log('List items:', listItems);

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', () => {
    listItems[i].style.backgroundColor = 'black';
  });
}

// Example 3: getElementById
const mainContent = document.getElementById('main-content');
console.log('Main content:', mainContent);

// Example 4: getElementsByClassName
// returns an HTMLCollection which allows for live updating, but does not allow for modification directly unless coverted to an Array using the Array.from method. HTMLCollections are Read Only.
const buttons = document.getElementsByClassName('btn');
console.log('Buttons:', buttons);

const buttons2 = document.querySelectorAll('button');

console.log(buttons2);
console.log(buttons2[0]);
buttons2[0].addEventListener('click', () => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  ul.appendChild(li);
});

buttons2[1].addEventListener('click', () => {
  const indexToRemove = listItems.length - 1;
  // Do a search on google to show .remove method
  listItems[indexToRemove].remove();
});

/**
 * Section 2: Modifying DOM Elements
 *
 * Show how to change content and properties of DOM elements dynamically.
 */

//! Add this to HTML
/*
<h1 class="title">Original Title</h1>
<img class="w-50" id="logo" src="placeholder-logo.avif" />
*/

// Example 5: Changing Inner Text
const title = document.querySelector('.title');
title.innerText = 'Updated Title';
console.log('Updated title:', title.innerText);

// Example 6: Changing Attributes
const logo = document.querySelector('#logo');
logo.setAttribute('src', 'new-logo.avif');

/**
 * Section 3: Styling Elements with JavaScript
 *
 * Discuss how JavaScript can be used to apply styles directly to elements.
 */

//! Add this to HTML
/*
<p>First paragraph</p>
<p>Second paragraph</p>
<div id="message-box">Message Box</div>
<div id="bootstrap-alert">Bootstrap Alert Box</div>
*/

// Example 7: Inline Styling
const firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';
firstParagraph.style.fontSize = '18px';

// Example 8: Adding/Removing Classes
const messageBox = document.querySelector('#message-box');
messageBox.classList.add('highlight');

// Additional Example: Adding Bootstrap Classes
const bootstrapAlert = document.querySelector('#bootstrap-alert');
bootstrapAlert.classList.add('alert', 'alert-success');
console.log('Bootstrap classes added:', bootstrapAlert.classList);

/**
 * Section 4: Introduction to Event Listeners
 *
 * Explain how to add event listeners to elements and discuss common event types.
 */

//! Add this to HTML
/*
<button id="click-button">Click Me</button>
 <img class="w-50" id="hover-image" src="placeholder-image.avif" />
*/

// Example 9: Click Event Listener
const clickButton = document.querySelector('#click-button');
clickButton.addEventListener('click', function () {
  alert('Button clicked!');
  const p = document.createElement('p');
  p.innerText = 'Button Clicked';
  mainContent.appendChild(p);
});

// Example 10: Mouseover Event
const image = document.querySelector('#hover-image');
image.addEventListener('mouseover', function () {
  image.style.border = '2px solid green';
});

/**
 * Section 5: Event Handling in Practice
 *
 * Dive into implementing event listeners in real-world scenarios.
 */

//! Add this to HTML
/*
    <form id="signup-form">
      <label>
        Username
        <input type="text" name="username" id="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" id="password" />
      </label>
      <button>Submit</button>
    </form>
*/

// Example 11: Event Object
document.addEventListener('click', function (event) {
  console.log('Clicked element:', event.target);
});

// Example 12: Preventing Default Behavior
const form = document.querySelector('#signup-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submission prevented.');
});

/**
 * Wrap-Up
 *
 * Conclude the session by reviewing these examples and how they apply to real-world web development.
 * Encourage students to experiment with these methods and to begin thinking about how they can use them in their projects.
 */

/**
 * End of File
 */
