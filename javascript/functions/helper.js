// const data = require('./songs.json');

// console.log(data.slice(0, 5));
// console.log(data.slice(0, 5).map((s) => s.title)); // 0 - 5 title

// // de eerste 5 nummers

// const getFirstFive = (list) => list.slice(0, 5);
// console.log(getFirstFive(data));

//filter

// const findByDuration = (songs, duration) =>
//   songs.filter((s) => s.duration === duration);

// console.log(getFirst5(findByDuration(data, '166')));

// Higher order array functions & arrays methods

//forEach

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Auto', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Finance', start: 1980, end: 1989 },
  { name: 'Company Four', category: 'Retail', start: 2001, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 1910, end: 2014 },
  { name: 'Company Six', category: 'Auto', start: 1989, end: 2003 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];


// standard for loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//forEach // getting the same as above for loop but with less code. 
//The forEach() method executes a provided function once for each array element.//

companies.forEach(function (company, index) {
  console.log(company.name, index);
});




/* =============
AGES Array
============= */

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// with NO filted() method. but with the for loop instead.

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);


/* ===============
FILTER
===============
 */

//syntax filter() : array.filter(function(currentValue, index, arr), thisValue)
//The filter() method creates a new array filled with elements that pass a test provided by a function.

const canDrinkFilter = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

console.log(canDrinkFilter);

// same as above but with arrow function instead of function and the return statement is implicitely declared

const canDrinkFilterArrow = ages.filter(age => age >= 21); 

console.log(canDrinkFilterArrow); 


// filter() retail companies

const retailCompanies = companies.filter(function (company, index) {
  if(company.category === 'Retail') {
    return true;
  }
   if (company.name === 'Company Two' || company.name === 'Company Eight') {
     return true;
   }
});

console.log(retailCompanies); // the filter creates a new array

// the filter() in arrow functions

const retailCompaniesArrow = companies.filter(company => company.category === 'Retail');
console.log(retailCompaniesArrow);

// Get 80's companies

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.end <= 1990);
console.log(eightiesCompanies)


// GET companies that lasted at least 10 years or more 

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log(lastedTenYears);

/* ===========
MAP
=========== */

// Creat array of company names

const companyNames = companies.map(function (company) {
  return company.name
  
});

console.log(companyNames)

const test1 = companies.map(function (company) {
  return 1;
  
});

console.log(test1)

const test2 = companies.map(function (company) {
  return "hello";
  
});

console.log(test2)

const testMap = companies.map(function (company) {
  return `${company.name} : [${company.start} - ${company.end}]`
});

console.log(testMap)

// in arrow functions and same output is same as above 

const testMapArrow = companies.map(company => 
   `${company.name} : [${company.start} - ${company.end}]`);

console.log(testMapArrow);


// squared
const agesSqrt = ages.map(age => Math.sqrt(age));
console.log(agesSqrt);

// multiplication
const ageMultiplication = ages.map(age => age * 3);
console.log(ageMultiplication);


/* ==========
Sort()
==========
 */


const sortedCompanes = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanes);

const sortedCompaniesArrow = companies.sort((a, b) => a.start > b.start ? 1 : -1);

//Sort Ages

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// reduce
// all the arrays have the reduce() method, it takes a CallBackFunction
//to boil down all the elements in the array to one value. all the elements together.
// the first parameter is actually the accumulator, this differs from map(), filter(), sort()
// reduce also loops over an array 

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movement);

const balance = movement.reduce(function (accumulator, currentValue, index) {
console.log(` iteration ${index} : ${accumulator}`)
  return accumulator + currentValue; 
  
}, 0); // we want to start counting at 0. you can also put another no e.g. 100; 

console.log(balance);

/* output balance
 iteration 0 : 0  - starts at 0, as we defined.
 iteration 1 : 200
 iteration 2 : 650
 iteration 3 : 250
 iteration 4 : 3250
 iteration 5 : 2600
 iteration 6 : 2470
 iteration 7 : 2540
3840 */


/* =================================
same result with using for... of but with reduce it's easier 
================================= */

let balance2 = 0; // with the for .. of loop you always need an External variable, with the reduce() you don't need that

for (mov of movement) balance2 += mov; 
console.log(balance2);

// output also 3840

