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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./assets/images/becky.png":
/*!*********************************!*\
  !*** ./assets/images/becky.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/becky.png\";\n\n//# sourceURL=webpack:///./assets/images/becky.png?");

/***/ }),

/***/ "./assets/images/cocina-ama.png":
/*!**************************************!*\
  !*** ./assets/images/cocina-ama.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/cocina-ama.png\";\n\n//# sourceURL=webpack:///./assets/images/cocina-ama.png?");

/***/ }),

/***/ "./assets/images/larosa.png":
/*!**********************************!*\
  !*** ./assets/images/larosa.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/larosa.png\";\n\n//# sourceURL=webpack:///./assets/images/larosa.png?");

/***/ }),

/***/ "./assets/images/mt-blog.png":
/*!***********************************!*\
  !*** ./assets/images/mt-blog.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mt-blog.png\";\n\n//# sourceURL=webpack:///./assets/images/mt-blog.png?");

/***/ }),

/***/ "./assets/images/sortagram.png":
/*!*************************************!*\
  !*** ./assets/images/sortagram.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/sortagram.png\";\n\n//# sourceURL=webpack:///./assets/images/sortagram.png?");

/***/ }),

/***/ "./assets/images/titanCBD.png":
/*!************************************!*\
  !*** ./assets/images/titanCBD.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/titanCBD.png\";\n\n//# sourceURL=webpack:///./assets/images/titanCBD.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const projects = document.querySelectorAll('.project');\n  projects.forEach(function (currentValue, CurrentIndex, listObj) {\n    const project = projects[CurrentIndex];\n    const expandBtn = project.querySelector('.project-expand');\n    expandBtn.addEventListener('click', () => {\n      const info = project.querySelector('.project-info');\n      info.classList.toggle('show');\n    });\n  });\n  const larosa = document.querySelector('#larosa');\n  larosa.addEventListener('mouseover', () => {\n    document.body.classList.add('bg-larosa');\n  });\n  larosa.addEventListener('mouseleave', () => {\n    document.body.classList.remove('bg-larosa');\n  });\n  const titanCBD = document.querySelector('#titanCBD');\n  titanCBD.addEventListener('mouseover', () => {\n    document.body.classList.add('bg-titanCBD');\n  });\n  titanCBD.addEventListener('mouseleave', () => {\n    document.body.classList.remove('bg-titanCBD');\n  });\n  const becky = document.querySelector('#becky-stylist');\n  becky.addEventListener('mouseover', () => {\n    document.body.classList.add('bg-becky-stylist');\n  });\n  becky.addEventListener('mouseleave', () => {\n    document.body.classList.remove('bg-becky-stylist');\n  });\n  const mtBlog = document.querySelector('#mt-blog');\n  mtBlog.addEventListener('mouseover', () => {\n    document.body.classList.add('bg-mt-blog');\n  });\n  mtBlog.addEventListener('mouseleave', () => {\n    document.body.classList.remove('bg-mt-blog');\n  });\n  const sortagram = document.querySelector('#sortagram');\n  sortagram.addEventListener('mouseover', () => {\n    document.body.classList.add('bg-sortagram');\n  });\n  sortagram.addEventListener('mouseleave', () => {\n    document.body.classList.remove('bg-sortagram');\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/larosa.png */ \"./assets/images/larosa.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/images/titanCBD.png */ \"./assets/images/titanCBD.png\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../assets/images/becky.png */ \"./assets/images/becky.png\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../assets/images/mt-blog.png */ \"./assets/images/mt-blog.png\"));\nvar ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../assets/images/cocina-ama.png */ \"./assets/images/cocina-ama.png\"));\nvar ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../assets/images/sortagram.png */ \"./assets/images/sortagram.png\"));\n// Module\nexports.push([module.i, \"h1 {\\n  font-size: 4rem;\\n  font-family: \\\"Acme\\\", sans-serif; }\\n\\nh2 {\\n  font-size: 3rem;\\n  font-family: \\\"Acme\\\", sans-serif; }\\n\\nh3 {\\n  font-size: 1.6rem;\\n  font-family: \\\"Acme\\\", sans-serif; }\\n\\na, p {\\n  font-size: 1.6em;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  text-decoration: none;\\n  color: #fff; }\\n\\nsection {\\n  width: 90%;\\n  min-height: 100vh;\\n  margin: 0 auto; }\\n\\n.btn {\\n  color: #fff;\\n  background: #1a3759;\\n  font-size: 1.4rem;\\n  padding: 0.5em;\\n  border: 3px solid #fff;\\n  border-radius: 20rem; }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n.bg-larosa {\\n  background: #c59d5f; }\\n\\n.bg-titanCBD {\\n  background: #00aeff; }\\n\\n.bg-becky-stylist {\\n  background: #eb0eb4; }\\n\\n.bg-mt-blog {\\n  background: #00637c; }\\n\\n.bg-cocina-ama {\\n  background: #eb3007; }\\n\\n.bg-sortagram {\\n  background: #333; }\\n\\nhtml {\\n  font-size: 10px;\\n  line-height: 1.5rem; }\\n\\nbody {\\n  background: black;\\n  transition: all .5s ease-in; }\\n\\nheader {\\n  padding: 1rem;\\n  height: 50vh;\\n  position: fixed;\\n  z-index: 2;\\n  width: 100%;\\n  background: black;\\n  background: linear-gradient(163deg, rgba(0, 0, 0, 0.860973) 20%, #111050 40%, #d76108 80%);\\n  color: #fff; }\\n  header #header-logo {\\n    width: 25em; }\\n  header #header-text-box {\\n    position: absolute;\\n    height: 50vh;\\n    width: 50%;\\n    right: 0;\\n    top: 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center; }\\n    header #header-text-box h1 {\\n      padding: 1rem 0;\\n      font-size: 3.5em;\\n      text-transform: uppercase; }\\n    header #header-text-box p {\\n      margin-bottom: .5em; }\\n    header #header-text-box .resume-link {\\n      padding: .5em;\\n      color: #fff;\\n      background: #d76108;\\n      background: linear-gradient(167deg, #d76108 0%, #1a3759 100%);\\n      transition: all .4s ease; }\\n    header #header-text-box .resume-link:hover {\\n      background: #1a3759;\\n      background: linear-gradient(167deg, #1a3759 0%, #d76108 100%); }\\n  header .social-icons {\\n    position: absolute;\\n    bottom: 1rem; }\\n    header .social-icons .social-icon {\\n      margin: 0 1rem;\\n      font-size: 4em;\\n      color: #fff;\\n      transition: all .5s ease-out; }\\n    header .social-icons .social-icon:hover {\\n      color: #1a3759;\\n      cursor: pointer; }\\n  @media screen and (max-width: 485px) {\\n    header #header-logo {\\n      width: 15rem; }\\n    header #header-text-box {\\n      width: 60%; } }\\n\\n.main-content {\\n  position: absolute;\\n  margin: 48vh 5% 5% 5%;\\n  width: 90%;\\n  z-index: 10;\\n  background: transparent;\\n  display: flex;\\n  flex-direction: row; }\\n  .main-content .about-content {\\n    padding-bottom: 100px;\\n    width: 40%;\\n    color: #fff; }\\n    .main-content .about-content .about-me {\\n      padding: 3em;\\n      background: #1a3759; }\\n      .main-content .about-content .about-me h1 {\\n        margin-bottom: 1em; }\\n    .main-content .about-content .skills {\\n      padding: 3em;\\n      width: 100%;\\n      background: #d76108; }\\n      .main-content .about-content .skills h1 {\\n        margin: 0 0 1em 0; }\\n  .main-content .projects-content {\\n    width: 60%;\\n    background: #fff; }\\n    .main-content .projects-content .latest-projects {\\n      right: 5rem;\\n      padding: 1.2rem;\\n      position: absolute;\\n      z-index: 2;\\n      background: #1a3759;\\n      background: linear-gradient(167deg, #1a3759 0%, #d76108 100%);\\n      color: #fff;\\n      transform: translateY(-50%); }\\n    .main-content .projects-content .project {\\n      height: 50vh;\\n      color: white;\\n      position: relative; }\\n      .main-content .projects-content .project .container {\\n        height: 100%;\\n        width: 100%;\\n        overflow: hidden; }\\n      .main-content .projects-content .project .project-buttons {\\n        position: absolute;\\n        top: 10%;\\n        right: 0;\\n        z-index: 51;\\n        display: flex;\\n        flex-direction: column;\\n        transform: translateX(50%); }\\n        .main-content .projects-content .project .project-buttons .project-btn {\\n          margin: 1.5rem 0;\\n          padding: .5rem;\\n          font-size: 2rem;\\n          display: flex;\\n          flex-direction: row;\\n          color: #fff;\\n          background: #1a3759;\\n          background: linear-gradient(167deg, #1a3759 0%, #d76108 100%);\\n          border: 5px solid #1a3759;\\n          border-radius: 20px;\\n          cursor: pointer; }\\n        .main-content .projects-content .project .project-buttons .project-btn:hover {\\n          background: #d76108;\\n          background: linear-gradient(167deg, #d76108 0%, #1a3759 100%); }\\n      .main-content .projects-content .project .project-info {\\n        height: 100%;\\n        width: 100%;\\n        z-index: 0;\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: space-around;\\n        align-items: center;\\n        color: white;\\n        transform: translateX(100%);\\n        transition: all .6s ease-in; }\\n        .main-content .projects-content .project .project-info img {\\n          max-height: 80%;\\n          width: 30%;\\n          object-fit: contain; }\\n        .main-content .projects-content .project .project-info .project-info-text {\\n          padding: 0.5em;\\n          width: 70%; }\\n          .main-content .projects-content .project .project-info .project-info-text .project-stack {\\n            padding: .5em;\\n            top: 0;\\n            left: 0;\\n            max-width: 70%;\\n            position: absolute;\\n            background: #1a3759;\\n            font-size: 1.2em; }\\n          .main-content .projects-content .project .project-info .project-info-text p {\\n            margin-bottom: 0.5em; }\\n          .main-content .projects-content .project .project-info .project-info-text .project-links {\\n            width: 60%;\\n            display: flex;\\n            justify-content: space-around;\\n            position: absolute;\\n            bottom: .5em; }\\n        .main-content .projects-content .project .project-info.show {\\n          transform: translateX(0); }\\n    .main-content .projects-content #larosa {\\n      border: 10px solid #c59d5f;\\n      background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat center top;\\n      background-size: cover; }\\n      .main-content .projects-content #larosa .project-info {\\n        background: #c59d5f; }\\n    .main-content .projects-content #titanCBD {\\n      border: 10px solid #00aeff;\\n      background: url(\" + ___CSS_LOADER_URL___1___ + \") no-repeat center top;\\n      background-size: cover; }\\n      .main-content .projects-content #titanCBD .project-info {\\n        background: #00aeff; }\\n    .main-content .projects-content #becky-stylist {\\n      border: 10px solid #eb0eb4;\\n      background: url(\" + ___CSS_LOADER_URL___2___ + \") no-repeat center top;\\n      background-size: cover; }\\n      .main-content .projects-content #becky-stylist .project-info {\\n        background: #eb0eb4; }\\n    .main-content .projects-content #mt-blog {\\n      border: 10px solid #00637c;\\n      background: url(\" + ___CSS_LOADER_URL___3___ + \") no-repeat center;\\n      background-size: cover; }\\n      .main-content .projects-content #mt-blog .project-info {\\n        background: #00637c; }\\n    .main-content .projects-content #cocina-ama {\\n      border: 10px solid #eb3007;\\n      background: url(\" + ___CSS_LOADER_URL___4___ + \") no-repeat center top;\\n      background-size: cover; }\\n      .main-content .projects-content #cocina-ama .project-info {\\n        background: #eb3007; }\\n    .main-content .projects-content #sortagram {\\n      border: 10px solid #333;\\n      background: url(\" + ___CSS_LOADER_URL___5___ + \") no-repeat center top;\\n      background-size: cover; }\\n      .main-content .projects-content #sortagram .project-info {\\n        background: #333; }\\n  @media screen and (min-width: 486px) and (max-width: 925px) {\\n    .main-content {\\n      flex-direction: column;\\n      padding-bottom: 10vh; }\\n      .main-content .about-content {\\n        width: 100%; }\\n      .main-content .projects-content {\\n        width: 100%; }\\n        .main-content .projects-content .project {\\n          height: 75vh; }\\n        .main-content .projects-content .project .project-info .project-info-text .project-stack {\\n          max-width: 100%; } }\\n  @media screen and (max-width: 485px) {\\n    .main-content {\\n      flex-direction: column;\\n      padding-bottom: 10vh; }\\n      .main-content h1 {\\n        font-size: 2.5rem; }\\n      .main-content p {\\n        font-size: 1.4rem; }\\n      .main-content .about-content {\\n        width: 100%; }\\n      .main-content .projects-content {\\n        width: 100%; }\\n        .main-content .projects-content .project {\\n          height: 100vh; }\\n        .main-content .projects-content .project .project-info .project-info-text .project-stack {\\n          max-width: 100%; }\\n        .main-content .projects-content .project .project-info .project-info-text .project-links {\\n          width: 100%; } }\\n\\nfooter {\\n  width: 100%;\\n  color: black;\\n  position: fixed;\\n  bottom: 1rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem; }\\n  footer #footer-logo {\\n    position: absolute;\\n    left: 10rem;\\n    bottom: 0;\\n    width: 25rem;\\n    transform: translateY(30%); }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ })

/******/ });