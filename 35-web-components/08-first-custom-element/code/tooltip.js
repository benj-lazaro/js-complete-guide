// Class the holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    super(); // To address the flagged Uncaught ReferenceError
    console.log("It is working!");
  }
}

// Register the Web Component
customElements.define("uc-tooltip", Tooltip);
