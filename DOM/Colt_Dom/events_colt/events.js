'use strict';

const log = console.log;

const btn = document.getElementsByTagName('button')[0];
log(btn);

const buttonClick = function () {
  btn.addEventListener('click', function () {
    this.classList.toggle('button-pink');
  });
};

buttonClick();

btn.addEventListener('mouseover', function () {
  this.innerText = 'I"M IN';
});

btn.addEventListener('mouseout', function () {
  this.innerText = 'I"M OUT';
});

// window.addEventListener('scroll', function () {
//   document.body.style.backgroundColor = "beige";
// });

const btn2 = document.querySelector('.button-2');

btn2.addEventListener('mouseover', function (e) {
  log(e);

  const windowHeight = Math.floor(Math.random() * window.innerHeight);
  const windowWidth = Math.floor(Math.random() * window.innerWidth);

  this.style.left = `${windowWidth}px`;
  this.style.top = `${windowHeight}px`;
});

btn2.addEventListener('click', function () {
  this.innerText = 'YOU GOT ME';
  document.body.style.backgroundColor = 'red';
});

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];

const boxContainer = document.querySelector('#boxes');
const h2 = document.querySelector('h2');


const changeColor = function () {
  h2.style.color = this.style.backgroundColor; // reference to the box. where the addeventlistener is called on
  this.innerText = this.style.backgroundColor;
  log(this)
};

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  boxContainer.appendChild(box);

  // box.addEventListener('click', function () {
  //   this.innerText = color;
  // });

  box.addEventListener('click', changeColor);
}


// ==== COIN GAME DEMO ====



