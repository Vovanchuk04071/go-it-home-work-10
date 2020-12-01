"use strict";

// ===========================================
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function () {
//     console.log(this.login, this.email)
// };



// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });


// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ===============================================

// class User {
//     constructor(object) {
//         this.name = object.name;
//         this.age = object.age;
//         this.followers = object.followers;
//     }
    
//     getInfo () {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//         );
//     };
   
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers


// =================

// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
    
//     getInfo () {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//         );
//     };
   
// }

// const mango = new User( 'Mango', 2, 20
// );

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User('Poly', 3, 17,
// );

// poly.getInfo(); // User Poly is 3 years old and has 17 followers



// ================================================================== Задача 3
// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }

//     getItems() {
//       return (this.items)
//     }

//     addItem(item) {
//         this.items.push(item)
//         // return (this.items)
//     }

//     removeItem(item) {
//       this.items = this.items.filter(currItem => currItem !== item)
//     }  
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// ========= Завдання №4
class StringBuilder {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this.value
    }
 }

const builder = new StringBuilder('.')


builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='