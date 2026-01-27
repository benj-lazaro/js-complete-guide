const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");
const messageInput = document.getElementById("click-message-input");

let person = { name: "Max" }; // Garbage Collect will NOT clear this object from Heap due to assigned reference

person = null; // Reference removed; Garbage Collection can remove this object from Heap

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}

// Every click allocates memory from Heap for the anonymous function; may lead to an ovrflow
function addListener() {
  clickableBtn.addEventListener("click", function () {
    const value = messageInput.value;
    console.log(value || "Clicked me!");
  });
}

addListenerBtn.addEventListener("click", addListener);
