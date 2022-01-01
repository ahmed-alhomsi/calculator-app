const slider = document.querySelector('.slider');
const sliderBtn = document.querySelector('.slider-btn');

slider.addEventListener('click', (e)=>{
    if(sliderBtn.classList.contains('theme-1')) {
        const main1 = document.querySelector('.main-1');
        const calc1 = document.querySelectorAll('.calc-1');
        const input1 = document.querySelectorAll('.input-1');
        const del1 = document.querySelectorAll('.del-1');
        const equ1 = document.querySelectorAll('.equ-1');
        const textPri1 = document.querySelectorAll('.text-pri-1');
        const textSec1 = document.querySelectorAll('.text-sec-1');
        sliderBtn.classList.remove('theme-1');
        sliderBtn.classList.add('theme-2');
        main1.classList.add('main-2');
        main1.classList.remove('main-1');
        calc1.forEach(item=>{
            item.classList.add("calc-2");
            item.classList.remove("calc-1");
        });
        input1.forEach(input=>{
            input.classList.add("input-2");
            input.classList.remove("input-1");
        });
        del1.forEach(delItem=>{
            delItem.classList.add('del-2');
            delItem.classList.remove('del-1');
        });
        equ1.forEach(equItem=>{
            equItem.classList.add('equ-2');
            equItem.classList.remove('equ-1');
        });
        textPri1.forEach(textItem=>{
            textItem.classList.add('text-pri-2');
            textItem.classList.remove('text-pri-1');
        });
        textSec1.forEach(textItem=>{
            textItem.classList.add('text-sec-2');
            textItem.classList.remove('text-sec-1');
        });
    }
    else if(sliderBtn.classList.contains('theme-2')) {
        const main2 = document.querySelector('.main-2');
        const calc2 = document.querySelectorAll('.calc-2');
        const input2 = document.querySelectorAll('.input-2');
        const del2 = document.querySelectorAll('.del-2');
        const equ2 = document.querySelectorAll('.equ-2');
        const textPri2 = document.querySelectorAll('.text-pri-2');
        const textSec2 = document.querySelectorAll('.text-sec-2');
        sliderBtn.classList.remove('theme-2');
        sliderBtn.classList.add('theme-3');
        main2.classList.add('main-3');
        main2.classList.remove('main-2');
        calc2.forEach(item=>{
            item.classList.add("calc-3");
            item.classList.remove("calc-2");
        });
        input2.forEach(input=>{
            input.classList.add("input-3");
            input.classList.remove("input-2");
        });
        del2.forEach(delItem=>{
            delItem.classList.add('del-3');
            delItem.classList.remove('del-2');
        });
        equ2.forEach(equItem=>{
            equItem.classList.add('equ-3');
            equItem.classList.remove('equ-2');
        });
        textPri2.forEach(textItem=>{
            textItem.classList.add('text-pri-3');
            textItem.classList.remove('text-pri-2');
        });
        textSec2.forEach(textItem=>{
            textItem.classList.add('text-sec-3');
            textItem.classList.remove('text-sec-2');
        });
    } else {
        const main3 = document.querySelector('.main-3');
        const calc3 = document.querySelectorAll('.calc-3');
        const input3 = document.querySelectorAll('.input-3');
        const del3 = document.querySelectorAll('.del-3');
        const equ3 = document.querySelectorAll('.equ-3');
        const textPri3 = document.querySelectorAll('.text-pri-3');
        const textSec3 = document.querySelectorAll('.text-sec-3');
        sliderBtn.classList.remove('theme-3');
        sliderBtn.classList.add('theme-1');
        main3.classList.add('main-1');
        main3.classList.remove('main-3');
        calc3.forEach(item=>{
            item.classList.add("calc-1");
            item.classList.remove("calc-3");
        });
        input3.forEach(input=>{
            input.classList.add("input-1");
            input.classList.remove("input-3");
        });
        del3.forEach(delItem=>{
            delItem.classList.add('del-1');
            delItem.classList.remove('del-3');
        });
        equ3.forEach(equItem=>{
            equItem.classList.add('equ-1');
            equItem.classList.remove('equ-3');
        });
        textPri3.forEach(textItem=>{
            textItem.classList.add('text-pri-1');
            textItem.classList.remove('text-pri-3');
        });
        textSec3.forEach(textItem=>{
            textItem.classList.add('text-sec-1');
            textItem.classList.remove('text-sec-3');
        });
    }
})