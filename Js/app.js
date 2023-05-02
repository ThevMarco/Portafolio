$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class = "priv_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class = "priv_arrow"><i class="fas fa-angle-right"></i></span>',
        
        responsive: [
            {    
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    prevArrow: '<span class = "priv_arrow"><i class="fas fa-angle-left"></i></span>',
                    nextArrow: '<span class = "priv_arrow"><i class="fas fa-angle-right"></i></span>',
                }
            },
            {    
                breakpoint: 666,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: '<span class = "priv_arrow"><i class="fas fa-angle-left"></i></span>',
                    nextArrow: '<span class = "priv_arrow"><i class="fas fa-angle-right"></i></span>',
                }
            },
            {
                breakpoint: 545,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1,
                    prevArrow: '<span class = "priv_arrow"><i class="fas fa-angle-left"></i></span>',
                    nextArrow: '<span class = "priv_arrow"><i class="fas fa-angle-right"></i></span>',
               
                }
            }
        ]
    });
});