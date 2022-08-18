/* eslint-disable no-unused-vars */
'use strict';

const log = console.log;

// const arraycool = ['fun', 'joy', 'pretty'];

// console.log(arraycool)
// arraycool.push('cool');
// console.log(arraycool);

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

// setTimeout(() => {
//   console.log('from callback');
// }, 2000);

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
  console.log(numberThree);
}

console.log(numberThree);

const str1 = 'hello my name is cilvya';
const str2 = 'name';

console.log(str1.match(str2));

// functions

const calcBottle = function (startingMoney, costPerBottle) {
  const numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
};

const calcChange = function (startingamount, costPerBottle) {
  const change = startingamount % costPerBottle;
  return change; // return as the output
};

function getMilk(money, costPerBottle) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');
  console.log(`buy`, calcBottle(money, costPerBottle), `bottles of milk`);
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
  return `you get this money returned ${calcChange(money, costPerBottle)} `;
}

const buying10Milk = getMilk(10, 3);
console.log(buying10Milk);

// BMI CALCULATOR

const bmiCalculator = function (weight, height) {
  const bmi = Math.round(weight / Math.pow(height, 2));
  return `your bmi is ${bmi}`;
};

console.log(bmiCalculator(62, 1.8));

const anna = 'anna';
const bob = 'bob';

const hello = function (name) {
  // this is function declaration

  console.log('hello there   ' + name);
};

hello(anna); // this is function invocation
hello(bob); // when you invoke the function you can pass the arguments in the function

// width and height of my wall
// 1 inch 2.54cm
const wallHeight = 80; // you can use a variable as argument or just pass it in.

const width = calculate(100);
const height = calculate(wallHeight);

function calculate(value) {
  // const newValue = value * 2.54
  // return newValue;

  // can also write it shorter, but both are good. depends on the logic of your functions
  return value * 2.54;
}

const dimensions = [width, height];
console.log(`this is the array`, dimensions);

// function expression
const addValues = function (num1, num2) {
  return num1 + num2; // the variable addValues holds the function. this is an function expression.
};

const addValuesArrowFunction = (num1, num2) => num1 + num2; //arrow function

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
console.log(firstValue, secondValue);

const addArray = [firstValue, secondValue, addValues(8, 9)]; // so you can also put a function invocation in the array everything is possible

console.log(addArray);

// function challenge (subTotal, tax)

const calculateTotal = function (subTotal, tax) {
  // const total = subTotal + tax;
  // return total;
  return subTotal + tax;
};

console.log(calculateTotal(2, 6));

const order1 = calculateTotal(100, 10); // we are calling the variable that is holding the function
const order2 = calculateTotal(50, 20);
const order3 = calculateTotal(10, 5);
console.log(calculateTotal); // the variable calculateTotal holds a function if you log this in the console
// you will see that the value of this variable is a function ::::
//f(subTotal, tax) {
//return subTotal + tax;
//}

console.log(order1, order2, order3);

const calculateTotalArrow = (subTotal, tax) => subTotal + tax; // arrow function

console.log({ name: 'john', age: 30 });

//alert({ name: 'john', age: 30 }); // output object object which is not very useful there for its better to use console.log

// ASSIGN VARIABLE VALUE LATER

let name = 'john shrimp taco VI';
let address, zip, state;

address = '101 main street';
zip = '60612';
state = 'California';
log(address, zip, state);
log(zip);

// string properties and methods
// wrapper string objects

let text = ' Peter Jordan';
let result = text.length; // property length
// METHODS
log(text.toUpperCase()); // this is a method, which is actually a built in function that is why we need the parantheses.

log(text.charAt(3)); // as string is also indexed. to get the character at index 2 use the charAt() method
//white spaces also counts;
log(text.charAt(text.length - 1)); // always gets me the last value;

log(text.indexOf('p')); // its -1 because the lowercase p is not in the string
log(text.indexOf('e'));
log(text.startsWith(' peter')); // whitespaces also counts. it's also case sensitive // false
log(text.trim());
log(text.trim().toLowerCase().startsWith('peter'));
log(text.includes('or')); // does it include a part of the string of text.

// slice(start, end)
log(text.slice(1, -2)); // dan bij laatste want -1 dan stopt tie er net voor
log(text.slice(-3)); // starts from the back

log(text);

const person = {
  name: 'sarah',
  greeting() {
    // this is a object method
    console.log('hey i"m', this.name);
  },
};

log(person);
console.log(person.name);

// ================
// ARRAY PROPERTIES AND METHODS
// ================

const namesMethodArray = ['john', 'bobo', 'barry', 'olga', 'ben']; // we need to use quotation marks
//lenght
log(namesMethodArray[namesMethodArray.length - 1]); // to get the last index;

//concat()

let lastNames = ['peper', 'salt', 'banana'];

// concat
const allNamesConcat = namesMethodArray.concat(lastNames);
log(allNamesConcat);

// but you can also do it with the spread operator
const allNamesSpread = [...namesMethodArray, ...lastNames];
log(allNamesSpread);
log(allNamesSpread.reverse()); // reverse method

// unshift (add something to the beginning of the array)

log(lastNames.unshift('sugar')); // the unshift() method returns the length of the new array
log(lastNames);

lastNames.unshift('umami');
log(lastNames);

lastNames.shift(); // moves first index of the array
log(lastNames);

// splice() method --> splice() mutates the array

const specificNames = lastNames.splice(0, 3);
log(specificNames);

// arrays and loops

const fullNames = ['anna', 'susy', 'bob', 'john', 'maylyn', 'joshua'];
const fullLastNames = 'shakeandbake';

let newArray = [];

// for loop
for (let i = 0; i < fullNames.length; i++) {
  console.log(i);
  log(fullNames[i]); // this is how we access the items of the array
  // you can also put it in a variable first and then add this variable value to push() method
  const completeName = `${fullNames[i]} ${fullLastNames}`;
  newArray.push(completeName);
  //or you can also do it like this below, and do the functionality immediately instead of putting it in a variable first
  // newArray.push(`${fullNames[i]} ${fullLastNames}`);
}

log(newArray);

// calculateTotal exercise

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

const calculateTotalPrice = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total > 100) {
    log(`WHOAH, YOU ARE SPENDING WAY TO MUCH`);
    return total; // you put in here total because otherwise total will not be returned when this condition is true;
  } else {
    log(`You are good total is less then a 100`);
  }

  return total;
};

const totalGas = calculateTotalPrice(gas);
const totalFood = calculateTotalPrice(food);
const totalRandom = calculateTotalPrice([2, 3, 6, 7]);
log(totalGas);
log(totalFood);
log(totalRandom);

// you can log it as an object as well.

log({
  gas: totalGas,
  food: totalFood,
  random: totalRandom,
});

// ==================
// VALUE VS Reference
// ==================

const numberOne = 1;
let number2 = numberOne;
number2 = 7;
log(`the first number is ${numberOne}, the secondNumber is ${number2}`);

let person11 = { name: 'Bob', age: 22, occupation: 'butcher' };
let person22 = { ...person11 }; // with the spread operator you will make a copy from the array so the
//original array stays the same;

// person22 = person11;
person22.name = 'susy';

log(person22.name);
log(person22.occupation);
log(person11.name);

log(person22);
log(person11);

let number20 = 20 + null; // behind the scence it will be 20 + 0
log(number20);
number20 = 20 + undefined; // output is NaN
log(number20);

// ===================
// GLOBAL SCOPES
// ===================

// you can modify global variables also in functions if you use the let.

let nameInGlobalScope = 'peter';
nameInGlobalScope = 'qing';

const calculateScope = function () {
  log(nameInGlobalScope);
  nameInGlobalScope = 'petra';
  log(nameInGlobalScope);

  const inner = function () {
    nameInGlobalScope = 'inner name value';
    log(`this is from innerfunction ${nameInGlobalScope}`);
  };

  inner();
};

calculateScope();

// ======================
// LOCAL SCOPES
// ======================

let nameLocal = 'bobo';

const calculateLocal = function () {
  const nameLocal = 'jessy';
  const age = 24;
};

calculateLocal(); // if you don't invoke it nothing will happen
// log(age) // no access to age because its local

const globalNumber = 5;

const adding = function (num1, num2) {
  const globalNumber = 8; // js starts with the local scope. is it there it will take the local variable. if not it will take the global variable
  const result = num1 + num2 + globalNumber;

  const multiply = function () {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    log(multiplyResult);
    return multiplyResult;
  };

  log(result); // 15
  return multiply(); // 1500
};

const globalSum = adding(3, 4);
log(globalSum); // 1500

// ==========================
// HIGHER ORDER FUNCTIONS --  if that functions gets another function as a argument or returns another function as result
// ==========================

// higher order function -- because it accepts another function as a argument
const greetingInADay = function (myname, name, cb) {
  return `hello my name is ${myname}. ${cb(name)} `;
};

//callback function -- passed to another function as an argument and executed inside that function
function morning(nameMorning) {
  return `And my name is ${nameMorning.toUpperCase()}`;
}

//call back function
const evening = function (nameEvening) {
  return `and my name is ${nameEvening.repeat(4)}`;
};

const jip = greetingInADay('jip', 'bobo', morning); // not invoking it here
log(jip);

log(greetingInADay('tess', 'maria', morning)); // not invoking it here
log(greetingInADay('joeri', 'shelly', evening));

// console.dir(document); //
// console.dir(window);

// === ARRAY METHOD ::: EVERY() ===
// test whether ALL elements in the array pass the provided function. It returns a Boolean value;


const words = ['doggg', 'diggg', 'log', 'batgggggg', 'wag'];

const wordsOfThree = function (array) {

 return array.every(function (element) {
    return element.length === 3;
    
  })
}

log(wordsOfThree(words))

// debugger;

const endWithG = words.every(function (word) {
  const last = word.length - 1;
  log(last);
  return word[last] === 'g'
});

log(endWithG) // false because not all word ends with 'g'


// op het hele document keydown AND DETECTING KEYBOARD PRESS IN JS

document.addEventListener('keydown', function(e)  {
  console.log(e.key); //welke toets wordt er getoetst
});


// checks if the first index of the word element contains a i 

const hasCinWord = words.some(function (word) {
  log(word)
  return word[1].includes("c")
})

log(hasCinWord);