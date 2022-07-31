'use strict:';

const superHeroes = [
  {
    name: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    weight: '210',
  },
  {
    name: 'Superman',
    publisher: 'DC Comics',
    alter_ego: 'Kal-El',
    first_appearance: 'Action Comics #1',
    weight: '220',
  },
  {
    name: 'Flash',
    publisher: 'DC Comics',
    alter_ego: 'Jay Garrick',
    first_appearance: 'Flash Comics #1',
    weight: '195',
  },
  {
    name: 'Green Lantern',
    publisher: 'DC Comics',
    alter_ego: 'Alan Scott',
    first_appearance: 'All-American Comics #16',
    weight: '186',
  },
  {
    name: 'Green Arrow',
    publisher: 'DC Comics',
    alter_ego: 'Oliver Queen',
    first_appearance: 'All-American Comics #16',
    weight: '195',
  },
  {
    name: 'Wonder Woman',
    publisher: 'DC Comics',
    alter_ego: 'Princess Diana',
    first_appearance: 'The Incredible Hulk #180',
    weight: '165',
  },
  {
    name: 'Blue Beetle',
    publisher: 'DC Comics',
    alter_ego: 'Dan Garret',
    first_appearance: 'Mystery Men Comics #1',
    weight: '145',
  },
  {
    name: 'Spider Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Peter Parker',
    first_appearance: 'Amazing Fantasy #15',
    weight: '167',
  },
  {
    name: 'Captain America',
    publisher: 'Marvel Comics',
    alter_ego: 'Steve Rogers',
    first_appearance: 'Captain America Comics #1',
    weight: '220',
  },
  {
    name: 'Iron Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Tony Stark',
    first_appearance: 'Tales of Suspense #39',
    weight: '250',
  },
  {
    name: 'Thor',
    publisher: 'Marvel Comics',
    alter_ego: 'Thor Odinson',
    first_appearance: 'Journey into Myster #83',
    weight: '200',
  },
  {
    name: 'Hulk',
    publisher: 'Marvel Comics',
    alter_ego: 'Bruce Banner',
    first_appearance: 'The Incredible Hulk #1',
    weight: '1400',
  },
  {
    name: 'Wolverine',
    publisher: 'Marvel Comics',
    alter_ego: 'James Howlett',
    first_appearance: 'The Incredible Hulk #180',
    weight: '200',
  },
  {
    name: 'Daredevil',
    publisher: 'Marvel Comics',
    alter_ego: 'Matthew Michael Murdock',
    first_appearance: 'Daredevil #1',
    weight: '200',
  },
  {
    name: 'Silver Surfer',
    publisher: 'Marvel Comics',
    alter_ego: 'Norrin Radd',
    first_appearance: 'The Fantastic Four #48',
    weight: 'unknown',
  },
];

console.log(superHeroes);

// 1. Make an array of all superhero names.
const hasHeroName = superHeroes.map((name) => name.name);

console.log(hasHeroName);

//2. Make an array of all "light" superheroes (< 190 pounds).

const isLightHero = superHeroes.filter((name) => {
  console.log(name.weight);
  return name.weight < 190;
});

console.log(isLightHero);

//3. Create an array with the names of the superheroes who weigh 200 pounds.

const is200Pounds = superHeroes
  .filter((name) => name.weight == 200)
  .map((name) => name.name);
console.log(is200Pounds); // output ["Thor", "Wolverine", "DareDevil"]

//4. Make an array with all the comics where the superheroes had their "first appearances".

const heroFirstAppearance = superHeroes.map((name) => {
  let firstAppearance = `${name.name} had their first appearance in: ${name.first_appearance}`;
  return firstAppearance;
});

console.log(heroFirstAppearance);

//5. Create an array of all DC Comics superheroes.
// Did that work ? Then repeat the above function and also create an array with all Marvel Comics superheroes.

const isADComicsHero = superHeroes
  .filter((name) => name.publisher === 'DC Comics')
  .map((name) => name.name);

// kan ook met de not operator ::
// const isADComicsHero = superHeroes.filter(name => name.publisher !== "DC Comics").map(name => name.name);

const isAMarvelHero = superHeroes
  .filter((name) => name.publisher === 'Marvel Comics')
  .map((name) => name.name);
console.log(isADComicsHero);
console.log(isAMarvelHero);

//6. Add up the weight of all DC Comics superheroes.
//Pay attention! Conditional to the rescue! The weight you see here, what data type is that? A number ? Or a string ? Oh yeah, and do all superheroes have weight ?


const stringToNumbers = superHeroes.map(function (superhero) {

    const weightInNumbers = Number(superhero.weight);
    console.log(weightInNumbers);
    return weightInNumbers;
})

console.log(stringToNumbers);

const stringWithoutNaN = stringToNumbers.filter(
  function (superhero) {
    const check = !isNaN(superhero)
    console.log(check)
    return check;
  }


)


console.log(stringWithoutNaN);


















//  const filteredHeroes = superHeroes.filter(function (weight) {
//    return weight !== isNaN });

// console.log(filteredHeroes())




// const mappingHero = function (array) {
//   return array.map(function (superhero) {
//     return fromStringToNumber
    
//   })

// }

// mappingHero(stringToNumbers())








// const weightOfDcComics = function (array) {
  
//   const createFunction = (item) => {
//     if (item !== 195) {
//       return true;
//     } else {
//       return false;
//     }
//   }


//   const stringToNumbers = array.map(el => parseInt(el.weight))
//   console.log(stringToNumbers);

//   const asdfg = stringToNumbers.filter(createFunction);
//   console.log(asdfg)




  // return stringToNumbers.reduce((accumulatenum, currentnum) => {
  // return accumulatenum + currentnum;
  // })

// };


// let a = [1, 2, 3, 4, 5]

// const af = 
//   (num) => {
//     return true;
//   };

// const hello = a.filter(af)

// console.log(hello)