// The keyword "this" & the Arrow function (method)
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

members.getTeamMembers();
console.log("=======");

// The keyword "this" & the Anonymous function
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

members2.getTeamMembers();
console.log("=======");
