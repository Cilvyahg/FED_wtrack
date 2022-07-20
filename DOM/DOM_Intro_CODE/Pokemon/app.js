// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }

//Parent element
// get a reference to the parentelement.
const myList = document.querySelector('#myList');

// new list item created and appended it to the existing parent element.
let newListItem = document.createElement('li');
newListItem.textContent = 'banana';
myList.appendChild(newListItem);

const fruitList = ['strawberry', 'orange', 'apple', 'kiwi'];

// for each fruit (index) of this fruitlist -->
for (let fruits of fruitList) {
  let newListItemArray = document.createElement('li');
  newListItemArray.textContent = fruits;

  myList.appendChild(newListItemArray); // appending aan de parent.
}

const container = document.querySelector('#container');

const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//for loop because we need to increment

for (let i = 1; i < 300; i++) {
  const pokemon = document.createElement('div');
  //adding class attribute to the element. 
  pokemon.classList.add('pokemon'); 
  pokemon.classList.add('pokemon-color');

  const label = document.createElement('span');
  // adding number below the pokemon image.
  label.innerText = `#${i}`;

  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg); // child newImg appending to parent pokemon div
  pokemon.appendChild(label); // child label appending to parent pokemon div
  container.appendChild(pokemon); // child pokemon appending to parent container
}


