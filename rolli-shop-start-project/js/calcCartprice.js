function calcCartPriceAndDelivery () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const dataCart = document.querySelector('[data-cart-delivery]');

    //общая стоимость товара
        let priceTotal = 0;
    //обходим все блоки с ценами в корзине
  priceElements.forEach (function(item){
    // Находим количество товара 
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        //Добавляем стоимость товара в общую стоимость (вол-во * на цену)
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

    })
    // общая стоимость (итог)
    totalPriceEl.innerText = priceTotal;
    // скрываем\показываем блок с стоимостью доставки
    if (priceTotal > 0) {
        dataCart.classList.remove('none')
    }else {
        dataCart.classList.add('none')
    }
    // указываем стоимость доставки
     if (priceTotal >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Беслаптно';
     } else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
     }
}