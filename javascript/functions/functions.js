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



const makePizza = function() {
  console.log("Roll dough");
  console.log("Spread tomato sauce");
  console.log("Grate cheese");
  console.log("Bake in oven");
};

makePizza();