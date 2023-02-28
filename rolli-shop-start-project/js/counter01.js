// находим элементы на страницу кнопка +- и счетчик
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');  

// отслеживаем кнпоку минус
btnMinus.addEventListener('click', function(){
    //проверяем что бы значения не уходило за 1 и в минус

    if ( parseInt(counter.innerText) > 1 ) {
        counter.innerText = --counter.innerText;
    }
       
    });
// отслеживаем кнопку ++

    btnPlus.addEventListener('click', function(){
    
        counter.innerText = ++counter.innerText;
        });

          