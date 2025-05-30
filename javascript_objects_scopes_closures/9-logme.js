#!/usr/bin/node

let count = 0; // ✅ Tracks the number of times logMe() has been called

exports.logMe = function (item) { // ✅ Correct function prototype
  console.log(`${count}: ${item}`); // ✅ Prints count followed by item
  count++; // ✅ Increments count after printing
};
