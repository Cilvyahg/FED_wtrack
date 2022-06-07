\***\*HTML\*\***

- an element is defined by a start tag, some content and an end tag <> </>
- webpages are documents
- hypertext means that you can jump from a page to another page. that is what HTML is known for.

**NESTING**

you can have elements with elements in it

`<br>` has no closing tag

**LINKS*
`<a>` with the a tag you say this is a link
href means hyper ***reference\*\*\*, so where does the user needs to be transported. a tags worden gebruikt om hypertext links aan te maken.

- href is an attribute of the `<a>` anchor element
atttributen bepalen het gedrag van het element gaat bepalen. 

> links to mail and phone
>
> `<a href="mailto:cilvya@gmail.com">`email`</a>`
>
> `<a href="tel:123456789">`phone no`</a>`

> a tag element links to the section below
>
> `<p><a href="#Section_further_down">`
> Jump to the heading below
> `</a></p>`
>
> Heading to link to
> `<h2 id="Section_further_down">`Section further down`</h2>`

**PATHS**
a path describes the location of a file in a web site's folder structure

-in some contexts: URL URI

- a path is an address to something
- your local computer has paths

when do we use paths?

- on a computer when using the command line
- navigating to directories
- pointing to directories or files

**Absolute path** (can be link, img and etc.)

https://www.example.com

https://www.example.com/contact.html - there is a directory here = /contact.html

**Relative paths**
a relative file path points to a file **_relative_** to the current page

- we already have most of the address. we just need "local" directions

/ = directory divider
./ = inside current directory - GO IN the directory
.. go up one directory (parent directory) - so DONT GO IN but go up one directory
../../../ = go up multiple directories

**URL**
URL stands for "Uniform resource locator"
a URL is nothing more than the address of a given unique resource on the Web.
in theory, each valid URL points to a unique resource - such resources can be an HTML page, CSS document, image etc.

![image from a url](./notes_img/Screenshot%202022-05-20%20at%2017.02.44.png)

**SEMANTICS HTML** how to structure your page. HTML has defined them specifically.

- for organization
- lots easier for yourself and other developers to understand what the content is about
- easier to read the file ; readable
- won't change the feel and look of the website
- higher ranking on seo

most websites has three basic three sections: header - main - footer

they all have the same parent element which is the body element

- `<header>` --> `<nav>`
- `<main>` is the main section of the website
- ` <main> --> '<article> --> <section>` you can make as many sections as you want. you can also include `<header>` in your sections since it is divided in various sections. articles can have their own headers, footers and document outline that are completely isolated from the
  rest of your site. sections are sort of like articles but they dont have to make sense outside of the context of the document.

- `<aside>` if you have something that is not directly core-related with the content on your page like an 'advertisement' but you do want to show them to your users.
- `<footer>`

![image from semantics html](./notes_img/Screenshot%202022-05-20%20at%2018.22.55.png)

think of the sectioning elements as DIV'S but with a meaning

***WINCHTML live sessie***
hypertext defineert de link tussen verschillende webpagina's 
webpagina's bestaan altijd uit links

html boom (met een  root en stam)
html is de parent 

image: hoogte en breedte in CSS zetten is beter. 


`<span>` is a inline element while `<div>` is a block-level element. 

![image from html tree](./notes_img/Screenshot%202022-05-23%20at%2010.43.46.png)


***CONTAINER/WRAPPER***
it's better to wrap html in wrappers. 
`<div>` 
`<span>`

**inline and block elements**
block elements takes the entire width of the page. they block the other one from getting on the same line. they force the other element to go below them.
- `<p>`
inline elemets not, they only take as much space as they need
they can sit in a line with eachother.
- `<a href="#"> link <a>`

***spans and divs***
<span> span 1</span> are inline element container
<div> are block element container

<br>
<br>


### FORMS

HTML forms contains `<input></input>` tags. These tags can be used for different types of input, depending on the properties you give hem, including text, checkbox, e-mail addresses and etc.

Forms are a wrapper or container for your input tags




