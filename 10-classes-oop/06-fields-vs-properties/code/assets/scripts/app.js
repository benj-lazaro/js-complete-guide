// Define a Class
class Product {
  // Using a Constructor method to define Class properties
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

// Use the Constructor method to create object of the same structure but of different values
const productList = {
  products: [
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
  ],
  render() {
    // Select HTML element <div> w/ attribute "id" of "app"
    const renderHook = document.getElementById("app");

    // Create a Element node "ul" w/ attribute "class" of "product-list"
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    // Iterate through the object elements of the property "products"
    for (const prod of this.products) {
      // Create a corresponding Element node "li" for each object read
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">

            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$ ${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;

      // Append the Element node "li" as a child of the Element node "ul"
      prodList.append(prodEl);
    }

    // Append the Element node "ul" w/in the Element node "div"
    renderHook.append(prodList);
  },
};

// Render the values of the property "products" from the object "productList" in the DOM
productList.render();
