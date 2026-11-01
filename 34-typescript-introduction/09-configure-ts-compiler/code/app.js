"use strict";
// Conventional approach for creating a Class in TypeScript
// class User {
//   name: string;
//   private age: number;
Object.defineProperty(exports, "__esModule", { value: true });
// Shorthand approach for creating a Class in TypeScript
// Contracts Greetable & Printable enforces the existence property "name" & method "print()" in the Class
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
// Class inheritance in TypeScript
class Admin extends User {
    permissions;
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
// Instantiates the Class User to an object named "user"
const user = new User("John Wick", 60);
// Accessing a public property
console.log(user.name);
// Accessing a private property; flags an error prior compile-time
// console.log(user.age);
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
// "CalculationResults[]" is syntactic sugar of the Generic type "Array<CalculationContainer>"
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
// Function of a Genetic type
function logAndEcho(value) {
    console.log(value);
    return value;
}
// Function of a Generic type that returns a string data type that
// Got converted into an array of string elements due to the string method ".split()"
const resultStr = logAndEcho("Hello there").split(" ");
console.log(resultStr);
// Function of a Generic type that returns a number data type
const resultNum = logAndEcho(47);
console.log(resultNum);
//# sourceMappingURL=app.js.map