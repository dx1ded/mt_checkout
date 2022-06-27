import { productMarkup } from "../productMarkup"
import { toggleActions } from "./actions"
import {
  getProductsFromStorage,
  getProductFromStorage,
  getProductsCountFromStorage,
  removeProductFromStorage,
  restoreProductFromStorage
} from "../storage"

// Render products

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

  if (select) {
    select.addEventListener("change", () => {
      toggleActions()
      
      const activeProductsCount = getProductsFromStorage().filter(({ isDeleted }) => !isDeleted)
      const checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

      if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false
    })
  }
  
  if (remove) {
    remove.addEventListener("click", ({ target }) => {
      const productNode = target.closest(".mtcheck-product")
      const id = productNode.dataset.id

      removeProductFromStorage(id)
      removeProductFromPage(productNode, id)
    })
  }
  
  if (restore) {
    restore.addEventListener("click", ({ target }) => {
      const productNode = target.closest(".mtcheck-product")
      const id = productNode.dataset.id

      restoreProductFromStorage(id)
      restoreProductFromPage(productNode, id)
    })
  }

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
  })

  restore.addEventListener("click", ({ target }) => {
    const productNode = target.closest(".mtcheck-product")
    const id = productNode.dataset.id

    restoreProductFromStorage(id)
    restoreProductFromPage(productNode, id)
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

  if (selectAllCheckbox.checked) select.checked = true

  select.addEventListener("change", () => {
    toggleActions()
    
    const activeProductsCount = getProductsFromStorage().filter(({ isDeleted }) => !isDeleted)
    const checkedItemsCount = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

    if (activeProductsCount !== checkedItemsCount) selectAllCheckbox.checked = false
  })

  remove.addEventListener("click", ({ target }) => {
    const productNode = target.closest(".mtcheck-product")
    const id = productNode.dataset.id

    removeProductFromStorage(id)
    removeProductFromPage(productNode, id)
  })

  selectAllText.textContent = `Выбрать все (${getProductsCountFromStorage()})`

  currentNode.remove()
  productsContainer.insertBefore(newNode, sibling)
  
  toggleActions()
}
