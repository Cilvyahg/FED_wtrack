# FUNCTIONS
function serie of steps. think of it as a executing a RECIPE.

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

