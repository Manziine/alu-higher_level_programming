#!/usr/bin/node
const SquareParent = require('./5-square'); // ✅ Rename import to avoid redeclaration

class Square extends SquareParent { // ✅ Extend the imported `SquareParent`
  charPrint (c) { // ✅ Fixed space before function parentheses
    const char = c || 'X'; // ✅ Uses 'X' if `c` is undefined
    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
}

module.exports = Square;
