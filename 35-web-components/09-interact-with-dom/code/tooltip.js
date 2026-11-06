// Class the holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    super();

    // Define the Web Component's icon & append to the DOM
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    this.append(tooltipIcon);
  }
}

// Register the Web Component
customElements.define("uc-tooltip", Tooltip);
