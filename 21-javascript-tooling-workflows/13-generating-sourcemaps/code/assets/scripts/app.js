/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/ProjectItem.js"
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n// import { Tooltip } from \"./Tooltip.js\";\n\n// Class that represents a project item\nclass ProjectItem {\n  hasActiveTooltip = false;\n\n  constructor(id, updateProjectListsFunction, type) {\n    this.id = id;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  // Method that configures the \"drag\" event of the target \"ProjectItem\" object being dragged\n  connectDrag() {\n    const item = document.getElementById(this.id);\n\n    item.addEventListener(\"dragstart\", (event) => {\n      event.dataTransfer.setData(\"text/plain\", this.id);\n      event.dataTransfer.effectAllowed = \"move\";\n    });\n\n    // Checks if a \"drag\" event is succesfully dropped on a designated \"drop area\"\n    // Looking at the property \"dropEffect\" under \"dataTransfer\"\n    item.addEventListener(\"dragend\", (event) => {\n      console.log(event);\n    });\n  }\n\n  // Method that handles the button \"More Info\" of a \"ProjectItem\" object\n  connectMoreInfoButton() {\n    // Access the corresponding DOM of the Element node \"li\" attribute \"id\"\n    const projectItemElement = document.getElementById(this.id);\n\n    // Access the Element node \"li\" button \"More Info\"\n    const moreInfoBtn = projectItemElement.querySelector(\n      \"button:first-of-type\",\n    );\n\n    // Attach an Event listener for an Event \"click\"\n    // Bind the \"ProjectItem\" object to the Event\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\n  }\n\n  // Methos that handles the mechanism behind a \"ProjectItem\" object's \"More Info\" button\n  showMoreInfoHandler() {\n    // Check if a \"ProjectItem\" object's tooltip is already rendered\n    if (this.hasActiveTooltip) {\n      // Prevents from instantiating the same \"Tooltip\" object\n      return;\n    }\n\n    // Otherwise, instantiate the Class \"Tooltip\"\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n\n    // Dynamically import the Class \"Tooltip\"\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\n      const tooltip = new module.Tooltip(\n        () => {\n          this.hasActiveTooltip = false;\n        },\n        tooltipText,\n        this.id,\n      );\n\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    });\n  }\n\n  // Method that triggers the move of a \"ProjectItem\" object to a different \"ProjectList\" object\n  connectSwitchButton(type) {\n    // Access the corresponding DOM of the Element node \"li\" attribute \"id\"\n    const projectItemElement = document.getElementById(this.id);\n\n    // Access the Element node \"li\" button \"Finish\" or \"Activate\"\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\n\n    // Clear previous Event listener attached to the DOM elements of a \"ProjectItem\" object\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\n\n    // Update the text of the \"ProjectItem\" object's DOM \"button\"\n    switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\n\n    // Attach an Event listner for a \"click\" Event & the corresponding callback function\n    switchBtn.addEventListener(\n      \"click\",\n      this.updateProjectListsHandler.bind(null, this.id),\n    );\n  }\n\n  // Method that updates the callback function of a switched \"ProjectItem\" object\n  update(updateProjectListsFn, type) {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}\n\n\n//# sourceURL=webpack://project-planner/./src/App/ProjectItem.js?\n}");

/***/ },

/***/ "./src/App/ProjectList.js"
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n// import { clearEventListeners, moveElement } from \"../Utility/DOMHelper.js\";\n\n// Bundled exported items, stored as a single object reference by the alias name \"DOMH\"\n\n\n// Class that manages \"ProjectItem\" objects\nclass ProjectList {\n  // Stores an array of \"ProjectItem\" objects\n  projects = [];\n\n  constructor(type) {\n    // Identifies the Class \"ProjectList\" instance that a created \"ProjectItem\" object belongs to\n    this.type = type;\n\n    // Select ALL HTML elements <li> w/ the matching attribute \"id\" value\n    const projectItems = document.querySelectorAll(`#${type}-projects li`);\n\n    // Instantiate a \"ProjectItem\" object for each Element node \"li\" read\n    for (const projectItem of projectItems) {\n      this.projects.push(\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(projectItem.id, this.switchProject.bind(this), this.type),\n      );\n    }\n\n    console.log(this.projects);\n\n    this.connectDroppable();\n  }\n\n  // Method that sets the \"drop area\" that receives draggable \"ProjectItem\" objects\n  connectDroppable() {\n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener(\"dragenter\", (event) => {\n      if (event.dataTransfer.types[0] === \"text/plain\") {\n        // Enable background color change\n        list.parentElement.classList.add(\"droppable\");\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener(\"dragover\", (event) => {\n      if (event.dataTransfer.types[0] === \"text/plain\") {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener(\"dragleave\", (event) => {\n      // IMPORTANT: To address strange behavior in Firefox\n      // Check if \"ProjectItem\" object has been dragged from its \"ProjectList\"\n      if (\n        event.relatedTarget.closest &&\n        event.relatedTarget.closest(`#${this.type}-projects ul`) !== list\n      ) {\n        // Disable background color change\n        list.parentElement.classList.remove(\"droppable\");\n      }\n    });\n\n    list.addEventListener(\"drop\", (event) => {\n      // IMPORTANT: To address strange behavior in Firefox\n      event.preventDefault();\n\n      // Extract data from the \"Event\" object set by \"ProjectItem\" method \"connectDrag()\"\n      const prjId = event.dataTransfer.getData(\"text/plain\");\n\n      // Check if the dragged \"ProjectItem\" object already exists in the dropped \"ProjectList\"\n      if (this.projects.find((p) => p.id === prjId)) {\n        // If it does, do NOTHING\n        return;\n      }\n\n      // Otherwise, simulate a click on the \"ProjectItem\" object's \"Finish\" or \"Activate\" button\n      document\n        .getElementById(prjId)\n        .querySelector(\"button:last-of-type\")\n        .click();\n\n      list.parentElement.classList.remove(\"droppable\");\n      // event.preventDefault(); // NOT required but useful on specific use case, see notes\n    });\n  }\n\n  // Method that sets the Class \"ProjectList\" instance & method that\n  // A \"ProjectItem\" object switches to\n  setSwitchHandler(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  // Method that receives a \"ProjectItem\" object & then adds it to the other\n  // Instance of the Class \"ProjectList\"\n  addProject(project) {\n    // Add passed \"ProjectItem\" object to the Class field \"projects\" of the other\n    // Class \"ProjectList\" instance\n    this.projects.push(project);\n\n    // Move the corresponding DOM elements of the \"ProjectItem\" object to the\n    // New element node \"ul\" identified by its HTML attribute \"id\"\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement(project.id, `#${this.type}-projects ul`);\n\n    // Update the \"ProjectItem\" object's switch handler after moving its DOM elements\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  // Method that switches a \"ProjectItem\" object to another Class \"ProjectList\" instance\n  switchProject(projectId) {\n    // Find the matching \"ProjectItem\" object from its current \"ProjectList\" instance\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\n\n    // Solution #1\n    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n\n    // Solution #2\n    // Remove the matching \"ProjectItem\" object from its current \"ProjectList\" instance\n    this.projects = this.projects.filter((p) => p.id !== projectId);\n  }\n}\n\n\n//# sourceURL=webpack://project-planner/./src/App/ProjectList.js?\n}");

/***/ },

/***/ "./src/Utility/DOMHelper.js"
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper),\n/* harmony export */   clearEventListeners: () => (/* binding */ clearEventListeners),\n/* harmony export */   moveElement: () => (/* binding */ moveElement)\n/* harmony export */ });\n// Class that handles the switching of a \"ProjectItem\" object's DOM elements\nclass DOMHelper {\n  // Static method that clears previous Event listener attached to a \"ProjectItem\" object\n  static clearEventListeners(element) {\n    // Create a deep clone of the current Element node \"li\" of a \"ProjectItem\" object\n    const clonedElement = element.cloneNode(true);\n\n    // Replace original ELement node \"li\" w/ its deep clone\n    element.replaceWith(clonedElement);\n\n    // Return a cleaned Element node \"li\" of a \"ProjecItem\" object\n    return clonedElement;\n  }\n\n  // Static method that moves a \"ProjectItem\" object's DOM elements\n  static moveElement(elementId, newDestinationSelector) {\n    // Fetch the current Element node \"li\" of a \"ProjectItem\" object based on its property \"id\"\n    const element = document.getElementById(elementId);\n\n    // Fetch the Element node \"ul\" that a \"ProjectItem\" object's DOM will switch to\n    const destinationElement = document.querySelector(newDestinationSelector);\n\n    // Move a \"ProjectItem\" object's DOM elements to the new Element node \"ul\"\n    destinationElement.append(element);\n\n    // Smoothly scrolls a \"ProjectItem\" object (that switched over) into view\n    element.scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\n// Exported functions\nfunction clearEventListeners(element) {\n  const clonedElement = element.cloneNode(true);\n\n  element.replaceWith(clonedElement);\n  return clonedElement;\n}\n\nfunction moveElement(elementId, newDestinationSelector) {\n  const element = document.getElementById(elementId);\n  const destinationElement = document.querySelector(newDestinationSelector);\n\n  destinationElement.append(element);\n  element.scrollIntoView({ behavior: \"smooth\" });\n}\n\n\n//# sourceURL=webpack://project-planner/./src/Utility/DOMHelper.js?\n}");

/***/ },

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n\n// Class that manages the app\nclass App {\n  static init() {\n    // Instantiate two (2) \"ProjectList\" objects\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n\n    // Sets the method & the other Class \"ProjectList\" instance that it's own\n    // \"ProjectItem\" object will switch to after the object's DOM button is clicked\n    activeProjectsList.setSwitchHandler(\n      finishedProjectsList.addProject.bind(finishedProjectsList),\n    );\n\n    finishedProjectsList.setSwitchHandler(\n      activeProjectsList.addProject.bind(activeProjectsList),\n    );\n\n    // Implicitly starts the mock-up analytics after a 3000ms delay\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // Hookup an Event listener that halts the \"setTimeout\" PRIOR to execution\n    // document\n    //   .getElementById(\"stop-analytics-btn\")\n    //   .addEventListener(\"click\", () => {\n    //     clearTimeout(timerId);\n    //   });\n  }\n\n  // Static method that dynamically loads the analytics script\n  static startAnalytics() {\n    const analyticsScript = document.createElement(\"script\");\n    analyticsScript.src = \"assets/scripts/Utility/analytics.js\";\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\n// Initialize & start the app\nApp.init();\n\n\n//# sourceURL=webpack://project-planner/./src/app.js?\n}");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		const inProgress = {};
/******/ 		const dataWebpackPrefix = "project-planner:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			let script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					const s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			const onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				const doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode?.removeChild(script);
/******/ 				doneFns?.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		// skipped when the property is non-configurable (pre-ES2015 engines),
/******/ 		// where Object.defineProperty would throw
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			var descriptor = Object.getOwnPropertyDescriptor(x, "name");
/******/ 			if (!descriptor || (!descriptor.writable && descriptor.configurable)) Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "assets/scripts/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							const url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							const error = new Error();
/******/ 							const loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										const errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										const realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										error.event = event;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkproject_planner"] = self["webpackChunkproject_planner"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;