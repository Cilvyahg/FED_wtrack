'use strict';

const log = console.log

// Part 1. Adding Elements to the DOM 

const buttonsBigFive = document.querySelectorAll("button.big-five-button")
log(buttonsBigFive)

function buttonClick() {
  for (let button of buttonsBigFive) {
    button.addEventListener('click', colorChange);
  }
}

buttonClick();


function colorChange(event) {
  log(event)

  this.style.backgroundColor = "pink";
  log('You have clicked on the button:', this.textContent)
  
  if (this.textContent === 'Rhino') {
    this.style.backgroundColor = 'blue';
  } 
}


