// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

let pizza = {
  name: "pizza",
  type: "dinner",
  ethnicity: "italian"
}
  
const foodList = document.querySelector(".foodList")

const createFoodItem = (foodObject) => {`
<section class="foodItem">
    <h2>${foodObject}.name</h2>
    <p>${foodObject}.type/p>
    <p>${foodObject}.ethnicity</p>
</section>
`
}

const makeFoodItem = (foodName) => { 
  let foodItem = document.createElement("section")
  foodItem.innerHTML = `<h1>${foodName}</h1>`
  foodList.appendChild(foodItem)
}

makeFoodItem("pizza")
// const insertFoodItem = (pizza) => {
//   let foodItem = createFoodItem(pizza)
//   foodList.appendChild(foodItem)
//   return foodItem
// }





// Create a function that inserts an HTML representation of a food into the DOM