
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

*arrow up*
- reuse your old command

*history* 
- history command you get history form the commands. it works different on all shells and OS.

**autocompletion**
tab 
e.g. cp an(tabcommand) and the name of the file will be autocompleted

**kind of termainal applications on macOS**
- built-in terminal
- macOS:iTerm2 >> is very customazible 
- Hyper


**where am I  ?** 
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
rmdir  (remove directory)
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
lalallalalal gtest

## rename a file 
mv 

## VSCode
first select the folder/file
code . (it means open vscode)


## Node js

node js is a runtime not a programmer language. 


# <span style=color:green> Javascript </span>
we use javascript to add behaviour

difference between javascript and ecma script

statement is a piece of code that expresses an action that needs to be carried out. alle js code should be terminated by semicolon ;

**seperation of concerns**

seperate our HTML (content)
from Javascript (behaviour)

**variables**


## Arrays

- arrays zijn objects ; objecten zijn altijd true als je naar hun truthiness kijkt.
- you can equip properties/eigenschappen like (arrayvariable.length)






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
























