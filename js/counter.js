const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', function(){
  counter.innerText = --counter.innerText;
  counter (input.value > 0);
})

btnPlus.addEventListener('click', function(){
  let counterRes = counter.innerText;
  counterRes ++;
  counter.innerText = counterRes;
})

