$(function(){
    $('.header-slider').slick({
        vertical: true,
        arrows: false,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 2000
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});