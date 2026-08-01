import { DOMHelper } from "../Utility/DOMHelper.js";
// import { Tooltip } from "./Tooltip.js";

// Testing how many times this line of code gets executed (after being imported)
console.log("Project item created.");

// Class that represents a project item
export class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  // Method that configures the "drag" event of the target "ProjectItem" object being dragged
  connectDrag() {
    const item = document.getElementById(this.id);

    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });

    // Checks if a "drag" event is succesfully dropped on a designated "drop area"
    // Looking at the property "dropEffect" under "dataTransfer"
    item.addEventListener("dragend", (event) => {
      console.log(event);
    });
  }

  // Method that handles the button "More Info" of a "ProjectItem" object
  connectMoreInfoButton() {
    // Access the corresponding DOM of the Element node "li" attribute "id"
    const projectItemElement = document.getElementById(this.id);

    // Access the Element node "li" button "More Info"
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type",
    );

    // Attach an Event listener for an Event "click"
    // Bind the "ProjectItem" object to the Event
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  // Methos that handles the mechanism behind a "ProjectItem" object's "More Info" button
  showMoreInfoHandler() {
    // Check if a "ProjectItem" object's tooltip is already rendered
    if (this.hasActiveTooltip) {
      // Prevents from instantiating the same "Tooltip" object
      return;
    }

    // Otherwise, instantiate the Class "Tooltip"
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;

    // Dynamically import the Class "Tooltip"
    import("./Tooltip.js").then((module) => {
      const tooltip = new module.Tooltip(
        () => {
          this.hasActiveTooltip = false;
        },
        tooltipText,
        this.id,
      );

      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  // Method that triggers the move of a "ProjectItem" object to a different "ProjectList" object
  connectSwitchButton(type) {
    // Access the corresponding DOM of the Element node "li" attribute "id"
    const projectItemElement = document.getElementById(this.id);

    // Access the Element node "li" button "Finish" or "Activate"
    let switchBtn = projectItemElement.querySelector("button:last-of-type");

    // Clear previous Event listener attached to the DOM elements of a "ProjectItem" object
    switchBtn = DOMHelper.clearEventListeners(switchBtn);

    // Update the text of the "ProjectItem" object's DOM "button"
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";

    // Attach an Event listner for a "click" Event & the corresponding callback function
    switchBtn.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id),
    );
  }

  // Method that updates the callback function of a switched "ProjectItem" object
  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}
