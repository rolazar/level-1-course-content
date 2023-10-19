'use strict';

// Function to calculate the area of a rectangle
function calculateAreaOfRectangle(length, width) {
    const area = length * width;
    return area;
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(temperatureInFahrenheit) {
    const celsius = (temperatureInFahrenheit - 32) * (5 / 9);
    return celsius;
}

// Function to greet a user
function greetUser(name) {
    const greeting = `Hello, ${name}! Welcome to our website.`;
    return greeting;
}

// Call the functions with sample data and log the results to the console
const rectangleArea = calculateAreaOfRectangle(5, 8);
const celsiusTemperature = convertFahrenheitToCelsius(68);
const userGreeting = greetUser('John Doe');

console.log('Area of the rectangle:', rectangleArea);
console.log('Temperature in Celsius:', celsiusTemperature);
console.log('User Greeting:', userGreeting);