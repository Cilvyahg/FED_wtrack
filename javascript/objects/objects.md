<br>
(MOSH youtube video about primitive datatypes)
We use the null datatype in situations when we want to clear the value of a variable

`let selectedColor = null`

`let selectedColor;` // output : undefined

^^ undefined can be a primitive type but also a value

e.g
`let selectedColor = undefined;` // output : undefined

# OBJECTS TYPES

- object is een datastructuur
- hebben geen bepaalde volgorde
- ze hebben keys en values

Besides primitive types Javascript also has reference types

we can put variables in a objects. we do this to make our code cleaner.
an object like a person or a car (so the object is for example a Person, Car, Plant it can be anything) or anything has different properties with values for e.g. lenght: 1.68, hair-color: brown.

> syntax object literal -->
>
> `const/let variableName = { key:value, >key:value, key:value };`

**Arrays** ARE ALSO 'OBJECTS' IN JAVASCRIPT.
arrays enables storing a collection of multiple items under a single variable name. 

**_Arrays are is a data structure that we use to represent a list of items**


> syntax array literal -->
>
> `const/let variableName = ["item", "item", "item", .....];`

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

You type number++ instead of number = number + 1. number = number + 1 is a lot of repetitive typing which most developers don't like

++	Increment operator. Increase operand value by one.

--	Decrement operator. Decrease value by one.

number++
++number
number--
--number

These two don't fit into the list of normal operators because they are not normal expressions. They are statements (just as a variable is not an expression but a statement). With increment and decrement you "re-assign" the variable number by adding or subtracting one to/from it and you return the result of that edit.

**in operator** in objects

met de **_in operator_** kunnen we checken of een object een bepaalde key heeft. Dus heeft dit object deze key??
De uitkomst hiervan is 'false' of 'true'

e.g

> `const person = {`
>
> `firstName = "Laura", `
>
> `age = 40, `
>
> `}; `
>
> `console.log("lastName" in person);` // output false
>
> `console.log("firstName" in person);` // output true

Vaak hebben objecten binnen javascript hebben ook prototypes dus ze hebben parents, grandparent en etc etc. erven al die properties zoals filter, math, fill, pop en etc.

## Object methods

- Object.keys();
  Object heeft net zoals Math aantal methods zoals keys().
  als je over alle keys van een object heen wilt, itereren, loop en etc kan je Object.keys(objectnaam)

VOORBEELD `Object.keys(cities);`

> uitkomt console.log(cities);
>
> `["Brussels", "Amsterdam and Paris", "Toronto"]`

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

- hasOwnProperty
  determines whether an object has a property with the specified name.

# ARRAYS

- data structuur
- **ordered** hebben dus een vaste volgorde
- contain "other" things, can be anything. It can ben numbers, strings, booleans, objects, other arrays, functions and many more!!
- heterogeen; een array kan meerdere soorten 'datatypen' bevatten, maar je ziet dat niet vaak maar het kan wel.
- array heeft ingebouwde properties dus de methods/functies zoals length map findIndex pop push en etc. deze methods/functies zijn geerfd.

**Wat is een array ?**

Een array is een datastructuur waar je bepaalde items/elementen in kan stoppen in een bepaalde VOLGORDE. zoals lijst van recepten, lijst van namen en etc. Denk over dit probleem na als is deze array datastructuur handig voor mijn probleem.

## Index

- are zero indexed. the first element of an array is at index 0. 
the first item in the array has the index 0;

Array access: het lezen van een item uit een array

syntax `array[index]`

### array methods
**array methods ACHTERKANT van het array:**
- array.pop(item) : laatste item wordt er afgehakt EN teruggegeven.
- array.push(item) : push stopt voegt een item aan de array aan de achterkant

**array methods VOORKANT van het array:**
- array.shift(item) : first item will be removed and the value can be assigned to another variable for example
- array.unshift(item) : adds an item at the front of the array. 


### Updating a single item

`array[item] = new item;` / `numbers[2] = 5;`

## Slice() and Splice()

### slice() 

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


### splice : remove multiple items by index
- splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

array.splice(index where to be placed, removes (index), item that will be added)


### Length - dit is een property en is geen method want methods kun je aanroepen en properties niet!

`array.length`

Want to read the last index item `array[array.length - 1];`

### join 

put an element between the array items.
`numbers = join(**) // output [1**2**3**4]`

## Copying of an array
copying can be handy since arrays and objects are reference types and are not coppies when you assign it to a new variable

`numbers1 = [...numbers2]`

with objects its the same but with the curly braces

`numbers1 = {...numbers2}`



# Object

* objects are not ordered // arrays are ordered. 
* heterogeneous
* data structuur welke je makkelijk maakt om je data te structureren. je kunt dus elk stukje data (value) een label meegeven (key). in array kijk je naar indexen dan zou je elke keer moeten weten op index 0 staat naam, op index 2 staat adres en etc.


je kan er dingen van verschillende typen instoppen, dat geldt ook voor arrays.


 

als je een object aanmaakt en de variabele (key en variable ) hetzelfde zijn hoef je het maar een keer te doen. age = 33 
age. 

## Objects are passed by reference

je kan dit doen door de waarde door te geven of een verwijzing . objecten worden bij reference gepassed. er worden niet altijd kopieetjes van gemaakt

als je een kopietje wilt maken van een object, aangezien objecten worden gepassed by reference. 

const person2 = {... person1} // kopietje van object person1 ( maar alleen van het buitenste object, dus als een object meerdere objecten binnen heeft dan wordt daar geen kopie van gemaakt)



**Heeft dit object een bepaalde key?**

in operator ..
bijv console.log("age" in person1) dus zit de key age in object person1;



**object in javascript have Prototypes**
de meeste objecten in js hebben prototypes (dus een parent, grandparent en etc.)
prototype = een van de ouders, of grootouders van het object. dus als je een array aanmaakt of een object dan krijg je allemaal eigenschappen erbij zoals filter() method en etc. 


## advanced usage 
-- handig als je wilt itereren over Object.keys en etc.


Object.keys() -- je krijgt de keys van het object 
Object.values()
Object.entries() geef mij een array van elk key value pair 
in     operator -- heeft het object deze key?
hasOwnProperty -- 


