// Роблю range... це якшо 1 айді
var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue");
var ProgressBar = document.getElementById("ProgressBar");
SelectValue.innerHTML = slider.value;
slider.oninput = function(){
    SelectValue.innerHTML = this.value + "%";
    selector.style.left = this.value  + "%";
    ProgressBar.style.width = this.value + "%";
}


// Питаюсь перебрать рэнжи... короче хуй знає як заставить це работать.. без помочі не обійдусь..
const main = document.querySelectorAll('.main');
const sliderC = document.querySelectorAll(".slider");
const selectorC = document.querySelectorAll(".selector");
const SelectValueC = document.querySelectorAll(".SelectValue");
const ProgressBarC = document.querySelectorAll(".ProgressBar");

for (let i = 0; i < main.length; i++){
    const mainElement = main[i];
    console.log(mainElement[1]);
    for (let i = 0; i < sliderC.length; i++){
        const sliderCC = sliderC[i];
        main[0] = sliderCC;
    }
    for (let ii = 0; ii < selectorC.length; ii++){
        const selectorCC = selectorC[ii];
        main[1] = selectorCC;
    }
    for (let iii = 0; iii < SelectValueC.length; iii++){
        const SelectValueCC = SelectValueC[iii];
        console.log(SelectValueCC.value)
        main[2] = SelectValueCC;
    }
    for (let iiii = 0; iiii < ProgressBarC.length; iiii++){
        const ProgressBarCC = ProgressBarC[iiii];
        console.log(ProgressBarCC.value)
        main[3] = ProgressBarCC;
    }
    
    
    

   
}

//     const sliderCC = [];
//     var sliderC = document.querySelectorAll(".slider");
//     sliderC.forEach(elem =>{
//     sliderCC.push(elem.sliderC)
// })


//     const selectorCC = [];
//     var selectorC = document.querySelectorAll(".selector");
//     selectorC.forEach(elem =>{
//         selectorCC.push(elem.selectorC)
// })
//     const SelectValueCC = [];
//     var SelectValueC = document.querySelectorAll(".SelectValue");
//     sliderC.forEach(elem =>{
//     SelectValueCC.push(elem.SelectValueC)
// })
//     const ProgressBarCC = [];
//     var ProgressBarC = document.querySelectorAll(".ProgressBar");
//     ProgressBarC.forEach(elem =>{
//     ProgressBarCC.push(elem.ProgressBarC)
//})




//// Переробоюю range під класи, короче не вийшло у мене і я забив

// var sliderC = document.querySelectorAll(".slider");
// var selectorC = document.querySelectorAll(".selector");
// var SelectValueC = document.querySelectorAll(".SelectValue");
// var ProgressBarC = document.querySelectorAll(".ProgressBar");

// SelectValueC.innerHTML = sliderC.value;
// SelectValueC.forEach(function(item5) { 
//     item5.innerHTML = sliderC.forEach(function(item6){
//         item6.value;
//     })
// })
// sliderC.forEach(function(item) {
//     item.oninput = function(){

// SelectValueC.forEach(function(item2) { 
//     item2.innerHTML = this.value + "%";
// })
// selectorC.forEach(function(item3) { 
//     item3.style.left = this.value  + "%";
// })
// ProgressBarC.forEach(function(item4) { 
//     item4.style.width = this.value + "%";
// })
//     }
// })


// sliderC.forEach(function(item) {   // тут хєрня , но вона робила
//     item.addEventListener('click', () => {
//         sliderC.forEach(function(item2) {
//       item2.classList.remove('active')
//      })
   
//      item.classList.add('active')
//     })
//    })


// бургєр і верхній навбар

//const rightHeader = document.querySelector('.right_header_area')
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.header_area')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    //(з цим рядком робило як з тим шо знизу // menuLinks.classList.toggle('active');
    if(this.classList.contains('active')){   // далі я намагався зробить шоб і в обратному напрямку задвигалось меню, та не вийшло..
        this.classList.remove('active');
        document.querySelector('.header_area').classList.remove('active');
    }
    else {
        this.classList.add('active');
        document.querySelector('.header_area').classList.add('active');
    }
})

// кнопка вверх //

const scrollBtn = document.querySelector('.isShowBtn');
window.onscroll = () => {
    if(window.scrollY > 200){
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollY < 200) {
        scrollBtn.classList.add('isShowBtn_hide');
    }
}
scrollBtn.onclick = () =>{
    window.scrollTo(0, 0);
}