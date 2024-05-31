// Define how a product object will look like
class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

// Define how a shopping cart object
class ShoppingCart {
  items = [];

  // Renders the total amount of product item(s) & associated DOM element <button>
  render() {
    const cartElement = document.createElement("section");

    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;

    cartElement.className = "cart";
    return cartElement;
  }
}

// Define a single product object's methods
class ProductItem {
  constructor(product) {
    // Fetch the fields from the Product class
    this.product = product;
  }

  // Add the selected product item object to the shopping cart (...does nothing for now...)
  addTocart() {
    console.log("Adding a product to the cart...");
    console.log(this.product);
  }

  // Render the DOM element settings for the product item object
  render() {
    const productElement = document.createElement("li");

    productElement.className = "product-item";
    productElement.innerHTML = `
          <div>
              <img src="${this.product.imageURL}" alt="${this.product.title}">
              <div class="product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
              </div>
          </div>
          <button>Add to Cart</button>
      `;

    // Select the <button> element from the rendered innerHTML of the product item object
    const addCartButton = productElement.querySelector("button");

    // Add a corresponding event listener
    // Using .bind(this) to bind the class method .addToCart() to the rendered object of ProductItem class
    // Without it, the value of "this" binds to the global Window object instead
    addCartButton.addEventListener("click", this.addTocart.bind(this));

    return productElement;
  }
}

// Define a list of product objects; include a couple of product item objects
class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/4/4139/files/2016/01/pillows-1z38kzh.jpg",
      19.99,
      "A soft pillow!"
    ),
    new Product(
      "A Carpet",
      "https://www.speednik.com/wp-content/blogs.dir/1/files/2014/11/accsema07.jpg",
      89.99,
      "A carpet which you might like - or not."
    ),
  ];

  constructor() {
    // Intentionally left blank
  }

  // Renders the product list on the DOM
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const product of this.products) {
      // Instantiate a product item object
      const productItem = new ProductItem(product);
      // Render associated DOM element for the product item object
      const productElement = productItem.render();
      // Add product item object as a child element of the targeted parent DOM element "ul"
      prodList.append(productElement);
    }

    return prodList;
  }
}

// Define a shopping page where the shopping cart object will be rendered on the DOM
class Shop {
  render() {
    // Select the DOM element where the product list & shopping cart objects will be rendered
    const renderHook = document.getElementById("app");

    // Instantiate & render the shopping cart object
    const cart = new ShoppingCart();
    const cartElement = cart.render();

    // Instantiate & render a product list object
    const productList = new ProductList();
    const prodListElement = productList.render();

    // Render the product list and shopping cart objects on the DOM
    renderHook.append(cartElement);
    renderHook.append(prodListElement);
  }
}

// Test code
// Instantiate the shopping page & render on the DOM
const shop = new Shop();
shop.render();
