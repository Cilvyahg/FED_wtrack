'use strict';

const log = console.log

const handleClickEvent = function (e) { // als we deze functie aanroepen dan moet je dit doen. 
  log(e, 'click is clickeed')
  ;
}
log(handleClickEvent)

const div = document.querySelector('div');
div.addEventListener('click', handleClickEvent); // dit is een verwijzing naar een functie. wanneer er op geklikt wordt wil ik dat je deze functie uitvoert. dit betekent niet voer de functie uit. 
// eventlistener zegt gebeurtenis koppelen aan code, in dit geval de functie

// div.addEventListener('click', function () {

//   const age= prompt('what is your age')
//   if (age > 10) {
//    alert('too old')
//   } else {
//     alert('you are a baby')
//   }
// })

const div2 = document.querySelector('.div-2');

// inline functie
div2.addEventListener('click', function () {
  log('the div 2 was clicked')
})






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


