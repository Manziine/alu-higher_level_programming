#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) { // ✅ Fixed space before function parentheses
    if (size <= 0 || !Number.isInteger(size)) {
      super(undefined, undefined); // ✅ Assigns undefined instead of throwing an error
    } else {
      super(size, size);
    }
  }

  print () { // ✅ Fixed space before function parentheses
    if (this.width === undefined || this.height === undefined) {
      console.log('undefined');
    } else {
      super.print();
    }
  }

  double () { // ✅ Fixed space before function parentheses
    if (this.width !== undefined && this.height !== undefined) {
      super.double();
    }
  }

  rotate () { // ✅ Fixed space before function parentheses
    if (this.width !== undefined && this.height !== undefined) {
      [this.width, this.height] = [this.height, this.width];
    }
  }
}

module.exports = Square;
