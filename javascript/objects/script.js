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
console.log(pastelColors);

console.log(pastelColors.length);

console.log(pastelColors[0]);
console.log(pastelColors[pastelColors.length - 1]);

// push method -- added purple to the array and a digitnumber to the end.
pastelColors.push("purple", 2022);
pastelColors.push({ greeting: "hi I am an object" });

console.log(pastelColors);

//only the last index loggen
console.log(pastelColors[pastelColors.length - 1]);

// extra:: een nieuwe variable aangemaakt voor laatste element in pastelcolors.

let lastPastelColors = pastelColors[pastelColors.length - 1];
console.log(lastPastelColors);

// PART 3: A 'real life' object

const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They're affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts",
    },
  },
  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits",
    },
  },
  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food",
    },
  },
];

//Log the name of the last cat breed. Name cat breed 3: American Bobtail

console.log("Name of the last cat:", catBreeds[2].name);

//Log the energy level of the first cat breed.Energy level cat breed 1: 5

console.log("Energylevel of the first cat:", catBreeds[0].energy_level);
// Log the first temperament of the temperaments of the second cat breed.First temperament cat breed 2: Affectionate
console.log("the first temperament of the temperament of the second cat:", catBreeds[1].temperament[0]);

// Log the last temperament of the temperaments of the third cat breed. Last temperament cat breed 3: Sensitive
// hoe kom je bij het laatste? 


  
const lastTemperament = catBreeds[2].temperament;
console.log(lastTemperament);
console.log("Last temperament of the third cat:", lastTemperament[lastTemperament.length - 1]);

//uitkomst van Winc
const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log(
    "Laatste temperament kat 3:",
    catBreeds[2].temperament[lengthTemperamentsCatThree - 1])


// console.log(catBreeds[2].temperament[4]);

console.log("The favorite food of the third cat:", catBreeds[2].food.favourite_food);
console.log(catBreeds);


/* =============================
LIVESESSIE ARRAYS NIELS BLOM
============================= */

// How to create an array 

const numbers = [8, 304, 700, 10, 4, 373883];
const numbers2 = [1, 2, 3, 4, 5, 6];


console.log(numbers2.indexOf(2));
console.log(numbers2.includes(3)); //true
console.log(numbers2.includes(7)); //false

// Concatenate a array : merging arrays together. 
const numbersTotal = numbers.concat(numbers2);
console.log(numbersTotal);

// slice() method

const animals = [ "horse", "ant", "bison", "camel", "duck", "elephant"];

const animalsSliced = animals.slice(2);
console.log(animals.slice(4, 6));
console.log(animalsSliced);

//splice() method


//sort() sorteert of alfabetische volgorder oplopend.

animals.sort();
console.log(animals);





