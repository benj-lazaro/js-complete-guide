const course = {
  title: "JavaScript - The Complete Guide",
};

// Use Reflect API to make a custom ".toString()" method
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course);

// Define a Proxy API handler object
const courseHandler = {
  // Returns a value from the selected property of the target object
  get(targetObject, propertyName) {
    console.log(`Selected property: ${propertyName}`);

    // Return the value of 0 if the property "length" is selected
    if (propertyName === "length") {
      return 0;
    }

    // Return the corresponding value (if found); otherwise, return "NOT FOUND"
    return targetObject[propertyName] || "NOT FOUND";
  },
};

// Instantiate a Proxy API object
const proxyCourse = new Proxy(course, courseHandler);
console.log(proxyCourse.title);
console.log(proxyCourse.length);
console.log(proxyCourse.rating);
