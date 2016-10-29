(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (http://piecioshka.pl)
	 * @name underscore.slice
	 * @description Underscore.js slice array to deep-levels array
	 * @version 1.2.0
	 * @license MIT
	 * @example
	 *
	 *   _.slice([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
	 */
	
	'use strict';
	
	function forEach(list, iterator, context) {
	    for (var i = 0; i < list.length; i++) {
	        iterator.call(context || this, list[i], i);
	    }
	}
	
	/**
	 * Create array with passed deeps level.
	 *
	 * @param {Array} list
	 * @param {number} [size]
	 * @returns {Array}
	 */
	function slice(list, size) {
	    list = list || [];
	    size = size || 2;
	
	    var nestedList = [];
	    var nestedItem = [];
	
	    forEach(list, function (item) {
	        nestedItem.push(item);
	        var isListFulled = (nestedItem.length === size);
	
	        if (isListFulled) {
	            nestedList.push(nestedItem);
	            nestedItem = [];
	        }
	    }, this);
	
	    var isListNotEmpty = (nestedItem.length > 0);
	
	    if (isListNotEmpty) {
	        nestedList.push(nestedItem);
	    }
	
	    return nestedList;
	}
	
	module.exports = slice;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=underscore.slice.js.map