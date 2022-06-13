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
