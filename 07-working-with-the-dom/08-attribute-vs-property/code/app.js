// Select Element node <input>
const input = document.querySelector("input");

// Change the assigned value of the property "value"
// Is NOT reflected on the assigned value of attribute "value"
input.value = "Some other input the user might have entered";
console.log(`Content of attribute "value": ${input.value}`);

// Use setAttribute() to reflect changes on the attribute "value" of the specified elemment
input.setAttribute("value", "A new default value");

// Changes on attribute "value" is NOT reflected on the browser but on the DOM
console.log("setAttribute() on <input> element's attribute value");
console.log(`Content of attribute "value": ${input.value}`);

// Select Element node <h1> by the assigned value on its ID attribute
const h1 = document.getElementById("main-title");

// Change the assigned value of the property "id"
// Is reflected on the assigned value of the attribute "id"
h1.id = "new-id";
