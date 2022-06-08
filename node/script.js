console.log("You gonna rock this");

// "This is a large sum" --> you don't see the outcome because the code is between the comments

let multiplication = 1230941 * 1823794;
console.log("multiplication:", multiplication);

let substract = 637263 / 54;
console.log("substraction:", substract);

// no, I can only see the first console log

/* ==========================
JS objects live les 
========================== */

/* const person = { firstName: "Niels", age: 33 };
console.log(person.firstName);

// adding a new key value pair to the object
person.lastName = "Bom";
console.log(person)

//updating a value from a key
person.lastName = "Jansen";
console.log(person);

// deleting a key
delete person.lastName;
console.log(person);
 */

// object literal shorthand - als de key and value dezelfde naam hebben mag het object ook zo worden geschreven.

const age = 33;
const firstName = "Niels";
const lastName = "Bom";

const person1 = {
  age,
  firstName,
  lastName,
};

// passed by reference dus de achternaam van person1 is ook klaver geworden. Het is dus geen kopie.
/* const person2 = person1;
person2.lastName = "Klaver";

console.log(person2);
 */

// Als je een kopie wilt maken van een object dan doe je dat zo {...} maak dan van alle objecten in elkaar een kopie want dit maakt enkel een kopie van de buitenste objecten.dus niet van object in een object

/* const person2 = { ...person1 };
person2.lastName = "Klaver";

console.log(person1);
console.log(person2);

 */



