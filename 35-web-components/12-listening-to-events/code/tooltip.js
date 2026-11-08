// Class that holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    super();

    // Private property that holds the HTML element for the "mouse over" content
    this._tooltipContainer;
  }

  // Creates the Web Component & adds it to the DOM
  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";

    // Event handler for "mouseenter"
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));

    // Event handler for "mouseleave"
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));

    this.append(tooltipIcon);
  }

  // Private methods
  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = "This is the tooltip text!";
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

// Registers the Web Component "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
