"use strict";
// Accepts inputs of data type "number"; returns a value of data type "number"
function add(a, b) {
    return a + b;
}
// Number data type
const result = add(5, 3);
// Boolean data type
let isDone = false;
// Void data type
function printResult(result) {
    console.log(result);
}
// printResult(result);
// Overrides Type Inference or Typecasting
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.querySelector("button");
addButton?.addEventListener("click", () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const sum = add(num1, num2);
    printResult(sum);
});
