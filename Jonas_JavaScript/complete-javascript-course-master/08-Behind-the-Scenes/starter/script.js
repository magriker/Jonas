'use strict';

/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // const firstName = 'Dave';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(3, 3));
      output = 'NEW OUTPUT';
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Ken';
console.log(calcAge(1996));


Variables
console.log(me);
console.log(job);
console.log(year);

var me = 'Ken';
let job = 'teacher';
const year = 1991;

Functions

console.log(addDecl(2, 3));
console.log(addExper(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExper = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

Example

if (!numproducts) deleteShoppingCart();

var numproducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const ken = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

ken.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = ken.calcAge;
matilda.calcAge();

const f = ken.calcAge;

f();


// var firstName = 'Matela';

const ken = {
  firstName: 'Kensaku',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //solution1
    // const self = this;
    // const isMIllenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // const isMIllenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //solution2

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greed: () => console.log(`Hey ${this.firstName}`),
};

ken.greed();
ken.calcAge();

//Arguments keyword
const addExper = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExper(2, 5);
addExper(2, 5, 8, 9, 4);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(5, 5, 6);


let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Ken',
  age: 26,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
};

//Reference types
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
//marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marrige:', jessicaCopy);
