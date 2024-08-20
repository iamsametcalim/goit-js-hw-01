console.log("goit-js-hw-01 / task-1");

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

console.log("task-2");

function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

console.log("task-3");
function getElementWidth(content, padding, border) {
  content = parseFloat(content);
  padding = parseFloat(padding);
  border = parseFloat(border);

  if (isNaN(content) || isNaN(padding) || isNaN(border)) {
    return "Geçersiz giriş";
  }

  let totalWidth = content + padding * 2 + border * 2;

  return `${totalWidth}px`;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
