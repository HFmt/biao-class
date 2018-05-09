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

eval("\r\nlet list= []  // list 是一个数组\r\n  , el         // el 是 history 容器\r\n  , click_history   // click_history 是触发点击 history 的方法\r\n  , click_delete // click_delete 是触发点击删除 history 的方法\r\n  ; \r\n\r\nlet output = {\r\n    init: init\r\n  , add: add\r\n  , show_histoty: show_histoty\r\n  , hide_histoty: hide_histoty\r\n}\r\n\r\n\r\nfunction init(config){\r\n    el = config.el;\r\n    click_history = config.click_history;\r\n    click_delete = config.click_delete;\r\n\r\n    sync_to_ladle();\r\n    render();\r\n}\r\n\r\n// 删除 history 的方法\r\nfunction remove(keyword){               \r\n    if(list.indexOf(keyword) == -1)     // 判断传进的 history 是否在 list 数组里面\r\n        return false;                   \r\n\r\n    list.splice(list.indexOf(keyword), 1); //在里面就删除对应的 history\r\n    render();                          \r\n    sync_to_sore();                     \r\n}\r\n\r\n// 把 history 添加进 list 数组里面\r\nfunction add(keyword){\r\n    list.push(keyword);\r\n    render();\r\n    sync_to_sore();\r\n}\r\n\r\n // 渲染 history 容器里的数据\r\nfunction render(){\r\n    el.innerHTML = '';\r\n    list.forEach(function (keyword){\r\n        let el_history = document.createElement('div');\r\n        el_history.innerHTML = \r\n        `\r\n        <div class=\"text\">${keyword}</div>\r\n        <div class=\"tool\">\r\n        <span class=\"delete\">删除</span>\r\n        </div>\r\n        `\r\n        ;\r\n        el_history.classList.add('history');\r\n        el.appendChild(el_history);\r\n\r\n        let del_history = el_history.getElementsByClassName('delete')[0];\r\n\r\n        el_history.addEventListener('click', function(e){\r\n            if(click_history)\r\n            click_history(keyword, e);\r\n        });\r\n\r\n        del_history.addEventListener('click', function(e){\r\n            if(click_delete)\r\n            click_delete(keyword, e);\r\n\r\n        setTimeout(function (){\r\n            remove(keyword);\r\n        }, 0);\r\n        });\r\n    });\r\n}\r\n\r\n//  把 list 数组 存储进 localStorage 里面 [用 JSON.stringify() 方法存储]\r\nfunction sync_to_sore(){\r\n    localStorage.setItem('Asam', JSON.stringify(list));\r\n}\r\n\r\n// 取出 localStorage 里面的 list 数组 [用 JSON.parse() 方法取出]\r\nfunction sync_to_ladle(){\r\n    list =  JSON.parse(localStorage.getItem('Asam'))  || [];\r\n}\r\n\r\nfunction show_histoty(){\r\n    el.hidden = false;\r\n}\r\n\r\nfunction hide_histoty(){\r\n    el.hidden = true;\r\n}\r\n\r\n\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGlzdG9yeS5qcz80ODZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgbGlzdD0gW10gIC8vIGxpc3Qg5piv5LiA5Liq5pWw57uEXHJcbiAgLCBlbCAgICAgICAgIC8vIGVsIOaYryBoaXN0b3J5IOWuueWZqFxyXG4gICwgY2xpY2tfaGlzdG9yeSAgIC8vIGNsaWNrX2hpc3Rvcnkg5piv6Kem5Y+R54K55Ye7IGhpc3Rvcnkg55qE5pa55rOVXHJcbiAgLCBjbGlja19kZWxldGUgLy8gY2xpY2tfZGVsZXRlIOaYr+inpuWPkeeCueWHu+WIoOmZpCBoaXN0b3J5IOeahOaWueazlVxyXG4gIDsgXHJcblxyXG5sZXQgb3V0cHV0ID0ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gICwgYWRkOiBhZGRcclxuICAsIHNob3dfaGlzdG90eTogc2hvd19oaXN0b3R5XHJcbiAgLCBoaWRlX2hpc3RvdHk6IGhpZGVfaGlzdG90eVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4gICAgZWwgPSBjb25maWcuZWw7XHJcbiAgICBjbGlja19oaXN0b3J5ID0gY29uZmlnLmNsaWNrX2hpc3Rvcnk7XHJcbiAgICBjbGlja19kZWxldGUgPSBjb25maWcuY2xpY2tfZGVsZXRlO1xyXG5cclxuICAgIHN5bmNfdG9fbGFkbGUoKTtcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG4vLyDliKDpmaQgaGlzdG9yeSDnmoTmlrnms5VcclxuZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpeyAgICAgICAgICAgICAgIFxyXG4gICAgaWYobGlzdC5pbmRleE9mKGtleXdvcmQpID09IC0xKSAgICAgLy8g5Yik5pat5Lyg6L+b55qEIGhpc3Rvcnkg5piv5ZCm5ZyoIGxpc3Qg5pWw57uE6YeM6Z2iXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2Yoa2V5d29yZCksIDEpOyAvL+WcqOmHjOmdouWwseWIoOmZpOWvueW6lOeahCBoaXN0b3J5XHJcbiAgICByZW5kZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgc3luY190b19zb3JlKCk7ICAgICAgICAgICAgICAgICAgICAgXHJcbn1cclxuXHJcbi8vIOaKiiBoaXN0b3J5IOa3u+WKoOi/myBsaXN0IOaVsOe7hOmHjOmdolxyXG5mdW5jdGlvbiBhZGQoa2V5d29yZCl7XHJcbiAgICBsaXN0LnB1c2goa2V5d29yZCk7XHJcbiAgICByZW5kZXIoKTtcclxuICAgIHN5bmNfdG9fc29yZSgpO1xyXG59XHJcblxyXG4gLy8g5riy5p+TIGhpc3Rvcnkg5a655Zmo6YeM55qE5pWw5o2uXHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgZWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpe1xyXG4gICAgICAgIGxldCBlbF9oaXN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxfaGlzdG9yeS5pbm5lckhUTUwgPSBcclxuICAgICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj4ke2tleXdvcmR9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiPuWIoOmZpDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGVsX2hpc3RvcnkuY2xhc3NMaXN0LmFkZCgnaGlzdG9yeScpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGVsX2hpc3RvcnkpO1xyXG5cclxuICAgICAgICBsZXQgZGVsX2hpc3RvcnkgPSBlbF9oaXN0b3J5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZScpWzBdO1xyXG5cclxuICAgICAgICBlbF9oaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGNsaWNrX2hpc3RvcnkpXHJcbiAgICAgICAgICAgIGNsaWNrX2hpc3Rvcnkoa2V5d29yZCwgZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbF9oaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGNsaWNrX2RlbGV0ZSlcclxuICAgICAgICAgICAgY2xpY2tfZGVsZXRlKGtleXdvcmQsIGUpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gIOaKiiBsaXN0IOaVsOe7hCDlrZjlgqjov5sgbG9jYWxTdG9yYWdlIOmHjOmdoiBb55SoIEpTT04uc3RyaW5naWZ5KCkg5pa55rOV5a2Y5YKoXVxyXG5mdW5jdGlvbiBzeW5jX3RvX3NvcmUoKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBc2FtJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG59XHJcblxyXG4vLyDlj5blh7ogbG9jYWxTdG9yYWdlIOmHjOmdoueahCBsaXN0IOaVsOe7hCBb55SoIEpTT04ucGFyc2UoKSDmlrnms5Xlj5blh7pdXHJcbmZ1bmN0aW9uIHN5bmNfdG9fbGFkbGUoKXtcclxuICAgIGxpc3QgPSAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXNhbScpKSAgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dfaGlzdG90eSgpe1xyXG4gICAgZWwuaGlkZGVuID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVfaGlzdG90eSgpe1xyXG4gICAgZWwuaGlkZGVuID0gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./history.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(" let history = __webpack_require__(/*! ./history */ \"./history.js\");\r\n\r\n\r\n let search_form = document.getElementById('search-form')\r\n   , search_input = document.getElementById('search-input')\r\n   , history_list = document.getElementById('history-list');\r\n   ;\r\n   \r\n // 传入回调函数\r\n history.init({\r\n    el: history_list\r\n//   , click_history: click_history\r\n//   , click_delete: click_delete\r\n });\r\n\r\n search_submit();\r\n click_input();\r\n click_DOM();\r\n\r\n function replace_value() {\r\n    let str = search_input.value.replace(/(^\\s*)|(\\s*$)/g, '');\r\n    return  str == '' || str == null || str == undefined;\r\n}\r\n\r\nfunction search_submit(){\r\n    search_form.addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        if(replace_value())\r\n            return;\r\n\r\n        history.add(search_input.value);\r\n        // history.show_histoty();\r\n    });\r\n}\r\n\r\n\r\nfunction click_input(){\r\n    search_input.addEventListener('click', function (e) {\r\n        if(history_list.innerHTML == ''){\r\n            history.hide_histoty();\r\n            return;\r\n        }\r\n        history.show_histoty();\r\n    });\r\n}\r\n\r\nfunction click_DOM(){\r\n    document.addEventListener('click', function (e) {\r\n        \r\n            if(e.target.closest('#search-form') || e.target.closest('#history-list'))\r\n            return;\r\n          \r\n            history.hide_histoty();\r\n       \r\n    });\r\n}\r\n\r\nfunction click_history(key, e){\r\n    console.log(key);\r\n}\r\n\r\nfunction click_delete(key, e){\r\n    console.log(key);\r\n}\r\n\r\n\r\n\r\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiIGxldCBoaXN0b3J5ID0gcmVxdWlyZSgnLi9oaXN0b3J5Jyk7XHJcblxyXG5cclxuIGxldCBzZWFyY2hfZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpXHJcbiAgICwgc2VhcmNoX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpXHJcbiAgICwgaGlzdG9yeV9saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktbGlzdCcpO1xyXG4gICA7XHJcbiAgIFxyXG4gLy8g5Lyg5YWl5Zue6LCD5Ye95pWwXHJcbiBoaXN0b3J5LmluaXQoe1xyXG4gICAgZWw6IGhpc3RvcnlfbGlzdFxyXG4vLyAgICwgY2xpY2tfaGlzdG9yeTogY2xpY2tfaGlzdG9yeVxyXG4vLyAgICwgY2xpY2tfZGVsZXRlOiBjbGlja19kZWxldGVcclxuIH0pO1xyXG5cclxuIHNlYXJjaF9zdWJtaXQoKTtcclxuIGNsaWNrX2lucHV0KCk7XHJcbiBjbGlja19ET00oKTtcclxuXHJcbiBmdW5jdGlvbiByZXBsYWNlX3ZhbHVlKCkge1xyXG4gICAgbGV0IHN0ciA9IHNlYXJjaF9pbnB1dC52YWx1ZS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgJycpO1xyXG4gICAgcmV0dXJuICBzdHIgPT0gJycgfHwgc3RyID09IG51bGwgfHwgc3RyID09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoX3N1Ym1pdCgpe1xyXG4gICAgc2VhcmNoX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocmVwbGFjZV92YWx1ZSgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGhpc3RvcnkuYWRkKHNlYXJjaF9pbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgLy8gaGlzdG9yeS5zaG93X2hpc3RvdHkoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xpY2tfaW5wdXQoKXtcclxuICAgIHNlYXJjaF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYoaGlzdG9yeV9saXN0LmlubmVySFRNTCA9PSAnJyl7XHJcbiAgICAgICAgICAgIGhpc3RvcnkuaGlkZV9oaXN0b3R5KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlzdG9yeS5zaG93X2hpc3RvdHkoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGlja19ET00oKXtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaC1mb3JtJykgfHwgZS50YXJnZXQuY2xvc2VzdCgnI2hpc3RvcnktbGlzdCcpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaGlzdG9yeS5oaWRlX2hpc3RvdHkoKTtcclxuICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrX2hpc3Rvcnkoa2V5LCBlKXtcclxuICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrX2RlbGV0ZShrZXksIGUpe1xyXG4gICAgY29uc29sZS5sb2coa2V5KTtcclxufVxyXG5cclxuXHJcblxyXG4gIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });