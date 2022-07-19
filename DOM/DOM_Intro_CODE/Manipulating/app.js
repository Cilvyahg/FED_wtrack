// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const allLinks = document.querySelectorAll('a');

for (let links of allLinks) {
  links.innerText = ' I AM A LINK';
}

document.querySelector('h1').innerText = '<i>abcdef</i>'; // will NOT give the text after markup but the whole text

const title = (document.querySelector('h1').innerText = '<i>hello</i>'); // gives back <i>hello</i>
const titleItalic = (document.querySelector('h1').innerHTML = '<i>hello</i>'); // gives back hello in italized letters

// changing it to another id

document.querySelector('#banner').id = 'whoops';
document.querySelector('#whoops').id = 'banner'

// attribut selecteren
const input = document.querySelector('input[type="text"]')
// input.type = "color"

input.type = 'color'; // is hetzelfde als .setAttribute() als hier onder

input.setAttribute('type', 'color') // dus eerst attribute en dan de waarde die je wilt
// input.setAttribute('type', "password")


const h1 = document.querySelector('h1'); 

// inline styles you can see them in html .. don't do this
h1.style.color = 'blue';
h1.style.fontSize = '3rem'
h1.style.border = '2px solid pink'



const h2 = document.querySelector('h2')
//checken of de h2 de 'class' attribuut heeft. null dus hijs niet gesteld
console.log(h2.getAttribute('class'));

// een andere attribuut zetten 
// h2.setAttribute('class', 'purple')

h2.classList.add('purple')
h2.classList.add('border')


h2.classList.toggle('purple')

const firstBold = document.querySelector('b')
firstBold.parentElement 


const newImg = document.createElement('img')
newImg.src =
  'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

document.body.appendChild(newImg) // its going to append this as the last child of the body 

// append, prepend, insertAdjacentelement, before, after u can all use them some are not compatible with some browsers and depending on the situation


const newText = document.createElement('h1')
const newTitle = newText.innerText = "this is poop";
document.body.append(newTitle)

const h2Second = document.createElement('h2')
h2Second.append("are adorable chickens");

//INSERTADJACENTELEMENT it's added as a new sibling . relative to its element. in this case relevant to h1.
h1.insertAdjacentElement("afterend", h2Second); 

// RemoveChild & remove













