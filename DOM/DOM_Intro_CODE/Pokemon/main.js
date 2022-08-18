'use strict';

// === loops ===

// eslint-disable-next-line no-unused-vars
const log = console.log;

// to convert an object to an array you use one of the three methods: Object.keys(), Object.values(), Object.entries();

// === LOOPING OVER AN OBJECT ====

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
};

for (let movie of Object.keys(movieReviews)) {
  log(movie, movieReviews[movie]); // waarom geeft dit een value terug van de keys??
}

for (let movie in movieReviews) {
  log(movie);
}

const scores = Object.values(movieReviews); // isolating the value
const movieNames = Object.keys(movieReviews); // isolating the keys
log(scores);
log(movieNames);

let total = 0;

for (let score of scores) {
  total += score;
}

let avg = total / scores.length;
log(avg);

// === for .. in loop in Objects === loops over the keys in an object

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battheOfTheDecades: 100000,
};

log(jeopardyWinnings.battheOfTheDecades);

let resultJeopardy = 0;

for (let key in jeopardyWinnings) {
  log(`this is the key::`, key);
  log(`this is the value`, jeopardyWinnings[key]); // to get the value. 
  resultJeopardy += jeopardyWinnings[key];
}

log(resultJeopardy);

//for in loops can't be used with arrays, its better to use a for .. of loops

for (let key in [1, 5, 6, 8, 9]) {
  log([1, 5, 6, 8, 9][key]); 
}

log(jeopardyWinnings['regularPlay'])
log(jeopardyWinnings.regularPlay);







