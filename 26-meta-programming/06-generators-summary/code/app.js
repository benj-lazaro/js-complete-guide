// Object w/ a Generator
const company = {
  employees: ["Max", "Manuel", "Anna"],
  [Symbol.iterator]: function* employeeGenerator() {
    // Initialize index pointer
    let currentEmployee = 0;

    while (currentEmployee < this.employees.length) {
      // Returns a value that gets assigned to the constant "employee" of the "for..of" loop below
      yield this.employees[currentEmployee];

      // Increment index pointer
      currentEmployee++;
    }
  },
};

// Iterate through the object w/ a Generator
for (const employee of company) {
  console.log(employee);
}

// Alternatively, a spread operator (...) can also be used
console.log(...company);

// An array's prototype has access to Symbol(Symbol.iterator)
const persons = ["Max", "Manuel"];
console.log(persons);
