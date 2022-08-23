# DOM

Nearly everything in JavaScript is an object other than six things that are not objects which are — null , undefined , strings, numbers, boolean, and symbols. These are called primitive values or primitive types.

console.dir(object)

dom is the interface between js and the webpage

the dom is automatically created by the browser as soon as the HTML page loads.

# DOM

document object is where everything is contained and within it there are methods and properties you can change. you can manipulate all these through the document.

document.getElementById()

console.dir(value) in order to get the objects

document.getElementsByTagName()
document.getElementsByClassName()

in the DOM each element becomes an object or node, we can use built in methods to interact with these nodes.

you need to understand the basics html and css when you want to use the DOM.

**Nodes versus Element nodes**
Nodes are all the different components the webpage contains of also textnodes and comments. Elements are one type of nodes. Elements are only HTMNL elements.
so Element is just a special type of a Node.

every node has a parent. and they also can have children.
textnodes (are text in a element)
parent nodes can only be elements.
comments, textnodes can be children

main.nodeType / main.nodeName (de tag die erbij hoort)
1 = Element node
2 = text Node
8 = comment Nodes
9 = Document Node
10 = Document Type Node
11 = Document Fragment Node

use mainly Element Nodes instead of Nodes.

children instead of childNodes
nodeList returns all of the Nodes (also text, comments)
HTMLcollection returns only elements

**we can use one method to select a single element**

document.querySelector()

**PROPERTIES AND METHODS**
innerText -- is sensitive to what is showing in the moment and if things are showing in the html for the moment. ignores the tags

textContent -- includes the markup. returns every element. it gives us back everythin. textContent is like innerText but DOES NOT CARE what is actually displayed to the user at that moment. so it won't be updated immediately.

innerHTML -- gives all the markup back
innerHTML is the only one we can use to add elements inside of some other elements.

**attributes**

getAttribute()

style() object will contain the inline styles in its markup. don't do this instead use classList.

// if you want to know the current fontSize of element h1 for example. SO GET THE CURRENT STYLES.
window.getComputedStyle(h1).fontSize

**_classList_**
The classList property returns the CSS classnames of an element.

toggle method
With the toggle() method, you simply pass the name of the class which you want to toggle:
The toggle() method returns true if the class was added, and false if it was removed:

replace()

previousElementSibling
nextElementSibling

**_MAKING A NEW DOM ELEMENT_**

createElement()

removeChild() -- remove based on the child and parent relationship
remove()

appendChild : allows you to append a child element or child node to a parent node or a parent element.

The appendChild() method appends a node (element) as the last child of an element.

## Nodelist & HTML collection

it's important to know what you need to do something.
querySelectorAll() returns a Nodelist
getElementsByTagnName() returns a HTMLcollection

_HTML collection_
is ONLY element nodes
so elements only
when you have a variable that holds HTML collection it will be updated live immediately; live HTML collection Node list

_Node list_
ANT kind of node. so it could include text nodes, elements nodes, comments and etc.

children e.g. main.children / element only HTML collection

childNodes and querySelectorByAll // returns Nodelist -- this one is live unlike other ones
most of them are static so not live updating

**_innerHTML_**

innerHTML − The innerHTML property returns the text, including all spacing and inner element tags. It preserves the formatting of the text and all the extra tags like `<b>` etc.

**innerText**
innerText The innerText property returns just the text, removing the spacing and the inner element tags.

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

## Toggle(in class)

h2.classList.toggle('greenbutton')

toggle -> being present and not present. where you click and something can happen.

for e.g. to add and remove a class in order to achieve the toggle.

# DOM EVENTS

- click events
- key press event
- submit a form events
  and many more

.addEventListener('click', function (eventparam) {

}) <-- a method.

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

nextSibling (gives a dom node back, for example give textnode can also be spaces, text)
so it's better to use .nextElementSibling, .reviousElementSibling ignoring those weird nodes like white spaces, comments and etc.

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
h2.classList.add('h2_1') // add the class to the h2
so now it has three classes.

h2.classList.remove('purple')

toggle a class between ON and OFF
h2.classList.toggle('purple')

you could add and remove the class to toggle between OFF and ON

## toggle

toggle(): This method belongs to DOMTokenList object, and is used to toggle between the classes

# DOM

domtree is generated from any HTML document. the Dom contains a ton of methods and properties

In the DOM there are different types of nodes
some nodes are HTML elements and others are just text

- every single node in the DOM tree is of the type Node
- each Node is represented in Javascript by an object
  and this objects gets access to special node methods and properties such as
  text, childNode, parentNode, textContent, cloneNode() and etc.

Document is another type of Node.

Important to keep in mind!
HTML collectiom updates immediately
Nodelist doesn't do this. it wont updates itself.

querty selector gives you a node list
while getElements ByClass gives you a html collection

## Javascript events

### bubbling and capturing phase

CAPTURE PHASE
the event is not generated at the target element but generated at the root of the document, the document root and it will travels down the tree. it will pass through every single parent element (so only parents) of the target element.

addEventListerner.('click', function() { }) --> callback function

BUBBLING PHASE
after reaching the target the event travels all the way up to the document root. Bubble up. the (click) event passes through all the parents elements and not through the sibling element.

events can only be handled in the target phase and bubbling phase.
not all events do have bubbling and capture phase but target the target phase immediately.

# DOM TRAVERSING

is basically walking through the elements.

# INTRODUCING THE WORLD OF THE DOM (colt)

document object model

tree structure
at the very top of the tree srtructur is the "document" . the document object is our entry point to the world of the DOM.

document is an object just like everything in the dom. it's created automatically everytime we load up the page. document is th root of the tree.

# EVENTS AND THE KEYWORD 'THIS'

this keyword or variable. the value of the this keyword is not status it depends on how the function is actually called.

arrow functions do not get their own this keyword ..

event listener : this = Dom element that the handler is attached to

# Event Object

//what is function(e)

information about the event that just has occured.

e in this context is just a parameter name, and could be replaced with any valid identifier. It represents the event data itself, and is passed in by the browser when it invokes your event callback. The event data can contain some extra information in certain cases, but the most useful part of it is that it has a reference to the "target" that triggered the event. So, e.target in this case would refer to the button that triggered the event.

console.log(e) to see the properties.

# Form Events

**Responding to user inputs and actions!**
preventdefault() // prevents page reload

usually used when submitting a form.

# Input and Change Events

addEventListener('change', function(e)){

}

addEventListener('input', function(e)){
console.log(e)

}

# Event Bubbling

e.stopPropagation() --> stops bubbling up.

# DOM BASICS

querySelector, getElementsByTagname are all methods.
querySelector returned het eerste element.

const hello = document.createTextNode('hello world') // output is hello world
document.createTextNode(variable)
document.createElementNode()

Element.className --> is de volledige lijst van class names van het element, je kunt dit bekijken in console log.

Element.classList geeft je een domteken list met de classes. Dus geeft een array van classes. met de classList kun je niet alleen lezen maar ook classes toevoegen, verwijderen, vervangen.

innerText --> shows only what you can see on the screen. prints its out as the html.

textContent --> also returns spaces, indentation and etc.

innerHTML -->
bijv div.innerHTML = <strong>hello</strong> it will be rendered

Element.remove() // deleting it from the html
kyle uses remove() instead of removeChild since you already have access to the element.

element.append() // appending it again

variabele.parentElement.parentElement (level op)
.childElementsCounts (how many children
.children[0] (it's not an array but they do have an indices

### createElement()

wanneer je een element creert bijvoorbeeld een "li" dan is deze enkel gecreerd maar nog niet te zien in de HTML je moet deze als ware appenden

## insertAdjacentElement(position, element);

'beforebegin' , 'afterend'

will be inserted before or after and will be a sibling so not a child.

### remove

removeChild() then you have to put it on the parent first.

instead use remove()

## insertBefore();

kan je plaatsen waar je het wilt inplaats van append or prepend.

## DOMContendLoaded

the DOMContendLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. so first script defer > contentLoaded event.

> window.addEventListener('DOMContentLoaded', function () {
> // your code goes here
> });

querySelector() are also methods.
document = also a object that is why you can put the querySelector() on the document.
window is also a object and the window has a document property.

nodelist is almost like a array but not exact the same

log(btn.nodeName) --> property nodeName van de btn
log(btn.style) --> all the styles properties van de btn
window --> to see all the properties from the window.

## window object

browser api - it gives us methods and properties to work with the browser

and in the window object we have the document property
console.dir

alert is also a property of the window but if it can't find it then it will go search in the window object that is why you just can write alert() en you dont have to write window.alert();

same as for document.addEventListern();

console.dir(object)
to see all the methods and the properties that the object can have
for example
console.dir(document)
console.dir(window)

## children

use the children property instead of childNodes property. with the childNodes property you will also get the text, empty spaces node. with the

> parent.children

you will only get the element

# body

document.body.innerText = ""

# innerText

when updating the innertext of the nested elements will also be affected. so for example if you have an UL with li's in it. changing the UL innerText will change what's inside of UL and what is inside of UL are also li's so li's will dissapear and the new innerText will be displayed.

it doesn't ignore the tags but ends up with the tags as a string so the <b> <b> will be shown. that can only be done with innerHTML

# textContent (gives back all the text)

# innerHTML

gives back all the tags, attributes and etc.innerHTML allows
us to pass in tags like <b> styling and etc.

** window.screen **

property
window.innerHeight
window.innerWidth

// this is refering the addEventListener is attached to.

## CreatTextNode()

The createTextNode() method is used to create a TextNode which contains element node and a text node. It is used to provide text to an element. This method contains the text values as parameter which is of string type. Syntax: document.createTextNode(text);

## e.preventDefault()

like submitting a form
when submitting you will directed to another webpage after clicking submit
by using the e.preventDefault() you will stop this default behavior

when you have set the preventDefault when you look at
log(e) you will see the property 'defaultPrevented : true' ;

**Checked**

The `.checked` property gives back a boolean (true or false)
use this for input radiobuttons, input checkbox

here the `.value` property like for other input elements won't work.


