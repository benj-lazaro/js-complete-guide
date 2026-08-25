export class Modal {
  // Constructor method
  constructor(contentId, fallbackText) {
    // Select the HTML element <template> of the "loading spinner"
    this.contentTemplateElement = document.getElementById(contentId);
    // Select the HTML element <template> of the modal container
    this.modalTemplateElement = document.getElementById("modal-template");
    // Fallback text
    this.fallbackText = fallbackText;
  }

  // Method that shows the modal on the DOM
  show() {
    // Check support for HTML element <template>
    if ("content" in document.createElement("template")) {
      // Deep copy the modal container to access it's HTML element <div>
      const modalElements = document.importNode(
        this.modalTemplateElement.content,
        true,
      );

      // Access individual the HTML element <div> stored w/in the constant "modalElements"
      const backdropElement = modalElements.querySelector(".backdrop");
      const modalElement = modalElements.querySelector(".modal");

      // Deep copy the HTML element <template> of the "loading spinner"
      const contentElement = document.importNode(
        this.contentTemplateElement.content,
        true,
      );

      // Append the HTML element <template? of the "loading spinner" into the modal container
      modalElement.appendChild(contentElement);

      // Insert the modal container into (& right after) the HTML element <body> of the HTML document
      document.body.insertAdjacentElement("afterbegin", modalElement);
      document.body.insertAdjacentElement("afterbegin", backdropElement);
    } else {
      // Fallback message for browsers w/ NO support for HTML element <template>
      alert(this.fallbackText);
    }
  }

  // Method that hides the modal from the DOM
  hide() {}
}
