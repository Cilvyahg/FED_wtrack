## INTERNET WORKS FROM THE FRONT END POINT OF VIEW

Domain is same as IP address

when you enter a domanname the browser will call a DNS server and that will translate it into an IP address and send back to the browser

and then the browser can actually make that request to the server which has the IP address and the server will send it back to the browser

### HTTP request and responses code

browser can be your Iphone, chrome

server has an ip address

you connects to the server --> request and responses
domain name will converted to an IP address (DNS)


client make the request and the server responds.
you make this request using the HTTP protocol (standards that we all agreed to).


Protocols :
HTTP
FTP 
DNS and etc

## HTTP Protocol Status Codes
Status codes let us know whether the request was a succes, a failure or something in between.


**Assets requests**
asset (is another request)
assets are like CSS file, js file, image
does another request from the browser to the server

is faster if you put all javascript files in one file otherwise the browser has to keep doing request for each one.

## Requests

request two things
headers
and it may or may not a body

![image](./Screenshot%202022-08-24%20at%2012.31.14.png)

GET request -- visit twitter without logging in, so just visiting
POST request -- when you are creating something like a tweet, or when you log in
PUT request -- update your tweet for example
DELETE request -- javascript will send a delete request to the server to for example delete the tweet

user-agent

When you are accessing any page on the internet or interacting on a website (e.g. clicking a link), you’re often requesting a whole bunch of documents from that server. Maybe it’s HTML, maybe it’s CSS, maybe it’s an image, a PDF file—whatever it is, the basic relationship stays the same: you make a request, the server responds.

## AJAX

refers to making requests on the page while it's already been loaded or after it's been loaded, making request behind the scenes.

## PING command

stands for packet internet groper. the ping sent data packets to the server and the server repplies with sending it back or other replies. see below.

with the ping you can test ::

- Host/Server reachability
- Internet Connection
- Network Interface Card
- To Test DNS issues

it will send from the terminal packets to the server, these are called echo request and the Server will echo reply request. if you get a reply it means everything is good.
It means that there is general connectivity between your computer asnd the destination (so the server that was pinged to)

echo reply from the server :

- Request timed out <-- this can mean that the server is powered off or blocked by a firewall
- Destination host unreachable <-- gateaway can't be found
- packett loss can due to serveral reasons (network congestion, bad cabled and etc)

**below I pinged 5 times to Udemy.com server** ::
it also gives us the time how long the trip took for the data packets to go to and from the destination (ms)

```

Last login: Wed Aug 24 12:59:31 on ttys003

cilvya@Cillie-codes-MBP ~ % ping -c 5 udemy.com
PING udemy.com (104.16.65.85): 56 data bytes
64 bytes from 104.16.65.85: icmp_seq=0 ttl=58 time=18.621 ms
64 bytes from 104.16.65.85: icmp_seq=1 ttl=58 time=19.484 ms
64 bytes from 104.16.65.85: icmp_seq=2 ttl=58 time=19.041 ms
64 bytes from 104.16.65.85: icmp_seq=3 ttl=58 time=18.264 ms
64 bytes from 104.16.65.85: icmp_seq=4 ttl=58 time=18.449 ms

--- udemy.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 18.264/18.772/19.484/0.439 ms
cilvya@Cillie-codes-MBP ~ %


```

#### Testing your network interface card

this is called a loopback test

ping localhost (in terminal)

if you get a reply it means your network card is working properly

is a simple tool to trouble shoot network. if we reserve a reply then its a good sign it means there is a network connectivity

ping is a simple way to send network data to, and receive network data from, another computer on a network. It is frequently used to test, at the most basic level, whether another system is reachable over a network, and if so, how much time it takes for that data to be exchanged.

ping 8.8.8.8.8 if you are pinging to another server but have troubles with the DNS to check if it's because of the internet network or not. if the ping test from google is positive it means there are some DNS issues

## TRACEROUTE

The Internet is a global network of routers
the tracerout is a command line utility that used to show the exact route the data packets has taken from the sender to the destination.

this way you can find bottlenecks for example find where a connection to a server might be lagging(achterblijven).

traceroute differs from the ping that is pings each router on its way to the destination

routers read ip addresses. routers routes data from one network to another based on their IP address. a router is essentially a gateway for its network.

## URI URL URN

difference URI and URL

A URI identifies a resource either by location, or a name, or both. A URI has two specializations known as URL and URN.

A URI is a standard method for identifying resources on the internet by their location, name, or both. URN and URL together are known as URI.

![image](./Screenshot%202022-08-24%20at%2016.24.51.png)

## HTTP Protocol Status Codes

the internet is made out of clients(browser) and servers
whenever you go to a website you are actually acccessing their server.
for example the facebook server

you make the request and the server responds

status codes let us know if the request was succesfull or not
there are kinds of HTTP Status Codes Blocks: 


- 1xx - informational -- can also mean it's still processing and not yet completed the request

- 2xx - succes -- THIS IS WHAT YOU WANT. 200 means perfect
- 3xx - redirection request
- 4xx - client error. any 400 code is a client error
- 5xx - server error - the client made a good request but something is wrong with the server. 


Code 301 --> permanently moved to a new URL - 301 redirects instead
code 302 --> link equity is not passed


403 --> forbidden
404 -- not found
410 --> this page is gone 
429 --> user send to many requests

500 --> usually unexpected error from the server
503 --> is a expected error for example u havent paid the bill to the  webhost 
bot are crawling as well 



## HTTP Headers

HTTP verbs

GET request - get or retrieve information
PUT
POST request - when we are sending something
DELETE

## USING POSTMAN

Postman is een API Client


what is an API
Application Programming Interface
api faciliteert de communicatie tussen twee applicaties.

REST Api
dus een api die op een webserver staat en gebruikt HTTP request om te communiceren.

**HTTP Requests**

GET PUT POST DELETE
(CRUD) = Create Read Update Delete

GET = Read
PUT = Update
POST = CREATE // aanmaken van data
DELETE = DELETE

## Callstack

Last in .. first out ... 
like a stack of books .. when you remove something from the top. you will move the thing that was added most recently.

## REST
Representation State Trasfer
it's just a fancy way of saying Create, Read, Update en Delete.


# POSTMAN

HTTP Requist builder 
- Method
- Address
- Body
- Headers
- Cookies


# Async 

at any given point in time, that single JS thread running at most one line of js code. One thing is run at a time.

javascript is a one threaded. 


## callstack

callstack is the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions. How JS 'knows' what function is currently being run and what functions are being called are from within that function

a stack of books, or stack of plates .. the last thing that was added will be the first thing out. you grab from the top. that is how the callstack works.

function call that are added latest will be finish the first
because the other functions are waiting for the value of the other function that afe being called

## Async callbacks

js is not the same as your browser. but the browser itself (safari, firefox) are usually writing in C++ .. the browser takes over and reminds js again like okay its ur time again. the browser handles it.


when all the synchronous stuff finish first then the asynchronous stuff run




## OKAY BUT HOW? 
* browsers come with Web API's that are able to handle certain tasks in the background (like making requests and setTimout(), setInterval). tasks that takes time. the browser is capable doing that in the background. 

js hands the settimeout of the browser. like hi browser can u set a timer for 3 seconds. and js can go on with the code. the browser takes it and after the set seconds in the timeout function the browser will put the function to the callstack. so js doesn't keep track of time but the web api's on the browser. 



 **The JS callstack recognizes these Web API's** functions and passed them off to the browser to take care of

* Once the browser finishes those tasks, they return and are pushed onto the stack as a callback;

## PROMISES
promise is asynchronous::

A promise is an object representing the eventual completion or failure of an asynchronous operation.

Promise is just an object. Usually is a way promosing a value that you may not have at the moment. 

the Promise function takes two parameters (which are functions).
the two parameters are resolve, reject
// resolve()
// reject()

if we do neither the promise will have the status of pending


syntax: we create a Promise by `new Promise`

```
const willGetYouADog = new Promise(function (resolve, reject) {
  resolve();
  
});

```

#### .then() and catch() method
every Promise has a .then() method
and a .catch() method . these will run automatically 
the catch and then methods accepts a callback function. 




this function will return a Promise
```
const makeDogPromise = () => { // this function will return a promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000); // this promise takes 5 seconds before its resolving or rejected
  });
};

makeDogPromise()
  .then(() => {
    log('Yay we got a dog!!!'.toUpperCase());
  })
  .catch(() => {
    log(`sad face no dog :(`.toUpperCase());
  });
```

## Hoisting

var is hoisted. 
let and const variable declaration are not hoisted.


function statements are hoisted. so that is why its better to use  function expressions. function expressions are not hoisted

 so functions can be invoked/called before they are declared.
 

 # Asynchronous

setTimeOut(function, time);

the setTimeOut() method calls a function (callback function)

## fetch API
- internet explorer doesn't support fetch API
- supports promises!
- fetch() is a method
- fetch gives a promise back\

the catch callback from the fetch is not gonna run because you get a statuscode of 404 or another code.
the catch call back it will only return a catch for example if the network doesnt work. 


