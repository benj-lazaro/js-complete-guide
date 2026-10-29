// Accepts inputs of data type "number"; returns a value of data type "number"
function add(a: number, b: number) {
  return a + b;
}

// Number data type
const result = add(5, 3);

// Boolean data type
let isDone = false;

// Void data type
function printResult(result: any): void {
  console.log(result);
}
// printResult(result);

// Overrides Type Inference or Typecasting
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const addButton = document.querySelector("button");

// Empty array data type; requires to infer the object's properties & corresponding data type
const results: { result: number; print: () => void }[] = [];

// Initialized array data type; TypeScript implicitly relies on the elements' data type
const nameArray = ["Max", "Manuel"];

addButton?.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const sum = add(num1, num2);

  // Object data type
  const resultContainer = {
    result: sum,
    print() {
      console.log(this.result);
    },
  };

  results.push(resultContainer);
  printResult(results);

  // Calling the method ".print()" of the object element stored w/in the array "results"
  results[0].print();
});
