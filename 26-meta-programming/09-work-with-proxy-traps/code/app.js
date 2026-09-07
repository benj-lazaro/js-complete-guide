// Target object
const course = {
  title: "JavaScript - The Complete Guide",
};

// Use Reflect API to make a custom ".toString()" method
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Define a Proxy API Handler
const courseHandler = {
  // Proxy API "get()" trap
  get(targetObject, propertyName) {
    console.log(`Selected property: ${propertyName}`);

    if (propertyName === "length") {
      return 0;
    }

    // Return the corresponding value (if found); otherwise, return "NOT FOUND"
    return targetObject[propertyName] || "NOT FOUND";
  },
  // Proxy API "set()" trap
  set(targetObject, propertyName, newValue) {
    // Prevent setting this specific property
    if (propertyName === "ratings") {
      return;
    }

    // Otherwise, set a property w/ an assigned value
    targetObject[propertyName] = newValue;
  },
};

// Instantiate a Proxy API object
const proxyCourse = new Proxy(course, courseHandler);
console.log(proxyCourse.title);
console.log(proxyCourse.length);
console.log(proxyCourse.rating);

// Set a (new) property named "rating" w/ an assigned value on the target object
proxyCourse.ratings = 10;
proxyCourse.price = 20.0;
console.log(course);
