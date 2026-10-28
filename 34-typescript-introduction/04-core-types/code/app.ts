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

addButton?.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const sum = add(num1, num2);
  printResult(sum);
});
