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
        // arrows: false,
        appendArrows: $('.products__slider-btn'),
        nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>', 
    });

});