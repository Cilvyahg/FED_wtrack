# Javascript is single threaded 
which means it can only do one thing at a time.

The browser does the work. js is not the same as the browser. js is a language. browser is like firefox and etc. browser is capable of doing things that js can't. The browser takes over and reminds js when it's time to do certain things 

so for example with setTimeOut(function, time) --> js is not settting A TIMER or keeping TRACK of how MANY SECONDS have gone by. 
javascript is not sending a request to the API, it's the browser that is doing it. it's given to the browser. 

for the setTimeOut() the browser will take the callback function after the amount of seconds has elapsed it will put on the callstack. 

setTimeOut is something the browser will do for Javascript. the browser is setting a timeout and js is free to continu with the code. JS is not keeping the time. JS is not making a request



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

* what you get returned when logging setTimeOut() is the timeOutID. this is the identifier of the timeout you want to cancel. This ID was returned by the corresponding call to setTimeOut()

* the value of an setTimeOut is the timeoutID

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

JSON.stringyfy() 

header van je HTTP request. je browser stuurt headers mee en response stuurt header terug

een async geeft een promise terug


## promise 
kan uiteindelijk lukken en of mislukken
Promise object 

callback functie: een functie die je meegeeft aan een andere functie,maar ga maar deze functie aanroepen.

--------------

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