function productDescription(strings, productName, productPrice) {
  console.log(strings);
  //   console.log(strings[0]);
  //   console.log(strings[1]);
  //   console.log(strings[2]);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = "pretty cheap regarding its price";

  if (productPrice > 20) {
    priceCategory = "fairly priced";
  }

  // Return a new string
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;

  // Return an object literal
  return { name: productName, price: productPrice };
}

const prodName = "JavaScript Complete Course";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is (${prodPrice}).`;

console.log(productOutput);
