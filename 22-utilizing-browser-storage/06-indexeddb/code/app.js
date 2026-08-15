const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Create a new database or open a connection to an existing one
const dbRequest = indexedDB.open("StorageDummy", 1);

// Database request successful
dbRequest.onupgradeneeded = function (event) {
  // Access the database
  const db = event.target.result;

  // Create an Object Store (i.e. table) & configure key needed to identify stored objects (i.e. items)
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  // Configure Object Store's transaction mode
  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");

    // Add new item(s) to the Object Store w/in "StorageDummy"
    productsStore.add({
      id: "product1",
      title: "A First Product",
      price: 12.99,
      tags: ["expensive", "luxury"],
    });

    productsStore.add({
      id: "product2",
      title: "A Second Product",
      price: 42.99,
      tags: ["more expensive", "insane luxury"],
    });
  };
};

// Database request failed
dbRequest.onerror = function (event) {
  console.log("Error!");
};

// Store data on IndexedDB
storeBtn.addEventListener("click", () => {});

// Retrieve data from IndexedDB
retrieveBtn.addEventListener("click", () => {});
