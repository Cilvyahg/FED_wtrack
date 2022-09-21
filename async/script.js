'use strict';
const log = console.log;

// log('Hey hello, I am the first.');

// setTimeout(function () {
// log(`Hey hello, I am the second`);
// }, 2000);

// log('Hey hello, I am the third.');

// const BASE_URL = 'https://cat-fact.herokuapp.com/';

// const get_random_cat_fact = async () => {
//   // async functie geeft een Promise functie terug.
//   const result = await fetch(`${BASE_URL}facts/random`);
//   log(result); // fetch has the standard method of GET
//   const json = await result.json();
//   log(json);
//   return json.text;
//   // return json.text;
// };

// log(get_random_cat_fact());

// PROMISES -- PENDING, RESOLVED, REJECTED
//.then() , .catch() -- pass another callback

// const promises = new Promise(function (resolve, reject) {
//   let value = false;
//   if (value) {
//     resolve('Hi the promise is resolved');
//   } else {
//     const a = 'there was an error';
//     reject(a);
//   }
// });

// promises
//   .then(function (succesful) {
//     return succesful;
//   })
//   .catch(function (error1) {
//     log(`${error1}`);
//   });

// log(promises);

// ========== ASYNC JS =========
// setTimeOut(function, time) is not a web API thing and not a JS thing

// boilWater(1000); // this means minimum time ...

// for (let i = 0; i < 50; i++) {
//   log('still busy');
// }

// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');
// log('2 chop carrots');

// log('I happen first');

// function boilWater(time) {
//   log('1 boiling....');
//   setTimeout(() => {
//     // gives the callback function to the web api and the browser takes the callback function.
//     log('3 done....');
//   }, time);
// }

// setTimeout(function () {
//   log('I happen third');
// }, 1000);

// log('I happen second');

// debugger;

// const posts = [
//   { title: 'Post one', body: 'This is post one' },
//   { title: 'Post two', body: 'This is post two' },
// ];

// function getPosts() {
//   setTimeout(function () {
//     let output = ''; // output has no value

//     posts.forEach(function (post, index, array) {
//       output += `<li>${post.body}</li>`;
//       log(output);
//       log(array);
//       document.body.innerHTML = output;
//     });
//   }, 1000);
// }

// // log(getPosts)
// // getPosts();

// const createPost = function (array, object, callback) {
//   log(object);
//   log(callback);
//   setTimeout(function () {
//     array.push(object);
//     callback();
//   }, 2000);
// };

// createPost(posts, { title: 'Post three', body: 'This is post three', footer: 'yo' }, getPosts);

// ===== EXERCISE : CALLBACKS =====
// the callback parameter is a function in this case because it's a callback function

const makeHomeWork = (course, callback) => {
  setTimeout(function () {
    log(`Okay I am going to do my ${course} homework now`);
    callback();
  }, 1000); // given to the browser and put it on the callstack after 1 sec.
};

const doneWithHomework = function () {
  log(`Look mom and dad i'm done with home work`);
};

makeHomeWork('chemistry', doneWithHomework);

const makeHomeWorkSeperated = (course, callback) => {
  log(`Okay I am going to do my ${course} homework now`);
  callback();
  // given to the browser and put it on the callstack after 1 sec.
};

const timeOut = setTimeout(
  makeHomeWorkSeperated,
  5000,
  'math',
  doneWithHomework
);
log(timeOut); // output an ID.

clearTimeout(2); // u can put in id
setTimeout(timeOut); // u can put in the variable with the value of the setTimeOutID

// it's a reference to the function and don't invoke the function

//You can't get a return value from the function you pass to setTimeout .
// The function that called setTimeout(x in your example) will finish executing and return before the function you pass to setTimeout is even called.

// ===== PROMISES =====

// const posts = [
//   { title: 'Post one', body: 'This is post one' },
//   { title: 'Post two', body: 'This is post two' },
// ];

// function getPosts() {
//   setTimeout(function () {
//     let output = ''; // output has no value

//     posts.forEach(function (post, index, array) {
//       output += `<li>${post.body}</li>`;
//       log(output);
//       log(array);
//       document.body.innerHTML = output;
//     });
//   }, 1000);
// }

// // log(getPosts)
// // getPosts();

// const createPost = function (array, post) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       array.push(post);

//       const error = false;

//       if (!error) {
//         log(!error);
//         resolve();
//       } else {
//         reject('Error: something went wrong');
//       }
//     }, 2000);
//   });
// };

// createPost(posts, { title: 'post three', body: 'this is post 3' })
//   .then(getPosts)
//   .catch(function (error) {
//     log(error);
//   });

/// Promise.all()
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise(function (resolve) {
  setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (result) => {
    return result.json();
  }
);

log(promise4);

Promise.all([promise1, promise2, promise3, promise4]).then(function (values) {
  log(values);
});

// ==== FETCH =====

const prom = fetch('https://swapi.dev/api/planets/');

prom
  .then(function (response) {
    log(response);
    // you get a response object back when you put json() behind it it returns a promise so you can chain the then() method to it
    response.json().then((data) => {
      log(data); // getting an object back .. it's the whole json data you get back
      log(data.results); // how to access the results object within the object of data
      for (let name of data.results) {
        log(name.name);
      }
    });
  })
  .catch((error) => {
    log('something went wrong with fetch', error);
  });

// SINCE CATCH BLOCK WON'T BE EXECUTED EVEN IT THE REQUEST IS REJECTED YOU CAN DO AN IF STATEMENT LIKE BELOW
const promWithIf = fetch('https://swapi.dev/api/plants/'); // made a mistake in the url on purpose

promWithIf
  .then(function (response) {
    if (!response.ok) {
      log(response);
      throw new Error(`STATUS CODE ERROR ${response.status}`); // when we throw an error it will be given to the error in the catch block
    } else {
      response.json().then((data) => {
        log(data);
        log(data.results);
        for (let name of data.results) {
          log(name.name);
        }
      });
    }
  })
  .catch((error) => {
    log('something went wrong with fetch');
    log(error);
  });

/* === PROMISE HAS TWO PARAMETERS REJECT, RESOLVE. THESE TWO ARE ALSO FUNCTIONS ==== */

// willgetyoucat returns a promise
const willGetYouACat = () => {
  return new Promise((resolve, reject) => {
    // return a function
    setTimeout(function () {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve(); // we call resolve() as a function
      } else {
        reject(' no cat for you'); // we call reject() as a function
      }
    }, 3000);
  });
};

// .then() and .catch() method will run whenever a promise is resolved or rejected

willGetYouACat() // we are executing a function that returns a promise. the function itself is not a promise.
  .then(() => {
    log('yea i got a cat');
  })
  .catch((rejected) => {
    log(rejected);
  });

/* ===== ASYNC Functions ===== */

const add = async function (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be numbers'; // throw an error // same as reject() in a Promise. the value that the promise will be reject with.
  }
  return x + y; // resolve(x + y) if it was a new promise . the value the promise will be resolved with
};

add('e', 4)
  .then(function (value) {
    log('PROMISE RESOLVED WITH:', value);
  })
  .catch(function (value) {
    log('PROMISE RESOLVED WITH:', value);
  });

const getPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planjjjets/');
  const data = await res.json();
  log(typeof data, res);
  log('this is the data in json', res);
  log(data);
  log(data.results[3]);
};

getPlanets().catch(function (error) {
  log('IN CATCHHHHHHHHH', error);
}); // BUT YOU CAN ALSO USE A TRY AND CATCH BLOCKCODE IN THE ASYNC FUNCTION.



/* USING TRY AND CATCH BLOCK IN ASYNC AWAIT */

const getPlanetsTryCatch = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    log('this is the data in json', res);
    console.table(data.results);
  } catch (error) {
    log('this is an error', error);
  }
};

getPlanetsTryCatch();
