#!/usr/bin/node

const add = (a, b) => a + b;

module.exports.add = add;

// 🔽 Test cases
console.log(add(3, 5));    // Expected output: 8
console.log(add(10, 20));  // Expected output: 30
console.log(add(-5, 5));   // Expected output: 0
console.log(add(0, 0));    // Expected output: 0
console.log(add(1.5, 2.5));// Expected output: 4
