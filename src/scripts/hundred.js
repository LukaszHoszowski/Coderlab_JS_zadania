// #1

function multiply(a, b) {
    return a * b;
};

// #2

function even_or_odd(number) {
    return number % 2 == 0 ? "even" : "odd"
};

// #3

function opposite(number) {
    return number * -1;
};

// #4

x = [-97, 53, -53];

// 640

function positiveSum(arr=[]) {
    const pos = arr.filter((num) => {
        return num > 0;
        })
    if (pos.length > 0) {
      const sum = pos.reduce((total, current) => {
        return total + (current > 0 ? current : 0);
      });
      return sum;
    } else {
      return 0;
    };    
};

// #5

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
};

// #6

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
};

// #7

function boolToWord(bool) {
    return bool == true ? "Yes" : "No";
};

// #8

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
};

// #9

function solution(str) {
    return str.split("").reverse().join("");
};

// #10

const solution = (s) => [...s].reverse().join('');

// #11

function makeNegative(num) {
    return num < 0 ? num : -num;
};

// #12

function makeNegative(num) {
  return -Math.abs(num);
};

// #13

function repeatStr(n, s) {
  return s.repeat(n);
};

// #14

repeatStr = (n, s) => s.repeat(n);

// #15

function numberToString(num) {
    return String(num);
};

// #16

function numberToString(num) {
  return num.toString();
};

// #17

function removeChar(str) {
  return str
    .split('')
    .splice(1, str.length - 2)
    .join('');
}

// #18

function removeChar(str) {
  return str.slice(1, -1);
};

// #19

function removeChar(str){
 return str.substring(1, str.length-1);
};

// #20

function removeChar(str){
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
};

// #21

function findSmallestInt(args) {
  return args.sort(function (a, b) { return a - b })[0];
};

// #22
var summation = function (num) {
  let c = 0;
  for (let i = 1; i <= num; i++) {
    c += i;
  }
  return c;
};

// #23

const summation = (n) => (n * (n + 1)) / 2;

// #24

noSpace = (x) => x.split(' ').join('');

// #25

const noSpace = (x) => x.replace(/ /g, '');

// #26

numbers = [1, 2, 2];

function squareSum(numbers) {
  return numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);
};

// #27

function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
};

// #28

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((item) => item == true).reduce((acc, item=1) => acc + item, 0);
};

// #29

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
};

// #30

let countSheeps = (x) => x.filter((s) => s).length;

// #31

function litres(time) {
  return Math.floor(time * 0.5);
};

// #32

litres = (t) => ~~(t / 2);

// #33

function litres(time) {
  return (time / 2) | 0;
};

// #34

function century(year) {
  return Math.ceil(year / 100);
};

// #35

function century(year) {
  return ((year + 99) / 100) | 0;
};

// #36

function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  } else {
    return "Wrong operator";
  };
};
  
// #37

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Operation must be one of + - * /';
  }
}

// #38 Do not use

function basicOp(o, a, b) {
  return eval(a + o + b);
}

// #39

var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]

// #40

const basicOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const basicOp = (op, x, y) => basicOperations[op](x, y);

// #41

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
};

// #42

function isDivisible(n, x, y) {
  return !(n % x || n % y);
};

// #43

var stringToNumber = function (str) {
  return +str;
};

// #44

var stringToNumber = function (str) {
  return parseInt(str);
};

// #45

function abbrevName(name) {
  return name.split
};

// #46

function abbrevName(name) {
  const words = name.split(" ")
  return (words[0][0] + "." + words[1][0]).toUpperCase();
};

// #47

function abbrevName2(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
};

// #48

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
};

// #49

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
};

// #50

function maps(x) {
  return x.map((y) => y * 2 );
};

// #51

function digitize(n) {
  return n = String(n).split('').reverse().map(Number);
};

// #52

function doubleInteger(i) {
  return i * 2;
};

// #53

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0)/marks.length);
};

// #54

function invert(array) {
  return array.map((ele) => -ele);
};

// #55

function greet(name) {
  if (name === 'Johnny') {
    return 'Hello, my love!'
  } else {
    return 'Hello, ' + name + '!';
  };
};

// #56

function greet(name) {
  return 'Hello, ' + (name == 'Johnny' ? 'my love' : name) + '!';
};

// #57

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
};

// #58

function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
};

// #59

function countPositivesSumNegatives(input) {
  if (!input) {
    return []
  } else {
    const pos = 0
    const neg = 0
    for (let i = 0; i < input.length; i++) {
      input[i] > 0 ? ++pos : neg += input[i];
    };
    return pos === 0 && neg === 0 ? [] : [pos, neg];
  };
};

// #60

function hero(bullets, dragons) {
  return bullets / dragons >= 2;
};

// #61

function booleanToString(b) {
  return String(b);
};

// #62

function monkeyCount(n) {
  const f = [];
  for (let i = 1; i <= n; i++) {
    f.push(i);
  };
  return f;
};

// #63

function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
};

// #64

function find_average(array) {
  return array.reduce((a,b) => a+b, 0)/array.length;
};

// #65

// Sum Numbers
function sum (numbers) {
    "use strict";
  return numbers.reduce((a, b) => a + b, 0);    
};

// #66

const sum = (n) => n.reduce((a, b) => a + b, 0);

// #67

function bmi(weight, height) {
  const result = weight / Math.pow(height);
  return result;
};

// #68

function bmi(weight, height) {
  const result = weight / (Math.pow(height, 2));
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  };
};

// #69

const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? 'Underweight'
    : bmi <= 25
    ? 'Normal'
    : bmi <= 30
    ? 'Overweight'
        : 'Obese';
    
// #70

function bmi(weight, height) {
  let bmi = weight / (height * height);
  switch (true) {
    case bmi <= 18.5:
      return 'Underweight';
    case bmi <= 25.0:
      return 'Normal';
    case bmi <= 30.0:
      return 'Overweight';
    case bmi > 30:
      return 'Obese';
  };
};

// #71

function fakeBin(x) {
  return map((ele) => (ele < 5 ? 0 : 1));
};

// #72

function fakeBin(x) {
  return x.split('').map((ele) => (ele < 5 ? 0 : 1)).join('');
};

// #73

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == 'r' ?
    (name + " plays banjo") : (name + " does not play banjo");
};

// #74

function bonusTime(salary, bonus) {
  return (bonus) ? `£${salary * 10}` : `£${salary}`;
};

// #75

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// #76

const reverseSeq = (n) => {
  k = [];
  for (let i = n; i > 0; i--) {
    k.push(i);
  };
  return k
};

// #77

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

// #78

const reverseSeq = (length) => Array.from({ length }, () => length--);

// #79

const paperwork = (n, m) => {
  return n < 0 || m < 0 ? 0 : n * m;
};

// #80

const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);

// #81

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// #82

var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

// #83

const makeUpperCase = (str) => str.toUpperCase();

// #84

const check = (a, x) => a.includes(x);

// #85

const DNAtoRNA = (dna) =>
  dna
    .split('')
    .map((ele) => ele.replace('T', 'U'))
    .join('');

// #86

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
};

// #87

const grow = (x) => x.reduce((a, b) => a * b);

// #88

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft ? true : false;

// #89

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
  }
  return name;
};

// #90

function getPlanetName(id) {
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}

// #91

const points = (games) => games.split(":")