// Render products

// * Тут загрузка товаров из <storage>. Я сделал просто массив с объектами для примера

const normalizePrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

const productMarkup = ({ id, isDeleted, name, imageUrl, properties, count, maxCount, price }) => (
  !isDeleted
    ? `
      <article class="mtcheck-product" data-id="${id}">
        <div class="mtcheck-product__left">
          <label class="checkbox">
            <input type="checkbox" class="visually-hidden checkbox__input">
            <span class="checkbox__display"></span>
          </label>
          <a href="#" class="mtcheck-product__image">
            <img src="${imageUrl}" alt="Изображение товара">
          </a>
          <div class="mtcheck-product__info">
            <a href="#" class="text text--md text--primary mtcheck-product__name">${name}</a>
            <div class="mtcheck-product__properties">
              ${properties
                ? properties.map(({ key, value }) => (`
                    <span class="text text--xs text--secondary mtcheck-product__property">
                      ${key}: ${value}
                    </span>
                  `)).join("")
                : ""
              }
            </div>
          </div>
        </div>
        <div class="mtcheck-product__right">
          <div class="mtcheck-product__count">
            <div class="counter">
              <input type="number" value="${count}" min="1" data-max="${maxCount}" class="counter__display">
              <input type="button" value="-" class="btn-reset counter__action counter__action--decrement">
              <input type="button" value="+" class="btn-reset counter__action counter__action--increment">
            </div>
          </div>
          <div class="mtcheck-product__wrapper">
            <p class="text text--md text--primary mtcheck-product__price">${normalizePrice(price)} <span>&#8381;</span></p>
            <button class="btn-reset mtcheck-product__remove" data-product aria-label="Удалить товар из корзины"></button>
          </div>
        </div>
      </article>
      `
    : `
      <article class="mtcheck-product mtcheck-product--deleted">
        <div class="mtcheck-product__left">
          <div class="mtcheck-product__info">
            <p class="text mtcheck-product__name">${name}</p>
          </div>
        </div>
        <div class="mtcheck-product__right">
          <button class="btn-reset link mtcheck-product__restore" data-action="product-restore">восстановить</button>
          <div class="mtcheck-product__wrapper">
            <button class="btn-reset mtcheck-product__remove" data-remove aria-label="Полностью удалить товар из корзины"></button>
          </div>
        </div>
      </article>
      `
)

const products = [
  {
    id: "1",
    name: "Таймер кухонный, электронный, Baldr",
    imageUrl: "./images/products/product-1.png",
    properties: [
      { key: "Бренд", value: "Baldr" },
    ],
    count: 1,
    maxCount: 5,
    price: 126281
  },
  {
    id: "2",
    name: "Газобетонный стеновой блок D400 600x300x250",
    imageUrl: "./images/products/product-2.png",
    properties: [
      { key: "Цвет", value: "бежевый" },
      { key: "Комплект", value: "полный" },
      { key: "Состояние", value: "новый" },
      { key: "Размер", value: "28" },
      { key: "Цвет рамки", value: "золотой" }
    ],
    count: 2,
    maxCount: 8,
    price: 1242
  },
  {
    id: "3",
    isDeleted: true,
    name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый",
    imageUrl: "./images/products/product-2.png",
    properties: [
      { key: "Цвет", value: "бежевый" },
      { key: "Комплект", value: "полный" },
      { key: "Состояние", value: "новый" },
      { key: "Размер", value: "28" },
      { key: "Цвет рамки", value: "золотой" }
    ],
    count: 11,
    maxCount: 124,
    price: 681
  },
  {
    id: "4",
    name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый цвет официальный магазин Поларис",
    imageUrl: "./images/products/product-3.png",
    properties: [
      { key: "Цвет", value: "бежевый" },
      { key: "Комплект", value: "полный" },
      { key: "Состояние", value: "новый" },
      { key: "Размер", value: "28" },
      { key: "Цвет рамки", value: "золотой" }
    ],
    count: 11,
    maxCount: 20,
    price: 681
  }
]
const productsContainer = document.querySelector(".mtcheck-products__list")

products.forEach((product) => productsContainer.insertAdjacentHTML(
  "afterbegin",
  productMarkup(product)
))

// Установка количества (выбрать все..)

const selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text")

selectAllText.textContent = `Выбрать все (${products.length})`

// ===============================
// Tabs
// ===============================

const tabsHandler = document.querySelector("[data-tab-handler]")
const tabsStatus = document.querySelector("[data-tab-status]")

tabsHandler.addEventListener("click", tabChange)

function tabChange() {
  const futureActiveTab = document.querySelector("[data-tab='']")
  const currentActiveTab = document.querySelector("[data-tab='true']")

  currentActiveTab.setAttribute("data-tab", "")
  futureActiveTab.setAttribute("data-tab", "true")

  // Set text nodes

  const previousHandler = tabsHandler.textContent
  const previousStatus = tabsStatus.textContent

  console.log(previousHandler, previousStatus)

  tabsHandler.textContent = tabsHandler.dataset.tabHandler
  tabsStatus.textContent = tabsStatus.dataset.tabStatus

  tabsHandler.setAttribute("data-tab-handler", previousHandler)
  tabsStatus.setAttribute("data-tab-status", previousStatus)
}

// ===============================
// Selects
// ===============================

const selects = document.querySelectorAll(".select")
const selectOpenedClassName = "select--opened"
const selectItemActiveClassName = "select__item--active"

selects.forEach((select) => {
  const items = select.querySelectorAll(".select__item")

  select.addEventListener("click", selectToggle.bind(this, select))

  items.forEach((item) => item.addEventListener(
    "click",
    selectChange.bind(this, select)
  ))
})

function selectToggle(select) {
  select.classList.toggle(selectOpenedClassName)
}

function selectChange(select, event) {
  const display = select.querySelector(".select__display")
  const currentActiveItem = select.querySelector(`.${selectItemActiveClassName}`)
  const item = event.target

  display.textContent = item.textContent

  // Change active tab (by style)

  currentActiveItem.classList.remove(selectItemActiveClassName)
  item.classList.add(selectItemActiveClassName)
}

// ===============================
// Counters
// ===============================

const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  const parent = counter.parentElement
  
  const display = counter.querySelector(".counter__display")
  const increment = counter.querySelector(".counter__action--increment")
  const decrement = counter.querySelector(".counter__action--decrement")

  const maxValue = +display.dataset.max
  
  const types = {
    "+": display.stepUp.bind(display),
    "-": display.stepDown.bind(display)
  }

  display.addEventListener("input", (event) => {
    const value = +event.target.value

    if (!value) {
      return display.value = 1
    }

    isEnough(parent, maxValue, value)
  })

  ;[increment, decrement].forEach((button) => button.addEventListener(
    "click",
    (event) => {
      const type = event.target.value
      
      types[type]()
      isEnough(parent, maxValue, +display.value)
    }
  ))
})

function isEnough(parent, maxValue, currentValue) {
  const isSign = parent.querySelector(".mtcheck-product__sign")

  if (currentValue <= maxValue && !isSign) return
  else if (currentValue <= maxValue && isSign) {
    return isSign.remove()
  }

  // Add sign or just keep it

  if (isSign) return

  const signNode = document.createElement("span")

  signNode.classList.add("text", "text--xs", "mtcheck-product__sign")
  signNode.textContent = "нет в выбранном количестве"

  parent.insertAdjacentElement("beforeend", signNode)
}

// ===============================
// Select all
// ===============================

const selectAllCheckbox = document.querySelector("#select-all")
const productsCheckboxes = document.querySelectorAll(".mtcheck-product .checkbox__input")

selectAllCheckbox.addEventListener("change", () => {
  const isChecked = selectAllCheckbox.checked

  if (isChecked) {
    productsCheckboxes.forEach((checkbox) => (checkbox.checked = true))
  } else {
    productsCheckboxes.forEach((checkbox) => (checkbox.checked = false))
  }

  toggleActions(true)
})

// ===============================
// Actions toggle
// ===============================

// * тут когда checkbox продукта принимает состояние checked - появляются экшны, которые делают что-то из всеми выбранными продуктами. На "удалить все" - удаляются все выбранные продукты из <storage>, а "заказать в один клик" - открывает модалку с возможностью сделать заказ

const productCheckboxElements = document.querySelectorAll(".mtcheck-product .checkbox__input")
const productActions = document.querySelector(".mtcheck-products__actions")
const actionsActiveClassName = "mtcheck-products__actions--active"

productCheckboxElements.forEach((checkbox) => checkbox.addEventListener(
  "change",
  toggleActions
))

function toggleActions(checkSelectAll) {
  const currentState = [...document.querySelectorAll(".mtcheck-product .checkbox__input")]
    .map((checkbox) => checkbox.checked)

  if (currentState.includes(true)) {
    productActions.classList.add(actionsActiveClassName)
  } else {
    productActions.classList.remove(actionsActiveClassName)
  }

  if (checkSelectAll && !currentState.includes(true)) {
    selectAllCheckbox.checked = false
  }
}

// ===============================
// Delete product on cross / on "delete all"
// ===============================

// * тут удаляется продукт при нажатии на крестик либо "удалить все", в моем случае просто из объекта, в вашем - из <storage>

const deleteAllButton = document.querySelector("#delete-all")
const deleteButtons = document.querySelectorAll(".mtcheck-product__remove")

deleteAllButton.addEventListener("click", () => {
  const checkedProducts = document.querySelectorAll(".mtcheck-product .checkbox__input:checked")

  checkedProducts.forEach((checkbox) => deleteProduct(checkbox))
})

deleteButtons.forEach((button) => button.addEventListener(
  "click",
  (event) => deleteProduct(event.target)
))

function deleteProduct(element) {
  const product = element.closest(".mtcheck-product")
  const id = product.dataset.id

  console.log(product, id)

  const deleteIndex = products.find((product) => product.id === id)

  products.splice(deleteIndex, 1)

  product.remove()
}
