'use strict';

// ++++++++++++++++++++++++
//   PART 1
// ++++++++++++++++++++++++

// A. A Write a JavaScript function to add the word "cool" to an array of strings. Use the .push method.

const addTheWordCool = function (array) {
  array.push('cool');
  return array;
};

console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'amazing']));
// result: ["nice", "awesome", "amazing", "cool"]

// Alternate excercise A
const isArray = function (input) {
  return Array.isArray(input);
};

console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true
console.log(isArray([]));
console.log(isArray([{ name: 'Jane', age: 26 }]));
console.log(isArray(undefined));

// B. Write a JavaScript function that returns the number of elements in an array.

function amountOfElementsInArray(index) {
  index = index.length;
  return index;

  // OR put it in a variable
  // const totalElements = index.length;
  // return totalElements
}
console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); // 3

// C. Write a JavaScript function that returns the first element of an array. PS: At which number does an array start counting again?

function selectBelgiumFromBenelux(el) {
  return el[0];

  // return el.shift(); // shift() removes the first element from the array and returns that removed element. this method changes rthe length of the array
}

console.log(selectBelgiumFromBenelux(['Belgium', 'Netherlands', 'Luxembourg'])); // result: "Belgium"

//D. Write a JavaScript function to return the last element of an array.

function lastElementInArray(el) {
  // const lastPopped = el.pop();
  // return lastPopped;
  // OR
  // console.log(el.length - 1);
  // console.log(el);
  return el.pop();

  // OR
  // return el[el.length-1]
}

console.log(lastElementInArray(['Hare', 'Guinea pig', 'Chicken', 'Turtle']));
console.log(lastElementInArray(['yellow', 'red', 'blue', 'purple']));

// result: "Turtle"
//result: 'purple'

// E. Write a JavaScript function to extract the first element from an array and return the remainder.
// Use.slice and the alternative option.splice.What is the difference between these functions ? Hint : Mutability.

const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];

const impeachTrumpSlice = function (array) {
  // const slice = array.slice(1, array.length);
  const sliceWithoutLength = array.slice(1, 4);
  console.log(array);
  return sliceWithoutLength, array;
};

const impeachTrumpSplice = function (array) {
  const removedElement = array.splice(0, 1);
  console.log(removedElement);
  return removedElement, array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F. Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
//ps: the word join is a big tip on what array method you should use.

function stringsTogether(el) {
  const joinedElements = el.join(' ');
  return joinedElements;
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']));
//result: "Winc Academy is fun ;-}"

// G. Write a function that combines 2 arrays ['array 1'] ['array2'] into 1 array
//['array1', 'array2']

// with the spread operation...() method and the concat() method there will be a new array created. if you don't want to create a new array then and merge arrays together than you can use .push() method

function combineArrays(arr1, arr2) {
  const spreadOperation = [...arr1, ...arr2];
  return spreadOperation;

  // OR const mergeResult = arr1.concat(arr2);
  // return mergeResult

  // OR .push() method

  //   const pushArrays = arr1
  //   console.log(arr1)
  //   pushArrays.push(...arr2)
  //   return pushArrays;
}

// resultaat: [1,2,3,4,5,6]

function concatArrays(arr1, arr2) {
  const concat = arr1.concat(arr2);
  return concat;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(concatArrays(['hoi', 'hi', 'hello'], [5, 7, 4, 12]));

const greet = (name) => {
  const greeting = `Hey ${name}`;
  return greeting;
};

console.log(greet('Hagrid'));
console.log(greet('Luna'));

// =======================
// EXERCISE PART 2
// ========================

//[A] Write a JavaScript function that finds a certain item and returns it based on a
//certain value.Find the entire Spiderman object, based on the name "Spiderman".Use .find().

const superheroes = [
  { name: 'Batman', alter_ego: 'Bruce Wayne' },
  { name: 'Superman', alter_ego: 'Clark Kent' },
  { name: 'Spiderman', alter_ego: 'Peter Parker' },
];

// Here goes your function

const findSuperHero = function (array, fn) {
  let a = array.find(fn);
  return a;
};

const isSpiderman = (arr) => {
  return arr.name === 'Spiderman';
};

const isBatman = function (s) {
  return s.name === 'Batman';
};

console.log(`Find Spiderman:`, findSuperHero(superheroes, isSpiderman));
console.log(`Find Batman:`, findSuperHero(superheroes, isBatman));
//

//
const findSpiderMan1 = superheroes.find((hero) => {
  if (hero.name === 'Spiderman') {
    return hero.name;
  }
});

console.log(findSpiderMan1); // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B In an array of integers.
//Make sure you return an array with the integers doubled.Use the.forEach method or, one level higher: the.map method.

const doubleArrayValues = (array) => {
  let newArray = new Array();

  array.forEach(function (value) {
    const multiplied = value * 2;
    newArray.push(multiplied);
  });

  return newArray;
};

console.log(doubleArrayValues([1, 2, 3])); // result should be [2, 4, 6]

// .map() method

const doubleArrayValuesMap = (array) => {
  return array.map((numbers) => numbers * 2);
};

console.log(doubleArrayValuesMap([3, 4, 6]));

//C. In an array of integers. Write a JavaScript function that checks if there is a number
//Is bigger than 10;

const containsNumberBiggerThan10 = (array) => {
  return array.some((numbers) => {
    return numbers > 10;
  });
};

// eslint-disable-next-line no-unused-vars
const containsNumberBiggerThan10v2 = (array) => {
  return hasSome(array);
};

let hasSome = (array) => array.some(biggerThan10);

let biggerThan10 = (number) => {
  return number > 10;
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); //  true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])); //  false

//D. Write a JavaScript function that checks for a certain string: "Italy" in the array.

const isItalyInTheGreat7 = (countries) => {
  return countries.includes('Italy', 2); // hoe kan dit true zijn???
};

console.log(
  isItalyInTheGreat7([
    'Canada',
    'France',
    'Germany',
    'Italy',
    'Japan',
    'United Kingdom',
    'United States',
  ])
);
// result should be true

//[E] In an array of integers.
//Write a JavaScript function that will multiply every integer tenfold.Use.forEach
// .forEach doesn't return an array. // kan ook met mapping

const tenfold = (array) => {
  const tenfoldArray = [];

  array.forEach((numbers) => {
    tenfoldArray.push(numbers * 10);
  });

  return tenfoldArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11])); // result should be [10, 40, 30, 60, 90, 70, 110]

//F. In an array of integers. Write a JavaScript function that checks if all values in the array are below 100, and return True or False.

const isBelow100 = (array) => {
  return array.every(function (number) {
    return number < 100;
  });
};
console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

const bigSum = (reduceNumbers) => {
  return reduceNumbers.reduce(function (accumulatingValue, currentValue) {
    const sum = accumulatingValue + currentValue;
    return sum;
  });
};

let randomSum = bigSum([4, 2, 3]);
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28])); // output 1118

console.log(randomSum);

const log = console.log;

// ===============
// forEach()
// ===============

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'anna', age: 30, position: 'the boss' },
  { name: 'willy', age: 50, position: 'gardener' },
];

log(people);

// const showPerson = person =>
//   log(person.position.toUpperCase());

// log(showPerson)// output a function

// people.forEach(showPerson); // pass by the reference not invoking the showperson function
const a = function (person) {
  // it's a callback function
  log(person.name.toUpperCase());
};

people.forEach(a);

// ===============
// .map()
// ===============

const ages = people.map(function (person) {
  log(person);
  return person.age + 20;
});

log(ages);

const b = function (person) {
  // return [person.age, person.name];
  let a = {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 30,
  };
  return a;
};

const newPeople = people.map(b);

log(newPeople);

// log(b); // b is de functie .. en niet de returnwaarde van de functie

// let waarde = b();
// log(waarde)
// log(b()) // uitkomst van de functie b.

const namesNew = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

log(namesNew);

log((document.body.innerHTML = namesNew.join('*****')));

const strSplit = 'My name is Bert';

const strSplitNew = strSplit.split(' ', 4); // ['My', 'name', 'is', 'Bert']
log(strSplitNew);
log(strSplitNew.join(' ')); // My name is Bert

// ==========
// filter()
// ==========

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
log(youngPeople);

let dev = function (person) {
  return person.position === 'developer';
};
log(dev); // function

const developer = people.filter(dev);

log(developer); // array with one index (object of Bob)

// ==========
// find()
// ==========

const peopleFind = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'anna', age: 30, position: 'the boss', id: 3 },
  { name: 'willy', age: 50, position: 'gardener', id: 4 },
];
log(peopleFind);

const findPerson = peopleFind.find(function (person) {
  // function body
  return person.id === 3;
});

log(findPerson);

const findNames = ['bob', 'eric', 'julia', 'mario', 'soumeya'];

log(findNames.find(function (name) {
  return name === 'eric'; // returns the name item with the value of 'eric'
})); 



const findEric = findNames.filter(function (name) {
  return name === 'eric'; // returns the name item with the value of 'eric'
});
log(findEric) // output['eric']

const findEricFilter = peopleFind.filter(function (name) {
  return name.name === 'bob'  // returns the name item with the value of 'eric'
});

log(findEricFilter[0].age, findEricFilter[0].name); // output 20 // output bob 
// when using filter() we are getting a new array 


// ==============
// reduce
// ==============




