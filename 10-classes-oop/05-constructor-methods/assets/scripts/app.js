// Using classes

class Product {
  // Define fields (translates to object properties after instantiation)
  title = "default";
  imageURL;
  price;
  description;

  // Define a constructor method
  constructor(title, image, price, desc) {
    // Assign the passed argument as initial values to the corresponding class fields
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

// Contains a list of products in an array with rendering logic
const productList = {
  products: [
    // Instantiate class into objects that serves as array elements
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
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const product of this.products) {
      const productElement = document.createElement("li");
      productElement.className = "product-item";
      productElement.innerHTML = `
            <div>
                <img src="${product.imageURL}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\$${product.price}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
            <button>Add to Cart</button>
        `;
      prodList.append(productElement);
    }
    renderHook.append(prodList);
  },
};

// Test code
productList.render();
