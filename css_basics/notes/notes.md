**_CSS_**

- inline CSS : just don't do it. so directly in HTMl file
- internal CSS : using `<style>` tags within a single document

hexadecimal colors:
#ffffff = whie fff
#000000 = black 000

-In CSS you have web saved fonts (no import)
-some fonts like google fonts you do have to import

![image from websafe fonts](./Screenshot%202022-05-23%20at%2009.10.45.png)

divs are reusable and id's are not

headings (h1 - h6) have margins by default. so you have to set them on margin: 0 / auto

**what is a selector**
A CSS selector is a pattern to match the elements on a webpage. they let you allow to target specific elements on your webpage in various ways so that they can be styled.

universal selector will be applied to every element in a document
`* { margin:0; padding:0; }`

**_group selector_**

h1, h2, p = so style is applied to all the aforementioned selectors

> **shorthand font.**
>
> `font-family: Arial, Helvetica, sans-serif;
> font-size: 12px;

> same as above but shorthand -->
> font: normal 12px Arial, Helvetica, sans-serif;`

containers

- use percentages for responsivesness
  to set it in the center use margin: auto; so it spaces evenly in the vw.

**_Forms_**

labels are inline elements
block elements will put it in a new line.
so you can transform these inline elements to block elements.

**CSS BOXMODEL**
if and element has a background color it will be visible through the padding area wehears that margin area will always remain transparant, it's not affected by the element's background color, however, it causes the background color of the parent element to be seen through it.

unline CSS margin, values for padding properties cannot be negative.

-width and height
if you are setting the width and height of an element you are actually setting this on the 'content area'

universal selector will not be applied on pseudo elements like
::before and :: after so also apply this in the universal selector \*

> `_, _::before, \*::after{
> box-sizing:border-box;
> }

best practice putting box-sizing border box in the root so in html.

![image from kevin powell box-sizing](./Screenshot%202022-05-23%20at%2014.22.52.png)

**_margins_**
margin: 0 auto; wont work if there is not a width specified.

**min-width & max-width**
max width - min width can be combined with width in your css
width: fit-content;

**_center_**

text-align property needs to be set on the parent element.
margin: 0 auto needs to be set with a width; 100px;

<hr>

## <span style="color:pink">CSS MEDIA QUERIES<span>

Media queries allow you to apply styling to a particular type of screen.
this means you can tweak CSS for an ipad, printer or create a responsive website.

responsive websites : a responsive web design will automatically adjust for different screen sizes and viewports.

> body {
>
> background-color: red;
>
> }
>
> @media (min-width: 1024px) {
> body {
> background-color: blue
> }
>
> }

**_order_** matters (net zoals bij andere talen is het onderste leidend mits de specifity hoger staat)

@media betekent is voor mediatypes

mobile first ---
@media (min-width)

desktop first ---
@media (max-width)

- if this is true, than do this

> @media <media-type screen tv print and etc> and (expressions) {
>
> }

examples...
@media screen and (min-width: 800px) {}

// Smartphones (portrait)
minimal width : 320px;

// Tablets (portrait)
minimal width : 768px

// Desktop
minimal width : 1024px

### **<span style="color:green">CSS UNITS<span>**

root fontsize

html {
font-size: 62,5%;
}

dus 1rem is 10px
1.2 rem is 12px;

### overflow property

if things has overflow
`overflow: hidden (bijvoorbeeld als je enekel een preview wil geven), auto, scroll`
overflow: auto (puts a scrollbar only if needed!!)
`overflow-x / overflow-y` (where you can change the x and y axis if needed)

### display property

display: block (gonna take up the whole width, and have nothing next to it, like a DIV)
display: inline (span, take up the minimal amount of space possible, they try to fit altogether)
display: inline-block (img, same as inline but you can change the height and widht unlike the display: block element)

display: none (acts as if the element is completely dissapeard from the page. it won't take invisible space)

display: flex / display: grid. 


## Box-shadow property

box-shadow : 20px 30px 10px 10px #000;
1. horizontal direction offset
2. vertical direction offset
3. blur of the shadow (small value means less blured)
4. optional don't have to specifize it, but what it basically does it ' scale the shadow up' 
5. color 


## CSS reset style sheet

![reset style sheet](https://meyerweb.com/eric/tools/css/reset/)

each browser has different default settings for styling different HTML elements e.g. the color for link text and spacing definitions for specific items are defined differently by many browsers by default. these basic details may vary greatly from browser to browser, sometimes even varying between different versions of browser. 

## CSS custom variables
you are inventing the property and you have to define it too css.
mostly declared in :root and not in a selector because of the scope.

the :root is the html root. they will become global variables.

two hyphens; this is how you write it  `--name: value;`


`:root {
  --primary-clr: #456;
  --secondary-clr : steelblue;
  --dark: #fff;
  --light: #000;
  
  --ff-
}`

<!-- css style in selector body -->

`body {
  color: var(--primary-clr); 
}`

