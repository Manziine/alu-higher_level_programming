#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {  // ✅ Space before function parentheses (semistandard compliant)
    super(size, size);
  }

  print () {  // ✅ Space before function parentheses
    super.print();
  }

  double () {  // ✅ Space before function parentheses
    super.double();
  }

  rotate () {  // ✅ Added missing rotate() method
    [this.width, this.height] = [this.height, this.width];
  }
}

module.exports = Square;
