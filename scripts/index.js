// Components

import { updateProductsSummary } from "./components/products"
import "./components/counter"
import "./components/tabs"
import "./components/select"

// Select all products option

import { getProductsCountFromStorage } from "./storage"
import { toggleActions } from "./components/actions"

const selectAllText = document.querySelector(".mtcheck-products__head .checkbox__text")
const selectAllCheckbox = document.querySelector("#select-all")

selectAllText.textContent = `Выбрать все (${getProductsCountFromStorage()})`
selectAllCheckbox.addEventListener("change", toggleSelectAll)

// If select is already active (from start) - toggle items

if (selectAllCheckbox.checked) {
  toggleSelectAll()
}

function toggleSelectAll() {
  const isChecked = selectAllCheckbox.checked
  const checkboxes = document.querySelectorAll(".mtcheck-product__left .checkbox__input")

  if (isChecked) {
    checkboxes.forEach((checkbox) => (checkbox.checked = true))
  } else {
    checkboxes.forEach((checkbox) => (checkbox.checked = false))
  }

  toggleActions()
  updateProductsSummary()
}

// Update prices (by selected elements)

updateProductsSummary()
