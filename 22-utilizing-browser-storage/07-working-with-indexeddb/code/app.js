const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Store access to the created / existing database in IndexedDB
let db;

// Create a new database or open a connection to an existing one
const dbRequest = indexedDB.open("StorageDummy", 1);

// Database request success
dbRequest.onsuccess = function (event) {
  // Store access to the database
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  // Store access to the database
  db = event.target.result;

  // Create an Object Store (i.e. table) & configure key needed to identify stored objects (i.e. items)
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  // Configure Object Store's transaction mode
  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");

    // Add an initial item to the Object Store w/in "StorageDummy"
    productsStore.add({
      id: "product1",
      title: "A First Product",
      price: 12.99,
      tags: ["expensive", "luxury"],
    });
  };
};

// Database request fail
dbRequest.onerror = function (event) {
  console.log("Error!");
};

// Store data on IndexedDB
storeBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

  // Add new item to the Object Store w/in "StorageDummy"
  productsStore.add({
    id: "product2",
    title: "A Second Product",
    price: 42.99,
    tags: ["more expensive", "insane luxury"],
  });
});

// Retrieve data from IndexedDB
retrieveBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

  // Retrieve specific item from the database in IndexedDB
  const request = productsStore.get("product2");

  // Database item retrieve success
  request.onsuccess = function () {
    console.log(request.result);
  };

  // Database item retrieve failed
  request.onerror = function () {
    console.log("Item NOT found");
  };
});
