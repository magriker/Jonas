"use strict";
/*
function describeCountry(country, population, capitalCity) {
  const str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return str;
}

const country1 = describeCountry("Japan", 100, "Tokyo");
const country2 = describeCountry("Serbia", 7, "Belgade");
const country3 = describeCountry("Germany", 80, "Berlin");
console.log(country1);
console.log(country2);
console.log(country3);


function percentageOfworld1(population) {
  return (population / 7900) * 100;
}

const population1 = percentageOfworld1(100);
const population2 = percentageOfworld1(80);
const population3 = percentageOfworld1(7);

console.log(population1);
console.log(population2);
console.log(population3);

const percentageOfworld2 = function (population) {
  return (population / 7900) * 100;
};

const population4 = percentageOfworld2(100);
const population5 = percentageOfworld2(80);
const population6 = percentageOfworld2(7);

console.log(population4);
console.log(population5);
console.log(population6);


//Arrow function//

const percentageOfworld3 = (poplulation) => (poplulation / 7900) * 100;

const population4 = percentageOfworld3(100);

console.log(population4);


//Function Calling other function//

function percentageOfworld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(counrty, population) {
  const percentage = percentageOfworld1(population);
  return `${counrty} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation("Japan", 100));
console.log(describePopulation("Germany", 80));
console.log(describePopulation("China", 1400));

// Introduction to Arrays//
function percentageOfworld1(population) {
  return (population / 7900) * 100;
}

const populationJ = 100;
const populationG = 80;
const populationS = 7;
const populationU = 40;

const populations = [populationJ, populationG, populationS, populationU];

console.log(populations.length === 4);

const percentages = [
  percentageOfworld1(populations[0]),
  percentageOfworld1(populations[1]),
  percentageOfworld1(populations[2]),
  percentageOfworld1(populations[3]),
];

console.log(percentages);

//Basic Array Operations//

const neighbours = ["Korea", "Russia", "China"];

neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central Europe");
}

neighbours[neighbours.indexOf("Korea")] = "North Korea";

console.log(neighbours.includes("North Korea"));

console.log(neighbours);


//Introduction to Objects/

const myCountry = {
  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 100,
  neighbours: ["Korea", "Cina", "Russia"],
};


//Dot vs.Bracket Notation//

const myCountry = {
  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 100,
  neighbours: ["Korea", "Cina", "Russia"],
};

myCountry.population += 2;
console.log(myCountry);

myCountry["population"] -= 2;

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `
);

//Object Methods//

const myCountry = {
  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 100,
  neighbours: ["Korea", "Cina", "Russia"],

  describe: function () {
    return `${this.country} has ${this.population} million people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.island = this.neighbours.length === 0 ? true : false;
    return this.island;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());


//Iteration: the for loop//

for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting.`);
}


//Loop arrays, Breaking and Continuing//
const populationJ = 100;
const populationG = 80;
const populationS = 7;
const populationU = 40;

function percentageOfworld1(population) {
  return (population / 7900) * 100;
}

const populations = [populationJ, populationG, populationS, populationU];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfworld1(populations[i]);
  // percentages2.push(percentage)
  percentages2[i] = percentage;
}

console.log(percentages2);


//Looping Backwards and Loops in Loops//

const listOfNeigbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const neighbours = ["Canada", "Russia", "China"];

for (let i = 0; i < listOfNeigbours.length; i++) {
  for (let x = 0; x < neighbours.length; x++) {
    if (listOfNeigbours[i].includes(neighbours[x])) {
      console.log(`Neighbour: ${neighbours[x]} for Japan`);
    } else {
      continue;
    }
  }
}

console.log("-------------");
for (let i = 0; i < listOfNeigbours.length; i++) {
  for (let y = 0; y < listOfNeigbours[i].length; y++) {
    console.log(`Neighber: ${listOfNeigbours[i][y]} `);
  }
}
*/

//The while loop//

// const populations = [populationJ, populationG, populationS, populationU];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const percentage = percentageOfworld1(populations[i]);
//   // percentages2.push(percentage)
//   percentages2[i] = percentage;
// }

// console.log(percentages2);

const populationJ = 100;
const populationG = 80;
const populationS = 7;
const populationU = 40;

function percentageOfworld1(population) {
  return (population / 7900) * 100;
}

const populations = [populationJ, populationG, populationS, populationU];
const percentage3 = [];
let a = 0;
while (a <= populations.length - 1) {
  const percentage = percentageOfworld1(populations[a]);
  // percentage3.push(percentage);
  percentage3[a] = percentage;

  a++;
}

console.log(percentage3);
