function takeOrder(order, deliveryOrders) {
  deliveryOrders.push(order);
  if (deliveryOrders.length > 3) {
    deliveryOrders.splice(3, 1);
  } else {
  return deliveryOrders;
  }
}

function refundOrder(num, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === num) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var items = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
return items.join(", ")
}

function searchOrder(deliveryOrders, item) {
  var boo = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
    boo = true }
  } return boo
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
