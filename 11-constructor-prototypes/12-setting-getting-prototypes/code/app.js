// Object literal notation
const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

console.log(course);

// Retrieve the assigned "prototype object" of the object "course"
// console.log(Object.getPrototypeOf(course));

// Preserve the original "prototype object" & add a new method to the object "course"
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf("course"),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

// Call a method NOT defined w/in the object "course"
course.printRating();

// Create a new object, set the assigned "prototype object"
// Set the properties & individual property descriptor map
const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      value: "Max",
      configurable: true,
      enumerable: true,
      writable: true,
    },
    progress: {
      value: 0.8,
      configurable: true,
      enumerable: true,
      writable: true,
    },
  },
);

// To add properties to te object "student"
// student.name = "Max";

// Define the "student" object property "progress" & confgure the property's descriptor map
// Object.defineProperty(student, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: true,
// });

console.log(student);
