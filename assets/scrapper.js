/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scrapper.js":
/*!*************************!*\
  !*** ./src/scrapper.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domtastic */ "./node_modules/domtastic/src/index.js");

console.log('hello from Fb-Leads script pages');

/***/ }),

/***/ "./node_modules/domtastic/src/array.js":
/*!*********************************************!*\
  !*** ./node_modules/domtastic/src/array.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "indexOf": () => (/* binding */ indexOf),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "pop": () => (/* binding */ pop),
/* harmony export */   "push": () => (/* binding */ push),
/* harmony export */   "reduce": () => (/* binding */ reduce),
/* harmony export */   "reduceRight": () => (/* binding */ reduceRight),
/* harmony export */   "reverse": () => (/* binding */ reverse),
/* harmony export */   "shift": () => (/* binding */ shift),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "unshift": () => (/* binding */ unshift)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module Array
 */




const ArrayProto = Array.prototype;

/**
 * Checks if the given callback returns a true(-ish) value for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Boolean} Whether each element passed the callback check.
 * @example
 *     // Test whether every element in the collection has the "active" attribute
 *     $('.items').every(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const every = ArrayProto.every;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const filter = function(selector, thisArg) {
  const callback = typeof selector === 'function' ? selector : element => (0,_selector_index__WEBPACK_IMPORTED_MODULE_1__.matches)(element, selector);
  return (0,_selector_index__WEBPACK_IMPORTED_MODULE_1__.$)(ArrayProto.filter.call(this, callback, thisArg));
};

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(element) {
 *         element.style.color = 'evergreen';
 *     );
 */

const forEach = function(callback, thisArg) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, callback, thisArg);
};

const each = forEach;

/**
 * Returns the index of an element in the collection.
 *
 * @param {Node} element
 * @return {Number} The zero-based index, -1 if not found.
 * @example
 *     $('.items').indexOf(element); // 2
 */

const indexOf = ArrayProto.indexOf;

/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     // Create a new array with the attribute value of each element:
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 */

const map = ArrayProto.map;

/**
 * Removes the last element from the collection, and returns that element.
 *
 * @return {Object} The last element from the collection.
 * @example
 *     var lastElement = $('.items').pop();
 */

const pop = ArrayProto.pop;

/**
 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').push(element);
 */

const push = ArrayProto.push;

/**
 * Apply a function against each element in the collection, and this accumulator function has to reduce it
 * to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Calculate the combined height of elements:
 *     $('.items').reduce(function(previousValue, element, index, collection) {
 *         return previousValue + element.clientHeight;
 *     }, 0);
 */

const reduce = ArrayProto.reduce;

/**
 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
 * to reduce it to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Concatenate the text of elements in reversed order:
 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
 *         return previousValue + element.textContent;
 *     }, '');
 */

const reduceRight = ArrayProto.reduceRight;

/**
 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
 *
 * @return {Object} The wrapped collection, reversed
 * @chainable
 * @example
 *     $('.items').reverse();
 */

const reverse = function() {
  return (0,_selector_index__WEBPACK_IMPORTED_MODULE_1__.$)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(this).reverse());
};

/**
 * Removes the first element from the collection, and returns that element.
 *
 * @return {Object} The first element from the collection.
 * @example
 *     var firstElement = $('.items').shift();
 */

const shift = ArrayProto.shift;

/**
 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @return {Boolean} Whether any element passed the callback check.
 * @example
 *     $('.items').some(function(element) {
 *         return element.hasAttribute('active')
 *     }); // true/false
 */

const some = ArrayProto.some;

/**
 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').unshift(element);
 */

const unshift = ArrayProto.unshift;


/***/ }),

/***/ "./node_modules/domtastic/src/baseClass.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/baseClass.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module BaseClass
 */




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(api) {

  /**
   * Provide subclass for classes or components to extend from.
   * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
   *
   * @return {Class} The class to extend from, including all `$.fn` methods.
   * @example
   *     import { BaseClass } from  'domtastic';
   *
   *     class MyComponent extends BaseClass {
   *         doSomething() {
   *             return this.addClass('.foo');
   *         }
   *     }
   *
   *     let component = new MyComponent('body');
   *     component.doSomething();
   *
   * @example
   *     import $ from  'domtastic';
   *
   *     class MyComponent extends $.BaseClass {
   *         progress(value) {
   *             return this.attr('data-progress', value);
   *         }
   *     }
   *
   *     let component = new MyComponent(document.body);
   *     component.progress('ive').append('<p>enhancement</p>');
   */

  class BaseClass {
    constructor() {
      _selector_index__WEBPACK_IMPORTED_MODULE_0__.DOMtastic.call(this, (0,_selector_index__WEBPACK_IMPORTED_MODULE_0__.$)(...arguments));
    }
  }
  (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)(BaseClass.prototype, api);
  return BaseClass;
}


/***/ }),

/***/ "./node_modules/domtastic/src/css.js":
/*!*******************************************!*\
  !*** ./node_modules/domtastic/src/css.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module CSS
 */



const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

const camelize = value => value.replace(/-([\da-z])/gi, (matches, letter) => letter.toUpperCase());

const dasherize = value => value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
 *
 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
 * @param {String} [value] The value of the style property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').css('padding-left'); // get
 *     $('.item').css('color', '#f00'); // set
 *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
 */

const css = function(key, value) {

  let styleProps, prop, val;

  if(typeof key === 'string') {
    key = camelize(key);

    if(typeof value === 'undefined') {
      let element = this.nodeType ? this : this[0];
      if(element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) : val;
      }
      return undefined;
    }

    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for(prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }

  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    for(prop in styleProps) {
      if(styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });

  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/attr.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/attr.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Attr
 */



/**
 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
 *
 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
 * @param {String} [value] The value of the attribute to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').attr('attrName'); // get
 *     $('.item').attr('attrName', 'attrValue'); // set
 *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
 */

const attr = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(typeof key === 'object') {
      for(let attr in key) {
        element.setAttribute(attr, key[attr]);
      }
    } else {
      element.setAttribute(key, value);
    }
  });
};

/**
 * Remove attribute from each element in the collection.
 *
 * @param {String} key Attribute name
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeAttr('attrName');
 */

const removeAttr = function(key) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.removeAttribute(key));
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/class.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/class.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "hasClass": () => (/* binding */ hasClass)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Class
 */



/**
 * Add a class to the element(s)
 *
 * @param {String} value Space-separated class name(s) to add to the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').addClass('bar');
 *     $('.item').addClass('bar foo');
 */

const addClass = function(value) {
  if(value && value.length) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(value.split(' '), _each.bind(this, 'add'));
  }
  return this;
};

/**
 * Remove a class from the element(s)
 *
 * @param {String} value Space-separated class name(s) to remove from the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeClass('bar');
 *     $('.items').removeClass('bar foo');
 */

const removeClass = function(value) {
  if(value && value.length) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(value.split(' '), _each.bind(this, 'remove'));
  }
  return this;
};

/**
 * Toggle a class at the element(s)
 *
 * @param {String} value Space-separated class name(s) to toggle at the element(s).
 * @param {Boolean} [state] A Boolean value to determine whether the class should be added or removed.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').toggleClass('bar');
 *     $('.item').toggleClass('bar foo');
 *     $('.item').toggleClass('bar', true);
 */

const toggleClass = function(value, state) {
  if(value && value.length) {
    const action = typeof state === 'boolean' ? state ? 'add' : 'remove' : 'toggle';
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(value.split(' '), _each.bind(this, action));
  }
  return this;
};

/**
 * Check if the element(s) have a class.
 *
 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
 * returns `true` if _any_ of them contains the class name.
 * @return {Boolean} Whether the element's class attribute contains the class name.
 * @example
 *     $('.item').hasClass('bar');
 */

const hasClass = function(value) {
  return (this.nodeType ? [this] : this).some(element => element.classList.contains(value));
};

/**
 * Specialized iteration, applying `fn` of the classList API to each element.
 *
 * @param {String} fnName
 * @param {String} className
 * @private
 */

const _each = function(fnName, className) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.classList[fnName](className));
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/contains.js":
/*!****************************************************!*\
  !*** ./node_modules/domtastic/src/dom/contains.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contains": () => (/* binding */ contains)
/* harmony export */ });
/**
 * @module contains
 */

/**
 * Test whether an element contains another element in the DOM.
 *
 * @param {Element} container The element that may contain the other element.
 * @param {Element} element The element that may be a descendant of the other element.
 * @return {Boolean} Whether the `container` element contains the `element`.
 * @example
 *     $.contains(parentElement, childElement); // true/false
 */

const contains = (container, element) => {
  if(!container || !element || container === element) {
    return false;
  } else if(container.contains) {
    return container.contains(element);
  } else if(container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/data.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "prop": () => (/* binding */ prop)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Data
 */



const isSupportsDataSet = typeof document !== 'undefined' && 'dataset' in document.documentElement;
const DATAKEYPROP = isSupportsDataSet ? 'dataset' : '__DOMTASTIC_DATA__';

const camelize = str => str.replace(/-+(.)?/g, (match, char) => char ? char.toUpperCase() : '');

/**
 * Get data from first element, or set data for each element in the collection.
 *
 * @param {String} key The key for the data to get or set.
 * @param {String} [value] The data to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').data('attrName'); // get
 *     $('.item').data('attrName', {any: 'data'}); // set
 */

const data = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && DATAKEYPROP in element ? element[DATAKEYPROP][camelize(key)] : undefined;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(!isSupportsDataSet) {
      element[DATAKEYPROP] = element[DATAKEYPROP] || {};
    }

    element[DATAKEYPROP][camelize(key)] = value;
  });
};

/**
 * Get property from first element, or set property on each element in the collection.
 *
 * @param {String} key The name of the property to get or set.
 * @param {String} [value] The value of the property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prop('attrName'); // get
 *     $('.item').prop('attrName', 'attrValue'); // set
 */

const prop = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element[key] = value);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/extra.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/extra.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTo": () => (/* binding */ appendTo),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "replaceWith": () => (/* binding */ replaceWith),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "val": () => (/* binding */ val)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM (extra)
 */





/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

const appendTo = function(element) {
  const context = typeof element === 'string' ? (0,_selector_index__WEBPACK_IMPORTED_MODULE_2__.$)(element) : element;
  _index__WEBPACK_IMPORTED_MODULE_1__.append.call(context, this);
  return this;
};

/*
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

const empty = function() {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.innerHTML = '');
};

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

const remove = function() {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

/**
 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
 *
 * @return {Array} Array containing the replaced elements
 */

const replaceWith = function() {
  return _index__WEBPACK_IMPORTED_MODULE_1__.before.apply(this, arguments).remove();
};

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

const text = function(value) {

  if(value === undefined) {
    return this[0].textContent;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.textContent = '' + value);
};

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').val('New value');
 */

const val = function(value) {

  if(value === undefined) {
    return this.length > 0 ? this[0].value : undefined;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.value = value);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/html.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/html.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module HTML
 */



/*
 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
 *
 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 */

const html = function(fragment) {

  if(fragment === undefined) {
    const element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => element.innerHTML = fragment);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/index.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "before": () => (/* binding */ before),
/* harmony export */   "after": () => (/* binding */ after),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "_clone": () => (/* binding */ _clone),
/* harmony export */   "_each": () => (/* binding */ _each)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM
 */




const forEach = Array.prototype.forEach;

/**
 * Append element(s) to each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to append to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').append('<p>more</p>');
 */

const append = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if(element instanceof Node) {
        this.appendChild(element);
      } else {
        const elements = element instanceof NodeList ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(element) : element;
        forEach.call(elements, this.appendChild.bind(this));
      }
    }
  } else {
    _each(this, append, element);
  }
  return this;
};

/**
 * Place element(s) at the beginning of each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prepend('<span>start</span>');
 */

const prepend = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if(element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        let elements = element instanceof NodeList ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(element) : element;
        forEach.call(elements.reverse(), prepend.bind(this));
      }
    }
  } else {
    _each(this, prepend, element);
  }
  return this;
};

/**
 * Place element(s) before each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').before('<p>prefix</p>');
 */

const before = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        const elements = element instanceof NodeList ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(element) : element;
        forEach.call(elements, before.bind(this));
      }
    }
  } else {
    _each(this, before, element);
  }
  return this;
};

/**
 * Place element(s) after each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').after('<span>suf</span><span>fix</span>');
 */

const after = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        const elements = element instanceof NodeList ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(element) : element;
        forEach.call(elements.reverse(), after.bind(this));
      }
    }
  } else {
    _each(this, after, element);
  }
  return this;
};

/**
 * Clone a wrapped object.
 *
 * @return {Object} Wrapped collection of cloned nodes.
 * @example
 *     $(element).clone();
 */

const clone = function() {
  return (0,_selector_index__WEBPACK_IMPORTED_MODULE_1__.$)(_clone(this));
};

/**
 * Clone an object
 *
 * @param {String|Node|NodeList|Array} element The element(s) to clone.
 * @return {String|Node|NodeList|Array} The cloned element(s)
 * @private
 */

const _clone = element => {
  if(typeof element === 'string') {
    return element;
  } else if(element instanceof Node) {
    return element.cloneNode(true);
  } else if('length' in element) {
    return [].map.call(element, el => el.cloneNode(true));
  }
  return element;
};

/**
 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
 *
 * @param {NodeList|Array} collection
 * @param {Function} fn
 * @param {Node} element
 * @private
 */

const _each = (collection, fn, element) => {
  let l = collection.length;
  while(l--) {
    const elm = l === 0 ? element : _clone(element);
    fn.call(collection[l], elm);
  }
};


/***/ }),

/***/ "./node_modules/domtastic/src/event/index.js":
/*!***************************************************!*\
  !*** ./node_modules/domtastic/src/event/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "getHandlers": () => (/* binding */ getHandlers),
/* harmony export */   "clearHandlers": () => (/* binding */ clearHandlers),
/* harmony export */   "proxyHandler": () => (/* binding */ proxyHandler),
/* harmony export */   "delegateHandler": () => (/* binding */ delegateHandler),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "unbind": () => (/* binding */ unbind)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/closest */ "./node_modules/domtastic/src/selector/closest.js");
/**
 * @module Events
 */




/**
 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
 *
 * @param {String} eventNames List of space-separated event types to be added to the element(s)
 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @param {Boolean} once=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').on('click', callback);
 *     $('.container').on('click focus', '.item', handler);
 */

const on = function(eventNames, selector, handler, useCapture, once) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    eventListener;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    eventListener = proxyHandler(handler);

    (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {

      if(selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }

      if(once) {
        const listener = eventListener;
        eventListener = event => {
          off.call(element, eventNames, selector, handler, useCapture);
          listener.call(element, event);
        };
      }

      element.addEventListener(eventName, eventListener, useCapture || false);

      getHandlers(element).push({
        eventName,
        handler,
        eventListener,
        selector,
        namespace
      });
    });

  }, this);

  return this;
};

/**
 * Shorthand for `removeEventListener`.
 *
 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').off('click', callback);
 *     $('#my-element').off('myEvent myOtherEvent');
 *     $('.item').off();
 */

const off = function(eventNames = '', selector, handler, useCapture) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    handlers;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {

      handlers = getHandlers(element);

      (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(handlers.filter(item => {
        return (
          (!eventName || item.eventName === eventName) &&
          (!namespace || item.namespace === namespace) &&
          (!handler || item.handler === handler) &&
          (!selector || item.selector === selector)
        );
      }), item => {
        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });

      if(!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if(handlers.length === 0) {
        clearHandlers(element);
      }

    });

  }, this);

  return this;
};

/**
 * Add event listener and execute the handler at most once per element.
 *
 * @param eventNames
 * @param selector
 * @param handler
 * @param useCapture
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').one('click', callback);
 */

const one = function(eventNames, selector, handler, useCapture) {
  return on.call(this, eventNames, selector, handler, useCapture, 1);
};

/**
 * Get event handlers from an element
 *
 * @private
 * @param {Node} element
 * @return {Array}
 */

const eventKeyProp = '__domtastic_event__';
let id = 1;
let handlers = {};
let unusedKeys = [];

const getHandlers = element => {
  if(!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  const key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
};

/**
 * Clear event handlers for an element
 *
 * @private
 * @param {Node} element
 */

const clearHandlers = element => {
  const key = element[eventKeyProp];
  if(handlers[key]) {
    handlers[key] = null;
    element[eventKeyProp] = null;
    unusedKeys.push(key);
  }
};

/**
 * Function to create a handler that augments the event object with some extra methods,
 * and executes the callback with the event and the event data (i.e. `event.detail`).
 *
 * @private
 * @param handler Callback to execute as `handler(event, data)`
 * @return {Function}
 */

const proxyHandler = handler => function(event) {
  return handler.call(this, augmentEvent(event));
};

const eventMethods = {
  preventDefault: 'isDefaultPrevented',
  stopImmediatePropagation: 'isImmediatePropagationStopped',
  stopPropagation: 'isPropagationStopped'
};
const returnTrue = () => true;
const returnFalse = () => false;

/**
 * Attempt to augment events and implement something closer to DOM Level 3 Events.
 *
 * @private
 * @param {Object} event
 * @return {Function}
 */

const augmentEvent = event => {
  if(!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
    for(const methodName in eventMethods) {
      (function(methodName, testMethodName, originalMethod) {
        event[methodName] = function() {
          this[testMethodName] = returnTrue;
          return originalMethod && originalMethod.apply(this, arguments);
        };
        event[testMethodName] = returnFalse;
      }(methodName, eventMethods[methodName], event[methodName]));
    }
    if(event._preventDefault) {
      event.preventDefault();
    }
  }
  return event;
};

/**
 * Function to test whether delegated events match the provided `selector` (filter),
 * if the event propagation was stopped, and then actually call the provided event handler.
 * Use `this` instead of `event.currentTarget` on the event object.
 *
 * @private
 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Event} event
 */

const delegateHandler = function(selector, handler, event) {
  const eventTarget = event._target || event.target;
  const currentTarget = _selector_closest__WEBPACK_IMPORTED_MODULE_1__.closest.call([eventTarget], selector, this)[0];
  if(currentTarget && currentTarget !== this) {
    if(currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
};

const bind = on;
const unbind = off;


/***/ }),

/***/ "./node_modules/domtastic/src/event/ready.js":
/*!***************************************************!*\
  !*** ./node_modules/domtastic/src/event/ready.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ready": () => (/* binding */ ready)
/* harmony export */ });
/**
 * @module Ready
 */

/**
 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
 *
 * @param handler Callback to execute when initial DOM content is loaded.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $(document).ready(callback);
 */

const ready = function(handler) {
  if(/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/event/trigger.js":
/*!*****************************************************!*\
  !*** ./node_modules/domtastic/src/event/trigger.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "triggerHandler": () => (/* binding */ triggerHandler)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/contains */ "./node_modules/domtastic/src/dom/contains.js");
/**
 * @module trigger
 */




const reMouseEvent = /^(mouse(down|up|over|out|enter|leave|move)|contextmenu|(dbl)?click)$/;
const reKeyEvent = /^key(down|press|up)$/;

/**
 * Trigger event at element(s)
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').trigger('anyEventType');
 */

const trigger = function(type, data, {bubbles = true, cancelable = true, preventDefault = false} = {}) {

  const EventConstructor = getEventConstructor(type);
  const event = new EventConstructor(type, {
    bubbles,
    cancelable,
    preventDefault,
    detail: data
  });

  event._preventDefault = preventDefault;

  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, {
        bubbles,
        cancelable,
        preventDefault,
        detail: data
      });
    }
  });
};

const getEventConstructor = type => isSupportsOtherEventConstructors ? (reMouseEvent.test(type) ? MouseEvent : (reKeyEvent.test(type) ? KeyboardEvent : CustomEvent)) : CustomEvent;

/**
 * Trigger event at first element in the collection. Similar to `trigger()`, except:
 *
 * - Event does not bubble
 * - Default event behavior is prevented
 * - Only triggers handler for first matching element
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event
 * @example
 *     $('form').triggerHandler('submit');
 */

const triggerHandler = function(type, data) {
  if(this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
};

/**
 * Check whether the element is attached to or detached from) the document
 *
 * @private
 * @param {Node} element Element to test
 * @return {Boolean}
 */

const isAttachedToDocument = element => {
  if(element === window || element === document) {
    return true;
  }
  return (0,_dom_contains__WEBPACK_IMPORTED_MODULE_1__.contains)(element.ownerDocument.documentElement, element);
};

/**
 * Dispatch the event at the element and its ancestors.
 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
 *
 * @private
 * @param {Node} element First element to dispatch the event at
 * @param {String} type Type of the event
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * Will be set to false (but shouldn't matter since events don't bubble anyway).
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 */

const triggerForPath = (element, type, params = {}) => {
  params.bubbles = false;
  const event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while(element = element.parentNode); // eslint-disable-line no-cond-assign
};

/**
 * Dispatch event to element, but call direct event methods instead if available
 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
 *
 * @private
 * @param {Node} element Element to dispatch the event at
 * @param {Object} event Event to dispatch
 */

const directEventMethods = ['blur', 'focus', 'select', 'submit'];

const dispatchEvent = (element, event) => {
  if(directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
};

/**
 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill).
 * Needed to support IE (9, 10, 11) & PhantomJS
 */

(() => {
  const CustomEvent = function(event, params = {
    bubbles: false,
    cancelable: false,
    detail: undefined
  }) {
    let customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  };

  CustomEvent.prototype = _util__WEBPACK_IMPORTED_MODULE_0__.win.CustomEvent && _util__WEBPACK_IMPORTED_MODULE_0__.win.CustomEvent.prototype;
  _util__WEBPACK_IMPORTED_MODULE_0__.win.CustomEvent = CustomEvent;

})();

/*
 * Are events bubbling in detached DOM trees?
 * @private
 */

const isEventBubblingInDetachedTree = (() =>{
  let isBubbling = false;
  const doc = _util__WEBPACK_IMPORTED_MODULE_0__.win.document;
  if(doc) {
    const parent = doc.createElement('div');
    const child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();

const isSupportsOtherEventConstructors = (() => {
  try {
    new MouseEvent('click');
  } catch(e) {
    return false;
  }
  return true;
})();


/***/ }),

/***/ "./node_modules/domtastic/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/domtastic/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/domtastic/src/array.js");
/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseClass */ "./node_modules/domtastic/src/baseClass.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "./node_modules/domtastic/src/css.js");
/* harmony import */ var _dom_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/index */ "./node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _dom_attr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/attr */ "./node_modules/domtastic/src/dom/attr.js");
/* harmony import */ var _dom_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/class */ "./node_modules/domtastic/src/dom/class.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/contains */ "./node_modules/domtastic/src/dom/contains.js");
/* harmony import */ var _dom_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/data */ "./node_modules/domtastic/src/dom/data.js");
/* harmony import */ var _dom_extra__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/extra */ "./node_modules/domtastic/src/dom/extra.js");
/* harmony import */ var _dom_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/html */ "./node_modules/domtastic/src/dom/html.js");
/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/index */ "./node_modules/domtastic/src/event/index.js");
/* harmony import */ var _event_trigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/trigger */ "./node_modules/domtastic/src/event/trigger.js");
/* harmony import */ var _event_ready__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/ready */ "./node_modules/domtastic/src/event/ready.js");
/* harmony import */ var _noconflict__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noconflict */ "./node_modules/domtastic/src/noconflict.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector/closest */ "./node_modules/domtastic/src/selector/closest.js");
/* harmony import */ var _selector_extra__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selector/extra */ "./node_modules/domtastic/src/selector/extra.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./type */ "./node_modules/domtastic/src/type.js");
/**
 * @module API
 */



const api = {};
let $ = {};

// Import modules to build up the API




















if(typeof _selector_index__WEBPACK_IMPORTED_MODULE_15__ !== 'undefined') {
  $ = _selector_index__WEBPACK_IMPORTED_MODULE_15__.$;
  $.matches = _selector_index__WEBPACK_IMPORTED_MODULE_15__.matches;
  api.find = _selector_index__WEBPACK_IMPORTED_MODULE_15__.find;
}

(0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)($, _dom_contains__WEBPACK_IMPORTED_MODULE_7__, _noconflict__WEBPACK_IMPORTED_MODULE_14__, _type__WEBPACK_IMPORTED_MODULE_18__);
(0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(api, _array__WEBPACK_IMPORTED_MODULE_1__, _css__WEBPACK_IMPORTED_MODULE_3__, _dom_attr__WEBPACK_IMPORTED_MODULE_5__, _dom_index__WEBPACK_IMPORTED_MODULE_4__, _dom_class__WEBPACK_IMPORTED_MODULE_6__, _dom_data__WEBPACK_IMPORTED_MODULE_8__, _dom_extra__WEBPACK_IMPORTED_MODULE_9__, _dom_html__WEBPACK_IMPORTED_MODULE_10__, _event_index__WEBPACK_IMPORTED_MODULE_11__, _event_trigger__WEBPACK_IMPORTED_MODULE_12__, _event_ready__WEBPACK_IMPORTED_MODULE_13__, _selector_closest__WEBPACK_IMPORTED_MODULE_16__, _selector_extra__WEBPACK_IMPORTED_MODULE_17__);

$.fn = api;

// Version

$.version = '__VERSION__';

// Util

$.extend = _util__WEBPACK_IMPORTED_MODULE_0__.extend;

// Provide base class to extend from

if(typeof _baseClass__WEBPACK_IMPORTED_MODULE_2__.default !== 'undefined') {
  $.BaseClass = (0,_baseClass__WEBPACK_IMPORTED_MODULE_2__.default)($.fn);
}

// Export interface

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);


/***/ }),

/***/ "./node_modules/domtastic/src/noconflict.js":
/*!**************************************************!*\
  !*** ./node_modules/domtastic/src/noconflict.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noConflict": () => (/* binding */ noConflict)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module noConflict
 */



/*
 * Save the previous value of the global `$` variable, so that it can be restored later on.
 * @private
 */

const previousLib = _util__WEBPACK_IMPORTED_MODULE_0__.win.$;

/**
 * In case another library sets the global `$` variable before DOMtastic does,
 * this method can be used to return the global `$` to that other library.
 *
 * @return {Object} Reference to DOMtastic.
 * @example
 *     var domtastic = $.noConflict();
 */

const noConflict = function() {
  _util__WEBPACK_IMPORTED_MODULE_0__.win.$ = previousLib;
  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/selector/closest.js":
/*!********************************************************!*\
  !*** ./node_modules/domtastic/src/selector/closest.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closest": () => (/* binding */ closest)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module closest
 */




/**
 * Return the closest element matching the selector (starting by itself) for each element in the collection.
 *
 * @param {String} selector Filter
 * @param {Object} [context] If provided, matching elements must be a descendant of this element
 * @return {Object} New wrapped collection (containing zero or one element)
 * @chainable
 * @example
 *     $('.selector').closest('.container');
 */

const closest = (() => {

  const closest = function(selector, context) {
    const nodes = [];
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.each)(this, node => {
      while(node && node !== context) {
        if((0,_index__WEBPACK_IMPORTED_MODULE_0__.matches)(node, selector)) {
          nodes.push(node);
          break;
        }
        node = node.parentElement;
      }
    });
    return (0,_index__WEBPACK_IMPORTED_MODULE_0__.$)((0,_util__WEBPACK_IMPORTED_MODULE_1__.uniq)(nodes));
  };

  return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function(selector, context) {
    if(!context) {
      const nodes = [];
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.each)(this, node => {
        const n = node.closest(selector);
        if(n) {
          nodes.push(n);
        }
      });
      return (0,_index__WEBPACK_IMPORTED_MODULE_0__.$)((0,_util__WEBPACK_IMPORTED_MODULE_1__.uniq)(nodes));
    } else {
      return closest.call(this, selector, context);
    }
  };
})();


/***/ }),

/***/ "./node_modules/domtastic/src/selector/extra.js":
/*!******************************************************!*\
  !*** ./node_modules/domtastic/src/selector/extra.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "contents": () => (/* binding */ contents),
/* harmony export */   "eq": () => (/* binding */ eq),
/* harmony export */   "first": () => (/* binding */ first),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "siblings": () => (/* binding */ siblings),
/* harmony export */   "slice": () => (/* binding */ slice)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module Selector (extra)
 */




/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

const children = function(selector) {
  const nodes = [];
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(element.children) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(element.children, child => {
        if(!selector || (selector && (0,_index__WEBPACK_IMPORTED_MODULE_1__.matches)(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return (0,_index__WEBPACK_IMPORTED_MODULE_1__.$)(nodes);
};

/**
 * Add the elements of a wrapped collection to another.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The extended wrapped collection
 * @example
 *     $('.items').concat($('.more-items));
 *     $('.items').concat('.more-items);
 *     $('.items').concat('<div>more</div>');
 */

const concat = function(selector) {
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)((0,_index__WEBPACK_IMPORTED_MODULE_1__.$)(selector), element => {
    if([].indexOf.call(this, element) === -1) {
      [].push.call(this, element);
    }
  });
  return this;
};

/**
 * Return child nodes of each element in the collection, including text and comment nodes.
 *
 * @return {Object} New wrapped collection
 * @example
 *     $('.selector').contents();
 */

const contents = function() {
  const nodes = [];
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => nodes.push.apply(nodes, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(element.childNodes)));
  return (0,_index__WEBPACK_IMPORTED_MODULE_1__.$)(nodes);
};

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

const eq = function(index) {
  return slice.call(this, index, index + 1);
};

/**
 * Return a collection containing only the first item.
 *
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').first()
 *     // The first item; result is the same as doing $($('.items')[0]);
 */

const first = function() {
  return slice.call(this, 0, 1);
};

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

const get = function(index) {
  return this[index];
};

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

const parent = function(selector) {
  const nodes = [];
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => {
    if(!selector || (selector && (0,_index__WEBPACK_IMPORTED_MODULE_1__.matches)(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return (0,_index__WEBPACK_IMPORTED_MODULE_1__.$)(nodes);
};

/**
 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').siblings();
 *     $('.selector').siblings('.filter');
 */

const siblings = function(selector) {
  const nodes = [];
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, element => (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(element.parentNode.children, sibling => {
    if(sibling !== element && (!selector || (selector && (0,_index__WEBPACK_IMPORTED_MODULE_1__.matches)(sibling, selector)))) {
      nodes.push(sibling);
    }
  }));
  return (0,_index__WEBPACK_IMPORTED_MODULE_1__.$)(nodes);
};

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

const slice = function(start, end) { // eslint-disable-line no-unused-vars
  return (0,_index__WEBPACK_IMPORTED_MODULE_1__.$)([].slice.apply(this, arguments));
};


/***/ }),

/***/ "./node_modules/domtastic/src/selector/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domtastic/src/selector/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "matches": () => (/* binding */ matches),
/* harmony export */   "DOMtastic": () => (/* binding */ DOMtastic)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Selector
 */



let isPrototypeSet = false;

const reFragment = /^\s*<(\w+|!)[^>]*>/;
const reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
const reSimpleSelector = /^[.#]?[\w-]*$/;

/*
 * Versatile wrapper for `querySelectorAll`.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     var $items = $(.items');
 * @example
 *     var $element = $(domElement);
 * @example
 *     var $list = $(nodeList, document.body);
 * @example
 *     var $element = $('<p>evergreen</p>');
 */

const domtastic = function domtastic(selector, context = document) {

  let collection;

  if(!selector) {

    collection = document.querySelectorAll(null);

  } else if(selector instanceof DOMtastic) {

    return selector;

  } else if(typeof selector !== 'string') {

    collection = selector.nodeType || selector === window ? [selector] : selector;

  } else if(reFragment.test(selector)) {

    collection = createFragment(selector);

  } else {

    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

    collection = querySelector(selector, context);

  }

  return wrap(collection);

};

const $ = domtastic;

/*
 * Find descendants matching the provided `selector` for each element in the collection.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The wrapped collection
 * @example
 *     $('.selector').find('.deep').$('.deepest');
 */

const find = function(selector) {
  const nodes = [];
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(this, node => (0,_util__WEBPACK_IMPORTED_MODULE_0__.each)(querySelector(selector, node), child => {
    if(nodes.indexOf(child) === -1) {
      nodes.push(child);
    }
  }));
  return $(nodes);
};

/*
 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
 *
 * @param {Node} element Element to test
 * @param {String} selector Selector to match against element
 * @return {Boolean}
 *
 * @example
 *     $.matches(element, '.match');
 */

const matches = (() => {
  const context = typeof Element !== 'undefined' ? Element.prototype : _util__WEBPACK_IMPORTED_MODULE_0__.win;
  const _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
  return (element, selector) => _matches.call(element, selector);
})();

/*
 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
 *
 * @private
 * @param {String} selector Query selector.
 * @param {Node} context The context for the selector to query elements.
 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
 */

const querySelector = (selector, context) => {

  const isSimpleSelector = reSimpleSelector.test(selector);

  if(isSimpleSelector) {
    if(selector[0] === '#') {
      const element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if(selector[0] === '.') {
      return context.getElementsByClassName(selector.slice(1));
    }
    return context.getElementsByTagName(selector);
  }

  return context.querySelectorAll(selector);

};

/*
 * Create DOM fragment from an HTML string
 *
 * @private
 * @param {String} html String representing HTML.
 * @return {NodeList}
 */

const createFragment = html => {

  if(reSingleTag.test(html)) {
    return [document.createElement(RegExp.$1)];
  }

  const elements = [];
  const container = document.createElement('div');
  const children = container.childNodes;

  container.innerHTML = html;

  for(let i = 0, l = children.length; i < l; i++) {
    elements.push(children[i]);
  }

  return elements;
};

/*
 * Calling `$(selector)` returns a wrapped collection of elements.
 *
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 * @return Object) The wrapped collection
 */

const wrap = collection => {

  if(!isPrototypeSet) {
    DOMtastic.prototype = $.fn;
    DOMtastic.prototype.constructor = DOMtastic;
    isPrototypeSet = true;
  }

  return new DOMtastic(collection);
};

/*
 * Constructor for the Object.prototype strategy
 *
 * @constructor
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 */

const DOMtastic = function DOMtastic(collection) {
  let i = 0;
  const length = collection.length;
  for(; i < length;) {
    this[i] = collection[i++];
  }
  this.length = length;
};


/***/ }),

/***/ "./node_modules/domtastic/src/type.js":
/*!********************************************!*\
  !*** ./node_modules/domtastic/src/type.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
/**
 * @module Type
 */

/*
 * Determine if the argument passed is a Javascript function object.
 *
 * @param {Object} [obj] Object to test whether or not it is a function.
 * @return {boolean}
 * @example
 *     $.isFunction(function(){}); // true
 * @example
 *     $.isFunction({}); // false
 */

const isFunction = obj => typeof obj === 'function';

/*
 * Determine whether the argument is an array.
 *
 * @param {Object} [obj] Object to test whether or not it is an array.
 * @return {boolean}
 * @example
 *     $.isArray([]); // true
 * @example
 *     $.isArray({}); // false
 */

const isArray = Array.isArray;


/***/ }),

/***/ "./node_modules/domtastic/src/util.js":
/*!********************************************!*\
  !*** ./node_modules/domtastic/src/util.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "win": () => (/* binding */ win),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "uniq": () => (/* binding */ uniq)
/* harmony export */ });
/*
 * @module Util
 */

/*
 * Reference to the window object
 * @private
 */

const win = typeof window !== 'undefined' ? window : {};

/**
 * Convert `NodeList` to `Array`.
 *
 * @param {NodeList|Array} collection
 * @return {Array}
 * @private
 */

const toArray = collection => {
  const length = collection.length;
  const result = new Array(length);
  for(let i = 0; i < length; i++) {
    result[i] = collection[i];
  }
  return result;
};

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

const each = (collection, callback, thisArg) => {
  const length = collection.length;
  if(length !== undefined && collection.nodeType === undefined) {
    for(let i = 0; i < length; i++) {
      callback.call(thisArg, collection[i], i, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
};

/**
 * Assign enumerable properties from source object(s) to target object
 *
 * @method extend
 * @param {Object} target Object to extend
 * @param {Object} [source] Object to extend from
 * @return {Object} Extended object
 * @example
 *     $.extend({a: 1}, {b: 2}); // {a: 1, b: 2}
 * @example
 *     $.extend({a: 1}, {b: 2}, {a: 3}); // {a: 3, b: 2}
 */

const extend = (target, ...sources) => {
  sources.forEach(src => {
    for(let prop in src) {
      target[prop] = src[prop];
    }
  });
  return target;
};

/**
 * Return the collection without duplicates
 *
 * @param collection Collection to remove duplicates from
 * @return {Node|NodeList|Array}
 * @private
 */

const uniq = collection => collection.filter((item, index) => collection.indexOf(item) === index);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scrapper.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;