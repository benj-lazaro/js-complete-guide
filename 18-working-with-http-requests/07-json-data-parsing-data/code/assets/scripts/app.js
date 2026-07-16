// Select HTML element where to the converted JSON data will be rendered
const listElement = document.querySelector(".posts");

// Select the HTML element <templete> where a single entry of the JSON data will be rendered
const postTemplate = document.getElementById("single-post");

// Create a XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the XMLHttpRequest object
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// Configure the expected data format of the HTTP response from the server
xhr.responseType = "json";

// Setup an Event Listener (alternative method)
xhr.onload = function () {
  // Manually extract & convert JSON data into a JavaScript data type
  // const listOfPosts = JSON.parse(xhr.response);

  // Automatically extract & convert JSON data into a JavaScript data type
  const listOfPosts = xhr.response;

  // Iterate through the converted JSON data
  for (const post of listOfPosts) {
    // Create a deep clone of the selected HTML element <template>
    const postEl = document.importNode(postTemplate.content, true);

    // Select HTML elements & populate w/ the converted JSON data
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;

    // Append converted JSON data to the HTML element <ul>
    listElement.append(postEl);
  }
};

// Send the HTTP request
xhr.send();
