'use strict';

const h1 = document.querySelector('h1');

const rollTheDice = function () {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document
    .querySelector('.dice .img1')
    .setAttribute('src', `images/dice${randomNumber1}.png`);

  document
    .querySelector('.dice .img2')
    .setAttribute('src', `images/dice${randomNumber2}.png`);

  if (randomNumber1 === randomNumber2) {
    h1.innerHTML = 'Draw again';
  } else if (randomNumber1 > randomNumber2) {
    h1.innerHTML = 'player One won';
  } else {
    h1.innerHTML = 'player Two won';
  }
};

document.body.addEventListener('click', rollTheDice);
