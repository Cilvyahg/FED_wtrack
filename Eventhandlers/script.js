'use strict';

// defer = postpone, delay

// ===============
// PART ONE
// ===============

const butClick = document.querySelector('#mybutton');
console.log(butClick);

const alertPopUp = () => {
  console.log(`Seperate function: Button ${butClick.textContent} clicked!`);
};

butClick.addEventListener('click', alertPopUp);

butClick.addEventListener('click', () => {
  alert('Button clicked');
  console.log("buttong Clicked")
});

// ADDING CLASS BLUE-BACKGROUND TO BODY

const newBody = document.querySelector('body'); // = document.body 
newBody.classList.add('blue-background');

/* Create a new function that includes the following functionalities:

Add a click event to the new button.
When the change-background-button is clicked you will add the class "red-background" to your body element.

 */

const changeColor = () => {
  newBody.classList.toggle('red-background');
  butClick.classList.add('blue-background');
  // newBody.classList.toggle('red-background'); // toggle tussen rood en blauw
  // newBody.classList.replace('blue-background', 'red-background'); // blauw vervangen voor rood met replace methode
};

const secondButton = document.querySelector('button');
console.log(secondButton);

const nextSiblingButton = secondButton.nextElementSibling;
console.log(nextSiblingButton);

nextSiblingButton.addEventListener('click', changeColor);

// ================
// PART 3
// ================
/* 
We are going to change the changeColor function so that the background color also changes back to blue when the button is clicked. 
The background color is then "toggled", in other words: put on and removed again and put back on, etc.

Change the name of the function from changeColor to toggleColor.
Instead of adding an extra class "red-background" to the classlist we are going to toggle the class. Use Google to find out how to do this. Hint: toggle.

 */

const toggleColor = () => {
  newBody.classList.toggle('blue-background'); // toevoegen als het nog niet bestaat.
  nextSiblingButton.classList.add('pink-background');
};

nextSiblingButton.addEventListener('click', toggleColor);
