// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

  
// accessing the food list container in the DOM
const foodList = document.querySelector(".foodList")

// function to make the food item component
const makeFoodItem = (foodObject) => { 
  let foodItem = document.createElement("section")
  foodItem.innerHTML = `
    <section class="foodItem">
      <h1>${foodObject["name"]}</h1>
      <p>${foodObject["type"]}</p>
      <p>${foodObject["ethnicity"]}</p>
    </section>  
    `
    return foodItem
}

// function to add the food itm component to the DOM. Calling the make food component function inside.

const addFoodItem = (foodObject) => {
  let newFoodItem = makeFoodItem(foodObject)
  foodList.appendChild(newFoodItem)
}

