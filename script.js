let nav_container = document.querySelector(".nav-menu-continer");
let close_btn = document.querySelector(".cross-icon");
let toggle_button = document.querySelector(".toggle_btn");

toggle_button.addEventListener("click", function(){
    nav_container.classList.toggle("open")
});
close_btn.addEventListener("click", function(){
    nav_container.classList.remove("open")
});