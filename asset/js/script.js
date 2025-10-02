$(function () {
    $(".hamburger-btn").on("click", function () {
        $(".header-nav").stop().slideDown();
    });
    $(".close-btn").on("click", function () {
        $(".header-nav").stop().slideUp();
    });
});
