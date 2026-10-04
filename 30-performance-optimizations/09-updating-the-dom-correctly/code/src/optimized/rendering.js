export function renderProducts(products, deleteProductFn) {
  const productListEl = document.getElementById("product-list");
  productListEl.innerHTML = "";
  products.forEach((product) => {
    const newListEl = document.createElement("li");
    const prodTitleEl = document.createElement("h2");
    const prodPriceEl = document.createElement("p");
    const prodDeleteButtonEl = document.createElement("button");

    prodTitleEl.innerHTML = product.title;
    prodPriceEl.innerHTML = product.price;
    prodDeleteButtonEl.innerHTML = "DELETE";

    // Fetch the attribute "id" of each product item
    newListEl.id = product.id;

    prodDeleteButtonEl.addEventListener(
      "click",
      deleteProductFn.bind(null, product.id),
    );

    newListEl.appendChild(prodTitleEl);
    newListEl.appendChild(prodPriceEl);
    newListEl.appendChild(prodDeleteButtonEl);

    productListEl.appendChild(newListEl);
  });
}

export function updateProducts(product, prodId, deleteProductsFn, isAdding) {
  if (isAdding) {
    // Intentionally left blank for this lesson
  } else {
    // Delete a product item from the list
    const productEl = document.getElementById(prodId);

    productEl.remove();
    // productEl.parentElement.removeChild(productEl);
  }
}
