// Select the HTML element <input>
const input = document.querySelector("input");

// Fetch the Element node's property ".value"
console.log(input.value);
console.log("----------");

// Assign a new value to the Element node's property ".value"
input.value = "some other input the user might have entered";
console.log(input.value);
console.log("----------");

// Set a new value to the attribute "value" of the HTML element <input> on the DOM
input.setAttribute("value", "some other default text");
console.log(input.value);
console.log("----------");

// Assign another new value to the Element node's property ".value"
input.value = "another attempt";
console.log(input.value);
console.log("----------");

// Assign the set value of the attribute "value" of the HTML element <input> as value to the Element node's property ".value"
input.value = input.getAttribute("value");
console.log(input.value);
console.log("----------");
