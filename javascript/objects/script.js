/* 
console.log("hello");

let isApproved = false;

// syntax object literal --> const/let variablename = { key:value, key:value, key:value}


const person = {
  name: "Clara",
  age: 42,
};

console.log(person);

// access a property in an Object with the Dot notation 
// use this by Default it's more conceised. 

person.name = "John";
console.log(person.name);
console.log(person);



// acces a property in an Object with Bracket Notation
person["name"] = "Mary";
console.log(person.name);
console.log(person);

// also Bracket Notation

let selection = "name";
person[selection] = "Anna";
console.log(person);


/* =====================
ARRAYS
===================== */

/* let selectedColors = ["pink", "neongreen", "lilac"];

//adding another element in the array BUT if you add an element in an exisiting element that element will dissapear
selectedColors[3] = "beige";
selectedColors[4] = "red";
selectedColors[2] = "orange";
selectedColors[5] = 80; 

console.log(selectedColors[2]);
console.log(selectedColors.length);  */

// ====================
// EXERCISE Winc
// ====================

//PART 1 : OBJECTS

const person = {
  name: "Cilvya",
  age: 30,
  evaluations: [7, 10, 9],
};

console.log(person);

//Dot notation. only logging  key name and age
console.log(person.name);
console.log(person.age);

//Bracket notation. only logging key name and age
console.log(person["name"]);
console.log(person["age"]);

// extra: accessing the object with bracket notation and logging the properties seperately.
const secondPerson = {};
secondPerson["name"] = "Lara";
secondPerson["age"] = 20;

console.log(secondPerson.name);
console.log(secondPerson.age);
 
// adding the key 'evaluations' with value [7, 10, 9]. the value is that this evaluation property has an array as value that exist out of 3 elements.
console.log(person.evaluations);


// PART 2 : ARRAYS

const pastelColors = ["pink", "green", "yellow", "blue", "grey"];

console.log(pastelColors.length);

console.log(pastelColors[0]);
console.log(pastelColors[pastelColors.length - 1]);

// push method -- added purple to the array and a digitnumber to the end.
pastelColors.push("purple", 2022); 
pastelColors.push({ greeting: "hi I am an object" });

console.log(pastelColors);
console.log(pastelColors[pastelColors.length - 1]);


// extra:: een nieuwe variable aangemaakt voor laatste element in pastelcolors.

let lastPastelColors = pastelColors[pastelColors.length - 1]
console.log(lastPastelColors);


// PART 3: A 'real life' object















