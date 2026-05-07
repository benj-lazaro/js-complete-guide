// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  // Method that handles the "More Info" button
  connectMoreInfoButton() {}

  // Method that handles the Event listener that triggers the switch between projects
  connectSwitchButton() {
    // Retrieve the Element node "li" based on its attribute "id"
    const projectItemElement = document.getElementById(this.id);

    // Retrieve the last Element node "button" from the local constant "projectItemElement"
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click", this.updateProjectListsHandler);
  }
}

// Class that handles multiple instances of "ProjectItem" objects
class ProjectList {
  // Stores "ProjectItem" objects
  projects = [];

  constructor(type) {
    this.type = type;

    // Selects ALL Element nodes <li> based on the Parent node <section> attribute "id"
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // Iterate through every element in the NodeList & instantiate a new "ProjectItem" object
    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(projectItem.id, this.switchProject.bind(this)),
      );
    }
  }

  // Method that sets the corresponding callback function of a "ProjectItem" object
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // Method that adds an entry to the Class field "projects"
  addProject() {
    console.log(this);
  }

  // Method that removes an entry from Class field "projects"
  switchProject(projectId) {
    // Set the callback function of the matching "ProjectItem" object
    this.switchHandler(this.projects.find((p) => p.id === projectId));

    // Remove the matching "ProjectItem" object; replace existing array w/ a new one
    this.projects = this.projects.filter((p) => p.id !== this.id);
  }
}

// Class that manages the app
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    // Set the corresponding callback function of each "ProjectItem" object
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList),
    );

    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList),
    );
  }
}

App.init();
