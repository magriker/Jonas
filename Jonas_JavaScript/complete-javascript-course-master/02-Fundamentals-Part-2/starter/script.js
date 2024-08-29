"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log(`I can drive again `);
}

// const interface = "Audio";
// const private = 534;
// const if = 23;


function logger() {
  console.log("My name is Ken");
}
// calling/ running/invoking funcion
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function Declarations VS. Expressions//

//Function declaration
function calcAge1(birthYear) {
  // const age = 2023 - birthYear;
  return 2023 - birthYear;
}
const age1 = calcAge1(1997);

//Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1997);

console.log(age1, age2);


//Arrow function //
//Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Ken"));
console.log(yearsUntilRetirement(1980, "Bob"));


//Function Calling other function//

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


//Reviewing Functions//

function calcAge1(birthYear) {
  // const age = 2023 - birthYear;
  return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;
  //   return retirement;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired 🥳`;
  }
};
// When you write return, codes after it are not excuted!! Be carefull!!

console.log(yearsUntilRetirement(1997, "Ken"));
console.log(yearsUntilRetirement(1950, "Mike"));

// Introduction to Arrays//
const friend1 = "Ivan";
const friend2 = "Vlad";
const friend3 = "Joko";

const friends = ["Ivan", "Vlad", "Joko"];
console.log(friends);

const y = new Array(1991, 1984, 2008);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Ken";
console.log(friends[2]);

// friends = ["Bob", "Joko"]; You can't change whole array like this
const firstName = "Ken";
const Ken = [firstName, "Magata", 2023 - 1997, "unemployed", friends];

console.log(Ken);
console.log(Ken.length);

//Excercise

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];

console.log(ages);


//Basic Array Operations//

const friends = ["Ivan", "Vlad", "Joko"];

//Add elements
const newLength = friends.push("Jay"); //push method return the number of array
console.log(friends);
console.log(newLength);

friends.unshift("John"); //unahift method also return the number of array
console.log(friends);

//Remove elements
friends.pop(); //Last element of array
const popped = friends.pop(); // pop return the element that you removed
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Vlad"));
console.log(friends.indexOf("Ivan"));
console.log(friends.indexOf("Bob")); //-1 means doesn't exist

friends.push(23);
console.log(friends.includes("Ivan"));
console.log(friends.includes("Vlad"));
console.log(friends.includes(23));
console.log(friends.includes("Bob"));

if (friends.includes("Ivan")) {
  console.log("You have a riend called Ivan");
}


//Introduction to Objects//

const kenArray = [
  "Ken",
  "Magata",
  2023 - 1997,
  "Unemployed",
  [("Michel", "Peter", "Steven")],
];

// Object literal syntax
const ken = {
  firstName: "Ken",
  lastName: "Magata",
  age: 2023 - 1997,
  job: "Unemployed",
  friends: ["Michel", "Peter", "Steven"],
};


//Dot vs.Bracket Notation//

const ken = {
  firstName: "Kensku",
  lastName: "Magata",
  age: 2023 - 1997,
  job: "Unemployed",
  friends: ["Michel", "Peter", "Steven"],
};

console.log(ken.lastName);
console.log(ken["firstName"]);

const nameKey = "Name";
console.log(ken["first" + nameKey]);
console.log(ken["last" + nameKey]);

//console.log(ken."first" + nameKey)

const interestedIn = prompt(
  "What do you want to know about Ken? Choose between firstName, lastName, age, job, and friends"
);
console.log(interestedIn);

if (ken[interestedIn]) {
  console.log(ken[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friendsaa"
  );
}

ken.location = "Japan";
ken["twitter"] = "@magriker";

console.log(ken);

//Challenge
//Kensaku has 3 friends, and his friend is called Michel

console.log(
  `${ken.firstName} has ${ken.friends.length} friends, and his friend is called ${ken.friends[0]}`
);


//Object Methods//
const ken = {
  firstName: "Kensku",
  lastName: "Magata",
  birthYear: 1997,
  job: "Unemployed",
  friends: ["Michel", "Peter", "Steven"],
  hasDriversLicese: false,

  //   calcAge: function (birthYear) {
  //     return 2023 - birthYear;
  //   },

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2023 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  //   getSummaary: function () {
  //     if (this.hasDriversLicese) {
  //       return `${this.firstName} is ${this.age}-year old ${this.job}, and he has a driver license`;
  //     } else {
  //       return `${this.firstName} is ${this.age}-year old ${this.job}, and he has no driver license`;
  //     }
  //   },

  getSummaary: function () {
    return `${this.firstName} is ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicese ? "a" : "no"} driver license`;
  },
};
console.log(ken.calcAge());
console.log(ken);

console.log(ken.age);
console.log(ken.age);
console.log(ken.age);

//"Ken is 46-year old teacher, and he has a driverlicense"

console.log(ken.getSummaary());


//Iteration: the for loop//

// console.log("Lifting weights repetition 1 🏆");
// console.log("Lifting weights repetition 2 🏆");
// console.log("Lifting weights repetition 3 🏆");
// console.log("Lifting weights repetition 4 🏆");
// console.log("Lifting weights repetition 5 🏆");
// console.log("Lifting weights repetition 6 🏆");
// console.log("Lifting weights repetition 7 🏆");
// console.log("Lifting weights repetition 8 🏆");
// console.log("Lifting weights repetition 9 🏆");
// console.log("Lifting weights repetition 10 🏆");

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏆`);
}


//Loop arrays, Breaking and Continuing//
const kenArray = [
  "Ken",
  "Magata",
  2023 - 1997,
  "Unemployed",
  ["Michel", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < kenArray.length; i++) {
  console.log(kenArray[i], typeof kenArray[i]);
  //   types[i] = typeof kenArray[i];
  types.push(typeof kenArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages[i] = 2023 - years[i];
  //   ages.push(2023 - years[i]);
}

console.log(ages);

//continue and breake
console.log(`--- ONLY STRING ---`);
for (let i = 0; i < kenArray.length; i++) {
  if (typeof kenArray[i] !== "string") continue;
  console.log(kenArray[i], typeof kenArray[i]);
}

console.log(`--- ONLY NUMBER---`);
for (let i = 0; i < kenArray.length; i++) {
  if (typeof kenArray[i] === "number") break;
  console.log(kenArray[i], typeof kenArray[i]);
}


//Looping Backwards and Loops in Loops//
const kenArray = [
  "Ken",
  "Magata",
  2023 - 1997,
  "Unemployed",
  ["Michel", "Peter", "Steven"],
];

//0,1,....,4
//4,3......,0

for (let i = kenArray.length - 1; i >= 0; i--) {
  console.log(kenArray[i]);
}

for (let excercise = 1; excercise <= 3; excercise++) {
  console.log(`----Starting exercise${excercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Excercise ${excercise}: Lifting weht repetition ${rep}🏋️`);
  }
}

*/
//The while loop//

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏆`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE:Lifting weights repetition ${rep} 🏆`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end....`);
  }
}
