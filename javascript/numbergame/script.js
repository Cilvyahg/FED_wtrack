'use strict';

let firstNameInput = prompt('Hi, welcome. What is your name?');
console.log(firstNameInput);

if (firstNameInput !== null) {
  alert(`Hi ${firstNameInput}, are you ready to play a game?`);
} else {
  prompt('dont use numbers');
}

// } else {
//   prompt('Use a valid name');
// }

let computerNumber = Math.trunc(Math.random() * 25) + 1;
console.log(computerNumber);

let gameStart = prompt(
  'Enter an integer number between 0 and 25 to start guessing..'
);

while (gameStart !== computerNumber) {
  computerNumber = Math.trunc(Math.random() * 25) + 1;

  alert(
    `Your number was ${gameStart} this is is not correct, 
    the computer's number is ${computerNumber}`
  );
  let guessAgain = prompt(`TRY AGAIN 💔`);
  alert(
    `Your number was ${guessAgain} but the computer's number was ${computerNumber}`
  );

  if (gameStart === computerNumber) {
    alert(`YOU WON THE GAME 💰!`);
    break;
  }
}

let gameFinised = alert(`Bye ${firstNameInput} thank you for playing with us`);

// const yourNumber = () => {

//   if (computerNumber === yourNumber) {
//     alert(`YOU WON THE GAME!`);
//   } else {
//
//   }
// };
// console.log(yourNumber);
