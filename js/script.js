jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
    });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 200) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });
  
    /* =====================================
       Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /* ===================================
       Owl Carousel
       ====================================== */

    /* Team Classic */
    $(".team-classic.owl-team").owlCarousel({
        items: 4,
        margin: 30,
        dots: true,
        nav: false,
        loop:true,
        autoplay: true,
        smartSpeed:500,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items: 4
            },
            600: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    $(".testimonials-carousel").owlCarousel({
        items: 4,
        margin: 30,
        dots: true,
        nav: false,
        loop:true,
        autoplay: true,
        smartSpeed:500,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items:2
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });


    $(".news-carousel").owlCarousel({
        items: 1,
        dots: false,
        margin:30,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        loop:true,
        autoplay: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    

});


// popup  //
var imaggepoppup = $(".image-popup");
imaggepoppup.length && $(".image-popup").magnificPopup({
    type: "image",
    callbacks: {
        beforeOpen: function() {
            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomIn")
        }
    },
    gallery: {
        enabled: !0
    }
});
var popupyoutube = $(".popup-youtube");
popupyoutube.length && $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: true
    });