'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  oder(starterIndex, mainiIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainiIndex]];
  },

  openingHours,

  oderDelivery({ starterIndex = 1, mainIndx = 0, time = '20:00', address }) {
    console.log(
      `Oder recieved! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndx]} will be diliverd to
       ${address} at ${time}`
    );
  },

  oderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2}, and ${ing3}`
    );
  },

  oderPizza(mainingredient, ...otherIngredients) {
    console.log(mainingredient);
    console.log(otherIngredients);
  },
};

const getCode = str => str.toUpperCase().slice(0, 3);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '👺' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

/*
///////////////Working with strings part3////////////////
console.log('a+very+nice+string'.split('+'));
console.log('Kensaku Magata'.split(' '));

const [firstName, lastName] = 'Kensaku Magata'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join('-');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toLocaleUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  const correctName = namesUpper.join(' ');
  console.log(correctName);
};

capitalizeName('jessica ann smith davis');
capitalizeName('kensaku magata');

//Padding

const message = ' Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(56562522154));
console.log(maskCreditCard('3532112454543121564635464'));

//Repeat
const message2 = 'Bad weather... All departures Delayed';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInline(5);


///////////////Working with strings part2////////////////
const airline = 'TAP Air Japan';

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

//Fix capitalization in name
const passenger = 'kEn'; // Ken

const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

function produceCorrectName(name) {
  const nameLowercase = name.toLocaleLowerCase();
  const correctName = nameLowercase[0].toUpperCase() + nameLowercase.slice(1);
  console.log(correctName);
}

const passenger2 = 'kENsAkU';

produceCorrectName(passenger);
produceCorrectName(passenger2);

// Comapring emails
const email = 'hello@ken.io';
const loginEmail = `  Hello@ken.Io \n`;

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing

const priceGB = '288,97￡';
const priceUS = priceGB.replace('￡', '$').replace(',', '.');
console.log(priceUS);

const annoucement = 'All passengers come to boarding door 23. Boaring door 23!';

console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate'));

console.log(annoucement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise

const checkBagggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(`You are not allowed to aboard`);
  } else {
    console.log('You are allowed to aboard');
  }
};

checkBagggage('I have a laptop, some Food and a pocket Knife');
checkBagggage('Sockes and camera');
checkBagggage('Got some snacks and a gun for protection');


///////////////Working with strings part1////////////////

const airline = 'TAP Air Japan';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Japanese'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMIddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMIddleSeat('11B');
checkMIddleSeat('23C');
checkMIddleSeat('3E');

console.log(new String('Ken'));
console.log(typeof new String('Ken'));
console.log(typeof new String('Ken').slice(1));


/////////Which data structure to use?/////////////


////////////////Map Iteration///////////////////

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct (❁´◡`❁)'],
  [false, 'Try again'],
]);


console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//Quiz app
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

//Convert Map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


/////////////Maps///////////////

const rest = new Map();

rest.set('name', 'Clasical Italiano');
rest.set(1, 'Frienze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 10;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

/// rest.get([1,2])
///↑ this doesn't work!!! What you write in get method
///is not the same as whta you wrote in set method!!


///////////////Set///////////////////

const odersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(odersSet);

console.log(new Set('Ken'));

console.log(odersSet.size);
console.log(odersSet.has('Pizza'));
console.log(odersSet.has('Bread'));
odersSet.add('Garlic Bread');
odersSet.add('Garlic Bread');
console.log(odersSet);
odersSet.delete('Risotto');
// odersSet.clear(); deleate all values in a set
console.log(odersSet);

for (const oder of odersSet) console.log(oder);

// Main use of set is to remove duplicate
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('KensakuMagata').size);





///////////////Property Names///////////////////////

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days in a week:`;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);

console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and colse at ${close}`);
}


if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.oder?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.oderRice?.(0, 1) ?? 'Method does not exist');

//Array
// const users = [{ name: 'Ken', email: 'hello@gmail.com' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');


// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};




//////////////OR assignment operator/////////////////

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

rest1.owner &&= 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//Nullish: null and undefined(NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('--------OR----------');
// Use Any data type, return ANY data type, short-ciruuiting
console.log(3 || 'Ken');
console.log('' || 'Ken');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------AND------------');

console.log(0 && 'Ken');
console.log(7 && 'Ken');

console.log('Hello' && 23 && null && 'Ken');

//Pracdtical example
if (restaurant.oderPizza) {
  restaurant.oderPizza('mushroom', 'spinach');
}

restaurant.oderPizza && restaurant.oderPizza('mushroom', 'spinach');





////////1)Destructuring/////////////////////

//SPREA, because on Right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];


console.log(pizza, risotto, otherfood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; numbers.length > i; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.oderPizza('mushrooms', 'onion', 'olivers');
restaurant.oderPizza('mushroom,');


/////////Spread operator (...)/////////////

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenue = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenue);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays
const jointArr = [...restaurant.mainMenu, ...arr, ...newMenue];

console.log(jointArr);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// You will use spread operator for argument and functions

// const ingredients = [
//   prompt("Let's make pasta! Ingresient1?"),
//   prompt("Let's make pasta! Ingresient2?"),
//   prompt("Let's make pasta! Ingresient3?"),
// ];

// console.log(ingredients);

// restaurant.oderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.oderPasta(...ingredients);


////////////Object///////////////////
const newRestaurant = { ...restaurant };

console.log(newRestaurant);

const restauntCopy = { ...restaurant };
restauntCopy.name = 'Restaurant Rome';
console.log(restauntCopy.name);
console.log(restaurant.name);


restaurant.oderDelivery({
  time: '22:30',
  addres: 'Via del Sole, 21',
  mainIndx: 2,
  starterIndex: 2,
});
restaurant.oderDelivery({
  addres: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restauntName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restauntName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.oder(2, 0);
console.log(starter, mainCourse);

//Nested structureing
const nested = [2, 4, [5, 6, 7]];
// const [i, , j] = nested;
const [i, , [j, , k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

*/
