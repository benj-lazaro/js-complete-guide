class InfoToggle extends HTMLElement {
  constructor() {
    super();

    // Private property that states the current visibility of the HTML element <p>
    this._isVisible = false;

    // Access the Shadow DOM
    this.attachShadow({ mode: "open" });

    // Define the Template & Slot in the Shadow DOM
    this.shadowRoot.innerHTML = `
    <style>
      #info-box {
        display: none;
      }
    </style>

    <button>Show</button>
    <p id="info-box"><slot>Default paragraph content</slot></p>
    `;

    // Select the HTML Elements from the Shadow DOM
    this._toggleButton = this.shadowRoot.querySelector("button");
    this._infoBox = this.shadowRoot.querySelector("#info-box");

    // Chain an Event Listener
    this._toggleButton.addEventListener(
      "click",
      this._toggleInfoBox.bind(this),
    );
  }

  // Private Event Handler that toggles the HTML elements <button> & <p>
  _toggleInfoBox() {
    // Invert the current value of the private property "_isVisible"
    this._isVisible = !this._isVisible;

    // Toggle visibility of the HTML element <p> & textContent of the HTML element <button>
    this._infoBox.style.display = this._isVisible ? "block" : "none";
    this._toggleButton.textContent = this._isVisible ? "Hide" : "Show";
  }

  // Connect to the DOM
  connectedCallback() {
    // Check the Web Component's custom attribute "is-visible"
    if (this.hasAttribute("is-visible")) {
      // Fetch & check value of the attribute "is-visible"
      // Apply changes
      if (this.getAttribute("is-visible") === "true") {
        this._isVisible = true;
        this._infoBox.style.display = "block";
        this._toggleButton.textContent = "Hide";
      }
    }
  }
}

// Register the Web Component's custom HTML tag
customElements.define("uc-info-toggle", InfoToggle);
