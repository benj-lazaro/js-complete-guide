// Mock implementation of Axios
const get = (url) => {
  console.log("Mock: Calling .get() method...");
  return Promise.resolve({ data: { title: "delectus aut autem" } });
};

exports.get = get;
