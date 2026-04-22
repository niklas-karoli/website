gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    // Hero Title
    gsap.from("#hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from("#hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power4.out"
    });

    // Gallery Item Reveals
    setTimeout(() => {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }, 100);

    // Airplane Animation (SVG) - Smoothly flying across the screen on scroll
    gsap.to("#airplane-icon", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
        },
        left: "90%",
        top: "80%",
        rotation: 45,
        ease: "none"
    });

    // Horizontal Scroll for Gallery
    const horizontalSections = document.querySelectorAll('.horizontal-scroll');
    horizontalSections.forEach(section => {
        const w = section.querySelector('.scroll-content');

        // Wait for images to load to get correct scrollWidth
        window.addEventListener('load', () => {
            const xEnd = (w.scrollWidth - section.offsetWidth + 100) * -1;

            gsap.fromTo(w, { x: 50 }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    start: "top 10%",
                    end: () => `+=${w.scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
        });
    });

    // Entrance animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        gsap.from(sec.querySelectorAll('h2, p, .grid > div'), {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
    });
}

document.addEventListener('DOMContentLoaded', initAnimations);
