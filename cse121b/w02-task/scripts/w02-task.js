/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// setting the variable full name to the value of my name
let fullName = 'Jacob Eskola';
// setting currentYear variable to the value of Date
let currentYear = new Date();
// setting profilePicture variable to the value of images/ProfilePicture.png
let profilePicture = 'images/ProfilePicture.png';

/* Step 3 - Element Variables */
// Get the HTML element with the ID 'name' and assigning it to the variable 'nameElement'
const nameElement = document.getElementById('name');
// Get  the first HTML element that matches the CSS selector '#year'
// and assign it to the variable 'yearElement'
const yearElement = document.querySelector('#year');
// Get the first <img> element that has a 'src' attribute with the value of 'placeholder.png'
// and assign it to the variable imageElement
let imageElement = document.querySelector("img[src='images/placeholder.png']");

let foodElement = document.getElementById('food');



/* Step 4 - Adding Content */
// Set the inner HTML of 'nameElement' to display the fullName variable with a bold style
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// Set the text content of 'yearElement' to the current year (note: you may want just the year part, e.g., currentYear.getFullYear())
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Picture of ${fullName}`);




/* Step 5 - Array */
let favoriteFood = ['Rice', 'Chilli', 'Pasta', 'Pizza'];





