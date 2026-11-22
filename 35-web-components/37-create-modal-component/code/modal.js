class Modal extends HTMLElement {
  constructor() {
    super();

    // Access the Shadow DOM
    this.attachShadow({ mode: "open" });

    // Setup Web Component's Template
    this.shadowRoot.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh; /* Viewport height t*/
          background: rgba(0, 0, 0, 0.75);
        }
      </style>

      <div id="backdrop"></div>
      <div id="modal"></div>
    `;
  }
}

// Register the Web Component
customElements.define("uc-modal", Modal);
