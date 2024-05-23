let add = document.querySelector('.add');
let menu = document.querySelector("#menu");
let crossBtn = document.querySelector(".cross-btn");

add.addEventListener('click', ()=>{
  menu.classList.add('active');
});
crossBtn.addEventListener('click', ()=>{
  menu.classList.remove('active');
});
menu.addEventListener('click', function(e){
    if (e.target.classList.contains("active")){
        menu.classList.remove('active');
    }
})

