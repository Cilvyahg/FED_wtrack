'use strict';

// OLD STYLE LOOPS

//while loop : it will run while this condition is true;

let colors = [
  'Yellow',
  'blue',
  'Red',
  'orange',
  'pink',
  'Black',
  'green',
  'purple',
];

let indexColor = 0;

while (indexColor <= colors.length - 1) {
  console.log(`While loop: ${colors[indexColor]}`);
  indexColor++;
}

// for loop

for (let i = 0; i <= colors.length - 1; i++) {
  // console.log([i]);
  console.log(colors[i]);
}

// doe length -1 (wanneer je <= doet, als je < doet dan pakt tie sws al een getal lager) want er de array heeft een lengte van 8 (0 1 2 3 4 5 6 7) maar index 0 t/m 7
// als je de lengte pakt pak je eigenlijk de lengte van de array en dat is 8 dus vandaar - 1 om 7 te krijgen
// want index 8 is undefined in dit geval oftewel niet gedefineerd.

// using the for ... of loop you don't need to write array.length.
for (let color of colors) {
  console.log(color);
}

// ======================
// NEW STYLE: ARRAY METHODS
// ======================

//forEach is an Array method.

colors.forEach(function (element, index) {
  if (element === 'blue') {
    element = element.toUpperCase();
  } else {
    element = element.toLowerCase();
  }
  console.log(element, index);
});

colors.forEach((element, index) => {
  if (element === 'blue') {
    element = element.toUpperCase();
  } else {
    element = element.toLowerCase();
  }
  console.log(element, index);
});

// without inline call back function

colors.forEach((element, index) => console.log(element, index));

// QUESTIONS ANSWERING

// 1. my for and while loop takes more lines min 3.
// 2. it takes one line
// i find the for loop easier to read but maybe its because the arrow function
// sets me off a bit.

const summervibes = {
  degrees: 45,
  drink: 'Sex on the beach',
  travel: 'Spain',
  lover: false,
  purchases: ['sunglasses', 'suncream', 'hat', 'icelollies'],
  activity: 'Go to the beack',

  sayName: function () {
    console.log(this.lover);
  },
};

summervibes.sayName();

console.log(summervibes.purchases);

function bananas() {
  console.log(`I'm a banana`);
}
console.log(bananas);

// THIS - we get a list of everything that we can do in js. before our code even runs. this keyword and window get created before. the code will be set in memory.
// IF WE DO this its gonna refer to the window.
console.log(this);

// =====================
// LOOPING OVER OBJECTS
// =====================

const springvibes = {
  degrees: 45,
  drink: 'Sex on the beach',
  travel: 'Spain',
  lover: false,
  purchases: ['sunglasses', 'suncream', 'hat', 'icelollies'],
  activity: 'Go to the beach',
};

for (let springItems in springvibes) {
  console.log(springvibes[springItems]);
}
