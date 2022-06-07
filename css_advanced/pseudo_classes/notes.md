<hr>

## PSEUDO CLASSES (AND PSEUDO ELEMENTS)
## Pseudo classes

- a pseudo class is different than a pseudo element
- pseudo-class is used to style a particular **"state" of an element"**.
- pseudo class starts with one colon (:)
-pseudo classes are like 'fake' classes that are applied to elements under certain conditions

__examples__ :

:hover 
:visited
:focus --> style an element when it gains focus (through mouse of keyboard)
:valid (for example when filling in a email address in input the client gets a green color/border)
:empty
:first-child
and etc.
:last-child
:nth-child(n)
:first-of-type\
AND ETC....

<hr>

# Pseudo elements 

***ADDING EXTRA STYLE WITHOUT ADDING EXTRA MARK UP!***

`selector::pseudo-element` 

Pseudo elements are "fake-elements" , it isn't really in the document with the real ones. 

pseudo elements allow us to INJECT dynamic content we can also style the content. 
- ::after 
- ::before
- ::first-letter
- ::first-line
- ::marker --> the ::marker pseudo elements selects the markers of list items
- ::selection --> matches the portion of an element that is selected by the user

::before and ::after 
the content =" " will come before or after your actual content so it's in the element itself and not outside of the element where it is put.

* you can't add a pseudo element on a img. images are replaced elements and are the content. 
images source is the content. but you do can put a image to `content=url();` in the before and after elements.


::after and ::before pseudo elements are by defealt `display:inline`


`content= open-quote (aanhalingstekens)`

`content = close-quote (aanhalingstekens)`

`<div> 
before 
<!-- rest of stuff inside the div -->
after
</div>`

## Nth Child Pseudo classes

passing an argument in the brackets.

li:nth-child(1) {

  font-weight: bold;

}


li:nth-child(even, odd) {
  background:grey;

}

odd, even are keywords



























