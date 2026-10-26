const age = [30, 29, 54];

age.push(60); // Constant Time Complexity => O(1)

age.unshift(10); // Linear Time COmplexity => O(n)

const myAge = age[1]; // Constant Time Complexity => O(1)

const namePopularity = [
  { userName: "Max", usages: 5 },
  { userName: "Manuel", usages: 6 },
];

const manuelUsage = namePopularity.find((person) => person.userName).usages;
// Best case: Constant Time Complexity => O(1)
// Worst case: Linear Time Complexity => O(n)
// Average Case: Linear Time Complexity => O(n)

const nameMap = {
  Max: 5,
  Manuel: 6,
};

const manuelUsage2 = nameMap["Manuel"]; // Constant Time Complexity => O(1)
