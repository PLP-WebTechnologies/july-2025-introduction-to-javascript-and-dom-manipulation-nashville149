// Part 1: Mastering JavaScript Basics

const numberInput = document.getElementById('numberInput');
const checkNumberButton = document.getElementById('checkNumber');
const resultParagraph = document.getElementById('result');

checkNumberButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (number > 0) {
        resultParagraph.textContent = 'The number is positive.';
    } else if (number < 0) {
        resultParagraph.textContent = 'The number is negative.';
    } else {
        resultParagraph.textContent = 'The number is zero.';
    }
});

// Part 2: JavaScript Functions — The Heart of Reusability

const formatStringButton = document.getElementById('formatString');
const formattedStringParagraph = document.getElementById('formattedString');

function formatString(str) {
    return str.toUpperCase();
}

formatStringButton.addEventListener('click', () => {
    const originalString = 'hello world';
    formattedStringParagraph.textContent = formatString(originalString);
});

function add(a, b) {
    return a + b;
}

console.log('Sum of 5 and 10:', add(5, 10));

// Part 3: JavaScript Loops — Embrace the Power of Repetition!

const loopList = document.getElementById('loopList');

// For loop
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i}`;
    loopList.appendChild(listItem);
}

// ForEach loop
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    loopList.appendChild(listItem);
});

// Part 4: Mastering the DOM with JavaScript

const colorBox = document.getElementById('colorBox');
const addElementButton = document.getElementById('addElement');
const elementContainer = document.getElementById('elementContainer');

// Change text content
document.querySelector('#part4 h2').textContent = 'Part 4: DOM Manipulation - Updated!';

// Event listener for click
colorBox.addEventListener('click', () => {
    colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
});

// Create and append element
addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new element has been added!';
    elementContainer.appendChild(newElement);
});
