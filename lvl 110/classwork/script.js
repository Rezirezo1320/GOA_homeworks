class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }

    get perimeter() {
      return 2 * (this.length + this.width);
    }
  }
  
  const rectangle = new Rectangle(10, 5);