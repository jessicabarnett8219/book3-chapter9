// defining a function to make the HTML component

const makeFoodHTML = (name, country, ingredients, calories, fat, sugar) => {
  let foodItemSection = document.createElement("section")
  foodItemSection.classList.add("foodItem")
  foodItemSection.innerHTML = `
      <h1>${name}</h1>
      <p>Ethnicity: ${country}</p>
      <p>Ingredients: ${ingredients}</p>
      <p>Calories: ${calories}</p>
      <p>Fat: ${fat}</p>
      <p>Sugar: ${sugar}</p>`
  return  foodItemSection
}



