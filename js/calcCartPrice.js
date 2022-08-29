function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('.data-cart-delivery');


  let priceTotal = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    priceTotal += currentPrice;
  })

  //отображаем цену на странице, 
  totalPriceEl.innerText = priceTotal;

  if(priceTotal > 0){
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  if (priceTotal >= 600){
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else{
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '20 $';
  }
}
