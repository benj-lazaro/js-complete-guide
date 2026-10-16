const { fetchData } = require("./http");

const loadTitle = () => {
  // Returns modified fetched data to the function "printTitle()"
  return fetchData().then((extractedData) => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();

    // Returns the modified extractedData w/in itself (inner function)
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};

// exports.printTitle = printTitle;
exports.loadTitle = loadTitle;
