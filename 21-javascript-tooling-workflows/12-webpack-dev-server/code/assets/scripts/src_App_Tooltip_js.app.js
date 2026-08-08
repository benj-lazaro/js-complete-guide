"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_planner"] = self["webpackChunkproject_planner"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Component.js"
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   doSomething: () => (/* binding */ doSomething)\n/* harmony export */ });\n// Test function exported as a named item\nfunction doSomething() {}\n\n// Class that handles the dynamic insertion & deletion of an Element node in the DOM\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n  }\n\n  // Method that removes a \"ProjectItem\" object's tooltip from the DOM\n  detach() {\n    if (this.element) {\n      // Removes an Element node from the DOM\n      this.element.remove();\n    }\n  }\n\n  // Method that inserts an Element node at a specified location on the DOM\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element,\n    );\n  }\n});\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n\n\n//# sourceURL=webpack://project-planner/./src/App/Component.js?\n}");

/***/ },

/***/ "./src/App/Tooltip.js"
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tooltip: () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n// Import the Class Component (as default) & a named export item as JavaScript modules\n\n\n// Sub-Class that handles the button \"More Info\" of a \"ProjectItem\" object\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.create();\n  }\n\n  // Method that closes a \"ProjectItem\" object's tooltip & resets it to \"false\"\n  closeTooltip = () => {\n    this.detach();\n    this.closeNotifier();\n  };\n\n  // Method that renders a \"ProjectItem\" object's tooltip on the DOM\n  create() {\n    // Create an Element node \"div\" that contains a tooltip\n    const tooltipElement = document.createElement(\"div\");\n    tooltipElement.className = \"card\";\n\n    // Fetch the HTML element <template> & its content\n    const tooltipTemplate = document.getElementById(\"tooltip\");\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n\n    tooltipBody.querySelector(\"p\").textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    // Fetch the position information of the clicked \"More Info\" button\n    // console.log(this.hostElement.getBoundingClientRect());\n\n    // Fetch the host element's leftmost, topmost positions, height & parent element scroll down\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n    // console.log(hostElPosLeft, hostElPosTop, hostElHeight, parentElementScrolling);\n\n    // Position the tooltip content\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    // Mimics assigning values to CSS Selectors\n    tooltipElement.style.position = \"absolute\";\n    tooltipElement.style.left = x + \"px\";\n    tooltipElement.style.top = y + \"px\";\n\n    // Add Event listener to close a tooltip content\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\n\n    // Dynamically creates a Class property & store Element node to be attached to the DOM\n    this.element = tooltipElement;\n  }\n}\n\n\n//# sourceURL=webpack://project-planner/./src/App/Tooltip.js?\n}");

/***/ }

}]);