# <span style=color:PINK> COMMAND LINE INTERFACE (CLI) </span>

CLI is older than GUIs
most operating system still have them (exceptions are iOS and android (not sure))

Non-OS command line interface (non operating system)
-console in browser
-programming language REPLs
these are CLI's but they are not operating system CLI's

console is sort of a terminal

**shell**
zsh (shell)
the software running inside of a terminal thta allows you to interact with the operating system (OS).
you can run different shells on a terminal

- powershell
- zsh
- bash
- fish

inside the terminal runs a shell. most people choose a shell that they like. you can set that by default.

**prompt**
the characters before the cursor on each new command line. the default prompt will be different per shell and can be configured.
you can change (configure) the prompt from a shell if you want.

**REPL**

the command line for a programming language::

-read
-evaluate
-print
-loop (go back accepting a new command)

### Tips commands in terminal

if you delete something in de CLI then it will be possible you will really delete something and wont be able to get it back.

commands:

_arrow up_

- reuse your old command

_history_

- history command you get history form the commands. it works different on all shells and OS.

**autocompletion**
tab
e.g. cp an(tabcommand) and the name of the file will be autocompleted

**kind of termainal applications on macOS**

- built-in terminal
- macOS:iTerm2 >> is very customazible
- Hyper

**where am I ?**
pwd (print working directory command)

**clear the screen**
clear

**look around the folder**
ls

ls -l
(to get a nicer formatted list of the folders and files)
if it starts with a d (e.g drwxr-xr) it means its a directory

**go somewhere else**
cd (change directory)
cd .. (go up on directory)

. is an alias for the current directory
.. is an alias for the parent directory

### directory command

- create a directory
  mkdir (make directory)
  e.g mkdir project3 and look in ls you will see a project3 directory is created

- delete a directory
  rmdir (remove directory)
  the rmdir will only remove empty directories. SO not one with something in it.

### files command

- delete a file
  rm (remove)

- creating a file
  touch
  e.g touch todo.md

## copy files

cp (de huidige file naam) (nieuwe naam van copy)

## file openen

open (filenaam)

## rename a file

mv

# run javascript on Terminal

node script.js (wel eerst naar de juiste directory gaan) zowel in de macos terminal als vscode terminal

## VSCode

first select the folder/file
code . (it means open vscode)

## Node js

- it's a JS Runtime
- built on the V8 Javascript engine, same as google chrome
- essentially let us run javascript code on the server
- you can use node.js to get interaction with the computer e.g making desktop applications
  without node js. it will just be locked in the browser. it will happen in the server instead of on the client side.

Node js is a runtime not a programmer language.

# <span style=color:green> Javascript </span>

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

we use javascript to add behaviour

difference between javascript and ecma script

statement is a piece of code that expresses an action that needs to be carried out. alle js code should be terminated by semicolon ;

**seperation of concerns**

seperate our HTML (content)
from Javascript (behaviour)

**variables**

let name;
see the variable as a box.
variables with no value will have the outcome 'undefined'

**_naming rules_**

- always use meaningful and descriptive names
- they cannot start with a number
- they cannot contain a space or a hyphen (-)
- camelnotation: firstName (so first words lowercase and second word start with uppercase)

- If you don't need to reassign Use 'const'. Otherwise use 'let'

reserved keywords

- if
- let  
  vscode will sign you that this is not available they will have red dotted underline.

## PRIMITIVE TYPES

what are the kind of values that we can assign to variables?

we have: primitive types AND reference types

primitive datatypes

- Booleans : can only have the values true OR false like subscribed or not subscribed.

Boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops).

- Null : when you explicitely clear the value of a variable
  null is not as "primitive" as it first seems! Every Object is derived from null value, and therefore typeof operator returns object for it:

> tyoeof null === 'object'  
> (true)

- undefined : if you don't initialize a value it will be undefined. A variable that has not been assigned a value has the value undefined
  undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

- numbers (bigInt, numeric, NaN)
- string
  a string is a sequence of characters used to represent text.

- Big and symbol

**NaN**
0/0 output is NaN\
NaN \* 12 output is NaN

typeof NaN --> output number type

## truth-y & false-y values

all js values have an inherent truthyness or falsyness about them

- falsy values:
  -false
  -0
  -"" (empty strint)
  -null
  -undefined
  -Nan (but the type is number. NaN is just an invalid number)

- everything else is Truthy!

### Dynamic typing (js is a dynamic language)

typeof (to check the typeof the variable). type of the value.

undefined is a Type but also a Value.
typeof null is a object unlike undefined

# OPERATORS

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic between variables and/or values.

we can use the + operator to concatenate strings

**increment**

prefix
postfix

x++ returns the value before incrementing when calling the variable it will be incremented
++x returns the value after incrementing when calling the variable the value is the same

**decrement**
x-- returns the value before decrementing when calling the variable it will be incremented
--x returns the value after decrementing when calling the variable the value is the same

<hr>

## Objects

The values are written as name:value pairs (name and value separated by a colon).

## Arrays

- arrays zijn objects ; objecten zijn altijd true als je naar hun truthiness kijkt.
- you can equip properties/eigenschappen like (arrayvariable.length)

## precedence

javascript has a operator precedence. operator precedence determines the order in which operators are evaluated. operators with higher precedence are evaluated first.

![link mdn precedence] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

use parantheses (2 + 900) / 2 to get a operator executed first. de grouping operator (...) has the highest precedence

## BEDMAS

B brackets
E exponents
D division
M multiplication
A addition
S ubstraction

> +=
> you can also use this with strings
> e.g
> let str = "hi";
>
> str+="hi"
>
> output : hihi

# constructor

all constructor functions , with the exception of function constructor will always be the typeof 'object'.

> let str = new String ("String");
>
> typeof str;
>
> output will be 'object'

## <span style=color:YELLOW> API'S LIVE LES </span>

**door stijn**

API is een algemeen term de invulling kan anders zijn en kan verschillende regels hebben.

api is een interface dus een contact tussen jou en het systeem.
api biedt jouw ingang tot een systeem zoner dat ze echt jouw systeem hoeven te programmeren. een versimpeling van jouw systeem om ermee om te gaan. zonder een api kan je niet met een ander systeem omgaan.

api's allow you to write code that talks to systems.
zoals een weather app. jij bouwt een systeem die met jou kunnen praten.
zoals sociale media platormd twitter, fb, lampen, smart speakers and cars etc.

All api's are everywhere but not all api's are web api's.

Je kunt bijvoorbeeld API's werken die de voorraad bijhoudt en aan jouw klanten kan laten zien.

ecosysteem. dus bijvoorbeeld twitter en de data ervan gebruiken.

internal automatisation:
intern ook allemaal processen automatiseren.
AWS

**terminology whirlwind:**

- CRUD: Create, Read, Update, Delete
- REST: manieren om API's te schrijven, dus niet de programmertaal maar meer de regels net zoals SOAP. REST heeft iets minder zware regels dan SOAP.
- SOAP
- GraphQL: specificeer je eerst welke data je wilt.
- JSON : soort van javascript object en manier om js te structureren en om te sturen tussen de server en de browser. het is een datastructuur
- XML : manier om data te structureren

### Systeem achter de API

je vraagt iets en je krijgt iets terug. this can be everything. But the technology behind the API should not matter the most of the time.
API's zijn voornamelijk in de backend.

![image from api](./api.png)

POST request staat voor CREATE in CRUD.
de api herkent de POST request en de waarde doorgeven en opslaan in het systeem. de api herkent het. en api structureren hoe zij dat willen.

delete request NOG IN ZOOM

## les two over JS asynchroom

javascript is synchroom en je kunt hieruit brekegen door async te gebruiken.
JS is a single threaded block element

**function execution stack (aka call stack)**
functies staan op de callstack
ziet eruit als een to do list.
functie 1 roept tie aan voert tie uit en gaat daar naar de volgende
op die manier is js synchroom dus een voor een alle acties af.

asynchrone js. wat is het en waar gebruik je het voor?

synchrone code blokkeert. een voor een
asynchroom: betekent niet gebeurend tegelijkertijd.
e.g. data fetchen, liever niet wachten

## browser api's

extensie van normale browser /JS / code
maakt complexe code simpel

## promises

promise may be one of 3 possible states
promise is a javascript object die mogelijk een waarde gaat produceren in de toekomst.

-fulfilled
-rejected
-or pending

promise.then =>
.then om te vertellen wat je er moet gebeuren als de waarde terugkomt.

# Objects

- objecten zin Key-Value pairs
- are heterogeneous
- dataset die het makkelijk maakt om data te structuren.
- key value pairs. met een object kun je een key en een value pairs geven dat kan met een array niet. dan moet je onthouden wat een bepaalde value is.
- objecten zijn niet perse geordend (dit kan te maken hebben met performance), arrays hebben wel een vaste volgorde.

values can be anything

- string
- number
- boolean
- array
- object
- functions (often called a method then)

objects are 'passed by reference'

# IF statements

to check if some conditions are met or not. always checks if the condition is true

using `else if (condition) { }` in order to check another condition or multiple conditions.
ends with `else { }`

## comparison operators

`===`
`==`
`>=`
`<=`
`>`
`<`
!==
!=== negation operator

### logical operators

In JavaScript, the logical operators are used to combine two or more conditions

&& AND
|| OR
! = ! is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.

## stringmethods

**_syntax_**
thing.method() --> you have to add the paranthese, so that js knows that this is a method.

## Ternary Operator

syntax `<condition> ? <true : <false>;`

# JS Expressions and Values - liveles Niels Blom

## Statements

- all Javascripts code consist of 'statements'
- statement is een instructie aan de computer om iets te doen, om een bepaalde actie uit te voeren.
- statements can containt other statements
- statements almost always contain "expressions".
- expressions geven geen instructie aan de computer om wat te doen.
  console.log() is bijvoorbeeld een statement je zegt dat de computer iets moet doet.

## Values

values are simple expressions.
2021
"hello"
true
[1,2,3,4]
{age: 52, name: "john"}

## Expressions

- OVERAL WAAR JE CODE EEN WAARDE VERWACHT DAAR KUN JE EEN EXPRESSIE VOOR GEBRUIKEN.
- je kunt in plaats van een letterlijke waarde dus ook een expression hierin stoppen.
- expressions can be written anywhere where you would expect a value. Een expressie mag je overal neerzetten als het maar uiteindelijk een value wordt.
- each expression can be 'evaluated'
- expressions can contain variables

## E(valu)ation of expression

- Expression is a piece of code that resolves in a value; in other words becomes a value.
  Evaluation staat eigenlijk voor "waarde eruit halen".
- there is a specific order to **_how_** an expression is evaluated. check precedence operators mdn. de volgorde waarin de expressie in wordt geevalueerd.
- fix hard-to-read expressions with "temporary variables" with helpful names.
- functions are expression, dus een functie kan een functie teruggeven want het zijn dus ook values

[LINK PRECEDENCE OPERATOR MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

[link javascript info precedence - simpler version](https://javascript.info/operators#operator-precedence)

- a bit of code that calls a function is also an expression
  number(3 + 45);
  double(double(5));

 

 # Scope

variables that are defined in the function (where we use the let keyword)
they are scoped to that function. it's like a bubble.

function scope : 
>
>
>`const HelpMe = function () {`
>
> ` let msg = `I'm on fire`;`
>
>  `msg;`
>`}`
>
>
>`msg;//NOT DEFINED`
>


{ } block scope
in if conditions, loops and etc are all having block scopes when you create variables there.
so those variables only exist within the curly braces. 


### Lexical scope





# DOCUMENT OBJECT MODEL - where we learn how to combine html with js

When you use JavaScript to control the behavior of your Web Page, you interact with the DOM (Document Object Model).

BOM - Browser Object Model. The BOM IS THE ENTIRE WINDOW
DOM is part of the BOM and is inside the BOM. DOM IS THE ACTUAL WEBSITE DOCUMENT.

if you want to access something in the window (browser)
window.open()
window.close()
window.innerWidth() and many more

the DOM is a JS representation of a webpage.
it's a window through a webpage through JS.

changing the DOM by using JS.

## DOM manipulation

change text html attributes and even CSS styles. The DOM is a connection point between HTML document and Javascript structured representation of HTML documents. Allows Javascript to acces HTML Elements and styles to manipulate them. The dom is the complete representation of the HTML page.

The dom is automatically created as soon as the HTML page is load and stored in a tree structure where each HTML element is an Object. All the DOM elements has element Nodes.

DOM always starts with the Document (entry point in the dom), that is why we use document.queryselector. because it's available on the document. It's basically the
entry point to the DOM. first child element is usually the HTML element.

![image DOM tree](./document_tree.png);

Next HTML usually has two child elements: `<head>` and `<body>` (adjacent and siblings)

Inside head and body you have more childs.

misconception: The DOM is not a part of Javascript language. The DOM and DOM methods and properties are part of the web API's. these can interact with Javascript.

## DOM NODES

Nodes are anything within a HTML document.
node is every single broke down code in ur document. 
even text and comments are nodes! that differs froms Elements (these are only html elements). 

Nodelist returns everything
HTML collection returns only elements.



## GET ELEMENT BY ID

getElementsbyId() is a method.

`document.getElementById('page-banner')`
this grabs the node of id page-banner

you can also store it in a variable.
let banner = `document.getElementById('page-banner')`

storing this in variable.

## Get element by class

let titles = document.getElementByClassName('title') // hier geen punt voor de class name omdat je de method getElementByClassName gebruikt.

je krijgt dan en HTML collection terug. (lijkt op een array maar is het niet. titles[0])

### Quering the tag name

let list = document.getElementsByTagName('li');
you'll get a HTML collection prototype that looks like an array buts its not. you can access every element in this list by
variablename[0] , variablename[1] and etc. so variablename and then index.

### arraymethods on a HTML collection

you cannot do this. for example you cannot use forEach() on a HTML collection although it looks likes an array.

if you want to check if something is an array

console.log(Array.isArray(variablename)); (true or false)

### changing an HTML collection in an Array to use Array methods

let changingToArray = Array.from(variablename); 
console.log(Array.isArray(Array.from(variablename))); // output true

when it is changed in an Array you can use arraymethods for example looping through HTML collections. 

It contains DOM elements that are the same, whereas a nodeList can contain a variety of DOM elements. That's why querySelectorAll returns a nodeList but getElementsByTagName returns an HTMLCollection. Interestingly enough, forEach works on a nodeList but not an HTMLCollection.4

! **An HTMLCollection is not an Array!**

An HTMLCollection may look like an array, but it is not. You can loop through an HTMLCollection and refer to its elements with an index. But you cannot use Array methods like push(), pop(), or join() on an HTMLCollection.

## QuerySelector 

easiest way to query something in the HTML page
in jsquery ($('#wrapper'))

this will return one single element to us eventhough. 

if you want to use a collection of elements . querySelectorAll


# TRAVERSING (DOORKRUISEN) PARENT to CHILD ELEMENTS


# Traversing siblings elements

***next sibling***
variable.nextSibling (you'll get the node sibling)
variable.nextElementSibling (you'll get the HTML collection sibling)


***previous sibling***

variable.previousSibling
variable.previousElementSibling


variblename.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else';





## Devtools

use the devtool to test js and not too create js.
