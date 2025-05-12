//  deklarasi arrow function
const namafungsi = (parameter) => {
  return hasil;
};

// contoh
const tambah = (a, b) => {
  return a + b;
};
console.log(tambah(3, 4));

// refactor
const perkalian = (y, x) => y * x;
console.log(perkalian(4, 5));

// jika hanya satu parameter, kurung bisa di hilangkan
// const menyapa = (nama) => "Halo, ${nama}!";
// console.log(menyapa("andi"));

// perbedaan
// function fungsibiasa(){
// console.log(this); mengacu ke objek pemanggil
// }

// function fungsiArrow = () => {
// console.log(this); mengacu ke 'this' dari lingkup luar
// }
console.log(2 ** 3);

console.log(2 + "2" - 1);

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

console.log(typeof null);

console.log(Boolean("false"));

let x = 5;
let y = x++;
console.log(y);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };
// console.log(person);

let fruits = ["apple", "banana", "orange"];
fruits[0] = "grape";
console.log(fruits);

let myMap = new Map();
myMap.set("name", "endy");
console.log(myMap);
console.log(myMap.get("name"));

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   nickName: "wakwaw"
// };
// console.log(person.nickName);
// console.log(person.["nickname"]);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
person.country = "Indonesia";
console.log(person.country);

let mySet = new Set([1, 2, 3]);
mySet.add(2);
console.log(mySet);

// const arrayOne = [1, 2, 3];
// const arrayTwo = [...arrayOne, 4, 5];
// console.log(arrayTwo);

function myFunc(...params) {
  console.log(params.length);
}
myFunc("one", "two", "three", "four");

// spread operator
const arrayOne = [1, 2, 3];
console.log(arrayOne);

// menyisipkan data
const arrayTwo = [...arrayOne, 4, 5];
console.log(arrayTwo);

// rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));

//  contoh 2
function myfunc(number, numbertwo, ...params) {
  console.log("tampilkan", number);
  console.log("tampilkan", numbertwo);
  console.log("tampilkan2", params);
}
myfunc("satu", "dua", "tiga", "empat", "lima");

// contoh 3 (Menghitung)
function lengthParams(...params) {
  console.log("view", params);
  console.log(params.length);
}
lengthParams("satu", "dua", "tiga", "empat", "lima");

//  contoh 4
const names = ["abdul", "budi", "banu", "chandra", "bejo"];
const [name1, name2, ...rest] = names;
console.log(name1);
console.log(name2);
console.log(rest);
