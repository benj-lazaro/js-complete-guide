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
      // IMPORTANT: To address strange behavior in Firefox
      // Check if "ProjectItem" object has been dragged from its "ProjectList"
      if (
        event.relatedTarget.closest &&
        event.relatedTarget.closest(`#${this.type}-projects ul`) !== list
      ) {
        // Disable background color change
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      // IMPORTANT: To address strange behavior in Firefox
      event.preventDefault();

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
