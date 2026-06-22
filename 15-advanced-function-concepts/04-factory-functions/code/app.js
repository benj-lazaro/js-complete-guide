// Individual functions; NOT using a Factory function
function calculateTax(amount, tax) {
  return amount * tax;
}

// 19% VAT
let vatAmount = calculateTax(100, 0.19);
console.log(vatAmount);

vatAmount = calculateTax(200, 0.19);
console.log(vatAmount);

// 25% income tax
let incomeTax = calculateTax(100, 0.25);
console.log(incomeTax);

incomeTax = calculateTax(200, 0.25);
console.log(incomeTax);

// Using a Factory function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax; // Returns a pointer of the inner function
}

// Configures the tax amount ONLY ONCE
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// Pass the amount to be computed
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

console.log(calculateIncomeTaxAmount(100));
console.log(calculateIncomeTaxAmount(200));
