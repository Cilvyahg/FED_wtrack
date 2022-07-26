'use strict';

// ++++++++++++++++++++++++
//   PART 1
// ++++++++++++++++++++++++

// A. A Write a JavaScript function to add the word "cool" to an array of strings. Use the .push method.

const addTheWordCool = function (array) {
  array.push("cool")
  return array
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));
// result: ["nice", "awesome", "amazing", "cool"]






// B. Write a JavaScript function that returns the number of elements in an array.

function amountOfElementsInArray(index) {
  index = index.length
  return index

  // OR put it in a variable
  // const totalElements = index.length;
  // return totalElements
  
}

console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); 
// 3


// C. Write a JavaScript function that returns the first element of an array. PS: At which number does an array start counting again?

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 
// result: "Belgium" 
