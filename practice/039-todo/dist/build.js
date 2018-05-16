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

eval("let output = {\r\n    find_row_by_id_forEach: find_row_by_id_forEach\r\n  , find_index_by_id_forEach: find_index_by_id_forEach\r\n  , find_row_by_id_for: find_row_by_id_for\r\n  , find_index_by_id_for: find_index_by_id_for\r\n  , find_row_by_id_find: find_row_by_id_find\r\n  , find_index_by_id_find: find_index_by_id_find\r\n}\r\n\r\n\r\n//forEach方法\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_forEach(arr, id){\r\n    let arr_row;\r\n    arr.forEach(function (row){\r\n        if(row.id == id)\r\n            return arr_row = row;\r\n    });\r\n    return arr_row;\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_forEach(arr, id){\r\n    let index;\r\n    arr.forEach(function (row, item){\r\n        if(row.id == id)\r\n            index = item;\r\n    });\r\n    return index;\r\n}\r\n\r\n\r\n//for 方法\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_for(arr, id){\r\n    for(let i = 0; i< arr.length; i++){\r\n        if(arr[i].id == id)\r\n            return arr[i];\r\n    }\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_for(arr, id){\r\nfor(let i = 0; i< arr.length; i++){\r\n    if(arr[i].id == id)\r\n        return i;\r\n    }\r\n}\r\n\r\n// IE 11 及更早版本不支持 (find && findIndex 方法)\r\n\r\n// 找到数组对应的值，并返回\r\nfunction find_row_by_id_find(arr, id){\r\n    return arr.find(function(row){\r\n        return row.id == id;\r\n    });\r\n}\r\n\r\n//找到数组的索引并返回\r\nfunction find_index_by_id_find(arr, id){\r\n    return arr.findIndex(function(row){\r\n        return row.id == id;\r\n    });\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9maW5kX21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2ZpbmRfbW9kdWxlLmpzPzJkYTQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG91dHB1dCA9IHtcclxuICAgIGZpbmRfcm93X2J5X2lkX2ZvckVhY2g6IGZpbmRfcm93X2J5X2lkX2ZvckVhY2hcclxuICAsIGZpbmRfaW5kZXhfYnlfaWRfZm9yRWFjaDogZmluZF9pbmRleF9ieV9pZF9mb3JFYWNoXHJcbiAgLCBmaW5kX3Jvd19ieV9pZF9mb3I6IGZpbmRfcm93X2J5X2lkX2ZvclxyXG4gICwgZmluZF9pbmRleF9ieV9pZF9mb3I6IGZpbmRfaW5kZXhfYnlfaWRfZm9yXHJcbiAgLCBmaW5kX3Jvd19ieV9pZF9maW5kOiBmaW5kX3Jvd19ieV9pZF9maW5kXHJcbiAgLCBmaW5kX2luZGV4X2J5X2lkX2ZpbmQ6IGZpbmRfaW5kZXhfYnlfaWRfZmluZFxyXG59XHJcblxyXG5cclxuLy9mb3JFYWNo5pa55rOVXHJcblxyXG4vLyDmib7liLDmlbDnu4Tlr7nlupTnmoTlgLzvvIzlubbov5Tlm55cclxuZnVuY3Rpb24gZmluZF9yb3dfYnlfaWRfZm9yRWFjaChhcnIsIGlkKXtcclxuICAgIGxldCBhcnJfcm93O1xyXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKHJvdyl7XHJcbiAgICAgICAgaWYocm93LmlkID09IGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyX3JvdyA9IHJvdztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycl9yb3c7XHJcbn1cclxuXHJcbi8v5om+5Yiw5pWw57uE55qE57Si5byV5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfaW5kZXhfYnlfaWRfZm9yRWFjaChhcnIsIGlkKXtcclxuICAgIGxldCBpbmRleDtcclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGl0ZW0pe1xyXG4gICAgICAgIGlmKHJvdy5pZCA9PSBpZClcclxuICAgICAgICAgICAgaW5kZXggPSBpdGVtO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbn1cclxuXHJcblxyXG4vL2ZvciDmlrnms5VcclxuXHJcbi8vIOaJvuWIsOaVsOe7hOWvueW6lOeahOWAvO+8jOW5tui/lOWbnlxyXG5mdW5jdGlvbiBmaW5kX3Jvd19ieV9pZF9mb3IoYXJyLCBpZCl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBhcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKGFycltpXS5pZCA9PSBpZClcclxuICAgICAgICAgICAgcmV0dXJuIGFycltpXTtcclxuICAgIH1cclxufVxyXG5cclxuLy/mib7liLDmlbDnu4TnmoTntKLlvJXlubbov5Tlm55cclxuZnVuY3Rpb24gZmluZF9pbmRleF9ieV9pZF9mb3IoYXJyLCBpZCl7XHJcbmZvcihsZXQgaSA9IDA7IGk8IGFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICBpZihhcnJbaV0uaWQgPT0gaWQpXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElFIDExIOWPiuabtOaXqeeJiOacrOS4jeaUr+aMgSAoZmluZCAmJiBmaW5kSW5kZXgg5pa55rOVKVxyXG5cclxuLy8g5om+5Yiw5pWw57uE5a+55bqU55qE5YC877yM5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfcm93X2J5X2lkX2ZpbmQoYXJyLCBpZCl7XHJcbiAgICByZXR1cm4gYXJyLmZpbmQoZnVuY3Rpb24ocm93KXtcclxuICAgICAgICByZXR1cm4gcm93LmlkID09IGlkO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5om+5Yiw5pWw57uE55qE57Si5byV5bm26L+U5ZueXHJcbmZ1bmN0aW9uIGZpbmRfaW5kZXhfYnlfaWRfZmluZChhcnIsIGlkKXtcclxuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uKHJvdyl7XHJcbiAgICAgICAgcmV0dXJuIHJvdy5pZCA9PSBpZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/find_module.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let find = __webpack_require__(/*! ./find_module */ \"./js/find_module.js\");\r\n\r\nlet todo_list = [\r\n    {\r\n        id: 1,\r\n        name: '买菜',\r\n        completed: false,\r\n    },\r\n    ];\r\n\r\n\r\nfunction Todo(list){\r\n    this.id = 1;\r\n    this.list = list;\r\n}\r\n\r\nTodo.prototype.add = add;\r\nTodo.prototype.remove = remove;\r\nTodo.prototype.modify = modify;\r\nTodo.prototype.read = read;\r\n\r\n\r\n//增\r\n    function add(row){\r\n        row.id = ++this.id;\r\n        this.list.push(row);\r\n    }\r\n\r\n//删\r\n    function remove(id){\r\n        if(id < 1)\r\n            return;\r\n        this.list.splice(find.find_index_by_id_for(todo.list, id), 1);\r\n    }\r\n\r\n//改\r\n    function modify(id, new_row){\r\n        if(id < 1)\r\n            return;\r\n        let index = find.find_index_by_id_for(todo.list, id);\r\n        let old_row = this.list[index];\r\n        this.list[index] = Object.assign({}, old_row, new_row);\r\n    }\r\n\r\n// 查\r\n    function read(id){\r\n        if(id)\r\n            console.log(find.find_row_by_id_for(todo.list, id)) ;\r\n        else\r\n            console.log(this.list) ;\r\n    }\r\n\r\n\r\n\r\nlet todo = new Todo(todo_list);\r\n\r\ntodo.read(1);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGZpbmQgPSByZXF1aXJlKCcuL2ZpbmRfbW9kdWxlJyk7XHJcblxyXG5sZXQgdG9kb19saXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICfkubDoj5wnLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgXTtcclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvKGxpc3Qpe1xyXG4gICAgdGhpcy5pZCA9IDE7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG59XHJcblxyXG5Ub2RvLnByb3RvdHlwZS5hZGQgPSBhZGQ7XHJcblRvZG8ucHJvdG90eXBlLnJlbW92ZSA9IHJlbW92ZTtcclxuVG9kby5wcm90b3R5cGUubW9kaWZ5ID0gbW9kaWZ5O1xyXG5Ub2RvLnByb3RvdHlwZS5yZWFkID0gcmVhZDtcclxuXHJcblxyXG4vL+WinlxyXG4gICAgZnVuY3Rpb24gYWRkKHJvdyl7XHJcbiAgICAgICAgcm93LmlkID0gKyt0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcblxyXG4vL+WIoFxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGlkKXtcclxuICAgICAgICBpZihpZCA8IDEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGZpbmQuZmluZF9pbmRleF9ieV9pZF9mb3IodG9kby5saXN0LCBpZCksIDEpO1xyXG4gICAgfVxyXG5cclxuLy/mlLlcclxuICAgIGZ1bmN0aW9uIG1vZGlmeShpZCwgbmV3X3Jvdyl7XHJcbiAgICAgICAgaWYoaWQgPCAxKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZmluZC5maW5kX2luZGV4X2J5X2lkX2Zvcih0b2RvLmxpc3QsIGlkKTtcclxuICAgICAgICBsZXQgb2xkX3JvdyA9IHRoaXMubGlzdFtpbmRleF07XHJcbiAgICAgICAgdGhpcy5saXN0W2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIG9sZF9yb3csIG5ld19yb3cpO1xyXG4gICAgfVxyXG5cclxuLy8g5p+lXHJcbiAgICBmdW5jdGlvbiByZWFkKGlkKXtcclxuICAgICAgICBpZihpZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmluZC5maW5kX3Jvd19ieV9pZF9mb3IodG9kby5saXN0LCBpZCkpIDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCkgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5sZXQgdG9kbyA9IG5ldyBUb2RvKHRvZG9fbGlzdCk7XHJcblxyXG50b2RvLnJlYWQoMSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ })

/******/ });