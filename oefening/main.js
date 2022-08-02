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

console.log(superHeroes[superHeroes.length - 1].weight); // getting the last index of superheroes and the property weight.
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
arrayName[0] = 'hello';
console.log(arrayName);

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
console.log(functionExmaple);

// 3.Create an array with the names of the superheroes who weigh 200 pounds.

// const is200Pounds = function (array) {
//   let weigh200Pounds = [];

//   for (let superhero of array) {
//     const heroThatis200Pounds = parseInt(superhero.weight, 10);
//     const superHeroName = superhero.name;
//     console.log(heroThatis200Pounds);
//     if (heroThatis200Pounds === 200) {
//       console.log('yes');
//       weigh200Pounds[weigh200Pounds.length] = superHeroName;
//     } else {
//       console.log('nopes');
//     }
//   }
//   return weigh200Pounds;
// };

// console.log(is200Pounds(superHeroes));

let something = new Array(4);
console.log(something.fill('newitem'));
console.log(something.length);

// 4.Make an array with all the comics where the superheroes had their "first appearances".

let firstAppearanceArray = [];

for (let superhero of superHeroes) {
  const appearanceInComic = superhero.first_appearance;
  console.log(appearanceInComic);
  firstAppearanceArray[firstAppearanceArray.length] = appearanceInComic;
}

console.log(firstAppearanceArray);

//5. Create an array of all DC Comics superheroes. /
// Did that work ? Then repeat the above function and also create an array with all Marvel Comics superheroes.

let dcComicsArray = [];
let marvelComicsArray = [];

for (let superhero of superHeroes) {
  const publisher = superhero.publisher;
  if (publisher === 'DC Comics') {
    dcComicsArray[dcComicsArray.length] = superhero.name;
  }

  if (publisher === 'Marvel Comics') {
    marvelComicsArray[marvelComicsArray.length] = superhero.name;
  }
}

console.log(`These are the DC comics superhero's :`, dcComicsArray);
console.log(`These are the Marvelcomics superhero:`, marvelComicsArray);

//Add up the weight of all DC Comics superheroes. Pay attention! Conditional to the rescue! The weight you see here, what data type is that? A number? Or a string? Oh yeah, and do all superheroes have weight?

// for (let superhero of superHeroes) {
//   const weightInNumbers = parseInt(superhero.weight);
//   console.log(weightInNumbers);
// }

const accumulateWeight = function (array) {
  const newMap = array.map(function (superhero) {
    let weightOfSuperhero = superhero.weight;
    if (weightOfSuperhero !== 'unknown') {
      //  return parseInt(weightOfSuperhero, 10);
      return parseInt(weightOfSuperhero, 10);
    }
    if (weightOfSuperhero == 'unknown') {
      // return (weightOfSuperhero = parseInt(0, 10));
      return (weightOfSuperhero = 0);
    }
  });
  console.log(Number.isNaN(newMap[15])); // false
  return newMap;
};

const accumulatedWeightMapped = accumulateWeight(superHeroes);
console.log(accumulatedWeightMapped);

const reduceWeight = accumulatedWeightMapped.reduce(function (
  accummulatedWeight,
  currentWeight
) {
  console.log(`this is the accumulated weight`, accummulatedWeight);
  console.log(`this is the currentweight:`, currentWeight);
  return accummulatedWeight + currentWeight;
},
0);

console.log(reduceWeight); // REDUCEWEIGHT IS NOT A FUNCTION.

const numbersTest = [1, 2, 3, 4, 67, 7, 9];

// function print(element) {
//   console.log(element);
// }

// console.log(print);

// console.log(numbersTest.forEach(print));

numbersTest.forEach(function (number) {
  if (number % 2 === 0) {
    // als je het nummer deelt door 2 en er niks overblijft dan de de numbers
    console.log(number);
  }
});

// samee as forEach() // for .. of  but forEach comes with a function.

for (let number of numbersTest) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

function somefunction() {
  // let som = 0;
  for (let number of numbersTest) {
    // eslint-disable-next-line no-unused-vars
    // som += number;

    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  }
}

console.log(somefunction());

console.log(`this outcome it`, isNaN(NaN));

console.log(`the outcome is`, Number(isNaN(0)));

console.log(typeof NaN);
console.log(typeof 1);

console.log(Number(' hhhhhh'));

function outer() {
  return inner;
}

function inner() {
  console.log('hoi');
  return 'inner';
}

console.log(outer());

function balala() {
  return [1, 2, 3, 4, 5].filter(test); //[1,2]
}

console.log(test);

function test(ar) {
  console.log(ar);
  console.log(ar < 3);
  return ar < 3;
}

console.log(balala());

// function filter(fn) {
// for (let item of array) {}
//   if (fn(ar))
//array.pusd()
//}
// }


let array1 = [1, 2, 3, 4, 5];
let max = 0;
array1.forEach((element) => {
  if (element > max) {
    console.log(element)
  } else 
    console.log('hello')
});
console.log(max); // 5
