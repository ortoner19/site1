const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide')
      dots = document.querySelectorAll('.dot');
let index = 0; // це перше фото

const activeSlide = n => {
    console.log(n); // показує в консоль на якому фото в масіві знаходимся
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => { // тут пишем, шоб з останнього слайда на перший переключався
 if(index == slides.length - 1) {   // ((перевірка останній лі слайд) запис означає : якшо наш слайд останній, тоді
    index = 0;  // це ми вобще писали за кнопку вперед, а ниже функція під кнопку назад
    activeSlide(index);
    activeDot(index);  // за ектів Дот писали внизу
 } else {
     index++;
     activeSlide(index);
     activeDot(index); 
 }
}
const prevSlide = () => {  // оце функція під кнопку назад
 if(index == 0) {     // тіпа якшо менше першого слайда, то в останній
    index = slides.length -1  
    activeSlide(index);
    activeDot(index); 
 } else {
     index--;
     activeSlide(index);
     activeDot(index); 
 }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//зверху написали за пепеключеніє картінок, тепер пишем за точкі
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

dots.forEach((item, indexDot) => { // оцей код при клікі на точкі переключа картінкі
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index); // оце замість цього закомєнтіруване ниже тіпа вставить можна було
        activeDot(index); 
    })
})
// setInterval(nextSlide, 15000); це сет інтервал, пока виключів


// оце переключатєль для кнопок. Вообще, непонятно чого воно не работає, скопірувано як у Черніченка.. де баг непонятно.. (переписав під toggle з актівним класом одним, сработало)
document.addEventListener('click', function (e) {
    const clickedElement = e.target;
   
    if (clickedElement.id === 'btn-prev') {
        document.getElementById('btn-prev').classList.toggle('active-switch');
        document.getElementById('btn-next').classList.toggle('active-switch');

    } else if (clickedElement.id === 'btn-next') {
        document.getElementById('btn-prev').classList.toggle('active-switch');
        document.getElementById('btn-next').classList.toggle('active-switch');

    } 
     
    // ОЦЕ ТУТ Я ПИТАВСЯ ПОНЯТЬ ЯК ПЕРЕКЛЮЧАТЬ КНОПКІ ПРИ НАЖАТІЇ НА ТУ Ж САМУ, НО НЕ ЗУМІВ.. ТРЕБА ДАЛІ РОЗБИРАТЬСЯ
    //else if (clickedElement.id === 'btn-next.active-switch') {    
    //    document.getElementById('btn-prev').classList.toggle('active-switch');
    //    document.getElementById('btn-next').classList.toggle('active-switch');
    //}
    //else if (clickedElement.id === 'btn-prev.active-switch') { 
    //    document.getElementById('btn-prev').classList.toggle('active-switch');
    //    document.getElementById('btn-next').classList.toggle('active-switch');
    //}
});




// бургєр і верхній навбар

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.header-section')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    //(з цим рядком робило як з тим шо знизу // menuLinks.classList.toggle('active');
    if(this.classList.contains('active')){   // далі я намагався зробить шоб і в обратному напрямку задвигалось меню, та не вийшло..
        this.classList.remove('active');
        document.querySelector('.header-section').classList.remove('active');
    }
    else {
        this.classList.add('active');
        document.querySelector('.header-section').classList.add('active');
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