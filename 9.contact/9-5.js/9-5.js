// бургєр і верхній навбар

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


// Робота з form

document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event) {
    event.preventDefault(); // оця строка отключає перезагрузку сторінкі при нажатії на кнопку
    var el = document.getElementById('main-form');
    var name = el.name.value;
    var email = el.email.value;
    var textarea =el.textarea.value;

    var name_pattern = /^[A-ZА-ЯЁІ ,.'-]+$/i;    // регулярне вираженіє для імені
    var email_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;  // регулярне вираєеніє під імейл

    var fail = "";
    if(name == "" || email == "")
    fail = "Заполните все поля";
    else if(name.length <=1 || name.length > 50)
    fail = "Введите корректное имя";
    else if(name_pattern.test(name) == false)    ///
    fail = "Вы ввели имя неправильно";
    else if(email_pattern.test(email) == false)    ///
    fail = "Вы ввели email неправильно";
    // else if(website.length <=1 || website.length > 50)
    // fail = "Введите корректный website";
    else if(textarea.length <=1 || textarea.length > 50)
    fail = "Введите текст";
    if(fail !=""){
        document.getElementById('error').innerHTML = fail;
        return false;
    } else {
        alert("Все данные корретно заполнены");
        window.location = "https://www.google.com.ua/?hl=ru"; // оце тіпа на сайт перенаправить, на свій "в папці" чогось не йде..
        // return true; без сєрвєра як я поняв нельзя тут писать, шоб на сайт перекінуло
    }

}


// 3Д карти в 4 секції

const cards = document.querySelectorAll('.fourth-section-card');
for (let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', startRotate); 
    card.addEventListener('mouseout', stopRotate); 
}

function startRotate(event){
const cardItem =  this.querySelector('.card-item');
const halfHeight = cardItem.offsetHeight / 2; 
const halfWidth = cardItem.offsetWidth / 2; 
cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5
 +'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)'
}

function stopRotate(event){
const cardItem =  this.querySelector('.card-item');
cardItem.style.transform = 'rotate(0)';
}
