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

/***/ "./src/check_complete.js":
/*!*******************************!*\
  !*** ./src/check_complete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkComplete)\n/* harmony export */ });\nfunction checkComplete(arr) {\n  const checkboxes = document.querySelectorAll('.checkbox');\n  for (let i = 0; i < arr.length; i += 1) {\n    arr[i].completed = checkboxes[i].checked;\n  }\n  localStorage.setItem('toDoList', JSON.stringify(arr));\n}\n\n//# sourceURL=webpack://to-do-list-2/./src/check_complete.js?");

/***/ }),

/***/ "./src/gen_html.js":
/*!*************************!*\
  !*** ./src/gen_html.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ genHTML)\n/* harmony export */ });\n/* harmony import */ var _check_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_complete */ \"./src/check_complete.js\");\n\n\nfunction genHTML(list, arr) {\n  for (let i = 0; i < arr.length; i += 1) {\n    const item = document.createElement('li');\n    const descCont = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const desc = document.createElement('label');\n    const itemIcon = document.createElement('i');\n    descCont.classList.add('description-container');\n    checkbox.type = 'checkbox';\n    checkbox.addEventListener('change', () => {\n      (0,_check_complete__WEBPACK_IMPORTED_MODULE_0__.default)(arr);\n    });\n    checkbox.id = `checkbox-${i}`;\n    checkbox.classList.add('checkbox');\n    checkbox.checked = arr[i].completed;\n    desc.htmlFor = `checkbox-${i}`;\n    desc.innerHTML = arr[i].description;\n    if (checkbox.checked) {\n      desc.classList.add('done');\n    }\n    itemIcon.classList.add('fas', 'fa-ellipsis-v', 'item-icon');\n\n    descCont.appendChild(checkbox);\n    descCont.appendChild(desc);\n\n    item.appendChild(descCont);\n    item.appendChild(itemIcon);\n\n    list.appendChild(item);\n  }\n}\n\n//# sourceURL=webpack://to-do-list-2/./src/gen_html.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gen_html.js");
/******/ 	
/******/ })()
;