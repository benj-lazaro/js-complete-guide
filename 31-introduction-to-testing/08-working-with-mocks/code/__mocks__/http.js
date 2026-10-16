// Mock implementation of the fetchData()
const fetchData = () => {
  console.log("Mock: Fetching data...");
  return Promise.resolve({ title: "delectus aut autem" });
};

exports.fetchData = fetchData;
