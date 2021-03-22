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

//PRICE HOVER
$(document).ready(function () {
    $(".price__button").hover(function (){
        $(".price__box").removeClass("border");
        $(".price__box").addClass("border--xl"),
            function(){
                $(".price__box").removeClass("border--xl");
                $(".price__box").addClass("border")
            };
    });


//Slider TEAM

    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });


//Slider REVIEW

    $('.review__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        centerPadding: '10px',
        centerMode: true ,
        asNavFor: '.review__text',
    });


    $('.review__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.review__slider'
    });
});



