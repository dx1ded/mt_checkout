export const getProductsFromStorage = () => (
  JSON.parse(localStorage.getItem("products"))
)

export const getProductsCountFromStorage = () => (
  JSON.parse(localStorage.getItem("products"))
    .filter(({ isDeleted }) => !isDeleted)
    .length
)

export const getProductFromStorage = (id) => {
  const products = getProductsFromStorage()
  const index = products.findIndex((product) => product.id === id)
  
  return products[index]
}

export const removeProductFromStorage = (id) => {
  const products = getProductsFromStorage()
  const index = products.findIndex((product) => product.id === id)
  
  const product = products[index]

  product.isDeleted
    ? products.splice(index, 1)
    : (products[index]["isDeleted"] = true)

  localStorage.setItem("products", JSON.stringify(products))
}

export const restoreProductFromStorage = (id) => {
  const products = getProductsFromStorage()
  const index = products.findIndex((product) => product.id === id)
  
  products[index]["isDeleted"] = false

  localStorage.setItem("products", JSON.stringify(products))
}

// * Удалить это, лишь для теста

if (!getProductsFromStorage()) {
  localStorage.setItem("products", JSON.stringify([
    {
      id: "1",
      name: "Таймер кухонный, электронный, Baldr",
      imageUrl: "./images/products/product-1.png",
      properties: [
        { key: "Бренд", value: "Baldr" },
      ],
      count: 1,
      maxCount: 5,
      price: 126281
    },
    {
      id: "2",
      name: "Газобетонный стеновой блок D400 600x300x250",
      imageUrl: "./images/products/product-2.png",
      properties: [
        { key: "Цвет", value: "бежевый" },
        { key: "Комплект", value: "полный" },
        { key: "Состояние", value: "новый" },
        { key: "Размер", value: "28" },
        { key: "Цвет рамки", value: "золотой" }
      ],
      count: 2,
      maxCount: 8,
      price: 1242
    },
    {
      id: "3",
      isDeleted: true,
      name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый",
      imageUrl: "./images/products/product-2.png",
      properties: [
        { key: "Цвет", value: "бежевый" },
        { key: "Комплект", value: "полный" },
        { key: "Состояние", value: "новый" },
        { key: "Размер", value: "28" },
        { key: "Цвет рамки", value: "золотой" }
      ],
      count: 11,
      maxCount: 124,
      price: 681
    },
    {
      id: "4",
      name: "Робот-пылесос PVCR 0726W (POLARIS), Polaris бежевый цвет официальный магазин Поларис",
      imageUrl: "./images/products/product-3.png",
      properties: [
        { key: "Цвет", value: "бежевый" },
        { key: "Комплект", value: "полный" },
        { key: "Состояние", value: "новый" },
        { key: "Размер", value: "28" },
        { key: "Цвет рамки", value: "золотой" }
      ],
      count: 11,
      maxCount: 20,
      price: 681
    }
  ]))  
}
