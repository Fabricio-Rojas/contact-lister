'use strict';

// Declaring Elements

const addBtn = document.querySelector('#contact-add');
const contactInp = document.querySelector('#contact-info');
const alertText = document.querySelector('.alert-txt');

const grid = document.querySelector('.grid');
const contactCount = document.querySelector('.contact-count');

// Class Definition

class Contact { 
    #name;
    #city;
    #email;
    constructor(name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    };

    set name(name) {
        this.#name = name;
    };

    set city(city) {
        this.#city = city;
    };

    set email(email) {
        this.#email = email;
    };

    get name() {
        return this.#name;
    };

    get city() {
        return this.#city;
    };

    get email() {
        return this.#email; 
    };
};

// Main function
let contactList = [];
addBtn.addEventListener('click', function() {

    const contactValues = contactInp.value.split(", ");

    const contactName = contactValues[0];
    const contactCity = contactValues[1];
    const contactEmail = contactValues[2];

    const validMail = /^.*@.*\.(com|ca)$/;
    const valuesValid = (
        contactName.length > 0 && 
        contactCity.length > 0 && 
        validMail.test(contactEmail)
    );

    if (!valuesValid) {
        alertText.innerText = 'Please write valid inputs';
        return;
    };
    alertText.innerText = '';

    const newContact = new Contact(contactName, contactCity, contactEmail);
    contactList.push(newContact);

    const newDiv = document.createElement('div');
    newDiv.classList.add('contact');
    newDiv.onclick = function() {
        
    }; 
    grid.append(newDiv);
});

// function listContacts() {
//     contactList.forEach(contct => )
// };