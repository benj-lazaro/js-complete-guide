// Conventional approach for creating a Class in TypeScript
// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Interface as a Contract
interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

// Shorthand approach for creating a Class in TypeScript
// Contracts Greetable & Printable enforces the existence property "name" & method "print()" in the Class
class User implements Greetable, Printable {
  constructor(
    public name: string,
    private age: number,
  ) {}

  print() {
    console.log(this.name);
  }
}

// Class inheritance in TypeScript
class Admin extends User {
  constructor(
    name: string,
    age: number,
    private permissions: string[],
  ) {
    super(name, age);
  }
}

// Creating an Interface
interface CalculationContainer {
  res: number;
  print(): void;
}

// Instantiates the Class User to an object named "user"
const user = new User("John Wick", 60);

// Accessing a public property
console.log(user.name);

// Accessing a private property; flags an error prior compile-time
// console.log(user.age);

// Overrides Type Inference or Typecasting
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const addButton = document.querySelector("button");

// Accepts inputs of data type "number"; returns a value of data type "number"
function add(a: number, b: number) {
  return a + b;
}

// Type Alias w/ Literal & Union types
type PrintMode = "console" | "alert";

// Enum type
enum OutputMode {
  CONSOLE,
  ALERT,
}

// Void data type w/ Type Alias on its parameter variables
function printResult(result: CalculationResults, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result[0].res);
  }
}

// Type Alias assigned w/ an array containing Interface "CalculationContainer" elements
type CalculationResults = CalculationContainer[];

// Empty array data type; requires to infer the object's properties & corresponding data type
const results: CalculationResults = [];

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
