/* eslint-disable no-unused-vars */
'use strict';

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

console.log(typeof items); // output is object, because anything other than primitive datatypes are objects in js

// ============
// .filter() -- TRUE OR FALSE
// ============
//all items under or equal to 100 dollars

const predicate = (item) => {
  return item.price <= 100;
};

const predicate2 = function (item) {
  return item.price <= 10;
};

const filteredItems = items.filter(predicate2);

const filteredItemsSecond = items.filter((item) => {
  return item.name.length <= 3;
});

console.log(items); // original arrays won't be changed but new arrays will be created
console.log(filteredItems);
console.log(filteredItemsSecond);

// ============
// .map()
// ============

const mapItems = items.map((item) => {
  return { naam: item.name, price: item.price / 100 };
});

const mappedItems = items.map((item) => {
  // return item.name +" " + item.price;
  return item.price;
});

console.log(items); // original arrays won't be changed but new arrays will be created
console.log(mapItems);
console.log(mappedItems);

// ============
// .find() -- TRUE OR FALSE
// ============

const findItems = items.find((item) => {
  return item.name === 'Computer';
});

const findItems2 = items.find((item) => {
  return item.price === 100;
});

console.log(findItems);
console.log(findItems2);

// ============
// .forEach() -- similair to a for loop but takes a function so it's easier
// ============

// looping over arrays .. much easier thant for loops

items.forEach((item) => {
  console.log(item.name);
  // waarom kan return niet? omdat het geen variabele heeft?
});

// ============
// .some() -- TRUE OR FALSE - Checks if at least one item hold the condition
// ============

const hasInexpensiveItem = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItem); // OUTPUT: true

const hasExpensiveItem = items.some((item) => {
  return item.price >= 2000;
});

console.log(hasExpensiveItem); // OUTPUT: false

// ============
// .every() -- TRUE OR FALSE Checks if every item holds the condition
// ============

const isEveryItemExpensive = items.every((item) => {
  return item.price >= 5;
});

console.log(isEveryItemExpensive); // OUTPUT : true
// want de prijs van iedere item in the array Items is hoger of gelijk aan 5 dollars

// ============
// .reduce() -- does a loop .. add to the previous item price
// ============

const totalPrice = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(totalPrice);

// ============
// .includes() -- TRUE OF FALSE
// ============

const numbers = [1, 'strawberry', 2, 3, 4, 5];

const includesTwo = numbers.includes('strawberry', 0); // HOW CAN THIS BE TRUE??

console.log(includesTwo);
console.log(numbers.includes(0));

//   =======
// join()
// =======

const arr2 = [1, 2, 3, 4];
const arr1 = [5, 6, 8];

const arrJoin = arr1.join('+');
console.log(arr1.join('*'));
console.log(arrJoin);

console.log(arr1.indexOf(5));

// ++++++++++++++++++++++++++++++++++++++++++++
//   Exercise: Debugging 101 – Console.log()
// ++++++++++++++++++++++++++++++++++++++++++++

const people = [
  { name: 'N. Armstrong', profession: 'spacecowboy', age: 89 },
  { name: 'H. de Haan', profession: 'chicken hypnotist', age: 59 },
  { name: 'A. Curry', profession: 'frogman', age: 32 },
  { name: 'F. Vonk', profession: 'snake milker', age: 36 },
  { name: 'B. Bunny', profession: 'rabbit walking service', age: 27 },
  { name: 'Dr.Evil', profession: 'digital overlord', age: 56 },
];

for (let person of people) {
  // console.log(person);
  console.log('this is the whole person:', person);
  console.log(`THIS IS THE WHOLE PERSON ${person}`); // OUTPUT : THIS IS THE WHOLE PERSON [object Object]

  console.log('This is the name of the person:', person.name);
  console.log(`THIS IS THE NAME OF THE PERSON: ${person.name}`);

  console.log(
    `This is the year ${2022 - person.age} that ${
      person.name
    } was born in backticks`
  ); // backticks
  console.log(
    'this is the year',
    2022 - person.age,
    'that',
    person.name,
    'was born'
  );

  console.log(`${person.name} is a ${person.profession}`);

  if (person.age >= 50) {
    console.log('YES, this person is older than 50');
  } else {
    console.log(`NO this person is not older than 50 and is ${person.age} old`);
  }
}


// +++++++++++++++++++++++++++++++++++
//   EXERCISE: ARRAY METHODS - PART 1
// +++++++++++++++++++++++++++++++++++