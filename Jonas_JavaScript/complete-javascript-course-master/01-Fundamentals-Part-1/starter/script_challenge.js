/*
//Challenge1//


// let markMass = 78;
// let markheight = 1.69;
// let johnMass = 92;
// let johnheight = 1.95;


const markMass = 95;
const markheight = 1.88;
const johnMass = 85;
const johnheight = 1.76;

const markBMI = markMass / markheight ** 2;
const johnBMI = johnMass / johnheight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);



//Challenge2//

const markMass = 78;
const markheight = 1.69;
const johnMass = 92;
const johnheight = 1.95;

// const markMass = 95;
// const markheight = 1.88;
// const johnMass = 85;
// const johnheight = 1.76;

const markBMI = markMass / markheight ** 2;
const johnBMI = johnMass / johnheight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
  console.log(`John's BMI(${johnBMI} is higher than Mark's BMI(${markBMI}))`);
}


//Challenge3//

// const aveDolphins = (96 + +108 + 89) / 3; //97.6
// const aveKoalas = (88 + 91 + 110) / 3;  //96.3

// if(aveDolphins > aveKoalas){
//     console.log(`Dolphins won!`);
// }else if(aveDolphins < aveKoalas){
//     console.log(`Koalas won!`);
// }else{
//     console.log(`Draw`);
// }

//Bonus1

// const aveDolphins = (97 + +112 + 101) / 3; //103
// const aveKoalas = (109 + 95 + 123) / 3; //109

// if (aveDolphins > 100 && aveKoalas > 100 && aveDolphins > aveKoalas) {
//   console.log(`Dolphins won!`);
// } else if (aveDolphins > 100 && aveKoalas > 100 && aveDolphins < aveKoalas) {
//   console.log(`Koalas won!`);
// } else if (aveDolphins > 100 && aveKoalas < 100) {
//   console.log(`Dolphins won!`);
// } else if (aveDolphins < 100 && aveKoalas > 100) {
//   console.log(`Koalas won!`);
// } else {
//   console.log(`Draw`);
// }

//Bonus2

const aveDolphins = (97 + +112 + 101) / 3; //103
const aveKoalas = (109 + 95 + 106) / 3; //103

if (aveDolphins > aveKoalas && aveDolphins >= 100) {
  console.log(`Dolphins won!`);
} else if (aveDolphins < aveKoalas && aveKoalas >= 100) {
  console.log(`Koalas won!`);
} else if (
  aveDolphins === aveKoalas &&
  aveDolphins >= 100 &&
  aveKoalas >= 100
) {
  console.log(`Both won the trophy!`);
} else {
  console.log(`No team won`);
}
*/

//Challenge3//

const billValue = 430;

tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(tip);

console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value is ${
    billValue + tip
  }`
);
