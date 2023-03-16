'use strict';

// Declaring Elements

const createBtn = document.querySelector('#shape-create');
const shapeSelect = document.querySelector('#shape-type');
const colorSelect = document.querySelector('#shape-color');

const grid = document.querySelector('.grid');
const textDisplay = document.querySelector('.shape-txt');

// Class Definition

class Shape { 
    #name;
    #color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    };

    set name(name) {
        this.#name = name;
    };

    set color(color) {
        this.#color = color;
    };

    get name() {
        return this.#name;
    };

    get color() {
        return this.#color
    };

    getInfo() {
        return `${this.#color} ${this.#name}`
    };
};

// Main function
let shapeList = [];
let divCount = 0;
createBtn.addEventListener('click', function() {
    divCount++;
    if (divCount >= 25) {
        textDisplay.innerText = 'Reached max amount of shapes';
        return;
    };

    const newShape = new Shape(shapeSelect.value, colorSelect.value);
    shapeList.push(newShape);

    const newDiv = document.createElement('div');
    newDiv.classList.add(newShape.name);
    newDiv.style.backgroundColor = checkColor(newShape.color);
    newDiv.onclick = function() {
        textDisplay.innerText = `Unit ${shapeList.indexOf(newShape) + 1}: ${newShape.getInfo()}`
    }; 
    grid.append(newDiv);
});

function checkColor(color) {
    if (color == 'blue') return '#09f';
    if (color == 'green') return '#9f0';
    if (color == 'orange') return '#f90';
    if (color == 'pink') return '#f09';
    if (color == 'purple') return '#90f';
};