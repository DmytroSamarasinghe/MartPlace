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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".bottom-products .bottom-products__inner").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3, 
        appendArrows: $('.bottom-products__slider-btn'),
        nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 835,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                }
            },
           
        ]
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
    $('.category-page__products .categories>.aside__item-top').on('click', function () {
        $('.categories>.aside__item-bottom').slideToggle();
        $('.categories>.aside__item-top').toggleClass('disable');
    });
    $('.category-page__products .filter-products>.aside__item-top').on('click', function () {
        $('.filter-products>.aside__item-bottom').slideToggle();
        $('.filter-products>.aside__item-top').toggleClass('disable');
    });
    $('.category-page__products .pricing-range>.aside__item-top').on('click', function () {
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
    //blog
    $('.popular-posts-btn').on('click', function () {
        $('.latest-posts__box').removeClass('list');
        $('.popular-posts__box').addClass('list');
        $('.latest-posts-btn').removeClass('active');
        $('.popular-posts-btn').addClass('active');
    });
    $('.latest-posts-btn').on('click', function () {
        $('.latest-posts__box').addClass('list');
        $('.popular-posts__box').removeClass('list');
        $('.popular-posts-btn').removeClass('active');
        $('.latest-posts-btn').addClass('active');
    });
    //blog

 


    // 
    var mixer = mixitup('.all-products__inner-box');
});
