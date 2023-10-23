'use strict';

// Object representing a book
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925
};

// Function to print book object information
function printBookInfo(book) {
    console.log(`Book Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
}

// Object representing a student's profile
const studentProfile = {
    name: 'John Doe',
    age: 20,
    courses: ['Math', 'History']
};

// Function to add a new course to the student's profile
function addCourse(studentProfile, newCourse) {
    studentProfile.courses.push(newCourse);
}

// Function to update the student's age
function updateAge(studentProfile, newAge) {
    studentProfile.age = newAge;
}

// Call the printBookInfo function with the book object
printBookInfo(book);

// Add a new course to the student's profile
addCourse(studentProfile, 'English');

// Update the student's age
updateAge(studentProfile, 21);

// Log the student's updated profile
console.log(`Student Profile:`);
console.log(`Name: ${studentProfile.name}`);
console.log(`Age: ${studentProfile.age}`);
console.log(`Courses: ${studentProfile.courses.join(', ')}`);