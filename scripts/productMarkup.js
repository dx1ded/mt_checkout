import { normalizePrice } from "./utils"

export const productMarkup = ({
  id,
  isDeleted,
  name,
  imageUrl,
  properties,
  count,
  maxCount,
  price
}) => (
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
            <button class="btn-reset mtcheck-product__remove" aria-label="Удалить товар из корзины"></button>
          </div>
        </div>
      </article>
      `
    : `
      <article class="mtcheck-product mtcheck-product--deleted" data-id="${id}">
        <div class="mtcheck-product__left">
          <div class="mtcheck-product__info">
            <p class="text mtcheck-product__name">${name}</p>
          </div>
        </div>
        <div class="mtcheck-product__right">
          <button class="btn-reset link mtcheck-product__restore" data-action="product-restore">восстановить</button>
          <div class="mtcheck-product__wrapper">
            <button class="btn-reset mtcheck-product__remove" aria-label="Полностью удалить товар из корзины"></button>
          </div>
        </div>
      </article>
      `
)
