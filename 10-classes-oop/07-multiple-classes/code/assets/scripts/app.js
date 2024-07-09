class Product {
  // Defines how product object will look like

  // Define the properties of the object & assign initial values
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    // Renders an object based on the Product class
    this.product = product;
  }

  render() {
    // Render DOM element & additional data for the product object & then return it to the calling statement
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

    return productElement;
  }
}

class ProductList {
  // Renders an array filled with the following objects upon instantiation
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

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const product of this.products) {
      // Instantiate a product object, render associated DOM elements & then add into the array
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      prodList.append(productElement);
    }

    // Append rendered array of product objects on the targeted DOM element
    renderHook.append(prodList);
  }
}

// Instantiate an object from class & then render it on the DOM
const productList = new ProductList();
productList.render();
