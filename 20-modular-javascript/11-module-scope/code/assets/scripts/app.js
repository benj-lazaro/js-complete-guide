import { ProjectList } from "./App/ProjectList.js";

// Simulate shared data NOT exported w/in a module
globalThis.DEFAULT_VALUE = "MAX";

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
    analyticsScript.src = "assets/scripts/Utility/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

// Initialize & start the app
App.init();
