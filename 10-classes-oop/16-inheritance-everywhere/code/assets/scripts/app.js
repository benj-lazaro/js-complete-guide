// Class that defines a "Product" object
class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that defines an HTML attribute (e.g. "id") of the created Element node
class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

// Base Class
class Component {
  // Identifies the HTML tag name where the created Element node will be rendered
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  // Method that create an Element node & define its attributes
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);

    // Check & set the HTML attribute "class"
    if (cssClasses) {
      rootElement.className = cssClasses;
    }

    // Check & set other HTML attribite (e.g. "id")
    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }

    // Append the Element node to the HTML tag name stored w/in the Instance field "hookId"
    document.getElementById(this.hookId).append(rootElement);

    // Return the Element node
    return rootElement;
  }
}

// Sub-Class that holds the "ProductItem" objects placed in the shopping cart
class ShoppingCart extends Component {
  // Stores "ProductItem" objects
  items = [];

  // Setter that overwrites "ProductItem" objects stored in the Instance field "items"
  set cartItems(value) {
    this.items = value;

    // Calls Getter "totalAmount" to update the HTML markup of the Element node "h2"
    // NOTE: Instance field "outputTotal" is dynamically created w/in the method "render()"
    this.outputTotal.innerHTML = `<h2>Total: \$ ${this.totalAmount.toFixed(2)}</h2>`;
  }

  // Getter that returns the sum of the property "price" of selected "ProductItem" object(s)
  get totalAmount() {
    const sum = this.items.reduce((previousValue, currentItem) => {
      return previousValue + currentItem.price;
    }, 0);

    return sum;
  }

  // Calls the Constructor method of the Base Class "Component"
  // Passes the HTML tag where the created Element node will be rendered 
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Method that pushes a "ProductItem" object into the Instance field "items"
  addProduct(product) {
    // Copies the current content of the Instance field "items"
    const updatedItems = [...this.items];

    // Push a new "ProductItem" object into the local constant "updatedItems"
    updatedItems.push(product);

    // Triggers the Setter "cartItems" to overwrite value in the Instance field "cartItems"
    this.cartItems = updatedItems;
  }

  // Method that renders the HTML markup & content of the shopping cart
  render() {
    // Create an Element node "section" using the method "render()" of the Base Class "Component"
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
    `;

    // Dynamically creates the Instance field "outputTotal"
    // Select the Element node "h2" From the HTML markup stored in the local constant "cartEl"
    this.outputTotal = cartEl.querySelector("h2");
  }
}

// Class that renders"ProductList" & "ShoppingCart" objects
class Shop {
  // Method that instantiates the Sub-Classes & calls their instance method "render()"
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();

    const productList = new ProductList("app");
    productList.render();
  }
}

// Class that renders the HTML markup & content of a "Product" object
class ProductItem extends Component {
  constructor(product, renderHookId) {
    // Calls the Constructor method of the Base Class "Component"
    // Passes the HTML tag where the created Element node will be rendered 
    super(renderHookId);

    this.product = product;
  }

  // Callback method for the Event listener "addCartButton"
  addToCart() {
    // Calls the Static method "AddProductToCart" of Class "App"
    App.addProductToCart(this.product);
  }

  // Method that prepares the HTML mark & content of a "Product" object
  render() {
    // Create an Element node "li" using the method "render()" of the Base Class "Component"
    const prodEl = this.createRootElement("li", "product-item");

    // Access Instance fields of a "Product" object from the local Instance field "product"
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

    // Select the HTML element <button> stored w/in the local constant "prodEl"
    const addCartButton = prodEl.querySelector("button");

    // Chain an Event listener, bind the "ProductItem" object to the callback method "addToCart"
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

// Sub-class that holds a list of "Product" objects
class ProductList extends Component {
  // Hard-coded sample products
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

  // Calls the Constructor method of the Base Class "Component"
  // Passes the HTML tag where the created Element node will be rendered 
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Method that renders a list of "Product" objects
  render() {
    // Create an Element node "ul" using the method "render()" of the Base Class "Component"
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list')
    ]);
  
    // Iterate through "Product" objects stored w/in the Instance field "products"
    for (const prod of this.products) {
      // Instantiate a "ProductItem" object for each entry in the Instance field "products"
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();      
    }
  }
}

// Class that communicates between the Sub-Classes "ShoppingCart" & "ProductItem"
class App {
  static cart;

  // Static method that "starts" the web app
  static init() {
    const shop = new Shop();
    shop.render();

    this.cart = shop.cart;
  }

  // Static method that calls the Instance method "addProduct()" of Class "ShoppingCart"
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// Calls the Static method "init()" of the Class "App" to start the web app
App.init();
