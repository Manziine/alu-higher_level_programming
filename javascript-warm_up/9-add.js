#!/usr/bin/node

function add (a, b) {
  return a + b;
}

const num1 = Number.parseInt(process.argv[2]);
const num2 = Number.parseInt(process.argv[3]);

console.log(Number.isNaN(num1) || Number.isNaN(num2) ? 'NaN' : add(num1, num2));
