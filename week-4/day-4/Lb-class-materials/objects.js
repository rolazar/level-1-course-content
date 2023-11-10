// Introduction to Object Literals
// Instructor Note: Start by explaining what object literals are and how they are defined.

const superhero = {
  name: 'Batman',
  city: 'Gotham',
  isVigilante: true,
};
console.log(superhero);

// Properties and Order
// Instructor Note: Discuss that properties in an object have no guaranteed order and accessing properties using indices isn't possible like in arrays.
// Try accessing a property with an index to show that it doesn't work and returns 'undefined'.
console.log(superhero[0]); // undefined

// Adding Properties
// Instructor Note: Demonstrate different ways to add properties to an object after its creation using both dot notation and bracket notation.
superhero.alias = 'The Dark Knight';
superhero['base'] = 'Batcave';
console.log(superhero);

// Accessing Properties
// Instructor Note: Show how to access object properties. Use dot notation for typical cases, and bracket notation for property names that are not valid identifiers (e.g., containing spaces or starting with numbers).
console.log(superhero.name); // Dot notation
console.log(superhero['city']); // Bracket notation

// Creating Methods
// Instructor Note: Methods are functions that are properties of an object. Show how to add a method within an object literal and using dot notation.
// Add a greet method within the literal
const hero = {
  name: 'Superman',
  greet: function () {
    console.log(`Hello, I am ${this.name}.`);
  },
};
hero.greet(); // Invoke the method

// Adding Methods using Dot Notation
// Instructor Note: Now add another method using dot notation to show it can be done post object creation as well.
superhero.introduce = function () {
  console.log(
    `I am ${this.name}, known as ${this.alias}, and I operate from the ${this.base}.`
  );
};
superhero.introduce(); // Call the method

// Part Two - Realistic Examples of Objects
// Instructor Note: Let's create some more realistic examples of objects that students might encounter or use.

// Example of a User object
const user = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  username: 'bwayne',
  email: 'bruce.wayne@example.com',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.fullName());

// Example of a Product object in an e-commerce setting
const product = {
  name: 'Wireless Mouse',
  price: 19.99,
  discountPercent: 5,
  calculateDiscountPrice: function () {
    return this.price * (1 - this.discountPercent / 100);
  },
};
console.log(
  `Discounted price: $${product.calculateDiscountPrice().toFixed(2)}`
);

// Interactive "Quiz" Component
//TODO update this quiz to remove the comparision stuff, and remove the loops and anything not covered up to this point
// Question 1 - Easy
// Instructor Note: Start with a very simple question to ensure everyone is on the same page.
console.log(user.firstName); // Ask students what this will output.
// Expected output: "Bruce"

// Question 2 - Easy
console.log(product.price > 20); // Ask what this comparison will output.
// Expected output: false

// Question 3 - Moderate
// Instructor Note: Encourage students to think about the order of operations in method calls.
console.log(product.calculateDiscountPrice() === 18.99); // What will this output?
// Expected output: false, because it will be 19.99 - 5% of 19.99

// Question 4 - Moderate
// Instructor Note: This one checks if students remember how to update object properties.
user.age = 30; // We've just added a new property 'age' to the user object.
console.log(user.age); // What will this output now?
// Expected output: 30

// Question 5 - Challenging
// Instructor Note: This question checks if students understand method context and the 'this' keyword.
const getUserName = user.fullName;
console.log(getUserName()); // What will this output and why?
// Expected output: undefined undefined, because 'this' is no longer referring to the 'user' object.

// Question 6 - Challenging
// Instructor Note: Encourage students to think about dynamic property names.
const propName = 'lastName';
console.log(user[propName]); // Ask students what this will output.
// Expected output: "Wayne"

// Question 7 - Advanced
// Instructor Note: This question combines knowledge of methods and property updates.
user.updateEmail = function (newEmail) {
  this.email = newEmail;
};
user.updateEmail('wayne@newemail.com'); // Updating the email address.
console.log(user.email === 'wayne@newemail.com'); // What will this output?
// Expected output: true

// Question 8 - Advanced
// Instructor Note: Ask students to predict the outcome after a property is deleted.
delete user.username; // Deleting the username property.
console.log(user.username); // What will this output?
// Expected output: undefined

// Question 9 - Very Advanced
// Instructor Note: This one is to check if students can predict the behavior of a method after a property it uses has been changed.
product.applyDiscount = function (discount) {
  this.price = this.price - this.price * (discount / 100);
};
product.applyDiscount(10); // Applying a 10% discount directly to the price.
console.log(product.price); // What is the new price of the product?
// Expected output: Price after a 10% discount on the already discounted price.

// Question 10 - Very Advanced
// Instructor Note: This question involves understanding property enumeration and the concept of "own" properties.
for (let key in user) {
  console.log(`${key}: ${user[key]}`); // What will this output?
}
// Expected output: A list of user object properties and their values, excluding any inherited properties.

// Instructor Note: Use these quiz questions to reinforce the lessons and to challenge students' understanding. After each question, discuss the answer and the relevant concepts with the class to ensure comprehension before moving on.

// Function to display details of a superhero
function displaySuperheroDetails(superhero) {
  console.log(`Name: ${superhero.name}`);
  console.log(`Alias: ${superhero.alias}`);
  console.log(`Powers: ${superhero.powers.join(', ')}`);
  console.log(`City: ${superhero.city}`);
  console.log(
    `Base: ${superhero.base.location} - ${superhero.base.description}`
  );
  console.log('---');
}

// Superhero Object 1: Superman
const superman = {
  name: 'Clark Kent',
  alias: 'Superman',
  powers: ['Super strength', 'Flight', 'X-ray vision'],
  city: 'Metropolis',
  base: {
    location: 'Fortress of Solitude',
    description: 'Arctic headquarters',
  },
};

// Superhero Object 2: Batman
const batman = {
  name: 'Bruce Wayne',
  alias: 'Batman',
  powers: ['Intellect', 'Detective skills', 'Martial arts'],
  city: 'Gotham',
  base: {
    location: 'Batcave',
    description: 'Underground headquarters beneath Wayne Manor',
  },
};

// Superhero Object 3: Wonder Woman
const wonderWoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',
  powers: ['Super strength', 'Speed', 'Flight'],
  city: 'Themyscira',
  base: {
    location: 'Themysciran Embassy',
    description: 'Diplomatic embassy and base of operations',
  },
};

// Superhero Object 4: The Flash
const flash = {
  name: 'Barry Allen',
  alias: 'The Flash',
  powers: ['Super speed', 'Time travel', 'Enhanced reflexes'],
  city: 'Central City',
  base: {
    location: 'Flash Museum',
    description: 'Museum and secret base',
  },
};

// Superhero Object 5: Green Lantern
const greenLantern = {
  name: 'Hal Jordan',
  alias: 'Green Lantern',
  powers: ['Power ring', 'Flight', 'Energy constructs'],
  city: 'Coast City',
  base: {
    location: 'Green Lantern Corps Headquarters',
    description: 'Headquarters located on the planet Oa',
  },
};

// Calling the function with each superhero object
displaySuperheroDetails(superman);
displaySuperheroDetails(batman);
displaySuperheroDetails(wonderWoman);
displaySuperheroDetails(flash);
displaySuperheroDetails(greenLantern);
