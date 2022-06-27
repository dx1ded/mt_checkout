import { removeProductFromStorage } from "../storage"
import { removeProductFromPage } from "./products"

const actions = document.querySelector(".mtcheck-products__actions")
const removeAll = actions.querySelector("#remove-all")
const actionsActiveClassName = "mtcheck-products__actions--active"

export function toggleActions() {
  const selectedProducts = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

  if (!selectedProducts.length) {
    return actions.classList.remove(actionsActiveClassName)
  }

  actions.classList.add(actionsActiveClassName)
}

removeAll.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".mtcheck-product__left .checkbox__input:checked")

  checkboxes.forEach((checkbox) => {
    const productNode = checkbox.closest(".mtcheck-product")
    const id = productNode.dataset.id

    removeProductFromStorage(id)
    removeProductFromPage(productNode, id)
  })
})
