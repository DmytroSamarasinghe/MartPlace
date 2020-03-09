$(function () {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        spacing: "3px",
        readOnly: true,
        ratedFill: "#ffc000",
    })

    $(".products__inner").slick({
        dots: false,
        appendArrows: $('.products__slider-btn'),
        nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>',
    });

    $(".bottom-products__inner").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        appendArrows: $('.bottom-products__slider-btn'),
        nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>',
    });


    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__top-icons').toggleClass('active');
    });

    $("#rang-slid").ionRangeSlider({
        skin: "round",
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$",
    });


    // $('.category-page__products-aside')(function () { 
    $('.categories>.aside__item-top').on('click', function () {
        $('.categories>.aside__item-bottom').slideToggle();
        $('.categories>.aside__item-top').toggleClass('disable'); 
    });
    $('.filter-products>.aside__item-top').on('click', function () {
        $('.filter-products>.aside__item-bottom').slideToggle();
        $('.filter-products>.aside__item-top').toggleClass('disable');
    });
    $('.pricing-range>.aside__item-top').on('click', function () {
        $('.pricing-range>.aside__item-bottom').slideToggle();
        $('.pricing-range>.aside__item-top').toggleClass('disable');
    });
    // });

    $('.filter-large').on('click', function () {
        $('.small-products>.products__item').removeClass('list');
        $('.filter-list').removeClass('active');
        $('.filter-large').addClass('active');
    });
    $('.filter-list').on('click', function () {
        $('.small-products>.products__item').addClass('list');
        $('.filter-large').removeClass('active');
        $('.filter-list').addClass('active');
    });

    $('input[type="file"], select').styler();
    
    var mixer = mixitup('.all-products__inner-box');
});
