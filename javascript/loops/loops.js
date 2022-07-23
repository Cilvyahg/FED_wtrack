'use strict';

const { objectToString } = require("@vue/shared");

console.log('********');

// let age = 5; //index variable

// while (age < 10) {
//   console.log('you age is less than 10');
//   age++;
//   console.log(age);
// }

// for (age = 0; age < 10; age++) {
//   console.log(' this is the for loop');
// }

// let links = document.getElementsByTagName('a');

// for (i=1; i <= links.length; i++) {
//   console.log('this is link number' + i);
// }

// console.log(links);

// while

let w = 0;
while (w < 5) {
  w++;
  console.log(`This is while iteration number ${w}`);
}

// for
for (let i = 1; i <= 5; i++) {
  console.log(`This is for iteration number ${i}`);
}

// we use let because the let will be updated in the for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// FOR LOOP IN A ARRAY. WE START AT 0 BECAUSE ARRAYS ARE ZERO BASED

const jonasArray = [
  'Jonas',
  'Schmedtman',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  'spaghetti',
  'surfing',
  'coffee-maniac',
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  //reading from jonasarray
  console.log(jonasArray[i], typeof jonasArray[i]);

  //filling types array
  types[i] = typeof jonasArray[i];
}
// set the type of to [i] the counter otherwise we get the type of from one element in the array
console.log(types); // to get the type of all the elements of the array

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]); // pushed it to the ages array.
}

console.log(ages);

//oefening met modulo operator
const remainder = 18 % 7;
console.log(remainder);

function getColor(name) {
  const colors = ['green', 'red', 'blue'];
  const index = name.length % colors.length;
  return colors[index];
}

console.log(getColor('john')); // red
console.log(getColor('sal')); // green
console.log(getColor('al')); // negative number blue
console.log(getColor('a')); // red

// decrement jonasarrayloop

const Jonas = [
  'Jonas',
  'Schmedtman',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  'spaghetti',
  'surfing',
  'coffee-maniac',
];

for (let i = Jonas.length - 1; i >= 0; i--) {
  console.log(i, Jonas[i]);
}

// creating a loop inside of a loop -- outter loop go to inside loop, finished first iteration and got to outer loop and inner loop again until the condition is false.

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(
      `Exercise no ${exercise} : Lifting weight repetition ${rep} 🏋🏻‍♀️`
    );
  }
}

//while loop - jonas
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep}`);
}

let repWhile = 1;

while (repWhile <= 10) {
  console.log(`WHILE: Lifting weights repetition ${repWhile}`);
  repWhile++;
}

// ROLLING THE DICE (WHEN WE DON'T KNOW HOW MANY TIMES THE DICE NEEDS TO ROLL TO GET A 6 - YOU DO NOT KNOW BEFORE HAND HOW MANY LOOPS YOU NEED.

let dice = Math.trunc(Math.random() * 6) + 1; // add 1 because otherwise you get a number between 0 and 5. add 1 to get a number between 1 and 6;
console.log(dice); // a decimal number with the math.trunc you get the absolute integer

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // assign this to each iteration otherwise if we don't put this here it will only give one number because its not in the while loop
  if (dice === 6) console.log(`Loop is about to end you got a ${dice}....`);
}

// WINC:: WHILE LOOPS & FOR LOOPS EXERCISE
// 1. EVEN ODD OPERATORS // use the modulo/remainder operator.

for (let i = 0; i <= 20; i++) {
  console.log(`Is ${i} even or odd?`);

  let checkEvenOrOdd = i % 2;
  if (checkEvenOrOdd === 0) {
    console.log(`number ${i} is even`);
  } else {
    console.log(`number ${i} is odd`);
  }
}

//2. MULTIPLICATION TABLES

const multiplier = 9;

for (let multiplication = 0; multiplication <= 10; multiplication++) {
  const multiplicationAdd = multiplication * multiplier;
  const multiplicationNotation = `${multiplication} * ${multiplier} = ${multiplicationAdd}`;
  console.log(multiplicationNotation);
}

// BONUS

for (let i = 0; i <= 0; i++) {
  console.log('Multiplication table 1 - 9');

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 1;
    console.log(`${j} * 1 = ${table1}`);
  }
  for (let j = 0; j <= 10; j++) {
    const table1 = j * 2;
    console.log(`${j} * 2 = ${table1}`);
  }
  for (let j = 0; j <= 10; j++) {
    const table1 = j * 3;
    console.log(`${j} * 3 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 4;
    console.log(`${j} * 4 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 5;
    console.log(`${j} * 5 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 6;
    console.log(`${j} * 6 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 7;
    console.log(`${j} * 7 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 1;
    console.log(`${j} * 1 = ${table1}`);
  }
  for (let j = 0; j <= 10; j++) {
    const table1 = j * 8;
    console.log(`${j} * 8 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 9;
    console.log(`${j} * 9 = ${table1}`);
  }

  for (let j = 0; j <= 10; j++) {
    const table1 = j * 10;
    console.log(`${j} * 10 = ${table1}`);
  }
}

// solution nested loops.
for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
  }
}

// The grade assigner
function assignGrade(score) {
  if (score > 90) {
    return 'A';
  } else if (score > 80) {
    return 'B';
  } else if (score > 70) {
    return 'C';
  } else if (score > 65) {
    return 'D';
  } else {
    return 'E';
  }
}

for (let grade = 60; grade < 101; grade++) {
  const gradeLooping = `for scoring ${grade} points, you get a ${assignGrade(
    grade
  )}`;
  console.log(gradeLooping);
}

// FOR ... OF loop

const subreddits = ['cringe', 'books', 'chickens', 'cake', 'pics', 'soccer'];

for (let sub of subreddits) {
  const love = 'I love';
  // sub variable can be named anything.
  console.log(`${love} ${sub}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
  console.log(num * num);
}




// =============
// NIELS BLOM: ARRAY & LOOPS
// =============


const countries = ["The Netherlands", "India", "Mali", "Colombia"]

// ADD ITEM TO ARRAY - AT THE END
// push() functie en je geeft een parameter mee, van geef cuba mee aan de array countries
countries.push("Cuba"); 


// ITEM LEZEN uit een array : arrayname[index], arrayname[variable]
const index = 1; 
console.log(countries[index]) // india ..je kan dus ook variabelen gebruiken
console.log(countries[2]);


// UPDATEN VAN EEN ARRAY 
countries[1] = 'Republic of India'; // index 1 vervang je met dit
console.log(countries);


// DELETE SOMETHING FROM THE END - POP
// pop()
countries.pop();

console.log(countries);



// FOR LOOP

// initializatie // conditie // 
  for (let i = 0; i <= 5; i++) { // i = i + 1
    console.log(`I'm in the loop where i == ${i}`);
    console.log('*****************')
  }
  
  for (let i = 0; i <= 5; i += 2) { 
    console.log(`I'm in the loop where i == ${i}`);
  }

// WHILE LOOP - heeft enkel een conditie
let j = 0;

while (j < 5) {
  console.log(`I'm in the loop where j == ${j} `)
  j++;
  // j = math.round(Math.random() * 50) --> dit kan ook maar doe je eigenlijk bijna niet

} 
  

let temperature = 10; 

while (temperature < 100) {
  console.log("We keep boiling the water");
  const degreesToAdd = Math.round(Math.random() * 20);
  temperature += degreesToAdd;
  console.log(` The current temperature = ${temperature}`);
}

console.log(`The water is at or above the boiler point(${temperature})`)

// forEach

const foodie = ["sugarcotton", "cookies", "pizza", "lollipops"]; 
foodie.forEach(foodies => console.log(foodies)); // voor elk item in deze array wil ik dat je dit doet


for (let i = 0; i < foodie.length; i++) {
  console.log(i)
  console.log(`The food is: ${foodie[i]}`)
}


// for ... of
for (let foodies of foodie) { // elke keer uit deze iterable object pakken, in dit geval is het een array.
  // we willen elke keer een variabele aanmaken met de naam foodies.
  console.log(`${foodies} is delicious`);
}


// met for .. of kun je itereren over een string. output is elke letter en dus ook de spatie ertussen
const studentName = 'Jean-Paul Sartre'
for (let character of studentName) {
  console.log(character);
}


//LOOPING (ITERATING) OVER OBJECT ATTRIBUTES (key-value pairs)
//Object keys kun je gemakkelijk de objecten uit een object halen en lezen.

const student = {
  firstName :"Jean Paul",
  lastName :"Satre",
  education : "philosophy",
};

console.log(Object.keys(student)); // geef mij alle keys van de Object student

console.log(Object.values(student)); // output value van de keys

console.log(Object.entries(student)); // output is een array van arrays

for (let key of Object.keys(student)) {
  console.log(`A key : ${key}`)
}

for (let key of Object.values(student)) {
  console.log(`A value: ${key}`)
}

for (let [key, value] of Object.entries(student)) {
  console.log(`The key: ${key}. The value: ${value}`)
}