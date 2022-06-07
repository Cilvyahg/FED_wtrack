`grid-template-columns: 1fr 1fr 1fr ; `

short hand is (so 3 columns all of them have a fraction of 1!)
repeat is the amount of rows of columns.

`grid-template-columns: repeat (3, 1fr)`

grid-template is the shorthand for grid-template-columns and grid-template-rows. think as a L. first rows .. you go down and then the columns which is go the left of the L.

when you have two columns you have three column lines


`grid-column-start 
grid-columnm- end 

short hand is 

grid-column 1 / span 2 is the same as --> 1/3 

grid-column: 1/ -1 (-1 is the last column line, especially convenient if you don't know how many items the column will span acrosse. )

## Fractions: fractional units (FR)

***the fr unit represent a fractions of the available space in the grid container.

-Fractional Units are based on the remaining space available to it. Think of it like slicing pizza.
-Remember that not because you sliced pizza in two or three parts, they are in the same size!
-Because you sliced the pizza, it doesn’t mean that they’ve been taken! Once a pizza slice is taken (Assigned a px/em/rem/vh/vw value), the fr will be of the remaining pizza!
-If you add more <div> (The equivalent of pizza slices) than you define in the grid, they won’t be displayed. You can’t give away pizza slices that do not exist.
-grid-template-columns will be affected by the width property of the grid.
-grid-template-rows will be affected by the height property of the grid.

## GRID AREA
in order to do that you have to git the grid container the grid-template-areas:

> visual representation of how you want your grid to look like
>
>`grid-template-area' : " header " 
>" menu content "
>"footer"`
>

and in the grid items within the container
`grid-area: header;`

