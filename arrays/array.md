## DESTRUCTERING ARRAYS

A short clean syntax to unpack
- values from arrays
- properties from objects

into distinct variables



### spread operator in Object Literals {...}
 
 with the {..spread} you make a copy

order matters and last one overrides

```
const feline = {
  legs: 4,
  family: 'Felidea',
};

const canine = {
  family: 'Caninae',
  furry: true,
};




const newFeline = {
  ...feline, 
  isPet: true,
  adorable: true
}

log(newFeline)

```


does a callback function for every element
the function here is a parameter of the forEach method.
calls the function once per element in the array

```
array.forEach(function (item){

})
```


===== SORT() =====

```
array.sort(comparfunc(a,b)){

}
```

the sort() has a callbackfuntion that has two parameters


a is the first parameter and b the second in this case

* if compareFunc(a,b) returns less than 0 
 then -- sort a before b 

* if compareFunc(a,b) returns 0
then -- leave a and b unchanged with respect to eachother

* if compareFunc(a, b) return greater > 0
then -- sort b before a



<!-- === COMPARISON === -->

comparison are usually used with numbers ( <, >, <= >= )

== --> equality (doesn't care about the datatype, if the value is the equal than it solves to true);


## Nester conditionals

you can nest  if statements  in eachother; 

```
let password = "hello kitty"

if (password.length >= 6) {

  if (password.indexOf(' ') === -1) {
    // if there is no space = true 
    log('valid password ');
  } else {
    log('password is long enough, but cannot contain spaces');
  }
}
else {
  log('password needs to be longer');
}

```