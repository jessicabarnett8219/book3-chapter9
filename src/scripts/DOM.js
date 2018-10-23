// defining a function that adds the food sections to the DOM
const makeFoodList = (food) => {
  // selecting the article on the DOM to append the section to
  let foodListContainer = document.querySelector(".foodList")
  // appending the food component section to the article on the DOM
  foodListContainer.appendChild(food)
}

// defining a function to put it all together
const makeFoodArticle = () => {
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
            // calling the function that adds the components to a fragment
            makeFoodList(foodComponent)
            
          })
      })
    } )

}

makeFoodArticle()