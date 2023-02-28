// Добявляем прослушку на все окно 
window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
         counter = counterWrapper.querySelector('[data-counter]');
    }
    

    if (event.target.dataset.action === 'plus') {
         counter.innerText = ++counter.innerText;
        
    }
    
     if(event.target.dataset.action === 'minus') {
        if ( parseInt(counter.innerText) > 1 ) {
            //Изменяем текст в счетчике уменьшая его на 1 
            counter.innerText = --counter.innerText;
        }else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText)=== 1 ) {
            
            // удаление товара из корзины
            event.target.closest('.cart-item').remove();
            // Отображение статуса корзины Пустая\ полная 
            toggleCartStatus();
              // пересчет общей стоимсоти товара в корзине 
              calcCartPriceAndDelivery();

        }
     
    } // Провервка клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // пересчет общей стоимсоти товара в корзине 
        calcCartPriceAndDelivery();

    }
    });

    