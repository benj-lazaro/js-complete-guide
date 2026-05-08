// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {}

// Class that manages "ProjectItem" objects
class ProjectList {
  constructor(type) {
    // Store NodeList elements containing Element nodes "li"
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    console.log(projectItems);
  }
}

// Class that manages the app
class App {
  static init() {
    // Instantiate two (2) Class "ProjectList"
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

// Initialize & start the app
App.init();
