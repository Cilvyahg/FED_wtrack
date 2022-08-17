/* eslint-disable no-unused-vars */
'use strict';

// ==================
// OEFENING DOM BASICS - WINC
// ==================

const title = document.querySelector('.app-title');
const nameList = document.querySelector('.namelist');
const inputText = document.querySelector('#input-text');
console.log(title);

title.style.color = 'red';
title.style.border = '10px solid black';
title.classList.add('active');

const clickBtn = document.querySelector('.btn');

clickBtn.addEventListener('keypress', function (een) {
  console.log(een.key);
});
console.log(clickBtn);

const onClickDivided = () => {
  title.classList.toggle('inactive');

  // TODO log content of listInput
  const newName = inputText.value;

  if (newName.length <= 2) {
    console.log(`you filled in ${newName}`);
    return;
  }

  console.log(newName);

  //create an Li Dom element
  const newLi = document.createElement('li');
  console.log(newLi);

  // add content to the li element

  // const addLi = document.createTextNode(newName); // zelfde als beneden
  newLi.innerHTML = newName;

  // newLi.appendChild(addLi);

  // add the li element to the DOM list
  nameList.appendChild(newLi);
};

clickBtn.addEventListener('click', onClickDivided);

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

newH3.innerHTML = '<strong> hello</strong>';

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

let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = 'hiii';
}

// EVENTHANDLES ARE FUNCTIONS

/* ======
  method 1
  ====== */

// const handleClickEvent = () => {
//   console.log("The divOne element was clicked");
// }

const divOne = document.querySelector('.div1');
// divOne.addEventListener('click', handleClickEvent);

// const divOne = document.querySelector('.div1');
// divOne.addEventListener('mouseover', handleClickEvent);

// als er op jou wordt geklikt divOne dan wilo ik dat je dit gaat doen
// als er een muis over jou heen gaat, dan wil ik dt je handleClickEvents gaat uitvoeren.

/* =======
method 2 : inline function. dus bijvoorbeeld met anonieme functie

========= */

// divOne.addEventListener('click', () => {
//   console.log('The Element was clicked')
// });

const Para1 = document.querySelector('#first-section');

console.log(Para1);
console.log(Para1.getAttribute('id')); // gaat ook na of je attributen hebt zoals id

// console.log(Para1.classList.remove('paragraph'));
Para1.classList.add('paragraph1', 'paragraph2'); // adding more classes

Para1.classList.remove('paragraph1'); // removing classes
Para1.classList.replace('paragraph2', 'paragraph3'); // replacing classes

// LEZEN VAN EEN CLASSLIST VAN HET ELEMENT
console.log(Para1.classList); // dom tokens zie je of er classes zijn en welke

Para1.classList.toggle('paragraph3'); // will remove it when its there
Para1.classList.toggle('paragraph3'); // will add it when its not there to get a toggle

function aa(a) {
  console.log(a.key);
}

const body = document.body;
const div = document.createElement('div');
const newDiv = body.append(div);
div.innerText = 'this is a new div'.toUpperCase().split(' ');

//================

const log = console.log;

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const list = document.querySelectorAll('.special');
log(list);

list.forEach(function (item) {
  item.style.color = 'yellow';
});

const lastItem = document.querySelector('li:last-child'); // to get the last child.
// log(lastItem);

// ===== TRAVERSE THE DOM TREE =====

const resultUL = document.querySelector('#result');
const allChildren = resultUL.children;
log(allChildren);

log(resultUL.firstChild);
log(resultUL.lastChild);

// parent -- going upwards

const heading = document.querySelector('h2');
const parent = heading.parentElement;
parent.style.color = 'red';

// previousSibling
// nextSibling
// they do return whitespace

// ==== FUNCTIONS =====
//password

const isValidPassword = function (password, username) {
  if (
    password.length >= 8 &&
    password.indexOf(' ') === -1 &&
    !password.includes(username)
  ) {
    return true;
  }
  return false;
};

log(isValidPassword('heya78689', 'heya'));

const isValidPass = function (password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.includes(username)) {
    return false;
  }
  return true;
};

log(isValidPass('heya7867', 'oio liiooh'));

// =====AVERAGE=====

const averageArray = function (arr) {
  // make a variable to store the sum
  // loop over each num
  // add them together
  // divide by number of nums

  let total = 0;

  for (let num of arr) {
    total += num;
  }

  let result = total / arr.length;
  return result;
};

log(averageArray([5, 8, 6, 4]));

// =====PANGRAM======
// a pangram is a sentence that contains every letter of the alphabet like: 'The quick brown fox jumps over the lazy dog'

const isPangram = function (sentence) {
  let lowerCasedSentence = sentence.toLowerCase(); // because the array you are looping over is lowercased so the sentence needs to be converted into lowercased

  for (let char of [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]) {
    log(char);
    if (lowerCasedSentence.indexOf(char) === -1) {
      return false;
    }
  }
  return `yes it is a Pangram`;
};

log(isPangram('Abcdefghijklmnopqrstuvwxyz'));

// you can also write it with with includes() method

// let alphabet = 'abcdefghijklmnopqrstuvxyz';
// let alphabetSplit = alphabet.split("");
// log(alphabetSplit);

const isPangram2 = function (phrase) {
  let lowerCasesPhrase = phrase.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvxyz';
  let alphabetToArray = [...alphabet];

  for (let char of alphabetToArray) {
    if (!lowerCasesPhrase.includes(char)) {
      return false;
    }
  }
  return `yes the ${lowerCasesPhrase} is a pangram`;
};

log(isPangram2('abcdefghijklmnopqrstuvwxyz'));

// ==== GET PLAYING CARD ====

const pick = function (arr) {

  //returns random element from arr

  const pickRandom = arr[Math.floor(Math.random() * arr.length)];
  return pickRandom; 
}

log(pick([1,6,8,9,9])) // om te zien of de functie werkt; 


const getCard = function () {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]; // 0-13 index - 14 items

  const valuesRandom = pick(values);


  const suits = 'clubs spades hearts diamonds';
  const suitsArray = suits.split(' ');
  const suitsRandom = pick(suitsArray);

  function randomGenerator() {

    const randomObject = {
      value: valuesRandom, // kan ook pick(values)
      suit: suitsRandom, // kan ook pick(suitArray) -- om de code nog korter te maken
    };
    return randomObject;
  }
  return randomGenerator();
};

log(getCard());
log(getCard());
log(getCard());
log(getCard());







