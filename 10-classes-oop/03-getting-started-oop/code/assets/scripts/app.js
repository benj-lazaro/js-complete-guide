const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.9UtdOxfFxHcVNKnkblTIBwHaHa%3Fpid%3DApi&f=1&ipt=8654694e58dc9093f53aa36c0b06801410e65dccbb6a013dbbbcb1e2c2f0d02c",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F200-2004153_carpet.jpg&f=1&nofb=1&ipt=32f5c6713ceed3de746e30c05ed5e48ddf8e99f1fa57abb0a6f6a42b68d91928",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");

    prodList.className = "product-list";

    for (const prod of this.products) {
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

      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
