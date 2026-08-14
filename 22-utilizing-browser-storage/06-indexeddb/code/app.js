const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Store data on IndexedDB
storeBtn.addEventListener("click", () => {
  // Establish a connection to the IndexedDB storage
  const dbRequest = indexedDB.open("StorageDummy", 1);

  // Event Handler when the database connection is successful
  dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Create an Object Store (database table) & configure it
    const objStore = db.createObjectStore("products", { keyPath: "id" });

    // Initialize Object Store w/ individual items
    objStore.transaction.oncomplete = function (event) {
      // Configure the Object Store's transaction mode ("readonly" or "readwrite")
      const productsStore = db
        .transaction("products", "readwrite")
        .objectStore("products");

      // Add items items to the Object Store, each identified by their "keyPath" (i.e. "id")
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

  // Event Handler when the database request fails
  dbRequest.onerror = function (event) {
    console.log("Error!");
  };
});

// Retrieve data from IndexedDB
retrieveBtn.addEventListener("click", () => {});
