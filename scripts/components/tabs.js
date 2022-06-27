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

  tabsHandler.textContent = tabsHandler.dataset.tabHandler
  tabsStatus.textContent = tabsStatus.dataset.tabStatus

  tabsHandler.setAttribute("data-tab-handler", previousHandler)
  tabsStatus.setAttribute("data-tab-status", previousStatus)
}
