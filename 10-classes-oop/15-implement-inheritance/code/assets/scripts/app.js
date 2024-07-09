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
  }

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
class ProductItem {
  constructor(product) {
    // Fetch the fields from the Product class
    this.product = product;
  }

  // Adds a product item object to the shopping cart
  addTocart() {
    App.addProductToCart(this.product);
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

    this.cart = new ShoppingCart("app");
    this.cart.render();

    const productList = new ProductList();
    const prodListElement = productList.render();

    // Render the product list and shopping cart objects on the DOM

    renderHook.append(prodListElement);
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
    shop.render();

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
