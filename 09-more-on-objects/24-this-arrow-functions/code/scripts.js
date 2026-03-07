// The keyword "this" & the Arrow function (method)

const members = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach(function (person) {
      console.log(this);
      console.log(person + " - " + this.teamName);
    });
  },
};

members.getTeamMembers();
