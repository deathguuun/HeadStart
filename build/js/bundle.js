(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // Don't touch
  svg4everybody(); // End don't touch

  require('./main.js');
}); // remove preloader

$(window).on('load', function () {
  $('html').addClass('page-loaded');
});

},{"./main.js":2}],2:[function(require,module,exports){
"use strict";

//HEADER slide
(function () {
  var header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset > 22) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  };
})();

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
}); //PRICE TAB

$(".price .price__lesson").click(function () {
  $(".price .price__lesson").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".price .price__content").hide().eq($(this).index()).fadeIn().css("display", "flex").css("justify-content", "space-around");
}).eq(0).addClass("active-tab"); //PRICE HOVER

$(document).ready(function () {
  $(".price__button").hover(function () {
    $(".price__box").removeClass("border");
    $(".price__box").addClass("border--xl"), function () {
      $(".price__box").removeClass("border--xl");
      $(".price__box").addClass("border");
    };
  }); //Slider TEAM

  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 420,
      settings: {
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        centerMode: false
      }
    }]
  }); //Slider REVIEW

  $('.review__item').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.review__content'
  });
  $('.review__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.review__item',
    adaptiveHeight: false
  });
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
