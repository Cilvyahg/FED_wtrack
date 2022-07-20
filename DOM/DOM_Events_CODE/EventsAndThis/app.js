const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}



// const button = document.querySelectorAll('button');

// for(let buttons of button) {
//     buttons.addEventListener('click', function () {
//         buttons.style.backgroundColor = makeRandColor();
//         buttons.style.color = makeRandColor(); 
//     })
// }

// const h1s = document.querySelectorAll('h1');

// for (let h1 of h1s) {
//     h1.addEventListener('click', function () {
//         h1.style.backgroundColor = makeRandColor();
//         h1.style.color = makeRandColor();
//     })
// }


// KEYWORD THIS. 


function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor(); 

}

const button = document.querySelectorAll('button');

for(let buttons of button) {
    buttons.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}



























// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize)
// }

// function colorize() {
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor();
// }
