const btn2 = document.querySelector('#b2');

btn2.onclick = function () {
  console.log('YOU CLICKED ME');
  console.log('It Worked');
};

function scream() {
  console.log('AAAAHHH');
  console.log('STOP TOUCHING ME');
}

btn2.onmouseenter = scream;

//you need to wrap it into a function because otherwise it will run itself\
// you want to wrap the onclick property into a function so that when the h1 will be clicked
// the function will be running

document.querySelector('h1').onclick = () => {
  alert('you clicked h1');
};

// HERE the onclick is not wrapped in a function and therefor will be executed right away
// document.querySelector('h1').onclick =
//   alert('you clicked h1');

// ===================
// ADD EVENT LISTENER
// ===================

const btn3 = document.querySelector('#b3');

// whatever is in the function will be executed if this b3 button will be clicked
btn3.addEventListener('click', () => {
  alert('clicked');
});

const btn4 = document.querySelector('#b4');

// whatever is in the function will be executed if this b3 button will be clicked
btn4.addEventListener('mousedown', () => {
  alert('clicked');
});


const twistAndShout = document.querySelector('#twistandshout');
twistAndShout.textContent = "VERY NICE";

const twist = () => console.log("TWIST")
const shout = () => console.log("SHOUT")

// twistAndShout.addEventListener('click', () => {
//     console.log("TWIST");
//     console.log("SHOUT");
// });

twistAndShout.addEventListener('click', shout);

//once : will only run once , default is false
twistAndShout.addEventListener('click', twist, {once: true});










// function twist() {
//     console.log("TWIST!")
// }
// function shout() {
//     console.log("SHOUT!")
// }

// const tasButton = document.querySelector('#tas');

// // tasButton.onclick = twist;
// // tasButton.onclick = shout;

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout)
