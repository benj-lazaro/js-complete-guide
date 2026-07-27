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

// Async function for the HTTP request "GET"
async function fetchPosts() {
  try {
    // Send an Axios HTTP request GET
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );

    // NOTE: This prevents new fetched content from being appended to the previous fetched content
    // Clears out inner (child) HTML elements PRIOR to rendering the freshly fetched content
    listElement.innerHTML = "";

    // Store the HTTP response
    const listOfPosts = response.data;

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
    // Axios object containing details of encountered HTTP response error
    console.log(error.response);
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

  // Send an Axios HTTP request POST
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post,
  );
  console.log(response);
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

    // Axios HTTP request DELETE
    // NOTE: Updates the UI, removing the "deleted" post from the DOM
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => postElement.remove());
  }
});
