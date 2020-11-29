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


// const amountOfNumbers = function () {
//   let total = 0;
//   const numbers = [];
//   let input = prompt("Введите число");

//   // if () {
//   //   alert('Вы ввели не число')
//   // }
//   while (input !== null) {
//     numbers.push(input)
//     input = prompt("Введите число");
//   }
//   if (input === null & numbers.length > 0) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       total += Number(numbers[i]);
//     }
//   } else {
//     console.log("неа")
//   }
//   return console.log(total);
// }

// amountOfNumbers();

// ========================== завдання 7. додаткове
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length >= 4 & login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Юля Чуприна
// const isLoginValid = (login) => {
//   return (login.length >= 4 && login.length <= 16) ? true : false;
// };

// 
// const isLoginUnique = (allLogins, login) => (
//   allLogins.includes(login) ? true : false
// );

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login)
//       return ('Логин успешно добавлен!')
//     } else {
//       return ('Такой логин уже используется!')
//     }
//   } else {
//     return ('Ошибка! Логин должен быть от 4 до 16 символов');
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(logins)