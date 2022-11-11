$(function($){

  //banner slider 
  var swiper = new Swiper("#banner", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  //counter up js 
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });

  //wow js 
  new WOW().init();


});