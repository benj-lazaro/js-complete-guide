"use strict";
(self["webpackChunkproject_planner"] = self["webpackChunkproject_planner"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Component.js"
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   doSomething: () => (/* binding */ doSomething)
/* harmony export */ });
// Test function exported as a named item
function doSomething() {}

// Class that handles the dynamic insertion & deletion of an Element node in the DOM
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
  }

  // Method that removes a "ProjectItem" object's tooltip from the DOM
  detach() {
    if (this.element) {
      // Removes an Element node from the DOM
      this.element.remove();
    }
  }

  // Method that inserts an Element node at a specified location on the DOM
  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element,
    );
  }
});
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);


/***/ },

/***/ "./src/App/Tooltip.js"
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/App/Component.js");
// Import the Class Component (as default) & a named export item as JavaScript modules


// Sub-Class that handles the button "More Info" of a "ProjectItem" object
class Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  // Method that closes a "ProjectItem" object's tooltip & resets it to "false"
  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  // Method that renders a "ProjectItem" object's tooltip on the DOM
  create() {
    // Create an Element node "div" that contains a tooltip
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";

    // Fetch the HTML element <template> & its content
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);

    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    // Fetch the position information of the clicked "More Info" button
    // console.log(this.hostElement.getBoundingClientRect());

    // Fetch the host element's leftmost, topmost positions, height & parent element scroll down
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;
    // console.log(hostElPosLeft, hostElPosTop, hostElHeight, parentElementScrolling);

    // Position the tooltip content
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    // Mimics assigning values to CSS Selectors
    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    // Add Event listener to close a tooltip content
    tooltipElement.addEventListener("click", this.closeTooltip);

    // Dynamically creates a Class property & store Element node to be attached to the DOM
    this.element = tooltipElement;
  }
}


/***/ }

}]);
//# sourceMappingURL=src_App_Tooltip_js.app.js.map