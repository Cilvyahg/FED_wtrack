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

const updateToShoppingList = function (e) {
  log(e);
  log(this.value);

  // if (this.value.length === 0) {
  // return;
  // }
  if (this.value === "") return;

  if (e.key === 'Enter') {

    // if (!this.value) return; // this kan ook dus als de value = false waar is doe dan return
   
    const newItemText = this.value.toUpperCase();
    const newItem = document.createElement('li');

    const textBox = document.createTextNode(newItemText);
    newItem.appendChild(textBox);
    newItem.style.color = 'hotpink';
    itemsUL.appendChild(newItem);

    //  zelfde als hieronder :::
    // newItem.innerText = newItemText;
    // newItem.style.color = "hotpink";

    this.value = ''; // the addItemInput wordt na de bovenstaande handelingen weer leeggemaakt. dus na de enter wordt de input leeggemaakt
    // en dit zet je hier omdat je na de enter wilt dat de input weer leeg is. 
  }
};

addItemInput.addEventListener('keypress', updateToShoppingList);


// ==== FORM e.preventDefault ====

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#creditcard');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

console.dir(termsCheckBox);

form.addEventListener('submit', function (e) {
  log(e);
  e.preventDefault(); // preventing the form from it's typical form behavior
  log(`CREDITCARD VALUE = ${creditCardInput.value}`);
  log(`TERMS VALUE = ${termsCheckBox.checked}`); // instead of value use 'checked' for checkbox and for radiobuttons
  log(`VEGGIE VALUE = ${veggieSelect.value}`);
});


// === INPUT / CHANGE ===

//async represenation of the data from the form
// so all the events are triggered before the customer submits the form

// const formData = {}; 
// creditCardInput.addEventListener('input', function (e) {
  //   log(`CC changed`, e)
  //   formData["creditcard"] = e.target.value;
  
  // })
  
  // veggieSelect.addEventListener('input', function (e) {
    //   log(`veggie changed`, e)
    //   formData["veggie"] = e.target.value;
    
    // })
    // termsCheckBox.addEventListener('input', function (e) {
      //   log(`checkbox changed`, e)
      //   formData["agreeToTerms"] = e.target.checked;
      
      // })


      
      
const formData = {}; // making a new object
const formInput = [creditCardInput, termsCheckBox, veggieSelect]; 

for (let input of formInput) {
  input.addEventListener('input', function ({ target }) {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    log(formData)
  });
}


