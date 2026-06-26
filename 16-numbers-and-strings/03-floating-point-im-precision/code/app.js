// To see binary representation of a number
console.log((1).toString(2));
console.log((1 / 2).toString(2));
console.log((0.2).toString(2));

// To control the number of digits to output
console.log((0.6000000000000001).toFixed(2));
console.log((0.2).toFixed(20));

// JavaScript's floating-point imprecision
let sum = 0.2 + 0.4;
console.log(sum); // 0.6000000000000001
console.log(0.2 + 0.4 === 0.6);

// Perfect precision workaround
sum = 0.2 * 100 + 0.4 * 100; // 20 & 40
console.log(sum); // 60
console.log(0.2 * 100 + 0.4 * 100 === sum);
