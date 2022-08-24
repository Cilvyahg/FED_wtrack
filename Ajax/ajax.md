## INTERNET WORKS FROM THE FRONT END POINT OF VIEW

Domain is same as IP address

when you enter a domanname the browser will call a DNS server and that will translate it into an IP address and send back to the browser

and then the browser can actually make that request to the server which has the IP address and the server will send it back to the browser



### HTTP request and responses code

browser can be your Iphone, chrome

server has an ip address

you connects to the server --> request and responses

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
the tracerout is a command line utility that used to show the exact route the data packets has taken from the sender  to the destination.

this way you can find bottlenecks for example find where a connection to a server might be lagging(achterblijven). 

traceroute differs from the ping that is pings each router on its way to the destination


routers read ip addresses. routers routes data from one network to another based on their IP address. a router is essentially a gateway for its network.


## URI URL URN

difference URI and URL

A URI identifies a resource either by location, or a name, or both. A URI has two specializations known as URL and URN.

## HTTP Protocol Status Codes
the internet is made out of clients(browser) and servers
whenever you go to a website you are actually acccessing their server.
for example the facebook server

you make the request and the server responds

status codes let us know if the request was succesfull or not
there are kinds of HTTP Status Codes

* 1xx - informational
* 2xx - succes
* 3xx - redirection request
* 4xx - client error. any 400 code is a client error
* 5xx - server error - the client made a good request but something is wrong with the server





