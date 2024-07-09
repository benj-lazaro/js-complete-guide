const section = document.querySelector("section");
const button = document.querySelector("button");

// Overwrites class defined in the HTML document due to its high specificity level
// section.style.backgroundColor = "blue";

// Use property className to change/toggle the initial assigned value on the selected element's class attribute
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
