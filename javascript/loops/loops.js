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
  console.log(`lifting weights repetition ${rep}`);
}
