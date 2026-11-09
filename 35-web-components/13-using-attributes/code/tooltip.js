// Sub-class that holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    // Inherits the properties & methods of the parent Class
    super();

    // Private property that holds the HTML element for the "mouse over" content
    this._tooltipContainer;

    // Private property that holds the default tooltip text
    this._tooltipText = "Default tooltip text.";
  }

  // Creates the Web Component & adds it to the DOM
  connectedCallback() {
    // Check if custom attribute "text" is set & override the default tooltip text
    if (this.hasAttribute("text")) {
      // Get the value of the custom attribute "text"
      this._tooltipText = this.getAttribute("text");
    }

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
    // Creates a HTML element <div>
    this._tooltipContainer = document.createElement("div");

    // Assign the content
    this._tooltipContainer.textContent = this._tooltipText;

    // Appends the created element as a child Node in the DOM
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    // Removes the created element from the DOM
    this.removeChild(this._tooltipContainer);
  }
}

// Registers the Web Component's custom HTML tag named "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
