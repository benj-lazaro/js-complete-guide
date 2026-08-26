/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/Modal.js"
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  // Constructor method
  constructor(contentId, fallbackText) {
    // Select the HTML element <template> of the "loading spinner"
    this.contentTemplateElement = document.getElementById(contentId);
    // Select the HTML element <template> of the modal container
    this.modalTemplateElement = document.getElementById("modal-template");
    // Fallback text
    this.fallbackText = fallbackText;
  }

  // Method that shows the modal on the DOM
  show() {
    // Check support for HTML element <template>
    if ("content" in document.createElement("template")) {
      // Deep copy the modal container to access it's HTML element <div>
      const modalElements = document.importNode(this.modalTemplateElement.content, true);
      this.backdropElement = modalElements.querySelector(".backdrop");
      this.modalElement = modalElements.querySelector(".modal");

      // Deep copy the HTML element <template> of the "loading spinner"
      const contentElement = document.importNode(this.contentTemplateElement.content, true);

      // Append the HTML element <template? of the "loading spinner" into the modal container
      this.modalElement.appendChild(contentElement);

      // Insert the modal container into (& right after) the HTML element <body> of the HTML document
      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      // Fallback message for browsers w/ NO support for HTML element <template>
      alert(this.fallbackText);
    }
  }

  // Method that hides the modal from the DOM
  hide() {
    // Check if Modal is active
    if (this.modalElement) {
      // Remove modal elements from the DOM
      document.body.removeChild(this.backdropElement);
      document.body.removeChild(this.modalElement); // this.modelElement.remove()

      // Advise the JavaScript Engine to garbage collect these properties
      this.backdropElement = null;
      this.modalElement = null;
    }
  }
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ "./src/UI/Modal.js");

class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  // Event Handlers
  locateUserHandler() {
    // Check for geolocation API browser support
    if (!navigator.geolocation) {
      alert("Location features is NOT available. Use a modern browser or manually enter an address.");
      return;
    }

    // Create an instance of the Class "Modal"
    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal("loading-modal-content", "Loading location, please wait.");

    // Load the "loading spinner" modal
    modal.show();

    // Get user's current geolocation position
    navigator.geolocation.getCurrentPosition(success => {
      // Hide the "loading spinner" modal
      modal.hide();

      // Get user's current coordinates
      const coordinates = {
        latitude: success.coords.latitude,
        longitude: success.coords.longitude
      };
      console.log(coordinates);
    }, error => {
      // Hide the "loading spinner" modal
      modal.hide();
      alert("Could NOT locate you unfortunately. Please enter an address manually.");
    });
  }
  findAddressHandler() {}
}
const placeFinder = new PlaceFinder();
})();

/******/ })()
;
//# sourceMappingURL=SharePlace.js.map