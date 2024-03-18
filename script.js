let nav_container = document.querySelector(".nav-menu-continer");
let close_btn = document.querySelector(".cross-icon");
let toggle_button = document.querySelector(".toggle_btn");
// card
let card_button = document.querySelector(".card-icon");
let card_container = document.querySelector(".card-list-container");
// photos change
let main_photo = document.querySelector("#m-photo");
// 4 change photos path
let photo_1 = document.querySelector(".thamb-1");
let photo_2 = document.querySelector(".thamb-2");
let photo_3 = document.querySelector(".thamb-3");
let photo_4 = document.querySelector(".thamb-4");




toggle_button.addEventListener("click", function(){
    nav_container.classList.toggle("open")
});
close_btn.addEventListener("click", function(){
    nav_container.classList.remove("open")
});
card_button.addEventListener("click", function(){
   card_container.classList.toggle("card_open")
});

photo_1.addEventListener("click", ()=>{
   main_photo.src = "./images/image-product-1.jpg"
});
photo_2.addEventListener("click", ()=>{
   main_photo.src = "./images/image-product-2.jpg"
});
photo_3.addEventListener("click", ()=>{
   main_photo.src = "./images/image-product-3.jpg"
});
photo_4.addEventListener("click", ()=>{
   main_photo.src = "./images/image-product-4.jpg"
});