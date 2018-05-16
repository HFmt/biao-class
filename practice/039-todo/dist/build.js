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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/find_module.js":
/*!***************************!*\
  !*** ./js/find_module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet output = {\r\n    find_row_by_id_forEach: find_row_by_id_forEach\r\n  , find_index_by_id_forEach: find_index_by_id_forEach\r\n  , find_row_by_id_for: find_row_by_id_for\r\n  , find_index_by_id_for: find_index_by_id_for\r\n  , find_row_by_id_find: find_row_by_id_find\r\n  , find_index_by_id_find: find_index_by_id_find\r\n}\r\n\r\n\r\n//forEach方法\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_forEach(arr, id){\r\n    let arr_row;\r\n    arr.forEach(function (row){\r\n        if(row.id == id)\r\n            return arr_row = row;\r\n    });\r\n    return arr_row;\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_forEach(arr, id){\r\n    let index;\r\n    arr.forEach(function (row, item){\r\n        if(row.id == id)\r\n            index = item;\r\n    });\r\n    return index;\r\n}\r\n\r\n\r\n//for 方法\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_for(arr, id){\r\n    for(let i = 0; i< arr.length; i++){\r\n        console.log(arr[i].id);\r\n        if(arr[i].id == id)\r\n            return arr[i];\r\n    }\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_for(arr, id){\r\nfor(let i = 0; i< arr.length; i++){\r\n    if(arr[i].id == id)\r\n        return i;\r\n    }\r\n}\r\n\r\n// IE 11 及更早版本不支持 (find && findIndex 方法)\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_find(arr, id){\r\n    return arr.find(function(row){\r\n        return row.id == id;\r\n    });\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_find(arr, id){\r\n    return arr.findIndex(function(row){\r\n        return row.id == id;\r\n    });\r\n}\r\n\r\nmodule.exports = output;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9maW5kX21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2ZpbmRfbW9kdWxlLmpzPzJkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBvdXRwdXQgPSB7XHJcbiAgICBmaW5kX3Jvd19ieV9pZF9mb3JFYWNoOiBmaW5kX3Jvd19ieV9pZF9mb3JFYWNoXHJcbiAgLCBmaW5kX2luZGV4X2J5X2lkX2ZvckVhY2g6IGZpbmRfaW5kZXhfYnlfaWRfZm9yRWFjaFxyXG4gICwgZmluZF9yb3dfYnlfaWRfZm9yOiBmaW5kX3Jvd19ieV9pZF9mb3JcclxuICAsIGZpbmRfaW5kZXhfYnlfaWRfZm9yOiBmaW5kX2luZGV4X2J5X2lkX2ZvclxyXG4gICwgZmluZF9yb3dfYnlfaWRfZmluZDogZmluZF9yb3dfYnlfaWRfZmluZFxyXG4gICwgZmluZF9pbmRleF9ieV9pZF9maW5kOiBmaW5kX2luZGV4X2J5X2lkX2ZpbmRcclxufVxyXG5cclxuXHJcbi8vZm9yRWFjaOaWueazlVxyXG5cclxuLy8g5om+5Yiw5pWw57uE5a+55bqU55qE5YC877yM5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfcm93X2J5X2lkX2ZvckVhY2goYXJyLCBpZCl7XHJcbiAgICBsZXQgYXJyX3JvdztcclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpe1xyXG4gICAgICAgIGlmKHJvdy5pZCA9PSBpZClcclxuICAgICAgICAgICAgcmV0dXJuIGFycl9yb3cgPSByb3c7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnJfcm93O1xyXG59XHJcblxyXG4vL+aJvuWIsOaVsOe7hOeahOe0ouW8leW5tui/lOWbnlxyXG5mdW5jdGlvbiBmaW5kX2luZGV4X2J5X2lkX2ZvckVhY2goYXJyLCBpZCl7XHJcbiAgICBsZXQgaW5kZXg7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpdGVtKXtcclxuICAgICAgICBpZihyb3cuaWQgPT0gaWQpXHJcbiAgICAgICAgICAgIGluZGV4ID0gaXRlbTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG59XHJcblxyXG5cclxuLy9mb3Ig5pa55rOVXHJcblxyXG4vLyDmib7liLDmlbDnu4Tlr7nlupTnmoTlgLzvvIzlubbov5Tlm55cclxuZnVuY3Rpb24gZmluZF9yb3dfYnlfaWRfZm9yKGFyciwgaWQpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0uaWQpO1xyXG4gICAgICAgIGlmKGFycltpXS5pZCA9PSBpZClcclxuICAgICAgICAgICAgcmV0dXJuIGFycltpXTtcclxuICAgIH1cclxufVxyXG5cclxuLy/mib7liLDmlbDnu4TnmoTntKLlvJXlubbov5Tlm55cclxuZnVuY3Rpb24gZmluZF9pbmRleF9ieV9pZF9mb3IoYXJyLCBpZCl7XHJcbmZvcihsZXQgaSA9IDA7IGk8IGFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICBpZihhcnJbaV0uaWQgPT0gaWQpXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElFIDExIOWPiuabtOaXqeeJiOacrOS4jeaUr+aMgSAoZmluZCAmJiBmaW5kSW5kZXgg5pa55rOVKVxyXG5cclxuLy8g5om+5Yiw5pWw57uE5a+55bqU55qE5YC877yM5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfcm93X2J5X2lkX2ZpbmQoYXJyLCBpZCl7XHJcbiAgICByZXR1cm4gYXJyLmZpbmQoZnVuY3Rpb24ocm93KXtcclxuICAgICAgICByZXR1cm4gcm93LmlkID09IGlkO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5om+5Yiw5pWw57uE55qE57Si5byV5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfaW5kZXhfYnlfaWRfZmluZChhcnIsIGlkKXtcclxuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uKHJvdyl7XHJcbiAgICAgICAgcmV0dXJuIHJvdy5pZCA9PSBpZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/find_module.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nlet find = __webpack_require__(/*! ./find_module */ \"./js/find_module.js\");\r\n\r\n    let id_current = 1;\r\n    let todo_list = [\r\n    {\r\n        id: id_current,\r\n        name: '买菜',\r\n        completed: false,\r\n    },\r\n    ];\r\n\r\n//增\r\n    function add(row){\r\n        row.id = ++id_current;\r\n        todo_list.push(row);\r\n    }\r\n\r\n//删\r\n    function remove(id){\r\n        if(id < 1)\r\n            return;\r\n        todo_list.splice(find.find_index_by_id_for(todo_list, id), 1);\r\n    }\r\n\r\n//改\r\n    function modify(id, new_row){\r\n        if(id < 1)\r\n            return;\r\n        let index = find.find_index_by_id_for(todo_list, id);\r\n        let old_row = todo_list[index];\r\n        todo_list[index] = Object.assign({}, old_row, new_row);\r\n    }\r\n\r\n// 查\r\n    function read(id){\r\n        if(id)\r\n            console.log(find.find_index_by_id_for(todo_list, id)) ;\r\n        else\r\n            console.log(todo_list) ;\r\n    }\r\n\r\n    \r\n    add({\r\n        name: '切菜',\r\n        completed: false,\r\n    });\r\n    \r\n    // console.log(todo_list);\r\n  \r\n\r\n    // remove(1);\r\n    // console.log(todo_list);\r\n\r\n    read(1);\r\n\r\n    modify(1, {\r\n        name: '洗菜'\r\n    });\r\n    // console.log(todo_list);\r\n\r\n    console.log(find.find_row_by_id_for(todo_list, 1)) ;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBmaW5kID0gcmVxdWlyZSgnLi9maW5kX21vZHVsZScpO1xyXG5cclxuICAgIGxldCBpZF9jdXJyZW50ID0gMTtcclxuICAgIGxldCB0b2RvX2xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGlkX2N1cnJlbnQsXHJcbiAgICAgICAgbmFtZTogJ+S5sOiPnCcsXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBdO1xyXG5cclxuLy/lop5cclxuICAgIGZ1bmN0aW9uIGFkZChyb3cpe1xyXG4gICAgICAgIHJvdy5pZCA9ICsraWRfY3VycmVudDtcclxuICAgICAgICB0b2RvX2xpc3QucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuLy/liKBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZShpZCl7XHJcbiAgICAgICAgaWYoaWQgPCAxKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdG9kb19saXN0LnNwbGljZShmaW5kLmZpbmRfaW5kZXhfYnlfaWRfZm9yKHRvZG9fbGlzdCwgaWQpLCAxKTtcclxuICAgIH1cclxuXHJcbi8v5pS5XHJcbiAgICBmdW5jdGlvbiBtb2RpZnkoaWQsIG5ld19yb3cpe1xyXG4gICAgICAgIGlmKGlkIDwgMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGZpbmQuZmluZF9pbmRleF9ieV9pZF9mb3IodG9kb19saXN0LCBpZCk7XHJcbiAgICAgICAgbGV0IG9sZF9yb3cgPSB0b2RvX2xpc3RbaW5kZXhdO1xyXG4gICAgICAgIHRvZG9fbGlzdFtpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCBvbGRfcm93LCBuZXdfcm93KTtcclxuICAgIH1cclxuXHJcbi8vIOafpVxyXG4gICAgZnVuY3Rpb24gcmVhZChpZCl7XHJcbiAgICAgICAgaWYoaWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmQuZmluZF9pbmRleF9ieV9pZF9mb3IodG9kb19saXN0LCBpZCkpIDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9fbGlzdCkgO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgYWRkKHtcclxuICAgICAgICBuYW1lOiAn5YiH6I+cJyxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9fbGlzdCk7XHJcbiAgXHJcblxyXG4gICAgLy8gcmVtb3ZlKDEpO1xyXG4gICAgLy8gY29uc29sZS5sb2codG9kb19saXN0KTtcclxuXHJcbiAgICByZWFkKDEpO1xyXG5cclxuICAgIG1vZGlmeSgxLCB7XHJcbiAgICAgICAgbmFtZTogJ+a0l+iPnCdcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codG9kb19saXN0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaW5kLmZpbmRfcm93X2J5X2lkX2Zvcih0b2RvX2xpc3QsIDEpKSA7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ })

/******/ });