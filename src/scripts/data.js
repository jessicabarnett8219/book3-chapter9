// defining a function to get data from my API
const getMyFoodArray = () => {
  return fetch("http://localhost:8088/food/")
  .then(foods => foods.json())
}

// defining a function to get data from external API
const getExternalFood = (myFood) => {
  return fetch(`https://world.openfoodfacts.org/api/v0/product/${myFood}`)
  .then(response => response.json())
}

