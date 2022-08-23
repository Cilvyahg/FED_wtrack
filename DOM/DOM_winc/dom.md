## Browser Events
er zijn veel soorten events

vaak hebben events
1. event type 
2. an element that the event happens on

for each event the browser creates and event object. de hele tijd gebeuren events in de browser, maar je doet er niet altijd wat mee


### event reference
standaard is js synchroom, maar dit kun je wijzigen naar asynchroom
javascript gaat pas events afhandelen als hij niks meer te doen heeft.


eventhandles zijn stukjes javascript die zegt ik wil luisteren naar een specifieke browser events en wil daar wat mee doen. 


***addEventListener**

the event is linked to execution code (function). wat je in de functie stopt mag zoveel als zo weinig zijn als je wilt. 

er kunnen meerdere events op een element zitten. 

**removeEventListener** op deze manier verwijder je een addeventlisteren van de dom 

## HIGHER ORDER FUNCTIONS

functies meegeven dat doen array methods zoals .map() .reduce()
maar functies kunnen ook functies teruggeven

voordeel van functie is dat je een bepaald gedrag een beetje kan verwijderen vanwege het werken met andere waardes (paramaters) = variabel gedrag.


functie kunt je zien als een machine .. je stopt er iets in en je krijgt iets terug (zoals boolean, string). je krijgt er wel vaak maar een waarde uit.



#### Debugging strategy

![image](./Screenshot%202022-08-03%20at%2016.26.46.png)


* locate : wanneer (in tijd) en waar in je file gebeurd de bug? 
* analyze: wat gebeurd hier nou eigenlijk? ga console.log gebruiken om te zien wat er gebeurd. 


# DOM LIVE LES

maakt eerst de html en css aan en dan de DOM.
De dom model van je document

elke browser heeft zijn eigen engine om js uit te voeren. en die js engine gaat dat lezen en uitvoeren.
De javascript engine kan met de dom communiceren. 
het DOM object is een manier om html en css aan te passen. 

Chrome heeft V8 engine
FireFox heeft spidermonkey engine

document is een object. als je document typt in een console zie je een overview van de dom elementen.
je kan met de dom communiceren via het dom object.

document heeft een parentobject en dat is de 'window'

window is een representatie van je hele browser.

getElementID krijg je een element terug.
bij getElementsBytagname krijg je een html collectie
moet je nog wel de index zoeken [1] als je een specifieke element wilt;

## it is important to Cache (dus sla het op in een variabele) selectors in variables

in javascript sla je een referentie naar object (wanneer je const variabele gebruikt) dus daarom kan je const gebruiken en je kan de properties daarom wel veranderen en niet zozeer de value. 

### seperation of concern
inline styling wanneer je de style property gebruikt


## classList.add() 

je voegt hier iets toe en dit is geen replacement zoals setAttribute("");

door die functie haken maak je alleen aan () inline maar invoke je de functie niet want invoken van de functie moet de functienaam().

dus hieronder maak je enkel de functie aan, maar wordt deze niet invoked.

beide zijn hetzelfde hieronder :::

btn.addEventListener('click', function () {
  handleClick()
}

btn.addEventListener('click', () => {
  handleClick();
})

++++++++++++++
### ARROWFUNCTIONS AND THIS

you can't use `this` keyword when using an arrow function. and you have to pass it in as a argument when using a function as a parameter in another function. Like below;


```
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];

const boxContainer = document.querySelector('#boxes');
const h2 = document.querySelector('h2');


const changeColor = function (param) {
  h2.style.color = param.style.backgroundColor; // reference to the box. where the addeventlistener is called on
  param.innerText = param.style.backgroundColor;
  log(param)
};

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  boxContainer.appendChild(box);

  // box.addEventListener('click', function () {
  //   this.innerText = color;
  // });

  box.addEventListener('click', function() { 
    changeColor(this);
  });
}

```

## Keypress event

to see what key
log(event) to have access to for example the particular key that was pressed on the keyboard.

Input events -- like keyUp, keyDown,  KeyPress
//keyup  this eventtype happens when the key is released
//keydown this eventtype happens when the key is pressed
//keypress -- if nothing is showing in the input the keypress event won't be fired. when something will change like the input than keypress can be used. 
for example 'delete' is not a keypress
for example 'return' is a keypress

keydown and keyup will fire for any key -- one will fire when we press down other up.
keypress only fires 


