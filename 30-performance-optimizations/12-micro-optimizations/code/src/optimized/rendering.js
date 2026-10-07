const productListEl = document.getElementById("product-list");

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement("li");

  // Potential XSS attack
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;

  const prodDeleteButtonEl = document.createElement("button");
  prodDeleteButtonEl.textContent = "DELETE";

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, prodId),
  );

  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";

  // products.forEach((product) => {
  //   const newListEl = createElement(product, product.id, deleteProductFn);
  //   productListEl.appendChild(newListEl);
  // });

  // Implement micro-optimization
  const startTime = performance.now();

  for (let index = 0; index < products.length; index++) {
    const newListEl = createElement(
      products[index],
      products[index].id,
      deleteProductFn,
    );
    productListEl.appendChild(newListEl);
  }

  const endTime = performance.now();
  console.log(`Duration: ${endTime - startTime}`);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, product.id, deleteProductFn);
    productListEl.insertAdjacentElement("afterbegin", newProductEl);
  } else {
    const productEl = document.getElementById(prodId);

    productEl.remove();
    // productEl.parentElement.removeChild(productEl);
  }
}
