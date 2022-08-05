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

// const person1 = {
//   'first name': 'Niels',
//   lastName: 'Bom',
//   Children: {
//     hasChildren: 'No',
//     hasPartner: 'Yes',
//   },
// }; // als je een key wilt maken met een spatie erin dan kan je die consol loggen op die manier. maar wordt aangeraden om dit niet te gebruiken, maar soms heb je het wel nodig
// console.log (person1['first name']);
// console.log(person1.lastName);
// console.log(person1['lastName']);

// const person3 = { ...person1 };

// person3.age = 24;

// console.log(`this is person 3:`, person3)

// //!!!!!console.table(person3 ["firstName","lastName"]) // log this in the console and you'll get a table

// console.log(`this is person 1::::`, person1); // kopietje gemaakt als je logt zie je nog dezelfde object
// console.log(`this is person 2::::`, person3);

// const person2 = person1; // er wordt geen kopietje gemaakt maar passed by reference.

// person2.lastName = 'Klaver';

// console.log(person1);

// // ++++++ Object.keys(variable)+++++++++++
// const keys = Object.keys(person1)
// console.log(keys)
// console.log(keys[2]) // key op index 2 krijg je dan

// // ++++++ Object.values(variable)++++++++++
// const values = Object.values(person1); // krijg je de waarden van de keys
// log(values[2])

// // +++++++ Object.entries(variable)+++++++++
// const entries = Object.entries(person1)
// log(entries);
// log(entries[1], entries[2])

// for (let i = 0;  i < 5; i++) {
//   console.log(i);

// }

// Part 1. Adding Elements to the DOM
// Exercise: When I click on a button of one of the Big 5 as a user,
// I want it to appear in my list with "animals spotted".

const Mybody = document.body.querySelector('ul');
log(Mybody);

const AnimalList = document.querySelector('.big-five-list');
log(`This is the UL:::::`, AnimalList);

const AnimalListItems = AnimalList.children;
log(`This are the LI::::::`, AnimalListItems);
log(AnimalListItems[4]);

const buttonsBigFive = document.querySelectorAll('button.big-five-button');
log(`These are the buttons::::::`, buttonsBigFive);

const spottedAnimalList = document.querySelector('#spotted-animals-list');
log(spottedAnimalList);


function buttonClick() {
  for (let button of buttonsBigFive) {
    button.addEventListener('click', addToSpottedAnimals);
  }
}

buttonClick();


function addToSpottedAnimals(e) {
  log(e)
 
  this.style.backgroundColor = 'pink';
  log('You have clicked on the button:', this.innerText);


  if (this.style.display !== "block") {
    const newLi = document.createElement('li');
    const addToSpottedList = spottedAnimalList.appendChild(newLi);
    log(addToSpottedList);
    addToSpottedList.classList.add("spotted-animals-list-item");
    addToSpottedList.innerText = this.innerText;
    this.style.display = "block";
  } 
  
  if (this.innerText === 'Rhino') {
    this.style.backgroundColor = 'blue';
  }

  if (this.innerText === 'Elephant') {
    this.style.color = 'red';
  }
}


// PART 2. REMOVE THE DUCK ELEMENT FROM THE DOM

const duckItem = document.querySelector(".spotted-animals-list-item");
log(duckItem);

const removeFirstItem = document.querySelector('#remove-first-item-button');


const removeFirst = function () {
  removeFirstItem.addEventListener('click', function () {
    console.log(`the duck item is removed`, duckItem)
    duckItem.remove();
  })
}

removeFirst()


// PART 3. Removing Multiple Elements from the DOM

