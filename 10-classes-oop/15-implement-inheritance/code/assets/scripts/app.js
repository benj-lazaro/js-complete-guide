// Class that defines the properties of the "Product" object
class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that define the structure for the created Element node's attributes
class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

// Base Class that output different "components" of the web app
class Component {
  constructor(renderHookId) {
    // Identifies the HTML element where the created Element node will be attached to
    this.hookId = renderHookId;
  }

  // Create & configure an Element node
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

    // Append the created Element node stored in the local constant "rootElement"
    // To the HTML element stored in the Class property "hookId"
    document.getElementById(this.hookId).append(rootElement);

    // Return the created & configured Element node
    return rootElement;
  }
}

// Class that handles the HTML markup & specific data of a "Product" object
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  // Method that handles the "click" Event listener of a "Product" object
  addToCart() {
    // Calls the Static method "addProductToCart()" of the Class "App"
    App.addProductToCart(this.product);

    console.log(this.product);
  }

  // Method that handles the HTML markup & specific data of a "Product" object
  render() {
    // Create an Element node "li" for each "Product" object
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

    // Select the Element node "button" from the HTML markup w/in local constant "prodEl"
    const addCartButton = prodEl.querySelector("button");

    // Chain a "click" Event listener & assign a callback method
    // Bind the callback method to the Class "ProductItem"
    addCartButton.addEventListener("click", this.addToCart.bind(this));

    // Return the Element node "li" containing specific data of a "Product" object
    return prodEl;
  }
}

// Class that holds an array of "Product" objects
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

  // Intentionally left empty (for now) as the field "products" have already been initialized
  constructor() {}

  render() {
    // Create an Element node "ul" & set its attribute "class"
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    // Iterate through each "Product" object element stored in the property "products"
    for (const prod of this.products) {
      // Create a "ProductItem" object for each "Product" object read
      const productItem = new ProductItem(prod);

      // Call method "render()" of the Class "ProductItem"; store returned Element node "li"
      const prodEl = productItem.render();

      // Append the Element node "li" as a child of the Element node "ul"
      prodList.append(prodEl);
    }

    // Return the Element node "ul"
    return prodList;

    // Append the Element node "ul" as a child of the Element node "div"
    renderHook.append(prodList);
  }
}

// Sub-Class that contains a list of checked-out "ProductItem" objects
class ShoppingCart extends Component {
  // Store "ProductItem" objects that are "added to cart" (i.e. checked-out)
  items = [];

  // Setter that updates the HTML markup w/ the sum returned by the Getter "totalAmount"
  set cartItems(value) {
    // Override the existing array in Class field "items'"
    this.items = value;

    // Update the HTML markup of "Total" w/ the sum returned by the Getter "totalAmount"
    this.outputTotal.innerHTML = `<h2>Total: \$ ${this.totalAmount.toFixed(2)}</h2>`;
  }

  // Getter that returns the total price of "ProductItem" objects placed in the cart
  get totalAmount() {
    const sum = this.items.reduce((previousValue, currentItem) => {
      return previousValue + currentItem.price;
    }, 0);

    return sum;
  }

  // Calls the Constructor method of the Base Class "Component"
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Push the clicked "ProductItem" object into the Class field "items"
  addProduct(product) {
    // Copy current content of Class field "items"
    const updatedItems = [...this.items];

    // Add a new "ProductItem" object into the array
    updatedItems.push(product);

    // Trigger the Setter "cartItems()" to update HTML markup & sum of "Total"
    this.cartItems = updatedItems;
  }

  render() {
    // Create an Element node using the inherited method "createRootElement" of
    // The Base Class "Component" & set its "Class" attribute
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
    `;

    // Dynamically create Class field "outputTotal" & then
    // Grab Element node "h2" from HTML markup stored w/in local constant "cartEl"
    this.outputTotal = cartEl.querySelector("h2");
  }
}

// Class that renders "ProductList" & "ShoppingCart" objects in the DOM
class Shop {
  render() {
    // Selects the Element node "div" from the "index.html" w/ an attribute "id" of "app"
    const renderHook = document.getElementById("app");

    // From a constant into an Class field that stores a "ShoppingCart" object
    // Forward the attribute "id" value of the HTML element where
    // The "ShoppingCart" object will be rendered on
    this.cart = new ShoppingCart("app");

    // Calls the method "render()" of the Sub-Class "ShoppingCart"
    this.cart.render();

    // Instantiate the Class "ProductList" & call its method "render()"
    // Store the returned Element node "ul" (a list of "ProductItem" objects)
    const productList = new ProductList();
    const prodListEl = productList.render();

    // Append the Element node "ul" as child of the Element node "div"
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  // Static method that instantiates Class "Shop" then
  // Renders the "ShoppingCart" & "ProductList" objects in the DOM
  static init() {
    const shop = new Shop();
    shop.render();

    // Copies the value stored w/in the property "cart" of the Clsss "Shop"
    // To the Static field "cart"
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    // Proxy calls the method "addProduct()" of the Class "ShoppingCart"
    this.cart.addProduct(product);
  }
}

// Call the Static method "init()" of the Class "App"
App.init();
