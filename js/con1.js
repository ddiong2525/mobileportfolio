$(function () {
    let swiper = new Swiper(".con1_Swiper", {
        navigation: {
            nextEl: ".con1_next",
            prevEl: ".con1_prev",
        },
        mousewheel: false,
        keyboard: true,
        slidesPerView: 1.2,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 500,
        loop:true,
    });
});