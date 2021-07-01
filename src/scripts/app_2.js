// obiekty

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// class Cat extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }
// let cat = new Cat("Filemon", 4);
// console.log(cat);
// Cat {name: "Filemon", age: 4}

// Zadanie 1

// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   };
// };

// class Boat extends Vehicle {
//   constructor(name) {
//     super(name);
//   };
//   swim() {
//   console.log(this.getName() + " plywa");
//   }
// };

// class Car extends Vehicle {
//   constructor(name) {
//     super(name);
//   };
//   ride() {
//   console.log(this.getName() + " jedzie");
//   }
// };

// class Plane extends Vehicle {
//   constructor(name) {
//     super(name);
//   };
//   fly() {
//   console.log(this.getName() + " lata");
//   }
// };

// let boaty = new Boat("Magnum");
// let cary = new Car("BMW");
// let plany = new Plane("Airbus");

// boaty.swim();
// cary.ride();
// plany.fly();


// class Vehicle {
//   constructor(typeVehicle) {
//     this.typeVehicle = typeVehicle;
//   }
//   describe() {
//     return `This is type vehicle: ${this.typeVehicle}`;
//   }
// }
// class Boat extends Vehicle {
//   constructor(typeVehicle, color) {
//     super(typeVehicle);
//     this.color = color;
//   }
//   describe() {
//     return super.describe() + 'Color: ' + this.color;
//   }
//   flow() {
//     console.log(`This ${this.typeVehicle} is flowing.`);
//   }
// }
// class Car extends Vehicle {
//   constructor(typeVehicle, model) {
//     super(typeVehicle);
//     this.model = model;
//   }
//   drive() {
//     console.log(`This ${this.typeVehicle} id drive.`);
//   }
// }
// class Plane extends Vehicle {
//   constructor(typeVehicle, number) {
//     super(typeVehicle);
//     this.number = number;
//   }
//   fly() {
//     console.log(
//       `${this.typeVehicle}, Fly Number: ${this.number} is flying to Maroko.`
//     );
//   }
// }

// let boaty = new Boat('osobowy', 'red');

// Zadanie 2

// class Duck {
//   constructor() {
//     this.type = "ordinary duck";
//   }
//   sound() {
//     return console.log("Quack quack");
//   };
//   swim() {
//     return console.log("I'm swimming ...");
//   };
//   print() {
//     return console.log(`Looks like ${this.type}`);
//   };
// };

// let donaldDuck = new Duck();

// class WildDuck extends Duck {
//   constructor(type) {
//     super(type)
//     this.type = "wild duck";
//   };
// };

// let duffyDuck = new WildDuck();

// duffyDuck.sound();
// duffyDuck.swim();
// duffyDuck.print();

// class MallardDuck extends Duck {
//   constructor(type) {
//     super(type);
//     this.type = 'mallard duck';
//   };
// };

// let daisyDuck = new MallardDuck();

// daisyDuck.print();
// daisyDuck.swim();
// daisyDuck.sound();

// Duck.prototype.fly = function () {
//   return console.log("I'm flying ...");
// };

// class RubberDuck extends Duck {
//   constructor(type) {
//     super(type);
//     this.type = "rubber duck";
//   };
// };

// RubberDuck.prototype.fly = function () {
//   return console.log("Rubber ducks can't fly!");
// };

// let howardTheDuck = new RubberDuck();

// howardTheDuck.print();
// howardTheDuck.swim();
// howardTheDuck.fly();

// Zadanie 3

const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  };
};

// Wyszukiwanie elementow

// Zadanie 1

var header = document.getElementsByTagName("h1")
var cls = document.getElementsByClassName("title")
var atrr = document.querySelector("div[data-animation]")

// Zadanie 2

var divElements = document.getElementsByTagName('div');
var classElements = document.getElementsByClassName('offers');
var x = document.querySelectorAll('a[href]');

// Zadanie 3

// var home = document.getElementById('home');
// var home1 = document.querySelector('#home');
// var liElement = document.getElementsByTagName('li')[0].getAttribute('data-direction');
// var block = document.getElementsByClassName('block')[0];

// Zadanie 4

var liTags = document.querySelectorAll('.navigation li');
var allParag = document.querySelectorAll('div p');
var allDivs = document.querySelectorAll('article div');

// Zadanie 5

// var art = document.getElementsByTagName("article").querySelector('.first');
// var hTags = art.getElementsByTagName('h2');

// Elementy

// Zadanie 1

function getDataInfo(elements) {
  data_lst = [];
  for (i = 0; i < elements.length; i++) {
    data_lst.push(elements[i].dataset);
  };
  return data_lst;
};

// Zadanie 2

function classTag () {
	for (i = 0; i < someBlocks.length; i++) {
  	console.log(someBlocks[i].tagName, someBlocks[i].className);
	};
};

// Zadanie 3

function setInnerText(ele) {
  for (i = 0; i < ele.length; i++) {
    ele[i].innerText = "Nowa wartość diva o klasie blocks";
  };
};

// Zadanie 4

const footer = document.querySelector('.superFooter');

function getId(ele) {
  return document.querySelector(`.${ele}`).id
};

// Zadanie 5

function getTags(childElements) {
  const lst = [];
  for (i = 0; i < childElements.length; i++) {
    lst.push(childElements[i].tagName);
  };
  return lst;
};

// Zadanie 6

function getClassInfor(ele) {
  return ele.className
};

// Wiecej o elementach

// Zadanie 1

// const o = document.querySelector('.exercise');

// o.style.backgroundColor = "#9e9e9e";

// Zadanie 2

// Zadanie 3

// Zadanie 4 

// Zadanie 5

//Dzein 2 praca domowa

// Zadanie 1

class Tree {
  constructor(treeType) {
    this.type = treeType;
  };
};

let modrzew = new Tree("larch");

Tree.prototype.bloom = function () {
  return console.log("I am blooming");
};


// Zadanie 2

