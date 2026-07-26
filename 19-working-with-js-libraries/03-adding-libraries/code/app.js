const customers = ["Max", "Manuel", "Anna"];
const activeCustomers = ["Max", "Manuel"];

// Get the difference between two (2) arrays
const inactiveCustomers = _.difference(customers, activeCustomers);
console.log(inactiveCustomers);
