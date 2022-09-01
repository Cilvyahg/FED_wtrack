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

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = function (array) {
  return array.map(function (element) {
    return element.toUpperCase();
  });
};

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

const sortAlphabeticOrder = function (array) {
  return array.sort();
};

const arrayIsNoString = (array) => {
  return new Promise((resolve, reject) => {
    if (
      array.every(function (element) {
        return typeof element === 'string';
      })
    ) {
      resolve(array);
    } else {
      reject('THIS IS AN ERROR');
    }
  })
    .then(function (array) {
      return makeAllCaps(array);
    })
    .then(function (array) {
      return sortAlphabeticOrder(array);
    })
    .catch(function (value) {
      return value;
    });
};

// the values van de promises staan nog op pending omdat
let test1 = arrayIsNoString(arrayOfWords); //
log(test1);
let test2 = arrayIsNoString(complicatedArray);
log(test2);

arrayIsNoString(arrayOfWords).then(console.log); //
arrayIsNoString(complicatedArray).then(console.log); //

// EVERY() AND SOME() also returns a boolean
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const someStartsWithD = words.some((word) => word[0] === 'd');
log(someStartsWithD); // true because at least one word starts with d. so it will return true

const everyStartsWithD = words.every((word) => word[0] === 'd');
log(everyStartsWithD); // false because not every word starts with d

const allEndingG = words.every(function (word) {
  // const lastLetter = word.length - 1;
  return word[word.length - 1] === 'g';
});

log(allEndingG); // true because all of the word ends with G.

// FAKEREQUEST

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const pages = {
        '/users': [
          { id: 1, username: 'Boba' },
          { id: 5, username: 'Esmee' },
        ],
        '/about': ' This is the about page',
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data: data });
      } else {
        reject({ status: 404 });
      }
    });
  }, 1000)
    .then(function (response) {
      log(`Status code::`, response.status);
      log(`Status data::`, response.data);
      log('request worked');
    })
    .catch(function (result) {
      log('request failed!'.toUpperCase());
      log(result.status);
    });
};

fakeRequest('/users');
fakeRequest('/about');
fakeRequest('/doggs');

// .then .catch are callback functions

// template strings

let myName = 'Cilvya';

let template = `<div class="alert">
<p>${myName}</p>
</div>`;

log(template);

const sum = function (a, b, ...numbers) {
  log(`${a}${b}`);
  log(numbers);
  return numbers.reduce(function (total, currentvalue) {
    return total + currentvalue;
  });
};

log(sum(1, 2, 3, 4, 6, 7));

const a = [2, 43, 5, 6, 6, 7, 7];

const sum1 = [2, 6];

const arraysum = [...a, [sum1]];

log(arraysum);

// alles moet een string zijn

// every
// a, 1, c
// a is string? true;
// 1 is string? false;
// false;

// some
// a, 1, c
// a is geen string? false;
// 1 is geen string? true;
// true;

if (['a', 'b', 1].every((element) => typeof element === 'string')) {
  log('strings');
} else {
  log('iets anders');
}

if (['a', 'b', 1].some((element) => typeof element !== 'string')) {
  log('iets anders');
} else {
  log('strings');
}

// REST

const restTest = function (foo, ...nums) {
  return `${foo} ${nums}`;
};

log(restTest('hello', 1, 6, 7, 9, 6, 34));

const fullName = function (first, last, ...titles) {
  log(`first`, first);
  log(`last`, last);
  return `titles, ${titles}`; // this will turn into an array
};

log(fullName('thommy', 'hollow', 'the book thief', 'yoyoyoy'));

log({ ...'hahahaha' });


log(Math.max(4,6,7,21,7,8,4,32,57,876,543))

function giveMeFour(a, b, c, d) {
  log(a)
  log(b)
  log(c)
  log(d)

  // return `${a} ${b} ${c} ${d}`
  return a + " " + b + " " + c + " " + d

}

const colours = ['red', 'orange', 'yellow', 'pink']

log(giveMeFour(...colours))








// ===== EXERCISE : REST PARAMETER AND SPREAD OPERATOR ====

const multiply = function (...numbers) {
  return numbers.reduce(function (total, currentvalue) {
    return total + currentvalue;
  });
};

log(multiply(4, 6, 7, 1, 3, 5));

const multiplySecond = function (...numbers) {
  let start = 0;

  for (let number of numbers) {
    log(start, number);
    start = start + number;
  }

  return start;
};

log(multiplySecond(1, 2, 4, 5, 10, 450));



