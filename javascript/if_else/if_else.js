//PART ONE

const age = 11;

if (age >= 18) {
  console.log("you can come in");
} else if (age < 15) {
  console.log("ask your mum");
} else {
  console.log("you are too young");
}

//PART 2

const isFemale = false;

if (isFemale) {
  console.log("you are a women");
} else {
  console.log("go home");
}

//Part 3

const driverStatus = "designated";

if (driverStatus === "not designated") {
  console.log("yes you are allowed to drive");
} else {
  console.log("you are not allowed to go home");
}

let x = null;

x > 4;
console.log(x);

// Logical operators
const myAge = 15;

if (myAge >= 18 && myAge <= 30) {
  console.log("You can come, you cool chick");
} else {
  console.log("you ain't coming");
}

const myAge2 = 25;

if (myAge2 <= 20 || myAge2 <= 39 || myAge2 === 25) {
  console.log("come on in");
} else {
  console.log("bye bye");
}

// Exercise: comparison && logical operators
//Part 1: 50% discount

const myAge3 = 26;

if (myAge3 >= 18 && myAge3 <= 25) {
  console.log("You get 50% off");
} else {
  console.log("nope you will pay the full price");
}

//Part 2: Fun Faction!

const firstName = "Sarah";

if (firstName == "Sarah" && firstName !== "Merel") {
  console.log("you get free beer");
}

const totalAmount = 100;

if (totalAmount >= 25 && totalAmount <= 49 ) {
  console.log("veggie balls for you!");
} else if (totalAmount > 50 && totalAmount <= 99) {
  console.log("free nachoooooooo time");
} else if (totalAmount >= 100) {
  console.log("Champagne babyyyyyyyy");
} else {
  console.log("you get nothing");
}

//solution (inderdaad minder code)

if (totalAmount >= 100) {
  console.log("free bottle of champagne.");
} else if (totalAmount > 50) {
  console.log("free serving of nachos");
} else if (totalAmount > 25) {
  console.log("free (vega) bitterballs");
} else {
  console.log(
    "Unfortunately you don't get a discount, but it's nice to have you!"
  );
}