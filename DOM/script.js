'use strict';

// document.querySelector('#first-section')

/* document.getElementById('header').innerHTML = 'Tech with <i>Cilvya</i>!';
document.getElementById('header').innerText = 'Tech with <i>Cilvya</i>!'; 
// with innerText you get also the inner tags like <i> and etc

// innerHTML is everything inside of the tags.

document.write(
  (document.getElementById('header').innerHTML));
  console.log(document.getElementById('inp').value); //= "put in something";
  */

//  ==============
//   PART 1
// ================

// let firstParagraph = document.querySelector('#first-section').children[0];

// let firstParagrahEdit = firstParagraph.innerHTML = "hello I am a new Paragraph";
// console.log(firstParagrahEdit);

document.querySelector('p');

// document.body.innerHTML = 'I AM THE WHOLE BODY'

/* =============
PART 2
=============
 */

let firstSection = document.getElementById('first-section');
const firstSection1 = document.getElementById('first-section');

// the result is I see the first section element with all its children so with the ptags

/* ===========
PART 3
===============
 */

let paragraphClass = document.getElementsByClassName('paragraph');
// get elementsByClass will return an array.
// get elementById won't return an array.
const paraGraphClass0 = paragraphClass[0];
const paraGraphClass1 = paragraphClass[1];

console.log(paragraphClass, paraGraphClass0, paraGraphClass1);

let secondSection = document.getElementById('second-section');
console.log(document.querySelector('.paragraph'));

// changing #ID of the element. It will impact the CSS styles that you have put

document.querySelector('#second-section').id = 'whoops';
document.querySelector('#whoops').id = 'second-section';

//placing a picture in the element. it will put last in the document. 

//image element aanmaken.
const newImg = document.createElement('img');

//class aanmaken
newImg.classList.add('doggie');


newImg.src =
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80';

document.body.appendChild(newImg);


const newH3 = document.createElement('h3');
console.log(newH3);

newH3.innerText = '<i>hello</i>';

document.body.appendChild(newH3);



// APPEND IT'S TO THE END OF THE PARAGRAPH. IT WONT WORK ON INTERNET EXPLORE
// WITH APPEND YOU CAN APPEND MORE ELEMENTS.


let pAppend = document.querySelector('p');
pAppend.append(' I am sexy and I know it');


//PREPEND WILL ADD SOMETHING IN THE BEGINNING OF THE ELEMENT.

const newB = document.createElement('i');
newB.append('I am the the first one');
// pAppend.append(newB);
newH3.prepend(newB); // adding in the beginning of newH3.
 

// DOM EVENTS
