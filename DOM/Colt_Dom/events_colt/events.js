'use strict';

const log = console.log;

// const btn = document.getElementsByTagName('button')[0];
// log(btn);

// const buttonClick = function () {
//   btn.addEventListener('click', function () {
//     this.classList.toggle('button-pink');
//   });
// };

// buttonClick();

// btn.addEventListener('mouseover', function () {
//   this.innerText = 'I"M IN';
// });

// btn.addEventListener('mouseout', function () {
//   this.innerText = 'I"M OUT';
// });

// // window.addEventListener('scroll', function () {
// //   document.body.style.backgroundColor = "beige";
// // });

// const btn2 = document.querySelector('.button-2');

// btn2.addEventListener('mouseover', function (e) {
//   log(e);

//   const windowHeight = Math.floor(Math.random() * window.innerHeight);
//   const windowWidth = Math.floor(Math.random() * window.innerWidth);

//   this.style.left = `${windowWidth}px`;
//   this.style.top = `${windowHeight}px`;
// });

// btn2.addEventListener('click', function () {
//   this.innerText = 'YOU GOT ME';
//   document.body.style.backgroundColor = 'red';
// });

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

// THIS CANNOT BE USED WITH AN ARROW FUNCITON
// event object is always passed implicitely but we have to put it in a parameter to capture it
const changeColor = function (e) {
  h2.style.color = this.style.backgroundColor; // reference to the box. where the addeventlistener is called on
  this.innerText = this.style.backgroundColor;
  log(this);
  log(e);
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

// ==== EVENT OBJECT ====
// document.body.addEventListener('keypress', function (e) {
//   log(e)
// })

// ==== KEY EVENTS ====

//keyup  this eventtype happens when the key is released
//keydown this eventtype happens when the key is pressed

const input = document.querySelector('#username');

input.addEventListener('keyup', function () {
  log(`KeyUp`.toUpperCase());
});

input.addEventListener('keydown', function () {
  log(`KeyDown`.toUpperCase());
});

input.addEventListener('keypress', function () {
  log(`KeyPress`.toUpperCase());
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  log(e);

  if (e.key === 'Enter') {
    //add new item to list
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value =''; // 
  }
});
