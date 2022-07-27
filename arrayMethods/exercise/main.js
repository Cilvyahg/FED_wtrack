'use strict';

// ++++++++++++++++++++++++
//   PART 1
// ++++++++++++++++++++++++

// A. A Write a JavaScript function to add the word "cool" to an array of strings. Use the .push method.

const addTheWordCool = function (array) {
  array.push('cool');
  return array;
};

console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'amazing']));
// result: ["nice", "awesome", "amazing", "cool"]

// Alternate excercise A
const isArray = function (input) {
  return Array.isArray(input);
};

console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true
console.log(isArray([]));
console.log(isArray([{ name: 'Jane', age: 26 }]));
console.log(isArray(undefined));

// B. Write a JavaScript function that returns the number of elements in an array.

function amountOfElementsInArray(index) {
  index = index.length;
  return index;

  // OR put it in a variable
  // const totalElements = index.length;
  // return totalElements
}
console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); // 3

// C. Write a JavaScript function that returns the first element of an array. PS: At which number does an array start counting again?

function selectBelgiumFromBenelux(el) {
  return el[0];

  // return el.shift(); // shift() removes the first element from the array and returns that removed element. this method changes rthe length of the array
}

console.log(selectBelgiumFromBenelux(['Belgium', 'Netherlands', 'Luxembourg'])); // result: "Belgium"

//D. Write a JavaScript function to return the last element of an array.

function lastElementInArray(el) {
  // const lastPopped = el.pop();
  // return lastPopped;
  // OR
  // console.log(el.length - 1);
  // console.log(el);
  return el.pop();

  // OR
  // return el[el.length-1]
}

console.log(lastElementInArray(['Hare', 'Guinea pig', 'Chicken', 'Turtle']));
console.log(lastElementInArray(['yellow', 'red', 'blue', 'purple']));

// result: "Turtle"
//result: 'purple'

// E. Write a JavaScript function to extract the first element from an array and return the remainder.
// Use.slice and the alternative option.splice.What is the difference between these functions ? Hint : Mutability.

const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];

const impeachTrumpSlice = function (array) {
  // const slice = array.slice(1, array.length);
  const sliceWithoutLength = array.slice(1, 4);
  console.log(array);
  return sliceWithoutLength, array;
};

const impeachTrumpSplice = function (array) {
  const removedElement = array.splice(0, 1);
  console.log(removedElement);
  return removedElement, array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F. Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
//ps: the word join is a big tip on what array method you should use.

function stringsTogether(el) {
  const joinedElements = el.join(' ');
  return joinedElements;
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']));
//result: "Winc Academy is fun ;-}"

// G. Write a function that combines 2 arrays ['array 1'] ['array2'] into 1 array
//['array1', 'array2']

// with the spread operation...() method and the concat() method there will be a new array created. if you don't want to create a new array then and merge arrays together than you can use .push() method

function combineArrays(arr1, arr2) {
  const spreadOperation = [...arr1, ...arr2];
  return spreadOperation;

  // OR const mergeResult = arr1.concat(arr2);
  // return mergeResult

  // OR .push() method

  //   const pushArrays = arr1
  //   console.log(arr1)
  //   pushArrays.push(...arr2)
  //   return pushArrays;
}

// resultaat: [1,2,3,4,5,6]

function concatArrays(arr1, arr2) {
  const concat = arr1.concat(arr2);
  return concat;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(concatArrays(['hoi', 'hi', 'hello'], [5, 7, 4, 12]));

// =======================
// EXERCISE PART 2
// ========================

const greet = (name) => {
  const greeting = `Hey ${name}`;
  return  greeting;
};

console.log(greet('Hagrid'));
console.log(greet('Luna'));
