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

// Class that defines the structure for the created Element node's attribute assignment
class ElementAttribute {
  // Constructor
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.previousValue = attributeValue;
  }
}

// Base Class
class Component {
  // Constructor
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  // Instance method(s)

  // Create Element node & configure it w/ attributes
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClasses) {
      rootElement.className = cssClasses;
    }

    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }

    // Append the configured Element node to the HTML element stored in the Instance field "hookId"
    document.getElementById(this.hookId).append(rootElement);

    return rootElement;
  }
}

// Sub-Class that contains "Product" object(s) to be checked out
class ShoppingCart extends Component {
  // Instance field(s)
  items = [];

  // Setter
  set cartItems(value) {
    // Overwrite previous "ProductItem" objects in Instance field "items"
    this.items = value;

    // Calls the Getter "totalAmount" to update the HTML markup of the Element node "h2"
    this.outputTotal.innerHTML = `<h2>Total: \$ ${this.totalAmount.toFixed(2)}</h2>`;
  }

  // Getter
  get totalAmount() {
    // Get the sum of the selected "ProductItem" objects' property "price"
    const sum = this.items.reduce((previousValue, currentItem) => {
      return previousValue + currentItem.price;
    }, 0);

    // Return the sum
    return sum;
  }

  // Constructor
  constructor(renderHookId) {
    // Calls the Constructor method of the Base Class "Component"
    super(renderHookId);
  }

  // Instance method(s)

  // Adds a "ProductItem" object into the Instance field "items"
  addProduct(product) {
    // Copy the contents of the Instance field "items"
    const updatedItems = [...this.items];

    // Push a "ProductItem" object into the Intance field "updatedItems"
    updatedItems.push(product);

    // Trigger the Setter "cartItems" to re-render the value of "Total"
    this.cartItems = updatedItems;
  }

  // Render HTML markup & content of the shopping cart
  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
    `;

    // Dynamically creates a Class field named "outputTotal"
    // Select the Element node "h2" from the HTML markup w/in the local constant "cartEl"
    this.outputTotal = cartEl.querySelector("h2");

    // Return the Element node "section"
    return cartEl;
  }
}

// Class that renders the list of "Product" objects w/in a shopping cart in the DOM
class Shop {
  // Instance method(s)

  // Renders the HTML markup of the product list & shopping cart
  render() {
    // Select HTML element <div> w/ attribute "id" of "app"
    const renderHook = document.getElementById("app");

    // Instantiate the Class "ShoppingCart" & pass the "id" attribute value "app" as argument
    this.cart = new ShoppingCart("app");

    // Calls the method "render" of the Sub-Class "ShoppingCart"
    this.cart.render();

    // Instantiate the Class "ProductList"
    const productList = new ProductList();

    // Store the returned Element node "ul"
    const prodListEl = productList.render();

    // Appends the Element node "ul" in HTML element <div>

    renderHook.append(prodListEl);
  }
}

// Class that renders the HTML markup & content of a single "Product" object
class ProductItem {
  // Constructor
  constructor(product) {
    this.product = product;
  }

  // Instance method(s)

  // Callback method for the local constant "addCartButton"
  addToCart() {
    // Calls the Static method "AddProductToCart" of the Class "App"
    // Pass the value stored in the Instance field "product" as argument
    App.addProductToCart(this.product);

    // This line is for debugging purposes ONLY
    console.log(this.product);
  }

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
  // Instance field(s)
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

  // Instance method(s)
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

// Class that allows communication between Class "ShoppingCart" & "ProductItem"
class App {
  // Static field(s)
  static cart;

  // Static method(s)
  static init() {
    // Instantiates the Class "Shop"
    const shop = new Shop();

    // Calls the Instance method "render()" of the Class "Shop"
    shop.render();

    // Access the Instance field "cart" of the Class "Shop"
    // Then assign it as value to the Static field "cart"
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    // Calls the Instance method "addProduct()" of the Class "ShoppingCart"
    // Stored w/in the Static field "cart"
    this.cart.addProduct(product);
  }
}

// Calls the Static method "init()" of the Class "App"
App.init();
