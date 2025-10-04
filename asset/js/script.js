$(function () {
    alert("뽕");
    $(".hamburger-btn").on("click", function () {
        $(".header-nav").stop().slideDown(1000);
    });
    $(".close-btn").on("click", function () {
        $(".header-nav").stop().slideUp(1000);
    });
});
