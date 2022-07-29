# FUNCTIONS
functies zijn niks meer dan het opdelen van stukjes in code die je zo vaak kunt oproepen zoals je wilt.

## WHY FUNCTIONS?
- je kunt ze beschrijvende namen geven
- geen lappen code maar verschillende kleine blokjes met minder side effects en overzichtelijker om te debuggen omdat de code in kleine stukjes is opgedeeld.
- je geeft je functie het liefst maar een responsibility/ een taak die ze uitvoeren.



## Function declaration VS Function Expressions
one major difference between function declaration and expression is that with function declaration, you can invoke the function even BEFORE DEFINING IT. this is not possible with function expressions because the function expression follows a top-to-bottom control flow sequence.


### arrow functions

arrow functions are yet another notation of the function expression but are of a shorter syntax. the function() keyword is replaced by `() =>`

If the function body within the curly braces contains only **a single statement**, then the braces can be omitted. An arrow function with curly braces must include the return keyword.

return is a directive (instructie) that returns a value to the function after the code within it has been executed.


function serie of steps. think of it as a executing a RECIPE.

**_syntax_**

> `function functionName(parameter1, parameter2, parameter3) {`
>
> `// code to be executed`
>
> `}`

- functions can contain as many lines as you want. even one, or hundred.

- first you make a function :function definition so how it should work
- after you have created this function you can call this function.
- calling a functions executes the code of the function.

so first create/define it and then you can call it.

you tell the computer what to do and then you put a name on it. and then later you call the function, doesnt matter where.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

- mental model of a function
  make a box and press the button when u want to use the box

a functions runs and then it stops. like a microwave. you turn it on and after a while you are done.

- JONAS FUNCTIONS: there is no use to restore a value in a variable if all you do is return that value. so if you won't be doing anything with that variable
except for returning it immediately so e.g.

> `function calcAge1(birthYear) {`
>
>`const age = 2022 - birthYear;`
>
>`return age `
>
>`// but better in this case since you are only returning that value, no need to store it in a variable`
>`return 2022 - birthYear }`
>


## why use functions?

- to not repeat yourself; to avoid code duplication
- a series of steps has a name. bunch of steps with a name.
  having a name for a series of steps makes it clear what it do.

# Local variables

A variable declared inside a function is only visible inside that function.

> function showMessage() {
>
> let message = "Hello, I'm JavaScript!"; // local variable
>
> alert( message );
>
> }
>
> showMessage(); // Hello, I'm JavaScript!
>
> alert( message ); // <-- Error! The variable is local to the function

# CONVERSION AND COERCION (UDEMY JONAS)

Javascript can only convert to three types

console.log(String(23, 23)); now the first 23 is a string

- Numbers
- String
- Boolean

# FUNCTION ARGUMENTS

you need arguments just like you need to put something in the microwave to have purpose.

you get a microwave to heat different things. that is why we use arguments in functions. most functions will have arguments. e.g calculating the average. you need arguments for the function to know what to work with.

**arguments make functions work with different kinds of input.**

## ALL KINDS OF ARGUMENTS

giving too many arguments in a function is not a proper way to do. Numbers, stringsm arrays, objects, booleans.

## MENTAL MODEL FUNCTION

create a machine and make this machine work

## ARGUMENTS OR PARAMETERS

when u define the function the things inside the braces are parameters and also in the function

> const theQuestion = function (param1, param2) {
>
> }

when you call the function so like this `theQuestion(argument1, argument2)` those in the braces are called arguments. but it will be used interchangebly.

## DIFFERENT ROLES OF FUNCTIONS

Generally speaking, functions can be used to

1.do something 2. produce or calculate something 3. do and produce something

### Functions that do something:

A function that does something can do things like:

print something to the console
display an alert
change the background color of a webpage
add a button to a webpage
send an email
write to a database
Functions that do something often don't need a return statement. They just do something and then we're at the end of the function.

Sometimes we'll check inside of the function "do we need to do this?" if the answer is no we can use return to exit the function early. For example: if we need to empty a list in a webpage but the list is already empty we can use return to exit the function early.

### FUNCTIONS THAT PRODUCE SOMETHING

A function that produces something returns one or more values. It does not do something. Some examples:

- add two numbers
- calculate the income tax
- calculate the number of days between two dates
- if there's a student older than 50 in a list of student - objects
- find all the sweet fruits in a list of fruits
- transform a collection of countries so that they all have a unique id
- Functions that produce or calculate something always use a return statement. (Except some arrow functions, see note about arrow functions above)

### Functions that do both

Functions in this category both do something and produce something. It's a best practice to have little or no functions that fall in this category.

## FUNCTIONS: WHAT ARE METHODS?

- A method is a function attached to an object like the methods Math.random() .toUppercase() indexof() <-- these are built in methods

## RETURN STATEMENT

- return is the keyword
- return 'value'; <-- return statement.

- every function returns a value, if you don't explicitely return a value. you return **_undefined_**
- you can only use this keyword when you are inside a function.
- when used we create a 'return statement'
- you can only use the return (return statement when there are lines in it) in the function.
- the return statement stops the function when it is actually run.
- it goes back to where the function was called
- it returns a value
- we can return numbers, strings, booleans, arrays, objects, functions and more...
- save them and capture them instead of only printing.

### Return statement can be used for the following reasons:

- to extit a function (where we don't care about the return value)
- to exit a function and return a specific value

## MULTIPLE RETURN STATEMENTS

A function can have multiple return statements. The first one the program comes across is executed. With this in mind: it's possible to write a function in such a way that certain parts of the function are never executed.

## ARROW FUNCTIONS

arrow functions is good for simple one-liner functions with not that many codes. arrow functions doesn't have the 'this' keyword.

If an arrow function contains a single expression we can remove the curly braces and the return statements. Only do this with simple arrow functions.

! arrow functions have a so called implicit return. you dont need to use a return keyword but the function still returns something. !

an expression can be like a 'value'

## Methods

javascript also has a number of built-in objects
Math.random() object = Math and the math has a method attached to it called random() indexOf() and etc. .toUpperCase()

u can call methods on strings. all strings have methods attached to them one of them is toUppercase() method.

#### Every functions returns something: undefined

if we don't use the return statement in the function, the functions still returns something and that is 'undefined'. if you don't want to return something you get undefined. also if you use the return; statement without a value it will return undefined.

so you don't get undefined when you use a return statement with a value.

## Math Object

syntax Math.method(number)

there are 4 common methods to round a number to an integer:

- Math.round(x) Returns x rounded to its nearest integer
- Math.ceil(x) Returns x rounded **up** to its nearest integer
- Math.floor(x) Returns x rounded **down** to its nearest integer
- Math.trunc(x) Returns the integer part of x (new in ES6)
- Match.random(x) Returns a random number between 0 (inclusive), and 1 (exclusive):
- Math.abs(x); returns the absolute value of a number so -1 --> 1 , 4 - 10 = -6 (but gives back 6)
- Math.pow(x, y); x is base of the value expression, y is the exponent value of the expression.

there are more ..
like
Math.min() : used to find the lowest value in a list of arguments
Math.min(0, 150, 30, 20, -8, -200); // output -200

Math.max() : used to find the highest value in a list of arguments
Math.max(0, 150, 30, 20, -8, -200); // output 150

# FUNCTIONS : THREE WAYS TO WRITE THEM

----> see functions.js 296

the reason why we have more different ways to write javascript is because js is quite an old programming language.

There are 3 ways to write a function in Javascript.

1. function declarations

This style has a few drawbacks which are a bit technical. **_The most important drawback is that you cannot assign or re-assign a function declaration. Function declarations also cannot create anonymous functions._**

2. functions expressions
   we don't declare the function but we rather put the expression (function) in a variable.

> `const add = function (number1, number2) {`
>
> `return number1 + number2;`
>
> `}; `
>
> `add(5,6);`

This is the more modern way of writing functions. This style is common in modern JavaScript.

What happens here is two steps:

we have an "expression" that evaluates to a function
we assign the function to a variable (add in this case)
We can use function expressions to create anonymous functions. With anonymous functions we don't assign the function to a variable, but use it immediately in some way.

If you use a function expression and assign it: add a semicolon after the last }.

3. arrow functions : compact way of writing code and return is implicitely return. you cannot always use them

Whichever way you write a function does not influence how you call the function. That's always the same.

We can sometimes skip the curly braces and the return keyword when writing an arrow function to make the syntax even more compact. We can only do this if:

there's only one statement in the "body" of the function
we want the evaluated value of that statement to be the value the function returns. However: this shorter syntax can decrease readability and ease of debugging, so don't overuse it.


# SCOPES

Each new function creates a new scope, known as function scope. variables created within the function scope are not visible or accessible outside of that scope (codeblock)

everything within a codeblock {} is not accessible from outside
but global variables can be accessible globally



# HOISTING

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

It’s important to remember that only declarations are hoisted into memory during compile time, not assignments.

# JSON

Javascript Object Notation
lightweight data-interchange format
based on a subset of Javascript

**data types that we can use with json**

numbers
string: use double quotes
boolean
array []
object : unordered collection of key value pairs
null: empty value

# `NULL` AND `UNDEFINED` DIFFERENT - kyle webdev

similarity = both mean there is no value for this variable or thing you are trying to access.

null only comes up with you explicitely saying this thing has no value. return null; NULL MEANS IT HAS BEEN DEFINED BUT IT HAS NO VALUE. generally you set a variable to null and not to undefined.

undefined can come up when you for example hasn't defined something yet. or haven't defined a variable yet.
undefined it kind of the default. UNDEFINED MEANS IT HASN'T BEEN DEFINED (YET). IT JUST DOESN'T EXIST YET.

# EXPRESSIONS

expressions always results in value;
if it's something you can't put in a console.log() then it is probably a statement. for exmaple `console.log(const a)` , `console.log('if (a === b ))`

# FUNCTIONS CALLING FUNCTIONS

- inside of a functions you can almost write any kind of code so you can call a function in a function. there can be more nested functions inside a function
- as mucht as you want or need inside of a function BUT you shouldnt put too much of code otherwise its hard to read.
  1-30 lines (say's Niels).

it's good practice to let a function do only one thing. this is also k nows as the 'single responsibility principle'
if a function does more than one thing it could be a goopd idea to split it up.

> `const scream = function () {` 
>
> ` console.log("Aaaaaaa!");` >`};`
>
> // Calling scream outside of a function` `scream();`
>
> // Here we call scream inside of a function
> `const makeNoise = function () {` > `scream();`
>
> `};`
>

`makeNoise();`


## FUNCTIONS CALLING OTHER FUNCTIONS - JONAS

# DEBUGGING

If you have a lot of functions calling each other it can be a little confusing what happens when. To help figure this out you can use console.log statements. see functions.js


// 2. VAT CALCULATIONS

// const basePriceVat = function (basePrice, vatPercentage) {
//   const basePriceCalc = basePrice; 
//   console.log(basePriceCalc);
//   const vatCalc = basePriceCalc * (vatPercentage / 100);
//   console.log(vatCalc);
//   const priceAndCalce = basePriceCalc + vatCalc;
//   return priceAndCalce
// };

// console.log(basePriceVat(100, 21));
// console.log(basePriceVat(20, 10))


## Recursion

functions roept zichzelf aan

## Array.map()

Instead of manually iterating over the array using a loop, you can simply use the built-in Array.map() method.

The Array.map() method allows you to iterate over an array and modify its elements using a callback function. 
The callback function will then be executed on each of the array's elements.

Definition and Usage. map() creates a new array from calling a function for every array element. map() 
calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.

## reduce ();

The array reduce() is a built-in JavaScript method used to apply a function to each element in the array to reduce the array to a single value. The reduce() method accepts two parameters, the total and the current value.

It is similar to both Javascript map() and Javascript filter(), but it differs in the callback arguments.

The callback now receives an accumulator (it accumulates all the return values. Its value accumulates a previously returned accumulations), a current value, a curren

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

or

`array.reduce(callback[, initialValue]);`



## function methods
 a function that is a property of an object is called its method
 a method is a function attached to an object. javascript has many built in objects like Math, 

 .random() is the method of the Math Object.

 Math.random() is also a function but we call it method.

 const greetings = "hello";
 greetings.toUpperCase() < --- to uppercase is a method a function that is attached to an object. strings like greeting are also objects. 