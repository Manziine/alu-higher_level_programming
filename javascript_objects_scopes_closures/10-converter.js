#!/usr/bin/node

exports.converter = function (base) { // ✅ Correct function prototype
  return num => num.toString(base); // ✅ Uses arrow function for conversion
};
