/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var _this = undefined;

// Render products
// * Тут загрузка товаров из <storage>. Я сделал просто массив с объектами для примера
var normalizePrice = function normalizePrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

var productMarkup = function productMarkup(_ref) {
  var id = _ref.id,
      isDeleted = _ref.isDeleted,
      name = _ref.name,
      imageUrl = _ref.imageUrl,
      properties = _ref.properties,
      count = _ref.count,
      maxCount = _ref.maxCount,
      price = _ref.price;
  return !isDeleted ? "\n      <article class=\"mtcheck-product\" data-id=\"".concat(id, "\">\n        <div class=\"mtcheck-product__left\">\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" class=\"visually-hidden checkbox__input\">\n            <span class=\"checkbox__display\"></span>\n          </label>\n          <a href=\"#\" class=\"mtcheck-product__image\">\n            <img src=\"").concat(imageUrl, "\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n          </a>\n          <div class=\"mtcheck-product__info\">\n            <a href=\"#\" class=\"text text--md text--primary mtcheck-product__name\">").concat(name, "</a>\n            <div class=\"mtcheck-product__properties\">\n              ").concat(properties ? properties.map(function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value;
    return "\n                    <span class=\"text text--xs text--secondary mtcheck-product__property\">\n                      ".concat(key, ": ").concat(value, "\n                    </span>\n                  ");
  }).join("") : "", "\n            </div>\n          </div>\n        </div>\n        <div class=\"mtcheck-product__right\">\n          <div class=\"mtcheck-product__count\">\n            <div class=\"counter\">\n              <input type=\"number\" value=\"").concat(count, "\" min=\"1\" data-max=\"").concat(maxCount, "\" class=\"counter__display\">\n              <input type=\"button\" value=\"-\" class=\"btn-reset counter__action counter__action--decrement\">\n              <input type=\"button\" value=\"+\" class=\"btn-reset counter__action counter__action--increment\">\n            </div>\n          </div>\n          <div class=\"mtcheck-product__wrapper\">\n            <p class=\"text text--md text--primary mtcheck-product__price\">").concat(normalizePrice(price), " <span>&#8381;</span></p>\n            <button class=\"btn-reset mtcheck-product__remove\" data-product aria-label=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\"></button>\n          </div>\n        </div>\n      </article>\n      ") : "\n      <article class=\"mtcheck-product mtcheck-product--deleted\">\n        <div class=\"mtcheck-product__left\">\n          <div class=\"mtcheck-product__info\">\n            <p class=\"text mtcheck-product__name\">".concat(name, "</p>\n          </div>\n        </div>\n        <div class=\"mtcheck-product__right\">\n          <button class=\"btn-reset link mtcheck-product__restore\" data-action=\"product-restore\">\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</button>\n          <div class=\"mtcheck-product__wrapper\">\n            <button class=\"btn-reset mtcheck-product__remove\" data-remove aria-label=\"\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\"></button>\n          </div>\n        </div>\n      </article>\n      ");
};

var products = [{
  id: "1",
  name: "Таймер кухонный, электронный, Baldr",
  imageUrl: "./images/products/product-1.png",
  properties: [{
    key: "Бренд",
    value: "Baldr"
  }],
  count: 1,
  maxCount: 5,
  price: 126281
}, {
  id: "2",
  name: "Газобетонный стеновой блок D400 600x300x250",
  imageUrl: "./images/products/product-2.png",
  properties: [{
    key: "Цвет",
    value: "бежевый"
  }, {
    key: "Комплект",
    value: "полный"
  }, {
    key: "Состояние",
    value: "новый"
  }, {
    key: "Размер",
    value: "28"
  }, {
    key: "Цвет рамки",
    value: "золотой"
  }],
  count: 2,
  maxCount: 8,
  price: 1242
}, {
  id: "3",
  isDeleted: true,
  name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый",
  imageUrl: "./images/products/product-2.png",
  properties: [{
    key: "Цвет",
    value: "бежевый"
  }, {
    key: "Комплект",
    value: "полный"
  }, {
    key: "Состояние",
    value: "новый"
  }, {
    key: "Размер",
    value: "28"
  }, {
    key: "Цвет рамки",
    value: "золотой"
  }],
  count: 11,
  maxCount: 124,
  price: 681
}, {
  id: "4",
  name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый цвет официальный магазин Поларис",
  imageUrl: "./images/products/product-3.png",
  properties: [{
    key: "Цвет",
    value: "бежевый"
  }, {
    key: "Комплект",
    value: "полный"
  }, {
    key: "Состояние",
    value: "новый"
  }, {
    key: "Размер",
    value: "28"
  }, {
    key: "Цвет рамки",
    value: "золотой"
  }],
  count: 11,
  maxCount: 20,
  price: 681
}];
var productsContainer = document.querySelector(".mtcheck-products__list");
products.forEach(function (product) {
  return productsContainer.insertAdjacentHTML("afterbegin", productMarkup(product));
}); // Установка количества (выбрать все..)

var selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text");
selectAllText.textContent = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 (".concat(products.length, ")"); // ===============================
// Tabs
// ===============================

var tabsHandler = document.querySelector("[data-tab-handler]");
var tabsStatus = document.querySelector("[data-tab-status]");
tabsHandler.addEventListener("click", tabChange);

function tabChange() {
  var futureActiveTab = document.querySelector("[data-tab='']");
  var currentActiveTab = document.querySelector("[data-tab='true']");
  currentActiveTab.setAttribute("data-tab", "");
  futureActiveTab.setAttribute("data-tab", "true"); // Set text nodes

  var previousHandler = tabsHandler.textContent;
  var previousStatus = tabsStatus.textContent;
  console.log(previousHandler, previousStatus);
  tabsHandler.textContent = tabsHandler.dataset.tabHandler;
  tabsStatus.textContent = tabsStatus.dataset.tabStatus;
  tabsHandler.setAttribute("data-tab-handler", previousHandler);
  tabsStatus.setAttribute("data-tab-status", previousStatus);
} // ===============================
// Selects
// ===============================


var selects = document.querySelectorAll(".select");
var selectOpenedClassName = "select--opened";
var selectItemActiveClassName = "select__item--active";
selects.forEach(function (select) {
  var items = select.querySelectorAll(".select__item");
  select.addEventListener("click", selectToggle.bind(_this, select));
  items.forEach(function (item) {
    return item.addEventListener("click", selectChange.bind(_this, select));
  });
});

function selectToggle(select) {
  select.classList.toggle(selectOpenedClassName);
}

function selectChange(select, event) {
  var display = select.querySelector(".select__display");
  var currentActiveItem = select.querySelector(".".concat(selectItemActiveClassName));
  var item = event.target;
  display.textContent = item.textContent; // Change active tab (by style)

  currentActiveItem.classList.remove(selectItemActiveClassName);
  item.classList.add(selectItemActiveClassName);
} // ===============================
// Counters
// ===============================


var counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  var parent = counter.parentElement;
  var display = counter.querySelector(".counter__display");
  var increment = counter.querySelector(".counter__action--increment");
  var decrement = counter.querySelector(".counter__action--decrement");
  var maxValue = +display.dataset.max;
  var types = {
    "+": display.stepUp.bind(display),
    "-": display.stepDown.bind(display)
  };
  display.addEventListener("input", function (event) {
    var value = +event.target.value;

    if (!value) {
      return display.value = 1;
    }

    isEnough(parent, maxValue, value);
  });
  [increment, decrement].forEach(function (button) {
    return button.addEventListener("click", function (event) {
      var type = event.target.value;
      types[type]();
      isEnough(parent, maxValue, +display.value);
    });
  });
});

function isEnough(parent, maxValue, currentValue) {
  var isSign = parent.querySelector(".mtcheck-product__sign");
  if (currentValue <= maxValue && !isSign) return;else if (currentValue <= maxValue && isSign) {
    return isSign.remove();
  } // Add sign or just keep it

  if (isSign) return;
  var signNode = document.createElement("span");
  signNode.classList.add("text", "text--xs", "mtcheck-product__sign");
  signNode.textContent = "нет в выбранном количестве";
  parent.insertAdjacentElement("beforeend", signNode);
} // ===============================
// Select all
// ===============================


var selectAllCheckbox = document.querySelector("#select-all");
var productsCheckboxes = document.querySelectorAll(".mtcheck-product .checkbox__input");
selectAllCheckbox.addEventListener("change", function () {
  var isChecked = selectAllCheckbox.checked;

  if (isChecked) {
    productsCheckboxes.forEach(function (checkbox) {
      return checkbox.checked = true;
    });
  } else {
    productsCheckboxes.forEach(function (checkbox) {
      return checkbox.checked = false;
    });
  }

  toggleActions(true);
}); // ===============================
// Actions toggle
// ===============================
// * тут когда checkbox продукта принимает состояние checked - появляются экшны, которые делают что-то из всеми выбранными продуктами. На "удалить все" - удаляются все выбранные продукты из <storage>, а "заказать в один клик" - открывает модалку с возможностью сделать заказ

var productCheckboxElements = document.querySelectorAll(".mtcheck-product .checkbox__input");
var productActions = document.querySelector(".mtcheck-products__actions");
var actionsActiveClassName = "mtcheck-products__actions--active";
productCheckboxElements.forEach(function (checkbox) {
  return checkbox.addEventListener("change", toggleActions);
});

function toggleActions(checkSelectAll) {
  var currentState = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelectorAll(".mtcheck-product .checkbox__input")).map(function (checkbox) {
    return checkbox.checked;
  });

  if (currentState.includes(true)) {
    productActions.classList.add(actionsActiveClassName);
  } else {
    productActions.classList.remove(actionsActiveClassName);
  }

  if (checkSelectAll && !currentState.includes(true)) {
    selectAllCheckbox.checked = false;
  }
} // ===============================
// Delete product on cross / on "delete all"
// ===============================
// * тут удаляется продукт при нажатии на крестик либо "удалить все", в моем случае просто из объекта, в вашем - из <storage>


var deleteAllButton = document.querySelector("#delete-all");
var deleteButtons = document.querySelectorAll(".mtcheck-product__remove");
deleteAllButton.addEventListener("click", function () {
  var checkedProducts = document.querySelectorAll(".mtcheck-product .checkbox__input:checked");
  checkedProducts.forEach(function (checkbox) {
    return deleteProduct(checkbox);
  });
});
deleteButtons.forEach(function (button) {
  return button.addEventListener("click", function (event) {
    return deleteProduct(event.target);
  });
});

function deleteProduct(element) {
  var product = element.closest(".mtcheck-product");
  var id = product.dataset.id;
  console.log(product, id);
  var deleteIndex = products.find(function (product) {
    return product.id === id;
  });
  products.splice(deleteIndex, 1);
  product.remove();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3VCLGdCQUFULENBQTBCLDJDQUExQixDQUF4QjtFQUVBa0QsZUFBZSxDQUFDdkUsT0FBaEIsQ0FBd0IsVUFBQzZELFFBQUQ7SUFBQSxPQUFjVyxhQUFhLENBQUNYLFFBQUQsQ0FBM0I7RUFBQSxDQUF4QjtBQUNELENBSkQ7QUFNQVMsYUFBYSxDQUFDdEUsT0FBZCxDQUFzQixVQUFDa0QsTUFBRDtFQUFBLE9BQVlBLE1BQU0sQ0FBQzFDLGdCQUFQLENBQ2hDLE9BRGdDLEVBRWhDLFVBQUN3QixLQUFEO0lBQUEsT0FBV3dDLGFBQWEsQ0FBQ3hDLEtBQUssQ0FBQ0csTUFBUCxDQUF4QjtFQUFBLENBRmdDLENBQVo7QUFBQSxDQUF0Qjs7QUFLQSxTQUFTcUMsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7RUFDOUIsSUFBTXhFLE9BQU8sR0FBR3dFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixrQkFBaEIsQ0FBaEI7RUFDQSxJQUFNMUYsRUFBRSxHQUFHaUIsT0FBTyxDQUFDZ0IsT0FBUixDQUFnQmpDLEVBQTNCO0VBRUErQixPQUFPLENBQUNDLEdBQVIsQ0FBWWYsT0FBWixFQUFxQmpCLEVBQXJCO0VBRUEsSUFBTTJGLFdBQVcsR0FBRy9FLFFBQVEsQ0FBQ2dGLElBQVQsQ0FBYyxVQUFDM0UsT0FBRDtJQUFBLE9BQWFBLE9BQU8sQ0FBQ2pCLEVBQVIsS0FBZUEsRUFBNUI7RUFBQSxDQUFkLENBQXBCO0VBRUFZLFFBQVEsQ0FBQ2lGLE1BQVQsQ0FBZ0JGLFdBQWhCLEVBQTZCLENBQTdCO0VBRUExRSxPQUFPLENBQUNtQyxNQUFSO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL210X2NoZWNrb3V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL210X2NoZWNrb3V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL210X2NoZWNrb3V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBSZW5kZXIgcHJvZHVjdHNcblxuLy8gKiDQotGD0YIg0LfQsNCz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7QsiDQuNC3IDxzdG9yYWdlPi4g0K8g0YHQtNC10LvQsNC7INC/0YDQvtGB0YLQviDQvNCw0YHRgdC40LIg0YEg0L7QsdGK0LXQutGC0LDQvNC4INC00LvRjyDQv9GA0LjQvNC10YDQsFxuXG5jb25zdCBub3JtYWxpemVQcmljZSA9IChzdHIpID0+IHtcbiAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xufVxuXG5jb25zdCBwcm9kdWN0TWFya3VwID0gKHsgaWQsIGlzRGVsZXRlZCwgbmFtZSwgaW1hZ2VVcmwsIHByb3BlcnRpZXMsIGNvdW50LCBtYXhDb3VudCwgcHJpY2UgfSkgPT4gKFxuICAhaXNEZWxldGVkXG4gICAgPyBgXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdFwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19sZWZ0XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlbiBjaGVja2JveF9faW5wdXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tib3hfX2Rpc3BsYXlcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0YLQvtCy0LDRgNCwXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2luZm9cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay1wcm9kdWN0X19uYW1lXCI+JHtuYW1lfTwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX3Byb3BlcnRpZXNcIj5cbiAgICAgICAgICAgICAgJHtwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IChgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB0ZXh0LS14cyB0ZXh0LS1zZWNvbmRhcnkgbXRjaGVjay1wcm9kdWN0X19wcm9wZXJ0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7a2V5fTogJHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgYCkpLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2NvdW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiJHtjb3VudH1cIiBtaW49XCIxXCIgZGF0YS1tYXg9XCIke21heENvdW50fVwiIGNsYXNzPVwiY291bnRlcl9fZGlzcGxheVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiLVwiIGNsYXNzPVwiYnRuLXJlc2V0IGNvdW50ZXJfX2FjdGlvbiBjb3VudGVyX19hY3Rpb24tLWRlY3JlbWVudFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiK1wiIGNsYXNzPVwiYnRuLXJlc2V0IGNvdW50ZXJfX2FjdGlvbiBjb3VudGVyX19hY3Rpb24tLWluY3JlbWVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay1wcm9kdWN0X19wcmljZVwiPiR7bm9ybWFsaXplUHJpY2UocHJpY2UpfSA8c3Bhbj4mIzgzODE7PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgbXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIiBkYXRhLXByb2R1Y3QgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINGC0L7QstCw0YAg0LjQtyDQutC+0YDQt9C40L3Ri1wiPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIGBcbiAgICA6IGBcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwibXRjaGVjay1wcm9kdWN0IG10Y2hlY2stcHJvZHVjdC0tZGVsZXRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19sZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9faW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0IG10Y2hlY2stcHJvZHVjdF9fbmFtZVwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgbGluayBtdGNoZWNrLXByb2R1Y3RfX3Jlc3RvcmVcIiBkYXRhLWFjdGlvbj1cInByb2R1Y3QtcmVzdG9yZVwiPtCy0L7RgdGB0YLQsNC90L7QstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgbXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIiBkYXRhLXJlbW92ZSBhcmlhLWxhYmVsPVwi0J/QvtC70L3QvtGB0YLRjNGOINGD0LTQsNC70LjRgtGMINGC0L7QstCw0YAg0LjQtyDQutC+0YDQt9C40L3Ri1wiPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIGBcbilcblxuY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCLQotCw0LnQvNC10YAg0LrRg9GF0L7QvdC90YvQuSwg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSwgQmFsZHJcIixcbiAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTEucG5nXCIsXG4gICAgcHJvcGVydGllczogW1xuICAgICAgeyBrZXk6IFwi0JHRgNC10L3QtFwiLCB2YWx1ZTogXCJCYWxkclwiIH0sXG4gICAgXSxcbiAgICBjb3VudDogMSxcbiAgICBtYXhDb3VudDogNSxcbiAgICBwcmljZTogMTI2MjgxXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgbmFtZTogXCLQk9Cw0LfQvtCx0LXRgtC+0L3QvdGL0Lkg0YHRgtC10L3QvtCy0L7QuSDQsdC70L7QuiBENDAwIDYwMHgzMDB4MjUwXCIsXG4gICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0yLnBuZ1wiLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCa0L7QvNC/0LvQtdC60YJcIiwgdmFsdWU6IFwi0L/QvtC70L3Ri9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCh0L7RgdGC0L7Rj9C90LjQtVwiLCB2YWx1ZTogXCLQvdC+0LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICB7IGtleTogXCLQptCy0LXRgiDRgNCw0LzQutC4XCIsIHZhbHVlOiBcItC30L7Qu9C+0YLQvtC5XCIgfVxuICAgIF0sXG4gICAgY291bnQ6IDIsXG4gICAgbWF4Q291bnQ6IDgsXG4gICAgcHJpY2U6IDEyNDJcbiAgfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICBpc0RlbGV0ZWQ6IHRydWUsXG4gICAgbmFtZTogXCLQoNC+0LHQvtGCLdC/0YvQu9C10YHQvtGBIFBWQ1IgMDcyNlcgKFBPTEFSSVMpLCBQb2xhcmlzINCx0LXQttC10LLRi9C5XCIsXG4gICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0yLnBuZ1wiLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCa0L7QvNC/0LvQtdC60YJcIiwgdmFsdWU6IFwi0L/QvtC70L3Ri9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCh0L7RgdGC0L7Rj9C90LjQtVwiLCB2YWx1ZTogXCLQvdC+0LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICB7IGtleTogXCLQptCy0LXRgiDRgNCw0LzQutC4XCIsIHZhbHVlOiBcItC30L7Qu9C+0YLQvtC5XCIgfVxuICAgIF0sXG4gICAgY291bnQ6IDExLFxuICAgIG1heENvdW50OiAxMjQsXG4gICAgcHJpY2U6IDY4MVxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIG5hbWU6IFwi0KDQvtCx0L7Rgi3Qv9GL0LvQtdGB0L7RgSBQVkNSIDA3MjZXIChQT0xBUklTKSwgUG9sYXJpcyDQsdC10LbQtdCy0YvQuSDRhtCy0LXRgiDQvtGE0LjRhtC40LDQu9GM0L3Ri9C5INC80LDQs9Cw0LfQuNC9INCf0L7Qu9Cw0YDQuNGBXCIsXG4gICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0zLnBuZ1wiLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCa0L7QvNC/0LvQtdC60YJcIiwgdmFsdWU6IFwi0L/QvtC70L3Ri9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCh0L7RgdGC0L7Rj9C90LjQtVwiLCB2YWx1ZTogXCLQvdC+0LLRi9C5XCIgfSxcbiAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICB7IGtleTogXCLQptCy0LXRgiDRgNCw0LzQutC4XCIsIHZhbHVlOiBcItC30L7Qu9C+0YLQvtC5XCIgfVxuICAgIF0sXG4gICAgY291bnQ6IDExLFxuICAgIG1heENvdW50OiAyMCxcbiAgICBwcmljZTogNjgxXG4gIH1cbl1cbmNvbnN0IHByb2R1Y3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19saXN0XCIpXG5cbnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHByb2R1Y3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcbiAgXCJhZnRlcmJlZ2luXCIsXG4gIHByb2R1Y3RNYXJrdXAocHJvZHVjdClcbikpXG5cbi8vINCj0YHRgtCw0L3QvtCy0LrQsCDQutC+0LvQuNGH0LXRgdGC0LLQsCAo0LLRi9Cx0YDQsNGC0Ywg0LLRgdC1Li4pXG5cbmNvbnN0IHNlbGVjdEFsbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdHNfX2hlYWQgLmNoZWNrYm94X190ZXh0XCIpXG5cbnNlbGVjdEFsbFRleHQudGV4dENvbnRlbnQgPSBg0JLRi9Cx0YDQsNGC0Ywg0LLRgdC1ICgke3Byb2R1Y3RzLmxlbmd0aH0pYFxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUYWJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHRhYnNIYW5kbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhYi1oYW5kbGVyXVwiKVxuY29uc3QgdGFic1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWItc3RhdHVzXVwiKVxuXG50YWJzSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiQ2hhbmdlKVxuXG5mdW5jdGlvbiB0YWJDaGFuZ2UoKSB7XG4gIGNvbnN0IGZ1dHVyZUFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWI9JyddXCIpXG4gIGNvbnN0IGN1cnJlbnRBY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFiPSd0cnVlJ11cIilcblxuICBjdXJyZW50QWN0aXZlVGFiLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiXCIpXG4gIGZ1dHVyZUFjdGl2ZVRhYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcInRydWVcIilcblxuICAvLyBTZXQgdGV4dCBub2Rlc1xuXG4gIGNvbnN0IHByZXZpb3VzSGFuZGxlciA9IHRhYnNIYW5kbGVyLnRleHRDb250ZW50XG4gIGNvbnN0IHByZXZpb3VzU3RhdHVzID0gdGFic1N0YXR1cy50ZXh0Q29udGVudFxuXG4gIGNvbnNvbGUubG9nKHByZXZpb3VzSGFuZGxlciwgcHJldmlvdXNTdGF0dXMpXG5cbiAgdGFic0hhbmRsZXIudGV4dENvbnRlbnQgPSB0YWJzSGFuZGxlci5kYXRhc2V0LnRhYkhhbmRsZXJcbiAgdGFic1N0YXR1cy50ZXh0Q29udGVudCA9IHRhYnNTdGF0dXMuZGF0YXNldC50YWJTdGF0dXNcblxuICB0YWJzSGFuZGxlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYi1oYW5kbGVyXCIsIHByZXZpb3VzSGFuZGxlcilcbiAgdGFic1N0YXR1cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYi1zdGF0dXNcIiwgcHJldmlvdXNTdGF0dXMpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlbGVjdHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpXG5jb25zdCBzZWxlY3RPcGVuZWRDbGFzc05hbWUgPSBcInNlbGVjdC0tb3BlbmVkXCJcbmNvbnN0IHNlbGVjdEl0ZW1BY3RpdmVDbGFzc05hbWUgPSBcInNlbGVjdF9faXRlbS0tYWN0aXZlXCJcblxuc2VsZWN0cy5mb3JFYWNoKChzZWxlY3QpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RfX2l0ZW1cIilcblxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFRvZ2dsZS5iaW5kKHRoaXMsIHNlbGVjdCkpXG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBzZWxlY3RDaGFuZ2UuYmluZCh0aGlzLCBzZWxlY3QpXG4gICkpXG59KVxuXG5mdW5jdGlvbiBzZWxlY3RUb2dnbGUoc2VsZWN0KSB7XG4gIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdE9wZW5lZENsYXNzTmFtZSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0Q2hhbmdlKHNlbGVjdCwgZXZlbnQpIHtcbiAgY29uc3QgZGlzcGxheSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fZGlzcGxheVwiKVxuICBjb25zdCBjdXJyZW50QWN0aXZlSXRlbSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lfWApXG4gIGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXRcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gaXRlbS50ZXh0Q29udGVudFxuXG4gIC8vIENoYW5nZSBhY3RpdmUgdGFiIChieSBzdHlsZSlcblxuICBjdXJyZW50QWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdEl0ZW1BY3RpdmVDbGFzc05hbWUpXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb3VudGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBjb3VudGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY291bnRlclwiKVxuXG5jb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGNvdW50ZXIucGFyZW50RWxlbWVudFxuICBcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19kaXNwbGF5XCIpXG4gIGNvbnN0IGluY3JlbWVudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19hY3Rpb24tLWluY3JlbWVudFwiKVxuICBjb25zdCBkZWNyZW1lbnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fYWN0aW9uLS1kZWNyZW1lbnRcIilcblxuICBjb25zdCBtYXhWYWx1ZSA9ICtkaXNwbGF5LmRhdGFzZXQubWF4XG4gIFxuICBjb25zdCB0eXBlcyA9IHtcbiAgICBcIitcIjogZGlzcGxheS5zdGVwVXAuYmluZChkaXNwbGF5KSxcbiAgICBcIi1cIjogZGlzcGxheS5zdGVwRG93bi5iaW5kKGRpc3BsYXkpXG4gIH1cblxuICBkaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWVcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5LnZhbHVlID0gMVxuICAgIH1cblxuICAgIGlzRW5vdWdoKHBhcmVudCwgbWF4VmFsdWUsIHZhbHVlKVxuICB9KVxuXG4gIDtbaW5jcmVtZW50LCBkZWNyZW1lbnRdLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgXG4gICAgICB0eXBlc1t0eXBlXSgpXG4gICAgICBpc0Vub3VnaChwYXJlbnQsIG1heFZhbHVlLCArZGlzcGxheS52YWx1ZSlcbiAgICB9XG4gICkpXG59KVxuXG5mdW5jdGlvbiBpc0Vub3VnaChwYXJlbnQsIG1heFZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgY29uc3QgaXNTaWduID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0X19zaWduXCIpXG5cbiAgaWYgKGN1cnJlbnRWYWx1ZSA8PSBtYXhWYWx1ZSAmJiAhaXNTaWduKSByZXR1cm5cbiAgZWxzZSBpZiAoY3VycmVudFZhbHVlIDw9IG1heFZhbHVlICYmIGlzU2lnbikge1xuICAgIHJldHVybiBpc1NpZ24ucmVtb3ZlKClcbiAgfVxuXG4gIC8vIEFkZCBzaWduIG9yIGp1c3Qga2VlcCBpdFxuXG4gIGlmIChpc1NpZ24pIHJldHVyblxuXG4gIGNvbnN0IHNpZ25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcblxuICBzaWduTm9kZS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiLCBcInRleHQtLXhzXCIsIFwibXRjaGVjay1wcm9kdWN0X19zaWduXCIpXG4gIHNpZ25Ob2RlLnRleHRDb250ZW50ID0gXCLQvdC10YIg0LIg0LLRi9Cx0YDQsNC90L3QvtC8INC60L7Qu9C40YfQtdGB0YLQstC1XCJcblxuICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHNpZ25Ob2RlKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZWxlY3QgYWxsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtYWxsXCIpXG5jb25zdCBwcm9kdWN0c0NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdCAuY2hlY2tib3hfX2lucHV0XCIpXG5cbnNlbGVjdEFsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCBpc0NoZWNrZWQgPSBzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkXG5cbiAgaWYgKGlzQ2hlY2tlZCkge1xuICAgIHByb2R1Y3RzQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4gKGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlKSlcbiAgfSBlbHNlIHtcbiAgICBwcm9kdWN0c0NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IChjaGVja2JveC5jaGVja2VkID0gZmFsc2UpKVxuICB9XG5cbiAgdG9nZ2xlQWN0aW9ucyh0cnVlKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWN0aW9ucyB0b2dnbGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gKiDRgtGD0YIg0LrQvtCz0LTQsCBjaGVja2JveCDQv9GA0L7QtNGD0LrRgtCwINC/0YDQuNC90LjQvNCw0LXRgiDRgdC+0YHRgtC+0Y/QvdC40LUgY2hlY2tlZCAtINC/0L7Rj9Cy0LvRj9GO0YLRgdGPINGN0LrRiNC90YssINC60L7RgtC+0YDRi9C1INC00LXQu9Cw0Y7RgiDRh9GC0L4t0YLQviDQuNC3INCy0YHQtdC80Lgg0LLRi9Cx0YDQsNC90L3Ri9C80Lgg0L/RgNC+0LTRg9C60YLQsNC80LguINCd0LAgXCLRg9C00LDQu9C40YLRjCDQstGB0LVcIiAtINGD0LTQsNC70Y/RjtGC0YHRjyDQstGB0LUg0LLRi9Cx0YDQsNC90L3Ri9C1INC/0YDQvtC00YPQutGC0Ysg0LjQtyA8c3RvcmFnZT4sINCwIFwi0LfQsNC60LDQt9Cw0YLRjCDQsiDQvtC00LjQvSDQutC70LjQulwiIC0g0L7RgtC60YDRi9Cy0LDQtdGCINC80L7QtNCw0LvQutGDINGBINCy0L7Qt9C80L7QttC90L7RgdGC0YzRjiDRgdC00LXQu9Cw0YLRjCDQt9Cw0LrQsNC3XG5cbmNvbnN0IHByb2R1Y3RDaGVja2JveEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3QgLmNoZWNrYm94X19pbnB1dFwiKVxuY29uc3QgcHJvZHVjdEFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdHNfX2FjdGlvbnNcIilcbmNvbnN0IGFjdGlvbnNBY3RpdmVDbGFzc05hbWUgPSBcIm10Y2hlY2stcHJvZHVjdHNfX2FjdGlvbnMtLWFjdGl2ZVwiXG5cbnByb2R1Y3RDaGVja2JveEVsZW1lbnRzLmZvckVhY2goKGNoZWNrYm94KSA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFxuICBcImNoYW5nZVwiLFxuICB0b2dnbGVBY3Rpb25zXG4pKVxuXG5mdW5jdGlvbiB0b2dnbGVBY3Rpb25zKGNoZWNrU2VsZWN0QWxsKSB7XG4gIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdCAuY2hlY2tib3hfX2lucHV0XCIpXVxuICAgIC5tYXAoKGNoZWNrYm94KSA9PiBjaGVja2JveC5jaGVja2VkKVxuXG4gIGlmIChjdXJyZW50U3RhdGUuaW5jbHVkZXModHJ1ZSkpIHtcbiAgICBwcm9kdWN0QWN0aW9ucy5jbGFzc0xpc3QuYWRkKGFjdGlvbnNBY3RpdmVDbGFzc05hbWUpXG4gIH0gZWxzZSB7XG4gICAgcHJvZHVjdEFjdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShhY3Rpb25zQWN0aXZlQ2xhc3NOYW1lKVxuICB9XG5cbiAgaWYgKGNoZWNrU2VsZWN0QWxsICYmICFjdXJyZW50U3RhdGUuaW5jbHVkZXModHJ1ZSkpIHtcbiAgICBzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2VcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEZWxldGUgcHJvZHVjdCBvbiBjcm9zcyAvIG9uIFwiZGVsZXRlIGFsbFwiXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICog0YLRg9GCINGD0LTQsNC70Y/QtdGC0YHRjyDQv9GA0L7QtNGD0LrRgiDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutGA0LXRgdGC0LjQuiDQu9C40LHQviBcItGD0LTQsNC70LjRgtGMINCy0YHQtVwiLCDQsiDQvNC+0LXQvCDRgdC70YPRh9Cw0LUg0L/RgNC+0YHRgtC+INC40Lcg0L7QsdGK0LXQutGC0LAsINCyINCy0LDRiNC10LwgLSDQuNC3IDxzdG9yYWdlPlxuXG5jb25zdCBkZWxldGVBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1hbGxcIilcbmNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdF9fcmVtb3ZlXCIpXG5cbmRlbGV0ZUFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBjaGVja2VkUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdCAuY2hlY2tib3hfX2lucHV0OmNoZWNrZWRcIilcblxuICBjaGVja2VkUHJvZHVjdHMuZm9yRWFjaCgoY2hlY2tib3gpID0+IGRlbGV0ZVByb2R1Y3QoY2hlY2tib3gpKVxufSlcblxuZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIChldmVudCkgPT4gZGVsZXRlUHJvZHVjdChldmVudC50YXJnZXQpXG4pKVxuXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGVsZW1lbnQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgY29uc3QgaWQgPSBwcm9kdWN0LmRhdGFzZXQuaWRcblxuICBjb25zb2xlLmxvZyhwcm9kdWN0LCBpZClcblxuICBjb25zdCBkZWxldGVJbmRleCA9IHByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKVxuXG4gIHByb2R1Y3RzLnNwbGljZShkZWxldGVJbmRleCwgMSlcblxuICBwcm9kdWN0LnJlbW92ZSgpXG59XG4iXSwibmFtZXMiOlsibm9ybWFsaXplUHJpY2UiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwicHJvZHVjdE1hcmt1cCIsImlkIiwiaXNEZWxldGVkIiwibmFtZSIsImltYWdlVXJsIiwicHJvcGVydGllcyIsImNvdW50IiwibWF4Q291bnQiLCJwcmljZSIsIm1hcCIsImtleSIsInZhbHVlIiwiam9pbiIsInByb2R1Y3RzIiwicHJvZHVjdHNDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicHJvZHVjdCIsImluc2VydEFkamFjZW50SFRNTCIsInNlbGVjdEFsbFRleHQiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsInRhYnNIYW5kbGVyIiwidGFic1N0YXR1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJDaGFuZ2UiLCJmdXR1cmVBY3RpdmVUYWIiLCJjdXJyZW50QWN0aXZlVGFiIiwic2V0QXR0cmlidXRlIiwicHJldmlvdXNIYW5kbGVyIiwicHJldmlvdXNTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldCIsInRhYkhhbmRsZXIiLCJ0YWJTdGF0dXMiLCJzZWxlY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdE9wZW5lZENsYXNzTmFtZSIsInNlbGVjdEl0ZW1BY3RpdmVDbGFzc05hbWUiLCJzZWxlY3QiLCJpdGVtcyIsInNlbGVjdFRvZ2dsZSIsImJpbmQiLCJpdGVtIiwic2VsZWN0Q2hhbmdlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZXZlbnQiLCJkaXNwbGF5IiwiY3VycmVudEFjdGl2ZUl0ZW0iLCJ0YXJnZXQiLCJyZW1vdmUiLCJhZGQiLCJjb3VudGVycyIsImNvdW50ZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwibWF4VmFsdWUiLCJtYXgiLCJ0eXBlcyIsInN0ZXBVcCIsInN0ZXBEb3duIiwiaXNFbm91Z2giLCJidXR0b24iLCJ0eXBlIiwiY3VycmVudFZhbHVlIiwiaXNTaWduIiwic2lnbk5vZGUiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic2VsZWN0QWxsQ2hlY2tib3giLCJwcm9kdWN0c0NoZWNrYm94ZXMiLCJpc0NoZWNrZWQiLCJjaGVja2VkIiwiY2hlY2tib3giLCJ0b2dnbGVBY3Rpb25zIiwicHJvZHVjdENoZWNrYm94RWxlbWVudHMiLCJwcm9kdWN0QWN0aW9ucyIsImFjdGlvbnNBY3RpdmVDbGFzc05hbWUiLCJjaGVja1NlbGVjdEFsbCIsImN1cnJlbnRTdGF0ZSIsImluY2x1ZGVzIiwiZGVsZXRlQWxsQnV0dG9uIiwiZGVsZXRlQnV0dG9ucyIsImNoZWNrZWRQcm9kdWN0cyIsImRlbGV0ZVByb2R1Y3QiLCJlbGVtZW50IiwiY2xvc2VzdCIsImRlbGV0ZUluZGV4IiwiZmluZCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=