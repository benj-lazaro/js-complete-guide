// A object with a method defined as a normal function using the method shorthand
// Using an arrow function as callback for the forEach() method
// The value of "this" refers to the object that called the method
const members = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach((person) => {
      console.log(this);
      console.log(person + " - " + this.teamName);
    });
  },
};
members.getTeamMembers(); // "this" refers to the members object

// A object with a method defined as a normal function using the method shorthand
// Using a normal function as callback for the forEach() method
// The value of "this" refers to undefined
const members2 = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach(function (person) {
      console.log(this);
      console.log(person + " - " + this.teamName);
    });
  },
};
members2.getTeamMembers(); // "this" refers to the global Window object
