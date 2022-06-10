# FUNCTIONS 
function serie of steps. think of it as a executing a RECIPE.

***syntax***
>
>`function functionName(parameter1, parameter2, parameter3) {`
>
>  `// code to be executed`
>
>`}`
>

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

## why use functions?
- to not repeat yourself; to avoid code duplication
- a series of steps has a name. bunch of steps with a name.
having a name for a series of steps makes it clear what it do.


# Local variables
A variable declared inside a function is only visible inside that function.

>
>function showMessage() {
>
>  let message = "Hello, I'm JavaScript!"; // local variable
>
> alert( message );
>
>}
>
>showMessage(); // Hello, I'm JavaScript!
>
>alert( message ); // <-- Error! The variable is local to the function
>

# CONVERSION AND COERCION (UDEMY JONAS)
Javascript can only convert to three types

console.log(String(23, 23)); now the first 23 is a string

- Numbers
- String
- Boolean

# FUNCTION ARGUMENTS
you need arguments just like you need to put something in the microwave to have purpose. 

you get a microwave to heat different things. that is why we use arguments in functions. most functions will have arguments.  e.g calculating the average. you need arguments for the function to know what to work with. 

**arguments make functions work with different kinds of input.**

## ALL KINDS OF ARGUMENTS

 giving too many arguments in a function is not a proper way to do. Numbers, stringsm arrays, objects, booleans. 

## MENTAL MODEL FUNCTION
create a machine and make this machine work


## ARGUMENTS OR PARAMETERS
when u define the function the things inside the braces are parameters and also in the function 

>
>
>const theQuestion = function (param1, param2) {
>
>}
>

when you call the function so like this `theQuestion(argument1, argument2)` those in the braces are called arguments. but it will be used interchangebly.



## FUNCTIONS: WHAT ARE METHODS? 
- A method is a function attached to an object like the methods Math.random()  .toUppercase() indexof() <-- these are built in methods

## RETURN STATEMENT
- you can only use the return (return statement when there are lines in it) in the function.
- the return statement stops the function when it is actually run. 
- it goes back to where the function was called
- it returns a value
- we can return numbers, strings, booleans, arrays, objects, functions and more...
-  save them and capture them instead of only printing. 

## ARROW FUNCTIONS
arrow functions is good for simple one-liner functions with not that many codes. arrow functions doesn't have the 'this' keyword. 




