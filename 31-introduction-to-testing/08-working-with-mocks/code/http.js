const axios = require("axios");

const fetchData = () => {
  // Test to check if Axios is called
  console.log("Axios: Fetching data...");

  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.data;
    });
};

exports.fetchData = fetchData;
