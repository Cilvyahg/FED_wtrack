# DOM

document object is where everything is contained and within it there are methods and properties you can change. you can manipulate all these through the document.

document.getElementById()

console.dir(value) in order to get the objects

document.getElementsByTagName()
document.getElementsByClassName()

**we can use one method to select a single element**

document.querySelector()

**PROPERTIES AND METHODS**
innerText -- is sensitive to what is showing in the moment and if things are showing in the html for the moment. ignores the tags

textContent -- includes the markup. returns every element. it gives us back everythin. textContent is like innerText but DOES NOT CARE what is actually displayed to the user at that moment. so it won't be updated immediately. 

innerHTML -- gives all the markup back
innerHTML is the only one we can use to add elements inside of some other elements. 

**attributes**

getAttribute()

style() object will contain the inline styles in its markup. don't do this instead use classList.

// if you want to know the current fontSize of element h1 for example. SO GET THE CURRENT STYLES. 
window.getComputedStyle(h1).fontSize


***classList***
The classList property returns the CSS classnames of an element.

toggle method
With the toggle() method, you simply pass the name of the class which you want to toggle:
The toggle() method returns true if the class was added, and false if it was removed:


replace() 

previousElementSibling
nextElementSibling

***MAKING A NEW DOM ELEMENT***

createElement()

removeChild() -- remove based on the child and parent relationship
 remove()

