// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.moreInfoButton();
    this.connectSwitchButton();
  }

  // Method that handles the button "More Info" of a "ProjectItem" object
  moreInfoButton() {}

  // Method that triggers the move of a "ProjectItem" object to a different "ProjectList" object
  connectSwitchButton() {
    // Access the corresponding DOM of the Element node "li" attribute "id"
    const projectItemElement = document.getElementById(this.id);

    // Access the Element node "li" button "Finish" or "Activate"
    const switchBtn = projectItemElement.querySelector("button:last-of-type");

    // Attach Event listner for a "click" Event & the corresponding callback function
    switchBtn.addEventListener("click", this.updateProjectListsHandler);
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
        new ProjectItem(projectItem.id, this.switchProject.bind(this)),
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
  addProject() {
    // For now, displays the passed Class "ProjectList" instance
    console.log(this);
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

    // Sets the method & the other Class "ProjectList" instance that
    // Its "ProjectItem" objects can switch to when its corresponding DOM button is clicked
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
