const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi);

// Select the HTML <section>
const section = document.querySelector("section");
const button = document.querySelector("button");

// Manually removes the assigned Classes from HTML <section>
// section.className = "";

button.addEventListener("click", () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  // section.classList.toggle('visible');

  section.classList.toggle("invisible");
});
