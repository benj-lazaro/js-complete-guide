// Select the parent HTML that lists the fetched posts from the server
const listElement = document.querySelector(".posts");

// Select the HTML element that renders individual posts (JSON data)
const postTemplate = document.getElementById("single-post");

// Reusable HTTP request function
function sendHttpRequest(method, url, data) {
  // Create a Promise object
  const promise = new Promise((resolve, reject) => {
    // Create a XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the XMLHttpRequest object
    xhr.open(method, url);
    xhr.responseType = "json";

    // Setup an Event Listener for the XMLHttpRequest object
    xhr.onload = function () {
      // Fetch the HTTP response once the HTTP request is complete
      resolve(xhr.response);
    };

    // Send the HTTP request to the remote server
    // Converts data (if included) into JSON data prior submission
    xhr.send(JSON.stringify(data));
  });

  // Return the created Promise object containing the HTTP response
  return promise;
}

// Async function for the HTTP request "GET"
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts",
  );

  // Store the HTTP response
  const listOfPosts = responseData;

  // Iterate through the elements (converted JSON data) of the HTTP response
  for (const post of listOfPosts) {
    // Deep clone the Element node "template"
    const postEl = document.importNode(postTemplate.content, true);

    // Assign JSON property values as content on selected Element node "template" child elements
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;

    // Append the Element node "template" as child of the Element node "ul" to render on the browser
    listElement.append(postEl);
  }
}

// Async function for the HTTP request "POST"
async function createPost(title, content) {
  const userId = Math.random();

  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  // Submit new data to the remote server
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// Perform a GET HTTP request
fetchPosts();

// Perform a POST HTTP request
createPost("Test Entry", "This is a test post.");
