/*

// Values and Variables//

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Ken");
console.log(23);

let firstName = "Ken";
let first = "Bob";
let firstNamePerson = "Mike";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $name = "Bob";
let jonas_matilda = "Ivan";
let PI = 3.2425;

let myFirstjob = "programmer";
let myCurrentjob = "Teacher";

console.log(myFirstjob);

// you cant start variavles with numbers and uppercase letters.
// Also you acnt use & reserved names (function,new and etc) on JavaScript

// Data types//

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "ken");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

console.log(typeof null);

// let, const and var//

let age = 30;
age = 31;

const birthYear = 1996;

// birthYear = 1990;  You can't change value declared by const
// const job; You also can't declare empty variable with const

var job = "programmer";
job = "teacher";

// var is almost the same as let, but don't use it!

lastName = "Magata";
console.log(lastName);


//Basic Operators//

//math operators
const now = 2023;
const ageKen = now - 1997;
const ageSara = now - 2018;
console.log(ageKen, ageSara);
console.log(ageKen * 2, ageSara / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Kensaku";
const lastName = "Magata";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 10; // x + 10 = 25
x *= 4; // x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

//comparison operators
console.log(ageKen > ageSara); // >, <, >=, <=
console.log(ageKen >= 18);

const isFullage = ageSara >= 18;

console.log(now - 1997 > now - 2018);


//Operator precedence//

const now = 2023;
const ageKen = now - 1997;
const ageSara = now - 2018;

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const avarageAge = (ageKen + ageSara) / 2;
console.log(ageKen + ageSara);


//Strings and Template Literals//

const firstName = "Ken";
const job = "unemployed";
const birthYear = 1997;
const year = 2023;

const ken =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(ken);

const kenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(kenNew);

console.log(`Just a regulat string..`);

console.log(`String with \n\
multiple\n\lines`);

console.log(`String
multiple
lines`);


//Taking Decisitios:if/else Statements//

const age = 15;

if (age >= 18) {
  console.log(`Sara can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;

  console.log(`Sara is too young. Wait another ${yearsLeft} years`);
}
//This is called controll structure

const birthYear = 2021;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
//When you declare variable inside of code block, it doesn't work out of code block


// Type conversionnand Coercion//

//Type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Ken")); //NaN
console.log(typeof NaN); //NaN is invalid number

console.log(String(23), 23);

//Type coercion
console.log("I'm " + 23 + " years old");
console.log("I'm " + String(23) + " years old");

console.log("23" + "10" + 3); //"23103"
console.log("23" - "10" - 3); // 10! When you use minus operator, JS triggers opposit conversion to plus
console.log("23" * "3");
console.log("23" / "3");

let n = "1" + 1; // string "11"

n = n - 1; // 11-1 = 10

console.log(n); //10


//Truthly and Falsy Values//

//5 falsy values: 0, "",undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Ken")); //false
console.log(Boolean({})); //false
console.log(Boolean("")); //false

const money = 100;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;

if (height) {
  console.log("Yeaaa Height is defined");
} else {
  console.log("Height is undefined");
}



//Equality Operators: == vs. ===//

const age = "18";

if (age === 18) console.log("You just  became an adult :D");

if (age == 18) console.log("You just  became an adult :D (loose)");

//loose equality is fragile, so you should avoid using it as much as possible

const favorite = Number(prompt("What is your favorite number?"));

console.log(favorite);
console.log(typeof favorite); //string

if (favorite === 23) {
  //23 === 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23?");
}


//Logical Operators//

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sara is able to drive!`);
// } else {
//   console.log(`Someone else should drive....`);
// }

const isTired = false; //C

console.log(hasDriversLicense && hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sara is able to drive!`);
} else {
  console.log(`Someone else should drive....`);
}


//The switch Statement//

const day = `Thurday`;

switch (day) {
  case `Monday`: // day === `Monday`
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `Teusday`:
    console.log(`Prepare theory videos`);
    break;
  case "Wednesday":
  case "Thursday":
    console.log(`Write code examles`);
    break;
  case `Friday`:
    console.log(`Record videos`);
    break;
  case `Saturday`:
  case `Sunday`:
    console.log(`Enjoy the weekend:D`);
    break;
  default:
    console.log(`Not a vaild day!`);
}

if (day === "Monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "Teusday") {
  console.log(`Prepare theory videos`);
} else if (day === "Wednesday" || day === "Thursday") {
  console.log(`Write code examles`);
} else if (day === "Friday") {
  console.log(`Record videos`);
} else if (day === "Saturday" || day === "Sunday") {
  console.log(`Enjoy the weekend:D`);
} else {
  console.log(`Not a vaild day!`);
}



//Statements and Expressions//

// 3 + 4
// 1991
// true  && fales %% !fales

//All those makeing values are "expression"

if (23 > 10){
    const str = "23 is bigger";
}

console.log(`I'm ${2037-1991} years old`)
*/

//Conditional (Teraty) Operators//

const age = 10;

age >= 18
  ? console.log(`I like to drink wine🍷`)
  : console.log(`I like to drink water💧`);

const drink = age >= 18 ? `wine🍷` : `water💧`;

console.log(drink);

console.log(`I like to drink ${drink}`);
