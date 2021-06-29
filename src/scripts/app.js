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

// Zadanie

// const country = {
//   capital: 'Warszawa',
//   population: 2000000,
//   president: 'A. Dupa',
//   ministers: ['Cwok 1', 'Cwok 2'],
// };

// console.log(country.capital, country.population, country.president, country.ministers)

// Zadanie 2

// const timeMachine = {
//   shape: "square",
//   model: "new",
//   run: function (date, place) {
//     return `przenosze sie w czasie do daty: ${date} do miejsa ${place}`
//   }
// }

// console.log(timeMachine.shape, timeMachine.model, timeMachine.run("01.01.2020", "NY"));

// Zadanie 3

// const book = {
//   title: "slon",
//   author: "Macierewicz",
//   numberOfPages: 100,
// }

// console.log(book.title, book.author, book.numberOfPages)

// Zadanie 4

// const person = {
//   name: "lukasz",
//   age: 36,
//   sayHello: function (){
//     console.log("Hello")
//   }
// }

// console.log(person.name, person.age)
// person.sayHello()

// Zadanie 5

// const recipt = {
//   title: "sernik",
//   servings: 2,
// }

// recipt.ingredients = ["ser", "rodzynki"]

// console.log(recipt.title, recipt.servings, recipt.ingredients[0], recipt.ingredients[1])

// Zadanie 6

// const spoon = {
//   isExist: true,
// };

// const fork = spoon;

// fork.isExist = false;

// console.log(fork.isExist)

// This

// Zadanie 1

// const car = {
//   brand: "WV",
//   color: "green",
//   numberOfKilometers: 0,
//   printCarinfo: function () {
//     console.log(this.brand, this.color, this.numberOfKilometers);
//   },
//   drive: function (km) {
//     this.numberOfKilometers += km;
//   },
//   review: ["01/01/2020", "01/01/2021"],
//   reviewAdd: function (date) {
//     this.review.push(date);
//   },
//   reviewShow: function () {
//     console.log(this.review);
//   },
// }

// Zadanie 2

// const calculator = {
//   save: function (newA, newB) {
//     this.a = newA;
//     this.b = newB;
//   },
//   multiply: function () {
//     return (this.a * this.b);
//   },
//   sum: function () {
//     return (this.a + this.b);
//   },
// };

// calculator.save(2, 3);
// console.log(calculator.sum());
// console.log(calculator.multiply());

// Zadanie 3

// const stairs = {
//   step: 0,
//   up: function () {
//     this.step++
//   },
//   down: function () {
//     this.step--
//   },
//   printStep: function () {
//     console.log(this.step)
//   },
// }
// stairs.up();
// stairs.up();
// stairs.up();
// stairs.down();
// stairs.printStep();

// Zadanie 4

// Constructor function

// function User() {
//   this.name = "Ala";
// }
 
// const user1 = new User();
// const user2 = new User();
// const user3 = new User();
 
// console.log(user1, user2, user3);
// //User {name: "Ala"}
// //User {name: "Ala"}
// //User {name: "Ala"}

// function Car(type, hp, color) {
//   this.type = type;
//   this.hp = hp;
//   this.color = color;
// };

// const fiat = new Car("fiat", 125, "red");

// Zadanie 1

// class Basket{
//   constructor(){
//     this.products = []
//     this.sum = 0
//   }
//   addProduct(name, price){
//     this.name=name
//     this.price = parseInt(price)
//     this.products.push(
//       {
//         name:this.name,
//         price:this.price,
//       }
//     )   
//   }
//   showBasket() {
//     this.sum = this.products.map(p => p.price).reduce((acc, curr) => acc + curr)
//     console.log(`Products: ${this.products.map(item => item.name)}, price: ${this.sum}`)
//   }
// }

// const aliceBasket = new Basket("chleb", 10);
// aliceBasket.addProduct('pomidor', 10);
// aliceBasket.addProduct('arbuz', 40);
// aliceBasket.showBasket();

// Zadanie 2

// const Robot = function (name) {
//   this.name = name;
//   this.isFunctional = false;
// };

// Robot.prototype.sayHi = function (toWho) {
//   if (this.isFunctional === true) {
//     console.log('Robot ' + this.name + ' greets ' + toWho);
//   } else {
//     console.log('Robot ' + this.name + ' is broken');
//   }
// };

// Robot.prototype.changeName = function (newname) {
//   console.log('Robot ' + this.name + ' changes name to ' + newname);
//   this.name = newname;
// };

// Robot.prototype.fixIt = function () {
//   this.isFunctional = true;
//   console.log('Robot ' + this.name + ' was fixed');
// };

// const robot1 = new Robot("lukasz");
         
// Zadanie 3

// const Calc = function () {
//   this.hist = [];
// };

// Calc.prototype.add = function (num1, num2) {
//   const result = num1 + num2;
//   this.hist.push(`added ${num1} to ${num2} got ${result}`)
// };

// Calc.prototype.multiply = function (num1, num2) {
//   const result = num1 * num2;
//   this.hist.push(`multiplied ${num1} with ${num2} got ${result}`);
// };

// Calc.prototype.subtract = function (num1, num2) {
//   const result = num1 - num2;
//   this.hist.push(`subtracted ${num1} from ${num2} got ${result}`);
// };

// Calc.prototype.divide = function (num1, num2) {
//   const result = num1 / num2;
//   this.hist.push(`divide ${num1} by ${num2} got ${result}`);
// };

// Calc.prototype.printOperations = function () {
//   console.log(this.hist)
// }

// Calc.prototype.clearOperations = function () {
//   this.hist = [];
// }

// Zadania domowe

// Zadanie 1

// function getNumber(num, arr) {
//   return arr.includes(num)
// };

// Zadanie 2

// function addTheSameNumbers(num, arr) {
//   return arr.includes(num) ? (arr.filter((x) => x == num).length) * num : null;
// };

// Zadanie 3

// const planets = [
//   {
//     name: 'Merkury',
//     numberOfMoons: 0,
//   },
//   {
//     name: 'Wenus',
//     numberOfMoons: 0,
//   },
//   {
//     name: 'Ziemia',
//     numberOfMoons: 1,
//   },
//   {
//     name: 'Mars',
//     numberOfMoons: 2,
//   },
//   {
//     name: 'Jowisz',
//     numberOfMoons: 63,
//   },
//   {
//     name: 'Saturn',
//     numberOfMoons: 60,
//   },
//   {
//     name: 'Uran',
//     numberOfMoons: 27,
//   },
//   {
//     name: 'Neptun',
//     numberOfMoons: 13,
//   },
// ];

// function sortPlanet(planets) {
//   planets.sort((a, b) => (b.numberOfMoons - a.numberOfMoons))
//   console.log(planets)
// }

// Zadanie 4

function factors(num) {
  if (num > 0) {
    var str = [];
    for (var i = num; i >= 1; i--) {
      if (num % i == 0) {
        str.push(i);
      }
    }
    console.log(str);
  } else {
    console.log([])
  }
}

// Zadanie 5
// Zadanie 6




