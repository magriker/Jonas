'use strict';
/*

//////////////Default Parameters////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPssengers = 1,
  price = 199 * numPssengers
) {
  // ES5 way
  // numPssengers = numPssengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPssengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH124', 5);
createBooking('LH124', undefined, 1000);



//////////How Passing Arguments Works: Value vs Reference///////////
const flight = 'LH234';
const ken = {
  name: 'Kensaku Magata',
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23456789) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, ken);
console.log(flight);
console.log(ken);

//Is the same as doing
const flightNum = flight;
const passenger = ken;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(ken);
checkIn(flight, ken);


///////Function Accepting Callback Functions///////////

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformaer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformaer('JavaScript is the best!', upperFirstWord);

transformaer('JavaScript is the best!', oneWord);


//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Ken', 'Martha', 'Adam'].forEach(high5);


/////////Function Returning Function/////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ken');
greeterHey('Steave');

greet('Hello')('Ken');

//Challenge

//My solution
// const greet2 = (greeting) => {
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');


///////the call and apply methiods////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
    );
    this.bookings.push({
      flight: `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `,
      name,
    });
  },
};

lufthansa.book(239, 'Kensaku Magata');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sara Williams'); ← Does not work
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Shinzo Abe');

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 333, 'Fumio Kishida');
console.log(swiss);

//Apply method
const flightData = [583, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/////////Bind Method////////////

//book.call(eurowings, 23, 'Sara Williams');

const bookEW = book.bind(eurowings);
const bookKLH = book.bind(lufthansa);
const bookKLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kensaku Magata');
bookEW23('Martha Cooper');

// With event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partioal Application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.1);
// const addTax = (rate, value) => value + value * 0.1;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.1);
console.log(addVAT2(100));
console.log(addVAT2(23));


///////////Immediately Invoked Function Expressions////////

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);


////////////////Closures//////////////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

*/
///////More closure Examples//////////

//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
