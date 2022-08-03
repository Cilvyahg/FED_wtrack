'use strict';


const log = console.log;

const handleClickEvent = function (e) {
  // als we deze functie aanroepen dan moet je dit doen.
  log(e, 'click is clickeed');
};
log(handleClickEvent);

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
  log('the div 2 was clicked');
});

const person1 = {
  'first name': 'Niels',
  lastName: 'Bom',
  Children: {
    hasChildren: 'No',
    hasPartner: 'Yes',
  },
}; // als je een key wilt maken met een spatie erin dan kan je die consol loggen op die manier. maar wordt aangeraden om dit niet te gebruiken, maar soms heb je het wel nodig
console.log (person1['first name']);
console.log(person1.lastName);
console.log(person1['lastName']);

const person3 = { ...person1 };

person3.age = 24;

console.log(`this is person 3:`, person3)

//!!!!!console.table(person3 ["firstName","lastName"]) // log this in the console and you'll get a table

console.log(`this is person 1::::`, person1); // kopietje gemaakt als je logt zie je nog dezelfde object
console.log(`this is person 2::::`, person3);

const person2 = person1; // er wordt geen kopietje gemaakt maar passed by reference.

person2.lastName = 'Klaver';

console.log(person1);

// ++++++ Object.keys(variable)+++++++++++
const keys = Object.keys(person1)
console.log(keys)
console.log(keys[2]) // key op index 2 krijg je dan

// ++++++ Object.values(variable)++++++++++
const values = Object.values(person1); // krijg je de waarden van de keys
log(values[2])

// +++++++ Object.entries(variable)+++++++++
const entries = Object.entries(person1)
log(entries);
log(entries[1], entries[2])



for (let i = 0;  i < 5; i++) {
  console.log(i);

}










// Part 1. Adding Elements to the DOM

const buttonsBigFive = document.querySelectorAll('button.big-five-button');
log(buttonsBigFive);

function buttonClick() {
  for (let button of buttonsBigFive) {
    button.addEventListener('click', colorChange);
  }
}

buttonClick();

function colorChange(event) {
  log(event);

  this.style.backgroundColor = 'pink';
  log('You have clicked on the button:', this.textContent);

  if (this.textContent === 'Rhino') {
    this.style.backgroundColor = 'blue';
  }
}
