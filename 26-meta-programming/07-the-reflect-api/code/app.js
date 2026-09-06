const course = {
  title: "JavaScript - The Complete Guide",
};
console.log(course);

// Set the prototype of "course" object, to use a custom ".toString()" method
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Overrides the normal ".toString()" method w/ a customized one of the same name
console.log(course.toString());

// Delete the property "title" from the "course" object
Reflect.deleteProperty(course, "title");
console.log(course);
