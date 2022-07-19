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

