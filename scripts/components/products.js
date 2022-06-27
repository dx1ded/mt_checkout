import { productMarkup } from "../productMarkup"
import { normalizePrice } from "../utils"
import { calculateProductsPrice } from "./price"
import { toggleActions } from "./actions"
import { initializeCounter } from "./counter"
import {
  getProductsFromStorage,
  getProductFromStorage,
  getProductsCountFromStorage,
  removeProductFromStorage,
  restoreProductFromStorage
} from "../storage"

// Render products (with its functionality)

const productsContainer = document.querySelector(".mtcheck-products__list")
const products = getProductsFromStorage()

const selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text")
const selectAllCheckbox = document.querySelector("#select-all")

products.forEach((product) => {
  const node = new DOMParser().parseFromString(
    productMarkup(product),
    "text/html"
  ).body.firstChild

  const select = node.querySelector(".checkbox__input")
  const remove = node.querySelector(".mtcheck-product__remove")
  const restore = node.querySelector(".mtcheck-product__restore")
  const counter = node.querySelector(".counter")

  if (select) {
    select.addEventListener("change", () => {
      toggleActions()
      
      const activeProductsCount = getProductsFromStorage().filter(({ isDeleted }) => !isDeleted)
      const checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

      if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false

      updateProductsSummary()
    })
  }
  
  if (remove) {
    remove.addEventListener("click", ({ target }) => {
      const productNode = target.closest(".mtcheck-product")
      const id = productNode.dataset.id

      removeProductFromStorage(id)
      removeProductFromPage(productNode, id)
      updateProductsSummary()
    })
  }
  
  if (restore) {
    restore.addEventListener("click", ({ target }) => {
      const productNode = target.closest(".mtcheck-product")
      const id = productNode.dataset.id

      restoreProductFromStorage(id)
      restoreProductFromPage(productNode, id)
      updateProductsSummary()
    })
  }

  initializeCounter(counter)

  productsContainer.insertAdjacentElement("afterbegin", node)
})

export function removeProductFromPage(currentNode, id) {
  const isDeleted = currentNode.classList.contains("mtcheck-product--deleted")

  if (isDeleted) {
    return currentNode.remove()
  }

  const sibling = currentNode.nextSibling
  const newNode = new DOMParser().parseFromString(
    productMarkup(getProductFromStorage(id)),
    "text/html"
  ).body.firstChild

  const remove = newNode.querySelector(".mtcheck-product__remove")
  const restore = newNode.querySelector(".mtcheck-product__restore")

  remove.addEventListener("click", ({ target }) => {
    const productNode = target.closest(".mtcheck-product")
    const id = productNode.dataset.id

    removeProductFromStorage(id)
    removeProductFromPage(productNode, id)
    updateProductsSummary()
  })

  restore.addEventListener("click", ({ target }) => {
    const productNode = target.closest(".mtcheck-product")
    const id = productNode.dataset.id

    restoreProductFromStorage(id)
    restoreProductFromPage(productNode, id)
    updateProductsSummary()
  })

  selectAllText.textContent = `Выбрать все (${getProductsCountFromStorage()})`

  currentNode.remove()
  productsContainer.insertBefore(newNode, sibling)

  toggleActions()
}

function restoreProductFromPage(currentNode, id) {
  const sibling = currentNode.nextSibling
  const newNode = new DOMParser().parseFromString(
    productMarkup(getProductFromStorage(id)),
    "text/html"
  ).body.firstChild

  const select = newNode.querySelector(".checkbox__input")
  const remove = newNode.querySelector(".mtcheck-product__remove")
  const counter = newNode.querySelector(".counter")

  if (selectAllCheckbox.checked) select.checked = true

  select.addEventListener("change", () => {
    toggleActions()
    
    const activeProductsCount = getProductsFromStorage().filter(({ isDeleted }) => !isDeleted)
    const checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

    if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false

    updateProductsSummary()
  })

  remove.addEventListener("click", ({ target }) => {
    const productNode = target.closest(".mtcheck-product")
    const id = productNode.dataset.id

    removeProductFromStorage(id)
    removeProductFromPage(productNode, id)
    updateProductsSummary()
  })

  initializeCounter(counter)

  selectAllText.textContent = `Выбрать все (${getProductsCountFromStorage()})`

  currentNode.remove()
  productsContainer.insertBefore(newNode, sibling)
  
  toggleActions()
}

// Update products-summary (under the products list) (count / price)

export function updateProductsSummary() {
  const summaryCount = document.querySelector(".mtcheck-products__count")
  const summaryPrice = document.querySelector(".mtcheck-products__sum")

  const { count, price } = calculateProductsPrice()

  summaryCount.textContent = `Товаров, ${count} шт.`
  summaryPrice.childNodes[0].textContent = `${normalizePrice(price)} `
}
