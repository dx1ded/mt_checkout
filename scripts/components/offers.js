import { createMessage } from "./message"
import {
  updateConfirmTable,
  updateOrderTable,
  updateConfirmTotal,
  updateSummaryTotal
} from "./total"

const couponForm = document.querySelector(".mtcheck-offers__coupon")
const certificateForm = document.querySelector(".mtcheck-offers__certificate")

let messageStyles = {
  top: "0",
  right: "-20px",
  maxWidth: "322px",
  transform: "translateX(100%)"
}

if (window.matchMedia("(max-width: 1023px)").matches) {
  messageStyles = {
    bottom: "-10px",
    left: "0",
    maxWidth: "322px",
    transform: "translateY(100%)"
  }
}

couponForm.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const coupon = "FFF111"
  const entryCoupon = event.target.querySelector("[type=text]").value

  // * Здесь сделан для примера купон. По-идеи должен быть запрос на базу данных и та же проверка)

  if (coupon === entryCoupon) {
    createMessage(
      {
        container: couponForm,
        type: "success",
        text: `Купон ${coupon} на сумму 5000Р успешно использован!`,
        isClose: true
      },
      messageStyles
    )

    window.coupon = coupon

    const totalPrice = updateConfirmTable()
    updateOrderTable()

    updateConfirmTotal(totalPrice)
    updateSummaryTotal(totalPrice)
  } else if (entryCoupon === "") {
    createMessage(
      {
        container: couponForm,
        type: "danger",
        text: `Поле должно быть заполнено`,
        isClose: true
      },
      messageStyles
    )
  } else {
    createMessage(
      {
        container: couponForm,
        type: "danger",
        text: `Купон ${entryCoupon} не найден`,
        isClose: true
      },
      messageStyles
    )
  }
})

certificateForm.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const certificate = "AAA111"
  const entryCertificate = event.target.querySelector("[type=text]").value

  // * Здесь сделан для примера сертификат. По-идеи должен быть запрос на базу данных и та же проверка)

  if (certificate === entryCertificate) {
    createMessage(
      {
        container: certificateForm,
        type: "success",
        text: `Сертификат ${certificate} на сумму 7000Р успешно использован!`,
        isClose: true
      },
      messageStyles
    )

    window.certificate = certificate

    const totalPrice = updateConfirmTable()
    updateOrderTable()

    updateConfirmTotal(totalPrice)
    updateSummaryTotal(totalPrice)
  } else if (entryCertificate === "") {
    createMessage(
      {
        container: certificateForm,
        type: "danger",
        text: `Поле должно быть заполнено`,
        isClose: true
      },
      messageStyles
    )
  } else {
    createMessage(
      {
        container: certificateForm,
        type: "danger",
        text: `Сертификат ${entryCertificate} не найден`,
        isClose: true
      },
      messageStyles
    )
  }
})

