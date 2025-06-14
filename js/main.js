document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        const curr = window.scrollY;
        if (curr > lastScroll && curr > 10) {
            // 아래로 스크롤: nav 숨김
            nav.style.transform = 'translateY(-100%)';
        } else {
            // 위로 스크롤: nav 노출
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = curr;
    });

/*     const lenis = new Lenis({
        duration: 1.2, // 부드러움 정도 (1~2 추천)
        smooth: true,
        direction: 'vertical',
        gestureOrientation: 'vertical',
        smoothTouch: false, // 모바일에서 기본 스크롤 유지
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf); */
});