// Class that defines a single "Product" object
class Product {
  // Using a Constructor method to define Class properties
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that contains "Product" object(s) to be checked out
class ShoppingCart {
  // Field(s)
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.className = "cart";
    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
    `;

    // Return the Element node "section"
    return cartEl;
  }
}

// Class that renders the list of "Product" objects w/in a shopping cart in the DOM
class Shop {
  render() {
    // Select HTML element <div> w/ attribute "id" of "app"
    const renderHook = document.getElementById("app");

    // Instantiate the Class "ShoppingCart" & store the returned Element node "section"
    const cart = new ShoppingCart();
    const cartEl = cart.render();

    // Instantiate the Class "ProductList" & store the returned Element node "ul"
    const productList = new ProductList();
    const prodListEl = productList.render();

    // Renders the returned Element nodes in the DOM
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

// Class that renders the HTML markup & content of a single "Product" object
class ProductItem {
  // Constructor
  constructor(product) {
    this.product = product;
  }

  // Callback function (method) for the local constant "addCartButton"
  addToCart() {
    console.log("Adding to cart");
    console.log(this.product);
  }

  // Method(s)
  // Prepares the HTML markup & content of single "Product" object for rendering in the DOM
  render() {
    // Create an HTML element <li> for each "Product" object
    const prodEl = document.createElement("li");

    // Set the HTML element's attribute "class" to "product-item"
    prodEl.className = "product-item";

    // Set HTML markup & access the properties in the Class field "product"
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

    // Select the HTML element <button> stored w/in the constant "prodEl"
    const addCartButton = prodEl.querySelector("button");

    // Chain an Event listener & bind Class "ProductItem" to the callback function (method) "addToCart"
    addCartButton.addEventListener("click", this.addToCart.bind(this));

    // Return the Element node "li" w/ a "Product" object's data
    return prodEl;
  }
}

// Class that stores a collection of "Product" objects & renders in the DOM
class ProductList {
  // Field(s)
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

  // Constructor; empty as Class field "products" is already initialized
  constructor() {}

  // Method(s)
  render() {
    // Create a Element node "ul" w/ attribute "class" of "product-list"
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    // Iterate through the object elements of the property "products"
    for (const prod of this.products) {
      // Instantiate Class "ProductItem" into an object
      const productItem = new ProductItem(prod);

      // Store the Element node "li" w/ content of a single "Product" object
      const prodEl = productItem.render();

      // Append the Element node "li" as a child of the Element node "ul"
      prodList.append(prodEl);
    }

    // Returns the Element node "ul"
    return prodList;
  }
}

// Instantiates the Class "Shop"
const shop = new Shop();

// Renders both shopping cart & product list in the DOM
shop.render();
