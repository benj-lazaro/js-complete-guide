// Select the parent HTML element where the fetched data will be rendered as a list
const listElement = document.querySelector(".posts");

// Select the HTML element where an individual post (JSON data) will be rendered
const postTemplate = document.getElementById("single-post");

// Select the HTML element that submits user-content to the remote server
const form = document.querySelector("#new-post form");

// Select the HTML element that fetches data from the remote server
const fetchButton = document.querySelector("#available-posts button");

// Select the HTML element that holds ALL of the fetched JSON data
const postList = document.querySelector("ul");

// Reusable function for HTTP request
function sendHttpRequest(method, url, data) {
  // Returns promised HTTP response
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => {
    // Converts streamed HTTP response into parsed
    return response.json();
  });
}

// Async function for the HTTP request "GET"
async function fetchPosts() {
  try {
    // Send a "GET" HTTP request
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts",
    );

    // NOTE: Solution that prevents new content from being appended to the previous content
    // Clears out inner (child) HTML elements PRIOR to rendering a fresh batch of content
    listElement.innerHTML = "";

    // Store the HTTP response
    const listOfPosts = responseData;

    // Iterate through the elements (converted JSON data) of the HTTP response
    for (const post of listOfPosts) {
      // Deep clone the Element node "template"
      const postEl = document.importNode(postTemplate.content, true);

      // Assign JSON property values as content on selected Element node "template" child elements
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;

      // Append the Element node "template" as child of the Element node "ul" to render on the browser
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
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

// Link Event handler that performs a HTTP request "DELETE"
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Fetch the HTML attribute "id" of the child HTML element <li>
    const postId = event.target.closest("li").id;
    const postElement = event.target.closest("li");

    // Sent a "DELETE" HTTP request
    // NOTE: Updates the UI, removing the "deleted" post from the DOM
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    ).then(() => postElement.remove());
  }
});
