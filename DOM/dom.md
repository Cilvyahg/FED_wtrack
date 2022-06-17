# DOM


Nearly everything in JavaScript is an object other than six things that are not objects which are — null , undefined , strings, numbers, boolean, and symbols. These are called primitive values or primitive types.

console.dir(object)

**_innerHTML_**

innerHTML − The innerHTML property returns the text, including all spacing and inner element tags. It preserves the formatting of the text and all the extra tags like <b>, <i> etc.

**_innerText_**
innerText − The innerText property returns just the text, removing the spacing and the inner element tags.

**_value_**

**getElementById**

getElementById('someId') is true, it does not return an array and the for loop fails to execute.

The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

**getElementsByClass**

The getElementsByClassName() method returns a collection of elements with a specified class name(s).

The getElementsByClassName() method returns an HTMLCollection.

The getElementsByClassName() property is read-only.

## properties and methods (the most important ones according to colt)

- classList
- getAttribute()
- setAttribute()
- appendChild()
- append()
- prepend()
- removeChild()
- remove()

- createElement
- innerText
gives plain text and ignores the tags functions so <i> will be displayed but it won't be working 
it will just show 
<i> Header 1 </i>


- innerHTML
it's going to be treated as HTML and not as text unlike innerText. 
- textContent
is the only one available for textn npdes; 
- value
- parentElement
- children
- nextSibling
- nextElementSibling
- previousSibling
- previousElementSibling
- style

## ATTRIBUTES
how to access attributes in the DOM

.id
.title
.href 

.getAttribute('id') <----- (get the attribute)
.setAttribute('title', new title name) <---- replacing the attribute value

# Append & AppendChild

creating new elements from scratch. 


steps
- creating a new empty element .createElement()
- update the element e.g. newH3.innerText = 'hello';
- then append it e.g appendChild(the element you want to append);




# BROWSER EVENTS
When your user interacts with the DOM, "Events" take place. These BrowserEvents are for example: clicking with your mouse, scrolling, or pressing keys.


## classList
h2.classList.add('greenbutton')

if you want to add more classes to the h2 you can do it another time with the new name of the class. 

## toggle (in class)

h2.classList.toggle('greenbutton')

toggle -> being present and not present. where you click and something can happen. 

for e.g. to add and remove a class in order to achieve the toggle.


## DOM EVENTS

- click events
- key press event
- submit a form events
and many more

.addEventListener('click', function (eventparam) {


}) <--  a method.


## EVENTS (eventListeners, eventHandlers)

- Use addEventListeners (and removeEventListeners)
- don't use element attributes like variable.onclick = 
- don't use inline javascript

-javascript kan maar een ding tegelijk doen. de andere handelingen gaat op de stapel die gaat js dan een voor een afhandelen.

- what is an event?
in the browser events are being 'fired' all the time. (gefired of getriggerd wordt). event is een gebeurtenis en elk event heeft een type (click event, mouse over type en etc.).

- don't put your javascript code in your html.


for each event the browser creates an event object. Dus elke keer als er iets gebeurt maakt de browser een **event object** aan en geeft deze door aan de eventHandler. curly braces wat properties erin. en dat event object dat kun je vangen en naar gan luisteren en als die specifieke ding voorbij komt dan kan jij daar iets mee doen.


the event object has properties that describe the interaction. zoals type:"click" , target: div # div3
path [ div3, div2,.... window]

we gebruiken de event properties om meer informatie over het 'event' te krijgen. Dus het 'event Object' heeft allerlei eigenschappen.

`event.target` op welk element is dit evenement het eerste gevuurd
`event.type`


### create an 'event handler' 

`someElement.addEventListener('click', someFunction)`

Now, when our event object encounters an element with an event handler that meets certain criteria the handler will be triggered, and the function that it contains will execute. But how do events encounter event handlers?


# WHAT EVENTS ARE THERE
mdn documentation

## removeEventListener
deze gebruik je minder.


als je een eventhandeling functie maakt dan zet je die boven voordat de addeventlister uitvoert.


## preventDefault
wanneer je bepaalde default(standaard) gedrag wilt stoppen en wilt wijzigen.

link, submit form hebben allemaal standaard gedragingen. deze zijn bij default. je kan deze default gedrag stoppen en dat doe je met 
preventDefault method on the event object.

![image from preventDefault](./Screenshot%202022-06-17%20at%2014.28.40.png)


## Event bubbling 1

currentTarget is anders dan target
als er een event gevuurd wordt op een element. dan wordt er ook een event gevuurd op de parent element als deze ook eventListeners heeft. er wordt telkens gecheckt door js: en is hier een eventlistener? en is hier een evenetlistener?

Event bubbling is happening by default. this is good you dont want to stop this. 

bubbling is zoals een waterbel die omhoog gaat door de DOM tree and fires for each of the parent elements. 

! NOT all events bubble

**event.currrentTarget**

event.currentTarget is het element wat nu het event behandeld, dit is anders dan target. event.target (het orginele element waar het op geklikt is). 


## Event bubbling 2

Event delegation patroon

we zetten de eventListerning op de parent op een serie van elementen zodat we niet hoeven na te denken om het telkens op het kind te doen li ul.

## Adding and removing classes on Browser Event

classList property

h2.classList.add('purple') // add the class purple to the h2
h2.classList.add('h2_3') // add the class to the h2
h2.classList.add('h2_1') // add the class  to the h2
so now it has three classes. 

h2.classList.remove('purple')

toggle a class between ON and OFF
h2.classList.toggle('purple')

you could add and remove the class to toggle between OFF and ON



























