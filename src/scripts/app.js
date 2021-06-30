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

