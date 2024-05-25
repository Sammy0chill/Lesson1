//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Що таке JS
//Підключення скрипта
//Структура коду

//Змінні

// console.log(a); //ReferenceError: a is not defined
//let a = 10;
// console.log(a); // 10
// a = 20;
// console.log(a); //20

// console.log(b); // ReferenceError: b is not defined
// const b = 15;
// console.log(b); //15

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Типи

// typeof

// console.log(typeof 3);
// console.log(typeof "adf");
// console.log(typeof true);

// Boolean;

// let nameFieldChecked = true; // так, ім’я було перевірене
// let ageFieldChecked = false; // ні, вік не був перевіреним

// Symbol - примітивний тип даних (новий тип даних який появився в специфікації ES6)
// Спеціальний тип даних:
// undefined - зміна якій не присвоїли значення.
// null - нулєве значення, "пусте значення".

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Число

// приведення до числа

// const value = "3";
// console.log(Number(value)); // 3
// console.log(typeof Number(value));

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Перевірка на число

// let a = 31;
// console.log(a);

// const number = Number("51"); // 51
// console.log(Number.isNaN(number)); // false

// const string = Number("qweqwe"); // NaN
// console.log(Number.isNaN(string)); // true

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Number.parseInt() и Number.parseFloat()

// console.log(Number.parseInt("5ddd")); // 5
// console.log(Number.parseInt("12qg994")); // 12
// console.log(Number.parseInt("11.6qwfe79")); // 11
// console.log(Number.parseInt("zzxxc")); // NaN

// Парсить у строки число з крапкою

// console.log(Number.parseFloat("5ddd")); // 5
// console.log(Number.parseFloat("12qg994")); // 12
// console.log(Number.parseFloat("11.6qwfe79")); // 11.6
// console.log(Number.parseFloat("zzxxc")); // NaN

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//складання з крапкою

// console.log(0.1 + 0.2 === 0.3); // false

// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Объект Math

//  Math.floor(num) - повертає найбільше ціле число, меньше,
//або  таке, що дорівнює вказаному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає наименьше ціле число, більше,
// //або  таке, що дорівнює вказаному
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округлене до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше число із набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає наменше число із набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - повертає в степінь
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає випадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // випадкове число від 1 до 10

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//String

// let str = "Привіт";
// let str2 = "Одинарні лапки також дозволяються";
// let phrase = `так можна вставляти ${str}`;
// let name = "Оля";
// let hello = `Привіт ${name}`;
// console.log(hello);

// const message = "JavaScript " + "is" + " awesome";
// console.log(message); // JavaScript is awesome

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Конкатенація;
// let result;

// result = 5 + "5";
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + "5" + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// result = 5 + 5 + "5";
// console.log(result); // '105'
// console.log(typeof result); // string

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// методи строк

// const js = "JavaScript";

// length - довжина
// toLowerCase() и toUpperCase()
// indexOf()
// includes()

// const message = "Welcome to Bahamas!";

// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// console.log(message); // Welcome to Bahamas!

// console.log(message.indexOf("t")); // 8
// console.log(message.indexOf("hello")); // -1

// // Всі методи строк чутливі до регістру
// console.log(message.includes("welcome")); // false
// console.log(message.includes("Welcome")); // true

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// BigInt

// const num = 9007199499994254740991n;
// console.log(typeof num);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Об*єкти

// let user = {
//   // об’єкт
//   name: "Іван", // за ключем "name" зберігаємо значення "Іван"
//   age: 30, // за ключем "age" зберігати значення "30"
//   work: true,
// };

// console.log(user);

// отримаємо значення властивостей об’єкта:
// console.log(user.name); // Іван
// console.log(user.age); // 30

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//методи

// let user = {
//   name: "Іван",
//   age: 30,
//   "likes birds": true, // Ім’я властивості з декількох слів повинно бути в лапках
// };

// delete user.age;

// це викличе синтаксичну помилку
// user.likes birds = true

// присвоювання значення властивості
// let user = {};
// user.name = "Niko";
// console.log(user);
// user.age = 45;
// console.log(user);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Цикл “for…in”
// Для перебору всіх властивостей

// Синтаксис:

// for (key in object) {
//   // тіло циклу виконується для кожної властивості об’єкта
// }
// Наприклад, виведемо всі властивості user:

// let user = {
//   name: "Іван",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // ключі
//   console.log(key); // name, age, isAdmin
//   // значення ключів
//   console.log(user[key]); // Іван, 30, true
// }

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Впорядкування властивостей об’єкта
// let codes = {
//   49: "Німеччина",
//   41: "Швейцарія",
//   44: "Великобританія",
//   1: "США",
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

//чисельні властивості
// let user = {
//   name: "Іван",
//   surname: "Smith",
// };
// user.age = 25; // добавимо ще одну властивість

// не цілочисельні властивості перераховані в порядку створення
// for (let prop in user) {
//   console.log(prop);
// } // name, surname, age

// В JavaScript є багато інших типів об’єктів:

// Array для зберігання впорядкованих колекцій даних,
// Date для зберігання інформації про дату і час,
// Error для зберігання інформації про помилку.
// … і так далі.
