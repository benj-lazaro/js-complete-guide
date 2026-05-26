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

// Class that handles the dynamic insertion & deletion of an Element node in the DOM
class Component {
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

// Sub-Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip extends Component {
  constructor(closeNotifierFunction, text) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  // Method that closes a "ProjectItem" object's tooltip & resets it to "false"
  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  // Method that renders a "ProjectItem" object's tooltip on the DOM
  create() {
    // Create an Element node "div" that contains a tooltip
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    tooltipElement.textContent = this.text;
    tooltipElement.addEventListener("click", this.closeTooltip);

    // Dynamically createsa Class property & store Element node to be attached to the DOM
    this.element = tooltipElement;
  }
}

// Class that represents a project item
class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
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
    // Check if a "ProjectItem" object's tooltip had been rendered
    if (this.hasActiveTooltip) {
      return;
    }

    // Access the Element node "li" of a "ProjectItem" object
    const projectElement = document.getElementById(this.id);

    // Access the text value of the attribute "data-extra-info"
    const tooltipText = projectElement.dataset.extraInfo;

    // Otherwise, instantiate the Class "Tooltip"
    const tooltip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    }, tooltipText);

    tooltip.attach();

    this.hasActiveTooltip = true;
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
