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
// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }  

//     append (str) {
//         this._value += str
//     };


//     prepend(str) {
//     this._value = str + this._value;
//     }

//     pad(str) {
//         this._value = str + this._value + str;
//     }
//  }

// const builder = new StringBuilder('.')

// console.log(builder)

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// ==================== Завдання №5

// class Car {
//     static getSpecs(car) {
//         console.log(car.maxSpeed)
//         console.log(car.speed)
//         console.log(car.isOn)
//         console.log(car.distance)
//         console.log(car.price)
//     }  

//     constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//         this.speed = speed;
//         this.price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }

//     get _price () {
//         return this.price
//     }

//     set _price(value) {
//         this.price = value;
//     }

//     turnOn() {
//         this.isOn = true;
        
//     }

//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
        
//     }
//     accelerate(value) {
//         if (this.speed + value < this.maxSpeed) {
//             this.speed = this.speed + value
//         }
//     }

//     decelerate(value) {
//         if (this.speed - value > 0) {
//             this.speed = this.speed - value;
//         }        
//     }

//     drive(hours) {
//         if (this.turnOn = true) {
//             this.distance = this.distance + hours * this.speed
//         }
//     }
    
// }


// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);



// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000


// // console.log(mustang.speed)