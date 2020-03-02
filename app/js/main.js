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

    var mixer = mixitup('.all-products__inner-box');
});
 