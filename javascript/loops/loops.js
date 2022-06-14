'use strict';

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

for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
  }
}
