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

var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
})(); //ANCHOR slide


$(document).ready(function () {
  $('a[href^="#"]').bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 100
    }, 800);
    e.preventDefault();
  });
  return false;
}); //Header BURGER

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
}); //PRICE TAB

$(".price .price__lesson").click(function () {
  $(".price .price__lesson").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".price .price__content").hide().eq($(this).index()).fadeIn().css("display", "flex").css("justify-content", "space-around");
}).eq(0).addClass("active-tab"); //Slider TEAM

$('.slider').slick((_$$slick = {
  adaptiveHeight: true,
  slidesToShow: 2,
  slidesToScroll: 2
}, _defineProperty(_$$slick, "adaptiveHeight", false), _defineProperty(_$$slick, "responsive", [{
  breakpoint: 900,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}, {
  breakpoint: 575,
  settings: {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true
  }
}, {
  breakpoint: 420,
  settings: {
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    adaptiveHeight: true
  }
}]), _$$slick)); //Slider REVIEW

$('.review__item').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
  }],
  arrows: true,
  asNavFor: '.review__content',
  adaptiveHeight: false
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

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
