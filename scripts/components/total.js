import { normalizePrice } from "../utils"
import { calculateProductsPrice } from "./price"

// Здесь подсчет. Я сделал примерно, саму формулу надо доработать)

export function updateConfirmTable() {
  const table = document.querySelector(".mtcheck-confirm .mtcheck-table")

  const { price } = calculateProductsPrice()
  const deliveryLabel = document.querySelector("[name=delivery-type]:checked").parentElement
  const deliveryType = deliveryLabel.querySelector(".radio__text").textContent
  const deliveryPrice = deliveryLabel.dataset.price
  const payType = document.querySelector("[name=pay-type]:checked").parentElement.querySelector(".radio__text").textContent

  table.innerHTML = `
    <div class="mtcheck-table__item">
      <p class="text text--md text--primary mtcheck-table__item-name">
        Доставка 
        <span>(${deliveryType})</span>
      </p>
      <span class="text text--md text--primary mtcheck-table__item-value">${deliveryPrice} &#8381;</span>
    </div>
    <div class="mtcheck-table__item mtcheck-table__item--margin">
      <p class="text text--md text--primary mtcheck-table__item-name">
        Оплата 
        <span>(${payType})</span>
      </p>
    </div>
    <div class="mtcheck-table__item">
      <p class="text text--md text--primary mtcheck-table__item-name">Бонусные баллы</p>
      <span class="text text--md text--primary mtcheck-table__item-value">400 баллов</span>
    </div>
    <div class="mtcheck-table__item">
      <p class="text text--md text--primary mtcheck-table__item-name">
        Скидка группе покупателей, 5% 
        <span>(серебрянный клиент)</span>
      </p>
      <span class="text text--md text--primary mtcheck-table__item-value">- 650 &#8381;</span>
    </div>
    ${window.coupon
      ? `
        <div class="mtcheck-table__item">
          <p class="text text--md text--primary mtcheck-table__item-name">
            Купон на скидку 
            <span>(${window.coupon})</span>
          </p>
          <span class="text text--md text--primary mtcheck-table__item-value">- 5000 &#8381;</span>
        </div>
        `
      : ""
    }
    ${window.certificate
      ? `
        <div class="mtcheck-table__item">
          <p class="text text--md text--primary mtcheck-table__item-name">
            Сертификат 
            <span>(${window.certificate})</span>
          </p>
          <span class="text text--md text--primary mtcheck-table__item-value">- 5000 &#8381;</span>
        </div>
        `
      : ""
    }
    <div class="mtcheck-table__item">
      <p class="text text--md text--primary mtcheck-table__item-name">
        Скидка за сумму заказа, 3%
      </p>
      <span class="text text--md text--primary mtcheck-table__item-value">- 4000 &#8381;</span>
    </div>
    <div class="mtcheck-table__item">
      <p class="text text--md text--primary mtcheck-table__item-name">
        Налог НДС, 20%
      </p>
      <span class="text text--md text--primary mtcheck-table__item-value">${normalizePrice(price * 0.2)} &#8381;</span>
    </div>
  `

  return price
}

export function updateOrderTable() {
  const table = document.querySelector(".mtcheck-summary .mtcheck-table")

  const { price } = calculateProductsPrice()
  const deliveryLabel = document.querySelector("[name=delivery-type]:checked").parentElement
  const deliveryType = deliveryLabel.querySelector(".radio__text").textContent
  const deliveryPrice = deliveryLabel.dataset.price
  const payType = document.querySelector("[name=pay-type]:checked").parentElement.querySelector(".radio__text").textContent

  table.innerHTML = `
    <div class="mtcheck-table__item">
      <p class="text mtcheck-table__item-name">
        Доставка 
        <span>(${deliveryType})</span>
      </p>
      <span class="text mtcheck-table__item-value">${deliveryPrice} &#8381;</span>
    </div>
    <div class="mtcheck-table__item mtcheck-table__item--margin">
      <p class="text mtcheck-table__item-name">
        Оплата 
        <span>(${payType})</span>
      </p>
    </div>
    <div class="mtcheck-table__item">
      <p class="text mtcheck-table__item-name">Товары, с учетом налогов</p>
      <span class="text mtcheck-table__item-value">${normalizePrice(price)} &#8381;</span>
    </div>
    <div class="mtcheck-table__item">
      <p class="text mtcheck-table__item-name">Скидка, %</p>
      <span class="text mtcheck-table__item-value">- 650 &#8381;</span>
    </div>
  `

  return price
}

export function updateConfirmTotal(price) {
  document.querySelector(".mtcheck-confirm .mtcheck-total__sum")
    .childNodes[0].textContent = `${normalizePrice(price)} `
}

export function updateSummaryTotal(price) {
  document.querySelector(".mtcheck-summary__sum")
    .childNodes[0].textContent = `${normalizePrice(price)} `
}
