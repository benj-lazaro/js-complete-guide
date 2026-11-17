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

    // Define the Template of the Web Component
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: black;
          color: white;
          position: absolute;
          z-index: 10;
        }

        /* Internal styling of element(s) w/in the Template */
        .icon {
          background-color: black;
          color: white;
          padding: 0.18rem 0.2rem;
          text-align:center;
          border-radius: 50%;
        }

        /* Internal conditional styling of the Web Component as a whole */
        :host(.important) {
          background-color: #ccc;
        }

        /* Internal styling of host context */
        :host-context(p) {
          font-weight: bold;
        }
                 
        /* Internal styling of slotted content */
        ::slotted(.highlight) {
          border-bottom: 1px dotted red; /* Overridden by an identical property defined in the DOM */
        }
      </style>

      <slot>Some default</slot> 
      <span class="icon" >(?)</span>
    `;
  }

  // Creates the Web Component & adds it to the DOM
  connectedCallback() {
    // Check for the presence of the Web Component's custom attribute "text"
    if (this.hasAttribute("text")) {
      // Override the default value stored in the private property "_tooltipText"
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

  // Event handler that renders the Web Component on the DOM
  _showTooltip() {
    // Creates a HTML element <div>
    this._tooltipContainer = document.createElement("div");

    // Assign the content
    this._tooltipContainer.textContent = this._tooltipText;

    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  // Event handler that removes the Web Component from the DOM
  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

// Registers the Web Component's custom HTML tag named "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
