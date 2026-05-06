// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {
  constructor(id) {
    this.id = id;
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
    switchBtn.addEventListener("click");
  }
}

// Class that handles multiple instances of "ProjectItem" objects
class ProjectList {
  // Stores "ProjectItem" objects
  projects = [];

  constructor(type) {
    // Select ALL Element node <li> based on the Parent node <section> attribute "id"
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // Iterate through every element in the NodeList & instantiate a new "ProjectItem" object
    for (const projectItem of projectItems) {
      this.projects.push(new ProjectItem(projectItem.id));
    }
  }

  // Method that adds an entry to the Class field "projects"
  addProject() {}

  // Method that removes an entry from Class field "projects"
  switchProject(projectId) {
    // Option #1 approach
    // const projectIndex = this.projects.findIndex(
    //   (p) => p.id === this.projectId,
    // );
    // this.projects.splice(projectIndex, 1);

    // Option #2
    this.project = this.project.filter((p) => p.id !== this.id);
  }
}

// Class that manages the app
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

App.init();
