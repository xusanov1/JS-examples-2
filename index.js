"use strict";

// 1-misol

// let arr = [10,"salom",21,4,1,12,true];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         sum += arr[i];
//     }
// }

// console.log(sum);


// 2-misol

// let arr = [1,23,42,14,21,22];
// let R = 16;
// let closestNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (Math.abs(arr[i] - R) < Math.abs(closestNumber - R)) {
//     closestNumber = arr[i];
//   }
// }

// console.log(closestNumber);

// ikkinchi misolni internetdan  foydalanib bajardim 

// 3-misol

// const arr =  [10,"salom",21,4,1,12,true]

// let juftSonlarSoni = 0;
// for (let i = 0; i < arr.length; i += 2) {
//     juftSonlarSoni++;
// }

// console.log(juftSonlarSoni);

// 4-misol

// function birXilQiymatliElementlar(arr) {
//     let indekslar = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 indekslar.push(i);
//                 indekslar.push(j);
//             }
//         }
//     }
//     return indekslar;
// }

// let arr =  [10,21,4,1,12,21];
// let indekslar = birXilQiymatliElementlar(arr);
// console.log(indekslar);


// 5-misol

// let arr = [1,23,42,14,21,22];

// let toqSonlarSoni = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     toqSonlarSoni++;
//   }
// }

// console.log("Toq elementlarning soni: " + toqSonlarSoni);


// 6-misol

// let arr = [10,2,34,5,13,63,16];
// let k = 3;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= k;
// }

// console.log(arr);

// 7-misol

// let arr = [10,2,34,5,13,63,16];

// let minElement = Math.min(...arr);
// let maxElement = Math.max(...arr);

// console.log("Eng kichik element: " + minElement);
// console.log("Eng katta element: " + maxElement);

// bu misolni ishlash uchun math methodidan foydalandim internet orqali

// 8-misol

// function ochir(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             arr.splice(i + 1, 1);
//             break;
//         }
//     }
//     return arr;
// }

// let array = [10,2,2,5,13,63,63,16,5];
// let yangiArr = ochir(array);
// console.log(yangiArr);


// 9-misol

// let arr = [ 4, 5, 7, 8, 6, 9];
// let juftElementlar = [];
// let toqElementlar = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     juftElementlar.push(arr[i]);
//   } else {
//     toqElementlar.push(arr[i]);
//   }
// }

// console.log("Juft elementlar: " + juftElementlar.join(", "));
// console.log("Toq elementlar: " + toqElementlar.join(", "));


// 10-misol

let arr = [7, 4, 9, 2, 3, 1, 5];

let engKichikIndex = 0;
let engKattaIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[engKichikIndex]) {
    engKichikIndex = i;
  }
  if (arr[i] > arr[engKattaIndex]) {
    engKattaIndex = i;
  }
}

let temp = arr[engKichikIndex];
arr[engKichikIndex] = arr[engKattaIndex];
arr[engKattaIndex] = temp;

console.log("Eng kichik element: " + arr[engKichikIndex]);
console.log("Eng katta element: " + arr[engKattaIndex]);
console.log("Almashtirilgan Array: " + arr.join(", "));






