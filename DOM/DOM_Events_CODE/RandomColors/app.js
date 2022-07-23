//first selecting the button
const button = document.querySelector('#button-color');

//updating the h1
//selecting h1

const h1 = document.querySelector('h1');

//add an EventListener and give the background random color

button.addEventListener('click', () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

// seperate function functie binnen een andere functie hierboven.
// if you have a functionality that can be standalone its best to create a seperate function

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

console.log("hello")
console.log("hello")
console.log("hello")


//updating the text the rbg

// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
