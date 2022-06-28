// Components

import { getProductsCountFromStorage } from "./storage"

import { updateProductsSummary } from "./components/products"
import "./components/counter"
import "./components/tabs"
import "./components/select"
import "./components/offers"
import { toggleActions } from "./components/actions"
import {
  updateConfirmTable,
  updateOrderTable,
  updateConfirmTotal,
  updateSummaryTotal
} from "./components/total"

// Select all products option

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

  const totalPrice = updateConfirmTable()
  updateOrderTable()

  updateConfirmTotal(totalPrice)
  updateSummaryTotal(totalPrice)
}

// Delivery on change

const deliveryRadio = document.querySelectorAll("[name=delivery-type]")

deliveryRadio.forEach((radio) => radio.addEventListener("change", () => {
  const totalPrice = updateConfirmTable()
  updateOrderTable()

  updateConfirmTotal(totalPrice)
  updateSummaryTotal(totalPrice)
}))

// Pay on change

const payRadio = document.querySelectorAll("[name=pay-type]")

payRadio.forEach((radio) => radio.addEventListener("change", () => {
  const totalPrice = updateConfirmTable()
  updateOrderTable()

  updateConfirmTotal(totalPrice)
  updateSummaryTotal(totalPrice)
}))

// Update prices (by selected elements)

updateProductsSummary()

// Update tables (summary / total)

const totalPrice = updateConfirmTable()
updateOrderTable()

updateConfirmTotal(totalPrice)
updateSummaryTotal(totalPrice)
