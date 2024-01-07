(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable camelcase */
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */

const electronHandler = {
    ipcRenderer: {
        sendMessage(channel, ...args) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(channel, args);
        },
        on: (channel, func) => {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, func);
        },
        off: (channel, func) => {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.off(channel, func);
        },
        removeAllListeners: (channel) => {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.removeAllListeners(channel);
        },
        listenerCount: (channel) => {
            return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.listenerCount(channel);
        },
        once: (channel, func) => {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.once(channel, func);
        },
        invoke: async (channel, ...args) => {
            return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(channel, args);
        },
    },
};
electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electron', electronHandler);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLDhCQUE4QjtBQUM5QixpREFBaUQ7QUFDakQsZ0NBQWdDO0FBQ3dDO0FBK0N4RSxNQUFNLGVBQWUsR0FBb0I7SUFDdkMsV0FBVyxFQUFFO1FBQ1gsV0FBVyxDQUFDLE9BQWlCLEVBQUUsR0FBRyxJQUFlO1lBQy9DLGlEQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsRUFBRSxFQUFFLENBQ0YsT0FBVSxFQUNWLElBR1MsRUFDVCxFQUFFO1lBQ0YsaURBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxHQUFHLEVBQUUsQ0FDSCxPQUFVLEVBQ1YsSUFHUyxFQUNULEVBQUU7WUFDRixpREFBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELGtCQUFrQixFQUFFLENBQXVDLE9BQVUsRUFBRSxFQUFFO1lBQ3ZFLGlEQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELGFBQWEsRUFBRSxDQUNiLE9BQVUsRUFDRixFQUFFO1lBQ1YsT0FBTyxpREFBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsSUFBSSxFQUFFLENBQ0osT0FBVSxFQUNWLElBR1MsRUFDVCxFQUFFO1lBQ0YsaURBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2pDLE9BQU8saURBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDRjtDQUNGLENBQUM7QUFFRixtREFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9wcmVsb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4vLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIElwY1JlbmRlcmVyRXZlbnQgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBJUENNZXRob2RzIH0gZnJvbSAnLi4vc2hhcmVkL0lQQy90eXBlcy9jbGllbnRUb1NlcnZlcic7XG5pbXBvcnQgeyBJUENfUHVzaE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9JUEMvdHlwZXMvc2VydmVyVG9DbGllbnQnO1xuXG50eXBlIENoYW5uZWxzID0ga2V5b2YgSVBDTWV0aG9kcztcblxuZXhwb3J0IGludGVyZmFjZSBFbGVjdHJvbkhhbmRsZXIge1xuICBpcGNSZW5kZXJlcjoge1xuICAgIHNlbmRNZXNzYWdlKGNoYW5uZWw6IENoYW5uZWxzLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkO1xuXG4gICAgb246IDxUIGV4dGVuZHMga2V5b2YgSVBDX1B1c2hOb3RpZmljYXRpb24+KFxuICAgICAgY2hhbm5lbDogVCxcbiAgICAgIGZ1bmM6IChcbiAgICAgICAgX2V2ZW50OiBJcGNSZW5kZXJlckV2ZW50LFxuICAgICAgICBhcmdzOiBJUENfUHVzaE5vdGlmaWNhdGlvbltUXVsncGF5bG9hZCddLFxuICAgICAgKSA9PiB2b2lkLFxuICAgICkgPT4gdm9pZDtcblxuICAgIG9mZjogPFQgZXh0ZW5kcyBrZXlvZiBJUENfUHVzaE5vdGlmaWNhdGlvbj4oXG4gICAgICBjaGFubmVsOiBULFxuICAgICAgZnVuYzogKFxuICAgICAgICBfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsXG4gICAgICAgIGFyZ3M6IElQQ19QdXNoTm90aWZpY2F0aW9uW1RdWydwYXlsb2FkJ10sXG4gICAgICApID0+IHZvaWQsXG4gICAgKSA9PiB2b2lkO1xuXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiA8VCBleHRlbmRzIGtleW9mIElQQ19QdXNoTm90aWZpY2F0aW9uPihcbiAgICAgIGNoYW5uZWw6IFQsXG4gICAgKSA9PiB2b2lkO1xuXG4gICAgb25jZTogPFQgZXh0ZW5kcyBrZXlvZiBJUENfUHVzaE5vdGlmaWNhdGlvbj4oXG4gICAgICBjaGFubmVsOiBULFxuICAgICAgZnVuYzogKFxuICAgICAgICBfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsXG4gICAgICAgIGFyZ3M6IElQQ19QdXNoTm90aWZpY2F0aW9uW1RdWydwYXlsb2FkJ10sXG4gICAgICApID0+IHZvaWQsXG4gICAgKSA9PiB2b2lkO1xuXG4gICAgaW52b2tlOiA8VCBleHRlbmRzIENoYW5uZWxzPihcbiAgICAgIGNoYW5uZWw6IFQsXG4gICAgICBhcmdzOiBJUENNZXRob2RzW1RdWydyZXF1ZXN0J10sXG4gICAgKSA9PiBQcm9taXNlPElQQ01ldGhvZHNbVF1bJ3Jlc3BvbnNlJ10+O1xuXG4gICAgbGlzdGVuZXJDb3VudDogPFQgZXh0ZW5kcyBrZXlvZiBJUENfUHVzaE5vdGlmaWNhdGlvbj4oY2hhbm5lbDogVCkgPT4gbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBlbGVjdHJvbkhhbmRsZXI6IEVsZWN0cm9uSGFuZGxlciA9IHtcbiAgaXBjUmVuZGVyZXI6IHtcbiAgICBzZW5kTWVzc2FnZShjaGFubmVsOiBDaGFubmVscywgLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICBpcGNSZW5kZXJlci5zZW5kKGNoYW5uZWwsIGFyZ3MpO1xuICAgIH0sXG5cbiAgICBvbjogPFQgZXh0ZW5kcyBrZXlvZiBJUENfUHVzaE5vdGlmaWNhdGlvbj4oXG4gICAgICBjaGFubmVsOiBULFxuICAgICAgZnVuYzogKFxuICAgICAgICBfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsXG4gICAgICAgIGFyZ3M6IElQQ19QdXNoTm90aWZpY2F0aW9uW1RdWydwYXlsb2FkJ10sXG4gICAgICApID0+IHZvaWQsXG4gICAgKSA9PiB7XG4gICAgICBpcGNSZW5kZXJlci5vbihjaGFubmVsLCBmdW5jKTtcbiAgICB9LFxuXG4gICAgb2ZmOiA8VCBleHRlbmRzIGtleW9mIElQQ19QdXNoTm90aWZpY2F0aW9uPihcbiAgICAgIGNoYW5uZWw6IFQsXG4gICAgICBmdW5jOiAoXG4gICAgICAgIF9ldmVudDogSXBjUmVuZGVyZXJFdmVudCxcbiAgICAgICAgYXJnczogSVBDX1B1c2hOb3RpZmljYXRpb25bVF1bJ3BheWxvYWQnXSxcbiAgICAgICkgPT4gdm9pZCxcbiAgICApID0+IHtcbiAgICAgIGlwY1JlbmRlcmVyLm9mZihjaGFubmVsLCBmdW5jKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiA8VCBleHRlbmRzIGtleW9mIElQQ19QdXNoTm90aWZpY2F0aW9uPihjaGFubmVsOiBUKSA9PiB7XG4gICAgICBpcGNSZW5kZXJlci5yZW1vdmVBbGxMaXN0ZW5lcnMoY2hhbm5lbCk7XG4gICAgfSxcblxuICAgIGxpc3RlbmVyQ291bnQ6IDxUIGV4dGVuZHMga2V5b2YgSVBDX1B1c2hOb3RpZmljYXRpb24+KFxuICAgICAgY2hhbm5lbDogVCxcbiAgICApOiBudW1iZXIgPT4ge1xuICAgICAgcmV0dXJuIGlwY1JlbmRlcmVyLmxpc3RlbmVyQ291bnQoY2hhbm5lbCk7XG4gICAgfSxcblxuICAgIG9uY2U6IDxUIGV4dGVuZHMga2V5b2YgSVBDX1B1c2hOb3RpZmljYXRpb24+KFxuICAgICAgY2hhbm5lbDogVCxcbiAgICAgIGZ1bmM6IChcbiAgICAgICAgX2V2ZW50OiBJcGNSZW5kZXJlckV2ZW50LFxuICAgICAgICBhcmdzOiBJUENfUHVzaE5vdGlmaWNhdGlvbltUXVsncGF5bG9hZCddLFxuICAgICAgKSA9PiB2b2lkLFxuICAgICkgPT4ge1xuICAgICAgaXBjUmVuZGVyZXIub25jZShjaGFubmVsLCBmdW5jKTtcbiAgICB9LFxuXG4gICAgaW52b2tlOiBhc3luYyAoY2hhbm5lbCwgLi4uYXJncykgPT4ge1xuICAgICAgcmV0dXJuIGlwY1JlbmRlcmVyLmludm9rZShjaGFubmVsLCBhcmdzKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCBlbGVjdHJvbkhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9