we use in situations when we want to clear the value of a variable
let selectedColor = null
let selectedColor; // output : undefined

undefined can be a primitive type but also a value

e.g
let selectedColor = undefined; // output : undefined

# OBJECTS TYPES

Besides primitive types Javascript also has reference types

we can put variables in a objects. we do this to make our code cleaner.
an object like a person or a car (so the object is for example a Person, Car, Plant it can be anything) or anything has different properties with values for e.g. lenght: 1.68, hair-color: brown.
>
> syntax object literal -->
>
> `const/let variableName = { key:value, >key:value, key:value };`
>

**Arrays** ARE ALSO 'OBJECTS' TYPE IN JAVASCRIPT. 
***Arrays are is a data structure that we use to represent a list of items/elements*** 
when we make lists. in arrays you can store a list. in the array you have items/elements  in it
>
> syntax array literal -->
>
> `const/let variableName = ["element", "element", "element", .....];`
>
>
>

Access an Array (we use the index number)

let selectedColors = ["pink", "neongreen", "lilac"];

Adding another element in the array BUT if you add an element in an exisiting element that element will dissapear and be replaced. use shift.pop and etc. 

`selectedColors[3] = "beige";`

`selectedColors[4] = "red";`

`selectedColors[2] = "orange";`

`selectedColors[4] = 90;` // you can also add another datatype like numbers and combine them.

`console.log(selectedColors);`

`console.log(selectedColors[2]);`

## INCREMENT AND DECREMENT
Operaters:
An operator performs some operation on single or multiple operands (data value) and produces a result. 
For example, in 1 + 2, the + sign is an operator and 1 is left side operand and 2 is right side operand. The + operator performs the addition of two numeric values and returns a result.

You type number++ instead of number = number + 1. number = number + 1 is a lot of repetitive typing which most developers don't like.

number++
++number
number--
--number

These two don't fit into the list of normal operators because they are not normal expressions. They are statements (just as a variable is not an expression but a statement). With increment and decrement you "re-assign" the variable number by adding or subtracting one to/from it and you return the result of that edit.

**in operator** in objects 

met de ***in operator*** kunnen we checken of een object een bepaalde key heeft. de uitkomst hiervan is 'false' of 'true' 

e.g 
>
>`const person = {`
>
>  `firstName = "Laura", `
>
>  `age = 40, `
>
>`}; `
>
>`console.log("lastName" in person);` // output false
>
>`console.log("firstName" in person);` // output true
>

Vaak hebben objecten binnen javascript hebben ook prototypes dus ze hebben parents, grandparent en etc etc. erven

## Object methods

- Object.keys();
 Object heeft net zoals Math aantal methods zoals keys(). 
 als je over alle keys van een object heen wilt, itereren, loop en etc kan je Object.keys(objectnaam)

 VOORBEELD `Object.keys(cities);`
 > uitkomt console.log(cities);
 >
 > `["Brussels", "Amsterdam and Paris", "Toronto"]`
 >
 >

 - Object.values() 
 als je de waarden van het object wilt weten

 - Object.entries();
geef mij alle keys met de waarde erbij in een array

 
 VOORBEELD `Object.entries(cities);`

 > uitkomst console.log(cities);
 >
 > `["Brussels, 3],`
 >
 > `["Amsterdam and Paris", 3]`
 >
 > `["Toronto", 2]`
 >
 >






