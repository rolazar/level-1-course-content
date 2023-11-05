// Need this at the top for $ to work. 
// Don't ask why!
$ = document.querySelector.bind(document);


// ******************************************
// Note: We can update CSS using two steps.
// ******************************************
// 1. Store the HTML element in the VARAIBLE.
// 2. set the property on the style of the element.

// ******************************************
// Examples
// Note: element is a VARIABLE to hold 
// the HTML Element that we search 
// for using our SELECTOR
element = $("#pumpkin-header");
// Note: We can set the style color.
element.style.color = "red";

// ******************************************
// Note: Another example
// This will change the Coffee Header
// to be yellow with chocolate.
element = $("#coffee-header");
element.style.color = "yellow";
element.style.backgroundColor = "chocolate";

// TODO: Change the color or other styles
// using JavaScript.
// Try both from the Dev Tool Console, and from here in the script.js file.
// Please leave comments for each line to say what it does.

