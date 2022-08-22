'use strict';

const log = console.log;

// const inputAll = document.getElementsByTagName('input');
// log(inputAll); // HTML collection

// const inputValue = function () {
//   for (let input of inputAll) {
//     log(input.value);
//   }
// };

const list1 = document.getElementsByTagName('ul')[0];

log(list1, `I am the first child::`, list1.firstElementChild);

log((list1.children[2].innerText = 'I am modified numero 2'));
const list1Children = list1.children;
log(list1Children);
// or (to acces the children you need to define the index of the child)
const nextSibling = list1Children[0].nextElementSibling.nextElementSibling;
const previousSibling = nextSibling.previousElementSibling;
log(nextSibling, previousSibling);

log(list1.getElementsByTagName('li')); // here you get all the li items within the UL / returns a htmlcollection
log(list1.querySelectorAll('li')); // returns a nodelist

const special = list1.getElementsByClassName('special'); // to target it more specifically
log(special);

log(document.querySelectorAll('li.special')[1]);

log(document.querySelector('section li.special')); //   peas

// eslint-disable-next-line no-unused-vars
const password = document.querySelectorAll('input[type="password"]');

// FORM

const inputs = document.querySelectorAll('input');
log(inputs);

const a = document.querySelector('a');
log(a);

// attributes that we can enter and modify.
const img = document.querySelector('img');
log(img); // butterfly picture

// another butterfly picture. the src attribute can be directly accessed on the object
img.src =
  'https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1dHRlcmZseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60';

const range = document.querySelector('input[type="range"]');
log(range.getAttribute('max')); // looking for the attribute from the object

range.setAttribute('min', '-500');
log(range.min);

// range.setAttribute('type', 'radio');
// // changed the range element in a radio.

const firstLi = document.querySelector('li');
log(firstLi.parentElement); // you can use console.dir(firstLi) to see what the parentElement is

// CHANGING MULTIPLE ELEMENTS :: using loops

const allLi = document.querySelectorAll('li:not(li.todo)');
log(allLi);

for (let li of allLi) {
  li.innerHTML = 'We <b>love</b> you';
  log(li);
}

// ====== style =====

const colores = [
  'red',
  'orange',
  'blue',
  'purple',
  'pink',
  'brown',
  'teal',
  'yellow',
  'green',
];
const coloresReverse = [...colores].reverse(); // making a copy of the array and reverse() method
coloresReverse[4] = 'beige';
log(coloresReverse);

// the forEach accept three parameters so element, index, array;
// that is why we are using forEach here, and not a for .. of loop because for .. of doesn't accept a index parameter

log(colores.length); // output is 9

allLi.forEach(function (el, index) {
  const colorIndex = colores[index];
  log(colorIndex);
  el.style.color = colorIndex;
  el.style.backgroundColor = coloresReverse[index];
  // el.style.color = colors[index]; // this can also be done
});

const h1 = document.querySelector('h1');
log(h1.style);
// the style property will changes the inline style in html. you can only do it one by one
h1.style.backgroundColor = 'beige';
h1.style.textAlign = 'center';
h1.style.borderRadius = '100px';
h1.style.padding = '1rem';

// === GETCOMPUTEDSTYLE ===
// get computedStyle gets every style  that is defined in CSS unlike style property.

const computerH1 = getComputedStyle(h1);
log(computerH1.fontFamily);

// MANIPULATING CLASSES
const todo = document.querySelector('#todos .todo');

todo.classList.add('done');
todo.classList.remove('done');
todo.classList.add('done');

//toggle

const firstBtn = document.querySelector('.todo button');

//toggle is just remove and add the class.

firstBtn.addEventListener('click', function () {
  todo.classList.toggle('done');
});

//  CREATING ELEMENTS

//1. making an element
const newH2 = document.createElement('h2');
newH2.innerText = 'I like animals';
newH2.classList.add('heading');

//2.putting it in the DOM

const section = document.querySelector('section');
section.appendChild(newH2);

const imgUnsplash = document.createElement('img');
console.dir(imgUnsplash);
imgUnsplash.src =
  'https://images.unsplash.com/photo-1661155938245-6b94438ecfe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
imgUnsplash.style.width = '300px';
document.body.appendChild(imgUnsplash);

const newLink = document.createElement('a');
newLink.innerText = 'My Github! Click click';
newLink.href = 'https://github.com/Cilvyahg';

const form = document.querySelector('form');
form.appendChild(newLink); // last child of parent form
form.prepend(newLink); // first child of parent form

const iTag = document.createElement('i');
iTag.innerText = ' I am italic ';

h1.insertAdjacentElement('afterend', iTag);

form.prepend(newLink, iTag);

// ==== removeChild & remove ===

// const parentUL = document.querySelector('#todos');
// const removeMe = parentUL.children[1];
// parentUL.removeChild(removeMe);
// parentUL.children[1].remove();


// === DOM EVENTS ===





