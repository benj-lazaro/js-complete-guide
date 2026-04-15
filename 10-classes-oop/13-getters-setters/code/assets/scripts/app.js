// Class that defines the "Product" object
class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Class that renders the HTML markup & unique data of each "Product" object read
class ProductItem {
  // Parameter variable "product" holds a "Product" object forwarded by Class "ProductList"
  constructor(product) {
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
    // Create an Element node "li" for each "Product" object read
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

    // Select the HTML element <button> from the HTML markup in the local constant "prodEl"
    const addCartButton = prodEl.querySelector("button");

    // Chain an Event listener for a "click" event & its callback method
    addCartButton.addEventListener("click", this.addToCart.bind(this));

    // Return Element node "li"
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

  // Intentionally left empty as Class field "product" had been initialized
  constructor() {}

  // Method that renders a list of "ProductItem" objects in the DOM
  render() {
    // Create Element node "ul" & set its attribute "class"
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    // Iterate through each object element in the property "products"
    for (const prod of this.products) {
      // Instantiate the Class "ProductItem" & pass the "Product" object read as argument
      const productItem = new ProductItem(prod);

      // Call method "render()" of Class "ProducItem" & store returned Element node "li"
      const prodEl = productItem.render();

      // Append the created Element node "li" as child of the Element node "ul"
      prodList.append(prodEl);
    }

    // Return the Element node "ul"
    return prodList;
  }
}

// Class that contains the HTML markup & logic of the shopping cart
class ShoppingCart {
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
    const cartEl = document.createElement("section");
    cartEl.className = "cart";
    cartEl.innerHTML = `
      <h2>Total: \$ ${0}</h2>
      <button>Order Now!</button>
      `;

    // Dynamically create property "outputTotal" & assign Element node "h2" as value
    this.outputTotal = cartEl.querySelector("h2");

    // Return the Element node "section"
    return cartEl;
  }
}

// Class that renders the "ShoppingCart" & "ProductList" objects in the DOM
class Shop {
  // Method that renders "ShoppingCart" & "ProductList" objects & attach to DOM
  render() {
    // Select & store Element node "div" taken from the "index.html" file
    const renderHook = document.getElementById("app");

    // Instantiate Class "ShoppingCart" & store returned Element node "section"
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();

    // Instantiate Class "ProductList" & store returned Element node "ul"
    const productList = new ProductList();
    const prodlistEl = productList.render();

    // Append Element nodes "section" & "ul" as children of Element node "div"
    renderHook.append(cartEl);
    renderHook.append(prodlistEl);
  }
}

class App {
  static cart;

  // Method that "starts" the web app
  static init() {
    // Instantiate Class "Shop" & render "ShoppingCart" & "ProductList" objects in the DOM
    const shop = new Shop();
    shop.render();

    // Access the CLass "ShoppingCart" field "cart" & store to the Static field "cart"
    this.cart = shop.cart;
  }

  // Proxy for the Class "ShoppingCart" method "addProduct()"
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// Call the Class "App" Static method "init()"
App.init();
