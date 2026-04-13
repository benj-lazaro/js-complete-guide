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
    console.log("Adding to cart");
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
    // Selects the Element node "div" w/ an attribute "id" of "app"
    const renderHook = document.getElementById("app");

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

    // Append the created Element node "ul" as child of the Element node "div"
    renderHook.append(prodList);
  }
}

// Instantiate Class "ProductList" & render a list of "ProductItem" objects
const productList = new ProductList();
productList.render();
