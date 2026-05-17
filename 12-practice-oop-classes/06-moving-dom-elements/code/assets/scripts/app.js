// Class that handles the switching of a "ProjectItem" object's DOM elements
class DOMHelper {
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
  }
}

// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {
  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.moreInfoButton();
    this.connectSwitchButton(type);
  }

  // Method that handles the button "More Info" of a "ProjectItem" object
  moreInfoButton() {}

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

// Class that manages "ProjectItem" objects
class ProjectList {
  // Stores an array of "ProjectItem" objects
  projects = [];

  constructor(type) {
    // Identifies the Class "ProjectList" instance that a created "ProjectItem" object belongs to
    this.type = type;

    // Select ALL HTML elements <li> w/ the matching attribute "id" value
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // Instantiate a "ProjectItem" object for each Element node "li" read
    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(
          projectItem.id,
          this.switchProject.bind(this),
          this.type,
        ),
      );
    }

    console.log(this.projects);
  }

  // Method that sets the Class "ProjectList" instance & method that
  // A "ProjectItem" object switches to
  setSwitchHandler(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // Method that receives a "ProjectItem" object & then adds it to the other
  // Instance of the Class "ProjectList"
  addProject(project) {
    // Add passed "ProjectItem" object to the Class field "projects" of the other
    // Class "ProjectList" instance
    this.projects.push(project);

    // Move the corresponding DOM elements of the "ProjectItem" object to the
    // New element node "ul" identified by its HTML attribute "id"
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);

    // Update the "ProjectItem" object's switch handler after moving its DOM elements
    project.update(this.switchProject.bind(this), this.type);
  }

  // Method that switches a "ProjectItem" object to another Class "ProjectList" instance
  switchProject(projectId) {
    // Find the matching "ProjectItem" object from its current "ProjectList" instance
    this.switchHandler(this.projects.find((p) => p.id === projectId));

    // Solution #1
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    // Solution #2
    // Remove the matching "ProjectItem" object from its current "ProjectList" instance
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

// Class that manages the app
class App {
  static init() {
    // Instantiate two (2) "ProjectList" objects
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    // Sets the method & the other Class "ProjectList" instance that it's own
    // "ProjectItem" object will switch to after the object's DOM button is clicked
    activeProjectsList.setSwitchHandler(
      finishedProjectsList.addProject.bind(finishedProjectsList),
    );

    finishedProjectsList.setSwitchHandler(
      activeProjectsList.addProject.bind(activeProjectsList),
    );
  }
}

// Initialize & start the app
App.init();
