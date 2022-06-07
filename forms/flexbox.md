s# Flexbox and CSS GRID

***translation***: <br>
brevity: beknoptheid
<br>
equipped: uitgerust


The default value for all elements is always 0: 

### <span style="color:yellow">Flexbox - one dimensional layout model</span>
**content-first**

either in a column OR a row --> `flex-direction: row/column`.
the main idea behind the flex layout is to give the container the ability to alter its items width/height and order to best fill the available space. offers space distribution between items in an interface and powerful alignment capabilities.
even when the size is unkows,therefore - flex.

largely a linear system

**Main Axis & Cross Axis**
flexbox features properties that align and justify content along one axis OR the other.

- row
- row-reverse
- column
- column - reverse

parent element : container
child element : flex-items

`flex: 1 0 2`  is a shorthand for
- flex-grow
- flex-shrink
- flex-basis (is the basis of setting the width of the items. if the parent container is wide enough)

[CSS tricks : FLEXBOX ](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

`flex-flow: column wrap;` shorthand for flex-direction and flex-wrap


<small>if you are aware of the content before making the layout, then opt for flexbox, if not, then opt for CSS GRID</small>



### <span style="color:cyan"> GRID - two dimensional</span>
**lay-out first**

two dimensionals meaning that it can manage both columns and rows. if you want to fit content into two dimensions, use GRID.

largely multidimensional system- different sizes


parent element : container
child element : grid-items

to target it as a grid `display: grid`
<br>


> *!note: you can  integrate flexbox in a CSS grid but not vice-versa. see below*

![image from usecase flexbox in css grid](./img/Screenshot%202022-05-25%20at%2015.47.12.png)














