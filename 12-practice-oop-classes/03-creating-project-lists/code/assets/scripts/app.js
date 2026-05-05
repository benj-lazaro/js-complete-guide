// Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip {}

// Class that represents a project item
class ProjectItem {}

// Class that handles multiple instances of "ProjectItem" objects
class ProjectList {
  // Fetch ALL HTML elements <li> based on the attribute "id" of their parent element <section>
  constructor(type) {
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(projectItems);
  }
}

// Class that manages the app overall
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

App.init();
