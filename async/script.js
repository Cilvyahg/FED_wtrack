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

prom.then(function (response) {
  // you get a response object back when you put json() behind it it returns a promise so you can chain the then() method to it
  return response.json().then((data) => {
    log(data) // getting an object back .. it's the whole json data you get back
    log(data.results); // how to access the results object within the object of data
    for (let name of data.results) {
      log(name.name)
    }


  });
})

