'use strict';

console.log('hello');

// ARRAY MET 15 OBJECTEN

const superHeroes = [
  {
    name: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    weight: '210',
  },
  {
    name: 'Superman',
    publisher: 'DC Comics',
    alter_ego: 'Kal-El',
    first_appearance: 'Action Comics #1',
    weight: '220',
  },
  {
    name: 'Flash',
    publisher: 'DC Comics',
    alter_ego: 'Jay Garrick',
    first_appearance: 'Flash Comics #1',
    weight: '195',
  },
  {
    name: 'Green Lantern',
    publisher: 'DC Comics',
    alter_ego: 'Alan Scott',
    first_appearance: 'All-American Comics #16',
    weight: '186',
  },
  {
    name: 'Green Arrow',
    publisher: 'DC Comics',
    alter_ego: 'Oliver Queen',
    first_appearance: 'All-American Comics #16',
    weight: '195',
  },
  {
    name: 'Wonder Woman',
    publisher: 'DC Comics',
    alter_ego: 'Princess Diana',
    first_appearance: 'The Incredible Hulk #180',
    weight: '165',
  },
  {
    name: 'Blue Beetle',
    publisher: 'DC Comics',
    alter_ego: 'Dan Garret',
    first_appearance: 'Mystery Men Comics #1',
    weight: '145',
  },
  {
    name: 'Spider Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Peter Parker',
    first_appearance: 'Amazing Fantasy #15',
    weight: '167',
  },
  {
    name: 'Captain America',
    publisher: 'Marvel Comics',
    alter_ego: 'Steve Rogers',
    first_appearance: 'Captain America Comics #1',
    weight: '220',
  },
  {
    name: 'Iron Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Tony Stark',
    first_appearance: 'Tales of Suspense #39',
    weight: '250',
  },
  {
    name: 'Thor',
    publisher: 'Marvel Comics',
    alter_ego: 'Thor Odinson',
    first_appearance: 'Journey into Myster #83',
    weight: '200',
  },
  {
    name: 'Hulk',
    publisher: 'Marvel Comics',
    alter_ego: 'Bruce Banner',
    first_appearance: 'The Incredible Hulk #1',
    weight: '1400',
  },
  {
    name: 'Wolverine',
    publisher: 'Marvel Comics',
    alter_ego: 'James Howlett',
    first_appearance: 'The Incredible Hulk #180',
    weight: '200',
  },
  {
    name: 'Daredevil',
    publisher: 'Marvel Comics',
    alter_ego: 'Matthew Michael Murdock',
    first_appearance: 'Daredevil #1',
    weight: '200',
  },
  {
    name: 'Silver Surfer',
    publisher: 'Marvel Comics',
    alter_ego: 'Norrin Radd',
    first_appearance: 'The Fantastic Four #48',
    weight: 'unknown',
  },
];

console.log(superHeroes);

// 1. Make an array of all superhero names.

let arrayName = [];

for (let i = 0; i < superHeroes.length; i++) {
  // console.log(superHeroes[i])
  const names = superHeroes[i].name;
  // console.log(names);
  arrayName[i] = names;
  // console.log(arrayName[i]);
  // zelfde als arrayName[arrayName.length] = names
  // console.log(arrayName.length)
}

console.log(arrayName);
arrayName[0] = 'hello'
console.log(arrayName)

// ***************************************
// const arr = [1, 3, 4, 5];
// const total = arr.push(5, 7, 8) // returns back the new length of the array
// console.log(arr)
// console.log(total)
// ***************************************

// 2.Make an array of all "light" superheroes (< 190 pounds).
let arrayLightSuperheroes = [];

const functionExmaple = function (array) {
  let arrayWeight = [];
  
  for (let element of array) {
    const weight = element.weight;
    if (weight < 190) {
      arrayWeight[arrayWeight.length] = weight;
    }
  }
  return arrayWeight; // als je deze na de if statement zou zetten, dus in de if statement dan stopt tie zodra tie de conditie true is en itereert hij niet over alle gewichten. de return statement hoort bij de functie 
};




for (let superhero of superHeroes) {
  const weight = superhero.weight;
  console.log(weight);
  if (weight < 190) {
    arrayLightSuperheroes[arrayLightSuperheroes.length] = weight;
  }
}

console.log(arrayLightSuperheroes);

console.log(functionExmaple(superHeroes));
console.log(functionExmaple)

// 3.Create an array with the names of the superheroes who weigh 200 pounds.


