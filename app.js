const slider = document.querySelector('.slider');
const sliderBtn = document.querySelector('.slider-btn');

slider.addEventListener('click', (e)=>{
    if(sliderBtn.classList.contains('theme-1')) {
        const main1 = document.querySelector('.main-1');
        const calc1 = document.querySelectorAll('.calc-1');
        const input1 = document.querySelectorAll('.input-1');
        sliderBtn.classList.remove('theme-1');
        sliderBtn.classList.add('theme-2');
        main1.classList.add('main-2');
        main1.classList.remove('text-white');
        main1.classList.remove('main-1');
        calc1.forEach(item=>{
            item.classList.add("calc-2");
            item.classList.remove("calc-1");
        });
        input1.forEach(input=>{
            input.classList.add("input-2");
            input.classList.remove("input-1");
        });
    }
    else if(sliderBtn.classList.contains('theme-2')) {
        const main2 = document.querySelector('.main-2');
        const calc2 = document.querySelectorAll('.calc-2');
        const input2 = document.querySelectorAll('.input-2');
        sliderBtn.classList.remove('theme-2');
        sliderBtn.classList.add('theme-3');
        main2.classList.add('main-3');
        main2.classList.add('text-white');
        main2.classList.remove('main-2');
        calc2.forEach(item=>{
            item.classList.add("calc-3");
            item.classList.remove("calc-2");
        });
        input2.forEach(input=>{
            input.classList.add("input-3");
            input.classList.remove("input-2");
        });
    } else {
        const main3 = document.querySelector('.main-3');
        const calc3 = document.querySelectorAll('.calc-3');
        const input3 = document.querySelectorAll('.input-3');
        sliderBtn.classList.remove('theme-3');
        sliderBtn.classList.add('theme-1');
        main3.classList.add('main-1');
        main3.classList.add('text-white');
        main3.classList.remove('main-3');
        calc3.forEach(item=>{
            item.classList.add("calc-1");
            item.classList.remove("calc-3");
        });
        input3.forEach(input=>{
            input.classList.add("input-1");
            input.classList.remove("input-3");
        });
    }
})