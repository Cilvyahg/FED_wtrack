/* eslint-disable no-unused-vars */
'use strict';

console.log('hello');

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

// ============
// .filter() -- TRUE OR FALSE
// ============

//all items under or exact 100 dollars

const predicate = (item) => {
  return item.price <= 100;
};

const predicate2 = function (item) {
  return item.price <= 10;
};

const filteredItems = items.filter(predicate2);

const filteredItemsSecond = items.filter((item) => {
  return item.name.length <= 3;
});

console.log(items); // original arrays won't be changed but new arrays will be created
console.log(filteredItems);
console.log(filteredItemsSecond);

// ============
// .map()
// ============

const mapItems = items.map((item) => {
  return { naam: item.name, price: item.price / 100 };
});

const mappedItems = items.map((item) => {
  // return item.name +" " + item.price;
  return item.price;
});

console.log(items); // original arrays won't be changed but new arrays will be created
console.log(mapItems);
console.log(mappedItems);

// ============
// .find() -- TRUE OR FALSE
// ============

const findItems = items.find((item) => {
  return item.name === 'Computer';
});

const findItems2 = items.find((item) => {
  return item.price === 100;
});

console.log(findItems)
console.log(findItems2)


// ============
// .forEach()
// ============

// looping over arrays .. much easier thant for loops

items.forEach((item) => {
  console.log(item.name)

})


