// Define how a product object will look like
class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

// Sets up an element's attribute & corresponding value
class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

// Define a base class that outputs different components
// That will be part of the web app
class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render(); // Calls the sub-class .render(); NOT the .render() method below
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClasses) {
      rootElement.style.className = cssClasses;
    }

    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }

    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

// Define how a shopping cart object look like
// Inherits from the base class Component
class ShoppingCart extends Component {
  items = [];

  // Setter
  set cartItems(values) {
    // Receives select product item & set the total amount
    this.items = values;
    this.totalOutput.innerHTML = `
      <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
    `;
  }

  // Getter
  get totalAmount() {
    // Use .reduce() to return the sum of selected product items
    const sum = this.items.reduce(
      (previousValue, currentItem) => previousValue + currentItem.price,
      0
    );

    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  // Update product items in the shopping cart
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // Renders the total amount of product item(s) & associated DOM element <button>
  render() {
    const cartElement = this.createRootElement("section", "cart");

    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;

    cartElement.className = "cart";

    // Select the rendered DOM element where the total price of project items will be shown
    this.totalOutput = cartElement.querySelector("h2");
  }
}

// Define a single product object's methods
class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  // Adds a product item object to the shopping cart
  addTocart() {
    App.addProductToCart(this.product);
  }

  // Render the DOM element settings for the product item object
  render() {
    const productElement = this.createRootElement("li", "product-item");
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
  }
}

// Define a list of product objects; include a couple of product item objects
class ProductList extends Component {
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

  constructor(renderHookId) {
    super(renderHookId);
  }

  // Renders the product list on the DOM
  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    for (const product of this.products) {
      new ProductItem(product, "prod-list");
    }
  }
}

// Define a shopping page where the shopping cart object will be rendered on the DOM
class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

// Class that holds the overall app
class App {
  // Static field
  static cart;

  // Static methods
  // Initializes the entire web app
  static init() {
    // Instantiate the shopping page & render associated objects on the DOM
    const shop = new Shop();
    // Add a "cart" property by referring to the cart field of the class Shop
    this.cart = shop.cart;
  }

  // Calls the method .addProduct() of the class ProductItem
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// Launch the web app by executing the static method init() directly from the class App
App.init();
