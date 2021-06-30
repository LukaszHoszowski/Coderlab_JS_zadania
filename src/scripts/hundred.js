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

