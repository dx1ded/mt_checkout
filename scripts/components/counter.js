import { updateProductsSummary } from "./products"
import { calculateProductPrice } from "./price"
import {
  updateConfirmTable,
  updateOrderTable,
  updateConfirmTotal,
  updateSummaryTotal
} from "./total"

export function initializeCounter(counter) {
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
    calculateProductPrice(event.target.closest(".mtcheck-product"))
    updateProductsSummary()

    const totalPrice = updateConfirmTable()
    updateOrderTable()

    updateConfirmTotal(totalPrice)
    updateSummaryTotal(totalPrice)
  })

  ;[increment, decrement].forEach((button) => button.addEventListener(
    "click",
    (event) => {
      const type = event.target.value
      
      types[type]()
      isEnough(parent, maxValue, +display.value)
      calculateProductPrice(event.target.closest(".mtcheck-product"))
      updateProductsSummary()

      const totalPrice = updateConfirmTable()
      updateOrderTable()

      updateConfirmTotal(totalPrice)
      updateSummaryTotal(totalPrice)
    }
  ))
}

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
