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
*null )

- to get the last index of the array arrayName.length -1 




## Array Methods

array methods have callbacks 

the .filter() method --> filters some conditions if it's true you will get a new array, if it's false you wont. It won't change the old array

the .map() method --> allows you to take one arrays and converts it into a new array. it makes a new array for us. we map it to a new copied array




the .find method  --> true or false .. return the first item that it finds in the array that is true.


the .forEach() method --> looks like a for loop but takes a functions. it's the same as for .. of
for ... of is easier

the .some method -- it just check if ONE ITEM in the array hold at least the condition TRUE OR FALSE. for example if there is a price below 50 dollars. if so than it will return 'true' if not then it would be 'false'


the .every() -- it just if every items in the array holds a certain condition. so if every item is for example below 100 dollars. if not that it returns 'false' if all items in the array are below 100 dollars then it will return 'true'


the .reduce method -- does an operation .. accumulating

the .includes() -- does it include a certain value? like 2? and you can also give a index number as parameter. 

## ARRAY METHODS: MUTABILITY

An important distinction between array methods is: "mutability" = veranderlijkheid. "Mutation" or mutation of an Array means: changing an array.

Depending on which array method you use, there are 2 options:

_Option 1_: the array method mutates the current array.
_Option 2_: The array method makes a copy and returns the modified copy. Leaves the original array unmodified.

Some array methods change the original array (and the items in the array). **Other methods make a copy of the original array, so they don't change the original!**

For example, the _.map()_ method makes a copy, iterates through all the items in the array, and returns a new array (so it doesn't mutate the original array). The _.push()_ method adds something to an array and **mutates** the original.

array methods that mutates are 
* .copyWithin()
* .fill()
* .pop()
* .push()
* .reverse()
* .shift()
* .unshift()
* .sort()
* .splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().


_syntax_ Array.splice(start, removeCount, newItem, newItem, newItem, ...)


**...arrayName1, ...arrayName2**
1.1 Merge using the spread operator
If you want to know one but a good way to merge arrays in JavaScript, then remember the merge using the spread operator.

Write inside the array literal two or more arrays prefixed with the spread operator ..., and JavaScript will create a new array with all these arrays merged:

###### Array.isArray()
syntax Array.isArray(value)
returns a boolean; true or false 