# DOM


Nearly everything in JavaScript is an object other than six things that are not objects which are — null , undefined , strings, numbers, boolean, and symbols. These are called primitive values or primitive types.

console.dir(object)

**_innerHTML_**

innerHTML − The innerHTML property returns the text, including all spacing and inner element tags. It preserves the formatting of the text and all the extra tags like <b>, <i> etc.

**_innerText_**
innerText − The innerText property returns just the text, removing the spacing and the inner element tags.

**_value_**

**getElementById**

getElementById('someId') is true, it does not return an array and the for loop fails to execute.

The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

**getElementsByClass**

The getElementsByClassName() method returns a collection of elements with a specified class name(s).

The getElementsByClassName() method returns an HTMLCollection.

The getElementsByClassName() property is read-only.

## properties and methods (the most important ones according to colt)

- classList
- getAttribute()
- setAttribute()
- appendChild()
- append()
- prepend()
- removeChild()
- remove()

- createElement
- innerText
gives plain text and ignores the tags functions so <i> will be displayed but it won't be working 
it will just show 
<i> Header 1 </i>


- innerHTML
it's going to be treated as HTML and not as text unlike innerText. 
- textContent
is the only one available for textn npdes; 
- value
- parentElement
- children
- nextSibling
- nextElementSibling
- previousSibling
- previousElementSibling
- style

## ATTRIBUTES
how to access attributes in the DOM

.id
.title
.href 

.getAttribute('id') <----- (get the attribute)
.setAttribute('title', new title name) <---- replacing the attribute value

# Append & AppendChild

creating new elements from scratch. 


steps
- creating a new empty element .createElement()
- update the element e.g. newH3.innerText = 'hello';
- then append it e.g appendChild(the element you want to append);




# BROWSER EVENTS
When your user interacts with the DOM, "Events" take place. These BrowserEvents are for example: clicking with your mouse, scrolling, or pressing keys.



