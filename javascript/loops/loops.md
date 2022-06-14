# LOOPS

Loops are control structures/ control flows just like if else statement.

- automate repetitive tasks untill we tell it to stop

repeats parts of code for you so you dont have to repeat yourself.
it will check a certain condition for you and aslong that condition is valid it will keep iterating.

## While Loops

for the while loop we can only specify a conditon.

it will run WHILE this condition is true;

for the while loop we can only specify a condition.
it will run WHILE this condition is true

The while loop is more versatile because you don't have to specify a counter it only needs a condition. sometimes that is what we needed when its not depended on a counter.

if you need a loop without a counter then use while. If you don't know how many iterations you need. e.g how many times to roll a dice to get a 6.

when you loop over an array then you usually use a for loop since you know how many iterations you need.

**dictionary**
iterate = herhalen

## For Loops

for statement
for loops has a counter.
for loops keeps running while the condition is true.

first part --> initialization the counter of the loop / so the starting point;
second part --> condition; will keep running if the condition still holds true.
third part --> counter ; rep = rep + 1 --> rep++ (same shorthand)
i = i + 1 --> i++ (shorthand)

for (initialExpession; condition; incrementExpression) {
statement
}

> `for (let i = 0; i < 10; i++)`
>
> `{`
>
> `bounceball();` // statement
>
> ` }`

before you loop, you need to have a statement. this statement is the block of code you'd like to run multiple times. you can write anything you want here, even functions.

This condition statement evaluates either to true or false. If the statement evaluates to true, the statement runs.

When the statement has ran, JavaScript runs the increment expression and checks if the condition evaluates to true again. It repeats this process until the condition evaluates to false.

Once the condition evaluates to false, JavaScript skips the loop and moves on with the rest of your code

# Infinite loops

inifinite loops occur when the condition for your 'for' loops always return true.

# Looping through arrays

In practice you'd always loop through an array of a object.
When you loop (or iterate) through an array, you go through each item in the array once. To do so, you can use the length or the array as a condition: see example below

![image](./forlooparray.png)
alternative way to write for loop using negative increment, so a decremenent.
![image](./Screenshot%202022-06-14%20at%2012.19.19.png)

## For of loops : looping through arrays with 'for.... of'

The for...of loop is preferable to the standard for loop because it always loops through the array once. There’s no need to write array.length, which makes your code much easier to read and maintain.

![image](./Screenshot%202022-06-14%20at%2012.23.52.png)

## BREAK KEYWORD

- scopes
