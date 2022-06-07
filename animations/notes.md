## TRANSITIONS


transition properties allow elements to change values over a specified duration, animating the property changes, rather than having them occur immediately.

SHORTHAND::
`transition: <property> <duration> <timing-function> <delay>`


`transition-property:width` 
the transition property specifies the name of the CSS property the transition effect is for. the transition effect will start when the specified CSS property changes. 

`transition-duration = 500ms (.5s)` (js only accepts ms so use ms)
1000ms = 1 seconde
most of the times you want the duration not to be too long  like between 250ms - 500ms
they should happen relatively fast.

transition-property: all the properties you want to target.
`transition-timing-function: ease (default)` cubic bezier

`transition-timing-function: cubic-bezier(.77,0,0,2.25)`
`transition-delay:500ms`
(how long does it take for the transition to happen, will start)


`transition: 100ms background eas-in, 500ms transform ease-out 100ms;`
second number is "the delay" 
(shorthand: )

linear (same pace)
ease-in (starts slow and then fast back)
ease out (starts fast and slowing down in the end)
ease-in-out (start slow, speedup and slow again)

## ANIMATIONS

`@keyframes left-to-right {}`

is where we put the value 0% - 100% and how our animation looks likes
from 0% to 100%; 

'from' begin state
'to' end state.


`animations-fill-mode : `
animation-fill-mode : DECIDES WHAT'S TO DO WITH THE ELEMENT OUTSIDE OF THE ANIMATION WINDOW. 
values that can take: 
- forwards: stays at the end of the animation. takes the last state en let it stopts there. eg. mariocart stays at the end of the road instead of going back.
-backward :opposite of forwards. so what the starting animation state it will starts but it will pop back so thats why you can set "both" 
- both

`animation-iteration-count:`
how to repeat animations
- infinite
- or you can set a number like "5" or even "1.5"  

`animation-direction:`

- normal
- reverse
- alternate : the animaton reverse direction each cycle with the first iteration being played forwards. the count determine if a cycle is even or odd starts at one.
- alternate reverse






## Transforms
translate means move the object to another side of the page
x-axis and y-axis

// translate() if you put in two values it will take x-axis value and y-axis value
`transform: translate(3rem, 4rem);`

//scaleY() (makes it bigger or smaller) scaleX(1 stays the same, number below 1 makes it smaller on the x-axis)
`transform:scaleY(0.5)`

//rotateX(deg) rotateY(deg) rotateZ(deg)
`rotateZ(45deg)` draait met de klok mee of terug -45deg
rotate(.25turn)

rotate(.25turn) is net zoals rotateZ. Volgens Kyle wordt de rotateX en rotateY bijna niet gebruikt dan behalve bij 3D animaties. 













