class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to print the rectangle using 'X'
  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  // Method to double the size of the rectangle
  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
