/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./history.js":
/*!********************!*\
  !*** ./history.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet list= []\r\n  , el\r\n  , click_history\r\n  , click_delete\r\n  ;\r\n\r\nlet output = {\r\n    init: init\r\n  , add: add\r\n}\r\n\r\nfunction init(config){\r\n    el = document.getElementById(config.el);\r\n    click_history = config.click_history;\r\n    click_delete = config.click_delete;\r\n\r\n    // sync_to_ladle();\r\n    // render();\r\n}\r\n\r\n\r\nfunction remove(keyword){\r\n    if(list.indexOf(keyword) == -1)\r\n        return false;\r\n\r\n    list.splice(list.indexOf(keyword), 1);\r\n    render();\r\n    sync_to_sore();\r\n}\r\n\r\nfunction add(keyword){\r\n    list.push(keyword);\r\n    render();\r\n    sync_to_sore();\r\n}\r\n\r\n\r\nfunction render(){\r\n    el.innerHTML = '';\r\n    list.forEach(function (keyword){\r\n        let el_history = document.createElement('div');\r\n        el_history.innerHTML = \r\n        `\r\n        <div class=\"text\">${keyword}</div>\r\n        <div class=\"tool\">\r\n        <span class=\"delete\">删除</span>\r\n        </div>\r\n        `\r\n        ;\r\n        el_history.classList.add('history');\r\n        el.appendChild(el_history);\r\n\r\n        let del_history = el_history.getElementsByClassName('delete')[0];\r\n\r\n        el_history.addEventListener('click', function(e){\r\n            if(click_history)\r\n            click_history(keyword, e);\r\n        });\r\n\r\n        del_history.addEventListener('click', function(e){\r\n            if(click_delete)\r\n            click_delete(keyword, e);\r\n\r\n            remove(keyword);\r\n        });\r\n    });\r\n}\r\n\r\nfunction sync_to_sore(){\r\n    localStorage.setItem('Asam', JSON.stringify(list));\r\n}\r\n\r\nfunction sync_to_ladle(){\r\n    list =  JSON.parse(localStorage.getItem('Asam'))  || [];\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGlzdG9yeS5qcz80ODZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgbGlzdD0gW11cclxuICAsIGVsXHJcbiAgLCBjbGlja19oaXN0b3J5XHJcbiAgLCBjbGlja19kZWxldGVcclxuICA7XHJcblxyXG5sZXQgb3V0cHV0ID0ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gICwgYWRkOiBhZGRcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4gICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZWwpO1xyXG4gICAgY2xpY2tfaGlzdG9yeSA9IGNvbmZpZy5jbGlja19oaXN0b3J5O1xyXG4gICAgY2xpY2tfZGVsZXRlID0gY29uZmlnLmNsaWNrX2RlbGV0ZTtcclxuXHJcbiAgICAvLyBzeW5jX3RvX2xhZGxlKCk7XHJcbiAgICAvLyByZW5kZXIoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZShrZXl3b3JkKXtcclxuICAgIGlmKGxpc3QuaW5kZXhPZihrZXl3b3JkKSA9PSAtMSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKGtleXdvcmQpLCAxKTtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgc3luY190b19zb3JlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZChrZXl3b3JkKXtcclxuICAgIGxpc3QucHVzaChrZXl3b3JkKTtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgc3luY190b19zb3JlKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKXtcclxuICAgICAgICBsZXQgZWxfaGlzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsX2hpc3RvcnkuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+JHtrZXl3b3JkfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj7liKDpmaQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIDtcclxuICAgICAgICBlbF9oaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9oaXN0b3J5KTtcclxuXHJcbiAgICAgICAgbGV0IGRlbF9oaXN0b3J5ID0gZWxfaGlzdG9yeS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUnKVswXTtcclxuXHJcbiAgICAgICAgZWxfaGlzdG9yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihjbGlja19oaXN0b3J5KVxyXG4gICAgICAgICAgICBjbGlja19oaXN0b3J5KGtleXdvcmQsIGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkZWxfaGlzdG9yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihjbGlja19kZWxldGUpXHJcbiAgICAgICAgICAgIGNsaWNrX2RlbGV0ZShrZXl3b3JkLCBlKTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZShrZXl3b3JkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jX3RvX3NvcmUoKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBc2FtJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jX3RvX2xhZGxlKCl7XHJcbiAgICBsaXN0ID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FzYW0nKSkgIHx8IFtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./history.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(" let history = __webpack_require__(/*! ./history */ \"./history.js\");\r\n\r\n //回调\r\n history.init({\r\n    el: 'history-list'\r\n  , click_history: click_history\r\n  , click_delete: click_delete\r\n });\r\n\r\nfunction click_history(key, e){\r\n    console.log(key);\r\n}\r\n\r\nfunction click_delete(key, e){\r\n    console.log(key);\r\n}\r\n\r\n history.add('Asam1');\r\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiIGxldCBoaXN0b3J5ID0gcmVxdWlyZSgnLi9oaXN0b3J5Jyk7XHJcblxyXG4gLy/lm57osINcclxuIGhpc3RvcnkuaW5pdCh7XHJcbiAgICBlbDogJ2hpc3RvcnktbGlzdCdcclxuICAsIGNsaWNrX2hpc3Rvcnk6IGNsaWNrX2hpc3RvcnlcclxuICAsIGNsaWNrX2RlbGV0ZTogY2xpY2tfZGVsZXRlXHJcbiB9KTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrX2hpc3Rvcnkoa2V5LCBlKXtcclxuICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrX2RlbGV0ZShrZXksIGUpe1xyXG4gICAgY29uc29sZS5sb2coa2V5KTtcclxufVxyXG5cclxuIGhpc3RvcnkuYWRkKCdBc2FtMScpO1xyXG4gIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });