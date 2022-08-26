const log = console.log;

// ====== spread in Object literals ===== {...}

log([...'hello']); // every char is an index

let arrayNum = [1, 2, 3, 5, 6];

const double = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    log(arr[i] * 2);
  }
};

double(arrayNum);

const fruits = ['banana', 'kiwi', 'apple', 'orange', 'strawberry'];

log(fruits.sort());

const fruitRandom = (array) => {
  return array.sort(function () {
    const randomize = Math.random() - 0.5;
    log(randomize);
    return randomize;
  });
};

log(fruitRandom(fruits));

const a = null; // value is explicitely nothing
log(a);

const num = 3;

if (num % 2 !== 0) {
  log(' ODD NUMBER');
}

// eslint-disable-next-line no-unused-vars
let password = 'hello kitty';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    // if there is no space = true
    log('valid password ');
  } else {
    log('password is long enough, but cannot contain spaces');
  }
} else {
  log('password needs to be longer');
}

let flavor = 'grape';

if (!(flavor === 'grape' || flavor === 'cherry')) {
  log('we dont have it ');
}

// === NESTED ARRAYS ===

const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock'],
];


log(animalPairs[2][0]) // peahen

