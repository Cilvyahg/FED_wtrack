'use strict';
const log = console.log;

/*   ==== PROMISES ===== 
PROMISES ARE OBJECTS   */

// const willGetYouADog = new Promise(function (resolve, reject) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     log(rand);
//     resolve();
//   } else {
//     log(rand);
//     reject();
//   }
// });

// // THIS CODE WILL AUTOMATICALLY RUN IF THE PROMISE IS RESOLVED
// willGetYouADog.then(() => {
//   log('Yay we got a dog'.toUpperCase());
// });

// // THIS CODE WILL AUTOMATICALLY RUN IF THE PROMISE IS REJECTED
// willGetYouADog.catch(() => {
//   log('no dog for you :('.toUpperCase());
// });
// // THE PROMISE WILL BE ON STATUS 'PENDING' WHEN ITS NOT RESOLVED OR REJECTED

// log(willGetYouADog); // returns a promise

// const willGetYouADogTimeOut = function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         log(rand);
//         resolve();
//       } else {
//         log(rand);
//         reject();
//       }
//     }, 10000);
//   });
// };

// const d = willGetYouADogTimeOut();
// log(d);

// d.then(() => {
//   log('the time was set to 5 seconds; YES A DOG'.toUpperCase());
// });

// d.catch(() => {
//   log('the time was set to 5 seconds; NO DOG.'.toUpperCase());
// });

// // we are executing a function that returns a promise.

// /* ==================================== */

// const santaIsGenerous = false;

// // Make a promise (so you don't have to learn this, this is on the API (back-end) side)
// const willIGetANewIphone = new Promise((resolve, reject) => {
//   if (santaIsGenerous) {
//     const smartphone = {
//       brand: 'Apple',
//       type: 'iPhone 11',
//     };
//     resolve(smartphone);
//   } else {
//     const withWhatReason = new Error("You've been naughty, no gifts for you");
//     reject(withWhatReason);
//   }
// });

// // Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
// const askSanta = () => {
//   willIGetANewIphone
//     .then(function (resolved) {
//       // yay, you got a new Iphone
//       console.log(resolved);
//     })
//     .catch(function (error) {
//       // whoops, no present from Santa this year...
//       console.log(error.message);
//     });
// };

// askSanta();

// log(willIGetANewIphone);

// /*
// Exercise 1:
// Write a function testNum that takes a number as an argument and returns a
//  Promise that tests if the value is less than or greater than the value 10.
//  Log the result to the console.
// */
// // debugger;

// const testNum = function (num) {
//   return new Promise(function (resolve, reject) {
//     // AAN Q::: WAT RETURN JE HIER???
//     if (num <= 10) {
//       resolve(`the ${num} is less or equal than 10`);
//     } else {
//       reject(`the ${num} is bigger than 10`);
//     }
//   });
// };

// testNum(100) // AAN Q:: HOEZO INVOKEN???? hier
//   .then(function (value) {
//     log(value);
//   })
//   .catch(function (error) {
//     log(error);
//   });

// // prom1 is a Promise

// const prom1 = testNum(100); // prom1 type of promise
// log(`${prom1}`, prom1);
// log(
//   prom1
//     .then((result) => {
//       log(result);
//     })
//     .catch((error) => {
//       log(error);
//     })
// );

/*
Exercise 2:
Write two functions that use Promises that you can chain!

The first function,
makeAllCaps(), will take in an array of words and capitalize them, and then the second function,
sortWords(), will sort the words in alphabetical order.

If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

// const makeAllCaps = function (array) {

//   const newArray = array.map(function (element) {
//     return element.toUpperCase();
//   });

//   return new Promise((resolve, reject) => {

//     if (typeof newArray === 'string') {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

//  makeAllCaps().then()

// log(makeAllCaps(arrayOfWords));

// new Promise().then((array) => sprteren).then(makeAllCaps).catch((error_)=> BEVAT IETS ANDERS DAN STRINGS)

// const sortWords = function (array) {
//   return array.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//   });
// };

const getal = 10;
new Promise((res, rej) => {
  if (!isNaN(getal)) {
    res(getal);
  } else rej('geen getal');
})
  .then((getal) => getal * 2)
  .then((getal) => getal - 2)
  .then((getal) => log(getal))
  .catch((msg) => log(msg));

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

// const complicatedArray = ['cucumber', 44, true];

// const makeAllCaps = function (array) {
//   return array.map(function (element) {
//     return element.toUpperCase();
//   });
// };

// const sortAlphabeticOrder = function (array) {
//   return array.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//   });
// };

log;

// const sortAlphabeticOrder = function (array) {
//   return array.sort();
// };

// const arrayIsNoString = (array) => {
//   return new Promise((resolve, reject) => {
//     if (
//       array.every(function (element) {
//         return typeof element === 'string';
//       })
//     ) {
//       resolve(array);
//     } else {
//       reject('THIS IS AN ERROR');
//     }
//   })
//     .then(function (array) {
//       return makeAllCaps(array);
//     })
//     .then(function (array) {
//       return sortAlphabeticOrder(array);
//     })
//     .catch(function (value) {
//       return value;
//     });
// };

// // the values van de promises staan nog op pending omdat
// let test1 = arrayIsNoString(arrayOfWords); //
// log(test1);
// let test2 = arrayIsNoString(complicatedArray);
// log(test2);

// arrayIsNoString(arrayOfWords).then(console.log); //
// arrayIsNoString(complicatedArray).then(console.log); //

// // EVERY() AND SOME() also returns a boolean
// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// const someStartsWithD = words.some((word) => word[0] === 'd');
// log(someStartsWithD); // true because at least one word starts with d. so it will return true

// const everyStartsWithD = words.every((word) => word[0] === 'd');
// log(everyStartsWithD); // false because not every word starts with d

// const allEndingG = words.every(function (word) {
//   // const lastLetter = word.length - 1;
//   return word[word.length - 1] === 'g';
// });

// log(allEndingG); // true because all of the word ends with G.

// // FAKEREQUEST

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Boba' },
//           { id: 5, username: 'Esmee' },
//         ],
//         '/about': ' This is the about page',
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data: data });
//       } else {
//         reject({ status: 404 });
//       }
//     });
//   }, 1000)
//     .then(function (response) {
//       log(`Status code::`, response.status);
//       log(`Status data::`, response.data);
//       log('request worked');
//     })
//     .catch(function (result) {
//       log('request failed!'.toUpperCase());
//       log(result.status);
//     });
// };

// fakeRequest('/users');
// fakeRequest('/about');
// fakeRequest('/doggs');

// // .then .catch are callback functions

// // template strings

// let myName = 'Cilvya';

// let template = `<div class="alert">
// <p>${myName}</p>
// </div>`;

// log(template);

// const sum = function (a, b, ...numbers) {
//   log(`${a}${b}`);
//   log(numbers);
//   return numbers.reduce(function (total, currentvalue) {
//     return total + currentvalue;
//   });
// };

// log(sum(1, 2, 3, 4, 6, 7));

// const a = [2, 43, 5, 6, 6, 7, 7];

// const sum1 = [2, 6];

// const arraysum = [...a, [sum1]];

// log(arraysum);

// // alles moet een string zijn

// // every
// // a, 1, c
// // a is string? true;
// // 1 is string? false;
// // false;

// // some
// // a, 1, c
// // a is geen string? false;
// // 1 is geen string? true;
// // true;

// if (['a', 'b', 1].every((element) => typeof element === 'string')) {
//   log('strings');
// } else {
//   log('iets anders');
// }

// if (['a', 'b', 1].some((element) => typeof element !== 'string')) {
//   log('iets anders');
// } else {
//   log('strings');
// }

// // REST

// const restTest = function (foo, ...nums) {
//   return `${foo} ${nums}`;
// };

// log(restTest('hello', 1, 6, 7, 9, 6, 34));

// const fullName = function (first, last, ...titles) {
//   log(`first`, first);
//   log(`last`, last);
//   return `titles, ${titles}`; // this will turn into an array
// };

// log(fullName('thommy', 'hollow', 'the book thief', 'yoyoyoy'));

// log({ ...'hahahaha' });

// log(Math.max(4, 6, 7, 21, 7, 8, 4, 32, 57, 876, 543));

// function giveMeFour(a, b, c, d) {
//   log(a);
//   log(b);
//   log(c);
//   log(d);

//   // return `${a} ${b} ${c} ${d}`
//   return a + ' ' + b + ' ' + c + ' ' + d;
// }

// const colours = ['red', 'orange', 'yellow', 'pink'];

// log(giveMeFour(...colours));

// // ===== EXERCISE : REST PARAMETER AND SPREAD OPERATOR ====

// const multiply = function (...numbers) {
//   return numbers.reduce(function (total, currentvalue) {
//     return total + currentvalue;
//   });
// };

// log(multiply(4, 6, 7, 1, 3, 5));

// const multiplySecond = function (...numbers) {
//   let start = 0;

//   for (let number of numbers) {
//     log(start, number);
//     start = start + number;
//   }

//   return start;
// };

// log(multiplySecond(1, 2, 4, 5, 10, 450));

// // PART 2
// const arrayToIndividual = [3, 5, 8, 4, 2, 8, 9, 10];

// const multiplySpread = function (a, b, c, d, e, f, g, h) {
//   return [a, b, c, d, e, f, g, h].reduce(function (total, currentvalue) {
//     return total + currentvalue;
//   });
// };

// log(multiplySpread(...arrayToIndividual));

// //OR

// // ...spread array in individual elements in combinatie met de ..rest in the parameter

// const multiplySpreadRest = function (numbers) {
//   return numbers.reduce(function (total, currentvalue) {
//     log(total, currentvalue);
//     return total + currentvalue;
//   });
// };

// log(multiplySpreadRest(arrayToIndividual));

// const digits = [1, 2, 3];
// const sum3 = function (num1, num2, num3) {
//   return num1 + num2 + num3;
// };
// console.log(sum3(...digits));
// // expected result: 6

// // ============ fetch() ==========

fetch('https://swapi.dev/api/people/1') // RETURNS A PROMISE if you look into the console.
  .then(function (response) {
    log(`RESPONSE`, response);
    return response.json(); // getting parsed data
  })
  .then((data) => log(data))
  .catch((err) => {
    log(`ERROR`, err);
  });

// json() also gives back a response

// async await
const loadStarWarsPeople = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();
    log(data);
    const response2 = await fetch('https://swapi.dev/api/people/2');
    const data2 = await response2.json(); // als je niet await doet krijg je enkel een promise terug
    log(data2);
  } catch (error) {
    log('error!!!!!!!!', error);
  }
};

loadStarWarsPeople();

// let obj = {
//   a: 'lettra',
//   b: 'latterB',
// };

// log(obj);

// log(obj['a']);

// // ====== ASYNC ======
// // an async function returns a promise (implicitely)

// async function hello() {
//   return `I am a promise`;
// }

// log(hello());

// const sing = async () => {
//   throw new Error('OH NO BIG PROBLEM'); // promise is rejected --> see console
//   // return 'LALALALApOEP'; // promise is resolved
// };

// sing()
//   .then((data) => {
//     log(data);
//   })
//   .catch((err) => log(`REJECTED:: because`, err));

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw 'missing credentials';
//   }
//   if (password === 'corgifeetarecute') {
//     return 'Welcome you have the best password!';
//   }
//   throw 'Invalid password';
// };

// login('yammyy', 'lalalalallaal')
//   .then((msg) => {
//     log(msg);
//   })
//   .catch((err) => {
//     log(`this is an error`, err);
//   });

// login('thisisiti', 'corgifeetarecute')
//   .then((msg) => {
//     log(msg);
//   })
//   .catch((err) => {
//     log(`this is an error`, err);
//   });

// ====== AWAIT =======

function main() {
  log('staring');
  log(foo(2, 3));
  log('the end');
}

function foo(a, b) {
  let c = a + b;
  return c;
}

main();

try {
  //throw {name: "john", message: "Salmon"};
  throw new Error('A stick');
} catch (err) {
  // catch parameter catches the error.
  log('caught ::', err);
} finally {
  // the finally statement will run no matter if it has an error or not
  log(' you took forever');
}



// ====== JSON.stringify() ========

let obj1 = {
  name: "walter",
  age: 45,
  place: "York",
  Country: "England",
  Hobbies: ["soccers", "gardening", "gaming"]
};

log(obj1)


const objectToString1 = JSON.stringify(obj1)
log('1:', objectToString1)
const objectToString2 = JSON.stringify(obj1, ['age', 'place']) // if you want to filter it to age, place. it has to be put into quotations
log('2 with parameter :', objectToString2)


// ===== LIVE LES JS FETCH - NIELS =====

const fetchPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();
  log(json);
};

const createPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: 'My post',
      body: 'this is a new post',
    }),
  });

  const json = await response.json();
  log(json);
};

document.querySelector('.fetch').addEventListener('click', fetchPost);
document.querySelector('.post').addEventListener('click', createPost);

