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

log(document.querySelector('input[type="password"]'));

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

const allLi = document.querySelectorAll('li');
log(allLi);


for (let li of allLi) {
  li.innerHTML = 'We <b>love</b> you';
  log(li);
}

// ====== style =====

const colores = ["red", "orange", "blue", "purple", "pink", "brown", "teal", "yellow", "green"]
const coloresReverse = [...colores].reverse(); // making a copy of the array and reverse() method
coloresReverse[4] = "beige";
log(coloresReverse)


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
log(h1.style) 
// the style property will changes the inline style in html. you can only do it one by one
h1.style.color = "orchid";
h1.style.backgroundColor = "beige";
h1.style.textAlign = "center";
h1.style.borderRadius = "100px";
h1.style.padding = "1rem";





