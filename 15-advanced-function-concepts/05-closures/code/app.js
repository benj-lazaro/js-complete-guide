// Global variable
let multiplier = 1.1;

// Factory function
function createTaxCalculator(tax) {
  // Separate lexical environment
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

// Configures the tax amount ONLY ONCE
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// Pass the amount to be computed
console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

// Updates assigned value
// Does NOT get "locked in" w/ the outer or inner function's lexical environment
multiplier = 1.2;
console.log(calculateIncomeTaxAmount(200));
console.log(calculateVatAmount(200));
