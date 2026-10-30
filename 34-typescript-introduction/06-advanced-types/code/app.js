"use strict";
// Overrides Type Inference or Typecasting
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.querySelector("button");
// Accepts inputs of data type "number"; returns a value of data type "number"
function add(a, b) {
    return a + b;
}
// Enum type
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
// Void data type w/ Type Alias on its parameter variables
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result[0].res);
    }
}
// Empty array data type; requires to infer the object's properties & corresponding data type
const results = [];
// Initialized array data type; TypeScript implicitly relies on the elements' data type
const nameArray = ["Max", "Manuel"];
addButton?.addEventListener("click", () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    // Object data type
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        },
    };
    results.push(resultContainer);
    printResult(results, OutputMode.CONSOLE);
    printResult(results, OutputMode.ALERT);
    // Calling the method ".print()" of the object element stored w/in the array "results"
    results[0].print();
});
