// Define a simple case-sensitive string pattern
let regex = /hello/;

console.log(regex.test("hello"));
console.log(regex.test("hi... hello"));
console.log(regex.test("Hello"));
console.log("-----------");

// Accepts a string w/ starting case-insensitive character pattern
regex = /(h|H)ello/;
console.log(regex.test("hello"));
console.log(regex.test("hi... hello"));
console.log(regex.test("Hello"));
console.log(regex.test("ello"));
console.log("-----------");

// Accepts a string w/ a starting wildcard character & a trailing "ello" pattern
regex = /.ello/;
console.log(regex.test("hello"));
console.log(regex.test("hi... hello"));
console.log(regex.test("yello"));
console.log(regex.test("Jello"));
console.log("-----------");

// Escapes the "." & "S" that meant something else than their literal meaning
const regexEmail = /^\S+@\S+\.\S+$/;
console.log(regexEmail.test("test@test.com"));
console.log("-----------");

// Returns an array containing information about the string pattern
console.log(regex.exec("Hi! jello"));
console.log("Hi! jello".match(regex));
