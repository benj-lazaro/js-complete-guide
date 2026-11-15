// Class that extends the existing HTML element <a>
class ConfirmLink extends HTMLAnchorElement {
  // Creates the Web Component
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Proceed to open a new tab for this site ?")) {
        event.preventDefault();
      }
    });
  }
}

// Register the Web Component specifically for the HTML element <a>
customElements.define("uc-confirm-link", ConfirmLink, { extends: "a" });
