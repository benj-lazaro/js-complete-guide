import { updateProducts } from "./rendering";
import { products } from "./products";

const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");

export function deleteProduct(prodId) {
  // Find the product item to be deleted by its index value
  const deletedProductIndex = products.findIndex((prod) => {
    prod.id === prodId;
  });

  // Store the product item to be deleted
  const deletedProduct = products[deletedProductIndex];

  // Deletes the product item
  products.splice(deletedProductIndex, 1);

  // Update the product list
  updateProducts(deletedProduct, prodId, deleteProduct, false);
}

export function addProduct(event) {
  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert("Please enter some valid input values for title and price.");
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  // renderProducts(products, deleteProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
