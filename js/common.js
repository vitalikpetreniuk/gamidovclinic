$(function() {

    AOS.init();

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html,body').animate({scrollTop: $(target).offset().top - 67},'slow');
        $('.menu-toggle button').removeClass('active');
        $('.header-bottom').hide();
    });

    $('.menu-toggle button').on('click', function () {
        $(this).toggleClass('active');
        $('.header-bottom').slideToggle('fast');
    });

	$('.result-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        margin: 30,
        autoHeight: true
    });

	var doctors = $('.doctors-slider').owlCarousel({
        nav: true,
        dots: false,
        autoHeight: true,
        loop: true,
        margin: 30,
        responsive:{
            0:{
                items: 1
            },
            768:{
                stagePadding: 60,
                items: 1
            },
            1230:{
                stagePadding: 60,
                items: 2
            }
        }
    });
    doctors.find('.owl-nav').appendTo('.doctors-in');

    $('.price-more button').on('click', function () {
        $(this).toggleClass('active');
       $('.price-item:not(:nth-child(-n+4))').toggleClass('visible');
    });

    $('.faq-item-title').on('click', function () {
        $(this).siblings().slideToggle('fast').closest('.faq-item').toggleClass('active').siblings().removeClass('active').find('.faq-item-cont').slideUp('fast');
    });

    $('.modal-close').on('click', function () {
       $(this).closest('.modal-custom').removeClass('open');
    });

    $('.modal-back').on('click', function () {
       $(this).closest('.modal-custom').removeClass('open');
    });

    $('.modal-open').on('click', function () {
        $(this).closest('.modal-custom').removeClass('open');
        var target = $(this).attr('data-target');
        $(target).addClass('open');
    });

    var num = 1;
    $(window).on('scroll', function () {
        var sectionTop = $('.fit').offset().top;
        var windowTop = $(window).scrollTop();
        if(sectionTop < windowTop && num === 1){
            $('.modal-start').addClass('open');
            num = 0;
        }
    });

});
