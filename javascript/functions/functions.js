'use strict';

// writing or 'defining' a function
const makeSpaghetti = function () {
  console.log('Boil water');
  console.log('Add pasta');
  console.log('Make sauce');
  console.log('Drain pasta');
  console.log('Combine pasta and sauce');
};

// Calling/using the function: Use function name and the parantheses
makeSpaghetti();

const number = 3;
const name = 'Ariana';

makeSpaghetti();
makeSpaghetti();

/* function showMessage() { 
  alert("love you");
}

showMessage();

 */

/* ++++++++++++++++
  FUNCTIONS BASICS 
  ++++++++++++++++ */

function makingPizza() {
  console.log('kneeding the dough');
  console.log('making pasta sauce');
  console.log('cutting vegetables');
  console.log('putting tomatosauce on the dough');
  console.log('putting a lot of cheese on the dough');
  console.log('put artichokes on it');
  console.log('put salami on it');
  console.log('bake it in the over baby');
  console.log('ENJOY'.toLowerCase());
}

// no the code won't run yet because it has only been defined but not called yet

let a = makingPizza();
console.log(a);

console.log(makingPizza());

function howToMakeYummySushi() {
  console.log('cook the rice');
  console.log('cut the vegetables');
  console.log('bake the shrimps');
  console.log('get the seaweed paper');
  console.log('put the rice on it');
  console.log('add different toppings');
  console.log('roll it baby');
  console.log('put wasabi on the sushi');
  console.log('Itadakimasu!'.toUpperCase());
}

howToMakeYummySushi();
howToMakeYummySushi();
howToMakeYummySushi();

const makePizza = function () {
  console.log('Roll dough');
  console.log('Spread tomato sauce');
  console.log('Grate cheese');
  console.log('Bake in oven');
};

makePizza();

/* ===========================
FUNCTION ARGUMENTS LESSON 
===========================
 */
// Defining a function and we give this an argument (item); this is called passing a argument to a function.
const heat = function (item) {
  console.log("I'm heating " + item);
  //lot of code
  //lot of code
  //lot of code
  //lot of code
  //lot of code
  //lot of code
  //lot of code
  //lot of code
  console.log('Ping! Your ' + item + ' is heated.');
};

// we give a string to this function
heat('popcorn');
heat('milk');

const main_course = 'pasta';
const dessert = 'cake';

// you can also give a 'variable' to a function
heat(main_course);
heat(dessert);

// giving multiple arguments in functions. seperate them by (,)

const multiply = function (numberA, numberB) {
  console.log(numberA * numberB);
};

multiply(3, 4);

const dogAge = 50;
const dogYearsFactor = 7;

multiply(dogAge, dogYearsFactor);

const calculateAverage = function (numbers) {
  const average = numbers.reduce((total, n) => total + n) / numbers.length;
  console.log(average);
};

calculateAverage([1, 2]);

const grades = [6, 7, 8, 9, 5, 6, 4, 6, 3, 2];
calculateAverage(grades);

// FUNCTIONS ARGUMENTS EXERCISE
// no arguments

/* let wallPaintColor = function () {
  console.log("The wall has been painted red");
};

wallPaintColor(); */

// single arguments

/* let wallPaintColor = function (color) {
  console.log("The wall has been painted " + (color));
};

wallPaintColor("pink");
wallPaintColor("green");
wallPaintColor("black");
// calling without an argument - it won't be running since it has an argument (color)
wallPaintColor(); */

// multiple arguments

const wallPaintColor = function (color, wallcoordinates) {
  console.log(`The ${wallcoordinates} wall has been painted ${color}`);
};

// calling without an argument - it will run but it says undefined on the arguments.
wallPaintColor();

wallPaintColor('north-side', 'purple');
wallPaintColor('south-east', 'green');
wallPaintColor('west-north', 'black');

// the order of the passing arguments does matter. what you will be calling won't make sense
wallPaintColor('red', 'bedroom');
wallPaintColor('brown', 'gameroom');

// what happens if you change the order of the arguments in the function definition and when calling the function?
// changing the order in the function doesn't effect what is inside the function. but it will change the order you need to put when calling the function.

function add(x, y) {
  console.log(x + y);
  let sum = x + y;
  return sum; // stop the function after this return
}

/* ===============
ARROW FUNCTIONS
=============== */

// function expression - Jonas Udemy
const calcAge2 = function (birthYear) {
  return 2039 - birthYear;
};

// this is the arrow function where the return happens impplicity without us having writing return explicitely like for the one above
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

// multiliner arrow function we need the curly braces again
const yearsUntilRetirement = (birthYear, firstName1) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName1} retires in ${retirement} years`;
};

const grandmaAge = yearsUntilRetirement(1991, 'Cilvya');
const grandpaAge = yearsUntilRetirement(1980, 'Jesse');

console.log(grandmaAge);
console.log(grandpaAge);

/* ===============
RETURN 
=============== */

// checking if a number is big

function pointsCalculator(points1) {
  if (points1 > 100) {
    return true;
  } else {
    return false;
  }
}

pointsCalculator(89);
pointsCalculator(101);
pointsCalculator(100);
pointsCalculator(23);
pointsCalculator(130);

console.log(pointsCalculator(88));

// how to make it shorter::
const numberIsBig = function (number) {
  return number > 100;
};

console.log(numberIsBig(120));

// this is a function that produces something. it will look if the number is bigger than 100 so a return statement is needed;

// bouncer at a club

const clubEnter = (age, currentPeople, maxPeople) => {
  if (age < 18) {
    return 'this is a club for adults';
  }
  if (currentPeople >= maxPeople) {
    return "it's too busy now, come back later";
  } else {
    return 'come in';
  }
};

console.log(clubEnter(19, 200, 250));

//another solution. We can also use a temporary response variable, put a value into it and then return that variable at the end of the function. This can sometimes be a better pattern.

const getBouncerReaction = function (
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  let response;
  if (ageOfPotentialVisitor < 18) {
    response = 'this is a club for adults';
  } else if (currentVisitors >= maxVisitors) {
    response = "it's too busy now, come back later";
  } else {
    response = 'come in';
  }
  return response;
};

//calculating the average

function numberAverage(number1, number2, number3, number4, number5) {
  let averageFive = Math.round(
    (number1 + number2 + number3 + number4 + number5) / 5
  );
  return averageFive;
}

console.log(numberAverage(2, 2, 4, 5, 6));

let numberCalc1 = numberAverage(5, 6, 8, 3, 2);
let numberCalc2 = numberAverage(20, 20, 20, 20, 20);
let numberCalc3 = numberAverage(5, 6, 50, 1, 2);

console.log(numberCalc1, numberCalc2, numberCalc3);

// this is a function that does something. it will return the average of five numbers.

// =====================
// THREE WAYS TO WRITE JS
// =====================

//Function declaration
function sayHello1() {
  console.log('Hello1');
}

//Function expression - modern way to write functions - good way to start as a beginner
const sayHello2 = function () {
  console.log('Hello 2');
};

//Arrow function (also a function expression)
const sayHello3 = () => {
  console.log('Hello 3');
};

// calling the three functions is all three the same
sayHello1();
sayHello2();
sayHello3();

console.log(sayHello1()); // undefined.

// FUNCTIONS: three ways to write them

//function declaration

function funcDeclaration(number1, number2) {
  const squaredOne = number1 ** 2;
  const squaeredTwo = number2 ** 2;
  const squaredAdded = (squaredOne + squaeredTwo) ** 2;
  return squaredAdded;
}

let declarationTotal = funcDeclaration(2, 2);
console.log(declarationTotal);

// function expression

const funcExpression = function (number1, number2) {
  const squaredBoth = number1 ** 2 + number2 ** 2;
  const squaredAdded = squaredBoth ** 2;
  return squaredAdded;
};

let expressionTotal = funcExpression(3, 3);
console.log(expressionTotal);

// shorter version

const funcExpressionShort = function (number1, number2) {
  const squaredAll = (number1 ** 2 + number2 ** 2) ** 2;
  Math.pow(Math.pow(number1, 2) + Math.pow(number2, 2), 2);
  return squaredAll;
};

console.log(funcExpressionShort(2, 2));
// als je geen haakjes doet dan doe tie dus   number 1 ** 2 = 4 en dan 16 daarbij optellen opmdat ** voorrang heeft op +

// function expression with the helper function

const square = function (number) {
  return number * number;
};

const doSquareCalculation1 = function (number1, number2) {
  return square(square(number1) + square(number2));
};

// Arrow functions

const arrowExpression = (number1, number2) => {
  let squaredBoth = number1 ** 2 + number2 ** 2;
  let squaredAdded = squaredBoth ** 2;
  return squaredAdded;
};

let arrowTotal = arrowExpression(2, 2);
console.log(arrowTotal);

// another arrow solution but a bit difficult to read.

const doSquareCalculation = (number1, number2) => {
  const sum = number1 * number1 + number2 * number2;
  return sum * sum;
};

console.log(doSquareCalculation(3, 3));

// NULL and Undefined testing - Kyle webdev

console.log(null == undefined); // true
console.log(null === undefined); // false .. === will distinguish null and undefined

/* ==================================
DEBUGGING FUNCTIONS CALLING FUNCTIONS
==================================
 */

const makePositive = function (number) {
  console.log('Entering makePositive..');
  if (number < 0) {
    return Math.abs(number);
  }
  return number;
};

const makeBigger = function (number) {
  console.log('Entering makeBigger..');
  if (number < 10) {
    return 10 + number;
  }
  return number;
};

const squared = function (number) {
  console.log('Entering square..');
  return number * number;
};

const doComplexCalculation = function (number) {
  console.log('Entering doComplexCalculation..');
  const positiveNumber = makePositive(number);
  const bigNumber = makeBigger(positiveNumber);
  const squaredNumber = squared(bigNumber);
  return squaredNumber;
};

console.log(doComplexCalculation(-1));

/* ====================================
FUNCTIONS CALLING FUNCTIONS EXERCISE
==================================== */

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, bananas) {
  const applePieces = cutFruitPieces(apples);
  const bananaPieces = cutFruitPieces(bananas);

  return applePieces + bananaPieces;

  // const juice = `Juice with ${applePieces} apple pieces and ${bananaPieces} banana pieces`;
  // return juice;
};

console.log(fruitProcessor(2, 3));

// a. Hey kiddo

const ageAboveEighteen = function (age1) {
  console.log('entering firstage');
  if (age1 >= 18) {
    let result = true;
    console.log('The person is old enough', result);
    return true;
  } else {
    let result = false;
    console.log('output:', result);
    return result;
  }
};

const greetingByAge = function (age) {
  console.log('entering greeting');

  if (ageAboveEighteen(age)) {
    // uitkomst van functie ageaboveeigtheen en niet naar de inhoud van de functie
    let result = 'hello there';
    console.log('old enough:', result);

    return result;
  } else {
    let result = 'hey kiddo';
    console.log('you are a kid', result);
    return result;
  }
};

console.log(greetingByAge(17));
console.log(greetingByAge(22));

// VAT EXERCISE 1. // tip: eerst goed laten werken in de functie dan pas vervangen als je een tweede functie aanmaakt

const calculateVatAmount = (basePrice, vatPercentage) => {
  const vatAmount = basePrice * (vatPercentage / 100);
  return vatAmount;
};

const basePriceWithVat = (basePrice2, vatPercentage2) => {
  // const vatAmount = calculateVatAmount(1000, 21); // het gaat niet om de naam maar om de waarde.
  const vatAmount = calculateVatAmount(basePrice2, vatPercentage2);
  console.log(vatAmount);
  const priceIncludeVat = basePrice2 + vatAmount;
  return priceIncludeVat;
};

// de return waarde van de functie wordt assigned aan de variable en dus niet de funvtie
const testingPrice = basePriceWithVat(1000, 21);

const testingPrice2 = basePriceWithVat(2, 9);

console.log(testingPrice, testingPrice2);

// VAT exercise 2 dus baseprice en de Vatamount

const calculateVatPercentageAmount = (
  baseWithVatFunction,
  vatPercentageFunction
) => {
  const baseMinusVatAmount =
    baseWithVatFunction * (vatPercentageFunction / 100);
  return baseMinusVatAmount;
};

const basePriceWithoutVat = (baseWithVat, vatPercentage) => {
  const calculateVatAmount1 = calculateVatPercentageAmount(
    baseWithVat,
    vatPercentage
  );
  const basePriceSubstractVat = baseWithVat - calculateVatAmount1;
  return [basePriceSubstractVat, calculateVatAmount1];
};

console.log(basePriceWithoutVat(300, 10));
console.log(basePriceWithoutVat(200, 50));
console.log(basePriceWithoutVat(2.18, 9));
console.log(basePriceWithoutVat(1210, 21));

// Recursion function

const myPow = (base, power) => {
  if (power === 1) {
    return 1;
  } else {
    return base * myPow(base, power - 1);
  }
};
console.log(myPow(2, 1));

// OEFENING FUNCTION.
// function keyword - name - input (parameter), so we want the person's birthyear as a input. this parameter is local and only available in this function.
// the parameter is the placeholder.

function calculateAge(birthYear) {
  const age = 2037 - birthYear;
  return age; // this returns a value
  // we calculate the age first AND then return it
}
const calculateYear = calculateAge(1991); // let's capture this value out of function and put it in a variable
console.log(calculateYear);

// =============================
// HELPER FUNCTIONS LIVE SESSIE
// =============================

//arrow functions (als je maar een ????n taak hebt, een hele simpele )
const add1 = (number1, number2) => number1 * number2;

let empty = () => {}; // Output = undefined als je een object wil dan moet je nog de haakjes erom heen doen bij een arrow function
let empty2 = () => ({}); // output = {} , want hier zitten wel de haakjes er om heen.
console.log(empty(), empty());

// default parameters

// const booking = [];

// const createBooking = funtion (flightNumber, numPassengers, price) {
//   const booking = {
//     flightNum, // will create a property with this name, so need to put value to it
//     numPassengers,
//     price

//   }
//   console.log(booking);
// booking.push(booking);
// };

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); // returns a string without any spaces in it
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};

/* =======================
 SPREAD OPERATOR - EXPANDING ARRAY
 the spread operator works on all iterables, so arrays, strings, maps or sets but NOT objects
 =========================
 expland an array into all its elements - packing all the array elements in one */

const arr1 = [7, 8, 9];
const badNewArr1 = [1, 2, arr1[0], arr1[1], arr1[2]]; // bad way of adding items to the list
console.log(badNewArr1);

// use the spread operator instead!

const newArr1 = [1, 2, ...arr1];
console.log(newArr1);

console.log(...newArr1); // logged all the items individually / same as below but this is better
console.log(1, 2, 7, 8, 9);

const restaurant = ['pizza', 'cache e pepe', 'gelato']
const restaurantDessert =['applepie', 'madeline', 'fruitbowl', 'cafe normale']

// USING THE SPREAD OPERATOR TO ADD NEW ITEMS

const newMenuAdd = [...restaurant, 'Gnocci']; // adding a new item to the array and put it in a new variable. building a new array 
console.log(newMenuAdd);

// copy array
const mainMenuCopy = [...restaurant];
// join 2 arrays 
let menuWhenDone = [...restaurant, ...restaurantDessert]; // met de spread operatoir 
menuWhenDone = [restaurant, restaurantDessert]; // hier log je twee arrays
console.log(menuWhenDone);




const str = 'Jonas'; 
const letters = [...str, ' ', 'S.'];
console.log(letters) // output : each letter of the original string is now an individual element.
console.log('j', 'o','n','a','s') // same as above



console.log("hello")







