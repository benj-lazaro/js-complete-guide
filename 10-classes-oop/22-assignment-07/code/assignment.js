class Course {
  #price = 0;

  // Task #4
  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }

    // Task #5
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculateValue() {
    return (this.length / this.#price).toFixed(2);
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`,
    );
  }
}

// Task #1
const jsCourse = new Course("JavaScript", 44, 50);
const phpCourse = new Course("PHP", 55, 50);
console.log(jsCourse, phpCourse);

// Task #2
console.log(jsCourse.calculateValue());
console.log(phpCourse.calculateValue());
jsCourse.printSummary();
phpCourse.printSummary();

// Task #3
class PracticalCourse extends Course {
  constructor(title, length, price, exerciseCount) {
    super(title, length, price);
    this.numOfExercises = exerciseCount;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(`${this.title} Release Date: April 2026.`);
  }
}

const linuxCourse = new PracticalCourse("Linux operations", 70, 60, 400);
console.log(linuxCourse);
linuxCourse.printSummary();

const algorithmCourse = new TheoreticalCourse("Algorithms", 100, 20);
console.log(algorithmCourse);
algorithmCourse.printSummary();
algorithmCourse.publish();

// Using the Base Class' Setter
algorithmCourse.price = 1000;
console.log(algorithmCourse);

// Directly accessing the Base Class' private field
// algorithmCourse.#price = 6000;
