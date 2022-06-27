import { normalizePrice } from "../utils"

export function calculateProductsPrice() {
  const products = [...document.querySelectorAll(".mtcheck-product .checkbox__input:checked")]
  const price = products.reduce((previousValue, currentNode) => {
    const product = currentNode.closest(".mtcheck-product")
    const count = product.querySelector(".counter__display").value
    const price = product.dataset.price

    return previousValue += count * price
  }, 0)

  return { price, count: products.length }
}

export function calculateProductPrice(product) {
  const display = product.querySelector(".mtcheck-product__price")
  const count = product.querySelector(".counter__display").value
  const price = product.dataset.price

  display.childNodes[0].textContent = `${normalizePrice(price * count)} `
}

