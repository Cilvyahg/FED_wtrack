# Javascript is single threaded

which means it can only do one thing at a time. js can run one line of code at one time. 

browser comes with web API's. we can see these as browser functions. 

The browser does the work. js is not the same as the browser. js is a language. browser is like firefox and etc. browser is capable of doing things that js can't. The browser takes over and reminds js when it's time to do certain things. this happens with doing 'request' , settime out and etc. 

so for example with setTimeOut(function, time) --> js is not settting A TIMER or keeping TRACK of how MANY SECONDS have gone by.
javascript is not sending a request to the API, it's the browser that is doing it. it's given to the browser.

for the setTimeOut() the browser will take the callback function after the amount of seconds has elapsed it will put on the callstack.

setTimeOut is something the browser will do for Javascript. the browser is setting a timeout and js is free to continu with the code. JS is not keeping the time. JS is not making a request


## HTTP METHOD
POST : create -- http post method is normally used to create one resource
meestal met een method: "POST" request die je meegeeft aan fetch()
 


GET : read -- enkele of meerdere resources opvragen. bijvoorbeeld alle personen of een enkele persoon
PUT : update -- ik heb een resource en die wil ik 'updaten'/replace 
DELETE : delete -- deze resource moet weg. en je stuurt geen body mee, want doet hoef niet. 

**postman** check in postman altijd of het verwijderd, geupdate en gepost is middels GET request nadat je de andere request hebt gedaan. Alles wat je in POSTman kan doen kun je in javascript doet. in postman experimenteer je hoe er wordt gecommuniceerd met de api, of er wel gebeurd wat je wilt en etc. 

met api's praten. met restfull api's zijn er vaak 'resources'. dit zijn entities waar de api je mee laat praten middels een endpoint van een url (zoals url met movie resources, url met pokemon dieren en etc. ) als je op een bepaald endpoint zit kun je een bepaalde request doen op die informatie die je ontvangt van de endpoint.


### SetTimeOut()

setTimeout is a JavaScript function that calls a function after a set amount of time.

```
setTimeOut(reference function, time, param1, param2) is a method
```

```
const makeHomeWork = (course, callback) => {
    log(`Okay I am going to do my ${course} homework now`);
    callback();
  // given to the browser and put it on the callstack after 1 sec.
};


const doneWithHomework = function () {
  log(`Look mom and dad i'm done with home work`);
};


setTimeout(makeHomeWork, 5000, 'math', doneWithHomework);
// if you want to pass in parameters do it after the time ms and not as a invocation of the function//

```

- what you get returned when logging setTimeOut() is the timeOutID. this is the identifier of the timeout you want to cancel. This ID was returned by the corresponding call to setTimeOut()

- the value of an setTimeOut is the timeoutID

## HTTP Verbs

GET - something we read
PUT
DELETE - delete something via an api

## HTTP HEADERS

key value pairs of information
header request
header response

some API's are set in a way that we actually need to send custom headers\
e.g `https://icanhazdadjoke.com/api`

## JS Callback

synchronous ==> one thing at a time .. wait until one task is done
asynchronous ==> a task is executed but you don't want to wait until it's totally done in order to move to the next task

for example when you want to get your data, but you don't want js to wait until you get your data.

A callback is a general JavaScript concept: it is simply a function that is only executed after another function is carried out.
What is a Callback?
Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

## LIVE LES ASYNC AWAIT / PROMISES

Promise.all() method
Promise.all() maakt eigenlijk één Promise
geef je een lijstje van Promises. en wat promise.all() doet en gaat wachten tot al die promises resolved zijn.

## fetch

- fetch() is a buildin method
- a fetch returns a promise
- an easy logical way to fetch resources (data ophalen)
  asynchronously across the network
- op javascript gaat alles heel snel, maar op je netwerk gaat dit veel langzamer
- fetch is een asynchrone functie. we krijgen dus ook een promise terug.
- standaard method bij fetch is GET. method = "GET". (by default);

- ophalen is method = "GET";

als je een method = "POST" request doe dan geef je data mee

JSON.stringyfy() je data in een json string zetten zodat de server het kan lezen. 

header van je HTTP request. je browser stuurt headers mee en response stuurt header terug

een async geeft een promise terug

## promise

kan uiteindelijk lukken en of mislukken
Promise object

callback functie: een functie die je meegeeft aan een andere functie,maar ga maar deze functie aanroepen.

---

if you want to use await in your function, your function has to be async.
await always returns a promise.

## JS PROMISES

in javascript promises are a objects that represents an eventual either failure or success of some task that takes time. Promises are objects that we can attach two callback functions to.

A promise is an object that may produce a single value some time in the future either a resolved value or a reason that it's not resolved (e.g. a network error occured). promise users can attach callbacks to handle fulfilled value or the reason for rejection.

How Promises Work
3 states of a Promise are;
A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
Rejected: onRejected() will be called (e.g., reject() was called)
Pending: not yet fulfilled or rejected

when the promise is not resolved or rejected the value of the promise status is still pending, just like in real life.

The code does not directly or immediately return a value. Instead, **it returns a promise** that it will eventually provide the value at a later time. A promise in JavaScript is asynchronous, meaning it takes time to resolve or finish.

The JS engine also doesn’t wait around doing nothing – it starts executing other parts of the code, pending (in afwachting) the returned value of the promise.

# what to do when the promise is resolved or rejected?

what needs to happen when the promise is fulfilled (resolved) or rejected?
.then() method will run if that promise is resolved.

```
 .then(function(){
/// this code will run when the promise is resolved
});

OR

.then(() =>> {
  // this code will run when the promise is resolved.

})
```

### New Promise

when we create Promise we pass in a function with two parameters that are functions. these two parameters are resolve and reject

## SOME() AND EVERY()

returns a boolean

## API Authentication (part 1);

Authentication --> who am I
Authorization --> what am I allowed to do?

To regulate this there are API keys. This is a key that you send when you make a request (GET POST DELETE PUT PATCH) and that grants you access. when the api key is invalid the server can simply block the access to the API.

you add the API Key in each header or URL in each of your request and then you are able to access the api 200 ok

endpoints --> entrances of the API

You can also withdraw what you want from any vending machine with a euro at the FEBO. However, with an API, the administrator can determine that you only have access to certain endpoints with your API key, or that you can submit a GET request to certain endpoints, but do not have POST request access.

There are several places in your request where an API key can be expected. Do you remember the request diagrams?

Your API key can end up in these places:

Authorization Header (in the header)
Basic Auth
Body Data (in the body)
Custom Header
Query String (in the url)

## API authentication : Token based authentication

access token contains a string with encrypted data of the user

The main distinction between these two is: API keys identify the calling project — the application or site — making the call to an API. Authentication tokens identify a user — the person — that is using the app or site. they contain more data about the user

## Spread operator

spread operator has different function depend on where it it used

(...array) split an array into indiviual numbers.

...spread

using spread in function(a,b,c,d);

spreading the entire array into different arguments otherwise it would be seen as one argument.
each element is passed along as one argument.

**rest operator**

(...rest) operator turn is into an array;

we put the (...rest) in a parameter of a function
it collects all remaining arguments into an actual array.

## WTF is JSON?

javascript object notation. json() is a way of parsing data into something more readable data.
to ask javascript to make it readable javascript object

`JSON.parse()`
parsing json string and turns it into a javascript object -- for us easier to read

javascript object turning into a json.
`JSON.stringyfy()`

used to be XML ajax
ajaj is what we most use today (json)

json is a way of formatting data it's based on javascript objects (key: value)
but it's a little bit different because every `key` has double quotation
`"squadName" : "X-men"`

possible values in json :

- object
- array
- string
- number
- "true"
  -"false"
  -"null"

## fetch() is a promise so we can attach the methods .then() and .catch() to it

fetch() is a commonly used method to handle promises in a browser.

```
fetch("https://swapi.dev/api/people/1") // RETURNS A PROMISE if you look into the console.
  .then(function (response) {
    log(`RESPONSE`, response)
  }).catch(err => {
    log(`ERROR`, err)
  });
```

it returns a response object with key value pairs (statuscode: value, headers, body)

## steps

- with fetch() you are going to send a request to the url. `fetch("url")`
- when you console log this you will see that the fecth() method return a promise
- the returned promise will maybe resolve/fulfilled or rejected
- then we make it to the .then() callback when the promise is resolved.
- the promise will be resolved as soon as possible, therefore it has a incomplete body `body: readablestream`. the body is not parsed yet that is why we need to use the json() method (a new json() request) on it
  in the response (when you look in the console log)
- that is why we call json() read on this response. the json() is a promise itself
  so that is why we can chain the .then() method again

- if you want to handle errors in a asyn function you need to wrap the resolves part in a try {}

and the catch()

## ASYNC AND AWAIT

async in front of the function

- async functions always returns a promise

**await**
await will pause the execution of the function, waiting for a promise to be solved.

## throw || return

throw new Error()

the throw statement lets you make custom errors

## hoe loopt javascript door een programma?

js is single threaded = kan maar een ding tegelijk doen

hoe kan je js asynchrone dingen laten doen?

callstack
call zijn de functie calls

functies worden op de callstack gezet.
callback worden in de message que gezet.

**event loop**
event loop houdt stack en queue in de gaten, processed message wanneer stack leeg is. gooit de callback functie op de stack wanneer de stack dus leeg is.

fetch returned a promise en is dus asynchroom.

### json()

The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

## try and catch statements

zegt meer iets over een promise

### throw

we are going to be throwing an exception
you are throwing an error, stop the program from running.

## ASYNC

als je een functie async maakt, return je een promise. await keyword can only be used with a async functie.

_await_ keyword. javascript herkent dat dit speciale code is en dat dit tijd gaat duren dus de web api gaat hiermee aan de slag. dus javascript denkt ik ga verder met mijn code, ga jij maar verder en als jij klaar bent laat het mij weten.

await deze Promise .. je kan niet bijvoorbeeld doen await console log. je kan niet wachten op een log functie

one of the traits of async functions is that it the return value is a Promise. that is why we can use .then() .catch() method.

await only works inside async functions. it can be put in front of any async promise-based function to pause your code that until the promise fullfills then return the resulting value.

async zonder await maakt een functie niet asynchroon

### wanneer gebruik je await en wanneer niet?

(denk na over user experience == gebruikerservaring, voorkomen van lay-out shifting)

je DOM (je pagina) alvast klaarmaken voordat je data er is.
bijvoorbeeld met video's al de thumbnails laden voordat de video echt wordt geladen (dit omdat het lang duurt). maar om de pagina er wel goed uit te laten zien wel al ervoor zorgen dat de thumbnails geladen zijn. dus de placeholders al tonen. en daarna met de dom de data in de dom zetten.

bijvoorbeeld zoals bij youtube (als je naar youtube gaat zie je eerst grijze placeholders en daarna duurt het even voordat de filmpjes worden geladen). 



## fetch('url') netwerk request - met een api praten

- default http method request is default. als het een andere methode is moet je deze method zoals POST wel meegeven aan de fetch request aan de api. 

```
fetch('url' , {
  method: "POST",
  headers: {
    "Content-type": "application/json", <--- hoort bij een api 
  },
  body: JSON.stringify({
    title: "My post",
    body: "this is a new post",

  }),
}
```



ophalen (haal op)
fetch() - is een asynchrome functie, dat is ook waarom we een promise terugkrijgen.

- geeft een promise terug. Een promise is niks anders dan een object dat zegt 'ik ben nog niet klaar, ik ben nog niet klaar, ohja nu ben ik wel klaar'.
- maar omdat je await doet dan wacht tie tot de promise fulfilled it en krijg je de response terug.
  in-built javascript functie
- meestal gebruik je fetch() methode met een API
- gebeurt asynchroom

## promise

promise is eerst een belofte en daarna een resultaat

### async funtie always returns a promise

als je await gebruikt moet je een async functie maken met daarbinnen de await. 


# header, body, method 

wat er moet worden meegegeven bij een post request lees dan goed de documentatie van de API, daar staat wat je bijvoorbeeld moet toevoegen aan de header zodat de server het ook goed kan ontvangen en terugsturen. 

kijk en probeer in postman uit met de headers en etc om te zien of je wel hetgeen terugkrijg van de api wat je wilt

# JSON methods

JSON.stringify --> deze methode zorgt ervoor dat je 
 
### finally {}
 The finally block will always execute before control flow exits the try...catch...finally construct. It always executes, regardless of whether an exception was thrown or caught.