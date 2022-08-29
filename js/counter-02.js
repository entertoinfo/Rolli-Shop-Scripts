//Добаление прослушки всего окна
window.addEventListener("click", function (event) {
  //обявляем переменную для счетчика
  let counter;

  //Проверяем клик строго по кнопкам + или -
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");

    //находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //Проверяем является ли элемент по которому был совершен клик кнопкой плюс
  if (event.target.dataset.action === "plus") {
    let counterRes = counter.innerText;
    counterRes++;
    counter.innerText = counterRes;
  }
  //Проверяем является ли элемент по которому был совершен клик кнопкой минус
  if (event.target.dataset.action === "minus") {
    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      //Удаляем товар из корзины
      event.target.closest(".cart-item").remove();
      //отображение статуса корзины пустая / полная
      toggleCartStatus();
      //Подсчет общей суммы товаров
      calcCartPriceAndDelivery();
    }
  }

  //Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")
  ) {
    //Подсчет общей суммы товаров
    calcCartPriceAndDelivery();
  }
});
