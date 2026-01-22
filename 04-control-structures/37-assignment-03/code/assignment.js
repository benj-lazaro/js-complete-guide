const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// Assignment #1
if (randomNumber >= 0.7) {
  alert(`${randomNumber} is greater than 0.7`);
}

// Assignment #2
const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
console.log("-----");

for (const number of numbers) {
  console.log(number);
}
console.log("-----");

// Bonus
let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}
console.log("-----");

// Assignment #3
for (let index = numbers.length - 1; index >= 0; index--) {
  console.log(numbers[index]);
}
console.log("-----");

// Assignment #4
randNumber = Math.random();
if (
  (randomNumber > 0.7 && randNumber > 0.7) ||
  randomNumber <= 0.2 ||
  randNumber <= 0.2
) {
  alert(
    `Check this out... randomNumber = ${randomNumber} while randNumber = ${randNumber} `,
  );
}
