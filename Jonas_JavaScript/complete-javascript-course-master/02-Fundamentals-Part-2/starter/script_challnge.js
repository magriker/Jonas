"use strict";
/*
//challenge1

const calcAverage = (firstMatch, secondMatch, thirdMatch) =>
  (firstMatch + secondMatch + thirdMatch) / 3;

let dolphinAve = calcAverage(44, 23, 71); //46
let koalaAve = calcAverage(65, 54, 49); //56

console.log(dolphinAve, koalaAve);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgDolphins * 2 <= avgKoalas) {
    return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins`;
  }
}

console.log(checkWinner(dolphinAve, koalaAve));

//test2
dolphinAve = calcAverage(85, 54, 41); //60
koalaAve = calcAverage(23, 34, 27); //28

console.log(dolphinAve, koalaAve);

console.log(checkWinner(dolphinAve, koalaAve));

//challenge2

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tip = calcTip(30);

console.log(tip);

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

const total = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];

console.log(total);


//Challenge3//
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.67,

  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})!`
  );
}
*/
//Challenge4//

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tipPrice = calcTip();

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tipPrice = calcTip(bills[i]);
  tips[i] = tipPrice;
  totals[i] = bills[i] + tipPrice;
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
