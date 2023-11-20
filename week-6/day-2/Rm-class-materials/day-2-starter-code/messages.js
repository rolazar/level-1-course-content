// Please don't modify this file.

let names;

names = [
  "Alice",
  "Bob",
  "Carol",
  "Dan",
  "Ellie",
  "Frank",
  "Greg",
  "Harry",
  "Ivy",
  "Jack"
];

function setMessages () {
  for(let name of names) {
    let lowerName, divId, propertyName, message, elm;
    // make name lowercase
    lowerName = name.toLowerCase();
    // the id of the div is 'name-says'
    divId = `${lowerName}-says`;
    // the name of the variable is 'nameSays'
    propertyName = `${lowerName}Says`;
    // The message is in the variable
    // which was set in script.js
    // In JS we can access it with the magic of 'this'
    message = this[propertyName];
    if(!message) {
      message = 'undefined';
    } 
    elm = document.getElementById(divId);
    elm.textContent = message;
  }
}
