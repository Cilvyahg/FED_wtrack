# Array & Array Methods

###### what are arrays (recap)

The array object enables storing a collection of multipele items under a single variable name. In javascript arrays arent primitives.

(what are primitives(datatypes again?)
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

*string
*number
*bigint
*boolean
*undefined
*symbol
\*null )

- to get the last index of the array arrayName.length -1

## Array Methods

array methods have callbacks

the .filter() method --> filters some conditions if it's true you will get a new array. een filter functie moet altijd een boolean teruggeven.

It won't change the old array. good usecase when you for example want to filter 'the highest ranking things, old items, new items (like a year of the movie)

the .map() method --> allows you to take one arrays and converts it into a new array. it makes a new array for us. we map it to a new copied array. The map() method creates a new array with the results of calling a function for every array element. The map method allows items in an array to be manipulated to the user’s preference, returning the conclusion of the chosen manipulation in an entirely new array. For example, consider the following array.

.map() --> transformeer je een array van dingen naar iets anders. eerst 10 eitjes en na de map heb je 10 omeletten.

.filter()
The filter() method creates an array filled with all array elements that pass a test implemented by the provided function. The filter method is well suited for particular instances where the user must identify certain items in an array that share a common characteristic.
Filter let you provide a callback for every element and returns a filtered array.

While both the .filter() and .map() methods will return a new array, .filter() will create a new array of array elements that pass a given test while .map() will create a new array made up of the results of calling a function on each array element.

the .find method --> true or false .. return the first item that it finds in the array that is true.
it will not return a new array .

find method return the FIRST ITEM and won't give back a new array. The Filter method will return all items that are true to the condition.

the .forEach() method --> looks like a for loop but takes a functions. it's the same as for .. of
for ... of is easier.
The forEach method allows you to execute a function by iterating through each element of an array. It's important to note that the **forEach() method doesn't return anything**, and thus, if you try to get the return value of the forEach method, you will get undefined .

the .some method -- it just check if ONE ITEM in the array hold at least the condition TRUE OR FALSE. for example if there is a price below 50 dollars. if so than it will return 'true' if not then it would be 'false'

the .every() -- it just if every items in the array holds a certain condition. so if every item is for example below 100 dollars. if not that it returns 'false' if all items in the array are below 100 dollars then it will return 'true'

the .reduce method -- does an operation .. accumulating. 





the .includes() -- does it include a certain value? like 2? and you can also give a index number as parameter.

## Array.sort()

Telling 'Array.sort' how to sort: compare functions maken. dan bepalen wij als programmeurs hoe er wordt omgegaan met strings, booleans en etc. dus wijzig je de default behavior.



dus de sort() methode veranderd ook zijn originele array, en geeft ook het nieuwe gesorteerde array terug


**default behavior** aan de sort() kun je ook een functie meegeven.

default sort dus, alles wat ik binnenkrijg zie ik als een string (UTF8 encoding) dus wordt het gesorteerd als [1 15 2 24 3 38] dus de string 1 hoort bij elkaar, de string 2 hoort bij elkaar. 

compare functie 
kijkt naar twee en vergelijkt met elkaar 

## ARRAY METHODS: MUTABILITY

An important distinction between array methods is: "mutability" = veranderlijkheid. "Mutation" or mutation of an Array means: changing an array.

Depending on which array method you use, there are 2 options:

_Option 1_: the array method mutates the current array.
_Option 2_: The array method makes a copy and returns the modified copy. Leaves the original array unmodified.

Some array methods change the original array (and the items in the array). **Other methods make a copy of the original array, so they don't change the original!**

For example, the _.map()_ method makes a copy, iterates through all the items in the array, and returns a new array (so it doesn't mutate the original array). The _.push()_ method adds something to an array and **mutates** the original.

array methods that mutates are

- .copyWithin()
- .fill()
- .pop()
- .push()
- .reverse()
- .shift()
- .unshift()
- .sort()
- .splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

_syntax_ Array.splice(start, removeCount, newItem, newItem, newItem, ...)

**...arrayName1, ...arrayName2**
1.1 Merge using the spread operator
If you want to know one but a good way to merge arrays in JavaScript, then remember the merge using the spread operator.

Write inside the array literal two or more arrays prefixed with the spread operator ..., and JavaScript will create a new array with all these arrays merged:

###### Array.isArray()

syntax Array.isArray(value)
returns a boolean; true or false

**reduce() method**

**_return_**
when you don't give a return type and you want to do something with it later on, it's not stored in memory anywhere, only stored locally in function.

# Scoping : WHERE CAN WE AND WHERE CAN WE NOT ACCESS A CERTAIN VARIABLE?



How our programs's variables are organized and accessed. where do variables live? 
OR where can we access a certain variable, and where not?

three types of scopes
* Global Scopes / globale bereik
* Function Scope / local scope / functie bereik
* Block Scope / blok bereik

let, const variables and functions are blockscoped

### Global Scopes
- outside of any function or block
- variables declared in global scopes are accessible everywhere


## Local Scope
- variables are only accessible inside the function, not ouside.
- local scopes live in the function.

### Block scope
- variables declared between the { } and that have let and const 
e.g within a if statement. 

Scoping is the space or environment in which a certain variable is declared. 

#### Lexical Scoping
Scoping is controlled by placement of functions and blocks in the code
so a function within a function has access to the parents function variables. 

##### high order functions

higher order functions that receives another function as an argument, that returns a new function or both. 
all functions are values.

functions are also objects and therefore also have methods. there are functions methods .bind()


##### This keyword

the value of the this keyword is not static. and its value is only assigned when the function is actually called.
it points to the object that is calling the method. arrow functions do not get their own this keyword. but if you use this keyword on arrow function 
they will point to the this of the window. 

the this keyword will always point to the object that was calling the method. JavaScript methods are actions that can be performed on objects




