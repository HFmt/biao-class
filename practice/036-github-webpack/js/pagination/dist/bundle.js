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

eval(" \r\n let module_pagination = __webpack_require__(/*! ./pagination */ \"./pagination.js\")\r\n \r\n let pagination = document.getElementById('pagination');\r\n\r\n module_pagination.init({\r\n    pagination: pagination\r\n  , amount: 100\r\n  , limit: 10\r\n  , range: 5\r\n  , current: 6\r\n  , on_change_page: on_change_page\r\n });\r\n\r\n function on_change_page(page, e){\r\n     console.log(page);\r\n }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4gbGV0IG1vZHVsZV9wYWdpbmF0aW9uID0gcmVxdWlyZSgnLi9wYWdpbmF0aW9uJylcclxuIFxyXG4gbGV0IHBhZ2luYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdGlvbicpO1xyXG5cclxuIG1vZHVsZV9wYWdpbmF0aW9uLmluaXQoe1xyXG4gICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvblxyXG4gICwgYW1vdW50OiAxMDBcclxuICAsIGxpbWl0OiAxMFxyXG4gICwgcmFuZ2U6IDVcclxuICAsIGN1cnJlbnQ6IDZcclxuICAsIG9uX2NoYW5nZV9wYWdlOiBvbl9jaGFuZ2VfcGFnZVxyXG4gfSk7XHJcblxyXG4gZnVuY3Rpb24gb25fY2hhbmdlX3BhZ2UocGFnZSwgZSl7XHJcbiAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./pagination.js":
/*!***********************!*\
  !*** ./pagination.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nlet pagination\r\n  , amount_page\r\n  , pagination_list\r\n  , config\r\n  ;\r\n\r\n  let default_config = {\r\n      amount: null,\r\n      limit: null,\r\n      range: 5,\r\n      current: 5\r\n  }\r\nlet output = {\r\n    init: init\r\n}\r\n\r\nfunction init(user_config){\r\n    pagination = user_config.pagination;\r\n    config = Object.assign({}, default_config, user_config);\r\n\r\n    change_page(config.current);\r\n    calc_amount_page();\r\n    render_pagination_structure();\r\n    render_pagination_list();\r\n}   \r\n\r\nfunction render_pagination_structure(){\r\n    pagination.innerHTML = \r\n    `\r\n    <div class=\"pagination-pre\">\r\n        <button class=\"pagination-first\">首页</button>\r\n        <button class=\"pagination-prev\">上一页</button>\r\n    </div>\r\n    <div class=\"pagination-list\"></div>\r\n    <div class=\"pagination-post\">\r\n        <button class=\"pagination-next\">下一页</button>\r\n        <button class=\"pagination-last\">尾页</button>\r\n    </div>\r\n    `\r\n    ;\r\n    pagination_list = pagination.getElementsByClassName('pagination-list')[0];\r\n\r\n    pagination.addEventListener('click', function (e){\r\n        let first_btn = e.target.classList.contains('pagination-first')\r\n          , prev_btn = e.target.classList.contains('pagination-prev')\r\n          , item_btn = e.target.classList.contains('pagination-item')\r\n          , next_btn = e.target.classList.contains('pagination-next')\r\n          , last_btn = e.target.classList.contains('pagination-last')\r\n        if(item_btn){\r\n            let page = parseInt(e.target.dataset.page)\r\n            change_page(page)\r\n        }\r\n        render_pagination_list();\r\n    });\r\n}\r\n\r\nfunction render_pagination_list(){\r\n    pagination_list.innerHTML = '';\r\n\r\n    between = calc_start_and_end_page();\r\n    let start_page = between.start_page\r\n      , end_page = between.end_page\r\n      ;\r\n      console.log(start_page);\r\n      console.log(end_page);\r\n\r\n    for(let i = start_page; i <= end_page; i++){\r\n        let btn = document.createElement('button');\r\n        btn.classList.add('pagination-item')\r\n        btn.innerHTML = i;\r\n        btn.dataset.page = i;\r\n        pagination_list.appendChild(btn);\r\n\r\n        if(config.current == i)\r\n        btn.classList.add('active');\r\n    }\r\n}\r\n\r\nfunction calc_start_and_end_page(){\r\n    let start_page \r\n    , middle = Math.ceil(config.range / 2)\r\n    , end_page = config.range\r\n  ;\r\n  \r\n  if(config.current <= middle){ //左边\r\n    start_page = 1;\r\n    end_page = config.range;\r\n  }\r\n\r\n  else if(config.current >= amount_page - middle){ //右边\r\n    start_page = amount_page - config.range + 1;\r\n    end_page = amount_page;\r\n  }\r\n\r\n  else{   //正常状态（在中间）\r\n    start_page = config.current - middle + 1;\r\n    end_page = config.current + middle - 1;\r\n  }\r\n\r\n  return {start_page: start_page, end_page: end_page}\r\n\r\n}\r\n\r\n\r\nfunction change_page(current){\r\n  config.current = current;\r\n\r\n   if(current < 1)\r\n    config.current = 1;\r\n\r\n    if(current > amount_page)\r\n    config.current = amount_page\r\n\r\n    if(config.current < 1)\r\n    config.current = 1;\r\n\r\n    if(config.on_change_page)\r\n    config.on_change_page(config.current);\r\n\r\n\r\n\r\n//   config.current = page;\r\n\r\n//   /*如果大于最大页面，就强制等于最后一页*/\r\n//   if (page > amount_page)\r\n//     config.current = amount_page;\r\n\r\n//   /*如果小于最小页面，就强制等于第一页*/\r\n//   if (page < 1)\r\n//     config.current = 1;\r\n\r\n//   /*通知使用者*/\r\n//   if (config.on_page_change)\r\n//     config.on_page_change(config.current);\r\n}\r\n\r\nfunction current_page(config){\r\n    \r\n}\r\n\r\nfunction calc_amount_page(){\r\n    return amount_page = Math.ceil(config.amount / config.limit);\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdpbmF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnaW5hdGlvbi5qcz9kMmFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubGV0IHBhZ2luYXRpb25cclxuICAsIGFtb3VudF9wYWdlXHJcbiAgLCBwYWdpbmF0aW9uX2xpc3RcclxuICAsIGNvbmZpZ1xyXG4gIDtcclxuXHJcbiAgbGV0IGRlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICBhbW91bnQ6IG51bGwsXHJcbiAgICAgIGxpbWl0OiBudWxsLFxyXG4gICAgICByYW5nZTogNSxcclxuICAgICAgY3VycmVudDogNVxyXG4gIH1cclxubGV0IG91dHB1dCA9IHtcclxuICAgIGluaXQ6IGluaXRcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCh1c2VyX2NvbmZpZyl7XHJcbiAgICBwYWdpbmF0aW9uID0gdXNlcl9jb25maWcucGFnaW5hdGlvbjtcclxuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRfY29uZmlnLCB1c2VyX2NvbmZpZyk7XHJcblxyXG4gICAgY2hhbmdlX3BhZ2UoY29uZmlnLmN1cnJlbnQpO1xyXG4gICAgY2FsY19hbW91bnRfcGFnZSgpO1xyXG4gICAgcmVuZGVyX3BhZ2luYXRpb25fc3RydWN0dXJlKCk7XHJcbiAgICByZW5kZXJfcGFnaW5hdGlvbl9saXN0KCk7XHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcl9wYWdpbmF0aW9uX3N0cnVjdHVyZSgpe1xyXG4gICAgcGFnaW5hdGlvbi5pbm5lckhUTUwgPSBcclxuICAgIGBcclxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXByZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWZpcnN0XCI+6aaW6aG1PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tcHJldlwiPuS4iuS4gOmhtTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wb3N0XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tbmV4dFwiPuS4i+S4gOmhtTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWxhc3RcIj7lsL7pobU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgO1xyXG4gICAgcGFnaW5hdGlvbl9saXN0ID0gcGFnaW5hdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uLWxpc3QnKVswXTtcclxuXHJcbiAgICBwYWdpbmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGxldCBmaXJzdF9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tZmlyc3QnKVxyXG4gICAgICAgICAgLCBwcmV2X2J0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1wcmV2JylcclxuICAgICAgICAgICwgaXRlbV9idG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24taXRlbScpXHJcbiAgICAgICAgICAsIG5leHRfYnRuID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLW5leHQnKVxyXG4gICAgICAgICAgLCBsYXN0X2J0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1sYXN0JylcclxuICAgICAgICBpZihpdGVtX2J0bil7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wYWdlKVxyXG4gICAgICAgICAgICBjaGFuZ2VfcGFnZShwYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJfcGFnaW5hdGlvbl9saXN0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyX3BhZ2luYXRpb25fbGlzdCgpe1xyXG4gICAgcGFnaW5hdGlvbl9saXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGJldHdlZW4gPSBjYWxjX3N0YXJ0X2FuZF9lbmRfcGFnZSgpO1xyXG4gICAgbGV0IHN0YXJ0X3BhZ2UgPSBiZXR3ZWVuLnN0YXJ0X3BhZ2VcclxuICAgICAgLCBlbmRfcGFnZSA9IGJldHdlZW4uZW5kX3BhZ2VcclxuICAgICAgO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGFydF9wYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZW5kX3BhZ2UpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IHN0YXJ0X3BhZ2U7IGkgPD0gZW5kX3BhZ2U7IGkrKyl7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWl0ZW0nKVxyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBpO1xyXG4gICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2UgPSBpO1xyXG4gICAgICAgIHBhZ2luYXRpb25fbGlzdC5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICBpZihjb25maWcuY3VycmVudCA9PSBpKVxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY19zdGFydF9hbmRfZW5kX3BhZ2UoKXtcclxuICAgIGxldCBzdGFydF9wYWdlIFxyXG4gICAgLCBtaWRkbGUgPSBNYXRoLmNlaWwoY29uZmlnLnJhbmdlIC8gMilcclxuICAgICwgZW5kX3BhZ2UgPSBjb25maWcucmFuZ2VcclxuICA7XHJcbiAgXHJcbiAgaWYoY29uZmlnLmN1cnJlbnQgPD0gbWlkZGxlKXsgLy/lt6bovrlcclxuICAgIHN0YXJ0X3BhZ2UgPSAxO1xyXG4gICAgZW5kX3BhZ2UgPSBjb25maWcucmFuZ2U7XHJcbiAgfVxyXG5cclxuICBlbHNlIGlmKGNvbmZpZy5jdXJyZW50ID49IGFtb3VudF9wYWdlIC0gbWlkZGxlKXsgLy/lj7PovrlcclxuICAgIHN0YXJ0X3BhZ2UgPSBhbW91bnRfcGFnZSAtIGNvbmZpZy5yYW5nZSArIDE7XHJcbiAgICBlbmRfcGFnZSA9IGFtb3VudF9wYWdlO1xyXG4gIH1cclxuXHJcbiAgZWxzZXsgICAvL+ato+W4uOeKtuaAge+8iOWcqOS4remXtO+8iVxyXG4gICAgc3RhcnRfcGFnZSA9IGNvbmZpZy5jdXJyZW50IC0gbWlkZGxlICsgMTtcclxuICAgIGVuZF9wYWdlID0gY29uZmlnLmN1cnJlbnQgKyBtaWRkbGUgLSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtzdGFydF9wYWdlOiBzdGFydF9wYWdlLCBlbmRfcGFnZTogZW5kX3BhZ2V9XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlX3BhZ2UoY3VycmVudCl7XHJcbiAgY29uZmlnLmN1cnJlbnQgPSBjdXJyZW50O1xyXG5cclxuICAgaWYoY3VycmVudCA8IDEpXHJcbiAgICBjb25maWcuY3VycmVudCA9IDE7XHJcblxyXG4gICAgaWYoY3VycmVudCA+IGFtb3VudF9wYWdlKVxyXG4gICAgY29uZmlnLmN1cnJlbnQgPSBhbW91bnRfcGFnZVxyXG5cclxuICAgIGlmKGNvbmZpZy5jdXJyZW50IDwgMSlcclxuICAgIGNvbmZpZy5jdXJyZW50ID0gMTtcclxuXHJcbiAgICBpZihjb25maWcub25fY2hhbmdlX3BhZ2UpXHJcbiAgICBjb25maWcub25fY2hhbmdlX3BhZ2UoY29uZmlnLmN1cnJlbnQpO1xyXG5cclxuXHJcblxyXG4vLyAgIGNvbmZpZy5jdXJyZW50ID0gcGFnZTtcclxuXHJcbi8vICAgLyrlpoLmnpzlpKfkuo7mnIDlpKfpobXpnaLvvIzlsLHlvLrliLbnrYnkuo7mnIDlkI7kuIDpobUqL1xyXG4vLyAgIGlmIChwYWdlID4gYW1vdW50X3BhZ2UpXHJcbi8vICAgICBjb25maWcuY3VycmVudCA9IGFtb3VudF9wYWdlO1xyXG5cclxuLy8gICAvKuWmguaenOWwj+S6juacgOWwj+mhtemdou+8jOWwseW8uuWItuetieS6juesrOS4gOmhtSovXHJcbi8vICAgaWYgKHBhZ2UgPCAxKVxyXG4vLyAgICAgY29uZmlnLmN1cnJlbnQgPSAxO1xyXG5cclxuLy8gICAvKumAmuefpeS9v+eUqOiAhSovXHJcbi8vICAgaWYgKGNvbmZpZy5vbl9wYWdlX2NoYW5nZSlcclxuLy8gICAgIGNvbmZpZy5vbl9wYWdlX2NoYW5nZShjb25maWcuY3VycmVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbnRfcGFnZShjb25maWcpe1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNfYW1vdW50X3BhZ2UoKXtcclxuICAgIHJldHVybiBhbW91bnRfcGFnZSA9IE1hdGguY2VpbChjb25maWcuYW1vdW50IC8gY29uZmlnLmxpbWl0KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pagination.js\n");

/***/ })

/******/ });