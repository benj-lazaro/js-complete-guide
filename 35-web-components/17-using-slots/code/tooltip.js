// Sub-class that holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    // Inherits the properties & methods of the parent Class
    super();

    // Private property that holds the HTML element for the "mouse over" content
    this._tooltipContainer;

    // Private property that holds the default tooltip text
    this._tooltipText = "Default tooltip text.";

    // Opens access to the Shadow DOM
    this.attachShadow({ mode: "open" });

    // Select the HTML element <template>
    const template = document.querySelector("#tooltip-template");

    // Deep clone of the HTML element <template>'s content
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Creates the Web Component & adds it to the DOM
  connectedCallback() {
    // Check if custom attribute "text" is set & override the default tooltip text
    if (this.hasAttribute("text")) {
      // Get the value of the custom attribute "text"
      this._tooltipText = this.getAttribute("text");
    }

    const tooltipIcon = this.shadowRoot.querySelector("span");

    // Event listener for "mouseenter"
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));

    // Event listener for "mouseleave"
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));

    // Append the Web Component's icon (anchor) as a child node on the Shadow DOM
    this.shadowRoot.appendChild(tooltipIcon);

    // Set the Web Component's styling position on the DOM
    this.style.position = "relative";
  }

  // Event handler that renders the tooltip Web Component on the DOM
  _showTooltip() {
    // Creates a HTML element <div>
    this._tooltipContainer = document.createElement("div");

    // Assign the content
    this._tooltipContainer.textContent = this._tooltipText;

    // Style the Web Component's HTML element <div>
    this._tooltipContainer.style.backgroundColor = "black";
    this._tooltipContainer.style.color = "white";
    this._tooltipContainer.style.position = "absolute";
    this._tooltipContainer.style.zIndex = 10;

    // Appends the created element as a child Node on the Shadow DOM
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  // Event handler that removes the tooltip Web Component from the DOM
  _hideTooltip() {
    // Removes the created element from the Shadow DOM
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

// Registers the Web Component's custom HTML tag named "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
