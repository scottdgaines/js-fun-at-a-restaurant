function nameMenuItem(name) {
  var menuItemName = name
  return `Delicious ${menuItemName}`
  }

nameMenuItem();

function createMenuItem(name, price, type) {
  var item = {
    name: name,
    price: price,
    type: type
  }
  return item
}

function addIngredients (topping, ingredients) {
    if (ingredients.includes(topping)) {
     return undefined;
    } else {
      ingredients.push(topping);
    }
  return ingredients
}

function formatPrice(initialPrice) {
  var formattedPrice = "$" + initialPrice
  return formattedPrice
}

function decreasePrice(price) {
  var discount = price * .10
  var decreasedPrice = price - discount
  return decreasedPrice
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType}
  return recipe
  }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
