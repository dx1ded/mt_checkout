/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/components/actions.js":
/*!***************************************!*\
  !*** ./scripts/components/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleActions": () => (/* binding */ toggleActions)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./scripts/storage.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./scripts/components/products.js");


var actions = document.querySelector(".mtcheck-products__actions");
var removeAll = actions.querySelector("#remove-all");
var actionsActiveClassName = "mtcheck-products__actions--active";
function toggleActions() {
  var selectedProducts = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked");

  if (!selectedProducts.length) {
    return actions.classList.remove(actionsActiveClassName);
  }

  actions.classList.add(actionsActiveClassName);
}
removeAll.addEventListener("click", function () {
  var checkboxes = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked");
  checkboxes.forEach(function (checkbox) {
    var productNode = checkbox.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeProductFromStorage)(id);
    (0,_products__WEBPACK_IMPORTED_MODULE_1__.removeProductFromPage)(productNode, id);
  });
});

/***/ }),

/***/ "./scripts/components/counter.js":
/*!***************************************!*\
  !*** ./scripts/components/counter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeCounter": () => (/* binding */ initializeCounter)
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./scripts/components/products.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price */ "./scripts/components/price.js");


function initializeCounter(counter) {
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
    (0,_price__WEBPACK_IMPORTED_MODULE_1__.calculateProductPrice)(event.target.closest(".mtcheck-product"));
    (0,_products__WEBPACK_IMPORTED_MODULE_0__.updateProductsSummary)();
  });
  [increment, decrement].forEach(function (button) {
    return button.addEventListener("click", function (event) {
      var type = event.target.value;
      types[type]();
      isEnough(parent, maxValue, +display.value);
      (0,_price__WEBPACK_IMPORTED_MODULE_1__.calculateProductPrice)(event.target.closest(".mtcheck-product"));
      (0,_products__WEBPACK_IMPORTED_MODULE_0__.updateProductsSummary)();
    });
  });
}

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
}

/***/ }),

/***/ "./scripts/components/price.js":
/*!*************************************!*\
  !*** ./scripts/components/price.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateProductPrice": () => (/* binding */ calculateProductPrice),
/* harmony export */   "calculateProductsPrice": () => (/* binding */ calculateProductsPrice)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils.js");


function calculateProductsPrice() {
  var products = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelectorAll(".mtcheck-product .checkbox__input:checked"));

  var price = products.reduce(function (previousValue, currentNode) {
    var product = currentNode.closest(".mtcheck-product");
    var count = product.querySelector(".counter__display").value;
    var price = product.dataset.price;
    return previousValue += count * price;
  }, 0);
  return {
    price: price,
    count: products.length
  };
}
function calculateProductPrice(product) {
  var display = product.querySelector(".mtcheck-product__price");
  var count = product.querySelector(".counter__display").value;
  var price = product.dataset.price;
  display.childNodes[0].textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_1__.normalizePrice)(price * count), " ");
}

/***/ }),

/***/ "./scripts/components/products.js":
/*!****************************************!*\
  !*** ./scripts/components/products.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProductFromPage": () => (/* binding */ removeProductFromPage),
/* harmony export */   "updateProductsSummary": () => (/* binding */ updateProductsSummary)
/* harmony export */ });
/* harmony import */ var _productMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../productMarkup */ "./scripts/productMarkup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price */ "./scripts/components/price.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./scripts/components/actions.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter */ "./scripts/components/counter.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage */ "./scripts/storage.js");





 // Render products (with its functionality)

var productsContainer = document.querySelector(".mtcheck-products__list");
var products = (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductsFromStorage)();
var selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text");
var selectAllCheckbox = document.querySelector("#select-all");
products.forEach(function (product) {
  var node = new DOMParser().parseFromString((0,_productMarkup__WEBPACK_IMPORTED_MODULE_0__.productMarkup)(product), "text/html").body.firstChild;
  var select = node.querySelector(".checkbox__input");
  var remove = node.querySelector(".mtcheck-product__remove");
  var restore = node.querySelector(".mtcheck-product__restore");
  var counter = node.querySelector(".counter");

  if (select) {
    select.addEventListener("change", function () {
      (0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleActions)();
      var activeProductsCount = (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductsFromStorage)().filter(function (_ref) {
        var isDeleted = _ref.isDeleted;
        return !isDeleted;
      });
      var checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked");
      if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false;
      updateProductsSummary();
    });
  }

  if (remove) {
    remove.addEventListener("click", function (_ref2) {
      var target = _ref2.target;
      var productNode = target.closest(".mtcheck-product");
      var id = productNode.dataset.id;
      (0,_storage__WEBPACK_IMPORTED_MODULE_5__.removeProductFromStorage)(id);
      removeProductFromPage(productNode, id);
      updateProductsSummary();
    });
  }

  if (restore) {
    restore.addEventListener("click", function (_ref3) {
      var target = _ref3.target;
      var productNode = target.closest(".mtcheck-product");
      var id = productNode.dataset.id;
      (0,_storage__WEBPACK_IMPORTED_MODULE_5__.restoreProductFromStorage)(id);
      restoreProductFromPage(productNode, id);
      updateProductsSummary();
    });
  }

  (0,_counter__WEBPACK_IMPORTED_MODULE_4__.initializeCounter)(counter);
  productsContainer.insertAdjacentElement("afterbegin", node);
});
function removeProductFromPage(currentNode, id) {
  var isDeleted = currentNode.classList.contains("mtcheck-product--deleted");

  if (isDeleted) {
    return currentNode.remove();
  }

  var sibling = currentNode.nextSibling;
  var newNode = new DOMParser().parseFromString((0,_productMarkup__WEBPACK_IMPORTED_MODULE_0__.productMarkup)((0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductFromStorage)(id)), "text/html").body.firstChild;
  var remove = newNode.querySelector(".mtcheck-product__remove");
  var restore = newNode.querySelector(".mtcheck-product__restore");
  remove.addEventListener("click", function (_ref4) {
    var target = _ref4.target;
    var productNode = target.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.removeProductFromStorage)(id);
    removeProductFromPage(productNode, id);
    updateProductsSummary();
  });
  restore.addEventListener("click", function (_ref5) {
    var target = _ref5.target;
    var productNode = target.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.restoreProductFromStorage)(id);
    restoreProductFromPage(productNode, id);
    updateProductsSummary();
  });
  selectAllText.textContent = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 (".concat((0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductsCountFromStorage)(), ")");
  currentNode.remove();
  productsContainer.insertBefore(newNode, sibling);
  (0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleActions)();
}

function restoreProductFromPage(currentNode, id) {
  var sibling = currentNode.nextSibling;
  var newNode = new DOMParser().parseFromString((0,_productMarkup__WEBPACK_IMPORTED_MODULE_0__.productMarkup)((0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductFromStorage)(id)), "text/html").body.firstChild;
  var select = newNode.querySelector(".checkbox__input");
  var remove = newNode.querySelector(".mtcheck-product__remove");
  var counter = newNode.querySelector(".counter");
  if (selectAllCheckbox.checked) select.checked = true;
  select.addEventListener("change", function () {
    (0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleActions)();
    var activeProductsCount = (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductsFromStorage)().filter(function (_ref6) {
      var isDeleted = _ref6.isDeleted;
      return !isDeleted;
    });
    var checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked");
    if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false;
    updateProductsSummary();
  });
  remove.addEventListener("click", function (_ref7) {
    var target = _ref7.target;
    var productNode = target.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.removeProductFromStorage)(id);
    removeProductFromPage(productNode, id);
    updateProductsSummary();
  });
  (0,_counter__WEBPACK_IMPORTED_MODULE_4__.initializeCounter)(counter);
  selectAllText.textContent = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 (".concat((0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProductsCountFromStorage)(), ")");
  currentNode.remove();
  productsContainer.insertBefore(newNode, sibling);
  (0,_actions__WEBPACK_IMPORTED_MODULE_3__.toggleActions)();
} // Update products-summary (under the products list) (count / price)


function updateProductsSummary() {
  var summaryCount = document.querySelector(".mtcheck-products__count");
  var summaryPrice = document.querySelector(".mtcheck-products__sum");

  var _calculateProductsPri = (0,_price__WEBPACK_IMPORTED_MODULE_2__.calculateProductsPrice)(),
      count = _calculateProductsPri.count,
      price = _calculateProductsPri.price;

  summaryCount.textContent = "\u0422\u043E\u0432\u0430\u0440\u043E\u0432, ".concat(count, " \u0448\u0442.");
  summaryPrice.childNodes[0].textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_1__.normalizePrice)(price), " ");
}

/***/ }),

/***/ "./scripts/components/select.js":
/*!**************************************!*\
  !*** ./scripts/components/select.js ***!
  \**************************************/
/***/ (function() {

var _this = this;

var selects = document.querySelectorAll(".select");
var selectOpenedClassName = "select--opened";
var selectItemActiveClassName = "select__item--active";
selects.forEach(function (select) {
  var items = select.querySelectorAll(".select__item");
  select.addEventListener("click", toggle.bind(_this, select));
  items.forEach(function (item) {
    return item.addEventListener("click", change.bind(_this, select));
  });
});

function toggle(select) {
  select.classList.toggle(selectOpenedClassName);
}

function change(select, event) {
  var display = select.querySelector(".select__display");
  var currentActiveItem = select.querySelector(".".concat(selectItemActiveClassName));
  var item = event.target;
  display.textContent = item.textContent; // Change active tab (by style)

  currentActiveItem.classList.remove(selectItemActiveClassName);
  item.classList.add(selectItemActiveClassName);
}

/***/ }),

/***/ "./scripts/components/tabs.js":
/*!************************************!*\
  !*** ./scripts/components/tabs.js ***!
  \************************************/
/***/ (() => {

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
  tabsHandler.textContent = tabsHandler.dataset.tabHandler;
  tabsStatus.textContent = tabsStatus.dataset.tabStatus;
  tabsHandler.setAttribute("data-tab-handler", previousHandler);
  tabsStatus.setAttribute("data-tab-status", previousStatus);
}

/***/ }),

/***/ "./scripts/productMarkup.js":
/*!**********************************!*\
  !*** ./scripts/productMarkup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productMarkup": () => (/* binding */ productMarkup)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./scripts/utils.js");

var productMarkup = function productMarkup(_ref) {
  var id = _ref.id,
      isDeleted = _ref.isDeleted,
      name = _ref.name,
      imageUrl = _ref.imageUrl,
      properties = _ref.properties,
      count = _ref.count,
      maxCount = _ref.maxCount,
      price = _ref.price;
  return !isDeleted ? "\n      <article class=\"mtcheck-product\" data-id=\"".concat(id, "\" data-price=\"").concat(price, "\">\n        <div class=\"mtcheck-product__left\">\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" class=\"visually-hidden checkbox__input\">\n            <span class=\"checkbox__display\"></span>\n          </label>\n          <a href=\"#\" class=\"mtcheck-product__image\">\n            <img src=\"").concat(imageUrl, "\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n          </a>\n          <div class=\"mtcheck-product__info\">\n            <a href=\"#\" class=\"text text--md text--primary mtcheck-product__name\">").concat(name, "</a>\n            <div class=\"mtcheck-product__properties\">\n              ").concat(properties ? properties.map(function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value;
    return "\n                    <span class=\"text text--xs text--secondary mtcheck-product__property\">\n                      ".concat(key, ": ").concat(value, "\n                    </span>\n                  ");
  }).join("") : "", "\n            </div>\n          </div>\n        </div>\n        <div class=\"mtcheck-product__right\">\n          <div class=\"mtcheck-product__count\">\n            <div class=\"counter\">\n              <input type=\"number\" value=\"").concat(count, "\" min=\"1\" data-max=\"").concat(maxCount, "\" class=\"counter__display\">\n              <input type=\"button\" value=\"-\" class=\"btn-reset counter__action counter__action--decrement\">\n              <input type=\"button\" value=\"+\" class=\"btn-reset counter__action counter__action--increment\">\n            </div>\n          </div>\n          <div class=\"mtcheck-product__wrapper\">\n            <p class=\"text text--md text--primary mtcheck-product__price\">").concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizePrice)(price * count), " <span>&#8381;</span></p>\n            <button class=\"btn-reset mtcheck-product__remove\" aria-label=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\"></button>\n          </div>\n        </div>\n      </article>\n      ") : "\n      <article class=\"mtcheck-product mtcheck-product--deleted\" data-id=\"".concat(id, "\">\n        <div class=\"mtcheck-product__left\">\n          <div class=\"mtcheck-product__info\">\n            <p class=\"text mtcheck-product__name\">").concat(name, "</p>\n          </div>\n        </div>\n        <div class=\"mtcheck-product__right\">\n          <button class=\"btn-reset link mtcheck-product__restore\" data-action=\"product-restore\">\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</button>\n          <div class=\"mtcheck-product__wrapper\">\n            <button class=\"btn-reset mtcheck-product__remove\" aria-label=\"\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\"></button>\n          </div>\n        </div>\n      </article>\n      ");
};

/***/ }),

/***/ "./scripts/storage.js":
/*!****************************!*\
  !*** ./scripts/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductFromStorage": () => (/* binding */ getProductFromStorage),
/* harmony export */   "getProductsCountFromStorage": () => (/* binding */ getProductsCountFromStorage),
/* harmony export */   "getProductsFromStorage": () => (/* binding */ getProductsFromStorage),
/* harmony export */   "removeProductFromStorage": () => (/* binding */ removeProductFromStorage),
/* harmony export */   "restoreProductFromStorage": () => (/* binding */ restoreProductFromStorage)
/* harmony export */ });
var getProductsFromStorage = function getProductsFromStorage() {
  return JSON.parse(localStorage.getItem("products"));
};
var getProductsCountFromStorage = function getProductsCountFromStorage() {
  return JSON.parse(localStorage.getItem("products")).filter(function (_ref) {
    var isDeleted = _ref.isDeleted;
    return !isDeleted;
  }).length;
};
var getProductFromStorage = function getProductFromStorage(id) {
  var products = getProductsFromStorage();
  var index = products.findIndex(function (product) {
    return product.id === id;
  });
  return products[index];
};
var removeProductFromStorage = function removeProductFromStorage(id) {
  var products = getProductsFromStorage();
  var index = products.findIndex(function (product) {
    return product.id === id;
  });
  var product = products[index];
  product.isDeleted ? products.splice(index, 1) : products[index]["isDeleted"] = true;
  localStorage.setItem("products", JSON.stringify(products));
};
var restoreProductFromStorage = function restoreProductFromStorage(id) {
  var products = getProductsFromStorage();
  var index = products.findIndex(function (product) {
    return product.id === id;
  });
  products[index]["isDeleted"] = false;
  localStorage.setItem("products", JSON.stringify(products));
}; // * Удалить это, лишь для теста

if (!getProductsFromStorage()) {
  localStorage.setItem("products", JSON.stringify([{
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
  }]));
}

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizePrice": () => (/* binding */ normalizePrice)
/* harmony export */ });
var normalizePrice = function normalizePrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/products */ "./scripts/components/products.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/counter */ "./scripts/components/counter.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ "./scripts/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select */ "./scripts/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./scripts/storage.js");
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/actions */ "./scripts/components/actions.js");
// Components



 // Select all products option



var selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text");
var selectAllCheckbox = document.querySelector("#select-all");
selectAllText.textContent = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 (".concat((0,_storage__WEBPACK_IMPORTED_MODULE_4__.getProductsCountFromStorage)(), ")");
selectAllCheckbox.addEventListener("change", toggleSelectAll); // If select is already active (from start) - toggle items

if (selectAllCheckbox.checked) {
  toggleSelectAll();
}

function toggleSelectAll() {
  var isChecked = selectAllCheckbox.checked;
  var checkboxes = document.querySelectorAll(".mtcheck-product__left .checkbox__input");

  if (isChecked) {
    checkboxes.forEach(function (checkbox) {
      return checkbox.checked = true;
    });
  } else {
    checkboxes.forEach(function (checkbox) {
      return checkbox.checked = false;
    });
  }

  (0,_components_actions__WEBPACK_IMPORTED_MODULE_5__.toggleActions)();
  (0,_components_products__WEBPACK_IMPORTED_MODULE_0__.updateProductsSummary)();
} // Update prices (by selected elements)


(0,_components_products__WEBPACK_IMPORTED_MODULE_0__.updateProductsSummary)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE2RCxhQUFhLENBQUNsQixXQUFkLDRFQUE0Q2UscUVBQTJCLEVBQXZFO0FBQ0FJLGlCQUFpQixDQUFDcEQsZ0JBQWxCLENBQW1DLFFBQW5DLEVBQTZDOEcsZUFBN0MsR0FFQTs7QUFFQSxJQUFJMUQsaUJBQWlCLENBQUNZLE9BQXRCLEVBQStCO0VBQzdCOEMsZUFBZTtBQUNoQjs7QUFFRCxTQUFTQSxlQUFULEdBQTJCO0VBQ3pCLElBQU1DLFNBQVMsR0FBRzNELGlCQUFpQixDQUFDWSxPQUFwQztFQUNBLElBQU0vRCxVQUFVLEdBQUdaLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIseUNBQTFCLENBQW5COztFQUVBLElBQUlvSCxTQUFKLEVBQWU7SUFDYjlHLFVBQVUsQ0FBQ0MsT0FBWCxDQUFtQixVQUFDQyxRQUFEO01BQUEsT0FBZUEsUUFBUSxDQUFDNkQsT0FBVCxHQUFtQixJQUFsQztJQUFBLENBQW5CO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wvRCxVQUFVLENBQUNDLE9BQVgsQ0FBbUIsVUFBQ0MsUUFBRDtNQUFBLE9BQWVBLFFBQVEsQ0FBQzZELE9BQVQsR0FBbUIsS0FBbEM7SUFBQSxDQUFuQjtFQUNEOztFQUVEdkUsa0VBQWE7RUFDYmUsMkVBQXFCO0FBQ3RCLEVBRUQ7OztBQUVBQSwyRUFBcUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9zY3JpcHRzL2NvbXBvbmVudHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvY29tcG9uZW50cy9wcmljZS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9zY3JpcHRzL2NvbXBvbmVudHMvdGFicy5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvcHJvZHVjdE1hcmt1cC5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL210X2NoZWNrb3V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlIH0gZnJvbSBcIi4uL3N0b3JhZ2VcIlxuaW1wb3J0IHsgcmVtb3ZlUHJvZHVjdEZyb21QYWdlIH0gZnJvbSBcIi4vcHJvZHVjdHNcIlxuXG5jb25zdCBhY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19hY3Rpb25zXCIpXG5jb25zdCByZW1vdmVBbGwgPSBhY3Rpb25zLnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlLWFsbFwiKVxuY29uc3QgYWN0aW9uc0FjdGl2ZUNsYXNzTmFtZSA9IFwibXRjaGVjay1wcm9kdWN0c19fYWN0aW9ucy0tYWN0aXZlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFjdGlvbnMoKSB7XG4gIGNvbnN0IHNlbGVjdGVkUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdF9fbGVmdCAuY2hlY2tib3hfX2lucHV0OmNoZWNrZWRcIilcblxuICBpZiAoIXNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGFjdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShhY3Rpb25zQWN0aXZlQ2xhc3NOYW1lKVxuICB9XG5cbiAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKGFjdGlvbnNBY3RpdmVDbGFzc05hbWUpXG59XG5cbnJlbW92ZUFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3RfX2xlZnQgLmNoZWNrYm94X19pbnB1dDpjaGVja2VkXCIpXG5cbiAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3ROb2RlID0gY2hlY2tib3guY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgICBjb25zdCBpZCA9IHByb2R1Y3ROb2RlLmRhdGFzZXQuaWRcblxuICAgIHJlbW92ZVByb2R1Y3RGcm9tU3RvcmFnZShpZClcbiAgICByZW1vdmVQcm9kdWN0RnJvbVBhZ2UocHJvZHVjdE5vZGUsIGlkKVxuICB9KVxufSlcbiIsImltcG9ydCB7IHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSB9IGZyb20gXCIuL3Byb2R1Y3RzXCJcbmltcG9ydCB7IGNhbGN1bGF0ZVByb2R1Y3RQcmljZSB9IGZyb20gXCIuL3ByaWNlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb3VudGVyKGNvdW50ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gY291bnRlci5wYXJlbnRFbGVtZW50XG4gIFxuICBjb25zdCBkaXNwbGF5ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX2Rpc3BsYXlcIilcbiAgY29uc3QgaW5jcmVtZW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX2FjdGlvbi0taW5jcmVtZW50XCIpXG4gIGNvbnN0IGRlY3JlbWVudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19hY3Rpb24tLWRlY3JlbWVudFwiKVxuXG4gIGNvbnN0IG1heFZhbHVlID0gK2Rpc3BsYXkuZGF0YXNldC5tYXhcbiAgXG4gIGNvbnN0IHR5cGVzID0ge1xuICAgIFwiK1wiOiBkaXNwbGF5LnN0ZXBVcC5iaW5kKGRpc3BsYXkpLFxuICAgIFwiLVwiOiBkaXNwbGF5LnN0ZXBEb3duLmJpbmQoZGlzcGxheSlcbiAgfVxuXG4gIGRpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZVxuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BsYXkudmFsdWUgPSAxXG4gICAgfVxuXG4gICAgaXNFbm91Z2gocGFyZW50LCBtYXhWYWx1ZSwgdmFsdWUpXG4gICAgY2FsY3VsYXRlUHJvZHVjdFByaWNlKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKSlcbiAgICB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuICB9KVxuXG4gIDtbaW5jcmVtZW50LCBkZWNyZW1lbnRdLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgXG4gICAgICB0eXBlc1t0eXBlXSgpXG4gICAgICBpc0Vub3VnaChwYXJlbnQsIG1heFZhbHVlLCArZGlzcGxheS52YWx1ZSlcbiAgICAgIGNhbGN1bGF0ZVByb2R1Y3RQcmljZShldmVudC50YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIikpXG4gICAgICB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuICAgIH1cbiAgKSlcbn1cblxuZnVuY3Rpb24gaXNFbm91Z2gocGFyZW50LCBtYXhWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG4gIGNvbnN0IGlzU2lnbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdF9fc2lnblwiKVxuXG4gIGlmIChjdXJyZW50VmFsdWUgPD0gbWF4VmFsdWUgJiYgIWlzU2lnbikgcmV0dXJuXG4gIGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA8PSBtYXhWYWx1ZSAmJiBpc1NpZ24pIHtcbiAgICByZXR1cm4gaXNTaWduLnJlbW92ZSgpXG4gIH1cblxuICAvLyBBZGQgc2lnbiBvciBqdXN0IGtlZXAgaXRcblxuICBpZiAoaXNTaWduKSByZXR1cm5cblxuICBjb25zdCBzaWduTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5cbiAgc2lnbk5vZGUuY2xhc3NMaXN0LmFkZChcInRleHRcIiwgXCJ0ZXh0LS14c1wiLCBcIm10Y2hlY2stcHJvZHVjdF9fc2lnblwiKVxuICBzaWduTm9kZS50ZXh0Q29udGVudCA9IFwi0L3QtdGCINCyINCy0YvQsdGA0LDQvdC90L7QvCDQutC+0LvQuNGH0LXRgdGC0LLQtVwiXG5cbiAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBzaWduTm9kZSlcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVByaWNlIH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVByb2R1Y3RzUHJpY2UoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXRjaGVjay1wcm9kdWN0IC5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZFwiKV1cbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0cy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnROb2RlKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IGN1cnJlbnROb2RlLmNsb3Nlc3QoXCIubXRjaGVjay1wcm9kdWN0XCIpXG4gICAgY29uc3QgY291bnQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fZGlzcGxheVwiKS52YWx1ZVxuICAgIGNvbnN0IHByaWNlID0gcHJvZHVjdC5kYXRhc2V0LnByaWNlXG5cbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArPSBjb3VudCAqIHByaWNlXG4gIH0sIDApXG5cbiAgcmV0dXJuIHsgcHJpY2UsIGNvdW50OiBwcm9kdWN0cy5sZW5ndGggfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUHJvZHVjdFByaWNlKHByb2R1Y3QpIHtcbiAgY29uc3QgZGlzcGxheSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3ByaWNlXCIpXG4gIGNvbnN0IGNvdW50ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX2Rpc3BsYXlcIikudmFsdWVcbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0LmRhdGFzZXQucHJpY2VcblxuICBkaXNwbGF5LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtub3JtYWxpemVQcmljZShwcmljZSAqIGNvdW50KX0gYFxufVxuXG4iLCJpbXBvcnQgeyBwcm9kdWN0TWFya3VwIH0gZnJvbSBcIi4uL3Byb2R1Y3RNYXJrdXBcIlxuaW1wb3J0IHsgbm9ybWFsaXplUHJpY2UgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IHsgY2FsY3VsYXRlUHJvZHVjdHNQcmljZSB9IGZyb20gXCIuL3ByaWNlXCJcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCJcbmltcG9ydCB7IGluaXRpYWxpemVDb3VudGVyIH0gZnJvbSBcIi4vY291bnRlclwiXG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlLFxuICBnZXRQcm9kdWN0RnJvbVN0b3JhZ2UsXG4gIGdldFByb2R1Y3RzQ291bnRGcm9tU3RvcmFnZSxcbiAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlLFxuICByZXN0b3JlUHJvZHVjdEZyb21TdG9yYWdlXG59IGZyb20gXCIuLi9zdG9yYWdlXCJcblxuLy8gUmVuZGVyIHByb2R1Y3RzICh3aXRoIGl0cyBmdW5jdGlvbmFsaXR5KVxuXG5jb25zdCBwcm9kdWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0c19fbGlzdFwiKVxuY29uc3QgcHJvZHVjdHMgPSBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlKClcblxuY29uc3Qgc2VsZWN0QWxsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0c19faGVhZCAuY2hlY2tib3hfX3RleHRcIilcbmNvbnN0IHNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtYWxsXCIpXG5cbnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgY29uc3Qgbm9kZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXG4gICAgcHJvZHVjdE1hcmt1cChwcm9kdWN0KSxcbiAgICBcInRleHQvaHRtbFwiXG4gICkuYm9keS5maXJzdENoaWxkXG5cbiAgY29uc3Qgc2VsZWN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94X19pbnB1dFwiKVxuICBjb25zdCByZW1vdmUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIilcbiAgY29uc3QgcmVzdG9yZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3Jlc3RvcmVcIilcbiAgY29uc3QgY291bnRlciA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyXCIpXG5cbiAgaWYgKHNlbGVjdCkge1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRvZ2dsZUFjdGlvbnMoKVxuICAgICAgXG4gICAgICBjb25zdCBhY3RpdmVQcm9kdWN0c0NvdW50ID0gZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSgpLmZpbHRlcigoeyBpc0RlbGV0ZWQgfSkgPT4gIWlzRGVsZXRlZClcbiAgICAgIGNvbnN0IGNoZWNrZWRJdGVtc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3RfX2xlZnQgLmNoZWNrYm94X19pbnB1dDpjaGVja2VkXCIpXG5cbiAgICAgIGlmIChhY3RpdmVQcm9kdWN0c0NvdW50ICE9PSBjaGVja2VkSXRlbXNDb3VudCkgc2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlXG5cbiAgICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG4gICAgfSlcbiAgfVxuICBcbiAgaWYgKHJlbW92ZSkge1xuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3ROb2RlID0gdGFyZ2V0LmNsb3Nlc3QoXCIubXRjaGVjay1wcm9kdWN0XCIpXG4gICAgICBjb25zdCBpZCA9IHByb2R1Y3ROb2RlLmRhdGFzZXQuaWRcblxuICAgICAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlKGlkKVxuICAgICAgcmVtb3ZlUHJvZHVjdEZyb21QYWdlKHByb2R1Y3ROb2RlLCBpZClcbiAgICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG4gICAgfSlcbiAgfVxuICBcbiAgaWYgKHJlc3RvcmUpIHtcbiAgICByZXN0b3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdE5vZGUgPSB0YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgICByZXN0b3JlUHJvZHVjdEZyb21TdG9yYWdlKGlkKVxuICAgICAgcmVzdG9yZVByb2R1Y3RGcm9tUGFnZShwcm9kdWN0Tm9kZSwgaWQpXG4gICAgICB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXplQ291bnRlcihjb3VudGVyKVxuXG4gIHByb2R1Y3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbm9kZSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9kdWN0RnJvbVBhZ2UoY3VycmVudE5vZGUsIGlkKSB7XG4gIGNvbnN0IGlzRGVsZXRlZCA9IGN1cnJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm10Y2hlY2stcHJvZHVjdC0tZGVsZXRlZFwiKVxuXG4gIGlmIChpc0RlbGV0ZWQpIHtcbiAgICByZXR1cm4gY3VycmVudE5vZGUucmVtb3ZlKClcbiAgfVxuXG4gIGNvbnN0IHNpYmxpbmcgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZ1xuICBjb25zdCBuZXdOb2RlID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhcbiAgICBwcm9kdWN0TWFya3VwKGdldFByb2R1Y3RGcm9tU3RvcmFnZShpZCkpLFxuICAgIFwidGV4dC9odG1sXCJcbiAgKS5ib2R5LmZpcnN0Q2hpbGRcblxuICBjb25zdCByZW1vdmUgPSBuZXdOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIilcbiAgY29uc3QgcmVzdG9yZSA9IG5ld05vZGUucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3Jlc3RvcmVcIilcblxuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdE5vZGUgPSB0YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgICBjb25zdCBpZCA9IHByb2R1Y3ROb2RlLmRhdGFzZXQuaWRcblxuICAgIHJlbW92ZVByb2R1Y3RGcm9tU3RvcmFnZShpZClcbiAgICByZW1vdmVQcm9kdWN0RnJvbVBhZ2UocHJvZHVjdE5vZGUsIGlkKVxuICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG4gIH0pXG5cbiAgcmVzdG9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBwcm9kdWN0Tm9kZSA9IHRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgcmVzdG9yZVByb2R1Y3RGcm9tU3RvcmFnZShpZClcbiAgICByZXN0b3JlUHJvZHVjdEZyb21QYWdlKHByb2R1Y3ROb2RlLCBpZClcbiAgICB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuICB9KVxuXG4gIHNlbGVjdEFsbFRleHQudGV4dENvbnRlbnQgPSBg0JLRi9Cx0YDQsNGC0Ywg0LLRgdC1ICgke2dldFByb2R1Y3RzQ291bnRGcm9tU3RvcmFnZSgpfSlgXG5cbiAgY3VycmVudE5vZGUucmVtb3ZlKClcbiAgcHJvZHVjdHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHNpYmxpbmcpXG5cbiAgdG9nZ2xlQWN0aW9ucygpXG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVQcm9kdWN0RnJvbVBhZ2UoY3VycmVudE5vZGUsIGlkKSB7XG4gIGNvbnN0IHNpYmxpbmcgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZ1xuICBjb25zdCBuZXdOb2RlID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhcbiAgICBwcm9kdWN0TWFya3VwKGdldFByb2R1Y3RGcm9tU3RvcmFnZShpZCkpLFxuICAgIFwidGV4dC9odG1sXCJcbiAgKS5ib2R5LmZpcnN0Q2hpbGRcblxuICBjb25zdCBzZWxlY3QgPSBuZXdOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hfX2lucHV0XCIpXG4gIGNvbnN0IHJlbW92ZSA9IG5ld05vZGUucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3JlbW92ZVwiKVxuICBjb25zdCBjb3VudGVyID0gbmV3Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJcIilcblxuICBpZiAoc2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCkgc2VsZWN0LmNoZWNrZWQgPSB0cnVlXG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUFjdGlvbnMoKVxuICAgIFxuICAgIGNvbnN0IGFjdGl2ZVByb2R1Y3RzQ291bnQgPSBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlKCkuZmlsdGVyKCh7IGlzRGVsZXRlZCB9KSA9PiAhaXNEZWxldGVkKVxuICAgIGNvbnN0IGNoZWNrZWRJdGVtc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3RfX2xlZnQgLmNoZWNrYm94X19pbnB1dDpjaGVja2VkXCIpXG5cbiAgICBpZiAoYWN0aXZlUHJvZHVjdHNDb3VudCAhPT0gY2hlY2tlZEl0ZW1zQ291bnQpIHNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZVxuXG4gICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcbiAgfSlcblxuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdE5vZGUgPSB0YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgICBjb25zdCBpZCA9IHByb2R1Y3ROb2RlLmRhdGFzZXQuaWRcblxuICAgIHJlbW92ZVByb2R1Y3RGcm9tU3RvcmFnZShpZClcbiAgICByZW1vdmVQcm9kdWN0RnJvbVBhZ2UocHJvZHVjdE5vZGUsIGlkKVxuICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG4gIH0pXG5cbiAgaW5pdGlhbGl6ZUNvdW50ZXIoY291bnRlcilcblxuICBzZWxlY3RBbGxUZXh0LnRleHRDb250ZW50ID0gYNCS0YvQsdGA0LDRgtGMINCy0YHQtSAoJHtnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UoKX0pYFxuXG4gIGN1cnJlbnROb2RlLnJlbW92ZSgpXG4gIHByb2R1Y3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdOb2RlLCBzaWJsaW5nKVxuICBcbiAgdG9nZ2xlQWN0aW9ucygpXG59XG5cbi8vIFVwZGF0ZSBwcm9kdWN0cy1zdW1tYXJ5ICh1bmRlciB0aGUgcHJvZHVjdHMgbGlzdCkgKGNvdW50IC8gcHJpY2UpXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKSB7XG4gIGNvbnN0IHN1bW1hcnlDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0c19fY291bnRcIilcbiAgY29uc3Qgc3VtbWFyeVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19zdW1cIilcblxuICBjb25zdCB7IGNvdW50LCBwcmljZSB9ID0gY2FsY3VsYXRlUHJvZHVjdHNQcmljZSgpXG5cbiAgc3VtbWFyeUNvdW50LnRleHRDb250ZW50ID0gYNCi0L7QstCw0YDQvtCyLCAke2NvdW50fSDRiNGCLmBcbiAgc3VtbWFyeVByaWNlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtub3JtYWxpemVQcmljZShwcmljZSl9IGBcbn1cbiIsImNvbnN0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKVxuY29uc3Qgc2VsZWN0T3BlbmVkQ2xhc3NOYW1lID0gXCJzZWxlY3QtLW9wZW5lZFwiXG5jb25zdCBzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lID0gXCJzZWxlY3RfX2l0ZW0tLWFjdGl2ZVwiXG5cbnNlbGVjdHMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0X19pdGVtXCIpXG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUuYmluZCh0aGlzLCBzZWxlY3QpKVxuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgY2hhbmdlLmJpbmQodGhpcywgc2VsZWN0KVxuICApKVxufSlcblxuZnVuY3Rpb24gdG9nZ2xlKHNlbGVjdCkge1xuICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RPcGVuZWRDbGFzc05hbWUpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZShzZWxlY3QsIGV2ZW50KSB7XG4gIGNvbnN0IGRpc3BsYXkgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX2Rpc3BsYXlcIilcbiAgY29uc3QgY3VycmVudEFjdGl2ZUl0ZW0gPSBzZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0SXRlbUFjdGl2ZUNsYXNzTmFtZX1gKVxuICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dENvbnRlbnRcblxuICAvLyBDaGFuZ2UgYWN0aXZlIHRhYiAoYnkgc3R5bGUpXG5cbiAgY3VycmVudEFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lKVxuICBpdGVtLmNsYXNzTGlzdC5hZGQoc2VsZWN0SXRlbUFjdGl2ZUNsYXNzTmFtZSlcbn1cbiIsImNvbnN0IHRhYnNIYW5kbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhYi1oYW5kbGVyXVwiKVxuY29uc3QgdGFic1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWItc3RhdHVzXVwiKVxuXG50YWJzSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiQ2hhbmdlKVxuXG5mdW5jdGlvbiB0YWJDaGFuZ2UoKSB7XG4gIGNvbnN0IGZ1dHVyZUFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWI9JyddXCIpXG4gIGNvbnN0IGN1cnJlbnRBY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFiPSd0cnVlJ11cIilcblxuICBjdXJyZW50QWN0aXZlVGFiLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiXCIpXG4gIGZ1dHVyZUFjdGl2ZVRhYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcInRydWVcIilcblxuICAvLyBTZXQgdGV4dCBub2Rlc1xuXG4gIGNvbnN0IHByZXZpb3VzSGFuZGxlciA9IHRhYnNIYW5kbGVyLnRleHRDb250ZW50XG4gIGNvbnN0IHByZXZpb3VzU3RhdHVzID0gdGFic1N0YXR1cy50ZXh0Q29udGVudFxuXG4gIHRhYnNIYW5kbGVyLnRleHRDb250ZW50ID0gdGFic0hhbmRsZXIuZGF0YXNldC50YWJIYW5kbGVyXG4gIHRhYnNTdGF0dXMudGV4dENvbnRlbnQgPSB0YWJzU3RhdHVzLmRhdGFzZXQudGFiU3RhdHVzXG5cbiAgdGFic0hhbmRsZXIuc2V0QXR0cmlidXRlKFwiZGF0YS10YWItaGFuZGxlclwiLCBwcmV2aW91c0hhbmRsZXIpXG4gIHRhYnNTdGF0dXMuc2V0QXR0cmlidXRlKFwiZGF0YS10YWItc3RhdHVzXCIsIHByZXZpb3VzU3RhdHVzKVxufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplUHJpY2UgfSBmcm9tIFwiLi91dGlsc1wiXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0TWFya3VwID0gKHtcbiAgaWQsXG4gIGlzRGVsZXRlZCxcbiAgbmFtZSxcbiAgaW1hZ2VVcmwsXG4gIHByb3BlcnRpZXMsXG4gIGNvdW50LFxuICBtYXhDb3VudCxcbiAgcHJpY2Vcbn0pID0+IChcbiAgIWlzRGVsZXRlZFxuICAgID8gYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RcIiBkYXRhLWlkPVwiJHtpZH1cIiBkYXRhLXByaWNlPVwiJHtwcmljZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fbGVmdFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW4gY2hlY2tib3hfX2lucHV0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrYm94X19kaXNwbGF5XCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9faW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiBhbHQ9XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INGC0L7QstCw0YDQsFwiPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19pbmZvXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dCB0ZXh0LS1tZCB0ZXh0LS1wcmltYXJ5IG10Y2hlY2stcHJvZHVjdF9fbmFtZVwiPiR7bmFtZX08L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19wcm9wZXJ0aWVzXCI+XG4gICAgICAgICAgICAgICR7cHJvcGVydGllc1xuICAgICAgICAgICAgICAgID8gcHJvcGVydGllcy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgdGV4dC0teHMgdGV4dC0tc2Vjb25kYXJ5IG10Y2hlY2stcHJvZHVjdF9fcHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke2tleX06ICR7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIGApKS5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19jb3VudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIiR7Y291bnR9XCIgbWluPVwiMVwiIGRhdGEtbWF4PVwiJHttYXhDb3VudH1cIiBjbGFzcz1cImNvdW50ZXJfX2Rpc3BsYXlcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIi1cIiBjbGFzcz1cImJ0bi1yZXNldCBjb3VudGVyX19hY3Rpb24gY291bnRlcl9fYWN0aW9uLS1kZWNyZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIitcIiBjbGFzcz1cImJ0bi1yZXNldCBjb3VudGVyX19hY3Rpb24gY291bnRlcl9fYWN0aW9uLS1pbmNyZW1lbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dCB0ZXh0LS1tZCB0ZXh0LS1wcmltYXJ5IG10Y2hlY2stcHJvZHVjdF9fcHJpY2VcIj4ke25vcm1hbGl6ZVByaWNlKHByaWNlICogY291bnQpfSA8c3Bhbj4mIzgzODE7PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgbXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIiBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0YLQvtCy0LDRgCDQuNC3INC60L7RgNC30LjQvdGLXCI+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgYFxuICAgIDogYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3QgbXRjaGVjay1wcm9kdWN0LS1kZWxldGVkXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2xlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19pbmZvXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQgbXRjaGVjay1wcm9kdWN0X19uYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX3JpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBsaW5rIG10Y2hlY2stcHJvZHVjdF9fcmVzdG9yZVwiIGRhdGEtYWN0aW9uPVwicHJvZHVjdC1yZXN0b3JlXCI+0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBtdGNoZWNrLXByb2R1Y3RfX3JlbW92ZVwiIGFyaWEtbGFiZWw9XCLQn9C+0LvQvdC+0YHRgtGM0Y4g0YPQtNCw0LvQuNGC0Ywg0YLQvtCy0LDRgCDQuNC3INC60L7RgNC30LjQvdGLXCI+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgYFxuKVxuIiwiZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzRnJvbVN0b3JhZ2UgPSAoKSA9PiAoXG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSlcbilcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQ291bnRGcm9tU3RvcmFnZSA9ICgpID0+IChcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpKVxuICAgIC5maWx0ZXIoKHsgaXNEZWxldGVkIH0pID0+ICFpc0RlbGV0ZWQpXG4gICAgLmxlbmd0aFxuKVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEZyb21TdG9yYWdlID0gKGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSgpXG4gIGNvbnN0IGluZGV4ID0gcHJvZHVjdHMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZClcbiAgXG4gIHJldHVybiBwcm9kdWN0c1tpbmRleF1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2R1Y3RGcm9tU3RvcmFnZSA9IChpZCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzRnJvbVN0b3JhZ2UoKVxuICBjb25zdCBpbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpXG4gIFxuICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNbaW5kZXhdXG5cbiAgcHJvZHVjdC5pc0RlbGV0ZWRcbiAgICA/IHByb2R1Y3RzLnNwbGljZShpbmRleCwgMSlcbiAgICA6IChwcm9kdWN0c1tpbmRleF1bXCJpc0RlbGV0ZWRcIl0gPSB0cnVlKVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKVxufVxuXG5leHBvcnQgY29uc3QgcmVzdG9yZVByb2R1Y3RGcm9tU3RvcmFnZSA9IChpZCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzRnJvbVN0b3JhZ2UoKVxuICBjb25zdCBpbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpXG4gIFxuICBwcm9kdWN0c1tpbmRleF1bXCJpc0RlbGV0ZWRcIl0gPSBmYWxzZVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKVxufVxuXG4vLyAqINCj0LTQsNC70LjRgtGMINGN0YLQviwg0LvQuNGI0Ywg0LTQu9GPINGC0LXRgdGC0LBcblxuaWYgKCFnZXRQcm9kdWN0c0Zyb21TdG9yYWdlKCkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgbmFtZTogXCLQotCw0LnQvNC10YAg0LrRg9GF0L7QvdC90YvQuSwg0Y3Qu9C10LrRgtGA0L7QvdC90YvQuSwgQmFsZHJcIixcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMS5wbmdcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgeyBrZXk6IFwi0JHRgNC10L3QtFwiLCB2YWx1ZTogXCJCYWxkclwiIH0sXG4gICAgICBdLFxuICAgICAgY291bnQ6IDEsXG4gICAgICBtYXhDb3VudDogNSxcbiAgICAgIHByaWNlOiAxMjYyODFcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIG5hbWU6IFwi0JPQsNC30L7QsdC10YLQvtC90L3Ri9C5INGB0YLQtdC90L7QstC+0Lkg0LHQu9C+0LogRDQwMCA2MDB4MzAweDI1MFwiLFxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0yLnBuZ1wiLFxuICAgICAgcHJvcGVydGllczogW1xuICAgICAgICB7IGtleTogXCLQptCy0LXRglwiLCB2YWx1ZTogXCLQsdC10LbQtdCy0YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCa0L7QvNC/0LvQtdC60YJcIiwgdmFsdWU6IFwi0L/QvtC70L3Ri9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0KHQvtGB0YLQvtGP0L3QuNC1XCIsIHZhbHVlOiBcItC90L7QstGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQoNCw0LfQvNC10YBcIiwgdmFsdWU6IFwiMjhcIiB9LFxuICAgICAgICB7IGtleTogXCLQptCy0LXRgiDRgNCw0LzQutC4XCIsIHZhbHVlOiBcItC30L7Qu9C+0YLQvtC5XCIgfVxuICAgICAgXSxcbiAgICAgIGNvdW50OiAyLFxuICAgICAgbWF4Q291bnQ6IDgsXG4gICAgICBwcmljZTogMTI0MlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgaXNEZWxldGVkOiB0cnVlLFxuICAgICAgbmFtZTogXCLQoNC+0LHQvtGCLdC/0YvQu9C10YHQvtGBIFBWQ1IgMDcyNlcgKFBPTEFSSVMpLCBQb2xhcmlzINCx0LXQttC10LLRi9C5XCIsXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTIucG5nXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0JrQvtC80L/Qu9C10LrRglwiLCB2YWx1ZTogXCLQv9C+0LvQvdGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQodC+0YHRgtC+0Y/QvdC40LVcIiwgdmFsdWU6IFwi0L3QvtCy0YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCINGA0LDQvNC60LhcIiwgdmFsdWU6IFwi0LfQvtC70L7RgtC+0LlcIiB9XG4gICAgICBdLFxuICAgICAgY291bnQ6IDExLFxuICAgICAgbWF4Q291bnQ6IDEyNCxcbiAgICAgIHByaWNlOiA2ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjRcIixcbiAgICAgIG5hbWU6IFwi0KDQvtCx0L7Rgi3Qv9GL0LvQtdGB0L7RgSBQVkNSIDA3MjZXIChQT0xBUklTKSwgUG9sYXJpcyDQsdC10LbQtdCy0YvQuSDRhtCy0LXRgiDQvtGE0LjRhtC40LDQu9GM0L3Ri9C5INC80LDQs9Cw0LfQuNC9INCf0L7Qu9Cw0YDQuNGBXCIsXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTMucG5nXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0JrQvtC80L/Qu9C10LrRglwiLCB2YWx1ZTogXCLQv9C+0LvQvdGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQodC+0YHRgtC+0Y/QvdC40LVcIiwgdmFsdWU6IFwi0L3QvtCy0YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCINGA0LDQvNC60LhcIiwgdmFsdWU6IFwi0LfQvtC70L7RgtC+0LlcIiB9XG4gICAgICBdLFxuICAgICAgY291bnQ6IDExLFxuICAgICAgbWF4Q291bnQ6IDIwLFxuICAgICAgcHJpY2U6IDY4MVxuICAgIH1cbiAgXSkpICBcbn1cbiIsImV4cG9ydCBjb25zdCBub3JtYWxpemVQcmljZSA9IChzdHIpID0+IHtcbiAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ29tcG9uZW50c1xuXG5pbXBvcnQgeyB1cGRhdGVQcm9kdWN0c1N1bW1hcnkgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2R1Y3RzXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jb3VudGVyXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy90YWJzXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zZWxlY3RcIlxuXG4vLyBTZWxlY3QgYWxsIHByb2R1Y3RzIG9wdGlvblxuXG5pbXBvcnQgeyBnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCJcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnNcIlxuXG5jb25zdCBzZWxlY3RBbGxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19oZWFkIC5jaGVja2JveF9fdGV4dFwiKVxuY29uc3Qgc2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1hbGxcIilcblxuc2VsZWN0QWxsVGV4dC50ZXh0Q29udGVudCA9IGDQktGL0LHRgNCw0YLRjCDQstGB0LUgKCR7Z2V0UHJvZHVjdHNDb3VudEZyb21TdG9yYWdlKCl9KWBcbnNlbGVjdEFsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlU2VsZWN0QWxsKVxuXG4vLyBJZiBzZWxlY3QgaXMgYWxyZWFkeSBhY3RpdmUgKGZyb20gc3RhcnQpIC0gdG9nZ2xlIGl0ZW1zXG5cbmlmIChzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkKSB7XG4gIHRvZ2dsZVNlbGVjdEFsbCgpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgY29uc3QgaXNDaGVja2VkID0gc2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZFxuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3RfX2xlZnQgLmNoZWNrYm94X19pbnB1dFwiKVxuXG4gIGlmIChpc0NoZWNrZWQpIHtcbiAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiAoY2hlY2tib3guY2hlY2tlZCA9IHRydWUpKVxuICB9IGVsc2Uge1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IChjaGVja2JveC5jaGVja2VkID0gZmFsc2UpKVxuICB9XG5cbiAgdG9nZ2xlQWN0aW9ucygpXG4gIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG59XG5cbi8vIFVwZGF0ZSBwcmljZXMgKGJ5IHNlbGVjdGVkIGVsZW1lbnRzKVxuXG51cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuIl0sIm5hbWVzIjpbInJlbW92ZVByb2R1Y3RGcm9tU3RvcmFnZSIsInJlbW92ZVByb2R1Y3RGcm9tUGFnZSIsImFjdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBbGwiLCJhY3Rpb25zQWN0aXZlQ2xhc3NOYW1lIiwidG9nZ2xlQWN0aW9ucyIsInNlbGVjdGVkUHJvZHVjdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrYm94ZXMiLCJmb3JFYWNoIiwiY2hlY2tib3giLCJwcm9kdWN0Tm9kZSIsImNsb3Nlc3QiLCJpZCIsImRhdGFzZXQiLCJ1cGRhdGVQcm9kdWN0c1N1bW1hcnkiLCJjYWxjdWxhdGVQcm9kdWN0UHJpY2UiLCJpbml0aWFsaXplQ291bnRlciIsImNvdW50ZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheSIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm1heFZhbHVlIiwibWF4IiwidHlwZXMiLCJzdGVwVXAiLCJiaW5kIiwic3RlcERvd24iLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiaXNFbm91Z2giLCJidXR0b24iLCJ0eXBlIiwiY3VycmVudFZhbHVlIiwiaXNTaWduIiwic2lnbk5vZGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJub3JtYWxpemVQcmljZSIsImNhbGN1bGF0ZVByb2R1Y3RzUHJpY2UiLCJwcm9kdWN0cyIsInByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnROb2RlIiwicHJvZHVjdCIsImNvdW50IiwiY2hpbGROb2RlcyIsInByb2R1Y3RNYXJrdXAiLCJnZXRQcm9kdWN0c0Zyb21TdG9yYWdlIiwiZ2V0UHJvZHVjdEZyb21TdG9yYWdlIiwiZ2V0UHJvZHVjdHNDb3VudEZyb21TdG9yYWdlIiwicmVzdG9yZVByb2R1Y3RGcm9tU3RvcmFnZSIsInByb2R1Y3RzQ29udGFpbmVyIiwic2VsZWN0QWxsVGV4dCIsInNlbGVjdEFsbENoZWNrYm94Iiwibm9kZSIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdENoaWxkIiwic2VsZWN0IiwicmVzdG9yZSIsImFjdGl2ZVByb2R1Y3RzQ291bnQiLCJmaWx0ZXIiLCJpc0RlbGV0ZWQiLCJjaGVja2VkSXRlbXNDb3VudCIsImNoZWNrZWQiLCJyZXN0b3JlUHJvZHVjdEZyb21QYWdlIiwiY29udGFpbnMiLCJzaWJsaW5nIiwibmV4dFNpYmxpbmciLCJuZXdOb2RlIiwiaW5zZXJ0QmVmb3JlIiwic3VtbWFyeUNvdW50Iiwic3VtbWFyeVByaWNlIiwic2VsZWN0cyIsInNlbGVjdE9wZW5lZENsYXNzTmFtZSIsInNlbGVjdEl0ZW1BY3RpdmVDbGFzc05hbWUiLCJpdGVtcyIsInRvZ2dsZSIsIml0ZW0iLCJjaGFuZ2UiLCJjdXJyZW50QWN0aXZlSXRlbSIsInRhYnNIYW5kbGVyIiwidGFic1N0YXR1cyIsInRhYkNoYW5nZSIsImZ1dHVyZUFjdGl2ZVRhYiIsImN1cnJlbnRBY3RpdmVUYWIiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2aW91c0hhbmRsZXIiLCJwcmV2aW91c1N0YXR1cyIsInRhYkhhbmRsZXIiLCJ0YWJTdGF0dXMiLCJuYW1lIiwiaW1hZ2VVcmwiLCJwcm9wZXJ0aWVzIiwibWF4Q291bnQiLCJtYXAiLCJrZXkiLCJqb2luIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0ciIsIlN0cmluZyIsInJlcGxhY2UiLCJ0b2dnbGVTZWxlY3RBbGwiLCJpc0NoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9