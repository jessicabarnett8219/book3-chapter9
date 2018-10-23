console.log("hey")
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

// defining a function to make the HTML component
const makeFoodHTML = (name, country, ingredients, calories, fat, sugar) => {
  return `
    <section class="foodItem">
      <h1>${name}</h1>
      <p>Ethnicity: ${country}</p>
      <p>Ingredients: ${ingredients}</p>
      <p>Calories: ${calories}</p>
      <p>Fat: ${fat}</p>
      <p>Sugar: ${sugar}</p>
    </section>  `
}

// defining a function that selects the container on the DOM and at the HTML component. HTML component is passed in as the argument
const foodList = (food) => {
  return document.querySelector(".foodList").innerHTML += food
}

// defininf a function to put it all together
const foodMaker = () => {
  // getting our food data and turning it to JS
  getMyFoodArray()
    // take that data
    .then(myFoodArray => {
      // iterate over it
      myFoodArray.forEach(myFood => {
        // on each iteration grab the barcode from our food data, call the function to get external data, passing the barcode in as an argument
        getExternalFood(myFood.barcode)
          // then use that data to pull out the following info and assign them to variables
          .then((externalFoodArray) => {
            const sugar = externalFoodArray.product.nutriments["sugars"]
            const calories = externalFoodArray.product.nutriments["energy"]
            const fat = externalFoodArray.product.nutriments["fat"]
            const ingredients = externalFoodArray.product["ingredients_text"]

            // calling the function that makes the HTML component
            const foodComponent = makeFoodHTML(myFood.name, myFood.ethnicity, ingredients, calories, fat, sugar)
            // calling the function that adds it to the DOM
            foodList(foodComponent)
          })
      })
    } )

}

foodMaker()








