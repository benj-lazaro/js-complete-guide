const company = {
  currentEmployee: 0,
  employees: ["Max", "Manuel", "Anna"],
  next() {
    if (this.currentEmployee >= this.employees.length) {
      // Stop iterating through the object's property "employees"
      return { value: this.currentEmployee, done: true };
    }

    // Fetch the current assigned value of the property "employees"
    const returnValue = {
      value: this.employees[this.currentEmployee],
      done: false,
    };

    // Increment the assigned value of property "currentEmployee"
    this.currentEmployee++;

    return returnValue;
  },
};

// Manually iterate through the assigned value of the property "employees"
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// Using a while loop w/ an iterator; iterates through the property "employees"
let employee = company.next();

// While the property "done" is NOT equals to "false"
while (!employee.done) {
  // Display the current assigned value
  console.log(employee.value);

  // Fetch the next assigned value
  employee = company.next();
}
