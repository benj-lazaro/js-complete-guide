class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  set coursePrice(price) {
    if (price < 0) {
      this.price = Math.abs(price);
    }
  }

  get coursePriceTag() {
    this.coursePrice = this.price;
    return `\$${this.price}`;
  }

  lengthPriceValue() {
    return (this.length / this.price).toFixed(2);
  }

  courseSummary() {
    console.log(
      `The ${this.title} course has ${this.length} hours runtime, priced at ${this.coursePriceTag}`,
    );
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, exerciseCount) {
    super(title, length, price);
    this.numOfExercises = exerciseCount;
  }

  courseSummary() {
    console.log(
      `The ${this.title} course has ${this.length} hours runtime, with ${this.numOfExercises} exercises priced at ${this.coursePriceTag}`,
    );
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log(`The ${this.title} was released on April 2026.`);
  }
}

// Task #1
const jsCourse = new Course("JavaScript", 44, 50);
const phpCourse = new Course("PHP", 55, 50);
console.log(jsCourse, phpCourse);

// Task #2
console.log(jsCourse.lengthPriceValue());
console.log(phpCourse.lengthPriceValue());
jsCourse.courseSummary();
phpCourse.courseSummary();

const linuxCourse = new PracticalCourse("Linux operations", 70, 60, 400);
const algorithmCourse = new TheoreticalCourse("Algorithms", 100, 20);

linuxCourse.courseSummary();
algorithmCourse.courseSummary();
algorithmCourse.publish();
