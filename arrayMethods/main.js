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
// .forEach() -- similair to a for of loop but takes a function so it's easier
// ============

//looping over arrays

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

//hoisting
console.log(nameDev);

var nameDev = 'Ed';

// IIFE
(function () {
  console.log('hello');
})();

console.log('final');

//  synchronous callback

const sayName = (name, cb) => {
  // the funcion callBack gaat in de tweede parameter
  console.log('running some code');
  console.log('running some code');
  console.log('running some code');
  console.log('running some code');
  console.log('running some code');
  console.log('my name is cilvya');
  console.log(`my name is ${name}`);
  cb();
};

function callBack() {
  console.log('this is the end');
}

sayName('Ed', callBack);

// SYNCC callback -- with setTimeOut , with Evenlistener

console.log('first');

setTimeout(() => {
  console.log('from callback');
}, 2000);

console.log('last');

// NETNINJA ||
// Functions

const speak = function (name = 'cilvya', time = 'afternoon') {
  return `good ${time} ${name}`;
};

console.log(speak('mario', 'night'));
console.log(speak()); // this one will console log the default value that are stated in as parameter in the function

// return
const calcArea = function (radius) {
  let area = 3.14 * Math.pow(radius, 2); // local variable in the function
  // let area = 3.14 * radius**2 // same
  return area; // this is how to return a value
};

const areaCapture = calcArea(5);
console.log(areaCapture);

const calcVolume = function (radius) {
  return radius * 2;
};

const calcNumber = calcVolume(areaCapture); // assign the value to a variable so we can work with it later
// otherwise it's not saved to the memory
console.log(calcNumber);

// can also do this -- make it a big shorter
const calcAreaShort = function (radius) {
  return 3.14 * Math.pow(radius, 2); // don't have to store it in a local variable we can return it
};

const areaCaptureShort = calcAreaShort(3);
console.log(areaCaptureShort);

// Arrow functions

const calcAreaArrow = (radius) => {
  // when there is one parameter we can leave the parantheses, but if we have no parameter we do have to add the ()
  // return 3.14 * Math.pow(radius, 2);
  return 'hello' + 2 * radius;
};

const areaCaptureArrow = calcAreaArrow(5);
console.log(areaCaptureArrow);
console.log(typeof areaCaptureArrow); // string

const greet = () => 'hello, world';
const resultGreet = greet().toUpperCase();
console.log(resultGreet);

console.log('********');

const bill = function (products, tax) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const billArrow = (products, tax) => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
    // console.log(products[i]);
    // console.log(total);
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
console.log(billArrow([2, 3, 4], 0.8));

// how to add strings as numbers

const string1 = '2';
const string2 = '4';
console.log(typeof string1, typeof string2);

const unaryPlus = +string1 + +string2;
console.log(typeof unaryPlus);

const stringToNumbers = Number(string1) + Number(string2);
console.log(typeof stringToNumbers);

// parseInt method but it won't work if the non-numeric characters are at the beginning of the string

const s1 = parseInt('5fff');

console.log(s1); // 👉️ 5
console.log(typeof s1); // 👉️ number

// NaN is Not a Number but it is considered in JS as a number

const animalsArray = [
  'Bear',
  'cheetah',
  'Crocodile',
  'Fox',
  'Dolphin',
  'Lion',
  'Shark',
  'Snake',
  'Tiger',
];

const vintageShops = [
  {
    name: 'vinted',
    year: 2000,
    headquarters: 'New York',
    amountofEmployees: 100,
  },
  {
    name: 'marktplaats',
    year: 1996,
    headquarters: 'Amsterdam',
    amountofEmployees: 2000,
  },
  {
    name: 'reliving',
    year: 2020,
    headquarters: 'Berlijn',
    amountofEmployees: 10,
  },
];

console.log(animalsArray.length);
console.log(vintageShops.length);

const hasAmountOfEmployees = vintageShops.filter((shop) => shop.year > 2000);

console.log(hasAmountOfEmployees);

const numbersTest = [5, 3, 7, 8, 4, 2, 56, 8, 5];
const numberArray = (number) => number > 20;

const sortedNumbers = numbersTest.sort(numberArray);
const filtered = numbersTest.filter(numberArray);
const mapped = numbersTest.map(numberArray);

console.log(numbersTest);
console.log(filtered);
console.log(mapped);
console.log(sortedNumbers);

[1, 2, 3, 4].map((a) => {
  return { a: 1 };
});

// console.log(myFriends.filter((a) => a.age));
console.log(
  [
    {
      name: 'Dom',
      age: 35,
      occupation: 'Web developer',
    },
    {
      name: 'Amy',
      age: 26,
      occupation: 'Nurse',
    },
    {
      name: 'Bruce',
      age: 55,
      occupation: 'Electrician',
    },
  ].map((pen) => {
    return {
      size: 'A4',
      color: 'red',
    };
  })
);

const myself = [
  {
    firstName: 'Cilvya',
    lastName: 'Huang',
    age: 30,
    hobbies: ['ceramics', 'yoga', 'music'],
    address: {
      street: 'baltimoreplein 4',
      zipcode: '1334KA',
      city: 'Almere',
      country: 'The Netherlands',
    },
  },
];

console.log(myself[0].firstName); // music

console.log(myself);

// for
for (let i = 0; i <= 10; i++) {
  console.log(`For loopnumber ${i}`);
}

// while
let i = 0; // with the while loop you set the variable outside of the loop

while (i < 10) {
  console.log(`while loop number ${i}`);
  i++;
}

// for ..of

for (let me of myself) {
  console.log(me.firstName);
}

// high order array methods

//forEach -especially if you want to go through an array.
myself.forEach(function (item) {
  console.log(item.firstName);
});

const friends = [
  {
    name: 'Dom',
    age: 35,
    occupation: 'Web developer',
    diploma: 'true',
  },
  {
    name: 'Amy',
    age: 26,
    occupation: 'Nurse',
    diploma: 'true',
  },
  {
    name: 'Bruce',
    age: 55,
    occupation: 'Electrician',
    diploma: 'false',
  },
];

delete friends[0].age; // delete the age of the first index in the object friends.
console.log(friends);

// map

const niiii = friends.map(function (friend, index, array) {
  return array.length;
});

console.log(niiii);

const arrayPlay = friends.map(function (friend) {
  return friend.name;
});

console.log(arrayPlay);

const hastheNameAmy = function (names) {
  // ['Dom', 'Amy', 'Bruce']
  let findAmy = names.filter((name) => name === 'Amy'); // wat is name? name is een string binnen de array. hij loopt over de name strings van de array names, dus je returned string dat gelijk staat aan amy. filter maakt enkel een nieuwe array aan
  return findAmy;
};

console.log(hastheNameAmy(arrayPlay));

// wat hier staat is. filter binnen de friend objecten op mensen die een diploma hebben, geef mij die array. en map, en dus geef mij vervolgens de occupatuon van deze mensen terug.
const hasDiploma = friends
  .filter(function (friend) {
    return friend.diploma === 'true';
  })
  .map(function (friend) {
    return friend.occupation; // het is een array bestaande uit een object dus je moet dan de property naam erbij zetten (occupation)
  });

console.log(hasDiploma);

// CONDITIONALS

const sayHi = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

// arrow way to do it. one arrow function returning another arrow function
const sayHiArrow = (greeting) => (name) => console.log(`${greeting} ${name} `);

sayHi('hello')('jonas'); // also invoking the function.

const greeter = sayHi('hey'); // dit is nu de functie, zie console.

// ƒ(name) {
//   console.log(`${greeting} ${name} `);
// }

greeter('qing');
console.log(greeter);

// first class functions -- higher order functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Js is the best', upperFirstWord);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined but it does has it own this keyword
};

calcAge(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2074 - this.year);
  },
};

jonas.calcAge(); // it logs the jonas object.

// object constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

//instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Almos', '8-10-1989');

console.log(person1);
console.log(person2.dob.getFullYear);

const input = document.querySelector('#input');

input.addEventListener('focus', function (e) {
  console.log(e);
});

//the opposite van focus is blur
document.querySelector('#input-2').addEventListener('blur', function (e) {
  console.log(e);
});

// op het hele document keydown
document.addEventListener('keydown', (e) => {
  console.log(e.key); //welke toets wordt er getoetst
});

// SORT array Methods

console.log(['b', 'a', 'c', 'g'].sort());

// meestal gebruik je sort() als compare function

// =====================
// RETURN // NIELS BLOM
// =====================

const myVar = NaN;

if (myVar) {
  console.log('truthy');
} else {
  console.log('falsey');
}

function add(x, y) {
  console.log(x + y);
  return x + y;
}

const total = add(9, 6);
console.log(total);

const totale = add(add(6, 3), 9);
console.log(totale);

// higher order functions
let sayHello = function () {
  return 'hello';
};

console.log(sayHello); // output function is de functie zelf.
console.log(sayHello()); // output is de waarde van de sayHello functie dat is hallo.

function callTwice(func) {
  func();
  console.log(func);

  func();
}

console.log(callTwice);

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// ======================
// live les array method
// ======================

const plus6 = function (number) {
  return number + 6;
};

const double = function (number) {
  return number * 2;
};

const minus10 = function (number) {
  return number - 10;
};

const functionArray = [plus6, double, double, minus10, double];

let number = 1; // je zet dit buiten omdat binnen de forEach een eigen wereld zit en dan ben je de waarde kwijt als je dit binnen zou zetten
// en de forEach() methode returned ook niks

functionArray.forEach((func) => {
  number = func(number);
  console.log(`this is the endvalue`, number);
});

console.log(number); // output is 36

// dit kun je ook met een for loop doen;
let numberSecond = 1;
for (let i = 0; i < functionArray.length; i++) {
  console.log(i, functionArray[i]);
  console.log(typeof functionArray[i]); // function
  console.log(typeof functionArray); // object
  numberSecond = functionArray[i](numberSecond); // een assignment van een expression moet altijd aan de linkerkant
  console.log(numberSecond);
}

console.log(numberSecond);

// !!!!! returnen doe je alleen in een functie en niet in een loop!! 


// kan ook in een for .. of loop en makkelijker
let numberThree = 1;
for (let func of functionArray) {
  numberThree = func(numberThree);
  console.log(numberThree)
}

console.log(numberThree);


const str1 = 'hello my name is cilvya';
const str2 = 'name';

console.log(str1.match(str2));


// functions

function getMilk(money) {
  const cost = Math.floor(money / 1.5);

  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');
  console.log('buy' + " " + cost + " " + 'bottles of milk')
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

getMilk(10)
