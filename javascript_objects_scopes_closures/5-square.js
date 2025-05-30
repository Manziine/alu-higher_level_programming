#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) { // ✅ Removed unnecessary spaces
    if (size <= 0 || isNaN(size)) {
      throw new Error('Size must be a positive number');
    }
    super(size, size);
  }

  print() { // ✅ Removed unnecessary spaces
    super.print();
  }

  double() { // ✅ Removed unnecessary spaces
    super.double();
  }

  rotate() { // ✅ Removed unnecessary spaces
    [this.width, this.height] = [this.height, this.width];
  }
}

module.exports = Square;
