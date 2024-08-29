/*

// Values and Variables assignment

let country = "Japan";
let continent = "Asia";
let population = 100000000;

console.log(country);
console.log(continent);
console.log(population);

// Data type assignment

let country = "Japan";
let continent = "Asia";
let population = 100000000;

let island = false;
let language;

console.log(typeof island);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



// let, const and var assignment//

const language = "Japanese";
const country = "Japan";
const continent = "Asia";
let population = 100000000;

console.log(language);
console.log(country);
console.log(continent);
console.log(population);


//Basic Operators//

const language = "Japanese";
const country = "Japan";
const continent = "Asia";
let population = 100000000;
let splitCountry = population / 2;
splitCountry++;

const description =
  country +
  " is in " +
  continent +
  ", " +
  " and its" +
  " " +
  population +
  " people speak " +
  language;

const populationFin = 6000000;
const averagePopulation = 33000000;
console.log(population < averagePopulation);
console.log(population >= populationFin);
console.log(splitCountry);

console.log(description);


//Strings and Template Literals//

const language = "Japanese";
const country = "Japan";
const continent = "Asia";
let population = 100;
let splitCountry = population / 2;
splitCountry++;

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);


//Taking Decisitios:if/else Statements//

const population = 20;
const averagePopu = 33;
const country = "Japan";

if (population > averagePopu) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopu - population
    }} million below average`
  );
}


// Type conversionnand Coercion//

"9" - "5";
"19" - "13" + "17";
"19" - "13" + 17;
"123" < 57;
5 + 6 + "4" + 9 - 4 - 2;

4;
("617");
23;
1143;


//Equality Operators: == vs. ===//

const numNeighbours = Number(
  prompt(`How many  neighbour countyies does your county have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 borders`);
} else {
  console.log(`No borders`);
}


//Logical Operators//

const language = "Japanese";
const country = "Japan";
const continent = "Asia";
const island = true;
const population = 100;

if (language === "English" && population < 50 && !island) {
  console.log(`You should live in ${country}`);
} else {
  console.log(` ${country} does't meet your criteria`);
}

//The switch Statement//

const language = "japanese";

switch (language) {
  case `chinese`:
    console.log(`MOST number of native speakers`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`Number4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Greate language`);
}


//Conditional (Teraty) Operators//
const language = "Japanese";
const country = "Japan";
const continent = "Asia";
const island = true;
const population = 1;

const avobeOrBelow = population > 30 ? `avobe` : `below`;

console.log(`${country}'s population is ${avobeOrBelow} average`);
*/
