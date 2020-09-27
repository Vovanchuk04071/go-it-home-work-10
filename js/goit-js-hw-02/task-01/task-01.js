"use strict";

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNumber = prompt("Введите число");
// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[clientNumber]); // Mango

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step);
//   {
//     console.log(i);
//   }
// };

// count(undefined, 5, 2);

// const logItems = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let i = 0;
// let a = 1;

// while (i < logItems.length) {
//   console.log(a, logItems[i]);
//   i += 1;
//   a += 1;
// }

// ======================
const logItems = function (array) {
  let numbers = 1;
  for (let i = 0, max = array.length; i < max; i += 1, numbers += 1) {
    console.log(numbers, array[i]);
  }
  return array;
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
