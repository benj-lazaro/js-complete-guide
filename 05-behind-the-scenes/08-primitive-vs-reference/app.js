// Primitive values
let userName = "Max";
let anotherUser = userName; // Copies the actual value from userName
console.log(`username = ${userName}`);
console.log(`anotherUser = ${anotherUser}`);

console.log("Changed the value of userName...");
userName = "Manny";
console.log(`username = ${userName}`);
console.log(`anotherUser = ${anotherUser}`);

console.log("====================");

// Reference Values
let hobbies = ["Sports"];
let newHobbies = hobbies;
console.log(`hobbies = ${hobbies}`);
console.log(`newHobbies = ${newHobbies}`);

console.log("Add a new item in hobbies...");
hobbies.push("Cooking");
console.log(`hobbies = ${hobbies}`);
console.log(`newHobbies = ${newHobbies}`);

console.log("====================");

let person = { age: 30 };
let anotherPerson = person;
console.log("person: ", person);
console.log("anotherPerson: ", anotherPerson);

console.log("Change value of anotherPerson...");
anotherPerson.age = 50;
console.log("person: ", person);
console.log("anotherPerson: ", anotherPerson);

console.log("====================");

// Duplicate reference value
console.log("Duplicate a reference value...");
let moreHobbies = [...hobbies];
console.log(`hobbies = ${hobbies}`);
console.log(`newHobbies = ${newHobbies}`);
console.log(`moreHobbies = ${moreHobbies}`);

console.log("Add a new item in moreHobbies...");
moreHobbies.push("Hacking");
console.log(`hobbies = ${hobbies}`);
console.log(`newHobbies = ${newHobbies}`);
console.log(`moreHobbies = ${moreHobbies}`);

console.log("====================");

console.log("Create a copy of the person object...");
let yetAnotherPerson = { ...person }; // Copies the key-value pairs of person into the new object
console.log("yetAnotherPerson: ", yetAnotherPerson);

console.log("Change value of person...");
person.age = 25;
console.log("person: ", person);
console.log("anotherPerson: ", anotherPerson);
console.log("yetAnotherPerson: ", yetAnotherPerson); // Changes in value not reflected on this object

console.log("====================");
