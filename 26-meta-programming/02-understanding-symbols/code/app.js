// Create a unique object property identifier named "uid"
const uid = Symbol("uid"); // This is supposed to be hidden from the user
console.log(uid);

const user = {
  [uid]: "person1",
  name: "John Wick",
  age: 60,
};

// Attempt to override the Symbol property "uid"
// Ends up creating a new property named "uid" & assign "person2" as value instead
user.uid = "person2";
console.log(user);

// Successfully updates the Symbol property "uid"
user[uid] = "person3";
console.log(user);

// Proof that Symbols are unique
console.log(Symbol("uid") === Symbol("uid"));
