// Class that defines the "Product" object
class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that defines the attribute structure of an Element node
class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

// Class that creates & configures an Element node needed by a Sub-Class
class Component {
  constructor(renderHookId) {
    // Identifies the HTML element where the Element node (to be created) will be rendered
    this.hookId = renderHookId;

    // Call the Sub-Class' method "render()"
    this.render();
  }

  // Method that is overriden by a Sub-Class' method "render()"
  render() {}

  // Method that create & configure an Element node
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

    // Append the Element node as a child to the HTML element in Class property "hookId"
    document.getElementById(this.hookId).append(rootElement);

    // Return Element node
    return rootElement;
  }
}

// Sub-Class that renders the HTML markup & unique data of each "Product" object read
class ProductItem extends Component {
  // Parameter variable "product" holds a "Product" object forwarded by Class "ProductList"
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  // Callback method for a "click" event
  addToCart() {
    // Calls the Class "App" Static method "addProductTocart()"
    App.addProductToCart(this.product);

    // For debugging
    console.log(this.product);
  }

  // Method that handles the HTML markup & unique data of a "Product" object
  render() {
    // Use inherited method to create an Element node "li" for each "Product" object read
    const prodEl = this.createRootElement("li", "product-item");
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

    // Select the HTML element <button> from the HTML markup in the local constant "prodEl"
    const addCartButton = prodEl.querySelector("button");

    // Chain an Event listener for a "click" event & its callback method
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

// Sub-Class that holds an array of "Product" objects
class ProductList extends Component {
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

  // Call the Base Class "Component" Constructor method
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Method that renders a list of "ProductItem" objects in the DOM
  render() {
    // Use inherited method to create & set an Element node "li"
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    // Iterate through each object element in the property "products"
    for (const prod of this.products) {
      // Instantiate the Class "ProductItem" & pass the "Product" object read as argument
      new ProductItem(prod, "prod-list");
    }
  }
}

// Sub-Class that contains the HTML markup & logic of the shopping cart
class ShoppingCart extends Component {
  // Shopping cart that holds "ProductItem" objects
  items = [];

  // Setter that updates the HTML markup stored in the property "outputTotal"
  set cartItems(value) {
    // Overwrite stored objects w/ "ProductItems" objects from method "addProduct()"
    this.items = value;

    // Overwrite HTML markup w/ the returned sum from Getter "totalAmount"
    this.outputTotal.innerHTML = `<h2>Total: \$ ${this.totalAmount.toFixed(2)}</h2>`;
  }

  // Getter that calculates the sum of "ProductItem" objects' ".price" property
  get totalAmount() {
    const sum = this.items.reduce((previousValue, currentItem) => {
      return previousValue + currentItem.price;
    }, 0);

    return sum;
  }

  // Call the Base Class "Component" Constructor method
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Method that adds a "ProductItem" object into the shopping cart
  addProduct(product) {
    // Assign copy of array stored in the field "items"
    const updateItems = [...this.items];

    // Push a new "ProductItem" object into the array stored in the local constant "updateItems"
    updateItems.push(product);

    // Assign the updated array as value to the Setter "cartItems"
    this.cartItems = updateItems;
  }

  // Method that renders the HTML markup of the shopping cart
  render() {
    // Create Element node "section" w/ an attribute "class" of "cart"
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
      `;

    // Dynamically create property "outputTotal" & assign Element node "h2" as value
    this.outputTotal = cartEl.querySelector("h2");
  }
}

// Class that renders the "ShoppingCart" & "ProductList" objects in the DOM
class Shop {
  constructor() {
    // Trigger Class method "render()" upon instantation of Class into an object
    this.render();
  }

  // Method that renders "ShoppingCart" & "ProductList" objects & attach to DOM
  render() {
    // Instantiate the Sub-Class "ShoppingCart" & pass the value of HTML attribute "id"
    // Where the Element node "section" will be rendered
    this.cart = new ShoppingCart("app");

    // Instantiate Sub-Class "ProductList" & pass the value of HTML attribute "id"
    // Where the Element node "ul" will be rendered
    new ProductList("app");
  }
}

// Class that represents the web app
class App {
  static cart;

  // Method that "starts" the web app
  static init() {
    // Instantiate Class "Shop"
    const shop = new Shop();

    // Access the Sub-Class "ShoppingCart" field "cart"
    this.cart = shop.cart;
  }

  // Proxy for the Sub-Class "ShoppingCart" method "addProduct()"
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// Call the Class "App" Static method "init()"
App.init();
