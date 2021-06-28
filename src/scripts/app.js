// const timeoutID = setTimeout(function () {
//     console.log("Zadziałam za 5 sekund!");
//   }, 5000);    /* 5s */
  
//  const timeoutID = setTimeout(function () {
//     console.log("Zadziałam za 5 sekund!");
//   }, 5000);    /* 5s */
   
//   clearTimeout(timeoutID);
 
// const timeoutID = setTimeout(function () {
//     console.log("Zadziałam za 5 sekund!");
//   }, 5000);    /* 5s */
   
//   clearTimeout(timeoutID);
 
// const intervalID = setInterval(function () {
//     console.log("Działam co sekundę!");
//   }, 1000);    /* 1s */
   
//   clearInterval(intervalID);
  
//  ZADANIA

// Funkcje czasu
// Zadanie 1

// const interval = setInterval(function () {
//     console.log("JavaScript Rules");
//   }, 10000);

// const timeout = setTimeout(function () {
//     console.log("Wygenerowano w setInterval");
//   }, 4000); 

  // Zadanie 2

// function helloCount(num) {
//     var count = 0
//     while (count < num) {
//       count++;
//       const interval = setInterval(function () {
//         console.log("Hello", num, count);
//       }, 1000);
//     }
//     clearInterval(interval)
// }

// function countHello(number){
//   let i = 0
//     const timerID = setInterval(function(){
//       if(i==number){
//         clearInterval(timerID);
//       }
//       console.log("Hello", i); i++ },
//         1000);
// }
// countHello(5)

// Wiecej o funkcjach
// Zadanie 1

// function firstFunc() {
//   const someInt = 1;
//   function secondFunc() {
//     console.log(someInt);
//     let otherInt = 3;
//   }
//   secondFunc();
//   console.log(otherInt);
// }
// firstFunc();

// poniewaz otherInt znajduje sie w funkcji zagniezdzonej i glowna funkacja nie ma do niej dostepu

// Zadanie 2

// function callOtherFunction(nameOfFunction) {
//   console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

//   const randomNumber1 = Math.random() * 20;
//   const randomNumber2 = Math.random() * 10;
//   nameOfFunction(randomNumber1, randomNumber2);
// }

// callOtherFunction(function (a, b) {
//   console.log("Pierwsza liczba:", a);
//   console.log("Druga liczba", b);
//   console.log("Wynik", a + b);
// });

// Zadanie 3

// console.log(czesc("Czesc"))

// function czesc(txt) {
//   console.log(txt);
// }

// console.log(czesc("Czesc"))


// const witaj = function (txt2) {
//   return txt2;
// }

// console.log(witaj("Witaj"))

// wyrazenie funkcyjne nie jest hoistowane

// Tablice

// Zadanie 1

// const a=[2,8,3,7];

// function distFromAverage(arr) {
//   const suma = arr.reduce(function(a, b) {
//     return a + b;
//   });
//   const avg = suma / arr.length;
//   arr_sd = [];
//   arr.forEach((ele) => {
//     const x = ele - avg;
//     arr_sd.push(Math.abs(x));
//   });
//   return arr_sd;
// };

// Zadanie 2

// const b = ["jablko", "banan", "gruszka"];

// console.log(b[0]);
// console.log(b[b.length-1]);
// console.log(b.slice(0,b.lenght));

// Zadanie 3

// function createArray(number) {
//   const newArray = [];

//   for (let counter = 1; counter <= number; counter++) {
//     newArray.push(counter);
//   }

//   return newArray;
// }

// console.log("tablica z liczbami do 6 = " + createArray(6));
// console.log("tablica z liczbami do 1 = " + createArray(1));
// console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
// console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// Zadanie 4

// const a = [1,2,3]

// function printTable(arr) {
//   arr.forEach(function(ele) {
//     console.log(ele);
//   });
// };

// Zadanie 5

// const a = [1,2,3,4,5,6,7];

// function multiplyArray(arr) {
//   return arr.reduce((sum, num) => sum * num);
// }

// Zadanie 6

// const a = [1,2,3,4,5,6,7];

// function getEvenAverage(arr) {
//   let even = arr.filter(num => num % 2 == 0);
//   if (even.length > 0) {
//     return even.reduce((total, num) => total + num) / even.length;
//   }else{
//     return null
//   };
// };

// Zadanie 7

// const a = [145,11,3,64,4,6,10];

// function sortArray (arr) {
//   arr.sort((a, b) => a-b)
//   return arr
// };

// Zadanie 8

// a = [1,2,3]
// b = [4,5,6,7,8]


// function addArrays (arr1, arr2) {
//   const arr3 = [];
  
//   for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
//     arr3.push((arr1[i] || 0) + (arr2[i] || 0));
//   }
//   return arr3;
// }

// Tablice wielowymiarowe

// Zadanie 1

// const multiValueArray = [
//   [2, 3],
//   ["Ala", "Ola"],
//   [true, false],
//   [5, 6, 7, 8],
//   [12, 15, 67]
// ];

// console.log(multiValueArray[3][2])
// console.log(multiValueArray[2].length)
// console.log(multiValueArray[4][2])

// Zadanie 2

// const a = [
//     [2, 3],
//     ["Ala", "Ola", "Gosia"]
// ];

// function print2DArray (arr2d) {
//   for (let i = 0; i <= arr2d.length-1; i++) {
//     for (let j = 0; j <= arr2d[i].length-1; j++) {
//       console.log(arr2d[i][j]);
//     };
//   };
// };

// Obiekty

// Zadanie 1

