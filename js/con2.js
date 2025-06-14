document.addEventListener('DOMContentLoaded', () => {

gsap.utils.toArray('.con2_box').forEach(box => {
    gsap.fromTo(box,
        { autoAlpha: 0, scale: 0.8 },
        {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: "top 70%",
                end: "top 30%",
                toggleActions: "play none none reverse",
                // markers: true // 디버깅용
            }
        }
    );
});
});