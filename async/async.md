# Javascript is single threaded 
which means it can only do one thing at a time.

The browser does the work. js is not the same as the browser. js is a language. browser is like firefox and etc. browser is capable of doing things that js can't. The browser takes over and reminds js when it's time to do certain things 

so for example with setTimeOut(function, time) --> js is not settting A TIMER or keeping TRACK of how MANY SECONDS have gone by. 
javascript is not sending a request to the API, it's the browser that is doing it. it's given to the browser. 

for the setTimeOut() the browser will take the callback function after the amount of seconds has elapsed it will put on the callstack. 

setTimeOut is something the browser will do for Javascript. the browser is setting a timeout and js is free to continu with the code. JS is not keeping the time. JS is not making a request


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








