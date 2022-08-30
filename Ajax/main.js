const log = console.log;
('use strict');

// log('I happen first');

// setTimeout(function () {
//   log(' I happen third');
// }, 3000);

// log('I happen second');

const btn = document.querySelector('button');

// setTimeout(function () {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = 'translateX(200px)';
//   }, 2000);
// }, 1000);

// const moveX = function (element, amount, delay, callback) {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`;
//     if (callback) return callback();
//   }, delay);
// };

// // callback functions below;
// moveX(btn, 100, 2000, function () {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000);
//       })
//     })
//   })
// });

// log(moveX)
// 15min

const moveX = function (element, amount, delay, callback) {
  // const bodyBoundary = document.body.clientWidth;
  // const elRight = element.getBoundingClientRect().right
  const currentLeft = element.getBoundingClientRect().left;

  setTimeout(() => {
    element.style.transform = `translateX(${currentLeft + amount}px)`;
    if (callback) return callback();
  }, delay);
};

// callback functions below;
moveX(btn, 100, 1000, function () {
  moveX(btn, 200, 1000, () => {
    moveX(btn, 300, 1000, () => {
      moveX(btn, 400, 1000, () => {
        moveX(btn, 600, 1000);
      });
    });
  });
});

log(moveX);

log(` height : ${window.innerHeight}`);
log(` width : ${window.innerWidth}`);

btn.addEventListener('click', function () {
  const value = this.getBoundingClientRect();
  log(value);
});

// this event listens to rezising of the window. innerwidth
// window.addEventListener('resize', function () {
//   log(this.innerWidth);
// });

// the scroll event will only be executed when the webpage can scroll.
window.addEventListener('scroll', function () {
  log(window.scrollY);

  if (this.window.scrollY < 300) {
    document.body.style.backgroundColor = 'pink';
  } else {
    document.body.style.backgroundColor = 'purple';
  }
});

// ==== set() ====

// it only stores unique values

const unique = new Set();
const fifth = 'hello five';

unique.add('first');

unique.add('first');
unique.add('second');
unique.add('first');
unique.add('first');
unique.add('first');
unique.add('first');
unique.add(fifth);

log(unique);

const newUnique = unique.delete(fifth); // output is a boolean true or false
// so is the fifth item in the set or not -- true or false
log(newUnique);

const hasValue = unique.has('second');
log(hasValue); // true
const hasValue2 = unique.has('poopy');

log(hasValue2); // false -- it also gives back a boolean

// product array wich each item is an index

const products = [
  {
    title: 'high back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
  {
    title: 'coffetable',
    company: 'ikea',
  },
  {
    title: 'vase',
    company: 'wallmart',
  },
];

console.table(products);

//to get the array from the companies names

const companies = products.map(function (product) {
  return product.company;
});
log(companies); // array withe company names

// utilizing the set() method. to only get unique company names.
const uniqueCompanies = new Set(companies);
log(uniqueCompanies);

const finalCompanies = [...uniqueCompanies]; // stored in an array, it's converted in an array now
log(finalCompanies);

log(finalCompanies.indexOf('wallmart')); // index 3
log(finalCompanies.indexOf('ikea')); // index 0
log(finalCompanies.indexOf('a&t')); // index -1 'doesn't exist in the array'

// SHORTHAND so everything above can be done shorter.
const result = [
  ...new Set(
    products.map(function (product) {
      return product.company;
    })
  ),
];

log(result);

// BIND() // doesnt run instantly
const suus = {
  name: 'susan',
  age: 21,
};

const greet = function (city, country) {
  log(this);
  return ` hello my name is ${this.name} and I am ${city} and I live in ${country}. I am ${this.age} old`;
};

const bindFn = greet.bind(suus, 'amsterdam', 'holland');

log(bindFn());
log(bindFn);

log(greet);

const animal = 'horse';
log(animal);

// hoisting js when is seeing a var declaration and run this first and later fill the variable with the value. so js knows that it existing before it the variable is even declared
// to avoid this declare your variable before running it.

// ===== SYNCHROMOUS  ====

let a1 = (function () {
  return 50;
})();

let a2 = (function () {
  return 5;
})();

log(a1);
log(a2);

// ==== ASYNCHRONOUS ====
// setTimeOut is asynchronous.

let a3 = 100;

setTimeout(function () {
  a3++;
  log(a3++);
}, 1);

log(a3);

setTimeout(function () {
  log(a3);
}, 0);

let promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('yo!');
  }, 0);
});

log(promise); // pending


const willGetYouADog = new Promise(function (resolve, reject) {
  const rand = Math.random();
  log(rand);
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
// you can also chain them.
willGetYouADog.then(() => {
  log('Yay we got a dog!!!'.toUpperCase());
});
willGetYouADog.catch(() => {
  log(`sad face no dog :(`.toUpperCase());
});

//what do we run when the promise is resolved or rejected? then() -> this code will run when the code is resolved
//.catch() will run when the promise rejected.
//you can chain them or do variable.catch()

// ==== RETURNING PROMISES FROM FUNCTIONS ===

const makeDogPromise = () => {
  // we can make a function that returns a Promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000); // this promise takes 5 seconds before its resolving or rejected
  });
};

makeDogPromise()
  .then(() => {
    log('Yay we got a dog!!!'.toUpperCase());
  })
  .catch(() => {
    log(`sad face no dog :(`.toUpperCase());
  });


  // const makeDogPromise = () => {
  //   // we can make a function that returns a Promise
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       const rand = Math.random();
  //       if (rand < 0.5) {
  //         resolve('hello');
  //       } else {
  //         reject('heehehehehehe');
  //       }
  //     }, 5000); // this promise takes 5 seconds before its resolving or rejected
  //   });
  // };

  // makeDogPromise()
  //   .then((val) => {
  //     log(val);
  //   })
  //   .catch((val) => {
  //     log(val);
  //   });