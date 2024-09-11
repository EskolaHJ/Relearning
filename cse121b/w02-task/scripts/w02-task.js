/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// setting the variable full name to the value of my name
let fullName = 'Jacob Eskola';
// setting currentYear variable to the value of Date
let currentYear = Date();
// setting profilePicture variable to the value of images/ProfilePicture.png
let profilePicture = 'images/ProfilePicture.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute = ('alt', 'Picture of Jacob Eskola')




/* Step 5 - Array */






