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

    // Smoothly scrolls a "ProjectItem" object (that switched over) into view
    element.scrollIntoView({ behavior: "smooth" });
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
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
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

    // Fetch the HTML element <template> & its content
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);

    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    // Fetch the position information of the clicked "More Info" button
    // console.log(this.hostElement.getBoundingClientRect());

    // Fetch the host element's leftmost, topmost positions, height & parent element scroll down
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;
    // console.log(hostElPosLeft, hostElPosTop, hostElHeight, parentElementScrolling);

    // Position the tooltip content
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    // Mimics assigning values to CSS Selectors
    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    // Add Event listener to close a tooltip content
    tooltipElement.addEventListener("click", this.closeTooltip);

    // Dynamically creates a Class property & store Element node to be attached to the DOM
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

    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id,
    );

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

    this.connectDroppable();
  }

  // Method that sets the "drop area" that receives draggable "ProjectItem" objects
  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        // Enable background color change
        list.parentElement.classList.add("droppable");
        event.preventDefault();
      }
    });

    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });

    list.addEventListener("dragleave", (event) => {
      // Check if "ProjectItem" object has been dragged from its "ProjectList"
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        // Disable background color change
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      // Extract data from the "Event" object set by "ProjectItem" method "connectDrag()"
      const prjId = event.dataTransfer.getData("text/plain");

      // Check if the dragged "ProjectItem" object already exists in the dropped "ProjectList"
      if (this.projects.find((p) => p.id === prjId)) {
        // If it does, do NOTHING
        return;
      }

      // Otherwise, simulate a click on the "ProjectItem" object's "Finish" or "Activate" button
      document
        .getElementById(prjId)
        .querySelector("button:last-of-type")
        .click();

      list.parentElement.classList.remove("droppable");
      // event.preventDefault(); // NOT required but useful on specific use case, see notes
    });
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

    // Implicitly starts the mock-up analytics after a 3000ms delay
    // const timerId = setTimeout(this.startAnalytics, 3000);

    // Hookup an Event listener that halts the "setTimeout" PRIOR to execution
    // document
    //   .getElementById("stop-analytics-btn")
    //   .addEventListener("click", () => {
    //     clearTimeout(timerId);
    //   });
  }

  // Static method that dynamically loads the analytics script
  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

// Initialize & start the app
App.init();
