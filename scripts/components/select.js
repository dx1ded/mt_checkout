const selects = document.querySelectorAll(".select")
const selectOpenedClassName = "select--opened"
const selectItemActiveClassName = "select__item--active"

selects.forEach((select) => {
  const items = select.querySelectorAll(".select__item")

  select.addEventListener("click", toggle.bind(this, select))

  items.forEach((item) => item.addEventListener(
    "click",
    change.bind(this, select)
  ))
})

function toggle(select) {
  select.classList.toggle(selectOpenedClassName)
}

function change(select, event) {
  const display = select.querySelector(".select__display")
  const currentActiveItem = select.querySelector(`.${selectItemActiveClassName}`)
  const item = event.target

  display.textContent = item.textContent

  // Change active tab (by style)

  currentActiveItem.classList.remove(selectItemActiveClassName)
  item.classList.add(selectItemActiveClassName)
}
