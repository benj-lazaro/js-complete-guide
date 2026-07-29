// Class that handles the dynamic insertion & deletion of an Element node in the DOM
export class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
  }

  // Method that removes a "ProjectItem" object's tooltip from the DOM
  detach() {
    if (this.element) {
      // Removes an Element node from the DOM
      this.element.remove();
    }
  }

  // Method that inserts an Element node at a specified location on the DOM
  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element,
    );
  }
}
