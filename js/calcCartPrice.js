function calcCartPrice() {
  // const cartWrapper = document.querySelector('.cart-wrapper');
  const cartItems = document.querySelectorAll(".cart-item");
  console.log(cartItems);

  cartItems.forEach(function (item) {
    console.log(item);

    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");

    const currentPrice = perseInt(amountEl.innerText) * perseInt(priceEl.innerText);
    console.log(currentPrice);
  });
}
