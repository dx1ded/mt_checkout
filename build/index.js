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
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total */ "./scripts/components/total.js");



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
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateSummaryTotal)(totalPrice);
  });
  [increment, decrement].forEach(function (button) {
    return button.addEventListener("click", function (event) {
      var type = event.target.value;
      types[type]();
      isEnough(parent, maxValue, +display.value);
      (0,_price__WEBPACK_IMPORTED_MODULE_1__.calculateProductPrice)(event.target.closest(".mtcheck-product"));
      (0,_products__WEBPACK_IMPORTED_MODULE_0__.updateProductsSummary)();
      var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateConfirmTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateOrderTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateConfirmTotal)(totalPrice);
      (0,_total__WEBPACK_IMPORTED_MODULE_2__.updateSummaryTotal)(totalPrice);
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

/***/ "./scripts/components/message.js":
/*!***************************************!*\
  !*** ./scripts/components/message.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMessage": () => (/* binding */ createMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

function createMessage(_ref, styles) {
  var container = _ref.container,
      type = _ref.type,
      text = _ref.text,
      isClose = _ref.isClose;
  // Remove old message (if it's avaible)
  var oldMessage = container.querySelector(".message");
  if (oldMessage) oldMessage.remove(); // Create message

  var message = document.createElement("div");
  message.classList.add("message", "message--".concat(type));
  message.textContent = text;
  Object.entries(styles).forEach(function (_ref2) {
    var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    message.style[key] = value;
  });

  if (isClose) {
    var close = document.createElement("button");
    close.classList.add("message__close");
    close.addEventListener("click", function () {
      return message.remove();
    });
    close.setAttribute("type", "button");
    close.setAttribute("aria-label", "Закрыть вспывающее сообщение");
    message.appendChild(close);
  }

  container.appendChild(message);
}

/***/ }),

/***/ "./scripts/components/offers.js":
/*!**************************************!*\
  !*** ./scripts/components/offers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./scripts/components/message.js");
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total */ "./scripts/components/total.js");


var couponForm = document.querySelector(".mtcheck-offers__coupon");
var certificateForm = document.querySelector(".mtcheck-offers__certificate");
var messageStyles = {
  top: "0",
  right: "-20px",
  maxWidth: "322px",
  transform: "translateX(100%)"
};

if (window.matchMedia("(max-width: 1023px)").matches) {
  messageStyles = {
    bottom: "-10px",
    left: "0",
    maxWidth: "322px",
    transform: "translateY(100%)"
  };
}

couponForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var coupon = "FFF111";
  var entryCoupon = event.target.querySelector("[type=text]").value; // * Здесь сделан для примера купон. По-идеи должен быть запрос на базу данных и та же проверка)

  if (coupon === entryCoupon) {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: couponForm,
      type: "success",
      text: "\u041A\u0443\u043F\u043E\u043D ".concat(coupon, " \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 5000\u0420 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D!"),
      isClose: true
    }, messageStyles);
    window.coupon = coupon;
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateSummaryTotal)(totalPrice);
  } else if (entryCoupon === "") {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: couponForm,
      type: "danger",
      text: "\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
      isClose: true
    }, messageStyles);
  } else {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: couponForm,
      type: "danger",
      text: "\u041A\u0443\u043F\u043E\u043D ".concat(entryCoupon, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"),
      isClose: true
    }, messageStyles);
  }
});
certificateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var certificate = "AAA111";
  var entryCertificate = event.target.querySelector("[type=text]").value; // * Здесь сделан для примера сертификат. По-идеи должен быть запрос на базу данных и та же проверка)

  if (certificate === entryCertificate) {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: certificateForm,
      type: "success",
      text: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 ".concat(certificate, " \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 7000\u0420 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D!"),
      isClose: true
    }, messageStyles);
    window.certificate = certificate;
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_1__.updateSummaryTotal)(totalPrice);
  } else if (entryCertificate === "") {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: certificateForm,
      type: "danger",
      text: "\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
      isClose: true
    }, messageStyles);
  } else {
    (0,_message__WEBPACK_IMPORTED_MODULE_0__.createMessage)({
      container: certificateForm,
      type: "danger",
      text: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 ".concat(entryCertificate, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"),
      isClose: true
    }, messageStyles);
  }
});

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
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./total */ "./scripts/components/total.js");






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
      var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
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
      var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
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
      var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
      (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
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
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
  });
  restore.addEventListener("click", function (_ref5) {
    var target = _ref5.target;
    var productNode = target.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.restoreProductFromStorage)(id);
    restoreProductFromPage(productNode, id);
    updateProductsSummary();
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
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
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
  });
  remove.addEventListener("click", function (_ref7) {
    var target = _ref7.target;
    var productNode = target.closest(".mtcheck-product");
    var id = productNode.dataset.id;
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.removeProductFromStorage)(id);
    removeProductFromPage(productNode, id);
    updateProductsSummary();
    var totalPrice = (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateOrderTable)();
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateConfirmTotal)(totalPrice);
    (0,_total__WEBPACK_IMPORTED_MODULE_6__.updateSummaryTotal)(totalPrice);
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

/***/ "./scripts/components/total.js":
/*!*************************************!*\
  !*** ./scripts/components/total.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateConfirmTable": () => (/* binding */ updateConfirmTable),
/* harmony export */   "updateConfirmTotal": () => (/* binding */ updateConfirmTotal),
/* harmony export */   "updateOrderTable": () => (/* binding */ updateOrderTable),
/* harmony export */   "updateSummaryTotal": () => (/* binding */ updateSummaryTotal)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./scripts/utils.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price */ "./scripts/components/price.js");

 // Здесь подсчет. Я сделал примерно, саму формулу надо доработать)

function updateConfirmTable() {
  var table = document.querySelector(".mtcheck-confirm .mtcheck-table");

  var _calculateProductsPri = (0,_price__WEBPACK_IMPORTED_MODULE_1__.calculateProductsPrice)(),
      price = _calculateProductsPri.price;

  var deliveryLabel = document.querySelector("[name=delivery-type]:checked").parentElement;
  var deliveryType = deliveryLabel.querySelector(".radio__text").textContent;
  var deliveryPrice = deliveryLabel.dataset.price;
  var payType = document.querySelector("[name=pay-type]:checked").parentElement.querySelector(".radio__text").textContent;
  table.innerHTML = "\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\n        \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \n        <span>(".concat(deliveryType, ")</span>\n      </p>\n      <span class=\"text text--md text--primary mtcheck-table__item-value\">").concat(deliveryPrice, " &#8381;</span>\n    </div>\n    <div class=\"mtcheck-table__item mtcheck-table__item--margin\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\n        \u041E\u043F\u043B\u0430\u0442\u0430 \n        <span>(").concat(payType, ")</span>\n      </p>\n    </div>\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\u0411\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0431\u0430\u043B\u043B\u044B</p>\n      <span class=\"text text--md text--primary mtcheck-table__item-value\">400 \u0431\u0430\u043B\u043B\u043E\u0432</span>\n    </div>\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\n        \u0421\u043A\u0438\u0434\u043A\u0430 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439, 5% \n        <span>(\u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442)</span>\n      </p>\n      <span class=\"text text--md text--primary mtcheck-table__item-value\">- 650 &#8381;</span>\n    </div>\n    ").concat(window.coupon ? "\n        <div class=\"mtcheck-table__item\">\n          <p class=\"text text--md text--primary mtcheck-table__item-name\">\n            \u041A\u0443\u043F\u043E\u043D \u043D\u0430 \u0441\u043A\u0438\u0434\u043A\u0443 \n            <span>(".concat(window.coupon, ")</span>\n          </p>\n          <span class=\"text text--md text--primary mtcheck-table__item-value\">- 5000 &#8381;</span>\n        </div>\n        ") : "", "\n    ").concat(window.certificate ? "\n        <div class=\"mtcheck-table__item\">\n          <p class=\"text text--md text--primary mtcheck-table__item-name\">\n            \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \n            <span>(".concat(window.certificate, ")</span>\n          </p>\n          <span class=\"text text--md text--primary mtcheck-table__item-value\">- 5000 &#8381;</span>\n        </div>\n        ") : "", "\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\n        \u0421\u043A\u0438\u0434\u043A\u0430 \u0437\u0430 \u0441\u0443\u043C\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0430, 3%\n      </p>\n      <span class=\"text text--md text--primary mtcheck-table__item-value\">- 4000 &#8381;</span>\n    </div>\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text text--md text--primary mtcheck-table__item-name\">\n        \u041D\u0430\u043B\u043E\u0433 \u041D\u0414\u0421, 20%\n      </p>\n      <span class=\"text text--md text--primary mtcheck-table__item-value\">").concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizePrice)(price * 0.2), " &#8381;</span>\n    </div>\n  ");
  return price;
}
function updateOrderTable() {
  var table = document.querySelector(".mtcheck-summary .mtcheck-table");

  var _calculateProductsPri2 = (0,_price__WEBPACK_IMPORTED_MODULE_1__.calculateProductsPrice)(),
      price = _calculateProductsPri2.price;

  var deliveryLabel = document.querySelector("[name=delivery-type]:checked").parentElement;
  var deliveryType = deliveryLabel.querySelector(".radio__text").textContent;
  var deliveryPrice = deliveryLabel.dataset.price;
  var payType = document.querySelector("[name=pay-type]:checked").parentElement.querySelector(".radio__text").textContent;
  table.innerHTML = "\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text mtcheck-table__item-name\">\n        \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \n        <span>(".concat(deliveryType, ")</span>\n      </p>\n      <span class=\"text mtcheck-table__item-value\">").concat(deliveryPrice, " &#8381;</span>\n    </div>\n    <div class=\"mtcheck-table__item mtcheck-table__item--margin\">\n      <p class=\"text mtcheck-table__item-name\">\n        \u041E\u043F\u043B\u0430\u0442\u0430 \n        <span>(").concat(payType, ")</span>\n      </p>\n    </div>\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text mtcheck-table__item-name\">\u0422\u043E\u0432\u0430\u0440\u044B, \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u0432</p>\n      <span class=\"text mtcheck-table__item-value\">").concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizePrice)(price), " &#8381;</span>\n    </div>\n    <div class=\"mtcheck-table__item\">\n      <p class=\"text mtcheck-table__item-name\">\u0421\u043A\u0438\u0434\u043A\u0430, %</p>\n      <span class=\"text mtcheck-table__item-value\">- 650 &#8381;</span>\n    </div>\n  ");
  return price;
}
function updateConfirmTotal(price) {
  document.querySelector(".mtcheck-confirm .mtcheck-total__sum").childNodes[0].textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizePrice)(price), " ");
}
function updateSummaryTotal(price) {
  document.querySelector(".mtcheck-summary__sum").childNodes[0].textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizePrice)(price), " ");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./scripts/storage.js");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/products */ "./scripts/components/products.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/counter */ "./scripts/components/counter.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs */ "./scripts/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/select */ "./scripts/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/offers */ "./scripts/components/offers.js");
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/actions */ "./scripts/components/actions.js");
/* harmony import */ var _components_total__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/total */ "./scripts/components/total.js");
// Components







 // Select all products option

var selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text");
var selectAllCheckbox = document.querySelector("#select-all");
selectAllText.textContent = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 (".concat((0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProductsCountFromStorage)(), ")");
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

  (0,_components_actions__WEBPACK_IMPORTED_MODULE_6__.toggleActions)();
  (0,_components_products__WEBPACK_IMPORTED_MODULE_1__.updateProductsSummary)();
  var totalPrice = (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTable)();
  (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateOrderTable)();
  (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTotal)(totalPrice);
  (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateSummaryTotal)(totalPrice);
} // Delivery on change


var deliveryRadio = document.querySelectorAll("[name=delivery-type]");
deliveryRadio.forEach(function (radio) {
  return radio.addEventListener("change", function () {
    var totalPrice = (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTable)();
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateOrderTable)();
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTotal)(totalPrice);
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateSummaryTotal)(totalPrice);
  });
}); // Pay on change

var payRadio = document.querySelectorAll("[name=pay-type]");
payRadio.forEach(function (radio) {
  return radio.addEventListener("change", function () {
    var totalPrice = (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTable)();
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateOrderTable)();
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTotal)(totalPrice);
    (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateSummaryTotal)(totalPrice);
  });
}); // Update prices (by selected elements)

(0,_components_products__WEBPACK_IMPORTED_MODULE_1__.updateProductsSummary)(); // Update tables (summary / total)

var totalPrice = (0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTable)();
(0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateOrderTable)();
(0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateConfirmTotal)(totalPrice);
(0,_components_total__WEBPACK_IMPORTED_MODULE_7__.updateSummaryTotal)(totalPrice);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXQSxLQUFLLENBQUN6SixnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO0lBQ2pFLElBQU0rQixVQUFVLEdBQUdyQixxRUFBa0IsRUFBckM7SUFDQUMsbUVBQWdCO0lBRWhCQyxxRUFBa0IsQ0FBQ21CLFVBQUQsQ0FBbEI7SUFDQWxCLHFFQUFrQixDQUFDa0IsVUFBRCxDQUFsQjtFQUNELENBTjJCLENBQVg7QUFBQSxDQUFqQixHQVFBOztBQUVBdkIsMkVBQXFCLElBRXJCOztBQUVBLElBQU11QixVQUFVLEdBQUdyQixxRUFBa0IsRUFBckM7QUFDQUMsbUVBQWdCO0FBRWhCQyxxRUFBa0IsQ0FBQ21CLFVBQUQsQ0FBbEI7QUFDQWxCLHFFQUFrQixDQUFDa0IsVUFBRCxDQUFsQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9zY3JpcHRzL2NvbXBvbmVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvY29tcG9uZW50cy9jb3VudGVyLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9zY3JpcHRzL2NvbXBvbmVudHMvb2ZmZXJzLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL3ByaWNlLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL3NjcmlwdHMvY29tcG9uZW50cy90YWJzLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9jb21wb25lbnRzL3RvdGFsLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9wcm9kdWN0TWFya3VwLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy91dGlscy5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tdF9jaGVja291dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tdF9jaGVja291dC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tdF9jaGVja291dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXRfY2hlY2tvdXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tdF9jaGVja291dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL210X2NoZWNrb3V0Ly4vc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVQcm9kdWN0RnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vc3RvcmFnZVwiXG5pbXBvcnQgeyByZW1vdmVQcm9kdWN0RnJvbVBhZ2UgfSBmcm9tIFwiLi9wcm9kdWN0c1wiXG5cbmNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdHNfX2FjdGlvbnNcIilcbmNvbnN0IHJlbW92ZUFsbCA9IGFjdGlvbnMucXVlcnlTZWxlY3RvcihcIiNyZW1vdmUtYWxsXCIpXG5jb25zdCBhY3Rpb25zQWN0aXZlQ2xhc3NOYW1lID0gXCJtdGNoZWNrLXByb2R1Y3RzX19hY3Rpb25zLS1hY3RpdmVcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWN0aW9ucygpIHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXRjaGVjay1wcm9kdWN0X19sZWZ0IC5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZFwiKVxuXG4gIGlmICghc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gYWN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKGFjdGlvbnNBY3RpdmVDbGFzc05hbWUpXG4gIH1cblxuICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoYWN0aW9uc0FjdGl2ZUNsYXNzTmFtZSlcbn1cblxucmVtb3ZlQWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdF9fbGVmdCAuY2hlY2tib3hfX2lucHV0OmNoZWNrZWRcIilcblxuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdE5vZGUgPSBjaGVja2JveC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlKGlkKVxuICAgIHJlbW92ZVByb2R1Y3RGcm9tUGFnZShwcm9kdWN0Tm9kZSwgaWQpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5IH0gZnJvbSBcIi4vcHJvZHVjdHNcIlxuaW1wb3J0IHsgY2FsY3VsYXRlUHJvZHVjdFByaWNlIH0gZnJvbSBcIi4vcHJpY2VcIlxuaW1wb3J0IHtcbiAgdXBkYXRlQ29uZmlybVRhYmxlLFxuICB1cGRhdGVPcmRlclRhYmxlLFxuICB1cGRhdGVDb25maXJtVG90YWwsXG4gIHVwZGF0ZVN1bW1hcnlUb3RhbFxufSBmcm9tIFwiLi90b3RhbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ291bnRlcihjb3VudGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGNvdW50ZXIucGFyZW50RWxlbWVudFxuICBcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19kaXNwbGF5XCIpXG4gIGNvbnN0IGluY3JlbWVudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19hY3Rpb24tLWluY3JlbWVudFwiKVxuICBjb25zdCBkZWNyZW1lbnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fYWN0aW9uLS1kZWNyZW1lbnRcIilcblxuICBjb25zdCBtYXhWYWx1ZSA9ICtkaXNwbGF5LmRhdGFzZXQubWF4XG4gIFxuICBjb25zdCB0eXBlcyA9IHtcbiAgICBcIitcIjogZGlzcGxheS5zdGVwVXAuYmluZChkaXNwbGF5KSxcbiAgICBcIi1cIjogZGlzcGxheS5zdGVwRG93bi5iaW5kKGRpc3BsYXkpXG4gIH1cblxuICBkaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWVcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5LnZhbHVlID0gMVxuICAgIH1cblxuICAgIGlzRW5vdWdoKHBhcmVudCwgbWF4VmFsdWUsIHZhbHVlKVxuICAgIGNhbGN1bGF0ZVByb2R1Y3RQcmljZShldmVudC50YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIikpXG4gICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcblxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgIHVwZGF0ZU9yZGVyVGFibGUoKVxuXG4gICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gIH0pXG5cbiAgO1tpbmNyZW1lbnQsIGRlY3JlbWVudF0uZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICBcbiAgICAgIHR5cGVzW3R5cGVdKClcbiAgICAgIGlzRW5vdWdoKHBhcmVudCwgbWF4VmFsdWUsICtkaXNwbGF5LnZhbHVlKVxuICAgICAgY2FsY3VsYXRlUHJvZHVjdFByaWNlKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKSlcbiAgICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG5cbiAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgICAgdXBkYXRlT3JkZXJUYWJsZSgpXG5cbiAgICAgIHVwZGF0ZUNvbmZpcm1Ub3RhbCh0b3RhbFByaWNlKVxuICAgICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgfVxuICApKVxufVxuXG5mdW5jdGlvbiBpc0Vub3VnaChwYXJlbnQsIG1heFZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgY29uc3QgaXNTaWduID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0X19zaWduXCIpXG5cbiAgaWYgKGN1cnJlbnRWYWx1ZSA8PSBtYXhWYWx1ZSAmJiAhaXNTaWduKSByZXR1cm5cbiAgZWxzZSBpZiAoY3VycmVudFZhbHVlIDw9IG1heFZhbHVlICYmIGlzU2lnbikge1xuICAgIHJldHVybiBpc1NpZ24ucmVtb3ZlKClcbiAgfVxuXG4gIC8vIEFkZCBzaWduIG9yIGp1c3Qga2VlcCBpdFxuXG4gIGlmIChpc1NpZ24pIHJldHVyblxuXG4gIGNvbnN0IHNpZ25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcblxuICBzaWduTm9kZS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiLCBcInRleHQtLXhzXCIsIFwibXRjaGVjay1wcm9kdWN0X19zaWduXCIpXG4gIHNpZ25Ob2RlLnRleHRDb250ZW50ID0gXCLQvdC10YIg0LIg0LLRi9Cx0YDQsNC90L3QvtC8INC60L7Qu9C40YfQtdGB0YLQstC1XCJcblxuICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHNpZ25Ob2RlKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UoeyBjb250YWluZXIsIHR5cGUsIHRleHQsIGlzQ2xvc2UgfSwgc3R5bGVzKSB7XG4gIC8vIFJlbW92ZSBvbGQgbWVzc2FnZSAoaWYgaXQncyBhdmFpYmxlKVxuXG4gIGNvbnN0IG9sZE1lc3NhZ2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlXCIpXG5cbiAgaWYgKG9sZE1lc3NhZ2UpIG9sZE1lc3NhZ2UucmVtb3ZlKClcblxuICAvLyBDcmVhdGUgbWVzc2FnZVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiLCBgbWVzc2FnZS0tJHt0eXBlfWApXG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0XG4gIFxuICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG1lc3NhZ2Uuc3R5bGVba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgaWYgKGlzQ2xvc2UpIHtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlX19jbG9zZVwiKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtZXNzYWdlLnJlbW92ZSgpKVxuXG4gICAgY2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgIGNsb3NlLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCLQl9Cw0LrRgNGL0YLRjCDQstGB0L/Ri9Cy0LDRjtGJ0LXQtSDRgdC+0L7QsdGJ0LXQvdC40LVcIilcblxuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQoY2xvc2UpXG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSlcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCJcbmltcG9ydCB7XG4gIHVwZGF0ZUNvbmZpcm1UYWJsZSxcbiAgdXBkYXRlT3JkZXJUYWJsZSxcbiAgdXBkYXRlQ29uZmlybVRvdGFsLFxuICB1cGRhdGVTdW1tYXJ5VG90YWxcbn0gZnJvbSBcIi4vdG90YWxcIlxuXG5jb25zdCBjb3Vwb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLW9mZmVyc19fY291cG9uXCIpXG5jb25zdCBjZXJ0aWZpY2F0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stb2ZmZXJzX19jZXJ0aWZpY2F0ZVwiKVxuXG5sZXQgbWVzc2FnZVN0eWxlcyA9IHtcbiAgdG9wOiBcIjBcIixcbiAgcmlnaHQ6IFwiLTIwcHhcIixcbiAgbWF4V2lkdGg6IFwiMzIycHhcIixcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIlxufVxuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDIzcHgpXCIpLm1hdGNoZXMpIHtcbiAgbWVzc2FnZVN0eWxlcyA9IHtcbiAgICBib3R0b206IFwiLTEwcHhcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBtYXhXaWR0aDogXCIzMjJweFwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgfVxufVxuXG5jb3Vwb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgXG4gIGNvbnN0IGNvdXBvbiA9IFwiRkZGMTExXCJcbiAgY29uc3QgZW50cnlDb3Vwb24gPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcihcIlt0eXBlPXRleHRdXCIpLnZhbHVlXG5cbiAgLy8gKiDQl9C00LXRgdGMINGB0LTQtdC70LDQvSDQtNC70Y8g0L/RgNC40LzQtdGA0LAg0LrRg9C/0L7QvS4g0J/Qvi3QuNC00LXQuCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LfQsNC/0YDQvtGBINC90LAg0LHQsNC30YMg0LTQsNC90L3Ri9GFINC4INGC0LAg0LbQtSDQv9GA0L7QstC10YDQutCwKVxuXG4gIGlmIChjb3Vwb24gPT09IGVudHJ5Q291cG9uKSB7XG4gICAgY3JlYXRlTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVyOiBjb3Vwb25Gb3JtLFxuICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgdGV4dDogYNCa0YPQv9C+0L0gJHtjb3Vwb259INC90LAg0YHRg9C80LzRgyA1MDAw0KAg0YPRgdC/0LXRiNC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvSFgLFxuICAgICAgICBpc0Nsb3NlOiB0cnVlXG4gICAgICB9LFxuICAgICAgbWVzc2FnZVN0eWxlc1xuICAgIClcblxuICAgIHdpbmRvdy5jb3Vwb24gPSBjb3Vwb25cblxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgIHVwZGF0ZU9yZGVyVGFibGUoKVxuXG4gICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gIH0gZWxzZSBpZiAoZW50cnlDb3Vwb24gPT09IFwiXCIpIHtcbiAgICBjcmVhdGVNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBjb250YWluZXI6IGNvdXBvbkZvcm0sXG4gICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIHRleHQ6IGDQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+YCxcbiAgICAgICAgaXNDbG9zZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VTdHlsZXNcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgY3JlYXRlTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVyOiBjb3Vwb25Gb3JtLFxuICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxuICAgICAgICB0ZXh0OiBg0JrRg9C/0L7QvSAke2VudHJ5Q291cG9ufSDQvdC1INC90LDQudC00LXQvWAsXG4gICAgICAgIGlzQ2xvc2U6IHRydWVcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlU3R5bGVzXG4gICAgKVxuICB9XG59KVxuXG5jZXJ0aWZpY2F0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBcbiAgY29uc3QgY2VydGlmaWNhdGUgPSBcIkFBQTExMVwiXG4gIGNvbnN0IGVudHJ5Q2VydGlmaWNhdGUgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcihcIlt0eXBlPXRleHRdXCIpLnZhbHVlXG5cbiAgLy8gKiDQl9C00LXRgdGMINGB0LTQtdC70LDQvSDQtNC70Y8g0L/RgNC40LzQtdGA0LAg0YHQtdGA0YLQuNGE0LjQutCw0YIuINCf0L4t0LjQtNC10Lgg0LTQvtC70LbQtdC9INCx0YvRgtGMINC30LDQv9GA0L7RgSDQvdCwINCx0LDQt9GDINC00LDQvdC90YvRhSDQuCDRgtCwINC20LUg0L/RgNC+0LLQtdGA0LrQsClcblxuICBpZiAoY2VydGlmaWNhdGUgPT09IGVudHJ5Q2VydGlmaWNhdGUpIHtcbiAgICBjcmVhdGVNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBjb250YWluZXI6IGNlcnRpZmljYXRlRm9ybSxcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIHRleHQ6IGDQodC10YDRgtC40YTQuNC60LDRgiAke2NlcnRpZmljYXRlfSDQvdCwINGB0YPQvNC80YMgNzAwMNCgINGD0YHQv9C10YjQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0L0hYCxcbiAgICAgICAgaXNDbG9zZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VTdHlsZXNcbiAgICApXG5cbiAgICB3aW5kb3cuY2VydGlmaWNhdGUgPSBjZXJ0aWZpY2F0ZVxuXG4gICAgY29uc3QgdG90YWxQcmljZSA9IHVwZGF0ZUNvbmZpcm1UYWJsZSgpXG4gICAgdXBkYXRlT3JkZXJUYWJsZSgpXG5cbiAgICB1cGRhdGVDb25maXJtVG90YWwodG90YWxQcmljZSlcbiAgICB1cGRhdGVTdW1tYXJ5VG90YWwodG90YWxQcmljZSlcbiAgfSBlbHNlIGlmIChlbnRyeUNlcnRpZmljYXRlID09PSBcIlwiKSB7XG4gICAgY3JlYXRlTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVyOiBjZXJ0aWZpY2F0ZUZvcm0sXG4gICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIHRleHQ6IGDQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+YCxcbiAgICAgICAgaXNDbG9zZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VTdHlsZXNcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgY3JlYXRlTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVyOiBjZXJ0aWZpY2F0ZUZvcm0sXG4gICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIHRleHQ6IGDQodC10YDRgtC40YTQuNC60LDRgiAke2VudHJ5Q2VydGlmaWNhdGV9INC90LUg0L3QsNC50LTQtdC9YCxcbiAgICAgICAgaXNDbG9zZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VTdHlsZXNcbiAgICApXG4gIH1cbn0pXG5cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVByaWNlIH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVByb2R1Y3RzUHJpY2UoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXRjaGVjay1wcm9kdWN0IC5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZFwiKV1cbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0cy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnROb2RlKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IGN1cnJlbnROb2RlLmNsb3Nlc3QoXCIubXRjaGVjay1wcm9kdWN0XCIpXG4gICAgY29uc3QgY291bnQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fZGlzcGxheVwiKS52YWx1ZVxuICAgIGNvbnN0IHByaWNlID0gcHJvZHVjdC5kYXRhc2V0LnByaWNlXG5cbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArPSBjb3VudCAqIHByaWNlXG4gIH0sIDApXG5cbiAgcmV0dXJuIHsgcHJpY2UsIGNvdW50OiBwcm9kdWN0cy5sZW5ndGggfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUHJvZHVjdFByaWNlKHByb2R1Y3QpIHtcbiAgY29uc3QgZGlzcGxheSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3ByaWNlXCIpXG4gIGNvbnN0IGNvdW50ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX2Rpc3BsYXlcIikudmFsdWVcbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0LmRhdGFzZXQucHJpY2VcblxuICBkaXNwbGF5LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtub3JtYWxpemVQcmljZShwcmljZSAqIGNvdW50KX0gYFxufVxuXG4iLCJpbXBvcnQgeyBwcm9kdWN0TWFya3VwIH0gZnJvbSBcIi4uL3Byb2R1Y3RNYXJrdXBcIlxuaW1wb3J0IHsgbm9ybWFsaXplUHJpY2UgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IHsgY2FsY3VsYXRlUHJvZHVjdHNQcmljZSB9IGZyb20gXCIuL3ByaWNlXCJcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCJcbmltcG9ydCB7IGluaXRpYWxpemVDb3VudGVyIH0gZnJvbSBcIi4vY291bnRlclwiXG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlLFxuICBnZXRQcm9kdWN0RnJvbVN0b3JhZ2UsXG4gIGdldFByb2R1Y3RzQ291bnRGcm9tU3RvcmFnZSxcbiAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlLFxuICByZXN0b3JlUHJvZHVjdEZyb21TdG9yYWdlXG59IGZyb20gXCIuLi9zdG9yYWdlXCJcbmltcG9ydCB7XG4gIHVwZGF0ZUNvbmZpcm1UYWJsZSxcbiAgdXBkYXRlT3JkZXJUYWJsZSxcbiAgdXBkYXRlQ29uZmlybVRvdGFsLFxuICB1cGRhdGVTdW1tYXJ5VG90YWxcbn0gZnJvbSBcIi4vdG90YWxcIlxuXG4vLyBSZW5kZXIgcHJvZHVjdHMgKHdpdGggaXRzIGZ1bmN0aW9uYWxpdHkpXG5cbmNvbnN0IHByb2R1Y3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19saXN0XCIpXG5jb25zdCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzRnJvbVN0b3JhZ2UoKVxuXG5jb25zdCBzZWxlY3RBbGxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19oZWFkIC5jaGVja2JveF9fdGV4dFwiKVxuY29uc3Qgc2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1hbGxcIilcblxucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICBjb25zdCBub2RlID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhcbiAgICBwcm9kdWN0TWFya3VwKHByb2R1Y3QpLFxuICAgIFwidGV4dC9odG1sXCJcbiAgKS5ib2R5LmZpcnN0Q2hpbGRcblxuICBjb25zdCBzZWxlY3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hfX2lucHV0XCIpXG4gIGNvbnN0IHJlbW92ZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3JlbW92ZVwiKVxuICBjb25zdCByZXN0b3JlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdF9fcmVzdG9yZVwiKVxuICBjb25zdCBjb3VudGVyID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJcIilcblxuICBpZiAoc2VsZWN0KSB7XG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdG9nZ2xlQWN0aW9ucygpXG4gICAgICBcbiAgICAgIGNvbnN0IGFjdGl2ZVByb2R1Y3RzQ291bnQgPSBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlKCkuZmlsdGVyKCh7IGlzRGVsZXRlZCB9KSA9PiAhaXNEZWxldGVkKVxuICAgICAgY29uc3QgY2hlY2tlZEl0ZW1zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm10Y2hlY2stcHJvZHVjdF9fbGVmdCAuY2hlY2tib3hfX2lucHV0OmNoZWNrZWRcIilcblxuICAgICAgaWYgKGFjdGl2ZVByb2R1Y3RzQ291bnQgIT09IGNoZWNrZWRJdGVtc0NvdW50KSBzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2VcblxuICAgICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcblxuICAgICAgY29uc3QgdG90YWxQcmljZSA9IHVwZGF0ZUNvbmZpcm1UYWJsZSgpXG4gICAgICB1cGRhdGVPcmRlclRhYmxlKClcblxuICAgICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgICB1cGRhdGVTdW1tYXJ5VG90YWwodG90YWxQcmljZSlcbiAgICB9KVxuICB9XG4gIFxuICBpZiAocmVtb3ZlKSB7XG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdE5vZGUgPSB0YXJnZXQuY2xvc2VzdChcIi5tdGNoZWNrLXByb2R1Y3RcIilcbiAgICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgICByZW1vdmVQcm9kdWN0RnJvbVN0b3JhZ2UoaWQpXG4gICAgICByZW1vdmVQcm9kdWN0RnJvbVBhZ2UocHJvZHVjdE5vZGUsIGlkKVxuICAgICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcblxuICAgICAgY29uc3QgdG90YWxQcmljZSA9IHVwZGF0ZUNvbmZpcm1UYWJsZSgpXG4gICAgICB1cGRhdGVPcmRlclRhYmxlKClcblxuICAgICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgICB1cGRhdGVTdW1tYXJ5VG90YWwodG90YWxQcmljZSlcbiAgICB9KVxuICB9XG4gIFxuICBpZiAocmVzdG9yZSkge1xuICAgIHJlc3RvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0Tm9kZSA9IHRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgICAgY29uc3QgaWQgPSBwcm9kdWN0Tm9kZS5kYXRhc2V0LmlkXG5cbiAgICAgIHJlc3RvcmVQcm9kdWN0RnJvbVN0b3JhZ2UoaWQpXG4gICAgICByZXN0b3JlUHJvZHVjdEZyb21QYWdlKHByb2R1Y3ROb2RlLCBpZClcbiAgICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG5cbiAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgICAgdXBkYXRlT3JkZXJUYWJsZSgpXG5cbiAgICAgIHVwZGF0ZUNvbmZpcm1Ub3RhbCh0b3RhbFByaWNlKVxuICAgICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpemVDb3VudGVyKGNvdW50ZXIpXG5cbiAgcHJvZHVjdHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBub2RlKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3RGcm9tUGFnZShjdXJyZW50Tm9kZSwgaWQpIHtcbiAgY29uc3QgaXNEZWxldGVkID0gY3VycmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibXRjaGVjay1wcm9kdWN0LS1kZWxldGVkXCIpXG5cbiAgaWYgKGlzRGVsZXRlZCkge1xuICAgIHJldHVybiBjdXJyZW50Tm9kZS5yZW1vdmUoKVxuICB9XG5cbiAgY29uc3Qgc2libGluZyA9IGN1cnJlbnROb2RlLm5leHRTaWJsaW5nXG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKFxuICAgIHByb2R1Y3RNYXJrdXAoZ2V0UHJvZHVjdEZyb21TdG9yYWdlKGlkKSksXG4gICAgXCJ0ZXh0L2h0bWxcIlxuICApLmJvZHkuZmlyc3RDaGlsZFxuXG4gIGNvbnN0IHJlbW92ZSA9IG5ld05vZGUucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RfX3JlbW92ZVwiKVxuICBjb25zdCByZXN0b3JlID0gbmV3Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm10Y2hlY2stcHJvZHVjdF9fcmVzdG9yZVwiKVxuXG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBwcm9kdWN0Tm9kZSA9IHRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlKGlkKVxuICAgIHJlbW92ZVByb2R1Y3RGcm9tUGFnZShwcm9kdWN0Tm9kZSwgaWQpXG4gICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcblxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgIHVwZGF0ZU9yZGVyVGFibGUoKVxuXG4gICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gIH0pXG5cbiAgcmVzdG9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBwcm9kdWN0Tm9kZSA9IHRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgcmVzdG9yZVByb2R1Y3RGcm9tU3RvcmFnZShpZClcbiAgICByZXN0b3JlUHJvZHVjdEZyb21QYWdlKHByb2R1Y3ROb2RlLCBpZClcbiAgICB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuXG4gICAgY29uc3QgdG90YWxQcmljZSA9IHVwZGF0ZUNvbmZpcm1UYWJsZSgpXG4gICAgdXBkYXRlT3JkZXJUYWJsZSgpXG5cbiAgICB1cGRhdGVDb25maXJtVG90YWwodG90YWxQcmljZSlcbiAgICB1cGRhdGVTdW1tYXJ5VG90YWwodG90YWxQcmljZSlcbiAgfSlcblxuICBzZWxlY3RBbGxUZXh0LnRleHRDb250ZW50ID0gYNCS0YvQsdGA0LDRgtGMINCy0YHQtSAoJHtnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UoKX0pYFxuXG4gIGN1cnJlbnROb2RlLnJlbW92ZSgpXG4gIHByb2R1Y3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdOb2RlLCBzaWJsaW5nKVxuXG4gIHRvZ2dsZUFjdGlvbnMoKVxufVxuXG5mdW5jdGlvbiByZXN0b3JlUHJvZHVjdEZyb21QYWdlKGN1cnJlbnROb2RlLCBpZCkge1xuICBjb25zdCBzaWJsaW5nID0gY3VycmVudE5vZGUubmV4dFNpYmxpbmdcbiAgY29uc3QgbmV3Tm9kZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXG4gICAgcHJvZHVjdE1hcmt1cChnZXRQcm9kdWN0RnJvbVN0b3JhZ2UoaWQpKSxcbiAgICBcInRleHQvaHRtbFwiXG4gICkuYm9keS5maXJzdENoaWxkXG5cbiAgY29uc3Qgc2VsZWN0ID0gbmV3Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94X19pbnB1dFwiKVxuICBjb25zdCByZW1vdmUgPSBuZXdOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0X19yZW1vdmVcIilcbiAgY29uc3QgY291bnRlciA9IG5ld05vZGUucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyXCIpXG5cbiAgaWYgKHNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQpIHNlbGVjdC5jaGVja2VkID0gdHJ1ZVxuXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0b2dnbGVBY3Rpb25zKClcbiAgICBcbiAgICBjb25zdCBhY3RpdmVQcm9kdWN0c0NvdW50ID0gZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSgpLmZpbHRlcigoeyBpc0RlbGV0ZWQgfSkgPT4gIWlzRGVsZXRlZClcbiAgICBjb25zdCBjaGVja2VkSXRlbXNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXRjaGVjay1wcm9kdWN0X19sZWZ0IC5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZFwiKVxuXG4gICAgaWYgKGFjdGl2ZVByb2R1Y3RzQ291bnQgIT09IGNoZWNrZWRJdGVtc0NvdW50KSBzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2VcblxuICAgIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG5cbiAgICBjb25zdCB0b3RhbFByaWNlID0gdXBkYXRlQ29uZmlybVRhYmxlKClcbiAgICB1cGRhdGVPcmRlclRhYmxlKClcblxuICAgIHVwZGF0ZUNvbmZpcm1Ub3RhbCh0b3RhbFByaWNlKVxuICAgIHVwZGF0ZVN1bW1hcnlUb3RhbCh0b3RhbFByaWNlKVxuICB9KVxuXG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBwcm9kdWN0Tm9kZSA9IHRhcmdldC5jbG9zZXN0KFwiLm10Y2hlY2stcHJvZHVjdFwiKVxuICAgIGNvbnN0IGlkID0gcHJvZHVjdE5vZGUuZGF0YXNldC5pZFxuXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlKGlkKVxuICAgIHJlbW92ZVByb2R1Y3RGcm9tUGFnZShwcm9kdWN0Tm9kZSwgaWQpXG4gICAgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5KClcblxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICAgIHVwZGF0ZU9yZGVyVGFibGUoKVxuXG4gICAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gICAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4gIH0pXG5cbiAgaW5pdGlhbGl6ZUNvdW50ZXIoY291bnRlcilcblxuICBzZWxlY3RBbGxUZXh0LnRleHRDb250ZW50ID0gYNCS0YvQsdGA0LDRgtGMINCy0YHQtSAoJHtnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UoKX0pYFxuXG4gIGN1cnJlbnROb2RlLnJlbW92ZSgpXG4gIHByb2R1Y3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdOb2RlLCBzaWJsaW5nKVxuICBcbiAgdG9nZ2xlQWN0aW9ucygpXG59XG5cbi8vIFVwZGF0ZSBwcm9kdWN0cy1zdW1tYXJ5ICh1bmRlciB0aGUgcHJvZHVjdHMgbGlzdCkgKGNvdW50IC8gcHJpY2UpXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c1N1bW1hcnkoKSB7XG4gIGNvbnN0IHN1bW1hcnlDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1wcm9kdWN0c19fY291bnRcIilcbiAgY29uc3Qgc3VtbWFyeVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19zdW1cIilcblxuICBjb25zdCB7IGNvdW50LCBwcmljZSB9ID0gY2FsY3VsYXRlUHJvZHVjdHNQcmljZSgpXG5cbiAgc3VtbWFyeUNvdW50LnRleHRDb250ZW50ID0gYNCi0L7QstCw0YDQvtCyLCAke2NvdW50fSDRiNGCLmBcbiAgc3VtbWFyeVByaWNlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtub3JtYWxpemVQcmljZShwcmljZSl9IGBcbn1cbiIsImNvbnN0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKVxuY29uc3Qgc2VsZWN0T3BlbmVkQ2xhc3NOYW1lID0gXCJzZWxlY3QtLW9wZW5lZFwiXG5jb25zdCBzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lID0gXCJzZWxlY3RfX2l0ZW0tLWFjdGl2ZVwiXG5cbnNlbGVjdHMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0X19pdGVtXCIpXG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUuYmluZCh0aGlzLCBzZWxlY3QpKVxuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgY2hhbmdlLmJpbmQodGhpcywgc2VsZWN0KVxuICApKVxufSlcblxuZnVuY3Rpb24gdG9nZ2xlKHNlbGVjdCkge1xuICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RPcGVuZWRDbGFzc05hbWUpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZShzZWxlY3QsIGV2ZW50KSB7XG4gIGNvbnN0IGRpc3BsYXkgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX2Rpc3BsYXlcIilcbiAgY29uc3QgY3VycmVudEFjdGl2ZUl0ZW0gPSBzZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0SXRlbUFjdGl2ZUNsYXNzTmFtZX1gKVxuICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dENvbnRlbnRcblxuICAvLyBDaGFuZ2UgYWN0aXZlIHRhYiAoYnkgc3R5bGUpXG5cbiAgY3VycmVudEFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RJdGVtQWN0aXZlQ2xhc3NOYW1lKVxuICBpdGVtLmNsYXNzTGlzdC5hZGQoc2VsZWN0SXRlbUFjdGl2ZUNsYXNzTmFtZSlcbn1cbiIsImNvbnN0IHRhYnNIYW5kbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhYi1oYW5kbGVyXVwiKVxuY29uc3QgdGFic1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWItc3RhdHVzXVwiKVxuXG50YWJzSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiQ2hhbmdlKVxuXG5mdW5jdGlvbiB0YWJDaGFuZ2UoKSB7XG4gIGNvbnN0IGZ1dHVyZUFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWI9JyddXCIpXG4gIGNvbnN0IGN1cnJlbnRBY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFiPSd0cnVlJ11cIilcblxuICBjdXJyZW50QWN0aXZlVGFiLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiXCIpXG4gIGZ1dHVyZUFjdGl2ZVRhYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcInRydWVcIilcblxuICAvLyBTZXQgdGV4dCBub2Rlc1xuXG4gIGNvbnN0IHByZXZpb3VzSGFuZGxlciA9IHRhYnNIYW5kbGVyLnRleHRDb250ZW50XG4gIGNvbnN0IHByZXZpb3VzU3RhdHVzID0gdGFic1N0YXR1cy50ZXh0Q29udGVudFxuXG4gIHRhYnNIYW5kbGVyLnRleHRDb250ZW50ID0gdGFic0hhbmRsZXIuZGF0YXNldC50YWJIYW5kbGVyXG4gIHRhYnNTdGF0dXMudGV4dENvbnRlbnQgPSB0YWJzU3RhdHVzLmRhdGFzZXQudGFiU3RhdHVzXG5cbiAgdGFic0hhbmRsZXIuc2V0QXR0cmlidXRlKFwiZGF0YS10YWItaGFuZGxlclwiLCBwcmV2aW91c0hhbmRsZXIpXG4gIHRhYnNTdGF0dXMuc2V0QXR0cmlidXRlKFwiZGF0YS10YWItc3RhdHVzXCIsIHByZXZpb3VzU3RhdHVzKVxufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplUHJpY2UgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IHsgY2FsY3VsYXRlUHJvZHVjdHNQcmljZSB9IGZyb20gXCIuL3ByaWNlXCJcblxuLy8g0JfQtNC10YHRjCDQv9C+0LTRgdGH0LXRgi4g0K8g0YHQtNC10LvQsNC7INC/0YDQuNC80LXRgNC90L4sINGB0LDQvNGDINGE0L7RgNC80YPQu9GDINC90LDQtNC+INC00L7RgNCw0LHQvtGC0LDRgtGMKVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlybVRhYmxlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1jb25maXJtIC5tdGNoZWNrLXRhYmxlXCIpXG5cbiAgY29uc3QgeyBwcmljZSB9ID0gY2FsY3VsYXRlUHJvZHVjdHNQcmljZSgpXG4gIGNvbnN0IGRlbGl2ZXJ5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9ZGVsaXZlcnktdHlwZV06Y2hlY2tlZFwiKS5wYXJlbnRFbGVtZW50XG4gIGNvbnN0IGRlbGl2ZXJ5VHlwZSA9IGRlbGl2ZXJ5TGFiZWwucXVlcnlTZWxlY3RvcihcIi5yYWRpb19fdGV4dFwiKS50ZXh0Q29udGVudFxuICBjb25zdCBkZWxpdmVyeVByaWNlID0gZGVsaXZlcnlMYWJlbC5kYXRhc2V0LnByaWNlXG4gIGNvbnN0IHBheVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9cGF5LXR5cGVdOmNoZWNrZWRcIikucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhZGlvX190ZXh0XCIpLnRleHRDb250ZW50XG5cbiAgdGFibGUuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLW5hbWVcIj5cbiAgICAgICAg0JTQvtGB0YLQsNCy0LrQsCBcbiAgICAgICAgPHNwYW4+KCR7ZGVsaXZlcnlUeXBlfSk8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLXZhbHVlXCI+JHtkZWxpdmVyeVByaWNlfSAmIzgzODE7PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtIG10Y2hlY2stdGFibGVfX2l0ZW0tLW1hcmdpblwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+XG4gICAgICAgINCe0L/Qu9Cw0YLQsCBcbiAgICAgICAgPHNwYW4+KCR7cGF5VHlwZX0pPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLW5hbWVcIj7QkdC+0L3Rg9GB0L3Ri9C1INCx0LDQu9C70Ys8L3A+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLXZhbHVlXCI+NDAwINCx0LDQu9C70L7Qsjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay10YWJsZV9faXRlbVwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+XG4gICAgICAgINCh0LrQuNC00LrQsCDQs9GA0YPQv9C/0LUg0L/QvtC60YPQv9Cw0YLQtdC70LXQuSwgNSUgXG4gICAgICAgIDxzcGFuPijRgdC10YDQtdCx0YDRj9C90L3Ri9C5INC60LvQuNC10L3Rgik8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLXZhbHVlXCI+LSA2NTAgJiM4MzgxOzwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICAke3dpbmRvdy5jb3Vwb25cbiAgICAgID8gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay10YWJsZV9faXRlbVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dCB0ZXh0LS1tZCB0ZXh0LS1wcmltYXJ5IG10Y2hlY2stdGFibGVfX2l0ZW0tbmFtZVwiPlxuICAgICAgICAgICAg0JrRg9C/0L7QvSDQvdCwINGB0LrQuNC00LrRgyBcbiAgICAgICAgICAgIDxzcGFuPigke3dpbmRvdy5jb3Vwb259KTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS12YWx1ZVwiPi0gNTAwMCAmIzgzODE7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgOiBcIlwiXG4gICAgfVxuICAgICR7d2luZG93LmNlcnRpZmljYXRlXG4gICAgICA/IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stdGFibGVfX2l0ZW1cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLW5hbWVcIj5cbiAgICAgICAgICAgINCh0LXRgNGC0LjRhNC40LrQsNGCIFxuICAgICAgICAgICAgPHNwYW4+KCR7d2luZG93LmNlcnRpZmljYXRlfSk8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB0ZXh0LS1tZCB0ZXh0LS1wcmltYXJ5IG10Y2hlY2stdGFibGVfX2l0ZW0tdmFsdWVcIj4tIDUwMDAgJiM4MzgxOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgIDogXCJcIlxuICAgIH1cbiAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay10YWJsZV9faXRlbVwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+XG4gICAgICAgINCh0LrQuNC00LrQsCDQt9CwINGB0YPQvNC80YMg0LfQsNC60LDQt9CwLCAzJVxuICAgICAgPC9wPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS12YWx1ZVwiPi0gNDAwMCAmIzgzODE7PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgdGV4dC0tbWQgdGV4dC0tcHJpbWFyeSBtdGNoZWNrLXRhYmxlX19pdGVtLW5hbWVcIj5cbiAgICAgICAg0J3QsNC70L7QsyDQndCU0KEsIDIwJVxuICAgICAgPC9wPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay10YWJsZV9faXRlbS12YWx1ZVwiPiR7bm9ybWFsaXplUHJpY2UocHJpY2UgKiAwLjIpfSAmIzgzODE7PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgXG5cbiAgcmV0dXJuIHByaWNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcmRlclRhYmxlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRjaGVjay1zdW1tYXJ5IC5tdGNoZWNrLXRhYmxlXCIpXG5cbiAgY29uc3QgeyBwcmljZSB9ID0gY2FsY3VsYXRlUHJvZHVjdHNQcmljZSgpXG4gIGNvbnN0IGRlbGl2ZXJ5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9ZGVsaXZlcnktdHlwZV06Y2hlY2tlZFwiKS5wYXJlbnRFbGVtZW50XG4gIGNvbnN0IGRlbGl2ZXJ5VHlwZSA9IGRlbGl2ZXJ5TGFiZWwucXVlcnlTZWxlY3RvcihcIi5yYWRpb19fdGV4dFwiKS50ZXh0Q29udGVudFxuICBjb25zdCBkZWxpdmVyeVByaWNlID0gZGVsaXZlcnlMYWJlbC5kYXRhc2V0LnByaWNlXG4gIGNvbnN0IHBheVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9cGF5LXR5cGVdOmNoZWNrZWRcIikucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhZGlvX190ZXh0XCIpLnRleHRDb250ZW50XG5cbiAgdGFibGUuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+XG4gICAgICAgINCU0L7RgdGC0LDQstC60LAgXG4gICAgICAgIDxzcGFuPigke2RlbGl2ZXJ5VHlwZX0pPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IG10Y2hlY2stdGFibGVfX2l0ZW0tdmFsdWVcIj4ke2RlbGl2ZXJ5UHJpY2V9ICYjODM4MTs8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stdGFibGVfX2l0ZW0gbXRjaGVjay10YWJsZV9faXRlbS0tbWFyZ2luXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+XG4gICAgICAgINCe0L/Qu9Cw0YLQsCBcbiAgICAgICAgPHNwYW4+KCR7cGF5VHlwZX0pPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+0KLQvtCy0LDRgNGLLCDRgSDRg9GH0LXRgtC+0Lwg0L3QsNC70L7Qs9C+0LI8L3A+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQgbXRjaGVjay10YWJsZV9faXRlbS12YWx1ZVwiPiR7bm9ybWFsaXplUHJpY2UocHJpY2UpfSAmIzgzODE7PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXRhYmxlX19pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQgbXRjaGVjay10YWJsZV9faXRlbS1uYW1lXCI+0KHQutC40LTQutCwLCAlPC9wPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IG10Y2hlY2stdGFibGVfX2l0ZW0tdmFsdWVcIj4tIDY1MCAmIzgzODE7PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgXG5cbiAgcmV0dXJuIHByaWNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb25maXJtVG90YWwocHJpY2UpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLWNvbmZpcm0gLm10Y2hlY2stdG90YWxfX3N1bVwiKVxuICAgIC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYCR7bm9ybWFsaXplUHJpY2UocHJpY2UpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdW1tYXJ5VG90YWwocHJpY2UpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXN1bW1hcnlfX3N1bVwiKVxuICAgIC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYCR7bm9ybWFsaXplUHJpY2UocHJpY2UpfSBgXG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVQcmljZSB9IGZyb20gXCIuL3V0aWxzXCJcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RNYXJrdXAgPSAoe1xuICBpZCxcbiAgaXNEZWxldGVkLFxuICBuYW1lLFxuICBpbWFnZVVybCxcbiAgcHJvcGVydGllcyxcbiAgY291bnQsXG4gIG1heENvdW50LFxuICBwcmljZVxufSkgPT4gKFxuICAhaXNEZWxldGVkXG4gICAgPyBgXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdFwiIGRhdGEtaWQ9XCIke2lkfVwiIGRhdGEtcHJpY2U9XCIke3ByaWNlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19sZWZ0XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlbiBjaGVja2JveF9faW5wdXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tib3hfX2Rpc3BsYXlcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0YLQvtCy0LDRgNCwXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2luZm9cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay1wcm9kdWN0X19uYW1lXCI+JHtuYW1lfTwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX3Byb3BlcnRpZXNcIj5cbiAgICAgICAgICAgICAgJHtwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IChgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB0ZXh0LS14cyB0ZXh0LS1zZWNvbmRhcnkgbXRjaGVjay1wcm9kdWN0X19wcm9wZXJ0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7a2V5fTogJHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgYCkpLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X19yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2NvdW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiJHtjb3VudH1cIiBtaW49XCIxXCIgZGF0YS1tYXg9XCIke21heENvdW50fVwiIGNsYXNzPVwiY291bnRlcl9fZGlzcGxheVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiLVwiIGNsYXNzPVwiYnRuLXJlc2V0IGNvdW50ZXJfX2FjdGlvbiBjb3VudGVyX19hY3Rpb24tLWRlY3JlbWVudFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiK1wiIGNsYXNzPVwiYnRuLXJlc2V0IGNvdW50ZXJfX2FjdGlvbiBjb3VudGVyX19hY3Rpb24tLWluY3JlbWVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtLW1kIHRleHQtLXByaW1hcnkgbXRjaGVjay1wcm9kdWN0X19wcmljZVwiPiR7bm9ybWFsaXplUHJpY2UocHJpY2UgKiBjb3VudCl9IDxzcGFuPiYjODM4MTs8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBtdGNoZWNrLXByb2R1Y3RfX3JlbW92ZVwiIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDRgtC+0LLQsNGAINC40Lcg0LrQvtGA0LfQuNC90YtcIj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgICBgXG4gICAgOiBgXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdCBtdGNoZWNrLXByb2R1Y3QtLWRlbGV0ZWRcIiBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdGNoZWNrLXByb2R1Y3RfX2luZm9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dCBtdGNoZWNrLXByb2R1Y3RfX25hbWVcIj4ke25hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10Y2hlY2stcHJvZHVjdF9fcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlc2V0IGxpbmsgbXRjaGVjay1wcm9kdWN0X19yZXN0b3JlXCIgZGF0YS1hY3Rpb249XCJwcm9kdWN0LXJlc3RvcmVcIj7QstC+0YHRgdGC0LDQvdC+0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRjaGVjay1wcm9kdWN0X193cmFwcGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlc2V0IG10Y2hlY2stcHJvZHVjdF9fcmVtb3ZlXCIgYXJpYS1sYWJlbD1cItCf0L7Qu9C90L7RgdGC0YzRjiDRg9C00LDQu9C40YLRjCDRgtC+0LLQsNGAINC40Lcg0LrQvtGA0LfQuNC90YtcIj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgICBgXG4pXG4iLCJleHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSA9ICgpID0+IChcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpKVxuKVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNDb3VudEZyb21TdG9yYWdlID0gKCkgPT4gKFxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIikpXG4gICAgLmZpbHRlcigoeyBpc0RlbGV0ZWQgfSkgPT4gIWlzRGVsZXRlZClcbiAgICAubGVuZ3RoXG4pXG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RnJvbVN0b3JhZ2UgPSAoaWQpID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSBnZXRQcm9kdWN0c0Zyb21TdG9yYWdlKClcbiAgY29uc3QgaW5kZXggPSBwcm9kdWN0cy5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKVxuICBcbiAgcmV0dXJuIHByb2R1Y3RzW2luZGV4XVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlID0gKGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSgpXG4gIGNvbnN0IGluZGV4ID0gcHJvZHVjdHMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZClcbiAgXG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1tpbmRleF1cblxuICBwcm9kdWN0LmlzRGVsZXRlZFxuICAgID8gcHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIDogKHByb2R1Y3RzW2luZGV4XVtcImlzRGVsZXRlZFwiXSA9IHRydWUpXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpXG59XG5cbmV4cG9ydCBjb25zdCByZXN0b3JlUHJvZHVjdEZyb21TdG9yYWdlID0gKGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gZ2V0UHJvZHVjdHNGcm9tU3RvcmFnZSgpXG4gIGNvbnN0IGluZGV4ID0gcHJvZHVjdHMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZClcbiAgXG4gIHByb2R1Y3RzW2luZGV4XVtcImlzRGVsZXRlZFwiXSA9IGZhbHNlXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpXG59XG5cbi8vICog0KPQtNCw0LvQuNGC0Ywg0Y3RgtC+LCDQu9C40YjRjCDQtNC70Y8g0YLQtdGB0YLQsFxuXG5pZiAoIWdldFByb2R1Y3RzRnJvbVN0b3JhZ2UoKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KFtcbiAgICB7XG4gICAgICBpZDogXCIxXCIsXG4gICAgICBuYW1lOiBcItCi0LDQudC80LXRgCDQutGD0YXQvtC90L3Ri9C5LCDRjdC70LXQutGC0YDQvtC90L3Ri9C5LCBCYWxkclwiLFxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xLnBuZ1wiLFxuICAgICAgcHJvcGVydGllczogW1xuICAgICAgICB7IGtleTogXCLQkdGA0LXQvdC0XCIsIHZhbHVlOiBcIkJhbGRyXCIgfSxcbiAgICAgIF0sXG4gICAgICBjb3VudDogMSxcbiAgICAgIG1heENvdW50OiA1LFxuICAgICAgcHJpY2U6IDEyNjI4MVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgbmFtZTogXCLQk9Cw0LfQvtCx0LXRgtC+0L3QvdGL0Lkg0YHRgtC10L3QvtCy0L7QuSDQsdC70L7QuiBENDAwIDYwMHgzMDB4MjUwXCIsXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTIucG5nXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCXCIsIHZhbHVlOiBcItCx0LXQttC10LLRi9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0JrQvtC80L/Qu9C10LrRglwiLCB2YWx1ZTogXCLQv9C+0LvQvdGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQodC+0YHRgtC+0Y/QvdC40LVcIiwgdmFsdWU6IFwi0L3QvtCy0YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCg0LDQt9C80LXRgFwiLCB2YWx1ZTogXCIyOFwiIH0sXG4gICAgICAgIHsga2V5OiBcItCm0LLQtdGCINGA0LDQvNC60LhcIiwgdmFsdWU6IFwi0LfQvtC70L7RgtC+0LlcIiB9XG4gICAgICBdLFxuICAgICAgY291bnQ6IDIsXG4gICAgICBtYXhDb3VudDogOCxcbiAgICAgIHByaWNlOiAxMjQyXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCIzXCIsXG4gICAgICBpc0RlbGV0ZWQ6IHRydWUsXG4gICAgICBuYW1lOiBcItCg0L7QsdC+0YIt0L/Ri9C70LXRgdC+0YEgUFZDUiAwNzI2VyAoUE9MQVJJUyksIFBvbGFyaXMg0LHQtdC20LXQstGL0LlcIixcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMi5wbmdcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgeyBrZXk6IFwi0KbQstC10YJcIiwgdmFsdWU6IFwi0LHQtdC20LXQstGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQmtC+0LzQv9C70LXQutGCXCIsIHZhbHVlOiBcItC/0L7Qu9C90YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCh0L7RgdGC0L7Rj9C90LjQtVwiLCB2YWx1ZTogXCLQvdC+0LLRi9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0KDQsNC30LzQtdGAXCIsIHZhbHVlOiBcIjI4XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0KbQstC10YIg0YDQsNC80LrQuFwiLCB2YWx1ZTogXCLQt9C+0LvQvtGC0L7QuVwiIH1cbiAgICAgIF0sXG4gICAgICBjb3VudDogMTEsXG4gICAgICBtYXhDb3VudDogMTI0LFxuICAgICAgcHJpY2U6IDY4MVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgbmFtZTogXCLQoNC+0LHQvtGCLdC/0YvQu9C10YHQvtGBIFBWQ1IgMDcyNlcgKFBPTEFSSVMpLCBQb2xhcmlzINCx0LXQttC10LLRi9C5INGG0LLQtdGCINC+0YTQuNGG0LjQsNC70YzQvdGL0Lkg0LzQsNCz0LDQt9C40L0g0J/QvtC70LDRgNC40YFcIixcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMy5wbmdcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgeyBrZXk6IFwi0KbQstC10YJcIiwgdmFsdWU6IFwi0LHQtdC20LXQstGL0LlcIiB9LFxuICAgICAgICB7IGtleTogXCLQmtC+0LzQv9C70LXQutGCXCIsIHZhbHVlOiBcItC/0L7Qu9C90YvQuVwiIH0sXG4gICAgICAgIHsga2V5OiBcItCh0L7RgdGC0L7Rj9C90LjQtVwiLCB2YWx1ZTogXCLQvdC+0LLRi9C5XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0KDQsNC30LzQtdGAXCIsIHZhbHVlOiBcIjI4XCIgfSxcbiAgICAgICAgeyBrZXk6IFwi0KbQstC10YIg0YDQsNC80LrQuFwiLCB2YWx1ZTogXCLQt9C+0LvQvtGC0L7QuVwiIH1cbiAgICAgIF0sXG4gICAgICBjb3VudDogMTEsXG4gICAgICBtYXhDb3VudDogMjAsXG4gICAgICBwcmljZTogNjgxXG4gICAgfVxuICBdKSkgIFxufVxuIiwiZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVByaWNlID0gKHN0cikgPT4ge1xuICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ29tcG9uZW50c1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCJcblxuaW1wb3J0IHsgdXBkYXRlUHJvZHVjdHNTdW1tYXJ5IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9kdWN0c1wiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY291bnRlclwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdGFic1wiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc2VsZWN0XCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9vZmZlcnNcIlxuaW1wb3J0IHsgdG9nZ2xlQWN0aW9ucyB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uc1wiXG5pbXBvcnQge1xuICB1cGRhdGVDb25maXJtVGFibGUsXG4gIHVwZGF0ZU9yZGVyVGFibGUsXG4gIHVwZGF0ZUNvbmZpcm1Ub3RhbCxcbiAgdXBkYXRlU3VtbWFyeVRvdGFsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvdG90YWxcIlxuXG4vLyBTZWxlY3QgYWxsIHByb2R1Y3RzIG9wdGlvblxuXG5jb25zdCBzZWxlY3RBbGxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdGNoZWNrLXByb2R1Y3RzX19oZWFkIC5jaGVja2JveF9fdGV4dFwiKVxuY29uc3Qgc2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1hbGxcIilcblxuc2VsZWN0QWxsVGV4dC50ZXh0Q29udGVudCA9IGDQktGL0LHRgNCw0YLRjCDQstGB0LUgKCR7Z2V0UHJvZHVjdHNDb3VudEZyb21TdG9yYWdlKCl9KWBcbnNlbGVjdEFsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlU2VsZWN0QWxsKVxuXG4vLyBJZiBzZWxlY3QgaXMgYWxyZWFkeSBhY3RpdmUgKGZyb20gc3RhcnQpIC0gdG9nZ2xlIGl0ZW1zXG5cbmlmIChzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkKSB7XG4gIHRvZ2dsZVNlbGVjdEFsbCgpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgY29uc3QgaXNDaGVja2VkID0gc2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZFxuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tdGNoZWNrLXByb2R1Y3RfX2xlZnQgLmNoZWNrYm94X19pbnB1dFwiKVxuXG4gIGlmIChpc0NoZWNrZWQpIHtcbiAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiAoY2hlY2tib3guY2hlY2tlZCA9IHRydWUpKVxuICB9IGVsc2Uge1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IChjaGVja2JveC5jaGVja2VkID0gZmFsc2UpKVxuICB9XG5cbiAgdG9nZ2xlQWN0aW9ucygpXG4gIHVwZGF0ZVByb2R1Y3RzU3VtbWFyeSgpXG5cbiAgY29uc3QgdG90YWxQcmljZSA9IHVwZGF0ZUNvbmZpcm1UYWJsZSgpXG4gIHVwZGF0ZU9yZGVyVGFibGUoKVxuXG4gIHVwZGF0ZUNvbmZpcm1Ub3RhbCh0b3RhbFByaWNlKVxuICB1cGRhdGVTdW1tYXJ5VG90YWwodG90YWxQcmljZSlcbn1cblxuLy8gRGVsaXZlcnkgb24gY2hhbmdlXG5cbmNvbnN0IGRlbGl2ZXJ5UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZGVsaXZlcnktdHlwZV1cIilcblxuZGVsaXZlcnlSYWRpby5mb3JFYWNoKChyYWRpbykgPT4gcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxuICB1cGRhdGVPcmRlclRhYmxlKClcblxuICB1cGRhdGVDb25maXJtVG90YWwodG90YWxQcmljZSlcbiAgdXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG59KSlcblxuLy8gUGF5IG9uIGNoYW5nZVxuXG5jb25zdCBwYXlSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1wYXktdHlwZV1cIilcblxucGF5UmFkaW8uZm9yRWFjaCgocmFkaW8pID0+IHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCB0b3RhbFByaWNlID0gdXBkYXRlQ29uZmlybVRhYmxlKClcbiAgdXBkYXRlT3JkZXJUYWJsZSgpXG5cbiAgdXBkYXRlQ29uZmlybVRvdGFsKHRvdGFsUHJpY2UpXG4gIHVwZGF0ZVN1bW1hcnlUb3RhbCh0b3RhbFByaWNlKVxufSkpXG5cbi8vIFVwZGF0ZSBwcmljZXMgKGJ5IHNlbGVjdGVkIGVsZW1lbnRzKVxuXG51cGRhdGVQcm9kdWN0c1N1bW1hcnkoKVxuXG4vLyBVcGRhdGUgdGFibGVzIChzdW1tYXJ5IC8gdG90YWwpXG5cbmNvbnN0IHRvdGFsUHJpY2UgPSB1cGRhdGVDb25maXJtVGFibGUoKVxudXBkYXRlT3JkZXJUYWJsZSgpXG5cbnVwZGF0ZUNvbmZpcm1Ub3RhbCh0b3RhbFByaWNlKVxudXBkYXRlU3VtbWFyeVRvdGFsKHRvdGFsUHJpY2UpXG4iXSwibmFtZXMiOlsicmVtb3ZlUHJvZHVjdEZyb21TdG9yYWdlIiwicmVtb3ZlUHJvZHVjdEZyb21QYWdlIiwiYWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUFsbCIsImFjdGlvbnNBY3RpdmVDbGFzc05hbWUiLCJ0b2dnbGVBY3Rpb25zIiwic2VsZWN0ZWRQcm9kdWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tib3hlcyIsImZvckVhY2giLCJjaGVja2JveCIsInByb2R1Y3ROb2RlIiwiY2xvc2VzdCIsImlkIiwiZGF0YXNldCIsInVwZGF0ZVByb2R1Y3RzU3VtbWFyeSIsImNhbGN1bGF0ZVByb2R1Y3RQcmljZSIsInVwZGF0ZUNvbmZpcm1UYWJsZSIsInVwZGF0ZU9yZGVyVGFibGUiLCJ1cGRhdGVDb25maXJtVG90YWwiLCJ1cGRhdGVTdW1tYXJ5VG90YWwiLCJpbml0aWFsaXplQ291bnRlciIsImNvdW50ZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheSIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm1heFZhbHVlIiwibWF4IiwidHlwZXMiLCJzdGVwVXAiLCJiaW5kIiwic3RlcERvd24iLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiaXNFbm91Z2giLCJ0b3RhbFByaWNlIiwiYnV0dG9uIiwidHlwZSIsImN1cnJlbnRWYWx1ZSIsImlzU2lnbiIsInNpZ25Ob2RlIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY3JlYXRlTWVzc2FnZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInRleHQiLCJpc0Nsb3NlIiwib2xkTWVzc2FnZSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5Iiwic3R5bGUiLCJjbG9zZSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY291cG9uRm9ybSIsImNlcnRpZmljYXRlRm9ybSIsIm1lc3NhZ2VTdHlsZXMiLCJ0b3AiLCJyaWdodCIsIm1heFdpZHRoIiwidHJhbnNmb3JtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJib3R0b20iLCJsZWZ0IiwicHJldmVudERlZmF1bHQiLCJjb3Vwb24iLCJlbnRyeUNvdXBvbiIsImNlcnRpZmljYXRlIiwiZW50cnlDZXJ0aWZpY2F0ZSIsIm5vcm1hbGl6ZVByaWNlIiwiY2FsY3VsYXRlUHJvZHVjdHNQcmljZSIsInByb2R1Y3RzIiwicHJpY2UiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudE5vZGUiLCJwcm9kdWN0IiwiY291bnQiLCJjaGlsZE5vZGVzIiwicHJvZHVjdE1hcmt1cCIsImdldFByb2R1Y3RzRnJvbVN0b3JhZ2UiLCJnZXRQcm9kdWN0RnJvbVN0b3JhZ2UiLCJnZXRQcm9kdWN0c0NvdW50RnJvbVN0b3JhZ2UiLCJyZXN0b3JlUHJvZHVjdEZyb21TdG9yYWdlIiwicHJvZHVjdHNDb250YWluZXIiLCJzZWxlY3RBbGxUZXh0Iiwic2VsZWN0QWxsQ2hlY2tib3giLCJub2RlIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0Q2hpbGQiLCJzZWxlY3QiLCJyZXN0b3JlIiwiYWN0aXZlUHJvZHVjdHNDb3VudCIsImZpbHRlciIsImlzRGVsZXRlZCIsImNoZWNrZWRJdGVtc0NvdW50IiwiY2hlY2tlZCIsInJlc3RvcmVQcm9kdWN0RnJvbVBhZ2UiLCJjb250YWlucyIsInNpYmxpbmciLCJuZXh0U2libGluZyIsIm5ld05vZGUiLCJpbnNlcnRCZWZvcmUiLCJzdW1tYXJ5Q291bnQiLCJzdW1tYXJ5UHJpY2UiLCJzZWxlY3RzIiwic2VsZWN0T3BlbmVkQ2xhc3NOYW1lIiwic2VsZWN0SXRlbUFjdGl2ZUNsYXNzTmFtZSIsIml0ZW1zIiwidG9nZ2xlIiwiaXRlbSIsImNoYW5nZSIsImN1cnJlbnRBY3RpdmVJdGVtIiwidGFic0hhbmRsZXIiLCJ0YWJzU3RhdHVzIiwidGFiQ2hhbmdlIiwiZnV0dXJlQWN0aXZlVGFiIiwiY3VycmVudEFjdGl2ZVRhYiIsInByZXZpb3VzSGFuZGxlciIsInByZXZpb3VzU3RhdHVzIiwidGFiSGFuZGxlciIsInRhYlN0YXR1cyIsInRhYmxlIiwiZGVsaXZlcnlMYWJlbCIsImRlbGl2ZXJ5VHlwZSIsImRlbGl2ZXJ5UHJpY2UiLCJwYXlUeXBlIiwiaW5uZXJIVE1MIiwibmFtZSIsImltYWdlVXJsIiwicHJvcGVydGllcyIsIm1heENvdW50IiwibWFwIiwiam9pbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwidG9nZ2xlU2VsZWN0QWxsIiwiaXNDaGVja2VkIiwiZGVsaXZlcnlSYWRpbyIsInJhZGlvIiwicGF5UmFkaW8iXSwic291cmNlUm9vdCI6IiJ9