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
    var website = el.website.value;
    var textarea =el.textarea.value;

    var name_pattern = /^[A-ZА-ЯЁІ ,.'-]+$/i;    // регулярне вираженіє для імені
    var email_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;  // регулярне вираєеніє під імейл

    var fail = "";
    if(name == "" || email == "" || website == "")
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




// Perfect button 4

function buttonAnimation (){
    const button = document.querySelector('.button4')
    const container4 = document.querySelector('.container4')

    function deleteCircleIcon(circle){
        circle.remove()
    }

    function crateCircleIcon (posX, posY) {
        const circle = document.createElement('div')  // тіпа ми создали div і ниже добавили йому клас circle із css
        circle.classList.add('circle')
        circle.style.left = `${posX}px`
        circle.style.top = `${posY}px`

        container4.appendChild(circle)

        setTimeout(() =>{
            deleteCircleIcon(circle)
        },1000)
    }
    function handleButtonClick (event) {   
        const  offset = event.target.getBoundingCLientRect()
        console.log(offset)

        const posX = event.pageX - offset.left
        const posY = event.pageY - offset.top

        crateCircleIcon(posX, posY)
    }
    button.addEventListener('mousedown', handleButtonClick)
}
buttonAnimation()