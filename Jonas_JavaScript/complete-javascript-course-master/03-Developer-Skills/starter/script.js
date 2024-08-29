// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
console.log("Japan");

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures = [-3, -2, -6, -1, "error", -9, -13, -17, -15, -14, -9, -5];

//What is temperature amplitude?? Lets saerch for it
// You have to find maximam degree and minimam desgree to clculate temperature amplitude

console.log("--------My solution--------");

function clacAmp(temperatures) {
  const tem = [];
  let n;

  for (let i = 0; i <= temperatures.length; i++) {
    tem[i] = temperatures[i];

    if (tem[i] === null || isNaN(tem[i])) {
      tem.pop();
    } else {
      continue;
    }
  }
  const tem2 = tem.flat();
  console.log(tem2);

  const maxValue = Math.max.apply(null, tem2);
  const minValue = Math.min.apply(null, tem2);

  console.log(maxValue, minValue);

  if (maxValue >= 0 && minValue < 0) {
    return maxValue + minValue;
  } else if (maxValue >= 0 && minValue >= 0) {
    return maxValue - minValue;
  } else if (maxValue < 0 && minValue < 0) {
    return minValue - maxValue;
  }
}

const amplitude = clacAmp(temperatures);
console.log(amplitude);

//problem2 :
//Function should now recieve 2 array of temps
const temperatures2 = [5, 8, 45, "error", 9, "error"];
const tempconcate = temperatures2.concat(temperatures);

console.log(tempconcate);

const amplitude2 = clacAmp(tempconcate);

console.log(amplitude2);

//------------------------------------------------------------

console.log("--------Jonas solution--------");

const temperatures3 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  if (max >= 0 && min < 0) {
    return max + min;
  } else if (max >= 0 && min >= 0) {
    return max - min;
  } else if (max < 0 && min < 0) {
    return min - max;
  }
};

calcTempAmplitude([3, 7, 4, 23, 1, "String"]);
const amp = calcTempAmplitude(temperatures3);
console.log(amp);

//problem2 :
//Function should now recieve 2 array of temps
const temperatures4 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures5 = [5, 8, 45, "error", 9, "error"];
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  if (max >= 0 && min < 0) {
    return max + min;
  } else if (max >= 0 && min >= 0) {
    return max - min;
  } else if (max < 0 && min < 0) {
    return min - max;
  }
};

const ampNew = calcTempAmplitudeNew(temperatures4, temperatures5);
console.log(ampNew);


//Debugging with the console and Breakpoint

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees Celsius")),
  };
  //B) FIND
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//-----------------------------------------

//using debugger
const calcTempAmplitudebug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let min = 0;
  let max = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  if (max >= 0 && min < 0) {
    return max + min;
  } else if (max >= 0 && min >= 0) {
    return max - min;
  } else if (max < 0 && min < 0) {
    return min - max;
  }
};
const ampbug = calcTempAmplitudebug([3, 5, 1], [9, 4, 5]);
//A) deteckted
console.log(ampbug);
*/

//Challenge1//

console.log("--------My solution------");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const strings = [];
const printForcecate = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    strings.push(`...${arr[i]}°C in ${i + 1} days`);
  }
  console.log(strings.join("") + "...");
};

printForcecate(data2);

console.log("----------Jonas solution----------");
const data3 = [17, 21, 23];
const data4 = [12, 5, -5, 0, 4];

const printForcecate2 = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForcecate2(data3);
