/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ezequiel Albarracin';
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let profilPicture = "images/eze.png.jpg";
//let food = 'Pizza'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/placeholder.png"]');




/* ` Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
//foodElement.innerHTML = `<strong>${food}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute ('src', profilPicture);
imageElement.setAttribute ('alt', `Profile image of ${profilPicture}`);

/* Step 5 - Array */
let favoriteFood = ['Pizza','Fried Chicken','Asado'];
foodElement.innerHTML = `${favoriteFood}`;

let food = 'Ice Cream';
favoriteFood.push(food);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.splice(0,1);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;





