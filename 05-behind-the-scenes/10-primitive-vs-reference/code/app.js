// Primitive values
let userName = "Max"; // Assigns a primitive value
let anotherUserName = userName; // Create a real copy of primitive value

console.log(userName);
console.log(anotherUserName);
console.log("--------");

userName = "John Wick"; // Updates stored primitive value
console.log(userName);
console.log(anotherUserName); // Copied primitive value retained
console.log("========");

// Reference values
let hobbies = ["Sports"]; // Assigns a reference value
let newHobbies = hobbies; // Copies the pointer of the former's reference value (address)
let moreHobbies = [...hobbies]; // Creates a real copy of the elements of the original; NOT the pointer

console.log(hobbies);
console.log(newHobbies);
console.log(moreHobbies);
console.log("--------");

hobbies.push("Cooking"); // Updates the value referenced by the pointer
console.log(hobbies); // Both variables reflects the changes made
console.log(newHobbies);
console.log(moreHobbies); // Does NOT reflect the changes made
console.log("========");

let person = { name: "Max", age: 100 };
let clone = { ...person }; // Create a real copy of the properties & values of the original; NOT the pointer

console.log(person);
console.log(clone);
console.log("--------");

person.name = "John Wick"; // Updates the stored value referenced by the pointer
person.age = 60;
console.log(person);
console.log(clone); // Does NOT reflect the changes made
console.log("========");

const numbers = [1, 2, 3, 4, 5]; // Stores the pointer of the array, NOT the elements in the constant
console.log(numbers);
console.log("--------");

numbers.push(6, 7, 8, 9); // Adds new elements into the array referenced by the pointer
console.log(numbers);
console.log("--------");

numbers = ["one", "two", "three"]; // Directly changing the pointer is NOT allowed
