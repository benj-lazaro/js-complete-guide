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

  // Method that sets the callback function of a "ProjectItem" object
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // Method that adds a "ProjectItem" object to a new instance of the Class "ProjectList"
  addProject() {
    console.log(this);
  }

  // Method that switches a "ProjectItem" object to a different instance of the Class "ProjectList"
  switchProject(projectId) {
    // Find matching "ProjectItem" object
    this.switchHandler(this.projects.find((p) => p.id === projectId));

    // Solution #1
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    // Solution #2
    // Removes the matching "ProjectItem" object from the Class "ProjectList" instance it initially belongs to
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

// Class that manages the app
class App {
  static init() {
    // Instantiate two (2) "ProjectList" objects
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    // Set the opposite Class "ProjectList" instance where a "ProjectItem" object can switch to
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList),
    );

    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList),
    );
  }
}

// Initialize & start the app
App.init();
