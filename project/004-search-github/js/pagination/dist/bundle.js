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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(" \r\n let module_pagination = __webpack_require__(/*! ./pagination */ \"./pagination.js\")\r\n \r\n let pagination = document.getElementById('pagination-wrap');\r\n\r\n module_pagination.init({\r\n    pagination: pagination\r\n  , amount: 100\r\n  , limit: 10\r\n  , range_page: 5\r\n  , current_page: 4\r\n  , on_change_current_page: on_change_current_page\r\n });\r\n\r\n function on_change_current_page(current_page, e){\r\n     console.log(current_page);\r\n }\r\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4gbGV0IG1vZHVsZV9wYWdpbmF0aW9uID0gcmVxdWlyZSgnLi9wYWdpbmF0aW9uJylcclxuIFxyXG4gbGV0IHBhZ2luYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdGlvbi13cmFwJyk7XHJcblxyXG4gbW9kdWxlX3BhZ2luYXRpb24uaW5pdCh7XHJcbiAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uXHJcbiAgLCBhbW91bnQ6IDEwMFxyXG4gICwgbGltaXQ6IDEwXHJcbiAgLCByYW5nZV9wYWdlOiA1XHJcbiAgLCBjdXJyZW50X3BhZ2U6IDRcclxuICAsIG9uX2NoYW5nZV9jdXJyZW50X3BhZ2U6IG9uX2NoYW5nZV9jdXJyZW50X3BhZ2VcclxuIH0pO1xyXG5cclxuIGZ1bmN0aW9uIG9uX2NoYW5nZV9jdXJyZW50X3BhZ2UoY3VycmVudF9wYWdlLCBlKXtcclxuICAgICBjb25zb2xlLmxvZyhjdXJyZW50X3BhZ2UpO1xyXG4gfVxyXG4gIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./pagination.js":
/*!***********************!*\
  !*** ./pagination.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet pagination_wrap\r\n  , config\r\n  , amount_page\r\n  , range_page\r\n  , pagination_list\r\n  ; \r\n\r\n  let default_config = {\r\n      amount: null\r\n    , limit: 5\r\n    , range_page:5\r\n    , current_page: 1\r\n  }\r\n\r\n\r\n\r\nlet output = {\r\n    init: init\r\n}\r\n\r\nfunction init(init_config){\r\n    pagination_wrap = init_config.pagination;\r\n    config =Object.assign({}, default_config, init_config);\r\n    \r\n    render_pagination_structure();\r\n    calc_amount_page();\r\n    \r\n    render_pagination_list();\r\n    change_current_page(config.current_page);\r\n}\r\n\r\nfunction render_pagination_structure(){\r\n    pagination_wrap.classList.add('pagination');\r\n    pagination_wrap.innerHTML = `\r\n    <div class=\"pagination-pre\">\r\n        <button class=\"pagination-first\">First</button>\r\n        <button class=\"pagination-prev\">Prev</button>\r\n    </div>\r\n    <div class=\"pagination-list\"></div>\r\n    <div class=\"pagination-post\">\r\n        <button class=\"pagination-next\">Next</button>\r\n        <button class=\"pagination-last\">Last</button>\r\n    </div>\r\n    `;\r\n\r\n    pagination_list = pagination_wrap.getElementsByClassName('pagination-list')[0];\r\n    pagination_wrap.addEventListener('click', function (e){\r\n        let   first_btn = e.target.classList.contains('pagination-first')\r\n            , prev_btn = e.target.classList.contains('pagination-prev')\r\n            , item_btn = e.target.classList.contains('pagination-item')\r\n            , next_btn = e.target.classList.contains('pagination-next')\r\n            , last_btn = e.target.classList.contains('pagination-last')\r\n            ;\r\n            if(first_btn)\r\n                change_current_page(1);\r\n            else if(prev_btn)\r\n                change_current_page(config.current_page-1);\r\n            else if(item_btn)\r\n                change_current_page(parseInt(e.target.dataset.page));\r\n            else if(next_btn)\r\n                change_current_page(config.current_page+1);\r\n            else if(last_btn)\r\n                change_current_page(amount_page);\r\n\r\n        render_pagination_list();\r\n    }) ;\r\n}\r\n\r\nfunction render_pagination_list(){\r\n    pagination_list.innerHTML = '';\r\n\r\n    let length_page = amount_page > config.range_page ? config.range_page : amount_page;\r\n \r\n    for(let i = 1; i <= length_page; i++){\r\n        let btn = document.createElement('button');\r\n        btn.innerHTML = i;\r\n        btn.classList.add('pagination-item');\r\n        btn.dataset.page = i;\r\n        if(config.current_page == i)\r\n        btn.classList.add('active');\r\n        \r\n        pagination_list.appendChild(btn);\r\n    }\r\n}\r\n\r\nfunction change_current_page(current_page){\r\n    let flag_page = config.current_page;\r\n\r\n    config.current_page = current_page;\r\n\r\n    if(config.current_page > amount_page)\r\n        config.current_page = amount_page;\r\n    else  if(config.current_page < 1)\r\n        config.current_page = 1; \r\n\r\n    if(config.current_page == flag_page)\r\n        return; \r\n       \r\n    if(config.on_change_current_page)\r\n        config.on_change_current_page(config.current_page);\r\n}\r\n\r\nfunction calc_amount_page(){\r\n   return amount_page =Math.ceil(config.amount / config.limit) ;\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdpbmF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnaW5hdGlvbi5qcz9kMmFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgcGFnaW5hdGlvbl93cmFwXHJcbiAgLCBjb25maWdcclxuICAsIGFtb3VudF9wYWdlXHJcbiAgLCByYW5nZV9wYWdlXHJcbiAgLCBwYWdpbmF0aW9uX2xpc3RcclxuICA7IFxyXG5cclxuICBsZXQgZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgIGFtb3VudDogbnVsbFxyXG4gICAgLCBsaW1pdDogNVxyXG4gICAgLCByYW5nZV9wYWdlOjVcclxuICAgICwgY3VycmVudF9wYWdlOiAxXHJcbiAgfVxyXG5cclxuXHJcblxyXG5sZXQgb3V0cHV0ID0ge1xyXG4gICAgaW5pdDogaW5pdFxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KGluaXRfY29uZmlnKXtcclxuICAgIHBhZ2luYXRpb25fd3JhcCA9IGluaXRfY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBjb25maWcgPU9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRfY29uZmlnLCBpbml0X2NvbmZpZyk7XHJcbiAgICBcclxuICAgIHJlbmRlcl9wYWdpbmF0aW9uX3N0cnVjdHVyZSgpO1xyXG4gICAgY2FsY19hbW91bnRfcGFnZSgpO1xyXG4gICAgXHJcbiAgICByZW5kZXJfcGFnaW5hdGlvbl9saXN0KCk7XHJcbiAgICBjaGFuZ2VfY3VycmVudF9wYWdlKGNvbmZpZy5jdXJyZW50X3BhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJfcGFnaW5hdGlvbl9zdHJ1Y3R1cmUoKXtcclxuICAgIHBhZ2luYXRpb25fd3JhcC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uJyk7XHJcbiAgICBwYWdpbmF0aW9uX3dyYXAuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcHJlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tZmlyc3RcIj5GaXJzdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZcIj5QcmV2PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXBvc3RcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0XCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWxhc3RcIj5MYXN0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgcGFnaW5hdGlvbl9saXN0ID0gcGFnaW5hdGlvbl93cmFwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb24tbGlzdCcpWzBdO1xyXG4gICAgcGFnaW5hdGlvbl93cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGxldCAgIGZpcnN0X2J0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1maXJzdCcpXHJcbiAgICAgICAgICAgICwgcHJldl9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tcHJldicpXHJcbiAgICAgICAgICAgICwgaXRlbV9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24taXRlbScpXHJcbiAgICAgICAgICAgICwgbmV4dF9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tbmV4dCcpXHJcbiAgICAgICAgICAgICwgbGFzdF9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tbGFzdCcpXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYoZmlyc3RfYnRuKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlX2N1cnJlbnRfcGFnZSgxKTtcclxuICAgICAgICAgICAgZWxzZSBpZihwcmV2X2J0bilcclxuICAgICAgICAgICAgICAgIGNoYW5nZV9jdXJyZW50X3BhZ2UoY29uZmlnLmN1cnJlbnRfcGFnZS0xKTtcclxuICAgICAgICAgICAgZWxzZSBpZihpdGVtX2J0bilcclxuICAgICAgICAgICAgICAgIGNoYW5nZV9jdXJyZW50X3BhZ2UocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wYWdlKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYobmV4dF9idG4pXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VfY3VycmVudF9wYWdlKGNvbmZpZy5jdXJyZW50X3BhZ2UrMSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYobGFzdF9idG4pXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VfY3VycmVudF9wYWdlKGFtb3VudF9wYWdlKTtcclxuXHJcbiAgICAgICAgcmVuZGVyX3BhZ2luYXRpb25fbGlzdCgpO1xyXG4gICAgfSkgO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJfcGFnaW5hdGlvbl9saXN0KCl7XHJcbiAgICBwYWdpbmF0aW9uX2xpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgbGV0IGxlbmd0aF9wYWdlID0gYW1vdW50X3BhZ2UgPiBjb25maWcucmFuZ2VfcGFnZSA/IGNvbmZpZy5yYW5nZV9wYWdlIDogYW1vdW50X3BhZ2U7XHJcbiBcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoX3BhZ2U7IGkrKyl7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWl0ZW0nKTtcclxuICAgICAgICBidG4uZGF0YXNldC5wYWdlID0gaTtcclxuICAgICAgICBpZihjb25maWcuY3VycmVudF9wYWdlID09IGkpXHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhZ2luYXRpb25fbGlzdC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VfY3VycmVudF9wYWdlKGN1cnJlbnRfcGFnZSl7XHJcbiAgICBsZXQgZmxhZ19wYWdlID0gY29uZmlnLmN1cnJlbnRfcGFnZTtcclxuXHJcbiAgICBjb25maWcuY3VycmVudF9wYWdlID0gY3VycmVudF9wYWdlO1xyXG5cclxuICAgIGlmKGNvbmZpZy5jdXJyZW50X3BhZ2UgPiBhbW91bnRfcGFnZSlcclxuICAgICAgICBjb25maWcuY3VycmVudF9wYWdlID0gYW1vdW50X3BhZ2U7XHJcbiAgICBlbHNlICBpZihjb25maWcuY3VycmVudF9wYWdlIDwgMSlcclxuICAgICAgICBjb25maWcuY3VycmVudF9wYWdlID0gMTsgXHJcblxyXG4gICAgaWYoY29uZmlnLmN1cnJlbnRfcGFnZSA9PSBmbGFnX3BhZ2UpXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICAgICAgIFxyXG4gICAgaWYoY29uZmlnLm9uX2NoYW5nZV9jdXJyZW50X3BhZ2UpXHJcbiAgICAgICAgY29uZmlnLm9uX2NoYW5nZV9jdXJyZW50X3BhZ2UoY29uZmlnLmN1cnJlbnRfcGFnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNfYW1vdW50X3BhZ2UoKXtcclxuICAgcmV0dXJuIGFtb3VudF9wYWdlID1NYXRoLmNlaWwoY29uZmlnLmFtb3VudCAvIGNvbmZpZy5saW1pdCkgO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pagination.js\n");

/***/ })

/******/ });