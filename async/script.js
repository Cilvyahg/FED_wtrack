'use strict';
const log = console.log;

// log('Hey hello, I am the first.');

// setTimeout(function () {
// log(`Hey hello, I am the second`);
// }, 2000);

// log('Hey hello, I am the third.');

const BASE_URL = 'https://cat-fact.herokuapp.com/';

const get_random_cat_fact = async () => {
  // async functie geeft een Promise functie terug.
  const result = await fetch(`${BASE_URL}facts/random`);
  log(result); // fetch has the standard method of GET
  const json = await result.json();
  log(json);
  return json.text;
  // return json.text;
};

log(get_random_cat_fact());

// PROMISES -- PENDING, RESOLVED, REJECTED
//.then() , .catch() -- pass another callback

const promises = new Promise(function (resolve, reject) {
  let value = false;
  if (value) {
    resolve('Hi the promise is resolved');
  } else {
    const a = 'there was an error';
    reject(a);
  }
});

promises
  .then(function (succesful) {
    return succesful;
  })
  .catch(function (error1) {
    log(`${error1}`);
  });

log(promises);

// ========== ASYNC JS =========
// setTimeOut(function, time) is not a web API thing and not a JS thing

boilWater(1000); // this means minimum time ...

for (let i = 0; i < 1000; i++) {
  log('still busy');
}

log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');
log('2 chop carrots');

function boilWater(time) {
  log('1 boiling....');
  setTimeout(() => {
    // gives the callback function to the web api and the browser takes the callback function. 
    log('3 done....');
  }, time);
}
