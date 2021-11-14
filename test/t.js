//document.getElementById("link1").addEventListener("click", function(){
//    document.getElementById("video2").classList.remove("active");
//    document.getElementById("video1").classList.add("active");
//  });
//  
//  document.getElementById("link2").addEventListener("click", function(){
//    document.getElementById("video1").classList.remove("active");
//    document.getElementById("video2").classList.add("active");
//  });

 // document.getElementById("test1").addEventListener("click", function(){ 
 //   document.getElementById("test1").classList.remove("blue");
 //   document.getElementById("test2").classList.add("red");
 // });
 // document.getElementById("test2").addEventListener("click", function(){
 //   document.getElementById("test2").classList.remove("red");
 //   document.getElementById("test1").classList.add("blue");
 // });



// const test = document.querySelector('.test') 
//      test.addEventListener('click', (event) => {
//        const target = event.target
//        target.classList.toggle('blue')
//    })




// document.addEventListener("click", function(e){  тут було рабочє по айді, но воно отрубалось при кліку на сторінці
//   const clickedElement = e.target;
//   const clickedElementId = clickedElement.id;
//   
//   if (clickedElementId === 'test1') {
//     document.getElementById("test1").classList.remove("blue");
//     document.getElementById("test2").classList.add("red");
//   } else {
//     document.getElementById("test2").classList.remove("red");
//     document.getElementById("test1").classList.add("blue");
//   }
// });


//ниже рішення Черніченка по квері сєлєктор ол !!!!!!!!!! ЗАРАБОТАЛО ЯК І НАДА БУЛО
//document.addEventListener('click', function(e){
//const clickedElement = e.target;
//const matches = document.querySelectorAll('.test')
//
//matches.forEach(el => {
//  if (el === clickedElement) {
//    el.classList.add('blue');
//    el.classList.remove('red');
//  } else {
//      el.classList.remove('blue');
//      el.classList.add('red');
//    }
//});
//});



// ниже роздокументірував рішення по айдішнікам, оце сработало з двума кольорами
//document.addEventListener("click", function(e){ 
//  const clickedElement = e.target;
//  const clickedElementId = clickedElement.id;
//  
//  if (clickedElementId === 'btn-prev') {
//    document.getElementById("btn-prev").classList.remove("blue");
//    document.getElementById("btn-next").classList.add("red");
//  } else {
//    document.getElementById("btn-next").classList.remove("red");
//    document.getElementById("btn-prev").classList.add("blue");
//  }
//});

// ниже питався зробить з одним кольором, вийшло, но при нажатії на екран нажималось іще..

//document.addEventListener("click", function(e){ 
//  const clickedElement = e.target;
//  const clickedElementId = clickedElement.id;
//  
//  if (clickedElementId === 'btn-prev') {
//    document.getElementById("btn-prev").classList.remove("red");
//    document.getElementById("btn-next").classList.add("red");
//  } else {
//    document.getElementById("btn-next").classList.remove("red");
//    document.getElementById("btn-prev").classList.add("red");
//  }
//});

// оце я через кверісєлєктор ол робив --- оце наконєц сработало як нада (моє останєє рішення, перед Черніченком, отрубалось тут при клацанні на екран)
//document.addEventListener('click', function(e){     
//const clickedElement = e.target;
//const matches = document.querySelectorAll('.btn-switch')
//
//matches.forEach(el => {
//  if (el === clickedElement) {
//    el.classList.add('red');
//    el.classList.remove('blue');
//  } else {
//    el.classList.remove('red');
//    el.classList.add('blue');
//  }
//});
//});

document.addEventListener('click', function (e) {
  const clickedElement = e.target;
 
  if (clickedElement.id === 'btn-prev') {
      document.getElementById('btn-prev').classList.add('active');
      document.getElementById('btn-next').classList.remove('active');
  } else if (clickedElement.id === 'btn-next') {
      document.getElementById('btn-prev').classList.remove('active');
      document.getElementById('btn-next').classList.add('active');
  }
});