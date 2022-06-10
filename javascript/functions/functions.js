"use strict";

console.log("hello");

// writing or 'defining' a function
const makeSpaghetti = function () {
  console.log("Boil water");
  console.log("Add pasta");
  console.log("Make sauce");
  console.log("Drain pasta");
  console.log("Combine pasta and sauce");
};

// Calling/using the function: Use function name and the parantheses
makeSpaghetti();

const number = 3;
const name = "Ariana";

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
  console.log("kneeding the dough");
  console.log("making pasta sauce");
  console.log("cutting vegetables");
  console.log("putting tomatosauce on the dough");
  console.log("putting a lot of cheese on the dough");
  console.log("put artichokes on it");
  console.log("put salami on it");
  console.log("bake it in the over baby");
  console.log("ENJOY".toLowerCase());
}

// no the code won't run yet because it has only been defined but not called yet

makingPizza();
makingPizza();

function howToMakeYummySushi() {
  console.log("cook the rice");
  console.log("cut the vegetables");
  console.log("bake the shrimps");
  console.log("get the seaweed paper");
  console.log("put the rice on it");
  console.log("add different toppings");
  console.log("roll it baby");
  console.log("put wasabi on the sushi");
  console.log("Itadakimasu!".toUpperCase());
}

howToMakeYummySushi();
howToMakeYummySushi();
howToMakeYummySushi();

const makePizza = function () {
  console.log("Roll dough");
  console.log("Spread tomato sauce");
  console.log("Grate cheese");
  console.log("Bake in oven");
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
  console.log("Ping! Your " + item + " is heated.");
};

// we give a string to this function
heat("popcorn");
heat("milk");

const main_course = "pasta";
const dessert = "cake";

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
 
wallPaintColor("north-side", "purple");
wallPaintColor("south-east", "green");
wallPaintColor("west-north", "black");

// the order of the passing arguments does matter. what you will be calling won't make sense
wallPaintColor("red", "bedroom");
wallPaintColor("brown", "gameroom");

// what happens if you change the order of the arguments in the function definition and when calling the function?
// changing the order in the function doesn't effect what is inside the function. but it will change the order you need to put when calling the function.




