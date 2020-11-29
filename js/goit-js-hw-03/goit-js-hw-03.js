"use strict";
// ===================================завдання 1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = 'false';
// for (const key of Object.keys(user)) {
//     console.log(key, user[key]);
// }

// =========================================== Завдання 2
// const countProps = function (obj) {
//     return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({
//     name: 'Mango',
//     age: 2
// })); // 2

// console.log(countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500
// })); // 3

// ==========================завдання 3
// const findBestEmployee = function (employees) {
//     const name = Object.entries(employees);
//     let maxKey = name[0][0];
//     let maxVolue = name[0][1];

//     for (const [key, volue] of name) {
//         if (volue > maxVolue) {
//             maxVolue = volue;
//             maxKey = key;
//         }
//     };
//     return maxKey;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// ====================== Завдання 4
// const countTotalSalary = function (employees) {
//     const values = Object.values(employees);
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// // ======================= Завдання 5
// const products = [
//   {
//     name: "Радар",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Сканер",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Дроид",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Захват",
//     price: 1200,
//     quantity: 2,
//   },
// ];

// const getAllPropValues = function (arr, prop) {
//   let arrey = [];
//   //   console.log(arr, prop);
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i].hasOwnProperty(prop));
//     if (arr[i].hasOwnProperty(prop)) {
//       arrey.push(arr[i][prop]);
//     }
//   }
//   return arrey;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// ================================================= Завдання 7

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// ==========================================================
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']



// ====================================================
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };  

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.call(inventory, itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// ===============================================
// 
