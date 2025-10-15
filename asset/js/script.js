$(function () {

    /* 햄버거 메뉴 열기 */
    $(".hamburger-btn").on("click", function () {
        $(".header-nav").stop().slideDown();
        // $("body").css("overflow", "hidden"); // 스크롤 잠금
    });

    /* 햄버거 메뉴 닫기 */
    $(".close-btn").on("click", function () {
        $(".header-nav").stop().slideUp();
        // $("body").css("overflow", "auto"); // 스크롤 복원
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


    var reviewSwiper = new Swiper(".review-wrap", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".review-next-btn",
            prevEl: ".review-prev-btn",
        },
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 }
        }
    });

});
