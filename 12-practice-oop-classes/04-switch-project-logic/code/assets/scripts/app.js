// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {
  constructor(id) {
    this.id = id;
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
    switchBtn.addEventListener("click", null);
  }
}

// Class that manages "ProjectItem" objects
class ProjectList {
  // Stores an array of "ProjectItem" objects
  projects = [];

  constructor(type) {
    // Select ALL HTML elements <li> w/ the matching attribute "id" value
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // Instantiate a "ProjectItem" object for each Element node "li" read
    for (const projectItem of projectItems) {
      this.projects.push(new ProjectItem(projectItem.id));
    }

    console.log(this.projects);
  }

  // Method that adds a "ProjectItem" object to a new instance of the Class "ProjectList"
  addProject() {}

  // Method that switch a "ProjectItem" object to a different instance of the Class "ProjectList"
  switchProject(projectId) {
    // Solution #1
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    // Solution #2
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

// Class that manages the app
class App {
  static init() {
    // Instantiate two (2) "ProjectList" objects
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

// Initialize & start the app
App.init();
