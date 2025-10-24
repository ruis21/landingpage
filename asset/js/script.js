$(function () {

    $(".hamburger-btn").on("click", function () {
        $(".header-nav").stop().slideToggle();
        $(this).toggleClass("active");
    });

    $(".header-menu").on("click", function () {
        if ($(window).width() <= 1024) {
            $(".header-nav").stop().slideUp();
        }
    });

    $(window).on("load", function () {
        setTimeout(() => {
            AOS.refresh();
        }, 300);
    });


    var planSwiper = new Swiper(".plan-wrap", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".plan-wrap .swiper-button-next",
            prevEl: ".plan-wrap .swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });


    var discountSwiper = new Swiper(".discount-wrap", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".discount-next-btn",
            prevEl: ".discount-prev-btn",
        },
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
        }
    });

    var swiper = new Swiper(".review-wrap", {
        slidesPerView: 1.3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
        }
    });

});
