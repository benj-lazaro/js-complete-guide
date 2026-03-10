// Class for defining a single product; groups related data together
class Product {
  // Constructor method
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that holds the logic for rendering a single product
class ProductItem {
  // Constructor method
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");

    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">

            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$ ${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;

    return prodEl;
  }
}

// Class collects individual products in an array & renders them
class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.9UtdOxfFxHcVNKnkblTIBwHaHa%3Fpid%3DApi&f=1&ipt=8654694e58dc9093f53aa36c0b06801410e65dccbb6a013dbbbcb1e2c2f0d02c",
      19.99,
      "A soft pillow!",
    ),
    new Product(
      "A Carpet",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F200-2004153_carpet.jpg&f=1&nofb=1&ipt=32f5c6713ceed3de746e30c05ed5e48ddf8e99f1fa57abb0a6f6a42b68d91928",
      89.99,
      "A carpet which you might like - or not.",
    ),
  ];

  // Constructor method = NO need since the field "products" is initialized
  constructor() {}

  // Method that renders the value assigned to the field "products"
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");

    prodList.className = "product-list";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
