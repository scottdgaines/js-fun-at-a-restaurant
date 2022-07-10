function createRestaurant(name) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  }
  var pizzaRestaurant = {
    name: name,
    menus: menus
  }
  return pizzaRestaurant
}

function addMenuItem(pizzaRestaurant, newItem) {
    if (newItem.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(newItem)) {
    pizzaRestaurant.menus.breakfast.push(newItem)
  } else if (newItem.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(newItem)) {
    pizzaRestaurant.menus.lunch.push(newItem)
  } else if (newItem.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(newItem)) {
    pizzaRestaurant.menus.dinner.push(newItem)
  }
}

function removeMenuItem(pizzaRestaurant, item, menu) {
  var result = `No one is eating our ${item} - it has been removed from the ${menu} menu!`
    for (var i = 0; i < pizzaRestaurant.menus.length; i++) {
      if (item === pizzaRestaurant.menus.breakfast.name) {
        pizzaRestaurant.menus.breakfast[0].splice(i, 0)
      }
    }
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
