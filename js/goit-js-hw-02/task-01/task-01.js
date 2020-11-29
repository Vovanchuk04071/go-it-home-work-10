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
// const logItems = function (array) {
//   let numbers = 1;
//   for (let i = 0, max = array.length; i < max; i += 1, numbers += 1) {
//     console.log(numbers, array[i]);
//   }
//   return array;
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ==============

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let numberOfWords = message.split(" ");
//   let max = numberOfWords.length;
//   return max * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// ======================
// const findLongestWord = function (string) {
//   const allWord = string.split(" ");
//   let word = allWord[0];
//   let biggerLength = allWord[0].length;
//   for (let i = 1, max = allWord.length; i < max; i += 1) {
//     if (biggerLength < allWord[i].length) {
//       biggerLength = allWord[i].length;
//       word = allWord[i];
//     }
//   }
//   return word;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// =============================================================
// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + "...";
//   }

//   return string;
// };

// =================================

// const formatString = function (string) {
//   let changedString = string.split("");
//   if (string.length < 40) {
//     return string;
//   } else {
//     changedString.length = 40;
//     changedString.push("...");
//     let newString = changedString.join("");
//     return newString;
//   }
// };
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// ===================================================================== 5 завдання
// const checkForSpam = function (message) {
//   if (
//     message.toLowerCase().includes("sale") ||
//     message.toLowerCase().includes("spam")
//   ) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ============================================================================= 6 завдання
// let input;
// const numbers = [];
// let total = 0;

// input = prompt("Введите число");
