const cartWrapper = document.querySelector('.cart-wrapper');
// отслеживаем клик на странице
window.addEventListener('click', function(event){
    // проверка что клик был совершен по кнопке "добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // Находим кнопку с товаром внутри которая совершен был клик 
        const card = event.target.closest('.card')
        // собираем инфу о товаре и объеденяем в один объект Product info
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,


        };
        // Проверка есть ли товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if(itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        }else{
        // Собраггые данные подставляем в шаблон для товаров в корзине
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox}/ ${productInfo.weight}.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>`;
                // Отображение Товара в корзине
              cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);     
       }
       // Сброс счетчика после добавления в корзину товара 
       card.querySelector('[data-counter]').innerText = '1';
        //Отображения статуса конрзины(пустая или полная)

        toggleCartStatus();

        calcCartPriceAndDelivery();
    }
});