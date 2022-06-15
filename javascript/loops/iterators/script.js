'use strict';

// OLD STYLE LOOPS

//while loop : it will run while this condition is true;

let colors = [
  'yellow',
  'blue',
  'red',
  'orange',
  'pink',
  'black',
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

colors.forEach(function (element, index) {
  if (element === 'blue') {
    element = element.toUpperCase();
  } else {
    element = element.toLowerCase();
  }
  console.log(element, index);
});

colors.forEach((element, index) => console.log(element, index));
