// Testing how many times this line of code gets executed (after being imported)
console.log("DOM Helper executing.");

// Class that handles the switching of a "ProjectItem" object's DOM elements
export class DOMHelper {
  // Static method that clears previous Event listener attached to a "ProjectItem" object
  static clearEventListeners(element) {
    // Create a deep clone of the current Element node "li" of a "ProjectItem" object
    const clonedElement = element.cloneNode(true);

    // Replace original ELement node "li" w/ its deep clone
    element.replaceWith(clonedElement);

    // Return a cleaned Element node "li" of a "ProjecItem" object
    return clonedElement;
  }

  // Static method that moves a "ProjectItem" object's DOM elements
  static moveElement(elementId, newDestinationSelector) {
    // Fetch the current Element node "li" of a "ProjectItem" object based on its property "id"
    const element = document.getElementById(elementId);

    // Fetch the Element node "ul" that a "ProjectItem" object's DOM will switch to
    const destinationElement = document.querySelector(newDestinationSelector);

    // Move a "ProjectItem" object's DOM elements to the new Element node "ul"
    destinationElement.append(element);

    // Smoothly scrolls a "ProjectItem" object (that switched over) into view
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Exported functions
export function clearEventListeners(element) {
  const clonedElement = element.cloneNode(true);

  element.replaceWith(clonedElement);
  return clonedElement;
}

export function moveElement(elementId, newDestinationSelector) {
  const element = document.getElementById(elementId);
  const destinationElement = document.querySelector(newDestinationSelector);

  destinationElement.append(element);
  element.scrollIntoView({ behavior: "smooth" });
}
