// Tabs

const tabsHandler = document.querySelector("[data-tab-handler]")
const tabsStatus = document.querySelector("[data-tab-status]")

tabsHandler.addEventListener("click", tabChange)

function tabChange() {
  const futureActiveTab = document.querySelector("[data-tab='']")
  const currentActiveTab = document.querySelector("[data-tab='true']")

  currentActiveTab.setAttribute("data-tab", "")
  futureActiveTab.setAttribute("data-tab", "true")

  // Set text nodes

  const previousHandler = tabsHandler.textContent
  const previousStatus = tabsStatus.textContent

  console.log(previousHandler, previousStatus)

  tabsHandler.textContent = tabsHandler.dataset.tabHandler
  tabsStatus.textContent = tabsStatus.dataset.tabStatus

  tabsHandler.setAttribute("data-tab-handler", previousHandler)
  tabsStatus.setAttribute("data-tab-status", previousStatus)
}

// Selects

const selects = document.querySelectorAll(".select")
const selectOpenedClassName = "select--opened"
const selectItemActiveClassName = "select__item--active"

selects.forEach((select) => {
  const items = select.querySelectorAll(".select__item")

  select.addEventListener("click", selectToggle.bind(this, select))

  items.forEach((item) => item.addEventListener(
    "click",
    selectChange.bind(this, select)
  ))
})

function selectToggle(select) {
  select.classList.toggle(selectOpenedClassName)
}

function selectChange(select, event) {
  const display = select.querySelector(".select__display")
  const currentActiveItem = select.querySelector(`.${selectItemActiveClassName}`)
  const item = event.target

  display.textContent = item.textContent

  // Change active tab (by style)

  currentActiveItem.classList.remove(selectItemActiveClassName)
  item.classList.add(selectItemActiveClassName)
}
