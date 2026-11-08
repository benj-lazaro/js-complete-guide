// Class that holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  // Creates the Web Component & adds it to the DOM
  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    this.append(tooltipIcon);
  }
}

// Registers the Web Component "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
