const section = document.querySelector("section");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const div = document.querySelector("div");

// section.style.backgroundColor = "blue";
section.className = "red-bg";

button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.classList = "red-bg invisible";
  //   } else {
  //     section.classList = "red-bg visible";
  //   }

  // Or use property classList to make it easier to do so
  section.classList.toggle("invisible");
});

// The innerHTML replaces the HTML structure of <section>'s descendants with a <h2> element
// section.innerHTML = "<h2>A New Title</h2>";

// innerHTML workaround to prevent from current descendants from being replaced with new content
ul.innerHTML += "<li>Item 4</li>";

// Add a new element within the <div> element's descendants using innerHTML
div.innerHTML += "<p>Something went wrong</p>";

// Use insertAdjacentHTML() to add a new element after the last child of the <div> element
div.insertAdjacentHTML("beforeend", "<p>Something went boom!</p>");
