//HEADER slide
(function () {
   var header = document.querySelector('.header');
   window.onscroll = () => {
      if (window.pageYOffset > 22) {
         header.classList.add('header__active');
      } else {
         header.classList.remove('header__active');
      }
   };
}());

//PRICE TAB

$(".price .price__lesson").click(function(){
   $(".price .price__lesson").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
   $(".price .price__content").hide().eq($(this).index()).fadeIn().css("display","flex").css("justify-content", "space-around")
}).eq(0).addClass("active-tab");

//Slider TEAM
$(document).ready(function(){
   $('.slider').slick({
      adaptiveHeight: true,
      slidesToShow: 2,
      slidesToScroll: 2,
   });
});

//Slider REVIEW
$(document).ready(function(){
   $('.slider-review').slick({
      centerMode: true,      
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,      
   });
});


