export function createMessage({ container, type, text, isClose }, styles) {
  // Remove old message (if it's avaible)

  const oldMessage = container.querySelector(".message")

  if (oldMessage) oldMessage.remove()

  // Create message

  const message = document.createElement("div")

  message.classList.add("message", `message--${type}`)
  message.textContent = text
  
  Object.entries(styles).forEach(([key, value]) => {
    message.style[key] = value
  })

  if (isClose) {
    const close = document.createElement("button")

    close.classList.add("message__close")
    close.addEventListener("click", () => message.remove())

    close.setAttribute("type", "button")
    close.setAttribute("aria-label", "Закрыть вспывающее сообщение")

    message.appendChild(close)
  }

  container.appendChild(message)
}
