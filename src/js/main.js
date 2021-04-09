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

//ANCHOR slide
$(document).ready(function () {
	$('a[href^="#"]').bind("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 800);
		e.preventDefault();
	});
	return false;
});

//Header BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

//PRICE TAB

$(".price .price__lesson").click(function () {
	$(".price .price__lesson").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
	$(".price .price__content").hide().eq($(this).index()).fadeIn().css("display", "flex").css("justify-content", "space-around")
}).eq(0).addClass("active-tab");




//Slider TEAM

$('.slider').slick({
	adaptiveHeight: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	adaptiveHeight: false,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				dots: true,
			}
		},
		{
			breakpoint: 420,
			settings: {
				arrows: false,
				autoplay: false,
				slidesToScroll: 1,
				slidesToShow: 1,
				dots: true,
				adaptiveHeight: true,
			}
		}
	]
});


//Slider REVIEW

$('.review__item').slick({
	centerMode: true,
	centerPadding: '20px',
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 775,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
			}
		},
	],
	arrows: true,
	asNavFor: '.review__content',
	adaptiveHeight: false,

});


$('.review__content').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	draggable: false,
	fade: true,
	asNavFor: '.review__item',
	adaptiveHeight: false,
});




