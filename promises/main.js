'use strict';
const log = console.log;

// ==== PROMISES =====

const willGetYouADog = new Promise(function (resolve, reject) {
  const rand = Math.random();
  if (rand < 0.5) {
    log(rand);
    resolve();
  } else {
    log(rand);
    reject();
  }
});

willGetYouADog.then(() => {
  log('Yay we got a dog'.toUpperCase());
});

willGetYouADog.catch(() => {
  log('no dog for you.'.toUpperCase());
});

log(willGetYouADog); // returns a promise





// ====================================

const santaIsGenerous = false;

// Make a promise (so you don't have to learn this, this is on the API (back-end) side)
const willIGetANewIphone = new Promise((resolve, reject) => {
  if (santaIsGenerous) {
    const smartphone = {
      brand: 'Apple',
      type: 'iPhone 11',
    };
    resolve(smartphone);
  } else {
    const withWhatReason = new Error("You've been naughty, no gifts for you");
    reject(withWhatReason);
  }
});

// Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
const askSanta = () => {
  willIGetANewIphone
    .then(function (resolved) {
      // yay, you got a new Iphone
      console.log(resolved);
    })
    .catch(function (error) {
      // whoops, no present from Santa this year...
      console.log(error.message);
    });
};

askSanta();

log(willIGetANewIphone);

/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a
 Promise that tests if the value is less than or greater than the value 10. 
 Log the result to the console.
*/
// debugger;

const testNum = function (num) {
  return new Promise(function (resolve, reject) {
    // AAN Q::: WAT RETURN JE HIER???
    if (num <= 10) {
      resolve(`the ${num} is less or equal than 10`);
    } else {
      reject(`the ${num} is bigger than 10`);
    }
  });
};

testNum(100) // AAN Q:: HOEZO INVOKEN???? hier
  .then(function (value) {
    log(value);
  })
  .catch(function (error) {
    log(error);
  });

log(testNum);

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, 
makeAllCaps(), will take in an array of words and capitalize them, and then the second function, 
sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/
