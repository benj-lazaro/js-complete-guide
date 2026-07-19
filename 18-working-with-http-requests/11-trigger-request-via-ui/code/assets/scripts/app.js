// Select the parent HTML element where the fetched data will be rendered as a list
const listElement = document.querySelector(".posts");

// Select the HTML element where an individual post (JSON data) will be rendered
const postTemplate = document.getElementById("single-post");

// Select the HTML element that submits user-content to the remote server
const form = document.querySelector("#new-post form");

// Select the HTML element that fetches data from the remote server
const fetchButton = document.querySelector("#available-posts button");

// Reusable function for HTTP request
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

  // Assemble the post to be submitted
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  // Send a "POST" HTTP request
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// Link Event Handler that performs a HTTP request "GET"
fetchButton.addEventListener("click", fetchPosts);

// Link Event Handler that performs a HTTP request "POST"
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});
