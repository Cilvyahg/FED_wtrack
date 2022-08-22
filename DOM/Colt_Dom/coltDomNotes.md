## THE JAVASCRIPT BOOTCAMP COURSE

The document object is our entry point into the world of the DOM. It contains represenations of all the content on a page, plus tons of useful methods and properties.

it's all nested in a tree structure
document is our entry point that is why we use document. --> do something

console.dir(document).

### SELECTING

what the DOM returns it looks like a HTML element, BUT it's not it's an OBJECT
set it to a variable and you can use the console.dir(object).
for example a image. then you will get an object returned. It's an object in the JS.

**types**
**proto\_**: HTMLInputElement, HTMLParagraphElement, HTMLCollection and etc.
there are different categories of types like HTMLImageElement. because every element has their own properties for example a image has a src property while another element hasn't.

you can find one element, save it to a variable search within thst if you need to.

- getElementsByTagName
- getElementsByClass
- getElementById

* the above one returns a HTML collection. you can't use the array methods on it.

- querySelector

* a newer, all in one method to slect a single element
* pass in a CSS selector .. you can get really specific like
  `document.querySelector('input[type="text"]')`
  `document.querySelector('ul li.special')` so the li with the class special inside of the ul element.
* returns a nodeList (so the container they give back is different, but according to colt this is not really a big deal)
* you can use forEach() on a Nodelist and not on a HTML collection.

## Value, checked

read out the value from input and radiobuttons
for radiobuttons use radiobutton.checked = true/false
input.value = " ...."
range.value = " ... " (set for example a max and min)

### href, src

some attributes like src and href can be directly accessed on the object

## nextElementSibling, previousElementSibling, parentElement, children

these are properties.

## Style property

every element has a style property.
if you set something with the style property you style it inline so it will be in the HTML page.
disadvantage ; is that you'll have to do every style seperately that is why this is not convenient. Style one at a time. so it's better to use classed in the CSS.
property names of style properties are camelCased there are no hyphens

!NOTE :: Inline styles overwrite everything
because inline styles do have priority over css styling that is why those styles will be applied when style.property is used in javascript. so it's not changing the style in our CSS but changing the styles in our inline styling individually.

## getComputedStyle()

to retrieve the current styles also from the CSS this is how to do it.
getComputedStyle() is a method

## createElement();

first createElement() and then parent.appendChild(child)

the method appendChild() will append the child as the last element of the parent

### appendChild() 

* appendChild() append the child to the end of the parent
* insertBefore()

## removeChild(), remove()

remove() is not supported in IE just like append() en prepend()

