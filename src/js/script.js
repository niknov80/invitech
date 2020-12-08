@@include('jquery-3.5.1.min.js');
@@include('owl.carousel.min.js');
@@include('swiper-bundle.min.js');

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

$(function(){
    $('.new-item-image-block').hover(
        function(){
            $(this).find('.new-item-image-block__description').removeClass('visually-hidden');
        }, function(){
            $(this).find('.new-item-image-block__description').addClass('visually-hidden');
        }
    );

    

    var mySwiper = new Swiper('.corusel', {
        on: {
            init: function () {
                $('.corusel__list').find('.swiper-slide-active .corusel-item .button').removeClass('visually-hidden');
                $('.corusel__list').find('.swiper-slide-prev .corusel-item .button').addClass('visually-hidden');
                $('.corusel__list').find('.swiper-slide-next .corusel-item .button').addClass('visually-hidden');
            },

            // transitionEnd: function () {
            //     $('.corusel__list').find('.swiper-slide-active .corusel-item .button').removeClass('visually-hidden');
            // },

            transitionStart: function () {
                $('.corusel__list').find('.swiper-slide-active .corusel-item .button').removeClass('visually-hidden');
            
                $('.corusel__list').find('.swiper-slide-prev .corusel-item .button').addClass('visually-hidden');
                $('.corusel__list').find('.swiper-slide-next .corusel-item .button').addClass('visually-hidden');
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        slidesPerView: 3,
        spaceBetween: 60,
        centeredSlides: true,
        loop: true,
        speed: 1000,

    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 7,
        freeMode: false,
        allowSlidePrev: false,
        allowSlideNext: false,
    //   noSwipingClass: '.gallery-thumbs-slide',
    });

    var galleryTop = new Swiper('.gallery-top', {
        freeMode: false,
        spaceBetween: 10,
        
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        thumbs: {
        swiper: galleryThumbs
        }
    });

    $('.tab').click(function(e){
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tab-content-feature').removeClass('tab-content-feature--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tab-content-feature--active');
    });

    $('.single-product-image__tab').click(function(e){
        e.preventDefault();

        $('.single-product-image__tab').removeClass('single-product-image__tab--active');
        $('.single-product-product-images-block__lg-image').removeClass('single-product-product-images-block__lg-image--active');

        $(this).addClass('single-product-image__tab--active');
        $($(this).attr('href')).addClass('single-product-product-images-block__lg-image--active');
    });

    // $('.promo-switcher__item').click(function(){
    //         $('.promo-switcher__item').removeClass('promo-switcher__item--active');
    //         $(this).addClass('promo-switcher__item--active');
            
    //     });
    $('#promo-switcher--dark').click(function(){
        $('.promo-switcher__item').removeClass('promo-switcher__item--active');
        $(this).addClass('promo-switcher__item--active');
        $('.promo-overlay').removeClass('promo-overlay--light');
        $('.promo-overlay').addClass('promo-overlay--dark');
    });
    $('#promo-switcher--light').click(function(){
        $('.promo-switcher__item').removeClass('promo-switcher__item--active');
        $(this).addClass('promo-switcher__item--active');
        $('.promo-overlay').removeClass('promo-overlay--dark');
        $('.promo-overlay').addClass('promo-overlay--light');
    });


    $('.tab:first').click();
    $('.single-product-image__tab:first').click();
});