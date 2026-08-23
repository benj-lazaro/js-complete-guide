/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", locateUserBtn);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  // Event Handler Methods
  locateUserHandler() {
    console.log("Clicked located button");
  }
  findAddressHandler() {}
}
/******/ })()
;
//# sourceMappingURL=SharePlace.js.map