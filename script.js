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
    document.body.style.backgroundColor = "rgba(0,0,0,.4)"
});
close_btn.addEventListener("click", function(){
    nav_container.classList.remove("open")
    document.body.style.backgroundColor = ""
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

document.onclick = function close_nav_body(e){
   if(!toggle_button.contains(e.target) && !toggle_button.contains(e.target)){
      nav_container.classList.remove("open")
      document.body.style.backgroundColor = ""
   }
}
// start carosel
let main_photo_for_carousel = document.querySelector("#m-photo")
let carosel_close = document.querySelector(".close-icon");
let carousel_contant = document.querySelector(".carousel-container");
let slide_image = document.querySelector(".slider");
let left_indicator = document.querySelector(".next-button");
let right_indicator = document.querySelector(".prev-button");
let main_image = document.querySelectorAll(".images");
// indicator images
let indicator_1 = document.querySelector(".indicator-1");
let indicator_2 = document.querySelector(".indicator-2");
let indicator_3 = document.querySelector(".indicator-3");
let indicator_4 = document.querySelector(".indicator-4");


main_photo_for_carousel.addEventListener("click",()=>{
    carousel_contant.classList.toggle("open_carosel")
});
carosel_close.addEventListener("click",()=>{
    carousel_contant.classList.remove("open_carosel")
});

let slideNumber = 1;

left_indicator.addEventListener("click",()=>{
   if(slideNumber < main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber++
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
})
right_indicator.addEventListener("click",()=>{
   if(slideNumber > main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber--
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
})

// click indicator
indicator_1.addEventListener("click",()=>{
   if(slideNumber < main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber++
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
});
indicator_2.addEventListener("click",()=>{
   if(slideNumber < main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber++
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
});
indicator_3.addEventListener("click",()=>{
   if(slideNumber < main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber++
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
});
indicator_4.addEventListener("click",()=>{
   if(slideNumber < main_image.length){
      slide_image.style.transform = `translatex(-${slideNumber*350}px)`;
      slideNumber++
   }
   else{
      slide_image.style.transform = `translatex(0)`;
      slideNumber = 1
   }
});

// start mobile carousel
let mobile_prev = document.querySelector(".mobile-sli-prev");
let mobile_next = document.querySelector(".mobile-sli-next");
let mobile_slide = document.querySelector(".mobile-slider");
let mobile_img_main = document.querySelectorAll(".mobile-slide-img");


var mobile_sliderIndex = 1;
mobile_next.addEventListener("click",()=>{
   if(mobile_sliderIndex < mobile_img_main.length){
      mobile_slide.style.transform = `translatex(-${mobile_sliderIndex*100}%)`
      mobile_sliderIndex++
   }
   else{
      mobile_slide.style.transform = `translatex(0%)`
      mobile_sliderIndex = 1 
   }
})
mobile_prev.addEventListener("click",()=>{
   if(mobile_sliderIndex < mobile_img_main.length){
      mobile_slide.style.transform = `translatex(-${mobile_sliderIndex*100}%)`
      mobile_sliderIndex--
   }
   else{
      mobile_slide.style.transform = `translatex(0%)`
      mobile_sliderIndex = 1
   }
})



