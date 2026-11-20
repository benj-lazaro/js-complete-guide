// Sub-class that holds the Web Component's logic
class Tooltip extends HTMLElement {
  constructor() {
    // Inherits the properties & methods of the parent Class
    super();

    // Private property that holds the default tooltip text
    this._tooltipText = "Default tooltip text.";

    // Private property that holds the Web Component's "anchor" in the DOM
    this._tooltipIcon;

    // Private property that sets the Web Component's visibility in the DOM
    this._tooltipVisible = false;

    // Opens access to the Shadow DOM
    this.attachShadow({ mode: "open" });

    // Define the Template of the Web Component
    this.shadowRoot.innerHTML = `
      <style>
        div {
          font-weight: normal;
          background-color: black;
          color: white;
          position: absolute;
          z-index: 10;
          top: 1.5rem;
          left: 0.75rem;
          padding: 0.15rem;
          border-radius: 3px;
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26)
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
          background-color: var(--primary-color, #ccc);
          padding: 0.15rem;
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

    // Assign the HTML element <span> that holds the Web Component's icon / "anchor" in the DOM
    this._tooltipIcon = this.shadowRoot.querySelector("span");

    // Event listener for "mouseenter"
    this._tooltipIcon.addEventListener(
      "mouseenter",
      this._showTooltip.bind(this),
    );

    // Event listener for "mouseleave"
    this._tooltipIcon.addEventListener(
      "mouseleave",
      this._hideTooltip.bind(this),
    );

    // Set the Web Component's styling position on the DOM
    this.style.position = "relative";
  }

  // Lifecycle hook that watches for changes in the Web Component's attributes
  attributeChangedCallback(name, oldValue, newValue) {
    // Check for any changes in the Web Component's targeted attribute
    if (oldValue === newValue) {
      return;
    }

    // Check if attribute that change is that of the targeted attribute (i.e. "text")
    if (name === "text") {
      this._tooltipText = newValue;
    }
  }

  // Capture changes in the observed attributes of the Web Component
  static get observedAttributes() {
    // Return the updated content of the attribute "text"
    return ["text"];
  }

  // Clean up work after the Web Component removal from the DOM
  disconnectedCallback() {
    // Event Listener cleanup
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
    this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip);

    console.log("Event Listeners cleaned!");
  }

  // Private method that handles the updating of the DOM
  _render() {
    let tooltipContainer = this.shadowRoot.querySelector("div");

    if (this._tooltipVisible) {
      // Renders the Web Component
      tooltipContainer = document.createElement("div");
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      // Check if the variable "tooltipContainer" is defined
      if (tooltipContainer) {
        // Removes the Web Component
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  // Event handlers that sets the Web Component's visibility & rendering / removal
  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  // Event handler that removes the Web Component from the DOM
  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

// Registers the Web Component's custom HTML tag named "uc-tooltip"
customElements.define("uc-tooltip", Tooltip);
