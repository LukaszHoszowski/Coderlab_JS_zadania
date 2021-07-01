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